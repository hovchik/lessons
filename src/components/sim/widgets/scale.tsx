"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { clamp, Note, Slider, Stage } from "../kit";
import { L, t } from "../labels";
import { COLORS, divide, Sum, times } from "../math-kit";

/**
 * An equation as a balance scale: k boxes of x and a weights on the left, b weights on the right.
 *   scale k=2 a=1 b=7     2x + 1 = 7
 * Guess x and watch the scale, or solve it: take the same weight off both sides, then share into equal groups.
 */
const W = {
  title: t("Experiment: the equation is a balance", "Փորձ․ հավասարումը նժարավոր կշեռք է", "Опыт: уравнение — это весы"),
  hint: t("Both pans weigh the same. Whatever you do to one side, do to the other, and the scale stays balanced.", "Երկու նժարները նույն քաշն ունեն։ Ինչ անում ես մի կողմում, արա՛ նաև մյուսում, և կշեռքը հավասարակշռված կմնա։", "На обеих чашах одинаковый вес. Что делаешь с одной стороной, делай и с другой — и весы останутся в равновесии."),
  guess: t("Try a value of x", "Փորձի՛ր x-ի արժեքը", "Попробуй значение x"),
  heavyL: t("The left side is heavier: x is too big.", "Ձախ կողմը ծանր է․ x-ը շատ մեծ է։", "Левая чаша тяжелее: x слишком большой."),
  heavyR: t("The right side is heavier: x is too small.", "Աջ կողմը ծանր է․ x-ը շատ փոքր է։", "Правая чаша тяжелее: x слишком маленький."),
  ok: t("Balanced! x = {x}. Check: {c}.", "Հավասարակշռված է։ x = {x}։ Ստուգում․ {c}։", "Равновесие! x = {x}. Проверка: {c}."),
  takeOne: t("Take 1 off both sides", "Հանել 1-ական երկու կողմից", "Снять по 1 с обеих чаш"),
  takeAll: t("Take {a} off both sides", "Հանել {a}-ական երկու կողմից", "Снять по {a} с обеих чаш"),
  split: t("Share both sides into {k} equal groups", "Երկու կողմն էլ բաժանել {k} հավասար խմբի", "Разделить обе чаши на {k} равные группы"),
  again: t("Start again", "Նորից", "Сначала"),
  solved: t("Solved: one box x weighs as much as {x} weights.", "Լուծված է․ մեկ x արկղը կշռում է այնքան, որքան {x} կշռաքար։", "Решено: одна коробка x весит столько же, сколько {x} гирек."),
};

function Pan({ cx, y, boxes, units }: { cx: number; y: number; boxes: number; units: number }) {
  const items: Array<{ kind: "x" | "1" }> = [...Array.from({ length: boxes }, () => ({ kind: "x" as const })), ...Array.from({ length: units }, () => ({ kind: "1" as const }))];
  const big = units > 24;
  return (
    <g>
      <path d={`M${cx - 58} ${y}h116l-12 12h-92z`} fill="#cbd5e1" stroke={COLORS.line} strokeWidth="2" />
      {big ? (
        <>
          {Array.from({ length: boxes }, (_, i) => (
            <g key={i}>
              <rect x={cx - 52 + i * 26} y={y - 24} width="22" height="22" rx="4" fill={COLORS.a} />
              <text x={cx - 41 + i * 26} y={y - 9} textAnchor="middle" className="sim-tag is-plain" fill="#fff">x</text>
            </g>
          ))}
          <rect x={cx - 52 + boxes * 26} y={y - 24} width="40" height="22" rx="4" fill={COLORS.b} />
          <text x={cx - 32 + boxes * 26} y={y - 9} textAnchor="middle" className="sim-tag is-plain" fill="#fff">{units}</text>
        </>
      ) : (
        items.map((it, i) => {
          // x boxes in the bottom row from the left, weights stacked in rows of 8
          const xi = it.kind === "x" ? i : i - boxes;
          if (it.kind === "x") {
            return (
              <g key={i}>
                <rect x={cx - 54 + xi * 24} y={y - 22} width="20" height="20" rx="4" fill={COLORS.a} />
                <text x={cx - 44 + xi * 24} y={y - 8} textAnchor="middle" className="sim-tag is-plain" fill="#fff">x</text>
              </g>
            );
          }
          const offset = boxes * 24;
          const perRow = Math.max(4, Math.floor((108 - offset) / 12));
          const col = xi % perRow, row = Math.floor(xi / perRow);
          return <rect key={i} x={cx - 54 + offset + col * 12} y={y - 12 - row * 12} width="10" height="10" rx="2" fill={COLORS.b} stroke="#b45309" strokeWidth="1" />;
        })
      )}
    </g>
  );
}

