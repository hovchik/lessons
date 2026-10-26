"use client";

import { useState } from "react";
import { list, tr } from "@/lib/art/spec";
import type { WidgetProps } from "../art-block";
import { ArtFrame } from "../frame";
import { LINE_TYPES, UI } from "../labels";

/** A gallery of line types: tap one and it draws itself, with the mood it carries. */
export default function Lines({ spec, lang }: WidgetProps) {
  const only = list(spec.opts.only);
  const types = only.length ? LINE_TYPES.filter((l) => only.includes(l.id)) : LINE_TYPES;
  const [sel, setSel] = useState(types[0].id);
  const [run, setRun] = useState(0);
  const cur = types.find((l) => l.id === sel) ?? types[0];
  return (
    <ArtFrame kind="experiment" title={UI.lines[lang]} body={spec.body || UI.linesHint[lang]}>
      <div className="art-lines">
        <svg viewBox="0 0 240 60" className="art-line-big" aria-hidden="true" key={`${sel}-${run}`}>
          {cur.id === "thickthin" ? (
            <>
              <path d="M10 16 H230" stroke="#e0262f" strokeWidth="10" strokeLinecap="round" pathLength={1} className="art-draw" />
              <path d="M10 44 H230" stroke="#e0262f" strokeWidth="1.5" strokeLinecap="round" pathLength={1} className="art-draw" />
            </>
          ) : cur.dash ? (
            <path d={cur.d} stroke="#e0262f" strokeWidth={cur.width} strokeLinecap="round" fill="none" strokeDasharray={cur.dash} className="art-fade" />
          ) : (
            <path d={cur.d} stroke="#e0262f" strokeWidth={cur.width} strokeLinecap="round" strokeLinejoin="round" fill="none" pathLength={1} className="art-draw" />
          )}
        </svg>
        <p className="art-mix-name"><strong>{tr(cur.name, lang)}</strong> · {tr(cur.mood, lang)}</p>
        <div className="art-line-grid">
          {types.map((l) => (
            <button key={l.id} type="button" className={`art-line-btn${l.id === sel ? " is-active" : ""}`} onClick={() => { setSel(l.id); setRun((r) => r + 1); }} aria-pressed={l.id === sel}>
              <svg viewBox="0 0 240 60" aria-hidden="true">
                {l.id === "thickthin" ? (
                  <><path d="M10 18 H230" stroke="currentColor" strokeWidth="9" strokeLinecap="round" /><path d="M10 44 H230" stroke="currentColor" strokeWidth="2" /></>
                ) : (
                  <path d={l.d} stroke="currentColor" strokeWidth={Math.max(3, l.width) + 1} strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray={l.dash} />
                )}
              </svg>
              <span>{tr(l.name, lang)}</span>
            </button>
          ))}
        </div>
      </div>
    </ArtFrame>
  );
}
