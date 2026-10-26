"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Arrow, Choice, Controls, fmt, Graph, Note, PlayBar, Readouts, Slider, Stage, useClock } from "../kit";
import { L, t, un } from "../labels";

const W = {
  carts: t("Experiment: collisions of two carts", "Փորձ․ երկու սայլակի բախումը", "Опыт: столкновение двух тележек"),
  cartsHint: t(
    "Set the masses and speeds and let the carts collide. The momentum of each cart changes, but the total momentum p₁ + p₂ stays the same.",
    "Ընտրի՛ր զանգվածները և արագությունները և թող սայլակները բախվեն։ Ամեն սայլակի իմպուլսը փոխվում է, բայց լրիվ իմպուլսը՝ p₁ + p₂, մնում է նույնը։",
    "Задай массы и скорости и дай тележкам столкнуться. Импульс каждой тележки меняется, но суммарный импульс p₁ + p₂ остаётся прежним.",
  ),
  rocket: t("Experiment: how a rocket speeds up", "Փորձ․ ինչպես է հրթիռն արագանում", "Опыт: как разгоняется ракета"),
  rocketHint: t(
    "The rocket throws hot gas backwards; by the law of conservation of momentum the rocket moves forwards. Faster gas and more fuel give a higher final speed.",
    "Հրթիռը տաք գազը նետում է ետ․ իմպուլսի պահպանման օրենքի համաձայն՝ հրթիռը շարժվում է առաջ։ Ավելի արագ գազը և ավելի շատ վառելիքը տալիս են ավելի մեծ վերջնական արագություն։",
    "Ракета отбрасывает горячий газ назад; по закону сохранения импульса ракета движется вперёд. Чем быстрее газ и больше топлива, тем выше конечная скорость.",
  ),
  elastic: t("Springy bumpers", "Զսպանակավոր բամպերներ", "Пружинные бамперы"),
  sticky: t("Sticky (they join)", "Կպչուն (միանում են)", "Липкие (сцепляются)"),
  m1: t("Mass of cart 1", "1-ին սայլակի զանգվածը", "Масса тележки 1"),
  m2: t("Mass of cart 2", "2-րդ սայլակի զանգվածը", "Масса тележки 2"),
  v1: t("Speed of cart 1", "1-ին սայլակի արագությունը", "Скорость тележки 1"),
  v2: t("Speed of cart 2", "2-րդ սայլակի արագությունը", "Скорость тележки 2"),
  total: t("Total p", "Լրիվ p", "Суммарный p"),
  before: t("before", "առաջ", "до"),
  after: t("after", "հետո", "после"),
  keLost: t("Part of the kinetic energy turned into heat and the dent in the bumpers, but the momentum is conserved.", "Կինետիկ էներգիայի մի մասը դարձավ ջերմություն և բամպերների ճմռթվածք, բայց իմպուլսը պահպանվեց։", "Часть кинетической энергии ушла в тепло и вмятину на бамперах, а импульс сохранился."),
  keKept: t("With springy bumpers both momentum and kinetic energy are conserved.", "Զսպանակավոր բամպերների դեպքում պահպանվում են և՛ իմպուլսը, և՛ կինետիկ էներգիան։", "С пружинными бамперами сохраняются и импульс, и кинетическая энергия."),
  u: t("Gas speed", "Գազի արագություն", "Скорость газа"),
  fuel: t("Fuel share of the start mass", "Վառելիքի բաժինը սկզբնական զանգվածում", "Доля топлива в стартовой массе"),
  mass: t("Rocket mass", "Հրթիռի զանգված", "Масса ракеты"),
  speed: t("Rocket speed", "Հրթիռի արագություն", "Скорость ракеты"),
  out: t("Fuel is used up. Final speed v = u·ln(m₀/m).", "Վառելիքը վերջացավ։ Վերջնական արագություն՝ v = u·ln(m₀/m)։", "Топливо кончилось. Конечная скорость v = u·ln(m₀/m)."),
  ke: t("Kinetic energy", "Կինետիկ էներգիա", "Кинетическая энергия"),
};

const WALL = 12;

export default function Collide({ spec, lang }: SimProps) {
  if (spec.opts.mode === "rocket") return <Rocket spec={spec} lang={lang} />;
  return <Carts spec={spec} lang={lang} />;
}

