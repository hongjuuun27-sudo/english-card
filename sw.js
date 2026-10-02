/* 웹앱 설치용 서비스워커.
   항상 인터넷에서 최신 파일을 먼저 받고(카드 업데이트가 바로 보이게), 인터넷이 안 될 때만 저장해 둔 걸 보여 줌.
   ElevenLabs 같은 다른 사이트 요청은 건드리지 않음. */
const CACHE = "english-card-v2";
const CORE = [
  "./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png",
  "./data/categories.js", "./data/questions.js",
  "./data/cards/cafe-restaurant.js", "./data/cards/airport-hotel.js", "./data/cards/transport-shopping.js",
  "./data/cards/daily-talk.js", "./data/cards/life-health.js"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req).then(r => r || caches.match("./index.html")))
  );
});
