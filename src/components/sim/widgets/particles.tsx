"use client";

import { useEffect, useRef, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Choice, Controls, fmt, Note, Readouts, Slider, Stage, Toggle } from "../kit";
import { L, t } from "../labels";

const W = {
  states: t("Experiment: solid, liquid, gas", "Փորձ․ պինդ, հեղուկ, գազ", "Опыт: твёрдое, жидкое, газ"),
  statesHint: t(
    "Heat and cool the water. The molecules are the same in ice, water and steam; only their motion and the gaps between them change.",
    "Տաքացրո՛ւ և սառեցրո՛ւ ջուրը։ Սառույցի, ջրի և գոլորշու մոլեկուլները նույնն են․ փոխվում են միայն նրանց շարժումը և միջմոլեկուլային հեռավորությունները։",
    "Нагревай и охлаждай воду. Молекулы во льду, воде и паре одни и те же: меняются только их движение и расстояния между ними.",
  ),
  diffusion: t("Experiment: diffusion", "Փորձ․ դիֆուզիա", "Опыт: диффузия"),
  diffusionHint: t(
    "Remove the wall between the two gases. Nobody stirs them, yet they mix by themselves, and faster when it is hot.",
    "Հանի՛ր երկու գազերի միջև եղած պատը։ Ոչ ոք չի խառնում, բայց նրանք ինքնուրույն խառնվում են, իսկ տաք լինելիս՝ ավելի արագ։",
    "Убери перегородку между газами. Их никто не перемешивает, а они смешиваются сами, и быстрее, когда тепло.",
  ),
  gas: t("Experiment: gas in a cylinder", "Փորձ․ գազը գլանում", "Опыт: газ в цилиндре"),
  gasHint: t(
    "Every hit of a molecule on the wall is a tiny push; millions of them make the pressure. Squeeze the gas or heat it and watch the hits and the pressure.",
    "Մոլեկուլի ամեն հարված պատին փոքր հրում է․ միլիոնավոր հարվածները ստեղծում են ճնշումը։ Սեղմի՛ր կամ տաքացրո՛ւ գազը և հետևի՛ր հարվածներին ու ճնշմանը։",
    "Каждый удар молекулы о стенку — крошечный толчок; миллионы ударов создают давление. Сожми или нагрей газ и следи за ударами и давлением.",
  ),
  brown: t("Experiment: Brownian motion", "Փորձ․ բրոունյան շարժում", "Опыт: броуновское движение"),
  brownHint: t(
    "A grain of pollen in water jumps about by itself: invisible molecules hit it from all sides, never equally. Show the molecules to see why.",
    "Ծաղկափոշու հատիկը ջրում ինքնուրույն ցատկոտում է․ անտեսանելի մոլեկուլները հարվածում են նրան բոլոր կողմերից, երբեք հավասարաչափ։ Ցույց տուր մոլեկուլները՝ տեսնելու համար, թե ինչու։",
    "Пыльца в воде сама скачет: невидимые молекулы бьют её со всех сторон, и никогда поровну. Покажи молекулы, чтобы увидеть почему.",
  ),
  temp: t("Temperature", "Ջերմաստիճան", "Температура"),
  solid: t("Solid: molecules only shake in their places.", "Պինդ․ մոլեկուլները միայն տատանվում են իրենց տեղում։", "Твёрдое: молекулы лишь колеблются на местах."),
  liquid: t("Liquid: molecules are close but slide past each other.", "Հեղուկ․ մոլեկուլները մոտ են, բայց սահում են իրար կողքով։", "Жидкость: молекулы близко, но скользят друг мимо друга."),
  vapour: t("Gas: molecules fly freely and fill the whole vessel.", "Գազ․ մոլեկուլները ազատ թռչում են և լցնում ամբողջ անոթը։", "Газ: молекулы свободно летают и заполняют весь сосуд."),
  wall: t("Wall", "Պատ", "Перегородка"),
  mixed: t("Mixed", "Խառնված", "Перемешано"),
  cold: t("cold", "սառը", "холодно"),
  hot: t("hot", "տաք", "горячо"),
  volume: t("Volume", "Ծավալ", "Объём"),
  hits: t("Hits per second", "Հարվածներ վայրկյանում", "Ударов в секунду"),
  pressure: t("Pressure", "Ճնշում", "Давление"),
  speed: t("Mean speed", "Միջին արագություն", "Средняя скорость"),
  molecules: t("Show the molecules", "Ցույց տալ մոլեկուլները", "Показать молекулы"),
};

