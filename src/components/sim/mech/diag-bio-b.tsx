"use client";

import { t } from "../labels";
import type { Diagram } from "./types";

/* More labelled biology pictures: spore plants, invertebrates, birds, the skeleton, glands, evolution. */

const P = (x: number, y: number, name: ReturnType<typeof t>, text: ReturnType<typeof t>) => ({ x, y, name, text });

const fern: Diagram = {
  title: t("A fern", "Պտեր", "Папоротник"),
  draw: () => (
    <g>
      <rect x="0" y="168" width="320" height="52" fill="#a16207" opacity="0.35" />
      <path d="M70,176 C120,170 200,172 260,178" fill="none" stroke="#78350f" strokeWidth="9" strokeLinecap="round" />
      {[90, 130, 170, 210, 245].map((x) => <path key={x} d={`M${x},180 q-6,16 -2,30 M${x},180 q8,14 10,26`} fill="none" stroke="#92400e" strokeWidth="1.5" />)}
      {[[110, -30], [160, 0], [210, 28]].map(([x, a], k) => (
        <g key={k} transform={`rotate(${a} ${x} 174)`}>
          <path d={`M${x},174 Q${x - 6},100 ${x + 4},30`} fill="none" stroke="#15803d" strokeWidth="3" />
          {Array.from({ length: 9 }, (_, j) => {
            const y = 150 - j * 13, len = 34 - j * 3;
            return (
              <g key={j}>
                <path d={`M${x - 2},${y} q-${len / 2},-8 -${len},-2 q${len / 2},8 ${len},2 Z`} fill="#4ade80" stroke="#15803d" strokeWidth="0.8" />
                <path d={`M${x},${y} q${len / 2},-8 ${len},-2 q-${len / 2},8 -${len},2 Z`} fill="#4ade80" stroke="#15803d" strokeWidth="0.8" />
              </g>
            );
          })}
        </g>
      ))}
      <path d="M262,176 q-4,-30 8,-40 q12,-8 14,6 q2,10 -8,10 q-6,0 -6,-6" fill="none" stroke="#15803d" strokeWidth="3" />
      <g transform="translate(18 18)">
        <rect width="70" height="44" rx="8" fill="#fff" stroke="#15803d" />
        <path d="M6,30 q30,-22 58,0" fill="#86efac" stroke="#15803d" />
        {[16, 30, 44, 56].map((x) => <circle key={x} cx={x} cy={30} r="4" fill="#a16207" />)}
      </g>
    </g>
  ),
  parts: [
    P(170, 60, t("Frond (leaf)", "Վայի (տերև)", "Вайя (лист)"), t("A big divided leaf. Unlike mosses, ferns have real leaves, a stem and roots with vessels inside.", "Մեծ մասնատված տերև։ Ի տարբերություն մամուռների՝ պտերներն ունեն իսկական տերևներ, ցողուն և արմատներ՝ ներսում անոթներով։", "Крупный рассечённый лист. В отличие от мхов, у папоротников есть настоящие листья, стебель и корни с сосудами внутри.")),
    P(53, 48, t("Sori with spores", "Սպորանոցների խմբեր", "Сорусы со спорами"), t("Brown dots on the underside of a leaf: clusters of sporangia. One plant can shed millions of dust-like spores.", "Տերևի ստորին կողմի դարչնագույն կետերը սպորանոցների խմբեր են։ Մեկ բույսը կարող է ցրել միլիոնավոր փոշենման սպորներ։", "Бурые точки на нижней стороне листа — группы спорангиев. Одно растение рассеивает миллионы пылевидных спор.")),
    P(150, 176, t("Rhizome", "Կոճղարմատ", "Корневище"), t("An underground stem that creeps sideways and sends up new leaves each spring.", "Ստորգետնյա ցողուն, որը սողում է կողք և ամեն գարուն նոր տերևներ է արձակում։", "Подземный стебель, который стелется вбок и каждую весну выпускает новые листья.")),
    P(132, 200, t("Roots", "Արմատներ", "Корни"), t("Adventitious roots grow from the rhizome and draw up water and minerals.", "Կոճղարմատից աճում են հավելյալ արմատներ, որոնք ներծծում են ջուր և հանքային աղեր։", "От корневища отходят придаточные корни, которые всасывают воду и соли.")),
    P(276, 134, t("Fiddlehead", "Ոլորված երիտասարդ տերև", "Молодой закрученный лист"), t("A young leaf grows rolled up like a snail and unrolls from the bottom up.", "Երիտասարդ տերևը աճում է խխունջի պես ոլորված և բացվում ներքևից վերև։", "Молодой лист растёт свёрнутым, как улитка, и разворачивается снизу вверх.")),
  ],
};

