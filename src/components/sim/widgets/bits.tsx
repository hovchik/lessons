"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Readouts, Slider, Stage } from "../kit";
import { L, t } from "../labels";
import { COLORS, num } from "../math-kit";

/**
 * How a computer stores numbers, colours and letters.
 *   bits             eight bit cards (128 … 1): tap to switch a bit, read the number; "Make it" sets a target
 *   bits mode=rgb    three sliders mix a colour from red, green and blue (0–255 each), with the hex and bits
 *   bits mode=text   type a word and see each character's code and its UTF-8 bytes
 */
const W = {
  binary: t("Experiment: binary numbers", "Փորձ․ երկուական թվեր", "Опыт: двоичные числа"),
  binaryHint: t("Each card is one bit. Tap a card to switch it on (1) or off (0); the number is the sum of the cards that are on.", "Յուրաքանչյուր քարտ մեկ բիթ է։ Սեղմի՛ր քարտին՝ այն միացնելու (1) կամ անջատելու (0) համար․ թիվը միացված քարտերի գումարն է։", "Каждая карточка — один бит. Нажми на карточку, чтобы включить (1) или выключить (0) её; число — сумма включённых карточек."),
  rgb: t("Experiment: mixing a colour", "Փորձ․ գույնի խառնում", "Опыт: смешиваем цвет"),
  rgbHint: t("A pixel's colour is three numbers from 0 to 255: how much red, green and blue light it gives. Move the sliders.", "Պիքսելի գույնը 0-ից 255 երեք թիվ է՝ որքան կարմիր, կանաչ և կապույտ լույս է այն տալիս։ Շարժի՛ր սահիչները։", "Цвет пикселя — три числа от 0 до 255: сколько он даёт красного, зелёного и синего света. Двигай ползунки."),
  text: t("Experiment: letters as numbers", "Փորձ․ տառերը որպես թվեր", "Опыт: буквы как числа"),
  textHint: t("Type a word. Every character has a number code (Unicode); UTF-8 stores it in 1 to 4 bytes.", "Գրի՛ր որևէ բառ։ Յուրաքանչյուր նիշ ունի թվային կոդ (Unicode), իսկ UTF-8-ը այն պահում է 1-ից 4 բայթում։", "Напечатай слово. У каждого символа есть числовой код (Unicode); UTF-8 хранит его в 1–4 байтах."),
  decimal: t("Decimal", "Տասական", "Десятичное"),
  binaryV: t("Binary", "Երկուական", "Двоичное"),
  target: t("Make this number", "Կազմի՛ր այս թիվը", "Собери это число"),
  makeIt: t("New target", "Նոր թիվ", "Новое число"),
  clear: t("All off", "Բոլորն անջատել", "Все выключить"),
  done: t("Yes! {n} = {b}₂", "Այո՛։ {n} = {b}₂", "Да! {n} = {b}₂"),
  red: t("Red (R)", "Կարմիր (R)", "Красный (R)"),
  green: t("Green (G)", "Կանաչ (G)", "Зелёный (G)"),
  blue: t("Blue (B)", "Կապույտ (B)", "Синий (B)"),
  hex: t("Web code", "Վեբ կոդ", "Веб-код"),
  bytes: t("Bytes", "Բայթ", "Байт"),
  chars: t("Characters", "Նիշ", "Символов"),
  code: t("code", "կոդ", "код"),
  ascii: t("ASCII would need", "ASCII-ում պետք կլիներ", "В ASCII нужно было бы"),
  notAscii: t("not in ASCII", "ASCII-ում չկա", "нет в ASCII"),
  black: t("black", "սև", "чёрный"),
  white: t("white", "սպիտակ", "белый"),
  yellow: t("yellow", "դեղին", "жёлтый"),
  apricot: t("apricot", "ծիրանագույն", "абрикосовый"),
  purple: t("purple", "մանուշակագույն", "фиолетовый"),
  word: t("Hi!", "Բարև", "Привет"),
};

const pad = (s: string, n: number) => s.padStart(n, "0");
const b8 = (v: number) => pad(v.toString(2), 8);

function Binary({ lang, body }: { lang: ArtLang; body: string }) {
  const [v, setV] = useState(13);
  const [goal, setGoal] = useState<number | null>(null);
  const vals = [128, 64, 32, 16, 8, 4, 2, 1];
  const hit = goal !== null && v === goal;
  return (
    <ArtFrame kind="experiment" title={L(W.binary, lang)} body={body || L(W.binaryHint, lang)}>
      <Stage w={320} h={118} label={L(W.binary, lang)}>
        {vals.map((p, i) => {
          const on = (v & p) !== 0;
          const x = 6 + i * 39;
          return (
            <g key={p} onClick={() => setV(v ^ p)} style={{ cursor: "pointer" }}>
              <rect x={x} y="12" width="34" height="58" rx="7" fill={on ? COLORS.a : "#fff"} stroke={on ? COLORS.a : "#cbd5e1"} strokeWidth="2" />
              <text x={x + 17} y="47" textAnchor="middle" fontSize="22" fontWeight="900" fill={on ? "#fff" : "#94a3b8"}>{on ? 1 : 0}</text>
              <text x={x + 17} y="88" textAnchor="middle" fontSize="11" fontWeight="900" fill={on ? COLORS.a : "#94a3b8"}>{p}</text>
              <text x={x + 17} y="104" textAnchor="middle" fontSize="8" fontWeight="700" fill="#94a3b8">2{["⁷", "⁶", "⁵", "⁴", "³", "²", "¹", "⁰"][i]}</text>
            </g>
          );
        })}
      </Stage>
      <Readouts
        items={[
          [L(W.binaryV, lang), `${b8(v)}₂`, COLORS.a],
          [L(W.decimal, lang), vals.filter((p) => v & p).join(" + ") ? `${vals.filter((p) => v & p).join(" + ")} = ${v}` : "0", COLORS.b],
          ...(goal !== null ? [[L(W.target, lang), String(goal), COLORS.d] as [string, string, string]] : []),
        ]}
      />
      {hit ? <p className="sim-note is-good" aria-live="polite">{L(W.done, lang).replace("{n}", String(goal)).replace("{b}", v.toString(2))}</p> : null}
      <div className="art-chips">
        <button type="button" className="art-chip" onClick={() => { setGoal(1 + Math.floor(Math.random() * 255)); setV(0); }}>{L(W.makeIt, lang)}</button>
        <button type="button" className="art-chip" onClick={() => setV(0)}>{L(W.clear, lang)}</button>
      </div>
    </ArtFrame>
  );
}

