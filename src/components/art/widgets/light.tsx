"use client";

import { useId, useState } from "react";
import type { Tr } from "@/lib/art/spec";
import { tr } from "@/lib/art/spec";
import type { WidgetProps } from "../art-block";
import { ArtFrame, Chip, fill } from "../frame";
import { UI } from "../labels";

const t = (en: string, hy: string, ru: string): Tr => ({ en, hy, ru });
const NAMES = {
  highlight: t("highlight", "փայլ", "блик"),
  light: t("light", "լույս", "свет"),
  halftone: t("half-tone", "կիսատոն", "полутень"),
  core: t("core shadow", "սեփական ստվեր", "собственная тень"),
  reflex: t("reflected light", "ռեֆլեքս", "рефлекс"),
  cast: t("cast shadow", "ընկնող ստվեր", "падающая тень"),
};

/** Light and shade on a sphere and a cube: move the lamp, see every gradation move with it. */
export default function Light({ spec, lang }: WidgetProps) {
  const [deg, setDeg] = useState(135);
  const [labels, setLabels] = useState(true);
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const a = (deg * Math.PI) / 180;
  const lx = Math.cos(a), ly = -Math.sin(a); // direction towards the lamp
  const lamp = { x: 160 + 150 * lx, y: 150 + 130 * ly };
  const S = { x: 118, y: 104, r: 50 };
  const fx = 50 + lx * 28, fy = 50 + ly * 28;
  // Cube faces lit by how much they face the lamp.
  const l3 = [lx, -ly * 0.9, 0.55];
  const len = Math.hypot(...l3);
  const lit = (nx: number, ny: number, nz: number) => Math.max(0.12, (nx * l3[0] + ny * l3[1] + nz * l3[2]) / len);
  const grey = (v: number) => `hsl(220 14% ${Math.round(18 + v * 72)}%)`;
  const shadowDx = -lx * 60;
  // A label sits outside the ball, joined to its point by a thin leader line.
  const lab = (px: number, py: number, txt: string, ux: number, uy: number, out = S.r + 16) => {
    const tx = S.x + ux * out, ty = S.y + uy * out;
    const anchor = ux > 0.25 ? "start" : ux < -0.25 ? "end" : "middle";
    return (
      <g className="art-label">
        <line x1={px} y1={py} x2={tx} y2={ty} stroke="#e11d48" strokeWidth="1" />
        <circle cx={px} cy={py} r="2.6" />
        <text x={tx + (anchor === "start" ? 3 : anchor === "end" ? -3 : 0)} y={ty + (uy > 0.3 ? 9 : uy < -0.3 ? -3 : 3)} textAnchor={anchor}>{txt}</text>
      </g>
    );
  };
  const perp = [-ly, lx];
  return (
    <ArtFrame kind="experiment" title={UI.light[lang]} body={spec.body || UI.lightHint[lang]}>
      <div className="art-light">
        <svg viewBox="0 0 320 200" className="art-scene">
          <defs>
            <radialGradient id={`ball${uid}`} cx="50%" cy="50%" r="50%" fx={`${fx}%`} fy={`${fy}%`}>
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="0.12" stopColor="#f0ece4" />
              <stop offset="0.45" stopColor="#b9b4ab" />
              <stop offset="0.78" stopColor="#5d5a55" />
              <stop offset="0.9" stopColor="#47443f" />
              <stop offset="1" stopColor="#6e6a63" />
            </radialGradient>
            <radialGradient id={`sh${uid}`}><stop offset="0" stopColor="#1e1b4b" stopOpacity=".45" /><stop offset="1" stopColor="#1e1b4b" stopOpacity="0" /></radialGradient>
          </defs>
          <rect width="320" height="200" fill="#eef0f6" />
          <rect y="150" width="320" height="50" fill="#d9d6ce" />
          <ellipse cx={S.x + shadowDx * 0.8} cy={S.y + S.r - 2} rx={S.r + Math.abs(shadowDx) * 0.5} ry="10" fill={`url(#sh${uid})`} />
          <circle cx={S.x} cy={S.y} r={S.r} fill={`url(#ball${uid})`} />
          {/* cube */}
          <polygon points={`${236 + shadowDx * 0.6},166 ${280 + shadowDx * 0.6},166 ${300 + shadowDx},160 ${256 + shadowDx},160`} fill="#1e1b4b" opacity=".2" />
          <polygon points="214,110 254,110 254,166 214,166" fill={grey(lit(0, 0, 1))} />
          <polygon points="254,110 280,96 280,152 254,166" fill={grey(lit(1, 0, 0.2))} />
          <polygon points="214,110 240,96 280,96 254,110" fill={grey(lit(0, 1, 0))} />
          <g className="art-lamp" transform={`translate(${lamp.x} ${lamp.y})`}>
            <circle r="13" fill="#ffd21f" />
            {Array.from({ length: 8 }, (_, k) => <line key={k} x1="0" y1="0" x2={20 * Math.cos((k * Math.PI) / 4)} y2={20 * Math.sin((k * Math.PI) / 4)} stroke="#ffb01f" strokeWidth="3" strokeLinecap="round" />)}
            <circle r="9" fill="#fff3b0" />
          </g>
          {labels ? (
            <>
              {lab(S.x + lx * S.r * 0.45, S.y + ly * S.r * 0.45, tr(NAMES.highlight, lang), lx - perp[0] * 0.9, ly - perp[1] * 0.9)}
              {lab(S.x + perp[0] * S.r * 0.5, S.y + perp[1] * S.r * 0.5, tr(NAMES.halftone, lang), perp[0], perp[1])}
              {lab(S.x - lx * S.r * 0.5 - perp[0] * 10, S.y - ly * S.r * 0.5 - perp[1] * 10, tr(NAMES.core, lang), shadowDx >= 0 ? -0.45 : 0.45, 1, S.r + 20)}
              {lab(S.x - lx * S.r * 0.9, S.y - ly * S.r * 0.9, tr(NAMES.reflex, lang), -lx + perp[0] * 0.5, -ly + perp[1] * 0.5, S.r + 26)}
              {lab(S.x + shadowDx * 0.9, S.y + S.r + 4, tr(NAMES.cast, lang), shadowDx >= 0 ? 0.9 : -0.9, 1, S.r + 30)}
            </>
          ) : null}
        </svg>
        <label className="art-range-label">
          <span>{UI.lamp[lang]}</span>
          <input type="range" min={25} max={155} value={deg} onChange={(e) => setDeg(Number(e.target.value))} className="art-range" style={{ direction: "rtl", ...fill(deg, 25, 155, true) }} />
        </label>
        <div className="art-chips"><Chip active={labels} onClick={() => setLabels(!labels)}>{UI.labels[lang]}</Chip></div>
      </div>
    </ArtFrame>
  );
}
