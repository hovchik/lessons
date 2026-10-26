"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Arrow, Controls, fmt, Graph, PlayBar, Readouts, Slider, Stage, Toggle, useClock } from "../kit";
import { L, t } from "../labels";

const W = {
  hooke: t("Experiment: stretching a spring", "Փորձ․ զսպանակի ձգումը", "Опыт: растяжение пружины"),
  hookeHint: t(
    "Hang weights on the spring. Twice the weight gives twice the stretch: the points on the graph lie on a straight line, F = k·x.",
    "Կախի՛ր բեռներ զսպանակից։ Կրկնակի բեռը տալիս է կրկնակի երկարացում․ գրաֆիկի կետերը գտնվում են ուղղի վրա, F = k·x։",
    "Подвешивай грузы на пружину. Вдвое больший груз — вдвое большее удлинение: точки на графике лежат на прямой, F = k·x.",
  ),
  osc: t("Experiment: a mass on a spring", "Փորձ․ բեռը զսպանակի վրա", "Опыт: груз на пружине"),
  oscHint: t(
    "Pull the weight down and let go. Change the mass and the stiffness and compare the periods: T = 2π√(m/k).",
    "Ներքև քաշի՛ր բեռը և բա՛ց թող։ Փոխի՛ր զանգվածը և կոշտությունը և համեմատի՛ր պարբերությունները․ T = 2π√(m/k)։",
    "Оттяни груз вниз и отпусти. Меняй массу и жёсткость и сравнивай периоды: T = 2π√(m/k).",
  ),
  weights: t("Weights (100 g each)", "Բեռներ (յուրաքանչյուրը 100 գ)", "Грузы (по 100 г)"),
  k: t("Stiffness k", "Կոշտություն k", "Жёсткость k"),
  mass: t("Mass m", "Զանգված m", "Масса m"),
  amp: t("Amplitude", "Ամպլիտուդ", "Амплитуда"),
  stretch: t("Stretch x", "Երկարացում x", "Удлинение x"),
  force: t("Force F", "Ուժ F", "Сила F"),
  period: t("Period T", "Պարբերություն T", "Период T"),
  freq: t("Frequency ν", "Հաճախություն ν", "Частота ν"),
  energy: t("Energy", "Էներգիա", "Энергия"),
  ek: t("kinetic", "կինետիկ", "кинетическая"),
  ep: t("potential", "պոտենցիալ", "потенциальная"),
  damp: t("Friction (damping)", "Շփում (մարում)", "Трение (затухание)"),
};
const U = { N: t("N", "Ն", "Н"), cm: t("cm", "սմ", "см"), s: t("s", "վ", "с"), kg: t("kg", "կգ", "кг"), Nm: t("N/m", "Ն/մ", "Н/м"), Hz: t("Hz", "Հց", "Гц") };

function Coil({ x, y1, y2, turns = 12, w = 14 }: { x: number; y1: number; y2: number; turns?: number; w?: number }) {
  const step = (y2 - y1) / (turns * 2);
  let d = `M ${x} ${y1}`;
  for (let i = 1; i <= turns * 2; i++) d += ` L ${x + (i % 2 ? w : -w) / 2} ${y1 + i * step}`;
  d += ` L ${x} ${y2}`;
  return <path d={d} fill="none" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />;
}

export default function Spring({ spec, lang }: SimProps) {
  return (spec.opts.mode ?? "hooke") === "oscillate" ? <Osc spec={spec} lang={lang} /> : <Hooke spec={spec} lang={lang} />;
}

