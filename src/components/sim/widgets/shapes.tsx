"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { Tr } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Choice, clamp, Note, Readouts, Stage, Toggle } from "../kit";
import { L, t } from "../labels";
import { COLORS, Counter, Sum, times } from "../math-kit";

/**
 * Shapes and measurement:
 *   shapes                     flat shapes: tap one to learn its name, sides and corners
 *   shapes mode=rect a=5 b=3   perimeter and area of a rectangle on squared paper
 *   shapes mode=complex        area of an L-shaped figure: split it or cut a piece away
 *   shapes mode=box a=4 b=3 c=2  volume of a box built from unit cubes, layer by layer
 */
const W = {
  flat: t("Look closely: flat shapes", "Ուշադիր նայի՛ր․ հարթ պատկերներ", "Рассмотри: плоские фигуры"),
  flatHint: t("Tap a shape. Count its sides and corners (vertices) yourself before you read the answer.", "Սեղմի՛ր պատկերին։ Նախքան պատասխանը կարդալը ինքդ հաշվի՛ր նրա կողմերն ու գագաթները։", "Нажми на фигуру. Посчитай её стороны и углы (вершины) сам, прежде чем читать ответ."),
  rect: t("Experiment: perimeter and area", "Փորձ․ պարագիծ և մակերես", "Опыт: периметр и площадь"),
  rectHint: t("The perimeter is the length of the border; the area is how many unit squares fit inside.", "Պարագիծը եզրագծի երկարությունն է, մակերեսը՝ ներսում տեղավորվող միավոր քառակուսիների քանակը։", "Периметр — длина границы, площадь — сколько единичных квадратов помещается внутри."),
  complex: t("Look closely: area of a complex figure", "Ուշադիր նայի՛ր․ բարդ պատկերի մակերես", "Рассмотри: площадь сложной фигуры"),
  complexHint: t("Split the figure into rectangles and add their areas, or take the big rectangle and subtract the missing piece. Both ways give the same answer.", "Պատկերը բաժանի՛ր ուղղանկյունների և գումարի՛ր դրանց մակերեսները, կամ վերցրո՛ւ մեծ ուղղանկյունը և հանի՛ր պակասող կտորը։ Երկու ձևն էլ նույն պատասխանն են տալիս։", "Разбей фигуру на прямоугольники и сложи их площади или возьми большой прямоугольник и вычти недостающий кусок. Ответ один и тот же."),
  box: t("Build it: volume from unit cubes", "Կառուցի՛ր․ ծավալը միավոր խորանարդներից", "Построй: объём из единичных кубиков"),
  boxHint: t("One layer has length × width cubes. Stack as many layers as the height.", "Մեկ շերտում կա երկարություն × լայնություն խորանարդ։ Դարսի՛ր այնքան շերտ, որքան բարձրությունն է։", "В одном слое длина × ширина кубиков. Сложи столько слоёв, какова высота."),
  sides: t("Sides", "Կողմեր", "Стороны"),
  corners: t("Corners", "Գագաթներ", "Вершины"),
  length: t("Length", "Երկարություն", "Длина"),
  width: t("Width", "Լայնություն", "Ширина"),
  height: t("Height", "Բարձրություն", "Высота"),
  perimeter: t("Perimeter", "Պարագիծ", "Периметр"),
  area: t("Area", "Մակերես", "Площадь"),
  volume: t("Volume", "Ծավալ", "Объём"),
  showP: t("Border", "Եզրագիծ", "Граница"),
  showA: t("Squares", "Քառակուսիներ", "Квадраты"),
  splitWay: t("Split", "Բաժանել", "Разбить"),
  cutWay: t("Cut away", "Կտրել", "Вырезать"),
  layer: t("One layer", "Մեկ շերտ", "Один слой"),
  square: t("A square is a rectangle with all sides equal.", "Քառակուսին ուղղանկյուն է, որի բոլոր կողմերը հավասար են։", "Квадрат — это прямоугольник, у которого все стороны равны."),
  cm: t("cm", "սմ", "см"),
  cm2: t("cm²", "սմ²", "см²"),
  cm3: t("cm³", "սմ³", "см³"),
};

