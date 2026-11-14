"use client";

import type { ReactNode } from "react";
import type { ArtLang, Tr } from "@/lib/art/spec";
import { L } from "../labels";
import { ease } from "./draw";

/* Small drawing pieces shared by the how-to step players (mech/howto-*.tsx). */

export const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
/** Eased progress that finishes in the first two thirds of the loop and then holds. */
export const K = (p: number) => ease(Math.min(1, p * 1.5));
/** A gentle back-and-forth wobble, -1…1. */
export const wob = (p: number, n = 2) => Math.sin(p * Math.PI * 2 * n);

export const INK = "#1e1b4b";
export const SKIN = "#f5c9a5";
export const SKIN_D = "#d69a6d";
export const GRASS = "#86efac";
export const SOIL = "#a16207";
export const WATER = "#38bdf8";
export const WOOD = "#92400e";
export const RED = "#dc2626";
export const GREEN = "#16a34a";

/** Text in the picture; `|` breaks the line. */
export const Tx = ({ x, y, s, lang, size = 9, fill = INK, anchor = "middle", w = 800 }: { x: number; y: number; s: Tr; lang: ArtLang; size?: number; fill?: string; anchor?: "start" | "middle" | "end"; w?: number }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={w} fill={fill}>
    {L(s, lang).split("|").map((line, k) => <tspan key={k} x={x} dy={k ? size * 1.15 : 0}>{line}</tspan>)}
  </text>
);

