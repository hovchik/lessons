"use client";

import { useRef, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Choice, Readouts, Slider, Stage, svgPoint, Toggle } from "../kit";
import { L, t } from "../labels";
import { COLORS } from "../math-kit";

/**
 * Machine learning in two pictures.
 *   neuron            one artificial neuron: two inputs, two weights, a bias and a step; which logic gate does it make?
 *   neuron mode=knn   nearest neighbours: tap to place a new fruit and see which known fruits vote for its label
 */
const W = {
  neuron: t("Experiment: one artificial neuron", "Փորձ․ մեկ արհեստական նեյրոն", "Опыт: один искусственный нейрон"),
  neuronHint: t("Tap x₁ and x₂ to switch the inputs. Move the weights and the bias: the neuron answers 1 when the sum is above 0.", "Սեղմի՛ր x₁-ին և x₂-ին՝ մուտքերը փոխելու համար։ Շարժի՛ր կշիռները և շեղումը․ նեյրոնը պատասխանում է 1, երբ գումարը 0-ից մեծ է։", "Нажимай на x₁ и x₂, чтобы переключать входы. Двигай веса и смещение: нейрон отвечает 1, когда сумма больше 0."),
  knn: t("Experiment: the nearest neighbour", "Փորձ․ մոտակա հարևանը", "Опыт: ближайший сосед"),
  knnHint: t("Each dot is a fruit we already know. Tap the chart to put a new fruit there: its k nearest neighbours vote for apple or pear.", "Յուրաքանչյուր կետ մեզ արդեն հայտնի միրգ է։ Սեղմի՛ր գծապատկերին՝ այնտեղ նոր միրգ դնելու համար․ նրա k մոտակա հարևանները քվեարկում են խնձորի կամ տանձի օգտին։", "Каждая точка — уже известный нам фрукт. Нажми на график, чтобы поставить туда новый фрукт: его k ближайших соседей голосуют за яблоко или грушу."),
  bias: t("Bias b", "Շեղում b", "Смещение b"),
  sum: t("Sum", "Գումար", "Сумма"),
  out: t("Output", "Ելք", "Выход"),
  like: t("This neuron works like {g}.", "Այս նեյրոնն աշխատում է {g} փականի պես։", "Этот нейрон работает как {g}."),
  none: t("This table is not one of the usual gates. Try the presets.", "Այս աղյուսակը սովորական փականներից ոչ մեկը չէ։ Փորձի՛ր պատրաստի տարբերակները։", "Эта таблица не совпадает ни с одним обычным элементом. Попробуй готовые варианты."),
  xor: t("No weights make XOR: one neuron can only cut the inputs with one straight line. Two layers can do it.", "Ոչ մի կշիռ XOR չի տալիս․ մեկ նեյրոնը կարող է մուտքերը բաժանել միայն մեկ ուղիղ գծով։ Երկու շերտը դա կարող է։", "Никакие веса не дают XOR: один нейрон делит входы только одной прямой линией. Двум слоям это под силу."),
  try: t("Try XOR", "Փորձիր XOR", "Попробуй XOR"),
  table: t("All four inputs", "Բոլոր չորս մուտքերը", "Все четыре входа"),
  mass: t("mass, g", "զանգված, գ", "масса, г"),
  colour: t("colour 0–10", "գույն 0–10", "цвет 0–10"),
  apple: t("apple", "խնձոր", "яблоко"),
  pear: t("pear", "տանձ", "груша"),
  newFruit: t("New fruit", "Նոր միրգ", "Новый фрукт"),
  answer: t("Prediction", "Կանխատեսում", "Прогноз"),
  votes: t("Votes", "Ձայներ", "Голоса"),
  scale: t("Divide the mass by 10", "Զանգվածը բաժանել 10-ի", "Делить массу на 10"),
  noScale: t("Without scaling, a few grams matter far more than the whole colour scale, so the model almost ignores colour.", "Առանց մասշտաբավորման մի քանի գրամն ավելի կարևոր է դառնում, քան ամբողջ գույնի սանդղակը, և մոդելը գրեթե անտեսում է գույնը։", "Без масштабирования несколько граммов весят больше, чем вся шкала цвета, и модель почти не замечает цвет."),
};

