"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { CITIES } from "../data/climate";
import { Choice, Note, Readouts, Stage } from "../kit";
import { L, t } from "../labels";
import { num } from "../math-kit";

/**
 * A climate graph: monthly temperature as a line and precipitation as bars.
 *   climate city=yerevan,gyumri      one or more places from ../data/climate; chips switch between them
 * All places in one graph share the same axes, so they can be compared by eye.
 */
const W = {
  title: t("Climate graph", "Կլիմայի գրաֆիկ", "Климатограмма"),
  hint: t("The red line is the average temperature of each month, the blue bars the precipitation. Tap a month.", "Կարմիր գիծը ամսական միջին ջերմաստիճանն է, կապույտ սյունակները՝ տեղումները։ Հպի՛ր ամսին։", "Красная линия — средняя температура месяца, синие столбики — осадки. Нажми на месяц."),
  warm: t("Warmest month", "Ամենատաք ամիսը", "Самый тёплый месяц"),
  cold: t("Coldest month", "Ամենացուրտ ամիսը", "Самый холодный месяц"),
  range: t("Annual range", "Տարեկան տատանում", "Годовая амплитуда"),
  rain: t("Precipitation a year", "Տարեկան տեղումներ", "Осадки за год"),
  month: t("{m}: {t} °C, {p} mm of precipitation.", "{m}․ {t} °C, {p} մմ տեղումներ։", "{m}: {t} °C, {p} мм осадков."),
  south: t("Southern Hemisphere: the seasons are the other way round.", "Հարավային կիսագունդ․ եղանակները հակառակն են։", "Южное полушарие: времена года наоборот."),
  mm: t("mm", "մմ", "мм"),
  months: [
    t("Jan", "Հնվ", "Янв"), t("Feb", "Փտր", "Фев"), t("Mar", "Մրտ", "Мар"), t("Apr", "Ապր", "Апр"), t("May", "Մյս", "Май"), t("Jun", "Հնս", "Июн"),
    t("Jul", "Հլս", "Июл"), t("Aug", "Օգս", "Авг"), t("Sep", "Սպտ", "Сен"), t("Oct", "Հկտ", "Окт"), t("Nov", "Նյմ", "Ноя"), t("Dec", "Դկտ", "Дек"),
  ],
  full: [
    t("January", "Հունվար", "Январь"), t("February", "Փետրվար", "Февраль"), t("March", "Մարտ", "Март"), t("April", "Ապրիլ", "Апрель"), t("May", "Մայիս", "Май"), t("June", "Հունիս", "Июнь"),
    t("July", "Հուլիս", "Июль"), t("August", "Օգոստոս", "Август"), t("September", "Սեպտեմբեր", "Сентябрь"), t("October", "Հոկտեմբեր", "Октябрь"), t("November", "Նոյեմբեր", "Ноябрь"), t("December", "Դեկտեմբեր", "Декабрь"),
  ],
};

const RED = "#e11d48", BLUE = "#38bdf8";