type Pt = { x: number; y: number; vx: number; vy: number; c: number; hx?: number; hy?: number };

function rnd(seed: number) {
  let s = seed;
  return () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
}

/** Runs the particle box; `step` moves the particles by dt and returns the number of wall hits. */
function useBox(init: () => Pt[], step: (ps: Pt[], dt: number) => number) {
  const ps = useRef<Pt[] | null>(null);
  if (!ps.current) ps.current = init();
  const fn = useRef(step);
  fn.current = step;
  const hits = useRef<number[]>([]);
  const [, setTick] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let id = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.04, (now - last) / 1000);
      last = now;
      const h = fn.current(ps.current!, reduced ? dt * 0.3 : dt);
      hits.current.push(h);
      if (hits.current.length > 60) hits.current.shift();
      setTick((n) => (n + 1) % 1e6);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);
  const rate = hits.current.length ? (hits.current.reduce((a, b) => a + b, 0) / hits.current.length) * 60 : 0;
  return { ps: ps.current, rate, reset: (p: Pt[]) => { ps.current = p; } };
}

function bounce(p: Pt, x0: number, x1: number, y0: number, y1: number, r: number) {
  let h = 0;
  if (p.x < x0 + r) { p.x = x0 + r; p.vx = Math.abs(p.vx); h++; }
  if (p.x > x1 - r) { p.x = x1 - r; p.vx = -Math.abs(p.vx); h++; }
  if (p.y < y0 + r) { p.y = y0 + r; p.vy = Math.abs(p.vy); h++; }
  if (p.y > y1 - r) { p.y = y1 - r; p.vy = -Math.abs(p.vy); h++; }
  return h;
}

export default function Particles({ spec, lang }: SimProps) {
  const m = spec.opts.mode ?? "states";
  if (m === "diffusion") return <Diffusion spec={spec} lang={lang} />;
  if (m === "gas") return <Gas spec={spec} lang={lang} />;
  if (m === "brownian") return <Brownian spec={spec} lang={lang} />;
  return <States spec={spec} lang={lang} />;
}

function States({ spec, lang }: SimProps) {
  const [T, setT] = useState(20);
  const phase = T < 0 ? "solid" : T < 100 ? "liquid" : "vapour";
  const r = rnd(7);
  const box = { x0: 60, x1: 260, y0: 20, y1: 190 };
  const cols = 7, rows = 5, gap = 15;
  const { ps } = useBox(
    () => Array.from({ length: cols * rows }, (_, i) => {
      const hx = 160 - ((cols - 1) * gap) / 2 + (i % cols) * gap;
      const hy = box.y1 - 10 - Math.floor(i / cols) * gap;
      return { x: hx, y: hy, vx: r() - 0.5, vy: r() - 0.5, c: 0, hx, hy };
    }),
    (pts, dt) => {
      const speed = 30 * Math.sqrt((T + 273) / 273);
      for (const p of pts) {
        if (phase === "solid") {
          const amp = 1 + (T + 40) / 20;
          p.x += (p.hx! - p.x) * 0.3 + (Math.random() - 0.5) * amp;
          p.y += (p.hy! - p.y) * 0.3 + (Math.random() - 0.5) * amp;
          continue;
        }
        const v = phase === "vapour" ? speed * 3 : speed;
        p.vx += (Math.random() - 0.5) * (phase === "liquid" ? 2 : 0.2);
        p.vy += (Math.random() - 0.5) * (phase === "liquid" ? 2 : 0.2) + (phase === "liquid" ? 0.25 : 0);
        const n = Math.hypot(p.vx, p.vy) || 1;
        p.x += (p.vx / n) * v * dt;
        p.y += (p.vy / n) * v * dt;
        const top = phase === "liquid" ? box.y1 - rows * gap - 12 : box.y0;
        bounce(p, box.x0, box.x1, top, box.y1, 6);
      }
      return 0;
    },
  );
  const color = phase === "solid" ? "#60a5fa" : phase === "liquid" ? "#2563eb" : "#93c5fd";
  return (
    <ArtFrame kind="experiment" title={L(W.states, lang)} body={spec.body || L(W.statesHint, lang)}>
      <Stage w={320} h={200} label={L(W.states, lang)}>
        <rect x={box.x0} y={box.y0} width={box.x1 - box.x0} height={box.y1 - box.y0} fill={phase === "solid" ? "#eff6ff" : "#f8fafc"} stroke="#475569" strokeWidth="3" rx="4" />
        {ps.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="6" fill={color} stroke="#1e3a8a" strokeWidth="1" />)}
        <g transform="translate(290 30)">
          <rect x="-5" y="0" width="10" height="140" rx="5" fill="#fff" stroke="#475569" />
          <rect x="-3" y={140 - ((T + 40) / 180) * 140} width="6" height={((T + 40) / 180) * 140} rx="3" fill="#e11d48" />
          <circle cy="146" r="8" fill="#e11d48" />
        </g>
        <text x="20" y="196" className="sim-tag" fill="#e11d48">{fmt(T, 0, lang)} °C</text>
      </Stage>
      <Note>{L(W[phase], lang)}</Note>
      <Controls>
        <Slider label={L(W.temp, lang)} value={T} min={-40} max={140} step={5} unit="°C" digits={0} lang={lang} onChange={setT} />
      </Controls>
    </ArtFrame>
  );
}

