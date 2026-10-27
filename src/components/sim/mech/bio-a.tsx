"use client";

import type { ArtLang } from "@/lib/art/spec";
import { L, t } from "../labels";
import { ease, Photon, Tag } from "./draw";
import type { Mech } from "./types";

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const rad = (a: number) => (a * Math.PI) / 180;
const T = (lang: ArtLang, en: string, hy: string, ru: string) => L(t(en, hy, ru), lang);

/** One chromatid: a rounded rod, optionally with a swapped tip after crossing over. */
function Chromatid({ x, y, len, c, tip }: { x: number; y: number; len: number; c: string; tip?: string }) {
  return (
    <g>
      <rect x={x - 3.5} y={y - len / 2} width="7" height={len} rx="3.5" fill={c} />
      {tip ? <rect x={x - 3.5} y={y + len * 0.12} width="7" height={len * 0.38} rx="3.5" fill={tip} /> : null}
    </g>
  );
}

/** A doubled chromosome: two sister chromatids held at the centromere. */
function Chromo({ x, y, len, c, tips = [] }: { x: number; y: number; len: number; c: string; tips?: Array<string | undefined> }) {
  return (
    <g>
      <Chromatid x={x - 4} y={y} len={len} c={c} tip={tips[0]} />
      <Chromatid x={x + 4} y={y} len={len} c={c} tip={tips[1]} />
      <circle cx={x} cy={y} r="3" fill="#1e1b4b" />
    </g>
  );
}

const RED = "#dc2626", PINK = "#f9a8d4", BLUE = "#2563eb", SKY = "#7dd3fc";
const SET = [
  { c: RED, len: 30 },
  { c: PINK, len: 30 },
  { c: BLUE, len: 20 },
  { c: SKY, len: 20 },
];

function Cell({ cx, cy, rx, ry }: { cx: number; cy: number; rx: number; ry: number }) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#ecfdf5" stroke="#10b981" strokeWidth="2.5" />;
}

/* ---------------- mitosis ---------------- */

