"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Arrow, clamp, Controls, EnergyBars, fmt, Note, PlayBar, Readouts, Slider, Stage, Toggle, useClock, useDrag, useStepper } from "../kit";
import { L, t, un, UI } from "../labels";

const W = {
  track: t("Experiment: energy on a skate ramp", "Փորձ․ էներգիան սահնակի թեքահարթակում", "Опыт: энергия на рампе"),
  trackHint: t(
    "Drag the skater up the ramp and press Play. Watch the bars: potential energy turns into kinetic energy and back, and the total stays the same until friction turns some of it into heat.",
    "Քաշի՛ր սահորդին թեքահարթակի վրա և սեղմի՛ր «Սկսել»։ Հետևի՛ր սյունակներին․ պոտենցիալ էներգիան դառնում է կինետիկ և հակառակը, իսկ լրիվ էներգիան չի փոխվում, մինչև շփումը դրա մի մասը ջերմության չվերածի։",
    "Перетащи скейтера вверх по рампе и нажми «Пуск». Следи за столбиками: потенциальная энергия переходит в кинетическую и обратно, а полная не меняется, пока трение не превратит часть её в тепло.",
  ),
  work: t("Experiment: work and power of a crane", "Փորձ․ կռունկի աշխատանքը և հզորությունը", "Опыт: работа и мощность крана"),
  workHint: t(
    "Choose the load, the height and the time, then lift. Work depends on the force and the distance; power tells how fast the work is done.",
    "Ընտրի՛ր բեռը, բարձրությունը և ժամանակը, հետո բարձրացրո՛ւ։ Աշխատանքը կախված է ուժից և ճանապարհից, իսկ հզորությունը ցույց է տալիս, թե որքան արագ է կատարվում աշխատանքը։",
    "Выбери груз, высоту и время, затем подними. Работа зависит от силы и пути, а мощность показывает, как быстро совершается работа.",
  ),
  mass: t("Mass", "Զանգված", "Масса"),
  friction: t("Friction", "Շփում", "Трение"),
  ke: t("Kinetic", "Կինետիկ", "Кинетическая"),
  pe: t("Potential", "Պոտենցիալ", "Потенциальная"),
  heat: t("Heat", "Ջերմություն", "Тепло"),
  total: t("Total", "Լրիվ", "Полная"),
  h: t("height h", "բարձրություն h", "высота h"),
  v: t("speed v", "արագություն v", "скорость v"),
  load: t("Load", "Բեռ", "Груз"),
  lift: t("Height", "Բարձրություն", "Высота"),
  time: t("Time", "Ժամանակ", "Время"),
  force: t("Force F = mg", "Ուժ F = mg", "Сила F = mg"),
  workA: t("Work A = F·h", "Աշխատանք A = F·h", "Работа A = F·h"),
  powerP: t("Power N = A/t", "Հզորություն N = A/t", "Мощность N = A/t"),
  conserved: t("No friction: the total energy stays the same.", "Շփում չկա․ լրիվ էներգիան մնում է նույնը։", "Трения нет: полная энергия не меняется."),
  lost: t("Friction turns mechanical energy into heat: the skater never gets back to the start height.", "Շփումը մեխանիկական էներգիան դարձնում է ջերմություն․ սահորդն այլևս չի հասնում սկզբնական բարձրությանը։", "Трение превращает механическую энергию в тепло: скейтер уже не поднимается на начальную высоту."),
  energyJ: t("Energy", "Էներգիա", "Энергия"),
};

const g = 9.8;
const yOf = (x: number) => 0.16 * x * x;
const slope = (x: number) => 0.32 * x;

export default function Energy({ spec, lang }: SimProps) {
  if (spec.opts.mode === "work" || spec.opts.mode === "power") return <Crane spec={spec} lang={lang} />;
  return <Track spec={spec} lang={lang} />;
}

