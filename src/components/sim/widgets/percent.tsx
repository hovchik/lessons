"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { clamp, Note, Readouts, Slider, Stage } from "../kit";
import { L, t } from "../labels";
import { COLORS, divide, gcd, num, NumPick, Sum, times } from "../math-kit";

/**
 * Percent:
 *   percent p=35            a 100-square: percent, fraction and decimal are one amount
 *   percent mode=of p=30 n=80      p% of a number with a bar model
 *   percent mode=whole p=30 part=12  finding the whole from its part
 */
const W = {
  grid: t("Look closely: one hundred squares", "Ուշադիր նայի՛ր․ հարյուր քառակուսի", "Рассмотри: сто квадратиков"),
  gridHint: t("Percent means \"out of a hundred\". Colour squares and read the same amount as a fraction and as a decimal.", "Տոկոս նշանակում է «հարյուրից»։ Ներկի՛ր քառակուսիները և նույն մասը կարդա՛ կոտորակով ու տասնորդական կոտորակով։", "Процент значит «из ста». Закрашивай клетки и читай ту же часть дробью и десятичной дробью."),
  of: t("Experiment: a percent of a number", "Փորձ․ թվի տոկոսը", "Опыт: процент от числа"),
  ofHint: t("Cut the bar into 10 equal parts: each is 10%. Then take as many tens of percent as you need.", "Շերտը բաժանի՛ր 10 հավասար մասի․ յուրաքանչյուրը 10% է։ Հետո վերցրո՛ւ այնքան տասնյակ տոկոս, որքան պետք է։", "Раздели полоску на 10 равных частей: каждая — 10%. Затем возьми столько десятков процентов, сколько нужно."),
  whole: t("Experiment: find the whole", "Փորձ․ գտի՛ր ամբողջը", "Опыт: найди целое"),
  wholeHint: t("If you know what a percent of the number is, find 1% first, then multiply by 100.", "Եթե գիտես թվի որոշ տոկոսը, նախ գտի՛ր 1%-ը, հետո բազմապատկի՛ր 100-ով։", "Если известна часть числа в процентах, найди сначала 1%, потом умножь на 100."),
  percent: t("Percent", "Տոկոս", "Процент"),
  fraction: t("Fraction", "Կոտորակ", "Дробь"),
  decimal: t("Decimal", "Տասնորդական", "Десятичная"),
  number: t("The number", "Թիվը", "Число"),
  part: t("The part", "Մասը", "Часть"),
  one: t("1% of the number", "Թվի 1%-ը", "1% числа"),
  answer: t("Answer", "Պատասխան", "Ответ"),
  famous: t("Good to know: 50% = 1/2, 25% = 1/4, 10% = 1/10, 20% = 1/5, 75% = 3/4.", "Լավ է իմանալ․ 50% = 1/2, 25% = 1/4, 10% = 1/10, 20% = 1/5, 75% = 3/4։", "Полезно знать: 50% = 1/2, 25% = 1/4, 10% = 1/10, 20% = 1/5, 75% = 3/4."),
};

export default function Percent({ spec, lang }: SimProps) {
  if (spec.opts.mode === "of") return <Of spec={spec} lang={lang} />;
  if (spec.opts.mode === "whole") return <Whole spec={spec} lang={lang} />;
  return <Grid spec={spec} lang={lang} />;
}

