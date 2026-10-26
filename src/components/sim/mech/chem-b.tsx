"use client";

import { Arrow } from "../kit";
import { L, t, un } from "../labels";
import { ease, Photon, scatter, Tag } from "./draw";
import type { Mech } from "./types";

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;

function Ball({ x, y, r = 8, c, label, dark }: { x: number; y: number; r?: number; c: string; label?: string; dark?: boolean }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={c} stroke="#0f172a" strokeOpacity="0.25" />
      {label ? <text x={x} y={y + 3} textAnchor="middle" fontSize={r > 8 ? 8.5 : 7} fontWeight="900" fill={dark ? "#1e1b4b" : "#fff"}>{label}</text> : null}
    </g>
  );
}

/* ---------------- polymerisation ---------------- */

const polymer: Mech = {
  title: t("Polymerisation of ethylene", "Էթիլենի պոլիմերացում", "Полимеризация этилена"),
  caps: [
    t("Many small ethylene molecules CH₂=CH₂, each with a double bond. They are the monomers.", "Էթիլենի շատ փոքր մոլեկուլներ CH₂=CH₂, յուրաքանչյուրը կրկնակի կապով։ Դրանք մոնոմերներն են։", "Много маленьких молекул этилена CH₂=CH₂, у каждой двойная связь. Это мономеры."),
    t("Heat, pressure and a catalyst open one half of each double bond. Every carbon gets a free hand.", "Ջերմությունը, ճնշումը և կատալիզատորը բացում են յուրաքանչյուր կրկնակի կապի կեսը։ Յուրաքանչյուր ածխածին ստանում է ազատ «ձեռք»։", "Нагрев, давление и катализатор раскрывают половину каждой двойной связи. У каждого углерода появляется свободная «рука»."),
    t("The opened units join hand to hand into one very long chain: polyethylene (−CH₂−CH₂−)ₙ.", "Բացված միավորները միանում են իրար և կազմում մեկ շատ երկար շղթա․ պոլիէթիլեն (−CH₂−CH₂−)ₙ։", "Раскрытые звенья соединяются друг с другом в одну очень длинную цепь: полиэтилен (−CH₂−CH₂−)ₙ."),
  ],
  draw: (i, p, lang) => {
    const n = 5;
    const k = i === 2 ? ease(p) : i > 2 ? 1 : 0;
    return (
      <g>
        {Array.from({ length: n }, (_, m) => {
          const gx = lerp(30 + m * 56 + (m % 2) * 6, 40 + m * 52, k);
          const gy = lerp(70 + (m % 2) * 70, 110, k);
          return (
            <g key={m}>
              {i === 0 ? (
                <g>
                  <line x1={gx} y1={gy - 3} x2={gx + 26} y2={gy - 3} stroke="#475569" strokeWidth="3" />
                  <line x1={gx} y1={gy + 3} x2={gx + 26} y2={gy + 3} stroke="#475569" strokeWidth="3" />
                </g>
              ) : <line x1={gx} y1={gy} x2={gx + 26} y2={gy} stroke="#475569" strokeWidth="3" />}
              {i >= 1 && m < n - 1 ? <line x1={gx + 26} y1={gy} x2={lerp(gx + 26 + 12, 40 + (m + 1) * 52, k)} y2={lerp(gy, 110, k)} stroke={i === 1 ? "#f59e0b" : "#475569"} strokeWidth="3" strokeDasharray={i === 1 ? "3 3" : undefined} /> : null}
              {[gx, gx + 26].map((cx, q) => (
                <g key={q}>
                  <line x1={cx} y1={gy} x2={cx} y2={gy - 18} stroke="#94a3b8" strokeWidth="2" />
                  <line x1={cx} y1={gy} x2={cx} y2={gy + 18} stroke="#94a3b8" strokeWidth="2" />
                  <Ball x={cx} y={gy - 20} r={5} c="#e2e8f0" />
                  <Ball x={cx} y={gy + 20} r={5} c="#e2e8f0" />
                  <Ball x={cx} y={gy} r={8} c="#334155" label="C" />
                </g>
              ))}
            </g>
          );
        })}
        <Tag x={160} y={200} color="#4f46e5">{i === 0 ? "n CH₂=CH₂" : i === 1 ? "n ·CH₂−CH₂·" : "n CH₂=CH₂ → (−CH₂−CH₂−)ₙ"}</Tag>
        {i === 2 ? <Tag x={160} y={30}>{L(t("polyethylene", "պոլիէթիլեն", "полиэтилен"), lang)}</Tag> : null}
      </g>
    );
  },
};

/* ---------------- rusting ---------------- */

