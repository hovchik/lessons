"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { list } from "@/lib/art/spec";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { Choice, Note, Readouts, Slider, Stage, clamp, fmt, useDrag } from "../kit";
import { L, t, UI, un } from "../labels";
import {
  add, Angle, angleAt, areaOf, centroid, circumcenter, COL, deg1, dist, Dot, foot, Handles, incenter, Label, Line, meet, mid, mul, Name, orthocenter, type P, Poly, Seg, snap, sub, Ticks, usePoints,
} from "./kit";

const U = 20; // pixels per unit length
const W = {
  angle: t("Measure the angle", "Չափի՛ր անկյունը", "Измерь угол"),
  angleHint: t("Drag point B. An angle is measured in degrees with a protractor: put its centre on the vertex and one zero line along a side.", "Քաշի՛ր B կետը։ Անկյունը չափվում է աստիճաններով անկյունաչափով․ նրա կենտրոնը դի՛ր գագաթին, իսկ զրոյական գիծը՝ մի կողմի երկայնքով։", "Двигай точку B. Угол измеряют в градусах транспортиром: центр ставят в вершину, а нулевую линию — вдоль стороны."),
  acute: t("acute", "սուր", "острый"),
  right: t("right", "ուղիղ", "прямой"),
  obtuse: t("obtuse", "բութ", "тупой"),
  straight: t("straight", "փռված", "развёрнутый"),
  type: t("Type", "Տեսակ", "Вид"),
  adjacent: t("Adjacent angles", "Կից անկյուններ", "Смежные углы"),
  adjacentHint: t("Drag the ray OC. Two adjacent angles always add up to 180°, because together they make a straight angle.", "Քաշի՛ր OC ճառագայթը։ Երկու կից անկյունների գումարը միշտ 180° է, քանի որ միասին նրանք կազմում են փռված անկյուն։", "Двигай луч OC. Два смежных угла в сумме всегда дают 180°, ведь вместе они составляют развёрнутый угол."),
  vertical: t("Vertical angles", "Հակադիր անկյուններ", "Вертикальные углы"),
  verticalHint: t("Turn the second line. Opposite (vertical) angles stay equal: ∠1 = ∠3 and ∠2 = ∠4.", "Պտտի՛ր երկրորդ ուղիղը։ Հակադիր անկյունները մնում են հավասար․ ∠1 = ∠3 և ∠2 = ∠4։", "Поворачивай вторую прямую. Вертикальные углы остаются равными: ∠1 = ∠3 и ∠2 = ∠4."),
  perp: t("The lines are perpendicular: all four angles are 90°.", "Ուղիղներն ուղղահայաց են․ բոլոր չորս անկյունները 90° են։", "Прямые перпендикулярны: все четыре угла по 90°."),
  sum: t("Sum", "Գումար", "Сумма"),
  tri: t("Explore the triangle", "Հետազոտի՛ր եռանկյունը", "Исследуй треугольник"),
  triHint: t("Drag the vertices. Switch on the lines you are studying and watch what stays true for every triangle.", "Քաշի՛ր գագաթները։ Միացրո՛ւ ուսումնասիրվող գծերը և տե՛ս, թե ինչն է ճիշտ մնում ցանկացած եռանկյան համար։", "Двигай вершины. Включай изучаемые линии и смотри, что остаётся верным для любого треугольника."),
  angles: t("angles", "անկյուններ", "углы"),
  exterior: t("exterior angle", "արտաքին անկյուն", "внешний угол"),
  median: t("median", "միջնագիծ", "медиана"),
  bisector: t("bisector", "կիսորդ", "биссектриса"),
  altitude: t("altitude", "բարձրություն", "высота"),
  midline: t("midline", "միջին գիծ", "средняя линия"),
  medians: t("medians", "միջնագծեր", "медианы"),
  bisectors: t("bisectors and incircle", "կիսորդներ և ներգծյալ շրջանագիծ", "биссектрисы и вписанная окружность"),
  perps: t("perpendicular bisectors and circumcircle", "միջնուղղահայացներ և արտագծյալ շրջանագիծ", "серединные перпендикуляры и описанная окружность"),
  altitudes: t("altitudes", "բարձրություններ", "высоты"),
  area: t("area", "մակերես", "площадь"),
  equi: t("equilateral", "հավասարակողմ", "равносторонний"),
  iso: t("isosceles", "հավասարասրուն", "равнобедренный"),
  scal: t("scalene", "անհավասարակողմ", "разносторонний"),
  sides: t("Sides", "Կողմեր", "Стороны"),
  noteExt: t("The exterior angle equals the sum of the two angles not next to it.", "Արտաքին անկյունը հավասար է իրեն ոչ կից երկու անկյունների գումարին։", "Внешний угол равен сумме двух углов, не смежных с ним."),
  noteMid: t("The midline is parallel to the third side and half as long.", "Միջին գիծը զուգահեռ է երրորդ կողմին և հավասար է նրա կեսին։", "Средняя линия параллельна третьей стороне и равна её половине."),
  noteMed: t("The medians meet in one point that divides each of them 2 : 1 from the vertex.", "Միջնագծերը հատվում են մեկ կետում, որը յուրաքանչյուրը գագաթից սկսած բաժանում է 2 ։ 1 հարաբերությամբ։", "Медианы пересекаются в одной точке, которая делит каждую в отношении 2 : 1, считая от вершины."),
  noteInc: t("The bisectors meet at the centre of the inscribed circle, equally far from all sides.", "Կիսորդները հատվում են ներգծյալ շրջանագծի կենտրոնում, որը բոլոր կողմերից հավասարահեռ է։", "Биссектрисы пересекаются в центре вписанной окружности, равноудалённом от всех сторон."),
  noteCirc: t("The perpendicular bisectors meet at the centre of the circumscribed circle, equally far from all vertices. In a right triangle it is the midpoint of the hypotenuse.", "Միջնուղղահայացները հատվում են արտագծյալ շրջանագծի կենտրոնում, որը բոլոր գագաթներից հավասարահեռ է։ Ուղղանկյուն եռանկյան դեպքում դա ներքնաձիգի միջնակետն է։", "Серединные перпендикуляры пересекаются в центре описанной окружности, равноудалённом от всех вершин. В прямоугольном треугольнике это середина гипотенузы."),
  noteAlt: t("The three altitudes (or their extensions) meet in one point, the orthocentre.", "Երեք բարձրությունները (կամ դրանց շարունակությունները) հատվում են մեկ կետում՝ օրթոկենտրոնում։", "Три высоты (или их продолжения) пересекаются в одной точке — ортоцентре."),
  ineq: t("Can you build the triangle?", "Կարո՞ղ ես կառուցել եռանկյունը", "Можно ли построить треугольник?"),
  ineqHint: t("Choose three lengths. From the ends of side c draw arcs with radii a and b: the triangle exists only if they meet, that is if each side is shorter than the sum of the other two.", "Ընտրի՛ր երեք երկարություն։ c կողմի ծայրերից տա՛ր a և b շառավղերով աղեղներ․ եռանկյունը գոյություն ունի միայն եթե դրանք հատվում են, այսինքն՝ յուրաքանչյուր կողմ փոքր է մյուս երկուսի գումարից։", "Выбери три длины. Из концов стороны c проведи дуги радиусами a и b: треугольник существует, только если они пересекаются, то есть каждая сторона меньше суммы двух других."),
  yes: t("It works: every side is shorter than the sum of the other two.", "Ստացվում է․ յուրաքանչյուր կողմ փոքր է մյուս երկուսի գումարից։", "Получается: каждая сторона меньше суммы двух других."),
  no: t("Impossible: the two shorter sides together do not reach across the longest.", "Հնարավոր չէ․ երկու կարճ կողմերը միասին չեն հասնում ամենաերկար կողմի ծայրին։", "Невозможно: две короткие стороны вместе не дотягиваются через самую длинную."),
  flat: t("The arcs just touch: the \"triangle\" is flat, a + b = c.", "Աղեղները միայն շոշափում են․ «եռանկյունը» տափակ է, a + b = c։", "Дуги только касаются: «треугольник» сплющен, a + b = c."),
  par: t("Parallel lines and a transversal", "Զուգահեռ ուղիղներ և հատող", "Параллельные прямые и секущая"),
  parHint: t("Drag the transversal and pick a pair of angles. Then tilt the lower line: the pairs are equal (or add up to 180°) only when the lines are parallel.", "Քաշի՛ր հատողը և ընտրի՛ր անկյունների զույգը։ Հետո թեքի՛ր ներքևի ուղիղը․ զույգերը հավասար են (կամ գումարում տալիս են 180°) միայն երբ ուղիղները զուգահեռ են։", "Двигай секущую и выбери пару углов. Потом наклони нижнюю прямую: пары равны (или дают в сумме 180°), только когда прямые параллельны."),
  corr: t("corresponding", "համապատասխան", "соответственные"),
  alt: t("alternate", "խաչադիր", "накрест лежащие"),
  co: t("co-interior", "միակողմանի", "односторонние"),
  tilt: t("Tilt of the lower line", "Ներքևի ուղղի թեքություն", "Наклон нижней прямой"),
  parallel: t("The lines are parallel.", "Ուղիղները զուգահեռ են։", "Прямые параллельны."),
  notPar: t("The lines are not parallel, so the pair breaks the rule.", "Ուղիղները զուգահեռ չեն, ուստի զույգը խախտում է կանոնը։", "Прямые не параллельны, поэтому пара нарушает правило."),
  dist: t("Distance from a point to a line", "Կետի հեռավորությունը ուղղից", "Расстояние от точки до прямой"),
  distHint: t("Drag M and the point K on the line. The perpendicular MH is always shorter than any oblique MK: its length is the distance from M to the line.", "Քաշի՛ր M կետը և ուղղի վրայի K կետը։ MH ուղղահայացը միշտ ավելի կարճ է ցանկացած MK թեքից․ նրա երկարությունը M-ի հեռավորությունն է ուղղից։", "Двигай M и точку K на прямой. Перпендикуляр MH всегда короче любой наклонной MK: его длина и есть расстояние от M до прямой."),
  seg: t("Measuring segments", "Հատվածների չափում", "Измерение отрезков"),
  segHint: t("Drag B and C along the ruler. If B lies between A and C, then AB + BC = AC.", "Քաշի՛ր B-ն և C-ն քանոնի երկայնքով։ Եթե B-ն գտնվում է A-ի և C-ի միջև, ապա AB + BC = AC։", "Двигай B и C вдоль линейки. Если B лежит между A и C, то AB + BC = AC."),
  between: t("B lies between A and C.", "B-ն գտնվում է A-ի և C-ի միջև։", "B лежит между A и C."),
  outside: t("B is not between A and C, so AB + BC is longer than AC.", "B-ն A-ի և C-ի միջև չէ, ուստի AB + BC-ն ավելի երկար է, քան AC-ն։", "B не между A и C, поэтому AB + BC длиннее AC."),
};

