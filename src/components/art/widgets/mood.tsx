"use client";

import { useId, useMemo, useState } from "react";
import { MOODS, SCENES } from "@/lib/art/scenes";
import { list, tr } from "@/lib/art/spec";
import type { WidgetProps } from "../art-block";
import { ArtFrame, Chip } from "../frame";
import { UI } from "../labels";

/** One scene repainted with different mood palettes. */
export default function Mood({ spec, lang }: WidgetProps) {
  const scene = SCENES[spec.opts.scene ?? spec.args[0] ?? "landscape"] ?? SCENES.landscape;
  const moods = list(spec.opts.moods, ["warm", "cold"]).filter((m) => MOODS[m]);
  const [m, setM] = useState(moods[0]);
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const html = useMemo(() => scene.replaceAll("{id}", uid), [scene, uid]);
  const vars = Object.fromEntries(Object.entries(MOODS[m]?.vars ?? {}).map(([k, v]) => [`--${k}`, v])) as React.CSSProperties;
  return (
    <ArtFrame kind="experiment" title={UI.mood[lang]} body={spec.body || UI.moodHint[lang]}>
      <div className="art-mood">
        <svg viewBox="0 0 320 200" className="art-scene" style={vars} role="img" aria-label={tr(MOODS[m].name, lang)} dangerouslySetInnerHTML={{ __html: html }} />
        <div className="art-chips">
          {moods.map((id) => (
            <Chip key={id} active={id === m} onClick={() => setM(id)}>
              <span className="art-mini-pal" aria-hidden="true">
                {(["skyTop", "sun", "mid", "accent"] as const).map((k) => <i key={k} style={{ background: MOODS[id].vars[k] }} />)}
              </span>
              {tr(MOODS[id].name, lang)}
            </Chip>
          ))}
        </div>
      </div>
    </ArtFrame>
  );
}
