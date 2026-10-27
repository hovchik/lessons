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

export const DIAGRAMS: Record<string, Diagram> = { materials, desk, collage, nature };
