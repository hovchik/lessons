"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw, Shuffle } from "lucide-react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang, Tr } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Readouts, Stage } from "../kit";
import { L, t, UI } from "../labels";
import { COLORS } from "../math-kit";

/**
 * Searching and sorting, one step at a time, with a count of comparisons.
 *   algo              bubble sort
 *   algo mode=merge   merge sort: split in halves, then merge sorted halves
 *   algo mode=quick   quicksort: put the pivot in its place, then sort each side
 *   algo mode=search  linear and binary search for the same number, side by side
 */
const W = {
  bubble: t("Step by step: bubble sort", "Քայլ առ քայլ․ պղպջակային տեսակավորում", "Шаг за шагом: сортировка пузырьком"),
  merge: t("Step by step: merge sort", "Քայլ առ քայլ․ միաձուլման տեսակավորում", "Шаг за шагом: сортировка слиянием"),
  quick: t("Step by step: quicksort", "Քայլ առ քայլ․ արագ տեսակավորում", "Шаг за шагом: быстрая сортировка"),
  search: t("Experiment: linear and binary search", "Փորձ․ գծային և երկուական որոնում", "Опыт: линейный и двоичный поиск"),
  hint: t("Press Next or Play. Yellow bars are being compared, green ones are in their final place.", "Սեղմի՛ր «Հաջորդը» կամ «Սկսել»։ Դեղին սյուները համեմատվում են, կանաչները իրենց վերջնական տեղում են։", "Нажимай «Дальше» или «Пуск». Жёлтые столбики сравниваются, зелёные стоят на своём месте."),
  searchHint: t("Both search for the same number in a sorted list. Linear search checks every element in turn; binary search looks at the middle and throws away half each time.", "Երկուսն էլ փնտրում են նույն թիվը տեսակավորված ցուցակում։ Գծային որոնումը ստուգում է տարրերը հերթով, իսկ երկուականը նայում է մեջտեղին և ամեն անգամ դեն է նետում կեսը։", "Оба ищут одно и то же число в отсортированном списке. Линейный поиск проверяет элементы по очереди, двоичный смотрит в середину и каждый раз отбрасывает половину."),
  comps: t("Comparisons", "Համեմատություններ", "Сравнения"),
  swaps: t("Swaps", "Փոխատեղումներ", "Обмены"),
  moves: t("Writes", "Գրառումներ", "Записи"),
  shuffle: t("New list", "Նոր ցուցակ", "Новый список"),
  target: t("Looking for", "Փնտրում ենք", "Ищем"),
  linear: t("Linear search", "Գծային որոնում", "Линейный поиск"),
  binary: t("Binary search", "Երկուական որոնում", "Двоичный поиск"),
  found: t("found", "գտնված է", "найдено"),
  newTarget: t("New number", "Նոր թիվ", "Новое число"),
  start: t("The list is not sorted yet.", "Ցուցակը դեռ տեսակավորված չէ։", "Список ещё не отсортирован."),
  cmp: t("Compare {a} and {b}.", "Համեմատում ենք {a} և {b} թվերը։", "Сравниваем {a} и {b}."),
  swap: t("{a} > {b}: swap them.", "{a} > {b}․ փոխատեղում ենք։", "{a} > {b}: меняем местами."),
  keep: t("{a} ≤ {b}: leave them.", "{a} ≤ {b}․ թողնում ենք։", "{a} ≤ {b}: оставляем."),
  passEnd: t("End of pass {n}: the largest remaining number has bubbled to the end.", "{n}-րդ անցման վերջ․ մնացածներից ամենամեծը «լողացել» է դեպի վերջ։", "Конец прохода {n}: самое большое из оставшихся «всплыло» в конец."),
  done: t("Sorted!", "Տեսակավորված է։", "Отсортировано!"),
  split: t("Split {x} into two halves.", "Բաժանում ենք {x} ցուցակը երկու կեսի։", "Делим {x} на две половины."),
  merged: t("Merge {x} and {y} → {z}: take the smaller front element each time.", "Միաձուլում ենք {x} և {y} ցուցակները → {z}․ ամեն անգամ վերցնում ենք առջևի տարրերից փոքրը։", "Сливаем {x} и {y} → {z}: каждый раз берём меньший из первых элементов."),
  pivot: t("Pivot {p}: smaller numbers go to its left.", "Հենակետային թիվը {p} է․ փոքր թվերը գնում են նրա ձախ կողմ։", "Опорный элемент {p}: меньшие числа идут влево."),
  qcmp: t("{a} < {p}? {r}", "{a} < {p}? {r}", "{a} < {p}? {r}"),
  yes: t("Yes: move it to the left part.", "Այո՛․ տեղափոխում ենք ձախ մաս։", "Да: переносим в левую часть."),
  no: t("No: it stays on the right.", "Ոչ․ մնում է աջում։", "Нет: остаётся справа."),
  placed: t("Put the pivot {p} in its place.", "Հենակետային {p} թիվը դնում ենք իր տեղը։", "Ставим опорный {p} на его место."),
};

