"use client";

import { useState } from "react";
import { RotateCw, Shuffle } from "lucide-react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Choice, clamp, Note, Readouts, Stage } from "../kit";
import { L, t } from "../labels";
import { COLORS, Counter, divide, num, NumPick, Sum, times } from "../math-kit";

/**
 * Multiplication and division pictures:
 *   array r=3 c=4            rows of dots: r × c, turn it round to see c × r
 *   array mode=area a=23 b=4  area model: split a (and b) into tens and ones, add the partial products
 *   array mode=share n=14 k=3 deal objects into k groups: quotient and remainder
 *   array mode=table [n=7]   the multiplication table with patterns
 */
const W = {
  grid: t("Build it: rows and columns", "Կառուցի՛ր․ շարքեր և սյուներ", "Построй: ряды и столбцы"),
  gridHint: t("Multiplying is adding equal rows. Turn the picture: the number of dots does not change, so a × b = b × a.", "Բազմապատկելը հավասար շարքեր գումարելն է։ Պտտի՛ր նկարը․ կետերի քանակը չի փոխվում, ուրեմն a × b = b × a։", "Умножение — это сложение одинаковых рядов. Поверни картинку: точек столько же, значит a × b = b × a."),
  area: t("Look closely: the area model", "Ուշադիր նայի՛ր․ մակերեսի մոդել", "Рассмотри: модель площади"),
  areaHint: t("Split the numbers into tens and ones. Each small rectangle is an easy multiplication; their sum is the answer.", "Թվերը բաժանի՛ր տասնյակների և միավորների։ Յուրաքանչյուր փոքր ուղղանկյուն հեշտ բազմապատկում է, դրանց գումարը պատասխանն է։", "Разбей числа на десятки и единицы. Каждый маленький прямоугольник — простое умножение, их сумма — ответ."),
  share: t("Experiment: sharing equally", "Փորձ․ հավասար բաժանում", "Опыт: делим поровну"),
  shareHint: t("Deal the objects into the groups one by one. What cannot be shared is the remainder; it is always smaller than the number of groups.", "Առարկաները մեկ առ մեկ բաժանի՛ր խմբերին։ Այն, ինչ չի բաժանվում, մնացորդն է․ այն միշտ փոքր է խմբերի թվից։", "Раздавай предметы в группы по одному. То, что не делится, — остаток; он всегда меньше числа групп."),
  table: t("Look closely: the multiplication table", "Ուշադիր նայի՛ր․ բազմապատկման աղյուսակ", "Рассмотри: таблица умножения"),
  tableHint: t("Tap a cell: its row and column light up. Choose a number to see all its multiples, or look at the squares on the diagonal.", "Սեղմի՛ր որևէ վանդակի․ լուսավորվում են նրա տողն ու սյունը։ Ընտրի՛ր թիվ՝ տեսնելու նրա բոլոր բազմապատիկները, կամ նայի՛ր անկյունագծի քառակուսիներին։", "Нажми на клетку: подсветятся её строка и столбец. Выбери число, чтобы увидеть все его кратные, или посмотри на квадраты на диагонали."),
  rows: t("Rows", "Շարքեր", "Ряды"),
  cols: t("In a row", "Մեկ շարքում", "В ряду"),
  turn: t("Turn round", "Պտտել", "Повернуть"),
  total: t("Total", "Ընդամենը", "Всего"),
  objects: t("Objects", "Առարկաներ", "Предметы"),
  groups: t("Groups", "Խմբեր", "Группы"),
  each: t("In each group", "Յուրաքանչյուր խմբում", "В каждой группе"),
  rest: t("Remainder", "Մնացորդ", "Остаток"),
  deal: t("Deal one round", "Բաժանել մեկ շրջան", "Раздать по одному"),
  dealAll: t("Deal all", "Բաժանել բոլորը", "Раздать все"),
  again: t("Start again", "Նորից", "Сначала"),
  noRest: t("Shared equally, no remainder.", "Բաժանվեց հավասարապես, առանց մնացորդի։", "Разделилось поровну, без остатка."),
  hasRest: t("{r} left over: not enough for another round.", "Մնաց {r}․ բավական չէ ևս մեկ շրջանի համար։", "Осталось {r}: на следующий круг не хватает."),
  first: t("First number", "Առաջին թիվը", "Первое число"),
  second: t("Second number", "Երկրորդ թիվը", "Второе число"),
  multiples: t("Show the multiples of a number", "Ցույց տալ թվի բազմապատիկները", "Показать кратные числа"),
  squares: t("Squares", "Քառակուսիներ", "Квадраты"),
  none: t("Off", "Անջատել", "Выкл."),
  addTable: t("Look closely: the addition table", "Ուշադիր նայի՛ր․ գումարման աղյուսակ", "Рассмотри: таблица сложения"),
  addTableHint: t("Tap a cell to see its sum. Show the doubles, or all the cells with the same sum: they line up on a diagonal.", "Սեղմի՛ր վանդակին՝ գումարը տեսնելու համար։ Ցույց տուր կրկնապատիկները կամ նույն գումարով բոլոր վանդակները․ նրանք շարվում են անկյունագծով։", "Нажми на клетку, чтобы увидеть сумму. Покажи удвоения или все клетки с той же суммой: они выстраиваются по диагонали."),
  doubles: t("Doubles", "Կրկնապատիկներ", "Удвоения"),
  sameSum: t("Same sum", "Նույն գումարը", "Та же сумма"),
};

