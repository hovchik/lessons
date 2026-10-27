"use client";

import { L, t } from "../labels";
import type { Diagram } from "./types";

/* Labelled pictures for primary science: the body, road safety, a plant, soil, a forest, the skeleton, the compass. */

const P = (x: number, y: number, name: ReturnType<typeof t>, text: ReturnType<typeof t>) => ({ x, y, name, text });
const SKIN = "#fde7d4", SKIN_LINE = "#c2410c";
const lead = (x1: number, y1: number, x2: number, y2: number) => <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />;

/* ---------------- the body and the senses ---------------- */

const body: Diagram = {
  title: t("Our body and the five senses", "Մեր մարմինը և հինգ զգայարանները", "Наше тело и пять чувств"),
  draw: () => (
    <g>
      {/* legs and feet */}
      <rect x="92" y="168" width="16" height="40" rx="6" fill="#60a5fa" />
      <rect x="114" y="168" width="16" height="40" rx="6" fill="#60a5fa" />
      <ellipse cx="98" cy="210" rx="12" ry="5" fill="#334155" />
      <ellipse cx="124" cy="210" rx="12" ry="5" fill="#334155" />
      {/* arms */}
      <path d="M84,100 L58,158" stroke="#fbbf24" strokeWidth="14" strokeLinecap="round" />
      <path d="M138,100 L164,158" stroke="#fbbf24" strokeWidth="14" strokeLinecap="round" />
      <circle cx="56" cy="164" r="8" fill={SKIN} stroke={SKIN_LINE} />
      <circle cx="166" cy="164" r="8" fill={SKIN} stroke={SKIN_LINE} />
      {/* trunk */}
      <rect x="80" y="92" width="62" height="80" rx="14" fill="#fbbf24" />
      <path d="M118,112 c-4,-6 -12,-2 -10,4 c1,4 10,10 10,10 c0,0 9,-6 10,-10 c2,-6 -6,-10 -10,-4 Z" fill="#ef4444" />
      {/* neck and head */}
      <rect x="103" y="80" width="16" height="14" fill={SKIN} />
      <ellipse cx="78" cy="52" rx="5" ry="9" fill={SKIN} stroke={SKIN_LINE} />
      <ellipse cx="144" cy="52" rx="5" ry="9" fill={SKIN} stroke={SKIN_LINE} />
      <circle cx="111" cy="50" r="32" fill={SKIN} stroke={SKIN_LINE} strokeWidth="1.5" />
      <path d="M80,44 C82,18 140,14 142,44 C136,30 90,28 80,44 Z" fill="#7c2d12" />
      <ellipse cx="111" cy="34" rx="20" ry="9" fill="#f9a8d4" opacity="0.85" />
      <path d="M96,34 q5,-5 10,0 q5,5 10,0 q5,-5 10,0" fill="none" stroke="#db2777" strokeWidth="1" />
      <circle cx="100" cy="50" r="4" fill="#1e293b" />
      <circle cx="122" cy="50" r="4" fill="#1e293b" />
      <path d="M111,52 l-4,10 h7" fill="none" stroke={SKIN_LINE} strokeWidth="1.3" />
      <path d="M100,68 q11,9 22,0 Z" fill="#9f1239" />
      <ellipse cx="111" cy="71" rx="5" ry="3" fill="#fb7185" />
      {/* leader lines to the dots */}
      {lead(126, 32, 222, 22)}
      {lead(126, 50, 222, 52)}
      {lead(115, 60, 222, 82)}
      {lead(116, 71, 222, 112)}
      {lead(124, 118, 222, 142)}
      {lead(172, 166, 222, 182)}
      {lead(74, 52, 38, 52)}
    </g>
  ),
  parts: [
    P(230, 22, t("Brain", "Գլխուղեղ", "Мозг"), t("Inside the head, protected by the skull. It gets messages from all the senses and controls the whole body, even while we sleep.", "Գլխի ներսում է՝ գանգի պաշտպանության տակ։ Այն ստանում է բոլոր զգայարանների ազդանշանները և կառավարում ամբողջ մարմինը, նույնիսկ երբ քնած ենք։", "Внутри головы, под защитой черепа. Он получает сигналы от всех органов чувств и управляет всем телом, даже когда мы спим.")),
    P(230, 52, t("Eyes: sight", "Աչքեր՝ տեսողություն", "Глаза: зрение"), t("We blink about 15 to 20 times a minute; each blink washes the eye with tears. Never look straight at the Sun.", "Մենք րոպեում թարթում ենք մոտ 15–20 անգամ. ամեն թարթելիս աչքը լվացվում է արցունքով։ Երբեք ուղիղ մի՛ նայիր Արեգակին։", "Мы моргаем примерно 15–20 раз в минуту, и каждый раз глаз омывается слезой. Никогда не смотри прямо на Солнце.")),
    P(230, 82, t("Nose: smell", "Քիթ՝ հոտառություն", "Нос: обоняние"), t("The nose can tell thousands of smells apart. Much of what we call taste is really smell: hold your nose and an apple and a potato taste alike.", "Քիթը կարող է տարբերել հազարավոր հոտեր։ Այն, ինչ համ ենք անվանում, մեծ մասամբ հոտ է. բռնիր քիթդ, և խնձորն ու կարտոֆիլը նույն համն են ունենում։", "Нос различает тысячи запахов. Многое из того, что мы зовём вкусом, — на самом деле запах: зажми нос, и яблоко с картошкой станут на вкус похожи.")),
    P(230, 112, t("Tongue: taste", "Լեզու՝ համ", "Язык: вкус"), t("Thousands of tiny taste buds tell sweet, salty, sour and bitter. Every part of the tongue can taste all of them.", "Հազարավոր մանր համի պտկիկներ տարբերում են քաղցրը, աղին, թթուն և դառը։ Լեզվի յուրաքանչյուր մաս կարող է զգալ դրանք բոլորը։", "Тысячи крошечных вкусовых сосочков различают сладкое, солёное, кислое и горькое. Любая часть языка чувствует их все.")),
    P(230, 142, t("Heart", "Սիրտ", "Сердце"), t("A muscle about the size of your fist. It beats about 100 000 times a day and pumps blood around the body.", "Մկան է՝ քո բռունցքի չափ։ Այն օրական զարկում է մոտ 100 000 անգամ և արյունը մղում ամբողջ մարմնով։", "Мышца размером с твой кулак. Она бьётся около 100 000 раз в день и гонит кровь по всему телу.")),
    P(230, 182, t("Skin: touch", "Մաշկ՝ շոշափելիք", "Кожа: осязание"), t("The biggest organ of the body. It feels warm and cold, soft and hard, and pain, and the fingertips are the most sensitive.", "Մարմնի ամենամեծ օրգանն է։ Այն զգում է տաքն ու սառը, փափուկն ու կոշտը և ցավը, իսկ մատների ծայրերն ամենազգայունն են։", "Самый большой орган тела. Она чувствует тепло и холод, мягкое и твёрдое, боль, а самые чувствительные — кончики пальцев.")),
    P(30, 52, t("Ears: hearing", "Ականջներ՝ լսողություն", "Уши: слух"), t("Sound makes the eardrum shake, and three tiny bones pass the shaking on. Very loud music in headphones can harm hearing for ever.", "Ձայնը թրթռացնում է թմբկաթաղանթը, և երեք մանրիկ ոսկրիկներ փոխանցում են թրթիռը։ Ականջակալներով շատ բարձր երաժշտությունը կարող է ընդմիշտ վնասել լսողությունը։", "Звук заставляет дрожать барабанную перепонку, а три крошечные косточки передают дрожь дальше. Очень громкая музыка в наушниках может навсегда повредить слух.")),
  ],
};

