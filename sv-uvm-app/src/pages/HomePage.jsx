import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Layers, Briefcase, MessageSquare, Trophy, Target, Zap, ArrowRight, Terminal, Cpu, Monitor, Code, CheckSquare, Share2 } from 'lucide-react';
import { svChapters as getSvChapters } from '../data/svChapters';
import { uvmChapters as getUvmChapters } from '../data/uvmChapters';
import { socChapters as getSocChapters } from '../data/socChapters';

// Helper to get Icon
const getIcon = (iconName) => {
    const props = { size: 24 };
    switch (iconName) {
        case 'Terminal': return <Terminal {...props} />;
        case 'Cpu': return <Cpu {...props} />;
        case 'Monitor': return <Monitor {...props} />;
        case 'Code': return <Code {...props} />;
        case 'CheckSquare': return <CheckSquare {...props} />;
        case 'Share2': return <Share2 {...props} />;
        default: return null;
    }
};

export default function HomePage() {
    const svChapters = getSvChapters();
    const uvmChapters = getUvmChapters();
    const socChapters = getSocChapters();
    const [progress, setProgress] = useState({});

    useEffect(() => {
        const saved = localStorage.getItem('sv_uvm_progress');
        if (saved) setProgress(JSON.parse(saved));
    }, []);

    if (!svChapters?.length || !uvmChapters?.length || !socChapters?.length) {
        return (
            <div style={{ textAlign: 'center', padding: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <div className="card-glow-cyan" style={{ padding: '24px', borderRadius: '50%', display: 'inline-block' }}>
                    <Zap size={48} color="var(--color-accent-cyan)" />
                </div>
                <h2>正在準備學習資料...</h2>
                <p style={{ color: 'var(--color-text-secondary)' }}>如果畫面卡住，請確認 Vite Dev Server 是否正常運行中。</p>
            </div>
        );
    }

    const svDone = svChapters.filter(c => progress[c.id]).length;
    const uvmDone = uvmChapters.filter(c => progress[c.id]).length;
    const socDone = socChapters.filter(c => progress[c.id]).length;
    const totalDone = svDone + uvmDone + socDone;
    const totalChapters = svChapters.length + uvmChapters.length + socChapters.length;

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Hero */}
            <section className="hero-section animate-in">
                <div className="hero-badge"><Zap size={14} /> 互動式學習平台</div>
                <h1 className="hero-title">
                    掌握 <span className="gradient-text">SystemVerilog</span><br />
                    & <span className="gradient-text-accent">UVM</span> 驗證方法論
                </h1>
                <p className="hero-desc">
                    從零開始，系統化學習 SV, UVM 與 SoC 系統設計，搭配原始碼與互動測驗，成為專業的 SoC Design Verification Engineer。
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {svChapters && svChapters.length > 0 ? (
                        <Link to={`/sv/${svChapters[0].id}`} className="btn btn-primary btn-lg">
                            開始學習 <ArrowRight size={18} />
                        </Link>
                    ) : (
                        <button disabled className="btn btn-primary btn-lg" style={{ opacity: 0.5 }}>
                            資料載入中...
                        </button>
                    )}
                    <Link to="/career" className="btn btn-secondary btn-lg">
                        職涯指南
                    </Link>
                </div>
            </section>

            {/* Stats (Responsive 4-column) */}
            <section className="animate-in animate-in-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '48px' }}>
                <div className="card stat-card card-glow-cyan">
                    <div className="stat-value gradient-cyan">{svDone}/{svChapters.length}</div>
                    <div className="stat-label">SystemVerilog 完成度</div>
                    <div className="progress-bar" style={{ marginTop: '12px' }}>
                        <div className="progress-fill" style={{ width: `${(svDone / svChapters.length) * 100}%` }} />
                    </div>
                </div>
                <div className="card stat-card card-glow-purple">
                    <div className="stat-value gradient-purple">{uvmDone}/{uvmChapters.length}</div>
                    <div className="stat-label">UVM 完成度</div>
                    <div className="progress-bar" style={{ marginTop: '12px' }}>
                        <div className="progress-fill purple" style={{ width: `${(uvmDone / uvmChapters.length) * 100}%` }} />
                    </div>
                </div>
                <div className="card stat-card card-glow-cyan" style={{ borderColor: 'rgba(6,214,160,0.2)' }}>
                    <div className="stat-value" style={{ color: 'var(--color-accent-blue)' }}>{socDone}/{socChapters.length}</div>
                    <div className="stat-label">SoC 設計完成度</div>
                    <div className="progress-bar" style={{ marginTop: '12px' }}>
                        <div className="progress-fill blue" style={{ width: `${(socDone / socChapters.length) * 100}%`, backgroundColor: 'var(--color-accent-blue)' }} />
                    </div>
                </div>
                <div className="card stat-card card-glow-pink">
                    <div className="stat-value gradient-warm">{Math.round((totalDone / totalChapters) * 100)}%</div>
                    <div className="stat-label">總編譯進度</div>
                    <div className="progress-bar" style={{ marginTop: '12px' }}>
                        <div className="progress-fill warm" style={{ width: `${(totalDone / totalChapters) * 100}%` }} />
                    </div>
                </div>
            </section>

            {/* Learning Path */}
            <section className="animate-in animate-in-delay-2" style={{ marginBottom: '48px' }}>
                <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>🗺️ 學習路線圖</h2>
                <div className="learning-path" style={{ justifyContent: 'center' }}>
                    <div className="path-node">
                        <div className={`path-node-circle ${svDone > 0 ? (svDone === svChapters.length ? 'complete' : 'active') : ''}`}>📘</div>
                        <div className="path-node-label">SystemVerilog</div>
                    </div>
                    <div className={`path-connector ${svDone === svChapters.length ? 'active' : ''}`} />
                    <div className="path-node">
                        <div className={`path-node-circle ${uvmDone > 0 ? (uvmDone === uvmChapters.length ? 'complete' : 'active') : ''}`}>🏗️</div>
                        <div className="path-node-label">UVM</div>
                    </div>
                    <div className={`path-connector ${uvmDone === uvmChapters.length ? 'active' : ''}`} />
                    <div className="path-node">
                        <div className={`path-node-circle ${socDone > 0 ? (socDone === socChapters.length ? 'complete' : 'active') : ''}`}>⚡</div>
                        <div className="path-node-label">SoC 系統設計</div>
                    </div>
                    <div className={`path-connector ${socDone === socChapters.length ? 'active' : ''}`} />
                    <div className="path-node">
                        <div className={`path-node-circle ${progress['soc-spi-project-complete'] ? 'complete' : 'active'}`}>🎯</div>
                        <div className="path-node-label">整合模擬實戰</div>
                    </div>
                </div>
            </section>

            {/* Core Course Cards */}
            <section className="animate-in animate-in-delay-3" style={{ marginBottom: '48px' }}>
                <h2 style={{ marginBottom: '24px' }}>📚 核心學習板塊</h2>
                <div className="grid-2">
                    <Link to="/soc-spi-project" className="card card-glow-cyan" style={{ textDecoration: 'none', gridColumn: 'span 2', background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.1) 0%, rgba(114, 9, 183, 0.1) 100%)', borderColor: 'rgba(0,180,216,0.3)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <Cpu size={24} style={{ color: 'var(--color-accent-cyan)' }} />
                            <h3 style={{ fontSize: '1.25rem' }}>SoC & SPI UVM 實戰專案</h3>
                            <span className="skill-badge" style={{ background: 'var(--color-accent-purple)', color: '#fff', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', margin: 0 }}>精選專案</span>
                        </div>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginBottom: '16px' }}>
                            結合 AMBA APB 匯流排與 Motorola S12SPIV3 暫存器架構，搭建工業級 UVM Block-level 驗證環境。包含詳細驗證計畫、對照測試、RTL 與交互式時序模擬。
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-cyan)', fontSize: '0.875rem', fontWeight: 600 }}>
                            進入專案驗證工作區 <ArrowRight size={16} />
                        </div>
                    </Link>
                    <Link to={`/sv/${svChapters[0].id}`} className="card card-glow-cyan" style={{ textDecoration: 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <BookOpen size={24} style={{ color: 'var(--color-accent-cyan)' }} />
                            <h3 style={{ fontSize: '1.25rem' }}>SystemVerilog</h3>
                        </div>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginBottom: '16px' }}>
                            章節涵蓋資料類型、OOP、介面、隨機化、覆蓋率、SVA、線程同步等核心概念。
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-cyan)', fontSize: '0.875rem', fontWeight: 600 }}>
                            開始學習 <ArrowRight size={16} />
                        </div>
                    </Link>
                    <Link to={`/uvm/${uvmChapters[0].id}`} className="card card-glow-purple" style={{ textDecoration: 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <Layers size={24} style={{ color: 'var(--color-accent-purple)' }} />
                            <h3 style={{ fontSize: '1.25rem' }}>UVM</h3>
                        </div>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginBottom: '16px' }}>
                            深入 UVM 組件、TLM、序列、Phase、Config DB、Factory、RAL 等。
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-purple)', fontSize: '0.875rem', fontWeight: 600 }}>
                            開始學習 <ArrowRight size={16} />
                        </div>
                    </Link>
                    <Link to={`/soc/${socChapters[0].id}`} className="card card-glow-orange" style={{ textDecoration: 'none', borderColor: 'rgba(251,133,0,0.3)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <Cpu size={24} style={{ color: 'var(--color-accent-orange)' }} />
                            <h3 style={{ fontSize: '1.25rem' }}>SoC 系統設計</h3>
                        </div>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginBottom: '16px' }}>
                            基於 Cortex-M 學習 SoC 系統匯流排、低功耗閘控、除錯 CoreSight、週邊設計及軟體編譯。
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-orange)', fontSize: '0.875rem', fontWeight: 600 }}>
                            開始學習 <ArrowRight size={16} />
                        </div>
                    </Link>
                    <Link to="/career" className="card card-glow-pink" style={{ textDecoration: 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <Briefcase size={24} style={{ color: 'var(--color-accent-pink)' }} />
                            <h3 style={{ fontSize: '1.25rem' }}>DV 職涯指南</h3>
                        </div>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginBottom: '16px' }}>
                            技能樹、常見協議、EDA 工具鏈、職涯發展路徑完整解析。
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-pink)', fontSize: '0.875rem', fontWeight: 600 }}>
                            了解更多 <ArrowRight size={16} />
                        </div>
                    </Link>
                    <Link to="/interview" className="card" style={{ textDecoration: 'none', borderColor: 'rgba(255,214,10,0.15)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <MessageSquare size={24} style={{ color: 'var(--color-accent-yellow)' }} />
                            <h3 style={{ fontSize: '1.25rem' }}>面試準備</h3>
                        </div>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginBottom: '16px' }}>
                            精選 SV & UVM 面試題庫，翻卡式互動學習，助你輕鬆應對面試。
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-yellow)', fontSize: '0.875rem', fontWeight: 600 }}>
                            開始練習 <ArrowRight size={16} />
                        </div>
                    </Link>
                </div>
            </section>

        </div>
    );
}
