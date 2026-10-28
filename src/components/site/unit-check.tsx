"use client";

import { ArrowRight, BookOpen, CheckCircle2, ClipboardCheck, Gauge, RotateCcw, TriangleAlert, XCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Link, useRouter } from "@/i18n/navigation";
import { Button, buttonClasses } from "@/components/ui/button";
import { Confetti } from "@/components/ui/confetti";
import { AnswerArea } from "@/components/site/answer-area";
import { ConfidenceCheck, type Confidence } from "@/components/site/confidence-check";
import type { MasteryLevel } from "@/lib/mastery";
import { answerText, defaultResponse, isComplete, localKey, localShown, responseText, type Key, type QuizResponse, type Shown } from "@/lib/questions";
import { cn, pick } from "@/lib/utils";
import type { I18nText } from "@/server/db/schema";
import type { UnitCheckQuestion } from "@/server/mastery";

type Result = {
  score: number;
  total: number;
  passed: boolean;
  before: MasteryLevel;
  after: MasteryLevel;
  results: { itemId: string; response: QuizResponse; correct: boolean; shown: Shown<I18nText>; key: Key<I18nText>; explanation: I18nText | null; lessonTitle: I18nText }[];
  weakLessons: { id: string; title: I18nText; href: string }[];
  weakPrereqs: { skillId: string; title: I18nText; level: MasteryLevel; grade: number; href: string }[];
};

/**
 * A unit check: questions mixed from every lesson of the unit, one at a time
 * and without feedback, then scored on the server. The results say whether the
 * unit is mastered and, if not, what to go over first.
 */
