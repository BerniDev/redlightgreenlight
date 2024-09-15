const CACHE_NAME = 'redlightgreenlight-cache-v1';
const urlsToCache = [
  // '/redlightgreenlight/',
  '/redlightgreenlight/', // Ruta base
  '/redlightgreenlight/index.html',
  '/redlightgreenlight/main.js', // Ajusta según tu estructura de archivos
  '/redlightgreenlight/squidgame.mp3',
  // Agrega todos los recursos estáticos que tu aplicación necesita para funcionar offline
];

// Durante la instalación, cachea los recursos
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache abierto");
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercepta las solicitudes de red para servir los recursos del cache si están offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response ?? fetch(event.request);
      })
      .catch(() => {
        return caches.match("/");
      })
      .then((response) => {
        return (
          response ??
          new Response("Offline and resource not available in cache", {
            status: 503,
          })
        );
      })
  );
});

// Limpiar caches antiguos durante la activación
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
