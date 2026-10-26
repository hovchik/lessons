import type { Tr } from "./spec";

const t = (en: string, hy: string, ru: string): Tr => ({ en, hy, ru });

/**
 * Small scenes for the `mood` block. Every fill reads a CSS variable, so the same picture can be
 * repainted with any mood palette. `{id}` is replaced with a unique id for gradients.
 */
export const SCENES: Record<string, string> = {
  landscape: `
<defs><linearGradient id="sky{id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--skyTop)"/><stop offset="1" style="stop-color:var(--skyBottom)"/></linearGradient></defs>
<rect width="320" height="200" fill="url(#sky{id})"/>
<circle cx="246" cy="52" r="22" style="fill:var(--sun)"/>
<path d="M0 120 L48 82 L86 108 L132 66 L178 110 L222 84 L268 112 L320 90 L320 200 L0 200Z" style="fill:var(--far)"/>
<path d="M0 140 C60 116 110 126 160 136 C214 146 262 122 320 130 L320 200 L0 200Z" style="fill:var(--mid)"/>
<path d="M0 166 C80 150 170 156 320 170 L320 200 L0 200Z" style="fill:var(--near)"/>
<rect x="58" y="124" width="6" height="30" style="fill:var(--ink)"/>
<ellipse cx="61" cy="116" rx="20" ry="24" style="fill:var(--accent)"/>
<path d="M210 136 L238 116 L266 136Z" style="fill:var(--accent)"/>
<rect x="214" y="136" width="48" height="26" style="fill:var(--light)"/>
<rect x="232" y="144" width="12" height="18" style="fill:var(--ink)"/>`,
  sea: `
<defs><linearGradient id="sky{id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--skyTop)"/><stop offset="1" style="stop-color:var(--skyBottom)"/></linearGradient></defs>
<rect width="320" height="200" fill="url(#sky{id})"/>
<circle cx="90" cy="70" r="20" style="fill:var(--sun)"/>
<path d="M60 92 L120 92 L104 100 L76 100Z" style="fill:var(--light);opacity:.5"/>
<rect y="104" width="320" height="96" style="fill:var(--far)"/>
<path d="M0 132 Q20 118 40 132 T80 132 T120 132 T160 132 T200 132 T240 132 T280 132 T320 132 L320 200 L0 200Z" style="fill:var(--mid)"/>
<path d="M0 162 Q30 140 60 162 T120 162 T180 162 T240 162 T300 162 T360 162 L320 200 L0 200Z" style="fill:var(--near)"/>
<path d="M14 156 q14 -10 28 0 M134 156 q14 -10 28 0 M254 156 q14 -10 28 0" style="fill:none;stroke:var(--light);stroke-width:3;stroke-linecap:round"/>
<path d="M214 114 L254 114 L246 124 L222 124Z" style="fill:var(--ink)"/>
<path d="M232 112 L232 76 L252 110Z" style="fill:var(--accent)"/>`,
  city: `
<defs><linearGradient id="sky{id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--skyTop)"/><stop offset="1" style="stop-color:var(--skyBottom)"/></linearGradient></defs>
<rect width="320" height="200" fill="url(#sky{id})"/>
<circle cx="262" cy="44" r="16" style="fill:var(--sun)"/>
<path d="M0 150 V96 H30 V80 H56 V110 H80 V70 H110 V104 H140 V86 H170 V112 H200 V64 H226 V100 H252 V84 H284 V108 H320 V150Z" style="fill:var(--far)"/>
<rect x="14" y="110" width="44" height="60" style="fill:var(--mid)"/>
<rect x="66" y="92" width="52" height="78" style="fill:var(--mid)"/>
<rect x="128" y="118" width="40" height="52" style="fill:var(--mid)"/>
<rect x="178" y="82" width="58" height="88" style="fill:var(--mid)"/>
<rect x="246" y="104" width="60" height="66" style="fill:var(--mid)"/>
<g style="fill:var(--light)">
<rect x="22" y="120" width="8" height="8"/><rect x="40" y="120" width="8" height="8"/><rect x="22" y="138" width="8" height="8"/>
<rect x="76" y="102" width="9" height="9"/><rect x="98" y="102" width="9" height="9"/><rect x="76" y="122" width="9" height="9"/><rect x="98" y="142" width="9" height="9"/>
<rect x="138" y="128" width="8" height="8"/><rect x="152" y="144" width="8" height="8"/>
<rect x="188" y="94" width="10" height="10"/><rect x="212" y="94" width="10" height="10"/><rect x="188" y="116" width="10" height="10"/><rect x="212" y="138" width="10" height="10"/>
<rect x="256" y="114" width="10" height="10"/><rect x="282" y="114" width="10" height="10"/><rect x="256" y="136" width="10" height="10"/></g>
<rect y="170" width="320" height="30" style="fill:var(--near)"/>
<path d="M20 186 H60 M100 186 H140 M180 186 H220 M260 186 H300" style="stroke:var(--light);stroke-width:3"/>
<rect x="120" y="160" width="56" height="20" rx="6" style="fill:var(--accent)"/>
<circle cx="132" cy="182" r="5" style="fill:var(--ink)"/><circle cx="164" cy="182" r="5" style="fill:var(--ink)"/>`,
  still: `
<defs><linearGradient id="sky{id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--skyTop)"/><stop offset="1" style="stop-color:var(--skyBottom)"/></linearGradient></defs>
<rect width="320" height="200" fill="url(#sky{id})"/>
<path d="M0 132 H320 V200 H0Z" style="fill:var(--near)"/>
<path d="M150 132 L290 132 L300 196 L130 196Z" style="fill:var(--mid)"/>
<ellipse cx="118" cy="168" rx="56" ry="8" style="fill:var(--ink);opacity:.25"/>
<path d="M100 60 C88 76 84 92 88 110 C92 132 96 150 118 166 C140 150 144 132 148 110 C152 92 148 76 136 60Z" style="fill:var(--accent)"/>
<rect x="104" y="48" width="28" height="14" rx="4" style="fill:var(--accent)"/>
<path d="M106 92 C110 120 112 140 118 160" style="fill:none;stroke:var(--light);stroke-width:4;stroke-linecap:round;opacity:.6"/>
<circle cx="200" cy="158" r="22" style="fill:var(--sun)"/>
<circle cx="242" cy="164" r="17" style="fill:var(--far)"/>
<path d="M200 136 q4 -10 12 -12" style="fill:none;stroke:var(--ink);stroke-width:3"/>
<circle cx="193" cy="150" r="5" style="fill:var(--light);opacity:.7"/>`,
  abstract: `
<defs><linearGradient id="sky{id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--skyTop)"/><stop offset="1" style="stop-color:var(--skyBottom)"/></linearGradient></defs>
<rect width="320" height="200" fill="url(#sky{id})"/>
<circle cx="96" cy="88" r="52" style="fill:var(--sun)"/>
<path d="M170 30 L262 130 L150 160Z" style="fill:var(--far)"/>
<rect x="196" y="40" width="90" height="46" rx="10" style="fill:var(--accent)"/>
<path d="M0 170 C60 130 110 200 170 160 S270 130 320 170 V200 H0Z" style="fill:var(--mid)"/>
<circle cx="250" cy="160" r="20" style="fill:var(--near)"/>
<path d="M30 30 C80 10 110 50 150 30" style="fill:none;stroke:var(--ink);stroke-width:6;stroke-linecap:round"/>
<circle cx="70" cy="150" r="12" style="fill:var(--light)"/>`,
};

