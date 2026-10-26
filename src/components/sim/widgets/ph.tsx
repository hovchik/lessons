"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { Beaker, Burette, chemText, Flask } from "../chem-draw";
import { Choice, Graph, Note, Readouts, Slider, Stage, fmt } from "../kit";
import type { Tr } from "@/lib/art/spec";
import { L, t, un } from "../labels";

const W = {
  scale: t("Experiment: acid or alkali?", "Փորձ․ թթու՞ է, թե՞ հիմք", "Опыт: кислота или щёлочь?"),
  scaleHint: t(
    "Pick a liquid and an indicator. Below 7 the solution is acidic, at 7 neutral, above 7 alkaline. One step on the pH scale means ten times more (or fewer) H⁺ ions.",
    "Ընտրի՛ր հեղուկը և հայտանյութը։ 7-ից փոքր pH-ի դեպքում լուծույթը թթվային է, 7-ի դեպքում՝ չեզոք, 7-ից մեծի դեպքում՝ հիմնային։ pH-ի մեկ քայլը նշանակում է H⁺ իոնների տասն անգամ ավելի (կամ պակաս) քանակ։",
    "Выбери жидкость и индикатор. При pH меньше 7 раствор кислый, при 7 нейтральный, больше 7 щелочной. Шаг на шкале pH означает в десять раз больше (или меньше) ионов H⁺.",
  ),
  titr: t("Experiment: neutralisation (titration)", "Փորձ․ չեզոքացում (տիտրում)", "Опыт: нейтрализация (титрование)"),
  titrHint: t(
    "The flask holds 25 mL of hydrochloric acid, 0.1 mol/L. Add sodium hydroxide of the same concentration from the burette and watch the pH and the indicator. HCl + NaOH → NaCl + H₂O.",
    "Կոլբայում 25 մլ աղաթթու է՝ 0,1 մոլ/լ։ Բյուրետից ավելացրո՛ւ նույն կոնցենտրացիայի նատրիումի հիդրօքսիդ և հետևի՛ր pH-ին ու հայտանյութին։ HCl + NaOH → NaCl + H₂O։",
    "В колбе 25 мл соляной кислоты, 0,1 моль/л. Добавляй из бюретки гидроксид натрия той же концентрации и следи за pH и индикатором. HCl + NaOH → NaCl + H₂O.",
  ),
  ind: t("Indicator", "Հայտանյութ", "Индикатор"),
  universal: t("universal", "ունիվերսալ", "универсальный"),
  litmus: t("litmus", "լակմուս", "лакмус"),
  phph: t("phenolphthalein", "ֆենոլֆտալեին", "фенолфталеин"),
  mo: t("methyl orange", "մեթիլնարնջագույն", "метилоранж"),
  acidic: t("acidic", "թթվային", "кислая"),
  neutral: t("neutral", "չեզոք", "нейтральная"),
  basic: t("alkaline", "հիմնային", "щелочная"),
  medium: t("Medium", "Միջավայր", "Среда"),
  conc: t("[H⁺]", "[H⁺]", "[H⁺]"),
  added: t("NaOH added", "Ավելացված NaOH", "Добавлено NaOH"),
  equiv: t("Equivalence point: all the acid has reacted, only NaCl and water are left, pH = 7. One more drop and the solution turns alkaline.", "Համարժեքության կետ․ ամբողջ թթուն փոխազդել է, մնացել են միայն NaCl և ջուր, pH = 7։ Եվս մեկ կաթիլ, և լուծույթը կդառնա հիմնային։", "Точка эквивалентности: вся кислота прореагировала, остались только NaCl и вода, pH = 7. Ещё капля, и раствор станет щелочным."),
  saSb: t("Strong acid + strong base: the salt does not hydrolyse, the solution is neutral.", "Ուժեղ թթու + ուժեղ հիմք․ աղը չի հիդրոլիզվում, լուծույթը չեզոք է։", "Сильная кислота + сильное основание: соль не гидролизуется, среда нейтральная."),
  waSb: t("Weak acid + strong base: the anion takes H⁺ from water and leaves OH⁻, the solution is alkaline.", "Թույլ թթու + ուժեղ հիմք․ անիոնը ջրից վերցնում է H⁺ և թողնում OH⁻, լուծույթը հիմնային է։", "Слабая кислота + сильное основание: анион забирает H⁺ у воды и оставляет OH⁻, среда щелочная."),
  saWb: t("Weak base + strong acid: the cation takes OH⁻ from water and leaves H⁺, the solution is acidic.", "Թույլ հիմք + ուժեղ թթու․ կատիոնը ջրից վերցնում է OH⁻ և թողնում H⁺, լուծույթը թթվային է։", "Слабое основание + сильная кислота: катион забирает OH⁻ у воды и оставляет H⁺, среда кислая."),
};

