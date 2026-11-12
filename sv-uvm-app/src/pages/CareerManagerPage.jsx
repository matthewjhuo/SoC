import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CareerManagerPage.css';

const KEY = 'soc_career_manager_v1';
const skills = ['SystemVerilog', 'UVM', 'SVA', 'AMBA', 'Formal', 'Low-power', 'AI/HPC', 'UCIe'];
const demonstrated = ['SystemVerilog', 'UVM', 'SVA', 'AMBA', 'Formal', 'Low-power', 'UCIe'];
const stages = ['待評估', '準備投遞', '已投遞', '面試中', 'Offer', '已結束'];
const emptyJob = { company: '', role: '', city: '新竹', level: '3–5 年 / Mid-level', url: '', stage: '待評估', skills: [], gap: '', notes: '', nextDate: '' };
const evidence = [
    ['ownership', '獨立負責與交付', 'SPI/QSPI：補上 test plan、coverage closure 與問題追蹤的可分享證據。'],
    ['depth', '技術深度', 'UCIe PHY training、lane repair 或 link reset：整理一個定位根因的案例。'],
    ['quality', '驗證品質', 'PVT、PLL/Clock/Reset、Frequency Monitor：說明 corner case 與 checker 如何避免漏檢。'],
    ['collaboration', '跨團隊合作', '記錄與 designer 釐清規格、收斂問題和確認修正的實際貢獻。'],
    ['scale', '方法與影響力', '整理可重用 sequence、驗證流程或 AI Agent 改善，補充採用範圍與前後差異。'],
];
const prompts = [
    ['spi', 'SPI/QSPI ownership', '如何由規格建立 test plan，並證明 coverage closure？'],
    ['ucie', 'UCIe debug', '如何區分 training、lane repair 與資料完整性問題？'],
    ['clock', 'Clock / Reset', 'WDT 重複 reset 時，如何避免時序 assertion 誤報與漏檢？'],
    ['pvt', 'PVT / Frequency Monitor', '如何建立預期值、容忍誤差並驗證低功耗切換？'],
    ['senior', 'Senior 影響力', '你的改善讓團隊在哪些品質、效率或交付指標受益？'],
];

function load() {
    try {
        const raw = localStorage.getItem(KEY);
        if (!raw) return { jobs: [], answers: {}, evidence: {} };
        const data = JSON.parse(raw);
        if (!Array.isArray(data.jobs) || !data.answers || !data.evidence ||
            !data.jobs.every(j => typeof j.id === 'string' && typeof j.company === 'string' && typeof j.role === 'string' && Array.isArray(j.skills))) throw new Error();
        return data;
    } catch { return { jobs: [], answers: {}, evidence: {}, loadError: true }; }
}

