"use client";

import { lazy, Suspense, type ComponentType } from "react";
import { parseArtSpec, type ArtLang, type ArtSpec } from "@/lib/art/spec";

export type SimProps = { spec: ArtSpec; lang: ArtLang };

// Each widget is its own chunk, so a lesson loads only the ones it uses.
// Keep the names in step with SIM_WIDGETS in ./validate.ts (used by content:check).
const WIDGETS: Record<string, ComponentType<SimProps>> = {
  motion: lazy(() => import("./widgets/motion")),
  circuit: lazy(() => import("./widgets/circuit")),
  forces: lazy(() => import("./widgets/forces")),
  spring: lazy(() => import("./widgets/spring")),
  pendulum: lazy(() => import("./widgets/pendulum")),
  machines: lazy(() => import("./widgets/machines")),
  fluids: lazy(() => import("./widgets/fluids")),
  particles: lazy(() => import("./widgets/particles")),
  thermo: lazy(() => import("./widgets/thermo")),
  charges: lazy(() => import("./widgets/charges")),
  magnet: lazy(() => import("./widgets/magnet")),
  induction: lazy(() => import("./widgets/induction")),
  optics: lazy(() => import("./widgets/optics")),
  wave: lazy(() => import("./widgets/wave")),
  atom: lazy(() => import("./widgets/atom")),
  mechanism: lazy(() => import("./widgets/mechanism")),
  check: lazy(() => import("./widgets/check")),
  diagram: lazy(() => import("./widgets/diagram")),
  molecule: lazy(() => import("./widgets/molecule")),
  energy: lazy(() => import("./widgets/energy")),
  collide: lazy(() => import("./widgets/collide")),
  decay: lazy(() => import("./widgets/decay")),
  orbit: lazy(() => import("./widgets/orbit")),
  quantum: lazy(() => import("./widgets/quantum")),
  projectile: lazy(() => import("./widgets/projectile")),
  measure: lazy(() => import("./widgets/measure")),
  ptable: lazy(() => import("./widgets/ptable")),
  balance: lazy(() => import("./widgets/balance")),
  ph: lazy(() => import("./widgets/ph")),
  mole: lazy(() => import("./widgets/mole")),
  solution: lazy(() => import("./widgets/solution")),
  ions: lazy(() => import("./widgets/ions")),
  activity: lazy(() => import("./widgets/activity")),
  rate: lazy(() => import("./widgets/rate")),
  lattice: lazy(() => import("./widgets/lattice")),
  flame: lazy(() => import("./widgets/flame")),
};

/** A ```sim block: a simulation, a step-by-step mechanism, a diagram or a quick check. */
export function SimBlock({ source, lang }: { source: string; lang: ArtLang }) {
  const spec = parseArtSpec(source);
  const Widget = WIDGETS[spec.widget];
  if (!Widget) return <pre className="art-unknown">{source}</pre>;
  return (
    <Suspense fallback={<div className="art-frame art-loading" aria-hidden="true" />}>
      <Widget spec={spec} lang={lang} />
    </Suspense>
  );
}