export function UnitCheck({
  skillId,
  questions,
  token,
  courseHref,
  practiceHref,
  passPct,
}: {
  skillId: string;
  questions: UnitCheckQuestion[];
  token: string;
  courseHref: string;
  practiceHref: string;
  passPct: number;
}) {
  const t = useTranslations("mastery");
  const tl = useTranslations("lesson");
  const tg = useTranslations("grade");
  const tp = useTranslations("practice");
  const locale = useLocale();
  const router = useRouter();
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<QuizResponse | undefined>();
  const [answers, setAnswers] = useState<{ itemId: string; response: QuizResponse; confidence: Confidence }[]>([]);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const q = questions[i];
  const f = (x: I18nText) => pick(x, locale);
  const shown = q ? localShown(q.shown, f) : null;

  const submit = async (all: typeof answers) => {
    setBusy(true);
    setError(false);
    try {
      const res = await fetch("/api/progress/unit", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ skillId, token, answers: all }) });
      if (!res.ok) throw new Error(String(res.status));
      setResult((await res.json()) as Result);
      router.refresh();
    } catch {
      setError(true);
    }
    setBusy(false);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const answer = (confidence: Confidence) => {
    const response = shown ? defaultResponse(shown, chosen) : undefined;
    if (!shown || !isComplete(shown, response) || response === undefined || answers.length >= questions.length) return;
    const all = [...answers, { itemId: q.itemId, response, confidence }];
    setAnswers(all);
    setChosen(undefined);
    if (i + 1 < questions.length) {
      setI(i + 1);
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else submit(all);
  };

  if (result) {
    return (
      <div ref={topRef} className="space-y-6 scroll-mt-20">
        <section className="fx-rise relative clay p-6 text-center sm:p-10" role="status" aria-live="polite">
          {result.passed && <Confetti />}
          <span style={{ animationDelay: "120ms" }} className={cn("fx-pop mx-auto grid size-16 place-items-center rounded-[20px] shadow-clay-sm", result.passed ? "bg-emerald-50 text-success" : "bg-amber-50 text-amber-800")}>
            {result.passed ? <ClipboardCheck className="size-8" aria-hidden="true" /> : <TriangleAlert className="size-8" aria-hidden="true" />}
          </span>
          <h2 className="mt-5 text-2xl font-black sm:text-3xl">{t("resultTitle", { score: result.score, total: result.total })}</h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">{result.passed ? t("passed") : t("failed", { pct: passPct })}</p>
          <p className="mt-3 font-bold">
            {result.after !== result.before ? t("levelChanged", { from: t(result.before), to: t(result.after) }) : t("levelNow", { level: t(result.after) })}
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            {!result.passed && (
              <Link href={practiceHref} className={buttonClasses({ size: "lg" })}>
                <Gauge className="size-5" aria-hidden="true" />
                {tp("afterCheck")}
              </Link>
            )}
            <Link href={courseHref} className={buttonClasses({ variant: result.passed ? "primary" : "secondary", size: "lg" })}>
              {t("backToCourse")}
            </Link>
            <Button variant="secondary" size="lg" onClick={() => window.location.reload()}>
              <RotateCcw className="size-5" aria-hidden="true" />
              {t("again")}
            </Button>
          </div>
        </section>

        {result.weakPrereqs.length > 0 && (
          <section className="clay-sm space-y-3 p-4 sm:p-6">
            <h2 className="text-lg font-extrabold">{t("weakPrereqTitle")}</h2>
            <p className="text-sm text-muted-foreground">{t("weakPrereqText")}</p>
            <ul className="space-y-2">
              {result.weakPrereqs.map((p) => (
                <li key={p.skillId}>
                  <Link href={p.href} className="clay-sm clay-press flex min-h-12 items-center justify-between gap-3 px-4 py-3 font-bold">
                    <span>
                      {pick(p.title, locale)} <span className="text-sm font-semibold text-muted-foreground">· {tg("title", { grade: p.grade })}</span>
                    </span>
                    <ArrowRight className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {result.weakLessons.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-lg font-extrabold">{t("goOver")}</h2>
            <ul className="flex flex-wrap gap-2">
              {result.weakLessons.map((w) => (
                <li key={w.id}>
                  <Link href={w.href} className="clay-sm clay-press inline-flex min-h-11 items-center gap-1.5 px-3.5 py-2 text-sm font-bold">
                    <BookOpen className="size-4 text-primary" aria-hidden="true" />
                    {pick(w.title, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="space-y-3">
          <h2 className="text-lg font-extrabold">{t("answersTitle")}</h2>
          <ol className="clay divide-y divide-border/70 overflow-hidden">
            {result.results.map((r, k) => {
              const rs = localShown(r.shown, f);
              return (
                <li key={r.itemId} className="space-y-1 px-4 py-3 sm:px-5">
                  <p className="flex items-start gap-2 font-bold">
                    {r.correct ? <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" aria-label={tl("correct")} /> : <XCircle className="mt-0.5 size-5 shrink-0 text-destructive" aria-label={t("wrong")} />}
                    <span className="whitespace-pre-line">
                      {k + 1}. {rs.prompt}
                    </span>
                  </p>
                  {!r.correct && (
                    <div className="space-y-1 pl-7 text-sm">
                      <p className="text-destructive">
                        <span className="font-bold">{t("yourAnswer")}:</span> {responseText(rs, r.response)}
                      </p>
                      <p className="text-success">
                        <span className="font-bold">{t("rightAnswer")}:</span> {answerText(rs, localKey(r.key, f), locale)}
                      </p>
                      {r.explanation && <p className="text-muted-foreground">{pick(r.explanation, locale)}</p>}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    );
  }

  return (
    <div ref={topRef} className="space-y-4 scroll-mt-20">
      <div className="flex items-center gap-3">
        <p className="shrink-0 text-sm font-extrabold tabular-nums">{t("progressLabel", { n: Math.min(i + 1, questions.length), total: questions.length })}</p>
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuemin={0} aria-valuemax={questions.length} aria-valuenow={answers.length} aria-label={t("progressLabel", { n: i + 1, total: questions.length })}>
          <div className="bar-fill h-full rounded-full" style={{ width: `${(answers.length / questions.length) * 100}%`, background: "var(--s)" }} />
        </div>
      </div>
      <section key={i} className="fx-next clay space-y-4 p-4 sm:p-7" aria-labelledby={`uq-${i}`}>
        <p className="text-xs font-extrabold uppercase tracking-wide" style={{ color: "var(--s-text)" }}>{pick(q.lessonTitle, locale)}</p>
        <p id={`uq-${i}`} className="whitespace-pre-line text-lg font-bold leading-snug sm:text-xl">{shown!.prompt}</p>
        <AnswerArea key={q.itemId} shown={shown!} value={chosen} onChange={setChosen} disabled={busy} labelledBy={`uq-${i}`} />
        <ConfidenceCheck size="lg" label={t("howSure")} disabled={!isComplete(shown!, defaultResponse(shown!, chosen)) || busy || answers.length >= questions.length} onCheck={answer} />
        {error && (
          <div role="alert" className="fx-in flex flex-col gap-3 rounded-[var(--radius)] bg-red-50 p-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="font-bold text-destructive">{t("notSaved")}</p>
            <Button size="sm" variant="secondary" disabled={busy} onClick={() => submit(answers)}>
              {t("tryAgain")}
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
