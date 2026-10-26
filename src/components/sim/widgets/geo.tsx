"use client";

import { useEffect, useState, type ComponentType } from "react";
import type { SimProps } from "../sim-block";

/**
 * ```sim geo <preset>: draggable plane-geometry figures. The presets live in three files so a
 * lesson only loads the one it needs.
 */
type Mod = Record<string, ComponentType<SimProps>>;

const A = () => import("../geo/plane-a").then((m): Mod => ({ angle: m.AnglePreset, adjacent: m.AdjacentPreset, vertical: m.VerticalPreset, triangle: m.TrianglePreset, inequality: m.InequalityPreset, parallel: m.ParallelPreset, distance: m.DistancePreset, segments: m.SegmentsPreset }));
const B = () => import("../geo/plane-b").then((m): Mod => ({ quad: m.QuadPreset, area: m.AreaPreset, pythagoras: m.PythagorasPreset, similar: m.SimilarPreset, thales: m.ThalesPreset, trig: m.TrigPreset, circle: m.CirclePreset, polygon: m.PolygonPreset, sector: m.SectorPreset }));
const C = () => import("../geo/plane-c").then((m): Mod => ({ vectors: m.VectorsPreset, coords: m.CoordsPreset, transform: m.TransformPreset, laws: m.LawsPreset }));

export const GEO_PRESETS: Record<string, () => Promise<Mod>> = {
  angle: A, adjacent: A, vertical: A, triangle: A, inequality: A, parallel: A, distance: A, segments: A,
  quad: B, area: B, pythagoras: B, similar: B, thales: B, trig: B, circle: B, polygon: B, sector: B,
  vectors: C, coords: C, transform: C, laws: C,
};

export default function Geo({ spec, lang }: SimProps) {
  const id = spec.args[0] ?? "triangle";
  const [Comp, setComp] = useState<ComponentType<SimProps> | null>(null);
  useEffect(() => {
    const load = GEO_PRESETS[id];
    if (!load) return;
    let live = true;
    load().then((m) => live && setComp(() => m[id]));
    return () => { live = false; };
  }, [id]);
  if (!GEO_PRESETS[id]) return <pre className="art-unknown">geo {id}</pre>;
  if (!Comp) return <div className="art-frame art-loading" aria-hidden="true" />;
  return <Comp spec={spec} lang={lang} />;
}