export default function ArrayWidget({ spec, lang }: SimProps) {
  switch (spec.opts.mode) {
    case "area": return <Area spec={spec} lang={lang} />;
    case "share": return <Share spec={spec} lang={lang} />;
    case "table": return <Table spec={spec} lang={lang} />;
    default: return <Grid spec={spec} lang={lang} />;
  }
}

function Grid({ spec, lang }: SimProps) {
  const [r, setR] = useState(clamp(Number(spec.opts.r ?? 3), 1, 10));
  const [c, setC] = useState(clamp(Number(spec.opts.c ?? 4), 1, 10));
  const gap = Math.min(30, 300 / Math.max(r, c, 1));
  const w = 340, h = Math.max(r, c) * gap + 24;
  const x0 = (w - c * gap) / 2 + gap / 2, y0 = (h - r * gap) / 2 + gap / 2;
  return (
    <ArtFrame kind="steps" title={L(W.grid, lang)} body={spec.body || L(W.gridHint, lang)}>
      <Stage w={w} h={h} label={`${r} ${times(lang)} ${c}`}>
        {Array.from({ length: r }, (_, i) => (
          <g key={i} className="sim-anim">
            <rect x={x0 - gap / 2 + 2} y={y0 + i * gap - gap / 2 + 2} width={c * gap - 4} height={gap - 4} rx={gap / 2} fill={i % 2 ? "#fef3c7" : "#e0e7ff"} />
            {Array.from({ length: c }, (_, j) => <circle key={j} cx={x0 + j * gap} cy={y0 + i * gap} r={gap * 0.3} fill={i % 2 ? COLORS.b : COLORS.a} />)}
          </g>
        ))}
      </Stage>
      <Sum parts={[Array.from({ length: r }, () => String(c)).join(" + "), " = ", [`${r} ${times(lang)} ${c}`, COLORS.a], " = ", [String(r * c), COLORS.d]]} />
      <div className="art-row">
        <Counter label={L(W.rows, lang)} value={r} min={1} max={10} onChange={setR} lang={lang} color={COLORS.a} />
        <Counter label={L(W.cols, lang)} value={c} min={1} max={10} onChange={setC} lang={lang} color={COLORS.b} />
        <button type="button" className="art-btn" onClick={() => { setR(c); setC(r); }}>
          <RotateCw className="size-4" aria-hidden="true" />
          {L(W.turn, lang)}
        </button>
      </div>
    </ArtFrame>
  );
}

const split = (n: number) => {
  const s = String(n);
  return s.split("").map((d, i) => Number(d) * 10 ** (s.length - 1 - i)).filter((v) => v > 0);
};

