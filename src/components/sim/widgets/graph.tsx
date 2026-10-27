"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from "lucide-react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang, Tr } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Readouts, Stage } from "../kit";
import { L, t, UI } from "../labels";
import { COLORS } from "../math-kit";

/**
 * Walking through a graph of seven towns A–G, step by step.
 *   graph                breadth-first search from A, with the queue
 *   graph mode=dfs       depth-first search from A, with the stack
 *   graph mode=dijkstra  Dijkstra's shortest paths from A on weighted roads
 */
const W = {
  bfs: t("Step by step: breadth-first search", "Քայլ առ քայլ․ որոնում լայնությամբ (BFS)", "Шаг за шагом: поиск в ширину"),
  dfs: t("Step by step: depth-first search", "Քայլ առ քայլ․ որոնում խորությամբ (DFS)", "Шаг за шагом: поиск в глубину"),
  dijkstra: t("Step by step: Dijkstra's algorithm", "Քայլ առ քայլ․ Դեյկստրայի ալգորիթմը", "Шаг за шагом: алгоритм Дейкстры"),
  hint: t("Start at A. Grey: not reached yet; yellow: waiting; green: finished. Press Next.", "Սկսում ենք A-ից։ Մոխրագույն՝ դեռ չհասած, դեղին՝ սպասում է, կանաչ՝ ավարտված։ Սեղմի՛ր «Հաջորդը»։", "Начинаем с A. Серые — ещё не достигнуты, жёлтые — ждут, зелёные — обработаны. Нажимай «Дальше»."),
  queue: t("Queue", "Հերթ", "Очередь"),
  stack: t("Stack", "Ստեկ", "Стек"),
  order: t("Visit order", "Այցելության հերթականություն", "Порядок обхода"),
  dist: t("Distances from A", "Հեռավորություններ A-ից", "Расстояния от A"),
  path: t("Shortest path A → G", "Ամենակարճ ճանապարհ A → G", "Кратчайший путь A → G"),
  start: t("Put A in the {x}.", "A քաղաքը դնում ենք {x}ում։", "Кладём A в {x}."),
  startD: t("A is 0 from itself; every other town is ∞ for now.", "A քաղաքը իրենից 0 հեռավորության վրա է, մյուս բոլորը առայժմ ∞ են։", "До A расстояние 0, до остальных пока ∞."),
  takeQ: t("Take {v} from the front of the queue and add its unseen neighbours {n} to the back.", "Հերթի սկզբից վերցնում ենք {v} քաղաքը, իսկ նրա դեռ չտեսած հարևաններին՝ {n}, ավելացնում ենք վերջում։", "Берём {v} из начала очереди и добавляем в конец его новых соседей: {n}."),
  takeS: t("Go to {v}; next try its unvisited neighbours {n}.", "Գնում ենք {v} քաղաք, հետո փորձում ենք նրա դեռ չայցելած հարևաններին՝ {n}։", "Идём в {v}; дальше пробуем его непосещённых соседей: {n}."),
  back: t("{v} has no new neighbours: go back.", "{v} քաղաքը նոր հարևաններ չունի․ վերադառնում ենք։", "У города {v} нет новых соседей: возвращаемся."),
  settle: t("The nearest unfinished town is {v} ({d}). Check its roads: {n}.", "Ամենամոտ չավարտված քաղաքը {v} է ({d})։ Ստուգում ենք նրա ճանապարհները․ {n}։", "Ближайший необработанный город — {v} ({d}). Проверяем его дороги: {n}."),
  none: t("none", "չկան", "нет"),
  doneB: t("Every town reached. BFS visits towns in rings: first those 1 road away, then 2, then 3.", "Բոլոր քաղաքներին հասանք։ BFS-ն այցելում է օղակներով՝ նախ 1 ճանապարհ հեռու գտնվողներին, հետո 2, հետո 3։", "Все города достигнуты. BFS обходит кольцами: сначала те, что в 1 дороге, потом в 2, потом в 3."),
  doneS: t("Every town reached. DFS goes as deep as it can before turning back.", "Բոլոր քաղաքներին հասանք։ DFS-ն գնում է որքան հնարավոր է խորը, մինչև ետ դառնալը։", "Все города достигнуты. DFS уходит как можно глубже, прежде чем повернуть назад."),
  doneD: t("All distances are final. The shortest way to G is not the one with the fewest roads!", "Բոլոր հեռավորությունները վերջնական են։ G-ի ամենակարճ ճանապարհը ամենաքիչ ճանապարհներով ճանապարհը չէ։", "Все расстояния окончательны. Кратчайший путь до G — не тот, где меньше всего дорог!"),
};

