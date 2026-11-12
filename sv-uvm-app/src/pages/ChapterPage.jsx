import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Home } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import Quiz from '../components/Quiz';
import MermaidChart from '../components/MermaidChart';
import { svChapters as getSvChapters } from '../data/svChapters';
import { uvmChapters as getUvmChapters } from '../data/uvmChapters';
import { socChapters as getSocChapters } from '../data/socChapters';

export default function ChapterPage({ type }) {
    const { chapterId } = useParams();
    const [progress, setProgress] = useState({});
    const svChapters = getSvChapters();
    const uvmChapters = getUvmChapters();
    const socChapters = getSocChapters();

    if (!svChapters?.length || !uvmChapters?.length || !socChapters?.length) {
        return (
            <div className="chapter-page animate-in" style={{ textAlign: 'center', padding: '100px' }}>
                <h2>📚 資料載入中...</h2>
                <p style={{ color: 'var(--color-text-secondary)' }}>正在讀取章節資料，請稍候。</p>
            </div>
        );
    }

    let chapters = type === 'sv' ? svChapters : (type === 'uvm' ? uvmChapters : socChapters);

    let chapter = chapters.find(c => c.id === chapterId);
    const chapterIdx = chapters.findIndex(c => c.id === chapterId);
    const prevCh = chapterIdx > 0 ? chapters[chapterIdx - 1] : null;
    const nextCh = chapterIdx < chapters.length - 1 ? chapters[chapterIdx + 1] : null;

    useEffect(() => {
        try {
            const saved = localStorage.getItem('sv_uvm_progress');
            if (saved) setProgress(JSON.parse(saved));
        } catch {
            // A manually edited or old value must not prevent a chapter from rendering.
            localStorage.removeItem('sv_uvm_progress');
        }
        window.scrollTo(0, 0);
    }, [chapterId]);

    const toggleComplete = () => {
        const updated = { ...progress, [chapterId]: !progress[chapterId] };
        setProgress(updated);
        localStorage.setItem('sv_uvm_progress', JSON.stringify(updated));
    };

    if (!chapter) {
        return (
            <div className="chapter-page" style={{ textAlign: 'center', paddingTop: '100px' }}>
                <h2>📭 章節不存在</h2>
                <p style={{ color: 'var(--color-text-secondary)', margin: '16px 0' }}>找不到指定的章節。</p>
                <Link to="/" className="btn btn-primary">返回首頁</Link>
            </div>
        );
    }

    const isSV = type === 'sv';
    const isUVM = type === 'uvm';
    const isSOC = type === 'soc';

    return (
        <div className="chapter-page animate-in">
            {/* Breadcrumb */}
            <div className="chapter-breadcrumb">
                <Link to="/"><Home size={14} /></Link>
                <span>{isSV ? 'SystemVerilog' : (isUVM ? 'UVM' : 'SoC Design')}</span>
                <ChevronRight size={14} />
                <span style={{ color: 'var(--color-text-primary)' }}>Ch{chapter.num}</span>
            </div>

            {/* Tag + Title */}
            <div className={`chapter-tag ${type}`}>
                {isSV ? `📘 SV: ${chapter.group || '核心知識'}` :
                    isUVM ? `🏗️ UVM: ${chapter.group || '框架結構'}` :
                        `⚡ SoC: ${chapter.group || '系統設計'}`} · 第 {chapter.num} 章
            </div>
            <h1 style={{ marginBottom: '8px' }}>{chapter.title}</h1>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: '32px' }}>{chapter.desc}</p>

            {/* Content */}
            <div className="chapter-content">
                {chapter.sections.map((sec, idx) => (
                    <section key={idx}>
                        <h2>{sec.title}</h2>
                        {sec.content && sec.content.split('\n').map((p, i) => {
                            if (p.trim().startsWith('```')) return null;
                            if (p.trim().startsWith('- ')) {
                                return <li key={i} style={{ marginLeft: '16px' }}>{renderInlineCode(p.replace(/^- /, ''))}</li>;
                            }
                            if (p.trim()) {
                                return <p key={i}>{renderInlineCode(p)}</p>;
                            }
                            return null;
                        })}
                        {sec.table && (
                            <table className="info-table">
                                <thead><tr>{sec.table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
                                <tbody>{sec.table.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
                            </table>
                        )}
                        {sec.img && (
                            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                                <img src={sec.img} alt={sec.title} style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                            </div>
                        )}
                        {sec.mermaid && <MermaidChart chart={sec.mermaid} />}
                        {sec.code && <CodeBlock code={sec.code} lang={sec.lang || 'verilog'} />}
                    </section>
                ))}
            </div>

            {/* Quiz */}
            {chapter.quiz && chapter.quiz.length > 0 && (
                <Quiz questions={chapter.quiz} />
            )}

            {/* Mark Complete */}
            <div style={{ textAlign: 'center', margin: '32px 0' }}>
                <button className={`chapter-complete-btn ${progress[chapterId] ? 'completed' : ''}`} onClick={toggleComplete}>
                    <CheckCircle size={18} />
                    {progress[chapterId] ? '已完成 ✓' : '標記為已完成'}
                </button>
            </div>

            {/* Nav */}
            <div className="chapter-nav">
                {prevCh ? (
                    <Link to={`/${type}/${prevCh.id}`} className="chapter-nav-btn">
                        <ChevronLeft size={16} /> 上一章：{prevCh.title}
                    </Link>
                ) : <div />}
                {nextCh ? (
                    <Link to={`/${type}/${nextCh.id}`} className="chapter-nav-btn">
                        下一章：{nextCh.title} <ChevronRight size={16} />
                    </Link>
                ) : (
                    type === 'sv' ? (
                        <Link to={`/uvm/${uvmChapters[0].id}`} className="chapter-nav-btn" style={{ borderColor: 'var(--color-accent-purple)', color: 'var(--color-accent-purple)' }}>
                            進入 UVM 課程 <ChevronRight size={16} />
                        </Link>
                    ) : <div />
                )}
            </div>
        </div>
    );
}

function renderInlineCode(text) {
    const tokens = [];
    const pattern = /\*\*(.*?)\*\*|`([^`]+)`/g;
    let lastIndex = 0;
    let match;

    while ((match = pattern.exec(text)) !== null) {
        if (match.index > lastIndex) tokens.push(text.slice(lastIndex, match.index));
        tokens.push(match[1] !== undefined
            ? <strong key={match.index}>{match[1]}</strong>
            : <code key={match.index}>{match[2]}</code>);
        lastIndex = pattern.lastIndex;
    }

    if (lastIndex < text.length) tokens.push(text.slice(lastIndex));
    return tokens;
}