type Shape = { id: string; name: Tr; sides: number; corners: number; fact: Tr; draw: (cx: number, cy: number, active: boolean) => React.ReactNode };

const poly = (cx: number, cy: number, r: number, n: number, rot = -Math.PI / 2) =>
  Array.from({ length: n }, (_, i) => `${(cx + r * Math.cos(rot + (2 * Math.PI * i) / n)).toFixed(1)},${(cy + r * Math.sin(rot + (2 * Math.PI * i) / n)).toFixed(1)}`).join(" ");
const fillOf = (a: boolean, c: string) => (a ? c : `${c}55`);

const SHAPES: Shape[] = [
  { id: "circle", name: t("Circle", "Շրջան", "Круг"), sides: 0, corners: 0, fact: t("A circle has no sides and no corners: every point of its edge is the same distance from the centre.", "Շրջանը չունի ո՛չ կողմեր, ո՛չ գագաթներ․ նրա եզրի բոլոր կետերը կենտրոնից նույն հեռավորության վրա են։", "У круга нет ни сторон, ни углов: все точки его края на одном расстоянии от центра."), draw: (x, y, a) => <circle cx={x} cy={y} r={24} fill={fillOf(a, "#e11d48")} stroke="#9f1239" strokeWidth="2" /> },
  { id: "oval", name: t("Oval", "Օվալ", "Овал"), sides: 0, corners: 0, fact: t("An oval is like a stretched circle, like an egg or a running track.", "Օվալը ձգված շրջանի է նման, ինչպես ձուն կամ մարզադաշտի վազքուղին։", "Овал похож на вытянутый круг, как яйцо или беговая дорожка."), draw: (x, y, a) => <ellipse cx={x} cy={y} rx={30} ry={19} fill={fillOf(a, "#f59e0b")} stroke="#b45309" strokeWidth="2" /> },
  { id: "triangle", name: t("Triangle", "Եռանկյուն", "Треугольник"), sides: 3, corners: 3, fact: t("Tri means three: three sides, three corners. Triangles make bridges and roofs strong.", "Եռանկյունն ունի երեք կողմ և երեք գագաթ։ Եռանկյունները կամուրջներն ու տանիքները ամուր են դարձնում։", "Три стороны и три вершины. Треугольники делают мосты и крыши прочными."), draw: (x, y, a) => <polygon points={poly(x, y + 4, 28, 3)} fill={fillOf(a, "#10b981")} stroke="#047857" strokeWidth="2" /> },
  { id: "square", name: t("Square", "Քառակուսի", "Квадрат"), sides: 4, corners: 4, fact: t("All four sides are equal and all four corners are right angles.", "Բոլոր չորս կողմերը հավասար են, և բոլոր չորս անկյունները ուղիղ են։", "Все четыре стороны равны, и все четыре угла прямые."), draw: (x, y, a) => <rect x={x - 22} y={y - 22} width={44} height={44} fill={fillOf(a, "#4f46e5")} stroke="#312e81" strokeWidth="2" /> },
  { id: "rectangle", name: t("Rectangle", "Ուղղանկյուն", "Прямоугольник"), sides: 4, corners: 4, fact: t("Opposite sides are equal and all corners are right angles, like a door or a book.", "Հանդիպակաց կողմերը հավասար են, և բոլոր անկյունները ուղիղ են, ինչպես դուռը կամ գիրքը։", "Противоположные стороны равны, все углы прямые, как у двери или книги."), draw: (x, y, a) => <rect x={x - 32} y={y - 18} width={64} height={36} fill={fillOf(a, "#0ea5e9")} stroke="#0369a1" strokeWidth="2" /> },
  { id: "pentagon", name: t("Pentagon", "Հնգանկյուն", "Пятиугольник"), sides: 5, corners: 5, fact: t("Five sides and five corners. The black patches of a football are pentagons.", "Հինգ կողմ և հինգ գագաթ։ Ֆուտբոլի գնդակի սև կտորները հնգանկյուններ են։", "Пять сторон и пять вершин. Чёрные лоскутки футбольного мяча — пятиугольники."), draw: (x, y, a) => <polygon points={poly(x, y + 2, 27, 5)} fill={fillOf(a, "#8b5cf6")} stroke="#5b21b6" strokeWidth="2" /> },
  { id: "hexagon", name: t("Hexagon", "Վեցանկյուն", "Шестиугольник"), sides: 6, corners: 6, fact: t("Six sides and six corners. Bees build their honeycomb cells as hexagons.", "Վեց կողմ և վեց գագաթ։ Մեղուները մեղրախորիսխի բջիջները կառուցում են վեցանկյուն։", "Шесть сторон и шесть вершин. Пчёлы строят соты из шестиугольников."), draw: (x, y, a) => <polygon points={poly(x, y, 27, 6, 0)} fill={fillOf(a, "#84cc16")} stroke="#3f6212" strokeWidth="2" /> },
];

