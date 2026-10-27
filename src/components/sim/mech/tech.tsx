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

export const MECHS: Record<string, Mech> = { cup, hedgehog, tshirt, card };
