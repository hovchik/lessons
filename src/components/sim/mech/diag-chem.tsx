"use client";

import { t } from "../labels";
import type { Diagram } from "./types";

/* ---------------- lab equipment ---------------- */

const lab: Diagram = {
  title: t("Laboratory equipment", "Լաբորատոր սարքավորումներ", "Лабораторное оборудование"),
  h: 200,
  draw: () => (
    <g fill="none" stroke="#475569" strokeWidth="2" strokeLinejoin="round">
      <path d="M20,60 L20,140 Q20,146 26,146 L60,146 Q66,146 66,140 L66,60" />
      <path d="M22,110 L22,140 Q22,144 26,144 L60,144 Q64,144 64,140 L64,110 Z" fill="#bae6fd" stroke="none" />
      <path d="M96,40 L96,130 A10,10 0 0 0 116,130 L116,40" />
      <path d="M98,100 L98,130 A8,8 0 0 0 114,130 L114,100 Z" fill="#fecaca" stroke="none" />
      <path d="M150,60 L150,84 L132,140 L188,140 L170,84 L170,60" />
      <path d="M140,116 L132,140 L188,140 L180,116 Z" fill="#bbf7d0" stroke="none" />
      <circle cx="232" cy="118" r="24" />
      <path d="M226,94 L226,60 L238,60 L238,94" />
      <path d="M210,126 A24,24 0 0 0 254,126 Z" fill="#fde68a" stroke="none" />
      <path d="M270,40 L270,150 L280,150 L280,40" />
      <path d="M271,100 L271,149 L279,149 L279,100 Z" fill="#c4b5fd" stroke="none" />
      <path d="M30,166 L80,166 L62,186 L48,186 Z" />
      <path d="M100,180 L140,180 L134,160 L106,160 Z" fill="#94a3b8" />
      <path d="M120,160 q-7,-10 0,-20 q7,10 0,20" fill="#60a5fa" stroke="none" />
      <path d="M170,172 Q200,190 230,172" />
      <rect x="250" y="164" width="56" height="22" rx="3" fill="#e2e8f0" />
      <rect x="258" y="168" width="40" height="8" fill="#0f172a" stroke="none" />
    </g>
  ),
  parts: [
    { x: 43, y: 100, name: t("Beaker", "Բաժակ", "Химический стакан"), text: t("For mixing, heating and holding liquids. The marks show the volume only roughly.", "Հեղուկներ խառնելու, տաքացնելու և պահելու համար։ Գծանշումները ծավալը ցույց են տալիս մոտավոր։", "Для смешивания, нагревания и хранения жидкостей. Деления показывают объём лишь приблизительно.") },
    { x: 106, y: 70, name: t("Test tube", "Փորձանոթ", "Пробирка"), text: t("For small experiments. When heating, point it away from people and warm it evenly.", "Փոքր փորձերի համար։ Տաքացնելիս ուղղի՛ր այն մարդկանցից դեպի դուրս և տաքացրո՛ւ հավասարաչափ։", "Для небольших опытов. При нагревании направляй её от людей и прогревай равномерно.") },
    { x: 160, y: 100, name: t("Conical flask", "Կոնաձև կոլբա", "Коническая колба"), text: t("Its narrow neck stops splashing when you swirl it, which makes it ideal for titrations.", "Նրա նեղ վիզը թույլ չի տալիս հեղուկին թափվել պտտելիս, ուստի հարմար է տիտրման համար։", "Узкое горлышко не даёт жидкости расплёскиваться при взбалтывании, поэтому она удобна для титрования.") },
    { x: 232, y: 112, name: t("Round-bottomed flask", "Կլորահատակ կոլբա", "Круглодонная колба"), text: t("Heats evenly from all sides; used for boiling and distillation.", "Տաքանում է բոլոր կողմերից հավասարաչափ․ օգտագործվում է եռացնելու և թորելու համար։", "Нагревается равномерно со всех сторон; применяется для кипячения и перегонки.") },
    { x: 275, y: 80, name: t("Measuring cylinder", "Չափագլան", "Мерный цилиндр"), text: t("Measures the volume of a liquid accurately. Read the bottom of the curved surface at eye level.", "Ճշգրիտ չափում է հեղուկի ծավալը։ Կարդա՛ գոգավոր մակերևույթի ստորին մասով՝ աչքերի մակարդակում։", "Точно измеряет объём жидкости. Отсчёт ведут по нижнему краю мениска на уровне глаз.") },
    { x: 55, y: 174, name: t("Funnel", "Ձագար", "Воронка"), text: t("With filter paper inside it separates an insoluble solid from a liquid.", "Ներսում զտիչ թղթով այն անլույծ պինդ նյութն անջատում է հեղուկից։", "С бумажным фильтром внутри отделяет нерастворимое твёрдое вещество от жидкости.") },
    { x: 120, y: 170, name: t("Spirit lamp or burner", "Սպիրտայրոց կամ այրիչ", "Спиртовка или горелка"), text: t("Source of heat. Never light one burner from another and put a spirit lamp out with its cap, not by blowing.", "Ջերմության աղբյուր։ Երբեք մի այրոցը մյուսից մի՛ վառիր, իսկ սպիրտայրոցը հանգցրո՛ւ կափարիչով, ոչ թե փչելով։", "Источник тепла. Никогда не зажигай одну спиртовку от другой и гаси её колпачком, а не задуванием.") },
    { x: 200, y: 180, name: t("Evaporating dish", "Գոլորշիացման թաս", "Выпарительная чашка"), text: t("A shallow porcelain dish for evaporating a solution to get crystals.", "Ճենապակե ծանծաղ թաս՝ լուծույթը գոլորշիացնելու և բյուրեղներ ստանալու համար։", "Мелкая фарфоровая чашка для выпаривания раствора и получения кристаллов.") },
    { x: 278, y: 175, name: t("Balance", "Կշեռք", "Весы"), text: t("Weighs substances. Never put chemicals straight on the pan; use paper or a dish.", "Կշռում է նյութերը։ Երբեք քիմիական նյութերն ուղղակի նժարին մի՛ դիր․ օգտագործի՛ր թուղթ կամ թաս։", "Взвешивает вещества. Никогда не клади реактивы прямо на чашку весов; используй бумагу или чашку.") },
  ],
};

