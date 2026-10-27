"use client";

import { useEffect, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang } from "@/lib/art/spec";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { TIMELINES } from "../data/timelines";
import { Note, Readouts, Stage } from "../kit";
import { L, t } from "../labels";
import { num } from "../math-kit";

/**
 * A timeline of dated events: a to-scale strip with eras on top and a list of events below.
 *   timeline set=urartu
 * Tap an event to read its note, its century and how long ago it was; tap a second one to count the
 * years between them. Years before Christ are negative, and there is no year 0.
 */
const W = {
  title: t("Timeline", "Ժամանակագրություն", "Лента времени"),
  hint: t("Tap an event to read about it. Tap two events to count the years between them.", "Հպի՛ր իրադարձությանը՝ կարդալու համար։ Հպի՛ր երկու իրադարձության՝ նրանց միջև եղած տարիները հաշվելու համար։", "Нажми на событие, чтобы прочитать о нём. Нажми на два события, чтобы сосчитать годы между ними."),
  year: t("Year", "Տարին", "Год"),
  century: t("Century", "Դարը", "Век"),
  ago: t("How long ago", "Որքա՞ն առաջ", "Сколько лет назад"),
  between: t("Between the two", "Նրանց միջև", "Между ними"),
  lasted: t("Lasted", "Տևեց", "Длилось"),
  years: t("{n} years", "{n} տարի", "{n} лет"),
  bc: t("{y} BC", "մ.թ.ա. {y}", "{y} до н. э."),
  cbc: t("{c} century BC", "մ.թ.ա. {c} դար", "{c} век до н. э."),
  cad: t("{c} century", "{c} դար", "{c} век"),
  era: t("BC | AD", "մ.թ.ա. | մ.թ.", "до н. э. | н. э."),
  about: t("c. {y}", "մոտ {y}", "ок. {y}"),
};

const PALETTE = ["#4f46e5", "#f59e0b", "#10b981", "#e11d48", "#0ea5e9", "#8b5cf6", "#84cc16", "#f97316"];
const ROMAN: Array<[number, string]> = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];

const roman = (n: number) => {
  let s = "";
  for (const [v, r] of ROMAN) while (n >= v) { s += r; n -= v; }
  return s;
};

const ordinal = (n: number) => {
  const k = n % 100 >= 11 && n % 100 <= 13 ? "th" : (["th", "st", "nd", "rd"][n % 10] ?? "th");
  return `${n}${k}`;
};

/** A year as the base lessons write it: 782 BC / մ.թ.ա. 782 / 782 до н. э. */
export function yearText(y: number, lang: ArtLang) {
  const a = Math.abs(y), s = a > 9999 ? num(a, lang) : String(a);
  return y < 0 ? L(W.bc, lang).replace("{y}", s) : s;
}

function centuryText(y: number, lang: ArtLang) {
  const c = Math.ceil(Math.abs(y) / 100);
  const name = lang === "ru" ? roman(c) : lang === "hy" ? `${c}-րդ` : ordinal(c);
  return L(y < 0 ? W.cbc : W.cad, lang).replace("{c}", name);
}

/** Years from a to b, skipping the year 0 that does not exist. */
const span = (a: number, b: number) => Math.abs(b - a) - (Math.min(a, b) < 0 && Math.max(a, b) > 0 ? 1 : 0);

const STEPS = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000, 10000];