export default function Shapes({ spec, lang }: SimProps) {
  switch (spec.opts.mode) {
    case "rect": return <Rect spec={spec} lang={lang} />;
    case "complex": return <Complex spec={spec} lang={lang} />;
    case "box": return <Box spec={spec} lang={lang} />;
    default: return <Flat spec={spec} lang={lang} />;
  }
}

function Flat({ spec, lang }: SimProps) {
  const [sel, setSel] = useState(2);
  const s = SHAPES[sel];
  return (
    <ArtFrame kind="look" title={L(W.flat, lang)} body={spec.body || L(W.flatHint, lang)}>
      <Stage w={340} h={150} label={L(W.flat, lang)}>
        {SHAPES.map((sh, i) => {
          const cx = 45 + (i % 4) * 83, cy = 40 + Math.floor(i / 4) * 72;
          return (
            <g key={sh.id} onClick={() => setSel(i)} style={{ cursor: "pointer" }}>
              <rect x={cx - 38} y={cy - 33} width={76} height={66} rx="12" fill={i === sel ? "#fef3c7" : "transparent"} />
              {sh.draw(cx, cy, i === sel)}
            </g>
          );
        })}
      </Stage>
      <p className="math-chart-title">{L(s.name, lang)}</p>
      <Readouts items={[[L(W.sides, lang), String(s.sides), COLORS.a], [L(W.corners, lang), String(s.corners), COLORS.d]]} />
      <Note>{L(s.fact, lang)}</Note>
    </ArtFrame>
  );
}

function Rect({ spec, lang }: SimProps) {
  const [a, setA] = useState(clamp(Number(spec.opts.a ?? 5), 1, 12));
  const [b, setB] = useState(clamp(Number(spec.opts.b ?? 3), 1, 8));
  const [showP, setShowP] = useState(spec.opts.show !== "area");
  const [showA, setShowA] = useState(spec.opts.show !== "perimeter");
  const S = Math.min(24, 280 / Math.max(a, 1), 150 / Math.max(b, 1));
  const x0 = (340 - a * S) / 2, y0 = 22;
  const cm = L(W.cm, lang);
  return (
    <ArtFrame kind="experiment" title={L(W.rect, lang)} body={spec.body || L(W.rectHint, lang)}>
      <Stage w={340} h={b * S + 50} label={`${a} × ${b}`}>
        <defs><pattern id="sq-paper" width={S} height={S} patternUnits="userSpaceOnUse" x={x0} y={y0}><path d={`M${S} 0V${S}H0`} fill="none" stroke="#dbeafe" /></pattern></defs>
        <rect x={0} y={0} width={340} height={b * S + 50} fill="url(#sq-paper)" />
        {showA ? Array.from({ length: a * b }, (_, i) => (
          <g key={i}>
            <rect x={x0 + (i % a) * S + 1.5} y={y0 + Math.floor(i / a) * S + 1.5} width={S - 3} height={S - 3} rx="3" fill="#c7d2fe" />
            {S >= 18 ? <text x={x0 + (i % a) * S + S / 2} y={y0 + Math.floor(i / a) * S + S / 2 + 3.5} textAnchor="middle" className="sim-axis">{i + 1}</text> : null}
          </g>
        )) : null}
        <rect x={x0} y={y0} width={a * S} height={b * S} fill="none" stroke={showP ? COLORS.d : COLORS.line} strokeWidth={showP ? 4 : 2} />
        <text x={x0 + (a * S) / 2} y={y0 - 6} textAnchor="middle" className="sim-tag" fill={COLORS.d}>{`${a} ${cm}`}</text>
        <text x={x0 + a * S + 6} y={y0 + (b * S) / 2 + 4} className="sim-tag" fill={COLORS.d}>{`${b} ${cm}`}</text>
      </Stage>
      <Readouts items={[[L(W.perimeter, lang), `2 ${times(lang)} (${a} + ${b}) = ${2 * (a + b)} ${cm}`, COLORS.d], [L(W.area, lang), `${a} ${times(lang)} ${b} = ${a * b} ${L(W.cm2, lang)}`, COLORS.a]]} />
      {a === b ? <Note>{L(W.square, lang)}</Note> : null}
      <div className="art-row">
        <Counter label={L(W.length, lang)} value={a} min={1} max={12} onChange={setA} lang={lang} color={COLORS.d} />
        <Counter label={L(W.width, lang)} value={b} min={1} max={8} onChange={setB} lang={lang} color={COLORS.d} />
      </div>
      <div className="art-chips">
        <Toggle on={showP} label={L(W.showP, lang)} onChange={setShowP} />
        <Toggle on={showA} label={L(W.showA, lang)} onChange={setShowA} />
      </div>
    </ArtFrame>
  );
}

