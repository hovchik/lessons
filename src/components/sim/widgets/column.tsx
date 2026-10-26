"use client";

import { useMemo, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang, Tr } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { StepPlayer } from "../kit";
import { L, t } from "../labels";
import { COLORS, divide } from "../math-kit";

/**
 * Written (column) arithmetic, one step at a time, as in a school exercise book:
 *   column 478+256      addition with carrying (decimals too: column 3.75+12.6)
 *   column 503-268      subtraction with borrowing, also across zeros
 *   column 347*6        multiplication by a one-digit number, digit by digit
 *   column 347*26       multiplication by a two- or three-digit number: partial products, then their sum
 *   column 7464/6       long division with the corner, zeros in the quotient and a remainder
 */
const W = {
  title: t("Step by step: written calculation", "Քայլ առ քայլ․ սյունակով հաշվում", "Шаг за шагом: вычисление столбиком"),
  hint: t("Press Next to see each step. Say every step aloud before you look.", "Սեղմի՛ր «Հաջորդը»՝ յուրաքանչյուր քայլը տեսնելու համար։ Նախքան նայելը քայլը բարձրաձայն ասա։", "Нажимай «Дальше», чтобы увидеть каждый шаг. Прежде чем смотреть, проговори шаг вслух."),
  bad: t("This example cannot be shown.", "Այս օրինակը հնարավոր չէ ցույց տալ։", "Этот пример нельзя показать."),
  answer: t("Answer", "Պատասխան", "Ответ"),
};

const PLACES: Tr[] = [
  t("ones", "միավորներ", "единицы"),
  t("tens", "տասնյակներ", "десятки"),
  t("hundreds", "հարյուրյակներ", "сотни"),
  t("thousands", "հազարներ", "тысячи"),
  t("ten thousands", "տասնյակ հազարներ", "десятки тысяч"),
  t("hundred thousands", "հարյուրյակ հազարներ", "сотни тысяч"),
  t("millions", "միլիոններ", "миллионы"),
];
const DPLACES: Tr[] = [t("tenths", "տասնորդականներ", "десятые"), t("hundredths", "հարյուրերորդականներ", "сотые"), t("thousandths", "հազարերորդականներ", "тысячные")];
/** Place of a column counted from the decimal point: 0 = ones, -1 = tenths. */
const place = (p: number) => (p >= 0 ? PLACES[Math.min(p, PLACES.length - 1)] : DPLACES[Math.min(-p - 1, 2)]);
const cap = (s: Tr) => ({ en: s.en[0].toUpperCase() + s.en.slice(1), hy: s.hy[0].toUpperCase() + s.hy.slice(1), ru: s.ru[0].toUpperCase() + s.ru.slice(1) });
const fill = (s: Tr, v: Record<string, string | number>, pl?: Tr): Tr => {
  const f = (x: string, k: keyof Tr) => x.replace(/\{(\w+)\}/g, (m, n) => (n === "place" && pl ? pl[k] : n === "Place" && pl ? cap(pl)[k] : n in v ? String(v[n]) : m));
  return { en: f(s.en, "en"), hy: f(s.hy, "hy"), ru: f(s.ru, "ru") };
};

