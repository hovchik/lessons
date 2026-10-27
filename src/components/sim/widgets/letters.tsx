"use client";

import { useMemo, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { list } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Note, Readouts } from "../kit";
import { L, t } from "../labels";
import { COLORS } from "../math-kit";
import { ALPHABETS, PAIRS, abcOf, lettersOf, type Abc, type Letter } from "../lang-data";

/**
 * The alphabet as tiles with a picture card for each letter:
 *   letters abc=hy [focus=Յ,Ն]          the board; the lesson's letters are marked
 *   letters mode=vowels abc=ru          vowel and consonant letters in two colours
 *   letters mode=pairs abc=hy           voiced and voiceless partners (Armenian: and aspirated)
 *   letters mode=order words=կատու,աղվես,շուն   tap the words in alphabetical order
 */
const W = {
  board: t("Look: the alphabet", "Դիտիր․ այբուբենը", "Посмотри: алфавит"),
  boardHint: t("Tap a letter to see its name, its sound and a word with it.", "Հպիր տառին՝ տեսնելու նրա անունը, հնչյունը և մի բառ այդ տառով։", "Нажми на букву, чтобы увидеть её название, звук и слово с ней."),
  vowels: t("Look: vowels and consonants", "Դիտիր․ ձայնավորներ և բաղաձայններ", "Посмотри: гласные и согласные"),
  vowelsHint: t("Vowel letters are red, consonant letters are blue. Tap a letter to hear it in a word.", "Ձայնավոր տառերը կարմիր են, բաղաձայնները՝ կապույտ։ Հպիր տառին՝ այն բառի մեջ տեսնելու համար։", "Гласные буквы красные, согласные — синие. Нажми на букву, чтобы увидеть её в слове."),
  pairs: t("Look: sounds in pairs", "Դիտիր․ զույգ հնչյուններ", "Посмотри: парные звуки"),
  pairsHint: t("These consonants are made in the same place in the mouth. Put your hand on your throat: the voiced one buzzes, the voiceless one does not.", "Այս բաղաձայնները արտաբերվում են բերանի նույն տեղում։ Ձեռքդ դիր կոկորդիդ․ ձայնեղը բզզում է, խուլը՝ ոչ։", "Эти согласные произносятся в одном месте рта. Положи руку на горло: звонкий жужжит, глухой — нет."),
  order: t("Try it: alphabetical order", "Փորձիր․ այբբենական կարգ", "Попробуй: алфавитный порядок"),
  orderHint: t("Tap the words in alphabetical order. Look at the first letter; if it is the same, look at the second.", "Հպիր բառերին այբբենական կարգով։ Նայիր առաջին տառին, իսկ եթե այն նույնն է՝ երկրորդին։", "Нажимай на слова в алфавитном порядке. Смотри на первую букву, а если она одинаковая — на вторую."),
  name: t("Name", "Անունը", "Название"),
  sound: t("Sound", "Հնչյունը", "Звук"),
  place: t("Place in the alphabet", "Տեղը այբուբենում", "Место в алфавите"),
  of: t("{n} of {m}", "{n}-ը {m}-ից", "{n} из {m}"),
  vowelN: t("Vowel letters", "Ձայնավոր տառեր", "Гласные буквы"),
  consN: t("Consonant letters", "Բաղաձայն տառեր", "Согласные буквы"),
  silentN: t("Signs without a sound", "Առանց հնչյան նշաններ", "Знаки без звука"),
  vowel: t("vowel", "ձայնավոր", "гласная"),
  consonant: t("consonant", "բաղաձայն", "согласная"),
  silent: t("no sound of its own", "իր հնչյունը չունի", "звука не обозначает"),
  voiced: t("voiced", "ձայնեղ", "звонкий"),
  voiceless: t("voiceless", "խուլ", "глухой"),
  aspirated: t("aspirated", "շնչեղ", "придыхательный"),
  right: t("Right! That is alphabetical order.", "Ճիշտ է։ Սա այբբենական կարգն է։", "Верно! Это алфавитный порядок."),
  wrong: t("Not quite: «{w}» should come later. Try again.", "Ոչ այնքան․ «{w}»-ն պետք է ավելի ուշ գա։ Նորից փորձիր։", "Не совсем: «{w}» должно стоять позже. Попробуй ещё раз."),
  again: t("Start again", "Սկսել նորից", "Сначала"),
};

const lower = (s: string) => s.toLocaleLowerCase();

function Card({ letter, abc, lang, idx }: { letter: Letter; abc: Abc; lang: SimProps["lang"]; idx: number }) {
  const total = ALPHABETS[abc].length;
  const parts = useMemo(() => {
    const w = letter.word, lo = letter.lo;
    const at = lower(w).indexOf(lo === "և" ? "և" : lo);
    return at < 0 ? [w, "", ""] : [w.slice(0, at), w.slice(at, at + lo.length), w.slice(at + lo.length)];
  }, [letter]);
  return (
    <div className="lang-card">
      <div className="lang-card-big">{letter.up === letter.lo ? letter.lo : `${letter.up}${letter.lo}`}</div>
      <div className="lang-card-pic" aria-hidden="true">{letter.pic}</div>
      <div className="lang-card-word">{parts[0]}<b>{parts[1]}</b>{parts[2]}</div>
      <Readouts
        items={[
          [L(W.name, lang), letter.name, COLORS.a],
          [L(W.sound, lang), letter.sound === "—" ? L(W.silent, lang) : `[${letter.sound}]`, letter.vowel ? COLORS.d : COLORS.a],
          [L(W.place, lang), L(W.of, lang).replace("{n}", String(idx + 1)).replace("{m}", String(total)), COLORS.c],
        ]}
      />
    </div>
  );
}

