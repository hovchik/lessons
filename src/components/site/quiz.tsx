"use client";

import { CheckCircle2, CircleHelp, RotateCcw, XCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import type { QuizQuestion } from "@/server/db/schema";
import { Button } from "@/components/ui/button";
import { cn, pick } from "@/lib/utils";

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const t = useTranslations("lesson");
  const locale = useLocale();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [showWhy, setShowWhy] = useState<Record<number, boolean>>({});

  const total = questions.length;
  const score = questions.filter((qq, i) => checked[i] && answers[i] === qq.answer).length;
  const allChecked = questions.every((_, i) => checked[i]);

  const reset = () => {
    setAnswers({});
    setChecked({});
    setShowWhy({});
  };

  return (
    <section aria-labelledby="quiz-title" className="clay p-4 sm:p-7">
      <h2 id="quiz-title" className="flex items-center gap-2 text-xl font-extrabold">
        <CircleHelp className="size-6 text-accent" aria-hidden="true" />
        {t("quiz")}
      </h2>
      <ol className="mt-5 space-y-7">
        {questions.map((qq, i) => {
          const chosen = answers[i];
          const isChecked = checked[i];
          const correct = isChecked && chosen === qq.answer;
          return (
            <li key={i} className="space-y-3 border-t border-border/60 pt-5 first:border-t-0 first:pt-0">
              <p className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground">{t("question", { n: i + 1, total })}</p>
              <p id={`q-${i}`} className="text-base font-bold leading-snug sm:text-lg">{pick(qq.prompt, locale)}</p>
              <div role="radiogroup" aria-labelledby={`q-${i}`} className="grid gap-2.5 md:grid-cols-3">
                {qq.options.map((opt, oi) => {
                  const selected = chosen === oi;
                  const showCorrect = isChecked && oi === qq.answer;
                  const showWrong = isChecked && selected && oi !== qq.answer;
                  return (
                    <button
                      key={oi}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      disabled={isChecked}
                      onClick={() => setAnswers((a) => ({ ...a, [i]: oi }))}
                      className={cn(
                        "clay-sm clay-press min-h-12 px-4 py-3 text-left font-semibold disabled:opacity-100",
                        selected && !isChecked && "ring-3 ring-primary",
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
              <div className="flex flex-wrap items-center gap-3">
                {!isChecked ? (
                  <Button size="sm" className="w-full sm:w-auto" disabled={chosen === undefined} onClick={() => setChecked((c) => ({ ...c, [i]: true }))}>
                    {t("check")}
                  </Button>
                ) : (
                  <p role="status" className={cn("font-bold", correct ? "text-success" : "text-destructive")}>
                    {correct ? t("correct") : t("incorrect")}
                  </p>
                )}
                {isChecked && qq.explanation && (
                  <button type="button" className="min-h-11 rounded-xl px-3 text-sm font-bold text-primary hover:bg-muted" onClick={() => setShowWhy((s) => ({ ...s, [i]: !s[i] }))}>
                    {t("showExplanation")}
                  </button>
                )}
              </div>
              {isChecked && showWhy[i] && qq.explanation && (
                <p className="rounded-[var(--radius)] bg-muted p-3 text-sm leading-relaxed">{pick(qq.explanation, locale)}</p>
              )}
            </li>
          );
        })}
      </ol>
      {allChecked && total > 0 && (
        <div className="mt-6 flex flex-col gap-3 rounded-[var(--radius)] bg-muted p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-extrabold">{t("score", { score, total })}</p>
          <Button variant="secondary" size="sm" onClick={reset} className="w-full sm:w-auto">
            <RotateCcw className="size-4" aria-hidden="true" />
            {t("retry")}
          </Button>
        </div>
      )}
    </section>
  );
}
