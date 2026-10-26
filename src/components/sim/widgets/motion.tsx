"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Arrow, Choice, Controls, fmt, Graph, PlayBar, Readouts, Slider, Stage, useClock } from "../kit";
import { L, t } from "../labels";

const W = {
  title: t("Experiment: motion and its graphs", "Փորձ․ շարժումը և դրա գրաֆիկները", "Опыт: движение и его графики"),
  fallTitle: t("Experiment: free fall", "Փորձ․ ազատ անկում", "Опыт: свободное падение"),
  twoTitle: t("Experiment: who is moving?", "Փորձ․ ո՞վ է շարժվում", "Опыт: кто движется?"),
  hint: t(
    "Set the speed and the acceleration, press Play and watch the dots: one dot every second. Compare the car with both graphs.",
    "Ընտրի՛ր արագությունը և արագացումը, սեղմի՛ր «Սկսել» և հետևի՛ր կետերին․ ամեն վայրկյան մեկ կետ։ Համեմատի՛ր մեքենան երկու գրաֆիկների հետ։",
    "Задай скорость и ускорение, нажми «Пуск» и смотри на точки: одна точка каждую секунду. Сравни машину с обоими графиками.",
  ),
  uniformHint: t(
    "Set the speed and press Play. Equal distances in equal times: the dots are evenly spaced and the x–t graph is a straight line.",
    "Ընտրի՛ր արագությունը և սեղմի՛ր «Սկսել»։ Հավասար ժամանակում՝ հավասար ճանապարհ․ կետերը հավասարաչափ են, իսկ x–t գրաֆիկը ուղիղ է։",
    "Задай скорость и нажми «Пуск». За равные промежутки времени равные пути: точки стоят равномерно, график x–t прямой.",
  ),
  fallHint: t(
    "Drop the ball and look at the flashes taken every 0.2 s: the gaps grow, because the speed grows by 10 m/s every second.",
    "Բա՛ց թող գնդակը և նայի՛ր 0,2 վ-ը մեկ արված լուսանկարներին․ միջակայքերը մեծանում են, որովհետև արագությունն ամեն վայրկյան աճում է 10 մ/վ-ով։",
    "Отпусти мяч и посмотри на вспышки через каждые 0,2 с: промежутки растут, потому что скорость каждую секунду растёт на 10 м/с.",
  ),
  twoHint: t(
    "Two cars on one road. Switch the frame of reference: from the roadside, and from car A. The same motion looks different.",
    "Երկու մեքենա մեկ ճանապարհին։ Փոխի՛ր հաշվարկման համակարգը․ ճանապարհի եզրից և A մեքենայից։ Նույն շարժումը այլ տեսք ունի։",
    "Две машины на одной дороге. Переключи систему отсчёта: с обочины и из машины A. Одно и то же движение выглядит по-разному.",
  ),
  speed: t("Starting speed v₀", "Սկզբնական արագություն v₀", "Начальная скорость v₀"),
  v: t("Speed v", "Արագություն v", "Скорость v"),
  acc: t("Acceleration a", "Արագացում a", "Ускорение a"),
  height: t("Height", "Բարձրություն", "Высота"),
  air: t("Air resistance", "Օդի դիմադրություն", "Сопротивление воздуха"),
  noAir: t("Vacuum", "Վակուում", "Вакуум"),
  frame: t("Frame of reference", "Հաշվարկման համակարգ", "Система отсчёта"),
  ground: t("Roadside", "Ճանապարհի եզր", "Обочина"),
  fromA: t("Car A", "A մեքենա", "Машина A"),
  vA: t("Speed of A", "A-ի արագությունը", "Скорость A"),
  vB: t("Speed of B", "B-ի արագությունը", "Скорость B"),
  relB: t("B relative to A", "B-ն A-ի նկատմամբ", "B относительно A"),
  landed: t("Landed after", "Ընկավ", "Упал через"),
};
const U = {
  m: t("m", "մ", "м"),
  s: t("s", "վ", "с"),
  ms: t("m/s", "մ/վ", "м/с"),
  ms2: t("m/s²", "մ/վ²", "м/с²"),
};

