import type { Tr } from "./spec";

const t = (en: string, hy: string, ru: string): Tr => ({ en, hy, ru });

/** Paint pots for the mixing experiment. */
export const PAINTS: Record<string, { hex: string; name: Tr }> = {
  red: { hex: "#e0262f", name: t("red", "կարմիր", "красная") },
  yellow: { hex: "#ffd21f", name: t("yellow", "դեղին", "жёлтая") },
  blue: { hex: "#1f5fbf", name: t("blue", "կապույտ", "синяя") },
  white: { hex: "#ffffff", name: t("white", "սպիտակ", "белая") },
  black: { hex: "#1d1d24", name: t("black", "սև", "чёрная") },
};

/** Named colours used to say what a mix looks like. */
export const NAMED: Array<{ hex: string; name: Tr }> = [
  { hex: "#e0262f", name: t("red", "կարմիր", "красный") },
  { hex: "#ff8a1f", name: t("orange", "նարնջագույն", "оранжевый") },
  { hex: "#ffd21f", name: t("yellow", "դեղին", "жёлтый") },
  { hex: "#2f9e44", name: t("green", "կանաչ", "зелёный") },
  { hex: "#1f5fbf", name: t("blue", "կապույտ", "синий") },
  { hex: "#7d2e8f", name: t("violet", "մանուշակագույն", "фиолетовый") },
  { hex: "#f4a3b4", name: t("pink", "վարդագույն", "розовый") },
  { hex: "#8fb8ef", name: t("light blue", "երկնագույն", "голубой") },
  { hex: "#a8dca0", name: t("light green", "բաց կանաչ", "светло-зелёный") },
  { hex: "#c9a6dd", name: t("lilac", "եղրևանագույն", "сиреневый") },
  { hex: "#ffe58a", name: t("light yellow", "բաց դեղին", "светло-жёлтый") },
  { hex: "#ffc58f", name: t("peach", "դեղձագույն", "персиковый") },
  { hex: "#7a4a24", name: t("brown", "շագանակագույն", "коричневый") },
  { hex: "#8c8c8c", name: t("grey", "մոխրագույն", "серый") },
  { hex: "#cfcfcf", name: t("light grey", "բաց մոխրագույն", "светло-серый") },
  { hex: "#1d1d24", name: t("black", "սև", "чёрный") },
  { hex: "#ffffff", name: t("white", "սպիտակ", "белый") },
  { hex: "#8a1a1f", name: t("dark red", "մուգ կարմիր", "тёмно-красный") },
  { hex: "#1d5a2a", name: t("dark green", "մուգ կանաչ", "тёмно-зелёный") },
  { hex: "#14306b", name: t("dark blue", "մուգ կապույտ", "тёмно-синий") },
  { hex: "#6b6b1f", name: t("olive", "ձիթապտղագույն", "оливковый") },
  { hex: "#a0522d", name: t("rust", "ժանգագույն", "ржаво-рыжий") },
];

export type RGB = [number, number, number];

export const hexToRgb = (hex: string): RGB => {
  const h = hex.replace("#", "");
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)) as RGB;
};
export const rgbToHex = ([r, g, b]: RGB) =>
  "#" + [r, g, b].map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("");

/** Paint-like mixing: red, yellow and blue are mixed in RYB space, then white and black are added. */
export function mixPaints(drops: Record<string, number>): string | null {
  const r = drops.red ?? 0, y = drops.yellow ?? 0, b = drops.blue ?? 0, w = drops.white ?? 0, k = drops.black ?? 0;
  const total = r + y + b + w + k;
  if (!total) return null;
  const chroma = r + y + b;
  let rgb: RGB = [255, 255, 255];
  if (chroma) {
    const m = Math.max(r, y, b);
    rgb = rybToRgb(r / m, y / m, b / m);
  }
  const mixWith = (base: RGB, target: RGB, f: number): RGB => base.map((v, i) => v + (target[i] - v) * f) as RGB;
  if (chroma) {
    // White lightens in proportion to its share; black is strong, so a little goes a long way.
    rgb = mixWith(rgb, [255, 255, 255], w / total);
    rgb = mixWith(rgb, [29, 29, 36], Math.min(1, (k * 1.6) / total));
  } else {
    rgb = mixWith([255, 255, 255], [29, 29, 36], k / (w + k));
  }
  return rgbToHex(rgb);
}

