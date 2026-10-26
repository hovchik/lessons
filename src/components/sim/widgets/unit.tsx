"use client";

import { useState, type ReactNode } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Choice, clamp, fmt, Handle, Note, Readouts, Slider, Stage, useDrag } from "../kit";
import { L, t } from "../labels";
import { COLORS, piText, Sum, trigName } from "../math-kit";

/**
 * The unit circle, all the way round:
 *   unit deg=210                  a point at angle α: cos α and sin α as its coordinates, radians, exact values
 *   unit mode=signs fn=sin        the same, with the sign of sin, cos or tan marked in each quarter
 *   unit mode=solve fn=sin a=0.5  the equation sin x = a (cos, tan): the line meets the circle at the solutions
 */
const W = {
  angle: t("Experiment: the unit circle", "Փորձ․ միավոր շրջանագիծ", "Опыт: единичная окружность"),
  angleHint: t("Drag the point or the slider. The x-coordinate of the point is cos α, the y-coordinate is sin α. A positive angle turns anticlockwise, a negative one clockwise.", "Քաշի՛ր կետը կամ սահիչը։ Կետի x կոորդինատը cos α-ն է, y կոորդինատը՝ sin α-ն։ Դրական անկյունը պտտվում է ժամսլաքի հակառակ ուղղությամբ, բացասականը՝ ժամսլաքի ուղղությամբ։", "Двигай точку или ползунок. Абсцисса точки — cos α, ордината — sin α. Положительный угол откладывается против часовой стрелки, отрицательный — по часовой."),
  signs: t("Look closely: signs in the quarters", "Ուշադիր նայի՛ր․ նշանները քառորդներում", "Рассмотри: знаки по четвертям"),
  signsHint: t("Pick a function. Its sign in each quarter follows from the signs of x and y there; move the point to check.", "Ընտրի՛ր ֆունկցիան։ Նրա նշանը յուրաքանչյուր քառորդում բխում է այնտեղ x-ի և y-ի նշաններից․ շարժի՛ր կետը՝ ստուգելու համար։", "Выбери функцию. Её знак в каждой четверти следует из знаков x и y там; двигай точку, чтобы проверить."),
  solve: t("Experiment: solving a trigonometric equation", "Փորձ․ եռանկյունաչափական հավասարման լուծում", "Опыт: решаем тригонометрическое уравнение"),
  solveHint: t("Change a. The line meets the circle at the points whose angles solve the equation. Adding a full turn gives the same point, so every solution repeats.", "Փոխի՛ր a-ն։ Ուղիղը հատում է շրջանագիծը այն կետերում, որոնց անկյունները հավասարման լուծումներն են։ Լրիվ պտույտ ավելացնելիս ստացվում է նույն կետը, ուստի ամեն լուծում կրկնվում է։", "Меняй a. Прямая пересекает окружность в точках, углы которых и есть решения. Полный оборот даёт ту же точку, поэтому каждое решение повторяется."),
  rad: t("Radians", "Ռադիաններ", "Радианы"),
  quarter: t("Quarter", "Քառորդ", "Четверть"),
  axis: t("on an axis", "առանցքի վրա", "на оси"),
  undef: t("not defined", "որոշված չէ", "не определён"),
  turn: t("{d}° is {n} full turn(s) plus {r}°: the same point as {r}°.", "{d}°-ը {n} լրիվ պտույտ է գումարած {r}°․ նույն կետն է, ինչ {r}°-ը։", "{d}° — это {n} полный(х) оборот(а) и ещё {r}°: та же точка, что и {r}°."),
  sols: t("Solutions in [0; 2π)", "Լուծումները [0; 2π)-ում", "Решения на [0; 2π)"),
  all: t("All solutions", "Բոլոր լուծումները", "Все решения"),
  none: t("|a| > 1: the line misses the circle, so there are no solutions.", "|a| > 1․ ուղիղը չի հատում շրջանագիծը, ուստի լուծում չկա։", "|a| > 1: прямая не пересекает окружность, решений нет."),
  n: t("n is any integer", "n-ը ցանկացած ամբողջ թիվ է", "n — любое целое число"),
};

