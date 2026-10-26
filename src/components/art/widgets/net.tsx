"use client";

import { useState } from "react";
import type { WidgetProps } from "../art-block";
import { ArtFrame } from "../frame";
import { UI } from "../labels";

/** A cube net folding into a box in 3D as the slider moves. */
export default function Net({ spec, lang }: WidgetProps) {
  const [f, setF] = useState(0);
  const a = (f / 100) * 90;
  const face = (bg: string, extra: React.CSSProperties) => ({ background: bg, ...extra });
  return (
    <ArtFrame kind="experiment" title={UI.net[lang]} body={spec.body || UI.netHint[lang]}>
      <div className="art-net">
        <div className="art-net-scene">
          <div className="art-net-base" style={face("#ffd59a", {})}>
            <div className="art-net-face" style={face("#ffc46b", { top: "100%", transformOrigin: "top", transform: `rotateX(${a}deg)` })} />
            <div className="art-net-face" style={face("#ffc46b", { bottom: "100%", transformOrigin: "bottom", transform: `rotateX(${-a}deg)` })}>
              <div className="art-net-face" style={face("#ff8a1f", { bottom: "100%", transformOrigin: "bottom", transform: `rotateX(${-a}deg)` })} />
            </div>
            <div className="art-net-face" style={face("#f2b35a", { right: "100%", transformOrigin: "right", transform: `rotateY(${a}deg)` })} />
            <div className="art-net-face" style={face("#f2b35a", { left: "100%", transformOrigin: "left", transform: `rotateY(${-a}deg)` })} />
          </div>
        </div>
        <label className="art-range-label">
          <span>{UI.folded[lang]}: {f}%</span>
          <input type="range" min={0} max={100} value={f} onChange={(e) => setF(Number(e.target.value))} className="art-range" />
        </label>
      </div>
    </ArtFrame>
  );
}
