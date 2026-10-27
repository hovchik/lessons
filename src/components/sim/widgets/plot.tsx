"use client";

import { useId, useState, type ReactNode } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Choice, clamp, fmt, Note, Readouts, Slider, Stage, Toggle } from "../kit";
import { L, t } from "../labels";
import { COLORS, Counter, piText, Sum, trigName } from "../math-kit";

/**
 * Graphs of functions on a coordinate plane, with sliders for the parameters:
 *   plot k=2 b=-1                            linear function y = kx + b, slope triangle, intercepts
 *   plot mode=system k1=1 b1=1 k2=-1 b2=3    two lines and their intersection (solving a system)
 *   plot mode=quad a=1 m=1 n=-4 [form=general b= c=] [show=sign]   parabola: vertex, axis, roots, signs
 *   plot mode=power n=2 [k=1]                y = k·xⁿ for n = 1, 2, 3, −1, −2, ½: domain, range, parity
 *   plot mode=shift base=sq m=2 n=1 [a=1]    y = a·f(x − m) + n over the dashed base graph
 *   plot mode=trig fn=sin [a=1 k=1 d=0]      y = a·sin(kx) + d (also cos, tan), period and range
 *   plot mode=exp a=2 [show=log]             y = aˣ and, mirrored in y = x, y = logₐx
 *   plot mode=log a=2                        the same pair with the logarithm in front
 *   plot mode=tangent fn=sq x=1 [show=deriv] tangent line and slope f′(x₀); optional graph of f′
 *   plot mode=area fn=sq a=0 b=2 n=4         area under a graph: rectangles and the exact integral
 *   plot mode=complex a=3 b=2                z = a + bi as a point and an arrow: modulus, argument, conjugate, ·i
 */
