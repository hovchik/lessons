"use client";

import { CheckCircle2, CloudDownload, Loader2, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";

/** Must match the page cache in public/sw.js. */
const PAGES = "pages-v1";
const PRIVATE = /^\/(en|hy|ru)\/(progress|review|classes|parent|login|signup|live|admin|offline)(\/|$)/;

const supported = () => typeof window !== "undefined" && "serviceWorker" in navigator && "caches" in window;

/**
 * "Save for offline" on a course page: the service worker fetches every lesson
 * of the course into its page cache, with the files they need, so they open
 * without a connection. Hidden where there is no service worker.
 */
export function SaveOffline({ urls }: { urls: string[] }) {
  const t = useTranslations("offline");
  const [ready, setReady] = useState(false);
  const [have, setHave] = useState(0);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  const [failed, setFailed] = useState(0);

  const count = useCallback(async () => {
    const c = await caches.open(PAGES);
    const hits = await Promise.all(urls.map((u) => c.match(u)));
    setHave(hits.filter(Boolean).length);
  }, [urls]);

  useEffect(() => {
    if (!supported()) return;
    navigator.serviceWorker.ready.then(() => {
      setReady(true);
      count();
    });
  }, [count]);

  if (!ready || urls.length === 0) return null;

  const save = async () => {
    const reg = await navigator.serviceWorker.ready;
    const id = Math.random().toString(36).slice(2);
    setFailed(0);
    setProgress({ done: 0, total: urls.length });
    const onMessage = (e: MessageEvent) => {
      if (e.data?.id !== id) return;
      if (e.data.type === "progress") setProgress({ done: e.data.done, total: e.data.total });
      if (e.data.type === "saved") {
        navigator.serviceWorker.removeEventListener("message", onMessage);
        setProgress(null);
        setFailed(e.data.failed);
        count();
      }
    };
    navigator.serviceWorker.addEventListener("message", onMessage);
    reg.active?.postMessage({ type: "save", id, urls });
  };

  const remove = async () => {
    const c = await caches.open(PAGES);
    await Promise.all(urls.map((u) => c.delete(u)));
    count();
  };

  const all = have === urls.length;
  return (
    <div className="flex flex-wrap items-center gap-2">
      {progress ? (
        <p role="status" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-foreground">
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          {t("saving", { done: progress.done, total: progress.total })}
        </p>
      ) : all ? (
        <>
          <p role="status" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-success">
            <CheckCircle2 className="size-4" aria-hidden="true" />
            {t("done", { n: have })}
          </p>
          <button type="button" onClick={remove} className="inline-flex min-h-11 items-center gap-1.5 rounded-xl px-3 text-sm font-bold text-muted-foreground hover:bg-muted">
            <Trash2 className="size-4" aria-hidden="true" />
            {t("remove")}
          </button>
        </>
      ) : (
        <button type="button" onClick={save} className="clay-sm clay-press inline-flex min-h-11 items-center gap-2 px-3 text-sm font-bold">
          <CloudDownload className="size-4 text-primary" aria-hidden="true" />
          {t("save", { n: urls.length - have })}
        </button>
      )}
      {failed > 0 && !progress && <p role="alert" className="basis-full text-sm font-semibold text-destructive">{t("partial", { n: have, failed })}</p>}
    </div>
  );
}

/** On the offline page: the lessons kept on this device, by their titles. */
export function SavedPages({ locale }: { locale: string }) {
  const t = useTranslations("offline");
  const [pages, setPages] = useState<{ href: string; title: string }[] | null>(null);

  useEffect(() => {
    if (!supported()) return setPages([]);
    (async () => {
      const c = await caches.open(PAGES);
      const keys = await c.keys();
      const mine = keys.map((k) => new URL(k.url).pathname).filter((p) => p.startsWith(`/${locale}/`) && !PRIVATE.test(p) && p.split("/").length >= 5);
      const out = await Promise.all(
        mine.map(async (href) => {
          const html = (await (await c.match(href))?.text()) ?? "";
          const title = /<title>([^<]*)<\/title>/.exec(html)?.[1]?.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"') ?? href;
          return { href, title };
        }),
      );
      setPages(out.sort((a, b) => a.href.localeCompare(b.href)));
    })().catch(() => setPages([]));
  }, [locale]);

  if (pages === null) return null;
  return (
    <section aria-labelledby="saved-title" className="clay p-5 sm:p-7">
      <h2 id="saved-title" className="text-xl font-extrabold">{t("saved")}</h2>
      {pages.length === 0 ? (
        <p className="mt-2 text-muted-foreground">{t("none")}</p>
      ) : (
        <ul className="mt-3 divide-y divide-border/70">
          {pages.map((p) => (
            // A plain link: offline, a full page load is what the service worker can answer.
            <li key={p.href}>
              <a href={p.href} className="block min-h-11 py-2 hover:underline">
                {/* "Lesson · Subject · Grade · Site": the lesson first, where it belongs below. */}
                <span className="block font-semibold text-primary">{p.title.split(" · ")[0]}</span>
                <span className="block text-xs font-semibold text-muted-foreground">{p.title.split(" · ").slice(1, -1).join(" · ")}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 text-sm text-muted-foreground">{t("note")}</p>
    </section>
  );
}
