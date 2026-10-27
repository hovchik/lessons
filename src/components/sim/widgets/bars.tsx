"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { BAR_SETS } from "../data/bars";
import { Note, Readouts } from "../kit";
import { L, t } from "../labels";
import { COLORS, num } from "../math-kit";

/**
 * Real data as horizontal bars: tap a bar to read its value and a short note.
 *   bars set=kingdoms
 * The sets live in ../data (one file per subject); `log` sets use a ×10 scale for data that spans
 * several powers of ten.
 */
const W = {
  title: t("Look closely: the numbers", "Ուշադիր նայի՛ր․ թվերը", "Рассмотри: цифры"),
  hint: t("Tap a bar to read about it.", "Հպի՛ր սյունակին՝ կարդալու համար։", "Нажми на полоску, чтобы прочитать о ней."),
  log: t("Each step of the scale is ten times bigger, otherwise the small bars would not be visible.", "Սանդղակի յուրաքանչյուր քայլ տասն անգամ մեծ է, այլապես փոքր սյունակները չէին երևա։", "Каждый шаг шкалы в десять раз больше, иначе маленькие полоски не было бы видно."),
  most: t("Largest", "Ամենամեծը", "Больше всего"),
  least: t("Smallest", "Ամենափոքրը", "Меньше всего"),
  times: t("Ratio", "Հարաբերություն", "Во сколько раз"),
};

const PALETTE = ["#4f46e5", "#f59e0b", "#10b981", "#e11d48", "#0ea5e9", "#8b5cf6", "#84cc16", "#f97316"];

export default function Bars({ spec, lang }: SimProps) {
  const set = BAR_SETS[spec.opts.set ?? ""];
  const [sel, setSel] = useState<number | null>(null);
  if (!set) return <pre className="art-unknown">bars {spec.opts.set}</pre>;
  const vals = set.rows.map((r) => r[1]);
  const max = Math.max(...vals), min = Math.min(...vals);
  const width = (v: number) => (set.log ? (Math.log10(v / min) + 1) / (Math.log10(max / min) + 1) : v / max) * 100;
  const unit = set.unit ? ` ${L(set.unit, lang)}` : "";
  const show = (v: number) => `${num(v, lang)}${unit}`;
  const name = (i: number) => L(set.rows[i][0], lang);
  const note = sel != null ? set.rows[sel][2] : undefined;
  return (
    <ArtFrame kind="look" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <p className="math-chart-title">{L(set.title, lang)}</p>
      <div className="sim-bars">
        {set.rows.map(([, v], i) => (
          <button key={i} type="button" className={cn("sim-bars-row", sel === i && "is-active")} onClick={() => setSel(i)}>
            <span className="sim-bars-label"><span>{name(i)}</span><b>{show(v)}</b></span>
            <span className="sim-bars-track"><span style={{ width: `${Math.max(1.5, width(v))}%`, background: set.colors?.[i] ?? PALETTE[i % PALETTE.length] }} /></span>
          </button>
        ))}
      </div>
      {set.log ? <p className="sim-small-note">{L(W.log, lang)}</p> : null}
      {note ? <Note>{L(note, lang)}</Note> : null}
      <Readouts
        items={[
          [L(W.most, lang), name(vals.indexOf(max)), COLORS.a],
          [L(W.least, lang), name(vals.indexOf(min)), COLORS.d],
          ...(min > 0 ? [[L(W.times, lang), `× ${num(Math.round((max / min) * (max / min < 10 ? 10 : 1)) / (max / min < 10 ? 10 : 1), lang)}`] as [string, string]] : []),
        ]}
      />
      {set.source ? <p className="sim-small-note">{L(set.source, lang)}</p> : null}
    </ArtFrame>
  );
}
