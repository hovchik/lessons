"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Arrow, Controls, fmt, Note, PlayBar, Readouts, Slider, Stage, Toggle, useClock, useStepper } from "../kit";
import { L, t, un } from "../labels";

const W = {
  cannon: t("Experiment: Newton's cannon", "Փորձ․ Նյուտոնի թնդանոթը", "Опыт: пушка Ньютона"),
  cannonHint: t(
    "A cannon on a very high mountain fires a ball sideways. Slow balls fall back, at about 7.9 km/s the ball keeps falling around the Earth (a satellite), and above 11.2 km/s it flies away for good.",
    "Շատ բարձր լեռան գագաթին դրված թնդանոթը գնդակն արձակում է հորիզոնական։ Դանդաղ գնդակներն ընկնում են, մոտ 7,9 կմ/վ-ի դեպքում գնդակը շարունակում է «ընկնել» Երկրի շուրջը (արբանյակ), իսկ 11,2 կմ/վ-ից ավելիի դեպքում ընդմիշտ հեռանում է։",
    "Пушка на очень высокой горе стреляет ядром горизонтально. Медленные ядра падают обратно, при скорости около 7,9 км/с ядро «падает» вокруг Земли (спутник), а при скорости больше 11,2 км/с улетает навсегда.",
  ),
  kepler: t("Kepler's laws", "Կեպլերի օրենքները", "Законы Кеплера"),
  keplerHint: t(
    "A planet moves along an ellipse with the Sun at one focus. In equal times the line to the Sun sweeps equal areas, so the planet is fastest near the Sun.",
    "Մոլորակը շարժվում է էլիպսով, որի կիզակետերից մեկում Արեգակն է։ Հավասար ժամանակներում Արեգակին միացնող հատվածը գծում է հավասար մակերեսներ, ուստի մոլորակն ամենաարագն է Արեգակի մոտ։",
    "Планета движется по эллипсу, в одном из фокусов которого Солнце. За равные промежутки времени отрезок до Солнца заметает равные площади, поэтому у Солнца планета движется быстрее всего.",
  ),
  gravity: t("Experiment: the law of universal gravitation", "Փորձ․ տիեզերական ձգողության օրենքը", "Опыт: закон всемирного тяготения"),
  gravityHint: t(
    "Change the masses and the distance. Doubling one mass doubles the force; doubling the distance makes the force four times smaller.",
    "Փոխի՛ր զանգվածները և հեռավորությունը։ Զանգվածներից մեկը կրկնապատկելիս ուժը կրկնապատկվում է, իսկ հեռավորությունը կրկնապատկելիս ուժը փոքրանում է չորս անգամ։",
    "Меняй массы и расстояние. Если удвоить одну массу, сила удвоится; если удвоить расстояние, сила уменьшится в четыре раза.",
  ),
  speed: t("Launch speed", "Արձակման արագություն", "Скорость выстрела"),
  fell: t("The ball fell back to the Earth.", "Գնդակն ընկավ Երկրի վրա։", "Ядро упало на Землю."),
  circle: t("A circular orbit: the first cosmic speed.", "Շրջանային ուղեծիր․ առաջին տիեզերական արագություն։", "Круговая орбита: первая космическая скорость."),
  ellipse: t("An elliptical orbit: the ball comes back to the mountain.", "Էլիպսաձև ուղեծիր․ գնդակը վերադառնում է լեռան մոտ։", "Эллиптическая орбита: ядро возвращается к горе."),
  escape: t("Escape: faster than the second cosmic speed, the ball leaves the Earth.", "Հեռացում․ երկրորդ տիեզերական արագությունից մեծ արագությամբ գնդակը հեռանում է Երկրից։", "Улетело: быстрее второй космической скорости ядро покидает Землю."),
  height: t("Height", "Բարձրություն", "Высота"),
  ecc: t("Eccentricity e", "Էքսցենտրիսիտետ e", "Эксцентриситет e"),
  areas: t("Show equal areas", "Ցույց տալ հավասար մակերեսները", "Показать равные площади"),
  ratio: t("Fastest / slowest", "Ամենաարագ / ամենադանդաղ", "Самая большая / самая малая скорость"),
  m1: t("Mass m₁", "Զանգված m₁", "Масса m₁"),
  m2: t("Mass m₂", "Զանգված m₂", "Масса m₂"),
  r: t("Distance r", "Հեռավորություն r", "Расстояние r"),
  force: t("Force F", "Ուժ F", "Сила F"),
  same: t("The forces on the two bodies are equal and opposite (Newton's third law).", "Երկու մարմինների վրա ազդող ուժերը հավասար են և հակառակ ուղղված (Նյուտոնի երրորդ օրենք)։", "Силы, действующие на тела, равны и противоположны (третий закон Ньютона)."),
};

const GM = 398600; // km³/s²
const RE = 6371; // km

