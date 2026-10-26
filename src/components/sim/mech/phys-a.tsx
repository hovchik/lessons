"use client";

import { Arrow } from "../kit";
import { L, t } from "../labels";
import { ease, electron, scatter, Tag } from "./draw";
import type { Mech } from "./types";

/* ---------------- four-stroke engine ---------------- */

const engine4: Mech = {
  title: t("How a four-stroke engine works", "Ինչպես է աշխատում քառատակտ շարժիչը", "Как работает четырёхтактный двигатель"),
  h: 250,
  caps: [
    t("Intake. The piston moves down and the inlet valve is open: a mixture of fuel vapour and air is drawn into the cylinder.", "Ներծծում։ Մխոցն իջնում է, ներածման փականը բաց է․ վառելիքի գոլորշու և օդի խառնուրդը ներծծվում է գլանի մեջ։", "Впуск. Поршень движется вниз, впускной клапан открыт: смесь паров топлива и воздуха засасывается в цилиндр."),
    t("Compression. Both valves are closed. The piston moves up and squeezes the mixture, which gets hot.", "Սեղմում։ Երկու փականներն էլ փակ են։ Մխոցը բարձրանում է և սեղմում խառնուրդը, որը տաքանում է։", "Сжатие. Оба клапана закрыты. Поршень идёт вверх и сжимает смесь, она нагревается."),
    t("Power stroke. A spark from the plug ignites the mixture. The hot gases expand and push the piston down: only this stroke does useful work.", "Աշխատանքային տակտ։ Մոմի կայծը բոցավառում է խառնուրդը։ Տաք գազերն ընդարձակվում են և մխոցը հրում ներքև․ օգտակար աշխատանք կատարվում է միայն այս տակտում։", "Рабочий ход. Искра свечи поджигает смесь. Горячие газы расширяются и толкают поршень вниз: полезную работу совершает только этот такт."),
    t("Exhaust. The outlet valve opens and the piston pushes the burnt gases out. Then the four strokes repeat.", "Արտանետում։ Արտածման փականը բացվում է, և մխոցը դուրս է մղում այրված գազերը։ Հետո չորս տակտերը կրկնվում են։", "Выпуск. Выпускной клапан открывается, и поршень выталкивает отработанные газы. Затем четыре такта повторяются."),
  ],
  draw: (i, p, lang) => {
    const th = Math.PI * (i + ease(p));
    const cx = 160, cy = 212, r = 30;
    const pinX = cx + r * Math.sin(th), pinY = cy - r * Math.cos(th);
    const pistonY = pinY - Math.sqrt(70 * 70 - (pinX - cx) ** 2) - 12;
    const gas = ["#bae6fd", "#fdba74", "#f97316", "#cbd5e1"][i];
    const inOpen = i === 0, outOpen = i === 3;
    const dots = scatter(i === 1 ? 26 : 18, 116, 56, 88, Math.max(8, pistonY - 60), i + 3);
    return (
      <g>
        <rect x="104" y="40" width="112" height="170" fill="#e2e8f0" />
        <rect x="112" y="48" width="96" height="160" fill="#fff" />
        <rect x="112" y="48" width="96" height={pistonY - 48} fill={gas} opacity={i === 2 ? 0.6 + 0.3 * (1 - p) : 0.7} />
        {dots.map((d, k) => <circle key={k} cx={d.x} cy={d.y} r="2" fill={i === 3 ? "#64748b" : i === 2 ? "#b91c1c" : "#0369a1"} />)}
        <rect x="112" y={pistonY} width="96" height="24" rx="3" fill="#64748b" />
        <line x1={cx} y1={pistonY + 12} x2={pinX} y2={pinY} stroke="#334155" strokeWidth="6" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r={r + 6} fill="none" stroke="#94a3b8" strokeWidth="3" />
        <circle cx={pinX} cy={pinY} r="5" fill="#1e1b4b" />
        <rect x="70" y="20" width="44" height="14" fill="#e2e8f0" />
        <rect x="206" y="20" width="44" height="14" fill="#e2e8f0" />
        <line x1="130" x2="130" y1="16" y2={inOpen ? 56 : 48} stroke="#0369a1" strokeWidth="3" />
        <rect x="120" y={inOpen ? 54 : 46} width="20" height="4" fill="#0369a1" />
        <line x1="190" x2="190" y1="16" y2={outOpen ? 56 : 48} stroke="#b45309" strokeWidth="3" />
        <rect x="180" y={outOpen ? 54 : 46} width="20" height="4" fill="#b45309" />
        <rect x="155" y="28" width="10" height="20" fill="#475569" />
        {i === 2 && p < 0.35 ? <path d="M160 50 l-8 10 l6 0 l-4 10 l12 -14 l-6 0 l4 -6 Z" fill="#facc15" stroke="#ca8a04" /> : null}
        {inOpen ? <Arrow x1={70} y1={27} x2={124} y2={27} color="#0369a1" /> : null}
        {outOpen ? <Arrow x1={196} y1={27} x2={252} y2={27} color="#b45309" /> : null}
        <Tag x={62} y={50} anchor="middle" color="#0369a1">{L(t("inlet", "ներածում", "впуск"), lang)}</Tag>
        <Tag x={258} y={50} anchor="middle" color="#b45309">{L(t("outlet", "արտածում", "выпуск"), lang)}</Tag>
        <Tag x={160} y={12}>{L(t("spark plug", "վառման մոմ", "свеча"), lang)}</Tag>
        <Tag x={100} y={pistonY + 16} anchor="end">{L(t("piston", "մխոց", "поршень"), lang)}</Tag>
        <Tag x={124} y={cy + 4} anchor="end">{L(t("crankshaft", "ծնկաձև լիսեռ", "коленвал"), lang)}</Tag>
      </g>
    );
  },
};

/* ---------------- DC motor ---------------- */

const motor: Mech = {
  title: t("How an electric motor turns", "Ինչպես է պտտվում էլեկտրաշարժիչը", "Как вращается электродвигатель"),
  caps: [
    t("A coil sits between the poles of a magnet. The magnetic field goes from N to S.", "Կոճը գտնվում է մագնիսի բևեռների միջև։ Մագնիսական դաշտն ուղղված է N-ից S։", "Рамка находится между полюсами магнита. Магнитное поле направлено от N к S."),
    t("Current flows through the coil: out of the page on one side (⊙) and into it on the other (⊗).", "Կոճով հոսանք է անցնում․ մի կողմում դեպի մեզ (⊙), մյուս կողմում՝ մեզանից (⊗)։", "По рамке идёт ток: с одной стороны к нам (⊙), с другой — от нас (⊗)."),
    t("The Ampère force pushes one side up and the other side down, so the coil starts to turn.", "Ամպերի ուժը մի կողմը հրում է վեր, մյուսը՝ վար, և կոճը սկսում է պտտվել։", "Сила Ампера толкает одну сторону вверх, другую вниз, и рамка начинает поворачиваться."),
    t("Every half turn the commutator swaps the current, so the force keeps turning the coil the same way.", "Ամեն կես պտույտից հետո կոլեկտորը փոխում է հոսանքի ուղղությունը, և ուժը կոճը պտտում է միշտ նույն կողմը։", "Каждые пол-оборота коллектор меняет направление тока, и сила всё время вращает рамку в одну сторону."),
  ],
  draw: (i, p) => {
    const th = i >= 2 ? -p * 2 * Math.PI + 0.3 : 0.3;
    const cx = 160, cy = 100, R = 46;
    const a = { x: cx + R * Math.cos(th + Math.PI), y: cy - R * Math.sin(th + Math.PI) };
    const b = { x: cx + R * Math.cos(th), y: cy - R * Math.sin(th) };
    const wire = (w: { x: number; y: number }) => {
      const left = w.x < cx;
      return (
        <g key={w.x}>
          <circle cx={w.x} cy={w.y} r="9" fill="#fff" stroke="#b45309" strokeWidth="3" />
          {i >= 1 ? (left ? <circle cx={w.x} cy={w.y} r="2.5" fill="#b45309" /> : <path d={`M${w.x - 5} ${w.y - 5} L${w.x + 5} ${w.y + 5} M${w.x + 5} ${w.y - 5} L${w.x - 5} ${w.y + 5}`} stroke="#b45309" strokeWidth="2" />) : null}
          {i >= 2 ? <Arrow x1={w.x} y1={w.y + (left ? -12 : 12)} x2={w.x} y2={w.y + (left ? -42 : 42)} color="#e11d48" label="F" /> : null}
        </g>
      );
    };
    return (
      <g>
        <rect x="14" y="40" width="56" height="120" rx="6" fill="#e11d48" />
        <rect x="250" y="40" width="56" height="120" rx="6" fill="#2563eb" />
        <text x="42" y="108" textAnchor="middle" fontSize="28" fontWeight="900" fill="#fff">N</text>
        <text x="278" y="108" textAnchor="middle" fontSize="28" fontWeight="900" fill="#fff">S</text>
        {[60, 100, 140].map((y) => <Arrow key={y} x1={76} y1={y} x2={244} y2={y} color="#93c5fd" width={1.5} head={6} />)}
        <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#b45309" strokeWidth="3" strokeDasharray="5 4" />
        {wire(a)}
        {wire(b)}
        <g transform={`translate(${cx} 190)`}>
          <path d={`M -16 0 A 16 16 0 0 1 16 0`} fill="none" stroke="#b45309" strokeWidth="6" transform={`rotate(${(-th * 180) / Math.PI})`} />
          <path d={`M 16 0 A 16 16 0 0 1 -16 0`} fill="none" stroke="#d97706" strokeWidth="6" transform={`rotate(${(-th * 180) / Math.PI})`} />
          <rect x="-34" y="-5" width="14" height="10" fill="#334155" />
          <rect x="20" y="-5" width="14" height="10" fill="#334155" />
          <text x="-48" y="4" textAnchor="middle" fontSize="12" fontWeight="900" fill="#e11d48">+</text>
          <text x="48" y="4" textAnchor="middle" fontSize="12" fontWeight="900" fill="#2563eb">−</text>
        </g>
      </g>
    );
  },
};

