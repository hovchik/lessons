"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Graph, Readouts, Slider, Stage, Toggle } from "../kit";
import { L, t } from "../labels";
import { COLORS } from "../math-kit";

/**
 * Money calculators with the base lessons' numbers.
 *   finance                 simple and compound interest on a deposit, and what inflation leaves of it
 *   finance mode=profit     the biscuit business: revenue, fixed and variable costs, profit and the break-even point
 *   finance mode=budget     a monthly budget against the 50/30/20 rule
 *   finance mode=loan       buying a phone on credit: monthly payment, total and overpayment
 *   finance mode=tax        income tax and VAT on one wage; a flat rate against an example progressive scale
 */
const W = {
  intTitle: t("Experiment: simple or compound interest", "Փորձ․ պարզ, թե՞ բարդ տոկոս", "Опыт: простые или сложные проценты"),
  intHint: t("Put money in a deposit and watch it grow year by year. With compound interest the interest itself starts earning interest; switch on inflation to see what the money will really buy.", "Գումարը դրի՛ր ավանդի և հետևի՛ր, թե ինչպես է այն աճում տարեցտարի։ Բարդ տոկոսի դեպքում տոկոսն ինքն էլ է տոկոս բերում․ միացրո՛ւ գնաճը՝ տեսնելու, թե իրականում ինչ կարելի է գնել այդ գումարով։", "Положи деньги на вклад и смотри, как они растут год за годом. При сложных процентах проценты сами начинают приносить проценты; включи инфляцию, чтобы увидеть, что на эти деньги можно будет купить на самом деле."),
  deposit: t("Deposit", "Ավանդ", "Вклад"),
  rate: t("Interest a year", "Տարեկան տոկոս", "Процент в год"),
  years: t("Years", "Տարի", "Лет"),
  simple: t("Simple", "Պարզ", "Простые"),
  compound: t("Compound", "Բարդ", "Сложные"),
  diff: t("Difference", "Տարբերություն", "Разница"),
  infl: t("Inflation 5% a year", "Տարեկան 5% գնաճ", "Инфляция 5% в год"),
  real: t("Compound, in today's prices", "Բարդ՝ այսօրվա գներով", "Сложные, в сегодняшних ценах"),
  intNote: t("Rule of 72: divide 72 by the interest rate to find roughly how many years it takes to double the money. At 10% that is about 7 years.", "72-ի կանոնը․ 72-ը բաժանի՛ր տոկոսադրույքի վրա, և կիմանաս՝ մոտավորապես քանի տարում գումարը կկրկնապատկվի։ 10%-ի դեպքում՝ մոտ 7 տարում։", "Правило 72: раздели 72 на процентную ставку и узнаешь, примерно за сколько лет деньги удвоятся. При 10% — примерно за 7 лет."),
  profTitle: t("Experiment: when does a business start to earn?", "Փորձ․ ե՞րբ է բիզնեսը սկսում վաստակել", "Опыт: когда бизнес начинает зарабатывать?"),
  profHint: t("A home biscuit business: each box costs 600 ֏ in ingredients and packaging, and advertising and delivery cost 70,000 ֏ a month whatever you sell. Change the sales and the price and find the break-even point.", "Տնային թխվածքաբլիթի բիզնես․ յուրաքանչյուր տուփի բաղադրիչներն ու փաթեթավորումն արժեն 600 ֏, իսկ գովազդն ու առաքումն ամսական արժեն 70 000 ֏՝ անկախ վաճառքից։ Փոխի՛ր վաճառքն ու գինը և գտի՛ր անվնասության կետը։", "Домашний бизнес с печеньем: ингредиенты и упаковка одной коробки стоят 600 ֏, а реклама и доставка — 70 000 ֏ в месяц, сколько бы ни продали. Меняй продажи и цену и найди точку безубыточности."),
  boxes: t("Boxes sold a month", "Ամսական վաճառված տուփեր", "Коробок в месяц"),
  price: t("Price of a box", "Տուփի գինը", "Цена коробки"),
  revenue: t("Revenue", "Եկամուտ", "Доход"),
  costs: t("Costs", "Ծախսեր", "Расходы"),
  profit: t("Profit", "Շահույթ", "Прибыль"),
  loss: t("Loss", "Վնաս", "Убыток"),
  breakeven: t("Break-even", "Անվնասության կետ", "Безубыточность"),
  boxesUnit: t("boxes", "տուփ", "коробок"),
  thousand: t("thousand ֏", "հազ. ֏", "тыс. ֏"),
  profNote: t("Below the break-even point every box still helps to pay the fixed costs; above it, each box adds its whole margin to the profit.", "Անվնասության կետից ցածր յուրաքանչյուր տուփ դեռ օգնում է ծածկել հաստատուն ծախսերը, իսկ դրանից բարձր յուրաքանչյուր տուփ իր ամբողջ տարբերությունն ավելացնում է շահույթին։", "Ниже точки безубыточности каждая коробка ещё помогает покрыть постоянные расходы, а выше неё каждая коробка целиком добавляет свою наценку к прибыли."),
  budTitle: t("Experiment: a monthly budget", "Փորձ․ ամսական բյուջե", "Опыт: бюджет на месяц"),
  budHint: t("Enter the income and what goes on needs and wants. What is left is savings; the lower bar shows the 50/30/20 rule for the same income.", "Մուտքագրի՛ր եկամուտը և այն, ինչ գնում է անհրաժեշտ ծախսերին և ցանկություններին։ Մնացածը խնայողություն է․ ներքևի սյունը ցույց է տալիս 50/30/20 կանոնը նույն եկամտի համար։", "Задай доход и то, что уходит на нужды и желания. Остаток — сбережения; нижняя полоса показывает правило 50/30/20 для того же дохода."),
  income: t("Income", "Եկամուտ", "Доход"),
  needs: t("Needs", "Անհրաժեշտ", "Нужды"),
  wants: t("Wants", "Ցանկություններ", "Желания"),
  savings: t("Savings", "Խնայողություն", "Сбережения"),
  you: t("You", "Դու", "Ты"),
  rule: t("50/30/20", "50/30/20", "50/30/20"),
  deficit: t("Deficit! Spending is higher than income: this month ends in debt.", "Պակասուրդ։ Ծախսերը եկամտից շատ են․ այս ամիսն ավարտվում է պարտքով։", "Дефицит! Расходы больше дохода: месяц заканчивается долгом."),
  budOk: t("A surplus: the savings can build an emergency fund of several months' spending.", "Հավելուրդ․ խնայողություններով կարելի է ստեղծել մի քանի ամսվա ծախսերին հավասար ֆինանսական բարձիկ։", "Профицит: из сбережений можно собрать финансовую подушку на несколько месяцев расходов."),
  loanTitle: t("Experiment: a phone on credit", "Փորձ․ հեռախոս՝ ապառիկով", "Опыт: телефон в кредит"),
  loanHint: t("The phone costs 300,000 ֏. Choose how long to pay and the annual rate, and compare the monthly payment with what you pay in the end.", "Հեռախոսն արժե 300 000 ֏։ Ընտրի՛ր, թե որքան ժամանակ ես վճարելու և տարեկան տոկոսադրույքը, և համեմատի՛ր ամսական վճարը վերջում վճարածիդ հետ։", "Телефон стоит 300 000 ֏. Выбери срок и годовую ставку и сравни ежемесячный платёж с тем, сколько заплатишь в итоге."),
  months: t("Months", "Ամիս", "Месяцев"),
  apr: t("Annual rate", "Տարեկան տոկոսադրույք", "Годовая ставка"),
  monthly: t("Monthly payment", "Ամսական վճար", "Платёж в месяц"),
  total: t("Total paid", "Ընդամենը վճարված", "Всего заплачено"),
  over: t("Overpayment", "Գերավճար", "Переплата"),
  loanNote: t("A longer loan has a smaller monthly payment but a bigger overpayment. Saving for 10 months and buying without a loan costs nothing extra.", "Ավելի երկար վարկն ունի ավելի փոքր ամսական վճար, բայց ավելի մեծ գերավճար։ 10 ամիս խնայելը և առանց վարկի գնելը ոչ մի լրացուցիչ գումար չարժե։", "У более долгого кредита меньше ежемесячный платёж, но больше переплата. Копить 10 месяцев и купить без кредита не стоит ничего сверху."),
  taxTitle: t("Experiment: where a wage goes", "Փորձ․ ուր է գնում աշխատավարձը", "Опыт: куда уходит зарплата"),
  taxHint: t("Income tax is taken from the wage at once; VAT is hidden in the prices of what you buy. Rates are approximate, and the progressive scale is only an example.", "Եկամտային հարկը պահվում է աշխատավարձից անմիջապես, իսկ ԱԱՀ-ն թաքնված է գնածդ ապրանքների գներում։ Դրույքաչափերը մոտավոր են, իսկ պրոգրեսիվ սանդղակը միայն օրինակ է։", "Подоходный налог удерживают из зарплаты сразу, а НДС спрятан в ценах того, что ты покупаешь. Ставки приблизительные, а прогрессивная шкала — только пример."),
  gross: t("Wage before tax", "Աշխատավարձ՝ մինչև հարկումը", "Зарплата до налога"),
  progressive: t("Example progressive scale", "Պրոգրեսիվ սանդղակի օրինակ", "Пример прогрессивной шкалы"),
  incomeTax: t("Income tax", "Եկամտային հարկ", "Подоходный налог"),
  net: t("Take-home pay", "Ձեռքի գումար", "На руки"),
  vat: t("VAT in purchases", "ԱԱՀ գնումներում", "НДС в покупках"),
  share: t("All taxes, % of wage", "Բոլոր հարկերը, աշխատավարձի %", "Все налоги, % зарплаты"),
  flatNote: t("A flat rate: everyone gives the same 20%, whatever the wage.", "Համահարթ դրույքաչափ․ բոլորը տալիս են նույն 20%-ը՝ անկախ աշխատավարձից։", "Плоская ставка: все отдают одни и те же 20%, какой бы ни была зарплата."),
  progNote: t("Example scale: 10% up to 200,000 ֏, 20% from 200,000 to 500,000 ֏ and 30% above. Only the part of the wage above each line is taxed at the higher rate.", "Սանդղակի օրինակ․ 10% մինչև 200 000 ֏, 20%՝ 200 000-ից 500 000 ֏, և 30%՝ դրանից բարձր։ Բարձր դրույքով հարկվում է աշխատավարձի միայն այն մասը, որը գտնվում է յուրաքանչյուր սահմանից վեր։", "Пример шкалы: 10% до 200 000 ֏, 20% от 200 000 до 500 000 ֏ и 30% выше. По повышенной ставке облагается только часть зарплаты выше каждой границы."),
};

