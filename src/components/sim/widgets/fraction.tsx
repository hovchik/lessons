"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Choice, clamp, Note, Readouts, Stage } from "../kit";
import { L, t } from "../labels";
import { COLORS, Counter, divide, gcd, lcm, num, Sum, times } from "../math-kit";

/**
 * Fractions as pictures:
 *   fraction n=3 d=4 [shape=circle]   a whole cut into equal parts; more than one whole gives a mixed number
 *   fraction mode=compare a=2/3 b=3/5 two fractions of the same whole side by side
 *   fraction mode=equiv n=2 d=3       cutting every part again gives an equal fraction
 *   fraction mode=of n=3 d=4 of=12    a fraction of a number: share into d groups, take n of them
 *   fraction mode=add a=1/4 b=2/4 [op=sub]  adding and subtracting; different denominators go to a common one
 */
const W = {
  parts: t("Look closely: parts of a whole", "Ուշադիր նայի՛ր․ ամբողջի մասերը", "Рассмотри: доли целого"),
  partsHint: t("The denominator tells into how many equal parts the whole is cut, the numerator how many parts we take.", "Հայտարարը ցույց է տալիս, թե քանի հավասար մասի է բաժանված ամբողջը, համարիչը՝ քանի մաս ենք վերցրել։", "Знаменатель показывает, на сколько равных частей разделили целое, числитель — сколько частей взяли."),
  compare: t("Experiment: which fraction is bigger?", "Փորձ․ ո՞ր կոտորակն է մեծ", "Опыт: какая дробь больше?"),
  compareHint: t("Both strips are the same whole. Compare how much of each is coloured.", "Երկու շերտերն էլ նույն ամբողջն են։ Համեմատի՛ր, թե յուրաքանչյուրից որքան է ներկված։", "Обе полоски — одно и то же целое. Сравни, какая часть каждой закрашена."),
  equiv: t("Experiment: equal fractions", "Փորձ․ հավասար կոտորակներ", "Опыт: равные дроби"),
  equivHint: t("Cut every part into smaller pieces. The coloured amount stays the same, only the numbers grow.", "Յուրաքանչյուր մաս բաժանի՛ր ավելի մանր կտորների։ Ներկված մասը նույնն է մնում, մեծանում են միայն թվերը։", "Разрежь каждую часть на более мелкие кусочки. Закрашенная часть не меняется, растут только числа."),
  of: t("Experiment: a fraction of a number", "Փորձ․ թվի մասը", "Опыт: дробь от числа"),
  ofHint: t("Share the objects equally into as many groups as the denominator, then take as many groups as the numerator.", "Առարկաները հավասարապես բաժանի՛ր այնքան խմբի, որքան հայտարարն է, հետո վերցրո՛ւ այնքան խումբ, որքան համարիչն է։", "Раздели предметы поровну на столько групп, каков знаменатель, и возьми столько групп, каков числитель."),
  add: t("Experiment: adding fractions", "Փորձ․ կոտորակների գումարում", "Опыт: сложение дробей"),
  addHint: t("Parts can be added only when they are the same size, so bring the fractions to a common denominator first.", "Կարելի է գումարել միայն նույն չափի մասեր, ուստի նախ կոտորակները բերի՛ր ընդհանուր հայտարարի։", "Складывать можно только одинаковые доли, поэтому сначала приведи дроби к общему знаменателю."),
  sub: t("Experiment: subtracting fractions", "Փորձ․ կոտորակների հանում", "Опыт: вычитание дробей"),
  num: t("Numerator", "Համարիչ", "Числитель"),
  den: t("Denominator", "Հայտարար", "Знаменатель"),
  cut: t("Cut each part into", "Յուրաքանչյուր մասը բաժանել", "Разрезать каждую часть на"),
  of_: t("Number of objects", "Առարկաների քանակը", "Количество предметов"),
  bar: t("Strip", "Շերտ", "Полоска"),
  circle: t("Circle", "Շրջան", "Круг"),
  mixed: t("Mixed number", "Խառը թիվ", "Смешанное число"),
  proper: t("Proper fraction: less than one whole.", "Կանոնավոր կոտորակ է՝ մեկ ամբողջից փոքր։", "Правильная дробь: меньше одного целого."),
  whole: t("Exactly whole: the numerator equals the denominator (or is a multiple of it).", "Ճիշտ ամբողջ է․ համարիչը հավասար է հայտարարին (կամ նրա բազմապատիկն է)։", "Ровно целое: числитель равен знаменателю (или кратен ему)."),
  improper: t("Improper fraction: at least one whole.", "Անկանոն կոտորակ է՝ առնվազն մեկ ամբողջ։", "Неправильная дробь: не меньше одного целого."),
  first: t("First fraction", "Առաջին կոտորակ", "Первая дробь"),
  second: t("Second fraction", "Երկրորդ կոտորակ", "Вторая дробь"),
  common: t("Common denominator", "Ընդհանուր հայտարար", "Общий знаменатель"),
  answer: t("Answer", "Պատասխան", "Ответ"),
  oneGroup: t("One group", "Մեկ խումբ", "Одна группа"),
};

