"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Choice, Controls, Note, Readouts, Slider, Stage } from "../kit";
import { L, t } from "../labels";
import { num } from "../math-kit";

/**
 * Map and atmosphere calculators for geography problems.
 *   geocalc mode=scale       map distance × scale → distance on the ground
 *   geocalc mode=meridian    distance between two latitudes on one meridian (1° ≈ 111 km)
 *   geocalc mode=time        local time from longitude (15° = 1 hour) and time zones
 *   geocalc mode=height      temperature (−6 °C per km) and pressure (−1 mm per 10.5 m) with height
 */
const W = {
  scale: t("Map scale", "Քարտեզի մասշտաբ", "Масштаб карты"),
  meridian: t("Distance along a meridian", "Հեռավորությունը միջօրեականով", "Расстояние по меридиану"),
  time: t("Longitude and time", "Երկայնություն և ժամանակ", "Долгота и время"),
  height: t("Climbing a mountain", "Լեռ բարձրանալիս", "Подъём в горы"),
  hScale: t("Pick a scale and move the slider: the map shows the same distance smaller.", "Ընտրի՛ր մասշտաբը և շարժի՛ր սահիչը․ քարտեզը նույն հեռավորությունը ցույց է տալիս փոքրացված։", "Выбери масштаб и двигай ползунок: карта показывает то же расстояние в уменьшенном виде."),
  hMeridian: t("Two points on the same meridian: each degree of latitude between them is about 111 km.", "Երկու կետ նույն միջօրեականի վրա․ նրանց միջև լայնության յուրաքանչյուր աստիճանը մոտ 111 կմ է։", "Две точки на одном меридиане: каждый градус широты между ними — около 111 км."),
  hTime: t("The Earth turns 15° an hour from west to east, so to the east the clock is later.", "Երկիրը արևմուտքից արևելք պտտվում է ժամում 15°, ուստի դեպի արևելք ժամացույցն ավելի ուշ է ցույց տալիս։", "Земля поворачивается на 15° в час с запада на восток, поэтому к востоку время позже."),
  hHeight: t("Going up, the air gets colder by about 6 °C per km, and the pressure falls by about 1 mm per 10.5 m.", "Վեր բարձրանալիս օդը ցրտում է մոտ 6 °C-ով յուրաքանչյուր կմ-ում, իսկ ճնշումն ընկնում է մոտ 1 մմ-ով յուրաքանչյուր 10,5 մ-ում։", "При подъёме воздух холодает примерно на 6 °C на каждый км, а давление падает примерно на 1 мм на каждые 10,5 м."),
  onMap: t("On the map", "Քարտեզի վրա", "На карте"),
  ground: t("On the ground", "Տեղանքում", "На местности"),
  named: t("1 cm on the map is", "Քարտեզի 1 սմ-ը", "1 см на карте —"),
  latA: t("Latitude of A", "A-ի լայնությունը", "Широта A"),
  latB: t("Latitude of B", "B-ի լայնությունը", "Широта B"),
  diff: t("Difference", "Տարբերություն", "Разница"),
  dist: t("Distance", "Հեռավորություն", "Расстояние"),
  london: t("Time in London (0°)", "Ժամը Լոնդոնում (0°)", "Время в Лондоне (0°)"),
  lon: t("Longitude of the place", "Վայրի երկայնությունը", "Долгота места"),
  local: t("Local solar time", "Տեղական արեգակնային ժամանակ", "Местное солнечное время"),
  shift: t("Shift from London", "Տարբերությունը Լոնդոնից", "Сдвиг от Лондона"),
  next: t("the next day", "հաջորդ օրը", "следующий день"),
  prev: t("the day before", "նախորդ օրը", "предыдущий день"),
  zones: t("Standard time in cities", "Ստանդարտ ժամանակը քաղաքներում", "Поясное время в городах"),
  foot: t("Temperature at the foot", "Ջերմաստիճանը ստորոտում", "Температура у подножия"),
  pFoot: t("Pressure at the foot", "Ճնշումը ստորոտում", "Давление у подножия"),
  climb: t("Height of the climb", "Բարձրացման բարձրությունը", "Высота подъёма"),
  top: t("At the top", "Գագաթին", "На вершине"),
  colder: t("Colder by", "Ավելի ցուրտ է", "Холоднее на"),
  lower: t("Pressure lower by", "Ճնշումն ավելի ցածր է", "Давление ниже на"),
  mmHg: t("mm", "մմ", "мм"),
  km: t("km", "կմ", "км"),
  m: t("m", "մ", "м"),
  cm: t("cm", "սմ", "см"),
  N: t("N", "հ. լ.", "с. ш."),
  S: t("S", "հվ. լ.", "ю. ш."),
  E: t("E", "ա. ե.", "в. д."),
  Wl: t("W", "արմ. ե.", "з. д."),
};

