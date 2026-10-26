"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Arrow, Choice, Controls, fmt, Note, PlayBar, Readouts, Slider, Stage, Toggle, useClock, useDrag, useLoop } from "../kit";
import { L, t, UI, un } from "../labels";

const W = {
  bar: t("Experiment: the field of a magnet", "Փորձ․ մագնիսի դաշտը", "Опыт: поле магнита"),
  barHint: t(
    "Drag the magnet and watch the compass needles. Field lines leave the north pole and enter the south pole.",
    "Քաշի՛ր մագնիսը և հետևի՛ր կողմնացույցի սլաքներին։ Ուժագծերը դուրս են գալիս հյուսիսային բևեռից և մտնում հարավային բևեռ։",
    "Двигай магнит и следи за стрелками компасов. Линии поля выходят из северного полюса и входят в южный.",
  ),
  earth: t("The Earth is a giant magnet", "Երկիրը հսկա մագնիս է", "Земля — огромный магнит"),
  earthHint: t(
    "The compass points north because the Earth's magnetic south pole is near the geographic North Pole. Drag the compass around the planet.",
    "Կողմնացույցը ցույց է տալիս հյուսիս, որովհետև Երկրի մագնիսական հարավային բևեռը գտնվում է աշխարհագրական Հյուսիսային բևեռի մոտ։ Քաշի՛ր կողմնացույցը մոլորակի շուրջ։",
    "Компас показывает на север, потому что южный магнитный полюс Земли находится у географического Северного полюса. Перемещай компас вокруг планеты.",
  ),
  wire: t("Experiment: Oersted's discovery", "Փորձ․ Էրստեդի բացահայտումը", "Опыт: открытие Эрстеда"),
  wireHint: t(
    "A current makes a magnetic field in circles round the wire. Switch the current on and reverse it: the compass needles turn. Right-hand rule: thumb along the current, fingers curl along the field.",
    "Հոսանքը հաղորդալարի շուրջ ստեղծում է օղակաձև մագնիսական դաշտ։ Միացրո՛ւ հոսանքը և փոխի՛ր ուղղությունը․ կողմնացույցի սլաքները պտտվում են։ Աջ ձեռքի կանոն․ բութը՝ հոսանքի ուղղությամբ, մատները՝ դաշտի ուղղությամբ։",
    "Ток создаёт вокруг провода магнитное поле в виде колец. Включи ток и поменяй направление: стрелки компасов поворачиваются. Правило правой руки: большой палец по току, согнутые пальцы по полю.",
  ),
  coil: t("Experiment: build an electromagnet", "Փորձ․ պատրաստի՛ր էլեկտրամագնիս", "Опыт: собери электромагнит"),
  coilHint: t(
    "More turns, more current and an iron core make the electromagnet stronger. Count the paper clips it can lift.",
    "Ավելի շատ գալարներ, ավելի մեծ հոսանք և երկաթե միջուկ․ էլեկտրամագնիսն ուժեղանում է։ Հաշվի՛ր, քանի ամրակ է այն բարձրացնում։",
    "Больше витков, больше ток и железный сердечник — электромагнит сильнее. Считай, сколько скрепок он поднимает.",
  ),
  force: t("Experiment: the force on a current", "Փորձ․ ուժ հոսանքակիր հաղորդչի վրա", "Опыт: сила, действующая на ток"),
  forceHint: t(
    "A wire with current between the poles of a magnet is pushed sideways: F = B·I·l. Reverse the current and the force reverses too (left-hand rule).",
    "Մագնիսի բևեռների միջև հոսանքակիր հաղորդալարը հրվում է կողք․ F = B·I·l։ Փոխի՛ր հոսանքի ուղղությունը, և ուժն էլ կփոխի ուղղությունը (ձախ ձեռքի կանոն)։",
    "Провод с током между полюсами магнита отклоняется вбок: F = B·I·l. Поменяй направление тока — сила тоже поменяется (правило левой руки).",
  ),
  particle: t("Experiment: a charge in a magnetic field", "Փորձ․ լիցքը մագնիսական դաշտում", "Опыт: заряд в магнитном поле"),
  particleHint: t(
    "The Lorentz force is always at right angles to the motion, so the particle moves in a circle: r = m·v / (q·B).",
    "Լորենցի ուժը միշտ ուղղահայաց է շարժմանը, ուստի մասնիկը շարժվում է շրջանագծով․ r = m·v / (q·B)։",
    "Сила Лоренца всегда перпендикулярна движению, поэтому частица движется по окружности: r = m·v / (q·B).",
  ),
  flip: t("Turn the magnet over", "Շրջել մագնիսը", "Перевернуть магнит"),
  lines: t("Field lines", "Ուժագծեր", "Линии поля"),
  current: t("Current I", "Հոսանք I", "Ток I"),
  on: t("Current on", "Հոսանքը միացված է", "Ток включён"),
  reverse: t("Reverse the current", "Փոխել հոսանքի ուղղությունը", "Поменять направление тока"),
  turns: t("Turns", "Գալարներ", "Витков"),
  core: t("Iron core", "Երկաթե միջուկ", "Железный сердечник"),
  clips: t("Paper clips lifted", "Բարձրացված ամրակներ", "Поднято скрепок"),
  field: t("Magnetic induction B", "Մագնիսական ինդուկցիա B", "Магнитная индукция B"),
  speed: t("Speed v", "Արագություն v", "Скорость v"),
  sign: t("Charge", "Լիցք", "Заряд"),
  proton: t("proton (+)", "պրոտոն (+)", "протон (+)"),
  electron: t("electron (−)", "էլեկտրոն (−)", "электрон (−)"),
  radius: t("Radius r", "Շառավիղ r", "Радиус r"),
  geoN: t("Geographic North", "Աշխարհագրական հյուսիս", "Географический север"),
};