const S = {
  setup: t("Write the numbers under each other: ones under ones, tens under tens.", "Թվերը գրի՛ր իրար տակ․ միավորը՝ միավորի տակ, տասնյակը՝ տասնյակի տակ։", "Запиши числа друг под другом: единицы под единицами, десятки под десятками."),
  setupDec: t("Write the numbers so that the decimal points are under each other. Fill empty places with 0.", "Թվերը գրի՛ր այնպես, որ ստորակետերը լինեն իրար տակ։ Դատարկ կարգերը լրացրո՛ւ 0-ով։", "Запиши числа так, чтобы запятая была под запятой. Пустые разряды заполни нулями."),
  add: t("{Place}: {a} + {b}{c} = {s}.", "{Place}․ {a} + {b}{c} = {s}։", "{Place}: {a} + {b}{c} = {s}."),
  write: t(" Write {d}.", " Գրում ենք {d}։", " Пишем {d}."),
  carry: t(" Write {d} and carry {k} to the next place.", " Գրում ենք {d}, իսկ {k}-ը փոխանցում ենք հաջորդ կարգին։", " Пишем {d}, а {k} переносим в следующий разряд."),
  lastCarry: t(" Write {s}: there is no next place to carry to.", " Գրում ենք {s}․ փոխանցելու հաջորդ կարգ չկա։", " Пишем {s}: переносить больше некуда."),
  point: t("Put the decimal point in the answer under the other points.", "Պատասխանում ստորակետը դրի՛ր մյուս ստորակետերի տակ։", "В ответе поставь запятую под запятыми."),
  sub: t("{Place}: {a} − {b} = {d}.", "{Place}․ {a} − {b} = {d}։", "{Place}: {a} − {b} = {d}."),
  borrow: t("{Place}: {a} is less than {b}, so take 1 from the next place. It becomes 10 here: {a2} − {b} = {d}.", "{Place}․ {a}-ը փոքր է {b}-ից, ուստի վերցնում ենք 1 հաջորդ կարգից։ Այստեղ այն դառնում է 10․ {a2} − {b} = {d}։", "{Place}: {a} меньше {b}, поэтому занимаем 1 в следующем разряде. Здесь это 10: {a2} − {b} = {d}."),
  borrowZero: t(" The next place has 0, so we borrow from further left: every 0 on the way becomes 9.", " Հաջորդ կարգում 0 է, ուստի վերցնում ենք ավելի ձախից․ ճանապարհին ամեն 0 դառնում է 9։", " В следующем разряде 0, поэтому занимаем левее: каждый 0 по дороге становится 9."),
  mul: t("{Place}: {a} × {b}{c} = {p}.", "{Place}․ {a} × {b}{c} = {p}։", "{Place}: {a} × {b}{c} = {p}."),
  mulRow: t("Multiply {a} by the {place} digit {b}: {a} × {b} = {p}. Start writing under the {place}.", "{a}-ը բազմապատկի՛ր {place}ի {b} թվանշանով․ {a} × {b} = {p}։ Գրի՛ր՝ սկսելով {place}ի տակից։", "Умножь {a} на цифру {b} ({place}): {a} × {b} = {p}. Пиши, начиная под разрядом «{place}»."),
  mulSum: t("Add the partial products: {a} × {b} = {p}.", "Գումարի՛ր մասնակի արտադրյալները․ {a} × {b} = {p}։", "Сложи неполные произведения: {a} × {b} = {p}."),
  setupMulDec: t("Write the numbers right-aligned, not point under point, and multiply them as whole numbers.", "Թվերը գրի՛ր աջից հավասարեցված (ոչ թե ստորակետը ստորակետի տակ) և բազմապատկի՛ր դրանք ինչպես բնական թվեր։", "Запиши числа с выравниванием по правому краю (не запятая под запятой) и умножай их как натуральные."),
  pointMul: t("Count the digits after the points: {da} + {db} = {n}. Mark off {n} from the right in the answer.", "Հաշվի՛ր ստորակետից հետո թվանշանները․ {da} + {db} = {n}։ Պատասխանում աջից անջատի՛ր {n} թվանշան։", "Посчитай цифры после запятой: {da} + {db} = {n}. Отдели в ответе {n} справа."),
  setupMul: t("Write the second number under the first, ones under ones.", "Երկրորդ թիվը գրի՛ր առաջինի տակ՝ միավորը միավորի տակ։", "Запиши второе число под первым, единицы под единицами."),
  first: t("Take the first part of the dividend that is not less than {b}: {p}.", "Վերցրո՛ւ բաժանելիի առաջին մասը, որը փոքր չէ {b}-ից․ {p}։", "Возьми первое неполное делимое, не меньшее {b}: {p}."),
  how: t("How many times does {b} go into {p}? {n}: {q} × {b} = {m}. Write {q} in the quotient.", "Քանի՞ անգամ է {b}-ը պարունակվում {p}-ում։ {q} անգամ․ {q} × {b} = {m}։ Քանորդում գրում ենք {q}։", "Сколько раз {b} содержится в {p}? {n}: {q} × {b} = {m}. Пишем {q} в частное."),
  minus: t("Subtract: {p} − {m} = {r}.", "Հանում ենք․ {p} − {m} = {r}։", "Вычитаем: {p} − {m} = {r}."),
  down: t(" Bring down the next digit: {p}.", " Իջեցնում ենք հաջորդ թվանշանը․ {p}։", " Сносим следующую цифру: {p}."),
  zero: t("{p} is less than {b}, so write 0 in the quotient.", "{p}-ը փոքր է {b}-ից, ուստի քանորդում գրում ենք 0։", "{p} меньше {b}, поэтому пишем 0 в частное."),
  end: t("No digits left. {a} {div} {b} = {q}.", "Թվանշաններ չմնացին։ {a} {div} {b} = {q}։", "Цифр больше нет. {a} {div} {b} = {q}."),
  endRest: t("No digits left. {a} {div} {b} = {q}, remainder {r}. Check: {q} × {b} + {r} = {a}.", "Թվանշաններ չմնացին։ {a} {div} {b} = {q}, մնացորդ {r}։ Ստուգում․ {q} × {b} + {r} = {a}։", "Цифр больше нет. {a} {div} {b} = {q}, остаток {r}. Проверка: {q} × {b} + {r} = {a}."),
  done: t("Answer: {e}.", "Պատասխան․ {e}։", "Ответ: {e}."),
};

