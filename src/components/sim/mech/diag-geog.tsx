"use client";

import { L, t } from "../labels";
import type { Diagram } from "./types";

/* Labelled geography pictures: the globe's grid, relief, the Earth's interior, volcanoes, rivers, the atmosphere. */

const P = (x: number, y: number, name: ReturnType<typeof t>, text: ReturnType<typeof t>) => ({ x, y, name, text });
const rad = (d: number) => (d * Math.PI) / 180;

/* ---------------- the grid of the globe ---------------- */

const GX = 140, GY = 110, GR = 90;
const lat = (d: number) => GY - GR * Math.sin(rad(d));
const halfW = (d: number) => GR * Math.cos(rad(d));

const globegrid: Diagram = {
  title: t("Parallels, meridians and coordinates", "Զուգահեռականներ, միջօրեականներ և կոորդինատներ", "Параллели, меридианы и координаты"),
  draw: (lang) => (
    <g>
      <circle cx={GX} cy={GY} r={GR} fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5" />
      {[-60, -30, 30, 60].map((d) => <ellipse key={d} cx={GX} cy={lat(d)} rx={halfW(d)} ry={halfW(d) * 0.12} fill="none" stroke="#93c5fd" />)}
      {[30, 60].map((d) => (
        <g key={d}>
          <ellipse cx={GX} cy={GY} rx={GR * Math.sin(rad(d))} ry={GR} fill="none" stroke="#93c5fd" />
        </g>
      ))}
      {[23.5, -23.5].map((d) => <ellipse key={d} cx={GX} cy={lat(d)} rx={halfW(d)} ry={halfW(d) * 0.12} fill="none" stroke="#f59e0b" strokeDasharray="4 3" strokeWidth="1.5" />)}
      {[66.5, -66.5].map((d) => <ellipse key={d} cx={GX} cy={lat(d)} rx={halfW(d)} ry={halfW(d) * 0.12} fill="none" stroke="#0ea5e9" strokeDasharray="4 3" strokeWidth="1.5" />)}
      <ellipse cx={GX} cy={GY} rx={GR} ry={GR * 0.12} fill="none" stroke="#e11d48" strokeWidth="2.2" />
      <line x1={GX} x2={GX} y1={GY - GR} y2={GY + GR} stroke="#16a34a" strokeWidth="2.2" />
      <circle cx={188} cy={52} r="4" fill="#7c3aed" />
      <text x={194} y={50} fontSize="9" fontWeight="900" fill="#7c3aed">{L(t("Yerevan", "Երևան", "Ереван"), lang)}</text>
      <text x={GX} y={GY - GR - 6} textAnchor="middle" fontSize="9" fontWeight="800" fill="#334155">{`90° ${L(t("N", "հ. լ.", "с. ш."), lang)}`}</text>
      <text x={GX + GR + 4} y={GY + 4} fontSize="9" fontWeight="800" fill="#e11d48">0°</text>
      <text x={GX + halfW(23.5) + 4} y={lat(23.5) + 3} fontSize="8" fontWeight="800" fill="#b45309">23.5°</text>
      <text x={GX + halfW(66.5) + 4} y={lat(66.5) + 3} fontSize="8" fontWeight="800" fill="#0369a1">66.5°</text>
    </g>
  ),
  parts: [
    P(GX, GY - GR, t("North Pole", "Հյուսիսային բևեռ", "Северный полюс"), t("Latitude 90° N. All meridians meet here, and every direction from it is south.", "Լայնությունը 90° հ. լ.։ Այստեղ հատվում են բոլոր միջօրեականները, և նրանից ցանկացած ուղղություն հարավ է։", "Широта 90° с. ш. Здесь сходятся все меридианы, и любое направление отсюда — юг.")),
    P(GX + GR - 6, GY, t("Equator", "Հասարակած", "Экватор"), t("The longest parallel, 0° latitude, about 40,000 km long. It divides the Northern and Southern Hemispheres.", "Ամենաերկար զուգահեռականը՝ 0° լայնություն, մոտ 40 000 կմ երկարությամբ։ Բաժանում է Հյուսիսային և Հարավային կիսագնդերը։", "Самая длинная параллель, 0° широты, около 40 000 км. Делит Северное и Южное полушария.")),
    P(GX, GY + 40, t("Prime meridian", "Սկզբնական միջօրեական", "Нулевой меридиан"), t("0° longitude, through Greenwich near London. Longitude is counted east or west from it up to 180°.", "0° երկայնություն՝ Լոնդոնի մոտ գտնվող Գրինվիչով։ Երկայնությունը նրանից հաշվվում է դեպի արևելք կամ արևմուտք՝ մինչև 180°։", "0° долготы, через Гринвич у Лондона. Долгота отсчитывается от него на восток или запад до 180°.")),
    P(GX + halfW(23.5) - 10, lat(23.5), t("Tropic of Cancer", "Հյուսիսային արևադարձ", "Северный тропик"), t("23.5° N: the farthest north the noon Sun is ever straight overhead (on 22 June).", "23,5° հ. լ.․ ամենահյուսիսային գիծը, որտեղ կեսօրվա Արեգակը լինում է ուղիղ գլխավերևում (հունիսի 22-ին)։", "23,5° с. ш.: самая северная линия, где полуденное Солнце бывает прямо над головой (22 июня).")),
    P(GX + halfW(66.5) - 8, lat(66.5), t("Arctic Circle", "Հյուսիսային բևեռային շրջան", "Северный полярный круг"), t("66.5° N: north of it there is at least one day of polar day in summer and polar night in winter.", "66,5° հ. լ.․ նրանից հյուսիս ամռանը լինում է առնվազն մեկ օր բևեռային ցերեկ, իսկ ձմռանը՝ բևեռային գիշեր։", "66,5° с. ш.: севернее летом бывает хотя бы один полярный день, а зимой — полярная ночь.")),
    P(188, 52, t("A point's coordinates", "Կետի կոորդինատները", "Координаты точки"), t("Yerevan is about 40° N (its latitude, distance from the equator) and 44.5° E (its longitude, distance from the prime meridian).", "Երևանը մոտ 40° հ. լ. է (լայնությունը՝ հեռավորությունը հասարակածից) և 44,5° ա. ե. (երկայնությունը՝ հեռավորությունը սկզբնական միջօրեականից)։", "Ереван — около 40° с. ш. (широта, удаление от экватора) и 44,5° в. д. (долгота, удаление от нулевого меридиана).")),
    P(GX - 60, lat(30), t("Parallel", "Զուգահեռական", "Параллель"), t("A circle running west–east. All points on it have the same latitude. Parallels get shorter towards the poles.", "Արևմուտքից արևելք ձգվող շրջան։ Նրա բոլոր կետերն ունեն նույն լայնությունը։ Դեպի բևեռները զուգահեռականները կարճանում են։", "Окружность с запада на восток. У всех её точек одна широта. К полюсам параллели короче.")),
  ],
};

