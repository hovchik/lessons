"use client";

import { AlertTriangle, CheckCircle2, Flag, Play, RotateCcw, Save, Timer, XCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ExamQuestion, ExamScale } from "@/server/db/schema";
import { Button } from "@/components/ui/button";
import { cn, pick } from "@/lib/utils";
import { examTotal, marksFor, scoreExam } from "@/lib/exam-score";

type Phase = "intro" | "running" | "done";

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

/**
 * Exam mode: all questions at once, no feedback until the pupil presses Finish,
 * a soft countdown, then a results card with the marks and a per-question review.
 * For a signed-in pupil (`save` set) the finished paper is sent to /api/progress/exam.
 */
export function ExamRunner({
  questions,
  durationMin,
  scale,
  passPercent,
  save,
}: {
  questions: ExamQuestion[];
  durationMin: number;
  scale: ExamScale;
  passPercent: number;
  save?: { examId: string } | null;
}) {
  const t = useTranslations("exam");
  const locale = useLocale();
  const [phase, setPhase] = useState<Phase>("intro");
  const [answers, setAnswers] = useState<Record<number, number | undefined>>({});
  const [left, setLeft] = useState(durationMin * 60);
  const [saved, setSaved] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase !== "running") return;
    const id = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [phase]);

  const total = useMemo(() => examTotal(questions), [questions]);
  const answered = Object.values(answers).filter((v) => v !== undefined).length;
  const result = useMemo(() => scoreExam(questions, answers, passPercent), [questions, answers, passPercent]);

  const start = () => {
    setAnswers({});
    setLeft(durationMin * 60);
    setSaved(false);
    setPhase("running");
  };
  const finish = () => {
    if (answered < questions.length && !confirm(t("unansweredConfirm", { n: questions.length - answered }))) return;
    setPhase("done");
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (save) {
      const payload = { examId: save.examId, answers: questions.map((_, i) => answers[i] ?? null) };
      fetch("/api/progress/exam", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) })
        .then((r) => r.ok && setSaved(true))
        .catch(() => {});
    }
  };

  return (
    <section ref={topRef} aria-labelledby="exam-title" className="space-y-6 scroll-mt-20">
      <h2 id="exam-title" className="sr-only">{t("questions")}</h2>

      {phase === "intro" && (
        <div className="clay p-6 text-center sm:p-10">
          <span className="mx-auto grid size-16 place-items-center rounded-[20px] bg-muted text-primary">
            <Flag className="size-8" aria-hidden="true" />
          </span>
          <h3 className="mt-5 text-2xl font-extrabold">{t("readyTitle")}</h3>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">{t("readyText", { n: questions.length, points: total, min: durationMin })}</p>
          <Button size="lg" className="mt-6 w-full sm:w-auto" onClick={start}>
            <Play className="size-5" aria-hidden="true" />
            {t("start")}
          </Button>
        </div>
      )}

      {phase === "done" && (
        <div className={cn("clay p-5 sm:p-8", result.passed ? "ring-3 ring-success" : "ring-3 ring-accent")} role="status" aria-live="polite">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">{t("result")}</p>
              <p className="mt-1 text-3xl font-black sm:text-4xl">{t("scoreLine", { score: result.score, total: result.total })}</p>
              <p className={cn("mt-1 text-lg font-extrabold", result.passed ? "text-success" : "text-accent")}>
                {result.passed ? t("passed") : t("notPassed", { pass: passPercent })}
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="clay-sm p-3 text-center">
                <dt className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{t("percent")}</dt>
                <dd className="text-2xl font-black text-primary">{result.percent}%</dd>
              </div>
              {marksFor(scale, result).map((m) => (
                <div key={m.key} className="clay-sm p-3 text-center">
                  <dt className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{t(`scale.${m.key}`)}</dt>
                  <dd className="text-2xl font-black text-primary">{m.value}<span className="text-sm font-bold text-muted-foreground"> / {m.max}</span></dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{t("scaleNote")}</p>
          {saved && (
            <p className="mt-2 flex items-center gap-1.5 text-sm font-bold text-success">
              <Save className="size-4" aria-hidden="true" />
              {t("saved")}
            </p>
          )}
          <Button variant="secondary" size="sm" onClick={start} className="mt-4 w-full sm:w-auto">
            <RotateCcw className="size-4" aria-hidden="true" />
            {t("retake")}
          </Button>
        </div>
      )}

      {phase !== "intro" && (
        <>
          {phase === "running" && (
            <div className="pt-safe sticky top-14 z-30 -mx-4 flex items-center justify-between gap-3 border-b border-border/60 bg-background/90 px-4 py-2 backdrop-blur-md sm:top-16 sm:mx-0 sm:rounded-[var(--radius)] sm:border sm:px-4">
              <p className="text-sm font-bold">{t("answered", { n: answered, total: questions.length })}</p>
              <p className={cn("inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-extrabold tabular-nums", left === 0 && "bg-red-50 text-destructive")}>
                <Timer className="size-4" aria-hidden="true" />
                {left === 0 ? t("timeUp") : fmt(left)}
              </p>
            </div>
          )}

          <ol className="space-y-4">
            {questions.map((qq, i) => {
              const chosen = answers[i];
              const done = phase === "done";
              const correct = done && chosen === qq.answer;
              return (
                <li key={i} className={cn("clay p-4 sm:p-6", done && (correct ? "ring-2 ring-success/60" : "ring-2 ring-destructive/40"))}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground">
                      {t("question", { n: i + 1, total: questions.length })}
                      {qq.topic && <span className="ml-2 normal-case tracking-normal">· {pick(qq.topic, locale)}</span>}
                    </p>
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-bold">{t("points", { n: qq.points ?? 1 })}</span>
                  </div>
                  <p id={`eq-${i}`} className="mt-2 whitespace-pre-line text-base font-bold leading-snug sm:text-lg">{pick(qq.prompt, locale)}</p>
                  <div role="radiogroup" aria-labelledby={`eq-${i}`} className="mt-3 grid gap-2.5 md:grid-cols-2">
                    {qq.options.map((opt, oi) => {
                      const selected = chosen === oi;
                      const showCorrect = done && oi === qq.answer;
                      const showWrong = done && selected && oi !== qq.answer;
                      return (
                        <button
                          key={oi}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          disabled={done}
                          onClick={() => setAnswers((a) => ({ ...a, [i]: oi }))}
                          className={cn(
                            "clay-sm clay-press min-h-12 px-4 py-3 text-left font-semibold disabled:opacity-100",
                            selected && !done && "ring-3 ring-primary",
                            showCorrect && "bg-emerald-50 ring-3 ring-success",
                            showWrong && "bg-red-50 ring-3 ring-destructive",
                          )}
                        >
                          <span className="flex items-start gap-2 leading-snug">
                            <span className="w-5 shrink-0 font-black text-muted-foreground">{String.fromCharCode(65 + oi)}</span>
                            {showCorrect && <CheckCircle2 className="size-5 shrink-0 text-success" aria-hidden="true" />}
                            {showWrong && <XCircle className="size-5 shrink-0 text-destructive" aria-hidden="true" />}
                            <span>{pick(opt, locale)}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {done && (
                    <div className="mt-3 space-y-2 text-sm">
                      {chosen === undefined && (
                        <p className="inline-flex items-center gap-1.5 font-bold text-accent">
                          <AlertTriangle className="size-4" aria-hidden="true" />
                          {t("skipped")}
                        </p>
                      )}
                      {qq.explanation && <p className="rounded-[var(--radius)] bg-muted p-3 leading-relaxed">{pick(qq.explanation, locale)}</p>}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          {phase === "running" && (
            <div className="clay flex flex-col items-center gap-3 p-5 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="font-bold">{t("answered", { n: answered, total: questions.length })}</p>
              <Button size="lg" onClick={finish} className="w-full sm:w-auto">
                <Flag className="size-5" aria-hidden="true" />
                {t("finish")}
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
