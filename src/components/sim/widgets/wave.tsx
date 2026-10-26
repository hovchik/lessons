"use client";

import { useEffect, useRef, useState, type ReactElement } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Choice, Controls, fmt, Graph, Note, Readouts, Slider, Stage, Toggle } from "../kit";
import { L, t, un } from "../labels";

const W = {
  transverse: t("Experiment: a wave on a rope", "Փորձ․ ալիքը պարանի վրա", "Опыт: волна на верёвке"),
  transverseHint: t(
    "Each point of the rope only moves up and down; the wave runs along. Watch the red point. One wavelength λ passes in one period T: v = λ/T = λ·ν.",
    "Պարանի ամեն կետ միայն վեր ու վար է շարժվում, իսկ ալիքը վազում է առաջ։ Հետևի՛ր կարմիր կետին։ Մեկ պարբերությունում անցնում է մեկ ալիքի երկարություն λ․ v = λ/T = λ·ν։",
    "Каждая точка верёвки только движется вверх-вниз, а волна бежит вперёд. Следи за красной точкой. За один период T волна проходит одну длину λ: v = λ/T = λ·ν.",
  ),
  longitudinal: t("Experiment: a sound wave in air", "Փորձ․ ձայնային ալիքը օդում", "Опыт: звуковая волна в воздухе"),
  longitudinalHint: t(
    "In a longitudinal wave the particles swing back and forth along the direction of the wave, making squeezes and stretches.",
    "Երկայնական ալիքում մասնիկները տատանվում են ալիքի ուղղությամբ՝ առաջ ու հետ, առաջացնելով խտացումներ և նոսրացումներ։",
    "В продольной волне частицы колеблются вдоль направления волны, образуя сгущения и разрежения.",
  ),
  sound: t("Experiment: pitch and loudness", "Փորձ․ ձայնի բարձրություն և ուժգնություն", "Опыт: высота и громкость звука"),
  soundHint: t(
    "Higher frequency means a higher note; bigger amplitude means a louder sound. Switch the sound on and listen.",
    "Ավելի մեծ հաճախություն՝ ավելի բարձր տոն, ավելի մեծ ամպլիտուդ՝ ավելի ուժեղ ձայն։ Միացրո՛ւ ձայնը և լսի՛ր։",
    "Больше частота — выше звук, больше амплитуда — громче. Включи звук и послушай.",
  ),
  interference: t("Experiment: two sources interfere", "Փորձ․ երկու աղբյուրի ինտերֆերենցը", "Опыт: интерференция двух источников"),
  interferenceHint: t(
    "Where crest meets crest the waves add up (bright); where crest meets trough they cancel (dark lines). Move the sources apart or change the wavelength.",
    "Որտեղ կատարը հանդիպում է կատարին, ալիքները գումարվում են (պայծառ), որտեղ կատարը հանդիպում է փոսին, մարում են (մութ գծեր)։ Հեռացրո՛ւ աղբյուրները կամ փոխի՛ր ալիքի երկարությունը։",
    "Где гребень встречает гребень, волны складываются (светло); где гребень встречает впадину — гасят друг друга (тёмные линии). Раздвинь источники или поменяй длину волны.",
  ),
  slits: t("Experiment: Young's double slit", "Փորձ․ Յունգի երկու ճեղքը", "Опыт: две щели Юнга"),
  slitsHint: t(
    "Light through two narrow slits gives stripes on the screen. Red light (longer waves) makes wider stripes than blue: Δx = λ·L/d.",
    "Երկու նեղ ճեղքերով անցած լույսը էկրանին տալիս է շերտեր։ Կարմիր լույսը (երկար ալիքներ) տալիս է ավելի լայն շերտեր, քան կապույտը․ Δx = λ·L/d։",
    "Свет через две узкие щели даёт на экране полосы. Красный свет (длинные волны) даёт более широкие полосы, чем синий: Δx = λ·L/d.",
  ),
  am: t("Experiment: carrying a voice on a radio wave", "Փորձ․ ձայնը ռադիոալիքի վրա", "Опыт: голос на радиоволне"),
  amHint: t(
    "A fast carrier wave is shaped by the slow sound signal. In AM the height of the carrier changes, in FM its frequency changes.",
    "Արագ կրող ալիքը ձևավորվում է դանդաղ ձայնային ազդանշանով։ AM-ում փոխվում է կրողի բարձրությունը, FM-ում՝ հաճախությունը։",
    "Быструю несущую волну «лепит» медленный звуковой сигнал. При АМ меняется высота несущей, при ЧМ — её частота.",
  ),
  amp: t("Amplitude", "Ամպլիտուդ", "Амплитуда"),
  freq: t("Frequency ν", "Հաճախություն ν", "Частота ν"),
  lambda: t("Wavelength λ", "Ալիքի երկարություն λ", "Длина волны λ"),
  speed: t("Speed v", "Արագություն v", "Скорость v"),
  period: t("Period T", "Պարբերություն T", "Период T"),
  listen: t("Listen", "Լսել", "Слушать"),
  mute: t("Mute", "Անջատել ձայնը", "Выключить звук"),
  sep: t("Distance between the sources", "Աղբյուրների միջև հեռավորությունը", "Расстояние между источниками"),
  slitSep: t("Slit separation d", "Ճեղքերի հեռավորություն d", "Расстояние между щелями d"),
  colour: t("Colour of the light", "Լույսի գույնը", "Цвет света"),
  fringe: t("Stripe spacing Δx", "Շերտերի միջև հեռավորություն Δx", "Расстояние между полосами Δx"),
  signal: t("sound signal", "ձայնային ազդանշան", "звуковой сигнал"),
  carrier: t("carrier", "կրող ալիք", "несущая"),
  hear: t("Human hearing: about 20 Hz to 20 000 Hz.", "Մարդու լսողությունը․ մոտ 20 Հց-ից 20 000 Հց։", "Человек слышит примерно от 20 Гц до 20 000 Гц."),
};

