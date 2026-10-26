"use client";

import { useEffect, useRef, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Controls, fmt, Graph, Note, Readouts, Slider, Stage, useDrag } from "../kit";
import { L, t, UI, un } from "../labels";

const W = {
  coil: t("Experiment: Faraday's induction", "Փորձ․ Ֆարադեյի ինդուկցիա", "Опыт: индукция Фарадея"),
  coilHint: t(
    "Push the magnet into the coil and pull it out. The needle moves only while the magnetic flux changes, and faster motion gives a bigger current. In and out give opposite currents (Lenz's rule).",
    "Մտցրո՛ւ մագնիսը կոճի մեջ և հանի՛ր։ Սլաքը շարժվում է միայն այն ժամանակ, երբ մագնիսական հոսքը փոխվում է, և արագ շարժումը տալիս է մեծ հոսանք։ Մտցնելիս և հանելիս հոսանքները հակադիր են (Լենցի կանոն)։",
    "Вдвигай магнит в катушку и выдвигай. Стрелка движется, только пока меняется магнитный поток, и чем быстрее движение, тем больше ток. Внутрь и наружу — токи противоположны (правило Ленца).",
  ),
  gen: t("Experiment: the generator", "Փորձ․ գեներատոր", "Опыт: генератор"),
  genHint: t(
    "A coil turning in a magnetic field gives an alternating voltage. Turn it faster: the voltage and the frequency both grow.",
    "Մագնիսական դաշտում պտտվող կոճը տալիս է փոփոխական լարում։ Պտտի՛ր ավելի արագ․ մեծանում են և՛ լարումը, և՛ հաճախությունը։",
    "Катушка, вращающаяся в магнитном поле, даёт переменное напряжение. Крути быстрее: растут и напряжение, и частота.",
  ),
  tr: t("Experiment: the transformer", "Փորձ․ տրանսֆորմատոր", "Опыт: трансформатор"),
  trHint: t(
    "Alternating current in the first coil makes a changing flux in the iron core, and it induces a voltage in the second coil: U₂/U₁ = N₂/N₁.",
    "Առաջին կոճի փոփոխական հոսանքը երկաթե միջուկում ստեղծում է փոփոխվող հոսք, որը երկրորդ կոճում լարում է մակածում․ U₂/U₁ = N₂/N₁։",
    "Переменный ток в первичной обмотке создаёт в железном сердечнике меняющийся поток, а он наводит напряжение во вторичной обмотке: U₂/U₁ = N₂/N₁.",
  ),
  speed: t("Turns per second", "Պտույտ վայրկյանում", "Оборотов в секунду"),
  emf: t("Peak voltage", "Լարման առավելագույն արժեք", "Амплитуда напряжения"),
  freq: t("Frequency", "Հաճախություն", "Частота"),
  n1: t("Turns N₁", "Գալարներ N₁", "Витков N₁"),
  n2: t("Turns N₂", "Գալարներ N₂", "Витков N₂"),
  u1: t("Input voltage U₁", "Մուտքի լարում U₁", "Входное напряжение U₁"),
  up: t("Step-up transformer: more voltage, less current.", "Բարձրացնող տրանսֆորմատոր․ ավելի մեծ լարում, ավելի փոքր հոսանք։", "Повышающий трансформатор: больше напряжение, меньше ток."),
  down: t("Step-down transformer: less voltage, more current.", "Իջեցնող տրանսֆորմատոր․ ավելի փոքր լարում, ավելի մեծ հոսանք։", "Понижающий трансформатор: меньше напряжение, больше ток."),
  same: t("Equal turns: the voltage does not change.", "Հավասար գալարներ․ լարումը չի փոխվում։", "Витков поровну: напряжение не меняется."),
  shake: t("Move it in and out", "Մտցնել-հանել", "Вдвинуть и выдвинуть"),
};

export default function Induction({ spec, lang }: SimProps) {
  const m = spec.opts.mode ?? "coil";
  if (m === "generator") return <Generator spec={spec} lang={lang} />;
  if (m === "transformer") return <Transformer spec={spec} lang={lang} />;
  return <CoilMagnet spec={spec} lang={lang} />;
}

