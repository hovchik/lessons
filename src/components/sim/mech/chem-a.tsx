"use client";

import { Arrow } from "../kit";
import { L, t } from "../labels";
import { ease, scatter, Tag } from "./draw";
import type { Mech } from "./types";

/* ---------------- shared pieces ---------------- */

/** An atom with electron shells; `shells` lists electrons per shell from the inside out. */
function ShellAtom({ x, y, sym, shells, color = "#4f46e5", hide = -1, charge }: { x: number; y: number; sym: string; shells: number[]; color?: string; hide?: number; charge?: string }) {
  return (
    <g>
      {shells.map((n, s) => {
        const r = 16 + s * 11;
        return (
          <g key={s}>
            <circle cx={x} cy={y} r={r} fill="none" stroke="#cbd5e1" strokeDasharray="3 3" />
            {Array.from({ length: n }, (_, k) => {
              if (s === shells.length - 1 && k === hide) return null;
              const a = (k / n) * Math.PI * 2 - Math.PI / 2 + s * 0.3;
              return <circle key={k} cx={x + Math.cos(a) * r} cy={y + Math.sin(a) * r} r="3.2" fill="#2563eb" stroke="#fff" strokeWidth="0.8" />;
            })}
          </g>
        );
      })}
      <circle cx={x} cy={y} r="10" fill={color} />
      <text x={x} y={y + 3.5} textAnchor="middle" fontSize="10" fontWeight="900" fill="#fff">{sym}</text>
      {charge ? <text x={x + 16 + (shells.length - 1) * 11 + 6} y={y - 16 - (shells.length - 1) * 8} fontSize="14" fontWeight="900" fill={color}>{charge}</text> : null}
    </g>
  );
}

function Ball({ x, y, r = 9, c, label, dark }: { x: number; y: number; r?: number; c: string; label?: string; dark?: boolean }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={c} stroke="#0f172a" strokeOpacity="0.25" />
      {label ? <text x={x} y={y + 3.3} textAnchor="middle" fontSize={r > 8 ? 9 : 7} fontWeight="900" fill={dark ? "#1e1b4b" : "#fff"}>{label}</text> : null}
    </g>
  );
}

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;

/* ---------------- filtration ---------------- */

const filtration: Mech = {
  title: t("Filtration step by step", "Զտում քայլ առ քայլ", "Фильтрование шаг за шагом"),
  caps: [
    t("A mixture of sand and water: sand does not dissolve, so it can be held back by a filter.", "Ավազի և ջրի խառնուրդ․ ավազը չի լուծվում, ուստի այն կարելի է պահել զտիչով։", "Смесь песка и воды: песок не растворяется, поэтому его можно задержать фильтром."),
    t("Pour the mixture slowly down a glass rod into a funnel lined with filter paper.", "Խառնուրդը դանդաղ լցրո՛ւ ապակե ձողի երկայնքով զտիչ թղթով ձագարի մեջ։", "Медленно лей смесь по стеклянной палочке в воронку с бумажным фильтром."),
    t("Water passes through the tiny pores of the paper. Grains of sand are too big and stay behind.", "Ջուրն անցնում է թղթի մանր ծակոտիներով։ Ավազահատիկները շատ մեծ են և մնում են։", "Вода проходит через мелкие поры бумаги. Песчинки слишком крупные и остаются."),
    t("The clear liquid below is the filtrate; the sand on the paper is the residue.", "Ներքևում հավաքված պարզ հեղուկը ֆիլտրատն է, թղթի վրա մնացած ավազը՝ նստվածքը։", "Прозрачная жидкость внизу — фильтрат, песок на бумаге — осадок."),
  ],
  draw: (i, p, lang) => {
    const pour = i === 1;
    const sand = scatter(26, 136, 64, 48, 18, 4);
    return (
      <g>
        {i === 0 ? (
          <g>
            <rect x="40" y="110" width="70" height="80" rx="6" fill="#d6b88a" opacity="0.6" />
            {scatter(30, 46, 150, 58, 36, 2).map((d, k) => <circle key={k} cx={d.x} cy={d.y} r="2.2" fill="#a16207" />)}
            <path d="M36,106 L40,110 L40,184 Q40,190 46,190 L104,190 Q110,190 110,184 L110,106" fill="none" stroke="#64748b" strokeWidth="2" />
          </g>
        ) : null}
        {pour ? (
          <g transform="rotate(-50 110 60)">
            <rect x="90" y="40" width="50" height="60" rx="5" fill="#d6b88a" opacity="0.6" />
            <rect x="90" y="40" width="50" height="60" rx="5" fill="none" stroke="#64748b" strokeWidth="2" />
          </g>
        ) : null}
        {pour ? <line x1="150" y1="20" x2="160" y2="80" stroke="#94a3b8" strokeWidth="3" /> : null}
        <path d="M120,50 L200,50 L168,100 L168,130 L152,130 L152,100 Z" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
        <path d="M128,54 L192,54 L160,96 Z" fill="#fef3c7" stroke="#d97706" />
        {i >= 1 ? <path d="M134,58 L186,58 L160,92 Z" fill="#d6b88a" opacity={i === 1 ? 0.6 * ease(p) : i === 2 ? 0.5 * (1 - p * 0.5) : 0.2} /> : null}
        {i >= 2 ? sand.map((d, k) => <circle key={k} cx={d.x} cy={d.y + 6} r="2.2" fill="#a16207" />) : null}
        {i >= 2 ? [0, 0.33, 0.66].map((o) => <circle key={o} cx="160" cy={134 + ((p + o) % 1) * 30} r="2.5" fill="#38bdf8" />) : null}
        <rect x="124" y="160" width="72" height="44" rx="6" fill="#bae6fd" opacity={i >= 2 ? 0.3 + (i === 3 ? 0.4 : 0.3 * p) : 0} />
        <path d="M120,138 L124,142 L124,198 Q124,204 130,204 L190,204 Q196,204 196,198 L196,138" fill="none" stroke="#64748b" strokeWidth="2" />
        {i === 3 ? (
          <g>
            <Arrow x1={230} y1={70} x2={180} y2={72} color="#a16207" label="" />
            <Tag x={236} y={74} anchor="start" color="#a16207">{L(t("residue", "նստվածք", "осадок"), lang)}</Tag>
            <Arrow x1={240} y1={180} x2={200} y2={184} color="#0284c7" label="" />
            <Tag x={246} y={184} anchor="start" color="#0284c7">{L(t("filtrate", "ֆիլտրատ", "фильтрат"), lang)}</Tag>
          </g>
        ) : <Tag x={240} y={76} anchor="start">{L(t("filter paper", "զտիչ թուղթ", "фильтр"), lang)}</Tag>}
      </g>
    );
  },
};