/* ---------------- crossing the road ---------------- */

const crossing: Diagram = {
  title: t("Crossing the road safely", "Ինչպես անվտանգ անցնել ճանապարհը", "Как безопасно перейти дорогу"),
  draw: (lang) => (
    <g>
      <rect x="0" y="0" width="320" height="64" fill="#e2e8f0" />
      <rect x="0" y="64" width="320" height="100" fill="#475569" />
      <rect x="0" y="164" width="320" height="56" fill="#e2e8f0" />
      <line x1="0" y1="114" x2="320" y2="114" stroke="#f8fafc" strokeWidth="2" strokeDasharray="14 10" />
      {[0, 1, 2, 3, 4, 5, 6].map((k) => <rect key={k} x="124" y={68 + k * 13.5} width="64" height="8" fill="#f8fafc" />)}
      {/* pedestrian light */}
      <rect x="226" y="4" width="4" height="56" fill="#334155" />
      <rect x="214" y="6" width="28" height="44" rx="5" fill="#1e293b" />
      <circle cx="228" cy="17" r="8" fill="#ef4444" />
      <circle cx="228" cy="38" r="8" fill="#22c55e" opacity="0.35" />
      {/* car */}
      <rect x="22" y="80" width="62" height="28" rx="8" fill="#2563eb" />
      <rect x="36" y="84" width="30" height="20" rx="4" fill="#bfdbfe" />
      <circle cx="86" cy="86" r="3" fill="#fde047" />
      <circle cx="86" cy="102" r="3" fill="#fde047" />
      {/* child on the pavement */}
      <circle cx="156" cy="180" r="7" fill={SKIN} stroke={SKIN_LINE} />
      <rect x="148" y="188" width="16" height="20" rx="4" fill="#f97316" />
      <rect x="148" y="196" width="16" height="3" fill="#f8fafc" />
      <path d="M140,176 l-10,-4 M172,176 l10,-4" stroke="#334155" strokeWidth="1.5" />
      <text x="124" y="176" textAnchor="end" fontSize="9" fontWeight="900" fill="#334155">{L(t("1. left", "1. ձախ", "1. влево"), lang)}</text>
      <text x="188" y="176" fontSize="9" fontWeight="900" fill="#334155">{L(t("2. right", "2. աջ", "2. вправо"), lang)}</text>
    </g>
  ),
  parts: [
    P(250, 28, t("Pedestrian light", "Հետիոտնի լուսացույց", "Пешеходный светофор"), t("Red man: stop and wait. Green man: you may cross, but still look both ways, because a driver might not have stopped.", "Կարմիր մարդուկ՝ կանգնիր և սպասիր։ Կանաչ մարդուկ՝ կարող ես անցնել, բայց միևնույն է նայիր երկու կողմ, որովհետև վարորդը կարող էր չկանգնել։", "Красный человечек — стой и жди. Зелёный — можно идти, но всё равно посмотри в обе стороны: водитель мог не остановиться.")),
    P(156, 120, t("Zebra crossing", "«Զեբր» անցում", "«Зебра»"), t("Cross only here, walking, not running, and go straight across. The white stripes help drivers see where people cross.", "Անցիր միայն այստեղ՝ քայլելով, ոչ թե վազելով, և ուղիղ գծով։ Սպիտակ գծերն օգնում են վարորդներին տեսնել, թե որտեղ են անցնում մարդիկ։", "Переходи только здесь, шагом, а не бегом, и прямо. Белые полосы помогают водителям видеть, где переходят люди.")),
    P(54, 94, t("A car cannot stop at once", "Մեքենան չի կարող միանգամից կանգնել", "Машина не может остановиться сразу"), t("Even when the driver brakes, a car keeps rolling for many metres, and on a wet or icy road even further. Never step out in front of a car.", "Նույնիսկ երբ վարորդն արգելակում է, մեքենան դեռ շատ մետրեր է գլորվում, իսկ թաց կամ սառցակալած ճանապարհին՝ էլ ավելի։ Երբեք դուրս մի՛ գա մեքենայի առաջ։", "Даже когда водитель тормозит, машина катится ещё много метров, а на мокрой или скользкой дороге — ещё дальше. Никогда не выходи перед машиной.")),
    P(156, 160, t("Look left, then right", "Նայիր ձախ, հետո աջ", "Посмотри налево, потом направо"), t("Cars on the near side come from the left in Armenia, so look left first, then right, then left again, and cross when the road is clear.", "Հայաստանում մոտ կողմի մեքենաները գալիս են ձախից, ուստի նախ նայիր ձախ, հետո աջ, ապա նորից ձախ և անցիր, երբ ճանապարհն ազատ է։", "В Армении машины ближней полосы едут слева, поэтому сначала посмотри налево, потом направо, потом снова налево и переходи, когда дорога свободна.")),
    P(184, 200, t("Reflective strips", "Լուսաանդրադարձիչ շերտեր", "Светоотражающие полосы"), t("In the dark a driver sees a person in dark clothes only very late. Strips that shine in the headlights can be seen from far away.", "Մթության մեջ վարորդը մուգ հագուստով մարդուն տեսնում է շատ ուշ։ Լուսարձակների լույսի տակ փայլող շերտերը երևում են հեռվից։", "В темноте водитель замечает человека в тёмной одежде очень поздно. Полосы, которые блестят в свете фар, видны издалека.")),
  ],
};