type V = { x: number; y: number };

/** Field of a dipole made of two "poles" at n and s. */
function dipole(p: V, n: V, s: V) {
  let bx = 0, by = 0;
  for (const [c, q] of [[n, 1], [s, -1]] as Array<[V, number]>) {
    const dx = p.x - c.x, dy = p.y - c.y, d = Math.max(8, Math.hypot(dx, dy));
    bx += (q * dx) / d ** 3;
    by += (q * dy) / d ** 3;
  }
  return { bx, by };
}

function fieldLines(n: V, s: V, count = 12, bounds = { w: 320, h: 200 }) {
  const out: string[] = [];
  for (let i = 0; i < count; i++) {
    const a = (i / count) * 2 * Math.PI;
    let x = n.x + Math.cos(a) * 6, y = n.y + Math.sin(a) * 6;
    let d = `M ${x.toFixed(1)} ${y.toFixed(1)}`;
    for (let k = 0; k < 400; k++) {
      const { bx, by } = dipole({ x, y }, n, s);
      const m = Math.hypot(bx, by) || 1;
      x += (bx / m) * 3;
      y += (by / m) * 3;
      d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
      if (Math.hypot(x - s.x, y - s.y) < 5 || x < -40 || x > bounds.w + 40 || y < -40 || y > bounds.h + 40) break;
    }
    out.push(d);
  }
  return out;
}

function Needle({ x, y, ang, size = 9 }: { x: number; y: number; ang: number; size?: number }) {
  const c = Math.cos(ang), s = Math.sin(ang);
  return (
    <g>
      <circle cx={x} cy={y} r={size + 2} fill="#fff" stroke="#cbd5e1" />
      <polygon points={`${x + c * size},${y + s * size} ${x - s * 2.5},${y + c * 2.5} ${x + s * 2.5},${y - c * 2.5}`} fill="#e11d48" />
      <polygon points={`${x - c * size},${y - s * size} ${x - s * 2.5},${y + c * 2.5} ${x + s * 2.5},${y - c * 2.5}`} fill="#64748b" />
    </g>
  );
}

export default function Magnet({ spec, lang }: SimProps) {
  const m = spec.opts.mode ?? "bar";
  if (m === "wire") return <Wire spec={spec} lang={lang} />;
  if (m === "coil") return <Coil spec={spec} lang={lang} />;
  if (m === "force") return <Force spec={spec} lang={lang} />;
  if (m === "particle") return <Particle spec={spec} lang={lang} />;
  if (m === "earth") return <Earth spec={spec} lang={lang} />;
  return <Bar spec={spec} lang={lang} />;
}

