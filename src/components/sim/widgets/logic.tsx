"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Choice, Readouts, Stage } from "../kit";
import { L, t } from "../labels";
import { COLORS } from "../math-kit";

/**
 * Logic gates and the half adder.
 *   logic              switch inputs A and B and watch NOT, AND, OR, XOR; the truth table marks the current row
 *   logic mode=adder   a half adder: XOR gives the sum bit, AND gives the carry
 */
const W = {
  gates: t("Experiment: logic gates", "Փորձ․ տրամաբանական փականներ", "Опыт: логические элементы"),
  gatesHint: t("Tap A and B to switch them between 0 and 1. A lit wire carries 1.", "Սեղմի՛ր A-ին և B-ին՝ դրանք 0-ի և 1-ի միջև փոխելու համար։ Լուսավորված լարը 1 է փոխանցում։", "Нажимай на A и B, чтобы переключать их между 0 и 1. Светящийся провод передаёт 1."),
  adder: t("Experiment: a half adder", "Փորձ․ կիսագումարիչ", "Опыт: полусумматор"),
  adderHint: t("Two gates add two bits: XOR gives the sum digit, AND gives the carry. Switch A and B.", "Երկու փական գումարում են երկու բիթ․ XOR-ը տալիս է գումարի թվանշանը, AND-ը՝ փոխանցումը։ Փոխի՛ր A-ն և B-ն։", "Два элемента складывают два бита: XOR даёт цифру суммы, AND — перенос. Переключай A и B."),
  table: t("Truth table", "Ճշմարտության աղյուսակ", "Таблица истинности"),
  sum: t("Sum S", "Գումար S", "Сумма S"),
  carry: t("Carry C", "Փոխանցում C", "Перенос C"),
  result: t("A + B in binary", "A + B երկուական", "A + B в двоичной"),
};

type G = "not" | "and" | "or" | "xor" | "nand";
const F: Record<G, (a: number, b: number) => number> = {
  not: (a) => 1 - a,
  and: (a, b) => a & b,
  or: (a, b) => a | b,
  xor: (a, b) => a ^ b,
  nand: (a, b) => 1 - (a & b),
};
const PY: Record<G, string> = { not: "not A", and: "A and B", or: "A or B", xor: "A != B", nand: "not (A and B)" };
const on = "#f59e0b", off = "#cbd5e1";

/** A gate symbol with its left edge at x and its middle at y (40 wide, 28 tall). */
function Gate({ g, x, y, out }: { g: G; x: number; y: number; out: number }) {
  const fill = out ? "#fef3c7" : "#fff";
  const stroke = "#334155";
  let body;
  if (g === "not") body = <path d={`M${x},${y - 12} L${x + 26},${y} L${x},${y + 12} Z`} fill={fill} stroke={stroke} strokeWidth="1.6" />;
  else if (g === "and" || g === "nand") body = <path d={`M${x},${y - 14} H${x + 18} A14,14 0 0 1 ${x + 18},${y + 14} H${x} Z`} fill={fill} stroke={stroke} strokeWidth="1.6" />;
  else body = (
    <g>
      {g === "xor" ? <path d={`M${x - 5},${y - 14} Q${x + 3},${y} ${x - 5},${y + 14}`} fill="none" stroke={stroke} strokeWidth="1.6" /> : null}
      <path d={`M${x},${y - 14} Q${x + 24},${y - 14} ${x + 34},${y} Q${x + 24},${y + 14} ${x},${y + 14} Q${x + 8},${y} ${x},${y - 14} Z`} fill={fill} stroke={stroke} strokeWidth="1.6" />
    </g>
  );
  const bubble = g === "not" || g === "nand";
  const end = g === "not" ? x + 26 : x + 32;
  return (
    <g>
      {body}
      {bubble ? <circle cx={end + 4} cy={y} r="3.5" fill="#fff" stroke={stroke} strokeWidth="1.5" /> : null}
      <text x={x + (g === "not" ? 9 : 14)} y={y + 3.5} textAnchor="middle" fontSize="8" fontWeight="900" fill="#334155">{g === "not" ? "" : g.toUpperCase()}</text>
    </g>
  );
}

function Switch({ x, y, v, name, onTap }: { x: number; y: number; v: number; name: string; onTap: () => void }) {
  return (
    <g onClick={onTap} style={{ cursor: "pointer" }}>
      <rect x={x} y={y - 14} width="36" height="28" rx="8" fill={v ? on : "#fff"} stroke={v ? on : "#94a3b8"} strokeWidth="2" />
      <text x={x + 18} y={y + 5} textAnchor="middle" fontSize="13" fontWeight="900" fill={v ? "#fff" : "#475569"}>{name}={v}</text>
    </g>
  );
}