/* ---------------- a flowering plant ---------------- */

const plant: Diagram = {
  title: t("Parts of a plant", "Բույսի մասերը", "Части растения"),
  draw: () => (
    <g>
      <rect x="0" y="150" width="320" height="70" fill="#a16207" opacity="0.35" />
      <line x1="0" y1="150" x2="320" y2="150" stroke="#65a30d" strokeWidth="3" />
      <circle cx="34" cy="30" r="16" fill="#facc15" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => <line key={a} x1={34 + 20 * Math.cos((a * Math.PI) / 180)} y1={30 + 20 * Math.sin((a * Math.PI) / 180)} x2={34 + 27 * Math.cos((a * Math.PI) / 180)} y2={30 + 27 * Math.sin((a * Math.PI) / 180)} stroke="#f59e0b" strokeWidth="2" />)}
      {/* roots */}
      <path d="M160,150 L160,190 M160,165 L138,186 M160,170 L184,192 M160,182 L148,206 M160,184 L172,208 M138,186 L128,200 M184,192 L196,204" stroke="#92400e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* stem */}
      <path d="M160,150 C158,120 162,90 160,52" stroke="#16a34a" strokeWidth="5" fill="none" />
      <path d="M160,104 C176,96 192,92 204,94" stroke="#16a34a" strokeWidth="3" fill="none" />
      {/* leaves */}
      <path d="M160,120 C140,104 116,108 106,118 C120,130 144,130 160,120 Z" fill="#4ade80" stroke="#15803d" />
      <path d="M161,82 C180,68 204,72 212,82 C198,94 176,94 161,82 Z" fill="#4ade80" stroke="#15803d" />
      <path d="M160,120 L114,117 M161,82 L206,82" stroke="#15803d" strokeWidth="1" />
      {/* flower */}
      {[0, 60, 120, 180, 240, 300].map((a) => <ellipse key={a} cx={160 + 13 * Math.cos((a * Math.PI) / 180)} cy={40 + 13 * Math.sin((a * Math.PI) / 180)} rx="10" ry="6" transform={`rotate(${a} ${160 + 13 * Math.cos((a * Math.PI) / 180)} ${40 + 13 * Math.sin((a * Math.PI) / 180)})`} fill="#f472b6" />)}
      <circle cx="160" cy="40" r="7" fill="#fde047" />
      {/* fruit, cut open */}
      <circle cx="208" cy="108" r="13" fill="#fb923c" stroke="#c2410c" />
      <path d="M208,95 a13,13 0 0 1 0,26 Z" fill="#fed7aa" />
      <ellipse cx="212" cy="108" rx="3" ry="5" fill="#78350f" />
      {/* a seed sprouting */}
      <ellipse cx="262" cy="182" rx="9" ry="6" fill="#d97706" stroke="#78350f" />
      <path d="M262,176 C262,166 266,160 272,156" stroke="#16a34a" strokeWidth="2" fill="none" />
      <path d="M262,188 L258,200 M262,188 L268,198" stroke="#92400e" strokeWidth="1.5" />
    </g>
  ),
  parts: [
    P(160, 196, t("Root", "Արմատ", "Корень"), t("Holds the plant in the soil and takes in water with dissolved minerals. The roots of a tree can spread wider than its crown.", "Պահում է բույսը հողում և կլանում է ջուրը՝ լուծված հանքային նյութերով։ Ծառի արմատները կարող են տարածվել ավելի լայն, քան նրա սաղարթը։", "Держит растение в почве и всасывает воду с растворёнными солями. Корни дерева могут раскинуться шире кроны.")),
    P(150, 140, t("Stem", "Ցողուն", "Стебель"), t("Holds up the leaves and flowers towards the light and carries water up and food down, like a set of tiny pipes.", "Պահում է տերևներն ու ծաղիկները դեպի լույսը և ջուրը տանում է վերև, իսկ սնունդը՝ ներքև, ինչպես մանրիկ խողովակների համակարգ։", "Держит листья и цветки ближе к свету и ведёт воду вверх, а пищу вниз, как набор крошечных трубочек.")),
    P(126, 116, t("Leaf", "Տերև", "Лист"), t("The plant's kitchen: using sunlight, water and carbon dioxide from the air it makes sugar and gives off oxygen.", "Բույսի խոհանոցը. արևի լույսի, ջրի և օդի ածխաթթու գազի օգնությամբ այն շաքար է պատրաստում և թթվածին արտազատում։", "Кухня растения: с помощью солнечного света, воды и углекислого газа из воздуха он делает сахар и выделяет кислород.")),
    P(186, 30, t("Flower", "Ծաղիկ", "Цветок"), t("Bright colours and sweet nectar attract bees and butterflies. They carry pollen from flower to flower, and then fruit can grow.", "Վառ գույներն ու քաղցր նեկտարը գրավում են մեղուներին և թիթեռներին։ Նրանք ծաղկափոշին տանում են ծաղկից ծաղիկ, և հետո կարող է պտուղ աճել։", "Яркие цвета и сладкий нектар привлекают пчёл и бабочек. Они переносят пыльцу с цветка на цветок, и тогда может вырасти плод.")),
    P(232, 108, t("Fruit", "Պտուղ", "Плод"), t("It grows from the flower and protects the seeds. Animals that eat tasty fruit often carry the seeds far away.", "Աճում է ծաղկից և պաշտպանում սերմերը։ Համեղ պտուղ ուտող կենդանիները հաճախ սերմերը տանում են հեռու։", "Вырастает из цветка и защищает семена. Животные, которые едят вкусные плоды, часто уносят семена далеко.")),
    P(286, 182, t("Seed", "Սերմ", "Семя"), t("A baby plant with a store of food, packed in a coat. With water, warmth and air it sprouts: first a root goes down, then a shoot goes up.", "Փոքրիկ բույս՝ սննդի պաշարով, փաթաթված պատյանի մեջ։ Ջրի, ջերմության և օդի առկայությամբ այն ծլում է. նախ արմատն է իջնում ներքև, ապա ծիլը բարձրանում է վերև։", "Маленькое растение с запасом пищи, упакованное в оболочку. При воде, тепле и воздухе оно прорастает: сначала вниз идёт корешок, потом вверх — росток.")),
  ],
};

