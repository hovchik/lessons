"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { fmt, Readouts, Stage } from "../kit";
import { L, t } from "../labels";
import { COLORS } from "../math-kit";

/**
 * Random experiments: relative frequency settles near the probability.
 *   chance            a coin: heads and tails
 *   chance mode=die   one die: faces 1–6
 *   chance mode=dice  two dice: the sum 2–12 (7 is the most likely)
 */
const W = {
  coin: t("Experiment: tossing a coin", "Փորձ․ մետաղադրամի նետում", "Опыт: бросаем монету"),
  die: t("Experiment: rolling a die", "Փորձ․ զառի նետում", "Опыт: бросаем кубик"),
  dice: t("Experiment: the sum of two dice", "Փորձ․ երկու զառի գումարը", "Опыт: сумма двух кубиков"),
  hint: t("Throw many times. The bars show how often each result came up; the dashed marks show the probability. The more throws, the closer they get.", "Նետի՛ր շատ անգամ։ Սյուները ցույց են տալիս, թե որքան հաճախ է ելել յուրաքանչյուր արդյունքը, իսկ կետագծերը՝ հավանականությունը։ Որքան շատ նետումներ, այնքան դրանք մոտ են իրար։", "Бросай много раз. Столбики показывают, как часто выпадал каждый исход, пунктир — вероятность. Чем больше бросков, тем они ближе."),
  throws: t("Throws", "Նետումներ", "Броски"),
  last: t("Last result", "Վերջին արդյունքը", "Последний исход"),
  heads: t("heads", "գերբ", "орёл"),
  tails: t("tails", "գիր", "решка"),
  freq: t("Frequency of {x}", "{x}-ի հաճախականությունը", "Частота исхода {x}"),
  prob: t("Probability of {x}", "{x}-ի հավանականությունը", "Вероятность исхода {x}"),
  reset: t("Start again", "Սկսել նորից", "Сначала"),
};

type Mode = "coin" | "die" | "dice";
const OUT: Record<Mode, number[]> = { coin: [0, 1], die: [1, 2, 3, 4, 5, 6], dice: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] };
const P = (mode: Mode, v: number) => (mode === "coin" ? 1 / 2 : mode === "die" ? 1 / 6 : (6 - Math.abs(v - 7)) / 36);
const roll = (mode: Mode) => {
  const d = () => 1 + Math.floor(Math.random() * 6);
  return mode === "coin" ? (Math.random() < 0.5 ? 0 : 1) : mode === "die" ? d() : d() + d();
};

export default function Chance({ spec, lang }: SimProps) {
  const mode = (["die", "dice"].includes(spec.opts.mode ?? "") ? spec.opts.mode : "coin") as Mode;
  const outs = OUT[mode];
  const [counts, setCounts] = useState<number[]>(() => outs.map(() => 0));
  const [last, setLast] = useState<number | null>(null);
  const total = counts.reduce((s, c) => s + c, 0);
  const throwN = (k: number) => {
    const next = [...counts];
    let r = 0;
    for (let i = 0; i < k; i++) {
      r = roll(mode);
      next[outs.indexOf(r)]++;
    }
    setCounts(next);
    setLast(r);
  };
  const name = (v: number) => (mode === "coin" ? L(v ? W.tails : W.heads, lang) : String(v));
  const focus = mode === "coin" ? 0 : mode === "die" ? 6 : 7;
  const fi = outs.indexOf(focus);
  const maxP = Math.max(...outs.map((v) => P(mode, v)));
  const top = Math.max(maxP * 1.6, ...counts.map((c) => (total ? c / total : 0)));
  const n = outs.length, w = 290 / n, x0 = 15, base = 150, H = 130;
  const Y = (p: number) => base - (p / top) * H;
  const pct = (p: number) => `${fmt(p * 100, 1, lang)}%`;
  return (
    <ArtFrame kind="experiment" title={L(W[mode], lang)} body={spec.body || L(W.hint, lang)}>
      <Stage w={320} h={172} label={L(W[mode], lang)}>
        <line x1={x0} x2={x0 + w * n} y1={base} y2={base} stroke={COLORS.line} />
        {outs.map((v, i) => {
          const f = total ? counts[i] / total : 0;
          return (
            <g key={v}>
              <rect x={x0 + i * w + 3} y={Y(f)} width={w - 6} height={base - Y(f)} rx="3" fill={v === focus ? COLORS.b : COLORS.a} opacity="0.85" />
              <line x1={x0 + i * w + 1} x2={x0 + (i + 1) * w - 1} y1={Y(P(mode, v))} y2={Y(P(mode, v))} stroke={COLORS.d} strokeWidth="2" strokeDasharray="4 3" />
              <text x={x0 + i * w + w / 2} y={base + 14} textAnchor="middle" className="sim-axis is-name">{name(v)}</text>
            </g>
          );
        })}
      </Stage>
      <Readouts
        items={[
          [L(W.throws, lang), String(total), COLORS.a],
          [L(W.last, lang), last === null ? "—" : name(last), COLORS.a],
          [L(W.freq, lang).replace("{x}", name(focus)), total ? `${counts[fi]}/${total} ≈ ${pct(counts[fi] / total)}` : "—", COLORS.b],
          [L(W.prob, lang).replace("{x}", name(focus)), `${mode === "dice" ? "6/36" : mode === "die" ? "1/6" : "1/2"} ≈ ${pct(P(mode, focus))}`, COLORS.d],
        ]}
      />
      <div className="art-chips">
        {[1, 10, 100, 1000].map((k) => <button key={k} type="button" className="art-chip" onClick={() => throwN(k)}>+{k}</button>)}
        <button type="button" className="art-chip" onClick={() => { setCounts(outs.map(() => 0)); setLast(null); }}>{L(W.reset, lang)}</button>
      </div>
    </ArtFrame>
  );
}
