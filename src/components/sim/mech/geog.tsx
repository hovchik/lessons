"use client";

import type { ArtLang } from "@/lib/art/spec";
import { Arrow } from "../kit";
import { L, t } from "../labels";
import { ease, scatter, Tag } from "./draw";
import type { Mech } from "./types";

/* Step-by-step geography: seasons, the water cycle, moving plates, winds, population change. */

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const T = (lang: ArtLang, en: string, hy: string, ru: string) => L(t(en, hy, ru), lang);
const rad = (d: number) => (d * Math.PI) / 180;

/* ---------------- seasons ---------------- */

/** Orbit stations in step order: March (front), June (right), September (back), December (left). */
const STATIONS = [90, 0, -90, -180];

function Earth({ x, y, sx, sy }: { x: number; y: number; sx: number; sy: number }) {
  const a = Math.atan2(sy - y, sx - x);
  const r = 17;
  const tilt = rad(23.5);
  const ax = Math.sin(tilt) * 26, ay = Math.cos(tilt) * 26;
  // the night half faces away from the Sun
  const p1 = [x + r * Math.cos(a + Math.PI / 2), y + r * Math.sin(a + Math.PI / 2)];
  const p2 = [x + r * Math.cos(a - Math.PI / 2), y + r * Math.sin(a - Math.PI / 2)];
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#60a5fa" stroke="#1d4ed8" strokeWidth="1.2" />
      <path d={`M${p1[0]},${p1[1]} A${r},${r} 0 0 1 ${p2[0]},${p2[1]} Z`} fill="#1e293b" opacity="0.6" />
      <line x1={x + ax} y1={y + ay} x2={x - ax} y2={y - ay} stroke="#e11d48" strokeWidth="2" />
      <ellipse cx={x} cy={y} rx={r} ry="3" transform={`rotate(${-23.5} ${x} ${y})`} fill="none" stroke="#fde68a" strokeWidth="1" />
      <text x={x - ax - 2} y={y - ay - 3} textAnchor="middle" fontSize="8" fontWeight="900" fill="#e11d48">N</text>
    </g>
  );
}

const seasons: Mech = {
  title: t("Why the seasons change", "Ինչու են փոխվում եղանակները", "Почему меняются времена года"),
  caps: [
    t("21 March: the Earth's axis is tilted, but neither hemisphere leans towards the Sun. Day equals night everywhere: the spring equinox.", "Մարտի 21․ Երկրի առանցքը թեքված է, բայց ոչ մի կիսագունդ չի թեքվում դեպի Արեգակը։ Ամենուր ցերեկը հավասար է գիշերին․ գարնանային գիշերահավասար։", "21 марта: ось Земли наклонена, но ни одно полушарие не обращено к Солнцу. День равен ночи повсюду — весеннее равноденствие."),
    t("22 June: the Northern Hemisphere leans towards the Sun. The Sun is high, days are long: summer in the north, winter in the south.", "Հունիսի 22․ Հյուսիսային կիսագունդը թեքված է դեպի Արեգակը։ Արեգակը բարձր է, օրերը՝ երկար․ ամառ հյուսիսում, ձմեռ հարավում։", "22 июня: Северное полушарие наклонено к Солнцу. Солнце высоко, дни длинные — лето на севере, зима на юге."),
    t("23 September: again neither hemisphere leans towards the Sun. Day equals night: the autumn equinox.", "Սեպտեմբերի 23․ կրկին ոչ մի կիսագունդ չի թեքվում դեպի Արեգակը։ Ցերեկը հավասար է գիշերին․ աշնանային գիշերահավասար։", "23 сентября: снова ни одно полушарие не обращено к Солнцу. День равен ночи — осеннее равноденствие."),
    t("22 December: the axis still points the same way in space, but now the Southern Hemisphere faces the Sun. Winter in the north, summer in Australia.", "Դեկտեմբերի 22․ առանցքը տարածության մեջ դեռ նույն ուղղությունն ունի, բայց այժմ Արեգակին նայում է Հարավային կիսագունդը։ Ձմեռ հյուսիսում, ամառ Ավստրալիայում։", "22 декабря: ось смотрит в ту же сторону, но теперь к Солнцу обращено Южное полушарие. Зима на севере, лето в Австралии."),
  ],
  draw: (i, p, lang) => {
    const k = ease(Math.min(1, p * 1.6));
    const from = i === 0 ? STATIONS[0] + 90 : STATIONS[i - 1];
    const th = rad(lerp(from, STATIONS[i], k));
    const x = 160 + 118 * Math.cos(th), y = 108 + 62 * Math.sin(th);
    const label = [
      T(lang, "21 March · equinox", "Մարտի 21 · գիշերահավասար", "21 марта · равноденствие"),
      T(lang, "22 June · summer solstice", "Հունիսի 22 · ամառային արևադարձ", "22 июня · летнее солнцестояние"),
      T(lang, "23 September · equinox", "Սեպտեմբերի 23 · գիշերահավասար", "23 сентября · равноденствие"),
      T(lang, "22 December · winter solstice", "Դեկտեմբերի 22 · ձմեռային արևադարձ", "22 декабря · зимнее солнцестояние"),
    ][i];
    return (
      <g>
        <rect width="320" height="220" fill="#0f172a" />
        {scatter(40, 0, 0, 320, 220, 7).map((q, j) => <circle key={j} cx={q.x} cy={q.y} r="0.8" fill="#e2e8f0" opacity="0.6" />)}
        <ellipse cx="160" cy="108" rx="118" ry="62" fill="none" stroke="#475569" strokeDasharray="4 4" />
        <circle cx="160" cy="108" r="26" fill="#facc15" />
        <circle cx="160" cy="108" r={30 + Math.sin(p * 12) * 2} fill="none" stroke="#fde047" opacity="0.5" />
        {STATIONS.map((s, j) => (j < i ? <circle key={j} cx={160 + 118 * Math.cos(rad(s))} cy={108 + 62 * Math.sin(rad(s))} r="4" fill="#64748b" /> : null))}
        <Earth x={x} y={y} sx={160} sy={108} />
        <Tag x={160} y={212} color="#fde68a" plain>{label}</Tag>
      </g>
    );
  },
  dark: true,
};

