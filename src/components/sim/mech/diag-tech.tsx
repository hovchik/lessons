"use client";

import type { ArtLang, Tr } from "@/lib/art/spec";
import { L, t } from "../labels";
import type { Diagram } from "./types";

/* Labelled pictures for technology, grades 1–7. */

const P = (x: number, y: number, name: Tr, text: Tr) => ({ x, y, name, text });

const Tx = ({ x, y, s, lang, size = 8, fill = "#1e1b4b", anchor = "middle", w = 800 }: { x: number; y: number; s: Tr; lang: ArtLang; size?: number; fill?: string; anchor?: "start" | "middle" | "end"; w?: number }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={w} fill={fill}>
    {L(s, lang).split("|").map((line, k) => <tspan key={k} x={x} dy={k ? size * 1.15 : 0}>{line}</tspan>)}
  </text>
);

const WOOD = "#b45309", WOOD_L = "#d97706", WOOD_D = "#78350f";

/* ---------------- grade 1: what things are made of ---------------- */

const materials: Diagram = {
  title: t("What is it made of?", "Ինչի՞ց է պատրաստված", "Из чего это сделано?"),
  h: 210,
  draw: (lang) => (
    <g>
      <rect x="0" y="0" width="320" height="150" fill="#f0f9ff" />
      {/* a shirt on a hanger */}
      <path d="M52,14 q6,-8 12,0 q0,6 -6,8 L30,40 h62 L58,22" fill="none" stroke="#64748b" strokeWidth="2" />
      <path d="M44,40 h28 l20,10 l-6,16 l-10,-4 v58 h-36 v-58 l-10,4 l-6,-16 Z" fill="#f472b6" stroke="#be185d" />
      <path d="M52,40 q6,8 12,0" fill="none" stroke="#be185d" />
      {[0, 1, 2].map((k) => <circle key={k} cx="58" cy={58 + k * 14} r="1.6" fill="#fff" />)}
      {/* the table */}
      <rect x="20" y="146" width="290" height="12" rx="2" fill={WOOD} />
      <path d="M34,158 v48 M296,158 v48" stroke={WOOD_D} strokeWidth="9" />
      <path d="M40,150 q50,-3 100,0 t110,0" fill="none" stroke={WOOD_L} strokeWidth="1" />
      {/* exercise book */}
      <path d="M112,146 l8,-14 h52 l-8,14 Z" fill="#fff" stroke="#94a3b8" />
      <path d="M112,146 l8,-14 h52 l-8,14 Z" fill="none" stroke="#2563eb" strokeWidth="2" transform="translate(0 -3)" />
      {/* spoon */}
      <ellipse cx="190" cy="140" rx="9" ry="5" fill="#cbd5e1" stroke="#64748b" />
      <path d="M198,139 L232,134" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      {/* glass */}
      <path d="M244,96 h26 l-4,48 h-18 Z" fill="#bae6fd" opacity="0.55" stroke="#0284c7" />
      <path d="M247,116 h20 l-2,28 h-16 Z" fill="#7dd3fc" opacity="0.6" />
      {/* pen */}
      <g transform="rotate(-18 122 123)">
        <rect x="100" y="120" width="40" height="6" rx="2" fill="#22c55e" />
        <path d="M140,120 l8,3 l-8,3 Z" fill="#334155" />
        <rect x="104" y="118" width="12" height="2" fill="#15803d" />
      </g>
      {/* clay pot */}
      <path d="M62,100 h30 q-4,6 0,10 q10,10 2,30 q-2,6 -8,6 h-18 q-6,0 -8,-6 q-8,-20 2,-30 q4,-4 0,-10 Z" fill="#c2410c" stroke="#7c2d12" />
      <path d="M64,124 q13,6 26,0" fill="none" stroke="#fdba74" strokeWidth="1.5" />
      <Tx x={160} y={26} s={t("natural or made by people?", "բնակա՞ն, թե՞ մարդու ստեղծած", "природный или сделан людьми?")} lang={lang} size={8.5} fill="#0369a1" />
    </g>
  ),
  parts: [
    P(58, 86, t("Shirt: fabric", "Շապիկ՝ գործվածք", "Рубашка: ткань"), t("Fabric is woven from threads. Cotton comes from a plant and wool from sheep, so these are natural; nylon and polyester threads are made in factories.", "Գործվածքը գործում են թելերից։ Բամբակը ստանում են բույսից, բուրդը՝ ոչխարից, ուստի դրանք բնական են, իսկ նեյլոնի և պոլիէսթերի թելերը պատրաստում են գործարաններում։", "Ткань ткут из ниток. Хлопок получают из растения, шерсть — от овец, поэтому они природные, а нитки из нейлона и полиэстера делают на фабриках.")),
    P(77, 124, t("Pot: clay", "Կճուճ՝ կավ", "Горшок: глина"), t("Clay is a natural material dug from the ground. Soft clay is shaped and then fired in a hot kiln, and it becomes hard as stone.", "Կավը հողից հանվող բնական նյութ է։ Փափուկ կավին ձև են տալիս, հետո թրծում տաք հնոցում, և այն քարի պես պինդ է դառնում։", "Глина — природный материал, её добывают из земли. Мягкой глине придают форму, потом обжигают в горячей печи, и она становится твёрдой, как камень.")),
    P(142, 138, t("Exercise book: paper", "Տետր՝ թուղթ", "Тетрадь: бумага"), t("Paper is made by people from wood: the wood is broken into tiny fibres, mixed with water and pressed into thin sheets.", "Թուղթը մարդիկ պատրաստում են փայտից․ փայտը մանրացնում են բարակ թելիկների, խառնում ջրի հետ և սեղմում բարակ թերթերի։", "Бумагу люди делают из древесины: дерево измельчают на крошечные волокна, смешивают с водой и прессуют в тонкие листы.")),
    P(116, 108, t("Pen: plastic", "Գրիչ՝ պլաստմասա", "Ручка: пластмасса"), t("Plastic is made in factories, mostly from oil. It is light and does not break easily, but it stays in nature for hundreds of years.", "Պլաստմասան պատրաստում են գործարաններում, հիմնականում նավթից։ Այն թեթև է և հեշտությամբ չի կոտրվում, բայց բնության մեջ մնում է հարյուրավոր տարիներ։", "Пластмассу делают на заводах, в основном из нефти. Она лёгкая и не ломается легко, но остаётся в природе сотни лет.")),
    P(212, 128, t("Spoon: metal", "Գդալ՝ մետաղ", "Ложка: металл"), t("Metal is hard, shiny and strong. It comes from rocks called ores, which are heated until the metal melts out of them.", "Մետաղը պինդ է, փայլուն և ամուր։ Այն ստանում են հանքաքար կոչվող ապարներից, որոնք տաքացնում են, մինչև մետաղը հալվելով դուրս գա։", "Металл твёрдый, блестящий и прочный. Его получают из камней-руд: их нагревают, пока металл не выплавится.")),
    P(257, 90, t("Glass: glass", "Բաժակ՝ ապակի", "Стакан: стекло"), t("Glass is made by people from sand, heated until it melts. It is clear, smooth and hard, but it breaks easily.", "Ապակին մարդիկ պատրաստում են ավազից՝ տաքացնելով, մինչև այն հալվի։ Այն թափանցիկ է, հարթ և պինդ, բայց հեշտությամբ կոտրվում է։", "Стекло люди делают из песка, нагревая его, пока он не расплавится. Оно прозрачное, гладкое и твёрдое, но легко бьётся.")),
    P(170, 176, t("Table: wood", "Սեղան՝ փայտ", "Стол: дерево"), t("Wood is a natural material from trees. It is strong and warm to touch, and you can see its pattern of lines, the grain.", "Փայտը ծառերից ստացվող բնական նյութ է։ Այն ամուր է, հպելիս՝ տաք, և դրա վրա երևում են գծերի նախշեր՝ փայտի շերտերը։", "Дерево — природный материал из деревьев. Оно прочное, тёплое на ощупь, и на нём видны узоры из линий — волокна.")),
  ],
};

/* ---------------- grade 1: an organised workspace ---------------- */

const desk: Diagram = {
  title: t("An organised workspace, seen from above", "Կարգավորված աշխատատեղ՝ վերևից", "Порядок на рабочем месте: вид сверху"),
  h: 214,
  draw: (lang) => (
    <g>
      <rect x="10" y="8" width="300" height="200" rx="6" fill="#fde68a" stroke={WOOD} strokeWidth="2" />
      {/* oilcloth */}
      <rect x="30" y="24" width="260" height="150" rx="3" fill="#ecfeff" stroke="#0891b2" />
      {Array.from({ length: 12 }, (_, k) => <line key={`v${k}`} x1={30 + k * 21.7} x2={30 + k * 21.7} y1="24" y2="174" stroke="#a5f3fc" />)}
      {Array.from({ length: 7 }, (_, k) => <line key={`h${k}`} x1="30" x2="290" y1={24 + k * 21.4} y2={24 + k * 21.4} stroke="#a5f3fc" />)}
      {/* the task card at the top */}
      <rect x="128" y="32" width="64" height="40" rx="3" fill="#fff" stroke="#94a3b8" />
      {[0, 1, 2].map((k) => <line key={k} x1="136" x2={182 - k * 8} y1={44 + k * 9} y2={44 + k * 9} stroke="#94a3b8" strokeWidth="2" />)}
      {/* materials on the left */}
      {["#f87171", "#facc15", "#4ade80", "#60a5fa"].map((c, k) => <rect key={k} x={46 + k * 3} y={84 - k * 4} width="54" height="66" fill={c} stroke="#475569" strokeWidth="0.6" />)}
      {/* tools on the right */}
      <g transform="rotate(-90 236 110)">
        <path d="M206,106 L250,110 L206,114 Z" fill="#94a3b8" stroke="#475569" />
        <circle cx="200" cy="104" r="7" fill="none" stroke="#dc2626" strokeWidth="4" />
        <circle cx="200" cy="117" r="7" fill="none" stroke="#dc2626" strokeWidth="4" />
      </g>
      <rect x="252" y="74" width="12" height="58" rx="3" fill="#a855f7" />
      <rect x="252" y="66" width="12" height="10" rx="2" fill="#e9d5ff" />
      <path d="M274,72 v58 l3,8 l3,-8 v-58 Z" fill="#facc15" stroke="#a16207" />
      {/* scrap box */}
      <rect x="216" y="180" width="80" height="24" rx="3" fill="#a16207" />
      <rect x="220" y="176" width="72" height="8" rx="2" fill="#ca8a04" />
      {[[230, 178], [250, 176], [270, 179]].map(([x, y], k) => <path key={k} d={`M${x},${y} l6,-6 l4,5 Z`} fill={["#f87171", "#60a5fa", "#4ade80"][k]} />)}
      {/* the work in the middle */}
      <rect x="128" y="96" width="64" height="56" rx="2" fill="#fff" stroke="#cbd5e1" />
      <path d="M140,140 l20,-30 l20,30 Z" fill="#fde68a" stroke="#ca8a04" />
      <Tx x={73} y={166} s={t("materials", "նյութեր", "материалы")} lang={lang} size={8} fill="#0f172a" />
      <Tx x={250} y={168} s={t("tools", "գործիքներ", "инструменты")} lang={lang} size={8} fill="#0f172a" />
      <Tx x={100} y={198} s={t("left-handed? swap the sides", "ձախլիկ ե՞ս՝ փոխի՛ր կողմերը", "левша? поменяй стороны")} lang={lang} size={7.5} fill="#7c2d12" w={700} />
    </g>
  ),
  parts: [
    P(160, 28, t("Only what you need", "Միայն անհրաժեշտը", "Только нужное"), t("Look at the task and take out only what it needs. A crowded table means lost pencils and spilt glue.", "Նայի՛ր առաջադրանքին և հանի՛ր միայն այն, ինչ պետք է։ Խառնված սեղանը նշանակում է կորած մատիտներ և թափված սոսինձ։", "Посмотри на задание и достань только то, что для него нужно. На загромождённом столе теряются карандаши и разливается клей.")),
    P(40, 76, t("Materials on the left", "Նյութերը՝ ձախ կողմում", "Материалы слева"), t("Paper and card lie on the left, so your left hand can pass them to the middle without crossing the tools.", "Թուղթն ու ստվարաթուղթը ձախ կողմում են, որպեսզի ձախ ձեռքդ դրանք մեջտեղ տանի՝ առանց գործիքների վրայով անցնելու։", "Бумага и картон лежат слева, чтобы левая рука подавала их в середину, не задевая инструменты.")),
    P(238, 76, t("Closed scissors on the right", "Փակ մկրատը՝ աջ կողմում", "Закрытые ножницы справа"), t("Tools lie on the right, ready for your working hand. Scissors always lie closed, with the points away from you.", "Գործիքներն աջ կողմում են՝ պատրաստ աշխատող ձեռքիդ համար։ Մկրատը միշտ փակ է դրվում՝ ծայրերը քեզնից հեռու։", "Инструменты лежат справа, под рабочей рукой. Ножницы всегда лежат закрытыми, остриями от себя.")),
    P(292, 30, t("The oilcloth", "Մոմլաթը", "Клеёнка"), t("A wipe-clean cover keeps glue and paint off the table. At the end you just wipe it and fold it up.", "Հեշտ մաքրվող ծածկոցը սեղանը պաշտպանում է սոսնձից և ներկից։ Վերջում պարզապես սրբում ես և ծալում։", "Клеёнку легко вытереть, она защищает стол от клея и краски. В конце её просто протирают и складывают.")),
    P(206, 192, t("Scrap box", "Մնացորդների տուփ", "Коробка для обрезков"), t("Put scraps in the box as you go, not on the floor. Big pieces can be kept for the next project.", "Մնացորդներն աշխատելիս գցի՛ր տուփի մեջ, ոչ թե հատակին։ Մեծ կտորները կարելի է պահել հաջորդ աշխատանքի համար։", "Складывай обрезки в коробку сразу, а не на пол. Большие кусочки можно оставить для следующей работы.")),
  ],
};

/* ---------------- grade 1: a paper collage ---------------- */

const collage: Diagram = {
  title: t("How a collage is made", "Ինչպես է պատրաստվում կոլաժը", "Как сделать аппликацию"),
  h: 212,
  draw: (lang) => (
    <g>
      {/* the background */}
      <rect x="16" y="10" width="190" height="150" fill="#1d4ed8" />
      <rect x="16" y="122" width="190" height="38" fill="#16a34a" />
      {/* the house in pieces */}
      <rect x="54" y="90" width="56" height="44" fill="#fef3c7" stroke="#92400e" strokeWidth="0.8" />
      <path d="M46,92 L82,62 L118,92 Z" fill="#dc2626" stroke="#7f1d1d" strokeWidth="0.8" />
      <rect x="74" y="108" width="14" height="26" fill="#92400e" />
      <rect x="94" y="100" width="12" height="12" fill="#7dd3fc" />
      {/* the star and the moon: warm colours on a cool sky */}
      <path d="M160,26 l6,13 l14,1 l-11,9 l4,14 l-13,-8 l-13,8 l4,-14 l-11,-9 l14,-1 Z" fill="#facc15" />
      <path d="M186,70 a14,14 0 1 1 -12,-22 a11,11 0 1 0 12,22 Z" fill="#fde68a" />
      {/* glue dots shown on a piece not yet stuck */}
      <rect x="128" y="168" width="44" height="32" fill="#fef3c7" stroke="#92400e" transform="rotate(-8 150 184)" />
      {[[134, 174], [164, 170], [136, 194], [166, 190], [150, 182]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="2.4" fill="#e0f2fe" stroke="#0284c7" />)}
      {/* template */}
      <path d="M262,40 l9,20 l22,2 l-17,14 l6,22 l-20,-12 l-20,12 l6,-22 l-17,-14 l22,-2 Z" fill="#e2e8f0" stroke="#64748b" />
      <path d="M262,40 l9,20 l22,2 l-17,14 l6,22 l-20,-12 l-20,12 l6,-22 l-17,-14 l22,-2 Z" fill="none" stroke="#334155" strokeDasharray="2 2" transform="translate(4 72)" />
      <path d="M290,170 L304,150" stroke="#facc15" strokeWidth="5" strokeLinecap="round" />
      <path d="M288,173 l2,-3" stroke="#334155" strokeWidth="2" />
      <Tx x={262} y={22} s={t("template", "կաղապար", "шаблон")} lang={lang} size={8} fill="#334155" />
      <Tx x={262} y={198} s={t("draw round it", "շրջագծել", "обвести")} lang={lang} size={8} fill="#334155" />
      <Tx x={70} y={184} s={t("glue in dots|and a thin layer", "սոսինձ՝ կետերով|և բարակ շերտով", "клей точками|и тонким слоем")} lang={lang} size={7.5} fill="#0369a1" />
    </g>
  ),
  parts: [
    P(28, 22, t("The background", "Ֆոնը", "Фон"), t("Choose the background first: it is the sky, the sea or the field your picture lives in. Cool colours like blue and green sit back quietly.", "Նախ ընտրի՛ր ֆոնը․ դա այն երկինքը, ծովը կամ դաշտն է, որտեղ ապրում է նկարդ։ Կապույտի և կանաչի պես սառը գույները հանգիստ մնում են հետևում։", "Сначала выбери фон: это небо, море или поле, где живёт твоя картинка. Холодные цвета, синий и зелёный, спокойно отступают назад.")),
    P(176, 24, t("Warm stands out", "Տաքն աչքի է ընկնում", "Тёплое выделяется"), t("Yellow, orange and red are warm colours. A yellow star on a dark blue sky jumps out at you, which is why we choose colours that stand out against the background.", "Դեղինը, նարնջագույնը և կարմիրը տաք գույներ են։ Մուգ կապույտ երկնքում դեղին աստղն անմիջապես աչքի է ընկնում, ահա թե ինչու ենք ընտրում ֆոնից առանձնացող գույներ։", "Жёлтый, оранжевый и красный — тёплые цвета. Жёлтая звезда на тёмно-синем небе сразу бросается в глаза, поэтому выбирают цвета, которые выделяются на фоне.")),
    P(118, 70, t("Cut in pieces", "Կտոր-կտոր կտրել", "По частям"), t("A house is just a square, a triangle and two small rectangles. Cut each shape separately, then put them together.", "Տունը պարզապես քառակուսի է, եռանկյունի և երկու փոքր ուղղանկյուն։ Ամեն ձևը կտրի՛ր առանձին, հետո միացրու։", "Домик — это просто квадрат, треугольник и два маленьких прямоугольника. Вырежи каждую фигуру отдельно, потом сложи их вместе.")),
    P(150, 206, t("Glue on the back", "Սոսինձը՝ հետևի կողմին", "Клей на изнанку"), t("Put glue on the back of the piece, not on the background: a few dots and a thin line along the edges, so nothing wrinkles.", "Սոսինձը քսի՛ր կտորի հետևի կողմին, ոչ թե ֆոնին․ մի քանի կետ և բարակ գիծ եզրերով, որ ոչինչ չճմրթվի։", "Наноси клей на изнанку детали, а не на фон: несколько точек и тонкую полоску по краям, чтобы ничего не сморщилось.")),
    P(300, 110, t("The template", "Կաղապարը", "Шаблон"), t("Draw round a card template with a sharp pencil to make many identical stars. Cut just inside the line so the pencil does not show.", "Սուր մատիտով շրջագծի՛ր ստվարաթղթե կաղապարը, և կստանաս շատ միանման աստղեր։ Կտրի՛ր գծից մի փոքր ներս, որ մատիտի հետքը չերևա։", "Обведи картонный шаблон острым карандашом — получится много одинаковых звёздочек. Режь чуть внутри линии, чтобы карандаш не было видно.")),
  ],
};

/* ---------------- grade 1: figures from natural materials ---------------- */

