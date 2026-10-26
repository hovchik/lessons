"use client";

import { Arrow } from "../kit";
import { L, t } from "../labels";
import { ease, electron, neutron, Nucleus, Photon, proton, scatter, Tag } from "./draw";
import type { Mech } from "./types";

/* ---------------- nuclear fission ---------------- */

const fission: Mech = {
  title: t("Fission of a uranium nucleus", "Ուրանի միջուկի տրոհումը", "Деление ядра урана"),
  caps: [
    t("A slow neutron flies towards a uranium-235 nucleus. It has no charge, so the nucleus does not push it away.", "Դանդաղ նեյտրոնը թռչում է դեպի ուրան-235-ի միջուկը։ Այն լիցք չունի, ուստի միջուկը չի վանում այն։", "Медленный нейтрон летит к ядру урана-235. У него нет заряда, поэтому ядро его не отталкивает."),
    t("The nucleus absorbs the neutron, becomes uranium-236 and starts to wobble and stretch like a drop of liquid.", "Միջուկը կլանում է նեյտրոնը, դառնում ուրան-236 և սկսում է տատանվել ու ձգվել հեղուկի կաթիլի պես։", "Ядро поглощает нейтрон, становится ураном-236 и начинает колебаться и вытягиваться, как капля жидкости."),
    t("The electric repulsion of the protons tears it into two smaller nuclei, for example barium and krypton, and 2–3 new neutrons fly out.", "Պրոտոնների էլեկտրական վանումը այն պատռում է երկու ավելի փոքր միջուկների, օրինակ՝ բարիումի և կրիպտոնի, և դուրս են թռչում 2–3 նոր նեյտրոններ։", "Электрическое отталкивание протонов разрывает его на два ядра поменьше, например барий и криптон, и вылетают 2–3 новых нейтрона."),
    t("The pieces fly apart very fast: about 200 MeV of energy is released, which becomes heat. The new neutrons can split more nuclei: a chain reaction.", "Բեկորները շատ արագ հեռանում են իրարից․ անջատվում է մոտ 200 ՄէՎ էներգիա, որը դառնում է ջերմություն։ Նոր նեյտրոնները կարող են տրոհել այլ միջուկներ․ շղթայական ռեակցիա։", "Осколки разлетаются с огромной скоростью: выделяется около 200 МэВ энергии, которая переходит в тепло. Новые нейтроны могут разделить другие ядра: цепная реакция."),
  ],
  draw: (i, p, lang) => {
    const cx = 160, cy = 110;
    if (i === 0) return (
      <g>
        <Nucleus x={cx} y={cy} n={40} r={4} />
        {neutron(30 + ease(p) * 90, cy, 5)}
        <Arrow x1={30 + ease(p) * 90 + 8} y1={cy} x2={30 + ease(p) * 90 + 28} y2={cy} color="#64748b" />
        <Tag x={cx} y={cy + 46}>²³⁵U</Tag>
        <Tag x={40} y={cy - 16}>n</Tag>
      </g>
    );
    if (i === 1) return (
      <g>
        <Nucleus x={cx} y={cy} n={41} r={4} wobble={0.25 * Math.sin(p * Math.PI * 4)} />
        <Tag x={cx} y={cy + 50}>²³⁶U</Tag>
      </g>
    );
    const d = i === 2 ? ease(p) * 40 : 40 + p * 50;
    return (
      <g>
        <Nucleus x={cx - 10 - d} y={cy - d * 0.2} n={22} r={4} />
        <Nucleus x={cx + 10 + d} y={cy + d * 0.2} n={18} r={4} />
        {[[-0.4, -1], [0.3, -1], [0.1, 1]].map(([a, b], k) => <g key={k}>{neutron(cx + a * d * 2, cy + b * d * 1.6, 5)}</g>)}
        <Tag x={cx - 10 - d} y={cy - d * 0.2 - 30}>¹⁴¹Ba</Tag>
        <Tag x={cx + 10 + d} y={cy + d * 0.2 + 36}>⁹²Kr</Tag>
        {i === 3 ? <Tag x={cx} y={20} color="#e11d48">+ 200 {L(t("MeV", "ՄէՎ", "МэВ"), lang)}</Tag> : null}
      </g>
    );
  },
};

/* ---------------- fusion ---------------- */

const fusion: Mech = {
  title: t("Fusion of light nuclei", "Թեթև միջուկների սինթեզը", "Синтез лёгких ядер"),
  caps: [
    t("Deuterium (one proton and one neutron) and tritium (one proton and two neutrons) are both positive, so they push each other away.", "Դեյտերիումը (մեկ պրոտոն և մեկ նեյտրոն) և տրիտիումը (մեկ պրոտոն և երկու նեյտրոն) երկուսն էլ դրական են, ուստի վանում են իրար։", "Дейтерий (протон и нейтрон) и тритий (протон и два нейтрона) оба положительны, поэтому отталкиваются."),
    t("At about a hundred million degrees they move so fast that they come close enough for the strong nuclear force to act.", "Մոտ հարյուր միլիոն աստիճանում նրանք այնքան արագ են շարժվում, որ մոտենում են այնքան, որ սկսում է գործել միջուկային ուժը։", "При температуре около ста миллионов градусов они движутся так быстро, что сближаются настолько, что начинает действовать ядерная сила."),
    t("They fuse into helium-4, a neutron flies out, and 17.6 MeV of energy is released.", "Նրանք միաձուլվում են հելիում-4-ի, դուրս է թռչում նեյտրոն, և անջատվում է 17,6 ՄէՎ էներգիա։", "Они сливаются в гелий-4, вылетает нейтрон и выделяется 17,6 МэВ энергии."),
    t("This is how the Sun and the stars shine. On Earth scientists are building the ITER reactor to get energy from fusion.", "Այսպես են փայլում Արեգակը և աստղերը։ Երկրի վրա գիտնականները կառուցում են ITER ռեակտորը՝ սինթեզից էներգիա ստանալու համար։", "Так светят Солнце и звёзды. На Земле учёные строят реактор ITER, чтобы получать энергию синтеза."),
  ],
  draw: (i, p, lang) => {
    const cy = 110;
    if (i <= 1) {
      const gap = i === 0 ? 60 + Math.sin(p * Math.PI * 2) * 10 : 60 - ease(p) * 44;
      return (
        <g>
          <g>{proton(160 - gap - 6, cy)}{neutron(160 - gap - 16, cy + 4)}</g>
          <g>{proton(160 + gap + 6, cy)}{neutron(160 + gap + 16, cy - 4)}{neutron(160 + gap + 14, cy + 9)}</g>
          {i === 0 ? <>
            <Arrow x1={160 - gap - 26} y1={cy - 24} x2={160 - gap - 56} y2={cy - 24} color="#e11d48" />
            <Arrow x1={160 + gap + 26} y1={cy - 24} x2={160 + gap + 56} y2={cy - 24} color="#e11d48" />
          </> : <Tag x={160} y={40} color="#f97316">T ≈ 10⁸ K</Tag>}
          <Tag x={160 - gap - 10} y={cy + 30}>²H</Tag>
          <Tag x={160 + gap + 10} y={cy + 30}>³H</Tag>
        </g>
      );
    }
    const d = i === 2 ? ease(p) * 80 : 80;
    return (
      <g>
        {i === 3 ? <circle cx="160" cy={cy} r={60 + p * 10} fill="#facc15" opacity="0.18" /> : null}
        <g>{proton(154 - d * 0.3, cy - 5)}{proton(166 - d * 0.3, cy + 5)}{neutron(154 - d * 0.3, cy + 6)}{neutron(166 - d * 0.3, cy - 6)}</g>
        {neutron(170 + d, cy, 6)}
        <Arrow x1={180 + d} y1={cy} x2={200 + d} y2={cy} color="#64748b" />
        <Tag x={160 - d * 0.3} y={cy + 30}>⁴He</Tag>
        <Tag x={170 + d} y={cy + 22}>n</Tag>
        <Tag x={160} y={30} color="#e11d48">+ 17,6 {L(t("MeV", "ՄէՎ", "МэВ"), lang)}</Tag>
      </g>
    );
  },
};