type Cell = { r: number; c: number; ch: string; color?: string; small?: boolean; strike?: boolean; pt?: string };
type Line = { r: number; c0: number; c1: number; v?: boolean };
type Snap = { cells: Cell[]; lines: Line[]; hot: number[]; cap: Tr };
type Plan = { steps: Snap[]; rows: number; cols: number };

class Book {
  cells: Cell[] = [];
  lines: Line[] = [];
  steps: Snap[] = [];
  put(r: number, c: number, ch: string, o: Partial<Cell> = {}) {
    this.cells = this.cells.filter((x) => !(x.r === r && x.c === c && !!x.small === !!o.small));
    this.cells.push({ r, c, ch, ...o });
  }
  text(r: number, cEnd: number, s: string, o: Partial<Cell> = {}) {
    [...s].forEach((ch, i) => this.put(r, cEnd - s.length + 1 + i, ch, o));
  }
  snap(cap: Tr, hot: number[] = []) {
    this.steps.push({ cells: this.cells.map((c) => ({ ...c })), lines: [...this.lines], hot, cap });
  }
}

const digit = (s: string, i: number) => Number(s[i] ?? 0);

/** "3 times" / "once" in English, "3 раза" / "5 раз" in Russian (Armenian puts the number in the template). */
function timesWord(q: number): Tr {
  const m10 = q % 10, m100 = q % 100;
  const ru = m10 === 1 && m100 !== 11 ? "раз" : m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? "раза" : "раз";
  return { en: q === 1 ? "Once" : `${q} times`, hy: "", ru: `${q} ${ru}` };
}

/** a and b as digit strings without the point, padded to the same number of decimals. */
function align(a: string, b: string) {
  const [ai, af = ""] = a.split("."), [bi, bf = ""] = b.split(".");
  const dec = Math.max(af.length, bf.length);
  return { A: ai + af.padEnd(dec, "0"), B: bi + bf.padEnd(dec, "0"), dec };
}

function fmtDec(digits: string, dec: number, lang: ArtLang) {
  if (!dec) return digits.replace(/^0+(?=\d)/, "");
  const s = digits.padStart(dec + 1, "0");
  const int = s.slice(0, -dec).replace(/^0+(?=\d)/, "");
  return `${int}${lang === "en" ? "." : ","}${s.slice(-dec)}`;
}

