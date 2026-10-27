"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { list } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { L, t } from "../labels";

/**
 * Tables of word forms with the endings in colour:
 *   forms lang=ru кот кота коту кота котом коте pl=коты,котов,котам,котов,котами,котах   cases
 *   forms mode=persons lang=hy գրում_եմ գրում_ես …                                         persons of a verb
 *   forms mode=verbs go:went:gone see:saw:seen                                               irregular verbs, hide a column to test yourself
 *   forms mode=compare cols=stages սիրեմ:կու_սիրեմ:կը_սիրեմ:սիրում_եմ                          the same word side by side (cols: COLS below)
 * lang= is the language of the words (ru: 6 cases, hy: 7 cases). Write stem|ending when the
 * stem changes (день|, дн|я), or put the changing part in [ ] anywhere ([չեմ]_գրում); otherwise
 * the ending is what follows the part all forms share. _ stands for a space, - for "no form".
 */
type Lang = "ru" | "hy" | "en";
const W = {
  cases: t("Look: the word changes by case", "Դիտիր․ բառը հոլովվում է", "Посмотри: слово изменяется по падежам"),
  casesHint: t("The stem stays, the ending changes. Ask the question and choose the form.", "Հիմքը մնում է, վերջավորությունը փոխվում է։ Տուր հարցը և ընտրիր ձևը։", "Основа остаётся, окончание меняется. Задай вопрос и выбери форму."),
  persons: t("Look: the verb changes by person", "Դիտիր․ բայը փոխվում է ըստ դեմքի", "Посмотри: глагол изменяется по лицам"),
  personsHint: t("Who does it? The ending (or the helping word) tells you.", "Ո՞վ է անում։ Դա ցույց է տալիս վերջավորությունը (կամ օժանդակ բայը)։", "Кто делает? Это подсказывает окончание (или вспомогательный глагол)."),
  verbs: t("Try it: irregular verbs", "Փորձիր․ անկանոն բայեր", "Попробуй: неправильные глаголы"),
  verbsHint: t("Hide a column, say the forms aloud, then tap a cell to check.", "Թաքցրու մի սյունակ, բարձրաձայն ասա ձևերը, հետո հպիր վանդակին՝ ստուգելու համար։", "Спрячь столбец, назови формы вслух, потом нажми на клетку, чтобы проверить."),
  compare: t("Try it: compare the forms", "Փորձիր․ համեմատիր ձևերը", "Попробуй: сравни формы"),
  sg: t("Singular", "Եզակի", "Единственное число"),
  pl: t("Plural", "Հոգնակի", "Множественное число"),
  caseH: t("Case", "Հոլով", "Падеж"),
  qH: t("Question", "Հարց", "Вопрос"),
  formH: t("Form", "Ձև", "Форма"),
  personH: t("Person", "Դեմք", "Лицо"),
  hide: t("Hide", "Թաքցնել", "Скрыть"),
  showAll: t("Show all", "Ցույց տալ բոլորը", "Показать всё"),
  persons6: [
    t("1st, singular", "1-ին դեմք, եզակի", "1-е л., ед. ч."), t("2nd, singular", "2-րդ դեմք, եզակի", "2-е л., ед. ч."), t("3rd, singular", "3-րդ դեմք, եզակի", "3-е л., ед. ч."),
    t("1st, plural", "1-ին դեմք, հոգնակի", "1-е л., мн. ч."), t("2nd, plural", "2-րդ դեմք, հոգնակի", "2-е л., мн. ч."), t("3rd, plural", "3-րդ դեմք, հոգնակի", "3-е л., мн. ч."),
  ],
};
/** Column sets for mode=compare. */
const COLS: Record<string, ReturnType<typeof t>[]> = {
  stages: [t("Grabar", "Գրաբար", "Грабар"), t("Middle", "Միջին", "Средний"), t("Western", "Արևմտյան", "Западный"), t("Eastern", "Արևելյան", "Восточный")],
  ew: [t("Eastern Armenian", "Արևելահայերեն", "Восточноармянский"), t("Western Armenian", "Արևմտահայերեն", "Западноармянский")],
  spelling: [t("Classical spelling", "Դասական ուղղագրություն", "Классическая орфография"), t("Reformed spelling", "Բարեփոխված ուղղագրություն", "Реформированная орфография")],
  ie: [t("Armenian", "Հայերեն", "Армянский"), t("Latin", "Լատիներեն", "Латынь"), t("Greek", "Հունարեն", "Греческий"), t("English", "Անգլերեն", "Английский")],
  root: [t("Stressed root", "Շեշտված արմատ", "Корень под ударением"), t("Unstressed root", "Անշեշտ արմատ", "Корень без ударения")],
  modern: [t("Grabar", "Գրաբար", "Грабар"), t("Modern Armenian", "Արդի հայերեն", "Современный армянский")],
  dialect: [t("Dialect", "Բարբառ", "Диалект"), t("Standard", "Գրական", "Литературный")],
  loan: [t("Loanword", "Փոխառություն", "Заимствование"), t("Armenian word", "Հայերեն բառ", "Армянское слово")],
  norm: [t("Avoid", "Խուսափիր", "Избегай"), t("Literary norm", "Գրական նորմ", "Литературная норма")],
  sound: [t("We write", "Գրում ենք", "Пишем"), t("We hear", "Լսում ենք", "Слышим")],
  hardsoft: [t("Hard", "Կարծր", "Твёрдый"), t("Soft", "Փափուկ", "Мягкий")],
  gender: [t("Masculine", "Արական", "Мужской"), t("Feminine", "Իգական", "Женский"), t("Neuter", "Չեզոք", "Средний")],
  number: [t("One", "Մեկ", "Один"), t("Many", "Շատ", "Много")],
};
const CASES: Record<"ru" | "hy", Array<[ReturnType<typeof t>, string]>> = {
  ru: [
    [t("Nominative", "Ուղղական", "Именительный"), "кто? что?"],
    [t("Genitive", "Սեռական", "Родительный"), "кого? чего?"],
    [t("Dative", "Տրական", "Дательный"), "кому? чему?"],
    [t("Accusative", "Հայցական", "Винительный"), "кого? что?"],
    [t("Instrumental", "Գործիական", "Творительный"), "кем? чем?"],
    [t("Prepositional", "Նախդրային", "Предложный"), "о ком? о чём?"],
  ],
  hy: [
    [t("Nominative", "Ուղղական", "Именительный"), "ո՞վ, ի՞նչ"],
    [t("Genitive", "Սեռական", "Родительный"), "ու՞մ, ինչի՞"],
    [t("Dative", "Տրական", "Дательный"), "ու՞մ, ինչի՞ն"],
    [t("Accusative", "Հայցական", "Винительный"), "ու՞մ, ի՞նչ"],
    [t("Ablative", "Բացառական", "Исходный"), "ումի՞ց, ինչի՞ց"],
    [t("Instrumental", "Գործիական", "Творительный"), "ումո՞վ, ինչո՞վ"],
    [t("Locative", "Ներգոյական", "Местный"), "ինչո՞ւմ"],
  ],
};
const PRONOUNS: Record<Lang, string[]> = {
  ru: ["я", "ты", "он, она", "мы", "вы", "они"],
  hy: ["ես", "դու", "նա", "մենք", "դուք", "նրանք"],
  en: ["I", "you", "he, she, it", "we", "you", "they"],
};

