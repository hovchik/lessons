"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Arrow, Choice, Controls, fmt, Note, Readouts, Slider, Stage, Toggle } from "../kit";
import { L, t, UI } from "../labels";

const W = {
  lever: t("Experiment: balance the lever", "Փորձ․ հավասարակշռի՛ր լծակը", "Опыт: уравновесь рычаг"),
  leverHint: t(
    "Hang weights on both sides. The lever balances when the moments are equal: F₁·l₁ = F₂·l₂. A small weight far away can hold a big weight close in.",
    "Կախի՛ր բեռներ երկու կողմից։ Լծակը հավասարակշռված է, երբ մոմենտները հավասար են․ F₁·l₁ = F₂·l₂։ Հեռու կախված փոքր բեռը կարող է պահել մոտիկ մեծ բեռը։",
    "Подвесь грузы с двух сторон. Рычаг в равновесии, когда моменты равны: F₁·l₁ = F₂·l₂. Маленький груз далеко удержит большой груз близко.",
  ),
  pulley: t("Experiment: pulleys", "Փորձ․ ճախարակներ", "Опыт: блоки"),
  pulleyHint: t(
    "Lift the same load with a fixed pulley, a movable pulley and a block and tackle. You win in force but lose in distance: the work stays the same.",
    "Բարձրացրո՛ւ նույն բեռը անշարժ ճախարակով, շարժական ճախարակով և ճախարակների համակարգով։ Ուժում շահում ես, բայց ճանապարհում՝ տանուլ տալիս․ աշխատանքը նույնն է։",
    "Подними один и тот же груз неподвижным блоком, подвижным блоком и полиспастом. Выигрываешь в силе, проигрываешь в расстоянии: работа та же.",
  ),
  left: t("Left side", "Ձախ կողմ", "Слева"),
  right: t("Right side", "Աջ կողմ", "Справа"),
  count: t("weights", "բեռ", "грузов"),
  pos: t("arm", "բազուկ", "плечо"),
  tilt: t("The heavier moment wins: the lever turns.", "Մեծ մոմենտը հաղթում է․ լծակը պտտվում է։", "Больший момент побеждает: рычаг поворачивается."),
  fixed: t("Fixed pulley", "Անշարժ ճախարակ", "Неподвижный блок"),
  movable: t("Movable pulley", "Շարժական ճախարակ", "Подвижный блок"),
  tackle: t("Block and tackle", "Ճախարակների համակարգ", "Полиспаст"),
  load: t("Load P", "Բեռ P", "Груз P"),
  lift: t("Lift the load by", "Բարձրացրո՛ւ բեռը", "Подними груз на"),
  rope: t("Rope pulled", "Քաշված պարան", "Вытянуто верёвки"),
  force: t("Your force F", "Քո ուժը F", "Твоя сила F"),
  work: t("Your work F·s", "Քո աշխատանքը F·s", "Твоя работа F·s"),
  useful: t("Useful work P·h", "Օգտակար աշխատանք P·h", "Полезная работа P·h"),
  real: t("Real pulleys (weight and friction)", "Իրական ճախարակներ (կշիռ և շփում)", "Реальные блоки (вес и трение)"),
  eff: t("Efficiency η", "ՕԳԳ η", "КПД η"),
};
const U = { N: t("N", "Ն", "Н"), cm: t("cm", "սմ", "см"), J: t("J", "Ջ", "Дж") };

export default function Machines({ spec, lang }: SimProps) {
  return spec.opts.mode === "pulley" ? <Pulleys spec={spec} lang={lang} /> : <Lever spec={spec} lang={lang} />;
}