export default function Climate({ spec, lang }: SimProps) {
  const ids = (spec.opts.city ?? "yerevan").split(",").filter((c) => CITIES[c]);
  const [id, setId] = useState(ids[0] ?? "yerevan");
  const [sel, setSel] = useState<number | null>(null);
  const city = CITIES[id];
  if (!city) return <pre className="art-unknown">climate {spec.opts.city}</pre>;
  const all = ids.map((c) => CITIES[c]);
  const tLo = Math.min(-10, Math.floor(Math.min(...all.flatMap((c) => c.t)) / 10) * 10);
  const tHi = Math.max(30, Math.ceil(Math.max(...all.flatMap((c) => c.t)) / 10) * 10);
  const pHi = Math.max(100, Math.ceil(Math.max(...all.flatMap((c) => c.p)) / 100) * 100);
  const WW = 340, HH = 216, PL = 30, PR = 34, PT = 20, PB = 24;
  const X = (i: number) => PL + ((i + 0.5) * (WW - PL - PR)) / 12;
  const YT = (v: number) => PT + ((tHi - v) / (tHi - tLo)) * (HH - PT - PB);
  const YP = (v: number) => HH - PB - (v / pHi) * (HH - PT - PB);
  const bw = ((WW - PL - PR) / 12) * 0.66;
  const tTicks = Array.from({ length: (tHi - tLo) / 10 + 1 }, (_, k) => tLo + k * 10);
  const pTicks = [0, pHi / 2, pHi];
  const deg = (v: number) => `${num(Math.round(v * 10) / 10, lang)} °C`;
  const hot = city.t.indexOf(Math.max(...city.t)), cold = city.t.indexOf(Math.min(...city.t));
  const total = city.p.reduce((s, v) => s + v, 0);
  const line = city.t.map((v, i) => `${i ? "L" : "M"}${X(i).toFixed(1)},${YT(v).toFixed(1)}`).join("");
  return (
    <ArtFrame kind="look" title={`${L(W.title, lang)}: ${L(city.name, lang)}`} body={spec.body || L(W.hint, lang)}>
      {ids.length > 1 ? <Choice value={id} options={ids.map((c) => [c, L(CITIES[c].name, lang)] as [string, string])} onChange={(v) => { setId(v); setSel(null); }} /> : null}
      <Stage w={WW} h={HH} label={L(city.name, lang)}>
        {tTicks.map((v) => (
          <g key={v}>
            <line x1={PL} x2={WW - PR} y1={YT(v)} y2={YT(v)} stroke={v === 0 ? "#94a3b8" : "#e2e8f0"} strokeWidth={v === 0 ? 1.4 : 1} />
            <text x={PL - 4} y={YT(v) + 3} textAnchor="end" fontSize="9" fontWeight="800" fill={RED}>{v}°</text>
          </g>
        ))}
        {pTicks.map((v) => <text key={v} x={WW - PR + 4} y={YP(v) + 3} fontSize="9" fontWeight="800" fill="#0284c7">{v}</text>)}
        <text x={WW - PR + 4} y={PT - 9} fontSize="8" fontWeight="800" fill="#0284c7">{L(W.mm, lang)}</text>
        {city.p.map((v, i) => (
          <rect key={i} x={X(i) - bw / 2} y={YP(v)} width={bw} height={HH - PB - YP(v)} rx="2" fill={BLUE} opacity={sel == null || sel === i ? 0.85 : 0.4} />
        ))}
        <path d={line} fill="none" stroke={RED} strokeWidth="2.6" strokeLinejoin="round" />
        {city.t.map((v, i) => <circle key={i} cx={X(i)} cy={YT(v)} r={sel === i ? 5 : 3.2} fill={RED} stroke="#fff" strokeWidth="1.2" />)}
        {W.months.map((m, i) => (
          <g key={i} onClick={() => setSel(i)} style={{ cursor: "pointer" }}>
            <rect x={X(i) - (WW - PL - PR) / 24} y={PT} width={(WW - PL - PR) / 12} height={HH - PT} fill="transparent" />
            <text x={X(i)} y={HH - 8} textAnchor="middle" fontSize="8.5" fontWeight={sel === i ? 900 : 700} fill={sel === i ? RED : "#334155"}>{L(m, lang)}</text>
          </g>
        ))}
      </Stage>
      <Note>
        {sel != null
          ? L(W.month, lang).replace("{m}", L(W.full[sel], lang)).replace("{t}", num(city.t[sel], lang)).replace("{p}", num(city.p[sel], lang))
          : `${L(city.about, lang)}${city.south ? ` ${L(W.south, lang)}` : ""}`}
      </Note>
      <Readouts
        items={[
          [L(W.warm, lang), `${L(W.full[hot], lang)}, ${deg(city.t[hot])}`, RED],
          [L(W.cold, lang), `${L(W.full[cold], lang)}, ${deg(city.t[cold])}`, "#4f46e5"],
          [L(W.range, lang), deg(city.t[hot] - city.t[cold]), "#f59e0b"],
          [L(W.rain, lang), `${num(total, lang)} ${L(W.mm, lang)}`, "#0284c7"],
        ]}
      />
    </ArtFrame>
  );
}