const nature: Diagram = {
  title: t("Figures from natural materials", "Կերպարներ բնական նյութերից", "Фигурки из природных материалов"),
  h: 214,
  draw: (lang) => (
    <g>
      <rect x="0" y="176" width="320" height="38" fill="#fef3c7" />
      {/* owl from a pine cone */}
      <ellipse cx="54" cy="128" rx="28" ry="44" fill="#92400e" />
      {Array.from({ length: 5 }, (_, r) => Array.from({ length: 4 }, (_, c) => (
        <path key={`${r}${c}`} d={`M${36 + c * 12 + (r % 2) * 6},${100 + r * 14} q6,8 12,0`} fill="#b45309" stroke="#451a03" strokeWidth="0.8" />
      )))}
      <circle cx="44" cy="96" r="9" fill="#a16207" stroke="#451a03" />
      <circle cx="64" cy="96" r="9" fill="#a16207" stroke="#451a03" />
      <circle cx="44" cy="96" r="3.5" fill="#111827" />
      <circle cx="64" cy="96" r="3.5" fill="#111827" />
      <path d="M50,104 l4,6 l4,-6 Z" fill="#f59e0b" />
      {/* conker man */}
      <circle cx="132" cy="92" r="16" fill="#7c2d12" />
      <ellipse cx="128" cy="86" rx="6" ry="4" fill="#d6d3d1" opacity="0.6" />
      <circle cx="132" cy="134" r="24" fill="#7c2d12" />
      <ellipse cx="124" cy="124" rx="9" ry="6" fill="#d6d3d1" opacity="0.5" />
      <path d="M110,126 l-18,-14 M154,126 l18,-14 M120,154 l-6,22 M144,154 l6,22" stroke="#a16207" strokeWidth="3" strokeLinecap="round" />
      <circle cx="132" cy="108" r="4" fill="#fbbf24" />
      <circle cx="126" cy="90" r="1.8" fill="#fff" />
      <circle cx="138" cy="90" r="1.8" fill="#fff" />
      {/* hedgehog with seed spines */}
      {Array.from({ length: 11 }, (_, j) => {
        const a = Math.PI * (0.95 - j * 0.08);
        return <ellipse key={j} cx={200 + 30 * Math.cos(a)} cy={156 - 24 * Math.sin(a)} rx="3" ry="7" fill="#1f2937" stroke="#e5e7eb" strokeWidth="0.6" transform={`rotate(${90 - (a * 180) / Math.PI} ${200 + 30 * Math.cos(a)} ${156 - 24 * Math.sin(a)})`} />;
      })}
      <path d="M222,146 L250,160 L222,172 Z" fill="#a8a29e" />
      <ellipse cx="200" cy="160" rx="28" ry="18" fill="#a8a29e" />
      <circle cx="250" cy="160" r="3.5" fill="#111827" />
      <circle cx="232" cy="154" r="2" fill="#111827" />
      {/* leaf butterfly */}
      <path d="M284,64 L300,40" stroke="#78350f" strokeWidth="2" />
      <path d="M284,66 C252,30 250,76 282,72 Z" fill="#f97316" stroke="#9a3412" />
      <path d="M286,66 C318,30 320,76 288,72 Z" fill="#facc15" stroke="#a16207" />
      <path d="M284,72 C258,96 270,108 284,80 Z" fill="#dc2626" stroke="#7f1d1d" />
      <path d="M286,72 C312,96 300,108 286,80 Z" fill="#ea580c" stroke="#9a3412" />
      <path d="M285,58 v34" stroke="#451a03" strokeWidth="3" strokeLinecap="round" />
      {/* a book for pressing leaves */}
      <rect x="252" y="140" width="56" height="34" fill="#1e40af" />
      <rect x="252" y="134" width="56" height="8" fill="#f8fafc" stroke="#94a3b8" />
      <path d="M268,136 l14,-10 l12,8" fill="#16a34a" />
      <Tx x={54} y={196} s={t("pine cone", "սոճու կոն", "шишка")} lang={lang} size={8} fill="#78350f" />
      <Tx x={132} y={196} s={t("conkers", "շագանակներ", "каштаны")} lang={lang} size={8} fill="#78350f" />
      <Tx x={206} y={196} s={t("seeds", "սերմեր", "семечки")} lang={lang} size={8} fill="#78350f" />
      <Tx x={276} y={196} s={t("dry leaves", "չոր տերևներ", "сухие листья")} lang={lang} size={8} fill="#78350f" />
    </g>
  ),
  parts: [
    P(18, 86, t("Owl from a cone", "Բու՝ կոնից", "Сова из шишки"), t("A pine cone already looks like feathers. Two acorn cups make big owl eyes, and a scrap of orange paper makes the beak.", "Սոճու կոնն արդեն փետուրների է նման։ Կաղնու պտղի երկու գլխարկ դառնում են բվի մեծ աչքեր, իսկ նարնջագույն թղթի կտորը՝ կտուց։", "Сосновая шишка уже похожа на перья. Две шапочки от желудей становятся большими совиными глазами, а кусочек оранжевой бумаги — клювом.")),
    P(166, 92, t("Conker man", "Շագանակե մարդուկ", "Человечек из каштанов"), t("Join two conkers with a small piece of plasticine. Twigs pushed into the plasticine become arms and legs.", "Երկու շագանակը միացրու պլաստիլինի փոքր կտորով։ Պլաստիլինի մեջ խրված ճյուղիկները դառնում են ձեռքեր և ոտքեր։", "Соедини два каштана кусочком пластилина. Веточки, воткнутые в пластилин, станут руками и ногами.")),
    P(176, 124, t("Seed hedgehog", "Սերմերով ոզնի", "Ёжик из семечек"), t("Model a plasticine body and press sunflower seeds into its back, pointed end out, all leaning the same way.", "Պլաստիլինից մարմին պատրաստի՛ր և արևածաղկի սերմերը սեղմի՛ր մեջքին՝ սուր ծայրը դուրս, բոլորը նույն ուղղությամբ թեքված։", "Вылепи тело из пластилина и вдави в спинку семечки подсолнуха острым концом наружу, все с наклоном в одну сторону.")),
    P(256, 40, t("Leaf butterfly", "Տերևե թիթեռ", "Бабочка из листьев"), t("Two big leaves make the top wings, two smaller ones the bottom wings, and a twig the body. Dry leaves are fragile, so use a little glue and press gently.", "Երկու մեծ տերևը դառնում են վերին թևեր, երկու փոքրը՝ ստորին, իսկ ճյուղիկը՝ մարմին։ Չոր տերևները փխրուն են, ուստի օգտագործի՛ր քիչ սոսինձ և մեղմ սեղմի՛ր։", "Два больших листа — верхние крылья, два поменьше — нижние, а веточка — тельце. Сухие листья хрупкие, поэтому бери немного клея и прижимай осторожно.")),
    P(312, 136, t("Pressing leaves", "Տերևների սեղմում", "Сушка листьев"), t("Put fresh leaves between pages of an old book with something heavy on top. In one or two weeks they are flat and dry and keep their colour.", "Թարմ տերևները դի՛ր հին գրքի էջերի միջև, վրան ծանր բան դիր։ Մեկ-երկու շաբաթից դրանք հարթ ու չոր են և պահում են իրենց գույնը։", "Положи свежие листья между страницами старой книги, а сверху что-нибудь тяжёлое. Через одну-две недели они станут плоскими и сухими и сохранят цвет.")),
  ],
};

/* ---------------- grade 2: the net of a card house ---------------- */

const SQ = 38, NX = 14, NY = 46;
const sq = (c: number, r: number) => [NX + c * SQ, NY + r * SQ] as const;
/** A glue tab on one side of a square: 0 top, 1 right, 2 bottom, 3 left. */
function tab(c: number, r: number, side: number) {
  const [x, y] = sq(c, r), d = 9, e = 7;
  const P4 = [
    [[x, y], [x + e, y - d], [x + SQ - e, y - d], [x + SQ, y]],
    [[x + SQ, y], [x + SQ + d, y + e], [x + SQ + d, y + SQ - e], [x + SQ, y + SQ]],
    [[x, y + SQ], [x + e, y + SQ + d], [x + SQ - e, y + SQ + d], [x + SQ, y + SQ]],
    [[x, y], [x - d, y + e], [x - d, y + SQ - e], [x, y + SQ]],
  ][side];
  return <polygon key={`${c}${r}${side}`} points={P4.map((q) => q.join(",")).join(" ")} fill="#fde68a" stroke="#a16207" strokeWidth="0.8" />;
}

