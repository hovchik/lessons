"use client";

import { useState } from "react";
import type { Tr } from "@/lib/art/spec";
import { list, tr } from "@/lib/art/spec";
import type { WidgetProps } from "../art-block";
import { ArtFrame, Chip } from "../frame";
import { UI } from "../labels";

const t = (en: string, hy: string, ru: string): Tr => ({ en, hy, ru });

/** Motifs drawn in a 40 × 40 cell, centred on 20,20. `a` is the main colour, `b` the second. */
const MOTIFS: Record<string, { name: Tr; svg: (a: string, b: string) => string }> = {
  circle: { name: t("circle", "շրջան", "круг"), svg: (a, b) => `<circle cx="20" cy="20" r="11" fill="${a}"/><circle cx="20" cy="20" r="4" fill="${b}"/>` },
  triangle: { name: t("triangle", "եռանկյուն", "треугольник"), svg: (a) => `<path d="M20 6 L33 32 H7Z" fill="${a}"/>` },
  rhombus: { name: t("rhombus", "շեղանկյուն", "ромб"), svg: (a, b) => `<path d="M20 4 L34 20 L20 36 L6 20Z" fill="${a}"/><path d="M20 13 L27 20 L20 27 L13 20Z" fill="${b}"/>` },
  wave: { name: t("wave", "ալիք", "волна"), svg: (a) => `<path d="M0 24 Q10 8 20 24 T40 24" stroke="${a}" stroke-width="5" fill="none" stroke-linecap="round"/>` },
  leaf: { name: t("leaf", "տերև", "лист"), svg: (a, b) => `<path d="M8 32 C8 14 22 6 34 6 C34 20 26 32 8 32Z" fill="${a}"/><path d="M8 32 L30 10" stroke="${b}" stroke-width="2"/>` },
  flower: { name: t("flower", "ծաղիկ", "цветок"), svg: (a, b) => [0, 60, 120, 180, 240, 300].map((r) => `<ellipse transform="rotate(${r} 20 20)" cx="20" cy="10" rx="5" ry="8" fill="${a}"/>`).join("") + `<circle cx="20" cy="20" r="5" fill="${b}"/>` },
  sun: { name: t("sun", "արև", "солнце"), svg: (a, b) => [0, 45, 90, 135, 180, 225, 270, 315].map((r) => `<path transform="rotate(${r} 20 20)" d="M20 2 L23 10 H17Z" fill="${a}"/>`).join("") + `<circle cx="20" cy="20" r="8" fill="${a}"/><circle cx="20" cy="20" r="4" fill="${b}"/>` },
  pomegranate: { name: t("pomegranate", "նուռ", "гранат"), svg: (a, b) => `<circle cx="20" cy="23" r="12" fill="${a}"/><path d="M14 12 L16 6 L20 10 L24 6 L26 12Z" fill="${a}"/><circle cx="17" cy="21" r="2" fill="${b}"/><circle cx="23" cy="25" r="2" fill="${b}"/>` },
  bird: { name: t("bird", "թռչուն", "птица"), svg: (a, b) => `<path d="M6 26 C8 16 18 12 26 15 C28 10 32 8 36 10 L30 14 C32 22 26 30 16 30 C12 30 8 29 6 26Z" fill="${a}"/><circle cx="31" cy="12" r="1.4" fill="${b}"/><path d="M14 22 C18 18 24 18 26 22" stroke="${b}" stroke-width="2" fill="none"/>` },
  star: { name: t("eight-point star", "ութաթև աստղ", "звезда"), svg: (a, b) => `<rect x="9" y="9" width="22" height="22" fill="${a}"/><rect x="9" y="9" width="22" height="22" fill="${a}" transform="rotate(45 20 20)"/><circle cx="20" cy="20" r="5" fill="${b}"/>` },
  spiral: { name: t("ram's horns", "խոյի եղջյուր", "бараньи рога"), svg: (a) => `<path d="M20 34 V20 C20 10 10 6 6 12 C3 17 8 22 12 20 M20 20 C20 10 30 6 34 12 C37 17 32 22 28 20" stroke="${a}" stroke-width="4" fill="none" stroke-linecap="round"/>` },
  drop: { name: t("drop stroke", "կաթիլ", "мазок-капля"), svg: (a, b) => `<path d="M20 36 C10 26 12 12 20 4 C28 12 30 26 20 36Z" fill="${a}"/><path d="M20 32 C14 24 15 14 20 8" stroke="${b}" stroke-width="2" fill="none"/>` },
};

const PALS: Record<string, { name: Tr; bg: string; a: string; b: string; c: string }> = {
  armenian: { name: t("Armenian carpet", "հայկական գորգ", "армянский ковёр"), bg: "#f1e6cf", a: "#9e1b24", b: "#1c2f5e", c: "#e3c27a" },
  gzhel: { name: t("Gzhel", "Գժել", "Гжель"), bg: "#ffffff", a: "#2f5fc4", b: "#163a8a", c: "#8fb3ea" },
  khokhloma: { name: t("Khokhloma", "Խոխլոմա", "Хохлома"), bg: "#1b1b1b", a: "#d22a1e", b: "#e8b83a", c: "#e8b83a" },
  dymkovo: { name: t("Dymkovo", "Դիմկովո", "Дымково"), bg: "#ffffff", a: "#e0262f", b: "#1f5fbf", c: "#ffd21f" },
  spring: { name: t("spring", "գարուն", "весна"), bg: "#fffbe6", a: "#f78fb3", b: "#2f9e44", c: "#ffd21f" },
  egypt: { name: t("Egypt", "Եգիպտոս", "Египет"), bg: "#f2e2c0", a: "#1f5fa8", b: "#e8b83a", c: "#c0392b" },
  mono: { name: t("one colour", "մեկ գույն", "один цвет"), bg: "#ffffff", a: "#1e1b4b", b: "#ffffff", c: "#1e1b4b" },
};
const RHYTHMS = ["repeat", "alternate", "mirror", "grow"] as const;
const LAYOUTS = ["strip", "rosette", "grid"] as const;

