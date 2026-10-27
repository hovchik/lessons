"use client";

import { useMemo, useState, type ReactNode } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Readouts, Stage } from "../kit";
import { L, t } from "../labels";
import { COLORS } from "../math-kit";

/**
 * Lossless compression.
 *   compress                 run-length encoding (RLE) of a text or a row of pixels
 *   compress mode=huffman    a Huffman tree: frequent symbols get short codes
 */
const W = {
  rle: t("Experiment: run-length encoding", "Փորձ․ կրկնությունների կոդավորում (RLE)", "Опыт: кодирование длин серий (RLE)"),
  rleHint: t("A run of the same symbol is stored as a count and the symbol. Try a text with long runs, then one without.", "Միևնույն նշանի շարքը պահվում է որպես քանակ և նշան։ Փորձի՛ր երկար կրկնություններով տեքստ, հետո՝ առանց դրանց։", "Серия одинаковых символов хранится как число и символ. Попробуй текст с длинными сериями, а потом без них."),
  huffman: t("Experiment: Huffman coding", "Փորձ․ Հաֆմանի կոդավորում", "Опыт: код Хаффмана"),
  huffHint: t("Count how often each symbol appears, then keep joining the two rarest groups. Read a symbol's code along the path from the top: left = 0, right = 1.", "Հաշվի՛ր, թե որքան հաճախ է հանդիպում յուրաքանչյուր նշան, հետո միշտ միացրու երկու ամենահազվադեպ խմբերը։ Նշանի կոդը կարդա վերևից ճանապարհով․ ձախ = 0, աջ = 1։", "Посчитай, как часто встречается каждый символ, затем каждый раз объединяй две самые редкие группы. Код символа читается по пути сверху: влево = 0, вправо = 1."),
  input: t("Text", "Տեքստ", "Текст"),
  encoded: t("Encoded", "Կոդավորված", "Закодировано"),
  before: t("Before", "Առաջ", "До"),
  after: t("After", "Հետո", "После"),
  ratio: t("Compression ratio", "Սեղմման գործակից", "Коэффициент сжатия"),
  chars: t("symbols", "նշան", "символов"),
  bits: t("bits", "բիթ", "бит"),
  fixed: t("8 bits each", "8-ական բիթ", "по 8 бит"),
  code: t("code", "կոդ", "код"),
  times: t("times", "անգամ", "раз"),
  worse: t("Longer than before! RLE only helps when there are long runs.", "Ավելի երկար, քան առաջ։ RLE-ն օգնում է միայն երկար կրկնությունների դեպքում։", "Длиннее, чем было! RLE помогает только при длинных сериях."),
};

function rle(s: string) {
  const out: Array<[number, string]> = [];
  for (const ch of s) {
    const last = out[out.length - 1];
    if (last && last[1] === ch) last[0]++;
    else out.push([1, ch]);
  }
  return out;
}

const RUN_COLORS = ["#c7d2fe", "#fde68a", "#bbf7d0", "#fecdd3", "#bae6fd", "#ddd6fe"];

function Rle({ lang, body }: { lang: ArtLang; body: string }) {
  const [s, setS] = useState("WWWWWWWWBBBWWWWWWBBBBBBBWWWW");
  const runs = rle(s);
  const enc = runs.map(([n, ch]) => `${n}${ch}`).join("");
  const pixels = /^[WB]+$/.test(s);
  const cells = [...s].slice(0, 40);
  const cw = Math.min(16, 300 / Math.max(cells.length, 1));
  let k = 0;
  return (
    <ArtFrame kind="experiment" title={L(W.rle, lang)} body={body || L(W.rleHint, lang)}>
      <Stage w={320} h={64} label={L(W.rle, lang)}>
        {runs.flatMap(([n, ch], r) =>
          Array.from({ length: n }, () => {
            const i = k++;
            if (i >= 40) return null;
            return (
              <g key={i}>
                <rect x={10 + i * cw} y="8" width={cw - 1} height="24" rx="2" fill={pixels ? (ch === "B" ? "#1e293b" : "#fff") : RUN_COLORS[r % RUN_COLORS.length]} stroke="#94a3b8" strokeWidth="0.6" />
                {!pixels && cw > 9 ? <text x={10 + i * cw + cw / 2} y="24" textAnchor="middle" fontSize="9" fontWeight="900" fill="#1e1b4b">{ch}</text> : null}
              </g>
            );
          }),
        )}
        <text x="10" y="52" fontSize="11" fontWeight="900" fill={COLORS.a}>{enc.length > 46 ? enc.slice(0, 46) + "…" : enc}</text>
      </Stage>
      <input className="art-input" value={s} maxLength={40} onChange={(e) => setS(e.target.value.replace(/\s/g, ""))} aria-label={L(W.input, lang)} />
      <Readouts items={[[L(W.before, lang), `${s.length} ${L(W.chars, lang)}`, COLORS.a], [L(W.after, lang), `${enc.length} ${L(W.chars, lang)}`, COLORS.b], [L(W.ratio, lang), enc.length ? `${(s.length / enc.length).toFixed(1).replace(".", lang === "en" ? "." : ",")} : 1` : "—", COLORS.c]]} />
      {enc.length > s.length ? <p className="sim-note is-bad">{L(W.worse, lang)}</p> : null}
      <div className="art-chips">
        {["WWWWWWWWBBBWWWWWWBBBBBBBWWWW", "AAAABBBCCDAA", "ABCDEF"].map((x) => <button key={x} type="button" className="art-chip" onClick={() => setS(x)}>{x.length > 14 ? x.slice(0, 12) + "…" : x}</button>)}
      </div>
    </ArtFrame>
  );
}

type Node = { w: number; sym?: string; l?: Node; r?: Node; key: string };

