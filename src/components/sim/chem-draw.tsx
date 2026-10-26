"use client";

import type { ReactNode } from "react";

/** Lab glassware shared by the chemistry widgets. Coordinates are the top-left of the vessel. */

export function Beaker({ x, y, w = 80, h = 90, level = 0.6, color = "#bae6fd", opacity = 0.75, children }: {
  x: number; y: number; w?: number; h?: number; level?: number; color?: string; opacity?: number; children?: ReactNode;
}) {
  const top = y + h * (1 - level);
  return (
    <g>
      <path d={`M${x},${top} L${x},${y + h - 8} Q${x},${y + h} ${x + 8},${y + h} L${x + w - 8},${y + h} Q${x + w},${y + h} ${x + w},${y + h - 8} L${x + w},${top} Z`} fill={color} opacity={opacity} style={{ transition: "fill 500ms ease" }} />
      {children}
      <path d={`M${x - 4},${y} L${x},${y + 4} L${x},${y + h - 8} Q${x},${y + h} ${x + 8},${y + h} L${x + w - 8},${y + h} Q${x + w},${y + h} ${x + w},${y + h - 8} L${x + w},${y}`} fill="none" stroke="#64748b" strokeWidth="2.2" strokeLinejoin="round" />
      {[0.25, 0.5, 0.75].map((k) => <line key={k} x1={x + w - 12} x2={x + w - 2} y1={y + h * k} y2={y + h * k} stroke="#94a3b8" strokeWidth="1" />)}
    </g>
  );
}

/** Conical (Erlenmeyer) flask, `w` is the base width. */
export function Flask({ x, y, w = 90, h = 90, level = 0.4, color = "#e0f2fe", opacity = 0.8 }: {
  x: number; y: number; w?: number; h?: number; level?: number; color?: string; opacity?: number;
}) {
  const neck = w * 0.24, nh = h * 0.28, cx = x + w / 2;
  const body = (k: number) => {
    const yy = y + h - (h - nh) * k;
    const half = w / 2 - (w / 2 - neck / 2) * k;
    return { yy, half };
  };
  const lv = body(level);
  return (
    <g>
      <path d={`M${cx - lv.half},${lv.yy} L${x + 6},${y + h - 4} Q${x},${y + h} ${x + 10},${y + h} L${x + w - 10},${y + h} Q${x + w},${y + h} ${x + w - 6},${y + h - 4} L${cx + lv.half},${lv.yy} Z`} fill={color} opacity={opacity} style={{ transition: "fill 500ms ease" }} />
      <path d={`M${cx - neck / 2},${y} L${cx - neck / 2},${y + nh} L${x + 6},${y + h - 4} Q${x},${y + h} ${x + 10},${y + h} L${x + w - 10},${y + h} Q${x + w},${y + h} ${x + w - 6},${y + h - 4} L${cx + neck / 2},${y + nh} L${cx + neck / 2},${y}`} fill="none" stroke="#64748b" strokeWidth="2.2" strokeLinejoin="round" />
    </g>
  );
}

/** Graduated burette with a tap; `level` is the fraction still inside. */
export function Burette({ x, y, h = 120, level = 1, color = "#e0e7ff", open = false }: { x: number; y: number; h?: number; level?: number; color?: string; open?: boolean }) {
  const w = 12;
  return (
    <g>
      <rect x={x} y={y + h * (1 - level)} width={w} height={h * level} fill={color} />
      <rect x={x} y={y} width={w} height={h} fill="none" stroke="#64748b" strokeWidth="1.8" />
      {Array.from({ length: 11 }, (_, i) => <line key={i} x1={x} x2={x + (i % 5 === 0 ? 6 : 3)} y1={y + (h * i) / 10} y2={y + (h * i) / 10} stroke="#64748b" strokeWidth="0.8" />)}
      <path d={`M${x + 2},${y + h} L${x + w / 2 - 1.5},${y + h + 12} L${x + w / 2 + 1.5},${y + h + 12} L${x + w - 2},${y + h}`} fill={color} stroke="#64748b" strokeWidth="1.5" />
      <rect x={x - 6} y={y + h + 3} width={w + 12} height="4" rx="2" fill={open ? "#22c55e" : "#475569"} transform={open ? `rotate(90 ${x + w / 2} ${y + h + 5})` : undefined} />
    </g>
  );
}

/** Rising bubbles inside a box, phase `p` in 0..1 loops. */
export function Bubbles({ x, y, w, h, n = 8, p, r = 2.5, color = "#fff", seed = 1 }: { x: number; y: number; w: number; h: number; n?: number; p: number; r?: number; color?: string; seed?: number }) {
  return (
    <g>
      {Array.from({ length: n }, (_, i) => {
        const fx = ((i * 37 + seed * 13) % 97) / 97;
        const ph = (p + i / n) % 1;
        return <circle key={i} cx={x + fx * w + Math.sin(ph * 9 + i) * 2} cy={y + h - ph * h} r={r * (0.6 + 0.6 * ph)} fill={color} stroke="#64748b" strokeWidth="0.6" opacity={1 - ph * 0.6} />;
      })}
    </g>
  );
}

/** Formula with subscript digits and superscript charges: "SO4^2-" → SO₄²⁻. */
export function chemText(f: string) {
  const [body, charge] = f.split("^");
  const sub = body.replace(/(?<=[A-Za-z)\]])(\d+)/g, (d) => d.replace(/\d/g, (c) => "₀₁₂₃₄₅₆₇₈₉"[Number(c)]));
  const sup = (charge ?? "").replace(/\d/g, (c) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(c)]).replace("+", "⁺").replace("-", "⁻");
  return sub + sup;
}
