"use client";

import { useEffect, useRef, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Controls, fmt, Graph, Note, Readouts, Slider, Stage, Toggle } from "../kit";
import { L, t } from "../labels";

const W = {
  ohm: t("Experiment: Ohm's law", "Փորձ․ Օհմի օրենքը", "Опыт: закон Ома"),
  ohmHint: t(
    "Change the voltage and the resistance. Watch the electrons, the ammeter and the dot on the I–U graph.",
    "Փոխի՛ր լարումը և դիմադրությունը։ Հետևի՛ր էլեկտրոններին, ամպերաչափին և I–U գրաֆիկի կետին։",
    "Меняй напряжение и сопротивление. Следи за электронами, амперметром и точкой на графике I–U.",
  ),
  series: t("Experiment: bulbs in series", "Փորձ․ հաջորդաբար միացված լամպեր", "Опыт: последовательное соединение"),
  seriesHint: t(
    "Tap a bulb to unscrew it. In series one path carries the whole current, so one broken bulb stops them all.",
    "Սեղմի՛ր լամպին՝ այն հանելու համար։ Հաջորդական միացման դեպքում հոսանքն ունի մեկ ճանապարհ, ուստի մեկ լամպը հանելիս բոլորը հանգչում են։",
    "Нажми на лампу, чтобы выкрутить её. При последовательном соединении у тока один путь: выкрутишь одну лампу, погаснут все.",
  ),
  parallel: t("Experiment: bulbs in parallel", "Փորձ․ զուգահեռ միացված լամպեր", "Опыт: параллельное соединение"),
  parallelHint: t(
    "Tap a bulb to unscrew it. In parallel each bulb has its own path and the same voltage, so the other one keeps shining.",
    "Սեղմի՛ր լամպին՝ այն հանելու համար։ Զուգահեռ միացման դեպքում ամեն լամպ ունի իր ճանապարհը և նույն լարումը, ուստի մյուսը շարունակում է լուսավորել։",
    "Нажми на лампу, чтобы выкрутить её. При параллельном соединении у каждой лампы свой путь и то же напряжение, поэтому другая продолжает гореть.",
  ),
  rheostat: t("Experiment: the rheostat", "Փորձ․ ռեոստատ", "Опыт: реостат"),
  rheostatHint: t(
    "Move the slider of the rheostat. A longer piece of wire in the circuit means more resistance, less current and a dimmer bulb.",
    "Շարժի՛ր ռեոստատի սահնակը։ Շղթայում լարի ավելի երկար կտորը նշանակում է ավելի մեծ դիմադրություն, փոքր հոսանք և աղոտ լամպ։",
    "Двигай ползунок реостата. Чем длиннее кусок провода в цепи, тем больше сопротивление, меньше ток и тусклее лампа.",
  ),
  fuse: t("Experiment: overload and the fuse", "Փորձ․ գերբեռնվածություն և ապահովիչ", "Опыт: перегрузка и предохранитель"),
  fuseHint: t(
    "Switch on appliances one after another. Every appliance adds current. Above 10 A the fuse melts and saves the wiring.",
    "Միացրո՛ւ սարքերը մեկը մյուսի հետևից։ Ամեն սարք ավելացնում է հոսանքը։ 10 Ա-ից ավելի դեպքում ապահովիչը հալվում է և պաշտպանում հաղորդալարերը։",
    "Включай приборы один за другим. Каждый прибор добавляет ток. Больше 10 А предохранитель плавится и спасает проводку.",
  ),
  emf: t("Experiment: EMF and internal resistance", "Փորձ․ ԷլՇՈւ և ներքին դիմադրություն", "Опыт: ЭДС и внутреннее сопротивление"),
  emfHint: t(
    "Make the outer resistance small. The current grows, but the voltage at the terminals falls: part of the EMF is used inside the battery.",
    "Փոքրացրո՛ւ արտաքին դիմադրությունը։ Հոսանքը մեծանում է, բայց սեղմակների լարումը փոքրանում է․ ԷլՇՈւ-ի մի մասը ծախսվում է մարտկոցի ներսում։",
    "Уменьши внешнее сопротивление. Ток растёт, а напряжение на клеммах падает: часть ЭДС тратится внутри источника.",
  ),
  voltage: t("Voltage U", "Լարում U", "Напряжение U"),
  resistance: t("Resistance R", "Դիմադրություն R", "Сопротивление R"),
  current: t("Current I", "Հոսանքի ուժ I", "Сила тока I"),
  power: t("Power P", "Հզորություն P", "Мощность P"),
  total: t("Total resistance", "Ընդհանուր դիմադրություն", "Общее сопротивление"),
  bulb: t("Bulb", "Լամպ", "Лампа"),
  slider: t("Rheostat slider", "Ռեոստատի սահնակ", "Ползунок реостата"),
  short: t("Short circuit!", "Կարճ միացում։", "Короткое замыкание!"),
  blown: t("The fuse has melted: the circuit is open. Switch something off and replace the fuse.", "Ապահովիչը հալվեց․ շղթան բաց է։ Անջատի՛ր որևէ սարք և փոխի՛ր ապահովիչը։", "Предохранитель расплавился: цепь разомкнута. Выключи что-нибудь и замени предохранитель."),
  replace: t("New fuse", "Նոր ապահովիչ", "Новый предохранитель"),
  shortBlown: t("Short circuit: the resistance is almost zero, the current is huge. The fuse melted at once.", "Կարճ միացում․ դիմադրությունը համարյա զրո է, հոսանքը՝ հսկայական։ Ապահովիչն անմիջապես հալվեց։", "Короткое замыкание: сопротивление почти ноль, ток огромный. Предохранитель сразу расплавился."),
  emfL: t("EMF ε", "ԷլՇՈւ ε", "ЭДС ε"),
  inner: t("Internal resistance r", "Ներքին դիմադրություն r", "Внутреннее сопротивление r"),
  outer: t("Outer resistance R", "Արտաքին դիմադրություն R", "Внешнее сопротивление R"),
  terminal: t("Terminal voltage U", "Սեղմակների լարում U", "Напряжение на клеммах U"),
  scI: t("Short-circuit current", "Կարճ միացման հոսանք", "Ток короткого замыкания"),
  lamp: t("Lamp 100 W", "Լամպ 100 Վտ", "Лампа 100 Вт"),
  tv: t("TV 150 W", "Հեռուստացույց 150 Վտ", "Телевизор 150 Вт"),
  iron: t("Iron 1000 W", "Արդուկ 1000 Վտ", "Утюг 1000 Вт"),
  heater: t("Heater 1500 W", "Ջեռուցիչ 1500 Վտ", "Обогреватель 1500 Вт"),
  kettle: t("Kettle 2000 W", "Թեյնիկ 2000 Վտ", "Чайник 2000 Вт"),
};
const U = {
  V: t("V", "Վ", "В"),
  A: t("A", "Ա", "А"),
  Ohm: t("Ω", "Օմ", "Ом"),
  W: t("W", "Վտ", "Вт"),
};

