"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Arrow, Choice, Controls, fmt, Readouts, Slider, Stage, Toggle, useDrag } from "../kit";
import { L, t, UI, un } from "../labels";

const W = {
  title: t("Experiment: electric charges and their field", "Փորձ․ էլեկտրական լիցքերը և դրանց դաշտը", "Опыт: электрические заряды и их поле"),
  hint: t(
    "Drag the charges. Like charges push apart, unlike charges pull together. Twice as far means four times weaker (Coulomb's law). The small arrows show the field.",
    "Քաշի՛ր լիցքերը։ Նույնանուն լիցքերը վանում են իրար, տարանունները՝ ձգում։ Կրկնակի հեռու՝ չորս անգամ թույլ (Կուլոնի օրենք)։ Փոքր սլաքները ցույց են տալիս դաշտը։",
    "Перетаскивай заряды. Одноимённые отталкиваются, разноимённые притягиваются. Вдвое дальше — вчетверо слабее (закон Кулона). Маленькие стрелки показывают поле.",
  ),
  cap: t("Experiment: the capacitor", "Փորձ․ կոնդենսատոր", "Опыт: конденсатор"),
  capHint: t(
    "Change the plate area, the gap and the material between the plates. C = ε·ε₀·S/d: bigger plates and a smaller gap store more charge.",
    "Փոխի՛ր թիթեղների մակերեսը, միջև հեռավորությունը և նյութը։ C = ε·ε₀·S/d․ մեծ թիթեղները և փոքր հեռավորությունը ավելի շատ լիցք են պահում։",
    "Меняй площадь пластин, зазор и вещество между ними. C = ε·ε₀·S/d: большие пластины и маленький зазор хранят больше заряда.",
  ),
  q1: t("Charge q₁", "Լիցք q₁", "Заряд q₁"),
  q2: t("Charge q₂", "Լիցք q₂", "Заряд q₂"),
  field: t("Field arrows", "Դաշտի սլաքներ", "Стрелки поля"),
  dist: t("Distance r", "Հեռավորություն r", "Расстояние r"),
  force: t("Force F", "Ուժ F", "Сила F"),
  repel: t("they repel", "վանում են", "отталкиваются"),
  attract: t("they attract", "ձգում են", "притягиваются"),
  area: t("Plate area S", "Թիթեղի մակերես S", "Площадь пластин S"),
  gap: t("Gap d", "Հեռավորություն d", "Зазор d"),
  volt: t("Voltage U", "Լարում U", "Напряжение U"),
  diel: t("Between the plates", "Թիթեղների միջև", "Между пластинами"),
  air: t("air (ε = 1)", "օդ (ε = 1)", "воздух (ε = 1)"),
  paper: t("paper (ε = 2)", "թուղթ (ε = 2)", "бумага (ε = 2)"),
  glass: t("glass (ε = 7)", "ապակի (ε = 7)", "стекло (ε = 7)"),
  cap2: t("Capacitance C", "Ունակություն C", "Ёмкость C"),
  charge: t("Charge q", "Լիցք q", "Заряд q"),
  energy: t("Energy W", "Էներգիա W", "Энергия W"),
};

type C = { x: number; y: number };

export default function Charges({ spec, lang }: SimProps) {
  return spec.opts.mode === "capacitor" ? <Capacitor spec={spec} lang={lang} /> : <Field spec={spec} lang={lang} />;
}

