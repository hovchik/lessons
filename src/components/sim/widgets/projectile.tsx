"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Arrow, Controls, fmt, Note, PlayBar, Readouts, Slider, Stage, Toggle, useClock } from "../kit";
import { L, t, un } from "../labels";

const W = {
  throw: t("Experiment: a body thrown at an angle", "Փորձ․ անկյան տակ նետված մարմին", "Опыт: тело, брошенное под углом"),
  throwHint: t(
    "Choose the speed and the angle and throw. Sideways the ball moves evenly, up and down it falls with g. Which angle sends it the farthest?",
    "Ընտրի՛ր արագությունը և անկյունը և նետի՛ր։ Հորիզոնական ուղղությամբ գնդակը շարժվում է հավասարաչափ, իսկ ուղղաձիգ ուղղությամբ ընկնում է g արագացմամբ։ Ո՞ր անկյան դեպքում այն կթռչի ամենահեռու։",
    "Выбери скорость и угол и брось. По горизонтали мяч движется равномерно, по вертикали падает с ускорением g. Под каким углом он улетит дальше всего?",
  ),
  circle: t("Experiment: motion in a circle", "Փորձ․ շրջանագծով շարժում", "Опыт: движение по окружности"),
  circleHint: t(
    "The speed stays the same but its direction keeps turning, so there is an acceleration towards the centre: a = v²/r. Cut the string and the ball flies off along the tangent.",
    "Արագության մեծությունը չի փոխվում, բայց ուղղությունն անընդհատ պտտվում է, ուստի կա դեպի կենտրոն ուղղված արագացում՝ a = v²/r։ Կտրի՛ր թելը, և գնդակը կթռչի շոշափողով։",
    "Модуль скорости не меняется, но её направление всё время поворачивается, поэтому есть ускорение к центру: a = v²/r. Перережь нить, и мяч полетит по касательной.",
  ),
  speed: t("Speed v₀", "Արագություն v₀", "Скорость v₀"),
  angle: t("Angle α", "Անկյուն α", "Угол α"),
  vectors: t("Show velocity parts", "Ցույց տալ արագության բաղադրիչները", "Показать составляющие скорости"),
  range: t("Range", "Թռիչքի հեռավորություն", "Дальность"),
  top: t("Highest point", "Ամենաբարձր կետ", "Наибольшая высота"),
  flight: t("Flight time", "Թռիչքի ժամանակ", "Время полёта"),
  best: t("45° gives the longest throw (without air).", "45°-ը տալիս է ամենահեռու նետումը (առանց օդի)։", "Под 45° бросок самый дальний (без воздуха)."),
  pair: t("Angles that add up to 90° (like 30° and 60°) give the same range.", "90° գումար ունեցող անկյունները (օրինակ՝ 30° և 60°) տալիս են նույն հեռավորությունը։", "Углы, дающие в сумме 90° (например, 30° и 60°), дают одинаковую дальность."),
  r: t("Radius r", "Շառավիղ r", "Радиус r"),
  v: t("Speed v", "Արագություն v", "Скорость v"),
  period: t("Period T", "Պարբերություն T", "Период T"),
  freq: t("Frequency ν", "Հաճախություն ν", "Частота ν"),
  acc: t("Centripetal a", "Կենտրոնաձիգ a", "Центростремительное a"),
  cut: t("Cut the string", "Կտրել թելը", "Перерезать нить"),
  tie: t("Tie it again", "Նորից կապել", "Привязать снова"),
};

const g = 9.8;

export default function Projectile({ spec, lang }: SimProps) {
  if (spec.opts.mode === "circle") return <Circle spec={spec} lang={lang} />;
  return <Throw spec={spec} lang={lang} />;
}

