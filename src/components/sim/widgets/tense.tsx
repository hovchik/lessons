"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { list } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Choice, Stage } from "../kit";
import { L, t } from "../labels";
import { COLORS } from "../math-kit";

/**
 * English tenses on a time line:
 *   tense name=present-perfect [aspects=simple,continuous] [times=past,present]
 * Names: present|past|future-simple|continuous|perfect|perfect-continuous, and going-to.
 * aspects= and times= limit the switches to what the class has learnt.
 */
type Time = "past" | "present" | "future";
type Aspect = "simple" | "continuous" | "perfect" | "perfect-continuous" | "going-to";
export const TENSE_NAMES = [
  ...(["present", "past", "future"] as const).flatMap((tm) => (["simple", "continuous", "perfect", "perfect-continuous"] as const).map((a) => `${tm}-${a}`)),
  "going-to",
];
const W = {
  title: t("Look: the tense on a time line", "Դիտիր․ ժամանակաձևը ժամանակի առանցքի վրա", "Посмотри: время на линии времени"),
  hint: t("The red line is now. Dots are single actions, waves are actions in progress, arrows show a link to a later moment.", "Կարմիր գիծը «հիմա»-ն է։ Կետերը մեկանգամյա գործողություններ են, ալիքները՝ ընթացքի մեջ գտնվող գործողություններ, սլաքները ցույց են տալիս կապը ավելի ուշ պահի հետ։", "Красная линия — «сейчас». Точки — однократные действия, волны — действия в процессе, стрелки — связь с более поздним моментом."),
  past: t("Past", "Անցյալ", "Прошлое"),
  now: t("Now", "Հիմա", "Сейчас"),
  future: t("Future", "Ապագա", "Будущее"),
  formula: t("Form", "Կառուցվածք", "Формула"),
  example: t("Example", "Օրինակ", "Пример"),
  signals: t("Signal words", "Ազդանշան բառեր", "Слова-маркеры"),
  use: t("Used for", "Գործածվում է", "Когда употребляется"),
};
type Info = { form: string; ex: string; sig: string; use: ReturnType<typeof t> };
const INFO: Record<string, Info> = {
  "present-simple": { form: "V / V+s (he, she, it)", ex: "She **plays** tennis every Sunday.", sig: "always, usually, often, every day", use: t("habits, facts and timetables", "սովորություններ, փաստեր, չվացուցակներ", "привычки, факты, расписания") },
  "present-continuous": { form: "am / is / are + V-ing", ex: "She **is playing** tennis now.", sig: "now, at the moment, Look!", use: t("happening right now or around now", "կատարվում է հենց հիմա կամ այս օրերին", "происходит прямо сейчас или в эти дни") },
  "present-perfect": { form: "have / has + V3", ex: "She **has** just **finished** her homework.", sig: "just, already, yet, ever, never, since, for", use: t("finished in the past, but the result matters now; the time is not said", "ավարտվել է անցյալում, բայց արդյունքը կարևոր է հիմա․ ժամանակը նշված չէ", "завершилось в прошлом, но результат важен сейчас; время не указано") },
  "present-perfect-continuous": { form: "have / has been + V-ing", ex: "She **has been playing** for two hours.", sig: "for, since, all day, how long", use: t("started in the past and is still going on, or has only just stopped", "սկսվել է անցյալում և դեռ շարունակվում է կամ նոր է ավարտվել", "началось в прошлом и всё ещё длится или только что закончилось") },
  "past-simple": { form: "V2 (V+ed or irregular)", ex: "She **played** tennis yesterday.", sig: "yesterday, last week, ago, in 2020", use: t("finished at a known time in the past", "ավարտվել է անցյալի որոշակի պահի", "завершилось в известный момент в прошлом") },
  "past-continuous": { form: "was / were + V-ing", ex: "She **was playing** tennis when it started to rain.", sig: "while, when, at 5 o'clock yesterday", use: t("in progress at a moment in the past, often interrupted", "ընթացքի մեջ էր անցյալի որևէ պահի, հաճախ ընդհատվում է", "было в процессе в момент в прошлом, часто прерывается") },
  "past-perfect": { form: "had + V3", ex: "When we arrived, the film **had** already **started**.", sig: "before, after, already, by the time", use: t("happened before another past action", "կատարվել էր անցյալի մեկ այլ գործողությունից առաջ", "произошло раньше другого действия в прошлом") },
  "past-perfect-continuous": { form: "had been + V-ing", ex: "She **had been waiting** for an hour when the bus came.", sig: "for, since, before, how long", use: t("had been going on for some time before a past moment", "որոշ ժամանակ շարունակվում էր մինչև անցյալի որևէ պահ", "длилось какое-то время до момента в прошлом") },
  "future-simple": { form: "will + V", ex: "I think it **will rain** tomorrow.", sig: "tomorrow, next year, I think, probably", use: t("predictions, promises and quick decisions", "կանխատեսումներ, խոստումներ և արագ որոշումներ", "прогнозы, обещания и решения на ходу") },
  "future-continuous": { form: "will be + V-ing", ex: "This time tomorrow I **will be flying** to Paris.", sig: "this time tomorrow, at 8 tomorrow", use: t("in progress at a moment in the future", "ընթացքի մեջ կլինի ապագայի որևէ պահի", "будет в процессе в момент в будущем") },
  "future-perfect": { form: "will have + V3", ex: "By Friday I **will have finished** the project.", sig: "by Friday, by then, by the time", use: t("finished before a moment in the future", "կավարտվի ապագայի որևէ պահից առաջ", "завершится к моменту в будущем") },
  "future-perfect-continuous": { form: "will have been + V-ing", ex: "By June she **will have been working** here for ten years.", sig: "by … for …", use: t("will have been going on for some time by a future moment", "որոշ ժամանակ շարունակված կլինի մինչև ապագայի որևէ պահ", "будет длиться уже какое-то время к моменту в будущем") },
  "going-to": { form: "am / is / are going to + V", ex: "Look at those clouds! It **is going to rain**.", sig: "plans, Look!, tonight, next week", use: t("plans, and things we can already see coming", "ծրագրեր և այն, ինչ արդեն երևում է, որ կլինի", "планы и то, что вот-вот случится") },
};
const ASPECT_LABEL: Record<Aspect, string> = { simple: "Simple", continuous: "Continuous", perfect: "Perfect", "perfect-continuous": "Perfect Continuous", "going-to": "going to" };