/** A dashed curved arrow along an SVG path. */
export const Arrow = ({ d, c = "#7c3aed", w = 2, dash = true }: { d: string; c?: string; w?: number; dash?: boolean }) => (
  <g>
    <defs>
      <marker id={`howto-arr-${c.slice(1)}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 Z" fill={c} />
      </marker>
    </defs>
    <path d={d} fill="none" stroke={c} strokeWidth={w} strokeDasharray={dash ? "4 3" : undefined} strokeLinecap="round" markerEnd={`url(#howto-arr-${c.slice(1)})`} />
  </g>
);

/** A round tick or cross badge. */
export const Mark = ({ x, y, ok, r = 9 }: { x: number; y: number; ok: boolean; r?: number }) => (
  <g>
    <circle cx={x} cy={y} r={r} fill={ok ? GREEN : RED} stroke="#fff" strokeWidth="1.5" />
    {ok ? (
      <path d={`M${x - r * 0.45},${y} l${r * 0.3},${r * 0.35} l${r * 0.55},${-r * 0.7}`} stroke="#fff" strokeWidth={r * 0.28} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <path d={`M${x - r * 0.4},${y - r * 0.4} l${r * 0.8},${r * 0.8} M${x + r * 0.4},${y - r * 0.4} l${-r * 0.8},${r * 0.8}`} stroke="#fff" strokeWidth={r * 0.28} strokeLinecap="round" />
    )}
  </g>
);

/** Soap or foam bubbles that drift with p. */
export function Bubbles({ x, y, w = 60, h = 30, n = 8, p = 0, color = "#e0f2fe" }: { x: number; y: number; w?: number; h?: number; n?: number; p?: number; color?: string }) {
  const out: ReactNode[] = [];
  for (let k = 0; k < n; k++) {
    const bx = x + ((k * 37) % w) - w / 2 + Math.sin(p * 6.28 + k) * 3;
    const by = y + ((k * 23) % h) - h / 2 - ((p * 20 + k * 5) % 12);
    out.push(<circle key={k} cx={bx} cy={by} r={2.5 + (k % 3) * 1.6} fill={color} fillOpacity="0.85" stroke="#7dd3fc" strokeWidth="0.8" />);
  }
  return <g>{out}</g>;
}

/** A flickering flame; s is its height in px. */
export function Flame({ x, y, s = 30, p = 0 }: { x: number; y: number; s?: number; p?: number }) {
  const f = 1 + Math.sin(p * Math.PI * 8) * 0.08;
  const h = s * f, w = s * 0.55;
  return (
    <g>
      <path d={`M${x},${y - h} C${x + w * 0.9},${y - h * 0.45} ${x + w},${y} ${x},${y} C${x - w},${y} ${x - w * 0.9},${y - h * 0.45} ${x},${y - h} Z`} fill="#f97316" />
      <path d={`M${x},${y - h * 0.62} C${x + w * 0.5},${y - h * 0.3} ${x + w * 0.5},${y} ${x},${y} C${x - w * 0.5},${y} ${x - w * 0.5},${y - h * 0.3} ${x},${y - h * 0.62} Z`} fill="#fde047" />
    </g>
  );
}

/** A water drop. */
export const Drop = ({ x, y, s = 6, fill = WATER }: { x: number; y: number; s?: number; fill?: string }) => (
  <path d={`M${x},${y - s} C${x + s * 0.8},${y - s * 0.1} ${x + s * 0.7},${y + s * 0.7} ${x},${y + s * 0.7} C${x - s * 0.7},${y + s * 0.7} ${x - s * 0.8},${y - s * 0.1} ${x},${y - s} Z`} fill={fill} />
);

export const Sun = ({ x, y, r = 14, p = 0 }: { x: number; y: number; r?: number; p?: number }) => (
  <g>
    {Array.from({ length: 8 }, (_, k) => {
      const a = (k / 8) * Math.PI * 2 + p * 0.6;
      return <line key={k} x1={x + Math.cos(a) * (r + 3)} y1={y + Math.sin(a) * (r + 3)} x2={x + Math.cos(a) * (r + 9)} y2={y + Math.sin(a) * (r + 9)} stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />;
    })}
    <circle cx={x} cy={y} r={r} fill="#fcd34d" stroke="#f59e0b" strokeWidth="2" />
  </g>
);

export const Tree = ({ x, y, s = 1, fill = "#22c55e" }: { x: number; y: number; s?: number; fill?: string }) => (
  <g>
    <rect x={x - 3 * s} y={y - 18 * s} width={6 * s} height={18 * s} fill={WOOD} />
    <circle cx={x} cy={y - 30 * s} r={16 * s} fill={fill} />
    <circle cx={x - 9 * s} cy={y - 22 * s} r={10 * s} fill={fill} />
    <circle cx={x + 9 * s} cy={y - 22 * s} r={10 * s} fill={fill} />
  </g>
);

/** A simple child: `arms` gives the angle of each arm in degrees (0 = down, 90 = sideways). */
export function Kid({ x, y, s = 1, shirt = "#6366f1", arms = [20, 20], hair = "#78350f", face = true }: { x: number; y: number; s?: number; shirt?: string; arms?: [number, number]; hair?: string; face?: boolean }) {
  const arm = (side: -1 | 1, deg: number) => {
    const a = (deg * Math.PI) / 180;
    const sx = x + side * 7 * s, sy = y - 30 * s;
    return <line x1={sx} y1={sy} x2={sx + side * Math.sin(a) * 18 * s} y2={sy + Math.cos(a) * 18 * s} stroke={SKIN_D} strokeWidth={4 * s} strokeLinecap="round" />;
  };
  return (
    <g>
      <line x1={x - 4 * s} y1={y - 12 * s} x2={x - 5 * s} y2={y} stroke="#1e3a8a" strokeWidth={5 * s} strokeLinecap="round" />
      <line x1={x + 4 * s} y1={y - 12 * s} x2={x + 5 * s} y2={y} stroke="#1e3a8a" strokeWidth={5 * s} strokeLinecap="round" />
      {arm(-1, arms[0])}
      {arm(1, arms[1])}
      <rect x={x - 8 * s} y={y - 33 * s} width={16 * s} height={22 * s} rx={5 * s} fill={shirt} />
      <circle cx={x} cy={y - 41 * s} r={8 * s} fill={SKIN} />
      <path d={`M${x - 8 * s},${y - 42 * s} a${8 * s},${8 * s} 0 0 1 ${16 * s},0 q${-8 * s},${-4 * s} ${-16 * s},0 Z`} fill={hair} />
      {face ? (
        <g>
          <circle cx={x - 3 * s} cy={y - 41 * s} r={1 * s} fill={INK} />
          <circle cx={x + 3 * s} cy={y - 41 * s} r={1 * s} fill={INK} />
          <path d={`M${x - 2.5 * s},${y - 37.5 * s} q${2.5 * s},${2 * s} ${5 * s},0`} stroke={INK} strokeWidth={0.9 * s} fill="none" strokeLinecap="round" />
        </g>
      ) : null}
    </g>
  );
}

/** A grown-up (taller, for "with an adult" scenes). */
export const Adult = ({ x, y, shirt = "#0f766e", arms = [20, 20] as [number, number] }: { x: number; y: number; shirt?: string; arms?: [number, number] }) => (
  <Kid x={x} y={y} s={1.35} shirt={shirt} arms={arms} hair="#44403c" />
);

/**
 * An open hand seen from the palm side, fingers up, centred on the palm.
 * `flip` mirrors it (left hand), `rot` turns it in degrees.
 */
export function Hand({ x, y, s = 1, rot = 0, flip = false, fill = SKIN, back = false }: { x: number; y: number; s?: number; rot?: number; flip?: boolean; fill?: string; back?: boolean }) {
  const fingers = [-10.5, -3.5, 3.5, 10.5];
  const lens = [15, 19, 18, 13];
  return (
    <g transform={`translate(${x},${y}) rotate(${rot}) scale(${flip ? -s : s},${s})`}>
      {fingers.map((fx, k) => <rect key={k} x={fx - 3.2} y={-14 - lens[k]} width={6.4} height={lens[k] + 6} rx={3.2} fill={fill} stroke={SKIN_D} strokeWidth="1" />)}
      {back ? fingers.map((fx, k) => <rect key={`n${k}`} x={fx - 2.2} y={-12 - lens[k]} width={4.4} height={4} rx={1.5} fill="#fde2e2" stroke={SKIN_D} strokeWidth="0.6" />) : null}
      <path d="M14,-4 C22,-10 26,-16 24,-20 C22,-24 16,-18 12,-12" fill={fill} stroke={SKIN_D} strokeWidth="1" />
      <rect x={-14} y={-15} width={28} height={30} rx={11} fill={fill} stroke={SKIN_D} strokeWidth="1" />
      {!back ? <path d="M-8,2 q8,5 16,-1 M-6,-6 q6,3 12,0" stroke={SKIN_D} strokeWidth="0.8" fill="none" /> : null}
    </g>
  );
}

/** A label pill: rounded box with centred text. */
export const Pill = ({ x, y, s, lang, fill = "#fff", stroke = INK, color = INK, size = 8.5, w = 70 }: { x: number; y: number; s: Tr; lang: ArtLang; fill?: string; stroke?: string; color?: string; size?: number; w?: number }) => (
  <g>
    <rect x={x - w / 2} y={y - size - 3} width={w} height={size * 2 + 2} rx={(size * 2 + 2) / 2} fill={fill} stroke={stroke} strokeWidth="1.2" />
    <Tx x={x} y={y + size * 0.1} s={s} lang={lang} size={size} fill={color} />
  </g>
);

/** Ground strip across the picture. */
export const Ground = ({ y, w = 320, h = 220, fill = GRASS }: { y: number; w?: number; h?: number; fill?: string }) => <rect x={0} y={y} width={w} height={h - y} fill={fill} />;
