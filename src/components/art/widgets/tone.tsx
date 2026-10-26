"use client";

import { useState } from "react";
import type { WidgetProps } from "../art-block";
import { ArtFrame, Chip } from "../frame";
import { UI } from "../labels";

const KINDS = ["hatch", "cross", "stipple", "smooth"] as const;

function cell(kind: (typeof KINDS)[number], level: number, x: number) {
  const out: string[] = [`<rect x="${x}" y="0" width="56" height="56" fill="#fff" stroke="#cbd5e1"/>`];
  if (level === 0) return out.join("");
  const gap = [0, 11, 7, 4.5, 3][level];
  if (kind === "smooth") out.push(`<rect x="${x}" y="0" width="56" height="56" fill="#1e1b4b" opacity="${level * 0.2}"/>`);
  if (kind === "hatch" || kind === "cross") for (let d = -56; d < 56; d += gap) out.push(`<line x1="${x + Math.max(0, d)}" y1="${Math.max(0, -d)}" x2="${x + Math.min(56, 56 + d)}" y2="${Math.min(56, 56 - d)}" stroke="#1e1b4b" stroke-width="1.2"/>`);
  if (kind === "cross" && level > 1) for (let d = -56; d < 56; d += gap * 1.2) out.push(`<line x1="${x + Math.max(0, d)}" y1="${56 - Math.max(0, -d)}" x2="${x + Math.min(56, 56 + d)}" y2="${56 - Math.min(56, 56 - d)}" stroke="#1e1b4b" stroke-width="1.2"/>`);
  if (kind === "stipple") {
    let seed = level * 97 + 13;
    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    for (let i = 0; i < [0, 40, 110, 230, 420][level]; i++) out.push(`<circle cx="${(x + 2 + rnd() * 52).toFixed(1)}" cy="${(2 + rnd() * 52).toFixed(1)}" r="1.3" fill="#1e1b4b"/>`);
  }
  return out.join("");
}

/** A five-step tone scale in four graphic techniques. */
export default function Tone({ spec, lang }: WidgetProps) {
  const [kind, setKind] = useState<(typeof KINDS)[number]>("hatch");
  const html = Array.from({ length: 5 }, (_, i) => cell(kind, i, i * 62)).join("");
  return (
    <ArtFrame kind="experiment" title={UI.tone[lang]} body={spec.body || UI.toneHint[lang]}>
      <div className="art-tone">
        <svg viewBox="-2 -2 312 60" className="art-scene" aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="art-chips">{KINDS.map((k) => <Chip key={k} active={kind === k} onClick={() => setKind(k)}>{UI[k][lang]}</Chip>)}</div>
      </div>
    </ArtFrame>
  );
}
