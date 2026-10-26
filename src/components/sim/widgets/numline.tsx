"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Choice, clamp, Note, Readouts, Slider, Stage, Toggle } from "../kit";
import { L, t } from "../labels";
import { COLORS, Counter, gcd, num, NumPick, Sum, times } from "../math-kit";

/**
 * Number lines:
 *   numline a=5 b=3 [op=sub] [min=0 max=20] [split]   jumps for adding and subtracting (split: tens, then ones)
 *   numline mode=skip step=5 max=50                     skip counting = repeated addition = multiplication
 *   numline mode=round unit=10 min=0 max=100 x=47       rounding to the nearest ten, hundred, thousand
 *   numline mode=fraction d=4 n=3 max=2                 fractions and mixed numbers on the line
 *   numline mode=decimal x=0.37                         tenths and hundredths, with a zoomed piece
 *   numline mode=integers a=-3 b=5 [op=sub] [show=abs]  negative numbers, opposites, absolute value
 */
const W = {
  jump: t("Experiment: jumps on the number line", "Փորձ․ ցատկեր թվային ուղղի վրա", "Опыт: прыжки по числовому лучу"),
  jumpAdd: t("Adding means jumping to the right; subtracting means jumping to the left. Change the numbers and watch where you land.", "Գումարել նշանակում է ցատկել աջ, հանել՝ ձախ։ Փոխի՛ր թվերը և տե՛ս, թե որտեղ ես հայտնվում։", "Прибавить — значит прыгнуть вправо, вычесть — влево. Меняй числа и смотри, куда попадёшь."),
  jumpTen: t("Go through the round ten: first jump to the ten, then jump what is left.", "Անցի՛ր կլոր տասնյակով․ նախ ցատկի՛ր մինչև տասնյակը, հետո ցատկի՛ր մնացածը։", "Переходи через круглый десяток: сначала прыгни до десятка, потом прыгни остаток."),
  jumpSplit: t("Add by parts: first jump the tens, then the ones.", "Գումարի՛ր մասերով․ նախ ցատկի՛ր տասնյակներով, հետո միավորներով։", "Прибавляй по частям: сначала прыгай десятками, потом единицами."),
  skip: t("Experiment: skip counting", "Փորձ․ հաշվում քայլերով", "Опыт: счёт шагами"),
  skipHint: t("Each hop adds the same number. Counting hops is multiplying: number of hops × size of a hop.", "Յուրաքանչյուր ցատկ ավելացնում է նույն թիվը։ Ցատկերը հաշվելը բազմապատկում է․ ցատկերի քանակ × ցատկի չափ։", "Каждый прыжок прибавляет одно и то же число. Считать прыжки — это умножать: число прыжков × длина прыжка."),
  round: t("Look closely: rounding", "Ուշադիր նայի՛ր․ կլորացում", "Рассмотри: округление"),
  roundHint: t("Find the two round numbers on either side. The number goes to the closer one; exactly in the middle it goes up.", "Գտի՛ր երկու կողմերի կլոր թվերը։ Թիվը կլորացվում է դեպի ավելի մոտը, իսկ ճիշտ մեջտեղում՝ դեպի մեծը։", "Найди круглые числа по обе стороны. Число округляется к ближайшему, а ровно посередине — вверх."),
  fraction: t("Look closely: fractions on the line", "Ուշադիր նայի՛ր․ կոտորակները ուղղի վրա", "Рассмотри: дроби на луче"),
  fractionHint: t("Cut every unit into equal parts (the denominator) and count the parts (the numerator).", "Յուրաքանչյուր միավոր բաժանի՛ր հավասար մասերի (հայտարար) և հաշվի՛ր մասերը (համարիչ)։", "Раздели каждый единичный отрезок на равные части (знаменатель) и отсчитай части (числитель)."),
  decimal: t("Look closely: tenths and hundredths", "Ուշադիր նայի՛ր․ տասնորդականներ և հարյուրերորդականներ", "Рассмотри: десятые и сотые"),
  decimalHint: t("The lower line is a magnified piece of the upper one: each tenth is cut into ten hundredths.", "Ներքևի ուղիղը վերևի մի կտորն է՝ խոշորացված․ յուրաքանչյուր տասնորդական բաժանված է տասը հարյուրերորդականի։", "Нижняя прямая — увеличенный кусочек верхней: каждая десятая разделена на десять сотых."),
  integers: t("Experiment: positive and negative numbers", "Փորձ․ դրական և բացասական թվեր", "Опыт: положительные и отрицательные числа"),
  integersHint: t("Adding a positive number moves right, adding a negative number moves left.", "Դրական թիվ գումարելիս շարժվում ենք աջ, բացասական թիվ գումարելիս՝ ձախ։", "Прибавить положительное число — сдвинуться вправо, отрицательное — влево."),
  abs: t("Look closely: opposite numbers and absolute value", "Ուշադիր նայի՛ր․ հակադիր թվեր և մոդուլ", "Рассмотри: противоположные числа и модуль"),
  absHint: t("Opposite numbers are the same distance from 0 on different sides. That distance is the absolute value.", "Հակադիր թվերը գտնվում են 0-ից նույն հեռավորության վրա՝ տարբեր կողմերում։ Այդ հեռավորությունը մոդուլն է։", "Противоположные числа находятся на одном расстоянии от 0 по разные стороны. Это расстояние — модуль."),
  start: t("Start", "Սկիզբ", "Начало"),
  jumpBy: t("Jump", "Ցատկ", "Прыжок"),
  step: t("Step", "Քայլ", "Шаг"),
  hops: t("Hops", "Ցատկեր", "Прыжки"),
  number: t("Number", "Թիվ", "Число"),
  rounded: t("Rounded", "Կլորացված", "Округлено"),
  to: t("To the nearest", "Մինչև", "До"),
  tens: t("ten", "տասնյակ", "десятков"),
  hundreds: t("hundred", "հարյուրյակ", "сотен"),
  thousands: t("thousand", "հազարյակ", "тысяч"),
  closer: t("{x} is closer to {r}.", "{x}-ը ավելի մոտ է {r}-ին։", "{x} ближе к {r}."),
  middle: t("{x} is exactly in the middle, so it rounds up to {r}.", "{x}-ը ճիշտ մեջտեղում է, ուստի կլորացվում է դեպի մեծը՝ {r}։", "{x} ровно посередине, поэтому округляем вверх: {r}."),
  parts: t("Parts in a unit", "Մասեր միավորում", "Частей в единице"),
  taken: t("Parts taken", "Վերցված մասեր", "Взято частей"),
  mixed: t("Mixed number", "Խառը թիվ", "Смешанное число"),
  simplest: t("Simplest form", "Անկրճատելի տեսք", "Несократимая дробь"),
  value: t("Value", "Արժեք", "Значение"),
  asFraction: t("As a fraction", "Կոտորակով", "Дробью"),
  opposite: t("Opposite", "Հակադիրը", "Противоположное"),
  absolute: t("Absolute value", "Մոդուլ", "Модуль"),
  showAbs: t("Opposite and |a|", "Հակադիրը և |a|", "Противоположное и |a|"),
};

