"use client";

import type { ArtLang, Tr } from "@/lib/art/spec";
import { L, t } from "../labels";
import type { Diagram } from "./types";

/* Labelled pictures for music, grades 1–7. */

const P = (x: number, y: number, name: Tr, text: Tr) => ({ x, y, name, text });

const Tx = ({ x, y, s, lang, size = 8, fill = "#1e1b4b", anchor = "middle", w = 800 }: { x: number; y: number; s: Tr; lang: ArtLang; size?: number; fill?: string; anchor?: "start" | "middle" | "end"; w?: number }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={w} fill={fill}>
    {L(s, lang).split("|").map((line, k) => <tspan key={k} x={x} dy={k ? size * 1.15 : 0}>{line}</tspan>)}
  </text>
);

const SKIN = "#fde7d4", SKIN_LINE = "#c2410c";

/* ---------------- grade 1: how to stand and breathe when singing ---------------- */

const singer: Diagram = {
  title: t("How to stand and breathe when you sing", "Ինչպես կանգնել և շնչել երգելիս", "Как стоять и дышать, когда поёшь"),
  h: 210,
  draw: (lang) => (
    <g>
      <line x1="20" x2="300" y1="198" y2="198" stroke="#cbd5e1" strokeWidth="2" />
      {/* a straight back */}
      <line x1="80" x2="80" y1="18" y2="196" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* legs and feet, a little apart */}
      <rect x="104" y="128" width="12" height="62" rx="5" fill="#60a5fa" />
      <rect x="124" y="128" width="12" height="62" rx="5" fill="#60a5fa" />
      <ellipse cx="108" cy="193" rx="11" ry="4.5" fill="#334155" />
      <ellipse cx="132" cy="193" rx="11" ry="4.5" fill="#334155" />
      {/* body with arms resting */}
      <rect x="96" y="66" width="48" height="66" rx="12" fill="#fbbf24" />
      <path d="M98,74 L88,124 M142,74 L152,124" stroke="#f59e0b" strokeWidth="10" strokeLinecap="round" />
      {/* the "balloon" in the tummy */}
      <circle cx="120" cy="106" r="13" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* relaxed shoulders */}
      <path d="M100,56 v8 m-3,-3 l3,3 l3,-3 M140,56 v8 m-3,-3 l3,3 l3,-3" stroke="#7c3aed" strokeWidth="1.5" fill="none" />
      {/* head up */}
      <rect x="113" y="54" width="14" height="12" fill={SKIN} />
      <circle cx="120" cy="38" r="18" fill={SKIN} stroke={SKIN_LINE} strokeWidth="1.2" />
      <path d="M103,32 C104,16 136,14 137,32 C130,24 110,24 103,32 Z" fill="#7c2d12" />
      <circle cx="113" cy="38" r="2" fill="#1e293b" />
      <circle cx="127" cy="38" r="2" fill="#1e293b" />
      <ellipse cx="120" cy="48" rx="3.5" ry="2.5" fill="#be123c" />
      {/* breathe in through the nose like smelling a flower */}
      <path d="M170,30 q8,-12 16,0 q-8,12 -16,0 Z" fill="#f472b6" />
      <path d="M178,36 v18" stroke="#16a34a" strokeWidth="2" />
      <path d="M164,38 L136,42" stroke="#0284c7" strokeWidth="1.5" markerEnd="url(#mus-arr)" />
      {/* and out slowly towards a candle that must not go out */}
      <path d="M128,50 q20,10 40,4 q20,-6 44,12" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
      <rect x="232" y="100" width="14" height="44" rx="2" fill="#fef3c7" stroke="#d97706" />
      <path d="M239,100 v-5" stroke="#334155" strokeWidth="1.2" />
      <path d="M239,95 q-6,-8 2,-18 q2,8 6,12 q-2,6 -8,6 Z" fill="#f97316" transform="rotate(14 239 95)" />
      <defs>
        <marker id="mus-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 Z" fill="#0284c7" />
        </marker>
      </defs>
      <Tx x={190} y={18} s={t("in through the nose", "ներս՝ քթով", "вдох носом")} lang={lang} size={7} fill="#0284c7" />
      <Tx x={239} y={160} s={t("out slowly", "դուրս՝ դանդաղ", "выдох медленно")} lang={lang} size={7} fill="#64748b" />
    </g>
  ),
  parts: [
    P(66, 30, t("Straight back", "Ուղիղ մեջք", "Прямая спина"), t("Stand tall, as if a string were gently pulling the top of your head up. A straight back gives your lungs room to fill.", "Կանգնի՛ր ուղիղ, կարծես թել է նրբորեն քաշում գլխիդ գագաթը դեպի վեր։ Ուղիղ մեջքը թոքերին տեղ է տալիս լցվելու։", "Стой ровно, будто ниточка тянет макушку вверх. Прямая спина даёт лёгким место наполниться.")),
    P(156, 62, t("Relaxed shoulders", "Թուլացած ուսեր", "Свободные плечи"), t("Keep your shoulders down and soft. If they rise when you breathe in, the air goes only into the top of your chest.", "Ուսերը պահի՛ր ցած և թուլացած։ Եթե շունչ քաշելիս դրանք բարձրանում են, օդը մտնում է միայն կրծքի վերին մասը։", "Держи плечи опущенными и мягкими. Если при вдохе они поднимаются, воздух попадает только в верх груди.")),
    P(196, 44, t("Smell the flower", "Հոտոտի՛ր ծաղիկը", "Понюхай цветок"), t("Breathe in calmly through your nose, as if you were smelling a flower. It warms and cleans the air before it reaches your throat.", "Հանգիստ շունչ քաշի՛ր քթով, կարծես ծաղիկ ես հոտոտում։ Քիթը տաքացնում և մաքրում է օդը, մինչև այն հասնի կոկորդին։", "Спокойно вдохни носом, будто нюхаешь цветок. Нос согревает и очищает воздух, прежде чем он попадёт в горло.")),
    P(120, 84, t("The balloon", "Փուչիկը", "Шарик"), t("When you breathe in, your tummy gently grows like a balloon filling up. Underneath is a big muscle, the diaphragm, that moves down to let the air in.", "Շունչ քաշելիս փորդ նրբորեն մեծանում է, ինչպես լցվող փուչիկը։ Նրա տակ մի մեծ մկան կա՝ ստոծանին, որն իջնում է՝ օդին տեղ տալու համար։", "При вдохе живот мягко увеличивается, как наполняющийся шарик. Под ним большая мышца — диафрагма, она опускается и впускает воздух.")),
    P(262, 118, t("Don't blow out the candle", "Մի՛ հանգցրու մոմը", "Не задуй свечу"), t("Sing while letting the air out slowly and evenly, as if you were blowing on a candle so gently that the flame only bends.", "Երգի՛ր՝ օդը դանդաղ և հավասարաչափ դուրս թողնելով, կարծես այնքան մեղմ ես փչում մոմին, որ բոցը միայն թեքվում է։", "Пой, выпуская воздух медленно и ровно, будто дуешь на свечу так тихо, что пламя только наклоняется.")),
    P(146, 186, t("Feet on the floor", "Ոտքերը՝ հատակին", "Ноги на полу"), t("Stand with your feet a little apart and firmly on the floor, so your body is steady and calm.", "Կանգնի՛ր ոտքերդ մի փոքր իրարից հեռու և ամուր հատակին, որպեսզի մարմինդ կայուն և հանգիստ լինի։", "Стой, слегка расставив ноги и твёрдо опираясь на пол, чтобы тело было устойчивым и спокойным.")),
  ],
};

/* ---------------- grade 1: three families of instruments ---------------- */

