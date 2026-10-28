"use client";

import { CheckCircle2, CircleHelp, RotateCcw, Save, XCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Confetti } from "@/components/ui/confetti";
import { AnswerArea } from "@/components/site/answer-area";
import { ConfidenceCheck, type Confidence } from "@/components/site/confidence-check";
import { defaultResponse, isComplete, isRight, type QuizResponse } from "@/lib/questions";
import type { LocalQuestion } from "@/lib/quiz";
import { cn } from "@/lib/utils";

type Props = {
  questions: LocalQuestion[];
  /** When set (signed-in pupil), a finished quiz is saved to /api/progress/quiz. */
  save?: { lessonId: string } | null;
};

/** With four or more options, a wrong first try also crosses out one other wrong option as the hint. */
function crossedOut(q: LocalQuestion, i: number, first: QuizResponse): number | null {
  if (q.shown.kind !== "choice" || q.key.kind !== "choice" || typeof first !== "number" || q.shown.options.length < 4) return null;
  const answer = q.key.answer;
  const wrong = q.shown.options.map((_, k) => k).filter((k) => k !== answer && k !== first);
  return wrong[(i + first) % wrong.length];
}

const same = (a: QuizResponse | undefined, b: QuizResponse | undefined) => JSON.stringify(a) === JSON.stringify(b);

/**
 * The lesson quiz. Each question is checked with "sure" or "guessing"; a wrong
 * first try gets one more go (with a hint for multiple choice) before the
 * answer is shown. The score counts first tries.
 */