const hydra: Diagram = {
  title: t("The freshwater hydra", "Քաղցրահամ ջրի հիդրա", "Пресноводная гидра"),
  draw: () => (
    <g>
      <rect width="320" height="220" fill="#e0f2fe" />
      {[-60, -30, 0, 30, 60].map((a) => <path key={a} d={`M150,62 q${a},-30 ${a * 1.4},-50`} fill="none" stroke="#65a30d" strokeWidth="4" strokeLinecap="round" />)}
      {[-60, -30, 0, 30, 60].map((a) => [0.3, 0.6, 0.85].map((k) => <circle key={`${a}${k}`} cx={150 + a * 1.4 * k} cy={62 - 50 * k + (a ? Math.abs(a) / 6 * (1 - k) : 0)} r="2.2" fill="#facc15" />))}
      <path d="M128,64 C128,64 120,150 138,196 L162,196 C180,150 172,64 172,64 Z" fill="#bef264" stroke="#4d7c0f" strokeWidth="5" />
      <path d="M136,68 C134,120 140,170 146,190 L154,190 C160,170 166,120 164,68 Z" fill="#fef9c3" />
      <path d="M172,130 q30,-6 34,-34 M206,96 q-14,-12 -6,-22 M206,96 q16,-10 12,-24" fill="none" stroke="#4d7c0f" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="150" cy="200" rx="22" ry="6" fill="#65a30d" />
      <rect x="0" y="204" width="320" height="16" fill="#a8a29e" />
    </g>
  ),
  parts: [
    P(108, 26, t("Tentacles", "Շոշափուկներ", "Щупальца"), t("Catch small water animals such as water fleas and push them into the mouth.", "Բռնում են ջրային մանր կենդանիներին, օրինակ՝ դաֆնիաներին, և հրում բերանը։", "Ловят мелких водных животных, например дафний, и проталкивают в рот.")),
    P(186, 30, t("Stinging cells", "Խայթող բջիջներ", "Стрекательные клетки"), t("Each holds a coiled thread with poison that shoots out when touched and paralyses the prey.", "Յուրաքանչյուրում կա թույնով ոլորված թել, որը հպվելիս դուրս է նետվում և անդամալուծում որսին։", "В каждой свёрнута нить с ядом; при касании она выстреливает и парализует добычу.")),
    P(150, 68, t("Mouth", "Բերան", "Рот"), t("The only opening: food goes in and undigested remains come out the same way.", "Միակ անցքը․ սնունդը ներս է մտնում, իսկ չմարսված մնացորդները դուրս են գալիս նույն ճանապարհով։", "Единственное отверстие: через него входит пища и выходят непереваренные остатки.")),
    P(150, 130, t("Gut cavity", "Աղիքային խոռոչ", "Кишечная полость"), t("Food is digested here by the inner layer of cells (endoderm).", "Այստեղ սնունդը մարսվում է բջիջների ներքին շերտով (էնտոդերմ)։", "Здесь пищу переваривает внутренний слой клеток (энтодерма).")),
    P(124, 168, t("Two layers of cells", "Բջիջների երկու շերտ", "Два слоя клеток"), t("The outer ectoderm protects and senses; the inner endoderm digests. Hydra has no organs, only these two layers.", "Արտաքին էկտոդերմը պաշտպանում և զգում է, ներքին էնտոդերմը մարսում է։ Հիդրան օրգաններ չունի, միայն այս երկու շերտը։", "Наружная эктодерма защищает и чувствует, внутренняя энтодерма переваривает. Органов у гидры нет, только эти два слоя.")),
    P(212, 82, t("Bud", "Բողբոջ", "Почка"), t("A small hydra grows out of the side, then breaks off: asexual reproduction by budding.", "Կողքից աճում է փոքրիկ հիդրա, որն այնուհետև պոկվում է․ անսեռ բազմացում բողբոջմամբ։", "Сбоку вырастает маленькая гидра и потом отрывается: бесполое размножение почкованием.")),
    P(150, 200, t("Foot (sole)", "Ներբան", "Подошва"), t("Sticks to a water plant or stone. Hydra can also move slowly by somersaulting.", "Կպչում է ջրային բույսին կամ քարին։ Հիդրան կարող է նաև դանդաղ շարժվել՝ գլուխկոնծի տալով։", "Прикрепляется к растению или камню. Гидра может и медленно перемещаться «кувырками».")),
  ],
};

