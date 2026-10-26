"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw, Snail } from "lucide-react";
import type { ArtLang, Tr } from "@/lib/art/spec";
import { cn } from "@/lib/utils";
import { L, UI } from "./labels";

/* ---------- numbers ---------- */

export const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
/** Rounds for display and uses the locale's decimal sign (comma in Armenian and Russian). */
export function fmt(v: number, digits = 1, lang: ArtLang = "en") {
  if (!Number.isFinite(v)) return "∞";
  const r = Math.abs(v) >= 1000 ? Math.round(v) : Number(v.toFixed(digits));
  const s = String(Object.is(r, -0) ? 0 : r);
  return lang === "en" ? s : s.replace(".", ",");
}
export const deg = (rad: number) => (rad * 180) / Math.PI;
export const rad = (d: number) => (d * Math.PI) / 180;

/* ---------- animation clock (PhET pattern: play, pause, reset, slow motion) ---------- */

export function useClock(opts: { autoplay?: boolean; until?: number } = {}) {
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(!!opts.autoplay);
  const [slow, setSlow] = useState(false);
  const last = useRef<number | null>(null);
  const until = opts.until;
  useEffect(() => {
    if (!playing) {
      last.current = null;
      return;
    }
    let id = 0;
    const tick = (now: number) => {
      const dt = last.current == null ? 0 : Math.min(0.05, (now - last.current) / 1000);
      last.current = now;
      setT((v) => {
        const nv = v + dt * (slow ? 0.25 : 1);
        if (until != null && nv >= until) {
          setPlaying(false);
          return until;
        }
        return nv;
      });
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [playing, slow, until]);
  const reset = useCallback(() => {
    setT(0);
    setPlaying(false);
  }, []);
  return { t, setT, playing, setPlaying, slow, setSlow, reset };
}

export function PlayBar({ clock, lang, onReset, noSlow }: { clock: ReturnType<typeof useClock>; lang: ArtLang; onReset?: () => void; noSlow?: boolean }) {
  return (
    <div className="art-row sim-playbar">
      <button type="button" className="art-btn is-primary" onClick={() => clock.setPlaying(!clock.playing)}>
        {clock.playing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
        {L(clock.playing ? UI.pause : UI.play, lang)}
      </button>
      <button type="button" className="art-btn" onClick={() => { clock.reset(); onReset?.(); }}>
        <RotateCcw className="size-4" aria-hidden="true" />
        {L(UI.reset, lang)}
      </button>
      {noSlow ? null : (
        <button type="button" className={cn("art-btn", clock.slow && "is-on")} aria-pressed={clock.slow} onClick={() => clock.setSlow(!clock.slow)}>
          <Snail className="size-4" aria-hidden="true" />
          {L(UI.slow, lang)}
        </button>
      )}
    </div>
  );
}

/* ---------- controls ---------- */

export function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  unit = "",
  digits = 1,
  lang,
  display,
  onChange,
}: {
  label: string;
  display?: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  digits?: number;
  lang: ArtLang;
  onChange: (v: number) => void;
}) {
  return (
    <label className="sim-slider">
      <span className="sim-slider-top">
        <span>{label}</span>
        <b>{display ?? `${fmt(value, digits, lang)}${unit ? ` ${unit}` : ""}`}</b>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="art-range" />
    </label>
  );
}

export function Controls({ children }: { children: ReactNode }) {
  return <div className="sim-controls">{children}</div>;
}

/** Big live numbers under a simulation. */
export function Readouts({ items }: { items: Array<[label: string, value: string, color?: string]> }) {
  return (
    <dl className="sim-readouts">
      {items.map(([k, v, c], i) => (
        <div key={i} style={c ? { ["--ro" as string]: c } : undefined}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Choice<T extends string>({ value, options, onChange }: { value: T; options: Array<[T, string]>; onChange: (v: T) => void }) {
  return (
    <div className="art-chips sim-choice" role="group">
      {options.map(([k, label]) => (
        <button key={k} type="button" className={cn("art-chip", value === k && "is-active")} aria-pressed={value === k} onClick={() => onChange(k)}>
          {label}
        </button>
      ))}
    </div>
  );
}

export function Toggle({ on, label, onChange }: { on: boolean; label: string; onChange: (v: boolean) => void }) {
  return (
    <button type="button" className={cn("art-chip", on && "is-active")} aria-pressed={on} onClick={() => onChange(!on)}>
      {label}
    </button>
  );
}

export function Note({ children, tone }: { children: ReactNode; tone?: "good" | "bad" }) {
  return <p className={cn("sim-note", tone && `is-${tone}`)} aria-live="polite">{children}</p>;
}

/* ---------- svg helpers ---------- */

export function Stage({ w, h, children, className, label, onPointerDown, svgRef, bg = "#fbfcff" }: {
  w: number;
  h: number;
  children: ReactNode;
  className?: string;
  label?: string;
  bg?: string;
  onPointerDown?: (e: React.PointerEvent<SVGSVGElement>) => void;
  svgRef?: React.Ref<SVGSVGElement>;
}) {
  return (
    <svg ref={svgRef} viewBox={`0 0 ${w} ${h}`} className={cn("sim-stage", /^#[0-3]/.test(bg) && "is-dark", className)} style={{ maxWidth: `${((w / h) * 20).toFixed(2)}rem` }} role="img" aria-label={label} onPointerDown={onPointerDown}>
      <rect width={w} height={h} fill={bg} />
      {children}
    </svg>
  );
}

/** An arrow from (x1,y1) to (x2,y2) with a solid head; hidden when shorter than a pixel. */
export function Arrow({ x1, y1, x2, y2, color = "#e11d48", width = 3, label, labelPos = "end", head = 8, dash }: {
  x1: number; y1: number; x2: number; y2: number; color?: string; width?: number; label?: string; labelPos?: "end" | "mid"; head?: number; dash?: string;
}) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  if (len < 1) return null;
  const ux = dx / len, uy = dy / len;
  const hl = Math.min(head, len * 0.6);
  const bx = x2 - ux * hl, by = y2 - uy * hl;
  const hw = hl * 0.55;
  const lx = labelPos === "mid" ? (x1 + x2) / 2 - uy * 10 : x2 + ux * 5;
  const ly = labelPos === "mid" ? (y1 + y2) / 2 + ux * 10 : y2 + uy * 11;
  const anchor = labelPos === "mid" || Math.abs(ux) < 0.4 ? "middle" : ux > 0 ? "start" : "end";
  // Rounded so the server and the browser print the same numbers (no hydration mismatch).
  const q = (v: number) => Math.round(v * 100) / 100;
  return (
    <g className="sim-arrow">
      <line x1={q(x1)} y1={q(y1)} x2={q(bx)} y2={q(by)} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dash} />
      <polygon points={`${q(x2)},${q(y2)} ${q(bx - uy * hw)},${q(by + ux * hw)} ${q(bx + uy * hw)},${q(by - ux * hw)}`} fill={color} />
      {label ? <text x={q(lx)} y={q(ly + 3.5)} textAnchor={anchor} className="sim-tag" fill={color}>{label}</text> : null}
    </g>
  );
}

/** Pointer position in the svg's own coordinates. */
export function svgPoint(svg: SVGSVGElement, e: { clientX: number; clientY: number }) {
  const r = svg.getBoundingClientRect();
  const vb = svg.viewBox.baseVal;
  return { x: vb.x + ((e.clientX - r.left) / r.width) * vb.width, y: vb.y + ((e.clientY - r.top) / r.height) * vb.height };
}

/**
 * Dragging points in an svg. `pick` returns the id of the handle under the pointer (or null),
 * `move` receives the new position of that handle.
 */
export function useDrag<K extends string | number>(pick: (p: { x: number; y: number }) => K | null, move: (k: K, p: { x: number; y: number }) => void) {
  const ref = useRef<SVGSVGElement>(null);
  const active = useRef<K | null>(null);
  const onPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    const svg = ref.current;
    if (!svg) return;
    const k = pick(svgPoint(svg, e));
    if (k == null) return;
    active.current = k;
    svg.setPointerCapture(e.pointerId);
    e.preventDefault();
    const onMove = (ev: PointerEvent) => {
      if (active.current != null) move(active.current, svgPoint(svg, ev));
    };
    const onUp = () => {
      active.current = null;
      svg.removeEventListener("pointermove", onMove);
      svg.removeEventListener("pointerup", onUp);
      svg.removeEventListener("pointercancel", onUp);
    };
    svg.addEventListener("pointermove", onMove);
    svg.addEventListener("pointerup", onUp);
    svg.addEventListener("pointercancel", onUp);
  };
  return { ref, onPointerDown };
}

export function Handle({ x, y, color = "#4f46e5", r = 7, label }: { x: number; y: number; color?: string; r?: number; label?: string }) {
  return (
    <g className="sim-handle">
      <circle cx={x} cy={y} r={r + 9} fill={color} opacity="0.14" />
      <circle cx={x} cy={y} r={r} fill={color} stroke="#fff" strokeWidth="2.5" />
      {label ? <text x={x + r + 4} y={y - r - 2} className="sim-tag" fill="#1e1b4b">{label}</text> : null}
    </g>
  );
}

/* ---------- small line chart (linked representations) ---------- */

export type Series = { pts: Array<[number, number]>; color: string; dash?: string; label?: string };

export function Graph({
  w = 300,
  h = 150,
  x: [x0, x1],
  y: [y0, y1],
  series,
  xLabel,
  yLabel,
  cursor,
  dots,
  className,
}: {
  w?: number;
  h?: number;
  x: [number, number];
  y: [number, number];
  series: Series[];
  xLabel: string;
  yLabel: string;
  cursor?: number;
  dots?: Array<[number, number, string]>;
  className?: string;
}) {
  const pl = 34, pr = 10, pt = 14, pb = 24;
  const X = (v: number) => pl + ((v - x0) / (x1 - x0 || 1)) * (w - pl - pr);
  const Y = (v: number) => h - pb - ((v - y0) / (y1 - y0 || 1)) * (h - pt - pb);
  const zeroY = y0 < 0 && y1 > 0 ? Y(0) : h - pb;
  const ticks = (a: number, b: number) => {
    const span = b - a;
    const raw = span / 4;
    const p = 10 ** Math.floor(Math.log10(raw || 1));
    const step = [1, 2, 2.5, 5, 10].map((m) => m * p).find((s) => s >= raw) ?? raw;
    const out: number[] = [];
    for (let v = Math.ceil(a / step) * step; v <= b + 1e-9; v += step) out.push(Number(v.toFixed(6)));
    return out;
  };
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={cn("sim-graph", className)} role="img" aria-label={`${yLabel} / ${xLabel}`}>
      <rect width={w} height={h} rx="10" fill="#fff" />
      {ticks(y0, y1).map((v) => (
        <g key={`y${v}`}>
          <line x1={pl} x2={w - pr} y1={Y(v)} y2={Y(v)} stroke="#eef0f6" />
          <text x={pl - 4} y={Y(v) + 3} textAnchor="end" className="sim-axis">{v}</text>
        </g>
      ))}
      {ticks(x0, x1).map((v) => (
        <g key={`x${v}`}>
          <line y1={pt} y2={h - pb} x1={X(v)} x2={X(v)} stroke="#eef0f6" />
          <text x={X(v)} y={h - pb + 11} textAnchor="middle" className="sim-axis">{v}</text>
        </g>
      ))}
      <line x1={pl} x2={w - pr} y1={zeroY} y2={zeroY} stroke="#94a3b8" />
      <line x1={pl} x2={pl} y1={pt} y2={h - pb} stroke="#94a3b8" />
      <text x={pl + 3} y={pt - 3} className="sim-axis is-name">{yLabel}</text>
      <text x={w - pr} y={h - 3} textAnchor="end" className="sim-axis is-name">{xLabel}</text>
      {series.map((s, i) =>
        s.pts.length > 1 ? (
          <polyline key={i} points={s.pts.map(([a, b]) => `${X(a).toFixed(1)},${Y(clamp(b, y0 - (y1 - y0), y1 + (y1 - y0))).toFixed(1)}`).join(" ")} fill="none" stroke={s.color} strokeWidth="2.5" strokeDasharray={s.dash} strokeLinejoin="round" />
        ) : null,
      )}
      {cursor != null ? <line x1={X(cursor)} x2={X(cursor)} y1={pt} y2={h - pb} stroke="#1e1b4b" strokeDasharray="3 3" opacity="0.5" /> : null}
      {dots?.map(([a, b, c], i) => <circle key={i} cx={X(a)} cy={Y(b)} r="4" fill={c} stroke="#fff" strokeWidth="1.5" />)}
    </svg>
  );
}

/* ---------- step player for mechanisms (Khan / YaKlass worked-example pattern) ---------- */

export function StepPlayer({
  lang,
  caps,
  i,
  setI,
  children,
}: {
  lang: ArtLang;
  caps: Tr[];
  i: number;
  setI: (i: number) => void;
  children: ReactNode;
}) {
  const n = caps.length;
  const [auto, setAuto] = useState(false);
  useEffect(() => {
    if (!auto) return;
    if (i >= n - 1) {
      setAuto(false);
      return;
    }
    const id = setTimeout(() => setI(i + 1), 2600);
    return () => clearTimeout(id);
  }, [auto, i, n, setI]);
  const last = i === n - 1;
  return (
    <div className="sim-steps">
      <div className="sim-steps-stage">{children}</div>
      <div className="art-step-bar">
        <span className="art-step-num">{L(UI.step, lang)} {i + 1}/{n}</span>
        <p className="art-step-cap" aria-live="polite">{L(caps[i], lang)}</p>
        <div className="art-dots sim-dots">
          {caps.map((_, k) => (
            <button key={k} type="button" aria-label={`${L(UI.step, lang)} ${k + 1}`} className={k <= i ? "is-on" : undefined} onClick={() => setI(k)} />
          ))}
        </div>
        <div className="art-row">
          <button type="button" className="art-btn" onClick={() => setI(Math.max(0, i - 1))} disabled={i === 0}>
            <ChevronLeft className="size-4" aria-hidden="true" />
            {L(UI.back, lang)}
          </button>
          {last ? (
            <button type="button" className="art-btn is-primary" onClick={() => setI(0)}>
              <RotateCcw className="size-4" aria-hidden="true" />
              {L(UI.again, lang)}
            </button>
          ) : (
            <button type="button" className="art-btn is-primary" onClick={() => setI(i + 1)}>
              {L(UI.next, lang)}
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          )}
          {!last ? (
            <button type="button" className={cn("art-btn", auto && "is-on")} onClick={() => setAuto(!auto)} aria-pressed={auto}>
              {auto ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
              {L(auto ? UI.stop : UI.auto, lang)}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/** Loops 0→1 while mounted; for always-moving pictures (flows, waves, electrons). */
export function useLoop(period = 2, on = true) {
  const [p, setP] = useState(0);
  useEffect(() => {
    if (!on) return;
    let id = 0;
    const start = performance.now();
    const tick = (now: number) => {
      setP((((now - start) / 1000) % period) / period);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [period, on]);
  return p;
}

/**
 * Integrates a simulation in small fixed steps as the clock runs. The state starts again
 * from `init` whenever the clock is reset to zero.
 */
export function useStepper<S>(t: number, init: () => S, step: (s: S, dt: number) => S, h = 0.005): S {
  const st = useRef<{ t: number; s: S } | null>(null);
  if (st.current == null || t === 0 || t < st.current.t) st.current = { t, s: init() };
  else if (t > st.current.t) {
    let s = st.current.s;
    let left = t - st.current.t;
    while (left > 1e-9) {
      const d = Math.min(h, left);
      s = step(s, d);
      left -= d;
    }
    st.current = { t, s };
  }
  return st.current.s;
}

/** Stacked energy bars (kinetic, potential, heat…) on one shared scale. */
export function EnergyBars({ items, max, lang }: { items: Array<[label: string, value: number, color: string]>; max: number; lang: ArtLang }) {
  return (
    <div className="sim-ebars">
      {items.map(([k, v, c]) => (
        <div key={k} className="sim-ebar-row">
          <span>{k}</span>
          <span className="sim-ebar"><i style={{ width: `${clamp((v / (max || 1)) * 100, 0, 100)}%`, background: c }} /></span>
          <b>{fmt(v, v >= 100 ? 0 : 1, lang)}</b>
        </div>
      ))}
    </div>
  );
}

/** Equations or long formulas, one per line with a small label. */
export function EqList({ items }: { items: Array<[label: string, text: string, color?: string]> }) {
  return (
    <div className="sim-eqlist">
      {items.map(([l, v, c]) => (
        <div key={l}>
          <span>{l}</span>
          <b style={c ? { color: c } : undefined}>{v}</b>
        </div>
      ))}
    </div>
  );
}