/* ---------------- nuclear power plant ---------------- */

const reactor: Mech = {
  title: t("How a nuclear power plant works", "Ինչպես է աշխատում ատոմային էլեկտրակայանը", "Как работает АЭС"),
  h: 230,
  caps: [
    t("In the reactor core, uranium fuel rods split by fission and get very hot. Control rods absorb neutrons to keep the reaction steady.", "Ռեակտորի ակտիվ գոտում ուրանային վառելիքային ձողերը տրոհվում են և շատ տաքանում։ Կառավարող ձողերը կլանում են նեյտրոնները և ռեակցիան պահում կայուն։", "В активной зоне реактора урановые твэлы делятся и сильно нагреваются. Регулирующие стержни поглощают нейтроны и держат реакцию на постоянном уровне."),
    t("Water under high pressure carries the heat from the core in the first loop. It does not boil.", "Բարձր ճնշման տակ գտնվող ջուրը առաջին կոնտուրում ջերմությունը տանում է ակտիվ գոտուց։ Այն չի եռում։", "Вода под высоким давлением уносит тепло из активной зоны по первому контуру. Она не кипит."),
    t("In the steam generator this heat boils the water of the second loop. The steam spins a turbine.", "Գոլորշարտադրիչում այդ ջերմությունը եռացնում է երկրորդ կոնտուրի ջուրը։ Գոլորշին պտտում է տուրբինը։", "В парогенераторе это тепло кипятит воду второго контура. Пар вращает турбину."),
    t("The turbine turns the generator. The steam is cooled back into water by cooling towers. The Armenian NPP at Metsamor works this way and gives about a third of the country's electricity.", "Տուրբինը պտտում է գեներատորը։ Գոլորշին հովացման աշտարակներով նորից ջուր է դառնում։ Այսպես է աշխատում Մեծամորի Հայկական ԱԷԿ-ը, որը տալիս է երկրի էլեկտրաէներգիայի մոտ մեկ երրորդը։", "Турбина вращает генератор. Пар охлаждается в градирнях и снова становится водой. Так работает Армянская АЭС в Мецаморе, дающая около трети электроэнергии страны."),
  ],
  draw: (i, p, lang) => {
    const flow = (pts: Array<[number, number]>, c: string, n = 6) => {
      const segs = pts.slice(1).map((q, k) => Math.hypot(q[0] - pts[k][0], q[1] - pts[k][1]));
      const total = segs.reduce((a, b) => a + b, 0);
      return Array.from({ length: n }, (_, k) => {
        let d = ((p + k / n) % 1) * total;
        let s = 0;
        while (s < segs.length - 1 && d > segs[s]) d -= segs[s++];
        const a = pts[s], b = pts[s + 1];
        const f = d / segs[s];
        return <circle key={k} cx={a[0] + (b[0] - a[0]) * f} cy={a[1] + (b[1] - a[1]) * f} r="3" fill={c} />;
      });
    };
    const loop1: Array<[number, number]> = [[60, 70], [60, 40], [130, 40], [130, 150], [60, 150], [60, 120]];
    const loop2: Array<[number, number]> = [[150, 80], [190, 80], [190, 50], [230, 50], [230, 160], [150, 160]];
    return (
      <g>
        <rect x="20" y="66" width="80" height="60" rx="8" fill="#fde68a" stroke="#b45309" strokeWidth="2" />
        {[34, 50, 66, 82].map((x) => <rect key={x} x={x} y="74" width="6" height="44" fill="#f97316" />)}
        {[42, 58, 74].map((x) => <rect key={x} x={x} y={60} width="4" height={i === 0 ? 30 + Math.sin(p * 6.28) * 6 : 30} fill="#334155" />)}
        <path d="M60 70 L60 40 L130 40 L130 150 L60 150 L60 120" fill="none" stroke={i >= 1 ? "#ef4444" : "#cbd5e1"} strokeWidth="5" />
        <rect x="118" y="70" width="44" height="100" rx="10" fill="#e0f2fe" stroke="#0369a1" strokeWidth="2" />
        <path d="M150 80 L190 80 L190 50 L230 50 L230 160 L150 160" fill="none" stroke={i >= 2 ? "#38bdf8" : "#cbd5e1"} strokeWidth="5" />
        {i >= 1 ? flow(loop1, "#fee2e2") : null}
        {i >= 2 ? flow(loop2, "#fff") : null}
        <g transform={`translate(230 50) rotate(${i >= 2 ? p * 720 : 0})`}>
          {[0, 90, 180, 270].map((a) => <rect key={a} x="-2" y="-14" width="4" height="12" fill="#0369a1" transform={`rotate(${a})`} />)}
        </g>
        <line x1="244" x2="268" y1="50" y2="50" stroke="#334155" strokeWidth="3" />
        <rect x="268" y="36" width="34" height="28" rx="4" fill={i >= 3 ? "#facc15" : "#cbd5e1"} stroke="#334155" />
        <text x="285" y="54" textAnchor="middle" fontSize="11" fontWeight="900">G</text>
        <path d="M250 216 Q 258 170 246 130 L 300 130 Q 288 170 296 216 Z" fill="#e2e8f0" stroke="#94a3b8" />
        {i >= 3 ? [0, 1].map((k) => <circle key={k} cx={262 + k * 22} cy={120 - ((p * 30 + k * 12) % 30)} r={10} fill="#f1f5f9" opacity="0.9" />) : null}
        <Tag x={60} y={146}>{L(t("reactor", "ռեակտոր", "реактор"), lang)}</Tag>
        <Tag x={140} y={186}>{L(t("steam generator", "գոլորշարտադրիչ", "парогенератор"), lang)}</Tag>
        <Tag x={230} y={26}>{L(t("turbine", "տուրբին", "турбина"), lang)}</Tag>
        <Tag x={273} y={226}>{L(t("cooling tower", "հովացման աշտարակ", "градирня"), lang)}</Tag>
      </g>
    );
  },
};

