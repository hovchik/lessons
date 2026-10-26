"use client";

import { useState } from "react";
import { WHEEL } from "@/lib/art/colors";
import { list, tr } from "@/lib/art/spec";
import type { WidgetProps } from "../art-block";
import { ArtFrame, Chip } from "../frame";
import { UI } from "../labels";

type Mode = "primary" | "secondary" | "complementary" | "analogous" | "triad" | "warmcool";
const MODES: Mode[] = ["primary", "secondary", "complementary", "analogous", "triad", "warmcool"];

function partners(mode: Mode, sel: number): number[] {
  switch (mode) {
    case "primary": return WHEEL.flatMap((c, i) => (c.kind === "primary" ? [i] : []));
    case "secondary": return WHEEL.flatMap((c, i) => (c.kind !== "tertiary" ? [i] : []));
    case "complementary": return [sel, (sel + 6) % 12];
    case "analogous": return [(sel + 11) % 12, sel, (sel + 1) % 12];
    case "triad": return [sel, (sel + 4) % 12, (sel + 8) % 12];
    case "warmcool": return WHEEL.flatMap((c, i) => (c.warm === WHEEL[sel].warm ? [i] : []));
  }
}

const arc = (i: number, r1: number, r2: number) => {
  const a0 = ((i * 30 - 105) * Math.PI) / 180, a1 = ((i * 30 - 75) * Math.PI) / 180;
  const p = (r: number, a: number) => `${(100 + r * Math.cos(a)).toFixed(2)} ${(100 + r * Math.sin(a)).toFixed(2)}`;
  return `M${p(r1, a0)} A${r1} ${r1} 0 0 1 ${p(r1, a1)} L${p(r2, a1)} A${r2} ${r2} 0 0 0 ${p(r2, a0)}Z`;
};

/** The 12-part painter's colour wheel with relationships: tap a colour, pick a relation. */
export default function Wheel({ spec, lang }: WidgetProps) {
  const modes = list(spec.opts.modes, [spec.opts.mode ?? "complementary", ...MODES]).filter((m, i, a): m is Mode => MODES.includes(m as Mode) && a.indexOf(m) === i);
  const [mode, setMode] = useState<Mode>(modes[0] ?? "complementary");
  const [sel, setSel] = useState(4);
  const on = new Set(partners(mode, sel));
  const note = { primary: UI.primaryNote, secondary: UI.secondaryNote, complementary: UI.complementaryNote, analogous: UI.analogousNote, triad: UI.triadNote, warmcool: UI.warmcoolNote }[mode];
  const shown = [...on];

  return (
    <ArtFrame kind="experiment" title={UI.wheel[lang]} body={spec.body || UI.wheelHint[lang]}>
      <div className="art-wheel">
        <svg viewBox="0 0 200 200" className="art-wheel-svg">
          {WHEEL.map((c, i) => (
            <path
              key={i}
              d={arc(i, 94, c.kind === "primary" ? 40 : c.kind === "secondary" ? 52 : 64)}
              fill={c.hex}
              className={on.has(i) ? "is-on" : "is-off"}
              stroke={i === sel && mode !== "primary" && mode !== "secondary" ? "#1e1b4b" : "#fff"}
              strokeWidth={i === sel && mode !== "primary" && mode !== "secondary" ? 3 : 1.5}
              onClick={() => setSel(i)}
              role="button"
              aria-label={tr(c.name, lang)}
            />
          ))}
          {mode === "complementary" ? (() => {
            const a = ((sel * 30 - 90) * Math.PI) / 180;
            return <line x1={100 + 70 * Math.cos(a)} y1={100 + 70 * Math.sin(a)} x2={100 - 70 * Math.cos(a)} y2={100 - 70 * Math.sin(a)} stroke="#1e1b4b" strokeWidth="2" strokeDasharray="4 4" />;
          })() : null}
          {mode === "warmcool" ? <line x1={100 + 98 * Math.cos(-1.8326)} y1={100 + 98 * Math.sin(-1.8326)} x2={100 - 98 * Math.cos(-1.8326)} y2={100 - 98 * Math.sin(-1.8326)} stroke="#1e1b4b" strokeWidth="2" strokeDasharray="5 4" /> : null}
          <circle cx="100" cy="100" r="30" fill="#fff" />
          <circle cx="100" cy="100" r="22" fill={WHEEL[sel].hex} />
        </svg>
        <div className="art-wheel-side">
          <div className="art-chips" role="group">
            {modes.map((m) => <Chip key={m} active={m === mode} onClick={() => setMode(m)}>{UI[m][lang]}</Chip>)}
          </div>
          <div className="art-wheel-pick">
            {shown.slice(0, 7).map((i) => (
              <div key={i} className="art-swatch">
                <span style={{ background: WHEEL[i].hex }} />
                <small>{tr(WHEEL[i].name, lang)}{mode === "warmcool" && i === shown[0] ? ` · ${WHEEL[i].warm ? UI.warm[lang] : UI.cold[lang]}` : ""}</small>
              </div>
            ))}
          </div>
          <p className="art-note">{tr(note, lang)}</p>
        </div>
      </div>
    </ArtFrame>
  );
}
