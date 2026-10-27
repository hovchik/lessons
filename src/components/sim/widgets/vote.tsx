"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Choice, Readouts, Slider, Stage } from "../kit";
import { L, t } from "../labels";
import { COLORS } from "../math-kit";

/**
 * Electoral systems: the same votes in ten districts turned into ten seats, either district by
 * district (majoritarian) or by each party's share of all votes (proportional, with a threshold).
 */
const W = {
  title: t("Experiment: same votes, different parliament", "Փորձ․ նույն ձայները՝ տարբեր խորհրդարան", "Опыт: те же голоса — другой парламент"),
  hint: t("A country has 10 districts and 10 seats. The voters do not change; only the rule that turns votes into seats does. Compare who gets the seats and how many votes are left without a deputy.", "Երկիրն ունի 10 ընտրատարածք և 10 մանդատ։ Ընտրողները չեն փոխվում, փոխվում է միայն այն կանոնը, որը ձայները վերածում է մանդատների։ Համեմատի՛ր, թե ով է ստանում մանդատները, և քանի ձայն է մնում առանց պատգամավորի։", "В стране 10 округов и 10 мест. Избиратели не меняются, меняется только правило, превращающее голоса в места. Сравни, кто получает места и сколько голосов остаётся без депутата."),
  maj: t("Majoritarian", "Մեծամասնական", "Мажоритарная"),
  prop: t("Proportional", "Համամասնական", "Пропорциональная"),
  threshold: t("Threshold", "Անցողիկ շեմ", "Проходной барьер"),
  districts: t("10 districts", "10 ընտրատարածք", "10 округов"),
  votes: t("Votes", "Ձայներ", "Голоса"),
  seats: t("Seats", "Մանդատներ", "Места"),
  wasted: t("Votes without a deputy", "Առանց պատգամավորի մնացած ձայներ", "Голоса без депутата"),
  party: t("Party", "Կուսակցություն", "Партия"),
  majNote: t("Party A won {a}% of the votes but {s}% of the seats. Party C, chosen by almost a quarter of the voters, came second or third everywhere and got nothing.", "A կուսակցությունը ստացավ ձայների {a}%-ը, բայց մանդատների {s}%-ը։ C կուսակցությունը, որին ընտրել էր ընտրողների գրեթե քառորդը, ամենուր երկրորդ կամ երրորդն էր և ոչինչ չստացավ։", "Партия A получила {a}% голосов, но {s}% мест. Партия C, за которую голосовала почти четверть избирателей, везде была второй или третьей и не получила ничего."),
  propNote: t("Seats follow the votes closely. A threshold keeps very small parties out, which makes a parliament easier to work with but leaves their voters without a deputy.", "Մանդատները մոտավորապես համապատասխանում են ձայներին։ Շեմը դուրս է թողնում շատ փոքր կուսակցություններին, ինչը հեշտացնում է խորհրդարանի աշխատանքը, բայց նրանց ընտրողներին թողնում է առանց պատգամավորի։", "Места близко следуют за голосами. Барьер не пускает очень маленькие партии: с таким парламентом легче работать, но их избиратели остаются без депутата."),
  dOut: t("Party D ({d}%) is below the threshold: its seat goes to a bigger party.", "D կուսակցությունը ({d}%) շեմից ցածր է․ նրա մանդատն անցնում է ավելի մեծ կուսակցության։", "Партия D ({d}%) ниже барьера: её место уходит более крупной партии."),
};

const PARTIES = ["A", "B", "C", "D"];
const PC = [COLORS.a, COLORS.b, COLORS.c, COLORS.d];
/** Percentages per district for parties A–D. */
const DISTRICTS = [
  [45, 28, 22, 5], [42, 33, 20, 5], [40, 30, 26, 4], [44, 26, 25, 5], [39, 34, 23, 4],
  [41, 31, 24, 4], [43, 29, 22, 6], [30, 44, 22, 4], [28, 40, 28, 4], [31, 42, 23, 4],
];
const TOTAL = PARTIES.map((_, i) => DISTRICTS.reduce((s, d) => s + d[i], 0) / DISTRICTS.length);

/** Largest-remainder share-out of 10 seats among the parties over the threshold. */
function proportional(th: number) {
  const ok = TOTAL.map((v) => v >= th);
  const sum = TOTAL.reduce((s, v, i) => s + (ok[i] ? v : 0), 0);
  const q = TOTAL.map((v, i) => (ok[i] ? (v / sum) * 10 : 0));
  const seats = q.map(Math.floor);
  const order = q.map((v, i) => [v - Math.floor(v), i] as const).filter(([, i]) => ok[i]).sort((a, b) => b[0] - a[0]);
  const left = 10 - seats.reduce((s, v) => s + v, 0);
  for (let k = 0; k < left; k++) seats[order[k][1]]++;
  return { seats, wasted: TOTAL.reduce((s, v, i) => s + (ok[i] ? 0 : v), 0) };
}

