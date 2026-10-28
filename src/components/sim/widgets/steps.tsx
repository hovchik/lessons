"use client";

import { useState } from "react";
import { CheckCircle2, Eye, Lightbulb, RotateCcw } from "lucide-react";
import { ArtFrame } from "@/components/art/frame";
import { blankRight, fadedSteps, parseSteps, resultParts, type Step } from "@/lib/steps";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { Note } from "../kit";
import { L, t } from "../labels";

const W = {
  title: t("Worked examples", "Լուծված օրինակներ", "Разбор примеров"),
  watch: t("Example {k} of {n}: read each step and think why it is done.", "Օրինակ {k}՝ {n}-ից․ կարդա՛ յուրաքանչյուր քայլը և մտածի՛ր, թե ինչու է այն արվում։", "Пример {k} из {n}: прочитай каждый шаг и подумай, зачем он нужен."),
  finish: t("Example {k} of {n}: the first steps are done, finish the rest.", "Օրինակ {k}՝ {n}-ից․ առաջին քայլերն արված են, ավարտի՛ր մնացածը։", "Пример {k} из {n}: первые шаги сделаны, закончи решение."),
  alone: t("Example {k} of {n}: now solve it on your own.", "Օրինակ {k}՝ {n}-ից․ հիմա լուծի՛ր ինքնուրույն։", "Пример {k} из {n}: теперь реши сам."),
  think: t("What would you do next? Think first, then look.", "Ի՞նչ կանեիր հաջորդը։ Նախ մտածի՛ր, հետո նայի՛ր։", "Какой шаг следующий? Сначала подумай, потом посмотри."),
  showStep: t("Show the next step", "Ցույց տալ հաջորդ քայլը", "Показать следующий шаг"),
  nextExample: t("Next example", "Հաջորդ օրինակը", "Следующий пример"),
  check: t("Check", "Ստուգել", "Проверить"),
  hint: t("Hint: what to do", "Հուշում․ ի՞նչ անել", "Подсказка: что сделать"),
  showAnswer: t("Show the answer", "Ցույց տալ պատասխանը", "Показать ответ"),
  wrong: t("Not yet. Look at the line above and try again.", "Դեռ ոչ։ Նայի՛ր վերևի տողին և նորից փորձի՛ր։", "Пока нет. Посмотри на строку выше и попробуй ещё раз."),
  blank: t("Blank {n}", "Բաց տեղ {n}", "Пропуск {n}"),
  step: t("Step {n}", "Քայլ {n}", "Шаг {n}"),
  doneAlone: t("Well done! You solved it on your own.", "Ապրե՛ս։ Լուծեցիր ինքնուրույն։", "Молодец! Решено самостоятельно."),
  doneHelped: t("Done. Try the next one without the answer button.", "Պատրաստ է։ Հաջորդը փորձի՛ր առանց պատասխանի կոճակի։", "Готово. Следующее попробуй без кнопки ответа."),
  again: t("Start again", "Սկսել նորից", "Начать сначала"),
};
const NBSP = "\u00a0";

type Part = ReturnType<typeof resultParts>[number];
/** Groups each blank with the word just before and after it, so a narrow screen never leaves it alone on a line. */
function glued(parts: Part[]): Array<string | { pre: string; blank: Exclude<Part, string>; post: string }> {
  const strs = parts.map((p) => (typeof p === "string" ? p : null));
  const out: Array<string | { pre: string; blank: Exclude<Part, string>; post: string }> = [];
  parts.forEach((p, i) => {
    if (typeof p === "string") return;
    const before = strs[i - 1] ?? "";
    const after = strs[i + 1] ?? "";
    const pre = /\S*\s?$/.exec(before)![0];
    const post = /^\s?\S*/.exec(after)![0];
    if (i > 0 && strs[i - 1] !== null) strs[i - 1] = before.slice(0, before.length - pre.length);
    if (strs[i + 1] !== null && strs[i + 1] !== undefined) strs[i + 1] = after.slice(post.length);
    out.push({ pre, blank: p, post });
  });
  // Put the shortened text back between the groups, in order.
  const merged: typeof out = [];
  let g = 0;
  parts.forEach((p, i) => {
    if (typeof p === "string") merged.push(strs[i] ?? "");
    else merged.push(out[g++]);
  });
  return merged;
}

const fill = (s: string, vars: Record<string, number>) => s.replace(/\{(\w+)\}/g, (_m, k: string) => String(vars[k] ?? ""));

