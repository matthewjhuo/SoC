import { useEffect, useRef } from 'react';
let mermaidPromise;
function loadMermaid() {
    const url = '/vendor/mermaid/mermaid.js';
    if (!mermaidPromise) mermaidPromise = import(/* @vite-ignore */ url).then(({ default: mermaid }) => {

mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
        background: 'transparent',
        primaryColor: '#2b2d42',
        primaryBorderColor: '#8d99ae',
        lineColor: '#ef233c',
        textColor: '#edf2f4',
        nodeBorder: '#8d99ae',
        mainBkg: '#0b0f19',
    },
    // Chapter data is rendered as SVG. Keep Mermaid's DOM sanitisation enabled.
    securityLevel: 'strict',
});
        return mermaid;
    }).catch(error => { mermaidPromise = null; throw error; });
    return mermaidPromise;
}

export default function MermaidChart({ chart }) {
    const containerRef = useRef(null);

    useEffect(() => {
        let isMounted = true;
        if (chart && containerRef.current) {
            const renderId = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
            loadMermaid().then(mermaid => mermaid.render(renderId, chart)).then(({ svg }) => {
                if (isMounted && containerRef.current) {
                    containerRef.current.innerHTML = svg;
                }
            }).catch(e => {
                console.error("Mermaid Render Error:", e);
                if (isMounted && containerRef.current) {
                    containerRef.current.innerHTML = `<span style="color:red">Failed to render flowchart</span>`;
                }
            });
        }
        return () => { isMounted = false; };
    }, [chart]);

    return (
        <div
            ref={containerRef}
            style={{
                textAlign: 'center',
                margin: '2rem 0',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid var(--color-border)',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                background: 'rgba(0,0,0,0.2)'
            }}
        />
    );
}