const W = {
  linear: t("Experiment: the linear function", "Փորձ․ գծային ֆունկցիա", "Опыт: линейная функция"),
  linearHint: t("Change k and b. k is the slope: how much y grows when x grows by 1. b is where the line crosses the y-axis.", "Փոխի՛ր k-ն և b-ն։ k-ն թեքությունն է՝ որքան է աճում y-ը, երբ x-ը աճում է 1-ով։ b-ն այն կետն է, որտեղ ուղիղը հատում է y առանցքը։", "Меняй k и b. k — угловой коэффициент: на сколько растёт y, когда x растёт на 1. b — точка пересечения с осью y."),
  system: t("Experiment: solving a system with graphs", "Փորձ․ համակարգի գրաֆիկական լուծում", "Опыт: графическое решение системы"),
  systemHint: t("Each equation is a line. The point where the lines cross satisfies both equations: it is the solution.", "Յուրաքանչյուր հավասարում ուղիղ է։ Ուղիղների հատման կետը բավարարում է երկու հավասարմանն էլ՝ այն լուծումն է։", "Каждое уравнение — прямая. Точка пересечения прямых удовлетворяет обоим уравнениям — это и есть решение."),
  quad: t("Experiment: the parabola", "Փորձ․ պարաբոլ", "Опыт: парабола"),
  quadHint: t("a bends the parabola and turns it over; the vertex moves with the other numbers. Watch the roots appear and disappear.", "a-ն ձգում և շրջում է պարաբոլը, գագաթը շարժվում է մյուս թվերի հետ։ Հետևի՛ր, թե ինչպես են արմատները հայտնվում և անհետանում։", "a растягивает и переворачивает параболу, вершина двигается вместе с другими числами. Следи, как корни появляются и исчезают."),
  power: t("Look closely: power functions", "Ուշադիր նայի՛ր․ աստիճանային ֆունկցիաներ", "Рассмотри: степенные функции"),
  powerHint: t("Pick the power and compare the shapes. Even powers are symmetric about the y-axis, odd powers about the origin.", "Ընտրի՛ր աստիճանը և համեմատի՛ր ձևերը։ Զույգ աստիճանները համաչափ են y առանցքի նկատմամբ, կենտերը՝ սկզբնակետի։", "Выбери степень и сравни формы. Чётные степени симметричны относительно оси y, нечётные — относительно начала координат."),
  shift: t("Experiment: moving a graph", "Փորձ․ գրաֆիկի տեղաշարժ", "Опыт: сдвиг графика"),
  shiftHint: t("x − m moves the graph right by m, + n moves it up by n, and a stretches it or flips it over. The dashed graph is the original.", "x − m-ը գրաֆիկը տեղաշարժում է m-ով աջ, + n-ը՝ n-ով վեր, իսկ a-ն ձգում կամ շրջում է այն։ Կետագիծը սկզբնական գրաֆիկն է։", "x − m сдвигает график на m вправо, + n — на n вверх, а a растягивает или переворачивает его. Пунктир — исходный график."),
  trig: t("Experiment: graphs of sine, cosine and tangent", "Փորձ․ սինուսի, կոսինուսի և տանգենսի գրաֆիկները", "Опыт: графики синуса, косинуса и тангенса"),
  trigHint: t("a changes the height of the waves, k squeezes them (the period becomes 2π/k), d lifts the whole graph.", "a-ն փոխում է ալիքների բարձրությունը, k-ն սեղմում է դրանք (պարբերությունը դառնում է 2π/k), d-ն բարձրացնում է ամբողջ գրաֆիկը։", "a меняет высоту волн, k сжимает их (период становится 2π/k), d поднимает весь график."),
  exp: t("Experiment: exponential and logarithmic functions", "Փորձ․ ցուցչային և լոգարիթմական ֆունկցիաներ", "Опыт: показательная и логарифмическая функции"),
  expHint: t("Change the base a. Every graph y = aˣ passes through (0; 1). The logarithm is its mirror image in the line y = x.", "Փոխի՛ր a հիմքը։ y = aˣ գրաֆիկներն անցնում են (0; 1) կետով։ Լոգարիթմը նրա հայելային պատկերն է y = x ուղղի նկատմամբ։", "Меняй основание a. Каждый график y = aˣ проходит через (0; 1). Логарифм — его зеркальное отражение относительно прямой y = x."),
  tangent: t("Experiment: the tangent and the derivative", "Փորձ․ շոշափող և ածանցյալ", "Опыт: касательная и производная"),
  tangentHint: t("Move the point. The slope of the tangent line is the derivative f′(x₀): positive where the graph rises, zero at a peak or a valley.", "Շարժի՛ր կետը։ Շոշափողի թեքությունը f′(x₀) ածանցյալն է՝ դրական, որտեղ գրաֆիկը բարձրանում է, զրո՝ գագաթում կամ փոսում։", "Двигай точку. Наклон касательной — производная f′(x₀): положительна, где график растёт, равна нулю на вершине или во впадине."),
  area: t("Experiment: area under a graph", "Փորձ․ մակերես գրաֆիկի տակ", "Опыт: площадь под графиком"),
  areaHint: t("Fill the area with rectangles. The more rectangles, the closer their sum is to the exact area: the integral.", "Լցրո՛ւ մակերեսն ուղղանկյուններով։ Որքան շատ են ուղղանկյունները, այնքան նրանց գումարը մոտ է ճշգրիտ մակերեսին՝ ինտեգրալին։", "Заполни площадь прямоугольниками. Чем их больше, тем ближе сумма к точной площади — интегралу."),
  slope: t("Slope k", "Թեքություն k", "Наклон k"),
  yInt: t("Crosses y at", "y-ը հատում է", "Пересекает y в"),
  root: t("Root (y = 0)", "Արմատ (y = 0)", "Корень (y = 0)"),
  roots: t("Roots", "Արմատներ", "Корни"),
  none: t("none", "չկան", "нет"),
  any: t("any x", "ցանկացած x", "любой x"),
  rising: t("k > 0: the line rises from left to right.", "k > 0․ ուղիղը ձախից աջ բարձրանում է։", "k > 0: прямая идёт вверх слева направо."),
  falling: t("k < 0: the line falls from left to right.", "k < 0․ ուղիղը ձախից աջ իջնում է։", "k < 0: прямая идёт вниз слева направо."),
  flat: t("k = 0: the line is horizontal, y is the same for every x.", "k = 0․ ուղիղը հորիզոնական է, y-ը նույնն է բոլոր x-երի համար։", "k = 0: прямая горизонтальна, y одинаков для всех x."),
  solution: t("Solution", "Լուծում", "Решение"),
  parallel: t("The lines are parallel (same k, different b): they never meet, so the system has no solution.", "Ուղիղները զուգահեռ են (նույն k, տարբեր b)․ նրանք չեն հատվում, ուստի համակարգը լուծում չունի։", "Прямые параллельны (одинаковые k, разные b): они не пересекаются, и у системы нет решений."),
  same: t("It is the same line twice: every point of it is a solution.", "Դա նույն ուղիղն է երկու անգամ․ նրա յուրաքանչյուր կետ լուծում է։", "Это одна и та же прямая: любая её точка — решение."),
  vertex: t("Vertex", "Գագաթ", "Вершина"),
  axis: t("Axis", "Առանցք", "Ось"),
  disc: t("Discriminant", "Դիսկրիմինանտ", "Дискриминант"),
  signs: t("Signs of y", "y-ի նշանները", "Знаки y"),
  signNote: t("Green: y > 0. Red: y < 0. The roots split the x-axis into these intervals.", "Կանաչ՝ y > 0։ Կարմիր՝ y < 0։ Արմատները x առանցքը բաժանում են այս միջակայքերի։", "Зелёный: y > 0. Красный: y < 0. Корни делят ось x на эти промежутки."),
  domain: t("Domain", "Որոշման տիրույթ", "Область определения"),
  range: t("Range", "Արժեքների տիրույթ", "Множество значений"),
  parity: t("Parity", "Զույգություն", "Чётность"),
  even: t("even", "զույգ", "чётная"),
  odd: t("odd", "կենտ", "нечётная"),
  neither: t("neither", "ոչ զույգ, ոչ կենտ", "ни чётная, ни нечётная"),
  all: t("all numbers", "բոլոր թվերը", "все числа"),
  base: t("Base graph", "Սկզբնական գրաֆիկ", "Исходный график"),
  period: t("Period", "Պարբերություն", "Период"),
  growing: t("a > 1: the function grows.", "a > 1․ ֆունկցիան աճում է։", "a > 1: функция возрастает."),
  shrinking: t("0 < a < 1: the function decreases.", "0 < a < 1․ ֆունկցիան նվազում է։", "0 < a < 1: функция убывает."),
  constant: t("a = 1: every power of 1 is 1, so the graph is a horizontal line.", "a = 1․ 1-ի ցանկացած աստիճան 1 է, ուստի գրաֆիկը հորիզոնական ուղիղ է։", "a = 1: любая степень единицы равна 1, график — горизонтальная прямая."),
  showLog: t("Show the logarithm", "Ցույց տալ լոգարիթմը", "Показать логарифм"),
  showExp: t("Show the exponent", "Ցույց տալ ցուցչայինը", "Показать показательную"),
  point: t("Point x₀", "x₀ կետ", "Точка x₀"),
  value: t("f(x₀)", "f(x₀)", "f(x₀)"),
  deriv: t("Slope f′(x₀)", "Թեքություն f′(x₀)", "Наклон f′(x₀)"),
  tline: t("Tangent", "Շոշափող", "Касательная"),
  showDeriv: t("Show the graph of f′", "Ցույց տալ f′-ի գրաֆիկը", "Показать график f′"),
  flatTan: t("The tangent is horizontal: f′(x₀) = 0. Here the function can have a maximum or a minimum.", "Շոշափողը հորիզոնական է՝ f′(x₀) = 0։ Այստեղ ֆունկցիան կարող է ունենալ մաքսիմում կամ մինիմում։", "Касательная горизонтальна: f′(x₀) = 0. Здесь у функции может быть максимум или минимум."),
  up: t("f′(x₀) > 0: the function grows here.", "f′(x₀) > 0․ այստեղ ֆունկցիան աճում է։", "f′(x₀) > 0: здесь функция возрастает."),
  down: t("f′(x₀) < 0: the function decreases here.", "f′(x₀) < 0․ այստեղ ֆունկցիան նվազում է։", "f′(x₀) < 0: здесь функция убывает."),
  rects: t("Rectangles", "Ուղղանկյուններ", "Прямоугольники"),
  rectSum: t("Sum of rectangles", "Ուղղանկյունների գումարը", "Сумма прямоугольников"),
  exact: t("Exact area", "Ճշգրիտ մակերես", "Точная площадь"),
  from: t("From a", "a-ից", "От a"),
  to: t("To b", "Մինչև b", "До b"),
  complex: t("Experiment: the complex plane", "Փորձ․ կոմպլեքս հարթություն", "Опыт: комплексная плоскость"),
  complexHint: t("z = a + bi is the point (a; b). Its distance from 0 is the modulus |z|, the angle with the real axis is the argument. Multiplying by i turns the arrow by 90°.", "z = a + bi-ն (a; b) կետն է։ Նրա հեռավորությունը 0-ից |z| մոդուլն է, իրական առանցքի հետ կազմած անկյունը՝ արգումենտը։ i-ով բազմապատկելը սլաքը պտտում է 90°-ով։", "z = a + bi — это точка (a; b). Расстояние до 0 — модуль |z|, угол с действительной осью — аргумент. Умножение на i поворачивает стрелку на 90°."),
  modulus: t("Modulus |z|", "Մոդուլ |z|", "Модуль |z|"),
  argument: t("Argument", "Արգումենտ", "Аргумент"),
  conj: t("Conjugate", "Համալուծ", "Сопряжённое"),
  timesI: t("Multiply by i", "Բազմապատկել i-ով", "Умножить на i"),
};

type Win = { x0: number; x1: number; y0: number; y1: number };
type Fn = (x: number) => number;

const PW = 320, PH = 240;

/** Display number: up to 2 decimals, the locale's decimal sign, a real minus. */
const nf = (v: number, lang: ArtLang, d = 2) => fmt(Math.abs(v) < 1e-9 ? 0 : v, d, lang).replace("-", "−");

