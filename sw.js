const CACHE_NAME = '3bcube-v1';
const ASSETS_TO_CACHE = [
  '/',
  './index.html',
  './style.css',
  './script.js',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/95/three.min.js',
  'https://cdn.glitch.global/e8671e70-1130-4c7b-ad51-c73efb1f7cae/3blogo.png?v=1743848986666'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
