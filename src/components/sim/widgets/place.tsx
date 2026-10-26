"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Repeat } from "lucide-react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { clamp, Note, Readouts, Stage } from "../kit";
import { L, t } from "../labels";
import { COLORS, Counter, num, times } from "../math-kit";

/**
 * Place value:
 *   place n=235 [max=99]        base-ten blocks: hundreds (flats), tens (rods), ones (cubes), with regrouping
 *   place mode=chart n=3507218  a place-value chart with classes (units, thousands, millions)
 *   place mode=decimal x=3.25   ones, tenths, hundredths and thousandths
 */
const W = {
  blocks: t("Build it: hundreds, tens and ones", "Կառուցի՛ր․ հարյուրյակներ, տասնյակներ և միավորներ", "Построй: сотни, десятки и единицы"),
  blocksHint: t("Add and take away blocks. Ten cubes make a rod, ten rods make a flat.", "Ավելացրո՛ւ և հանի՛ր խորանարդիկներ։ Տասը խորանարդիկը կազմում է մեկ ձող, տասը ձողը՝ մեկ սալիկ։", "Добавляй и убирай кубики. Десять кубиков — это брусок, десять брусков — пластина."),
  chart: t("Look closely: the place-value chart", "Ուշադիր նայի՛ր․ կարգային աղյուսակ", "Рассмотри: таблица разрядов"),
  chartHint: t("Every place is worth ten times the place to its right. Three places make a class.", "Յուրաքանչյուր կարգ տասն անգամ մեծ է իրենից աջ գտնվողից։ Երեք կարգը կազմում է մեկ դաս։", "Каждый разряд в десять раз больше соседнего справа. Три разряда образуют класс."),
  decimal: t("Look closely: decimal places", "Ուշադիր նայի՛ր․ տասնորդական կարգեր", "Рассмотри: десятичные разряды"),
  decimalHint: t("After the decimal point come tenths, hundredths and thousandths: each place is ten times smaller.", "Ստորակետից հետո գալիս են տասնորդականները, հարյուրերորդականները և հազարերորդականները․ յուրաքանչյուր կարգ տասն անգամ փոքր է։", "После запятой идут десятые, сотые и тысячные: каждый разряд в десять раз меньше."),
  hundreds: t("Hundreds", "Հարյուրյակներ", "Сотни"),
  tens: t("Tens", "Տասնյակներ", "Десятки"),
  ones: t("Ones", "Միավորներ", "Единицы"),
  number: t("Number", "Թիվ", "Число"),
  expanded: t("Expanded form", "Կարգային գումարելիների տեսքով", "Сумма разрядных слагаемых"),
  regroupOnes: t("Swap 10 ones for 1 ten", "10 միավորը փոխարինել 1 տասնյակով", "Обменять 10 единиц на 1 десяток"),
  regroupTens: t("Swap 10 tens for 1 hundred", "10 տասնյակը փոխարինել 1 հարյուրյակով", "Обменять 10 десятков на 1 сотню"),
  tooMany: t("A place can hold only 0 to 9. Swap ten of them for one of the next place.", "Կարգում կարող է լինել միայն 0-ից 9։ Տասը հատը փոխարինի՛ր հաջորդ կարգի մեկով։", "В разряде может быть только от 0 до 9. Обменяй десять на одну единицу следующего разряда."),
  places: [
    t("ones", "միավորներ", "единицы"),
    t("tens", "տասնյակներ", "десятки"),
    t("hundreds", "հարյուրյակներ", "сотни"),
    t("thousands", "հազարներ", "тысячи"),
    t("ten thousands", "տասնյակ հազարներ", "десятки тысяч"),
    t("hundred thousands", "հարյուրյակ հազարներ", "сотни тысяч"),
    t("millions", "միլիոններ", "миллионы"),
    t("ten millions", "տասնյակ միլիոններ", "десятки миллионов"),
    t("hundred millions", "հարյուրյակ միլիոններ", "сотни миллионов"),
  ],
  classes: [t("class of units", "միավորների դաս", "класс единиц"), t("class of thousands", "հազարների դաս", "класс тысяч"), t("class of millions", "միլիոնների դաս", "класс миллионов")],
  dplaces: [t("tenths", "տասնորդական", "десятые"), t("hundredths", "հարյուրերորդական", "сотые"), t("thousandths", "հազարերորդական", "тысячные")],
  digitWorth: t("The digit {d} here is worth {v}.", "{d} թվանշանն այստեղ նշանակում է {v}։", "Цифра {d} здесь означает {v}."),
  tap: t("Tap a digit to see what it is worth.", "Սեղմի՛ր թվանշանին՝ տեսնելու, թե ինչ է այն նշանակում։", "Нажми на цифру, чтобы узнать, что она означает."),
};