function Grid({ spec, lang }: SimProps) {
  const [p, setP] = useState(clamp(Number(spec.opts.p ?? 35), 0, 100));
  const g = gcd(p, 100) || 1;
  const S = 15;
  return (
    <ArtFrame kind="look" title={L(W.grid, lang)} body={spec.body || L(W.gridHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={10 * S + 12} h={10 * S + 12} label={`${p}%`}>
          {Array.from({ length: 100 }, (_, i) => (
            <rect key={i} x={6 + (i % 10) * S} y={6 + Math.floor(i / 10) * S} width={S - 2} height={S - 2} rx="2" fill={i < p ? (Math.floor(i / 10) % 2 ? "#818cf8" : COLORS.a) : "#eef2ff"} onClick={() => setP(i + 1 === p ? i : i + 1)} style={{ cursor: "pointer" }} />
          ))}
        </Stage>
        <div>
          <Readouts items={[[L(W.percent, lang), `${p}%`, COLORS.a], [L(W.fraction, lang), p === 0 ? "0" : g === 100 ? "1" : `${p / g}/${100 / g}`, COLORS.b], [L(W.decimal, lang), num(p / 100, lang), COLORS.c]]} />
          <Note>{L(W.famous, lang)}</Note>
        </div>
      </div>
      <Slider label={L(W.percent, lang)} value={p} min={0} max={100} step={1} digits={0} unit="%" lang={lang} onChange={setP} />
    </ArtFrame>
  );
}

function Bar({ p, n, label }: { p: number; n: string; label: string }) {
  return (
    <Stage w={340} h={74} label={label}>
      <rect x={20} y={14} width={300} height={26} rx="6" fill="#eef2ff" stroke={COLORS.line} strokeWidth="1.5" />
      <rect x={20} y={14} width={3 * clamp(p, 0, 100)} height={26} rx="6" fill={COLORS.a} />
      {Array.from({ length: 9 }, (_, i) => <line key={i} x1={20 + (i + 1) * 30} x2={20 + (i + 1) * 30} y1={14} y2={40} stroke="#fff" strokeWidth="1.5" />)}
      {Array.from({ length: 11 }, (_, i) => <text key={i} x={20 + i * 30} y={54} textAnchor="middle" className="sim-axis">{i * 10}%</text>)}
      <text x={320} y={70} textAnchor="end" className="sim-tag" fill={COLORS.line}>{`100% = ${n}`}</text>
    </Stage>
  );
}

function Of({ spec, lang }: SimProps) {
  const [p, setP] = useState(clamp(Number(spec.opts.p ?? 30), 0, 100));
  const [n, setN] = useState(clamp(Number(spec.opts.n ?? 80), 1, 1000));
  const v = (n * p) / 100;
  return (
    <ArtFrame kind="experiment" title={L(W.of, lang)} body={spec.body || L(W.ofHint, lang)}>
      <Bar p={p} n={num(n, lang)} label={`${p}%`} />
      <Sum parts={[`${p}% ${lang === "en" ? "of" : times(lang)} ${num(n, lang)} = ${num(n, lang)} ${divide(lang)} 100 ${times(lang)} ${p} = `, [num(Math.round(v * 100) / 100, lang), COLORS.d]]} />
      <Slider label={L(W.percent, lang)} value={p} min={0} max={100} step={5} digits={0} unit="%" lang={lang} onChange={setP} />
      <NumPick label={L(W.number, lang)} value={n} min={10} max={500} step={10} onChange={setN} lang={lang} />
    </ArtFrame>
  );
}

function Whole({ spec, lang }: SimProps) {
  const [p, setP] = useState(clamp(Number(spec.opts.p ?? 30), 1, 100));
  const [part, setPart] = useState(clamp(Number(spec.opts.part ?? 12), 1, 500));
  const one = part / p;
  const whole = one * 100;
  const r = (v: number) => num(Math.round(v * 100) / 100, lang);
  return (
    <ArtFrame kind="experiment" title={L(W.whole, lang)} body={spec.body || L(W.wholeHint, lang)}>
      <Bar p={p} n="?" label={`${p}% = ${part}`} />
      <Readouts items={[[`${p}%`, r(part), COLORS.a], [L(W.one, lang), `${r(part)} ${divide(lang)} ${p} = ${r(one)}`, COLORS.b], ["100%", `${r(one)} ${times(lang)} 100 = ${r(whole)}`, COLORS.d]]} />
      <Slider label={L(W.percent, lang)} value={p} min={5} max={100} step={5} digits={0} unit="%" lang={lang} onChange={setP} />
      <NumPick label={L(W.part, lang)} value={part} min={1} max={200} onChange={setPart} lang={lang} />
    </ArtFrame>
  );
}
