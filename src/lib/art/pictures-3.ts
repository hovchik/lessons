import type { Pic } from "./pictures-1";
import type { Tr } from "./spec";

const t = (en: string, hy: string, ru: string): Tr => ({ en, hy, ru });
/** A small framed painting: gilt frame around a scene. */
const framed = (bg: string, inner: string) =>
  `<rect x="4" y="10" width="112" height="100" rx="3" fill="#c99a3a"/><rect x="10" y="16" width="100" height="88" fill="${bg}"/><svg x="10" y="16" width="100" height="88" viewBox="0 0 100 88" overflow="hidden">${inner}</svg>`;
const cols = (x0: number, n: number, gap: number, y: number, h: number, w = 5, c = "#efe6d6") =>
  Array.from({ length: n }, (_, i) => `<rect x="${x0 + i * gap}" y="${y}" width="${w}" height="${h}" fill="${c}"/>`).join("");

/** Architecture, genres of painting and design. */
export const PICS_3: Record<string, Pic> = {
  garni: {
    name: t("Garni temple (1st century)", "Գառնիի տաճար (I դար)", "храм Гарни (I век)"),
    svg: `<rect x="0" y="100" width="120" height="20" fill="#9ccc6b"/><path d="M14 100 H106 V84 H14Z" fill="#a89a8a"/><path d="M38 100 H82 L80 106 H40Z" fill="#8d7f70"/>${[0, 1, 2, 3, 4].map((i) => `<rect x="${40 + i * 2}" y="${84 + i * 3.2}" width="${40 - i * 4}" height="3.2" fill="#b8ab9b"/>`).join("")}<rect x="18" y="44" width="84" height="6" fill="#c7b9a6"/>${cols(22, 6, 15, 50, 34, 6, "#d8ccb8")}<path d="M14 44 L60 22 L106 44Z" fill="#c7b9a6"/><path d="M26 42 L60 27 L94 42Z" fill="#b5a792"/>`,
  },
  "greek-temple": {
    name: t("Greek temple: harmony and measure", "հունական տաճար․ ներդաշնակություն և չափ", "греческий храм: гармония и мера"),
    svg: `<rect x="0" y="100" width="120" height="20" fill="#e8dfc8"/><rect x="8" y="92" width="104" height="8" fill="#e6dccb"/><rect x="12" y="86" width="96" height="6" fill="#efe6d6"/><rect x="12" y="40" width="96" height="8" fill="#efe6d6"/>${cols(16, 8, 12.4, 48, 38, 6)}<path d="M8 40 L60 14 L112 40Z" fill="#efe6d6"/><path d="M22 38 L60 20 L98 38Z" fill="#d8ccb8"/><rect x="0" y="0" width="120" height="0" fill="none"/>`,
  },
  orders: {
    name: t("three orders: Doric, Ionic, Corinthian", "երեք օրդեր․ դորիական, իոնիական, կորնթական", "три ордера: дорический, ионический, коринфский"),
    svg: `${[14, 50, 86].map((x) => `<rect x="${x}" y="40" width="20" height="66" fill="#efe6d6" stroke="#b5a792"/><path d="M${x + 5} 44 V102 M${x + 10} 44 V102 M${x + 15} 44 V102" stroke="#d8ccb8"/><rect x="${x - 4}" y="106" width="28" height="6" fill="#d8ccb8"/>`).join("")}<rect x="10" y="30" width="28" height="10" fill="#d8ccb8"/><rect x="12" y="36" width="24" height="4" fill="#b5a792"/><path d="M46 34 H78 V40 H46Z" fill="#d8ccb8"/><circle cx="48" cy="38" r="5" fill="none" stroke="#8d7f70" stroke-width="2"/><circle cx="76" cy="38" r="5" fill="none" stroke="#8d7f70" stroke-width="2"/><path d="M84 40 C82 30 86 22 92 20 C90 28 96 30 96 22 C96 30 102 28 100 20 C106 22 110 30 108 40Z" fill="#9cb86b"/><rect x="82" y="16" width="28" height="5" fill="#d8ccb8"/>`,
  },
  zvartnots: {
    name: t("Zvartnots: a round temple of three tiers", "Զվարթնոց․ եռաստիճան կլոր տաճար", "Звартноц: круглый храм в три яруса"),
    svg: `<rect x="0" y="104" width="120" height="16" fill="#9ccc6b"/><rect x="8" y="76" width="104" height="28" rx="2" fill="#e6a593"/>${cols(14, 10, 10, 80, 22, 4, "#c9826e")}<rect x="24" y="52" width="72" height="24" fill="#e9b4a3"/>${cols(30, 7, 10, 56, 18, 4, "#c9826e")}<rect x="40" y="32" width="40" height="20" fill="#efc3b4"/>${cols(46, 4, 10, 36, 14, 4, "#c9826e")}<path d="M40 32 L60 18 L80 32Z" fill="#b86a4b"/><path d="M60 18 V8 M55 12 H65" stroke="#7a3a1a" stroke-width="2"/>`,
  },
  "armenian-church": {
    name: t("Armenian church: dome on a drum with a cone roof", "հայկական եկեղեցի․ թմբուկ և վեղարաձև գմբեթ", "армянская церковь: барабан и шатровый купол"),
    svg: `<rect x="0" y="104" width="120" height="16" fill="#9ccc6b"/><path d="M16 104 V58 L36 46 L56 58 H64 L84 46 L104 58 V104Z" fill="#d9875f"/><path d="M12 60 L36 44 L58 60 M62 60 L84 44 L108 60" stroke="#8a4a2f" stroke-width="3" fill="none"/><rect x="44" y="38" width="32" height="20" fill="#e6a593"/><path d="M42 38 L60 12 L78 38Z" fill="#b86a4b"/><path d="M60 12 V2 M56 6 H64" stroke="#5a2a14" stroke-width="2"/><rect x="58" y="42" width="4" height="12" rx="2" fill="#5a3a2a"/><rect x="34" y="66" width="5" height="16" rx="2.5" fill="#5a3a2a"/><rect x="81" y="66" width="5" height="16" rx="2.5" fill="#5a3a2a"/><path d="M52 104 V84 C52 76 68 76 68 84 V104Z" fill="#5a3a2a"/><path d="M52 84 C52 74 68 74 68 84" stroke="#e6a593" stroke-width="2" fill="none"/>`,
  },
  fortress: {
    name: t("fortress on a cliff", "ամրոց ժայռի վրա", "крепость на скале"),
    svg: `<path d="M0 120 L14 84 L40 76 L80 78 L108 86 L120 120Z" fill="#8d7f70"/><path d="M18 82 V48 H102 V84" fill="#b8ab9b"/>${[18, 52, 86].map((x) => `<path d="M${x - 4} 86 V40 C${x - 4} 34 ${x + 20} 34 ${x + 20} 40 V86Z" fill="#a89a8a"/>`).join("")}${Array.from({ length: 12 }, (_, i) => `<rect x="${16 + i * 8}" y="42" width="5" height="6" fill="#a89a8a"/>`).join("")}<rect x="58" y="62" width="10" height="16" rx="5" fill="#4a3a3a"/><rect x="28" y="54" width="4" height="9" fill="#4a3a3a"/><rect x="94" y="54" width="4" height="9" fill="#4a3a3a"/>`,
  },
  erebuni: {
    name: t("Erebuni fortress (782 BC)", "Էրեբունի ամրոց (մ․թ․ա․ 782)", "крепость Эребуни (782 г. до н. э.)"),
    svg: `<rect width="120" height="120" fill="#bfe0f5"/><path d="M0 120 V92 C30 76 90 76 120 92 V120Z" fill="#c9a26b"/><path d="M18 84 V54 H102 V84Z" fill="#d9b27a"/>${[18, 38, 58, 78, 98].map((x) => `<rect x="${x - 4}" y="48" width="12" height="38" fill="#c99a5f"/>`).join("")}${Array.from({ length: 13 }, (_, i) => `<rect x="${14 + i * 7.4}" y="44" width="4" height="5" fill="#c99a5f"/>`).join("")}<path d="M48 84 V66 H72 V84Z" fill="#6b4226"/><path d="M20 64 H100" stroke="#c0392b" stroke-width="2"/><path d="M20 70 H100" stroke="#1f5fa8" stroke-width="2"/>`,
  },
  kremlin: {
    name: t("kremlin wall and tower", "կրեմլի պարիսպ և աշտարակ", "кремлёвская стена и башня"),
    svg: `<rect x="0" y="104" width="120" height="16" fill="#9ccc6b"/><rect x="0" y="66" width="120" height="38" fill="#b5362c"/>${Array.from({ length: 10 }, (_, i) => `<path d="M${2 + i * 12} 66 V56 L${6 + i * 12} 60 L${10 + i * 12} 56 V66Z" fill="#b5362c"/>`).join("")}<rect x="44" y="34" width="32" height="70" fill="#c0392b"/><rect x="48" y="22" width="24" height="14" fill="#c0392b"/><path d="M48 22 L60 2 L72 22Z" fill="#2e7d32"/><circle cx="60" cy="48" r="7" fill="#fff"/><path d="M60 43 V48 L63 50" stroke="#1d1d24" stroke-width="1.4" fill="none"/><path d="M52 104 V82 C52 74 68 74 68 82 V104Z" fill="#5a1a14"/>`,
  },
  "st-basil": {
    name: t("St Basil's Cathedral: onion domes", "Սուրբ Վասիլի տաճար․ սոխաձև գմբեթներ", "собор Василия Блаженного: луковичные главы"),
    svg: `<rect x="0" y="108" width="120" height="12" fill="#b8b8b8"/><rect x="14" y="70" width="92" height="38" fill="#c0392b"/>${[[24, 60, "#2e7d32", "#ffd21f"], [44, 46, "#1f5fbf", "#fff"], [76, 46, "#e0b84a", "#c0392b"], [96, 60, "#2e9e8a", "#ffd21f"]].map(([x, y, c, s]) => `<rect x="${+x - 7}" y="${+y + 8}" width="14" height="${70 - +y}" fill="#e8d3a9"/><path d="M${x} ${+y - 18} C${+x + 16} ${+y - 6} ${+x + 14} ${+y + 8} ${x} ${+y + 10} C${+x - 14} ${+y + 8} ${+x - 16} ${+y - 6} ${x} ${+y - 18}Z" fill="${c}"/><path d="M${+x - 10} ${+y - 2} H${+x + 10} M${+x - 12} ${+y + 4} H${+x + 12}" stroke="${s}" stroke-width="2.5"/>`).join("")}<rect x="53" y="30" width="14" height="40" fill="#e8d3a9"/><path d="M50 30 L60 2 L70 30Z" fill="#e0b84a"/><path d="M52 108 V90 C52 82 68 82 68 90 V108Z" fill="#5a1a14"/>`,
  },
  izba: {
    name: t("Russian izba with carved window frames", "ռուսական իզբա փորագրված պատուհաններով", "русская изба с резными наличниками"),
    svg: `<rect x="0" y="104" width="120" height="16" fill="#9ccc6b"/><path d="M10 52 L60 14 L110 52Z" fill="#8b5a2b"/><path d="M24 50 L60 24 L96 50Z" fill="#c8945a"/><circle cx="60" cy="40" r="6" fill="#ffd21f"/>${Array.from({ length: 9 }, (_, i) => `<rect x="18" y="${52 + i * 6}" width="84" height="5.4" rx="2.7" fill="${i % 2 ? "#b07a42" : "#c08850"}"/>`).join("")}${[34, 70].map((x) => `<rect x="${x}" y="64" width="16" height="22" fill="#9ec9f0"/><path d="M${x - 4} 64 L${x + 8} 56 L${x + 20} 64Z" fill="#fff"/><rect x="${x - 3}" y="62" width="22" height="3" fill="#fff"/><rect x="${x - 3}" y="86" width="22" height="4" fill="#fff"/><path d="M${x + 8} 64 V86 M${x} 74 H${x + 16}" stroke="#fff" stroke-width="2"/>`).join("")}<path d="M10 52 L60 14 L110 52" stroke="#fff" stroke-width="3" fill="none"/>`,
  },
  "armenian-house": {
    name: t("old Armenian stone house", "հին հայկական քարե տուն", "старый армянский каменный дом"),
    svg: `<rect x="0" y="104" width="120" height="16" fill="#c9b27a"/><path d="M12 104 V46 H108 V104Z" fill="#a89a8a"/>${Array.from({ length: 7 }, (_, r) => Array.from({ length: 6 }, (_, c) => `<rect x="${12 + c * 16 + (r % 2 ? 8 : 0)}" y="${46 + r * 8.3}" width="15" height="7.6" fill="${(r + c) % 3 ? "#b8ab9b" : "#9c8f80"}"/>`).join("")).join("")}<rect x="8" y="40" width="104" height="7" fill="#7d6a5a"/><rect x="54" y="32" width="12" height="8" fill="#7d6a5a"/><path d="M58 30 C56 22 62 18 60 10" stroke="#ccc" stroke-width="3" fill="none"/><path d="M24 104 V78 C24 70 40 70 40 78 V104Z" fill="#6b4226"/><rect x="70" y="60" width="26" height="14" fill="#6b4226"/><path d="M66 76 H100 M66 82 H100" stroke="#8b5a2b" stroke-width="3"/>${[70, 78, 86, 94].map((x) => `<path d="M${x} 76 V84" stroke="#8b5a2b" stroke-width="2"/>`).join("")}`,
  },
  gothic: {
    name: t("Gothic cathedral", "գոթական տաճար", "готический собор"),
    svg: `<rect x="0" y="108" width="120" height="12" fill="#b8b8b8"/><path d="M14 108 V36 L24 6 L34 36 V108Z M86 108 V36 L96 6 L106 36 V108Z" fill="#8d8a86"/><rect x="34" y="40" width="52" height="68" fill="#a5a19c"/><path d="M34 40 L60 18 L86 40Z" fill="#8d8a86"/><circle cx="60" cy="56" r="12" fill="#4f7fd8"/>${Array.from({ length: 8 }, (_, i) => `<path transform="rotate(${i * 45} 60 56)" d="M60 56 V44" stroke="#8d8a86" stroke-width="2"/>`).join("")}<path d="M50 108 V86 L60 72 L70 86 V108Z" fill="#4a3a3a"/>${[20, 92].map((x) => `<path d="M${x} 80 V62 L${x + 4} 54 L${x + 8} 62 V80Z" fill="#4f7fd8"/>`).join("")}`,
  },
  pagoda: {
    name: t("Japanese pagoda", "ճապոնական պագոդա", "японская пагода"),
    svg: `<rect x="0" y="108" width="120" height="12" fill="#9ccc6b"/>${[0, 1, 2, 3].map((i) => { const w = 76 - i * 14, y = 96 - i * 22; return `<rect x="${60 - w / 2 + 8}" y="${y - 10}" width="${w - 16}" height="12" fill="#c83a2e"/><path d="M${60 - w / 2 - 6} ${y - 8} Q60 ${y - 18} ${60 + w / 2 + 6} ${y - 8} L${60 + w / 2 - 4} ${y - 14} L${60 - w / 2 + 4} ${y - 14}Z" fill="#2b2b2b"/>`; }).join("")}<rect x="38" y="96" width="44" height="12" fill="#c83a2e"/><path d="M60 14 V2" stroke="#e8b83a" stroke-width="3"/>`,
  },
  yurt: {
    name: t("yurt of the steppe nomads", "տափաստանային քոչվորների յուրտա", "юрта кочевников степи"),
    svg: `<rect x="0" y="100" width="120" height="20" fill="#c9d86b"/><path d="M16 100 V66 H104 V100Z" fill="#f2e8cf"/><path d="M12 68 C30 36 90 36 108 68Z" fill="#e8dcc0"/><path d="M16 74 H104" stroke="#c0392b" stroke-width="4"/><path d="M16 80 H104" stroke="#1f5fa8" stroke-width="2"/>${Array.from({ length: 8 }, (_, i) => `<path d="M${22 + i * 11} 72 l4 -4 l4 4" stroke="#c0392b" stroke-width="2" fill="none"/>`).join("")}<rect x="52" y="78" width="16" height="22" fill="#c0392b"/><path d="M52 78 H68" stroke="#e8b83a" stroke-width="2"/><rect x="54" y="36" width="12" height="4" fill="#8b5a2b"/>`,
  },
  registan: {
    name: t("portal and dome of Samarkand", "Սամարղանդի պորտալ և գմբեթ", "портал и купол Самарканда"),
    svg: `<rect x="0" y="104" width="120" height="16" fill="#e3c99a"/><rect x="24" y="30" width="72" height="74" fill="#e3c99a"/><path d="M40 104 V54 C40 36 80 36 80 54 V104Z" fill="#1f6fb8"/><path d="M46 104 V58 C46 44 74 44 74 58 V104Z" fill="#14306b"/>${Array.from({ length: 6 }, (_, i) => `<rect x="${28 + i * 11.4}" y="32" width="8" height="8" fill="${i % 2 ? "#1a8a96" : "#1f6fb8"}" transform="rotate(45 ${32 + i * 11.4} 36)"/>`).join("")}<rect x="8" y="20" width="10" height="84" fill="#d9b27a"/><rect x="102" y="20" width="10" height="84" fill="#d9b27a"/><path d="M8 20 Q13 10 18 20 M102 20 Q107 10 112 20" fill="#1a8a96"/>${[40, 60, 80].map((y) => `<path d="M8 ${y} H18 M102 ${y} H112" stroke="#1a8a96" stroke-width="3"/>`).join("")}<path d="M60 10 C76 10 82 24 82 30 H38 C38 24 44 10 60 10Z" fill="#1a8a96"/><path d="M48 18 V30 M56 13 V30 M64 13 V30 M72 18 V30" stroke="#0f5a62" stroke-width="1.5"/>`,
  },
  pyramids: {
    name: t("pyramids of Egypt", "Եգիպտոսի բուրգերը", "пирамиды Египта"),
    svg: `<rect width="120" height="120" fill="#ffe7a8"/><circle cx="96" cy="26" r="12" fill="#ff8a1f"/><path d="M0 104 H120 V120 H0Z" fill="#e3b866"/><path d="M8 104 L44 40 L80 104Z" fill="#d9a441"/><path d="M44 40 L80 104 H58Z" fill="#b5822a"/><path d="M66 104 L92 60 L118 104Z" fill="#d9a441"/><path d="M92 60 L118 104 H102Z" fill="#b5822a"/>`,
  },
  tamanyan: {
    name: t("Yerevan tuff arcade in Tamanyan's style", "Թամանյանի ոճի տուֆե կամարաշար", "туфовая аркада Еревана в стиле Таманяна"),
    svg: `<rect x="0" y="108" width="120" height="12" fill="#b8b8b8"/><rect x="6" y="30" width="108" height="78" fill="#e6a593"/><rect x="2" y="24" width="116" height="8" fill="#d9875f"/>${Array.from({ length: 5 }, (_, i) => `<path d="M${12 + i * 20} 108 V74 C${12 + i * 20} 62 ${28 + i * 20} 62 ${28 + i * 20} 74 V108Z" fill="#8a4a2f"/><rect x="${14 + i * 20}" y="40" width="12" height="16" rx="2" fill="#5a3a3a"/>`).join("")}<path d="M6 60 H114" stroke="#d9875f" stroke-width="3"/>${Array.from({ length: 14 }, (_, i) => `<circle cx="${10 + i * 7.6}" cy="28" r="2" fill="#f2c4b0"/>`).join("")}`,
  },
  skyscraper: {
    name: t("modern city", "ժամանակակից քաղաք", "современный город"),
    svg: `<rect width="120" height="120" fill="#dceefc"/><rect x="10" y="40" width="26" height="80" fill="#5a7fb8"/><rect x="44" y="10" width="30" height="110" fill="#2c3e70"/><rect x="82" y="56" width="28" height="64" fill="#8fb8ef"/>${Array.from({ length: 9 }, (_, r) => `<rect x="48" y="${16 + r * 11}" width="22" height="5" fill="#9ec9f0"/>`).join("")}${Array.from({ length: 6 }, (_, r) => `<rect x="14" y="${46 + r * 12}" width="18" height="6" fill="#dceefc"/>`).join("")}<path d="M86 62 L106 62 M86 74 H106 M86 86 H106 M86 98 H106" stroke="#fff" stroke-width="3"/><circle cx="20" cy="112" r="8" fill="#2fbf71"/><circle cx="104" cy="112" r="8" fill="#2fbf71"/>`,
  },
  // ---- genres ----
  "genre-landscape": {
    name: t("landscape", "բնանկար", "пейзаж"),
    svg: framed("#9ec9f0", `<circle cx="78" cy="20" r="9" fill="#fff3b0"/><path d="M0 52 L22 30 L40 46 L62 22 L100 52Z" fill="#7d8fb5"/><path d="M0 64 C30 50 60 56 100 60 V88 H0Z" fill="#6cc35a"/><path d="M0 76 C40 66 70 72 100 80 V88 H0Z" fill="#3f8f4a"/><rect x="18" y="52" width="3" height="14" fill="#5a3a1a"/><circle cx="19.5" cy="48" r="8" fill="#2f7d32"/>`),
  },
  "genre-still-life": {
    name: t("still life", "նատյուրմորտ", "натюрморт"),
    svg: framed("#e9dcc4", `<rect x="0" y="58" width="100" height="30" fill="#8b5a2b"/><path d="M28 18 C20 30 20 44 26 56 H44 C50 44 50 30 42 18Z" fill="#1f5fa8"/><rect x="29" y="12" width="12" height="8" fill="#1f5fa8"/><circle cx="62" cy="54" r="10" fill="#e0262f"/><circle cx="78" cy="56" r="8" fill="#ffb01f"/><path d="M16 58 C30 52 60 52 92 58" stroke="#f1e6cf" stroke-width="4" fill="none"/>`),
  },
  "genre-portrait": {
    name: t("portrait", "դիմանկար", "портрет"),
    svg: framed("#3a4a5a", `<path d="M20 88 C22 66 36 58 50 58 C64 58 78 66 80 88Z" fill="#7d2e8f"/><ellipse cx="50" cy="38" rx="15" ry="19" fill="#f2c4a4"/><path d="M34 34 C34 14 66 14 66 34 C62 24 40 24 34 34Z" fill="#4a2a1a"/><circle cx="44" cy="38" r="1.8" fill="#1d1d24"/><circle cx="56" cy="38" r="1.8" fill="#1d1d24"/><path d="M46 48 Q50 51 54 48" stroke="#a0624a" stroke-width="1.6" fill="none"/>`),
  },
  "genre-self-portrait": {
    name: t("self-portrait", "ինքնադիմանկար", "автопортрет"),
    svg: framed("#e3c27a", `<ellipse cx="44" cy="40" rx="15" ry="19" fill="#f2c4a4"/><path d="M28 30 C30 14 58 14 60 30 C54 22 34 22 28 30Z" fill="#6b3a1a"/><circle cx="38" cy="40" r="1.8" fill="#1d1d24"/><circle cx="50" cy="40" r="1.8" fill="#1d1d24"/><path d="M14 88 C16 66 30 60 44 60 C58 60 72 66 74 88Z" fill="#1f5fa8"/><rect x="72" y="20" width="22" height="44" fill="#fff" stroke="#8b5a2b" stroke-width="2"/><path d="M78 26 L66 56" stroke="#d6453d" stroke-width="3"/><path d="M60 22 C66 18 74 16 76 20" fill="none"/>`),
  },
  "genre-animal": {
    name: t("animal painting", "անիմալիստական ժանր", "анималистический жанр"),
    svg: framed("#cfe8b8", `<path d="M0 66 H100 V88 H0Z" fill="#6cc35a"/><path d="M24 64 L26 48 C28 38 44 36 56 38 L70 38 C74 30 76 22 82 18 L88 18 L86 24 L92 30 L86 32 L82 30 C80 40 78 48 76 52 L78 66 M36 52 L34 66 M64 52 L66 66" stroke="#8b4513" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 48 C20 48 16 54 14 60" stroke="#5a2a14" stroke-width="4" fill="none"/>`),
  },
  "genre-battle": {
    name: t("historical and battle painting", "պատմական և մարտանկար", "исторический и батальный жанр"),
    svg: framed("#f2b35a", `<path d="M0 70 H100 V88 H0Z" fill="#8b5a2b"/><path d="M30 68 L32 52 C34 44 46 42 56 44 L66 44 C70 36 72 28 78 24 L84 24 L82 30 L88 36 L80 38 C78 46 76 52 74 56 L76 68 M40 56 L38 68 M62 56 L64 68" stroke="#3e2416" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M50 42 L52 24 L58 24 L58 42" fill="#9e1b24"/><circle cx="55" cy="20" r="5" fill="#f2c4a4"/><path d="M60 18 L84 6" stroke="#c7ccd6" stroke-width="2"/><path d="M14 30 V70 M14 30 L30 36 L14 42" stroke="#9e1b24" stroke-width="3" fill="#9e1b24"/>`),
  },
  "genre-everyday": {
    name: t("everyday (genre) scene", "կենցաղային ժանր", "бытовой жанр"),
    svg: framed("#f6e7c4", `<rect x="0" y="62" width="100" height="26" fill="#c08850"/><rect x="20" y="50" width="60" height="6" fill="#8b5a2b"/><path d="M26 56 V80 M74 56 V80" stroke="#8b5a2b" stroke-width="4"/><circle cx="34" cy="30" r="7" fill="#f2c4a4"/><path d="M26 50 C26 40 42 40 42 50Z" fill="#e0262f"/><circle cx="66" cy="28" r="7" fill="#f2c4a4"/><path d="M58 50 C58 38 74 38 74 50Z" fill="#1f5fa8"/><ellipse cx="50" cy="48" rx="10" ry="3" fill="#fff"/><path d="M44 46 Q50 38 56 46" fill="#ffb01f"/>`),
  },
  "genre-marine": {
    name: t("marine painting (the sea)", "ծովանկար", "марина (морской пейзаж)"),
    svg: framed("#f2b35a", `<rect y="0" width="100" height="40" fill="#f6d68a"/><circle cx="50" cy="38" r="10" fill="#fff3c2"/><rect y="40" width="100" height="48" fill="#2e6f73"/><path d="M0 60 Q20 44 40 60 T80 60 T120 60 V88 H0Z" fill="#173f4f"/><path d="M8 58 q10 -8 20 0 M48 58 q10 -8 20 0" stroke="#bfe6dc" stroke-width="3" fill="none"/><path d="M70 44 L84 44 L82 48 L72 48Z" fill="#1d1d24"/><path d="M77 43 V30 L84 42Z" fill="#fff"/>`),
  },
  "genre-city": {
    name: t("cityscape", "քաղաքային բնանկար", "городской пейзаж"),
    svg: framed("#cfe3f5", `<path d="M0 60 V36 H14 V26 H26 V44 H38 V20 H52 V40 H64 V30 H78 V46 H100 V60Z" fill="#8a9ab8"/><rect x="0" y="60" width="100" height="28" fill="#6b6b7a"/><path d="M50 60 L30 88 M50 60 L70 88" stroke="#f2f2f2" stroke-width="2"/><path d="M50 66 V72 M50 78 V86" stroke="#ffd21f" stroke-width="2"/>`),
  },
  "genre-fairy": {
    name: t("fairy-tale picture", "հեքիաթային նկար", "сказочная картина"),
    svg: framed("#2c2a6b", `<circle cx="80" cy="16" r="8" fill="#fff3b0"/>${[[12, 10], [30, 20], [56, 8], [92, 34]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.4" fill="#fff"/>`).join("")}<path d="M0 70 C30 60 70 64 100 70 V88 H0Z" fill="#3f6b4a"/><rect x="34" y="36" width="30" height="34" fill="#e3c27a"/><path d="M30 38 L49 16 L68 38Z" fill="#9e1b24"/><path d="M60 22 V36 H66 V28Z" fill="#9e1b24"/><rect x="44" y="52" width="10" height="18" fill="#6b4226"/><circle cx="20" cy="62" r="6" fill="#ffd21f"/><path d="M14 72 L20 60 L26 72" fill="#ff8a1f"/>`),
  },
  "genre-icon": {
    name: t("icon and fresco", "սրբանկար և որմնանկար", "икона и фреска"),
    svg: framed("#e8b83a", `<path d="M14 4 H86 V84 H14Z" fill="#c99a3a"/><circle cx="50" cy="32" r="20" fill="#f2d77a"/><ellipse cx="50" cy="34" rx="10" ry="13" fill="#d9a07a"/><path d="M26 84 C28 62 38 50 50 50 C62 50 72 62 74 84Z" fill="#9e1b24"/><path d="M40 54 L50 84 L60 54" fill="#1c2f5e"/>`),
  },
  "genre-abstract": {
    name: t("abstract picture", "աբստրակտ նկար", "абстрактная картина"),
    svg: framed("#f4f1ea", `<circle cx="32" cy="34" r="20" fill="#e63022"/><rect x="54" y="12" width="36" height="36" fill="#1d4ea3"/><path d="M10 80 L50 46 L74 80Z" fill="#f5c400"/><path d="M60 62 C70 52 84 70 94 60" stroke="#111" stroke-width="4" fill="none"/>`),
  },
  // ---- design ----
  poster: {
    name: t("poster: one image, few words", "պաստառ․ մեկ պատկեր, քիչ բառեր", "плакат: один образ, мало слов"),
    svg: `<rect x="20" y="4" width="80" height="112" fill="#ffd21f"/><circle cx="60" cy="52" r="26" fill="#e0262f"/><path d="M48 52 L58 62 L74 42" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="30" y="88" width="60" height="9" fill="#1d1d24"/><rect x="38" y="101" width="44" height="5" fill="#1d1d24" opacity=".5"/>`,
  },
  "logo-kinds": {
    name: t("three kinds of logo: letters, sign, both", "լոգոյի երեք տեսակ․ տառեր, նշան, երկուսը միասին", "три вида логотипа: буквы, знак, комбинированный"),
    svg: `<rect x="4" y="8" width="34" height="34" rx="8" fill="#4f46e5"/><text x="21" y="33" text-anchor="middle" font-size="20" font-weight="900" fill="#fff" font-family="Nunito, sans-serif">AB</text><rect x="43" y="8" width="34" height="34" rx="8" fill="#fff" stroke="#e2e8f0"/><circle cx="60" cy="25" r="11" fill="#ea580c"/><path d="M52 25 L60 15 L68 25 L60 35Z" fill="#fff"/><rect x="82" y="8" width="34" height="34" rx="8" fill="#0f172a"/><circle cx="99" cy="22" r="7" fill="#2fbf71"/><rect x="88" y="32" width="22" height="4" rx="2" fill="#fff"/><rect x="4" y="56" width="112" height="56" rx="10" fill="#f8fafc" stroke="#e2e8f0"/><circle cx="26" cy="84" r="14" fill="#ea580c"/><path d="M18 84 L26 74 L34 84 L26 94Z" fill="#fff"/><rect x="46" y="76" width="56" height="8" rx="4" fill="#0f172a"/><rect x="46" y="88" width="36" height="5" rx="2.5" fill="#64748b"/>`,
  },
  pictograms: {
    name: t("pictograms: pictures instead of words", "պիկտոգրամներ․ պատկեր բառի փոխարեն", "пиктограммы: картинки вместо слов"),
    svg: `${[[4, 4, "#1f5fbf"], [62, 4, "#2f9e44"], [4, 62, "#e0262f"], [62, 62, "#1d1d24"]].map(([x, y, c]) => `<rect x="${x}" y="${y}" width="54" height="54" rx="8" fill="${c}"/>`).join("")}<circle cx="31" cy="16" r="5" fill="#fff"/><path d="M31 22 V40 M22 28 H40 M31 40 L24 52 M31 40 L38 52" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M72 30 H104 M98 22 L106 30 L98 38" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="76" cy="16" r="4" fill="#fff"/><path d="M76 22 L80 34 L72 44" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M18 80 H44 V92 C44 102 18 102 18 92Z" fill="#fff"/><path d="M44 84 C52 84 52 94 44 94" stroke="#fff" stroke-width="3" fill="none"/><path d="M24 68 C22 72 26 74 24 78 M32 68 C30 72 34 74 32 78" stroke="#fff" stroke-width="2.5" fill="none"/><rect x="70" y="72" width="38" height="26" rx="6" fill="#fff"/><rect x="74" y="76" width="30" height="12" rx="2" fill="#1d1d24"/><circle cx="78" cy="100" r="4" fill="#fff"/><circle cx="100" cy="100" r="4" fill="#fff"/>`,
  },
  infographic: {
    name: t("infographic", "ինֆոգրաֆիկա", "инфографика"),
    svg: `<rect x="4" y="4" width="112" height="112" rx="10" fill="#f8fafc" stroke="#e2e8f0"/><rect x="14" y="14" width="60" height="8" rx="4" fill="#0f172a"/>${[[22, 60, "#4f46e5"], [42, 40, "#ea580c"], [62, 70, "#2fbf71"], [82, 26, "#e0262f"]].map(([x, h, c]) => `<rect x="${x}" y="${100 - +h}" width="14" height="${h}" rx="3" fill="${c}"/>`).join("")}<path d="M14 100 H106" stroke="#64748b" stroke-width="2"/><circle cx="96" cy="26" r="12" fill="none" stroke="#e2e8f0" stroke-width="6"/><circle cx="96" cy="26" r="12" fill="none" stroke="#4f46e5" stroke-width="6" stroke-dasharray="50 100" transform="rotate(-90 96 26)"/>`,
  },
  "book-spread": {
    name: t("book spread on a grid", "գրքի տարածք ցանցի վրա", "книжный разворот на модульной сетке"),
    svg: `<path d="M4 18 C24 12 46 14 60 22 C74 14 96 12 116 18 V106 C96 100 74 102 60 110 C46 102 24 100 4 106Z" fill="#fff" stroke="#c9d1e0" stroke-width="2"/><path d="M60 22 V110" stroke="#c9d1e0" stroke-width="2"/><rect x="12" y="26" width="40" height="30" fill="#8fb8ef"/><circle cx="24" cy="38" r="5" fill="#ffd21f"/><path d="M12 56 L26 44 L36 52 L44 46 L52 56Z" fill="#2f9e44"/>${[62, 68, 74, 80, 86, 92].map((y) => `<rect x="12" y="${y}" width="40" height="2.6" fill="#94a3b8"/>`).join("")}<rect x="68" y="26" width="40" height="7" fill="#0f172a"/>${[40, 46, 52, 58, 64, 70, 76, 82, 88, 94].map((y) => `<rect x="68" y="${y}" width="${y % 12 ? 40 : 30}" height="2.6" fill="#94a3b8"/>`).join("")}<path d="M12 22 V104 M32 20 V102 M52 22 V104 M68 22 V104 M88 20 V102 M108 22 V104" stroke="#e0262f" stroke-width=".6" stroke-dasharray="2 2"/>`,
  },
  "app-screen": {
    name: t("app screen", "հավելվածի էկրան", "экран приложения"),
    svg: `<rect x="30" y="4" width="60" height="112" rx="12" fill="#0f172a"/><rect x="34" y="10" width="52" height="100" rx="8" fill="#f8fafc"/><rect x="38" y="16" width="30" height="5" rx="2.5" fill="#0f172a"/><rect x="38" y="26" width="44" height="28" rx="6" fill="#4f46e5"/><circle cx="48" cy="40" r="6" fill="#fff" opacity=".8"/><rect x="38" y="60" width="44" height="10" rx="5" fill="#e2e8f0"/><rect x="38" y="74" width="44" height="10" rx="5" fill="#e2e8f0"/><rect x="38" y="90" width="44" height="12" rx="6" fill="#ea580c"/><rect x="50" y="94" width="20" height="4" rx="2" fill="#fff"/>`,
  },
  chair: {
    name: t("designed chair: form follows function", "դիզայներական աթոռ․ ձևը հետևում է գործառույթին", "дизайнерский стул: форма следует функции"),
    svg: `<path d="M34 16 H74 C78 16 80 20 78 24 L70 58" stroke="#1d1d24" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M24 62 H82" stroke="#e63022" stroke-width="10" stroke-linecap="round"/><path d="M30 66 L24 108 M76 66 L82 108 M34 86 H72" stroke="#1d1d24" stroke-width="5" stroke-linecap="round"/><path d="M34 16 L30 62" stroke="#1d1d24" stroke-width="6" stroke-linecap="round"/><rect x="36" y="22" width="36" height="20" rx="4" fill="#1d4ea3"/>`,
  },
  lamp: {
    name: t("desk lamp", "սեղանի լամպ", "настольная лампа"),
    svg: `<path d="M30 108 H80" stroke="#1d1d24" stroke-width="8" stroke-linecap="round"/><path d="M54 104 L40 64 L74 34" stroke="#ea580c" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="40" cy="64" r="5" fill="#1d1d24"/><path d="M66 22 L98 46 L84 60 Z" fill="#1d1d24"/><path d="M91 53 L100 80 L66 66Z" fill="#ffd21f" opacity=".35"/>`,
  },
  "box-net": {
    name: t("a box and its net", "տուփ և դրա փռվածքը", "коробка и её развёртка"),
    svg: `<g fill="#ffd59a" stroke="#b5651d" stroke-width="1.5"><rect x="26" y="8" width="22" height="22"/><rect x="4" y="30" width="22" height="22"/><rect x="26" y="30" width="22" height="22"/><rect x="48" y="30" width="22" height="22"/><rect x="26" y="52" width="22" height="22"/><rect x="26" y="74" width="22" height="22"/></g><path d="M26 8 L30 4 H44 L48 8" fill="#ffe8c4" stroke="#b5651d" stroke-dasharray="3 2"/><path d="M76 60 L96 48 L116 60 L96 72Z" fill="#ffe8c4" stroke="#b5651d"/><path d="M76 60 V88 L96 100 V72Z" fill="#ffd59a" stroke="#b5651d"/><path d="M96 72 V100 L116 88 V60Z" fill="#f2b35a" stroke="#b5651d"/>`,
  },
  "street-furniture": {
    name: t("bench, lamp post and bin: one family", "նստարան, լապտեր և աղբաման․ մեկ ընտանիք", "скамья, фонарь и урна: одна семья"),
    svg: `<rect x="0" y="104" width="120" height="16" fill="#cbd5e1"/><path d="M20 10 V104" stroke="#2c3e70" stroke-width="5"/><path d="M20 12 H40" stroke="#2c3e70" stroke-width="5"/><rect x="34" y="12" width="14" height="8" rx="3" fill="#ffd21f"/><rect x="48" y="78" width="50" height="6" rx="3" fill="#c08850"/><rect x="48" y="66" width="50" height="6" rx="3" fill="#c08850"/><path d="M52 84 V104 M94 84 V104 M52 72 V84 M94 72 V84" stroke="#2c3e70" stroke-width="4"/><rect x="102" y="80" width="14" height="24" rx="3" fill="#2c3e70"/><rect x="104" y="84" width="10" height="3" fill="#c08850"/>`,
  },
  recycle: {
    name: t("reduce, reuse, recycle", "կրճատել, կրկին օգտագործել, վերամշակել", "сократи, используй снова, переработай"),
    svg: `${[0, 120, 240].map((a) => `<g transform="rotate(${a} 60 64)"><path d="M60 22 L84 62" stroke="#2f9e44" stroke-width="10" stroke-linecap="round"/><path d="M76 66 L92 70 L94 52" stroke="#2f9e44" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`).join("")}`,
  },
  storyboard: {
    name: t("storyboard", "կադրաշար (սթորիբորդ)", "раскадровка"),
    svg: `${[[4, 8], [62, 8], [4, 64], [62, 64]].map(([x, y], i) => `<rect x="${x}" y="${y}" width="54" height="40" rx="3" fill="#fff" stroke="#1d1d24" stroke-width="2"/><text x="${x + 4}" y="${y + 52}" font-size="9" font-family="Nunito, sans-serif" fill="#64748b">${i + 1}</text>`).join("")}<circle cx="16" cy="38" r="6" fill="#e0262f"/><path d="M8 44 H54" stroke="#1d1d24"/><circle cx="96" cy="26" r="6" fill="#e0262f"/><path d="M66 44 H112" stroke="#1d1d24"/><path d="M92 20 l-12 -4" stroke="#999" stroke-dasharray="2 2"/><circle cx="31" cy="84" r="14" fill="#e0262f"/><circle cx="31" cy="84" r="4" fill="#fff"/><circle cx="86" cy="94" rx="9" r="7" fill="#e0262f"/><path d="M66 100 H112" stroke="#1d1d24"/><path d="M76 86 l6 4 M96 86 l-6 4" stroke="#999"/>`,
  },
  camera: {
    name: t("camera", "ֆոտոխցիկ", "фотоаппарат"),
    svg: `<rect x="12" y="34" width="96" height="66" rx="12" fill="#1d1d24"/><rect x="36" y="24" width="30" height="14" rx="4" fill="#1d1d24"/><circle cx="60" cy="67" r="24" fill="#3a3a46"/><circle cx="60" cy="67" r="16" fill="#4f7fd8"/><circle cx="54" cy="61" r="5" fill="#fff" opacity=".6"/><rect x="88" y="42" width="12" height="7" rx="2" fill="#ffd21f"/>`,
  },
  "film-strip": {
    name: t("film: 24 pictures a second", "կինո․ վայրկյանում 24 կադր", "кино: 24 кадра в секунду"),
    svg: `<rect x="0" y="28" width="120" height="64" fill="#1d1d24"/>${Array.from({ length: 10 }, (_, i) => `<rect x="${4 + i * 12}" y="32" width="6" height="6" rx="1" fill="#fff"/><rect x="${4 + i * 12}" y="82" width="6" height="6" rx="1" fill="#fff"/>`).join("")}${[0, 1, 2].map((i) => `<rect x="${6 + i * 38}" y="42" width="32" height="36" fill="#9ec9f0"/><circle cx="${14 + i * 38 + i * 6}" cy="${70 - i * 10}" r="6" fill="#e0262f"/>`).join("")}`,
  },
  "model-building": {
    name: t("architect's model", "ճարտարապետական մակետ", "архитектурный макет"),
    svg: `<path d="M8 92 L60 66 L112 92 L60 118Z" fill="#cfe8b8"/><path d="M34 80 L54 70 L74 80 L54 90Z" fill="#fff"/><path d="M34 80 V54 L54 64 V90Z" fill="#e2e8f0"/><path d="M54 64 L74 54 V80 L54 90Z" fill="#cbd5e1"/><path d="M34 54 L54 44 L74 54 L54 64Z" fill="#fff"/><path d="M78 92 L90 86 L102 92 L90 98Z" fill="#fff"/><path d="M78 92 V74 L90 80 V98Z" fill="#e2e8f0"/><path d="M90 80 L102 74 V92 L90 98Z" fill="#cbd5e1"/><path d="M78 74 L90 68 L102 74 L90 80Z" fill="#fff"/><circle cx="24" cy="92" r="6" fill="#2fbf71"/><circle cx="96" cy="104" r="5" fill="#2fbf71"/>`,
  },
  "park-plan": {
    name: t("plan of a park", "զբոսայգու հատակագիծ", "план парка"),
    svg: `<rect x="4" y="4" width="112" height="112" rx="6" fill="#a8dca0"/><path d="M4 60 H116 M60 4 V116" stroke="#f3e2c0" stroke-width="10"/><circle cx="60" cy="60" r="16" fill="#8fc9ef" stroke="#f3e2c0" stroke-width="4"/>${[[22, 22], [98, 22], [22, 98], [98, 98], [36, 36], [84, 84], [36, 84], [84, 36]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#2f7d32"/>`).join("")}<rect x="86" y="64" width="22" height="14" rx="3" fill="#ffd21f"/>`,
  },
  "room-plan": {
    name: t("room: plan and view", "սենյակ․ հատակագիծ և տեսք", "комната: план и вид"),
    svg: `<rect x="4" y="4" width="54" height="54" fill="#fff" stroke="#1d1d24" stroke-width="3"/><rect x="8" y="8" width="20" height="30" fill="#8fb8ef"/><rect x="38" y="36" width="16" height="18" fill="#c08850"/><path d="M4 26 V40" stroke="#fff" stroke-width="4"/><path d="M30 4 H50" stroke="#4fb3e8" stroke-width="5"/><path d="M64 110 L64 46 L116 30 V96Z" fill="#fdf1d6"/><path d="M64 110 L116 96 L116 120 H64Z" fill="#c08850"/><rect x="84" y="46" width="18" height="22" fill="#9ec9f0" transform="skewY(-17)" style="transform-origin:84px 46px"/><path d="M70 100 L96 92 V82 L70 88Z" fill="#8fb8ef"/>`,
  },
  frieze: {
    name: t("stone frieze with a grapevine", "քարե որմնազարդ խաղողի որթով", "каменный фриз с виноградной лозой"),
    svg: `<rect x="0" y="30" width="120" height="60" fill="#c9a28a"/><path d="M0 36 H120 M0 84 H120" stroke="#8a6650" stroke-width="3"/><path d="M0 60 C15 42 30 42 45 60 S75 78 90 60 S110 46 120 54" stroke="#6e4f3e" stroke-width="4" fill="none"/>${[[22, 50], [68, 70], [104, 50]].map(([x, y]) => [[0, 0], [6, 0], [3, 5], [-3, 5], [9, 5], [0, 10], [6, 10], [3, 15]].map(([dx, dy]) => `<circle cx="${x + dx - 3}" cy="${y + dy - 4}" r="3.2" fill="#8a6650"/>`).join("")).join("")}<path d="M44 58 C38 50 44 42 52 46 C56 50 52 56 44 58Z M90 62 C96 70 90 78 82 74 C78 70 82 64 90 62Z" fill="#8a6650"/>`,
  },
};
