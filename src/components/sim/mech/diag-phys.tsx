"use client";

import { L, t } from "../labels";
import { scatter, Tag } from "./draw";
import type { Diagram } from "./types";

const sun: Diagram = {
  title: t("Inside the Sun", "Արեգակի ներսում", "Внутри Солнца"),
  dark: true,
  draw: () => (
    <g>
      <circle cx="150" cy="115" r="98" fill="#fde68a" opacity="0.12" />
      <circle cx="150" cy="115" r="84" fill="#f97316" />
      <circle cx="150" cy="115" r="62" fill="#fb923c" />
      <circle cx="150" cy="115" r="40" fill="#fdba74" />
      <circle cx="150" cy="115" r="20" fill="#fef9c3" />
      {[[110, 52], [196, 70]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="6" fill="#7c2d12" />)}
      <path d="M220 60 q 40 -40 30 10" fill="none" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" />
    </g>
  ),
  parts: [
    { x: 150, y: 115, name: t("Core", "Միջուկ", "Ядро"), text: t("About 15 million °C. Hydrogen nuclei fuse into helium here, releasing the Sun's energy.", "Մոտ 15 միլիոն °C։ Այստեղ ջրածնի միջուկները սինթեզվում են հելիումի, և անջատվում է Արեգակի էներգիան։", "Около 15 миллионов °C. Здесь ядра водорода сливаются в гелий, выделяя энергию Солнца.") },
    { x: 150, y: 70, name: t("Radiative zone", "Ճառագայթման գոտի", "Зона лучистого переноса"), text: t("Energy creeps outwards as light, absorbed and re-emitted again and again. It takes many thousands of years to cross.", "Էներգիան դեպի դուրս է շարժվում լույսի տեսքով՝ բազմիցս կլանվելով և նորից ճառագայթվելով։ Այս գոտին անցնելու համար պահանջվում է հազարավոր տարիներ։", "Энергия пробирается наружу в виде света, многократно поглощаясь и переизлучаясь. Путь через зону занимает многие тысячи лет.") },
    { x: 92, y: 140, name: t("Convective zone", "Կոնվեկցիայի գոտի", "Конвективная зона"), text: t("Hot gas rises, cools at the top and sinks again, like boiling soup.", "Տաք գազը բարձրանում է, վերևում սառչում և նորից իջնում, ինչպես եռացող ապուրը։", "Горячий газ поднимается, остывает наверху и опускается снова, как кипящий суп.") },
    { x: 226, y: 150, name: t("Photosphere", "Ֆոտոսֆերա", "Фотосфера"), text: t("The visible surface, about 5500 °C. Almost all sunlight comes from this thin layer.", "Տեսանելի մակերևույթը, մոտ 5500 °C։ Արևի լույսի համարյա ամբողջը գալիս է այս բարակ շերտից։", "Видимая поверхность, около 5500 °C. Почти весь солнечный свет идёт из этого тонкого слоя.") },
    { x: 110, y: 52, name: t("Sunspots", "Արևաբծեր", "Солнечные пятна"), text: t("Darker, cooler patches where strong magnetic fields hold back the heat.", "Ավելի մուգ և սառը տեղամասեր, որտեղ ուժեղ մագնիսական դաշտը պահում է ջերմությունը։", "Тёмные, более холодные участки, где сильное магнитное поле сдерживает тепло.") },
    { x: 250, y: 40, name: t("Prominence and corona", "Պրոտուբերանց և պսակ", "Протуберанец и корона"), text: t("Loops of glowing gas and the thin outer atmosphere, over a million degrees. We see the corona during a total solar eclipse.", "Լուսարձակող գազի օղակներ և նոսր արտաքին մթնոլորտ՝ միլիոն աստիճանից ավելի տաք։ Պսակը երևում է Արեգակի լրիվ խավարման ժամանակ։", "Петли светящегося газа и разреженная внешняя атмосфера горячее миллиона градусов. Корону видно во время полного солнечного затмения.") },
  ],
};

const PLANETS = [
  { x: 52, r: 2.5, c: "#a8a29e" }, { x: 66, r: 4, c: "#fcd34d" }, { x: 82, r: 4.2, c: "#3b82f6" }, { x: 96, r: 3, c: "#ef4444" },
  { x: 150, r: 14, c: "#d97706" }, { x: 202, r: 11, c: "#fde68a" }, { x: 250, r: 7, c: "#67e8f9" }, { x: 290, r: 7, c: "#3b82f6" },
];

const solarsystem: Diagram = {
  title: t("The Solar System", "Արեգակնային համակարգը", "Солнечная система"),
  dark: true,
  h: 160,
  draw: () => (
    <g>
      <circle cx="-40" cy="80" r="70" fill="#facc15" />
      {scatter(40, 112, 60, 18, 40, 2).map((q, k) => <circle key={k} cx={q.x} cy={q.y} r="0.9" fill="#a8a29e" />)}
      {PLANETS.map((p, k) => <circle key={k} cx={p.x} cy="80" r={p.r} fill={p.c} />)}
      <ellipse cx="202" cy="80" rx="20" ry="4" fill="none" stroke="#fde68a" strokeWidth="2" />
    </g>
  ),
  parts: [
    { x: 14, y: 30, name: t("Sun", "Արեգակ", "Солнце"), text: t("A star holding 99.8% of the mass of the whole system. Its gravity keeps the planets in their orbits.", "Աստղ, որի մեջ է ամբողջ համակարգի զանգվածի 99,8%-ը։ Նրա ձգողությունը մոլորակները պահում է ուղեծրերում։", "Звезда, в которой 99,8% массы всей системы. Её притяжение удерживает планеты на орбитах.") },
    { x: 74, y: 112, name: t("Rocky planets", "Երկրային մոլորակներ", "Планеты земной группы"), text: t("Mercury, Venus, Earth and Mars: small, dense, with solid surfaces.", "Մերկուրի, Վեներա, Երկիր և Մարս․ փոքր, խիտ, պինդ մակերևույթով։", "Меркурий, Венера, Земля и Марс: небольшие, плотные, с твёрдой поверхностью.") },
    { x: 121, y: 112, name: t("Asteroid belt", "Աստերոիդների գոտի", "Пояс астероидов"), text: t("Millions of rocky bodies between Mars and Jupiter.", "Միլիոնավոր քարե մարմիններ Մարսի և Յուպիտերի միջև։", "Миллионы каменных тел между Марсом и Юпитером.") },
    { x: 150, y: 50, name: t("Jupiter", "Յուպիտեր", "Юпитер"), text: t("The largest planet, a gas giant 318 times heavier than the Earth.", "Ամենամեծ մոլորակը, գազային հսկա, Երկրից 318 անգամ ծանր։", "Самая большая планета, газовый гигант в 318 раз тяжелее Земли.") },
    { x: 202, y: 50, name: t("Saturn", "Սատուրն", "Сатурн"), text: t("A gas giant with bright rings of ice and rock.", "Գազային հսկա՝ սառույցից և քարից կազմված պայծառ օղակներով։", "Газовый гигант с яркими кольцами изо льда и камня.") },
    { x: 270, y: 112, name: t("Uranus and Neptune", "Ուրան և Նեպտուն", "Уран и Нептун"), text: t("Ice giants far from the Sun. Neptune needs 165 years for one orbit.", "Արեգակից հեռու սառցային հսկաներ։ Նեպտունը մեկ պտույտը կատարում է 165 տարում։", "Ледяные гиганты вдали от Солнца. Нептун делает один оборот за 165 лет.") },
  ],
};