const instgroups: Diagram = {
  title: t("Three families of instruments", "Գործիքների երեք ընտանիք", "Три семьи инструментов"),
  h: 214,
  draw: (lang) => (
    <g>
      {[[55, t("Percussion|you hit them", "Հարվածային|հարվածում ես", "Ударные|по ним бьют"), "#dc2626"], [160, t("Wind|you blow", "Փողային|փչում ես", "Духовые|в них дуют"), "#0284c7"], [265, t("Strings|strings sound", "Լարային|լարերն են հնչում", "Струнные|звучат струны"), "#16a34a"]].map(([x, s, c]) => (
        <g key={x as number}>
          <rect x={(x as number) - 50} y="4" width="100" height="26" rx="8" fill={c as string} opacity="0.12" />
          <Tx x={x as number} y={14} s={s as Tr} lang={lang} size={7.5} fill={c as string} />
        </g>
      ))}
      {/* percussion: drum, triangle, xylophone */}
      <ellipse cx="55" cy="54" rx="22" ry="6" fill="#fde68a" stroke="#92400e" />
      <path d="M33,54 v22 a22,6 0 0 0 44,0 v-22" fill="#ef4444" stroke="#92400e" />
      <path d="M33,58 l11,16 l11,-16 l11,16 l11,-16" fill="none" stroke="#fde68a" strokeWidth="1.5" />
      <path d="M62,46 l12,-9 M48,46 l-12,-9" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
      <path d="M44,138 L55,116 L66,138 L48,138" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M72,120 l-10,12" stroke="#334155" strokeWidth="1.5" />
      {[0, 1, 2, 3, 4, 5].map((k) => <rect key={k} x={31 + k * 8.5} y={164 + k * 2} width="7" height={36 - k * 4} rx="1.5" fill={["#ef4444", "#f97316", "#facc15", "#22c55e", "#3b82f6", "#a855f7"][k]} />)}
      {/* wind: duduk and trumpet */}
      <rect x="120" y="54" width="70" height="9" rx="4" fill="#b45309" transform="rotate(-12 155 58)" />
      <rect x="186" y="44" width="16" height="7" rx="2" fill="#d6b26e" transform="rotate(-12 155 58)" />
      {[0, 1, 2, 3, 4].map((k) => <circle key={k} cx={132 + k * 10} cy="59" r="1.8" fill="#451a03" transform="rotate(-12 155 58)" />)}
      <path d="M124,128 h48 l16,-12 v28 l-16,-12 Z" fill="#facc15" stroke="#a16207" />
      <path d="M140,128 v-10 M150,128 v-10 M160,128 v-10" stroke="#a16207" strokeWidth="3" strokeLinecap="round" />
      <rect x="118" y="125" width="8" height="6" rx="2" fill="#a16207" />
      {/* strings: violin with bow, and a guitar */}
      <path d="M255,56 c-10,0 -12,10 -6,14 c-8,4 -8,16 4,18 c4,0 8,0 12,0 c12,-2 12,-14 4,-18 c6,-4 4,-14 -6,-14 Z" fill="#b45309" stroke="#78350f" />
      <rect x="258" y="38" width="4" height="20" fill="#451a03" />
      <path d="M234,88 L290,48" stroke="#78350f" strokeWidth="1.5" />
      <circle cx="265" cy="164" r="18" fill="#f59e0b" stroke="#92400e" />
      <circle cx="265" cy="140" r="12" fill="#f59e0b" stroke="#92400e" />
      <circle cx="265" cy="162" r="5" fill="#451a03" />
      <rect x="262" y="106" width="6" height="30" fill="#78350f" />
      <Tx x={55} y={92} s={t("drum", "թմբուկ", "барабан")} lang={lang} size={7} fill="#475569" w={700} />
      <Tx x={55} y={152} s={t("triangle", "եռանկյունի", "треугольник")} lang={lang} size={7} fill="#475569" w={700} />
      <Tx x={55} y={210} s={t("xylophone", "քսիլոֆոն", "ксилофон")} lang={lang} size={7} fill="#475569" w={700} />
      <Tx x={156} y={84} s={t("duduk", "դուդուկ", "дудук")} lang={lang} size={7} fill="#475569" w={700} />
      <Tx x={154} y={158} s={t("trumpet", "շեփոր", "труба")} lang={lang} size={7} fill="#475569" w={700} />
      <Tx x={250} y={102} s={t("violin", "ջութակ", "скрипка")} lang={lang} size={7} fill="#475569" w={700} anchor="end" />
      <Tx x={265} y={198} s={t("guitar", "կիթառ", "гитара")} lang={lang} size={7} fill="#475569" w={700} />
    </g>
  ),
  parts: [
    P(92, 60, t("Percussion", "Հարվածայիններ", "Ударные"), t("You hit, shake or scrape them. Some, like a drum, keep the beat; others, like the xylophone, can play a tune.", "Դրանց հարվածում են, թափահարում կամ քերում։ Որոշները, ինչպես թմբուկը, պահում են զարկը, մյուսները, ինչպես քսիլոֆոնը, կարող են մեղեդի նվագել։", "По ним бьют, их трясут или трут. Одни, как барабан, держат ритм, другие, как ксилофон, могут сыграть мелодию.")),
    P(30, 190, t("Xylophone", "Քսիլոֆոն", "Ксилофон"), t("Short bars sound high and long bars sound low: the same rule as for strings and pipes.", "Կարճ թիթեղները հնչում են բարձր, երկարները՝ ցածր․ նույն կանոնը գործում է լարերի և խողովակների համար։", "Короткие пластинки звучат высоко, длинные — низко: то же правило действует для струн и трубок.")),
    P(196, 74, t("Duduk", "Դուդուկ", "Дудук"), t("An Armenian wind instrument made of apricot wood, with a wide double reed. Its soft voice is on UNESCO's list of the heritage of humanity.", "Ծիրանի փայտից պատրաստված հայկական փողային գործիք՝ լայն կրկնակի եղեգնով։ Նրա մեղմ ձայնը ՅՈՒՆԵՍԿՕ-ի մարդկության ժառանգության ցանկում է։", "Армянский духовой инструмент из абрикосового дерева с широкой двойной тростью. Его мягкий голос внесён в список наследия человечества ЮНЕСКО.")),
    P(194, 132, t("Wind", "Փողայիններ", "Духовые"), t("Your breath makes the air inside the tube vibrate. A longer tube gives a lower sound.", "Շունչդ թրթռացնում է խողովակի ներսի օդը։ Ավելի երկար խողովակն ավելի ցածր ձայն է տալիս։", "Твоё дыхание заставляет дрожать воздух внутри трубки. Чем длиннее трубка, тем ниже звук.")),
    P(296, 74, t("Strings", "Լարայիններ", "Струнные"), t("A string sounds when it is plucked, as on the guitar, or stroked with a bow, as on the violin. The wooden body makes the sound louder.", "Լարը հնչում է, երբ այն պոկում են, ինչպես կիթառի վրա, կամ աղեղով շփում, ինչպես ջութակի վրա։ Փայտե իրանն ուժեղացնում է ձայնը։", "Струна звучит, когда её щиплют, как на гитаре, или ведут по ней смычком, как на скрипке. Деревянный корпус делает звук громче.")),
  ],
};

/* ---------------- grade 2: Armenian folk instruments ---------------- */

const ROWS: Array<[number, Tr, string]> = [
  [10, t("wind", "փողային", "духовые"), "#0284c7"],
  [80, t("strings", "լարային", "струнные"), "#16a34a"],
  [158, t("percussion", "հարվածային", "ударные"), "#dc2626"],
];

const folkinst: Diagram = {
  title: t("Armenian folk instruments", "Հայկական ժողովրդական գործիքներ", "Армянские народные инструменты"),
  h: 232,
  draw: (lang) => (
    <g>
      {ROWS.map(([y, s, c]) => (
        <g key={y}>
          <line x1="6" x2="314" y1={y} y2={y} stroke={c} strokeWidth="1" opacity="0.35" />
          <Tx x={8} y={y + 9} s={s} lang={lang} size={7} fill={c} anchor="start" />
        </g>
      ))}
      {/* duduk: apricot wood with a wide flat reed */}
      <rect x="22" y="40" width="64" height="9" rx="4" fill="#b45309" />
      <path d="M86,41 l14,-3 v13 l-14,-3 Z" fill="#d6b26e" stroke="#a16207" strokeWidth="0.8" />
      {[0, 1, 2, 3, 4, 5, 6].map((k) => <circle key={k} cx={30 + k * 8} cy="44.5" r="1.7" fill="#451a03" />)}
      {/* zurna: a conical tube ending in a wide bell */}
      <path d="M122,42 L178,38 L196,30 V58 L178,50 L122,47 Z" fill="#ca8a04" stroke="#854d0e" strokeWidth="0.8" />
      <rect x="112" y="41" width="10" height="6" rx="1.5" fill="#78350f" />
      {[0, 1, 2, 3, 4].map((k) => <circle key={k} cx={132 + k * 9} cy="44.5" r="1.5" fill="#451a03" />)}
      {/* shvi: a small, thin flute */}
      <rect x="232" y="42" width="56" height="5" rx="2.5" fill="#fbbf24" stroke="#a16207" strokeWidth="0.6" />
      {[0, 1, 2, 3, 4, 5].map((k) => <circle key={k} cx={244 + k * 7} cy="44.5" r="1.1" fill="#78350f" />)}
      {/* kanon: a trapezoid box with many strings */}
      <path d="M18,96 H96 L80,140 H18 Z" fill="#fde68a" stroke="#92400e" />
      {Array.from({ length: 12 }, (_, k) => <line key={k} x1={22} x2={93 - k * 1.3 - (k * 1.5)} y1={100 + k * 3.4} y2={100 + k * 3.4} stroke="#78350f" strokeWidth="0.5" />)}
      <rect x="18" y="96" width="10" height="44" fill="#d97706" opacity="0.6" />
      {/* tar: a figure-of-eight body and a long neck */}
      <circle cx="140" cy="128" r="13" fill="#b45309" stroke="#78350f" />
      <circle cx="140" cy="108" r="9" fill="#b45309" stroke="#78350f" />
      <ellipse cx="140" cy="128" rx="8" ry="9" fill="#fef3c7" opacity="0.8" />
      <rect x="148" y="104" width="44" height="4" fill="#78350f" transform="rotate(-20 148 106)" />
      <rect x="188" y="88" width="10" height="6" rx="1" fill="#451a03" transform="rotate(-20 188 91)" />
      {/* kamancha: a small round body on a spike, held upright, with a bow */}
      <circle cx="262" cy="124" r="11" fill="#92400e" stroke="#451a03" />
      <circle cx="262" cy="124" r="6" fill="#fef3c7" />
      <rect x="260" y="90" width="4" height="24" fill="#451a03" />
      <path d="M262,135 v12" stroke="#64748b" strokeWidth="2" />
      <path d="M236,100 q30,4 52,30" fill="none" stroke="#78350f" strokeWidth="1.4" />
      {/* dhol: a double-sided drum with a thick and a thin stick */}
      <rect x="34" y="176" width="44" height="34" rx="3" fill="#dc2626" stroke="#7f1d1d" />
      <ellipse cx="34" cy="193" rx="5" ry="17" fill="#fde68a" stroke="#7f1d1d" />
      <ellipse cx="78" cy="193" rx="5" ry="17" fill="#fde68a" stroke="#7f1d1d" />
      <path d="M38,180 l36,26 M38,206 l36,-26" stroke="#fde68a" strokeWidth="1" />
      <path d="M86,176 l14,-10" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
      <path d="M24,176 l-10,-10" stroke="#78350f" strokeWidth="1.5" />
      {/* daf: a round frame with little jingles */}
      <circle cx="160" cy="194" r="20" fill="#fef3c7" stroke="#92400e" strokeWidth="4" />
      {Array.from({ length: 8 }, (_, k) => {
        const a = (k / 8) * 2 * Math.PI;
        return <circle key={k} cx={160 + Math.cos(a) * 20} cy={194 + Math.sin(a) * 20} r="2.6" fill="#facc15" stroke="#a16207" strokeWidth="0.6" />;
      })}
      {/* two duduks: the melody and the long held "dam" */}
      <rect x="228" y="182" width="52" height="7" rx="3" fill="#b45309" />
      <rect x="228" y="198" width="52" height="7" rx="3" fill="#b45309" opacity="0.7" />
      <path d="M284,185 q8,-6 16,0 q8,6 16,0" fill="none" stroke="#0284c7" strokeWidth="1.2" />
      <path d="M284,201 H314" stroke="#16a34a" strokeWidth="1.6" />
      <Tx x={60} y={66} s={t("duduk", "դուդուկ", "дудук")} lang={lang} size={7} fill="#475569" w={700} />
      <Tx x={158} y={70} s={t("zurna", "զուռնա", "зурна")} lang={lang} size={7} fill="#475569" w={700} />
      <Tx x={260} y={62} s={t("shvi", "շվի", "шви")} lang={lang} size={7} fill="#475569" w={700} />
      <Tx x={56} y={152} s={t("kanon", "քանոն", "канон")} lang={lang} size={7} fill="#475569" w={700} />
      <Tx x={140} y={152} s={t("tar", "թառ", "тар")} lang={lang} size={7} fill="#475569" w={700} />
      <Tx x={262} y={156} s={t("kamancha", "քամանչա", "кяманча")} lang={lang} size={7} fill="#475569" w={700} />
      <Tx x={56} y={226} s={t("dhol", "դհոլ", "дхол")} lang={lang} size={7} fill="#475569" w={700} />
      <Tx x={160} y={226} s={t("daf", "դափ", "даф")} lang={lang} size={7} fill="#475569" w={700} />
      <Tx x={254} y={220} s={t("melody and dam", "մեղեդի և դամ", "мелодия и дам")} lang={lang} size={7} fill="#475569" w={700} />
    </g>
  ),
  parts: [
    P(60, 28, t("Duduk", "Դուդուկ", "Дудук"), t("Made of apricot wood, with a wide double reed made from cane. Its soft, velvety voice suits sad and tender melodies.", "Պատրաստված է ծիրանի փայտից, եղեգից պատրաստված լայն կրկնակի լեզվակով։ Նրա մեղմ, թավշյա ձայնը սազում է տխուր և քնքուշ մեղեդիներին։", "Сделан из абрикосового дерева, с широкой двойной тростью из камыша. Его мягкий бархатный голос подходит грустным и нежным мелодиям.")),
    P(206, 44, t("Zurna", "Զուռնա", "Зурна"), t("Also a reed instrument, but its cone-shaped tube and wide bell make it loud and sharp. It is played outdoors, at weddings and festivals, usually with the dhol.", "Սա նույնպես լեզվակավոր գործիք է, բայց կոնաձև խողովակն ու լայն զանգակը նրան դարձնում են ուժեղ ու սուր։ Այն նվագում են բացօթյա, հարսանիքներին և տոնախմբություններին, սովորաբար դհոլի հետ։", "Тоже язычковый инструмент, но коническая трубка и широкий раструб делают его громким и резким. На нём играют на улице, на свадьбах и праздниках, обычно вместе с дхолом.")),
    P(100, 118, t("Kanon", "Քանոն", "Канон"), t("A flat box with dozens of strings, played lying on the knees with picks on the fingers. Small levers under the strings let the player change a note by a tiny step.", "Տափակ արկղ՝ տասնյակ լարերով, որը նվագում են ծնկներին դրած՝ մատներին հագցրած մատնոցներով։ Լարերի տակ գտնվող փոքր լծակները թույլ են տալիս նոտան փոխել շատ փոքր քայլով։", "Плоский ящик с десятками струн; на нём играют, положив на колени, с медиаторами на пальцах. Маленькие рычажки под струнами позволяют изменить ноту на крошечный шаг.")),
    P(170, 124, t("Tar", "Թառ", "Тар"), t("Its body is shaped like a figure of eight and covered with a thin membrane; it is played with a plectrum. Ashughs often accompanied their songs on the tar.", "Նրա իրանը ութի ձև ունի և ծածկված է բարակ թաղանթով․ այն նվագում են մեդիատորով։ Աշուղները հաճախ իրենց երգերին նվագակցում էին թառով։", "Его корпус похож на восьмёрку и обтянут тонкой перепонкой; играют медиатором. Ашуги часто аккомпанировали себе на таре.")),
    P(290, 116, t("Kamancha", "Քամանչա", "Кяманча"), t("Played with a bow, standing upright on a spike that rests on the knee. To reach another string the player turns the instrument itself, not only the bow.", "Նվագում են աղեղով՝ ուղղահայաց պահած, ծնկին հենված ձողիկի վրա։ Այլ լարի հասնելու համար նվագողը պտտում է հենց գործիքը, ոչ միայն աղեղը։", "На ней играют смычком, держа вертикально на шпиле, опирающемся на колено. Чтобы перейти на другую струну, музыкант поворачивает сам инструмент, а не только смычок.")),
    P(100, 196, t("Dhol", "Դհոլ", "Дхол"), t("A drum with two skins, played with a thick stick in one hand and a thin one in the other: deep booms and light taps together.", "Երկու թաղանթով թմբուկ, որը նվագում են մի ձեռքում հաստ, մյուսում՝ բարակ փայտով․ միասին հնչում են խուլ զարկեր և թեթև թխկոցներ։", "Барабан с двумя мембранами; играют толстой палочкой в одной руке и тонкой в другой: глухие удары и лёгкое постукивание вместе.")),
  ],
};

