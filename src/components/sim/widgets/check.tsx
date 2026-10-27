"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { ArtFrame, ArtText } from "@/components/art/frame";
import { useRecordCheck } from "@/components/site/lesson-checks";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { Note } from "../kit";
import { L, UI } from "../labels";

/**
 * A quick multiple-choice check written in the lesson's own language:
 *
 *   ```sim
 *   check answer=2 predict
 *   Which falls faster in a vacuum?
 *   - The hammer
 *   - They land together
 *   > Without air every body falls with the same acceleration g.
 *   ```
 *
 * `answer` is the number of the right option (from 1). Lines starting with ">" are the
 * explanation, shown after the first try. `predict` changes the title to "Predict first".
 */
export function parseCheck(body: string) {
  const lines = body.split("\n");
  const q: string[] = [];
  const options: string[] = [];
  const why: string[] = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (/^[-*] /.test(line)) options.push(line.slice(2).trim());
    else if (line.startsWith(">")) why.push(line.replace(/^>\s?/, ""));
    else if (!options.length) q.push(raw);
  }
  return { question: q.join("\n").trim(), options, why: why.join(" ").trim() };
}

export default function Check({ spec, lang }: SimProps) {
  const { question, options, why } = parseCheck(spec.body);
  const right = Number(spec.opts.answer ?? 1) - 1;
  const [picked, setPicked] = useState<number[]>([]);
  // In a lesson, a signed-in pupil's first pick is saved (`n` is added by numberChecks).
  const record = useRecordCheck(spec.opts.n);
  const choose = (k: number) => {
    record(k);
    setPicked((p) => [...p, k]);
  };
  const done = picked.includes(right);
  const letters = lang === "hy" ? "ԱԲԳԴԵԶ" : lang === "ru" ? "АБВГДЕ" : "ABCDEF";
  return (
    <ArtFrame kind="check" title={L(spec.args.includes("predict") ? UI.predict : UI.quick, lang)}>
      <ArtText className="sim-question">{question}</ArtText>
      <div className={cn("sim-options", options.every((o) => o.length < 28) && "is-grid")}>
        {options.map((o, k) => {
          const state = picked.includes(k) ? (k === right ? "is-right" : "is-wrong") : done && k === right ? "is-right" : "";
          return (
            <button key={k} type="button" className={cn("sim-option", state)} disabled={done || picked.includes(k)} onClick={() => choose(k)}>
              <span className="sim-letter">{letters[k]}</span>
              <ArtText className="sim-option-text">{o}</ArtText>
            </button>
          );
        })}
      </div>
      {picked.length ? (
        <Note tone={done ? "good" : "bad"}>
          <b>{L(done ? UI.correct : UI.notQuite, lang)}</b> {done || picked.length > 1 ? why : ""}
        </Note>
      ) : null}
      {picked.length ? (
        <div className="art-row">
          <button type="button" className="art-btn" onClick={() => setPicked([])}>
            <RotateCcw className="size-4" aria-hidden="true" />
            {L(UI.retry, lang)}
          </button>
        </div>
      ) : null}
    </ArtFrame>
  );
}