type P = [number, number];
function along(poly: P[], s: number): P {
  let rest = s;
  for (let i = 0; i < poly.length - 1; i++) {
    const [x1, y1] = poly[i], [x2, y2] = poly[i + 1];
    const len = Math.hypot(x2 - x1, y2 - y1);
    if (rest <= len) return [x1 + ((x2 - x1) * rest) / len, y1 + ((y2 - y1) * rest) / len];
    rest -= len;
  }
  return poly[poly.length - 1];
}
const lengthOf = (poly: P[]) => poly.slice(1).reduce((s, p, i) => s + Math.hypot(p[0] - poly[i][0], p[1] - poly[i][1]), 0);

/** Distance travelled by the electrons on each path, accumulated frame by frame at the current speeds. */
function useFlow(speeds: number[]) {
  const sp = useRef(speeds);
  sp.current = speeds;
  const [off, setOff] = useState<number[]>(() => speeds.map(() => 0));
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    let id = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      setOff((o) => sp.current.map((v, i) => ((o[i] ?? 0) + v * dt) % 1000));
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);
  return off;
}

function Electrons({ poly, offset, gap = 18 }: { poly: P[]; offset: number; gap?: number }) {
  const len = lengthOf(poly);
  const n = Math.floor(len / gap);
  return (
    <g>
      {Array.from({ length: n }, (_, i) => {
        const [x, y] = along(poly, (((i * gap + offset) % len) + len) % len);
        return <circle key={i} cx={x} cy={y} r="2.6" fill="#2563eb" />;
      })}
    </g>
  );
}