type Frac = [number, number];
const parse = (s: string | undefined, f: Frac): Frac => {
  const m = s?.match(/^(\d+)\/(\d+)$/);
  return m ? [Number(m[1]), Math.max(1, Number(m[2]))] : f;
};
const show = ([n, d]: Frac) => `${n}/${d}`;
const simplest = ([n, d]: Frac): Frac => { const g = gcd(n, d) || 1; return [n / g, d / g]; };

/** A strip of `d` equal parts, the first `n` coloured; split=k draws thin cuts inside each part. */
function Strip({ x, y, w, h = 26, n, d, color, split = 1 }: { x: number; y: number; w: number; h?: number; n: number; d: number; color: string; split?: number }) {
  const pw = w / d;
  return (
    <g>
      {Array.from({ length: d }, (_, i) => <rect key={i} x={x + i * pw} y={y} width={pw} height={h} fill={i < n ? color : "#fff"} stroke={COLORS.line} strokeWidth="1.5" />)}
      {split > 1 ? Array.from({ length: d * split }, (_, i) => (i % split ? <line key={i} x1={x + (i * pw) / split} x2={x + (i * pw) / split} y1={y} y2={y + h} stroke={COLORS.line} strokeWidth="0.8" strokeDasharray="3 2" /> : null)) : null}
    </g>
  );
}

function Pie({ cx, cy, r, n, d, color }: { cx: number; cy: number; r: number; n: number; d: number; color: string }) {
  if (d === 1) return <circle cx={cx} cy={cy} r={r} fill={n ? color : "#fff"} stroke={COLORS.line} strokeWidth="1.5" />;
  const pt = (k: number) => {
    const a = -Math.PI / 2 + (2 * Math.PI * k) / d;
    return `${(cx + r * Math.cos(a)).toFixed(2)} ${(cy + r * Math.sin(a)).toFixed(2)}`;
  };
  return (
    <g>
      {Array.from({ length: d }, (_, i) => <path key={i} d={`M${cx} ${cy}L${pt(i)}A${r} ${r} 0 0 1 ${pt(i + 1)}Z`} fill={i < n ? color : "#fff"} stroke={COLORS.line} strokeWidth="1.5" />)}
    </g>
  );
}

export default function Fraction({ spec, lang }: SimProps) {
  switch (spec.opts.mode) {
    case "compare": return <Compare spec={spec} lang={lang} />;
    case "equiv": return <Equiv spec={spec} lang={lang} />;
    case "of": return <Of spec={spec} lang={lang} />;
    case "add": return <Add spec={spec} lang={lang} />;
    default: return <Parts spec={spec} lang={lang} />;
  }
}