const galaxy: Diagram = {
  title: t("Our Galaxy, the Milky Way", "Մեր Գալակտիկան՝ Ծիր Կաթինը", "Наша Галактика — Млечный Путь"),
  dark: true,
  draw: () => (
    <g>
      {Array.from({ length: 260 }, (_, k) => {
        const arm = k % 2;
        const s = (k / 260) * 4.2;
        const a = s + arm * Math.PI;
        const r = 12 + s * 22;
        const j = scatter(1, -6, -6, 12, 12, k + 1)[0];
        return <circle key={k} cx={160 + Math.cos(a) * r + j.x} cy={110 + Math.sin(a) * r * 0.9 + j.y} r={k % 7 === 0 ? 1.6 : 1} fill={k % 5 === 0 ? "#bfdbfe" : "#e2e8f0"} opacity="0.85" />;
      })}
      <ellipse cx="160" cy="110" rx="22" ry="16" fill="#fde68a" opacity="0.8" />
      <circle cx="160" cy="110" r="3" fill="#000" />
      <circle cx="220" cy="148" r="4" fill="#facc15" />
      {[[40, 40], [290, 60], [60, 190], [280, 190]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="3" fill="#fef3c7" opacity="0.8" />)}
    </g>
  ),
  parts: [
    { x: 160, y: 88, name: t("Centre and bulge", "Կենտրոն և ուռուցք", "Центр и балдж"), text: t("A thick crowd of old stars. At the very centre is a black hole four million times heavier than the Sun.", "Հին աստղերի խիտ կուտակում։ Ամենակենտրոնում սև խոռոչ է՝ Արեգակից չորս միլիոն անգամ ծանր։", "Плотное скопление старых звёзд. В самом центре — чёрная дыра в четыре миллиона раз тяжелее Солнца.") },
    { x: 100, y: 70, name: t("Spiral arms", "Պարուրաձև թևեր", "Спиральные рукава"), text: t("Young stars and gas clouds where new stars are born.", "Երիտասարդ աստղեր և գազային ամպեր, որտեղ ծնվում են նոր աստղեր։", "Молодые звёзды и облака газа, где рождаются новые звёзды.") },
    { x: 220, y: 148, name: t("The Sun", "Արեգակը", "Солнце"), text: t("About 26 000 light years from the centre. It goes round the centre once in about 230 million years.", "Կենտրոնից մոտ 26 000 լուսային տարի հեռավորության վրա։ Կենտրոնի շուրջ մեկ պտույտը կատարում է մոտ 230 միլիոն տարում։", "Примерно в 26 000 световых лет от центра. Один оборот вокруг центра — около 230 миллионов лет.") },
    { x: 40, y: 40, name: t("Halo", "Հալո", "Гало"), text: t("A faint sphere of old star clusters and dark matter around the disc.", "Սկավառակի շուրջ հին աստղակույտերի և մութ նյութի աղոտ գունդ։", "Слабая сфера из старых звёздных скоплений и тёмной материи вокруг диска.") },
    { x: 290, y: 110, name: t("Size", "Չափերը", "Размер"), text: t("The disc is about 100 000 light years across and holds 100–400 billion stars.", "Սկավառակի տրամագիծը մոտ 100 000 լուսային տարի է, և այն պարունակում է 100–400 միլիարդ աստղ։", "Диаметр диска около 100 000 световых лет, в нём 100–400 миллиардов звёзд.") },
  ],
};

const galaxytypes: Diagram = {
  title: t("Kinds of galaxies", "Գալակտիկաների տեսակները", "Типы галактик"),
  dark: true,
  h: 170,
  draw: () => (
    <g>
      <ellipse cx="50" cy="70" rx="34" ry="24" fill="#fde68a" opacity="0.7" />
      <ellipse cx="50" cy="70" rx="16" ry="11" fill="#fef9c3" />
      {Array.from({ length: 90 }, (_, k) => { const a = (k / 90) * 7 + (k % 2) * Math.PI; const r = 4 + (k / 90) * 30; return <circle key={k} cx={130 + Math.cos(a) * r} cy={70 + Math.sin(a) * r * 0.7} r="1.1" fill="#bfdbfe" />; })}
      <line x1="196" x2="224" y1="70" y2="70" stroke="#fde68a" strokeWidth="6" strokeLinecap="round" />
      {Array.from({ length: 60 }, (_, k) => { const a = (k / 60) * 4 + (k % 2) * Math.PI; const r = 14 + (k / 60) * 18; return <circle key={k} cx={210 + Math.cos(a) * r} cy={70 + Math.sin(a) * r * 0.7} r="1.1" fill="#bfdbfe" />; })}
      {scatter(40, 260, 50, 46, 40, 8).map((q, k) => <circle key={k} cx={q.x} cy={q.y} r="1.3" fill="#c4b5fd" />)}
      <circle cx="150" cy="140" r="6" fill="#a78bfa" />
      <circle cx="150" cy="140" r="12" fill="#a78bfa" opacity="0.3" />
    </g>
  ),
  parts: [
    { x: 50, y: 110, name: t("Elliptical", "Էլիպսաձև", "Эллиптическая"), text: t("Round or oval clouds of old stars, with little gas.", "Հին աստղերի կլոր կամ ձվաձև կուտակումներ՝ քիչ գազով։", "Круглые или овальные скопления старых звёзд, почти без газа.") },
    { x: 130, y: 110, name: t("Spiral", "Պարուրաձև", "Спиральная"), text: t("A flat disc with arms where new stars form, like the Milky Way and Andromeda.", "Հարթ սկավառակ թևերով, որտեղ նոր աստղեր են ծնվում, ինչպես Ծիր Կաթինը և Անդրոմեդան։", "Плоский диск с рукавами, где рождаются звёзды, как Млечный Путь и Андромеда.") },
    { x: 210, y: 110, name: t("Barred spiral", "Ձողով պարուրաձև", "Спиральная с перемычкой"), text: t("The arms start from the ends of a bright bar of stars across the centre.", "Թևերը սկսվում են կենտրոնով անցնող աստղերի պայծառ ձողի ծայրերից։", "Рукава начинаются от концов яркой перемычки из звёзд через центр.") },
    { x: 282, y: 110, name: t("Irregular", "Անկանոն", "Неправильная"), text: t("No clear shape, like the Magellanic Clouds near our Galaxy.", "Հստակ ձև չունեն, ինչպես մեր Գալակտիկայի մոտ գտնվող Մագելանի ամպերը։", "Без чёткой формы, как Магеллановы Облака рядом с нашей Галактикой.") },
    { x: 172, y: 140, name: t("Markarian galaxies", "Մարգարյանի գալակտիկաներ", "Галактики Маркаряна"), text: t("Galaxies with unusually strong ultraviolet light. Beniamin Markarian found about 1500 of them at the Byurakan Observatory.", "Անսովոր ուժեղ ուլտրամանուշակագույն լույսով գալակտիկաներ։ Բենիամին Մարգարյանը Բյուրականի աստղադիտարանում հայտնաբերեց դրանցից մոտ 1500-ը։", "Галактики с необычно сильным ультрафиолетовым излучением. Вениамин Маркарян открыл около 1500 таких галактик в Бюраканской обсерватории.") },
  ],
};

