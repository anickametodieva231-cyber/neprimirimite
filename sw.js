self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('neprimirimite-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js',
                'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js',
                'https://cdn.jsdelivr.net/npm/@babel/standalone@7.22.5/babel.min.js',
                'https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js',
                'https://cdn.jsdelivr.net/npm/crypto-js@4.1.1/crypto-js.js',
                'https://cdn.tailwindcss.com'
            ]);
        })
    );
});
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});