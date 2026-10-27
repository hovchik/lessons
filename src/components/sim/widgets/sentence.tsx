"use client";

import { useMemo, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Note } from "../kit";
import { L, t } from "../labels";

/**
 * A sentence and its parts:
 *   sentence Маленький:attr котёнок:subj спит:pred на_диване:adv .
 *       roles: subj, pred, attr, obj, adv, addr (address); _ stands for a space inside a part
 *   sentence mode=order Мама мыла раму .     the words are mixed up; tap them in the right order (keep=1 keeps
 *                                            the first word's capital, for names)
 */
type Role = "subj" | "pred" | "attr" | "obj" | "adv" | "addr";
const ROLES: Role[] = ["subj", "pred", "attr", "obj", "adv", "addr"];
const W = {
  parts: t("Look: parts of the sentence", "Դիտիր․ նախադասության անդամներ", "Посмотри: члены предложения"),
  partsHint: t("First find the core of the sentence (subject and predicate), then the words that explain them. Tap a word to see which question it answers.", "Նախ գտիր նախադասության քերականական հիմքը (ենթակա և ստորոգյալ), հետո՝ դրանք լրացնող բառերը։ Հպիր բառին՝ տեսնելու, թե որ հարցին է պատասխանում։", "Сначала найди грамматическую основу (подлежащее и сказуемое), потом слова, которые их поясняют. Нажми на слово, чтобы увидеть, на какой вопрос оно отвечает."),
  order: t("Try it: build the sentence", "Փորձիր․ կազմիր նախադասությունը", "Попробуй: составь предложение"),
  orderHint: t("The words are mixed up. Tap them in the right order to make a sentence.", "Բառերը խառնված են։ Հպիր դրանց ճիշտ հերթականությամբ՝ նախադասություն կազմելու համար։", "Слова перепутались. Нажимай на них в правильном порядке, чтобы получилось предложение."),
  core: t("Core of the sentence", "Քերականական հիմք", "Грамматическая основа"),
  all: t("All parts", "Բոլոր անդամները", "Все члены"),
  hide: t("Hide", "Թաքցնել", "Скрыть"),
  tap: t("Tap a word.", "Հպիր բառին։", "Нажми на слово."),
  none: t("This word is not a part of the sentence on its own (a preposition, a conjunction or a particle).", "Այս բառն ինքնուրույն նախադասության անդամ չէ (կապ, շաղկապ կամ եղանակավորող բառ)։", "Это слово само по себе не член предложения (предлог, союз или частица)."),
  right: t("Right! The sentence is built.", "Ճիշտ է։ Նախադասությունը կազմված է։", "Верно! Предложение составлено."),
  wrong: t("This order does not sound right. Try again.", "Այս հերթականությունը ճիշտ չի հնչում։ Նորից փորձիր։", "Так не звучит. Попробуй ещё раз."),
  again: t("Start again", "Սկսել նորից", "Сначала"),
  role: {
    subj: t("Subject", "Ենթակա", "Подлежащее"),
    pred: t("Predicate", "Ստորոգյալ", "Сказуемое"),
    attr: t("Attribute", "Որոշիչ", "Определение"),
    obj: t("Object", "Խնդիր", "Дополнение"),
    adv: t("Adverbial", "Պարագա", "Обстоятельство"),
    addr: t("Address (not a part of the sentence)", "Կոչական (նախադասության անդամ չէ)", "Обращение (не член предложения)"),
  },
  q: {
    subj: t("who? what? — the one the sentence is about", "ո՞վ, ի՞նչը — նա, ում մասին խոսվում է", "кто? что? — о ком или о чём говорится"),
    pred: t("what does it do? what is it like? — what is said about the subject", "ի՞նչ է անում, ինչպիսի՞ն է — ինչ է ասվում ենթակայի մասին", "что делает? каков? — что говорится о подлежащем"),
    attr: t("which? what kind of? whose?", "ինչպիսի՞, ո՞ր, ու՞մ", "какой? чей?"),
    obj: t("whom? what? to whom? with what?", "ու՞մ, ի՞նչ, ինչի՞ն, ինչո՞վ", "кого? чего? кому? чем? о чём?"),
    adv: t("where? when? how? why?", "որտե՞ղ, ե՞րբ, ինչպե՞ս, ինչո՞ւ", "где? когда? как? почему?"),
    addr: t("the one we speak to", "նա, ում դիմում ենք", "тот, к кому обращаются"),
  },
};