/* ---------------- flame zones ---------------- */

const burner: Diagram = {
  title: t("The flame of a burner", "Այրիչի բոցը", "Пламя горелки"),
  h: 230,
  draw: () => (
    <g>
      <path d="M160,40 C112,90 118,170 160,190 C202,170 208,90 160,40 Z" fill="#fde68a" opacity="0.6" />
      <path d="M160,70 C130,110 132,170 160,185 C188,170 190,110 160,70 Z" fill="#60a5fa" opacity="0.7" />
      <path d="M160,120 C148,140 148,175 160,186 C172,175 172,140 160,120 Z" fill="#1e3a8a" opacity="0.5" />
      <rect x="150" y="190" width="20" height="30" fill="#94a3b8" />
      <rect x="128" y="220" width="64" height="8" rx="3" fill="#64748b" />
    </g>
  ),
  parts: [
    { x: 160, y: 168, name: t("Inner zone", "Ներքին գոտի", "Внутренняя зона"), text: t("Unburnt gas mixed with air. It is the coolest part, about 300–500 °C.", "Չայրված գազ՝ օդի հետ խառնված։ Ամենասառը մասն է՝ մոտ 300–500 °C։", "Несгоревший газ в смеси с воздухом. Самая холодная часть, около 300–500 °C.") },
    { x: 160, y: 110, name: t("Middle zone", "Միջին գոտի", "Средняя зона"), text: t("Gas burns with little oxygen. It can take oxygen away from oxides: a reducing zone.", "Գազն այրվում է քիչ թթվածնով։ Այն կարող է թթվածին խլել օքսիդներից․ վերականգնող գոտի է։", "Газ горит при недостатке кислорода. Может отнимать кислород у оксидов: восстановительная зона.") },
    { x: 160, y: 56, name: t("Outer zone", "Արտաքին գոտի", "Внешняя зона"), text: t("Full combustion with plenty of air. The hottest part, up to about 1500 °C: heat things here, just above the tip of the middle cone.", "Լրիվ այրում՝ շատ օդի առկայությամբ։ Ամենատաք մասը՝ մինչև մոտ 1500 °C․ տաքացրո՛ւ այստեղ՝ միջին կոնի գագաթից քիչ վեր։", "Полное сгорание при избытке воздуха. Самая горячая часть, до 1500 °C: нагревай здесь, чуть выше вершины средней зоны.") },
  ],
};