function Track({ spec, lang }: SimProps) {
  const [m, setM] = useState(Number(spec.opts.m ?? 50));
  const [x0, setX0] = useState(-4.5);
  const [fr, setFr] = useState(spec.opts.friction === "on");
  const clock = useClock();
  const mu = fr ? 0.06 : 0;
  const s = useStepper(
    clock.t,
    () => ({ x: x0, v: 0, q: 0 }),
    (p, dt) => {
      const th = Math.atan(slope(p.x));
      let a = -g * Math.sin(th);
      const fn = mu * g * Math.cos(th);
      if (Math.abs(p.v) < 0.02 && Math.abs(a) <= fn) return { ...p, v: 0 };
      a -= (p.v !== 0 ? Math.sign(p.v) : Math.sign(a)) * fn;
      const v = p.v + a * dt;
      const ds = v * dt;
      return { x: clamp(p.x + ds * Math.cos(th), -5, 5), v, q: p.q + m * fn * Math.abs(ds) };
    },
  );
  const X = (x: number) => 160 + x * 28;
  const Y = (y: number) => 176 - y * 32;
  const drag = useDrag<"s">(
    (p) => (!clock.playing && Math.hypot(p.x - X(s.x), p.y - (Y(yOf(s.x)) - 14)) < 26 ? "s" : null),
    (_, p) => { clock.reset(); setX0(clamp(Math.round(((p.x - 160) / 28) * 10) / 10, -5, 5)); },
  );
  const y = yOf(s.x);
  const ke = (m * s.v * s.v) / 2;
  const pe = m * g * y;
  const total = m * g * yOf(x0);
  const th = Math.atan(slope(s.x));
  const path = Array.from({ length: 51 }, (_, k) => { const x = -5 + k * 0.2; return `${X(x).toFixed(1)},${Y(yOf(x)).toFixed(1)}`; }).join(" ");
  const cx = X(s.x), cy = Y(y);
  return (
    <ArtFrame kind="experiment" title={L(W.track, lang)} body={spec.body || L(W.trackHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={320} h={200} label={L(W.track, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
          {[0, 1, 2, 3, 4].map((k) => (
            <g key={k}>
              <line x1="14" x2="306" y1={Y(k)} y2={Y(k)} stroke="#eef0f6" />
              <text x="10" y={Y(k) + 3} textAnchor="end" className="sim-axis">{k}</text>
            </g>
          ))}
          <polyline points={`${path} ${X(5)},196 ${X(-5)},196`} fill="#e0e7ff" stroke="none" />
          <polyline points={path} fill="none" stroke="#4f46e5" strokeWidth="4" strokeLinecap="round" />
          <line x1={X(x0) - 12} x2={X(x0) + 12} y1={Y(yOf(x0))} y2={Y(yOf(x0))} stroke="#e11d48" strokeDasharray="3 3" />
          <g transform={`translate(${cx} ${cy}) rotate(${(-th * 180) / Math.PI})`}>
            <rect x="-11" y="-4" width="22" height="4" rx="2" fill="#1e1b4b" />
            <circle cx="-7" cy="1" r="2" fill="#64748b" />
            <circle cx="7" cy="1" r="2" fill="#64748b" />
            <line x1="0" y1="-4" x2="0" y2="-16" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
            <circle cx="0" cy="-21" r="5" fill="#fdba74" />
            <line x1="0" y1="-12" x2={-6 * Math.sign(s.v || 1)} y2="-8" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
          </g>
          {Math.abs(s.v) > 0.1 ? (
            <Arrow x1={cx} y1={cy - 34} x2={cx + s.v * 6 * Math.cos(th)} y2={cy - 34 - s.v * 6 * Math.sin(th)} color="#059669" label="v" />
          ) : null}
          <text x={6} y={12} className="sim-axis is-name">h, {un("m", lang)}</text>
        </Stage>
        <div>
          <EnergyBars
            lang={lang}
            max={Math.max(total, 1)}
            items={[
              [L(W.ke, lang), ke, "#059669"],
              [L(W.pe, lang), pe, "#4f46e5"],
              [L(W.heat, lang), s.q, "#e11d48"],
              [L(W.total, lang), ke + pe + s.q, "#334155"],
            ]}
          />
          <p className="sim-small" style={{ marginTop: "0.3rem" }}>{L(W.energyJ, lang)}, {un("J", lang)}</p>
          <Readouts
            items={[
              [L(W.h, lang), `${fmt(y, 2, lang)} ${un("m", lang)}`, "#4f46e5"],
              [L(W.v, lang), `${fmt(Math.abs(s.v), 1, lang)} ${un("ms", lang)}`, "#059669"],
            ]}
          />
        </div>
      </div>
      <Controls>
        <Slider label={L(W.mass, lang)} value={m} min={20} max={100} step={5} unit={un("kg", lang)} lang={lang} onChange={(n) => { setM(n); clock.reset(); }} />
      </Controls>
      <div className="art-chips">
        <Toggle on={fr} label={L(W.friction, lang)} onChange={(v) => { setFr(v); clock.reset(); }} />
      </div>
      <Note>{L(fr ? W.lost : W.conserved, lang)} {clock.t === 0 ? L(UI.drag, lang) : ""}</Note>
      <PlayBar clock={clock} lang={lang} />
    </ArtFrame>
  );
}

function Crane({ spec, lang }: SimProps) {
  const [m, setM] = useState(Number(spec.opts.m ?? 100));
  const [h, setH] = useState(Number(spec.opts.h ?? 10));
  const [T, setT] = useState(Number(spec.opts.t ?? 10));
  const clock = useClock({ until: T });
  const done = clock.t / T;
  const F = m * g;
  const A = F * h * done;
  const Y = (v: number) => 186 - (v / 20) * 150;
  const yb = Y(h * done);
  return (
    <ArtFrame kind="experiment" title={L(W.work, lang)} body={spec.body || L(W.workHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={320} h={200} label={L(W.work, lang)}>
          <rect y="186" width="320" height="14" fill="#cbd5e1" />
          <rect x="40" y="20" width="10" height="166" fill="#f59e0b" />
          <rect x="40" y="18" width="200" height="8" fill="#f59e0b" />
          <rect x="20" y="30" width="20" height="16" fill="#334155" />
          <line x1="200" x2="200" y1="26" y2={yb - 18} stroke="#334155" strokeWidth="1.5" />
          <rect x="186" y={yb - 18} width="28" height="18" fill="#a16207" stroke="#713f12" />
          <text x="200" y={yb - 6} textAnchor="middle" className="sim-small" fill="#fff">{m}</text>
          <line x1="262" x2="262" y1={Y(0)} y2={Y(h)} stroke="#e11d48" strokeDasharray="4 3" />
          <text x="266" y={Y(h / 2)} className="sim-tag" fill="#e11d48">h</text>
          <Arrow x1={226} y1={yb - 9} x2={226} y2={yb - 9 - Math.min(60, F / 50)} color="#059669" label="F" />
          {[0, 5, 10, 15, 20].map((v) => <text key={v} x="306" y={Y(v) + 3} textAnchor="end" className="sim-axis">{v}</text>)}
        </Stage>
        <Readouts
          items={[
            [L(W.force, lang), `${fmt(F, 0, lang)} ${un("N", lang)}`, "#059669"],
            [L(W.workA, lang), `${fmt(A / 1000, 1, lang)} ${un("kJ", lang)}`, "#4f46e5"],
            [L(W.powerP, lang), `${fmt((F * h) / T, 0, lang)} ${un("W", lang)}`, "#e11d48"],
          ]}
        />
      </div>
      <Controls>
        <Slider label={L(W.load, lang)} value={m} min={20} max={300} step={10} unit={un("kg", lang)} lang={lang} onChange={(n) => { setM(n); clock.reset(); }} />
        <Slider label={L(W.lift, lang)} value={h} min={2} max={20} step={1} unit={un("m", lang)} lang={lang} onChange={(n) => { setH(n); clock.reset(); }} />
        <Slider label={L(W.time, lang)} value={T} min={2} max={30} step={1} unit={un("s", lang)} lang={lang} onChange={(n) => { setT(n); clock.reset(); }} />
      </Controls>
      <PlayBar clock={clock} lang={lang} />
    </ArtFrame>
  );
}
