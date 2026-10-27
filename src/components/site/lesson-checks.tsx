"use client";

import { useLocale } from "next-intl";
import { createContext, useCallback, useContext, useRef, type ReactNode } from "react";

/**
 * Lets the quick checks inside a lesson body save their first pick for a
 * signed-in pupil. Outside a lesson (admin preview) checks simply work locally.
 */
const Ctx = createContext<{ lessonId: string; locale: string } | null>(null);

export function LessonChecks({ lessonId, children }: { lessonId: string | null; children: ReactNode }) {
  const locale = useLocale();
  if (!lessonId) return <>{children}</>;
  return <Ctx.Provider value={{ lessonId, locale }}>{children}</Ctx.Provider>;
}

/** Returns a function that saves the first pick of check number `index` (once per page view). */
export function useRecordCheck(index: string | undefined) {
  const ctx = useContext(Ctx);
  const done = useRef(false);
  const shownAt = useRef<number | null>(null);
  if (shownAt.current === null && typeof window !== "undefined") shownAt.current = Date.now();
  return useCallback(
    (choice: number) => {
      if (!ctx || index === undefined || done.current) return;
      done.current = true;
      const body = { lessonId: ctx.lessonId, index: Number(index), choice, locale: ctx.locale, ms: shownAt.current ? Math.min(Date.now() - shownAt.current, 3_600_000) : null };
      fetch("/api/progress/check", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) }).catch(() => {});
    },
    [ctx, index],
  );
}
