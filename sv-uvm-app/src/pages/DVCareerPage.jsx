import { Briefcase, Cpu, Wrench, TrendingUp, Shield, Zap, Network, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const skillCategories = [
    {
        title: '核心語言能力', icon: <BookOpen size={20} style={{ color: 'var(--color-accent-cyan)' }} />,
        skills: ['SystemVerilog', 'UVM', 'SVA (斷言)', 'OOP 概念', '約束隨機化', '功能覆蓋率']
    },
    {
        title: '常見匯流排協議', icon: <Network size={20} style={{ color: 'var(--color-accent-purple)' }} />,
        skills: ['AMBA AXI4', 'AMBA AHB', 'AMBA APB', 'SPI', 'I²C', 'UART', 'JTAG', 'PCIe', 'USB', 'Ethernet']
    },
    {
        title: 'EDA 工具鏈', icon: <Wrench size={20} style={{ color: 'var(--color-accent-orange)' }} />,
        skills: ['Synopsys VCS', 'Synopsys Verdi', 'Cadence Xcelium', 'Siemens Questa', 'Synopsys VC Formal', 'Cadence JasperGold', 'Synopsys DVE', 'Wave Viewer']
    },
    {
        title: '驗證方法論', icon: <Shield size={20} style={{ color: 'var(--color-accent-pink)' }} />,
        skills: ['覆蓋率驅動驗證 (CDV)', '約束隨機驗證 (CRV)', '形式化驗證', 'Regression 管理', '驗證計劃撰寫', 'Bug 追蹤與分析']
    },
    {
        title: '進階技能', icon: <Zap size={20} style={{ color: 'var(--color-accent-yellow)' }} />,
        skills: ['Power-Aware 驗證 (UPF)', 'DPI-C 整合', 'VIP 使用', '寄存器模型 (RAL)', 'Clock Domain Crossing (CDC)', '低功耗驗證', 'Emulation', 'FPGA Prototyping']
    }
];

const careerPath = [
    { level: 'Junior DV Engineer', yr: '0-2 年', color: 'var(--color-accent-cyan)', desc: '學習 SV/UVM 基礎、撰寫簡單測試、理解基本協議、debug waveform' },
    { level: 'DV Engineer', yr: '2-5 年', color: 'var(--color-accent-blue)', desc: '獨立搭建驗證環境、撰寫驗證計劃、開發 VIP、覆蓋率收斂' },
    { level: 'Senior DV Engineer', yr: '5-8 年', color: 'var(--color-accent-purple)', desc: '負責複雜子系統驗證、效能優化、指導初級工程師、參與架構決策' },
    { level: 'Staff / Lead Engineer', yr: '8+ 年', color: 'var(--color-accent-pink)', desc: '驗證策略制定、跨團隊協作、方法論改進、流片經驗豐富' },
];

const protocols = [
    { name: 'AXI4', desc: '高性能系統匯流排，支援突發傳輸、亂序完成、多 outstanding 事務', use: 'CPU ↔ Memory, DMA' },
    { name: 'AHB', desc: '高吞吐但較簡單的匯流排協議，單主多從', use: '系統匯流排' },
    { name: 'APB', desc: '低功耗、低速的簡單協議，適合配置寄存器', use: '周邊配置' },
    { name: 'SPI', desc: '全雙工串列介面，主從架構', use: 'Flash, Sensor' },
    { name: 'I²C', desc: '雙線串列協議，支援多主多從', use: 'EEPROM, RTC' },
    { name: 'UART', desc: '非同步串列通信，簡單但通用', use: 'Debug, Console' },
];

export default function DVCareerPage() {
    return (
        <div className="chapter-page animate-in">
            <div className="chapter-tag" style={{ background: 'rgba(247,37,133,0.1)', color: 'var(--color-accent-pink)', borderColor: 'rgba(247,37,133,0.2)' }}>
                💼 DV 職涯指南
            </div>
            <h1>SoC Design Verification Engineer</h1>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: '32px' }}>
                成為專業的晶片驗證工程師所需的完整技能樹和職涯發展路徑。
            </p>

            {/* Career Path */}
            <div className="card" style={{ marginBottom: '24px' }}>
                <h2>我的職涯管理站</h2>
                <p>追蹤台灣 DV 職缺、整理面試準備，累積 Senior 升遷證據。</p>
                <Link to="/career-manager" className="btn btn-primary">開啟職涯管理站</Link>
            </div>
            <div className="card" style={{ marginBottom: '24px' }}>
                <h2>把工作經驗變成升遷與面試證據</h2>
                <p>以 Matthew 的 SPI/QSPI、UCIe、PVT、Clock/Reset 與 Frequency Monitor 案例，練習說明 ownership、驗證方法、成果與待確認事項。</p>
                <Link to="/experience" className="btn btn-primary">查看我的 DV 實務案例</Link>
            </div>
            <h2 style={{ marginBottom: '20px' }}>📈 職涯發展路徑</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
                {careerPath.map((c, i) => (
                    <div key={i} className="card" style={{ borderLeftWidth: '3px', borderLeftColor: c.color }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                            <span style={{ color: c.color, fontWeight: 700, fontSize: '1.1rem' }}>{c.level}</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', background: 'var(--color-bg-glass)', padding: '2px 10px', borderRadius: 'var(--radius-full)' }}>{c.yr}</span>
                        </div>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>{c.desc}</p>
                    </div>
                ))}
            </div>

            {/* Skill Tree */}
            <h2 style={{ marginBottom: '20px' }}>🌳 技能樹</h2>
            <div className="skill-tree" style={{ marginBottom: '48px' }}>
                {skillCategories.map((cat, i) => (
                    <div key={i} className="skill-category">
                        <div className="skill-category-title">{cat.icon} {cat.title}</div>
                        <div className="skill-items">
                            {cat.skills.map((s, j) => <span key={j} className="skill-badge">{s}</span>)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Protocols */}
            <h2 style={{ marginBottom: '20px' }}>🔌 常見匯流排協議</h2>
            <table className="info-table" style={{ marginBottom: '48px' }}>
                <thead><tr><th>協議</th><th>說明</th><th>典型應用</th></tr></thead>
                <tbody>
                    {protocols.map((p, i) => (
                        <tr key={i}><td style={{ fontWeight: 600, color: 'var(--color-accent-cyan)' }}>{p.name}</td><td>{p.desc}</td><td>{p.use}</td></tr>
                    ))}
                </tbody>
            </table>

            {/* Tools */}
            <h2 style={{ marginBottom: '20px' }}>🛠️ EDA 工具介紹</h2>
            <div className="grid-2" style={{ marginBottom: '32px' }}>
                {[
                    { name: 'Synopsys VCS', desc: '業界領先的模擬器，支援 SystemVerilog、UVM，高性能編譯模擬', color: 'var(--color-accent-cyan)' },
                    { name: 'Synopsys Verdi', desc: '強大的波形和 debug 工具，支援 fsdb、schematic、source 層級除錯', color: 'var(--color-accent-blue)' },
                    { name: 'Cadence Xcelium', desc: '多核平行模擬器，兼容 UVM、支援 UPF 功耗驗證', color: 'var(--color-accent-purple)' },
                    { name: 'Siemens Questa', desc: '整合模擬、形式化和覆蓋率分析的驗證平台', color: 'var(--color-accent-pink)' },
                ].map((tool, i) => (
                    <div key={i} className="card">
                        <h4 style={{ color: tool.color, marginBottom: '8px' }}>{tool.name}</h4>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', margin: 0 }}>{tool.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