function useTime(on = true) {
  const [tt, setT] = useState(0);
  useEffect(() => {
    if (!on || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    let id = 0;
    const start = performance.now();
    const tick = (now: number) => { setT((now - start) / 1000); id = requestAnimationFrame(tick); };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [on]);
  return tt;
}

export default function Wave({ spec, lang }: SimProps) {
  const m = spec.opts.mode ?? "transverse";
  if (m === "longitudinal") return <Longitudinal spec={spec} lang={lang} />;
  if (m === "sound") return <Sound spec={spec} lang={lang} />;
  if (m === "interference") return <Interference spec={spec} lang={lang} />;
  if (m === "slits") return <Slits spec={spec} lang={lang} />;
  if (m === "am") return <Modulation spec={spec} lang={lang} />;
  return <Transverse spec={spec} lang={lang} />;
}

function Transverse({ spec, lang }: SimProps) {
  const [A, setA] = useState(25);
  const [nu, setNu] = useState(0.5);
  const v = 60; // px per second, shown as 0.6 m/s
  const tt = useTime();
  const lam = v / nu;
  const y = (x: number) => 100 - A * Math.sin(2 * Math.PI * (nu * tt - x / lam));
  const xs = Array.from({ length: 33 }, (_, i) => 10 + i * 9.4);
  const red = 160;
  return (
    <ArtFrame kind="experiment" title={L(W.transverse, lang)} body={spec.body || L(W.transverseHint, lang)}>
      <Stage w={320} h={200} label={L(W.transverse, lang)}>
        <line x1="0" x2="320" y1="100" y2="100" stroke="#cbd5e1" strokeDasharray="4 3" />
        <polyline points={Array.from({ length: 161 }, (_, i) => `${i * 2},${y(i * 2).toFixed(1)}`).join(" ")} fill="none" stroke="#7c3aed" strokeWidth="3" />
        {xs.map((x) => <circle key={x} cx={x} cy={y(x)} r="3" fill="#a78bfa" />)}
        <line x1={red} x2={red} y1={100 - A - 6} y2={100 + A + 6} stroke="#fecaca" strokeWidth="6" strokeLinecap="round" />
        <circle cx={red} cy={y(red)} r="6" fill="#e11d48" />
        {lam < 300 ? (
          <g>
            <line x1={20} x2={20 + lam} y1={175} y2={175} stroke="#059669" strokeWidth="2" />
            <line x1={20} x2={20} y1={168} y2={182} stroke="#059669" strokeWidth="2" />
            <line x1={20 + lam} x2={20 + lam} y1={168} y2={182} stroke="#059669" strokeWidth="2" />
            <text x={20 + lam / 2} y={192} textAnchor="middle" className="sim-tag" fill="#059669">λ</text>
          </g>
        ) : null}
      </Stage>
      <Readouts items={[[L(W.lambda, lang), `${fmt(lam / 100, 2, lang)} ${un("m", lang)}`, "#059669"], [L(W.period, lang), `${fmt(1 / nu, 2, lang)} ${un("s", lang)}`], [L(W.speed, lang), `${fmt(v / 100, 2, lang)} ${un("ms", lang)}`]]} />
      <Controls>
        <Slider label={L(W.amp, lang)} value={A} min={5} max={45} step={5} digits={0} lang={lang} onChange={setA} />
        <Slider label={L(W.freq, lang)} value={nu} min={0.25} max={1.5} step={0.25} unit={un("Hz", lang)} digits={2} lang={lang} onChange={setNu} />
      </Controls>
    </ArtFrame>
  );
}

function Longitudinal({ spec, lang }: SimProps) {
  const [nu, setNu] = useState(0.6);
  const tt = useTime();
  const lam = 80;
  const cols = 40, rows = 7;
  return (
    <ArtFrame kind="experiment" title={L(W.longitudinal, lang)} body={spec.body || L(W.longitudinalHint, lang)}>
      <Stage w={320} h={150} label={L(W.longitudinal, lang)}>
        <rect x="0" y="40" width="22" height="70" rx="4" fill="#475569" />
        <rect x={22 + 6 * Math.sin(2 * Math.PI * nu * tt)} y="45" width="6" height="60" fill="#94a3b8" />
        {Array.from({ length: cols * rows }, (_, i) => {
          const c = i % cols, r = Math.floor(i / cols);
          const x0 = 36 + c * 7;
          const x = x0 + 6 * Math.sin(2 * Math.PI * (nu * tt - (x0 - 30) / lam));
          const hi = c === 20 && r === 3;
          return <circle key={i} cx={x} cy={48 + r * 9 + ((c * 7) % 3)} r={hi ? 3.5 : 2} fill={hi ? "#e11d48" : "#2563eb"} />;
        })}
        <text x="36" y="140" className="sim-small">↔ λ = {fmt(lam / 100, 1, lang)} {un("m", lang)}</text>
      </Stage>
      <Controls>
        <Slider label={L(W.freq, lang)} value={nu} min={0.2} max={1.2} step={0.1} unit={un("Hz", lang)} lang={lang} onChange={setNu} />
      </Controls>
    </ArtFrame>
  );
}

function Sound({ spec, lang }: SimProps) {
  const [f, setF] = useState(440);
  const [A, setA] = useState(0.5);
  const [on, setOn] = useState(false);
  const ctx = useRef<{ ac: AudioContext; osc: OscillatorNode; gain: GainNode } | null>(null);
  useEffect(() => {
    if (!on) {
      ctx.current?.gain.gain.setTargetAtTime(0, ctx.current.ac.currentTime, 0.03);
      return;
    }
    if (!ctx.current) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ac = new AC();
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      gain.gain.value = 0;
      osc.connect(gain).connect(ac.destination);
      osc.start();
      ctx.current = { ac, osc, gain };
    }
    const c = ctx.current;
    c.osc.frequency.setTargetAtTime(f, c.ac.currentTime, 0.02);
    c.gain.gain.setTargetAtTime(A * 0.15, c.ac.currentTime, 0.03);
  }, [on, f, A]);
  useEffect(() => () => { ctx.current?.ac.close(); ctx.current = null; }, []);
  const pts = Array.from({ length: 241 }, (_, i) => { const ms = (i / 240) * 10; return [ms, A * Math.sin(2 * Math.PI * f * (ms / 1000))] as [number, number]; });
  return (
    <ArtFrame kind="experiment" title={L(W.sound, lang)} body={spec.body || L(W.soundHint, lang)}>
      <Graph x={[0, 10]} y={[-1, 1]} xLabel={`t, m${un("s", lang)}`} yLabel={L(W.amp, lang)} series={[{ pts, color: "#7c3aed" }]} h={140} />
      <Readouts items={[[L(W.freq, lang), `${f} ${un("Hz", lang)}`, "#7c3aed"], [L(W.lambda, lang), `${fmt(340 / f, 2, lang)} ${un("m", lang)}`], [L(W.period, lang), `${fmt(1000 / f, 2, lang)} m${un("s", lang)}`]]} />
      <Controls>
        <Slider label={L(W.freq, lang)} value={f} min={110} max={1760} step={10} unit={un("Hz", lang)} digits={0} lang={lang} onChange={setF} />
        <Slider label={L(W.amp, lang)} value={A} min={0.1} max={1} step={0.1} lang={lang} onChange={setA} />
      </Controls>
      <Note>{L(W.hear, lang)}</Note>
      <div className="art-row" style={{ marginTop: "0.6rem" }}>
        <button type="button" className="art-btn is-primary" onClick={() => setOn(!on)}>
          {on ? <VolumeX className="size-4" aria-hidden="true" /> : <Volume2 className="size-4" aria-hidden="true" />}
          {L(on ? W.mute : W.listen, lang)}
        </button>
      </div>
    </ArtFrame>
  );
}

function Interference({ spec, lang }: SimProps) {
  const [sep, setSep] = useState(60);
  const [lam, setLam] = useState(24);
  const tt = useTime();
  const s1 = { x: 20, y: 100 - sep / 2 }, s2 = { x: 20, y: 100 + sep / 2 };
  const cells: ReactElement[] = [];
  const step = 8;
  for (let x = 24; x < 320; x += step) {
    for (let y = 4; y < 200; y += step) {
      const d1 = Math.hypot(x - s1.x, y - s1.y), d2 = Math.hypot(x - s2.x, y - s2.y);
      const ph = 2 * Math.PI * tt * 0.8;
      const a = Math.sin((2 * Math.PI * d1) / lam - ph) + Math.sin((2 * Math.PI * d2) / lam - ph);
      const v = (a + 2) / 4;
      cells.push(<rect key={`${x}-${y}`} x={x - step / 2} y={y - step / 2} width={step} height={step} fill={`hsl(205 80% ${15 + v * 70}%)`} />);
    }
  }
  return (
    <ArtFrame kind="experiment" title={L(W.interference, lang)} body={spec.body || L(W.interferenceHint, lang)}>
      <Stage w={320} h={200} label={L(W.interference, lang)} bg="#0c4a6e">
        {cells}
        <circle cx={s1.x} cy={s1.y} r="5" fill="#facc15" />
        <circle cx={s2.x} cy={s2.y} r="5" fill="#facc15" />
      </Stage>
      <Controls>
        <Slider label={L(W.sep, lang)} value={sep} min={20} max={120} step={10} digits={0} lang={lang} onChange={setSep} />
        <Slider label={L(W.lambda, lang)} value={lam} min={12} max={40} step={2} digits={0} lang={lang} onChange={setLam} />
      </Controls>
    </ArtFrame>
  );
}

const COLOURS = { red: [650, "#ef4444"], green: [530, "#22c55e"], blue: [450, "#3b82f6"] } as const;
const CN = { red: t("red", "կարմիր", "красный"), green: t("green", "կանաչ", "зелёный"), blue: t("blue", "կապույտ", "синий") };

function Slits({ spec, lang }: SimProps) {
  const [col, setCol] = useState<keyof typeof COLOURS>("red");
  const [d, setD] = useState(0.2); // mm
  const [lnm, color] = COLOURS[col];
  const Lm = 1; // m to the screen
  const dx = ((lnm * 1e-9 * Lm) / (d * 1e-3)) * 1000; // mm
  const px = dx * 12;
  return (
    <ArtFrame kind="experiment" title={L(W.slits, lang)} body={spec.body || L(W.slitsHint, lang)}>
      <Stage w={320} h={200} label={L(W.slits, lang)} bg="#020617">
        <rect x="10" y="92" width="40" height="16" rx="4" fill={color} />
        <line x1="50" x2="110" y1="100" y2="100" stroke={color} strokeWidth="6" opacity="0.7" />
        <rect x="110" y="10" width="6" height="180" fill="#64748b" />
        <rect x="110" y={100 - d * 60 - 3} width="6" height="4" fill="#020617" />
        <rect x="110" y={100 + d * 60 - 1} width="6" height="4" fill="#020617" />
        {Array.from({ length: 30 }, (_, i) => <line key={i} x1="116" y1={100 + (i % 2 ? 1 : -1) * d * 60} x2="280" y2={10 + i * 6} stroke={color} strokeWidth="0.6" opacity="0.25" />)}
        {Array.from({ length: 180 }, (_, i) => {
          const y = 10 + i;
          const I = Math.cos((Math.PI * (y - 100)) / px) ** 2 * Math.exp(-(((y - 100) / 110) ** 2));
          return <rect key={i} x="280" y={y} width="20" height="1.2" fill={color} opacity={I} />;
        })}
        <rect x="300" y="10" width="4" height="180" fill="#e2e8f0" />
      </Stage>
      <Readouts items={[[L(W.lambda, lang), `${lnm} ${un("nm", lang)}`], [L(W.fringe, lang), `${fmt(dx, 2, lang)} ${un("mm", lang)}`, color]]} />
      <Controls>
        <p className="art-ctrl-label">{L(W.colour, lang)}</p>
        <Choice value={col} options={(Object.keys(COLOURS) as Array<keyof typeof COLOURS>).map((k) => [k, L(CN[k], lang)])} onChange={setCol} />
        <Slider label={L(W.slitSep, lang)} value={d} min={0.1} max={0.5} step={0.05} unit={un("mm", lang)} digits={2} lang={lang} onChange={setD} />
      </Controls>
    </ArtFrame>
  );
}

function Modulation({ spec, lang }: SimProps) {
  const [mode, setMode] = useState<"am" | "fm">("am");
  const [show, setShow] = useState(true);
  const sig = (x: number) => Math.sin(2 * Math.PI * x * 1.5);
  const pts = Array.from({ length: 601 }, (_, i) => {
    const x = i / 600;
    const y = mode === "am" ? (1 + 0.6 * sig(x)) * Math.sin(2 * Math.PI * 30 * x) / 1.6 : Math.sin(2 * Math.PI * 30 * x + 8 * Math.sin(2 * Math.PI * 1.5 * x));
    return [x, y] as [number, number];
  });
  const s = Array.from({ length: 121 }, (_, i) => [i / 120, sig(i / 120) * (mode === "am" ? 0.6 / 1.6 + 0.62 : 1.1)] as [number, number]);
  return (
    <ArtFrame kind="experiment" title={L(W.am, lang)} body={spec.body || L(W.amHint, lang)}>
      <Graph x={[0, 1]} y={[-1.2, 1.2]} xLabel="t" yLabel="E" series={[{ pts, color: "#7c3aed" }, ...(show ? [{ pts: s, color: "#e11d48", dash: "4 3" }] : [])]} h={160} />
      <div className="art-chips">
        <Choice value={mode} options={[["am", "AM"], ["fm", "FM"]]} onChange={setMode} />
        <Toggle on={show} label={L(W.signal, lang)} onChange={setShow} />
      </div>
    </ArtFrame>
  );
}
