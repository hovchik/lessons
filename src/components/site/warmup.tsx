"use client";

import { BookOpen, CheckCircle2, Flame, XCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { ConfidenceCheck, type Confidence } from "@/components/site/confidence-check";
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
  const [picked, setPicked] = useState<Record<number, number>>({});
  const [results, setResults] = useState<Record<number, Result>>({});
  const [busy, setBusy] = useState<number | null>(null);
  const shownAt = useRef(Date.now());
  const allDone = items.every((_, i) => results[i]);

  const check = async (i: number, confidence: Confidence) => {
    const item = items[i];
    const choice = picked[i];
    if (choice === undefined || busy !== null) return;
    let r: Result = { correct: choice === item.question.answer, nextInDays: null };
    if (signedIn) {
      setBusy(i);
      try {
        const res = await fetch("/api/review/answer", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ itemId: item.itemId, choice, source: "warmup", confidence, ms: Math.min(Date.now() - shownAt.current, 3_600_000) }),
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
          const chosen = picked[i];
          return (
            <li key={item.itemId} className="space-y-3 border-t border-border/60 pt-5 first:border-t-0 first:pt-0">
              <p className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground">{t("from", { title: pick(item.refTitle, locale) })}</p>
              <p id={`wq-${i}`} className="whitespace-pre-line font-bold leading-snug">{pick(item.question.prompt, locale)}</p>
              <div role="radiogroup" aria-labelledby={`wq-${i}`} className="grid gap-2 md:grid-cols-2">
                {item.question.options.map((opt, oi) => {
                  const selected = chosen === oi;
                  const showCorrect = !!result && oi === item.question.answer;
                  const showWrong = !!result && selected && oi !== item.question.answer;
                  return (
                    <button
                      key={oi}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      disabled={!!result || busy === i}
                      onClick={() => setPicked((p) => ({ ...p, [i]: oi }))}
                      className={cn(
                        "clay-sm clay-press min-h-11 px-3.5 py-2.5 text-left text-sm font-semibold disabled:opacity-100",
                        selected && !result && "ring-3 ring-primary",
                        showCorrect && "bg-emerald-50 ring-3 ring-success",
                        showWrong && "bg-red-50 ring-3 ring-destructive",
                      )}
                    >
                      <span className="flex items-start gap-2 leading-snug">
                        {showCorrect && <CheckCircle2 className="size-5 shrink-0 text-success" aria-hidden="true" />}
                        {showWrong && <XCircle className="size-5 shrink-0 text-destructive" aria-hidden="true" />}
                        {pick(opt, locale)}
                      </span>
                    </button>
                  );
                })}
              </div>
              {!result ? (
                <ConfidenceCheck disabled={chosen === undefined || busy !== null} onCheck={(c) => check(i, c)} />
              ) : (
                <div className="space-y-2">
                  <div role="status" className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className={cn("font-extrabold", result.correct ? "text-success" : "text-destructive")}>{result.correct ? tr("correct") : tr("incorrect")}</p>
                    {result.nextInDays !== null && <p className="text-sm font-bold text-muted-foreground">{tr("backIn", { n: result.nextInDays })}</p>}
                  </div>
                  {!result.correct && item.question.explanation && <p className="rounded-[var(--radius)] bg-muted p-3 text-sm leading-relaxed">{pick(item.question.explanation, locale)}</p>}
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
      {allDone && <p role="status" className="text-sm font-bold text-success">{t("done")}</p>}
    </section>
  );
}
