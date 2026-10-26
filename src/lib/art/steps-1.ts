import type { Tr } from "./spec";

const t = (en: string, hy: string, ru: string): Tr => ({ en, hy, ru });

/**
 * Step-by-step drawings for the `steps` block, drawn in a 160 × 120 box.
 * A line step is drawn as a pencil line (the newest step in colour, as if drawing itself);
 * a `paint` step is a colour layer that goes under the lines; a `cover` paint step hides the lines.
 */
export type Step = { svg: string; cap: Tr; paint?: boolean; cover?: boolean };
export type StepGuide = { name: Tr; steps: Step[] };

const L = (svg: string, en: string, hy: string, ru: string): Step => ({ svg, cap: t(en, hy, ru) });
const P = (svg: string, en: string, hy: string, ru: string): Step => ({ svg, cap: t(en, hy, ru), paint: true });
const PAINT = ["Colour it in!", "Գունավորի՛ր։", "Раскрась!"] as const;

export const STEPS_1: Record<string, StepGuide> = {
  cat: {
    name: t("A cat from shapes", "Կատու ձևերից", "Кошка из фигур"),
    steps: [
      L(`<circle cx="62" cy="44" r="22"/>`, "A circle for the head.", "Շրջան՝ գլխի համար։", "Круг для головы."),
      L(`<path d="M44 32 L42 12 L58 24 M66 24 L82 12 L80 32"/>`, "Two triangles for the ears.", "Երկու եռանկյուն՝ ականջների համար։", "Два треугольника для ушей."),
      L(`<ellipse cx="88" cy="88" rx="38" ry="24"/>`, "A big oval for the body.", "Մեծ օվալ՝ մարմնի համար։", "Большой овал для тела."),
      L(`<path d="M124 84 C146 76 146 50 132 42"/><path d="M66 108 V112 M84 110 V114 M100 110 V114 M114 106 V110"/>`, "A long curve for the tail, little paws.", "Երկար կոր՝ պոչի համար, փոքրիկ թաթիկներ։", "Длинная дуга для хвоста, лапки."),
      L(`<circle cx="54" cy="42" r="3"/><circle cx="70" cy="42" r="3"/><path d="M58 52 L62 56 L66 52 M62 56 V60 M40 52 H20 M40 56 L22 62 M84 52 H104 M84 56 L102 62"/>`, "Eyes, nose and whiskers.", "Աչքեր, քիթ և բեղիկներ։", "Глаза, нос и усы."),
      P(`<circle cx="62" cy="44" r="22" fill="#ff9f43"/><path d="M44 32 L42 12 L58 24Z M66 24 L82 12 L80 32Z" fill="#ff9f43"/><ellipse cx="88" cy="88" rx="38" ry="24" fill="#ff9f43"/><path d="M70 74 Q88 64 106 74 M66 92 Q88 82 112 92" stroke="#e67e22" stroke-width="5" fill="none"/>`, ...PAINT),
    ],
  },
  bird: {
    name: t("A bird from shapes", "Թռչուն ձևերից", "Птица из фигур"),
    steps: [
      L(`<ellipse cx="78" cy="70" rx="34" ry="24"/>`, "An oval for the body.", "Օվալ՝ մարմնի համար։", "Овал для тела."),
      L(`<circle cx="112" cy="42" r="15"/>`, "A small circle for the head.", "Փոքր շրջան՝ գլխի համար։", "Маленький круг для головы."),
      L(`<path d="M126 38 L144 44 L126 48"/><circle cx="116" cy="40" r="2.5"/>`, "A triangle beak and an eye.", "Եռանկյուն կտուց և աչք։", "Клюв-треугольник и глаз."),
      L(`<path d="M60 64 C72 50 96 52 100 70 C88 78 70 76 60 64Z"/><path d="M46 62 L18 50 L24 68 L14 80 L46 76"/>`, "A wing and a tail.", "Թև և պոչ։", "Крыло и хвост."),
      L(`<path d="M74 94 V112 M88 94 V112 M68 112 H80 M82 112 H94"/>`, "Thin legs.", "Բարակ ոտքեր։", "Тонкие лапки."),
      P(`<ellipse cx="78" cy="70" rx="34" ry="24" fill="#4fb3e8"/><circle cx="112" cy="42" r="15" fill="#4fb3e8"/><path d="M126 38 L144 44 L126 48Z" fill="#ffb01f"/><path d="M60 64 C72 50 96 52 100 70 C88 78 70 76 60 64Z" fill="#1f5fbf"/><path d="M46 62 L18 50 L24 68 L14 80 L46 76Z" fill="#1f5fbf"/><ellipse cx="82" cy="80" rx="20" ry="10" fill="#ffd21f"/>`, ...PAINT),
    ],
  },
  fish: {
    name: t("A fish from shapes", "Ձուկ ձևերից", "Рыбка из фигур"),
    steps: [
      L(`<ellipse cx="72" cy="60" rx="44" ry="26"/>`, "An oval body.", "Օվալաձև մարմին։", "Овальное тело."),
      L(`<path d="M114 60 L146 36 L140 60 L146 84Z"/>`, "A triangle tail.", "Եռանկյուն պոչ։", "Хвост-треугольник."),
      L(`<path d="M62 36 C70 20 86 20 94 36 M68 84 L76 98 L86 84"/>`, "Fins on top and below.", "Լողակներ վերևում և ներքևում։", "Плавники сверху и снизу."),
      L(`<circle cx="46" cy="54" r="6"/><path d="M30 66 Q36 70 42 66"/><path d="M62 52 q6 6 0 12 M76 50 q6 8 0 16 M90 52 q6 6 0 12"/>`, "An eye, a mouth and scales.", "Աչք, բերան և թեփուկներ։", "Глаз, рот и чешуя."),
      P(`<ellipse cx="72" cy="60" rx="44" ry="26" fill="#ff8a1f"/><path d="M114 60 L146 36 L140 60 L146 84Z" fill="#e0442f"/><path d="M62 36 C70 20 86 20 94 36Z M68 84 L76 98 L86 84Z" fill="#e0442f"/><ellipse cx="68" cy="68" rx="30" ry="10" fill="#ffd21f"/>`, ...PAINT),
    ],
  },
  tree: {
    name: t("A tree grows from the ground up", "Ծառը աճում է գետնից վեր", "Дерево растёт от земли вверх"),
    steps: [
      L(`<path d="M10 112 H150"/><path d="M68 112 C72 90 72 70 74 50 M92 112 C88 90 86 70 86 50"/>`, "A trunk: wide at the bottom, thinner at the top.", "Բուն՝ ներքևում լայն, վերևում ավելի բարակ։", "Ствол: внизу шире, вверху тоньше."),
      L(`<path d="M74 50 L52 22 M86 50 L110 20 M80 52 L80 14"/>`, "Big branches grow out of the trunk.", "Բնից դուրս են գալիս մեծ ճյուղեր։", "Из ствола растут большие ветви."),
      L(`<path d="M62 34 L44 30 M58 28 L58 12 M100 30 L120 30 M104 26 L100 10 M80 30 L68 20 M80 26 L92 16"/>`, "Small branches grow out of big ones.", "Մեծ ճյուղերից աճում են փոքրերը։", "Из больших веток растут маленькие."),
      L(`<path d="M30 52 C14 36 30 8 54 14 C62 -2 98 -2 106 14 C132 8 148 36 130 52 C134 70 108 78 96 68 C88 80 70 80 62 68 C48 78 22 70 30 52Z"/>`, "A cloud-like crown over the branches.", "Ամպանման սաղարթ ճյուղերի վրա։", "Крона-облако над ветками."),
      P(`<path d="M30 52 C14 36 30 8 54 14 C62 -2 98 -2 106 14 C132 8 148 36 130 52 C134 70 108 78 96 68 C88 80 70 80 62 68 C48 78 22 70 30 52Z" fill="#6cc35a"/><path d="M40 40 C50 20 70 18 80 24 C70 30 60 40 40 40Z" fill="#9fe07a"/><path d="M68 112 C72 90 72 70 74 50 H86 C86 70 88 90 92 112Z" fill="#8b5a2b"/><path d="M10 112 H150 V120 H10Z" fill="#7ccf6a"/>`, ...PAINT),
    ],
  },
  person: {
    name: t("A person in five steps", "Մարդը հինգ քայլով", "Человек за пять шагов"),
    steps: [
      L(`<circle cx="80" cy="22" r="12"/>`, "A circle for the head.", "Շրջան՝ գլխի համար։", "Круг для головы."),
      L(`<path d="M80 34 V40 M66 40 H94 L98 76 H62Z"/>`, "A neck and a body (a trapezoid).", "Պարանոց և իրան (սեղան)։", "Шея и туловище (трапеция)."),
      L(`<path d="M66 42 L52 70 L48 78 M94 42 L110 66 L118 60"/>`, "Arms: they reach the middle of the thigh.", "Ձեռքեր՝ հասնում են ազդրի կեսին։", "Руки: доходят до середины бедра."),
      L(`<path d="M70 76 L68 112 L58 114 M90 76 L94 112 L104 114"/>`, "Legs are longer than the body.", "Ոտքերն ավելի երկար են, քան իրանը։", "Ноги длиннее туловища."),
      L(`<circle cx="76" cy="20" r="1.6"/><circle cx="84" cy="20" r="1.6"/><path d="M76 27 Q80 30 84 27 M68 14 C70 4 90 4 92 14"/>`, "A face and hair.", "Դեմք և մազեր։", "Лицо и волосы."),
      P(`<circle cx="80" cy="22" r="12" fill="#f2c4a4"/><path d="M68 14 C70 4 90 4 92 14 C86 10 74 10 68 14Z" fill="#6b3a1a"/><path d="M66 40 H94 L98 76 H62Z" fill="#e0262f"/><path d="M70 76 L68 112 H76 L80 80 L86 112 H94 L90 76Z" fill="#1f5fbf"/>`, ...PAINT),
    ],
  },
  house: {
    name: t("A house step by step", "Տուն քայլ առ քայլ", "Дом шаг за шагом"),
    steps: [
      L(`<path d="M10 112 H150"/><rect x="40" y="56" width="80" height="56"/>`, "A big rectangle for the walls.", "Մեծ ուղղանկյուն՝ պատերի համար։", "Большой прямоугольник для стен."),
      L(`<path d="M32 58 L80 18 L128 58Z"/>`, "A triangle roof, a bit wider than the walls.", "Եռանկյուն տանիք՝ պատերից մի քիչ լայն։", "Крыша-треугольник чуть шире стен."),
      L(`<rect x="70" y="80" width="20" height="32"/><rect x="48" y="66" width="16" height="16"/><rect x="96" y="66" width="16" height="16"/><path d="M56 66 V82 M48 74 H64 M104 66 V82 M96 74 H112"/>`, "A door and windows.", "Դուռ և պատուհաններ։", "Дверь и окна."),
      L(`<path d="M104 38 V22 H114 V46"/><path d="M110 18 C106 10 116 8 112 0"/>`, "A chimney with smoke.", "Ծխնելույզ ծխով։", "Труба с дымком."),
      P(`<rect x="40" y="56" width="80" height="56" fill="#ffd59a"/><path d="M32 58 L80 18 L128 58Z" fill="#e0262f"/><rect x="70" y="80" width="20" height="32" fill="#8b5a2b"/><rect x="48" y="66" width="16" height="16" fill="#9ec9f0"/><rect x="96" y="66" width="16" height="16" fill="#9ec9f0"/><path d="M104 38 V22 H114 V46Z" fill="#a0522d"/><rect x="0" y="112" width="160" height="8" fill="#7ccf6a"/>`, ...PAINT),
    ],
  },
  snowflake: {
    name: t("A snowflake with six rays", "Վեցճառագայթ ձյան փաթիլ", "Снежинка с шестью лучами"),
    steps: [
      L(`<path d="M80 10 V110"/>`, "One straight line.", "Մեկ ուղիղ գիծ։", "Одна прямая линия."),
      L(`<path d="M37 35 L123 85 M37 85 L123 35"/>`, "Two more crossing it: now six rays.", "Եվս երկուսը՝ խաչվող․ արդեն վեց ճառագայթ։", "Ещё две накрест: шесть лучей."),
      L(`${[0, 60, 120, 180, 240, 300].map((a) => `<path transform="rotate(${a} 80 60)" d="M80 30 L70 20 M80 30 L90 20"/>`).join("")}`, "A little V on every ray.", "Ամեն ճառագայթին՝ փոքրիկ V։", "На каждом луче галочка."),
      L(`${[0, 60, 120, 180, 240, 300].map((a) => `<path transform="rotate(${a} 80 60)" d="M80 44 L74 38 M80 44 L86 38"/><circle transform="rotate(${a} 80 60)" cx="80" cy="10" r="3"/>`).join("")}`, "Smaller V's and dots: all rays the same!", "Ավելի փոքր V-եր և կետեր․ բոլոր ճառագայթները նույնն են։", "Галочки поменьше и точки: все лучи одинаковые!"),
      { ...P(`<rect width="160" height="120" fill="#1c2f5e"/><g stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none"><path d="M80 10 V110 M37 35 L123 85 M37 85 L123 35"/>${[0, 60, 120, 180, 240, 300].map((a) => `<path transform="rotate(${a} 80 60)" d="M80 30 L70 20 M80 30 L90 20 M80 44 L74 38 M80 44 L86 38"/><circle transform="rotate(${a} 80 60)" cx="80" cy="10" r="3" fill="#fff"/>`).join("")}</g>`, "On dark paper white looks magical.", "Մուգ թղթի վրա սպիտակը կախարդական է։", "На тёмной бумаге белое выглядит волшебно."), cover: true },
    ],
  },
  butterfly: {
    name: t("A symmetrical butterfly", "Համաչափ թիթեռ", "Симметричная бабочка"),
    steps: [
      L(`<path d="M80 6 V114" stroke-dasharray="4 5"/><ellipse cx="80" cy="64" rx="5" ry="30"/>`, "An axis and a long body.", "Առանցք և երկար մարմին։", "Ось и длинное тело."),
      L(`<path d="M76 48 C60 10 18 12 22 42 C24 60 50 66 76 60 M84 48 C100 10 142 12 138 42 C136 60 110 66 84 60"/>`, "Upper wings: the same on both sides.", "Վերին թևեր՝ երկու կողմում նույնը։", "Верхние крылья: одинаковые с двух сторон."),
      L(`<path d="M76 64 C50 66 34 92 46 104 C58 112 72 92 78 72 M84 64 C110 66 126 92 114 104 C102 112 88 92 82 72"/>`, "Smaller lower wings.", "Ավելի փոքր ստորին թևեր։", "Нижние крылья поменьше."),
      L(`<circle cx="42" cy="38" r="8"/><circle cx="118" cy="38" r="8"/><circle cx="56" cy="92" r="5"/><circle cx="104" cy="92" r="5"/><path d="M78 34 C74 22 66 16 60 14 M82 34 C86 22 94 16 100 14"/>`, "A pattern: what is on the left is on the right.", "Նախշ․ ինչ ձախում է, այն էլ աջում։", "Узор: что слева, то и справа."),
      P(`<path d="M76 48 C60 10 18 12 22 42 C24 60 50 66 76 60Z M84 48 C100 10 142 12 138 42 C136 60 110 66 84 60Z" fill="#ff8a1f"/><path d="M76 64 C50 66 34 92 46 104 C58 112 72 92 78 72Z M84 64 C110 66 126 92 114 104 C102 112 88 92 82 72Z" fill="#7d2e8f"/><circle cx="42" cy="38" r="8" fill="#ffd21f"/><circle cx="118" cy="38" r="8" fill="#ffd21f"/><ellipse cx="80" cy="64" rx="5" ry="30" fill="#1d1d24"/>`, ...PAINT),
    ],
  },
  border: {
    name: t("A border (pattern in a strip)", "Եզրազարդ (նախշ շերտում)", "Бордюр (узор в полосе)"),
    steps: [
      L(`<path d="M6 36 H154 M6 84 H154"/>`, "Two lines make a strip.", "Երկու գիծ կազմում են շերտ։", "Две линии образуют полосу."),
      L(`<path d="M30 36 V84 M54 36 V84 M78 36 V84 M102 36 V84 M126 36 V84" stroke-dasharray="3 4"/>`, "Mark equal cells (lightly!).", "Նշի՛ր հավասար վանդակներ (թեթև)։", "Разметь равные клетки (легко!)."),
      L(`${[18, 66, 114].map((x) => `<circle cx="${x}" cy="60" r="9"/>`).join("")}${[42, 90, 138].map((x) => `<path d="M${x - 9} 70 L${x} 48 L${x + 9} 70Z"/>`).join("")}`, "Repeat: circle, triangle, circle, triangle…", "Կրկնի՛ր․ շրջան, եռանկյուն, շրջան, եռանկյուն…", "Повторяй: круг, треугольник, круг, треугольник…"),
      L(`${[6, 30, 54, 78, 102, 126].map((x) => `<path d="M${x} 36 L${x + 12} 44 L${x + 24} 36 M${x} 84 L${x + 12} 76 L${x + 24} 84"/>`).join("")}`, "Add a little wave along the edges.", "Եզրերին ավելացրու՛ փոքր ալիք։", "Добавь волну по краям."),
      P(`<rect x="6" y="36" width="148" height="48" fill="#fff4d6"/>${[18, 66, 114].map((x) => `<circle cx="${x}" cy="60" r="9" fill="#e0262f"/>`).join("")}${[42, 90, 138].map((x) => `<path d="M${x - 9} 70 L${x} 48 L${x + 9} 70Z" fill="#1f5fbf"/>`).join("")}`, "Use the same colour for the same shape.", "Նույն ձևը՝ նույն գույնով։", "Одинаковые фигуры — одним цветом."),
    ],
  },
  "pomegranate-border": {
    name: t("A pomegranate border", "Նռնազարդ եզրազարդ", "Бордюр с гранатами"),
    steps: [
      L(`<path d="M4 30 H156 M4 90 H156"/>`, "A strip.", "Շերտ։", "Полоса."),
      L(`<path d="M4 60 C24 40 44 40 60 60 S100 80 120 60 S150 44 156 52"/>`, "A wavy stem: the line of life.", "Ալիքաձև ցողուն՝ կյանքի գիծ։", "Волнистый стебель — линия жизни."),
      L(`<circle cx="40" cy="48" r="11"/><circle cx="120" cy="48" r="11"/><path d="M34 38 L36 32 L40 36 L44 32 L46 38 M114 38 L116 32 L120 36 L124 32 L126 38"/><circle cx="80" cy="74" r="11"/><path d="M74 84 L76 90 L80 86 L84 90 L86 84"/>`, "Pomegranates with little crowns.", "Նռներ՝ փոքրիկ թագերով։", "Гранаты с коронками."),
      L(`<path d="M60 60 C56 50 64 44 70 50 C68 56 64 60 60 60Z M100 70 C104 80 96 84 92 78 C94 72 96 70 100 70Z M14 52 C10 42 18 38 24 44Z M142 56 C146 66 138 70 134 64Z"/>`, "Leaves between the fruits.", "Տերևներ՝ պտուղների միջև։", "Листья между плодами."),
      P(`<rect x="4" y="30" width="152" height="60" fill="#f6ecd6"/>${[[40, 48], [120, 48], [80, 74]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="11" fill="#c8202a"/>`).join("")}<path d="M60 60 C56 50 64 44 70 50 C68 56 64 60 60 60Z M100 70 C104 80 96 84 92 78 C94 72 96 70 100 70Z M14 52 C10 42 18 38 24 44Z M142 56 C146 66 138 70 134 64Z" fill="#3f8f4a"/>`, ...PAINT),
    ],
  },
  hedgehog: {
    name: t("A hedgehog", "Ոզնի", "Ёжик"),
    steps: [
      L(`<path d="M20 90 C20 50 60 34 100 40 C126 44 142 66 140 90Z"/>`, "A half-oval body.", "Կիսաօվալ մարմին։", "Тело — пол-овала."),
      L(`<path d="M140 90 L154 84 L140 76"/><circle cx="154" cy="84" r="3"/><circle cx="128" cy="72" r="2.5"/>`, "A pointed nose and a bead eye.", "Սուր քիթ և ուլունքաչք։", "Острый нос и глаз-бусинка."),
      L(`${Array.from({ length: 12 }, (_, i) => { const x = 28 + i * 9; const y = 86 - Math.sin((i / 11) * Math.PI) * 44; return `<path d="M${x} ${y} L${x - 6} ${y - 18}"/>`; }).join("")}`, "Spikes: short lines, all in one direction.", "Փշեր՝ կարճ գծեր, բոլորը նույն ուղղությամբ։", "Иголки: короткие штрихи в одну сторону."),
      L(`<path d="M40 90 V100 M60 90 V100 M100 90 V100 M120 90 V100"/>`, "Little legs.", "Փոքրիկ թաթեր։", "Лапки."),
      P(`<path d="M20 90 C20 50 60 34 100 40 C126 44 142 66 140 90Z" fill="#8b5a2b"/><path d="M110 50 C128 56 140 70 140 90 H108Z" fill="#e3b08f"/><path d="M20 90 H150" stroke="#2f9e44" stroke-width="4"/>`, ...PAINT),
    ],
  },
  "fold-square": {
    name: t("A square from a rectangle", "Քառակուսի ուղղանկյունից", "Квадрат из прямоугольника"),
    steps: [
      L(`<rect x="30" y="10" width="70" height="100"/>`, "Take a rectangular sheet.", "Վերցրու՛ ուղղանկյուն թերթ։", "Возьми прямоугольный лист."),
      L(`<path d="M30 10 L100 80" stroke-dasharray="5 4"/><path d="M100 10 L30 10 L100 80" />`, "Fold one corner down to the side.", "Ծալի՛ր մեկ անկյունը մինչև կողը։", "Согни уголок к боковой стороне."),
      L(`<path d="M30 80 H100" stroke-dasharray="2 3"/><path d="M20 90 L110 90"/><path d="M112 84 l6 6 l-6 6"/>`, "Cut off the strip below.", "Կտրի՛ր ներքևի շերտը։", "Отрежь полоску снизу."),
      L(`<rect x="110" y="10" width="44" height="44"/><path d="M110 10 L154 54" stroke-dasharray="5 4"/>`, "Unfold: a square with a diagonal fold!", "Բացի՛ր․ քառակուսի՝ անկյունագծային ծալով։", "Разверни: квадрат с диагональным сгибом!"),
      P(`<rect x="110" y="10" width="44" height="44" fill="#ffd21f"/><rect x="30" y="80" width="70" height="30" fill="#e0e0e0"/>`, "Now you can fold anything.", "Հիմա կարող ես ամեն ինչ ծալել։", "Теперь можно складывать что угодно."),
    ],
  },
  wave: {
    name: t("How to paint a wave", "Ինչպես նկարել ալիք", "Как нарисовать волну"),
    steps: [
      L(`<path d="M0 50 H160"/>`, "A low horizon line.", "Ցածր հորիզոնի գիծ։", "Низкая линия горизонта."),
      L(`<path d="M0 104 C30 100 50 84 64 64 C74 50 92 44 106 50 C96 54 92 62 98 70 C110 82 130 86 160 84"/>`, "The big curve of the wave.", "Ալիքի մեծ կորը։", "Большая дуга волны."),
      L(`<path d="M106 50 C114 46 122 50 122 58 C116 54 110 56 108 62"/><path d="M64 64 C70 70 76 74 86 74"/>`, "The crest curls over.", "Կատարը ոլորվում է։", "Гребень закручивается."),
      L(`<path d="M96 52 q4 -6 8 0 q4 -6 8 0 M88 58 q3 -4 6 0 M110 64 q3 -4 6 0 M30 100 q6 -4 12 0 M130 86 q6 -4 12 0"/>`, "Foam: small white curls.", "Փրփուր՝ փոքրիկ սպիտակ գանգուրներ։", "Пена: маленькие белые завитки."),
      P(`<rect width="160" height="50" fill="#f6d68a"/><rect y="50" width="160" height="70" fill="#2e6f73"/><path d="M0 104 C30 100 50 84 64 64 C74 50 92 44 106 50 C96 54 92 62 98 70 C110 82 130 86 160 84 V120 H0Z" fill="#173f4f"/><path d="M64 64 C74 50 92 44 106 50 C96 54 92 62 98 70 C88 72 74 70 64 64Z" fill="#7fb7a4"/>`, "Light shines through the thin top of the wave.", "Լույսը թափանցում է ալիքի բարակ գագաթով։", "Свет просвечивает сквозь тонкий гребень."),
    ],
  },
  apple: {
    name: t("A round fruit with light and shadow", "Կլոր միրգ՝ լույսով և ստվերով", "Круглый фрукт со светом и тенью"),
    steps: [
      L(`<circle cx="76" cy="62" r="36"/>`, "A light circle.", "Թեթև շրջան։", "Лёгкий круг."),
      L(`<path d="M64 28 C70 32 82 32 88 28 M76 30 C76 20 80 14 86 10"/><path d="M84 18 C92 8 106 10 108 16 C100 22 90 22 84 18Z"/>`, "A dent, a stem and a leaf.", "Փոսիկ, կոթուն և տերև։", "Ямка, хвостик и листик."),
      L(`<ellipse cx="60" cy="48" rx="7" ry="10"/>`, "Leave a white light spot (highlight).", "Թող սպիտակ լուսավոր կետ (փայլ)։", "Оставь белый блик."),
      L(`<path d="M104 46 C114 70 102 92 80 98"/><ellipse cx="94" cy="100" rx="40" ry="7"/>`, "The shadow side and the cast shadow.", "Ստվերային կողմ և ընկնող ստվեր։", "Теневая сторона и падающая тень."),
      P(`<ellipse cx="94" cy="100" rx="40" ry="7" fill="#1e1b4b" opacity=".25"/><circle cx="76" cy="62" r="36" fill="#e0262f"/><path d="M104 46 C114 70 102 92 80 98 C100 92 112 70 104 46Z M98 40 C112 60 104 90 76 98 C98 98 116 78 112 56 C110 48 104 42 98 40Z" fill="#8a1a1f"/><ellipse cx="60" cy="48" rx="7" ry="10" fill="#fff" opacity=".85"/><path d="M84 18 C92 8 106 10 108 16 C100 22 90 22 84 18Z" fill="#2f9e44"/>`, "Light, shade and shadow make it round.", "Լույսը, կիսաստվերն ու ստվերը այն կլոր են դարձնում։", "Свет, тень и падающая тень делают его объёмным."),
    ],
  },
  leaf: {
    name: t("A leaf study", "Տերևի էտյուդ", "Этюд листа"),
    steps: [
      L(`<path d="M30 104 C60 80 90 50 128 16"/>`, "The main vein: one smooth curve.", "Գլխավոր ջիղը՝ մեկ սահուն կոր։", "Главная жилка — одна плавная линия."),
      L(`<path d="M44 92 C30 60 60 22 128 16 C120 60 92 98 44 92Z"/>`, "The outline around it.", "Եզրագիծը դրա շուրջ։", "Контур вокруг неё."),
      L(`<path d="M60 80 L44 62 M74 66 L58 44 M90 50 L78 30 M104 36 L98 22 M60 80 L84 84 M74 66 L102 70 M90 50 L114 50 M104 36 L122 34"/>`, "Side veins go out like a fishbone.", "Կողային ջղերը ձկան ոսկորի պես են։", "Боковые жилки — как рыбья косточка."),
      L(`<path d="M50 88 l-4 3 M66 92 l-2 4 M88 84 l2 4 M112 64 l4 2 M120 44 l4 1"/>`, "Small teeth on the edge.", "Եզրի փոքրիկ ատամիկներ։", "Мелкие зубчики по краю."),
      P(`<path d="M44 92 C30 60 60 22 128 16 C120 60 92 98 44 92Z" fill="#9ccc2b"/><path d="M44 92 C30 60 60 22 128 16 C90 40 64 70 44 92Z" fill="#ffd21f" opacity=".7"/><path d="M100 64 C110 52 120 36 128 16 C120 60 92 98 60 92 C80 86 92 76 100 64Z" fill="#e0602f" opacity=".7"/>`, "Autumn: several colours in one leaf.", "Աշուն․ մեկ տերևում մի քանի գույն։", "Осень: несколько цветов в одном листе."),
    ],
  },
  teddy: {
    name: t("A toy bear from shapes", "Խաղալիք արջուկ ձևերից", "Игрушечный мишка из форм"),
    steps: [
      L(`<circle cx="80" cy="34" r="20"/><ellipse cx="80" cy="80" rx="26" ry="30"/>`, "Two shapes: a circle head, an oval body.", "Երկու ձև․ շրջան գլուխ, օվալ մարմին։", "Две формы: круг-голова и овал-тело."),
      L(`<circle cx="62" cy="18" r="8"/><circle cx="98" cy="18" r="8"/>`, "Round ears.", "Կլոր ականջներ։", "Круглые ушки."),
      L(`<ellipse cx="50" cy="70" rx="9" ry="16" transform="rotate(30 50 70)"/><ellipse cx="110" cy="70" rx="9" ry="16" transform="rotate(-30 110 70)"/><ellipse cx="62" cy="108" rx="12" ry="9"/><ellipse cx="98" cy="108" rx="12" ry="9"/>`, "Oval paws.", "Օվալաձև թաթեր։", "Овальные лапы."),
      L(`<ellipse cx="80" cy="40" rx="9" ry="7"/><circle cx="80" cy="37" r="2.5"/><circle cx="72" cy="28" r="2"/><circle cx="88" cy="28" r="2"/><circle cx="80" cy="84" r="10" stroke-dasharray="3 3"/>`, "A muzzle, eyes and a patch.", "Դնչիկ, աչքեր և կարկատան։", "Мордочка, глаза и заплатка."),
      P(`<circle cx="62" cy="18" r="8" fill="#c08850"/><circle cx="98" cy="18" r="8" fill="#c08850"/><ellipse cx="50" cy="70" rx="9" ry="16" transform="rotate(30 50 70)" fill="#c08850"/><ellipse cx="110" cy="70" rx="9" ry="16" transform="rotate(-30 110 70)" fill="#c08850"/><ellipse cx="62" cy="108" rx="12" ry="9" fill="#c08850"/><ellipse cx="98" cy="108" rx="12" ry="9" fill="#c08850"/><ellipse cx="80" cy="80" rx="26" ry="30" fill="#d9a066"/><circle cx="80" cy="34" r="20" fill="#d9a066"/><ellipse cx="80" cy="40" rx="9" ry="7" fill="#f3d2a2"/><circle cx="80" cy="84" r="10" fill="#8fb8ef"/>`, ...PAINT),
    ],
  },
  matryoshka: {
    name: t("Drawing a matryoshka", "Մատրյոշկա նկարելը", "Рисуем матрёшку"),
    steps: [
      L(`<path d="M80 6 C98 6 104 20 100 34 C116 48 118 76 114 96 C110 110 98 116 80 116 C62 116 50 110 46 96 C42 76 44 48 60 34 C56 20 62 6 80 6Z"/>`, "The outline: a small egg on a big one.", "Եզրագիծ․ փոքր ձու մեծի վրա։", "Контур: маленькое яйцо на большом."),
      L(`<ellipse cx="80" cy="30" rx="15" ry="14"/>`, "An oval face.", "Օվալաձև դեմք։", "Овал лица."),
      L(`<path d="M64 26 C68 12 92 12 96 26"/><path d="M66 44 L60 52 M94 44 L100 52"/>`, "A kerchief around the face.", "Գլխաշոր դեմքի շուրջ։", "Платок вокруг лица."),
      L(`<ellipse cx="80" cy="84" rx="22" ry="26"/><circle cx="80" cy="82" r="8"/>${[0, 60, 120, 180, 240, 300].map((a) => `<ellipse transform="rotate(${a} 80 82)" cx="80" cy="68" rx="4" ry="6"/>`).join("")}`, "An apron with a big flower.", "Գոգնոց՝ մեծ ծաղկով։", "Фартук с большим цветком."),
      L(`<circle cx="74" cy="30" r="1.5"/><circle cx="86" cy="30" r="1.5"/><circle cx="70" cy="35" r="3"/><circle cx="90" cy="35" r="3"/><path d="M77 38 Q80 40 83 38"/>`, "Eyes, rosy cheeks, a little mouth.", "Աչքեր, վարդագույն այտեր, փոքրիկ բերան։", "Глаза, румяные щёки, ротик."),
      P(`<path d="M80 6 C98 6 104 20 100 34 C116 48 118 76 114 96 C110 110 98 116 80 116 C62 116 50 110 46 96 C42 76 44 48 60 34 C56 20 62 6 80 6Z" fill="#d22a1e"/><ellipse cx="80" cy="30" rx="15" ry="14" fill="#fbe3d0"/><ellipse cx="80" cy="84" rx="22" ry="26" fill="#fff4d6"/><circle cx="80" cy="82" r="8" fill="#e0262f"/>${[0, 60, 120, 180, 240, 300].map((a) => `<ellipse transform="rotate(${a} 80 82)" cx="80" cy="68" rx="4" ry="6" fill="#ffd21f"/>`).join("")}<circle cx="70" cy="35" r="3" fill="#f48fb1"/><circle cx="90" cy="35" r="3" fill="#f48fb1"/>`, ...PAINT),
    ],
  },
  "khokhloma-berry": {
    name: t("Khokhloma: stem, berries, leaves", "Խոխլոմա․ ցողուն, հատապտուղներ, տերևներ", "Хохлома: стебель, ягоды, листья"),
    steps: [
      L(`<path d="M10 100 C40 100 50 60 80 60 C110 60 120 30 150 24"/>`, "The main stem: a smooth wavy line.", "Գլխավոր ցողուն՝ սահուն ալիքաձև գիծ։", "Главный стебель — плавная волнистая линия."),
      L(`<path d="M44 78 C40 64 46 54 56 50 M100 48 C104 36 114 32 122 34 M66 62 C70 76 80 82 90 82"/>`, "Small curls (kudrina) grow from it.", "Դրանից աճում են փոքրիկ գանգուրներ (կուդրինա)։", "От него растут завитки (кудрина)."),
      L(`${[[56, 46], [62, 40], [50, 40], [124, 30], [130, 36], [92, 84], [98, 78]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5"/>`).join("")}`, "Berries in little groups.", "Հատապտուղներ փոքր խմբերով։", "Ягоды гроздьями."),
      L(`<path d="M30 92 q6 -12 14 -6 q-6 8 -14 6Z M76 62 q4 -14 14 -10 q-4 10 -14 10Z M112 42 q8 -10 14 -2 q-8 6 -14 2Z M136 26 q2 -10 10 -8 q-2 8 -10 8Z"/>`, "Leaves: one brush stroke each.", "Տերևներ՝ ամեն մեկը մեկ վրձնահարվածով։", "Листья: каждый одним мазком."),
      { ...P(`<rect width="160" height="120" fill="#1b1b1b"/><path d="M10 100 C40 100 50 60 80 60 C110 60 120 30 150 24" stroke="#e8b83a" stroke-width="4" fill="none"/>${[[56, 46], [62, 40], [50, 40], [124, 30], [130, 36], [92, 84], [98, 78]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#d22a1e"/>`).join("")}<path d="M30 92 q6 -12 14 -6 q-6 8 -14 6Z M76 62 q4 -14 14 -10 q-4 10 -14 10Z M112 42 q8 -10 14 -2 q-8 6 -14 2Z M136 26 q2 -10 10 -8 q-2 8 -10 8Z" fill="#e8b83a"/>`, "Gold, red and black: the colours of Khokhloma.", "Ոսկի, կարմիր և սև՝ Խոխլոմայի գույները։", "Золото, красный и чёрный — цвета Хохломы."), cover: true },
    ],
  },
  interlace: {
    name: t("Interlace: over and under", "Հյուսվածք․ վերևից և ներքևից", "Плетёнка: сверху и снизу"),
    steps: [
      L(`<path d="M4 60 C24 30 44 30 64 60 S104 90 124 60 S150 36 156 44"/>`, "A wavy line.", "Ալիքաձև գիծ։", "Волнистая линия."),
      L(`<path d="M4 60 C24 90 44 90 64 60 S104 30 124 60 S150 84 156 76"/>`, "A second wave, mirrored: they cross.", "Երկրորդ ալիքը՝ հայելային․ դրանք խաչվում են։", "Вторая волна, зеркальная: они пересекаются."),
      L(`<path d="M4 52 C24 22 44 22 64 52 M64 68 C84 98 104 98 124 68 M4 68 C24 98 44 98 64 68 M64 52 C84 22 104 22 124 52"/>`, "Draw each line as a ribbon (two lines).", "Ամեն գիծ դարձրու ժապավեն (երկու գիծ)։", "Каждую линию сделай лентой (две линии)."),
      P(`<path d="M4 60 C24 30 44 30 64 60 S104 90 124 60 S150 36 156 44" stroke="#8a6650" stroke-width="14" fill="none"/><path d="M4 60 C24 90 44 90 64 60 S104 30 124 60 S150 84 156 76" stroke="#8a6650" stroke-width="14" fill="none"/><path d="M4 60 C24 90 44 90 64 60" stroke="#c9a28a" stroke-width="9" fill="none"/><path d="M64 60 C84 30 104 30 124 60" stroke="#c9a28a" stroke-width="9" fill="none"/><path d="M57 50 L71 70" stroke="#8a6650" stroke-width="14"/><path d="M58 51 L70 69" stroke="#c9a28a" stroke-width="9"/>`, "At every crossing one ribbon goes over, the next under.", "Ամեն խաչմերուկում մի ժապավենը վերևից է, հաջորդը՝ ներքևից։", "На каждом пересечении одна лента сверху, следующая снизу."),
    ],
  },
  mask: {
    name: t("A theatre mask", "Թատերական դիմակ", "Театральная маска"),
    steps: [
      L(`<path d="M30 20 C60 8 100 8 130 20 C132 70 112 106 80 112 C48 106 28 70 30 20Z"/>`, "The mask shape.", "Դիմակի ձևը։", "Форма маски."),
      L(`<path d="M44 44 C52 34 68 36 72 46 C62 52 50 52 44 44Z M88 46 C92 36 108 34 116 44 C110 52 98 52 88 46Z"/>`, "Eye holes.", "Աչքերի անցքեր։", "Прорези для глаз."),
      L(`<path d="M56 78 C66 96 94 96 104 78 C92 84 68 84 56 78Z"/><path d="M40 34 C50 24 66 26 72 32 M88 32 C94 26 110 24 120 34"/>`, "A big smile and brows: a merry character.", "Մեծ ժպիտ և հոնքեր՝ ուրախ կերպար։", "Широкая улыбка и брови — весёлый характер."),
      L(`<path d="M30 20 L18 4 L40 14 M130 20 L142 4 L120 14"/><circle cx="80" cy="22" r="6"/>`, "Decorations: horns, a jewel.", "Զարդեր՝ եղջյուրներ, գոհար։", "Украшения: рожки, камень."),
      P(`<path d="M30 20 C60 8 100 8 130 20 C132 70 112 106 80 112 C48 106 28 70 30 20Z" fill="#ffd21f"/><path d="M30 20 L18 4 L40 14Z M130 20 L142 4 L120 14Z" fill="#e0262f"/><circle cx="80" cy="22" r="6" fill="#1f5fbf"/><path d="M56 78 C66 96 94 96 104 78 C92 84 68 84 56 78Z" fill="#e0262f"/><path d="M36 60 C40 70 48 72 52 66 M108 66 C112 72 120 70 124 60" stroke="#ff8a1f" stroke-width="5" fill="none"/>`, ...PAINT),
    ],
  },
};