type Frame = { a: number[]; hi: number[]; sorted: number[]; range?: [number, number]; pivot?: number; note: Tr; vars?: Record<string, string>; c: number; s: number };
const fill = (tr: Tr, v: Record<string, string | number>): Tr => {
  const o = { ...tr };
  for (const k of Object.keys(o) as Array<keyof Tr>) for (const [n, x] of Object.entries(v)) o[k] = o[k].replaceAll(`{${n}}`, String(x));
  return o;
};
const list = (xs: number[]) => `[${xs.join(", ")}]`;

function bubble(a0: number[]): Frame[] {
  const a = [...a0], n = a.length, f: Frame[] = [];
  let c = 0, s = 0;
  const sorted: number[] = [];
  f.push({ a: [...a], hi: [], sorted: [], note: W.start, c, s });
  for (let p = 0; p < n - 1; p++) {
    for (let j = 0; j < n - 1 - p; j++) {
      c++;
      const sw = a[j] > a[j + 1];
      f.push({ a: [...a], hi: [j, j + 1], sorted: [...sorted], note: fill(sw ? W.swap : W.keep, { a: a[j], b: a[j + 1] }), c, s });
      if (sw) { [a[j], a[j + 1]] = [a[j + 1], a[j]]; s++; f.push({ a: [...a], hi: [j, j + 1], sorted: [...sorted], note: fill(W.swap, { a: a[j + 1], b: a[j] }), c, s }); }
    }
    sorted.push(n - 1 - p);
    f.push({ a: [...a], hi: [], sorted: [...sorted], note: fill(W.passEnd, { n: p + 1 }), c, s });
  }
  f.push({ a: [...a], hi: [], sorted: a.map((_, i) => i), note: W.done, c, s });
  return f;
}

function merge(a0: number[]): Frame[] {
  const a = [...a0], f: Frame[] = [];
  let c = 0, s = 0;
  f.push({ a: [...a], hi: [], sorted: [], note: W.start, c, s });
  const rec = (lo: number, hi: number) => {
    if (hi - lo < 2) return;
    const mid = (lo + hi) >> 1;
    f.push({ a: [...a], hi: [], sorted: [], range: [lo, hi], note: fill(W.split, { x: list(a.slice(lo, hi)) }), c, s });
    rec(lo, mid);
    rec(mid, hi);
    const L1 = a.slice(lo, mid), R1 = a.slice(mid, hi), out: number[] = [];
    let i = 0, j = 0;
    while (i < L1.length && j < R1.length) { c++; out.push(L1[i] <= R1[j] ? L1[i++] : R1[j++]); }
    out.push(...L1.slice(i), ...R1.slice(j));
    out.forEach((v, k) => { a[lo + k] = v; s++; });
    f.push({ a: [...a], hi: a.slice(lo, hi).map((_, k) => lo + k), sorted: [], range: [lo, hi], note: fill(W.merged, { x: list(L1), y: list(R1), z: list(out) }), c, s });
  };
  rec(0, a.length);
  f.push({ a: [...a], hi: [], sorted: a.map((_, i) => i), note: W.done, c, s });
  return f;
}