const PAD = 22;

function Line({ min, max, w = 340, y = 66, every, label, mark }: { min: number; max: number; w?: number; y?: number; every: number; label: number; mark?: (v: number) => boolean }) {
  const X = (v: number) => PAD + ((v - min) / (max - min)) * (w - 2 * PAD);
  const ticks: number[] = [];
  for (let v = min; v <= max + 1e-9; v += every) ticks.push(Number(v.toFixed(6)));
  return (
    <g>
      <line x1={PAD - 12} x2={w - PAD + 12} y1={y} y2={y} stroke={COLORS.line} strokeWidth="2" />
      <polygon points={`${w - PAD + 16},${y} ${w - PAD + 8},${y - 4} ${w - PAD + 8},${y + 4}`} fill={COLORS.line} />
      {ticks.map((v) => {
        const big = Math.abs(v / label - Math.round(v / label)) < 1e-6;
        return (
          <g key={v}>
            <line x1={X(v)} x2={X(v)} y1={y - (big ? 7 : 4)} y2={y + (big ? 7 : 4)} stroke={mark?.(v) ? COLORS.d : COLORS.line} strokeWidth={big ? 1.6 : 1} />
            {big ? <text x={X(v)} y={y + 19} textAnchor="middle" className="sim-axis">{Number(v.toFixed(4))}</text> : null}
          </g>
        );
      })}
    </g>
  );
}