function Board({ abc, lang, focus, colour }: { abc: Abc; lang: SimProps["lang"]; focus: string[]; colour: boolean }) {
  const abcList = ALPHABETS[abc];
  const first = Math.max(0, abcList.findIndex((l) => l.up === focus[0] || l.lo === focus[0]));
  const [sel, setSel] = useState(first);
  const tone = (l: Letter) => (!colour ? undefined : l.silent ? "is-silent" : l.vowel ? "is-vowel" : "is-cons");
  return (
    <>
      <div className="lang-tiles">
        {abcList.map((l, i) => (
          <button
            key={l.up + i}
            type="button"
            className={`lang-tile ${tone(l) ?? ""} ${focus.includes(l.up) || focus.includes(l.lo) ? "is-focus" : ""} ${i === sel ? "is-active" : ""}`}
            onClick={() => setSel(i)}
          >
            {l.up === l.lo ? l.lo : `${l.up}${l.lo}`}
          </button>
        ))}
      </div>
      <Card letter={abcList[sel]} abc={abc} lang={lang} idx={sel} />
    </>
  );
}

function Pairs({ abc, lang }: { abc: Abc; lang: SimProps["lang"] }) {
  const heads = [W.voiced, W.voiceless, W.aspirated];
  return (
    <div className="lang-pairs">
      <div className="lang-pair is-head">
        {heads.slice(0, abc === "hy" ? 3 : 2).map((h, i) => <span key={i}>{L(h, lang)}</span>)}
      </div>
      {PAIRS[abc].map((p) => (
        <div key={p.join()} className="lang-pair">
          {p.map((ch, i) => <span key={ch} className={i === 0 ? "is-voiced" : "is-voiceless"}>{ch}</span>)}
        </div>
      ))}
    </div>
  );
}

/** Letter positions of a word, for comparing in alphabetical order. */
function keyOf(word: string, abc: Abc) {
  const idx = ALPHABETS[abc].map((l) => l.lo);
  return lettersOf(lower(word)).map((ch) => {
    const i = idx.indexOf(ch);
    return i < 0 ? 99 : i;
  });
}
const cmp = (a: number[], b: number[]) => {
  for (let i = 0; i < Math.min(a.length, b.length); i++) if (a[i] !== b[i]) return a[i] - b[i];
  return a.length - b.length;
};

function Order({ words, lang }: { words: string[]; lang: SimProps["lang"] }) {
  const abc = abcOf(words.join(""));
  const sorted = useMemo(() => [...words].sort((a, b) => cmp(keyOf(a, abc), keyOf(b, abc))), [words, abc]);
  const [picked, setPicked] = useState<string[]>([]);
  const [miss, setMiss] = useState<string | null>(null);
  const pick = (w: string) => {
    if (picked.includes(w)) return;
    if (sorted[picked.length] === w) { setPicked([...picked, w]); setMiss(null); } else setMiss(w);
  };
  const done = picked.length === words.length;
  const pos = (w: string) => keyOf(w, abc)[0] + 1;
  return (
    <>
      <div className="art-chips">
        {words.map((w) => (
          <button key={w} type="button" className={`art-chip ${picked.includes(w) ? "is-active" : ""}`} onClick={() => pick(w)}>
            {picked.includes(w) ? `${picked.indexOf(w) + 1}. ` : ""}{w}
          </button>
        ))}
      </div>
      {picked.length ? (
        <ol className="lang-order">
          {picked.map((w) => (
            <li key={w}><b>{lettersOf(w)[0]}</b>{lettersOf(w).slice(1).join("")} <span>({pos(w)})</span></li>
          ))}
        </ol>
      ) : null}
      {done ? <Note tone="good">{L(W.right, lang)}</Note> : miss ? <Note tone="bad">{L(W.wrong, lang).replace("{w}", miss)}</Note> : null}
      {picked.length ? (
        <div className="art-chips">
          <button type="button" className="art-chip" onClick={() => { setPicked([]); setMiss(null); }}>{L(W.again, lang)}</button>
        </div>
      ) : null}
    </>
  );
}

export default function Letters({ spec, lang }: SimProps) {
  const mode = spec.opts.mode ?? "board";
  const words = list(spec.opts.words);
  const abc = (["hy", "ru", "en"].includes(spec.opts.abc ?? "") ? spec.opts.abc : words.length ? abcOf(words.join("")) : lang) as Abc;
  const focus = list(spec.opts.focus);
  const [title, hint] = mode === "vowels" ? [W.vowels, W.vowelsHint] : mode === "pairs" ? [W.pairs, W.pairsHint] : mode === "order" ? [W.order, W.orderHint] : [W.board, W.boardHint];
  const counts = ALPHABETS[abc].reduce((c, l) => (l.silent ? { ...c, s: c.s + 1 } : l.vowel ? { ...c, v: c.v + 1 } : { ...c, c: c.c + 1 }), { v: 0, c: 0, s: 0 });
  return (
    <ArtFrame kind={mode === "order" ? "check" : "look"} title={L(title, lang)} body={spec.body || L(hint, lang)}>
      {mode === "order" ? <Order words={words} lang={lang} /> : mode === "pairs" ? <Pairs abc={abc} lang={lang} /> : (
        <>
          <Board abc={abc} lang={lang} focus={focus} colour={mode === "vowels"} />
          {mode === "vowels" ? (
            <Readouts
              items={[
                [L(W.vowelN, lang), String(counts.v), COLORS.d],
                [L(W.consN, lang), String(counts.c), COLORS.a],
                ...(counts.s ? [[L(W.silentN, lang), String(counts.s), "#64748b"] as [string, string, string]] : []),
              ]}
            />
          ) : null}
        </>
      )}
    </ArtFrame>
  );
}
