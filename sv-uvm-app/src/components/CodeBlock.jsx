import { useState } from 'react';
import { Copy, Check, Play, Activity, TerminalSquare } from 'lucide-react';

export default function CodeBlock({ code, lang = 'verilog', title }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const [simLog, setSimLog] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    const handleRun = async () => {
        setIsRunning(true);
        setSimLog('Executing via Icarus Verilog...');
        try {
            const res = await fetch('/api/compile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code })
            });
            const data = await res.json();
            setSimLog(data.log);
        } catch (e) {
            setSimLog('Execution failed: ' + e.message);
        }
        setIsRunning(false);
    };

    const handleWaveform = async () => {
        await fetch('/api/gtkwave', { method: 'POST' });
    };

    // Simple syntax highlighting for SystemVerilog
    const highlight = (src) => {
        const keywords = /\b(module|endmodule|class|endclass|function|endfunction|task|endtask|extends|virtual|static|local|protected|import|export|package|endpackage|interface|endinterface|modport|clocking|endclocking|program|endprogram|property|endproperty|sequence|endsequence|covergroup|endgroup|constraint|typedef|enum|struct|union|packed|rand|randc|assert|assume|cover|if|else|for|foreach|while|do|repeat|forever|begin|end|fork|join|join_any|join_none|return|new|this|super|null|void|input|output|inout|ref|const|pure|extern|disable|wait|posedge|negedge|iff|inside|dist|solve|before|with|unique|priority|always|always_ff|always_comb|always_latch|assign|initial|parameter|localparam|genvar|generate|endgenerate|case|endcase|default|break|continue)\b/g;
        const types = /\b(logic|bit|reg|wire|int|integer|byte|shortint|longint|real|shortreal|string|void|time|realtime|chandle|event|uvm_component|uvm_object|uvm_driver|uvm_monitor|uvm_sequencer|uvm_agent|uvm_env|uvm_test|uvm_sequence|uvm_sequence_item|uvm_scoreboard|uvm_subscriber|uvm_reg|uvm_reg_block|uvm_reg_field|uvm_reg_map|uvm_phase|uvm_config_db|uvm_analysis_port|uvm_analysis_imp|uvm_tlm_analysis_fifo|uvm_active_passive_enum|uvm_status_e|uvm_reg_data_t|mailbox|semaphore)\b/g;
        const strings = /("(?:[^"\\]|\\.)*")/g;
        const comments = /(\/\/.*$)/gm;
        const numbers = /\b(\d+'[bBhHdDoO][\da-fA-F_xXzZ]+|\d+)\b/g;
        const macros = /(`\w+)/g;
        const sysFunc = /(\$\w+)/g;

        let html = src
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(comments, '<span class="token comment">$1</span>')
            .replace(strings, '<span class="token string">$1</span>')
            .replace(macros, '<span class="token function">$1</span>')
            .replace(sysFunc, '<span class="token function">$1</span>')
            .replace(types, '<span class="token class-name">$1</span>')
            .replace(keywords, '<span class="token keyword">$1</span>')
            .replace(numbers, '<span class="token number">$1</span>');
        return html;
    };

    return (
        <div className="code-block-wrapper">
            <div className="code-block-header">
                <span className="lang-label">
                    <span className="lang-dot"></span>
                    {title || lang}
                </span>
                <div style={{ display: 'flex', gap: '8px' }}>
                    {lang === 'verilog' && (
                        <>
                            <button className="copy-btn" onClick={handleRun} disabled={isRunning} style={{ background: 'var(--color-accent-cyan)', color: '#000', borderColor: 'transparent' }}>
                                <Play size={12} /> {isRunning ? 'Running...' : 'Run Simulation'}
                            </button>
                            <button className="copy-btn" onClick={handleWaveform} style={{ background: 'var(--color-accent-purple)', color: '#fff', borderColor: 'transparent' }}>
                                <Activity size={12} /> GTKWave
                            </button>
                        </>
                    )}
                    <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
                        {copied ? <><Check size={12} /> 已複製</> : <><Copy size={12} /> 複製</>}
                    </button>
                </div>
            </div>
            <div className="code-block-body">
                <pre><code dangerouslySetInnerHTML={{ __html: highlight(code) }} /></pre>
            </div>
            {simLog && (
                <div className="code-block-console">
                    <div className="console-header"><TerminalSquare size={12} /> Icarus Verilog Simulation Output</div>
                    <pre className="console-body">{simLog}</pre>
                </div>
            )}
        </div>
    );
}