/* ---------------- distillation ---------------- */

const distillation: Mech = {
  title: t("Distillation step by step", "Թորում քայլ առ քայլ", "Перегонка шаг за шагом"),
  caps: [
    t("Salt water is heated in a flask. Salt and water boil at very different temperatures.", "Աղաջուրը տաքացվում է կոլբայում։ Աղը և ջուրը եռում են շատ տարբեր ջերմաստիճաններում։", "Солёную воду нагревают в колбе. Соль и вода кипят при очень разных температурах."),
    t("At 100 °C the water boils. Its vapour rises and goes into the condenser; the salt cannot evaporate.", "100 °C-ում ջուրը եռում է։ Գոլորշին բարձրանում և անցնում է սառնարան, իսկ աղը չի կարող գոլորշիանալ։", "При 100 °C вода кипит. Пар поднимается и идёт в холодильник; соль испариться не может."),
    t("Cold water flows around the condenser tube. The vapour cools and turns back into liquid drops.", "Սառնարանի խողովակի շուրջը սառը ջուր է հոսում։ Գոլորշին սառչում և նորից կաթիլների է վերածվում։", "Вокруг трубки холодильника течёт холодная вода. Пар остывает и снова превращается в капли."),
    t("Pure water (the distillate) collects in the receiver. The salt is left in the flask.", "Մաքուր ջուրը (թորվածքը) հավաքվում է ընդունիչում։ Աղը մնում է կոլբայում։", "Чистая вода (дистиллят) собирается в приёмнике. Соль остаётся в колбе."),
  ],
  draw: (i, p, lang) => {
    const vap = i >= 1;
    return (
      <g>
        <circle cx="70" cy="120" r="34" fill="#e0f2fe" stroke="#64748b" strokeWidth="2" />
        <path d={`M38,${132} A34,34 0 0 0 102,132 Z`} fill="#7dd3fc" opacity={i === 3 ? 0.5 : 0.8} />
        {i === 3 ? scatter(14, 50, 136, 40, 12, 3).map((d, k) => <rect key={k} x={d.x} y={d.y} width="3.5" height="3.5" fill="#fff" stroke="#94a3b8" strokeWidth="0.5" />) : null}
        <rect x="64" y="56" width="12" height="36" fill="#e0f2fe" stroke="#64748b" strokeWidth="2" />
        <path d="M60,170 L80,170 L74,150 L66,150 Z" fill="#475569" />
        <path d={`M70,152 q-8,-10 0,-${18 + Math.sin(p * 12) * 3} q8,8 0,${18 + Math.sin(p * 12) * 3}`} fill="#f97316" opacity="0.8" />
        {vap && i <= 2 ? [0, 0.5].map((o) => <circle key={o} cx={70 + Math.sin((p + o) * 9) * 6} cy={110 - ((p + o) % 1) * 40} r="3" fill="#fff" stroke="#94a3b8" />) : null}
        <line x1="76" y1="62" x2="250" y2="140" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
        <line x1="76" y1="62" x2="250" y2="140" stroke="#f8fafc" strokeWidth="3" strokeLinecap="round" />
        <line x1="120" y1="72" x2="220" y2="117" stroke={i >= 2 ? "#60a5fa" : "#cbd5e1"} strokeWidth="18" strokeLinecap="round" opacity="0.5" />
        {vap ? (() => {
          const k = (p + 0.2) % 1;
          const x = lerp(80, 248, k), y = lerp(64, 139, k);
          return <circle cx={x} cy={y} r="2.8" fill={i >= 2 && k > 0.45 ? "#0284c7" : "#fff"} stroke="#64748b" strokeWidth="0.6" />;
        })() : null}
        {i >= 2 ? <Arrow x1={226} y1={140} x2={210} y2={124} color="#2563eb" width={2} head={6} /> : null}
        {i >= 2 ? <Arrow x1={130} y1={64} x2={112} y2={56} color="#2563eb" width={2} head={6} /> : null}
        <path d="M232,150 L232,198 Q232,204 238,204 L282,204 Q288,204 288,198 L288,150" fill="none" stroke="#64748b" strokeWidth="2" />
        <rect x="234" y={204 - (i === 3 ? 26 : i === 2 ? 10 * p : 0)} width="52" height={i === 3 ? 24 : i === 2 ? 10 * p : 0} fill="#7dd3fc" opacity="0.8" />
        {i >= 2 ? <circle cx="250" cy={146 + p * 40} r="2.5" fill="#0284c7" /> : null}
        <Tag x={70} y={34}>{L(t("salt water", "աղաջուր", "солёная вода"), lang)}</Tag>
        <Tag x={170} y={78} anchor="start">{L(t("condenser", "սառնարան", "холодильник"), lang)}</Tag>
        <Tag x={260} y={144} anchor="middle">{L(t("pure water", "մաքուր ջուր", "чистая вода"), lang)}</Tag>
      </g>
    );
  },
};

/* ---------------- separating a mixture ---------------- */

