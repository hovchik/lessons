"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { Tr } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Choice, Note, Readouts, Stage } from "../kit";
import { L, t } from "../labels";
import { COLORS, num } from "../math-kit";

/**
 * Reading data: one data set shown as a bar chart, a pictogram, a pie chart or a line graph.
 *   chart set=fruits [mode=bar|picto|pie|line] [per=2]
 * Sets: fruits, weather, transport, pets, temps, books, day.
 */
const W = {
  title: t("Look closely: reading a chart", "Ուշադիր նայի՛ր․ դիագրամի ընթերցում", "Рассмотри: читаем диаграмму"),
  hint: t("Tap a bar or a slice to read its value. Switch the view: the data stay the same, only the picture changes.", "Սեղմի՛ր սյունակին կամ հատվածին՝ արժեքը կարդալու համար։ Փոխի՛ր տեսքը․ տվյալները նույնն են, փոխվում է միայն նկարը։", "Нажми на столбик или сектор, чтобы узнать значение. Меняй вид: данные те же, меняется только картинка."),
  bar: t("Bar chart", "Սյունակային", "Столбчатая"),
  picto: t("Pictogram", "Պատկերագիր", "Пиктограмма"),
  pie: t("Pie chart", "Շրջանային", "Круговая"),
  line: t("Line graph", "Գծային", "Линейная"),
  total: t("Total", "Ընդամենը", "Всего"),
  most: t("Most", "Ամենաշատը", "Больше всего"),
  mean: t("Average", "Միջին", "Среднее"),
  share: t("{v} of {n} is {p}% of the whole.", "{n}-ից {v}-ը ամբողջի {p}%-ն է։", "{v} из {n} — это {p}% от всего."),
  key: t("One picture = {k}", "Մեկ նկար = {k}", "Один значок = {k}"),
  rise: t("From {a} to {b} the value went {dir} by {d}.", "{a}-ից մինչև {b} արժեքը {dir} {d}-ով։", "С {a} по {b} значение {dir} на {d}."),
  flat: t("From {a} to {b} the value did not change.", "{a}-ից մինչև {b} արժեքը չփոխվեց։", "С {a} по {b} значение не изменилось."),
  up: t("up", "աճեց", "выросло"),
  down: t("down", "նվազեց", "уменьшилось"),
};

type DataSet = { title: Tr; unit?: Tr; icon: string; series?: boolean; rows: Array<[Tr, number]> };

const SETS: Record<string, DataSet> = {
  fruits: {
    title: t("Favourite fruit of the pupils in a class", "Դասարանի աշակերտների սիրելի միրգը", "Любимый фрукт учеников класса"),
    icon: "🍎",
    rows: [[t("Apple", "Խնձոր", "Яблоко"), 8], [t("Apricot", "Ծիրան", "Абрикос"), 6], [t("Grapes", "Խաղող", "Виноград"), 5], [t("Pear", "Տանձ", "Груша"), 3], [t("Banana", "Բանան", "Банан"), 4]],
  },
  weather: {
    title: t("Weather in April (days)", "Եղանակն ապրիլին (օրեր)", "Погода в апреле (дни)"),
    icon: "☀️",
    rows: [[t("Sunny", "Արևոտ", "Солнечно"), 12], [t("Cloudy", "Ամպամած", "Облачно"), 9], [t("Rainy", "Անձրևոտ", "Дождь"), 7], [t("Snow", "Ձյուն", "Снег"), 2]],
  },
  transport: {
    title: t("How 30 pupils get to school", "Ինչպես են 30 աշակերտները գալիս դպրոց", "Как 30 учеников добираются до школы"),
    icon: "🚶",
    rows: [[t("On foot", "Ոտքով", "Пешком"), 12], [t("Bus", "Ավտոբուս", "Автобус"), 8], [t("Car", "Մեքենա", "Машина"), 6], [t("Bike", "Հեծանիվ", "Велосипед"), 3], [t("Metro", "Մետրո", "Метро"), 1]],
  },
  pets: {
    title: t("Pets of the pupils", "Աշակերտների ընտանի կենդանիները", "Домашние животные учеников"),
    icon: "🐾",
    rows: [[t("Cat", "Կատու", "Кошка"), 10], [t("Dog", "Շուն", "Собака"), 8], [t("Fish", "Ձուկ", "Рыбки"), 4], [t("Parrot", "Թութակ", "Попугай"), 2]],
  },
  temps: {
    title: t("Temperature at noon during a week (°C)", "Կեսօրվա ջերմաստիճանը մեկ շաբաթում (°C)", "Температура в полдень за неделю (°C)"),
    icon: "🌡️",
    series: true,
    rows: [[t("Mon", "Երկ", "Пн"), 14], [t("Tue", "Երք", "Вт"), 16], [t("Wed", "Չրք", "Ср"), 13], [t("Thu", "Հնգ", "Чт"), 18], [t("Fri", "Ուրբ", "Пт"), 21], [t("Sat", "Շբթ", "Сб"), 19], [t("Sun", "Կիր", "Вс"), 17]],
  },
  books: {
    title: t("Books read by the class each month", "Դասարանի կարդացած գրքերը ըստ ամիսների", "Книги, прочитанные классом за месяц"),
    icon: "📚",
    series: true,
    rows: [[t("Sep", "Սեպ", "Сен"), 20], [t("Oct", "Հոկ", "Окт"), 25], [t("Nov", "Նոյ", "Ноя"), 18], [t("Dec", "Դեկ", "Дек"), 30], [t("Jan", "Հուն", "Янв"), 22]],
  },
  day: {
    title: t("A pupil's day: 24 hours", "Աշակերտի օրը․ 24 ժամ", "День ученика: 24 часа"),
    icon: "⏰",
    rows: [[t("Sleep", "Քուն", "Сон"), 9], [t("School", "Դպրոց", "Школа"), 6], [t("Homework", "Տնային", "Уроки"), 2], [t("Play", "Խաղ", "Игры"), 3], [t("Meals", "Սնունդ", "Еда"), 2], [t("Other", "Այլ", "Другое"), 2]],
  },
};
export const CHART_SETS = Object.keys(SETS);