/* ---------------- p-n junction ---------------- */

const pn: Mech = {
  title: t("How a diode lets current go one way", "Ինչպես է դիոդը հոսանքը թողնում մեկ ուղղությամբ", "Как диод пропускает ток в одну сторону"),
  caps: [
    t("A diode has two layers of a semiconductor: n-type with extra free electrons, and p-type with missing electrons, called holes (○).", "Դիոդն ունի կիսահաղորդչի երկու շերտ․ n-տիպ՝ ավելորդ ազատ էլեկտրոններով, և p-տիպ՝ պակասող էլեկտրոններով, որոնք կոչվում են խոռոչներ (○)։", "Диод состоит из двух слоёв полупроводника: n-типа с лишними свободными электронами и p-типа с недостающими электронами — дырками (○)."),
    t("At the border some electrons fill holes. A thin layer with no free charges appears: a barrier.", "Սահմանի մոտ որոշ էլեկտրոններ լցնում են խոռոչները։ Առաջանում է բարակ շերտ առանց ազատ լիցքերի․ արգելապատնեշ։", "На границе часть электронов заполняет дырки. Появляется тонкий слой без свободных зарядов — запирающий слой."),
    t("Forward: plus to p, minus to n. The barrier becomes thin, electrons and holes cross it, and current flows.", "Ուղիղ միացում․ պլյուսը՝ p-ին, մինուսը՝ n-ին։ Արգելապատնեշը բարականում է, էլեկտրոններն ու խոռոչներն անցնում են այն, և հոսանք է անցնում։", "Прямое включение: плюс к p, минус к n. Запирающий слой сужается, электроны и дырки проходят через него, течёт ток."),
    t("Reverse: plus to n. Charges are pulled away from the border, the barrier grows and almost no current flows. The diode is a one-way valve.", "Հակադարձ միացում․ պլյուսը՝ n-ին։ Լիցքերը քաշվում են սահմանից, արգելապատնեշը լայնանում է, և հոսանք համարյա չի անցնում։ Դիոդը միակողմանի փական է։", "Обратное включение: плюс к n. Заряды оттягиваются от границы, запирающий слой расширяется, тока почти нет. Диод — клапан в одну сторону."),
  ],
  draw: (i, p, lang) => {
    const bw = i === 0 ? 0 : i === 1 ? 20 : i === 2 ? 6 : 50;
    const elec = scatter(14, 172, 70, 110, 70, 2);
    const holes = scatter(14, 38, 70, 110, 70, 7);
    return (
      <g>
        <rect x="30" y="60" width="130" height="90" fill="#fecaca" />
        <rect x="160" y="60" width="130" height="90" fill="#bfdbfe" />
        <rect x={160 - bw / 2} y="60" width={bw} height="90" fill="#e2e8f0" />
        {holes.map((h, k) => {
          // forward bias: holes drift right and fade out once they cross into n
          const x = i === 2 ? h.x + ((p + k / 14) % 1) * 90 : i === 3 ? 38 + (h.x - 38) * 0.6 : h.x;
          if (i < 2 && x > 160 - bw / 2 - 6) return null;
          const o = x > 160 ? Math.max(0, 1 - (x - 160) / 40) : 1;
          return <circle key={k} cx={x} cy={h.y} r="4" fill="none" stroke="#e11d48" strokeWidth="2" opacity={o} />;
        })}
        {elec.map((e, k) => {
          const x = i === 2 ? e.x - ((p + k / 14) % 1) * 90 : i === 3 ? 290 - (290 - e.x) * 0.6 : e.x;
          if (i < 2 && x < 160 + bw / 2 + 6) return null;
          const o = x < 160 ? Math.max(0, 1 - (160 - x) / 40) : 1;
          return <g key={k} opacity={o}>{electron(x, e.y, 4)}</g>;
        })}
        <Tag x={95} y={174}>p</Tag>
        <Tag x={225} y={174}>n</Tag>
        {i >= 2 ? <>
          <path d="M30 105 L10 105 L10 200 L310 200 L310 105 L290 105" fill="none" stroke="#334155" strokeWidth="2" />
          <rect x="140" y="190" width="40" height="20" fill="#fbfcff" />
          <line x1="150" x2="150" y1="188" y2="212" stroke="#334155" strokeWidth="3" />
          <line x1="170" x2="170" y1="194" y2="206" stroke="#334155" strokeWidth="3" />
          <text x={i === 2 ? 138 : 176} y="186" fontSize="12" fontWeight="900" fill="#e11d48">+</text>
          <Tag x={160} y={36} color={i === 2 ? "#059669" : "#e11d48"}>{i === 2 ? L(t("current flows", "հոսանք կա", "ток идёт"), lang) : L(t("no current", "հոսանք չկա", "тока нет"), lang)}</Tag>
        </> : null}
      </g>
    );
  },
};

/* ---------------- transistor as a switch ---------------- */