function Diffusion({ spec, lang }: SimProps) {
  const [wall, setWall] = useState(true);
  const [hot, setHot] = useState(false);
  const r = rnd(11);
  const box = { x0: 20, x1: 300, y0: 20, y1: 170 };
  const { ps } = useBox(
    () => Array.from({ length: 60 }, (_, i) => {
      const left = i < 30;
      return { x: left ? 30 + r() * 120 : 170 + r() * 120, y: 30 + r() * 130, vx: r() - 0.5, vy: r() - 0.5, c: left ? 0 : 1 };
    }),
    (pts, dt) => {
      const v = hot ? 90 : 35;
      for (const p of pts) {
        const n = Math.hypot(p.vx, p.vy) || 1;
        p.x += (p.vx / n) * v * dt;
        p.y += (p.vy / n) * v * dt;
        if (Math.random() < 0.02) { p.vx = Math.random() - 0.5; p.vy = Math.random() - 0.5; }
        if (wall) {
          if (p.c === 0) bounce(p, box.x0, 158, box.y0, box.y1, 5);
          else bounce(p, 162, box.x1, box.y0, box.y1, 5);
        } else bounce(p, box.x0, box.x1, box.y0, box.y1, 5);
      }
      return 0;
    },
  );
  const leftMix = ps.filter((p) => p.c === 1 && p.x < 160).length + ps.filter((p) => p.c === 0 && p.x > 160).length;
  const mixed = Math.min(100, Math.round((leftMix / 30) * 100));
  return (
    <ArtFrame kind="experiment" title={L(W.diffusion, lang)} body={spec.body || L(W.diffusionHint, lang)}>
      <Stage w={320} h={190} label={L(W.diffusion, lang)}>
        <rect x={box.x0} y={box.y0} width={box.x1 - box.x0} height={box.y1 - box.y0} fill="#f8fafc" stroke="#475569" strokeWidth="3" rx="4" />
        {wall ? <rect x="158" y={box.y0} width="4" height={box.y1 - box.y0} fill="#475569" /> : null}
        {ps.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="5" fill={p.c ? "#f59e0b" : "#7c3aed"} />)}
        <text x="20" y="186" className="sim-tag" fill="#1e1b4b">{L(W.mixed, lang)}: {mixed}%</text>
      </Stage>
      <div className="art-chips">
        <Toggle on={wall} label={L(W.wall, lang)} onChange={setWall} />
        <Choice value={hot ? "hot" : "cold"} options={[["cold", `❄ ${L(W.cold, lang)}`], ["hot", `🔥 ${L(W.hot, lang)}`]]} onChange={(v) => setHot(v === "hot")} />
      </div>
    </ArtFrame>
  );
}