/* ---------------- contour lines ---------------- */

const RINGS = [0, 1, 2, 3].map((k) => ({ cx: 130 + 14 * k, rx: 30 + 28 * k, ry: 12 + 11 * k, h: 400 - 100 * k }));
const PROF: Array<[number, number]> = [[30, 0], [58, 100], [72, 200], [86, 300], [100, 400], [128, 450], [160, 400], [202, 300], [244, 200], [286, 100], [306, 30]];
const PY = (h: number) => 210 - h * 0.15;

const contour: Diagram = {
  title: t("Contour lines and a hill's profile", "Հորիզոնականներ և բլրի պրոֆիլ", "Горизонтали и профиль холма"),
  draw: () => (
    <g>
      <rect x="10" y="4" width="300" height="112" rx="6" fill="#f0fdf4" />
      {[...RINGS].reverse().map((r) => (
        <g key={r.h}>
          <ellipse cx={r.cx} cy="60" rx={r.rx} ry={r.ry} fill={["#fef3c7", "#fde68a", "#fcd34d", "#fbbf24"][(400 - r.h) / 100]} stroke="#a16207" strokeWidth="1.3" />
          <text x={r.cx + r.rx - 10} y={58} fontSize="8" fontWeight="800" fill="#78350f">{r.h}</text>
        </g>
      ))}
      <path d="M128,58 l-3,6 h6 Z" fill="#78350f" />
      <text x="122" y="56" textAnchor="end" fontSize="8" fontWeight="900" fill="#78350f">450</text>
      {RINGS.map((r) => <line key={r.h} x1={r.cx - r.rx} x2={r.cx - r.rx} y1={60} y2={PY(r.h)} stroke="#94a3b8" strokeDasharray="2 3" />)}
      {RINGS.map((r) => <line key={`r${r.h}`} x1={r.cx + r.rx} x2={r.cx + r.rx} y1={60} y2={PY(r.h)} stroke="#94a3b8" strokeDasharray="2 3" />)}
      <path d={`M${PROF.map(([x, h]) => `${x},${PY(h)}`).join(" L")} L306,210 L30,210 Z`} fill="#d6d3d1" stroke="#57534e" strokeWidth="1.5" />
      {[100, 200, 300, 400].map((h) => <text key={h} x="314" y={PY(h) + 3} textAnchor="end" fontSize="7" fontWeight="800" fill="#57534e">{h}</text>)}
    </g>
  ),
  parts: [
    P(128, 60, t("Summit", "Գագաթ", "Вершина"), t("The highest point, marked with its absolute height: 450 m above sea level.", "Ամենաբարձր կետը՝ նշված իր բացարձակ բարձրությամբ՝ ծովի մակարդակից 450 մ։", "Высшая точка с отметкой абсолютной высоты: 450 м над уровнем моря.")),
    P(79, 60, t("Steep slope", "Զառիթափ լանջ", "Крутой склон"), t("The contour lines are close together: the height changes quickly over a short distance.", "Հորիզոնականներն իրար մոտ են․ բարձրությունը արագ է փոխվում փոքր հեռավորության վրա։", "Горизонтали близко друг к другу: высота быстро меняется на коротком расстоянии.")),
    P(223, 60, t("Gentle slope", "Մեղմ լանջ", "Пологий склон"), t("The lines are far apart: the ground rises slowly. Easier to walk, plough or build a road.", "Գծերն իրարից հեռու են․ գետինը դանդաղ է բարձրանում։ Ավելի հեշտ է քայլել, վարել կամ ճանապարհ կառուցել։", "Линии далеко друг от друга: подъём плавный. Легче идти, пахать или строить дорогу.")),
    P(270, 70, t("Contour line", "Հորիզոնական", "Горизонталь"), t("A line joining points of equal height. Here they are drawn every 100 m.", "Գիծ, որը միացնում է հավասար բարձրության կետերը։ Այստեղ դրանք գծված են յուրաքանչյուր 100 մ-ը մեկ։", "Линия, соединяющая точки одинаковой высоты. Здесь проведены через каждые 100 м.")),
    P(160, 170, t("Profile", "Պրոֆիլ", "Профиль"), t("A side view of the hill built from the map: drop a line from each contour to its height. The steep side is clearly visible.", "Քարտեզից կառուցված բլրի կողային տեսքը․ յուրաքանչյուր հորիզոնականից գիծ իջեցրու մինչև իր բարձրությունը։ Զառիթափ կողմը պարզ երևում է։", "Вид холма сбоку, построенный по карте: от каждой горизонтали опускают линию до её высоты. Крутой склон хорошо виден.")),
  ],
};