const corrosion: Mech = {
  title: t("How iron rusts", "Ինչպես է երկաթը ժանգոտում", "Как ржавеет железо"),
  caps: [
    t("Iron in contact with water and oxygen from the air. Without either of them, iron does not rust.", "Երկաթը շփվում է ջրի և օդի թթվածնի հետ։ Դրանցից որևէ մեկի բացակայության դեպքում երկաթը չի ժանգոտում։", "Железо соприкасается с водой и кислородом воздуха. Без любого из них железо не ржавеет."),
    t("Under the drop iron atoms lose electrons: Fe → Fe²⁺ + 2e⁻. The electrons travel through the metal to the edge of the drop.", "Կաթիլի տակ երկաթի ատոմները կորցնում են էլեկտրոններ․ Fe → Fe²⁺ + 2e⁻։ Էլեկտրոնները մետաղի միջով շարժվում են դեպի կաթիլի եզրը։", "Под каплей атомы железа теряют электроны: Fe → Fe²⁺ + 2e⁻. Электроны идут по металлу к краю капли."),
    t("At the edge oxygen and water take the electrons and form OH⁻. Fe²⁺ and OH⁻ meet and, with more oxygen, become rust Fe₂O₃·nH₂O.", "Եզրում թթվածինը և ջուրը վերցնում են էլեկտրոնները և առաջացնում OH⁻։ Fe²⁺-ը և OH⁻-ը հանդիպում են և թթվածնի հետ վերածվում ժանգի՝ Fe₂O₃·nH₂O։", "На краю кислород и вода забирают электроны и образуют OH⁻. Fe²⁺ и OH⁻ встречаются и с кислородом превращаются в ржавчину Fe₂O₃·nH₂O."),
    t("Protection: paint or oil keeps water and air away; a coat of zinc corrodes first and saves the iron.", "Պաշտպանություն․ ներկը կամ յուղը կտրում են ջուրը և օդը, իսկ ցինկի շերտը քայքայվում է առաջինը և փրկում երկաթը։", "Защита: краска или масло не пускают воду и воздух; слой цинка разрушается первым и спасает железо."),
  ],
  draw: (i, p, lang) => (
    <g>
      <rect x="20" y="140" width="280" height="50" fill={i === 3 ? "#9ca3af" : "#6b7280"} />
      {i === 3 ? <rect x="20" y="134" width="280" height="6" fill="#60a5fa" /> : null}
      {i < 3 ? <path d="M70,140 Q160,60 250,140 Z" fill="#bae6fd" opacity="0.8" /> : null}
      {i >= 2 ? <path d={`M120,140 Q160,${140 - 20 * (i === 2 ? p : 1)} 200,140 Z`} fill="#b45309" opacity="0.8" /> : null}
      {i === 1 ? [0, 1, 2].map((n) => {
        const k = (p + n / 3) % 1;
        return <circle key={n} cx={lerp(160, 240, k)} cy={170} r="4" fill="#f59e0b" />;
      }) : null}
      {i === 1 ? <Ball x={160} y={lerp(140, 110, p)} r={10} c="#64748b" label="Fe²⁺" /> : null}
      {i >= 0 && i < 3 ? (
        <g>
          <Ball x={60} y={60} r={8} c="#ef4444" label="O₂" />
          <Ball x={260} y={50} r={8} c="#ef4444" label="O₂" />
        </g>
      ) : null}
      {i === 2 ? <Ball x={235} y={128} r={9} c="#2563eb" label="OH⁻" /> : null}
      <Tag x={160} y={210}>{i === 1 ? "Fe → Fe²⁺ + 2e⁻" : i === 2 ? "O₂ + 2H₂O + 4e⁻ → 4OH⁻" : i === 3 ? L(t("zinc coating", "ցինկապատում", "оцинковка"), lang) : L(t("iron + water + oxygen", "երկաթ + ջուր + թթվածին", "железо + вода + кислород"), lang)}</Tag>
    </g>
  ),
  h: 220,
};

/* ---------------- blast furnace ---------------- */

