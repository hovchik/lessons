"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Graph, Note, PlayBar, Readouts, Slider, Stage, Toggle, fmt, useClock, useLoop, useStepper } from "../kit";
import { L, t, un } from "../labels";

const W = {
  rate: t("Experiment: what speeds up a reaction?", "Փորձ․ ինչն է արագացնում ռեակցիան", "Опыт: что ускоряет реакцию?"),
  rateHint: t(
    "Red and blue molecules react only when they hit each other hard enough (with more than the activation energy). Warm them up, crowd them together or add a catalyst and compare the graphs.",
    "Կարմիր և կապույտ մոլեկուլները փոխազդում են միայն այն դեպքում, երբ բավական ուժեղ են բախվում (ակտիվացման էներգիայից ավելի)։ Տաքացրո՛ւ, ավելացրո՛ւ կոնցենտրացիան կամ ավելացրո՛ւ կատալիզատոր և համեմատի՛ր գրաֆիկները։",
    "Красные и синие молекулы реагируют, только если сталкиваются достаточно сильно (с энергией больше энергии активации). Нагрей их, увеличь концентрацию или добавь катализатор и сравни графики.",
  ),
  temp: t("Temperature", "Ջերմաստիճան", "Температура"),
  conc: t("Concentration (molecules)", "Կոնցենտրացիա (մոլեկուլներ)", "Концентрация (молекулы)"),
  cat: t("Catalyst", "Կատալիզատոր", "Катализатор"),
  made: t("product", "արգասիք", "продукт"),
  left: t("Reactants left", "Մնացած ելանյութեր", "Осталось реагентов"),
  formed: t("Product formed", "Առաջացած արգասիք", "Образовалось продукта"),
  hits: t("Collisions", "Բախումներ", "Столкновения"),
  useful: t("Successful", "Արդյունավետ", "Успешные"),
  catNote: t("The catalyst lowers the energy needed, so more collisions succeed. It is not used up.", "Կատալիզատորը նվազեցնում է անհրաժեշտ էներգիան, ուստի ավելի շատ բախումներ են արդյունավետ լինում։ Այն չի ծախսվում։", "Катализатор снижает нужную энергию, поэтому больше столкновений успешны. Сам он не расходуется."),
  eq: t("Experiment: chemical equilibrium", "Փորձ․ քիմիական հավասարակշռություն", "Опыт: химическое равновесие"),
  eqHint: t(
    "In a closed syringe colourless N₂O₄ and brown NO₂ turn into each other: N₂O₄ ⇌ 2NO₂, the forward reaction absorbs heat. Change the conditions and see which way the equilibrium shifts.",
    "Փակ ներարկիչում անգույն N₂O₄-ը և գորշ NO₂-ը փոխարկվում են միմյանց․ N₂O₄ ⇌ 2NO₂, ուղիղ ռեակցիան կլանում է ջերմություն։ Փոխի՛ր պայմանները և տե՛ս, թե որ կողմ է շեղվում հավասարակշռությունը։",
    "В закрытом шприце бесцветный N₂O₄ и бурый NO₂ превращаются друг в друга: N₂O₄ ⇌ 2NO₂, прямая реакция идёт с поглощением тепла. Меняй условия и смотри, куда смещается равновесие.",
  ),
  press: t("Pressure", "Ճնշում", "Давление"),
  heat: t("Heating favours the reaction that absorbs heat: more brown NO₂.", "Տաքացումը նպաստում է ջերմություն կլանող ռեակցիային․ ավելի շատ գորշ NO₂։", "Нагревание смещает равновесие в сторону реакции с поглощением тепла: больше бурого NO₂."),
  cool: t("Cooling favours the reaction that releases heat: more colourless N₂O₄.", "Սառեցումը նպաստում է ջերմություն անջատող ռեակցիային․ ավելի շատ անգույն N₂O₄։", "Охлаждение смещает равновесие в сторону реакции с выделением тепла: больше бесцветного N₂O₄."),
  squeeze: t("Squeezing favours the side with fewer gas molecules: N₂O₄ (1 molecule instead of 2).", "Սեղմելը նպաստում է այն կողմին, որտեղ գազի մոլեկուլներն ավելի քիչ են․ N₂O₄ (1 մոլեկուլ՝ 2-ի փոխարեն)։", "Сжатие смещает равновесие в сторону меньшего числа молекул газа: N₂O₄ (1 молекула вместо 2)."),
  expand: t("Lowering the pressure favours the side with more gas molecules: NO₂.", "Ճնշումն իջեցնելը նպաստում է այն կողմին, որտեղ գազի մոլեկուլներն ավելի շատ են․ NO₂։", "Понижение давления смещает равновесие в сторону большего числа молекул газа: NO₂."),
  share: t("NO₂ share", "NO₂-ի բաժին", "Доля NO₂"),
};