function quick(a0: number[]): Frame[] {
  const a = [...a0], f: Frame[] = [], sorted = new Set<number>();
  let c = 0, s = 0;
  f.push({ a: [...a], hi: [], sorted: [], note: W.start, c, s });
  const rec = (lo: number, hi: number) => {
    if (lo > hi) return;
    if (lo === hi) { sorted.add(lo); return; }
    const p = a[hi];
    let i = lo;
    f.push({ a: [...a], hi: [], sorted: [...sorted], range: [lo, hi + 1], pivot: hi, note: fill(W.pivot, { p }), c, s });
    for (let j = lo; j < hi; j++) {
      c++;
      const less = a[j] < p;
      f.push({ a: [...a], hi: [j], sorted: [...sorted], range: [lo, hi + 1], pivot: hi, note: fill(W.qcmp, { a: a[j], p, r: L(less ? W.yes : W.no, "en") }), vars: { less: less ? "1" : "0" }, c, s });
      if (less) { if (i !== j) { [a[i], a[j]] = [a[j], a[i]]; s++; } i++; }
    }
    if (i !== hi) { [a[i], a[hi]] = [a[hi], a[i]]; s++; }
    sorted.add(i);
    f.push({ a: [...a], hi: [i], sorted: [...sorted], range: [lo, hi + 1], note: fill(W.placed, { p }), c, s });
    rec(lo, i - 1);
    rec(i + 1, hi);
  };
  rec(0, a.length - 1);
  f.push({ a: [...a], hi: [], sorted: a.map((_, i) => i), note: W.done, c, s });
  return f;
}

/** The yes/no part of a quicksort note is filled per language when it is shown. */
function noteText(fr: Frame, lang: ArtLang) {
  const txt = L(fr.note, lang);
  if (fr.vars?.less === undefined) return txt;
  return txt.replace(L(W.yes, "en"), L(W.yes, lang)).replace(L(W.no, "en"), L(W.no, lang));
}

const rnd = (n: number) => {
  const pool = Array.from({ length: 19 }, (_, i) => i + 1);
  for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
  return pool.slice(0, n);
};

function Bars({ fr, max }: { fr: Frame; max: number }) {
  const n = fr.a.length, w = 300 / n;
  return (
    <Stage w={320} h={150} label="">
      {fr.a.map((v, i) => {
        const out = fr.range && (i < fr.range[0] || i >= fr.range[1]);
        const color = fr.sorted.includes(i) ? COLORS.c : i === fr.pivot ? COLORS.d : fr.hi.includes(i) ? COLORS.b : "#a5b4fc";
        const h = 14 + (v / max) * 100;
        return (
          <g key={i} opacity={out ? 0.3 : 1}>
            <rect x={10 + i * w + 3} y={128 - h} width={w - 6} height={h} rx="4" fill={color} />
            <text x={10 + i * w + w / 2} y={143} textAnchor="middle" fontSize="11" fontWeight="900" fill="#1e1b4b">{v}</text>
          </g>
        );
      })}
    </Stage>
  );
}

function Player({ n, i, setI, lang }: { n: number; i: number; setI: (k: number) => void; lang: ArtLang }) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (!play) return;
    if (i >= n - 1) { setPlay(false); return; }
    const id = setTimeout(() => setI(i + 1), 900);
    return () => clearTimeout(id);
  }, [play, i, n, setI]);
  return (
    <div className="art-row">
      <button type="button" className="art-btn" onClick={() => setI(Math.max(0, i - 1))} disabled={i === 0}><ChevronLeft className="size-4" aria-hidden="true" />{L(UI.back, lang)}</button>
      <button type="button" className="art-btn is-primary" onClick={() => setI(Math.min(n - 1, i + 1))} disabled={i >= n - 1}>{L(UI.next, lang)}<ChevronRight className="size-4" aria-hidden="true" /></button>
      <button type="button" className="art-btn" onClick={() => (i >= n - 1 ? setI(0) : setPlay(!play))} aria-pressed={play}>
        {i >= n - 1 ? <RotateCcw className="size-4" aria-hidden="true" /> : play ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
        {L(i >= n - 1 ? UI.again : play ? UI.pause : UI.play, lang)}
      </button>
    </div>
  );
}

