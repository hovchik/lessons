"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Readouts, Slider, Stage, Toggle } from "../kit";
import { L, t } from "../labels";
import { COLORS } from "../math-kit";

/**
 * Describing data.
 *   stats             five marks on a dot plot with the mean, median, mode and range; one toggle turns the 10 into a typo, 100
 *   stats mode=axis   the same two bars drawn from zero and from a cut-off axis
 */
const W = {
  title: t("Experiment: mean, median and mode", "Փորձ․ միջին, մեդիան և մոդա", "Опыт: среднее, медиана и мода"),
  hint: t("Move the marks and watch the three \"centres\" of the data. Then switch on the typo: one wrong number drags the mean far away, while the median hardly moves.", "Շարժի՛ր գնահատականները և հետևի՛ր տվյալների երեք «կենտրոններին»։ Հետո միացրո՛ւ վրիպակը․ մեկ սխալ թիվը միջինը շատ հեռու է տանում, իսկ մեդիանը գրեթե չի շարժվում։", "Двигай оценки и следи за тремя «центрами» данных. Потом включи опечатку: одно неверное число утаскивает среднее далеко, а медиана почти не сдвигается."),
  mark: t("Mark {n}", "Գնահատական {n}", "Оценка {n}"),
  typo: t("Typo: 100 instead of the last mark", "Վրիպակ․ վերջին գնահատականի փոխարեն՝ 100", "Опечатка: 100 вместо последней оценки"),
  mean: t("Mean", "Միջին", "Среднее"),
  median: t("Median", "Մեդիան", "Медиана"),
  mode: t("Mode", "Մոդա", "Мода"),
  range: t("Range", "Միջակայք", "Размах"),
  noMode: t("none", "չկա", "нет"),
  axTitle: t("Experiment: a graph that lies", "Փորձ․ գծապատկեր, որը ստում է", "Опыт: график, который врёт"),
  axHint: t("The same two numbers, drawn twice. Cut the axis and the small difference suddenly looks huge.", "Նույն երկու թիվը՝ գծված երկու անգամ։ Կտրի՛ր առանցքը, և փոքր տարբերությունը հանկարծ հսկայական է թվում։", "Одни и те же два числа, нарисованные дважды. Обрежь ось, и маленькая разница вдруг кажется огромной."),
  cut: t("Start the axis at 48", "Առանցքը սկսել 48-ից", "Начать ось с 48"),
  votes: t("Votes for class president", "Ձայներ դասարանի ավագի ընտրություններում", "Голоса на выборах старосты"),
  names: [t("Ani", "Անի", "Ани"), t("Aram", "Արամ", "Арам")],
  honest: t("Ani's bar is about 4% taller, just like her score: 51 against 49.", "Անիի սյունը մոտ 4%-ով բարձր է, ճիշտ ինչպես նրա արդյունքը՝ 51 ընդդեմ 49-ի։", "Столбик Ани выше примерно на 4 %, как и её результат: 51 против 49."),
  liar: t("Now Ani's bar looks 3 times taller, but she won by only 2 votes out of 100. Always check where the axis starts.", "Հիմա Անիի սյունը 3 անգամ բարձր է թվում, բայց նա հաղթել է 100-ից ընդամենը 2 ձայնով։ Միշտ ստուգի՛ր, թե որտեղից է սկսվում առանցքը։", "Теперь столбик Ани кажется в 3 раза выше, хотя она победила всего на 2 голоса из 100. Всегда смотри, откуда начинается ось."),
};

const dec = (v: number, lang: ArtLang) => { const s = String(Math.round(v * 10) / 10); return lang === "en" ? s : s.replace(".", ","); };

