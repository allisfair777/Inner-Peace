// Simple Service Worker for PWA
const CACHE_NAME = 'inner-peace-v1';

self.addEventListener('install', event => {
  console.log('Inner Peace PWA installed');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