/* ---------------- electrisation ---------------- */

const charges = (x: number, y: number, plus: number, minus: number, w = 90) => {
  const out = [];
  for (let k = 0; k < plus; k++) out.push(<text key={`p${k}`} x={x + 8 + (k % 6) * (w / 6.5)} y={y + 10 + Math.floor(k / 6) * 12} fontSize="11" fontWeight="900" fill="#e11d48">+</text>);
  for (let k = 0; k < minus; k++) out.push(<text key={`m${k}`} x={x + 12 + (k % 6) * (w / 6.5)} y={y + 16 + Math.floor(k / 6) * 12} fontSize="12" fontWeight="900" fill="#2563eb">−</text>);
  return out;
};

const electrisation: Mech = {
  title: t("Charging by rubbing", "Էլեկտրականացում շփումով", "Электризация трением"),
  caps: [
    t("A glass rod and a piece of silk are both neutral: each has as many positive as negative charges.", "Ապակե ձողը և մետաքսի կտորը չեզոք են․ յուրաքանչյուրն ունի հավասար թվով դրական և բացասական լիցքեր։", "Стеклянная палочка и шёлк нейтральны: в каждом поровну положительных и отрицательных зарядов."),
    t("When we rub them, some electrons move from the glass to the silk.", "Երբ դրանք շփում ենք, էլեկտրոնների մի մասն ապակուց անցնում է մետաքսին։", "При трении часть электронов переходит со стекла на шёлк."),
    t("Now the glass has too few electrons and is positive; the silk has extra electrons and is negative. The charges are equal in size.", "Այժմ ապակին ունի էլեկտրոնների պակաս և դրական է, մետաքսն ունի ավելորդ էլեկտրոններ և բացասական է։ Լիցքերը մեծությամբ հավասար են։", "Теперь у стекла не хватает электронов, оно заряжено положительно; у шёлка лишние электроны, он заряжен отрицательно. Заряды равны по модулю."),
    t("A charged rod attracts small pieces of paper. Like charges repel, unlike charges attract.", "Լիցքավորված ձողը ձգում է թղթի մանր կտորներ։ Նույնանուն լիցքերը վանում են, տարանունները՝ ձգում։", "Заряженная палочка притягивает кусочки бумаги. Одноимённые заряды отталкиваются, разноимённые притягиваются."),
  ],
  draw: (i, p, lang) => {
    const moved = i === 0 ? 0 : i === 1 ? Math.round(ease(p) * 4) : 4;
    const rub = i === 1 ? Math.sin(p * Math.PI * 8) * 10 : 0;
    return (
      <g>
        <rect x={40} y={40} width="240" height="26" rx="13" fill="#e0f2fe" stroke="#7dd3fc" />
        <g>{charges(40, 44, 12, 12 - moved, 220)}</g>
        <rect x={110 + rub} y={i >= 2 ? 120 : 72} width="110" height="40" rx="8" fill="#fde68a" stroke="#f59e0b" />
        <g>{charges(110 + rub, i >= 2 ? 124 : 76, 6, 6 + moved, 100)}</g>
        <Tag x={160} y={30}>{L(t("glass", "ապակի", "стекло"), lang)} {i >= 2 ? "(+)" : ""}</Tag>
        <Tag x={165 + rub} y={i >= 2 ? 176 : 128}>{L(t("silk", "մետաքս", "шёлк"), lang)} {i >= 2 ? "(−)" : ""}</Tag>
        {i === 1 ? <Arrow x1={150} y1={68} x2={150} y2={92} color="#2563eb" label="e⁻" /> : null}
        {i === 3 ? [0, 1, 2, 3].map((k) => {
          const y0 = 200 - ease(p) * (60 + k * 6);
          return <rect key={k} x={60 + k * 60} y={Math.max(72, y0)} width="12" height="8" fill="#f8fafc" stroke="#94a3b8" transform={`rotate(${k * 25} ${66 + k * 60} ${Math.max(76, y0 + 4)})`} />;
        }) : null}
      </g>
    );
  },
};

/* ---------------- electroscope ---------------- */

const electroscope: Mech = {
  title: t("How an electroscope works", "Ինչպես է աշխատում էլեկտրացույցը", "Как работает электроскоп"),
  caps: [
    t("An electroscope is a metal rod with two light leaves at the bottom, inside a glass case. When it is neutral, the leaves hang down.", "Էլեկտրացույցը մետաղե ձող է, որի ներքևում ապակե պատյանի մեջ երկու թեթև թերթիկ կա։ Չեզոք վիճակում թերթիկները կախված են։", "Электроскоп — металлический стержень с двумя лёгкими листочками внизу, в стеклянном корпусе. Когда он не заряжен, листочки висят."),
    t("Bring a negative rod close. Its charge pushes electrons in the metal down to the leaves; both leaves become negative and spread apart.", "Մոտեցրո՛ւ բացասական ձողը։ Դրա լիցքը մետաղի էլեկտրոնները հրում է ներքև՝ դեպի թերթիկները․ երկու թերթիկներն էլ դառնում են բացասական և բացվում են։", "Поднеси отрицательно заряженную палочку. Её заряд отталкивает электроны металла вниз, к листочкам; оба становятся отрицательными и расходятся."),
    t("Touch the top with the rod: some electrons go over to the electroscope.", "Ձողով դիպի՛ր գագաթին․ էլեկտրոնների մի մասն անցնում է էլեկտրացույցին։", "Коснись палочкой шарика: часть электронов переходит на электроскоп."),
    t("Take the rod away. The electroscope keeps its negative charge and the leaves stay apart. The wider they spread, the bigger the charge.", "Հեռացրո՛ւ ձողը։ Էլեկտրացույցը պահպանում է բացասական լիցքը, և թերթիկները մնում են բացված։ Որքան շատ են բացված, այնքան մեծ է լիցքը։", "Убери палочку. Электроскоп сохраняет отрицательный заряд, листочки остаются разведёнными. Чем сильнее они разошлись, тем больше заряд."),
  ],
  draw: (i, p) => {
    const spread = i === 0 ? 0 : i === 1 ? 18 * ease(p) : 22;
    const rodY = i === 0 ? -40 : i === 1 ? 14 : i === 2 ? 30 : -40;
    return (
      <g>
        <circle cx="160" cy="118" r="62" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="3" />
        <line x1="160" y1="40" x2="160" y2="140" stroke="#a16207" strokeWidth="5" />
        <circle cx="160" cy="40" r="10" fill="#ca8a04" />
        <path d={`M160 140 L ${160 - spread} 182`} stroke="#ca8a04" strokeWidth="4" strokeLinecap="round" />
        <path d={`M160 140 L ${160 + spread} 182`} stroke="#ca8a04" strokeWidth="4" strokeLinecap="round" />
        <rect x="120" y="178" width="80" height="12" fill="#475569" />
        {i >= 1 ? <>
          <text x={160 - spread - 8} y="168" fontSize="11" fontWeight="900" fill="#2563eb">−</text>
          <text x={160 + spread + 3} y="168" fontSize="11" fontWeight="900" fill="#2563eb">−</text>
        </> : null}
        {i === 1 ? <text x="148" y="38" fontSize="11" fontWeight="900" fill="#e11d48">+</text> : null}
        {rodY > -40 ? (
          <g transform={`translate(0 ${rodY - 40})`}>
            <rect x="170" y="0" width="120" height="16" rx="8" fill="#334155" transform="rotate(-20 170 8)" />
            {[0, 1, 2, 3].map((k) => <text key={k} x={190 + k * 22} y={-2 - k * 8} fontSize="12" fontWeight="900" fill="#93c5fd">−</text>)}
          </g>
        ) : null}
      </g>
    );
  },
};

