"use client";

import { useState, type ReactNode } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { clamp, Readouts, Stage } from "../kit";
import { L, t } from "../labels";
import { COLORS, Counter, Sum } from "../math-kit";

/**
 * Area models for the identities of algebra 7 (a and b are lengths you can change):
 *   tiles a=3 b=2                 (a + b)² = a² + 2ab + b²
 *   tiles mode=minus a=5 b=2      (a − b)² = a² − 2ab + b²
 *   tiles mode=diff a=5 b=2       a² − b² = (a − b)(a + b): cut and move a strip
 *   tiles mode=product a=3 b=2 c=4 d=1   (a + b)(c + d) = ac + ad + bc + bd
 */
const W = {
  square: t("Look closely: the square of a sum", "Ուշադիր նայի՛ր․ գումարի քառակուսին", "Рассмотри: квадрат суммы"),
  squareHint: t("A square with side a + b is made of a square a², a square b² and two equal rectangles ab.", "a + b կողմով քառակուսին կազմված է a² քառակուսուց, b² քառակուսուց և երկու հավասար ab ուղղանկյուններից։", "Квадрат со стороной a + b состоит из квадрата a², квадрата b² и двух равных прямоугольников ab."),
  minus: t("Look closely: the square of a difference", "Ուշադիր նայի՛ր․ տարբերության քառակուսին", "Рассмотри: квадрат разности"),
  minusHint: t("Cut two strips a × b off the square a². The small square b² was cut off twice, so add it back once.", "a² քառակուսուց կտրի՛ր երկու a × b շերտ։ b² փոքր քառակուսին կտրվեց երկու անգամ, ուստի մեկ անգամ ետ ավելացրո՛ւ։", "Отрежь от квадрата a² две полосы a × b. Маленький квадрат b² отрезан дважды, поэтому один раз добавь его обратно."),
  diff: t("Look closely: the difference of squares", "Ուշադիր նայի՛ր․ քառակուսիների տարբերություն", "Рассмотри: разность квадратов"),
  diffHint: t("Cut b² out of the corner of a². Move the strip that is left over to the side: you get a rectangle (a + b) × (a − b).", "a²-ի անկյունից կտրի՛ր b²-ն։ Մնացած շերտը տեղափոխի՛ր կողքին․ կստանաս (a + b) × (a − b) ուղղանկյուն։", "Вырежи b² из угла квадрата a². Оставшуюся полосу переставь сбоку: получится прямоугольник (a + b) × (a − b)."),
  product: t("Look closely: multiplying two sums", "Ուշադիր նայի՛ր․ երկու գումարի արտադրյալ", "Рассмотри: произведение двух сумм"),
  productHint: t("Each term of the first bracket meets each term of the second: four rectangles, four products.", "Առաջին փակագծի յուրաքանչյուր անդամ հանդիպում է երկրորդի յուրաքանչյուր անդամին․ չորս ուղղանկյուն, չորս արտադրյալ։", "Каждое слагаемое первой скобки встречается с каждым слагаемым второй: четыре прямоугольника, четыре произведения."),
  area: t("Area", "Մակերես", "Площадь"),
  check: t("Check", "Ստուգում", "Проверка"),
  moved: t("Move the strip", "Տեղափոխել շերտը", "Переставить полосу"),
};

const CA = "#c7d2fe", CB = "#fde68a", CC = "#bbf7d0", CD = "#fecdd3";

function Box({ x, y, w, h, fill, label, u }: { x: number; y: number; w: number; h: number; fill: string; label: string; u: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w * u} height={h * u} fill={fill} stroke="#334155" strokeWidth="1.5" />
      {w * u > 18 && h * u > 14 ? <text x={x + (w * u) / 2} y={y + (h * u) / 2 + 4} textAnchor="middle" className="sim-tag">{label}</text> : null}
    </g>
  );
}

const side = (x: number, y: number, label: string, vertical = false) => (
  <text x={x} y={y} textAnchor="middle" className="sim-tag" fill={COLORS.line} transform={vertical ? `rotate(-90 ${x} ${y})` : undefined}>{label}</text>
);

