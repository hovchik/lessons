"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Choice, fmt, Note, Readouts, Stage } from "../kit";
import { L, t, un, UI } from "../labels";

const W = {
  ruler: t("Experiment: reading a ruler", "Փորձ․ քանոնով չափում", "Опыт: измерение линейкой"),
  rulerHint: t(
    "Find the division value: take two numbered marks, subtract, and divide by the number of gaps between them. The error is about half a division.",
    "Գտի՛ր բաժանման արժեքը․ վերցրո՛ւ երկու համարակալված գծիկ, հանի՛ր և բաժանի՛ր նրանց միջև եղած միջակայքերի թվի վրա։ Սխալը մոտավորապես կես բաժանում է։",
    "Найди цену деления: возьми два соседних оцифрованных штриха, вычти и раздели на число промежутков между ними. Погрешность примерно половина деления.",
  ),
  density: t("Experiment: what is it made of?", "Փորձ․ ինչի՞ց է այն պատրաստված", "Опыт: из чего это сделано?"),
  densityHint: t(
    "Weigh the body, then lower it into the measuring cylinder: the water rises by the body's volume. Work out ρ = m / V and find the substance in the table.",
    "Կշռի՛ր մարմինը, հետո իջեցրո՛ւ այն չափագլանի մեջ․ ջուրը բարձրանում է մարմնի ծավալի չափով։ Հաշվի՛ր ρ = m / V և գտի՛ր նյութը աղյուսակում։",
    "Взвесь тело, затем опусти его в мензурку: вода поднимется на объём тела. Вычисли ρ = m / V и найди вещество в таблице.",
  ),
  coarse: t("Ruler in cm", "Սանտիմետրանոց քանոն", "Линейка с делением 1 см"),
  fine: t("Ruler in mm", "Միլիմետրանոց քանոն", "Линейка с делением 1 мм"),
  div: t("Division value", "Բաժանման արժեք", "Цена деления"),
  read: t("Length", "Երկարություն", "Длина"),
  err: t("Error ±", "Սխալ ±", "Погрешность ±"),
  another: t("Another object", "Ուրիշ առարկա", "Другой предмет"),
  finer: t("A finer ruler gives a smaller error.", "Ավելի մանր բաժանումներով քանոնը տալիս է ավելի փոքր սխալ։", "Чем мельче деления, тем меньше погрешность."),
  body: t("Body", "Մարմին", "Тело"),
  lower: t("Lower into water", "Իջեցնել ջրի մեջ", "Опустить в воду"),
  lift: t("Take it out", "Հանել", "Достать"),
  mass: t("Mass m", "Զանգված m", "Масса m"),
  vol: t("Volume V", "Ծավալ V", "Объём V"),
  rho: t("Density ρ", "Խտություն ρ", "Плотность ρ"),
  table: t("Densities", "Խտություններ", "Плотности"),
  guess: t("Which substance is it?", "Ո՞ր նյութն է", "Какое это вещество?"),
};

const OBJECTS = [
  { len: 7.3, color: "#f59e0b" },
  { len: 4.6, color: "#22c55e" },
  { len: 9.8, color: "#e11d48" },
  { len: 5.2, color: "#4f46e5" },
];

export default function Measure({ spec, lang }: SimProps) {
  if (spec.opts.mode === "density") return <Density spec={spec} lang={lang} />;
  return <Ruler spec={spec} lang={lang} />;
}

function Ruler({ spec, lang }: SimProps) {
  const [fine, setFine] = useState(spec.opts.ruler === "mm");
  const [k, setK] = useState(0);
  const o = OBJECTS[k];
  const X = (cm: number) => 20 + cm * 26;
  const step = fine ? 0.1 : 1;
  const reading = Math.round(o.len / step) * step;
  return (
    <ArtFrame kind="experiment" title={L(W.ruler, lang)} body={spec.body || L(W.rulerHint, lang)}>
      <Stage w={320} h={110} label={L(W.ruler, lang)}>
        <rect x={X(0)} y="22" width={o.len * 26} height="18" rx="9" fill={o.color} />
        <polygon points={`${X(o.len)},22 ${X(o.len) + 12},31 ${X(o.len)},40`} fill={o.color} opacity="0.6" />
        <rect x="10" y="46" width="300" height="46" rx="4" fill="#fef3c7" stroke="#d97706" />
        {Array.from({ length: fine ? 111 : 12 }, (_, i) => {
          const cm = fine ? i / 10 : i;
          const major = fine ? i % 10 === 0 : true;
          const half = fine && i % 5 === 0 && !major;
          return (
            <g key={i}>
              <line x1={X(cm)} x2={X(cm)} y1="46" y2={46 + (major ? 16 : half ? 11 : 7)} stroke="#78350f" strokeWidth={major ? 1.4 : 0.8} />
              {major ? <text x={X(cm)} y="76" textAnchor="middle" className="sim-axis">{cm}</text> : null}
            </g>
          );
        })}
        <text x="300" y="88" textAnchor="end" className="sim-axis is-name">{un("cm", lang)}</text>
      </Stage>
      <Readouts
        items={[
          [L(W.div, lang), `${fmt(step, 1, lang)} ${un("cm", lang)}`],
          [L(W.read, lang), `${fmt(reading, 1, lang)} ${un("cm", lang)}`, o.color],
          [L(W.err, lang), `${fmt(step / 2, 2, lang)} ${un("cm", lang)}`],
        ]}
      />
      <Note>{L(W.finer, lang)}</Note>
      <Choice value={fine ? "f" : "c"} options={[["c", L(W.coarse, lang)], ["f", L(W.fine, lang)]]} onChange={(v) => setFine(v === "f")} />
      <div className="art-row"><button type="button" className="art-btn" onClick={() => setK((k + 1) % OBJECTS.length)}>{L(W.another, lang)}</button></div>
    </ArtFrame>
  );
}