function Gas({ spec, lang }: SimProps) {
  const [vol, setVol] = useState(100); // % of the cylinder
  const [T, setT] = useState(300); // K
  const r = rnd(5);
  const y0 = 20, y1 = 180;
  const x0 = 40;
  const x1 = x0 + 2.4 * vol;
  const { ps, rate } = useBox(
    () => Array.from({ length: 40 }, () => ({ x: 60 + r() * 150, y: 30 + r() * 140, vx: r() - 0.5, vy: r() - 0.5, c: 0 })),
    (pts, dt) => {
      const v = 70 * Math.sqrt(T / 300);
      let h = 0;
      for (const p of pts) {
        const n = Math.hypot(p.vx, p.vy) || 1;
        p.x += (p.vx / n) * v * dt;
        p.y += (p.vy / n) * v * dt;
        h += bounce(p, x0, x1, y0, y1, 4);
      }
      return h;
    },
  );
  const p = (100 / vol) * (T / 300) * 100; // kPa, ideal
  return (
    <ArtFrame kind="experiment" title={L(W.gas, lang)} body={spec.body || L(W.gasHint, lang)}>
      <Stage w={320} h={200} label={L(W.gas, lang)}>
        <path d={`M ${x0 + 240} ${y0 - 4} L ${x0 - 4} ${y0 - 4} L ${x0 - 4} ${y1 + 4} L ${x0 + 240} ${y1 + 4}`} fill="none" stroke="#475569" strokeWidth="4" />
        <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} fill={`hsl(${220 - (T - 200) / 2.5} 80% 96%)`} />
        <rect x={x1} y={y0 - 2} width="10" height={y1 - y0 + 4} fill="#64748b" />
        <rect x={x1 + 10} y={(y0 + y1) / 2 - 4} width={300 - x1} height="8" fill="#94a3b8" />
        {ps.map((q, i) => <circle key={i} cx={q.x} cy={q.y} r="4" fill="#4f46e5" />)}
        <text x="44" y="196" className="sim-tag" fill="#e11d48">T = {T} K</text>
      </Stage>
      <Readouts items={[[L(W.hits, lang), fmt(rate, 0, lang), "#4f46e5"], [L(W.pressure, lang), `${fmt(p, 0, lang)} kPa`, "#e11d48"], [L(W.speed, lang), `${fmt(480 * Math.sqrt(T / 300), 0, lang)} m/s`]]} />
      <Controls>
        <Slider label={L(W.volume, lang)} value={vol} min={30} max={100} step={5} unit="%" digits={0} lang={lang} onChange={setVol} />
        <Slider label={L(W.temp, lang)} value={T} min={150} max={600} step={25} unit="K" digits={0} lang={lang} onChange={setT} />
      </Controls>
    </ArtFrame>
  );
}

function Brownian({ spec, lang }: SimProps) {
  const [show, setShow] = useState(false);
  const r = rnd(3);
  const trail = useRef<Array<[number, number]>>([[160, 100]]);
  const big = useRef({ x: 160, y: 100, vx: 0, vy: 0 });
  const { ps } = useBox(
    () => Array.from({ length: 70 }, () => ({ x: 20 + r() * 280, y: 20 + r() * 160, vx: r() - 0.5, vy: r() - 0.5, c: 0 })),
    (pts, dt) => {
      const b = big.current;
      for (const p of pts) {
        const n = Math.hypot(p.vx, p.vy) || 1;
        p.x += (p.vx / n) * 120 * dt;
        p.y += (p.vy / n) * 120 * dt;
        bounce(p, 10, 310, 10, 190, 2);
        const dx = p.x - b.x, dy = p.y - b.y, d = Math.hypot(dx, dy);
        if (d < 14) {
          b.vx -= (dx / d) * 4;
          b.vy -= (dy / d) * 4;
          p.vx = dx; p.vy = dy;
        }
      }
      b.vx *= 0.9; b.vy *= 0.9;
      b.x = Math.min(290, Math.max(30, b.x + b.vx * dt * 6));
      b.y = Math.min(170, Math.max(30, b.y + b.vy * dt * 6));
      const lastPt = trail.current[trail.current.length - 1];
      if (Math.hypot(lastPt[0] - b.x, lastPt[1] - b.y) > 3) {
        trail.current.push([b.x, b.y]);
        if (trail.current.length > 300) trail.current.shift();
      }
      return 0;
    },
  );
  return (
    <ArtFrame kind="experiment" title={L(W.brown, lang)} body={spec.body || L(W.brownHint, lang)}>
      <Stage w={320} h={200} label={L(W.brown, lang)} bg="#ecfeff">
        <polyline points={trail.current.map((p) => p.join(",")).join(" ")} fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.7" />
        {show ? ps.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="2" fill="#0284c7" />) : null}
        <circle cx={big.current.x} cy={big.current.y} r="10" fill="#facc15" stroke="#a16207" strokeWidth="2" />
      </Stage>
      <div className="art-chips"><Toggle on={show} label={L(W.molecules, lang)} onChange={setShow} /></div>
    </ArtFrame>
  );
}
