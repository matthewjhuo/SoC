import { useEffect, useMemo, useState } from 'react';
import { Play, TerminalSquare, AlertTriangle, CheckCircle2, HardDrive } from 'lucide-react';
import CodeBlock from './CodeBlock';
import MermaidChart from './MermaidChart';

// Source files are read on demand from the merged repo folder (mx25l1605-spi-flash/),
// so the platform always shows the same code that is committed in the repository.
const SOURCES = import.meta.glob(
    [
        '../../../mx25l1605-spi-flash/verification/**/*.sv',
        '../../../mx25l1605-spi-flash/verification/sim/Makefile',
        '../../../mx25l1605-spi-flash/mx25L1605.v'
    ],
    { query: '?raw', import: 'default' }
);

const ROOT = '../../../mx25l1605-spi-flash/';
const DUT_PATH = ROOT + 'mx25L1605.v';
const SMOKE_PATH = ROOT + 'verification/test_cases/simple_basic_test.sv';

const FILE_GROUPS = [
    ['DUT', ['mx25L1605.v']],
    ['Interface / Transaction', ['verification/interfaces/spi_interface.sv', 'verification/utils/spi_transaction.sv']],
    ['Agents', ['verification/agents/spi_driver.sv', 'verification/agents/spi_monitor.sv']],
    ['Scoreboard / Sequence', ['verification/scoreboard/spi_scoreboard.sv', 'verification/sequences/basic_sequence.sv']],
    ['Testbench / Tests', ['verification/testbench/spi_flash_tb.sv', 'verification/test_cases/simple_basic_test.sv', 'verification/test_cases/test_basic_id.sv', 'verification/test_cases/test_write_read.sv']],
    ['Sim', ['verification/sim/Makefile']]
];

const COMMANDS = [
    ['06h', 'WREN', 'Write Enable', '設定 WEL，之後才能 Program / Erase / WRSR'],
    ['04h', 'WRDI', 'Write Disable', '清除 WEL'],
    ['9Fh', 'RDID', 'Read ID', '回傳 C2h (MXIC) / 20h (Type) / 15h (16Mb)'],
    ['05h', 'RDSR', 'Read Status', 'bit0 = WIP, bit1 = WEL, BP 保護位元'],
    ['01h', 'WRSR', 'Write Status', '寫入 BP 區塊保護位元'],
    ['03h', 'READ', 'Read Data', '3-byte 位址後連續讀出'],
    ['0Bh', 'FAST_READ', 'Fast Read', '位址後多 1 個 dummy byte'],
    ['02h', 'PP', 'Page Program', '最多 256 bytes，tPP 約 3 ms'],
    ['20h / D8h', 'SE', 'Sector Erase', '4KB / 64KB 抹除'],
    ['60h / C7h', 'CE', 'Chip Erase', '整顆抹除（模型中耗時很長）'],
    ['B9h / ABh', 'DP / RDP', 'Deep Power-down / Release', 'ABh 同時可讀 Electronic ID'],
    ['90h', 'REMS', 'Read Mfr / Device ID', '回傳 C2h + Device ID'],
    ['A5h / B5h', 'EN4K / EX4K', 'Enter / Exit 4Kb sector', '切換額外 4Kb 區塊']
];

const TESTS = [
    { file: 'simple_basic_test.sv', sim: 'iverilog ✅', status: 'pass', checks: 'Read ID (9Fh)、Read Status (05h)、Write Enable (06h) → WEL 0→1', result: '3 / 3 PASS（已在本機 iverilog 實跑）' },
    { file: 'test_basic_id.sv', sim: 'VCS / Xcelium / Questa', status: 'commercial', checks: 'RDID 9Fh、REMS 90h、RES ABh 三種 ID 讀取', result: '使用 class constraint / inside，iverilog 不支援' },
    { file: 'test_write_read.sv', sim: 'VCS / Xcelium / Questa', status: 'commercial', checks: 'WREN → Page Program (i ^ 0xA5 pattern) → RDSR 輪詢 WIP → READ / FAST_READ 比對', result: '同上，需商用模擬器' },
    { file: 'spi_flash_tb.sv', sim: 'VCS / Xcelium / Questa', status: 'commercial', checks: 'Sequence → Driver → DUT → Monitor → Scoreboard：ID、讀、寫、抹除、電源、混合、壓力測試', result: '完整 class-based 架構，需商用模擬器' }
];