const transistor: Mech = {
  title: t("A transistor as a switch and an amplifier", "Տրանզիստորը որպես անջատիչ և ուժեղարար", "Транзистор как ключ и усилитель"),
  caps: [
    t("A transistor has three parts: emitter, base and collector. A lamp is in the collector circuit.", "Տրանզիստորն ունի երեք մաս՝ էմիտեր, բազա և կոլեկտոր։ Կոլեկտորի շղթայում լամպ կա։", "У транзистора три части: эмиттер, база и коллектор. В цепи коллектора стоит лампа."),
    t("With no current into the base, the transistor is closed: no current in the lamp. This is the digit 0.", "Եթե բազայում հոսանք չկա, տրանզիստորը փակ է․ լամպով հոսանք չի անցնում։ Սա 0 թվանշանն է։", "Если тока в базе нет, транзистор закрыт: ток через лампу не идёт. Это цифра 0."),
    t("A small current into the base opens it: a large current flows through the lamp. This is the digit 1, and also how a weak signal is amplified.", "Բազայի փոքր հոսանքը բացում է այն․ լամպով մեծ հոսանք է անցնում։ Սա 1 թվանշանն է, և այսպես է ուժեղացվում թույլ ազդանշանը։", "Небольшой ток в базе открывает его: через лампу идёт большой ток. Это цифра 1 — и так же усиливается слабый сигнал."),
    t("A modern chip holds billions of tiny transistors switching on and off billions of times a second.", "Ժամանակակից միկրոսխեման պարունակում է միլիարդավոր փոքրիկ տրանզիստորներ, որոնք վայրկյանում միլիարդավոր անգամ միանում և անջատվում են։", "Современный чип содержит миллиарды крошечных транзисторов, которые включаются и выключаются миллиарды раз в секунду."),
  ],
  draw: (i, p, lang) => {
    if (i === 3) return (
      <g>
        <rect x="90" y="40" width="140" height="140" rx="10" fill="#1e293b" />
        {Array.from({ length: 12 }, (_, k) => <g key={k}><rect x={98 + k * 11} y="28" width="4" height="12" fill="#cbd5e1" /><rect x={98 + k * 11} y="180" width="4" height="12" fill="#cbd5e1" /></g>)}
        {Array.from({ length: 100 }, (_, k) => <rect key={k} x={102 + (k % 10) * 12} y={52 + Math.floor(k / 10) * 12} width="8" height="8" fill={(k * 7 + Math.floor(p * 10)) % 3 === 0 ? "#22c55e" : "#334155"} />)}
      </g>
    );
    const on = i === 2;
    return (
      <g>
        <circle cx="150" cy="120" r="34" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
        <line x1="138" x2="138" y1="98" y2="142" stroke="#334155" strokeWidth="4" />
        <line x1="138" y1="110" x2="166" y2="92" stroke="#334155" strokeWidth="2.5" />
        <line x1="138" y1="130" x2="166" y2="148" stroke="#334155" strokeWidth="2.5" />
        <path d="M60 120 L138 120" stroke="#334155" strokeWidth="2" />
        <path d="M166 92 L166 50 L260 50 L260 80" stroke="#334155" strokeWidth="2" fill="none" />
        <path d="M166 148 L166 190 L260 190 L260 160" stroke="#334155" strokeWidth="2" fill="none" />
        <rect x="248" y="104" width="24" height="32" fill="#fbfcff" />
        <line x1="248" x2="272" y1="110" y2="110" stroke="#334155" strokeWidth="3" />
        <line x1="254" x2="266" y1="126" y2="126" stroke="#334155" strokeWidth="3" />
        <line x1="260" x2="260" y1="80" y2="110" stroke="#334155" strokeWidth="2" />
        <line x1="260" x2="260" y1="126" y2="160" stroke="#334155" strokeWidth="2" />
        <circle cx="213" cy="50" r="11" fill={on ? "#fef08a" : "#f8fafc"} stroke="#334155" strokeWidth="2" />
        {on ? <circle cx="213" cy="50" r="22" fill="#fde047" opacity="0.4" /> : null}
        {on ? Array.from({ length: 6 }, (_, k) => { const q = (p + k / 6) % 1; return <circle key={k} cx={166 + q * 94} cy={50} r="2.5" fill="#059669" />; }) : null}
        {i >= 1 ? <circle cx={60 + (on ? (p * 78) % 78 : 0)} cy="120" r="2.5" fill={on ? "#2563eb" : "#cbd5e1"} /> : null}
        <Tag x={58} y={110}>{L(t("base", "բազա", "база"), lang)}</Tag>
        <Tag x={176} y={86} anchor="start">{L(t("collector", "կոլեկտոր", "коллектор"), lang)}</Tag>
        <Tag x={176} y={162} anchor="start">{L(t("emitter", "էմիտեր", "эмиттер"), lang)}</Tag>
        {i >= 1 ? <Tag x={60} y={40} color={on ? "#059669" : "#64748b"}>{on ? "1" : "0"}</Tag> : null}
      </g>
    );
  },
};

/* ---------------- life of stars ---------------- */