export default function Orbit({ spec, lang }: SimProps) {
  if (spec.opts.mode === "kepler") return <Kepler spec={spec} lang={lang} />;
  if (spec.opts.mode === "gravity") return <Gravity spec={spec} lang={lang} />;
  return <Cannon spec={spec} lang={lang} />;
}

type Body = { x: number; y: number; vx: number; vy: number; turn: number; done: boolean; path: Array<[number, number]> };

function Cannon({ spec, lang }: SimProps) {
  const [v0, setV0] = useState(Number(spec.opts.v ?? 6));
  const [old, setOld] = useState<Array<{ v: number; path: Array<[number, number]> }>>([]);
  const clock = useClock({ until: 12 });
  const r0 = RE + 100;
  const sc = 44 / RE;
  const cx = 160, cy = 104;
  const b = useStepper<Body>(
    clock.t,
    () => ({ x: 0, y: r0, vx: v0, vy: 0, turn: 0, done: false, path: [[0, r0]] }),
    (p, dt) => {
      if (p.done) return p;
      const h = dt * 1500; // 1 s on screen = 25 minutes
      const r = Math.hypot(p.x, p.y);
      const ax = (-GM * p.x) / r ** 3, ay = (-GM * p.y) / r ** 3;
      const vx = p.vx + ax * h, vy = p.vy + ay * h;
      const x = p.x + vx * h, y = p.y + vy * h;
      const turn = p.turn + (Math.atan2(p.y, p.x) - Math.atan2(y, x) + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
      const nr = Math.hypot(x, y);
      const done = nr < RE || nr > 6 * RE || Math.abs(turn) > 2 * Math.PI;
      const last = p.path[p.path.length - 1];
      const path = Math.hypot(x - last[0], y - last[1]) * sc > 2 ? [...p.path, [x, y] as [number, number]] : p.path;
      return { x, y, vx, vy, turn, done, path };
    },
  );
  const P = (q: [number, number]) => `${(cx + q[0] * sc).toFixed(1)},${(cy - q[1] * sc).toFixed(1)}`;
  const alt = Math.max(0, Math.hypot(b.x, b.y) - RE);
  const kind = v0 < 7.8 ? W.fell : v0 < 8 ? W.circle : v0 < 11.1 ? W.ellipse : W.escape;
  const change = (v: number) => {
    if (clock.t > 0) setOld((o) => [...o.slice(-3), { v: v0, path: b.path }]);
    setV0(v);
    clock.reset();
  };
  return (
    <ArtFrame kind="experiment" title={L(W.cannon, lang)} body={spec.body || L(W.cannonHint, lang)}>
      <Stage w={320} h={240} label={L(W.cannon, lang)} bg="#0f172a">
        {Array.from({ length: 30 }, (_, k) => <circle key={k} cx={(k * 71) % 320} cy={(k * 43) % 240} r="0.8" fill="#cbd5e1" />)}
        <circle cx={cx} cy={cy} r="44" fill="#2563eb" />
        <path d={`M ${cx - 30} ${cy - 30} q 10 -8 22 -2 q 8 10 -4 18 q -14 2 -18 -16 Z M ${cx + 6} ${cy + 8} q 16 -6 24 6 q -6 18 -20 12 Z`} fill="#22c55e" opacity="0.8" />
        <path d={`M ${cx - 6} ${cy - 43} L ${cx} ${cy - 52} L ${cx + 6} ${cy - 43} Z`} fill="#a16207" />
        {old.map((o, k) => <polyline key={k} points={o.path.map(P).join(" ")} fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />)}
        <polyline points={b.path.map(P).join(" ")} fill="none" stroke="#facc15" strokeWidth="2" />
        <circle cx={cx + b.x * sc} cy={cy - b.y * sc} r="3.5" fill="#facc15" />
      </Stage>
      <Readouts items={[[L(W.speed, lang), `${fmt(v0, 1, lang)} ${un("kms", lang)}`, "#facc15"], [L(W.height, lang), `${fmt(alt, 0, lang)} ${un("km", lang)}`]]} />
      {b.done || clock.t >= 12 ? <Note tone={v0 < 7.8 ? "bad" : "good"}>{L(kind, lang)}</Note> : null}
      <Controls>
        <Slider label={L(W.speed, lang)} value={v0} min={2} max={12} step={0.1} unit={un("kms", lang)} lang={lang} onChange={change} />
      </Controls>
      <div className="art-chips">
        {[4, 6, 7.9, 9.5, 11.2].map((v) => <button key={v} type="button" className="art-chip" onClick={() => change(v)}>{fmt(v, 1, lang)} {un("kms", lang)}</button>)}
      </div>
      <PlayBar clock={clock} lang={lang} onReset={() => setOld([])} />
    </ArtFrame>
  );
}

function solveE(M: number, e: number) {
  let E = M;
  for (let k = 0; k < 8; k++) E -= (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
  return E;
}

function Kepler({ spec, lang }: SimProps) {
  const [e, setE] = useState(Number(spec.opts.e ?? 0.5));
  const [areas, setAreas] = useState(true);
  const clock = useClock({ autoplay: true });
  const T = 8;
  const a = 120, bb = a * Math.sqrt(1 - e * e);
  const c = a * e;
  const ox = 160, oy = 115;
  // perihelion (E = 0) is on the right, so the Sun sits at the right focus
  const sun = { x: ox + c, y: oy };
  const P = (s: number) => {
    const E = solveE((2 * Math.PI * (s % T)) / T, e);
    return { x: ox + a * Math.cos(E), y: oy - bb * Math.sin(E) };
  };
  const pl = P(clock.t);
  const sectors = Array.from({ length: 8 }, (_, k) => {
    const pts = Array.from({ length: 12 }, (_, j) => P(((k + j / 11) * T) / 8));
    return `M ${sun.x} ${sun.y} ${pts.map((p) => `L ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ")} Z`;
  });
  return (
    <ArtFrame kind="look" title={L(W.kepler, lang)} body={spec.body || L(W.keplerHint, lang)}>
      <Stage w={320} h={230} label={L(W.kepler, lang)} bg="#0f172a">
        <ellipse cx={ox} cy={oy} rx={a} ry={bb} fill="none" stroke="#475569" />
        {areas ? sectors.map((d, k) => (k % 2 ? null : <path key={k} d={d} fill="#38bdf8" opacity="0.4" />)) : null}
        <circle cx={sun.x} cy={sun.y} r="9" fill="#facc15" />
        <circle cx={pl.x} cy={pl.y} r="6" fill="#22c55e" />
        <line x1={sun.x} y1={sun.y} x2={pl.x} y2={pl.y} stroke="#e2e8f0" strokeWidth="1" />
      </Stage>
      <Readouts items={[[L(W.ratio, lang), fmt((1 + e) / (1 - e), 2, lang), "#22c55e"], ["e", fmt(e, 2, lang)]]} />
      <Controls>
        <Slider label={L(W.ecc, lang)} value={e} min={0} max={0.8} step={0.05} digits={2} lang={lang} onChange={setE} />
      </Controls>
      <div className="art-chips"><Toggle on={areas} label={L(W.areas, lang)} onChange={setAreas} /></div>
      <PlayBar clock={clock} lang={lang} />
    </ArtFrame>
  );
}

function Gravity({ spec, lang }: SimProps) {
  const [m1, setM1] = useState(Number(spec.opts.m1 ?? 6));
  const [m2, setM2] = useState(Number(spec.opts.m2 ?? 2));
  const [r, setR] = useState(Number(spec.opts.r ?? 4));
  // masses in 10²⁴ kg, distance in 10⁸ m: F = 6.67·m₁m₂/r² × 10²¹ N
  const F = (6.67 * m1 * m2) / (r * r);
  const x1 = 160 - r * 16, x2 = 160 + r * 16;
  const rad = (m: number) => 8 + Math.sqrt(m) * 5;
  const len = Math.min(70, 8 + F * 2.4);
  return (
    <ArtFrame kind="experiment" title={L(W.gravity, lang)} body={spec.body || L(W.gravityHint, lang)}>
      <Stage w={320} h={150} label={L(W.gravity, lang)} bg="#0f172a">
        <circle cx={x1} cy="70" r={rad(m1)} fill="#38bdf8" />
        <circle cx={x2} cy="70" r={rad(m2)} fill="#f59e0b" />
        <Arrow x1={x1} y1={70} x2={x1 + len} y2={70} color="#e11d48" />
        <Arrow x1={x2} y1={70} x2={x2 - len} y2={70} color="#e11d48" />
        <line x1={x1} x2={x2} y1="124" y2="124" stroke="#94a3b8" />
        <text x="160" y="140" textAnchor="middle" className="sim-tag" fill="#e2e8f0">r = {fmt(r, 1, lang)}·10⁸ {un("m", lang)}</text>
        <text x="160" y="20" textAnchor="middle" className="sim-tag" fill="#e2e8f0">F = G·m₁·m₂ / r²</text>
      </Stage>
      <Readouts items={[[L(W.force, lang), `${fmt(F, 2, lang)}·10²¹ ${un("N", lang)}`, "#e11d48"]]} />
      <Note>{L(W.same, lang)}</Note>
      <Controls>
        <Slider label={L(W.m1, lang)} value={m1} min={1} max={10} step={1} unit={`·10²⁴ ${un("kg", lang)}`} lang={lang} onChange={setM1} />
        <Slider label={L(W.m2, lang)} value={m2} min={1} max={10} step={1} unit={`·10²⁴ ${un("kg", lang)}`} lang={lang} onChange={setM2} />
        <Slider label={L(W.r, lang)} value={r} min={2} max={9} step={0.5} unit={`·10⁸ ${un("m", lang)}`} lang={lang} onChange={setR} />
      </Controls>
    </ArtFrame>
  );
}
