"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Readouts } from "../kit";
import { L, t } from "../labels";
import { COLORS, num } from "../math-kit";

/** ```sim password: type a password and see how many guesses a computer would need to find it. */
const W = {
  title: t("Experiment: how strong is a password?", "Փորձ․ որքա՞ն ուժեղ է գաղտնաբառը", "Опыт: насколько надёжен пароль?"),
  hint: t("Type a made-up password (never a real one!). A computer that tries 10 billion passwords a second is trying to guess it.", "Գրի՛ր հորինված գաղտնաբառ (երբեք՝ իրականը)։ Համակարգիչը, որը վայրկյանում փորձում է 10 միլիարդ գաղտնաբառ, փորձում է գուշակել այն։", "Напиши придуманный пароль (никогда не настоящий!). Компьютер, который перебирает 10 миллиардов паролей в секунду, пытается его угадать."),
  input: t("Password", "Գաղտնաբառ", "Пароль"),
  length: t("Length", "Երկարություն", "Длина"),
  pool: t("Possible characters", "Հնարավոր նշաններ", "Возможных символов"),
  combos: t("Possible passwords", "Հնարավոր գաղտնաբառեր", "Возможных паролей"),
  time: t("Time to guess", "Գուշակելու ժամանակը", "Время на подбор"),
  kinds: [t("small letters", "փոքրատառեր", "строчные буквы"), t("capital letters", "մեծատառեր", "заглавные буквы"), t("digits", "թվանշաններ", "цифры"), t("symbols", "նշաններ", "символы"), t("other alphabets", "այլ այբուբեններ", "другие алфавиты")],
  common: t("This is one of the most popular passwords. Attackers try such lists first, so it falls at once.", "Սա ամենատարածված գաղտնաբառերից է։ Հարձակվողները նախ փորձում են նման ցուցակները, ուստի այն կոտրվում է միանգամից։", "Это один из самых популярных паролей. Взломщики сначала перебирают такие списки, поэтому он падает сразу."),
  levels: [t("very weak", "շատ թույլ", "очень слабый"), t("weak", "թույլ", "слабый"), t("fair", "միջին", "средний"), t("strong", "ուժեղ", "надёжный"), t("very strong", "շատ ուժեղ", "очень надёжный")],
  instant: t("instantly", "անմիջապես", "мгновенно"),
  universe: t("longer than the age of the Universe", "ավելի երկար, քան Տիեզերքի տարիքը", "дольше, чем возраст Вселенной"),
  units: [t("seconds", "վայրկյան", "секунд"), t("minutes", "րոպե", "минут"), t("hours", "ժամ", "часов"), t("days", "օր", "дней"), t("years", "տարի", "лет"), t("thousand years", "հազար տարի", "тысяч лет"), t("million years", "միլիոն տարի", "миллионов лет"), t("billion years", "միլիարդ տարի", "миллиардов лет")],
  tip: t("Length helps most: each extra character multiplies the guesses by the number of possible characters.", "Ամենաշատն օգնում է երկարությունը․ յուրաքանչյուր լրացուցիչ նշան գուշակումների թիվը բազմապատկում է հնարավոր նշանների քանակով։", "Больше всего помогает длина: каждый лишний символ умножает число вариантов на количество возможных символов."),
};

const COMMON = ["123456", "123456789", "12345678", "12345", "1234", "111111", "000000", "password", "qwerty", "qwerty123", "abc123", "iloveyou", "admin", "1q2w3e", "password1", "ararat", "yerevan", "armenia", "hayastan"];
const SUP: Record<string, string> = { 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
const pow10 = (e: number) => `10${String(e).split("").map((d) => SUP[d]).join("")}`;

const OTHER = /[\u0531-\u058F\u0400-\u04FF]/;

function kinds(s: string) {
  return [/[a-z]/.test(s), /[A-Z]/.test(s), /[0-9]/.test(s), /[^A-Za-z0-9\u0531-\u058F\u0400-\u04FF]/.test(s), OTHER.test(s)];
}

const YEAR = 86400 * 365;
const DIV = [1, 60, 3600, 86400, YEAR, YEAR * 1e3, YEAR * 1e6, YEAR * 1e9];

function human(sec: number, lang: ArtLang) {
  if (sec < 1) return L(W.instant, lang);
  if (sec > YEAR * 1.4e10) return L(W.universe, lang);
  let u = 0;
  while (u < DIV.length - 1 && sec >= DIV[u + 1]) u++;
  return `≈ ${num(Math.round(sec / DIV[u]), lang)} ${L(W.units[u], lang)}`;
}

export default function Password({ spec, lang }: SimProps) {
  const [s, setS] = useState("ararat2010");
  const k = kinds(s);
  const pool = [26, 26, 10, 33, 70].reduce((n, size, i) => n + (k[i] ? size : 0), 0);
  const len = [...s].length;
  const common = COMMON.includes(s.toLowerCase());
  const lg = len && pool ? len * Math.log10(pool) : 0;
  const sec = common ? 0 : 10 ** lg / 2 / 1e10;
  const level = common || lg < 10 ? 0 : lg < 16 ? 1 : lg < 20 ? 2 : lg < 26 ? 3 : 4;
  const colors = ["#dc2626", "#f97316", "#eab308", "#22c55e", "#15803d"];
  return (
    <ArtFrame kind="experiment" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <input className="art-input" value={s} maxLength={40} spellCheck={false} autoComplete="off" onChange={(e) => setS(e.target.value)} aria-label={L(W.input, lang)} />
      <div className="sim-meter" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => <span key={i} style={{ background: i <= level ? colors[level] : undefined }} />)}
      </div>
      <p className="sim-note" style={{ color: colors[level], fontWeight: 900 }}>{L(W.levels[level], lang)}</p>
      <div className="art-chips">
        {W.kinds.map((name, i) => <span key={i} className={k[i] ? "art-chip is-active" : "art-chip"}>{k[i] ? "✓ " : ""}{L(name, lang)}</span>)}
      </div>
      <Readouts items={[[L(W.length, lang), String(len), COLORS.a], [L(W.pool, lang), String(pool), COLORS.c], [L(W.combos, lang), lg ? `≈ ${pow10(Math.floor(lg))}` : "—", COLORS.b], [L(W.time, lang), common ? L(W.instant, lang) : human(sec, lang), colors[level]]]} />
      {common ? <p className="sim-note is-bad">{L(W.common, lang)}</p> : <p className="sim-note">{L(W.tip, lang)}</p>}
      <div className="art-chips">
        {["123456", "ararat2010", "Ararat2010!", "Apricot-Aragats-2024!"].map((x) => <button key={x} type="button" className="art-chip" onClick={() => setS(x)}>{x}</button>)}
      </div>
    </ArtFrame>
  );
}
