"use client";

import { useState } from "react";
import { hexToRgb, rgbToHex } from "@/lib/art/colors";
import type { WidgetProps } from "../art-block";
import { ArtFrame } from "../frame";
import { UI } from "../labels";

const SKY = "#cfe3f5";
const RIDGES = [
  { d: "M0 110 L40 70 L70 92 L110 56 L150 88 L190 60 L240 96 L280 66 L320 84 V200 H0Z", c: "#5a6b8a" },
  { d: "M0 130 L50 100 L90 118 L140 92 L190 120 L240 98 L290 116 L320 104 V200 H0Z", c: "#4b6b55" },
  { d: "M0 154 C60 130 120 136 170 146 C220 156 270 136 320 142 V200 H0Z", c: "#3f7d3a" },
  { d: "M0 178 C80 164 200 166 320 180 V200 H0Z", c: "#2b5a1f" },
];
const mix = (a: string, b: string, f: number) => rgbToHex(hexToRgb(a).map((v, i) => v + (hexToRgb(b)[i] - v) * f) as [number, number, number]);

/** Aerial perspective: add haze and watch distant ridges fade to pale blue. */
export default function Aerial({ spec, lang }: WidgetProps) {
  const [haze, setHaze] = useState(60);
  const h = haze / 100;
  return (
    <ArtFrame kind="experiment" title={UI.aerial[lang]} body={spec.body || UI.aerialHint[lang]}>
      <div className="art-persp">
        <svg viewBox="0 0 320 200" className="art-scene" aria-hidden="true">
          <rect width="320" height="200" fill={SKY} />
          <circle cx="250" cy="40" r="16" fill={mix("#fff3b0", SKY, h * 0.3)} />
          {RIDGES.map((r, k) => <path key={k} d={r.d} fill={mix(r.c, SKY, h * (0.85 - k * 0.27))} />)}
          <g transform="translate(40 150)">
            <rect x="-2" y="0" width="4" height="26" fill="#3e2416" />
            <circle cx="0" cy="-4" r="14" fill="#1d5a2a" />
          </g>
        </svg>
        <label className="art-range-label">
          <span>{UI.air[lang]}</span>
          <input type="range" min={0} max={100} value={haze} onChange={(e) => setHaze(Number(e.target.value))} className="art-range" />
        </label>
      </div>
    </ArtFrame>
  );
}
