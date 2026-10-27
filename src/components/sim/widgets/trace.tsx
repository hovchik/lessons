"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from "lucide-react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { TRACES } from "../data/traces";
import { L, t, UI } from "../labels";
import { cn } from "@/lib/utils";

/** ```sim trace set=sum: run a short Python program line by line and watch its variables, calls and output. */
const W = {
  title: t("Step by step: run the program", "Քայլ առ քայլ․ կատարի՛ր ծրագիրը", "Шаг за шагом: выполни программу"),
  hint: t("The arrow shows the line that runs next. Watch how the variables change. Before each Next, try to predict what happens.", "Սլաքը ցույց է տալիս հաջորդ կատարվող տողը։ Հետևի՛ր, թե ինչպես են փոխվում փոփոխականները։ Ամեն «Հաջորդը»-ից առաջ փորձի՛ր գուշակել, թե ինչ կլինի։", "Стрелка показывает строку, которая выполнится следующей. Следи, как меняются переменные. Перед каждым «Дальше» попробуй предсказать, что произойдёт."),
  vars: t("Variables", "Փոփոխականներ", "Переменные"),
  output: t("Output", "Արտածում", "Вывод"),
  global: t("program", "ծրագիր", "программа"),
  returns: t("{f} returns {v}", "{f} ֆունկցիան վերադարձնում է {v}", "{f} возвращает {v}"),
  finished: t("The program has finished.", "Ծրագիրն ավարտվեց։", "Программа завершилась."),
  empty: t("(nothing yet)", "(դեռ ոչինչ)", "(пока ничего)"),
  calls: t("Calls", "Կանչեր", "Вызовы"),
};

export default function Trace({ spec, lang }: SimProps) {
  const set = TRACES[spec.opts.set ?? ""];
  const tr = set ? set[lang] ?? set.en : null;
  const [i, setI] = useState(0);
  const [play, setPlay] = useState(false);
  const n = tr?.steps.length ?? 0;
  useEffect(() => {
    if (!play) return;
    if (i >= n - 1) { setPlay(false); return; }
    const id = setTimeout(() => setI(i + 1), 1100);
    return () => clearTimeout(id);
  }, [play, i, n]);
  if (!tr) return <pre className="art-unknown">trace {spec.opts.set}</pre>;
  const st = tr.steps[i];
  const prev = i > 0 ? tr.steps[i - 1] : null;
  const lines = tr.code.split("\n");
  const last = i === n - 1;
  const prevVal = (fi: number, k: string) => prev?.f[fi]?.[1].find(([name]) => name === k)?.[1];
  const top = st.f[st.f.length - 1];
  return (
    <ArtFrame kind="steps" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <div className="sim-trace">
        <pre className="sim-code" aria-label="Python">
          {lines.map((ln, k) => (
            <span key={k} className={cn("sim-code-line", st.l === k + 1 && (st.r !== undefined ? "is-ret" : "is-on"))}>
              <i aria-hidden="true">{st.l === k + 1 ? "➜" : k + 1}</i>
              {ln || " "}
            </span>
          ))}
        </pre>
        <div className="sim-trace-side">
          {st.f.length > 1 ? <p className="sim-trace-h">{L(W.calls, lang)}</p> : <p className="sim-trace-h">{L(W.vars, lang)}</p>}
          {st.f.map(([fn, vars], fi) => (
            <div key={fi} className={cn("sim-frame", fi === st.f.length - 1 && st.f.length > 1 && "is-top")}>
              {st.f.length > 1 || fn ? <b className="sim-frame-name">{fn ? `${fn}()` : L(W.global, lang)}</b> : null}
              {vars.length ? (
                <dl>
                  {vars.map(([k, v]) => (
                    <div key={k} className={prevVal(fi, k) !== v ? "is-new" : undefined}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              ) : <span className="sim-frame-empty">—</span>}
            </div>
          ))}
          {st.r !== undefined ? <p className="sim-note is-good">{L(W.returns, lang).replace("{f}", top[0]).replace("{v}", st.r)}</p> : null}
          {last ? <p className="sim-note is-good">{L(W.finished, lang)}</p> : null}
          <p className="sim-trace-h">{L(W.output, lang)}</p>
          <pre className="sim-console">{st.o || L(W.empty, lang)}</pre>
        </div>
      </div>
      <div className="art-row">
        <span className="art-step-num">{L(UI.step, lang)} {i + 1}/{n}</span>
        <button type="button" className="art-btn" onClick={() => setI(Math.max(0, i - 1))} disabled={i === 0}><ChevronLeft className="size-4" aria-hidden="true" />{L(UI.back, lang)}</button>
        <button type="button" className="art-btn is-primary" onClick={() => setI(Math.min(n - 1, i + 1))} disabled={last}>{L(UI.next, lang)}<ChevronRight className="size-4" aria-hidden="true" /></button>
        <button type="button" className="art-btn" onClick={() => (last ? setI(0) : setPlay(!play))} aria-pressed={play}>
          {last ? <RotateCcw className="size-4" aria-hidden="true" /> : play ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
          {L(last ? UI.again : play ? UI.pause : UI.play, lang)}
        </button>
      </div>
    </ArtFrame>
  );
}