/* ---------------- grade 3: musical forms ---------------- */

const PART_C: Record<string, string> = { A: "#4f46e5", B: "#0d9488", C: "#d97706" };
const FORMS: Array<[Tr, string[], Tr[] | null]> = [
  [t("One-part", "Միամաս", "Одночастная"), ["A"], null],
  [t("Two-part", "Երկմաս", "Двухчастная"), ["A", "B"], null],
  [t("Three-part", "Եռամաս", "Трёхчастная"), ["A", "B", "A"], null],
  [t("Rondo", "Ռոնդո", "Рондо"), ["A", "B", "A", "C", "A"], null],
  [t("Song", "Երգ", "Песня"), ["A", "B", "A", "B"], [t("verse", "տուն", "куплет"), t("chorus", "կրկներգ", "припев"), t("verse", "տուն", "куплет"), t("chorus", "կրկներգ", "припев")]],
];

const forms: Diagram = {
  title: t("What parts a piece is made of", "Ինչ մասերից է կազմված ստեղծագործությունը", "Из каких частей состоит пьеса"),
  h: 200,
  draw: (lang) => (
    <g>
      {FORMS.map(([name, parts, words], r) => {
        const y = 8 + r * 38;
        const w = 200 / 5;
        return (
          <g key={r}>
            <Tx x={8} y={y + 18} s={name} lang={lang} size={8} anchor="start" fill="#334155" />
            {parts.map((ch, k) => (
              <g key={k}>
                <rect x={92 + k * w} y={y} width={w - 4} height="28" rx="6" fill={PART_C[ch]} opacity={k > 0 && parts.indexOf(ch) < k ? 0.6 : 0.95} />
                <text x={92 + k * w + (w - 4) / 2} y={y + (words ? 14 : 19)} textAnchor="middle" fontSize="13" fontWeight="900" fill="#fff">{ch}</text>
                {words ? <Tx x={92 + k * w + (w - 4) / 2} y={y + 24} s={words[k]} lang={lang} size={6.5} fill="#fff" /> : null}
                {k > 0 && parts.indexOf(ch) < k ? <path d={`M${92 + k * w + 4},${y - 2} q${-((k - parts.indexOf(ch)) * w) / 2},-7 ${-(k - parts.indexOf(ch)) * w + 8},0`} fill="none" stroke={PART_C[ch]} strokeWidth="1" strokeDasharray="2 2" /> : null}
              </g>
            ))}
          </g>
        );
      })}
    </g>
  ),
  parts: [
    P(306, 22, t("One idea", "Մեկ միտք", "Одна мысль"), t("A short piece can be one part from start to finish, like a little song with a single tune.", "Կարճ ստեղծագործությունը կարող է սկզբից մինչև վերջ մեկ մաս լինել, ինչպես մեկ մեղեդիով փոքրիկ երգը։", "Короткая пьеса может от начала до конца состоять из одной части, как песенка с одним напевом.")),
    P(306, 60, t("Contrast", "Հակադրություն", "Контраст"), t("The second part brings something new: a different tune, mood or speed. New parts get new letters.", "Երկրորդ մասը նոր բան է բերում՝ այլ մեղեդի, տրամադրություն կամ արագություն։ Նոր մասերը նոր տառեր են ստանում։", "Вторая часть приносит что-то новое: другую мелодию, настроение или скорость. Новые части получают новые буквы.")),
    P(306, 98, t("Coming back", "Վերադարձ", "Возвращение"), t("When A returns at the end it feels like coming home. The dashed arcs show a part that repeats.", "Երբ վերջում A-ն վերադառնում է, թվում է, թե տուն ես վերադառնում։ Կետագծային աղեղները ցույց են տալիս կրկնվող մասը։", "Когда в конце возвращается A, кажется, что ты вернулся домой. Пунктирные дуги показывают повторяющуюся часть.")),
    P(306, 136, t("Round and round", "Շուրջ ու շուրջ", "По кругу"), t("Rondo means \"round\": the main tune keeps coming back between new episodes, like a refrain.", "Ռոնդո նշանակում է «շրջան»․ գլխավոր մեղեդին անընդհատ վերադառնում է նոր դրվագների միջև, ինչպես կրկներգը։", "Рондо значит «круг»: главная тема снова и снова возвращается между новыми эпизодами, как рефрен.")),
    P(306, 174, t("Verse and chorus", "Տուն և կրկներգ", "Куплет и припев"), t("In a song the words of each verse change, but the chorus comes back with the same words and tune.", "Երգում ամեն տան բառերը փոխվում են, իսկ կրկներգը վերադառնում է նույն բառերով և մեղեդիով։", "В песне слова каждого куплета меняются, а припев возвращается с теми же словами и мелодией.")),
  ],
};

/* ---------------- grade 3: one theme in five outfits ---------------- */

const THEME = [0, 0, 4, 4, 5, 5, 4];
const VARIA: Array<[Tr, string, (k: number) => Array<[number, number, number]>]> = [
  [t("Theme", "Թեմա", "Тема"), "#4f46e5", () => THEME.map((d, i) => [i, d, 3.4])],
  [t("Faster, with|extra notes", "Ավելի արագ,|լրացուցիչ նոտաներով", "Быстрее,|с украшениями"), "#db2777", () => THEME.flatMap((d, i) => (i < 6 ? [[i, d, 3.4], [i + 0.5, (d + THEME[i + 1]) / 2 + (d === THEME[i + 1] ? 1 : 0), 2.2]] : [[i, d, 3.4]]) as Array<[number, number, number]>)],
  [t("Minor", "Մինոր", "Минор"), "#0369a1", () => THEME.map((d, i) => [i, d === 5 ? 4.5 : d, 3.4])],
  [t("New rhythm", "Նոր ռիթմ", "Новый ритм"), "#059669", () => THEME.map((d, i) => [i + (i % 2 ? 0.45 : 0), d, 3.4])],
  [t("Another instrument,|louder", "Այլ գործիք,|ավելի ուժեղ", "Другой инструмент,|громче"), "#d97706", () => THEME.map((d, i) => [i, d, 5])],
];

