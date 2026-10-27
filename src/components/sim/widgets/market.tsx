"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Readouts, Slider, Stage, Toggle } from "../kit";
import { L, t } from "../labels";
import { COLORS } from "../math-kit";

/**
 * Markets.
 *   market            the apricot market of the base lesson: price, demand, supply, shortage and surplus; a frost and a festival shift the curves
 *   market mode=ppf   a village's production possibilities: apricots or carpets, the rising opportunity cost, idle workers and new technology
 */
const W = {
  title: t("Experiment: the apricot market", "Փորձ․ ծիրանի շուկան", "Опыт: рынок абрикосов"),
  hint: t("Set the price and compare how much buyers want with how much farmers bring. Find the price where they match, then send a frost or a festival and watch it move.", "Սահմանի՛ր գինը և համեմատի՛ր, թե որքան են ուզում գնորդները, և որքան են բերում ֆերմերները։ Գտի՛ր այն գինը, որի դեպքում դրանք համընկնում են, հետո ուղարկի՛ր ցրտահարություն կամ փառատոն և հետևի՛ր, թե ինչպես է այն շարժվում։", "Задай цену и сравни, сколько хотят купить покупатели и сколько привозят фермеры. Найди цену, при которой они совпадают, а потом устрой заморозки или праздник и посмотри, как она сдвинется."),
  price: t("Price, ֏/kg", "Գին, ֏/կգ", "Цена, ֏/кг"),
  qty: t("tonnes", "տոննա", "тонн"),
  demand: t("Demand", "Պահանջարկ", "Спрос"),
  supply: t("Supply", "Առաջարկ", "Предложение"),
  frost: t("A spring frost", "Գարնանային ցրտահարություն", "Весенние заморозки"),
  fest: t("An apricot festival", "Ծիրանի փառատոն", "Праздник абрикоса"),
  short: t("Shortage", "Պակասուրդ", "Дефицит"),
  surplus: t("Surplus", "Ավելցուկ", "Излишек"),
  eq: t("Equilibrium", "Հավասարակշռություն", "Равновесие"),
  eqAt: t("Equilibrium price", "Հավասարակշռության գին", "Равновесная цена"),
  noteShort: t("Buyers want more than there is: queues form and sellers can raise the price.", "Գնորդներն ավելին են ուզում, քան կա․ հերթեր են գոյանում, և վաճառողները կարող են բարձրացնել գինը։", "Покупатели хотят больше, чем есть: появляются очереди, и продавцы могут поднять цену."),
  noteSurplus: t("Apricots go unsold and start to spoil: sellers lower the price.", "Ծիրանը չի վաճառվում և սկսում է փչանալ․ վաճառողներն իջեցնում են գինը։", "Абрикосы не продаются и начинают портиться: продавцы снижают цену."),
  noteEq: t("Everyone who wants to buy at this price can, and nothing is left over.", "Բոլորը, ովքեր ուզում են գնել այս գնով, կարող են, և ոչինչ չի մնում։", "Все, кто хочет купить по этой цене, могут купить, и ничего не остаётся."),
  ppfTitle: t("Experiment: apricots or carpets?", "Փորձ․ ծիրա՞ն, թե՞ գորգեր", "Опыт: абрикосы или ковры?"),
  ppfHint: t("A village can grow apricots or weave carpets with the same people and land. Move workers to carpets and watch what each extra carpet costs in apricots.", "Գյուղը նույն մարդկանցով և հողով կարող է ծիրան աճեցնել կամ գորգ գործել։ Աշխատողներին տեղափոխի՛ր գորգագործություն և հետևի՛ր, թե յուրաքանչյուր լրացուցիչ գորգն ինչ արժե ծիրանով։", "Село может выращивать абрикосы или ткать ковры теми же людьми и на той же земле. Переводи работников на ковры и смотри, во что обходится каждый новый ковёр в абрикосах."),
  carpets: t("Carpets a year", "Գորգ տարեկան", "Ковров в год"),
  apricots: t("Apricots, t", "Ծիրան, տ", "Абрикосы, т"),
  tn: t("t", "տ", "т"),
  cost: t("Cost of 2 more carpets", "Եվս 2 գորգի արժեքը", "Цена ещё 2 ковров"),
  idle: t("Some workers are idle", "Որոշ աշխատողներ պարապ են", "Часть работников без дела"),
  tech: t("New irrigation", "Նոր ոռոգում", "Новое орошение"),
  ppfNote: t("Each step costs more apricots than the last: the first weavers come from the worst orchards, the last ones from the best.", "Յուրաքանչյուր քայլն ավելի շատ ծիրան արժե, քան նախորդը․ առաջին գործողները գալիս են ամենավատ այգիներից, վերջինները՝ ամենալավերից։", "Каждый шаг стоит больше абрикосов, чем предыдущий: первые ткачи приходят из худших садов, последние — из лучших."),
  idleNote: t("A point inside the curve: the village could have more of both, but resources are wasted.", "Կետը կորից ներս է․ գյուղը կարող էր ունենալ երկուսից էլ ավելին, բայց ռեսուրսները վատնվում են։", "Точка внутри кривой: село могло бы иметь больше и того и другого, но ресурсы пропадают."),
  techNote: t("Technology moves the whole curve outwards: now more of both is possible.", "Տեխնոլոգիան ամբողջ կորը դուրս է տեղափոխում․ այժմ հնարավոր է երկուսից էլ ավելին։", "Технология сдвигает всю кривую наружу: теперь возможно больше и того и другого."),
};