/* ---------------- the Earth's interior ---------------- */

const earthlayers: Diagram = {
  title: t("Inside the Earth", "Երկրի ներսում", "Внутреннее строение Земли"),
  draw: () => (
    <g>
      <circle cx="160" cy="112" r="96" fill="#78350f" />
      <circle cx="160" cy="112" r="92" fill="#ea580c" />
      <circle cx="160" cy="112" r="53" fill="#facc15" />
      <circle cx="160" cy="112" r="19" fill="#fef9c3" stroke="#eab308" />
      {[0, 1, 2, 3, 4, 5].map((k) => {
        const a = rad(-150 + k * 22);
        return <path key={k} d={`M${160 + 70 * Math.cos(a)},${112 + 70 * Math.sin(a)} q8,-6 6,-14`} fill="none" stroke="#fed7aa" strokeWidth="1.6" opacity="0.8" />;
      })}
    </g>
  ),
  parts: [
    P(160, 17, t("Crust", "Երկրակեղև", "Земная кора"), t("The thin rocky skin we live on: 5–10 km under the oceans, 30–70 km under continents. Drawn thicker here, it is really thinner than an apple's peel in proportion.", "Բարակ քարե թաղանթը, որի վրա ապրում ենք․ օվկիանոսների տակ՝ 5–10 կմ, մայրցամաքների տակ՝ 30–70 կմ։ Այստեղ գծված է ավելի հաստ, իրականում համամասնորեն խնձորի կեղևից էլ բարակ է։", "Тонкая каменная оболочка, на которой мы живём: 5–10 км под океанами, 30–70 км под материками. Здесь нарисована толще: на самом деле она тоньше кожуры яблока.")),
    P(95, 60, t("Mantle", "Թիկնոց", "Мантия"), t("About 2,900 km of hot rock that flows very slowly, a few centimetres a year. These currents move the plates.", "Մոտ 2900 կմ տաք ապար, որը շատ դանդաղ է հոսում՝ տարեկան մի քանի սանտիմետր։ Այդ հոսանքները շարժում են սալերը։", "Около 2900 км горячей породы, которая очень медленно течёт — несколько сантиметров в год. Эти потоки двигают плиты.")),
    P(195, 90, t("Outer core", "Արտաքին միջուկ", "Внешнее ядро"), t("Liquid iron and nickel. Its swirling creates the Earth's magnetic field, which turns a compass needle and shields us from the solar wind.", "Հեղուկ երկաթ և նիկել։ Նրա պտույտը ստեղծում է Երկրի մագնիսական դաշտը, որը շրջում է կողմնացույցի սլաքը և պաշտպանում մեզ արեգակնային քամուց։", "Жидкие железо и никель. Их движение создаёт магнитное поле Земли: оно поворачивает стрелку компаса и защищает от солнечного ветра.")),
    P(160, 112, t("Inner core", "Ներքին միջուկ", "Внутреннее ядро"), t("A solid ball of iron about 1,200 km in radius, as hot as the surface of the Sun (5,000–6,000 °C), kept solid by enormous pressure.", "Մոտ 1200 կմ շառավղով երկաթե պինդ գունդ, Արեգակի մակերևույթի չափ տաք (5000–6000 °C), որը պինդ է մնում հսկայական ճնշման շնորհիվ։", "Твёрдый железный шар радиусом около 1200 км, горячий, как поверхность Солнца (5000–6000 °C); твёрдым его держит огромное давление.")),
    P(232, 50, t("Lithosphere", "Լիթոսֆերա", "Литосфера"), t("The crust plus the top of the mantle, broken into plates that slide on the softer layer below.", "Երկրակեղևը և թիկնոցի վերին մասը միասին, որը բաժանված է սալերի, որոնք սահում են ավելի փափուկ ներքևի շերտի վրա։", "Кора вместе с верхом мантии, разбитая на плиты, которые скользят по более мягкому слою.")),
  ],
};