const thermos: Diagram = {
  title: t("Why a thermos keeps tea hot", "Ինչու է թերմոսը թեյը տաք պահում", "Почему термос сохраняет чай горячим"),
  draw: () => (
    <g>
      <rect x="100" y="40" width="120" height="168" rx="20" fill="#cbd5e1" />
      <rect x="110" y="54" width="100" height="146" rx="16" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
      <rect x="122" y="66" width="76" height="126" rx="12" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3" />
      <rect x="126" y="90" width="68" height="98" rx="10" fill="#b45309" opacity="0.75" />
      <rect x="130" y="30" width="60" height="36" rx="6" fill="#475569" />
      {[0, 1, 2].map((k) => <path key={k} d={`M${145 + k * 14} 84 q 4 -6 0 -12`} fill="none" stroke="#fbbf24" strokeWidth="2" />)}
    </g>
  ),
  parts: [
    { x: 160, y: 46, name: t("Stopper", "Խցան", "Пробка"), text: t("Stops warm air rising out (convection) and steam escaping.", "Թույլ չի տալիս տաք օդին բարձրանալ ու դուրս գալ (կոնվեկցիա) և գոլորշուն հեռանալ։", "Не даёт тёплому воздуху уходить вверх (конвекция) и пару испаряться.") },
    { x: 116, y: 130, name: t("Vacuum between the walls", "Վակուում պատերի միջև", "Вакуум между стенками"), text: t("With no air between the two glass walls, heat cannot pass by conduction or convection.", "Երկու ապակե պատերի միջև օդ չկա, ուստի ջերմությունը չի կարող անցնել ջերմահաղորդմամբ կամ կոնվեկցիայով։", "Между стеклянными стенками нет воздуха, поэтому тепло не передаётся теплопроводностью и конвекцией.") },
    { x: 204, y: 100, name: t("Silvered walls", "Արծաթապատ պատեր", "Посеребрённые стенки"), text: t("Shiny surfaces reflect heat radiation back inside.", "Փայլուն մակերևույթներն անդրադարձնում են ջերմային ճառագայթումը դեպի ներս։", "Блестящие поверхности отражают тепловое излучение обратно внутрь.") },
    { x: 160, y: 150, name: t("Hot tea", "Տաք թեյ", "Горячий чай"), text: t("All three ways of heat transfer are blocked, so the tea stays hot for hours. It works the same way for ice cream in summer.", "Ջերմափոխանակման երեք եղանակներն էլ արգելափակված են, ուստի թեյը ժամերով տաք է մնում։ Նույն կերպ ամռանը պաղպաղակն է սառը մնում։", "Все три способа теплопередачи перекрыты, и чай часами остаётся горячим. Так же летом сохраняется холодным мороженое.") },
  ],
};

const eye: Diagram = {
  title: t("The human eye", "Մարդու աչքը", "Глаз человека"),
  draw: () => (
    <g>
      <circle cx="170" cy="110" r="78" fill="#fff" stroke="#94a3b8" strokeWidth="3" />
      <path d="M170 32 A 78 78 0 0 1 170 188" fill="none" stroke="#f472b6" strokeWidth="6" />
      <path d="M96 76 Q 76 110 96 144" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="3" />
      <rect x="98" y="72" width="6" height="22" fill="#78350f" />
      <rect x="98" y="126" width="6" height="22" fill="#78350f" />
      <ellipse cx="116" cy="110" rx="10" ry="24" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
      <path d="M244 100 L300 92 L300 128 L244 120 Z" fill="#fbbf24" />
      <path d="M20 80 L116 110 L248 136 M20 140 L116 110 L248 84" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />
    </g>
  ),
  parts: [
    { x: 84, y: 110, name: t("Cornea", "Եղջերաթաղանթ", "Роговица"), text: t("The clear front window of the eye. It does most of the bending of light.", "Աչքի թափանցիկ առջևի «պատուհանը»։ Լույսի բեկման մեծ մասը կատարվում է այստեղ։", "Прозрачное переднее «окно» глаза. Здесь происходит большая часть преломления света.") },
    { x: 101, y: 66, name: t("Iris and pupil", "Ծիածանաթաղանթ և բիբ", "Радужка и зрачок"), text: t("The coloured iris changes the size of the pupil, the hole that lets light in: small in bright light, wide in the dark.", "Գունավոր ծիածանաթաղանթը փոխում է բիբի՝ լույսը ներս թողնող անցքի չափը․ պայծառ լույսում այն փոքր է, մթության մեջ՝ լայն։", "Цветная радужка меняет размер зрачка — отверстия для света: на ярком свету он маленький, в темноте широкий.") },
    { x: 128, y: 92, name: t("Lens", "Ոսպնյակ", "Хрусталик"), text: t("A soft converging lens. Muscles make it thicker for near objects and thinner for far ones: accommodation.", "Փափուկ հավաքող ոսպնյակ։ Մկանները այն հաստացնում են մոտ առարկաների և բարակեցնում հեռու առարկաների համար․ ակոմոդացիա։", "Мягкая собирающая линза. Мышцы делают её толще для близких предметов и тоньше для далёких: аккомодация.") },
    { x: 238, y: 60, name: t("Retina", "Ցանցաթաղանթ", "Сетчатка"), text: t("The screen at the back with light-sensitive cells. The image on it is real, smaller and upside down.", "Ետևի «էկրանը» լուսազգայուն բջիջներով։ Նրա վրա պատկերը իրական է, փոքրացված և շրջված։", "«Экран» на задней стенке со светочувствительными клетками. Изображение на нём действительное, уменьшенное и перевёрнутое.") },
    { x: 290, y: 110, name: t("Optic nerve", "Տեսողական նյարդ", "Зрительный нерв"), text: t("Carries the signals to the brain, which turns the picture the right way up.", "Ազդանշանները տանում է ուղեղ, որը պատկերը ուղղում է։", "Передаёт сигналы в мозг, который переворачивает картинку правильно.") },
  ],
};

const microscope: Diagram = {
  title: t("The microscope", "Մանրադիտակը", "Микроскоп"),
  draw: () => (
    <g>
      <path d="M90 200 L230 200 L220 186 L100 186 Z" fill="#334155" />
      <path d="M180 186 Q 200 120 170 60" fill="none" stroke="#475569" strokeWidth="14" />
      <rect x="110" y="30" width="22" height="28" rx="3" fill="#64748b" transform="rotate(-20 121 44)" />
      <rect x="116" y="56" width="26" height="76" rx="4" fill="#94a3b8" transform="rotate(-20 129 94)" />
      <rect x="132" y="128" width="16" height="14" rx="2" fill="#475569" transform="rotate(-20 140 135)" />
      <rect x="100" y="150" width="90" height="8" fill="#1e293b" />
      <rect x="130" y="146" width="30" height="4" fill="#bae6fd" />
      <circle cx="146" cy="174" r="8" fill="#e2e8f0" stroke="#64748b" />
      <circle cx="196" cy="128" r="10" fill="#64748b" />
    </g>
  ),
  parts: [
    { x: 110, y: 34, name: t("Eyepiece", "Ակնապակի", "Окуляр"), text: t("The lens you look through. It works like a magnifying glass on the image made by the objective.", "Ոսպնյակ, որով նայում ես։ Այն խոշորացույցի պես մեծացնում է օբյեկտիվի տված պատկերը։", "Линза, в которую смотрят. Работает как лупа для изображения, созданного объективом.") },
    { x: 150, y: 134, name: t("Objective", "Օբյեկտիվ", "Объектив"), text: t("A strong lens with a short focal length close to the sample. It makes a large real image inside the tube.", "Կարճ կիզակետային հեռավորությամբ ուժեղ ոսպնյակ՝ նմուշի մոտ։ Խողովակի ներսում տալիս է մեծ իրական պատկեր։", "Сильная короткофокусная линза возле образца. Даёт большое действительное изображение внутри тубуса.") },
    { x: 108, y: 154, name: t("Stage", "Սեղանիկ", "Предметный столик"), text: t("The sample lies here on a thin glass slide.", "Նմուշը դրվում է այստեղ՝ բարակ առարկայական ապակու վրա։", "Здесь на тонком стекле лежит образец.") },
    { x: 146, y: 174, name: t("Light or mirror", "Լույս կամ հայելի", "Подсветка или зеркало"), text: t("Shines light up through the sample.", "Լույսը ներքևից ուղարկում է նմուշի միջով։", "Направляет свет снизу сквозь образец.") },
    { x: 196, y: 128, name: t("Focus knob", "Կարգավորման պտուտակ", "Винт фокусировки"), text: t("Moves the tube to make the picture sharp. Total magnification = objective × eyepiece, e.g. 40 × 10 = 400.", "Տեղաշարժում է խողովակը՝ պատկերը հստակ դարձնելու համար։ Ընդհանուր խոշորացումը = օբյեկտիվ × ակնապակի, օրինակ՝ 40 × 10 = 400։", "Двигает тубус, чтобы картинка стала резкой. Общее увеличение = объектив × окуляр, например 40 × 10 = 400.") },
  ],
};