/** One step's line, with its blanks either filled in (bold) or as boxes to type into. */
function Line({ step, values, onType, onEnter, state, lang }: {
  step: Step;
  values?: string[];
  onType?: (i: number, v: string) => void;
  onEnter?: () => void;
  state?: "wrong";
  lang: SimProps["lang"];
}) {
  return (
    <span className="steps-line">
      {glued(resultParts(step.result)).map((p, i) =>
        typeof p === "string" ? (
          <span key={i}>{p}</span>
        ) : (
          <span key={i} className="whitespace-nowrap">
            {p.pre}
            {values && onType ? (
              <input
                type="text"
                inputMode="text"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label={fill(L(W.blank, lang), { n: p.blank.blank + 1 })}
                value={values[p.blank.blank] ?? ""}
                onChange={(e) => onType(p.blank.blank, e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onEnter?.()}
                className={cn("steps-input", state === "wrong" && "is-wrong")}
              />
            ) : (
              <strong className="steps-filled">{p.blank.accepted[0].replace(/ /g, NBSP)}</strong>
            )}
            {p.post}
          </span>
        ),
      )}
    </span>
  );
}

/**
 * Worked examples with fading (see src/lib/steps.ts for the block format): the
 * first problem is shown step by step, each next one leaves more of the last
 * steps to the pupil, and the last one is solved alone.
 */
export default function Steps({ spec, lang }: SimProps) {
  const { intro, problems } = parseSteps(spec.body);
  const n = problems.length;
  const [k, setK] = useState(0);
  // Worked example: how many steps are on show. Faded steps: what is typed, wrong tries, and which were solved or shown.
  const [shownSteps, setShownSteps] = useState(1);
  const [values, setValues] = useState<string[]>([]);
  const [tries, setTries] = useState(0);
  const [hint, setHint] = useState(false);
  const [solved, setSolved] = useState<Record<number, "alone" | "shown">>({});
  const [wrong, setWrong] = useState(false);
  if (!n) return null;

  const p = problems[k];
  const s = p.steps.length;
  const faded = fadedSteps(k, n, s);
  const firstFaded = s - faded;
  // The faded step the pupil works on now (the first one not yet solved), or -1 once all are.
  const active = faded ? Array.from({ length: faded }, (_, i) => firstFaded + i).find((i) => !solved[i]) ?? -1 : -1;
  const finished = faded ? active === -1 : shownSteps >= s;
  const phase = k === 0 ? W.watch : faded === s ? W.alone : W.finish;

  const go = (next: number) => {
    setK(next);
    setShownSteps(1);
    setValues([]);
    setTries(0);
    setHint(false);
    setSolved({});
    setWrong(false);
  };
  const solve = (how: "alone" | "shown") => {
    setSolved((d) => ({ ...d, [active]: how }));
    setValues([]);
    setTries(0);
    setHint(false);
    setWrong(false);
  };
  const check = () => {
    const parts = resultParts(p.steps[active].result).filter((x) => typeof x !== "string");
    const ok = parts.every((b) => typeof b !== "string" && blankRight(b.accepted, values[b.blank] ?? ""));
    if (ok) solve("alone");
    else {
      setTries((x) => x + 1);
      setWrong(true);
    }
  };
  const type = (b: number, v: string) => {
    setWrong(false);
    setValues((a) => Object.assign([...a], { [b]: v }));
  };
  const blanks = active >= 0 ? resultParts(p.steps[active].result).filter((x) => typeof x !== "string").length : 0;
  const complete = active >= 0 && Array.from({ length: blanks }, (_, i) => (values[i] ?? "").trim()).every(Boolean);
  const alone = Object.values(solved).every((v) => v === "alone");

  return (
    <ArtFrame kind="steps" title={L(W.title, lang)} body={intro || undefined}>
      <div className="steps-dots" aria-hidden="true">
        {problems.map((_, i) => (
          <span key={i} className={cn("steps-dot", i < k && "is-done", i === k && "is-now")}>{i + 1}</span>
        ))}
      </div>
      <p className="steps-phase">{fill(L(phase, lang), { k: k + 1, n })}</p>
      <p className="steps-problem">{p.problem}</p>
      <ol className="steps-list">
        {p.steps.map((st, i) => {
          if (k === 0 && i >= shownSteps) return null;
          const isFaded = i >= firstFaded;
          if (isFaded && !solved[i] && i !== active) {
            return (
              <li key={i} className="steps-row is-later">
                <span className="steps-num">{i + 1}</span>
                <span className="steps-later">{fill(L(W.step, lang), { n: i + 1 })} …</span>
              </li>
            );
          }
          const working = isFaded && i === active;
          // In the last problem the pupil decides what to do; the action is a hint behind a tap.
          const showAction = !working || faded < s || hint;
          return (
            <li key={i} className={cn("steps-row", working && "is-active", solved[i] && "is-solved")}>
              <span className="steps-num">{solved[i] ? <CheckCircle2 className="size-5 text-success" aria-hidden="true" /> : i + 1}</span>
              <span className="steps-text">
                {showAction && <span className="steps-action">{st.action}</span>}
                {working ? (
                  <Line step={st} values={values} onType={type} onEnter={() => complete && check()} state={wrong ? "wrong" : undefined} lang={lang} />
                ) : (
                  <Line step={st} lang={lang} />
                )}
                {working && (
                  <span className="steps-tools">
                    <button type="button" className="steps-btn is-main" disabled={!complete} onClick={check}>{L(W.check, lang)}</button>
                    {!showAction && (
                      <button type="button" className="steps-btn" onClick={() => setHint(true)}>
                        <Lightbulb className="size-4" aria-hidden="true" /> {L(W.hint, lang)}
                      </button>
                    )}
                    {tries >= 2 && (
                      <button type="button" className="steps-btn" onClick={() => solve("shown")}>
                        <Eye className="size-4" aria-hidden="true" /> {L(W.showAnswer, lang)}
                      </button>
                    )}
                  </span>
                )}
                {working && wrong && <span role="status" className="steps-wrong">{L(W.wrong, lang)}</span>}
              </span>
            </li>
          );
        })}
      </ol>
      {k === 0 && !finished && (
        <div className="steps-next">
          <p className="steps-think">{L(W.think, lang)}</p>
          <button type="button" className="steps-btn is-main" onClick={() => setShownSteps((x) => x + 1)}>{L(W.showStep, lang)}</button>
        </div>
      )}
      {finished && k < n - 1 && (
        <div className="steps-next">
          <button type="button" className="steps-btn is-main" onClick={() => go(k + 1)}>{L(W.nextExample, lang)}</button>
        </div>
      )}
      {finished && k === n - 1 && (
        <div className="steps-next" role="status">
          <Note tone={alone ? "good" : undefined}>{L(alone ? W.doneAlone : W.doneHelped, lang)}</Note>
          <button type="button" className="steps-btn" onClick={() => go(0)}>
            <RotateCcw className="size-4" aria-hidden="true" /> {L(W.again, lang)}
          </button>
        </div>
      )}
    </ArtFrame>
  );
}