function planAdd(a: string, b: string, lang: ArtLang, sub: boolean): Plan | null {
  const { A, B, dec } = align(a, b);
  const big = BigInt(A), small = BigInt(B);
  if (sub && big < small) return null;
  const res = (sub ? big - small : big + small).toString();
  const n = Math.max(A.length, B.length, res.length);
  const cols = n + 2 + (dec ? 1 : 0); // sign column, room for a carry, the point
  const right = cols - 1;
  const sep = lang === "en" ? "." : ",";
  const book = new Book();
  // Rows: 0 small carries/borrows, 1 first number, 2 second number, 3 result.
  const col = (k: number) => right - k; // k-th column from the right in the digit strings
  const cx = (k: number) => col(k) - (dec > 0 && k >= dec ? 1 : 0);
  const write = (r: number, s: string, o: Partial<Cell> = {}) => {
    for (let k = 0; k < s.length; k++) book.put(r, cx(k), s[s.length - 1 - k], o);
    if (dec > 0) book.put(r, col(dec) , sep, o);
  };
  write(1, A);
  write(2, B.padStart(1, "0"));
  book.put(2, cx(Math.max(A.length, B.length)), sub ? "−" : "+", { color: COLORS.d });
  book.lines.push({ r: 2, c0: cx(n), c1: right });
  book.snap(dec ? S.setupDec : S.setup);
  const ra = [...A].reverse(), rb = [...B].reverse();
  if (!sub) {
    let carry = 0;
    for (let k = 0; k < Math.max(A.length, B.length); k++) {
      const da = Number(ra[k] ?? 0), db = Number(rb[k] ?? 0);
      const s = da + db + carry;
      const last = k === Math.max(A.length, B.length) - 1;
      const pl = place(k - dec);
      let text = fill(S.add, { a: da, b: db, c: carry ? ` + ${carry}` : "", s }, pl);
      if (last && s >= 10) {
        book.put(3, cx(k), String(s % 10), { color: COLORS.a });
        book.put(3, cx(k + 1), String(Math.floor(s / 10)), { color: COLORS.a });
        text = { en: text.en + fill(S.lastCarry, { s }).en, hy: text.hy + fill(S.lastCarry, { s }).hy, ru: text.ru + fill(S.lastCarry, { s }).ru };
      } else {
        book.put(3, cx(k), String(s % 10), { color: COLORS.a });
        const extra = s >= 10 ? fill(S.carry, { d: s % 10, k: Math.floor(s / 10) }) : fill(S.write, { d: s % 10 });
        text = { en: text.en + extra.en, hy: text.hy + extra.hy, ru: text.ru + extra.ru };
        if (s >= 10) book.put(0, cx(k + 1), String(Math.floor(s / 10)), { small: true, color: COLORS.d });
      }
      carry = Math.floor(s / 10);
      if (dec && k === dec - 1) {
        book.snap(text, [cx(k)]);
        book.put(3, col(dec), sep, { color: COLORS.a });
        book.snap(S.point, [col(dec)]);
      } else book.snap(text, [cx(k)]);
    }
  } else {
    const cur = ra.map(Number);
    for (let k = 0; k < A.length; k++) {
      const db = Number(rb[k] ?? 0);
      if (k >= Math.max(res.length, B.length, dec + 1) && cur[k] === 0) continue; // a borrowed-away leading digit
      const pl = place(k - dec);
      let text: Tr;
      if (cur[k] < db) {
        let j = k + 1;
        while (cur[j] === 0) j++;
        const zeros = j > k + 1;
        const a0 = cur[k];
        cur[j]--;
        book.put(1, cx(j), ra[j], { strike: true });
        book.put(0, cx(j), String(cur[j]), { small: true, color: COLORS.d });
        for (let m = j - 1; m > k; m--) {
          cur[m] = 9;
          book.put(1, cx(m), ra[m], { strike: true });
          book.put(0, cx(m), "9", { small: true, color: COLORS.d });
        }
        cur[k] += 10;
        book.put(0, cx(k), String(cur[k]), { small: true, color: COLORS.d });
        book.put(1, cx(k), ra[k], { strike: true });
        text = fill(S.borrow, { a: a0, b: db, a2: cur[k], d: cur[k] - db }, pl);
        if (zeros) text = { en: text.en + S.borrowZero.en, hy: text.hy + S.borrowZero.hy, ru: text.ru + S.borrowZero.ru };
      } else text = fill(S.sub, { a: cur[k], b: db, d: cur[k] - db }, pl);
      const d = cur[k] - db;
      // No leading zeros in the answer (1000 − 999 = 1), but keep 0,05.
      if (k < Math.max(res.length, dec + 1)) book.put(3, cx(k), String(d), { color: COLORS.a });
      book.snap(text, [cx(k)]);
      if (dec && k === dec - 1) {
        book.put(3, col(dec), sep, { color: COLORS.a });
        book.snap(S.point, [col(dec)]);
      }
    }
  }
  const e = `${fmtDec(A, dec, lang)} ${sub ? "−" : "+"} ${fmtDec(B, dec, lang)} = ${fmtDec(res, dec, lang)}`;
  book.snap(fill(S.done, { e }));
  return { steps: book.steps, rows: 4, cols };
}