const varia: Diagram = {
  title: t("One theme, five outfits", "Մեկ թեմա՝ հինգ զգեստով", "Одна тема в пяти нарядах"),
  h: 214,
  draw: (lang) => (
    <g>
      {VARIA.map(([name, c, pts], r) => {
        const y0 = 8 + r * 41;
        const X = (k: number) => 118 + k * 23;
        const Y = (d: number) => y0 + 32 - d * 5;
        const ps = pts(r);
        return (
          <g key={r}>
            <rect x="4" y={y0} width="312" height="37" rx="7" fill={c} opacity="0.07" />
            <Tx x={10} y={y0 + (L(name, lang).includes("|") ? 14 : 21)} s={name} lang={lang} size={7} anchor="start" fill={c} />
            <polyline points={ps.map(([k, d]) => `${X(k)},${Y(d)}`).join(" ")} fill="none" stroke={c} strokeWidth={r === 4 ? 2.4 : 1.4} opacity="0.6" />
            {ps.map(([k, d, rr], i) => <circle key={i} cx={X(k)} cy={Y(d)} r={rr} fill={c} />)}
            {r === 2 ? <text x={X(4) - 8} y={Y(4.5) + 3} textAnchor="middle" fontSize="9" fontWeight="900" fill={c}>♭</text> : null}
            {r === 4 ? (
              <g>
                <path d="M290,24 h14 l6,-5 v14 l-6,-5 h-14 Z" transform={`translate(-26 ${y0 - 4})`} fill="#facc15" stroke="#a16207" strokeWidth="0.8" />
                <text x={288} y={y0 + 33} fontSize="11" fontWeight="900" fontStyle="italic" fill={c}>f</text>
              </g>
            ) : null}
          </g>
        );
      })}
    </g>
  ),
  parts: [
    P(304, 26, t("The theme", "Թեման", "Тема"), t("The first notes of \"Twinkle, Twinkle, Little Star\". Every variation keeps this outline, so you can always recognise it.", "«Փայլիր, փայլիր, փոքրիկ աստղ» երգի առաջին նոտաները։ Ամեն վարիացիա պահում է այս ուրվագիծը, ուստի այն միշտ կարելի է ճանաչել։", "Первые ноты песенки «Мерцай, мерцай, звёздочка». Каждая вариация сохраняет этот рисунок, поэтому тему всегда можно узнать.")),
    P(304, 67, t("Decorations", "Զարդարանքներ", "Украшения"), t("Small extra notes fill the gaps between the theme notes. The melody runs twice as fast, but the big notes are still there.", "Փոքր լրացուցիչ նոտաները լրացնում են թեմայի նոտաների միջև եղած բացերը։ Մեղեդին երկու անգամ ավելի արագ է վազում, բայց մեծ նոտաները դեռ տեղում են։", "Маленькие дополнительные ноты заполняют промежутки между нотами темы. Мелодия бежит вдвое быстрее, но главные ноты на месте.")),
    P(304, 108, t("Minor", "Մինոր", "Минор"), t("Lower one note by a semitone and the bright tune turns sad. Mozart's own set of twelve variations on this tune has one in minor.", "Մեկ նոտան կիսատոնով իջեցրու, և պայծառ մեղեդին տխուր կդառնա։ Այս մեղեդու վրա Մոցարտի տասներկու վարիացիաներից մեկը մինոր է։", "Понизь одну ноту на полтона, и светлая мелодия станет грустной. Среди двенадцати вариаций Моцарта на эту тему есть одна минорная.")),
    P(304, 149, t("Rhythm", "Ռիթմ", "Ритм"), t("The same notes, but long-short, long-short: now the theme skips instead of walking.", "Նույն նոտաները, բայց երկար-կարճ, երկար-կարճ․ հիմա թեման ոչ թե քայլում, այլ ցատկոտում է։", "Те же ноты, но долго-коротко, долго-коротко: теперь тема не шагает, а подпрыгивает.")),
    P(304, 190, t("Colour and power", "Գույն և ուժ", "Тембр и сила"), t("Give the theme to the trumpet and play it forte (f, loud): the notes are the same, the character is new.", "Թեման տո՛ւր շեփորին և նվագի՛ր ֆորտե (f, ուժեղ)․ նոտաները նույնն են, բնավորությունը՝ նոր։", "Отдай тему трубе и сыграй форте (f, громко): ноты те же, а характер новый.")),
  ],
};

/* ---------------- grade 3: where the orchestra sits ---------------- */

const OCX = 160, OCY = 174;
const sector = (r1: number, r2: number, a1: number, a2: number) => {
  const pt = (r: number, a: number) => `${(OCX + r * Math.cos((a * Math.PI) / 180)).toFixed(1)},${(OCY + r * Math.sin((a * Math.PI) / 180)).toFixed(1)}`;
  return `M${pt(r1, a1)} L${pt(r2, a1)} A${r2},${r2} 0 0 1 ${pt(r2, a2)} L${pt(r1, a2)} A${r1},${r1} 0 0 0 ${pt(r1, a1)} Z`;
};
const mid = (r1: number, r2: number, a1: number, a2: number): [number, number] => {
  const r = (r1 + r2) / 2, a = (((a1 + a2) / 2) * Math.PI) / 180;
  return [OCX + r * Math.cos(a), OCY + r * Math.sin(a)];
};
const SEATS: Array<[number, number, number, number, string, Tr]> = [
  [24, 80, 180, 225, "#16a34a", t("1st|violins", "1-ին|ջութակներ", "1-е|скрипки")],
  [24, 80, 225, 270, "#22c55e", t("2nd|violins", "2-րդ|ջութակներ", "2-е|скрипки")],
  [24, 80, 270, 315, "#4ade80", t("violas", "ալտեր", "альты")],
  [24, 80, 315, 360, "#15803d", t("cellos", "թավջութակներ", "виолончели")],
  [82, 108, 318, 360, "#166534", t("double|basses", "կոնտրա-|բասներ", "контра-|басы")],
  [82, 108, 182, 222, "#a3e635", t("harp", "տավիղ", "арфа")],
  [82, 108, 232, 308, "#0284c7", t("woodwind", "փայտյա փողայիններ", "деревянные духовые")],
  [110, 132, 222, 318, "#d97706", t("brass", "պղնձյա փողայիններ", "медные духовые")],
  [134, 154, 240, 300, "#dc2626", t("percussion", "հարվածայիններ", "ударные")],
];

const orchestra: Diagram = {
  title: t("Where the orchestra sits", "Ինչպես է նստած նվագախումբը", "Как рассажен оркестр"),
  h: 196,
  draw: (lang) => (
    <g>
      {SEATS.map(([r1, r2, a1, a2, c, s], i) => {
        const [x, y] = mid(r1, r2, a1, a2);
        return (
          <g key={i}>
            <path d={sector(r1, r2, a1, a2)} fill={c} opacity="0.85" stroke="#fff" strokeWidth="1.2" />
            <Tx x={x} y={y + (L(s, lang).includes("|") ? -1 : 3)} s={s} lang={lang} size={i === 5 || i === 4 ? 6 : 7} fill="#fff" />
          </g>
        );
      })}
      <rect x={OCX - 9} y={OCY - 10} width="18" height="12" rx="2" fill="#334155" />
      <circle cx={OCX} cy={OCY - 16} r="5" fill={SKIN} stroke={SKIN_LINE} />
      <path d={`M${OCX + 4},${OCY - 12} l12,-12`} stroke="#1e293b" strokeWidth="1.2" />
      <Tx x={OCX} y={OCY + 17} s={t("conductor · audience below", "դիրիժոր · ներքևում՝ հանդիսատեսը", "дирижёр · внизу — зрители")} lang={lang} size={6.5} fill="#64748b" />
    </g>
  ),
  parts: [
    P(101, 133, t("Strings in front", "Լարայինները՝ առջևում", "Струнные впереди"), t("The largest section, often more than half the players, sits closest to the audience. The first violins usually play the main melody.", "Ամենամեծ խումբը, հաճախ նվագողների կեսից ավելին, նստած է հանդիսատեսին ամենամոտ։ Առաջին ջութակները սովորաբար նվագում են գլխավոր մեղեդին։", "Самая большая группа, часто больше половины музыкантов, сидит ближе всех к зрителям. Первые скрипки обычно ведут главную мелодию.")),
    P(207, 92, t("Woodwind", "Փայտյա փողայիններ", "Деревянные духовые"), t("Flutes and oboes in the front row, clarinets and bassoons behind them, right in the middle where everyone can hear their solos.", "Ֆլեյտաներն ու հոբոյներն առաջին շարքում են, կլառնետներն ու ֆագոտները՝ նրանց հետևում, հենց մեջտեղում, որտեղ բոլորը լսում են նրանց մեներգերը։", "Флейты и гобои в первом ряду, кларнеты и фаготы за ними, прямо в середине, где всем слышны их соло.")),
    P(238, 81, t("Brass", "Պղնձյա փողայիններ", "Медные духовые"), t("Horns, trumpets, trombones and the tuba sit further back: they are so loud that from the front they would cover everyone else.", "Վալտորնաները, շեփորները, տրոմբոններն ու տուբան նստած են ավելի հետևում․ նրանք այնքան ուժեղ են, որ առջևից կծածկեին մնացած բոլորին։", "Валторны, трубы, тромбоны и туба сидят дальше: они так громки, что спереди заглушили бы всех остальных.")),
    P(209, 39, t("Percussion", "Հարվածայիններ", "Ударные"), t("At the very back: timpani, drums, cymbals and the triangle. One timpanist can make the whole hall shake.", "Ամենահետևում՝ տիմպաններ, թմբուկներ, ծնծղաներ և եռանկյունի։ Մեկ տիմպանահար կարող է ցնցել ամբողջ դահլիճը։", "В самом конце: литавры, барабаны, тарелки и треугольник. Один литаврист может заставить дрожать весь зал.")),
    P(OCX + 18, OCY - 6, t("Conductor", "Դիրիժոր", "Дирижёр"), t("Faces the players, shows the beat with the baton and brings each section in at the right moment. Every player can see them.", "Դեմքով դեպի նվագողներն է, փայտիկով ցույց է տալիս զարկը և յուրաքանչյուր խմբին ճիշտ պահին մուտք է տալիս։ Ամեն նվագող տեսնում է նրան։", "Стоит лицом к музыкантам, показывает долю палочкой и вовремя вводит каждую группу. Его видит каждый музыкант.")),
  ],
};

/* ---------------- grade 3: how high each voice sings ---------------- */

const VX = (m: number) => 72 + (m - 40) * 5.3;
const VOICES: Array<[Tr, number, number, string]> = [
  [t("soprano", "սոպրանո", "сопрано"), 60, 84, "#db2777"],
  [t("alto", "ալտ", "альт"), 53, 77, "#f472b6"],
  [t("children", "երեխաներ", "дети"), 60, 74, "#f59e0b"],
  [t("tenor", "տենոր", "тенор"), 48, 72, "#2563eb"],
  [t("bass", "բաս", "бас"), 40, 64, "#1e3a8a"],
];

