"use client";

import { useState } from "react";
import { list } from "@/lib/art/spec";
import type { WidgetProps } from "../art-block";
import { ArtFrame, Chip } from "../frame";
import { UI } from "../labels";

type P = [number, number];
const lerp = (a: P, b: P, f: number): P => [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
const pts = (...ps: P[]) => ps.map((p) => p.join(",")).join(" ");
function cross(a1: P, a2: P, b1: P, b2: P): P {
  const d = (a1[0] - a2[0]) * (b1[1] - b2[1]) - (a1[1] - a2[1]) * (b1[0] - b2[0]);
  const x = ((a1[0] * a2[1] - a1[1] * a2[0]) * (b1[0] - b2[0]) - (a1[0] - a2[0]) * (b1[0] * b2[1] - b1[1] * b2[0])) / d;
  const y = ((a1[0] * a2[1] - a1[1] * a2[0]) * (b1[1] - b2[1]) - (a1[1] - a2[1]) * (b1[0] * b2[1] - b1[1] * b2[0])) / d;
  return [x, y];
}

/** Linear perspective: drag the horizon; boxes, a road and a street follow the vanishing point(s). */
export default function Perspective({ spec, lang }: WidgetProps) {
  const modes = list(spec.opts.modes, ["one", "two"]);
  const [mode, setMode] = useState(spec.opts.mode === "two" ? "two" : modes[0] === "two" ? "two" : "one");
  const [hy, setHy] = useState(80);
  return (
    <ArtFrame kind="experiment" title={UI.perspective[lang]} body={spec.body || UI.perspectiveHint[lang]}>
      <div className="art-persp">
        <svg viewBox="0 0 320 200" className="art-scene">
          <rect width="320" height={hy} fill="#d6ecfb" />
          <rect y={hy} width="320" height={200 - hy} fill="#e7e2d6" />
          {mode === "one" ? <OnePoint hy={hy} /> : <TwoPoint hy={hy} />}
          <line x1="0" y1={hy} x2="320" y2={hy} stroke="#e0262f" strokeWidth="1.6" />
          <text x="314" y={hy - 5} textAnchor="end" className="art-svg-text art-halo" fill="#e0262f">{UI.horizon[lang]}</text>
        </svg>
        <label className="art-range-label">
          <span>{UI.horizon[lang]}</span>
          <input type="range" min={20} max={180} value={hy} onChange={(e) => setHy(Number(e.target.value))} className="art-range" />
        </label>
        {modes.length > 1 ? (
          <div className="art-chips">
            <Chip active={mode === "one"} onClick={() => setMode("one")}>{UI.onePoint[lang]}</Chip>
            <Chip active={mode === "two"} onClick={() => setMode("two")}>{UI.twoPoint[lang]}</Chip>
          </div>
        ) : null}
      </div>
    </ArtFrame>
  );
}

function OnePoint({ hy }: { hy: number }) {
  const vp: P = [160, hy];
  const boxes: Array<[number, number, number, number, string]> = [
    [14, 70, 70, 80, "#f2a03d"], [236, 50, 70, 100, "#7cb8e8"], [130, 150, 60, 34, "#e0602f"],
  ];
  return (
    <g>
      <polygon points={pts([110, 200], [210, 200], vp)} fill="#9aa0a8" />
      <line x1="160" y1="200" x2={vp[0]} y2={vp[1]} stroke="#fff" strokeWidth="2" strokeDasharray="10 8" />
      {boxes.map(([x, y, w, h, c], k) => {
        const f = 0.32;
        const A: P = [x, y], B: P = [x + w, y], C: P = [x + w, y + h], D: P = [x, y + h];
        const [a, b, cc, d] = [A, B, C, D].map((p) => lerp(p, vp, f));
        const faces: Array<[P[], number]> = [];
        if (vp[1] < y) faces.push([[A, B, b, a], 0.95]);
        if (vp[1] > y + h) faces.push([[D, C, cc, d], 0.55]);
        if (vp[0] < x) faces.push([[A, D, d, a], 0.7]);
        if (vp[0] > x + w) faces.push([[B, C, cc, b], 0.7]);
        return (
          <g key={k}>
            {[A, B, C, D].map((p, i) => <line key={i} x1={p[0]} y1={p[1]} x2={vp[0]} y2={vp[1]} stroke="#4f46e5" strokeWidth=".8" strokeDasharray="3 4" opacity=".6" />)}
            {faces.map(([f2, l], i) => <polygon key={i} points={pts(...f2)} fill={c} style={{ filter: `brightness(${l})` }} stroke="#1e1b4b" strokeWidth="1" />)}
            <rect x={x} y={y} width={w} height={h} fill={c} stroke="#1e1b4b" strokeWidth="1.2" />
          </g>
        );
      })}
      <circle cx={vp[0]} cy={vp[1]} r="4" fill="#e0262f" />
    </g>
  );
}

function TwoPoint({ hy }: { hy: number }) {
  const L: P = [-40, hy], R: P = [360, hy];
  const top: P = [160, 70], bot: P = [160, 150];
  const f = 0.42;
  const lt = lerp(top, L, f), lb = lerp(bot, L, f), rt = lerp(top, R, f * 0.9), rb = lerp(bot, R, f * 0.9);
  const backTop = cross(lt, R, rt, L), backBot = cross(lb, R, rb, L);
  const showTop = hy < top[1], showBot = hy > bot[1];
  return (
    <g>
      {[top, bot].flatMap((p, i) => [L, R].map((v, j) => <line key={`${i}${j}`} x1={p[0]} y1={p[1]} x2={v[0]} y2={v[1]} stroke="#4f46e5" strokeWidth=".8" strokeDasharray="3 4" opacity=".6" />))}
      {showTop ? <polygon points={pts(top, lt, backTop, rt)} fill="#fbd38d" stroke="#1e1b4b" /> : null}
      {showBot ? <polygon points={pts(bot, lb, backBot, rb)} fill="#b7791f" stroke="#1e1b4b" /> : null}
      <polygon points={pts(top, lt, lb, bot)} fill="#f6ad55" stroke="#1e1b4b" strokeWidth="1.2" />
      <polygon points={pts(top, rt, rb, bot)} fill="#dd6b20" stroke="#1e1b4b" strokeWidth="1.2" />
      <circle cx="4" cy={hy} r="4" fill="#e0262f" />
      <circle cx="316" cy={hy} r="4" fill="#e0262f" />
    </g>
  );
}