function Field({ spec, lang }: SimProps) {
  const [q1, setQ1] = useState(Number(spec.opts.q1 ?? 2));
  const [q2, setQ2] = useState(Number(spec.opts.q2 ?? -2));
  const [field, setField] = useState(true);
  const [pts, setPts] = useState<C[]>([{ x: 110, y: 100 }, { x: 210, y: 100 }]);
  const drag = useDrag<number>(
    (p) => { const i = pts.findIndex((c) => Math.hypot(c.x - p.x, c.y - p.y) < 22); return i < 0 ? null : i; },
    (i, p) => setPts((ps) => ps.map((c, k) => (k === i ? { x: Math.min(305, Math.max(15, p.x)), y: Math.min(185, Math.max(15, p.y)) } : c))),
  );
  const qs = [q1, q2];
  const [a, b] = pts;
  const rpx = Math.max(10, Math.hypot(b.x - a.x, b.y - a.y));
  const r = rpx / 100; // metres: 100 px = 1 m
  const k = 9e9;
  const F = (k * Math.abs(q1 * q2) * 1e-12) / (r * r); // µC charges → N
  const dir = { x: (b.x - a.x) / rpx, y: (b.y - a.y) / rpx };
  const same = q1 * q2 > 0;
  const len = Math.min(70, 8 + F * 400);
  const E = (x: number, y: number) => {
    let ex = 0, ey = 0;
    pts.forEach((c, i) => {
      const dx = x - c.x, dy = y - c.y, d2 = Math.max(200, dx * dx + dy * dy);
      const s = qs[i] / d2;
      ex += (s * dx) / Math.sqrt(d2);
      ey += (s * dy) / Math.sqrt(d2);
    });
    return { ex, ey };
  };
  const color = (q: number) => (q > 0 ? "#e11d48" : q < 0 ? "#2563eb" : "#94a3b8");
  return (
    <ArtFrame kind="experiment" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <Stage w={320} h={200} label={L(W.title, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        {field
          ? Array.from({ length: 10 * 16 }, (_, i) => {
              const x = 10 + (i % 16) * 20, y = 10 + Math.floor(i / 16) * 20;
              if (pts.some((c) => Math.hypot(c.x - x, c.y - y) < 18)) return null;
              const { ex, ey } = E(x, y);
              const m = Math.hypot(ex, ey);
              if (m < 1e-6) return null;
              const l = Math.min(9, 3 + Math.log10(1 + m * 3000) * 3);
              return <Arrow key={i} x1={x - (ex / m) * l * 0.5} y1={y - (ey / m) * l * 0.5} x2={x + (ex / m) * l * 0.5} y2={y + (ey / m) * l * 0.5} color="#94a3b8" width={1.2} head={3.5} />;
            })
          : null}
        {q1 && q2 ? (
          <>
            <Arrow x1={a.x - dir.x * 16 * (same ? 1 : -1)} y1={a.y - dir.y * 16 * (same ? 1 : -1)} x2={a.x - dir.x * (16 + len) * (same ? 1 : -1)} y2={a.y - dir.y * (16 + len) * (same ? 1 : -1)} color="#059669" />
            <Arrow x1={b.x + dir.x * 16 * (same ? 1 : -1)} y1={b.y + dir.y * 16 * (same ? 1 : -1)} x2={b.x + dir.x * (16 + len) * (same ? 1 : -1)} y2={b.y + dir.y * (16 + len) * (same ? 1 : -1)} color="#059669" />
          </>
        ) : null}
        {pts.map((c, i) => (
          <g key={i} className="sim-handle">
            <circle cx={c.x} cy={c.y} r="14" fill={color(qs[i])} stroke="#fff" strokeWidth="3" />
            <text x={c.x} y={c.y + 5} textAnchor="middle" className="sim-tag is-plain" fill="#fff" style={{ fontSize: 14 }}>{qs[i] > 0 ? "+" : qs[i] < 0 ? "−" : "0"}</text>
          </g>
        ))}
      </Stage>
      <p className="art-note">{L(UI.drag, lang)}</p>
      <Readouts items={[[L(W.dist, lang), `${fmt(r, 2, lang)} ${un("m", lang)}`], [L(W.force, lang), `${fmt(F * 1000, 2, lang)} m${un("N", lang)}`, "#059669"], ["", q1 && q2 ? L(same ? W.repel : W.attract, lang) : "—"]]} />
      <Controls>
        <Slider label={`${L(W.q1, lang)}, µC`} value={q1} min={-3} max={3} digits={0} lang={lang} onChange={setQ1} />
        <Slider label={`${L(W.q2, lang)}, µC`} value={q2} min={-3} max={3} digits={0} lang={lang} onChange={setQ2} />
        <div className="art-chips"><Toggle on={field} label={L(W.field, lang)} onChange={setField} /></div>
      </Controls>
    </ArtFrame>
  );
}

const DIEL = { air: 1, paper: 2, glass: 7 } as const;
function Capacitor({ spec, lang }: SimProps) {
  const [S, setS] = useState(100); // cm²
  const [d, setD] = useState(2); // mm
  const [U, setU] = useState(100);
  const [diel, setDiel] = useState<keyof typeof DIEL>("air");
  const eps = DIEL[diel];
  const C = (eps * 8.85e-12 * (S / 1e4)) / (d / 1000); // F
  const q = C * U;
  const Wj = (C * U * U) / 2;
  const h = 40 + S * 0.9, gap = d * 18;
  const x1 = 160 - gap / 2, x2 = 160 + gap / 2;
  const n = Math.max(2, Math.min(14, Math.round(q * 1e9 * 1.2)));
  return (
    <ArtFrame kind="experiment" title={L(W.cap, lang)} body={spec.body || L(W.capHint, lang)}>
      <Stage w={320} h={200} label={L(W.cap, lang)}>
        {diel !== "air" ? <rect x={x1} y={100 - h / 2} width={gap} height={h} fill={diel === "glass" ? "#bae6fd" : "#fef3c7"} opacity="0.8" /> : null}
        <rect x={x1 - 6} y={100 - h / 2} width="6" height={h} fill="#e11d48" />
        <rect x={x2} y={100 - h / 2} width="6" height={h} fill="#2563eb" />
        {Array.from({ length: n }, (_, i) => {
          const y = 100 - h / 2 + ((i + 0.5) * h) / n;
          return (
            <g key={i}>
              <text x={x1 - 14} y={y + 4} textAnchor="middle" className="sim-tag" fill="#e11d48">+</text>
              <text x={x2 + 14} y={y + 4} textAnchor="middle" className="sim-tag" fill="#2563eb">−</text>
              <Arrow x1={x1 + 2} y1={y} x2={x2 - 2} y2={y} color="#94a3b8" width={1.3} head={4} />
            </g>
          );
        })}
        <path d={`M ${x1 - 3} ${100 - h / 2} L ${x1 - 3} 12 L 60 12 L 60 92 M 60 108 L 60 188 L ${x2 + 3} 188 L ${x2 + 3} ${100 + h / 2}`} fill="none" stroke="#475569" strokeWidth="2" />
        <line x1="48" x2="72" y1="92" y2="92" stroke="#1e1b4b" strokeWidth="3" />
        <line x1="54" x2="66" y1="108" y2="108" stroke="#1e1b4b" strokeWidth="5" />
        <text x="40" y="104" textAnchor="end" className="sim-tag" fill="#1e1b4b">{U} {un("V", lang)}</text>
      </Stage>
      <Readouts items={[[L(W.cap2, lang), `${fmt(C * 1e12, 0, lang)} ${lang === "ru" ? "пФ" : lang === "hy" ? "պՖ" : "pF"}`, "#7c3aed"], [L(W.charge, lang), `${fmt(q * 1e9, 1, lang)} ${lang === "ru" ? "нКл" : lang === "hy" ? "նԿլ" : "nC"}`, "#e11d48"], [L(W.energy, lang), `${fmt(Wj * 1e6, 2, lang)} µ${un("J", lang)}`]]} />
      <Controls>
        <Slider label={L(W.area, lang)} value={S} min={20} max={150} step={10} unit="cm²" digits={0} lang={lang} onChange={setS} />
        <Slider label={L(W.gap, lang)} value={d} min={1} max={6} step={0.5} unit={un("mm", lang)} lang={lang} onChange={setD} />
        <Slider label={L(W.volt, lang)} value={U} min={0} max={200} step={10} unit={un("V", lang)} digits={0} lang={lang} onChange={setU} />
        <p className="art-ctrl-label">{L(W.diel, lang)}</p>
        <Choice value={diel} options={(Object.keys(DIEL) as Array<keyof typeof DIEL>).map((k) => [k, L(W[k], lang)])} onChange={setDiel} />
      </Controls>
    </ArtFrame>
  );
}