/* schematic symbols, drawn centred on (x, y) */
function Battery({ x, y, vertical = true, label }: { x: number; y: number; vertical?: boolean; label?: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${vertical ? 0 : 90})`}>
      <rect x="-14" y="-8" width="28" height="16" fill="#fbfcff" />
      <line x1="-12" x2="12" y1="-4" y2="-4" stroke="#1e1b4b" strokeWidth="3" />
      <line x1="-6" x2="6" y1="4" y2="4" stroke="#1e1b4b" strokeWidth="5" />
      <text x="16" y="-3" className="sim-tag" fill="#e11d48">+</text>
      <text x="16" y="10" className="sim-tag" fill="#2563eb">−</text>
      {label ? <text x="-18" y="4" textAnchor="end" className="sim-tag" fill="#1e1b4b">{label}</text> : null}
    </g>
  );
}
function Resistor({ x, y, vertical = false, label, fill = "#fff" }: { x: number; y: number; vertical?: boolean; label?: string; fill?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={vertical ? -7 : -20} y={vertical ? -20 : -7} width={vertical ? 14 : 40} height={vertical ? 40 : 14} fill={fill} stroke="#1e1b4b" strokeWidth="2.2" rx="2" />
      {label ? <text x={vertical ? 12 : 0} y={vertical ? 4 : -12} textAnchor={vertical ? "start" : "middle"} className="sim-tag" fill="#1e1b4b">{label}</text> : null}
    </g>
  );
}
function Meter({ x, y, letter, value, color }: { x: number; y: number; letter: string; value: string; color: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="12" fill="#fff" stroke={color} strokeWidth="2.5" />
      <text y="4.5" textAnchor="middle" className="sim-tag is-plain" fill={color}>{letter}</text>
      <rect x="-24" y="15" width="48" height="15" rx="5" fill={color} />
      <text y="26" textAnchor="middle" className="sim-tag is-plain" fill="#fff">{value}</text>
    </g>
  );
}
function Bulb({ x, y, glow, out, onClick, label }: { x: number; y: number; glow: number; out?: boolean; onClick?: () => void; label?: string }) {
  const g = Math.max(0, Math.min(1, glow));
  return (
    <g transform={`translate(${x} ${y})`} onClick={onClick} style={onClick ? { cursor: "pointer" } : undefined} role={onClick ? "button" : undefined}>
      {g > 0.02 && !out ? <circle r={14 + 16 * g} fill="#fde047" opacity={0.25 + 0.45 * g} /> : null}
      <circle r="11" fill={out ? "#e2e8f0" : g > 0.02 ? `hsl(50 100% ${92 - 30 * g}%)` : "#fff"} stroke="#1e1b4b" strokeWidth="2.2" strokeDasharray={out ? "3 3" : undefined} />
      <line x1="-7.5" y1="-7.5" x2="7.5" y2="7.5" stroke="#1e1b4b" strokeWidth="2" opacity={out ? 0.3 : 1} />
      <line x1="-7.5" y1="7.5" x2="7.5" y2="-7.5" stroke="#1e1b4b" strokeWidth="2" opacity={out ? 0.3 : 1} />
      {label ? <text y="-17" textAnchor="middle" className="sim-tag" fill="#1e1b4b">{label}</text> : null}
    </g>
  );
}
const wire = (pts: P[], key?: string) => <polyline key={key} points={pts.map((p) => p.join(",")).join(" ")} fill="none" stroke="#475569" strokeWidth="2.5" strokeLinejoin="round" />;

export default function Circuit({ spec, lang }: SimProps) {
  const mode = spec.opts.mode ?? "ohm";
  if (mode === "series" || mode === "parallel") return <Bulbs spec={spec} lang={lang} parallel={mode === "parallel"} />;
  if (mode === "fuse") return <Fuse spec={spec} lang={lang} />;
  if (mode === "emf") return <Emf spec={spec} lang={lang} />;
  if (mode === "rheostat") return <Rheostat spec={spec} lang={lang} />;
  return <Ohm spec={spec} lang={lang} />;
}

// one loop: battery on the left, electrons go from − (bottom) round to + (top)
const LOOP: P[] = [[40, 108], [40, 160], [280, 160], [280, 40], [40, 40], [40, 92]];

function Ohm({ spec, lang }: SimProps) {
  const [u, setU] = useState(Number(spec.opts.u ?? 6));
  const [r, setR] = useState(Number(spec.opts.r ?? 10));
  const i = u / r;
  const off = useFlow([i * 40]);
  const v = L(U.V, lang), a = L(U.A, lang), o = L(U.Ohm, lang);
  const line: Array<[number, number]> = [[0, 0], [12, 12 / r]];
  return (
    <ArtFrame kind="experiment" title={L(W.ohm, lang)} body={spec.body || L(W.ohmHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={320} h={200} label={L(W.ohm, lang)}>
          {wire(LOOP)}
          {wire([[130, 40], [130, 12], [148, 12]])}
          {wire([[172, 12], [190, 12], [190, 40]])}
          <Electrons poly={LOOP.slice().reverse()} offset={off[0]} />
          <Battery x={40} y={100} label={`${fmt(u, 1, lang)} ${v}`} />
          <Resistor x={160} y={40} label={`R = ${fmt(r, 0, lang)} ${o}`} />
          <Meter x={160} y={160} letter="A" value={`${fmt(i, 2, lang)} ${a}`} color="#d97706" />
          <Meter x={160} y={12} letter="V" value={`${fmt(u, 1, lang)} ${v}`} color="#7c3aed" />
          <Bulb x={280} y={100} glow={(u * i) / 20} />
        </Stage>
        <Graph x={[0, 12]} y={[0, 2.5]} series={[{ pts: line, color: "#94a3b8", dash: "4 3" }]} dots={[[u, i, "#d97706"]]} xLabel={`U, ${v}`} yLabel={`I, ${a}`} />
      </div>
      <Readouts items={[[L(W.voltage, lang), `${fmt(u, 1, lang)} ${v}`, "#7c3aed"], [L(W.current, lang), `${fmt(i, 2, lang)} ${a}`, "#d97706"], [L(W.power, lang), `${fmt(u * i, 1, lang)} ${L(U.W, lang)}`]]} />
      <Controls>
        <Slider label={L(W.voltage, lang)} value={u} min={0} max={12} step={0.5} unit={v} lang={lang} onChange={setU} />
        <Slider label={L(W.resistance, lang)} value={r} min={5} max={30} step={1} unit={o} digits={0} lang={lang} onChange={setR} />
      </Controls>
    </ArtFrame>
  );
}

function Bulbs({ spec, lang, parallel }: SimProps & { parallel: boolean }) {
  const u = 12;
  const [r1, setR1] = useState(6);
  const [r2, setR2] = useState(12);
  const [in1, setIn1] = useState(true);
  const [in2, setIn2] = useState(true);
  const v = L(U.V, lang), a = L(U.A, lang), o = L(U.Ohm, lang);
  let i1 = 0, i2 = 0, rt = Infinity;
  if (parallel) {
    i1 = in1 ? u / r1 : 0;
    i2 = in2 ? u / r2 : 0;
    rt = i1 + i2 > 0 ? u / (i1 + i2) : Infinity;
  } else if (in1 && in2) {
    rt = r1 + r2;
    i1 = i2 = u / rt;
  }
  const it = parallel ? i1 + i2 : i1;
  const off = useFlow(parallel ? [it * 40, i1 * 40, i2 * 40] : [it * 40]);
  const main: P[] = parallel ? [[40, 108], [40, 160], [250, 160]] : LOOP.slice().reverse();
  const b1: P[] = [[160, 160], [160, 40]];
  const b2: P[] = [[250, 160], [250, 40]];
  const back: P[] = [[250, 40], [40, 40], [40, 92]];
  return (
    <ArtFrame kind="experiment" title={L(parallel ? W.parallel : W.series, lang)} body={spec.body || L(parallel ? W.parallelHint : W.seriesHint, lang)}>
      <Stage w={320} h={200} label={L(parallel ? W.parallel : W.series, lang)}>
        {parallel ? (
          <>
            {wire([[40, 108], [40, 160], [250, 160], [250, 40], [40, 40], [40, 92]])}
            {wire([[160, 160], [160, 40]])}
            {it > 0 ? <Electrons poly={[[40, 108], [40, 160], [160, 160]]} offset={off[0]} /> : null}
            {i1 > 0 ? <Electrons poly={b1} offset={off[1]} /> : null}
            {i2 > 0 ? <Electrons poly={[[160, 160], ...b2]} offset={off[2]} /> : null}
            {it > 0 ? <Electrons poly={back.slice(0, 1).concat([[160, 40]]).concat(back.slice(1))} offset={off[0]} /> : null}
            <Bulb x={160} y={100} glow={(i1 * i1 * r1) / 24} out={!in1} onClick={() => setIn1(!in1)} label="1" />
            <Bulb x={250} y={100} glow={(i2 * i2 * r2) / 24} out={!in2} onClick={() => setIn2(!in2)} label="2" />
            <Meter x={100} y={160} letter="A" value={`${fmt(it, 2, lang)} ${a}`} color="#d97706" />
          </>
        ) : (
          <>
            {wire(LOOP)}
            {it > 0 ? <Electrons poly={main} offset={off[0]} /> : null}
            <Bulb x={120} y={40} glow={(i1 * i1 * r1) / 24} out={!in1} onClick={() => setIn1(!in1)} label="1" />
            <Bulb x={210} y={40} glow={(i2 * i2 * r2) / 24} out={!in2} onClick={() => setIn2(!in2)} label="2" />
            <Meter x={160} y={160} letter="A" value={`${fmt(it, 2, lang)} ${a}`} color="#d97706" />
          </>
        )}
        <Battery x={40} y={100} label={`${u} ${v}`} />
      </Stage>
      <Readouts
        items={[
          [`I₁`, `${fmt(i1, 2, lang)} ${a}`, "#d97706"],
          [`I₂`, `${fmt(i2, 2, lang)} ${a}`, "#d97706"],
          [`U₁`, `${fmt(i1 * r1, 1, lang)} ${v}`, "#7c3aed"],
          [`U₂`, `${fmt(i2 * r2, 1, lang)} ${v}`, "#7c3aed"],
          [L(W.total, lang), Number.isFinite(rt) ? `${fmt(rt, 1, lang)} ${o}` : "∞"],
        ]}
      />
      <Controls>
        <Slider label={`R₁`} value={r1} min={2} max={24} unit={o} digits={0} lang={lang} onChange={setR1} />
        <Slider label={`R₂`} value={r2} min={2} max={24} unit={o} digits={0} lang={lang} onChange={setR2} />
      </Controls>
    </ArtFrame>
  );
}

function Rheostat({ spec, lang }: SimProps) {
  const u = 12, rb = 6;
  const [k, setK] = useState(0.5); // share of the rheostat wire in the circuit
  const rr = 20 * k;
  const i = u / (rb + rr);
  const off = useFlow([i * 40]);
  const v = L(U.V, lang), a = L(U.A, lang), o = L(U.Ohm, lang);
  const sx = 120 + 80 * k;
  return (
    <ArtFrame kind="experiment" title={L(W.rheostat, lang)} body={spec.body || L(W.rheostatHint, lang)}>
      <Stage w={320} h={200} label={L(W.rheostat, lang)}>
        {wire([[40, 108], [40, 160], [280, 160], [280, 40], [200, 40]])}
        {wire([[sx, 22], [sx, 16], [100, 16], [100, 40], [40, 40], [40, 92]])}
        <Electrons poly={[[40, 108], [40, 160], [280, 160], [280, 40], [200, 40], [sx, 40]]} offset={off[0]} />
        <rect x="120" y="32" width="80" height="16" fill="#fff" stroke="#1e1b4b" strokeWidth="2.2" rx="2" />
        {Array.from({ length: 14 }, (_, n) => <line key={n} x1={124 + n * 5.5} x2={124 + n * 5.5} y1="34" y2="46" stroke={124 + n * 5.5 > sx ? "#d97706" : "#cbd5e1"} strokeWidth="2" />)}
        <polygon points={`${sx - 5},22 ${sx + 5},22 ${sx},31`} fill="#e11d48" />
        <text x="160" y="62" textAnchor="middle" className="sim-tag" fill="#1e1b4b">{fmt(rr, 1, lang)} {o}</text>
        <Battery x={40} y={100} label={`${u} ${v}`} />
        <Bulb x={280} y={100} glow={(i * i * rb) / 24} />
        <Meter x={160} y={160} letter="A" value={`${fmt(i, 2, lang)} ${a}`} color="#d97706" />
      </Stage>
      <Readouts items={[[L(W.resistance, lang), `${fmt(rb + rr, 1, lang)} ${o}`], [L(W.current, lang), `${fmt(i, 2, lang)} ${a}`, "#d97706"], [L(W.power, lang), `${fmt(i * i * rb, 1, lang)} ${L(U.W, lang)}`]]} />
      <Controls>
        <Slider label={L(W.slider, lang)} value={Math.round(k * 100)} min={0} max={100} step={5} unit="%" digits={0} lang={lang} onChange={(n) => setK(n / 100)} />
      </Controls>
    </ArtFrame>
  );
}

const APPLIANCES = [["lamp", 100], ["tv", 150], ["iron", 1000], ["heater", 1500], ["kettle", 2000]] as const;

function Fuse({ spec, lang }: SimProps) {
  const [on, setOn] = useState<Record<string, boolean>>({ lamp: true });
  const [blown, setBlown] = useState<"" | "over" | "short">("");
  const p = APPLIANCES.reduce((s, [k, w]) => s + (on[k] ? w : 0), 0);
  const i = blown ? 0 : p / 220;
  useEffect(() => {
    if (!blown && i > 10) setBlown("over");
  }, [i, blown]);
  const off = useFlow([Math.min(i, 12) * 12]);
  const a = L(U.A, lang);
  const pct = Math.min(1, p / 220 / 12);
  return (
    <ArtFrame kind="experiment" title={L(W.fuse, lang)} body={spec.body || L(W.fuseHint, lang)}>
      <Stage w={320} h={150} label={L(W.fuse, lang)}>
        {wire([[20, 30], [300, 30]])}
        {wire([[20, 130], [300, 130]])}
        {i > 0 ? <Electrons poly={[[20, 30], [300, 30]]} offset={off[0]} gap={14} /> : null}
        <text x="14" y="84" className="sim-tag" fill="#1e1b4b">~220 {L(U.V, lang)}</text>
        <g transform="translate(60 30)">
          <rect x="-16" y="-7" width="32" height="14" rx="3" fill={blown ? "#fecaca" : "#fff"} stroke="#1e1b4b" strokeWidth="2" />
          {blown ? <path d="M-14 0 L-4 0 M4 0 L14 0" stroke="#dc2626" strokeWidth="2" /> : <line x1="-14" x2="14" stroke="#d97706" strokeWidth="2" />}
          <text y="-11" textAnchor="middle" className="sim-tag" fill="#1e1b4b">10 {a}</text>
        </g>
        {APPLIANCES.map(([k], n) => {
          const x = 110 + n * 44;
          const lit = on[k] && !blown;
          return (
            <g key={k}>
              {wire([[x, 30], [x, 130]])}
              <rect x={x - 12} y={66} width="24" height="28" rx="6" fill={lit ? "#fde68a" : "#f1f5f9"} stroke="#1e1b4b" strokeWidth="1.8" />
              <text x={x} y={84} textAnchor="middle" className="sim-tag is-plain" fill="#1e1b4b">{["💡", "📺", "👕", "🔥", "☕"][n]}</text>
            </g>
          );
        })}
        <rect x="100" y="140" width="210" height="6" rx="3" fill="#e2e8f0" />
        <rect x="100" y="140" width={210 * pct} height="6" rx="3" fill={pct > 10 / 12 ? "#dc2626" : "#16a34a"} />
        <line x1={100 + 210 * (10 / 12)} x2={100 + 210 * (10 / 12)} y1="137" y2="149" stroke="#1e1b4b" strokeWidth="1.5" />
      </Stage>
      <div className="art-chips">
        {APPLIANCES.map(([k]) => (
          <Toggle key={k} on={!!on[k]} label={L(W[k], lang)} onChange={(x) => setOn({ ...on, [k]: x })} />
        ))}
      </div>
      <Readouts items={[[L(W.power, lang), `${p} ${L(U.W, lang)}`], [L(W.current, lang), `${fmt(blown ? 0 : p / 220, 1, lang)} ${a}`, p / 220 > 10 ? "#dc2626" : "#d97706"]]} />
      {blown ? (
        <Note tone="bad">{L(blown === "short" ? W.shortBlown : W.blown, lang)}</Note>
      ) : null}
      <div className="art-row" style={{ marginTop: "0.6rem" }}>
        <button type="button" className="art-btn" onClick={() => setBlown("short")} disabled={!!blown}>⚡ {L(W.short, lang)}</button>
        <button type="button" className="art-btn is-primary" onClick={() => p / 220 <= 10 && setBlown("")} disabled={!blown || p / 220 > 10}>{L(W.replace, lang)}</button>
      </div>
    </ArtFrame>
  );
}

function Emf({ spec, lang }: SimProps) {
  const [e, setE] = useState(12);
  const [r, setR] = useState(2);
  const [R, setRR] = useState(10);
  const i = e / (R + r);
  const u = i * R;
  const off = useFlow([i * 25]);
  const v = L(U.V, lang), a = L(U.A, lang), o = L(U.Ohm, lang);
  const isc = e / r;
  return (
    <ArtFrame kind="experiment" title={L(W.emf, lang)} body={spec.body || L(W.emfHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={320} h={200} label={L(W.emf, lang)}>
          {wire(LOOP)}
          <Electrons poly={LOOP.slice().reverse()} offset={off[0]} />
          <rect x="14" y="62" width="52" height="76" rx="8" fill="none" stroke="#94a3b8" strokeDasharray="4 3" />
          <Battery x={40} y={80} label={`ε ${fmt(e, 0, lang)}`} />
          <Resistor x={40} y={118} vertical label="r" fill="#fef3c7" />
          <Resistor x={160} y={40} label={`R = ${fmt(R, 1, lang)} ${o}`} />
          <Meter x={160} y={160} letter="A" value={`${fmt(i, 2, lang)} ${a}`} color="#d97706" />
          <Meter x={280} y={100} letter="V" value={`${fmt(u, 1, lang)} ${v}`} color="#7c3aed" />
        </Stage>
        <Graph x={[0, Math.max(6, isc)]} y={[0, 15]} series={[{ pts: [[0, e], [isc, 0]], color: "#7c3aed" }]} dots={[[i, u, "#d97706"]]} xLabel={`I, ${a}`} yLabel={`U, ${v}`} />
      </div>
      <Readouts items={[[L(W.current, lang), `${fmt(i, 2, lang)} ${a}`, "#d97706"], [L(W.terminal, lang), `${fmt(u, 2, lang)} ${v}`, "#7c3aed"], ["I·r", `${fmt(i * r, 2, lang)} ${v}`], [L(W.scI, lang), `${fmt(isc, 1, lang)} ${a}`]]} />
      <Controls>
        <Slider label={L(W.emfL, lang)} value={e} min={1.5} max={12} step={0.5} unit={v} lang={lang} onChange={setE} />
        <Slider label={L(W.inner, lang)} value={r} min={0.5} max={4} step={0.5} unit={o} lang={lang} onChange={setR} />
        <Slider label={L(W.outer, lang)} value={R} min={0.5} max={20} step={0.5} unit={o} lang={lang} onChange={setRR} />
      </Controls>
    </ArtFrame>
  );
}
