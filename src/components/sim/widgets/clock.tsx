"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Choice, clamp, Note, Readouts, Stage, useDrag } from "../kit";
import { L, t } from "../labels";
import { COLORS, Counter } from "../math-kit";

/**
 * A clock with hands you can drag:
 *   clock h=3 m=30            read and set the time (the hour hand follows the minute hand)
 *   clock mode=elapsed h=9 m=15 h2=11 m2=40   how much time passes between two times
 */
const W = {
  read: t("Experiment: the clock", "Փորձ․ ժամացույց", "Опыт: часы"),
  readHint: t("Drag the long minute hand. The short hour hand moves too: one full turn of the minute hand is one hour.", "Քաշի՛ր երկար րոպեի սլաքը։ Կարճ ժամի սլաքն էլ է շարժվում․ րոպեի սլաքի մեկ լրիվ պտույտը մեկ ժամ է։", "Тяни длинную минутную стрелку. Короткая часовая тоже движется: один полный оборот минутной стрелки — это один час."),
  elapsed: t("Experiment: how long does it take?", "Փորձ․ որքա՞ն ժամանակ է անցնում", "Опыт: сколько прошло времени?"),
  elapsedHint: t("Count the whole hours first, then the minutes that are left.", "Նախ հաշվի՛ր ամբողջ ժամերը, հետո մնացած րոպեները։", "Сначала посчитай целые часы, потом оставшиеся минуты."),
  hours: t("Hours", "Ժամ", "Часы"),
  minutes: t("Minutes", "Րոպե", "Минуты"),
  time: t("Time", "Ժամը", "Время"),
  pm: t("Afternoon (24 h)", "Կեսօրից հետո (24 ժ)", "После полудня (24 ч)"),
  toNext: t("Minutes to the next hour", "Րոպե մինչև հաջորդ ժամը", "Минут до следующего часа"),
  start: t("Start", "Սկիզբ", "Начало"),
  end: t("End", "Ավարտ", "Конец"),
  passed: t("Time passed", "Անցած ժամանակ", "Прошло времени"),
  half: t("Half past: the minute hand points at 6.", "Կեսը․ րոպեի սլաքը ցույց է տալիս 6։", "Половина: минутная стрелка показывает на 6."),
  oclock: t("Exactly on the hour: the minute hand points at 12.", "Ճիշտ ժամը․ րոպեի սլաքը ցույց է տալիս 12։", "Ровно: минутная стрелка показывает на 12."),
  quarter: t("A quarter of an hour is 15 minutes.", "Ժամի քառորդը 15 րոպե է։", "Четверть часа — это 15 минут."),
  h: t("h", "ժ", "ч"),
  min: t("min", "ր", "мин"),
};

const pad = (v: number) => String(v).padStart(2, "0");
const R = 70, CX = 85, CY = 85;

function Face({ h, m, color = COLORS.a, ghost }: { h: number; m: number; color?: string; ghost?: { h: number; m: number } }) {
  const hand = (deg: number, len: number) => {
    const a = ((deg - 90) * Math.PI) / 180;
    return { x: Math.round((CX + len * Math.cos(a)) * 100) / 100, y: Math.round((CY + len * Math.sin(a)) * 100) / 100 };
  };
  const mh = hand(m * 6, R * 0.82), hh = hand(((h % 12) + m / 60) * 30, R * 0.52);
  return (
    <g>
      <circle cx={CX} cy={CY} r={R + 6} fill="#fff" stroke={COLORS.line} strokeWidth="4" />
      {Array.from({ length: 60 }, (_, i) => {
        const p1 = hand(i * 6, R), p2 = hand(i * 6, i % 5 ? R - 4 : R - 9);
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={COLORS.line} strokeWidth={i % 5 ? 1 : 2.2} />;
      })}
      {Array.from({ length: 12 }, (_, i) => {
        const p = hand((i + 1) * 30, R - 20);
        return <text key={i} x={p.x} y={p.y + 4.5} textAnchor="middle" className="math-clock-num">{i + 1}</text>;
      })}
      {ghost ? (() => {
        const g = hand(ghost.m * 6, R * 0.82);
        return <line x1={CX} y1={CY} x2={g.x} y2={g.y} stroke="#94a3b8" strokeWidth="3" strokeDasharray="4 3" strokeLinecap="round" />;
      })() : null}
      <line x1={CX} y1={CY} x2={hh.x} y2={hh.y} stroke={COLORS.line} strokeWidth="6" strokeLinecap="round" />
      <line x1={CX} y1={CY} x2={mh.x} y2={mh.y} stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx={mh.x} cy={mh.y} r="9" fill={color} opacity="0.25" />
      <circle cx={CX} cy={CY} r="5" fill={COLORS.d} />
    </g>
  );
}

export default function Clock({ spec, lang }: SimProps) {
  return spec.opts.mode === "elapsed" ? <Elapsed spec={spec} lang={lang} /> : <Read spec={spec} lang={lang} />;
}