const snail: Diagram = {
  title: t("The Roman snail", "Խաղողի խխունջ", "Виноградная улитка"),
  draw: () => (
    <g>
      <path d="M30,180 C60,160 200,150 290,176 L290,186 L30,186 Z" fill="#d6d3d1" stroke="#78716c" strokeWidth="2" />
      <path d="M210,160 C230,140 248,120 250,96 M224,152 C240,140 262,128 270,110" fill="none" stroke="#a8a29e" strokeWidth="6" strokeLinecap="round" />
      <circle cx="250" cy="94" r="4" fill="#1e293b" />
      <circle cx="270" cy="108" r="4" fill="#1e293b" />
      <path d="M232,168 l14,-10 M240,170 l16,-6" stroke="#a8a29e" strokeWidth="4" strokeLinecap="round" />
      <circle cx="130" cy="110" r="64" fill="#fcd34d" stroke="#92400e" strokeWidth="3" />
      <path d="M130,110 m-46,0 a46,46 0 1,1 92,0 a34,34 0 1,1 -68,0 a22,22 0 1,1 44,0 a10,10 0 1,1 -20,0" fill="none" stroke="#92400e" strokeWidth="3" />
      <path d="M70,160 C110,168 160,172 200,166" fill="none" stroke="#fbbf24" strokeWidth="6" />
      <circle cx="180" cy="152" r="5" fill="#57534e" />
    </g>
  ),
  parts: [
    P(130, 70, t("Shell", "Խեցի", "Раковина"), t("A spiral of chalk (calcium carbonate) made by the mantle. It grows with the snail and is never shed.", "Կավճից (կալցիումի կարբոնատից) պարույր, որը ստեղծում է թիկնոցը։ Աճում է խխունջի հետ և երբեք չի թափվում։", "Спираль из мела (карбоната кальция), которую строит мантия. Растёт вместе с улиткой и никогда не сбрасывается.")),
    P(84, 162, t("Mantle", "Թիկնոց", "Мантия"), t("A fold of skin that lines the shell and builds it. In bivalves it also makes mother-of-pearl and pearls.", "Մաշկի ծալք, որը պատում է խեցին և կառուցում այն։ Երկփեղկանիների մոտ այն ստեղծում է նաև սադափ և մարգարիտ։", "Складка кожи, выстилающая раковину и строящая её. У двустворчатых она делает и перламутр, и жемчуг.")),
    P(180, 152, t("Breathing hole", "Շնչառական անցք", "Дыхательное отверстие"), t("Opens into a lung: land snails breathe air, while water snails breathe with gills or come up for air.", "Բացվում է թոքի մեջ․ ցամաքային խխունջները շնչում են օդով, իսկ ջրայինները՝ խռիկներով կամ բարձրանում են օդ վերցնելու։", "Ведёт в лёгкое: наземные улитки дышат воздухом, а водные — жабрами или поднимаются за воздухом.")),
    P(262, 90, t("Eyes on tentacles", "Աչքեր շոշափուկների վրա", "Глаза на щупальцах"), t("The long upper pair carries the eyes; the short lower pair is for touch and smell. Touch them and they pull in.", "Վերևի երկար զույգը կրում է աչքերը, ներքևի կարճ զույգը՝ հպման և հոտառության համար է։ Հպվելիս դրանք ներս են քաշվում։", "На длинной верхней паре глаза, короткая нижняя — для осязания и обоняния. Тронь их — и они втянутся.")),
    P(256, 170, t("Mouth with radula", "Բերան՝ ռադուլայով", "Рот с радулой"), t("The radula is a tongue covered with thousands of tiny teeth that scrape leaves like a grater.", "Ռադուլան հազարավոր մանր ատամներով ծածկված լեզու է, որը քերում է տերևները քերիչի պես։", "Радула — язык, покрытый тысячами мелких зубчиков, который скоблит листья, как тёрка.")),
    P(150, 182, t("Foot", "Ոտք", "Нога"), t("One wide muscle that glides on a film of slime, in waves you can see from below through glass.", "Մեկ լայն մկան, որը սահում է լորձի շերտի վրա ալիքներով, որոնք երևում են ապակու միջով ներքևից։", "Одна широкая мышца скользит по слою слизи волнами, их видно снизу через стекло.")),
  ],
};