/* ---------- collision theory ---------- */

type P = { x: number; y: number; vx: number; vy: number; k: 0 | 1 | 2; alive: boolean };
type S = { ps: P[]; hits: number; good: number; hist: Array<[number, number]>; time: number; next: number };

const BOX = { w: 300, h: 150 };

function rng(seed: number) {
  let s = seed;
  return () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
}

function init(n: number, temp: number): S {
  const r = rng(7 + n);
  const ps: P[] = [];
  for (let i = 0; i < n * 2; i++) {
    const a = r() * Math.PI * 2;
    const sp = (30 + r() * 50) * Math.sqrt(temp / 300);
    ps.push({ x: 10 + r() * (BOX.w - 20), y: 10 + r() * (BOX.h - 20), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, k: i % 2 === 0 ? 0 : 1, alive: true });
  }
  return { ps, hits: 0, good: 0, hist: [[0, 0]], time: 0, next: 0.5 };
}

function step(s: S, dt: number, ea: number): S {
  const ps = s.ps;
  for (const p of ps) {
    if (!p.alive) continue;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    if (p.x < 6 || p.x > BOX.w - 6) { p.vx *= -1; p.x = Math.min(BOX.w - 6, Math.max(6, p.x)); }
    if (p.y < 6 || p.y > BOX.h - 6) { p.vy *= -1; p.y = Math.min(BOX.h - 6, Math.max(6, p.y)); }
  }
  for (let i = 0; i < ps.length; i++) {
    const a = ps[i];
    if (!a.alive || a.k === 2) continue;
    for (let j = i + 1; j < ps.length; j++) {
      const b = ps[j];
      if (!b.alive || b.k === 2 || a.k === b.k) continue;
      const dx = b.x - a.x, dy = b.y - a.y;
      const d2 = dx * dx + dy * dy;
      if (d2 > 100) continue;
      const rv = (a.vx - b.vx) * (dx) + (a.vy - b.vy) * (dy);
      if (rv <= 0) continue;
      s.hits++;
      const e = Math.hypot(a.vx - b.vx, a.vy - b.vy);
      if (e > ea) {
        s.good++;
        a.k = 2;
        a.vx = (a.vx + b.vx) / 2;
        a.vy = (a.vy + b.vy) / 2;
        b.alive = false;
      } else {
        const d = Math.sqrt(d2) || 1, nx = dx / d, ny = dy / d;
        const pa = a.vx * nx + a.vy * ny, pb = b.vx * nx + b.vy * ny;
        a.vx += (pb - pa) * nx; a.vy += (pb - pa) * ny;
        b.vx += (pa - pb) * nx; b.vy += (pa - pb) * ny;
      }
      break;
    }
  }
  s.time += dt;
  if (s.time >= s.next) {
    s.hist = [...s.hist, [Number(s.time.toFixed(1)), ps.filter((p) => p.alive && p.k === 2).length]];
    s.next += 0.5;
  }
  return s;
}

export default function Rate({ spec, lang }: SimProps) {
  if (spec.opts.mode === "equilibrium") return <Equilibrium spec={spec} lang={lang} />;
  return <Collisions spec={spec} lang={lang} />;
}