/* ---------------- liquid thermometer ---------------- */

const thermometer: Mech = {
  title: t("How a thermometer works", "Ինչպես է աշխատում ջերմաչափը", "Как работает термометр"),
  caps: [
    t("A liquid thermometer has a bulb of liquid (alcohol or mercury), a thin tube and a scale.", "Հեղուկային ջերմաչափն ունի հեղուկով (սպիրտ կամ սնդիկ) անոթիկ, բարակ խողովակ և սանդղակ։", "Жидкостный термометр состоит из резервуара с жидкостью (спирт или ртуть), тонкой трубки и шкалы."),
    t("Put the bulb into warm water. The liquid warms up, expands and rises in the tube.", "Անոթիկը դի՛ր տաք ջրի մեջ։ Հեղուկը տաքանում է, ընդարձակվում և բարձրանում խողովակով։", "Опусти резервуар в тёплую воду. Жидкость нагревается, расширяется и поднимается по трубке."),
    t("Wait until the column stops: the thermometer and the water now have the same temperature (thermal equilibrium).", "Սպասի՛ր, մինչև սյունը կանգնի․ ջերմաչափը և ջուրն այժմ ունեն նույն ջերմաստիճանը (ջերմային հավասարակշռություն)։", "Подожди, пока столбик остановится: термометр и вода теперь имеют одинаковую температуру (тепловое равновесие)."),
    t("Read the scale with your eye level with the top of the column. Here the division value is 2 °C, so the reading is 36 °C ± 1 °C.", "Կարդա՛ սանդղակը՝ աչքը պահելով սյան վերին եզրի մակարդակին։ Այստեղ բաժանման արժեքը 2 °C է, ուստի ցուցմունքը 36 °C ± 1 °C է։", "Снимай показание, держа глаз на уровне верха столбика. Здесь цена деления 2 °C, значит, показание 36 °C ± 1 °C."),
  ],
  draw: (i, p, lang) => {
    const T = i === 0 ? 20 : i === 1 ? 20 + 16 * ease(p) : 36;
    const Y = (c: number) => 190 - c * 3.6;
    return (
      <g>
        {i >= 1 ? <rect x="90" y="150" width="90" height="62" rx="6" fill="#bae6fd" opacity="0.7" /> : null}
        <rect x="128" y="20" width="14" height="172" rx="7" fill="#f8fafc" stroke="#94a3b8" />
        <circle cx="135" cy="196" r="13" fill="#ef4444" />
        <rect x="132" y={Y(T)} width="6" height={196 - Y(T)} fill="#ef4444" />
        {Array.from({ length: 26 }, (_, k) => k * 2).map((c) => (
          <g key={c}>
            <line x1="146" x2={c % 10 === 0 ? 160 : 153} y1={Y(c)} y2={Y(c)} stroke="#475569" />
            {c % 10 === 0 ? <text x="164" y={Y(c) + 3} className="sim-axis">{c}</text> : null}
          </g>
        ))}
        {i === 3 ? <>
          <circle cx="240" cy={Y(T)} r="12" fill="#fff" stroke="#1e1b4b" strokeWidth="2" />
          <circle cx="236" cy={Y(T)} r="4" fill="#1e1b4b" />
          <line x1="145" x2="226" y1={Y(T)} y2={Y(T)} stroke="#4f46e5" strokeDasharray="4 3" />
        </> : null}
        <Tag x={60} y={196}>{L(t("bulb", "անոթիկ", "резервуар"), lang)}</Tag>
        <Tag x={80} y={70}>{L(t("tube", "խողովակ", "трубка"), lang)}</Tag>
        <Tag x={200} y={30} color="#e11d48">{Math.round(T)} °C</Tag>
      </g>
    );
  },
};

/* ---------------- evaporation ---------------- */

const evaporation: Mech = {
  title: t("Why evaporation cools", "Ինչու է գոլորշիացումը սառեցնում", "Почему испарение охлаждает"),
  caps: [
    t("Molecules of a liquid move at different speeds: some slowly (blue), some fast (red).", "Հեղուկի մոլեկուլները շարժվում են տարբեր արագություններով․ ոմանք՝ դանդաղ (կապույտ), ոմանք՝ արագ (կարմիր)։", "Молекулы жидкости движутся с разными скоростями: одни медленно (синие), другие быстро (красные)."),
    t("The fastest molecules near the surface can break away from the others and fly out: this is evaporation.", "Մակերևույթի մոտ գտնվող ամենաարագ մոլեկուլները կարող են պոկվել մյուսներից և դուրս թռչել․ սա գոլորշիացումն է։", "Самые быстрые молекулы у поверхности могут оторваться от остальных и вылететь: это испарение."),
    t("The molecules left behind are slower on average, so the liquid gets colder. That is why we feel cold after a swim.", "Մնացած մոլեկուլները միջինում ավելի դանդաղ են, ուստի հեղուկը սառչում է։ Դրա համար է լողալուց հետո մեզ ցուրտ լինում։", "Оставшиеся молекулы в среднем медленнее, поэтому жидкость охлаждается. Вот почему после купания становится холодно."),
    t("Wind, a higher temperature and a larger surface make evaporation faster. In a closed jar the vapour becomes saturated: as many molecules return as leave.", "Քամին, ավելի բարձր ջերմաստիճանը և ավելի մեծ մակերեսը արագացնում են գոլորշիացումը։ Փակ անոթում գոլորշին դառնում է հագեցած․ վերադարձող և հեռացող մոլեկուլները հավասար են։", "Ветер, более высокая температура и большая площадь ускоряют испарение. В закрытой банке пар становится насыщенным: сколько молекул вылетает, столько и возвращается."),
  ],
  draw: (i, p, lang) => {
    const mol = scatter(36, 50, 120, 220, 70, 5);
    return (
      <g>
        <rect x="40" y="100" width="240" height="100" fill="#e0f2fe" stroke="#7dd3fc" />
        {mol.map((m, k) => {
          const fast = k % 7 === 0;
          const escaping = i >= 1 && fast && m.y < 150;
          const y = escaping ? m.y - ease(p) * 100 - (i >= 2 ? 100 : 0) : m.y + Math.sin(p * 6.28 + k) * 2;
          if (escaping && i >= 2) return null;
          const color = fast ? "#ef4444" : k % 3 ? "#3b82f6" : "#8b5cf6";
          return <circle key={k} cx={m.x + Math.cos(p * 6.28 + k) * (fast ? 4 : 2)} cy={y} r="4" fill={color} />;
        })}
        {i === 3 ? <>
          <Arrow x1={20} y1={60} x2={110} y2={60} color="#64748b" label={L(t("wind", "քամի", "ветер"), lang)} />
          {[0, 1, 2].map((k) => <circle key={k} cx={160 + k * 40} cy={70 - ((p * 60 + k * 20) % 60)} r="4" fill="#ef4444" />)}
        </> : null}
        <Tag x={300} y={150} anchor="end" color="#0369a1">{L(t("water", "ջուր", "вода"), lang)}</Tag>
        {i >= 2 ? <Tag x={160} y={216} color="#2563eb">{L(t("it gets colder", "սառչում է", "охлаждается"), lang)} ↓ °C</Tag> : null}
      </g>
    );
  },
};

