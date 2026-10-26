"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { clamp, fmt, Note, Readouts, Slider, Stage, Toggle } from "../kit";
import { L, t } from "../labels";
import { COLORS, Counter, Sum } from "../math-kit";

/**
 * Progressions as columns of blocks:
 *   seq a=2 d=3 n=8              arithmetic: each term adds d; Gauss's trick for the sum
 *   seq mode=geom b=1 q=2 n=7    geometric: each term multiplies by q; for |q| < 1 the sum approaches b₁/(1 − q)
 */
const W = {
  arith: t("Experiment: an arithmetic progression", "Փորձ․ թվաբանական պրոգրեսիա", "Опыт: арифметическая прогрессия"),
  arithHint: t("Every column is d higher than the one before. Turn on the copy: two staircases make a rectangle, which is why Sₙ = (a₁ + aₙ)·n/2.", "Յուրաքանչյուր սյուն նախորդից d-ով բարձր է։ Միացրո՛ւ պատճենը․ երկու աստիճանաշարը կազմում են ուղղանկյուն, ահա թե ինչու Sₙ = (a₁ + aₙ)·n/2։", "Каждый столбик на d выше предыдущего. Включи копию: две лесенки складываются в прямоугольник, поэтому Sₙ = (a₁ + aₙ)·n/2."),
  geom: t("Experiment: a geometric progression", "Փորձ․ երկրաչափական պրոգրեսիա", "Опыт: геометрическая прогрессия"),
  geomHint: t("Every column is q times the one before. With q > 1 the columns shoot up; with q between 0 and 1 they shrink, and the sum stops growing.", "Յուրաքանչյուր սյուն նախորդից q անգամ է։ q > 1-ի դեպքում սյուները արագ աճում են, 0-ի և 1-ի միջև q-ի դեպքում փոքրանում են, և գումարը դադարում է աճել։", "Каждый столбик в q раз больше предыдущего. При q > 1 столбики быстро растут, при q между 0 и 1 уменьшаются, и сумма перестаёт расти."),
  terms: t("Terms", "Անդամներ", "Члены"),
  nth: t("n-th term", "n-րդ անդամ", "n-й член"),
  sum: t("Sum Sₙ", "Sₙ գումար", "Сумма Sₙ"),
  copy: t("Add a turned copy", "Ավելացնել շրջված պատճեն", "Добавить перевёрнутую копию"),
  limit: t("|q| < 1: the sum approaches b₁ / (1 − q) = {s}.", "|q| < 1․ գումարը մոտենում է b₁ / (1 − q) = {s}-ի։", "|q| < 1: сумма приближается к b₁ / (1 − q) = {s}."),
};

const nf = (v: number, lang: ArtLang, d = 2) => fmt(v, d, lang).replace("-", "−");

export default function Seq({ spec, lang }: SimProps) {
  return spec.opts.mode === "geom" ? <Geom spec={spec} lang={lang} /> : <Arith spec={spec} lang={lang} />;
}

function Columns({ vals, color, max, copy }: { vals: number[]; color: string; max: number; copy?: number[] }) {
  const n = vals.length, w = Math.min(34, 290 / n), x0 = (320 - w * n) / 2, base = 170, H = 150;
  const lo = Math.min(0, ...vals);
  const sc = H / Math.max(1e-9, max - lo);
  const Y = (v: number) => base - (v - lo) * sc;
  return (
    <g>
      <line x1={x0 - 6} x2={x0 + w * n + 6} y1={Y(0)} y2={Y(0)} stroke={COLORS.line} strokeWidth="1.4" />
      {vals.map((v, i) => (
        <g key={i}>
          <rect x={x0 + i * w + 2} y={Math.min(Y(v), Y(0))} width={w - 4} height={Math.abs(Y(v) - Y(0))} rx="3" fill={color} opacity="0.85" />
          {copy ? <rect x={x0 + i * w + 2} y={Y(v + copy[i])} width={w - 4} height={Y(v) - Y(v + copy[i])} rx="3" fill={COLORS.b} opacity="0.75" /> : null}
          <text x={x0 + i * w + w / 2} y={base + 13} textAnchor="middle" className="sim-axis">{i + 1}</text>
        </g>
      ))}
    </g>
  );
}

