"use client";

import { BookOpen, Flame } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { AnswerArea } from "@/components/site/answer-area";
import { ConfidenceCheck, type Confidence } from "@/components/site/confidence-check";
import { defaultResponse, isComplete, isRight, localKey, localShown, type QuizResponse } from "@/lib/questions";
import { cn, pick } from "@/lib/utils";
import type { ReviewItem } from "@/server/review";

type Result = { correct: boolean; nextInDays: number | null };

/**
 * Two questions from earlier lessons at the top of a lesson, answered from
 * memory before reading on. A signed-in pupil's answers move their review cards.
 */
export function Warmup({ items, signedIn }: { items: ReviewItem[]; signedIn: boolean }) {
  const t = useTranslations("warmup");
  const tr = useTranslations("review");
  const locale = useLocale();
  const [picked, setPicked] = useState<Record<number, QuizResponse>>({});
  const [results, setResults] = useState<Record<number, Result>>({});
  const [busy, setBusy] = useState<number | null>(null);
  const shownAt = useRef(Date.now());
  const allDone = items.every((_, i) => results[i]);
  const f = (x: Parameters<typeof pick>[0]) => pick(x, locale);
  const local = items.map((item) => ({ shown: localShown(item.shown, f), key: localKey(item.key, f) }));

  const check = async (i: number, confidence: Confidence) => {
    const item = items[i];
    const response = defaultResponse(local[i].shown, picked[i]);
    if (!isComplete(local[i].shown, response) || response === undefined || busy !== null) return;
    setPicked((p) => ({ ...p, [i]: response }));
    let r: Result = { correct: isRight(local[i].key, response), nextInDays: null };
    if (signedIn) {
      setBusy(i);
      try {
        const res = await fetch("/api/review/answer", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ itemId: item.itemId, response, source: "warmup", confidence, ms: Math.min(Date.now() - shownAt.current, 3_600_000) }),
        });
        if (res.ok) {
          const data = (await res.json()) as Result;
          r = { correct: data.correct, nextInDays: data.nextInDays };
        }
      } catch {
        // Offline: the answer is still shown, just not saved.
      }
      setBusy(null);
    }
    setResults((rs) => ({ ...rs, [i]: r }));
  };

  return (
    <section aria-labelledby="warmup-title" className="clay-sm space-y-5 p-4 sm:p-6">
      <div>
        <h2 id="warmup-title" className="flex items-center gap-2 text-lg font-extrabold">
          <Flame className="size-5 text-accent" aria-hidden="true" />
          {t("title")}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">{t("intro", { n: items.length })}</p>
      </div>
      <ol className="space-y-6">
        {items.map((item, i) => {
          const result = results[i];
          const { shown, key } = local[i];
          return (
            <li key={item.itemId} className="space-y-3 border-t border-border/60 pt-5 first:border-t-0 first:pt-0">
              <p className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground">{t("from", { title: pick(item.refTitle, locale) })}</p>
              <p id={`wq-${i}`} className="whitespace-pre-line font-bold leading-snug">{shown.prompt}</p>
              <AnswerArea
                shown={shown}
                value={picked[i]}
                onChange={(r) => setPicked((p) => ({ ...p, [i]: r }))}
                disabled={busy === i}
                reveal={result ? key : null}
                labelledBy={`wq-${i}`}
                compact
              />
              {!result ? (
                <ConfidenceCheck disabled={!isComplete(shown, defaultResponse(shown, picked[i])) || busy !== null} onCheck={(c) => check(i, c)} />
              ) : (
                <div className="fx-in space-y-2">
                  <div role="status" className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className={cn("font-extrabold", result.correct ? "text-success" : "text-destructive")}>{result.correct ? tr("correct") : tr("incorrect")}</p>
                    {result.nextInDays !== null && <p className="text-sm font-bold text-muted-foreground">{tr("backIn", { n: result.nextInDays })}</p>}
                  </div>
                  {!result.correct && item.explanation && <p className="rounded-[var(--radius)] bg-muted p-3 text-sm leading-relaxed">{pick(item.explanation, locale)}</p>}
                  {!result.correct && item.href && (
                    <Link href={item.href} className="inline-flex min-h-11 items-center gap-1.5 rounded-xl text-sm font-bold text-primary">
                      <BookOpen className="size-4" aria-hidden="true" />
                      {tr("readLesson")}
                    </Link>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>
      {allDone && <p role="status" className="fx-in text-sm font-bold text-success">{t("done")}</p>}
    </section>
  );
}