function Lever({ spec, lang }: SimProps) {
  const [n1, setN1] = useState(2);
  const [p1, setP1] = useState(3);
  const [n2, setN2] = useState(1);
  const [p2, setP2] = useState(4);
  const m1 = n1 * p1, m2 = n2 * p2;
  const tilt = Math.max(-14, Math.min(14, (m2 - m1) * 2)); // degrees, right side down when positive
  const N = L(U.N, lang);
  const unit = 22;
  const stack = (side: -1 | 1, n: number, p: number, color: string) => {
    const x = 160 + side * p * unit;
    return (
      <g>
        <line x1={x} y1={90} x2={x} y2={104} stroke="#475569" strokeWidth="1.5" />
        {Array.from({ length: n }, (_, i) => (
          <g key={i}>
            <rect x={x - 9} y={104 + i * 15} width="18" height="13" rx="3" fill={color} stroke="#1e1b4b" strokeWidth="1" />
          </g>
        ))}
      </g>
    );
  };
  return (
    <ArtFrame kind="experiment" title={L(W.lever, lang)} body={spec.body || L(W.leverHint, lang)}>
      <Stage w={320} h={210} label={L(W.lever, lang)}>
        <polygon points="160,92 146,200 174,200" fill="#94a3b8" />
        <g transform={`rotate(${tilt} 160 90)`} style={{ transition: "transform 600ms ease" }}>
          <rect x="40" y="84" width="240" height="8" rx="3" fill="#a16207" />
          {Array.from({ length: 11 }, (_, i) => (
            <g key={i}>
              <circle cx={160 + (i - 5) * unit} cy="88" r="2" fill="#fde68a" />
              {i !== 5 ? <text x={160 + (i - 5) * unit} y="80" textAnchor="middle" className="sim-axis">{Math.abs(i - 5)}</text> : null}
            </g>
          ))}
          {stack(-1, n1, p1, "#4f46e5")}
          {stack(1, n2, p2, "#e11d48")}
        </g>
        <circle cx="160" cy="90" r="4" fill="#1e1b4b" />
      </Stage>
      {m1 === m2 ? <Note tone="good">{L(UI.balanced, lang)} {n1}·{p1} = {n2}·{p2}</Note> : <Note>{L(W.tilt, lang)}</Note>}
      <Readouts items={[["M₁ = F₁·l₁", `${n1} ${N} · ${p1} = ${m1}`, "#4f46e5"], ["M₂ = F₂·l₂", `${n2} ${N} · ${p2} = ${m2}`, "#e11d48"]]} />
      <div className="sim-layout is-even">
        <Controls>
          <p className="art-ctrl-label" style={{ color: "#4f46e5" }}>{L(W.left, lang)}</p>
          <Slider label={L(W.count, lang)} value={n1} min={1} max={6} digits={0} lang={lang} onChange={setN1} />
          <Slider label={L(W.pos, lang)} value={p1} min={1} max={5} digits={0} lang={lang} onChange={setP1} />
        </Controls>
        <Controls>
          <p className="art-ctrl-label" style={{ color: "#e11d48" }}>{L(W.right, lang)}</p>
          <Slider label={L(W.count, lang)} value={n2} min={1} max={6} digits={0} lang={lang} onChange={setN2} />
          <Slider label={L(W.pos, lang)} value={p2} min={1} max={5} digits={0} lang={lang} onChange={setP2} />
        </Controls>
      </div>
    </ArtFrame>
  );
}

function Wheel({ x, y, r = 14 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#e2e8f0" stroke="#475569" strokeWidth="2.5" />
      <circle cx={x} cy={y} r="3" fill="#475569" />
    </g>
  );
}