const blastfurnace: Mech = {
  title: t("Making iron in a blast furnace", "Չուգունի ստացումը դոմնային վառարանում", "Получение чугуна в доменной печи"),
  caps: [
    t("Iron ore (Fe₂O₃), coke (C) and limestone are loaded at the top; hot air is blown in at the bottom.", "Վերևից լցվում են երկաթի հանքաքար (Fe₂O₃), կոքս (C) և կրաքար, ներքևից փչվում է տաք օդ։", "Сверху загружают железную руду (Fe₂O₃), кокс (C) и известняк; снизу вдувают горячий воздух."),
    t("Coke burns in the hot air: C + O₂ → CO₂. This heats the furnace to about 1500 °C.", "Կոքսն այրվում է տաք օդում․ C + O₂ → CO₂։ Սա վառարանը տաքացնում է մինչև մոտ 1500 °C։", "Кокс горит в горячем воздухе: C + O₂ → CO₂. Это разогревает печь примерно до 1500 °C."),
    t("Higher up CO₂ meets more coke and becomes carbon monoxide: CO₂ + C → 2CO.", "Ավելի վերևում CO₂-ը հանդիպում է կոքսին և վերածվում ածխածնի մոնօքսիդի․ CO₂ + C → 2CO։", "Выше CO₂ встречается с коксом и превращается в угарный газ: CO₂ + C → 2CO."),
    t("CO takes oxygen from the ore: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Molten iron and slag flow to the bottom.", "CO-ն հանքաքարից խլում է թթվածինը․ Fe₂O₃ + 3CO → 2Fe + 3CO₂։ Հալված երկաթը և խարամը հոսում են ներքև։", "CO отнимает кислород у руды: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Расплавленное железо и шлак стекают вниз."),
  ],
  draw: (i, p, lang) => {
    const zone = [null, 175, 120, 70][i];
    return (
      <g>
        <path d="M120,20 L200,20 L230,150 L220,200 L100,200 L90,150 Z" fill="#fde68a" stroke="#78350f" strokeWidth="3" />
        <path d="M100,200 L220,200 L220,186 L100,186 Z" fill="#f97316" />
        <path d="M100,186 L220,186 L220,178 L100,178 Z" fill="#a8a29e" />
        {scatter(30, 112, 30, 96, 140, 5).map((d, k) => <circle key={k} cx={d.x} cy={d.y + (i === 0 ? ((p * 30 + k) % 20) : 0)} r="3" fill={k % 3 === 0 ? "#7f1d1d" : k % 3 === 1 ? "#1f2937" : "#e7e5e4"} />)}
        {zone ? <rect x="98" y={zone - 18} width="124" height="36" fill="#f97316" opacity={0.25 + 0.2 * Math.sin(p * 6.28)} /> : null}
        <Arrow x1={50} y1={170} x2={95} y2={170} color="#e11d48" label="" />
        <Arrow x1={270} y1={170} x2={225} y2={170} color="#e11d48" label="" />
        <Tag x={40} y={160} anchor="middle" color="#e11d48">{L(t("hot air", "տաք օդ", "горячий воздух"), lang)}</Tag>
        <Tag x={160} y={14}>Fe₂O₃ + C + CaCO₃</Tag>
        <Tag x={250} y={196} anchor="start" color="#ea580c">Fe</Tag>
        <Tag x={250} y={182} anchor="start" color="#57534e">{L(t("slag", "խարամ", "шлак"), lang)}</Tag>
        <Tag x={160} y={222} color="#4f46e5">{["", "C + O₂ → CO₂", "CO₂ + C → 2CO", "Fe₂O₃ + 3CO → 2Fe + 3CO₂"][i]}</Tag>
      </g>
    );
  },
  h: 230,
};

/* ---------------- Haber process ---------------- */

const haber: Mech = {
  title: t("Making ammonia: the Haber process", "Ամոնիակի ստացում․ Հաբերի եղանակ", "Синтез аммиака: процесс Габера"),
  caps: [
    t("Nitrogen from the air and hydrogen from natural gas are mixed 1 : 3.", "Օդի ազոտը և բնական գազից ստացված ջրածինը խառնվում են 1 ։ 3 հարաբերությամբ։", "Азот из воздуха и водород из природного газа смешивают в отношении 1 : 3."),
    t("In the reactor (about 450 °C, 200 atm, iron catalyst) part of the gases react: N₂ + 3H₂ ⇌ 2NH₃.", "Ռեակտորում (մոտ 450 °C, 200 մթն, երկաթե կատալիզատոր) գազերի մի մասը փոխազդում է․ N₂ + 3H₂ ⇌ 2NH₃։", "В реакторе (около 450 °C, 200 атм, железный катализатор) часть газов реагирует: N₂ + 3H₂ ⇌ 2NH₃."),
    t("The mixture is cooled: ammonia turns liquid and is drained off. Unreacted N₂ and H₂ go back into the reactor.", "Խառնուրդը սառեցվում է․ ամոնիակը հեղուկանում և հեռացվում է։ Չփոխազդած N₂-ը և H₂-ը վերադառնում են ռեակտոր։", "Смесь охлаждают: аммиак сжижается и отводится. Непрореагировавшие N₂ и H₂ возвращаются в реактор."),
  ],
  draw: (i, p, lang) => {
    const flow = (x1: number, y1: number, x2: number, y2: number, n: number, c: string, l: string) =>
      Array.from({ length: n }, (_, k) => { const q = (p + k / n) % 1; return <Ball key={`${l}${k}`} x={lerp(x1, x2, q)} y={lerp(y1, y2, q)} r={7} c={c} label={l} dark={c === "#e2e8f0"} />; });
    return (
      <g>
        <rect x="120" y="50" width="70" height="110" rx="10" fill="#fecaca" stroke="#b91c1c" strokeWidth="2" />
        <rect x="230" y="60" width="60" height="90" rx="8" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="2" />
        <Tag x={155} y={44}>{L(t("reactor", "ռեակտոր", "реактор"), lang)}</Tag>
        <Tag x={260} y={54}>{L(t("cooler", "սառնարան", "холодильник"), lang)}</Tag>
        <text x="155" y="176" textAnchor="middle" className="sim-small">450 °C · 200 {un("atm", lang)} · Fe</text>
        {i === 0 ? <>{flow(10, 80, 118, 90, 3, "#2563eb", "N₂")}{flow(10, 120, 118, 120, 4, "#e2e8f0", "H₂")}</> : null}
        {i >= 1 ? scatter(8, 128, 60, 54, 90, 2).map((d, k) => <Ball key={k} x={d.x + Math.sin(p * 6.28 + k) * 3} y={d.y} r={7} c={k % 3 === 0 ? "#7c3aed" : k % 3 === 1 ? "#2563eb" : "#e2e8f0"} label={k % 3 === 0 ? "NH₃" : k % 3 === 1 ? "N₂" : "H₂"} dark={k % 3 === 2} />) : null}
        {i === 2 ? (
          <g>
            {flow(192, 100, 228, 100, 2, "#7c3aed", "NH₃")}
            <rect x="232" y="120" width="56" height="28" rx="6" fill="#a78bfa" opacity="0.8" />
            {flow(260, 150, 260, 200, 2, "#7c3aed", "NH₃")}
            <path d="M260,60 L260,20 L155,20 L155,50" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5 4" />
            <Tag x={208} y={14}>{L(t("recycled N₂ + H₂", "N₂ + H₂ վերադարձ", "возврат N₂ + H₂"), lang)}</Tag>
            <Tag x={260} y={214}>{L(t("liquid ammonia", "հեղուկ ամոնիակ", "жидкий аммиак"), lang)}</Tag>
          </g>
        ) : null}
        <Tag x={160} y={200} color="#4f46e5">{i === 1 ? "N₂ + 3H₂ ⇌ 2NH₃ + Q" : ""}</Tag>
      </g>
    );
  },
};