const spider: Diagram = {
  title: t("The body of a spider", "Սարդի մարմինը", "Тело паука"),
  draw: () => (
    <g>
      {[-1, 1].map((s) => [0, 1, 2, 3].map((k) => {
        const y = 92 + k * 10;
        return <path key={`${s}${k}`} d={`M${130 + s * 10},${y} q${s * 40},${-26 + k * 16} ${s * (70 + k * 4)},${-4 + k * 30} l${s * 16},${26}`} fill="none" stroke="#44403c" strokeWidth="4" strokeLinecap="round" />;
      }))}
      <ellipse cx="130" cy="106" rx="30" ry="26" fill="#78716c" stroke="#292524" strokeWidth="2" />
      <ellipse cx="212" cy="112" rx="50" ry="40" fill="#a8a29e" stroke="#292524" strokeWidth="2" />
      <path d="M200,96 l12,14 l12,-14 M212,84 v40 M198,112 h28" stroke="#fff" strokeWidth="3" />
      {[[116, 92], [124, 88], [136, 88], [144, 92]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="3" fill="#0f172a" />)}
      <path d="M104,118 q-10,6 -6,14 M106,108 q-12,2 -12,10" fill="none" stroke="#292524" strokeWidth="5" strokeLinecap="round" />
      <path d="M262,118 l14,4 M262,124 l12,10" stroke="#e7e5e4" strokeWidth="2" />
      <path d="M276,122 Q300,150 296,210" fill="none" stroke="#cbd5e1" strokeWidth="1.2" />
    </g>
  ),
  parts: [
    P(130, 112, t("Cephalothorax", "Գլխակուրծք", "Головогрудь"), t("Head and chest in one piece. It carries the eyes, the mouthparts and all eight legs.", "Գլուխն ու կուրծքը մեկ ամբողջություն են։ Դրա վրա են աչքերը, բերանային օրգանները և բոլոր ութ ոտքերը։", "Голова и грудь слиты в одно. На ней глаза, ротовые органы и все восемь ног.")),
    P(130, 82, t("Simple eyes", "Պարզ աչքեր", "Простые глаза"), t("Usually eight simple eyes, not compound ones. Most web spiders see poorly and feel the web's vibrations instead.", "Սովորաբար ութ պարզ աչք, ոչ թե բարդ։ Ոստայն հյուսող սարդերի մեծ մասը վատ է տեսնում և փոխարենը զգում է ոստայնի թրթռումները։", "Обычно восемь простых глаз, а не сложных. Большинство пауков-ткачей видят плохо и вместо этого чувствуют дрожание паутины.")),
    P(96, 128, t("Chelicerae with fangs", "Խելիցերներ՝ թունավոր ժանիքներով", "Хелицеры с ядовитыми когтями"), t("Inject poison and digestive juice; the spider then sucks up the dissolved food. Spiders have no antennae.", "Ներարկում են թույն և մարսողական հյութ, որից հետո սարդը ծծում է լուծված սնունդը։ Սարդերը բեղիկներ չունեն։", "Впрыскивают яд и пищеварительный сок, затем паук всасывает растворённую пищу. Усиков у пауков нет.")),
    P(60, 160, t("Four pairs of legs", "Չորս զույգ ոտք", "Четыре пары ног"), t("Eight legs: the quick way to tell an arachnid from an insect, which has six.", "Ութ ոտք․ սարդակերպին միջատից արագ տարբերելու եղանակը, որն ունի վեց ոտք։", "Восемь ног: так быстро отличить паукообразное от насекомого, у которого шесть.")),
    P(212, 140, t("Abdomen", "Փոր", "Брюшко"), t("Soft and not divided into segments. Inside are the lungs (book lungs), the heart and the silk glands.", "Փափուկ է և չի բաժանվում հատվածների։ Ներսում են թոքերը, սիրտը և ոստայնագեղձերը։", "Мягкое, не разделено на членики. Внутри лёгкие, сердце и паутинные железы.")),
    P(272, 112, t("Spinnerets", "Ոստայնագորտնակներ", "Паутинные бородавки"), t("The silk comes out as a liquid and hardens in the air. Weight for weight, spider silk is stronger than steel.", "Մետաքսը դուրս է գալիս հեղուկի տեսքով և պնդանում օդում։ Նույն քաշի դեպքում սարդոստայնի թելը պողպատից ամուր է։", "Шёлк выходит жидким и твердеет на воздухе. При одинаковом весе паутина прочнее стали.")),
  ],
};

const bird: Diagram = {
  title: t("How a bird is built for flight", "Ինչպես է թռչունը հարմարված թռիչքին", "Как птица приспособлена к полёту"),
  draw: () => (
    <g>
      <path d="M150,96 C120,40 60,30 20,40 C60,60 90,90 120,110 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      {Array.from({ length: 6 }, (_, k) => <path key={k} d={`M${30 + k * 16},${42 + k * 6} l-10,-10`} stroke="#475569" strokeWidth="1.5" />)}
      <ellipse cx="160" cy="120" rx="62" ry="34" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
      <path d="M100,120 L50,140 L54,108 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      <circle cx="226" cy="96" r="20" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
      <path d="M244,92 L276,100 L244,104 Z" fill="#f59e0b" stroke="#b45309" />
      <circle cx="232" cy="90" r="3.5" fill="#0f172a" />
      <path d="M150,150 q4,20 0,34 M170,150 q4,20 0,34 M140,184 h18 M160,184 h18" fill="none" stroke="#b45309" strokeWidth="3" />
      <path d="M150,96 L176,96 L186,118 L176,144 L150,144" fill="none" stroke="#e11d48" strokeWidth="2.5" />
      <ellipse cx="144" cy="112" rx="12" ry="8" fill="#bae6fd" stroke="#0284c7" />
      <ellipse cx="190" cy="108" rx="9" ry="6" fill="#bae6fd" stroke="#0284c7" />
      <g transform="translate(250 150)">
        <rect x="-4" y="-6" width="64" height="58" rx="8" fill="#fff" stroke="#94a3b8" />
        <ellipse cx="28" cy="22" rx="24" ry="9" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
        {[10, 20, 30, 40].map((x) => <line key={x} x1={x} y1={14} x2={x + 6} y2={30} stroke="#94a3b8" />)}
      </g>
    </g>
  ),
  parts: [
    P(60, 54, t("Feathers", "Փետուրներ", "Перья"), t("Light, strong and waterproof. Flight feathers form the wing surface; down feathers keep the body warm.", "Թեթև են, ամուր և ջրակայուն։ Թռիչքային փետուրները կազմում են թևի մակերևույթը, աղվափետուրները տաքացնում են մարմինը։", "Лёгкие, прочные и не промокают. Маховые перья образуют плоскость крыла, пух держит тепло.")),
    P(182, 132, t("Keel", "Կիլ", "Киль"), t("A blade on the breastbone where the flight muscles attach. In good fliers these muscles can be a quarter of the body mass.", "Կրծոսկրի թիթեղ, որին ամրանում են թռիչքային մկանները։ Լավ թռչողների մոտ այդ մկանները կարող են կազմել մարմնի զանգվածի քառորդը։", "Пластина на грудине, к которой крепятся летательные мышцы. У хороших летунов они составляют до четверти массы тела.")),
    P(144, 112, t("Air sacs", "Օդապարկեր", "Воздушные мешки"), t("Bags of air linked to the lungs. Air flows through the lungs both in and out, so a bird gets oxygen on both breaths.", "Թոքերին միացած օդի պարկեր։ Օդը թոքերով անցնում է և՛ ներշնչելիս, և՛ արտաշնչելիս, ուստի թռչունը թթվածին է ստանում երկու դեպքում էլ։", "Мешки с воздухом, соединённые с лёгкими. Воздух идёт через лёгкие и на вдохе, и на выдохе: двойное дыхание.")),
    P(276, 200, t("Hollow bones", "Խոռոչավոր ոսկորներ", "Полые кости"), t("Filled with air and braced inside by thin struts: light but strong.", "Լցված են օդով և ներսից ամրացված են բարակ միջնապատերով․ թեթև են, բայց ամուր։", "Заполнены воздухом и укреплены изнутри тонкими перемычками: лёгкие, но прочные.")),
    P(262, 100, t("Beak, no teeth", "Կտուց՝ առանց ատամների", "Клюв без зубов"), t("A light horny beak instead of heavy jaws and teeth. Food is ground in the muscular gizzard instead.", "Ծանր ծնոտների և ատամների փոխարեն թեթև եղջերային կտուց։ Սնունդը մանրացվում է մկանային ստամոքսում։", "Лёгкий роговой клюв вместо тяжёлых челюстей и зубов. Пища перетирается в мускульном желудке.")),
    P(52, 124, t("Tail", "Պոչ", "Хвост"), t("Tail feathers steer and brake, like the rudder and flaps of a plane.", "Պոչի փետուրները ղեկավարում և արգելակում են, ինչպես ինքնաթիռի ղեկն ու վահանակները։", "Рулевые перья хвоста управляют и тормозят, как руль и закрылки самолёта.")),
  ],
};

