"use client";

import { ArrowRight, BookOpen, ClipboardCheck, Gauge, RotateCcw } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Link, useRouter } from "@/i18n/navigation";
import { Button, buttonClasses } from "@/components/ui/button";
import { Confetti } from "@/components/ui/confetti";
import { AnswerArea } from "@/components/site/answer-area";
import { ConfidenceCheck, type Confidence } from "@/components/site/confidence-check";
import { MasteryBadge } from "@/components/site/mastery-badge";
import type { Stretch } from "@/lib/elo";
import type { MasteryLevel } from "@/lib/mastery";
import { answerText, defaultResponse, isComplete, localKey, localShown, type Key, type QuizResponse } from "@/lib/questions";
import { cn, pick } from "@/lib/utils";
import type { I18nText } from "@/server/db/schema";
import type { PracticeQuestion } from "@/server/practice";

type Feedback = { correct: boolean; key: Key<I18nText>; explanation: I18nText | null; lessonHref: string; next: PracticeQuestion | null; readiness: number; level: MasteryLevel | null };

const STRETCH: Record<Stretch, string> = {
  easy: "bg-emerald-50 text-success",
  right: "bg-sky-50 text-sky-800",
  hard: "bg-amber-50 text-amber-800",
};

/**
 * Adaptive practice of one unit: the server picks each question for the pupil's
 * level and checks the answer, which comes back with the explanation and the
 * next question. A round ends after `total` questions with how ready the pupil
 * now is for the unit.
 */