function Parts({ spec, lang }: SimProps) {
  const [d, setD] = useState(clamp(Number(spec.opts.d ?? 4), 1, 12));
  const [n, setN] = useState(clamp(Number(spec.opts.n ?? 3), 0, 36));
  const [shape, setShape] = useState(spec.opts.shape === "circle" ? "circle" : "bar");
  const nn = Math.min(n, d * 3);
  const wholes = Math.max(1, Math.ceil(nn / d));
  const kind = nn < d ? W.proper : nn % d === 0 ? W.whole : W.improper;
  const s = simplest([nn, d]);
  return (
    <ArtFrame kind="look" title={L(W.parts, lang)} body={spec.body || L(W.partsHint, lang)}>
      <Stage w={340} h={shape === "circle" ? 110 : 40 * wholes + 16} label={show([nn, d])}>
        {shape === "circle"
          ? Array.from({ length: wholes }, (_, k) => <Pie key={k} cx={60 + k * 110} cy={55} r={45} n={clamp(nn - k * d, 0, d)} d={d} color={COLORS.a} />)
          : Array.from({ length: wholes }, (_, k) => <Strip key={k} x={20} y={10 + k * 40} w={300} n={clamp(nn - k * d, 0, d)} d={d} color={COLORS.a} />)}
      </Stage>
      <Readouts
        items={[
          [L(W.num, lang), String(nn), COLORS.a],
          [L(W.den, lang), String(d), COLORS.b],
          ...(nn > d && nn % d ? [[L(W.mixed, lang), `${Math.floor(nn / d)} ${nn % d}/${d}`, COLORS.c] as [string, string, string]] : []),
          ...(s[1] !== d && nn ? [["=", s[1] === 1 ? String(s[0]) : show(s), COLORS.c] as [string, string, string]] : []),
        ]}
      />
      <Note>{L(kind, lang)}</Note>
      <div className="art-row">
        <Counter label={L(W.num, lang)} value={nn} min={0} max={d * 3} onChange={setN} lang={lang} color={COLORS.a} />
        <Counter label={L(W.den, lang)} value={d} min={1} max={12} onChange={setD} lang={lang} color={COLORS.b} />
      </div>
      <Choice value={shape} options={[["bar", L(W.bar, lang)], ["circle", L(W.circle, lang)]]} onChange={setShape} />
    </ArtFrame>
  );
}

function Compare({ spec, lang }: SimProps) {
  const [a, setA] = useState(parse(spec.opts.a, [2, 3]));
  const [b, setB] = useState(parse(spec.opts.b, [3, 5]));
  const va = a[0] / a[1], vb = b[0] / b[1];
  const sign = Math.abs(va - vb) < 1e-9 ? "=" : va > vb ? ">" : "<";
  const c = lcm(a[1], b[1]);
  return (
    <ArtFrame kind="experiment" title={L(W.compare, lang)} body={spec.body || L(W.compareHint, lang)}>
      <Stage w={340} h={90} label={`${show(a)} ${sign} ${show(b)}`}>
        <Strip x={50} y={10} w={280} n={Math.min(a[0], a[1])} d={a[1]} color={COLORS.a} />
        <Strip x={50} y={52} w={280} n={Math.min(b[0], b[1])} d={b[1]} color={COLORS.b} />
        <text x={10} y={28} className="sim-tag" fill={COLORS.a}>{show(a)}</text>
        <text x={10} y={70} className="sim-tag" fill={COLORS.b}>{show(b)}</text>
        <line x1={50 + 280 * Math.min(1, va)} x2={50 + 280 * Math.min(1, va)} y1={4} y2={86} stroke={COLORS.a} strokeDasharray="3 3" />
        <line x1={50 + 280 * Math.min(1, vb)} x2={50 + 280 * Math.min(1, vb)} y1={4} y2={86} stroke={COLORS.b} strokeDasharray="3 3" />
      </Stage>
      <Sum parts={[[show(a), COLORS.a], ` ${sign} `, [show(b), COLORS.b]]} />
      {c <= 60 ? <Note>{`${show(a)} = ${show([(a[0] * c) / a[1], c])},  ${show(b)} = ${show([(b[0] * c) / b[1], c])}`}</Note> : null}
      <div className="art-row">
        <Counter label={`${L(W.first, lang)}: ${L(W.num, lang)}`} value={a[0]} min={0} max={a[1]} onChange={(v) => setA([v, a[1]])} lang={lang} color={COLORS.a} />
        <Counter label={L(W.den, lang)} value={a[1]} min={1} max={12} onChange={(v) => setA([Math.min(a[0], v), v])} lang={lang} color={COLORS.a} />
      </div>
      <div className="art-row">
        <Counter label={`${L(W.second, lang)}: ${L(W.num, lang)}`} value={b[0]} min={0} max={b[1]} onChange={(v) => setB([v, b[1]])} lang={lang} color={COLORS.b} />
        <Counter label={L(W.den, lang)} value={b[1]} min={1} max={12} onChange={(v) => setB([Math.min(b[0], v), v])} lang={lang} color={COLORS.b} />
      </div>
    </ArtFrame>
  );
}