export function Quiz({ questions, save }: Props) {
  const t = useTranslations("lesson");
  // The answer being given, the first checked answer with its confidence, and the second try.
  const [picked, setPicked] = useState<Record<number, QuizResponse>>({});
  const [first, setFirst] = useState<Record<number, QuizResponse>>({});
  const [confidence, setConfidence] = useState<Record<number, Confidence>>({});
  const [second, setSecond] = useState<Record<number, QuizResponse>>({});
  const [showWhy, setShowWhy] = useState<Record<number, boolean>>({});
  const [saved, setSaved] = useState(false);
  const savedRun = useRef(0);

  const total = questions.length;
  const right = (i: number, r: QuizResponse | undefined) => isRight(questions[i].key, r);
  // With only two options a second try would be a giveaway, so there is none.
  const noRetry = (q: LocalQuestion) => q.shown.kind === "choice" && q.shown.options.length <= 2;
  const isDone = (i: number) => first[i] !== undefined && (right(i, first[i]) || second[i] !== undefined || noRetry(questions[i]));
  const score = questions.filter((_, i) => right(i, first[i])).length;
  const secondTries = questions.filter((_, i) => second[i] !== undefined && right(i, second[i])).length;
  const allDone = questions.every((_, i) => isDone(i));

  // Save once per completed run.
  useEffect(() => {
    if (!save || !allDone || total === 0 || savedRun.current !== 0) return;
    savedRun.current = 1;
    const payload = {
      lessonId: save.lessonId,
      answers: questions.map((_, i) => first[i] ?? 0),
      confidence: questions.map((_, i) => confidence[i] ?? null),
      retries: questions.map((_, i) => second[i] ?? null),
    };
    fetch("/api/progress/quiz", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) })
      .then((r) => r.ok && setSaved(true))
      .catch(() => {});
  }, [save, allDone, total, first, confidence, second, questions]);

  const reset = () => {
    setPicked({});
    setFirst({});
    setConfidence({});
    setSecond({});
    setShowWhy({});
    setSaved(false);
    savedRun.current = 0;
  };

  return (
    <section aria-labelledby="quiz-title" className="clay p-4 sm:p-7" id="quiz">
      <h2 id="quiz-title" className="flex items-center gap-2 text-xl font-extrabold">
        <CircleHelp className="size-6 text-accent" aria-hidden="true" />
        {t("quiz")}
      </h2>
      <ol className="mt-5 space-y-7">
        {questions.map((qq, i) => {
          const chosen = picked[i];
          const tried = first[i] !== undefined;
          const done = isDone(i);
          const retrying = tried && !done;
          const firstRight = right(i, first[i]);
          const cross = tried && !firstRight ? crossedOut(qq, i, first[i]) : null;
          const answer = qq.key.kind === "choice" ? qq.key.answer : -1;
          const set = (r: QuizResponse) => setPicked((a) => ({ ...a, [i]: r }));
          return (
            <li key={i} className="space-y-3 border-t border-border/60 pt-5 first:border-t-0 first:pt-0">
              <p className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground">{t("question", { n: i + 1, total })}</p>
              <p id={`q-${i}`} className="text-base font-bold leading-snug sm:text-lg">{qq.shown.prompt}</p>
              {qq.shown.kind === "choice" ? (
                <div role="radiogroup" aria-labelledby={`q-${i}`} className="grid gap-2.5 md:grid-cols-3">
                  {qq.shown.options.map((opt, oi) => {
                    const selected = chosen === oi;
                    const ruledOut = tried && (oi === first[i] || oi === cross) && oi !== answer;
                    const showCorrect = done && oi === answer;
                    const showWrong = (done && selected && oi !== answer) || (tried && oi === first[i] && !firstRight);
                    return (
                      <button
                        key={oi}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        disabled={done || ruledOut}
                        onClick={() => set(oi)}
                        className={cn(
                          "clay-sm clay-press min-h-12 px-4 py-3 text-left font-semibold disabled:opacity-100",
                          selected && !done && !ruledOut && "ring-3 ring-primary",
                          showCorrect && "bg-emerald-50 ring-3 ring-success fx-right",
                          showWrong && "bg-red-50 ring-3 ring-destructive fx-wrong",
                          oi === cross && !done && "text-muted-foreground line-through opacity-60",
                        )}
                      >
                        <span className="flex items-start gap-2 leading-snug">
                          {showCorrect && <CheckCircle2 className="fx-tick size-5 shrink-0 text-success" aria-hidden="true" />}
                          {showWrong && <XCircle className="fx-tick size-5 shrink-0 text-destructive" aria-hidden="true" />}
                          {opt}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <AnswerArea shown={qq.shown} value={done ? (second[i] ?? first[i]) : chosen} onChange={set} reveal={done ? qq.key : null} labelledBy={`q-${i}`} />
              )}
              {!tried ? (
                <ConfidenceCheck
                  disabled={!isComplete(qq.shown, defaultResponse(qq.shown, chosen))}
                  onCheck={(c) => {
                    setFirst((f) => ({ ...f, [i]: defaultResponse(qq.shown, chosen)! }));
                    setConfidence((s) => ({ ...s, [i]: c }));
                  }}
                />
              ) : retrying ? (
                <div className="space-y-3">
                  <div role="status" className="fx-in rounded-[var(--radius)] bg-red-50 p-3 text-sm">
                    <p className="font-extrabold text-destructive">{confidence[i] === 2 ? t("wrongSure") : t("wrongGuess")}</p>
                    <p className="mt-1 font-semibold">{cross !== null ? t("hintCrossed") : t("hintOnce")}</p>
                  </div>
                  <Button
                    size="sm"
                    className="w-full sm:w-auto"
                    disabled={!isComplete(qq.shown, defaultResponse(qq.shown, chosen)) || same(defaultResponse(qq.shown, chosen), first[i])}
                    onClick={() => setSecond((s) => ({ ...s, [i]: defaultResponse(qq.shown, chosen)! }))}
                  >
                    {t("check")}
                  </Button>
                </div>
              ) : (
                <div className="fx-in flex flex-wrap items-center gap-3">
                  <p role="status" className={cn("font-bold", firstRight || right(i, second[i]) ? "text-success" : "text-destructive")}>
                    {firstRight ? (confidence[i] === 0 ? t("rightGuess") : t("correct")) : second[i] !== undefined && right(i, second[i]) ? t("rightSecond") : qq.shown.kind === "choice" ? t("wrongSecond") : t("wrongSecondShown")}
                  </p>
                  {qq.explanation && (
                    <button type="button" className="min-h-11 rounded-xl px-3 text-sm font-bold text-primary hover:bg-muted" onClick={() => setShowWhy((s) => ({ ...s, [i]: !s[i] }))}>
                      {t("showExplanation")}
                    </button>
                  )}
                </div>
              )}
              {done && showWhy[i] && qq.explanation && (
                <p className="fx-in rounded-[var(--radius)] bg-muted p-3 text-sm leading-relaxed">{qq.explanation}</p>
              )}
            </li>
          );
        })}
      </ol>
      {allDone && total > 0 && (
        <div className="fx-rise relative mt-6 flex flex-col gap-3 rounded-[var(--radius)] bg-muted p-4 sm:flex-row sm:items-center sm:justify-between">
          {score / total >= 0.8 && <Confetti />}
          <div>
            <p className="text-lg font-extrabold">{t("score", { score, total })}</p>
            {secondTries > 0 && <p className="mt-1 text-sm font-bold text-muted-foreground">{t("secondTries", { n: secondTries })}</p>}
            {saved && (
              <p role="status" className="fx-in mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-success">
                <Save className="size-4" aria-hidden="true" />
                {t("saved")}
              </p>
            )}
          </div>
          <Button variant="secondary" size="sm" onClick={reset} className="w-full sm:w-auto">
            <RotateCcw className="size-4" aria-hidden="true" />
            {t("retry")}
          </Button>
        </div>
      )}
    </section>
  );
}