/** Ornament builder: one or two motifs, a rhythm, a layout (strip, rosette, net) and a colour set. */
export default function Pattern({ spec, lang }: WidgetProps) {
  const motifIds = list(spec.opts.motifs, Object.keys(MOTIFS)).filter((m) => MOTIFS[m]);
  const palIds = list(spec.opts.palettes, Object.keys(PALS)).filter((p) => PALS[p]);
  const [picked, setPicked] = useState<string[]>([motifIds[0], motifIds[1] ?? motifIds[0]]);
  const [rhythm, setRhythm] = useState<(typeof RHYTHMS)[number]>((RHYTHMS as readonly string[]).includes(spec.opts.rhythm ?? "") ? (spec.opts.rhythm as (typeof RHYTHMS)[number]) : "alternate");
  const [layout, setLayout] = useState<(typeof LAYOUTS)[number]>((LAYOUTS as readonly string[]).includes(spec.opts.layout ?? "") ? (spec.opts.layout as (typeof LAYOUTS)[number]) : "strip");
  const [pal, setPal] = useState(palIds[0]);
  const P = PALS[pal];

  const cell = (k: number) => {
    const alt = rhythm === "alternate" && k % 2 === 1;
    const id = alt ? picked[1] : picked[0];
    const [a, b] = alt ? [P.b, P.c] : [P.a, P.c === P.a ? P.b : P.c];
    let tf = "";
    if (rhythm === "mirror" && k % 2) tf = "translate(40 0) scale(-1 1)";
    if (rhythm === "grow") { const s = 0.55 + 0.45 * ((k % 4) / 3); tf = `translate(${20 - 20 * s} ${20 - 20 * s}) scale(${s})`; }
    return `<g transform="${tf}">${MOTIFS[id].svg(a, b)}</g>`;
  };

  let content = "";
  let vb = "0 0 320 80";
  if (layout === "strip") {
    content = `<rect width="320" height="80" fill="${P.bg}"/><path d="M0 8 H320 M0 72 H320" stroke="${P.a}" stroke-width="3"/>` + Array.from({ length: 8 }, (_, k) => `<g transform="translate(${k * 40} 20)">${cell(k)}</g>`).join("");
  } else if (layout === "rosette") {
    vb = "0 0 200 200";
    content = `<rect width="200" height="200" fill="${P.bg}"/><circle cx="100" cy="100" r="92" fill="none" stroke="${P.a}" stroke-width="3"/>` +
      Array.from({ length: 8 }, (_, k) => `<g transform="rotate(${k * 45} 100 100) translate(80 18)">${cell(k)}</g>`).join("") +
      Array.from({ length: 8 }, (_, k) => `<g transform="rotate(${k * 45 + 22.5} 100 100) translate(86 58) scale(.7)">${cell(k + 1)}</g>`).join("") +
      `<g transform="translate(80 80)">${MOTIFS[picked[0]].svg(P.a, P.c)}</g>`;
  } else {
    vb = "0 0 240 160";
    content = `<rect width="240" height="160" fill="${P.bg}"/>` + Array.from({ length: 24 }, (_, k) => { const r = Math.floor(k / 6), c = k % 6; return `<g transform="translate(${c * 40} ${r * 40})">${cell(k + r)}</g>`; }).join("");
  }

  const toggle = (id: string) => setPicked((p) => (p[0] === id ? [id, p[1]] : [id, p[0]]));

  return (
    <ArtFrame kind="experiment" title={UI.pattern[lang]} body={spec.body || UI.patternHint[lang]}>
      <div className="art-pattern">
        <svg viewBox={vb} className="art-scene" dangerouslySetInnerHTML={{ __html: content }} aria-hidden="true" />
        <p className="art-ctrl-label">{UI.motif[lang]}</p>
        <div className="art-chips">
          {motifIds.map((id) => (
            <Chip key={id} active={picked.includes(id)} onClick={() => toggle(id)} label={tr(MOTIFS[id].name, lang)}>
              <svg viewBox="0 0 40 40" className="art-chip-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: MOTIFS[id].svg("currentColor", "#fff") }} />
              {tr(MOTIFS[id].name, lang)}
            </Chip>
          ))}
        </div>
        <p className="art-ctrl-label">{UI.rhythm[lang]}</p>
        <div className="art-chips">{RHYTHMS.map((r) => <Chip key={r} active={rhythm === r} onClick={() => setRhythm(r)}>{UI[r][lang]}</Chip>)}</div>
        <p className="art-ctrl-label">{UI.layout[lang]}</p>
        <div className="art-chips">{LAYOUTS.map((r) => <Chip key={r} active={layout === r} onClick={() => setLayout(r)}>{UI[r][lang]}</Chip>)}</div>
        {palIds.length > 1 ? (
          <>
            <p className="art-ctrl-label">{UI.colours[lang]}</p>
            <div className="art-chips">
              {palIds.map((id) => (
                <Chip key={id} active={pal === id} onClick={() => setPal(id)}>
                  <span className="art-mini-pal" aria-hidden="true">{[PALS[id].bg, PALS[id].a, PALS[id].b, PALS[id].c].map((c, i) => <i key={i} style={{ background: c }} />)}</span>
                  {tr(PALS[id].name, lang)}
                </Chip>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </ArtFrame>
  );
}