function Equiv({ spec, lang }: SimProps) {
  const n = clamp(Number(spec.opts.n ?? 2), 0, 12), d = clamp(Number(spec.opts.d ?? 3), 1, 12);
  const [k, setK] = useState(2);
  return (
    <ArtFrame kind="experiment" title={L(W.equiv, lang)} body={spec.body || L(W.equivHint, lang)}>
      <Stage w={340} h={90} label={`${n}/${d} = ${n * k}/${d * k}`}>
        <Strip x={50} y={10} w={280} n={n} d={d} color={COLORS.a} />
        <Strip x={50} y={52} w={280} n={n} d={d} color={COLORS.c} split={k} />
        <text x={10} y={28} className="sim-tag" fill={COLORS.a}>{`${n}/${d}`}</text>
        <text x={10} y={70} className="sim-tag" fill={COLORS.c}>{`${n * k}/${d * k}`}</text>
      </Stage>
      <Sum parts={[[`${n}/${d}`, COLORS.a], " = ", `(${n}${times(lang)}${k})/(${d}${times(lang)}${k})`, " = ", [`${n * k}/${d * k}`, COLORS.c]]} />
      <div className="art-row"><Counter label={L(W.cut, lang)} value={k} min={1} max={6} onChange={setK} lang={lang} color={COLORS.c} /></div>
    </ArtFrame>
  );
}

function Of({ spec, lang }: SimProps) {
  const [d, setD] = useState(clamp(Number(spec.opts.d ?? 4), 1, 10));
  const [n, setN] = useState(clamp(Number(spec.opts.n ?? 3), 0, 10));
  const total = clamp(Number(spec.opts.of ?? 12), 1, 60);
  const nn = Math.min(n, d);
  const even = total % d === 0;
  const per = Math.floor(total / d);
  const gw = 320 / d;
  return (
    <ArtFrame kind="experiment" title={L(W.of, lang)} body={spec.body || L(W.ofHint, lang)}>
      <Stage w={340} h={30 + Math.ceil(Math.max(per, 1) / 3) * 18 + 20} label={`${nn}/${d} · ${total}`}>
        {even ? Array.from({ length: d }, (_, g) => (
          <g key={g}>
            <rect x={10 + g * gw + 2} y={8} width={gw - 4} height={Math.ceil(per / 3) * 18 + 12} rx="10" fill={g < nn ? "#e0e7ff" : "#f8fafc"} stroke={g < nn ? COLORS.a : "#cbd5e1"} strokeWidth="2" />
            {Array.from({ length: per }, (_, i) => <circle key={i} cx={10 + g * gw + gw / 2 + ((i % 3) - 1) * Math.min(16, gw / 3.4)} cy={22 + Math.floor(i / 3) * 18} r={Math.min(6.5, gw / 8)} fill={g < nn ? COLORS.a : COLORS.b} />)}
          </g>
        )) : <text x={170} y={30} textAnchor="middle" className="sim-tag" fill={COLORS.d}>{`${total} ${divide(lang)} ${d} = ?`}</text>}
      </Stage>
      {even ? (
        <>
          <Readouts items={[[L(W.oneGroup, lang), `${total} ${divide(lang)} ${d} = ${per}`, COLORS.b], [L(W.answer, lang), `${per} ${times(lang)} ${nn} = ${per * nn}`, COLORS.a]]} />
          <Sum parts={[[`${nn}/${d}`, COLORS.a], ` ${lang === "en" ? "of" : times(lang)} ${num(total, lang)} = `, [num(per * nn, lang), COLORS.d]]} />
        </>
      ) : null}
      <div className="art-row">
        <Counter label={L(W.num, lang)} value={nn} min={0} max={d} onChange={setN} lang={lang} color={COLORS.a} />
        <Counter label={L(W.den, lang)} value={d} min={1} max={10} onChange={(v) => setD(v)} lang={lang} color={COLORS.b} />
      </div>
    </ArtFrame>
  );
}