/** Trilinear RYB cube (Gossett & Chen) giving painter-like results. */
function rybToRgb(r: number, y: number, b: number): RGB {
  const c: Record<string, RGB> = {
    "000": [1, 1, 1], "100": [1, 0, 0], "010": [1, 1, 0], "001": [0.163, 0.373, 0.6],
    "110": [1, 0.5, 0], "101": [0.5, 0, 0.5], "011": [0, 0.66, 0.2], "111": [0.2, 0.094, 0.0],
  };
  const out: RGB = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    const lerp = (a: number, bb: number, f: number) => a + (bb - a) * f;
    const x00 = lerp(c["000"][i], c["100"][i], r), x01 = lerp(c["001"][i], c["101"][i], r);
    const x10 = lerp(c["010"][i], c["110"][i], r), x11 = lerp(c["011"][i], c["111"][i], r);
    const y0 = lerp(x00, x10, y), y1 = lerp(x01, x11, y);
    out[i] = lerp(y0, y1, b) * 255;
  }
  return out;
}

export function nearestName(hex: string): Tr {
  const [r, g, b] = hexToRgb(hex);
  let best = NAMED[0], bestD = Infinity;
  // The in-between wheel colours too, so 1 red + 2 yellow is named yellow-orange, not yellow.
  for (const n of [...NAMED, ...WHEEL.filter((w) => w.kind === "tertiary")]) {
    const [r2, g2, b2] = hexToRgb(n.hex);
    // Weighted distance, closer to how people see colour differences.
    const d = 2 * (r - r2) ** 2 + 4 * (g - g2) ** 2 + 3 * (b - b2) ** 2;
    if (d < bestD) { bestD = d; best = n; }
  }
  return best.name;
}

/** The 12-part painter's (RYB) colour wheel, starting at yellow and going clockwise. */
export const WHEEL: Array<{ hex: string; name: Tr; kind: "primary" | "secondary" | "tertiary"; warm: boolean }> = [
  { hex: "#ffd21f", name: t("yellow", "դեղին", "жёлтый"), kind: "primary", warm: true },
  { hex: "#ffb01f", name: t("yellow-orange", "դեղնանարնջագույն", "жёлто-оранжевый"), kind: "tertiary", warm: true },
  { hex: "#ff8a1f", name: t("orange", "նարնջագույն", "оранжевый"), kind: "secondary", warm: true },
  { hex: "#f45a24", name: t("red-orange", "կարմրանարնջագույն", "красно-оранжевый"), kind: "tertiary", warm: true },
  { hex: "#e0262f", name: t("red", "կարմիր", "красный"), kind: "primary", warm: true },
  { hex: "#b5246b", name: t("red-violet", "կարմրամանուշակագույն", "красно-фиолетовый"), kind: "tertiary", warm: true },
  { hex: "#7d2e8f", name: t("violet", "մանուշակագույն", "фиолетовый"), kind: "secondary", warm: false },
  { hex: "#4b3aa6", name: t("blue-violet", "կապտամանուշակագույն", "сине-фиолетовый"), kind: "tertiary", warm: false },
  { hex: "#1f5fbf", name: t("blue", "կապույտ", "синий"), kind: "primary", warm: false },
  { hex: "#1a8a96", name: t("blue-green", "կապտականաչ", "сине-зелёный"), kind: "tertiary", warm: false },
  { hex: "#2f9e44", name: t("green", "կանաչ", "зелёный"), kind: "secondary", warm: false },
  { hex: "#9ccc2b", name: t("yellow-green", "դեղնականաչ", "жёлто-зелёный"), kind: "tertiary", warm: false },
];