export default function Place({ spec, lang }: SimProps) {
  if (spec.opts.mode === "chart") return <Chart spec={spec} lang={lang} />;
  if (spec.opts.mode === "decimal") return <DecimalPlaces spec={spec} lang={lang} />;
  return <Blocks spec={spec} lang={lang} />;
}

function Blocks({ spec, lang }: SimProps) {
  const big = Number(spec.opts.max ?? 999) > 99;
  const n0 = clamp(Number(spec.opts.n ?? (big ? 235 : 34)), 0, big ? 999 : 99);
  const [h, setH] = useState(big ? Math.floor(n0 / 100) : 0);
  const [tn, setT] = useState(Math.floor((n0 % 100) / 10));
  const [o, setO] = useState(n0 % 10);
  const n = 100 * h + 10 * tn + o;
  const S = big ? 6 : 11; // one small cube
  const hx = 12, tx = big ? 132 : 24, ox = big ? 270 : 214;
  const rodGap = big ? 6 : 5;
  const rodPos = (i: number) => (big ? [tx + (i % 10) * (S + rodGap) + Math.floor(i / 10) * 3, 10 + Math.floor(i / 10) * 63] : [tx + (i % 10) * (S + rodGap) + Math.floor(i / 10) * 5, 10 + Math.floor(i / 10) * 8]);
  return (
    <ArtFrame kind="steps" title={L(W.blocks, lang)} body={spec.body || L(W.blocksHint, lang)}>
      <Stage w={340} h={150} label={L(W.blocks, lang)}>
        {big ? Array.from({ length: h }, (_, i) => (
          <g key={`h${i}`} transform={`translate(${hx + i * 6} ${12 + i * 6})`}>
            <rect width={S * 10} height={S * 10} fill="#c7d2fe" stroke={COLORS.a} strokeWidth="1.5" />
            {Array.from({ length: 9 }, (_, k) => <path key={k} d={`M${(k + 1) * S} 0V${S * 10}M0 ${(k + 1) * S}H${S * 10}`} stroke={COLORS.a} strokeWidth="0.4" opacity="0.7" />)}
          </g>
        )) : null}
        {Array.from({ length: tn }, (_, i) => (
          <g key={`t${i}`} transform={`translate(${rodPos(i)[0]} ${rodPos(i)[1]})`}>
            <rect width={S} height={S * 10} fill="#fde68a" stroke="#b45309" strokeWidth="1.2" />
            {Array.from({ length: 9 }, (_, k) => <path key={k} d={`M0 ${(k + 1) * S}H${S}`} stroke="#b45309" strokeWidth="0.4" />)}
          </g>
        ))}
        {Array.from({ length: o }, (_, i) => (
          <rect key={`o${i}`} x={ox + (i % 5) * (S + 4)} y={12 + Math.floor(i / 5) * (S + 4)} width={S + 1} height={S + 1} fill="#a7f3d0" stroke="#047857" strokeWidth="1.2" />
        ))}
        {big ? <text x={hx} y={147} className="sim-tag" fill={COLORS.a}>{L(W.hundreds, lang)}: {h}</text> : null}
        <text x={tx} y={147} className="sim-tag" fill="#b45309">{L(W.tens, lang)}: {tn}</text>
        <text x={ox} y={147} className="sim-tag" fill="#047857">{L(W.ones, lang)}: {o}</text>
      </Stage>
      <Readouts
        items={[
          [L(W.number, lang), num(n, lang), COLORS.a],
          [L(W.expanded, lang), [h ? `${h * 100}` : "", tn ? `${tn * 10}` : "", o || n === 0 ? `${o}` : ""].filter(Boolean).join(" + ")],
        ]}
      />
      {o > 9 || tn > 9 ? <Note tone="bad">{L(W.tooMany, lang)}</Note> : null}
      <div className="art-row">
        {big ? <Counter label={L(W.hundreds, lang)} value={h} min={0} max={9} onChange={setH} lang={lang} color={COLORS.a} /> : null}
        <Counter label={L(W.tens, lang)} value={tn} min={0} max={19} onChange={setT} lang={lang} color="#b45309" />
        <Counter label={L(W.ones, lang)} value={o} min={0} max={19} onChange={setO} lang={lang} color="#047857" />
      </div>
      <div className="art-row">
        <button type="button" className="art-btn" disabled={o < 10} onClick={() => { setO(o - 10); setT(tn + 1); }}>
          <Repeat className="size-4" aria-hidden="true" />
          {L(W.regroupOnes, lang)}
        </button>
        {big ? (
          <button type="button" className="art-btn" disabled={tn < 10 || h >= 9} onClick={() => { setT(tn - 10); setH(h + 1); }}>
            <Repeat className="size-4" aria-hidden="true" />
            {L(W.regroupTens, lang)}
          </button>
        ) : null}
      </div>
    </ArtFrame>
  );
}