const telescope: Diagram = {
  title: t("The telescope", "Աստղադիտակը", "Телескоп"),
  dark: true,
  h: 190,
  draw: () => (
    <g>
      <rect x="40" y="70" width="210" height="40" rx="6" fill="#475569" transform="rotate(-14 145 90)" />
      <ellipse cx="44" cy="120" rx="6" ry="22" fill="#7dd3fc" transform="rotate(-14 44 120)" />
      <rect x="250" y="52" width="26" height="18" rx="3" fill="#94a3b8" transform="rotate(-14 263 61)" />
      <path d="M150 110 L130 180 M150 110 L170 180 M150 110 L150 180" stroke="#94a3b8" strokeWidth="4" />
      <circle cx="290" cy="20" r="2" fill="#fff" />
      <circle cx="20" cy="30" r="1.5" fill="#fff" />
    </g>
  ),
  parts: [
    { x: 44, y: 120, name: t("Objective", "Օբյեկտիվ", "Объектив"), text: t("A big lens (or a curved mirror) that collects much more light than the eye and makes an image of a distant object.", "Մեծ ոսպնյակ (կամ գոգավոր հայելի), որը հավաքում է աչքից շատ ավելի լույս և տալիս հեռու առարկայի պատկերը։", "Большая линза (или вогнутое зеркало), которая собирает гораздо больше света, чем глаз, и даёт изображение далёкого объекта.") },
    { x: 150, y: 90, name: t("Tube", "Խողովակ", "Труба"), text: t("Its length is about the sum of the focal lengths of the objective and the eyepiece.", "Նրա երկարությունը մոտավորապես հավասար է օբյեկտիվի և ակնապակու կիզակետային հեռավորությունների գումարին։", "Её длина примерно равна сумме фокусных расстояний объектива и окуляра.") },
    { x: 266, y: 62, name: t("Eyepiece", "Ակնապակի", "Окуляр"), text: t("Magnifies the image. Magnification = F of the objective / f of the eyepiece.", "Մեծացնում է պատկերը։ Խոշորացումը = օբյեկտիվի F / ակնապակու f։", "Увеличивает изображение. Увеличение = F объектива / f окуляра.") },
    { x: 150, y: 170, name: t("Mount", "Ամրակ", "Монтировка"), text: t("Turns the telescope to follow the stars. The Byurakan Observatory has a 2.6 m mirror telescope.", "Պտտում է աստղադիտակը՝ աստղերին հետևելու համար։ Բյուրականի աստղադիտարանում կա 2,6 մ հայելիով աստղադիտակ։", "Поворачивает телескоп вслед за звёздами. В Бюраканской обсерватории есть телескоп с зеркалом 2,6 м.") },
  ],
};

const cell = (x: number, y: number, sym: string, c: string, name: string) => (
  <g key={sym}>
    <rect x={x} y={y} width="34" height="34" rx="6" fill={c} />
    <text x={x + 17} y={y + 20} textAnchor="middle" fontSize="14" fontWeight="900" fill="#fff">{sym}</text>
    <text x={x + 17} y={y + 30} textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#fff">{name}</text>
  </g>
);

const standardmodel: Diagram = {
  title: t("The Standard Model of particles", "Մասնիկների Ստանդարտ մոդելը", "Стандартная модель частиц"),
  h: 190,
  draw: () => (
    <g>
      {[["u", "up"], ["c", "charm"], ["t", "top"]].map(([s, n], k) => cell(30 + k * 40, 20, s, "#a855f7", n))}
      {[["d", "down"], ["s", "strange"], ["b", "bottom"]].map(([s, n], k) => cell(30 + k * 40, 60, s, "#a855f7", n))}
      {[["e", "electron"], ["μ", "muon"], ["τ", "tau"]].map(([s, n], k) => cell(30 + k * 40, 100, s, "#16a34a", n))}
      {[["νe", "neutrino"], ["νμ", "neutrino"], ["ντ", "neutrino"]].map(([s, n], k) => cell(30 + k * 40, 140, s, "#16a34a", n))}
      {[["g", "gluon"], ["γ", "photon"], ["Z", "Z boson"], ["W", "W boson"]].map(([s, n], k) => cell(170, 20 + k * 40, s, "#ea580c", n))}
      {cell(230, 60, "H", "#eab308", "Higgs")}
    </g>
  ),
  parts: [
    { x: 30, y: 16, name: t("Quarks", "Քվարկներ", "Кварки"), text: t("Six kinds. Up and down quarks build protons (uud) and neutrons (udd). They are never seen alone.", "Վեց տեսակ։ u և d քվարկները կազմում են պրոտոններ (uud) և նեյտրոններ (udd)։ Դրանք երբեք առանձին չեն հանդիպում։", "Шесть видов. Из u- и d-кварков состоят протоны (uud) и нейтроны (udd). Поодиночке их не наблюдают.") },
    { x: 30, y: 96, name: t("Leptons", "Լեպտոններ", "Лептоны"), text: t("The electron, its heavier cousins the muon and the tau, and three almost massless neutrinos.", "Էլեկտրոնը, նրա ավելի ծանր «ազգականները»՝ մյուոնն ու տաուն, և երեք համարյա անզանգված նեյտրինո։", "Электрон, его тяжёлые «родственники» мюон и тау, и три почти безмассовых нейтрино.") },
    { x: 106, y: 16, name: t("Three generations", "Երեք սերունդ", "Три поколения"), text: t("Each column is a generation. Ordinary matter is made only of the first one.", "Յուրաքանչյուր սյուն մեկ սերունդ է։ Սովորական նյութը կազմված է միայն առաջին սերնդից։", "Каждый столбец — поколение. Обычное вещество состоит только из первого.") },
    { x: 204, y: 16, name: t("Force carriers", "Փոխազդեցության կրողներ", "Переносчики взаимодействий"), text: t("Gluons carry the strong force, the photon the electromagnetic force, W and Z bosons the weak force.", "Գլյուոնները կրում են ուժեղ փոխազդեցությունը, ֆոտոնը՝ էլեկտրամագնիսականը, W և Z բոզոնները՝ թույլը։", "Глюоны переносят сильное взаимодействие, фотон — электромагнитное, W- и Z-бозоны — слабое.") },
    { x: 264, y: 56, name: t("Higgs boson", "Հիգսի բոզոն", "Бозон Хиггса"), text: t("Gives mass to the other particles. It was found at the Large Hadron Collider in 2012.", "Զանգված է տալիս մյուս մասնիկներին։ Այն հայտնաբերվեց Մեծ հադրոնային բախիչում 2012 թվականին։", "Придаёт массу другим частицам. Открыт на Большом адронном коллайдере в 2012 году.") },
  ],
};