function Car({ x, y, color = "#4f46e5", flip = false }: { x: number; y: number; color?: string; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`}>
      <path d="M-20 -6 L-16 -14 L-6 -18 L8 -18 L14 -10 L20 -8 L20 0 L-20 0 Z" fill={color} />
      <path d="M-5 -15 L6 -15 L10 -10 L-9 -10 Z" fill="#e0f2fe" />
      <circle cx="-11" cy="0" r="4.5" fill="#1e1b4b" />
      <circle cx="11" cy="0" r="4.5" fill="#1e1b4b" />
      <circle cx="-11" cy="0" r="1.6" fill="#cbd5e1" />
      <circle cx="11" cy="0" r="1.6" fill="#cbd5e1" />
    </g>
  );
}

export default function Motion({ spec, lang }: SimProps) {
  const mode = spec.opts.mode ?? "accel";
  if (mode === "fall") return <Fall spec={spec} lang={lang} />;
  if (mode === "two") return <Two spec={spec} lang={lang} />;
  return <Line spec={spec} lang={lang} uniform={mode === "uniform"} />;
}

function Line({ spec, lang, uniform }: SimProps & { uniform: boolean }) {
  const [v0, setV0] = useState(Number(spec.opts.v ?? 10));
  const [a, setA] = useState(uniform ? 0 : Number(spec.opts.a ?? 1));
  const T = 10;
  const clock = useClock({ until: T });
  const pos = (s: number) => v0 * s + (a * s * s) / 2;
  const tEnd = (() => {
    // stops at the end of the 100 m road
    for (let s = 0; s <= T; s += 0.01) if (pos(s) > 100 || pos(s) < 0) return s;
    return T;
  })();
  const tt = Math.min(clock.t, tEnd);
  const x = pos(tt);
  const v = v0 + a * tt;
  const X = (m: number) => 22 + m * 2.8;
  const dots = Array.from({ length: Math.floor(tt) + 1 }, (_, k) => pos(k));
  const pts = (f: (s: number) => number) => Array.from({ length: 41 }, (_, k) => [(k * tEnd) / 40, f((k * tEnd) / 40)] as [number, number]);
  const done = (k: number) => (k <= tt ? 1 : 0);
  const xs = pts(pos).filter(([s]) => done(s));
  const vs = pts((s) => v0 + a * s).filter(([s]) => done(s));
  const vmax = Math.max(20, Math.abs(v0) + Math.abs(a) * T);
  return (
    <ArtFrame kind="experiment" title={L(W.title, lang)} body={spec.body || L(uniform ? W.uniformHint : W.hint, lang)}>
      <Stage w={320} h={92} label={L(W.title, lang)}>
        <rect y="58" width="320" height="34" fill="#cbd5e1" />
        <line x1="0" x2="320" y1="75" y2="75" stroke="#fff" strokeWidth="2" strokeDasharray="10 8" />
        {Array.from({ length: 11 }, (_, k) => (
          <g key={k}>
            <line x1={X(k * 10)} x2={X(k * 10)} y1="58" y2="64" stroke="#475569" />
            <text x={X(k * 10)} y="89" textAnchor="middle" className="sim-axis">{k * 10}</text>
          </g>
        ))}
        {dots.map((d, k) => <circle key={k} cx={X(d)} cy="70" r="3" fill="#e11d48" />)}
        <Car x={X(x)} y={56} flip={v < 0} />
        <Arrow x1={X(x)} y1={28} x2={X(x) + v * 2.2} y2={28} color="#059669" label={`v = ${fmt(v, 1, lang)} ${L(U.ms, lang)}`} />
        {a !== 0 ? <Arrow x1={X(x)} y1={12} x2={X(x) + a * 9} y2={12} color="#d97706" label="a" /> : null}
      </Stage>
      <div className="sim-layout is-even" style={{ marginTop: "0.6rem" }}>
        <Graph x={[0, T]} y={[0, 100]} series={[{ pts: xs, color: "#4f46e5" }]} xLabel={`t, ${L(U.s, lang)}`} yLabel={`x, ${L(U.m, lang)}`} cursor={tt} />
        <Graph x={[0, T]} y={[Math.min(0, -vmax * (a < 0 ? 1 : 0)), vmax]} series={[{ pts: vs, color: "#059669" }]} xLabel={`t, ${L(U.s, lang)}`} yLabel={`v, ${L(U.ms, lang)}`} cursor={tt} />
      </div>
      <Readouts
        items={[
          ["t", `${fmt(tt, 1, lang)} ${L(U.s, lang)}`],
          ["x", `${fmt(x, 1, lang)} ${L(U.m, lang)}`, "#4f46e5"],
          ["v", `${fmt(v, 1, lang)} ${L(U.ms, lang)}`, "#059669"],
        ]}
      />
      <Controls>
        <Slider label={L(uniform ? W.v : W.speed, lang)} value={v0} min={0} max={20} step={1} unit={L(U.ms, lang)} lang={lang} onChange={(n) => { setV0(n); clock.reset(); }} />
        {uniform ? null : <Slider label={L(W.acc, lang)} value={a} min={-3} max={3} step={0.5} unit={L(U.ms2, lang)} lang={lang} onChange={(n) => { setA(n); clock.reset(); }} />}
      </Controls>
      <PlayBar clock={clock} lang={lang} />
    </ArtFrame>
  );
}

function Fall({ spec, lang }: SimProps) {
  const [h, setH] = useState(Number(spec.opts.h ?? 45));
  const [air, setAir] = useState(false);
  const g = 10;
  // with air: v' = g - k v², terminal speed about 12 m/s for a light ball
  const k = air ? g / (12 * 12) : 0;
  const sim = (s: number) => {
    if (!k) return { y: (g * s * s) / 2, v: g * s };
    const vt = Math.sqrt(g / k);
    const v = vt * Math.tanh((g * s) / vt);
    const y = (vt * vt / g) * Math.log(Math.cosh((g * s) / vt));
    return { y, v };
  };
  let tLand = 0;
  while (sim(tLand).y < h && tLand < 30) tLand += 0.005;
  const clock = useClock({ until: tLand });
  const tt = Math.min(clock.t, tLand);
  const { y, v } = sim(tt);
  const top = 22, bottom = 186;
  const Y = (m: number) => top + (m / h) * (bottom - top);
  const flashes = Array.from({ length: Math.floor(tt / 0.2) + 1 }, (_, i) => sim(i * 0.2).y);
  const series = (f: (s: number) => number) => Array.from({ length: 41 }, (_, i) => [(i * tt) / 40, f((i * tt) / 40)] as [number, number]);
  return (
    <ArtFrame kind="experiment" title={L(W.fallTitle, lang)} body={spec.body || L(W.fallHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={200} h={200} label={L(W.fallTitle, lang)}>
          <rect x="0" y={bottom + 6} width="200" height="10" fill="#a3a3a3" />
          <rect x="20" y={top} width="34" height={bottom - top + 6} fill="#e2e8f0" stroke="#94a3b8" />
          {Array.from({ length: 6 }, (_, i) => <rect key={i} x="27" y={top + 8 + i * ((bottom - top) / 6)} width="20" height="8" fill="#bfdbfe" />)}
          {Array.from({ length: 6 }, (_, i) => {
            const m = (i * h) / 5;
            return (
              <g key={i}>
                <line x1="160" x2="168" y1={Y(m) + 6} y2={Y(m) + 6} stroke="#64748b" />
                <text x="172" y={Y(m) + 9} className="sim-axis">{fmt(h - m, 0, lang)}</text>
              </g>
            );
          })}
          <line x1="164" x2="164" y1={top + 6} y2={bottom + 6} stroke="#64748b" />
          {flashes.slice(0, -1).map((f, i) => <circle key={i} cx="100" cy={Y(f) + 6} r="6" fill="#f59e0b" opacity="0.35" />)}
          <circle cx="100" cy={Y(y) + 6} r="7" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
          <Arrow x1={118} y1={Y(y) + 6} x2={118} y2={Y(y) + 6 + v * 2} color="#059669" label="v" />
        </Stage>
        <div>
          <Graph x={[0, Math.max(tLand, 1)]} y={[0, Math.max(10, Math.sqrt(2 * g * h))]} series={[{ pts: series((s) => sim(s).v), color: "#059669" }]} xLabel={`t, ${L(U.s, lang)}`} yLabel={`v, ${L(U.ms, lang)}`} cursor={tt} />
          <Readouts
            items={[
              ["t", `${fmt(tt, 2, lang)} ${L(U.s, lang)}`],
              [L(W.height, lang), `${fmt(h - y, 1, lang)} ${L(U.m, lang)}`, "#4f46e5"],
              ["v", `${fmt(v, 1, lang)} ${L(U.ms, lang)}`, "#059669"],
            ]}
          />
        </div>
      </div>
      <Controls>
        <Slider label={L(W.height, lang)} value={h} min={5} max={80} step={5} unit={L(U.m, lang)} lang={lang} onChange={(n) => { setH(n); clock.reset(); }} />
        <Choice value={air ? "air" : "vac"} options={[["vac", L(W.noAir, lang)], ["air", L(W.air, lang)]]} onChange={(m) => { setAir(m === "air"); clock.reset(); }} />
      </Controls>
      {tt >= tLand && tLand > 0 ? <p className="sim-note is-good">{L(W.landed, lang)} {fmt(tLand, 2, lang)} {L(U.s, lang)} · v = {fmt(sim(tLand).v, 1, lang)} {L(U.ms, lang)}</p> : null}
      <PlayBar clock={clock} lang={lang} />
    </ArtFrame>
  );
}

function Two({ spec, lang }: SimProps) {
  const [vA, setVA] = useState(10);
  const [vB, setVB] = useState(15);
  const [frame, setFrame] = useState<"ground" | "a">("ground");
  const clock = useClock({ until: 8 });
  const tt = clock.t;
  const xA = 10 + vA * tt, xB = vB * tt;
  const shift = frame === "a" ? xA - 50 : 0; // in A's frame A stays put at 50 m
  const X = (m: number) => 10 + (m - shift) * 2.5;
  const marks = [];
  const first = Math.floor(shift / 10) * 10;
  for (let m = first; m < first + 140; m += 10) marks.push(m);
  return (
    <ArtFrame kind="experiment" title={L(W.twoTitle, lang)} body={spec.body || L(W.twoHint, lang)}>
      <Stage w={320} h={120} label={L(W.twoTitle, lang)}>
        <rect y="40" width="320" height="70" fill="#cbd5e1" />
        <line x1="0" x2="320" y1="75" y2="75" stroke="#fff" strokeWidth="2" strokeDasharray="10 8" />
        {marks.map((m) => (
          <g key={m}>
            <rect x={X(m) - 2} y="20" width="4" height="20" fill="#16a34a" />
            <circle cx={X(m)} cy="18" r="7" fill="#22c55e" />
          </g>
        ))}
        <Car x={X(xA)} y={66} color="#4f46e5" />
        <text x={X(xA)} y={52} textAnchor="middle" className="sim-tag" fill="#4f46e5">A</text>
        <Car x={X(xB)} y={102} color="#e11d48" />
        <text x={X(xB)} y={88} textAnchor="middle" className="sim-tag" fill="#e11d48">B</text>
      </Stage>
      <Readouts
        items={[
          [`${L(W.vA, lang)} (${L(frame === "a" ? W.fromA : W.ground, lang)})`, `${fmt(frame === "a" ? 0 : vA, 0, lang)} ${L(U.ms, lang)}`, "#4f46e5"],
          [`${L(W.vB, lang)} (${L(frame === "a" ? W.fromA : W.ground, lang)})`, `${fmt(frame === "a" ? vB - vA : vB, 0, lang)} ${L(U.ms, lang)}`, "#e11d48"],
          [L(W.relB, lang), `${fmt(vB - vA, 0, lang)} ${L(U.ms, lang)}`],
        ]}
      />
      <Controls>
        <p className="art-ctrl-label">{L(W.frame, lang)}</p>
        <Choice value={frame} options={[["ground", L(W.ground, lang)], ["a", L(W.fromA, lang)]]} onChange={setFrame} />
        <Slider label={L(W.vA, lang)} value={vA} min={0} max={20} unit={L(U.ms, lang)} lang={lang} onChange={(n) => { setVA(n); clock.reset(); }} />
        <Slider label={L(W.vB, lang)} value={vB} min={0} max={20} unit={L(U.ms, lang)} lang={lang} onChange={(n) => { setVB(n); clock.reset(); }} />
      </Controls>
      <PlayBar clock={clock} lang={lang} />
    </ArtFrame>
  );
}

