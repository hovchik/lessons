"use client";

import type { ArtLang, Tr } from "@/lib/art/spec";
import { L, t } from "../labels";
import { ease } from "./draw";
import type { Mech } from "./types";

/* Step-by-step technology: folding, modelling, sewing and making, grades 1–7. */

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
type Pt = [number, number];
const mix = (a: Pt, b: Pt, k: number): Pt => [lerp(a[0], b[0], k), lerp(a[1], b[1], k)];
const pts = (ps: Pt[]) => ps.map((q) => q.join(",")).join(" ");
const K = (p: number) => ease(Math.min(1, p * 1.5));

const Tx = ({ x, y, s, lang, size = 9, fill = "#1e1b4b", anchor = "middle", w = 800 }: { x: number; y: number; s: Tr; lang: ArtLang; size?: number; fill?: string; anchor?: "start" | "middle" | "end"; w?: number }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={w} fill={fill}>
    {L(s, lang).split("|").map((line, k) => <tspan key={k} x={x} dy={k ? size * 1.15 : 0}>{line}</tspan>)}
  </text>
);

const Arrow = ({ d, c = "#7c3aed" }: { d: string; c?: string }) => (
  <g>
    <defs>
      <marker id={`tech-arr-${c.slice(1)}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 Z" fill={c} />
      </marker>
    </defs>
    <path d={d} fill="none" stroke={c} strokeWidth="2" strokeDasharray="4 3" markerEnd={`url(#tech-arr-${c.slice(1)})`} />
  </g>
);

/* ---------------- grade 1: folding a paper cup ---------------- */

/* Worked out on a triangle A(−70,0) B(70,0) C(0,70): the right corner B lands on the left side at P, with its top edge level. */
const CX = (x: number) => 160 + x * 1.45;
const CY = (y: number) => 192 - y * 1.45;
const C = (q: Pt): Pt => [CX(q[0]), CY(q[1])];
const A: Pt = [-70, 0], B: Pt = [70, 0], TOP: Pt = [0, 70];
const R: Pt = [12, 0], Q: Pt = [29, 41], P: Pt = [-29, 41], R2: Pt = [-12, 0];
const WOOD_T = "#b45309";
const PAPER = "#fca5a5", FLAP = "#f87171", LINE = "#b91c1c";
const poly = (ps: Pt[], fill: string, k = 0) => <polygon key={k} points={pts(ps.map(C))} fill={fill} stroke={LINE} strokeWidth="1.5" strokeLinejoin="round" />;

const cup: Mech = {
  title: t("Folding a paper cup", "Թղթե բաժակի ծալում", "Складываем бумажный стаканчик"),
  hint: t("Fold along with the pictures, using a square sheet.", "Ծալի՛ր նկարների հետ միասին՝ քառակուսի թերթով։", "Складывай вместе с картинками из квадратного листа."),
  caps: [
    t("Take a square sheet and fold it along the diagonal, corner to corner.", "Վերցրու քառակուսի թերթ և ծալի՛ր անկյունագծով՝ անկյունն անկյանը։", "Возьми квадратный лист и сложи его по диагонали, уголок к уголку."),
    t("You get a triangle. Turn it so that the fold is at the bottom and the open corners point up.", "Ստացվում է եռանկյունի։ Շրջի՛ր այնպես, որ ծալքը ներքևում լինի, իսկ բաց անկյունները՝ վերևում։", "Получился треугольник. Поверни его так, чтобы сгиб был внизу, а открытые уголки смотрели вверх."),
    t("Fold the right corner to the left side, so that the top edge of the flap lies straight across.", "Աջ անկյունը ծալի՛ր դեպի ձախ կողմը, այնպես, որ ծալված մասի վերին եզրն ուղիղ, հորիզոնական լինի։", "Загни правый уголок к левой стороне так, чтобы верхний край клапана лёг ровно поперёк."),
    t("Fold the left corner across to the right side in the same way.", "Նույն կերպ ձախ անկյունը ծալի՛ր դեպի աջ կողմը։", "Так же загни левый уголок к правой стороне."),
    t("Two pointed corners are left at the top. Fold one down at the front and the other down at the back.", "Վերևում մնացել է երկու սուր անկյուն։ Մեկը ծալի՛ր առջևից ներքև, մյուսը՝ հետևից։", "Сверху осталось два острых уголка. Один загни вниз спереди, другой — сзади."),
    t("Open the cup out with your fingers. It is ready, and it can even hold water for a little while!", "Մատներով բացի՛ր բաժակը։ Պատրաստ է, և այն նույնիսկ կարող է մի քիչ ժամանակ ջուր պահել։", "Раскрой стаканчик пальцами. Готово, и он даже может недолго держать воду!"),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    if (i === 0) {
      const corner = mix([215, 55], [105, 165], k);
      return (
        <g>
          <rect x="105" y="55" width="110" height="110" fill={PAPER} stroke={LINE} strokeWidth="1.5" />
          <line x1="105" y1="55" x2="215" y2="165" stroke={LINE} strokeDasharray="5 4" />
          <polygon points={pts([[105, 55], [215, 165], corner])} fill={FLAP} stroke={LINE} strokeWidth="1.5" strokeLinejoin="round" />
          <Arrow d="M232,60 C250,140 190,190 120,186" />
          <Tx x={160} y={30} s={t("fold along the diagonal", "ծալել անկյունագծով", "сгиб по диагонали")} lang={lang} fill="#b91c1c" />
        </g>
      );
    }
    if (i === 1) return (
      <g>
        {poly([A, B, TOP], PAPER)}
        <Tx x={160} y={210} s={t("the fold", "ծալքը", "сгиб")} lang={lang} fill="#b91c1c" />
        <Tx x={160} y={74} s={t("open corners", "բաց անկյուններ", "открытые уголки")} lang={lang} fill="#b91c1c" />
      </g>
    );
    if (i === 2) return (
      <g>
        {poly([A, R, Q, TOP], PAPER, 1)}
        {poly([R, mix(B, P, k), Q], FLAP, 2)}
        <Arrow d={`M${CX(66)},${CY(18)} C${CX(40)},${CY(70)} ${CX(-10)},${CY(70)} ${CX(-30)},${CY(50)}`} />
      </g>
    );
    if (i === 3) return (
      <g>
        {poly([R2, R, Q, TOP, P], PAPER, 1)}
        {poly([R, P, Q], FLAP, 2)}
        {poly([R2, mix(A, Q, k), P], FLAP, 3)}
        <Arrow d={`M${CX(-66)},${CY(18)} C${CX(-40)},${CY(80)} ${CX(10)},${CY(80)} ${CX(30)},${CY(52)}`} />
      </g>
    );
    if (i === 4) return (
      <g>
        {poly([R2, R, Q, P], PAPER, 1)}
        {poly([R, P, Q], FLAP, 2)}
        {poly([R2, Q, P], FLAP, 3)}
        {poly([P, Q, mix(TOP, [0, 12], k)], "#fecaca", 4)}
        <Tx x={250} y={70} s={t("one corner|to the front,|the other|to the back", "մի անկյունը՝|առջևից,|մյուսը՝|հետևից", "один уголок|вперёд,|другой —|назад")} lang={lang} size={8} fill="#b91c1c" />
      </g>
    );
    const w = lerp(0, 1, k);
    return (
      <g>
        {poly([R2, R, Q, P], PAPER, 1)}
        {poly([R2, Q, P], FLAP, 2)}
        {poly([P, Q, [0, 12]], "#fecaca", 3)}
        <ellipse cx={CX(0)} cy={CY(41)} rx={CX(29) - CX(0)} ry={3 + 9 * w} fill="#7f1d1d" stroke={LINE} strokeWidth="1.5" />
        <ellipse cx={CX(0)} cy={CY(41) + 2} rx={(CX(29) - CX(0)) * 0.8} ry={2 + 6 * w} fill="#38bdf8" opacity={w} />
        <Tx x={160} y={40} s={t("Done!", "Պատրաստ է։", "Готово!")} lang={lang} size={13} fill="#16a34a" />
      </g>
    );
  },
};

/* ---------------- grade 1: a plasticine hedgehog ---------------- */

const DOUGH = "#a16207", DOUGH_D = "#713f12";

const hedgehog: Mech = {
  title: t("Modelling a hedgehog", "Ոզնու ձևավորում", "Лепим ёжика"),
  caps: [
    t("Warm the plasticine in your hands: knead it until it is soft.", "Պլաստիլինը տաքացրու ձեռքերումդ՝ ճմլի՛ր, մինչև փափկի։", "Согрей пластилин в руках: разминай его, пока он не станет мягким."),
    t("Roll it round and round between your palms to make a big ball for the body.", "Ափերիդ միջև շրջանաձև գլորի՛ր՝ մարմնի համար մեծ գունդ ստանալու համար։", "Катай его по кругу между ладонями, чтобы получился большой шар для тела."),
    t("Pull out one side and make it pointed: that is the snout.", "Մի կողմը քաշի՛ր դուրս և սրացրու․ դա դնչիկն է։", "Вытяни одну сторону и заостри её — это мордочка."),
    t("Roll a small black ball for the nose and two tiny ones for the eyes, and press them on.", "Գլորի՛ր փոքրիկ սև գնդիկ քթի համար և երկու ավելի փոքր՝ աչքերի համար, ու սեղմի՛ր տեղերում։", "Скатай маленький чёрный шарик для носа и два крошечных для глаз и прижми их."),
    t("Stick seeds or matches into its back for the spines. Your hedgehog is ready!", "Մեջքին խրի՛ր սերմեր կամ լուցկիներ՝ որպես փշեր։ Ոզնին պատրաստ է։", "Воткни в спинку семечки или спички — это иголки. Ёжик готов!"),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    if (i === 0) {
      const sq = Math.sin(p * Math.PI * 4) * 6;
      return (
        <g>
          <ellipse cx={160} cy={118} rx={34 + sq} ry={26 - sq / 2} fill={DOUGH} />
          <ellipse cx={108 - sq} cy={118} rx="34" ry="22" fill="#fcd9b6" stroke="#c2410c" />
          <ellipse cx={212 + sq} cy={118} rx="34" ry="22" fill="#fcd9b6" stroke="#c2410c" />
          {[0, 1, 2].map((j) => <path key={j} d={`M${122 + j * 38},${70 - (j % 2) * 6} q4,-8 10,0`} stroke="#f97316" strokeWidth="2" fill="none" />)}
          <Tx x={160} y={190} s={t("warm and soft", "տաք և փափուկ", "тёплый и мягкий")} lang={lang} fill="#a16207" />
        </g>
      );
    }
    if (i === 1) {
      const r = lerp(30, 44, k);
      return (
        <g>
          <circle cx="160" cy="124" r={r} fill={DOUGH} />
          <circle cx={150} cy={112} r={r * 0.25} fill="#fff" opacity="0.25" />
          <Arrow d="M110,70 A64,64 0 0 1 214,74" />
          <Arrow d="M212,182 A64,64 0 0 1 106,176" />
        </g>
      );
    }
    const tip: Pt = i === 2 ? mix([196, 128], [238, 140], k) : [238, 140];
    return (
      <g>
        <line x1="70" x2="260" y1="176" y2="176" stroke="#cbd5e1" strokeWidth="2" />
        {i >= 4 ? Array.from({ length: 13 }, (_, j) => {
          const a = Math.PI * (0.98 - j * 0.07);
          const on = j < 13 * k + 0.5;
          const x0 = 150 + 46 * Math.cos(a), y0 = 134 - 36 * Math.sin(a);
          return on ? <line key={j} x1={x0} y1={y0} x2={150 + 66 * Math.cos(a)} y2={134 - 56 * Math.sin(a)} stroke="#44403c" strokeWidth="4" strokeLinecap="round" /> : null;
        }) : null}
        <path d={`M196,118 L${tip[0]},${tip[1]} L194,156 Z`} fill={DOUGH} />
        <ellipse cx="150" cy="138" rx="50" ry="38" fill={DOUGH} />
        <ellipse cx="128" cy="174" rx="9" ry="5" fill={DOUGH_D} />
        <ellipse cx="172" cy="174" rx="9" ry="5" fill={DOUGH_D} />
        {i >= 3 ? (
          <g opacity={i === 3 ? k : 1}>
            <circle cx={tip[0]} cy={tip[1]} r="5.5" fill="#111827" />
            <circle cx="206" cy="128" r="3.5" fill="#111827" />
            <circle cx="207" cy="127" r="1" fill="#fff" />
          </g>
        ) : null}
        {i === 2 ? <Arrow d="M206,104 Q236,108 246,128" /> : null}
        {i === 4 && k > 0.95 ? <Tx x={160} y={36} s={t("Done!", "Պատրաստ է։", "Готово!")} lang={lang} size={13} fill="#16a34a" /> : null}
      </g>
    );
  },
};

/* ---------------- grade 1: folding a T-shirt ---------------- */

const SHIRT: Pt[] = [[140, 52], [90, 64], [62, 100], [104, 116], [104, 192], [216, 192], [216, 116], [258, 100], [230, 64], [180, 52]];
const SHIRT_C = "#38bdf8", SHIRT_D = "#0284c7";

/** Mirrors the part of the shirt beyond a line x = at onto the other side, by k. */
const foldX = (ps: Pt[], at: number, k: number) => ps.map(([x, y]): Pt => [at + (x - at) * (1 - 2 * k), y]);
const foldY = (ps: Pt[], at: number, k: number) => ps.map(([x, y]): Pt => [x, at + (y - at) * (1 - 2 * k)]);

const tshirt: Mech = {
  title: t("Folding a T-shirt", "Շապիկի ծալում", "Складываем футболку"),
  caps: [
    t("Lay the T-shirt flat on the table, face down, and smooth out the creases.", "Շապիկը հարթ փռի՛ր սեղանին՝ երեսը դեպի ներքև, և ձեռքով հարթեցրու ծալքերը։", "Разложи футболку на столе лицом вниз и разгладь складки."),
    t("Fold one sleeve and side into the middle.", "Մի թևքն ու կողքը ծալի՛ր դեպի մեջտեղ։", "Загни один рукав и бок к середине."),
    t("Fold the other sleeve and side into the middle too.", "Մյուս թևքն ու կողքը նույնպես ծալի՛ր դեպի մեջտեղ։", "Загни к середине и второй рукав с боком."),
    t("Fold it in half from the bottom up.", "Ծալի՛ր կիսով չափ՝ ներքևից վերև։", "Сложи пополам снизу вверх."),
    t("Turn it over: a neat, flat shirt that fits on a shelf and does not crease.", "Շրջի՛ր․ կոկիկ, հարթ շապիկ, որը տեղավորվում է դարակում և չի ճմրթվում։", "Переверни: аккуратная плоская футболка, которая помещается на полке и не мнётся."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const leftPart: Pt[] = [[140, 52], [90, 64], [62, 100], [104, 116], [104, 192], [140, 192]];
    const rightPart: Pt[] = [[180, 52], [230, 64], [258, 100], [216, 116], [216, 192], [180, 192]];
    const body: Pt[] = [[140, 52], [180, 52], [180, 192], [140, 192]];
    const kl = i === 1 ? k : i > 1 ? 1 : 0;
    const kr = i === 2 ? k : i > 2 ? 1 : 0;
    if (i <= 2) return (
      <g>
        {i === 0 ? <polygon points={pts(SHIRT)} fill={SHIRT_C} stroke={SHIRT_D} strokeWidth="1.5" strokeLinejoin="round" /> : null}
        {i > 0 ? <polygon points={pts(body)} fill={SHIRT_C} stroke={SHIRT_D} strokeWidth="1.5" /> : null}
        {i > 0 ? <polygon points={pts(foldX(leftPart, 140, kl).map(([x, y]): Pt => [Math.min(x, 180), y]))} fill={kl > 0.5 ? "#7dd3fc" : SHIRT_C} stroke={SHIRT_D} strokeWidth="1.5" strokeLinejoin="round" /> : null}
        {i > 0 ? <polygon points={pts(foldX(rightPart, 180, kr).map(([x, y]): Pt => [Math.max(x, 140), y]))} fill={kr > 0.5 ? "#7dd3fc" : SHIRT_C} stroke={SHIRT_D} strokeWidth="1.5" strokeLinejoin="round" /> : null}
        <path d="M140,52 Q160,66 180,52" fill="none" stroke={SHIRT_D} strokeWidth="1.5" />
        {i === 0 ? <><line x1="140" x2="140" y1="56" y2="190" stroke="#0f172a" strokeDasharray="4 4" opacity="0.4" /><line x1="180" x2="180" y1="56" y2="190" stroke="#0f172a" strokeDasharray="4 4" opacity="0.4" /></> : null}
        {i === 0 ? <Tx x={160} y={212} s={t("face down", "երեսը ներքև", "лицом вниз")} lang={lang} fill={SHIRT_D} /> : null}
      </g>
    );
    if (i === 3) {
      const bottom: Pt[] = [[140, 122], [180, 122], [180, 192], [140, 192]];
      return (
        <g>
          <polygon points={pts([[140, 52], [180, 52], [180, 122], [140, 122]])} fill="#7dd3fc" stroke={SHIRT_D} strokeWidth="1.5" />
          <polygon points={pts(foldY(bottom, 122, k))} fill={k > 0.5 ? SHIRT_C : "#7dd3fc"} stroke={SHIRT_D} strokeWidth="1.5" />
          <line x1="132" x2="188" y1="122" y2="122" stroke="#0f172a" strokeDasharray="4 4" opacity="0.4" />
        </g>
      );
    }
    return (
      <g>
        <rect x={140} y={52} width={40} height={70} fill={SHIRT_C} stroke={SHIRT_D} strokeWidth="1.5" />
        <path d="M146,52 Q160,62 174,52" fill="none" stroke={SHIRT_D} strokeWidth="2" />
        <path d="M160,86 c-6,-8 -14,0 0,10 c14,-10 6,-18 0,-10 Z" fill="#f472b6" opacity={k} />
        <Tx x={160} y={150} s={t("neat and flat!", "կոկիկ և հարթ", "аккуратно и ровно!")} lang={lang} fill="#16a34a" size={11} />
      </g>
    );
  },
};

/* ---------------- grade 1: making a greeting card ---------------- */

const CARD = "#fef3c7", CARD_L = "#d97706";

function Heart({ x, y, s, fill }: { x: number; y: number; s: number; fill: string }) {
  return <path d={`M${x},${y + 10 * s} C${x - 22 * s},${y - 4 * s} ${x - 10 * s},${y - 20 * s} ${x},${y - 8 * s} C${x + 10 * s},${y - 20 * s} ${x + 22 * s},${y - 4 * s} ${x},${y + 10 * s} Z`} fill={fill} />;
}
const Leaf = ({ x, y, r }: { x: number; y: number; r: number }) => <ellipse cx={x} cy={y} rx="11" ry="5" fill="#22c55e" transform={`rotate(${r} ${x} ${y})`} />;

const card: Mech = {
  title: t("Making a greeting card", "Բացիկի պատրաստում", "Делаем открытку"),
  caps: [
    t("Fold the card in half and run your fingernail along the fold.", "Ստվարաթուղթը ծալի՛ր կիսով չափ և եղունգով անցիր ծալքի երկայնքով։", "Сложи картон пополам и проведи ногтем по сгибу."),
    t("Draw round a template on coloured paper and cut out the pieces of the picture.", "Գունավոր թղթի վրա շրջագծի՛ր կաղապարը և կտրի՛ր նկարի մասերը։", "Обведи шаблон на цветной бумаге и вырежи детали картинки."),
    t("Lay the pieces out on the front of the card and move them until you like the picture.", "Մասերը դասավորի՛ր բացիկի դիմերեսին և տեղաշարժի՛ր, մինչև նկարը դուր գա։", "Разложи детали на лицевой стороне открытки и двигай, пока картинка не понравится."),
    t("Glue them down one at a time, with a thin layer of glue.", "Սոսնձի՛ր դրանք մեկ առ մեկ՝ սոսնձի բարակ շերտով։", "Приклей их по одной тонким слоем клея."),
    t("Add decorations: buttons, a ribbon, shiny paper.", "Ավելացրու զարդեր՝ կոճակներ, ժապավեն, փայլուն թուղթ։", "Добавь украшения: пуговицы, ленточку, блестящую бумагу."),
    t("Open the card and write a short, sincere greeting. Do not forget your name!", "Բացի՛ր բացիկը և գրի՛ր կարճ, անկեղծ շնորհավորանք։ Մի՛ մոռացիր անունդ։", "Открой открытку и напиши короткое искреннее поздравление. Не забудь подписаться!"),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const front = (
      <rect x="110" y="40" width="100" height="150" rx="3" fill={CARD} stroke={CARD_L} strokeWidth="1.5" />
    );
    if (i === 0) {
      const w = 100 * (1 - 2 * k);
      return (
        <g>
          {front}
          <polygon points={pts([[210, 40], [210 + w, 40 + 8 * Math.sin(k * Math.PI)], [210 + w, 190 - 8 * Math.sin(k * Math.PI)], [210, 190]])} fill={k > 0.5 ? "#fde68a" : CARD} stroke={CARD_L} strokeWidth="1.5" />
          <line x1="210" x2="210" y1="40" y2="190" stroke={CARD_L} strokeDasharray="4 3" />
        </g>
      );
    }
    if (i === 1) return (
      <g>
        <rect x="24" y="44" width="120" height="130" fill="#fda4af" stroke="#e11d48" />
        <path d="M84,140 C40,112 56,78 84,100 C112,78 128,112 84,140 Z" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M84,140 C40,112 56,78 84,100 C112,78 128,112 84,140 Z" fill="#cbd5e1" opacity={1 - k} stroke="#64748b" />
        <Tx x={84} y={188} s={t("template", "կաղապար", "шаблон")} lang={lang} size={8} fill="#475569" />
        <g transform={`translate(${lerp(0, 40, k)} 0)`}>
          <Heart x={210} y={110} s={1.6} fill="#e11d48" />
        </g>
        <Leaf x={236} y={160} r={-30} />
        <Leaf x={270} y={160} r={30} />
        <path d="M150,60 l40,20 M150,80 l40,-20" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
        <circle cx="146" cy="58" r="6" fill="none" stroke="#2563eb" strokeWidth="3" />
        <circle cx="146" cy="82" r="6" fill="none" stroke="#2563eb" strokeWidth="3" />
      </g>
    );
    const placed = i === 2 ? k : 1;
    const hx = lerp(250, 160, placed), hy = lerp(80, 104, placed);
    return i < 5 ? (
      <g>
        {front}
        <Leaf x={lerp(270, 148, placed)} y={lerp(170, 146, placed)} r={-30} />
        <Leaf x={lerp(290, 172, placed)} y={lerp(170, 146, placed)} r={30} />
        <path d={`M160,128 v26`} stroke="#15803d" strokeWidth="2.5" opacity={placed} />
        <Heart x={hx} y={hy} s={1.5} fill="#e11d48" />
        {i === 3 ? [[148, 96], [172, 96], [160, 118], [146, 146], [174, 146]].map(([x, y], j) => <circle key={j} cx={x} cy={y} r={2.2} fill="#e0f2fe" stroke="#0284c7" opacity={k > j / 5 ? 1 : 0} />) : null}
        {i === 3 ? <rect x="236" y="70" width="20" height="56" rx="4" fill="#a855f7" /> : null}
        {i === 3 ? <rect x="238" y="58" width="16" height="14" rx="3" fill="#e9d5ff" /> : null}
        {i === 4 ? (
          <g opacity={k}>
            <path d="M110,172 h100" stroke="#a855f7" strokeWidth="6" />
            <path d="M160,172 l-12,-10 v20 Z M160,172 l12,-10 v20 Z" fill="#c084fc" />
            {[[126, 58], [194, 58], [126, 160]].map(([x, y], j) => <g key={j}><circle cx={x} cy={y} r="6" fill="#facc15" stroke="#a16207" /><circle cx={x - 1.5} cy={y} r="0.9" fill="#a16207" /><circle cx={x + 1.5} cy={y} r="0.9" fill="#a16207" /></g>)}
            {[[196, 120], [128, 112], [192, 88]].map(([x, y], j) => <path key={j} d={`M${x},${y - 5} l1.5,3.5 l3.5,1.5 l-3.5,1.5 l-1.5,3.5 l-1.5,-3.5 l-3.5,-1.5 l3.5,-1.5 Z`} fill="#fbbf24" />)}
          </g>
        ) : null}
      </g>
    ) : (
      <g>
        <rect x="60" y="40" width="100" height="150" rx="3" fill="#fde68a" stroke={CARD_L} strokeWidth="1.5" />
        <rect x="160" y="40" width="100" height="150" rx="3" fill={CARD} stroke={CARD_L} strokeWidth="1.5" />
        <Heart x={110} y={110} s={1.3} fill="#fda4af" />
        <Tx x={210} y={80} s={t("Dear Mum,|happy|holiday!|You are|the best.", "Սիրելի՛ մայրիկ,|շնորհավոր|տոնդ։|Դու|լավագույնն ես։", "Дорогая мама,|с праздником!|Ты самая|лучшая.")} lang={lang} size={9} fill="#7c2d12" w={700} />
        <Tx x={240} y={178} s={t("Ani", "Անի", "Ани")} lang={lang} size={10} fill="#2563eb" anchor="end" />
      </g>
    );
  },
};

/* ---------------- grade 2: how paper is made ---------------- */

const WATER = "#bae6fd", PULP = "#e7e5e4";

const papermaking: Mech = {
  title: t("How paper is made", "Ինչպես է պատրաստվում թուղթը", "Как делают бумагу"),
  caps: [
    t("Wood from trees is chopped into small chips.", "Ծառերի փայտը մանրացնում են փոքր տաշեղների։", "Древесину деревьев измельчают в мелкую щепу."),
    t("The chips are mashed with lots of water into a runny porridge of tiny fibres: the pulp.", "Տաշեղները շատ ջրի հետ տրորում են՝ ստանալով մանր թելիկների հեղուկ շիլա՝ թղթազանգված։", "Щепу перемалывают с большим количеством воды в жидкую кашицу из крошечных волокон — бумажную массу."),
    t("A mesh screen is dipped in and lifted out. The water drains through the holes and a thin layer of fibres stays on top.", "Մաղն ընկղմում են և դուրս հանում։ Ջուրը հոսում է անցքերով, իսկ թելիկների բարակ շերտը մնում է վրան։", "Сетку окунают и поднимают. Вода стекает сквозь дырочки, а тонкий слой волокон остаётся сверху."),
    t("The wet layer is pressed between felt sheets to squeeze out more water.", "Թաց շերտը սեղմում են թաղիքե թերթերի միջև՝ ավելի շատ ջուր քամելու համար։", "Мокрый слой прессуют между листами войлока, чтобы выжать ещё воду."),
    t("Then it is dried and rolled up: paper! Used paper can be mashed into pulp again: that is recycling.", "Հետո այն չորացնում են և փաթաթում՝ թուղթ։ Օգտագործված թուղթը կարելի է նորից տրորել զանգվածի․ դա վերամշակումն է։", "Потом её сушат и сматывают в рулон — бумага! Использованную бумагу можно снова превратить в массу: это переработка."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const vat = (
      <g>
        <path d="M70,110 h180 l-12,80 h-156 Z" fill="#94a3b8" stroke="#475569" />
        <rect x="76" y="118" width="168" height="20" fill={i === 1 ? WATER : PULP} opacity="0.9" />
      </g>
    );
    if (i === 0) return (
      <g>
        <rect x="30" y="90" width="120" height="44" rx="22" fill={WOOD_T} stroke="#78350f" />
        <ellipse cx="150" cy="112" rx="14" ry="22" fill="#fcd34d" stroke="#78350f" />
        <ellipse cx="150" cy="112" rx="7" ry="11" fill="none" stroke="#b45309" />
        {Array.from({ length: 14 }, (_, j) => {
          const on = j < 14 * k;
          const x = 190 + (j % 5) * 22 + (j % 2) * 6, y = 168 - Math.floor(j / 5) * 14;
          return on ? <rect key={j} x={x} y={y} width="16" height="9" rx="2" fill="#fcd34d" stroke="#b45309" transform={`rotate(${(j * 37) % 40 - 20} ${x + 8} ${y + 4})`} /> : null;
        })}
        <Arrow d="M168,112 C186,112 196,130 204,146" />
      </g>
    );
    if (i === 1) return (
      <g>
        {vat}
        <rect x="76" y="118" width="168" height="70" fill={WATER} opacity="0.6" />
        {Array.from({ length: 30 }, (_, j) => {
          const a = p * Math.PI * 2 + j;
          const x = 160 + Math.cos(a) * (20 + (j % 6) * 12), y = 150 + Math.sin(a * 1.3) * 22;
          return <path key={j} d={`M${x},${y} q4,-3 8,0`} stroke="#a8a29e" strokeWidth="1.5" fill="none" />;
        })}
        <path d={`M160,60 v60`} stroke="#475569" strokeWidth="4" />
        <path d={`M${160 + 30 * Math.cos(p * 12)},${150 + 8 * Math.sin(p * 12)} L160,120`} stroke="#475569" strokeWidth="4" />
        <Tx x={160} y={40} s={t("pulp = fibres + water", "զանգված = թելիկներ + ջուր", "масса = волокна + вода")} lang={lang} fill="#0369a1" />
      </g>
    );
    if (i === 2) {
      const y = lerp(150, 70, k);
      return (
        <g>
          {vat}
          <rect x="76" y="118" width="168" height="70" fill={PULP} opacity="0.8" />
          <rect x="96" y={y} width="128" height="12" fill="#f5f5f4" stroke="#64748b" strokeWidth="2" />
          {Array.from({ length: 16 }, (_, j) => <line key={j} x1={100 + j * 8} x2={100 + j * 8} y1={y} y2={y + 12} stroke="#94a3b8" strokeWidth="0.6" />)}
          {k > 0.4 ? [0, 1, 2, 3, 4, 5].map((j) => <circle key={j} cx={106 + j * 22} cy={y + 18 + ((p * 60 + j * 9) % 30)} r="2" fill="#38bdf8" />) : null}
          <Tx x={160} y={40} s={t("water drains through the mesh", "ջուրը հոսում է մաղի միջով", "вода стекает сквозь сетку")} lang={lang} fill="#0369a1" />
        </g>
      );
    }
    if (i === 3) {
      const y = lerp(40, 92, k);
      return (
        <g>
          <rect x="70" y="150" width="180" height="20" fill="#64748b" />
          <rect x="80" y="134" width="160" height="16" fill="#a3a3a3" />
          <rect x="84" y="128" width="152" height="6" fill="#f5f5f4" stroke="#a8a29e" />
          <rect x="80" y={y + 20} width="160" height="16" fill="#a3a3a3" />
          <rect x="70" y={y} width="180" height="20" fill="#64748b" />
          <rect x="154" y="10" width="12" height={y - 10} fill="#334155" />
          {k > 0.8 ? [0, 1, 2, 3].map((j) => <circle key={j} cx={70 + (j % 2) * 180 + (j < 2 ? -6 : 6)} cy={140 + ((p * 80 + j * 13) % 40)} r="2.5" fill="#38bdf8" />) : null}
          <Tx x={160} y={196} s={t("felt + wet paper + felt", "թաղիք + թաց թուղթ + թաղիք", "войлок + мокрая бумага + войлок")} lang={lang} fill="#334155" />
        </g>
      );
    }
    return (
      <g>
        <circle cx="96" cy="120" r="34" fill="#f5f5f4" stroke="#a8a29e" strokeWidth="2" />
        {[26, 18, 10].map((r) => <circle key={r} cx="96" cy="120" r={r} fill="none" stroke="#d6d3d1" />)}
        <circle cx="96" cy="120" r="5" fill="#a8a29e" />
        <path d="M96,154 h110 v-30 h-10" fill="#fafaf9" stroke="#a8a29e" strokeWidth="1.5" />
        <g transform={`rotate(${p * 360} 250 104)`}>
          <Arrow d="M250,74 A30,30 0 0 1 278,112" c="#16a34a" />
          <Arrow d="M270,128 A30,30 0 0 1 222,116" c="#16a34a" />
          <Arrow d="M224,90 A30,30 0 0 1 246,74" c="#16a34a" />
        </g>
        <Tx x={250} y={170} s={t("recycling", "վերամշակում", "переработка")} lang={lang} fill="#16a34a" />
        <Tx x={96} y={196} s={t("paper", "թուղթ", "бумага")} lang={lang} fill="#57534e" />
      </g>
    );
  },
};

/* ---------------- grade 2: cutting a symmetrical shape ---------------- */

const halfHeart = (f: number, dir = 1) => `M${f},84 C${f + dir * 14},52 ${f + dir * 66},56 ${f + dir * 62},100 C${f + dir * 58},134 ${f + dir * 18},150 ${f},176`;

const symmetry: Mech = {
  title: t("Cutting out a symmetrical heart", "Համաչափ սրտիկի կտրում", "Вырезаем симметричное сердечко"),
  caps: [
    t("Fold the paper in half.", "Թուղթը ծալի՛ր կիսով չափ։", "Сложи бумагу пополам."),
    t("Draw half of the heart against the fold.", "Ծալքի մոտ նկարի՛ր սրտիկի կեսը։", "Нарисуй половинку сердечка у сгиба."),
    t("Cut along the line through both layers. Do not cut along the fold!", "Կտրի՛ր գծով՝ երկու շերտը միասին։ Ծալքով մի՛ կտրիր։", "Вырежи по линии сразу оба слоя. По сгибу не режь!"),
    t("Open it out: both halves are exactly the same. The fold is the line of symmetry.", "Բացի՛ր․ երկու կեսերը ճիշտ նույնն են։ Ծալքը համաչափության առանցքն է։", "Разверни: обе половинки совершенно одинаковые. Сгиб — это ось симметрии."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const PINK = "#f9a8d4", PINK_D = "#db2777";
    if (i === 0) {
      const w = 90 * (1 - 2 * k);
      return (
        <g>
          <rect x="120" y="40" width="90" height="150" fill={PINK} stroke={PINK_D} strokeWidth="1.5" />
          <polygon points={pts([[120, 40], [120 - w, 40], [120 - w, 190], [120, 190]])} fill={k > 0.5 ? "#f472b6" : PINK} stroke={PINK_D} strokeWidth="1.5" />
          <line x1="120" x2="120" y1="40" y2="190" stroke={PINK_D} strokeDasharray="4 3" />
        </g>
      );
    }
    if (i < 3) return (
      <g>
        <rect x="120" y="40" width="90" height="150" fill="#f472b6" stroke={PINK_D} strokeWidth="1.5" />
        <Tx x={110} y={210} s={t("fold", "ծալք", "сгиб")} lang={lang} fill={PINK_D} anchor="end" />
        <line x1="120" x2="120" y1="40" y2="196" stroke={PINK_D} strokeWidth="3" />
        {i === 2 ? <path d={`${halfHeart(120)} Z`} fill="#fce7f3" opacity={k} /> : null}
        <path d={halfHeart(120)} fill="none" stroke="#1e293b" strokeWidth="1.8" pathLength={1} strokeDasharray={i === 1 ? `${k} 1` : "0.03 0.02"} />
        {i === 1 ? <path d="M0,0 l26,-26 l6,6 l-26,26 Z M0,0 l-4,10 l10,-4" fill="#facc15" stroke="#a16207" transform={`translate(${lerp(120, 132, k) + 50 * Math.sin(k * 3)} ${lerp(84, 176, k)})`} /> : null}
        {i === 2 ? <g transform={`translate(${190 - 10 * Math.sin(k * Math.PI)} ${lerp(80, 170, k)}) rotate(${lerp(-30, 40, k)})`}>
          <path d="M0,0 L30,-4 L30,4 Z" fill="#94a3b8" stroke="#475569" />
          <circle cx="-7" cy="-5" r="5" fill="none" stroke="#2563eb" strokeWidth="3" />
          <circle cx="-7" cy="6" r="5" fill="none" stroke="#2563eb" strokeWidth="3" />
        </g> : null}
      </g>
    );
    const g = lerp(0.2, 1, k);
    return (
      <g>
        <path d={`${halfHeart(160)} Z`} fill="#f472b6" stroke={PINK_D} strokeWidth="1.5" />
        <path d={`${halfHeart(160, -1)} Z`} fill="#f472b6" stroke={PINK_D} strokeWidth="1.5" transform={`translate(160 0) scale(${g} 1) translate(-160 0)`} />
        <line x1="160" x2="160" y1="70" y2="190" stroke="#1e293b" strokeDasharray="5 4" />
        <Tx x={160} y={208} s={t("line of symmetry", "համաչափության առանցք", "ось симметрии")} lang={lang} fill="#1e293b" />
      </g>
    );
  },
};

/* ---------------- grade 2: an origami fox ---------------- */

const FOX = "#fb923c", FOX_D = "#c2410c", FOX_B = "#fdba74";
const L0: Pt = [60, 60], R0: Pt = [260, 60], BOT: Pt = [160, 160];
const LH: Pt = [100, 60], RH: Pt = [220, 60], LT: Pt = [118.8, 24.7], RT: Pt = [201.2, 24.7];

const fox: Mech = {
  title: t("Folding a fox's face", "Աղվեսի դնչիկի ծալում", "Складываем мордочку лисы"),
  caps: [
    t("Fold an orange square along the diagonal and turn the triangle so that its point is down.", "Նարնջագույն քառակուսին ծալի՛ր անկյունագծով և եռանկյունին շրջի՛ր գագաթը դեպի ներքև։", "Сложи оранжевый квадрат по диагонали и поверни треугольник вершиной вниз."),
    t("Fold it in half and open it again: a line down the middle.", "Ծալի՛ր կիսով չափ և նորից բացի՛ր․ մեջտեղում գիծ է մնում։", "Сложи пополам и снова разверни: посередине останется линия."),
    t("Fold the left and right corners up so that they stick out above the top edge: these are the ears.", "Ձախ և աջ անկյունները ծալի՛ր դեպի վեր, որ դուրս ցցվեն վերին եզրից․ դրանք ականջներն են։", "Загни левый и правый уголки вверх, чтобы они торчали над верхним краем, — это уши."),
    t("Turn the paper over.", "Թուղթը շրջի՛ր։", "Переверни бумагу."),
    t("Fold the top edge down a little: the forehead.", "Վերին եզրը մի փոքր ծալի՛ր դեպի ներքև․ ճակատն է։", "Немного загни верхний край вниз — это лоб."),
    t("Draw the eyes and, in the bottom corner, the nose. Your fox is ready!", "Նկարի՛ր աչքերը, իսկ ներքևի անկյունում՝ քիթը։ Աղվեսը պատրաստ է։", "Нарисуй глаза, а в нижнем уголке — нос. Лиса готова!"),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const tri = <polygon points={pts([L0, R0, BOT])} fill={FOX} stroke={FOX_D} strokeWidth="1.5" strokeLinejoin="round" />;
    if (i === 0) return (
      <g>
        <polygon points={pts([L0, R0, BOT, mix([160, 160], [160, -40], 1 - k)])} fill={FOX} stroke={FOX_D} strokeWidth="1.5" strokeLinejoin="round" opacity={0.5 + 0.5 * k} />
        {tri}
        <Tx x={160} y={200} s={t("point down", "գագաթը ներքև", "вершиной вниз")} lang={lang} fill={FOX_D} />
      </g>
    );
    if (i === 1) return (
      <g>
        {tri}
        <polygon points={pts([[160, 60], mix(R0, L0, Math.sin(k * Math.PI) * 0.999), BOT])} fill={FOX_B} stroke={FOX_D} strokeWidth="1" opacity={Math.sin(k * Math.PI)} />
        <line x1="160" x2="160" y1="60" y2="160" stroke={FOX_D} strokeDasharray="4 3" />
      </g>
    );
    if (i === 2) return (
      <g>
        <polygon points={pts([LH, RH, BOT])} fill={FOX} stroke={FOX_D} strokeWidth="1.5" strokeLinejoin="round" />
        <polygon points={pts([LH, BOT, mix(L0, LT, k)])} fill={FOX_B} stroke={FOX_D} strokeWidth="1.5" strokeLinejoin="round" />
        <polygon points={pts([RH, BOT, mix(R0, RT, k)])} fill={FOX_B} stroke={FOX_D} strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="160" x2="160" y1="60" y2="160" stroke={FOX_D} strokeDasharray="4 3" opacity="0.5" />
      </g>
    );
    const ears = (
      <g>
        <polygon points={pts([LH, LT, [129.6, 60]])} fill={FOX} stroke={FOX_D} strokeWidth="1.5" strokeLinejoin="round" />
        <polygon points={pts([RH, RT, [190.4, 60]])} fill={FOX} stroke={FOX_D} strokeWidth="1.5" strokeLinejoin="round" />
        <polygon points={pts([[108, 54], LT, [124, 54]])} fill="#1f2937" opacity="0.7" />
        <polygon points={pts([[212, 54], RT, [196, 54]])} fill="#1f2937" opacity="0.7" />
      </g>
    );
    const face = <polygon points={pts([LH, RH, BOT])} fill={FOX} stroke={FOX_D} strokeWidth="1.5" strokeLinejoin="round" />;
    if (i === 3) return (
      <g transform={`translate(160 0) scale(${Math.cos(k * Math.PI) < 0 ? -Math.cos(k * Math.PI) : Math.cos(k * Math.PI)} 1) translate(-160 0)`}>
        {k < 0.5 ? <><polygon points={pts([LH, RH, BOT])} fill={FOX} stroke={FOX_D} /><polygon points={pts([LH, BOT, LT])} fill={FOX_B} stroke={FOX_D} /><polygon points={pts([RH, BOT, RT])} fill={FOX_B} stroke={FOX_D} /></> : <>{ears}{face}</>}
      </g>
    );
    const band = 16 * (i === 4 ? k : 1);
    return (
      <g>
        {ears}
        {face}
        <polygon points={pts([[100 + band * 0.6, 60 + band], [220 - band * 0.6, 60 + band], [220 - band * 1.2, 60 + band * 2], [100 + band * 1.2, 60 + band * 2]])} fill={FOX_B} stroke={FOX_D} strokeWidth="1.2" opacity={band > 1 ? 1 : 0} />
        {i === 5 ? (
          <g opacity={k}>
            <ellipse cx="140" cy="108" rx="5" ry="7" fill="#1f2937" />
            <ellipse cx="180" cy="108" rx="5" ry="7" fill="#1f2937" />
            <circle cx="142" cy="105" r="1.5" fill="#fff" />
            <circle cx="182" cy="105" r="1.5" fill="#fff" />
            <path d="M152,146 h16 l-8,12 Z" fill="#1f2937" />
            <path d="M146,136 l-26,-4 M146,140 l-26,4 M174,136 l26,-4 M174,140 l26,4" stroke="#7c2d12" strokeWidth="1" />
          </g>
        ) : null}
      </g>
    );
  },
};

/* ---------------- grade 2: running stitch ---------------- */

const CLOTH = "#e0f2fe", THREAD = "#dc2626";

/** The needle, lying along the stitching line with its point at x. */
const Needle = ({ x, y, up }: { x: number; y: number; up?: boolean }) => (
  <g transform={`translate(${x} ${y}) rotate(${up ? -35 : 35})`}>
    <path d="M0,0 L-46,-2 L-50,0 L-46,2 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="0.8" />
    <ellipse cx="-44" cy="0" rx="3" ry="1" fill="#fff" />
  </g>
);

const running: Mech = {
  title: t("Sewing a running stitch", "Առաջ ասեղով կար", "Шов «вперёд иголку»"),
  hint: t("Top: the right side of the fabric. Bottom: a cut through it, showing where the thread goes.", "Վերևում՝ գործվածքի երեսը։ Ներքևում՝ կտրվածք, որտեղ երևում է թելի ճանապարհը։", "Сверху — лицевая сторона ткани. Снизу — разрез: видно, куда идёт нитка."),
  caps: [
    t("Push the needle up from the wrong side to the right side, at the start of the pencil line.", "Ասեղը ներսի կողմից դուրս հանի՛ր երեսի կողմ՝ մատիտի գծի սկզբում։", "Выведи иголку с изнанки на лицевую сторону в начале карандашной линии."),
    t("About half a centimetre along, push the needle down through the fabric.", "Մոտ կես սանտիմետր հեռու ասեղը ներս խրի՛ր գործվածքի միջով։", "Примерно через полсантиметра проткни иголку вниз сквозь ткань."),
    t("The same distance along, bring it up again.", "Նույն հեռավորության վրա նորից դուրս հանի՛ր։", "Через такое же расстояние снова выведи её наверх."),
    t("Repeat, keeping the stitches the same length and the line straight: a neat dashed line.", "Կրկնի՛ր՝ կարերը պահելով նույն երկարության, իսկ գիծը՝ ուղիղ․ կոկիկ ընդհատ գիծ։", "Повторяй, делая стежки одной длины, а линию прямой: получится аккуратный пунктир."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const X0 = 40, S = 22, LINE_Y = 76;
    const n = i === 0 ? 0 : i === 1 ? k : i === 2 ? 1 : 1 + k * 5;
    const dashes: number[] = [];
    for (let j = 0; j < Math.ceil(n); j++) dashes.push(j);
    const tip = X0 + Math.min(n, 6) * 2 * S - (i === 2 ? (1 - k) * S : 0);
    return (
      <g>
        <rect x="20" y="30" width="280" height="90" rx="4" fill={CLOTH} stroke="#7dd3fc" />
        <line x1={X0} x2={290} y1={LINE_Y} y2={LINE_Y} stroke="#94a3b8" strokeDasharray="2 3" />
        {dashes.map((j) => {
          const a = X0 + j * 2 * S, b = a + S * Math.min(1, n - j);
          return <line key={j} x1={a} x2={b} y1={LINE_Y} y2={LINE_Y} stroke={THREAD} strokeWidth="3" strokeLinecap="round" />;
        })}
        {i === 0 ? <circle cx={X0} cy={LINE_Y} r="2.5" fill={THREAD} /> : null}
        {i < 3 || k < 0.95 ? <Needle x={tip} y={LINE_Y} up={i === 0 || i === 2} /> : null}
        {/* the cut through the fabric */}
        <line x1="20" x2="300" y1="170" y2="170" stroke="#7dd3fc" strokeWidth="4" />
        <path d={(() => {
          let d = `M${X0},190 L${X0},170`;
          const m = Math.min(Math.ceil(n), 6);
          for (let j = 0; j < m; j++) {
            const a = X0 + j * 2 * S;
            d += ` Q${a + S / 2},160 ${a + S},170 Q${a + 1.5 * S},180 ${a + 2 * S},170`;
          }
          return d;
        })()} fill="none" stroke={THREAD} strokeWidth="2" />
        <circle cx={X0} cy="192" r="3" fill={THREAD} />
        <Tx x={300} y={152} s={t("right side", "երես", "лицо")} lang={lang} size={8} fill="#0369a1" anchor="end" />
        <Tx x={300} y={194} s={t("wrong side", "ներսի կողմ", "изнанка")} lang={lang} size={8} fill="#0369a1" anchor="end" />
        <Tx x={40} y={210} s={t("knot", "հանգույց", "узелок")} lang={lang} size={8} fill={THREAD} anchor="start" />
      </g>
    );
  },
};

/* ---------------- grade 2: sewing on a button ---------------- */

const BTN = "#a78bfa", BTN_D = "#6d28d9";

const button: Mech = {
  title: t("Sewing on a two-hole button", "Երկու անցքով կոճակի կարում", "Пришиваем пуговицу с двумя дырочками"),
  caps: [
    t("Thread the needle with a double thread and tie the ends together in a knot.", "Ասեղն անցկացրու կրկնակի թել և ծայրերը միասին հանգույց կապի՛ր։", "Вдень в иголку двойную нитку и завяжи концы узелком."),
    t("Push the needle up from the wrong side where the button goes, and through the first hole.", "Ասեղը ներսի կողմից դուրս հանի՛ր կոճակի տեղում և անցկացրու առաջին անցքով։", "Выведи иголку с изнанки в месте пуговицы и проведи через первую дырочку."),
    t("Go down through the second hole and back through the fabric.", "Իջի՛ր երկրորդ անցքով և նորից անցի՛ր գործվածքի միջով։", "Опусти иголку во вторую дырочку и проведи обратно сквозь ткань."),
    t("Repeat four or five times, so the button holds firmly.", "Կրկնի՛ր չորս-հինգ անգամ, որ կոճակն ամուր պահվի։", "Повтори четыре-пять раз, чтобы пуговица держалась крепко."),
    t("Bring the needle out under the button and wind the thread round two or three times: a little stalk.", "Ասեղը դուրս հանի՛ր կոճակի տակից և թելն երկու-երեք անգամ փաթաթի՛ր․ փոքրիկ ոտիկ։", "Выведи иголку под пуговицей и обмотай нитку два-три раза: получится ножка."),
    t("Take the thread through to the wrong side and finish it off with two knots.", "Թելը տար ներսի կողմ և ամրացրու երկու հանգույցով։", "Выведи нитку на изнанку и закрепи двумя узелками."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    if (i === 0) return (
      <g>
        <g transform="translate(70 110)">
          <path d="M0,0 L120,-3 L124,0 L120,3 Z" fill="#cbd5e1" stroke="#475569" />
          <ellipse cx="10" cy="0" rx="6" ry="1.6" fill="#fff" stroke="#475569" strokeWidth="0.6" />
        </g>
        <path d={`M80,108 C60,96 50,${lerp(120, 150, k)} 40,${lerp(150, 176, k)}`} fill="none" stroke={THREAD} strokeWidth="2" />
        <path d={`M80,112 C64,120 58,${lerp(140, 160, k)} 46,${lerp(160, 178, k)}`} fill="none" stroke={THREAD} strokeWidth="2" />
        <circle cx={lerp(43, 43, k)} cy={lerp(160, 180, k)} r={3 + 2 * k} fill={THREAD} />
        <Tx x={60} y={202} s={t("knot", "հանգույց", "узелок")} lang={lang} size={9} fill={THREAD} />
        <Tx x={200} y={70} s={t("two threads together", "երկու թել միասին", "две нитки вместе")} lang={lang} size={9} fill="#475569" />
      </g>
    );
    if (i < 4) {
      const reps = i === 3 ? 1 + Math.floor(k * 4) : i === 2 ? k : 0;
      return (
        <g>
          <rect x="20" y="20" width="280" height="180" fill={CLOTH} />
          {Array.from({ length: 14 }, (_, j) => <line key={j} x1="20" x2="300" y1={26 + j * 13} y2={26 + j * 13} stroke="#bae6fd" />)}
          <circle cx="160" cy="110" r="44" fill={BTN} stroke={BTN_D} strokeWidth="2" />
          <circle cx="160" cy="110" r="34" fill="none" stroke={BTN_D} strokeOpacity="0.4" />
          <circle cx="142" cy="110" r="6" fill={CLOTH} stroke={BTN_D} />
          <circle cx="178" cy="110" r="6" fill={CLOTH} stroke={BTN_D} />
          {reps > 0 ? Array.from({ length: Math.max(1, Math.ceil(reps)) }, (_, j) => (
            <line key={j} x1="142" x2={i === 2 ? lerp(142, 178, k) : 178} y1={109 + j * 0.7 - 1} y2={109 + j * 0.7 - 1} stroke={THREAD} strokeWidth="2.4" />
          )) : null}
          {i === 1 ? <g>
            <line x1="142" y1="110" x2={142 + 40 * k} y2={110 - 50 * k} stroke={THREAD} strokeWidth="2" />
            <g transform={`translate(${142 + 40 * k} ${110 - 50 * k}) rotate(-51)`}>
              <path d="M0,0 L56,-2.5 L62,0 L56,2.5 Z" fill="#cbd5e1" stroke="#475569" />
              <ellipse cx="6" cy="0" rx="3.5" ry="1" fill="#fff" />
            </g>
          </g> : null}
          {i === 3 ? <Tx x={160} y={186} s={t(`stitch ${1 + Math.floor(k * 4)} of 5`, `${1 + Math.floor(k * 4)}-րդ կարը 5-ից`, `стежок ${1 + Math.floor(k * 4)} из 5`)} lang={lang} size={10} fill="#334155" /> : null}
        </g>
      );
    }
    if (i === 4) {
      const turns = Math.floor(1 + k * 3);
      return (
        <g>
          <rect x="40" y="140" width="240" height="16" fill={CLOTH} stroke="#7dd3fc" />
          <rect x="110" y="96" width="100" height="14" rx="5" fill={BTN} stroke={BTN_D} strokeWidth="2" />
          <path d="M142,110 v30 M178,110 v30 M142,96 h36" stroke={THREAD} strokeWidth="2" />
          {Array.from({ length: turns }, (_, j) => <ellipse key={j} cx="160" cy={116 + j * 7} rx="24" ry="3" fill="none" stroke={THREAD} strokeWidth="2.2" />)}
          <Tx x={240} y={76} s={t("side view", "կողքից", "вид сбоку")} lang={lang} size={9} fill="#475569" />
          <Tx x={250} y={126} s={t("the stalk", "ոտիկը", "ножка")} lang={lang} size={9} fill={THREAD} />
          <path d="M226,124 h-38" stroke={THREAD} strokeWidth="1" />
        </g>
      );
    }
    return (
      <g>
        <rect x="20" y="20" width="280" height="180" fill="#bae6fd" />
        <Tx x={160} y={42} s={t("wrong side", "ներսի կողմ", "изнанка")} lang={lang} size={10} fill="#0369a1" />
        <line x1="142" x2="178" y1="110" y2="110" stroke={THREAD} strokeWidth="5" />
        <path d={`M178,110 c10,-10 20,0 10,10 c-8,8 -16,-2 -10,-10`} fill="none" stroke={THREAD} strokeWidth="2" />
        {k > 0.5 ? <path d="M178,110 c14,-4 18,10 6,14" fill="none" stroke={THREAD} strokeWidth="2" /> : null}
        <circle cx="186" cy="118" r={3 + 2 * k} fill={THREAD} />
        <path d={`M200,${lerp(130, 136, k)} l14,14 M200,${lerp(150, 140, k)} l14,-14`} stroke="#475569" strokeWidth="2.5" opacity={k} />
      </g>
    );
  },
};

/* ---------------- grade 3: a pop-up card ---------------- */

/** A simple oblique view: x runs out along the base, y up the back, z across the card. */
const V3 = (x: number, y: number, z: number): Pt => [64 + x + z * 0.6, 182 - y - z * 0.34];
const quad = (a: Pt, b: Pt, c: Pt, d: Pt) => pts([a, b, c, d]);
const PD = 34, Z1 = 58, Z2 = 98;

const popup: Mech = {
  title: t("How a pop-up step works", "Ինչպես է աշխատում ցատկող աստիճանը", "Как работает выдвижная ступенька"),
  caps: [
    t("Fold a rectangle of paper in half to make a fold line.", "Թղթի ուղղանկյունը ծալի՛ր կիսով չափ, որ ծալքի գիծ ստացվի։", "Сложи прямоугольник бумаги пополам, чтобы получилась линия сгиба."),
    t("From the fold, cut two parallel lines 3 cm long and 3 cm apart. Cut only along them!", "Ծալքից կտրի՛ր երկու զուգահեռ գիծ՝ 3 սմ երկարությամբ և 3 սմ հեռավորությամբ։ Կտրի՛ր միայն դրանցով։", "От сгиба надрежь две параллельные линии длиной 3 см на расстоянии 3 см. Режь только по ним!"),
    t("Fold the cut strip forwards and back again, so the crease is sharp.", "Կտրված շերտը ծալի՛ր առաջ և նորից ետ, որ ծալքը հստակ լինի։", "Отогни надрезанную полоску вперёд и обратно, чтобы сгиб был чётким."),
    t("Open the card halfway and push the strip inwards. Close it and press.", "Բացիկը կիսով չափ բացի՛ր և շերտը հրի՛ր ներս։ Փակի՛ր և սեղմի՛ր։", "Открой открытку наполовину и вдави полоску внутрь. Закрой и прижми."),
    t("Now every time you open the card the strip stands up as a step. Glue the picture to its front.", "Հիմա ամեն անգամ բացիկը բացելիս շերտը կանգնում է աստիճանի պես։ Նկարը սոսնձի՛ր նրա առջևի մասին։", "Теперь каждый раз, когда открываешь открытку, полоска встаёт ступенькой. Приклей картинку к её передней стороне."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const SHEET = "#bfdbfe", SHEET_D = "#1d4ed8";
    if (i === 0) {
      const w = 80 * (1 - 2 * k);
      return (
        <g>
          <rect x="80" y="40" width="80" height="140" fill={SHEET} stroke={SHEET_D} strokeWidth="1.5" />
          <polygon points={pts([[160, 40], [160 + w, 40], [160 + w, 180], [160, 180]])} fill={k > 0.5 ? "#93c5fd" : SHEET} stroke={SHEET_D} strokeWidth="1.5" />
          <line x1="160" x2="160" y1="40" y2="180" stroke={SHEET_D} strokeDasharray="4 3" />
        </g>
      );
    }
    if (i < 3) {
      const f = i === 2 ? Math.sin(k * Math.PI) : 0;
      const sx = 1 - 2 * f;
      return (
        <g>
          <rect x="110" y="40" width="100" height="140" fill={SHEET} stroke={SHEET_D} strokeWidth="1.5" />
          <line x1="110" x2="110" y1="40" y2="180" stroke={SHEET_D} strokeWidth="3" />
          <Tx x={102} y={36} s={t("fold", "ծալք", "сгиб")} lang={lang} size={9} fill={SHEET_D} anchor="end" />
          {i === 2 ? <polygon points={pts([[140, 94], [140 - 30 * sx, 94], [140 - 30 * sx, 126], [140, 126]])} fill={f > 0.5 ? "#93c5fd" : SHEET} stroke={SHEET_D} strokeWidth="1.2" /> : null}
          <line x1="110" x2={110 + 30 * (i === 1 ? k : 1)} y1="94" y2="94" stroke="#dc2626" strokeWidth="2.5" />
          <line x1="110" x2={110 + 30 * (i === 1 ? k : 1)} y1="126" y2="126" stroke="#dc2626" strokeWidth="2.5" />
          {i === 2 ? <line x1="140" x2="140" y1="94" y2="126" stroke={SHEET_D} strokeDasharray="3 2" /> : null}
          <Tx x={220} y={92} s={t("3 cm", "3 սմ", "3 см")} lang={lang} size={9} fill="#dc2626" anchor="start" />
          <path d="M214,94 v32" stroke="#dc2626" strokeWidth="1" />
        </g>
      );
    }
    const kk = i === 3 ? k : 1;
    const M = kk * PD;
    return (
      <g>
        <polygon points={quad(V3(0, 0, 0), V3(0, 120, 0), V3(0, 120, 150), V3(0, 0, 150))} fill="#fde68a" stroke="#a16207" strokeWidth="1.5" />
        <polygon points={quad(V3(0, 0, 0), V3(110, 0, 0), V3(110, 0, 150), V3(0, 0, 150))} fill="#fef3c7" stroke="#a16207" strokeWidth="1.5" />
        {kk > 0.02 ? <polygon points={quad(V3(0, 0, Z1), V3(0, PD, Z1), V3(0, PD, Z2), V3(0, 0, Z2))} fill="#78350f" opacity={0.6 * kk} /> : null}
        {kk > 0.02 ? <polygon points={quad(V3(0, 0, Z1), V3(PD, 0, Z1), V3(PD, 0, Z2), V3(0, 0, Z2))} fill="#78350f" opacity={0.45 * kk} /> : null}
        <polygon points={quad(V3(0, PD, Z1), V3(M, M, Z1), V3(M, M, Z2), V3(0, PD, Z2))} fill="#fbbf24" stroke="#a16207" strokeWidth="1.2" />
        <polygon points={quad(V3(M, M, Z1), V3(PD, 0, Z1), V3(PD, 0, Z2), V3(M, M, Z2))} fill="#f59e0b" stroke="#a16207" strokeWidth="1.2" />
        {i === 3 ? <Arrow d={`M${V3(80, 60, 78)[0]},${V3(80, 60, 78)[1]} L${V3(30, 30, 78)[0]},${V3(30, 30, 78)[1]}`} /> : null}
        {i === 4 ? (
          <g opacity={k}>
            <rect x={V3(PD, 0, 76)[0] - 3} y={V3(PD, 34, 76)[1]} width="6" height="34" fill="#92400e" />
            <circle cx={V3(PD, 60, 70)[0]} cy={V3(PD, 60, 70)[1]} r="16" fill="#22c55e" stroke="#15803d" />
            <circle cx={V3(PD, 52, 88)[0]} cy={V3(PD, 52, 88)[1]} r="13" fill="#4ade80" stroke="#15803d" />
            <circle cx={V3(PD, 76, 80)[0]} cy={V3(PD, 76, 80)[1]} r="13" fill="#16a34a" stroke="#15803d" />
            <circle cx={V3(PD, 62, 76)[0]} cy={V3(PD, 62, 76)[1]} r="2.5" fill="#dc2626" />
            <circle cx={V3(PD, 70, 88)[0]} cy={V3(PD, 70, 88)[1]} r="2.5" fill="#dc2626" />
          </g>
        ) : null}
        <Tx x={250} y={40} s={i === 3 ? t("push in", "հրի՛ր ներս", "вдави") : t("the step", "աստիճանը", "ступенька")} lang={lang} size={10} fill="#a16207" />
      </g>
    );
  },
};

/* ---------------- grade 3: a paper mosaic ---------------- */

const MC = 13, MX = 40, MY = 34, MCOLS = 18, MROWS = 11;
const inFish = (x: number, y: number) => ((x - 140) / 72) ** 2 + ((y - 106) / 42) ** 2 <= 1 || (x > 200 && x < 252 && Math.abs(y - 106) < (x - 200) * 0.9);
const CELLS = (() => {
  const out: Array<{ x: number; y: number; kind: 0 | 1 | 2 | 3 }> = [];
  for (let r = 0; r < MROWS; r++) for (let c = 0; c < MCOLS; c++) {
    const x = MX + c * MC + MC / 2, y = MY + r * MC + MC / 2;
    const inside = inFish(x, y);
    const edge = inside && [[MC, 0], [-MC, 0], [0, MC], [0, -MC]].some(([dx, dy]) => !inFish(x + dx, y + dy));
    const eye = Math.hypot(x - 102, y - 98) < 7;
    out.push({ x, y, kind: !inside ? 3 : eye ? 0 : edge ? 1 : 2 });
  }
  return out;
})();
const TILE = ["#111827", "#ea580c", "#facc15", "#0ea5e9"];

const mosaic: Mech = {
  title: t("Making a paper mosaic", "Թղթե խճանկարի պատրաստում", "Делаем бумажную мозаику"),
  caps: [
    t("Draw a simple outline on the card base in pencil: a fish.", "Ստվարաթղթե հիմքի վրա մատիտով նկարի՛ր պարզ ուրվագիծ՝ ձուկ։", "Нарисуй на картонной основе карандашом простой контур — рыбку."),
    t("Cut coloured paper into squares of about 1 cm and sort them by colour into boxes.", "Գունավոր թուղթը կտրի՛ր մոտ 1 սմ քառակուսիների և դասավորի՛ր տուփերում՝ ըստ գույնի։", "Нарежь цветную бумагу на квадратики около 1 см и разложи их по коробочкам по цветам."),
    t("Glue a small part at a time and lay the pieces along the edges first, leaving thin gaps.", "Ամեն անգամ սոսինձ քսի՛ր փոքր մասի վրա և նախ կտորները շարի՛ր եզրերով՝ բարակ արանքներ թողնելով։", "Мажь клеем небольшой участок и сначала выкладывай кусочки по краям, оставляя тонкие щели."),
    t("Then fill in the middle.", "Հետո լցրու մեջտեղը։", "Потом заполни середину."),
    t("Finally fill in the background in a contrasting colour. Step back: the squares become one picture!", "Վերջում ֆոնը լցրու հակադիր գույնով։ Մի քայլ ետ գնա․ քառակուսիները մեկ նկար են դառնում։", "В конце заполни фон контрастным цветом. Отойди на шаг: квадратики превращаются в одну картинку!"),
  ],
  draw: (i, p) => {
    const k = K(p);
    const outline = <g fill="none" stroke="#94a3b8" strokeWidth="1.2"><ellipse cx="140" cy="106" rx="72" ry="42" /><path d="M200,106 L252,59 V153 Z" /></g>;
    if (i === 1) return (
      <g>
        {[["#ea580c", 50], ["#facc15", 130], ["#0ea5e9", 210]].map(([c, x], j) => (
          <g key={j}>
            <rect x={x as number} y="120" width="64" height="44" rx="4" fill="#e7e5e4" stroke="#78716c" />
            {Array.from({ length: 10 }, (_, q) => (q < 10 * k ? <rect key={q} x={(x as number) + 6 + (q % 5) * 11} y={128 + Math.floor(q / 5) * 14} width="9" height="9" fill={c as string} transform={`rotate(${(q * 23) % 30 - 15} ${(x as number) + 10 + (q % 5) * 11} ${132 + Math.floor(q / 5) * 14})`} /> : null))}
          </g>
        ))}
        <rect x="70" y="40" width="180" height="50" fill="#ea580c" opacity={1 - k} />
        {[0, 1, 2, 3, 4, 5].map((j) => <line key={j} x1={70 + j * 30} x2={70 + j * 30} y1="40" y2="90" stroke="#fff" opacity={1 - k} />)}
        <line x1="70" x2="250" y1="65" y2="65" stroke="#fff" opacity={1 - k} />
      </g>
    );
    const show = (kind: number) => (kind === 0 || kind === 1 ? (i === 2 ? k : i > 2 ? 1 : 0) : kind === 2 ? (i === 3 ? k : i > 3 ? 1 : 0) : i === 4 ? k : 0);
    return (
      <g>
        <rect x={MX - 4} y={MY - 4} width={MCOLS * MC + 8} height={MROWS * MC + 8} fill="#fafaf9" stroke="#d6d3d1" />
        {outline}
        {CELLS.map((c, j) => {
          const o = show(c.kind);
          const order = ((j * 7919) % 97) / 97;
          return o > order ? <rect key={j} x={c.x - MC / 2 + 1} y={c.y - MC / 2 + 1} width={MC - 2} height={MC - 2} fill={TILE[c.kind]} /> : null;
        })}
      </g>
    );
  },
};

/* ---------------- grade 3: from dragging to the wheel ---------------- */

const ROCK = "#a8a29e";

function Wheel({ x, y, r, a, spokes = 6 }: { x: number; y: number; r: number; a: number; spokes?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#92400e" stroke="#451a03" strokeWidth="2" />
      <circle cx={x} cy={y} r={r - 5} fill="#fde68a" />
      {Array.from({ length: spokes }, (_, j) => {
        const b = a + (j * Math.PI * 2) / spokes;
        return <line key={j} x1={x} y1={y} x2={x + (r - 5) * Math.cos(b)} y2={y + (r - 5) * Math.sin(b)} stroke="#92400e" strokeWidth="2.5" />;
      })}
      <circle cx={x} cy={y} r="4" fill="#451a03" />
    </g>
  );
}

const wheel: Mech = {
  title: t("From dragging to the wheel", "Քարշ տալուց մինչև անիվ", "От волока к колесу"),
  caps: [
    t("Long ago people dragged heavy loads along the ground. The rubbing, called friction, made it very hard work.", "Վաղուց մարդիկ ծանր բեռները քարշ էին տալիս գետնով։ Շփումն աշխատանքը շատ դժվարացնում էր։", "Давным-давно люди волокли тяжёлые грузы по земле. Трение делало эту работу очень тяжёлой."),
    t("Then they rolled loads on logs. Rolling rubs far less than sliding, but the logs left behind had to be carried to the front again and again.", "Հետո սկսեցին բեռները գլորել գերանների վրայով։ Գլորվելիս շփումը շատ ավելի փոքր է, քան սահելիս, բայց հետևում մնացած գերաններն անընդհատ պետք էր առաջ տանել։", "Потом грузы стали катить на брёвнах. При качении трение намного меньше, чем при скольжении, но оставшиеся сзади брёвна приходилось снова и снова переносить вперёд."),
    t("About 5,000 to 6,000 years ago came the wheel and axle: the wheels roll along with the cart and never need carrying.", "Մոտ 5000–6000 տարի առաջ հայտնվեցին անիվն ու առանցքը․ անիվները գլորվում են սայլի հետ և երբեք տանելու կարիք չունեն։", "Около 5000–6000 лет назад появились колесо и ось: колёса катятся вместе с телегой, и их не нужно переносить."),
    t("The axle passes through the centre of each wheel. The hole must be round and a little wider than the axle, so the wheel turns freely with little friction.", "Առանցքն անցնում է յուրաքանչյուր անիվի կենտրոնով։ Անցքը պետք է կլոր լինի և առանցքից մի փոքր լայն, որ անիվն ազատ պտտվի՝ քիչ շփումով։", "Ось проходит через центр каждого колеса. Отверстие должно быть круглым и чуть шире оси, чтобы колесо свободно вращалось с малым трением."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const ground = <><line x1="0" x2="320" y1="180" y2="180" stroke="#78716c" strokeWidth="2" />{Array.from({ length: 12 }, (_, j) => <line key={j} x1={((j * 30 - p * 60 * (i === 2 ? 1 : 0)) % 330 + 330) % 330} x2={((j * 30 - p * 60 * (i === 2 ? 1 : 0)) % 330 + 330) % 330 - 8} y1="184" y2="192" stroke="#a8a29e" />)}</>;
    if (i === 0) {
      const x = 150 + 14 * k;
      return (
        <g>
          {ground}
          <rect x={x} y="128" width="80" height="52" rx="6" fill={ROCK} stroke="#57534e" strokeWidth="1.5" />
          <path d={`M${x},150 L60,120`} stroke="#92400e" strokeWidth="2.5" />
          {[0, 1, 2].map((j) => <path key={j} d={`M${x + 84 + j * 6},176 l8,-6`} stroke="#f97316" strokeWidth="2" opacity={Math.sin(p * 20 + j) > 0 ? 1 : 0.2} />)}
          <Tx x={160} y={40} s={t("sliding: lots of friction", "սահում․ շատ շփում", "скольжение: много трения")} lang={lang} size={11} fill="#dc2626" />
          <circle cx="50" cy="104" r="9" fill="#fcd9b6" stroke="#c2410c" />
          <path d="M50,113 L40,150 M44,124 L60,122 M40,150 l-8,28 M40,150 l12,28" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        </g>
      );
    }
    if (i === 1) {
      const shift = (p * 40) % 40;
      return (
        <g>
          {ground}
          <rect x={150 + shift} y="122" width="90" height="44" rx="6" fill={ROCK} stroke="#57534e" strokeWidth="1.5" />
          {[0, 1, 2, 3].map((j) => {
            const x = 130 + j * 40 + shift / 2;
            return <g key={j}><circle cx={x} cy="173" r="7" fill="#b45309" stroke="#78350f" /><line x1={x} y1="173" x2={x + 7 * Math.cos(p * 12)} y2={173 + 7 * Math.sin(p * 12)} stroke="#78350f" /></g>;
          })}
          <g opacity={0.5 + 0.5 * Math.sin(p * Math.PI)}>
            <circle cx="60" cy="173" r="7" fill="#b45309" stroke="#78350f" />
            <Arrow d="M70,160 C110,130 220,130 280,160" c="#64748b" />
          </g>
          <Tx x={160} y={40} s={t("rolling: much less friction", "գլորում․ շատ ավելի քիչ շփում", "качение: трения гораздо меньше")} lang={lang} size={11} fill="#16a34a" />
        </g>
      );
    }
    if (i === 2) return (
      <g>
        {ground}
        <rect x="90" y="110" width="140" height="40" rx="4" fill="#d97706" stroke="#78350f" strokeWidth="1.5" />
        <rect x="104" y="88" width="80" height="24" rx="4" fill={ROCK} stroke="#57534e" />
        <line x1="70" x2="90" y1="128" y2="128" stroke="#78350f" strokeWidth="4" />
        <Wheel x={122} y={156} r={24} a={p * Math.PI * 4} />
        <Wheel x={200} y={156} r={24} a={p * Math.PI * 4} />
        <Tx x={160} y={40} s={t("wheel and axle", "անիվ և առանցք", "колесо и ось")} lang={lang} size={11} fill="#92400e" />
      </g>
    );
    return (
      <g>
        <rect x="40" y="56" width="240" height="30" rx="4" fill="#d97706" stroke="#78350f" strokeWidth="1.5" />
        <rect x="70" y="86" width="12" height="28" fill="#78350f" />
        <rect x="238" y="86" width="12" height="28" fill="#78350f" />
        <rect x="40" y="114" width="240" height="8" rx="4" fill="#64748b" />
        <ellipse cx="44" cy="118" rx="12" ry="44" fill="#92400e" stroke="#451a03" strokeWidth="2" />
        <ellipse cx="276" cy="118" rx="12" ry="44" fill="#92400e" stroke="#451a03" strokeWidth="2" />
        <circle cx="160" cy="176" r="22" fill="#fde68a" stroke="#92400e" strokeWidth="2" />
        <circle cx="160" cy="176" r={7 + k * 0} fill="#fff" stroke="#92400e" />
        <circle cx="160" cy="177.5" r="5" fill="#64748b" />
        <Tx x={190} y={172} s={t("the hole is a little|wider than the axle", "անցքը մի փոքր|լայն է առանցքից", "отверстие|чуть шире оси")} lang={lang} size={8} fill="#475569" anchor="start" />
        <Tx x={160} y={140} s={t("axle", "առանցք", "ось")} lang={lang} size={10} fill="#334155" />
        <Tx x={160} y={48} s={t("body", "թափք", "кузов")} lang={lang} size={10} fill="#78350f" />
        <Tx x={30} y={40} s={t("wheel", "անիվ", "колесо")} lang={lang} size={10} fill="#92400e" anchor="start" />
      </g>
    );
  },
};

/* ---------------- grade 3: backstitch and cross stitch ---------------- */

const FLOSS = "#7c3aed";

const backstitch: Mech = {
  title: t("Backstitch and cross stitch", "Ետ ասեղով կար և խաչաձև կար", "Шов «назад иголку» и крестик"),
  hint: t("Top: the right side. Below: a cut through the fabric.", "Վերևում՝ երեսը։ Ներքևում՝ գործվածքի կտրվածքը։", "Сверху — лицевая сторона. Снизу — разрез ткани."),
  caps: [
    t("Backstitch: bring the needle up to the right side at the point A.", "Ետ ասեղով կար․ ասեղը դուրս բե՛ր երեսի կողմ A կետում։", "Шов «назад иголку»: выведи иголку на лицевую сторону в точке A."),
    t("Push it down back, half a centimetre behind.", "Խրի՛ր ետ՝ կես սանտիմետր հետևում։", "Воткни её назад, на полсантиметра позади."),
    t("Bring it up forwards, half a centimetre ahead of the first hole.", "Դուրս բե՛ր առաջ՝ առաջին անցքից կես սանտիմետր առաջ։", "Выведи её вперёд, на полсантиметра впереди первого прокола."),
    t("Push it down back into the first hole. Repeat: the stitches join into a line with no gaps, perfect for outlines.", "Խրի՛ր ետ՝ առաջին անցքի մեջ։ Կրկնի՛ր․ կարերը միանում են անընդհատ գծի, որը հիանալի է ուրվագծերի համար։", "Воткни её назад, в первый прокол. Повторяй: стежки сливаются в линию без промежутков, идеально для контуров."),
    t("Cross stitch: sew a row of slanting stitches, then come back with stitches slanting the other way, so each pair makes a cross.", "Խաչաձև կար․ կարի՛ր թեք կարերի շարք, հետո վերադարձի՛ր հակառակ թեքությամբ կարերով, որ ամեն զույգ խաչ կազմի։", "Крестик: прошей ряд косых стежков, потом вернись стежками с обратным наклоном, чтобы каждая пара образовала крестик."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    if (i === 4) {
      const n = 7;
      return (
        <g>
          <rect x="40" y="50" width="240" height="120" fill="#f8fafc" stroke="#cbd5e1" />
          {Array.from({ length: 13 }, (_, j) => <line key={`a${j}`} x1={40 + j * 20} x2={40 + j * 20} y1="50" y2="170" stroke="#e2e8f0" />)}
          {Array.from({ length: 7 }, (_, j) => <line key={`b${j}`} x1="40" x2="280" y1={50 + j * 20} y2={50 + j * 20} stroke="#e2e8f0" />)}
          {Array.from({ length: n }, (_, j) => {
            const x = 90 + j * 20;
            const a = Math.min(1, Math.max(0, k * 2 * n - j));
            const b = Math.min(1, Math.max(0, (k * 2 - 1) * n - (n - 1 - j)));
            return (
              <g key={j}>
                {a > 0 ? <line x1={x} y1="120" x2={x + 20 * a} y2={120 - 20 * a} stroke={FLOSS} strokeWidth="3.5" strokeLinecap="round" /> : null}
                {b > 0 ? <line x1={x + 20} y1="120" x2={x + 20 - 20 * b} y2={120 - 20 * b} stroke="#a855f7" strokeWidth="3.5" strokeLinecap="round" /> : null}
              </g>
            );
          })}
          <Tx x={160} y={40} s={t("/ / / then \\ \\ \\", "/ / / հետո \\ \\ \\", "/ / / потом \\ \\ \\")} lang={lang} size={11} fill={FLOSS} />
        </g>
      );
    }
    const S = 20, A = 100, Y = 78;
    const done = i < 1 ? 0 : i === 1 ? k : i === 2 ? 1 : 1 + k * 7;
    const seg = (j: number) => {
      const a = A - S + j * S, frac = Math.min(1, done - j);
      return frac > 0 ? <line key={j} x1={a} x2={a + S * frac} y1={Y} y2={Y} stroke={FLOSS} strokeWidth="3.5" strokeLinecap="round" /> : null;
    };
    return (
      <g>
        <rect x="20" y="40" width="280" height="76" rx="4" fill={CLOTH} stroke="#7dd3fc" />
        {Array.from({ length: 8 }, (_, j) => seg(j))}
        {i === 0 ? <circle cx={A} cy={Y} r="3" fill={FLOSS} /> : null}
        {i === 0 || i === 2 ? <circle cx={i === 0 ? A : A + S} cy={Y} r={i === 2 ? 3 * k : 0} fill={FLOSS} /> : null}
        <Tx x={A} y={Y + 22} s={t("A", "A", "A")} lang={lang} size={10} fill={FLOSS} />
        {/* the cut: on the back the thread jumps forwards two stitch lengths */}
        <line x1="20" x2="300" y1="164" y2="164" stroke="#7dd3fc" strokeWidth="4" />
        <path d={(() => {
          const m = Math.min(8, Math.ceil(done));
          let d = `M${A},182 L${A},164`;
          for (let j = 0; j < m; j++) {
            const a = A + j * S;
            d += ` Q${a - S / 2},152 ${a - S},164 Q${a},180 ${a + S},164`;
          }
          return d;
        })()} fill="none" stroke={FLOSS} strokeWidth="2" opacity={i === 0 ? 0.5 : 1} />
        <Tx x={300} y={148} s={t("right side", "երես", "лицо")} lang={lang} size={8} fill="#0369a1" anchor="end" />
        <Tx x={300} y={192} s={t("wrong side", "ներսի կողմ", "изнанка")} lang={lang} size={8} fill="#0369a1" anchor="end" />
      </g>
    );
  },
};

/* ---------------- grade 3: sprouting a bean in a glass ---------------- */

const bean: Mech = {
  title: t("Sprouting a bean in a glass", "Լոբու ծլեցում բաժակում", "Проращиваем фасоль в стакане"),
  caps: [
    t("Put damp cotton wool in a glass and press a bean against the side, so you can watch it.", "Բաժակի մեջ դի՛ր խոնավ բամբակ և լոբին սեղմի՛ր պատին, որ կարողանաս հետևել։", "Положи в стакан влажную вату и прижми фасолину к стенке, чтобы было видно."),
    t("Stand the glass in a warm, light place and keep the cotton wool damp. The bean drinks and swells.", "Բաժակը դի՛ր տաք, լուսավոր տեղում և բամբակը պահի՛ր խոնավ։ Լոբին ջուր է խմում և ուռչում։", "Поставь стакан в тёплое светлое место и следи, чтобы вата была влажной. Фасолина пьёт и набухает."),
    t("After a few days the root comes out and grows down.", "Մի քանի օր անց արմատը դուրս է գալիս և աճում դեպի ներքև։", "Через несколько дней появляется корешок и растёт вниз."),
    t("Then the stem pushes up, bent like a hook, and thin root hairs grow.", "Հետո ցողունը դուրս է գալիս դեպի վեր՝ կեռիկի պես ծռված, և աճում են բարակ արմատամազիկներ։", "Потом вверх пробивается стебелёк, согнутый крючком, и вырастают тонкие корневые волоски."),
    t("The stem straightens and the first leaves open. Write what you see each day in your diary.", "Ցողունն ուղղվում է, և բացվում են առաջին տերևները։ Ամեն օր տեսածդ գրի՛ր օրագրում։", "Стебель выпрямляется, и раскрываются первые листья. Записывай каждый день в дневник, что видишь."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const sw = i === 0 ? 1 : i === 1 ? 1 + 0.25 * k : 1.25;
    const root = i < 2 ? 0 : i === 2 ? k : 1;
    const stem = i < 3 ? 0 : i === 3 ? k : 1;
    const leaf = i === 4 ? k : 0;
    const BX = 150, BY = 140;
    return (
      <g>
        {i >= 1 ? <g><circle cx="270" cy="40" r="14" fill="#facc15" />{Array.from({ length: 8 }, (_, j) => <line key={j} x1={270 + 18 * Math.cos(j * 0.785)} y1={40 + 18 * Math.sin(j * 0.785)} x2={270 + 25 * Math.cos(j * 0.785)} y2={40 + 25 * Math.sin(j * 0.785)} stroke="#facc15" strokeWidth="2" />)}</g> : null}
        <path d="M100,60 L114,200 H206 L220,60" fill="#f0f9ff" stroke="#94a3b8" strokeWidth="2" />
        <path d="M108,140 q20,-10 50,-4 q30,-6 54,4 L206,200 H114 Z" fill="#f5f5f4" stroke="#e7e5e4" />
        {[0, 1, 2].map((j) => <circle key={j} cx={130 + j * 30} cy={168 + (j % 2) * 10} r="2" fill="#38bdf8" />)}
        {stem > 0 ? (
          <path d={`M${BX + 4},${BY - 6} C${BX + 10},${BY - 30 * stem} ${BX + 2},${BY - 60 * stem} ${BX + (i === 3 ? 18 * stem : 0)},${BY - 72 * stem}`} fill="none" stroke="#65a30d" strokeWidth="4" strokeLinecap="round" />
        ) : null}
        {leaf > 0 ? (
          <g transform={`translate(${BX} ${BY - 72})`}>
            <ellipse cx={-14 * leaf} cy={-4} rx={16 * leaf} ry={7 * leaf} fill="#22c55e" transform={`rotate(-20 ${-14 * leaf} -4)`} />
            <ellipse cx={14 * leaf} cy={-4} rx={16 * leaf} ry={7 * leaf} fill="#16a34a" transform={`rotate(20 ${14 * leaf} -4)`} />
          </g>
        ) : null}
        {root > 0 ? (
          <g>
            <path d={`M${BX - 4},${BY + 8} C${BX - 8},${BY + 24 * root} ${BX + 4},${BY + 40 * root} ${BX - 2},${BY + 52 * root}`} fill="none" stroke="#a8a29e" strokeWidth="6" strokeLinecap="round" />
            <path d={`M${BX - 4},${BY + 8} C${BX - 8},${BY + 24 * root} ${BX + 4},${BY + 40 * root} ${BX - 2},${BY + 52 * root}`} fill="none" stroke="#fef9c3" strokeWidth="4" strokeLinecap="round" />
            {stem > 0 ? Array.from({ length: 8 }, (_, j) => <line key={j} x1={BX - 4 + (j % 2 ? 2 : -3)} y1={BY + 18 + j * 4} x2={BX - 4 + (j % 2 ? 10 : -12) * stem} y2={BY + 22 + j * 4} stroke="#a8a29e" strokeWidth="0.8" />) : null}
          </g>
        ) : null}
        <ellipse cx={BX} cy={BY} rx={16 * sw} ry={10 * sw} fill="#b91c1c" stroke="#7f1d1d" />
        <path d={`M${BX - 6 * sw},${BY - 6 * sw} q6,4 10,0`} stroke="#fecaca" strokeWidth="1.5" fill="none" />
        {i === 4 ? (
          <g opacity={k}>
            <rect x="12" y="70" width="70" height="80" rx="4" fill="#fff" stroke="#94a3b8" />
            {[0, 1, 2, 3].map((j) => <line key={j} x1="20" x2={70 - (j % 2) * 14} y1={98 + j * 12} y2={98 + j * 12} stroke="#cbd5e1" strokeWidth="2" />)}
            <Tx x={47} y={86} s={t("Day 7", "Օր 7", "День 7")} lang={lang} size={10} fill="#2563eb" />
          </g>
        ) : null}
      </g>
    );
  },
};

export const MECHS: Record<string, Mech> = { cup, hedgehog, tshirt, card, papermaking, symmetry, fox, running, button, popup, mosaic, wheel, backstitch, bean };