const num = (v: number, lang: ArtLang) => Math.round(v).toLocaleString(lang === "en" ? "en-US" : "ru-RU");

/* the base lesson's table: price → demand and supply, in tonnes */
const PRICES = [300, 500, 700, 900];
const QD = [80, 60, 50, 35];
const QS = [20, 40, 50, 65];
const lerp = (p: number, q: number[]) => {
  const k = Math.min(2, Math.max(0, Math.floor((p - 300) / 200)));
  return q[k] + ((q[k + 1] - q[k]) * (p - PRICES[k])) / 200;
};

function Supply({ lang, body }: { lang: ArtLang; body: string }) {
  const [p, setP] = useState(500);
  const [frost, setFrost] = useState(false);
  const [fest, setFest] = useState(false);
  const qd = (x: number) => lerp(x, QD) + (fest ? 15 : 0);
  const qs = (x: number) => Math.max(0, lerp(x, QS) - (frost ? 20 : 0));
  let pe = 1000;
  for (let x = 300; x <= 1000; x++) if (qs(x) >= qd(x)) { pe = x; break; }
  const X = (q: number) => 40 + (q / 100) * 266;
  const Y = (v: number) => 182 - ((v - 200) / 800) * 166;
  const curve = (f: (x: number) => number) => Array.from({ length: 15 }, (_, k) => 300 + k * 50).map((x) => `${X(f(x)).toFixed(1)},${Y(x).toFixed(1)}`).join(" ");
  const d = qd(p), s = qs(p), gap = d - s;
  const state = Math.abs(gap) < 0.5 ? "eq" : gap > 0 ? "short" : "surplus";
  return (
    <ArtFrame kind="experiment" title={L(W.title, lang)} body={body || L(W.hint, lang)}>
      <Stage w={320} h={204} label={L(W.title, lang)}>
        {[200, 400, 600, 800, 1000].map((v) => (
          <g key={v}>
            <line x1="40" y1={Y(v)} x2="306" y2={Y(v)} stroke={COLORS.grid} />
            <text x="36" y={Y(v) + 3} textAnchor="end" fontSize="7.5" fontWeight="700" fill="#64748b">{v}</text>
          </g>
        ))}
        {[0, 20, 40, 60, 80, 100].map((q) => <text key={q} x={X(q)} y="194" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#64748b">{q}</text>)}
        <line x1="40" y1="16" x2="40" y2="182" stroke={COLORS.line} strokeWidth="1.5" />
        <line x1="40" y1="182" x2="306" y2="182" stroke={COLORS.line} strokeWidth="1.5" />
        <text x="44" y="12" fontSize="8" fontWeight="900" fill="#334155">{L(W.price, lang)}</text>
        <text x="306" y="203" textAnchor="end" fontSize="8" fontWeight="900" fill="#334155">{L(W.qty, lang)}</text>
        {/* the gap at the chosen price */}
        {state !== "eq" ? <rect x={X(Math.min(d, s))} y={Y(p) - 5} width={X(Math.max(d, s)) - X(Math.min(d, s))} height="10" fill={state === "short" ? COLORS.d : COLORS.b} opacity="0.3" /> : null}
        <polyline points={curve(qd)} fill="none" stroke={COLORS.a} strokeWidth="2.5" />
        <polyline points={curve(qs)} fill="none" stroke={COLORS.c} strokeWidth="2.5" />
        <text x={X(qd(900)) - 4} y={Y(900) - 4} textAnchor="end" fontSize="8.5" fontWeight="900" fill={COLORS.a}>{L(W.demand, lang)}</text>
        <text x={X(qs(900)) + 4} y={Y(900) + 3} fontSize="8.5" fontWeight="900" fill="#047857">{L(W.supply, lang)}</text>
        <line x1="40" y1={Y(p)} x2="306" y2={Y(p)} stroke="#0f172a" strokeDasharray="4 3" />
        <circle cx={X(d)} cy={Y(p)} r="4.5" fill={COLORS.a} stroke="#fff" />
        <circle cx={X(s)} cy={Y(p)} r="4.5" fill={COLORS.c} stroke="#fff" />
        {/* equilibrium */}
        <circle cx={X(qd(pe))} cy={Y(pe)} r="6" fill="none" stroke="#0f172a" strokeWidth="1.5" />
        <text x={X(qd(pe)) + 9} y={Y(pe) - 6} fontSize="8" fontWeight="900" fill="#0f172a">≈ {num(pe, lang)} ֏</text>
      </Stage>
      <Readouts items={[
        [L(W.demand, lang), `${num(d, lang)} ${L(W.qty, lang)}`, COLORS.a],
        [L(W.supply, lang), `${num(s, lang)} ${L(W.qty, lang)}`, COLORS.c],
        [L(state === "eq" ? W.eq : state === "short" ? W.short : W.surplus, lang), state === "eq" ? "✓" : `${num(Math.abs(gap), lang)} ${L(W.qty, lang)}`, state === "short" ? COLORS.d : COLORS.b],
        [L(W.eqAt, lang), `≈ ${num(pe, lang)} ֏`],
      ]} />
      <div className="sim-controls">
        <Slider label={L(W.price, lang)} value={p} min={300} max={900} step={10} lang={lang} display={`${num(p, lang)} ֏`} onChange={setP} />
      </div>
      <div className="art-chips">
        <Toggle on={frost} label={L(W.frost, lang)} onChange={setFrost} />
        <Toggle on={fest} label={L(W.fest, lang)} onChange={setFest} />
      </div>
      <p className={state === "eq" ? "sim-note is-good" : "sim-note"}>{L(state === "eq" ? W.noteEq : state === "short" ? W.noteShort : W.noteSurplus, lang)}</p>
    </ArtFrame>
  );
}

function Ppf({ lang, body }: { lang: ArtLang; body: string }) {
  const [c, setC] = useState(8);
  const [idle, setIdle] = useState(false);
  const [tech, setTech] = useState(false);
  const top = tech ? 130 : 100;
  const apr = (k: number, a = top) => a * Math.sqrt(Math.max(0, 1 - (k / 20) ** 2));
  const X = (k: number) => 40 + (k / 24) * 266;
  const Y = (a: number) => 182 - (a / 140) * 166;
  const pts = (a: number) => Array.from({ length: 41 }, (_, k) => `${X(k / 2).toFixed(1)},${Y(apr(k / 2, a)).toFixed(1)}`).join(" ");
  const f = idle ? 0.75 : 1;
  const here = apr(c) * f;
  const step = c < 20 ? apr(c) - apr(c + 2) : 0;
  return (
    <ArtFrame kind="experiment" title={L(W.ppfTitle, lang)} body={body || L(W.ppfHint, lang)}>
      <Stage w={320} h={204} label={L(W.ppfTitle, lang)}>
        {[0, 20, 40, 60, 80, 100, 120, 140].map((v) => (
          <g key={v}>
            <line x1="40" y1={Y(v)} x2="306" y2={Y(v)} stroke={COLORS.grid} />
            <text x="36" y={Y(v) + 3} textAnchor="end" fontSize="7.5" fontWeight="700" fill="#64748b">{v}</text>
          </g>
        ))}
        {[0, 4, 8, 12, 16, 20, 24].map((k) => <text key={k} x={X(k)} y="194" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#64748b">{k}</text>)}
        <line x1="40" y1="16" x2="40" y2="182" stroke={COLORS.line} strokeWidth="1.5" />
        <line x1="40" y1="182" x2="306" y2="182" stroke={COLORS.line} strokeWidth="1.5" />
        <text x="44" y="12" fontSize="8" fontWeight="900" fill="#334155">{L(W.apricots, lang)}</text>
        <text x="306" y="203" textAnchor="end" fontSize="8" fontWeight="900" fill="#334155">{L(W.carpets, lang)}</text>
        {tech ? <polyline points={pts(100)} fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" /> : null}
        <polyline points={pts(top)} fill="none" stroke={COLORS.a} strokeWidth="2.5" />
        {c < 20 ? (
          <g>
            <path d={`M${X(c)},${Y(apr(c))} H${X(c + 2)} V${Y(apr(c + 2))}`} fill="none" stroke={COLORS.d} strokeWidth="2" />
            <text x={X(c + 2) + 4} y={(Y(apr(c)) + Y(apr(c + 2))) / 2 + 3} fontSize="8" fontWeight="900" fill={COLORS.d}>−{Math.round(step)} {L(W.tn, lang)}</text>
          </g>
        ) : null}
        <circle cx={X(c)} cy={Y(here)} r="6" fill={idle ? COLORS.b : COLORS.a} stroke="#fff" strokeWidth="1.5" />
      </Stage>
      <Readouts items={[
        [L(W.carpets, lang), String(c), COLORS.a],
        [L(W.apricots, lang), String(Math.round(here)), COLORS.c],
        [L(W.cost, lang), c < 20 ? `${Math.round(step)} ${L(W.tn, lang)}` : "—", COLORS.d],
      ]} />
      <div className="sim-controls">
        <Slider label={L(W.carpets, lang)} value={c} min={0} max={20} step={2} lang={lang} display={String(c)} onChange={setC} />
      </div>
      <div className="art-chips">
        <Toggle on={idle} label={L(W.idle, lang)} onChange={setIdle} />
        <Toggle on={tech} label={L(W.tech, lang)} onChange={setTech} />
      </div>
      <p className="sim-note">{L(idle ? W.idleNote : tech ? W.techNote : W.ppfNote, lang)}</p>
    </ArtFrame>
  );
}

export default function Market({ spec, lang }: SimProps) {
  return spec.opts.mode === "ppf" ? <Ppf lang={lang} body={spec.body} /> : <Supply lang={lang} body={spec.body} />;
}