const NOW = 160, Y = 70;
const Dot = ({ x, c = COLORS.a }: { x: number; c?: string }) => <circle cx={x} cy={Y} r={6} fill={c} stroke="#fff" strokeWidth={2} />;
function Wave({ a, b, c = COLORS.a }: { a: number; b: number; c?: string }) {
  let d = `M${a} ${Y}`;
  for (let x = a; x < b; x += 10) d += ` q2.5 -9 5 0 q2.5 9 5 0`;
  return <path d={d} fill="none" stroke={c} strokeWidth={3} strokeLinecap="round" />;
}
const Link = ({ a, b, dash }: { a: number; b: number; dash?: boolean }) => (
  <g stroke={COLORS.b} strokeWidth={2.5} fill="none" strokeDasharray={dash ? "5 4" : undefined}>
    <path d={`M${a} ${Y - 10} Q${(a + b) / 2} ${Y - 42} ${b} ${Y - 10}`} />
    <path d={`M${b - 7} ${Y - 18} L${b} ${Y - 10} L${b - 9} ${Y - 7}`} strokeDasharray={undefined} />
  </g>
);
const Mark = ({ x }: { x: number }) => <line x1={x} x2={x} y1={Y - 22} y2={Y + 22} stroke={COLORS.c} strokeWidth={3} strokeDasharray="4 3" />;