const stars: Mech = {
  title: t("The life of a star", "Աստղի կյանքը", "Жизнь звезды"),
  dark: true,
  caps: [
    t("A star is born in a cold cloud of gas and dust, a nebula.", "Աստղը ծնվում է գազի և փոշու սառը ամպում՝ միգամածությունում։", "Звезда рождается в холодном облаке газа и пыли — туманности."),
    t("Gravity pulls the cloud together. It gets denser and hotter: a protostar.", "Ձգողությունը սեղմում է ամպը։ Այն խտանում և տաքանում է․ նախաստղ։", "Гравитация сжимает облако. Оно уплотняется и нагревается: протозвезда."),
    t("When the centre reaches about 10 million degrees, hydrogen starts to fuse into helium. The star shines steadily for billions of years, like the Sun.", "Երբ կենտրոնում ջերմաստիճանը հասնում է մոտ 10 միլիոն աստիճանի, ջրածինը սկսում է սինթեզվել հելիումի։ Աստղը միլիարդավոր տարիներ հավասարաչափ փայլում է, ինչպես Արեգակը։", "Когда в центре становится около 10 миллионов градусов, водород начинает превращаться в гелий. Звезда миллиарды лет светит ровно, как Солнце."),
    t("When the hydrogen in the core runs out, the star swells into a red giant.", "Երբ միջուկում ջրածինը վերջանում է, աստղն ուռչում և դառնում է կարմիր հսկա։", "Когда водород в ядре кончается, звезда раздувается в красный гигант."),
    t("A star like the Sun throws off its outer layers and leaves a small hot white dwarf.", "Արեգակի նման աստղը դեն է նետում արտաքին շերտերը և թողնում փոքր տաք սպիտակ թզուկ։", "Звезда вроде Солнца сбрасывает внешние оболочки и оставляет маленький горячий белый карлик."),
    t("A very massive star explodes as a supernova and leaves a neutron star or a black hole.", "Շատ զանգվածեղ աստղը պայթում է որպես գերնոր և թողնում նեյտրոնային աստղ կամ սև խոռոչ։", "Очень массивная звезда взрывается сверхновой и оставляет нейтронную звезду или чёрную дыру."),
  ],
  draw: (i, p) => {
    const cx = 160, cy = 110;
    if (i === 0) return <g>{scatter(80, 40, 30, 240, 160, 3).map((q, k) => <circle key={k} cx={q.x + Math.sin(p * 6.28 + k) * 2} cy={q.y} r={2 + (k % 4)} fill={k % 3 ? "#7c3aed" : "#f472b6"} opacity="0.4" />)}</g>;
    if (i === 1) return <g>{scatter(60, 40, 30, 240, 160, 3).map((q, k) => { const f = 1 - ease(p) * 0.7; return <circle key={k} cx={cx + (q.x - cx) * f} cy={cy + (q.y - cy) * f} r={2 + (k % 3)} fill="#f97316" opacity="0.5" />; })}<circle cx={cx} cy={cy} r={8 + ease(p) * 10} fill="#fb923c" /></g>;
    if (i === 2) return <g><circle cx={cx} cy={cy} r={34 + Math.sin(p * 6.28) * 2} fill="#fde047" /><circle cx={cx} cy={cy} r="48" fill="#facc15" opacity="0.2" /></g>;
    if (i === 3) return <g><circle cx={cx} cy={cy} r={34 + ease(p) * 50} fill="#ef4444" opacity="0.85" /><circle cx={cx} cy={cy} r="10" fill="#fde047" /></g>;
    if (i === 4) return <g><circle cx={cx} cy={cy} r={30 + p * 50} fill="none" stroke="#22d3ee" strokeWidth={6 - p * 4} opacity={1 - p * 0.6} /><circle cx={cx} cy={cy} r="6" fill="#f8fafc" /><circle cx={cx} cy={cy} r="12" fill="#e0f2fe" opacity="0.3" /></g>;
    return (
      <g>
        {Array.from({ length: 16 }, (_, k) => { const a = (k / 16) * 6.28; const d = 10 + ease(p) * 90; return <line key={k} x1={cx + Math.cos(a) * d * 0.4} y1={cy + Math.sin(a) * d * 0.4} x2={cx + Math.cos(a) * d} y2={cy + Math.sin(a) * d} stroke={k % 2 ? "#fde047" : "#f97316"} strokeWidth="3" opacity={1 - p * 0.5} />; })}
        <circle cx={cx} cy={cy} r="5" fill="#000" stroke="#a78bfa" strokeWidth="2" />
      </g>
    );
  },
};

/* ---------------- expanding universe ---------------- */

const expansion: Mech = {
  title: t("The expanding Universe", "Ընդարձակվող Տիեզերքը", "Расширяющаяся Вселенная"),
  dark: true,
  caps: [
    t("Picture galaxies as dots on a balloon. We sit in one of them (yellow).", "Պատկերացրո՛ւ գալակտիկաները որպես կետեր փուչիկի վրա։ Մենք նրանցից մեկում ենք (դեղին)։", "Представь галактики точками на воздушном шаре. Мы в одной из них (жёлтая)."),
    t("The balloon inflates: every distance grows, and every galaxy sees the others moving away. There is no centre.", "Փուչիկն ուռչում է․ բոլոր հեռավորություններն աճում են, և յուրաքանչյուր գալակտիկա տեսնում է, որ մյուսները հեռանում են։ Կենտրոն չկա։", "Шар надувается: все расстояния растут, и каждая галактика видит, что остальные удаляются. Центра нет."),
    t("Galaxies twice as far away move away twice as fast: v = H·r. This is Hubble's law.", "Երկու անգամ ավելի հեռու գալակտիկաները հեռանում են երկու անգամ ավելի արագ․ v = H·r։ Սա Հաբլի օրենքն է։", "Галактики вдвое дальше удаляются вдвое быстрее: v = H·r. Это закон Хаббла."),
    t("Run the film backwards: about 13.8 billion years ago everything was squeezed together, hot and dense. This was the Big Bang.", "Ֆիլմը հետ պտտի՛ր․ մոտ 13,8 միլիարդ տարի առաջ ամեն ինչ սեղմված էր իրար, տաք և խիտ։ Դա Մեծ պայթյունն էր։", "Прокрути фильм назад: около 13,8 миллиарда лет назад всё было сжато, горячо и плотно. Это был Большой взрыв."),
  ],
  draw: (i, p) => {
    const cx = 160, cy = 110;
    const s = i === 0 ? 0.5 : i === 1 || i === 2 ? 0.5 + ease(p) * 0.5 : 1 - ease(p) * 0.95;
    const dots = scatter(22, -1, -1, 2, 2, 4);
    const me = { x: 0.15, y: -0.1 };
    return (
      <g>
        <circle cx={cx} cy={cy} r={95 * s} fill="#1e3a8a" opacity="0.5" />
        {dots.map((d, k) => {
          if (d.x * d.x + d.y * d.y > 0.9) return null;
          const x = cx + d.x * 90 * s, y = cy + d.y * 90 * s;
          return <g key={k}>
            <ellipse cx={x} cy={y} rx="4" ry="2" fill="#e2e8f0" />
            {i === 2 ? <Arrow x1={x} y1={y} x2={x + (d.x - me.x) * 30} y2={y + (d.y - me.y) * 30} color="#f472b6" width={1.5} head={5} /> : null}
          </g>;
        })}
        <circle cx={cx + me.x * 90 * s} cy={cy + me.y * 90 * s} r="5" fill="#facc15" />
        {i === 3 && p > 0.8 ? <circle cx={cx} cy={cy} r="14" fill="#fde047" opacity="0.8" /> : null}
      </g>
    );
  },
};

/* ---------------- radio ---------------- */

