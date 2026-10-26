"use client";

import { lazy, Suspense, type ComponentType } from "react";
import { parseArtSpec, type ArtLang, type ArtSpec } from "@/lib/art/spec";

export type WidgetProps = { spec: ArtSpec; lang: ArtLang };

// Each widget is its own chunk, so pages without drawings load none of them.
// Keep the names in step with WIDGET_NAMES in src/lib/art/validate.ts (used by content:check).
const WIDGETS: Record<string, ComponentType<WidgetProps>> = {
  pic: lazy(() => import("./widgets/pic")),
  steps: lazy(() => import("./widgets/steps")),
  mixer: lazy(() => import("./widgets/mixer")),
  wheel: lazy(() => import("./widgets/wheel")),
  tints: lazy(() => import("./widgets/tints")),
  mood: lazy(() => import("./widgets/mood")),
  palette: lazy(() => import("./widgets/palette")),
  sketch: lazy(() => import("./widgets/sketch")),
  lines: lazy(() => import("./widgets/lines")),
  light: lazy(() => import("./widgets/light")),
  perspective: lazy(() => import("./widgets/perspective")),
  aerial: lazy(() => import("./widgets/aerial")),
  pattern: lazy(() => import("./widgets/pattern")),
  compose: lazy(() => import("./widgets/compose")),
  tone: lazy(() => import("./widgets/tone")),
  shots: lazy(() => import("./widgets/shots")),
  flipbook: lazy(() => import("./widgets/flipbook")),
  letters: lazy(() => import("./widgets/letters")),
  proportions: lazy(() => import("./widgets/proportions")),
  net: lazy(() => import("./widgets/net")),
  tasks: lazy(() => import("./widgets/tasks")),
  hints: lazy(() => import("./widgets/hints")),
};

export function ArtBlock({ source, lang }: { source: string; lang: ArtLang }) {
  const spec = parseArtSpec(source);
  const Widget = WIDGETS[spec.widget];
  if (!Widget) {
    return <pre className="art-unknown">{source}</pre>;
  }
  return (
    <Suspense fallback={<div className="art-frame art-loading" aria-hidden="true" />}>
      <Widget spec={spec} lang={lang} />
    </Suspense>
  );
}
