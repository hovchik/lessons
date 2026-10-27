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

export const DIAGRAMS: Record<string, Diagram> = { materials, desk, collage, nature, housenet, weave, sandwich, carpet, bins, table };