function Area({ spec, lang }: SimProps) {
  const [a, setA] = useState(clamp(Number(spec.opts.a ?? 23), 1, 999));
  const [b, setB] = useState(clamp(Number(spec.opts.b ?? 4), 1, 99));
  const pa = split(a), pb = split(b);
  const W0 = 300, H0 = 150;
  // Proportional widths, but every piece at least 34 px wide so its label fits.
  const scale = (parts: number[], len: number) => {
    const sum = parts.reduce((s, v) => s + v, 0);
    const raw = parts.map((v) => Math.max(34, (v / sum) * len));
    const k = len / raw.reduce((s, v) => s + v, 0);
    return raw.map((v) => v * k);
  };
  const wa = scale(pa, W0), hb = scale(pb, H0 - 40);
  const tones = ["#e0e7ff", "#fef3c7", "#d1fae5", "#fee2e2", "#ede9fe", "#cffafe"];
  const partials = pb.flatMap((y) => pa.map((x) => x * y));
  return (
    <ArtFrame kind="look" title={L(W.area, lang)} body={spec.body || L(W.areaHint, lang)}>
      <Stage w={340} h={H0 + 10} label={`${a} ${times(lang)} ${b}`}>
        {pa.map((x, i) => <text key={`a${i}`} x={30 + wa.slice(0, i).reduce((s, v) => s + v, 0) + wa[i] / 2} y={18} textAnchor="middle" className="sim-tag" fill={COLORS.a}>{num(x, lang)}</text>)}
        {pb.map((y, j) => <text key={`b${j}`} x={24} y={30 + hb.slice(0, j).reduce((s, v) => s + v, 0) + hb[j] / 2 + 4} textAnchor="end" className="sim-tag" fill={COLORS.b}>{num(y, lang)}</text>)}
        {pb.map((y, j) => pa.map((x, i) => {
          const rx = 30 + wa.slice(0, i).reduce((s, v) => s + v, 0), ry = 26 + hb.slice(0, j).reduce((s, v) => s + v, 0);
          return (
            <g key={`${i}-${j}`}>
              <rect x={rx} y={ry} width={wa[i]} height={hb[j]} fill={tones[(i + j * pa.length) % tones.length]} stroke={COLORS.line} strokeWidth="1.5" />
              <text x={rx + wa[i] / 2} y={ry + hb[j] / 2 + 4} textAnchor="middle" className="sim-tag" fill={COLORS.line}>{num(x * y, lang)}</text>
            </g>
          );
        }))}
      </Stage>
      <Sum parts={[`${num(a, lang)} ${times(lang)} ${num(b, lang)} = `, partials.map((p) => num(p, lang)).join(" + "), " = ", [num(a * b, lang), COLORS.d]]} />
      <div className="art-row">
        <NumPick label={L(W.first, lang)} value={a} min={1} max={a > 99 || Number(spec.opts.a ?? 0) > 99 ? 999 : 99} onChange={setA} lang={lang} color={COLORS.a} />
        <NumPick label={L(W.second, lang)} value={b} min={1} max={b > 9 || Number(spec.opts.b ?? 0) > 9 ? 99 : 9} onChange={setB} lang={lang} color={COLORS.b} />
      </div>
    </ArtFrame>
  );
}

const FRUITS = ["🍎", "🍐", "🍊", "🍓", "🥕", "⭐"];

function Share({ spec, lang }: SimProps) {
  const [n, setN] = useState(clamp(Number(spec.opts.n ?? 14), 1, 40));
  const [k, setK] = useState(clamp(Number(spec.opts.k ?? 3), 1, 8));
  const [rounds, setRounds] = useState(0);
  const q = Math.floor(n / k), r = n % k;
  const done = Math.min(rounds, q);
  const left = n - done * k;
  const icon = FRUITS[(n + k) % FRUITS.length];
  const gw = 320 / k;
  const rowsPer = Math.ceil(q / 4) || 1;
  const pileRows = Math.max(1, Math.ceil(left / 18));
  const top = pileRows * 20 + 12;
  const reset = (f: () => void) => { f(); setRounds(0); };
  return (
    <ArtFrame kind="experiment" title={L(W.share, lang)} body={spec.body || L(W.shareHint, lang)}>
      <Stage w={340} h={rowsPer * 20 + 44 + top} label={`${n} ${divide(lang)} ${k}`}>
        {Array.from({ length: left }, (_, i) => <text key={i} x={20 + (i % 18) * 17.5} y={22 + Math.floor(i / 18) * 20} textAnchor="middle" fontSize="15">{icon}</text>)}
        {Array.from({ length: k }, (_, g) => (
          <g key={g}>
            <rect x={10 + g * gw + 2} y={top} width={gw - 4} height={rowsPer * 20 + 22} rx="12" fill="#f8fafc" stroke={COLORS.a} strokeWidth="2" />
            {Array.from({ length: done }, (_, i) => <text key={i} x={10 + g * gw + gw / 2 + ((i % 4) - 1.5) * Math.min(17, gw / 4.4)} y={top + 20 + Math.floor(i / 4) * 20} textAnchor="middle" fontSize={Math.min(15, gw / 4.5)}>{icon}</text>)}
          </g>
        ))}
      </Stage>
      <Readouts items={[[L(W.each, lang), String(done), COLORS.a], [L(W.rest, lang), done === q ? String(r) : "…", COLORS.d]]} />
      {done === q ? (
        <>
          <Sum parts={[`${n} ${divide(lang)} ${k} = `, [String(q), COLORS.a], ...(r ? [` (${L(W.rest, lang).toLowerCase()} `, [String(r), COLORS.d], ")"] as Array<string | [string, string]> : [])]} />
          <Note tone={r ? undefined : "good"}>{r ? L(W.hasRest, lang).replace("{r}", String(r)) : L(W.noRest, lang)}</Note>
        </>
      ) : null}
      <div className="art-row">
        <button type="button" className="art-btn is-primary" disabled={done >= q} onClick={() => setRounds(done + 1)}>{L(W.deal, lang)}</button>
        <button type="button" className="art-btn" disabled={done >= q} onClick={() => setRounds(q)}>{L(W.dealAll, lang)}</button>
        <button type="button" className="art-btn" onClick={() => setRounds(0)}><Shuffle className="size-4" aria-hidden="true" />{L(W.again, lang)}</button>
      </div>
      <div className="art-row">
        <NumPick label={L(W.objects, lang)} value={n} min={1} max={40} onChange={(v) => reset(() => setN(v))} lang={lang} color={COLORS.b} />
        <Counter label={L(W.groups, lang)} value={k} min={1} max={8} onChange={(v) => reset(() => setK(v))} lang={lang} color={COLORS.a} />
      </div>
    </ArtFrame>
  );
}