function Arith({ spec, lang }: SimProps) {
  const [a, setA] = useState(clamp(Number(spec.opts.a ?? 2), -10, 20));
  const [d, setD] = useState(clamp(Number(spec.opts.d ?? 3), -5, 10));
  const [n, setN] = useState(clamp(Number(spec.opts.n ?? 8), 2, 12));
  const [copy, setCopy] = useState(false);
  const vals = Array.from({ length: n }, (_, i) => a + i * d);
  const an = vals[n - 1], S = ((a + an) * n) / 2;
  const canCopy = vals.every((v) => v >= 0);
  const show = copy && canCopy;
  const max = Math.max(1, ...(show ? [a + an] : vals));
  return (
    <ArtFrame kind="experiment" title={L(W.arith, lang)} body={spec.body || L(W.arithHint, lang)}>
      <Stage w={320} h={190} label={`aₙ = ${a} + (n − 1)·${d}`}>
        <Columns vals={vals} color={COLORS.a} max={max} copy={show ? [...vals].reverse() : undefined} />
      </Stage>
      <Sum parts={[[vals.map((v) => nf(v, lang)).join(", "), COLORS.a]]} />
      <Readouts items={[[L(W.nth, lang), `a${sub(n)} = ${nf(a, lang)} + ${n - 1}·${nf(d, lang)} = ${nf(an, lang)}`, COLORS.a], [L(W.sum, lang), `(${nf(a, lang)} + ${nf(an, lang)})·${n} : 2 = ${nf(S, lang)}`, COLORS.b]]} />
      <div className="art-row">
        <Counter label="a₁" value={a} min={-10} max={20} onChange={setA} lang={lang} color={COLORS.a} />
        <Counter label="d" value={d} min={-5} max={10} onChange={setD} lang={lang} color={COLORS.a} />
        <Counter label="n" value={n} min={2} max={12} onChange={setN} lang={lang} color={COLORS.c} />
      </div>
      {canCopy ? <div className="art-chips"><Toggle on={copy} label={L(W.copy, lang)} onChange={setCopy} /></div> : null}
    </ArtFrame>
  );
}

function Geom({ spec, lang }: SimProps) {
  const [b, setB] = useState(clamp(Number(spec.opts.b ?? 1), 1, 20));
  const [q, setQ] = useState(clamp(Number(spec.opts.q ?? 2), -2, 3));
  const [n, setN] = useState(clamp(Number(spec.opts.n ?? 7), 2, 10));
  const vals = Array.from({ length: n }, (_, i) => b * q ** i);
  const S = Math.abs(q - 1) < 1e-9 ? b * n : (b * (q ** n - 1)) / (q - 1);
  const conv = Math.abs(q) < 1 && Math.abs(q) > 1e-9;
  return (
    <ArtFrame kind="experiment" title={L(W.geom, lang)} body={spec.body || L(W.geomHint, lang)}>
      <Stage w={320} h={190} label={`bₙ = ${b}·${q}ⁿ⁻¹`}>
        <Columns vals={vals} color={COLORS.c} max={Math.max(...vals, 1e-9)} />
      </Stage>
      <Sum parts={[[vals.map((v) => nf(v, lang, 3)).join(", "), COLORS.c]]} />
      <Readouts items={[[L(W.nth, lang), `b${sub(n)} = ${nf(b, lang)}·${nf(q, lang)}${sup(n - 1)} = ${nf(vals[n - 1], lang, 3)}`, COLORS.c], [L(W.sum, lang), nf(S, lang, 3), COLORS.b]]} />
      {conv ? <Note tone="good">{L(W.limit, lang).replace("{s}", nf(b / (1 - q), lang, 3))}</Note> : null}
      <div className="art-row">
        <Counter label="b₁" value={b} min={1} max={20} onChange={setB} lang={lang} color={COLORS.c} />
        <Counter label="n" value={n} min={2} max={10} onChange={setN} lang={lang} color={COLORS.a} />
      </div>
      <Slider label="q" value={q} min={-2} max={3} step={0.25} lang={lang} display={nf(q, lang)} onChange={(v) => setQ(v || 0.25)} />
    </ArtFrame>
  );
}

const SUB = "₀₁₂₃₄₅₆₇₈₉", SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const sub = (n: number) => String(n).replace(/\d/g, (c) => SUB[Number(c)]);
const sup = (n: number) => String(n).replace(/\d/g, (c) => SUP[Number(c)]);
