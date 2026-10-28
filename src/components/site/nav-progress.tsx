"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type State = "idle" | "loading" | "done";

/**
 * A thin bar at the top of the screen while the next page is on its way, so a
 * tap on a slow phone connection gets an answer at once. It starts on a click on
 * an in-app link and finishes when the path changes (styles in globals.css).
 */
export function NavProgress() {
  const pathname = usePathname();
  const [state, setState] = useState<State>("idle");

  useEffect(() => {
    setState((s) => (s === "loading" ? "done" : s));
  }, [pathname]);

  useEffect(() => {
    if (state === "idle") return;
    // "done" fades out; a "loading" that never arrives (an error, a cancelled tap) gives up after a while.
    const timer = setTimeout(() => setState("idle"), state === "done" ? 600 : 8_000);
    return () => clearTimeout(timer);
  }, [state]);

  useEffect(() => {
    // Capture phase: next/link calls preventDefault in its own handler, so this runs before it.
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      setState("loading");
    };
    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, []);

  return <div className="nav-progress" data-state={state} aria-hidden="true" />;
}