function Complex({ spec, lang }: SimProps) {
  const A = clamp(Number(spec.opts.a ?? 8), 3, 12), B = clamp(Number(spec.opts.b ?? 6), 3, 8);
  const c = clamp(Number(spec.opts.c ?? 3), 1, A - 1), d = clamp(Number(spec.opts.d ?? 2), 1, B - 1);
  const [way, setWay] = useState<"split" | "cut">("split");
  const S = Math.min(26, 300 / A, 150 / B);
  const x0 = (340 - A * S) / 2, y0 = 14;
  // The missing c × d piece is the top-right corner.
  const big = A * B, hole = c * d;
  const r1 = [(A - c), B] as const, r2 = [c, B - d] as const;
  const cm = L(W.cm, lang), cm2 = L(W.cm2, lang);
  return (
    <ArtFrame kind="look" title={L(W.complex, lang)} body={spec.body || L(W.complexHint, lang)}>
      <Stage w={340} h={B * S + 34} label={L(W.complex, lang)}>
        {way === "split" ? (
          <>
            <rect x={x0} y={y0} width={r1[0] * S} height={B * S} fill="#c7d2fe" stroke={COLORS.a} strokeWidth="2" />
            <rect x={x0 + r1[0] * S} y={y0 + d * S} width={c * S} height={r2[1] * S} fill="#fde68a" stroke={COLORS.b} strokeWidth="2" />
            <text x={x0 + (r1[0] * S) / 2} y={y0 + (B * S) / 2 + 4} textAnchor="middle" className="sim-tag" fill={COLORS.a}>{`${r1[0]} ${times(lang)} ${r1[1]}`}</text>
            <text x={x0 + r1[0] * S + (c * S) / 2} y={y0 + d * S + (r2[1] * S) / 2 + 4} textAnchor="middle" className="sim-tag" fill="#b45309">{`${r2[0]} ${times(lang)} ${r2[1]}`}</text>
          </>
        ) : (
          <>
            <rect x={x0} y={y0} width={A * S} height={B * S} fill="#c7d2fe" stroke={COLORS.a} strokeWidth="2" />
            <rect x={x0 + (A - c) * S} y={y0} width={c * S} height={d * S} fill="#fee2e2" stroke={COLORS.d} strokeWidth="2" strokeDasharray="5 3" />
            <text x={x0 + (A - c) * S + (c * S) / 2} y={y0 + (d * S) / 2 + 4} textAnchor="middle" className="sim-tag" fill={COLORS.d}>{`− ${c} ${times(lang)} ${d}`}</text>
          </>
        )}
        <text x={x0 + (A * S) / 2} y={y0 + B * S + 15} textAnchor="middle" className="sim-tag" fill={COLORS.line}>{`${A} ${cm}`}</text>
        <text x={x0 - 6} y={y0 + (B * S) / 2} textAnchor="end" className="sim-tag" fill={COLORS.line}>{`${B} ${cm}`}</text>
      </Stage>
      {way === "split" ? (
        <Sum parts={[`${r1[0]} ${times(lang)} ${r1[1]} + ${r2[0]} ${times(lang)} ${r2[1]} = ${r1[0] * r1[1]} + ${r2[0] * r2[1]} = `, [`${big - hole} ${cm2}`, COLORS.d]]} />
      ) : (
        <Sum parts={[`${A} ${times(lang)} ${B} − ${c} ${times(lang)} ${d} = ${big} − ${hole} = `, [`${big - hole} ${cm2}`, COLORS.d]]} />
      )}
      <Choice value={way} options={[["split", L(W.splitWay, lang)], ["cut", L(W.cutWay, lang)]]} onChange={setWay} />
    </ArtFrame>
  );
}

