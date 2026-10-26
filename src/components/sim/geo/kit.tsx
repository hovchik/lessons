"use client";

import { useState, type ReactNode } from "react";
import type { ArtLang } from "@/lib/art/spec";
import { fmt, Handle, useDrag } from "../kit";

/** Plane geometry helpers shared by the geometry widgets. Coordinates are svg pixels, y down. */

export type P = { x: number; y: number };

export const dist = (a: P, b: P) => Math.hypot(a.x - b.x, a.y - b.y);
export const mid = (a: P, b: P): P => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
export const add = (a: P, b: P): P => ({ x: a.x + b.x, y: a.y + b.y });
export const sub = (a: P, b: P): P => ({ x: a.x - b.x, y: a.y - b.y });
export const mul = (a: P, k: number): P => ({ x: a.x * k, y: a.y * k });
export const lerpP = (a: P, b: P, k: number): P => ({ x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k });
export const dot = (a: P, b: P) => a.x * b.x + a.y * b.y;
export const cross = (a: P, b: P) => a.x * b.y - a.y * b.x;

/** Angle ABC at vertex B, in degrees (0..180). */
export function angleAt(a: P, b: P, c: P) {
  const u = sub(a, b), v = sub(c, b);
  const cos = dot(u, v) / ((Math.hypot(u.x, u.y) * Math.hypot(v.x, v.y)) || 1);
  return (Math.acos(Math.max(-1, Math.min(1, cos))) * 180) / Math.PI;
}

/** Direction angle of b seen from a, in degrees, counter-clockwise on screen (y up). */
export const heading = (a: P, b: P) => (Math.atan2(a.y - b.y, b.x - a.x) * 180) / Math.PI;

/** Foot of the perpendicular from p to line ab. */
export function foot(p: P, a: P, b: P): P {
  const d = sub(b, a);
  const k = dot(sub(p, a), d) / (dot(d, d) || 1);
  return add(a, mul(d, k));
}

/** Intersection of lines ab and cd (null when parallel). */
export function meet(a: P, b: P, c: P, d: P): P | null {
  const r = sub(b, a), s = sub(d, c);
  const den = cross(r, s);
  if (Math.abs(den) < 1e-9) return null;
  const k = cross(sub(c, a), s) / den;
  return add(a, mul(r, k));
}

export function circumcenter(a: P, b: P, c: P): P {
  const d = 2 * (a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y)) || 1e-9;
  const A = a.x * a.x + a.y * a.y, B = b.x * b.x + b.y * b.y, C = c.x * c.x + c.y * c.y;
  return { x: (A * (b.y - c.y) + B * (c.y - a.y) + C * (a.y - b.y)) / d, y: (A * (c.x - b.x) + B * (a.x - c.x) + C * (b.x - a.x)) / d };
}

export function incenter(a: P, b: P, c: P): P {
  const la = dist(b, c), lb = dist(a, c), lc = dist(a, b), s = la + lb + lc || 1;
  return { x: (la * a.x + lb * b.x + lc * c.x) / s, y: (la * a.y + lb * b.y + lc * c.y) / s };
}

export const centroid = (a: P, b: P, c: P): P => ({ x: (a.x + b.x + c.x) / 3, y: (a.y + b.y + c.y) / 3 });

export function orthocenter(a: P, b: P, c: P): P {
  return meet(a, foot(a, b, c), b, foot(b, a, c)) ?? a;
}

export const areaOf = (pts: P[]) => Math.abs(pts.reduce((s, p, i) => s + cross(p, pts[(i + 1) % pts.length]), 0)) / 2;

/** A point dragged along the grid: snaps to whole units of `step` pixels. */
export const snap = (p: P, step: number) => ({ x: Math.round(p.x / step) * step, y: Math.round(p.y / step) * step });

/**
 * A set of named draggable points kept inside the stage. `fix` can adjust a dragged point
 * (snap to a grid, keep on a circle…).
 */
export function usePoints<K extends string>(init: Record<K, P>, box: { w: number; h: number; pad?: number }, fix?: (k: K, p: P, all: Record<K, P>) => P) {
  const [pts, setPts] = useState(init);
  const pad = box.pad ?? 10;
  const drag = useDrag<K>(
    (p) => {
      let best: K | null = null, bd = 24;
      for (const k of Object.keys(pts) as K[]) { const d = dist(p, pts[k]); if (d < bd) { bd = d; best = k; } }
      return best;
    },
    (k, p) => {
      const q = { x: Math.min(box.w - pad, Math.max(pad, p.x)), y: Math.min(box.h - pad, Math.max(pad, p.y)) };
      setPts((all) => ({ ...all, [k]: fix ? fix(k, q, all) : q }));
    },
  );
  return { pts, setPts, drag };
}

/* ---------- drawing ---------- */

export const COL = { a: "#4f46e5", b: "#e11d48", c: "#0891b2", d: "#16a34a", e: "#d97706", f: "#7c3aed", line: "#1e1b4b", soft: "#94a3b8" };

export function Seg({ a, b, color = COL.line, w = 2.2, dash }: { a: P; b: P; color?: string; w?: number; dash?: string }) {
  return <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={color} strokeWidth={w} strokeDasharray={dash} strokeLinecap="round" />;
}

/** A line through a and b, extended across the stage. */
export function Line({ a, b, color = COL.soft, w = 1.5, dash, ext = 400 }: { a: P; b: P; color?: string; w?: number; dash?: string; ext?: number }) {
  const d = sub(b, a), l = Math.hypot(d.x, d.y) || 1, u = mul(d, ext / l);
  return <Seg a={sub(a, u)} b={add(b, u)} color={color} w={w} dash={dash} />;
}

