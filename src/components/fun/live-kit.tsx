"use client";

import { useEffect, useState } from "react";
import { LIVE_SHAPES } from "@/lib/live-quiz";
import { cn } from "@/lib/utils";

/** The four answer colours, with a shape each so colour isn't the only cue. */
export const OPTION_STYLE = [
  "bg-rose-600 text-white",
  "bg-sky-600 text-white",
  "bg-amber-500 text-amber-950",
  "bg-emerald-600 text-white",
] as const;

export function Shape({ i, className }: { i: number; className?: string }) {
  const s = LIVE_SHAPES[i];
  return (
    <svg viewBox="0 0 24 24" className={cn("size-6 shrink-0 fill-current", className)} aria-hidden="true">
      {s === "triangle" && <path d="M12 3 22 20H2z" />}
      {s === "diamond" && <path d="M12 2 22 12 12 22 2 12z" />}
      {s === "circle" && <circle cx="12" cy="12" r="10" />}
      {s === "square" && <rect x="3" y="3" width="18" height="18" rx="2" />}
    </svg>
  );
}

/**
 * Polls a live-quiz state URL about once a second while `url` is set.
 * Returns the latest state, and `gone` once the server no longer knows the game.
 */
export function useLivePoll<T>(url: string | null, every = 1000) {
  const [state, setState] = useState<{ url: string | null; data: T | null; gone: boolean }>({ url, data: null, gone: false });
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!url) return;
    let stop = false;
    let busy = false;
    const load = async () => {
      if (busy) return;
      busy = true;
      try {
        const res = await fetch(url, { cache: "no-store" });
        // A reply for a poll that was stopped (another game, or unmounted) is dropped.
        if (stop) return;
        if (res.status === 404) setState({ url, data: null, gone: true });
        else if (res.ok) {
          const data = (await res.json()) as T;
          if (!stop) setState({ url, data, gone: false });
        }
      } catch {
        // A dropped poll; the next one catches up.
      } finally {
        busy = false;
      }
    };
    load();
    const id = setInterval(load, every);
    return () => {
      stop = true;
      clearInterval(id);
    };
  }, [url, every, tick]);
  // State left over from another URL (the previous game) doesn't count.
  const mine = state.url === url;
  return { data: mine ? state.data : null, gone: mine && state.gone, refresh: () => setTick((n) => n + 1) };
}

/** Seconds left, counted down locally between polls from the server's msLeft. */
export function useCountdown(msLeft: number, key: string) {
  const [left, setLeft] = useState(msLeft);
  useEffect(() => {
    const end = Date.now() + msLeft;
    setLeft(msLeft);
    const id = setInterval(() => setLeft(Math.max(0, end - Date.now())), 200);
    return () => clearInterval(id);
    // The server's figure resets the clock each time a poll brings a new question.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return Math.ceil(left / 1000);
}