/* ---------------- soil ---------------- */

const soil: Diagram = {
  title: t("What is in the soil", "Ինչ կա հողում", "Что есть в почве"),
  draw: () => (
    <g>
      <rect x="20" y="10" width="280" height="200" rx="8" fill="#fbfcff" />
      <rect x="20" y="40" width="280" height="56" fill="#57361b" />
      <rect x="20" y="96" width="280" height="58" fill="#c08a52" />
      <rect x="20" y="154" width="280" height="56" fill="#94a3b8" />
      {[[40, 170, 50], [100, 182, 60], [170, 166, 54], [236, 180, 56]].map(([x, y, w], k) => <rect key={k} x={x} y={y} width={w} height="18" rx="6" fill="#64748b" stroke="#475569" />)}
      {[...Array(40)].map((_, k) => <circle key={k} cx={28 + ((k * 53) % 264)} cy={102 + ((k * 29) % 48)} r="1.6" fill="#fde68a" />)}
      {/* grass and roots */}
      {[...Array(24)].map((_, k) => <path key={k} d={`M${26 + k * 11.5},40 l-3,-12 M${26 + k * 11.5},40 l3,-10`} stroke="#16a34a" strokeWidth="1.6" />)}
      <path d="M70,40 L70,80 M70,58 L56,74 M70,62 L84,78 M210,40 L210,104 M210,66 L194,88 M210,72 L228,94" stroke="#fef3c7" strokeWidth="1.4" fill="none" />
      {/* earthworm and its tunnel */}
      <path d="M118,48 C130,70 150,60 160,82 C166,96 180,92 188,100" stroke="#3b2412" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M140,66 C148,72 156,74 162,84" stroke="#f472b6" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* air and water */}
      {[[250, 56], [262, 70], [244, 80], [270, 86]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="3.5" fill="#f8fafc" opacity="0.85" />)}
      {[[40, 64], [48, 78], [34, 86]].map(([x, y], k) => <path key={k} d={`M${x},${y - 4} q4,6 0,8 q-4,-2 0,-8 Z`} fill="#38bdf8" />)}
    </g>
  ),
  parts: [
    P(110, 24, t("Plants", "Բույսեր", "Растения"), t("Their roots hold the soil together, so wind and rain cannot carry it away. Where forests are cut down, soil is often washed off the slopes.", "Նրանց արմատները պահում են հողը, որպեսզի քամին և անձրևը չտանեն այն։ Որտեղ անտառները հատվում են, հողը հաճախ լվացվում է լանջերից։", "Их корни скрепляют почву, и ветер с дождём не могут её унести. Где вырубают леса, почву часто смывает со склонов.")),
    P(96, 84, t("Humus", "Հումուս", "Перегной"), t("The dark top layer: rotted leaves, roots and animals turned into food for plants. The darker the soil, usually the more fertile it is.", "Մուգ վերին շերտը՝ փտած տերևներ, արմատներ և կենդանիներ, որոնք դարձել են սնունդ բույսերի համար։ Որքան մուգ է հողը, սովորաբար այնքան բերրի է։", "Тёмный верхний слой: перегнившие листья, корни и животные, ставшие пищей для растений. Чем темнее почва, тем она обычно плодороднее.")),
    P(150, 60, t("Earthworm", "Անձրևորդ", "Дождевой червь"), t("It swallows soil with bits of dead leaves and leaves behind rich, crumbly soil. Its tunnels let in air and rainwater. Charles Darwin spent years studying earthworms.", "Այն կուլ է տալիս հողը մեռած տերևների կտորների հետ և թողնում հարուստ, փխրուն հող։ Նրա թունելներով ներս են թափանցում օդը և անձրևաջուրը։ Չարլզ Դարվինը տարիներ է նվիրել անձրևորդների ուսումնասիրությանը։", "Он заглатывает землю с кусочками опавших листьев и оставляет после себя рыхлую плодородную почву. По его ходам внутрь проникают воздух и дождевая вода. Чарлз Дарвин годами изучал дождевых червей.")),
    P(256, 72, t("Air and water", "Օդ և ջուր", "Воздух и вода"), t("Good soil is about half solid bits and half gaps filled with air and water. Roots need both: in waterlogged soil they cannot breathe.", "Լավ հողը մոտավորապես կեսով պինդ մասնիկներ է, կեսով՝ օդով և ջրով լցված բացեր։ Արմատներին պետք են երկուսն էլ. ջրով լցված հողում նրանք չեն կարող շնչել։", "Хорошая почва — примерно наполовину твёрдые частицы и наполовину промежутки с воздухом и водой. Корням нужно и то и другое: в залитой почве они не могут дышать.")),
    P(160, 130, t("Sand and clay", "Ավազ և կավ", "Песок и глина"), t("Tiny bits of broken rock. Sand lets water run through quickly; clay holds it and becomes sticky. A mix of both is best for plants.", "Ջարդված ապարի մանր մասնիկներ։ Ավազը ջուրն արագ անցկացնում է, կավը պահում է այն և դառնում կպչուն։ Բույսերի համար լավագույնը երկուսի խառնուրդն է։", "Мелкие частицы раздробленных пород. Песок быстро пропускает воду, глина удерживает её и становится липкой. Растениям лучше всего смесь того и другого.")),
    P(160, 196, t("Rock", "Ապար", "Горная порода"), t("Deep down is solid rock. Over thousands of years heat, frost, water and roots break it up, and slowly new soil forms.", "Խորքում պինդ ապարն է։ Հազարավոր տարիների ընթացքում ջերմությունը, սառնամանիքը, ջուրը և արմատները մանրացնում են այն, և դանդաղ նոր հող է առաջանում։", "Глубже — сплошная порода. За тысячи лет жара, мороз, вода и корни разрушают её, и медленно образуется новая почва.")),
  ],
};