const radio: Mech = {
  title: t("How radio carries sound", "Ինչպես է ռադիոն հաղորդում ձայնը", "Как радио передаёт звук"),
  caps: [
    t("A microphone turns sound into a weak electric signal of low frequency.", "Խոսափողը ձայնը դարձնում է ցածր հաճախության թույլ էլեկտրական ազդանշան։", "Микрофон превращает звук в слабый электрический сигнал низкой частоты."),
    t("The transmitter makes a fast carrier wave and changes its height to follow the sound: amplitude modulation.", "Հաղորդիչը ստեղծում է արագ կրող ալիք և փոխում նրա բարձրությունը ձայնին համապատասխան․ ամպլիտուդային մոդուլացիա։", "Передатчик создаёт быструю несущую волну и меняет её размах вслед за звуком: амплитудная модуляция."),
    t("The antenna sends out electromagnetic waves that travel at the speed of light.", "Ալեհավաքը ճառագայթում է էլեկտրամագնիսական ալիքներ, որոնք տարածվում են լույսի արագությամբ։", "Антенна излучает электромагнитные волны, которые распространяются со скоростью света."),
    t("The receiver's tuned circuit picks one station by resonance; a detector takes out the sound signal and the loudspeaker plays it.", "Ընդունիչի տատանողական կոնտուրը ռեզոնանսով ընտրում է մեկ կայան, դետեկտորն առանձնացնում է ձայնային ազդանշանը, և բարձրախոսը վերարտադրում է այն։", "Колебательный контур приёмника выделяет одну станцию по резонансу; детектор выделяет звуковой сигнал, и громкоговоритель его воспроизводит."),
  ],
  draw: (i, p, lang) => {
    const wave = (x0: number, y0: number, w: number, f: (x: number) => number, c: string) => <polyline points={Array.from({ length: 121 }, (_, k) => `${x0 + (k / 120) * w},${y0 + f(k / 120)}`).join(" ")} fill="none" stroke={c} strokeWidth="2" />;
    const sound = (x: number) => Math.sin(2 * Math.PI * (x * 2 - p));
    return (
      <g>
        <rect x="10" y="90" width="20" height="34" rx="10" fill="#334155" />
        <rect x="16" y="124" width="8" height="20" fill="#334155" />
        {wave(40, 106, 80, (x) => sound(x) * 14, "#4f46e5")}
        {i >= 1 ? wave(130, 106, 80, (x) => Math.sin(2 * Math.PI * x * 16) * (12 + sound(x) * 8), "#e11d48") : null}
        {i >= 2 ? <>
          <path d="M214 140 L222 60 L230 140 M216 120 L228 120" fill="none" stroke="#475569" strokeWidth="2" />
          {[0, 1, 2].map((k) => { const r = ((p + k / 3) % 1) * 60 + 6; return <path key={k} d={`M ${222 + r * 0.7} ${60 - r * 0.7} A ${r} ${r} 0 0 1 ${222 + r * 0.7} ${60 + r * 0.7}`} fill="none" stroke="#f59e0b" strokeWidth="2" opacity={1 - ((p + k / 3) % 1)} />; })}
        </> : null}
        {i >= 3 ? <>
          <path d="M290 140 L294 80 L298 140" fill="none" stroke="#475569" strokeWidth="2" />
          <rect x="270" y="150" width="44" height="40" rx="6" fill="#f8fafc" stroke="#334155" />
          <circle cx="292" cy="170" r="12" fill="none" stroke="#334155" strokeWidth="2" />
          {[0, 1].map((k) => <path key={k} d={`M ${306 + k * 6} 162 q 4 8 0 16`} fill="none" stroke="#4f46e5" strokeWidth="2" opacity={0.5 + 0.5 * Math.sin(p * 6.28 + k)} />)}
        </> : null}
        <Tag x={80} y={78}>{L(t("sound", "ձայն", "звук"), lang)}</Tag>
        {i >= 1 ? <Tag x={170} y={78}>{L(t("modulated wave", "մոդուլացված ալիք", "модулир. волна"), lang)}</Tag> : null}
        <Tag x={4} y={160} anchor="start">{L(t("microphone", "խոսափող", "микрофон"), lang)}</Tag>
        {i >= 3 ? <Tag x={292} y={206}>{L(t("receiver", "ընդունիչ", "приёмник"), lang)}</Tag> : null}
      </g>
    );
  },
};

/* ---------------- laser ---------------- */

const laser: Mech = {
  title: t("How a laser works", "Ինչպես է աշխատում լազերը", "Как работает лазер"),
  caps: [
    t("Most atoms are in the lowest energy state (grey).", "Ատոմների մեծ մասը գտնվում է ամենացածր էներգիայի վիճակում (մոխրագույն)։", "Большинство атомов в низшем энергетическом состоянии (серые)."),
    t("A flash of light or a current 'pumps' energy in: most atoms become excited (orange). This is called population inversion.", "Լույսի բռնկումը կամ հոսանքը «մղում» է էներգիա․ ատոմների մեծ մասը գրգռվում է (նարնջագույն)։ Սա կոչվում է բնակեցվածության շրջում։", "Вспышка света или ток «накачивают» энергию: большинство атомов возбуждается (оранжевые). Это инверсная населённость."),
    t("A passing photon makes an excited atom emit an identical photon: same colour, same direction, in step. This is stimulated emission.", "Անցնող ֆոտոնը ստիպում է գրգռված ատոմին ճառագայթել նույնական ֆոտոն․ նույն գույնի, նույն ուղղության, համաքայլ։ Սա հարկադրական ճառագայթումն է։", "Пролетающий фотон заставляет возбуждённый атом испустить точно такой же фотон: того же цвета, в том же направлении и в такт. Это вынужденное излучение."),
    t("Mirrors at both ends send the photons back and forth, so their number grows like an avalanche. One mirror lets a little light out: a narrow, bright beam of one colour.", "Երկու ծայրերի հայելիները ֆոտոնները ետ ու առաջ են ուղարկում, և նրանց թիվն աճում է հեղեղի պես։ Հայելիներից մեկը մի քիչ լույս է բաց թողնում․ նեղ, պայծառ, միագույն փունջ։", "Зеркала на концах гоняют фотоны туда-обратно, и их число растёт лавиной. Одно зеркало выпускает часть света: узкий яркий луч одного цвета."),
  ],
  draw: (i, p) => {
    const atoms = scatter(16, 60, 70, 200, 70, 6);
    const excited = (k: number) => (i === 0 ? k % 6 === 0 : i === 1 ? (ease(p) * 16 > k ? true : k % 6 === 0) : i === 2 ? k > 3 : k > 11 - Math.floor(p * 8));
    return (
      <g>
        <rect x="44" y="60" width="232" height="90" rx="6" fill="#fef2f2" stroke="#fca5a5" />
        <rect x="36" y="56" width="8" height="98" fill="#94a3b8" />
        <rect x="276" y="56" width="8" height="98" fill="#cbd5e1" opacity="0.7" />
        {atoms.map((a, k) => <circle key={k} cx={a.x} cy={a.y} r="7" fill={excited(k) ? "#fb923c" : "#cbd5e1"} />)}
        {i === 1 ? <rect x="44" y="40" width="232" height="10" rx="5" fill="#fde047" opacity={0.3 + 0.7 * Math.abs(Math.sin(p * 9))} /> : null}
        {i === 2 ? <><Photon x1={60 + p * 140} y1={104} x2={100 + p * 140} y2={104} color="#e11d48" /><Photon x1={60 + p * 140} y1={116} x2={100 + p * 140} y2={116} color="#e11d48" /></> : null}
        {i === 3 ? <>
          {[90, 100, 110, 120].map((y, k) => <Photon key={y} x1={60 + ((p + k * 0.15) % 1) * 170} y1={y} x2={90 + ((p + k * 0.15) % 1) * 170} y2={y} color="#e11d48" />)}
          <rect x="284" y="98" width="36" height="14" fill="#ef4444" opacity="0.85" />
        </> : null}
      </g>
    );
  },
};

