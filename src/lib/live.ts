"use client";

import { useEffect } from "react";

/**
 * Keeps pages that show the pupil's own data in step with what they just did.
 * A component that saved something calls `notifyChanged()`; the LiveUser
 * provider then re-reads the header numbers and refreshes the page, and other
 * open tabs of the app do the same. A session that would lose its place if
 * the page re-rendered under it (Daily Review, a unit check…) holds the
 * refresh with `useHoldRefresh` until it is finished or left.
 */
export type LiveChange = {
  /** The lesson whose progress changed, with the saved row, so its card can update in place. */
  lesson?: { id: string; completed: boolean; bestScore: number | null; bestTotal: number | null };
};

/** The fields of a saved lesson_progress row that a lesson page shows. */
export type LessonProgressRow = { lessonId: string; completedAt: string | null; bestScore: number | null; bestTotal: number | null };

export const lessonChange = (p: LessonProgressRow): LiveChange => ({
  lesson: { id: p.lessonId, completed: !!p.completedAt, bestScore: p.bestScore, bestTotal: p.bestTotal },
});

const EVENT = "lessons:changed";
let channel: BroadcastChannel | null | undefined;
const getChannel = () => {
  if (channel === undefined) channel = typeof BroadcastChannel === "undefined" ? null : new BroadcastChannel("lessons-live");
  return channel;
};

/** Tells this tab and the app's other tabs that the pupil's data changed. */
export function notifyChanged(change: LiveChange = {}) {
  window.dispatchEvent(new CustomEvent<LiveChange>(EVENT, { detail: change }));
  try {
    getChannel()?.postMessage(change);
  } catch {
    // A closed channel only means other tabs catch up on their next focus.
  }
}

/** Calls `fn` for every change; `remote` is true when it came from another tab. */
export function onChanged(fn: (change: LiveChange, remote: boolean) => void) {
  const local = (e: Event) => fn((e as CustomEvent<LiveChange>).detail ?? {}, false);
  const remote = (e: MessageEvent) => fn((e.data as LiveChange) ?? {}, true);
  window.addEventListener(EVENT, local);
  const ch = getChannel();
  ch?.addEventListener("message", remote);
  return () => {
    window.removeEventListener(EVENT, local);
    ch?.removeEventListener("message", remote);
  };
}

let holds = 0;
const released = new Set<() => void>();

export const isHeld = () => holds > 0;

/** Runs `fn` each time the last hold is let go. */
export function onReleased(fn: () => void) {
  released.add(fn);
  return () => void released.delete(fn);
}

/** While `active`, page refreshes wait (the header still updates); they run once it is let go. */
export function useHoldRefresh(active: boolean) {
  useEffect(() => {
    if (!active) return;
    holds++;
    return () => {
      holds--;
      if (holds === 0) released.forEach((fn) => fn());
    };
  }, [active]);
}