function planMul(a0: string, b0: string, lang: ArtLang): Plan | null {
  // decimals are multiplied as whole numbers; the point goes back into the answer at the end
  const da = (a0.split(".")[1] ?? "").length, db = (b0.split(".")[1] ?? "").length;
  const sep = lang === "en" ? "." : ",";
  const showA = a0.replace(".", ""), showB = b0.replace(".", "");
  const a = showA.replace(/^0+(?=\d)/, ""), b = showB.replace(/^0+(?=\d)/, "");
  const A = BigInt(a), B = BigInt(b);
  const raw = (A * B).toString();
  const dec = da + db;
  const res = dec ? raw.padStart(dec + 1, "0") : raw;
  const cols = Math.max(res.length, showA.length, showB.length) + 2;
  const right = cols - 1;
  const book = new Book();
  const mark = (r: number, digits: string, d: number, o: Partial<Cell> = {}) => {
    if (d) book.put(r, right - d, digits[digits.length - 1 - d], { ...o, pt: sep });
  };
  book.text(1, right, showA);
  mark(1, showA, da);
  book.text(2, right, showB);
  mark(2, showB, db);
  book.put(2, right - Math.max(showA.length, showB.length), "×", { color: COLORS.d });
  book.lines.push({ r: 2, c0: right - Math.max(showA.length, showB.length), c1: right });
  book.snap(dec ? S.setupMulDec : S.setupMul);
  const pretty = (x: string, d: number) => fmtDec(x, d, lang).replace(/([.,]\d*?)0+$/, "$1").replace(/[.,]$/, "");
  const finish = (r: number) => {
    if (!dec) return;
    book.text(r, right, res, { color: COLORS.d });
    mark(r, res, dec, { color: COLORS.d });
    book.snap(fill(S.pointMul, { da, db, n: dec }));
  };
  const ra = [...a].reverse().map(Number);
  if (b.length === 1) {
    const m = Number(b);
    let carry = 0;
    for (let k = 0; k < ra.length; k++) {
      const p = ra[k] * m + carry;
      const last = k === ra.length - 1;
      const pl = place(k - da);
      const head = fill(S.mul, { a: ra[k], b: m, c: carry ? ` + ${carry}` : "", p }, pl);
      if (last) {
        book.text(3, right - k, String(p), { color: COLORS.a });
        book.snap({ en: head.en + fill(S.write, { d: p }).en, hy: head.hy + fill(S.write, { d: p }).hy, ru: head.ru + fill(S.write, { d: p }).ru }, [right - k]);
      } else {
        book.put(3, right - k, String(p % 10), { color: COLORS.a });
        if (p >= 10) book.put(0, right - k - 1, String(Math.floor(p / 10)), { small: true, color: COLORS.d });
        const extra = p >= 10 ? fill(S.carry, { d: p % 10, k: Math.floor(p / 10) }) : fill(S.write, { d: p });
        book.snap({ en: head.en + extra.en, hy: head.hy + extra.hy, ru: head.ru + extra.ru }, [right - k]);
      }
      carry = Math.floor(p / 10);
    }
    finish(3);
    book.snap(fill(S.done, { e: `${pretty(showA, da)} × ${pretty(showB, db)} = ${pretty(res, dec)}` }));
    return { steps: book.steps, rows: 4, cols };
  }
  const rb = [...b].reverse().map(Number);
  rb.forEach((d, k) => {
    const p = (A * BigInt(d)).toString();
    book.text(3 + k, right - k, p, { color: k % 2 ? COLORS.b : COLORS.a });
    if (k === rb.length - 1) {
      book.put(3 + k, right - k - p.length, "+", { color: COLORS.d });
    }
    book.snap(fill(S.mulRow, { a, b: d, p }, place(k)), [right - k]);
  });
  const r = 3 + rb.length;
  book.lines.push({ r: r - 1, c0: right - res.length + 1, c1: right });
  book.text(r, right, raw, { color: COLORS.d });
  book.snap(fill(S.mulSum, { a, b, p: raw }));
  finish(r);
  if (dec) book.snap(fill(S.done, { e: `${pretty(showA, da)} × ${pretty(showB, db)} = ${pretty(res, dec)}` }));
  return { steps: book.steps, rows: r + 1, cols };
}