type Ind = "universal" | "litmus" | "phph" | "mo";
type Sub = { ph: number; name: Tr; kind?: "saSb" | "waSb" | "saWb" };

export const SETS: Record<string, Record<string, Sub>> = {
  home: {
    stomach: { ph: 1.5, name: t("gastric juice", "ստամոքսահյութ", "желудочный сок") },
    lemon: { ph: 2.4, name: t("lemon juice", "կիտրոնի հյութ", "лимонный сок") },
    vinegar: { ph: 2.9, name: t("vinegar", "քացախ", "уксус") },
    orange: { ph: 3.5, name: t("orange juice", "նարնջի հյութ", "апельсиновый сок") },
    coffee: { ph: 5, name: t("coffee", "սուրճ", "кофе") },
    milk: { ph: 6.5, name: t("milk", "կաթ", "молоко") },
    water: { ph: 7, name: t("pure water", "մաքուր ջուր", "чистая вода") },
    blood: { ph: 7.4, name: t("blood", "արյուն", "кровь") },
    soda: { ph: 8.3, name: t("baking soda", "խմելու սոդա", "пищевая сода") },
    soap: { ph: 10, name: t("soap", "օճառ", "мыло") },
    ammonia: { ph: 11.6, name: t("ammonia solution", "անուշադրի սպիրտ", "нашатырный спирт") },
    cleaner: { ph: 13.5, name: t("drain cleaner", "խողովակների մաքրիչ", "средство для труб") },
  },
  lab: {
    HCl: { ph: 1, name: t("HCl, 0.1 mol/L", "HCl, 0,1 մոլ/լ", "HCl, 0,1 моль/л") },
    CH3COOH: { ph: 2.9, name: t("CH₃COOH, 0.1 mol/L", "CH₃COOH, 0,1 մոլ/լ", "CH₃COOH, 0,1 моль/л") },
    H2CO3: { ph: 4, name: t("soda water (H₂CO₃)", "գազավորված ջուր (H₂CO₃)", "газированная вода (H₂CO₃)") },
    NaCl: { ph: 7, name: t("NaCl solution", "NaCl-ի լուծույթ", "раствор NaCl") },
    NH3: { ph: 11.1, name: t("NH₃·H₂O, 0.1 mol/L", "NH₃·H₂O, 0,1 մոլ/լ", "NH₃·H₂O, 0,1 моль/л") },
    CaOH2: { ph: 12.4, name: t("limewater Ca(OH)₂", "կրաջուր Ca(OH)₂", "известковая вода Ca(OH)₂") },
    NaOH: { ph: 13, name: t("NaOH, 0.1 mol/L", "NaOH, 0,1 մոլ/լ", "NaOH, 0,1 моль/л") },
  },
  salts: {
    AlCl3: { ph: 3, name: t("AlCl₃", "AlCl₃", "AlCl₃"), kind: "saWb" },
    CuSO4: { ph: 4, name: t("CuSO₄", "CuSO₄", "CuSO₄"), kind: "saWb" },
    NH4Cl: { ph: 5.1, name: t("NH₄Cl", "NH₄Cl", "NH₄Cl"), kind: "saWb" },
    NaCl: { ph: 7, name: t("NaCl", "NaCl", "NaCl"), kind: "saSb" },
    KNO3: { ph: 7, name: t("KNO₃", "KNO₃", "KNO₃"), kind: "saSb" },
    CH3COONa: { ph: 8.9, name: t("CH₃COONa", "CH₃COONa", "CH₃COONa"), kind: "waSb" },
    Na2CO3: { ph: 11.6, name: t("Na₂CO₃", "Na₂CO₃", "Na₂CO₃"), kind: "waSb" },
  },
};

