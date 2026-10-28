"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import type { WidgetProps } from "../art-block";
import { ArtFrame, Chip, fill } from "../frame";
import { UI } from "../labels";

/** Frame sets in a 160 × 100 box. */
const SETS: Record<string, string[]> = {
  ball: [
    [20, 14, 10, 10], [44, 34, 10, 10], [66, 62, 10, 10], [84, 84, 12, 7], [102, 62, 9, 11], [122, 40, 10, 10], [140, 30, 10, 10], [154, 34, 10, 10],
  ].map(([x, y, rx, ry]) => `<rect y="94" width="160" height="6" fill="#9ccc6b"/><ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#e0262f"/><ellipse cx="${x}" cy="94" rx="${Math.max(3, 12 - (90 - y) / 8)}" ry="2" fill="#1e1b4b" opacity=".2"/>`),
  walk: [0, 1, 2, 3, 4, 5].map((f) => {
    const a = Math.sin((f / 6) * Math.PI * 2) * 22, x = 30 + f * 18;
    const leg = (s: number) => `<line x1="${x}" y1="58" x2="${x + Math.sin(((s * a) * Math.PI) / 180) * 30}" y2="${58 + Math.cos(((s * a) * Math.PI) / 180) * 30}" stroke="#1e1b4b" stroke-width="5" stroke-linecap="round"/>`;
    const arm = (s: number) => `<line x1="${x}" y1="34" x2="${x - Math.sin(((s * a) * Math.PI) / 180) * 22}" y2="${34 + Math.cos(((s * a) * Math.PI) / 180) * 22}" stroke="#1e1b4b" stroke-width="4" stroke-linecap="round"/>`;
    return `<rect y="90" width="160" height="10" fill="#cbd5e1"/>${leg(1)}${leg(-1)}<line x1="${x}" y1="30" x2="${x}" y2="58" stroke="#7d2e8f" stroke-width="8" stroke-linecap="round"/>${arm(1)}${arm(-1)}<circle cx="${x}" cy="20" r="9" fill="#f2c4a4"/>`;
  }),
  flower: [0, 1, 2, 3, 4, 5].map((f) => {
    const h = 10 + f * 12, open = Math.max(0, f - 2);
    const petals = open ? [0, 72, 144, 216, 288].map((r) => `<ellipse transform="rotate(${r} 80 ${92 - h})" cx="80" cy="${92 - h - 4 - open * 2}" rx="${2 + open * 1.5}" ry="${3 + open * 2.5}" fill="#f78fb3"/>`).join("") : "";
    return `<rect y="92" width="160" height="8" fill="#8b5a2b"/><path d="M80 92 C${78 + f} ${92 - h / 2} 82 ${92 - h / 1.5} 80 ${92 - h}" stroke="#2f9e44" stroke-width="3" fill="none"/>${f > 1 ? `<path d="M80 ${92 - h / 2.4} q10 -8 16 -2 q-8 6 -16 2Z" fill="#2f9e44"/>` : ""}${petals}<circle cx="80" cy="${92 - h}" r="${2 + open}" fill="#ffd21f"/>`;
  }),
  bird: [0, 1, 2, 3].map((f) => {
    const w = [-24, -8, 14, -8][f], x = 40 + f * 22, y = 50 - [0, 4, 6, 2][f];
    return `<rect width="160" height="100" fill="#d6ecfb"/><path d="M${x - 26} ${y + w} Q${x - 12} ${y - 2} ${x} ${y} Q${x + 12} ${y - 2} ${x + 26} ${y + w}" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="${x}" cy="${y + 2}" rx="7" ry="4" fill="#1e1b4b"/>`;
  }),
};

/** A flipbook: frames play like a cartoon, with speed and onion skin. */
export default function Flipbook({ spec, lang }: WidgetProps) {
  const frames = SETS[spec.args[0] ?? "ball"] ?? SETS.ball;
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [fps, setFps] = useState(6);
  const [onion, setOnion] = useState(false);
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setI((k) => (k + 1) % frames.length), 1000 / fps);
    return () => clearInterval(id);
  }, [playing, fps, frames.length]);
  const prev = (i - 1 + frames.length) % frames.length;
  return (
    <ArtFrame kind="experiment" title={UI.flipbook[lang]} body={spec.body || UI.flipHint[lang]}>
      <div className="art-flip">
        <svg viewBox="0 0 160 100" className="art-scene" aria-label={`${UI.frameN[lang]} ${i + 1}`}>
          <rect width="160" height="100" fill="#fffdf7" />
          {onion && !playing ? <g opacity=".25" dangerouslySetInnerHTML={{ __html: frames[prev] }} /> : null}
          <g dangerouslySetInnerHTML={{ __html: frames[i] }} />
        </svg>
        <div className="art-film" role="group" aria-label={UI.frameN[lang]}>
          {frames.map((f, k) => (
            <button key={k} type="button" className={k === i ? "is-active" : undefined} onClick={() => { setPlaying(false); setI(k); }} aria-label={`${UI.frameN[lang]} ${k + 1}`}>
              <svg viewBox="0 0 160 100" aria-hidden="true"><rect width="160" height="100" fill="#fff" /><g dangerouslySetInnerHTML={{ __html: f }} /></svg>
            </button>
          ))}
        </div>
        <div className="art-row">
          <button type="button" className="art-btn is-primary" onClick={() => setPlaying(!playing)}>
            {playing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
            {playing ? UI.pause[lang] : UI.play[lang]}
          </button>
          <Chip active={onion} onClick={() => setOnion(!onion)}>{UI.onion[lang]}</Chip>
        </div>
        <label className="art-range-label">
          <span>{UI.speed[lang]}: {fps}</span>
          <input type="range" min={2} max={24} value={fps} onChange={(e) => setFps(Number(e.target.value))} className="art-range" style={fill(fps, 2, 24)} />
        </label>
      </div>
    </ArtFrame>
  );
}