const NODES: Record<string, [number, number]> = { A: [30, 100], B: [95, 38], C: [95, 162], D: [165, 100], E: [235, 38], F: [235, 162], G: [298, 100] };
const EDGES: Array<[string, string, number]> = [["A", "B", 4], ["A", "C", 2], ["B", "C", 1], ["B", "D", 5], ["C", "D", 8], ["C", "F", 10], ["D", "E", 2], ["D", "F", 6], ["E", "G", 3], ["F", "G", 2]];
const ADJ: Record<string, string[]> = {};
for (const [a, b] of EDGES) { (ADJ[a] ??= []).push(b); (ADJ[b] ??= []).push(a); }
for (const k of Object.keys(ADJ)) ADJ[k].sort();
const wOf = (a: string, b: string) => EDGES.find(([x, y]) => (x === a && y === b) || (x === b && y === a))![2];

type Frame = { cur?: string; done: string[]; wait: string[]; tree: string[]; dist?: Record<string, number>; order: string[]; note: Tr; vars: Record<string, string> };
const fill = (tr: Tr, v: Record<string, string>): Tr => {
  const o = { ...tr };
  for (const k of Object.keys(o) as Array<keyof Tr>) for (const [n, x] of Object.entries(v)) o[k] = o[k].replaceAll(`{${n}}`, x);
  return o;
};
const ek = (a: string, b: string) => [a, b].sort().join("");

function bfs(): Frame[] {
  const f: Frame[] = [], seen = new Set(["A"]), q = ["A"], done: string[] = [], tree: string[] = [];
  f.push({ done: [], wait: ["A"], tree: [], order: [], note: W.start, vars: { x: "queue" } });
  while (q.length) {
    const v = q.shift()!;
    const nw = ADJ[v].filter((u) => !seen.has(u));
    nw.forEach((u) => { seen.add(u); q.push(u); tree.push(ek(v, u)); });
    done.push(v);
    f.push({ cur: v, done: [...done], wait: [...q], tree: [...tree], order: [...done], note: W.takeQ, vars: { v, n: nw.join(", ") || "—" } });
  }
  f.push({ done: [...done], wait: [], tree: [...tree], order: [...done], note: W.doneB, vars: {} });
  return f;
}

function dfs(): Frame[] {
  const f: Frame[] = [], seen = new Set<string>(), done: string[] = [], tree: string[] = [], stack: string[] = [];
  f.push({ done: [], wait: ["A"], tree: [], order: [], note: W.start, vars: { x: "stack" } });
  const go = (v: string) => {
    seen.add(v);
    stack.push(v);
    done.push(v);
    const nw = ADJ[v].filter((u) => !seen.has(u));
    f.push({ cur: v, done: [...done], wait: [...stack], tree: [...tree], order: [...done], note: W.takeS, vars: { v, n: nw.join(", ") || "—" } });
    for (const u of ADJ[v]) if (!seen.has(u)) { tree.push(ek(v, u)); go(u); }
    stack.pop();
    if (stack.length) f.push({ cur: stack[stack.length - 1], done: [...done], wait: [...stack], tree: [...tree], order: [...done], note: W.back, vars: { v } });
  };
  go("A");
  f.push({ done: [...done], wait: [], tree: [...tree], order: [...done], note: W.doneS, vars: {} });
  return f;
}

function dijkstra(): Frame[] {
  const f: Frame[] = [], dist: Record<string, number> = {}, prev: Record<string, string> = {}, done: string[] = [];
  for (const k of Object.keys(NODES)) dist[k] = Infinity;
  dist.A = 0;
  const treeOf = () => Object.entries(prev).map(([v, u]) => ek(v, u));
  f.push({ done: [], wait: ["A"], tree: [], dist: { ...dist }, order: [], note: W.startD, vars: {} });
  while (done.length < 7) {
    const v = Object.keys(NODES).filter((k) => !done.includes(k)).sort((a, b) => dist[a] - dist[b])[0];
    done.push(v);
    const notes: string[] = [];
    for (const u of ADJ[v]) {
      if (done.includes(u)) continue;
      const nd = dist[v] + wOf(v, u);
      if (nd < dist[u]) { notes.push(`${u}: ${dist[u] === Infinity ? "∞" : dist[u]} → ${nd}`); dist[u] = nd; prev[u] = v; }
      else notes.push(`${u}: ${dist[u]} ≤ ${nd}`);
    }
    const wait = Object.keys(NODES).filter((k) => !done.includes(k) && dist[k] < Infinity);
    f.push({ cur: v, done: [...done], wait, tree: treeOf(), dist: { ...dist }, order: [...done], note: W.settle, vars: { v, d: String(dist[v]), n: notes.join("; ") || "—" } });
  }
  const path = ["G"];
  while (path[0] !== "A") path.unshift(prev[path[0]]);
  const pe: string[] = [];
  for (let i = 1; i < path.length; i++) pe.push(ek(path[i - 1], path[i]));
  f.push({ done: [...done], wait: [], tree: pe, dist: { ...dist }, order: path, note: W.doneD, vars: {} });
  return f;
}

