"use client";

import { useEffect, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { StepPlayer, useLoop } from "../kit";
import { L } from "../labels";
import { mechGroup, type MechGroup } from "../mech/ids";
import type { Mech } from "../mech/types";

const LOAD: Record<MechGroup, () => Promise<{ MECHS: Record<string, Mech> }>> = {
  phys: () => import("../mech/phys"),
  chem: () => import("../mech/chem"),
  bio: () => import("../mech/bio"),
  geog: () => import("../mech/geog"),
  sci: () => import("../mech/sci"),
  inf: () => import("../mech/inf"),
  geo: () => import("../mech/geo"),
};

/** ```sim mechanism engine4: a step-by-step animated mechanism from the library. */
export default function Mechanism({ spec, lang }: SimProps) {
  const id = spec.args[0] ?? "";
  const [mech, setMech] = useState<Mech | null>(null);
  useEffect(() => {
    const g = mechGroup(id);
    if (!g) return;
    let live = true;
    LOAD[g]().then((m) => live && setMech(m.MECHS[id] ?? null));
    return () => { live = false; };
  }, [id]);
  if (!mechGroup(id)) return <pre className="art-unknown">mechanism {id}</pre>;
  if (!mech) return <div className="art-frame art-loading" aria-hidden="true" />;
  return <Player mech={mech} spec={spec} lang={lang} />;
}

function Player({ mech, spec, lang }: SimProps & { mech: Mech }) {
  const [i, setI] = useState(0);
  const p = useLoop(2.4);
  const w = mech.w ?? 320, h = mech.h ?? 220;
  return (
    <ArtFrame kind="steps" title={L(mech.title, lang)} body={spec.body || (mech.hint ? L(mech.hint, lang) : undefined)}>
      <StepPlayer lang={lang} caps={mech.caps} i={i} setI={setI}>
        <svg viewBox={`0 0 ${w} ${h}`} className={`sim-stage${mech.dark ? " is-dark" : ""}`} role="img" aria-label={L(mech.title, lang)}>
          <rect width={w} height={h} fill={mech.dark ? "#0f172a" : "#fbfcff"} />
          {mech.draw(i, p, lang)}
        </svg>
      </StepPlayer>
    </ArtFrame>
  );
}