const PALETTE = ["#4f46e5", "#f59e0b", "#10b981", "#e11d48", "#0ea5e9", "#8b5cf6", "#84cc16"];

export default function Chart({ spec, lang }: SimProps) {
  const set = SETS[spec.opts.set ?? "fruits"] ?? SETS.fruits;
  const views = set.series ? (["line", "bar"] as const) : (["bar", "picto", "pie"] as const);
  const start = (views as readonly string[]).includes(spec.opts.mode ?? "") ? (spec.opts.mode as (typeof views)[number]) : views[0];
  const [view, setView] = useState<string>(start);
  const [sel, setSel] = useState<number | null>(null);
  const vals = set.rows.map((r) => r[1]);
  const total = vals.reduce((s, v) => s + v, 0);
  const max = Math.max(...vals);
  const iMax = vals.indexOf(max);
  const per = Number(spec.opts.per ?? (max > 12 ? 2 : 1));
  const name = (i: number) => L(set.rows[i][0], lang);
  const top = Math.ceil(max / 5) * 5 + (set.series ? 5 : 0);
  const lo = set.series ? Math.max(0, Math.floor((Math.min(...vals) - 5) / 5) * 5) : 0;
  const n = vals.length;
  const PL = 30, PR = 10, PT = 12, PB = 30, WW = 340, HH = 190;
  const X = (i: number) => PL + ((i + 0.5) * (WW - PL - PR)) / n;
  const Y = (v: number) => HH - PB - ((v - lo) / (top - lo)) * (HH - PT - PB);
  const ticks = Array.from({ length: 6 }, (_, k) => lo + ((top - lo) * k) / 5);
  const bw = Math.min(42, ((WW - PL - PR) / n) * 0.62);
  let note = "";
  if (sel != null) {
    if (set.series && sel > 0) {
      const d = vals[sel] - vals[sel - 1];
      note = L(d ? W.rise : W.flat, lang).replace("{a}", name(sel - 1)).replace("{b}", name(sel)).replace("{dir}", L(d > 0 ? W.up : W.down, lang)).replace("{d}", String(Math.abs(d)));
    } else if (!set.series) note = L(W.share, lang).replace("{v}", String(vals[sel])).replace("{n}", String(total)).replace("{p}", num(Math.round((vals[sel] / total) * 1000) / 10, lang));
  }
  return (
    <ArtFrame kind="look" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <p className="math-chart-title">{L(set.title, lang)}</p>
      {view === "pie" ? (
        <Stage w={340} h={190} label={L(set.title, lang)}>
          {(() => {
            let acc = 0;
            return vals.map((v, i) => {
              const a0 = (acc / total) * 2 * Math.PI - Math.PI / 2;
              acc += v;
              const a1 = (acc / total) * 2 * Math.PI - Math.PI / 2;
              const r = sel === i ? 82 : 76, cx = 105, cy = 95;
              const p = (a: number) => `${(cx + r * Math.cos(a)).toFixed(2)} ${(cy + r * Math.sin(a)).toFixed(2)}`;
              const mid = (a0 + a1) / 2;
              return (
                <g key={i} onClick={() => setSel(i)} style={{ cursor: "pointer" }}>
                  <path d={`M${cx} ${cy}L${p(a0)}A${r} ${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${p(a1)}Z`} fill={PALETTE[i % PALETTE.length]} stroke="#fff" strokeWidth="2" />
                  <text x={(cx + r * 0.62 * Math.cos(mid)).toFixed(2)} y={(cy + r * 0.62 * Math.sin(mid) + 4).toFixed(2)} textAnchor="middle" className="sim-tag is-plain" fill="#fff">{v}</text>
                </g>
              );
            });
          })()}
          {vals.map((v, i) => (
            <g key={`k${i}`} onClick={() => setSel(i)} style={{ cursor: "pointer" }}>
              <rect x={205} y={20 + i * 22} width={14} height={14} rx="3" fill={PALETTE[i % PALETTE.length]} />
              <text x={225} y={31 + i * 22} className="sim-tag" fill={sel === i ? COLORS.d : COLORS.line}>{`${name(i)} · ${Math.round((v / total) * 100)}%`}</text>
            </g>
          ))}
        </Stage>
      ) : view === "picto" ? (
        <div className="math-picto">
          {vals.map((v, i) => (
            <button key={i} type="button" className={`math-picto-row${sel === i ? " is-active" : ""}`} onClick={() => setSel(i)}>
              <span>{name(i)}</span>
              <span aria-label={String(v)}>
                {Array.from({ length: Math.floor(v / per) }, () => set.icon).join("")}
                {v % per ? <span className="math-picto-half">{set.icon}</span> : null}
              </span>
            </button>
          ))}
          <p className="sim-small-note">{L(W.key, lang).replace("{k}", String(per))}</p>
        </div>
      ) : (
        <Stage w={WW} h={HH} label={L(set.title, lang)}>
          {ticks.map((v) => (
            <g key={v}>
              <line x1={PL} x2={WW - PR} y1={Y(v)} y2={Y(v)} stroke="#eef0f6" />
              <text x={PL - 4} y={Y(v) + 3} textAnchor="end" className="sim-axis">{num(v, lang)}</text>
            </g>
          ))}
          <line x1={PL} x2={PL} y1={PT} y2={HH - PB} stroke="#94a3b8" />
          <line x1={PL} x2={WW - PR} y1={HH - PB} y2={HH - PB} stroke="#94a3b8" />
          {view === "line" ? (
            <polyline points={vals.map((v, i) => `${X(i).toFixed(1)},${Y(v).toFixed(1)}`).join(" ")} fill="none" stroke={COLORS.a} strokeWidth="3" strokeLinejoin="round" />
          ) : null}
          {vals.map((v, i) => (
            <g key={i} onClick={() => setSel(i)} style={{ cursor: "pointer" }}>
              {view === "bar" ? <rect x={X(i) - bw / 2} y={Y(v)} width={bw} height={HH - PB - Y(v)} rx="5" fill={sel === i ? COLORS.d : PALETTE[i % PALETTE.length]} /> : (
                <>
                  <rect x={X(i) - 14} y={PT} width={28} height={HH - PT - PB} fill="transparent" />
                  <circle cx={X(i)} cy={Y(v)} r={sel === i ? 7 : 5} fill={sel === i ? COLORS.d : COLORS.a} stroke="#fff" strokeWidth="2" />
                </>
              )}
              <text x={X(i)} y={Y(v) - 6} textAnchor="middle" className="sim-tag" fill={sel === i ? COLORS.d : COLORS.line}>{v}</text>
              <text x={X(i)} y={HH - PB + 13} textAnchor="middle" className="sim-axis">{name(i).slice(0, 9)}</text>
            </g>
          ))}
        </Stage>
      )}
      <Readouts
        items={[
          ...(set.series ? [] : [[L(W.total, lang), num(total, lang)] as [string, string]]),
          [L(W.most, lang), `${name(iMax)}: ${max}`, COLORS.a],
          [L(W.mean, lang), num(Math.round((total / n) * 10) / 10, lang)],
        ]}
      />
      {note ? <Note>{note}</Note> : null}
      <Choice value={view} options={views.map((v) => [v, L(W[v], lang)] as [string, string])} onChange={(v) => { setView(v); setSel(null); }} />
    </ArtFrame>
  );
}