/** "3x", "x", "−x", "" for k = 0. */
function term(k: number, v: string, lang: ArtLang) {
  if (Math.abs(k) < 1e-9) return "";
  if (Math.abs(k - 1) < 1e-9) return v;
  if (Math.abs(k + 1) < 1e-9) return `−${v}`;
  return `${nf(k, lang)}${v}`;
}
/** Joins terms with " + " / " − " signs: [[2,"x²"],[−3,"x"],[1,""]] → 2x² − 3x + 1. */
function poly(terms: Array<[number, string]>, lang: ArtLang) {
  let s = "";
  for (const [k, v] of terms) {
    if (Math.abs(k) < 1e-9) continue;
    const body = v ? term(Math.abs(k), v, lang) : nf(Math.abs(k), lang);
    s += s ? (k < 0 ? ` − ${body}` : ` + ${body}`) : k < 0 ? `−${body}` : body;
  }
  return s || "0";
}
/** x − m written the usual way: "x − 2", "x + 3", "x". */
const minus = (m: number, lang: ArtLang) => (Math.abs(m) < 1e-9 ? "x" : m > 0 ? `x − ${nf(m, lang)}` : `x + ${nf(-m, lang)}`);
const plusN = (n: number, lang: ArtLang) => (Math.abs(n) < 1e-9 ? "" : n > 0 ? ` + ${nf(n, lang)}` : ` − ${nf(-n, lang)}`);
const pt = (x: number, y: number, lang: ArtLang) => `(${nf(x, lang)}; ${nf(y, lang)})`;

/** SVG path of a graph; breaks where the function is undefined or jumps (1/x, tan x). */
function curve(f: Fn, win: Win, X: Fn, Y: Fn, from = win.x0, to = win.x1) {
  const span = win.y1 - win.y0;
  let d = "", pen = false, prev: number | null = null;
  const N = 480;
  for (let i = 0; i <= N; i++) {
    const x = from + ((to - from) * i) / N;
    const y = f(x);
    const ok = Number.isFinite(y) && y > win.y0 - span && y < win.y1 + span && !(prev !== null && Math.abs(y - prev) > span);
    prev = Number.isFinite(y) ? y : null;
    if (!ok) { pen = false; continue; }
    d += `${pen ? "L" : "M"}${X(x).toFixed(1)} ${Y(y).toFixed(1)}`;
    pen = true;
  }
  return d;
}

/** The coordinate plane: grid, axes and tick labels; children draw in world coordinates via X and Y. */
function Plane({ win, label, xTicks, children }: { win: Win; label: string; xTicks?: Array<[number, string]>; children: (X: Fn, Y: Fn) => ReactNode }) {
  const clip = useId().replace(/:/g, "");
  const X = (v: number) => ((v - win.x0) / (win.x1 - win.x0)) * PW;
  const Y = (v: number) => PH - ((v - win.y0) / (win.y1 - win.y0)) * PH;
  const step = (span: number) => (span > 24 ? 5 : span > 12 ? 2 : span > 5 ? 1 : 0.5);
  const grid = (a: number, b: number, s: number) => {
    const out: number[] = [];
    for (let v = Math.ceil(a / s) * s; v <= b + 1e-9; v += s) out.push(Number(v.toFixed(6)));
    return out;
  };
  const sx = step(win.x1 - win.x0), sy = step(win.y1 - win.y0);
  const ox = clamp(X(0), 0, PW), oy = clamp(Y(0), 0, PH);
  const xs: Array<[number, string]> = xTicks ?? grid(win.x0, win.x1, sx).filter((v) => Math.abs(v) > 1e-9).map((v) => [v, String(v).replace("-", "−")]);
  const ys = grid(win.y0, win.y1, sy).filter((v) => Math.abs(v) > 1e-9);
  return (
    <Stage w={PW} h={PH} label={label}>
      <defs><clipPath id={clip}><rect width={PW} height={PH} /></clipPath></defs>
      {grid(win.x0, win.x1, sx).map((v) => <line key={`gx${v}`} x1={X(v)} x2={X(v)} y1={0} y2={PH} stroke={COLORS.grid} />)}
      {xTicks?.map(([v]) => <line key={`tx${v}`} x1={X(v)} x2={X(v)} y1={0} y2={PH} stroke={COLORS.grid} />)}
      {grid(win.y0, win.y1, sy).map((v) => <line key={`gy${v}`} y1={Y(v)} y2={Y(v)} x1={0} x2={PW} stroke={COLORS.grid} />)}
      <line x1={0} x2={PW} y1={oy} y2={oy} stroke="#64748b" strokeWidth="1.2" />
      <line x1={ox} x2={ox} y1={0} y2={PH} stroke="#64748b" strokeWidth="1.2" />
      <path d={`M${PW - 7} ${oy - 4}L${PW} ${oy}L${PW - 7} ${oy + 4}`} fill="none" stroke="#64748b" />
      <path d={`M${ox - 4} 7L${ox} 0L${ox + 4} 7`} fill="none" stroke="#64748b" />
      <text x={PW - 4} y={oy - 7} textAnchor="end" className="sim-axis is-name">x</text>
      <text x={ox + 6} y={9} className="sim-axis is-name">y</text>
      {xs.map(([v, s]) => <text key={`lx${v}`} x={X(v)} y={clamp(oy + 10, 10, PH - 3)} textAnchor="middle" className="sim-axis">{s}</text>)}
      {ys.map((v) => <text key={`ly${v}`} x={clamp(ox - 3, 12, PW)} y={Y(v) + 3} textAnchor="end" className="sim-axis">{String(v).replace("-", "−")}</text>)}
      <g clipPath={`url(#${clip})`}>{children(X, Y)}</g>
    </Stage>
  );
}

const Dot = ({ x, y, color }: { x: number; y: number; color: string }) => <circle cx={x} cy={y} r="4.5" fill={color} stroke="#fff" strokeWidth="1.5" />;
const Tag = ({ x, y, color, children, anchor = "start" }: { x: number; y: number; color: string; children: ReactNode; anchor?: "start" | "middle" | "end" }) => (
  <text x={x} y={y} textAnchor={anchor} className="sim-tag" fill={color}>{children}</text>
);

const num = (v: string | undefined, d: number) => (v == null || v === "" || Number.isNaN(Number(v)) ? d : Number(v));

export default function Plot({ spec, lang }: SimProps) {
  switch (spec.opts.mode) {
    case "system": return <SystemPlot spec={spec} lang={lang} />;
    case "quad": return <QuadPlot spec={spec} lang={lang} />;
    case "power": return <PowerPlot spec={spec} lang={lang} />;
    case "shift": return <ShiftPlot spec={spec} lang={lang} />;
    case "trig": return <TrigPlot spec={spec} lang={lang} />;
    case "exp": return <ExpPlot spec={spec} lang={lang} logFirst={false} />;
    case "log": return <ExpPlot spec={spec} lang={lang} logFirst />;
    case "tangent": return <TangentPlot spec={spec} lang={lang} />;
    case "area": return <AreaPlot spec={spec} lang={lang} />;
    case "complex": return <ComplexPlot spec={spec} lang={lang} />;
    default: return <LinearPlot spec={spec} lang={lang} />;
  }
}

const WIN: Win = { x0: -8, x1: 8, y0: -6, y1: 6 };

/* ---------------- y = kx + b ---------------- */

