"use client";

import { lazy, Suspense, useEffect, useState, type ComponentType } from "react";
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
  geo: lazy(() => import("./widgets/geo")),
  solid: lazy(() => import("./widgets/solid")),
  // primary-school math
  count: lazy(() => import("./widgets/count")),
  numline: lazy(() => import("./widgets/numline")),
  place: lazy(() => import("./widgets/place")),
  fraction: lazy(() => import("./widgets/fraction")),
  array: lazy(() => import("./widgets/array")),
  column: lazy(() => import("./widgets/column")),
  clock: lazy(() => import("./widgets/clock")),
  chart: lazy(() => import("./widgets/chart")),
  scale: lazy(() => import("./widgets/scale")),
  percent: lazy(() => import("./widgets/percent")),
  shapes: lazy(() => import("./widgets/shapes")),
  trip: lazy(() => import("./widgets/trip")),
  plot: lazy(() => import("./widgets/plot")),
  tiles: lazy(() => import("./widgets/tiles")),
  interval: lazy(() => import("./widgets/interval")),
  seq: lazy(() => import("./widgets/seq")),
  chance: lazy(() => import("./widgets/chance")),
  unit: lazy(() => import("./widgets/unit")),
  letters: lazy(() => import("./widgets/letters")),
  word: lazy(() => import("./widgets/word")),
  sentence: lazy(() => import("./widgets/sentence")),
  tense: lazy(() => import("./widgets/tense")),
  forms: lazy(() => import("./widgets/forms")),
  punnett: lazy(() => import("./widgets/punnett")),
  pyramid: lazy(() => import("./widgets/pyramid")),
  bars: lazy(() => import("./widgets/bars")),
  climate: lazy(() => import("./widgets/climate")),
  geocalc: lazy(() => import("./widgets/geocalc")),
  timeline: lazy(() => import("./widgets/timeline")),
  bits: lazy(() => import("./widgets/bits")),
  algo: lazy(() => import("./widgets/algo")),
  logic: lazy(() => import("./widgets/logic")),
  graph: lazy(() => import("./widgets/graph")),
  cipher: lazy(() => import("./widgets/cipher")),
  compress: lazy(() => import("./widgets/compress")),
  trace: lazy(() => import("./widgets/trace")),
  neuron: lazy(() => import("./widgets/neuron")),
  password: lazy(() => import("./widgets/password")),
  turtle: lazy(() => import("./widgets/turtle")),
  sheet: lazy(() => import("./widgets/sheet")),
  sql: lazy(() => import("./widgets/sql")),
  stats: lazy(() => import("./widgets/stats")),
  vote: lazy(() => import("./widgets/vote")),
  market: lazy(() => import("./widgets/market")),
  finance: lazy(() => import("./widgets/finance")),
};

/** A ```sim block: a simulation, a step-by-step mechanism, a diagram or a quick check. */
export function SimBlock({ source, lang }: { source: string; lang: ArtLang }) {
  // Widgets draw with floating-point geometry that can differ in the last digit between the
  // server and the browser, so they render only in the browser (no hydration mismatches).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const spec = parseArtSpec(source);
  const Widget = WIDGETS[spec.widget];
  if (!Widget) return <pre className="art-unknown">{source}</pre>;
  const placeholder = <div className="art-frame art-loading" aria-hidden="true" />;
  if (!mounted) return placeholder;
  return (
    <Suspense fallback={placeholder}>
      <Widget spec={spec} lang={lang} />
    </Suspense>
  );
}
