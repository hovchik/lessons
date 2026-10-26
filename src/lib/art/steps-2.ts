import type { Step, StepGuide } from "./steps-1";
import type { Tr } from "./spec";

const t = (en: string, hy: string, ru: string): Tr => ({ en, hy, ru });
const L = (svg: string, en: string, hy: string, ru: string): Step => ({ svg, cap: t(en, hy, ru) });
const P = (svg: string, en: string, hy: string, ru: string): Step => ({ svg, cap: t(en, hy, ru), paint: true });
const PAINT = ["Colour it in!", "Գունավորի՛ր։", "Раскрась!"] as const;
const range = (n: number, f: (i: number) => string) => Array.from({ length: n }, (_, i) => f(i)).join("");

/** Architecture, portrait, still life, perspective and design guides. */
export const STEPS_2: Record<string, StepGuide> = {
  garni: {
    name: t("Drawing Garni temple", "Նկարում ենք Գառնիի տաճարը", "Рисуем храм Гарни"),
    steps: [
      L(`<path d="M10 112 H150"/><rect x="24" y="92" width="112" height="20"/><path d="M56 112 V96 H104 V112 M60 100 H100 M64 104 H96 M68 108 H92"/>`, "A high base (podium) with a staircase.", "Բարձր հիմք (պոդիում) աստիճաններով։", "Высокое основание (подиум) с лестницей."),
      L(`${range(6, (i) => `<path d="M${32 + i * 19} 92 V50 M${38 + i * 19} 92 V50"/>`)}`, "Six columns, evenly spaced.", "Վեց սյուն՝ հավասար հեռավորությամբ։", "Шесть колонн на равном расстоянии."),
      L(`<rect x="24" y="42" width="112" height="8"/>`, "A beam lies on the columns.", "Սյուների վրա դրված է հեծան։", "На колоннах лежит балка."),
      L(`<path d="M20 42 L80 16 L140 42Z M38 40 L80 22 L122 40"/>`, "A triangular pediment on top.", "Վերևում՝ եռանկյուն ճակտոն։", "Сверху треугольный фронтон."),
      P(`<rect x="24" y="92" width="112" height="20" fill="#a89a8a"/>${range(6, (i) => `<rect x="${32 + i * 19}" y="50" width="6" height="42" fill="#d8ccb8"/>`)}<rect x="24" y="42" width="112" height="8" fill="#c7b9a6"/><path d="M20 42 L80 16 L140 42Z" fill="#c7b9a6"/><path d="M0 112 H160 V120 H0Z" fill="#9ccc6b"/>`, "Grey basalt and soft light: the temple glows in the sun.", "Մոխրագույն բազալտ և մեղմ լույս․ տաճարը շողում է արևի տակ։", "Серый базальт и мягкий свет: храм светится на солнце."),
    ],
  },
  "armenian-church": {
    name: t("Drawing an Armenian church", "Նկարում ենք հայկական եկեղեցի", "Рисуем армянскую церковь"),
    steps: [
      L(`<path d="M10 112 H150"/><rect x="34" y="62" width="92" height="50"/>`, "A rectangle: the body of the church.", "Ուղղանկյուն՝ եկեղեցու մարմինը։", "Прямоугольник — тело церкви."),
      L(`<path d="M30 64 L56 48 L82 64 M78 64 L104 48 L130 64"/>`, "Gable roofs over the arms of the cross.", "Երկթեք տանիքներ խաչի թևերի վրա։", "Двускатные крыши над рукавами креста."),
      L(`<rect x="64" y="34" width="32" height="24"/>`, "A drum (a cylinder) in the middle.", "Թմբուկ (գլան) մեջտեղում։", "Барабан (цилиндр) в центре."),
      L(`<path d="M60 34 L80 6 L100 34"/>`, "A cone roof on the drum: the sign of Armenian churches.", "Վեղարաձև գմբեթ թմբուկի վրա՝ հայկական եկեղեցիների նշանը։", "Шатёр на барабане — знак армянских церквей."),
      L(`<path d="M72 112 V92 C72 84 88 84 88 92 V112"/><rect x="78" y="40" width="4" height="12" rx="2"/><rect x="46" y="74" width="5" height="14" rx="2.5"/><rect x="109" y="74" width="5" height="14" rx="2.5"/>`, "An arched door and narrow windows.", "Կամարաձև դուռ և նեղ պատուհաններ։", "Арочная дверь и узкие окна."),
      P(`<rect x="34" y="62" width="92" height="50" fill="#d9875f"/><path d="M30 64 L56 48 L82 64Z M78 64 L104 48 L130 64Z" fill="#b86a4b"/><rect x="64" y="34" width="32" height="24" fill="#e6a593"/><path d="M60 34 L80 6 L100 34Z" fill="#b86a4b"/><path d="M72 112 V92 C72 84 88 84 88 92 V112Z" fill="#5a3a2a"/><rect x="0" y="112" width="160" height="8" fill="#9ccc6b"/>`, "Pink or orange tuff stone.", "Վարդագույն կամ նարնջագույն տուֆ։", "Розовый или оранжевый туф."),
    ],
  },
  "onion-dome": {
    name: t("Drawing an onion dome", "Նկարում ենք սոխաձև գմբեթ", "Рисуем луковичную главу"),
    steps: [
      L(`<rect x="62" y="64" width="36" height="48"/>`, "A drum.", "Թմբուկ։", "Барабан."),
      L(`<path d="M80 18 C108 32 112 54 98 64 H62 C48 54 52 32 80 18Z"/>`, "An onion shape: wide in the middle, pointed on top.", "Սոխի ձև՝ մեջտեղում լայն, վերևում սուր։", "Форма луковицы: широкая в середине, острая сверху."),
      L(`<path d="M80 18 V2 M74 8 H86"/>`, "A cross on top.", "Խաչ գագաթին։", "Крест на вершине."),
      L(`<path d="M58 40 C70 46 90 46 102 40 M54 52 C70 58 90 58 106 52 M80 18 C74 30 72 50 74 64 M80 18 C86 30 88 50 86 64"/><path d="M68 112 V90 C68 84 74 82 74 90 V112 M86 112 V90 C86 84 92 82 92 90 V112"/>`, "Stripes or a spiral, windows on the drum.", "Շերտեր կամ պարույր, պատուհաններ թմբուկին։", "Полосы или спираль, окна на барабане."),
      P(`<rect x="62" y="64" width="36" height="48" fill="#e8d3a9"/><path d="M80 18 C108 32 112 54 98 64 H62 C48 54 52 32 80 18Z" fill="#2e7d32"/><path d="M58 40 C70 46 90 46 102 40 L104 48 C90 52 70 52 56 48Z" fill="#ffd21f"/><path d="M80 18 V2 M74 8 H86" stroke="#e8b83a" stroke-width="3"/>`, "Bright, like a fairy tale.", "Վառ, ինչպես հեքիաթում։", "Ярко, как в сказке."),
    ],
  },
  izba: {
    name: t("Drawing a village izba", "Նկարում ենք գյուղական իզբա", "Рисуем деревенскую избу"),
    steps: [
      L(`<path d="M10 112 H150"/><rect x="34" y="56" width="92" height="56"/>`, "A log house: a rectangle.", "Գերանե տուն՝ ուղղանկյուն։", "Сруб — прямоугольник."),
      L(`${range(8, (i) => `<path d="M34 ${63 + i * 7} H126"/>`)}`, "Logs: horizontal lines.", "Գերաններ՝ հորիզոնական գծեր։", "Брёвна — горизонтальные линии."),
      L(`<path d="M24 58 L80 16 L136 58"/>`, "A steep roof.", "Զառիթափ տանիք։", "Крутая крыша."),
      L(`<rect x="50" y="70" width="18" height="24"/><rect x="92" y="70" width="18" height="24"/><path d="M46 70 L59 60 L72 70 M88 70 L101 60 L114 70 M46 96 H72 M88 96 H114"/><circle cx="80" cy="40" r="6"/>`, "Carved window frames and a little round window.", "Փորագրված պատուհանաշրջանակներ և կլոր պատուհանիկ։", "Резные наличники и круглое окошко."),
      P(`<rect x="34" y="56" width="92" height="56" fill="#c08850"/><path d="M24 58 L80 16 L136 58Z" fill="#8b5a2b"/><rect x="50" y="70" width="18" height="24" fill="#9ec9f0"/><rect x="92" y="70" width="18" height="24" fill="#9ec9f0"/><path d="M46 70 L59 60 L72 70Z M88 70 L101 60 L114 70Z" fill="#fff"/><circle cx="80" cy="40" r="6" fill="#ffd21f"/>`, ...PAINT),
    ],
  },
  face: {
    name: t("Proportions of the face", "Դեմքի համաչափությունները", "Пропорции лица"),
    steps: [
      L(`<ellipse cx="80" cy="60" rx="30" ry="42"/>`, "The head is an egg, narrow end down.", "Գլուխը ձու է՝ նեղ կողմը ներքև։", "Голова — яйцо узким концом вниз."),
      L(`<path d="M80 14 V106 M46 60 H114" stroke-dasharray="4 4"/>`, "A middle line, and the eye line exactly at half the height.", "Միջին գիծ և աչքերի գիծը՝ ճիշտ բարձրության կեսին։", "Средняя линия и линия глаз ровно посередине высоты."),
      L(`<path d="M62 60 C66 56 72 56 76 60 C72 63 66 63 62 60Z M84 60 C88 56 94 56 98 60 C94 63 88 63 84 60Z"/><path d="M60 52 C66 48 72 48 76 50 M84 50 C88 48 94 48 100 52"/>`, "Eyes: one eye-width apart.", "Աչքեր՝ իրարից մեկ աչքի լայնությամբ։", "Глаза на расстоянии одного глаза."),
      L(`<path d="M50 81 H110" stroke-dasharray="2 4"/><path d="M78 62 L75 80 C78 82 82 82 85 80 L82 62"/><path d="M70 89 C76 92 84 92 90 89"/>`, "The nose ends halfway from eyes to chin; the mouth a third below the nose.", "Քիթը ավարտվում է աչքերից կզակ կես ճանապարհին, բերանը՝ քթից մեկ երրորդ ներքև։", "Нос кончается на полпути от глаз до подбородка; рот на трети ниже носа."),
      L(`<path d="M50 60 C44 60 44 80 51 80 M110 60 C116 60 116 80 109 80"/><path d="M52 36 C56 14 104 14 108 36 C96 26 64 26 52 36"/>`, "Ears between the eye line and the nose; hair.", "Ականջներ՝ աչքերի գծի և քթի միջև, մազեր։", "Уши между линией глаз и носом; волосы."),
      P(`<ellipse cx="80" cy="60" rx="30" ry="42" fill="#f2c4a4"/><path d="M50 60 C44 60 44 80 51 80Z M110 60 C116 60 116 80 109 80Z" fill="#e3a37f"/><path d="M48 44 C50 10 110 10 112 44 C100 26 60 26 48 44Z" fill="#4a2a1a"/><path d="M70 89 C76 94 84 94 90 89Z" fill="#c9302c"/>`, "Light and warm skin tones.", "Լույս և տաք մաշկի երանգներ։", "Свет и тёплые тона кожи."),
    ],
  },
  profile: {
    name: t("A head in profile", "Գլուխը պրոֆիլով", "Голова в профиль"),
    steps: [
      L(`<circle cx="86" cy="54" r="34"/>`, "A circle for the skull.", "Շրջան՝ գանգի համար։", "Круг для черепа."),
      L(`<path d="M56 64 L56 94 C60 104 72 108 84 104"/>`, "The face and the jaw hang from the front.", "Դեմքն ու ծնոտը կախված են առջևից։", "Лицо и челюсть спускаются спереди."),
      L(`<path d="M56 56 L48 74 L56 76"/><path d="M58 64 L68 64 M56 86 L62 86"/>`, "Nose, eye and mouth on the front edge.", "Քիթ, աչք և բերան՝ առջևի եզրին։", "Нос, глаз и рот на переднем крае."),
      L(`<path d="M88 58 C96 56 98 74 90 76"/><path d="M84 104 L86 116 M110 82 L112 116"/>`, "The ear sits behind the middle; the neck slopes.", "Ականջը մեջտեղից հետ է, պարանոցը թեքված է։", "Ухо за серединой; шея наклонена."),
      P(`<circle cx="86" cy="54" r="34" fill="#f2c4a4"/><path d="M56 64 L56 94 C60 104 72 108 84 104 L86 116 H112 L110 82 Z" fill="#f2c4a4"/><path d="M52 40 C60 14 112 10 120 50 C116 70 112 80 108 84 C104 70 100 60 90 56 C78 48 64 44 52 40Z" fill="#6b3a1a"/>`, ...PAINT),
    ],
  },
  cube: {
    name: t("A cube in perspective", "Խորանարդ հեռանկարում", "Куб в перспективе"),
    steps: [
      L(`<path d="M0 30 H160" stroke-dasharray="6 4"/><circle cx="130" cy="30" r="3"/>`, "The horizon and a vanishing point.", "Հորիզոն և անհետացման կետ։", "Горизонт и точка схода."),
      L(`<rect x="24" y="60" width="50" height="50"/>`, "The front side: a square.", "Առջևի կողմը՝ քառակուսի։", "Передняя грань — квадрат."),
      L(`<path d="M24 60 L130 30 M74 60 L130 30 M74 110 L130 30" stroke-dasharray="3 4"/>`, "Lines from the corners to the vanishing point.", "Գծեր անկյուններից դեպի անհետացման կետ։", "Линии от углов к точке схода."),
      L(`<path d="M24 60 L50 52 H96 L74 60 M96 52 V96 L74 110"/>`, "Cut the depth: the back edges are parallel to the front.", "Կտրի՛ր խորությունը․ հետևի կողերը զուգահեռ են առջևիններին։", "Отсеки глубину: задние рёбра параллельны передним."),
      P(`<rect x="24" y="60" width="50" height="50" fill="#cbd5e1"/><path d="M74 60 L96 52 V96 L74 110Z" fill="#94a3b8"/><path d="M24 60 L50 52 H96 L74 60Z" fill="#f1f5f9"/><path d="M74 110 L96 96 L150 104 L110 116Z" fill="#1e1b4b" opacity=".15"/>`, "Top is lightest, front is middle, side is darkest.", "Վերևը ամենալուսավորն է, առջևը՝ միջին, կողքը՝ ամենամուգը։", "Верх светлее всего, перед средний, бок темнее всего."),
    ],
  },
  cylinder: {
    name: t("A cylinder: ellipses and an axis", "Գլան․ էլիպսներ և առանցք", "Цилиндр: эллипсы и ось"),
    steps: [
      L(`<path d="M80 6 V114" stroke-dasharray="4 4"/>`, "A vertical axis.", "Ուղղահայաց առանցք։", "Вертикальная ось."),
      L(`<ellipse cx="80" cy="24" rx="34" ry="9"/>`, "The top ellipse: thin, because it is close to eye level.", "Վերևի էլիպսը բարակ է, որովհետև մոտ է աչքի մակարդակին։", "Верхний эллипс узкий: он близко к уровню глаз."),
      L(`<ellipse cx="80" cy="98" rx="34" ry="14"/>`, "The bottom ellipse is rounder: it is further below the eyes.", "Ներքևինը ավելի կլոր է․ այն աչքերից ավելի ցածր է։", "Нижний эллипс круглее: он ниже уровня глаз."),
      L(`<path d="M46 24 V98 M114 24 V98"/>`, "Join them with straight sides.", "Միացրու ուղիղ կողերով։", "Соедини прямыми сторонами."),
      P(`<path d="M46 24 V98 A34 14 0 0 0 114 98 V24Z" fill="#cbd5e1"/><path d="M90 24 V110 C102 108 112 104 114 98 V24Z" fill="#94a3b8"/><path d="M52 24 V100 C54 102 58 104 62 106 V24Z" fill="#e2e8f0"/><ellipse cx="80" cy="24" rx="34" ry="9" fill="#f8fafc"/>`, "Light, shade and a soft highlight.", "Լույս, կիսաստվեր և մեղմ փայլ։", "Свет, тень и мягкий блик."),
    ],
  },
  jug: {
    name: t("A jug: built on an axis", "Սափոր՝ կառուցված առանցքի վրա", "Кувшин: строим по оси"),
    steps: [
      L(`<path d="M80 4 V116" stroke-dasharray="4 4"/><path d="M48 10 H112 M40 112 H120" stroke-dasharray="2 4"/>`, "An axis, the height and the width.", "Առանցք, բարձրություն և լայնություն։", "Ось, высота и ширина."),
      L(`<ellipse cx="80" cy="14" rx="16" ry="4"/><ellipse cx="80" cy="56" rx="34" ry="8" stroke-dasharray="3 3"/><ellipse cx="80" cy="106" rx="24" ry="7"/>`, "Ellipses at the neck, the widest part and the bottom.", "Էլիպսներ վզի, ամենալայն մասի և հատակի մոտ։", "Эллипсы у горла, в самом широком месте и у дна."),
      L(`<path d="M64 14 C64 30 46 40 46 56 C46 76 56 94 56 106 M96 14 C96 30 114 40 114 56 C114 76 104 94 104 106"/>`, "Join the ellipses with smooth curves: both sides the same.", "Միացրու էլիպսները սահուն կորերով․ երկու կողմը նույնն են։", "Соедини эллипсы плавными линиями: стороны одинаковы."),
      L(`<path d="M110 40 C130 36 134 70 112 76"/><path d="M64 14 L56 6"/>`, "A handle and a spout.", "Բռնակ և ծորակ։", "Ручка и носик."),
      P(`<path d="M64 14 C64 30 46 40 46 56 C46 76 56 94 56 106 A24 7 0 0 0 104 106 C104 94 114 76 114 56 C114 40 96 30 96 14Z" fill="#c8642f"/><path d="M94 20 C100 36 112 44 112 58 C112 78 102 94 102 106 C106 104 104 92 108 80 C114 64 112 44 98 30Z" fill="#7a3a1a" opacity=".6"/><path d="M58 50 C56 64 58 80 62 92" stroke="#f6c08a" stroke-width="5" fill="none" stroke-linecap="round"/>`, "Shade on one side, a highlight on the other.", "Ստվեր մի կողմում, փայլ՝ մյուսում։", "Тень с одной стороны, блик с другой."),
    ],
  },
  "landscape-planes": {
    name: t("A landscape in three planes", "Բնանկար երեք պլանով", "Пейзаж в три плана"),
    steps: [
      L(`<path d="M0 54 H160"/>`, "Choose the horizon: low for a big sky, high for a big land.", "Ընտրի՛ր հորիզոնը․ ցածր՝ մեծ երկնքի, բարձր՝ մեծ հողի համար։", "Выбери горизонт: низко — много неба, высоко — много земли."),
      L(`<path d="M0 58 L30 30 L52 48 L80 22 L112 50 L136 36 L160 52"/>`, "Background: far mountains, pale and simple.", "Հեռավոր պլան․ գունատ և պարզ լեռներ։", "Дальний план: бледные простые горы."),
      L(`<path d="M0 80 C40 62 90 66 160 76"/>`, "Middle ground: hills, a village, a forest.", "Միջին պլան․ բլուրներ, գյուղ, անտառ։", "Средний план: холмы, деревня, лес."),
      L(`<path d="M0 104 C50 92 110 96 160 106"/><path d="M24 104 V78 M14 86 L24 70 L34 86 M18 78 L24 64 L30 78"/>`, "Foreground: big and detailed, like a tree close to you.", "Առաջին պլան․ մեծ և մանրամասն, օրինակ՝ մոտիկ ծառը։", "Передний план: крупно и подробно, как дерево рядом."),
      P(`<rect width="160" height="58" fill="#cfe8f8"/><path d="M0 58 L30 30 L52 48 L80 22 L112 50 L136 36 L160 52 V80 H0Z" fill="#a9b8d8"/><path d="M0 80 C40 62 90 66 160 76 V106 H0Z" fill="#7cb86a"/><path d="M0 104 C50 92 110 96 160 106 V120 H0Z" fill="#2f7d32"/><path d="M14 86 L24 70 L34 86Z M18 78 L24 64 L30 78Z" fill="#1d5a2a"/>`, "Far is light and bluish, near is bright and dark.", "Հեռուն լուսավոր է և կապտավուն, մոտիկը՝ վառ և մուգ։", "Дальнее светлое и голубоватое, ближнее яркое и тёмное."),
    ],
  },
  "greek-vase": {
    name: t("A Greek vase (amphora)", "Հունական սափոր (ամֆորա)", "Греческая ваза (амфора)"),
    steps: [
      L(`<path d="M80 4 V116" stroke-dasharray="4 4"/><path d="M66 8 H94 M70 14 H90 C90 26 116 32 116 56 C116 84 96 100 90 110 H70 C64 100 44 84 44 56 C44 32 70 26 70 14"/>`, "A symmetrical body on an axis.", "Համաչափ մարմին՝ առանցքի վրա։", "Симметричное тело по оси."),
      L(`<path d="M70 18 C54 18 50 30 56 40 M90 18 C106 18 110 30 104 40"/><path d="M66 110 H94 V116 H66Z"/>`, "Two handles and a foot.", "Երկու բռնակ և ոտնակ։", "Две ручки и ножка."),
      L(`<path d="M46 44 H114 M44 74 H116 M52 92 H108"/>`, "Bands: places for ornament.", "Գոտիներ՝ զարդանախշի տեղեր։", "Пояса — места для орнамента."),
      L(`<path d="M50 48 h6 v6 h-6 v4 h10 v-10 M64 48 h6 v6 h-6 v4 h10 v-10 M78 48 h6 v6 h-6 v4 h10 v-10 M92 48 h6 v6 h-6 v4 h10 v-10"/><circle cx="74" cy="64" r="4"/><path d="M74 68 V72 M70 70 L64 60 M78 70 L88 62"/>`, "A meander (Greek key) and a little figure.", "Մեանդր (հունական զարդ) և փոքրիկ կերպար։", "Меандр и маленькая фигурка."),
      P(`<path d="M70 14 H90 C90 26 116 32 116 56 C116 84 96 100 90 110 H70 C64 100 44 84 44 56 C44 32 70 26 70 14Z" fill="#c8642f"/><path d="M44 56 C44 50 45 46 46 44 H114 C115 46 116 50 116 56 C116 64 116 70 116 74 H44 C44 70 44 64 44 56Z" fill="#1b1b1b" opacity=".85"/><path d="M66 110 H94 V116 H66Z" fill="#1b1b1b"/>`, "Black figures on red clay, or red figures on black.", "Սև կերպարներ կարմիր կավի վրա կամ կարմիր կերպարներ սևի վրա։", "Чёрные фигуры на красной глине или красные на чёрном."),
    ],
  },
  sakura: {
    name: t("A sakura branch with one stroke", "Սակուրայի ճյուղ մեկ վրձնահարվածով", "Ветка сакуры одним мазком"),
    steps: [
      L(`<path d="M6 110 C40 96 70 70 100 54 C120 44 136 30 150 14"/>`, "The branch: one confident line.", "Ճյուղը՝ մեկ վստահ գիծ։", "Ветка — одна уверенная линия."),
      L(`<path d="M64 76 C60 60 66 46 74 38 M110 48 C120 52 134 52 146 48"/>`, "Thin twigs.", "Բարակ ճյուղիկներ։", "Тонкие веточки."),
      L(`${[[74, 36], [100, 54], [144, 46], [40, 92]].map(([x, y]) => [0, 72, 144, 216, 288].map((a) => `<ellipse transform="rotate(${a} ${x} ${y})" cx="${x}" cy="${y - 6}" rx="4" ry="6"/>`).join("")).join("")}`, "Flowers of five petals.", "Հինգ թերթիկանի ծաղիկներ։", "Цветы из пяти лепестков."),
      L(`<circle cx="120" cy="40" r="3"/><circle cx="56" cy="80" r="3"/><circle cx="132" cy="24" r="3"/>`, "Buds: small dots.", "Բողբոջներ՝ փոքր կետեր։", "Бутоны — маленькие точки."),
      P(`${[[74, 36], [100, 54], [144, 46], [40, 92]].map(([x, y]) => [0, 72, 144, 216, 288].map((a) => `<ellipse transform="rotate(${a} ${x} ${y})" cx="${x}" cy="${y - 6}" rx="4" ry="6" fill="#f59ab0"/>`).join("") + `<circle cx="${x}" cy="${y}" r="2.5" fill="#c83a2e"/>`).join("")}<circle cx="120" cy="40" r="3" fill="#f59ab0"/><circle cx="56" cy="80" r="3" fill="#f59ab0"/><circle cx="132" cy="24" r="3" fill="#f59ab0"/>`, "Leave a lot of empty space: it is part of the picture.", "Թող շատ դատարկ տեղ․ դա նկարի մասն է։", "Оставь много пустого места: это часть картины."),
    ],
  },
  dove: {
    name: t("The dove of peace", "Խաղաղության աղավնին", "Голубь мира"),
    steps: [
      L(`<path d="M30 70 C36 52 56 46 76 52 C90 58 96 74 84 86 C70 96 46 92 30 70Z"/>`, "A drop-shaped body.", "Կաթիլաձև մարմին։", "Тело-капля."),
      L(`<path d="M76 52 C86 30 110 14 140 12 C128 28 120 44 112 60 C104 66 92 66 84 62"/>`, "A big wing going up.", "Վեր բարձրացող մեծ թև։", "Большое крыло вверх."),
      L(`<path d="M84 86 L110 100 L104 86 L116 82 L92 76"/><path d="M30 70 L16 68 L28 76"/><circle cx="40" cy="64" r="2.5"/>`, "A fan tail, a beak, an eye.", "Հովհարաձև պոչ, կտուց, աչք։", "Хвост веером, клюв, глаз."),
      L(`<path d="M18 74 C24 86 34 92 48 94"/><path d="M24 84 l-6 4 M32 90 l-4 6 M40 93 l-2 6"/>`, "An olive branch in the beak.", "Ձիթենու ճյուղ կտուցում։", "Оливковая ветвь в клюве."),
      P(`<rect width="160" height="120" fill="#8fc9ef"/><path d="M30 70 C36 52 56 46 76 52 C90 58 96 74 84 86 C70 96 46 92 30 70Z" fill="#fff"/><path d="M76 52 C86 30 110 14 140 12 C128 28 120 44 112 60 C104 66 92 66 84 62Z" fill="#f2f6fb"/><path d="M84 86 L110 100 L104 86 L116 82 L92 76Z" fill="#fff"/><path d="M30 70 L16 68 L28 76Z" fill="#ffb01f"/>`, "White on blue: a clear, quiet sign.", "Սպիտակը կապույտի վրա՝ պարզ, հանգիստ նշան։", "Белое на голубом — ясный, спокойный знак."),
    ],
  },
  initial: {
    name: t("A decorated letter", "Զարդագիր տառ", "Буквица"),
    steps: [
      L(`<rect x="36" y="6" width="88" height="108"/>`, "A frame for the letter.", "Շրջանակ տառի համար։", "Рамка для буквы."),
      L(`<path d="M58 100 V30 C58 18 68 14 78 14 C90 14 98 22 98 34 V100 M58 58 H98"/>`, "A big, simple letter.", "Մեծ, պարզ տառ։", "Большая простая буква."),
      L(`<path d="M44 106 C48 80 40 60 50 40 C56 30 66 34 62 44 M116 106 C112 80 120 60 110 40 C104 30 94 34 98 44"/><circle cx="52" cy="28" r="5"/><circle cx="108" cy="28" r="5"/>`, "A vine winds around it.", "Որթը փաթաթվում է շուրջը։", "Вокруг вьётся лоза."),
      L(`<path d="M40 112 C40 104 48 104 50 110 M120 112 C120 104 112 104 110 110"/><path d="M70 76 C78 70 86 82 94 76"/>`, "Small details: leaves, a bird, curls.", "Մանր մանրամասներ՝ տերևներ, թռչուն, գանգուրներ։", "Мелкие детали: листья, птичка, завитки."),
      P(`<rect x="36" y="6" width="88" height="108" fill="#1c2f5e"/><path d="M58 100 V30 C58 18 68 14 78 14 C90 14 98 22 98 34 V100" stroke="#e8b83a" stroke-width="8" fill="none"/><path d="M58 58 H98" stroke="#e8b83a" stroke-width="8"/><circle cx="52" cy="28" r="5" fill="#c8202a"/><circle cx="108" cy="28" r="5" fill="#c8202a"/>`, "Gold on deep blue, like in old manuscripts.", "Ոսկին մուգ կապույտի վրա, ինչպես հին ձեռագրերում։", "Золото на тёмно-синем, как в старых рукописях."),
    ],
  },
  shield: {
    name: t("Designing a coat of arms", "Զինանշանի ձևավորում", "Создаём герб"),
    steps: [
      L(`<path d="M40 12 H120 V60 C120 88 100 104 80 112 C60 104 40 88 40 60Z"/>`, "A shield shape.", "Վահանի ձև։", "Форма щита."),
      L(`<path d="M80 12 V112 M40 50 H120"/>`, "Divide the field.", "Բաժանի՛ր դաշտը։", "Раздели поле."),
      L(`<path d="M80 58 L86 72 H100 L88 80 L92 94 L80 86 L68 94 L72 80 L60 72 H74Z"/>`, "Put a sign (charge) in the centre: something about you.", "Կենտրոնում դիր նշան՝ ինչ-որ բան քո մասին։", "В центр поставь знак — что-то о тебе."),
      L(`<path d="M30 116 C50 108 110 108 130 116 L124 106 C110 102 50 102 36 106Z"/><path d="M56 12 L60 2 L68 8 L80 0 L92 8 L100 2 L104 12"/>`, "A ribbon with a motto, a crown.", "Ժապավեն՝ նշանաբանով, թագ։", "Лента с девизом, корона."),
      P(`<path d="M40 12 H80 V112 C60 104 40 88 40 60Z" fill="#1f4fa3"/><path d="M80 12 H120 V60 C120 88 100 104 80 112Z" fill="#e8b83a"/><path d="M40 44 H120 V56 H40Z" fill="#c8102e"/><path d="M80 58 L86 72 H100 L88 80 L92 94 L80 86 L68 94 L72 80 L60 72 H74Z" fill="#e6e6e6"/>`, "Metal next to colour: gold next to blue.", "Մետաղը գույնի կողքին․ ոսկին կապույտի կողքին։", "Металл рядом с цветом: золото рядом с лазурью."),
    ],
  },
  logo: {
    name: t("From a picture to a logo", "Նկարից՝ լոգո", "От рисунка к логотипу"),
    steps: [
      L(`<path d="M20 70 C20 40 50 30 70 50 C80 30 110 36 108 66 C106 90 76 104 64 110 C52 104 20 92 20 70Z"/><path d="M60 50 C56 40 60 30 70 26 M66 28 C74 20 84 22 86 28"/>`, "Start with a real picture (a pomegranate).", "Սկսի՛ր իրական նկարից (նուռ)։", "Начни с настоящего рисунка (гранат)."),
      L(`<circle cx="64" cy="70" r="36"/><path d="M50 34 L56 24 L64 32 L72 24 L78 34"/>`, "Simplify: a circle and a crown.", "Պարզեցրու՛․ շրջան և թագ։", "Упрости: круг и коронка."),
      L(`<path d="M64 46 V94 M40 70 H88"/>`, "Add an idea: here, a plus or a cross of four parts.", "Ավելացրու՛ գաղափար․ այստեղ՝ չորս մասի խաչ։", "Добавь идею: здесь крест из четырёх частей."),
      L(`<path d="M112 62 H150 M112 78 H140"/>`, "Add the name.", "Ավելացրու՛ անունը։", "Добавь название."),
      P(`<circle cx="64" cy="70" r="36" fill="#c8202a"/><path d="M50 34 L56 24 L64 32 L72 24 L78 34Z" fill="#c8202a"/><path d="M64 46 V94 M40 70 H88" stroke="#fff" stroke-width="6"/><path d="M112 62 H150 M112 78 H140" stroke="#1e1b4b" stroke-width="6" stroke-linecap="round"/>`, "Two colours are enough. Check it small and in black and white.", "Երկու գույնը բավական է։ Ստուգի՛ր փոքր չափով և սև-սպիտակ։", "Двух цветов достаточно. Проверь в маленьком размере и в чёрно-белом."),
    ],
  },
  horse: {
    name: t("An animal from big shapes: a horse", "Կենդանի մեծ ձևերից․ ձի", "Животное из крупных форм: лошадь"),
    steps: [
      L(`<ellipse cx="80" cy="60" rx="38" ry="20"/>`, "A long oval for the body.", "Երկար օվալ՝ մարմնի համար։", "Длинный овал для туловища."),
      L(`<circle cx="50" cy="60" r="16"/><circle cx="108" cy="58" r="15"/>`, "Circles for the chest and the hips.", "Շրջաններ կրծքի և գավակի համար։", "Круги для груди и крупа."),
      L(`<path d="M46 48 L36 26 M58 50 L46 26"/><path d="M36 26 L16 36 L20 44 L42 34 M46 26 L36 20 L36 26"/>`, "The neck and a wedge-shaped head.", "Պարանոց և սեպաձև գլուխ։", "Шея и голова-клин."),
      L(`<path d="M48 76 L46 112 M60 78 L62 112 M100 72 L104 112 M114 70 L118 112"/>`, "Four legs: thin, with joints.", "Չորս ոտք՝ բարակ, հոդերով։", "Четыре ноги: тонкие, с суставами."),
      L(`<path d="M118 52 C134 54 140 70 136 88"/><path d="M44 24 C50 32 54 40 58 48"/>`, "Mane and tail: lines of movement.", "Բաշ և պոչ՝ շարժման գծեր։", "Грива и хвост — линии движения."),
      P(`<ellipse cx="80" cy="60" rx="38" ry="20" fill="#8b4513"/><circle cx="50" cy="60" r="16" fill="#8b4513"/><circle cx="108" cy="58" r="15" fill="#8b4513"/><path d="M46 48 L36 26 L16 36 L20 44 L42 34 L46 26 L58 50Z" fill="#8b4513"/><path d="M48 76 L46 112 M60 78 L62 112 M100 72 L104 112 M114 70 L118 112" stroke="#8b4513" stroke-width="6"/>`, ...PAINT),
    ],
  },
  "poster-layout": {
    name: t("How a poster is built", "Ինչպես է կառուցվում պաստառը", "Как строится плакат"),
    steps: [
      L(`<rect x="44" y="4" width="72" height="112"/>`, "A vertical sheet.", "Ուղղահայաց թերթ։", "Вертикальный лист."),
      L(`<circle cx="80" cy="46" r="26"/>`, "One big image: the main idea.", "Մեկ մեծ պատկեր՝ գլխավոր գաղափարը։", "Один крупный образ — главная идея."),
      L(`<rect x="52" y="82" width="56" height="12"/>`, "A short, big headline: it must be read from far away.", "Կարճ, մեծ վերնագիր․ այն պետք է կարդացվի հեռվից։", "Короткий крупный заголовок: читается издалека."),
      L(`<path d="M52 102 H96 M52 108 H86"/>`, "Small text: where and when.", "Փոքր տեքստ՝ որտեղ և երբ։", "Мелкий текст: где и когда."),
      P(`<rect x="44" y="4" width="72" height="112" fill="#ffd21f"/><circle cx="80" cy="46" r="26" fill="#e0262f"/><rect x="52" y="82" width="56" height="12" fill="#1e1b4b"/><path d="M52 102 H96 M52 108 H86" stroke="#1e1b4b" stroke-width="3"/>`, "Strong contrast: few colours, very bright.", "Ուժեղ հակադրություն․ քիչ գույներ, շատ վառ։", "Сильный контраст: мало цветов, очень ярко."),
    ],
  },
  pictogram: {
    name: t("From a figure to a pictogram", "Կերպարից՝ պիկտոգրամ", "От фигуры к пиктограмме"),
    steps: [
      L(`<circle cx="40" cy="22" r="10"/><path d="M40 32 C34 40 34 56 36 66 L30 100 M40 66 L48 100 M38 40 L24 58 M40 40 L54 54"/><path d="M32 18 C34 10 46 10 48 18"/>`, "A real person: lots of details.", "Իրական մարդ՝ շատ մանրամասներ։", "Настоящий человек: много деталей."),
      L(`<circle cx="90" cy="24" r="9"/><path d="M90 34 V66 M90 66 L82 100 M90 66 L98 100 M90 42 L78 58 M90 42 L102 58"/>`, "Simpler: only the main lines.", "Ավելի պարզ․ միայն հիմնական գծերը։", "Проще: только главные линии."),
      L(`<circle cx="136" cy="24" r="9"/><path d="M136 36 V100 M126 44 H146 M128 66 H144"/>`, "A sign: a circle and thick lines, readable in a second.", "Նշան՝ շրջան և հաստ գծեր, կարդացվում է մեկ վայրկյանում։", "Знак: круг и толстые линии, читается за секунду."),
      P(`<rect x="116" y="4" width="40" height="112" rx="8" fill="#1f5fbf"/><circle cx="136" cy="24" r="9" fill="#fff"/><path d="M136 36 V100 M126 44 H146 M128 66 H144" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`, "One colour, white on a coloured field.", "Մեկ գույն, սպիտակը՝ գունավոր դաշտի վրա։", "Один цвет: белое на цветном поле."),
    ],
  },
  "gzhel-stroke": {
    name: t("The Gzhel stroke with a shadow", "Գժելյան վրձնահարված ստվերով", "Гжельский мазок с тенью"),
    steps: [
      L(`<path d="M30 60 C40 30 70 26 80 40 C70 46 54 54 30 60Z"/>`, "Load the brush, press, then lift: a drop-shaped stroke.", "Թաթախի՛ր վրձինը, սեղմի՛ր, հետո բարձրացրու՝ կաթիլաձև հարված։", "Набери краску, нажми и подними — мазок-капля."),
      L(`<path d="M80 60 C90 30 120 26 130 40 C120 46 104 54 80 60Z"/><path d="M84 54 C98 44 112 40 124 40"/>`, "Paint on only one side of the brush: dark on one edge, light on the other.", "Ներկը վրձնի մի կողմում է․ մի եզրը մուգ է, մյուսը՝ բաց։", "Краска только на одном боку кисти: один край тёмный, другой светлый."),
      L(`${[0, 72, 144, 216, 288].map((a) => `<path transform="rotate(${a} 80 92)" d="M80 92 C72 80 74 70 80 66 C86 70 88 80 80 92Z"/>`).join("")}`, "Five strokes around a centre make a flower.", "Կենտրոնի շուրջ հինգ հարվածը ծաղիկ է կազմում։", "Пять мазков вокруг центра — цветок."),
      P(`<path d="M30 60 C40 30 70 26 80 40 C70 46 54 54 30 60Z" fill="#2f5fc4"/><path d="M80 60 C90 30 120 26 130 40 C120 46 104 54 80 60Z" fill="#8fb3ea"/><path d="M80 60 C92 52 110 44 130 40 C120 46 104 54 80 60Z" fill="#163a8a"/>${[0, 72, 144, 216, 288].map((a) => `<path transform="rotate(${a} 80 92)" d="M80 92 C72 80 74 70 80 66 C86 70 88 80 80 92Z" fill="#2f5fc4"/>`).join("")}`, "Only blue and white.", "Միայն կապույտ և սպիտակ։", "Только синее и белое."),
    ],
  },
  "tree-of-life": {
    name: t("The tree of life motif", "Կենաց ծառի մոտիվը", "Мотив древа жизни"),
    steps: [
      L(`<path d="M80 114 V20"/><path d="M50 114 H110"/>`, "A straight trunk: the axis of symmetry.", "Ուղիղ բուն՝ համաչափության առանցք։", "Прямой ствол — ось симметрии."),
      L(`<path d="M80 96 C64 90 52 80 48 66 M80 96 C96 90 108 80 112 66 M80 70 C66 64 58 54 56 42 M80 70 C94 64 102 54 104 42"/>`, "Branches in pairs, the same on both sides.", "Ճյուղեր՝ զույգերով, երկու կողմում նույնը։", "Ветви парами, одинаковые с обеих сторон."),
      L(`<circle cx="48" cy="62" r="7"/><circle cx="112" cy="62" r="7"/><circle cx="56" cy="38" r="7"/><circle cx="104" cy="38" r="7"/><circle cx="80" cy="14" r="9"/>`, "Fruit at the ends: pomegranates or the sun.", "Ծայրերին՝ պտուղներ․ նռներ կամ արև։", "На концах плоды: гранаты или солнце."),
      L(`<path d="M24 104 C24 92 34 88 40 92 L46 86 L44 98 C40 104 30 108 24 104Z M136 104 C136 92 126 88 120 92 L114 86 L116 98 C120 104 130 108 136 104Z"/>`, "Two birds facing each other at the roots.", "Երկու թռչուն՝ իրար դեմ, արմատների մոտ։", "Две птицы друг против друга у корней."),
      P(`<path d="M80 114 V20" stroke="#6b4226" stroke-width="5"/>${[[48, 62], [112, 62], [56, 38], [104, 38]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#c8202a"/>`).join("")}<circle cx="80" cy="14" r="9" fill="#e8b83a"/><path d="M24 104 C24 92 34 88 40 92 L46 86 L44 98 C40 104 30 108 24 104Z M136 104 C136 92 126 88 120 92 L114 86 L116 98 C120 104 130 108 136 104Z" fill="#1f5fa8"/>`, ...PAINT),
    ],
  },
  arevakhach: {
    name: t("The eternity sign", "Հավերժության նշանը", "Знак вечности"),
    steps: [
      L(`<circle cx="80" cy="60" r="50"/><circle cx="80" cy="60" r="6"/>`, "A circle and its centre.", "Շրջան և դրա կենտրոնը։", "Круг и его центр."),
      L(`${range(8, (i) => `<path transform="rotate(${i * 45} 80 60)" d="M80 60 V10" stroke-dasharray="3 4"/>`)}`, "Eight rays divide it into equal parts.", "Ութ ճառագայթ այն բաժանում են հավասար մասերի։", "Восемь лучей делят его на равные части."),
      L(`${range(8, (i) => `<path transform="rotate(${i * 45} 80 60)" d="M80 60 C80 40 92 26 108 24"/>`)}`, "Every ray bends the same way: it starts to spin.", "Ամեն ճառագայթ թեքվում է նույն կողմ․ այն սկսում է պտտվել։", "Каждый луч изгибается в одну сторону: знак закручивается."),
      P(`${range(8, (i) => `<path transform="rotate(${i * 45} 80 60)" d="M80 60 C80 40 92 26 108 24 C100 34 98 44 100 52 C92 50 84 52 80 60Z" fill="#c8202a"/>`)}<circle cx="80" cy="60" r="6" fill="#e8b83a"/>`, "The sign of the sun and eternal life.", "Արևի և հավերժական կյանքի նշանը։", "Знак солнца и вечной жизни."),
    ],
  },
  "box-net": {
    name: t("From a net to a box", "Փռվածքից՝ տուփ", "От развёртки к коробке"),
    steps: [
      L(`<rect x="50" y="40" width="30" height="30"/>`, "The bottom of the box.", "Տուփի հատակը։", "Дно коробки."),
      L(`<rect x="50" y="10" width="30" height="30"/><rect x="20" y="40" width="30" height="30"/><rect x="80" y="40" width="30" height="30"/><rect x="50" y="70" width="30" height="30"/>`, "Four walls around it.", "Չորս պատ՝ դրա շուրջ։", "Четыре стенки вокруг."),
      L(`<rect x="110" y="40" width="30" height="30"/><path d="M50 10 L54 4 H76 L80 10 M20 40 L14 44 V66 L20 70" stroke-dasharray="3 3"/>`, "A lid and gluing flaps.", "Կափարիչ և սոսնձման թևիկներ։", "Крышка и клапаны для склейки."),
      P(`<g fill="#ffd59a"><rect x="50" y="40" width="30" height="30"/><rect x="50" y="10" width="30" height="30"/><rect x="20" y="40" width="30" height="30"/><rect x="80" y="40" width="30" height="30"/><rect x="50" y="70" width="30" height="30"/><rect x="110" y="40" width="30" height="30" fill="#ff8a1f"/></g>`, "Fold along the lines, and the flat net becomes a box.", "Ծալի՛ր գծերով, և հարթ փռվածքը դառնում է տուփ։", "Согни по линиям — плоская развёртка станет коробкой."),
    ],
  },
};