export type Mood = { name: Tr; vars: Record<"skyTop" | "skyBottom" | "sun" | "far" | "mid" | "near" | "accent" | "ink" | "light", string> };

const m = (name: Tr, v: string[]): Mood => {
  const [skyTop, skyBottom, sun, far, mid, near, accent, ink, light] = v;
  return { name, vars: { skyTop, skyBottom, sun, far, mid, near, accent, ink, light } };
};

export const MOODS: Record<string, Mood> = {
  warm: m(t("warm", "տաք", "тёплое"), ["#ffb347", "#ffe08a", "#fff3b0", "#e07a3f", "#d9a441", "#b5651d", "#e0262f", "#5a2a14", "#fff1c9"]),
  cold: m(t("cold", "սառը", "холодное"), ["#3a5ba0", "#a9d2f0", "#e6f4ff", "#5a7fb8", "#2f8f8a", "#1d5a6b", "#4b3aa6", "#14213d", "#dff3ff"]),
  joy: m(t("joy", "ուրախություն", "радость"), ["#4fc3f7", "#fff59d", "#ffd21f", "#ff8a65", "#9ccc2b", "#43a047", "#ff4081", "#6d2f12", "#ffffff"]),
  sad: m(t("sadness", "տխրություն", "грусть"), ["#5f6b7a", "#9aa5b1", "#c9d1d9", "#6b7684", "#7d8a7a", "#55605a", "#4a5a78", "#2b2f36", "#d6dbe0"]),
  morning: m(t("morning", "առավոտ", "утро"), ["#9ec9f0", "#ffd7c2", "#fff0b3", "#b9a7d6", "#a8d5a2", "#6fae6a", "#f48fb1", "#4e5d4a", "#fffaf0"]),
  noon: m(t("noon", "կեսօր", "полдень"), ["#1e88e5", "#90caf9", "#fff59d", "#7e8fb5", "#66bb6a", "#2e7d32", "#e53935", "#3e2723", "#ffffff"]),
  evening: m(t("evening", "երեկո", "вечер"), ["#3b2a6b", "#ff8a5c", "#ffcf6b", "#6b3f6b", "#8a4a5a", "#3a2a3a", "#ff5a36", "#1a1020", "#ffd59a"]),
  night: m(t("night", "գիշեր", "ночь"), ["#070b24", "#1b2450", "#f2f0d0", "#1f2a5a", "#18304a", "#0e1a2a", "#3a3f8f", "#04060f", "#ffd25a"]),
  calm: m(t("calm", "խաղաղ", "штиль"), ["#8fc9ef", "#fbe8c8", "#fff4c2", "#7cb8c8", "#5aa3b5", "#3f8ea3", "#ffffff", "#5b4636", "#ffffff"]),
  storm: m(t("storm", "փոթորիկ", "буря"), ["#1c2330", "#4a5868", "#c8d2c0", "#2a4a4f", "#1f3f45", "#0f2a30", "#e8e0c0", "#0a0f14", "#dfe8e0"]),
  loud: m(t("loud", "բարձրաձայն", "звонкое"), ["#ff1f4b", "#ffe100", "#ffffff", "#c800ff", "#00c853", "#00a2ff", "#ff8a00", "#111111", "#ffffff"]),
  quiet: m(t("quiet", "մեղմ", "тихое"), ["#d8e3ef", "#f4ece4", "#fffaf0", "#cdd5e4", "#d7e6d2", "#c2d4bf", "#e9c9cf", "#8a8a96", "#ffffff"]),
  spring: m(t("spring", "գարուն", "весна"), ["#9fd8f5", "#e8f7ff", "#fff3a6", "#b8d8b0", "#9fe07a", "#6cc35a", "#f78fb3", "#5c4a3a", "#ffffff"]),
  summer: m(t("summer", "ամառ", "лето"), ["#2b9ae8", "#bfe6ff", "#ffe14d", "#6aa96a", "#2fbf71", "#1f8a3a", "#ff5d73", "#4a2f1f", "#fffbe6"]),
  autumn: m(t("autumn", "աշուն", "осень"), ["#8fb3c8", "#f3e2c0", "#f6c453", "#b5824a", "#d9822b", "#8a4a24", "#d22a1e", "#3e2416", "#fff3d6"]),
  winter: m(t("winter", "ձմեռ", "зима"), ["#8fb4d9", "#e8f2fb", "#fdfdfd", "#c9d8ea", "#eef4fb", "#ffffff", "#5a7fb8", "#2c3e50", "#ffe9a8"]),
  saryan: m(t("Saryan's sun", "Սարյանի արևը", "солнце Сарьяна"), ["#1f4fa3", "#3fa0e0", "#ffcf3f", "#7d2e8f", "#ff8a1f", "#e0442f", "#1f7a4a", "#2a1a3a", "#ffe08a"]),
  mono: m(t("one colour", "մեկ գույն", "один цвет"), ["#173f8a", "#a9c4ef", "#e6eefb", "#4f75c2", "#2f5aa8", "#1b3f80", "#7d9fdc", "#0d1f45", "#ffffff"]),
};