function Collisions({ spec, lang }: SimProps) {
  const [temp, setTemp] = useState(300);
  const [n, setN] = useState(12);
  const [cat, setCat] = useState(false);
  const [runs, setRuns] = useState<Array<{ pts: Array<[number, number]>; label: string }>>([]);
  const clock = useClock({ until: 20 });
  const ea = cat ? 65 : 100;
  const key = `${temp}-${n}-${cat}`;
  const s = useStepper(clock.t, () => init(n, temp), (st, dt) => step(st, dt, ea), 0.01);
  const made = s.ps.filter((p) => p.alive && p.k === 2).length;
  const change = (f: () => void) => {
    if (s.hist.length > 2) setRuns((r) => [...r.slice(-1), { pts: s.hist, label: key }]);
    f();
    clock.reset();
  };
  return (
    <ArtFrame kind="experiment" title={L(W.rate, lang)} body={spec.body || L(W.rateHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={BOX.w} h={BOX.h} label={L(W.rate, lang)} bg={cat ? "#f0fdf4" : `hsl(${220 - (temp - 250) * 0.5} 80% 97%)`}>
          {cat ? <rect x="0" y={BOX.h - 8} width={BOX.w} height="8" fill="#86efac" /> : null}
          {s.ps.filter((p) => p.alive).map((p, i) =>
            p.k === 2 ? (
              <g key={i}>
                <circle cx={p.x - 4} cy={p.y} r="5" fill="#ef4444" />
                <circle cx={p.x + 4} cy={p.y} r="5" fill="#3b82f6" />
              </g>
            ) : <circle key={i} cx={p.x} cy={p.y} r="5" fill={p.k === 0 ? "#ef4444" : "#3b82f6"} />,
          )}
        </Stage>
        <div>
          <Graph x={[0, 20]} y={[0, 20]} series={[...runs.map((r, i) => ({ pts: r.pts, color: "#cbd5e1", dash: i ? undefined : "4 3" })), { pts: s.hist, color: "#7c3aed" }]} xLabel={un("s", lang)} yLabel={L(W.made, lang)} />
          <Readouts items={[[L(W.formed, lang), String(made), "#7c3aed"], [L(W.hits, lang), String(s.hits)], [L(W.useful, lang), String(s.good)]]} />
        </div>
      </div>
      <PlayBar clock={clock} lang={lang} />
      <Slider label={L(W.temp, lang)} value={temp} min={250} max={450} step={25} unit={un("K", lang)} lang={lang} onChange={(v) => change(() => setTemp(v))} />
      <Slider label={L(W.conc, lang)} value={n} min={4} max={20} step={2} digits={0} lang={lang} onChange={(v) => change(() => setN(v))} />
      <Toggle on={cat} label={L(W.cat, lang)} onChange={(v) => change(() => setCat(v))} />
      {cat ? <Note>{L(W.catNote, lang)}</Note> : null}
    </ArtFrame>
  );
}

/* ---------- Le Chatelier: N2O4 ⇌ 2NO2 ---------- */

export function alphaNO2(T: number, P: number) {
  const kp = 0.15 * Math.exp((-57000 / 8.314) * (1 / T - 1 / 298));
  return Math.sqrt(kp / (kp + 4 * P));
}

function Equilibrium({ spec, lang }: SimProps) {
  const [T, setT] = useState(298);
  const [P, setP] = useState(1);
  const [last, setLast] = useState<"heat" | "cool" | "squeeze" | "expand" | null>(null);
  const p = useLoop(5);
  const a = alphaNO2(T, P);
  const N0 = 10;
  const no2 = Math.round(2 * a * N0), n2o4 = N0 - Math.round(a * N0);
  const len = Math.round(190 / Math.sqrt(P));
  const conc = ((2 * a) / (1 + a)) * (P / T) * 298;
  const mol = Array.from({ length: n2o4 + no2 }, (_, i) => {
    const big = i < n2o4;
    const cols = 8;
    const x = 34 + ((i % cols) + 0.5) * ((len - 14) / cols) + Math.sin(p * 6.283 + i * 1.9) * 3;
    const y = 52 + Math.floor(i / cols) * 22 + Math.cos(p * 6.283 + i * 2.7) * 3;
    return { big, x, y };
  });
  return (
    <ArtFrame kind="experiment" title={L(W.eq, lang)} body={spec.body || L(W.eqHint, lang)}>
      <Stage w={320} h={130} label={L(W.eq, lang)}>
        <rect x="26" y="36" width={len} height="76" rx="6" fill={`rgba(180, 83, 9, ${Math.min(0.85, conc * 0.9).toFixed(2)})`} stroke="#64748b" strokeWidth="2" style={{ transition: "all 600ms ease" }} />
        <rect x={26 + len} y="30" width="10" height="88" rx="3" fill="#475569" style={{ transition: "x 600ms ease" }} />
        <rect x={36 + len} y="68" width={280 - len} height="12" fill="#94a3b8" />
        <rect x="8" y="64" width="18" height="20" rx="3" fill="#94a3b8" />
        {mol.map((m, i) => m.big ? (
          <g key={i}><circle cx={m.x - 3.5} cy={m.y} r="4.5" fill="#f8fafc" stroke="#64748b" /><circle cx={m.x + 3.5} cy={m.y} r="4.5" fill="#f8fafc" stroke="#64748b" /></g>
        ) : <circle key={i} cx={m.x} cy={m.y} r="4.5" fill="#92400e" stroke="#fff" />)}
        <text x="30" y="26" className="sim-small">N₂O₄ ⇌ 2NO₂</text>
      </Stage>
      <Slider label={L(W.temp, lang)} value={T} min={250} max={400} step={10} unit={un("K", lang)} lang={lang} onChange={(v) => { setLast(v > T ? "heat" : "cool"); setT(v); }} />
      <Slider label={L(W.press, lang)} value={P} min={0.5} max={4} step={0.5} unit={un("atm", lang)} lang={lang} onChange={(v) => { setLast(v > P ? "squeeze" : "expand"); setP(v); }} />
      <Readouts items={[["N₂O₄", String(n2o4)], ["NO₂", String(no2), "#92400e"], [L(W.share, lang), `${fmt(((2 * a) / (1 + a)) * 100, 0, lang)}%`]]} />
      {last ? <Note>{L(W[last], lang)}</Note> : null}
    </ArtFrame>
  );
}
