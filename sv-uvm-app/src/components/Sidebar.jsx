import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, BookOpen, Layers, Briefcase, MessageSquare, ChevronRight, Cpu, Menu, X, PlusCircle, Terminal, Monitor, Code, CheckSquare, Share2, Folder } from 'lucide-react';
import { svChapters as getSvChapters } from '../data/svChapters';
import { uvmChapters as getUvmChapters } from '../data/uvmChapters';
import { socChapters as getSocChapters } from '../data/socChapters';

// Helper to get matching icon component
const getIcon = (iconName) => {
    const props = { size: 14 };
    switch (iconName) {
        case 'Terminal': return <Terminal {...props} />;
        case 'Cpu': return <Cpu {...props} />;
        case 'Monitor': return <Monitor {...props} />;
        case 'Code': return <Code {...props} />;
        case 'CheckSquare': return <CheckSquare {...props} />;
        case 'Share2': return <Share2 {...props} />;
        default: return <PlusCircle {...props} />;
    }
};

export default function Sidebar() {
    const location = useLocation();
    const svChapters = getSvChapters();
    const uvmChapters = getUvmChapters();
    const socChapters = getSocChapters();
    const [svOpen, setSvOpen] = useState(true);
    const [uvmOpen, setUvmOpen] = useState(true);
    const [socOpen, setSocOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [progress, setProgress] = useState({});
    const [activeSvGroup, setActiveSvGroup] = useState(null);
    const [activeUvmGroup, setActiveUvmGroup] = useState(null);
    const [activeSocGroup, setActiveSocGroup] = useState(null);
    const [iosGuideOpen, setIosGuideOpen] = useState(false);
    const isStandalone = typeof window !== 'undefined' && (window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches);

    // Group Extractor
    const extractGroups = (chaps) => {
        return chaps.reduce((acc, ch) => {
            const g = ch.group || '綜合探討 (General)';
            if (!acc[g]) acc[g] = [];
            acc[g].push(ch);
            return acc;
        }, {});
    };

    const groupedSv = extractGroups(svChapters);
    const groupedUvm = extractGroups(uvmChapters);
    const groupedSoc = extractGroups(socChapters);

    const isDataLoading = !svChapters?.length || !uvmChapters?.length || !socChapters?.length;

    useEffect(() => {
        const saved = localStorage.getItem('sv_uvm_progress');
        if (saved) setProgress(JSON.parse(saved));
    }, []);

    useEffect(() => { setMobileOpen(false); }, [location]);

    const svDone = svChapters.filter(c => progress[c.id]).length;
    const uvmDone = uvmChapters.filter(c => progress[c.id]).length;
    const socDone = socChapters.filter(c => progress[c.id]).length;

    return (
        <>
            <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className={`sidebar-overlay ${mobileOpen ? 'visible' : ''}`} onClick={() => setMobileOpen(false)} />
            <aside className={`sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
                <div className="sidebar-logo">
                    <div className="sidebar-logo-icon"><Cpu size={20} /></div>
                    <span className="sidebar-logo-text">SV & UVM 學習平台</span>
                </div>
                <nav className="sidebar-nav">
                    {/* Home */}
                    <div className="sidebar-section">
                        <NavLink to="/career-manager" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
                            <Briefcase size={18} className="sidebar-link-icon" /> 職涯管理站
                        </NavLink>
                        <NavLink to="/" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
                            <Home size={18} className="sidebar-link-icon" /> 首頁
                        </NavLink>
                        <NavLink to="/experience" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
                            <Briefcase size={18} className="sidebar-link-icon" /> 我的 DV 實務案例
                        </NavLink>
                    </div>

                    {/* SV Chapters */}
                    <div className="sidebar-section">
                        <div className="sidebar-section-title" onClick={() => setSvOpen(!svOpen)}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><BookOpen size={14} /> SystemVerilog</span>
                            {isDataLoading && <span style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>載入中</span>}
                            {!isDataLoading && <ChevronRight size={14} className={`chevron ${svOpen ? 'open' : ''}`} />}
                        </div>
                        {svOpen && !isDataLoading && (
                            <>
                                <div className="sidebar-progress-bar"><div className="sidebar-progress-fill cyan" style={{ width: `${(svDone / svChapters.length) * 100}%` }} /></div>
                                {Object.entries(groupedSv).map(([groupName, chapters]) => (
                                    <div key={groupName}>
                                        <div
                                            className="sidebar-link"
                                            style={{ padding: '4px 16px', fontSize: '0.8rem', cursor: 'pointer', color: activeSvGroup === groupName ? 'var(--color-text-primary)' : 'var(--color-text-muted)' }}
                                            onClick={() => setActiveSvGroup(activeSvGroup === groupName ? null : groupName)}
                                        >
                                            <span style={{ color: 'var(--color-accent-cyan)' }}><Folder size={14} /></span>
                                            <span style={{ flex: 1, fontWeight: 'bold' }}>{groupName}</span>
                                            <ChevronRight size={12} className={`chevron ${activeSvGroup === groupName ? 'open' : ''}`} />
                                        </div>
                                        {activeSvGroup === groupName && (
                                            <div style={{ marginLeft: '8px', borderLeft: '1px solid var(--color-border)' }}>
                                                {chapters.map(ch => (
                                                    <NavLink key={ch.id} to={`/sv/${ch.id}`} className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`} style={{ paddingLeft: '24px', fontSize: '0.75rem' }}>
                                                        <span className="chapter-num">{String(ch.num).padStart(2, '0')}</span>
                                                        <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ch.title}</span>
                                                        {progress[ch.id] && <span style={{ color: 'var(--color-accent-cyan)', fontSize: '10px' }}>✓</span>}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </>
                        )}
                    </div>

                    {/* UVM Chapters */}
                    <div className="sidebar-section">
                        <div className="sidebar-section-title" onClick={() => setUvmOpen(!uvmOpen)}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Layers size={14} /> UVM</span>
                            {isDataLoading && <span style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>載入中</span>}
                            {!isDataLoading && <ChevronRight size={14} className={`chevron ${uvmOpen ? 'open' : ''}`} />}
                        </div>
                        {uvmOpen && !isDataLoading && (
                            <>
                                <div className="sidebar-progress-bar"><div className="sidebar-progress-fill purple" style={{ width: `${(uvmDone / uvmChapters.length) * 100}%` }} /></div>
                                {Object.entries(groupedUvm).map(([groupName, chapters]) => (
                                    <div key={groupName}>
                                        <div
                                            className="sidebar-link"
                                            style={{ padding: '4px 16px', fontSize: '0.8rem', cursor: 'pointer', color: activeUvmGroup === groupName ? 'var(--color-text-primary)' : 'var(--color-text-muted)' }}
                                            onClick={() => setActiveUvmGroup(activeUvmGroup === groupName ? null : groupName)}
                                        >
                                            <span style={{ color: 'var(--color-accent-purple)' }}><Folder size={14} /></span>
                                            <span style={{ flex: 1, fontWeight: 'bold' }}>{groupName}</span>
                                            <ChevronRight size={12} className={`chevron ${activeUvmGroup === groupName ? 'open' : ''}`} />
                                        </div>
                                        {activeUvmGroup === groupName && (
                                            <div style={{ marginLeft: '8px', borderLeft: '1px solid var(--color-border)' }}>
                                                {chapters.map(ch => (
                                                    <NavLink key={ch.id} to={`/uvm/${ch.id}`} className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`} style={{ paddingLeft: '24px', fontSize: '0.75rem' }}>
                                                        <span className="chapter-num">{String(ch.num).padStart(2, '0')}</span>
                                                        <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ch.title}</span>
                                                        {progress[ch.id] && <span style={{ color: 'var(--color-accent-purple)', fontSize: '10px' }}>✓</span>}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </>
                        )}
                    </div>

                    {/* SoC Chapters */}
                    <div className="sidebar-section">
                        <div className="sidebar-section-title" onClick={() => setSocOpen(!socOpen)}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Cpu size={14} /> SoC 設計</span>
                            {isDataLoading && <span style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>載入中</span>}
                            {!isDataLoading && <ChevronRight size={14} className={`chevron ${socOpen ? 'open' : ''}`} />}
                        </div>
                        {socOpen && !isDataLoading && (
                            <>
                                <div className="sidebar-progress-bar"><div className="sidebar-progress-fill blue" style={{ width: `${(socDone / socChapters.length) * 100}%` }} /></div>
                                {Object.entries(groupedSoc).map(([groupName, chapters]) => (
                                    <div key={groupName}>
                                        <div
                                            className="sidebar-link"
                                            style={{ padding: '4px 16px', fontSize: '0.8rem', cursor: 'pointer', color: activeSocGroup === groupName ? 'var(--color-text-primary)' : 'var(--color-text-muted)' }}
                                            onClick={() => setActiveSocGroup(activeSocGroup === groupName ? null : groupName)}
                                        >
                                            <span style={{ color: 'var(--color-accent-cyan)' }}><Folder size={14} /></span>
                                            <span style={{ flex: 1, fontWeight: 'bold' }}>{groupName}</span>
                                            <ChevronRight size={12} className={`chevron ${activeSocGroup === groupName ? 'open' : ''}`} />
                                        </div>
                                        {activeSocGroup === groupName && (
                                            <div style={{ marginLeft: '8px', borderLeft: '1px solid var(--color-border)' }}>
                                                {chapters.map(ch => (
                                                    <NavLink key={ch.id} to={`/soc/${ch.id}`} className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`} style={{ paddingLeft: '24px', fontSize: '0.75rem' }}>
                                                        <span className="chapter-num">{String(ch.num).padStart(2, '0')}</span>
                                                        <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ch.title}</span>
                                                        {progress[ch.id] && <span style={{ color: 'var(--color-accent-cyan)', fontSize: '10px' }}>✓</span>}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                    {/* Other links */}
                    <div className="sidebar-section">
                        <div className="sidebar-section-title">核心專案</div>
                        <NavLink to="/soc-spi-project" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
                            <Cpu size={18} className="sidebar-link-icon" style={{ color: 'var(--color-accent-cyan)' }} /> SoC & SPI 驗證專案
                        </NavLink>
                        <div className="sidebar-section-title" style={{ marginTop: '16px' }}>其他</div>
                        <NavLink to="/career" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
                            <Briefcase size={18} className="sidebar-link-icon" /> DV 職涯指南
                        </NavLink>
                        <NavLink to="/interview" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
                            <MessageSquare size={18} className="sidebar-link-icon" /> 面試準備
                        </NavLink>
                        <button
                            type="button"
                            onClick={() => setIosGuideOpen(true)}
                            className="sidebar-link"
                            style={{ width: '100%', background: 'none', border: 'none', textAlign: 'left', fontFamily: 'inherit', marginTop: '4px', color: 'var(--color-accent-cyan)' }}
                        >
                            <Share2 size={18} className="sidebar-link-icon" style={{ color: 'var(--color-accent-cyan)', opacity: 1 }} />
                            <span>{isStandalone ? '✓ iOS App 模式運行中' : '📲 安裝為 iOS App'}</span>
                        </button>
                    </div>
                </nav >
            </aside >

            {iosGuideOpen && (
                <div className="ios-modal-backdrop" onClick={() => setIosGuideOpen(false)}>
                    <div className="ios-modal-card" onClick={(e) => e.stopPropagation()}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)' }}>📲 安裝 SoC DV iOS App</h3>
                            <button type="button" onClick={() => setIosGuideOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}>
                                <X size={20} />
                            </button>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                            本平台已支援 <strong>iOS 全螢幕 Web App (PWA) 離線快取</strong> 與 <strong>Capacitor 原生封裝</strong>：
                        </p>
                        <ul className="ios-step-list">
                            <li className="ios-step-item">
                                <span className="ios-step-num">1</span>
                                <div>在 iPhone / iPad 使用 <strong>Safari</strong> 開啟本網站，點擊底部導覽列的 <strong>「分享」按鈕 (方框向上箭頭)</strong>。</div>
                            </li>
                            <li className="ios-step-item">
                                <span className="ios-step-num">2</span>
                                <div>向下滑動選單，點選 <strong>「加入主畫面 (Add to Home Screen)」</strong> 並點擊右上角「新增」。</div>
                            </li>
                            <li className="ios-step-item">
                                <span className="ios-step-num">3</span>
                                <div>從桌面開啟 <strong>SoC DV</strong> 圖示，即可享受<strong>無網址列全螢幕、瀏海 Safe Area 適配與離線題庫瀏覽</strong>！</div>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setIosGuideOpen(false)}>
                            知道了
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