function planDiv(a: string, b: string, lang: ArtLang): Plan | null {
  if (a.includes(".") || b.includes(".") || Number(b) === 0 || b.length > 3) return null;
  const dv = Number(b);
  const book = new Book();
  const n = a.length;
  const o = 1; // column 0 is left free for the minus signs
  const qc = n + 1 + o; // quotient and divisor start here
  book.text(0, n - 1 + o, a);
  book.text(0, qc + b.length - 1, b);
  book.lines.push({ r: 0, c0: qc, c1: qc + Math.max(b.length, n - b.length + 1) - 1 });
  book.lines.push({ r: 0, c0: qc, c1: qc, v: true });
  // first part of the dividend
  let end = 0;
  let part = digit(a, 0);
  while (part < dv && end < n - 1) { end++; part = part * 10 + digit(a, end); }
  let row = 0;
  let q = "";
  book.snap(fill(S.first, { b, p: part }), Array.from({ length: end + 1 }, (_, i) => i + o));
  for (;;) {
    const qd = Math.floor(part / dv);
    const m = qd * dv;
    const r = part - m;
    q += String(qd);
    book.put(1, qc + q.length - 1, String(qd), { color: COLORS.a });
    if (qd === 0 && q.length > 1) {
      book.snap(fill(S.zero, { p: part, b }), [qc + q.length - 1]);
    } else {
      book.text(row + 1, end + o, String(m), { color: COLORS.b });
      book.put(row + 1, end + o - String(m).length, "−", { color: COLORS.d });
      book.lines.push({ r: row + 1, c0: end + o - String(part).length + 1, c1: end + o });
      const tw = timesWord(qd);
      const how = fill(S.how, { b, p: part, q: qd, m });
      book.snap({ en: how.en.replace("{n}", tw.en), hy: how.hy, ru: how.ru.replace("{n}", tw.ru) }, [qc + q.length - 1]);
      row += 2;
      if (r > 0 || end === n - 1) book.text(row, end + o, String(r), { color: COLORS.c });
      book.snap(fill(S.minus, { p: part, m, r }), [end + o]);
    }
    if (end === n - 1) {
      const div = divide(lang);
      book.snap(r ? fill(S.endRest, { a, b, q: Number(q), r, div }) : fill(S.end, { a, b, q: Number(q), div }));
      break;
    }
    end++;
    part = r * 10 + digit(a, end);
    if (qd === 0 && q.length > 1) {
      book.text(row, end + o, String(part), { color: COLORS.c });
    } else {
      book.put(row, end + o, a[end], { color: COLORS.c });
    }
    const last = book.steps[book.steps.length - 1];
    const extra = fill(S.down, { p: part });
    last.cap = { en: last.cap.en + extra.en, hy: last.cap.hy + extra.hy, ru: last.cap.ru + extra.ru };
    last.cells = book.cells.map((c) => ({ ...c }));
  }
  return { steps: book.steps, rows: Math.max(row + 1, 2), cols: Math.max(qc + Math.max(b.length, q.length) + 1, n + 1 + o) };
}