/* ---------------- water cycle ---------------- */

const watercycle: Mech = {
  title: t("The water cycle", "Ջրի շրջապտույտը", "Круговорот воды"),
  caps: [
    t("Evaporation: the Sun heats the ocean and water turns into invisible vapour that rises with warm air. The salt stays behind.", "Գոլորշիացում․ Արեգակը տաքացնում է օվկիանոսը, և ջուրը վերածվում է անտեսանելի գոլորշու, որը բարձրանում է տաք օդի հետ։ Աղը մնում է։", "Испарение: Солнце нагревает океан, и вода превращается в невидимый пар, который поднимается с тёплым воздухом. Соль остаётся."),
    t("Condensation: higher up the air is colder, so the vapour turns into tiny droplets. Billions of them make a cloud.", "Խտացում․ վերևում օդն ավելի ցուրտ է, և գոլորշին վերածվում է մանր կաթիլների։ Դրանց միլիարդները կազմում են ամպ։", "Конденсация: выше воздух холоднее, и пар превращается в крошечные капли. Миллиарды капель образуют облако."),
    t("Precipitation: the wind carries the cloud over land. Pushed up the mountain it cools further, the drops grow heavy and fall as rain or snow.", "Տեղումներ․ քամին ամպը տանում է ցամաքի վրա։ Լեռն ի վեր բարձրանալով՝ այն ավելի է սառչում, կաթիլները ծանրանում են և թափվում որպես անձրև կամ ձյուն։", "Осадки: ветер несёт облако над сушей. Поднимаясь по склону, оно ещё сильнее остывает, капли тяжелеют и выпадают дождём или снегом."),
    t("Runoff: water flows back to the ocean in rivers and underground. The same water has gone round this cycle for billions of years.", "Հոսք․ ջուրը գետերով և ստորգետնյա ճանապարհով վերադառնում է օվկիանոս։ Նույն ջուրը միլիարդավոր տարիներ պտտվում է այս շրջապտույտով։", "Сток: вода возвращается в океан по рекам и под землёй. Одна и та же вода ходит по этому кругу миллиарды лет."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    const cloudX = i < 2 ? 80 : i === 2 ? lerp(80, 205, Math.min(1, k * 1.4)) : 205;
    const showCloud = i >= 1;
    return (
      <g>
        <rect width="320" height="220" fill="#e0f2fe" />
        <circle cx="34" cy="30" r="18" fill="#facc15" />
        <path d="M0,160 L140,160 L140,220 L0,220 Z" fill="#0ea5e9" />
        <path d="M140,160 C170,150 190,120 225,70 C240,52 255,52 268,72 C285,100 300,130 320,140 L320,220 L140,220 Z" fill="#84cc16" />
        <path d="M226,70 C240,52 255,52 268,72 C258,66 238,64 226,70 Z" fill="#fff" />
        {i === 0 || i === 1
          ? [40, 70, 100, 125].map((x, j) => {
              const yy = 155 - ((p * 60 + j * 15) % 60);
              return <path key={j} d={`M${x},${yy} q-5,-6 0,-12 q5,-6 0,-12`} fill="none" stroke="#fff" strokeWidth="2.5" opacity={0.9 - ((p * 60 + j * 15) % 60) / 70} />;
            })
          : null}
        {showCloud ? (
          <g opacity={i === 1 ? k : 1}>
            <ellipse cx={cloudX} cy="58" rx="34" ry="14" fill={i >= 2 ? "#94a3b8" : "#fff"} />
            <circle cx={cloudX - 14} cy="48" r="13" fill={i >= 2 ? "#94a3b8" : "#fff"} />
            <circle cx={cloudX + 10} cy="44" r="16" fill={i >= 2 ? "#94a3b8" : "#fff"} />
          </g>
        ) : null}
        {i === 2 && k > 0.6
          ? scatter(14, 180, 76, 50, 50, 3).map((q, j) => <line key={j} x1={q.x} y1={q.y + ((p * 80 + j * 9) % 30)} x2={q.x - 3} y2={q.y + 8 + ((p * 80 + j * 9) % 30)} stroke="#2563eb" strokeWidth="2" />)
          : null}
        {i === 2 ? <Arrow x1={110} y1={30} x2={170} y2={30} color="#64748b" width={2.5} /> : null}
        {i === 3 ? (
          <g>
            <path d="M246,80 C230,110 200,130 180,150 C165,160 150,162 138,166" fill="none" stroke="#2563eb" strokeWidth="4" strokeDasharray="10 6" strokeDashoffset={-p * 64} />
            <path d="M270,150 C240,190 190,200 130,200" fill="none" stroke="#1d4ed8" strokeWidth="2.5" strokeDasharray="4 6" strokeDashoffset={-p * 40} opacity="0.7" />
          </g>
        ) : null}
        <Tag x={160} y={212}>{[
          T(lang, "Evaporation", "Գոլորշիացում", "Испарение"),
          T(lang, "Condensation: a cloud forms", "Խտացում․ առաջանում է ամպ", "Конденсация: образуется облако"),
          T(lang, "Precipitation", "Տեղումներ", "Осадки"),
          T(lang, "Rivers and groundwater flow back", "Գետերն ու ստորերկրյա ջրերը հետ են հոսում", "Реки и подземные воды стекают обратно"),
        ][i]}</Tag>
      </g>
    );
  },
};

/* ---------------- continental drift ---------------- */

const SAM = "M0,0 L-14,-28 L-44,-40 L-70,-26 L-78,4 L-64,36 L-50,74 L-40,106 L-30,120 L-22,96 L-10,58 L4,22 Z";
const AFR = "M0,-8 L18,-46 L62,-58 L94,-40 L104,-6 L90,18 L82,54 L62,92 L46,96 L34,62 L22,34 L8,16 Z";

const plates: Mech = {
  title: t("Continental drift: Africa and South America", "Մայրցամաքների դրեյֆը․ Աֆրիկա և Հարավային Ամերիկա", "Дрейф материков: Африка и Южная Америка"),
  caps: [
    t("About 250 million years ago the continents were joined in Pangaea. Fossils of the small reptile Mesosaurus lived across what is now both continents.", "Մոտ 250 միլիոն տարի առաջ մայրցամաքները միացած էին Պանգեայում։ Փոքրիկ սողուն մեզոզավրը ապրում էր այժմյան երկու մայրցամաքների տարածքում։", "Около 250 млн лет назад материки были соединены в Пангею. Маленький ящер мезозавр жил там, где теперь оба материка."),
    t("Hot mantle rock rose under the supercontinent and split it. A rift opened, and the sea flowed into it.", "Տաք թիկնոցային ապարը բարձրացավ գերմայրցամաքի տակ և ճեղքեց այն։ Բացվեց ռիֆտ, և ծովը լցվեց նրա մեջ։", "Горячее вещество мантии поднялось под суперматериком и раскололо его. Открылся рифт, и в него хлынуло море."),
    t("Lava keeps filling the crack along the Mid-Atlantic Ridge, so the Atlantic widens by a few centimetres a year, about as fast as fingernails grow.", "Լավան շարունակում է լցնել ճեղքը Միջինատլանտյան լեռնաշղթայի երկայնքով, ուստի Ատլանտյան օվկիանոսը տարեկան լայնանում է մի քանի սանտիմետրով՝ մոտավորապես եղունգների աճի արագությամբ։", "Лава продолжает заполнять трещину вдоль Срединно-Атлантического хребта, и Атлантика расширяется на несколько сантиметров в год — примерно как растут ногти."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    const gap = i === 0 ? 0 : i === 1 ? lerp(0, 22, k) : lerp(22, 70, k);
    const sx = 150 - gap, ax = 154 + gap;
    return (
      <g>
        <rect width="320" height="220" fill={i === 0 ? "#bae6fd" : "#7dd3fc"} />
        {i >= 1 ? <rect x={sx + 2} y="40" width={ax - sx - 4} height="160" fill="#38bdf8" /> : null}
        {i >= 1 ? <line x1={(sx + ax) / 2} x2={(sx + ax) / 2} y1="30" y2="200" stroke="#ea580c" strokeWidth="3" strokeDasharray="6 4" opacity={0.6 + 0.4 * Math.sin(p * 12)} /> : null}
        <path d={SAM} transform={`translate(${sx},90)`} fill="#a3e635" stroke="#4d7c0f" strokeWidth="1.5" />
        <path d={AFR} transform={`translate(${ax},86)`} fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" />
        {[[sx - 12, 108], [sx - 22, 124], [ax + 14, 104], [ax + 24, 120]].map(([x, y], j) => (
          <g key={j} transform={`translate(${x},${y})`}>
            <path d="M-8,0 q4,-4 10,-2 q4,1 8,-2 M-8,0 q6,3 14,1" fill="none" stroke="#7c2d12" strokeWidth="1.6" />
          </g>
        ))}
        {i === 2 ? (
          <g>
            <Arrow x1={sx - 30} y1={190} x2={sx - 60} y2={190} color="#334155" width={2} />
            <Arrow x1={ax + 30} y1={190} x2={ax + 60} y2={190} color="#334155" width={2} />
          </g>
        ) : null}
        <Tag x={sx - 40} y={34}>{T(lang, "South America", "Հվ. Ամերիկա", "Юж. Америка")}</Tag>
        <Tag x={ax + 52} y={34}>{T(lang, "Africa", "Աֆրիկա", "Африка")}</Tag>
        <Tag x={160} y={212}>{[
          T(lang, "250 million years ago: Pangaea", "250 միլիոն տարի առաջ․ Պանգեա", "250 млн лет назад: Пангея"),
          T(lang, "A rift splits the continent", "Ռիֆտը ճեղքում է մայրցամաքը", "Рифт раскалывает материк"),
          T(lang, "Today: the Atlantic keeps widening", "Այսօր․ Ատլանտյանը շարունակում է լայնանալ", "Сегодня: Атлантика продолжает расширяться"),
        ][i]}</Tag>
      </g>
    );
  },
};

/* ---------------- plate collision (Armenia) ---------------- */

const collision: Mech = {
  title: t("How the Armenian Highlands rose", "Ինչպես բարձրացավ Հայկական լեռնաշխարհը", "Как поднялось Армянское нагорье"),
  caps: [
    t("Tens of millions of years ago the Tethys Ocean lay between the Arabian and Eurasian plates. Marine limestones and shell fossils in Armenia come from it.", "Տասնյակ միլիոնավոր տարիներ առաջ Արաբական և Եվրասիական սալերի միջև Թետիս օվկիանոսն էր։ Հայաստանի ծովային կրաքարերն ու խեցիների բրածոները նրանից են։", "Десятки миллионов лет назад между Аравийской и Евразийской плитами лежал океан Тетис. Морские известняки и окаменелые раковины Армении — от него."),
    t("The Arabian plate moved north. The heavy ocean floor sank under Eurasia, and the ocean narrowed.", "Արաբական սալը շարժվեց դեպի հյուսիս։ Օվկիանոսի ծանր հատակը խորասուզվեց Եվրասիայի տակ, և օվկիանոսը նեղացավ։", "Аравийская плита двинулась на север. Тяжёлое океанское дно погружалось под Евразию, и океан сужался."),
    t("When the continents met, the crust between them crumpled and rose: the ranges of the Lesser Caucasus and the Highlands.", "Երբ մայրցամաքները հանդիպեցին, նրանց միջև ընկած կեղևը ճմռթվեց և բարձրացավ․ Փոքր Կովկասի լեռնաշղթաները և լեռնաշխարհը։", "Когда материки встретились, кора между ними смялась и поднялась: хребты Малого Кавказа и нагорье."),
    t("Magma rose through the cracks and built volcanoes such as Aragats and Ararat. The plates still push, which is why Armenia has earthquakes.", "Մագման բարձրացավ ճեղքերով և կառուցեց Արագածի և Արարատի նման հրաբուխներ։ Սալերը դեռ սեղմում են իրար, ահա թե ինչու Հայաստանում երկրաշարժեր են լինում։", "Магма поднялась по трещинам и построила вулканы — Арагац и Арарат. Плиты давят до сих пор, поэтому в Армении бывают землетрясения."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    const shift = i === 0 ? 0 : i === 1 ? lerp(0, 50, k) : 50;
    const arabX = 210 - shift;
    const up = i >= 2 ? (i === 2 ? k : 1) : 0;
    const shake = i === 3 ? Math.sin(p * 60) * 1.2 : 0;
    return (
      <g transform={`translate(${shake},0)`}>
        <rect width="320" height="220" fill="#e0f2fe" />
        <rect x="0" y="150" width="320" height="70" fill="#fdba74" opacity="0.5" />
        <path d={`M0,110 L130,110 L${150 + up * 10},${110 - up * 46} L${170 + up * 10},${110 - up * 30} L${arabX - 2},110 L${arabX},150 L0,150 Z`} fill="#a16207" />
        {i < 2 ? <rect x="130" y="118" width={arabX - 130} height="14" fill="#0ea5e9" /> : null}
        <path d={`M${arabX},110 L320,110 L320,150 L${arabX},150 Z`} fill="#d97706" />
        {i < 2 ? <path d={`M${arabX},132 L${arabX - 40},180`} stroke="#57534e" strokeWidth="8" opacity="0.6" /> : null}
        {i === 3
          ? [150, 178].map((x, j) => (
              <g key={j}>
                <path d={`M${x + 4},150 L${x + 6},${110 - 46 + j * 16}`} stroke="#ef4444" strokeWidth="4" strokeDasharray="6 4" strokeDashoffset={-p * 40} />
                <circle cx={x + 6} cy={110 - 50 + j * 16 - ((p * 30) % 14)} r="4" fill="#94a3b8" opacity="0.7" />
              </g>
            ))
          : null}
        {i >= 1 ? <Arrow x1={arabX + 60} y1={130} x2={arabX + 25} y2={130} color="#1e1b4b" width={2.5} /> : null}
        <Tag x={60} y={140} color="#fff" plain>{T(lang, "Eurasian plate", "Եվրասիական սալ", "Евразийская плита")}</Tag>
        <Tag x={Math.min(280, arabX + 60)} y={146} color="#fff" plain>{T(lang, "Arabian", "Արաբական", "Аравийская")}</Tag>
        {i < 2 ? <Tag x={(130 + arabX) / 2} y={104}>{T(lang, "Tethys", "Թետիս", "Тетис")}</Tag> : null}
        <Tag x={160} y={212}>{[
          T(lang, "The Tethys Ocean", "Թետիս օվկիանոսը", "Океан Тетис"),
          T(lang, "The ocean floor sinks", "Օվկիանոսի հատակը խորասուզվում է", "Океанское дно погружается"),
          T(lang, "Collision: mountains rise", "Բախում․ լեռներ են բարձրանում", "Столкновение: поднимаются горы"),
          T(lang, "Volcanoes and earthquakes", "Հրաբուխներ և երկրաշարժեր", "Вулканы и землетрясения"),
        ][i]}</Tag>
      </g>
    );
  },
};

/* ---------------- breezes and monsoons ---------------- */

const breeze: Mech = {
  title: t("Breezes and monsoons: wind from high to low pressure", "Բրիզներ և մուսսոններ․ քամին բարձր ճնշումից դեպի ցածր", "Бризы и муссоны: ветер из высокого давления в низкое"),
  caps: [
    t("Day: land warms faster than water. Warm air rises over the land and pressure there falls, so a cool breeze blows from the sea.", "Ցերեկ․ ցամաքն ավելի արագ է տաքանում, քան ջուրը։ Տաք օդը բարձրանում է ցամաքի վրա, ճնշումն այնտեղ ընկնում է, և ծովից զով բրիզ է փչում։", "День: суша нагревается быстрее воды. Тёплый воздух поднимается над сушей, давление падает, и с моря дует прохладный бриз."),
    t("Night: land cools faster. Now the sea is warmer, air rises over it, and the breeze blows from the land to the sea.", "Գիշեր․ ցամաքն ավելի արագ է սառչում։ Այժմ ծովն է ավելի տաք, օդը բարձրանում է նրա վրա, և բրիզը փչում է ցամաքից դեպի ծով։", "Ночь: суша остывает быстрее. Теперь море теплее, воздух поднимается над ним, и бриз дует с суши на море."),
    t("A monsoon is the same idea over a whole season. In summer the hot continent draws in moist ocean air, bringing heavy rain (India).", "Մուսսոնը նույն գաղափարն է ամբողջ եղանակի ընթացքում։ Ամռանը տաք մայրցամաքը ներքաշում է օվկիանոսի խոնավ օդը՝ բերելով առատ անձրևներ (Հնդկաստան)։", "Муссон — то же самое, но на целый сезон. Летом горячий материк втягивает влажный океанский воздух и приносит ливни (Индия)."),
    t("In winter the continent is cold and pressure over it is high, so dry air flows out towards the ocean. The winter monsoon is the dry season.", "Ձմռանը մայրցամաքը ցուրտ է, ճնշումը նրա վրա բարձր է, և չոր օդը հոսում է դեպի օվկիանոս։ Ձմեռային մուսսոնը չոր եղանակն է։", "Зимой материк холодный, давление над ним высокое, и сухой воздух течёт к океану. Зимний муссон — сухой сезон."),
  ],
  draw: (i, p, lang) => {
    const night = i === 1 || i === 3;
    const toLand = i === 0 || i === 2;
    const off = (p * 60) % 60;
    return (
      <g>
        <rect width="320" height="220" fill={night ? "#1e293b" : "#e0f2fe"} />
        {night ? <circle cx="40" cy="30" r="12" fill="#e2e8f0" /> : <circle cx="40" cy="30" r="16" fill="#facc15" />}
        <rect x="0" y="150" width="160" height="70" fill="#0ea5e9" />
        <rect x="160" y="146" width="160" height="74" fill={i === 3 ? "#cbd5e1" : "#84cc16"} />
        {i === 2 ? scatter(12, 200, 90, 90, 40, 5).map((q, j) => <line key={j} x1={q.x} y1={q.y + ((p * 70 + j * 7) % 30)} x2={q.x - 3} y2={q.y + 7 + ((p * 70 + j * 7) % 30)} stroke="#2563eb" strokeWidth="2" />) : null}
        {i === 2 ? <ellipse cx="245" cy="78" rx="50" ry="16" fill="#94a3b8" /> : null}
        <Tag x={6} y={140} anchor="start" color={night ? "#e2e8f0" : "#1e1b4b"} plain>{toLand ? T(lang, "H: cooler, high pressure", "Բ․ զով, բարձր ճնշում", "В: прохладно, высокое давление") : T(lang, "L: warmer, low pressure", "Ց․ տաք, ցածր ճնշում", "Н: теплее, низкое давление")}</Tag>
        <Tag x={314} y={140} anchor="end" color={night ? "#e2e8f0" : "#1e1b4b"} plain>{toLand ? T(lang, "L: warmer, low pressure", "Ց․ տաք, ցածր ճնշում", "Н: теплее, низкое давление") : T(lang, "H: cooler, high pressure", "Բ․ զով, բարձր ճնշում", "В: прохладно, высокое давление")}</Tag>
        {/* the loop of air: along the ground, up, back aloft, down */}
        <path d="M70,120 L250,120 M250,120 L250,60 M250,60 L70,60 M70,60 L70,120" fill="none" stroke={night ? "#64748b" : "#94a3b8"} strokeWidth="1.5" strokeDasharray="4 4" />
        {[0, 1, 2].map((j) => {
          const x = toLand ? 70 + ((off * 3 + j * 60) % 180) : 250 - ((off * 3 + j * 60) % 180);
          return <Arrow key={j} x1={x} y1={120} x2={x + (toLand ? 22 : -22)} y2={120} color={night ? "#38bdf8" : "#0284c7"} width={3} />;
        })}
        <Arrow x1={toLand ? 250 : 70} y1={110} x2={toLand ? 250 : 70} y2={72} color="#ef4444" width={2.5} />
        <Arrow x1={toLand ? 70 : 250} y1={72} x2={toLand ? 70 : 250} y2={110} color="#3b82f6" width={2.5} />
        <Tag x={170} y={24} color={night ? "#e2e8f0" : "#1e1b4b"} plain>{[
          T(lang, "Day breeze: from sea to land", "Ցերեկային բրիզ․ ծովից ցամաք", "Дневной бриз: с моря на сушу"),
          T(lang, "Night breeze: from land to sea", "Գիշերային բրիզ․ ցամաքից ծով", "Ночной бриз: с суши на море"),
          T(lang, "Summer monsoon: rain", "Ամառային մուսսոն․ անձրև", "Летний муссон: дожди"),
          T(lang, "Winter monsoon: dry", "Ձմեռային մուսսոն․ չոր", "Зимний муссон: сухо"),
        ][i]}</Tag>
      </g>
    );
  },
};

/* ---------------- demographic transition ---------------- */

/** Birth and death rates (‰) at the start and end of each stage. */
const BIRTH = [38, 38, 36, 18, 11];
const DEATH = [35, 33, 14, 10, 11];
/** Share of each age band (young → old) for the stage's population pyramid. */
const PYR = [
  [1, 0.66, 0.44, 0.29, 0.18, 0.09, 0.03],
  [1, 0.86, 0.72, 0.56, 0.4, 0.24, 0.1],
  [0.72, 0.8, 0.82, 0.72, 0.56, 0.36, 0.18],
  [0.5, 0.58, 0.68, 0.76, 0.76, 0.64, 0.46],
];

const transition: Mech = {
  title: t("The demographic transition", "Ժողովրդագրական անցում", "Демографический переход"),
  caps: [
    t("Stage 1: many children are born, but many die young. Births and deaths almost balance, so the population grows slowly.", "Փուլ 1․ շատ երեխաներ են ծնվում, բայց շատերը վաղ են մահանում։ Ծնունդներն ու մահերը գրեթե հավասարակշռված են, և բնակչությունը դանդաղ է աճում։", "Этап 1: рождается много детей, но многие умирают рано. Рождения и смерти почти уравновешены, население растёт медленно."),
    t("Stage 2: medicine, clean water and more food cut the death rate, while families still have many children. The population grows fast.", "Փուլ 2․ բժշկությունը, մաքուր ջուրը և ավելի շատ սնունդը նվազեցնում են մահացությունը, իսկ ընտանիքները դեռ շատ երեխաներ ունեն։ Բնակչությունն արագ է աճում։", "Этап 2: медицина, чистая вода и больше еды снижают смертность, а детей в семьях по-прежнему много. Население быстро растёт."),
    t("Stage 3: with cities, school for girls and less need for child labour, families have fewer children. Growth slows.", "Փուլ 3․ քաղաքների, աղջիկների կրթության և մանկական աշխատանքի կարիքի նվազման հետ ընտանիքներն ավելի քիչ երեխաներ են ունենում։ Աճը դանդաղում է։", "Этап 3: с городами, учёбой девочек и меньшей нуждой в детском труде детей рождается меньше. Рост замедляется."),
    t("Stage 4: low birth and death rates. The population stops growing and ages: the pyramid narrows at the base (Europe, Japan, Armenia).", "Փուլ 4․ ցածր ծնելիություն և մահացություն։ Բնակչությունը դադարում է աճել և ծերանում է․ բուրգը նեղանում է հիմքում (Եվրոպա, Ճապոնիա, Հայաստան)։", "Этап 4: низкие рождаемость и смертность. Население перестаёт расти и стареет: пирамида сужается у основания (Европа, Япония, Армения)."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    const X = (s: number) => 20 + s * 45;
    const Y = (v: number) => 130 - v * 2.6;
    const pts = (arr: number[]) => arr.map((v, s) => `${s ? "L" : "M"}${X(s)},${Y(v)}`).join("");
    const pyr = PYR[i].map((v, j) => lerp((PYR[i - 1] ?? PYR[i])[j], v, i ? k : 1));
    return (
      <g>
        <rect width="320" height="220" fill="#f8fafc" />
        <rect x={X(i)} y="20" width="45" height="112" fill="#fef3c7" />
        {[1, 2, 3].map((s) => <line key={s} x1={X(s)} x2={X(s)} y1="20" y2="132" stroke="#e2e8f0" />)}
        <path d={`${pts(BIRTH)} L${X(4)},${Y(DEATH[4])} ${DEATH.map((v, s) => `L${X(4 - s)},${Y(DEATH[4 - s])}`).join(" ")} Z`} fill="#bbf7d0" opacity="0.6" />
        <path d={pts(BIRTH)} fill="none" stroke="#2563eb" strokeWidth="2.5" />
        <path d={pts(DEATH)} fill="none" stroke="#e11d48" strokeWidth="2.5" />
        <line x1="20" x2="200" y1="132" y2="132" stroke="#334155" />
        {[0, 1, 2, 3].map((s) => <text key={s} x={X(s) + 22} y="146" textAnchor="middle" fontSize="10" fontWeight={s === i ? 900 : 700} fill={s === i ? "#b45309" : "#64748b"}>{s + 1}</text>)}
        <Tag x={36} y={Y(BIRTH[0]) - 6} color="#2563eb" anchor="start">{T(lang, "births", "ծնունդներ", "рождаемость")}</Tag>
        <Tag x={150} y={Y(DEATH[3]) + 14} color="#e11d48">{T(lang, "deaths", "մահեր", "смертность")}</Tag>
        <Tag x={96} y={Y(25)} color="#15803d" plain>{T(lang, "growth", "աճ", "прирост")}</Tag>
        {pyr.map((v, j) => (
          <g key={j}>
            <rect x={262 - v * 46} y={134 - j * 16} width={v * 46} height="13" fill="#60a5fa" />
            <rect x={264} y={134 - j * 16} width={v * 46} height="13" fill="#f472b6" />
          </g>
        ))}
        <Tag x={263} y={164}>{T(lang, "age pyramid", "տարիքային բուրգ", "половозрастная пирамида")}</Tag>
        <Tag x={160} y={206}>{[
          T(lang, "Stage 1: slow growth", "Փուլ 1․ դանդաղ աճ", "Этап 1: медленный рост"),
          T(lang, "Stage 2: population explosion", "Փուլ 2․ բնակչության պայթյուն", "Этап 2: демографический взрыв"),
          T(lang, "Stage 3: growth slows", "Փուլ 3․ աճը դանդաղում է", "Этап 3: рост замедляется"),
          T(lang, "Stage 4: an ageing population", "Փուլ 4․ ծերացող բնակչություն", "Этап 4: стареющее население"),
        ][i]}</Tag>
      </g>
    );
  },
};

export const MECHS: Record<string, Mech> = { seasons, watercycle, plates, collision, breeze, transition };