function Bar({ spec, lang }: SimProps) {
  const [c, setC] = useState<V>({ x: 160, y: 100 });
  const [flip, setFlip] = useState(false);
  const [lines, setLines] = useState(true);
  const drag = useDrag<"m">((p) => (Math.abs(p.x - c.x) < 46 && Math.abs(p.y - c.y) < 20 ? "m" : null), (_, p) => setC({ x: Math.min(270, Math.max(50, p.x)), y: Math.min(170, Math.max(30, p.y)) }));
  const n = { x: c.x + (flip ? -30 : 30), y: c.y }, s = { x: c.x + (flip ? 30 : -30), y: c.y };
  return (
    <ArtFrame kind="experiment" title={L(W.bar, lang)} body={spec.body || L(W.barHint, lang)}>
      <Stage w={320} h={200} label={L(W.bar, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        {lines ? fieldLines(n, s, 14).map((d, i) => <path key={i} d={d} fill="none" stroke="#c4b5fd" strokeWidth="1.2" />) : null}
        {Array.from({ length: 7 * 11 }, (_, i) => {
          const x = 20 + (i % 11) * 28, y = 18 + Math.floor(i / 11) * 28;
          if (Math.abs(x - c.x) < 52 && Math.abs(y - c.y) < 22) return null;
          const { bx, by } = dipole({ x, y }, n, s);
          return <Needle key={i} x={x} y={y} ang={Math.atan2(by, bx)} size={7} />;
        })}
        <g className="sim-handle">
          <rect x={c.x - 44} y={c.y - 13} width="44" height="26" fill={flip ? "#e11d48" : "#2563eb"} />
          <rect x={c.x} y={c.y - 13} width="44" height="26" fill={flip ? "#2563eb" : "#e11d48"} />
          <text x={c.x - 22} y={c.y + 5} textAnchor="middle" className="sim-tag is-plain" fill="#fff">{flip ? "N" : "S"}</text>
          <text x={c.x + 22} y={c.y + 5} textAnchor="middle" className="sim-tag is-plain" fill="#fff">{flip ? "S" : "N"}</text>
        </g>
      </Stage>
      <div className="art-chips">
        <button type="button" className="art-chip" onClick={() => setFlip(!flip)}>{L(W.flip, lang)}</button>
        <Toggle on={lines} label={L(W.lines, lang)} onChange={setLines} />
      </div>
    </ArtFrame>
  );
}

function Earth({ spec, lang }: SimProps) {
  const [cp, setCp] = useState<V>({ x: 250, y: 60 });
  const tilt = (11 * Math.PI) / 180;
  const ce = { x: 140, y: 100 };
  // magnetic south pole sits near the geographic north (top)
  const sPole = { x: ce.x + Math.sin(tilt) * 26, y: ce.y - Math.cos(tilt) * 26 };
  const nPole = { x: ce.x - Math.sin(tilt) * 26, y: ce.y + Math.cos(tilt) * 26 };
  const drag = useDrag<"c">((p) => (Math.hypot(p.x - cp.x, p.y - cp.y) < 22 ? "c" : null), (_, p) => {
    const d = Math.hypot(p.x - ce.x, p.y - ce.y);
    if (d > 72) setCp({ x: Math.min(305, Math.max(15, p.x)), y: Math.min(185, Math.max(15, p.y)) });
  });
  const { bx, by } = dipole(cp, nPole, sPole);
  return (
    <ArtFrame kind="look" title={L(W.earth, lang)} body={spec.body || L(W.earthHint, lang)}>
      <Stage w={320} h={200} label={L(W.earth, lang)} bg="#0f172a" svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        {fieldLines(nPole, sPole, 16, { w: 320, h: 200 }).map((d, i) => <path key={i} d={d} fill="none" stroke="#a78bfa" strokeWidth="1.2" opacity="0.8" />)}
        <circle cx={ce.x} cy={ce.y} r="60" fill="#1d4ed8" />
        <path d="M100 70 q 20 -20 40 -6 q 10 20 -12 30 q -20 6 -28 -24 Z M150 110 q 20 -10 30 10 q -6 22 -26 14 Z" fill="#16a34a" />
        <line x1={ce.x} y1={ce.y - 72} x2={ce.x} y2={ce.y + 72} stroke="#fff" strokeDasharray="4 3" opacity="0.6" />
        <text x={ce.x} y={ce.y - 76} textAnchor="middle" className="sim-tag" fill="#1e1b4b">{L(W.geoN, lang)}</text>
        <line x1={nPole.x} y1={nPole.y} x2={sPole.x} y2={sPole.y} stroke="#fbbf24" strokeWidth="5" />
        <text x={sPole.x + 6} y={sPole.y} className="sim-tag" fill="#2563eb">S</text>
        <text x={nPole.x - 14} y={nPole.y + 8} className="sim-tag" fill="#e11d48">N</text>
        <g className="sim-handle"><Needle x={cp.x} y={cp.y} ang={Math.atan2(by, bx)} size={14} /></g>
      </Stage>
      <p className="art-note">{L(UI.drag, lang)}</p>
    </ArtFrame>
  );
}

function Wire({ spec, lang }: SimProps) {
  const [on, setOn] = useState(true);
  const [dir, setDir] = useState(1);
  const c = { x: 160, y: 100 };
  return (
    <ArtFrame kind="experiment" title={L(W.wire, lang)} body={spec.body || L(W.wireHint, lang)}>
      <Stage w={320} h={200} label={L(W.wire, lang)}>
        {on ? [30, 55, 80].map((r) => <circle key={r} cx={c.x} cy={c.y} r={r} fill="none" stroke="#c4b5fd" strokeWidth="1.5" strokeDasharray="6 5" className="sim-flow" style={{ animationDirection: dir > 0 ? "reverse" : "normal" }} />) : null}
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i / 8) * 2 * Math.PI;
          const x = c.x + Math.cos(a) * 55, y = c.y + Math.sin(a) * 55;
          const ang = on ? a + (dir > 0 ? -Math.PI / 2 : Math.PI / 2) : -Math.PI / 2;
          return <g key={i} style={{ transition: "all 500ms ease" }}><Needle x={x} y={y} ang={ang} size={10} /></g>;
        })}
        <circle cx={c.x} cy={c.y} r="12" fill="#fde68a" stroke="#a16207" strokeWidth="2.5" />
        {on ? (dir > 0 ? <circle cx={c.x} cy={c.y} r="3.5" fill="#a16207" /> : <path d={`M${c.x - 6} ${c.y - 6} L ${c.x + 6} ${c.y + 6} M ${c.x + 6} ${c.y - 6} L ${c.x - 6} ${c.y + 6}`} stroke="#a16207" strokeWidth="2.5" />) : null}
        <text x="10" y="190" className="sim-small">{on ? (dir > 0 ? "⊙ I" : "⊗ I") : "I = 0"}</text>
      </Stage>
      <div className="art-chips">
        <Toggle on={on} label={L(W.on, lang)} onChange={setOn} />
        <button type="button" className="art-chip" onClick={() => setDir(-dir)}>{L(W.reverse, lang)}</button>
      </div>
    </ArtFrame>
  );
}