export default function CareerManagerPage() {
    const [data, setData] = useState(load);
    const [error, setError] = useState('');
    const [tab, setTab] = useState('jobs');
    const [form, setForm] = useState(null);
    const [query, setQuery] = useState('');
    const [stage, setStage] = useState('全部');
    const [deleteId, setDeleteId] = useState(null);
    const [notice, setNotice] = useState('');
    function update(next) {
        if (data.loadError) { setError('既有資料無法讀取，已停止覆寫。請先保留瀏覽器資料並排查。'); return false; }
        try { localStorage.setItem(KEY, JSON.stringify(next)); setData(next); setError(''); return true; }
        catch { setError('儲存失敗，請檢查瀏覽器儲存空間或隱私設定。輸入內容尚未保存。'); return false; }
    }
    function saveJob(event) {
        event.preventDefault();
        if (!form.company.trim() || !form.role.trim()) { setError('請填寫公司與職稱。'); return; }
        if (form.url) {
            try { if (!['https:', 'http:'].includes(new URL(form.url).protocol)) throw new Error(); }
            catch { setError('職缺連結需為有效的 http 或 https 網址。'); return; }
        }
        const job = { ...form, company: form.company.trim(), role: form.role.trim(), id: form.id || crypto.randomUUID() };
        if (update({ ...data, jobs: form.id ? data.jobs.map(j => j.id === form.id ? job : j) : [...data.jobs, job] })) { setForm(null); setNotice('職缺已儲存。'); }
    }
    function backup() {
        const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
        const a = document.createElement('a'); a.href = url; a.download = 'soc-career-backup.json'; a.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
    const visible = data.jobs.filter(j => (stage === '全部' || j.stage === stage) && `${j.company} ${j.role} ${j.city}`.toLowerCase().includes(query.toLowerCase()));
    const done = evidence.filter(([id]) => data.evidence[id]?.done).length;
    return <div className="chapter-page animate-in career-manager">
        <div className="chapter-tag">MATTHEW / CAREER WORKSPACE</div>
        <h1>職涯管理站</h1>
        <p>台灣 SoC / ASIC DV · 優先 3–5 年經驗 · 保留年資彈性的 Senior 機會</p>
        <div className="cm-links"><Link to="/experience">我的 DV 實務案例 →</Link><Link to="/career">職涯指南 →</Link><Link to="/interview">面試題庫 →</Link><a href="https://chatgpt.com/share/6af5beef-a34c-83e8-9657-30743117f11b" target="_blank" rel="noopener noreferrer">原始討論 ↗</a></div>
        <p className="cm-muted">資料僅保存在目前瀏覽器，不會跨裝置同步。請定期匯出備份。職缺由你新增，尚未串接即時徵才或自動搜尋。</p>
        {(error || data.loadError) && <p role="alert" className="cm-error">{error || '既有資料無法讀取，已停止覆寫。'}</p>}
        <div className="cm-stats">{[[data.jobs.length, '追蹤職缺'], [data.jobs.filter(j => j.stage === '面試中').length, '進行中面試'], [`${done} / ${evidence.length}`, '已備妥升遷證據']].map(([n, label]) => <div className="card" key={label}><strong>{n}</strong><span>{label}</span></div>)}</div>
        <div className="cm-toolbar" aria-label="管理分類">{[['jobs', '求職追蹤'], ['interview', '面試準備'], ['promotion', 'Senior 升遷']].map(([id, label]) => <button type="button" key={id} aria-pressed={tab === id} className={`btn ${tab === id ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setTab(id)}>{label}</button>)}<button className="btn btn-secondary" onClick={backup}>匯出備份</button></div>
        <p role="status">{notice}</p>
        {tab === 'jobs' && <>
            <div className="cm-toolbar"><label>搜尋公司／職稱／地點<input value={query} onChange={e => setQuery(e.target.value)} placeholder="例如 NVIDIA、SoC、台南" /></label><label>狀態<select value={stage} onChange={e => setStage(e.target.value)}>{['全部', ...stages].map(s => <option key={s}>{s}</option>)}</select></label><button className="btn btn-primary" onClick={() => { setForm({ ...emptyJob, skills: [] }); setError(''); }}>＋ 新增職缺</button></div>
            {form && <form className="card cm-form" onSubmit={saveJob}>
                <h2>{form.id ? '編輯職缺' : '新增台灣職缺'}</h2>
                <div className="cm-grid">{[['company', '公司', 'text'], ['role', '職稱', 'text'], ['city', '台灣工作地點', 'text'], ['url', '職缺來源網址', 'url'], ['nextDate', '下次追蹤日期', 'date']].map(([key, label, type]) => <label key={key}>{label}<input type={type} required={['company', 'role', 'city'].includes(key)} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} /></label>)}<label>職級<select value={form.level} onChange={e => setForm({ ...form, level: e.target.value })}>{['3–5 年 / Mid-level', 'Senior（年資彈性待確認）', '其他／待確認'].map(s => <option key={s}>{s}</option>)}</select></label><label>進度<select value={form.stage} onChange={e => setForm({ ...form, stage: e.target.value })}>{stages.map(s => <option key={s}>{s}</option>)}</select></label></div>
                <fieldset><legend>JD 要求的技能</legend><div className="cm-checks">{skills.map(s => <label key={s}><input type="checkbox" checked={form.skills.includes(s)} onChange={e => setForm({ ...form, skills: e.target.checked ? [...form.skills, s] : form.skills.filter(x => x !== s) })} />{s}</label>)}</div></fieldset>
                <label>能力差距／待確認事項<textarea value={form.gap} onChange={e => setForm({ ...form, gap: e.target.value })} placeholder="例如 CPU microarchitecture、SerDes domain、年資要求" /></label>
                <label>求職筆記／下一步<textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} /></label>
                <div className="cm-toolbar"><button className="btn btn-primary" type="submit">儲存職缺</button><button className="btn btn-secondary" type="button" onClick={() => setForm(null)}>取消</button></div>
            </form>}
            <p className="cm-muted">技能匹配以已整理的個人經驗比對你勾選的 JD 標籤；AI/HPC 尚需補充直接證據。比例不代表錄取機率，也未涵蓋所有職缺要求。</p>
            {!visible.length && <div className="card"><h2>{data.jobs.length ? '沒有符合的職缺' : '從一個目標職缺開始'}</h2><p>{data.jobs.length ? '請調整搜尋或狀態篩選。' : '貼上官方職缺連結，記錄需求、目前進度與下一步。這裡不會預填未查證的職缺或投遞狀態。'}</p></div>}
            <div className="cm-grid">{visible.map(j => { const matched = j.skills.filter(s => demonstrated.includes(s)); const missing = j.skills.filter(s => !demonstrated.includes(s)); return <article className="card" key={j.id}>
                <span className="skill-badge">{j.stage}</span><h2>{j.company}</h2><h3>{j.role}</h3><p>{j.city} · {j.level}</p>
                <p><strong>{j.skills.length ? `${Math.round(matched.length / j.skills.length * 100)}% 技能標籤匹配` : '尚未評估技能匹配'}</strong></p><p>已有經驗：{matched.join('、') || '尚未選擇'}</p>{missing.length > 0 && <p>待補證據：{missing.join('、')}</p>}
                {j.gap && <p className="cm-pre">待確認：{j.gap}</p>}{j.notes && <p className="cm-pre">{j.notes}</p>}{j.nextDate && <p>下次追蹤：{j.nextDate}</p>}{/^https?:\/\//i.test(j.url) && <a href={j.url} target="_blank" rel="noopener noreferrer">查看職缺來源 ↗</a>}
                <div className="cm-toolbar"><button className="btn btn-secondary" onClick={() => { setForm({ ...j }); setError(''); }}>編輯</button><button className="btn btn-secondary" onClick={() => setDeleteId(j.id)}>刪除</button></div>
                {deleteId === j.id && <div role="group" aria-label="確認刪除"><p>確定刪除 {j.company} 的這筆追蹤？</p><button className="btn btn-secondary" onClick={() => { if (update({ ...data, jobs: data.jobs.filter(x => x.id !== j.id) })) { setDeleteId(null); if (form?.id === j.id) setForm(null); setNotice('已刪除職缺。'); } }}>確定刪除</button> <button className="btn btn-secondary" onClick={() => setDeleteId(null)}>保留</button></div>}
            </article>; })}</div>
        </>}
        {tab === 'interview' && <><h2>把實務經驗練成面試回答</h2><p>依「情境 → 責任 → 行動 → 結果」整理，寫出你實際負責的範圍與證據。筆記會在輸入時儲存。</p>{prompts.map(([id, title, question]) => <section className="card cm-section" key={id}><h3>{title}</h3><p>{question}</p><label>我的回答<textarea rows={5} value={data.answers[id] || ''} onChange={e => update({ ...data, answers: { ...data.answers, [id]: e.target.value } })} placeholder="我負責…；遇到…；我透過…定位；最後以…驗證結果。" /></label><Link to="/experience">查閱實務案例 →</Link></section>)}</>}
        {tab === 'promotion' && <><h2>Senior 升遷證據清單</h2><p>此清單是準備工具，並非公司正式升遷標準。勾選代表你已備妥證據。</p>{evidence.map(([id, title, hint]) => <section className="card cm-section" key={id}><label className="cm-check"><input type="checkbox" checked={!!data.evidence[id]?.done} onChange={e => update({ ...data, evidence: { ...data.evidence, [id]: { ...data.evidence[id], done: e.target.checked } } })} /><strong>{title}</strong></label><p>{hint}</p><label>成果與證據筆記<textarea rows={3} value={data.evidence[id]?.note || ''} onChange={e => update({ ...data, evidence: { ...data.evidence, [id]: { ...data.evidence[id], note: e.target.value } } })} placeholder="具體貢獻、量化成果、可分享的佐證與待補項目" /></label></section>)}</>}
    </div>;
}