/* ---------------- layers of a forest ---------------- */

const forest: Diagram = {
  title: t("The layers of a forest", "Անտառի հարկերը", "Ярусы леса"),
  draw: () => (
    <g>
      <rect x="0" y="0" width="320" height="196" fill="#ecfeff" />
      <rect x="0" y="196" width="320" height="24" fill="#a16207" opacity="0.45" />
      {/* tall tree */}
      <rect x="62" y="70" width="16" height="128" fill="#78350f" />
      <circle cx="70" cy="50" r="40" fill="#15803d" />
      <circle cx="44" cy="70" r="24" fill="#16a34a" />
      <circle cx="98" cy="68" r="26" fill="#16a34a" />
      {/* woodpecker */}
      <path d="M80,120 q8,-6 10,4 q-2,8 -10,6 Z" fill="#1e293b" />
      <circle cx="88" cy="118" r="2.5" fill="#dc2626" />
      <path d="M90,121 l6,1" stroke="#a16207" strokeWidth="1.5" />
      {/* second tall tree */}
      <rect x="262" y="84" width="12" height="114" fill="#78350f" />
      <path d="M268,20 L298,96 L238,96 Z" fill="#166534" />
      {/* low trees and bushes */}
      <rect x="156" y="140" width="8" height="58" fill="#92400e" />
      <circle cx="160" cy="128" r="22" fill="#4ade80" />
      <circle cx="200" cy="176" r="18" fill="#22c55e" />
      <circle cx="218" cy="182" r="14" fill="#16a34a" />
      {[[196, 170], [206, 182], [214, 172]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="2.5" fill="#7c3aed" />)}
      {/* herbs and flowers */}
      {[112, 124, 136].map((x, k) => <g key={k}><path d={`M${x},198 l0,-16`} stroke="#16a34a" strokeWidth="1.5" /><circle cx={x} cy={180} r="3.5" fill={["#f8fafc", "#facc15", "#f8fafc"][k]} /></g>)}
      <path d="M236,198 c-2,-10 4,-18 10,-20 c-4,6 -4,14 -2,20 Z" fill="#65a30d" />
      {/* ground: moss, leaves, a mushroom */}
      <ellipse cx="30" cy="198" rx="22" ry="5" fill="#4d7c0f" />
      <path d="M176,198 v-8" stroke="#fef3c7" strokeWidth="4" />
      <path d="M168,191 q8,-12 16,0 Z" fill="#dc2626" />
      <circle cx="173" cy="188" r="1.3" fill="#fff" />
      <circle cx="179" cy="189" r="1.3" fill="#fff" />
      {[[100, 204], [140, 208], [290, 206]].map(([x, y], k) => <ellipse key={k} cx={x} cy={y} rx="6" ry="2.5" fill="#d97706" />)}
    </g>
  ),
  parts: [
    P(70, 30, t("Tall trees", "Բարձր ծառեր", "Высокие деревья"), t("Oak, beech and hornbeam form the top layer. Their crowns catch most of the sunlight, so it is shady below.", "Կաղնին, հաճարենին և բոխին կազմում են վերին հարկը։ Նրանց սաղարթները որսում են արևի լույսի մեծ մասը, ուստի ներքևում ստվեր է։", "Дуб, бук и граб образуют верхний ярус. Их кроны ловят большую часть солнечного света, поэтому внизу тень.")),
    P(104, 122, t("Woodpecker", "Փայտփորիկ", "Дятел"), t("It drums on the bark to find insects hiding in the wood. Old trees with holes are homes for owls, squirrels and bats.", "Այն թակում է կեղևը՝ փայտի մեջ թաքնված միջատներին գտնելու համար։ Փչակներով ծեր ծառերը տուն են բվերի, սկյուռների և չղջիկների համար։", "Он стучит по коре, чтобы найти насекомых в древесине. Старые деревья с дуплами — дом для сов, белок и летучих мышей.")),
    P(160, 108, t("Low trees and bushes", "Ցածր ծառեր և թփեր", "Низкие деревья и кусты"), t("Hazel, hawthorn and blackberry grow in the half-shade. Their berries and nuts feed birds, bears and mice.", "Կիսաստվերում աճում են պնդուկենին, ալոճենին և մոշենին։ Նրանց հատապտուղներն ու ընկույզները սնունդ են թռչունների, արջերի և մկների համար։", "В полутени растут лещина, боярышник и ежевика. Их ягоды и орехи кормят птиц, медведей и мышей.")),
    P(124, 160, t("Herbs and flowers", "Խոտեր և ծաղիկներ", "Травы и цветы"), t("Snowdrops and other spring flowers bloom early, before the trees grow their leaves and shade the ground.", "Ձնծաղիկները և գարնանային այլ ծաղիկներ ծաղկում են վաղ, նախքան ծառերը տերևակալեն և ստվեր գցեն գետնին։", "Подснежники и другие весенние цветы распускаются рано, пока деревья не покрылись листвой и не затенили землю.")),
    P(196, 206, t("The ground layer", "Գետնի հարկը", "Нижний ярус"), t("Moss, fallen leaves and mushrooms. Fungi, earthworms and bacteria turn the dead leaves into humus that feeds the trees again.", "Մամուռ, թափված տերևներ և սնկեր։ Սնկերը, անձրևորդները և մանրէները մեռած տերևները վերածում են հումուսի, որը կրկին սնում է ծառերին։", "Мох, опавшие листья и грибы. Грибы, черви и бактерии превращают опавшие листья в перегной, который снова кормит деревья.")),
  ],
};