export function planColumn(expr: string, lang: ArtLang): Plan | null {
  const m = expr.replace(/\s+/g, "").match(/^(\d+(?:\.\d+)?)([-+*x×/:÷])(\d+(?:\.\d+)?)$/);
  if (!m) return null;
  const [, a, op, b] = m;
  if (op === "+" || op === "-") return planAdd(a, b, lang, op === "-");
  if (op === "*" || op === "x" || op === "×") return planMul(a, b, lang);
  return planDiv(a, b, lang);
}

export default function Column({ spec, lang }: SimProps) {
  const expr = spec.args[0] ?? "478+256";
  const plan = useMemo(() => planColumn(expr, lang), [expr, lang]);
  const [i, setI] = useState(0);
  if (!plan) return <pre className="art-unknown">column {expr}</pre>;
  const step = plan.steps[Math.min(i, plan.steps.length - 1)];
  const C = 22, R = 26, top = 14;
  const minR = 0;
  const w = plan.cols * C + 16, h = (plan.rows - minR) * R + top + 10;
  const X = (c: number) => 8 + c * C + C / 2;
  const Y = (r: number) => top + (r - minR) * R + R / 2 + 6;
  return (
    <ArtFrame kind="steps" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <StepPlayer lang={lang} caps={plan.steps.map((s) => s.cap)} i={i} setI={setI}>
        <svg viewBox={`0 0 ${w} ${h}`} className="sim-stage math-book" role="img" aria-label={expr} style={{ maxWidth: `${Math.min(22, w / 14)}rem` }}>
          <defs>
            <pattern id="math-grid" width={C} height={R / 2} patternUnits="userSpaceOnUse" x={8} y={top}>
              <path d={`M${C} 0V${R / 2}M0 ${R / 2}H${C}`} fill="none" stroke="#dbeafe" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width={w} height={h} fill="#fff" />
          <rect x={8} y={top - R / 2} width={plan.cols * C} height={h - top} fill="url(#math-grid)" />
          {step.hot.map((c) => <rect key={`h${c}`} x={X(c) - C / 2} y={top - R / 2} width={C} height={h - top} fill="#fef3c7" opacity="0.7" />)}
          {step.lines.map((l, k) => (l.v ? (
            <line key={k} x1={8 + l.c0 * C - 2} x2={8 + l.c0 * C - 2} y1={Y(0) - R + 8} y2={Y(1) + 8} stroke={COLORS.line} strokeWidth="2" />
          ) : (
            <line key={k} x1={8 + l.c0 * C} x2={8 + l.c1 * C + C} y1={Y(l.r) + 7} y2={Y(l.r) + 7} stroke={COLORS.line} strokeWidth="2" />
          )))}
          {step.cells.map((c, k) => (
            <g key={k}>
              <text x={X(c.c)} y={c.small ? Y(c.r) - 10 : Y(c.r)} textAnchor="middle" className={c.small ? "math-small-digit" : "math-digit"} fill={c.color ?? COLORS.line}>{c.ch}</text>
              {c.pt ? <text x={X(c.c) + C / 2} y={Y(c.r) + 2} textAnchor="middle" className="math-digit" fill={c.color ?? COLORS.line}>{c.pt}</text> : null}
              {c.strike ? <line x1={X(c.c) - 7} x2={X(c.c) + 7} y1={Y(c.r) + 2} y2={Y(c.r) - 14} stroke={COLORS.d} strokeWidth="1.8" /> : null}
            </g>
          ))}
        </svg>
      </StepPlayer>
    </ArtFrame>
  );
}