/* ---------------- a volcano ---------------- */

const volcano: Diagram = {
  title: t("Inside a volcano", "Հրաբխի ներսում", "Внутри вулкана"),
  draw: () => (
    <g>
      <rect width="320" height="220" fill="#e0f2fe" />
      <path d="M150,26 q-30,-16 -10,-22 q14,-10 30,0 q22,-6 22,12 q16,4 6,16 Z" fill="#94a3b8" />
      <rect x="0" y="170" width="320" height="50" fill="#a8a29e" />
      <path d="M20,170 L140,52 L180,52 L300,170 Z" fill="#78716c" />
      {[0, 1, 2].map((k) => <path key={k} d={`M${44 + k * 22},${170 - k * 22} L${276 - k * 22},${170 - k * 22}`} stroke="#57534e" strokeWidth="1" opacity="0.6" />)}
      <ellipse cx="160" cy="200" rx="60" ry="14" fill="#dc2626" />
      <path d="M154,190 L154,56 L166,56 L166,190 Z" fill="#ef4444" />
      <path d="M166,120 L210,104 L212,110 L166,130 Z" fill="#ef4444" />
      <path d="M180,52 C200,80 214,110 236,134 C244,142 250,150 262,152" fill="none" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="160" cy="52" rx="20" ry="4" fill="#450a0a" />
    </g>
  ),
  parts: [
    P(160, 200, t("Magma chamber", "Մագմայի օջախ", "Магматический очаг"), t("A pool of molten rock a few kilometres underground. Gases dissolved in it push it upwards, like the fizz in a shaken bottle.", "Հալված ապարի ավազան գետնի տակ մի քանի կիլոմետր խորությամբ։ Նրանում լուծված գազերը մղում են այն դեպի վեր, ինչպես թափահարված շշի պղպջակները։", "Скопление расплавленной породы в нескольких километрах под землёй. Растворённые в ней газы выталкивают её вверх, как газ в встряхнутой бутылке.")),
    P(160, 140, t("Vent", "Արտածման խողովակ", "Жерло"), t("The channel through which magma rises. Once it reaches the surface it is called lava.", "Ուղի, որով մագման բարձրանում է։ Մակերևույթին հասնելուն պես այն կոչվում է լավա։", "Канал, по которому поднимается магма. На поверхности она называется лавой.")),
    P(160, 52, t("Crater", "Խառնարան", "Кратер"), t("The bowl at the top of the vent. When a volcano goes quiet, rain and snow can fill its crater with a lake; Crater Lake in the USA is almost 600 m deep.", "Արտածման խողովակի վերևում գտնվող գոգավորությունը։ Երբ հրաբուխը հանգչում է, անձրևն ու ձյունը կարող են նրա խառնարանը լցնել լճով․ ԱՄՆ-ի Քրեյթեր լիճը գրեթե 600 մ խորություն ունի։", "Чаша на вершине жерла. Когда вулкан затихает, дождь и снег могут заполнить кратер озером: Кратерное озеро в США глубиной почти 600 м.")),
    P(232, 130, t("Lava flow", "Լավայի հոսք", "Лавовый поток"), t("Lava runs down the slope and hardens into basalt. Lava flows dammed the valley where Lake Sevan now lies.", "Լավան հոսում է լանջն ի վար և պնդանում՝ վերածվելով բազալտի։ Լավայի հոսքերը փակել են այն հովիտը, որտեղ այժմ Սևանա լիճն է։", "Лава стекает по склону и застывает базальтом. Лавовые потоки перегородили долину, где теперь лежит Севан.")),
    P(160, 16, t("Ash cloud", "Մոխրի ամպ", "Пепловое облако"), t("Ash and gases shot high into the air. Volcanic ash pressed together becomes tuff, Armenia's pink building stone.", "Օդ բարձր նետված մոխիր և գազեր։ Սեղմված հրաբխային մոխիրը դառնում է տուֆ՝ Հայաստանի վարդագույն շինաքարը։", "Пепел и газы, выброшенные высоко в воздух. Спрессованный вулканический пепел становится туфом — розовым строительным камнем Армении.")),
    P(98, 120, t("Cone", "Կոն", "Конус"), t("Layers of hardened lava and ash from many eruptions. Ararat and Aragats were built this way.", "Բազմաթիվ ժայթքումներից պնդացած լավայի և մոխրի շերտեր։ Արարատը և Արագածը կառուցվել են այս ձևով։", "Слои застывшей лавы и пепла от многих извержений. Так построены Арарат и Арагац.")),
  ],
};