/* ---------------- boiling ---------------- */

const boiling: Mech = {
  title: t("What happens when water boils", "Ինչ է կատարվում, երբ ջուրը եռում է", "Что происходит при кипении воды"),
  caps: [
    t("We heat water from below. Tiny bubbles of air and vapour appear on the bottom and the walls.", "Ջուրը տաքացնում ենք ներքևից։ Հատակին և պատերին հայտնվում են օդի և գոլորշու մանր պղպջակներ։", "Нагреваем воду снизу. На дне и стенках появляются мелкие пузырьки воздуха и пара."),
    t("The bubbles grow and rise, but in the cooler water above they collapse: the kettle makes a noise before it boils.", "Պղպջակները մեծանում են և բարձրանում, բայց վերևի ավելի սառը ջրում փլուզվում են․ թեյնիկն աղմկում է եռալուց առաջ։", "Пузырьки растут и поднимаются, но в верхних, более холодных слоях схлопываются: чайник шумит перед закипанием."),
    t("At 100 °C (at normal pressure) bubbles of vapour reach the surface and burst: the water boils. Its temperature stays the same while it boils.", "100 °C-ում (նորմալ ճնշման դեպքում) գոլորշու պղպջակները հասնում են մակերևույթին և պայթում․ ջուրը եռում է։ Եռալու ընթացքում նրա ջերմաստիճանը չի փոխվում։", "При 100 °C (при нормальном давлении) пузырьки пара доходят до поверхности и лопаются: вода кипит. Во время кипения её температура не меняется."),
    t("Lower pressure means a lower boiling point: in Yerevan water boils at about 97 °C, on the top of Aragats at about 86 °C.", "Ավելի ցածր ճնշման դեպքում եռման ջերմաստիճանն ավելի ցածր է․ Երևանում ջուրը եռում է մոտ 97 °C-ում, Արագածի գագաթին՝ մոտ 86 °C-ում։", "Чем ниже давление, тем ниже температура кипения: в Ереване вода кипит примерно при 97 °C, на вершине Арагаца — около 86 °C."),
  ],
  draw: (i, p, lang) => {
    const bub = scatter(10, 90, 0, 140, 1, 9);
    const temp = i === 0 ? 60 : i === 1 ? 90 : i === 2 ? 100 : 86;
    return (
      <g>
        <path d="M70 60 L70 180 Q70 190 80 190 L240 190 Q250 190 250 180 L250 60" fill="#e0f2fe" stroke="#64748b" strokeWidth="3" />
        {[0, 1, 2, 3, 4].map((k) => <path key={k} d={`M${100 + k * 30} 214 q 6 -8 0 -16 q -6 -8 0 -14`} fill="none" stroke="#f97316" strokeWidth="3" opacity={0.5 + 0.5 * Math.sin(p * 6.28 + k)} />)}
        {bub.map((b, k) => {
          const rise = i === 0 ? 0 : ((p + k / 10) % 1);
          const top = i === 1 ? 110 : 70;
          const y = 184 - rise * (184 - top);
          const r = i === 0 ? 2 : 2 + rise * (i === 1 ? 4 : 7);
          if (i === 1 && rise > 0.85) return null;
          return <circle key={k} cx={b.x} cy={y} r={r} fill="#fff" stroke="#38bdf8" />;
        })}
        {i >= 2 ? [0, 1, 2].map((k) => <path key={k} d={`M${120 + k * 40} 54 q -8 -12 0 -24 q 8 -12 0 -24`} fill="none" stroke="#cbd5e1" strokeWidth="4" opacity={0.4 + 0.4 * Math.sin(p * 6.28 + k)} />) : null}
        <rect x="266" y="40" width="12" height="150" rx="6" fill="#f8fafc" stroke="#94a3b8" />
        <rect x="269" y={190 - temp * 1.4} width="6" height={temp * 1.4} fill="#ef4444" />
        <Tag x={272} y={30} color="#e11d48">{temp} °C</Tag>
        {i === 3 ? <Tag x={160} y={20}>{L(t("Aragats, 4090 m", "Արագած, 4090 մ", "Арагац, 4090 м"), lang)}</Tag> : null}
      </g>
    );
  },
};

/* ---------------- eclipses ---------------- */

const eclipse: Mech = {
  title: t("Solar and lunar eclipses", "Արեգակի և Լուսնի խավարումներ", "Солнечные и лунные затмения"),
  dark: true,
  caps: [
    t("Light travels in straight lines, so every lit body has a shadow behind it. The Moon goes around the Earth, and the Earth around the Sun.", "Լույսը տարածվում է ուղիղ գծերով, ուստի ամեն լուսավորված մարմին իր հետևում ստվեր ունի։ Լուսինը պտտվում է Երկրի, իսկ Երկիրը՝ Արեգակի շուրջը։", "Свет распространяется прямолинейно, поэтому за каждым освещённым телом есть тень. Луна обращается вокруг Земли, а Земля — вокруг Солнца."),
    t("Solar eclipse: the Moon passes between the Sun and the Earth. Where its full shadow falls, the Sun is hidden completely; in the half-shadow, partly.", "Արեգակի խավարում․ Լուսինն անցնում է Արեգակի և Երկրի միջև։ Որտեղ ընկնում է նրա լրիվ ստվերը, Արեգակն ամբողջովին ծածկվում է, կիսաստվերում՝ մասամբ։", "Солнечное затмение: Луна проходит между Солнцем и Землёй. Где падает её полная тень, Солнце закрыто целиком, в полутени — частично."),
    t("Lunar eclipse: the Earth is between the Sun and the Moon, and the Moon enters the Earth's shadow. It turns dark red.", "Լուսնի խավարում․ Երկիրը Արեգակի և Լուսնի միջև է, և Լուսինը մտնում է Երկրի ստվերի մեջ։ Այն դառնում է մուգ կարմիր։", "Лунное затмение: Земля между Солнцем и Луной, и Луна входит в земную тень. Она становится тёмно-красной."),
    t("Eclipses do not happen every month because the Moon's orbit is tilted by about 5° to the Earth's orbit.", "Խավարումները ամեն ամիս չեն լինում, որովհետև Լուսնի ուղեծիրը Երկրի ուղեծրի նկատմամբ թեքված է մոտ 5°-ով։", "Затмения бывают не каждый месяц, потому что орбита Луны наклонена к орбите Земли примерно на 5°."),
  ],
  draw: (i, p, lang) => {
    const ex = 230, ey = 110;
    const ang = i === 0 ? p * 2 * Math.PI : i === 1 ? Math.PI : i === 2 ? 0 : p * 2 * Math.PI;
    const mx = ex + Math.cos(ang) * 52;
    const myy = i === 3 ? ey - Math.sin(ang) * 14 : ey;
    return (
      <g>
        <circle cx="30" cy={ey} r="40" fill="#facc15" />
        <polygon points={`40,${ey - 40} ${ex},${ey - 22} ${ex},${ey + 22} 40,${ey + 40}`} fill="#fde68a" opacity="0.12" />
        {i === 2 ? <polygon points={`${ex},${ey - 20} 320,${ey - 6} 320,${ey + 6} ${ex},${ey + 20}`} fill="#000" opacity="0.6" /> : null}
        {i === 1 ? <polygon points={`${mx},${myy - 8} ${ex - 18},${ey - 2} ${ex - 18},${ey + 2} ${mx},${myy + 8}`} fill="#000" opacity="0.7" /> : null}
        {i === 1 ? <circle cx={ex - 19} cy={ey} r="6" fill="#000" opacity="0.6" /> : null}
        <circle cx={ex} cy={ey} r="20" fill="#2563eb" />
        <path d={`M${ex - 12} ${ey - 10} q 8 -4 14 2 q 2 8 -8 10 Z`} fill="#22c55e" />
        <ellipse cx={ex} cy={ey} rx="52" ry={i === 3 ? 14 : 4} fill="none" stroke="#475569" strokeDasharray="3 3" />
        <circle cx={mx} cy={myy} r="7" fill={i === 2 ? "#7f1d1d" : "#e2e8f0"} />
        <Tag x={30} y={ey + 58} color="#facc15">{L(t("Sun", "Արեգակ", "Солнце"), lang)}</Tag>
        <Tag x={ex} y={ey + 40} color="#93c5fd">{L(t("Earth", "Երկիր", "Земля"), lang)}</Tag>
        <Tag x={mx} y={myy - 12} color="#e2e8f0">{L(t("Moon", "Լուսին", "Луна"), lang)}</Tag>
      </g>
    );
  },
};