const ARCH = `flowchart LR
    SEQ["basic_sequence<br/>產生 spi_transaction"] --> DRV["spi_driver<br/>CS# / SCLK / SI"]
    DRV --> IF["spi_interface"]
    IF --> DUT["flash_16m<br/>(mx25L1605.v)"]
    DUT --> IF
    IF --> MON["spi_monitor<br/>擷取 SO"]
    MON --> SB["spi_scoreboard<br/>expected vs actual"]
    SEQ -. expected .-> SB`;

const statusStyle = {
    pass: { color: 'var(--color-accent-cyan)' },
    commercial: { color: 'var(--color-accent-orange)' }
};

export default function Mx25l1605FlashPanel() {
    const [selected, setSelected] = useState('verification/test_cases/simple_basic_test.sv');
    const [code, setCode] = useState('');
    const [loadError, setLoadError] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [simLog, setSimLog] = useState('');

    const available = useMemo(() => new Set(Object.keys(SOURCES).map(k => k.replace(ROOT, ''))), []);

    useEffect(() => {
        let alive = true;
        const loader = SOURCES[ROOT + selected];
        setCode('');
        setLoadError('');
        if (!loader) { setLoadError(`找不到 ${selected}`); return; }
        loader().then(text => { if (alive) setCode(text); }).catch(e => { if (alive) setLoadError(e.message); });
        return () => { alive = false; };
    }, [selected]);

    const runSmoke = async () => {
        setIsRunning(true);
        setSimLog('載入 DUT 與 simple_basic_test.sv，呼叫 Icarus Verilog（模擬時間含 10 ms 上電等待，約需數秒）...');
        try {
            const [dut, tb] = await Promise.all([SOURCES[DUT_PATH](), SOURCES[SMOKE_PATH]()]);
            const res = await fetch('/api/compile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code: `${dut}\n${tb}` })
            });
            const data = await res.json();
            setSimLog(data.log || '(無輸出)');
        } catch (e) {
            setSimLog(`無法執行模擬：${e.message}\n\n此功能需要本機開發伺服器 (npm run dev) 並安裝 iverilog；部署版 / iOS App 中請改用下方指令在本機執行。`);
        }
        setIsRunning(false);
    };

    const fileName = selected.split('/').pop();
    const lang = fileName === 'Makefile' ? 'bash' : 'verilog';

    return (
        <div className="tab-pane animate-in">
            <h3 style={{ marginBottom: '8px', color: 'var(--color-accent-cyan)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HardDrive size={20} /> MX25L1605 SPI Flash 驗證環境
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '20px' }}>
                延伸 APB-SPI Master 的下游：以 Macronix <b>MX25L1605</b>（16Mbit Serial NOR Flash）行為模型為 DUT，
                建立 SystemVerilog 驗證環境，涵蓋 ID 讀取、狀態暫存器、寫入致能、Page Program、讀取與抹除流程。
                原始碼位於 repo 的 <code>mx25l1605-spi-flash/</code>。
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', marginBottom: '24px' }}>
                {[['13', '支援的 SPI 指令組'], ['6', 'TB 元件 (IF / Txn / Drv / Mon / SB / Seq)'], ['4', 'Testbench / 測試案例'], ['3 / 3', 'iverilog smoke test 通過']].map(([v, l]) => (
                    <div className="card" key={l} style={{ padding: '16px' }}>
                        <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-accent-cyan)' }}>{v}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{l}</div>
                    </div>
                ))}
            </div>

            <h4 style={{ marginBottom: '12px' }}>驗證環境架構</h4>
            <MermaidChart chart={ARCH} />

            <h4 style={{ margin: '28px 0 12px' }}>DUT 支援的 SPI 指令</h4>
            <div style={{ overflowX: 'auto' }}>
                <table className="info-table" style={{ width: '100%', marginBottom: '28px' }}>
                    <thead><tr><th style={{ width: '100px' }}>Opcode</th><th style={{ width: '110px' }}>名稱</th><th style={{ width: '200px' }}>功能</th><th>驗證重點</th></tr></thead>
                    <tbody>
                        {COMMANDS.map(([op, name, fn, note]) => (
                            <tr key={name}>
                                <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent-cyan)', fontWeight: 700 }}>{op}</td>
                                <td style={{ fontFamily: 'var(--font-mono)' }}>{name}</td>
                                <td>{fn}</td>
                                <td style={{ color: 'var(--color-text-secondary)' }}>{note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h4 style={{ marginBottom: '12px' }}>測試案例與模擬器相容性</h4>
            <div style={{ overflowX: 'auto' }}>
                <table className="info-table" style={{ width: '100%', marginBottom: '28px' }}>
                    <thead><tr><th style={{ width: '170px' }}>檔案</th><th style={{ width: '150px' }}>模擬器</th><th>檢查內容</th><th style={{ width: '220px' }}>狀態</th></tr></thead>
                    <tbody>
                        {TESTS.map(t => (
                            <tr key={t.file}>
                                <td style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{t.file}</td>
                                <td style={{ fontSize: '0.85rem' }}>{t.sim}</td>
                                <td style={{ color: 'var(--color-text-secondary)' }}>{t.checks}</td>
                                <td style={{ fontSize: '0.85rem', fontWeight: 600, ...statusStyle[t.status] }}>{t.result}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="card card-glow-cyan" style={{ marginBottom: '28px' }}>
                <h4 style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertTriangle size={18} style={{ color: 'var(--color-accent-orange)' }} /> Debug 案例：為什麼 Flash 一直回 0xzz？
                </h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '12px' }}>
                    合併進來時，原版 <code>simple_basic_test</code> 只有 1 / 3 通過，所有讀回值都是 <code>0xzz</code>。追查後有三個問題：
                </p>
                <ol style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '12px' }}>
                    <li><b>沒有等上電時間 tPUW</b>：模型在 <code>$time &gt; `PUW_TIME</code>（10 ms）之前完全忽略 SI，而 testbench 在 3.35 µs 就 <code>$finish</code>，Flash 根本沒收到指令。</li>
                    <li><b>SCLK free-running</b>：WREN 規定第 8 個 bit 後 CS# 必須立刻拉高；連續跑的時脈在 CS# 拉高前多送一個邊緣，WREN 被判成 bad command。改成由 task 產生 SPI mode 0 時脈。</li>
                    <li><b>假 PASS</b>：Read Status 測試不檢查任何值就直接算通過，所以「33%」裡唯一的 PASS 其實也是假的。改為檢查上電後 WIP = 0、WEL = 0。</li>
                </ol>
                <p style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-cyan)' }}>
                    <CheckCircle2 size={16} /> 修正後：ID = C2 / 20 / 15，Status = 00h，WREN 後 Status = 02h（WEL 0→1），3 / 3 PASS。
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>
                    面試重點：先確認 DUT 有沒有「真的看到」stimulus（時序前提、reset / power-up 條件），再懷疑 DUT 本身；並且檢查每個 test 是否真的會 fail。
                </p>
            </div>

            <h4 style={{ marginBottom: '12px' }}>本機執行 smoke test</h4>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={runSmoke} disabled={isRunning} style={{ padding: '10px 20px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Play size={16} /> {isRunning ? '模擬中...' : '執行 MX25L1605 smoke test'}
                </button>
            </div>
            {simLog && (
                <div className="code-block-console" style={{ marginBottom: '16px' }}>
                    <div className="console-header"><TerminalSquare size={14} /> Icarus Verilog 模擬終端</div>
                    <pre className="console-body" style={{ maxHeight: '300px', overflowY: 'auto' }}>{simLog}</pre>
                </div>
            )}
            <CodeBlock lang="bash" title="terminal" code={`cd mx25l1605-spi-flash/verification/sim\nmake run_simple        # iverilog: compile + run simple_basic_test\nmake wave_simple       # 以 GTKWave 開啟波形\n\n# 不使用 make：\niverilog -g2012 -o t.vvp ../../mx25L1605.v ../test_cases/simple_basic_test.sv && vvp t.vvp`} />

            <h4 style={{ margin: '28px 0 12px' }}>原始碼瀏覽</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '12px' }}>
                {FILE_GROUPS.map(([group, files]) => (
                    <div key={group}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '6px' }}>{group}</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {files.filter(f => available.has(f)).map(f => (
                                <button key={f} className={`btn ${selected === f ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setSelected(f)} style={{ padding: '4px 10px', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                                    {f.split('/').pop()}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {loadError && <p style={{ color: 'var(--color-accent-pink)' }}>{loadError}</p>}
            {!loadError && !code && <p style={{ color: 'var(--color-text-muted)' }}>載入中...</p>}
            {code && <CodeBlock code={code} lang={lang} title={selected} />}
        </div>
    );
}