function Hooke({ spec, lang }: SimProps) {
  const [n, setN] = useState(2);
  const [k, setK] = useState(Number(spec.opts.k ?? 20));
  const F = n * 1; // 100 g → 1 N with g = 10
  const x = F / k; // metres
  const px = x * 400;
  const N = L(U.N, lang), cm = L(U.cm, lang);
  return (
    <ArtFrame kind="experiment" title={L(W.hooke, lang)} body={spec.body || L(W.hookeHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={200} h={230} label={L(W.hooke, lang)}>
          <rect x="40" y="10" width="120" height="8" fill="#475569" />
          {Array.from({ length: 12 }, (_, i) => (
            <g key={i}>
              <line x1="140" x2="150" y1={60 + i * 12} y2={60 + i * 12} stroke="#64748b" />
              {i % 2 === 0 ? <text x="154" y={63 + i * 12} className="sim-axis">{i * 3}</text> : null}
            </g>
          ))}
          <text x="154" y="52" className="sim-axis is-name">{cm}</text>
          <Coil x={100} y1={18} y2={60 + px} />
          <line x1="80" x2="135" y1={60 + px} y2={60 + px} stroke="#e11d48" strokeDasharray="3 2" />
          {Array.from({ length: n }, (_, i) => (
            <rect key={i} x="86" y={62 + px + i * 13} width="28" height="12" rx="3" fill="#d97706" stroke="#92400e" />
          ))}
          {n ? <Arrow x1={70} y1={62 + px} x2={70} y2={62 + px + F * 14} color="#e11d48" label={`${F} ${N}`} /> : null}
        </Stage>
        <div>
          <Graph x={[0, 30]} y={[0, 6]} xLabel={`x, ${cm}`} yLabel={`F, ${N}`} series={[{ pts: [[0, 0], [6 / k * 100, 6]], color: "#94a3b8", dash: "4 3" }]} dots={Array.from({ length: n + 1 }, (_, i) => [(i / k) * 100, i, i === n ? "#e11d48" : "#4f46e5"] as [number, number, string])} />
          <Readouts items={[[L(W.force, lang), `${F} ${N}`, "#e11d48"], [L(W.stretch, lang), `${fmt(x * 100, 1, lang)} ${cm}`, "#4f46e5"], ["k = F/x", `${k} ${L(U.Nm, lang)}`]]} />
        </div>
      </div>
      <Controls>
        <Slider label={L(W.weights, lang)} value={n} min={0} max={6} digits={0} lang={lang} onChange={setN} />
        <Slider label={L(W.k, lang)} value={k} min={20} max={60} step={5} unit={L(U.Nm, lang)} digits={0} lang={lang} onChange={setK} />
      </Controls>
    </ArtFrame>
  );
}

function Osc({ spec, lang }: SimProps) {
  const [m, setM] = useState(0.5);
  const [k, setK] = useState(20);
  const [A, setA] = useState(4);
  const [damp, setDamp] = useState(false);
  const clock = useClock();
  const w0 = Math.sqrt(k / m);
  const T = (2 * Math.PI) / w0;
  const b = damp ? 0.25 : 0;
  const x = (s: number) => A * Math.exp(-b * s) * Math.cos(w0 * s);
  const v = (s: number) => -A * w0 * Math.exp(-b * s) * Math.sin(w0 * s) - b * x(s);
  const tt = clock.t;
  const xs = x(tt);
  const win = 6;
  const from = Math.max(0, tt - win);
  const trace = Array.from({ length: 121 }, (_, i) => from + ((tt - from) * i) / 120).map((s) => [s, x(s)] as [number, number]);
  const ek = (m * (v(tt) / 100) ** 2) / 2, ep = (k * (xs / 100) ** 2) / 2;
  const e0 = (k * (A / 100) ** 2) / 2;
  const cm = L(U.cm, lang), s = L(U.s, lang);
  const base = 110;
  return (
    <ArtFrame kind="experiment" title={L(W.osc, lang)} body={spec.body || L(W.oscHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={200} h={220} label={L(W.osc, lang)}>
          <rect x="40" y="10" width="120" height="8" fill="#475569" />
          <line x1="20" x2="180" y1={base + 20} y2={base + 20} stroke="#94a3b8" strokeDasharray="4 3" />
          <Coil x={100} y1={18} y2={base + xs * 6} turns={14} />
          <rect x={100 - 12 - m * 8} y={base + xs * 6} width={24 + m * 16} height="40" rx="5" fill="#4f46e5" />
          <text x="100" y={base + xs * 6 + 24} textAnchor="middle" className="sim-tag is-plain" fill="#fff">{fmt(m, 1, lang)} {L(U.kg, lang)}</text>
          <g transform="translate(176 40)">
            <rect x="-6" y="0" width="12" height="80" rx="3" fill="#f1f5f9" />
            <rect x="-6" y={80 - (ek / e0) * 80} width="12" height={(ek / e0) * 80} rx="3" fill="#059669" />
            <rect x="-26" y="0" width="12" height="80" rx="3" fill="#f1f5f9" />
            <rect x="-26" y={80 - (ep / e0) * 80} width="12" height={(ep / e0) * 80} rx="3" fill="#d97706" />
            <text x="0" y="92" textAnchor="middle" className="sim-axis">Ek</text>
            <text x="-20" y="92" textAnchor="middle" className="sim-axis">Ep</text>
          </g>
        </Stage>
        <div>
          <Graph x={[from, from + win]} y={[-10, 10]} xLabel={`t, ${s}`} yLabel={`x, ${cm}`} series={[{ pts: trace, color: "#4f46e5" }]} />
          <Readouts items={[[L(W.period, lang), `${fmt(T, 2, lang)} ${s}`, "#4f46e5"], [L(W.freq, lang), `${fmt(1 / T, 2, lang)} ${L(U.Hz, lang)}`]]} />
        </div>
      </div>
      <Controls>
        <Slider label={L(W.mass, lang)} value={m} min={0.1} max={2} step={0.1} unit={L(U.kg, lang)} lang={lang} onChange={(n) => { setM(n); clock.reset(); }} />
        <Slider label={L(W.k, lang)} value={k} min={5} max={80} step={5} unit={L(U.Nm, lang)} digits={0} lang={lang} onChange={(n) => { setK(n); clock.reset(); }} />
        <Slider label={L(W.amp, lang)} value={A} min={1} max={8} unit={cm} digits={0} lang={lang} onChange={(n) => { setA(n); clock.reset(); }} />
        <div className="art-chips"><Toggle on={damp} label={L(W.damp, lang)} onChange={(d) => { setDamp(d); clock.reset(); }} /></div>
      </Controls>
      <PlayBar clock={clock} lang={lang} />
    </ArtFrame>
  );
}