const separate: Mech = {
  title: t("Separating a mixture of iron, sand and salt", "Երկաթի, ավազի և աղի խառնուրդի բաժանում", "Разделение смеси железа, песка и соли"),
  caps: [
    t("A mixture of iron filings, sand and salt. Each part has a property the others do not.", "Երկաթի փոշու, ավազի և աղի խառնուրդ։ Յուրաքանչյուր բաղադրիչ ունի այնպիսի հատկություն, որը մյուսները չունեն։", "Смесь железных опилок, песка и соли. У каждой части есть свойство, которого нет у других."),
    t("A magnet pulls out the iron: only iron is attracted.", "Մագնիսը դուրս է քաշում երկաթը․ ձգվում է միայն երկաթը։", "Магнит вытаскивает железо: притягивается только оно."),
    t("Add water: the salt dissolves, the sand does not. Filtering keeps the sand on the paper.", "Ավելացրո՛ւ ջուր․ աղը լուծվում է, ավազը՝ ոչ։ Զտելիս ավազը մնում է թղթի վրա։", "Добавь воду: соль растворяется, песок нет. При фильтровании песок остаётся на бумаге."),
    t("Evaporate the salt solution: water leaves as vapour and salt crystals stay in the dish.", "Գոլորշիացրո՛ւ աղի լուծույթը․ ջուրը հեռանում է գոլորշու ձևով, աղի բյուրեղները մնում են թասում։", "Выпари раствор соли: вода уходит паром, кристаллы соли остаются в чашке."),
  ],
  draw: (i, p, lang) => {
    const iron = scatter(22, 110, 150, 100, 24, 1), sand = scatter(24, 110, 150, 100, 24, 2), salt = scatter(16, 110, 150, 100, 24, 3);
    const up = i === 1 ? ease(p) : i > 1 ? 1 : 0;
    return (
      <g>
        {i <= 1 ? (
          <g>
            <path d="M90,150 Q160,200 230,150 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
            {sand.map((d, k) => <circle key={`s${k}`} cx={d.x} cy={d.y} r="2.4" fill="#d6a756" />)}
            {salt.map((d, k) => <rect key={`c${k}`} x={d.x} y={d.y} width="4" height="4" fill="#fff" stroke="#94a3b8" strokeWidth="0.6" />)}
            {iron.map((d, k) => <circle key={`i${k}`} cx={lerp(d.x, 150 + (k % 6) * 4, up)} cy={lerp(d.y, 66 + Math.floor(k / 6) * 3, up)} r="2" fill="#334155" />)}
            {i === 1 ? <path d="M130,30 L130,60 L142,60 L142,40 L178,40 L178,60 L190,60 L190,30 Z" fill="#e11d48" /> : null}
            <Tag x={60} y={30} anchor="start">{L(t("iron + sand + salt", "երկաթ + ավազ + աղ", "железо + песок + соль"), lang)}</Tag>
          </g>
        ) : null}
        {i === 2 ? (
          <g>
            <path d="M120,50 L200,50 L168,100 L168,130 L152,130 L152,100 Z" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
            <path d="M128,54 L192,54 L160,96 Z" fill="#fef3c7" stroke="#d97706" />
            {scatter(18, 140, 62, 40, 16, 5).map((d, k) => <circle key={k} cx={d.x} cy={d.y} r="2.4" fill="#d6a756" />)}
            <circle cx="160" cy={134 + p * 30} r="2.5" fill="#38bdf8" />
            <rect x="124" y="170" width="72" height="34" rx="6" fill="#bae6fd" opacity="0.7" />
            <path d="M120,150 L124,154 L124,198 Q124,204 130,204 L190,204 Q196,204 196,198 L196,150" fill="none" stroke="#64748b" strokeWidth="2" />
            <Tag x={214} y={70} anchor="start" color="#a16207">{L(t("sand", "ավազ", "песок"), lang)}</Tag>
            <Tag x={214} y={190} anchor="start" color="#0284c7">{L(t("salt solution", "աղի լուծույթ", "раствор соли"), lang)}</Tag>
          </g>
        ) : null}
        {i === 3 ? (
          <g>
            <path d="M100,130 Q160,170 220,130 Z" fill="#bae6fd" opacity={0.3} stroke="#94a3b8" strokeWidth="2" />
            {scatter(14, 128, 134, 64, 10, 6).map((d, k) => <rect key={k} x={d.x} y={d.y} width="5" height="5" fill="#fff" stroke="#64748b" strokeWidth="0.6" />)}
            <path d="M150,190 L170,190 L164,170 L156,170 Z" fill="#475569" />
            <path d={`M160,170 q-6,-8 0,-${14 + Math.sin(p * 12) * 3} q6,6 0,${14 + Math.sin(p * 12) * 3}`} fill="#f97316" />
            {[0, 0.5].map((o) => <path key={o} d={`M${150 + o * 20},${120 - ((p + o) % 1) * 50} q4,-6 0,-12`} stroke="#94a3b8" fill="none" strokeWidth="2" opacity={1 - ((p + o) % 1)} />)}
            <Tag x={262} y={156}>{L(t("salt crystals", "աղի բյուրեղներ", "кристаллы соли"), lang)}</Tag>
          </g>
        ) : null}
        {i >= 2 ? (
          <g transform="translate(20 20)">
            <circle cx="10" cy="10" r="8" fill="#334155" /><text x="22" y="14" className="sim-small">Fe ✓</text>
          </g>
        ) : null}
      </g>
    );
  },
};

/* ---------------- ionic bond ---------------- */

const ionic: Mech = {
  title: t("How an ionic bond forms", "Ինչպես է առաջանում իոնային կապը", "Как образуется ионная связь"),
  caps: [
    t("A sodium atom has one electron in its outer shell (2, 8, 1); chlorine has seven (2, 8, 7).", "Նատրիումի ատոմն արտաքին շերտում ունի մեկ էլեկտրոն (2, 8, 1), քլորը՝ յոթ (2, 8, 7)։", "У атома натрия один электрон на внешнем слое (2, 8, 1), у хлора семь (2, 8, 7)."),
    t("Sodium gives its outer electron to chlorine. Both now have a complete outer shell of eight.", "Նատրիումն իր արտաքին էլեկտրոնը տալիս է քլորին։ Այժմ երկուսն էլ ունեն ութ էլեկտրոնից բաղկացած ավարտուն արտաքին շերտ։", "Натрий отдаёт внешний электрон хлору. Теперь у обоих завершённый внешний слой из восьми."),
    t("Sodium became a positive ion Na⁺, chlorine a negative ion Cl⁻.", "Նատրիումը դարձավ դրական իոն Na⁺, քլորը՝ բացասական իոն Cl⁻։", "Натрий стал положительным ионом Na⁺, хлор — отрицательным ионом Cl⁻."),
    t("Opposite charges attract: this attraction is the ionic bond. Many ions build a crystal of NaCl.", "Հակադիր լիցքերը ձգում են միմյանց․ այս ձգողությունը իոնային կապն է։ Շատ իոններ կազմում են NaCl-ի բյուրեղ։", "Разноимённые заряды притягиваются: это и есть ионная связь. Множество ионов образуют кристалл NaCl."),
  ],
  draw: (i, p, lang) => {
    if (i === 3) {
      return (
        <g>
          {Array.from({ length: 20 }, (_, k) => {
            const cx = 70 + (k % 5) * 45, cy = 50 + Math.floor(k / 5) * 40;
            const na = (k % 5 + Math.floor(k / 5)) % 2 === 0;
            return <Ball key={k} x={cx} y={cy} r={na ? 11 : 16} c={na ? "#a855f7" : "#22c55e"} label={na ? "Na⁺" : "Cl⁻"} />;
          })}
          <Tag x={160} y={212}>{L(t("ionic crystal NaCl", "իոնային բյուրեղ NaCl", "ионный кристалл NaCl"), lang)}</Tag>
        </g>
      );
    }
    const k = i === 1 ? ease(p) : 0;
    const a = -Math.PI / 2;
    const ex = lerp(80 + Math.cos(a) * 38, 230 + Math.cos(Math.PI * 1.2) * 38, k), ey = lerp(110 + Math.sin(a) * 38, 110 + Math.sin(Math.PI * 1.2) * 38, k);
    return (
      <g>
        <ShellAtom x={80} y={110} sym="Na" shells={i === 0 ? [2, 8, 1] : [2, 8]} color="#a855f7" hide={0} charge={i === 2 ? "+" : undefined} />
        <ShellAtom x={230} y={110} sym="Cl" shells={i === 2 ? [2, 8, 8] : [2, 8, 7]} color="#16a34a" charge={i === 2 ? "−" : undefined} />
        {i <= 1 ? <circle cx={ex} cy={ey} r="4" fill="#f59e0b" stroke="#fff" /> : null}
        {i === 1 ? <Arrow x1={110} y1={58} x2={200} y2={72} color="#f59e0b" width={2} head={6} dash="4 3" /> : null}
        <Tag x={80} y={176}>{i === 2 ? "Na⁺ (2, 8)" : "Na (2, 8, 1)"}</Tag>
        <Tag x={230} y={176}>{i === 2 ? "Cl⁻ (2, 8, 8)" : "Cl (2, 8, 7)"}</Tag>
        {i === 2 ? <Tag x={160} y={206} color="#4f46e5">Na⁺ + Cl⁻ → NaCl</Tag> : null}
      </g>
    );
  },
};