const BOX = { w: 320, h: 220 };
const typeOf = (d: number) => (Math.abs(d - 90) < 0.5 ? W.right : Math.abs(d - 180) < 0.5 ? W.straight : d < 90 ? W.acute : W.obtuse);

/* ---------------- angle with protractor ---------------- */

export function AnglePreset({ spec, lang }: SimProps) {
  const O = { x: 160, y: 170 }, A = { x: 300, y: 170 };
  const [a, setA] = useState(Number(spec.opts.deg ?? 50));
  const R = 110;
  const B = { x: O.x + R * Math.cos((a * Math.PI) / 180), y: O.y - R * Math.sin((a * Math.PI) / 180) };
  const drag = useDrag<"b">((p) => (dist(p, B) < 26 ? "b" : null), (_, p) => {
    let d = (Math.atan2(O.y - p.y, p.x - O.x) * 180) / Math.PI;
    if (d < 0) d = d < -90 ? 180 : 0;
    d = Math.round(d);
    if (Math.abs(d - 90) <= 2) d = 90;
    setA(clamp(d, 0, 180));
  });
  const bis = spec.opts.show === "bisector";
  return (
    <ArtFrame kind="experiment" title={L(W.angle, lang)} body={spec.body || L(W.angleHint, lang)}>
      <Stage w={320} h={200} label={L(W.angle, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        <path d={`M${O.x - 130},${O.y} A130,130 0 0 1 ${O.x + 130},${O.y} Z`} fill="#fef3c7" stroke="#d97706" opacity="0.7" />
        {Array.from({ length: 37 }, (_, k) => {
          const r1 = 130, r2 = k % 9 === 0 ? 112 : k % 2 === 0 ? 120 : 124, th = (k * 5 * Math.PI) / 180;
          return <line key={k} x1={O.x + r1 * Math.cos(th)} y1={O.y - r1 * Math.sin(th)} x2={O.x + r2 * Math.cos(th)} y2={O.y - r2 * Math.sin(th)} stroke="#b45309" strokeWidth="1" />;
        })}
        {[0, 30, 60, 90, 120, 150, 180].map((d) => <text key={d} x={O.x + 102 * Math.cos((d * Math.PI) / 180)} y={O.y - 102 * Math.sin((d * Math.PI) / 180) + 3} textAnchor="middle" className="sim-axis">{d}</text>)}
        <Seg a={O} b={A} w={3} />
        <Seg a={O} b={B} w={3} color={COL.a} />
        {a > 0 ? <Angle a={A} b={O} c={B} r={30} label={deg1(a, lang)} right={a === 90} /> : null}
        {bis ? <Seg a={O} b={{ x: O.x + 130 * Math.cos((a * Math.PI) / 360), y: O.y - 130 * Math.sin((a * Math.PI) / 360) }} color={COL.b} dash="5 4" /> : null}
        <Dot p={O} />
        <Label p={O} dy={14}>O</Label>
        <Label p={A} dy={14} dx={-8}>A</Label>
        <Handles pts={{ b: B }} labels={{ b: "B" }} />
      </Stage>
      <Readouts items={[["∠AOB", deg1(a, lang), COL.a], [L(W.type, lang), L(typeOf(a), lang)], ...(bis ? [[L(W.bisector, lang), `${deg1(a / 2, lang)} + ${deg1(a / 2, lang)}`, COL.b] as [string, string, string]] : [])]} />
    </ArtFrame>
  );
}

/* ---------------- adjacent and vertical angles ---------------- */

export function AdjacentPreset({ spec, lang }: SimProps) {
  const O = { x: 160, y: 150 };
  const [a, setA] = useState(55);
  const C = { x: O.x + 110 * Math.cos((a * Math.PI) / 180), y: O.y - 110 * Math.sin((a * Math.PI) / 180) };
  const A = { x: 300, y: O.y }, B = { x: 20, y: O.y };
  const drag = useDrag<"c">((p) => (dist(p, C) < 26 ? "c" : null), (_, p) => setA(clamp(Math.round((Math.atan2(O.y - p.y, p.x - O.x) * 180) / Math.PI), 5, 175)));
  return (
    <ArtFrame kind="experiment" title={L(W.adjacent, lang)} body={spec.body || L(W.adjacentHint, lang)}>
      <Stage w={320} h={180} label={L(W.adjacent, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        <Seg a={B} b={A} w={3} />
        <Seg a={O} b={C} w={3} color={COL.a} />
        <Angle a={A} b={O} c={C} r={34} color={COL.a} label={deg1(a, lang)} />
        <Angle a={C} b={O} c={B} r={24} color={COL.b} label={deg1(180 - a, lang)} />
        <Dot p={O} /><Label p={O} dy={14}>O</Label><Label p={A} dy={14}>A</Label><Label p={B} dy={14}>B</Label>
        <Handles pts={{ c: C }} labels={{ c: "C" }} />
      </Stage>
      <Readouts items={[["∠AOC", deg1(a, lang), COL.a], ["∠COB", deg1(180 - a, lang), COL.b], [L(W.sum, lang), `${deg1(a, lang)} + ${deg1(180 - a, lang)} = 180°`]]} />
    </ArtFrame>
  );
}

export function VerticalPreset({ spec, lang }: SimProps) {
  const O = { x: 160, y: 100 };
  const [a, setA] = useState(60);
  const d = { x: Math.cos((a * Math.PI) / 180), y: -Math.sin((a * Math.PI) / 180) };
  const C = add(O, mul(d, 90)), D = sub(O, mul(d, 90));
  const A = { x: 290, y: O.y }, B = { x: 30, y: O.y };
  const drag = useDrag<"c">((p) => (dist(p, C) < 26 ? "c" : null), (_, p) => {
    let v = Math.round((Math.atan2(O.y - p.y, p.x - O.x) * 180) / Math.PI);
    if (Math.abs(v - 90) <= 2) v = 90;
    setA(clamp(v, 10, 170));
  });
  return (
    <ArtFrame kind="experiment" title={L(W.vertical, lang)} body={spec.body || L(W.verticalHint, lang)}>
      <Stage w={320} h={200} label={L(W.vertical, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        <Seg a={B} b={A} w={3} />
        <Seg a={D} b={C} w={3} color={COL.a} />
        <Angle a={A} b={O} c={C} r={26} color={COL.a} label={`1: ${deg1(a, lang)}`} />
        <Angle a={C} b={O} c={B} r={20} color={COL.b} label={`2: ${deg1(180 - a, lang)}`} />
        <Angle a={B} b={O} c={D} r={26} color={COL.a} label={`3: ${deg1(a, lang)}`} />
        <Angle a={D} b={O} c={A} r={20} color={COL.b} label={`4: ${deg1(180 - a, lang)}`} />
        <Dot p={O} />
        <Handles pts={{ c: C }} />
      </Stage>
      <Readouts items={[["∠1 = ∠3", deg1(a, lang), COL.a], ["∠2 = ∠4", deg1(180 - a, lang), COL.b]]} />
      {a === 90 ? <Note tone="good">{L(W.perp, lang)}</Note> : null}
    </ArtFrame>
  );
}

/* ---------------- the triangle and its lines ---------------- */

type Tool = "angles" | "exterior" | "median" | "bisector" | "altitude" | "midline" | "medians" | "bisectors" | "perps" | "altitudes" | "area";
const TOOLS: Tool[] = ["angles", "exterior", "median", "bisector", "altitude", "midline", "medians", "bisectors", "perps", "altitudes", "area"];

export function TrianglePreset({ spec, lang }: SimProps) {
  const avail = list(spec.opts.tools, TOOLS).filter((x): x is Tool => TOOLS.includes(x as Tool));
  const [on, setOn] = useState<Tool[]>(list(spec.opts.show, ["angles"]).filter((x): x is Tool => TOOLS.includes(x as Tool)));
  const init = spec.opts.shape === "right" ? { A: { x: 80, y: 180 }, B: { x: 260, y: 180 }, C: { x: 80, y: 50 } } : spec.opts.shape === "iso" ? { A: { x: 70, y: 180 }, B: { x: 250, y: 180 }, C: { x: 160, y: 40 } } : { A: { x: 60, y: 180 }, B: { x: 270, y: 180 }, C: { x: 120, y: 50 } };
  const { pts, drag } = usePoints(init, BOX, (_, p) => snap(p, 5));
  const { A, B, C } = pts;
  const G = centroid(A, B, C);
  const a = dist(B, C) / U, b = dist(A, C) / U, c = dist(A, B) / U;
  const aA = angleAt(B, A, C), aB = angleAt(A, B, C), aC = 180 - aA - aB;
  const has = (x: Tool) => on.includes(x);
  const toggle = (x: Tool) => setOn((s) => (s.includes(x) ? s.filter((y) => y !== x) : [...s, x]));
  const eq = (x: number, y: number) => Math.abs(x - y) < 0.05;
  const kind = eq(a, b) && eq(b, c) ? W.equi : eq(a, b) || eq(b, c) || eq(a, c) ? W.iso : W.scal;
  const r1 = (v: number) => Math.round(v);
  const big = Math.max(aA, aB, aC);
  const angKind = Math.abs(big - 90) < 0.5 ? W.right : big > 90 ? W.obtuse : W.acute;
  const notes: string[] = [];
  const extEnd = add(C, mul(sub(C, B), 70 / (dist(B, C) || 1)));
  const footC = foot(C, A, B);
  const mBC = mid(B, C), mAB = mid(A, B), mAC = mid(A, C);
  const bisFoot = meet(A, add(A, add(mul(sub(B, A), 1 / (dist(A, B) || 1)), mul(sub(C, A), 1 / (dist(A, C) || 1)))), B, C) ?? mBC;
  const O = circumcenter(A, B, C), I = incenter(A, B, C), H = orthocenter(A, B, C);
  const ir = (2 * areaOf([A, B, C])) / ((dist(A, B) + dist(B, C) + dist(A, C)) || 1);
  if (has("exterior")) notes.push(L(W.noteExt, lang));
  if (has("midline")) notes.push(L(W.noteMid, lang));
  if (has("medians")) notes.push(L(W.noteMed, lang));
  if (has("bisectors")) notes.push(L(W.noteInc, lang));
  if (has("perps")) notes.push(L(W.noteCirc, lang));
  if (has("altitudes")) notes.push(L(W.noteAlt, lang));
  const s = (a + b + c) / 2;
  return (
    <ArtFrame kind="experiment" title={L(W.tri, lang)} body={spec.body || `${L(W.triHint, lang)} ${L(UI.drag, lang)}`}>
      <Stage w={BOX.w} h={BOX.h} label={L(W.tri, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        {has("perps") ? (
          <g>
            <circle cx={O.x} cy={O.y} r={dist(O, A)} fill="none" stroke={COL.c} strokeWidth="1.6" />
            {[[A, B], [B, C], [A, C]].map(([p, q], k) => { const m = mid(p, q), d = sub(q, p); return <Line key={k} a={m} b={add(m, { x: -d.y, y: d.x })} color={COL.c} dash="4 3" w={1.2} />; })}
            <Dot p={O} color={COL.c} />
          </g>
        ) : null}
        {has("bisectors") ? (
          <g>
            <circle cx={I.x} cy={I.y} r={ir} fill="none" stroke={COL.d} strokeWidth="1.6" />
            {[A, B, C].map((v, k) => <Seg key={k} a={v} b={I} color={COL.d} dash="4 3" w={1.2} />)}
            <Dot p={I} color={COL.d} />
          </g>
        ) : null}
        {has("altitudes") ? (
          <g>
            {[[A, B, C], [B, A, C], [C, A, B]].map(([v, p, q], k) => { const f = foot(v, p, q); return <g key={k}><Line a={p} b={q} color="#cbd5e1" w={1} /><Seg a={v} b={f} color={COL.e} w={1.4} /><Seg a={f} b={H} color={COL.e} dash="3 3" w={1} /></g>; })}
            <Dot p={H} color={COL.e} />
          </g>
        ) : null}
        {has("area") ? <Poly pts={[A, B, C]} fill="#c7d2fe" stroke="none" opacity={0.6} /> : null}
        <Poly pts={[A, B, C]} />
        {has("angles") ? (
          <g>
            <Angle a={B} b={A} c={C} color={COL.a} label={`${r1(aA)}°`} />
            <Angle a={A} b={B} c={C} color={COL.b} label={`${r1(aB)}°`} />
            <Angle a={A} b={C} c={B} color={COL.c} label={`${180 - r1(aA) - r1(aB)}°`} />
          </g>
        ) : null}
        {has("exterior") ? (
          <g>
            <Seg a={C} b={extEnd} color={COL.soft} />
            <Angle a={A} b={C} c={extEnd} r={18} color={COL.e} label={`${r1(aA) + r1(aB)}°`} />
            <Angle a={B} b={A} c={C} r={18} color={COL.a} />
            <Angle a={A} b={B} c={C} r={18} color={COL.b} />
          </g>
        ) : null}
        {has("median") ? <g><Seg a={A} b={mBC} color={COL.b} /><Ticks a={B} b={mBC} color={COL.b} /><Ticks a={mBC} b={C} color={COL.b} /></g> : null}
        {has("bisector") ? <g><Seg a={A} b={bisFoot} color={COL.d} /><Angle a={B} b={A} c={bisFoot} r={28} color={COL.d} fill={false} /><Angle a={bisFoot} b={A} c={C} r={32} color={COL.d} fill={false} /></g> : null}
        {has("altitude") ? <g><Line a={A} b={B} color="#cbd5e1" w={1} /><Seg a={C} b={footC} color={COL.e} /><Angle a={A} b={footC} c={C} r={10} color={COL.e} right /></g> : null}
        {has("midline") ? <g><Seg a={mAC} b={mBC} color={COL.f} w={3} /><Ticks a={A} b={mAC} color={COL.f} /><Ticks a={mAC} b={C} color={COL.f} /><Ticks a={B} b={mBC} n={2} color={COL.f} /><Ticks a={mBC} b={C} n={2} color={COL.f} /></g> : null}
        {has("medians") ? <g>{[[A, mBC], [B, mAC], [C, mAB]].map(([p, q], k) => <Seg key={k} a={p} b={q} color={COL.b} w={1.4} />)}<Dot p={G} color={COL.b} /></g> : null}
        <Name p={A} from={G}>A</Name><Name p={B} from={G}>B</Name><Name p={C} from={G}>C</Name>
        <Handles pts={pts} />
      </Stage>
      <Readouts
        items={[
          [L(W.sides, lang), `a = ${fmt(a, 1, lang)}, b = ${fmt(b, 1, lang)}, c = ${fmt(c, 1, lang)}`],
          ["∠A + ∠B + ∠C", `${r1(aA)}° + ${r1(aB)}° + ${r1(180 - r1(aA) - r1(aB))}° = 180°`, COL.a],
          [L(W.type, lang), `${L(angKind, lang)}, ${L(kind, lang)}`],
          ...(has("median") ? [[L(W.median, lang), `${fmt(dist(A, mBC) / U, 1, lang)}`, COL.b] as [string, string, string]] : []),
          ...(has("midline") ? [[L(W.midline, lang), `${fmt(dist(mAC, mBC) / U, 1, lang)} = ${fmt(c, 1, lang)} : 2`, COL.f] as [string, string, string]] : []),
          ...(has("altitude") ? [[L(W.altitude, lang), fmt(dist(C, footC) / U, 1, lang), COL.e] as [string, string, string]] : []),
          ...(has("area") ? [[`S = ½·c·h`, `${fmt(areaOf([A, B, C]) / (U * U), 1, lang)} ≈ √(${fmt(s, 1, lang)}·${fmt(s - a, 1, lang)}·${fmt(s - b, 1, lang)}·${fmt(s - c, 1, lang)})`, "#4f46e5"] as [string, string, string]] : []),
        ]}
      />
      {notes.length ? <Note>{notes.join(" ")}</Note> : null}
      {avail.length > 1 ? (
        <div className="art-chips">
          {avail.map((x) => <button key={x} type="button" aria-pressed={has(x)} className={cn("art-chip", has(x) && "is-active")} onClick={() => toggle(x)}>{L(W[x], lang)}</button>)}
        </div>
      ) : null}
    </ArtFrame>
  );
}

/* ---------------- triangle inequality ---------------- */

export function InequalityPreset({ spec, lang }: SimProps) {
  const [a, setA] = useState(5), [b, setB] = useState(4), [c, setC] = useState(7);
  const S = 22;
  const P0 = { x: 160 - (c * S) / 2, y: 170 }, P1 = { x: 160 + (c * S) / 2, y: 170 };
  const x = (b * b - a * a + c * c) / (2 * c);
  const h2 = b * b - x * x;
  const ok = h2 > 1e-9, flat = Math.abs(h2) < 1e-9;
  const top = { x: P0.x + x * S, y: 170 - Math.sqrt(Math.max(0, h2)) * S };
  const sorted = [a, b, c].sort((p, q) => p - q);
  return (
    <ArtFrame kind="experiment" title={L(W.ineq, lang)} body={spec.body || L(W.ineqHint, lang)}>
      <Stage w={320} h={200} label={L(W.ineq, lang)}>
        <circle cx={P0.x} cy={P0.y} r={b * S} fill="none" stroke={COL.c} strokeDasharray="4 3" />
        <circle cx={P1.x} cy={P1.y} r={a * S} fill="none" stroke={COL.b} strokeDasharray="4 3" />
        <Seg a={P0} b={P1} w={3} />
        {ok || flat ? <Poly pts={[P0, P1, top]} fill="#c7d2fe" opacity={0.5} /> : (
          <g>
            <Seg a={P0} b={{ x: P0.x + b * S, y: 170 }} color={COL.c} w={3} />
            <Seg a={P1} b={{ x: P1.x - a * S, y: 170 }} color={COL.b} w={3} />
          </g>
        )}
        <Label p={mid(P0, P1)} dy={14}>c = {c}</Label>
        {ok ? <><Label p={mid(P0, top)} dx={-14} color={COL.c}>b = {b}</Label><Label p={mid(P1, top)} dx={14} color={COL.b}>a = {a}</Label></> : null}
      </Stage>
      <Slider label="a" value={a} min={1} max={10} step={1} digits={0} lang={lang} onChange={setA} />
      <Slider label="b" value={b} min={1} max={10} step={1} digits={0} lang={lang} onChange={setB} />
      <Slider label="c" value={c} min={1} max={12} step={1} digits={0} lang={lang} onChange={setC} />
      <Readouts items={[[`${sorted[0]} + ${sorted[1]}`, `${sorted[0] + sorted[1]} ${sorted[0] + sorted[1] > sorted[2] ? ">" : sorted[0] + sorted[1] === sorted[2] ? "=" : "<"} ${sorted[2]}`, ok ? "#16a34a" : "#dc2626"]]} />
      <Note tone={ok ? "good" : "bad"}>{L(ok ? W.yes : flat ? W.flat : W.no, lang)}</Note>
    </ArtFrame>
  );
}

/* ---------------- parallel lines cut by a transversal ---------------- */

type Pair = "corr" | "alt" | "co";

export function ParallelPreset({ spec, lang }: SimProps) {
  const [top, setTop] = useState(190), [bot, setBot] = useState(130);
  const [tilt, setTilt] = useState(0);
  const [pair, setPair] = useState<Pair>((["corr", "alt", "co"] as Pair[]).find((x) => x === spec.opts.pair) ?? "corr");
  const y1 = 60, y2 = 150;
  const k = Math.tan((tilt * Math.PI) / 180);
  const lowY = (x: number) => y2 + (x - 160) * k;
  const T = { x: top, y: y1 };
  const dir = sub({ x: bot, y: lowY(bot) }, T);
  const Bp = meet(T, add(T, dir), { x: 0, y: lowY(0) }, { x: 320, y: lowY(320) }) ?? { x: bot, y: y2 };
  const drag = useDrag<"t" | "b">((p) => (dist(p, T) < 24 ? "t" : dist(p, Bp) < 24 ? "b" : null), (h, p) => (h === "t" ? setTop(clamp(Math.round(p.x), 60, 260)) : setBot(clamp(Math.round(p.x), 60, 260))));
  const up = sub(T, Bp), u = mul(up, 1 / (dist(T, Bp) || 1));
  const R1 = { x: 320, y: y1 }, L1 = { x: 0, y: y1 }, R2 = { x: 320, y: lowY(320) }, L2 = { x: 0, y: lowY(0) };
  const upT = add(T, mul(u, 60)), dnT = sub(T, mul(u, 60)), upB = add(Bp, mul(u, 60));
  const a1 = angleAt(R1, T, upT);
  const a5 = angleAt(R2, Bp, upB);
  const shown: Record<Pair, Array<[P, P, P, string]>> = {
    corr: [[R1, T, upT, "1"], [R2, Bp, upB, "5"]],
    alt: [[R1, T, dnT, "4"], [L2, Bp, upB, "6"]],
    co: [[R1, T, dnT, "4"], [R2, Bp, upB, "5"]],
  };
  const vals: Record<Pair, [number, number]> = { corr: [a1, a5], alt: [180 - a1, 180 - a5], co: [180 - a1, a5] };
  const [v1, v2] = vals[pair];
  const isPar = tilt === 0;
  return (
    <ArtFrame kind="experiment" title={L(W.par, lang)} body={spec.body || L(W.parHint, lang)}>
      <Stage w={320} h={200} label={L(W.par, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        <Seg a={L1} b={R1} w={2.5} />
        <Seg a={L2} b={R2} w={2.5} color={isPar ? COL.line : COL.b} />
        <Line a={T} b={Bp} color={COL.a} w={2} />
        {shown[pair].map(([p, v, q, n], i) => <Angle key={n} a={p} b={v} c={q} r={22} color={i ? COL.b : COL.a} label={`${n}: ${deg1(i ? v2 : v1, lang)}`} />)}
        <text x="300" y={y1 - 6} className="sim-tag" fill="#1e1b4b">a</text>
        <text x="300" y={lowY(300) - 6} className="sim-tag" fill="#1e1b4b">b</text>
        <Handles pts={{ t: T, b: Bp }} />
      </Stage>
      <Readouts items={[[L(W[pair], lang), pair === "co" ? `${deg1(v1, lang)} + ${deg1(v2, lang)} = ${deg1(v1 + v2, lang)}` : `${deg1(v1, lang)} ${Math.abs(v1 - v2) < 0.5 ? "=" : "≠"} ${deg1(v2, lang)}`, isPar ? "#16a34a" : "#dc2626"]]} />
      <Choice value={pair} options={(["corr", "alt", "co"] as Pair[]).map((x) => [x, L(W[x], lang)])} onChange={setPair} />
      <Slider label={L(W.tilt, lang)} value={tilt} min={-15} max={15} step={1} digits={0} unit="°" lang={lang} onChange={setTilt} />
      <Note tone={isPar ? "good" : "bad"}>{L(isPar ? W.parallel : W.notPar, lang)}</Note>
    </ArtFrame>
  );
}

/* ---------------- distance from a point to a line ---------------- */

export function DistancePreset({ spec, lang }: SimProps) {
  const { pts, drag } = usePoints({ M: { x: 150, y: 50 }, K: { x: 240, y: 160 } }, BOX, (k, p) => (k === "K" ? { x: p.x, y: 160 } : { x: p.x, y: Math.min(p.y, 140) }));
  const { M, K } = pts;
  const Hp = { x: M.x, y: 160 };
  return (
    <ArtFrame kind="experiment" title={L(W.dist, lang)} body={spec.body || L(W.distHint, lang)}>
      <Stage w={320} h={200} label={L(W.dist, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        <Seg a={{ x: 10, y: 160 }} b={{ x: 310, y: 160 }} w={2.5} />
        <Seg a={M} b={Hp} color={COL.a} w={2.5} />
        <Seg a={M} b={K} color={COL.b} w={2} dash="6 4" />
        <Angle a={{ x: 0, y: 160 }} b={Hp} c={M} r={10} color={COL.a} right />
        <Dot p={Hp} color={COL.a} />
        <Label p={Hp} dy={14} color={COL.a}>H</Label>
        <Label p={{ x: 300, y: 160 }} dy={14}>l</Label>
        <Handles pts={pts} labels={{ M: "M", K: "K" }} colors={{ K: COL.b }} />
      </Stage>
      <Readouts items={[["MH", `${fmt(dist(M, Hp) / U, 1, lang)} ${un("cm", lang)}`, COL.a], ["MK", `${fmt(dist(M, K) / U, 1, lang)} ${un("cm", lang)}`, COL.b]]} />
    </ArtFrame>
  );
}

/* ---------------- measuring segments ---------------- */

export function SegmentsPreset({ spec, lang }: SimProps) {
  const X = (cm: number) => 20 + cm * 25;
  const [b, setB] = useState(4), [c, setC] = useState(9);
  const drag = useDrag<"b" | "c">((p) => (Math.abs(p.x - X(b)) < 16 && p.y < 90 ? "b" : Math.abs(p.x - X(c)) < 16 && p.y < 90 ? "c" : null), (k, p) => {
    const v = clamp(Math.round(((p.x - 20) / 25) * 2) / 2, 0.5, 11.5);
    if (k === "b") setB(v); else setC(v);
  });
  const ab = b, bc = Math.abs(c - b), ac = c;
  const between = b < c;
  return (
    <ArtFrame kind="experiment" title={L(W.seg, lang)} body={spec.body || L(W.segHint, lang)}>
      <Stage w={320} h={130} label={L(W.seg, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        <Seg a={{ x: X(0), y: 60 }} b={{ x: X(Math.max(b, c)), y: 60 }} w={3} />
        <rect x="10" y="76" width="300" height="40" rx="4" fill="#fef3c7" stroke="#d97706" />
        {Array.from({ length: 121 }, (_, k) => (
          <line key={k} x1={X(k / 10)} x2={X(k / 10)} y1="76" y2={76 + (k % 10 === 0 ? 14 : k % 5 === 0 ? 10 : 6)} stroke="#78350f" strokeWidth={k % 10 === 0 ? 1.2 : 0.6} />
        ))}
        {Array.from({ length: 12 }, (_, k) => <text key={k} x={X(k)} y="106" textAnchor="middle" className="sim-axis">{k}</text>)}
        <Dot p={{ x: X(0), y: 60 }} /><Label p={{ x: X(0), y: 60 }} dy={-14}>A</Label>
        <Handles pts={{ b: { x: X(b), y: 60 }, c: { x: X(c), y: 60 } }} colors={{ c: COL.b }} />
        <Label p={{ x: X(b), y: 60 }} dy={-18} color={COL.a}>B</Label>
        <Label p={{ x: X(c), y: 60 }} dy={-18} color={COL.b}>C</Label>
      </Stage>
      <Readouts items={[["AB", `${fmt(ab, 1, lang)} ${un("cm", lang)}`], ["BC", `${fmt(bc, 1, lang)} ${un("cm", lang)}`], ["AB + BC", `${fmt(ab + bc, 1, lang)} ${between ? "=" : ">"} AC = ${fmt(ac, 1, lang)}`, between ? "#16a34a" : "#dc2626"]]} />
      <Note tone={between ? "good" : undefined}>{L(between ? W.between : W.outside, lang)}</Note>
    </ArtFrame>
  );
}

