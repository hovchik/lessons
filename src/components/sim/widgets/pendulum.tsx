"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Choice, Controls, fmt, Graph, PlayBar, rad, Readouts, Slider, Stage, Toggle, useClock } from "../kit";
import { L, t, un } from "../labels";

const W = {
  title: t("Experiment: the pendulum", "Փորձ․ ճոճանակ", "Опыт: маятник"),
  hint: t(
    "Change the length, the swing and the planet. Which of them changes the period? T = 2π√(l/g) does not depend on the mass or a small swing.",
    "Փոխի՛ր երկարությունը, շեղումը և մոլորակը։ Դրանցից ո՞րն է փոխում պարբերությունը։ T = 2π√(l/g) կախված չէ զանգվածից և փոքր շեղումից։",
    "Меняй длину, размах и планету. Что из этого меняет период? T = 2π√(l/g) не зависит от массы и малого размаха.",
  ),
  res: t("Experiment: resonance", "Փորձ․ ռեզոնանս", "Опыт: резонанс"),
  resHint: t(
    "Push the swing in time with the slider. When your pushing frequency matches its own frequency, the swing grows the most: resonance.",
    "Ճոճիր ճոճանակը սահիչով ընտրված հաճախությամբ։ Երբ քո հրումների հաճախությունը համընկնում է սեփականի հետ, տատանումը ամենամեծն է․ ռեզոնանս։",
    "Подталкивай качели с частотой, заданной ползунком. Когда частота толчков совпадает с собственной, размах растёт сильнее всего: резонанс.",
  ),
  length: t("Length l", "Երկարություն l", "Длина l"),
  swing: t("Swing", "Շեղում", "Отклонение"),
  period: t("Period T", "Պարբերություն T", "Период T"),
  earth: t("Earth", "Երկիր", "Земля"),
  moon: t("Moon", "Լուսին", "Луна"),
  jupiter: t("Jupiter", "Յուպիտեր", "Юпитер"),
  damp: t("Air friction", "Օդի շփում", "Трение о воздух"),
  drive: t("Pushing frequency", "Հրումների հաճախություն", "Частота толчков"),
  own: t("Own frequency", "Սեփական հաճախություն", "Собственная частота"),
  amp: t("Amplitude", "Ամպլիտուդ", "Амплитуда"),
  swings: t("Swings counted", "Հաշված տատանումներ", "Насчитано колебаний"),
};
const G = { earth: 9.8, moon: 1.6, jupiter: 24.8 } as const;
const U = { m: t("m", "մ", "м"), s: t("s", "վ", "с"), Hz: t("Hz", "Հց", "Гц"), cm: t("cm", "սմ", "см") };

export default function Pendulum({ spec, lang }: SimProps) {
  return spec.opts.mode === "resonance" ? <Resonance spec={spec} lang={lang} /> : <Free spec={spec} lang={lang} />;
}

function Bob({ angle, len, px = 140 }: { angle: number; len: number; px?: number }) {
  const x = 160 + Math.sin(angle) * len * px, y = 16 + Math.cos(angle) * len * px;
  return (
    <>
      <line x1="160" y1="16" x2={x} y2={y} stroke="#475569" strokeWidth="2" />
      <circle cx={x} cy={y} r="11" fill="#e11d48" stroke="#9f1239" strokeWidth="2" />
    </>
  );
}

