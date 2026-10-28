"use client";

import { ArrowDown, ArrowUp, CheckCircle2, XCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Fragment, useLayoutEffect, useRef } from "react";
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
  const input = "min-h-11 rounded-xl border-2 border-border bg-background px-3 font-semibold outline-none transition-[border-color,box-shadow,background-color] duration-200 focus:border-primary focus:bg-card focus:ring-4 focus:ring-primary/15 disabled:opacity-100";

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
    return (
      <div className="space-y-2">
        {!reveal && <p className="text-sm text-muted-foreground">{t("orderHint")}</p>}
        <OrderList
          items={shown.items}
          order={order}
          onChange={onChange}
          locked={locked}
          labelledBy={labelledBy}
          rowClass={(pos) => cn(box, "flex items-center gap-3", reveal && (parts[pos] ? right : wrong))}
          upLabel={(item) => t("moveUp", { item })}
          downLabel={(item) => t("moveDown", { item })}
        />
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
              className={cn(input, "answer-select w-full sm:w-64", picks[i] >= 0 && !reveal && "border-primary/50 bg-card")}
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

/**
 * Items to put in order. When two swap places they glide there (FLIP: measure, move, then
 * animate from the old spot), and the one the pupil moved gets a little lift.
 */
function OrderList({ items, order, onChange, locked, labelledBy, rowClass, upLabel, downLabel }: {
  items: string[];
  order: number[];
  onChange: (r: QuizResponse) => void;
  locked: boolean;
  labelledBy: string;
  rowClass: (pos: number) => string;
  upLabel: (item: string) => string;
  downLabel: (item: string) => string;
}) {
  const rows = useRef(new Map<number, HTMLLIElement>());
  const tops = useRef(new Map<number, number>());
  const moved = useRef<number | null>(null);
  const sig = order.join(",");
  useLayoutEffect(() => {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rows.current.forEach((el, d) => {
      // offsetTop is relative to the list, so scrolling between renders does not count as a move.
      const was = tops.current.get(d);
      const now = el.offsetTop;
      tops.current.set(d, now);
      if (still || was == null || Math.abs(was - now) < 1) return;
      const lift = d === moved.current;
      el.animate(
        [
          { transform: `translateY(${was - now}px)`, zIndex: lift ? 1 : 0 },
          { transform: `translateY(${(was - now) / 2}px) scale(${lift ? 1.03 : 1})`, zIndex: lift ? 1 : 0, offset: 0.5 },
          { transform: "none", zIndex: lift ? 1 : 0 },
        ],
        { duration: 360, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
      );
    });
    moved.current = null;
  }, [sig]);
  const move = (from: number, to: number) => {
    const next = [...order];
    [next[from], next[to]] = [next[to], next[from]];
    moved.current = order[from];
    onChange(next);
  };
  const arrow = "grid size-11 place-items-center rounded-xl text-primary transition-[background-color,transform,opacity] duration-200 hover:bg-muted active:scale-90 disabled:opacity-30";
  return (
    <ol aria-labelledby={labelledBy} className="relative space-y-2">
      {order.map((d, pos) => (
        <li
          key={d}
          ref={(el) => {
            if (el) rows.current.set(d, el);
            else rows.current.delete(d);
          }}
          className={cn(rowClass(pos), "relative")}
        >
          <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-primary/10 text-sm font-extrabold tabular-nums text-primary">{pos + 1}</span>
          <span className="min-w-0 flex-1 leading-snug">{items[d]}</span>
          {!locked && (
            <span className="flex shrink-0 gap-1">
              <button type="button" aria-label={upLabel(items[d])} disabled={pos === 0} onClick={() => move(pos, pos - 1)} className={arrow}>
                <ArrowUp className="size-5" aria-hidden="true" />
              </button>
              <button type="button" aria-label={downLabel(items[d])} disabled={pos === order.length - 1} onClick={() => move(pos, pos + 1)} className={arrow}>
                <ArrowDown className="size-5" aria-hidden="true" />
              </button>
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