type Fn = "sin" | "cos" | "tan";
const FNS: Fn[] = ["sin", "cos", "tan"];
const O = { x: 160, y: 122 }, R = 96;
const rd = (d: number) => (d * Math.PI) / 180;
const nf = (v: number, lang: ArtLang, d = 3) => fmt(Math.abs(v) < 1e-9 ? 0 : v, d, lang).replace("-", "−");

/** Exact value for multiples of 30° and 45°, or null. */
function exact(fn: Fn, d: number): string | null {
  const m = ((d % 360) + 360) % 360;
  if (m % 30 !== 0 && m % 45 !== 0) return null;
  const s = Math.sin(rd(m)), c = Math.cos(rd(m));
  const v = fn === "sin" ? s : fn === "cos" ? c : Math.abs(c) < 1e-9 ? NaN : s / c;
  if (!Number.isFinite(v)) return "—";
  const known: Array<[number, string]> = [[0, "0"], [0.5, "1/2"], [Math.SQRT1_2, "√2/2"], [Math.sqrt(3) / 2, "√3/2"], [1, "1"], [Math.sqrt(3) / 3, "√3/3"], [Math.sqrt(3), "√3"]];
  const hit = known.find(([k]) => Math.abs(Math.abs(v) - k) < 1e-6);
  return hit ? `${v < -1e-9 ? "−" : ""}${hit[1]}` : null;
}

const val = (fn: Fn, d: number) => {
  const s = Math.sin(rd(d)), c = Math.cos(rd(d));
  return fn === "sin" ? s : fn === "cos" ? c : Math.abs(c) < 1e-9 ? NaN : s / c;
};

/** "210° = 7π/6" with the locale's number format for angles that are not neat fractions of π. */
const radText = (d: number, lang: ArtLang) => {
  const p = piText(d / 180);
  return p.includes(".") ? nf(rd(d), lang, 2) : p;
};

function Circle({ children }: { children?: ReactNode }) {
  return (
    <g>
      <line x1={O.x - R - 22} x2={O.x + R + 22} y1={O.y} y2={O.y} stroke="#64748b" strokeWidth="1.2" />
      <line x1={O.x} x2={O.x} y1={O.y + R + 18} y2={O.y - R - 18} stroke="#64748b" strokeWidth="1.2" />
      <circle cx={O.x} cy={O.y} r={R} fill="none" stroke={COLORS.line} strokeWidth="1.6" />
      <text x={O.x + R + 4} y={O.y + 13} className="sim-axis">1</text>
      <text x={O.x - R - 14} y={O.y + 13} className="sim-axis">−1</text>
      <text x={O.x + 5} y={O.y - R - 4} className="sim-axis">1</text>
      <text x={O.x + 5} y={O.y + R + 13} className="sim-axis">−1</text>
      <text x={O.x + R + 18} y={O.y - 6} className="sim-axis is-name">x</text>
      <text x={O.x + 6} y={O.y - R - 8} className="sim-axis is-name">y</text>
      {children}
    </g>
  );
}

/** Arc from 0 to d degrees (several turns are drawn as a spiral-free arc of the remainder plus a note). */
function Arc({ d, r = 22, color = COLORS.b }: { d: number; r?: number; color?: string }) {
  if (Math.abs(d) < 1e-9) return null;
  const end = clamp(d, -359.9, 359.9);
  const pts: string[] = [];
  const N = Math.max(8, Math.round(Math.abs(end) / 6));
  for (let i = 0; i <= N; i++) {
    const a = rd((end * i) / N);
    pts.push(`${i ? "L" : "M"}${(O.x + r * Math.cos(a)).toFixed(1)} ${(O.y - r * Math.sin(a)).toFixed(1)}`);
  }
  return <path d={pts.join("")} fill="none" stroke={color} strokeWidth="2.4" />;
}

