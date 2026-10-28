"use client";

import { useState } from "react";
import type { Tr } from "@/lib/art/spec";
import { tr } from "@/lib/art/spec";
import type { WidgetProps } from "../art-block";
import { ArtFrame, Chip, fill } from "../frame";
import { UI } from "../labels";

const t = (en: string, hy: string, ru: string): Tr => ({ en, hy, ru });
const STYLES: Array<{ id: string; name: Tr; style: React.CSSProperties }> = [
  { id: "sans", name: t("sans-serif", "առանց թաթիկների", "рубленый"), style: { fontFamily: "Nunito, 'Noto Sans Armenian', sans-serif" } },
  { id: "serif", name: t("serif", "թաթիկներով", "с засечками"), style: { fontFamily: "Georgia, 'Noto Serif Armenian', 'Times New Roman', serif" } },
  { id: "script", name: t("handwritten", "ձեռագիր", "рукописный"), style: { fontFamily: "'Segoe Script', 'Brush Script MT', cursive", fontStyle: "italic" } },
  { id: "display", name: t("poster", "պաստառային", "плакатный"), style: { fontFamily: "Impact, 'Arial Black', 'Noto Sans Armenian', sans-serif", textTransform: "uppercase", letterSpacing: "0.04em" } },
  { id: "mono", name: t("typewriter", "գրամեքենա", "машинописный"), style: { fontFamily: "ui-monospace, 'Courier New', monospace" } },
  { id: "outline", name: t("outline", "եզրագիծ", "контурный"), style: { fontFamily: "Nunito, 'Noto Sans Armenian', sans-serif", color: "transparent", WebkitTextStroke: "2px #4f46e5" } },
  { id: "festive", name: t("festive", "տոնական", "праздничный"), style: { fontFamily: "Georgia, 'Noto Sans Armenian', serif", backgroundImage: "linear-gradient(90deg,#e0262f,#ff8a1f,#ffd21f,#2f9e44,#1f5fbf,#7d2e8f)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" } },
];
const WORD = { en: "Art", hy: "Արվեստ", ru: "Искусство" };

/** Lettering playground: type a word and switch between letter styles and weights. */
export default function Letters({ spec, lang }: WidgetProps) {
  const [text, setText] = useState(spec.opts.word ?? WORD[lang]);
  const [style, setStyle] = useState(STYLES[0].id);
  const [weight, setWeight] = useState(800);
  const s = STYLES.find((x) => x.id === style)!;
  return (
    <ArtFrame kind="experiment" title={UI.type[lang]} body={spec.body || UI.typeHint[lang]}>
      <div className="art-letters">
        <input className="art-input" value={text} onChange={(e) => setText(e.target.value.slice(0, 24))} aria-label={UI.type[lang]} />
        <div className="art-letter-stage">
          <span style={{ ...s.style, fontWeight: weight }}>{text || "Aa"}</span>
        </div>
        <div className="art-chips">{STYLES.map((x) => <Chip key={x.id} active={x.id === style} onClick={() => setStyle(x.id)}>{tr(x.name, lang)}</Chip>)}</div>
        <label className="art-range-label">
          <span>{UI.weight[lang]}</span>
          <input type="range" min={300} max={900} step={100} value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="art-range" style={fill(weight, 300, 900)} />
        </label>
      </div>
    </ArtFrame>
  );
}
