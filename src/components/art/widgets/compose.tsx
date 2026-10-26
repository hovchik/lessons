"use client";

import { useRef, useState } from "react";
import type { WidgetProps } from "../art-block";
import { ArtFrame, Chip } from "../frame";
import { UI } from "../labels";

type Shape = { id: string; x: number; y: number; r: number; color: string; kind: "circle" | "square" | "triangle" };
const START: Shape[] = [
  { id: "a", x: 150, y: 100, r: 34, color: "#e0262f", kind: "circle" },
  { id: "b", x: 70, y: 140, r: 20, color: "#1f5fbf", kind: "square" },
  { id: "c", x: 240, y: 60, r: 14, color: "#ffd21f", kind: "triangle" },
];

/** Composition playground: drag shapes, check balance, use the thirds grid. */
export default function Compose({ spec, lang }: WidgetProps) {
  const [shapes, setShapes] = useState(START);
  const [grid, setGrid] = useState(true);
  const drag = useRef<{ id: string; dx: number; dy: number } | null>(null);
  const svg = useRef<SVGSVGElement>(null);

  const toLocal = (e: React.PointerEvent) => {
    const r = svg.current!.getBoundingClientRect();
    return { x: ((e.clientX - r.left) / r.width) * 300, y: ((e.clientY - r.top) / r.height) * 200 };
  };
  const down = (id: string) => (e: React.PointerEvent) => {
    const p = toLocal(e);
    const s = shapes.find((q) => q.id === id)!;
    drag.current = { id, dx: s.x - p.x, dy: s.y - p.y };
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };
  const move = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const p = toLocal(e);
    setShapes((all) => all.map((s) => (s.id === d.id ? { ...s, x: Math.max(s.r, Math.min(300 - s.r, p.x + d.dx)), y: Math.max(s.r, Math.min(200 - s.r, p.y + d.dy)) } : s)));
  };
  const up = () => { drag.current = null; };

  const total = shapes.reduce((a, s) => a + s.r * s.r, 0);
  const cx = shapes.reduce((a, s) => a + s.x * s.r * s.r, 0) / total;
  const bal = cx < 130 ? UI.heavyLeft : cx > 170 ? UI.heavyRight : UI.balanced;
  const main = shapes[0];
  const strong = [100, 200].some((x) => Math.abs(main.x - x) < 16) && [66.7, 133.3].some((y) => Math.abs(main.y - y) < 16);

  return (
    <ArtFrame kind="experiment" title={UI.compose[lang]} body={spec.body || UI.composeHint[lang]}>
      <div className="art-compose">
        <svg ref={svg} viewBox="0 0 300 200" className="art-scene art-touch" onPointerMove={move} onPointerUp={up} onPointerCancel={up}>
          <rect width="300" height="200" fill="#fffdf7" />
          {grid ? (
            <g stroke="#4f46e5" strokeDasharray="5 5" strokeWidth="1" opacity=".5">
              <line x1="100" y1="0" x2="100" y2="200" /><line x1="200" y1="0" x2="200" y2="200" />
              <line x1="0" y1="66.7" x2="300" y2="66.7" /><line x1="0" y1="133.3" x2="300" y2="133.3" />
              {[100, 200].flatMap((x) => [66.7, 133.3].map((y) => <circle key={`${x}${y}`} cx={x} cy={y} r="4" fill="#4f46e5" stroke="none" />))}
            </g>
          ) : null}
          {shapes.map((s) => (
            <g key={s.id} onPointerDown={down(s.id)} style={{ cursor: "grab" }}>
              {s.kind === "circle" ? <circle cx={s.x} cy={s.y} r={s.r} fill={s.color} /> : s.kind === "square" ? <rect x={s.x - s.r} y={s.y - s.r} width={s.r * 2} height={s.r * 2} rx="3" fill={s.color} /> : <path d={`M${s.x} ${s.y - s.r} L${s.x + s.r} ${s.y + s.r} H${s.x - s.r}Z`} fill={s.color} />}
            </g>
          ))}
          <g transform="translate(150 192)">
            <line x1="-60" y1="0" x2="60" y2="0" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
            <path d="M-6 6 L0 -2 L6 6Z" fill="#94a3b8" />
            <circle cx={Math.max(-60, Math.min(60, (cx - 150) * 0.8))} cy="-5" r="5" fill="#1e1b4b" />
          </g>
        </svg>
        <p className="art-mix-name" aria-live="polite">
          {UI.balance[lang]}: <strong>{bal[lang]}</strong>
          {grid && strong ? <><br />{UI.onThird[lang]}</> : null}
        </p>
        <div className="art-chips">
          <Chip active={grid} onClick={() => setGrid(!grid)}>{UI.thirds[lang]}</Chip>
          <Chip onClick={() => setShapes(START)}>{UI.again[lang]}</Chip>
        </div>
      </div>
    </ArtFrame>
  );
}