/* ---------------- covalent bond ---------------- */

const covalent: Mech = {
  title: t("How a covalent bond forms", "Ինչպես է առաջանում կովալենտ կապը", "Как образуется ковалентная связь"),
  caps: [
    t("Two hydrogen atoms each have one electron. Neither wants to give its electron away.", "Ջրածնի երկու ատոմներից յուրաքանչյուրն ունի մեկ էլեկտրոն։ Ոչ մեկը չի ուզում տալ իր էլեկտրոնը։", "У каждого из двух атомов водорода по одному электрону. Ни один не хочет его отдавать."),
    t("The atoms come close and their electron clouds overlap.", "Ատոմները մոտենում են, և նրանց էլեկտրոնային ամպերը վրածածկվում են։", "Атомы сближаются, и их электронные облака перекрываются."),
    t("The two electrons form a shared pair that belongs to both atoms: H–H. This is a non-polar covalent bond.", "Երկու էլեկտրոնները կազմում են ընդհանուր զույգ, որը պատկանում է երկու ատոմին․ H–H։ Սա ոչ բևեռային կովալենտ կապ է։", "Два электрона образуют общую пару, принадлежащую обоим атомам: H–H. Это ковалентная неполярная связь."),
    t("In H–Cl the chlorine pulls the shared pair closer (it is more electronegative): a polar bond with δ+ on H and δ− on Cl.", "H–Cl-ում քլորն ընդհանուր զույգն ավելի մոտ է քաշում (այն ավելի էլեկտրաբացասական է)․ բևեռային կապ՝ H-ի վրա δ+, Cl-ի վրա δ−։", "В H–Cl хлор сильнее притягивает общую пару (он более электроотрицателен): полярная связь, δ+ на H и δ− на Cl."),
  ],
  draw: (i, p, lang) => {
    if (i === 3) {
      return (
        <g>
          <circle cx="130" cy="110" r="34" fill="#e0e7ff" opacity="0.8" />
          <circle cx="195" cy="110" r="50" fill="#dcfce7" opacity="0.8" />
          <Ball x={120} y={110} r={12} c="#94a3b8" label="H" />
          <Ball x={205} y={110} r={16} c="#16a34a" label="Cl" />
          <circle cx={164 + Math.sin(p * 6.28) * 2} cy="104" r="4" fill="#2563eb" />
          <circle cx={164 + Math.sin(p * 6.28) * 2} cy="116" r="4" fill="#2563eb" />
          <Tag x={118} y={76} color="#e11d48">δ+</Tag>
          <Tag x={208} y={66} color="#2563eb">δ−</Tag>
          <Tag x={160} y={190}>H–Cl</Tag>
        </g>
      );
    }
    const d = i === 0 ? 70 : i === 1 ? lerp(70, 30, ease(p)) : 30;
    const cx1 = 160 - d, cx2 = 160 + d;
    const a = p * 6.283;
    return (
      <g>
        <circle cx={cx1} cy="110" r="36" fill="#e0e7ff" opacity="0.8" />
        <circle cx={cx2} cy="110" r="36" fill="#e0e7ff" opacity="0.8" />
        <Ball x={cx1} y={110} r={12} c="#94a3b8" label="H" />
        <Ball x={cx2} y={110} r={12} c="#94a3b8" label="H" />
        {i < 2 ? (
          <g>
            <circle cx={cx1 + Math.cos(a) * 26} cy={110 + Math.sin(a) * 26} r="4" fill="#2563eb" />
            <circle cx={cx2 + Math.cos(a + 3) * 26} cy={110 + Math.sin(a + 3) * 26} r="4" fill="#2563eb" />
          </g>
        ) : (
          <g>
            <circle cx={160} cy={103} r="4" fill="#2563eb" />
            <circle cx={160} cy={117} r="4" fill="#2563eb" />
            <Tag x={160} y={70}>{L(t("shared pair", "ընդհանուր զույգ", "общая пара"), lang)}</Tag>
            <Tag x={160} y={190}>H· + ·H → H:H (H–H)</Tag>
          </g>
        )}
      </g>
    );
  },
};

/* ---------------- metallic bond ---------------- */