/* ---------------- contact process ---------------- */

const contact: Mech = {
  title: t("Making sulfuric acid: the contact process", "Ծծմբական թթվի ստացում․ կոնտակտային եղանակ", "Получение серной кислоты: контактный способ"),
  caps: [
    t("Sulfur (or pyrite) is burned in air: S + O₂ → SO₂.", "Ծծումբը (կամ պիրիտը) այրվում է օդում․ S + O₂ → SO₂։", "Серу (или пирит) сжигают на воздухе: S + O₂ → SO₂."),
    t("In the contact apparatus SO₂ meets more oxygen on a V₂O₅ catalyst at about 450 °C: 2SO₂ + O₂ ⇌ 2SO₃.", "Կոնտակտային ապարատում SO₂-ը V₂O₅ կատալիզատորի վրա մոտ 450 °C-ում փոխազդում է թթվածնի հետ․ 2SO₂ + O₂ ⇌ 2SO₃։", "В контактном аппарате SO₂ на катализаторе V₂O₅ при 450 °C реагирует с кислородом: 2SO₂ + O₂ ⇌ 2SO₃."),
    t("SO₃ is absorbed in concentrated sulfuric acid, giving oleum, which is then diluted with water: SO₃ + H₂O → H₂SO₄.", "SO₃-ը կլանվում է խիտ ծծմբական թթվով՝ առաջացնելով օլեում, որը հետո նոսրացվում է ջրով․ SO₃ + H₂O → H₂SO₄։", "SO₃ поглощают концентрированной серной кислотой, получая олеум, который затем разбавляют водой: SO₃ + H₂O → H₂SO₄."),
  ],
  draw: (i, p, lang) => (
    <g>
      {[[20, "#fde68a", t("furnace", "վառարան", "печь")], [120, "#e9d5ff", t("contact apparatus", "կոնտակտային ապարատ", "контактный аппарат")], [220, "#bae6fd", t("absorber", "կլանիչ", "поглотитель")]].map(([x, c, n], k) => (
        <g key={k} opacity={k <= i ? 1 : 0.35}>
          <rect x={x as number} y="60" width="80" height="100" rx="10" fill={c as string} stroke="#64748b" strokeWidth="2" />
          <Tag x={(x as number) + 40} y={k === 1 ? 38 : 52}>{L(n as ReturnType<typeof t>, lang)}</Tag>
        </g>
      ))}
      {i === 0 ? [0, 1, 2].map((k) => <path key={k} d={`M${40 + k * 18},150 q-6,-12 0,-${20 + Math.sin(p * 12 + k) * 4} q6,10 0,${20 + Math.sin(p * 12 + k) * 4}`} fill="#3b82f6" opacity="0.8" />) : null}
      {i === 1 ? Array.from({ length: 4 }, (_, k) => <rect key={k} x="128" y={74 + k * 20} width="64" height="6" fill="#a16207" />) : null}
      {i === 2 ? <rect x="222" y="110" width="76" height="48" rx="6" fill="#0ea5e9" opacity="0.5" /> : null}
      {[0, 1].map((k) => { const q = (p + k / 2) % 1; if (i < 1) return null; const x = lerp(100, 120, q); return <Ball key={k} x={x} y={100} r={8} c="#eab308" label="SO₂" dark />; })}
      {i >= 2 ? [0, 1].map((k) => { const q = (p + k / 2) % 1; return <Ball key={`b${k}`} x={lerp(200, 220, q)} y={100} r={8} c="#f97316" label="SO₃" />; }) : null}
      <Tag x={160} y={196} color="#4f46e5">{["S + O₂ → SO₂", "2SO₂ + O₂ ⇌ 2SO₃ (V₂O₅)", "SO₃ + H₂O → H₂SO₄"][i]}</Tag>
    </g>
  ),
};