/* ---------------- a river system ---------------- */

const river: Diagram = {
  title: t("Parts of a river", "Գետի մասերը", "Части реки"),
  draw: () => (
    <g>
      <rect width="320" height="220" fill="#ecfccb" />
      <path d="M250,220 C260,200 280,190 320,186 L320,220 Z" fill="#38bdf8" />
      <path d="M0,40 L40,8 L70,34 L100,4 L140,30 L170,10 L200,40 L200,0 L0,0 Z" fill="#a8a29e" />
      <path d="M86,16 L100,4 L112,16 Z M30,16 L40,8 L50,16 Z" fill="#fff" />
      <path d="M10,60 C40,40 120,30 200,46 C250,56 290,90 304,130" fill="none" stroke="#a16207" strokeWidth="1.5" strokeDasharray="5 4" />
      <path d="M100,18 C104,40 96,58 110,74 C126,92 150,96 168,112 C186,128 172,146 196,158 C220,170 236,166 250,190 C256,200 262,206 268,214" fill="none" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
      <path d="M40,22 C52,44 70,60 96,66 C104,68 108,70 110,74" fill="none" stroke="#3b82f6" strokeWidth="3" />
      <path d="M260,96 C240,110 226,130 204,152" fill="none" stroke="#3b82f6" strokeWidth="3" />
      <ellipse cx="258" cy="92" rx="18" ry="9" fill="#38bdf8" />
      <path d="M268,214 l-12,6 M268,214 l2,6 M268,214 l12,4" stroke="#2563eb" strokeWidth="3" />
      <rect x="140" y="98" width="10" height="4" fill="#fff" transform="rotate(30 145 100)" />
    </g>
  ),
  parts: [
    P(100, 18, t("Source", "Ակունք", "Исток"), t("Where the river begins: a spring, a lake or a melting glacier high in the mountains.", "Որտեղ սկսվում է գետը․ աղբյուր, լիճ կամ բարձր լեռներում հալչող սառցադաշտ։", "Где начинается река: родник, озеро или тающий ледник высоко в горах.")),
    P(60, 50, t("Tributary", "Վտակ", "Приток"), t("A smaller river that flows into the main one. The main river with all its tributaries is a river system.", "Ավելի փոքր գետ, որը թափվում է գլխավորի մեջ։ Գլխավոր գետն իր բոլոր վտակներով գետային համակարգ է։", "Река поменьше, впадающая в главную. Главная река со всеми притоками — речная система.")),
    P(145, 100, t("Rapids and waterfalls", "Սահանքներ և ջրվեժներ", "Пороги и водопады"), t("In the mountains the river is fast and cuts a narrow valley; its energy can drive hydro stations.", "Լեռներում գետն արագահոս է և նեղ հովիտ է կտրում․ նրա էներգիան կարող է պտտել հիդրոկայանները։", "В горах река быстрая и пропиливает узкую долину; её энергия может вращать ГЭС.")),
    P(258, 92, t("Lake", "Լիճ", "Озеро"), t("Lakes store water and even out the flow; a tributary carries their water on to the main river.", "Լճերը ջուր են կուտակում և հավասարեցնում հոսքը․ վտակը նրանց ջուրը տանում է գլխավոր գետ։", "Озёра накапливают воду и выравнивают сток; приток несёт их воду в главную реку.")),
    P(196, 158, t("Meanders", "Գալարներ", "Меандры"), t("On the plain the river slows down and winds in loops, dropping sand and silt.", "Հարթավայրում գետը դանդաղում է և գալարվում՝ նստեցնելով ավազ և տիղմ։", "На равнине река замедляется и петляет, оставляя песок и ил.")),
    P(268, 212, t("Mouth", "Գետաբերան", "Устье"), t("Where the river flows into a sea, a lake or another river. Some rivers split here into a delta of channels, like the Nile.", "Որտեղ գետը թափվում է ծով, լիճ կամ այլ գետ։ Որոշ գետեր այստեղ բաժանվում են բազուկների դելտայի, ինչպես Նեղոսը։", "Где река впадает в море, озеро или другую реку. Некоторые реки здесь делятся на рукава дельты, как Нил.")),
    P(204, 47, t("Watershed", "Ջրբաժան", "Водораздел"), t("The line, usually along ridges, that separates two river basins. The Armenian Highlands are a watershed for the Euphrates, Tigris, Araks and Kura.", "Գիծը, սովորաբար լեռնաշղթաների երկայնքով, որը բաժանում է երկու գետավազաններ։ Հայկական լեռնաշխարհը ջրբաժան է Եփրատի, Տիգրիսի, Արաքսի և Կուրի համար։", "Линия, обычно по хребтам, разделяющая два речных бассейна. Армянское нагорье — водораздел Евфрата, Тигра, Аракса и Куры.")),
  ],
};

