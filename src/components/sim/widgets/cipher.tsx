"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Choice, Readouts, Slider, Stage, Toggle } from "../kit";
import { L, t } from "../labels";
import { COLORS } from "../math-kit";

/** ```sim cipher: the Caesar cipher in the English, Armenian or Russian alphabet, with a brute-force attack. */
const W = {
  title: t("Experiment: the Caesar cipher", "Փորձ․ Կեսարի ծածկագիր", "Опыт: шифр Цезаря"),
  hint: t("Every letter moves the same number of places along the alphabet. The number is the key. Type a message and choose a key.", "Յուրաքանչյուր տառ այբուբենով տեղաշարժվում է նույն թվով դիրքերով։ Այդ թիվը բանալին է։ Գրի՛ր հաղորդագրություն և ընտրի՛ր բանալի։", "Каждая буква сдвигается по алфавиту на одно и то же число позиций. Это число — ключ. Напиши сообщение и выбери ключ."),
  key: t("Key", "Բանալի", "Ключ"),
  plain: t("Message", "Հաղորդագրություն", "Сообщение"),
  secret: t("Encrypted", "Ծածկագրված", "Зашифровано"),
  decrypt: t("Decrypt instead", "Վերծանել", "Расшифровать"),
  crack: t("Try every key", "Փորձել բոլոր բանալիները", "Перебрать все ключи"),
  keys: t("Possible keys", "Հնարավոր բանալիներ", "Возможных ключей"),
  crackNote: t("An attacker simply tries every key and looks for the line that makes sense. With only {n} keys this takes seconds, which is why modern ciphers use keys with trillions of trillions of possibilities.", "Հարձակվողը պարզապես փորձում է բոլոր բանալիները և փնտրում իմաստ ունեցող տողը։ Ընդամենը {n} բանալու դեպքում դա վայրկյաններ է տևում, ուստի ժամանակակից ծածկագրերը օգտագործում են տրիլիոնավոր տրիլիոնների հնարավորություններով բանալիներ։", "Взломщик просто перебирает все ключи и ищет осмысленную строку. При {n} ключах это занимает секунды, поэтому современные шифры используют ключи с триллионами триллионов вариантов."),
  msg: t("MEET ME AT NOON", "ՀԱՆԴԻՊԵՆՔ ԿԵՍՕՐԻՆ", "ВСТРЕЧАЕМСЯ В ПОЛДЕНЬ"),
};

type Abc = "en" | "hy" | "ru";
const ABC: Record<Abc, { up: string[]; low: string[] }> = {
  en: { up: [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"], low: [..."abcdefghijklmnopqrstuvwxyz"] },
  hy: { up: Array.from({ length: 38 }, (_, i) => String.fromCharCode(0x531 + i)), low: Array.from({ length: 38 }, (_, i) => String.fromCharCode(0x561 + i)) },
  ru: { up: [..."АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"], low: [..."абвгдеёжзийклмнопрстуфхцчшщъыьэюя"] },
};

function shift(s: string, k: number, abc: Abc) {
  const { up, low } = ABC[abc], n = up.length;
  return [...s].map((ch) => {
    let i = up.indexOf(ch);
    if (i >= 0) return up[(((i + k) % n) + n) % n];
    i = low.indexOf(ch);
    if (i >= 0) return low[(((i + k) % n) + n) % n];
    return ch;
  }).join("");
}

export default function Cipher({ spec, lang }: SimProps) {
  const [abc, setAbc] = useState<Abc>(lang);
  const [text, setText] = useState(L(W.msg, lang));
  const [key, setKey] = useState(3);
  const [dec, setDec] = useState(false);
  const [crack, setCrack] = useState(false);
  const n = ABC[abc].up.length;
  const out = shift(text, dec ? -key : key, abc);
  const show = Math.min(n, 13);
  const cw = 300 / show;
  return (
    <ArtFrame kind="experiment" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <Choice value={abc} options={[["en", "ABC"], ["hy", "ԱԲԳ"], ["ru", "АБВ"]]} onChange={(a) => { setAbc(a); setText(L(W.msg, a)); setKey(3); }} />
      <Stage w={320} h={96} label={L(W.title, lang)}>
        {ABC[abc].up.slice(0, show).map((ch, i) => {
          const to = shift(ch, dec ? -key : key, abc);
          return (
            <g key={ch}>
              <rect x={10 + i * cw + 1} y="12" width={cw - 2} height="26" rx="5" fill="#eef2ff" stroke="#c7d2fe" />
              <text x={10 + i * cw + cw / 2} y="30" textAnchor="middle" fontSize="12" fontWeight="900" fill="#3730a3">{ch}</text>
              <line x1={10 + i * cw + cw / 2} y1="40" x2={10 + i * cw + cw / 2} y2="54" stroke="#94a3b8" markerEnd="url(#cipher-head)" />
              <rect x={10 + i * cw + 1} y="58" width={cw - 2} height="26" rx="5" fill="#fef3c7" stroke="#fcd34d" />
              <text x={10 + i * cw + cw / 2} y="76" textAnchor="middle" fontSize="12" fontWeight="900" fill="#92400e">{to}</text>
            </g>
          );
        })}
        <defs><marker id="cipher-head" viewBox="0 0 6 6" refX="3" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" transform="rotate(90 3 3)" /></marker></defs>
      </Stage>
      <input className="art-input" value={text} maxLength={60} onChange={(e) => setText(e.target.value)} aria-label={L(W.plain, lang)} />
      <Slider label={L(W.key, lang)} value={key} min={1} max={n - 1} lang={lang} display={String(key)} onChange={setKey} />
      <Readouts items={[[L(dec ? W.secret : W.plain, lang), text || "—", COLORS.a], [L(dec ? W.plain : W.secret, lang), out || "—", COLORS.b], [L(W.keys, lang), String(n - 1), COLORS.d]]} />
      <div className="art-chips">
        <Toggle on={dec} label={L(W.decrypt, lang)} onChange={setDec} />
        <Toggle on={crack} label={L(W.crack, lang)} onChange={setCrack} />
      </div>
      {crack ? (
        <div className="sim-crack">
          <p className="sim-note">{L(W.crackNote, lang).replace("{n}", String(n - 1))}</p>
          <ol>
            {Array.from({ length: n - 1 }, (_, i) => i + 1).map((k) => (
              <li key={k} className={k === key ? "is-on" : undefined}><b>{k}</b> {shift(dec ? text : out, -k, abc)}</li>
            ))}
          </ol>
        </div>
      ) : null}
    </ArtFrame>
  );
}