const snap = (d: number) => {
  const r = Math.round(d / 5) * 5;
  const n15 = Math.round(d / 15) * 15;
  return Math.abs(d - n15) < 4 ? n15 : r;
};

export default function Unit({ spec, lang }: SimProps) {
  return spec.opts.mode === "solve" ? <Solve spec={spec} lang={lang} /> : <Angle spec={spec} lang={lang} />;
}

function Angle({ spec, lang }: SimProps) {
  const signs = spec.opts.mode === "signs";
  const [d, setD] = useState(clamp(Number(spec.opts.deg ?? 210), -720, 720));
  const [fn, setFn] = useState<Fn>(FNS.find((f) => f === spec.opts.fn) ?? "sin");
  const a = rd(d), P = { x: O.x + R * Math.cos(a), y: O.y - R * Math.sin(a) };
  const drag = useDrag<"p">((p) => (Math.hypot(p.x - P.x, p.y - P.y) < 30 ? "p" : null), (_, p) => {
    let g = (Math.atan2(O.y - p.y, p.x - O.x) * 180) / Math.PI;
    if (g < 0) g += 360;
    setD(snap(g) % 360);
  });
  const m = ((d % 360) + 360) % 360;
  const q = m % 90 === 0 ? 0 : Math.floor(m / 90) + 1;
  const show = (f: Fn) => exact(f, d) ?? nf(val(f, d), lang);
  const quarterSign = (k: number, f: Fn) => {
    const sx = k === 1 || k === 4 ? 1 : -1, sy = k <= 2 ? 1 : -1;
    const v = f === "sin" ? sy : f === "cos" ? sx : sx * sy;
    return v > 0 ? "+" : "−";
  };
  const qPos = [null, { x: O.x + 58, y: O.y - 52 }, { x: O.x - 58, y: O.y - 52 }, { x: O.x - 58, y: O.y + 62 }, { x: O.x + 58, y: O.y + 62 }];
  const turns = Math.trunc(Math.abs(d) / 360);
  return (
    <ArtFrame kind={signs ? "look" : "experiment"} title={L(signs ? W.signs : W.angle, lang)} body={spec.body || L(signs ? W.signsHint : W.angleHint, lang)}>
      <Stage w={320} h={248} label={`α = ${d}°`} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        {signs ? [1, 2, 3, 4].map((k) => {
          const plus = quarterSign(k, fn) === "+";
          const s = k === 1 ? [0, 90] : k === 2 ? [90, 180] : k === 3 ? [180, 270] : [270, 360];
          const p0 = { x: O.x + R * Math.cos(rd(s[0])), y: O.y - R * Math.sin(rd(s[0])) }, p1 = { x: O.x + R * Math.cos(rd(s[1])), y: O.y - R * Math.sin(rd(s[1])) };
          return (
            <g key={k}>
              <path d={`M${O.x} ${O.y}L${p0.x} ${p0.y}A${R} ${R} 0 0 0 ${p1.x} ${p1.y}Z`} fill={plus ? COLORS.c : COLORS.d} opacity={q === k ? 0.22 : 0.1} />
              <text x={qPos[k]!.x} y={qPos[k]!.y} textAnchor="middle" className="sim-tag" fill={plus ? COLORS.c : COLORS.d} style={{ fontSize: 26 }}>{quarterSign(k, fn)}</text>
            </g>
          );
        }) : null}
        <Circle>
          <Arc d={d} />
          <line x1={O.x} y1={O.y} x2={P.x} y2={P.y} stroke={COLORS.a} strokeWidth="2.4" />
          <line x1={P.x} y1={P.y} x2={P.x} y2={O.y} stroke={COLORS.b} strokeWidth="3.2" />
          <line x1={O.x} y1={O.y} x2={P.x} y2={O.y} stroke={COLORS.c} strokeWidth="4" />
          <text x={P.x} y={O.y + (Math.sin(a) >= 0 ? 14 : -6)} textAnchor="middle" className="sim-tag" fill={COLORS.c}>cos α</text>
          <text x={P.x + (Math.cos(a) >= 0 ? 6 : -6)} y={(P.y + O.y) / 2 + 4} textAnchor={Math.cos(a) >= 0 ? "start" : "end"} className="sim-tag" fill={COLORS.b}>sin α</text>
          <Handle x={P.x} y={P.y} color={COLORS.a} r={6} />
        </Circle>
      </Stage>
      <Sum parts={[[`α = ${d}° = ${radText(d, lang)}`, COLORS.a]]} />
      <Readouts
        items={[
          ["sin α", show("sin"), COLORS.b],
          ["cos α", show("cos"), COLORS.c],
          [`${trigName("tan", lang)} α`, Number.isFinite(val("tan", d)) ? show("tan") : L(W.undef, lang), COLORS.a],
          [L(W.quarter, lang), q ? ["I", "II", "III", "IV"][q - 1] : L(W.axis, lang)],
        ]}
      />
      {turns > 0 ? <Note>{L(W.turn, lang).replace("{d}", String(Math.abs(d))).replace("{n}", String(turns)).replace(/\{r\}/g, String(d < 0 ? -(Math.abs(d) % 360) : Math.abs(d) % 360))}</Note> : null}
      {signs ? <Choice value={fn} options={FNS.map((f) => [f, trigName(f, lang)])} onChange={setFn} /> : null}
      <Slider label="α" value={d} min={-360} max={720} step={15} lang={lang} display={`${d}°`} onChange={setD} />
      <div className="art-chips">
        {[30, 45, 60, 90, 120, 150, 180, 210, 270, 330, -45, 390].map((v) => <button key={v} type="button" className={`art-chip${d === v ? " is-active" : ""}`} onClick={() => setD(v)}>{String(v).replace("-", "−")}°</button>)}
      </div>
    </ArtFrame>
  );
}