const bone: Diagram = {
  title: t("Inside a long bone", "Երկար ոսկորի ներսը", "Внутри длинной кости"),
  draw: () => (
    <g>
      <path d="M92,92 C70,60 30,64 30,96 C14,104 14,136 30,140 C34,170 76,172 92,138 L228,138 C244,172 286,170 290,140 C306,136 306,104 290,96 C290,64 250,60 228,92 Z" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
      <path d="M96,99 L224,99 L224,131 L96,131 Z" fill="#fde68a" />
      <path d="M92,92 L228,92 M92,138 L228,138" stroke="#cbd5e1" strokeWidth="7" />
      <path d="M86,148 L234,148" stroke="#a78bfa" strokeWidth="2" strokeDasharray="5 3" />
      {Array.from({ length: 16 }, (_, k) => <circle key={k} cx={44 + (k % 4) * 11} cy={98 + Math.floor(k / 4) * 11} r="3.4" fill="#fca5a5" stroke="#b91c1c" strokeWidth="0.6" />)}
      {Array.from({ length: 16 }, (_, k) => <circle key={`r${k}`} cx={244 + (k % 4) * 11} cy={98 + Math.floor(k / 4) * 11} r="3.4" fill="#fca5a5" stroke="#b91c1c" strokeWidth="0.6" />)}
      <path d="M22,102 C14,116 14,124 22,136" fill="none" stroke="#60a5fa" strokeWidth="6" strokeLinecap="round" />
      <path d="M298,102 C306,116 306,124 298,136" fill="none" stroke="#60a5fa" strokeWidth="6" strokeLinecap="round" />
    </g>
  ),
  parts: [
    P(18, 119, t("Cartilage", "Աճառ", "Хрящ"), t("Smooth and slippery, it covers the ends of the bone in a joint. In children a cartilage plate near the end lets the bone grow longer.", "Հարթ և սահուն, այն ծածկում է ոսկորի ծայրերը հոդում։ Երեխաների մոտ ծայրի մոտ գտնվող աճառային թիթեղը թույլ է տալիս ոսկորին երկարել։", "Гладкий и скользкий, покрывает концы кости в суставе. У детей хрящевая пластинка у конца позволяет кости расти в длину.")),
    P(60, 76, t("Spongy bone", "Սպունգանման նյութ", "Губчатое вещество"), t("A lattice of thin plates laid along the lines of pressure, like the beams of a bridge. Its spaces hold red marrow.", "Ճնշման գծերով դասավորված բարակ թիթեղների ցանց, ինչպես կամրջի հեծանները։ Դրա խոռոչներում կարմիր ծուծն է։", "Решётка тонких пластинок, уложенных по линиям нагрузки, как балки моста. В её ячейках — красный костный мозг.")),
    P(160, 92, t("Compact bone", "Խիտ նյութ", "Компактное вещество"), t("The hard outer wall. A thigh bone can bear several times the body's weight.", "Կոշտ արտաքին պատը։ Ազդրոսկրը կարող է դիմանալ մարմնի քաշից մի քանի անգամ մեծ բեռի։", "Твёрдая наружная стенка. Бедренная кость выдерживает нагрузку в несколько раз больше веса тела.")),
    P(160, 115, t("Marrow cavity", "Ծուծային խոռոչ", "Костномозговая полость"), t("Holds yellow marrow, mostly fat, in adults. A hollow tube is lighter yet almost as strong as a solid rod.", "Մեծահասակների մոտ պարունակում է դեղին ծուծ, հիմնականում ճարպ։ Խոռոչավոր խողովակն ավելի թեթև է, բայց գրեթե նույնքան ամուր, որքան հոծ ձողը։", "У взрослых содержит жёлтый костный мозг, в основном жир. Полая трубка легче, но почти так же прочна, как сплошной стержень.")),
    P(266, 120, t("Red marrow", "Կարմիր ծուծ", "Красный костный мозг"), t("Makes blood cells: about two million red blood cells every second.", "Արտադրում է արյան բջիջներ՝ վայրկյանում մոտ երկու միլիոն կարմիր գնդիկ։", "Делает клетки крови: около двух миллионов эритроцитов каждую секунду.")),
    P(200, 150, t("Periosteum", "Ոսկրաթաղանթ", "Надкостница"), t("A tough skin with nerves and blood vessels. It lets the bone grow thicker and heal after a fracture.", "Ամուր թաղանթ՝ նյարդերով և արյունատար անոթներով։ Այն թույլ է տալիս ոսկորին հաստանալ և կոտրվածքից հետո ապաքինվել։", "Прочная плёнка с нервами и сосудами. Благодаря ей кость растёт в толщину и срастается после перелома.")),
  ],
};

