"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { clamp, Note, Readouts, Slider, Stage } from "../kit";
import { L, t } from "../labels";
import { COLORS, NumPick, num, Sum, times } from "../math-kit";

/**
 * Motion problems on a road, hour by hour (speeds in km/h, distances in km):
 *   trip v=15                        one traveller: s = v × t
 *   trip mode=towards d=60 v1=12 v2=18   towards each other: the gap shrinks by v1 + v2 every hour
 *   trip mode=apart v1=60 v2=70 [d=0]    opposite directions: the gap grows by v1 + v2
 *   trip mode=chase d=12 v1=17 v2=5      the same direction: the faster one closes in by v1 − v2
 */
const W = {
  one: t("Experiment: speed, time and distance", "Փորձ․ արագություն, ժամանակ և ճանապարհ", "Опыт: скорость, время и расстояние"),
  oneHint: t("Move the time on hour by hour. Every hour the cyclist covers the same distance: the speed.", "Ժամանակը շարժի՛ր ժամ առ ժամ։ Ամեն ժամ հեծանվորդն անցնում է նույն ճանապարհը՝ արագությունը։", "Двигай время час за часом. Каждый час велосипедист проезжает одно и то же расстояние — скорость."),
  towards: t("Experiment: moving towards each other", "Փորձ․ շարժում իրար ընդառաջ", "Опыт: движение навстречу"),
  towardsHint: t("Every hour the gap between them shrinks by both speeds together: the closing speed.", "Ամեն ժամ նրանց միջև հեռավորությունը փոքրանում է երկու արագությունների գումարի չափով՝ մոտեցման արագությամբ։", "Каждый час расстояние между ними сокращается на сумму скоростей — скорость сближения."),
  apart: t("Experiment: moving in opposite directions", "Փորձ․ շարժում հակառակ ուղղություններով", "Опыт: движение в противоположные стороны"),
  apartHint: t("Every hour the gap grows by both speeds together: the speed of moving apart.", "Ամեն ժամ հեռավորությունը մեծանում է երկու արագությունների գումարի չափով՝ հեռացման արագությամբ։", "Каждый час расстояние растёт на сумму скоростей — скорость удаления."),
  chase: t("Experiment: catching up", "Փորձ․ հասնել ետևից", "Опыт: догонялки"),
  chaseHint: t("Both go the same way. Every hour the faster one gains the difference of the speeds.", "Երկուսն էլ գնում են նույն ուղղությամբ։ Ամեն ժամ արագը մոտենում է արագությունների տարբերության չափով։", "Оба едут в одну сторону. Каждый час быстрый догоняет на разность скоростей."),
  time: t("Time", "Ժամանակ", "Время"),
  speed1: t("Speed of the first", "Առաջինի արագությունը", "Скорость первого"),
  speed2: t("Speed of the second", "Երկրորդի արագությունը", "Скорость второго"),
  speed: t("Speed", "Արագություն", "Скорость"),
  start: t("Distance at the start", "Սկզբնական հեռավորություն", "Расстояние в начале"),
  went1: t("First has gone", "Առաջինն անցել է", "Первый проехал"),
  went2: t("Second has gone", "Երկրորդն անցել է", "Второй проехал"),
  went: t("Distance covered", "Անցած ճանապարհը", "Пройденный путь"),
  gap: t("Distance between them", "Նրանց միջև հեռավորությունը", "Расстояние между ними"),
  close: t("Closing speed", "Մոտեցման արագություն", "Скорость сближения"),
  away: t("Speed of moving apart", "Հեռացման արագություն", "Скорость удаления"),
  met: t("They meet after {t} h.", "Նրանք հանդիպում են {t} ժ հետո։", "Они встретятся через {t} ч."),
  caught: t("The first catches up after {t} h.", "Առաջինը հասնում է {t} ժ հետո։", "Первый догонит через {t} ч."),
  never: t("The first is not faster, so it never catches up.", "Առաջինն արագ չէ, ուստի երբեք չի հասնի։", "Первый не быстрее, поэтому никогда не догонит."),
  km: t("km", "կմ", "км"),
  kmh: t("km/h", "կմ/ժ", "км/ч"),
  h: t("h", "ժ", "ч"),
};