/** Total minutes since midnight, kept in 0..1439; dragging the minute hand past 12 moves the hour. */
function useTime(h0: number, m0: number) {
  const [tm, setTm] = useState(clamp(h0, 0, 23) * 60 + clamp(m0, 0, 59));
  const setMinuteHand = (mNew: number) => setTm((v) => {
    const m = v % 60;
    let h = Math.floor(v / 60);
    if (m > 45 && mNew < 15) h++;
    else if (m < 15 && mNew > 45) h--;
    return (((h * 60 + mNew) % 1440) + 1440) % 1440;
  });
  return { tm, setTm, setMinuteHand };
}

function Read({ spec, lang }: SimProps) {
  const { tm, setTm, setMinuteHand } = useTime(Number(spec.opts.h ?? 3), Number(spec.opts.m ?? 30));
  const [day, setDay] = useState(spec.opts.day === "24");
  const h = Math.floor(tm / 60), m = tm % 60;
  const drag = useDrag(() => "m", (_, p) => {
    const a = (Math.atan2(p.y - CY, p.x - CX) * 180) / Math.PI + 90;
    setMinuteHand(Math.round((((a % 360) + 360) % 360) / 6) % 60);
  });
  const shownH = day ? h : h % 12 === 0 ? 12 : h % 12;
  const note = m === 0 ? W.oclock : m === 30 ? W.half : m === 15 || m === 45 ? W.quarter : null;
  return (
    <ArtFrame kind="experiment" title={L(W.read, lang)} body={spec.body || L(W.readHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={170} h={170} label={`${shownH}:${pad(m)}`} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
          <Face h={h} m={m} />
        </Stage>
        <div>
          <p className="math-digital" aria-live="polite">{`${shownH}:${pad(m)}`}</p>
          <Readouts items={[[L(W.toNext, lang), String((60 - m) % 60 || 60)]]} />
          {note ? <Note>{L(note, lang)}</Note> : null}
          <div className="art-row">
            <Counter label={L(W.hours, lang)} value={shownH} min={day ? 0 : 1} max={day ? 23 : 12} onChange={(v) => setTm((day ? v : (v % 12) + (h >= 12 ? 12 : 0)) * 60 + m)} lang={lang} />
            <Counter label={L(W.minutes, lang)} value={m} min={0} max={55} step={5} onChange={(v) => setTm(h * 60 + v)} lang={lang} color={COLORS.a} />
          </div>
          <Choice value={day ? "24" : "12"} options={[["12", "12 h"], ["24", L(W.pm, lang)]]} onChange={(v) => setDay(v === "24")} />
        </div>
      </div>
    </ArtFrame>
  );
}

function Elapsed({ spec, lang }: SimProps) {
  const a = useTime(Number(spec.opts.h ?? 9), Number(spec.opts.m ?? 15));
  const b = useTime(Number(spec.opts.h2 ?? 11), Number(spec.opts.m2 ?? 40));
  const [which, setWhich] = useState<"a" | "b">("b");
  const cur = which === "a" ? a : b;
  const drag = useDrag(() => "m", (_, p) => {
    const ang = (Math.atan2(p.y - CY, p.x - CX) * 180) / Math.PI + 90;
    cur.setMinuteHand(Math.round((((ang % 360) + 360) % 360) / 6) % 60);
  });
  const d = (b.tm - a.tm + 1440) % 1440;
  const show = (v: number) => `${Math.floor(v / 60)}:${pad(v % 60)}`;
  const h = Math.floor(cur.tm / 60), m = cur.tm % 60;
  const other = which === "a" ? b.tm : a.tm;
  return (
    <ArtFrame kind="experiment" title={L(W.elapsed, lang)} body={spec.body || L(W.elapsedHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={170} h={170} label={show(cur.tm)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
          <Face h={h} m={m} color={which === "a" ? COLORS.c : COLORS.d} ghost={{ h: Math.floor(other / 60), m: other % 60 }} />
        </Stage>
        <div>
          <Choice value={which} options={[["a", `${L(W.start, lang)} ${show(a.tm)}`], ["b", `${L(W.end, lang)} ${show(b.tm)}`]]} onChange={setWhich} />
          <Readouts items={[[L(W.passed, lang), `${Math.floor(d / 60)} ${L(W.h, lang)} ${d % 60} ${L(W.min, lang)}`, COLORS.d]]} />
          <div className="art-row">
            <Counter label={L(W.hours, lang)} value={h} min={0} max={23} onChange={(v) => cur.setTm(v * 60 + m)} lang={lang} />
            <Counter label={L(W.minutes, lang)} value={m} min={0} max={55} step={5} onChange={(v) => cur.setTm(h * 60 + v)} lang={lang} color={COLORS.a} />
          </div>
        </div>
      </div>
    </ArtFrame>
  );
}