function Sorter({ mode, lang, body }: { mode: "bubble" | "merge" | "quick"; lang: ArtLang; body: string }) {
  const [arr, setArr] = useState([5, 2, 8, 1, 9, 3, 7, 4]);
  const frames = useMemo(() => (mode === "merge" ? merge : mode === "quick" ? quick : bubble)(arr), [arr, mode]);
  const [i, setI] = useState(0);
  const fr = frames[Math.min(i, frames.length - 1)];
  return (
    <ArtFrame kind="steps" title={L(W[mode], lang)} body={body || L(W.hint, lang)}>
      <Bars fr={fr} max={Math.max(...arr)} />
      <p className="sim-note" aria-live="polite">{noteText(fr, lang)}</p>
      <Readouts items={[[L(W.comps, lang), String(fr.c), COLORS.b], [L(mode === "merge" ? W.moves : W.swaps, lang), String(fr.s), COLORS.a], [L(UI.step, lang), `${i + 1}/${frames.length}`, COLORS.c]]} />
      <Player n={frames.length} i={i} setI={setI} lang={lang} />
      <div className="art-chips">
        <button type="button" className="art-chip" onClick={() => { setArr(rnd(8)); setI(0); }}><Shuffle className="size-4" aria-hidden="true" /> {L(W.shuffle, lang)}</button>
      </div>
    </ArtFrame>
  );
}

const SORTED = [2, 5, 8, 12, 16, 23, 31, 38, 42, 47, 56, 61, 72, 85, 91];

function Search({ lang, body }: { lang: ArtLang; body: string }) {
  const [goal, setGoal] = useState(72);
  const [i, setI] = useState(0);
  const lin = SORTED.indexOf(goal);
  const bin: Array<[number, number, number]> = [];
  for (let lo = 0, hi = SORTED.length - 1; lo <= hi;) {
    const mid = (lo + hi) >> 1;
    bin.push([lo, hi, mid]);
    if (SORTED[mid] === goal) break;
    if (SORTED[mid] < goal) lo = mid + 1; else hi = mid - 1;
  }
  const n = Math.max(lin + 1, bin.length);
  const k = Math.min(i, n - 1);
  const li = Math.min(k, lin), bk = bin[Math.min(k, bin.length - 1)];
  const w = 300 / SORTED.length;
  const row = (y: number, color: (j: number) => string, label: string) => (
    <g>
      <text x="10" y={y - 6} fontSize="9" fontWeight="900" fill="#475569">{label}</text>
      {SORTED.map((v, j) => (
        <g key={j}>
          <rect x={10 + j * w + 1} y={y} width={w - 2} height="24" rx="4" fill={color(j)} stroke="#cbd5e1" />
          <text x={10 + j * w + w / 2} y={y + 16} textAnchor="middle" fontSize="9" fontWeight="900" fill="#1e1b4b">{v}</text>
        </g>
      ))}
    </g>
  );
  return (
    <ArtFrame kind="experiment" title={L(W.search, lang)} body={body || L(W.searchHint, lang)}>
      <Stage w={320} h={118} label={L(W.search, lang)}>
        {row(20, (j) => (j === li ? (j === lin ? "#86efac" : "#fde68a") : j < li ? "#e2e8f0" : "#fff"), `${L(W.linear, lang)}: ${li + 1}`)}
        {row(76, (j) => (j === bk[2] ? (SORTED[j] === goal ? "#86efac" : "#fde68a") : j < bk[0] || j > bk[1] ? "#e2e8f0" : "#fff"), `${L(W.binary, lang)}: ${Math.min(k + 1, bin.length)}`)}
      </Stage>
      <Readouts items={[[L(W.target, lang), String(goal), COLORS.d], [L(W.linear, lang), `${li + 1} ${li === lin ? "✓" : "…"}`, COLORS.b], [L(W.binary, lang), `${Math.min(k + 1, bin.length)} ${k + 1 >= bin.length ? "✓" : "…"}`, COLORS.a]]} />
      <Player n={n} i={k} setI={setI} lang={lang} />
      <div className="art-chips">
        <button type="button" className="art-chip" onClick={() => { setGoal(SORTED[Math.floor(Math.random() * SORTED.length)]); setI(0); }}>{L(W.newTarget, lang)}</button>
      </div>
    </ArtFrame>
  );
}

export default function Algo({ spec, lang }: SimProps) {
  const mode = spec.opts.mode ?? "bubble";
  if (mode === "search") return <Search lang={lang} body={spec.body} />;
  return <Sorter mode={mode === "merge" || mode === "quick" ? mode : "bubble"} lang={lang} body={spec.body} />;
}