/* ---------------- GPS ---------------- */

const gps: Mech = {
  title: t("How GPS finds where you are", "Ինչպես է GPS-ը գտնում քո տեղը", "Как GPS определяет местоположение"),
  caps: [
    t("Satellites high above the Earth keep sending radio signals with the exact time they were sent.", "Երկրից բարձր գտնվող արբանյակներն անընդհատ ռադիոազդանշաններ են ուղարկում, որոնցում նշված է ուղարկելու ճշգրիտ ժամանակը։", "Спутники высоко над Землёй постоянно посылают радиосигналы с точным временем отправки."),
    t("Your phone measures how late each signal arrives. Distance = speed of light × delay, so you are somewhere on a circle around that satellite.", "Հեռախոսը չափում է, թե որքան է ուշանում յուրաքանչյուր ազդանշան։ Հեռավորությունը = լույսի արագություն × ուշացում, ուստի դու գտնվում ես այդ արբանյակի շուրջ ինչ-որ շրջանագծի վրա։", "Телефон измеряет, насколько запаздывает каждый сигнал. Расстояние = скорость света × задержка, значит, ты где-то на окружности вокруг спутника."),
    t("With three satellites the circles cross at only one point: that is where you are.", "Երեք արբանյակի դեպքում շրջանագծերը հատվում են միայն մեկ կետում․ այնտեղ ես դու։", "С тремя спутниками окружности пересекаются в одной точке: там ты и находишься."),
    t("A timing error of one millionth of a second gives an error of 300 m, so the satellites carry atomic clocks and even correct them for relativity.", "Ժամանակի վայրկյանի մեկ միլիոներորդական սխալը տալիս է 300 մ սխալ, ուստի արբանյակներում ատոմային ժամացույցներ են, որոնք ճշգրտվում են նույնիսկ հարաբերականության տեսությամբ։", "Ошибка во времени на миллионную долю секунды даёт ошибку 300 м, поэтому на спутниках атомные часы, и их поправляют даже на теорию относительности."),
  ],
  draw: (i, p) => {
    const me = { x: 170, y: 150 };
    const sats = [{ x: 50, y: 40 }, { x: 280, y: 50 }, { x: 160, y: 20 }];
    const shown = i === 1 ? 1 : 3;
    return (
      <g>
        <path d="M0 200 Q 160 150 320 200 L320 220 L0 220 Z" fill="#bbf7d0" />
        {sats.map((s, k) => (
          <g key={k}>
            <rect x={s.x - 6} y={s.y - 4} width="12" height="8" fill="#64748b" />
            <rect x={s.x - 20} y={s.y - 2} width="12" height="4" fill="#3b82f6" />
            <rect x={s.x + 8} y={s.y - 2} width="12" height="4" fill="#3b82f6" />
            {i === 0 ? [0, 1].map((j) => { const r = ((p + j / 2) % 1) * 80; return <circle key={j} cx={s.x} cy={s.y} r={r} fill="none" stroke="#f59e0b" opacity={1 - r / 80} />; }) : null}
            {i >= 1 && k < shown ? <circle cx={s.x} cy={s.y} r={Math.hypot(me.x - s.x, me.y - s.y)} fill="none" stroke={["#e11d48", "#2563eb", "#059669"][k]} strokeWidth="1.5" strokeDasharray={i === 1 ? "4 3" : undefined} /> : null}
          </g>
        ))}
        {i >= 2 ? <circle cx={me.x} cy={me.y} r="6" fill="#facc15" stroke="#1e1b4b" strokeWidth="2" /> : null}
      </g>
    );
  },
};

/* ---------------- electromagnetic wave ---------------- */

