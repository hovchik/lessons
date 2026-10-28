"use client";

import { ArrowDown, ArrowUp, CheckCircle2, XCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Fragment } from "react";
import { answerText, isRight, partsRight, type Key, type QuizResponse, type Shown } from "@/lib/questions";
import { cn } from "@/lib/utils";

const right = "bg-emerald-50 ring-3 ring-success fx-right";
const inWord = (before: string, after: string) => /\p{L}$/u.test(before) || /^\p{L}/u.test(after);
const wrong = "bg-red-50 ring-3 ring-destructive fx-wrong";

/**
 * Where a pupil answers a question of any kind: options to pick, a number to
 * type, gaps to fill, items to put in order, or pairs to match. With `reveal`
 * (the key, once checked) the parts are marked right or wrong and the right
 * answer is shown under a wrong one.
 */
export function AnswerArea({
  shown,
  value,
  onChange,
  disabled,
  reveal,
  labelledBy,
  compact,
  choiceGrid = "md:grid-cols-2",
}: {
  shown: Shown<string>;
  value: QuizResponse | undefined;
  onChange: (r: QuizResponse) => void;
  disabled?: boolean;
  reveal?: Key<string> | null;
  labelledBy: string;
  compact?: boolean;
  choiceGrid?: string;
}) {
  const t = useTranslations("questions");
  const locale = useLocale();
  const locked = disabled || !!reveal;
  const ok = reveal ? isRight(reveal, value) : null;
  const parts = reveal ? partsRight(reveal, value) : [];
  const box = cn("clay-sm px-4 font-semibold", compact ? "min-h-11 py-2.5 text-sm" : "min-h-12 py-3");
  const input = "min-h-11 rounded-xl border-2 border-border bg-background px-3 font-semibold outline-none focus:border-primary disabled:opacity-100";

  const answerLine = reveal && !ok && shown.kind !== "choice" && (
    <p className="fx-in text-sm text-success">
      <span className="font-bold">{t("rightAnswer")}:</span> {answerText(shown, reveal, locale)}
    </p>
  );

  if (shown.kind === "choice") {
    const answer = reveal?.kind === "choice" ? reveal.answer : null;
    return (
      <div role="radiogroup" aria-labelledby={labelledBy} className={cn("grid", compact ? "gap-2" : "gap-2.5", choiceGrid)}>
        {shown.options.map((opt, oi) => {
          const selected = value === oi;
          const showCorrect = answer !== null && oi === answer;
          const showWrong = answer !== null && selected && oi !== answer;
          return (
            <button
              key={oi}
              type="button"
              role="radio"
              aria-checked={selected}
              disabled={locked}
              onClick={() => onChange(oi)}
              className={cn(box, "clay-press text-left disabled:opacity-100", selected && !reveal && "ring-3 ring-primary", showCorrect && right, showWrong && wrong)}
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
    );
  }

  if (shown.kind === "number") {
    return (
      <div className="space-y-2">
        <label className="flex flex-wrap items-center gap-2">
          <span className="sr-only">{t("yourAnswer")}</span>
          <input
            type="text"
            inputMode="decimal"
            autoComplete="off"
            aria-labelledby={labelledBy}
            disabled={locked}
            value={typeof value === "string" ? value : ""}
            placeholder={t("typeNumber")}
            onChange={(e) => onChange(e.target.value)}
            className={cn(input, "w-40 text-lg tabular-nums", reveal && (ok ? "border-success bg-emerald-50 fx-right" : "border-destructive bg-red-50 fx-wrong"))}
          />
          {shown.unit && <span className="font-bold">{shown.unit}</span>}
          {reveal && (ok ? <CheckCircle2 className="fx-tick size-5 text-success" aria-hidden="true" /> : <XCircle className="fx-tick size-5 text-destructive" aria-hidden="true" />)}
        </label>
        {answerLine}
      </div>
    );
  }

  if (shown.kind === "gap") {
    const vals = Array.isArray(value) ? (value as string[]) : [];
    const set = (i: number, v: string) => onChange(Array.from({ length: shown.gaps }, (_, k) => (k === i ? v : (vals[k] ?? ""))));
    let g = 0;
    const box = (i: number, small: boolean) => (
      <input
        key={`g${i}`}
        type="text"
        autoComplete="off"
        autoCapitalize="off"
        spellCheck={false}
        aria-label={t("gap", { n: i + 1 })}
        disabled={locked}
        value={vals[i] ?? ""}
        onChange={(e) => set(i, e.target.value)}
        className={cn(input, small ? "mx-0.5 w-16 px-2 text-center" : "mx-1 w-32 sm:w-40", "align-middle", reveal && (parts[i] ? "border-success bg-emerald-50 fx-right" : "border-destructive bg-red-50 fx-wrong"))}
      />
    );
    return (
      <div className="space-y-2">
        <p className={cn("whitespace-pre-line leading-[2.6rem]", compact ? "text-sm" : "text-base sm:text-lg")}>
          {/* Word by word, so a gap never wraps away from the letters around it; a gap inside a word (a missing letter or ending) gets a small box. */}
          {shown.text.split(/(\s+)/).map((word, wi) => {
            if (!/_{3,}/.test(word)) return word;
            const pieces = word.split(/_{3,}/);
            return (
              <span key={wi} className="whitespace-nowrap">
                {pieces.map((piece, pi) => (
                  <Fragment key={pi}>
                    {piece}
                    {pi < pieces.length - 1 && box(g++, inWord(piece, pieces[pi + 1]))}
                  </Fragment>
                ))}
              </span>
            );
          })}
        </p>
        {answerLine}
      </div>
    );
  }

  if (shown.kind === "order") {
    const order = Array.isArray(value) && value.length === shown.items.length ? (value as number[]) : shown.items.map((_, i) => i);
    const move = (from: number, to: number) => {
      const next = [...order];
      [next[from], next[to]] = [next[to], next[from]];
      onChange(next);
    };
    return (
      <div className="space-y-2">
        {!reveal && <p className="text-sm text-muted-foreground">{t("orderHint")}</p>}
        <ol aria-labelledby={labelledBy} className="space-y-2">
          {order.map((d, pos) => (
            <li key={d} className={cn(box, "flex items-center gap-3", reveal && (parts[pos] ? right : wrong))}>
              <span className="w-5 shrink-0 text-sm font-extrabold tabular-nums text-muted-foreground">{pos + 1}</span>
              <span className="min-w-0 flex-1 leading-snug">{shown.items[d]}</span>
              {!locked && (
                <span className="flex shrink-0 gap-1">
                  <button type="button" aria-label={t("moveUp", { item: shown.items[d] })} disabled={pos === 0} onClick={() => move(pos, pos - 1)} className="grid size-11 place-items-center rounded-xl text-primary hover:bg-muted disabled:opacity-30">
                    <ArrowUp className="size-5" aria-hidden="true" />
                  </button>
                  <button type="button" aria-label={t("moveDown", { item: shown.items[d] })} disabled={pos === order.length - 1} onClick={() => move(pos, pos + 1)} className="grid size-11 place-items-center rounded-xl text-primary hover:bg-muted disabled:opacity-30">
                    <ArrowDown className="size-5" aria-hidden="true" />
                  </button>
                </span>
              )}
            </li>
          ))}
        </ol>
        {answerLine}
      </div>
    );
  }

  const picks = Array.isArray(value) && value.length === shown.left.length ? (value as number[]) : shown.left.map(() => -1);
  return (
    <div className="space-y-2">
      <ul aria-labelledby={labelledBy} className="space-y-2">
        {shown.left.map((l, i) => (
          <li key={i} className={cn(box, "flex flex-col gap-2 sm:flex-row sm:items-center", reveal && (parts[i] ? right : wrong))}>
            <span className="min-w-0 flex-1 leading-snug">{l}</span>
            <select
              aria-label={t("matchFor", { item: l })}
              disabled={locked}
              value={picks[i]}
              onChange={(e) => onChange(picks.map((p, k) => (k === i ? Number(e.target.value) : p)))}
              className={cn(input, "w-full sm:w-64")}
            >
              <option value={-1}>{t("choose")}</option>
              {shown.right.map((r, ri) => (
                <option key={ri} value={ri}>
                  {r}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
      {answerLine}
    </div>
  );
}