const glands: Diagram = {
  title: t("The main endocrine glands", "Ներզատիչ հիմնական գեղձերը", "Главные железы внутренней секреции"),
  draw: () => (
    <g>
      <circle cx="160" cy="34" r="24" fill="#fde7d4" stroke="#c2410c" strokeWidth="1.5" />
      <path d="M150,58 h20 v10 h-20 Z M110,68 C100,70 96,80 98,100 L110,190 L130,212 L190,212 L210,190 L222,100 C224,80 220,70 210,68 Z" fill="#fde7d4" stroke="#c2410c" strokeWidth="1.5" />
      <path d="M120,198 L112,214 M200,198 L208,214" stroke="#c2410c" strokeWidth="1.5" />
      <ellipse cx="160" cy="36" rx="5" ry="4" fill="#a855f7" />
      <path d="M150,64 q10,8 20,0 q-2,8 -10,8 q-8,0 -10,-8 Z" fill="#ef4444" />
      <path d="M134,132 l8,-6 l6,8 Z M186,132 l-8,-6 l-6,8 Z" fill="#f59e0b" />
      <ellipse cx="134" cy="140" rx="10" ry="12" fill="#a16207" opacity="0.4" />
      <ellipse cx="186" cy="140" rx="10" ry="12" fill="#a16207" opacity="0.4" />
      <path d="M140,150 q20,-6 44,4 q-20,10 -44,-4 Z" fill="#10b981" />
      <circle cx="145" cy="194" r="5" fill="#3b82f6" />
      <path d="M166,36 L208,30 M170,66 L208,66 M126,134 L92,124 M178,152 L236,152 M180,194 L232,198" stroke="#94a3b8" strokeWidth="1" />
      <circle cx="175" cy="194" r="5" fill="#3b82f6" />
    </g>
  ),
  parts: [
    P(214, 30, t("Pituitary gland", "Հիպոֆիզ", "Гипофиз"), t("Pea-sized, under the brain. It makes growth hormone and the hormones that steer the other glands.", "Ոլոռի չափ է, գտնվում է գլխուղեղի տակ։ Արտադրում է աճի հորմոն և այլ գեղձերը ղեկավարող հորմոններ։", "Размером с горошину, под мозгом. Делает гормон роста и гормоны, управляющие другими железами.")),
    P(214, 66, t("Thyroid gland", "Վահանաձև գեղձ", "Щитовидная железа"), t("Butterfly-shaped, in the neck. Its hormone thyroxine contains iodine and sets the speed of metabolism.", "Թիթեռնաձև է, գտնվում է պարանոցում։ Նրա հորմոնը՝ թիրօքսինը, պարունակում է յոդ և որոշում նյութափոխանակության արագությունը։", "В форме бабочки, на шее. Её гормон тироксин содержит йод и задаёт скорость обмена веществ.")),
    P(86, 124, t("Adrenal glands", "Մակերիկամներ", "Надпочечники"), t("Caps on top of the kidneys. In fright they release adrenaline: the heart races and muscles get more sugar.", "Գլխարկներ երիկամների վրա։ Վախի պահին արտազատում են ադրենալին․ սիրտն արագանում է, մկանները ստանում են ավելի շատ շաքար։", "«Шапочки» на почках. При испуге выделяют адреналин: сердце бьётся чаще, мышцы получают больше сахара.")),
    P(242, 152, t("Pancreas", "Ենթաստամոքսային գեղձ", "Поджелудочная железа"), t("Small islands of cells (the islets of Langerhans) make insulin, which lowers blood sugar.", "Բջիջների փոքր կղզյակները (Լանգերհանսի կղզյակներ) արտադրում են ինսուլին, որն իջեցնում է արյան շաքարը։", "Маленькие островки клеток (островки Лангерганса) делают инсулин, снижающий сахар в крови.")),
    P(238, 198, t("Sex glands", "Սեռական գեղձեր", "Половые железы"), t("Ovaries or testes. Their hormones start the changes of puberty.", "Ձվարաններ կամ ամորձիներ։ Նրանց հորմոնները սկսում են սեռական հասունացման փոփոխությունները։", "Яичники или семенники. Их гормоны запускают перемены полового созревания.")),
  ],
};