const emwave: Mech = {
  title: t("How an electromagnetic wave is made", "Ինչպես է առաջանում էլեկտրամագնիսական ալիքը", "Как возникает электромагнитная волна"),
  caps: [
    t("Charges run up and down an antenna: the current changes all the time.", "Լիցքերը ալեհավաքով վեր ու վար են վազում․ հոսանքն անընդհատ փոխվում է։", "Заряды бегают вверх-вниз по антенне: ток всё время меняется."),
    t("A changing electric field creates a magnetic field around it.", "Փոփոխվող էլեկտրական դաշտը իր շուրջը ստեղծում է մագնիսական դաշտ։", "Переменное электрическое поле создаёт вокруг себя магнитное поле."),
    t("A changing magnetic field in its turn creates an electric field, and so on: the fields support each other and leave the antenna.", "Փոփոխվող մագնիսական դաշտն էլ իր հերթին ստեղծում է էլեկտրական դաշտ և այսպես շարունակ․ դաշտերը պահում են իրար և հեռանում ալեհավաքից։", "Переменное магнитное поле, в свою очередь, создаёт электрическое и так далее: поля поддерживают друг друга и уходят от антенны."),
    t("The wave travels at c = 3·10⁸ m/s. E and B are perpendicular to each other and to the direction of travel. Maxwell predicted it, Hertz proved it in 1888.", "Ալիքը տարածվում է c = 3·10⁸ մ/վ արագությամբ։ E-ն և B-ն ուղղահայաց են իրար և տարածման ուղղությանը։ Մաքսվելը կանխատեսեց այն, Հերցը ապացուցեց 1888 թվականին։", "Волна бежит со скоростью c = 3·10⁸ м/с. E и B перпендикулярны друг другу и направлению распространения. Максвелл предсказал её, Герц доказал в 1888 году."),
  ],
  draw: (i, p) => {
    const ph = p * 2 * Math.PI;
    const n = i === 0 ? 0 : i === 1 ? 30 : i === 2 ? 60 : 120;
    return (
      <g>
        <line x1="30" x2="30" y1="50" y2="170" stroke="#475569" strokeWidth="4" />
        <circle cx="30" cy={110 + Math.sin(ph) * 40} r="5" fill="#e11d48" />
        <circle cx="30" cy={110 - Math.sin(ph) * 40} r="5" fill="#2563eb" />
        <line x1="40" x2="300" y1="110" y2="110" stroke="#cbd5e1" />
        {n > 0 ? <polyline points={Array.from({ length: n + 1 }, (_, k) => `${40 + k * 2.1},${110 - Math.sin(ph - k * 0.12) * 50}`).join(" ")} fill="none" stroke="#e11d48" strokeWidth="2.5" /> : null}
        {i >= 2 ? <polyline points={Array.from({ length: n + 1 }, (_, k) => `${40 + k * 2.1 + Math.sin(ph - k * 0.12) * 22},${110 + Math.sin(ph - k * 0.12) * 14}`).join(" ")} fill="none" stroke="#2563eb" strokeWidth="2.5" /> : null}
        {i >= 1 ? <text x="60" y="44" fontSize="13" fontWeight="900" fill="#e11d48">E</text> : null}
        {i >= 2 ? <text x="84" y="150" fontSize="13" fontWeight="900" fill="#2563eb">B</text> : null}
        {i === 3 ? <Arrow x1={240} y1={190} x2={300} y2={190} color="#059669" label="c" /> : null}
      </g>
    );
  },
};

/* ---------------- inside a proton ---------------- */

const proton_: Mech = {
  title: t("Zooming into matter", "Մոտեցում նյութի խորքը", "Вглубь вещества"),
  caps: [
    t("An atom is about 10⁻¹⁰ m across: a tiny nucleus with electrons around it.", "Ատոմի չափը մոտ 10⁻¹⁰ մ է․ փոքրիկ միջուկ և նրա շուրջ էլեկտրոններ։", "Размер атома около 10⁻¹⁰ м: крошечное ядро и электроны вокруг."),
    t("The nucleus is 10 000 times smaller, about 10⁻¹⁴ m, and is made of protons and neutrons.", "Միջուկը 10 000 անգամ փոքր է, մոտ 10⁻¹⁴ մ, և կազմված է պրոտոններից ու նեյտրոններից։", "Ядро в 10 000 раз меньше, около 10⁻¹⁴ м, и состоит из протонов и нейтронов."),
    t("A proton is made of three quarks: two up quarks (+2/3) and one down quark (−1/3). Total charge +1.", "Պրոտոնը կազմված է երեք քվարկից․ երկու u քվարկ (+2/3) և մեկ d քվարկ (−1/3)։ Ընդհանուր լիցքը +1 է։", "Протон состоит из трёх кварков: двух u-кварков (+2/3) и одного d-кварка (−1/3). Суммарный заряд +1."),
    t("A neutron is one up and two down quarks: 2/3 − 1/3 − 1/3 = 0. Gluons hold the quarks together with the strong interaction.", "Նեյտրոնը մեկ u և երկու d քվարկ է․ 2/3 − 1/3 − 1/3 = 0։ Գլյուոնները քվարկները պահում են իրար ուժեղ փոխազդեցությամբ։", "Нейтрон — один u- и два d-кварка: 2/3 − 1/3 − 1/3 = 0. Глюоны удерживают кварки сильным взаимодействием."),
  ],
  draw: (i, p, lang) => {
    const m = L(t("m", "մ", "м"), lang);
    const cx = 160, cy = 110;
    if (i === 0) return (
      <g>
        {[40, 70].map((r) => <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="#cbd5e1" />)}
        {electron(cx + Math.cos(p * 6.28) * 40, cy + Math.sin(p * 6.28) * 40, 5)}
        {electron(cx + Math.cos(-p * 6.28 + 2) * 70, cy + Math.sin(-p * 6.28 + 2) * 70, 5)}
        <circle cx={cx} cy={cy} r="5" fill="#e11d48" />
        <Tag x={cx} y={210}>10⁻¹⁰ {m}</Tag>
      </g>
    );
    if (i === 1) return <g><Nucleus x={cx} y={cy} n={12} r={12} /><Tag x={cx} y={210}>10⁻¹⁴ {m}</Tag></g>;
    const qs = i === 2 ? ["u", "u", "d"] : ["u", "d", "d"];
    return (
      <g>
        <circle cx={cx} cy={cy} r="70" fill={i === 2 ? "#fee2e2" : "#f1f5f9"} stroke={i === 2 ? "#e11d48" : "#64748b"} strokeWidth="2" />
        {qs.map((q, k) => {
          const a = (k / 3) * 6.28 + p * 0.6;
          const x = cx + Math.cos(a) * 34, y = cy + Math.sin(a) * 34;
          return (
            <g key={k}>
              <circle cx={x} cy={y} r="16" fill={q === "u" ? "#f97316" : "#3b82f6"} />
              <text x={x} y={y + 5} textAnchor="middle" fontSize="14" fontWeight="900" fill="#fff">{q}</text>
            </g>
          );
        })}
        {[0, 1, 2].map((k) => { const a = (k / 3) * 6.28 + p * 0.6, b = ((k + 1) / 3) * 6.28 + p * 0.6; return <path key={k} d={`M${cx + Math.cos(a) * 18} ${cy + Math.sin(a) * 18} Q ${cx + Math.cos((a + b) / 2) * 10} ${cy + Math.sin((a + b) / 2) * 10} ${cx + Math.cos(b) * 18} ${cy + Math.sin(b) * 18}`} fill="none" stroke="#a3e635" strokeWidth="2" strokeDasharray="3 2" />; })}
        <Tag x={cx} y={206}>{i === 2 ? "p = uud: +2/3 +2/3 −1/3 = +1" : "n = udd: +2/3 −1/3 −1/3 = 0"}</Tag>
      </g>
    );
  },
};

export const PHYS_B: Record<string, Mech> = { fission, fusion, reactor, pn, transistor, stars, expansion, radio, laser, gps, emwave, proton: proton_ };