/* ---------------- soap ---------------- */

function Soap({ x, y, a, c = "#2563eb" }: { x: number; y: number; a: number; c?: string }) {
  const tx = x + Math.cos(a) * 26, ty = y + Math.sin(a) * 26;
  return (
    <g>
      <path d={`M${x},${y} Q${(x + tx) / 2 + Math.sin(a) * 4},${(y + ty) / 2 - Math.cos(a) * 4} ${tx},${ty}`} stroke="#f59e0b" strokeWidth="2.5" fill="none" />
      <circle cx={x} cy={y} r="5" fill={c} />
    </g>
  );
}

const soap: Mech = {
  title: t("How soap washes away grease", "Ինչպես է օճառը լվանում ճարպը", "Как мыло смывает жир"),
  caps: [
    t("A soap particle has a head that loves water and a long tail that hates water but likes fat.", "Օճառի մասնիկն ունի ջուր «սիրող» գլխիկ և երկար պոչ, որը ջուր «չի սիրում», բայց սիրում է ճարպ։", "У частицы мыла есть «любящая воду» головка и длинный хвост, который воду «не любит», зато любит жир."),
    t("The tails dig into a drop of grease; the heads stay outside in the water.", "Պոչերը մխրճվում են ճարպի կաթիլի մեջ, իսկ գլխիկները մնում են դրսում՝ ջրում։", "Хвосты погружаются в каплю жира, а головки остаются снаружи, в воде."),
    t("The grease is lifted off as a tiny ball covered with heads (a micelle) and is rinsed away with the water.", "Ճարպը պոկվում է որպես գլխիկներով պատված փոքրիկ գնդիկ (միցել) և լվացվում ջրով։", "Жир отрывается в виде маленького шарика, покрытого головками (мицелла), и смывается водой."),
  ],
  draw: (i, p, lang) => {
    if (i === 0) {
      return (
        <g>
          <Soap x={80} y={110} a={0} />
          <Tag x={80} y={90} color="#2563eb">{L(t("head: likes water", "գլխիկ՝ սիրում է ջուր", "головка: любит воду"), lang)}</Tag>
          <Tag x={150} y={140} anchor="start" color="#b45309">{L(t("tail: likes fat", "պոչ՝ սիրում է ճարպ", "хвост: любит жир"), lang)}</Tag>
          <text x="80" y="200" className="sim-small">C₁₇H₃₅COO⁻ Na⁺</text>
        </g>
      );
    }
    const lift = i === 2 ? ease(p) * 50 : 0;
    const cx = 160, cy = 160 - lift;
    return (
      <g>
        <rect x="10" y="10" width="300" height="190" fill="#e0f2fe" opacity="0.6" />
        <rect x="10" y="185" width="300" height="20" fill="#cbd5e1" />
        <ellipse cx={cx} cy={cy + (i === 1 ? 10 : 0)} rx={i === 1 ? 50 : 30} ry={i === 1 ? 18 : 28} fill="#fde047" opacity="0.9" />
        {Array.from({ length: 12 }, (_, k) => {
          const a = (k / 12) * Math.PI * 2;
          if (i === 1 && Math.sin(a) > 0.3) return null;
          const R = i === 1 ? 62 : 54;
          return <Soap key={k} x={cx + Math.cos(a) * R} y={cy + Math.sin(a) * (i === 1 ? 30 : R)} a={a + Math.PI} />;
        })}
        <Tag x={160} y={30}>{i === 2 ? L(t("micelle", "միցել", "мицелла"), lang) : L(t("grease", "ճարպ", "жир"), lang)}</Tag>
      </g>
    );
  },
};

/* ---------------- greenhouse effect ---------------- */