const interactions: Diagram = {
  title: t("The four fundamental interactions", "Չորս հիմնարար փոխազդեցությունները", "Четыре фундаментальных взаимодействия"),
  h: 180,
  draw: (lang) => (
    <g>
      {[
        { y: 26, w: 150, c: "#ea580c", n: t("strong", "ուժեղ", "сильное") },
        { y: 66, w: 110, c: "#2563eb", n: t("electromagnetic", "էլեկտրամագնիսական", "электромагнитное") },
        { y: 106, w: 70, c: "#16a34a", n: t("weak", "թույլ", "слабое") },
        { y: 146, w: 16, c: "#7c3aed", n: t("gravitational", "գրավիտացիոն", "гравитационное") },
      ].map((b) => (
        <g key={b.y}>
          <rect x="40" y={b.y} width={b.w} height="20" rx="10" fill={b.c} />
          <Tag x={46 + b.w} y={b.y + 14} anchor="start" color={b.c}>{L(b.n, lang)}</Tag>
        </g>
      ))}
    </g>
  ),
  parts: [
    { x: 24, y: 36, name: t("Strong", "Ուժեղ", "Сильное"), text: t("Holds quarks together and binds protons and neutrons in the nucleus. The strongest, but acts only inside the nucleus (10⁻¹⁵ m).", "Քվարկները պահում է իրար և պրոտոններն ու նեյտրոնները կապում միջուկում։ Ամենաուժեղն է, բայց գործում է միայն միջուկի ներսում (10⁻¹⁵ մ)։", "Удерживает кварки и связывает протоны и нейтроны в ядре. Самое сильное, но действует только внутри ядра (10⁻¹⁵ м).") },
    { x: 24, y: 76, name: t("Electromagnetic", "Էլեկտրամագնիսական", "Электромагнитное"), text: t("Acts between charges: holds atoms and molecules together, gives friction, elasticity, light. Reaches infinitely far.", "Գործում է լիցքերի միջև․ պահում է ատոմներն ու մոլեկուլները, առաջացնում շփում, առաձգականություն, լույս։ Գործում է անսահման հեռու։", "Действует между зарядами: держит атомы и молекулы, даёт трение, упругость, свет. Дальнодействующее.") },
    { x: 24, y: 116, name: t("Weak", "Թույլ", "Слабое"), text: t("Changes one kind of quark into another; it causes beta decay and helps the Sun burn.", "Մի տեսակի քվարկը փոխում է մյուսի․ առաջացնում է բետա տրոհում և օգնում է Արեգակին «այրվել»։", "Превращает один вид кварка в другой; вызывает бета-распад и помогает Солнцу гореть.") },
    { x: 24, y: 156, name: t("Gravitational", "Գրավիտացիոն", "Гравитационное"), text: t("By far the weakest, but it always attracts and adds up, so it rules planets, stars and galaxies.", "Ամենաթույլն է, բայց միշտ ձգում է և գումարվում է, ուստի կառավարում է մոլորակները, աստղերը և գալակտիկաները։", "Намного слабее остальных, но всегда притягивает и складывается, поэтому управляет планетами, звёздами и галактиками.") },
  ],
};

const hr: Diagram = {
  title: t("The Hertzsprung–Russell diagram", "Հերցշպրունգ–Ռասելի դիագրամը", "Диаграмма Герцшпрунга — Рассела"),
  dark: true,
  draw: (lang) => (
    <g>
      <line x1="40" x2="300" y1="196" y2="196" stroke="#64748b" />
      <line x1="40" x2="40" y1="14" y2="196" stroke="#64748b" />
      <Tag x={170} y={214} color="#94a3b8">{L(t("hot ← temperature → cool", "տաք ← ջերմաստիճան → սառը", "горячие ← температура → холодные"), lang)}</Tag>
      <text x="14" y="110" fontSize="8" fontWeight="800" fill="#94a3b8" transform="rotate(-90 14 110)" textAnchor="middle">{L(t("luminosity", "լուսատվություն", "светимость"), lang)}</text>
      {Array.from({ length: 60 }, (_, k) => { const s = k / 60; const j = scatter(1, -6, -6, 12, 12, k + 3)[0]; return <circle key={k} cx={56 + s * 230 + j.x} cy={30 + s * 150 + j.y} r={4 - s * 2.5} fill={`hsl(${220 - s * 210} 90% ${70 - s * 10}%)`} />; })}
      {scatter(14, 200, 50, 70, 40, 5).map((q, k) => <circle key={k} cx={q.x} cy={q.y} r="5" fill="#f97316" />)}
      {scatter(5, 120, 20, 170, 14, 7).map((q, k) => <circle key={k} cx={q.x} cy={q.y} r="7" fill="#ef4444" />)}
      {scatter(8, 70, 160, 50, 24, 9).map((q, k) => <circle key={k} cx={q.x} cy={q.y} r="1.8" fill="#e0f2fe" />)}
      <circle cx="190" cy="122" r="5" fill="#facc15" stroke="#fff" strokeWidth="1.5" />
    </g>
  ),
  parts: [
    { x: 120, y: 80, name: t("Main sequence", "Գլխավոր հաջորդականություն", "Главная последовательность"), text: t("Stars that burn hydrogen in their cores, 90% of all stars. Hot blue stars are bright and live short lives; cool red ones are dim and live long.", "Աստղեր, որոնց միջուկում ջրածին է «այրվում», բոլոր աստղերի 90%-ը։ Տաք կապույտ աստղերը պայծառ են և կարճ են ապրում, սառը կարմիրները՝ աղոտ են և երկար են ապրում։", "Звёзды, сжигающие водород в ядре, — 90% всех звёзд. Горячие голубые яркие и живут недолго, холодные красные тусклые и живут долго.") },
    { x: 190, y: 122, name: t("The Sun", "Արեգակը", "Солнце"), text: t("An ordinary yellow star in the middle of the main sequence, about 5800 K at the surface.", "Սովորական դեղին աստղ գլխավոր հաջորդականության մեջտեղում, մակերևույթին մոտ 5800 Կ։", "Обычная жёлтая звезда в середине главной последовательности, около 5800 К на поверхности.") },
    { x: 236, y: 70, name: t("Red giants", "Կարմիր հսկաներ", "Красные гиганты"), text: t("Old stars that have swollen up: cool but very bright because they are huge.", "Ծեր աստղեր, որոնք ուռել են․ սառն են, բայց շատ պայծառ, որովհետև հսկայական են։", "Старые раздувшиеся звёзды: холодные, но очень яркие, потому что огромные.") },
    { x: 200, y: 26, name: t("Supergiants", "Գերհսկաներ", "Сверхгиганты"), text: t("The biggest and brightest stars; they end as supernovae.", "Ամենամեծ և ամենապայծառ աստղերը․ դրանց կյանքն ավարտվում է գերնոր պայթյունով։", "Самые большие и яркие звёзды; их жизнь заканчивается взрывом сверхновой.") },
    { x: 96, y: 172, name: t("White dwarfs", "Սպիտակ թզուկներ", "Белые карлики"), text: t("Hot but tiny remains of stars like the Sun, about the size of the Earth.", "Արեգակի նման աստղերի տաք, բայց փոքրիկ մնացորդներ՝ Երկրի չափ։", "Горячие, но крошечные остатки звёзд вроде Солнца, размером с Землю.") },
  ],
};