const voices: Diagram = {
  title: t("How high each voice sings", "Որքան բարձր է երգում յուրաքանչյուր ձայն", "Как высоко поёт каждый голос"),
  h: 196,
  draw: (lang) => (
    <g>
      <line x1={VX(60)} x2={VX(60)} y1="6" y2="164" stroke="#64748b" strokeDasharray="3 3" />
      {VOICES.map(([name, lo, hi, c], r) => {
        const y = 14 + r * 28;
        return (
          <g key={r}>
            <Tx x={8} y={y + 4} s={name} lang={lang} size={8} anchor="start" fill={c} />
            <rect x={VX(lo)} y={y - 7} width={VX(hi) - VX(lo)} height="14" rx="7" fill={c} opacity="0.9" />
          </g>
        );
      })}
      {Array.from({ length: 45 }, (_, k) => 40 + k).filter((m) => ![1, 3, 6, 8, 10].includes(m % 12)).map((m, wi) => (
        <rect key={m} x={VX(40) - 4.5 + wi * (233.2 / 26)} y="168" width={233.2 / 26} height="16" fill={m === 60 ? "#e2e8f0" : "#fff"} stroke="#94a3b8" strokeWidth="0.6" />
      ))}
      {Array.from({ length: 45 }, (_, k) => 40 + k).filter((m) => [1, 3, 6, 8, 10].includes(m % 12)).map((m) => (
        <rect key={m} x={VX(m) - 2.6} y="168" width="5.2" height="9.5" fill="#334155" />
      ))}
      {[48, 60, 72, 84].map((m) => <text key={m} x={VX(m)} y="194" textAnchor="middle" fontSize="7" fontWeight="800" fill="#475569">{`C${m / 12 - 1}`}</text>)}
    </g>
  ),
  parts: [
    P(VX(80), 14, t("Soprano", "Սոպրանո", "Сопрано"), t("The highest voice, sung by women and girls. It usually carries the melody in a choir.", "Ամենաբարձր ձայնը, որով երգում են կանայք և աղջիկները։ Երգչախմբում այն սովորաբար տանում է մեղեդին։", "Самый высокий голос, им поют женщины и девочки. В хоре он обычно ведёт мелодию.")),
    P(VX(53) - 10, 42, t("Alto", "Ալտ", "Альт"), t("The lower women's voice: warm and full. Altos often sing a second line below the sopranos.", "Կանացի ավելի ցածր ձայնը՝ ջերմ և լեցուն։ Ալտերը հաճախ երգում են սոպրանոներից ցածր երկրորդ ձայնը։", "Низкий женский голос, тёплый и насыщенный. Альты часто поют второй голос ниже сопрано.")),
    P(VX(76), 70, t("Children", "Երեխաներ", "Дети"), t("Children's voices sit in the same place as sopranos and altos, but cover a smaller range. When boys' voices break, they drop about an octave.", "Երեխաների ձայները գտնվում են սոպրանոների և ալտերի տեղում, բայց ավելի նեղ ընդգրկույթ ունեն։ Երբ տղաների ձայնը կոտրվում է, այն իջնում է մոտ մեկ օկտավա։", "Детские голоса лежат там же, где сопрано и альты, но охватывают меньший диапазон. Когда голос у мальчиков ломается, он опускается примерно на октаву.")),
    P(VX(46), 98, t("Tenor", "Տենոր", "Тенор"), t("The high men's voice. Many opera heroes are tenors.", "Տղամարդու բարձր ձայնը։ Օպերայի շատ հերոսներ տենորներ են։", "Высокий мужской голос. Многие оперные герои — теноры.")),
    P(VX(68), 126, t("Bass", "Բաս", "Бас"), t("The lowest voice: it gives the choir its foundation, like the bottom notes of a piano.", "Ամենացածր ձայնը․ այն երգչախմբին հիմք է տալիս, ինչպես դաշնամուրի ամենացածր նոտաները։", "Самый низкий голос: он даёт хору опору, как нижние ноты рояля.")),
    P(VX(60) + 10, 160, t("Middle C", "Առաջին օկտավայի դո", "До первой октавы"), t("The dashed line is middle C, in the middle of the piano. Every voice can sing it, though for basses it is high and for sopranos low.", "Կետագիծն առաջին օկտավայի դո-ն է՝ դաշնամուրի մեջտեղում։ Ամեն ձայն կարող է այն երգել, թեև բասերի համար այն բարձր է, իսկ սոպրանոների համար՝ ցածր։", "Пунктир — до первой октавы, середина рояля. Её может спеть любой голос, хотя для басов она высокая, а для сопрано низкая.")),
  ],
};

/* ---------------- grade 3: three Armenian dances ---------------- */

const Dancer = ({ x, y, c, s = 1, arms }: { x: number; y: number; c: string; s?: number; arms?: string }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <circle cx="0" cy="-30" r="6" fill={SKIN} stroke={SKIN_LINE} strokeWidth="0.8" />
    <path d="M-6,-34 q6,-6 12,0" fill="#1f2937" />
    <path d="M-7,-22 h14 l3,22 h-20 Z" fill={c} />
    <rect x="-6" y="-1" width="4.5" height="17" rx="2" fill="#1f2937" />
    <rect x="1.5" y="-1" width="4.5" height="17" rx="2" fill="#1f2937" />
    {arms ? <path d={arms} fill="none" stroke={c} strokeWidth="3.5" strokeLinecap="round" /> : null}
  </g>
);

const dances: Diagram = {
  title: t("Three Armenian dances", "Երեք հայկական պար", "Три армянских танца"),
  h: 214,
  draw: (lang) => (
    <g>
      <rect x="4" y="4" width="312" height="92" rx="8" fill="#fef2f2" />
      <Tx x={12} y={16} s={t("Kochari: shoulder to shoulder", "Քոչարի՝ ուս ուսի", "Кочари: плечом к плечу")} lang={lang} size={7.5} anchor="start" fill="#b91c1c" />
      {[0, 1, 2, 3, 4, 5].map((k) => <Dancer key={k} x={70 + k * 36} y={72} c={k % 2 ? "#1f2937" : "#b91c1c"} arms={k < 5 ? "M6,-20 L30,-21" : undefined} />)}
      <path d="M44,40 q-8,-10 -2,-18" stroke="#facc15" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M58,86 l8,4 m6,-4 l8,4" stroke="#b91c1c" strokeWidth="1.5" />
      <path d="M270,90 h30 m-6,-4 l6,4 l-6,4" stroke="#64748b" strokeWidth="1.2" fill="none" />
      <rect x="4" y="102" width="152" height="108" rx="8" fill="#eff6ff" />
      <Tx x={12} y={114} s={t("Berd: the fortress", "Բերդ", "Берд: крепость")} lang={lang} size={7.5} anchor="start" fill="#1d4ed8" />
      {[0, 1, 2].map((k) => <Dancer key={k} x={50 + k * 30} y={186} c="#1e3a8a" arms="M6,-20 L24,-20" />)}
      {[0, 1].map((k) => <Dancer key={k} x={65 + k * 30} y={146} c="#2563eb" s={0.9} arms="M6,-20 L27,-20" />)}
      <rect x="164" y="102" width="152" height="108" rx="8" fill="#f0fdf4" />
      <Tx x={172} y={114} s={t("Yarkhushta: clap palms", "Յարխուշտա՝ ափ ափի", "Ярхушта: удар ладонями")} lang={lang} size={7.5} anchor="start" fill="#15803d" />
      <Dancer x={212} y={186} c="#166534" arms="M6,-20 L22,-36" />
      <Dancer x={268} y={186} c="#15803d" arms="M-6,-20 L-22,-36" />
      {[0, 1, 2, 3].map((k) => { const a = (k / 4) * Math.PI * 2 - Math.PI / 4; return <path key={k} d={`M${240 + Math.cos(a) * 6},${134 + Math.sin(a) * 6} l${Math.cos(a) * 6},${Math.sin(a) * 6}`} stroke="#f59e0b" strokeWidth="1.5" />; })}
    </g>
  ),
  parts: [
    P(28, 52, t("The leader", "Պարագլուխը", "Ведущий"), t("The first dancer in the line, the paraglukh, waves a handkerchief and calls out when to change the step.", "Շարքի առաջին պարողը՝ պարագլուխը, թափահարում է թաշկինակը և ազդարարում, թե երբ փոխել քայլը։", "Первый танцор в цепи, параглух, машет платком и подаёт знак, когда менять шаг.")),
    P(160, 40, t("One body", "Մեկ մարմին", "Одно тело"), t("Hands on the neighbours' shoulders, the whole line stamps and bends together, as if it were one strong body.", "Ձեռքերը հարևանների ուսերին, ամբողջ շարքը միասին է դոփում ու թեքվում, կարծես մեկ ուժեղ մարմին լինի։", "Руки на плечах соседей, вся цепь вместе топает и наклоняется, словно одно сильное тело.")),
    P(140, 130, t("A living fortress", "Կենդանի բերդ", "Живая крепость"), t("In berd some dancers climb onto the shoulders of others, building a tower. The dance remembers the stone fortresses that protected villages.", "Բերդ պարում որոշ պարողներ բարձրանում են ուրիշների ուսերին և աշտարակ կառուցում։ Պարը հիշեցնում է գյուղերը պաշտպանող քարե բերդերը։", "В берде одни танцоры встают на плечи другим и строят башню. Танец напоминает о каменных крепостях, защищавших сёла.")),
    P(240, 150, t("Palm to palm", "Ափ ափի", "Ладонь к ладони"), t("Yarkhushta from Sasun is a warrior's dance: partners rush towards each other and strike their palms together with a loud clap.", "Սասունից եկած յարխուշտան ռազմական պար է․ զուգընկերները վազում են իրար ընդառաջ և ափերը զարկում իրար բարձր ծափով։", "Ярхушта из Сасуна — воинский танец: партнёры бросаются навстречу друг другу и с громким хлопком ударяют ладонями.")),
  ],
};

/* ---------------- grade 3: Peter and the Wolf ---------------- */