function Picture({ name }: { name: string }) {
  switch (name) {
    case "present-simple": return <>{[40, 80, 120, 160, 200, 240, 280].map((x) => <Dot key={x} x={x} />)}</>;
    case "present-continuous": return <Wave a={125} b={195} />;
    case "present-perfect": return <><Dot x={80} /><Link a={80} b={NOW} /></>;
    case "present-perfect-continuous": return <><Wave a={60} b={NOW} /><Link a={60} b={NOW} /></>;
    case "past-simple": return <Dot x={80} />;
    case "past-continuous": return <><Wave a={45} b={115} /><Dot x={90} c={COLORS.d} /></>;
    case "past-perfect": return <><Dot x={50} /><Dot x={115} c={COLORS.d} /><Link a={50} b={115} /></>;
    case "past-perfect-continuous": return <><Wave a={35} b={110} /><Dot x={115} c={COLORS.d} /></>;
    case "future-simple": return <Dot x={240} />;
    case "future-continuous": return <><Wave a={205} b={275} /><Mark x={240} /></>;
    case "future-perfect": return <><Dot x={215} /><Mark x={270} /><Link a={215} b={270} /></>;
    case "future-perfect-continuous": return <><Wave a={180} b={265} /><Mark x={270} /></>;
    default: return <><Dot x={240} /><Link a={NOW} b={240} dash /></>;
  }
}

function Rich({ s }: { s: string }) {
  return <>{s.split("**").map((p, i) => (i % 2 ? <b key={i}>{p}</b> : <span key={i}>{p}</span>))}</>;
}

export default function Tense({ spec, lang }: SimProps) {
  const start = TENSE_NAMES.includes(spec.opts.name ?? "") ? spec.opts.name! : "present-simple";
  const [name, setName] = useState(start);
  const going = name === "going-to";
  const time = (going ? "future" : name.split("-")[0]) as Time;
  const aspect = (going ? "going-to" : name.split("-").slice(1).join("-")) as Aspect;
  const aspects = list(spec.opts.aspects, ["simple", "continuous", "perfect", "perfect-continuous"]) as Aspect[];
  const times = list(spec.opts.times, ["past", "present", "future"]) as Time[];
  const info = INFO[name];
  const pick = (tm: Time, a: Aspect) => setName(a === "going-to" ? "going-to" : `${tm}-${a}`);
  return (
    <ArtFrame kind="look" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <Stage w={320} h={120} label={name}>
        <line x1={10} x2={310} y1={Y} y2={Y} stroke={COLORS.line} strokeWidth={2} />
        <path d={`M302 ${Y - 5} L311 ${Y} L302 ${Y + 5}`} fill={COLORS.line} />
        <line x1={NOW} x2={NOW} y1={Y - 30} y2={Y + 30} stroke={COLORS.d} strokeWidth={3} />
        <text x={70} y={Y + 40} textAnchor="middle" className="sim-axis is-name">{L(W.past, lang)}</text>
        <text x={NOW} y={Y + 44} textAnchor="middle" className="sim-axis is-name" fill={COLORS.d}>{L(W.now, lang)}</text>
        <text x={250} y={Y + 40} textAnchor="middle" className="sim-axis is-name">{L(W.future, lang)}</text>
        <Picture name={name} />
      </Stage>
      <div className="lang-tense-name">{going ? "be going to" : `${time[0].toUpperCase()}${time.slice(1)} ${ASPECT_LABEL[aspect]}`}</div>
      {times.length > 1 ? <Choice value={going ? "future" : time} options={times.map((tm) => [tm, L(W[tm === "present" ? "now" : tm], lang)])} onChange={(tm) => pick(tm, going ? "simple" : aspect)} /> : null}
      {aspects.length > 1 ? <Choice value={aspect} options={aspects.map((a) => [a, ASPECT_LABEL[a]])} onChange={(a) => pick(going ? "future" : time, a)} /> : null}
      <dl className="lang-facts">
        <dt>{L(W.formula, lang)}</dt><dd className="is-form">{info.form}</dd>
        <dt>{L(W.use, lang)}</dt><dd>{L(info.use, lang)}</dd>
        <dt>{L(W.example, lang)}</dt><dd><Rich s={info.ex} /></dd>
        <dt>{L(W.signals, lang)}</dt><dd><i>{info.sig}</i></dd>
      </dl>
    </ArtFrame>
  );
}