const greenhouse: Mech = {
  title: t("The greenhouse effect", "Ջերմոցային էֆեկտ", "Парниковый эффект"),
  dark: true,
  caps: [
    t("Sunlight passes through the air and warms the ground.", "Արևի լույսն անցնում է օդով և տաքացնում գետինը։", "Солнечный свет проходит сквозь воздух и нагревает землю."),
    t("The warm ground gives off invisible infrared rays back towards space.", "Տաք գետինը տիեզերք է ճառագում անտեսանելի ինֆրակարմիր ճառագայթներ։", "Тёплая земля испускает в сторону космоса невидимые инфракрасные лучи."),
    t("CO₂, water vapour and methane absorb the infrared and send part of it back down: the air stays warmer.", "CO₂-ը, ջրային գոլորշին և մեթանը կլանում են ինֆրակարմիրը և դրա մի մասը հետ ուղարկում ներքև․ օդը մնում է ավելի տաք։", "CO₂, водяной пар и метан поглощают инфракрасные лучи и часть возвращают вниз: воздух остаётся теплее."),
    t("Burning fuel adds more CO₂, so more heat is held back and the climate warms.", "Վառելիքի այրումն ավելացնում է CO₂, ուստի ավելի շատ ջերմություն է պահվում, և կլիման տաքանում է։", "Сжигание топлива добавляет CO₂, поэтому удерживается больше тепла и климат теплеет."),
  ],
  draw: (i, p, lang) => (
    <g>
      <circle cx="40" cy="30" r="20" fill="#facc15" />
      <rect x="0" y="180" width="320" height="40" fill="#15803d" />
      <rect x="0" y="80" width="320" height="50" fill="#93c5fd" opacity={0.12 + (i === 3 ? 0.18 : 0)} />
      {scatter(i === 3 ? 14 : 6, 10, 84, 300, 40, 2).map((d, k) => <Ball key={k} x={d.x} y={d.y} r={7} c="#64748b" label="CO₂" />)}
      <Photon x1={60} y1={46} x2={lerp(70, 140, ease(p))} y2={lerp(60, 178, ease(p))} color="#facc15" waves={6} />
      {i >= 1 ? <Photon x1={180} y1={178} x2={lerp(180, 230, ease(p))} y2={lerp(178, 20, ease(p))} color="#f87171" waves={4} /> : null}
      {i >= 2 ? <Photon x1={240} y1={100} x2={lerp(240, 270, ease(p))} y2={lerp(100, 178, ease(p))} color="#f87171" waves={3} /> : null}
      {i === 3 ? <Photon x1={120} y1={110} x2={lerp(120, 100, ease(p))} y2={lerp(110, 178, ease(p))} color="#f87171" waves={3} /> : null}
      <Tag x={160} y={206} color="#fff">{L(t("ground", "գետին", "земля"), lang)}</Tag>
      {i >= 1 ? <Tag x={250} y={30} color="#f87171">IR</Tag> : null}
    </g>
  ),
};

/* ---------------- water hardness ---------------- */

const hardness: Mech = {
  title: t("Hard water and how to soften it", "Կոշտ ջուր և դրա փափկեցումը", "Жёсткая вода и её умягчение"),
  caps: [
    t("Water flowing through limestone picks up Ca²⁺ and Mg²⁺ ions. Such water is hard: soap lathers poorly and scale forms.", "Կրաքարի միջով հոսող ջուրը վերցնում է Ca²⁺ և Mg²⁺ իոններ։ Այդպիսի ջուրը կոշտ է․ օճառը վատ է փրփրում և առաջանում է նստվածք։", "Вода, текущая через известняк, набирает ионы Ca²⁺ и Mg²⁺. Такая вода жёсткая: мыло плохо мылится, образуется накипь."),
    t("Boiling removes temporary hardness: Ca(HCO₃)₂ → CaCO₃↓ + CO₂↑ + H₂O. The CaCO₃ is the scale in a kettle.", "Եռացումը վերացնում է ժամանակավոր կոշտությունը․ Ca(HCO₃)₂ → CaCO₃↓ + CO₂↑ + H₂O։ CaCO₃-ը թեյնիկի նստվածքն է։", "Кипячение устраняет временную жёсткость: Ca(HCO₃)₂ → CaCO₃↓ + CO₂↑ + H₂O. CaCO₃ — это накипь в чайнике."),
    t("Washing soda removes permanent hardness too: Ca²⁺ + CO₃²⁻ → CaCO₃↓. The water becomes soft.", "Լվացքի սոդան վերացնում է նաև մշտական կոշտությունը․ Ca²⁺ + CO₃²⁻ → CaCO₃↓։ Ջուրը դառնում է փափուկ։", "Сода устраняет и постоянную жёсткость: Ca²⁺ + CO₃²⁻ → CaCO₃↓. Вода становится мягкой."),
  ],
  draw: (i, p, lang) => {
    const ions = scatter(8, 90, 80, 140, 80, 4);
    const k = i >= 1 ? ease(p) : 0;
    return (
      <g>
        <path d="M80,60 L80,190 Q80,198 88,198 L232,198 Q240,198 240,190 L240,60" fill="#bae6fd" opacity="0.6" />
        <path d="M80,60 L80,190 Q80,198 88,198 L232,198 Q240,198 240,190 L240,60" fill="none" stroke="#64748b" strokeWidth="2" />
        {i === 1 ? <path d="M150,220 L170,220 L164,206 L156,206 Z" fill="#475569" /> : null}
        {i === 1 ? [0, 0.5].map((o) => <circle key={o} cx={120 + o * 80} cy={190 - ((p + o) % 1) * 120} r="4" fill="#fff" stroke="#94a3b8" />) : null}
        {ions.map((d, n) => (
          <Ball key={n} x={lerp(d.x, 96 + n * 16, k)} y={lerp(d.y, 190, k)} r={9} c={i >= 1 && k > 0.8 ? "#e7e5e4" : n % 2 ? "#65a30d" : "#16a34a"} label={i >= 1 && k > 0.8 ? "CaCO₃" : n % 2 ? "Mg²⁺" : "Ca²⁺"} dark={i >= 1 && k > 0.8} />
        ))}
        <Tag x={160} y={44}>{i === 0 ? L(t("hard water", "կոշտ ջուր", "жёсткая вода"), lang) : i === 1 ? L(t("boiling", "եռացում", "кипячение"), lang) : "+ Na₂CO₃"}</Tag>
      </g>
    );
  },
  h: 230,
};