/* ---------------- echo sounder ---------------- */

const echo: Mech = {
  title: t("Measuring depth with an echo", "Խորության չափումը արձագանքով", "Измерение глубины эхолотом"),
  caps: [
    t("A ship's echo sounder sends a short pulse of sound down into the water.", "Նավի արձագանքաչափը ջրի մեջ ներքև կարճ ձայնային ազդանշան է ուղարկում։", "Эхолот корабля посылает вниз в воду короткий звуковой импульс."),
    t("Sound travels through water at about 1500 m/s, much faster than in air (340 m/s).", "Ջրում ձայնը տարածվում է մոտ 1500 մ/վ արագությամբ, շատ ավելի արագ, քան օդում (340 մ/վ)։", "В воде звук распространяется со скоростью около 1500 м/с, гораздо быстрее, чем в воздухе (340 м/с)."),
    t("The pulse reflects from the sea bed and comes back as an echo.", "Ազդանշանն անդրադառնում է հատակից և վերադառնում որպես արձագանք։", "Импульс отражается от дна и возвращается эхом."),
    t("The echo returns after t = 0.4 s. The sound went down and back, so the depth is h = v·t/2 = 1500·0.4/2 = 300 m.", "Արձագանքը վերադառնում է t = 0,4 վ հետո։ Ձայնը գնաց ներքև և վերադարձավ, ուստի խորությունը h = v·t/2 = 1500·0,4/2 = 300 մ է։", "Эхо вернулось через t = 0,4 с. Звук прошёл вниз и обратно, поэтому глубина h = v·t/2 = 1500·0,4/2 = 300 м."),
  ],
  draw: (i, p, lang) => {
    const down = i <= 1 ? p : 1;
    const up = i === 2 ? p : i === 3 ? 1 : 0;
    const yWave = i <= 1 ? 50 + down * 140 : 190 - up * 140;
    return (
      <g>
        <rect y="46" width="320" height="174" fill="#bae6fd" />
        <path d="M0 200 Q 60 186 120 196 T 240 194 T 320 200 L320 220 L0 220 Z" fill="#a16207" />
        <path d="M110 30 L210 30 L196 50 L124 50 Z" fill="#475569" />
        <rect x="150" y="16" width="24" height="14" fill="#e2e8f0" />
        {i <= 2 ? [0, 1, 2].map((k) => <path key={k} d={`M ${130 + k * 2} ${yWave + k * 6} q 30 ${i === 2 ? -10 : 10} 60 0`} fill="none" stroke={i === 2 ? "#e11d48" : "#4f46e5"} strokeWidth="2.5" opacity={1 - k * 0.3} />) : null}
        {i === 3 ? <>
          <line x1="230" x2="230" y1="50" y2="196" stroke="#1e1b4b" strokeDasharray="4 3" />
          <Tag x={236} y={128} anchor="start">h = 300 {L(t("m", "մ", "м"), lang)}</Tag>
        </> : null}
        <Tag x={60} y={80} color="#0369a1">v ≈ 1500 {L(t("m/s", "մ/վ", "м/с"), lang)}</Tag>
      </g>
    );
  },
};

/* ---------------- conductor in a field ---------------- */

const conductor: Mech = {
  title: t("A metal in an electric field", "Մետաղը էլեկտրական դաշտում", "Металл в электрическом поле"),
  caps: [
    t("A metal has free electrons that can move inside it. Without a field they move at random and the metal is neutral.", "Մետաղն ունի ազատ էլեկտրոններ, որոնք կարող են շարժվել նրա ներսում։ Առանց դաշտի նրանք շարժվում են քաոսային, և մետաղը չեզոք է։", "В металле есть свободные электроны, которые могут двигаться внутри. Без поля они движутся хаотично, металл нейтрален."),
    t("Switch on an outside field E. It pushes the electrons against the field lines.", "Միացրո՛ւ արտաքին E դաշտը։ Այն էլեկտրոնները հրում է ուժագծերին հակառակ։", "Включим внешнее поле E. Оно толкает электроны против силовых линий."),
    t("Electrons pile up on one side (−) and leave positive charge on the other (+).", "Էլեկտրոնները կուտակվում են մի կողմում (−), իսկ մյուս կողմում մնում է դրական լիցք (+)։", "Электроны скапливаются на одной стороне (−), а на другой остаётся положительный заряд (+)."),
    t("These charges make their own field that cancels the outside one: inside the metal E = 0. That is why a metal cage protects from electric fields.", "Այդ լիցքերը ստեղծում են իրենց դաշտը, որը չեզոքացնում է արտաքինը․ մետաղի ներսում E = 0։ Դրա համար է մետաղե վանդակը պաշտպանում էլեկտրական դաշտից։", "Эти заряды создают своё поле, которое гасит внешнее: внутри металла E = 0. Поэтому металлическая клетка защищает от электрического поля."),
  ],
  draw: (i, p) => {
    const ions = scatter(18, 100, 70, 120, 80, 2);
    const els = scatter(18, 100, 70, 120, 80, 4);
    return (
      <g>
        {i >= 1 ? [50, 90, 130, 170].map((y) => (
          <g key={y}>
            <Arrow x1={10} y1={y} x2={92} y2={y} color="#f59e0b" width={2} head={7} />
            {i < 3 ? <Arrow x1={98} y1={y} x2={222} y2={y} color="#fde68a" width={1.5} head={6} /> : null}
            <Arrow x1={228} y1={y} x2={310} y2={y} color="#f59e0b" width={2} head={7} />
          </g>
        )) : null}
        <rect x="96" y="60" width="128" height="120" rx="8" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
        {ions.map((q, k) => <circle key={k} cx={q.x} cy={q.y} r="3" fill="#fda4af" />)}
        {els.map((q, k) => {
          const shift = i === 0 ? 0 : i === 1 ? ease(p) : 1;
          const x = q.x + Math.sin(p * 6.28 + k) * 3 * (1 - shift);
          const tx = 104 + (k % 3) * 6;
          return <g key={k}>{electron(x + (tx - x) * shift, q.y, 3.5)}</g>;
        })}
        {i >= 2 ? Array.from({ length: 6 }, (_, k) => <text key={k} x="214" y={78 + k * 18} fontSize="12" fontWeight="900" fill="#e11d48">+</text>) : null}
        {i === 3 ? <Tag x={160} y={124}>E = 0</Tag> : null}
        <Tag x={300} y={30} anchor="end" color="#d97706">E</Tag>
      </g>
    );
  },
};

/* ---------------- oil drop (size of a molecule) ---------------- */

