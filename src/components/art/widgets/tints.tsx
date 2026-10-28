"use client";

import { useState } from "react";
import { hexToRgb, rgbToHex, WHEEL } from "@/lib/art/colors";
import { tr } from "@/lib/art/spec";
import type { WidgetProps } from "../art-block";
import { ArtFrame, fill } from "../frame";
import { UI } from "../labels";

const BASES = [4, 2, 0, 10, 8, 6];
const mixTo = (hex: string, to: [number, number, number], f: number) => rgbToHex(hexToRgb(hex).map((v, i) => v + (to[i] - v) * f) as [number, number, number]);

/** A value ladder: one colour, darker with black on the left, lighter with white on the right. */
export default function Tints({ spec, lang }: WidgetProps) {
  const [base, setBase] = useState(BASES[0]);
  const [v, setV] = useState(0);
  const hex = WHEEL[base].hex;
  const steps = [-3, -2, -1, 0, 1, 2, 3];
  const colorAt = (s: number) => (s < 0 ? mixTo(hex, [29, 29, 36], -s * 0.22) : s > 0 ? mixTo(hex, [255, 255, 255], s * 0.24) : hex);
  return (
    <ArtFrame kind="experiment" title={UI.tints[lang]} body={spec.body || UI.tintsHint[lang]}>
      <div className="art-tints">
        <div className="art-chips">
          {BASES.map((b) => (
            <button key={b} type="button" className={`art-dot-btn${b === base ? " is-active" : ""}`} style={{ background: WHEEL[b].hex }} onClick={() => setBase(b)} aria-label={tr(WHEEL[b].name, lang)} aria-pressed={b === base} />
          ))}
        </div>
        <div className="art-ladder">
          {steps.map((s) => (
            <button key={s} type="button" className={s === v ? "is-active" : undefined} style={{ background: colorAt(s) }} onClick={() => setV(s)} aria-label={String(s)} />
          ))}
        </div>
        <input type="range" min={-3} max={3} step={1} value={v} onChange={(e) => setV(Number(e.target.value))} className="art-range" style={fill(v, -3, 3)} aria-label={UI.tints[lang]} />
        <div className="art-ladder-legend"><span>{UI.addBlack[lang]}</span><span>{UI.pure[lang]}</span><span>{UI.addWhite[lang]}</span></div>
        <div className="art-tint-big" style={{ background: colorAt(v) }}>
          <span>{v === 0 ? UI.pure[lang] : `${tr(WHEEL[base].name, lang)} ${v < 0 ? UI.addBlack[lang] : UI.addWhite[lang]} ×${Math.abs(v)}`}</span>
        </div>
      </div>
    </ArtFrame>
  );
}