/* ---------------- one neuron ---------------- */

const GATES: Array<[string, number[]]> = [["AND", [0, 0, 0, 1]], ["OR", [0, 1, 1, 1]], ["NAND", [1, 1, 1, 0]], ["NOR", [1, 0, 0, 0]]];
const PRESETS: Array<[string, number, number, number]> = [["AND", 2, 3, -4], ["OR", 2, 2, -1], ["NAND", -2, -2, 3]];
const on = "#f59e0b";

function Neuron({ lang, body }: { lang: ArtLang; body: string }) {
  const [x1, setX1] = useState(1);
  const [x2, setX2] = useState(1);
  const [w1, setW1] = useState(2);
  const [w2, setW2] = useState(3);
  const [b, setB] = useState(-4);
  const [xor, setXor] = useState(false);
  const f = (a: number, c: number) => w1 * a + w2 * c + b;
  const s = f(x1, x2), y = s > 0 ? 1 : 0;
  const rows = [[0, 0], [0, 1], [1, 0], [1, 1]];
  const outs = rows.map(([a, c]) => (f(a, c) > 0 ? 1 : 0));
  const gate = GATES.find(([, o]) => o.every((v, i) => v === outs[i]))?.[0];
  const wire = (w: number) => ({ stroke: w > 0 ? COLORS.a : w < 0 ? COLORS.d : "#cbd5e1", strokeWidth: 1.5 + Math.abs(w) * 1.1 });
  const n = (v: number) => (v < 0 ? `−${-v}` : String(v));
  return (
    <ArtFrame kind="experiment" title={L(W.neuron, lang)} body={body || L(W.neuronHint, lang)}>
      <Stage w={320} h={170} label={L(W.neuron, lang)}>
        {([[x1, setX1, 46, "x₁", w1], [x2, setX2, 124, "x₂", w2]] as const).map(([v, set, cy, name, w], k) => (
          <g key={k}>
            <line x1="50" y1={cy} x2="150" y2="85" {...wire(w)} opacity={v ? 1 : 0.35} />
            <rect x="80" y={(cy + 85) / 2 - 10 + (k ? 6 : -6)} width="36" height="18" rx="9" fill="#fff" stroke="#e2e8f0" />
            <text x="98" y={(cy + 85) / 2 + 3 + (k ? 6 : -6)} textAnchor="middle" fontSize="10" fontWeight="900" fill={w < 0 ? COLORS.d : COLORS.a}>w={n(w)}</text>
            <g onClick={() => set(1 - v)} style={{ cursor: "pointer" }}>
              <circle cx="30" cy={cy} r="20" fill={v ? on : "#fff"} stroke={v ? on : "#94a3b8"} strokeWidth="2" />
              <text x="30" y={cy + 4} textAnchor="middle" fontSize="12" fontWeight="900" fill={v ? "#fff" : "#475569"}>{name}={v}</text>
            </g>
          </g>
        ))}
        <line x1="150" y1="150" x2="150" y2="110" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="150" y="162" textAnchor="middle" fontSize="10" fontWeight="900" fill="#64748b">b={n(b)}</text>
        <circle cx="160" cy="85" r="26" fill="#eef2ff" stroke="#818cf8" strokeWidth="2" />
        <text x="160" y="82" textAnchor="middle" fontSize="16" fontWeight="900" fill="#3730a3">Σ</text>
        <text x="160" y="98" textAnchor="middle" fontSize="10" fontWeight="900" fill="#3730a3">{n(s)}</text>
        <line x1="186" y1="85" x2="214" y2="85" stroke="#94a3b8" strokeWidth="2" />
        <rect x="214" y="65" width="40" height="40" rx="8" fill="#fff" stroke="#334155" strokeWidth="1.5" />
        <path d="M220,96 H234 V74 H248" fill="none" stroke="#334155" strokeWidth="2" />
        <text x="234" y="118" textAnchor="middle" fontSize="8" fontWeight="800" fill="#64748b">&gt; 0 ?</text>
        <line x1="254" y1="85" x2="274" y2="85" stroke={y ? on : "#cbd5e1"} strokeWidth="2.5" />
        <circle cx="290" cy="85" r="16" fill={y ? "#fde047" : "#e2e8f0"} stroke={y ? on : "#94a3b8"} strokeWidth="2" />
        <text x="290" y="90" textAnchor="middle" fontSize="13" fontWeight="900" fill="#1e1b4b">{y}</text>
      </Stage>
      <Slider label="w₁" value={w1} min={-5} max={5} lang={lang} display={n(w1)} onChange={setW1} />
      <Slider label="w₂" value={w2} min={-5} max={5} lang={lang} display={n(w2)} onChange={setW2} />
      <Slider label={L(W.bias, lang)} value={b} min={-6} max={6} lang={lang} display={n(b)} onChange={setB} />
      <Readouts items={[[L(W.sum, lang), `${n(w1)}·${x1} + ${n(w2)}·${x2} ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${n(s)}`, COLORS.a], [L(W.out, lang), String(y), COLORS.b]]} />
      <table className="sim-truth">
        <caption>{L(W.table, lang)}</caption>
        <thead><tr><th>x₁</th><th>x₂</th><th>{L(W.sum, lang)}</th><th>{L(W.out, lang)}</th></tr></thead>
        <tbody>
          {rows.map(([a, c], i) => (
            <tr key={i} className={a === x1 && c === x2 ? "is-on" : undefined}><td>{a}</td><td>{c}</td><td>{n(f(a, c))}</td><td><b>{outs[i]}</b></td></tr>
          ))}
        </tbody>
      </table>
      <p className={gate ? "sim-note is-good" : "sim-note"}>{gate ? L(W.like, lang).replace("{g}", gate) : L(W.none, lang)}</p>
      <div className="art-chips">
        {PRESETS.map(([g, a, c, d]) => <button key={g} type="button" className="art-chip" onClick={() => { setW1(a); setW2(c); setB(d); }}>{g}</button>)}
        <Toggle on={xor} label={L(W.try, lang)} onChange={setXor} />
      </div>
      {xor ? <p className="sim-note is-bad">{L(W.xor, lang)}</p> : null}
    </ArtFrame>
  );
}