function LinearPlot({ spec, lang }: SimProps) {
  const [k, setK] = useState(clamp(num(spec.opts.k, 2), -4, 4));
  const [b, setB] = useState(clamp(num(spec.opts.b, -1), -5, 5));
  const f = (x: number) => k * x + b;
  const root = Math.abs(k) > 1e-9 ? -b / k : null;
  const formula = `y = ${poly([[k, "x"], [b, ""]], lang)}`;
  return (
    <ArtFrame kind="experiment" title={L(W.linear, lang)} body={spec.body || L(W.linearHint, lang)}>
      <Plane win={WIN} label={formula}>
        {(X, Y) => (
          <g>
            <path d={curve(f, WIN, X, Y)} fill="none" stroke={COLORS.a} strokeWidth="2.8" />
            {/* slope triangle: run 1, rise k, starting at the y-intercept */}
            <path d={`M${X(0)} ${Y(b)}H${X(1)}V${Y(b + k)}`} fill="none" stroke={COLORS.b} strokeWidth="2" strokeDasharray="4 3" />
            <Tag x={(X(0) + X(1)) / 2} y={Y(b) + (k >= 0 ? 12 : -5)} color={COLORS.b} anchor="middle">1</Tag>
            {Math.abs(k) > 1e-9 ? <Tag x={X(1) + 4} y={(Y(b) + Y(b + k)) / 2 + 3} color={COLORS.b}>{nf(k, lang)}</Tag> : null}
            <Dot x={X(0)} y={Y(b)} color={COLORS.c} />
            {root !== null ? <Dot x={X(root)} y={Y(0)} color={COLORS.d} /> : null}
          </g>
        )}
      </Plane>
      <Sum parts={[[formula, COLORS.a]]} />
      <Readouts items={[[L(W.slope, lang), nf(k, lang), COLORS.b], [L(W.yInt, lang), pt(0, b, lang), COLORS.c], [L(W.root, lang), root === null ? (Math.abs(b) < 1e-9 ? L(W.any, lang) : L(W.none, lang)) : `x = ${nf(root, lang)}`, COLORS.d]]} />
      <Note>{L(k > 0 ? W.rising : k < 0 ? W.falling : W.flat, lang)}</Note>
      <Slider label="k" value={k} min={-4} max={4} step={0.5} lang={lang} display={nf(k, lang)} onChange={setK} />
      <Slider label="b" value={b} min={-5} max={5} step={0.5} lang={lang} display={nf(b, lang)} onChange={setB} />
    </ArtFrame>
  );
}

/* ---------------- two lines ---------------- */

function SystemPlot({ spec, lang }: SimProps) {
  const [k1, setK1] = useState(clamp(num(spec.opts.k1, 1), -4, 4));
  const [b1, setB1] = useState(clamp(num(spec.opts.b1, 1), -5, 5));
  const [k2, setK2] = useState(clamp(num(spec.opts.k2, -1), -4, 4));
  const [b2, setB2] = useState(clamp(num(spec.opts.b2, 3), -5, 5));
  const f1 = (x: number) => k1 * x + b1, f2 = (x: number) => k2 * x + b2;
  const par = Math.abs(k1 - k2) < 1e-9;
  const x = par ? 0 : (b2 - b1) / (k1 - k2), y = f1(x);
  const e1 = `y = ${poly([[k1, "x"], [b1, ""]], lang)}`, e2 = `y = ${poly([[k2, "x"], [b2, ""]], lang)}`;
  return (
    <ArtFrame kind="experiment" title={L(W.system, lang)} body={spec.body || L(W.systemHint, lang)}>
      <Plane win={WIN} label={`${e1}, ${e2}`}>
        {(X, Y) => (
          <g>
            <path d={curve(f1, WIN, X, Y)} fill="none" stroke={COLORS.a} strokeWidth="2.8" />
            <path d={curve(f2, WIN, X, Y)} fill="none" stroke={COLORS.b} strokeWidth="2.8" strokeDasharray={par && Math.abs(b1 - b2) < 1e-9 ? "7 5" : undefined} />
            {!par ? (
              <g>
                <path d={`M${X(x)} ${Y(0)}V${Y(y)}H${X(0)}`} fill="none" stroke={COLORS.d} strokeDasharray="3 3" />
                <Dot x={X(x)} y={Y(y)} color={COLORS.d} />
                <Tag x={X(x) + 7} y={Y(y) - 7} color={COLORS.d}>{pt(x, y, lang)}</Tag>
              </g>
            ) : null}
          </g>
        )}
      </Plane>
      <Sum parts={[[e1, COLORS.a]]} />
      <Sum parts={[[e2, COLORS.b]]} />
      {par ? <Note tone="bad">{L(Math.abs(b1 - b2) < 1e-9 ? W.same : W.parallel, lang)}</Note> : <Readouts items={[[L(W.solution, lang), `x = ${nf(x, lang)}, y = ${nf(y, lang)}`, COLORS.d]]} />}
      <div className="art-row">
        <Slider label="k₁" value={k1} min={-4} max={4} step={0.5} lang={lang} display={nf(k1, lang)} onChange={setK1} />
        <Slider label="b₁" value={b1} min={-5} max={5} step={0.5} lang={lang} display={nf(b1, lang)} onChange={setB1} />
      </div>
      <div className="art-row">
        <Slider label="k₂" value={k2} min={-4} max={4} step={0.5} lang={lang} display={nf(k2, lang)} onChange={setK2} />
        <Slider label="b₂" value={b2} min={-5} max={5} step={0.5} lang={lang} display={nf(b2, lang)} onChange={setB2} />
      </div>
    </ArtFrame>
  );
}

/* ---------------- parabola ---------------- */