const smartphone: Diagram = {
  title: t("Physics inside a smartphone", "Ֆիզիկան սմարթֆոնի ներսում", "Физика внутри смартфона"),
  draw: () => (
    <g>
      <rect x="110" y="14" width="100" height="192" rx="16" fill="#1e293b" />
      <rect x="118" y="30" width="84" height="160" rx="6" fill="#bae6fd" />
      <circle cx="160" cy="22" r="3" fill="#475569" />
      <rect x="128" y="120" width="64" height="58" rx="4" fill="#94a3b8" opacity="0.6" />
      <rect x="138" y="50" width="16" height="12" rx="2" fill="#334155" />
      <path d="M202 40 q 16 -10 30 0 M206 32 q 12 -8 24 0" fill="none" stroke="#f59e0b" strokeWidth="2" />
    </g>
  ),
  parts: [
    { x: 160, y: 22, name: t("Camera", "Տեսախցիկ", "Камера"), text: t("A tiny lens makes a real image on a sensor of millions of light-sensitive cells (photoelectric effect).", "Փոքրիկ ոսպնյակը իրական պատկեր է տալիս միլիոնավոր լուսազգայուն բջիջներից կազմված սենսորի վրա (ֆոտոէֆեկտ)։", "Крошечный объектив даёт действительное изображение на матрице из миллионов светочувствительных ячеек (фотоэффект).") },
    { x: 180, y: 90, name: t("Touch screen", "Սենսորային էկրան", "Сенсорный экран"), text: t("A grid of transparent conductors works like tiny capacitors; your finger changes their charge.", "Թափանցիկ հաղորդիչների ցանցը աշխատում է փոքրիկ կոնդենսատորների պես, իսկ մատը փոխում է դրանց լիցքը։", "Сетка прозрачных проводников работает как крошечные конденсаторы; палец меняет их заряд.") },
    { x: 146, y: 56, name: t("Accelerometer and gyroscope", "Արագացման չափիչ և գիրոսկոպ", "Акселерометр и гироскоп"), text: t("Microscopic springs and masses feel acceleration and turning, so the screen rotates and games react to tilt.", "Մանրադիտակային զսպանակներն ու զանգվածները զգում են արագացումը և պտույտը, ուստի էկրանը շրջվում է, իսկ խաղերը արձագանքում են թեքմանը։", "Микроскопические пружинки и грузики чувствуют ускорение и поворот, поэтому экран поворачивается, а игры реагируют на наклон.") },
    { x: 220, y: 30, name: t("Antennas", "Ալեհավաքներ", "Антенны"), text: t("Send and receive radio waves for calls, Wi-Fi, Bluetooth and GPS.", "Ուղարկում և ընդունում են ռադիոալիքներ՝ զանգերի, Wi-Fi-ի, Bluetooth-ի և GPS-ի համար։", "Передают и принимают радиоволны для звонков, Wi-Fi, Bluetooth и GPS.") },
    { x: 160, y: 150, name: t("Battery", "Մարտկոց", "Аккумулятор"), text: t("A lithium-ion cell turns chemical energy into electrical energy, and back when charging.", "Լիթիում-իոնային էլեմենտը քիմիական էներգիան դարձնում է էլեկտրական և լիցքավորելիս՝ հակառակը։", "Литий-ионный элемент превращает химическую энергию в электрическую, а при зарядке — обратно.") },
  ],
};

const tracks: Diagram = {
  title: t("Particle tracks in a cloud chamber", "Մասնիկների հետքերը Վիլսոնի խցիկում", "Треки частиц в камере Вильсона"),
  dark: true,
  draw: () => (
    <g>
      {Array.from({ length: 30 }, (_, k) => <text key={k} x={20 + (k % 10) * 30} y={30 + Math.floor(k / 10) * 80} fontSize="9" fill="#334155">⊗</text>)}
      <path d="M20 200 L120 120" stroke="#f8fafc" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
      <path d="M160 210 C 150 140 200 120 230 140 C 250 154 240 176 222 170 C 210 166 214 150 226 152" fill="none" stroke="#e2e8f0" strokeWidth="1.6" />
      <path d="M160 210 C 170 140 120 120 90 140 C 70 154 80 176 98 170" fill="none" stroke="#fda4af" strokeWidth="1.6" />
      <path d="M300 20 L230 210" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="1 2" />
    </g>
  ),
  parts: [
    { x: 76, y: 156, name: t("Alpha particle", "Ալֆա մասնիկ", "Альфа-частица"), text: t("Heavy and strongly charged: a short, thick, straight track.", "Ծանր և ուժեղ լիցքավորված․ կարճ, հաստ, ուղիղ հետք։", "Тяжёлая и сильно заряженная: короткий, толстый, прямой трек.") },
    { x: 236, y: 130, name: t("Electron", "Էլեկտրոն", "Электрон"), text: t("Light, so the magnetic field bends it into a spiral as it slows down.", "Թեթև է, ուստի մագնիսական դաշտը կորացնում է այն պարույրով, մինչ այն դանդաղում է։", "Лёгкий, поэтому магнитное поле закручивает его в спираль по мере торможения.") },
    { x: 84, y: 128, name: t("Positron", "Պոզիտրոն", "Позитрон"), text: t("The electron's antiparticle: same mass, opposite charge, so it curls the other way. Found by Anderson in 1932.", "Էլեկտրոնի հակամասնիկը․ նույն զանգվածը, հակառակ լիցքը, ուստի կորանում է հակառակ կողմ։ Հայտնաբերել է Անդերսոնը 1932 թվականին։", "Античастица электрона: та же масса, противоположный заряд, поэтому закручивается в другую сторону. Открыт Андерсоном в 1932 году.") },
    { x: 290, y: 60, name: t("Fast particle from space", "Տիեզերքից եկած արագ մասնիկ", "Быстрая частица из космоса"), text: t("A cosmic-ray muon is so fast that it hardly bends: a long thin straight line.", "Տիեզերական ճառագայթների մյուոնն այնքան արագ է, որ համարյա չի կորանում․ երկար, բարակ, ուղիղ գիծ։", "Мюон космических лучей так быстр, что почти не отклоняется: длинная тонкая прямая.") },
    { x: 20, y: 26, name: t("Magnetic field", "Մագնիսական դաշտ", "Магнитное поле"), text: t("The field (⊗, into the page) bends charged particles; the direction of the bend tells the sign of the charge.", "Դաշտը (⊗, դեպի էջի խորքը) կորացնում է լիցքավորված մասնիկների հետքերը․ կորության ուղղությունը ցույց է տալիս լիցքի նշանը։", "Поле (⊗, от нас) искривляет заряженные частицы; направление изгиба показывает знак заряда.") },
  ],
};

