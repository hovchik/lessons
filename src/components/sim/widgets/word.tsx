"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { list } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Note, Readouts } from "../kit";
import { L, t } from "../labels";
import { COLORS } from "../math-kit";
import { isVowel, lettersOf, vowelCount } from "../lang-data";

/**
 * A word taken apart:
 *   word при:p бег:r а:s ть:e family=бег,бежать,побег   parts of the word, marked step by step
 *        roles: p prefix, r root, s suffix, e ending (0 = zero ending), c linking vowel, a article
 *   word mode=syll мо ло ко stress=3                      syllables, vowel letters and stress
 */
type Role = "p" | "r" | "s" | "e" | "c" | "a";
const ROLES: Role[] = ["p", "r", "s", "e", "c", "a"];
const W = {
  morph: t("Look: what the word is made of", "Դիտիր․ ինչից է կազմված բառը", "Посмотри: из чего состоит слово"),
  morphHint: t("Press «Next step» and mark the parts of the word one by one, as in a grammar notebook.", "Սեղմիր «Հաջորդ քայլը» և նշիր բառի մասերը մեկ առ մեկ, ինչպես քերականության տետրում։", "Нажимай «Следующий шаг» и отмечай части слова по очереди, как в тетради по грамматике."),
  syll: t("Look: syllables", "Դիտիր․ վանկեր", "Посмотри: слоги"),
  syllHint: t("Clap the word: each clap is one syllable, and every syllable has one vowel sound.", "Ծափ տուր բառը․ ամեն ծափը մեկ վանկ է, և յուրաքանչյուր վանկում կա մեկ ձայնավոր հնչյուն։", "Прохлопай слово: каждый хлопок — один слог, и в каждом слоге один гласный звук."),
  next: t("Next step", "Հաջորդ քայլը", "Следующий шаг"),
  all: t("Show all", "Ցույց տալ բոլորը", "Показать всё"),
  again: t("Start again", "Սկսել նորից", "Сначала"),
  clap: t("Clap", "Ծափ", "Хлопок"),
  family: t("Related words, same root", "Ազգակից բառեր՝ նույն արմատով", "Однокоренные слова"),
  syllables: t("Syllables", "Վանկեր", "Слоги"),
  vowels: t("Vowel sounds", "Ձայնավոր հնչյուններ", "Гласные звуки"),
  stress: t("Stressed syllable", "Շեշտված վանկ", "Ударный слог"),
  same: t("As many syllables as vowel sounds.", "Վանկերը այնքան են, որքան ձայնավոր հնչյունները։", "Сколько гласных звуков, столько и слогов."),
  start: t("Find the parts step by step.", "Գտիր մասերը քայլ առ քայլ։", "Найди части слова по шагам."),
  role: {
    p: t("Prefix", "Նախածանց", "Приставка"),
    r: t("Root", "Արմատ", "Корень"),
    s: t("Suffix", "Վերջածանց", "Суффикс"),
    e: t("Ending", "Վերջավորություն", "Окончание"),
    c: t("Linking vowel", "Հոդակապ", "Соединительная гласная"),
    a: t("Article", "Հոդ", "Артикль"),
    base: t("Stem", "Հիմք", "Основа"),
  },
  why: {
    e: t("the part that changes when the word changes its form.", "այն մասը, որը փոխվում է, երբ բառը փոխում է իր ձևը։", "изменяемая часть слова; её находят, изменяя форму слова."),
    base: t("the word without its ending.", "բառն առանց վերջավորության։", "часть слова без окончания."),
    r: t("the common part of related words; it carries the main meaning.", "ազգակից բառերի ընդհանուր մասը, որը կրում է հիմնական իմաստը։", "общая часть однокоренных слов, в ней главный смысл."),
    p: t("stands before the root and makes a new word.", "դրվում է արմատից առաջ և կազմում նոր բառ։", "стоит перед корнем и образует новые слова."),
    s: t("stands after the root and makes a new word.", "դրվում է արմատից հետո և կազմում նոր բառ։", "стоит после корня и образует новые слова."),
    c: t("joins two roots in a compound word.", "միացնում է բարդ բառի երկու արմատը։", "соединяет два корня в сложном слове."),
    a: t("shows that the thing is known or whose it is.", "ցույց է տալիս, որ առարկան հայտնի է կամ ում է պատկանում։", "показывает, что предмет известен или чей он."),
  },
};

type Part = { text: string; role: Role };
const parse = (args: string[]): Part[] =>
  args.map((a) => {
    const i = a.lastIndexOf(":");
    const role = (i > 0 ? a.slice(i + 1) : "r") as Role;
    return { text: i > 0 ? a.slice(0, i) : a, role: ROLES.includes(role) ? role : "r" };
  });

