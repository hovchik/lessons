"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { mixPaints, nearestName, PAINTS } from "@/lib/art/colors";
import { list, tr } from "@/lib/art/spec";
import type { WidgetProps } from "../art-block";
import { ArtFrame } from "../frame";
import { UI } from "../labels";

/** Paint mixing: tap pots to add drops; the blob on the palette shows the mix and names it. */
export default function Mixer({ spec, lang }: WidgetProps) {
  const paints = list(spec.opts.paints, ["red", "yellow", "blue", "white", "black"]).filter((p) => PAINTS[p]);
  const [drops, setDrops] = useState<Record<string, number>>({});
  const [found, setFound] = useState<string[]>([]);
  const mix = mixPaints(drops);
  const total = Object.values(drops).reduce((a, b) => a + b, 0);

  const add = (p: string) => {
    const next = { ...drops, [p]: Math.min(9, (drops[p] ?? 0) + 1) };
    setDrops(next);
    const m = mixPaints(next);
    if (m && !found.includes(m)) setFound((f) => [m, ...f].slice(0, 8));
  };

  return (
    <ArtFrame kind="experiment" title={UI.mixer[lang]} body={spec.body || UI.mixerHint[lang]}>
      <div className="art-mixer">
        <div className="art-pots">
          {paints.map((p) => (
            <button key={p} type="button" className="art-pot" onClick={() => add(p)} aria-label={tr(PAINTS[p].name, lang)}>
              <span className="art-pot-paint" style={{ background: PAINTS[p].hex }} />
              <span className="art-pot-name">{tr(PAINTS[p].name, lang)}</span>
              {drops[p] ? <span className="art-pot-count">{drops[p]}</span> : null}
            </button>
          ))}
        </div>
        <div className="art-mix-result">
          <svg viewBox="0 0 200 120" className="art-mix-board" aria-hidden="true">
            <path d="M100 8 C40 8 8 36 10 64 C12 100 60 116 112 110 C130 108 128 94 120 88 C112 82 118 72 132 72 C168 72 194 60 190 38 C186 16 150 8 100 8Z" fill="#e9c891" />
            <ellipse cx="160" cy="44" rx="9" ry="8" fill="#c9a874" />
            <path
              d="M78 28 C104 18 128 30 126 52 C124 76 104 88 80 84 C56 80 46 64 50 48 C54 36 64 32 78 28Z"
              fill={mix ?? "transparent"}
              stroke={mix ? "rgba(0,0,0,.08)" : "#c9a874"}
              strokeDasharray={mix ? undefined : "4 4"}
              strokeWidth="2"
              className="art-mix-blob"
            />
          </svg>
          <p className="art-mix-name" aria-live="polite">
            {mix ? <>{UI.youGot[lang]}: <strong>{tr(nearestName(mix), lang)}</strong> <small>({total} {UI.drops[lang]})</small></> : UI.empty[lang]}
          </p>
          <button type="button" className="art-btn" onClick={() => setDrops({})} disabled={!total}>
            <RotateCcw className="size-4" aria-hidden="true" />{UI.clean[lang]}
          </button>
        </div>
        {found.length > 1 ? (
          <div className="art-found" aria-hidden="true">
            {found.map((c) => <span key={c} style={{ background: c }} />)}
          </div>
        ) : null}
      </div>
    </ArtFrame>
  );
}