const mix = (stops: Array<[number, string]>, v: number) => {
  const hex = (c: string) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
  if (v <= stops[0][0]) return stops[0][1];
  for (let i = 1; i < stops.length; i++) {
    if (v <= stops[i][0]) {
      const [a, ca] = stops[i - 1], [b, cb] = stops[i];
      const k = (v - a) / (b - a || 1);
      const A = hex(ca), B = hex(cb);
      return `rgb(${A.map((x, j) => Math.round(x + (B[j] - x) * k)).join(",")})`;
    }
  }
  return stops[stops.length - 1][1];
};

const UNIVERSAL: Array<[number, string]> = [[0, "#dc2626"], [2, "#f97316"], [4, "#facc15"], [6, "#a3e635"], [7, "#22c55e"], [8, "#14b8a6"], [10, "#2563eb"], [12, "#4f46e5"], [14, "#7c3aed"]];
export function indicatorColor(ind: Ind, ph: number) {
  if (ind === "litmus") return mix([[4.5, "#ef4444"], [6.5, "#a855f7"], [8.3, "#3b82f6"]], ph);
  if (ind === "phph") return mix([[8.2, "#e0f2fe"], [10, "#ec4899"]], ph);
  if (ind === "mo") return mix([[3.1, "#dc2626"], [4.4, "#facc15"]], ph);
  return mix(UNIVERSAL, ph);
}

const medium = (ph: number) => (ph < 6.95 ? W.acidic : ph > 7.05 ? W.basic : W.neutral);
const sci = (v: number, lang: SimProps["lang"]) => {
  const e = Math.floor(Math.log10(v) + 1e-9);
  const m = v / 10 ** e;
  const sup = String(e).replace("-", "⁻").replace(/\d/g, (c) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(c)]);
  return `${Math.abs(m - 1) < 0.05 ? "" : `${fmt(m, 1, lang)}·`}10${sup}`;
};

function IndicatorChoice({ ind, setInd, lang }: { ind: Ind; setInd: (v: Ind) => void; lang: SimProps["lang"] }) {
  return <Choice value={ind} options={(["universal", "litmus", "phph", "mo"] as Ind[]).map((k) => [k, L(W[k], lang)])} onChange={setInd} />;
}

export default function PH({ spec, lang }: SimProps) {
  if (spec.opts.mode === "titration") return <Titration spec={spec} lang={lang} />;
  return <Scale spec={spec} lang={lang} />;
}

