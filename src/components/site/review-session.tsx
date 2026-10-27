"use client";

import { ArrowRight, BookOpen, CheckCircle2, NotebookPen, PartyPopper, RotateCcw, XCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { Button, buttonClasses } from "@/components/ui/button";
import { cn, pick } from "@/lib/utils";
import type { ReviewItem } from "@/server/review";

type Result = { correct: boolean; nextInDays: number | null; saved: boolean };

/**
 * One Daily Review session: a question at a time, the answer checked on the
 * server (which reschedules the card), then a short summary at the end.
 */
export function ReviewSession({ items: initial, more }: { items: ReviewItem[]; more: boolean }) {
  const t = useTranslations("review");
  const tl = useTranslations("lesson");
  const tg = useTranslations("grade");
  // The queue is fixed for the session, even if the page re-renders.
  const [items] = useState(initial);
  const locale = useLocale();
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<number | undefined>();
  const [results, setResults] = useState<Result[]>([]);
  const [busy, setBusy] = useState(false);
  const shownAt = useRef(Date.now());
  const topRef = useRef<HTMLDivElement>(null);

  const item = items[Math.min(i, items.length - 1)];
  const result = results[i];

  useEffect(() => {
    shownAt.current = Date.now();
  }, [i]);

  const check = async () => {
    if (chosen === undefined || busy) return;
    setBusy(true);
    const local = chosen === item.question.answer;
    let r: Result = { correct: local, nextInDays: null, saved: false };
    try {
      const res = await fetch("/api/review/answer", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ itemId: item.itemId, choice: chosen, ms: Date.now() - shownAt.current }),
      });
      if (res.ok) {
        const data = (await res.json()) as { correct: boolean; nextInDays: number };
        r = { correct: data.correct, nextInDays: data.nextInDays, saved: true };
      }
    } catch {
      // Offline: show the answer anyway; the card is not moved.
    }
    setResults((rs) => [...rs, r]);
    setBusy(false);
  };

  const next = () => {
    setChosen(undefined);
    setI((n) => n + 1);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (i >= items.length) {
    const score = results.filter((r) => r.correct).length;
    const missed = items.filter((_, k) => !results[k]?.correct);
    const ratio = items.length ? score / items.length : 0;
    return (
      <div ref={topRef} className="space-y-6 scroll-mt-20">
        <section className="clay p-6 text-center sm:p-10" role="status" aria-live="polite">
          <span className="mx-auto grid size-16 place-items-center rounded-[20px] bg-accent text-accent-foreground shadow-clay-sm">
            <PartyPopper className="size-8" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-2xl font-black sm:text-3xl">{t("summaryTitle", { score, total: items.length })}</h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">{ratio >= 0.8 ? t("summaryGood") : ratio >= 0.5 ? t("summaryOk") : t("summaryLow")}</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            {more && (
              <Link href="/review" className={buttonClasses({ size: "lg" })}>
                <RotateCcw className="size-5" aria-hidden="true" />
                {t("reviewMore")}
              </Link>
            )}
            <Link href="/review/mistakes" className={buttonClasses({ variant: more ? "secondary" : "primary", size: "lg" })}>
              <NotebookPen className="size-5" aria-hidden="true" />
              {t("notebook")}
            </Link>
            <Link href="/progress" className={buttonClasses({ variant: "secondary", size: "lg" })}>
              {t("backToProgress")}
            </Link>
          </div>
        </section>
        {missed.length > 0 && (
          <section aria-labelledby="missed-title" className="space-y-3">
            <h2 id="missed-title" className="text-xl font-extrabold">{t("missedTitle")}</h2>
            <ul className="clay divide-y divide-border/70 overflow-hidden">
              {missed.map((m) => (
                <li key={m.itemId} className="space-y-1 px-4 py-3 sm:px-5">
                  <p className="whitespace-pre-line font-bold">{pick(m.question.prompt, locale)}</p>
                  <p className="text-sm text-success">
                    <span className="font-bold">{t("rightAnswer")}:</span> {pick(m.question.options[m.question.answer], locale)}
                  </p>
                  {m.href && (
                    <Link href={m.href} className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-primary">
                      <BookOpen className="size-4" aria-hidden="true" />
                      {m.source === "exam" ? t("openExam") : t("readLesson")}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    );
  }

  const isLast = i === items.length - 1;
  return (
    <div ref={topRef} className="space-y-4 scroll-mt-20">
      <div className="flex items-center gap-3">
        <p className="shrink-0 text-sm font-extrabold tabular-nums">{t("progressLabel", { n: i + 1, total: items.length })}</p>
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuemin={0} aria-valuemax={items.length} aria-valuenow={results.length} aria-label={t("progressLabel", { n: i + 1, total: items.length })}>
          <div className="h-full rounded-full bg-primary transition-[width] duration-300" style={{ width: `${(results.length / items.length) * 100}%` }} />
        </div>
      </div>

      <section className={cn("clay space-y-4 p-4 sm:p-7", item.subjectColor && `subject-${item.subjectColor}`)} aria-labelledby={`rq-${i}`}>
        <p className="flex flex-wrap items-center gap-2 text-xs font-extrabold uppercase tracking-wide" style={{ color: item.subjectColor ? "var(--s-text)" : undefined }}>
          {item.subjectName && <span>{pick(item.subjectName, locale)}{item.grade ? ` · ${tg("title", { grade: item.grade })}` : ""}</span>}
          <span className="normal-case tracking-normal text-muted-foreground">· {pick(item.refTitle, locale)}</span>
        </p>
        <p id={`rq-${i}`} className="whitespace-pre-line text-lg font-bold leading-snug sm:text-xl">{pick(item.question.prompt, locale)}</p>
        <div role="radiogroup" aria-labelledby={`rq-${i}`} className="grid gap-2.5 md:grid-cols-2">
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
                disabled={!!result || busy}
                onClick={() => setChosen(oi)}
                className={cn(
                  "clay-sm clay-press min-h-12 px-4 py-3 text-left font-semibold disabled:opacity-100",
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
          <Button size="lg" className="w-full sm:w-auto" disabled={chosen === undefined || busy} onClick={check}>
            {tl("check")}
          </Button>
        ) : (
          <div className="space-y-3">
            <div role="status" className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <p className={cn("text-lg font-extrabold", result.correct ? "text-success" : "text-destructive")}>{result.correct ? t("correct") : t("incorrect")}</p>
              {result.nextInDays !== null && <p className="text-sm font-bold text-muted-foreground">{t("backIn", { n: result.nextInDays })}</p>}
              {!result.saved && <p className="text-sm font-bold text-accent">{t("notSaved")}</p>}
            </div>
            {item.question.explanation && <p className="rounded-[var(--radius)] bg-muted p-3 text-sm leading-relaxed">{pick(item.question.explanation, locale)}</p>}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="w-full sm:w-auto" onClick={next}>
                {isLast ? t("finish") : t("next")}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Button>
              {!result.correct && item.href && (
                <Link href={item.href} className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl px-3 text-sm font-bold text-primary hover:bg-muted">
                  <BookOpen className="size-4" aria-hidden="true" />
                  {item.source === "exam" ? t("openExam") : t("readLesson")}
                </Link>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