function digitsOf(n: number, k: number) {
  return Array.from({ length: k }, (_, i) => Math.floor(n / 10 ** i) % 10); // index 0 = ones
}

function Chart({ spec, lang }: SimProps) {
  const n0 = Math.max(0, Math.floor(Number(spec.opts.n ?? 3507218)));
  const k = clamp(Number(spec.opts.places ?? Math.max(4, String(n0).length)), 2, 9);
  const [d, setD] = useState(digitsOf(n0, k));
  const [pick, setPick] = useState<number | null>(null);
  const n = d.reduce((s, v, i) => s + v * 10 ** i, 0);
  const bump = (i: number, by: number) => setD(d.map((v, j) => (j === i ? (v + by + 10) % 10 : v)));
  const order = Array.from({ length: k }, (_, i) => k - 1 - i);
  const tone = (i: number) => ["#e0e7ff", "#fef3c7", "#d1fae5"][Math.floor(i / 3)];
  return (
    <ArtFrame kind="look" title={L(W.chart, lang)} body={spec.body || L(W.chartHint, lang)}>
      <div className="math-pv" style={{ gridTemplateColumns: `repeat(${k}, minmax(0, 1fr))` }}>
        {order.map((i) => (i % 3 === 2 || i === k - 1 ? (
          <span key={`c${i}`} className="math-pv-class" style={{ gridColumn: `span ${i === k - 1 ? (i % 3) + 1 : 3}`, background: tone(i) }}>{L(W.classes[Math.floor(i / 3)], lang)}</span>
        ) : null))}
        {order.map((i) => <span key={`n${i}`} className="math-pv-name" style={{ background: tone(i) }}>{L(W.places[i], lang)}</span>)}
        {order.map((i) => (
          <span key={`d${i}`} className="math-pv-cell" style={{ background: tone(i) }}>
            <button type="button" aria-label="+1" onClick={() => bump(i, 1)}><ChevronUp className="size-4" aria-hidden="true" /></button>
            <button type="button" className={`math-pv-digit${pick === i ? " is-active" : ""}`} onClick={() => setPick(i)}>{d[i]}</button>
            <button type="button" aria-label="−1" onClick={() => bump(i, -1)}><ChevronDown className="size-4" aria-hidden="true" /></button>
          </span>
        ))}
      </div>
      <Readouts items={[[L(W.number, lang), num(n, lang), COLORS.a]]} />
      <Note>
        {pick == null
          ? L(W.tap, lang)
          : L(W.digitWorth, lang).replace("{d}", String(d[pick])).replace("{v}", `${d[pick]} ${times(lang)} ${num(10 ** pick, lang)} = ${num(d[pick] * 10 ** pick, lang)}`)}
      </Note>
    </ArtFrame>
  );
}