/* ---------------- oil fractionating column ---------------- */

const FRACTIONS = [
  { y: 40, c: "#e0f2fe" }, { y: 70, c: "#fef9c3" }, { y: 100, c: "#fde68a" }, { y: 130, c: "#fbbf24" }, { y: 160, c: "#d97706" }, { y: 190, c: "#78350f" },
];

const oilcolumn: Diagram = {
  title: t("Refining crude oil", "Նավթի թորում", "Перегонка нефти"),
  h: 230,
  draw: () => (
    <g>
      <defs>
        <linearGradient id="oil-col" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#bfdbfe" />
          <stop offset="1" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <rect x="120" y="20" width="70" height="190" rx="12" fill="url(#oil-col)" stroke="#475569" strokeWidth="2" />
      {FRACTIONS.map((f, k) => (
        <g key={k}>
          <line x1="120" x2="190" y1={f.y + 12} y2={f.y + 12} stroke="#475569" strokeDasharray="4 3" />
          <line x1="190" x2="240" y1={f.y} y2={f.y} stroke="#475569" strokeWidth="3" />
          <circle cx="250" cy={f.y} r="9" fill={f.c} stroke="#475569" />
        </g>
      ))}
      <path d="M40,200 L120,200" stroke="#475569" strokeWidth="4" />
      <rect x="40" y="186" width="40" height="28" rx="4" fill="#ef4444" />
    </g>
  ),
  parts: [
    { x: 60, y: 200, name: t("Heater", "Տաքացուցիչ", "Печь"), text: t("Crude oil is heated to about 350 °C and most of it turns to vapour.", "Հում նավթը տաքացվում է մինչև մոտ 350 °C, և նրա մեծ մասը գոլորշու է վերածվում։", "Нефть нагревают примерно до 350 °C, и большая её часть превращается в пар.") },
    { x: 155, y: 120, name: t("Column", "Թորման աշտարակ", "Ректификационная колонна"), text: t("It is hot at the bottom and cool at the top. Each substance condenses on the tray where the temperature drops below its boiling point.", "Ներքևում տաք է, վերևում՝ սառը։ Յուրաքանչյուր նյութ խտանում է այն սկուտեղի վրա, որտեղ ջերմաստիճանն իջնում է նրա եռման ջերմաստիճանից ցածր։", "Внизу горячо, наверху холодно. Каждое вещество конденсируется на той тарелке, где температура ниже его температуры кипения.") },
    { x: 250, y: 40, name: t("Gases", "Գազեր", "Газы"), text: t("Methane to butane, below 40 °C: bottled gas for cooking.", "Մեթանից բութան, 40 °C-ից ցածր․ բալոնային գազ՝ եփելու համար։", "От метана до бутана, ниже 40 °C: баллонный газ для плит.") },
    { x: 250, y: 70, name: t("Petrol", "Բենզին", "Бензин"), text: t("C₅–C₁₁, 40–200 °C: fuel for cars.", "C₅–C₁₁, 40–200 °C․ ավտոմեքենաների վառելիք։", "C₅–C₁₁, 40–200 °C: топливо для машин.") },
    { x: 250, y: 100, name: t("Kerosene", "Կերոսին", "Керосин"), text: t("C₁₀–C₁₆, 180–270 °C: fuel for jet planes.", "C₁₀–C₁₆, 180–270 °C․ ռեակտիվ ինքնաթիռների վառելիք։", "C₁₀–C₁₆, 180–270 °C: топливо для реактивных самолётов.") },
    { x: 250, y: 130, name: t("Diesel", "Դիզելային վառելիք", "Дизельное топливо"), text: t("C₁₄–C₂₀, 250–350 °C: lorries, buses and trains.", "C₁₄–C₂₀, 250–350 °C․ բեռնատարներ, ավտոբուսներ և գնացքներ։", "C₁₄–C₂₀, 250–350 °C: грузовики, автобусы и поезда.") },
    { x: 250, y: 160, name: t("Lubricating oil", "Քսայուղ", "Смазочные масла"), text: t("C₂₀–C₅₀: oils and waxes for engines and candles.", "C₂₀–C₅₀․ յուղեր և մոմեր՝ շարժիչների և մոմերի համար։", "C₂₀–C₅₀: масла и парафины для двигателей и свечей.") },
    { x: 250, y: 190, name: t("Bitumen (fuel oil residue)", "Բիտում (մազութ)", "Мазут и гудрон"), text: t("The heaviest part, which does not boil: used for roads and roofs.", "Ամենածանր մասը, որը չի եռում․ օգտագործվում է ճանապարհների և տանիքների համար։", "Самая тяжёлая часть, которая не кипит: идёт на дороги и крыши.") },
  ],
};

