"use client";

import { useState } from "react";
import type { WidgetProps } from "../art-block";
import { ArtFrame, Chip } from "../frame";
import { UI } from "../labels";

const SHOTS = { long: "0 0 320 200", medium: "150 52 96 60", close: "176 52 40 25", detail: "203 74 28 17.5" } as const;

const SCENE = `
<rect width="320" height="200" fill="#bfe0f5"/>
<circle cx="56" cy="40" r="18" fill="#fff3b0"/>
<path d="M0 140 C60 120 140 128 320 136 V200 H0Z" fill="#7cb86a"/>
<path d="M0 170 C80 156 200 160 320 172 V200 H0Z" fill="#4f9a45"/>
<rect x="84" y="96" width="8" height="50" fill="#6b4226"/><circle cx="88" cy="86" r="26" fill="#2f7d32"/>
<path d="M270 20 L292 40 L274 60 L254 40Z" fill="#e0262f"/><path d="M270 20 V60 M254 40 H292" stroke="#fff" stroke-width="1.5"/>
<path d="M274 60 C270 74 278 86 270 98" stroke="#ff8a1f" stroke-width="2" fill="none"/>
<path d="M274 60 C250 70 240 72 222 82" stroke="#555" stroke-width="1"/>
<g>
<path d="M186 82 L180 140 H212 L206 82Z" fill="#7d2e8f"/>
<path d="M188 140 L186 176 M204 140 L206 176" stroke="#1f5fbf" stroke-width="7" stroke-linecap="round"/>
<path d="M188 86 L174 112 M204 86 L220 80" stroke="#7d2e8f" stroke-width="6" stroke-linecap="round"/>
<circle cx="221" cy="80" r="3.2" fill="#f2c4a4"/>
<rect x="192" y="74" width="8" height="8" fill="#f2c4a4"/>
<ellipse cx="196" cy="64" rx="11" ry="12" fill="#f2c4a4"/>
<path d="M184 62 C184 46 208 46 208 62 C204 54 190 54 184 62Z" fill="#6b3a1a"/>
<path d="M184 62 C180 72 182 80 186 82" stroke="#6b3a1a" stroke-width="4" fill="none" stroke-linecap="round"/>
<circle cx="192" cy="63" r="1.3" fill="#1d1d24"/><circle cx="201" cy="63" r="1.3" fill="#1d1d24"/>
<path d="M192 69 Q196.5 72 201 69" stroke="#c9302c" stroke-width="1.2" fill="none"/>
<circle cx="189" cy="67" r="1.8" fill="#f48fb1" opacity=".7"/><circle cx="204" cy="67" r="1.8" fill="#f48fb1" opacity=".7"/>
</g>`;

/** Shot sizes: one scene seen as a long shot, medium shot, close-up and detail. */
export default function Shots({ spec, lang }: WidgetProps) {
  const [shot, setShot] = useState<keyof typeof SHOTS>("long");
  return (
    <ArtFrame kind="experiment" title={UI.frame[lang]} body={spec.body || UI.frameHint[lang]}>
      <div className="art-shots">
        <div className="art-shot-box">
          <svg viewBox={SHOTS[shot]} preserveAspectRatio="xMidYMid slice" className="art-scene" aria-hidden="true" dangerouslySetInnerHTML={{ __html: SCENE }} />
        </div>
        <div className="art-chips">
          {(Object.keys(SHOTS) as Array<keyof typeof SHOTS>).map((k) => <Chip key={k} active={k === shot} onClick={() => setShot(k)}>{UI[k][lang]}</Chip>)}
        </div>
      </div>
    </ArtFrame>
  );
}
