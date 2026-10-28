"use client";

import { createContext, startTransition, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { isHeld, onChanged, onReleased } from "@/lib/live";
import type { LiveUser } from "@/server/live";

const Ctx = createContext<LiveUser | null>(null);

/** The pupil's streak and review queue as of their last saved answer (null for guests). */
export const useLiveUser = () => useContext(Ctx);

/** After this long in the background, coming back re-reads the page (another device may have moved on). */
const AWAY_MS = 60_000;

/**
 * Wraps the site so the header, tab bar and page follow the pupil's actions
 * without a reload. The layout renders it with the server's numbers; after a
 * saved answer (`notifyChanged`) it fetches fresh numbers for the header at
 * once and refreshes the page's server data, unless a session holds the
 * refresh, in which case the refresh runs when the session ends or the pupil
 * moves on. It also catches up after back/forward navigation (which Next
 * serves from its cache), a page restored from the browser's cache, a change
 * made in another tab, and a return to the tab after a while away.
 */
export function LiveUserProvider({ initial, children }: { initial: LiveUser | null; children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [live, setLive] = useState(initial);
  // A server render (refresh, log in or out) brings its own numbers, which win.
  const [seen, setSeen] = useState(initial);
  if (seen !== initial && JSON.stringify(seen) !== JSON.stringify(initial)) {
    setSeen(initial);
    setLive(initial);
  }
  const signedIn = initial !== null;
  const pending = useRef(false);
  const stale = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const pulls = useRef(0);

  const pull = useCallback(async () => {
    const n = ++pulls.current;
    try {
      const res = await fetch("/api/me/live", { cache: "no-store" });
      if (!res.ok) return;
      const data = (await res.json()) as { live: LiveUser | null };
      // Only the newest answer counts, so a slow early reply cannot undo a later one.
      if (n === pulls.current && data.live) setLive(data.live);
    } catch {
      // Offline: the numbers catch up on the next change or refresh.
    }
  }, []);

  const refresh = useCallback(() => {
    clearTimeout(timer.current);
    // Several answers in a row (or a change plus a focus) make one refresh. The
    // hold is checked when it runs: the answer that triggered it may be what
    // starts a session's hold, in the render right after the save.
    timer.current = setTimeout(() => {
      pending.current = isHeld();
      if (!pending.current) startTransition(() => router.refresh());
    }, 150);
  }, [router]);

  const sync = useCallback(() => {
    stale.current = false;
    if (signedIn) void pull();
    refresh();
  }, [signedIn, pull, refresh]);

  useEffect(
    () =>
      onChanged((_, remote) => {
        // A hidden tab catches up when it is shown again.
        if (remote && document.visibilityState === "hidden") stale.current = true;
        else sync();
      }),
    [sync],
  );

  useEffect(() => onReleased(() => pending.current && refresh()), [refresh]);

  // Leaving a held page (or arriving anywhere after a held change) runs the waiting refresh, so the header and layout are current.
  useEffect(() => {
    if (pending.current) refresh();
  }, [pathname, refresh]);

  // Guests listen too: logging in from another tab marks this one stale, and it catches up when shown.
  useEffect(() => {
    let hiddenAt = 0;
    const onVisibility = () => {
      if (document.visibilityState === "hidden") hiddenAt = Date.now();
      else if (stale.current || (signedIn && hiddenAt && Date.now() - hiddenAt > AWAY_MS)) sync();
    };
    const onPageShow = (e: PageTransitionEvent) => e.persisted && sync();
    // Back/forward shows the page as it was cached; read it again once Next has restored it.
    const onPopState = () => signedIn && setTimeout(sync, 0);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", onPageShow);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", onPageShow);
      window.removeEventListener("popstate", onPopState);
    };
  }, [signedIn, sync]);

  useEffect(() => () => clearTimeout(timer.current), []);

  return <Ctx.Provider value={live}>{children}</Ctx.Provider>;
}