/* ---------------- hazard pictograms ---------------- */

const SIGNS: Array<{ x: number; y: number; icon: (x: number, y: number) => React.ReactNode }> = [
  { x: 44, y: 56, icon: (x, y) => <path d={`M${x},${y + 14} C${x - 12},${y + 4} ${x - 4},${y - 8} ${x},${y - 14} C${x + 2},${y - 4} ${x + 12},${y} ${x},${y + 14} Z`} fill="#0f172a" /> },
  { x: 118, y: 56, icon: (x, y) => <g fill="#0f172a"><circle cx={x} cy={y - 4} r="9" /><rect x={x - 6} y={y + 4} width="12" height="6" /><circle cx={x - 3.5} cy={y - 5} r="2.5" fill="#fff" /><circle cx={x + 3.5} cy={y - 5} r="2.5" fill="#fff" /></g> },
  { x: 192, y: 56, icon: (x, y) => <g fill="#0f172a"><path d={`M${x - 14},${y - 8} l8,0 l-2,10 Z`} /><path d={`M${x + 4},${y - 8} l8,0 l-2,10 Z`} /><rect x={x - 14} y={y + 8} width="28" height="5" /></g> },
  { x: 266, y: 56, icon: (x, y) => <g fill="#0f172a"><circle cx={x} cy={y} r="8" fill="none" stroke="#0f172a" strokeWidth="3" /><path d={`M${x},${y - 8} q-6,-6 0,-10 q6,4 0,10`} /></g> },
  { x: 81, y: 140, icon: (x, y) => <text x={x} y={y + 8} textAnchor="middle" fontSize="26" fontWeight="900" fill="#0f172a">!</text> },
  { x: 155, y: 140, icon: (x, y) => <g fill="#0f172a">{[0, 1, 2, 3, 4, 5, 6, 7].map((k) => <line key={k} x1={x} y1={y} x2={x + Math.cos(k * 0.785) * 14} y2={y + Math.sin(k * 0.785) * 14} stroke="#0f172a" strokeWidth="3" />)}<circle cx={x} cy={y} r="5" /></g> },
  { x: 229, y: 140, icon: (x, y) => <g><path d={`M${x - 14},${y + 10} L${x + 14},${y + 10}`} stroke="#0f172a" strokeWidth="3" /><path d={`M${x - 6},${y + 10} L${x - 6},${y - 6} L${x - 12},${y - 6} L${x - 4},${y - 14} L${x + 4},${y - 6} L${x - 2},${y - 6}`} fill="#0f172a" /><ellipse cx={x + 8} cy={y + 4} rx="6" ry="3" fill="#0f172a" /></g> },
];

