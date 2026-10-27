"use client";

import { Fragment, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { Readouts } from "../kit";
import { L, t } from "../labels";
import { COLORS } from "../math-kit";

/**
 * A Punnett square: gametes of each parent along the edges, offspring in the cells.
 *   punnett Aa Aa          monohybrid cross (3 : 1)
 *   punnett AaBb AaBb      dihybrid cross (9 : 3 : 3 : 1)
 *   punnett Aa aa          test cross (1 : 1)
 *   punnett mode=x Hh H    X-linked: mother XᴴXʰ, father XᴴY
 */
const W = {
  title: t("Punnett square", "Փենեթի ցանց", "Решётка Пеннета"),
  titleX: t("Punnett square: an X-linked trait", "Փենեթի ցանց․ X-շղթայակցված հատկանիշ", "Решётка Пеннета: признак, сцепленный с X"),
  hint: t("The gametes of one parent run along the top, of the other down the side. Tap the cells, or fill them all, and compare the ratios.", "Մի ծնողի գամետները վերևում են, մյուսինը՝ ձախ կողմում։ Հպի՛ր վանդակներին կամ լրացրո՛ւ բոլորը և համեմատի՛ր հարաբերությունները։", "Гаметы одного родителя идут сверху, другого — слева. Нажимай на клетки или заполни все и сравни соотношения."),
  mother: t("Mother", "Մայր", "Мать"),
  father: t("Father", "Հայր", "Отец"),
  p1: t("Parent 1", "Ծնող 1", "Родитель 1"),
  p2: t("Parent 2", "Ծնող 2", "Родитель 2"),
  geno: t("Genotypes", "Գենոտիպեր", "Генотипы"),
  pheno: t("Phenotypes", "Ֆենոտիպեր", "Фенотипы"),
  fill: t("Fill all", "Լրացնել բոլորը", "Заполнить все"),
  clear: t("Clear", "Մաքրել", "Очистить"),
  daughters: t("daughters", "դուստրեր", "дочери"),
  sons: t("sons", "որդիներ", "сыновья"),
  healthy: t("healthy", "առողջ", "здоровы"),
  ill: t("affected", "հիվանդ", "больны"),
  carrier: t("carriers", "կրողներ", "носительницы"),
};

const SUP: Record<string, string> = { A: "ᴬ", B: "ᴮ", D: "ᴰ", H: "ᴴ", R: "ᴿ", a: "ᵃ", b: "ᵇ", d: "ᵈ", h: "ʰ", r: "ʳ" };
const sup = (c: string) => SUP[c] ?? c;
const up = (c: string) => c === c.toUpperCase();
const domFirst = (p: string, q: string) => Number(up(q)) - Number(up(p)) || p.localeCompare(q);

/** Split "AaBb" into loci ["Aa", "Bb"]. */
const loci = (g: string) => g.match(/../g) ?? [];

function gametes(g: string): string[] {
  return loci(g).reduce<string[]>((acc, pair) => {
    const alleles = pair[0] === pair[1] ? [pair[0]] : [pair[0], pair[1]];
    return acc.flatMap((a) => alleles.map((b) => a + b));
  }, [""]);
}

/** Join two gametes into a genotype, dominant allele first in each pair. */
const child = (a: string, b: string) => [...a].map((x, i) => [x, b[i]].sort(domFirst).join("")).join("");
const phenotype = (g: string) => loci(g).map((p) => (up(p[0]) ? `${p[0]}_` : p)).join("");

/* X-linked: gametes are "XH", "Xh" or "Y". */
const xchild = (m: string, s: string) => (s === "Y" ? `${m}Y` : [m, s].sort((p, q) => domFirst(p[1], q[1])).join(""));
const xpretty = (g: string) => g.replace(/X(.)/g, (_, a: string) => `X${sup(a)}`);

function xpheno(g: string, lang: Parameters<typeof L>[1]) {
  const alleles = [...g.matchAll(/X(.)/g)].map((m) => m[1]);
  const son = g.endsWith("Y");
  const who = L(son ? W.sons : W.daughters, lang);
  if (!alleles.some(up)) return `${who}: ${L(W.ill, lang)}`;
  if (!son && !alleles.every(up)) return `${who}: ${L(W.carrier, lang)}`;
  return `${who}: ${L(W.healthy, lang)}`;
}

function count(xs: string[]) {
  const m = new Map<string, number>();
  for (const x of xs) m.set(x, (m.get(x) ?? 0) + 1);
  return m;
}

const PHENO_COLORS = [COLORS.a, COLORS.c, COLORS.b, COLORS.d];

export default function Punnett({ spec, lang }: SimProps) {
  const xmode = spec.opts.mode === "x";
  const [g1 = "Aa", g2 = "Aa"] = spec.args;
  const top = xmode ? [...new Set(g1.split(""))].map((a) => `X${a}`) : gametes(g1);
  const side = xmode ? [`X${g2[0] ?? "H"}`, "Y"] : gametes(g2);
  const cells = side.flatMap((s) => top.map((m) => (xmode ? xchild(m, s) : child(m, s))));
  const [shown, setShown] = useState<boolean[]>(() => cells.map(() => false));
  const n = top.length;
  const all = shown.every(Boolean);
  const show = (g: string) => (xmode ? xpretty(g) : g);

  const phenos = xmode ? cells.map((c) => xpheno(c, lang)) : cells.map(phenotype);
  const phenoCount = count(phenos);
  const phenoKeys = [...phenoCount.keys()];
  const color = (p: string) => PHENO_COLORS[phenoKeys.indexOf(p) % PHENO_COLORS.length];
  const ratio = (m: Map<string, number>, f: (k: string) => string = (k) => k) => [...m.entries()].map(([k, v]) => `${f(k)} ${v}`).join(" : ");

  return (
    <ArtFrame kind="experiment" title={L(xmode ? W.titleX : W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <div className="sim-punnett">
        <p className="sim-punnett-parents">
          <span>{L(xmode ? W.mother : W.p1, lang)}: <b>{xmode ? g1.split("").map((a) => `X${sup(a)}`).join("") : g1}</b></span>
          <span>×</span>
          <span>{L(xmode ? W.father : W.p2, lang)}: <b>{xmode ? `X${sup(g2[0] ?? "H")}Y` : g2}</b></span>
        </p>
        <div className="sim-punnett-grid" style={{ gridTemplateColumns: `repeat(${n + 1}, minmax(0, 1fr))`, maxWidth: `${Math.min(26, (n + 1) * 5.4)}rem` }}>
          <div className="sim-punnett-corner">♀ \ ♂</div>
          {top.map((g, i) => <div key={i} className="sim-punnett-gamete">{show(g)}</div>)}
          {side.map((s, r) => (
            <Fragment key={r}>
              <div className="sim-punnett-gamete">{show(s)}</div>
              {top.map((_, c) => {
                const k = r * n + c;
                return (
                  <button
                    key={c}
                    type="button"
                    className={cn("sim-punnett-cell", shown[k] && "is-shown", n > 2 && "is-small")}
                    style={shown[k] ? { ["--pc" as string]: color(phenos[k]) } : undefined}
                    onClick={() => setShown((v) => v.map((x, j) => (j === k ? !x : x)))}
                    aria-label={shown[k] ? cells[k] : "?"}
                  >
                    {shown[k] ? show(cells[k]) : "?"}
                  </button>
                );
              })}
            </Fragment>
          ))}
        </div>
        <div className="art-chips">
          <button type="button" className="art-chip" onClick={() => setShown(cells.map(() => !all))}>{L(all ? W.clear : W.fill, lang)}</button>
        </div>
      </div>
      {all ? (
        <Readouts
          items={[
            [L(W.geno, lang), ratio(count(cells), show), COLORS.a],
            [L(W.pheno, lang), ratio(phenoCount), COLORS.c],
          ]}
        />
      ) : null}
    </ArtFrame>
  );
}
