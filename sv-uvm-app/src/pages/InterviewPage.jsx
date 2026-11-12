import { useState } from 'react';
import { MessageSquare, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { interviewData as getInterviewData } from '../data/interviewData';

export default function InterviewPage() {
    const interviewData = getInterviewData();
    const [tab, setTab] = useState('sv');
    const [currentIdx, setCurrentIdx] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const questions = tab === 'sv' ? interviewData.sv : interviewData.uvm;
    const q = questions[currentIdx];

    const handleNext = () => {
        setFlipped(false);
        setCurrentIdx(prev => (prev + 1) % questions.length);
    };

    const handlePrev = () => {
        setFlipped(false);
        setCurrentIdx(prev => (prev - 1 + questions.length) % questions.length);
    };

    const handleTabChange = (t) => {
        setTab(t);
        setCurrentIdx(0);
        setFlipped(false);
    };

    return (
        <div className="chapter-page animate-in">
            <div className="chapter-tag" style={{ background: 'rgba(255,214,10,0.1)', color: 'var(--color-accent-yellow)', borderColor: 'rgba(255,214,10,0.2)' }}>
                📝 面試準備
            </div>
            <h1>SV & UVM 面試題庫</h1>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: '32px' }}>
                精選常見面試題，點擊卡片翻轉查看答案。
            </p>

            {/* Tabs */}
            <div className="tabs">
                <button className={`tab ${tab === 'sv' ? 'active' : ''}`} onClick={() => handleTabChange('sv')}>
                    SystemVerilog ({interviewData.sv.length} 題)
                </button>
                <button className={`tab ${tab === 'uvm' ? 'active' : ''}`} onClick={() => handleTabChange('uvm')}>
                    UVM ({interviewData.uvm.length} 題)
                </button>
            </div>

            {/* Progress */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    題目 {currentIdx + 1} / {questions.length}
                </span>
                <div className="progress-bar" style={{ flex: 1, margin: '0 16px', maxWidth: '200px' }}>
                    <div className="progress-fill warm" style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }} />
                </div>
            </div>

            {/* Flashcard */}
            <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
                <div className="flashcard-inner">
                    <div className="flashcard-front">
                        <div className="flashcard-label">❓ 問題</div>
                        <div className="flashcard-text" style={{ fontSize: '1.1rem', fontWeight: 500 }}>{q.q}</div>
                        <div style={{ marginTop: 'auto', paddingTop: '16px', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                            👆 點擊翻轉查看答案
                        </div>
                    </div>
                    <div className="flashcard-back">
                        <div className="flashcard-label">✅ 答案</div>
                        <div className="flashcard-text">{q.a}</div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
                <button className="btn btn-secondary" onClick={handlePrev}>
                    <ChevronLeft size={16} /> 上一題
                </button>
                <button className="btn btn-secondary" onClick={() => setFlipped(!flipped)}>
                    <RotateCcw size={16} /> 翻轉
                </button>
                <button className="btn btn-primary" onClick={handleNext}>
                    下一題 <ChevronRight size={16} />
                </button>
            </div>

            {/* Question List */}
            <div style={{ marginTop: '48px' }}>
                <h3 style={{ marginBottom: '16px' }}>📋 題目列表</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {questions.map((item, i) => (
                        <div key={i} className="card" style={{ padding: '12px 16px', cursor: 'pointer', borderColor: i === currentIdx ? 'var(--color-accent-cyan)' : 'var(--color-border)' }}
                            onClick={() => { setCurrentIdx(i); setFlipped(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-text-muted)', minWidth: '28px' }}>{String(i + 1).padStart(2, '0')}</span>
                                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{item.q}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