const hazards: Diagram = {
  title: t("Hazard signs on chemicals", "Վտանգի նշաններ քիմիական նյութերի վրա", "Знаки опасности на реактивах"),
  w: 310,
  h: 196,
  draw: () => (
    <g>
      {SIGNS.map((s, k) => (
        <g key={k}>
          <rect x={s.x - 22} y={s.y - 22} width="44" height="44" fill="#fff" stroke="#dc2626" strokeWidth="4" transform={`rotate(45 ${s.x} ${s.y})`} />
          {s.icon(s.x, s.y)}
        </g>
      ))}
    </g>
  ),
  parts: [
    { x: 44, y: 94, name: t("Flammable", "Դյուրավառ", "Огнеопасно"), text: t("Catches fire easily: ethanol, petrol, acetone. Keep away from flames.", "Հեշտությամբ բռնկվում է․ էթանոլ, բենզին, ացետոն։ Պահի՛ր կրակից հեռու։", "Легко загорается: этанол, бензин, ацетон. Держи подальше от огня.") },
    { x: 118, y: 94, name: t("Toxic", "Թունավոր", "Токсично"), text: t("Can poison even in small amounts. Never taste anything in the lab.", "Կարող է թունավորել նույնիսկ փոքր քանակով։ Լաբորատորիայում երբեք ոչինչ մի՛ համտեսիր։", "Может отравить даже в малых количествах. Никогда ничего не пробуй на вкус в лаборатории.") },
    { x: 192, y: 94, name: t("Corrosive", "Քայքայիչ", "Едкое"), text: t("Burns skin and eats metal: strong acids and alkalis. Wear goggles and gloves; add acid to water, never water to acid.", "Այրում է մաշկը և քայքայում մետաղը․ ուժեղ թթուներ և հիմքեր։ Կրի՛ր ակնոցներ և ձեռնոցներ, թթուն լցրո՛ւ ջրի մեջ, ոչ թե ջուրը թթվի մեջ։", "Обжигает кожу и разъедает металл: сильные кислоты и щёлочи. Надень очки и перчатки; лей кислоту в воду, а не воду в кислоту.") },
    { x: 266, y: 94, name: t("Oxidiser", "Օքսիդիչ", "Окислитель"), text: t("Gives oxygen and makes other things burn fiercely: potassium permanganate, hydrogen peroxide.", "Տալիս է թթվածին և ուժեղացնում այլ նյութերի այրումը․ կալիումի պերմանգանատ, ջրածնի պերօքսիդ։", "Отдаёт кислород и заставляет другое гореть сильнее: перманганат калия, пероксид водорода.") },
    { x: 81, y: 178, name: t("Harmful or irritant", "Վնասակար կամ գրգռիչ", "Вредно или раздражает"), text: t("Irritates skin, eyes or lungs. Work in a ventilated place and wash your hands.", "Գրգռում է մաշկը, աչքերը կամ թոքերը։ Աշխատի՛ր օդափոխվող տեղում և լվա՛ ձեռքերդ։", "Раздражает кожу, глаза или лёгкие. Работай в проветриваемом месте и мой руки.") },
    { x: 155, y: 178, name: t("Explosive", "Պայթյունավտանգ", "Взрывоопасно"), text: t("May explode when heated, hit or mixed with other substances.", "Կարող է պայթել տաքացնելիս, հարվածելիս կամ այլ նյութերի հետ խառնելիս։", "Может взорваться при нагревании, ударе или смешивании с другими веществами.") },
    { x: 229, y: 178, name: t("Dangerous for the environment", "Վտանգավոր շրջակա միջավայրի համար", "Опасно для окружающей среды"), text: t("Harms fish and plants. Never pour it down the sink; it goes to a waste container.", "Վնասում է ձկներին և բույսերին։ Երբեք մի՛ թափիր լվացարանը, այն պետք է լցնել թափոնների տարայի մեջ։", "Вредит рыбам и растениям. Никогда не сливай в раковину, а собирай в контейнер для отходов.") },
  ],
};

export const DIAGRAMS: Record<string, Diagram> = { lab, burner, oilcolumn, hazards };
