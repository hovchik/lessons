"use client";

import type { ReactNode } from "react";

/** Small drawing pieces shared by the step-by-step mechanisms. */

export function Tag({ x, y, children, color = "#1e1b4b", anchor = "middle", plain }: { x: number; y: number; children: ReactNode; color?: string; anchor?: "start" | "middle" | "end"; plain?: boolean }) {
  return <text x={x} y={y} textAnchor={anchor} className={`sim-tag${plain ? " is-plain" : ""}`} fill={color}>{children}</text>;
}

export function Particle({ x, y, r = 6, color, sign }: { x: number; y: number; r?: number; color: string; sign?: "+" | "−" | "" }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={color} stroke="#fff" strokeWidth="1" />
      {sign ? <text x={x} y={y + r * 0.45} textAnchor="middle" fontSize={r * 1.3} fontWeight="900" fill="#fff">{sign}</text> : null}
    </g>
  );
}

export const proton = (x: number, y: number, r = 6) => <Particle x={x} y={y} r={r} color="#e11d48" sign="+" />;
export const neutron = (x: number, y: number, r = 6) => <Particle x={x} y={y} r={r} color="#64748b" />;
export const electron = (x: number, y: number, r = 4) => <Particle x={x} y={y} r={r} color="#2563eb" sign="−" />;

/** A clump of protons and neutrons that looks like a nucleus. */
export function Nucleus({ x, y, n = 12, r = 4.5, wobble = 0 }: { x: number; y: number; n?: number; r?: number; wobble?: number }) {
  const out: ReactNode[] = [];
  for (let k = 0; k < n; k++) {
    const a = k * 2.399963;
    const d = Math.sqrt(k / n) * r * Math.sqrt(n) * 0.95;
    const px = x + Math.cos(a) * d * (1 + wobble), py = y + Math.sin(a) * d * (1 - wobble * 0.6);
    out.push(k % 2 ? <circle key={k} cx={px} cy={py} r={r} fill="#64748b" stroke="#fff" strokeWidth="0.8" /> : <circle key={k} cx={px} cy={py} r={r} fill="#e11d48" stroke="#fff" strokeWidth="0.8" />);
  }
  return <g>{out}</g>;
}

/** A wavy photon with an arrow head, from (x1,y1) to (x2,y2). */
export function Photon({ x1, y1, x2, y2, color = "#f59e0b", waves = 4 }: { x1: number; y1: number; x2: number; y2: number; color?: string; waves?: number }) {
  const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy);
  const ux = dx / len, uy = dy / len;
  const pts: string[] = [];
  for (let k = 0; k <= 40; k++) {
    const s = (k / 40) * (len - 6);
    const a = Math.sin((k / 40) * waves * 2 * Math.PI) * 4;
    pts.push(`${(x1 + ux * s - uy * a).toFixed(1)},${(y1 + uy * s + ux * a).toFixed(1)}`);
  }
  return (
    <g>
      <polyline points={pts.join(" ")} fill="none" stroke={color} strokeWidth="2" />
      <polygon points={`${x2},${y2} ${x2 - ux * 7 - uy * 4},${y2 - uy * 7 + ux * 4} ${x2 - ux * 7 + uy * 4},${y2 - uy * 7 - ux * 4}`} fill={color} />
    </g>
  );
}

/** Deterministic scatter of points in a box, for gases and crowds of particles. */
export function scatter(n: number, x: number, y: number, w: number, h: number, seed = 1) {
  let s = seed * 9301 + 49297;
  const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  return Array.from({ length: n }, () => ({ x: x + r() * w, y: y + r() * h }));
}

export const ease = (p: number) => (1 - Math.cos(Math.PI * Math.min(1, Math.max(0, p)))) / 2;