/* ---------------- the skeleton ---------------- */

const BONE = "#f8fafc", BONE_LINE = "#64748b";
const bone = (x1: number, y1: number, x2: number, y2: number, w = 6) => (
  <g>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={BONE_LINE} strokeWidth={w + 2} strokeLinecap="round" />
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={BONE} strokeWidth={w} strokeLinecap="round" />
  </g>
);

const skeleton: Diagram = {
  title: t("The skeleton", "Կմախքը", "Скелет"),
  draw: () => (
    <g>
      {/* arms */}
      {bone(136, 60, 120, 104)}
      {bone(120, 104, 112, 144, 5)}
      {bone(184, 60, 200, 104)}
      {bone(200, 104, 208, 144, 5)}
      <circle cx="120" cy="104" r="4" fill="#f59e0b" />
      <circle cx="200" cy="104" r="4" fill="#f59e0b" />
      {/* legs */}
      {bone(148, 146, 144, 188, 7)}
      {bone(144, 188, 142, 212, 5)}
      {bone(172, 146, 176, 188, 7)}
      {bone(176, 188, 178, 212, 5)}
      <circle cx="144" cy="188" r="4.5" fill="#f59e0b" />
      <circle cx="176" cy="188" r="4.5" fill="#f59e0b" />
      {/* shoulders and pelvis */}
      {bone(134, 58, 186, 58, 5)}
      <path d="M138,132 C146,124 174,124 182,132 L178,148 C170,142 150,142 142,148 Z" fill={BONE} stroke={BONE_LINE} strokeWidth="1.5" />
      {/* ribs */}
      {[66, 76, 86, 96, 106].map((y, k) => <path key={y} d={`M160,${y} C${140 - k},${y - 2} ${136 - k},${y + 8} ${144},${y + 12} M160,${y} C${180 + k},${y - 2} ${184 + k},${y + 8} ${176},${y + 12}`} fill="none" stroke={BONE_LINE} strokeWidth="3.5" />)}
      {/* spine */}
      {[...Array(10)].map((_, k) => <rect key={k} x="156" y={50 + k * 8} width="8" height="6" rx="2" fill={BONE} stroke={BONE_LINE} />)}
      {/* skull */}
      <ellipse cx="160" cy="28" rx="17" ry="19" fill={BONE} stroke={BONE_LINE} strokeWidth="1.5" />
      <ellipse cx="154" cy="27" rx="4" ry="5" fill="#334155" />
      <ellipse cx="166" cy="27" rx="4" ry="5" fill="#334155" />
      <path d="M155,40 h10" stroke={BONE_LINE} strokeWidth="2" />
      {lead(176, 30, 212, 30)}
    </g>
  ),
  parts: [
    P(160, 12, t("Skull", "Գանգ", "Череп"), t("A strong helmet of bone around the brain. A baby's skull has soft gaps between its bones, so the head can grow.", "Գլխուղեղի շուրջ ոսկրե ամուր սաղավարտ։ Նորածնի գանգի ոսկրերի միջև փափուկ բացեր կան, որպեսզի գլուխը կարողանա աճել։", "Прочный костяной шлем вокруг мозга. У малыша между костями черепа есть мягкие промежутки, чтобы голова могла расти.")),
    P(220, 30, t("The smallest bones", "Ամենափոքր ոսկրերը", "Самые маленькие кости"), t("Three tiny bones inside each ear pass sound to the inner ear. The smallest, the stirrup, is about the size of a grain of rice.", "Յուրաքանչյուր ականջի մեջ երեք մանրիկ ոսկրիկ ձայնը փոխանցում են ներքին ականջին։ Ամենափոքրը՝ ասպանդակը, բրնձի հատիկի չափ է։", "Три крошечные косточки в каждом ухе передают звук во внутреннее ухо. Самая маленькая, стремечко, размером с рисовое зёрнышко.")),
    P(196, 82, t("Ribs", "Կողեր", "Рёбра"), t("Twelve pairs of ribs form a cage that protects the heart and lungs and rises every time we breathe in.", "Տասներկու զույգ կողերը կազմում են վանդակ, որը պաշտպանում է սիրտն ու թոքերը և բարձրանում է ամեն ներշնչելիս։", "Двенадцать пар рёбер образуют клетку, которая защищает сердце и лёгкие и поднимается при каждом вдохе.")),
    P(160, 120, t("Spine", "Ողնաշար", "Позвоночник"), t("A column of 33–34 small bones, the vertebrae, with soft discs between them. It bends, but protects the spinal cord inside.", "33–34 փոքր ոսկրերից՝ ողերից կազմված սյուն, որոնց միջև փափուկ սկավառակներ կան։ Այն ծռվում է, բայց պաշտպանում է ներսում գտնվող ողնուղեղը։", "Столб из 33–34 маленьких костей — позвонков, с мягкими дисками между ними. Он гнётся, но защищает спинной мозг внутри.")),
    P(100, 104, t("Elbow: a joint", "Արմունկ՝ հոդ", "Локоть — сустав"), t("Joints are where bones meet and move. The elbow and knee bend one way, like a door hinge; the shoulder can turn in a circle.", "Հոդերն այն տեղերն են, որտեղ ոսկրերը հանդիպում և շարժվում են։ Արմունկն ու ծունկը ծալվում են մեկ ուղղությամբ, ինչպես դռան ծխնին, իսկ ուսը կարող է շրջանաձև պտտվել։", "Суставы — места, где кости встречаются и двигаются. Локоть и колено сгибаются в одну сторону, как дверная петля, а плечо может вращаться по кругу.")),
    P(126, 166, t("Thigh bone", "Ազդրոսկր", "Бедренная кость"), t("The longest and one of the strongest bones: about a quarter of a person's height.", "Ամենաերկար և ամենաամուր ոսկրերից մեկը. մարդու հասակի մոտ մեկ քառորդը։", "Самая длинная и одна из самых прочных костей: около четверти роста человека.")),
    P(194, 188, t("Knee", "Ծունկ", "Колено"), t("The biggest joint of the body. A small bone, the kneecap, protects it in front.", "Մարմնի ամենամեծ հոդը։ Առջևից այն պաշտպանում է փոքր ոսկրը՝ ծնկոսկրը։", "Самый большой сустав тела. Спереди его защищает маленькая кость — надколенник.")),
  ],
};