function Throw({ spec, lang }: SimProps) {
  const [v0, setV0] = useState(Number(spec.opts.v ?? 15));
  const [al, setAl] = useState(Number(spec.opts.angle ?? 30));
  const [vec, setVec] = useState(true);
  const [trails, setTrails] = useState<Array<{ a: number; v: number }>>([]);
  const a = (al * Math.PI) / 180;
  const vx = v0 * Math.cos(a), vy0 = v0 * Math.sin(a);
  const T = (2 * vy0) / g;
  const clock = useClock({ until: T });
  const s = Math.min(clock.t, T);
  const x = vx * s, y = vy0 * s - (g * s * s) / 2;
  const vy = vy0 - g * s;
  const S = 290 / 46; // px per metre (max range about 46 m)
  const X = (m: number) => 18 + m * S, Y = (m: number) => 180 - m * S;
  const curve = (vv: number, aa: number) => {
    const r = (aa * Math.PI) / 180;
    const tt = (2 * vv * Math.sin(r)) / g;
    return Array.from({ length: 41 }, (_, k) => { const q = (k * tt) / 40; return `${X(vv * Math.cos(r) * q).toFixed(1)},${Y(vv * Math.sin(r) * q - (g * q * q) / 2).toFixed(1)}`; }).join(" ");
  };
  const path = Array.from({ length: 41 }, (_, k) => (k * s) / 40).map((q) => `${X(vx * q).toFixed(1)},${Y(vy0 * q - (g * q * q) / 2).toFixed(1)}`).join(" ");
  const range = vx * T, hmax = (vy0 * vy0) / (2 * g);
  const landed = s >= T && clock.t > 0;
  return (
    <ArtFrame kind="experiment" title={L(W.throw, lang)} body={spec.body || L(W.throwHint, lang)}>
      <Stage w={320} h={200} label={L(W.throw, lang)}>
        <rect y="180" width="320" height="20" fill="#bbf7d0" />
        {[0, 10, 20, 30, 40].map((m) => <text key={m} x={X(m)} y="194" textAnchor="middle" className="sim-axis">{m}</text>)}
        {trails.map((tr, k) => <polyline key={k} points={curve(tr.v, tr.a)} fill="none" stroke="#cbd5e1" strokeDasharray="3 3" />)}
        <polyline points={path} fill="none" stroke="#4f46e5" strokeWidth="2" />
        <g transform={`translate(${X(0)} ${Y(0)}) rotate(${-al})`}>
          <rect x="-4" y="-5" width="26" height="10" rx="3" fill="#334155" />
        </g>
        <circle cx={X(x)} cy={Y(y)} r="6" fill="#f97316" />
        {vec && !landed ? (
          <>
            <Arrow x1={X(x)} y1={Y(y)} x2={X(x) + vx * 2.4} y2={Y(y)} color="#059669" label="vₓ" />
            <Arrow x1={X(x)} y1={Y(y)} x2={X(x)} y2={Y(y) - vy * 2.4} color="#e11d48" label="v_y" />
            <Arrow x1={X(x)} y1={Y(y)} x2={X(x) + vx * 2.4} y2={Y(y) - vy * 2.4} color="#4f46e5" width={2} />
          </>
        ) : null}
        <text x="310" y="14" textAnchor="end" className="sim-axis is-name">{un("m", lang)}</text>
      </Stage>
      <Readouts
        items={[
          [L(W.range, lang), `${fmt(range, 1, lang)} ${un("m", lang)}`, "#4f46e5"],
          [L(W.top, lang), `${fmt(hmax, 1, lang)} ${un("m", lang)}`],
          [L(W.flight, lang), `${fmt(T, 2, lang)} ${un("s", lang)}`],
        ]}
      />
      {landed && trails.length > 0 ? <Note>{L(al === 45 ? W.best : W.pair, lang)}</Note> : null}
      <Controls>
        <Slider label={L(W.speed, lang)} value={v0} min={5} max={21} step={1} unit={un("ms", lang)} lang={lang} onChange={(n) => { setV0(n); clock.reset(); }} />
        <Slider label={L(W.angle, lang)} value={al} min={5} max={85} step={5} digits={0} unit="°" lang={lang} onChange={(n) => { if (clock.t > 0) setTrails((tr) => [...tr.slice(-4), { a: al, v: v0 }]); setAl(n); clock.reset(); }} />
      </Controls>
      <div className="art-chips"><Toggle on={vec} label={L(W.vectors, lang)} onChange={setVec} /></div>
      <PlayBar clock={clock} lang={lang} onReset={() => setTrails([])} />
    </ArtFrame>
  );
}

function Circle({ spec, lang }: SimProps) {
  const [r, setR] = useState(Number(spec.opts.r ?? 1));
  const [v, setV] = useState(Number(spec.opts.v ?? 2));
  const [cut, setCut] = useState<null | { t: number; ang: number }>(null);
  const clock = useClock({ autoplay: true });
  const R = 40 + r * 30;
  const w = v / r; // rad/s
  const s = clock.t;
  const ang = cut ? cut.ang : w * s;
  const cx = 160, cy = 110;
  let bx = cx + R * Math.cos(ang), by = cy - R * Math.sin(ang);
  if (cut) {
    const d = (s - cut.t) * v * 30;
    bx += -Math.sin(ang) * d;
    by += -Math.cos(ang) * d;
  }
  const tx = -Math.sin(ang), ty = -Math.cos(ang);
  const acc = (v * v) / r;
  return (
    <ArtFrame kind="experiment" title={L(W.circle, lang)} body={spec.body || L(W.circleHint, lang)}>
      <Stage w={320} h={220} label={L(W.circle, lang)}>
        <circle cx={cx} cy={cy} r={R} fill="none" stroke="#cbd5e1" strokeDasharray="4 4" />
        <circle cx={cx} cy={cy} r="4" fill="#334155" />
        {cut ? null : <line x1={cx} y1={cy} x2={bx} y2={by} stroke="#64748b" strokeWidth="1.5" />}
        <circle cx={bx} cy={by} r="8" fill="#f97316" />
        <Arrow x1={bx} y1={by} x2={bx + tx * v * 16} y2={by + ty * v * 16} color="#059669" label="v" />
        {cut ? null : <Arrow x1={bx} y1={by} x2={bx + (cx - bx) / R * Math.min(60, acc * 6)} y2={by + (cy - by) / R * Math.min(60, acc * 6)} color="#e11d48" label="a" />}
      </Stage>
      <Readouts
        items={[
          [L(W.period, lang), `${fmt((2 * Math.PI * r) / v, 2, lang)} ${un("s", lang)}`],
          [L(W.freq, lang), `${fmt(v / (2 * Math.PI * r), 2, lang)} ${un("Hz", lang)}`],
          [L(W.acc, lang), `${fmt(acc, 1, lang)} ${un("ms2", lang)}`, "#e11d48"],
        ]}
      />
      <Controls>
        <Slider label={L(W.r, lang)} value={r} min={0.5} max={2} step={0.25} digits={2} unit={un("m", lang)} lang={lang} onChange={(n) => { setR(n); setCut(null); }} />
        <Slider label={L(W.v, lang)} value={v} min={0.5} max={4} step={0.5} unit={un("ms", lang)} lang={lang} onChange={(n) => { setV(n); setCut(null); }} />
      </Controls>
      <div className="art-row">
        <button type="button" className="art-btn is-primary" onClick={() => (cut ? setCut(null) : setCut({ t: s, ang: w * s }))}>{L(cut ? W.tie : W.cut, lang)}</button>
      </div>
      <PlayBar clock={clock} lang={lang} onReset={() => setCut(null)} noSlow />
    </ArtFrame>
  );
}