export default function Graph({ spec, lang }: SimProps) {
  const mode = spec.opts.mode === "dfs" || spec.opts.mode === "dijkstra" ? spec.opts.mode : "bfs";
  const frames = useMemo(() => (mode === "dfs" ? dfs() : mode === "dijkstra" ? dijkstra() : bfs()), [mode]);
  const [i, setI] = useState(0);
  const [play, setPlay] = useState(false);
  const n = frames.length;
  useEffect(() => {
    if (!play) return;
    if (i >= n - 1) { setPlay(false); return; }
    const id = setTimeout(() => setI(i + 1), 1600);
    return () => clearTimeout(id);
  }, [play, i, n]);
  const fr = frames[i];
  const weighted = mode === "dijkstra";
  const vars = { ...fr.vars };
  if (vars.x) vars.x = L(vars.x === "queue" ? W.queue : W.stack, lang).toLowerCase();
  if (vars.n === "—") vars.n = L(W.none, lang);
  const last = i === n - 1;
  return (
    <ArtFrame kind="steps" title={L(W[mode], lang)} body={spec.body || L(W.hint, lang)}>
      <Stage w={328} h={200} label={L(W[mode], lang)}>
        {EDGES.map(([a, b, w]) => {
          const [x1, y1] = NODES[a], [x2, y2] = NODES[b];
          const inTree = fr.tree.includes(ek(a, b));
          return (
            <g key={a + b}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={inTree ? (last && weighted ? COLORS.d : COLORS.c) : "#cbd5e1"} strokeWidth={inTree ? 4 : 2.2} />
              {weighted ? (
                <g>
                  <rect x={(x1 + x2) / 2 - 8} y={(y1 + y2) / 2 - 8} width="16" height="15" rx="4" fill="#fff" stroke="#cbd5e1" />
                  <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 + 3.5} textAnchor="middle" fontSize="9.5" fontWeight="900" fill="#334155">{w}</text>
                </g>
              ) : null}
            </g>
          );
        })}
        {Object.entries(NODES).map(([k, [x, y]]) => {
          const fillC = fr.done.includes(k) ? "#86efac" : fr.wait.includes(k) ? "#fde68a" : "#f1f5f9";
          return (
            <g key={k}>
              <circle cx={x} cy={y} r="15" fill={fillC} stroke={fr.cur === k ? COLORS.d : "#64748b"} strokeWidth={fr.cur === k ? 3.5 : 1.8} />
              <text x={x} y={y + 5} textAnchor="middle" fontSize="14" fontWeight="900" fill="#1e1b4b">{k}</text>
              {weighted && fr.dist ? (
                <text x={x} y={y + (y > 120 ? 30 : -21)} textAnchor="middle" fontSize="10" fontWeight="900" fill={COLORS.a}>{fr.dist[k] === Infinity ? "∞" : fr.dist[k]}</text>
              ) : null}
            </g>
          );
        })}
      </Stage>
      <p className="sim-note" aria-live="polite">{L(fill(fr.note, vars), lang)}</p>
      <Readouts
        items={
          weighted
            ? [[L(last ? W.path : W.order, lang), fr.order.join(last ? " → " : ", ") || "—", COLORS.d], [L(UI.step, lang), `${i + 1}/${n}`, COLORS.c]]
            : [[L(mode === "bfs" ? W.queue : W.stack, lang), fr.wait.length ? `[${fr.wait.join(", ")}]` : "[ ]", COLORS.b], [L(W.order, lang), fr.order.join(", ") || "—", COLORS.c], [L(UI.step, lang), `${i + 1}/${n}`, COLORS.a]]
        }
      />
      <div className="art-row">
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