const miller: Diagram = {
  title: t("The Miller–Urey experiment, 1953", "Միլլեր-Յուրիի փորձը, 1953", "Опыт Миллера — Юри, 1953"),
  draw: () => (
    <g>
      <circle cx="230" cy="70" r="44" fill="#f5f3ff" stroke="#7c3aed" strokeWidth="2" />
      <line x1="210" y1="70" x2="224" y2="70" stroke="#475569" strokeWidth="3" />
      <line x1="236" y1="70" x2="250" y2="70" stroke="#475569" strokeWidth="3" />
      <path d="M224,64 l4,4 l-3,3 l5,4" fill="none" stroke="#facc15" strokeWidth="2.5" />
      <circle cx="80" cy="160" r="34" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
      <path d="M50,170 q30,8 60,0 L106,186 q-26,10 -52,0 Z" fill="#7dd3fc" />
      <path d="M60,204 q8,-10 0,-16 q14,6 8,16 Z M92,204 q8,-10 0,-16 q14,6 8,16 Z" fill="#f97316" />
      <path d="M80,126 L80,40 L186,40" fill="none" stroke="#94a3b8" strokeWidth="5" />
      <path d="M262,104 L262,150 L230,170" fill="none" stroke="#94a3b8" strokeWidth="5" />
      <rect x="252" y="112" width="20" height="34" rx="6" fill="#bfdbfe" stroke="#2563eb" />
      <path d="M230,170 L180,190 L180,206 M180,206 L114,172" fill="none" stroke="#94a3b8" strokeWidth="5" />
      <path d="M170,196 q10,10 20,0 v10 q-10,8 -20,0 Z" fill="#a16207" opacity="0.7" />
      <text x="230" y="56" textAnchor="middle" fontSize="8" fontWeight="900" fill="#5b21b6">CH₄ NH₃ H₂ H₂O</text>
    </g>
  ),
  parts: [
    P(80, 160, t("Boiling 'ocean'", "Եռացող «օվկիանոս»", "Кипящий «океан»"), t("Heated water gives the steam of the early Earth's seas.", "Տաքացվող ջուրը տալիս է վաղ Երկրի ծովերի գոլորշին։", "Нагреваемая вода даёт пар, как моря ранней Земли.")),
    P(230, 96, t("'Atmosphere' of gases", "Գազերի «մթնոլորտ»", "«Атмосфера» из газов"), t("Methane, ammonia, hydrogen and water vapour, with no free oxygen, as Oparin had proposed.", "Մեթան, ամոնիակ, ջրածին և ջրային գոլորշի՝ առանց ազատ թթվածնի, ինչպես առաջարկել էր Օպարինը։", "Метан, аммиак, водород и водяной пар без свободного кислорода, как предполагал Опарин.")),
    P(212, 82, t("Electric sparks", "Էլեկտրական կայծեր", "Электрические искры"), t("Electrodes make sparks in place of lightning, giving energy for reactions.", "Էլեկտրոդները կայծեր են տալիս կայծակի փոխարեն՝ էներգիա տալով ռեակցիաներին։", "Электроды дают искры вместо молний — энергию для реакций.")),
    P(262, 128, t("Condenser", "Սառնարան", "Холодильник"), t("Cold water cools the gases so they condense, like rain falling back into the sea.", "Սառը ջուրը սառեցնում է գազերը, և դրանք խտանում են, ինչպես անձրևը, որ նորից թափվում է ծովը։", "Холодная вода охлаждает газы, и они конденсируются, как дождь, падающий в море.")),
    P(180, 200, t("Trap with amino acids", "Թակարդ՝ ամինաթթուներով", "Ловушка с аминокислотами"), t("After a week the water turned brown: it held several amino acids, the building blocks of proteins.", "Մեկ շաբաթ անց ջուրը դարձավ դարչնագույն․ այն պարունակում էր մի քանի ամինաթթու՝ սպիտակուցների կառուցվածքային միավորներ։", "Через неделю вода побурела: в ней оказалось несколько аминокислот — «кирпичиков» белков.")),
  ],
};