function Carts({ spec, lang }: SimProps) {
  const [m1, setM1] = useState(Number(spec.opts.m1 ?? 2));
  const [m2, setM2] = useState(Number(spec.opts.m2 ?? 1));
  const [u1, setU1] = useState(Number(spec.opts.v1 ?? 2));
  const [u2, setU2] = useState(Number(spec.opts.v2 ?? -1));
  const [kind, setKind] = useState<"elastic" | "sticky">(spec.opts.type === "sticky" ? "sticky" : "elastic");
  const clock = useClock({ until: 6 });
  const wid = 1.2;
  const a0 = 1.5, b0 = 7;
  // time when the front of cart 1 meets the back of cart 2
  const rel = u1 - u2;
  const tc = rel > 0 ? (b0 - a0 - wid) / rel : Infinity;
  let w1 = u1, w2 = u2;
  if (kind === "sticky") w1 = w2 = (m1 * u1 + m2 * u2) / (m1 + m2);
  else {
    w1 = ((m1 - m2) * u1 + 2 * m2 * u2) / (m1 + m2);
    w2 = ((m2 - m1) * u2 + 2 * m1 * u1) / (m1 + m2);
  }
  const s = clock.t;
  const hit = s >= tc;
  const xa = hit ? a0 + u1 * tc + w1 * (s - tc) : a0 + u1 * s;
  const xb = hit ? b0 + u2 * tc + w2 * (s - tc) : b0 + u2 * s;
  const v1 = hit ? w1 : u1, v2 = hit ? w2 : u2;
  const X = (m: number) => 10 + m * 25;
  const clampX = (m: number) => Math.max(0, Math.min(WALL - wid, m));
  const p1 = m1 * v1, p2 = m2 * v2;
  const keB = (m1 * u1 * u1 + m2 * u2 * u2) / 2;
  const keA = (m1 * w1 * w1 + m2 * w2 * w2) / 2;
  const P = 12; // px per kg·m/s
  const bar = (y: number, from: number, p: number, c: string, label: string) => (
    <g>
      <rect x={Math.min(from, from + p * P)} y={y} width={Math.abs(p * P)} height="10" rx="3" fill={c} />
      <text x="6" y={y + 9} className="sim-small">{label}</text>
    </g>
  );
  const cart = (x: number, m: number, c: string, n: string) => (
    <g transform={`translate(${X(clampX(x))} 0)`}>
      <rect x="0" y={66 - 10 - m * 4} width={wid * 25} height={10 + m * 4} rx="4" fill={c} />
      <circle cx="7" cy="68" r="4" fill="#1e1b4b" />
      <circle cx={wid * 25 - 7} cy="68" r="4" fill="#1e1b4b" />
      <text x={wid * 12.5} y={66 - 3} textAnchor="middle" className="sim-small" fill="#fff">{n}</text>
    </g>
  );
  const sum = p1 + p2;
  return (
    <ArtFrame kind="experiment" title={L(W.carts, lang)} body={spec.body || L(W.cartsHint, lang)}>
      <Stage w={320} h={150} label={L(W.carts, lang)}>
        <rect x="0" y="72" width="320" height="5" fill="#94a3b8" />
        <rect x="0" y="40" width="6" height="37" fill="#64748b" />
        <rect x="314" y="40" width="6" height="37" fill="#64748b" />
        {cart(xa, m1, "#4f46e5", "1")}
        {cart(xb, m2, "#d97706", "2")}
        <Arrow x1={X(clampX(xa)) + 15} y1={22} x2={X(clampX(xa)) + 15 + v1 * 14} y2={22} color="#4f46e5" label={`v₁`} />
        <Arrow x1={X(clampX(xb)) + 15} y1={10} x2={X(clampX(xb)) + 15 + v2 * 14} y2={10} color="#d97706" label={`v₂`} />
        <line x1="160" x2="160" y1="84" y2="146" stroke="#cbd5e1" />
        {bar(88, 160, p1, "#4f46e5", "p₁")}
        {bar(106, 160, p2, "#d97706", "p₂")}
        {bar(128, 160, sum, "#1e1b4b", "p₁+p₂")}
      </Stage>
      <Readouts
        items={[
          ["p₁", `${fmt(p1, 1, lang)} ${un("kgms", lang)}`, "#4f46e5"],
          ["p₂", `${fmt(p2, 1, lang)} ${un("kgms", lang)}`, "#d97706"],
          [L(W.total, lang), `${fmt(sum, 1, lang)} ${un("kgms", lang)}`, "#1e1b4b"],
          [`${L(W.ke, lang)} (${L(hit ? W.after : W.before, lang)})`, `${fmt(hit ? keA : keB, 1, lang)} ${un("J", lang)}`],
        ]}
      />
      {hit ? <Note tone="good">{L(kind === "sticky" ? W.keLost : W.keKept, lang)}</Note> : null}
      <Choice value={kind} options={[["elastic", L(W.elastic, lang)], ["sticky", L(W.sticky, lang)]]} onChange={(k) => { setKind(k); clock.reset(); }} />
      <Controls>
        <Slider label={L(W.m1, lang)} value={m1} min={1} max={5} step={0.5} unit={un("kg", lang)} lang={lang} onChange={(n) => { setM1(n); clock.reset(); }} />
        <Slider label={L(W.m2, lang)} value={m2} min={1} max={5} step={0.5} unit={un("kg", lang)} lang={lang} onChange={(n) => { setM2(n); clock.reset(); }} />
        <Slider label={L(W.v1, lang)} value={u1} min={0} max={4} step={0.5} unit={un("ms", lang)} lang={lang} onChange={(n) => { setU1(n); clock.reset(); }} />
        <Slider label={L(W.v2, lang)} value={u2} min={-4} max={2} step={0.5} unit={un("ms", lang)} lang={lang} onChange={(n) => { setU2(n); clock.reset(); }} />
      </Controls>
      <PlayBar clock={clock} lang={lang} />
    </ArtFrame>
  );
}