function Pulleys({ spec, lang }: SimProps) {
  const [kind, setKind] = useState<"fixed" | "movable" | "tackle">((spec.opts.kind as "fixed") ?? "movable");
  const [P, setP] = useState(200);
  const [h, setH] = useState(20);
  const [real, setReal] = useState(false);
  const n = kind === "fixed" ? 1 : kind === "movable" ? 2 : 4; // rope strands holding the load
  const extra = real ? (kind === "fixed" ? 0 : kind === "movable" ? 10 : 20) : 0; // weight of movable pulleys, N
  const F = ((P + extra) / n) * (real ? 1.08 : 1);
  const s = h * n;
  const eff = (P * h) / (F * s);
  const N = L(U.N, lang), cm = L(U.cm, lang), J = L(U.J, lang);
  const ly = 170 - h * 1.6; // load top
  const loadBox = <rect x="120" y={ly} width="60" height="26" rx="4" fill="#4f46e5" />;
  return (
    <ArtFrame kind="experiment" title={L(W.pulley, lang)} body={spec.body || L(W.pulleyHint, lang)}>
      <Stage w={320} h={210} label={L(W.pulley, lang)}>
        <rect x="40" y="6" width="240" height="8" fill="#475569" />
        {kind === "fixed" ? (
          <>
            <line x1="150" y1="14" x2="150" y2="34" stroke="#475569" strokeWidth="2" />
            <line x1="136" y1="34" x2="136" y2={ly} stroke="#a16207" strokeWidth="2" />
            <line x1="164" y1="34" x2="164" y2={110 + s * 0.4} stroke="#a16207" strokeWidth="2" />
            <Wheel x={150} y={34} />
            <Arrow x1={164} y1={110 + s * 0.4} x2={164} y2={130 + s * 0.4 + F / 12} color="#e11d48" label={`F ${fmt(F, 0, lang)} ${N}`} />
            <rect x="106" y={ly} width="60" height="26" rx="4" fill="#4f46e5" />
          </>
        ) : kind === "movable" ? (
          <>
            <line x1="120" y1="14" x2="120" y2={ly - 18} stroke="#a16207" strokeWidth="2" />
            <line x1="180" y1="14" x2="180" y2="0" stroke="none" />
            <line x1="148" y1={ly - 18} x2="148" y2="40" stroke="#a16207" strokeWidth="2" />
            <Wheel x={134} y={ly - 18} />
            <line x1="134" y1={ly - 18} x2="134" y2={ly} stroke="#475569" strokeWidth="2" />
            <Arrow x1={148} y1={40} x2={148} y2={40 - 14 - F / 15} color="#e11d48" label={`F ${fmt(F, 0, lang)} ${N}`} />
            <g transform="translate(-16 0)">{loadBox}</g>
          </>
        ) : (
          <>
            <line x1="150" y1="14" x2="150" y2="34" stroke="#475569" strokeWidth="2" />
            {[128, 140, 160, 172].map((x) => <line key={x} x1={x} y1={34} x2={x} y2={ly - 24} stroke="#a16207" strokeWidth="2" />)}
            <line x1="186" y1="34" x2="186" y2={120 + s * 0.15} stroke="#a16207" strokeWidth="2" />
            <Wheel x={140} y={34} r={12} />
            <Wheel x={170} y={34} r={16} />
            <Wheel x={134} y={ly - 24} r={6} />
            <Wheel x={166} y={ly - 24} r={6} />
            <rect x="126" y={ly - 20} width="48" height="6" rx="2" fill="#475569" />
            <line x1="150" y1={ly - 14} x2="150" y2={ly} stroke="#475569" strokeWidth="2" />
            <Arrow x1={186} y1={120 + s * 0.15} x2={186} y2={136 + s * 0.15 + F / 10} color="#e11d48" label={`F ${fmt(F, 0, lang)} ${N}`} />
            <rect x="120" y={ly} width="60" height="26" rx="4" fill="#4f46e5" />
          </>
        )}
        <text x={kind === "fixed" ? 136 : kind === "movable" ? 134 : 150} y={ly + 17} textAnchor="middle" className="sim-tag is-plain" fill="#fff">{P} {N}</text>
        <line x1="30" x2="300" y1="196" y2="196" stroke="#94a3b8" />
        <line x1="40" x2="40" y1="196" y2={196 - h * 1.6} stroke="#059669" strokeWidth="3" />
        <text x="46" y={194 - h * 0.8} className="sim-tag" fill="#059669">h = {h} {cm}</text>
      </Stage>
      <Choice value={kind} options={[["fixed", L(W.fixed, lang)], ["movable", L(W.movable, lang)], ["tackle", L(W.tackle, lang)]]} onChange={setKind} />
      <Readouts
        items={[
          [L(W.force, lang), `${fmt(F, 0, lang)} ${N}`, "#e11d48"],
          [L(W.rope, lang), `${s} ${cm}`, "#059669"],
          [L(W.work, lang), `${fmt((F * s) / 100, 1, lang)} ${J}`],
          [L(W.useful, lang), `${fmt((P * h) / 100, 1, lang)} ${J}`],
          [L(W.eff, lang), `${fmt(eff * 100, 0, lang)} %`, "#7c3aed"],
        ]}
      />
      <Controls>
        <Slider label={L(W.load, lang)} value={P} min={100} max={400} step={20} unit={N} digits={0} lang={lang} onChange={setP} />
        <Slider label={L(W.lift, lang)} value={h} min={0} max={40} step={5} unit={cm} digits={0} lang={lang} onChange={setH} />
        <div className="art-chips"><Toggle on={real} label={L(W.real, lang)} onChange={setReal} /></div>
      </Controls>
    </ArtFrame>
  );
}