function Coil({ spec, lang }: SimProps) {
  const [n, setN] = useState(10);
  const [I, setI] = useState(1);
  const [core, setCore] = useState(false);
  const strength = n * I * (core ? 30 : 1);
  const clips = Math.min(12, Math.floor(strength / 25));
  const flow = useLoop(2, I > 0);
  return (
    <ArtFrame kind="experiment" title={L(W.coil, lang)} body={spec.body || L(W.coilHint, lang)}>
      <Stage w={320} h={200} label={L(W.coil, lang)}>
        {core ? <rect x="90" y="54" width="140" height="22" rx="4" fill="#94a3b8" /> : null}
        {Array.from({ length: n }, (_, i) => {
          const x = 96 + (i * 128) / Math.max(1, n - 1);
          return <ellipse key={i} cx={x} cy={65} rx="6" ry="22" fill="none" stroke="#b45309" strokeWidth="3" />;
        })}
        {I > 0 ? Array.from({ length: 4 }, (_, i) => <circle key={i} cx={96 + ((flow + i / 4) % 1) * 128} cy={87} r="2.5" fill="#2563eb" />) : null}
        <text x="78" y="70" textAnchor="end" className="sim-tag" fill="#2563eb">S</text>
        <text x="242" y="70" className="sim-tag" fill="#e11d48">N</text>
        <path d="M96 87 L 96 130 L 140 130 M 180 130 L 224 130 L 224 87" fill="none" stroke="#475569" strokeWidth="2" />
        <line x1="148" x2="148" y1="120" y2="140" stroke="#1e1b4b" strokeWidth="3" />
        <line x1="160" x2="160" y1="124" y2="136" stroke="#1e1b4b" strokeWidth="5" />
        {Array.from({ length: 12 }, (_, i) => {
          const lifted = i < clips;
          const x = 250 + (i % 4) * 14, y = lifted ? 60 + Math.floor(i / 4) * 14 : 182 - Math.floor(i / 4) * 6;
          return <rect key={i} x={x} y={y} width="10" height="5" rx="2.5" fill="none" stroke="#64748b" strokeWidth="1.8" style={{ transition: "all 500ms ease" }} />;
        })}
        <line x1="240" x2="310" y1="190" y2="190" stroke="#94a3b8" />
      </Stage>
      <Readouts items={[[L(W.clips, lang), String(clips), "#e11d48"]]} />
      <Controls>
        <Slider label={L(W.turns, lang)} value={n} min={3} max={20} digits={0} lang={lang} onChange={setN} />
        <Slider label={L(W.current, lang)} value={I} min={0} max={3} step={0.5} unit={un("A", lang)} lang={lang} onChange={setI} />
        <div className="art-chips"><Toggle on={core} label={L(W.core, lang)} onChange={setCore} /></div>
      </Controls>
    </ArtFrame>
  );
}