type Tok = { text: string; role?: Role; punct: boolean };
const PUNCT = /^[.,!?;:։՝․՞՜—–«»"()…]+$/u;
const parse = (args: string[]): Tok[] =>
  args.map((a) => {
    const i = a.lastIndexOf(":");
    const role = i > 0 ? (a.slice(i + 1) as Role) : undefined;
    const ok = role && ROLES.includes(role);
    // ":none" marks a word that is tappable but not a part of the sentence
    const text = (ok || (i > 0 && a.slice(i + 1) === "none") ? a.slice(0, i) : a).replace(/_/g, " ");
    return { text, role: ok ? role : undefined, punct: PUNCT.test(text) };
  });

function Line({ toks, onTap, cls }: { toks: Tok[]; onTap?: (i: number) => void; cls: (t: Tok, i: number) => string }) {
  return (
    <p className="lang-sentence">
      {toks.map((tk, i) => (
        <span key={i}>
          {i && !tk.punct ? " " : ""}
          {tk.punct ? <span>{tk.text}</span> : (
            <button type="button" className={`ls-word ${cls(tk, i)}`} onClick={() => onTap?.(i)}>{tk.text}</button>
          )}
        </span>
      ))}
    </p>
  );
}

function Parts({ toks, lang, body }: { toks: Tok[]; lang: SimProps["lang"]; body: string }) {
  const [level, setLevel] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const shows = (r?: Role) => !!r && (level === 2 || (level === 1 && (r === "subj" || r === "pred")) || r === "addr" && level > 0);
  const tk = sel === null ? null : toks[sel];
  return (
    <ArtFrame kind="look" title={L(W.parts, lang)} body={body || L(W.partsHint, lang)}>
      <Line toks={toks} onTap={setSel} cls={(x, i) => `${shows(x.role) || i === sel ? `ls-${x.role ?? "none"}` : ""} ${i === sel ? "is-active" : ""}`} />
      <Note>{tk ? (tk.role ? <><b>{L(W.role[tk.role], lang)}</b>: {L(W.q[tk.role], lang)}</> : L(W.none, lang)) : L(W.tap, lang)}</Note>
      {level ? (
        <div className="lang-legend">
          {ROLES.filter((r) => toks.some((x) => x.role === r) && shows(r)).map((r) => (
            <span key={r}><i className={`ls-key ls-${r}`} />{L(W.role[r], lang)}</span>
          ))}
        </div>
      ) : null}
      <div className="art-chips">
        <button type="button" className={`art-chip ${level === 1 ? "is-active" : ""}`} onClick={() => setLevel(1)}>{L(W.core, lang)}</button>
        <button type="button" className={`art-chip ${level === 2 ? "is-active" : ""}`} onClick={() => setLevel(2)}>{L(W.all, lang)}</button>
        {level ? <button type="button" className="art-chip" onClick={() => { setLevel(0); setSel(null); }}>{L(W.hide, lang)}</button> : null}
      </div>
    </ArtFrame>
  );
}

function Order({ toks, lang, body, keep }: { toks: Tok[]; lang: SimProps["lang"]; body: string; keep: boolean }) {
  const end = toks.length && toks[toks.length - 1].punct ? toks[toks.length - 1] : null;
  /** The first word loses its capital letter, so it does not give the answer away (keep=1 for names). */
  const words = useMemo(
    () => (end ? toks.slice(0, -1) : toks).map((x, i) => ({ ...x, i, text: i || keep ? x.text : x.text.charAt(0).toLocaleLowerCase() + x.text.slice(1) })),
    [toks, end, keep],
  );
  /** A fixed shuffle, so the page looks the same for everyone: odd positions first, then even, reversed. */
  const mixed = useMemo(() => {
    const m = [...words.filter((_, i) => i % 2), ...words.filter((_, i) => !(i % 2))].reverse();
    return m.every((w, i) => w.i === i) && m.length > 1 ? [...m.slice(1), m[0]] : m;
  }, [words]);
  const [got, setGot] = useState<number[]>([]);
  const done = got.length === words.length;
  const right = done && got.every((g, i) => words[g].text.toLocaleLowerCase() === words[i].text.toLocaleLowerCase());
  const shown: Tok[] = got.map((g, k) => {
    const w = words[g].text;
    return { text: k === 0 ? w.charAt(0).toLocaleUpperCase() + w.slice(1) : w, punct: false };
  });
  return (
    <ArtFrame kind="check" title={L(W.order, lang)} body={body || L(W.orderHint, lang)}>
      <div className="lang-answer">
        {shown.length ? <Line toks={done && end ? [...shown, end] : shown} cls={() => ""} /> : <span className="lang-answer-empty">…</span>}
      </div>
      <div className="art-chips">
        {mixed.map((w) => (
          <button key={w.i} type="button" className="art-chip" disabled={got.includes(w.i)} onClick={() => setGot([...got, w.i])}>
            {w.text}
          </button>
        ))}
      </div>
      {done ? <Note tone={right ? "good" : "bad"}>{L(right ? W.right : W.wrong, lang)}</Note> : null}
      {got.length ? (
        <div className="art-chips">
          <button type="button" className="art-chip" onClick={() => setGot([])}>{L(W.again, lang)}</button>
        </div>
      ) : null}
    </ArtFrame>
  );
}

export default function Sentence({ spec, lang }: SimProps) {
  const toks = parse(spec.args);
  return spec.opts.mode === "order" ? <Order toks={toks} lang={lang} body={spec.body} keep={!!spec.opts.keep} /> : <Parts toks={toks} lang={lang} body={spec.body} />;
}
