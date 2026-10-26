"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { Choice, Note, Readouts, Slider, Stage, Toggle, clamp, fmt, useDrag } from "../kit";
import { L, t, un } from "../labels";
import { add, Angle, angleAt, COL, cross, deg1, dist, Dot, Grid, Handles, Label, meet, mid, mul, Name, type P, Poly, Seg, snap, sub, Ticks, usePoints } from "./kit";

const U = 20;
const BOX = { w: 320, h: 220 };

const W = {
  quad: t("Which quadrilateral is it?", "Ո՞ր քառանկյունն է", "Какой это четырёхугольник?"),
  quadHint: t("Drag the corners on the grid. The name changes as soon as sides become parallel, equal or perpendicular.", "Քաշի՛ր գագաթները ցանցի վրա։ Անունը փոխվում է, հենց կողմերը դառնում են զուգահեռ, հավասար կամ ուղղահայաց։", "Двигай вершины по сетке. Название меняется, как только стороны становятся параллельными, равными или перпендикулярными."),
  general: t("quadrilateral", "քառանկյուն", "четырёхугольник"),
  parallelogram: t("parallelogram", "զուգահեռագիծ", "параллелограмм"),
  rectangle: t("rectangle", "ուղղանկյուն", "прямоугольник"),
  rhombus: t("rhombus", "շեղանկյուն", "ромб"),
  square: t("square", "քառակուսի", "квадрат"),
  trapezium: t("trapezium", "սեղան", "трапеция"),
  crossed: t("self-crossing figure", "ինքնահատվող պատկեր", "самопересекающаяся фигура"),
  diags: t("Diagonals", "Անկյունագծեր", "Диагонали"),
  midT: t("Midline", "Միջին գիծ", "Средняя линия"),
  name: t("Name", "Անվանում", "Название"),
  sum: t("Sum of angles", "Անկյունների գումար", "Сумма углов"),
  dPar: t("The diagonals cut each other in half.", "Անկյունագծերը հատման կետով կիսվում են։", "Диагонали делятся точкой пересечения пополам."),
  dRect: t("The diagonals are equal and cut each other in half.", "Անկյունագծերը հավասար են և հատման կետով կիսվում են։", "Диагонали равны и делятся точкой пересечения пополам."),
  dRhomb: t("The diagonals are perpendicular and bisect the angles.", "Անկյունագծերն ուղղահայաց են և կիսում են անկյունները։", "Диагонали перпендикулярны и делят углы пополам."),
  dSq: t("The diagonals are equal, perpendicular and cut each other in half.", "Անկյունագծերը հավասար են, ուղղահայաց և հատման կետով կիսվում են։", "Диагонали равны, перпендикулярны и делятся пополам."),
  trapMid: t("The midline of a trapezium is parallel to the bases and equals half their sum.", "Սեղանի միջին գիծը զուգահեռ է հիմքերին և հավասար է նրանց կիսագումարին։", "Средняя линия трапеции параллельна основаниям и равна их полусумме."),
  area: t("Where the area formulas come from", "Որտեղից են գալիս մակերեսի բանաձևերը", "Откуда берутся формулы площади"),
  areaHint: t("Move the slider: each shape is cut and rearranged (or doubled) into a rectangle whose area we already know.", "Շարժի՛ր սողնակը․ յուրաքանչյուր պատկեր կտրվում և վերադասավորվում է (կամ կրկնապատկվում) ուղղանկյան, որի մակերեսն արդեն գիտենք։", "Двигай ползунок: каждая фигура разрезается и перекладывается (или удваивается) в прямоугольник, площадь которого мы уже знаем."),
  move: t("Rearrange", "Վերադասավորել", "Переложить"),
  base: t("Base", "Հիմք", "Основание"),
  height: t("Height", "Բարձրություն", "Высота"),
  top: t("Top base", "Վերին հիմք", "Верхнее основание"),
  tri: t("triangle", "եռանկյուն", "треугольник"),
  pyth: t("The Pythagorean theorem", "Պյութագորասի թեորեմը", "Теорема Пифагора"),
  pythHint: t("Change the legs. The square on the hypotenuse always has the same area as the two squares on the legs together.", "Փոխի՛ր էջերը։ Ներքնաձիգի վրա կառուցված քառակուսու մակերեսը միշտ հավասար է էջերի վրա կառուցված երկու քառակուսիների մակերեսների գումարին։", "Меняй катеты. Квадрат на гипотенузе всегда равен по площади двум квадратам на катетах вместе."),
  proof: t("Show a proof", "Ցույց տալ ապացույցը", "Показать доказательство"),
  proofNote: t("Both big squares have side a + b and contain the same four triangles. What is left over is c² on the left and a² + b² on the right, so they are equal.", "Երկու մեծ քառակուսիներն էլ ունեն a + b կողմ և պարունակում են նույն չորս եռանկյունները։ Մնացած մասը ձախում c² է, աջում՝ a² + b², ուրեմն դրանք հավասար են։", "Оба больших квадрата со стороной a + b содержат одни и те же четыре треугольника. Остаток слева — c², справа — a² + b², значит, они равны."),
  triple: t("All three sides are whole numbers: a Pythagorean triple.", "Երեք կողմերն էլ ամբողջ թվեր են․ պյութագորասյան եռյակ։", "Все три стороны — целые числа: пифагорова тройка."),
  leg: t("Leg", "Էջ", "Катет"),
  sim: t("Similar triangles", "Նման եռանկյուններ", "Подобные треугольники"),
  simHint: t("Change the scale factor k. All angles stay the same, every side is multiplied by k, and the area by k².", "Փոխի՛ր նմանության գործակիցը՝ k։ Բոլոր անկյունները մնում են նույնը, յուրաքանչյուր կողմ բազմապատկվում է k-ով, իսկ մակերեսը՝ k²-ով։", "Меняй коэффициент подобия k. Все углы остаются прежними, каждая сторона умножается на k, а площадь — на k²."),
  ratio: t("Side ratio", "Կողմերի հարաբերություն", "Отношение сторон"),
  areaRatio: t("Area ratio", "Մակերեսների հարաբերություն", "Отношение площадей"),
  thales: t("Thales' theorem", "Թալեսի թեորեմը", "Теорема Фалеса"),
  thalesHint: t("Equal segments are marked on one side of the angle and parallel lines are drawn through their ends. Drag the other side or the direction of the lines: the segments on it stay equal.", "Անկյան մի կողմին նշված են հավասար հատվածներ, որոնց ծայրերով տարված են զուգահեռ ուղիղներ։ Քաշի՛ր մյուս կողմը կամ ուղիղների ուղղությունը․ նրա վրա հատվածները մնում են հավասար։", "На одной стороне угла отложены равные отрезки, через их концы проведены параллельные прямые. Двигай другую сторону или направление прямых: отрезки на ней остаются равными."),
  trig: t("Sine, cosine and tangent", "Սինուս, կոսինուս և տանգենս", "Синус, косинус и тангенс"),
  trigHint: t("Change the angle α. The ratios of the sides depend only on the angle, not on the size of the triangle.", "Փոխի՛ր α անկյունը։ Կողմերի հարաբերությունները կախված են միայն անկյունից, ոչ թե եռանկյան չափերից։", "Меняй угол α. Отношения сторон зависят только от угла, а не от размера треугольника."),
  opp: t("opposite", "դիմացի էջ", "противолежащий"),
  adj: t("adjacent", "կից էջ", "прилежащий"),
  hyp: t("hypotenuse", "ներքնաձիգ", "гипотенуза"),
  size: t("Size", "Չափ", "Размер"),
  unit: t("The unit circle", "Միավոր շրջանագիծ", "Единичная окружность"),
  unitHint: t("Drag the point on the circle of radius 1. Its x is cos α and its y is sin α, also for obtuse angles: there the cosine is negative.", "Քաշի՛ր կետը 1 շառավղով շրջանագծի վրա։ Նրա x-ը cos α է, y-ը՝ sin α, նաև բութ անկյունների դեպքում․ այնտեղ կոսինուսը բացասական է։", "Двигай точку на окружности радиуса 1. Её x — это cos α, а y — sin α, в том числе для тупых углов: там косинус отрицателен."),
  circ: t("Angles in a circle", "Անկյուններ շրջանագծում", "Углы в окружности"),
  circHint: t("Drag the points on the circle. An inscribed angle is half the central angle on the same arc, so all inscribed angles on that arc are equal.", "Քաշի՛ր շրջանագծի կետերը։ Ներգծյալ անկյունը հավասար է նույն աղեղին հենված կենտրոնային անկյան կեսին, ուստի այդ աղեղին հենված բոլոր ներգծյալ անկյունները հավասար են։", "Двигай точки на окружности. Вписанный угол равен половине центрального, опирающегося на ту же дугу, поэтому все вписанные углы на этой дуге равны."),
  diameter: t("AB is a diameter, so the inscribed angle is right.", "AB-ն տրամագիծ է, ուստի ներգծյալ անկյունն ուղիղ է։", "AB — диаметр, поэтому вписанный угол прямой."),
  inscribed: t("inscribed angle", "ներգծյալ անկյուն", "вписанный угол"),
  central: t("central angle", "կենտրոնային անկյուն", "центральный угол"),
  tangent: t("tangents", "շոշափողներ", "касательные"),
  tanHint: t("Drag the point P. The tangent is perpendicular to the radius at the touching point, and the two tangents from P are equal.", "Քաշի՛ր P կետը։ Շոշափողն ուղղահայաց է շոշափման կետին տարված շառավղին, իսկ P-ից տարված երկու շոշափողները հավասար են։", "Двигай точку P. Касательная перпендикулярна радиусу в точке касания, а две касательные из P равны."),
  chords: t("chords", "լարեր", "хорды"),
  chordHint: t("Drag the ends of the two chords. Where they cross, the products of the pieces are equal: AE·EB = CE·ED.", "Քաշի՛ր երկու լարերի ծայրերը։ Նրանց հատման կետում մասերի արտադրյալները հավասար են․ AE·EB = CE·ED։", "Двигай концы двух хорд. В точке пересечения произведения отрезков равны: AE·EB = CE·ED."),
  inside: t("Move P outside the circle.", "P-ն տեղափոխի՛ր շրջանագծից դուրս։", "Вынеси P за окружность."),
  noCross: t("The chords do not cross inside the circle.", "Լարերը շրջանագծի ներսում չեն հատվում։", "Хорды не пересекаются внутри окружности."),
  poly: t("Regular polygons", "Կանոնավոր բազմանկյուններ", "Правильные многоугольники"),
  polyHint: t("Change the number of sides. Diagonals from one vertex cut the polygon into n − 2 triangles, so the angles add up to (n − 2)·180°. With many sides it looks more and more like a circle.", "Փոխի՛ր կողմերի թիվը։ Մեկ գագաթից տարված անկյունագծերը բազմանկյունը բաժանում են n − 2 եռանկյան, ուստի անկյունների գումարը (n − 2)·180° է։ Շատ կողմերի դեպքում այն ավելի ու ավելի նման է շրջանագծի։", "Меняй число сторон. Диагонали из одной вершины делят многоугольник на n − 2 треугольника, поэтому сумма углов (n − 2)·180°. С ростом числа сторон он всё больше похож на круг."),
  n: t("Number of sides n", "Կողմերի թիվը n", "Число сторон n"),
  interior: t("Each angle", "Յուրաքանչյուր անկյուն", "Каждый угол"),
  circles: t("Circles", "Շրջանագծեր", "Окружности"),
  perim: t("Perimeter : diameter", "Պարագիծ ։ տրամագիծ", "Периметр : диаметр"),
  sector: t("Arc and sector", "Աղեղ և սեկտոր", "Дуга и сектор"),
  sectorHint: t("A sector is a slice of the disc. Its share of the disc is α / 360°, so the arc is 2πr·α/360 and the area is πr²·α/360.", "Սեկտորը շրջանի կտոր է։ Նրա բաժինը շրջանից α / 360° է, ուստի աղեղը 2πr·α/360 է, իսկ մակերեսը՝ πr²·α/360։", "Сектор — это кусок круга. Его доля от круга равна α / 360°, поэтому дуга равна 2πr·α/360, а площадь — πr²·α/360."),
  arc: t("Arc length", "Աղեղի երկարություն", "Длина дуги"),
  sArea: t("Sector area", "Սեկտորի մակերես", "Площадь сектора"),
  radius: t("Radius r", "Շառավիղ r", "Радиус r"),
  disc: t("Why the disc area is πr²", "Ինչու է շրջանի մակերեսը πr²", "Почему площадь круга πr²"),
  discHint: t("Cut the disc into many equal slices and lay them top to bottom. They form almost a parallelogram: half the circumference long (πr) and r high, so the area is πr·r.", "Շրջանը կտրի՛ր շատ հավասար կտորների և դասավորի՛ր դրանք իրար հակառակ։ Ստացվում է գրեթե զուգահեռագիծ՝ շրջանագծի կեսի (πr) երկարությամբ և r բարձրությամբ, ուստի մակերեսը πr·r է։", "Разрежь круг на много равных кусков и уложи их валетом. Получится почти параллелограмм длиной в половину окружности (πr) и высотой r, поэтому площадь πr·r."),
  slices: t("Slices", "Կտորներ", "Куски"),
};