/* ---------------- esterification ---------------- */

const ester: Mech = {
  title: t("Making an ester", "Էսթերի ստացում", "Получение сложного эфира"),
  caps: [
    t("Acetic acid and ethanol are warmed with a little concentrated sulfuric acid as catalyst.", "Քացախաթթուն և էթանոլը տաքացվում են մի քիչ խիտ ծծմբական թթվի (կատալիզատոր) հետ։", "Уксусную кислоту и этанол нагревают с небольшим количеством концентрированной серной кислоты (катализатор)."),
    t("The OH group leaves the acid and the H leaves the alcohol: together they form a water molecule.", "OH խումբը պոկվում է թթվից, H-ը՝ սպիրտից․ միասին նրանք առաջացնում են ջրի մոլեկուլ։", "Группа OH уходит от кислоты, а H — от спирта: вместе они образуют молекулу воды."),
    t("The two remaining parts join through oxygen: ethyl acetate, an ester with a fruity smell. The reaction is reversible.", "Մնացած երկու մասերը միանում են թթվածնի միջոցով․ էթիլացետատ՝ մրգային հոտով էսթեր։ Ռեակցիան դարձելի է։", "Оставшиеся части соединяются через кислород: этилацетат — сложный эфир с фруктовым запахом. Реакция обратима."),
  ],
  draw: (i, p) => {
    const k = i >= 1 ? ease(p) : 0;
    const box = (x: number, y: number, w: number, c: string, txt: string) => (
      <g>
        <rect x={x} y={y} width={w} height="28" rx="8" fill={c} />
        <text x={x + w / 2} y={y + 18} textAnchor="middle" fontSize="12" fontWeight="900" fill="#1e1b4b">{txt}</text>
      </g>
    );
    return (
      <g>
        {box(i === 2 ? lerp(40, 70, k) : 40, 70, 80, "#fde68a", "CH₃CO")}
        {box(i === 2 ? 1000 : lerp(120, 130, k), i >= 1 ? lerp(70, 150, k) : 70, 36, "#fecaca", "OH")}
        {box(i === 2 ? 1000 : lerp(170, 170, k), i >= 1 ? lerp(70, 150, k) : 70, 22, "#fecaca", "H")}
        {box(i === 2 ? lerp(192, 150, k) : 192, 70, 90, "#bbf7d0", "OC₂H₅")}
        {i === 2 ? box(130, 150, 60, "#bae6fd", "H₂O") : null}
        <Tag x={160} y={200} color="#4f46e5">CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O</Tag>
        <text x="160" y="40" textAnchor="middle" className="sim-small">H₂SO₄, t°</text>
      </g>
    );
  },
};

/* ---------------- DNA copying ---------------- */

