"use client";

import { Minus, Plus } from "lucide-react";
import type { ArtLang } from "@/lib/art/spec";
import { clamp, Slider } from "./kit";

/** Shared bits of the primary-school math blocks (number lines, blocks, fractions, columns). */

/** Whole numbers with a thousands separator: 12,345 in English, 12 345 in Armenian and Russian. */
export function num(v: number, lang: ArtLang) {
  const neg = v < 0;
  const [int, frac] = String(Math.abs(Number(v.toFixed(6)))).split(".");
  const groups = int.length > 4 || (lang === "en" && int.length > 3) ? int.replace(/\B(?=(\d{3})+(?!\d))/g, lang === "en" ? "," : " ") : int;
  return `${neg ? "−" : ""}${groups}${frac ? (lang === "en" ? "." : ",") + frac : ""}`;
}

/** A − / value / + stepper (big tap targets for small hands). */
export function Counter({ value, min, max, step = 1, label, onChange, lang, color }: {
  value: number;
  min: number;
  max: number;
  step?: number;
  label?: string;
  onChange: (v: number) => void;
  lang: ArtLang;
  color?: string;
}) {
  const less = lang === "hy" ? "Պակաս" : lang === "ru" ? "Меньше" : "Less";
  const more = lang === "hy" ? "Ավելի" : lang === "ru" ? "Больше" : "More";
  return (
    <span className="math-counter">
      {label ? <span className="math-counter-label">{label}</span> : null}
      <span className="sim-counter" style={color ? { ["--art" as string]: color } : undefined}>
        <button type="button" aria-label={`${less}${label ? `: ${label}` : ""}`} disabled={value <= min} onClick={() => onChange(clamp(Number((value - step).toFixed(6)), min, max))}>
          <Minus className="size-4" aria-hidden="true" />
        </button>
        <b>{num(value, lang)}</b>
        <button type="button" aria-label={`${more}${label ? `: ${label}` : ""}`} disabled={value >= max} onClick={() => onChange(clamp(Number((value + step).toFixed(6)), min, max))}>
          <Plus className="size-4" aria-hidden="true" />
        </button>
      </span>
    </span>
  );
}

/** A big equation line under a picture, e.g. 8 + 5 = 13. Parts can be coloured. */
export function Sum({ parts }: { parts: Array<string | [string, string]> }) {
  return (
    <p className="math-sum" aria-live="polite">
      {parts.map((p, i) => (typeof p === "string" ? <span key={i}>{p}</span> : <b key={i} style={{ color: p[1] }}>{p[0]}</b>))}
    </p>
  );
}

export const COLORS = {
  a: "#4f46e5",
  b: "#f59e0b",
  c: "#10b981",
  d: "#e11d48",
  soft: "#e0e7ff",
  line: "#334155",
  grid: "#e2e8f0",
};

export const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : Math.abs(a));
export const lcm = (a: number, b: number) => (a && b ? Math.abs(a * b) / gcd(a, b) : 0);

/** A counter for short ranges, a slider for long ones (nobody taps + forty times). */
export function NumPick(props: { value: number; min: number; max: number; step?: number; label: string; onChange: (v: number) => void; lang: ArtLang; color?: string }) {
  const { value, min, max, step = 1, label, onChange, lang } = props;
  if ((max - min) / step <= 20) return <Counter {...props} />;
  return <Slider label={label} value={value} min={min} max={max} step={step} digits={6} lang={lang} display={num(value, lang)} onChange={onChange} />;
}

/** Signs as the lessons write them: × everywhere, ÷ in English and : in Armenian and Russian. */
export function times(lang?: ArtLang) {
  void lang;
  return "×";
}
export const divide = (lang: ArtLang) => (lang === "en" ? "÷" : ":");

/** π-multiples for trig axes, periods and radians: 2 → "2π", 0.5 → "π/2", 4/3 → "4π/3". */
export function piText(p: number) {
  if (Math.abs(p) < 1e-9) return "0";
  for (const den of [1, 2, 3, 4, 5, 6, 12]) {
    const n = Math.round(p * den);
    if (Math.abs(n / den - p) < 1e-3) {
      const a = Math.abs(n);
      return `${n < 0 ? "−" : ""}${a === 1 ? "" : a}π${den === 1 ? "" : `/${den}`}`;
    }
  }
  return `${p.toFixed(2)}π`;
}

/** Tangent is written tan in English and tg in Armenian and Russian schools. */
export const trigName = (fn: "sin" | "cos" | "tan", lang: ArtLang) => (fn === "tan" && lang !== "en" ? "tg" : fn);