const PW: Array<[Tr, Tr, string]> = [
  [t("Peter", "Պետյա", "Петя"), t("strings", "լարայիններ", "струнные"), "#16a34a"],
  [t("Bird", "Թռչնակ", "Птичка"), t("flute", "ֆլեյտա", "флейта"), "#0284c7"],
  [t("Duck", "Բադ", "Утка"), t("oboe", "հոբոյ", "гобой"), "#ca8a04"],
  [t("Cat", "Կատու", "Кошка"), t("clarinet", "կլառնետ", "кларнет"), "#7c3aed"],
  [t("Grandfather", "Պապիկ", "Дедушка"), t("bassoon", "ֆագոտ", "фагот"), "#92400e"],
  [t("Wolf", "Գայլ", "Волк"), t("3 horns", "3 վալտորնա", "3 валторны"), "#475569"],
  [t("Hunters", "Որսորդներ", "Охотники"), t("timpani, drum", "տիմպան, թմբուկ", "литавры, барабан"), "#dc2626"],
];

const PWFace = ({ k, x, y }: { k: number; x: number; y: number }) => {
  switch (k) {
    case 0: return <g transform={`translate(${x} ${y})`}><circle r="14" fill={SKIN} stroke={SKIN_LINE} /><path d="M-14,-4 q2,-14 14,-14 q12,0 14,12 q-8,-6 -14,-2 q-6,-4 -14,4 Z" fill="#a16207" /><circle cx="-5" cy="1" r="1.8" fill="#1e293b" /><circle cx="5" cy="1" r="1.8" fill="#1e293b" /><path d="M-5,7 q5,4 10,0" stroke="#be123c" strokeWidth="1.4" fill="none" /></g>;
    case 1: return <g transform={`translate(${x} ${y})`}><ellipse rx="12" ry="9" fill="#38bdf8" /><circle cx="9" cy="-6" r="6" fill="#38bdf8" /><path d="M14,-6 l6,1 l-6,2 Z" fill="#f59e0b" /><circle cx="10" cy="-7" r="1.3" fill="#1e293b" /><path d="M-4,-4 q-8,-10 -14,-4 q6,2 8,8 Z" fill="#0284c7" /></g>;
    case 2: return <g transform={`translate(${x} ${y})`}><ellipse cy="4" rx="14" ry="8" fill="#fff" stroke="#ca8a04" /><circle cx="8" cy="-7" r="6" fill="#fff" stroke="#ca8a04" /><path d="M13,-7 l8,1 l-8,3 Z" fill="#f97316" /><circle cx="9" cy="-8" r="1.3" fill="#1e293b" /><path d="M-18,10 q18,8 34,0" stroke="#38bdf8" strokeWidth="2" fill="none" /></g>;
    case 3: return <g transform={`translate(${x} ${y})`}><circle r="12" fill="#9ca3af" /><path d="M-11,-5 l2,-12 l7,7 M11,-5 l-2,-12 l-7,7" fill="#9ca3af" /><ellipse cx="-4.5" cy="-1" rx="2" ry="3" fill="#a3e635" /><ellipse cx="4.5" cy="-1" rx="2" ry="3" fill="#a3e635" /><path d="M-2,5 l2,2 l2,-2 M-12,5 h7 M12,5 h-7" stroke="#334155" strokeWidth="0.8" fill="none" /></g>;
    case 4: return <g transform={`translate(${x} ${y})`}><circle r="13" fill={SKIN} stroke={SKIN_LINE} /><path d="M-10,4 q10,20 20,0 q-10,6 -20,0 Z" fill="#e5e7eb" stroke="#9ca3af" /><path d="M-7,-3 h5 M2,-3 h5" stroke="#1e293b" strokeWidth="1.6" /><path d="M-13,-4 q13,-16 26,0" fill="#d1d5db" /></g>;
    case 5: return <g transform={`translate(${x} ${y})`}><path d="M-12,-8 l3,-12 l7,8 h4 l7,-8 l3,12 q4,10 -12,22 q-16,-12 -12,-22 Z" fill="#64748b" /><circle cx="-5" cy="-3" r="1.8" fill="#facc15" /><circle cx="5" cy="-3" r="1.8" fill="#facc15" /><path d="M-3,9 l3,3 l3,-3" fill="#1e293b" /></g>;
    default: return <g transform={`translate(${x} ${y})`}><circle cy="2" r="11" fill={SKIN} stroke={SKIN_LINE} /><path d="M-15,-5 h30 l-5,-10 h-20 Z" fill="#166534" /><path d="M12,4 L26,-16" stroke="#78350f" strokeWidth="2.5" /><circle cx="-4" cy="2" r="1.5" fill="#1e293b" /><circle cx="4" cy="2" r="1.5" fill="#1e293b" /></g>;
  }
};

const peterwolf: Diagram = {
  title: t("Peter and the Wolf: who plays whom", "«Պետյան և գայլը»․ ով ում է նվագում", "«Петя и волк»: кто кого играет"),
  h: 214,
  draw: (lang) => (
    <g>
      {PW.map(([who, inst, c], k) => {
        const row = k < 4 ? 0 : 1;
        const col = row ? k - 4 : k;
        const cx = row ? 60 + col * 100 : 42 + col * 79;
        const cy = 10 + row * 104;
        return (
          <g key={k}>
            <rect x={cx - 37} y={cy} width="74" height="96" rx="9" fill={c} opacity="0.1" />
            <PWFace k={k} x={cx} y={cy + 30} />
            <Tx x={cx} y={cy + 62} s={who} lang={lang} size={8} fill="#1e1b4b" />
            <rect x={cx - 32} y={cy + 70} width="64" height="18" rx="9" fill={c} />
            <Tx x={cx} y={cy + 82} s={inst} lang={lang} size={6.5} fill="#fff" />
          </g>
        );
      })}
    </g>
  ),
  parts: [
    P(70, 16, t("Peter", "Պետյա", "Петя"), t("The whole string section plays Peter's cheerful, brave marching tune.", "Ամբողջ լարային խումբը նվագում է Պետյայի զվարթ, խիզախ քայլերգային մեղեդին։", "Вся группа струнных играет бодрую, смелую маршевую тему Пети.")),
    P(149, 16, t("Bird", "Թռչնակ", "Птичка"), t("High, quick and twittering: the flute flutters around like wings.", "Բարձր, արագ և ճռվողող․ ֆլեյտան թռվռում է թևերի պես։", "Высоко, быстро, с щебетом: флейта порхает, как крылья.")),
    P(228, 16, t("Duck", "Բադ", "Утка"), t("The oboe's slightly nasal voice waddles slowly, almost quacking.", "Հոբոյի մի փոքր քթային ձայնը դանդաղ օրորվում է՝ համարյա կռկռալով։", "Чуть гнусавый голос гобоя медленно переваливается, почти крякая.")),
    P(306, 16, t("Cat", "Կատու", "Кошка"), t("Low, soft clarinet notes, short and careful, like paws creeping on the grass.", "Կլառնետի ցածր, մեղմ նոտաները՝ կարճ և զգույշ, ինչպես խոտի վրա սողացող թաթեր։", "Низкие мягкие ноты кларнета, короткие и осторожные, как лапки, крадущиеся по траве.")),
    P(94, 120, t("Grandfather", "Պապիկ", "Дедушка"), t("The low bassoon grumbles: \"Don't go into the meadow, Peter!\"", "Ցածր ֆագոտը փնթփնթում է․ «Մի՛ գնա մարգագետին, Պետյա՛»։", "Низкий фагот ворчит: «Не ходи на луг, Петя!»")),
    P(194, 120, t("Wolf", "Գայլ", "Волк"), t("Three French horns together play a dark, frightening chord theme.", "Երեք վալտորնա միասին նվագում են մռայլ, սարսափելի ակորդային թեմա։", "Три валторны вместе играют мрачную, страшную аккордовую тему.")),
    P(294, 120, t("Hunters", "Որսորդներ", "Охотники"), t("Woodwinds march in, and the timpani and bass drum fire the hunters' shots.", "Փայտյա փողայինները քայլերգով են մտնում, իսկ տիմպաններն ու մեծ թմբուկը կրակում են որսորդների փոխարեն։", "Входят деревянные духовые маршем, а литавры и большой барабан изображают выстрелы охотников.")),
  ],
};

/* ---------------- grade 4: a whole life in songs ---------------- */

const WHEEL: Array<[Tr, string]> = [
  [t("lullaby", "օրորո-|ցային", "колы-|бельная"), "#f9a8d4"],
  [t("dance", "պարերգ", "плясовая"), "#fb923c"],
  [t("work", "աշխա-|տանքային", "трудовая"), "#facc15"],
  [t("love", "սիրերգ", "любовная"), "#f87171"],
  [t("wedding", "հարսա-|նեկան", "свадебная"), "#c084fc"],
  [t("festive", "տոնա-|ծիսական", "обрядовая"), "#34d399"],
  [t("comic", "զավեշ-|տական", "шуточная"), "#38bdf8"],
  [t("wanderer", "պանդխտի", "песня|странника"), "#818cf8"],
  [t("lament", "ողբ", "плач"), "#94a3b8"],
];
const WX = 160, WY = 110;
const wedge = (r1: number, r2: number, a1: number, a2: number) => {
  const pt = (r: number, a: number) => `${(WX + r * Math.cos(a)).toFixed(1)},${(WY + r * Math.sin(a)).toFixed(1)}`;
  return `M${pt(r1, a1)} L${pt(r2, a1)} A${r2},${r2} 0 0 1 ${pt(r2, a2)} L${pt(r1, a2)} A${r1},${r1} 0 0 0 ${pt(r1, a1)} Z`;
};
const wAng = (k: number) => -Math.PI / 2 + (k * 2 * Math.PI) / WHEEL.length;
const wPt = (k: number, r: number): [number, number] => {
  const a = wAng(k + 0.5);
  return [WX + r * Math.cos(a), WY + r * Math.sin(a)];
};