function Galvanometer({ x, y, value }: { x: number; y: number; value: number }) {
  const a = Math.max(-1, Math.min(1, value)) * 60;
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-34 0 A 34 34 0 0 1 34 0 Z" fill="#fff" stroke="#1e1b4b" strokeWidth="2" />
      {[-60, -30, 0, 30, 60].map((d) => <line key={d} x1={Math.sin((d * Math.PI) / 180) * 26} y1={-Math.cos((d * Math.PI) / 180) * 26} x2={Math.sin((d * Math.PI) / 180) * 31} y2={-Math.cos((d * Math.PI) / 180) * 31} stroke="#1e1b4b" />)}
      <line x1="0" y1="0" x2={Math.sin((a * Math.PI) / 180) * 28} y2={-Math.cos((a * Math.PI) / 180) * 28} stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" />
      <text y="12" textAnchor="middle" className="sim-tag" fill="#1e1b4b">G</text>
    </g>
  );
}

function CoilMagnet({ spec, lang }: SimProps) {
  const [mx, setMx] = useState(40); // magnet's right end
  const last = useRef({ x: 40, t: 0 });
  const [reading, setReading] = useState(0);
  const auto = useRef<number | null>(null);
  const flux = (x: number) => 1 / (1 + Math.exp(-(x - 150) / 18)); // grows as the magnet goes in
  const update = (x: number) => {
    const now = performance.now();
    const dt = Math.max(16, now - last.current.t);
    const dphi = (flux(x) - flux(last.current.x)) / (dt / 1000);
    last.current = { x, t: now };
    setReading(-dphi * 0.35);
    setMx(x);
  };
  // the needle comes back to zero when the magnet stops
  useEffect(() => {
    const id = setInterval(() => {
      if (performance.now() - last.current.t > 120) setReading((r) => r * 0.6);
    }, 60);
    return () => clearInterval(id);
  }, []);
  const drag = useDrag<"m">((p) => (p.x > mx - 90 && p.x < mx + 10 && Math.abs(p.y - 70) < 22 ? "m" : null), (_, p) => update(Math.min(230, Math.max(40, p.x + 40))));
  const shake = () => {
    if (auto.current) return;
    const start = performance.now();
    const run = (now: number) => {
      const k = (now - start) / 2400;
      if (k >= 1) { auto.current = null; update(40); return; }
      update(40 + 190 * Math.sin(k * Math.PI));
      auto.current = requestAnimationFrame(run);
    };
    auto.current = requestAnimationFrame(run);
  };
  useEffect(() => () => { if (auto.current) cancelAnimationFrame(auto.current); }, []);
  return (
    <ArtFrame kind="experiment" title={L(W.coil, lang)} body={spec.body || L(W.coilHint, lang)}>
      <Stage w={320} h={190} label={L(W.coil, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        {Array.from({ length: 10 }, (_, i) => <ellipse key={i} cx={150 + i * 12} cy={70} rx="6" ry="26" fill="none" stroke="#b45309" strokeWidth="3" />)}
        <g className="sim-handle">
          <rect x={mx - 80} y="58" width="40" height="24" fill="#2563eb" />
          <rect x={mx - 40} y="58" width="40" height="24" fill="#e11d48" />
          <text x={mx - 60} y="74" textAnchor="middle" className="sim-tag is-plain" fill="#fff">S</text>
          <text x={mx - 20} y="74" textAnchor="middle" className="sim-tag is-plain" fill="#fff">N</text>
        </g>
        <path d="M150 96 L 150 150 L 120 150 M 270 70 L 290 70 L 290 150 L 200 150" fill="none" stroke="#475569" strokeWidth="2" />
        <Galvanometer x={160} y={170} value={reading} />
      </Stage>
      <p className="art-note">{L(UI.drag, lang)}</p>
      <div className="art-row"><button type="button" className="art-btn is-primary" onClick={shake}>{L(W.shake, lang)}</button></div>
    </ArtFrame>
  );
}

function useSpin(rps: number) {
  const [a, setA] = useState(0);
  const sp = useRef(rps);
  sp.current = rps;
  useEffect(() => {
    let id = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      setA((x) => x + 2 * Math.PI * sp.current * dt * 0.25);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);
  return a;
}

function Generator({ spec, lang }: SimProps) {
  const [rps, setRps] = useState(2);
  const a = useSpin(rps);
  const peak = rps * 6;
  const hist = useRef<Array<[number, number]>>([]);
  const tNow = a / (2 * Math.PI * 0.25);
  const u = peak * Math.sin(a);
  hist.current.push([tNow, u]);
  while (hist.current.length && hist.current[0][0] < tNow - 4) hist.current.shift();
  const w = Math.abs(Math.cos(a)) * 50;
  return (
    <ArtFrame kind="experiment" title={L(W.gen, lang)} body={spec.body || L(W.genHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={260} h={170} label={L(W.gen, lang)}>
          <rect x="10" y="45" width="50" height="80" fill="#e11d48" />
          <rect x="200" y="45" width="50" height="80" fill="#2563eb" />
          <text x="35" y="90" textAnchor="middle" className="sim-tag is-plain" fill="#fff">N</text>
          <text x="225" y="90" textAnchor="middle" className="sim-tag is-plain" fill="#fff">S</text>
          <rect x={130 - w} y="40" width={Math.max(2, w * 2)} height="90" fill="none" stroke="#b45309" strokeWidth="4" />
          <line x1="130" y1="130" x2="130" y2="160" stroke="#475569" strokeWidth="2" />
          <circle cx="130" cy="160" r="5" fill="#a16207" />
        </Stage>
        <Graph x={[tNow - 4, tNow]} y={[-50, 50]} xLabel={`t, ${un("s", lang)}`} yLabel={`U, ${un("V", lang)}`} series={[{ pts: hist.current.slice(), color: "#7c3aed" }]} />
      </div>
      <Readouts items={[[L(W.emf, lang), `${fmt(peak, 0, lang)} ${un("V", lang)}`, "#7c3aed"], [L(W.freq, lang), `${fmt(rps, 1, lang)} ${un("Hz", lang)}`]]} />
      <Controls>
        <Slider label={L(W.speed, lang)} value={rps} min={0} max={6} step={0.5} lang={lang} onChange={setRps} />
      </Controls>
    </ArtFrame>
  );
}

function Transformer({ spec, lang }: SimProps) {
  const [n1, setN1] = useState(100);
  const [n2, setN2] = useState(400);
  const [u1, setU1] = useState(220);
  const u2 = (u1 * n2) / n1;
  const turns = (n: number) => Math.max(3, Math.min(16, Math.round(n / 40)));
  return (
    <ArtFrame kind="experiment" title={L(W.tr, lang)} body={spec.body || L(W.trHint, lang)}>
      <Stage w={320} h={180} label={L(W.tr, lang)}>
        <path d="M90 30 L 230 30 L 230 150 L 90 150 Z M 112 52 L 208 52 L 208 128 L 112 128 Z" fill="#94a3b8" fillRule="evenodd" />
        {Array.from({ length: turns(n1) }, (_, i) => <rect key={i} x="80" y={40 + (i * 100) / turns(n1)} width="42" height="4" rx="2" fill="#b45309" />)}
        {Array.from({ length: turns(n2) }, (_, i) => <rect key={i} x="198" y={40 + (i * 100) / turns(n2)} width="42" height="4" rx="2" fill="#2563eb" />)}
        <path d="M80 50 L 30 50 M 80 130 L 30 130" stroke="#b45309" strokeWidth="2" />
        <path d="M240 50 L 290 50 M 240 130 L 290 130" stroke="#2563eb" strokeWidth="2" />
        <text x="30" y="94" className="sim-tag" fill="#b45309">{u1} {un("V", lang)}</text>
        <text x="250" y="94" className="sim-tag" fill="#2563eb">{fmt(u2, 0, lang)} {un("V", lang)}</text>
        <text x="100" y="170" textAnchor="middle" className="sim-small">N₁ = {n1}</text>
        <text x="220" y="170" textAnchor="middle" className="sim-small">N₂ = {n2}</text>
      </Stage>
      <Note>{L(n2 > n1 ? W.up : n2 < n1 ? W.down : W.same, lang)}</Note>
      <Readouts items={[["U₂", `${fmt(u2, 0, lang)} ${un("V", lang)}`, "#2563eb"], ["k = N₁/N₂", fmt(n1 / n2, 2, lang)]]} />
      <Controls>
        <Slider label={L(W.n1, lang)} value={n1} min={50} max={600} step={50} digits={0} lang={lang} onChange={setN1} />
        <Slider label={L(W.n2, lang)} value={n2} min={50} max={600} step={50} digits={0} lang={lang} onChange={setN2} />
        <Slider label={L(W.u1, lang)} value={u1} min={10} max={380} step={10} unit={un("V", lang)} digits={0} lang={lang} onChange={setU1} />
      </Controls>
    </ArtFrame>
  );
}