function Lamp({ x, y, v, label }: { x: number; y: number; v: number; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="10" fill={v ? "#fde047" : "#e2e8f0"} stroke={v ? on : "#94a3b8"} strokeWidth="2" />
      <text x={x} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="900" fill="#1e1b4b">{v}</text>
      <text x={x + 14} y={y + 4} fontSize="9" fontWeight="900" fill="#334155">{label}</text>
    </g>
  );
}

function Gates({ lang, body }: { lang: ArtLang; body: string }) {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [sel, setSel] = useState<G>("and");
  const rows: G[] = ["not", "and", "or", "xor", "nand"];
  return (
    <ArtFrame kind="experiment" title={L(W.gates, lang)} body={body || L(W.gatesHint, lang)}>
      <Stage w={320} h={230} label={L(W.gates, lang)}>
        <Switch x={8} y={70} v={a} name="A" onTap={() => setA(1 - a)} />
        <Switch x={8} y={160} v={b} name="B" onTap={() => setB(1 - b)} />
        {rows.map((g, i) => {
          const y = 26 + i * 44;
          const out = F[g](a, b);
          const gx = 150;
          return (
            <g key={g} onClick={() => setSel(g)} style={{ cursor: "pointer" }} opacity={sel === g ? 1 : 0.9}>
              {sel === g ? <rect x={gx - 18} y={y - 20} width={180} height={40} rx="10" fill="#eef2ff" /> : null}
              <path d={`M44,70 H${80 + i * 6} V${g === "not" ? y : y - 7} H${gx}`} fill="none" stroke={a ? on : off} strokeWidth="2.2" />
              {g !== "not" ? <path d={`M44,160 H${110 + i * 6} V${y + 7} H${gx}`} fill="none" stroke={b ? on : off} strokeWidth="2.2" /> : null}
              <Gate g={g} x={gx} y={y} out={out} />
              <line x1={gx + 40} y1={y} x2={gx + 60} y2={y} stroke={out ? on : off} strokeWidth="2.2" />
              <Lamp x={gx + 70} y={y} v={out} label={PY[g]} />
            </g>
          );
        })}
      </Stage>
      <Choice value={sel} options={rows.map((g) => [g, g.toUpperCase()] as [G, string])} onChange={setSel} />
      <table className="sim-truth">
        <caption>{L(W.table, lang)}: {PY[sel]}</caption>
        <thead><tr><th>A</th>{sel !== "not" ? <th>B</th> : null}<th>{sel.toUpperCase()}</th></tr></thead>
        <tbody>
          {(sel === "not" ? [[0, 0], [1, 0]] : [[0, 0], [0, 1], [1, 0], [1, 1]]).map(([x, y]) => (
            <tr key={`${x}${y}`} className={x === a && (sel === "not" || y === b) ? "is-on" : undefined}>
              <td>{x}</td>{sel !== "not" ? <td>{y}</td> : null}<td><b>{F[sel](x, y)}</b></td>
            </tr>
          ))}
        </tbody>
      </table>
    </ArtFrame>
  );
}

function Adder({ lang, body }: { lang: ArtLang; body: string }) {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const s = a ^ b, c = a & b;
  return (
    <ArtFrame kind="experiment" title={L(W.adder, lang)} body={body || L(W.adderHint, lang)}>
      <Stage w={320} h={160} label={L(W.adder, lang)}>
        <Switch x={8} y={50} v={a} name="A" onTap={() => setA(1 - a)} />
        <Switch x={8} y={112} v={b} name="B" onTap={() => setB(1 - b)} />
        <path d="M44,50 H90 V40 H150" fill="none" stroke={a ? on : off} strokeWidth="2.2" />
        <path d="M44,112 H110 V54 H150" fill="none" stroke={b ? on : off} strokeWidth="2.2" />
        <path d="M90,50 V106 H150" fill="none" stroke={a ? on : off} strokeWidth="2.2" />
        <path d="M110,112 V120 H150" fill="none" stroke={b ? on : off} strokeWidth="2.2" />
        <circle cx="90" cy="50" r="3" fill={a ? on : off} />
        <circle cx="110" cy="112" r="3" fill={b ? on : off} />
        <Gate g="xor" x={150} y={47} out={s} />
        <Gate g="and" x={150} y={113} out={c} />
        <line x1="184" y1="47" x2="226" y2="47" stroke={s ? on : off} strokeWidth="2.2" />
        <line x1="184" y1="113" x2="226" y2="113" stroke={c ? on : off} strokeWidth="2.2" />
        <Lamp x={236} y={47} v={s} label="S" />
        <Lamp x={236} y={113} v={c} label="C" />
      </Stage>
      <Readouts items={[[L(W.sum, lang), String(s), COLORS.b], [L(W.carry, lang), String(c), COLORS.a], [L(W.result, lang), `${a} + ${b} = ${c}${s}₂ (${a + b})`, COLORS.c]]} />
    </ArtFrame>
  );
}

export default function Logic({ spec, lang }: SimProps) {
  return spec.opts.mode === "adder" ? <Adder lang={lang} body={spec.body} /> : <Gates lang={lang} body={spec.body} />;
}
