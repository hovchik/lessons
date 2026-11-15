/*
 * Offline lessons. Pages are fetched from the network first and kept, so a lesson
 * read once opens again without a connection; "Save for offline" on a course page
 * puts all its lessons in the same cache (src/components/site/save-offline.tsx).
 * Built files under /_next/static never change their name, so they are served
 * from the cache first. Answers are never cached: the page keeps unsent ones and
 * sends them when the connection is back (src/lib/outbox.ts).
 */
const VERSION = "v1";
const STATIC = `static-${VERSION}`;
const PAGES = `pages-${VERSION}`;
const LOCALES = ["en", "hy", "ru"];
const MAX_PAGES = 400;
const MAX_STATIC = 600;
// Pages that are only about the signed-in account are not worth keeping offline.
const PRIVATE = /^\/(en|hy|ru)\/(progress|review|classes|schedule|parent|login|signup|live|admin)(\/|$)/;

/** The offline page in each language, with the files it needs. */
async function keepOfflinePages() {
  const pages = await caches.open(PAGES);
  const assets = [];
  for (const l of LOCALES) {
    try {
      const res = await fetch(`/${l}/offline`, { credentials: "same-origin" });
      if (!res.ok) continue;
      assets.push(...assetsOf(await res.clone().text()));
      await pages.put(`/${l}/offline`, res);
    } catch {
      // Installed while offline: the next visit online tries again.
    }
  }
  await cacheAssets(assets);
}

self.addEventListener("install", (event) => {
  event.waitUntil(keepOfflinePages().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== STATIC && k !== PAGES).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

const isStatic = (url) => url.pathname.startsWith("/_next/static/") || url.pathname.startsWith("/icons/") || url.pathname.startsWith("/fonts/");

async function trim() {
  const c = await caches.open(PAGES);
  const keys = await c.keys();
  for (const k of keys.slice(0, Math.max(0, keys.length - MAX_PAGES))) if (!/\/offline$/.test(new URL(k.url).pathname)) await c.delete(k);
}

async function page(request) {
  const url = new URL(request.url);
  try {
    const res = await fetch(request);
    if (res.ok && res.type === "basic" && !PRIVATE.test(url.pathname)) {
      const copy = res.clone();
      caches.open(PAGES).then((c) => c.put(url.pathname, copy)).then(trim);
    }
    return res;
  } catch (e) {
    const cached = await caches.match(url.pathname, { cacheName: PAGES });
    if (cached) return cached;
    const locale = LOCALES.find((l) => url.pathname === `/${l}` || url.pathname.startsWith(`/${l}/`)) || "en";
    const offline = await caches.match(`/${locale}/offline`, { cacheName: PAGES });
    if (offline) return offline;
    throw e;
  }
}

async function cacheFirst(request) {
  const hit = await caches.match(request, { cacheName: STATIC });
  if (hit) return hit;
  const res = await fetch(request);
  if (res.ok) {
    const copy = res.clone();
    // Each deploy brings new file names; the oldest ones go once there are too many.
    caches.open(STATIC).then(async (c) => {
      await c.put(request, copy);
      const keys = await c.keys();
      for (const k of keys.slice(0, Math.max(0, keys.length - MAX_STATIC))) await c.delete(k);
    });
  }
  return res;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith("/api/")) return;
  if (isStatic(url)) return event.respondWith(cacheFirst(request));
  // Client-side navigations fetch RSC payloads; offline they fail and Next falls back to a full page load, served below.
  if (request.mode === "navigate") return event.respondWith(page(request));
});

/**
 * The built files a page needs, so a saved page also works when it was never opened:
 * the ones in its tags and the ones its React payload names (as "static/chunks/…").
 */
function assetsOf(text) {
  const out = new Set();
  for (const m of text.matchAll(/(?:src|href)="(\/(?:_next\/static|icons|fonts)\/[^"]+)"/g)) out.add(m[1].replace(/&amp;/g, "&"));
  for (const m of text.matchAll(/static\/(?:chunks|css|media)\/[A-Za-z0-9_\-.~%\[\]\/]+?\.(?:js|css|woff2?|ttf|svg|png|webp)/g)) out.add(`/_next/${m[0]}`);
  return [...out];
}

/** Chunks loaded on demand (widgets, games) are only named in the webpack runtime. */
function lazyChunks(runtime) {
  const m = /"static\/chunks\/"\+(\w)\+"\."\+\(\{([^}]*)\}\)\[\1\]\+"\.js"/.exec(runtime);
  if (!m) return [];
  return [...m[2].matchAll(/(\d+):"([0-9a-f]+)"/g)].map((x) => `/_next/static/chunks/${x[1]}.${x[2]}.js`);
}

/** Puts the files in the static cache, following the webpack runtime and stylesheets to what they load. */
async function cacheAssets(list) {
  const stat = await caches.open(STATIC);
  const seen = new Set();
  const queue = [...list];
  while (queue.length) {
    const a = queue.shift();
    if (seen.has(a)) continue;
    seen.add(a);
    let res = await stat.match(a);
    if (!res) {
      try {
        res = await fetch(a);
        if (!res.ok) continue;
        await stat.put(a, res.clone());
      } catch {
        continue;
      }
    }
    if (/\/webpack-[^/]+\.js$/.test(a)) {
      // Named chunks are spelled out ("static/chunks/8893-….js"), numbered ones are an id → hash map.
      const runtime = await res.text();
      queue.push(...assetsOf(runtime), ...lazyChunks(runtime));
    }
    else if (a.endsWith(".css")) queue.push(...assetsOf(await res.text()));
  }
}

// "Save for offline": { type: "save", id, urls } → progress messages back to the page.
self.addEventListener("message", (event) => {
  const data = event.data || {};
  const reply = (msg) => event.source && event.source.postMessage({ id: data.id, ...msg });
  if (data.type === "clear-pages") {
    event.waitUntil(caches.delete(PAGES).then(keepOfflinePages));
    return;
  }
  if (data.type !== "save" || !Array.isArray(data.urls)) return;
  event.waitUntil(
    (async () => {
      const pages = await caches.open(PAGES);
      const assets = new Set();
      let done = 0;
      let failed = 0;
      for (const u of data.urls) {
        try {
          const res = await fetch(u, { credentials: "same-origin" });
          if (!res.ok) throw new Error(String(res.status));
          const html = await res.clone().text();
          await pages.put(new URL(u, self.location.origin).pathname, res);
          for (const a of assetsOf(html)) assets.add(a);
        } catch {
          failed++;
        }
        reply({ type: "progress", done: ++done, total: data.urls.length });
      }
      await cacheAssets([...assets]);
      reply({ type: "saved", failed });
    })(),
  );
});

// A tap on a reminder notification (src/components/site/reminder-watcher.tsx) brings the app forward on the schedule.
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const data = event.notification.data || {};
  const url = typeof data.url === "string" && data.url.startsWith("/") && !data.url.startsWith("//") ? data.url : "/";
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      const open = list.find((c) => new URL(c.url).origin === self.location.origin);
      if (open) return open.focus().then((c) => (c && "navigate" in c ? c.navigate(url) : undefined)).catch(() => undefined);
      return self.clients.openWindow(url);
    }),
  );
});