const oildrop: Mech = {
  title: t("How big is a molecule?", "Որքա՞ն է մոլեկուլի չափը", "Каков размер молекулы?"),
  caps: [
    t("Sprinkle fine powder on water and let one tiny drop of oil fall on it. We know the drop's volume V.", "Ջրի վրա նուրբ փոշի ցանի՛ր և վրան կաթեցրո՛ւ յուղի մեկ փոքրիկ կաթիլ։ Կաթիլի V ծավալը հայտնի է։", "Посыпь воду мелким порошком и капни на неё одну крошечную каплю масла. Объём капли V известен."),
    t("The oil spreads out and pushes the powder away until the film is only one molecule thick.", "Յուղը տարածվում է և հրում փոշին, մինչև թաղանթի հաստությունը դառնում է ընդամենը մեկ մոլեկուլ։", "Масло растекается и раздвигает порошок, пока плёнка не станет толщиной в одну молекулу."),
    t("Measure the area S of the round film.", "Չափի՛ր կլոր թաղանթի S մակերեսը։", "Измерь площадь S круглой плёнки."),
    t("The thickness of the film is the size of one molecule: d = V / S, about 10⁻⁹ m. A million molecules in a row make only one millimetre.", "Թաղանթի հաստությունը մեկ մոլեկուլի չափն է․ d = V / S, մոտ 10⁻⁹ մ։ Միլիոն մոլեկուլ շարքով կազմում են ընդամենը մեկ միլիմետր։", "Толщина плёнки — это размер одной молекулы: d = V / S, около 10⁻⁹ м. Миллион молекул в ряд — всего один миллиметр."),
  ],
  draw: (i, p, lang) => {
    const R = i === 0 ? 4 : i === 1 ? 4 + ease(p) * 66 : 70;
    return (
      <g>
        <ellipse cx="160" cy="130" rx="140" ry="60" fill="#bae6fd" />
        {scatter(160, 24, 74, 272, 112, 3).map((q, k) => {
          const dx = q.x - 160, dy = (q.y - 130) * 2.33;
          if ((dx / 140) ** 2 + (dy / 140) ** 2 > 1) return null;
          if (Math.hypot(dx, dy) < R + 4) return null;
          return <circle key={k} cx={q.x} cy={q.y} r="1.4" fill="#78716c" />;
        })}
        <ellipse cx="160" cy="130" rx={R} ry={R * 0.43} fill="#fde047" opacity="0.8" stroke="#ca8a04" />
        {i === 0 ? <circle cx="160" cy={40 + ease(p) * 80} r="5" fill="#fde047" stroke="#ca8a04" /> : null}
        {i >= 2 ? <>
          <line x1={160 - R} x2={160 + R} y1="130" y2="130" stroke="#1e1b4b" strokeDasharray="4 3" />
          <Tag x={160} y={124}>S = πR²</Tag>
        </> : null}
        {i === 3 ? <Tag x={160} y={212}>d = V / S ≈ 10⁻⁹ {L(t("m", "մ", "м"), lang)}</Tag> : null}
      </g>
    );
  },
};

/* ---------------- LC circuit ---------------- */

const lc: Mech = {
  title: t("Oscillations in an LC circuit", "Տատանումներ LC կոնտուրում", "Колебания в LC-контуре"),
  caps: [
    t("The capacitor is charged: all the energy is in its electric field. There is no current yet.", "Կոնդենսատորը լիցքավորված է․ ամբողջ էներգիան նրա էլեկտրական դաշտում է։ Հոսանք դեռ չկա։", "Конденсатор заряжен: вся энергия в его электрическом поле. Тока пока нет."),
    t("The capacitor discharges through the coil. The current grows slowly because of self-induction, and the coil's magnetic field grows.", "Կոնդենսատորը լիցքաթափվում է կոճի միջով։ Ինքնամակածման պատճառով հոսանքն աճում է դանդաղ, և կոճի մագնիսական դաշտն աճում է։", "Конденсатор разряжается через катушку. Из-за самоиндукции ток растёт постепенно, и растёт магнитное поле катушки."),
    t("The capacitor is empty and the current is largest: all the energy is now in the magnetic field.", "Կոնդենսատորը դատարկ է, իսկ հոսանքն ամենամեծն է․ ամբողջ էներգիան այժմ մագնիսական դաշտում է։", "Конденсатор разряжен, ток максимален: вся энергия теперь в магнитном поле."),
    t("The coil keeps the current going and charges the capacitor the other way round. Then everything runs back: T = 2π√(LC).", "Կոճը պահպանում է հոսանքը և կոնդենսատորը լիցքավորում հակառակ նշանով։ Հետո ամեն ինչ կրկնվում է հակառակ ուղղությամբ․ T = 2π√(LC)։", "Катушка поддерживает ток и перезаряжает конденсатор с обратным знаком. Затем всё повторяется в обратную сторону: T = 2π√(LC)."),
  ],
  draw: (i, p) => {
    const ph = (i + ease(p)) * (Math.PI / 2);
    const q = Math.cos(Math.min(ph, Math.PI)), I = Math.sin(Math.min(ph, Math.PI));
    const lim = i === 0 ? { q: 1, I: 0 } : i === 2 ? { q: 0, I: 1 } : { q, I };
    return (
      <g>
        <path d="M60 50 L60 190 L260 190 L260 50 Z" fill="none" stroke="#334155" strokeWidth="3" />
        <rect x="40" y="110" width="40" height="20" fill="#fbfcff" />
        <line x1="40" x2="80" y1="112" y2="112" stroke="#334155" strokeWidth="4" />
        <line x1="40" x2="80" y1="128" y2="128" stroke="#334155" strokeWidth="4" />
        {Array.from({ length: Math.round(Math.abs(lim.q) * 5) }, (_, k) => (
          <g key={k}>
            <text x={44 + k * 8} y="106" fontSize="10" fontWeight="900" fill={lim.q > 0 ? "#e11d48" : "#2563eb"}>{lim.q > 0 ? "+" : "−"}</text>
            <text x={44 + k * 8} y="142" fontSize="10" fontWeight="900" fill={lim.q > 0 ? "#2563eb" : "#e11d48"}>{lim.q > 0 ? "−" : "+"}</text>
          </g>
        ))}
        {Math.abs(lim.q) > 0.1 ? [0, 1, 2].map((k) => <line key={k} x1={48 + k * 12} x2={48 + k * 12} y1="114" y2="126" stroke="#f59e0b" strokeWidth={Math.abs(lim.q) * 2} />) : null}
        <rect x="240" y="80" width="40" height="80" fill="#fbfcff" />
        {[0, 1, 2, 3, 4].map((k) => <ellipse key={k} cx="260" cy={88 + k * 16} rx="18" ry="7" fill="none" stroke="#b45309" strokeWidth="3" />)}
        {Math.abs(lim.I) > 0.1 ? [0, 1].map((k) => <ellipse key={k} cx="260" cy="120" rx={30 + k * 12} ry={52 + k * 10} fill="none" stroke="#93c5fd" strokeWidth={Math.abs(lim.I) * 2} />) : null}
        {Math.abs(lim.I) > 0.1 ? <Arrow x1={130} y1={50} x2={130 + 60 * Math.sign(lim.I)} y2={50} color="#059669" label="I" /> : null}
        <rect x="100" y="206" width="56" height="8" rx="4" fill="#e2e8f0" />
        <rect x="100" y="206" width={56 * lim.q * lim.q} height="8" rx="4" fill="#f59e0b" />
        <rect x="170" y="206" width="56" height="8" rx="4" fill="#e2e8f0" />
        <rect x="170" y="206" width={56 * lim.I * lim.I} height="8" rx="4" fill="#3b82f6" />
        <Tag x={128} y={202} color="#d97706">W_E</Tag>
        <Tag x={198} y={202} color="#2563eb">W_B</Tag>
        <Tag x={60} y={40}>C</Tag>
        <Tag x={300} y={124}>L</Tag>
      </g>
    );
  },
};

/* ---------------- self-induction ---------------- */

