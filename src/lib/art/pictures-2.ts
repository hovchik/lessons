import type { Pic } from "./pictures-1";
import type { Tr } from "./spec";

const t = (en: string, hy: string, ru: string): Tr => ({ en, hy, ru });
const rot = (n: number, body: (a: number) => string) => Array.from({ length: n }, (_, i) => body((360 / n) * i)).join("");

/** Ornament motifs, folk crafts, costume, theatre and heraldry. */
export const PICS_2: Record<string, Pic> = {
  arevakhach: {
    name: t("eternity sign (arevakhach)", "հավերժության նշան (արևախաչ)", "знак вечности (аревахач)"),
    svg: `<circle cx="60" cy="60" r="54" fill="#fdf1d6"/>${rot(8, (a) => `<path transform="rotate(${a} 60 60)" d="M60 60 C60 42 72 30 86 30 C80 38 78 46 80 54 C72 50 64 52 60 60Z" fill="#c8202a"/>`)}<circle cx="60" cy="60" r="7" fill="#e8b83a"/>`,
  },
  "tree-of-life": {
    name: t("tree of life", "կենաց ծառ", "древо жизни"),
    svg: `<path d="M60 108 V30" stroke="#6b4226" stroke-width="5"/><path d="M60 92 C46 86 36 76 32 64 M60 92 C74 86 84 76 88 64 M60 70 C48 64 42 54 40 44 M60 70 C72 64 78 54 80 44 M60 50 C54 44 52 36 52 28 M60 50 C66 44 68 36 68 28" stroke="#3f8f4a" stroke-width="4" fill="none"/>${[[32, 62], [88, 62], [40, 42], [80, 42], [52, 26], [68, 26]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#c8202a"/>`).join("")}<circle cx="60" cy="20" r="9" fill="#e8b83a"/><path d="M18 100 C18 90 26 86 32 90 L38 84 L36 96 C32 102 22 104 18 100Z" fill="#1f5fa8"/><path d="M102 100 C102 90 94 86 88 90 L82 84 L84 96 C88 102 98 104 102 100Z" fill="#1f5fa8"/><path d="M30 108 H90" stroke="#6b4226" stroke-width="4"/>`,
  },
  "sun-sign": {
    name: t("sun sign", "արևի նշան", "солярный знак"),
    svg: `${rot(12, (a) => `<path transform="rotate(${a} 60 60)" d="M60 4 L66 26 L54 26Z" fill="#ff8a1f"/>`)}<circle cx="60" cy="60" r="32" fill="#ffd21f"/><circle cx="60" cy="60" r="22" fill="none" stroke="#e0442f" stroke-width="4"/>${rot(6, (a) => `<path transform="rotate(${a} 60 60)" d="M60 60 L60 40" stroke="#e0442f" stroke-width="3"/>`)}`,
  },
  "eight-star": {
    name: t("eight-pointed star", "ութաթև աստղ", "восьмиконечная звезда"),
    svg: `<rect x="26" y="26" width="68" height="68" fill="#1f5fa8"/><rect x="26" y="26" width="68" height="68" fill="#1f5fa8" transform="rotate(45 60 60)"/><circle cx="60" cy="60" r="20" fill="#e8b83a"/><rect x="50" y="50" width="20" height="20" fill="#c8202a" transform="rotate(45 60 60)"/>`,
  },
  "water-sign": {
    name: t("water sign: waves", "ջրի նշան․ ալիքներ", "знак воды: волны"),
    svg: `${[34, 60, 86].map((y) => `<path d="M8 ${y} Q22 ${y - 14} 36 ${y} T64 ${y} T92 ${y} T120 ${y}" stroke="#1f5fbf" stroke-width="6" fill="none" stroke-linecap="round"/>`).join("")}`,
  },
  "earth-sign": {
    name: t("earth sign: sown field", "հողի նշան․ ցանքած դաշտ", "знак земли: засеянное поле"),
    svg: `<path d="M60 10 L110 60 L60 110 L10 60Z" fill="#8b5a2b"/><path d="M60 26 L94 60 L60 94 L26 60Z" fill="#e3c27a"/><path d="M43 43 L77 77 M77 43 L43 77" stroke="#8b5a2b" stroke-width="3"/>${[[60, 40], [40, 60], [80, 60], [60, 80]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="#3f8f4a"/>`).join("")}`,
  },
  "ram-horns": {
    name: t("ram's horns", "խոյի եղջյուրներ", "бараньи рога"),
    svg: `<path d="M60 96 V58 C60 34 36 24 24 36 C14 46 22 62 34 60 C42 58 42 48 36 46" stroke="#9e1b24" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M60 58 C60 34 84 24 96 36 C106 46 98 62 86 60 C78 58 78 48 84 46" stroke="#9e1b24" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M44 104 H76" stroke="#9e1b24" stroke-width="7" stroke-linecap="round"/>`,
  },
  "bird-motif": {
    name: t("bird motif", "թռչնի մոտիվ", "мотив птицы"),
    svg: `<path d="M24 76 C24 52 44 40 64 44 C70 32 82 28 90 32 L102 30 L92 38 C94 54 84 70 64 76 C52 80 38 82 24 76Z" fill="#1f5fa8"/><path d="M40 60 C52 50 66 50 76 58 C66 66 52 68 40 60Z" fill="#e8b83a"/><circle cx="88" cy="38" r="2.5" fill="#fff"/><path d="M24 76 L10 66 M24 76 L8 80 M24 76 L14 92" stroke="#1f5fa8" stroke-width="5" stroke-linecap="round"/><path d="M58 76 V92 M70 74 V92" stroke="#c8202a" stroke-width="3"/>`,
  },
  vishap: {
    name: t("dragon (vishap) motif", "վիշապի մոտիվ", "мотив дракона (вишап)"),
    svg: `<path d="M20 96 C20 70 44 70 60 60 C76 50 100 50 100 24" stroke="#1c2f5e" stroke-width="12" fill="none" stroke-linecap="round"/><path d="M20 96 C20 70 44 70 60 60 C76 50 100 50 100 24" stroke="#e3c27a" stroke-width="3" fill="none" stroke-dasharray="6 6"/><path d="M92 24 L100 10 L108 24Z" fill="#9e1b24"/><path d="M12 96 L20 110 L28 96Z" fill="#9e1b24"/>`,
  },
  grapevine: {
    name: t("grapevine ornament", "խաղողի որթի զարդանախշ", "орнамент виноградной лозы"),
    svg: `<path d="M0 60 C20 30 40 30 60 60 S100 90 120 60" stroke="#6b4226" stroke-width="4" fill="none"/>${[[30, 48], [90, 72]].map(([x, y], i) => `<g>${[[0, 0], [8, 0], [4, 7], [-4, 7], [12, 7], [0, 14], [8, 14], [4, 21]].map(([dx, dy]) => `<circle cx="${x + dx - 4}" cy="${y + (i ? -dy - 6 : dy + 6)}" r="4.5" fill="#6a2c91"/>`).join("")}</g>`).join("")}<path d="M54 52 C44 40 52 28 64 34 C72 38 70 50 54 52Z" fill="#3f8f4a"/><path d="M66 68 C76 80 68 92 56 86 C48 82 50 70 66 68Z" fill="#3f8f4a"/>`,
  },
  horse: {
    name: t("horse motif", "ձիու մոտիվ", "мотив коня"),
    svg: `<path d="M26 92 L30 66 C30 56 40 52 52 54 L74 54 C80 44 82 32 88 24 L96 22 L94 30 L102 40 L96 44 L90 40 C88 52 86 62 82 68 L84 92 M44 70 L40 92 M70 70 L72 92" stroke="#9e1b24" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 66 C22 66 16 72 14 80" stroke="#9e1b24" stroke-width="5" fill="none" stroke-linecap="round"/>`,
  },
  stork: {
    name: t("stork", "արագիլ", "аист"),
    svg: `<path d="M40 50 C40 36 54 30 64 36 L92 58 C80 66 62 70 50 64 C44 60 40 56 40 50Z" fill="#fff" stroke="#1d1d24" stroke-width="2"/><path d="M72 46 L92 58 L76 62Z" fill="#1d1d24"/><path d="M44 46 C40 30 44 18 52 14" stroke="#1d1d24" stroke-width="5" fill="none"/><circle cx="54" cy="14" r="5" fill="#fff" stroke="#1d1d24" stroke-width="2"/><path d="M58 14 L80 18" stroke="#e0442f" stroke-width="4"/><path d="M56 66 L52 104 M62 66 L66 104" stroke="#e0442f" stroke-width="3"/>`,
  },
  // ---- crafts ----
  khachkar: {
    name: t("khachkar: a cross-stone", "խաչքար", "хачкар: крест-камень"),
    svg: `<rect x="20" y="4" width="80" height="112" rx="4" fill="#c9a28a"/><rect x="26" y="10" width="68" height="100" fill="none" stroke="#8a6650" stroke-width="3" stroke-dasharray="6 3"/><path d="M60 18 V74 M36 38 H84" stroke="#6e4f3e" stroke-width="9" stroke-linecap="round"/>${[[60, 16, 0], [34, 38, -90], [86, 38, 90]].map(([x, y, r]) => `<path transform="rotate(${r} ${x} ${y})" d="M${x - 8} ${y + 4} Q${x - 9} ${y - 8} ${x} ${y - 6} Q${x + 9} ${y - 8} ${x + 8} ${y + 4}Z" fill="#6e4f3e"/>`).join("")}<path d="M60 74 C48 76 42 82 40 90 M60 74 C72 76 78 82 80 90" stroke="#6e4f3e" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="60" cy="94" r="11" fill="none" stroke="#6e4f3e" stroke-width="3"/>${rot(8, (a) => `<path transform="rotate(${a} 60 94)" d="M60 94 C60 88 63 85 67 85" stroke="#6e4f3e" stroke-width="2" fill="none"/>`)}`,
  },
  carpet: {
    name: t("Armenian carpet", "հայկական գորգ", "армянский ковёр"),
    svg: `<rect x="8" y="16" width="104" height="88" fill="#9e1b24"/><rect x="14" y="22" width="92" height="76" fill="#1c2f5e"/><rect x="20" y="28" width="80" height="64" fill="#9e1b24"/>${Array.from({ length: 11 }, (_, i) => `<path d="M${18 + i * 8.4} 19 l4 3 l-4 3 l-4 -3Z M${18 + i * 8.4} 95 l4 3 l-4 3 l-4 -3Z" fill="#e3c27a"/>`).join("")}<path d="M60 34 L84 60 L60 86 L36 60Z" fill="#1c2f5e"/><path d="M60 42 L76 60 L60 78 L44 60Z" fill="#e3c27a"/><path d="M60 50 L68 60 L60 70 L52 60Z" fill="#9e1b24"/>${[[30, 38], [90, 38], [30, 82], [90, 82]].map(([x, y]) => `<path d="M${x} ${y - 6} L${x + 6} ${y} L${x} ${y + 6} L${x - 6} ${y}Z" fill="#f1e6cf"/>`).join("")}<path d="M8 16 v-8 M16 16 v-8 M24 16 v-8 M32 16 v-8 M40 16 v-8 M48 16 v-8 M56 16 v-8 M64 16 v-8 M72 16 v-8 M80 16 v-8 M88 16 v-8 M96 16 v-8 M104 16 v-8 M112 16 v-8" stroke="#f1e6cf" stroke-width="2"/>`,
  },
  karas: {
    name: t("clay jar (karas)", "կարաս", "глиняный кувшин (карас)"),
    svg: `<path d="M44 14 H76 L74 24 C96 34 104 58 96 82 C90 100 76 108 60 108 C44 108 30 100 24 82 C16 58 24 34 46 24Z" fill="#c8642f"/><path d="M28 56 H92" stroke="#7a3a1a" stroke-width="3"/><path d="M26 66 Q36 58 46 66 T66 66 T86 66 T96 66" stroke="#f1e6cf" stroke-width="3" fill="none"/><path d="M30 78 H90" stroke="#7a3a1a" stroke-width="3"/><ellipse cx="60" cy="14" rx="16" ry="4" fill="#7a3a1a"/>`,
  },
  "copper-jug": {
    name: t("copper jug", "պղնձե սափոր", "медный кувшин"),
    svg: `<path d="M50 20 H70 L68 36 C88 46 92 72 82 92 C78 100 70 104 60 104 C50 104 42 100 38 92 C28 72 32 46 52 36Z" fill="#c8733a"/><path d="M50 20 L38 12" stroke="#c8733a" stroke-width="5" stroke-linecap="round"/><path d="M80 50 C100 50 102 80 84 86" stroke="#a65a28" stroke-width="5" fill="none"/><path d="M44 52 C40 64 40 80 46 92" stroke="#f6c08a" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M40 70 H80" stroke="#8a4a1f" stroke-width="2" stroke-dasharray="3 3"/><ellipse cx="60" cy="104" rx="18" ry="4" fill="#8a4a1f"/>`,
  },
  matryoshka: {
    name: t("matryoshka", "մատրյոշկա", "матрёшка"),
    svg: `<path d="M60 10 C76 10 82 22 80 36 C94 48 96 70 92 90 C90 102 80 110 60 110 C40 110 30 102 28 90 C24 70 26 48 40 36 C38 22 44 10 60 10Z" fill="#d22a1e"/><ellipse cx="60" cy="34" rx="14" ry="13" fill="#fbe3d0"/><path d="M46 30 C50 20 70 20 74 30" fill="#d22a1e"/><path d="M47 28 C52 22 68 22 73 28 C68 26 52 26 47 28Z" fill="#6b3a1a"/><circle cx="55" cy="34" r="1.8" fill="#1d1d24"/><circle cx="65" cy="34" r="1.8" fill="#1d1d24"/><circle cx="52" cy="39" r="3" fill="#f48fb1"/><circle cx="68" cy="39" r="3" fill="#f48fb1"/><path d="M57 42 Q60 44 63 42" stroke="#c8202a" stroke-width="1.5" fill="none"/><ellipse cx="60" cy="80" rx="22" ry="24" fill="#fff4d6"/><circle cx="60" cy="78" r="9" fill="#e0262f"/>${rot(6, (a) => `<ellipse transform="rotate(${a} 60 78)" cx="60" cy="64" rx="4" ry="6" fill="#ffd21f"/>`)}<path d="M50 94 C54 88 58 88 60 94 M70 94 C66 88 62 88 60 94" stroke="#2f9e44" stroke-width="3" fill="none"/>`,
  },
  dymkovo: {
    name: t("Dymkovo lady", "Դիմկովոյի տիկին", "дымковская барыня"),
    svg: `<path d="M60 44 L94 108 H26Z" fill="#fff" stroke="#c9d1e0"/>${[[46, 80], [74, 80], [60, 96], [40, 100], [80, 100], [60, 66]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="none" stroke="#e0262f" stroke-width="3"/><circle cx="${x}" cy="${y}" r="2" fill="#1f5fbf"/>`).join("")}<path d="M38 86 H82" stroke="#ff8a1f" stroke-width="3" stroke-dasharray="2 4"/><rect x="50" y="34" width="20" height="16" rx="6" fill="#1f5fbf"/><circle cx="60" cy="26" r="10" fill="#fbe3d0"/><path d="M46 20 C48 6 72 6 74 20 C68 14 52 14 46 20Z" fill="#ff8a1f"/><circle cx="56" cy="11" r="2" fill="#e0262f"/><circle cx="64" cy="11" r="2" fill="#2f9e44"/><circle cx="57" cy="29" r="2" fill="#e0262f"/><circle cx="63" cy="29" r="2" fill="#e0262f"/>`,
  },
  filimonovo: {
    name: t("Filimonovo whistle", "Ֆիլիմոնովոյի սուլիչ", "филимоновская свистулька"),
    svg: `<path d="M30 100 V70 C30 64 36 62 42 62 H76 C78 50 80 34 84 20 L92 18 L90 30 C88 44 86 60 86 70 V100" stroke="#ffd21f" stroke-width="12" fill="none" stroke-linejoin="round"/><path d="M30 86 H44 M30 96 H44 M72 86 H86 M72 96 H86 M80 30 H92 M80 42 H90" stroke="#e0262f" stroke-width="3"/><path d="M42 68 H76" stroke="#2f9e44" stroke-width="3"/><path d="M48 62 V76 M60 62 V76 M70 62 V76" stroke="#e0262f" stroke-width="3"/>`,
  },
  "gzhel-plate": {
    name: t("Gzhel plate", "Գժելի ափսե", "гжельская тарелка"),
    svg: `<circle cx="60" cy="60" r="54" fill="#fff" stroke="#c9d6ee" stroke-width="2"/><circle cx="60" cy="60" r="46" fill="none" stroke="#2f5fc4" stroke-width="3"/>${rot(16, (a) => `<path transform="rotate(${a} 60 60)" d="M60 8 Q64 11 60 14 Q56 11 60 8Z" fill="#2f5fc4"/>`)}${rot(7, (a) => `<path transform="rotate(${a} 60 58)" d="M60 58 C50 46 52 34 60 30 C68 34 70 46 60 58Z" fill="#2f5fc4"/><path transform="rotate(${a} 60 58)" d="M60 52 C56 46 57 38 60 34" stroke="#dbe8fb" stroke-width="2" fill="none"/>`)}<circle cx="60" cy="58" r="7" fill="#163a8a"/><path d="M44 86 C36 92 30 92 24 88 M76 86 C84 92 90 92 96 88" stroke="#2f5fc4" stroke-width="3" fill="none"/><ellipse cx="30" cy="82" rx="7" ry="4" fill="#2f5fc4" transform="rotate(-20 30 82)"/><ellipse cx="90" cy="82" rx="7" ry="4" fill="#2f5fc4" transform="rotate(20 90 82)"/>`,
  },
  "khokhloma-bowl": {
    name: t("Khokhloma bowl", "Խոխլոմայի աման", "хохломская чаша"),
    svg: `<path d="M10 46 H110 C108 80 90 100 60 100 C30 100 12 80 10 46Z" fill="#1b1b1b"/><ellipse cx="60" cy="46" rx="50" ry="10" fill="#e8b83a"/><ellipse cx="60" cy="46" rx="44" ry="7" fill="#d22a1e"/><rect x="44" y="98" width="32" height="10" rx="2" fill="#e8b83a"/><path d="M18 64 C34 54 46 82 60 72 S88 58 102 64" stroke="#e8b83a" stroke-width="3" fill="none"/>${[[30, 70], [52, 80], [74, 70], [92, 76]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#d22a1e"/><circle cx="${x - 1.5}" cy="${y - 1.5}" r="1.4" fill="#fff"/>`).join("")}${[[40, 60], [64, 64], [84, 62]].map(([x, y]) => `<path d="M${x} ${y} q6 -8 12 0 q-6 6 -12 0Z" fill="#e8b83a"/>`).join("")}`,
  },
  "zhostovo-tray": {
    name: t("Zhostovo tray", "Ժոստովոյի սկուտեղ", "жостовский поднос"),
    svg: `<ellipse cx="60" cy="60" rx="56" ry="44" fill="#121212"/><ellipse cx="60" cy="60" rx="52" ry="40" fill="none" stroke="#e0b84a" stroke-width="2" stroke-dasharray="4 3"/>${[[48, 58, "#d3313d"], [72, 56, "#f2a7b0"], [60, 74, "#f6e4c4"]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="12" fill="${c}"/><circle cx="${x}" cy="${y}" r="7" fill="none" stroke="#fff" stroke-width="2" opacity=".6"/>`).join("")}${[[30, 50, -30], [90, 48, 30], [36, 76, -60], [86, 78, 60], [60, 40, 0]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="10" ry="4" fill="#3f8f4a" transform="rotate(${r} ${x} ${y})"/>`).join("")}`,
  },
  "gorodets-board": {
    name: t("Gorodets board", "Գորոդեցի տախտակ", "городецкая доска"),
    svg: `<rect x="10" y="20" width="100" height="80" rx="10" fill="#f2c14e"/><rect x="50" y="6" width="20" height="18" rx="6" fill="#f2c14e"/><circle cx="60" cy="14" r="4" fill="#8b5a2b"/>${[[38, 62, "#c8272d"], [82, 62, "#1f4fa3"]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="16" fill="${c}"/>${[0, 1, 2].map((k) => `<path d="M${+x - 12 + k * 2} ${+y - 2 + k * 5} Q${x} ${+y - 12 + k * 5} ${+x + 12 - k * 2} ${+y - 2 + k * 5}" stroke="#fff" stroke-width="2.4" fill="none"/>`).join("")}<circle cx="${x}" cy="${+y + 8}" r="4" fill="#fff"/>`).join("")}${[[60, 50], [60, 76], [22, 84], [98, 84]].map(([x, y]) => `<path d="M${x - 8} ${y} q8 -8 16 0 q-8 6 -16 0Z" fill="#2e7d32"/>`).join("")}`,
  },
  "palekh-box": {
    name: t("Palekh box", "Պալեխի տուփ", "палехская шкатулка"),
    svg: `<path d="M10 40 L22 28 H98 L110 40Z" fill="#1b1b1b"/><rect x="10" y="40" width="100" height="62" fill="#0d0d0d"/><rect x="18" y="34" width="84" height="5" fill="#e8b83a"/><rect x="18" y="48" width="84" height="46" fill="none" stroke="#e8b83a" stroke-width="1.5"/><path d="M30 86 C40 70 52 66 60 70 L78 62 L84 70 L76 74 L74 86" stroke="#f2e8cf" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M42 72 L38 86 M58 72 L56 86" stroke="#f2e8cf" stroke-width="3"/><path d="M64 60 L70 50 L74 60" fill="#c9302c"/><circle cx="90" cy="58" r="5" fill="#e8b83a"/><path d="M22 92 C40 88 80 88 98 92" stroke="#6a994e" stroke-width="3" fill="none"/>`,
  },
  "ceramic-plate": {
    name: t("painted ceramic plate", "նկարազարդ խեցեղեն ափսե", "расписная керамическая тарелка"),
    svg: `<circle cx="60" cy="60" r="54" fill="#f4efe2"/><circle cx="60" cy="60" r="48" fill="none" stroke="#1a8a96" stroke-width="5"/><circle cx="60" cy="60" r="44" fill="none" stroke="#e8b83a" stroke-width="2"/>${rot(6, (a) => `<path transform="rotate(${a} 60 60)" d="M60 60 C52 46 52 32 60 22 C68 32 68 46 60 60Z" fill="#1f5fa8"/><circle transform="rotate(${a + 30} 60 60)" cx="60" cy="30" r="4" fill="#c8202a"/>`)}<circle cx="60" cy="60" r="8" fill="#e8b83a"/>`,
  },
  embroidery: {
    name: t("cross-stitch pattern", "խաչաձև կարի նախշ", "узор вышивки крестиком"),
    svg: `<rect width="120" height="120" fill="#f6f0e2"/>${(() => { const P = ["00000100000", "00001110000", "00011111000", "00110101100", "01111111110", "11010101011", "01111111110", "00110101100", "00011111000", "00001110000", "00000100000"]; let s = ""; P.forEach((row, y) => [...row].forEach((c, x) => { if (c === "1") { const cx = 10 + x * 9, cy = 10 + y * 9; s += `<path d="M${cx} ${cy} l8 8 M${cx + 8} ${cy} l-8 8" stroke="${(x + y) % 4 === 0 ? "#1c2f5e" : "#c8202a"}" stroke-width="2.4" stroke-linecap="round"/>`; } })); return s; })()}`,
  },
  lace: {
    name: t("lace", "ժանյակ", "кружево"),
    svg: `<circle cx="60" cy="60" r="56" fill="#1c2f5e"/>${rot(12, (a) => `<circle transform="rotate(${a} 60 60)" cx="60" cy="14" r="9" fill="none" stroke="#fff" stroke-width="2.5"/>`)}${rot(8, (a) => `<path transform="rotate(${a} 60 60)" d="M60 60 C50 46 52 34 60 28 C68 34 70 46 60 60Z" fill="none" stroke="#fff" stroke-width="2.5"/>`)}<circle cx="60" cy="60" r="44" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="3 4"/><circle cx="60" cy="60" r="6" fill="#fff"/>`,
  },
  jewellery: {
    name: t("silver necklace with a pomegranate", "արծաթե վզնոց նռնով", "серебряное ожерелье с гранатом"),
    svg: `<path d="M16 20 C20 60 40 76 60 78 C80 76 100 60 104 20" stroke="#b8bec9" stroke-width="3" fill="none" stroke-dasharray="1 5" stroke-linecap="round"/><path d="M16 20 C20 60 40 76 60 78 C80 76 100 60 104 20" stroke="#8a919e" stroke-width="1" fill="none"/>${[[30, 56], [90, 56]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#c8202a"/><circle cx="${x}" cy="${y}" r="7" fill="none" stroke="#b8bec9" stroke-width="2"/>`).join("")}<circle cx="60" cy="94" r="15" fill="#b8bec9"/><circle cx="60" cy="94" r="11" fill="#c8202a"/><path d="M52 80 L56 76 L60 80 L64 76 L68 80" stroke="#b8bec9" stroke-width="3" fill="none"/><circle cx="56" cy="90" r="3" fill="#fff" opacity=".5"/>`,
  },
  batik: {
    name: t("batik", "բատիկ", "батик"),
    svg: `<rect width="120" height="120" fill="#1f5fa8"/><circle cx="60" cy="60" r="36" fill="#ff8a1f"/><circle cx="60" cy="60" r="24" fill="#ffd21f"/>${rot(10, (a) => `<path transform="rotate(${a} 60 60)" d="M60 24 L64 8 L56 8Z" fill="#ffd21f"/>`)}<circle cx="60" cy="60" r="36" fill="none" stroke="#f6f0e2" stroke-width="2.5"/><circle cx="60" cy="60" r="24" fill="none" stroke="#f6f0e2" stroke-width="2"/><path d="M0 100 Q15 90 30 100 T60 100 T90 100 T120 100" stroke="#f6f0e2" stroke-width="2.5" fill="none"/><path d="M8 20 l6 6 M20 10 l4 8 M100 14 l6 8 M108 30 l6 4" stroke="#f6f0e2" stroke-width="2"/>`,
  },
  // ---- costume ----
  taraz: {
    name: t("Armenian taraz", "հայկական տարազ", "армянский тараз"),
    svg: `<circle cx="60" cy="20" r="9" fill="#e3b08f"/><path d="M48 16 C50 4 70 4 72 16 L70 20 C66 14 54 14 50 20Z" fill="#9e1b24"/><path d="M50 12 H70" stroke="#e8b83a" stroke-width="3"/><path d="M44 18 C40 40 36 70 32 110 H88 C84 70 80 40 76 18 C72 30 48 30 44 18Z" fill="#f1e6cf" opacity=".9"/><path d="M48 32 H72 L80 110 H40Z" fill="#9e1b24"/><path d="M52 32 H68 V60 H52Z" fill="#1c2f5e"/>${[38, 44, 50, 56].map((y) => `<circle cx="60" cy="${y}" r="1.8" fill="#e8b83a"/>`).join("")}<path d="M40 104 H80" stroke="#e8b83a" stroke-width="4"/><path d="M46 62 H74" stroke="#e8b83a" stroke-width="4"/><path d="M48 32 L30 74 M72 32 L90 74" stroke="#9e1b24" stroke-width="7" stroke-linecap="round"/>`,
  },
  sarafan: {
    name: t("Russian sarafan and kokoshnik", "ռուսական սարաֆան և կոկոշնիկ", "сарафан и кокошник"),
    svg: `<path d="M38 22 C38 2 82 2 82 22 C74 16 46 16 38 22Z" fill="#c8202a"/>${[46, 54, 60, 66, 74].map((x, i) => `<circle cx="${x}" cy="${12 - (i === 2 ? 2 : 0)}" r="2" fill="#e8b83a"/>`).join("")}<circle cx="60" cy="24" r="9" fill="#fbe3d0"/><path d="M44 34 H76 L72 44 H48Z" fill="#fff"/><path d="M48 44 H72 L88 110 H32Z" fill="#c8202a"/><path d="M60 44 V110" stroke="#e8b83a" stroke-width="3"/>${[56, 70, 84, 98].map((y) => `<circle cx="60" cy="${y}" r="2.6" fill="#e8b83a"/>`).join("")}<path d="M34 102 H86" stroke="#e8b83a" stroke-width="5"/><path d="M44 36 L30 78 M76 36 L90 78" stroke="#fff" stroke-width="7" stroke-linecap="round"/><path d="M60 32 C62 50 70 60 66 70" stroke="#c9a06b" stroke-width="4" fill="none"/>`,
  },
  // ---- theatre ----
  masks: {
    name: t("comedy and tragedy masks", "կատակերգության և ողբերգության դիմակներ", "маски комедии и трагедии"),
    svg: `<path d="M8 22 C24 16 44 16 58 22 C60 46 52 66 34 70 C16 66 8 46 8 22Z" fill="#ffd21f"/><path d="M18 36 q6 -6 12 0 M38 36 q6 -6 12 0" stroke="#1d1d24" stroke-width="3" fill="none"/><path d="M20 50 C28 62 40 62 46 50Z" fill="#1d1d24"/><path d="M62 42 C76 36 96 36 112 42 C112 66 104 86 86 90 C68 86 62 66 62 42Z" fill="#8fb8ef"/><path d="M72 58 q6 6 12 0 M90 58 q6 6 12 0" stroke="#1d1d24" stroke-width="3" fill="none"/><path d="M76 80 C84 70 92 70 98 80Z" fill="#1d1d24"/><path d="M74 62 l-2 8 M104 62 l2 8" stroke="#1f5fbf" stroke-width="2"/>`,
  },
  puppets: {
    name: t("glove puppet, marionette, shadow puppet", "ձեռնոցային տիկնիկ, մարիոնետ, ստվերային տիկնիկ", "перчаточная кукла, марионетка, теневая кукла"),
    svg: `<path d="M8 112 V80 C8 70 30 70 30 80 V112Z" fill="#2f9e44"/><circle cx="19" cy="62" r="12" fill="#ffc58f"/><circle cx="15" cy="60" r="1.6" fill="#1d1d24"/><circle cx="23" cy="60" r="1.6" fill="#1d1d24"/><circle cx="19" cy="66" r="2" fill="#e0262f"/><path d="M42 10 H82" stroke="#8b5a2b" stroke-width="4"/><path d="M50 10 V50 M74 10 V50 M62 10 V36" stroke="#999" stroke-width="1"/><circle cx="62" cy="44" r="8" fill="#ffc58f"/><path d="M54 54 H70 L74 82 H50Z" fill="#7d2e8f"/><path d="M54 56 L48 50 M70 56 L76 50 M56 82 V98 M68 82 V98" stroke="#7d2e8f" stroke-width="4"/><path d="M92 44 C92 34 108 34 108 44 L104 50 L112 74 H88 L96 50Z" fill="#1d1d24"/><path d="M100 74 V112" stroke="#8b5a2b" stroke-width="3"/><path d="M96 56 L86 62" stroke="#1d1d24" stroke-width="4"/>`,
  },
  stage: {
    name: t("stage with a set", "բեմ և դեկորացիա", "сцена с декорацией"),
    svg: `<rect x="4" y="4" width="112" height="112" fill="#3a1a2a"/><rect x="16" y="20" width="88" height="72" fill="#9ec9f0"/><path d="M16 74 C36 60 56 66 70 62 C84 58 96 64 104 60 V92 H16Z" fill="#6cc35a"/><path d="M26 92 V60 L36 46 L46 60 V92Z" fill="#8b5a2b"/><circle cx="36" cy="52" r="12" fill="#3f8f4a"/><circle cx="86" cy="34" r="8" fill="#ffd21f"/><path d="M4 4 H116 V16 C96 26 80 16 60 22 C40 16 24 26 4 16Z" fill="#c8202a"/><path d="M4 4 V116 H16 C22 80 12 50 22 20Z M116 4 V116 H104 C98 80 108 50 98 20Z" fill="#c8202a"/><rect x="4" y="92" width="112" height="24" fill="#8b5a2b"/><path d="M4 92 H116" stroke="#e8b83a" stroke-width="3"/>`,
  },
  // ---- heraldry and symbols ----
  shield: {
    name: t("parts of a coat of arms", "զինանշանի մասերը", "части герба"),
    svg: `<path d="M24 20 H96 V62 C96 86 78 102 60 110 C42 102 24 86 24 62Z" fill="#1f4fa3"/><path d="M60 20 V110 C78 102 96 86 96 62 V20Z" fill="#e8b83a"/><path d="M24 52 H96" stroke="#c8102e" stroke-width="12"/><path d="M60 64 L66 76 L80 76 L68 84 L72 98 L60 90 L48 98 L52 84 L40 76 L54 76Z" fill="#e6e6e6" stroke="#111" stroke-width="1"/><path d="M36 12 L44 2 L52 10 L60 0 L68 10 L76 2 L84 12Z" fill="#e8b83a"/><path d="M14 30 C4 60 18 92 40 104 M106 30 C116 60 102 92 80 104" stroke="#2f7d32" stroke-width="5" fill="none"/>`,
  },
  dove: {
    name: t("dove of peace", "խաղաղության աղավնի", "голубь мира"),
    svg: `<path d="M24 66 C30 50 46 44 62 48 C70 30 88 18 106 18 C96 30 90 42 88 54 C86 70 72 82 54 82 C40 82 30 78 24 66Z" fill="#fff" stroke="#8fb8ef" stroke-width="2"/><path d="M62 48 C60 38 52 28 40 22 C44 36 48 46 56 52Z" fill="#e8f2fb" stroke="#8fb8ef" stroke-width="2"/><path d="M24 66 L10 62 L22 72Z" fill="#ffb01f"/><circle cx="34" cy="62" r="2" fill="#1d1d24"/><path d="M54 82 L44 100 M64 80 L62 100" stroke="#8fb8ef" stroke-width="2"/><path d="M18 70 C22 82 30 90 42 92" stroke="#2f9e44" stroke-width="3" fill="none"/>${[[24, 80], [30, 88], [36, 92]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="5" ry="2.5" fill="#2f9e44" transform="rotate(40 ${x} ${y})"/>`).join("")}`,
  },
  ankh: {
    name: t("Egyptian symbols: ankh, eye, scarab", "եգիպտական նշաններ․ անխ, աչք, սկարաբեյ", "египетские символы: анх, глаз, скарабей"),
    svg: `<ellipse cx="22" cy="30" rx="10" ry="14" fill="none" stroke="#e8b83a" stroke-width="6"/><path d="M22 44 V100 M6 52 H38" stroke="#e8b83a" stroke-width="7"/><path d="M48 40 C58 28 76 28 88 40 C76 50 58 50 48 40Z" fill="#fff" stroke="#1f5fa8" stroke-width="3"/><circle cx="68" cy="40" r="6" fill="#1f5fa8"/><path d="M64 48 L60 64 M74 48 C80 56 86 56 90 52" stroke="#1f5fa8" stroke-width="3" fill="none"/><path d="M50 30 C62 22 78 22 90 30" stroke="#1f5fa8" stroke-width="3" fill="none"/><ellipse cx="80" cy="92" rx="14" ry="18" fill="#1a8a96"/><path d="M80 74 V110 M66 92 H94" stroke="#0f5a62" stroke-width="2"/><path d="M66 80 L54 74 M94 80 L106 74 M66 100 L54 106 M94 100 L106 106" stroke="#1a8a96" stroke-width="3"/><circle cx="80" cy="72" r="7" fill="#e8b83a"/>`,
  },
  "egypt-collar": {
    name: t("Egyptian collar (usekh)", "եգիպտական օձիք (ուսեխ)", "египетское ожерелье (усех)"),
    svg: `${["#1f5fa8", "#e8b83a", "#c0392b", "#1a8a96", "#e8b83a"].map((c, i) => `<path d="M${14 + i * 7} 24 A${46 - i * 7} ${46 - i * 7} 0 0 0 ${106 - i * 7} 24" fill="none" stroke="${c}" stroke-width="7" ${i % 2 ? 'stroke-dasharray="4 3"' : ""}/>`).join("")}${Array.from({ length: 13 }, (_, i) => { const a = Math.PI * (i / 12); return `<ellipse cx="${(60 - 50 * Math.cos(a)).toFixed(1)}" cy="${(24 + 50 * Math.sin(a)).toFixed(1)}" rx="3" ry="6" fill="#1f5fa8" transform="rotate(${(90 - (a * 180) / Math.PI).toFixed(0)} ${(60 - 50 * Math.cos(a)).toFixed(1)} ${(24 + 50 * Math.sin(a)).toFixed(1)})"/>`; }).join("")}<circle cx="60" cy="24" r="6" fill="#e8b83a"/>`,
  },
  lotus: {
    name: t("lotus", "լոտոս", "лотос"),
    svg: `<path d="M60 96 C44 80 42 50 60 24 C78 50 76 80 60 96Z" fill="#8fb8ef"/><path d="M60 96 C40 92 26 74 24 50 C42 56 54 74 60 96Z" fill="#1f5fa8"/><path d="M60 96 C80 92 94 74 96 50 C78 56 66 74 60 96Z" fill="#1f5fa8"/><path d="M20 102 H100" stroke="#1a8a96" stroke-width="5" stroke-linecap="round"/>`,
  },
  "letter-initial": {
    name: t("decorated initial letter", "զարդագիր", "буквица"),
    svg: `<rect x="10" y="10" width="100" height="100" rx="6" fill="#1c2f5e"/><rect x="16" y="16" width="88" height="88" rx="4" fill="none" stroke="#e8b83a" stroke-width="2"/><text x="60" y="88" text-anchor="middle" font-size="76" font-family="Georgia, 'Noto Serif Armenian', serif" font-weight="700" fill="#e8b83a">Ա</text><path d="M18 30 C30 22 30 40 42 32 M78 98 C90 90 90 108 102 100" stroke="#c8202a" stroke-width="3" fill="none"/><circle cx="96" cy="26" r="6" fill="#c8202a"/><path d="M90 26 C80 20 80 34 70 28" stroke="#3f8f4a" stroke-width="3" fill="none"/>`,
  },
  "stained-glass": {
    name: t("stained-glass window", "վիտրաժ", "витраж"),
    svg: `<path d="M20 112 V50 C20 20 40 8 60 8 C80 8 100 20 100 50 V112Z" fill="#1d1d24"/><path d="M26 108 V52 C26 26 42 14 57 14 V108Z" fill="#1f5fbf"/><path d="M63 14 C78 14 94 26 94 52 V108 H63Z" fill="#e0262f"/><circle cx="60" cy="50" r="20" fill="#ffd21f" stroke="#1d1d24" stroke-width="4"/><path d="M26 76 H94 M40 76 V108 M80 76 V108" stroke="#1d1d24" stroke-width="4"/><rect x="44" y="80" width="32" height="28" fill="#2f9e44"/><path d="M60 30 V70 M40 50 H80" stroke="#1d1d24" stroke-width="3"/>`,
  },
  "sakura": {
    name: t("sakura branch", "սակուրայի ճյուղ", "ветка сакуры"),
    svg: `<path d="M6 100 C30 90 50 70 70 60 C86 52 100 40 112 24 M50 74 C48 60 54 48 60 40 M84 52 C92 54 102 54 110 50" stroke="#3a2a24" stroke-width="5" fill="none" stroke-linecap="round"/>${[[60, 38], [76, 56], [100, 34], [110, 50], [40, 82], [92, 46], [28, 90]].map(([x, y]) => rot(5, (a) => `<ellipse transform="rotate(${a} ${x} ${y})" cx="${x}" cy="${y - 5}" rx="3.6" ry="5" fill="#f59ab0"/>`) + `<circle cx="${x}" cy="${y}" r="2" fill="#c83a2e"/>`).join("")}`,
  },
};