/* ---------------- layers of the atmosphere ---------------- */

const AY = (km: number) => 206 - km * 1.9;

const atmoslayers: Diagram = {
  title: t("Layers of the atmosphere", "Մթնոլորտի շերտերը", "Слои атмосферы"),
  draw: (lang) => (
    <g>
      <rect x="0" y={AY(100)} width="320" height={AY(85) - AY(100)} fill="#1e1b4b" />
      <rect x="0" y={AY(85)} width="320" height={AY(50) - AY(85)} fill="#312e81" />
      <rect x="0" y={AY(50)} width="320" height={AY(12) - AY(50)} fill="#3b82f6" />
      <rect x="0" y={AY(30)} width="320" height={AY(20) - AY(30)} fill="#a78bfa" opacity="0.55" />
      <rect x="0" y={AY(12)} width="320" height={206 - AY(12)} fill="#bae6fd" />
      <rect x="0" y="206" width="320" height="14" fill="#65a30d" />
      <path d={`M40,206 L70,${AY(8.8)} L100,206 Z`} fill="#78716c" />
      <path d={`M62,${AY(6.5)} L70,${AY(8.8)} L78,${AY(6.5)} Z`} fill="#fff" />
      <path d={`M150,${AY(10.5)} l18,0 l6,-3 l-6,0 l-4,-5 l-3,0 l2,5 l-13,0 Z`} fill="#334155" />
      <ellipse cx="230" cy={AY(4)} rx="22" ry="6" fill="#fff" />
      {[0, 1, 2].map((k) => <line key={k} x1={200 + k * 30} y1={AY(80 + k * 2)} x2={190 + k * 30} y2={AY(75 + k * 2)} stroke="#fde68a" strokeWidth="2" />)}
      <path d={`M120,${AY(100)} q20,8 40,0 q20,-8 40,0`} fill="none" stroke="#4ade80" strokeWidth="3" opacity="0.8" />
      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((km) => (
        <text key={km} x="316" y={AY(km) + 3} textAnchor="end" fontSize="7" fontWeight="800" fill={km >= 50 ? "#e0e7ff" : "#1e3a8a"}>{km}</text>
      ))}
      <text x="300" y={AY(100) + 3} textAnchor="end" fontSize="7" fontWeight="800" fill="#e0e7ff">{L(t("km", "կմ", "км"), lang)}</text>
    </g>
  ),
  parts: [
    P(20, AY(6), t("Troposphere", "Տրոպոսֆերա", "Тропосфера"), t("From the ground up to 8–18 km (higher over the equator). It holds about 80% of the air's mass, all the clouds and the weather. Temperature falls about 6 °C per km.", "Գետնից մինչև 8–18 կմ (հասարակածի վրա ավելի բարձր)։ Պարունակում է օդի զանգվածի մոտ 80%-ը, բոլոր ամպերը և եղանակը։ Ջերմաստիճանն ընկնում է մոտ 6 °C յուրաքանչյուր կմ-ում։", "От земли до 8–18 км (над экватором выше). Здесь около 80% массы воздуха, все облака и погода. Температура падает примерно на 6 °C на км.")),
    P(70, AY(8.8), t("Everest, 8,849 m", "Էվերեստ, 8849 մ", "Эверест, 8849 м"), t("Even the highest mountain stays inside the troposphere. At its top the air has only a third of the oxygen pressure at sea level.", "Նույնիսկ ամենաբարձր լեռը մնում է տրոպոսֆերայի ներսում։ Նրա գագաթին թթվածնի ճնշումը ծովի մակարդակի ճնշման միայն մեկ երրորդն է։", "Даже высочайшая гора остаётся в тропосфере. На вершине давление кислорода втрое ниже, чем у моря.")),
    P(160, AY(10.5), t("Airliners", "Ուղևորատար ինքնաթիռներ", "Авиалайнеры"), t("Jets cruise at 10–12 km, near the top of the troposphere, above most clouds and bumpy weather.", "Ռեակտիվ ինքնաթիռները թռչում են 10–12 կմ բարձրության վրա՝ տրոպոսֆերայի վերին մասի մոտ, ամպերի և անհանգիստ եղանակի մեծ մասից վեր։", "Самолёты летят на 10–12 км, у верхней границы тропосферы, выше большинства облаков и болтанки.")),
    P(40, AY(25), t("Ozone layer", "Օզոնային շերտ", "Озоновый слой"), t("At about 20–30 km, in the stratosphere. Ozone absorbs most of the Sun's harmful ultraviolet rays.", "Մոտ 20–30 կմ բարձրության վրա՝ ստրատոսֆերայում։ Օզոնը կլանում է Արեգակի վնասակար ուլտրամանուշակագույն ճառագայթների մեծ մասը։", "На высоте около 20–30 км, в стратосфере. Озон поглощает большую часть вредных ультрафиолетовых лучей Солнца.")),
    P(250, AY(40), t("Stratosphere", "Ստրատոսֆերա", "Стратосфера"), t("Up to about 50 km. The air is calm and dry, and it gets warmer with height because ozone absorbs sunlight.", "Մինչև մոտ 50 կմ։ Օդը հանգիստ է և չոր, և բարձրության հետ տաքանում է, քանի որ օզոնը կլանում է արևի լույսը։", "До 50 км. Воздух спокойный и сухой и с высотой теплеет, потому что озон поглощает солнечный свет.")),
    P(230, AY(80), t("Mesosphere: meteors", "Մեզոսֆերա․ երկնաքարեր", "Мезосфера: метеоры"), t("From 50 to about 85 km, the coldest layer (below −80 °C). Most meteors burn up here as shooting stars.", "50-ից մինչև մոտ 85 կմ, ամենացուրտ շերտը (−80 °C-ից ցածր)։ Երկնաքարերի մեծ մասն այստեղ այրվում է՝ որպես ընկնող աստղեր։", "От 50 до 85 км, самый холодный слой (ниже −80 °C). Здесь сгорает большинство метеоров — «падающие звёзды».")),
    P(160, AY(97), t("Thermosphere: auroras", "Թերմոսֆերա․ բևեռափայլեր", "Термосфера: полярные сияния"), t("Above about 85 km the air is extremely thin. Auroras glow here, and the International Space Station orbits at about 400 km.", "Մոտ 85 կմ-ից վեր օդը չափազանց նոսր է։ Այստեղ փայլում են բևեռափայլերը, իսկ Միջազգային տիեզերակայանը պտտվում է մոտ 400 կմ բարձրության վրա։", "Выше 85 км воздух крайне разрежен. Здесь светятся полярные сияния, а МКС летает на высоте около 400 км.")),
  ],
};

