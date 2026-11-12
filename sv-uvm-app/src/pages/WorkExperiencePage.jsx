import { useState } from 'react';
import { Link } from 'react-router-dom';
import { workCases } from '../data/workExperience';
import { svChapters } from '../data/svChapters';
import { uvmChapters } from '../data/uvmChapters';
import { socChapters } from '../data/socChapters';
import './WorkExperiencePage.css';

export default function WorkExperiencePage() {
    const [query, setQuery] = useState('');
    const [area, setArea] = useState('全部');
    const chapters = [['sv', svChapters()], ['uvm', uvmChapters()], ['soc', socChapters()]]
        .flatMap(([type, rows]) => rows.map(row => ({ ...row, type })));
    const visible = workCases.filter(item => (area === '全部' || item.area === area) &&
        [item.title, item.context, ...item.tags].join(' ').toLowerCase().includes(query.trim().toLowerCase()));

    return (
        <div className="chapter-page animate-in experience-page">
            <div className="chapter-tag">MATTHEW / 實務經驗 × 學習</div>
            <h1>我的 DV 實務案例</h1>
            <p className="experience-intro">從 SPI/QSPI ownership 到 SoC 整合驗證，把做過的工作轉成可複習、可說明、可延伸的知識。</p>
            <p className="experience-note">依截至 2026/11/12 分享的工作經驗整理。數字為個人自述；面試提示與學習重點是整理建議，待確認事項不代表已完成成果。</p>
            <div className="experience-stats">
                {[["30+", 'SPI / QSPI tests'], ['100+', 'UCIe tests'], ['50+', 'PVT / SCU tests'], ['2000+', '累積 regressions']].map(([value, label]) => (
                    <div className="card" key={label}><strong>{value}</strong><span>{label}</span></div>
                ))}
            </div>
            <section className="card experience-path" aria-label="學習路徑">
                <h2>怎麼用這些案例準備 Senior？</h2>
                <p>先說明你負責的範圍，再描述如何建立檢查與定位問題，最後用 coverage、regression 或設計確認支持成果。每個案例都保留一個下一步，逐漸補齊證據。</p>
                <Link to="/career" className="btn btn-secondary">對照 DV 職涯指南</Link>
                <Link to="/interview" className="btn btn-secondary">練習通用面試題</Link>
            </section>
            <div className="experience-filters">
                <label>搜尋案例或技術<input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="例如 SVA、UCIe、AXI BFM" /></label>
                <label>工作領域<select value={area} onChange={e => setArea(e.target.value)}>{['全部', ...new Set(workCases.map(item => item.area))].map(value => <option key={value}>{value}</option>)}</select></label>
            </div>
            <p role="status">顯示 {visible.length} / {workCases.length} 個案例</p>
            {visible.length === 0 && <div className="card"><p>沒有符合的案例，試試其他關鍵字或領域。</p><button className="btn btn-secondary" onClick={() => { setQuery(''); setArea('全部'); }}>清除篩選</button></div>}
            <div className="experience-cases">
                {visible.map(item => {
                    const related = chapters.filter(ch => item.related.some(term => ch.title.toLowerCase().includes(term.toLowerCase()))).slice(0, 3);
                    return <article className="card" key={item.id} id={item.id}>
                        <span className="experience-area">{item.area}</span>
                        <h2>{item.title}</h2>
                        <div className="skill-items">{item.tags.map(tag => <span className="skill-badge" key={tag}>{tag}</span>)}</div>
                        <p>{item.context}</p>
                        <h3>我的工作內容</h3>
                        <ul>{item.actions.map(action => <li key={action}>{action}</li>)}</ul>
                        <div className="experience-result"><h3>成果與目前狀態</h3><p>{item.result}</p></div>
                        <h3>從實務學到什麼</h3><p>{item.lesson}</p>
                        <details><summary>面試練習：{item.question}</summary><p><strong>回答提示：</strong>{item.answer}</p></details>
                        <p className="experience-next"><strong>下一步：</strong>{item.next}</p>
                        {related.length > 0 && <div className="experience-related"><span>回到課程</span>{related.map(ch => <Link key={`${ch.type}-${ch.id}`} to={`/${ch.type}/${ch.id}`}>{ch.title} →</Link>)}</div>}
                    </article>;
                })}
            </div>
        </div>
    );
}