function DecimalPlaces({ spec, lang }: SimProps) {
  const x0 = Number(spec.opts.x ?? 3.25);
  const [w, setW] = useState(clamp(Math.floor(x0), 0, 99));
  const [f, setF] = useState(digitsOf(Math.round((x0 - Math.floor(x0)) * 1000), 3).reverse()); // [tenths, hundredths, thousandths]
  const [pick, setPick] = useState<number | null>(null);
  const x = w + f[0] / 10 + f[1] / 100 + f[2] / 1000;
  const sep = lang === "en" ? "." : ",";
  const shown = `${w}${sep}${f.join("").replace(/0+$/, "") || "0"}`;
  const bump = (i: number, by: number) => setF(f.map((v, j) => (j === i ? (v + by + 10) % 10 : v)));
  const worth = (i: number) => ["10", "100", "1000"][i];
  return (
    <ArtFrame kind="look" title={L(W.decimal, lang)} body={spec.body || L(W.decimalHint, lang)}>
      <div className="math-pv" style={{ gridTemplateColumns: "minmax(0,1.2fr) 0.4fr repeat(3, minmax(0, 1fr))" }}>
        <span className="math-pv-name" style={{ background: "#e0e7ff" }}>{L(W.places[0], lang)}</span>
        <span className="math-pv-name" />
        {f.map((_, i) => <span key={i} className="math-pv-name" style={{ background: "#fef3c7" }}>{L(W.dplaces[i], lang)}</span>)}
        <span className="math-pv-cell" style={{ background: "#e0e7ff" }}>
          <button type="button" aria-label="+1" onClick={() => setW(Math.min(99, w + 1))}><ChevronUp className="size-4" aria-hidden="true" /></button>
          <span className="math-pv-digit">{w}</span>
          <button type="button" aria-label="−1" onClick={() => setW(Math.max(0, w - 1))}><ChevronDown className="size-4" aria-hidden="true" /></button>
        </span>
        <span className="math-pv-cell"><span className="math-pv-digit">{sep}</span></span>
        {f.map((v, i) => (
          <span key={i} className="math-pv-cell" style={{ background: "#fef3c7" }}>
            <button type="button" aria-label="+1" onClick={() => bump(i, 1)}><ChevronUp className="size-4" aria-hidden="true" /></button>
            <button type="button" className={`math-pv-digit${pick === i ? " is-active" : ""}`} onClick={() => setPick(i)}>{v}</button>
            <button type="button" aria-label="−1" onClick={() => bump(i, -1)}><ChevronDown className="size-4" aria-hidden="true" /></button>
          </span>
        ))}
      </div>
      <Readouts items={[[L(W.number, lang), shown, COLORS.a], [L(W.expanded, lang), [String(w), ...f.map((v, i) => (v ? `${v}/${worth(i)}` : "")).filter(Boolean)].join(" + ")]]} />
      <Note>{pick == null ? L(W.tap, lang) : L(W.digitWorth, lang).replace("{d}", String(f[pick])).replace("{v}", `${f[pick]}/${worth(pick)} = ${num(Number((f[pick] / 10 ** (pick + 1)).toFixed(3)), lang)}`)}</Note>
      <Stage w={340} h={34} label={shown}>
        <rect x={10} y={10} width={320} height={14} rx="7" fill={COLORS.grid} />
        <rect x={10} y={10} width={320 * Math.min(1, x - w)} height={14} rx="7" fill={COLORS.b} />
        <text x={170} y={21} textAnchor="middle" className="sim-tag" fill={COLORS.line}>{`${w} + ${num(Number((x - w).toFixed(3)), lang)}`}</text>
      </Stage>
    </ArtFrame>
  );
}