function QuadPlot({ spec, lang }: SimProps) {
  const general = spec.opts.form === "general";
  const [a, setA] = useState(clamp(num(spec.opts.a, 1), -3, 3) || 1);
  const [m, setM] = useState(clamp(num(spec.opts.m, 1), -5, 5));
  const [n, setN] = useState(clamp(num(spec.opts.n, -4), -6, 6));
  const [bq, setBq] = useState(clamp(num(spec.opts.b, -2), -8, 8));
  const [cq, setCq] = useState(clamp(num(spec.opts.c, -3), -8, 8));
  const [sign, setSign] = useState(spec.opts.show === "sign");
  const A = a || 0.5;
  const B = general ? bq : -2 * A * m, C = general ? cq : A * m * m + n;
  const vx = -B / (2 * A), vy = C - (B * B) / (4 * A);
  const f = (x: number) => A * x * x + B * x + C;
  const D = B * B - 4 * A * C;
  const rts = D < -1e-9 ? [] : D < 1e-9 ? [vx] : [(-B - Math.sqrt(D)) / (2 * A), (-B + Math.sqrt(D)) / (2 * A)].sort((p, q) => p - q);
  const vertexForm = `y = ${Math.abs(A - 1) < 1e-9 ? "" : Math.abs(A + 1) < 1e-9 ? "−" : nf(A, lang)}${Math.abs(vx) < 1e-9 ? "x²" : `(${minus(vx, lang)})²`}${plusN(vy, lang)}`;
  const generalForm = `y = ${poly([[A, "x²"], [B, "x"], [C, ""]], lang)}`;
  // intervals of constant sign, for the inequality view
  const cuts = [WIN.x0, ...rts.filter((r) => r > WIN.x0 && r < WIN.x1), WIN.x1];
  return (
    <ArtFrame kind="experiment" title={L(W.quad, lang)} body={spec.body || L(W.quadHint, lang)}>
      <Plane win={WIN} label={generalForm}>
        {(X, Y) => (
          <g>
            {sign
              ? cuts.slice(1).map((c, i) => {
                  const mid = (cuts[i] + c) / 2;
                  const pos = f(mid) > 0;
                  return <rect key={i} x={X(cuts[i])} width={X(c) - X(cuts[i])} y={Y(0) - 5} height={10} rx="3" fill={pos ? COLORS.c : COLORS.d} opacity="0.55" />;
                })
              : null}
            <line x1={X(vx)} x2={X(vx)} y1={0} y2={PH} stroke={COLORS.b} strokeDasharray="5 4" />
            <path d={curve(f, WIN, X, Y)} fill="none" stroke={COLORS.a} strokeWidth="2.8" />
            <Dot x={X(vx)} y={Y(vy)} color={COLORS.b} />
            <Tag x={X(vx) + 7} y={Y(vy) + (A > 0 ? 14 : -8)} color={COLORS.b}>{pt(vx, vy, lang)}</Tag>
            {rts.map((r, i) => <Dot key={i} x={X(r)} y={Y(0)} color={COLORS.d} />)}
            <Dot x={X(0)} y={Y(C)} color={COLORS.c} />
          </g>
        )}
      </Plane>
      <Sum parts={[[general ? generalForm : vertexForm, COLORS.a]]} />
      <Sum parts={[[general ? vertexForm : generalForm, "#475569"]]} />
      <Readouts
        items={[
          [L(W.vertex, lang), pt(vx, vy, lang), COLORS.b],
          [L(W.roots, lang), rts.length ? rts.map((r, i) => `x${rts.length > 1 ? (i ? "₂" : "₁") : ""} = ${nf(r, lang)}`).join(", ") : L(W.none, lang), COLORS.d],
          [`${L(W.disc, lang)} D`, nf(D, lang), "#475569"],
        ]}
      />
      {sign ? <Note>{L(W.signNote, lang)}</Note> : null}
      <Slider label="a" value={a} min={-3} max={3} step={0.5} lang={lang} display={nf(A, lang)} onChange={(v) => setA(v || (a > 0 ? -0.5 : 0.5))} />
      {general ? (
        <>
          <Slider label="b" value={bq} min={-8} max={8} step={1} lang={lang} display={nf(bq, lang)} onChange={setBq} />
          <Slider label="c" value={cq} min={-8} max={8} step={1} lang={lang} display={nf(cq, lang)} onChange={setCq} />
        </>
      ) : (
        <>
          <Slider label="m" value={m} min={-5} max={5} step={0.5} lang={lang} display={nf(m, lang)} onChange={setM} />
          <Slider label="n" value={n} min={-6} max={6} step={0.5} lang={lang} display={nf(n, lang)} onChange={setN} />
        </>
      )}
      <div className="art-chips"><Toggle on={sign} label={L(W.signs, lang)} onChange={setSign} /></div>
    </ArtFrame>
  );
}

/* ---------------- y = k·xⁿ ---------------- */

type Pow = "1" | "2" | "3" | "-1" | "-2" | "0.5";
const POWS: Pow[] = ["1", "2", "3", "-1", "-2", "0.5"];
const POW_TEXT: Record<Pow, string> = { "1": "x", "2": "x²", "3": "x³", "-1": "1/x", "-2": "1/x²", "0.5": "√x" };

function PowerPlot({ spec, lang }: SimProps) {
  const [p, setP] = useState<Pow>(POWS.find((v) => v === spec.opts.n) ?? "2");
  const [k, setK] = useState(clamp(num(spec.opts.k, 1), -3, 3) || 1);
  const n = Number(p);
  const f = (x: number) => (n === 0.5 ? (x < 0 ? NaN : k * Math.sqrt(x)) : x === 0 && n < 0 ? NaN : k * x ** n);
  const kk = Math.abs(k - 1) < 1e-9 ? "" : Math.abs(k + 1) < 1e-9 ? "−" : nf(k, lang);
  const formula = n < 0 ? `y = ${Math.abs(k - 1) < 1e-9 ? "1" : nf(k, lang)}/${n === -1 ? "x" : "x²"}` : `y = ${kk}${POW_TEXT[p]}`;
  const domain = n < 0 ? "x ≠ 0" : n === 0.5 ? "x ≥ 0" : L(W.all, lang);
  const pos = k > 0;
  const range = n === 1 || n === 3 ? L(W.all, lang) : n === -1 ? "y ≠ 0" : n === -2 ? (pos ? "y > 0" : "y < 0") : pos ? "y ≥ 0" : "y ≤ 0";
  const par = n === 2 || n === -2 ? W.even : n === 0.5 ? W.neither : W.odd;
  return (
    <ArtFrame kind="look" title={L(W.power, lang)} body={spec.body || L(W.powerHint, lang)}>
      <Plane win={WIN} label={formula}>
        {(X, Y) => (
          <g>
            <path d={curve(f, WIN, X, Y)} fill="none" stroke={COLORS.a} strokeWidth="2.8" />
            {n !== 0.5 ? <Dot x={X(-1)} y={Y(f(-1))} color={COLORS.b} /> : null}
            <Dot x={X(1)} y={Y(f(1))} color={COLORS.b} />
            <Tag x={X(1) + 7} y={Y(f(1)) - 6} color={COLORS.b}>{pt(1, f(1), lang)}</Tag>
          </g>
        )}
      </Plane>
      <Sum parts={[[formula, COLORS.a]]} />
      <Readouts items={[[L(W.domain, lang), domain, COLORS.a], [L(W.range, lang), range, COLORS.c], [L(W.parity, lang), L(par, lang), COLORS.b]]} />
      <Choice value={p} options={POWS.map((v) => [v, POW_TEXT[v]])} onChange={setP} />
      <Slider label="k" value={k} min={-3} max={3} step={0.5} lang={lang} display={nf(k, lang)} onChange={(v) => setK(v || (k > 0 ? -0.5 : 0.5))} />
    </ArtFrame>
  );
}

/* ---------------- y = a·f(x − m) + n ---------------- */

type Base = "sq" | "abs" | "sqrt" | "cube" | "inv";
const BASES: Base[] = ["sq", "abs", "sqrt", "cube", "inv"];
const BASE_F: Record<Base, Fn> = { sq: (x) => x * x, abs: Math.abs, sqrt: (x) => (x < 0 ? NaN : Math.sqrt(x)), cube: (x) => x ** 3, inv: (x) => (x === 0 ? NaN : 1 / x) };
const BASE_TEXT: Record<Base, string> = { sq: "x²", abs: "|x|", sqrt: "√x", cube: "x³", inv: "1/x" };