/** An arc hop from a to b above the line at height y. */
function Hop({ x1, x2, y, color, label, dy = 0 }: { x1: number; x2: number; y: number; color: string; label?: string; dy?: number }) {
  const h = Math.min(34, Math.abs(x2 - x1) * 0.5 + 8) + dy;
  const mx = (x1 + x2) / 2;
  const dir = x2 > x1 ? 1 : -1;
  return (
    <g>
      <path d={`M${x1} ${y}Q${mx} ${y - h * 2} ${x2} ${y}`} fill="none" stroke={color} strokeWidth="2.2" />
      <polygon points={`${x2},${y} ${x2 - dir * 6},${y - 7} ${x2 - dir * 1},${y - 8}`} fill={color} />
      {label ? <text x={mx} y={y - h - 4} textAnchor="middle" className="sim-tag" fill={color}>{label}</text> : null}
    </g>
  );
}

const niceEvery = (span: number) => (span <= 20 ? [1, 1] : span <= 50 ? [1, 5] : span <= 100 ? [5, 10] : span <= 200 ? [10, 20] : span <= 500 ? [10, 50] : span <= 1000 ? [50, 100] : [span / 20, span / 10]);

export default function NumLine({ spec, lang }: SimProps) {
  switch (spec.opts.mode) {
    case "skip": return <Skip spec={spec} lang={lang} />;
    case "round": return <Round spec={spec} lang={lang} />;
    case "fraction": return <Fraction spec={spec} lang={lang} />;
    case "decimal": return <Decimal spec={spec} lang={lang} />;
    case "integers": return <Integers spec={spec} lang={lang} />;
    default: return <Jump spec={spec} lang={lang} />;
  }
}

function Jump({ spec, lang }: SimProps) {
  const min = Number(spec.opts.min ?? 0), max = Number(spec.opts.max ?? 20);
  const sub = spec.opts.op === "sub";
  const split = spec.args.includes("split");
  const [a, setA] = useState(clamp(Number(spec.opts.a ?? 5), min, max));
  const [b, setB] = useState(clamp(Number(spec.opts.b ?? 3), 0, max - min));
  const c = clamp(sub ? a - b : a + b, min, max);
  const real = sub ? a - b : a + b;
  const [ev, lab] = niceEvery(max - min);
  const X = (v: number) => PAD + ((v - min) / (max - min)) * (340 - 2 * PAD);
  const dir = sub ? -1 : 1;
  const hops: Array<[number, number, string]> = [];
  // the round ten between a and the answer, when a jump of ones crosses one
  const ten = sub ? Math.floor((a - 1) / 10) * 10 : Math.ceil((a + 1) / 10) * 10;
  const viaTen = split && b < 10 && b > 0 && (sub ? a - b < ten : a + b > ten) && a % 10 !== 0;
  if (viaTen) {
    hops.push([a, ten, `${sub ? "−" : "+"}${Math.abs(ten - a)}`]);
    hops.push([ten, a + dir * b, `${sub ? "−" : "+"}${b - Math.abs(ten - a)}`]);
  } else if (split && b >= 10) {
    const tens = Math.floor(b / 10) * 10, ones = b - tens;
    hops.push([a, a + dir * tens, `${sub ? "−" : "+"}${tens}`]);
    if (ones) hops.push([a + dir * tens, a + dir * b, `${sub ? "−" : "+"}${ones}`]);
  } else if (b <= 10 && max - min <= 20) {
    for (let k = 0; k < b; k++) hops.push([a + dir * k, a + dir * (k + 1), ""]);
  } else if (b) hops.push([a, a + dir * b, `${sub ? "−" : "+"}${b}`]);
  const out = real < min || real > max;
  return (
    <ArtFrame kind="experiment" title={L(W.jump, lang)} body={spec.body || L(split ? (b < 10 ? W.jumpTen : W.jumpSplit) : W.jumpAdd, lang)}>
      <Stage w={340} h={96} label={L(W.jump, lang)}>
        <Line min={min} max={max} every={ev} label={lab} />
        {!out ? hops.map(([p, q, s], i) => <Hop key={i} x1={X(p)} x2={X(q)} y={60} color={i % 2 ? COLORS.b : COLORS.a} label={s} />) : null}
        <circle cx={X(a)} cy={66} r="6" fill={COLORS.a} stroke="#fff" strokeWidth="2" />
        {!out ? <circle cx={X(c)} cy={66} r="6" fill={COLORS.d} stroke="#fff" strokeWidth="2" /> : null}
        {!out && ev !== lab ? <text x={X(c)} y={93} textAnchor="middle" className="sim-tag" fill={COLORS.d}>{num(c, lang)}</text> : null}
      </Stage>
      <Sum parts={[[num(a, lang), COLORS.a], sub ? " − " : " + ", String(b), ...(viaTen && !out ? [" = ", [num(a, lang), COLORS.a], `${sub ? " − " : " + "}${Math.abs(ten - a)}${sub ? " − " : " + "}${b - Math.abs(ten - a)}`] as Array<string | [string, string]> : []), " = ", [out ? "?" : num(c, lang), COLORS.d]]} />
      <div className="art-row">
        <NumPick label={L(W.start, lang)} value={a} min={min} max={max} onChange={setA} lang={lang} color={COLORS.a} />
        <NumPick label={L(W.jumpBy, lang)} value={b} min={0} max={max - min} onChange={setB} lang={lang} color={COLORS.b} />
      </div>
    </ArtFrame>
  );
}