const housenet: Diagram = {
  title: t("The net of a card house", "Ստվարաթղթե տնակի փռվածքը", "Развёртка домика из картона"),
  h: 214,
  draw: (lang) => (
    <g>
      {[tab(0, 1, 0), tab(2, 1, 0), tab(3, 1, 0), tab(0, 1, 2), tab(2, 1, 2), tab(3, 1, 2), tab(3, 1, 1)]}
      {[[1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [1, 2]].map(([c, r]) => {
        const [x, y] = sq(c, r);
        return <rect key={`${c}${r}`} x={x} y={y} width={SQ} height={SQ} fill={r === 1 ? "#fef3c7" : "#e7e5e4"} stroke="#78350f" strokeWidth="1.5" />;
      })}
      {/* fold lines */}
      {[[NX + SQ, NY + SQ, NX + SQ, NY + 2 * SQ], [NX + 2 * SQ, NY + SQ, NX + 2 * SQ, NY + 2 * SQ], [NX + 3 * SQ, NY + SQ, NX + 3 * SQ, NY + 2 * SQ], [NX + SQ, NY + SQ, NX + 2 * SQ, NY + SQ], [NX + SQ, NY + 2 * SQ, NX + 2 * SQ, NY + 2 * SQ]].map(([a, b, c, d], k) => (
        <line key={k} x1={a} y1={b} x2={c} y2={d} stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />
      ))}
      {/* windows and a door drawn on the walls before folding */}
      <rect x={NX + SQ + 13} y={NY + SQ + 14} width="12" height="24" fill="#92400e" />
      <rect x={NX + 10} y={NY + SQ + 10} width="16" height="14" fill="#7dd3fc" stroke="#0369a1" />
      <rect x={NX + 2 * SQ + 11} y={NY + SQ + 10} width="16" height="14" fill="#7dd3fc" stroke="#0369a1" />
      {/* the finished house */}
      <g transform="translate(206 70)">
        <path d="M0,40 h60 v60 h-60 Z" fill="#fef3c7" stroke="#78350f" strokeWidth="1.5" />
        <path d="M60,40 l26,-18 v60 l-26,18 Z" fill="#fde68a" stroke="#78350f" strokeWidth="1.5" />
        <path d="M-6,42 L30,6 L66,42 Z" fill="#dc2626" stroke="#7f1d1d" />
        <path d="M30,6 L56,-12 L92,24 L66,42 Z" fill="#b91c1c" stroke="#7f1d1d" />
        <rect x="22" y="68" width="14" height="32" fill="#92400e" />
        <polygon points="66,58 80,48 80,62 66,72" fill="#7dd3fc" stroke="#0369a1" />
        <rect x="44" y="-14" width="10" height="18" fill="#57534e" />
      </g>
      <Tx x={NX + 2 * SQ} y={NY - 26} s={t("6 cm squares", "6 սմ քառակուսիներ", "квадраты по 6 см")} lang={lang} size={8} fill="#78350f" />
      <Tx x={250} y={196} s={t("folded and glued", "ծալված և սոսնձված", "сложен и склеен")} lang={lang} size={8} fill="#78350f" />
    </g>
  ),
  parts: [
    P(NX + 0.5 * SQ, NY + 1.5 * SQ + 12, t("Four walls in a row", "Չորս պատ՝ շարքով", "Четыре стены в ряд"), t("The four squares in a row become the walls. Draw the door and windows on them before you fold: it is much easier on a flat sheet.", "Շարքով չորս քառակուսիները դառնում են պատեր։ Դուռն ու պատուհանները նկարի՛ր դրանց վրա մինչև ծալելը․ հարթ թերթի վրա շատ ավելի հեշտ է։", "Четыре квадрата в ряд становятся стенами. Нарисуй на них дверь и окна до того, как сгибать: на плоском листе это гораздо легче.")),
    P(NX + 1.5 * SQ, NY + 0.5 * SQ, t("Top", "Վերնամաս", "Верх"), t("The square above the row folds over to close the top of the cube. The pitched roof is glued on top of it.", "Շարքից վերև գտնվող քառակուսին ծալվում է և փակում խորանարդի վերևը։ Թեք տանիքը սոսնձում են դրա վրա։", "Квадрат над рядом сгибается и закрывает верх куба. На него приклеивают двускатную крышу.")),
    P(NX + 1.5 * SQ, NY + 2.5 * SQ, t("Floor", "Հատակ", "Пол"), t("The square below the row folds under to make the floor, so the house stands firmly.", "Շարքից ներքև գտնվող քառակուսին ծալվում է տակ և դառնում հատակ, որ տնակն ամուր կանգնի։", "Квадрат под рядом подгибается вниз и становится полом, чтобы домик стоял устойчиво.")),
    P(NX + 4 * SQ + 9, NY + 1.5 * SQ, t("Glue tabs", "Սոսնձման եզրիկներ", "Клапаны для клея"), t("Small trapezium tabs carry the glue. A cube needs seven of them: twelve edges, minus the five that are already joined by folds.", "Փոքրիկ սեղանաձև եզրիկների վրա սոսինձ են քսում։ Խորանարդին պետք է յոթ եզրիկ․ տասներկու կող՝ հանած այն հինգը, որոնք արդեն միացված են ծալքերով։", "На маленькие клапаны-трапеции наносят клей. Кубу нужно семь клапанов: двенадцать рёбер минус пять, которые уже соединены сгибами.")),
    P(NX + 3 * SQ, NY + 2 * SQ - 6, t("Score the folds", "Ակոսել ծալքերը", "Продавить сгибы"), t("Run the blunt side of the scissors along a ruler over each dashed line. The card then folds sharply and exactly where you want.", "Մկրատի բութ կողմը քանոնի երկայնքով անցկացրու ամեն կետագծի վրայով։ Այդ դեպքում ստվարաթուղթը ծալվում է հստակ և ճիշտ այնտեղ, որտեղ պետք է։", "Проведи тупой стороной ножниц по линейке вдоль каждой пунктирной линии. Тогда картон согнётся чётко и точно там, где нужно.")),
    P(262, 54, t("Pitched roof", "Թեք տանիք", "Двускатная крыша"), t("A card rectangle folded in half makes a roof with two slopes, so that rain runs off both sides.", "Կիսով չափ ծալված ստվարաթղթե ուղղանկյունը դառնում է երկթեք տանիք, որից անձրևը հոսում է երկու կողմ։", "Картонный прямоугольник, сложенный пополам, превращается в двускатную крышу, с которой дождь стекает на обе стороны.")),
  ],
};

/* ---------------- grade 2: fabric and the needle ---------------- */

const WARP = "#2563eb", WEFT = "#f97316";

const weave: Diagram = {
  title: t("Fabric up close, and the sewing kit", "Գործվածքը մոտիկից, և կարի պարագաները", "Ткань вблизи и швейные принадлежности"),
  h: 210,
  draw: (lang) => (
    <g>
      <rect x="14" y="20" width="150" height="150" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
      {/* weft threads underneath, then warp, then weft on top where it passes over */}
      {Array.from({ length: 7 }, (_, r) => <rect key={`w${r}`} x="20" y={28 + r * 20} width="138" height="12" rx="6" fill={WEFT} />)}
      {Array.from({ length: 7 }, (_, c) => <rect key={`v${c}`} x={28 + c * 20} y="22" width="12" height="146" rx="6" fill={WARP} />)}
      {Array.from({ length: 7 }, (_, r) => Array.from({ length: 7 }, (_, c) => ((r + c) % 2 ? <rect key={`o${r}${c}`} x={24 + c * 20} y={28 + r * 20} width="20" height="12" fill={WEFT} /> : null)))}
      <Tx x={89} y={186} s={t("over, under, over, under…", "վրայով, տակով, վրայով, տակով…", "над, под, над, под…")} lang={lang} size={8} fill="#334155" />
      {/* needle */}
      <g transform="rotate(-30 240 60)">
        <path d="M184,60 L292,57 L300,60 L292,63 Z" fill="#cbd5e1" stroke="#475569" />
        <ellipse cx="196" cy="60" rx="7" ry="1.8" fill="#fff" stroke="#475569" strokeWidth="0.8" />
        <path d="M196,60 C170,64 172,90 196,96" fill="none" stroke="#dc2626" strokeWidth="1.5" />
      </g>
      {/* thimble */}
      <path d="M190,150 v-26 q0,-14 16,-14 q16,0 16,14 v26 Z" fill="#cbd5e1" stroke="#475569" />
      {Array.from({ length: 12 }, (_, k) => <circle key={k} cx={196 + (k % 4) * 7} cy={122 + Math.floor(k / 4) * 9} r="1.4" fill="#64748b" />)}
      {/* pincushion */}
      <ellipse cx="270" cy="148" rx="30" ry="20" fill="#ef4444" stroke="#991b1b" />
      <path d="M244,140 q26,12 52,0" fill="none" stroke="#991b1b" />
      {[[256, 134, -20], [272, 130, 0], [288, 134, 18]].map(([x, y, r], k) => (
        <g key={k} transform={`rotate(${r} ${x} ${y})`}><line x1={x} x2={x} y1={y} y2={y - 26} stroke="#64748b" strokeWidth="1.5" /><circle cx={x} cy={y - 26} r="3" fill={["#facc15", "#22c55e", "#3b82f6"][k]} /></g>
      ))}
      {/* magnet */}
      <path d="M232,196 v-14 a10,10 0 0 1 20,0 v14 h-6 v-14 a4,4 0 0 0 -8,0 v14 Z" fill="#dc2626" />
      <rect x="232" y="192" width="6" height="5" fill="#cbd5e1" />
      <rect x="246" y="192" width="6" height="5" fill="#cbd5e1" />
    </g>
  ),
  parts: [
    P(34, 14, t("Warp: lengthways", "Հենք՝ երկայնքով", "Основа: вдоль"), t("On a loom the lengthways threads are stretched tight first. They are called the warp.", "Ջուլհակի հաստոցում նախ ձգում են երկայնական թելերը։ Դրանք կոչվում են հենք։", "На ткацком станке сначала туго натягивают продольные нити. Их называют основой.")),
    P(10, 74, t("Weft: across", "Միջաթել՝ լայնքով", "Уток: поперёк"), t("The crosswise thread goes over one warp thread and under the next, then back the other way. Pushed tightly together, they become fabric.", "Լայնական թելն անցնում է հենքի մի թելի վրայով, հաջորդի տակով, հետո ետ՝ հակառակ ձևով։ Իրար ամուր սեղմված՝ դրանք դառնում են գործվածք։", "Поперечная нить проходит над одной нитью основы и под следующей, потом обратно наоборот. Плотно прижатые друг к другу, они становятся тканью.")),
    P(216, 30, t("The eye", "Ասեղնանցք", "Ушко"), t("The hole in the needle is called the eye. Cut the thread at a slant so its pointed end slips through easily.", "Ասեղի անցքը կոչվում է ասեղնանցք։ Թելը կտրի՛ր թեք, որ սրացած ծայրը հեշտությամբ անցնի։", "Дырочка в иголке называется ушком. Отрежь нитку наискосок, чтобы острый кончик легко прошёл.")),
    P(206, 100, t("Thimble", "Մատնոց", "Напёрсток"), t("A metal cap for the middle finger. Its little dents stop the end of the needle from slipping when you push it through thick fabric.", "Մետաղե գլխիկ միջնամատի համար։ Նրա փոքրիկ փոսիկները թույլ չեն տալիս ասեղի ծայրին սահել, երբ այն հրում ես հաստ գործվածքի միջով։", "Металлический колпачок на средний палец. Маленькие ямки не дают концу иглы соскользнуть, когда проталкиваешь её через толстую ткань.")),
    P(304, 140, t("Pincushion", "Ասեղնաման", "Игольница"), t("Needles and pins live here, never in your mouth or on your clothes. Count them before and after work.", "Ասեղներն ու գնդասեղներն այստեղ են ապրում, երբեք՝ բերանումդ կամ հագուստիդ վրա։ Հաշվի՛ր դրանք աշխատանքից առաջ և հետո։", "Иголки и булавки живут здесь, а не во рту и не на одежде. Пересчитай их до и после работы.")),
    P(220, 186, t("Magnet", "Մագնիս", "Магнит"), t("A dropped needle is hard to see on the floor. Sweep a magnet over the floor and it jumps up by itself.", "Ընկած ասեղը դժվար է տեսնել հատակին։ Մագնիսը սահեցրու հատակի վրայով, և ասեղն ինքը կցատկի դեպի այն։", "Упавшую иголку трудно заметить на полу. Проведи магнитом над полом, и она сама прыгнет к нему.")),
  ],
};

/* ---------------- grade 2: a funny-face sandwich ---------------- */

const sandwich: Diagram = {
  title: t("A healthy funny-face sandwich", "Առողջ բուտերբրոդ՝ զվարճալի դեմքով", "Полезный бутерброд-рожица"),
  h: 214,
  draw: () => (
    <g>
      <ellipse cx="160" cy="112" rx="132" ry="96" fill="#f1f5f9" stroke="#cbd5e1" />
      {/* wholemeal bread */}
      <path d="M90,60 q0,-30 30,-30 h80 q30,0 30,30 v100 q0,20 -20,20 h-100 q-20,0 -20,-20 Z" fill="#b45309" />
      <path d="M98,64 q0,-24 26,-24 h72 q26,0 26,24 v92 q0,16 -16,16 h-92 q-16,0 -16,-16 Z" fill="#d6a461" />
      {[[120, 70], [190, 80], [140, 150], [200, 140], [110, 120]].map(([x, y], k) => <ellipse key={k} cx={x} cy={y} rx="2" ry="1" fill="#92400e" />)}
      {/* cheese */}
      <path d="M104,72 h112 v80 h-112 Z" fill="#fde047" opacity="0.92" />
      <circle cx="120" cy="140" r="4" fill="#facc15" /><circle cx="204" cy="86" r="5" fill="#facc15" />
      {/* herbs as hair */}
      {Array.from({ length: 9 }, (_, k) => <path key={k} d={`M${108 + k * 13},76 q${k % 2 ? 6 : -6},-26 ${k % 2 ? -2 : 4},-40`} stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" />)}
      {/* tomato eyes */}
      {[134, 186].map((x) => <g key={x}><circle cx={x} cy="100" r="14" fill="#ef4444" stroke="#b91c1c" /><circle cx={x} cy="100" r="5" fill="#fca5a5" />{[0, 1, 2, 3, 4, 5].map((j) => <line key={j} x1={x} y1="100" x2={x + 10 * Math.cos(j)} y2={100 + 10 * Math.sin(j)} stroke="#b91c1c" strokeWidth="0.7" />)}</g>)}
      {/* egg nose */}
      <ellipse cx="160" cy="122" rx="9" ry="11" fill="#fff" stroke="#e5e7eb" />
      <circle cx="160" cy="123" r="5" fill="#f59e0b" />
      {/* cucumber smile */}
      {[-2, -1, 0, 1, 2].map((j) => <g key={j}><circle cx={160 + j * 13} cy={146 - Math.abs(j) * 3 * (Math.abs(j) > 1 ? 1.5 : 1)} r="7" fill="#86efac" stroke="#15803d" strokeWidth="2" /></g>)}
      {/* blunt knife */}
      <path d="M244,190 l40,-50 q6,-4 4,4 l-34,52 Z" fill="#cbd5e1" stroke="#64748b" />
      <rect x="230" y="186" width="20" height="8" rx="3" fill="#1e293b" transform="rotate(-52 240 190)" />
    </g>
  ),
  parts: [
    P(96, 44, t("Wholemeal bread", "Ամբողջահատիկ հաց", "Цельнозерновой хлеб"), t("Wholemeal bread is made from the whole grain, with its skin. It keeps you full longer than white bread. Lavash works just as well.", "Ամբողջահատիկ հացը պատրաստում են ամբողջ հատիկից՝ թաղանթով հանդերձ։ Այն ավելի երկար է կուշտ պահում, քան սպիտակ հացը։ Լավաշը նույնպես լավ տարբերակ է։", "Цельнозерновой хлеб делают из целого зерна вместе с оболочкой. Он дольше насыщает, чем белый хлеб. Лаваш тоже подойдёт.")),
    P(224, 120, t("Cheese", "Պանիր", "Сыр"), t("Cheese and cottage cheese give your bones and teeth calcium and your muscles protein.", "Պանիրն ու կաթնաշոռը ոսկորներին և ատամներին կալցիում են տալիս, իսկ մկաններին՝ սպիտակուց։", "Сыр и творог дают костям и зубам кальций, а мышцам — белок.")),
    P(134, 78, t("Tomato", "Լոլիկ", "Помидор"), t("Tomatoes are full of water and vitamin C. Wash them well and let an adult slice them, or use cherry tomatoes cut in half.", "Լոլիկը լի է ջրով և C վիտամինով։ Լավ լվա՛ և թող մեծահասակը կտրատի, կամ օգտագործի՛ր կիսով չափ կտրած բալ-լոլիկներ։", "В помидорах много воды и витамина C. Хорошо вымой их и попроси взрослого нарезать или возьми помидоры черри, разрезанные пополам.")),
    P(214, 30, t("Herbs", "Կանաչի", "Зелень"), t("Parsley, dill and coriander make green hair. Herbs add flavour and vitamins without any salt.", "Մաղադանոսը, սամիթը և համեմը կանաչ մազեր են դառնում։ Կանաչին համ և վիտամիններ է ավելացնում՝ առանց աղի։", "Петрушка, укроп и кинза станут зелёными волосами. Зелень добавляет вкус и витамины без соли.")),
    P(172, 116, t("Egg", "Ձու", "Яйцо"), t("A hard-boiled egg is a small parcel of protein. Peel it and cut it into slices or halves.", "Պինդ եփած ձուն սպիտակուցի փոքրիկ ծրար է։ Կեղևը հանի՛ր և կտրատի՛ր շերտերով կամ կիսով չափ։", "Сваренное вкрутую яйцо — маленький запас белка. Очисти его и нарежь кружками или половинками.")),
    P(186, 160, t("Cucumber", "Վարունգ", "Огурец"), t("Thin cucumber rounds make a crunchy smile. A cucumber is almost all water, so it is very refreshing.", "Վարունգի բարակ օղակները խրթխրթան ժպիտ են դառնում։ Վարունգը գրեթե ամբողջությամբ ջուր է, ուստի շատ թարմացնող է։", "Тонкие кружочки огурца — хрустящая улыбка. Огурец почти весь состоит из воды, поэтому очень освежает.")),
    P(292, 136, t("Blunt knife", "Բութ դանակ", "Тупой нож"), t("Spread and arrange with a blunt knife. Sharp knives, the cooker and electrical appliances only with an adult.", "Քսի՛ր և դասավորի՛ր բութ դանակով։ Սուր դանակները, սալօջախը և էլեկտրական սարքերը՝ միայն մեծահասակի հետ։", "Намазывай и раскладывай тупым ножом. Острые ножи, плиту и электроприборы — только вместе со взрослым.")),
  ],
};

/* ---------------- grade 3: an Armenian carpet ---------------- */

const RED = "#991b1b", GOLD = "#fbbf24", NAVY = "#1e3a8a", IVORY = "#fef3c7";

/** The eternity sign: eight arms turning around a centre. */
const Eternity = ({ x, y, r, c = GOLD }: { x: number; y: number; r: number; c?: string }) => (
  <g>
    {Array.from({ length: 8 }, (_, j) => (
      <path key={j} d={`M${x},${y} q${r * 0.6},${-r * 0.2} ${r * 0.7},${-r * 0.8} q${-r * 0.1},${r * 0.35} ${-r * 0.35},${r * 0.55} Z`} fill={c} transform={`rotate(${j * 45} ${x} ${y})`} />
    ))}
    <circle cx={x} cy={y} r={r * 0.18} fill={RED} />
  </g>
);

const Dragon = ({ x, y, flip = 1 }: { x: number; y: number; flip?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${flip} 1)`}>
    <path d="M-18,14 C-18,-2 0,-2 0,-10 C0,-18 12,-18 16,-14" fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
    <path d="M16,-14 l8,-4 l-2,8 Z" fill={GOLD} />
    <path d="M-18,14 l-6,6 M-8,4 l-4,8 M4,-12 l2,-8" stroke={GOLD} strokeWidth="2" />
  </g>
);

const carpet: Diagram = {
  title: t("Reading an Armenian carpet", "Ինչպես կարդալ հայկական գորգը", "Как читать армянский ковёр"),
  h: 214,
  draw: (lang) => (
    <g>
      {/* fringes */}
      {Array.from({ length: 30 }, (_, j) => <g key={j}><line x1={30 + j * 6.4} x2={30 + j * 6.4} y1="10" y2="18" stroke="#d6d3d1" strokeWidth="1.5" /><line x1={30 + j * 6.4} x2={30 + j * 6.4} y1="190" y2="198" stroke="#d6d3d1" strokeWidth="1.5" /></g>)}
      <rect x="26" y="18" width="196" height="172" fill={NAVY} />
      <rect x="36" y="28" width="176" height="152" fill={RED} />
      {/* border of small diamonds */}
      {Array.from({ length: 14 }, (_, j) => <path key={`t${j}`} d={`M${42 + j * 12.4},23 l5,-4 l5,4 l-5,4 Z`} fill={GOLD} />)}
      {Array.from({ length: 14 }, (_, j) => <path key={`b${j}`} d={`M${42 + j * 12.4},185 l5,-4 l5,4 l-5,4 Z`} fill={GOLD} />)}
      {Array.from({ length: 13 }, (_, j) => <path key={`l${j}`} d={`M31,${30 + j * 12} l-4,5 l4,5 l4,-5 Z`} fill={GOLD} />)}
      {Array.from({ length: 13 }, (_, j) => <path key={`r${j}`} d={`M217,${30 + j * 12} l-4,5 l4,5 l4,-5 Z`} fill={GOLD} />)}
      {/* central medallion */}
      <path d="M124,52 L178,104 L124,156 L70,104 Z" fill={NAVY} stroke={GOLD} strokeWidth="2" />
      <path d="M124,70 L160,104 L124,138 L88,104 Z" fill={IVORY} />
      <Eternity x={124} y={104} r={26} c={RED} />
      {/* dragons in the corners */}
      <Dragon x={62} y={52} />
      <Dragon x={186} y={52} flip={-1} />
      <Dragon x={62} y={160} />
      <Dragon x={186} y={160} flip={-1} />
      {/* tree of life and birds at the sides */}
      <g>
        <line x1="50" x2="50" y1="84" y2="128" stroke={IVORY} strokeWidth="3" />
        {[0, 1, 2].map((j) => <g key={j}><path d={`M50,${92 + j * 12} l-9,-6 M50,${92 + j * 12} l9,-6`} stroke={IVORY} strokeWidth="2" /><path d={`M41,${86 + j * 12} l-3,-3 l3,-3 l3,3 Z M59,${86 + j * 12} l-3,-3 l3,-3 l3,3 Z`} fill="#86efac" /></g>)}
      </g>
      {[[198, 92], [198, 116]].map(([x, y], j) => (
        <g key={j}><path d={`M${x - 8},${y} l8,-6 l8,6 l-8,3 Z`} fill={IVORY} /><circle cx={x + 8} cy={y - 4} r="2.5" fill={IVORY} /><path d={`M${x - 8},${y} l-5,-3 v6 Z`} fill={IVORY} /></g>
      ))}
      {/* knot close-up */}
      <circle cx="270" cy="62" r="40" fill="#fef2f2" stroke="#64748b" strokeWidth="1.5" />
      {Array.from({ length: 5 }, (_, r) => Array.from({ length: 5 }, (_, c) => (
        <circle key={`${r}${c}`} cx={250 + c * 10} cy={42 + r * 10} r="4" fill={(r + c) % 4 === 0 ? GOLD : RED} />
      )))}
      <line x1="200" x2="236" y1="96" y2="80" stroke="#64748b" strokeDasharray="3 2" />
      {/* cochineal */}
      <ellipse cx="270" cy="160" rx="10" ry="7" fill="#e5e7eb" stroke="#9ca3af" />
      <ellipse cx="270" cy="160" rx="5" ry="3.5" fill="#be123c" />
      <rect x="244" y="172" width="52" height="10" rx="3" fill="#be123c" />
      <Tx x={276} y={118} s={t("one knot = one dot", "մեկ հանգույց = մեկ կետ", "один узел = одна точка")} lang={lang} size={7.5} fill="#334155" />
      <Tx x={270} y={204} s={t("vordan karmir", "որդան կարմիր", "вордан кармир")} lang={lang} size={8} fill="#be123c" />
    </g>
  ),
  parts: [
    P(124, 120, t("Eternity sign", "Հավերժության նշան", "Знак вечности"), t("Arms turning round a centre, like a wheel that never stops. In Armenian art it stands for the endlessness of life and is found on carpets, khachkars and coins.", "Կենտրոնի շուրջը պտտվող թևեր, ինչպես երբեք չկանգնող անիվ։ Հայկական արվեստում այն խորհրդանշում է կյանքի անվերջությունը և հանդիպում է գորգերի, խաչքարերի և դրամների վրա։", "Лучи, вращающиеся вокруг центра, как колесо, которое никогда не останавливается. В армянском искусстве он означает бесконечность жизни и встречается на коврах, хачкарах и монетах.")),
    P(76, 40, t("Dragons", "Վիշապներ", "Драконы"), t("S-shaped dragons gave their name to the famous dragon carpets, vishapagorg. They stood for strength and protected the home.", "S-աձև վիշապներն իրենց անունը տվել են հայտնի վիշապագորգերին։ Դրանք խորհրդանշում էին ուժ և պաշտպանում էին տունը։", "S-образные драконы дали имя знаменитым «драконовым коврам» — вишапагоргам. Они означали силу и защищали дом.")),
    P(50, 136, t("Tree of life", "Կենաց ծառ", "Древо жизни"), t("A trunk with branches on both sides: life, the family and its generations growing from one root.", "Երկու կողմերում ճյուղերով բուն․ կյանքը, ընտանիքը և նրա սերունդները, որոնք աճում են մեկ արմատից։", "Ствол с ветвями по обе стороны: жизнь, семья и её поколения, растущие из одного корня.")),
    P(206, 130, t("Birds", "Թռչուններ", "Птицы"), t("Birds and eagles stand for freedom. Weavers often placed them in pairs facing the tree of life.", "Թռչուններն ու արծիվները խորհրդանշում են ազատություն։ Ջուլհակները հաճախ դրանք զույգերով էին տեղադրում՝ դեմքով դեպի կենաց ծառը։", "Птицы и орлы означают свободу. Ткачихи часто помещали их парами, лицом к древу жизни.")),
    P(212, 34, t("Border", "Եզրազարդ", "Кайма"), t("A border of small repeating shapes frames the carpet like a picture frame. Many carpets have several borders, one inside another.", "Կրկնվող փոքր ձևերից եզրազարդը գորգը շրջանակում է նկարի շրջանակի պես։ Շատ գորգեր ունեն մի քանի եզրազարդ՝ մեկը մյուսի ներսում։", "Кайма из маленьких повторяющихся фигур обрамляет ковёр, как рамка картину. У многих ковров несколько кайм, одна внутри другой.")),
    P(310, 62, t("Knots", "Հանգույցներ", "Узлы"), t("A knotted carpet is a mosaic of tiny knots, each tied by hand round two warp threads and cut short. A good carpet has hundreds of thousands of them, so one carpet can take months.", "Հանգույցավոր գորգը մանրիկ հանգույցների խճանկար է․ յուրաքանչյուրը ձեռքով կապում են հենքի երկու թելի շուրջ և կարճ կտրում։ Լավ գորգն ունի հարյուր հազարավոր հանգույցներ, ուստի մեկ գորգը կարող է ամիսներ տևել։", "Узелковый ковёр — мозаика из крошечных узелков: каждый вручную завязывают вокруг двух нитей основы и коротко подрезают. В хорошем ковре сотни тысяч узлов, поэтому один ковёр могут ткать месяцами.")),
    P(296, 150, t("Armenian red", "Հայկական կարմիր", "Армянский красный"), t("The famous red came from vordan karmir, a tiny insect that lives on the roots of grasses on the Ararat Plain. Dried and ground, the insects gave a deep red that hardly faded.", "Հայտնի կարմիրը ստանում էին որդան կարմիրից՝ մանրիկ միջատից, որն ապրում է Արարատյան դաշտի խոտերի արմատներին։ Չորացրած և աղացած միջատները տալիս էին մուգ կարմիր գույն, որը գրեթե չէր խամրում։", "Знаменитый красный получали из вордан кармира — крошечного насекомого, которое живёт на корнях трав Араратской равнины. Высушенные и растёртые насекомые давали густой красный цвет, который почти не выцветал.")),
  ],
};

/* ---------------- grade 3: sorting waste ---------------- */

const BINS: Array<{ c: string; name: Tr; becomes: Tr }> = [
  { c: "#2563eb", name: t("paper", "թուղթ", "бумага"), becomes: t("new paper", "նոր թուղթ", "новая бумага") },
  { c: "#eab308", name: t("plastic", "պլաստիկ", "пластик"), becomes: t("fleece", "ֆլիս", "флис") },
  { c: "#16a34a", name: t("glass", "ապակի", "стекло"), becomes: t("new jars", "նոր բանկաներ", "новые банки") },
  { c: "#64748b", name: t("metal", "մետաղ", "металл"), becomes: t("new cans", "նոր տարաներ", "новые банки") },
  { c: "#92400e", name: t("organic", "օրգանական", "органика"), becomes: t("compost", "կոմպոստ", "компост") },
];

const bins: Diagram = {
  title: t("Sorting waste: what each bin becomes", "Աղբի տեսակավորում․ ինչ է դառնում ամեն աման", "Сортировка мусора: во что превращается каждый бак"),
  h: 214,
  draw: (lang) => (
    <g>
      {BINS.map((b, j) => {
        const x = 34 + j * 63;
        return (
          <g key={j}>
            <path d={`M${x - 22},92 h44 l-4,62 h-36 Z`} fill={b.c} />
            <rect x={x - 25} y="84" width="50" height="9" rx="3" fill={b.c} stroke="#0f172a" strokeOpacity="0.25" />
            <Tx x={x} y={124} s={b.name} lang={lang} size={6.5} fill="#fff" />
            <path d={`M${x},158 v14`} stroke="#94a3b8" strokeWidth="1.5" />
            <path d={`M${x - 4},168 l4,6 l4,-6`} fill="none" stroke="#94a3b8" strokeWidth="1.5" />
            <Tx x={x} y={190} s={b.becomes} lang={lang} size={6.5} fill={b.c} />
          </g>
        );
      })}
      {/* what goes in */}
      <rect x="20" y="40" width="28" height="34" fill="#f8fafc" stroke="#94a3b8" />
      {[0, 1, 2].map((j) => <line key={j} x1="24" x2="44" y1={48 + j * 8} y2={48 + j * 8} stroke="#cbd5e1" strokeWidth="2" />)}
      <path d="M90,74 h14 v-26 l-3,-6 v-8 h-8 v8 l-3,6 Z" fill="#bae6fd" stroke="#0284c7" />
      <rect x="93" y="30" width="8" height="5" fill="#eab308" />
      <path d="M152,74 h16 v-24 q0,-6 -4,-8 v-10 h-8 v10 q-4,2 -4,8 Z" fill="#86efac" stroke="#15803d" />
      <rect x="210" y="44" width="20" height="30" rx="3" fill="#cbd5e1" stroke="#475569" />
      <line x1="210" x2="230" y1="52" y2="52" stroke="#475569" />
      <line x1="210" x2="230" y1="66" y2="66" stroke="#475569" />
      <path d="M274,72 q-10,-14 0,-28 q12,6 6,28 Z" fill="#fb923c" />
      <path d="M280,72 q6,-18 16,-20 q-2,16 -16,20 Z" fill="#facc15" />
      <Tx x={160} y={18} s={t("put in clean and dry", "գցել մաքուր և չոր", "класть чистым и сухим")} lang={lang} size={8.5} fill="#475569" />
    </g>
  ),
  parts: [
    P(34, 140, t("Paper and card", "Թուղթ և ստվարաթուղթ", "Бумага и картон"), t("Newspapers, boxes and old exercise books are mashed into pulp again and made into new paper, card and egg boxes.", "Թերթերը, տուփերը և հին տետրերը նորից դարձնում են զանգված և դրանից պատրաստում նոր թուղթ, ստվարաթուղթ և ձվի տուփեր։", "Газеты, коробки и старые тетради снова превращают в массу и делают из неё новую бумагу, картон и коробки для яиц.")),
    P(97, 140, t("Plastic", "Պլաստիկ", "Пластик"), t("Clean bottles are chopped into flakes, melted and spun into thread. Soft fleece jackets are often made from old bottles.", "Մաքուր շշերը մանրացնում են փաթիլների, հալեցնում և թել մանում։ Փափուկ ֆլիսե բաճկոնները հաճախ պատրաստում են հին շշերից։", "Чистые бутылки измельчают в хлопья, плавят и прядут из них нить. Мягкие флисовые куртки часто делают из старых бутылок.")),
    P(160, 140, t("Glass", "Ապակի", "Стекло"), t("Glass can be melted and made into new jars and bottles again and again, without getting worse.", "Ապակին կարելի է հալեցնել և դրանից նորից ու նորից նոր բանկաներ և շշեր պատրաստել՝ առանց որակը կորցնելու։", "Стекло можно плавить и снова и снова делать из него новые банки и бутылки, и оно не становится хуже.")),
    P(223, 140, t("Metal", "Մետաղ", "Металл"), t("Tins and cans are melted down and rolled into new metal. Rinse them first and squash them to save space.", "Թիթեղյա տարաները հալեցնում են և գլանում նոր մետաղի։ Նախ ողողի՛ր և սեղմի՛ր, որ տեղ խնայես։", "Жестяные банки переплавляют и прокатывают в новый металл. Сначала сполосни их и сплющи, чтобы сэкономить место.")),
    P(286, 140, t("Organic", "Օրգանական", "Органика"), t("Fruit peel and vegetable scraps rot in a compost heap into dark, crumbly soil food for the garden.", "Մրգի կեղևն ու բանջարեղենի մնացորդները կոմպոստի կույտում փտում են և դառնում մուգ, փխրուն պարարտանյութ այգու համար։", "Кожура фруктов и обрезки овощей перегнивают в компостной куче в тёмное рассыпчатое удобрение для сада.")),
  ],
};

/* ---------------- grade 3: laying the table ---------------- */

const table: Diagram = {
  title: t("Laying a place at the table", "Սեղանի մեկ տեղի սպասք", "Сервировка одного места за столом"),
  h: 214,
  draw: () => (
    <g>
      <rect x="0" y="0" width="320" height="214" fill="#fef9c3" />
      <rect x="40" y="30" width="240" height="160" rx="10" fill="#fecaca" opacity="0.6" />
      <line x1="0" x2="320" y1="204" y2="204" stroke="#a16207" strokeWidth="6" />
      {/* plate with a napkin fan */}
      <circle cx="160" cy="124" r="52" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <circle cx="160" cy="124" r="38" fill="#f8fafc" stroke="#e2e8f0" />
      {Array.from({ length: 6 }, (_, j) => <path key={j} d={`M160,140 L${136 + j * 10},${100 + Math.abs(j - 2.5) * 3} l8,0 Z`} fill={j % 2 ? "#93c5fd" : "#bfdbfe"} stroke="#3b82f6" strokeWidth="0.5" />)}
      {/* fork */}
      <rect x="88" y="110" width="5" height="62" rx="2" fill="#94a3b8" />
      <path d="M82,82 v22 q8,10 16,0 v-22 M87,82 v18 M93,82 v18" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
      {/* knife, blade towards the plate */}
      <rect x="226" y="120" width="6" height="52" rx="2" fill="#475569" />
      <path d="M226,120 v-38 q0,-6 4,-6 q2,0 2,6 v38 Z" fill="#cbd5e1" stroke="#94a3b8" />
      {/* spoon */}
      <ellipse cx="250" cy="94" rx="7" ry="11" fill="#cbd5e1" stroke="#94a3b8" />
      <rect x="248" y="104" width="4" height="66" rx="2" fill="#94a3b8" />
      {/* glass */}
      <circle cx="244" cy="54" r="14" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
      <circle cx="244" cy="54" r="9" fill="#bae6fd" />
      {/* bread plate */}
      <circle cx="84" cy="54" r="18" fill="#fff" stroke="#cbd5e1" strokeWidth="1.5" />
      <path d="M72,54 q12,-14 24,0 q-12,8 -24,0 Z" fill="#f5d0a9" stroke="#b45309" />
    </g>
  ),
  parts: [
    P(160, 184, t("Plate", "Ափսե", "Тарелка"), t("The plate goes in the middle, about 2 cm from the edge of the table, so it cannot be knocked off.", "Ափսեն դրվում է մեջտեղում՝ սեղանի եզրից մոտ 2 սմ հեռու, որ պատահաբար չընկնի։", "Тарелку ставят посередине, примерно в 2 см от края стола, чтобы её не столкнуть.")),
    P(70, 120, t("Fork on the left", "Պատառաքաղը՝ ձախ", "Вилка слева"), t("We hold food with the fork in the left hand while the right hand cuts.", "Պատառաքաղով սնունդը պահում ենք ձախ ձեռքով, իսկ աջ ձեռքով կտրում ենք։", "Вилкой в левой руке придерживают еду, а правой режут.")),
    P(214, 150, t("Knife on the right", "Դանակը՝ աջ", "Нож справа"), t("The knife lies to the right of the plate with its blade turned towards the plate, never towards your neighbour.", "Դանակը դրվում է ափսեից աջ՝ սայրը դեպի ափսեն, երբեք՝ դեպի հարևանդ։", "Нож кладут справа от тарелки лезвием к тарелке, а не к соседу.")),
    P(266, 120, t("Spoon", "Գդալ", "Ложка"), t("The spoon goes to the right of the knife, ready for soup.", "Գդալը դրվում է դանակից աջ՝ պատրաստ ապուրի համար։", "Ложку кладут справа от ножа, она готова для супа.")),
    P(264, 40, t("Glass", "Բաժակ", "Стакан"), t("The glass stands at the top right, just above the knife, where your right hand finds it easily.", "Բաժակը դրվում է վերևում՝ աջ, դանակից անմիջապես վեր, որտեղ աջ ձեռքդ հեշտությամբ կգտնի այն։", "Стакан ставят вверху справа, прямо над ножом, где его легко найдёт правая рука.")),
    P(64, 40, t("Bread plate", "Հացի ափսե", "Тарелка для хлеба"), t("A small plate for bread sits at the top left. In Armenia it often holds lavash.", "Հացի փոքր ափսեն դրվում է վերևում՝ ձախ։ Հայաստանում դրա մեջ հաճախ լավաշ է լինում։", "Маленькая тарелка для хлеба стоит вверху слева. В Армении на ней часто лежит лаваш.")),
    P(184, 98, t("Napkin", "Անձեռոցիկ", "Салфетка"), t("A napkin folded like a fan can stand on the plate or in a glass. Before eating, open it and lay it on your lap.", "Հովհարի պես ծալված անձեռոցիկը կարող է կանգնել ափսեի մեջ կամ բաժակում։ Ուտելուց առաջ բացի՛ր և դի՛ր գոգիդ։", "Салфетку, сложенную веером, можно поставить на тарелку или в стакан. Перед едой разверни её и положи на колени.")),
  ],
};

/* ---------------- grade 4: the design process ---------------- */

const STEPS: Array<[Tr, string]> = [
  [t("Problem", "Խնդիր", "Задача"), "#ef4444"],
  [t("Requirements", "Պահանջներ", "Требования"), "#f97316"],
  [t("Ideas", "Գաղափարներ", "Идеи"), "#eab308"],
  [t("Choice", "Ընտրություն", "Выбор"), "#84cc16"],
  [t("Sketch, plan", "Էսքիզ, պլան", "Эскиз, план"), "#10b981"],
  [t("Making", "Պատրաստում", "Изготовление"), "#0ea5e9"],
  [t("Testing", "Փորձարկում", "Испытание"), "#6366f1"],
  [t("Improving", "Բարելավում", "Улучшение"), "#a855f7"],
];
const DCX = 160, DCY = 112, DR = 70;
const dAt = (j: number, r = DR) => [DCX + r * Math.sin((j * Math.PI) / 4), DCY - r * Math.cos((j * Math.PI) / 4)] as const;

const designcycle: Diagram = {
  title: t("The design process: a pencil pot", "Նախագծման ընթացքը․ մատիտաման", "Процесс проектирования: стакан для карандашей"),
  h: 222,
  draw: (lang) => (
    <g>
      <circle cx={DCX} cy={DCY} r={DR} fill="none" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="6 5" />
      {/* the pencil pot in the middle: a bundle of tubes */}
      <rect x="132" y="104" width="56" height="10" rx="3" fill="#475569" />
      {[0, 1, 2, 3].map((j) => <rect key={j} x={136 + j * 12} y={78 - (j % 2) * 6} width="12" height={28 + (j % 2) * 6} fill={["#fca5a5", "#fde68a", "#86efac", "#93c5fd"][j]} stroke="#475569" strokeWidth="0.8" />)}
      {[0, 1, 2, 3, 4].map((j) => <line key={j} x1={140 + j * 10} x2={142 + j * 9} y1={76 - (j % 2) * 6} y2={56 - (j % 3) * 4} stroke={["#ef4444", "#2563eb", "#16a34a", "#eab308", "#7c3aed"][j]} strokeWidth="3" strokeLinecap="round" />)}
      <Tx x={DCX} y={132} s={t("pencil pot", "մատիտաման", "стакан")} lang={lang} size={8} fill="#475569" />
      {STEPS.map(([name, c], j) => {
        const [x, y] = dAt(j);
        const [lx, ly] = dAt(j, DR + 19);
        return (
          <g key={j}>
            <circle cx={x} cy={y} r="13" fill={c} />
            <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">{j + 1}</text>
            <Tx x={lx} y={ly + 3} s={name} lang={lang} size={7} fill={c} anchor={j === 0 || j === 4 ? "middle" : j < 4 ? "start" : "end"} />
          </g>
        );
      })}
    </g>
  ),
  parts: [
    P(dAt(0)[0], dAt(0)[1], STEPS[0][0], t("What is needed, and for whom? Pencils roll about the desk and get lost.", "Ի՞նչ է պետք, և ո՞ւմ համար։ Մատիտները գլորվում են սեղանի վրա և կորչում։", "Что нужно и для кого? Карандаши раскатываются по столу и теряются.")),
    P(dAt(1)[0], dAt(1)[1], STEPS[1][0], t("What must it be like? It holds 10–15 pencils, stands firmly, looks nice and is made from recycled materials.", "Ինչպիսի՞ն պետք է լինի։ Տեղավորում է 10–15 մատիտ, ամուր կանգնում է, գեղեցիկ է և պատրաստված է վերամշակված նյութերից։", "Каким он должен быть? Вмещает 10–15 карандашей, устойчиво стоит, красиво выглядит и сделан из вторсырья.")),
    P(dAt(2)[0], dAt(2)[1], STEPS[2][0], t("Think of several options before choosing: a glass jar, a box, the bottom of a bottle, a bundle of tubes.", "Ընտրելուց առաջ մի քանի տարբերակ մտածի՛ր՝ ապակե բանկա, տուփ, շշի տակ, խողովակների կապոց։", "Придумай несколько вариантов, прежде чем выбирать: стеклянная банка, коробка, дно бутылки, связка трубок.")),
    P(dAt(3)[0], dAt(3)[1], STEPS[3][0], t("Compare the ideas with the requirements. The tubes win: every kind of pencil gets its own compartment.", "Համեմատի՛ր գաղափարները պահանջների հետ։ Հաղթում են խողովակները․ ամեն տեսակի մատիտ իր բաժինն է ստանում։", "Сравни идеи с требованиями. Побеждают трубки: у каждого вида карандашей своё отделение.")),
    P(dAt(4)[0], dAt(4)[1], STEPS[4][0], t("Draw the pot, write the sizes, choose materials and tools, and plan the order of work.", "Նկարի՛ր մատիտամանը, գրի՛ր չափերը, ընտրի՛ր նյութերն ու գործիքները և պլանավորի՛ր աշխատանքի հաջորդականությունը։", "Нарисуй стакан, запиши размеры, выбери материалы и инструменты и спланируй порядок работы.")),
    P(dAt(5)[0], dAt(5)[1], STEPS[5][0], t("Work step by step: cut the tubes, cover them in paper, glue them together and onto a base.", "Աշխատի՛ր քայլ առ քայլ․ կտրի՛ր խողովակները, պատի՛ր թղթով, սոսնձի՛ր իրար և հիմքին։", "Работай шаг за шагом: разрежь трубки, оклей их бумагой, склей вместе и приклей к основанию.")),
    P(dAt(6)[0], dAt(6)[1], STEPS[6][0], t("Does it solve the problem? Take a pencil out quickly: does the pot tip over?", "Արդյո՞ք այն լուծում է խնդիրը։ Արագ հանի՛ր մատիտը․ մատիտամանը չի՞ շրջվում։", "Решает ли он задачу? Быстро вытащи карандаш: не опрокидывается ли стакан?")),
    P(dAt(7)[0], dAt(7)[1], STEPS[7][0], t("Fix the weak points: if it tips over, glue on a heavier base. Then test again. Mistakes are part of designing.", "Ուղղի՛ր թույլ կողմերը․ եթե շրջվում է, սոսնձի՛ր ավելի ծանր հիմք։ Հետո նորից փորձարկի՛ր։ Սխալները նախագծման մասն են։", "Исправь слабые места: если опрокидывается, приклей основание потяжелее. Потом испытай снова. Ошибки — часть проектирования.")),
  ],
};

/* ---------------- grade 4: a technical drawing ---------------- */

const DimArrow = ({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) => {
  const a = Math.atan2(y2 - y1, x2 - x1), h = 6;
  const tip = (x: number, y: number, b: number) => `M${x},${y} l${h * Math.cos(b + 0.35)},${h * Math.sin(b + 0.35)} M${x},${y} l${h * Math.cos(b - 0.35)},${h * Math.sin(b - 0.35)}`;
  return <path d={`M${x1},${y1} L${x2},${y2} ${tip(x1, y1, a)} ${tip(x2, y2, a + Math.PI)}`} stroke="#0f172a" strokeWidth="0.8" fill="none" />;
};

const techdrawing: Diagram = {
  title: t("Sketch and technical drawing", "Էսքիզ և տեխնիկական գծագիր", "Эскиз и технический чертёж"),
  h: 214,
  draw: (lang) => (
    <g>
      <rect x="0" y="0" width="320" height="214" fill="#f8fafc" />
      {/* the drawing: a plate 80 × 50 with a hole and a hidden groove, scale 1:1 at 2 px per mm */}
      <rect x="30" y="60" width="160" height="100" fill="#fff" stroke="#0f172a" strokeWidth="2.6" />
      <circle cx="110" cy="110" r="20" fill="none" stroke="#0f172a" strokeWidth="2.6" />
      <line x1="30" x2="190" y1="142" y2="142" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="6 4" />
      <line x1="80" x2="140" y1="110" y2="110" stroke="#0f172a" strokeWidth="0.8" strokeDasharray="14 3 2 3" />
      <line x1="110" x2="110" y1="80" y2="140" stroke="#0f172a" strokeWidth="0.8" strokeDasharray="14 3 2 3" />
      {/* dimensions */}
      <line x1="30" x2="30" y1="58" y2="36" stroke="#0f172a" strokeWidth="0.6" />
      <line x1="190" x2="190" y1="58" y2="36" stroke="#0f172a" strokeWidth="0.6" />
      <DimArrow x1={30} y1={42} x2={190} y2={42} />
      <text x="110" y="38" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">80</text>
      <line x1="192" x2="214" y1="60" y2="60" stroke="#0f172a" strokeWidth="0.6" />
      <line x1="192" x2="214" y1="160" y2="160" stroke="#0f172a" strokeWidth="0.6" />
      <DimArrow x1={208} y1={60} x2={208} y2={160} />
      <text x="204" y="114" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a" transform="rotate(-90 204 110)">50</text>
      <path d="M124,96 L150,74 H170" stroke="#0f172a" strokeWidth="0.8" fill="none" />
      <text x="160" y="70" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f172a">Ø20</text>
      {/* title block */}
      <rect x="30" y="176" width="160" height="26" fill="none" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="130" x2="130" y1="176" y2="202" stroke="#0f172a" strokeWidth="1.2" />
      <text x="160" y="193" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f172a">1:2</text>
      <Tx x={80} y={193} s={t("Plate", "Թիթեղ", "Пластина")} lang={lang} size={9} fill="#0f172a" />
      {/* the sketch */}
      <path d="M236,72 q20,-3 44,1 q2,26 -1,50 q-22,2 -44,-1 q-2,-24 1,-50 Z" fill="#fef9c3" stroke="#475569" strokeWidth="1.5" />
      <path d="M258,96 q6,-8 12,0 q-2,8 -12,0 Z" fill="none" stroke="#475569" />
      <Tx x={258} y={140} s={t("sketch:|by hand", "էսքիզ՝|ձեռքով", "эскиз:|от руки")} lang={lang} size={8} fill="#475569" />
      <Tx x={258} y={60} s={t("wood?", "փա՞յտ", "дерево?")} lang={lang} size={7.5} fill="#a16207" w={600} />
    </g>
  ),
  parts: [
    P(30, 80, t("Thick continuous line", "Հաստ հոծ գիծ", "Сплошная толстая линия"), t("The visible outline of the object: everything you can actually see from this side.", "Առարկայի տեսանելի ուրվագիծը՝ այն ամենը, ինչ իրականում երևում է այս կողմից։", "Видимый контур предмета: всё, что действительно видно с этой стороны.")),
    P(180, 142, t("Dashed line", "Ընդհատ գիծ", "Штриховая линия"), t("Hidden edges: a groove on the back that you cannot see from the front.", "Թաքնված կողեր․ հետևի ակոս, որն առջևից չի երևում։", "Невидимые рёбра: канавка сзади, которую спереди не видно.")),
    P(140, 120, t("Chain line", "Կետագծիկ գիծ", "Штрихпунктирная линия"), t("Dash-dot-dash lines mark centres and lines of symmetry, like the centre of the hole.", "Գծիկ-կետ-գծիկ գծերը նշում են կենտրոններ և համաչափության առանցքներ, օրինակ՝ անցքի կենտրոնը։", "Линии «штрих-точка» обозначают центры и оси симметрии, например центр отверстия.")),
    P(70, 42, t("Dimension line", "Չափային գիծ", "Размерная линия"), t("A thin line with arrows at both ends. The number above it is the real size in millimetres, written without \"mm\".", "Բարակ գիծ՝ երկու ծայրերում սլաքներով։ Վրայի թիվն իրական չափն է միլիմետրերով՝ գրված առանց «մմ»-ի։", "Тонкая линия со стрелками на концах. Число над ней — настоящий размер в миллиметрах, записанный без «мм».")),
    P(160, 58, t("Diameter sign", "Տրամագծի նշան", "Знак диаметра"), t("The sign Ø means diameter: this hole is 20 mm across.", "Ø նշանը նշանակում է տրամագիծ․ այս անցքը 20 մմ է։", "Знак Ø означает диаметр: это отверстие шириной 20 мм.")),
    P(178, 189, t("Scale", "Մասշտաբ", "Масштаб"), t("1:2 means the drawing is half the real size: 1 cm on paper is 2 cm in real life. The numbers still show the real sizes.", "1:2 նշանակում է, որ գծագիրն իրական չափի կեսն է․ թղթի վրա 1 սմ-ն իրականում 2 սմ է։ Թվերը միևնույնն է ցույց են տալիս իրական չափերը։", "1:2 значит, что чертёж вдвое меньше настоящего предмета: 1 см на бумаге — это 2 см в жизни. Числа всё равно показывают настоящие размеры.")),
    P(292, 70, t("Sketch", "Էսքիզ", "Эскиз"), t("A quick freehand drawing of the idea, with notes. No ruler and no exact sizes: speed matters more than neatness.", "Գաղափարի արագ ձեռքով նկար՝ նշումներով։ Առանց քանոնի և ճշգրիտ չափերի․ արագությունն ավելի կարևոր է, քան կոկիկությունը։", "Быстрый рисунок идеи от руки с пометками. Без линейки и точных размеров: скорость важнее аккуратности.")),
  ],
};

/* ---------------- grade 4: inside a torch ---------------- */

const torch: Diagram = {
  title: t("Inside a torch: a simple circuit", "Լապտերի ներսում․ պարզ շղթա", "Внутри фонарика: простая цепь"),
  h: 200,
  draw: (lang) => (
    <g>
      {/* light */}
      <path d="M270,70 L318,40 V160 L270,130 Z" fill="#fef9c3" opacity="0.8" />
      {/* the case */}
      <rect x="20" y="70" width="210" height="60" rx="10" fill="#334155" />
      <path d="M230,64 h28 l14,-6 v84 l-14,-6 h-28 Z" fill="#475569" />
      <rect x="28" y="78" width="200" height="44" rx="6" fill="#e2e8f0" />
      {/* batteries */}
      {[0, 1].map((j) => (
        <g key={j}>
          <rect x={52 + j * 76} y="84" width="70" height="32" rx="4" fill="#16a34a" />
          <rect x={52 + j * 76} y="84" width="20" height="32" rx="4" fill="#111827" />
          <rect x={122 + j * 76} y="94" width="5" height="12" rx="1" fill="#cbd5e1" />
          <text x={108 + j * 76} y="104" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff">+</text>
          <text x={64 + j * 76} y="104" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff">−</text>
        </g>
      ))}
      {/* spring at the back */}
      <path d="M30,100 l4,-12 l4,24 l4,-24 l4,24 l4,-24 l4,12" fill="none" stroke="#94a3b8" strokeWidth="2" />
      {/* metal strip back to the switch and bulb */}
      <path d="M32,80 V74 H150 M170,74 H236 V92" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
      <rect x="146" y="56" width="28" height="14" rx="4" fill="#ef4444" />
      <path d="M150,72 L170,74" stroke="#f59e0b" strokeWidth="2.5" />
      {/* bulb and reflector */}
      <path d="M240,82 L270,64 V136 L240,118 Z" fill="#e5e7eb" stroke="#94a3b8" />
      <circle cx="252" cy="100" r="9" fill="#fde047" stroke="#ca8a04" />
      <path d="M248,100 q4,-6 8,0" fill="none" stroke="#b45309" />
      <rect x="236" y="96" width="8" height="8" fill="#94a3b8" />
      <Tx x={150} y={52} s={t("switch", "անջատիչ", "выключатель")} lang={lang} size={8} fill="#ef4444" />
      <Tx x={292} y={186} s={t("light", "լույս", "свет")} lang={lang} size={9} fill="#ca8a04" />
    </g>
  ),
  parts: [
    P(108, 132, t("Batteries", "Մարտկոցներ", "Батарейки"), t("The source of current. They sit in a row, the + of one touching the − of the next, so their voltages add up: two 1.5-volt batteries give 3 volts.", "Հոսանքի աղբյուրը։ Դրանք դրված են շարքով, մեկի +-ը հպվում է հաջորդի −-ին, ուստի լարումները գումարվում են․ երկու 1,5 վոլտանոց մարտկոցը տալիս է 3 վոլտ։", "Источник тока. Они стоят в ряд, «+» одной касается «−» следующей, поэтому напряжения складываются: две батарейки по 1,5 вольта дают 3 вольта.")),
    P(40, 112, t("Spring", "Զսպանակ", "Пружина"), t("The metal spring presses the batteries tightly together, so the circuit has no gaps even when you shake the torch.", "Մետաղե զսպանակը մարտկոցներն ամուր սեղմում է իրար, որ շղթայում ճեղքեր չլինեն, նույնիսկ եթե լապտերը թափահարես։", "Металлическая пружина плотно прижимает батарейки друг к другу, чтобы в цепи не было разрывов, даже если трясти фонарик.")),
    P(100, 66, t("Metal strip", "Մետաղե շերտ", "Металлическая полоска"), t("A strip of metal plays the part of a wire, carrying the current from the back of the batteries to the bulb.", "Մետաղե շերտը լարի դեր է կատարում և հոսանքը տանում է մարտկոցների հետևից դեպի լամպ։", "Металлическая полоска играет роль провода и несёт ток от задней части батареек к лампочке.")),
    P(176, 56, t("Switch", "Անջատիչ", "Выключатель"), t("Sliding the switch joins the two pieces of metal strip and closes the circuit. Slide it back and the gap opens: the light goes out.", "Անջատիչը սահեցնելիս մետաղե շերտի երկու կտորները միանում են, և շղթան փակվում է։ Ետ սահեցրու, և ճեղքը բացվում է․ լույսը հանգչում է։", "Сдвинутый выключатель соединяет два куска металлической полоски и замыкает цепь. Сдвинь обратно — появится разрыв, и свет погаснет.")),
    P(252, 86, t("Bulb", "Լամպ", "Лампочка"), t("The current passes through the bulb and makes it glow. Modern torches use LEDs, which give more light from the same batteries.", "Հոսանքն անցնում է լամպով և ստիպում այն լուսավորել։ Ժամանակակից լապտերներում լուսադիոդներ են, որոնք նույն մարտկոցներից ավելի շատ լույս են տալիս։", "Ток проходит через лампочку и заставляет её светиться. В современных фонариках стоят светодиоды: от тех же батареек они дают больше света.")),
    P(270, 70, t("Reflector", "Անդրադարձիչ", "Отражатель"), t("A shiny bowl behind the bulb catches the light going sideways and sends it forwards as a bright beam.", "Լամպի հետևի փայլուն գոգավորությունը որսում է կողքերը գնացող լույսը և ուղարկում առաջ՝ պայծառ փնջով։", "Блестящая чаша за лампочкой ловит свет, уходящий в стороны, и направляет его вперёд ярким лучом.")),
    P(20, 140, t("Plastic case", "Պլաստմասե իրան", "Пластмассовый корпус"), t("The case is an insulator: no current passes through it, so you can hold the torch safely.", "Իրանը մեկուսիչ է․ հոսանքը դրանով չի անցնում, ուստի լապտերը կարելի է անվտանգ բռնել։", "Корпус — изолятор: ток через него не проходит, поэтому фонарик можно спокойно держать.")),
  ],
};

/* ---------------- grade 4: inside a log ---------------- */

const woodlog: Diagram = {
  title: t("Inside a log", "Գերանի ներսում", "Внутри бревна"),
  h: 214,
  draw: (lang) => (
    <g>
      <circle cx="100" cy="110" r="86" fill="#57381e" />
      <circle cx="100" cy="110" r="78" fill="#f3d9a4" />
      <circle cx="100" cy="110" r="48" fill="#d4a15f" />
      {Array.from({ length: 12 }, (_, j) => <circle key={j} cx={100 + j * 0.4} cy={110 - j * 0.3} r={6 + j * 6} fill="none" stroke="#a16207" strokeWidth={j % 3 ? 0.8 : 1.6} />)}
      <circle cx="101" cy="110" r="3" fill="#78350f" />
      <path d="M100,110 L176,82" stroke="#57381e" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
      {/* a plank with grain */}
      <rect x="206" y="36" width="96" height="150" rx="4" fill="#f3d9a4" stroke="#a16207" />
      {Array.from({ length: 9 }, (_, j) => <path key={j} d={`M${214 + j * 10},36 C${206 + j * 10},80 ${224 + j * 10},120 ${212 + j * 10},186`} fill="none" stroke="#c48a3f" strokeWidth="1" />)}
      <ellipse cx="262" cy="120" rx="9" ry="12" fill="#92400e" />
      <ellipse cx="262" cy="120" rx="4" ry="6" fill="#57381e" />
      <path d="M248,10 v18 M242,22 l6,8 l6,-8" fill="none" stroke="#16a34a" strokeWidth="2.5" />
      <path d="M212,200 h18 M222,194 l8,6 l-8,6" fill="none" stroke="#dc2626" strokeWidth="2.5" />
      <Tx x={240} y={14} s={t("along:|splits easily", "երկայնքով՝|հեշտ ճեղքվում է", "вдоль:|легко колется")} lang={lang} size={7} fill="#16a34a" anchor="end" />
      <Tx x={240} y={198} s={t("across:|hard to cut", "լայնքով՝|դժվար է կտրել", "поперёк:|трудно резать")} lang={lang} size={7} fill="#dc2626" anchor="start" />
    </g>
  ),
  parts: [
    P(30, 34, t("Bark", "Կեղև", "Кора"), t("The tree's raincoat and armour: it keeps water in and insects and frost out.", "Ծառի անձրևանոցն ու զրահը․ այն պահում է ջուրը և պաշտպանում միջատներից ու սառնամանիքից։", "Плащ и броня дерева: кора удерживает воду и защищает от насекомых и мороза.")),
    P(166, 132, t("Sapwood", "Բելի", "Заболонь"), t("The young, pale outer wood still carries water from the roots up to the leaves.", "Երիտասարդ, բաց գույնի արտաքին փայտը դեռ ջուր է տանում արմատներից դեպի տերևներ։", "Молодая светлая наружная древесина ещё проводит воду от корней к листьям.")),
    P(100, 72, t("Heartwood", "Միջուկային փայտ", "Ядро"), t("The old wood in the middle no longer carries water. It is often darker, harder and lasts longer, so it is the most valuable part.", "Մեջտեղի հին փայտն այլևս ջուր չի տանում։ Այն հաճախ ավելի մուգ է, ավելի պինդ և ավելի երկարակյաց, ուստի ամենաթանկ մասն է։", "Старая древесина в середине уже не проводит воду. Часто она темнее, твёрже и долговечнее, поэтому это самая ценная часть.")),
    P(140, 92, t("Annual rings", "Տարեկան օղակներ", "Годичные кольца"), t("Each ring is one year: pale, wide wood grows in spring and darker, narrow wood in late summer. Count the dark lines to find the tree's age.", "Ամեն օղակը մեկ տարի է․ բաց, լայն փայտն աճում է գարնանը, իսկ ավելի մուգ, նեղը՝ ամառվա վերջին։ Հաշվի՛ր մուգ գծերը, և կիմանաս ծառի տարիքը։", "Каждое кольцо — один год: светлая широкая древесина растёт весной, тёмная узкая — в конце лета. Посчитай тёмные линии и узнаешь возраст дерева.")),
    P(230, 60, t("The grain", "Փայտի շերտերը", "Волокна"), t("The long fibres of the wood all run along the trunk. Wood splits easily along them but is hard to cut across them, so always sand along the grain.", "Փայտի երկար թելիկները ձգվում են բնի երկայնքով։ Փայտը հեշտությամբ ճեղքվում է դրանց երկայնքով, բայց դժվար է կտրել լայնքով, ուստի միշտ հղկի՛ր շերտերի ուղղությամբ։", "Длинные волокна древесины тянутся вдоль ствола. Вдоль них дерево легко раскалывается, а поперёк его трудно резать, поэтому шлифуй всегда вдоль волокон.")),
    P(276, 132, t("Knot", "Հանգույց", "Сучок"), t("A knot is where a branch once grew. It is hard, and the grain bends round it, so it is difficult to cut and plane.", "Հանգույցն այն տեղն է, որտեղ ժամանակին ճյուղ է աճել։ Այն պինդ է, և շերտերը թեքվում են դրա շուրջը, ուստի դժվար է կտրել և ռանդել։", "Сучок — место, где когда-то рос сук. Он твёрдый, и волокна огибают его, поэтому его трудно пилить и строгать.")),
  ],
};

/* ---------------- grade 5: the woodwork bench ---------------- */

const STEEL = "#94a3b8", STEEL_D = "#475569";

const workbench: Diagram = {
  title: t("The woodwork bench and its tools", "Հյուսնի դազգահը և գործիքները", "Столярный верстак и инструменты"),
  h: 214,
  draw: () => (
    <g>
      {/* pegboard */}
      <rect x="8" y="6" width="304" height="96" rx="4" fill="#e7d3b0" stroke="#c4a574" />
      {Array.from({ length: 15 * 5 }, (_, j) => <circle key={j} cx={18 + (j % 15) * 20.5} cy={14 + Math.floor(j / 15) * 20} r="1.3" fill="#a8875a" />)}
      {/* saw */}
      <path d="M16,44 L84,30 V64 L16,56 Z" fill="#cbd5e1" stroke="#64748b" />
      <polyline points={Array.from({ length: 18 }, (_, j) => `${16 + j * 4},${56 + (j * 8) / 17 + (j % 2 ? 3 : 0)}`).join(" ")} fill="none" stroke="#64748b" />
      <path d="M84,26 h16 q10,0 10,12 v26 q0,10 -10,10 h-16 Z" fill={WOOD} />
      <ellipse cx="97" cy="48" rx="4.5" ry="11" fill="#e7d3b0" />
      {/* hammer */}
      <rect x="123" y="30" width="7" height="64" rx="2" fill={WOOD_L} />
      <path d="M112,20 h20 q10,0 14,10 q-8,-4 -14,2 h-20 Z" fill={STEEL_D} />
      {/* chisel */}
      <rect x="155" y="18" width="9" height="36" rx="3" fill={WOOD} />
      <path d="M156,54 h7 v30 l-3.5,6 l-3.5,-4 Z" fill={STEEL} stroke="#64748b" strokeWidth="0.6" />
      {/* file */}
      <rect x="175" y="18" width="8" height="26" rx="3" fill={WOOD_D} />
      <rect x="176" y="44" width="6" height="46" fill="#6b7280" />
      {Array.from({ length: 11 }, (_, j) => <line key={j} x1="176" x2="182" y1={46 + j * 4} y2={48 + j * 4} stroke="#374151" strokeWidth="0.6" />)}
      {/* screwdriver */}
      <rect x="196" y="18" width="11" height="30" rx="4" fill="#ef4444" />
      <rect x="200" y="48" width="3" height="38" fill={STEEL} />
      <rect x="199" y="86" width="5" height="3" fill="#64748b" />
      {/* try square */}
      <rect x="222" y="18" width="10" height="56" fill={WOOD} />
      <rect x="232" y="18" width="46" height="6" fill={STEEL} stroke="#64748b" strokeWidth="0.5" />
      {Array.from({ length: 9 }, (_, j) => <line key={j} x1={236 + j * 5} x2={236 + j * 5} y1="24" y2={j % 2 ? 21 : 19} stroke="#334155" strokeWidth="0.5" />)}
      {/* brace */}
      <circle cx="300" cy="18" r="6" fill={WOOD} />
      <path d="M300,24 V36 H284 V64 H300 V76" fill="none" stroke={STEEL_D} strokeWidth="3" />
      <rect x="282" y="42" width="5" height="16" rx="2" fill={WOOD_L} />
      <rect x="296" y="76" width="8" height="8" fill="#64748b" />
      <path d="M300,84 V96" stroke="#334155" strokeWidth="1.6" />
      {/* bench */}
      <rect x="14" y="150" width="292" height="12" fill={WOOD} />
      <rect x="30" y="162" width="12" height="48" fill={WOOD_D} />
      <rect x="276" y="162" width="12" height="48" fill={WOOD_D} />
      <rect x="42" y="192" width="234" height="6" fill={WOOD_D} />
      {/* plank, stop and tail vice */}
      <rect x="56" y="134" width="5" height="16" fill={WOOD_D} />
      <rect x="61" y="138" width="232" height="12" fill="#f3d9a4" stroke="#c48a3f" />
      <rect x="293" y="132" width="11" height="30" fill={WOOD_D} />
      <path d="M304,154 H314 M314,146 V162" stroke={STEEL_D} strokeWidth="2.5" />
      {/* plane with a shaving */}
      <path d="M116,138 L120,124 H170 L176,138 Z" fill="#1e40af" />
      <circle cx="128" cy="119" r="5" fill={WOOD} />
      <path d="M160,124 q2,-14 12,-14 l2,6 q-6,0 -6,8 Z" fill={WOOD} />
      <path d="M144,124 q-2,-12 8,-12 q8,2 2,8" fill="none" stroke="#e9c48f" strokeWidth="3" />
    </g>
  ),
  parts: [
    P(50, 46, t("Handsaw", "Ձեռքի սղոց", "Ножовка"), t("Cuts wood. Start slowly, guiding the side of the blade with your thumb, never the teeth, and use the whole length of the blade.", "Կտրում է փայտը։ Սկսի՛ր դանդաղ՝ բութ մատով ուղղորդելով սայրի կողը, ոչ թե ատամները, և աշխատի՛ր սայրի ամբողջ երկարությամբ։", "Пилит дерево. Начинай медленно, направляя большим пальцем бок полотна, а не зубья, и работай всей длиной полотна.")),
    P(126, 60, t("Hammer", "Մուրճ", "Молоток"), t("Drives in nails. The split claw on the back pulls bent nails out again.", "Մեխեր է խփում։ Հետևի ճեղքված մասը ծուռ մեխերը հետ է հանում։", "Забивает гвозди. Раздвоенный конец сзади выдёргивает погнутые гвозди.")),
    P(159, 72, t("Chisel", "Դուր", "Стамеска"), t("A sharp blade for cutting hollows and joints. Keep both hands behind the edge and store it with the blade covered.", "Սուր սայր՝ փոսորակներ և միացումներ փորելու համար։ Երկու ձեռքն էլ պահի՛ր սայրից հետ, իսկ դուրը պահի՛ր ծածկած սայրով։", "Острое лезвие для выборки гнёзд и соединений. Держи обе руки позади лезвия, а храни стамеску с закрытым лезвием.")),
    P(179, 68, t("File", "Խարտոց", "Напильник"), t("Rows of tiny teeth smooth the edges after sawing.", "Մանր ատամների շարքերը հարթեցնում են եզրերը սղոցելուց հետո։", "Ряды мелких зубчиков сглаживают края после пиления.")),
    P(202, 34, t("Screwdriver", "Պտուտակահան", "Отвёртка"), t("Turns screws. Choose a tip that fits the slot exactly, or it will slip and damage the screw.", "Պտուտակներ է պտտում։ Ընտրի՛ր ճիշտ ակոսին համապատասխան ծայր, այլապես այն կսահի և կփչացնի պտուտակը։", "Закручивает шурупы. Подбирай жало точно по шлицу, иначе оно соскользнёт и испортит шуруп.")),
    P(254, 34, t("Try square", "Անկյունակ", "Угольник"), t("Checks and marks perfect right angles, together with a pencil and ruler.", "Ստուգում և գծանշում է ճիշտ ուղիղ անկյուններ՝ մատիտի և քանոնի հետ։", "Проверяет и размечает точные прямые углы вместе с карандашом и линейкой.")),
    P(292, 50, t("Brace", "Ձեռքի գայլիկոն", "Коловорот"), t("A hand drill: press on the round top and turn the crank to bore a hole.", "Ձեռքի շաղափ․ սեղմի՛ր կլոր գլխիկին և պտտի՛ր բռնակը, որ անցք բացվի։", "Ручная дрель: нажимай на круглую головку и крути рукоятку, чтобы просверлить отверстие.")),
    P(146, 128, t("Plane", "Ռանդա", "Рубанок"), t("Its blade sticks out a tiny bit below the sole and takes off thin curly shavings, leaving the surface flat and smooth.", "Դանակը ներբանից մի փոքր դուրս է գալիս և հանում բարակ, ոլորված տաշեղներ՝ մակերեսը թողնելով հարթ ու ողորկ։", "Его нож чуть-чуть выступает из подошвы и снимает тонкую кудрявую стружку, оставляя поверхность ровной и гладкой.")),
    P(299, 172, t("Workbench and vice", "Դազգահ և մամլակ", "Верстак и зажим"), t("The vice squeezes the plank against a stop, so both your hands are free and the work cannot slide.", "Մամլակը տախտակը սեղմում է հենակին, և երկու ձեռքդ ազատ են, իսկ դետալը չի սահում։", "Зажим прижимает доску к упору, так что обе руки свободны, а заготовка не скользит.")),
  ],
};

/* ---------------- grade 5: tools for sheet metal and wire ---------------- */

const Pliers = ({ x, jaw, c }: { x: number; jaw: "flat" | "round" | "cut" | "snips"; c: string }) => (
  <g>
    <path d={`M${x - 3},80 Q${x - 14},116 ${x - 14},176 M${x + 3},80 Q${x + 14},116 ${x + 14},176`} fill="none" stroke={STEEL_D} strokeWidth="5" strokeLinecap="round" />
    <path d={`M${x - 11},124 Q${x - 14},146 ${x - 14},176 M${x + 11},124 Q${x + 14},146 ${x + 14},176`} fill="none" stroke={c} strokeWidth="8" strokeLinecap="round" />
    {jaw === "flat" ? <g fill="#64748b"><rect x={x - 6} y="42" width="5.4" height="38" /><rect x={x + 0.6} y="42" width="5.4" height="38" /></g> : null}
    {jaw === "round" ? <g fill="#64748b"><path d={`M${x - 7},80 L${x - 3},40 h2.4 V80 Z`} /><path d={`M${x + 7},80 L${x + 3},40 h-2.4 V80 Z`} /></g> : null}
    {jaw === "cut" ? <g fill="#64748b"><path d={`M${x - 9},80 Q${x - 9},62 ${x - 0.6},54 V80 Z`} /><path d={`M${x + 9},80 Q${x + 9},62 ${x + 0.6},54 V80 Z`} /></g> : null}
    {jaw === "snips" ? <g fill={STEEL} stroke="#64748b" strokeWidth="0.6"><path d={`M${x - 8},80 Q${x - 8},40 ${x},18 V80 Z`} /><path d={`M${x + 8},80 Q${x + 8},40 ${x},18 V80 Z`} /></g> : null}
    <circle cx={x} cy="80" r="4" fill="#1f2937" />
  </g>
);

const wiretools: Diagram = {
  title: t("Tools for sheet metal and wire", "Թիթեղի և լարի գործիքներ", "Инструменты для жести и проволоки"),
  h: 196,
  draw: () => (
    <g>
      <rect x="0" y="0" width="320" height="196" fill="#f8fafc" />
      <Pliers x={40} jaw="snips" c="#dc2626" />
      <Pliers x={98} jaw="flat" c="#2563eb" />
      <Pliers x={150} jaw="round" c="#16a34a" />
      <Pliers x={202} jaw="cut" c="#f59e0b" />
      {/* mallet */}
      <rect x="230" y="30" width="44" height="26" rx="6" fill={WOOD_L} stroke={WOOD} />
      <ellipse cx="232" cy="43" rx="3" ry="11" fill={WOOD} />
      <rect x="249" y="56" width="7" height="122" rx="2" fill={WOOD} />
      {/* finished copper hook */}
      <circle cx="297" cy="40" r="8" fill="none" stroke="#c2410c" strokeWidth="3" />
      <path d="M297,48 V140 Q297,166 282,162 Q270,158 272,146" fill="none" stroke="#c2410c" strokeWidth="3" strokeLinecap="round" />
    </g>
  ),
  parts: [
    P(40, 36, t("Tin snips", "Թիթեղի մկրատ", "Ножницы по металлу"), t("Heavy scissors with short, strong blades for cutting thin sheet metal. Wear gloves: the cut edges are as sharp as a knife.", "Ծանր մկրատ՝ կարճ, ամուր շեղբերով, բարակ թիթեղ կտրելու համար։ Ձեռնոցներ հագի՛ր․ կտրված եզրերը դանակի պես սուր են։", "Тяжёлые ножницы с короткими прочными лезвиями для тонкой жести. Надевай перчатки: края среза острые, как нож.")),
    P(98, 50, t("Flat-nose pliers", "Տափակաբերան աքցան", "Плоскогубцы"), t("Flat jaws grip the wire firmly and bend it into sharp right angles.", "Տափակ ծնոտներն ամուր բռնում են լարը և ծալում այն ուղիղ անկյունով։", "Плоские губки крепко держат проволоку и сгибают её под прямым углом.")),
    P(150, 50, t("Round-nose pliers", "Կլորաբերան աքցան", "Круглогубцы"), t("Cone-shaped jaws: wind the wire round them to make neat loops and rings. Nearer the tip, the loop is smaller.", "Կոնաձև ծնոտներ․ լարը փաթաթի՛ր դրանց շուրջը, որ կոկիկ օղակներ ստացվեն։ Որքան մոտ է ծայրին, այնքան փոքր է օղակը։", "Конические губки: оборачивай вокруг них проволоку, чтобы получить аккуратные петли и колечки. Чем ближе к кончику, тем меньше петля.")),
    P(202, 64, t("Wire cutters", "Լարակտրիչ", "Кусачки"), t("Two sharp edges meet and nip the wire. Hold the end that is cut off, or it can fly into someone's eye.", "Երկու սուր եզր հանդիպում են և կտրում լարը։ Բռնի՛ր կտրվող ծայրը, թե չէ այն կարող է թռչել և ընկնել մեկի աչքը։", "Две острые кромки смыкаются и перекусывают проволоку. Придерживай отрезаемый конец, иначе он может отлететь кому-нибудь в глаз.")),
    P(158, 160, t("Insulated grips", "Մեկուսացված բռնակներ", "Изолированные ручки"), t("Plastic grips stop your hands slipping and blistering. On electricians' pliers they also protect against electric shock.", "Պլաստմասե բռնակները թույլ չեն տալիս ձեռքերին սահել և ջրկալվել։ Էլեկտրիկների աքցաններին դրանք պաշտպանում են նաև էլեկտրական հարվածից։", "Пластмассовые ручки не дают рукам скользить и натирать мозоли. У инструмента электриков они ещё и защищают от удара током.")),
    P(252, 36, t("Mallet", "Փայտե մուրճ", "Киянка"), t("A wooden or rubber hammer flattens and bends sheet metal without leaving dents.", "Փայտե կամ ռետինե մուրճը հարթեցնում և ծալում է թիթեղը՝ առանց փոսիկներ թողնելու։", "Деревянный или резиновый молоток выравнивает и гнёт жесть, не оставляя вмятин.")),
    P(306, 120, t("A finished hook", "Պատրաստի կեռիկ", "Готовый крючок"), t("A loop made with round-nose pliers, a straight stem and a curved end. File the ends so they are not sharp.", "Կլորաբերան աքցանով արված օղակ, ուղիղ ձող և կեռ ծայր։ Ծայրերը խարտոցով հղկի՛ր, որ սուր չլինեն։", "Петля, сделанная круглогубцами, прямой стержень и загнутый конец. Опили концы, чтобы они не были острыми.")),
  ],
};

/* ---------------- grade 5: three views of a stepped block ---------------- */

const VIS = { stroke: "#0f172a", strokeWidth: 2.2, fill: "#fff" } as const;
const CON = { stroke: "#94a3b8", strokeWidth: 0.7, strokeDasharray: "3 2" } as const;

const views: Diagram = {
  title: t("Three views of a stepped block", "Աստիճանաձև չորսուի երեք տեսքը", "Три вида ступенчатого бруска"),
  h: 214,
  draw: (lang) => (
    <g>
      <rect x="0" y="0" width="320" height="214" fill="#f8fafc" />
      {/* construction lines */}
      {[30, 80, 130].map((x) => <line key={x} x1={x} x2={x} y1="100" y2="130" {...CON} />)}
      {[40, 70, 100].map((y) => <line key={y} x1="130" x2="160" y1={y} y2={y} {...CON} />)}
      <line x1="130" x2="160" y1="130" y2="130" {...CON} />
      <line x1="130" x2="210" y1="180" y2="180" {...CON} />
      <line x1="160" x2="160" y1="100" y2="130" {...CON} />
      <line x1="210" x2="210" y1="100" y2="180" {...CON} />
      <line x1="150" x2="220" y1="120" y2="190" stroke="#94a3b8" strokeWidth="0.9" />
      {/* front view */}
      <path d="M30,40 H80 V70 H130 V100 H30 Z" {...VIS} />
      {/* top view */}
      <rect x="30" y="130" width="100" height="50" {...VIS} />
      <line x1="80" x2="80" y1="130" y2="180" stroke="#0f172a" strokeWidth="2.2" />
      {/* left view */}
      <rect x="160" y="40" width="50" height="60" {...VIS} />
      <line x1="160" x2="210" y1="70" y2="70" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="5 3" />
      <Tx x={105} y={84} s={t("front", "գլխավոր", "главный")} lang={lang} size={7} fill="#475569" w={600} />
      <Tx x={105} y={160} s={t("top", "վերևից", "сверху")} lang={lang} size={7} fill="#475569" w={600} />
      <Tx x={185} y={90} s={t("left", "ձախից", "слева")} lang={lang} size={7} fill="#475569" w={600} />
      {/* dimensions */}
      <DimArrow x1={30} y1={194} x2={130} y2={194} />
      <text x="80" y="206" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f172a">100</text>
      <DimArrow x1={16} y1={40} x2={16} y2={100} />
      <text x="12" y="74" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f172a" transform="rotate(-90 12 70)">60</text>
      <DimArrow x1={160} y1={30} x2={210} y2={30} />
      <text x="185" y="26" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f172a">50</text>
      {/* the part itself, drawn in oblique */}
      <g stroke="#1e3a8a" strokeWidth="1" strokeLinejoin="round">
        <path d="M240,154 H270 L286,138 H256 Z" fill="#bfdbfe" />
        <path d="M270,172 H300 L316,156 H286 Z" fill="#bfdbfe" />
        <path d="M270,154 V172 L286,156 V138 Z" fill="#60a5fa" />
        <path d="M300,172 V190 L316,174 V156 Z" fill="#60a5fa" />
        <path d="M240,190 H300 V172 H270 V154 H240 Z" fill="#93c5fd" />
      </g>
      <path d="M220,176 h16 M230,172 l6,4 l-6,4" fill="none" stroke="#dc2626" strokeWidth="2" />
      <path d="M300,116 v20 M296,130 l4,6 l4,-6" fill="none" stroke="#dc2626" strokeWidth="2" />
    </g>
  ),
  parts: [
    P(48, 54, t("Front view", "Գլխավոր տեսք", "Главный вид"), t("Looking straight at the front. It shows the length and the height, and here you can see the step. It always goes in the top left corner.", "Ուղիղ առջևից նայելիս։ Ցույց է տալիս երկարությունը և բարձրությունը, և այստեղ երևում է աստիճանը։ Այն միշտ գծվում է վերևի ձախ անկյունում։", "Взгляд прямо спереди. Он показывает длину и высоту, и на нём видна ступенька. Его всегда чертят в левом верхнем углу.")),
    P(55, 150, t("Top view", "Վերևից տեսք", "Вид сверху"), t("Drawn under the front view. It shows the length and the width; the edge of the step becomes a line across the rectangle.", "Գծվում է գլխավոր տեսքի տակ։ Ցույց է տալիս երկարությունը և լայնությունը․ աստիճանի կողն ուղղանկյան մեջ դառնում է գիծ։", "Чертят под главным видом. Он показывает длину и ширину; ребро ступеньки становится линией поперёк прямоугольника.")),
    P(185, 54, t("Left view", "Ձախից տեսք", "Вид слева"), t("Drawn to the right of the front view. It shows the width and the height.", "Գծվում է գլխավոր տեսքից աջ։ Ցույց է տալիս լայնությունը և բարձրությունը։", "Чертят справа от главного вида. Он показывает ширину и высоту.")),
    P(200, 74, t("Hidden edge", "Անտեսանելի կող", "Невидимое ребро"), t("From the left the tall part hides the step, so its edge is drawn as a dashed line.", "Ձախից նայելիս բարձր մասը ծածկում է աստիճանը, ուստի դրա կողը գծվում է ընդհատ գծով։", "Слева высокая часть закрывает ступеньку, поэтому её ребро чертят штриховой линией.")),
    P(145, 56, t("Projection lines", "Կապող գծեր", "Линии связи"), t("Thin lines carry each size across: the front and top views share the length, the front and left views share the height.", "Բարակ գծերը չափերը փոխանցում են մի տեսքից մյուսը․ գլխավոր և վերևից տեսքերն ունեն նույն երկարությունը, գլխավոր և ձախից տեսքերը՝ նույն բարձրությունը։", "Тонкие линии переносят размеры: у главного вида и вида сверху общая длина, у главного вида и вида слева — общая высота.")),
    P(196, 160, t("The 45° line", "45° գիծ", "Линия под 45°"), t("A helper line that turns the width of the top view round the corner, so the left view gets exactly the same width.", "Օժանդակ գիծ, որը վերևից տեսքի լայնությունը «շրջում» է անկյունով, որպեսզի ձախից տեսքը ստանա ճիշտ նույն լայնությունը։", "Вспомогательная линия «поворачивает» ширину вида сверху за угол, чтобы вид слева получил точно такую же ширину.")),
    P(262, 186, t("The part", "Դետալը", "Деталь"), t("The real block: 100 mm long, 50 mm wide and 60 mm high. The red arrows show where we look from for the top and left views.", "Իրական չորսուն՝ 100 մմ երկարությամբ, 50 մմ լայնությամբ և 60 մմ բարձրությամբ։ Կարմիր սլաքները ցույց են տալիս, թե որտեղից ենք նայում վերևից և ձախից տեսքերի համար։", "Настоящий брусок: длина 100 мм, ширина 50 мм, высота 60 мм. Красные стрелки показывают, откуда мы смотрим для вида сверху и вида слева.")),
  ],
};

/* ---------------- grade 5: three weaves ---------------- */

const Swatch = ({ x, y, up }: { x: number; y: number; up: (r: number, c: number) => boolean }) => (
  <g>
    <rect x={x} y={y} width="90" height="90" fill="#334155" />
    {Array.from({ length: 81 }, (_, j) => {
      const r = Math.floor(j / 9), c = j % 9, cx = x + c * 10, cy = y + r * 10;
      return up(r, c) ? <rect key={j} x={cx + 1.5} y={cy} width="7" height="10" fill={WARP} /> : <rect key={j} x={cx} y={cy + 1.5} width="10" height="7" fill={WEFT} />;
    })}
  </g>
);

const weaves3: Diagram = {
  title: t("Three basic weaves", "Երեք հիմնական գործվածք", "Три основных переплетения"),
  h: 214,
  draw: (lang) => (
    <g>
      <rect x="0" y="0" width="320" height="214" fill="#f8fafc" />
      <line x1="30" x2="30" y1="6" y2="22" stroke={WARP} strokeWidth="5" />
      <Tx x={38} y={18} s={t("warp", "հենք", "основа")} lang={lang} size={8} fill={WARP} anchor="start" />
      <line x1="110" x2="130" y1="14" y2="14" stroke={WEFT} strokeWidth="5" />
      <Tx x={136} y={18} s={t("weft", "միջահյուս", "уток")} lang={lang} size={8} fill={WEFT} anchor="start" />
      <Swatch x={12} y={30} up={(r, c) => (r + c) % 2 === 0} />
      <Swatch x={115} y={30} up={(r, c) => (c + r) % 3 !== 0} />
      <Swatch x={218} y={30} up={(r, c) => (c + r * 2) % 5 !== 0} />
      {Array.from({ length: 9 }, (_, r) => r % 2 ? <path key={r} d={`M12,${33.5 + r * 10} q-7,5 0,10`} fill="none" stroke={WEFT} strokeWidth="3" /> : null)}
      <Tx x={57} y={134} s={t("plain", "պարզ", "полотняное")} lang={lang} size={9} />
      <Tx x={160} y={134} s={t("twill", "սարժա", "саржевое")} lang={lang} size={9} />
      <Tx x={263} y={134} s={t("satin", "ատլաս", "атласное")} lang={lang} size={9} />
      <Tx x={57} y={145} s={t("calico, sheets", "չիթ, սպիտակեղեն", "ситец, бязь")} lang={lang} size={7} fill="#475569" w={500} />
      <Tx x={160} y={145} s={t("denim", "ջինս", "джинса")} lang={lang} size={7} fill="#475569" w={500} />
      <Tx x={263} y={145} s={t("shiny satin", "փայլուն ատլաս", "блестящий атлас")} lang={lang} size={7} fill="#475569" w={500} />
      {/* cross-section of plain weave */}
      {Array.from({ length: 11 }, (_, k) => <circle key={k} cx={40 + k * 24} cy="182" r="5" fill={WARP} />)}
      <path d={`M28,182 ${Array.from({ length: 11 }, (_, k) => `Q${40 + k * 24},${182 + (k % 2 ? 16 : -16)} ${52 + k * 24},182`).join(" ")}`} fill="none" stroke={WEFT} strokeWidth="3" />
      <Tx x={160} y={208} s={t("cut through plain weave: over one, under one", "պարզ գործվածքի կտրվածք․ մեկի վրայով, մեկի տակով", "разрез полотняного: над одной, под одной")} lang={lang} size={7.5} fill="#475569" w={600} />
    </g>
  ),
  parts: [
    P(30, 14, t("Warp", "Հենք", "Основа"), t("The long threads stretched on the loom first. They run along the length of the fabric and do not stretch much.", "Երկար թելեր, որոնք առաջինն են ձգվում ջուլհակահաստոցի վրա։ Դրանք անցնում են գործվածքի երկայնքով և քիչ են ձգվում։", "Длинные нити, которые первыми натягивают на ткацком станке. Они идут вдоль ткани и почти не тянутся.")),
    P(120, 14, t("Weft", "Միջահյուս", "Уток"), t("The thread that the shuttle carries across, weaving over and under the warp.", "Թելը, որը մաքոքը տանում է լայնքով՝ անցնելով հենքի վրայով և տակով։", "Нить, которую челнок проводит поперёк, то над, то под нитями основы.")),
    P(57, 75, t("Plain weave", "Պարզ գործվածք", "Полотняное"), t("Over one, under one, like a chessboard. The strongest and simplest weave, and it looks the same on both sides.", "Մեկի վրայով, մեկի տակով, ինչպես շախմատի տախտակը։ Ամենաամուր և ամենապարզ գործվածքը, որն երկու կողմից էլ նույնն է երևում։", "Над одной, под одной, как шахматная доска. Самое прочное и простое переплетение, с обеих сторон оно выглядит одинаково.")),
    P(160, 75, t("Twill", "Սարժա", "Саржа"), t("Each row starts one step further along, so diagonal ribs appear. Twill is tough and hides dirt: jeans are made this way.", "Ամեն շարք սկսվում է մեկ քայլ առաջ, ուստի հայտնվում են շեղ շերտեր։ Սարժան դիմացկուն է և թաքցնում է կեղտը․ ջինսերն այսպես են գործված։", "Каждый ряд начинается на шаг дальше, поэтому появляются диагональные рубчики. Саржа прочная и не так пачкается: так ткут джинсы.")),
    P(263, 75, t("Satin", "Ատլաս", "Атлас"), t("The warp floats over four weft threads at a time. Long smooth floats reflect light, so satin shines, but they catch easily.", "Հենքն անցնում է միանգամից չորս միջահյուսի վրայով։ Երկար ողորկ թելերն անդրադարձնում են լույսը, ուստի ատլասը փայլում է, բայց հեշտությամբ կառչում է։", "Нить основы перекрывает сразу четыре уточные нити. Длинные гладкие перекрытия отражают свет, поэтому атлас блестит, но легко цепляется.")),
    P(6, 120, t("Selvedge", "Եզրաշերտ", "Кромка"), t("Where the weft turns round at the edge, the fabric has a firm edge that never frays.", "Եզրում, որտեղ միջահյուսը շրջվում է, գործվածքն ունի ամուր եզր, որը չի քանդվում։", "Там, где уток разворачивается у края, у ткани получается плотная кромка, которая не осыпается.")),
  ],
};

/* ---------------- grade 5: parts of a sewing machine ---------------- */

const sewmachine: Diagram = {
  title: t("Parts of a sewing machine", "Կարի մեքենայի մասերը", "Устройство швейной машины"),
  h: 210,
  draw: () => (
    <g>
      <rect x="0" y="0" width="320" height="210" fill="#f8fafc" />
      {/* body */}
      <rect x="18" y="150" width="270" height="26" rx="6" fill="#e2e8f0" stroke="#94a3b8" />
      <rect x="226" y="40" width="54" height="112" rx="8" fill="#f1f5f9" stroke="#94a3b8" />
      <rect x="40" y="36" width="240" height="34" rx="14" fill="#f1f5f9" stroke="#94a3b8" />
      <rect x="40" y="40" width="44" height="72" rx="8" fill="#f1f5f9" stroke="#94a3b8" />
      {/* spool and thread path */}
      <rect x="178" y="22" width="3" height="16" fill="#64748b" />
      <rect x="171" y="12" width="17" height="20" rx="2" fill="#dc2626" />
      <path d="M176,20 Q120,8 94,52 L92,62 L66,48 V120" fill="none" stroke="#dc2626" strokeWidth="1" />
      <circle cx="92" cy="60" r="6" fill="#cbd5e1" stroke="#64748b" />
      <rect x="62" y="44" width="10" height="5" rx="2" fill="#64748b" />
      {/* needle bar, needle, presser foot */}
      <rect x="58" y="110" width="6" height="18" fill={STEEL} />
      <rect x="60" y="128" width="2" height="16" fill="#475569" />
      <rect x="70" y="110" width="4" height="26" fill={STEEL} />
      <path d="M48,144 h30 q6,0 6,-4 h-36 Z" fill="#475569" />
      {/* fabric, plate, feed dogs, bobbin */}
      <rect x="22" y="144" width="140" height="4" fill="#93c5fd" />
      <rect x="40" y="148" width="54" height="2" fill="#94a3b8" />
      {[0, 1, 2, 3, 4].map((j) => <path key={j} d={`M${52 + j * 5},151 l2.5,-3 l2.5,3`} fill="#f97316" />)}
      <rect x="44" y="154" width="40" height="18" rx="3" fill="#1e293b" />
      <circle cx="64" cy="163" r="7" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" />
      <circle cx="64" cy="163" r="2" fill="#1e3a8a" />
      {/* handwheel and dial */}
      <ellipse cx="290" cy="74" rx="9" ry="28" fill="#cbd5e1" stroke="#64748b" />
      <circle cx="253" cy="110" r="11" fill="#fff" stroke="#64748b" />
      <path d="M253,110 L259,102" stroke="#dc2626" strokeWidth="2" />
      {[0, 1, 2, 3, 4].map((j) => <circle key={j} cx={253 + 14 * Math.cos(Math.PI * (1 + j / 4))} cy={110 + 14 * Math.sin(Math.PI * (1 + j / 4))} r="1" fill="#475569" />)}
      {/* pedal */}
      <path d="M260,176 Q260,196 236,196" fill="none" stroke="#334155" strokeWidth="1.5" />
      <path d="M190,204 L196,190 H236 L240,204 Z" fill="#334155" />
    </g>
  ),
  parts: [
    P(61, 136, t("Needle", "Ասեղ", "Игла"), t("The eye of a machine needle is near the point, not at the top. It carries the upper thread down through the fabric.", "Մեքենայի ասեղի անցքը սուր ծայրի մոտ է, ոչ թե վերևում։ Այն վերին թելը տանում է գործվածքի միջով ներքև։", "Ушко машинной иглы у самого острия, а не наверху. Игла проводит верхнюю нить сквозь ткань.")),
    P(92, 140, t("Presser foot", "Թաթիկ", "Лапка"), t("Presses the fabric flat against the feed dogs. Always lower it before you start sewing.", "Գործվածքը սեղմում է տեղափոխիչին։ Կարելուց առաջ միշտ իջեցրու այն։", "Прижимает ткань к рейке. Всегда опускай её, прежде чем начать шить.")),
    P(36, 151, t("Feed dogs", "Տեղափոխիչ", "Зубчатая рейка"), t("Little metal teeth under the plate that move the fabric on after every stitch. Do not pull the fabric yourself; just guide it.", "Փոքրիկ մետաղե ատամներ թիթեղի տակ, որոնք ամեն կարից հետո գործվածքն առաջ են տանում։ Գործվածքը մի՛ քաշիր, միայն ուղղորդի՛ր։", "Маленькие металлические зубчики под пластиной продвигают ткань после каждого стежка. Не тяни ткань сам, только направляй.")),
    P(76, 172, t("Bobbin", "Մասրա", "Шпулька"), t("A small reel under the plate holding the lower thread. Wind it before you start.", "Փոքրիկ կոճ թիթեղի տակ՝ ստորին թելով։ Փաթաթի՛ր այն նախքան սկսելը։", "Маленькая катушка под пластиной с нижней нитью. Намотай её до начала работы.")),
    P(190, 14, t("Spool", "Կոճ", "Катушка"), t("The upper thread comes from here, passing through guides on its way to the needle.", "Վերին թելը գալիս է այստեղից՝ ասեղին հասնելու ճանապարհին անցնելով ուղղորդիչներով։", "Верхняя нить идёт отсюда и по пути к игле проходит через направители.")),
    P(100, 64, t("Thread tension", "Թելի լարվածություն", "Натяжение нити"), t("Two discs squeeze the upper thread. Too loose and loops appear under the fabric; too tight and the seam puckers.", "Երկու սկավառակ սեղմում են վերին թելը։ Թույլ լինելու դեպքում գործվածքի տակ օղակներ են հայտնվում, իսկ շատ ձիգ լինելու դեպքում կարը կնճռոտվում է։", "Два диска зажимают верхнюю нить. Если слабо, под тканью появляются петли, если туго, шов стягивается.")),
    P(298, 50, t("Handwheel", "Թափանիվ", "Маховое колесо"), t("Turns the whole mechanism. Always turn it towards you, to raise or lower the needle by hand.", "Պտտում է ամբողջ մեխանիզմը։ Միշտ պտտի՛ր դեպի քեզ, որ ասեղը ձեռքով բարձրացնես կամ իջեցնես։", "Вращает весь механизм. Поворачивай его всегда к себе, чтобы поднять или опустить иглу вручную.")),
    P(253, 92, t("Stitch length dial", "Կարի երկարության կարգավորիչ", "Регулятор длины стежка"), t("Sets how far the feed dogs move the fabric: about 2.5 mm for an ordinary seam.", "Որոշում է, թե որքան է տեղափոխիչն առաջ տանում գործվածքը․ սովորական կարի համար՝ մոտ 2,5 մմ։", "Задаёт, насколько рейка продвигает ткань: для обычного шва около 2,5 мм.")),
    P(214, 200, t("Pedal", "Ոտնակ", "Педаль"), t("Press gently to go slowly, harder to go faster. Take your foot off before touching the needle.", "Թեթև սեղմի՛ր՝ դանդաղ աշխատելու համար, ուժեղ՝ արագ։ Ասեղին դիպչելուց առաջ ոտքդ վերցրու ոտնակից։", "Нажимай слегка, чтобы шить медленно, сильнее — быстрее. Убери ногу, прежде чем трогать иглу.")),
  ],
};

/* ---------------- grade 5: the healthy plate ---------------- */

const sector = (cx: number, cy: number, r: number, a0: number, a1: number) => {
  const p = (a: number) => `${cx + r * Math.cos((a * Math.PI) / 180)},${cy + r * Math.sin((a * Math.PI) / 180)}`;
  return `M${cx},${cy} L${p(a0)} A${r},${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${p(a1)} Z`;
};

const plate: Diagram = {
  title: t("The healthy plate", "Առողջ ափսե", "Тарелка здорового питания"),
  h: 210,
  draw: (lang) => (
    <g>
      <circle cx="116" cy="106" r="98" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
      <path d={sector(116, 106, 86, 90, 270)} fill="#bbf7d0" stroke="#fff" strokeWidth="3" />
      <path d={sector(116, 106, 86, 270, 360)} fill="#fde68a" stroke="#fff" strokeWidth="3" />
      <path d={sector(116, 106, 86, 0, 90)} fill="#fecaca" stroke="#fff" strokeWidth="3" />
      {/* vegetables and fruit */}
      <circle cx="70" cy="62" r="11" fill="#dc2626" /><path d="M70,51 q2,-6 6,-7" stroke="#166534" strokeWidth="2" fill="none" />
      <path d="M44,100 l30,-8 l-26,14 Z" fill="#f97316" /><path d="M74,92 l6,-4 M74,92 l7,0" stroke="#16a34a" strokeWidth="2" />
      <g transform="translate(8 8)"><circle cx="82" cy="138" r="8" fill="#16a34a" /><circle cx="92" cy="134" r="8" fill="#15803d" /><circle cx="88" cy="144" r="8" fill="#22c55e" /><rect x="85" y="146" width="5" height="12" fill="#86efac" /></g>
      <circle cx="56" cy="148" r="9" fill="#ef4444" /><circle cx="56" cy="148" r="3" fill="#fca5a5" />
      {/* grains */}
      <path d="M128,52 q0,-14 14,-14 h12 q14,0 14,14 v28 h-40 Z" fill="#d97706" stroke="#92400e" />
      <path d="M133,56 q0,-10 9,-10 h12 q9,0 9,10 v20 h-30 Z" fill="#fcd34d" />
      {Array.from({ length: 10 }, (_, j) => <ellipse key={j} cx={176 + (j % 4) * 6} cy={70 + Math.floor(j / 4) * 6} rx="2.6" ry="1.5" fill="#fff" stroke="#e5e7eb" strokeWidth="0.4" />)}
      {/* protein */}
      <ellipse cx="150" cy="140" rx="16" ry="12" fill="#fff" /><circle cx="152" cy="140" r="6" fill="#facc15" />
      <path d="M170,118 q14,-10 28,0 l8,-6 v12 l-8,-6 q-14,10 -28,0 Z" fill="#fb923c" />
      {Array.from({ length: 6 }, (_, j) => <ellipse key={j} cx={176 + (j % 3) * 7} cy={152 + Math.floor(j / 3) * 6} rx="3.2" ry="2.2" fill="#7c2d12" />)}
      <Tx x={66} y={116} s={t("vegetables|and fruit", "բանջարեղեն|և միրգ", "овощи|и фрукты")} lang={lang} size={7.5} fill="#166534" />
      <Tx x={160} y={98} s={t("grains", "հացահատիկ", "крупы")} lang={lang} size={7.5} fill="#92400e" />
      <Tx x={168} y={178} s={t("protein", "սպիտակուց", "белки")} lang={lang} size={7.5} fill="#991b1b" />
      {/* water */}
      <path d="M238,36 h32 l-4,70 h-24 Z" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1.5" />
      <path d="M240,56 h28 l-2.6,50 h-22.8 Z" fill="#38bdf8" opacity="0.7" />
      <Tx x={254} y={120} s={t("water", "ջուր", "вода")} lang={lang} size={8} fill="#0369a1" />
      {/* less often */}
      <rect x="226" y="138" width="88" height="66" rx="8" fill="#fff" stroke="#f87171" strokeDasharray="4 3" />
      <rect x="240" y="150" width="20" height="36" rx="3" fill="#b91c1c" /><rect x="243" y="146" width="14" height="4" fill="#94a3b8" />
      <path d="M270,186 l20,-30 l14,30 Z" fill="#f9a8d4" stroke="#be185d" /><circle cx="290" cy="154" r="3" fill="#dc2626" />
      <Tx x={270} y={200} s={t("less often", "ավելի հազվադեպ", "пореже")} lang={lang} size={7.5} fill="#b91c1c" />
    </g>
  ),
  parts: [
    P(40, 70, t("Vegetables", "Բանջարեղեն", "Овощи"), t("Half the plate is vegetables and fruit, with more vegetables than fruit. They give vitamins, minerals and fibre.", "Ափսեի կեսը բանջարեղեն և միրգ է, ընդ որում՝ բանջարեղենն ավելի շատ։ Դրանք տալիս են վիտամիններ, հանքային նյութեր և բջջանյութ։", "Половина тарелки — овощи и фрукты, причём овощей больше. Они дают витамины, минералы и клетчатку.")),
    P(70, 46, t("Fruit", "Միրգ", "Фрукты"), t("A whole apple is better than juice: it keeps its fibre and fills you up for longer.", "Ամբողջական խնձորն ավելի լավ է, քան հյութը․ դրանում պահպանվում է բջջանյութը, և կշտությունն ավելի երկար է տևում։", "Целое яблоко лучше сока: в нём сохраняется клетчатка, и сытость держится дольше.")),
    P(150, 36, t("Grains", "Հացահատիկ", "Крупы и хлеб"), t("A quarter of the plate: bread, rice, buckwheat, pasta, potatoes. Wholegrain kinds give energy slowly, for longer.", "Ափսեի քառորդը՝ հաց, բրինձ, հնդկաձավար, մակարոն, կարտոֆիլ։ Ամբողջահատիկ տեսակներն էներգիա են տալիս դանդաղ և ավելի երկար։", "Четверть тарелки: хлеб, рис, гречка, макароны, картофель. Цельнозерновые дают энергию медленно и надолго.")),
    P(186, 140, t("Protein", "Սպիտակուց", "Белки"), t("A quarter of the plate: eggs, fish, meat, cheese, beans, lentils. Protein builds muscles and repairs the body.", "Ափսեի քառորդը՝ ձու, ձուկ, միս, պանիր, լոբի, ոսպ։ Սպիտակուցը մկաններ է կառուցում և վերականգնում օրգանիզմը։", "Четверть тарелки: яйца, рыба, мясо, сыр, фасоль, чечевица. Белки строят мышцы и восстанавливают организм.")),
    P(276, 50, t("Water", "Ջուր", "Вода"), t("The best drink with any meal. A school-age child needs about 6 to 8 glasses of liquid a day, more on hot days.", "Լավագույն ըմպելիքը ցանկացած ուտեստի հետ։ Դպրոցական տարիքի երեխային օրական մոտ 6-8 բաժակ հեղուկ է պետք, շոգ օրերին՝ ավելի։", "Лучший напиток к любой еде. Школьнику нужно около 6–8 стаканов жидкости в день, в жару больше.")),
    P(306, 146, t("Less often", "Ավելի հազվադեպ", "Пореже"), t("Sweets, fizzy drinks, crisps and very salty or fatty food are for now and then, not every day.", "Քաղցրավենիքը, գազավորված ըմպելիքները, չիպսերը և շատ աղի կամ յուղոտ սնունդն երբեմն-երբեմն են, ոչ ամեն օր։", "Сладости, газировка, чипсы и очень солёная или жирная еда — иногда, а не каждый день.")),
  ],
};

/* ---------------- grade 5: care symbols ---------------- */

const Tub = ({ x, y }: { x: number; y: number }) => (
  <g fill="none" stroke="#1e293b" strokeWidth="2">
    <path d={`M${x},${y} L${x + 6},${y + 34} H${x + 50} L${x + 56},${y}`} />
    <path d={`M${x + 2},${y + 9} q7,-6 13,0 t13,0 t13,0 t13,0`} />
  </g>
);
const Cross = ({ x, y, w, h }: { x: number; y: number; w: number; h: number }) => (
  <path d={`M${x},${y} L${x + w},${y + h} M${x + w},${y} L${x},${y + h}`} stroke="#dc2626" strokeWidth="2.4" />
);
const Iron = ({ x, y, dots }: { x: number; y: number; dots: number }) => (
  <g>
    <path d={`M${x},${y + 36} H${x + 56} V${y + 16} q0,-6 -6,-6 H${x + 22} Q${x + 6},${y + 12} ${x},${y + 36} Z`} fill="none" stroke="#1e293b" strokeWidth="2" />
    <path d={`M${x + 24},${y + 10} L${x + 20},${y} H${x + 52} L${x + 54},${y + 10}`} fill="none" stroke="#1e293b" strokeWidth="2" />
    {Array.from({ length: dots }, (_, j) => <circle key={j} cx={x + 36 - (dots - 1) * 5 + j * 10} cy={y + 25} r="2.6" fill="#1e293b" />)}
  </g>
);

const carelabel: Diagram = {
  title: t("Reading the care label", "Ինչպես կարդալ խնամքի պիտակը", "Читаем ярлык по уходу"),
  h: 166,
  draw: () => (
    <g>
      <rect x="0" y="0" width="320" height="166" fill="#f8fafc" />
      {/* row 1: washing and bleaching */}
      <Tub x={12} y={26} />
      <text x="40" y="54" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1e293b">40</text>
      <Tub x={90} y={26} />
      <path d="M108,56 v-16 q0,-4 3,-4 v-8 q0,-3 3,-3 q3,0 3,3 v-2 q0,-3 3,-3 q3,0 3,3 v2 q0,-3 3,-3 q3,0 3,3 v14 q4,-4 6,0 l-6,14 Z" fill="#fde68a" stroke="#1e293b" strokeWidth="1.2" />
      <Tub x={168} y={26} />
      <Cross x={170} y={22} w={52} h={40} />
      <path d="M252,60 L276,22 L300,60 Z" fill="none" stroke="#1e293b" strokeWidth="2" />
      <Cross x={256} y={24} w={40} h={36} />
      {/* row 2: ironing, drying, dry cleaning */}
      <Iron x={10} y={108} dots={1} />
      <Iron x={88} y={108} dots={3} />
      <rect x="176" y="106" width="40" height="40" fill="none" stroke="#1e293b" strokeWidth="2" />
      <circle cx="196" cy="126" r="14" fill="none" stroke="#1e293b" strokeWidth="2" />
      <circle cx="196" cy="126" r="2.6" fill="#1e293b" />
      <circle cx="276" cy="126" r="20" fill="none" stroke="#1e293b" strokeWidth="2" />
      <text x="276" y="131" textAnchor="middle" fontSize="14" fontWeight="800" fill="#1e293b">P</text>
      <line x1="0" x2="320" y1="84" y2="84" stroke="#e2e8f0" />
    </g>
  ),
  parts: [
    P(40, 18, t("Machine wash 40°", "Մեքենայական լվացք 40°", "Стирка при 40°"), t("A washtub means it can be washed. The number is the hottest water allowed: 30, 40 or 60 degrees.", "Լվացքի տաշտը նշանակում է, որ կարելի է լվանալ։ Թիվը թույլատրելի ամենատաք ջրի ջերմաստիճանն է՝ 30, 40 կամ 60 աստիճան։", "Тазик значит, что вещь можно стирать. Число — самая горячая допустимая вода: 30, 40 или 60 градусов.")),
    P(118, 18, t("Hand wash only", "Միայն ձեռքով լվացք", "Только ручная стирка"), t("A hand in the tub: wash gently by hand in lukewarm water, without rubbing or twisting.", "Ձեռք տաշտում․ լվա՛ զգույշ, ձեռքով, գաղջ ջրում՝ առանց շփելու կամ ոլորելու։", "Рука в тазике: стирай бережно руками в тёплой воде, не три и не выкручивай.")),
    P(232, 30, t("Do not wash", "Չի կարելի լվանալ", "Не стирать"), t("A crossed-out tub: the item must not get wet at all. It can only be dry-cleaned.", "Խաչված տաշտ․ իրն ընդհանրապես չի կարելի թրջել։ Այն կարելի է միայն քիմմաքրել։", "Перечёркнутый тазик: вещь нельзя мочить вообще. Её можно только сдать в химчистку.")),
    P(306, 64, t("No bleach", "Առանց սպիտակեցնողի", "Не отбеливать"), t("A triangle is about bleach. Crossed out, it means no bleach, or the colour will be ruined.", "Եռանկյունը սպիտակեցնողի մասին է։ Խաչված լինելու դեպքում՝ առանց սպիտակեցնողի, այլապես գույնը կփչանա։", "Треугольник — это об отбеливании. Перечёркнутый значит «не отбеливать», иначе цвет испортится.")),
    P(40, 98, t("Cool iron", "Թույլ արդուկ", "Слабый нагрев утюга"), t("One dot: a cool iron, about 110 °C, for synthetics. A hot iron would melt them.", "Մեկ կետ․ թույլ արդուկ՝ մոտ 110 °C, սինթետիկայի համար։ Տաք արդուկը կհալեցներ դրանք։", "Одна точка: слабый нагрев, около 110 °C, для синтетики. Горячий утюг её бы расплавил.")),
    P(118, 98, t("Hot iron", "Տաք արդուկ", "Сильный нагрев утюга"), t("Three dots: a hot iron, about 200 °C, for cotton and linen. Two dots, in between, are for wool and silk.", "Երեք կետ․ տաք արդուկ՝ մոտ 200 °C, բամբակի և վուշի համար։ Երկու կետը միջինն է՝ բրդի և մետաքսի համար։", "Три точки: сильный нагрев, около 200 °C, для хлопка и льна. Две точки, средний, — для шерсти и шёлка.")),
    P(224, 104, t("Tumble dry", "Թմբուկային չորացում", "Сушка в барабане"), t("A circle in a square: it can go in a tumble dryer. One dot means a low heat.", "Շրջան քառակուսու մեջ․ կարելի է չորացնել չորացման մեքենայում։ Մեկ կետը նշանակում է ցածր ջերմություն։", "Круг в квадрате: можно сушить в сушильной машине. Одна точка — низкая температура.")),
    P(302, 104, t("Dry clean", "Քիմմաքրում", "Химчистка"), t("A circle is for professional cleaning. The letter inside tells the cleaner which liquid to use.", "Շրջանը մասնագիտական մաքրման համար է։ Ներսի տառը քիմմաքրողին ասում է, թե որ հեղուկն օգտագործել։", "Круг — для профессиональной чистки. Буква внутри подсказывает химчистке, каким средством пользоваться.")),
  ],
};

/* ---------------- grade 6: wood joints ---------------- */

const JA = "#e9c48f", JB = "#c98f45", JE = "#92400e";
const Hid = ({ x, y, w, h }: { x: number; y: number; w: number; h: number }) => <rect x={x} y={y} width={w} height={h} fill="none" stroke={JE} strokeWidth="0.9" strokeDasharray="3 2" />;
const Nail = ({ x, y, l }: { x: number; y: number; l: number }) => (
  <g><line x1={x} x2={x + l} y1={y} y2={y} stroke="#334155" strokeWidth="1.6" /><rect x={x - 2} y={y - 3} width="2" height="6" fill="#334155" /></g>
);
const Down = ({ x, y }: { x: number; y: number }) => <path d={`M${x},${y} v10 M${x - 3},${y + 6} l3,4 l3,-4`} fill="none" stroke="#7c3aed" strokeWidth="1.5" />;
const Right = ({ x, y }: { x: number; y: number }) => <path d={`M${x},${y} h8 M${x + 4},${y - 3} l4,3 l-4,3`} fill="none" stroke="#7c3aed" strokeWidth="1.5" />;

const joints: Diagram = {
  title: t("Wood joints and fasteners", "Փայտի միացումներ և ամրակներ", "Столярные соединения и крепёж"),
  h: 214,
  draw: (lang) => (
    <g>
      <rect x="0" y="0" width="320" height="214" fill="#f8fafc" />
      {/* butt joint */}
      <g transform="translate(6 6)">
        <rect x="20" y="6" width="14" height="66" fill={JB} stroke={JE} />
        <rect x="34" y="56" width="58" height="16" fill={JA} stroke={JE} />
        <Nail x={22} y={61} l={28} /><Nail x={22} y={68} l={28} />
      </g>
      {/* halving joint */}
      <g transform="translate(110 6)">
        <path d="M6,52 H50 V60 H80 V68 H6 Z" fill={JA} stroke={JE} />
        <path d="M50,22 H96 V38 H80 V30 H50 Z" fill={JB} stroke={JE} />
        <Down x={65} y={36} />
      </g>
      {/* mortise and tenon */}
      <g transform="translate(214 6)">
        <path d="M2,30 H30 V36 H44 V48 H30 V54 H2 Z" fill={JA} stroke={JE} />
        <rect x="58" y="4" width="22" height="72" fill={JB} stroke={JE} />
        <Hid x={58} y={36} w={14} h={12} />
        <Right x={46} y={42} />
      </g>
      {/* dowel joint */}
      <g transform="translate(6 112)">
        <rect x="2" y="28" width="34" height="26" fill={JA} stroke={JE} />
        <rect x="64" y="28" width="34" height="26" fill={JB} stroke={JE} />
        <rect x="36" y="33" width="28" height="5" fill="#fef3c7" stroke={JE} strokeWidth="0.6" />
        <rect x="36" y="44" width="28" height="5" fill="#fef3c7" stroke={JE} strokeWidth="0.6" />
        <Hid x={24} y={33} w={12} h={5} /><Hid x={24} y={44} w={12} h={5} /><Hid x={64} y={33} w={12} h={5} /><Hid x={64} y={44} w={12} h={5} />
      </g>
      {/* dovetail */}
      <g transform="translate(110 112)">
        <rect x="44" y="6" width="50" height="62" fill={JB} stroke={JE} />
        <path d="M6,6 H44 V14 L60,10 V30 L44,26 V40 L60,36 V56 L44,52 V68 H6 Z" fill={JA} stroke={JE} />
      </g>
      {/* fasteners */}
      <g transform="translate(214 112)">
        <line x1="10" x2="10" y1="14" y2="66" stroke="#475569" strokeWidth="2.5" /><rect x="5" y="10" width="10" height="4" fill="#475569" /><path d="M8.7,66 l1.3,5 l1.3,-5" fill="#475569" />
        <path d="M30,14 h12 l-2,4 h-8 Z" fill="#64748b" /><rect x="34" y="18" width="4" height="44" fill="#94a3b8" /><path d="M34,62 l2,8 l2,-8" fill="#94a3b8" />
        {Array.from({ length: 9 }, (_, j) => <line key={j} x1="33" x2="39" y1={22 + j * 4.5} y2={24 + j * 4.5} stroke="#475569" />)}
        <path d="M62,30 h20 v38 h-20 Z" fill="#f8fafc" stroke="#475569" /><path d="M66,30 l4,-12 h4 l4,12" fill="#f97316" stroke="#475569" />
        <rect x="64" y="42" width="16" height="12" fill="#fde68a" />
      </g>
      {[[56, 92, t("butt", "կցորդային", "встык")], [160, 92, t("halving", "կիսահաստ", "вполдерева")], [262, 92, t("mortise and tenon", "փորակ և ելուստ", "шип и паз")], [56, 198, t("dowels", "նագելներ", "на шкантах")], [160, 198, t("dovetail", "ագռավաբույն", "ласточкин хвост")], [262, 198, t("nail, screw, glue", "մեխ, պտուտակ, սոսինձ", "гвоздь, шуруп, клей")]].map(([x, y, s], j) => (
        <Tx key={j} x={x as number} y={y as number} s={s as Tr} lang={lang} size={8} fill="#334155" />
      ))}
    </g>
  ),
  parts: [
    P(64, 46, t("Butt joint", "Կցորդային միացում", "Соединение встык"), t("The parts are simply put together and nailed or screwed. Quick but weak: nails pull out of the end grain easily.", "Մասերը պարզապես դրվում են իրար կողք և մեխվում կամ պտուտակվում։ Արագ է, բայց թույլ․ մեխերը հեշտությամբ դուրս են գալիս ճակատային կտրվածքից։", "Детали просто приставляют друг к другу и сбивают гвоздями или шурупами. Быстро, но слабо: гвозди легко вылезают из торца.")),
    P(150, 58, t("Halving joint", "Կիսահաստ միացում", "Соединение вполдерева"), t("Half the thickness is cut away from each part, so they overlap and stay flush. Used in frames and stools.", "Ամեն մասից կտրվում է հաստության կեսը, որ դրանք ծածկեն իրար և հավասար մնան։ Օգտագործվում է շրջանակներում և աթոռակներում։", "От каждой детали срезают половину толщины, и они накладываются, оставаясь вровень. Применяется в рамах и табуретах.")),
    P(238, 26, t("Mortise and tenon", "Փորակ և ելուստ", "Шип и паз"), t("A tongue (the tenon) fits tightly into a slot (the mortise) and is glued. Very strong: chairs and tables are made this way.", "Լեզվակը՝ ելուստը, ամուր մտնում է ակոսի՝ փորակի մեջ և սոսնձվում։ Շատ ամուր է․ աթոռներն ու սեղաններն այսպես են պատրաստում։", "Выступ (шип) плотно входит в гнездо (паз) и приклеивается. Очень прочно: так делают стулья и столы.")),
    P(56, 136, t("Dowel joint", "Նագելային միացում", "Соединение на шкантах"), t("Round wooden pins with glue fit into matching holes in both parts. The holes must line up exactly.", "Կլոր փայտե գամերը սոսնձով մտնում են երկու մասերի համապատասխան անցքերը։ Անցքերը պետք է ճշգրիտ համընկնեն։", "Круглые деревянные шканты с клеем входят в совпадающие отверстия обеих деталей. Отверстия должны точно совпасть.")),
    P(144, 128, t("Dovetail", "Ագռավաբույն", "Ласточкин хвост"), t("Wedge-shaped tails lock into pins and cannot be pulled apart in one direction. Strong and beautiful, used on drawers.", "Սեպաձև ելուստները կողպվում են իրար մեջ և մի ուղղությամբ չեն կարող դուրս քաշվել։ Ամուր է և գեղեցիկ, օգտագործվում է դարակներում։", "Клиновидные шипы запираются друг в друге, и в одну сторону их не растащить. Прочно и красиво, применяется в ящиках.")),
    P(30, 138, t("Hidden lines", "Թաքնված գծեր", "Невидимые линии"), t("Dashed lines show the holes and slots hidden inside the wood, as on a technical drawing.", "Ընդհատ գծերը ցույց են տալիս փայտի ներսում թաքնված անցքերն ու ակոսները, ինչպես տեխնիկական գծագրում։", "Штриховые линии показывают скрытые внутри дерева отверстия и пазы, как на техническом чертеже.")),
    P(240, 126, t("Fasteners", "Ամրակներ", "Крепёж"), t("A nail holds by friction, a screw by its thread, which grips much harder. Wood glue joins the fibres and is often stronger than the wood itself.", "Մեխը պահվում է շփման շնորհիվ, իսկ պտուտակը՝ պարույրի, որն ավելի ամուր է բռնում։ Փայտի սոսինձը միացնում է թելիկները և հաճախ փայտից էլ ամուր է։", "Гвоздь держится трением, шуруп — резьбой, которая держит гораздо крепче. Столярный клей соединяет волокна и часто прочнее самого дерева.")),
  ],
};

/* ---------------- grade 6: sitting well at a desk ---------------- */

const LIMB = { stroke: "#2563eb", strokeWidth: 12, strokeLinecap: "round", fill: "none" } as const;
const Rt = ({ x, y, a }: { x: number; y: number; a: number }) => (
  <path d={`M${x},${y} m${8 * Math.cos(a)},${8 * Math.sin(a)} l${8 * Math.cos(a + Math.PI / 2)},${8 * Math.sin(a + Math.PI / 2)} l${-8 * Math.cos(a)},${-8 * Math.sin(a)}`} fill="none" stroke="#dc2626" strokeWidth="1.4" />
);

const ergochair: Diagram = {
  title: t("Sitting well at a desk", "Ճիշտ նստել սեղանի մոտ", "Правильная посадка за столом"),
  h: 214,
  draw: (lang) => (
    <g>
      <rect x="0" y="0" width="320" height="214" fill="#f8fafc" />
      <rect x="0" y="196" width="320" height="18" fill="#e2e8f0" />
      {/* chair */}
      <rect x="64" y="140" width="62" height="8" rx="3" fill="#475569" />
      <rect x="58" y="78" width="9" height="70" rx="3" fill="#475569" />
      <rect x="90" y="148" width="6" height="40" fill="#64748b" />
      <path d="M68,196 L93,186 L118,196" fill="none" stroke="#64748b" strokeWidth="4" />
      {/* desk and screen */}
      <rect x="140" y="106" width="150" height="7" fill={WOOD} />
      <rect x="276" y="113" width="8" height="83" fill={WOOD_D} />
      <rect x="234" y="96" width="24" height="10" fill="#64748b" />
      <rect x="242" y="44" width="8" height="54" rx="2" fill="#1e293b" />
      <rect x="150" y="100" width="40" height="5" rx="1" fill="#cbd5e1" />
      {/* the person */}
      <path d="M96,134 L146,134 L146,190 L164,192" {...LIMB} strokeLinejoin="round" />
      <path d="M96,134 L90,74" {...LIMB} strokeWidth={18} />
      <path d="M90,80 L100,108 L150,100" {...LIMB} strokeLinejoin="round" />
      <circle cx="94" cy="52" r="15" fill="#fcd9b6" />
      <path d="M80,48 q4,-16 20,-14 q8,2 9,10 q-14,-6 -29,4 Z" fill="#78350f" />
      <circle cx="103" cy="50" r="1.8" fill="#1e293b" />
      <rect x="67" y="104" width="14" height="22" rx="6" fill="#f59e0b" />
      <circle cx="30" cy="60" r="13" fill="#fff" stroke="#475569" strokeWidth="2" /><path d="M30,52 V60 L36,63" fill="none" stroke="#475569" strokeWidth="1.8" />
      {/* lines */}
      <line x1="104" x2="242" y1="50" y2="48" stroke="#16a34a" strokeWidth="1.2" strokeDasharray="4 3" />
      <line x1="104" x2="242" y1="50" y2="70" stroke="#16a34a" strokeWidth="1.2" strokeDasharray="4 3" />
      <DimArrow x1={108} y1={30} x2={242} y2={30} />
      <Tx x={175} y={26} s={t("50–70 cm", "50–70 սմ", "50–70 см")} lang={lang} size={8.5} fill="#0f172a" />
      <Rt x={146} y={134} a={Math.PI} /><Rt x={146} y={134} a={Math.PI / 2} />
      <Rt x={100} y={108} a={-Math.PI / 2 - 0.35} />
      <Rt x={96} y={134} a={-Math.PI / 2} />
    </g>
  ),
  parts: [
    P(262, 46, t("Screen at eye level", "Էկրանը՝ աչքերի մակարդակին", "Экран на уровне глаз"), t("The top of the screen should be level with your eyes or a little lower, so you look slightly down and your neck stays relaxed.", "Էկրանի վերին եզրը պետք է լինի աչքերի մակարդակին կամ մի փոքր ցածր, որ թեթևակի ներքև նայես, և պարանոցդ թուլացած մնա։", "Верх экрана должен быть на уровне глаз или чуть ниже, чтобы ты смотрел немного вниз, а шея оставалась расслабленной.")),
    P(175, 38, t("Distance", "Հեռավորություն", "Расстояние"), t("About an arm's length, 50–70 cm, from the eyes to a screen; about 30–35 cm to a book.", "Մոտ մեկ ձեռքի երկարություն՝ 50–70 սմ աչքերից մինչև էկրան, և մոտ 30–35 սմ՝ մինչև գիրք։", "Примерно вытянутая рука, 50–70 см, от глаз до экрана; до книги около 30–35 см.")),
    P(74, 115, t("Back support", "Մեջքի հենարան", "Опора для спины"), t("Sit right back in the chair. A small cushion in the curve of the lower back keeps the spine in its natural shape.", "Նստի՛ր աթոռի խորքում։ Գոտկատեղի կորության մեջ դրված փոքր բարձիկը ողնաշարը պահում է իր բնական ձևում։", "Садись глубоко на стул. Маленькая подушка в изгибе поясницы сохраняет естественную форму позвоночника.")),
    P(112, 100, t("Elbows at 90°", "Արմունկները՝ 90°", "Локти под 90°"), t("Shoulders relaxed, elbows bent at about a right angle, forearms resting on the desk.", "Ուսերը թուլացած են, արմունկները ծալված են մոտավորապես ուղիղ անկյան տակ, նախաբազուկները հենված են սեղանին։", "Плечи расслаблены, локти согнуты примерно под прямым углом, предплечья лежат на столе.")),
    P(158, 146, t("Knees at 90°", "Ծնկները՝ 90°", "Колени под 90°"), t("The seat should be at the height of your knees, so your thighs are level and your knees bent at a right angle.", "Նստատեղը պետք է լինի ծնկներիդ բարձրությամբ, որ ազդրերը հորիզոնական լինեն, իսկ ծնկները ծալված լինեն ուղիղ անկյան տակ։", "Сиденье должно быть на высоте колен, чтобы бёдра были горизонтальны, а колени согнуты под прямым углом.")),
    P(168, 182, t("Feet flat", "Ոտնաթաթերը՝ հատակին", "Стопы на полу"), t("Both feet flat on the floor. If they do not reach, put a footrest or a thick book under them.", "Երկու ոտնաթաթն էլ ամբողջությամբ հատակին են։ Եթե չեն հասնում, տակը ոտքի հենարան կամ հաստ գիրք դիր։", "Обе стопы полностью стоят на полу. Если не достают, подставь подставку или толстую книгу.")),
    P(30, 82, t("Take breaks", "Ընդմիջումներ արա", "Делай перерывы"), t("Even the best position tires you. Every 30–40 minutes stand up, stretch and look into the distance for a minute.", "Նույնիսկ լավագույն դիրքը հոգնեցնում է։ Ամեն 30–40 րոպեն մեկ վեր կաց, ձգվի՛ր և մեկ րոպե նայի՛ր հեռուն։", "Даже самая удобная поза утомляет. Каждые 30–40 минут вставай, потягивайся и минуту смотри вдаль.")),
  ],
};

/* ---------------- grade 6: the apron pattern on the fabric ---------------- */

const GrainArrow = ({ x, y1, y2 }: { x: number; y1: number; y2: number }) => (
  <path d={`M${x},${y1} V${y2} M${x - 3},${y1 + 5} l3,-5 l3,5 M${x - 3},${y2 - 5} l3,5 l3,-5`} fill="none" stroke="#1e293b" strokeWidth="1" />
);

const apronpattern: Diagram = {
  title: t("Laying out an apron pattern", "Գոգնոցի ձևվածքի դասավորում", "Раскладка выкройки фартука"),
  h: 214,
  draw: (lang) => (
    <g>
      <rect x="10" y="10" width="300" height="196" fill="#fce7f3" />
      {Array.from({ length: 30 }, (_, j) => <line key={j} x1={10 + j * 10} x2={10 + j * 10} y1="10" y2="206" stroke="#fbcfe8" strokeWidth="0.6" />)}
      <line x1="12" x2="12" y1="10" y2="206" stroke="#be185d" strokeWidth="1.6" strokeDasharray="12 3 2 3" />
      <rect x="306" y="10" width="4" height="196" fill="#f9a8d4" />
      {/* main body, half on the fold */}
      <path d="M12,24 H52 Q54,64 72,76 Q104,80 112,88 V196 H12 Z" fill="#fff" stroke="#1e293b" strokeWidth="1.6" />
      <path d="M12,18 H58 Q60,60 76,70 Q110,74 118,84 V202 H12" fill="none" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="4 3" />
      <path d="M112,140 l-6,-3 v6 Z" fill="#1e293b" />
      <GrainArrow x={92} y1={150} y2={190} />
      <Tx x={20} y={112} s={t("bib and skirt|×1|on the fold", "կրծքամաս և փեշ|×1|ծալքի վրա", "нагрудник|и полотнище|×1, со сгибом")} lang={lang} size={7.5} fill="#1e293b" anchor="start" />
      {/* ties and neck strap, cut along the warp */}
      {[244, 264, 284].map((x, j) => (
        <g key={x}>
          <rect x={x} y="18" width="14" height="180" fill="#fff" stroke="#1e293b" strokeWidth="1.4" />
          <GrainArrow x={x + 7} y1={24} y2={64} />
          <g transform={`rotate(-90 ${x + 9.5} 130)`}><Tx x={x + 9.5} y={130} s={j < 2 ? t("tie ×2", "կապ ×2", "завязка ×2") : t("neck strap ×1", "պարանոցի կապ ×1", "лямка ×1")} lang={lang} size={7} fill="#1e293b" /></g>
        </g>
      ))}
      {/* pocket */}
      <rect x="146" y="100" width="70" height="60" fill="#fff" stroke="#1e293b" strokeWidth="1.4" />
      <line x1="146" x2="216" y1="110" y2="110" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="4 3" />
      <GrainArrow x={156} y1={118} y2={154} />
      <Tx x={190} y={138} s={t("pocket ×1", "գրպան ×1", "карман ×1")} lang={lang} size={7} fill="#1e293b" />
      <g transform="rotate(-90 316 110)"><Tx x={316} y={110} s={t("selvedge", "եզրաշերտ", "кромка")} lang={lang} size={7} fill="#be185d" /></g>
    </g>
  ),
  parts: [
    P(20, 40, t("Fold", "Ծալք", "Сгиб"), t("The fabric is folded in half and the half-pattern is placed against the fold. When you open it out, the piece is perfectly symmetrical.", "Գործվածքը ծալվում է կիսով չափ, և ձևվածքի կեսը դրվում է ծալքին։ Բացելիս մասը կատարյալ համաչափ է ստացվում։", "Ткань складывают пополам и прикладывают половину выкройки к сгибу. Когда развернёшь, деталь получится идеально симметричной.")),
    P(100, 176, t("Grain arrow", "Թելի ուղղության սլաք", "Долевая нить"), t("The arrow on every piece must run along the warp, parallel to the selvedge, or the apron will twist after washing.", "Ամեն մասի սլաքը պետք է ուղղված լինի հենքի երկայնքով՝ եզրաշերտին զուգահեռ, այլապես լվանալուց հետո գոգնոցը կծռվի։", "Стрелка на каждой детали должна идти вдоль нитей основы, параллельно кромке, иначе после стирки фартук перекосит.")),
    P(124, 104, t("Seam allowance", "Կարի պաշար", "Припуск на шов"), t("Cut 1–1.5 cm outside the pattern line (the dashed line): this margin goes into the seam.", "Կտրի՛ր ձևվածքի գծից 1–1,5 սմ դուրս (ընդհատ գիծը)․ այս պաշարը գնում է կարի մեջ։", "Режь на 1–1,5 см дальше линии выкройки (штриховая линия): этот запас уходит в шов.")),
    P(104, 140, t("Notch", "Նշակետ", "Надсечка"), t("A little mark showing where a tie is sewn on. Notches help match pieces exactly.", "Փոքրիկ նշան, որը ցույց է տալիս, թե որտեղ է կարվում կապը։ Նշակետերն օգնում են մասերը ճշգրիտ համապատասխանեցնել։", "Маленькая метка, показывающая, где пришивается завязка. Надсечки помогают точно совместить детали.")),
    P(36, 90, t("Measurements", "Չափեր", "Мерки"), t("The pattern is drawn from your measurements: half the waist, the length from waist to knee and the bib height.", "Ձևվածքը գծվում է քո չափերով՝ գոտկատեղի կեսը, երկարությունը գոտկատեղից մինչև ծունկ և կրծքամասի բարձրությունը։", "Выкройку строят по твоим меркам: половина обхвата талии, длина от талии до колена и высота нагрудника.")),
    P(291, 40, t("Ties and strap", "Կապեր և ժապավեն", "Завязки и лямка"), t("Long strips are cut too. Folded and stitched, they become the ties and the neck strap.", "Կտրում են նաև երկար շերտեր։ Ծալված և կարված՝ դրանք դառնում են կապեր և պարանոցի ժապավեն։", "Ещё вырезают длинные полосы. Сложенные и прострочённые, они станут завязками и лямкой.")),
    P(200, 92, t("Pocket", "Գրպան", "Карман"), t("The top edge of the pocket is folded over twice and stitched before the pocket is sewn on.", "Գրպանի վերին եզրն երկու անգամ ծալվում և կարվում է, նախքան գրպանը կարելը։", "Верхний край кармана дважды подгибают и прострачивают, прежде чем пришить карман.")),
  ],
};

/* ---------------- grade 6: temperatures that keep food safe ---------------- */

const TY = (c: number) => 200 - (c + 20) * 1.24;

const foodtemp: Diagram = {
  title: t("Temperatures and food safety", "Ջերմաստիճան և սննդի անվտանգություն", "Температура и безопасность еды"),
  h: 214,
  draw: (lang) => (
    <g>
      <rect x="0" y="0" width="320" height="214" fill="#f8fafc" />
      <rect x="54" y={TY(60)} width="236" height={TY(5) - TY(60)} fill="#fee2e2" />
      <Tx x={286} y={TY(60) + 12} s={t("danger zone 5–60 °C", "վտանգավոր գոտի 5–60 °C", "опасная зона 5–60 °C")} lang={lang} size={8} fill="#b91c1c" anchor="end" />
      {/* thermometer */}
      <rect x="30" y="14" width="16" height="190" rx="8" fill="#fff" stroke="#94a3b8" />
      <rect x="35" y={TY(121)} width="6" height={200 - TY(121)} rx="3" fill="#ef4444" />
      <circle cx="38" cy="204" r="9" fill="#ef4444" />
      {[[121, t("121 °C: canning under pressure", "121 °C․ պահածոյացում ճնշման տակ", "121 °C: консервирование под давлением"), "#7c3aed"], [100, t("100 °C: boiling kills most microbes", "100 °C․ եռալը սպանում է մանրէների մեծ մասը", "100 °C: кипячение убивает большинство микробов"), "#7c3aed"], [75, t("75 °C: well cooked and reheated food", "75 °C․ լավ եփված և տաքացված սնունդ", "75 °C: хорошо приготовленная и разогретая еда"), "#ea580c"], [37, t("37 °C: microbes multiply fastest", "37 °C․ մանրէներն ամենաարագն են բազմանում", "37 °C: микробы размножаются быстрее всего"), "#b91c1c"], [4, t("4 °C: fridge", "4 °C․ սառնարան", "4 °C: холодильник"), "#0284c7"], [-18, t("−18 °C: freezer", "−18 °C․ սառցախցիկ", "−18 °C: морозилка"), "#0369a1"]].map(([c, s, col]) => (
        <g key={c as number}>
          <line x1="46" x2="58" y1={TY(c as number)} y2={TY(c as number)} stroke={col as string} strokeWidth="2" />
          <Tx x={62} y={TY(c as number) + 3} s={s as Tr} lang={lang} size={7.5} fill={col as string} anchor="start" />
        </g>
      ))}
      {/* doubling bacteria */}
      {[[1, 210, 128], [8, 236, 128], [64, 266, 128]].map(([n, x]) => (
        <g key={n}>{Array.from({ length: Math.min(n, 16) }, (_, j) => <ellipse key={j} cx={x + (j % 4) * 5} cy={140 + Math.floor(j / 4) * 5} rx="2.2" ry="1.4" fill="#16a34a" />)}</g>
      ))}
      <Tx x={250} y={170} s={t("1 → 8 → 64 in 2 hours", "1 → 8 → 64՝ 2 ժամում", "1 → 8 → 64 за 2 часа")} lang={lang} size={7} fill="#15803d" />
    </g>
  ),
  parts: [
    P(20, TY(30), t("Danger zone", "Վտանգավոր գոտի", "Опасная зона"), t("Between 5 and 60 °C most microbes that spoil food or make us ill can grow. Do not leave cooked food out for more than about two hours.", "5-ից 60 °C-ի միջև սնունդը փչացնող կամ մեզ հիվանդացնող մանրէների մեծ մասը կարող է աճել։ Եփած սնունդը մի՛ թող սենյակում մոտ երկու ժամից ավելի։", "От 5 до 60 °C могут расти большинство микробов, которые портят еду или вызывают болезни. Не оставляй приготовленную еду на столе дольше примерно двух часов.")),
    P(250, 132, t("Doubling", "Կրկնապատկում", "Удвоение"), t("In warm, moist food some bacteria divide every 20 minutes: one becomes 8 in an hour, 64 in two hours and over 500 in three.", "Տաք, խոնավ սննդում որոշ բակտերիաներ բաժանվում են ամեն 20 րոպեն մեկ․ մեկը մեկ ժամում դառնում է 8, երկու ժամում՝ 64, իսկ երեքում՝ ավելի քան 500։", "В тёплой влажной еде некоторые бактерии делятся каждые 20 минут: из одной за час получается 8, за два — 64, за три — больше 500.")),
    P(20, TY(4), t("Fridge", "Սառնարան", "Холодильник"), t("At 0–5 °C microbes slow down but do not die. That is why food in the fridge still keeps only a few days.", "0–5 °C-ում մանրէները դանդաղում են, բայց չեն մահանում։ Ահա թե ինչու սառնարանում սնունդը պահվում է ընդամենը մի քանի օր։", "При 0–5 °C микробы замедляются, но не погибают. Поэтому в холодильнике еда хранится лишь несколько дней.")),
    P(20, TY(-18), t("Freezer", "Սառցախցիկ", "Морозилка"), t("At −18 °C microbes stop growing completely, so frozen food keeps for months. When it thaws they wake up again.", "−18 °C-ում մանրէներն ամբողջովին դադարում են աճել, ուստի սառեցված սնունդը պահվում է ամիսներով։ Երբ այն հալվում է, նրանք նորից արթնանում են։", "При −18 °C микробы совсем перестают расти, поэтому замороженная еда хранится месяцами. Когда она оттаивает, они снова просыпаются.")),
    P(20, TY(75), t("Cooking", "Եփում", "Готовка"), t("Food heated right through to 75 °C is safe. Reheat leftovers until they are steaming hot, and only once.", "Մինչև 75 °C ամբողջությամբ տաքացած սնունդն անվտանգ է։ Մնացորդները տաքացրու մինչև գոլորշի արձակեն, և միայն մեկ անգամ։", "Еда, прогретая насквозь до 75 °C, безопасна. Разогревай остатки до горячего пара и только один раз.")),
    P(20, TY(121), t("Canning", "Պահածոյացում", "Консервирование"), t("Jars heated and sealed so no microbes can get in keep for a year or more. A swollen lid means microbes are growing inside: throw it away.", "Տաքացված և հերմետիկ փակված բանկաները, որոնց մեջ մանրէներ չեն կարող ներթափանցել, պահվում են մեկ տարի և ավելի։ Ուռած կափարիչը նշանակում է, որ ներսում մանրէներ են աճում․ դեն նետի՛ր։", "Прогретые и герметично закрытые банки, куда не могут попасть микробы, хранятся год и больше. Вздутая крышка значит, что внутри растут микробы: выброси банку.")),
  ],
};

export const DIAGRAMS: Record<string, Diagram> = { materials, desk, collage, nature, housenet, weave, sandwich, carpet, bins, table, designcycle, techdrawing, torch, woodlog, workbench, wiretools, views, weaves3, sewmachine, plate, carelabel, joints, ergochair, apronpattern, foodtemp };