const folkwheel: Diagram = {
  title: t("A whole life in songs", "Մի ամբողջ կյանք՝ երգերով", "Целая жизнь в песнях"),
  h: 220,
  draw: (lang) => (
    <g>
      {WHEEL.map(([s, c], k) => {
        const [x, y] = wPt(k, 70);
        return (
          <g key={k}>
            <path d={wedge(30, 102, wAng(k), wAng(k + 1))} fill={c} stroke="#fff" strokeWidth="2" />
            <Tx x={x} y={y + (L(s, lang).includes("|") ? -1 : 2.5)} s={s} lang={lang} size={7} fill="#1e1b4b" />
          </g>
        );
      })}
      <circle cx={WX} cy={WY} r="29" fill="#fff" />
      <Tx x={WX} y={WY - 3} s={t("one life,|many songs", "մեկ կյանք,|շատ երգեր", "одна жизнь,|много песен")} lang={lang} size={6.5} fill="#475569" />
      <path d={`M${WX + 112},${WY - 40} A118,118 0 0 1 ${WX + 112},${WY + 40}`} fill="none" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#mus-arr2)" />
      <defs>
        <marker id="mus-arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 Z" fill="#cbd5e1" />
        </marker>
      </defs>
    </g>
  ),
  parts: [
    P(...wPt(0, 96), t("Lullaby", "Օրորոցային", "Колыбельная"), t("The first songs a child hears: slow, rocking and quiet, often with \"nani-nani\" or \"oror\" repeated again and again.", "Առաջին երգերը, որ լսում է երեխան․ դանդաղ, օրորվող և հանգիստ, հաճախ «նանի-նանի» կամ «օրոր» բառերով, որոնք կրկնվում են նորից ու նորից։", "Первые песни, которые слышит ребёнок: медленные, укачивающие и тихие, часто с повторяющимся «нани-нани» или «орор».")),
    P(...wPt(2, 96), t("Work songs", "Աշխատանքային երգեր", "Трудовые песни"), t("The horovel was sung behind the plough to urge on the oxen; the rhythm of a work song keeps everyone moving together.", "Հորովելն երգում էին գութանի հետևից՝ եզներին քաջալերելու համար․ աշխատանքային երգի ռիթմն օգնում է բոլորին միասին շարժվել։", "Хоровел пели за плугом, подбадривая волов; ритм трудовой песни помогает всем двигаться вместе.")),
    P(...wPt(4, 96), t("Wedding songs", "Հարսանեկան երգեր", "Свадебные песни"), t("Songs for every step of a wedding: dressing the bride, greeting the groom, dancing at the feast.", "Երգեր հարսանիքի ամեն քայլի համար՝ հարսին հագցնելիս, փեսային դիմավորելիս, խնջույքին պարելիս։", "Песни для каждого шага свадьбы: когда одевают невесту, встречают жениха, танцуют на пиру.")),
    P(...wPt(5, 96), t("Festive and ritual", "Տոնածիսական", "Обрядовые"), t("Sung on feast days, like the vijak songs at the Ascension, when girls drew trinkets from a jug to tell fortunes.", "Երգվում էին տոներին, ինչպես վիճակի երգերը Համբարձման տոնին, երբ աղջիկները սափորից հանում էին զարդերը՝ բախտը գուշակելու համար։", "Их пели в праздники, как песни виджак на Вознесение, когда девушки гадали, вынимая украшения из кувшина.")),
    P(...wPt(7, 96), t("Wanderer's songs", "Պանդխտի երգեր", "Песни странника"), t("Sung by those far from home. In \"Krunk\" the wanderer begs a crane for news of his homeland.", "Երգում էին նրանք, ովքեր հեռու էին տնից։ «Կռունկ» երգում պանդուխտը կռունկից լուր է խնդրում հայրենիքից։", "Их пели те, кто был далеко от дома. В «Крунк» странник просит журавля принести весть с родины.")),
    P(WX + 120, WY, t("Around the wheel", "Անիվի շուրջը", "По кругу"), t("Read the wheel clockwise from the top: it follows a life from the cradle to old age.", "Կարդա՛ անիվը ժամացույցի սլաքի ուղղությամբ՝ վերևից․ այն հետևում է կյանքին՝ օրորոցից մինչև ծերություն։", "Читай круг по часовой стрелке сверху: он идёт за жизнью от колыбели до старости.")),
  ],
};

/* ---------------- grade 4: sacred music on the page ---------------- */

const manuscript: Diagram = {
  title: t("A page of sharakans", "Շարականների էջ", "Страница шараканов"),
  h: 214,
  draw: (lang) => (
    <g>
      <rect x="40" y="6" width="240" height="140" rx="4" fill="#fdf6e3" stroke="#d6b26e" />
      {/* a bird-shaped initial */}
      <g transform="translate(56 26)">
        <path d="M6,40 C0,24 8,6 24,6 C34,6 38,14 36,20 L44,18 L38,26 C38,40 26,50 12,48 Z" fill="#0f766e" />
        <circle cx="28" cy="13" r="2.4" fill="#fde68a" />
        <path d="M10,46 l-6,12 M18,48 l0,12" stroke="#b91c1c" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12,24 q8,8 18,4" stroke="#facc15" strokeWidth="2" fill="none" />
      </g>
      {/* red heading, then lines of words with khaz above */}
      <rect x="112" y="18" width="150" height="7" rx="2" fill="#b91c1c" opacity="0.85" />
      {[0, 1, 2, 3, 4, 5].map((r) => {
        const y = 44 + r * 17;
        const x0 = r < 3 ? 112 : 56;
        const words = r < 3 ? [30, 22, 36, 26] : [28, 40, 24, 34, 30, 34];
        let x = x0;
        return (
          <g key={r}>
            {words.map((w, k) => {
              const g = (
                <g key={k}>
                  <rect x={x} y={y} width={w} height="4.5" rx="1.5" fill="#57534e" opacity="0.75" />
                  <path d={["M0,0 q3,-5 6,0", "M0,-2 l4,3 l4,-3", "M0,0 h6 m-2,-3 l2,3", "M0,1 q2,-6 5,-2 q2,2 4,-2"][(r + k) % 4]} transform={`translate(${x + w / 2 - 4} ${y - 4})`} fill="none" stroke="#b91c1c" strokeWidth="1" />
                </g>
              );
              x += w + 6;
              return g;
            })}
          </g>
        );
      })}
      <path d="M268,130 l4,-8 l4,8 l-4,-3 Z" fill="#b91c1c" />
      {/* soloist melody over the choir's held dam */}
      <rect x="4" y="154" width="312" height="56" rx="8" fill="#f1f5f9" />
      <path d={`M44,178 ${[-12, 8, -16, 10, -8, 14, -10, 6, -12].map((d) => `q14,${d} 28,0`).join(" ")}`} fill="none" stroke="#4f46e5" strokeWidth="2" />
      <line x1="44" x2="300" y1="198" y2="198" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" />
      <Tx x={10} y={176} s={t("melody", "մեղեդի", "мелодия")} lang={lang} size={6.5} anchor="start" fill="#4f46e5" />
      <Tx x={10} y={200} s={t("dam", "դամ", "дам")} lang={lang} size={6.5} anchor="start" fill="#0d9488" />
    </g>
  ),
  parts: [
    P(62, 20, t("A bird for a letter", "Թռչուն՝ տառի փոխարեն", "Птица вместо буквы"), t("Armenian scribes often painted the first letter of a hymn as a bird or a beast. Such letters are called ornithomorphic: \"bird-shaped\".", "Հայ գրիչները հաճախ շարականի առաջին տառը նկարում էին թռչնի կամ գազանի տեսքով։ Այդպիսի տառերը կոչվում են թռչնագիր։", "Армянские писцы часто рисовали первую букву гимна в виде птицы или зверя. Такие буквы называют птицевидными.")),
    P(272, 20, t("Red ink", "Կարմիր թանաք", "Красные чернила"), t("Titles and instructions for the singers were written in red, so they stood out from the words that were sung.", "Վերնագրերն ու երգիչների համար ցուցումները գրում էին կարմիրով, որպեսզի դրանք առանձնանային երգվող բառերից։", "Заголовки и указания певцам писали красным, чтобы они выделялись среди слов, которые поют.")),
    P(276, 64, t("Khaz", "Խազեր", "Хазы"), t("Small signs above the words told the singer how the melody moved: up, down, longer, ornamented. Their exact meaning has been partly lost.", "Բառերի վերևի փոքր նշաններն երգչին ցույց էին տալիս, թե ինչպես է շարժվում մեղեդին՝ վեր, վար, երկար, զարդարված։ Դրանց ճշգրիտ իմաստը մասամբ մոռացվել է։", "Маленькие значки над словами показывали певцу, как движется мелодия: вверх, вниз, протяжно, с украшением. Их точный смысл отчасти утрачен.")),
    P(310, 178, t("Melody", "Մեղեդի", "Мелодия"), t("A soloist or the choir sings the sharakan in unison: one line, flowing and calm.", "Մեներգիչը կամ երգչախումբը միաձայն երգում է շարականը՝ մեկ սահուն, հանգիստ գիծ։", "Солист или хор поёт шаракан в унисон: одна плавная, спокойная линия.")),
    P(310, 198, t("Dam", "Դամ", "Дам"), t("Under the melody some singers hold one long, steady note, the dam, like the second duduk in a duet.", "Մեղեդու տակ որոշ երգիչներ պահում են մեկ երկար, կայուն նոտա՝ դամը, ինչպես զույգ դուդուկներից երկրորդը։", "Под мелодией некоторые певцы тянут одну долгую ровную ноту — дам, как второй дудук в дуэте.")),
  ],
};

/* ---------------- grade 4: the five positions of ballet ---------------- */

const Foot = ({ x, y, dir }: { x: number; y: number; dir: 1 | -1 }) => (
  <g transform={`translate(${x} ${y}) scale(${dir} 1)`}>
    <path d="M-11,0 C-11,-4 -2,-5 6,-4.5 C11,-4 13,-2 13,0 C13,2 11,4 6,4.5 C-2,5 -11,4 -11,0 Z" fill="#fbcfe8" stroke="#be185d" strokeWidth="0.9" />
  </g>
);
const POS: Array<Array<[number, number, 1 | -1]>> = [
  [[-12, 0, -1], [12, 0, 1]],
  [[-24, 0, -1], [24, 0, 1]],
  [[-6, -4, -1], [6, 4, 1]],
  [[0, -11, -1], [0, 11, 1]],
  [[0, -4.5, -1], [0, 4.5, 1]],
];