const celestialsphere: Diagram = {
  title: t("The celestial sphere", "Երկնային ոլորտը", "Небесная сфера"),
  dark: true,
  draw: (lang) => (
    <g>
      <circle cx="150" cy="110" r="90" fill="#1e293b" stroke="#64748b" />
      <ellipse cx="150" cy="110" rx="90" ry="20" fill="#14532d" opacity="0.55" stroke="#4ade80" />
      <ellipse cx="150" cy="110" rx="90" ry="22" fill="none" stroke="#38bdf8" strokeWidth="2" transform="rotate(-50 150 110)" />
      <ellipse cx="150" cy="110" rx="90" ry="22" fill="none" stroke="#facc15" strokeWidth="2" strokeDasharray="5 3" transform="rotate(-27 150 110)" />
      <line x1="81" y1="52" x2="219" y2="168" stroke="#e2e8f0" strokeWidth="1.5" />
      <line x1="150" y1="20" x2="150" y2="110" stroke="#94a3b8" strokeDasharray="3 3" />
      <circle cx="81" cy="52" r="4" fill="#fff" />
      <circle cx="150" cy="20" r="3" fill="#f472b6" />
      <circle cx="150" cy="110" r="4" fill="#fb923c" />
      <path d="M150 110 L110 110 A40 40 0 0 1 119 84 Z" fill="#fff" opacity="0.18" />
      <Tag x={60} y={118} color="#4ade80">{L(t("N", "Հս", "С"), lang)}</Tag>
      <Tag x={242} y={118} color="#4ade80">{L(t("S", "Հվ", "Ю"), lang)}</Tag>
    </g>
  ),
  parts: [
    { x: 150, y: 110, name: t("Observer", "Դիտորդ", "Наблюдатель"), text: t("We see the sky as a huge sphere around us, with all stars at the same distance. It is a model: really the stars are at very different distances.", "Երկինքը տեսնում ենք որպես մեր շուրջը գտնվող հսկա գունդ, որի վրա բոլոր աստղերը նույն հեռավորության վրա են։ Սա մոդել է․ իրականում աստղերը շատ տարբեր հեռավորությունների վրա են։", "Мы видим небо как огромную сферу вокруг нас, на которой все звёзды на одном расстоянии. Это модель: на самом деле звёзды на очень разных расстояниях.") },
    { x: 150, y: 20, name: t("Zenith", "Զենիթ", "Зенит"), text: t("The point straight overhead. The altitude of a star is its angle above the horizon, from 0° to 90° at the zenith.", "Ուղիղ գլխավերևում գտնվող կետը։ Աստղի բարձրությունը նրա անկյունն է հորիզոնից վեր՝ 0°-ից մինչև 90° զենիթում։", "Точка прямо над головой. Высота звезды — её угол над горизонтом, от 0° до 90° в зените.") },
    { x: 81, y: 52, name: t("Celestial pole", "Աշխարհի բևեռ", "Полюс мира"), text: t("The sky turns around this point, near the Pole Star. Its altitude equals your latitude: about 40° in Yerevan.", "Երկինքը պտտվում է այս կետի շուրջ, Բևեռային աստղի մոտ։ Նրա բարձրությունը հավասար է քո աշխարհագրական լայնությանը՝ Երևանում մոտ 40°։", "Небо вращается вокруг этой точки рядом с Полярной звездой. Её высота равна твоей широте: около 40° в Ереване.") },
    { x: 238, y: 100, name: t("Horizon", "Հորիզոն", "Горизонт"), text: t("The circle where the sky meets the ground. Half of the sphere is always below it.", "Շրջանագիծը, որտեղ երկինքը հանդիպում է գետնին։ Ոլորտի կեսը միշտ նրանից ցածր է։", "Круг, где небо встречается с землёй. Половина сферы всегда под ним.") },
    { x: 206, y: 46, name: t("Celestial equator", "Երկնային հասարակած", "Небесный экватор"), text: t("The Earth's equator projected on the sky. Its angle to the horizon is 90° minus the latitude.", "Երկրի հասարակածի պրոյեկցիան երկնքում։ Նրա անկյունը հորիզոնի հետ 90° է՝ հանած լայնությունը։", "Земной экватор, спроецированный на небо. Его угол с горизонтом равен 90° минус широта.") },
    { x: 84, y: 150, name: t("Ecliptic", "Խավարածիր", "Эклиптика"), text: t("The yearly path of the Sun among the stars, tilted 23.4° to the celestial equator. The zodiac constellations lie along it.", "Արեգակի տարեկան ճանապարհը աստղերի միջով՝ երկնային հասարակածի նկատմամբ 23,4° թեքությամբ։ Նրա երկայնքով են կենդանակերպի համաստեղությունները։", "Годичный путь Солнца среди звёзд, наклонённый на 23,4° к небесному экватору. Вдоль него лежат зодиакальные созвездия.") },
  ],
};

const parallax: Diagram = {
  title: t("Annual parallax", "Տարեկան պարալաքս", "Годичный параллакс"),
  dark: true,
  draw: (lang) => (
    <g>
      {scatter(26, 10, 6, 280, 18, 11).map((q, k) => <circle key={k} cx={q.x} cy={q.y} r="1.2" fill="#e2e8f0" />)}
      <ellipse cx="150" cy="176" rx="76" ry="20" fill="none" stroke="#64748b" strokeDasharray="4 3" />
      <circle cx="150" cy="176" r="9" fill="#facc15" />
      <circle cx="74" cy="176" r="5" fill="#3b82f6" />
      <circle cx="226" cy="176" r="5" fill="#3b82f6" />
      <line x1="74" y1="176" x2="150" y2="70" stroke="#93c5fd" />
      <line x1="226" y1="176" x2="150" y2="70" stroke="#93c5fd" />
      <line x1="150" y1="176" x2="150" y2="70" stroke="#fde68a" strokeDasharray="3 3" />
      <line x1="150" y1="176" x2="226" y2="176" stroke="#fde68a" strokeWidth="2" />
      <circle cx="150" cy="70" r="5" fill="#fb923c" />
      <path d="M150 88 A18 18 0 0 1 160 84" fill="none" stroke="#fff" strokeWidth="1.5" />
      <Tag x={157} y={100} color="#fff">π</Tag>
      <Tag x={188} y={196} color="#fde68a">{L(t("1 AU", "1 ա․մ․", "1 а. е."), lang)}</Tag>
    </g>
  ),
  parts: [
    { x: 150, y: 70, name: t("Near star", "Մոտ աստղ", "Близкая звезда"), text: t("Seen from opposite sides of the Earth's orbit, it seems to shift against the far stars. The shift is tiny: less than 1″ even for the nearest star.", "Երկրի ուղեծրի հակադիր կողմերից դիտելիս այն կարծես տեղաշարժվում է հեռավոր աստղերի նկատմամբ։ Տեղաշարժը չնչին է․ նույնիսկ ամենամոտ աստղի համար 1″-ից պակաս։", "С противоположных сторон земной орбиты она кажется смещённой относительно далёких звёзд. Смещение крошечное: меньше 1″ даже у ближайшей звезды.") },
    { x: 157, y: 100, name: t("Parallax angle π", "Պարալաքսի անկյուն π", "Угол параллакса π"), text: t("The angle at which the radius of the Earth's orbit is seen from the star. Distance in parsecs: d = 1/π″.", "Անկյունը, որի տակ աստղից երևում է Երկրի ուղեծրի շառավիղը։ Հեռավորությունը պարսեկներով՝ d = 1/π″։", "Угол, под которым со звезды виден радиус земной орбиты. Расстояние в парсеках: d = 1/π″.") },
    { x: 74, y: 176, name: t("Earth in one season", "Երկիրը տարվա մի եղանակին", "Земля в одно время года"), text: t("Six months later the Earth is on the other side of the Sun, 2 AU away: the longest base we have on Earth.", "Վեց ամիս անց Երկիրը Արեգակի մյուս կողմում է՝ 2 ա․մ․ հեռու․ սա մեր ունեցած ամենաերկար հիմքն է։", "Через полгода Земля по другую сторону Солнца, в 2 а. е.: самый длинный базис, который у нас есть.") },
    { x: 188, y: 186, name: t("Base: 1 AU", "Հիմք՝ 1 ա․մ․", "Базис: 1 а. е."), text: t("The radius of the Earth's orbit, 150 million km. One parsec is the distance from which it is seen at 1″: 206 265 AU or 3.26 light-years.", "Երկրի ուղեծրի շառավիղը՝ 150 միլիոն կմ։ Մեկ պարսեկն այն հեռավորությունն է, որից այն երևում է 1″ անկյան տակ՝ 206 265 ա․մ․ կամ 3,26 լուսային տարի։", "Радиус земной орбиты, 150 млн км. Один парсек — расстояние, с которого он виден под углом 1″: 206 265 а. е., или 3,26 светового года.") },
    { x: 150, y: 14, name: t("Distant stars", "Հեռավոր աստղեր", "Далёкие звёзды"), text: t("So far away that they hardly shift at all: the background against which the parallax is measured.", "Այնքան հեռու են, որ համարյա չեն տեղաշարժվում․ ֆոն, որի նկատմամբ չափվում է պարալաքսը։", "Так далеко, что почти не смещаются: фон, на котором измеряют параллакс.") },
  ],
};

