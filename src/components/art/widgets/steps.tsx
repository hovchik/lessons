"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { STEPS } from "@/lib/art/steps";
import { tr } from "@/lib/art/spec";
import type { WidgetProps } from "../art-block";
import { ArtFrame } from "../frame";
import { UI } from "../labels";

const withLength = (svg: string) => svg.replace(/<(path|circle|ellipse|rect|line|polyline|polygon)\b/g, '<$1 pathLength="1"');

/** Step-by-step drawing: each step adds a layer, the newest one draws itself in colour. */
export default function Steps({ spec, lang }: WidgetProps) {
  const guide = STEPS[spec.args[0] ?? ""];
  const [i, setI] = useState(0);
  if (!guide) return null;
  const n = guide.steps.length;
  const shown = guide.steps.slice(0, i + 1);
  const paints = shown.filter((s) => s.paint);
  const covered = shown.some((s) => s.cover);
  const last = i === n - 1;
  return (
    <ArtFrame kind="steps" title={`${UI.steps[lang]}: ${tr(guide.name, lang)}`} body={spec.body}>
      <div className="art-steps">
        <div className="art-canvas">
          <svg viewBox="0 0 160 120" role="img" aria-label={tr(guide.steps[i].cap, lang)}>
            <rect width="160" height="120" fill="#fffdf7" />
            {paints.map((s, k) => (
              <g key={`p${k}`} className="art-paint" dangerouslySetInnerHTML={{ __html: s.svg }} />
            ))}
            <g fill="none" stroke="#1e1b4b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              {shown.map((s, k) =>
                s.paint || covered ? null : (
                  <g
                    key={`l${k}-${k === i ? "new" : "old"}`}
                    className={k === i ? "art-new" : undefined}
                    dangerouslySetInnerHTML={{ __html: k === i ? withLength(s.svg) : s.svg }}
                  />
                ),
              )}
            </g>
          </svg>
        </div>
        <div className="art-step-bar">
          <span className="art-step-num">{UI.step[lang]} {i + 1}/{n}</span>
          <p className="art-step-cap" aria-live="polite">{tr(guide.steps[i].cap, lang)}</p>
          <div className="art-dots" aria-hidden="true">
            {guide.steps.map((_, k) => <span key={k} className={k <= i ? "is-on" : undefined} />)}
          </div>
          <div className="art-row">
            <button type="button" className="art-btn" onClick={() => setI(Math.max(0, i - 1))} disabled={i === 0}>
              <ChevronLeft className="size-4" aria-hidden="true" />{UI.back[lang]}
            </button>
            {last ? (
              <button type="button" className="art-btn is-primary" onClick={() => setI(0)}>
                <RotateCcw className="size-4" aria-hidden="true" />{UI.again[lang]}
              </button>
            ) : (
              <button type="button" className="art-btn is-primary" onClick={() => setI(i + 1)}>
                {UI.next[lang]}<ChevronRight className="size-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </div>
    </ArtFrame>
  );
}