function ShiftPlot({ spec, lang }: SimProps) {
  const [base, setBase] = useState<Base>(BASES.find((v) => v === spec.opts.base) ?? "sq");
  const [m, setM] = useState(clamp(num(spec.opts.m, 2), -5, 5));
  const [n, setN] = useState(clamp(num(spec.opts.n, 1), -5, 5));
  const [a, setA] = useState(clamp(num(spec.opts.a, 1), -2, 2) || 1);
  const g = BASE_F[base];
  const f = (x: number) => a * g(x - m) + n;
  const inner = minus(m, lang);
  const core = base === "sq" ? (m ? `(${inner})²` : "x²") : base === "cube" ? (m ? `(${inner})³` : "x³") : base === "abs" ? `|${inner}|` : base === "sqrt" ? (m ? `√(${inner})` : "√x") : m ? `1/(${inner})` : "1/x";
  const lead = Math.abs(a - 1) < 1e-9 ? "" : Math.abs(a + 1) < 1e-9 ? "−" : `${nf(a, lang)}·`;
  const formula = `y = ${lead}${core}${plusN(n, lang)}`;
  // the point that the base graph's "anchor" (0; 0) moves to, or (1; 1) for 1/x
  const ax = base === "inv" ? 1 : 0, ay = base === "inv" ? 1 : 0;
  return (
    <ArtFrame kind="experiment" title={L(W.shift, lang)} body={spec.body || L(W.shiftHint, lang)}>
      <Plane win={WIN} label={formula}>
        {(X, Y) => (
          <g>
            <path d={curve(g, WIN, X, Y)} fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 4" />
            {base === "inv" ? <path d={`M${X(m)} 0V${PH}M0 ${Y(n)}H${PW}`} stroke={COLORS.b} strokeDasharray="3 3" /> : null}
            <path d={curve(f, WIN, X, Y)} fill="none" stroke={COLORS.a} strokeWidth="2.8" />
            <path d={`M${X(ax)} ${Y(ay)}L${X(ax + m)} ${Y(a * ay + n)}`} stroke={COLORS.d} strokeWidth="1.6" strokeDasharray="2 3" />
            <Dot x={X(ax)} y={Y(ay)} color="#94a3b8" />
            <Dot x={X(ax + m)} y={Y(a * ay + n)} color={COLORS.d} />
          </g>
        )}
      </Plane>
      <Sum parts={[[formula, COLORS.a]]} />
      <Readouts items={[[L(W.base, lang), `y = ${BASE_TEXT[base]}`, "#64748b"], ["m", nf(m, lang), COLORS.d], ["n", nf(n, lang), COLORS.d], ["a", nf(a, lang), COLORS.a]]} />
      <Choice value={base} options={BASES.map((v) => [v, BASE_TEXT[v]])} onChange={setBase} />
      <Slider label="m" value={m} min={-5} max={5} step={0.5} lang={lang} display={nf(m, lang)} onChange={setM} />
      <Slider label="n" value={n} min={-5} max={5} step={0.5} lang={lang} display={nf(n, lang)} onChange={setN} />
      <Slider label="a" value={a} min={-2} max={2} step={0.5} lang={lang} display={nf(a, lang)} onChange={(v) => setA(v || (a > 0 ? -0.5 : 0.5))} />
    </ArtFrame>
  );
}

/* ---------------- trig ---------------- */

type Trig = "sin" | "cos" | "tan";

function TrigPlot({ spec, lang }: SimProps) {
  const [fn, setFn] = useState<Trig>((["sin", "cos", "tan"] as Trig[]).find((v) => v === spec.opts.fn) ?? "sin");
  const [a, setA] = useState(clamp(num(spec.opts.a, 1), -3, 3) || 1);
  const [k, setK] = useState(clamp(num(spec.opts.k, 1), 0.5, 3));
  const [d, setD] = useState(clamp(num(spec.opts.d, 0), -2, 2));
  const win: Win = { x0: -2 * Math.PI, x1: 2 * Math.PI, y0: -4.5, y1: 4.5 };
  const base = fn === "sin" ? Math.sin : fn === "cos" ? Math.cos : Math.tan;
  const f = (x: number) => {
    if (fn === "tan" && Math.abs(Math.cos(k * x)) < 1e-3) return NaN;
    return a * base(k * x) + d;
  };
  const ticks: Array<[number, string]> = [-2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2].map((p) => [p * Math.PI, piText(p)]);
  const lead = Math.abs(a - 1) < 1e-9 ? "" : Math.abs(a + 1) < 1e-9 ? "−" : nf(a, lang);
  const arg = Math.abs(k - 1) < 1e-9 ? "x" : `${nf(k, lang)}x`;
  const formula = `y = ${lead}${lead && lead !== "−" ? " " : ""}${trigName(fn, lang)} ${arg}${plusN(d, lang)}`;
  const period = piText((fn === "tan" ? 1 : 2) / k);
  const range = fn === "tan" ? L(W.all, lang) : `[${nf(d - Math.abs(a), lang)}; ${nf(d + Math.abs(a), lang)}]`;
  return (
    <ArtFrame kind="experiment" title={L(W.trig, lang)} body={spec.body || L(W.trigHint, lang)}>
      <Plane win={win} label={formula} xTicks={ticks}>
        {(X, Y) => (
          <g>
            <path d={curve(fn === "tan" ? (x) => (Math.abs(Math.cos(x)) < 1e-3 ? NaN : Math.tan(x)) : base, win, X, Y)} fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeDasharray="5 4" />
            <path d={curve(f, win, X, Y)} fill="none" stroke={COLORS.a} strokeWidth="2.8" />
            {fn !== "tan" ? <path d={`M0 ${Y(d + Math.abs(a))}H${PW}M0 ${Y(d - Math.abs(a))}H${PW}`} stroke={COLORS.c} strokeDasharray="3 4" /> : null}
            {fn !== "tan" ? <path d={`M${X(0)} ${Y(-4.1)}H${X((2 * Math.PI) / k)}`} stroke={COLORS.b} strokeWidth="3" /> : null}
          </g>
        )}
      </Plane>
      <Sum parts={[[formula, COLORS.a]]} />
      <Readouts items={[[L(W.period, lang), period, COLORS.b], [L(W.range, lang), range, COLORS.c]]} />
      <Choice value={fn} options={(["sin", "cos", "tan"] as Trig[]).map((v) => [v, `y = ${trigName(v, lang)} x`])} onChange={setFn} />
      <Slider label="a" value={a} min={-3} max={3} step={0.5} lang={lang} display={nf(a, lang)} onChange={(v) => setA(v || (a > 0 ? -0.5 : 0.5))} />
      <Slider label="k" value={k} min={0.5} max={3} step={0.5} lang={lang} display={nf(k, lang)} onChange={setK} />
      <Slider label="d" value={d} min={-2} max={2} step={0.5} lang={lang} display={nf(d, lang)} onChange={setD} />
    </ArtFrame>
  );
}

/* ---------------- aˣ and logₐx ---------------- */

function ExpPlot({ spec, lang, logFirst }: SimProps & { logFirst: boolean }) {
  const [a, setA] = useState(clamp(num(spec.opts.a, 2), 0.2, 4));
  const [other, setOther] = useState(spec.opts.show === "log" || spec.opts.show === "exp");
  const win: Win = { x0: -6, x1: 6, y0: -3, y1: 6 };
  const ex = (x: number) => a ** x;
  const lg = (x: number) => (x <= 0 || Math.abs(a - 1) < 1e-9 ? NaN : Math.log(x) / Math.log(a));
  const showExp = !logFirst || other, showLog = logFirst || other;
  const aa = nf(a, lang, 1);
  const eF = `y = ${aa}ˣ`, lF = `y = log${sub(aa)} x`;
  const readouts: Array<[string, string, string]> = [];
  if (showExp) readouts.push([`${aa}⁰`, "1", COLORS.a], [`${aa}¹`, aa, COLORS.a]);
  if (showLog && Math.abs(a - 1) > 1e-9) readouts.push([`log${sub(aa)} 1`, "0", COLORS.b], [`log${sub(aa)} ${aa}`, "1", COLORS.b]);
  return (
    <ArtFrame kind="experiment" title={L(W.exp, lang)} body={spec.body || L(W.expHint, lang)}>
      <Plane win={win} label={logFirst ? lF : eF}>
        {(X, Y) => (
          <g>
            {showExp && showLog ? <path d={curve((x) => x, win, X, Y)} fill="none" stroke="#94a3b8" strokeDasharray="5 4" /> : null}
            {showExp ? <path d={curve(ex, win, X, Y)} fill="none" stroke={COLORS.a} strokeWidth="2.8" /> : null}
            {showLog ? <path d={curve(lg, win, X, Y, 0.0005, win.x1)} fill="none" stroke={COLORS.b} strokeWidth="2.8" /> : null}
            {showExp ? <Dot x={X(0)} y={Y(1)} color={COLORS.a} /> : null}
            {showExp ? <Dot x={X(1)} y={Y(a)} color={COLORS.a} /> : null}
            {showLog && Math.abs(a - 1) > 1e-9 ? <Dot x={X(1)} y={Y(0)} color={COLORS.b} /> : null}
            {showLog && Math.abs(a - 1) > 1e-9 && a <= 6 ? <Dot x={X(a)} y={Y(1)} color={COLORS.b} /> : null}
          </g>
        )}
      </Plane>
      {showExp ? <Sum parts={[[eF, COLORS.a]]} /> : null}
      {showLog && Math.abs(a - 1) > 1e-9 ? <Sum parts={[[lF, COLORS.b]]} /> : null}
      <Readouts items={readouts} />
      <Note>{L(Math.abs(a - 1) < 1e-9 ? W.constant : a > 1 ? W.growing : W.shrinking, lang)}</Note>
      <Slider label="a" value={a} min={0.2} max={4} step={0.1} lang={lang} display={aa} onChange={setA} />
      <div className="art-chips"><Toggle on={other} label={L(logFirst ? W.showExp : W.showLog, lang)} onChange={setOther} /></div>
    </ArtFrame>
  );
}