function Center({ lang, body }: { lang: ArtLang; body: string }) {
  const [m, setM] = useState([6, 7, 7, 8, 10]);
  const [typo, setTypo] = useState(false);
  const data = typo ? [...m.slice(0, 4), 100] : m;
  const s = [...data].sort((a, b) => a - b);
  const mean = data.reduce((a, b) => a + b, 0) / data.length;
  const median = s[2];
  const counts = new Map<number, number>();
  data.forEach((v) => counts.set(v, (counts.get(v) ?? 0) + 1));
  const top = Math.max(...counts.values());
  const modes = top > 1 ? [...counts].filter(([, c]) => c === top).map(([v]) => v).sort((a, b) => a - b) : [];
  const max = typo ? 100 : 10;
  const X = (v: number) => 20 + (v / max) * 280;
  const stack = new Map<number, number>();
  return (
    <ArtFrame kind="experiment" title={L(W.title, lang)} body={body || L(W.hint, lang)}>
      <Stage w={320} h={120} label={L(W.title, lang)}>
        <line x1="20" y1="80" x2="300" y2="80" stroke={COLORS.line} strokeWidth="1.5" />
        {Array.from({ length: 11 }, (_, k) => (
          <g key={k}>
            <line x1={X((k * max) / 10)} y1="80" x2={X((k * max) / 10)} y2="84" stroke={COLORS.line} />
            <text x={X((k * max) / 10)} y="95" textAnchor="middle" fontSize="8" fontWeight="700" fill="#475569">{(k * max) / 10}</text>
          </g>
        ))}
        {data.map((v, k) => {
          const h = stack.get(v) ?? 0;
          stack.set(v, h + 1);
          return <circle key={k} cx={X(v)} cy={72 - h * 12} r="5.5" fill={typo && k === 4 ? COLORS.d : COLORS.a} stroke="#fff" strokeWidth="1.2" />;
        })}
        {/* the mean is the balance point, the median the middle value */}
        <path d={`M${X(mean)},86 l-6,10 h12 Z`} fill={COLORS.b} />
        <text x={X(mean)} y="108" textAnchor="middle" fontSize="8" fontWeight="900" fill="#b45309">{L(W.mean, lang)} {dec(mean, lang)}</text>
        <line x1={X(median)} y1="14" x2={X(median)} y2="80" stroke={COLORS.c} strokeWidth="1.5" strokeDasharray="4 3" />
        <text x={X(median)} y="11" textAnchor="middle" fontSize="8" fontWeight="900" fill="#047857">{L(W.median, lang)} {median}</text>
      </Stage>
      <Readouts items={[
        [L(W.mean, lang), dec(mean, lang), COLORS.b],
        [L(W.median, lang), String(median), COLORS.c],
        [L(W.mode, lang), modes.length ? modes.join(", ") : L(W.noMode, lang), COLORS.a],
        [L(W.range, lang), `${s[4]} − ${s[0]} = ${s[4] - s[0]}`],
      ]} />
      <div className="sim-controls">
        {m.map((v, k) => (
          <Slider key={k} label={L(W.mark, lang).replace("{n}", String(k + 1))} value={v} min={1} max={10} lang={lang} display={typo && k === 4 ? "100" : String(v)} onChange={(x) => setM(m.map((y, j) => (j === k ? x : y)))} />
        ))}
      </div>
      <div className="art-chips"><Toggle on={typo} label={L(W.typo, lang)} onChange={setTypo} /></div>
    </ArtFrame>
  );
}

function Axis({ lang, body }: { lang: ArtLang; body: string }) {
  const [cut, setCut] = useState(false);
  const votes = [51, 49];
  const lo = cut ? 48 : 0, hi = cut ? 52 : 60;
  const Y = (v: number) => 170 - ((v - lo) / (hi - lo)) * 140;
  const ticks = cut ? [48, 49, 50, 51, 52] : [0, 10, 20, 30, 40, 50, 60];
  return (
    <ArtFrame kind="experiment" title={L(W.axTitle, lang)} body={body || L(W.axHint, lang)}>
      <Stage w={320} h={200} label={L(W.axTitle, lang)}>
        <text x="170" y="18" textAnchor="middle" fontSize="10" fontWeight="900" fill="#1e1b4b">{L(W.votes, lang)}</text>
        {ticks.map((v) => (
          <g key={v}>
            <line x1="60" y1={Y(v)} x2="290" y2={Y(v)} stroke={COLORS.grid} />
            <text x="54" y={Y(v) + 3} textAnchor="end" fontSize="8" fontWeight="700" fill={cut ? COLORS.d : "#475569"}>{v}</text>
          </g>
        ))}
        <line x1="60" y1="30" x2="60" y2="170" stroke={COLORS.line} strokeWidth="1.5" />
        <line x1="60" y1="170" x2="290" y2="170" stroke={COLORS.line} strokeWidth="1.5" />
        {cut ? <path d="M54,176 l6,-5 l6,5 M54,181 l6,-5 l6,5" stroke={COLORS.d} strokeWidth="1.4" fill="none" /> : null}
        {votes.map((v, k) => (
          <g key={k}>
            <rect x={100 + k * 100} y={Y(v)} width="60" height={170 - Y(v)} rx="3" fill={k ? COLORS.b : COLORS.a} />
            <text x={130 + k * 100} y={Y(v) - 5} textAnchor="middle" fontSize="10" fontWeight="900" fill="#1e1b4b">{v}</text>
            <text x={130 + k * 100} y="186" textAnchor="middle" fontSize="9" fontWeight="800" fill="#334155">{L(W.names[k], lang)}</text>
          </g>
        ))}
      </Stage>
      <div className="art-chips"><Toggle on={cut} label={L(W.cut, lang)} onChange={setCut} /></div>
      <p className={cut ? "sim-note is-bad" : "sim-note is-good"}>{L(cut ? W.liar : W.honest, lang)}</p>
    </ArtFrame>
  );
}

export default function Stats({ spec, lang }: SimProps) {
  return spec.opts.mode === "axis" ? <Axis lang={lang} body={spec.body} /> : <Center lang={lang} body={spec.body} />;
}