function Force({ spec, lang }: SimProps) {
  const [I, setI] = useState(3);
  const [B, setB] = useState(0.5);
  const l = 0.1;
  const F = B * I * l;
  const swing = F * 120; // px
  return (
    <ArtFrame kind="experiment" title={L(W.force, lang)} body={spec.body || L(W.forceHint, lang)}>
      <Stage w={320} h={200} label={L(W.force, lang)}>
        <path d="M70 40 L 70 170 L 250 170 L 250 40 L 210 40 L 210 130 L 110 130 L 110 40 Z" fill="#e11d48" opacity="0.15" />
        <rect x="70" y="40" width="40" height="90" fill="#e11d48" />
        <rect x="210" y="40" width="40" height="90" fill="#2563eb" />
        <text x="90" y="90" textAnchor="middle" className="sim-tag is-plain" fill="#fff">N</text>
        <text x="230" y="90" textAnchor="middle" className="sim-tag is-plain" fill="#fff">S</text>
        {Array.from({ length: 5 }, (_, i) => <Arrow key={i} x1={114} y1={52 + i * 16} x2={206} y2={52 + i * 16} color="#c4b5fd" width={1.2} head={5} />)}
        <line x1="140" y1="10" x2={160} y2={84 + swing * 0.1} stroke="#475569" strokeWidth="2" style={{ transition: "all 400ms ease" }} />
        <line x1="180" y1="10" x2={160} y2={84 + swing * 0.1} stroke="#475569" strokeWidth="2" style={{ transition: "all 400ms ease" }} />
        <g style={{ transition: "transform 400ms ease", transform: `translate(0px, ${-swing}px)` }}>
          <circle cx="160" cy="90" r="9" fill="#fde68a" stroke="#a16207" strokeWidth="2" />
          {I > 0 ? <circle cx="160" cy="90" r="3" fill="#a16207" /> : I < 0 ? <path d="M155 85 L 165 95 M 165 85 L 155 95" stroke="#a16207" strokeWidth="2" /> : null}
        </g>
        {I !== 0 ? <Arrow x1={160} y1={90 - swing - 12 * Math.sign(I)} x2={160} y2={90 - swing - 12 * Math.sign(I) - Math.sign(I) * (14 + Math.abs(F) * 120)} color="#059669" label="F" /> : null}
      </Stage>
      <Readouts items={[["F = B·I·l", `${fmt(Math.abs(F), 2, lang)} ${un("N", lang)}`, "#059669"], ["l", `${fmt(0.1, 1, lang)} ${un("m", lang)}`]]} />
      <Controls>
        <Slider label={L(W.current, lang)} value={I} min={-5} max={5} step={0.5} unit={un("A", lang)} lang={lang} onChange={setI} />
        <Slider label={L(W.field, lang)} value={B} min={0.1} max={1} step={0.1} unit={un("T", lang)} lang={lang} onChange={setB} />
      </Controls>
    </ArtFrame>
  );
}