const stellarlife: Diagram = {
  title: t("The lives of stars", "Աստղերի կյանքը", "Жизнь звёзд"),
  dark: true,
  draw: () => (
    <g>
      {scatter(30, 8, 86, 40, 48, 4).map((q, k) => <circle key={k} cx={q.x} cy={q.y} r={2 + (k % 3)} fill="#a78bfa" opacity="0.45" />)}
      <path d="M50 100 L76 62 M50 120 L76 160" stroke="#64748b" strokeWidth="2" />
      {[[100, 62], [160, 62], [222, 62], [100, 160], [160, 160], [222, 160]].map(([x, y], k) => <path key={k} d={`M${x + 16} ${y} h14`} stroke="#64748b" strokeWidth="2" />)}
      <circle cx="90" cy="62" r="9" fill="#facc15" />
      <circle cx="148" cy="62" r="17" fill="#f97316" />
      <circle cx="214" cy="62" r="13" fill="none" stroke="#2dd4bf" strokeWidth="4" opacity="0.8" />
      <circle cx="214" cy="62" r="2.5" fill="#fff" />
      <circle cx="272" cy="62" r="3.5" fill="#f8fafc" />
      <circle cx="90" cy="160" r="12" fill="#60a5fa" />
      <circle cx="148" cy="160" r="22" fill="#dc2626" />
      {Array.from({ length: 12 }, (_, k) => { const a = (k / 12) * Math.PI * 2; return <line key={k} x1={214 + 6 * Math.cos(a)} y1={160 + 6 * Math.sin(a)} x2={214 + 18 * Math.cos(a)} y2={160 + 18 * Math.sin(a)} stroke="#fde047" strokeWidth="2.5" />; })}
      <circle cx="214" cy="160" r="5" fill="#fff" />
      <circle cx="268" cy="152" r="3" fill="#c4b5fd" />
      <circle cx="284" cy="172" r="7" fill="#000" stroke="#f59e0b" strokeWidth="2" />
    </g>
  ),
  parts: [
    { x: 28, y: 110, name: t("Gas cloud", "Գազային ամպ", "Газовое облако"), text: t("A cold cloud of gas and dust collapses under its own gravity; stars are born in groups.", "Գազի և փոշու սառը ամպը սեղմվում է սեփական ձգողությամբ․ աստղերը ծնվում են խմբերով։", "Холодное облако газа и пыли сжимается под действием собственного тяготения; звёзды рождаются группами.") },
    { x: 90, y: 62, name: t("Star like the Sun", "Արեգակի նման աստղ", "Звезда вроде Солнца"), text: t("Burns hydrogen into helium for about 10 billion years.", "Մոտ 10 միլիարդ տարի ջրածինը վերածում է հելիումի։", "Около 10 миллиардов лет превращает водород в гелий.") },
    { x: 148, y: 62, name: t("Red giant", "Կարմիր հսկա", "Красный гигант"), text: t("When the core's hydrogen runs out, the star swells 100–200 times.", "Երբ միջուկի ջրածինը սպառվում է, աստղն ուռչում է 100–200 անգամ։", "Когда водород в ядре кончается, звезда раздувается в 100–200 раз.") },
    { x: 214, y: 62, name: t("Planetary nebula", "Մոլորակաձև միգամածություն", "Планетарная туманность"), text: t("The outer layers drift away as a glowing shell.", "Արտաքին շերտերը հեռանում են որպես լուսավոր թաղանթ։", "Внешние слои уходят светящейся оболочкой.") },
    { x: 272, y: 62, name: t("White dwarf", "Սպիտակ թզուկ", "Белый карлик"), text: t("The bare core, the size of the Earth, slowly cooling.", "Մերկ միջուկը՝ Երկրի չափ, դանդաղ սառչում է։", "Обнажённое ядро размером с Землю, медленно остывает.") },
    { x: 90, y: 160, name: t("Massive star", "Զանգվածեղ աստղ", "Массивная звезда"), text: t("More than about 8 solar masses: hot, blue, very bright, and lives only millions of years.", "Մոտ 8 արեգակնային զանգվածից ավելի․ տաք է, կապույտ, շատ պայծառ և ապրում է ընդամենը միլիոնավոր տարիներ։", "Больше примерно 8 масс Солнца: горячая, голубая, очень яркая и живёт лишь миллионы лет.") },
    { x: 148, y: 160, name: t("Red supergiant", "Կարմիր գերհսկա", "Красный сверхгигант"), text: t("Burns heavier and heavier elements until its core is iron.", "Այրում է ավելի ու ավելի ծանր տարրեր, մինչև միջուկը դառնում է երկաթ։", "Сжигает всё более тяжёлые элементы, пока ядро не станет железным.") },
    { x: 214, y: 160, name: t("Supernova", "Գերնոր", "Сверхновая"), text: t("The iron core collapses in a fraction of a second and the star explodes, scattering new elements into space.", "Երկաթե միջուկը վայրկյանի մի մասում փլուզվում է, և աստղը պայթում է՝ նոր տարրեր ցրելով տիեզերք։", "Железное ядро коллапсирует за доли секунды, и звезда взрывается, рассеивая новые элементы в космосе.") },
    { x: 278, y: 162, name: t("Neutron star or black hole", "Նեյտրոնային աստղ կամ սև խոռոչ", "Нейтронная звезда или чёрная дыра"), text: t("A ball about 20 km across, or, if the core is heavier than about 3 solar masses, a black hole.", "Մոտ 20 կմ տրամագծով գունդ, կամ, եթե միջուկը մոտ 3 արեգակնային զանգվածից ծանր է, սև խոռոչ։", "Шар поперечником около 20 км или, если ядро тяжелее примерно 3 масс Солнца, чёрная дыра.") },
  ],
};

export const DIAGRAMS: Record<string, Diagram> = { sun, solarsystem, galaxy, galaxytypes, thermos, eye, microscope, telescope, standardmodel, interactions, hr, smartphone, tracks, celestialsphere, parallax, stellarlife };