function Box({ spec, lang }: SimProps) {
  const [a, setA] = useState(clamp(Number(spec.opts.a ?? 4), 1, 6));
  const [b, setB] = useState(clamp(Number(spec.opts.b ?? 3), 1, 6));
  const [c, setC] = useState(clamp(Number(spec.opts.c ?? 2), 1, 5));
  const s = 18;
  const cos = Math.cos(Math.PI / 6) * s, sin = Math.sin(Math.PI / 6) * s;
  const ox = 170 - (a - b) * cos * 0.5, oy = 30 + c * s;
  const P = (i: number, j: number, k: number) => [ox + (i - j) * cos, oy + (i + j) * sin - k * s] as const;
  const pts = (...p: Array<readonly [number, number]>) => p.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const cubes: Array<[number, number, number]> = [];
  for (let k = 0; k < c; k++) for (let sum = 0; sum <= a + b - 2; sum++) for (let i = 0; i < a; i++) { const j = sum - i; if (j >= 0 && j < b) cubes.push([i, j, k]); }
  const tone = ["#c7d2fe", "#fde68a", "#a7f3d0", "#fecdd3", "#ddd6fe"];
  const H = oy + (a + b) * sin + 14;
  return (
    <ArtFrame kind="steps" title={L(W.box, lang)} body={spec.body || L(W.boxHint, lang)}>
      <Stage w={340} h={Math.max(120, H)} label={`${a} × ${b} × ${c}`}>
        {cubes.map(([i, j, k]) => {
          const top = pts(P(i, j, k + 1), P(i + 1, j, k + 1), P(i + 1, j + 1, k + 1), P(i, j + 1, k + 1));
          const right = pts(P(i + 1, j, k + 1), P(i + 1, j + 1, k + 1), P(i + 1, j + 1, k), P(i + 1, j, k));
          const left = pts(P(i, j + 1, k + 1), P(i + 1, j + 1, k + 1), P(i + 1, j + 1, k), P(i, j + 1, k));
          const col = tone[k % tone.length];
          return (
            <g key={`${i}-${j}-${k}`} stroke={COLORS.line} strokeWidth="0.8" strokeLinejoin="round">
              <polygon points={top} fill={col} />
              <polygon points={right} fill={col} style={{ filter: "brightness(0.82)" }} />
              <polygon points={left} fill={col} style={{ filter: "brightness(0.92)" }} />
            </g>
          );
        })}
      </Stage>
      <Readouts items={[[L(W.layer, lang), `${a} ${times(lang)} ${b} = ${a * b}`, COLORS.a], [L(W.volume, lang), `${a} ${times(lang)} ${b} ${times(lang)} ${c} = ${a * b * c} ${L(W.cm3, lang)}`, COLORS.d]]} />
      <div className="art-row">
        <Counter label={L(W.length, lang)} value={a} min={1} max={6} onChange={setA} lang={lang} />
        <Counter label={L(W.width, lang)} value={b} min={1} max={6} onChange={setB} lang={lang} />
        <Counter label={L(W.height, lang)} value={c} min={1} max={5} onChange={setC} lang={lang} />
      </div>
    </ArtFrame>
  );
}
