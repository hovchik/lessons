"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Choice, clamp, Note, Readouts, Stage } from "../kit";
import { L, t } from "../labels";
import { COLORS, Counter, Sum } from "../math-kit";

/**
 * Counting with ten frames and counters (grade 1):
 *   count            tap the frame to show a number up to 10 (max=20 for two frames)
 *   count mode=split n=7      all the ways to split a number into two parts
 *   count mode=add a=8 b=5    adding through ten ("make ten first"); op=sub subtracts
 *   count mode=compare a=6 b=4 match two rows one to one: more, fewer or equal
 */
const W = {
  frame: t("Look closely: the ten frame", "Ուշադիր նայի՛ր․ տասնյակի շրջանակ", "Рассмотри: рамка десятка"),
  frameHint: t("Tap the boxes or use − and +. A full frame is ten.", "Սեղմի՛ր վանդակներին կամ օգտագործի՛ր − և +։ Լիքը շրջանակը տասն է։", "Нажимай на клетки или на − и +. Полная рамка — это десять."),
  split: t("Build it: split the number", "Կառուցի՛ր․ բաժանի՛ր թիվը մասերի", "Построй: раздели число на части"),
  splitHint: t("Move counters from one side to the other. The total never changes.", "Փոխադրի՛ր խաղաքարերը մի կողմից մյուսը։ Ընդհանուր քանակը չի փոխվում։", "Перекладывай фишки с одной стороны на другую. Общее число не меняется."),
  add: t("Experiment: make ten first", "Փորձ․ նախ լրացրո՛ւ տասը", "Опыт: сначала дополни до десяти"),
  addHint: t("Fill the first frame to ten, then add what is left.", "Նախ լրացրո՛ւ առաջին շրջանակը մինչև տասը, հետո ավելացրո՛ւ մնացածը։", "Сначала заполни первую рамку до десяти, потом добавь остаток."),
  sub: t("Experiment: back to ten first", "Փորձ․ նախ իջի՛ր մինչև տասը", "Опыт: сначала вычти до десяти"),
  subHint: t("Take away the counters in the second frame first, then the rest from the full ten.", "Նախ հանի՛ր երկրորդ շրջանակի խաղաքարերը, հետո մնացածը՝ լիքը տասնյակից։", "Сначала убери фишки из второй рамки, потом остаток из полного десятка."),
  compare: t("Look closely: more or fewer?", "Ուշադիր նայի՛ր․ ավելի՞ շատ, թե՞ քիչ", "Рассмотри: больше или меньше?"),
  compareHint: t("Join the counters in pairs. Whoever has counters left without a partner has more.", "Միացրո՛ւ խաղաքարերը զույգերով։ Ում մոտ մնում են առանց զույգի խաղաքարեր, նա ունի ավելի շատ։", "Соедини фишки парами. У кого остались фишки без пары, у того больше."),
  number: t("Number", "Թիվ", "Число"),
  word: t("In words", "Բառերով", "Словами"),
  toTen: t("To make 10", "Մինչև 10", "До 10"),
  first: t("First number", "Առաջին թիվը", "Первое число"),
  second: t("Second number", "Երկրորդ թիվը", "Второе число"),
  take: t("Take away", "Հանում ենք", "Вычитаем"),
  left: t("Left part", "Ձախ մաս", "Левая часть"),
  all: t("All the ways", "Բոլոր տարբերակները", "Все способы"),
  more: t("more", "ավելի շատ", "больше"),
  fewer: t("fewer", "ավելի քիչ", "меньше"),
  same: t("The rows are equal: every counter has a partner.", "Շարքերը հավասար են․ յուրաքանչյուր խաղաքար ունի զույգ։", "Ряды равны: у каждой фишки есть пара."),
  top: t("Top row", "Վերևի շարք", "Верхний ряд"),
  bottom: t("Bottom row", "Ներքևի շարք", "Нижний ряд"),
  diff: t("Difference", "Տարբերություն", "Разница"),
  bigger: t("{a} is greater than {b} by {d}.", "{a}-ը {d}-ով մեծ է {b}-ից։", "{a} больше {b} на {d}."),
};

const WORDS: Record<"en" | "hy" | "ru", string[]> = {
  en: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"],
  hy: ["զրո", "մեկ", "երկու", "երեք", "չորս", "հինգ", "վեց", "յոթ", "ութ", "ինը", "տասը", "տասնմեկ", "տասներկու", "տասներեք", "տասնչորս", "տասնհինգ", "տասնվեց", "տասնյոթ", "տասնութ", "տասնինը", "քսան"],
  ru: ["ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать", "двадцать"],
};

const CELL = 28;