const positions: Diagram = {
  title: t("Ballet: positions, pointe shoes", "Բալետ․ դիրքեր, պուանտներ", "Балет: позиции и пуанты"),
  h: 204,
  draw: (lang) => (
    <g>
      {POS.map((feet, k) => (
        <g key={k}>
          <rect x={6 + k * 62} y="6" width="58" height="62" rx="8" fill="#fdf2f8" />
          <text x={35 + k * 62} y="20" textAnchor="middle" fontSize="9" fontWeight="900" fill="#be185d">{k + 1}</text>
          {feet.map(([dx, dy, d], i) => <Foot key={i} x={35 + k * 62 + dx * 0.85} y={44 + dy} dir={d} />)}
        </g>
      ))}
      {/* a pointe shoe, side view */}
      <path d="M24,150 C24,128 60,124 92,132 L118,138 C126,140 128,152 120,156 L34,160 C27,160 24,156 24,150 Z" fill="#fbcfe8" stroke="#be185d" />
      <rect x="114" y="136" width="9" height="20" rx="2" fill="#f9a8d4" stroke="#be185d" />
      <path d="M40,132 C34,110 50,96 52,84 M52,132 C60,112 74,104 80,92" fill="none" stroke="#f472b6" strokeWidth="2.5" />
      <path d="M30,160 L118,156" stroke="#9d174d" strokeWidth="2" />
      {/* a dancer en pointe */}
      <ellipse cx="236" cy="128" rx="46" ry="9" fill="#f9a8d4" opacity="0.8" />
      <path d="M230,96 h12 l2,30 h-16 Z" fill="#ec4899" />
      <circle cx="236" cy="86" r="8" fill={SKIN} stroke={SKIN_LINE} />
      <path d="M228,82 q8,-10 16,0" fill="#7c2d12" />
      <path d="M232,100 L206,78 M240,100 L266,78" stroke={SKIN} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M232,132 L230,196 M240,132 L248,170 L268,164" stroke={SKIN} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M228,192 l3,6 M268,160 l5,3" stroke="#be185d" strokeWidth="3" strokeLinecap="round" />
      <Tx x={70} y={178} s={t("pointe shoe", "պուանտ", "пуант")} lang={lang} size={7.5} fill="#9d174d" />
    </g>
  ),
  parts: [
    P(35, 66, t("First position", "Առաջին դիրք", "Первая позиция"), t("Heels together and toes turned out to the sides. Every ballet lesson starts here.", "Կրունկները միասին, ոտնաթաթերը շրջված դեպի կողքեր։ Բալետի ամեն դաս սկսվում է այստեղից։", "Пятки вместе, носки развёрнуты в стороны. С неё начинается каждый урок балета.")),
    P(97, 66, t("Second position", "Երկրորդ դիրք", "Вторая позиция"), t("Turned out like the first, but with the heels about a foot apart.", "Շրջված է առաջինի պես, բայց կրունկներն իրարից մոտ մեկ ոտնաթաթ հեռու են։", "Развёрнута, как первая, но пятки на расстоянии примерно одной стопы.")),
    P(221, 66, t("Fourth and fifth", "Չորրորդ և հինգերորդ", "Четвёртая и пятая"), t("One foot in front of the other: apart in the fourth, touching heel to toe in the fifth. A French dancing master, Pierre Beauchamp, set down the five positions more than 300 years ago.", "Մի ոտքը մյուսի առջև՝ չորրորդում իրարից հեռու, հինգերորդում՝ կրունկը մատներին հպված։ Ֆրանսիացի պարուսույց Պիեռ Բոշանը հինգ դիրքերը սահմանել է ավելի քան 300 տարի առաջ։", "Одна стопа перед другой: в четвёртой на расстоянии, в пятой пятка касается носка. Французский учитель танцев Пьер Бошан закрепил пять позиций более 300 лет назад.")),
    P(132, 146, t("Pointe shoe", "Պուանտ", "Пуант"), t("A hard, flat box at the tip lets a dancer stand on her toes. It is made of layers of fabric and glue, and a professional can wear out a pair in a single performance.", "Ծայրի կոշտ, տափակ «տուփը» պարուհուն թույլ է տալիս կանգնել մատների վրա։ Այն պատրաստված է կտորի և սոսնձի շերտերից, և պրոֆեսիոնալ պարուհին կարող է մեկ ներկայացման ընթացքում մաշել մի զույգ։", "Твёрдый плоский «пятачок» на конце позволяет балерине стоять на кончиках пальцев. Он сделан из слоёв ткани и клея, и профессионалка может износить пару за один спектакль.")),
    P(58, 92, t("Ribbons", "Ժապավեններ", "Ленты"), t("Every dancer sews the ribbons onto her own shoes and ties them around the ankle so the shoe cannot slip.", "Ամեն պարուհի ինքն է կարում ժապավեններն իր կոշիկներին և կապում կոճի շուրջը, որպեսզի կոշիկը չսահի։", "Каждая балерина сама пришивает ленты к своим туфлям и обвязывает их вокруг щиколотки, чтобы туфля не соскользнула.")),
    P(290, 128, t("Tutu", "Տուտու", "Пачка"), t("The short, stiff skirt standing out like a plate shows the dancer's legs and every step clearly.", "Կարճ, կոշտ, ափսեի պես դուրս ցցված կիսաշրջազգեստը պարզ ցույց է տալիս պարուհու ոտքերը և ամեն քայլը։", "Короткая жёсткая юбка, торчащая, как тарелка, позволяет ясно видеть ноги балерины и каждый шаг.")),
  ],
};

/* ---------------- grade 4: inside a concert hall ---------------- */

const hall: Diagram = {
  title: t("Inside a concert hall", "Համերգասրահի ներսում", "Внутри концертного зала"),
  h: 204,
  draw: (lang) => (
    <g>
      {/* walls, ceiling and floor */}
      <path d="M8,30 L312,14 V196 H8 Z" fill="#fffbeb" stroke="#d6b26e" />
      {[0, 1, 2, 3].map((k) => <path key={k} d={`M${70 + k * 58},${36 - k * 3} q24,10 48,-3`} fill="none" stroke="#a16207" strokeWidth="2.5" />)}
      {/* organ on the back wall of the stage */}
      {Array.from({ length: 9 }, (_, k) => <rect key={k} x={14 + k * 6} y={60 + Math.abs(4 - k) * 5} width="4.5" height={60 - Math.abs(4 - k) * 5} rx="1.5" fill="#cbd5e1" stroke="#64748b" strokeWidth="0.5" />)}
      {/* stage with the orchestra */}
      <rect x="8" y="140" width="112" height="56" fill="#b45309" />
      {Array.from({ length: 14 }, (_, k) => <circle key={k} cx={20 + (k % 7) * 13} cy={k < 7 ? 132 : 124} r="3.5" fill={k < 7 ? "#16a34a" : "#0284c7"} />)}
      <circle cx="112" cy="122" r="4" fill="#1e1b4b" />
      <path d="M112,126 v14 M112,128 l8,-8" stroke="#1e1b4b" strokeWidth="1.6" />
      {/* sloping stalls and a balcony */}
      <path d="M120,196 L120,176 L312,150 V196 Z" fill="#fecaca" />
      {Array.from({ length: 12 }, (_, k) => <circle key={k} cx={136 + k * 15} cy={168 - k * 2.05} r="3.2" fill="#7f1d1d" />)}
      <path d="M220,96 h92 v12 h-92 Z" fill="#fca5a5" stroke="#b91c1c" strokeWidth="0.8" />
      {Array.from({ length: 6 }, (_, k) => <circle key={k} cx={232 + k * 14} cy="91" r="3.2" fill="#7f1d1d" />)}
      {/* sound reaching every seat */}
      {[0, 1, 2].map((k) => <path key={k} d={`M${130 + k * 14},${110 - k * 6} q${18},${-14} ${10},${-34}`} fill="none" stroke="#7c3aed" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.7" />)}
      <path d="M130,118 Q210,96 300,140" fill="none" stroke="#7c3aed" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.7" />
      <path d="M126,60 Q170,30 240,40 Q280,48 296,86" fill="none" stroke="#7c3aed" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.7" />
      {/* a phone switched off */}
      <rect x="282" y="160" width="14" height="24" rx="3" fill="#1e293b" />
      <path d="M278,156 L300,188" stroke="#dc2626" strokeWidth="2.2" />
      <Tx x={64} y={188} s={t("stage", "բեմ", "сцена")} lang={lang} size={7.5} fill="#fff" />
      <Tx x={190} y={186} s={t("stalls", "պարտեր", "партер")} lang={lang} size={7.5} fill="#7f1d1d" />
      <Tx x={266} y={120} s={t("balcony", "օթյակ", "балкон")} lang={lang} size={7} fill="#b91c1c" />
    </g>
  ),
  parts: [
    P(44, 52, t("The organ", "Երգեհոն", "Орган"), t("Many big halls have a pipe organ built into the wall behind the stage. Some of its pipes are taller than a house.", "Շատ մեծ դահլիճներում բեմի հետևի պատի մեջ խողովակավոր երգեհոն է կառուցված։ Նրա որոշ խողովակներ տնից բարձր են։", "Во многих больших залах в стену за сценой встроен орган. Некоторые его трубы выше дома.")),
    P(112, 106, t("Conductor", "Դիրիժոր", "Дирижёр"), t("When the conductor lowers the baton and turns to the audience, the piece is over: that is the moment to clap.", "Երբ դիրիժորն իջեցնում է փայտիկը և շրջվում դեպի դահլիճ, ստեղծագործությունն ավարտված է․ հենց այդ պահին է պետք ծափահարել։", "Когда дирижёр опускает палочку и поворачивается к залу, пьеса закончилась: вот тогда и надо хлопать.")),
    P(186, 24, t("Reflectors", "Անդրադարձիչներ", "Отражатели"), t("Curved panels on the ceiling bounce the sound down, so even the last row hears every note without microphones.", "Առաստաղի կոր վահանակներն արտացոլում են ձայնը դեպի ներքև, ուստի նույնիսկ վերջին շարքը լսում է ամեն նոտա՝ առանց խոսափողների։", "Изогнутые панели на потолке отражают звук вниз, и даже последний ряд слышит каждую ноту без микрофонов.")),
    P(150, 148, t("Stalls", "Պարտեր", "Партер"), t("The floor slopes upwards, so each row can see over the heads of the row in front.", "Հատակը թեքված է դեպի վեր, որպեսզի ամեն շարք տեսնի առջևի շարքի գլուխների վրայով։", "Пол поднимается, чтобы каждый ряд видел поверх голов предыдущего.")),
    P(304, 152, t("Phone off", "Հեռախոսն անջատված", "Телефон выключен"), t("A single ringing phone can be heard by two thousand people in a quiet hall, so switch it off before the music starts.", "Հանգիստ դահլիճում մեկ զանգող հեռախոսը կարող են լսել երկու հազար մարդ, ուստի անջատի՛ր այն, մինչև երաժշտությունը սկսվի։", "В тихом зале один звонящий телефон услышат две тысячи человек, поэтому выключи его до начала музыки.")),
  ],
};

export const DIAGRAMS: Record<string, Diagram> = { singer, instgroups, folkinst, forms, varia, orchestra, voices, dances, peterwolf, folkwheel, manuscript, positions, hall };