const CHIPS: Record<Fn, Array<[number, string]>> = {
  sin: [[-1, "−1"], [-Math.sqrt(3) / 2, "−√3/2"], [-0.5, "−1/2"], [0, "0"], [0.5, "1/2"], [Math.SQRT1_2, "√2/2"], [Math.sqrt(3) / 2, "√3/2"], [1, "1"]],
  cos: [[-1, "−1"], [-Math.SQRT1_2, "−√2/2"], [-0.5, "−1/2"], [0, "0"], [0.5, "1/2"], [Math.SQRT1_2, "√2/2"], [Math.sqrt(3) / 2, "√3/2"], [1, "1"]],
  tan: [[-Math.sqrt(3), "−√3"], [-1, "−1"], [-Math.sqrt(3) / 3, "−√3/3"], [0, "0"], [Math.sqrt(3) / 3, "√3/3"], [1, "1"], [Math.sqrt(3), "√3"]],
};

function Solve({ spec, lang }: SimProps) {
  const [fn, setFn] = useState<Fn>(FNS.find((f) => f === spec.opts.fn) ?? "sin");
  const [a, setA] = useState(clamp(Number(spec.opts.a ?? 0.5), -3, 3));
  const lim = fn === "tan" ? 3 : 1.2;
  const chip = CHIPS[fn].find(([v]) => Math.abs(v - a) < 1e-6);
  const aText = chip ? chip[1] : nf(a, lang, 2);
  const tn = trigName(fn, lang);
  // the two solutions in [0, 360)
  let sols: number[] = [];
  if (fn === "tan") {
    const b = (Math.atan(a) * 180) / Math.PI;
    sols = [(b + 360) % 360, (b + 180) % 360];
  } else if (Math.abs(a) <= 1 + 1e-9) {
    const x = clamp(a, -1, 1);
    const b = ((fn === "sin" ? Math.asin(x) : Math.acos(x)) * 180) / Math.PI;
    sols = fn === "sin" ? [(b + 360) % 360, (180 - b + 360) % 360] : [b, (360 - b) % 360];
  }
  sols = [...new Set(sols.map((s) => Math.round(s * 1000) / 1000))].sort((p, q) => p - q);
  const pts = sols.map((s) => ({ x: O.x + R * Math.cos(rd(s)), y: O.y - R * Math.sin(rd(s)) }));
  const ang = (s: number) => {
    const p = piText(s / 180);
    return p.includes(".") ? `${nf(s, lang, 1)}°` : p;
  };
  const general = fn === "sin" ? `x = (−1)ⁿ·arcsin ${aText} + πn` : fn === "cos" ? `x = ±arccos ${aText} + 2πn` : `x = ${lang === "en" ? "arctan" : "arctg"} ${aText} + πn`;
  const yLine = O.y - a * R, xLine = O.x + a * R;
  return (
    <ArtFrame kind="experiment" title={L(W.solve, lang)} body={spec.body || L(W.solveHint, lang)}>
      <Stage w={320} h={248} label={`${tn} x = ${aText}`}>
        <Circle>
          {fn === "sin" ? <line x1={20} x2={300} y1={yLine} y2={yLine} stroke={COLORS.d} strokeWidth="2" strokeDasharray="6 4" /> : null}
          {fn === "cos" ? <line x1={xLine} x2={xLine} y1={6} y2={242} stroke={COLORS.d} strokeWidth="2" strokeDasharray="6 4" /> : null}
          {fn === "tan" ? (
            <g>
              <line x1={O.x + R} x2={O.x + R} y1={6} y2={242} stroke="#94a3b8" strokeWidth="1.4" />
              <line x1={O.x - 1.25 * R} y1={O.y + 1.25 * R * a} x2={O.x + 1.25 * R} y2={O.y - 1.25 * R * a} stroke={COLORS.d} strokeWidth="2" strokeDasharray="6 4" />
              <circle cx={O.x + R} cy={clamp(O.y - a * R, 4, 244)} r="4" fill={COLORS.d} />
            </g>
          ) : null}
          {sols.map((s, i) => <g key={s}><line x1={O.x} y1={O.y} x2={pts[i].x} y2={pts[i].y} stroke={COLORS.a} strokeWidth="2.2" /><Arc d={s} r={18 + i * 9} color={i ? COLORS.c : COLORS.b} /></g>)}
          {pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="5.5" fill={i ? COLORS.c : COLORS.b} stroke="#fff" strokeWidth="2" />)}
        </Circle>
      </Stage>
      <Sum parts={[[`${tn} x = ${aText}`, COLORS.d]]} />
      {sols.length ? (
        <Readouts items={[[L(W.sols, lang), sols.map(ang).join(";  "), COLORS.b], [L(W.all, lang), general, COLORS.a]]} />
      ) : (
        <Note tone="bad">{L(W.none, lang)}</Note>
      )}
      {sols.length ? <Note>{L(W.n, lang)}</Note> : null}
      <Choice value={fn} options={FNS.map((f) => [f, `${trigName(f, lang)} x = a`])} onChange={(f) => { setFn(f); if (f !== "tan") setA(clamp(a, -1, 1)); }} />
      <Slider label="a" value={a} min={-lim} max={lim} step={0.05} lang={lang} display={aText} onChange={setA} />
      <div className="art-chips">
        {CHIPS[fn].map(([v, s]) => <button key={s} type="button" className={`art-chip${chip && chip[1] === s ? " is-active" : ""}`} onClick={() => setA(v)}>{s}</button>)}
      </div>
    </ArtFrame>
  );
}
