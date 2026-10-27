"use client";

import type { ArtLang } from "@/lib/art/spec";
import { Arrow } from "../kit";
import { L, t } from "../labels";
import { ease, scatter, Tag } from "./draw";
import type { Mech } from "./types";

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const T = (lang: ArtLang, en: string, hy: string, ru: string) => L(t(en, hy, ru), lang);

/** A point on a quadratic curve a → b with control c. */
const qpt = (a: number[], c: number[], b: number[], s: number) => [
  (1 - s) ** 2 * a[0] + 2 * (1 - s) * s * c[0] + s * s * b[0],
  (1 - s) ** 2 * a[1] + 2 * (1 - s) * s * c[1] + s * s * b[1],
];

/* ---------------- reflex arc ---------------- */

const SEG = [
  { a: [52, 168], c: [52, 168], b: [52, 168] },
  { a: [52, 168], c: [150, 30], b: [236, 78] },
  { a: [236, 78], c: [246, 96], b: [258, 108] },
  { a: [258, 108], c: [200, 175], b: [118, 128] },
];

const reflex: Mech = {
  title: t("A reflex arc: pulling the hand from something hot", "Ռեֆլեքսային աղեղ․ ձեռքը քաշել տաք առարկայից", "Рефлекторная дуга: отдёрнуть руку от горячего"),
  caps: [
    t("Receptors in the skin of the finger sense the heat and start a nerve impulse.", "Մատի մաշկի ընկալիչները զգում են տաքությունը և առաջացնում նյարդային ազդակ։", "Рецепторы кожи пальца чувствуют жар и запускают нервный импульс."),
    t("A sensory neuron carries the impulse to the spinal cord.", "Զգացող նեյրոնը ազդակը տանում է ողնուղեղ։", "Чувствительный нейрон несёт импульс в спинной мозг."),
    t("Inside the spinal cord an interneuron passes it straight to a motor neuron. The brain is not asked.", "Ողնուղեղում միջանկյալ նեյրոնը այն անմիջապես փոխանցում է շարժիչ նեյրոնին։ Գլխուղեղին չեն հարցնում։", "В спинном мозге вставочный нейрон сразу передаёт его двигательному нейрону. Головной мозг не спрашивают."),
    t("The motor neuron makes the arm muscle contract and the hand jerks away. The pain is felt a moment later, when a signal reaches the brain.", "Շարժիչ նեյրոնը ստիպում է բազկի մկանը կծկվել, և ձեռքը ցնցվելով հեռանում է։ Ցավը զգացվում է մի պահ անց, երբ ազդանշանը հասնում է գլխուղեղ։", "Двигательный нейрон заставляет мышцу руки сократиться, и рука отдёргивается. Боль чувствуется мгновением позже, когда сигнал дойдёт до головного мозга."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    const lift = i === 3 ? -18 * k : 0;
    const dot = qpt(SEG[i].a, SEG[i].c, SEG[i].b, p);
    const names = [
      T(lang, "receptor", "ընկալիչ", "рецептор"),
      T(lang, "sensory neuron", "զգացող նեյրոն", "чувствительный нейрон"),
      T(lang, "interneuron", "միջանկյալ նեյրոն", "вставочный нейрон"),
      T(lang, "motor neuron → muscle", "շարժիչ նեյրոն → մկան", "двигательный нейрон → мышца"),
    ];
    const path = (s: (typeof SEG)[number]) => `M${s.a[0]},${s.a[1]} Q${s.c[0]},${s.c[1]} ${s.b[0]},${s.b[1]}`;
    return (
      <g>
        <path d="M44,198 q6,-14 0,-22 q10,8 8,22 Z" fill="#f97316" />
        <rect x="40" y="198" width="16" height="10" fill="#94a3b8" />
        <g transform={`translate(0,${lift})`}>
          <path d="M60,165 L150,120 L160,132 L66,178 Z" fill="#fcd9b6" stroke="#c2410c" strokeWidth="1" />
          <circle cx="54" cy="170" r="12" fill="#fcd9b6" stroke="#c2410c" strokeWidth="1" />
        </g>
        <path d="M150,120 L175,60 L192,64 L162,132 Z" fill="#fcd9b6" stroke="#c2410c" strokeWidth="1" />
        <ellipse cx="118" cy={128 + lift / 2} rx={i === 3 ? 22 + 5 * k : 22} ry={i === 3 ? 8 + 4 * k : 8} fill="#f87171" opacity="0.85" transform={`rotate(-27 118 ${128 + lift / 2})`} />
        <circle cx="252" cy="92" r="34" fill="#e2e8f0" stroke="#64748b" />
        <path d="M232,78 q20,10 40,0 q-6,14 -6,28 q-14,-8 -28,0 q0,-14 -6,-28 Z" fill="#cbd5e1" />
        <Tag x={252} y={142} plain color="#475569">{T(lang, "spinal cord", "ողնուղեղ", "спинной мозг")}</Tag>
        {SEG.slice(1).map((s, j) => <path key={j} d={path(s)} fill="none" stroke={j + 1 === i ? "#7c3aed" : "#c4b5fd"} strokeWidth={j + 1 === i ? 3 : 2} />)}
        {i === 0 ? <circle cx="52" cy="168" r={6 + 10 * p} fill="none" stroke="#7c3aed" strokeWidth="2" opacity={1 - p} /> : <circle cx={dot[0]} cy={dot[1] + (i === 3 ? lift * p * 0.5 : 0)} r="5" fill="#facc15" stroke="#7c3aed" strokeWidth="2" />}
        <Tag x={160} y={18}>{names[i]}</Tag>
      </g>
    );
  },
};

/* ---------------- frog metamorphosis ---------------- */

const frog: Mech = {
  title: t("From egg to frog", "Ձվից մինչև գորտ", "Из икринки в лягушку"),
  caps: [
    t("A frog lays hundreds of eggs in water. Each black dot is an embryo inside a ball of jelly.", "Գորտը ջրում դնում է հարյուրավոր ձվեր։ Յուրաքանչյուր սև կետ դոնդողի գնդի մեջ գտնվող սաղմ է։", "Лягушка откладывает в воду сотни икринок. Каждая чёрная точка — зародыш в шарике студня."),
    t("A tadpole hatches. It lives in water like a fish: it swims with its tail and breathes with gills.", "Դուրս է գալիս շերեփուկ։ Այն ապրում է ջրում ձկան պես․ լողում է պոչով և շնչում խռիկներով։", "Вылупляется головастик. Он живёт в воде как рыба: плавает хвостом и дышит жабрами."),
    t("Hind legs grow first, then front legs. Lungs develop and the tadpole comes up to gulp air.", "Սկզբում աճում են հետին, ապա առջևի ոտքերը։ Զարգանում են թոքերը, և շերեփուկը բարձրանում է օդ կուլ տալու։", "Сначала растут задние ноги, затем передние. Развиваются лёгкие, и головастик поднимается глотнуть воздуха."),
    t("The tail is absorbed and a young frog climbs onto land. It breathes with lungs and through its moist skin.", "Պոչը ներծծվում է, և երիտասարդ գորտը դուրս է գալիս ցամաք։ Այն շնչում է թոքերով և խոնավ մաշկով։", "Хвост рассасывается, и молодая лягушка выходит на сушу. Она дышит лёгкими и влажной кожей."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    const wag = Math.sin(p * Math.PI * 6) * 6;
    const tail = (len: number) => `M150,110 q${-len / 2},${wag} ${-len},0`;
    return (
      <g>
        <rect x="0" y="60" width="320" height="160" fill="#bae6fd" />
        <path d="M220,60 q40,-30 100,-20 L320,220 L250,220 Q230,120 220,60 Z" fill="#a3e635" opacity={i === 3 ? 1 : 0.4} />
        {i === 0 ? scatter(22, 110, 80, 100, 70, 4).map((q, j) => (
          <g key={j}>
            <circle cx={q.x} cy={q.y} r="9" fill="#e0f2fe" stroke="#7dd3fc" />
            <circle cx={q.x + Math.sin(p * 6 + j) * 0.8} cy={q.y} r="3.5" fill="#1e293b" />
          </g>
        )) : null}
        {i === 1 || i === 2 ? (
          <g transform={`translate(${lerp(-20, 20, k)},${i === 2 ? lerp(40, 0, k) : 40})`}>
            <path d={tail(i === 2 ? 70 : 80)} stroke="#334155" strokeWidth="10" strokeLinecap="round" fill="none" />
            <ellipse cx="165" cy="110" rx="26" ry="18" fill="#334155" />
            <circle cx="178" cy="104" r="3" fill="#fff" />
            {i === 1 ? [0, 1, 2].map((j) => <path key={j} d={`M155,${96 + j * 4} q-6,-6 -12,-4`} stroke="#f472b6" strokeWidth="2.5" fill="none" />) : null}
            {i === 2 ? (
              <g stroke="#334155" strokeWidth="5" strokeLinecap="round">
                <path d="M146,122 l-8,16 l-10,0" fill="none" />
                {k > 0.5 ? <path d="M172,124 l4,12" fill="none" /> : null}
              </g>
            ) : null}
          </g>
        ) : null}
        {i === 3 ? (
          <g transform={`translate(${lerp(0, 70, k)},${lerp(30, -30, k)})`}>
            <path d="M150,112 l-20,24 l-16,-2 M190,112 l18,24 l16,-2" stroke="#16a34a" strokeWidth="7" strokeLinecap="round" fill="none" />
            <ellipse cx="170" cy="105" rx="32" ry="20" fill="#22c55e" />
            <circle cx="158" cy="86" r="7" fill="#22c55e" />
            <circle cx="182" cy="86" r="7" fill="#22c55e" />
            <circle cx="158" cy="85" r="3" fill="#1e293b" />
            <circle cx="182" cy="85" r="3" fill="#1e293b" />
            <path d="M160,104 q10,6 20,0" stroke="#14532d" strokeWidth="2" fill="none" />
          </g>
        ) : null}
        <Tag x={160} y={40}>{[
          T(lang, "Eggs (spawn)", "Ձկնկիթ", "Икра"),
          T(lang, "Tadpole with gills", "Խռիկներով շերեփուկ", "Головастик с жабрами"),
          T(lang, "Tadpole with legs", "Ոտքերով շերեփուկ", "Головастик с ногами"),
          T(lang, "Frog", "Գորտ", "Лягушка"),
        ][i]}</Tag>
      </g>
    );
  },
};

/* ---------------- butterfly metamorphosis ---------------- */

const butterfly: Mech = {
  title: t("Complete metamorphosis of a butterfly", "Թիթեռի լրիվ կերպարանափոխություն", "Полное превращение бабочки"),
  caps: [
    t("The butterfly lays tiny eggs on the leaf its caterpillars will eat.", "Թիթեռը մանր ձվեր է դնում այն տերևի վրա, որով սնվելու են թրթուրները։", "Бабочка откладывает крошечные яйца на лист, которым будут питаться гусеницы."),
    t("The larva, a caterpillar, hatches and does little but eat and grow, shedding its skin several times.", "Դուրս է գալիս թրթուրը, որը գրեթե միայն ուտում և աճում է՝ մի քանի անգամ մաշկափոխվելով։", "Вылупляется личинка, гусеница, которая почти только ест и растёт, несколько раз сбрасывая кожу."),
    t("The caterpillar turns into a pupa (chrysalis). Inside, its body is broken down and rebuilt.", "Թրթուրը վերածվում է հարսնյակի (քրիզալիդ)։ Ներսում նրա մարմինը քայքայվում և նորից կառուցվում է։", "Гусеница превращается в куколку. Внутри её тело разбирается и строится заново."),
    t("An adult butterfly comes out, pumps up its wings and flies off to find a mate. Egg, larva, pupa, adult: four stages.", "Դուրս է գալիս հասուն թիթեռը, ուղղում թևերը և թռչում զույգ գտնելու։ Ձու, թրթուր, հարսնյակ, հասուն միջատ․ չորս փուլ։", "Выходит взрослая бабочка, расправляет крылья и улетает искать пару. Яйцо, личинка, куколка, имаго: четыре стадии."),
  ],
  draw: (i, p, lang) => {
    const flap = 0.35 + 0.65 * Math.abs(Math.cos(p * Math.PI * 3));
    return (
      <g>
        <path d="M0,40 L320,40" stroke="#78350f" strokeWidth="5" />
        <path d="M60,40 Q160,120 260,40 Z" fill="#4ade80" stroke="#15803d" strokeWidth="2" />
        <path d="M60,40 Q160,70 260,40" stroke="#15803d" strokeWidth="1.5" fill="none" />
        {i === 0 ? [0, 1, 2, 3, 4].map((j) => <circle key={j} cx={130 + j * 14} cy={58 + (j % 2) * 5} r="4" fill="#fef9c3" stroke="#ca8a04" />) : null}
        {i === 1 ? Array.from({ length: 8 }, (_, j) => (
          <circle key={j} cx={110 + j * 12 + ((p * 30) % 12)} cy={62 + Math.sin(j * 0.9 + p * 8) * 3} r={j === 7 ? 8 : 7} fill={j % 2 ? "#facc15" : "#16a34a"} stroke="#1e293b" strokeWidth="0.8" />
        )) : null}
        {i === 2 ? (
          <g transform={`rotate(${Math.sin(p * Math.PI * 2) * 4} 200 40)`}>
            <line x1="200" y1="40" x2="200" y2="62" stroke="#78350f" strokeWidth="2" />
            <ellipse cx="200" cy="96" rx="15" ry="34" fill="#a3e635" stroke="#4d7c0f" strokeWidth="2" />
            <path d="M190,80 q10,6 20,0 M190,100 q10,6 20,0" stroke="#4d7c0f" fill="none" />
          </g>
        ) : null}
        {i === 3 ? (
          <g transform={`translate(${lerp(0, 40, ease(p))},${lerp(40, 0, ease(p))})`}>
            <g transform={`translate(160 120) scale(${flap} 1) translate(-160 -120)`}>
              <path d="M160,120 C120,70 90,80 100,118 C92,150 130,160 160,124 Z" fill="#f97316" stroke="#1e293b" strokeWidth="2" />
              <path d="M160,120 C200,70 230,80 220,118 C228,150 190,160 160,124 Z" fill="#f97316" stroke="#1e293b" strokeWidth="2" />
              <circle cx="118" cy="105" r="5" fill="#1e293b" />
              <circle cx="202" cy="105" r="5" fill="#1e293b" />
            </g>
            <ellipse cx="160" cy="122" rx="4" ry="22" fill="#1e293b" />
            <path d="M158,101 q-6,-14 -12,-16 M162,101 q6,-14 12,-16" stroke="#1e293b" strokeWidth="1.5" fill="none" />
          </g>
        ) : null}
        <Tag x={160} y={205}>{[
          T(lang, "1. Egg", "1. Ձու", "1. Яйцо"),
          T(lang, "2. Larva (caterpillar)", "2. Թրթուր", "2. Личинка (гусеница)"),
          T(lang, "3. Pupa", "3. Հարսնյակ", "3. Куколка"),
          T(lang, "4. Adult", "4. Հասուն միջատ", "4. Имаго"),
        ][i]}</Tag>
      </g>
    );
  },
};

/* ---------------- seed germination ---------------- */

const germinate: Mech = {
  title: t("How a bean seed germinates", "Ինչպես է ծլում լոբու սերմը", "Как прорастает семя фасоли"),
  caps: [
    t("The dry seed soaks up water and swells. Water wakes the embryo, and enzymes start to break down the stored food in the cotyledons.", "Չոր սերմը ներծծում է ջուր և ուռչում։ Ջուրն արթնացնում է սաղմը, և ֆերմենտները սկսում են քայքայել շաքիլներում պահեստավորված սնունդը։", "Сухое семя впитывает воду и набухает. Вода пробуждает зародыш, и ферменты начинают расщеплять запас питательных веществ в семядолях."),
    t("The radicle, the embryo's root, breaks out first and grows down, so the seedling is anchored and can drink.", "Առաջինը դուրս է գալիս սաղմնային արմատիկը և աճում դեպի ներքև, որ ծիլը ամրանա և կարողանա ջուր խմել։", "Первым выходит зародышевый корешок и растёт вниз, чтобы проросток закрепился и мог пить."),
    t("The shoot grows up in a hook, pulling the cotyledons out of the soil.", "Ցողունիկը աճում է դեպի վեր կեռի ձևով և հողից դուրս է քաշում շաքիլները։", "Стебелёк растёт вверх петлёй и вытягивает семядоли из почвы."),
    t("In the light the first true leaves open and turn green. Now the plant makes its own food by photosynthesis.", "Լույսի տակ բացվում և կանաչում են առաջին իսկական տերևները։ Այժմ բույսն ինքն է սնունդ պատրաստում ֆոտոսինթեզով։", "На свету раскрываются и зеленеют первые настоящие листья. Теперь растение само делает себе пищу фотосинтезом."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    const sw = i === 0 ? lerp(0.75, 1, k) : 1;
    const root = i === 0 ? 0 : i === 1 ? 50 * k : 60;
    const up = i < 2 ? 0 : i === 2 ? 70 * k : 75;
    const sy = i < 2 ? 150 : 150 - up;
    return (
      <g>
        <rect x="0" y="0" width="320" height="120" fill="#e0f2fe" />
        <rect x="0" y="120" width="320" height="100" fill="#a16207" />
        {scatter(18, 10, 130, 300, 80, 3).map((q, j) => <circle key={j} cx={q.x} cy={q.y} r="2" fill="#78350f" />)}
        {i === 0 ? [0, 1, 2].map((j) => <circle key={j} cx={140 + j * 20} cy={lerp(125, 145, (p + j / 3) % 1)} r="3" fill="#38bdf8" />) : null}
        {root > 0 ? (
          <g stroke="#fef3c7" strokeLinecap="round" fill="none">
            <path d={`M160,158 L160,${158 + root}`} strokeWidth="4" />
            {root > 30 ? <path d={`M160,180 l-14,14 M160,190 l12,14`} strokeWidth="2" /> : null}
          </g>
        ) : null}
        {i >= 2 ? <path d={i === 2 && k < 0.7 ? `M160,158 Q160,${sy - 10} ${150},${sy}` : `M160,158 L160,${sy}`} stroke="#65a30d" strokeWidth="4" fill="none" /> : null}
        <g transform={`translate(160 ${sy}) scale(${sw}) translate(-160 -${sy})`}>
          <ellipse cx={i >= 2 ? 150 : 160} cy={sy} rx="18" ry="12" fill={i >= 2 ? "#bef264" : "#fde68a"} stroke="#a16207" strokeWidth="1.5" />
          {i >= 2 ? <ellipse cx="172" cy={sy} rx="18" ry="12" fill="#bef264" stroke="#a16207" strokeWidth="1.5" /> : null}
        </g>
        {i === 3 ? (
          <g fill="#22c55e" stroke="#15803d">
            <path d={`M160,${sy} q-30,-${30 * k} -40,-${10 + 20 * k} q25,-${8 * k} 40,${10 * k} Z`} />
            <path d={`M160,${sy} q30,-${30 * k} 40,-${10 + 20 * k} q-25,-${8 * k} -40,${10 * k} Z`} />
          </g>
        ) : null}
        <Tag x={160} y={22}>{[
          T(lang, "Swelling", "Ուռչում", "Набухание"),
          T(lang, "The root comes first", "Առաջինը արմատն է", "Первым идёт корешок"),
          T(lang, "The shoot rises", "Ցողունիկը բարձրանում է", "Стебелёк поднимается"),
          T(lang, "First true leaves", "Առաջին իսկական տերևները", "Первые настоящие листья"),
        ][i]}</Tag>
      </g>
    );
  },
};

/* ---------------- breathing ---------------- */

const breathing: Mech = {
  title: t("How we breathe in and out", "Ինչպես ենք ներշնչում և արտաշնչում", "Как мы делаем вдох и выдох"),
  caps: [
    t("Breathing in: the diaphragm contracts and flattens, the rib muscles lift the ribs. The chest gets bigger, the pressure in the lungs falls and air rushes in.", "Ներշնչում․ ստոծանին կծկվում և հարթվում է, միջկողային մկանները բարձրացնում են կողերը։ Կրծքավանդակը մեծանում է, թոքերում ճնշումն ընկնում է, և օդը ներս է հոսում։", "Вдох: диафрагма сокращается и уплощается, межрёберные мышцы поднимают рёбра. Грудная клетка увеличивается, давление в лёгких падает, и воздух входит."),
    t("Breathing out: the muscles relax, the diaphragm domes up again and the elastic lungs shrink, pushing air out.", "Արտաշնչում․ մկանները թուլանում են, ստոծանին նորից գմբեթաձև բարձրանում է, և առաձգական թոքերը փոքրանում են՝ դուրս մղելով օդը։", "Выдох: мышцы расслабляются, диафрагма снова поднимается куполом, упругие лёгкие сжимаются и выталкивают воздух."),
    t("At rest a person takes about 16–18 breaths a minute, moving roughly half a litre of air each time.", "Հանգստի վիճակում մարդը րոպեում կատարում է մոտ 16–18 շնչառություն՝ ամեն անգամ տեղաշարժելով մոտ կես լիտր օդ։", "В покое человек делает около 16–18 вдохов в минуту, каждый раз прокачивая примерно пол-литра воздуха."),
  ],
  draw: (i, p, lang) => {
    const k = i === 0 ? ease(p) : i === 1 ? 1 - ease(p) : (1 - Math.cos(p * Math.PI * 2)) / 2;
    const dome = lerp(40, 14, k);
    const lw = lerp(46, 58, k);
    const ribs = lerp(0, -6, k);
    return (
      <g>
        <path d="M150,14 L150,50 M170,14 L170,50 M150,50 Q130,60 118,74 M170,50 Q190,60 202,74" stroke="#94a3b8" strokeWidth="6" fill="none" strokeLinecap="round" />
        <ellipse cx={160 - 18 - lw / 2} cy="112" rx={lw / 2 + 4} ry={lerp(48, 56, k)} fill="#fda4af" stroke="#be123c" strokeWidth="1.5" />
        <ellipse cx={160 + 18 + lw / 2} cy="112" rx={lw / 2 + 4} ry={lerp(48, 56, k)} fill="#fda4af" stroke="#be123c" strokeWidth="1.5" />
        {[0, 1, 2, 3, 4].map((j) => (
          <g key={j} stroke="#cbd5e1" strokeWidth="4" fill="none" strokeLinecap="round">
            <path d={`M152,${66 + j * 22} Q${100 - k * 8},${66 + j * 22 + ribs + 6} ${92 - k * 8},${90 + j * 22 + ribs}`} />
            <path d={`M168,${66 + j * 22} Q${220 + k * 8},${66 + j * 22 + ribs + 6} ${228 + k * 8},${90 + j * 22 + ribs}`} />
          </g>
        ))}
        <path d={`M86,178 Q160,${178 - dome * 2} 234,178`} stroke="#b45309" strokeWidth="5" fill="none" />
        {i !== 2 ? (
          <g>
            {[[130, 30], [190, 30]].map(([x, y], j) => (i === 0
              ? <Arrow key={j} x1={x} y1={y - 22 + 14 * p} x2={x + (j ? -14 : 14)} y2={y + 4 + 14 * p} color="#0ea5e9" />
              : <Arrow key={j} x1={x + (j ? -14 : 14)} y1={y + 18 - 14 * p} x2={x} y2={y - 8 - 14 * p} color="#64748b" />))}
          </g>
        ) : null}
        <Tag x={160} y={206}>{[
          T(lang, "Inhale: diaphragm down", "Ներշնչում․ ստոծանին իջնում է", "Вдох: диафрагма опускается"),
          T(lang, "Exhale: diaphragm up", "Արտաշնչում․ ստոծանին բարձրանում է", "Выдох: диафрагма поднимается"),
          T(lang, "16–18 breaths a minute", "Րոպեում 16–18 շնչառություն", "16–18 вдохов в минуту"),
        ][i]}</Tag>
      </g>
    );
  },
};

/* ---------------- natural selection: peppered moth ---------------- */

function Moth({ x, y, dark, o = 1 }: { x: number; y: number; dark: boolean; o?: number }) {
  return (
    <g opacity={o}>
      <path d={`M${x},${y} l-11,-5 l2,10 Z M${x},${y} l11,-5 l-2,10 Z`} fill={dark ? "#1f2937" : "#f1f5f9"} stroke={dark ? "#0f172a" : "#94a3b8"} strokeWidth="0.8" />
      {!dark ? <circle cx={x - 5} cy={y} r="1" fill="#475569" /> : null}
    </g>
  );
}

const MOTHS = scatter(12, 90, 30, 140, 150, 7);

const selection: Mech = {
  title: t("Natural selection: the peppered moth", "Բնական ընտրություն․ կեչու ֆշտաթիթեռ", "Естественный отбор: берёзовая пяденица"),
  caps: [
    t("In clean English woods most peppered moths were pale and hard to see on pale, lichen-covered bark. A few dark ones were easy prey.", "Անգլիայի մաքուր անտառներում կեչու ֆշտաթիթեռների մեծ մասը բաց գույնի էր և դժվար էր տեսնել քարաքոսով պատված բաց կեղևի վրա։ Մի քանի մուգերը հեշտ զոհ էին։", "В чистых английских лесах большинство берёзовых пядениц было светлыми и незаметными на светлой коре с лишайниками. Немногие тёмные были лёгкой добычей."),
    t("In the 1800s factory soot killed the lichens and blackened the trees near cities such as Manchester.", "1800-ականներին գործարանային մուրը ոչնչացրեց քարաքոսերը և սևացրեց ծառերը Մանչեսթերի նման քաղաքների մոտ։", "В XIX веке фабричная сажа уничтожила лишайники и зачернила деревья около таких городов, как Манчестер."),
    t("Now the pale moths stood out, and birds ate more of them. The dark ones more often survived and had young.", "Այժմ բաց թիթեռներն աչքի էին ընկնում, և թռչուններն ավելի շատ էին դրանք ուտում։ Մուգերն ավելի հաճախ էին գոյատևում և սերունդ տալիս։", "Теперь светлые бабочки бросались в глаза, и птицы чаще их съедали. Тёмные чаще выживали и давали потомство."),
    t("By the end of the century most moths near Manchester were dark. When the air was cleaned in the late 1900s, the pale form came back.", "Դարի վերջում Մանչեսթերի մոտ թիթեռների մեծ մասը մուգ էր։ Երբ 1900-ականների վերջին օդը մաքրվեց, բաց ձևը վերադարձավ։", "К концу века большинство бабочек около Манчестера были тёмными. Когда в конце XX века воздух очистили, светлая форма вернулась."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    const soot = i === 0 ? 0 : i === 1 ? k : 1;
    const gone = (j: number) => (i === 2 ? (j % 4 !== 0 && k > j / 12 ? 0 : 1) : 1);
    const darkAt = (j: number) => (i === 3 ? j % 6 !== 0 : j % 6 === 0);
    const darkCount = MOTHS.filter((_, j) => darkAt(j) && (i !== 2 || gone(j))).length;
    const total = MOTHS.filter((_, j) => i !== 2 || gone(j) || darkAt(j)).length;
    return (
      <g>
        <rect x="0" y="0" width="320" height="220" fill="#ecfccb" />
        <rect x="80" y="0" width="160" height="200" fill="#d6d3d1" />
        {[[100, 40], [180, 90], [130, 150], [210, 30]].map(([x, y], j) => <ellipse key={j} cx={x} cy={y} rx="18" ry="9" fill="#bef264" opacity={0.8 * (1 - soot)} />)}
        <rect x="80" y="0" width="160" height="200" fill="#292524" opacity={soot * 0.9} />
        {MOTHS.map((q, j) => {
          const dark = darkAt(j);
          const o = i === 2 && !dark ? gone(j) : 1;
          return <Moth key={j} x={q.x} y={q.y} dark={dark} o={o} />;
        })}
        {i === 2 ? (
          <g transform={`translate(${lerp(300, 200, Math.sin(p * Math.PI))},${lerp(60, 110, p)})`}>
            <path d="M0,0 q-14,-14 -26,-4 q10,2 12,10 Z" fill="#78350f" />
            <ellipse cx="6" cy="2" rx="14" ry="8" fill="#92400e" />
            <circle cx="16" cy="-2" r="5" fill="#92400e" />
            <path d="M20,-2 l6,2 l-6,2 Z" fill="#facc15" />
          </g>
        ) : null}
        <Tag x={160} y={214}>{T(lang, `Dark moths: ${darkCount} of ${total}`, `Մուգ թիթեռներ․ ${darkCount}-ը ${total}-ից`, `Тёмных бабочек: ${darkCount} из ${total}`)}</Tag>
      </g>
    );
  },
};

/* ---------------- cardiac cycle ---------------- */

const heartcycle: Mech = {
  title: t("One heartbeat, step by step", "Սրտի մեկ զարկը քայլ առ քայլ", "Одно сердцебиение шаг за шагом"),
  caps: [
    t("Atrial systole (about 0.1 s): the two atria contract and top up the ventricles through the open valves.", "Նախասրտերի սիստոլա (մոտ 0,1 վ)․ երկու նախասրտերը կծկվում են և բաց փականներով լրացնում փորոքները։", "Систола предсердий (около 0,1 с): оба предсердия сокращаются и дополняют желудочки через открытые клапаны."),
    t("Ventricular systole (about 0.3 s): the ventricles squeeze. The valves to the atria snap shut (the 'lub') and blood is pushed into the aorta and the pulmonary artery.", "Փորոքների սիստոլա (մոտ 0,3 վ)․ փորոքները սեղմվում են։ Նախասրտերի հետ կապող փականները փակվում են (առաջին տոնը), և արյունը մղվում է աորտա և թոքային զարկերակ։", "Систола желудочков (около 0,3 с): желудочки сжимаются. Клапаны к предсердиям захлопываются (первый тон), и кровь выталкивается в аорту и лёгочную артерию."),
    t("Diastole (about 0.4 s): the whole heart rests. The valves of the arteries close (the 'dub') and veins refill the atria. At 75 beats a minute the cycle takes 0.8 s.", "Դիաստոլա (մոտ 0,4 վ)․ ամբողջ սիրտը հանգստանում է։ Զարկերակների փականները փակվում են (երկրորդ տոնը), և երակները նորից լցնում են նախասրտերը։ Րոպեում 75 զարկի դեպքում ցիկլը տևում է 0,8 վ։", "Диастола (около 0,4 с): всё сердце отдыхает. Клапаны артерий закрываются (второй тон), вены снова наполняют предсердия. При 75 ударах в минуту цикл длится 0,8 с."),
  ],
  draw: (i, p, lang) => {
    const k = Math.sin(p * Math.PI);
    const a = i === 0 ? 1 - 0.25 * k : 1;
    const v = i === 1 ? 1 - 0.2 * k : 1;
    const ch = (cx: number, cy: number, w: number, h: number, s: number, c: string) => <rect x={cx - (w * s) / 2} y={cy - (h * s) / 2} width={w * s} height={h * s} rx="14" fill={c} stroke="#7f1d1d" strokeWidth="1.5" />;
    const lab = (x: number, y: number, s: string) => <text x={x} y={y} textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#fff">{s}</text>;
    return (
      <g>
        <path d="M200,58 Q200,14 240,14 L270,14" stroke="#dc2626" strokeWidth="12" fill="none" />
        <path d="M128,58 Q128,24 90,24 L56,24" stroke="#2563eb" strokeWidth="12" fill="none" />
        {ch(120, 70, 70, 50, a, "#3b82f6")}
        {ch(200, 70, 70, 50, a, "#ef4444")}
        {ch(120, 140, 74, 80, v, "#1d4ed8")}
        {ch(200, 140, 74, 80, v, "#b91c1c")}
        {lab(120, 73, T(lang, "RA", "ԱՆ", "ПП"))}
        {lab(200, 73, T(lang, "LA", "ՁՆ", "ЛП"))}
        {lab(120, 143, T(lang, "RV", "ԱՓ", "ПЖ"))}
        {lab(200, 143, T(lang, "LV", "ՁՓ", "ЛЖ"))}
        {i === 0 ? [120, 200].map((x) => <Arrow key={x} x1={x} y1={82 + 6 * p} x2={x} y2={112 + 6 * p} color="#fde047" />) : null}
        {i === 1 ? (
          <g>
            <Arrow x1={200} y1={110 - 30 * p} x2={232} y2={20 - 4 * p} color="#fde047" />
            <Arrow x1={120} y1={110 - 30 * p} x2={80} y2={30 - 4 * p} color="#fde047" />
          </g>
        ) : null}
        {i === 2 ? (
          <g>
            <Arrow x1={20} y1={70} x2={78 + 6 * p} y2={70} color="#2563eb" />
            <Arrow x1={300} y1={70} x2={242 - 6 * p} y2={70} color="#dc2626" />
          </g>
        ) : null}
        <Tag x={160} y={206}>{[
          T(lang, "Atria contract · 0.1 s", "Նախասրտերը կծկվում են · 0,1 վ", "Сокращаются предсердия · 0,1 с"),
          T(lang, "Ventricles contract · 0.3 s", "Փորոքները կծկվում են · 0,3 վ", "Сокращаются желудочки · 0,3 с"),
          T(lang, "Diastole · 0.4 s", "Դիաստոլա · 0,4 վ", "Диастола · 0,4 с"),
        ][i]}</Tag>
      </g>
    );
  },
};

/* ---------------- genetic drift ---------------- */

const BEETLES = scatter(20, 30, 40, 260, 120, 11);
const SURVIVORS = [2, 5, 11, 16];

function Beetle({ x, y, c, o = 1 }: { x: number; y: number; c: string; o?: number }) {
  return (
    <g opacity={o}>
      <path d={`M${x - 7},${y - 4} l-5,-4 M${x - 7},${y + 4} l-5,4 M${x + 7},${y - 4} l5,-4 M${x + 7},${y + 4} l5,4`} stroke="#1e293b" strokeWidth="1.2" />
      <ellipse cx={x} cy={y} rx="9" ry="6.5" fill={c} stroke="#1e293b" strokeWidth="1" />
      <line x1={x - 9} y1={y} x2={x + 9} y2={y} stroke="#1e293b" strokeWidth="0.8" />
    </g>
  );
}

const drift: Mech = {
  title: t("Genetic drift: evolution by chance", "Գենային դրեյֆ․ էվոլյուցիա պատահականությամբ", "Дрейф генов: эволюция случайностью"),
  caps: [
    t("A population of 20 beetles: 10 green and 10 brown. Colour makes no difference to survival here.", "20 բզեզից բաղկացած պոպուլյացիա․ 10 կանաչ և 10 դարչնագույն։ Այստեղ գույնը գոյատևման վրա չի ազդում։", "Популяция из 20 жуков: 10 зелёных и 10 бурых. Окраска здесь на выживание не влияет."),
    t("A flood kills most of them at random. By pure luck the four survivors are three brown and one green.", "Ջրհեղեղը պատահականորեն սպանում է նրանց մեծ մասին։ Զուտ բախտի բերմամբ փրկված չորսից երեքը դարչնագույն են, մեկը՝ կանաչ։", "Наводнение случайно губит большинство. По чистой случайности из четырёх выживших трое бурые и один зелёный."),
    t("The survivors breed. The new population is three quarters brown, although nature selected nothing.", "Փրկվածները բազմանում են։ Նոր պոպուլյացիայի երեք քառորդը դարչնագույն է, թեև բնությունը ոչինչ չի ընտրել։", "Выжившие размножаются. Новая популяция на три четверти бурая, хотя природа ничего не отбирала."),
    t("In small populations chance can even wipe out an allele. When a few settlers start a new population, this is called the founder effect.", "Փոքր պոպուլյացիաներում պատահականությունը կարող է նույնիսկ վերացնել ալելը։ Երբ մի քանի վերաբնակիչներ նոր պոպուլյացիա են սկսում, դա կոչվում է հիմնադրի էֆեկտ։", "В малых популяциях случай может даже полностью убрать аллель. Когда новую популяцию основывают несколько особей, это называют эффектом основателя."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    const G = "#22c55e", B = "#a16207";
    const col = (j: number) => {
      if (i <= 1) return j % 2 ? G : B;
      if (i === 2) return j % 4 === 1 ? G : B;
      return k > 0.5 || j % 4 !== 1 ? B : G;
    };
    const greens = BEETLES.filter((_, j) => col(j) === G && (i !== 1 || SURVIVORS.includes(j))).length;
    const alive = i === 1 ? SURVIVORS.length : BEETLES.length;
    return (
      <g>
        <rect width="320" height="220" fill="#f0fdf4" />
        {i === 1 ? <rect x="0" y={lerp(220, 120, k)} width="320" height="120" fill="#7dd3fc" opacity="0.55" /> : null}
        {BEETLES.map((q, j) => {
          const survivor = SURVIVORS.includes(j);
          const c = i === 1 && survivor ? [B, B, G, B][SURVIVORS.indexOf(j)] : col(j);
          return <Beetle key={j} x={q.x} y={q.y} c={c} o={i === 1 && !survivor ? 1 - k : 1} />;
        })}
        <Tag x={160} y={206}>{T(lang, `Green: ${greens} of ${alive}`, `Կանաչ․ ${greens}-ը ${alive}-ից`, `Зелёных: ${greens} из ${alive}`)}</Tag>
      </g>
    );
  },
};

/* ---------------- limiting factor ---------------- */

const STAVES: Array<[ReturnType<typeof t>, number, string]> = [
  [t("light", "լույս", "свет"), 150, "#facc15"],
  [t("water", "ջուր", "вода"), 112, "#38bdf8"],
  [t("nitrogen", "ազոտ", "азот"), 80, "#a78bfa"],
  [t("warmth", "ջերմություն", "тепло"), 140, "#f97316"],
  [t("phosphorus", "ֆոսֆոր", "фосфор"), 128, "#f472b6"],
  [t("potassium", "կալիում", "калий"), 136, "#4ade80"],
];

const limiting: Mech = {
  title: t("The limiting factor: Liebig's barrel", "Սահմանափակող գործոն․ Լիբիխի տակառը", "Ограничивающий фактор: бочка Либиха"),
  caps: [
    t("Picture a barrel whose staves are the things a plant needs: light, water, nitrogen, warmth, phosphorus, potassium.", "Պատկերացրու տակառ, որի տախտակները բույսին անհրաժեշտ գործոններն են․ լույս, ջուր, ազոտ, ջերմություն, ֆոսֆոր, կալիում։", "Представь бочку, клёпки которой — то, что нужно растению: свет, вода, азот, тепло, фосфор, калий."),
    t("The barrel holds water only up to its shortest stave. Here nitrogen is shortest, so the harvest is limited by nitrogen, however good the rest is.", "Տակառը ջուր է պահում միայն մինչև ամենակարճ տախտակը։ Այստեղ ամենակարճը ազոտն է, ուստի բերքը սահմանափակված է ազոտով, որքան էլ լավ լինեն մնացածները։", "Бочка держит воду только до самой короткой клёпки. Здесь короче всех азот, поэтому урожай ограничен азотом, как бы хорошо ни было остальное."),
    t("Add nitrogen and the level rises, until the next shortest stave, water, stops it. Adding more of a factor that is not limiting changes nothing.", "Ավելացրու ազոտ, և մակարդակը կբարձրանա, մինչև որ այն կանգնեցնի հաջորդ ամենակարճ տախտակը՝ ջուրը։ Ոչ սահմանափակող գործոնի ավելացումը ոչինչ չի փոխում։", "Добавь азот — и уровень поднимется, пока его не остановит следующая короткая клёпка, вода. Добавлять то, что не ограничивает, бесполезно."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    const h = (j: number) => (j === 2 && i === 2 ? lerp(80, 146, k) : STAVES[j][1]);
    const level = Math.min(...STAVES.map((_, j) => h(j)));
    const base = 196, x0 = 70, sw = 30;
    const fill = i === 0 ? 0 : i === 1 ? level * k : level;
    return (
      <g>
        <rect x={x0} y={base - fill} width={sw * 6} height={fill} fill="#7dd3fc" opacity="0.7" />
        {STAVES.map(([name, , c], j) => (
          <g key={j}>
            <rect x={x0 + j * sw} y={base - h(j)} width={sw - 2} height={h(j)} rx="3" fill={c} opacity="0.85" stroke="#78350f" />
            <text x={x0 + j * sw + sw / 2 - 1} y={base - h(j) + 6} transform={`rotate(-90 ${x0 + j * sw + sw / 2 - 1} ${base - h(j) + 6})`} textAnchor="end" fontSize="8.5" fontWeight="900" fill="#1e1b4b">{L(name, lang)}</text>
          </g>
        ))}
        <rect x={x0 - 4} y={base} width={sw * 6 + 6} height="8" rx="3" fill="#78350f" />
        {i >= 1 && fill > level - 2 ? <path d={`M${x0 + 2 * sw + (i === 2 ? sw * 3 : 0)},${base - level} q-6,14 -2,30`} stroke="#38bdf8" strokeWidth="3" fill="none" opacity={0.5 + 0.5 * Math.sin(p * 12)} /> : null}
        <Tag x={160} y={20}>{[
          T(lang, "Six factors", "Վեց գործոն", "Шесть факторов"),
          T(lang, "Limiting factor: nitrogen", "Սահմանափակող գործոն՝ ազոտ", "Ограничивающий фактор: азот"),
          T(lang, "Now water limits", "Հիմա սահմանափակում է ջուրը", "Теперь ограничивает вода"),
        ][i]}</Tag>
      </g>
    );
  },
};

export const BIO_B: Record<string, Mech> = { reflex, frog, butterfly, germinate, breathing, selection, heartcycle, drift, limiting };