/** One or two ten frames; `colors[i]` paints cell i (empty when undefined), `cross` marks taken-away cells. */
function Frames({ n, colors, cross = [], onTap, label }: { n: 1 | 2; colors: Array<string | undefined>; cross?: number[]; onTap?: (i: number) => void; label: string }) {
  const w = n === 2 ? 330 : 170;
  return (
    <Stage w={w} h={78} label={label}>
      {Array.from({ length: n }, (_, f) => {
        const x0 = 15 + f * 160;
        return (
          <g key={f}>
            <rect x={x0 - 3} y={8} width={5 * CELL + 6} height={2 * CELL + 6} rx="8" fill="#fff" stroke={COLORS.line} strokeWidth="2" />
            {Array.from({ length: 10 }, (_, k) => {
              const i = f * 10 + k;
              const cx = x0 + (k % 5) * CELL + CELL / 2, cy = 11 + Math.floor(k / 5) * CELL + CELL / 2;
              return (
                <g key={k} onClick={onTap ? () => onTap(i) : undefined} style={onTap ? { cursor: "pointer" } : undefined}>
                  <rect x={cx - CELL / 2} y={cy - CELL / 2} width={CELL} height={CELL} fill="transparent" stroke="#cbd5e1" />
                  {colors[i] ? <circle cx={cx} cy={cy} r="10" fill={colors[i]} stroke="#fff" strokeWidth="2" /> : null}
                  {cross.includes(i) ? <path d={`M${cx - 9} ${cy - 9}L${cx + 9} ${cy + 9}M${cx + 9} ${cy - 9}L${cx - 9} ${cy + 9}`} stroke={COLORS.d} strokeWidth="3" strokeLinecap="round" /> : null}
                </g>
              );
            })}
          </g>
        );
      })}
    </Stage>
  );
}

export default function Count({ spec, lang }: SimProps) {
  switch (spec.opts.mode) {
    case "split": return <Split spec={spec} lang={lang} />;
    case "add": return <Add spec={spec} lang={lang} />;
    case "compare": return <Compare spec={spec} lang={lang} />;
    default: return <Frame spec={spec} lang={lang} />;
  }
}

function Frame({ spec, lang }: SimProps) {
  const max = Number(spec.opts.max ?? 10) > 10 ? 20 : 10;
  const [n, setN] = useState(clamp(Number(spec.opts.n ?? 3), 0, max));
  const colors = Array.from({ length: max }, (_, i) => (i < n ? (i < 10 ? COLORS.a : COLORS.b) : undefined));
  return (
    <ArtFrame kind="look" title={L(W.frame, lang)} body={spec.body || L(W.frameHint, lang)}>
      <Frames n={max === 20 ? 2 : 1} colors={colors} onTap={(i) => setN(i + 1 === n ? i : i + 1)} label={L(W.frame, lang)} />
      <Readouts
        items={[
          [L(W.number, lang), String(n), COLORS.a],
          [L(W.word, lang), WORDS[lang][n]],
          n <= 10 ? [L(W.toTen, lang), `${n} + ${10 - n} = 10`, COLORS.c] : [L(W.toTen, lang), `10 + ${n - 10} = ${n}`, COLORS.c],
        ]}
      />
      <div className="art-row"><Counter value={n} min={0} max={max} onChange={setN} lang={lang} /></div>
    </ArtFrame>
  );
}

function Split({ spec, lang }: SimProps) {
  const n = clamp(Number(spec.opts.n ?? 7), 2, 10);
  const [a, setA] = useState(Math.floor(n / 2));
  const colors = Array.from({ length: 10 }, (_, i) => (i < a ? COLORS.a : i < n ? COLORS.b : undefined));
  return (
    <ArtFrame kind="steps" title={L(W.split, lang)} body={spec.body || L(W.splitHint, lang)}>
      <Frames n={1} colors={colors} onTap={(i) => i < n && setA(i + 1 === a ? i : i + 1)} label={L(W.split, lang)} />
      <Sum parts={[[String(n), COLORS.line], " = ", [String(a), COLORS.a], " + ", [String(n - a), COLORS.b]]} />
      <div className="art-row"><Counter label={L(W.left, lang)} value={a} min={0} max={n} onChange={setA} lang={lang} color={COLORS.a} /></div>
      <p className="art-ctrl-label">{L(W.all, lang)}</p>
      <div className="art-chips">
        {Array.from({ length: n + 1 }, (_, k) => (
          <button key={k} type="button" className={`art-chip${k === a ? " is-active" : ""}`} aria-pressed={k === a} onClick={() => setA(k)}>
            {k} + {n - k}
          </button>
        ))}
      </div>
    </ArtFrame>
  );
}