/** Splits forms into [stem, ending] pairs. */
function split(forms: string[]): Array<[string, string]> {
  if (forms.some((f) => f.includes("["))) return forms.map((f) => [f, ""]);
  if (forms.some((f) => f.includes("|"))) return forms.map((f) => { const [a, b = ""] = f.split("|"); return [a, b]; });
  const lo = forms.map((f) => f.toLocaleLowerCase());
  let n = 0;
  while (lo.every((f) => n < f.length && f[n] === lo[0][n])) n++;
  return forms.map((f) => [f.slice(0, n), f.slice(n)]);
}
const sp = (s: string) => s.replace(/_/g, " ");

function Form({ stem, end }: { stem: string; end: string }) {
  if (stem === "-" && !end) return <span className="lang-form">—</span>;
  /** [ ] marks the changing part anywhere in the form, e.g. [չեմ]_գրում. */
  if (stem.includes("[")) return <span className="lang-form">{stem.split(/[[\]]/).map((p, i) => (i % 2 ? <b key={i}>{sp(p)}</b> : sp(p)))}</span>;
  return <span className="lang-form">{sp(stem)}<b className={end ? undefined : "is-zero"}>{end ? sp(end) : "∅"}</b></span>;
}

function Cases({ lang, forms, pl, wl }: { lang: SimProps["lang"]; forms: string[]; pl: string[]; wl: "ru" | "hy" }) {
  const [plural, setPlural] = useState(false);
  const rows = CASES[wl];
  const cells = split([...forms, ...pl]);
  const shown = plural ? cells.slice(forms.length) : cells.slice(0, forms.length);
  return (
    <>
      {pl.length ? (
        <div className="art-chips">
          <button type="button" className={`art-chip ${plural ? "" : "is-active"}`} onClick={() => setPlural(false)}>{L(W.sg, lang)}</button>
          <button type="button" className={`art-chip ${plural ? "is-active" : ""}`} onClick={() => setPlural(true)}>{L(W.pl, lang)}</button>
        </div>
      ) : null}
      <table className="lang-table">
        <thead><tr><th>{L(W.caseH, lang)}</th><th>{L(W.qH, lang)}</th><th>{L(W.formH, lang)}</th></tr></thead>
        <tbody>
          {rows.map(([name, q], i) => (
            <tr key={i}><td>{L(name, lang)}</td><td className="is-q">{q}</td><td>{shown[i] ? <Form stem={shown[i][0]} end={shown[i][1]} /> : "—"}</td></tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function Persons({ lang, forms, wl }: { lang: SimProps["lang"]; forms: string[]; wl: Lang }) {
  const cells = split(forms);
  return (
    <table className="lang-table is-persons">
      <thead><tr><th>{L(W.personH, lang)}</th><th /><th>{L(W.formH, lang)}</th></tr></thead>
      <tbody>
        {W.persons6.map((p, i) => (
          <tr key={i}><td>{L(p, lang)}</td><td className="is-q">{PRONOUNS[wl][i]}</td><td>{cells[i] ? <Form stem={cells[i][0]} end={cells[i][1]} /> : "—"}</td></tr>
        ))}
      </tbody>
    </table>
  );
}

function Verbs({ lang, rows, cols }: { lang: SimProps["lang"]; rows: string[][]; cols?: string }) {
  const [hidden, setHidden] = useState<number | null>(null);
  const [open, setOpen] = useState<string[]>([]);
  const named = cols ? COLS[cols]?.map((h) => L(h, lang)) : undefined;
  const heads = named ?? ["V1", "V2 (past)", "V3 (participle)"];
  const short = named ?? ["V1", "V2", "V3"];
  return (
    <>
      <div className="art-chips">
        {heads.slice(named ? 0 : 1).map((_, k) => {
          const c = named ? k : k + 1;
          return (
            <button key={c} type="button" className={`art-chip ${hidden === c ? "is-active" : ""}`} onClick={() => { setHidden(c); setOpen([]); }}>
              {L(W.hide, lang)}: {short[c]}
            </button>
          );
        })}
        <button type="button" className={`art-chip ${hidden === null ? "is-active" : ""}`} onClick={() => setHidden(null)}>{L(W.showAll, lang)}</button>
      </div>
      <div className="lang-scroll">
      <table className={`lang-table is-verbs ${heads.length > 3 ? "is-wide" : named ? "is-compare" : ""}`}>
        <thead><tr>{heads.map((h) => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((v, c) => {
                const id = `${i}:${c}`;
                const hide = c === hidden && !open.includes(id);
                return (
                  <td key={c}>
                    {hide ? <button type="button" className="lang-cover" onClick={() => setOpen([...open, id])}>?</button> : <span className={c || named ? "lang-form" : undefined}>{sp(v)}</span>}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default function Forms({ spec, lang }: SimProps) {
  const mode = spec.opts.mode ?? "cases";
  const wl = (["ru", "hy", "en"].includes(spec.opts.lang ?? "") ? spec.opts.lang : "ru") as Lang;
  const [title, hint] = mode === "persons" ? [W.persons, W.personsHint] : mode === "verbs" ? [W.verbs, W.verbsHint] : mode === "compare" ? [W.compare, W.verbsHint] : [W.cases, W.casesHint];
  return (
    <ArtFrame kind={mode === "verbs" || mode === "compare" ? "check" : "look"} title={L(title, lang)} body={spec.body || L(hint, lang)}>
      {mode === "verbs" || mode === "compare" ? <Verbs lang={lang} rows={spec.args.map((a) => a.split(":"))} cols={mode === "compare" ? spec.opts.cols ?? "modern" : undefined} />
        : mode === "persons" ? <Persons lang={lang} forms={spec.args} wl={wl} />
        : <Cases lang={lang} forms={spec.args} pl={list(spec.opts.pl)} wl={wl === "hy" ? "hy" : "ru"} />}
    </ArtFrame>
  );
}