function Rider({ x, y, color, flip = false }: { x: number; y: number; color: string; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`}>
      <path d="M-14 -4 L-11 -10 L-4 -13 L6 -13 L10 -7 L14 -6 L14 0 L-14 0 Z" fill={color} />
      <circle cx="-8" cy="0" r="3.5" fill="#1e1b4b" />
      <circle cx="8" cy="0" r="3.5" fill="#1e1b4b" />
    </g>
  );
}

export default function Trip({ spec, lang }: SimProps) {
  const mode = (["towards", "apart", "chase"].includes(spec.opts.mode ?? "") ? spec.opts.mode : "one") as "one" | "towards" | "apart" | "chase";
  const [v1, setV1] = useState(clamp(Number(spec.opts.v1 ?? spec.opts.v ?? 15), 1, 120));
  const [v2, setV2] = useState(clamp(Number(spec.opts.v2 ?? 10), 1, 120));
  const [d, setD] = useState(clamp(Number(spec.opts.d ?? (mode === "towards" ? 60 : mode === "chase" ? 12 : 0)), 0, 600));
  const [h, setH] = useState(0);
  const km = L(W.km, lang), kmh = L(W.kmh, lang), hh = L(W.h, lang);
  const n = (v: number) => num(Math.round(v * 100) / 100, lang);

  // when they meet (towards) or catch up (chase); the slider runs a little past it
  const meet = mode === "towards" ? d / (v1 + v2) : mode === "chase" && v1 > v2 ? d / (v1 - v2) : null;
  const T = Math.max(4, Math.ceil((meet ?? 4) + 1));
  const tt = Math.min(h, T);
  const s1 = v1 * tt, s2 = v2 * tt;

  // positions in km along the road; A starts at 0
  let a = 0, b = 0, gap = 0;
  if (mode === "one") { a = s1; gap = s1; }
  if (mode === "towards") { a = Math.min(s1, d * v1 / (v1 + v2)); b = Math.max(d - s2, a); gap = Math.max(0, d - s1 - s2); }
  if (mode === "apart") { a = -s1; b = d + s2; gap = d + s1 + s2; }
  if (mode === "chase") { a = s1; b = d + s2; if (meet !== null && tt >= meet) a = b; gap = Math.max(0, b - a); }
  const lo = mode === "apart" ? -v1 * T : 0;
  const hi = mode === "one" ? v1 * T : mode === "towards" ? d : mode === "apart" ? d + v2 * T : d + v2 * T;
  const X = (k: number) => 22 + ((k - lo) / (hi - lo || 1)) * 296;
  const startB = mode === "towards" ? d : d;
  const marks = Array.from({ length: Math.floor(tt) + 1 }, (_, k) => k);

  const title = { one: W.one, towards: W.towards, apart: W.apart, chase: W.chase }[mode];
  const hint = { one: W.oneHint, towards: W.towardsHint, apart: W.apartHint, chase: W.chaseHint }[mode];
  const rel = mode === "chase" ? v1 - v2 : v1 + v2;
  const met = meet !== null && tt >= meet;

  return (
    <ArtFrame kind="experiment" title={L(title, lang)} body={spec.body || L(hint, lang)}>
      <Stage w={340} h={112} label={L(title, lang)}>
        <rect x="0" y="54" width="340" height="30" fill="#e2e8f0" />
        <line x1="0" x2="340" y1="69" y2="69" stroke="#fff" strokeWidth="2" strokeDasharray="10 8" />
        {/* where each traveller was after every whole hour */}
        {marks.map((k) => (
          <g key={k}>
            {mode !== "apart" || k ? <circle cx={X(mode === "apart" ? -v1 * k : Math.min(v1 * k, mode === "towards" ? d * v1 / (v1 + v2) : mode === "chase" && meet !== null ? Math.min(v1 * k, v1 * meet) : v1 * k))} cy="90" r="2.5" fill={COLORS.a} /> : null}
            {mode !== "one" && k ? <circle cx={X(mode === "towards" ? Math.max(d - v2 * k, d * v1 / (v1 + v2)) : mode === "chase" && meet !== null ? d + Math.min(v2 * k, v2 * meet) : d + v2 * k)} cy="94" r="2.5" fill={COLORS.d} /> : null}
          </g>
        ))}
        <circle cx={X(0)} cy="69" r="3" fill={COLORS.line} />
        {mode !== "one" && d > 0 ? <circle cx={X(startB)} cy="69" r="3" fill={COLORS.line} /> : null}
        <Rider x={X(a)} y={mode === "one" ? 66 : 62} color={COLORS.a} flip={mode === "apart"} />
        {mode !== "one" ? <Rider x={X(b)} y={80} color={COLORS.d} flip={mode === "towards"} /> : null}
        {gap > 0 ? (
          <g>
            <line x1={X(mode === "one" ? 0 : Math.min(a, b))} x2={X(mode === "one" ? a : Math.max(a, b))} y1="34" y2="34" stroke={COLORS.c} strokeWidth="2" />
            <line x1={X(mode === "one" ? 0 : Math.min(a, b))} x2={X(mode === "one" ? 0 : Math.min(a, b))} y1="28" y2="40" stroke={COLORS.c} strokeWidth="2" />
            <line x1={X(mode === "one" ? a : Math.max(a, b))} x2={X(mode === "one" ? a : Math.max(a, b))} y1="28" y2="40" stroke={COLORS.c} strokeWidth="2" />
            <text x={(X(mode === "one" ? 0 : Math.min(a, b)) + X(mode === "one" ? a : Math.max(a, b))) / 2} y="24" textAnchor="middle" className="sim-tag" fill={COLORS.c}>{`${n(gap)} ${km}`}</text>
          </g>
        ) : null}
        <text x="8" y="14" className="sim-small">{`t = ${n(tt)} ${hh}`}</text>
      </Stage>

      {mode === "one" ? (
        <Sum parts={["s = v × t = ", [`${n(v1)}`, COLORS.a], ` ${times(lang)} ${n(tt)} = `, [`${n(s1)} ${km}`, COLORS.c]]} />
      ) : mode === "towards" ? (
        <Sum parts={[`${n(d)} − (${n(v1)} + ${n(v2)}) ${times(lang)} ${n(tt)} = `, [`${n(gap)} ${km}`, COLORS.c]]} />
      ) : mode === "apart" ? (
        <Sum parts={[d ? `${n(d)} + ` : "", `(${n(v1)} + ${n(v2)}) ${times(lang)} ${n(tt)} = `, [`${n(gap)} ${km}`, COLORS.c]]} />
      ) : (
        <Sum parts={[`${n(d)} − (${n(v1)} − ${n(v2)}) ${times(lang)} ${n(tt)} = `, [`${n(met ? 0 : gap)} ${km}`, COLORS.c]]} />
      )}

      <Readouts
        items={mode === "one"
          ? [[L(W.speed, lang), `${n(v1)} ${kmh}`, COLORS.a], [L(W.went, lang), `${n(s1)} ${km}`, COLORS.c]]
          : [
              [L(mode === "apart" ? W.away : W.close, lang), `${n(rel)} ${kmh}`, COLORS.b],
              [L(W.went1, lang), `${n(meet !== null ? Math.min(s1, v1 * meet) : s1)} ${km}`, COLORS.a],
              [L(W.went2, lang), `${n(meet !== null ? Math.min(s2, v2 * meet) : s2)} ${km}`, COLORS.d],
              [L(W.gap, lang), `${n(met ? 0 : gap)} ${km}`, COLORS.c],
            ]}
      />
      {meet !== null && met ? <Note tone="good">{L(mode === "towards" ? W.met : W.caught, lang).replace("{t}", n(meet))}</Note> : null}
      {mode === "chase" && v1 <= v2 ? <Note tone="bad">{L(W.never, lang)}</Note> : null}

      <Slider label={L(W.time, lang)} value={tt} min={0} max={T} step={0.5} unit={hh} lang={lang} onChange={setH} />
      <div className="art-row">
        <NumPick label={mode === "one" ? L(W.speed, lang) : L(W.speed1, lang)} value={v1} min={1} max={mode === "one" ? 30 : 100} onChange={setV1} lang={lang} color={COLORS.a} />
        {mode !== "one" ? <NumPick label={L(W.speed2, lang)} value={v2} min={1} max={100} onChange={setV2} lang={lang} color={COLORS.d} /> : null}
      </div>
      {mode !== "one" ? <NumPick label={L(W.start, lang)} value={d} min={mode === "apart" ? 0 : 10} max={300} step={mode === "apart" ? 10 : 2} onChange={setD} lang={lang} /> : null}
    </ArtFrame>
  );
}