function Skip({ spec, lang }: SimProps) {
  const [step, setStep] = useState(clamp(Number(spec.opts.step ?? 5), 1, 25));
  const max = Number(spec.opts.max ?? step * 10);
  const [k, setK] = useState(clamp(Number(spec.opts.n ?? 4), 0, 10));
  const top = Math.max(max, step * 10);
  const X = (v: number) => PAD + (v / top) * (340 - 2 * PAD);
  const [ev, lab] = niceEvery(top);
  const steps = [2, 3, 4, 5, 10].includes(step) ? [2, 3, 4, 5, 10] : [2, 3, 4, 5, step].sort((x, y) => x - y);
  return (
    <ArtFrame kind="experiment" title={L(W.skip, lang)} body={spec.body || L(W.skipHint, lang)}>
      <Stage w={340} h={96} label={L(W.skip, lang)}>
        <Line min={0} max={top} every={ev} label={lab} mark={(v) => v > 0 && v <= k * step && v % step === 0} />
        {Array.from({ length: k }, (_, i) => <Hop key={i} x1={X(i * step)} x2={X((i + 1) * step)} y={60} color={i % 2 ? COLORS.b : COLORS.a} label={String((i + 1) * step)} dy={-4} />)}
      </Stage>
      <Sum parts={k ? [Array.from({ length: k }, () => String(step)).join(" + "), " = ", [`${k} ${times(lang)} ${step}`, COLORS.a], " = ", [String(k * step), COLORS.d]] : ["0"]} />
      <div className="art-row">
        <Counter label={L(W.hops, lang)} value={k} min={0} max={10} onChange={setK} lang={lang} color={COLORS.a} />
      </div>
      <p className="art-ctrl-label">{L(W.step, lang)}</p>
      <Choice value={String(step)} options={steps.map((s) => [String(s), String(s)] as [string, string])} onChange={(s) => setStep(Number(s))} />
    </ArtFrame>
  );
}