const dna: Mech = {
  title: t("How DNA copies itself", "Ինչպես է ԴՆԹ-ն կրկնապատկվում", "Как копируется ДНК"),
  caps: [
    t("DNA is two strands joined by base pairs: A always with T, G always with C.", "ԴՆԹ-ն երկու շղթա է, որոնք միացած են հիմքերի զույգերով․ A-ն միշտ T-ի հետ, G-ն միշտ C-ի հետ։", "ДНК — две цепи, соединённые парами оснований: A всегда с T, G всегда с C."),
    t("The double helix unzips: the weak hydrogen bonds between the bases break.", "Կրկնակի պարույրը բացվում է․ հիմքերի միջև թույլ ջրածնային կապերը քանդվում են։", "Двойная спираль расплетается: слабые водородные связи между основаниями рвутся."),
    t("New bases pair up with each open strand by the same rule. Two identical DNA molecules appear, each with one old strand.", "Նույն կանոնով նոր հիմքերը զույգվում են յուրաքանչյուր բաց շղթայի հետ։ Առաջանում են ԴՆԹ-ի երկու նույնական մոլեկուլներ, յուրաքանչյուրում մեկ հին շղթա։", "К каждой открытой цепи по тому же правилу пристраиваются новые основания. Получаются две одинаковые молекулы ДНК, в каждой одна старая цепь."),
  ],
  draw: (i, p) => {
    const seq = ["A", "T", "G", "C", "C", "A", "G", "T"];
    const pair: Record<string, string> = { A: "T", T: "A", G: "C", C: "G" };
    const col: Record<string, string> = { A: "#ef4444", T: "#f59e0b", G: "#22c55e", C: "#3b82f6" };
    const open = i === 0 ? 0 : i === 1 ? ease(p) : 1;
    return (
      <g>
        {seq.map((b, k) => {
          const y = 30 + k * 22;
          const gap = 20 + open * 50;
          const fill = i === 2 ? (k / seq.length < ease(p) + 0.1 ? 1 : 0) : 0;
          return (
            <g key={k}>
              <rect x={160 - gap - 26} y={y - 8} width="26" height="16" rx="4" fill={col[b]} />
              <text x={160 - gap - 13} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="900" fill="#fff">{b}</text>
              <rect x={160 + gap} y={y - 8} width="26" height="16" rx="4" fill={col[pair[b]]} />
              <text x={160 + gap + 13} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="900" fill="#fff">{pair[b]}</text>
              {open < 0.3 ? <line x1={160 - gap} x2={160 + gap} y1={y} y2={y} stroke="#94a3b8" strokeDasharray="2 2" /> : null}
              {fill ? (
                <g>
                  <rect x={160 - gap + 4} y={y - 8} width="26" height="16" rx="4" fill={col[pair[b]]} opacity="0.85" stroke="#1e1b4b" strokeDasharray="2 2" />
                  <text x={160 - gap + 17} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="900" fill="#fff">{pair[b]}</text>
                  <rect x={160 + gap - 30} y={y - 8} width="26" height="16" rx="4" fill={col[b]} opacity="0.85" stroke="#1e1b4b" strokeDasharray="2 2" />
                  <text x={160 + gap - 17} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="900" fill="#fff">{b}</text>
                </g>
              ) : null}
            </g>
          );
        })}
        <line x1={160 - 20 - open * 50 - 28} x2={160 - 20 - open * 50 - 28} y1="20" y2="200" stroke="#475569" strokeWidth="4" />
        <line x1={160 + 20 + open * 50 + 28} x2={160 + 20 + open * 50 + 28} y1="20" y2="200" stroke="#475569" strokeWidth="4" />
      </g>
    );
  },
};

/* ---------------- acid rain ---------------- */

const acidrain: Mech = {
  title: t("How acid rain forms", "Ինչպես են առաջանում թթվային անձրևները", "Как образуются кислотные дожди"),
  caps: [
    t("Power stations and cars burn fuel that contains sulfur and release SO₂ and nitrogen oxides.", "Էլեկտրակայանները և մեքենաներն այրում են ծծումբ պարունակող վառելիք և արտանետում SO₂ և ազոտի օքսիդներ։", "Электростанции и машины сжигают топливо с серой и выбрасывают SO₂ и оксиды азота."),
    t("In the clouds these oxides react with oxygen and water and form sulfuric and nitric acids.", "Ամպերում այդ օքսիդները փոխազդում են թթվածնի և ջրի հետ և առաջացնում ծծմբական և ազոտական թթուներ։", "В облаках эти оксиды реагируют с кислородом и водой и образуют серную и азотную кислоты."),
    t("The rain becomes acidic (pH below 5.6): it harms forests, fish in lakes and stone buildings.", "Անձրևը դառնում է թթվային (pH 5,6-ից ցածր)․ այն վնասում է անտառներին, լճերի ձկներին և քարե շենքերին։", "Дождь становится кислым (pH ниже 5,6): он вредит лесам, рыбе в озёрах и каменным зданиям."),
  ],
  draw: (i, p, lang) => (
    <g>
      <rect x="30" y="120" width="30" height="80" fill="#64748b" />
      <rect x="0" y="200" width="320" height="20" fill="#65a30d" />
      <ellipse cx="200" cy="50" rx="80" ry="26" fill="#cbd5e1" />
      {[0, 1, 2].map((k) => { const q = (p + k / 3) % 1; return <Ball key={k} x={lerp(45, 170 + k * 20, q)} y={lerp(110, 60, q)} r={8} c="#eab308" label={k === 1 ? "NO₂" : "SO₂"} dark />; })}
      {i >= 1 ? <text x="200" y="54" textAnchor="middle" fontSize="11" fontWeight="900" fill="#1e1b4b">H₂SO₄ · HNO₃</text> : null}
      {i === 2 ? Array.from({ length: 10 }, (_, k) => <line key={k} x1={140 + k * 13} x2={136 + k * 13} y1={80 + ((p * 100 + k * 17) % 110)} y2={90 + ((p * 100 + k * 17) % 110)} stroke="#a3e635" strokeWidth="2" />) : null}
      {i === 2 ? (
        <g>
          <path d="M260,200 L270,150 L280,200 Z" fill="#a16207" opacity="0.6" />
          <circle cx="270" cy="150" r="16" fill="#a3a3a3" />
        </g>
      ) : null}
      <Tag x={160} y={192} color="#1e1b4b">{["S + O₂ → SO₂", "2SO₂ + O₂ + 2H₂O → 2H₂SO₄", lang === "en" ? "pH < 5.6" : "pH < 5,6"][i]}</Tag>
    </g>
  ),
  h: 220,
};

export const CHEM_B: Record<string, Mech> = { polymer, corrosion, blastfurnace, haber, contact, soap, greenhouse, hardness, ester, dna, acidrain };