function Particle({ spec, lang }: SimProps) {
  const [v, setV] = useState(4);
  const [B, setB] = useState(2);
  const [q, setQ] = useState<"p" | "e">("p");
  const clock = useClock();
  const r = (v / B) * 12; // px
  const w = v * 12 / r; // rad per second (scaled)
  const sgn = q === "p" ? 1 : -1;
  const start = { x: 40, y: 100 };
  const enter = 90;
  const tt = clock.t;
  const s = Math.min(tt * v * 12, 2000);
  let x: number, y: number;
  const trace: string[] = [`M ${start.x} ${start.y}`];
  if (s < enter - start.x) {
    x = start.x + s; y = start.y;
    trace.push(`L ${x} ${y}`);
  } else {
    const a = ((s - (enter - start.x)) / (v * 12)) * w;
    const cy = start.y - sgn * r;
    x = enter + r * Math.sin(a);
    y = cy + sgn * r * Math.cos(a);
    trace.push(`L ${enter} ${start.y}`);
    const steps = Math.min(120, Math.ceil(a * 10));
    for (let i = 1; i <= steps; i++) { const aa = (a * i) / steps; trace.push(`L ${(enter + r * Math.sin(aa)).toFixed(1)} ${(cy + sgn * r * Math.cos(aa)).toFixed(1)}`); }
  }
  return (
    <ArtFrame kind="experiment" title={L(W.particle, lang)} body={spec.body || L(W.particleHint, lang)}>
      <Stage w={320} h={200} label={L(W.particle, lang)}>
        <rect x={enter} y="0" width={320 - enter} height="200" fill="#f5f3ff" />
        {Array.from({ length: 70 }, (_, i) => <circle key={i} cx={enter + 14 + (i % 10) * 22} cy={12 + Math.floor(i / 10) * 28} r="2" fill="#a78bfa" />)}
        <text x={enter + 6} y="194" className="sim-small">B ⊙</text>
        <path d={trace.join(" ")} fill="none" stroke={q === "p" ? "#e11d48" : "#2563eb"} strokeWidth="2" strokeDasharray="4 3" />
        <circle cx={x} cy={y} r="6" fill={q === "p" ? "#e11d48" : "#2563eb"} />
        <text x={x} y={y + 3.5} textAnchor="middle" className="sim-tag is-plain" fill="#fff" style={{ fontSize: 9 }}>{q === "p" ? "+" : "−"}</text>
      </Stage>
      <Readouts items={[[L(W.radius, lang), `${fmt(r / 12, 1, lang)}`, "#7c3aed"], ["r ∝ v / B", `${v} / ${B}`]]} />
      <Note>{q === "p" ? "F ⟂ v" : "F ⟂ v"} · {L(W.sign, lang)}: {L(q === "p" ? W.proton : W.electron, lang)}</Note>
      <Controls>
        <Choice value={q} options={[["p", L(W.proton, lang)], ["e", L(W.electron, lang)]]} onChange={(n) => { setQ(n); clock.reset(); }} />
        <Slider label={L(W.speed, lang)} value={v} min={1} max={8} digits={0} lang={lang} onChange={(n) => { setV(n); clock.reset(); }} />
        <Slider label={L(W.field, lang)} value={B} min={1} max={5} digits={0} lang={lang} onChange={(n) => { setB(n); clock.reset(); }} />
      </Controls>
      <PlayBar clock={clock} lang={lang} />
    </ArtFrame>
  );
}
