"use client";

import { useState } from "react";
import { PICS } from "@/lib/art/pictures";
import { tr } from "@/lib/art/spec";
import { cn } from "@/lib/utils";
import type { WidgetProps } from "../art-block";
import { ArtFrame } from "../frame";
import { UI } from "../labels";

/** A gallery of illustrations, or a silhouette guessing game with mode=silhouette. */
export default function Pic({ spec, lang }: WidgetProps) {
  const items = spec.args.filter((id) => PICS[id]);
  const guess = spec.opts.mode === "silhouette";
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const single = items.length === 1;
  return (
    <ArtFrame kind="look" title={guess ? UI.guess[lang] : UI.look[lang]} body={spec.body}>
      <div className={cn("art-gallery", single && "is-single", items.length === 2 && "is-pair")}>
        {items.map((id) => {
          const p = PICS[id];
          const hidden = guess && !open[id];
          const inner = (
            <>
              <svg viewBox="0 0 120 120" className={cn("art-pic", hidden && "is-silhouette")} role="img" aria-label={hidden ? "?" : tr(p.name, lang)} dangerouslySetInnerHTML={{ __html: p.svg }} />
              <span className="art-caption">{hidden ? "?" : tr(p.name, lang)}</span>
            </>
          );
          return guess ? (
            <button key={id} type="button" className="art-card" onClick={() => setOpen((o) => ({ ...o, [id]: !o[id] }))}>{inner}</button>
          ) : (
            <div key={id} className="art-card">{inner}</div>
          );
        })}
      </div>
    </ArtFrame>
  );
}