/* ---------------- quadrilaterals ---------------- */

const QUAD_INIT: Record<string, Record<"A" | "B" | "C" | "D", P>> = {
  general: { A: { x: 60, y: 170 }, B: { x: 250, y: 180 }, C: { x: 220, y: 50 }, D: { x: 90, y: 70 } },
  parallelogram: { A: { x: 50, y: 170 }, B: { x: 220, y: 170 }, C: { x: 270, y: 60 }, D: { x: 100, y: 60 } },
  rectangle: { A: { x: 60, y: 170 }, B: { x: 260, y: 170 }, C: { x: 260, y: 60 }, D: { x: 60, y: 60 } },
  rhombus: { A: { x: 160, y: 190 }, B: { x: 240, y: 110 }, C: { x: 160, y: 30 }, D: { x: 80, y: 110 } },
  square: { A: { x: 100, y: 170 }, B: { x: 220, y: 170 }, C: { x: 220, y: 50 }, D: { x: 100, y: 50 } },
  trapezium: { A: { x: 40, y: 170 }, B: { x: 280, y: 170 }, C: { x: 210, y: 60 }, D: { x: 110, y: 60 } },
};

export function QuadPreset({ spec, lang }: SimProps) {
  const { pts, drag } = usePoints(QUAD_INIT[spec.opts.shape ?? "general"] ?? QUAD_INIT.general, BOX, (_, p) => snap(p, 10));
  const [diag, setDiag] = useState(spec.opts.diagonals === "on");
  const [midOn, setMidOn] = useState(false);
  const { A, B, C, D } = pts;
  const par = (p: P, q: P, r: P, s: P) => Math.abs(cross(sub(q, p), sub(s, r))) < 1e-6;
  const ab = par(A, B, D, C), bc = par(B, C, A, D);
  const crossed = (() => {
    const signs = [A, B, C, D].map((p, i, a) => Math.sign(cross(sub(a[(i + 1) % 4], p), sub(a[(i + 2) % 4], a[(i + 1) % 4]))));
    return !signs.every((s) => s === signs[0]);
  })();
  const sides = [dist(A, B), dist(B, C), dist(C, D), dist(D, A)];
  const right = Math.abs(angleAt(D, A, B) - 90) < 0.5;
  const eqSides = Math.abs(sides[0] - sides[1]) < 0.5;
  let kind = W.general;
  if (crossed) kind = W.crossed;
  else if (ab && bc) kind = right && eqSides ? W.square : right ? W.rectangle : eqSides ? W.rhombus : W.parallelogram;
  else if (ab || bc) kind = W.trapezium;
  const E = meet(A, C, B, D);
  const dNote = kind === W.square ? W.dSq : kind === W.rectangle ? W.dRect : kind === W.rhombus ? W.dRhomb : kind === W.parallelogram ? W.dPar : null;
  const G = { x: (A.x + B.x + C.x + D.x) / 4, y: (A.y + B.y + C.y + D.y) / 4 };
  const isTrap = kind === W.trapezium;
  const legs: [P, P, P, P] = ab ? [A, D, B, C] : [A, B, D, C];
  const m1 = mid(legs[0], legs[1]), m2 = mid(legs[2], legs[3]);
  const angs = [angleAt(D, A, B), angleAt(A, B, C), angleAt(B, C, D), angleAt(C, D, A)];
  return (
    <ArtFrame kind="experiment" title={L(W.quad, lang)} body={spec.body || L(W.quadHint, lang)}>
      <Stage w={BOX.w} h={BOX.h} label={L(W.quad, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        <Grid w={BOX.w} h={BOX.h} step={10} />
        <Poly pts={[A, B, C, D]} fill="#c7d2fe" opacity={0.45} />
        {!crossed ? [[D, A, B], [A, B, C], [B, C, D], [C, D, A]].map(([p, v, q], k) => <Angle key={k} a={p} b={v} c={q} r={16} color={[COL.a, COL.b, COL.c, COL.d][k]} label={deg1(angs[k], lang)} />) : null}
        {ab ? <><Ticks a={A} b={B} n={1} color={COL.e} /><Ticks a={D} b={C} n={1} color={COL.e} /></> : null}
        {diag ? <g><Seg a={A} b={C} color={COL.f} dash="5 4" /><Seg a={B} b={D} color={COL.f} dash="5 4" />{E ? <Dot p={E} color={COL.f} /> : null}</g> : null}
        {midOn && isTrap ? <Seg a={m1} b={m2} color={COL.e} w={3} /> : null}
        <Name p={A} from={G}>A</Name><Name p={B} from={G}>B</Name><Name p={C} from={G}>C</Name><Name p={D} from={G}>D</Name>
        <Handles pts={pts} />
      </Stage>
      <Readouts
        items={[
          [L(W.name, lang), L(kind, lang), "#4f46e5"],
          ...(!crossed ? [[L(W.sum, lang), `${angs.map((v) => Math.round(v)).join(" + ")} = 360°`] as [string, string]] : []),
          ...(diag && E ? [[L(W.diags, lang), `AC = ${fmt(dist(A, C) / U, 1, lang)}, BD = ${fmt(dist(B, D) / U, 1, lang)}`] as [string, string]] : []),
          ...(midOn && isTrap ? [[L(W.midT, lang), `${fmt(dist(m1, m2) / U, 1, lang)} = (${fmt(dist(legs[0], legs[2]) / U, 1, lang)} + ${fmt(dist(legs[1], legs[3]) / U, 1, lang)}) : 2`, COL.e] as [string, string, string]] : []),
        ]}
      />
      {diag && dNote ? <Note>{L(dNote, lang)}</Note> : null}
      {midOn && isTrap ? <Note>{L(W.trapMid, lang)}</Note> : null}
      <div className="art-row">
        <Toggle on={diag} label={L(W.diags, lang)} onChange={setDiag} />
        <Toggle on={midOn} label={L(W.midT, lang)} onChange={setMidOn} />
      </div>
    </ArtFrame>
  );
}

/* ---------------- area by rearranging ---------------- */

type AreaShape = "parallelogram" | "triangle" | "trapezium";

export function AreaPreset({ spec, lang }: SimProps) {
  const [shape, setShape] = useState<AreaShape>((["parallelogram", "triangle", "trapezium"] as AreaShape[]).find((x) => x === spec.opts.shape) ?? "parallelogram");
  const [k, setK] = useState(0);
  const [a, setA] = useState(6), [h, setH] = useState(4), [b, setB] = useState(3);
  const S = 20, x0 = 40, y0 = 190;
  const sh = 2 * S;
  const base = a * S, hh = h * S;
  const X = (u: number) => x0 + u, Y = (v: number) => y0 - v;
  let body: React.ReactNode = null;
  let formula = "";
  if (shape === "parallelogram") {
    const cut = [{ x: X(0), y: Y(0) }, { x: X(sh), y: Y(hh) }, { x: X(sh), y: Y(0) }];
    const moved = cut.map((p) => ({ x: p.x + base * k, y: p.y }));
    body = (
      <g>
        <Poly pts={[{ x: X(sh), y: Y(0) }, { x: X(base), y: Y(0) }, { x: X(base + sh), y: Y(hh) }, { x: X(sh), y: Y(hh) }]} fill="#c7d2fe" opacity={0.7} />
        <Poly pts={moved} fill="#fbcfe8" opacity={0.8} />
        <Seg a={{ x: X(sh), y: Y(0) }} b={{ x: X(sh), y: Y(hh) }} color={COL.b} dash="4 3" />
      </g>
    );
    formula = `S = a·h = ${a}·${h} = ${a * h}`;
  } else if (shape === "triangle") {
    const T = [{ x: X(0), y: Y(0) }, { x: X(base), y: Y(0) }, { x: X(sh), y: Y(hh) }];
    const rot = (p: P) => ({ x: X(base) + X(sh) - p.x, y: Y(0) + Y(hh) - p.y });
    const T2 = T.map(rot).map((p) => ({ x: lerp(p.x + 60, p.x, k), y: lerp(p.y - 30, p.y, k) }));
    body = (
      <g>
        <Poly pts={T} fill="#c7d2fe" opacity={0.8} />
        <Poly pts={T2} fill="#fbcfe8" opacity={0.5} dash="5 4" />
        <Seg a={{ x: X(sh), y: Y(0) }} b={{ x: X(sh), y: Y(hh) }} color={COL.b} dash="4 3" />
      </g>
    );
    formula = `S = ½·a·h = ½·${a}·${h} = ${fmt((a * h) / 2, 1, lang)}`;
  } else {
    const top = b * S;
    const T = [{ x: X(0), y: Y(0) }, { x: X(base), y: Y(0) }, { x: X(sh + top), y: Y(hh) }, { x: X(sh), y: Y(hh) }];
    const rot = (p: P) => ({ x: X(base) + X(sh + top) - p.x, y: Y(0) + Y(hh) - p.y });
    const T2 = T.map(rot).map((p) => ({ x: lerp(p.x + 60, p.x, k), y: lerp(p.y - 30, p.y, k) }));
    body = (
      <g>
        <Poly pts={T} fill="#c7d2fe" opacity={0.8} />
        <Poly pts={T2} fill="#fbcfe8" opacity={0.5} dash="5 4" />
        <Seg a={{ x: X(sh), y: Y(0) }} b={{ x: X(sh), y: Y(hh) }} color={COL.b} dash="4 3" />
      </g>
    );
    formula = `S = (a + b)·h : 2 = (${a} + ${b})·${h} : 2 = ${fmt(((a + b) * h) / 2, 1, lang)}`;
  }
  return (
    <ArtFrame kind="experiment" title={L(W.area, lang)} body={spec.body || L(W.areaHint, lang)}>
      <Stage w={320} h={210} label={L(W.area, lang)}>
        <Grid w={320} h={210} step={S} ox={x0} oy={y0} />
        {body}
        <Label p={{ x: X(base / 2), y: Y(0) }} dy={12}>a = {a}</Label>
        <Label p={{ x: X(sh), y: Y(hh / 2) }} dx={-12} color={COL.b}>h</Label>
      </Stage>
      <Slider label={L(W.move, lang)} value={k} min={0} max={1} step={0.05} display={`${Math.round(k * 100)}%`} lang={lang} onChange={setK} />
      <div className="sim-layout is-even">
        <Slider label={`${L(W.base, lang)} a`} value={a} min={3} max={7} step={1} digits={0} lang={lang} onChange={setA} />
        <Slider label={`${L(W.height, lang)} h`} value={h} min={2} max={6} step={1} digits={0} lang={lang} onChange={setH} />
      </div>
      {shape === "trapezium" ? <Slider label={`${L(W.top, lang)} b`} value={b} min={1} max={4} step={1} digits={0} lang={lang} onChange={setB} /> : null}
      <Readouts items={[["S", formula, "#4f46e5"]]} />
      <Choice value={shape} options={[["parallelogram", L(W.parallelogram, lang)], ["triangle", L(W.tri, lang)], ["trapezium", L(W.trapezium, lang)]]} onChange={(v) => { setShape(v); setK(0); }} />
    </ArtFrame>
  );
}

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;

/* ---------------- Pythagoras ---------------- */

export function PythagorasPreset({ spec, lang }: SimProps) {
  const [a, setA] = useState(3), [b, setB] = useState(4);
  const [proof, setProof] = useState(spec.opts.proof === "on");
  const c = Math.hypot(a, b);
  const S = Math.min(14, 120 / (a + b));
  const C = { x: 130, y: 140 }, A = { x: C.x, y: C.y - b * S }, B = { x: C.x + a * S, y: C.y };
  const sq = (p: P, q: P, col: string, lab: string) => {
    const d = sub(q, p), n = { x: d.y, y: -d.x };
    const out = [p, q, add(q, n), add(p, n)];
    return <g><Poly pts={out} fill={col} opacity={0.35} stroke={col} /><Label p={mul(add(add(p, q), add(add(q, n), add(p, n))), 0.25)} color={col}>{lab}</Label></g>;
  };
  const integer = Math.abs(c - Math.round(c)) < 1e-9;
  return (
    <ArtFrame kind="experiment" title={L(W.pyth, lang)} body={spec.body || L(W.pythHint, lang)}>
      {!proof ? (
        <Stage w={320} h={230} label={L(W.pyth, lang)}>
          {sq(C, A, COL.a, `b² = ${b * b}`)}
          {sq(B, C, COL.c, `a² = ${a * a}`)}
          {sq(A, B, COL.b, `c² = ${fmt(c * c, 0, lang)}`)}
          <Poly pts={[A, B, C]} fill="#fff" />
          <Angle a={A} b={C} c={B} r={10} right />
        </Stage>
      ) : (
        <Stage w={320} h={160} label={L(W.proof, lang)}>
          {(() => {
            const s = 140 / (a + b), q = (a + b) * s;
            const L0 = { x: 10, y: 10 }, R0 = { x: 170, y: 10 };
            const at = (o: P, x: number, y: number) => ({ x: o.x + x * s, y: o.y + y * s });
            const leftTri = [[[0, 0], [a, 0], [0, b]], [[a, 0], [a + b, 0], [a + b, a]], [[a + b, a], [a + b, a + b], [b, a + b]], [[b, a + b], [0, a + b], [0, b]]];
            return (
              <g>
                <rect x={L0.x} y={L0.y} width={q} height={q} fill={COL.b} fillOpacity="0.25" stroke={COL.line} />
                {leftTri.map((tr, k2) => <Poly key={k2} pts={tr.map(([x, y]) => at(L0, x, y))} fill="#fde68a" w={1.2} />)}
                <Label p={at(L0, (a + b) / 2, (a + b) / 2)} color={COL.b}>c²</Label>
                <rect x={R0.x} y={R0.y} width={q} height={q} fill="none" stroke={COL.line} />
                <rect x={R0.x + a * s} y={R0.y + a * s} width={b * s} height={b * s} fill={COL.a} fillOpacity="0.25" stroke={COL.line} />
                <rect x={R0.x} y={R0.y} width={a * s} height={a * s} fill={COL.c} fillOpacity="0.25" stroke={COL.line} />
                {[[[a, 0], [a + b, 0], [a + b, a]], [[a, 0], [a, a], [a + b, a]], [[0, a], [a, a], [0, a + b]], [[a, a], [a, a + b], [0, a + b]]].map((tr, k2) => <Poly key={`r${k2}`} pts={tr.map(([x, y]) => at(R0, x, y))} fill="#fde68a" w={1.2} />)}
                <Label p={at(R0, a / 2, a / 2)} color={COL.c}>a²</Label>
                <Label p={at(R0, a + b / 2, a + b / 2)} color={COL.a}>b²</Label>
              </g>
            );
          })()}
        </Stage>
      )}
      <div className="sim-layout is-even">
        <Slider label={`${L(W.leg, lang)} a`} value={a} min={1} max={8} step={1} digits={0} lang={lang} onChange={setA} />
        <Slider label={`${L(W.leg, lang)} b`} value={b} min={1} max={8} step={1} digits={0} lang={lang} onChange={setB} />
      </div>
      <Readouts items={[["a² + b²", `${a * a} + ${b * b} = ${a * a + b * b}`], ["c", `√${a * a + b * b} ${integer ? "=" : "≈"} ${fmt(c, 2, lang)}`, COL.b]]} />
      {proof ? <Note>{L(W.proofNote, lang)}</Note> : integer ? <Note tone="good">{L(W.triple, lang)}</Note> : null}
      <Toggle on={proof} label={L(W.proof, lang)} onChange={setProof} />
    </ArtFrame>
  );
}

/* ---------------- similar triangles ---------------- */

export function SimilarPreset({ spec, lang }: SimProps) {
  const [k, setK] = useState(1.5);
  const { pts, drag } = usePoints({ A: { x: 20, y: 190 }, B: { x: 110, y: 190 }, C: { x: 50, y: 130 } }, { w: 130, h: 210 }, (_, p) => snap(p, 5));
  const { A, B, C } = pts;
  const o = { x: 150, y: 0 };
  const A2 = { x: o.x + 10, y: 200 }, sc = (p: P) => ({ x: A2.x + (p.x - A.x) * k, y: A2.y + (p.y - A.y) * k });
  const B2 = sc(B), C2 = sc(C);
  const angs = [angleAt(B, A, C), angleAt(A, B, C)];
  return (
    <ArtFrame kind="experiment" title={L(W.sim, lang)} body={spec.body || L(W.simHint, lang)}>
      <Stage w={320} h={210} label={L(W.sim, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        <Poly pts={[A, B, C]} fill="#c7d2fe" opacity={0.6} />
        <Poly pts={[A2, B2, C2]} fill="#fbcfe8" opacity={0.6} />
        <Angle a={B} b={A} c={C} r={12} color={COL.a} /><Angle a={B2} b={A2} c={C2} r={16} color={COL.a} />
        <Angle a={A} b={B} c={C} r={12} color={COL.b} /><Angle a={A2} b={B2} c={C2} r={16} color={COL.b} />
        <Handles pts={pts} />
      </Stage>
      <Slider label="k" value={k} min={0.5} max={2} step={0.1} lang={lang} onChange={setK} />
      <Readouts items={[["∠A, ∠B", `${deg1(angs[0], lang)}, ${deg1(angs[1], lang)}`], [L(W.ratio, lang), `${fmt(dist(A2, B2) / U, 1, lang)} : ${fmt(dist(A, B) / U, 1, lang)} = ${fmt(k, 1, lang)}`, COL.a], [L(W.areaRatio, lang), `k² = ${fmt(k * k, 2, lang)}`, COL.b]]} />
    </ArtFrame>
  );
}

/* ---------------- Thales ---------------- */

export function ThalesPreset({ spec, lang }: SimProps) {
  const O = { x: 20, y: 190 };
  const { pts, drag } = usePoints({ E: { x: 280, y: 40 }, D: { x: 110, y: 60 } }, BOX);
  const { E, D } = pts;
  const R1 = { x: 300, y: 190 };
  const n = 4, step = 60;
  const marks = Array.from({ length: n }, (_, i) => ({ x: O.x + (i + 1) * step, y: O.y }));
  const dir = sub(D, marks[0]);
  const hits = marks.map((m) => meet(m, add(m, dir), O, E));
  const ok = hits.every((h) => h && h.y < O.y && h.x > O.x - 1);
  const segs = ok ? hits.map((h, i) => dist(i ? hits[i - 1]! : O, h!)) : [];
  return (
    <ArtFrame kind="experiment" title={L(W.thales, lang)} body={spec.body || L(W.thalesHint, lang)}>
      <Stage w={BOX.w} h={BOX.h} label={L(W.thales, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        <Seg a={O} b={R1} w={2.5} />
        <Seg a={O} b={add(O, mul(sub(E, O), 1.2))} w={2.5} />
        {marks.map((m, i) => <g key={i}><Ticks a={i ? marks[i - 1] : O} b={m} color={COL.a} /><Dot p={m} color={COL.a} /></g>)}
        {ok ? hits.map((h, i) => <g key={i}><Seg a={marks[i]} b={h!} color={COL.c} dash="5 4" /><Ticks a={i ? hits[i - 1]! : O} b={h!} color={COL.b} /><Dot p={h!} color={COL.b} /></g>) : null}
        <Label p={O} dy={12} dx={-6}>O</Label>
        <Handles pts={pts} colors={{ D: COL.c }} />
      </Stage>
      {ok ? <Readouts items={segs.map((s, i) => [`${i + 1}`, fmt(s / U, 1, lang), COL.b])} /> : null}
    </ArtFrame>
  );
}

/* ---------------- trigonometry ---------------- */

export function TrigPreset({ spec, lang }: SimProps) {
  if (spec.opts.mode === "unit") return <UnitCircle spec={spec} lang={lang} />;
  return <RightTrig spec={spec} lang={lang} />;
}

function RightTrig({ spec, lang }: SimProps) {
  const [a, setA] = useState(Number(spec.opts.deg ?? 35));
  const [size, setSize] = useState(1);
  const hyp = 200 * size;
  const A = { x: 40, y: 190 }, C = { x: A.x + hyp * Math.cos((a * Math.PI) / 180), y: 190 }, B = { x: C.x, y: 190 - hyp * Math.sin((a * Math.PI) / 180) };
  const opp = dist(B, C) / U, adj = dist(A, C) / U, hy = hyp / U;
  const sp = [30, 45, 60];
  return (
    <ArtFrame kind="experiment" title={L(W.trig, lang)} body={spec.body || L(W.trigHint, lang)}>
      <Stage w={320} h={210} label={L(W.trig, lang)}>
        <Poly pts={[A, C, B]} fill="#f1f5f9" />
        <Seg a={B} b={C} color={COL.b} w={4} />
        <Seg a={A} b={C} color={COL.c} w={4} />
        <Seg a={A} b={B} color={COL.a} w={4} />
        <Angle a={C} b={A} c={B} r={28} label="α" />
        <Angle a={A} b={C} c={B} r={10} right color={COL.line} />
        <Label p={mid(B, C)} dx={16} color={COL.b}>{fmt(opp, 1, lang)}</Label>
        <Label p={mid(A, C)} dy={12} color={COL.c}>{fmt(adj, 1, lang)}</Label>
        <Label p={mid(A, B)} dx={-12} dy={-8} color={COL.a}>{fmt(hy, 1, lang)}</Label>
      </Stage>
      <Slider label="α" value={a} min={5} max={85} step={1} digits={0} unit="°" lang={lang} onChange={setA} />
      <Slider label={L(W.size, lang)} value={size} min={0.5} max={1.2} step={0.1} lang={lang} onChange={setSize} />
      <Readouts
        items={[
          [`sin α = ${L(W.opp, lang)} / ${L(W.hyp, lang)}`, fmt(Math.sin((a * Math.PI) / 180), 3, lang), COL.b],
          [`cos α = ${L(W.adj, lang)} / ${L(W.hyp, lang)}`, fmt(Math.cos((a * Math.PI) / 180), 3, lang), COL.c],
          [`tg α = ${L(W.opp, lang)} / ${L(W.adj, lang)}`, fmt(Math.tan((a * Math.PI) / 180), 3, lang), COL.a],
        ]}
      />
      <div className="art-chips">
        {sp.map((d) => <button key={d} type="button" className={cn("art-chip", a === d && "is-active")} onClick={() => setA(d)}>{d}°</button>)}
      </div>
    </ArtFrame>
  );
}

function UnitCircle({ spec, lang }: SimProps) {
  const [a, setA] = useState(Number(spec.opts.deg ?? 120));
  const O = { x: 160, y: 150 }, R = 110;
  const Pp = { x: O.x + R * Math.cos((a * Math.PI) / 180), y: O.y - R * Math.sin((a * Math.PI) / 180) };
  const drag = useDrag<"p">((p) => (dist(p, Pp) < 26 ? "p" : null), (_, p) => {
    let d = Math.round((Math.atan2(O.y - p.y, p.x - O.x) * 180) / Math.PI);
    if (d < 0) d = d < -90 ? 180 : 0;
    setA(clamp(d, 0, 180));
  });
  const s = Math.sin((a * Math.PI) / 180), c = Math.cos((a * Math.PI) / 180);
  return (
    <ArtFrame kind="experiment" title={L(W.unit, lang)} body={spec.body || L(W.unitHint, lang)}>
      <Stage w={320} h={180} label={L(W.unit, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        <Seg a={{ x: 20, y: O.y }} b={{ x: 300, y: O.y }} color={COL.soft} w={1.2} />
        <Seg a={{ x: O.x, y: 170 }} b={{ x: O.x, y: 20 }} color={COL.soft} w={1.2} />
        <path d={`M${O.x - R},${O.y} A${R},${R} 0 0 1 ${O.x + R},${O.y}`} fill="none" stroke={COL.line} strokeWidth="1.5" />
        <Seg a={O} b={Pp} color={COL.a} w={2.5} />
        <Seg a={Pp} b={{ x: Pp.x, y: O.y }} color={COL.b} w={3} />
        <Seg a={O} b={{ x: Pp.x, y: O.y }} color={COL.c} w={4} />
        {a > 0 ? <Angle a={{ x: O.x + 50, y: O.y }} b={O} c={Pp} r={22} label="α" /> : null}
        <text x={O.x + R + 4} y={O.y + 12} className="sim-axis">1</text>
        <text x={O.x - R - 8} y={O.y + 12} className="sim-axis">−1</text>
        <Label p={{ x: Pp.x, y: O.y }} dy={12} color={COL.c}>cos α</Label>
        <Label p={mid(Pp, { x: Pp.x, y: O.y })} dx={a > 90 ? -24 : 24} color={COL.b}>sin α</Label>
        <Handles pts={{ p: Pp }} />
      </Stage>
      <Readouts items={[["α", `${a}°`], ["sin α", fmt(s, 3, lang), COL.b], ["cos α", fmt(Math.abs(c) < 1e-9 ? 0 : c, 3, lang), COL.c], ["tg α", a === 90 ? "—" : fmt(s / c, 3, lang), COL.a]]} />
      <div className="art-chips">
        {[0, 30, 45, 60, 90, 120, 135, 150, 180].map((d) => <button key={d} type="button" className={cn("art-chip", a === d && "is-active")} onClick={() => setA(d)}>{d}°</button>)}
      </div>
    </ArtFrame>
  );
}

/* ---------------- angles, tangents and chords in a circle ---------------- */

type CMode = "inscribed" | "tangent" | "chords";

export function CirclePreset({ spec, lang }: SimProps) {
  const [mode, setMode] = useState<CMode>((["inscribed", "tangent", "chords"] as CMode[]).find((x) => x === spec.opts.mode) ?? "inscribed");
  const O = { x: 150, y: 110 }, R = 85;
  const onCircle = (p: P) => { const d = sub(p, O), l = Math.hypot(d.x, d.y) || 1; return add(O, mul(d, R / l)); };
  const at = (deg: number) => ({ x: O.x + R * Math.cos((deg * Math.PI) / 180), y: O.y - R * Math.sin((deg * Math.PI) / 180) });
  const { pts, drag } = usePoints(
    { A: at(200), B: at(-20), C: at(100), D: at(250), Pp: { x: 290, y: 60 } },
    BOX,
    (k, p) => (k === "Pp" ? p : onCircle(p)),
  );
  const { A, B, C, D, Pp } = pts;
  const hint = mode === "inscribed" ? W.circHint : mode === "tangent" ? W.tanHint : W.chordHint;
  let body: React.ReactNode = null;
  let read: Array<[string, string, string?]> = [];
  let note: string | null = null;
  if (mode === "inscribed") {
    const cen = angleAt(A, O, B);
    const side = Math.sign(cross(sub(B, A), sub(C, A))) === Math.sign(cross(sub(B, A), sub(O, A)));
    const centralShown = side ? cen : 360 - cen;
    const ins = angleAt(A, C, B);
    body = (
      <g>
        <Seg a={O} b={A} color={COL.a} /><Seg a={O} b={B} color={COL.a} />
        <Seg a={C} b={A} color={COL.b} /><Seg a={C} b={B} color={COL.b} />
        {side ? <Angle a={A} b={O} c={B} r={20} color={COL.a} label={deg1(centralShown, lang)} /> : null}
        <Angle a={A} b={C} c={B} r={22} color={COL.b} label={deg1(ins, lang)} />
        <Dot p={O} /><Label p={O} dy={-10}>O</Label>
        <Handles pts={{ A, B, C }} labels={{ A: "A", B: "B", C: "C" }} colors={{ C: COL.b }} />
      </g>
    );
    read = [[L(W.central, lang), deg1(centralShown, lang), COL.a], [L(W.inscribed, lang), `${deg1(ins, lang)} = ${deg1(centralShown, lang)} : 2`, COL.b]];
    if (Math.abs(cen - 180) < 1.5) note = L(W.diameter, lang);
  } else if (mode === "tangent") {
    const d = dist(O, Pp);
    if (d > R + 2) {
      const base = Math.atan2(Pp.y - O.y, Pp.x - O.x), off = Math.acos(R / d);
      const T1 = { x: O.x + R * Math.cos(base + off), y: O.y + R * Math.sin(base + off) }, T2 = { x: O.x + R * Math.cos(base - off), y: O.y + R * Math.sin(base - off) };
      body = (
        <g>
          <Seg a={Pp} b={T1} color={COL.a} w={2.5} /><Seg a={Pp} b={T2} color={COL.a} w={2.5} />
          <Seg a={O} b={T1} color={COL.c} /><Seg a={O} b={T2} color={COL.c} />
          <Angle a={O} b={T1} c={Pp} r={10} right color={COL.c} /><Angle a={O} b={T2} c={Pp} r={10} right color={COL.c} />
          <Ticks a={Pp} b={T1} color={COL.a} /><Ticks a={Pp} b={T2} color={COL.a} />
          <Seg a={O} b={Pp} color={COL.soft} dash="4 3" />
          <Dot p={O} /><Label p={O} dy={12}>O</Label>
          <Label p={T1} dx={8} dy={8}>A</Label><Label p={T2} dx={8} dy={-8}>B</Label>
        </g>
      );
      read = [["PA = PB", fmt(dist(Pp, T1) / U, 1, lang), COL.a], ["∠OAP", "90°", COL.c]];
    } else note = L(W.inside, lang);
    body = <g>{body}<Handles pts={{ Pp }} labels={{ Pp: "P" }} /></g>;
  } else {
    const E = meet(A, B, C, D);
    const inside = E && dist(E, O) < R && (E.x - A.x) * (E.x - B.x) <= 0 && (E.x - C.x) * (E.x - D.x) <= 0;
    body = (
      <g>
        <Seg a={A} b={B} color={COL.a} w={2.5} /><Seg a={C} b={D} color={COL.b} w={2.5} />
        {inside && E ? <><Dot p={E} /><Label p={E} dx={10} dy={-8}>E</Label></> : null}
        <Handles pts={{ A, B, C, D }} labels={{ A: "A", B: "B", C: "C", D: "D" }} colors={{ C: COL.b, D: COL.b }} />
      </g>
    );
    if (inside && E) {
      const p1 = (dist(A, E) * dist(E, B)) / (U * U), p2 = (dist(C, E) * dist(E, D)) / (U * U);
      read = [["AE·EB", `${fmt(dist(A, E) / U, 1, lang)}·${fmt(dist(E, B) / U, 1, lang)} = ${fmt(p1, 1, lang)}`, COL.a], ["CE·ED", `${fmt(dist(C, E) / U, 1, lang)}·${fmt(dist(E, D) / U, 1, lang)} = ${fmt(p2, 1, lang)}`, COL.b]];
    } else note = L(W.noCross, lang);
  }
  return (
    <ArtFrame kind="experiment" title={L(W.circ, lang)} body={spec.body || L(hint, lang)}>
      <Stage w={BOX.w} h={BOX.h} label={L(W.circ, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        <circle cx={O.x} cy={O.y} r={R} fill="#f8fafc" stroke={COL.line} strokeWidth="2" />
        {body}
      </Stage>
      {read.length ? <Readouts items={read} /> : null}
      {note ? <Note>{note}</Note> : null}
      <Choice value={mode} options={[["inscribed", L(W.inscribed, lang)], ["tangent", L(W.tangent, lang)], ["chords", L(W.chords, lang)]]} onChange={setMode} />
    </ArtFrame>
  );
}

/* ---------------- regular polygons ---------------- */

export function PolygonPreset({ spec, lang }: SimProps) {
  const [n, setN] = useState(Number(spec.opts.n ?? 6));
  const [circ, setCirc] = useState(true);
  const O = { x: 160, y: 105 }, R = 90;
  const v = Array.from({ length: n }, (_, i) => ({ x: O.x + R * Math.cos(-Math.PI / 2 + (i * 2 * Math.PI) / n), y: O.y + R * Math.sin(-Math.PI / 2 + (i * 2 * Math.PI) / n) }));
  const r = R * Math.cos(Math.PI / n);
  const per = 2 * n * Math.sin(Math.PI / n);
  return (
    <ArtFrame kind="experiment" title={L(W.poly, lang)} body={spec.body || L(W.polyHint, lang)}>
      <Stage w={320} h={210} label={L(W.poly, lang)}>
        {circ ? <><circle cx={O.x} cy={O.y} r={R} fill="none" stroke={COL.b} strokeDasharray="4 3" /><circle cx={O.x} cy={O.y} r={r} fill="none" stroke={COL.c} strokeDasharray="4 3" /></> : null}
        <Poly pts={v} fill="#c7d2fe" opacity={0.5} />
        {n <= 12 ? v.slice(2, n - 1).map((p, i) => <Seg key={i} a={v[0]} b={p} color={COL.e} w={1.2} dash="4 3" />) : null}
        {n <= 12 ? <Angle a={v[n - 1]} b={v[0]} c={v[1]} r={16} color={COL.a} /> : null}
      </Stage>
      <Slider label={L(W.n, lang)} value={n} min={3} max={36} step={1} digits={0} lang={lang} onChange={setN} />
      <Readouts
        items={[
          [L(W.sum, lang), `(${n} − 2)·180° = ${(n - 2) * 180}°`],
          [L(W.interior, lang), `${fmt(((n - 2) * 180) / n, 1, lang)}°`, COL.a],
          [L(W.perim, lang), `${fmt(per / 2, 4, lang)} → π`, COL.b],
        ]}
      />
      <Toggle on={circ} label={L(W.circles, lang)} onChange={setCirc} />
    </ArtFrame>
  );
}

/* ---------------- arc, sector and the area of a disc ---------------- */

export function SectorPreset({ spec, lang }: SimProps) {
  if (spec.opts.mode === "disc") return <Disc spec={spec} lang={lang} />;
  return <Sector spec={spec} lang={lang} />;
}

function Sector({ spec, lang }: SimProps) {
  const [a, setA] = useState(90), [r, setR] = useState(4);
  const O = { x: 160, y: 110 }, Rp = r * 20;
  const end = { x: O.x + Rp * Math.cos((-a * Math.PI) / 180), y: O.y + Rp * Math.sin((-a * Math.PI) / 180) };
  const big = a > 180 ? 1 : 0;
  return (
    <ArtFrame kind="experiment" title={L(W.sector, lang)} body={spec.body || L(W.sectorHint, lang)}>
      <Stage w={320} h={220} label={L(W.sector, lang)}>
        <circle cx={O.x} cy={O.y} r={Rp} fill="#f1f5f9" stroke={COL.soft} />
        {a >= 360 ? <circle cx={O.x} cy={O.y} r={Rp} fill="#c7d2fe" stroke={COL.b} strokeWidth="3" /> : (
          <>
            <path d={`M${O.x},${O.y} L${O.x + Rp},${O.y} A${Rp},${Rp} 0 ${big} 0 ${end.x},${end.y} Z`} fill="#c7d2fe" />
            <path d={`M${O.x + Rp},${O.y} A${Rp},${Rp} 0 ${big} 0 ${end.x},${end.y}`} fill="none" stroke={COL.b} strokeWidth="4" />
          </>
        )}
        <Seg a={O} b={{ x: O.x + Rp, y: O.y }} /><Seg a={O} b={end} />
        <Label p={O} dx={-10} dy={10}>α = {a}°</Label>
      </Stage>
      <Slider label="α" value={a} min={10} max={360} step={10} digits={0} unit="°" lang={lang} onChange={setA} />
      <Slider label={L(W.radius, lang)} value={r} min={1} max={5} step={1} digits={0} unit={un("cm", lang)} lang={lang} onChange={setR} />
      <Readouts
        items={[
          [L(W.arc, lang), `2π·${r}·${a}/360 ≈ ${fmt((2 * Math.PI * r * a) / 360, 2, lang)} ${un("cm", lang)}`, COL.b],
          [L(W.sArea, lang), `π·${r}²·${a}/360 ≈ ${fmt((Math.PI * r * r * a) / 360, 2, lang)} ${un("cm", lang)}²`, "#4f46e5"],
        ]}
      />
    </ArtFrame>
  );
}

function Disc({ spec, lang }: SimProps) {
  const [n, setN] = useState(8);
  const R = 50, O = { x: 70, y: 110 };
  const th = (2 * Math.PI) / n;
  const sl = (k: number) => {
    const a0 = k * th - Math.PI / 2;
    return `M${O.x},${O.y} L${O.x + R * Math.cos(a0)},${O.y + R * Math.sin(a0)} A${R},${R} 0 0 1 ${O.x + R * Math.cos(a0 + th)},${O.y + R * Math.sin(a0 + th)} Z`;
  };
  const chord = 2 * R * Math.sin(th / 2);
  const x0 = 140, yb = 150;
  return (
    <ArtFrame kind="experiment" title={L(W.disc, lang)} body={spec.body || L(W.discHint, lang)}>
      <Stage w={320} h={200} label={L(W.disc, lang)}>
        {Array.from({ length: n }, (_, k) => <path key={k} d={sl(k)} fill={k % 2 ? "#fbcfe8" : "#c7d2fe"} stroke="#fff" strokeWidth="0.8" />)}
        {Array.from({ length: n }, (_, k) => {
          const up = k % 2 === 0;
          const cx = x0 + (k * chord) / 2 + chord / 2;
          const tip = { x: cx, y: up ? yb - R * Math.cos(th / 2) : yb };
          const left = { x: cx - chord / 2, y: up ? yb : yb - R * Math.cos(th / 2) }, right = { x: cx + chord / 2, y: left.y };
          const sweep = up ? 0 : 1;
          return <path key={`r${k}`} d={`M${tip.x},${tip.y} L${left.x},${left.y} A${R},${R} 0 0 ${sweep} ${right.x},${right.y} Z`} fill={k % 2 ? "#fbcfe8" : "#c7d2fe"} stroke="#fff" strokeWidth="0.8" />;
        })}
        <Label p={{ x: x0 + (n * chord) / 4 + chord / 4, y: yb }} dy={16}>πr</Label>
        <Label p={{ x: x0 - 8, y: yb - R / 2 }}>r</Label>
      </Stage>
      <Slider label={L(W.slices, lang)} value={n} min={4} max={32} step={2} digits={0} lang={lang} onChange={setN} />
      <Readouts items={[["S", "πr · r = πr²", "#4f46e5"]]} />
    </ArtFrame>
  );
}

