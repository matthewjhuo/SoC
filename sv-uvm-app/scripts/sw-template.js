const CACHE = __CACHE_NAME__;
const URLS = __PRECACHE_URLS__;
self.addEventListener('install', event => {
    // A failed download rejects installation, keeping the previous working version.
    event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(URLS.map(url => new Request(url, { cache: 'reload' })))));
});
self.addEventListener('activate', event => {
    event.waitUntil((async () => {
        await Promise.all((await caches.keys()).filter(key => key.startsWith('soc-learning-') && key !== CACHE).map(key => caches.delete(key)));
        await self.clients.claim();
    })());
});
self.addEventListener('message', event => {
    if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    if (event.request.method !== 'GET' || url.origin !== self.location.origin || url.pathname.startsWith('/api/')) return;
    event.respondWith((async () => {
        const cache = await caches.open(CACHE);
        if (event.request.mode === 'navigate') return (await cache.match('/index.html')) || fetch(event.request);
        return (await cache.match(url.pathname)) || fetch(event.request);
    })());
});