export default function Scale({ spec, lang }: SimProps) {
  const k0 = clamp(Number(spec.opts.k ?? 2), 1, 4);
  const a0 = clamp(Number(spec.opts.a ?? 1), 0, 20);
  const b0 = clamp(Number(spec.opts.b ?? 7), 0, 40);
  const x = (b0 - a0) / k0;
  const [k, setK] = useState(k0);
  const [a, setA] = useState(a0);
  const [b, setB] = useState(b0);
  const [g, setG] = useState(0);
  const left = k * g + a, right = b;
  const diff = left - right;
  const tilt = clamp(diff * 2.5, -14, 14);
  const rad = (tilt * Math.PI) / 180;
  const lx = 170 - 95 * Math.cos(rad), ly = 70 + 95 * Math.sin(-rad) * -1;
  const rx = 170 + 95 * Math.cos(rad), ry = 70 - 95 * Math.sin(-rad) * -1;
  const lhs = `${k > 1 ? k : ""}x${a ? ` + ${a}` : ""}`;
  const ok = diff === 0;
  const reset = () => { setK(k0); setA(a0); setB(b0); setG(0); };
  const check = `${k0 > 1 ? `${k0} ${times(lang)} ${g}` : g}${a0 ? ` + ${a0}` : ""} = ${b0}`;
  return (
    <ArtFrame kind="experiment" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <Stage w={340} h={170} label={`${lhs} = ${b}`}>
        <path d="M170 70L150 160h40z" fill="#94a3b8" />
        <rect x={120} y={158} width={100} height={8} rx="3" fill={COLORS.line} />
        <line x1={lx} y1={ly} x2={rx} y2={ry} stroke={COLORS.line} strokeWidth="5" strokeLinecap="round" />
        <circle cx={170} cy={70} r="6" fill={COLORS.d} />
        <line x1={lx} y1={ly} x2={lx} y2={ly + 34} stroke="#64748b" strokeWidth="1.5" />
        <line x1={rx} y1={ry} x2={rx} y2={ry + 34} stroke="#64748b" strokeWidth="1.5" />
        <Pan cx={lx} y={ly + 34} boxes={k} units={a} />
        <Pan cx={rx} y={ry + 34} boxes={0} units={b} />
      </Stage>
      <Sum parts={[[lhs, COLORS.a], " = ", [String(b), COLORS.b]]} />
      <Slider label={L(W.guess, lang)} value={g} min={0} max={Math.max(12, Math.ceil(x) + 4)} step={1} digits={0} lang={lang} display={`x = ${g}`} onChange={setG} />
      <Note tone={ok ? "good" : "bad"}>{ok ? L(W.ok, lang).replace("{x}", String(g)).replace("{c}", check) : L(diff > 0 ? W.heavyL : W.heavyR, lang)}</Note>
      <div className="art-row">
        <button type="button" className="art-btn" disabled={a === 0 || b === 0} onClick={() => { setA(a - 1); setB(b - 1); }}>{L(W.takeOne, lang)}</button>
        {a > 1 && b >= a ? <button type="button" className="art-btn" onClick={() => { setB(b - a); setA(0); }}>{L(W.takeAll, lang).replace("{a}", String(a))}</button> : null}
        {a === 0 && k > 1 && b % k === 0 ? (
          <button type="button" className="art-btn is-primary" onClick={() => { setB(b / k); setK(1); }}>{L(W.split, lang).replace("{k}", String(k))}</button>
        ) : null}
        <button type="button" className="art-btn" onClick={reset}>{L(W.again, lang)}</button>
      </div>
      {a === 0 && k === 1 ? <Note tone="good">{L(W.solved, lang).replace("{x}", String(b))}</Note> : null}
      {a === 0 && k > 1 && b % k === 0 ? <Sum parts={[`${k}x = ${b}`, "  →  ", [`x = ${b} ${divide(lang)} ${k} = ${b / k}`, COLORS.c]]} /> : null}
    </ArtFrame>
  );
}