/* ---------------- nearest neighbours ---------------- */

type Fruit = [mass: number, colour: number, apple: boolean];
/** The four fruits of the lesson first, then a few more so that k = 3 and k = 5 have something to vote with. */
const FRUITS: Fruit[] = [
  [150, 8, true], [170, 7, true], [180, 3, false], [200, 2, false],
  [145, 9, true], [158, 9, true], [165, 6, true], [188, 4, false], [176, 2, false], [205, 4, false], [192, 6, false], [182, 8, true],
];
const X0 = 36, X1 = 308, Y0 = 196, Y1 = 16;
const px = (m: number) => X0 + ((m - 140) / 70) * (X1 - X0);
const py = (c: number) => Y0 - (c / 10) * (Y0 - Y1);

function Knn({ lang, body }: { lang: ArtLang; body: string }) {
  const [p, setP] = useState<[number, number]>([160, 7]);
  const [k, setK] = useState<"1" | "3" | "5">("1");
  const [scale, setScale] = useState(true);
  const svg = useRef<SVGSVGElement>(null);
  const d = (f: Fruit) => ((f[0] - p[0]) / (scale ? 10 : 1)) ** 2 + (f[1] - p[1]) ** 2;
  const near = FRUITS.map((f, i) => [d(f), i] as const).sort((a, b) => a[0] - b[0]).slice(0, Number(k));
  const apples = near.filter(([, i]) => FRUITS[i][2]).length;
  const isApple = apples * 2 > near.length;
  const place = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!svg.current) return;
    const q = svgPoint(svg.current, e);
    const m = Math.round(140 + ((q.x - X0) / (X1 - X0)) * 70), c = Math.round(((Y0 - q.y) / (Y0 - Y1)) * 10 * 2) / 2;
    setP([Math.max(140, Math.min(210, m)), Math.max(0, Math.min(10, c))]);
  };
  const lbl = (a: boolean) => L(a ? W.apple : W.pear, lang);
  return (
    <ArtFrame kind="experiment" title={L(W.knn, lang)} body={body || L(W.knnHint, lang)}>
      <Stage w={320} h={220} label={L(W.knn, lang)} svgRef={svg} onPointerDown={place}>
        <rect x={X0} y={Y1} width={X1 - X0} height={Y0 - Y1} fill="#fff" stroke="#e2e8f0" />
        {[140, 160, 180, 200].map((m) => <g key={m}><line x1={px(m)} y1={Y1} x2={px(m)} y2={Y0} stroke="#f1f5f9" /><text x={px(m)} y={Y0 + 12} textAnchor="middle" fontSize="9" fill="#64748b">{m}</text></g>)}
        {[0, 5, 10].map((c) => <g key={c}><line x1={X0} y1={py(c)} x2={X1} y2={py(c)} stroke="#f1f5f9" /><text x={X0 - 6} y={py(c) + 3} textAnchor="end" fontSize="9" fill="#64748b">{c}</text></g>)}
        <text x={X1} y={Y0 + 22} textAnchor="end" fontSize="9" fontWeight="800" fill="#475569">{L(W.mass, lang)}</text>
        <text x={X0 + 4} y={Y1 + 10} fontSize="9" fontWeight="800" fill="#475569">{L(W.colour, lang)}</text>
        {near.map(([, i]) => <line key={i} x1={px(p[0])} y1={py(p[1])} x2={px(FRUITS[i][0])} y2={py(FRUITS[i][1])} stroke={FRUITS[i][2] ? "#dc2626" : "#16a34a"} strokeWidth="1.6" strokeDasharray="4 3" />)}
        {FRUITS.map(([m, c, a], i) => {
          const hit = near.some(([, j]) => j === i);
          return a
            ? <circle key={i} cx={px(m)} cy={py(c)} r={hit ? 8 : 6} fill="#ef4444" stroke={hit ? "#7f1d1d" : "#fff"} strokeWidth={hit ? 2 : 1} />
            : <path key={i} d={`M${px(m)},${py(c) - (hit ? 9 : 7)} l${hit ? 8 : 6},${hit ? 15 : 12} h-${hit ? 16 : 12} Z`} fill="#22c55e" stroke={hit ? "#14532d" : "#fff"} strokeWidth={hit ? 2 : 1} />;
        })}
        <circle cx={px(p[0])} cy={py(p[1])} r="9" fill="#fff" stroke={isApple ? "#dc2626" : "#16a34a"} strokeWidth="3" />
        <text x={px(p[0])} y={py(p[1]) + 3.5} textAnchor="middle" fontSize="10" fontWeight="900" fill="#1e1b4b">?</text>
        <circle cx={X0 + 12} cy={Y1 + 24} r="5" fill="#ef4444" />
        <text x={X0 + 22} y={Y1 + 27} fontSize="9" fontWeight="800" fill="#475569">{lbl(true)}</text>
        <path d={`M${X0 + 12},${Y1 + 34} l5,10 h-10 Z`} fill="#22c55e" />
        <text x={X0 + 22} y={Y1 + 43} fontSize="9" fontWeight="800" fill="#475569">{lbl(false)}</text>
      </Stage>
      <Choice value={k} options={[["1", "k = 1"], ["3", "k = 3"], ["5", "k = 5"]]} onChange={setK} />
      <Readouts items={[[L(W.newFruit, lang), `(${p[0]}, ${String(p[1]).replace(".", lang === "en" ? "." : ",")})`, COLORS.a], [L(W.votes, lang), `${apples} : ${near.length - apples}`, COLORS.c], [L(W.answer, lang), lbl(isApple), isApple ? "#dc2626" : "#16a34a"]]} />
      <div className="art-chips"><Toggle on={scale} label={L(W.scale, lang)} onChange={setScale} /></div>
      {!scale ? <p className="sim-note is-bad">{L(W.noScale, lang)}</p> : null}
    </ArtFrame>
  );
}

export default function NeuronWidget({ spec, lang }: SimProps) {
  return spec.opts.mode === "knn" ? <Knn lang={lang} body={spec.body} /> : <Neuron lang={lang} body={spec.body} />;
}
