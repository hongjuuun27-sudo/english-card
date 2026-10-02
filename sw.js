/* 웹앱 설치용 서비스워커.
   항상 인터넷에서 최신 파일을 먼저 받고(카드 업데이트가 바로 보이게), 인터넷이 안 될 때만 저장해 둔 걸 보여 줌.
   GitHub Pages는 파일을 10분 동안 브라우저에 보관해도 된다고 알려 주므로(max-age=600), 받을 때 cache: "no-cache"로
   매번 서버에 바뀌었는지 물어봄(안 바뀌었으면 짧은 응답만 와서 데이터도 거의 안 씀).
   ElevenLabs 같은 다른 사이트 요청은 건드리지 않음. */
const CACHE = "english-card-v3";
const CORE = [
  "./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png",
  "./data/categories.js", "./data/questions.js",
  "./data/cards/cafe-restaurant.js", "./data/cards/airport-hotel.js", "./data/cards/transport-shopping.js",
  "./data/cards/daily-talk.js", "./data/cards/life-health.js"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
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
  /* 페이지 열기(navigate) 요청은 옵션을 바꿔 복사할 수 없어서 주소로 새로 만듦 */
  const fresh = req.mode === "navigate"
    ? new Request(req.url, { cache: "no-cache", credentials: "same-origin" })
    : new Request(req, { cache: "no-cache" });
  e.respondWith(
    fetch(fresh)
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