/** Sub- and superscript digits for log bases and integral limits: 2 → ₂, 0,5 → ₀,₅; π stays as it is. */
const sub = (s: string) => s.replace(/[0-9]/g, (c) => "₀₁₂₃₄₅₆₇₈₉"[Number(c)]).replace("−", "₋");
const sup = (s: string) => s.replace(/[0-9]/g, (c) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(c)]).replace("−", "⁻");

/* ---------------- tangent and derivative ---------------- */

type TF = "sq" | "cubic" | "sin" | "exp";
const TFS: Record<TF, { f: Fn; d: Fn; text: string; dText: string; win: Win; x: [number, number] }> = {
  sq: { f: (x) => x * x, d: (x) => 2 * x, text: "x²", dText: "2x", win: { x0: -4, x1: 4, y0: -2, y1: 8 }, x: [-3, 3] },
  cubic: { f: (x) => x ** 3 - 3 * x, d: (x) => 3 * x * x - 3, text: "x³ − 3x", dText: "3x² − 3", win: { x0: -3, x1: 3, y0: -4.5, y1: 4.5 }, x: [-2.5, 2.5] },
  sin: { f: Math.sin, d: Math.cos, text: "sin x", dText: "cos x", win: { x0: -Math.PI * 1.5, x1: Math.PI * 1.5, y0: -2.2, y1: 2.2 }, x: [-4, 4] },
  exp: { f: Math.exp, d: Math.exp, text: "eˣ", dText: "eˣ", win: { x0: -4, x1: 2.5, y0: -1, y1: 6 }, x: [-3, 1.5] },
};

function TangentPlot({ spec, lang }: SimProps) {
  const [fn, setFn] = useState<TF>((Object.keys(TFS) as TF[]).find((v) => v === spec.opts.fn) ?? "sq");
  const F = TFS[fn];
  const [x0, setX0] = useState(clamp(num(spec.opts.x, 1), F.x[0], F.x[1]));
  const [deriv, setDeriv] = useState(spec.opts.show === "deriv");
  const xx = clamp(x0, F.x[0], F.x[1]);
  const y0 = F.f(xx), k = F.d(xx), b = y0 - k * xx;
  const line = (x: number) => k * x + b;
  const tanText = `y = ${poly([[Number(k.toFixed(2)), "x"], [Number(b.toFixed(2)), ""]], lang)}`;
  const flat = Math.abs(k) < 0.05;
  return (
    <ArtFrame kind="experiment" title={L(W.tangent, lang)} body={spec.body || L(W.tangentHint, lang)}>
      <Plane win={F.win} label={`f(x) = ${F.text}`}>
        {(X, Y) => (
          <g>
            {deriv ? <path d={curve(F.d, F.win, X, Y)} fill="none" stroke={COLORS.c} strokeWidth="2.2" strokeDasharray="6 4" /> : null}
            <path d={curve(F.f, F.win, X, Y)} fill="none" stroke={COLORS.a} strokeWidth="2.8" />
            <path d={curve(line, F.win, X, Y)} fill="none" stroke={COLORS.d} strokeWidth="2" />
            {deriv ? <Dot x={X(xx)} y={Y(k)} color={COLORS.c} /> : null}
            {deriv ? <line x1={X(xx)} x2={X(xx)} y1={Y(y0)} y2={Y(k)} stroke="#94a3b8" strokeDasharray="2 3" /> : null}
            <Dot x={X(xx)} y={Y(y0)} color={COLORS.d} />
          </g>
        )}
      </Plane>
      <Sum parts={[[`f(x) = ${F.text}`, COLORS.a], "   ", [`f′(x) = ${F.dText}`, COLORS.c]]} />
      <Readouts items={[[L(W.value, lang), nf(y0, lang), COLORS.a], [L(W.deriv, lang), nf(k, lang), COLORS.d], [L(W.tline, lang), tanText, COLORS.d]]} />
      <Note tone={flat ? "good" : undefined}>{L(flat ? W.flatTan : k > 0 ? W.up : W.down, lang)}</Note>
      <Slider label={L(W.point, lang)} value={xx} min={F.x[0]} max={F.x[1]} step={0.1} lang={lang} display={nf(xx, lang, 1)} onChange={setX0} />
      <Choice value={fn} options={(Object.keys(TFS) as TF[]).map((v) => [v, TFS[v].text])} onChange={(v) => { setFn(v); setX0(clamp(x0, TFS[v].x[0], TFS[v].x[1])); }} />
      <div className="art-chips"><Toggle on={deriv} label={L(W.showDeriv, lang)} onChange={setDeriv} /></div>
    </ArtFrame>
  );
}

/* ---------------- area under a graph ---------------- */

type AF = "sq" | "lin" | "sqrt" | "sin";
const AFS: Record<AF, { f: Fn; F: Fn; text: string; win: Win; lim: [number, number] }> = {
  sq: { f: (x) => x * x, F: (x) => x ** 3 / 3, text: "x²", win: { x0: -0.6, x1: 3.6, y0: -0.8, y1: 9.8 }, lim: [0, 3] },
  lin: { f: (x) => 0.5 * x + 1, F: (x) => 0.25 * x * x + x, text: "0.5x + 1", win: { x0: -0.6, x1: 6.4, y0: -0.6, y1: 4.6 }, lim: [0, 6] },
  sqrt: { f: (x) => (x < 0 ? NaN : Math.sqrt(x)), F: (x) => (2 / 3) * x ** 1.5, text: "√x", win: { x0: -0.6, x1: 9.4, y0: -0.5, y1: 3.5 }, lim: [0, 9] },
  sin: { f: Math.sin, F: (x) => -Math.cos(x), text: "sin x", win: { x0: -0.4, x1: Math.PI + 0.4, y0: -0.3, y1: 1.4 }, lim: [0, Math.PI] },
};