/* ---------------- altitudinal zones of Armenia ---------------- */

const ZY = (m: number) => 206 - ((m - 400) * 186) / 3800;

const altzones: Diagram = {
  title: t("Altitudinal zones of Armenia", "Հայաստանի բարձունքային գոտիները", "Высотные пояса Армении"),
  draw: (lang) => (
    <g>
      <defs>
        <clipPath id="geog-alt-mountain"><path d={`M10,206 L170,${ZY(4090)} L310,206 Z`} /></clipPath>
      </defs>
      <rect width="320" height="220" fill="#e0f2fe" />
      <g clipPath="url(#geog-alt-mountain)">
        <rect x="170" y={ZY(1300)} width="150" height={206 - ZY(1300)} fill="#e7c48a" />
        <rect x="170" y={ZY(2200)} width="150" height={ZY(1300) - ZY(2200)} fill="#d9e36b" />
        <rect x="0" y={ZY(2200)} width="170" height={206 - ZY(2200)} fill="#15803d" />
        <rect x="0" y={ZY(3500)} width="320" height={ZY(2200) - ZY(3500)} fill="#86efac" />
        <rect x="0" y="0" width="320" height={ZY(3500)} fill="#f8fafc" />
        {[[60, 150], [80, 170], [100, 132], [120, 160], [140, 112]].map(([x, y], k) => <path key={k} d={`M${x},${y} l-6,10 h12 Z`} fill="#14532d" />)}
        {[[120, 84], [150, 74], [200, 86], [222, 98]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="2" fill={["#f472b6", "#facc15", "#a78bfa", "#fb923c"][k]} />)}
      </g>
      <path d={`M10,206 L170,${ZY(4090)} L310,206`} fill="none" stroke="#57534e" strokeWidth="1.5" />
      {[500, 1000, 1500, 2000, 2500, 3000, 3500, 4000].map((m) => <text key={m} x="316" y={ZY(m) + 3} textAnchor="end" fontSize="7" fontWeight="800" fill="#334155">{m}</text>)}
      <text x="40" y="216" fontSize="7.5" fontWeight="800" fill="#334155">{L(t("north-east slope", "հյուսիսարևելյան լանջ", "северо-восточный склон"), lang)}</text>
      <text x="200" y="216" fontSize="7.5" fontWeight="800" fill="#334155">{L(t("towards the Ararat plain", "դեպի Արարատյան դաշտ", "к Араратской равнине"), lang)}</text>
    </g>
  ),
  parts: [
    P(258, ZY(1000), t("Semi-desert, 800–1,300 m", "Կիսաանապատ, 800–1300 մ", "Полупустыня, 800–1300 м"), t("The Ararat plain: hot dry summers, wormwood and camelthorn, brown soils. With irrigation, the land of vineyards and apricot orchards.", "Արարատյան դաշտ․ շոգ, չոր ամառ, օշինդր և ուղտափուշ, գորշ հողեր։ Ոռոգման դեպքում՝ խաղողի այգիների և ծիրանենիների երկիր։", "Араратская равнина: жаркое сухое лето, полынь и верблюжья колючка, бурые почвы. С орошением — край виноградников и абрикосовых садов.")),
    P(220, ZY(1750), t("Steppe, 1,300–2,000 m", "Տափաստան, 1300–2000 մ", "Степь, 1300–2000 м"), t("Grasses and feather grass on chernozems, the best soils of the country: grain fields of Shirak and around Sevan.", "Խոտեր և փետրախոտ սևահողերի վրա՝ երկրի լավագույն հողերը․ Շիրակի և Սևանի շրջակայքի հացահատիկի դաշտերը։", "Злаки и ковыль на чернозёмах, лучших почвах страны: хлебные поля Ширака и Севанского бассейна.")),
    P(100, ZY(1300), t("Forest, 500–2,200 m", "Անտառ, 500–2200 մ", "Лес, 500–2200 м"), t("Oak, beech and hornbeam on the wetter north-eastern and south-eastern slopes (Tavush, Lori, Syunik). Forests cover only about 10–11% of Armenia.", "Կաղնի, հաճարենի և բոխի ավելի խոնավ հյուսիսարևելյան և հարավարևելյան լանջերին (Տավուշ, Լոռի, Սյունիք)։ Անտառները զբաղեցնում են Հայաստանի միայն մոտ 10–11%-ը։", "Дуб, бук и граб на более влажных северо-восточных и юго-восточных склонах (Тавуш, Лори, Сюник). Леса занимают лишь около 10–11% Армении.")),
    P(176, ZY(2850), t("Subalpine and alpine meadows, 2,200–3,500 m", "Մերձալպյան և ալպյան մարգագետիններ, 2200–3500 մ", "Субальпийские и альпийские луга, 2200–3500 м"), t("Short summers, bright flowers and rich summer pastures where herds are driven up for the season.", "Կարճ ամառ, վառ ծաղիկներ և հարուստ ամառային արոտավայրեր, որտեղ նախիրները քշում են ամբողջ եղանակի համար։", "Короткое лето, яркие цветы и богатые летние пастбища, куда на сезон перегоняют стада.")),
    P(170, ZY(3800), t("Rocks and snow, above 3,500 m", "Ժայռեր և ձյուն, 3500 մ-ից բարձր", "Скалы и снег, выше 3500 м"), t("Only lichens survive. Snowfields here feed rivers in summer. The summit of Aragats is 4,090 m.", "Գոյատևում են միայն քարաքոսերը։ Այստեղի ձնադաշտերն ամռանը սնում են գետերը։ Արագածի գագաթը 4090 մ է։", "Выживают только лишайники. Снежники питают реки летом. Вершина Арагаца — 4090 м.")),
  ],
};

export const DIAGRAMS: Record<string, Diagram> = { globegrid, contour, earthlayers, volcano, river, atmoslayers, altzones };
