"use client";

import { useEffect, useState } from "react";
import { Play, RotateCcw } from "lucide-react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Readouts, Slider } from "../kit";
import { L, t, UI } from "../labels";
import { COLORS } from "../math-kit";

/** ```sim turtle: a Scratch-style program (repeat N: move S steps, turn A degrees) drawn by the cat on the stage. */
const W = {
  title: t("Experiment: program the cat", "Փորձ․ ծրագրավորի՛ր կատվին", "Опыт: запрограммируй кота"),
  hint: t("Change the numbers in the blocks and press Run. The cat starts in the centre (0, 0), facing right, and draws with a pen as it walks.", "Փոխի՛ր բլոկների թվերը և սեղմի՛ր «Կատարել»։ Կատուն սկսում է կենտրոնից (0, 0)՝ նայելով աջ, և քայլելիս գծում է գրիչով։", "Поменяй числа в блоках и нажми «Запустить». Кот начинает в центре (0, 0), смотрит вправо и рисует пером, пока идёт."),
  flag: t("when green flag clicked", "երբ սեղմվում է կանաչ դրոշը", "когда щёлкнут по зелёному флагу"),
  repeat: t("repeat", "կրկնել", "повторить"),
  move: t("move {n} steps", "քայլել {n} քայլ", "идти {n} шагов"),
  turn: t("turn ↻ {n} degrees", "պտտվել ↻ {n} աստիճան", "повернуть ↻ на {n} градусов"),
  times: t("Repeat", "Կրկնել", "Повторить"),
  steps: t("Steps", "Քայլեր", "Шаги"),
  angle: t("Turn, degrees", "Պտույտ, աստիճան", "Поворот, градусы"),
  run: t("Run", "Կատարել", "Запустить"),
  total: t("Turned in total", "Ընդամենը պտտվեց", "Всего повернулся"),
  closed: t("The cat is back where it started: {n}° is a whole number of full turns, so the shape closes.", "Կատուն վերադարձավ մեկնակետ․ {n}°-ը ամբողջ թվով լրիվ պտույտներ է, ուստի պատկերը փակվում է։", "Кот вернулся туда, откуда начал: {n}° — целое число полных оборотов, поэтому фигура замкнулась."),
  open: t("The shape is not closed. For a regular polygon with N sides, turn 360 ÷ N degrees each time.", "Պատկերը փակ չէ։ N կողմով կանոնավոր բազմանկյան համար ամեն անգամ պտտվի՛ր 360 ÷ N աստիճան։", "Фигура не замкнулась. Для правильного многоугольника с N сторонами каждый раз поворачивай на 360 ÷ N градусов."),
  off: t("Part of the path is off the stage (x from −240 to 240, y from −180 to 180).", "Ճանապարհի մի մասը բեմից դուրս է (x-ը՝ −240-ից 240, y-ը՝ −180-ից 180)։", "Часть пути вышла за сцену (x от −240 до 240, y от −180 до 180)."),
  shapes: [t("square", "քառակուսի", "квадрат"), t("triangle", "եռանկյուն", "треугольник"), t("hexagon", "վեցանկյուն", "шестиугольник"), t("star", "աստղ", "звезда"), t("circle", "շրջան", "круг")],
};

const PRESETS: Array<[number, number, number]> = [[4, 100, 90], [3, 120, 120], [6, 70, 60], [5, 150, 144], [36, 15, 10]];
/** Scratch's stage is 480 × 360 with (0, 0) in the middle; we draw it at 2/3 size. */
const SX = (x: number) => 160 + (x * 2) / 3, SY = (y: number) => 120 - (y * 2) / 3;

function fill(text: string, v: number) {
  const [before, after] = text.split("{n}");
  return <>{before}<b>{v}</b>{after}</>;
}

function path(n: number, s: number, a: number) {
  const pts: Array<[number, number]> = [[0, 0]];
  let x = 0, y = 0, dir = 90;
  for (let i = 0; i < n; i++) {
    x += s * Math.sin((dir * Math.PI) / 180);
    y += s * Math.cos((dir * Math.PI) / 180);
    pts.push([x, y]);
    dir += a;
  }
  return { pts, dir };
}

