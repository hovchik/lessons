"use client";

import { useEffect, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { L, UI } from "../labels";
import { diagramGroup, type DiagramGroup } from "../mech/ids";
import type { Diagram } from "../mech/types";

const LOAD: Record<DiagramGroup, () => Promise<{ DIAGRAMS: Record<string, Diagram> }>> = {
  phys: () => import("../mech/diag-phys"),
  chem: () => import("../mech/diag-chem"),
  bio: () => import("../mech/diag-bio"),
};

/** ```sim diagram sun: a labelled picture with numbered parts to tap. */
export default function DiagramBlock({ spec, lang }: SimProps) {
  const id = spec.args[0] ?? "";
  const [d, setD] = useState<Diagram | null>(null);
  useEffect(() => {
    const g = diagramGroup(id);
    if (!g) return;
    let live = true;
    LOAD[g]().then((m) => live && setD(m.DIAGRAMS[id] ?? null));
    return () => { live = false; };
  }, [id]);
  if (!diagramGroup(id)) return <pre className="art-unknown">diagram {id}</pre>;
  if (!d) return <div className="art-frame art-loading" aria-hidden="true" />;
  return <View d={d} spec={spec} lang={lang} />;
}

function View({ d, spec, lang }: SimProps & { d: Diagram }) {
  const [active, setActive] = useState<number | null>(0);
  const w = d.w ?? 320, h = d.h ?? 220;
  const part = active == null ? null : d.parts[active];
  return (
    <ArtFrame kind="look" title={L(d.title, lang)} body={spec.body || (d.hint ? L(d.hint, lang) : L(UI.tapPart, lang))}>
      <div className="sim-layout is-split">
        <svg viewBox={`0 0 ${w} ${h}`} className={cn("sim-stage", d.dark && "is-dark")} style={{ maxWidth: `${((w / h) * 20).toFixed(2)}rem` }} role="img" aria-label={L(d.title, lang)}>
          <rect width={w} height={h} fill={d.dark ? "#0f172a" : "#fbfcff"} />
          {d.draw(lang, active)}
          {d.parts.map((p, k) => (
            <g key={k} className={cn("sim-hot", active === k && "is-active")} onClick={() => setActive(k)} role="button" aria-label={L(p.name, lang)}>
              <circle cx={p.x} cy={p.y} r="16" fill="transparent" />
              <circle className="sim-hot-dot" cx={p.x} cy={p.y} r="8" />
              <text x={p.x} y={p.y + 3} textAnchor="middle">{k + 1}</text>
            </g>
          ))}
        </svg>
        <div>
          {part ? (
            <div className="sim-part-card" aria-live="polite">
              <b>{active! + 1}. {L(part.name, lang)}</b>
              <p>{L(part.text, lang)}</p>
            </div>
          ) : null}
          <div className="sim-parts">
            {d.parts.map((p, k) => (
              <button key={k} type="button" className={cn("art-chip", active === k && "is-active")} onClick={() => setActive(k)}>
                {k + 1}. {L(p.name, lang)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </ArtFrame>
  );
}