export default function Timeline({ spec, lang }: SimProps) {
  const set = TIMELINES[spec.opts.set ?? ""];
  const [picks, setPicks] = useState<number[]>([]);
  const [now, setNow] = useState(2026);
  useEffect(() => setNow(new Date().getFullYear()), []);
  if (!set) return <pre className="art-unknown">timeline {spec.opts.set}</pre>;
  const ev = set.events;
  const ys = ev.flatMap((e) => [e.y, e.to ?? e.y]).concat((set.eras ?? []).flatMap((e) => [e.from, e.to]));
  const lo = Math.min(...ys), hi = Math.max(...ys);
  const pad = Math.max(1, (hi - lo) * 0.04);
  const WW = 340, HH = (set.eras?.length ? 86 : 64), PL = 14, PR = 14, AY = 34;
  const X = (y: number) => PL + ((y - (lo - pad)) / (hi - lo + 2 * pad)) * (WW - PL - PR);
  const step = STEPS.find((s) => (hi - lo) / s <= 4) ?? 20000;
  const ticks: number[] = [];
  for (let v = Math.ceil((lo - pad) / step) * step; v <= hi + pad; v += step) ticks.push(v);
  const pick = (i: number) => setPicks((p) => (p.includes(i) ? p.filter((k) => k !== i) : [...p, i].slice(-2)));
  const last = picks.length ? picks[picks.length - 1] : null;
  const e = last != null ? ev[last] : null;
  const color = (i: number) => PALETTE[i % PALETTE.length];
  const yearsText = (n: number) => L(W.years, lang).replace("{n}", num(n, lang));
  const range = (i: number) => {
    const { y: a, to: b, c } = ev[i];
    const s = b == null ? yearText(a, lang) : a < 0 && b < 0 ? L(W.bc, lang).replace("{y}", `${-a}–${-b}`) : `${yearText(a, lang)}–${yearText(b, lang)}`;
    return c ? L(W.about, lang).replace("{y}", s) : s;
  };
  const items: Array<[string, string, string?]> = [];
  if (e && last != null) {
    items.push([L(W.year, lang), range(last), color(last)], [L(W.century, lang), centuryText(e.y, lang)]);
    if (e.to != null) items.push([L(W.lasted, lang), yearsText(span(e.y, e.to))]);
    else items.push([L(W.ago, lang), yearsText(span(e.y, now))]);
    if (picks.length === 2) items.push([L(W.between, lang), yearsText(span(ev[picks[0]].y, ev[picks[1]].y)), "#e11d48"]);
  }
  return (
    <ArtFrame kind="look" title={L(set.title, lang) || L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <Stage w={WW} h={HH} label={L(set.title, lang)}>
        <line x1={PL} x2={WW - PR} y1={AY} y2={AY} stroke="#94a3b8" strokeWidth="2" />
        {ticks.map((v) => (
          <g key={v}>
            <line x1={X(v)} x2={X(v)} y1={AY - 3} y2={AY + 3} stroke="#94a3b8" />
            {v !== 0 ? <text x={X(v)} y={AY + 14} textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#64748b">{yearText(v, lang)}</text> : null}
          </g>
        ))}
        {lo < 0 && hi > 0 ? (
          <g>
            <line x1={X(0)} x2={X(0)} y1={AY - 8} y2={AY + 8} stroke="#475569" strokeWidth="1.5" />
            <text x={X(0)} y={AY + 14} textAnchor="middle" fontSize="8" fontWeight="800" fill="#475569">{L(W.era, lang)}</text>
          </g>
        ) : null}
        {(set.eras ?? []).map(({ from, to, l, color: c }, i) => {
          const x1 = X(from), x2 = X(to), label = L(l, lang), fits = label.length * 4.6 < x2 - x1 - 4;
          return (
            <g key={i}>
              <rect x={x1} y={AY + 22} width={Math.max(2, x2 - x1)} height="16" rx="4" fill={c ?? PALETTE[(i + 5) % PALETTE.length]} opacity="0.22" />
              {fits ? <text x={(x1 + x2) / 2} y={AY + 33} textAnchor="middle" fontSize="8" fontWeight="800" fill="#334155">{label}</text> : null}
            </g>
          );
        })}
        {ev.map(({ y: a, to: b }, i) => (b != null ? <rect key={`r${i}`} x={X(a)} y={AY - 3.5} width={Math.max(3, X(b) - X(a))} height="7" rx="3.5" fill={color(i)} opacity={picks.includes(i) ? 1 : 0.55} /> : null))}
        {ev.map(({ y: a }, i) => (
          <circle key={i} cx={X(a)} cy={AY} r={picks.includes(i) ? 6 : 4} fill={color(i)} stroke="#fff" strokeWidth="1.5" onClick={() => pick(i)} style={{ cursor: "pointer" }} />
        ))}
        {picks.map((i) => (
          <text key={`l${i}`} x={Math.min(WW - 30, Math.max(30, X(ev[i].y)))} y={AY - 11} textAnchor="middle" fontSize="9.5" fontWeight="900" fill={color(i)}>{yearText(ev[i].y, lang)}</text>
        ))}
      </Stage>
      {(set.eras ?? []).some(({ from, to, l }) => L(l, lang).length * 4.6 >= X(to) - X(from) - 4) ? (
        <p className="sim-small-note sim-tl-eras">
          {(set.eras ?? []).map(({ l, color: c }, i) => (
            <span key={i}><i style={{ background: c ?? PALETTE[(i + 5) % PALETTE.length] }} />{L(l, lang)}</span>
          ))}
        </p>
      ) : null}
      <div className="sim-tl">
        {ev.map(({ l: label }, i) => (
          <button key={i} type="button" className={cn("sim-tl-row", picks.includes(i) && "is-active")} onClick={() => pick(i)}>
            <b style={{ color: color(i) }}>{range(i)}</b>
            <span>{L(label, lang)}</span>
          </button>
        ))}
      </div>
      {e?.n ? <Note>{L(e.n, lang)}</Note> : null}
      {items.length ? <Readouts items={items} /> : null}
    </ArtFrame>
  );
}