const selfinduction: Mech = {
  title: t("Self-induction with two lamps", "Ինքնամակածումը երկու լամպով", "Самоиндукция на опыте с двумя лампами"),
  caps: [
    t("Two equal lamps: one in series with a resistor, the other with a coil that has an iron core.", "Երկու միանման լամպ․ մեկը հաջորդաբար միացված է ռեզիստորին, մյուսը՝ երկաթե միջուկով կոճին։", "Две одинаковые лампы: одна включена последовательно с резистором, другая — с катушкой с железным сердечником."),
    t("Close the switch. Lamp 1 lights at once, lamp 2 lights up slowly: the coil makes an EMF that slows down the growth of the current.", "Փակի՛ր բանալին։ 1-ին լամպն անմիջապես վառվում է, 2-րդը՝ աստիճանաբար․ կոճում առաջանում է ԷլՇՈւ, որը դանդաղեցնում է հոսանքի աճը։", "Замкни ключ. Лампа 1 загорается сразу, лампа 2 — постепенно: в катушке возникает ЭДС, которая замедляет рост тока."),
    t("Open the switch. The coil tries to keep the current going: a spark jumps in the switch. This is self-induction, ℰ = −L·ΔI/Δt.", "Բացի՛ր բանալին։ Կոճը փորձում է պահպանել հոսանքը․ բանալու մեջ կայծ է առաջանում։ Սա ինքնամակածումն է՝ ℰ = −L·ΔI/Δt։", "Разомкни ключ. Катушка стремится сохранить ток: в ключе проскакивает искра. Это самоиндукция, ℰ = −L·ΔI/Δt."),
  ],
  draw: (i, p, lang) => {
    const b1 = i === 1 ? 1 : 0;
    const b2 = i === 1 ? ease(p * 1.6) : 0;
    const lamp = (x: number, y: number, b: number, n: string) => (
      <g>
        {b > 0.05 ? <circle cx={x} cy={y} r={18 * b + 6} fill="#fde047" opacity={0.35 * b} /> : null}
        <circle cx={x} cy={y} r="11" fill={b > 0.05 ? "#fef08a" : "#f8fafc"} stroke="#334155" strokeWidth="2" />
        <path d={`M${x - 6} ${y - 6} L${x + 6} ${y + 6} M${x + 6} ${y - 6} L${x - 6} ${y + 6}`} stroke="#334155" strokeWidth="1.5" />
        <Tag x={x} y={y - 18}>{n}</Tag>
      </g>
    );
    return (
      <g>
        <path d="M40 60 L280 60 M40 150 L280 150 M40 60 L40 150 M280 60 L280 150" fill="none" stroke="#334155" strokeWidth="2.5" />
        <path d="M40 105 L280 105" fill="none" stroke="#334155" strokeWidth="2.5" />
        <rect x="120" y="52" width="36" height="16" fill="#fbfcff" stroke="#334155" strokeWidth="2" />
        <rect x="112" y="96" width="52" height="18" fill="#fbfcff" />
        {[0, 1, 2, 3].map((k) => <path key={k} d={`M ${114 + k * 12} 105 a 6 6 0 0 1 12 0`} fill="none" stroke="#b45309" strokeWidth="2.5" />)}
        <line x1="112" x2="164" y1="114" y2="114" stroke="#64748b" strokeWidth="3" />
        {lamp(220, 60, b1, "1")}
        {lamp(220, 105, b2, "2")}
        <rect x="18" y="140" width="44" height="20" fill="#fbfcff" />
        <line x1="22" x2="22" y1="140" y2="160" stroke="#334155" strokeWidth="3" />
        <line x1="30" x2="30" y1="144" y2="156" stroke="#334155" strokeWidth="3" />
        <rect x="150" y="142" width="40" height="16" fill="#fbfcff" />
        <line x1="150" y1="150" x2={i === 1 ? 190 : 186} y2={i === 1 ? 150 : 134} stroke="#334155" strokeWidth="3" />
        {i === 2 && p < 0.4 ? <path d="M182 146 l6 -8 l-2 6 l6 -2 l-6 8 l2 -6 Z" fill="#facc15" stroke="#ca8a04" /> : null}
        <Tag x={138} y={44}>R</Tag>
        <Tag x={138} y={128}>L</Tag>
        <Tag x={170} y={176}>{L(t("switch", "բանալի", "ключ"), lang)}</Tag>
      </g>
    );
  },
};

/* ---------------- power lines ---------------- */

const powerline: Mech = {
  title: t("From the power station to your home", "Էլեկտրակայանից մինչև քո տուն", "От электростанции до дома"),
  caps: [
    t("A generator at the power station makes alternating current at about 10 000 V.", "Էլեկտրակայանի գեներատորը ստեղծում է փոփոխական հոսանք՝ մոտ 10 000 Վ լարմամբ։", "Генератор электростанции вырабатывает переменный ток напряжением около 10 000 В."),
    t("A step-up transformer raises the voltage to hundreds of thousands of volts. The power stays the same, so the current becomes much smaller.", "Բարձրացնող տրանսֆորմատորը լարումը հասցնում է հարյուր հազարավոր վոլտի։ Հզորությունը նույնն է, ուստի հոսանքը շատ ավելի փոքր է դառնում։", "Повышающий трансформатор поднимает напряжение до сотен тысяч вольт. Мощность та же, поэтому ток становится намного меньше."),
    t("A small current loses little energy as heat in the long wires, because the losses are P = I²R.", "Փոքր հոսանքը երկար լարերում քիչ էներգիա է կորցնում ջերմության տեսքով, որովհետև կորուստները P = I²R են։", "Малый ток теряет мало энергии на нагрев длинных проводов, ведь потери P = I²R."),
    t("Step-down transformers near the town lower the voltage again, and the sockets at home get 220 V.", "Քաղաքի մոտ իջեցնող տրանսֆորմատորները նորից իջեցնում են լարումը, և տան վարդակներին հասնում է 220 Վ։", "Понижающие трансформаторы у города снова снижают напряжение, и в домашних розетках 220 В."),
  ],
  draw: (i, p, lang) => {
    const V = ["10 000 V", "500 000 V", "500 000 V", "220 V"][i];
    const flow = (x1: number, x2: number, y: number, n: number, c: string) => Array.from({ length: n }, (_, k) => <circle key={k} cx={x1 + (((p + k / n) % 1) * (x2 - x1))} cy={y} r="2.5" fill={c} />);
    return (
      <g>
        <rect x="10" y="110" width="50" height="60" fill="#94a3b8" />
        <rect x="18" y="80" width="10" height="30" fill="#64748b" />
        <rect x="36" y="90" width="10" height="20" fill="#64748b" />
        <circle cx="35" cy="140" r="12" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
        <text x="35" y="144" textAnchor="middle" fontSize="11" fontWeight="900">~</text>
        <rect x="70" y="124" width="22" height="34" rx="3" fill={i >= 1 ? "#4f46e5" : "#cbd5e1"} />
        {[110, 165, 220].map((x) => <path key={x} d={`M${x} 170 L${x + 6} 70 L${x + 12} 170 M${x - 4} 80 L${x + 16} 80`} fill="none" stroke="#475569" strokeWidth="2" />)}
        <path d="M92 130 Q 116 70 116 80 T 171 80 T 226 80 L 248 128" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        <rect x="246" y="124" width="22" height="34" rx="3" fill={i >= 3 ? "#4f46e5" : "#cbd5e1"} />
        <path d="M276 160 L276 130 L296 116 L316 130 L316 160 Z" fill="#fde68a" stroke="#b45309" />
        {i >= 1 ? flow(96, 244, 92, i === 1 ? 4 : 3, "#facc15") : flow(60, 70, 140, 2, "#facc15")}
        {i === 2 ? [130, 185].map((x) => <path key={x} d={`M${x} 100 q 4 -6 0 -12`} stroke="#f97316" fill="none" strokeWidth="1.5" opacity="0.4" />) : null}
        <Tag x={160} y={30} color="#4f46e5">U = {V.replace(" V", ` ${L(t("V", "Վ", "В"), lang)}`)}</Tag>
        <Tag x={81} y={176}>{L(t("step up", "բարձրացնող", "повыш."), lang)}</Tag>
        <Tag x={257} y={176}>{L(t("step down", "իջեցնող", "пониж."), lang)}</Tag>
      </g>
    );
  },
};

/* ---------------- hydro, wind, solar ---------------- */

const hydro: Mech = {
  title: t("How a hydroelectric station works", "Ինչպես է աշխատում հիդրոէլեկտրակայանը", "Как работает ГЭС"),
  caps: [
    t("A dam holds water high up: the water has potential energy.", "Ամբարտակը ջուրը պահում է բարձրում․ ջուրն ունի պոտենցիալ էներգիա։", "Плотина удерживает воду на высоте: у воды есть потенциальная энергия."),
    t("Water rushes down a pipe; its potential energy turns into kinetic energy.", "Ջուրը խողովակով սլանում է ներքև․ պոտենցիալ էներգիան դառնում է կինետիկ։", "Вода устремляется вниз по трубе; потенциальная энергия переходит в кинетическую."),
    t("The fast water spins the blades of a turbine.", "Արագ ջուրը պտտում է տուրբինի թիակները։", "Быстрая вода вращает лопатки турбины."),
    t("The turbine turns a generator, which makes electricity. In Armenia the Sevan–Hrazdan cascade of stations works this way.", "Տուրբինը պտտում է գեներատորը, որն արտադրում է էլեկտրաէներգիա։ Հայաստանում այսպես է աշխատում Սևան–Հրազդան կասկադը։", "Турбина вращает генератор, который вырабатывает электричество. Так работает Севано-Разданский каскад ГЭС в Армении."),
  ],
  draw: (i, p, lang) => {
    const spin = i >= 2 ? p * 360 * 2 : 0;
    return (
      <g>
        <path d="M0 40 L110 40 L110 200 L0 200 Z" fill="#7dd3fc" />
        <path d="M110 20 L140 20 L170 200 L110 200 Z" fill="#a8a29e" />
        <path d="M110 150 L150 150 L190 180" fill="none" stroke="#475569" strokeWidth="12" />
        {i >= 1 ? Array.from({ length: 5 }, (_, k) => { const q = (p + k / 5) % 1; return <circle key={k} cx={110 + q * 80} cy={150 + Math.max(0, q - 0.5) * 60} r="3" fill="#0284c7" />; }) : null}
        <g transform={`translate(205 182) rotate(${spin})`}>
          {[0, 60, 120, 180, 240, 300].map((a) => <rect key={a} x="-3" y="-20" width="6" height="18" rx="2" fill="#0369a1" transform={`rotate(${a})`} />)}
          <circle r="5" fill="#334155" />
        </g>
        <line x1="205" y1="182" x2="205" y2="110" stroke="#334155" strokeWidth="4" />
        <rect x="185" y="80" width="40" height="34" rx="4" fill={i >= 3 ? "#facc15" : "#cbd5e1"} stroke="#334155" />
        <text x="205" y="102" textAnchor="middle" fontSize="12" fontWeight="900">G</text>
        {i >= 3 ? <path d="M225 90 L300 60" stroke="#facc15" strokeWidth="2" strokeDasharray="5 3" /> : null}
        <Tag x={50} y={30} color="#0369a1">{L(t("reservoir", "ջրամբար", "водохранилище"), lang)}</Tag>
        <Tag x={205} y={214}>{L(t("turbine", "տուրբին", "турбина"), lang)}</Tag>
        <Tag x={205} y={72}>{L(t("generator", "գեներատոր", "генератор"), lang)}</Tag>
      </g>
    );
  },
};