function Add({ spec, lang }: SimProps) {
  const sub = spec.opts.op === "sub";
  const [a, setA] = useState(parse(spec.opts.a, [1, 4]));
  const [b, setB] = useState(parse(spec.opts.b, [2, 4]));
  const c = lcm(a[1], b[1]);
  const an = (a[0] * c) / a[1], bn = (b[0] * c) / b[1];
  const rn = sub ? an - bn : an + bn;
  const res = simplest([Math.max(0, rn), c]);
  const wholes = Math.max(1, Math.ceil(Math.max(an, rn) / c));
  const w = 280 / wholes;
  return (
    <ArtFrame kind="experiment" title={L(sub ? W.sub : W.add, lang)} body={spec.body || L(W.addHint, lang)}>
      <Stage w={340} h={134} label={`${show(a)} ${sub ? "−" : "+"} ${show(b)}`}>
        <text x={8} y={26} className="sim-tag" fill={COLORS.a}>{show(a)}</text>
        <text x={8} y={64} className="sim-tag" fill={COLORS.b}>{show(b)}</text>
        <text x={8} y={110} className="sim-tag" fill={COLORS.d}>{rn < 0 ? "< 0" : show([rn, c])}</text>
        {Array.from({ length: wholes }, (_, k) => (
          <g key={k}>
            <Strip x={50 + k * w} y={10} w={w - 4} h={22} n={clamp(a[0] - k * a[1], 0, a[1])} d={a[1]} color={COLORS.a} />
            <Strip x={50 + k * w} y={48} w={w - 4} h={22} n={clamp(b[0] - k * b[1], 0, b[1])} d={b[1]} color={COLORS.b} />
            {rn >= 0 ? <Strip x={50 + k * w} y={94} w={w - 4} h={22} n={clamp(rn - k * c, 0, c)} d={c} color={COLORS.d} /> : null}
          </g>
        ))}
        <line x1={50} x2={330} y1={82} y2={82} stroke="#94a3b8" />
      </Stage>
      <Sum
        parts={
          a[1] === b[1]
            ? [[show(a), COLORS.a], sub ? " − " : " + ", [show(b), COLORS.b], " = ", [rn < 0 ? "?" : show([rn, c]), COLORS.d], ...(rn >= 0 && res[1] !== c ? [" = ", res[1] === 1 ? String(res[0]) : show(res)] : [])]
            : [[show(a), COLORS.a], sub ? " − " : " + ", [show(b), COLORS.b], " = ", `${an}/${c}`, sub ? " − " : " + ", `${bn}/${c}`, " = ", [rn < 0 ? "?" : show([rn, c]), COLORS.d], ...(rn >= 0 && res[1] !== c ? [" = ", res[1] === 1 ? String(res[0]) : show(res)] : [])]
        }
      />
      {a[1] !== b[1] ? <Note>{`${L(W.common, lang)}: ${c}`}</Note> : null}
      <div className="art-row">
        <Counter label={`${L(W.first, lang)}: ${L(W.num, lang)}`} value={a[0]} min={0} max={a[1] * 2} onChange={(v) => setA([v, a[1]])} lang={lang} color={COLORS.a} />
        <Counter label={L(W.den, lang)} value={a[1]} min={1} max={12} onChange={(v) => setA([a[0], v])} lang={lang} color={COLORS.a} />
      </div>
      <div className="art-row">
        <Counter label={`${L(W.second, lang)}: ${L(W.num, lang)}`} value={b[0]} min={0} max={b[1] * 2} onChange={(v) => setB([v, b[1]])} lang={lang} color={COLORS.b} />
        <Counter label={L(W.den, lang)} value={b[1]} min={1} max={12} onChange={(v) => setB([b[0], v])} lang={lang} color={COLORS.b} />
      </div>
    </ArtFrame>
  );
}