function Round({ spec, lang }: SimProps) {
  const [unit, setUnit] = useState(Number(spec.opts.unit ?? 10));
  const min0 = Number(spec.opts.min ?? 0), max0 = Number(spec.opts.max ?? unit * 10);
  const [x, setX] = useState(clamp(Number(spec.opts.x ?? 47), min0, max0));
  const lo = Math.floor(x / unit) * unit, hi = lo + unit;
  const r = x - lo >= unit / 2 ? hi : lo;
  const mid = x - lo === unit / 2;
  const X = (v: number) => PAD + ((v - lo + unit * 0.1) / (unit * 1.2)) * (340 - 2 * PAD);
  const units = [10, 100, 1000].filter((u) => u < max0 - min0 || u === unit);
  const name = unit === 10 ? W.tens : unit === 100 ? W.hundreds : W.thousands;
  const msg = (mid ? L(W.middle, lang) : L(W.closer, lang)).replace("{x}", num(x, lang)).replace("{r}", num(r, lang));
  return (
    <ArtFrame kind="look" title={L(W.round, lang)} body={spec.body || L(W.roundHint, lang)}>
      <Stage w={340} h={100} label={L(W.round, lang)}>
        <line x1={PAD - 10} x2={340 - PAD + 10} y1={60} y2={60} stroke={COLORS.line} strokeWidth="2" />
        {Array.from({ length: 11 }, (_, i) => lo + (i * unit) / 10).map((v, i) => (
          <line key={i} x1={X(v)} x2={X(v)} y1={i % 10 === 0 ? 50 : i === 5 ? 53 : 56} y2={i % 10 === 0 ? 70 : i === 5 ? 67 : 64} stroke={i === 5 ? "#94a3b8" : COLORS.line} strokeWidth={i % 10 === 0 ? 2 : 1} />
        ))}
        <text x={X(lo)} y={86} textAnchor="middle" className="sim-tag" fill={r === lo ? COLORS.c : COLORS.line}>{num(lo, lang)}</text>
        <text x={X(hi)} y={86} textAnchor="middle" className="sim-tag" fill={r === hi ? COLORS.c : COLORS.line}>{num(hi, lang)}</text>
        <text x={X(lo + unit / 2)} y={84} textAnchor="middle" className="sim-axis">{num(lo + unit / 2, lang)}</text>
        <Hop x1={X(x)} x2={X(r)} y={54} color={COLORS.c} />
        <circle cx={X(x)} cy={60} r="7" fill={COLORS.d} stroke="#fff" strokeWidth="2" />
        <text x={X(x)} y={30} textAnchor="middle" className="sim-tag" fill={COLORS.d}>{num(x, lang)}</text>
      </Stage>
      <Readouts items={[[L(W.number, lang), num(x, lang), COLORS.d], [`${L(W.to, lang)} ${L(name, lang)}`, `≈ ${num(r, lang)}`, COLORS.c]]} />
      <Note>{msg}</Note>
      <Slider label={L(W.number, lang)} value={x} min={min0} max={max0} step={1} digits={0} lang={lang} display={num(x, lang)} onChange={setX} />
      {units.length > 1 ? <Choice value={String(unit)} options={units.map((u) => [String(u), `${L(W.to, lang)} ${u}`] as [string, string])} onChange={(u) => setUnit(Number(u))} /> : null}
    </ArtFrame>
  );
}