const metallic: Mech = {
  title: t("How a metallic bond works", "Ինչպես է աշխատում մետաղային կապը", "Как устроена металлическая связь"),
  caps: [
    t("Metal atoms hold their few outer electrons only weakly.", "Մետաղի ատոմները թույլ են պահում իրենց սակավաթիվ արտաքին էլեկտրոնները։", "Атомы металла слабо удерживают свои немногочисленные внешние электроны."),
    t("In a piece of metal these electrons leave their atoms and move freely: positive ions sit in a sea of shared electrons.", "Մետաղի կտորում այդ էլեկտրոնները լքում են ատոմները և ազատ շարժվում․ դրական իոնները գտնվում են ընդհանուր էլեկտրոնների «ծովում»։", "В куске металла эти электроны покидают атомы и свободно движутся: положительные ионы находятся в «море» общих электронов."),
    t("Connect a battery: the free electrons drift towards the + end. That is why metals conduct electricity.", "Միացրո՛ւ մարտկոց․ ազատ էլեկտրոնները շարժվում են դեպի + բևեռը։ Ահա թե ինչու են մետաղները հոսանք հաղորդում։", "Подключи батарейку: свободные электроны дрейфуют к «+». Поэтому металлы проводят ток."),
  ],
  draw: (i, p, lang) => {
    const ions = Array.from({ length: 15 }, (_, k) => ({ x: 60 + (k % 5) * 50, y: 60 + Math.floor(k / 5) * 50 }));
    const drift = i === 2 ? p * 50 : 0;
    return (
      <g>
        <rect x="30" y="30" width="260" height="160" rx="10" fill="#fef3c7" opacity="0.5" />
        {ions.map((c, k) => <Ball key={k} x={c.x} y={c.y} r={14} c="#f59e0b" label={i === 0 ? "Na" : "Na⁺"} />)}
        {ions.map((c, k) => {
          const a = p * 6.283 + k;
          if (i === 0) return <circle key={`e${k}`} cx={c.x + Math.cos(a) * 20} cy={c.y + Math.sin(a) * 20} r="3.5" fill="#2563eb" />;
          const x = 35 + (((c.x - 20 + Math.sin(a * 0.5 + k) * 18 + drift) % 250) + 250) % 250;
          return <circle key={`e${k}`} cx={x} cy={c.y + 25 + Math.cos(a + k) * 6} r="3.5" fill="#2563eb" />;
        })}
        {i === 2 ? (
          <g>
            <rect x="8" y="98" width="14" height="24" fill="#334155" /><text x="15" y="94" textAnchor="middle" className="sim-tag">−</text>
            <rect x="298" y="98" width="14" height="24" fill="#e11d48" /><text x="305" y="94" textAnchor="middle" className="sim-tag">+</text>
            <Arrow x1={110} y1={208} x2={210} y2={208} color="#2563eb" label="e⁻" />
          </g>
        ) : null}
        {i === 1 ? <Tag x={160} y={210}>{L(t("electron sea", "էլեկտրոնների ծով", "электронное море"), lang)}</Tag> : null}
      </g>
    );
  },
};

/* ---------------- electrolysis ---------------- */

const electrolysis: Mech = {
  title: t("Electrolysis of copper(II) chloride", "Պղնձի(II) քլորիդի էլեկտրոլիզ", "Электролиз хлорида меди(II)"),
  caps: [
    t("In the solution CuCl₂ is split into Cu²⁺ and Cl⁻ ions that move randomly.", "Լուծույթում CuCl₂-ը տրոհված է Cu²⁺ և Cl⁻ իոնների, որոնք քաոսային շարժվում են։", "В растворе CuCl₂ распался на ионы Cu²⁺ и Cl⁻, которые движутся хаотично."),
    t("Switch on the current. Positive Cu²⁺ ions move to the negative cathode, Cl⁻ ions to the positive anode.", "Միացրո՛ւ հոսանքը։ Դրական Cu²⁺ իոնները շարժվում են դեպի բացասական կաթոդ, Cl⁻ իոնները՝ դեպի դրական անոդ։", "Включи ток. Положительные ионы Cu²⁺ идут к отрицательному катоду, ионы Cl⁻ — к положительному аноду."),
    t("At the cathode each Cu²⁺ takes two electrons and becomes copper metal: Cu²⁺ + 2e⁻ → Cu (reduction).", "Կաթոդում յուրաքանչյուր Cu²⁺ վերցնում է երկու էլեկտրոն և դառնում մետաղական պղինձ․ Cu²⁺ + 2e⁻ → Cu (վերականգնում)։", "На катоде каждый Cu²⁺ принимает два электрона и становится медью: Cu²⁺ + 2e⁻ → Cu (восстановление)."),
    t("At the anode chloride ions give up electrons and form chlorine gas: 2Cl⁻ − 2e⁻ → Cl₂↑ (oxidation).", "Անոդում քլորիդ իոնները տալիս են էլեկտրոններ և առաջացնում քլոր գազ․ 2Cl⁻ − 2e⁻ → Cl₂↑ (օքսիդացում)։", "На аноде хлорид-ионы отдают электроны и образуют газ хлор: 2Cl⁻ − 2e⁻ → Cl₂↑ (окисление)."),
  ],
  draw: (i, p, lang) => {
    const ions = scatter(12, 110, 100, 100, 80, 3);
    const k = i === 0 ? 0 : i === 1 ? ease(p) : 1;
    return (
      <g>
        <path d="M60,70 L60,200 Q60,206 66,206 L254,206 Q260,206 260,200 L260,70" fill="#bfdbfe" opacity="0.5" />
        <path d="M60,70 L60,200 Q60,206 66,206 L254,206 Q260,206 260,200 L260,70" fill="none" stroke="#64748b" strokeWidth="2" />
        <rect x="84" y="40" width="10" height="150" fill="#475569" />
        <rect x="226" y="40" width="10" height="150" fill="#475569" />
        {i >= 2 ? <rect x="94" y="80" width="4" height="110" fill="#c2410c" opacity={i === 2 ? p : 1} /> : null}
        <path d="M89,40 L89,20 L140,20 M180,20 L231,20 L231,40" fill="none" stroke="#334155" strokeWidth="2" />
        <rect x="140" y="12" width="6" height="16" fill="#334155" /><rect x="152" y="8" width="4" height="24" fill="#334155" />
        <rect x="160" y="12" width="6" height="16" fill="#334155" /><rect x="172" y="8" width="4" height="24" fill="#334155" />
        <Tag x={89} y={58} color="#1d4ed8">− {L(t("cathode", "կաթոդ", "катод"), lang)}</Tag>
        <Tag x={231} y={58} color="#b91c1c">+ {L(t("anode", "անոդ", "анод"), lang)}</Tag>
        {ions.map((d, n) => {
          const cu = n % 3 === 0;
          const tx = cu ? 108 : 214;
          if (i >= 2 && cu && n < 6) return null;
          if (i >= 3 && !cu && n < 8) return null;
          const x = lerp(d.x, tx, k * 0.8) + Math.sin(p * 6.28 + n) * 2;
          return <Ball key={n} x={x} y={d.y} r={cu ? 10 : 9} c={cu ? "#2563eb" : "#16a34a"} label={cu ? "Cu²⁺" : "Cl⁻"} />;
        })}
        {i >= 3 ? [0, 0.33, 0.66].map((o) => <circle key={o} cx={244 + Math.sin((p + o) * 9) * 3} cy={186 - ((p + o) % 1) * 120} r="4" fill="#d9f99d" stroke="#65a30d" />) : null}
        {i === 2 ? <Tag x={160} y={222} color="#c2410c">Cu²⁺ + 2e⁻ → Cu</Tag> : null}
        {i === 3 ? <Tag x={160} y={222} color="#65a30d">2Cl⁻ − 2e⁻ → Cl₂↑</Tag> : null}
      </g>
    );
  },
  h: 230,
};