function Morph({ parts, family, lang, body }: { parts: Part[]; family: string[]; lang: SimProps["lang"]; body: string }) {
  const has = (r: Role) => parts.some((p) => p.role === r);
  const steps = (["e", "base", "r", "p", "s", "c", "a"] as const).filter((s) => (s === "base" ? has("e") : has(s)));
  const [n, setN] = useState(0);
  const shown = new Set(steps.slice(0, n));
  const cur = steps[n - 1];
  const root = parts.find((p) => p.role === "r")?.text.toLocaleLowerCase() ?? "";
  const stemEnd = parts.findIndex((p) => p.role === "e" || p.role === "a");
  const stem = stemEnd < 0 ? parts : parts.slice(0, stemEnd);
  const rest = stemEnd < 0 ? [] : parts.slice(stemEnd);
  const piece = (p: Part, i: number) => (
    <span key={i} className={`lm-part lm-${p.role} ${shown.has(p.role) ? "is-on" : ""} ${p.text === "0" ? "is-zero" : ""}`}>
      {p.text === "0" ? " " : p.text}
    </span>
  );
  return (
    <ArtFrame kind="steps" title={L(W.morph, lang)} body={body || L(W.morphHint, lang)}>
      <div className="lang-morph">
        <span className={`lm-base ${shown.has("base") ? "is-on" : ""}`}>{stem.map(piece)}</span>
        {rest.map((p, i) => piece(p, stem.length + i))}
      </div>
      <Note>{cur ? <><b>{L(W.role[cur], lang)}</b> — {L(W.why[cur], lang)}</> : L(W.start, lang)}</Note>
      {n ? (
        <div className="lang-legend">
          {steps.slice(0, n).map((s) => (
            <span key={s}><i className={`lm-key lm-key-${s}`} />{L(W.role[s], lang)}{s === "base" ? "" : `: ${parts.filter((p) => p.role === s).map((p) => (p.text === "0" ? "∅" : p.text)).join(", ")}`}</span>
          ))}
        </div>
      ) : null}
      <div className="art-chips">
        {n < steps.length ? (
          <>
            <button type="button" className="art-chip is-active" onClick={() => setN(n + 1)}>{L(W.next, lang)} ({n + 1}/{steps.length})</button>
            <button type="button" className="art-chip" onClick={() => setN(steps.length)}>{L(W.all, lang)}</button>
          </>
        ) : <button type="button" className="art-chip" onClick={() => setN(0)}>{L(W.again, lang)}</button>}
      </div>
      {family.length ? (
        <div className="lang-family">
          <span className="lang-family-head">{L(W.family, lang)}</span>
          {family.map((w) => {
            const at = root ? w.toLocaleLowerCase().indexOf(root) : -1;
            return (
              <span key={w} className="lang-family-word">
                {at < 0 ? w : <>{w.slice(0, at)}<b>{w.slice(at, at + root.length)}</b>{w.slice(at + root.length)}</>}
              </span>
            );
          })}
        </div>
      ) : null}
    </ArtFrame>
  );
}

function Syllables({ sylls, stress, lang, body }: { sylls: string[]; stress: number; lang: SimProps["lang"]; body: string }) {
  const [k, setK] = useState(-1);
  const vowels = vowelCount(sylls.join(""));
  return (
    <ArtFrame kind="look" title={L(W.syll, lang)} body={body || L(W.syllHint, lang)}>
      <div className="lang-sylls">
        {sylls.map((s, i) => (
          <span key={i} className="lang-syll-wrap">
            {i ? <span className="lang-syll-dash">-</span> : null}
            <span className={`lang-syll ${i === k ? "is-clap" : ""} ${i + 1 === stress ? "is-stress" : ""}`}>
              {lettersOf(s).map((ch, j) => <span key={j} className={isVowel(ch.toLocaleLowerCase()) ? "is-vowel" : undefined}>{ch}</span>)}
            </span>
          </span>
        ))}
      </div>
      <Readouts
        items={[
          [L(W.syllables, lang), String(sylls.length), COLORS.a],
          [L(W.vowels, lang), String(vowels), COLORS.d],
          ...(stress ? [[L(W.stress, lang), `${stress}: ${sylls[stress - 1] ?? ""}`, COLORS.b] as [string, string, string]] : []),
        ]}
      />
      {vowels === sylls.length ? <Note>{L(W.same, lang)}</Note> : null}
      <div className="art-chips">
        <button type="button" className="art-chip is-active" onClick={() => setK((k + 1) % sylls.length)}>👏 {L(W.clap, lang)}</button>
      </div>
    </ArtFrame>
  );
}

export default function Word({ spec, lang }: SimProps) {
  if (spec.opts.mode === "syll") return <Syllables sylls={spec.args} stress={Number(spec.opts.stress ?? 0)} lang={lang} body={spec.body} />;
  return <Morph parts={parse(spec.args)} family={list(spec.opts.family)} lang={lang} body={spec.body} />;
}