export function Ray({ a, b, color = COL.line, w = 2.2 }: { a: P; b: P; color?: string; w?: number }) {
  const d = sub(b, a), l = Math.hypot(d.x, d.y) || 1;
  return <Seg a={a} b={add(a, mul(d, 400 / l))} color={color} w={w} />;
}

export function Poly({ pts, fill = "none", stroke = COL.line, w = 2.2, opacity = 1, dash }: { pts: P[]; fill?: string; stroke?: string; w?: number; opacity?: number; dash?: string }) {
  return <polygon points={pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ")} fill={fill} stroke={stroke} strokeWidth={w} fillOpacity={opacity} strokeDasharray={dash} strokeLinejoin="round" />;
}

export function Label({ p, children, dx = 0, dy = 0, color = "#1e1b4b", anchor = "middle" }: { p: P; children: ReactNode; dx?: number; dy?: number; color?: string; anchor?: "start" | "middle" | "end" }) {
  return <text x={p.x + dx} y={p.y + dy + 3.5} textAnchor={anchor} className="sim-tag" fill={color}>{children}</text>;
}

/** Name label pushed away from the centre of the figure. */
export function Name({ p, from, children, color }: { p: P; from: P; children: ReactNode; color?: string }) {
  const d = sub(p, from), l = Math.hypot(d.x, d.y) || 1;
  return <Label p={add(p, mul(d, 14 / l))} color={color}>{children}</Label>;
}

/** Arc marking angle ABC at b, with an optional label; a square for right angles. */
export function Angle({ a, b, c, r = 22, color = COL.a, label, fill = true, right }: { a: P; b: P; c: P; r?: number; color?: string; label?: string; fill?: boolean; right?: boolean }) {
  const u = sub(a, b), v = sub(c, b);
  const lu = Math.hypot(u.x, u.y) || 1, lv = Math.hypot(v.x, v.y) || 1;
  const p1 = add(b, mul(u, r / lu)), p2 = add(b, mul(v, r / lv));
  const deg = angleAt(a, b, c);
  const sweep = cross(u, v) > 0 ? 1 : 0;
  const bis = add(mul(u, 1 / lu), mul(v, 1 / lv));
  const lb = Math.hypot(bis.x, bis.y) || 1;
  const lp = add(b, mul(bis, (r + 12) / lb));
  if (right ?? Math.abs(deg - 90) < 0.5) {
    const s = r * 0.55;
    const q1 = add(b, mul(u, s / lu)), q2 = add(b, mul(v, s / lv)), q3 = add(q1, mul(v, s / lv));
    return (
      <g>
        <path d={`M${q1.x},${q1.y} L${q3.x},${q3.y} L${q2.x},${q2.y}`} fill={fill ? color : "none"} fillOpacity="0.15" stroke={color} strokeWidth="1.6" />
        {label ? <Label p={lp} color={color}>{label}</Label> : null}
      </g>
    );
  }
  return (
    <g>
      <path d={`M${b.x},${b.y} L${p1.x},${p1.y} A${r},${r} 0 0 ${sweep} ${p2.x},${p2.y} Z`} fill={fill ? color : "none"} fillOpacity="0.15" stroke="none" />
      <path d={`M${p1.x},${p1.y} A${r},${r} 0 0 ${sweep} ${p2.x},${p2.y}`} fill="none" stroke={color} strokeWidth="1.8" />
      {label ? <Label p={lp} color={color}>{label}</Label> : null}
    </g>
  );
}

/** Tick marks across a segment, to show equal lengths. */
export function Ticks({ a, b, n = 1, color = COL.line }: { a: P; b: P; n?: number; color?: string }) {
  const m = mid(a, b), d = sub(b, a), l = Math.hypot(d.x, d.y) || 1, u = mul(d, 1 / l), nrm = { x: -u.y, y: u.x };
  return (
    <g>
      {Array.from({ length: n }, (_, k) => {
        const c = add(m, mul(u, (k - (n - 1) / 2) * 4));
        return <Seg key={k} a={add(c, mul(nrm, 5))} b={sub(c, mul(nrm, 5))} color={color} w={1.6} />;
      })}
    </g>
  );
}

export function Dot({ p, color = COL.line, r = 3.2 }: { p: P; color?: string; r?: number }) {
  return <circle cx={p.x} cy={p.y} r={r} fill={color} />;
}

export function Handles<K extends string>({ pts, keys, colors, labels }: { pts: Record<K, P>; keys?: K[]; colors?: Partial<Record<K, string>>; labels?: Partial<Record<K, string>> }) {
  return <g>{(keys ?? (Object.keys(pts) as K[])).map((k) => <Handle key={k} x={pts[k].x} y={pts[k].y} color={colors?.[k] ?? COL.a} r={6} label={labels?.[k]} />)}</g>;
}

/** Light square grid behind a figure; `step` pixels per unit. */
export function Grid({ w, h, step, ox = 0, oy = 0 }: { w: number; h: number; step: number; ox?: number; oy?: number }) {
  const xs: number[] = [], ys: number[] = [];
  for (let x = ox % step; x <= w; x += step) xs.push(x);
  for (let y = oy % step; y <= h; y += step) ys.push(y);
  return (
    <g stroke="#e2e8f0" strokeWidth="1">
      {xs.map((x) => <line key={`x${x}`} x1={x} x2={x} y1={0} y2={h} />)}
      {ys.map((y) => <line key={`y${y}`} y1={y} y2={y} x1={0} x2={w} />)}
    </g>
  );
}

export const deg1 = (v: number, lang: ArtLang) => `${fmt(v, 0, lang)}°`;
export const len1 = (v: number, lang: ArtLang) => fmt(v, 1, lang);