function Rocket({ spec, lang }: SimProps) {
  const [u, setU] = useState(Number(spec.opts.u ?? 2));
  const [share, setShare] = useState(Number(spec.opts.fuel ?? 80));
  const burn = 8;
  const clock = useClock({ until: burn + 2 });
  const m0 = 100;
  const mf = m0 * (1 - share / 100);
  const mAt = (s: number) => m0 - ((m0 - mf) * Math.min(s, burn)) / burn;
  const vAt = (s: number) => u * Math.log(m0 / mAt(s));
  const s = clock.t;
  const v = vAt(s);
  const firing = s > 0 && s < burn;
  const pts = Array.from({ length: 41 }, (_, k) => { const q = (k * (burn + 2)) / 40; return [q, vAt(q)] as [number, number]; }).filter(([q]) => q <= s);
  const scroll = (Math.log(1 + s) * 60 + v * s * 4) % 40;
  const vmax = 4 * Math.log(1 / 0.1);
  return (
    <ArtFrame kind="experiment" title={L(W.rocket, lang)} body={spec.body || L(W.rocketHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={160} h={200} label={L(W.rocket, lang)} bg="#0f172a">
          {Array.from({ length: 24 }, (_, k) => (
            <circle key={k} cx={(k * 53) % 160} cy={((k * 37) % 200 + scroll * (1 + (k % 3))) % 200} r={k % 4 === 0 ? 1.4 : 0.8} fill="#e2e8f0" />
          ))}
          <g transform="translate(80 100)">
            <path d="M0 -50 C 12 -36 14 -14 14 20 L -14 20 C -14 -14 -12 -36 0 -50 Z" fill="#e2e8f0" stroke="#94a3b8" />
            <circle cx="0" cy="-18" r="6" fill="#38bdf8" stroke="#0369a1" strokeWidth="2" />
            <path d="M-14 6 L-24 28 L-14 22 Z M14 6 L24 28 L14 22 Z" fill="#e11d48" />
            <rect x="-8" y="-4" width="16" height="22" rx="3" fill="#1e293b" />
            <rect x="-6" y={16 - 18 * ((mAt(s) - mf) / (m0 - mf || 1))} width="12" height={18 * ((mAt(s) - mf) / (m0 - mf || 1))} rx="2" fill="#f59e0b" />
            {firing ? (
              <g className="sim-pulse">
                <path d={`M-9 20 Q 0 ${44 + u * 10} 9 20 Z`} fill="#f97316" />
                <path d={`M-5 20 Q 0 ${34 + u * 6} 5 20 Z`} fill="#fde047" />
              </g>
            ) : null}
          </g>
          {firing ? <Arrow x1={40} y1={130} x2={40} y2={150 + u * 8} color="#f97316" label="u" /> : null}
          <Arrow x1={128} y1={90} x2={128} y2={90 - Math.min(70, 6 + v * 14)} color="#22c55e" label="v" />
        </Stage>
        <Graph x={[0, burn + 2]} y={[0, Math.ceil(vmax)]} series={[{ pts, color: "#22c55e" }]} xLabel={`t, ${un("s", lang)}`} yLabel={`v, ${un("kms", lang)}`} cursor={s} />
      </div>
      <Readouts
        items={[
          [L(W.mass, lang), `${fmt(mAt(s), 0, lang)} ${un("ton", lang)}`, "#f59e0b"],
          [L(W.speed, lang), `${fmt(v, 2, lang)} ${un("kms", lang)}`, "#22c55e"],
        ]}
      />
      {s >= burn ? <Note tone="good">{L(W.out, lang)}</Note> : null}
      <Controls>
        <Slider label={L(W.u, lang)} value={u} min={1} max={4} step={0.5} unit={un("kms", lang)} lang={lang} onChange={(n) => { setU(n); clock.reset(); }} />
        <Slider label={L(W.fuel, lang)} value={share} min={30} max={90} step={5} unit="%" lang={lang} onChange={(n) => { setShare(n); clock.reset(); }} />
      </Controls>
      <PlayBar clock={clock} lang={lang} />
    </ArtFrame>
  );
}