/* Forelimbs of three mammals: the same bones in different shapes. */
const HUM = "#ef4444", RAD = "#f59e0b", ULN = "#eab308", WRI = "#10b981", FIN = "#3b82f6";

const homology: Diagram = {
  title: t("Homologous organs: one plan, three jobs", "Համանման օրգաններ․ մեկ հատակագիծ, երեք գործառույթ", "Гомологичные органы: один план, три работы"),
  draw: () => (
    <g>
      <g transform="translate(14 20)">
        <rect x="20" y="0" width="12" height="60" rx="5" fill={HUM} />
        <rect x="16" y="62" width="7" height="50" rx="3" fill={RAD} />
        <rect x="28" y="62" width="7" height="52" rx="3" fill={ULN} />
        <rect x="14" y="116" width="24" height="12" rx="4" fill={WRI} />
        {[0, 1, 2, 3, 4].map((k) => <rect key={k} x={12 + k * 6} y={130} width="4.5" height={k === 0 ? 20 : 34 - Math.abs(k - 2) * 3} rx="2" fill={FIN} transform={k === 0 ? "rotate(-25 14 130)" : undefined} />)}
      </g>
      <g transform="translate(100 20)">
        <rect x="30" y="0" width="10" height="44" rx="4" fill={HUM} />
        <rect x="32" y="46" width="7" height="60" rx="3" fill={RAD} transform="rotate(-30 35 46)" />
        <rect x="54" y="92" width="10" height="8" rx="3" fill={WRI} />
        {[[-50, 70], [-25, 86], [0, 92], [25, 80]].map(([a, l], k) => <rect key={k} x={58} y={100} width="3.5" height={l} rx="1.5" fill={FIN} transform={`rotate(${a} 60 100)`} />)}
        <path d="M60,100 L-8,150 L22,176 L60,190 L96,170 L110,150 Z" fill={FIN} opacity="0.15" />
        <rect x="50" y="98" width="4" height="10" rx="2" fill={FIN} transform="rotate(-80 52 100)" />
      </g>
      <g transform="translate(232 20)">
        <rect x="26" y="0" width="16" height="30" rx="6" fill={HUM} />
        <rect x="22" y="32" width="11" height="26" rx="4" fill={RAD} />
        <rect x="35" y="32" width="11" height="26" rx="4" fill={ULN} />
        <rect x="20" y="60" width="28" height="12" rx="4" fill={WRI} />
        {[0, 1, 2, 3, 4].map((k) => <rect key={k} x={19 + k * 6} y={74} width="5" height={k === 0 ? 20 : 60 + (k === 2 ? 30 : k === 1 || k === 3 ? 18 : 0)} rx="2" fill={FIN} />)}
        <path d="M18,60 C0,120 20,180 34,190 C50,180 64,120 50,60 Z" fill="#64748b" opacity="0.15" />
      </g>
    </g>
  ),
  parts: [
    P(40, 50, t("Humerus", "Բազկոսկր", "Плечевая кость"), t("One upper-arm bone in a human, a bat and a whale alike.", "Մեկ բազկոսկր և՛ մարդու, և՛ չղջիկի, և՛ կետի մոտ։", "Одна плечевая кость и у человека, и у летучей мыши, и у кита.")),
    P(272, 66, t("Radius and ulna", "Ճաճանչոսկր և արմնկոսկր", "Лучевая и локтевая кости"), t("Two forearm bones: long in our arm, short and flat in the whale's flipper.", "Նախաբազկի երկու ոսկոր՝ երկար մեր ձեռքում, կարճ և տափակ՝ կետի լողաթևում։", "Две кости предплечья: длинные в нашей руке, короткие и плоские в ласте кита.")),
    P(40, 142, t("Wrist bones", "Դաստակի ոսկորներ", "Кости запястья"), t("A cluster of small bones, present in all three limbs.", "Մանր ոսկորների խումբ՝ առկա բոլոր երեք վերջույթներում։", "Группа мелких костей — есть во всех трёх конечностях.")),
    P(176, 176, t("Finger bones of the bat", "Չղջիկի մատների ոսկորներ", "Кости пальцев летучей мыши"), t("Four very long fingers hold up the skin of the wing; the thumb stays short with a claw.", "Չորս շատ երկար մատներ պահում են թևի մաշկը, բութ մատը մնում է կարճ՝ ճանկով։", "Четыре очень длинных пальца натягивают кожу крыла; большой палец короткий, с когтем.")),
    P(272, 150, t("Finger bones of the whale", "Կետի մատների ոսկորներ", "Кости пальцев кита"), t("Hidden inside the flipper, with extra joints. The same plan in different jobs points to a common ancestor.", "Թաքնված են լողաթևի մեջ՝ լրացուցիչ հոդերով։ Տարբեր գործառույթներում նույն հատակագիծը վկայում է ընդհանուր նախնու մասին։", "Спрятаны в ласте, с лишними суставами. Один план при разной работе указывает на общего предка.")),
  ],
};

export const DIAGRAMS_B: Record<string, Diagram> = { fern, hydra, snail, spider, bird, bone, glands, miller, homology };