const wind: Mech = {
  title: t("How a wind turbine works", "Ինչպես է աշխատում հողմային էլեկտրակայանը", "Как работает ветряк"),
  caps: [
    t("Wind is moving air with kinetic energy. It pushes on the blades and makes them turn.", "Քամին շարժվող օդ է, որն ունի կինետիկ էներգիա։ Այն ճնշում է թիակներին և պտտում դրանք։", "Ветер — движущийся воздух с кинетической энергией. Он давит на лопасти и вращает их."),
    t("The blades turn slowly, so a gearbox makes the shaft spin much faster.", "Թիակները պտտվում են դանդաղ, ուստի ատամնանիվային փոխանցումը լիսեռը շատ ավելի արագ է պտտում։", "Лопасти вращаются медленно, поэтому редуктор раскручивает вал гораздо быстрее."),
    t("The fast shaft turns a generator: electricity goes down the tower to the grid. A good place needs strong, steady wind, like the Pushkin Pass in Lori.", "Արագ լիսեռը պտտում է գեներատորը․ էլեկտրաէներգիան աշտարակով իջնում է ցանց։ Լավ վայրին պետք է ուժեղ և կայուն քամի, ինչպես Լոռու Պուշկինի լեռնանցքում։", "Быстрый вал вращает генератор: ток идёт по башне вниз в сеть. Нужен сильный и постоянный ветер, как на Пушкинском перевале в Лори."),
  ],
  draw: (i, p, lang) => {
    const a = p * 360 * (i >= 1 ? 1.5 : 1);
    return (
      <g>
        {[50, 90, 130].map((y, k) => <path key={y} d={`M${(p * 60 + k * 20) % 60} ${y} q 15 -6 30 0 t 30 0`} fill="none" stroke="#94a3b8" strokeWidth="2" />)}
        <path d="M176 200 L184 80 L192 200 Z" fill="#e2e8f0" stroke="#94a3b8" />
        <rect x="176" y="68" width="50" height="20" rx="6" fill="#f8fafc" stroke="#64748b" />
        {i >= 1 ? <>
          <circle cx="198" cy="78" r="6" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="2 2" transform={`rotate(${a * 4} 198 78)`} />
          <rect x="208" y="72" width="14" height="12" fill={i >= 2 ? "#facc15" : "#cbd5e1"} />
        </> : null}
        <g transform={`translate(176 78) rotate(${a})`}>
          {[0, 120, 240].map((r) => <path key={r} d="M0 0 L-6 -8 L0 -66 L5 -8 Z" fill="#f8fafc" stroke="#64748b" transform={`rotate(${r})`} />)}
          <circle r="5" fill="#64748b" />
        </g>
        {i >= 2 ? <path d="M184 200 L300 200" stroke="#facc15" strokeWidth="2" strokeDasharray="5 3" /> : null}
        <Tag x={50} y={30} color="#64748b">{L(t("wind", "քամի", "ветер"), lang)}</Tag>
        {i >= 1 ? <Tag x={250} y={106}>{L(t("generator", "գեներատոր", "генератор"), lang)}</Tag> : null}
      </g>
    );
  },
};

const solar: Mech = {
  title: t("How a solar panel makes electricity", "Ինչպես է արևային մարտկոցն արտադրում էլեկտրաէներգիա", "Как солнечная панель даёт ток"),
  caps: [
    t("Sunlight is a stream of photons. They fall on a thin plate of silicon made of two layers, n and p.", "Արևի լույսը ֆոտոնների հոսք է։ Նրանք ընկնում են սիլիցիումի բարակ թիթեղի վրա, որը բաղկացած է երկու շերտից՝ n և p։", "Солнечный свет — поток фотонов. Они падают на тонкую пластину кремния из двух слоёв, n и p."),
    t("A photon gives its energy to an electron and sets it free; a hole is left behind.", "Ֆոտոնն իր էներգիան տալիս է էլեկտրոնին և ազատում այն․ հետևում մնում է խոռոչ։", "Фотон отдаёт энергию электрону и освобождает его; остаётся дырка."),
    t("The field at the p–n junction pushes electrons to one side and holes to the other: the panel becomes a source of current.", "p–n անցման դաշտը էլեկտրոնները հրում է մի կողմ, իսկ խոռոչները՝ մյուս․ մարտկոցը դառնում է հոսանքի աղբյուր։", "Поле p–n-перехода гонит электроны в одну сторону, дырки — в другую: панель становится источником тока."),
    t("Connect a lamp and current flows. Armenia gets about 2500 hours of sunshine a year, so solar power suits it well.", "Միացրո՛ւ լամպը, և հոսանք կանցնի։ Հայաստանում տարեկան մոտ 2500 արևային ժամ է լինում, ուստի արևային էներգետիկան նրան շատ է համապատասխանում։", "Подключи лампу — пойдёт ток. В Армении около 2500 солнечных часов в году, поэтому солнечная энергетика ей хорошо подходит."),
  ],
  draw: (i, p, lang) => (
    <g>
      <circle cx="40" cy="36" r="22" fill="#facc15" />
      {[0, 1, 2].map((k) => {
        const q = (p + k / 3) % 1;
        return <path key={k} d={`M ${60 + k * 30 + q * 60} ${50 + q * 50} l 6 8`} stroke="#f59e0b" strokeWidth="3" />;
      })}
      <rect x="80" y="110" width="180" height="30" fill="#93c5fd" />
      <rect x="80" y="140" width="180" height="30" fill="#fca5a5" />
      <Tag x={70} y={130} anchor="end">n</Tag>
      <Tag x={70} y={160} anchor="end">p</Tag>
      {i >= 1 ? [120, 170, 220].map((x, k) => {
        const s = i >= 2 ? ease(p) : 0;
        return (
          <g key={x}>
            {electron(x + k * 4, 138 - s * 22, 4)}
            <circle cx={x - 6 + k * 4} cy={142 + s * 20} r="4" fill="none" stroke="#e11d48" strokeWidth="2" />
          </g>
        );
      }) : null}
      {i === 3 ? <>
        <path d="M260 120 L300 120 L300 200 L60 200 L60 160 L80 160" fill="none" stroke="#334155" strokeWidth="2" />
        <circle cx="300" cy="160" r="10" fill="#fef08a" stroke="#334155" strokeWidth="2" />
        <circle cx="300" cy="160" r="18" fill="#fde047" opacity="0.4" />
      </> : null}
      <Tag x={170} y={196}>{L(t("silicon", "սիլիցիում", "кремний"), lang)}</Tag>
    </g>
  ),
};

export const PHYS_A: Record<string, Mech> = { engine4, motor, electrisation, electroscope, thermometer, evaporation, boiling, eclipse, echo, conductor, oildrop, lc, selfinduction, powerline, hydro, wind, solar };