export function PracticeSession({
  skillId,
  first,
  total,
  readiness,
  courseHref,
  checkHref,
}: {
  skillId: string;
  first: PracticeQuestion;
  total: number;
  readiness: number;
  courseHref: string;
  checkHref: string;
}) {
  const t = useTranslations("practice");
  const tm = useTranslations("mastery");
  const locale = useLocale();
  const router = useRouter();
  // Fixed at the start: the page refreshes at the end of the round, and the summary compares with where it began.
  const [startReadiness] = useState(readiness);
  const [q, setQ] = useState(first);
  const [chosen, setChosen] = useState<QuizResponse | undefined>();
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [round, setRound] = useState<{ q: PracticeQuestion; response: QuizResponse; correct: boolean; key: Key<I18nText> }[]>([]);
  const [done, setDone] = useState<{ readiness: number; level: MasteryLevel } | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const pending = useRef<Confidence | null>(null);
  const shownAt = useRef(Date.now());
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    shownAt.current = Date.now();
  }, [q]);

  const f = (x: I18nText) => pick(x, locale);
  const shown = localShown(q.shown, f);

  const check = async (confidence: Confidence) => {
    const response = defaultResponse(shown, chosen);
    if (!isComplete(shown, response) || response === undefined || busy || feedback) return;
    pending.current = confidence;
    setBusy(true);
    setError(false);
    try {
      const res = await fetch("/api/practice/answer", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          skillId,
          itemId: q.itemId,
          response,
          confidence,
          ms: Math.min(Date.now() - shownAt.current, 3_600_000),
          seen: round.map((r) => r.q.itemId),
          results: round.map((r) => r.correct),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = (await res.json()) as Feedback;
      setChosen(response);
      setFeedback(data);
      setRound((rs) => [...rs, { q, response, correct: data.correct, key: data.key }]);
    } catch {
      // The answer is checked on the server, so without it there is nothing to show yet.
      setError(true);
    }
    setBusy(false);
  };

  const next = () => {
    if (!feedback) return;
    if (feedback.next) {
      setQ(feedback.next);
      setChosen(undefined);
      setFeedback(null);
    } else {
      setDone({ readiness: feedback.readiness, level: feedback.level ?? "none" });
      // The header's level and readiness catch up; this session keeps its state.
      router.refresh();
    }
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (done) {
    const score = round.filter((r) => r.correct).length;
    const missed = round.filter((r) => !r.correct);
    return (
      <div ref={topRef} className="space-y-6 scroll-mt-20">
        <section className="fx-rise relative clay p-6 text-center sm:p-10" role="status" aria-live="polite">
          {round.length > 0 && score / round.length >= 0.8 && <Confetti />}
          <span style={{ background: "var(--s)", animationDelay: "120ms" }} className="fx-pop mx-auto grid size-16 place-items-center rounded-[20px] text-white shadow-clay-sm">
            <Gauge className="size-8" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-2xl font-black sm:text-3xl">{t("summaryTitle", { score, total: round.length })}</h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            {done.readiness !== startReadiness ? t("readinessChanged", { from: startReadiness, to: done.readiness }) : t("readiness", { pct: done.readiness })}
          </p>
          <p className="mt-3 flex flex-wrap items-center justify-center gap-2 font-bold">
            {tm("yourLevel")} <MasteryBadge level={done.level} />
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" onClick={() => window.location.reload()}>
              <RotateCcw className="size-5" aria-hidden="true" />
              {t("again")}
            </Button>
            <Link href={checkHref} className={buttonClasses({ variant: "secondary", size: "lg" })}>
              <ClipboardCheck className="size-5" aria-hidden="true" />
              {t("takeCheck")}
            </Link>
            <Link href={courseHref} className={buttonClasses({ variant: "secondary", size: "lg" })}>
              {tm("backToCourse")}
            </Link>
          </div>
        </section>
        {missed.length > 0 && (
          <section aria-labelledby="practice-missed" className="space-y-3">
            <h2 id="practice-missed" className="text-lg font-extrabold">{t("missedTitle")}</h2>
            <ul className="clay divide-y divide-border/70 overflow-hidden">
              {missed.map((m) => (
                <li key={m.q.itemId} className="space-y-1 px-4 py-3 sm:px-5">
                  <p className="whitespace-pre-line font-bold">{pick(m.q.shown.prompt, locale)}</p>
                  <p className="text-sm text-success">
                    <span className="font-bold">{tm("rightAnswer")}:</span> {answerText(localShown(m.q.shown, f), localKey(m.key, f), locale)}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    );
  }

  const n = round.length + (feedback ? 0 : 1);
  return (
    <div ref={topRef} className="space-y-4 scroll-mt-20">
      <div className="flex items-center gap-3">
        <p className="shrink-0 text-sm font-extrabold tabular-nums">{tm("progressLabel", { n, total })}</p>
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={round.length} aria-label={tm("progressLabel", { n, total })}>
          <div className="bar-fill h-full rounded-full" style={{ width: `${(round.length / total) * 100}%`, background: "var(--s)" }} />
        </div>
      </div>

      <section key={q.itemId} className="fx-next clay space-y-4 p-4 sm:p-7" aria-labelledby="pq">
        <p className="flex flex-wrap items-center gap-2 text-xs font-extrabold uppercase tracking-wide" style={{ color: "var(--s-text)" }}>
          <span>{pick(q.lessonTitle, locale)}</span>
          <span className={cn("rounded-full px-2 py-0.5 normal-case tracking-normal", STRETCH[q.stretch])}>{t(`stretch.${q.stretch}`)}</span>
        </p>
        <p id="pq" className="whitespace-pre-line text-lg font-bold leading-snug sm:text-xl">{shown.prompt}</p>
        <AnswerArea shown={shown} value={chosen} onChange={setChosen} disabled={busy} reveal={feedback ? localKey(feedback.key, f) : null} labelledBy="pq" />

        {!feedback ? (
          <>
            <ConfidenceCheck size="lg" label={tm("howSure")} disabled={!isComplete(shown, defaultResponse(shown, chosen)) || busy} onCheck={check} />
            {error && (
              <div role="alert" className="fx-in flex flex-col gap-3 rounded-[var(--radius)] bg-red-50 p-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                <p className="font-bold text-destructive">{t("notSaved")}</p>
                <Button size="sm" variant="secondary" disabled={busy} onClick={() => check(pending.current ?? 2)}>
                  {tm("tryAgain")}
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="fx-in space-y-3">
            <p role="status" className={cn("text-lg font-extrabold", feedback.correct ? "text-success" : "text-destructive")}>{feedback.correct ? t("correct") : t("incorrect")}</p>
            {feedback.explanation && <p className="rounded-[var(--radius)] bg-muted p-3 text-sm leading-relaxed">{pick(feedback.explanation, locale)}</p>}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="w-full sm:w-auto" onClick={next}>
                {feedback.next ? t("next") : t("finish")}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Button>
              {!feedback.correct && (
                <Link href={feedback.lessonHref} className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl px-3 text-sm font-bold text-primary hover:bg-muted">
                  <BookOpen className="size-4" aria-hidden="true" />
                  {t("readLesson")}
                </Link>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