/* ---------------- dissolving salt ---------------- */

function Water({ x, y, a }: { x: number; y: number; a: number }) {
  const hx = Math.cos(a + 0.9) * 9, hy = Math.sin(a + 0.9) * 9, gx = Math.cos(a - 0.9) * 9, gy = Math.sin(a - 0.9) * 9;
  return (
    <g>
      <circle cx={x + hx} cy={y + hy} r="3.5" fill="#f8fafc" stroke="#94a3b8" />
      <circle cx={x + gx} cy={y + gy} r="3.5" fill="#f8fafc" stroke="#94a3b8" />
      <circle cx={x} cy={y} r="5.5" fill="#ef4444" />
    </g>
  );
}

const dissolve: Mech = {
  title: t("How salt dissolves in water", "Ինչպես է աղը լուծվում ջրում", "Как соль растворяется в воде"),
  caps: [
    t("A salt crystal is built of Na⁺ and Cl⁻ ions. Water molecules are polar: O is slightly negative, H slightly positive.", "Աղի բյուրեղը կազմված է Na⁺ և Cl⁻ իոններից։ Ջրի մոլեկուլները բևեռային են․ O-ն թույլ բացասական է, H-ը՝ թույլ դրական։", "Кристалл соли состоит из ионов Na⁺ и Cl⁻. Молекулы воды полярны: O слегка отрицателен, H слегка положителен."),
    t("Water molecules turn towards the ions at the edge: O towards Na⁺, H towards Cl⁻.", "Ջրի մոլեկուլները շրջվում են եզրի իոնների կողմը․ O-ն դեպի Na⁺, H-ը դեպի Cl⁻։", "Молекулы воды поворачиваются к ионам на краю: O к Na⁺, H к Cl⁻."),
    t("They pull an ion out of the crystal and surround it with a shell: a hydrated ion.", "Նրանք իոնը դուրս են քաշում բյուրեղից և շրջապատում թաղանթով․ առաջանում է հիդրատացված իոն։", "Они вытаскивают ион из кристалла и окружают его оболочкой: получается гидратированный ион."),
    t("Ion by ion the crystal disappears; the ions spread evenly through the water.", "Իոն առ իոն բյուրեղն անհետանում է, իոնները հավասարաչափ բաշխվում են ջրում։", "Ион за ионом кристалл исчезает; ионы равномерно распределяются в воде."),
  ],
  draw: (i, p) => {
    const grid = Array.from({ length: 16 }, (_, k) => ({ x: 100 + (k % 4) * 26, y: 70 + Math.floor(k / 4) * 26, na: ((k % 4) + Math.floor(k / 4)) % 2 === 0 }));
    const out = i === 2 ? ease(p) : i > 2 ? 1 : 0;
    return (
      <g>
        <rect x="10" y="10" width="300" height="200" rx="12" fill="#e0f2fe" opacity="0.6" />
        {grid.map((g, k) => {
          if (i === 3 && k % 3 !== 0) {
            const s = scatter(16, 30, 30, 260, 160, 7)[k];
            return <Ball key={k} x={s.x} y={s.y} r={g.na ? 9 : 12} c={g.na ? "#a855f7" : "#22c55e"} label={g.na ? "Na⁺" : "Cl⁻"} />;
          }
          const moving = k === 3;
          const x = moving ? lerp(g.x, 240, out) : g.x, y = moving ? lerp(g.y, 60, out) : g.y;
          return <Ball key={k} x={x} y={y} r={g.na ? 9 : 12} c={g.na ? "#a855f7" : "#22c55e"} label={g.na ? "Na⁺" : "Cl⁻"} />;
        })}
        {i === 0 ? scatter(10, 30, 30, 260, 170, 2).filter((d) => d.x < 80 || d.x > 210 || d.y > 170).map((d, k) => <Water key={k} x={d.x} y={d.y} a={k + p * 2} />) : null}
        {i >= 1 && i <= 2 ? (() => {
          const ion = grid[3];
          const cx = lerp(ion.x, 240, out), cy = lerp(ion.y, 60, out);
          return [0, 1, 2, 3, 4].map((n) => {
            const a = -1.2 + n * 0.9 + (out * 2);
            const r = 24;
            const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
            return <Water key={n} x={x} y={y} a={a + Math.PI} />;
          });
        })() : null}
        {i === 1 ? [0, 1, 2].map((n) => <Water key={`w${n}`} x={100 - 30} y={70 + 26 * (n + 1) - 13} a={0} />) : null}
      </g>
    );
  },
};

/* ---------------- redox: zinc in copper sulfate ---------------- */