function Rgb({ lang, body }: { lang: ArtLang; body: string }) {
  const [c, setC] = useState<[number, number, number]>([242, 168, 0]);
  const set = (k: number, x: number) => setC(c.map((y, i) => (i === k ? x : y)) as [number, number, number]);
  const hex = "#" + c.map((x) => pad(x.toString(16).toUpperCase(), 2)).join("");
  const presets: Array<[typeof W.black, [number, number, number]]> = [
    [W.black, [0, 0, 0]], [W.white, [255, 255, 255]], [W.yellow, [255, 255, 0]], [W.apricot, [242, 168, 0]], [W.purple, [128, 0, 128]],
  ];
  return (
    <ArtFrame kind="experiment" title={L(W.rgb, lang)} body={body || L(W.rgbHint, lang)}>
      <Stage w={320} h={130} label={L(W.rgb, lang)} bg="#0f172a">
        {/* three overlapping lights */}
        <g style={{ mixBlendMode: "screen" }}>
          <circle cx="62" cy="52" r="34" fill={`rgb(${c[0]},0,0)`} />
          <circle cx="98" cy="52" r="34" fill={`rgb(0,${c[1]},0)`} />
          <circle cx="80" cy="84" r="34" fill={`rgb(0,0,${c[2]})`} />
        </g>
        <rect x="180" y="18" width="122" height="94" rx="12" fill={hex} stroke="#475569" strokeWidth="2" />
        <text x="241" y="124" textAnchor="middle" fontSize="9" fontWeight="900" fill="#e2e8f0">{hex}</text>
      </Stage>
      <div className="sim-controls">
        {[W.red, W.green, W.blue].map((name, k) => (
          <Slider key={k} label={L(name, lang)} value={c[k]} min={0} max={255} lang={lang} display={`${c[k]} = ${b8(c[k])}₂`} onChange={(x) => set(k, x)} />
        ))}
      </div>
      <Readouts items={[["RGB", `(${c.join(", ")})`, COLORS.a], [L(W.hex, lang), hex, COLORS.b], [L(W.bytes, lang), "3 × 8 = 24 bit", COLORS.d]]} />
      <div className="art-chips">
        {presets.map(([n, v]) => <button key={n.en} type="button" className="art-chip" onClick={() => setC(v)}>{L(n, lang)}</button>)}
      </div>
    </ArtFrame>
  );
}

function utf8(ch: string) {
  return [...new TextEncoder().encode(ch)];
}

function Text({ lang, body }: { lang: ArtLang; body: string }) {
  const [s, setS] = useState(L(W.word, lang));
  const chars = [...s].slice(0, 12);
  const total = chars.reduce((n, ch) => n + utf8(ch).length, 0);
  const ascii = chars.every((ch) => ch.codePointAt(0)! < 128);
  return (
    <ArtFrame kind="experiment" title={L(W.text, lang)} body={body || L(W.textHint, lang)}>
      <input className="art-input" value={s} maxLength={24} onChange={(e) => setS(e.target.value)} aria-label={L(W.text, lang)} />
      <div className="sim-bits-list">
        {chars.map((ch, i) => {
          const cp = ch.codePointAt(0)!;
          const bytes = utf8(ch);
          return (
            <div key={i} className="sim-bits-row">
              <b className="sim-bits-ch">{ch === " " ? "␣" : ch}</b>
              <span className="sim-bits-code">{num(cp, lang)}<small>U+{pad(cp.toString(16).toUpperCase(), 4)}</small></span>
              <span className="sim-bits-bytes">
                {bytes.map((b, k) => <code key={k} style={{ background: ["#e0e7ff", "#fef3c7", "#dcfce7", "#fce7f3"][k] }}>{b8(b)}</code>)}
              </span>
            </div>
          );
        })}
      </div>
      <Readouts
        items={[
          [L(W.chars, lang), String(chars.length), COLORS.a],
          ["UTF-8", `${total} ${L(W.bytes, lang).toLowerCase()}`, COLORS.b],
          [L(W.ascii, lang), ascii ? `${chars.length} ${L(W.bytes, lang).toLowerCase()}` : L(W.notAscii, lang), COLORS.d],
        ]}
      />
      <div className="art-chips">
        {["Hi!", "Բարև", "Мир", "A a 0", "Ա ա", "🙂"].map((w) => <button key={w} type="button" className="art-chip" onClick={() => setS(w)}>{w}</button>)}
      </div>
    </ArtFrame>
  );
}

export default function Bits({ spec, lang }: SimProps) {
  const mode = spec.opts.mode ?? "binary";
  if (mode === "rgb") return <Rgb lang={lang} body={spec.body} />;
  if (mode === "text") return <Text lang={lang} body={spec.body} />;
  return <Binary lang={lang} body={spec.body} />;
}