function AreaPlot({ spec, lang }: SimProps) {
  const [fn, setFn] = useState<AF>((Object.keys(AFS) as AF[]).find((v) => v === spec.opts.fn) ?? "sq");
  const A = AFS[fn];
  const [lo, setLo] = useState(clamp(num(spec.opts.a, A.lim[0]), A.lim[0], A.lim[1]));
  const [hi, setHi] = useState(clamp(num(spec.opts.b, 2), A.lim[0], A.lim[1]));
  const [n, setN] = useState(clamp(num(spec.opts.n, 4), 1, 40));
  const a = Math.min(lo, hi), b = Math.max(lo, hi);
  const w = (b - a) / n;
  const mids = Array.from({ length: n }, (_, i) => a + (i + 0.5) * w);
  const sum = mids.reduce((s, x) => s + A.f(x) * w, 0);
  const exact = A.F(b) - A.F(a);
  const text = lang === "en" ? A.text : A.text.replace(".", ",");
  const lim = (v: number) => (fn === "sin" ? piText(v / Math.PI) : nf(v, lang, 1));
  return (
    <ArtFrame kind="experiment" title={L(W.area, lang)} body={spec.body || L(W.areaHint, lang)}>
      <Plane win={A.win} label={`y = ${text}`}>
        {(X, Y) => (
          <g>
            <path d={`M${X(a)} ${Y(0)}${curve(A.f, A.win, X, Y, a, b).replace(/^M/, "L")}L${X(b)} ${Y(0)}Z`} fill={COLORS.c} opacity="0.18" />
            {mids.map((x, i) => <rect key={i} x={X(a + i * w)} width={X(a + (i + 1) * w) - X(a + i * w)} y={Math.min(Y(A.f(x)), Y(0))} height={Math.abs(Y(A.f(x)) - Y(0))} fill={COLORS.b} fillOpacity="0.35" stroke={COLORS.b} strokeWidth="1" />)}
            <path d={curve(A.f, A.win, X, Y)} fill="none" stroke={COLORS.a} strokeWidth="2.8" />
          </g>
        )}
      </Plane>
      <Sum parts={[[`∫${sub(lim(a))}${sup(lim(b))} ${text} dx`, COLORS.a]]} />
      <Readouts items={[[L(W.rectSum, lang), nf(sum, lang, 3), COLORS.b], [L(W.exact, lang), nf(exact, lang, 3), COLORS.c]]} />
      <div className="art-row"><Counter label={L(W.rects, lang)} value={n} min={1} max={40} onChange={setN} lang={lang} color={COLORS.b} /></div>
      <Slider label={L(W.from, lang)} value={lo} min={A.lim[0]} max={A.lim[1]} step={fn === "sin" ? Math.PI / 12 : 0.5} lang={lang} display={lim(lo)} onChange={setLo} />
      <Slider label={L(W.to, lang)} value={hi} min={A.lim[0]} max={A.lim[1]} step={fn === "sin" ? Math.PI / 12 : 0.5} lang={lang} display={lim(hi)} onChange={setHi} />
      <Choice value={fn} options={(Object.keys(AFS) as AF[]).map((v) => [v, `y = ${lang === "en" ? AFS[v].text : AFS[v].text.replace(".", ",")}`])} onChange={(v) => { setFn(v); setLo(AFS[v].lim[0]); setHi(v === "sin" ? Math.PI / 2 : Math.round(AFS[v].lim[1] * 1.34) / 2); }} />
    </ArtFrame>
  );
}

/* ---------------- complex numbers ---------------- */

function Arr({ x, y, color, dash, X, Y }: { x: number; y: number; color: string; dash?: string; X: Fn; Y: Fn }) {
  const ang = Math.atan2(Y(y) - Y(0), X(x) - X(0));
  const hx = X(x) - 9 * Math.cos(ang), hy = Y(y) - 9 * Math.sin(ang);
  return (
    <g>
      <line x1={X(0)} y1={Y(0)} x2={hx} y2={hy} stroke={color} strokeWidth="2.6" strokeDasharray={dash} />
      {Math.hypot(x, y) > 0.3 ? <path d={`M${X(x)} ${Y(y)}L${hx - 5 * Math.sin(ang)} ${hy + 5 * Math.cos(ang)}L${hx + 5 * Math.sin(ang)} ${hy - 5 * Math.cos(ang)}Z`} fill={color} /> : null}
    </g>
  );
}

function ComplexPlot({ spec, lang }: SimProps) {
  const [a, setA] = useState(clamp(num(spec.opts.a, 3), -6, 6));
  const [b, setB] = useState(clamp(num(spec.opts.b, 2), -5, 5));
  const [rot, setRot] = useState(false);
  const win: Win = { x0: -8, x1: 8, y0: -6, y1: 6 };
  const r = Math.hypot(a, b), arg = (Math.atan2(b, a) * 180) / Math.PI;
  const z = (re: number, im: number) => (Math.abs(im) < 1e-9 ? nf(re, lang) : `${Math.abs(re) < 1e-9 ? "" : nf(re, lang)}${Math.abs(re) < 1e-9 ? (im < 0 ? "−" : "") : im < 0 ? " − " : " + "}${Math.abs(Math.abs(im) - 1) < 1e-9 ? "" : nf(Math.abs(im), lang)}i`);
  return (
    <ArtFrame kind="experiment" title={L(W.complex, lang)} body={spec.body || L(W.complexHint, lang)}>
      <Plane win={win} label={`z = ${z(a, b)}`}>
        {(X, Y) => (
          <g>
            <text x={PW - 6} y={Y(0) + 14} textAnchor="end" className="sim-axis is-name">Re</text>
            <text x={X(0) + 6} y={20} className="sim-axis is-name">Im</text>
            <path d={`M${X(a)} ${Y(0)}V${Y(b)}`} stroke="#94a3b8" strokeDasharray="3 3" />
            <Arr x={a} y={-b} color="#94a3b8" dash="5 4" X={X} Y={Y} />
            {rot ? <Arr x={-b} y={a} color={COLORS.c} X={X} Y={Y} /> : null}
            <Arr x={a} y={b} color={COLORS.a} X={X} Y={Y} />
            <Tag x={X(a) + 6} y={Y(b) - 6} color={COLORS.a}>{`z = ${z(a, b)}`}</Tag>
            <Tag x={X(a) + 6} y={Y(-b) + 12} color="#64748b">{`z̄ = ${z(a, -b)}`}</Tag>
            {rot ? <Tag x={X(-b) + 6} y={Y(a) - 6} color={COLORS.c}>{`iz = ${z(-b, a)}`}</Tag> : null}
          </g>
        )}
      </Plane>
      <Readouts items={[[L(W.modulus, lang), `√(${nf(a, lang)}² + ${nf(b, lang)}²) = ${nf(r, lang)}`, COLORS.a], [L(W.argument, lang), r < 1e-9 ? "—" : `${nf(arg, lang, 1)}°`, COLORS.b], [L(W.conj, lang), z(a, -b), "#64748b"]]} />
      <Slider label="a" value={a} min={-6} max={6} step={1} lang={lang} display={nf(a, lang)} onChange={setA} />
      <Slider label="b" value={b} min={-5} max={5} step={1} lang={lang} display={nf(b, lang)} onChange={setB} />
      <div className="art-chips"><Toggle on={rot} label={L(W.timesI, lang)} onChange={setRot} /></div>
    </ArtFrame>
  );
}