function Free({ spec, lang }: SimProps) {
  const [l, setL] = useState(1);
  const [a0, setA0] = useState(15);
  const [planet, setPlanet] = useState<keyof typeof G>("earth");
  const [damp, setDamp] = useState(false);
  const clock = useClock();
  const g = G[planet];
  const w = Math.sqrt(g / l);
  const T = (2 * Math.PI) / w;
  const ang = (s: number) => rad(a0) * Math.exp(damp ? -0.15 * s : 0) * Math.cos(w * s);
  const tt = clock.t;
  const win = 8, from = Math.max(0, tt - win);
  const trace = Array.from({ length: 161 }, (_, i) => from + ((tt - from) * i) / 160).map((s) => [s, (ang(s) * 180) / Math.PI] as [number, number]);
  return (
    <ArtFrame kind="experiment" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={320} h={200} label={L(W.title, lang)}>
          <rect x="100" y="8" width="120" height="8" fill="#475569" />
          <line x1="160" y1="16" x2="160" y2="195" stroke="#cbd5e1" strokeDasharray="4 3" />
          <Bob angle={ang(tt)} len={l} px={120} />
        </Stage>
        <div>
          <Graph x={[from, from + win]} y={[-40, 40]} xLabel={`t, ${L(U.s, lang)}`} yLabel="α, °" series={[{ pts: trace, color: "#e11d48" }]} />
          <Readouts items={[[L(W.period, lang), `${fmt(T, 2, lang)} ${L(U.s, lang)}`, "#e11d48"], ["g", `${fmt(g, 1, lang)} ${un("ms2", lang)}`], [L(W.swings, lang), `${Math.floor(tt / T)}`]]} />
        </div>
      </div>
      <Controls>
        <Choice value={planet} options={(Object.keys(G) as Array<keyof typeof G>).map((k) => [k, L(W[k], lang)])} onChange={(p) => { setPlanet(p); clock.reset(); }} />
        <Slider label={L(W.length, lang)} value={l} min={0.25} max={1.5} step={0.25} unit={L(U.m, lang)} digits={2} lang={lang} onChange={(n) => { setL(n); clock.reset(); }} />
        <Slider label={L(W.swing, lang)} value={a0} min={5} max={35} step={5} unit="°" digits={0} lang={lang} onChange={(n) => { setA0(n); clock.reset(); }} />
        <div className="art-chips"><Toggle on={damp} label={L(W.damp, lang)} onChange={(d) => { setDamp(d); clock.reset(); }} /></div>
      </Controls>
      <PlayBar clock={clock} lang={lang} />
    </ArtFrame>
  );
}

function Resonance({ spec, lang }: SimProps) {
  const f0 = 0.5; // Hz, own frequency
  const [f, setF] = useState(0.3);
  const clock = useClock();
  const w0 = 2 * Math.PI * f0, wd = 2 * Math.PI * f, b = 0.35;
  const ampOf = (fr: number) => {
    const w = 2 * Math.PI * fr;
    return 1.2 / Math.sqrt((w0 * w0 - w * w) ** 2 + (2 * b * w) ** 2);
  };
  const Amax = ampOf(f0);
  const A = ampOf(f);
  const tt = clock.t;
  // steady state plus a growing start
  const grow = 1 - Math.exp(-b * tt);
  const x = A * grow * Math.cos(wd * tt - Math.atan2(2 * b * wd, w0 * w0 - wd * wd));
  const angle = (x / Amax) * rad(40);
  const curve = Array.from({ length: 81 }, (_, i) => [0.1 + i * 0.0125, ampOf(0.1 + i * 0.0125) / Amax] as [number, number]);
  return (
    <ArtFrame kind="experiment" title={L(W.res, lang)} body={spec.body || L(W.resHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={320} h={200} label={L(W.res, lang)}>
          <rect x="100" y="8" width="120" height="8" fill="#475569" />
          <Bob angle={angle} len={1} px={150} />
          <text x="20" y="190" className="sim-tag" fill="#d97706">👋 {fmt(f, 2, lang)} {L(U.Hz, lang)}</text>
        </Stage>
        <div>
          <Graph x={[0.1, 1.1]} y={[0, 1.1]} xLabel={`ν, ${L(U.Hz, lang)}`} yLabel={L(W.amp, lang)} series={[{ pts: curve, color: "#7c3aed" }]} dots={[[f, A / Amax, "#e11d48"]]} cursor={f0} />
          <Readouts items={[[L(W.own, lang), `${f0} ${L(U.Hz, lang)}`.replace(".", lang === "en" ? "." : ","), "#7c3aed"], [L(W.drive, lang), `${fmt(f, 2, lang)} ${L(U.Hz, lang)}`, "#e11d48"]]} />
        </div>
      </div>
      <Controls>
        <Slider label={L(W.drive, lang)} value={f} min={0.1} max={1.1} step={0.05} unit={L(U.Hz, lang)} digits={2} lang={lang} onChange={(n) => { setF(n); clock.reset(); clock.setPlaying(true); }} />
      </Controls>
      <PlayBar clock={clock} lang={lang} />
    </ArtFrame>
  );
}