function Table({ spec, lang }: SimProps) {
  const [cell, setCell] = useState<[number, number]>([Number(spec.opts.r ?? 6), Number(spec.opts.c ?? 7)]);
  const add = spec.opts.op === "add";
  const [mode, setMode] = useState(spec.opts.n ? `m${spec.opts.n}` : "off");
  const sign = add ? "+" : times(lang);
  const f = (i: number, j: number) => (add ? i + j : i * j);
  const m = mode.startsWith("m") ? Number(mode.slice(1)) : 0;
  const S = 30;
  return (
    <ArtFrame kind="look" title={L(add ? W.addTable : W.table, lang)} body={spec.body || L(add ? W.addTableHint : W.tableHint, lang)}>
      <Stage w={11 * S + 10} h={11 * S + 10} label={L(W.table, lang)}>
        {Array.from({ length: 11 }, (_, i) => Array.from({ length: 11 }, (_, j) => {
          const v = f(i, j);
          const head = i === 0 || j === 0;
          const on = !head && (i === cell[0] || j === cell[1]) && i <= cell[0] && j <= cell[1];
          const hit = !head && ((m && v % m === 0) || (mode === "sq" && i === j) || (mode === "same" && v === f(cell[0], cell[1])));
          const target = i === cell[0] && j === cell[1];
          return (
            <g key={`${i}-${j}`} onClick={head ? undefined : () => setCell([i, j])} style={head ? undefined : { cursor: "pointer" }}>
              <rect x={5 + j * S} y={5 + i * S} width={S} height={S} fill={target ? COLORS.d : head ? (i === 0 && j === 0 ? "#fff" : "#e0e7ff") : hit ? "#fde68a" : on ? "#dbeafe" : "#fff"} stroke="#cbd5e1" />
              {i === 0 && j === 0 ? <text x={5 + S / 2} y={5 + S / 2 + 4} textAnchor="middle" className="sim-tag" fill={COLORS.line}>{sign}</text> : (
                <text x={5 + j * S + S / 2} y={5 + i * S + S / 2 + 4} textAnchor="middle" className="sim-tag is-plain" fill={target ? "#fff" : head ? COLORS.a : COLORS.line}>{head ? Math.max(i, j) : v}</text>
              )}
            </g>
          );
        }))}
      </Stage>
      <Sum parts={[[String(cell[0]), COLORS.a], ` ${sign} `, [String(cell[1]), COLORS.a], " = ", [String(f(cell[0], cell[1])), COLORS.d]]} />
      {add ? (
        <Choice value={mode} options={[["off", L(W.none, lang)], ["sq", L(W.doubles, lang)], ["same", L(W.sameSum, lang)]]} onChange={setMode} />
      ) : (
        <>
          <p className="art-ctrl-label">{L(W.multiples, lang)}</p>
          <Choice value={mode} options={[["off", L(W.none, lang)], ...[2, 3, 4, 5, 6, 7, 8, 9].map((v) => [`m${v}`, String(v)] as [string, string]), ["sq", L(W.squares, lang)]]} onChange={setMode} />
        </>
      )}
    </ArtFrame>
  );
}
