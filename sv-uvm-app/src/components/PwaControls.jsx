import { useEffect, useState } from 'react';
import './PwaControls.css';

export default function PwaControls() {
    const [prompt, setPrompt] = useState(null);
    const [installed, setInstalled] = useState(() => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true);
    const [offline, setOffline] = useState(!navigator.onLine);
    const [status, setStatus] = useState(import.meta.env.PROD ? '準備離線教材中…' : '開發預覽：離線功能於正式版啟用');
    const [waiting, setWaiting] = useState(null);
    const [busy, setBusy] = useState(false);
    const [notice, setNotice] = useState('');

    useEffect(() => {
        let alive = true;
        let registration;
        let updating = false;
        const onPrompt = e => { e.preventDefault(); setPrompt(e); };
        const onInstalled = () => { setInstalled(true); setPrompt(null); };
        const onOnline = () => setOffline(false);
        const onOffline = () => setOffline(true);
        const onController = () => {
            if (updating) window.location.reload();
            else setStatus('離線教材已備妥');
        };
        const onUpdate = () => {
            const worker = registration.installing;
            if (!worker) return;
            worker.addEventListener('statechange', () => {
                if (!alive) return;
                if (worker.state === 'installed') {
                    if (navigator.serviceWorker.controller) setWaiting(registration.waiting);
                    else setStatus('離線教材已備妥');
                }
                if (worker.state === 'redundant') setStatus('教材下載未完成，連線後請重新整理');
            });
        };
        const onRefresh = () => { updating = true; };
        window.addEventListener('beforeinstallprompt', onPrompt);
        window.addEventListener('appinstalled', onInstalled);
        window.addEventListener('online', onOnline);
        window.addEventListener('offline', onOffline);
        window.addEventListener('pwa-apply-update', onRefresh);
        const onFocus = () => registration?.update().catch(() => {});
        window.addEventListener('focus', onFocus);
        if (import.meta.env.PROD && 'serviceWorker' in navigator) {
            navigator.serviceWorker.addEventListener('controllerchange', onController);
            navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' }).then(reg => {
                if (!alive) return;
                registration = reg;
                if (reg.active) setStatus('離線教材已備妥');
                if (reg.waiting) setWaiting(reg.waiting);
                reg.addEventListener('updatefound', onUpdate);
                if (reg.installing) onUpdate();
                reg.update().catch(() => {});
            }).catch(() => { if (alive) setStatus('離線準備失敗，請確認連線後重新整理'); });
        } else if (import.meta.env.PROD) setStatus('此環境不支援離線安裝，請使用 HTTPS 或 localhost');
        return () => {
            alive = false;
            window.removeEventListener('beforeinstallprompt', onPrompt);
            window.removeEventListener('appinstalled', onInstalled);
            window.removeEventListener('online', onOnline);
            window.removeEventListener('offline', onOffline);
            window.removeEventListener('pwa-apply-update', onRefresh);
            window.removeEventListener('focus', onFocus);
            navigator.serviceWorker?.removeEventListener('controllerchange', onController);
            registration?.removeEventListener('updatefound', onUpdate);
        };
    }, []);

    const install = async () => {
        if (!prompt) return;
        setBusy(true);
        try {
            await prompt.prompt();
            const result = await prompt.userChoice;
            setNotice(result.outcome === 'accepted' ? '已接受安裝，請依瀏覽器提示完成。' : '已取消安裝，仍可繼續使用網站。');
        } catch { setNotice('請從瀏覽器選單安裝 App。'); }
        finally { setPrompt(null); setBusy(false); }
    };

    return <section className="pwa-controls" aria-label="App 安裝與離線狀態">
        <div className="pwa-bar">
            <span role="status">{offline ? '目前離線 · ' : ''}{status}</span>
            {installed ? <span>App 模式</span> : prompt && <button className="btn btn-secondary" disabled={busy} onClick={install}>安裝 App</button>}
            {waiting && <button className="btn btn-primary" onClick={() => {
                window.dispatchEvent(new Event('pwa-apply-update'));
                waiting.postMessage({ type: 'SKIP_WAITING' });
            }}>更新並重新開啟</button>}
        </div>
        <details><summary>{installed ? '離線使用說明' : '如何安裝到電腦／手機？'}</summary>
            <p>電腦 Chrome／Edge：使用「安裝 App」或網址列的安裝圖示。Android Chrome：選單 → 安裝應用程式。iPhone／iPad Safari：分享 → 加入主畫面。</p>
            <p>第一次連線下載完成、顯示「離線教材已備妥」後，即可離線閱讀課程、實務案例及作答。學習進度保存在此裝置與瀏覽器，不會自動跨裝置同步；清除網站資料會移除進度與離線教材。</p>
            <p>Verilog 模擬與 GTKWave 仍需本機工具服務。手機安裝需使用部署後的 HTTPS 網址；localhost 只適用於目前這台電腦。</p>
            {waiting && <p>更新會重新載入頁面，請先完成目前作答。</p>}
        </details>
        {notice && <p role="status">{notice}</p>}
    </section>;
}