function huffman(s: string) {
  const freq = new Map<string, number>();
  for (const ch of s) freq.set(ch, (freq.get(ch) ?? 0) + 1);
  let q: Node[] = [...freq.entries()].map(([sym, w]) => ({ w, sym, key: sym }));
  const ord = (a: Node, b: Node) => a.w - b.w || (a.key < b.key ? -1 : 1);
  if (q.length === 1) q = [{ w: q[0].w, l: q[0], key: q[0].key }];
  while (q.length > 1) {
    q.sort(ord);
    const [a, b] = q.splice(0, 2);
    q.push({ w: a.w + b.w, l: a, r: b, key: a.key + b.key });
  }
  const codes: Record<string, string> = {};
  const walk = (n: Node, c: string) => {
    if (n.sym !== undefined) { codes[n.sym] = c || "0"; return; }
    if (n.l) walk(n.l, c + "0");
    if (n.r) walk(n.r, c + "1");
  };
  if (q[0]) walk(q[0], "");
  return { root: q[0], codes, freq };
}

function Huffman({ lang, body }: { lang: ArtLang; body: string }) {
  const [s, setS] = useState("ABRACADABRA");
  const { root, codes, freq } = useMemo(() => huffman(s), [s]);
  const total = [...s].reduce((n, ch) => n + (codes[ch]?.length ?? 0), 0);
  // lay out the tree: leaves spaced evenly, parents above the middle of their children
  const pos = new Map<Node, [number, number]>();
  let depth = 0;
  const leaves: Node[] = [];
  const scan = (n: Node, d: number) => { depth = Math.max(depth, d); if (n.sym !== undefined) leaves.push(n); if (n.l) scan(n.l, d + 1); if (n.r) scan(n.r, d + 1); };
  if (root) scan(root, 0);
  const lw = 300 / Math.max(leaves.length, 1), dy = Math.min(34, 150 / Math.max(depth, 1));
  const place = (n: Node, d: number): number => {
    let x: number;
    if (n.sym !== undefined) x = 10 + leaves.indexOf(n) * lw + lw / 2;
    else { const xs = [n.l, n.r].filter(Boolean).map((c) => place(c!, d + 1)); x = xs.reduce((a, b) => a + b, 0) / xs.length; }
    pos.set(n, [x, 18 + d * dy]);
    return x;
  };
  if (root) place(root, 0);
  const H = 40 + depth * dy;
  const edges: ReactNode[] = [], dots: ReactNode[] = [];
  pos.forEach(([x, y], n) => {
    ([[n.l, "0"], [n.r, "1"]] as Array<[Node | undefined, string]>).forEach(([c, b]) => {
      if (!c) return;
      const [cx, cy] = pos.get(c)!;
      edges.push(
        <g key={n.key + b}>
          <line x1={x} y1={y} x2={cx} y2={cy} stroke="#94a3b8" strokeWidth="1.6" />
          <text x={(x + cx) / 2 + (b === "0" ? -6 : 6)} y={(y + cy) / 2} textAnchor="middle" fontSize="9" fontWeight="900" fill={b === "0" ? COLORS.a : COLORS.d}>{b}</text>
        </g>,
      );
    });
    dots.push(
      <g key={n.key}>
        <circle cx={x} cy={y} r={n.sym !== undefined ? 11 : 8} fill={n.sym !== undefined ? "#fef3c7" : "#eef2ff"} stroke={n.sym !== undefined ? "#f59e0b" : "#818cf8"} strokeWidth="1.6" />
        <text x={x} y={y + 3.5} textAnchor="middle" fontSize={n.sym !== undefined ? 10 : 8} fontWeight="900" fill="#1e1b4b">{n.sym !== undefined ? (n.sym === " " ? "␣" : n.sym) : n.w}</text>
        {n.sym !== undefined ? <text x={x} y={y + 22} textAnchor="middle" fontSize="8" fontWeight="800" fill="#64748b">{n.w}×</text> : null}
      </g>,
    );
  });
  const syms = [...freq.entries()].sort((a, b) => b[1] - a[1]);
  return (
    <ArtFrame kind="experiment" title={L(W.huffman, lang)} body={body || L(W.huffHint, lang)}>
      <Stage w={320} h={H} label={L(W.huffman, lang)}>{edges}{dots}</Stage>
      <input className="art-input" value={s} maxLength={30} onChange={(e) => setS(e.target.value || "A")} aria-label={L(W.input, lang)} />
      <table className="sim-truth">
        <thead><tr><th>⌨</th><th>{L(W.times, lang)}</th><th>{L(W.code, lang)}</th></tr></thead>
        <tbody>{syms.map(([ch, n]) => <tr key={ch}><td>{ch === " " ? "␣" : ch}</td><td>{n}</td><td><code>{codes[ch]}</code></td></tr>)}</tbody>
      </table>
      <Readouts items={[[L(W.fixed, lang), `${[...s].length * 8} ${L(W.bits, lang)}`, COLORS.a], ["Huffman", `${total} ${L(W.bits, lang)}`, COLORS.b], [L(W.ratio, lang), total ? `${(([...s].length * 8) / total).toFixed(1).replace(".", lang === "en" ? "." : ",")} : 1` : "—", COLORS.c]]} />
      <div className="art-chips">
        {["ABRACADABRA", "MISSISSIPPI", "ԱՐԱՐԱՏ", "ABCDEFGH"].map((x) => <button key={x} type="button" className="art-chip" onClick={() => setS(x)}>{x}</button>)}
      </div>
    </ArtFrame>
  );
}

export default function Compress({ spec, lang }: SimProps) {
  return spec.opts.mode === "huffman" ? <Huffman lang={lang} body={spec.body} /> : <Rle lang={lang} body={spec.body} />;
}