function Fraction({ spec, lang }: SimProps) {
  const max = clamp(Number(spec.opts.max ?? 1), 1, 4);
  const [d, setD] = useState(clamp(Number(spec.opts.d ?? 4), 1, 12));
  const [n, setN] = useState(clamp(Number(spec.opts.n ?? 3), 0, 48));
  const nn = Math.min(n, d * max);
  const X = (v: number) => PAD + (v / max) * (340 - 2 * PAD);
  const g = gcd(nn, d) || 1;
  const whole = Math.floor(nn / d), rest = nn % d;
  return (
    <ArtFrame kind="look" title={L(W.fraction, lang)} body={spec.body || L(W.fractionHint, lang)}>
      <Stage w={340} h={100} label={L(W.fraction, lang)}>
        <rect x={X(0)} y={52} width={X(nn / d) - X(0)} height={10} rx="5" fill={COLORS.a} opacity="0.35" />
        <line x1={PAD - 10} x2={340 - PAD + 10} y1={62} y2={62} stroke={COLORS.line} strokeWidth="2" />
        {Array.from({ length: d * max + 1 }, (_, i) => (
          <g key={i}>
            <line x1={X(i / d)} x2={X(i / d)} y1={i % d === 0 ? 52 : 56} y2={i % d === 0 ? 72 : 68} stroke={COLORS.line} strokeWidth={i % d === 0 ? 2 : 1} />
            {i % d === 0 ? <text x={X(i / d)} y={88} textAnchor="middle" className="sim-tag" fill={COLORS.line}>{i / d}</text> : d <= 8 || max === 1 ? <text x={X(i / d)} y={84} textAnchor="middle" className="sim-axis">{`${i}/${d}`}</text> : null}
          </g>
        ))}
        <circle cx={X(nn / d)} cy={62} r="7" fill={COLORS.d} stroke="#fff" strokeWidth="2" />
        <text x={X(nn / d)} y={40} textAnchor="middle" className="sim-tag" fill={COLORS.d}>{`${nn}/${d}`}</text>
      </Stage>
      <Readouts
        items={[
          [L(W.value, lang), `${nn}/${d}`, COLORS.d],
          ...(nn >= d && rest ? [[L(W.mixed, lang), `${whole} ${rest}/${d}`, COLORS.a] as [string, string, string]] : []),
          ...(g > 1 ? [[L(W.simplest, lang), d / g === 1 ? String(nn / g) : `${nn / g}/${d / g}`, COLORS.c] as [string, string, string]] : []),
        ]}
      />
      <div className="art-row">
        <Counter label={L(W.parts, lang)} value={d} min={1} max={12} onChange={setD} lang={lang} color={COLORS.b} />
        <Counter label={L(W.taken, lang)} value={nn} min={0} max={d * max} onChange={setN} lang={lang} color={COLORS.d} />
      </div>
    </ArtFrame>
  );
}

function Decimal({ spec, lang }: SimProps) {
  const [x, setX] = useState(clamp(Number(spec.opts.x ?? 0.37), 0, 0.99));
  const X = (v: number) => PAD + v * (340 - 2 * PAD);
  const lo = Math.floor(x * 10 + 1e-9) / 10;
  const Z = (v: number) => PAD + ((v - lo) / 0.1) * (340 - 2 * PAD);
  const hund = Math.round(x * 100);
  const dec = (v: number, k = 2) => num(Number(v.toFixed(k)), lang);
  return (
    <ArtFrame kind="look" title={L(W.decimal, lang)} body={spec.body || L(W.decimalHint, lang)}>
      <Stage w={340} h={150} label={L(W.decimal, lang)}>
        <line x1={PAD} x2={340 - PAD} y1={34} y2={34} stroke={COLORS.line} strokeWidth="2" />
        {Array.from({ length: 11 }, (_, i) => (
          <g key={i}>
            <line x1={X(i / 10)} x2={X(i / 10)} y1={27} y2={41} stroke={COLORS.line} strokeWidth={i % 5 === 0 ? 2 : 1} />
            <text x={X(i / 10)} y={54} textAnchor="middle" className="sim-axis">{dec(i / 10, 1)}</text>
          </g>
        ))}
        <rect x={X(lo)} y={28} width={X(lo + 0.1) - X(lo)} height={12} fill={COLORS.b} opacity="0.3" />
        <path d={`M${X(lo)} 40L${PAD} 96M${X(lo + 0.1)} 40L${340 - PAD} 96`} stroke={COLORS.b} strokeDasharray="3 3" />
        <circle cx={X(x)} cy={34} r="5" fill={COLORS.d} stroke="#fff" strokeWidth="1.5" />
        <line x1={PAD} x2={340 - PAD} y1={104} y2={104} stroke={COLORS.line} strokeWidth="2" />
        {Array.from({ length: 11 }, (_, i) => (
          <g key={i}>
            <line x1={Z(lo + i / 100)} x2={Z(lo + i / 100)} y1={i % 10 === 0 ? 96 : i === 5 ? 98 : 100} y2={i % 10 === 0 ? 112 : i === 5 ? 110 : 108} stroke={COLORS.line} strokeWidth={i % 10 === 0 ? 2 : 1} />
            <text x={Z(lo + i / 100)} y={126} textAnchor="middle" className="sim-axis">{dec(lo + i / 100)}</text>
          </g>
        ))}
        <circle cx={Z(x)} cy={104} r="7" fill={COLORS.d} stroke="#fff" strokeWidth="2" />
        <text x={Z(x)} y={88} textAnchor="middle" className="sim-tag" fill={COLORS.d}>{dec(x)}</text>
      </Stage>
      <Readouts items={[[L(W.value, lang), dec(x), COLORS.d], [L(W.asFraction, lang), `${hund}/100`, COLORS.a], ["", `${Math.floor(hund / 10)}/10 + ${hund % 10}/100`]]} />
      <Slider label={L(W.value, lang)} value={x} min={0} max={0.99} step={0.01} digits={2} lang={lang} onChange={setX} />
    </ArtFrame>
  );
}