const SCALES = [10000, 25000, 50000, 100000, 250000, 1000000];

const CITY_ZONES: Array<[ReturnType<typeof t>, number]> = [
  [t("Los Angeles", "Լոս Անջելես", "Лос-Анджелес"), -8],
  [t("New York", "Նյու Յորք", "Нью-Йорк"), -5],
  [t("London", "Լոնդոն", "Лондон"), 0],
  [t("Moscow", "Մոսկվա", "Москва"), 3],
  [t("Yerevan", "Երևան", "Ереван"), 4],
  [t("Beijing", "Պեկին", "Пекин"), 8],
  [t("Tokyo", "Տոկիո", "Токио"), 9],
];

const hhmm = (h: number) => {
  const m = Math.round((((h % 24) + 24) % 24) * 60);
  return `${String(Math.floor(m / 60) % 24).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
};

function ScaleCalc({ lang }: { lang: ArtLang }) {
  const [scale, setScale] = useState(50000);
  const [cm, setCm] = useState(4);
  const realM = (cm * scale) / 100;
  const unit = (mtr: number) => (mtr >= 1000 ? `${num(mtr / 1000, lang)} ${L(W.km, lang)}` : `${num(mtr, lang)} ${L(W.m, lang)}`);
  const px = 14;
  return (
    <>
      <Choice value={String(scale)} options={SCALES.map((s) => [String(s), `1 : ${num(s, lang)}`] as [string, string])} onChange={(v) => setScale(Number(v))} />
      <Stage w={320} h={110} label={L(W.scale, lang)} bg="#f0fdf4">
        <path d="M0,70 C60,50 110,90 170,64 C230,40 270,72 320,58 L320,110 L0,110 Z" fill="#bbf7d0" />
        <path d="M0,40 C80,46 140,22 220,30 C270,34 300,20 320,24" fill="none" stroke="#38bdf8" strokeWidth="4" />
        <circle cx="20" cy="54" r="6" fill="#e11d48" />
        <circle cx={20 + cm * px} cy="54" r="6" fill="#e11d48" />
        <line x1="20" y1="54" x2={20 + cm * px} y2="54" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="5 3" />
        {Array.from({ length: 21 }, (_, k) => (
          <g key={k}>
            <line x1={20 + k * px} x2={20 + k * px} y1="86" y2={k % 5 ? 92 : 96} stroke="#334155" strokeWidth="1.2" />
            {k % 5 === 0 ? <text x={20 + k * px} y="106" textAnchor="middle" fontSize="8" fontWeight="800" fill="#334155">{k}</text> : null}
          </g>
        ))}
        <line x1="20" x2={20 + 20 * px} y1="86" y2="86" stroke="#334155" strokeWidth="1.4" />
        <text x="305" y="89" fontSize="8" fontWeight="800" fill="#334155">{L(W.cm, lang)}</text>
      </Stage>
      <Controls>
        <Slider label={L(W.onMap, lang)} value={cm} min={0.5} max={20} step={0.5} unit={L(W.cm, lang)} lang={lang} onChange={setCm} />
      </Controls>
      <Readouts
        items={[
          [L(W.named, lang), unit(scale / 100), "#4f46e5"],
          [L(W.onMap, lang), `${num(cm, lang)} ${L(W.cm, lang)}`, "#e11d48"],
          [L(W.ground, lang), unit(realM), "#10b981"],
        ]}
      />
    </>
  );
}

function MeridianCalc({ lang }: { lang: ArtLang }) {
  const [a, setA] = useState(52);
  const [b, setB] = useState(37);
  const lat = (v: number) => `${num(Math.abs(v), lang)}° ${L(v >= 0 ? W.N : W.S, lang)}`;
  const d = Math.abs(a - b);
  const cx = 110, cy = 100, r = 82;
  const pt = (v: number) => [cx + r * Math.cos((v * Math.PI) / 180), cy - r * Math.sin((v * Math.PI) / 180)];
  const [ax, ay] = pt(a), [bx, by] = pt(b);
  return (
    <>
      <Stage w={320} h={200} label={L(W.meridian, lang)} bg="#eff6ff">
        <circle cx={cx} cy={cy} r={r} fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5" />
        {[-60, -30, 30, 60].map((v) => <line key={v} x1={cx - r * Math.cos((v * Math.PI) / 180)} x2={pt(v)[0]} y1={pt(v)[1]} y2={pt(v)[1]} stroke="#93c5fd" strokeDasharray="3 3" />)}
        <line x1={cx - r} x2={cx + r} y1={cy} y2={cy} stroke="#1d4ed8" strokeWidth="1.5" />
        <path d={`M${cx},${cy - r} A${r},${r} 0 0 1 ${cx},${cy + r}`} fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        <path d={`M${ax},${ay} A${r},${r} 0 0 ${a > b ? 1 : 0} ${bx},${by}`} fill="none" stroke="#e11d48" strokeWidth="5" />
        <line x1={cx} y1={cy} x2={ax} y2={ay} stroke="#64748b" strokeDasharray="3 3" />
        <line x1={cx} y1={cy} x2={bx} y2={by} stroke="#64748b" strokeDasharray="3 3" />
        <circle cx={ax} cy={ay} r="5" fill="#e11d48" />
        <circle cx={bx} cy={by} r="5" fill="#4f46e5" />
        <text x={ax + 8} y={ay} fontSize="10" fontWeight="900" fill="#e11d48">A {lat(a)}</text>
        <text x={bx + 8} y={by + 10} fontSize="10" fontWeight="900" fill="#4f46e5">B {lat(b)}</text>
        <text x={cx - r - 4} y={cy - 4} fontSize="9" fontWeight="800" fill="#1d4ed8">0°</text>
        <text x="316" y="174" textAnchor="end" fontSize="11" fontWeight="900" fill="#334155">{`${num(d, lang)}° × 111 ${L(W.km, lang)}`}</text>
        <text x="316" y="192" textAnchor="end" fontSize="13" fontWeight="900" fill="#10b981">{`≈ ${num(d * 111, lang)} ${L(W.km, lang)}`}</text>
      </Stage>
      <Controls>
        <Slider label={L(W.latA, lang)} value={a} min={-90} max={90} display={lat(a)} lang={lang} onChange={setA} />
        <Slider label={L(W.latB, lang)} value={b} min={-90} max={90} display={lat(b)} lang={lang} onChange={setB} />
      </Controls>
      <Readouts items={[[L(W.diff, lang), `${num(d, lang)}°`, "#f59e0b"], [L(W.dist, lang), `≈ ${num(d * 111, lang)} ${L(W.km, lang)}`, "#10b981"]]} />
    </>
  );
}

function TimeCalc({ lang }: { lang: ArtLang }) {
  const [utc, setUtc] = useState(12);
  const [lon, setLon] = useState(60);
  const local = utc + lon / 15;
  const day = local >= 24 ? L(W.next, lang) : local < 0 ? L(W.prev, lang) : "";
  const lonTxt = (v: number) => (v === 0 ? "0°" : `${num(Math.abs(v), lang)}° ${L(v > 0 ? W.E : W.Wl, lang)}`);
  const X = (v: number) => 20 + ((v + 180) / 360) * 280;
  const sunLon = (12 - utc) * 15;
  const wrap = (v: number) => ((((v + 180) % 360) + 360) % 360) - 180;
  return (
    <>
      <Stage w={320} h={130} label={L(W.time, lang)} bg="#f8fafc">
        <rect x="20" y="30" width="280" height="50" rx="6" fill="#bfdbfe" />
        {Array.from({ length: 25 }, (_, k) => -180 + k * 15).map((v) => (
          <line key={v} x1={X(v)} x2={X(v)} y1="30" y2="80" stroke={v === 0 ? "#1d4ed8" : "#93c5fd"} strokeWidth={v === 0 ? 2 : 0.8} />
        ))}
        <circle cx={X(wrap(sunLon))} cy="18" r="9" fill="#facc15" stroke="#f59e0b" strokeWidth="2" />
        <text x={X(wrap(sunLon))} y="94" textAnchor="middle" fontSize="8" fontWeight="800" fill="#b45309">12:00</text>
        <line x1={X(lon)} x2={X(lon)} y1="26" y2="84" stroke="#e11d48" strokeWidth="3" />
        <text x={X(lon)} y="108" textAnchor="middle" fontSize="10" fontWeight="900" fill="#e11d48">{`${lonTxt(lon)} · ${hhmm(local)}`}</text>
        <text x={X(0)} y="122" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#1d4ed8">{`0° · ${hhmm(utc)}`}</text>
        <text x="20" y="122" fontSize="8" fontWeight="800" fill="#64748b">180°</text>
        <text x="300" y="122" textAnchor="end" fontSize="8" fontWeight="800" fill="#64748b">180°</text>
      </Stage>
      <Controls>
        <Slider label={L(W.london, lang)} value={utc} min={0} max={23} display={hhmm(utc)} lang={lang} onChange={setUtc} />
        <Slider label={L(W.lon, lang)} value={lon} min={-180} max={180} step={15} display={lonTxt(lon)} lang={lang} onChange={setLon} />
      </Controls>
      <Readouts
        items={[
          [L(W.shift, lang), `${lon >= 0 ? "+" : "−"}${num(Math.abs(lon / 15), lang)} h`, "#f59e0b"],
          [L(W.local, lang), `${hhmm(local)}${day ? `, ${day}` : ""}`, "#e11d48"],
        ]}
      />
      <p className="math-chart-title">{L(W.zones, lang)}</p>
      <div className="art-chips">
        {CITY_ZONES.map(([name, z], k) => (
          <span key={k} className="art-chip">{`${L(name, lang)} ${hhmm(utc + z)}`}</span>
        ))}
      </div>
    </>
  );
}

function HeightCalc({ lang }: { lang: ArtLang }) {
  const [t0, setT0] = useState(20);
  const [p0, setP0] = useState(720);
  const [h, setH] = useState(1100);
  const tTop = t0 - (6 * h) / 1000;
  const pTop = p0 - h / 10.5;
  const peakY = 180 - (h / 5000) * 150;
  const deg = (v: number) => `${v > 0 ? "+" : v < 0 ? "−" : ""}${num(Math.abs(Math.round(v * 10) / 10), lang)} °C`;
  return (
    <>
      <Stage w={320} h={200} label={L(W.height, lang)} bg="#eff6ff">
        <path d={`M20,180 L160,${peakY} L300,180 Z`} fill="#a3a3a3" stroke="#57534e" strokeWidth="1.5" />
        {h > 2500 ? <path d={`M132,${peakY + (180 - peakY) * 0.2} L160,${peakY} L188,${peakY + (180 - peakY) * 0.2} Z`} fill="#fff" /> : null}
        <rect x="0" y="180" width="320" height="20" fill="#86efac" />
        <circle cx="160" cy={peakY} r="5" fill="#e11d48" />
        <text x="172" y={Math.max(14, peakY)} fontSize="10" fontWeight="900" fill="#e11d48">{`${deg(tTop)} · ${num(Math.round(pTop), lang)} ${L(W.mmHg, lang)}`}</text>
        <text x="24" y="194" fontSize="10" fontWeight="900" fill="#166534">{`${deg(t0)} · ${num(p0, lang)} ${L(W.mmHg, lang)}`}</text>
        <line x1="310" x2="310" y1="180" y2={peakY} stroke="#334155" strokeWidth="1.2" />
        <text x="306" y={(180 + peakY) / 2} textAnchor="end" fontSize="9" fontWeight="800" fill="#334155">{`${num(h, lang)} ${L(W.m, lang)}`}</text>
      </Stage>
      <Controls>
        <Slider label={L(W.foot, lang)} value={t0} min={-10} max={35} display={deg(t0)} lang={lang} onChange={setT0} />
        <Slider label={L(W.pFoot, lang)} value={p0} min={600} max={770} step={5} unit={L(W.mmHg, lang)} digits={0} lang={lang} onChange={setP0} />
        <Slider label={L(W.climb, lang)} value={h} min={0} max={5000} step={50} unit={L(W.m, lang)} digits={0} lang={lang} onChange={setH} />
      </Controls>
      <Readouts
        items={[
          [L(W.colder, lang), `${num(Math.round((6 * h) / 100) / 10, lang)} °C`, "#4f46e5"],
          [L(W.lower, lang), `≈ ${num(Math.round(h / 10.5), lang)} ${L(W.mmHg, lang)}`, "#f59e0b"],
          [L(W.top, lang), `${deg(tTop)}, ${num(Math.round(pTop), lang)} ${L(W.mmHg, lang)}`, "#e11d48"],
        ]}
      />
    </>
  );
}

const PARTS = {
  scale: [W.scale, W.hScale, ScaleCalc],
  meridian: [W.meridian, W.hMeridian, MeridianCalc],
  time: [W.time, W.hTime, TimeCalc],
  height: [W.height, W.hHeight, HeightCalc],
} as const;

export default function GeoCalc({ spec, lang }: SimProps) {
  const mode = (spec.opts.mode ?? "scale") as keyof typeof PARTS;
  const [title, hint, Body] = PARTS[mode] ?? PARTS.scale;
  return (
    <ArtFrame kind="experiment" title={L(title, lang)} body={spec.body || L(hint, lang)}>
      <Body lang={lang} />
      {mode === "height" ? <Note>{L(t("Example: Yerevan is at about 1,000 m and Aragats at 4,090 m, so the summit is about 18 °C colder.", "Օրինակ՝ Երևանը մոտ 1000 մ է, Արագածը՝ 4090 մ, ուստի գագաթին մոտ 18 °C ավելի ցուրտ է։", "Пример: Ереван на высоте около 1000 м, Арагац — 4090 м, поэтому на вершине примерно на 18 °C холоднее."), lang)}</Note> : null}
    </ArtFrame>
  );
}
