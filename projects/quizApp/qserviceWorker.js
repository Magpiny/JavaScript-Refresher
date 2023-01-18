//We want our quiz app to run offline
const cacheName = "v1";
const cachedFiles = [
  "q.html",
  "q.css",
  "q.js",
  "manifest.json",
  "quizdb.json",
  "db.json",
];

// Call the Install event
self.addEventListener("install", (e) => {
  console.log("Sevice Worker: Installed");

  e.waitUntil(
    caches
      .open(cacheName)
      //"Sevice Worker: Caching files
      .then((cache) => cache.addAll(cachedFiles))
      .then(() => self.skipWaiting())
  );
});

// Call activate event
self.addEventListener("activate", (e) => {
  console.log("Sevice Worker: Activated");
  //Remove unwanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("clearing old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call fetch event
self.addEventListener("fetch", function (e) {
  console.log("Service Worker: fetching");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