function Integers({ spec, lang }: SimProps) {
  const min = Number(spec.opts.min ?? -10), max = Number(spec.opts.max ?? 10);
  const sub = spec.opts.op === "sub";
  const [a, setA] = useState(clamp(Number(spec.opts.a ?? -3), min, max));
  const [b, setB] = useState(clamp(Number(spec.opts.b ?? 5), min, max));
  const [abs, setAbs] = useState(spec.opts.show === "abs");
  const move = sub ? -b : b;
  const c = a + move;
  const out = c < min || c > max;
  const X = (v: number) => PAD + ((v - min) / (max - min)) * (340 - 2 * PAD);
  const s = (v: number) => (v < 0 ? `(−${-v})` : String(v));
  return (
    <ArtFrame kind={abs ? "look" : "experiment"} title={L(abs ? W.abs : W.integers, lang)} body={spec.body || L(abs ? W.absHint : W.integersHint, lang)}>
      <Stage w={340} h={100} label={L(W.integers, lang)}>
        <rect x={PAD - 10} y={60} width={X(0) - PAD + 10} height={12} fill="#dbeafe" />
        <rect x={X(0)} y={60} width={340 - PAD + 10 - X(0)} height={12} fill="#fee2e2" />
        <Line min={min} max={max} every={1} label={max - min > 20 ? 5 : 1} />
        {abs ? (
          <g>
            <path d={`M${X(0)} 82H${X(a)}`} stroke={COLORS.c} strokeWidth="4" />
            <text x={(X(0) + X(a)) / 2} y={96} textAnchor="middle" className="sim-tag" fill={COLORS.c}>{`|${a}| = ${Math.abs(a)}`}</text>
            {a !== 0 ? <circle cx={X(-a)} cy={66} r="7" fill={COLORS.b} stroke="#fff" strokeWidth="2" /> : null}
            {a !== 0 ? <text x={X(-a)} y={44} textAnchor="middle" className="sim-tag" fill={COLORS.b}>{num(-a, lang)}</text> : null}
          </g>
        ) : !out && move ? (
          <Hop x1={X(a)} x2={X(c)} y={60} color={move > 0 ? COLORS.d : COLORS.a} label={move > 0 ? `+${move}` : `−${-move}`} />
        ) : null}
        <circle cx={X(a)} cy={66} r="7" fill={COLORS.a} stroke="#fff" strokeWidth="2" />
        {!abs && !out ? <circle cx={X(c)} cy={66} r="7" fill={COLORS.d} stroke="#fff" strokeWidth="2" /> : null}
      </Stage>
      {abs ? (
        <Readouts items={[["a", num(a, lang), COLORS.a], [L(W.opposite, lang), num(-a, lang), COLORS.b], [L(W.absolute, lang), `|${num(a, lang)}| = ${Math.abs(a)}`, COLORS.c]]} />
      ) : (
        <Sum parts={[[num(a, lang), COLORS.a], sub ? " − " : " + ", s(b), ...(sub ? [" = ", num(a, lang), " + ", s(-b)] : []), " = ", [out ? "?" : num(c, lang), COLORS.d]]} />
      )}
      <div className="art-row">
        <Counter label="a" value={a} min={min} max={max} onChange={setA} lang={lang} color={COLORS.a} />
        {!abs ? <Counter label="b" value={b} min={min} max={max} onChange={setB} lang={lang} color={COLORS.d} /> : null}
      </div>
      <div className="art-chips"><Toggle on={abs} label={L(W.showAbs, lang)} onChange={setAbs} /></div>
    </ArtFrame>
  );
}
