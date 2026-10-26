import type { Tr } from "./spec";

const t = (en: string, hy: string, ru: string): Tr => ({ en, hy, ru });
export type Pic = { name: Tr; svg: string };

/** Art materials, shapes and things from nature. Every picture is drawn in a 120 × 120 box. */
export const PICS_1: Record<string, Pic> = {
  pencil: {
    name: t("pencil", "մատիտ", "карандаш"),
    svg: `<g transform="rotate(-35 60 60)"><rect x="18" y="52" width="70" height="16" fill="#ffc83d"/><rect x="18" y="52" width="70" height="5" fill="#ffd96b"/><rect x="10" y="52" width="10" height="16" fill="#b8bec9"/><rect x="2" y="52" width="9" height="16" rx="3" fill="#f48fb1"/><path d="M88 52 L106 60 L88 68Z" fill="#f3d2a2"/><path d="M100 57.3 L106 60 L100 62.7Z" fill="#33333a"/></g>`,
  },
  brush: {
    name: t("brush", "վրձին", "кисть"),
    svg: `<g transform="rotate(-40 60 60)"><rect x="6" y="56" width="62" height="8" rx="4" fill="#d6453d"/><rect x="66" y="54" width="16" height="12" fill="#c7ccd6"/><path d="M82 54 C96 54 106 58 114 60 C106 62 96 66 82 66Z" fill="#7a4a24"/><path d="M98 57 C106 58 110 59 114 60 C110 61 106 62 98 63Z" fill="#2f5fc4"/></g>`,
  },
  gouache: {
    name: t("gouache", "գուաշ", "гуашь"),
    svg: `<g><rect x="10" y="50" width="30" height="34" rx="5" fill="#fff" stroke="#c9d1e0" stroke-width="2"/><rect x="10" y="44" width="30" height="10" rx="3" fill="#e0262f"/><rect x="45" y="50" width="30" height="34" rx="5" fill="#fff" stroke="#c9d1e0" stroke-width="2"/><rect x="45" y="44" width="30" height="10" rx="3" fill="#ffd21f"/><rect x="80" y="50" width="30" height="34" rx="5" fill="#fff" stroke="#c9d1e0" stroke-width="2"/><rect x="80" y="44" width="30" height="10" rx="3" fill="#1f5fbf"/><rect x="14" y="66" width="22" height="14" rx="3" fill="#e0262f"/><rect x="49" y="66" width="22" height="14" rx="3" fill="#ffd21f"/><rect x="84" y="66" width="22" height="14" rx="3" fill="#1f5fbf"/><ellipse cx="60" cy="92" rx="52" ry="4" fill="#1e1b4b" opacity=".1"/></g>`,
  },
  watercolour: {
    name: t("watercolour", "ջրաներկ", "акварель"),
    svg: `<rect x="8" y="38" width="104" height="48" rx="8" fill="#2c3e70"/><rect x="12" y="42" width="96" height="40" rx="5" fill="#f4f6fb"/>${["#e0262f", "#ff8a1f", "#ffd21f", "#2f9e44", "#1f5fbf", "#7d2e8f", "#7a4a24", "#1d1d24"].map((c, i) => `<rect x="${16 + (i % 4) * 23}" y="${46 + Math.floor(i / 4) * 18}" width="19" height="14" rx="4" fill="${c}"/>`).join("")}`,
  },
  crayons: {
    name: t("wax crayons", "մոմամատիտներ", "восковые мелки"),
    svg: ["#e0262f", "#ffd21f", "#2f9e44", "#1f5fbf"].map((c, i) => `<g transform="translate(${18 + i * 24} 0)"><path d="M2 40 L9 24 L16 40Z" fill="${c}"/><rect x="2" y="40" width="14" height="60" rx="2" fill="${c}"/><rect x="2" y="52" width="14" height="36" fill="#fff" opacity=".85"/><rect x="5" y="60" width="8" height="20" rx="2" fill="${c}"/></g>`).join(""),
  },
  pastel: {
    name: t("soft pastel", "փափուկ պաստել", "мягкая пастель"),
    svg: ["#f48fb1", "#ffd59a", "#a8dca0", "#8fb8ef", "#c9a6dd"].map((c, i) => `<rect x="${12 + i * 20}" y="${40 + (i % 2) * 10}" width="14" height="48" rx="6" fill="${c}"/>`).join("") + `<path d="M10 100 C40 92 80 108 110 98" stroke="#f48fb1" stroke-width="8" stroke-linecap="round" fill="none" opacity=".6"/>`,
  },
  ink: {
    name: t("ink and pen", "տուշ և գրիչ", "тушь и перо"),
    svg: `<path d="M24 60 H64 L68 72 V100 H20 V72Z" fill="#1d1d24"/><rect x="32" y="50" width="24" height="12" rx="2" fill="#3a3a46"/><rect x="26" y="76" width="36" height="16" rx="3" fill="#fff" opacity=".9"/><g transform="rotate(30 90 60)"><rect x="86" y="10" width="8" height="64" rx="4" fill="#7a4a24"/><path d="M84 74 H96 L90 98Z" fill="#c7ccd6"/><line x1="90" y1="80" x2="90" y2="96" stroke="#555" stroke-width="1.5"/></g>`,
  },
  felt: {
    name: t("felt-tip pen", "ֆլոմաստեր", "фломастер"),
    svg: `<g transform="rotate(-35 60 60)"><rect x="12" y="50" width="64" height="20" rx="6" fill="#2f9e44"/><rect x="12" y="50" width="22" height="20" rx="6" fill="#1d5a2a"/><path d="M76 54 L94 56 L94 64 L76 66Z" fill="#e8e8e8"/><path d="M94 57 L104 60 L94 63Z" fill="#2f9e44"/></g>`,
  },
  scissors: {
    name: t("scissors", "մկրատ", "ножницы"),
    svg: `<circle cx="34" cy="84" r="14" fill="none" stroke="#e0262f" stroke-width="7"/><circle cx="72" cy="94" r="14" fill="none" stroke="#e0262f" stroke-width="7"/><path d="M42 72 L104 16 L108 22 L52 80Z" fill="#b8bec9"/><path d="M62 84 L102 22 L96 18 L56 80Z" fill="#d6dbe4"/><circle cx="56" cy="74" r="3" fill="#555"/>`,
  },
  glue: {
    name: t("glue stick", "սոսինձ-մատիտ", "клей-карандаш"),
    svg: `<rect x="42" y="40" width="36" height="64" rx="6" fill="#ffd21f"/><rect x="42" y="72" width="36" height="20" fill="#fff"/><rect x="44" y="28" width="32" height="14" rx="4" fill="#e0262f"/><rect x="48" y="16" width="24" height="14" rx="4" fill="#f4f1ea"/>`,
  },
  plasticine: {
    name: t("plasticine", "պլաստիլին", "пластилин"),
    svg: `${["#e0262f", "#ffd21f", "#2f9e44", "#1f5fbf", "#ff8a1f"].map((c, i) => `<rect x="${20 + i * 17}" y="40" width="14" height="50" rx="3" fill="${c}"/>`).join("")}<circle cx="96" cy="96" r="12" fill="#ff8a1f"/><path d="M14 100 C24 90 40 92 48 100 C40 106 22 106 14 100Z" fill="#2f9e44"/>`,
  },
  palette: {
    name: t("palette", "գունապնակ", "палитра"),
    svg: `<path d="M60 18 C28 18 10 40 12 64 C14 92 40 106 66 102 C80 100 80 90 74 84 C68 78 72 70 82 70 C98 70 110 62 108 46 C106 28 86 18 60 18Z" fill="#e9c891"/><circle cx="38" cy="44" r="8" fill="#e0262f"/><circle cx="60" cy="34" r="8" fill="#ffd21f"/><circle cx="84" cy="40" r="8" fill="#1f5fbf"/><circle cx="30" cy="68" r="8" fill="#2f9e44"/><circle cx="46" cy="88" r="8" fill="#fff"/><ellipse cx="62" cy="70" rx="7" ry="6" fill="#c9a874"/>`,
  },
  easel: {
    name: t("easel", "նկարակալ", "мольберт"),
    svg: `<path d="M60 10 L30 112 M60 10 L90 112 M60 10 L60 112" stroke="#8b5a2b" stroke-width="5" stroke-linecap="round"/><rect x="26" y="22" width="68" height="54" rx="2" fill="#fff" stroke="#8b5a2b" stroke-width="4"/><path d="M32 66 L48 46 L60 58 L72 40 L88 66Z" fill="#7ccf6a"/><circle cx="78" cy="34" r="6" fill="#ffd21f"/><rect x="22" y="76" width="76" height="6" fill="#8b5a2b"/>`,
  },
  shapes: {
    name: t("basic shapes", "հիմնական ձևեր", "основные формы"),
    svg: `<circle cx="30" cy="34" r="20" fill="#e0262f"/><rect x="66" y="14" width="40" height="40" rx="3" fill="#1f5fbf"/><path d="M30 64 L52 104 H8Z" fill="#ffd21f"/><ellipse cx="88" cy="84" rx="24" ry="16" fill="#2f9e44"/>`,
  },
  // ---- nature ----
  "leaf-oak": {
    name: t("oak leaf", "կաղնու տերև", "лист дуба"),
    svg: `<path d="M60 108 V20" stroke="#6b4226" stroke-width="3"/><path d="M60 16 C70 20 72 30 66 34 C78 32 84 40 76 48 C88 48 90 58 80 64 C92 66 90 78 78 80 C84 90 74 98 62 96 L60 104 L58 96 C46 98 36 90 42 80 C30 78 28 66 40 64 C30 58 32 48 44 48 C36 40 42 32 54 34 C48 30 50 20 60 16Z" fill="#c8862a"/><path d="M60 34 L72 30 M60 50 L78 46 M60 66 L80 64 M60 34 L48 30 M60 50 L42 46 M60 66 L40 64" stroke="#8a5a1a" stroke-width="2"/>`,
  },
  "leaf-maple": {
    name: t("maple leaf", "թխկու տերև", "кленовый лист"),
    svg: `<path d="M60 112 V70" stroke="#8a1a1f" stroke-width="3"/><path d="M60 12 L68 36 L84 26 L80 48 L104 44 L92 62 L104 70 L78 74 L80 86 L60 76 L40 86 L42 74 L16 70 L28 62 L16 44 L40 48 L36 26 L52 36Z" fill="#e0442f"/><path d="M60 76 V20 M60 60 L90 46 M60 60 L30 46 M60 68 L84 72 M60 68 L36 72" stroke="#a52a1a" stroke-width="2"/>`,
  },
  "leaf-birch": {
    name: t("birch leaf", "կեչու տերև", "берёзовый лист"),
    svg: `<path d="M60 112 V84" stroke="#6b8a2a" stroke-width="3"/><path d="M60 14 C82 34 92 54 88 70 C84 82 72 86 60 86 C48 86 36 82 32 70 C28 54 38 34 60 14Z" fill="#ffd21f"/><path d="M60 20 V86 M60 40 L74 34 M60 52 L80 46 M60 64 L82 60 M60 40 L46 34 M60 52 L40 46 M60 64 L38 60" stroke="#c9a40f" stroke-width="2"/>`,
  },
  "leaf-plane": {
    name: t("plane-tree leaf (Armenian sosi)", "սոսու տերև", "лист платана (сосы)"),
    svg: `<path d="M60 112 V80" stroke="#4f6d3a" stroke-width="3"/><path d="M60 14 L70 40 L96 28 L86 56 L108 64 L80 72 L84 88 L60 80 L36 88 L40 72 L12 64 L34 56 L24 28 L50 40Z" fill="#6aa84f"/><path d="M60 80 V22 M60 64 L92 34 M60 64 L28 34 M60 72 L100 64 M60 72 L20 64" stroke="#3f6b2a" stroke-width="2"/>`,
  },
  shell: {
    name: t("shell", "խեցի", "ракушка"),
    svg: `<path d="M60 104 C30 104 14 80 20 56 C26 30 50 16 60 16 C70 16 94 30 100 56 C106 80 90 104 60 104Z" fill="#f6c9a8"/>${[-36, -24, -12, 0, 12, 24, 36].map((d) => `<path d="M60 102 L${60 + d * 1.1} 20" stroke="#d98b66" stroke-width="2.5" fill="none"/>`).join("")}<path d="M44 104 H76 L70 112 H50Z" fill="#e8a580"/>`,
  },
  cone: {
    name: t("pine cone", "սոճու կոն", "шишка"),
    svg: `<path d="M60 10 C84 24 92 56 84 84 C78 102 68 110 60 110 C52 110 42 102 36 84 C28 56 36 24 60 10Z" fill="#8b5a2b"/>${[24, 38, 52, 66, 80, 94].map((y, i) => `<path d="M${38 + (i === 0 ? 10 : 0)} ${y} Q60 ${y + 12} ${82 - (i === 0 ? 10 : 0)} ${y}" stroke="#5a3a1a" stroke-width="3" fill="none"/>`).join("")}<path d="M60 10 V-0" stroke="#5a3a1a" stroke-width="3"/>`,
  },
  pebbles: {
    name: t("pebbles", "խճաքարեր", "камешки"),
    svg: `<ellipse cx="40" cy="80" rx="28" ry="18" fill="#a9a29a"/><ellipse cx="80" cy="86" rx="22" ry="14" fill="#7d7a78"/><ellipse cx="66" cy="54" rx="20" ry="14" fill="#d9c7b0"/><path d="M28 74 C40 68 52 70 60 76" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/><path d="M58 50 C64 46 72 46 78 50" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>`,
  },
  snowflake: {
    name: t("snowflake: six rays", "ձյան փաթիլ․ վեց ճառագայթ", "снежинка: шесть лучей"),
    svg: `<g stroke="#4f8fd8" stroke-width="4" stroke-linecap="round" fill="none">${[0, 60, 120, 180, 240, 300].map((a) => `<g transform="rotate(${a} 60 60)"><path d="M60 60 V14"/><path d="M60 34 L48 24 M60 34 L72 24 M60 48 L52 42 M60 48 L68 42"/></g>`).join("")}</g><circle cx="60" cy="60" r="6" fill="#4f8fd8"/>`,
  },
  web: {
    name: t("spider web", "սարդոստայն", "паутина"),
    svg: `<g stroke="#5a6478" stroke-width="1.6" fill="none">${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => `<path d="M60 60 L${60 + 54 * Math.cos((a * Math.PI) / 180)} ${60 + 54 * Math.sin((a * Math.PI) / 180)}"/>`).join("")}${[12, 22, 32, 42, 52].map((r) => `<polygon points="${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => `${(60 + r * Math.cos((a * Math.PI) / 180)).toFixed(1)},${(60 + r * Math.sin((a * Math.PI) / 180)).toFixed(1)}`).join(" ")}"/>`).join("")}</g><circle cx="78" cy="44" r="5" fill="#1d1d24"/>`,
  },
  butterfly: {
    name: t("butterfly: mirror symmetry", "թիթեռ․ հայելային համաչափություն", "бабочка: зеркальная симметрия"),
    svg: `<path d="M58 56 C40 20 10 22 14 46 C16 62 34 66 56 62Z" fill="#ff8a1f"/><path d="M62 56 C80 20 110 22 106 46 C104 62 86 66 64 62Z" fill="#ff8a1f"/><path d="M56 64 C34 66 22 84 32 96 C42 104 54 88 58 70Z" fill="#7d2e8f"/><path d="M64 64 C86 66 98 84 88 96 C78 104 66 88 62 70Z" fill="#7d2e8f"/><circle cx="30" cy="42" r="7" fill="#ffd21f"/><circle cx="90" cy="42" r="7" fill="#ffd21f"/><circle cx="40" cy="86" r="5" fill="#fff"/><circle cx="80" cy="86" r="5" fill="#fff"/><rect x="57" y="40" width="6" height="56" rx="3" fill="#1d1d24"/><path d="M59 42 C56 32 50 26 46 24 M61 42 C64 32 70 26 74 24" stroke="#1d1d24" stroke-width="2" fill="none"/><path d="M60 14 V108" stroke="#e0262f" stroke-width="1.5" stroke-dasharray="4 4"/>`,
  },
  feather: {
    name: t("feather", "փետուր", "перо"),
    svg: `<path d="M24 104 C40 70 60 30 98 14 C100 40 82 82 34 100Z" fill="#8fb8ef"/><path d="M24 104 L96 18" stroke="#2c3e70" stroke-width="2.5"/>${[30, 44, 58, 72].map((x, i) => `<path d="M${x} ${96 - i * 16} l12 6 M${x + 2} ${92 - i * 16} l-8 -10" stroke="#5a7fb8" stroke-width="1.5"/>`).join("")}`,
  },
  apple: {
    name: t("apple", "խնձոր", "яблоко"),
    svg: `<path d="M60 34 C44 22 18 30 20 60 C22 88 40 106 52 104 C56 103 58 100 60 100 C62 100 64 103 68 104 C80 106 98 88 100 60 C102 30 76 22 60 34Z" fill="#e0262f"/><path d="M60 34 C58 24 60 16 66 10" stroke="#6b4226" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M64 26 C72 14 88 14 92 20 C84 28 72 30 64 26Z" fill="#2f9e44"/><ellipse cx="40" cy="54" rx="7" ry="12" fill="#fff" opacity=".45"/>`,
  },
  pomegranate: {
    name: t("pomegranate", "նուռ", "гранат"),
    svg: `<circle cx="60" cy="66" r="40" fill="#c8202a"/><path d="M48 28 L52 16 L58 24 L62 14 L66 24 L72 16 L74 30Z" fill="#a0161e"/><path d="M42 50 C34 62 34 76 40 86" stroke="#fff" stroke-width="4" fill="none" opacity=".35" stroke-linecap="round"/>`,
  },
  grapes: {
    name: t("grapes", "խաղող", "виноград"),
    svg: `${[[48, 40], [64, 40], [80, 40], [40, 54], [56, 54], [72, 54], [88, 54], [48, 68], [64, 68], [80, 68], [56, 82], [72, 82], [64, 96]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="#6a2c91"/><circle cx="${x - 3}" cy="${y - 3}" r="2.5" fill="#fff" opacity=".5"/>`).join("")}<path d="M64 30 C64 20 70 14 78 10" stroke="#6b4226" stroke-width="4" fill="none"/><path d="M70 22 C80 8 100 12 104 22 C94 30 80 30 70 22Z" fill="#3f8f4a"/>`,
  },
  apricot: {
    name: t("apricot", "ծիրան", "абрикос"),
    svg: `<circle cx="60" cy="66" r="38" fill="#f6a23a"/><path d="M60 30 C54 50 54 84 60 104" stroke="#e08a24" stroke-width="3" fill="none"/><ellipse cx="78" cy="54" rx="12" ry="18" fill="#e8662f" opacity=".5"/><path d="M60 30 C66 16 82 14 90 20 C82 28 70 30 60 30Z" fill="#2f9e44"/>`,
  },
};