const mitosis: Mech = {
  title: t("Mitosis: one cell becomes two", "Միտոզ․ մեկ բջջից՝ երկու", "Митоз: из одной клетки две"),
  caps: [
    t("Interphase: the cell grows and copies every DNA molecule. The chromosomes are still long thin threads.", "Ինտերֆազ․ բջիջն աճում է և կրկնապատկում ԴՆԹ-ի յուրաքանչյուր մոլեկուլ։ Քրոմոսոմները դեռ երկար բարակ թելեր են։", "Интерфаза: клетка растёт и удваивает каждую молекулу ДНК. Хромосомы пока длинные тонкие нити."),
    t("Prophase: the chromosomes coil up and become visible, each made of two sister chromatids. The nuclear envelope breaks down.", "Պրոֆազ․ քրոմոսոմները պարուրվում և տեսանելի են դառնում, յուրաքանչյուրը երկու քույր քրոմատիդից։ Կորիզաթաղանթը քայքայվում է։", "Профаза: хромосомы спирализуются и становятся видны, каждая из двух сестринских хроматид. Ядерная оболочка распадается."),
    t("Metaphase: spindle fibres from the two poles line the chromosomes up on the equator of the cell.", "Մետաֆազ․ երկու բևեռներից եկող իլիկի թելերը քրոմոսոմները շարում են բջջի հասարակածում։", "Метафаза: нити веретена от двух полюсов выстраивают хромосомы по экватору клетки."),
    t("Anaphase: the sister chromatids split and are pulled to opposite poles. Each pole gets one copy of every chromosome.", "Անաֆազ․ քույր քրոմատիդները բաժանվում են և քաշվում հակառակ բևեռներ։ Յուրաքանչյուր բևեռ ստանում է ամեն քրոմոսոմի մեկ օրինակ։", "Анафаза: сестринские хроматиды расходятся к противоположным полюсам. Каждый полюс получает по копии каждой хромосомы."),
    t("Telophase: two new nuclei form and the cytoplasm divides. Two daughter cells, each with the same 2n set as the mother cell.", "Թելոֆազ․ ձևավորվում են երկու նոր կորիզներ, և ցիտոպլազման բաժանվում է։ Երկու դուստր բջիջ, յուրաքանչյուրը մայրական բջջի նույն 2n հավաքակազմով։", "Телофаза: образуются два новых ядра, и цитоплазма делится. Две дочерние клетки с тем же набором 2n, что у материнской."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    const ys = [52, 88, 128, 164];
    const name = [
      T(lang, "Interphase", "Ինտերֆազ", "Интерфаза"),
      T(lang, "Prophase", "Պրոֆազ", "Профаза"),
      T(lang, "Metaphase", "Մետաֆազ", "Метафаза"),
      T(lang, "Anaphase", "Անաֆազ", "Анафаза"),
      T(lang, "Telophase: 2 cells, 2n = 4", "Թելոֆազ․ 2 բջիջ, 2n = 4", "Телофаза: 2 клетки, 2n = 4"),
    ][i];
    if (i === 4) {
      return (
        <g>
          {[88, 232].map((cx) => (
            <g key={cx}>
              <Cell cx={cx} cy={105} rx={lerp(78, 68, k)} ry={78} />
              <circle cx={cx} cy={105} r="36" fill="#f5f3ff" stroke="#a78bfa" strokeWidth="1.5" />
              {SET.map((s, j) => <Chromatid key={j} x={cx - 18 + j * 12} y={105} len={s.len} c={s.c} />)}
            </g>
          ))}
          <Tag x={160} y={208}>{name}</Tag>
        </g>
      );
    }
    return (
      <g>
        <Cell cx={160} cy={108} rx={125} ry={86} />
        {i === 0 ? (
          <g>
            <circle cx="160" cy="108" r="55" fill="#f5f3ff" stroke="#a78bfa" strokeWidth="1.5" />
            {SET.map((s, j) => (
              <path key={j} d={`M${125 + j * 8},${80 + j * 14} q20,${-14 + j * 4} 34,${8 - j * 2} t36,${6 + j * 3}`} fill="none" stroke={s.c} strokeWidth="2.5" strokeDasharray={k > 0.5 ? "none" : "3 2"} />
            ))}
            <Tag x={160} y={185} plain color="#64748b">{k > 0.5 ? "DNA × 2" : "DNA"}</Tag>
          </g>
        ) : null}
        {i === 1 ? (
          <g>
            <circle cx="160" cy="108" r="55" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="6 6" opacity={1 - 0.7 * k} />
            {SET.map((s, j) => <Chromo key={j} x={[132, 186, 142, 190][j]} y={[86, 92, 134, 136][j]} len={s.len * (0.6 + 0.4 * k)} c={s.c} />)}
            {[40, 280].map((x) => <circle key={x} cx={x} cy={108} r="5" fill="#f59e0b" />)}
          </g>
        ) : null}
        {i >= 2 ? (
          <g>
            {[40, 280].map((x) => <circle key={x} cx={x} cy={108} r="5" fill="#f59e0b" />)}
            {ys.map((y, j) => {
              const d = i === 3 ? 92 * k : 0;
              return (
                <g key={j}>
                  <line x1="40" y1="108" x2={156 - d} y2={y} stroke="#cbd5e1" />
                  <line x1="280" y1="108" x2={164 + d} y2={y} stroke="#cbd5e1" />
                </g>
              );
            })}
            {i === 2 ? <line x1="160" y1="30" x2="160" y2="186" stroke="#94a3b8" strokeDasharray="4 4" /> : null}
            {ys.map((y, j) => (i === 2 ? (
              <Chromo key={j} x={160} y={y} len={SET[j].len} c={SET[j].c} />
            ) : (
              <g key={j}>
                <Chromatid x={156 - 92 * k} y={y} len={SET[j].len} c={SET[j].c} />
                <Chromatid x={164 + 92 * k} y={y} len={SET[j].len} c={SET[j].c} />
              </g>
            )))}
          </g>
        ) : null}
        <Tag x={160} y={210}>{name}</Tag>
      </g>
    );
  },
};

/* ---------------- meiosis ---------------- */

const meiosis: Mech = {
  title: t("Meiosis: four different sex cells", "Մեյոզ․ չորս տարբեր սեռական բջիջ", "Мейоз: четыре разные половые клетки"),
  caps: [
    t("A diploid cell (2n = 4 here): two pairs of homologous chromosomes, one of each pair from the mother (red, blue) and one from the father (pink, light blue). The DNA is already copied.", "Դիպլոիդ բջիջ (այստեղ 2n = 4)․ հոմոլոգ քրոմոսոմների երկու զույգ, յուրաքանչյուր զույգից մեկը մորից է (կարմիր, կապույտ), մյուսը՝ հորից (վարդագույն, երկնագույն)։ ԴՆԹ-ն արդեն կրկնապատկված է։", "Диплоидная клетка (здесь 2n = 4): две пары гомологичных хромосом, одна из каждой пары от матери (красная, синяя), другая от отца (розовая, голубая). ДНК уже удвоена."),
    t("Prophase I: homologous chromosomes pair up and swap pieces. This crossing over mixes the mother's and father's genes.", "Պրոֆազ I․ հոմոլոգ քրոմոսոմները զույգվում են և փոխանակում հատվածներ։ Այս տրամախաչումը խառնում է մոր և հոր գեները։", "Профаза I: гомологичные хромосомы объединяются в пары и обмениваются участками. Этот кроссинговер перемешивает гены матери и отца."),
    t("Meiosis I: the homologous chromosomes of each pair go to different cells. Each cell is now haploid (n = 2), but each chromosome still has two chromatids.", "Մեյոզ I․ յուրաքանչյուր զույգի հոմոլոգ քրոմոսոմները գնում են տարբեր բջիջներ։ Յուրաքանչյուր բջիջ այժմ հապլոիդ է (n = 2), բայց ամեն քրոմոսոմ դեռ երկու քրոմատիդ ունի։", "Мейоз I: гомологичные хромосомы каждой пары расходятся в разные клетки. Каждая клетка теперь гаплоидна (n = 2), но в каждой хромосоме ещё две хроматиды."),
    t("Meiosis II works like mitosis: the chromatids separate. The result is four haploid cells, and no two of them carry the same mix of genes.", "Մեյոզ II-ն ընթանում է միտոզի պես․ քրոմատիդները բաժանվում են։ Արդյունքում ստացվում է չորս հապլոիդ բջիջ, և դրանցից ոչ մի երկուսը գեների նույն խառնուրդը չունեն։", "Мейоз II идёт как митоз: хроматиды расходятся. В итоге четыре гаплоидные клетки, и никакие две не несут одинаковый набор генов."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    if (i === 3) {
      const cells: Array<Array<[string, string | undefined, number]>> = [
        [[RED, undefined, 30], [BLUE, undefined, 20]],
        [[RED, PINK, 30], [BLUE, undefined, 20]],
        [[PINK, RED, 30], [SKY, undefined, 20]],
        [[PINK, undefined, 30], [SKY, undefined, 20]],
      ];
      return (
        <g>
          {cells.map((cs, j) => {
            const cx = 42 + j * 79;
            return (
              <g key={j}>
                <Cell cx={cx} cy={100} rx={34} ry={lerp(44, 48, k)} />
                {cs.map(([c, tip, len], m) => <Chromatid key={m} x={cx - 8 + m * 16} y={100} len={len} c={c} tip={tip} />)}
              </g>
            );
          })}
          <Tag x={160} y={185}>{T(lang, "4 cells, n = 2, all different", "4 բջիջ, n = 2, բոլորը տարբեր", "4 клетки, n = 2, все разные")}</Tag>
        </g>
      );
    }
    if (i === 2) {
      return (
        <g>
          {[88, 232].map((cx, j) => (
            <g key={cx}>
              <Cell cx={cx} cy={100} rx={66} ry={72} />
              <Chromo x={cx - 16} y={100} len={30} c={j ? PINK : RED} tips={j ? [RED, undefined] : [undefined, PINK]} />
              <Chromo x={cx + 18} y={100} len={20} c={j ? SKY : BLUE} />
            </g>
          ))}
          <Tag x={160} y={198}>{T(lang, "Meiosis I: 2 cells, n = 2", "Մեյոզ I․ 2 բջիջ, n = 2", "Мейоз I: 2 клетки, n = 2")}</Tag>
        </g>
      );
    }
    const paired = i === 1 ? k : 0;
    return (
      <g>
        <Cell cx={160} cy={105} rx={125} ry={86} />
        <Chromo x={lerp(110, 140, paired)} y={lerp(80, 105, paired)} len={30} c={RED} tips={[undefined, paired > 0.6 ? PINK : undefined]} />
        <Chromo x={lerp(200, 157, paired)} y={lerp(78, 105, paired)} len={30} c={PINK} tips={[paired > 0.6 ? RED : undefined, undefined]} />
        <Chromo x={lerp(120, 190, paired)} y={lerp(140, 105, paired)} len={20} c={BLUE} />
        <Chromo x={lerp(205, 207, paired)} y={lerp(135, 105, paired)} len={20} c={SKY} />
        <Tag x={160} y={210}>{i === 0 ? "2n = 4" : T(lang, "Crossing over", "Տրամախաչում", "Кроссинговер")}</Tag>
      </g>
    );
  },
};

/* ---------------- protein synthesis ---------------- */

const BASE: Record<string, string> = { A: "#ef4444", T: "#f59e0b", U: "#8b5cf6", G: "#22c55e", C: "#3b82f6" };
const TEMPLATE = "TACCGTAAACCG";
const RNA: Record<string, string> = { T: "A", A: "U", C: "G", G: "C" };
const MRNA = [...TEMPLATE].map((b) => RNA[b]).join("");
const AMINO = ["Met", "Ala", "Phe", "Gly"];
const AMINO_C = ["#f97316", "#14b8a6", "#e11d48", "#6366f1"];

function Bases({ seq, x, y, n = seq.length }: { seq: string; x: number; y: number; n?: number }) {
  return (
    <g>
      {[...seq].slice(0, n).map((b, j) => (
        <g key={j}>
          <rect x={x + j * 20} y={y} width="18" height="16" rx="3" fill={BASE[b]} />
          <text x={x + j * 20 + 9} y={y + 12} textAnchor="middle" fontSize="10" fontWeight="900" fill="#fff">{b}</text>
        </g>
      ))}
    </g>
  );
}

const protein: Mech = {
  title: t("From gene to protein", "Գենից մինչև սպիտակուց", "От гена к белку"),
  caps: [
    t("Transcription: in the nucleus a gene unwinds and an mRNA copy is built on one DNA strand. RNA uses U instead of T.", "Տրանսկրիպցիա․ կորիզում գենը բացվում է, և ԴՆԹ-ի մի շղթայի վրա կառուցվում է իՌՆԹ-ի պատճենը։ ՌՆԹ-ում T-ի փոխարեն U է։", "Транскрипция: в ядре ген расплетается, и на одной цепи ДНК строится копия — иРНК. В РНК вместо T стоит U."),
    t("The mRNA leaves the nucleus through a nuclear pore and goes to a ribosome in the cytoplasm.", "իՌՆԹ-ն կորիզաթաղանթի ծակոտիով դուրս է գալիս կորիզից և գնում ցիտոպլազմայի ռիբոսոմ։", "иРНК выходит из ядра через ядерную пору и попадает к рибосоме в цитоплазме."),
    t("Translation: the ribosome reads the mRNA three bases at a time. For each codon a tRNA brings its amino acid: AUG is Met, GCA Ala, UUU Phe, GGC Gly.", "Տրանսլյացիա․ ռիբոսոմը կարդում է իՌՆԹ-ն երեքական հիմքով։ Յուրաքանչյուր կոդոնի համար տՌՆԹ-ն բերում է իր ամինաթթուն․ AUG-ն Met է, GCA-ն՝ Ala, UUU-ն՝ Phe, GGC-ն՝ Gly։", "Трансляция: рибосома читает иРНК по три основания. К каждому кодону тРНК приносит свою аминокислоту: AUG — Met, GCA — Ala, UUU — Phe, GGC — Gly."),
    t("The amino acids are joined by peptide bonds into a chain, which folds into a working protein.", "Ամինաթթուները միանում են պեպտիդային կապերով շղթայի մեջ, որը ծալվում է և դառնում աշխատող սպիտակուց։", "Аминокислоты соединяются пептидными связями в цепь, которая сворачивается в работающий белок."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    const x0 = 40;
    const my = i === 0 ? 70 : i === 1 ? lerp(70, 150, k) : 150;
    const read = i === 2 ? Math.min(4, Math.floor(k * 4) + 1) : i > 2 ? 4 : 0;
    return (
      <g>
        <rect x="10" y="10" width="300" height="102" rx="14" fill="#f5f3ff" stroke="#a78bfa" strokeWidth="1.5" />
        <rect x="150" y="105" width="22" height="14" fill="#fbfcff" />
        <Tag x={26} y={26} anchor="start" color="#7c3aed">{T(lang, "nucleus", "կորիզ", "ядро")}</Tag>
        <Tag x={26} y={136} anchor="start" color="#047857">{T(lang, "cytoplasm", "ցիտոպլազմա", "цитоплазма")}</Tag>
        <Bases seq={TEMPLATE} x={x0} y={36} />
        <text x={x0 + 244} y={48} fontSize="8" fontWeight="800" fill="#475569">DNA</text>
        {i < 3 ? <Bases seq={MRNA} x={x0} y={my} n={i === 0 ? Math.ceil(12 * k) : 12} /> : null}
        {i < 3 ? <text x={x0 + 244} y={my + 12} fontSize="8" fontWeight="800" fill="#475569">mRNA</text> : null}
        {i === 2 ? (
          <g>
            <ellipse cx={x0 + (read - 1) * 60 + 29} cy={162} rx="38" ry="16" fill="#fde68a" opacity="0.75" stroke="#d97706" />
            <ellipse cx={x0 + (read - 1) * 60 + 29} cy={140} rx="30" ry="12" fill="#fde68a" opacity="0.6" stroke="#d97706" />
          </g>
        ) : null}
        {read > 0 ? AMINO.slice(0, read).map((a, j) => {
          const cx = i === 3 ? 80 + j * 52 + Math.sin(j * 1.7) * 10 * k : x0 + j * 60 + 29;
          const cy = i === 3 ? 165 + Math.cos(j * 2.1) * 18 * k : 125;
          return (
            <g key={a}>
              {j > 0 ? <line x1={i === 3 ? 80 + (j - 1) * 52 + Math.sin((j - 1) * 1.7) * 10 * k : x0 + (j - 1) * 60 + 29} y1={i === 3 ? 165 + Math.cos((j - 1) * 2.1) * 18 * k : 125} x2={cx} y2={cy} stroke="#475569" strokeWidth="2.5" /> : null}
              <circle cx={cx} cy={cy} r="13" fill={AMINO_C[j]} />
              <text x={cx} y={cy + 3.5} textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#fff">{a}</text>
            </g>
          );
        }) : null}
        <Tag x={160} y={212}>{[
          T(lang, "Transcription: DNA → mRNA", "Տրանսկրիպցիա․ ԴՆԹ → իՌՆԹ", "Транскрипция: ДНК → иРНК"),
          T(lang, "mRNA leaves the nucleus", "իՌՆԹ-ն դուրս է գալիս կորիզից", "иРНК выходит из ядра"),
          T(lang, "Translation: codon → amino acid", "Տրանսլյացիա․ կոդոն → ամինաթթու", "Трансляция: кодон → аминокислота"),
          T(lang, "Protein: Met–Ala–Phe–Gly…", "Սպիտակուց․ Met–Ala–Phe–Gly…", "Белок: Met–Ala–Phe–Gly…"),
        ][i]}</Tag>
      </g>
    );
  },
};

/* ---------------- photosynthesis ---------------- */

function Mol({ x, y, label, c }: { x: number; y: number; label: string; c: string }) {
  return (
    <g>
      <rect x={x - 17} y={y - 9} width="34" height="18" rx="9" fill={c} />
      <text x={x} y={y + 3.5} textAnchor="middle" fontSize="9" fontWeight="900" fill="#fff">{label}</text>
    </g>
  );
}

const photosynth: Mech = {
  title: t("Photosynthesis in a leaf", "Ֆոտոսինթեզ տերևում", "Фотосинтез в листе"),
  caps: [
    t("Chlorophyll in the chloroplasts absorbs red and blue light. Green light is mostly reflected, which is why leaves look green.", "Քլորոպլաստների քլորոֆիլը կլանում է կարմիր և կապույտ լույսը։ Կանաչ լույսը հիմնականում անդրադառնում է, ուստի տերևները կանաչ են երևում։", "Хлорофилл в хлоропластах поглощает красный и синий свет. Зелёный в основном отражается, поэтому листья кажутся зелёными."),
    t("Water comes up from the roots. Light energy splits it, and the oxygen leaves the leaf through the stomata.", "Ջուրը բարձրանում է արմատներից։ Լույսի էներգիան ճեղքում է այն, և թթվածինը հեռանում է տերևից հերձանցքներով։", "Вода поднимается от корней. Энергия света расщепляет её, и кислород выходит из листа через устьица."),
    t("Carbon dioxide from the air enters through the same stomata.", "Օդի ածխաթթու գազը ներս է մտնում նույն հերձանցքներով։", "Углекислый газ из воздуха входит через те же устьица."),
    t("Using the stored light energy, the chloroplast builds glucose from CO₂ and the hydrogen of water: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.", "Պահեստավորված լույսի էներգիայով քլորոպլաստը CO₂-ից և ջրի ջրածնից կառուցում է գլյուկոզ․ 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂։", "С помощью запасённой энергии света хлоропласт строит глюкозу из CO₂ и водорода воды: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂."),
  ],
  draw: (i, p, lang) => {
    const q = (o: number) => (p + o) % 1;
    return (
      <g>
        <circle cx="32" cy="30" r="18" fill="#facc15" />
        <path d="M30,125 Q150,25 292,118 Q160,215 30,125 Z" fill="#4ade80" stroke="#15803d" strokeWidth="2" />
        <path d="M30,125 Q160,118 292,118" fill="none" stroke="#15803d" strokeWidth="2.5" />
        <line x1="30" y1="125" x2="8" y2="160" stroke="#15803d" strokeWidth="4" />
        {[[130, 95], [180, 105], [150, 140], [215, 132], [95, 128]].map(([x, y], j) => <ellipse key={j} cx={x} cy={y} rx="10" ry="6" fill="#15803d" opacity="0.7" />)}
        <Photon x1={48} y1={42} x2={115} y2={88} color="#ef4444" />
        <Photon x1={52} y1={34} x2={160} y2={80} color="#3b82f6" />
        <Photon x1={44} y1={50} x2={70} y2={98} color="#22c55e" waves={3} />
        {i === 0 ? <Photon x1={72} y1={96} x2={40} y2={78} color="#22c55e" waves={2} /> : null}
        {i >= 1 ? (
          <g>
            <Mol x={lerp(14, 70, q(0))} y={lerp(158, 128, q(0))} label="H₂O" c="#0ea5e9" />
            <Mol x={lerp(200, 250, q(0.3))} y={lerp(150, 200, q(0.3))} label="O₂" c="#ef4444" />
          </g>
        ) : null}
        {i >= 2 ? <Mol x={lerp(310, 250, q(0.6))} y={lerp(60, 98, q(0.6))} label="CO₂" c="#475569" /> : null}
        {i === 3 ? (
          <g>
            <polygon points="170,108 186,98 202,108 202,126 186,136 170,126" fill="#fde047" stroke="#a16207" strokeWidth="1.5" />
            <text x="186" y="121" textAnchor="middle" fontSize="8" fontWeight="900" fill="#713f12">C₆H₁₂O₆</text>
          </g>
        ) : null}
        <Tag x={160} y={212}>{[
          T(lang, "Light is absorbed", "Լույսը կլանվում է", "Свет поглощается"),
          T(lang, "Water in, oxygen out", "Ջուրը ներս, թթվածինը դուրս", "Вода внутрь, кислород наружу"),
          T(lang, "Carbon dioxide in", "Ածխաթթու գազը ներս", "Углекислый газ внутрь"),
          "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
        ][i]}</Tag>
      </g>
    );
  },
};

/* ---------------- enzyme ---------------- */

function Substrate({ dx, dy, split = 0 }: { dx: number; dy: number; split?: number }) {
  return (
    <g>
      <g transform={`translate(${dx - split},${dy - split * 0.6})`}>
        <polygon points="128,88 160,88 160,140 140,110 128,110" fill="#f97316" />
      </g>
      <g transform={`translate(${dx + split},${dy - split * 0.6})`}>
        <polygon points="160,88 192,88 192,110 180,110 160,140" fill="#0ea5e9" />
      </g>
    </g>
  );
}

const enzyme: Mech = {
  title: t("How an enzyme works", "Ինչպես է աշխատում ֆերմենտը", "Как работает фермент"),
  caps: [
    t("An enzyme is a protein with an active site: a pocket shaped to fit one kind of molecule, its substrate.", "Ֆերմենտը սպիտակուց է ակտիվ կենտրոնով․ դա մի փոսիկ է, որի ձևը համապատասխանում է մեկ տեսակի մոլեկուլի՝ սուբստրատին։", "Фермент — это белок с активным центром: углублением, по форме подходящим к одному виду молекул, субстрату."),
    t("The substrate fits into the active site like a key into a lock, and the enzyme hugs it slightly tighter.", "Սուբստրատը տեղավորվում է ակտիվ կենտրոնում, ինչպես բանալին՝ կողպեքում, և ֆերմենտը մի փոքր ավելի ամուր է գրկում այն։", "Субстрат входит в активный центр, как ключ в замок, и фермент чуть плотнее его обхватывает."),
    t("While it is held, a bond in the substrate breaks much faster than it would on its own. Two products come out.", "Քանի դեռ այն պահված է, սուբստրատի կապը քանդվում է շատ ավելի արագ, քան ինքնուրույն։ Դուրս են գալիս երկու արգասիք։", "Пока субстрат удерживается, связь в нём рвётся гораздо быстрее, чем сама по себе. Выходят два продукта."),
    t("The enzyme is not used up: it is ready for the next molecule. Heat or the wrong pH can bend its shape and stop it working.", "Ֆերմենտը չի ծախսվում և պատրաստ է հաջորդ մոլեկուլին։ Տաքությունը կամ ոչ ճիշտ pH-ը կարող են աղավաղել նրա ձևը և դադարեցնել աշխատանքը։", "Фермент не расходуется и готов к следующей молекуле. Нагрев или неподходящий pH могут исказить его форму и остановить работу."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    return (
      <g>
        <rect x="90" y="110" width="140" height="80" rx="34" fill="#a78bfa" />
        <polygon points={i === 1 ? `140,${110 - 2 * k} 160,140 180,${110 - 2 * k}` : "138,109 160,142 182,109"} fill="#fbfcff" />
        <Tag x={160} y={170} plain color="#fff">{T(lang, "enzyme", "ֆերմենտ", "фермент")}</Tag>
        {i === 0 ? <Substrate dx={lerp(110, 60, 1 - k)} dy={lerp(-60, -30, k)} /> : null}
        {i === 1 ? <Substrate dx={0} dy={lerp(-25, 0, Math.min(1, k * 1.6))} /> : null}
        {i === 2 ? <Substrate dx={0} dy={-30 * k} split={50 * k} /> : null}
        {i === 3 ? (
          <g>
            <Substrate dx={0} dy={-60} split={95} />
            <g opacity={k}><Substrate dx={120 - 40 * k} dy={-70} /></g>
          </g>
        ) : null}
        <Tag x={160} y={212}>{[
          T(lang, "Substrate and active site", "Սուբստրատ և ակտիվ կենտրոն", "Субстрат и активный центр"),
          T(lang, "Enzyme–substrate complex", "Ֆերմենտ–սուբստրատ համալիր", "Фермент-субстратный комплекс"),
          T(lang, "Products released", "Արգասիքներն ազատվում են", "Продукты высвобождаются"),
          T(lang, "Enzyme unchanged", "Ֆերմենտն անփոփոխ է", "Фермент не изменился"),
        ][i]}</Tag>
      </g>
    );
  },
};

/* ---------------- fertilisation and cleavage ---------------- */

function Sperm({ x, y, a, p }: { x: number; y: number; a: number; p: number }) {
  const tail = Array.from({ length: 9 }, (_, j) => `${-8 - j * 4},${Math.sin(j * 1.1 + p * 12) * 3}`).join(" ");
  return (
    <g transform={`translate(${x},${y}) rotate(${a})`}>
      <polyline points={`-4,0 ${tail}`} fill="none" stroke="#64748b" strokeWidth="1.5" />
      <ellipse cx="0" cy="0" rx="6" ry="4" fill="#3b82f6" />
    </g>
  );
}

const fertilize: Mech = {
  title: t("Fertilisation and the first divisions", "Բեղմնավորում և առաջին բաժանումները", "Оплодотворение и первые деления"),
  caps: [
    t("Many sperm cells reach the egg. Each carries a haploid set (n) of chromosomes, and so does the egg.", "Շատ սպերմատոզոիդներ հասնում են ձվաբջջին։ Յուրաքանչյուրը կրում է քրոմոսոմների հապլոիդ (n) հավաքակազմ, ինչպես և ձվաբջիջը։", "К яйцеклетке подплывает много сперматозоидов. Каждый несёт гаплоидный (n) набор хромосом, как и яйцеклетка."),
    t("Only one sperm gets in. At once the egg's coat changes so that no other sperm can enter.", "Ներս է մտնում միայն մեկ սպերմատոզոիդ։ Անմիջապես ձվաբջջի թաղանթը փոխվում է, որ ուրիշ սպերմատոզոիդ չկարողանա ներթափանցել։", "Внутрь проникает только один сперматозоид. Сразу оболочка яйцеклетки меняется, и другие уже не могут войти."),
    t("The two nuclei fuse: the zygote has a full diploid set (2n), half from each parent.", "Երկու կորիզները միաձուլվում են․ զիգոտն ունի լրիվ դիպլոիդ հավաքակազմ (2n), կեսը՝ յուրաքանչյուր ծնողից։", "Два ядра сливаются: у зиготы полный диплоидный набор (2n), половина от каждого родителя."),
    t("Cleavage: the zygote divides by mitosis into 2, 4, 8 and more cells without growing, the start of the embryo.", "Ճեղքավորում․ զիգոտը միտոզով բաժանվում է 2, 4, 8 և ավելի բջիջների՝ առանց աճելու։ Սա սաղմի սկիզբն է։", "Дробление: зигота делится митозом на 2, 4, 8 и больше клеток, не увеличиваясь в размере. Так начинается зародыш."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    const cells = k < 0.34 ? 2 : k < 0.67 ? 4 : 8;
    const angles = [200, 160, 235, 125, 300, 60, 20];
    return (
      <g>
        <circle cx="160" cy="105" r="62" fill="#fef3c7" stroke={i >= 1 ? "#b45309" : "#f59e0b"} strokeWidth={i >= 1 ? 5 : 2} />
        {i < 3 ? angles.map((a, j) => {
          const r = rad(a);
          const dist = i === 0 ? lerp(140, 72, k) : 72 + (j % 3) * 8;
          if (i >= 1 && j === 6) return null;
          return <Sperm key={j} x={160 + Math.cos(r) * dist} y={105 + Math.sin(r) * dist} a={a + 180} p={p} />;
        }) : null}
        {i === 1 ? <Sperm x={lerp(160 + 72 * Math.cos(rad(20)), 190, k)} y={lerp(105 + 72 * Math.sin(rad(20)), 112, k)} a={200} p={p} /> : null}
        {i === 1 || i === 2 ? (
          <g>
            <circle cx={i === 2 ? lerp(135, 153, k) : 135} cy={i === 2 ? 105 : 100} r="14" fill="#fca5a5" />
            <text x={i === 2 ? lerp(135, 153, k) : 135} y={i === 2 ? 109 : 104} textAnchor="middle" fontSize="9" fontWeight="900" fill="#7f1d1d">n</text>
            {i === 2 || k > 0.9 ? (
              <g>
                <circle cx={i === 2 ? lerp(190, 167, k) : 190} cy={i === 2 ? 105 : 112} r="9" fill="#93c5fd" />
                <text x={i === 2 ? lerp(190, 167, k) : 190} y={i === 2 ? 109 : 116} textAnchor="middle" fontSize="8" fontWeight="900" fill="#1e3a8a">n</text>
              </g>
            ) : null}
            {i === 2 && k > 0.85 ? (
              <g>
                <circle cx="160" cy="105" r="18" fill="#c4b5fd" />
                <text x="160" y="109" textAnchor="middle" fontSize="10" fontWeight="900" fill="#3b0764">2n</text>
              </g>
            ) : null}
          </g>
        ) : null}
        {i === 3 ? Array.from({ length: cells }, (_, j) => {
          const r = cells === 2 ? 28 : cells === 4 ? 25 : 19;
          const pos = cells === 2 ? [[-28, 0], [28, 0]][j] : cells === 4 ? [[-25, -25], [25, -25], [-25, 25], [25, 25]][j] : [[-38, -16], [-13, -38], [13, -38], [38, -16], [-38, 16], [-13, 38], [13, 38], [38, 16]][j];
          return <circle key={`${cells}-${j}`} cx={160 + pos[0]} cy={105 + pos[1]} r={r} fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />;
        }) : null}
        <Tag x={160} y={205}>{[
          T(lang, "Sperm (n) and egg (n)", "Սպերմատոզոիդ (n) և ձվաբջիջ (n)", "Сперматозоид (n) и яйцеклетка (n)"),
          T(lang, "One sperm enters", "Ներս է մտնում մեկ սպերմատոզոիդ", "Входит один сперматозоид"),
          T(lang, "Zygote: 2n", "Զիգոտ․ 2n", "Зигота: 2n"),
          T(lang, `Cleavage: ${cells} cells`, `Ճեղքավորում․ ${cells} բջիջ`, `Дробление: ${cells} клет${cells === 2 || cells === 4 ? "ки" : "ок"}`),
        ][i]}</Tag>
      </g>
    );
  },
};

/* ---------------- immune response ---------------- */

function Microbe({ x, y, o = 1 }: { x: number; y: number; o?: number }) {
  return <rect x={x - 9} y={y - 4.5} width="18" height="9" rx="4.5" fill="#16a34a" opacity={o} />;
}

function Antibody({ x, y, a = 0 }: { x: number; y: number; a?: number }) {
  return (
    <g transform={`translate(${x},${y}) rotate(${a})`} stroke="#7c3aed" strokeWidth="2" strokeLinecap="round">
      <line x1="0" y1="8" x2="0" y2="0" />
      <line x1="0" y1="0" x2="-5" y2="-6" />
      <line x1="0" y1="0" x2="5" y2="-6" />
    </g>
  );
}

const immune: Mech = {
  title: t("How the body fights an infection", "Ինչպես է օրգանիզմը պայքարում վարակի դեմ", "Как организм борется с инфекцией"),
  caps: [
    t("Bacteria get in through a cut in the skin and start to multiply.", "Մանրէները ներթափանցում են մաշկի վերքի միջով և սկսում բազմանալ։", "Бактерии попадают через порез на коже и начинают размножаться."),
    t("Phagocytes, white blood cells, crawl to the spot and swallow the bacteria. Mechnikov discovered this in 1882.", "Ֆագոցիտները՝ արյան սպիտակ բջիջները, սողում են այդ տեղը և կուլ տալիս մանրէներին։ Սա 1882 թվականին հայտնաբերել է Մեչնիկովը։", "Фагоциты, белые клетки крови, подползают к месту и поглощают бактерии. Это открыл Мечников в 1882 году."),
    t("Lymphocytes recognise the bacteria's antigens and make antibodies: Y-shaped proteins that stick to that one antigen and clump the bacteria together.", "Լիմֆոցիտները ճանաչում են մանրէների անտիգենները և արտադրում հակամարմիններ՝ Y-աձև սպիտակուցներ, որոնք կպչում են հենց այդ անտիգենին և կպցնում մանրէներն իրար։", "Лимфоциты узнают антигены бактерий и вырабатывают антитела: белки в форме буквы Y, которые прилипают именно к этому антигену и склеивают бактерии."),
    t("Memory cells stay in the blood for years. Next time the same germ is beaten before you feel ill. A vaccine trains this memory safely.", "Հիշողության բջիջները արյան մեջ մնում են տարիներ։ Հաջորդ անգամ նույն մանրէն հաղթահարվում է, մինչև հիվանդ զգաս։ Պատվաստանյութն այդ հիշողությունը մարզում է անվտանգ կերպով։", "Клетки памяти остаются в крови годами. В следующий раз тот же микроб побеждён раньше, чем ты почувствуешь болезнь. Вакцина безопасно тренирует эту память."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    const germs = [[110, 80], [140, 110], [170, 90], [130, 140], [190, 125], [160, 150]];
    return (
      <g>
        <rect x="0" y="0" width="320" height="34" fill="#fcd9b6" />
        <path d="M140,0 L150,34 L160,0 Z" fill="#fbfcff" />
        <rect x="0" y="34" width="320" height="160" fill="#fff1f2" />
        {i === 0 ? germs.map(([x, y], j) => <Microbe key={j} x={lerp(150, x, Math.min(1, k * 1.3 + (j % 2) * 0.1))} y={lerp(20, y, Math.min(1, k * 1.3))} />) : null}
        {i === 1 ? (
          <g>
            {germs.map(([x, y], j) => <Microbe key={j} x={x} y={y} o={j < 3 ? 1 - k : 1} />)}
            <circle cx={lerp(40, 140, k)} cy={95} r="30" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" opacity="0.9" />
            <circle cx={lerp(30, 130, k)} cy={92} r="10" fill="#6366f1" />
          </g>
        ) : null}
        {i === 2 ? (
          <g>
            {germs.slice(3).map(([x, y], j) => (
              <g key={j}>
                <Microbe x={lerp(x, 175, k)} y={lerp(y, 135 + j * 8, k)} />
                <Antibody x={lerp(260, x - 6, k)} y={lerp(70, y - 12, k)} a={20} />
                <Antibody x={lerp(270, x + 8, k)} y={lerp(90, y + 12, k)} a={190} />
              </g>
            ))}
            <circle cx="270" cy="80" r="20" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="2" />
            <circle cx="270" cy="80" r="13" fill="#7c3aed" />
          </g>
        ) : null}
        {i === 3 ? (
          <g>
            {[[80, 90], [150, 120], [230, 95]].map(([x, y], j) => (
              <g key={j}>
                <circle cx={x} cy={y} r="16" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="2" />
                <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fontWeight="900" fill="#5b21b6">M</text>
              </g>
            ))}
            <g opacity={k}>{[[110, 60], [200, 150]].map(([x, y], j) => <g key={j}><Microbe x={x} y={y} /><Antibody x={x - 7} y={y - 12} a={20} /><Antibody x={x + 8} y={y + 12} a={190} /></g>)}</g>
          </g>
        ) : null}
        <Tag x={160} y={212}>{[
          T(lang, "Bacteria enter", "Մանրէները ներթափանցում են", "Бактерии проникают"),
          T(lang, "Phagocytosis", "Ֆագոցիտոզ", "Фагоцитоз"),
          T(lang, "Antibodies bind the antigens", "Հակամարմինները կապվում են անտիգեններին", "Антитела связывают антигены"),
          T(lang, "Memory cells: immunity", "Հիշողության բջիջներ․ անձեռնմխելիություն", "Клетки памяти: иммунитет"),
        ][i]}</Tag>
      </g>
    );
  },
};

export const BIO_A: Record<string, Mech> = { mitosis, meiosis, protein, photosynth, enzyme, fertilize, immune };