export default function Tiles({ spec, lang }: SimProps) {
  const mode = (["minus", "diff", "product"].includes(spec.opts.mode ?? "") ? spec.opts.mode : "square") as "square" | "minus" | "diff" | "product";
  const [a, setA] = useState(clamp(Number(spec.opts.a ?? (mode === "square" ? 3 : 5)), 1, 8));
  const [b, setB] = useState(clamp(Number(spec.opts.b ?? 2), 1, 6));
  const [c, setC] = useState(clamp(Number(spec.opts.c ?? 4), 1, 6));
  const [d, setD] = useState(clamp(Number(spec.opts.d ?? 1), 1, 5));
  const [moved, setMoved] = useState(false);
  const bb = mode === "square" || mode === "product" ? b : Math.min(b, a - 1);
  const titles = { square: [W.square, W.squareHint], minus: [W.minus, W.minusHint], diff: [W.diff, W.diffHint], product: [W.product, W.productHint] } as const;
  const [title, hint] = titles[mode];
  let pic: ReactNode, sum: string, check: string;
  if (mode === "square") {
    const s = a + bb, u = Math.min(180 / s, 34), x0 = 70, y0 = 18;
    pic = (
      <g>
        <Box x={x0} y={y0} w={a} h={a} fill={CA} label="a²" u={u} />
        <Box x={x0 + a * u} y={y0} w={bb} h={a} fill={CB} label="ab" u={u} />
        <Box x={x0} y={y0 + a * u} w={a} h={bb} fill={CB} label="ab" u={u} />
        <Box x={x0 + a * u} y={y0 + a * u} w={bb} h={bb} fill={CC} label="b²" u={u} />
        {side(x0 + (a * u) / 2, y0 - 4, `a = ${a}`)}{side(x0 + a * u + (bb * u) / 2, y0 - 4, `b = ${bb}`)}
        {side(x0 - 8, y0 + (a * u) / 2, "a", true)}{side(x0 - 8, y0 + a * u + (bb * u) / 2, "b", true)}
      </g>
    );
    sum = "(a + b)² = a² + 2ab + b²";
    check = `(${a} + ${bb})² = ${a * a} + ${2 * a * bb} + ${bb * bb} = ${(a + bb) ** 2}`;
  } else if (mode === "minus") {
    const u = Math.min(180 / a, 34), x0 = 70, y0 = 18, r = a - bb;
    pic = (
      <g>
        <Box x={x0} y={y0} w={r} h={r} fill={CA} label="(a − b)²" u={u} />
        <rect x={x0 + r * u} y={y0} width={bb * u} height={a * u} fill={CD} fillOpacity="0.7" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="5 3" />
        <rect x={x0} y={y0 + r * u} width={a * u} height={bb * u} fill={CD} fillOpacity="0.7" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="5 3" />
        <Box x={x0 + r * u} y={y0 + r * u} w={bb} h={bb} fill={CC} label="b²" u={u} />
        <text x={x0 + r * u + (bb * u) / 2} y={y0 + (r * u) / 2 + 4} textAnchor="middle" className="sim-tag" fill="#e11d48">−ab</text>
        <text x={x0 + (r * u) / 2} y={y0 + r * u + (bb * u) / 2 + 4} textAnchor="middle" className="sim-tag" fill="#e11d48">−ab</text>
        <rect x={x0} y={y0} width={a * u} height={a * u} fill="none" stroke="#334155" strokeWidth="2" />
        {side(x0 + (a * u) / 2, y0 - 4, `a = ${a}`)}{side(x0 + r * u + (bb * u) / 2, y0 + a * u + 13, `b = ${bb}`)}
      </g>
    );
    sum = "(a − b)² = a² − 2ab + b²";
    check = `(${a} − ${bb})² = ${a * a} − ${2 * a * bb} + ${bb * bb} = ${r * r}`;
  } else if (mode === "diff") {
    const u = Math.min(150 / (a + bb), 26), x0 = 40, y0 = 20, r = a - bb;
    // the L-shape a² − b² = big rectangle a × (a − b) on top + strip (a − b) × b below-left
    pic = (
      <g>
        <Box x={x0} y={y0} w={a} h={r} fill={CA} label="a(a − b)" u={u} />
        {moved ? (
          <g>
            <Box x={x0 + a * u} y={y0} w={bb} h={r} fill={CB} label="b(a − b)" u={u} />
            <rect x={x0} y={y0 + r * u} width={r * u} height={bb * u} fill="none" stroke="#94a3b8" strokeDasharray="4 3" />
            {side(x0 + ((a + bb) * u) / 2, y0 - 5, `a + b = ${a + bb}`)}
            {side(x0 + (a + bb) * u + 10, y0 + (r * u) / 2, `a − b = ${r}`, true)}
          </g>
        ) : (
          <g>
            <Box x={x0} y={y0 + r * u} w={r} h={bb} fill={CB} label="" u={u} />
            <rect x={x0 + r * u} y={y0 + r * u} width={bb * u} height={bb * u} fill="#fff" stroke="#e11d48" strokeDasharray="4 3" />
            <text x={x0 + r * u + (bb * u) / 2} y={y0 + r * u + (bb * u) / 2 + 4} textAnchor="middle" className="sim-tag" fill="#e11d48">−b²</text>
            {side(x0 + (a * u) / 2, y0 - 5, `a = ${a}`)}
          </g>
        )}
      </g>
    );
    sum = "a² − b² = (a − b)(a + b)";
    check = `${a * a} − ${bb * bb} = ${r} · ${a + bb} = ${r * (a + bb)}`;
  } else {
    const W1 = a + bb, H1 = c + d, u = Math.min(190 / Math.max(W1, H1 * 1.2), 30), x0 = 70, y0 = 20;
    pic = (
      <g>
        <Box x={x0} y={y0} w={a} h={c} fill={CA} label="ac" u={u} />
        <Box x={x0 + a * u} y={y0} w={bb} h={c} fill={CB} label="bc" u={u} />
        <Box x={x0} y={y0 + c * u} w={a} h={d} fill={CC} label="ad" u={u} />
        <Box x={x0 + a * u} y={y0 + c * u} w={bb} h={d} fill={CD} label="bd" u={u} />
        {side(x0 + (a * u) / 2, y0 - 5, `a = ${a}`)}{side(x0 + a * u + (bb * u) / 2, y0 - 5, `b = ${bb}`)}
        {side(x0 - 8, y0 + (c * u) / 2, `c = ${c}`, true)}{side(x0 - 8, y0 + c * u + (d * u) / 2, `d = ${d}`, true)}
      </g>
    );
    sum = "(a + b)(c + d) = ac + bc + ad + bd";
    check = `${a + bb} · ${c + d} = ${a * c} + ${bb * c} + ${a * d} + ${bb * d} = ${(a + bb) * (c + d)}`;
  }
  return (
    <ArtFrame kind="look" title={L(title, lang)} body={spec.body || L(hint, lang)}>
      <Stage w={320} h={230} label={sum}>{pic}</Stage>
      <Sum parts={[[sum, COLORS.a]]} />
      <Readouts items={[[L(W.check, lang), check, COLORS.c]]} />
      <div className="art-row">
        <Counter label="a" value={a} min={mode === "square" || mode === "product" ? 1 : 2} max={8} onChange={setA} lang={lang} color={COLORS.a} />
        <Counter label="b" value={bb} min={1} max={mode === "square" || mode === "product" ? 6 : Math.max(1, a - 1)} onChange={setB} lang={lang} color={COLORS.b} />
      </div>
      {mode === "product" ? (
        <div className="art-row">
          <Counter label="c" value={c} min={1} max={6} onChange={setC} lang={lang} color={COLORS.c} />
          <Counter label="d" value={d} min={1} max={5} onChange={setD} lang={lang} color={COLORS.d} />
        </div>
      ) : null}
      {mode === "diff" ? (
        <div className="art-chips">
          <button type="button" className={`art-chip${moved ? " is-active" : ""}`} aria-pressed={moved} onClick={() => setMoved(!moved)}>{L(W.moved, lang)}</button>
        </div>
      ) : null}
    </ArtFrame>
  );
}
