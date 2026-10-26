"use client";

import { PALETTES } from "@/lib/art/palettes";
import { tr } from "@/lib/art/spec";
import type { WidgetProps } from "../art-block";
import { ArtFrame } from "../frame";
import { UI } from "../labels";

/** Named colour sets as big swatches. Several palettes can be shown side by side. */
export default function Palette({ spec, lang }: WidgetProps) {
  const ids = spec.args.filter((id) => PALETTES[id]);
  return (
    <ArtFrame kind="palette" title={UI.palette[lang]} body={spec.body}>
      <div className="art-palettes">
        {ids.map((id) => {
          const p = PALETTES[id];
          return (
            <div key={id} className="art-palette">
              <p className="art-palette-name">{tr(p.name, lang)}</p>
              <div className="art-swatches">
                {p.colors.map((c, i) => (
                  <div key={i} className="art-swatch">
                    <span style={{ background: c }} />
                    {p.labels?.[i] ? <small>{tr(p.labels[i], lang)}</small> : null}
                  </div>
                ))}
              </div>
              {p.note ? <p className="art-note">{tr(p.note, lang)}</p> : null}
            </div>
          );
        })}
      </div>
    </ArtFrame>
  );
}
