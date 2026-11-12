import { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle } from 'lucide-react';

export default function Quiz({ questions, onComplete }) {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleSelect = (qIdx, optIdx) => {
        if (submitted) return;
        setAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
    };

    const handleSubmit = () => {
        setSubmitted(true);
        if (onComplete) {
            const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0);
            onComplete(score, questions.length);
        }
    };

    const handleReset = () => {
        setAnswers({});
        setSubmitted(false);
    };

    const score = submitted
        ? questions.reduce((acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0)
        : 0;

    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    return (
        <div className="quiz-container">
            <div className="quiz-title">
                <HelpCircle size={20} className="icon" />
                章節測驗
            </div>

            {questions.map((q, qIdx) => (
                <div key={qIdx} className="quiz-question">
                    <div className="quiz-question-text">
                        {qIdx + 1}. {q.question}
                    </div>
                    <div className="quiz-options">
                        {q.options.map((opt, optIdx) => {
                            let cls = 'quiz-option';
                            if (submitted) {
                                if (optIdx === q.answer) cls += ' correct';
                                else if (answers[qIdx] === optIdx) cls += ' incorrect';
                            } else if (answers[qIdx] === optIdx) {
                                cls += ' selected';
                            }
                            return (
                                <div key={optIdx} className={cls} onClick={() => handleSelect(qIdx, optIdx)}>
                                    <span className="option-letter">{letters[optIdx]}</span>
                                    <span>{opt}</span>
                                    {submitted && optIdx === q.answer && <CheckCircle size={16} style={{ marginLeft: 'auto', color: 'var(--color-accent-cyan)' }} />}
                                    {submitted && answers[qIdx] === optIdx && optIdx !== q.answer && <XCircle size={16} style={{ marginLeft: 'auto', color: 'var(--color-accent-pink)' }} />}
                                </div>
                            );
                        })}
                    </div>
                    {submitted && q.explanation && (
                        <div className="quiz-explanation">
                            💡 {q.explanation}
                        </div>
                    )}
                </div>
            ))}

            {!submitted ? (
                <button className="btn btn-primary" style={{ marginTop: '16px', width: '100%' }} onClick={handleSubmit}
                    disabled={Object.keys(answers).length < questions.length}>
                    提交答案
                </button>
            ) : (
                <div className="quiz-score">
                    <div>
                        <div className="score-value">{score}/{questions.length}</div>
                        <div style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                            {score === questions.length ? '🎉 全部正確！' : score >= questions.length * 0.6 ? '👍 不錯！繼續加油' : '📖 建議複習本章內容'}
                        </div>
                    </div>
                    <button className="btn btn-secondary" onClick={handleReset}>重新作答</button>
                </div>
            )}
        </div>
    );
}