const num = (v: number, lang: ArtLang) => Math.round(v).toLocaleString(lang === "en" ? "en-US" : "ru-RU");
const dram = (v: number, lang: ArtLang) => `${num(v, lang)} ֏`;

function Interest({ lang, body }: { lang: ArtLang; body: string }) {
  const [p, setP] = useState(100000);
  const [r, setR] = useState(10);
  const [n, setN] = useState(3);
  const [infl, setInfl] = useState(false);
  const simple = (y: number) => p * (1 + (r / 100) * y);
  const comp = (y: number) => p * (1 + r / 100) ** y;
  const real = (y: number) => comp(y) / 1.05 ** y;
  const max = comp(n) * 1.08;
  const bw = Math.min(26, 250 / n / 2.4);
  const X = (y: number) => 52 + ((y - 0.5) * 256) / n;
  const Y = (v: number) => 170 - (v / max) * 150;
  return (
    <ArtFrame kind="experiment" title={L(W.intTitle, lang)} body={body || L(W.intHint, lang)}>
      <Stage w={320} h={190} label={L(W.intTitle, lang)}>
        <line x1="48" y1="170" x2="312" y2="170" stroke={COLORS.line} strokeWidth="1.5" />
        <line x1="48" y1={Y(p)} x2="312" y2={Y(p)} stroke="#94a3b8" strokeDasharray="3 3" />
        <text x="44" y={Y(p) + 3} textAnchor="end" fontSize="7" fontWeight="800" fill="#64748b">{num(p / 1000, lang)}k</text>
        <text x="44" y={Y(comp(n)) + 3} textAnchor="end" fontSize="7" fontWeight="800" fill={COLORS.c}>{num(comp(n) / 1000, lang)}k</text>
        {Array.from({ length: n }, (_, k) => k + 1).map((y) => (
          <g key={y}>
            <rect x={X(y) - bw - 1} y={Y(simple(y))} width={bw} height={170 - Y(simple(y))} fill={COLORS.a} rx="2" />
            <rect x={X(y) + 1} y={Y(comp(y))} width={bw} height={170 - Y(comp(y))} fill={COLORS.c} rx="2" />
            {infl ? <rect x={X(y) + 1} y={Y(real(y))} width={bw} height="2.5" fill={COLORS.d} /> : null}
            {n <= 15 || y % 5 === 0 ? <text x={X(y)} y="181" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#64748b">{y}</text> : null}
          </g>
        ))}
        <rect x="56" y="10" width="9" height="9" fill={COLORS.a} rx="2" />
        <text x="69" y="18" fontSize="8" fontWeight="800" fill="#334155">{L(W.simple, lang)}</text>
        <rect x="136" y="10" width="9" height="9" fill={COLORS.c} rx="2" />
        <text x="149" y="18" fontSize="8" fontWeight="800" fill="#334155">{L(W.compound, lang)}</text>
        {infl ? <><rect x="216" y="13" width="9" height="3" fill={COLORS.d} /><text x="229" y="18" fontSize="8" fontWeight="800" fill={COLORS.d}>{L(W.infl, lang)}</text></> : null}
      </Stage>
      <Readouts items={[
        [L(W.simple, lang), dram(simple(n), lang), COLORS.a],
        [L(W.compound, lang), dram(comp(n), lang), COLORS.c],
        [L(W.diff, lang), dram(comp(n) - simple(n), lang)],
        ...(infl ? [[L(W.real, lang), dram(real(n), lang), COLORS.d] as [string, string, string]] : []),
      ]} />
      <div className="sim-controls">
        <Slider label={L(W.deposit, lang)} value={p} min={50000} max={500000} step={50000} lang={lang} display={dram(p, lang)} onChange={setP} />
        <Slider label={L(W.rate, lang)} value={r} min={1} max={20} lang={lang} display={`${r}%`} onChange={setR} />
        <Slider label={L(W.years, lang)} value={n} min={1} max={30} lang={lang} display={String(n)} onChange={setN} />
      </div>
      <div className="art-chips"><Toggle on={infl} label={L(W.infl, lang)} onChange={setInfl} /></div>
      <p className="sim-note">{L(W.intNote, lang)}</p>
    </ArtFrame>
  );
}

const FIXED = 70000, UNIT = 600;

function Profit({ lang, body }: { lang: ArtLang; body: string }) {
  const [q, setQ] = useState(300);
  const [price, setPrice] = useState(1500);
  const rev = (x: number) => (x * price) / 1000;
  const cost = (x: number) => (FIXED + x * UNIT) / 1000;
  const be = price > UNIT ? Math.ceil(FIXED / (price - UNIT)) : Infinity;
  const pr = (q * price - FIXED - q * UNIT);
  return (
    <ArtFrame kind="experiment" title={L(W.profTitle, lang)} body={body || L(W.profHint, lang)}>
      <Graph x={[0, 500]} y={[0, 1250]} xLabel={L(W.boxesUnit, lang)} yLabel={L(W.thousand, lang)} cursor={q}
        series={[{ pts: [[0, rev(0)], [500, rev(500)]], color: COLORS.c }, { pts: [[0, cost(0)], [500, cost(500)]], color: COLORS.d }, { pts: [[0, FIXED / 1000], [500, FIXED / 1000]], color: "#94a3b8", dash: "4 3" }]}
        dots={[[q, rev(q), COLORS.c], [q, cost(q), COLORS.d], ...(be <= 500 ? [[be, cost(be), "#0f172a"] as [number, number, string]] : [])]} />
      <Readouts items={[
        [L(W.revenue, lang), dram(q * price, lang), COLORS.c],
        [L(W.costs, lang), dram(FIXED + q * UNIT, lang), COLORS.d],
        [L(pr >= 0 ? W.profit : W.loss, lang), dram(Math.abs(pr), lang), pr >= 0 ? COLORS.c : COLORS.d],
        [L(W.breakeven, lang), be === Infinity ? "—" : `${num(be, lang)} ${L(W.boxesUnit, lang)}`],
      ]} />
      <div className="sim-controls">
        <Slider label={L(W.boxes, lang)} value={q} min={0} max={500} step={10} lang={lang} display={num(q, lang)} onChange={setQ} />
        <Slider label={L(W.price, lang)} value={price} min={800} max={2500} step={100} lang={lang} display={dram(price, lang)} onChange={setPrice} />
      </div>
      <p className={pr >= 0 ? "sim-note is-good" : "sim-note is-bad"}>{L(W.profNote, lang)}</p>
    </ArtFrame>
  );
}

function Budget({ lang, body }: { lang: ArtLang; body: string }) {
  const [inc, setInc] = useState(200000);
  const [needs, setNeeds] = useState(110000);
  const [wants, setWants] = useState(70000);
  const save = inc - needs - wants;
  const scale = Math.max(inc, needs + wants);
  const Bar = ({ y, parts, label }: { y: number; parts: Array<[number, string, string]>; label: string }) => {
    let x = 70;
    return (
      <g>
        <text x="64" y={y + 15} textAnchor="end" fontSize="8.5" fontWeight="900" fill="#334155">{label}</text>
        {parts.map(([v, c, s], k) => {
          const w = (Math.max(0, v) / scale) * 240;
          x += w;
          return w > 0 ? (
            <g key={k}>
              <rect x={x - w} y={y} width={w} height="22" fill={c} />
              {w > 30 ? <text x={x - w / 2} y={y + 14} textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#fff">{s}</text> : null}
            </g>
          ) : null;
        })}
      </g>
    );
  };
  const pc = (v: number) => `${Math.round((v / inc) * 100)}%`;
  return (
    <ArtFrame kind="experiment" title={L(W.budTitle, lang)} body={body || L(W.budHint, lang)}>
      <Stage w={320} h={110} label={L(W.budTitle, lang)}>
        <Bar y={14} label={L(W.you, lang)} parts={[[needs, COLORS.a, pc(needs)], [wants, COLORS.b, pc(wants)], [save, COLORS.c, pc(save)]]} />
        <Bar y={50} label={L(W.rule, lang)} parts={[[inc * 0.5, COLORS.a, "50%"], [inc * 0.3, COLORS.b, "30%"], [inc * 0.2, COLORS.c, "20%"]]} />
        <line x1={70 + (inc / scale) * 240} y1="8" x2={70 + (inc / scale) * 240} y2="80" stroke="#0f172a" strokeDasharray="3 2" />
        <text x={70 + (inc / scale) * 240} y="96" textAnchor={inc / scale > 0.8 ? "end" : "middle"} fontSize="7.5" fontWeight="900" fill="#0f172a">{L(W.income, lang)}</text>
      </Stage>
      <Readouts items={[
        [L(W.needs, lang), dram(needs, lang), COLORS.a],
        [L(W.wants, lang), dram(wants, lang), COLORS.b],
        [L(W.savings, lang), dram(save, lang), save >= 0 ? COLORS.c : COLORS.d],
      ]} />
      <div className="sim-controls">
        <Slider label={L(W.income, lang)} value={inc} min={100000} max={500000} step={10000} lang={lang} display={dram(inc, lang)} onChange={setInc} />
        <Slider label={L(W.needs, lang)} value={needs} min={0} max={400000} step={10000} lang={lang} display={dram(needs, lang)} onChange={setNeeds} />
        <Slider label={L(W.wants, lang)} value={wants} min={0} max={300000} step={10000} lang={lang} display={dram(wants, lang)} onChange={setWants} />
      </div>
      <p className={save < 0 ? "sim-note is-bad" : "sim-note is-good"}>{L(save < 0 ? W.deficit : W.budOk, lang)}</p>
    </ArtFrame>
  );
}

function Loan({ lang, body }: { lang: ArtLang; body: string }) {
  const [n, setN] = useState(12);
  const [apr, setApr] = useState(35);
  const L0 = 300000;
  const i = apr / 1200;
  const pay = i === 0 ? L0 / n : (L0 * i) / (1 - (1 + i) ** -n);
  const total = pay * n;
  return (
    <ArtFrame kind="experiment" title={L(W.loanTitle, lang)} body={body || L(W.loanHint, lang)}>
      <Stage w={320} h={90} label={L(W.loanTitle, lang)}>
        <rect x="20" y="20" width={(L0 / 700000) * 280} height="24" fill={COLORS.a} rx="3" />
        <rect x={20 + (L0 / 700000) * 280} y="20" width={((total - L0) / 700000) * 280} height="24" fill={COLORS.d} rx="3" />
        <text x={20 + (L0 / 700000) * 140} y="36" textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#fff">{dram(L0, lang)}</text>
        <text x={20 + (total / 700000) * 280} y="14" textAnchor="end" fontSize="8.5" fontWeight="900" fill={COLORS.d}>+{dram(total - L0, lang)}</text>
        {Array.from({ length: n }, (_, k) => <rect key={k} x={20 + (k * 280) / 36} y="56" width={280 / 36 - 1.5} height="14" rx="2" fill="#cbd5e1" />)}
        <text x="20" y="84" fontSize="7.5" fontWeight="800" fill="#475569">{n} × {dram(pay, lang)}</text>
      </Stage>
      <Readouts items={[
        [L(W.monthly, lang), dram(pay, lang), COLORS.a],
        [L(W.total, lang), dram(total, lang)],
        [L(W.over, lang), dram(total - L0, lang), COLORS.d],
      ]} />
      <div className="sim-controls">
        <Slider label={L(W.months, lang)} value={n} min={3} max={36} lang={lang} display={String(n)} onChange={setN} />
        <Slider label={L(W.apr, lang)} value={apr} min={0} max={60} lang={lang} display={`${apr}%`} onChange={setApr} />
      </div>
      <p className="sim-note">{L(W.loanNote, lang)}</p>
    </ArtFrame>
  );
}

function Tax({ lang, body }: { lang: ArtLang; body: string }) {
  const [g, setG] = useState(300000);
  const [prog, setProg] = useState(false);
  const it = prog ? 0.1 * Math.min(g, 200000) + 0.2 * Math.max(0, Math.min(g, 500000) - 200000) + 0.3 * Math.max(0, g - 500000) : 0.2 * g;
  const net = g - it;
  const vat = (net * 20) / 120;
  const W2 = (v: number) => (v / g) * 250;
  return (
    <ArtFrame kind="experiment" title={L(W.taxTitle, lang)} body={body || L(W.taxHint, lang)}>
      <Stage w={320} h={96} label={L(W.taxTitle, lang)}>
        <rect x="35" y="14" width={W2(it)} height="24" fill={COLORS.d} />
        <rect x={35 + W2(it)} y="14" width={W2(net)} height="24" fill={COLORS.c} />
        <rect x={35 + W2(it)} y="50" width={W2(vat)} height="24" fill={COLORS.b} />
        <rect x={35 + W2(it + vat)} y="50" width={W2(net - vat)} height="24" fill="#93c5fd" />
        <text x={35 + W2(it) / 2} y="30" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#fff">{Math.round((it / g) * 100)}%</text>
        <text x={35 + W2(it) + W2(net) / 2} y="30" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#fff">{L(W.net, lang)}</text>
        <text x={35 + W2(it) + W2(vat) / 2} y="66" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#fff">{L(t("VAT", "ԱԱՀ", "НДС"), lang)}</text>
        <text x={35 + W2(it + vat) + W2(net - vat) / 2} y="66" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#1e3a8a">{L(t("goods", "ապրանքներ", "товары"), lang)}</text>
        <path d={`M${35 + W2(it)},38 v12 M${285},38 v12`} stroke="#94a3b8" strokeDasharray="2 2" />
        <text x="35" y="90" fontSize="7.5" fontWeight="800" fill="#475569">{L(W.gross, lang)}: {dram(g, lang)}</text>
      </Stage>
      <Readouts items={[
        [L(W.incomeTax, lang), dram(it, lang), COLORS.d],
        [L(W.net, lang), dram(net, lang), COLORS.c],
        [L(W.vat, lang), dram(vat, lang), COLORS.b],
        [L(W.share, lang), `${Math.round(((it + vat) / g) * 100)}%`],
      ]} />
      <div className="sim-controls">
        <Slider label={L(W.gross, lang)} value={g} min={100000} max={1000000} step={10000} lang={lang} display={dram(g, lang)} onChange={setG} />
      </div>
      <div className="art-chips"><Toggle on={prog} label={L(W.progressive, lang)} onChange={setProg} /></div>
      <p className="sim-note">{L(prog ? W.progNote : W.flatNote, lang)}</p>
    </ArtFrame>
  );
}

export default function Finance({ spec, lang }: SimProps) {
  const m = spec.opts.mode;
  if (m === "profit") return <Profit lang={lang} body={spec.body} />;
  if (m === "budget") return <Budget lang={lang} body={spec.body} />;
  if (m === "loan") return <Loan lang={lang} body={spec.body} />;
  if (m === "tax") return <Tax lang={lang} body={spec.body} />;
  return <Interest lang={lang} body={spec.body} />;
}