function Add({ spec, lang }: SimProps) {
  const sub = spec.opts.op === "sub";
  const [a, setA] = useState(clamp(Number(spec.opts.a ?? (sub ? 13 : 8)), 0, sub ? 20 : 10));
  const [b, setB] = useState(clamp(Number(spec.opts.b ?? 5), 0, 10));
  if (sub) {
    const bb = Math.min(b, a);
    const r = a - bb;
    // Cells a-1 down to r are crossed out: first the ones above ten, then from the full ten.
    const colors = Array.from({ length: 20 }, (_, i) => (i < a ? (i < 10 ? COLORS.a : COLORS.b) : undefined));
    const cross = Array.from({ length: bb }, (_, k) => a - 1 - k);
    const above = Math.max(0, a - 10);
    const split = a > 10 && bb > above && above > 0;
    return (
      <ArtFrame kind="experiment" title={L(W.sub, lang)} body={spec.body || L(W.subHint, lang)}>
        <Frames n={2} colors={colors} cross={cross} label={L(W.sub, lang)} />
        <Sum parts={split ? [String(a), " − ", [String(above), COLORS.b], " − ", [String(bb - above), COLORS.d], " = ", [String(r), COLORS.a]] : [String(a), " − ", [String(bb), COLORS.d], " = ", [String(r), COLORS.a]]} />
        <div className="art-row">
          <Counter label={L(W.first, lang)} value={a} min={0} max={20} onChange={setA} lang={lang} color={COLORS.a} />
          <Counter label={L(W.take, lang)} value={b} min={0} max={10} onChange={setB} lang={lang} color={COLORS.d} />
        </div>
      </ArtFrame>
    );
  }
  const s = a + b;
  const fill = Math.min(b, 10 - a);
  const colors = Array.from({ length: 20 }, (_, i) => (i < a ? COLORS.a : i < s ? COLORS.b : undefined));
  return (
    <ArtFrame kind="experiment" title={L(W.add, lang)} body={spec.body || L(W.addHint, lang)}>
      <Frames n={2} colors={colors} label={L(W.add, lang)} />
      <Sum parts={s > 10 && a < 10 && fill > 0 ? [[String(a), COLORS.a], " + ", [String(b), COLORS.b], " = ", [String(a), COLORS.a], " + ", [String(fill), COLORS.b], " + ", [String(b - fill), COLORS.b], " = ", `10 + ${b - fill}`, " = ", [String(s), COLORS.line]] : [[String(a), COLORS.a], " + ", [String(b), COLORS.b], " = ", [String(s), COLORS.line]]} />
      <div className="art-row">
        <Counter label={L(W.first, lang)} value={a} min={0} max={10} onChange={setA} lang={lang} color={COLORS.a} />
        <Counter label={L(W.second, lang)} value={b} min={0} max={10} onChange={setB} lang={lang} color={COLORS.b} />
      </div>
    </ArtFrame>
  );
}

function Compare({ spec, lang }: SimProps) {
  const [a, setA] = useState(clamp(Number(spec.opts.a ?? 6), 0, 10));
  const [b, setB] = useState(clamp(Number(spec.opts.b ?? 4), 0, 10));
  const [pairs, setPairs] = useState(true);
  const X = (i: number) => 22 + i * 30;
  const sign = a > b ? ">" : a < b ? "<" : "=";
  const d = Math.abs(a - b);
  const msg = a === b ? L(W.same, lang) : L(W.bigger, lang).replace("{a}", String(Math.max(a, b))).replace("{b}", String(Math.min(a, b))).replace("{d}", String(d));
  return (
    <ArtFrame kind="look" title={L(W.compare, lang)} body={spec.body || L(W.compareHint, lang)}>
      <Stage w={320} h={96} label={L(W.compare, lang)}>
        {pairs ? Array.from({ length: Math.min(a, b) }, (_, i) => <line key={i} x1={X(i)} y1={28} x2={X(i)} y2={68} stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 3" />) : null}
        {Array.from({ length: a }, (_, i) => <circle key={`a${i}`} cx={X(i)} cy={22} r="10" fill={COLORS.a} opacity={pairs && i >= b ? 1 : 0.85} stroke={pairs && i >= b ? COLORS.d : "#fff"} strokeWidth={pairs && i >= b ? 3 : 2} />)}
        {Array.from({ length: b }, (_, i) => <rect key={`b${i}`} x={X(i) - 10} y={64} width="20" height="20" rx="5" fill={COLORS.b} stroke={pairs && i >= a ? COLORS.d : "#fff"} strokeWidth={pairs && i >= a ? 3 : 2} />)}
      </Stage>
      <Sum parts={[[String(a), COLORS.a], ` ${sign} `, [String(b), COLORS.b]]} />
      <Note tone={a === b ? "good" : undefined}>{msg}</Note>
      <div className="art-row">
        <Counter label={L(W.top, lang)} value={a} min={0} max={10} onChange={setA} lang={lang} color={COLORS.a} />
        <Counter label={L(W.bottom, lang)} value={b} min={0} max={10} onChange={setB} lang={lang} color={COLORS.b} />
      </div>
      <Choice value={pairs ? "p" : "n"} options={[["p", "⟷"], ["n", "○ □"]]} onChange={(v) => setPairs(v === "p")} />
    </ArtFrame>
  );
}