function Scale({ spec, lang }: SimProps) {
  const set = SETS[spec.opts.set ?? "home"] ?? SETS.home;
  const keys = Object.keys(set);
  const [k, setK] = useState(spec.args[0] && set[spec.args[0]] ? spec.args[0] : keys[0]);
  const [ind, setInd] = useState<Ind>((["universal", "litmus", "phph", "mo"] as Ind[]).find((x) => x === spec.opts.ind) ?? "universal");
  const s = set[k];
  const X = (ph: number) => 20 + ph * 20;
  return (
    <ArtFrame kind="experiment" title={L(W.scale, lang)} body={spec.body || L(W.scaleHint, lang)}>
      <Stage w={320} h={170} label={L(W.scale, lang)}>
        <defs>
          <linearGradient id="ph-grad" x1="0" x2="1">
            {UNIVERSAL.map(([p, c]) => <stop key={p} offset={p / 14} stopColor={c} />)}
          </linearGradient>
        </defs>
        <Beaker x={120} y={10} w={80} h={84} level={0.7} color={indicatorColor(ind, s.ph)} opacity={0.85} />
        <text x={160} y={108} textAnchor="middle" className="sim-tag">{L(s.name, lang)}</text>
        <rect x={X(0)} y={124} width={280} height={14} rx="7" fill="url(#ph-grad)" />
        {Array.from({ length: 15 }, (_, i) => <text key={i} x={X(i)} y={152} textAnchor="middle" className="sim-axis">{i}</text>)}
        <text x={X(3)} y={166} textAnchor="middle" className="sim-small">{L(W.acidic, lang)}</text>
        <text x={X(7)} y={166} textAnchor="middle" className="sim-small">{L(W.neutral, lang)}</text>
        <text x={X(11)} y={166} textAnchor="middle" className="sim-small">{L(W.basic, lang)}</text>
        <g style={{ transform: `translateX(${X(s.ph)}px)`, transition: "transform 500ms ease" }}>
          <polygon points="0,122 -6,113 6,113" fill="#1e1b4b" />
        </g>
      </Stage>
      <Readouts items={[["pH", fmt(s.ph, 1, lang), "#1e1b4b"], [L(W.medium, lang), L(medium(s.ph), lang)], [L(W.conc, lang), `${sci(10 ** -s.ph, lang)} ${un("mol", lang)}/${un("L", lang)}`]]} />
      {s.kind ? <Note>{L(W[s.kind], lang)}</Note> : null}
      <IndicatorChoice ind={ind} setInd={setInd} lang={lang} />
      <div className="art-chips">
        {keys.map((n) => (
          <button key={n} type="button" className={cn("art-chip", n === k && "is-active")} onClick={() => setK(n)}>
            {spec.opts.set === "salts" ? chemText(n) : L(set[n].name, lang)}
          </button>
        ))}
      </div>
    </ArtFrame>
  );
}

const V0 = 25, C = 0.1;
export function titrationPH(v: number) {
  const na = C * V0, nb = C * v, vol = V0 + v;
  if (Math.abs(na - nb) < 1e-9) return 7;
  return na > nb ? -Math.log10((na - nb) / vol) : 14 + Math.log10((nb - na) / vol);
}

function Titration({ spec, lang }: SimProps) {
  const [v, setV] = useState(0);
  const [ind, setInd] = useState<Ind>((["universal", "litmus", "phph", "mo"] as Ind[]).find((x) => x === spec.opts.ind) ?? "phph");
  const ph = titrationPH(v);
  const curve = Array.from({ length: 201 }, (_, i) => [i * 0.25, titrationPH(i * 0.25)] as [number, number]);
  return (
    <ArtFrame kind="experiment" title={L(W.titr, lang)} body={spec.body || L(W.titrHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={200} h={220} label={L(W.titr, lang)}>
          <rect x="40" y="4" width="4" height="200" fill="#cbd5e1" />
          <rect x="20" y="204" width="160" height="8" rx="3" fill="#cbd5e1" />
          <rect x="44" y="40" width="50" height="4" fill="#cbd5e1" />
          <Burette x={94} y={10} h={110} level={1 - v / 50} color="#e0e7ff" open={v > 0 && v < 50} />
          <text x={112} y={30} className="sim-small">NaOH</text>
          <Flask x={60} y={140} w={92} h={64} level={0.35 + (v / 50) * 0.3} color={indicatorColor(ind, ph)} />
          <text x={106} y={196} textAnchor="middle" className="sim-small">HCl</text>
        </Stage>
        <div>
          <Graph x={[0, 50]} y={[0, 14]} series={[{ pts: curve, color: "#4f46e5" }]} cursor={v} dots={[[v, ph, indicatorColor(ind, ph)]]} xLabel={un("mL", lang)} yLabel="pH" />
          <Readouts items={[[L(W.added, lang), `${fmt(v, 1, lang)} ${un("mL", lang)}`], ["pH", fmt(ph, 1, lang), "#1e1b4b"], [L(W.medium, lang), L(medium(ph), lang)]]} />
        </div>
      </div>
      <Slider label={L(W.added, lang)} value={v} min={0} max={50} step={0.5} unit={un("mL", lang)} lang={lang} onChange={setV} />
      {Math.abs(v - V0) < 0.01 ? <Note tone="good">{L(W.equiv, lang)}</Note> : null}
      <IndicatorChoice ind={ind} setInd={setInd} lang={lang} />
    </ArtFrame>
  );
}