const SUBSTANCES = [
  { key: "al", name: t("aluminium", "ալյումին", "алюминий"), rho: 2.7, color: "#cbd5e1" },
  { key: "fe", name: t("iron", "երկաթ", "железо"), rho: 7.8, color: "#64748b" },
  { key: "cu", name: t("copper", "պղինձ", "медь"), rho: 8.9, color: "#c2410c" },
  { key: "pb", name: t("lead", "կապար", "свинец"), rho: 11.3, color: "#475569" },
  { key: "gl", name: t("glass", "ապակի", "стекло"), rho: 2.5, color: "#a5f3fc" },
];
const BODIES = [
  { s: 1, v: 20 },
  { s: 0, v: 30 },
  { s: 2, v: 10 },
  { s: 4, v: 24 },
  { s: 3, v: 8 },
];

function Density({ spec, lang }: SimProps) {
  const [b, setB] = useState(0);
  const [inside, setInside] = useState(false);
  const [shown, setShown] = useState(false);
  const body = BODIES[b];
  const sub = SUBSTANCES[body.s];
  const m = sub.rho * body.v;
  const V0 = 50;
  const lvl = V0 + (inside ? body.v : 0);
  const Y = (ml: number) => 186 - ml * 1.7;
  const size = Math.round(8 + Math.cbrt(body.v) * 5);
  return (
    <ArtFrame kind="experiment" title={L(W.density, lang)} body={spec.body || L(W.densityHint, lang)}>
      <Stage w={320} h={200} label={L(W.density, lang)}>
        <rect x="18" y="160" width="110" height="24" rx="4" fill="#334155" />
        <rect x="30" y="152" width="86" height="8" rx="2" fill="#94a3b8" />
        <rect x="40" y="166" width="66" height="13" rx="2" fill="#bbf7d0" />
        <text x="73" y="176" textAnchor="middle" className="sim-small" fill="#14532d">{inside ? "0" : fmt(m, 1, lang)} {un("g", lang)}</text>
        {inside ? null : <rect x={73 - size / 2} y={152 - size} width={size} height={size} rx="2" fill={sub.color} stroke="#334155" />}
        <rect x="200" y={Y(100)} width="56" height={Y(0) - Y(100)} fill="#f8fafc" stroke="#94a3b8" />
        <rect x="201" y={Y(lvl)} width="54" height={Y(0) - Y(lvl)} fill="#7dd3fc" opacity="0.7" style={{ transition: "y 500ms ease, height 500ms ease" }} />
        {inside ? <rect x={228 - size / 2} y={Y(0) - size - 1} width={size} height={size} rx="2" fill={sub.color} stroke="#334155" /> : null}
        {Array.from({ length: 11 }, (_, k) => (
          <g key={k}>
            <line x1="256" x2="264" y1={Y(k * 10)} y2={Y(k * 10)} stroke="#475569" />
            {k % 2 === 0 ? <text x="268" y={Y(k * 10) + 3} className="sim-axis">{k * 10}</text> : null}
          </g>
        ))}
        <text x="268" y={Y(100) - 6} className="sim-axis is-name">{un("mL", lang)}</text>
      </Stage>
      <Readouts
        items={[
          [L(W.mass, lang), `${fmt(m, 1, lang)} ${un("g", lang)}`],
          [L(W.vol, lang), inside ? `${lvl} − ${V0} = ${body.v} ${un("cm3", lang)}` : "?"],
          [L(W.rho, lang), shown && inside ? `${fmt(sub.rho, 1, lang)} ${un("gcm3", lang)}` : "?", "#4f46e5"],
        ]}
      />
      <div className="art-row">
        <button type="button" className="art-btn is-primary" onClick={() => setInside(!inside)}>{L(inside ? W.lift : W.lower, lang)}</button>
        {inside ? <button type="button" className="art-btn" onClick={() => setShown(true)}>{L(UI.check, lang)}</button> : null}
        <button type="button" className="art-btn" onClick={() => { setB((b + 1) % BODIES.length); setInside(false); setShown(false); }}>{L(W.another, lang)}</button>
      </div>
      {shown && inside ? <Note tone="good">ρ = {fmt(m, 1, lang)} / {body.v} = {fmt(sub.rho, 1, lang)} {un("gcm3", lang)} · {L(sub.name, lang)}</Note> : null}
      <Note><b>{L(W.table, lang)}, {un("gcm3", lang)}:</b> {SUBSTANCES.map((s) => `${L(s.name, lang)} ${fmt(s.rho, 1, lang)}`).join(" · ")}</Note>
    </ArtFrame>
  );
}
