"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { Tr } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Choice } from "../kit";
import { L, t } from "../labels";
import { cn } from "@/lib/utils";

/** ```sim sql: build a SELECT query from parts (WHERE, ORDER BY, LIMIT, GROUP BY) and see which rows of the table it returns. */
const W = {
  title: t("Experiment: ask the database", "Փորձ․ հարցրո՛ւ տվյալների բազային", "Опыт: спроси базу данных"),
  hint: t("Pick the parts of the query. The rows that pass WHERE light up in the table, and the result shows what the database sends back.", "Ընտրի՛ր հարցման մասերը։ WHERE-ով անցնող տողերը լուսավորվում են աղյուսակում, իսկ արդյունքը ցույց է տալիս, թե ինչ է վերադարձնում տվյալների բազան։", "Выбери части запроса. Строки, прошедшие WHERE, подсвечиваются в таблице, а в результате видно, что вернёт база данных."),
  table: t("Table students", "students աղյուսակը", "Таблица students"),
  result: t("Result", "Արդյունք", "Результат"),
  rows: t("{n} of 6 rows", "6 տողից {n}-ը", "{n} из 6 строк"),
  groups: t("one row per class", "մեկ տող՝ յուրաքանչյուր դասարանի համար", "по строке на класс"),
  none: t("no rows", "տող չկա", "нет строк"),
  all: t("all", "բոլորը", "все"),
  off: t("none", "չկա", "нет"),
  rowsMode: t("rows", "տողեր", "строки"),
  avgMode: t("average per class", "միջինը՝ ըստ դասարանի", "среднее по классам"),
};

// the base lesson's students table, with three more pupils
const ROWS: Array<[number, Tr, string, number]> = [
  [1, t("Ani", "Անի", "Ани"), "A", 92],
  [2, t("Aram", "Արամ", "Арам"), "B", 85],
  [3, t("Mariam", "Մարիամ", "Мариам"), "A", 78],
  [4, t("Davit", "Դավիթ", "Давид"), "B", 95],
  [5, t("Lilit", "Լիլիթ", "Лилит"), "A", 88],
  [6, t("Narek", "Նարեկ", "Нарек"), "B", 70],
];
const CLS: Record<string, Tr> = { A: t("9A", "9Ա", "9А"), B: t("9B", "9Բ", "9Б") };
const FIRST: Tr = t("A", "Ա", "А");

type Where = "none" | "A" | "B" | "top" | "like";
type Order = "none" | "desc" | "name";
type Lim = "all" | "3";

export default function Sql({ spec, lang }: SimProps) {
  const [where, setWhere] = useState<Where>("none");
  const [order, setOrder] = useState<Order>("desc");
  const [lim, setLim] = useState<Lim>("all");
  const [group, setGroup] = useState<"rows" | "avg">(spec.opts.mode === "group" ? "avg" : "rows");
  const name = (r: (typeof ROWS)[number]) => L(r[1], lang);
  const cls = (c: string) => L(CLS[c], lang);
  const first = L(FIRST, lang);
  const pass = (r: (typeof ROWS)[number]) =>
    where === "none" ? true : where === "A" || where === "B" ? r[2] === where : where === "top" ? r[3] >= 90 : name(r).startsWith(first);
  const kept = ROWS.filter(pass);
  const q = (s: string) => `'${s}'`;
  const whereSql = where === "none" ? "" : where === "top" ? "WHERE score >= 90" : where === "like" ? `WHERE name LIKE ${q(first + "%")}` : `WHERE class = ${q(cls(where))}`;

  let head: string[];
  let body: string[][];
  let sql: string[];
  if (group === "avg") {
    const by = ["A", "B"].map((c) => [c, kept.filter((r) => r[2] === c)] as const).filter(([, rs]) => rs.length);
    head = ["class", "AVG(score)"];
    body = by.map(([c, rs]) => { const v = Math.round((rs.reduce((a, r) => a + r[3], 0) / rs.length) * 10) / 10; return [cls(c), lang === "en" ? String(v) : String(v).replace(".", ",")]; });
    sql = ["SELECT class, AVG(score)", "FROM students", whereSql, "GROUP BY class"];
  } else {
    let rs = [...kept];
    if (order === "desc") rs.sort((a, b) => b[3] - a[3]);
    if (order === "name") rs.sort((a, b) => name(a).localeCompare(name(b), lang));
    if (lim === "3") rs = rs.slice(0, 3);
    head = ["name", "score"];
    body = rs.map((r) => [name(r), String(r[3])]);
    sql = ["SELECT name, score", "FROM students", whereSql, order === "desc" ? "ORDER BY score DESC" : order === "name" ? "ORDER BY name" : "", lim === "3" ? "LIMIT 3" : ""];
  }
  const lines = sql.filter(Boolean);
  lines[lines.length - 1] += ";";

  return (
    <ArtFrame kind="experiment" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <div className="sim-sql-ctl">
        <Choice value={group} options={[["rows", L(W.rowsMode, lang)], ["avg", L(W.avgMode, lang)]]} onChange={setGroup} />
        <div><b>WHERE</b><Choice value={where} options={[["none", L(W.off, lang)], ["A", `class = ${q(cls("A"))}`], ["B", `class = ${q(cls("B"))}`], ["top", "score >= 90"], ["like", `name LIKE ${q(first + "%")}`]]} onChange={setWhere} /></div>
        {group === "rows" ? (
          <>
            <div><b>ORDER BY</b><Choice value={order} options={[["none", L(W.off, lang)], ["desc", "score DESC"], ["name", "name"]]} onChange={setOrder} /></div>
            <div><b>LIMIT</b><Choice value={lim} options={[["all", L(W.all, lang)], ["3", "3"]]} onChange={setLim} /></div>
          </>
        ) : null}
      </div>
      <pre className="sim-code" aria-label="SQL">
        {lines.map((ln, k) => <span key={k} className="sim-code-line"><i aria-hidden="true">{k + 1}</i>{ln}</span>)}
      </pre>
      <div className="sim-sql">
        <div>
          <p className="sim-trace-h">{L(W.table, lang)}</p>
          <table className="sim-sql-t">
            <thead><tr>{["id", "name", "class", "score"].map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r[0]} className={cn(pass(r) ? "is-in" : "is-out")}>
                  <td className="is-num">{r[0]}</td><td>{name(r)}</td><td>{cls(r[2])}</td><td className="is-num">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <p className="sim-trace-h">{L(W.result, lang)} · {group === "avg" ? L(W.groups, lang) : L(W.rows, lang).replace("{n}", String(body.length))}</p>
          {body.length ? (
            <table className="sim-sql-t is-result">
              <thead><tr>{head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
              <tbody>{body.map((r, k) => <tr key={k}>{r.map((c, j) => <td key={j} className={j ? "is-num" : undefined}>{c}</td>)}</tr>)}</tbody>
            </table>
          ) : <p className="sim-note">{L(W.none, lang)}</p>}
        </div>
      </div>
    </ArtFrame>
  );
}