export default function Turtle({ spec, lang }: SimProps) {
  const [n, setN] = useState(4);
  const [s, setS] = useState(100);
  const [a, setA] = useState(90);
  const [shown, setShown] = useState(4);
  const [running, setRunning] = useState(false);
  const { pts } = path(n, s, a);
  useEffect(() => {
    if (!running) return;
    if (shown >= n) { setRunning(false); return; }
    const id = setTimeout(() => setShown(shown + 1), Math.max(60, 500 - n * 12));
    return () => clearTimeout(id);
  }, [running, shown, n]);
  const set = (f: (v: number) => void) => (v: number) => { f(v); setRunning(false); setShown(99); };
  const k = Math.min(shown, n);
  const [cx, cy] = pts[k];
  const heading = 90 + k * a;
  const total = n * a;
  const back = Math.hypot(pts[n][0], pts[n][1]) < 0.5;
  const off = pts.some(([x, y]) => Math.abs(x) > 240 || Math.abs(y) > 180);
  const r1 = (v: number) => String(Math.round(v));
  return (
    <ArtFrame kind="experiment" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <div className="sim-layout is-split">
        <svg viewBox="0 0 320 240" className="sim-stage" style={{ maxWidth: "26.67rem" }} role="img" aria-label={L(W.title, lang)}>
          <rect width="320" height="240" fill="#fff" />
          <line x1="0" y1="120" x2="320" y2="120" stroke="#e2e8f0" />
          <line x1="160" y1="0" x2="160" y2="240" stroke="#e2e8f0" />
          <text x="314" y="114" textAnchor="end" fontSize="8" fill="#94a3b8">x</text>
          <text x="166" y="10" fontSize="8" fill="#94a3b8">y</text>
          <polyline points={pts.slice(0, k + 1).map(([x, y]) => `${SX(x)},${SY(y)}`).join(" ")} fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinejoin="round" />
          <g transform={`translate(${SX(cx)},${SY(cy)}) rotate(${heading - 90})`}>
            <circle r="9" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
            <path d="M-6,-7 l2,-6 l4,5 M6,-7 l-2,-6 l-4,5" fill="#f59e0b" stroke="#b45309" strokeWidth="1.2" />
            <circle cx="3" cy="-2" r="1.6" fill="#1e293b" /><circle cx="3" cy="3" r="1.6" fill="#1e293b" />
            <path d="M9,0 l7,0" stroke="#b45309" strokeWidth="2" />
          </g>
        </svg>
        <div className="sim-blocks">
          <div className="sim-block is-event">⚑ {L(W.flag, lang)}</div>
          <div className="sim-block is-control">{L(W.repeat, lang)} <b>{n}</b>
            <div className="sim-block is-motion">{fill(L(W.move, lang), s)}</div>
            <div className="sim-block is-motion">{fill(L(W.turn, lang), a)}</div>
          </div>
        </div>
      </div>
      <Slider label={L(W.times, lang)} value={n} min={1} max={36} lang={lang} onChange={set(setN)} />
      <Slider label={L(W.steps, lang)} value={s} min={5} max={200} step={5} lang={lang} onChange={set(setS)} />
      <Slider label={L(W.angle, lang)} value={a} min={0} max={180} lang={lang} display={`${a}°`} onChange={set(setA)} />
      <div className="art-row">
        <button type="button" className="art-btn is-primary" onClick={() => { setShown(0); setRunning(true); }}><Play className="size-4" aria-hidden="true" />{L(W.run, lang)}</button>
        <button type="button" className="art-btn" onClick={() => { setRunning(false); setShown(0); }}><RotateCcw className="size-4" aria-hidden="true" />{L(UI.again, lang)}</button>
      </div>
      <Readouts items={[["x", r1(cx), COLORS.a], ["y", r1(cy), COLORS.c], [L(W.total, lang), `${n} × ${a}° = ${total}°`, COLORS.b]]} />
      <p className={back ? "sim-note is-good" : "sim-note"}>{back ? L(W.closed, lang).replace("{n}", String(total)) : L(W.open, lang)}</p>
      {off ? <p className="sim-note is-bad">{L(W.off, lang)}</p> : null}
      <div className="art-chips">
        {PRESETS.map(([pn, ps, pa], i) => <button key={i} type="button" className="art-chip" onClick={() => { setN(pn); setS(ps); setA(pa); setShown(0); setRunning(true); }}>{L(W.shapes[i], lang)}</button>)}
      </div>
    </ArtFrame>
  );
}