/* ---------------- the compass and the Sun ---------------- */

const CX = 160, CY = 116, CR = 64;
const sunIcon = (x: number, y: number) => (
  <g>
    <circle cx={x} cy={y} r="9" fill="#facc15" />
    {[0, 60, 120, 180, 240, 300].map((a) => <line key={a} x1={x + 12 * Math.cos((a * Math.PI) / 180)} y1={y + 12 * Math.sin((a * Math.PI) / 180)} x2={x + 16 * Math.cos((a * Math.PI) / 180)} y2={y + 16 * Math.sin((a * Math.PI) / 180)} stroke="#f59e0b" strokeWidth="2" />)}
  </g>
);

const compass: Diagram = {
  title: t("Finding the directions", "Ինչպես գտնել կողմնորոշման ուղղությունները", "Как найти стороны горизонта"),
  draw: (lang) => (
    <g>
      <circle cx={CX} cy={CY} r={CR} fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => <line key={a} x1={CX + (CR - 8) * Math.sin((a * Math.PI) / 180)} y1={CY - (CR - 8) * Math.cos((a * Math.PI) / 180)} x2={CX + CR * Math.sin((a * Math.PI) / 180)} y2={CY - CR * Math.cos((a * Math.PI) / 180)} stroke="#334155" strokeWidth={a % 90 ? 1 : 2} />)}
      <path d={`M${CX},${CY - 48} L${CX + 8},${CY} L${CX - 8},${CY} Z`} fill="#dc2626" />
      <path d={`M${CX},${CY + 48} L${CX + 8},${CY} L${CX - 8},${CY} Z`} fill="#94a3b8" />
      <circle cx={CX} cy={CY} r="4" fill="#1e293b" />
      {(
        [
          [CX, CY - CR + 20, t("N", "Հս", "С")],
          [CX + CR - 18, CY + 4, t("E", "Ա", "В")],
          [CX, CY + CR - 12, t("S", "Հվ", "Ю")],
          [CX - CR + 18, CY + 4, t("W", "Ամ", "З")],
        ] as const
      ).map(([x, y, l], k) => <text key={k} x={x} y={y} textAnchor="middle" fontSize="11" fontWeight="900" fill={k === 0 ? "#dc2626" : "#334155"}>{L(l, lang)}</text>)}
      {sunIcon(CX + CR + 36, CY)}
      {sunIcon(CX, CY + CR + 26)}
      {sunIcon(CX - CR - 36, CY)}
      <path d={`M${CX},12 l3,7 l7,1 l-5,5 l1,7 l-6,-3 l-6,3 l1,-7 l-5,-5 l7,-1 Z`} fill="#fde047" stroke="#ca8a04" />
    </g>
  ),
  parts: [
    P(CX + 16, CY - 34, t("Compass needle", "Կողմնացույցի սլաք", "Стрелка компаса"), t("A magnetised needle that turns until its coloured end points north, because the Earth is a giant magnet. Keep it away from iron and phones.", "Մագնիսացված սլաք, որը պտտվում է այնքան, մինչև նրա գունավոր ծայրը ցույց տա հյուսիսը, որովհետև Երկիրը հսկա մագնիս է։ Հեռու պահիր այն երկաթից և հեռախոսներից։", "Намагниченная стрелка поворачивается, пока её окрашенный конец не укажет на север: Земля — огромный магнит. Держи компас подальше от железа и телефонов.")),
    P(CX + CR + 36, CY + 24, t("Morning Sun: east", "Առավոտյան Արեգակ՝ արևելք", "Утреннее Солнце: восток"), t("The Sun rises in the east. Stand with your right hand towards the sunrise and you are facing north.", "Արեգակը ծագում է արևելքում։ Կանգնիր այնպես, որ աջ ձեռքդ լինի դեպի արևածագը, և դու կնայես հյուսիս։", "Солнце восходит на востоке. Встань так, чтобы правая рука была к восходу, — и ты смотришь на север.")),
    P(CX + 28, CY + CR + 26, t("Midday Sun: south", "Կեսօրվա Արեգակ՝ հարավ", "Полуденное Солнце: юг"), t("In Armenia the midday Sun is always in the south, so at midday your shadow points north.", "Հայաստանում կեսօրվա Արեգակը միշտ հարավում է, ուստի կեսօրին ստվերդ ցույց է տալիս հյուսիսը։", "В Армении полуденное Солнце всегда на юге, поэтому в полдень твоя тень указывает на север.")),
    P(CX - CR - 36, CY + 24, t("Evening Sun: west", "Երեկոյան Արեգակ՝ արևմուտք", "Вечернее Солнце: запад"), t("The Sun sets in the west. In summer it rises and sets a little to the north of east and west, in winter a little to the south.", "Արեգակը մայր է մտնում արևմուտքում։ Ամռանը այն ծագում և մայր է մտնում արևելքից ու արևմուտքից մի փոքր հյուսիս, ձմռանը՝ մի փոքր հարավ։", "Солнце садится на западе. Летом оно восходит и заходит немного севернее востока и запада, зимой — немного южнее.")),
    P(CX + 24, 22, t("Pole Star", "Բևեռային աստղ", "Полярная звезда"), t("The one star that hardly moves across the night sky, because it lies almost exactly above the North Pole. Find it from the two end stars of the Great Bear.", "Միակ աստղը, որը գիշերային երկնքում գրեթե չի շարժվում, որովհետև գտնվում է գրեթե ուղիղ Հյուսիսային բևեռի վերևում։ Գտիր այն Մեծ Արջի երկու ծայրային աստղերի օգնությամբ։", "Единственная звезда, которая почти не движется по ночному небу: она стоит почти точно над Северным полюсом. Найди её по двум крайним звёздам Большой Медведицы.")),
  ],
};

export const DIAGRAMS: Record<string, Diagram> = { body, crossing, plant, soil, forest, skeleton, compass };