function majoritarian() {
  const winners = DISTRICTS.map((d) => d.indexOf(Math.max(...d)));
  return { winners, seats: PARTIES.map((_, i) => winners.filter((w) => w === i).length), wasted: DISTRICTS.reduce((s, d) => s + 100 - Math.max(...d), 0) / DISTRICTS.length };
}

export default function Vote({ spec, lang }: SimProps) {
  const [sys, setSys] = useState<"prop" | "maj">(spec.opts.mode === "maj" ? "maj" : "prop");
  const [th, setTh] = useState(5);
  const m = majoritarian();
  const r = sys === "maj" ? m : proportional(th);
  const dec = (v: number) => (lang === "en" ? v.toFixed(1) : v.toFixed(1).replace(".", ","));
  // the ten seats of the parliament, filled party by party, drawn as a half circle
  const seatColors = r.seats.flatMap((n, i) => Array(n).fill(PC[i]) as string[]);
  return (
    <ArtFrame kind="experiment" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <Stage w={320} h={214} label={L(W.title, lang)}>
        <text x="10" y="12" fontSize="8" fontWeight="900" fill="#334155">{L(W.districts, lang)}</text>
        {DISTRICTS.map((d, k) => {
          const x = 10 + k * 30.4;
          const win = sys === "maj" ? m.winners[k] : -1;
          let y = 58;
          return (
            <g key={k}>
              <rect x={x} y="17" width="26" height="42" rx="3" fill="#fff" stroke={win >= 0 ? PC[win] : "#cbd5e1"} strokeWidth={win >= 0 ? 2.5 : 1} />
              {d.map((v, i) => {
                const h = (v / 100) * 40;
                y -= h;
                return <rect key={i} x={x + 3} y={y} width="20" height={h} fill={PC[i]} opacity={win >= 0 && win !== i ? 0.3 : 0.9} />;
              })}
              <text x={x + 13} y="68" textAnchor="middle" fontSize="7" fontWeight="800" fill="#64748b">{k + 1}</text>
            </g>
          );
        })}
        {[[L(W.votes, lang), TOTAL], [L(W.seats, lang), r.seats.map((s) => s * 10)]].map(([label, arr], row) => {
          let x = 64;
          return (
            <g key={row}>
              <text x="58" y={88 + row * 22} textAnchor="end" fontSize="8" fontWeight="900" fill="#334155">{label as string}</text>
              {(arr as number[]).map((v, i) => {
                const w = (v / 100) * 248;
                x += w;
                return v > 0 ? (
                  <g key={i}>
                    <rect x={x - w} y={78 + row * 22} width={w} height="14" fill={PC[i]} />
                    {w > 14 ? <text x={x - w / 2} y={88 + row * 22} textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#fff">{PARTIES[i]}</text> : null}
                  </g>
                ) : null;
              })}
            </g>
          );
        })}
        {sys === "prop" ? <line x1={64 + (th / 100) * 248} y1="74" x2={64 + (th / 100) * 248} y2="96" stroke="#0f172a" strokeWidth="1.5" strokeDasharray="2 2" /> : null}
        {seatColors.map((c, k) => {
          const a = Math.PI - (k + 0.5) * (Math.PI / 10);
          return <circle key={k} cx={160 + 70 * Math.cos(a)} cy={204 - 70 * Math.sin(a)} r="9" fill={c} stroke="#fff" strokeWidth="1.5" />;
        })}
        <text x="160" y="200" textAnchor="middle" fontSize="9" fontWeight="900" fill="#1e1b4b">{L(W.seats, lang)}: 10</text>
      </Stage>
      <Readouts items={[
        ...PARTIES.map((p, i) => [`${L(W.party, lang)} ${p}`, `${dec(TOTAL[i])}% → ${r.seats[i]}`, PC[i]] as [string, string, string]),
        [L(W.wasted, lang), `${dec(r.wasted)}%`],
      ]} />
      <Choice value={sys} options={[["prop", L(W.prop, lang)], ["maj", L(W.maj, lang)]]} onChange={setSys} />
      {sys === "prop" ? (
        <div className="sim-controls">
          <Slider label={L(W.threshold, lang)} value={th} min={0} max={7} lang={lang} display={`${th}%`} onChange={setTh} />
        </div>
      ) : null}
      <p className="sim-note">
        {sys === "maj"
          ? L(W.majNote, lang).replace("{a}", dec(TOTAL[0])).replace("{s}", String(m.seats[0] * 10))
          : `${L(W.propNote, lang)}${TOTAL[3] < th ? ` ${L(W.dOut, lang).replace("{d}", dec(TOTAL[3]))}` : ""}`}
      </p>
    </ArtFrame>
  );
}