const redox: Mech = {
  title: t("Oxidation and reduction: zinc in copper sulfate", "Օքսիդացում և վերականգնում․ ցինկը պղնձարջասպի լուծույթում", "Окисление и восстановление: цинк в растворе медного купороса"),
  caps: [
    t("A zinc plate stands in a blue solution with Cu²⁺ ions.", "Ցինկե թիթեղը դրված է Cu²⁺ իոններով կապույտ լուծույթում։", "Цинковая пластинка стоит в синем растворе с ионами Cu²⁺."),
    t("A zinc atom gives two electrons and goes into solution as Zn²⁺. Losing electrons is oxidation; zinc is the reducing agent.", "Ցինկի ատոմը տալիս է երկու էլեկտրոն և անցնում լուծույթ որպես Zn²⁺։ Էլեկտրոններ տալը օքսիդացում է, ցինկը վերականգնիչ է։", "Атом цинка отдаёт два электрона и переходит в раствор как Zn²⁺. Отдача электронов — окисление; цинк — восстановитель."),
    t("A Cu²⁺ ion takes the two electrons and becomes a copper atom on the plate. Gaining electrons is reduction; Cu²⁺ is the oxidising agent.", "Cu²⁺ իոնը վերցնում է երկու էլեկտրոնը և դառնում պղնձի ատոմ թիթեղի վրա։ Էլեկտրոններ վերցնելը վերականգնում է, Cu²⁺-ը օքսիդիչ է։", "Ион Cu²⁺ принимает два электрона и становится атомом меди на пластинке. Приём электронов — восстановление; Cu²⁺ — окислитель."),
    t("Overall: Zn + Cu²⁺ → Zn²⁺ + Cu. The electrons lost always equal the electrons gained.", "Ընդհանուր՝ Zn + Cu²⁺ → Zn²⁺ + Cu։ Տրված էլեկտրոնների թիվը միշտ հավասար է ընդունվածների թվին։", "Итог: Zn + Cu²⁺ → Zn²⁺ + Cu. Число отданных электронов всегда равно числу принятых."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    return (
      <g>
        <rect x="40" y="60" width="240" height="140" rx="8" fill="#60a5fa" opacity={i === 3 ? 0.3 : 0.45} />
        <rect x="70" y="30" width="26" height="170" fill="#9ca3af" />
        {i >= 2 ? <rect x="96" y="110" width="5" height={i === 2 ? 30 * k : 60} fill="#c2410c" /> : null}
        <Tag x={83} y={22}>Zn</Tag>
        {i === 1 ? (
          <g>
            <Ball x={lerp(90, 150, k)} y={100} r={11} c="#64748b" label={k > 0.5 ? "Zn²⁺" : "Zn"} />
            <circle cx={lerp(90, 92, k)} cy={lerp(100, 140, k)} r="4" fill="#f59e0b" />
            <circle cx={lerp(90, 92, k)} cy={lerp(100, 150, k)} r="4" fill="#f59e0b" />
            <Tag x={200} y={100} anchor="start" color="#b45309">Zn − 2e⁻ → Zn²⁺</Tag>
            <Tag x={200} y={118} anchor="start" color="#b45309">{L(t("oxidation", "օքսիդացում", "окисление"), lang)}</Tag>
          </g>
        ) : null}
        {i === 2 ? (
          <g>
            <Ball x={150} y={100} r={11} c="#64748b" label="Zn²⁺" />
            <Ball x={lerp(200, 104, k)} y={lerp(170, 130, k)} r={11} c={k > 0.8 ? "#c2410c" : "#2563eb"} label={k > 0.8 ? "Cu" : "Cu²⁺"} />
            <circle cx={lerp(92, 104, k)} cy={140} r="4" fill="#f59e0b" opacity={1 - k} />
            <circle cx={lerp(92, 104, k)} cy={150} r="4" fill="#f59e0b" opacity={1 - k} />
            <Tag x={200} y={100} anchor="start" color="#1d4ed8">Cu²⁺ + 2e⁻ → Cu</Tag>
            <Tag x={200} y={118} anchor="start" color="#1d4ed8">{L(t("reduction", "վերականգնում", "восстановление"), lang)}</Tag>
          </g>
        ) : null}
        {i === 0 || i === 3 ? scatter(i === 0 ? 7 : 3, 130, 80, 130, 100, 2).map((d, n) => <Ball key={n} x={d.x} y={d.y} r={11} c="#2563eb" label="Cu²⁺" />) : null}
        {i === 3 ? (
          <g>
            {scatter(4, 130, 80, 130, 100, 9).map((d, n) => <Ball key={`z${n}`} x={d.x} y={d.y} r={11} c="#64748b" label="Zn²⁺" />)}
            <Tag x={160} y={220} color="#4f46e5">Zn + Cu²⁺ → Zn²⁺ + Cu</Tag>
          </g>
        ) : null}
      </g>
    );
  },
  h: 230,
};

/* ---------------- combustion: breaking and making bonds ---------------- */

const combustion: Mech = {
  title: t("Burning methane: bonds break and form", "Մեթանի այրում․ կապերը քանդվում և առաջանում են", "Горение метана: связи рвутся и образуются"),
  caps: [
    t("One methane molecule CH₄ and two oxygen molecules O₂ collide.", "Մեթանի մեկ մոլեկուլ CH₄ և թթվածնի երկու մոլեկուլ O₂ բախվում են։", "Одна молекула метана CH₄ и две молекулы кислорода O₂ сталкиваются."),
    t("Bonds break and the atoms come apart. Breaking bonds takes energy in.", "Կապերը քանդվում են, և ատոմներն առանձնանում են։ Կապերը քանդելու համար էներգիա է պահանջվում։", "Связи рвутся, атомы расходятся. На разрыв связей энергия затрачивается."),
    t("The atoms join in a new way: CO₂ and two H₂O. Making the new bonds gives out more energy than was taken in.", "Ատոմները միանում են նոր ձևով․ CO₂ և երկու H₂O։ Նոր կապերի առաջացումն ավելի շատ էներգիա է անջատում, քան ծախսվել էր։", "Атомы соединяются по-новому: CO₂ и две H₂O. При образовании новых связей выделяется больше энергии, чем было затрачено."),
    t("The atoms are the same, only rearranged; the extra energy leaves as heat and light: CH₄ + 2O₂ → CO₂ + 2H₂O + Q.", "Ատոմները նույնն են, միայն վերադասավորված․ ավելցուկային էներգիան դուրս է գալիս ջերմության և լույսի ձևով․ CH₄ + 2O₂ → CO₂ + 2H₂O + Q։", "Атомы те же, только переставлены; лишняя энергия выходит теплом и светом: CH₄ + 2O₂ → CO₂ + 2H₂O + Q."),
  ],
  draw: (i, p, lang) => {
    const k = i === 1 || i === 2 ? ease(p) : 1;
    type A = { c: string; l: string; r: number; a: [number, number]; b: [number, number]; z: [number, number] };
    const C = "#334155", H = "#e2e8f0", O = "#ef4444";
    const atoms: A[] = [
      { c: C, l: "C", r: 13, a: [80, 110], b: [80, 110], z: [160, 70] },
      { c: H, l: "H", r: 8, a: [80, 88], b: [60, 70], z: [70, 150] },
      { c: H, l: "H", r: 8, a: [80, 132], b: [60, 150], z: [104, 150] },
      { c: H, l: "H", r: 8, a: [58, 110], b: [30, 110], z: [216, 150] },
      { c: H, l: "H", r: 8, a: [102, 110], b: [120, 120], z: [250, 150] },
      { c: O, l: "O", r: 11, a: [200, 80], b: [190, 60], z: [138, 70] },
      { c: O, l: "O", r: 11, a: [222, 80], b: [240, 70], z: [182, 70] },
      { c: O, l: "O", r: 11, a: [200, 150], b: [190, 160], z: [87, 136] },
      { c: O, l: "O", r: 11, a: [222, 150], b: [250, 170], z: [233, 136] },
    ];
    const pos = (x: A) => (i === 0 ? x.a : i === 1 ? [lerp(x.a[0], x.b[0], k), lerp(x.a[1], x.b[1], k)] : i === 2 ? [lerp(x.b[0], x.z[0], k), lerp(x.b[1], x.z[1], k)] : x.z);
    const P = atoms.map(pos);
    const bonds: Array<[number, number]> = i === 0 ? [[0, 1], [0, 2], [0, 3], [0, 4], [5, 6], [7, 8]] : i === 3 || (i === 2 && k > 0.9) ? [[0, 5], [0, 6], [7, 1], [7, 2], [8, 3], [8, 4]] : [];
    return (
      <g>
        {bonds.map(([a, b], n) => <line key={n} x1={P[a][0]} y1={P[a][1]} x2={P[b][0]} y2={P[b][1]} stroke="#94a3b8" strokeWidth="5" />)}
        {atoms.map((x, n) => <Ball key={n} x={P[n][0]} y={P[n][1]} r={x.r} c={x.c} label={x.l} dark={x.c === H} />)}
        {i === 1 ? <Arrow x1={150} y1={200} x2={150} y2={150} color="#2563eb" label={L(t("energy in", "էներգիա է ծախսվում", "энергия затрачивается"), lang)} labelPos="mid" /> : null}
        {i >= 2 ? [0, 1, 2, 3, 4].map((n) => <Arrow key={n} x1={160 + Math.cos(n * 1.26) * 20} y1={110 + Math.sin(n * 1.26) * 20} x2={160 + Math.cos(n * 1.26) * (40 + 10 * p)} y2={110 + Math.sin(n * 1.26) * (40 + 10 * p)} color="#f97316" width={2.5} head={6} />) : null}
        {i === 3 ? <Tag x={160} y={206} color="#4f46e5">CH₄ + 2O₂ → CO₂ + 2H₂O + Q</Tag> : null}
      </g>
    );
  },
};

/* ---------------- catalyst ---------------- */

const catalyst: Mech = {
  title: t("How a catalyst speeds up a reaction", "Ինչպես է կատալիզատորն արագացնում ռեակցիան", "Как катализатор ускоряет реакцию"),
  caps: [
    t("To react, molecules must climb an energy hill: the activation energy Eₐ.", "Փոխազդելու համար մոլեկուլները պետք է հաղթահարեն էներգետիկ «բլուր»՝ ակտիվացման էներգիան Eₐ։", "Чтобы прореагировать, молекулы должны преодолеть энергетический «холм» — энергию активации Eₐ."),
    t("Only the few molecules with enough energy get over, so the reaction is slow.", "Միայն բավական էներգիա ունեցող քիչ մոլեկուլներն են անցնում, ուստի ռեակցիան դանդաղ է։", "Перевалить могут лишь немногие молекулы с достаточной энергией, поэтому реакция идёт медленно."),
    t("A catalyst offers a different path with a lower hill. Many more molecules get over each second.", "Կատալիզատորն առաջարկում է այլ ճանապարհ՝ ավելի ցածր բլուրով։ Ամեն վայրկյան շատ ավելի մոլեկուլներ են անցնում։", "Катализатор открывает другой путь с более низким холмом. Каждую секунду перевалить успевает гораздо больше молекул."),
    t("The start and the end are the same and the catalyst is not used up: it only makes the way easier.", "Սկիզբը և վերջը նույնն են, իսկ կատալիզատորը չի ծախսվում․ այն միայն հեշտացնում է ճանապարհը։", "Начало и конец те же, а катализатор не расходуется: он лишь облегчает путь."),
  ],
  draw: (i, p, lang) => {
    const curve = (h: number) => (x: number) => 150 - 40 * (x > 240 ? 1 : x < 60 ? 0 : (x - 60) / 180) - h * Math.exp(-(((x - 150) / 34) ** 2));
    const hi = curve(80), lo = curve(35);
    const path = (f: (x: number) => number) => Array.from({ length: 61 }, (_, k) => `${20 + k * 4.67},${f(20 + k * 4.67).toFixed(1)}`).join(" ");
    const useLo = i >= 2;
    const f = useLo ? lo : hi;
    const prog = i === 1 ? Math.min(1, p * 1.3) : i >= 2 ? p : 0;
    const x = i === 1 ? 40 + 100 * Math.sin(prog * Math.PI) * 0.9 : 40 + 240 * prog;
    return (
      <g>
        <line x1="20" y1="190" x2="300" y2="190" stroke="#94a3b8" />
        <line x1="20" y1="190" x2="20" y2="20" stroke="#94a3b8" />
        <text x="24" y="28" className="sim-axis is-name">E</text>
        <polyline points={path(hi)} fill="none" stroke="#e11d48" strokeWidth="3" />
        {useLo ? <polyline points={path(lo)} fill="none" stroke="#16a34a" strokeWidth="3" strokeDasharray="6 4" /> : null}
        <circle cx={x} cy={f(x) - 8} r="8" fill="#4f46e5" />
        <Arrow x1={150} y1={150} x2={150} y2={hi(150) + 2} color="#e11d48" width={2} head={6} label="Eₐ" labelPos="mid" />
        {useLo ? <Arrow x1={170} y1={150} x2={170} y2={lo(150) + 2} color="#16a34a" width={2} head={6} label="Eₐ'" labelPos="mid" /> : null}
        <Tag x={50} y={168}>{L(t("reactants", "ելանյութեր", "реагенты"), lang)}</Tag>
        <Tag x={270} y={128}>{L(t("products", "արգասիքներ", "продукты"), lang)}</Tag>
        {useLo ? <Tag x={210} y={70} anchor="start" color="#16a34a">{L(t("with catalyst", "կատալիզատորով", "с катализатором"), lang)}</Tag> : null}
      </g>
    );
  },
};

export const CHEM_A: Record<string, Mech> = { filtration, distillation, separate, ionic, covalent, metallic, electrolysis, dissolve, redox, combustion, catalyst };
