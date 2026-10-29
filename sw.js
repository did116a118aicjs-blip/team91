// Lets browsers install the link page as an app. It caches nothing: the page must always fetch
// the current url.json, and the app itself lives on the office server.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => event.respondWith(fetch(event.request)));
