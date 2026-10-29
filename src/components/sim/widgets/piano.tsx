"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Play, Square } from "lucide-react";
import { ArtFrame } from "@/components/art/frame";
import { list, type ArtLang, type Tr } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Choice, Readouts, Slider, Stage } from "../kit";
import { L, t } from "../labels";

/**
 * Music you can hear: a two-octave keyboard (scales, intervals, chords), notes on the treble
 * staff, note lengths, rhythms, metre and tempo, and the qualities of a sound (high/low,
 * loud/quiet, long/short). Sound comes from the Web Audio API and starts only on a tap.
 */
const W = {
  keys: t("Play the keyboard", "Նվագի՛ր ստեղնաշարի վրա", "Сыграй на клавиатуре"),
  keysHint: t("Tap a key to hear it. Press Play to hear the coloured notes in order.", "Հպի՛ր ստեղնին՝ լսելու համար։ Սեղմի՛ր «Նվագել»՝ գունավոր նոտաները հերթով լսելու համար։", "Нажми на клавишу, чтобы услышать её. Нажми «Играть», чтобы услышать цветные ноты по порядку."),
  scaleHint: t("The steps between the notes of a scale are tones (1) and semitones (½). Compare the patterns of major and minor.", "Ձայնաշարի նոտաների միջև քայլերը տոներ են (1) և կիսատոներ (½)։ Համեմատի՛ր մաժորի և մինորի կառուցվածքը։", "Шаги между нотами гаммы — тоны (1) и полутоны (½). Сравни строение мажора и минора."),
  staff: t("Notes on the staff", "Նոտաները հնգագծի վրա", "Ноты на нотном стане"),
  staffHint: t("Tap a note or a key: you will hear it and see where it lives on the staff and on the keyboard.", "Հպի՛ր նոտային կամ ստեղնին․ կլսես այն և կտեսնես նրա տեղը հնգագծի և ստեղնաշարի վրա։", "Нажми на ноту или клавишу: услышишь её и увидишь, где она живёт на нотном стане и на клавиатуре."),
  durations: t("How long notes last", "Որքան են տևում նոտաները", "Сколько длятся ноты"),
  durHint: t("Every row fills the same bar of 4 beats. Tap a row to hear it: the shorter the notes, the more of them fit in.", "Ամեն տող լրացնում է 4 զարկից բաղկացած նույն տակտը։ Հպի՛ր տողին՝ լսելու համար․ որքան կարճ են նոտաները, այնքան շատ են տեղավորվում։", "Каждая строка заполняет один и тот же такт в 4 доли. Нажми на строку, чтобы услышать: чем короче ноты, тем больше их помещается."),
  rhythm: t("Clap the rhythm", "Ծափ տո՛ւր ռիթմը", "Прохлопай ритм"),
  rhythmHint: t("Press Play and clap along with the syllables. Change the tempo: the rhythm stays the same, only faster or slower.", "Սեղմի՛ր «Նվագել» և ծափ տուր վանկերի հետ։ Փոխի՛ր տեմպը․ ռիթմը նույնն է մնում, միայն ավելի արագ կամ դանդաղ։", "Нажми «Играть» и хлопай вместе со слогами. Измени темп: ритм остаётся тем же, только быстрее или медленнее."),
  meter: t("Feel the beat", "Զգա՛ զարկը", "Почувствуй долю"),
  meterHint: t("The big circle is the strong beat. Count along and try marching to 2, waltzing to 3. Change the tempo and listen to how the mood changes.", "Մեծ շրջանը ուժեղ զարկն է։ Հաշվի՛ր և փորձի՛ր քայլել 2-ով, վալս պարել 3-ով։ Փոխի՛ր տեմպը և լսի՛ր, թե ինչպես է փոխվում տրամադրությունը։", "Большой круг — сильная доля. Считай вслух, попробуй маршировать на 2 и вальсировать на 3. Измени темп и послушай, как меняется настроение."),
  interval: t("Measure an interval", "Չափի՛ր ինտերվալը", "Измерь интервал"),
  intHint: t("Choose which note to move, then tap a key. Count the steps from the lower note to the upper one, including both.", "Ընտրի՛ր, թե որ նոտան ես տեղափոխում, ապա հպի՛ր ստեղնին։ Հաշվի՛ր քայլերը ստորին նոտայից մինչև վերինը՝ երկուսն էլ ներառյալ։", "Выбери, какую ноту двигать, и нажми клавишу. Считай ступени от нижней ноты до верхней, включая обе."),
  chord: t("Build a chord", "Կառուցի՛ր ակորդ", "Построй аккорд"),
  chordHint: t("A triad is three notes a third apart. Major has a big third at the bottom (4 semitones), minor a small one (3). Listen to the difference.", "Եռահնչյունն երեք նոտա է՝ իրարից տերցիա հեռավորությամբ։ Մաժորում ներքևում մեծ տերցիա է (4 կիսատոն), մինորում՝ փոքր (3)։ Լսի՛ր տարբերությունը։", "Трезвучие — три ноты, стоящие через терцию. В мажоре внизу большая терция (4 полутона), в миноре — малая (3). Послушай разницу."),
  sound: t("What a sound is like", "Ինչպիսին է հնչյունը", "Какой бывает звук"),
  soundHint: t("Move the sliders and press Play. Watch the wave: faster waves sound higher, taller waves sound louder, and a longer wave lasts longer.", "Շարժի՛ր սահիչները և սեղմի՛ր «Նվագել»։ Նայի՛ր ալիքին․ ավելի հաճախ ալիքները հնչում են ավելի բարձր, ավելի մեծ ալիքները՝ ավելի ուժեղ, իսկ ավելի երկար ալիքն ավելի երկար է տևում։", "Двигай ползунки и нажимай «Играть». Смотри на волну: частые волны звучат выше, высокие — громче, а длинная волна звучит дольше."),
  play: t("Play", "Նվագել", "Играть"),
  stop: t("Stop", "Կանգ", "Стоп"),
  note: t("Note", "Նոտա", "Нота"),
  pattern: t("Steps", "Քայլեր", "Шаги"),
  major: t("major", "մաժոր", "мажор"),
  minor: t("minor", "մինոր", "минор"),
  lower: t("Move the lower note", "Տեղափոխել ստորին նոտան", "Двигать нижнюю ноту"),
  upper: t("Move the upper note", "Տեղափոխել վերին նոտան", "Двигать верхнюю ноту"),
  melodic: t("One after the other", "Իրար հետևից", "По очереди"),
  harmonic: t("Together", "Միասին", "Вместе"),
  interval_: t("Interval", "Ինտերվալ", "Интервал"),
  steps: t("Steps", "Աստիճաններ", "Ступени"),
  semis: t("Semitones", "Կիսատոներ", "Полутоны"),
  sounds: t("Sounds", "Հնչում է", "Звучит"),
  consonance: t("consonance: calm", "կոնսոնանս․ հանգիստ", "консонанс: спокойно"),
  dissonance: t("dissonance: tense", "դիսոնանս․ լարված", "диссонанс: напряжённо"),
  wide: t("wider than an octave", "օկտավայից լայն", "шире октавы"),
  chordName: t("Chord", "Ակորդ", "Аккорд"),
  built: t("Built from", "Կառուցված է", "Строение"),
  tempo: t("Tempo", "Տեմպ", "Темп"),
  bpm: t("beats a minute", "զարկ րոպեում", "ударов в минуту"),
  perBar: t("Beats in a bar", "Զարկ տակտում", "Долей в такте"),
  feels: t("Sounds like", "Հիշեցնում է", "Похоже на"),
  pitch: t("Pitch", "Բարձրություն", "Высота"),
  volume: t("Loudness", "Ուժգնություն", "Громкость"),
  length: t("Length", "Տևողություն", "Длительность"),
  high: t("high", "բարձր", "высокий"),
  mid: t("middle", "միջին", "средний"),
  low: t("low", "ցածր", "низкий"),
  loud: t("loud", "ուժեղ", "громко"),
  quiet: t("quiet", "թույլ", "тихо"),
  long: t("long", "երկար", "долгий"),
  short: t("short", "կարճ", "короткий"),
  beats4: t("4 beats", "4 զարկ", "4 доли"),
  sec: t("s", "վ", "с"),
  melody: t("Melody and accompaniment", "Մեղեդի և նվագակցություն", "Мелодия и аккомпанемент"),
  melodyHint: t("The line is the melody: watch it go up, down and stay on the spot. The blocks below are the accompaniment chords. Listen to each part alone, then together.", "Գիծը մեղեդին է․ նայի՛ր, թե ինչպես է այն բարձրանում, իջնում և մնում տեղում։ Ներքևի ուղղանկյունները նվագակցության ակորդներն են։ Լսի՛ր յուրաքանչյուր մասն առանձին, հետո՝ միասին։", "Линия — это мелодия: смотри, как она поднимается, опускается и стоит на месте. Блоки внизу — аккорды аккомпанемента. Послушай каждую часть отдельно, а потом вместе."),
  onlyMelody: t("Melody", "Մեղեդի", "Мелодия"),
  onlyAcc: t("Accompaniment", "Նվագակցություն", "Аккомпанемент"),
  both: t("Both", "Միասին", "Вместе"),
  moves: t("Moves", "Շարժում", "Движение"),
  up: t("up", "վեր", "вверх"),
  down: t("down", "վար", "вниз"),
  same: t("on the spot", "տեղում", "на месте"),
  step: t("by step", "քայլով", "плавно, по ступеням"),
  leap: t("by leap", "ցատկով", "скачком"),
  prog: t("Four chords for a song", "Չորս ակորդ երգի համար", "Четыре аккорда для песни"),
  progHint: t("Choose a chord loop and press Play. Thousands of songs are built on these few patterns: try humming your own tune over them.", "Ընտրի՛ր ակորդների շրջան և սեղմի՛ր «Նվագել»։ Հազարավոր երգեր կառուցված են այս մի քանի կաղապարների վրա․ փորձի՛ր դրանց վրա քո մեղեդին մռմռալ։", "Выбери круг аккордов и нажми «Играть». Тысячи песен построены на этих немногих схемах: попробуй напеть над ними свою мелодию."),
  chords: t("Chords", "Ակորդներ", "Аккорды"),
  now: t("Now", "Հիմա", "Сейчас"),
};

const METER_FEEL: Record<string, Tr> = {
  "2": t("a march, a polka", "քայլերգ, պոլկա", "марш, полька"),
  "3": t("a waltz, a minuet", "վալս, մենուետ", "вальс, менуэт"),
  "4": t("most songs, a hymn", "երգերի մեծ մասը, օրհներգ", "большинство песен, гимн"),
  "6": t("a lullaby, a barcarolle", "օրորոցային, բարկարոլա", "колыбельная, баркарола"),
};

const TEMPI: Array<[number, string, Tr]> = [
  [60, "Largo", t("very slow, broad", "շատ դանդաղ, լայն", "очень медленно, широко")],
  [76, "Adagio", t("slow, calm", "դանդաղ, հանգիստ", "медленно, спокойно")],
  [108, "Andante", t("at a walking pace", "քայլքի արագությամբ", "в темпе шага")],
  [120, "Moderato", t("moderate", "չափավոր", "умеренно")],
  [168, "Allegro", t("fast, cheerful", "արագ, զվարթ", "быстро, весело")],
  [999, "Presto", t("very fast", "շատ արագ", "очень быстро")],
];
const tempoName = (bpm: number, lang: ArtLang) => {
  const [, name, tr] = TEMPI.find(([max]) => bpm < max) ?? TEMPI[TEMPI.length - 1];
  return `${name}: ${L(tr, lang)}`;
};

/* ---------- note names ---------- */

const NAMES: Record<ArtLang, string[]> = {
  en: ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"],
  hy: ["դո", "դո♯", "ռե", "ռե♯", "մի", "ֆա", "ֆա♯", "սոլ", "սոլ♯", "լյա", "լյա♯", "սի"],
  ru: ["до", "до♯", "ре", "ре♯", "ми", "фа", "фа♯", "соль", "соль♯", "ля", "ля♯", "си"],
};
const SOLFA = ["do", "do♯", "re", "re♯", "mi", "fa", "fa♯", "sol", "sol♯", "la", "la♯", "ti"];
const short = (m: number, lang: ArtLang) => NAMES[lang][m % 12];
/** "E (mi)" in English, "մի" / "ми" elsewhere. */
const full = (m: number, lang: ArtLang) => (lang === "en" ? `${NAMES.en[m % 12]} (${SOLFA[m % 12]})` : NAMES[lang][m % 12]);

const LETTER: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
/** "C4", "F#5", "Bb4" → MIDI number (C4 = 60). */
export function parseNote(s: string): number | null {
  const m = /^([A-G])([#sb]?)(\d)$/.exec(s.trim());
  if (!m) return null;
  return 12 * (Number(m[3]) + 1) + LETTER[m[1]] + (m[2] === "b" ? -1 : m[2] ? 1 : 0);
}
/** Diatonic position (letter steps from C0), spelling black keys as sharps. */
const diatonic = (m: number) => {
  const pc = m % 12;
  const letter = [0, 0, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6][pc];
  return letter + 7 * (Math.floor(m / 12) - 1);
};
const isBlack = (m: number) => [1, 3, 6, 8, 10].includes(m % 12);

/* ---------- sound ---------- */

let ctx: AudioContext | null = null;
let out: AudioNode | null = null;
let wave: PeriodicWave | null = null;
/** Phones only let audio start inside a tap that has ended (touchend, click), not on pointerdown. */
function unlockOnNextGesture() {
  const kick = () => {
    if (ctx && ctx.state !== "running") void ctx.resume().catch(() => undefined);
    if (!ctx || ctx.state === "running") ["pointerup", "touchend", "click", "keydown"].forEach((e) => document.removeEventListener(e, kick, true));
  };
  ["pointerup", "touchend", "click", "keydown"].forEach((e) => document.addEventListener(e, kick, true));
}
function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    // iPhones mute Web Audio when the ring/silent switch is off; "playback" makes it sound like a video would.
    const session = (navigator as unknown as { audioSession?: { type: string } }).audioSession;
    if (session) try { session.type = "playback"; } catch { /* not allowed here */ }
    ctx = new AC();
    // A gentle limiter, so chords and melody with accompaniment never crackle.
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -10;
    comp.knee.value = 8;
    comp.ratio.value = 6;
    comp.connect(ctx.destination);
    out = comp;
    // A brighter, piano-like tone: the overtones keep low notes audible on small phone speakers.
    const h = [0, 1, 0.55, 0.32, 0.22, 0.12, 0.08, 0.05, 0.03];
    wave = ctx.createPeriodicWave(new Float32Array(h.length), new Float32Array(h));
    unlockOnNextGesture();
  }
  if (ctx.state !== "running") void ctx.resume().catch(() => undefined);
  return ctx;
}
/** Runs go() once the audio clock is running, so nothing is scheduled on a frozen clock. */
function whenRunning(c: AudioContext, go: () => void) {
  if (c.state === "running") go();
  else c.resume().then(go, () => undefined);
}
const freq = (m: number) => 440 * Math.pow(2, (m - 69) / 12);

/**
 * One note: a piano-like strike that fades away, or (held) an even tone that lasts its full
 * length, for the "how long is the sound" experiments.
 */
function tone(c: AudioContext, nodes: OscillatorNode[], f: number, at: number, dur: number, vol: number, held = false) {
  const t0 = c.currentTime + at;
  const o = c.createOscillator();
  const g = c.createGain();
  if (wave) o.setPeriodicWave(wave);
  else o.type = "triangle";
  o.frequency.value = f;
  const end = t0 + Math.max(0.06, dur);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.linearRampToValueAtTime(vol, t0 + 0.012);
  if (held) g.gain.setTargetAtTime(vol * 0.75, t0 + 0.012, 0.15);
  // higher strings die away faster, like on a real piano
  else g.gain.setTargetAtTime(vol * 0.05, t0 + 0.012, Math.min(1.2, 0.25 + 60 / f));
  g.gain.setTargetAtTime(0.0001, end - 0.04, 0.02);
  o.connect(g).connect(out ?? c.destination);
  o.start(t0);
  o.stop(end + 0.15);
  nodes.push(o);
  o.onended = () => {
    g.disconnect();
    const k = nodes.indexOf(o);
    if (k >= 0) nodes.splice(k, 1);
  };
}
/** A metronome or clap: a very short burst, higher for the strong beat. */
function click(c: AudioContext, nodes: OscillatorNode[], at: number, strong: boolean) {
  const t0 = c.currentTime + at;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = "square";
  o.frequency.value = strong ? 1568 : 1046;
  g.gain.setValueAtTime(strong ? 0.22 : 0.13, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.06);
  o.connect(g).connect(out ?? c.destination);
  o.start(t0);
  o.stop(t0 + 0.08);
  nodes.push(o);
  o.onended = () => {
    g.disconnect();
    const k = nodes.indexOf(o);
    if (k >= 0) nodes.splice(k, 1);
  };
}
const silence = (nodes: OscillatorNode[]) => {
  nodes.splice(0).forEach((n) => { try { n.stop(); } catch { /* already stopped */ } });
};

type Ev = { at: number; dur: number; notes?: number[]; click?: boolean; strong?: boolean; vol?: number; f?: number; held?: boolean };

/**
 * Schedules a list of sounds and reports which one is sounding, for highlighting. tap() sounds
 * one key on its own: it does not stop the tune or move the highlight.
 */
function usePlayer() {
  const bag = useRef<{ timers: number[]; nodes: OscillatorNode[]; taps: OscillatorNode[]; run: number }>({ timers: [], nodes: [], taps: [], run: 0 });
  const [active, setActive] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const halt = () => {
    const b = bag.current;
    b.run++;
    b.timers.forEach((id) => window.clearTimeout(id));
    b.timers.length = 0;
    silence(b.nodes);
  };
  useEffect(() => {
    const b = bag.current;
    return () => {
      b.run++;
      b.timers.forEach((id) => window.clearTimeout(id));
      silence(b.nodes);
      silence(b.taps);
    };
  }, []);
  const stop = () => { halt(); setActive(null); setPlaying(false); };
  const play = (evs: Ev[]) => {
    halt();
    setActive(null);
    const c = audio();
    if (!c || !evs.length) { setPlaying(false); return; }
    setPlaying(true);
    const b = bag.current;
    const run = b.run;
    whenRunning(c, () => {
      if (run !== b.run) return;
      evs.forEach((e, i) => {
        const n = (e.notes ?? []).length;
        if (e.click) click(c, b.nodes, e.at, !!e.strong);
        for (const m of e.notes ?? []) tone(c, b.nodes, freq(m), e.at, e.dur, (e.vol ?? 0.3) / Math.max(1, n * 0.7), e.held);
        if (e.f) tone(c, b.nodes, e.f, e.at, e.dur, e.vol ?? 0.3, e.held);
        b.timers.push(window.setTimeout(() => setActive(i), e.at * 1000));
      });
      const end = Math.max(...evs.map((e) => e.at + e.dur));
      b.timers.push(window.setTimeout(() => { setActive(null); setPlaying(false); }, end * 1000 + 60));
    });
  };
  const tap = (m: number, dur = 0.9) => {
    const c = audio();
    if (!c) return;
    const b = bag.current;
    whenRunning(c, () => tone(c, b.taps, freq(m), 0, dur, 0.32));
  };
  return { active, playing, play, stop, tap };
}

function PlayButton({ playing, lang, onPlay, onStop, label, plain }: { playing: boolean; lang: ArtLang; onPlay: () => void; onStop: () => void; label?: string; plain?: boolean }) {
  return (
    <button type="button" className={plain ? "art-btn" : "art-btn is-primary"} onClick={playing ? onStop : onPlay}>
      {playing ? <Square className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
      {playing ? L(W.stop, lang) : label ?? L(W.play, lang)}
    </button>
  );
}

/* ---------- drawing ---------- */

const LO = 60; // C4
const HI = 83; // B5
type Key = { m: number; x: number; w: number; black: boolean };
function layout(x0: number, ww: number, lo = LO, hi = HI): Key[] {
  const keys: Key[] = [];
  let wi = 0;
  for (let m = lo; m <= hi; m++) {
    if (isBlack(m)) keys.push({ m, x: x0 + wi * ww - ww * 0.3, w: ww * 0.6, black: true });
    else {
      keys.push({ m, x: x0 + wi * ww, w: ww, black: false });
      wi++;
    }
  }
  return keys;
}
const keyCenter = (keys: Key[], m: number) => {
  const k = keys.find((k) => k.m === m);
  return k ? k.x + k.w / 2 : 0;
};

function Keyboard({ keys, y, h, lang, marks, onKey, labels = true }: { keys: Key[]; y: number; h: number; lang: ArtLang; marks: Record<number, string>; onKey: (m: number) => void; labels?: boolean }) {
  const white = keys.filter((k) => !k.black);
  const black = keys.filter((k) => k.black);
  return (
    <g>
      {white.map((k) => (
        <g key={k.m} onPointerDown={() => onKey(k.m)} style={{ cursor: "pointer" }}>
          <rect x={k.x} y={y} width={k.w} height={h} rx="2" fill={marks[k.m] ?? "#fff"} stroke="#334155" strokeWidth="1" />
          {labels ? <text x={k.x + k.w / 2} y={y + h - 6} textAnchor="middle" fontSize="7" fontWeight="800" fill={marks[k.m] ? "#fff" : "#64748b"}>{short(k.m, lang)}</text> : null}
        </g>
      ))}
      {black.map((k) => (
        <rect key={k.m} x={k.x} y={y} width={k.w} height={h * 0.6} rx="1.5" fill={marks[k.m] ?? "#1e293b"} stroke="#0f172a" strokeWidth="1" onPointerDown={() => onKey(k.m)} style={{ cursor: "pointer" }} />
      ))}
    </g>
  );
}

/** A simple treble clef drawn as one stroke, sized for a staff with 8-unit line spacing. */
function Clef({ x, top }: { x: number; top: number }) {
  return (
    <path
      transform={`translate(${x} ${top})`}
      d="M11,25 C7,25 7,19 11,19 C16,19 17,27 11,29 C4,30 2,21 8,15 C13,10 16,4 14,-4 C13,-9 9,-8 9,-2 L13,38 C13.5,42 9,43 8,40"
      fill="none" stroke="#1e1b4b" strokeWidth="1.8" strokeLinecap="round"
    />
  );
}

type Dur = "w" | "h" | "q" | "e";
/** A note with its head centred at (x, y); stems go up unless down is set. */
function NoteHead({ x, y, d, color = "#1e1b4b", down = false, flag = true }: { x: number; y: number; d: Dur; color?: string; down?: boolean; flag?: boolean }) {
  const hollow = d === "w" || d === "h";
  const sx = down ? x - 4.6 : x + 4.6;
  const sy2 = down ? y + 26 : y - 26;
  return (
    <g>
      <ellipse cx={x} cy={y} rx={d === "w" ? 6 : 5} ry="3.8" transform={`rotate(-20 ${x} ${y})`} fill={hollow ? "#fff" : color} stroke={color} strokeWidth={hollow ? 1.8 : 1} />
      {d !== "w" ? <line x1={sx} y1={y} x2={sx} y2={sy2} stroke={color} strokeWidth="1.4" /> : null}
      {d === "e" && flag ? <path d={down ? `M${sx},${sy2} q8,-6 6,-14` : `M${sx},${sy2} q8,6 6,14`} fill="none" stroke={color} strokeWidth="1.8" /> : null}
    </g>
  );
}

/** Rests: whole hangs from a line, half sits on it, quarter is a zigzag, eighth a little 7. */
function Rest({ x, y, d, color = "#1e1b4b" }: { x: number; y: number; d: Dur; color?: string }) {
  if (d === "w") return <rect x={x - 5} y={y - 8} width="10" height="4" fill={color} />;
  if (d === "h") return <rect x={x - 5} y={y - 4} width="10" height="4" fill={color} />;
  if (d === "q") return <path d={`M${x - 2},${y - 12} l5,6 l-5,5 l5,6 q-6,-2 -3,4`} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />;
  return <g><circle cx={x - 2} cy={y - 6} r="2" fill={color} /><path d={`M${x - 2},${y - 5} q4,1 6,-2 l-5,13`} fill="none" stroke={color} strokeWidth="1.6" /></g>;
}

const BEATS: Record<Dur, number> = { w: 4, h: 2, q: 1, e: 0.5 };
const DUR_NAME: Record<Dur, Tr> = {
  w: t("Whole", "Ամբողջական", "Целая"),
  h: t("Half", "Կես", "Половинная"),
  q: t("Quarter", "Քառորդ", "Четвертная"),
  e: t("Eighth", "Ութերորդական", "Восьмая"),
};
const SYL: Record<ArtLang, Record<Dur, string>> = {
  en: { w: "ta-a-a-a", h: "ta-a", q: "ta", e: "ti" },
  hy: { w: "տա-ա-ա-ա", h: "տա-ա", q: "տա", e: "տի" },
  ru: { w: "та-а-а-а", h: "та-а", q: "та", e: "ти" },
};

/* ---------- interval and chord names ---------- */

const STEP_NAMES: Record<ArtLang, string[]> = {
  en: ["unison", "second", "third", "fourth", "fifth", "sixth", "seventh", "octave"],
  hy: ["պրիմա", "սեկունդա", "տերցիա", "կվարտա", "կվինտա", "սեքստա", "սեպտիմա", "օկտավա"],
  ru: ["прима", "секунда", "терция", "кварта", "квинта", "секста", "септима", "октава"],
};
const Q = {
  perfect: t("perfect", "մաքուր", "чистая"),
  major: t("major", "մեծ", "большая"),
  minor: t("minor", "փոքր", "малая"),
  tritone: t("tritone", "տրիտոն", "тритон"),
};
/**
 * Semitones → [steps, quality], the way school books name intervals between any two keys
 * (C–E♭ is a minor third, F–B♭ a perfect fourth), whatever the spelling of the black keys.
 */
const BY_SEMIS: Array<[number, keyof typeof Q]> = [
  [1, "perfect"], [2, "minor"], [2, "major"], [3, "minor"], [3, "major"], [4, "perfect"], [4, "tritone"],
  [5, "perfect"], [6, "minor"], [6, "major"], [7, "minor"], [7, "major"], [8, "perfect"],
];
export function intervalName(lo: number, hi: number, lang: ArtLang) {
  const semis = hi - lo;
  if (semis > 12) return { steps: diatonic(hi) - diatonic(lo) + 1, semis, name: L(W.wide, lang), calm: null as boolean | null };
  const [steps, q] = BY_SEMIS[semis];
  const base = STEP_NAMES[lang][steps - 1] ?? "";
  if (q === "tritone") return { steps, semis, name: L(Q.tritone, lang), calm: false };
  const qn = L(Q[q], lang);
  const name = lang === "en" ? (q === "perfect" && (steps === 1 || steps === 8) ? base : `${qn} ${base}`) : `${qn} ${base}`;
  return { steps, semis, name, calm: ![2, 7].includes(steps) };
}

/* ---------- modes ---------- */

const MAJOR = [0, 2, 4, 5, 7, 9, 11, 12];
const MINOR = [0, 2, 3, 5, 7, 8, 10, 12];
const SCALE_C = "#4f46e5";
const ROOT_C = "#be123c";

function KeysMode({ spec, lang }: SimProps) {
  const p = usePlayer();
  const scaleOpt = spec.opts.scale;
  const [q, setQ] = useState<"major" | "minor">(scaleOpt === "minor" ? "minor" : "major");
  const [last, setLast] = useState<number | null>(null);
  const fixedRoot = spec.opts.root ? parseNote(`${spec.opts.root}4`) : null;
  const root = fixedRoot ?? (q === "major" ? 60 : 69);
  const scale = scaleOpt ? (q === "major" ? MAJOR : MINOR).map((s) => root + s).filter((m) => m <= HI) : [];
  const given = list(spec.opts.notes).map(parseNote).filter((m): m is number => m != null);
  const seq = scaleOpt ? scale : given;
  const keys = layout(6, 22);
  const marks: Record<number, string> = {};
  seq.forEach((m, i) => (marks[m] = scaleOpt && (i === 0 || i === seq.length - 1) ? ROOT_C : SCALE_C));
  const order = scaleOpt ? [...seq, ...seq.slice(0, -1).reverse()] : seq;
  const sounding = p.active != null ? order[p.active] ?? null : null;
  const cur = sounding ?? last;
  if (cur != null) marks[cur] = "#f59e0b";
  const press = (m: number) => {
    setLast(m);
    p.tap(m);
  };
  const playSeq = () => p.play(order.map((m, i) => ({ at: i * 0.42, dur: 0.5, notes: [m] })));
  const steps = scale.slice(1).map((m, i) => (m - scale[i] === 1 ? "½" : "1"));
  return (
    <ArtFrame kind="experiment" title={L(W.keys, lang)} body={spec.body || L(scaleOpt ? W.scaleHint : W.keysHint, lang)}>
      <Stage w={320} h={scaleOpt ? 128 : 100} label={L(W.keys, lang)}>
        {scaleOpt
          ? scale.slice(1).map((m, i) => {
              const x1 = keyCenter(keys, scale[i]);
              const x2 = keyCenter(keys, m);
              const half = steps[i] === "½";
              return (
                <g key={m}>
                  <path d={`M${x1},30 Q${(x1 + x2) / 2},${half ? 18 : 10} ${x2},30`} fill="none" stroke={half ? ROOT_C : "#94a3b8"} strokeWidth="1.6" />
                  <text x={(x1 + x2) / 2} y={half ? 16 : 9} textAnchor="middle" fontSize="8" fontWeight="900" fill={half ? ROOT_C : "#475569"}>{steps[i]}</text>
                </g>
              );
            })
          : null}
        <g transform={`translate(0 ${scaleOpt ? 34 : 6})`}>
          <Keyboard keys={keys} y={0} h={88} lang={lang} marks={marks} onKey={press} />
        </g>
      </Stage>
      <div className="art-row">
        {seq.length ? <PlayButton playing={p.playing} lang={lang} onPlay={playSeq} onStop={p.stop} /> : null}
        {scaleOpt && !fixedRoot ? <Choice value={q} options={[["major", `${short(60, lang)} ${L(W.major, lang)}`], ["minor", `${short(69, lang)} ${L(W.minor, lang)}`]]} onChange={(v) => { p.stop(); setQ(v); }} /> : null}
        {scaleOpt && fixedRoot ? <Choice value={q} options={[["major", L(W.major, lang)], ["minor", L(W.minor, lang)]]} onChange={(v) => { p.stop(); setQ(v); }} /> : null}
      </div>
      <Readouts items={[
        [L(W.note, lang), cur != null ? full(cur, lang) : "—", "#f59e0b"],
        ...(scaleOpt ? [[L(W.pattern, lang), steps.join(" "), SCALE_C] as [string, string, string]] : []),
      ]} />
    </ArtFrame>
  );
}

function StaffMode({ spec, lang }: SimProps) {
  const p = usePlayer();
  const notes = (list(spec.opts.notes).length ? list(spec.opts.notes) : ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"]).map(parseNote).filter((m): m is number => m != null && m >= LO && m <= HI);
  const [sel, setSel] = useState<number | null>(null);
  const keys = layout(6, 22);
  const bottom = 62; // E4 line
  const step = (m: number) => diatonic(m) - diatonic(64);
  const dx = Math.min(30, 250 / Math.max(1, notes.length));
  const x0 = 56;
  const cur = p.active != null ? notes[p.active] : sel;
  const marks: Record<number, string> = {};
  if (cur != null) marks[cur] = "#f59e0b";
  const press = (m: number) => { if (p.playing) p.stop(); setSel(m); p.tap(m); };
  return (
    <ArtFrame kind="experiment" title={L(W.staff, lang)} body={spec.body || L(W.staffHint, lang)}>
      <Stage w={320} h={196} label={L(W.staff, lang)}>
        {[0, 1, 2, 3, 4].map((k) => <line key={k} x1="8" x2="312" y1={bottom - k * 8} y2={bottom - k * 8} stroke="#64748b" strokeWidth="1" />)}
        <Clef x={12} top={bottom - 32} />
        {notes.map((m, i) => {
          const x = x0 + i * dx;
          const s = step(m);
          const y = bottom - s * 4;
          const c = cur === m && (p.active == null || p.active === i) ? "#f59e0b" : "#1e1b4b";
          const ledgers: number[] = [];
          for (let k = -2; k >= s; k -= 2) ledgers.push(bottom - k * 4);
          for (let k = 10; k <= s; k += 2) ledgers.push(bottom - k * 4);
          return (
            <g key={i} onPointerDown={() => press(m)} style={{ cursor: "pointer" }}>
              <rect x={x - 12} y={bottom - 60} width="24" height="92" fill="transparent" />
              {ledgers.map((ly) => <line key={ly} x1={x - 9} x2={x + 9} y1={ly} y2={ly} stroke="#64748b" strokeWidth="1" />)}
              {isBlack(m) ? <text x={x - 12} y={y + 3} fontSize="10" fontWeight="900" fill={c}>♯</text> : null}
              <NoteHead x={x} y={y} d="q" color={c} down={s >= 4} />
              <text x={x} y={bottom + 26} textAnchor="middle" fontSize="7.5" fontWeight="800" fill={c}>{short(m, lang)}</text>
            </g>
          );
        })}
        <Keyboard keys={keys} y={102} h={88} lang={lang} marks={marks} onKey={press} />
      </Stage>
      <div className="art-row">
        <PlayButton playing={p.playing} lang={lang} onPlay={() => p.play(notes.map((m, i) => ({ at: i * 0.45, dur: 0.5, notes: [m] })))} onStop={p.stop} />
      </div>
      <Readouts items={[[L(W.note, lang), cur != null ? full(cur, lang) : "—", "#f59e0b"]]} />
    </ArtFrame>
  );
}

/** Lays out notes and rests in time from x0 to x0 + width, beaming eighth notes in pairs. */
function Bar({ items, x0, width, y, total, active, color = "#1e1b4b", hi = "#f59e0b" }: { items: string[]; x0: number; width: number; y: number; total: number; active: number | null; color?: string; hi?: string }) {
  const out: ReactNode[] = [];
  let beat = 0;
  const pos = items.map((it) => {
    const d = it[0] as Dur;
    const x = x0 + (beat / total) * width + 8;
    beat += BEATS[d];
    return x;
  });
  items.forEach((it, i) => {
    const d = it[0] as Dur;
    const rest = it.endsWith("r");
    const c = active === i ? hi : color;
    if (rest) out.push(<Rest key={i} x={pos[i]} y={y} d={d} color={c} />);
    else {
      // beam this eighth with the next one if both are notes and share a beat
      const pair = d === "e" && items[i + 1] === "e" && (items.slice(0, i).reduce((s, v) => s + BEATS[v[0] as Dur], 0) % 1 === 0);
      const second = d === "e" && i > 0 && items[i - 1] === "e" && (items.slice(0, i - 1).reduce((s, v) => s + BEATS[v[0] as Dur], 0) % 1 === 0);
      out.push(<NoteHead key={i} x={pos[i]} y={y} d={d} color={c} flag={!pair && !second} />);
      if (pair) out.push(<line key={`b${i}`} x1={pos[i] + 4.6} x2={pos[i + 1] + 4.6} y1={y - 26} y2={y - 26} stroke={color} strokeWidth="3" />);
    }
  });
  return <g>{out}</g>;
}

function DurationsMode({ spec, lang }: SimProps) {
  const p = usePlayer();
  const [row, setRow] = useState<number | null>(null);
  const rows: Array<[Dur, number]> = [["w", 1], ["h", 2], ["q", 4], ["e", 8]];
  const beat = 0.6;
  const playRow = (k: number) => {
    const [d, n] = rows[k];
    setRow(k);
    p.play(Array.from({ length: n }, (_, i) => ({ at: i * BEATS[d] * beat, dur: BEATS[d] * beat * 0.92, notes: [67], held: true })));
  };
  const X0 = 82, WID = 230;
  return (
    <ArtFrame kind="experiment" title={L(W.durations, lang)} body={spec.body || L(W.durHint, lang)}>
      <Stage w={320} h={212} label={L(W.durations, lang)}>
        <text x={X0 + WID / 2} y="10" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#64748b">{L(W.beats4, lang)}</text>
        {[0, 1, 2, 3, 4].map((b) => <line key={b} x1={X0 + (b * WID) / 4} x2={X0 + (b * WID) / 4} y1="14" y2="206" stroke="#e2e8f0" strokeWidth="1" strokeDasharray={b % 4 ? "3 3" : undefined} />)}
        {rows.map(([d, n], k) => {
          const y0 = 18 + k * 48;
          const on = row === k && p.playing;
          const items = Array<string>(n).fill(d);
          return (
            <g key={d} onPointerDown={() => playRow(k)} style={{ cursor: "pointer" }}>
              <rect x="4" y={y0} width="312" height="44" rx="6" fill={on ? "#fef3c7" : "transparent"} />
              <text x="8" y={y0 + 20} fontSize="8" fontWeight="900" fill="#334155">{L(DUR_NAME[d], lang)}</text>
              <text x="8" y={y0 + 31} fontSize="7" fontWeight="700" fill="#64748b">{BEATS[d] === 0.5 ? "½" : BEATS[d]}</text>
              <line x1={X0} x2={X0 + WID} y1={y0 + 30} y2={y0 + 30} stroke="#cbd5e1" />
              <Bar items={items} x0={X0} width={WID} y={y0 + 30} total={4} active={on ? p.active : null} />
              {items.map((_, i) => (
                <rect key={i} x={X0 + (i * WID) / n + 1} y={y0 + 36} width={WID / n - 2} height="6" rx="2" fill={on && p.active === i ? "#f59e0b" : ["#4f46e5", "#0891b2", "#059669", "#d97706"][k]} opacity={on && p.active === i ? 1 : 0.55} />
              ))}
            </g>
          );
        })}
      </Stage>
      <div className="art-row">
        <PlayButton playing={p.playing} lang={lang} onPlay={() => playRow(row ?? 0)} onStop={p.stop} />
        <Choice value={String(row ?? 0)} options={rows.map(([d], k) => [String(k), L(DUR_NAME[d], lang)])} onChange={(v) => playRow(Number(v))} />
      </div>
    </ArtFrame>
  );
}

function RhythmMode({ spec, lang }: SimProps) {
  const p = usePlayer();
  const items = list(spec.opts.pattern, ["q", "q", "e", "e", "q"]).filter((s) => /^[whqe]r?$/.test(s));
  const per = Number(spec.opts.meter ?? 4) || 4;
  const [bpm, setBpm] = useState(Number(spec.opts.tempo ?? 90) || 90);
  const total = items.reduce((s, v) => s + BEATS[v[0] as Dur], 0);
  let acc = 0;
  const starts = items.map((v) => { const s = acc; acc += BEATS[v[0] as Dur]; return s; });
  // Each bar gets its own box with a little room on both sides, so bar lines never touch a note.
  const nBars = Math.max(1, Math.ceil(total / per - 1e-9));
  const X0 = 10, BW = 300 / nBars, PAD = 6;
  const bars = Array.from({ length: nBars }, (_, k) => {
    const idx = items.map((_, i) => i).filter((i) => Math.min(nBars - 1, Math.floor(starts[i] / per + 1e-9)) === k);
    return { k, idx, x0: X0 + k * BW + PAD, width: BW - PAD * 2 - 8 };
  });
  const xOf = (i: number) => {
    const bar = bars.find((b) => b.idx.includes(i)) ?? bars[0];
    return bar.x0 + ((starts[i] - bar.k * per) / per) * bar.width + 8;
  };
  const play = () => {
    const b = 60 / bpm;
    const evs: Ev[] = [];
    // one bar of count-in clicks, then the rhythm
    for (let i = 0; i < per; i++) evs.push({ at: i * b, dur: 0.06, click: true, strong: i === 0 });
    items.forEach((v, i) => evs.push(v.endsWith("r") ? { at: (per + starts[i]) * b, dur: BEATS[v[0] as Dur] * b * 0.9 } : { at: (per + starts[i]) * b, dur: Math.min(BEATS[v[0] as Dur] * b * 0.9, 1.6), notes: [67], held: true }));
    p.play(evs);
  };
  const act = p.active != null && p.active >= per ? p.active - per : null;
  return (
    <ArtFrame kind="experiment" title={L(W.rhythm, lang)} body={spec.body || L(W.rhythmHint, lang)}>
      <Stage w={320} h={92} label={L(W.rhythm, lang)}>
        <line x1="8" x2="312" y1="52" y2="52" stroke="#94a3b8" />
        {Array.from({ length: nBars + 1 }, (_, k) => (
          <line key={k} x1={X0 + k * BW} x2={X0 + k * BW} y1="30" y2="62" stroke="#334155" strokeWidth={k === nBars ? 2.4 : 1.2} />
        ))}
        {bars.map((bar) => (
          <Bar key={bar.k} items={bar.idx.map((i) => items[i])} x0={bar.x0} width={bar.width} y={52} total={per} active={act != null && bar.idx.includes(act) ? bar.idx.indexOf(act) : null} />
        ))}
        {items.map((v, i) => (
          <text key={i} x={xOf(i)} y="80" textAnchor="middle" fontSize="8" fontWeight="900" fill={act === i ? "#f59e0b" : "#475569"}>{v.endsWith("r") ? "·" : SYL[lang][v[0] as Dur]}</text>
        ))}
        {p.active != null && p.active < per ? <text x="310" y="14" textAnchor="end" fontSize="10" fontWeight="900" fill="#be123c">{p.active + 1}</text> : null}
      </Stage>
      <div className="art-row">
        <PlayButton playing={p.playing} lang={lang} onPlay={play} onStop={p.stop} />
      </div>
      <Slider label={L(W.tempo, lang)} value={bpm} min={50} max={160} step={5} lang={lang} display={`${bpm} · ${tempoName(bpm, lang)}`} onChange={(v) => { p.stop(); setBpm(v); }} />
    </ArtFrame>
  );
}

function MeterMode({ spec, lang }: SimProps) {
  const [per, setPer] = useState(["2", "3", "4", "6"].includes(spec.opts.meter ?? "") ? (spec.opts.meter as string) : "2");
  const [bpm, setBpm] = useState(Number(spec.opts.tempo ?? 100) || 100);
  const [on, setOn] = useState(false);
  const [beat, setBeat] = useState(-1);
  const n = Number(per);
  useEffect(() => {
    if (!on) return;
    const c = audio();
    if (!c) return;
    const nodes: OscillatorNode[] = [];
    const timers = new Set<number>();
    let k = 0;
    let next = -1;
    let id = 0;
    // Clicks are booked a moment ahead on the audio clock, so the beat stays even when the page is busy.
    const pump = () => {
      if (c.state !== "running") return;
      if (next < 0) next = c.currentTime + 0.05;
      while (next < c.currentTime + 0.2) {
        // in 6/8 the strong beats are 1 and (more gently) 4
        const b = k % n;
        click(c, nodes, next - c.currentTime, b === 0 || (n === 6 && b === 3));
        const tid = window.setTimeout(() => { timers.delete(tid); setBeat(b); }, Math.max(0, (next - c.currentTime) * 1000));
        timers.add(tid);
        next += 60 / bpm;
        k++;
      }
    };
    let dead = false;
    whenRunning(c, () => { if (!dead) { pump(); id = window.setInterval(pump, 50); } });
    return () => { dead = true; window.clearInterval(id); timers.forEach((t) => window.clearTimeout(t)); silence(nodes); };
  }, [on, bpm, n]);
  const r = (i: number) => (i === 0 ? 20 : n === 6 && i === 3 ? 15 : 11);
  const gap = 300 / n;
  return (
    <ArtFrame kind="experiment" title={L(W.meter, lang)} body={spec.body || L(W.meterHint, lang)}>
      <Stage w={320} h={84} label={L(W.meter, lang)}>
        {Array.from({ length: n }, (_, i) => {
          const x = 10 + gap * (i + 0.5);
          const lit = on && beat === i;
          return (
            <g key={i}>
              <circle cx={x} cy="40" r={r(i) + (lit ? 4 : 0)} fill={lit ? (i === 0 ? "#be123c" : "#4f46e5") : "#e2e8f0"} />
              <text x={x} y="44" textAnchor="middle" fontSize="11" fontWeight="900" fill={lit ? "#fff" : "#475569"}>{i + 1}</text>
            </g>
          );
        })}
      </Stage>
      <div className="art-row">
        <PlayButton playing={on} lang={lang} onPlay={() => { audio(); setOn(true); }} onStop={() => { setOn(false); setBeat(-1); }} />
        <Choice value={per} options={[["2", "2/4"], ["3", "3/4"], ["4", "4/4"], ["6", "6/8"]]} onChange={(v) => { setPer(v); setBeat(-1); }} />
      </div>
      <Slider label={L(W.tempo, lang)} value={bpm} min={40} max={200} step={4} lang={lang} display={`${bpm} ${L(W.bpm, lang)}`} onChange={setBpm} />
      <Readouts items={[[L(W.tempo, lang), tempoName(bpm, lang), "#4f46e5"], [L(W.perBar, lang), String(n), "#be123c"], [L(W.feels, lang), L(METER_FEEL[per], lang), "#059669"]]} />
    </ArtFrame>
  );
}

function IntervalMode({ spec, lang }: SimProps) {
  const p = usePlayer();
  const [lo, setLo] = useState(parseNote(spec.opts.from ?? "C4") ?? 60);
  const [hi, setHi] = useState(parseNote(spec.opts.to ?? "G4") ?? 67);
  const [which, setWhich] = useState<"lower" | "upper">("upper");
  const [how, setHow] = useState<"m" | "h">("m");
  const keys = layout(6, 22);
  const a = Math.min(lo, hi), b = Math.max(lo, hi);
  const info = intervalName(a, b, lang);
  const marks: Record<number, string> = { [a]: ROOT_C, [b]: SCALE_C };
  const press = (m: number) => {
    let na = a, nb = b;
    if (which === "lower") na = m; else nb = m;
    if (na > nb) [na, nb] = [nb, na];
    setLo(na); setHi(nb);
    p.tap(m);
  };
  const x1 = keyCenter(keys, a), x2 = keyCenter(keys, b);
  return (
    <ArtFrame kind="experiment" title={L(W.interval, lang)} body={spec.body || L(W.intHint, lang)}>
      <Stage w={320} h={128} label={L(W.interval, lang)}>
        <path d={`M${x1},30 V20 H${x2} V30`} fill="none" stroke="#334155" strokeWidth="1.5" />
        <text x={(x1 + x2) / 2} y="14" textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#334155">{info.name}</text>
        <g transform="translate(0 34)"><Keyboard keys={keys} y={0} h={88} lang={lang} marks={marks} onKey={press} /></g>
      </Stage>
      <div className="art-row">
        <Choice value={which} options={[["lower", L(W.lower, lang)], ["upper", L(W.upper, lang)]]} onChange={setWhich} />
      </div>
      <div className="art-row">
        <PlayButton playing={p.playing && how === "m"} lang={lang} label={L(W.melodic, lang)} onPlay={() => { setHow("m"); p.play([{ at: 0, dur: 0.6, notes: [a] }, { at: 0.65, dur: 0.9, notes: [b] }]); }} onStop={p.stop} />
        <PlayButton plain playing={p.playing && how === "h"} lang={lang} label={L(W.harmonic, lang)} onPlay={() => { setHow("h"); p.play([{ at: 0, dur: 1.4, notes: [a, b] }]); }} onStop={p.stop} />
      </div>
      <Readouts items={[
        [L(W.interval_, lang), info.name, "#334155"],
        [L(W.steps, lang), String(info.steps), ROOT_C],
        [L(W.semis, lang), String(info.semis), SCALE_C],
        ...(info.calm == null ? [] : [[L(W.sounds, lang), L(info.calm ? W.consonance : W.dissonance, lang), info.calm ? "#059669" : "#d97706"] as [string, string, string]]),
      ]} />
    </ArtFrame>
  );
}

function ChordMode({ spec, lang }: SimProps) {
  const p = usePlayer();
  const [root, setRoot] = useState(spec.opts.root && LETTER[spec.opts.root] != null ? spec.opts.root : "C");
  const [q, setQ] = useState<"major" | "minor">(spec.opts.q === "minor" ? "minor" : "major");
  const keys = layout(6, 22);
  const r = 60 + LETTER[root];
  const third = r + (q === "major" ? 4 : 3);
  const notes = [r, third, r + 7];
  const marks: Record<number, string> = { [r]: ROOT_C, [third]: "#059669", [r + 7]: SCALE_C };
  const xs = notes.map((m) => keyCenter(keys, m));
  const play = () => p.play([...notes.map((m, i) => ({ at: i * 0.35, dur: 0.45, notes: [m] })), { at: 1.15, dur: 1.6, notes }]);
  const name = `${short(r, lang)} ${L(q === "major" ? W.major : W.minor, lang)}`;
  return (
    <ArtFrame kind="experiment" title={L(W.chord, lang)} body={spec.body || L(W.chordHint, lang)}>
      <Stage w={320} h={128} label={L(W.chord, lang)}>
        {[0, 1].map((k) => (
          <g key={k}>
            <path d={`M${xs[k]},30 Q${(xs[k] + xs[k + 1]) / 2},12 ${xs[k + 1]},30`} fill="none" stroke={k === 0 ? "#059669" : "#64748b"} strokeWidth="1.6" />
            <text x={(xs[k] + xs[k + 1]) / 2} y="16" textAnchor="middle" fontSize="8.5" fontWeight="900" fill={k === 0 ? "#059669" : "#475569"}>{notes[k + 1] - notes[k]}</text>
          </g>
        ))}
        <g transform="translate(0 34)"><Keyboard keys={keys} y={0} h={88} lang={lang} marks={marks} onKey={(m) => p.tap(m)} /></g>
      </Stage>
      <div className="art-row">
        <PlayButton playing={p.playing} lang={lang} onPlay={play} onStop={p.stop} />
        <Choice value={q} options={[["major", L(W.major, lang)], ["minor", L(W.minor, lang)]]} onChange={(v) => { p.stop(); setQ(v); }} />
      </div>
      <div className="art-row">
        <Choice value={root} options={["C", "D", "E", "F", "G", "A"].map((k) => [k, short(60 + LETTER[k], lang)] as [string, string])} onChange={(v) => { p.stop(); setRoot(v); }} />
      </div>
      <Readouts items={[[L(W.chordName, lang), `${name}: ${notes.map((m) => short(m, lang)).join("–")}`, ROOT_C], [L(W.built, lang), `${third - r} + ${r + 7 - third} ${L(W.semis, lang).toLowerCase()}`, "#059669"]]} />
    </ArtFrame>
  );
}

/** Tunes for mode=melody: [note, beats] and one chord root (with "m" for minor) per two beats. */
export const TUNES: Record<string, { notes: Array<[string, number]>; chords: string[] }> = {
  twinkle: {
    notes: [["C4", 1], ["C4", 1], ["G4", 1], ["G4", 1], ["A4", 1], ["A4", 1], ["G4", 2], ["F4", 1], ["F4", 1], ["E4", 1], ["E4", 1], ["D4", 1], ["D4", 1], ["C4", 2]],
    chords: ["C", "C", "F", "C", "F", "C", "G", "C"],
  },
  ode: {
    notes: [["E4", 1], ["E4", 1], ["F4", 1], ["G4", 1], ["G4", 1], ["F4", 1], ["E4", 1], ["D4", 1], ["C4", 1], ["C4", 1], ["D4", 1], ["E4", 1], ["E4", 1.5], ["D4", 0.5], ["D4", 2]],
    chords: ["C", "C", "G", "G", "C", "C", "C", "G"],
  },
};
const CHORD_C = "#0d9488";
/** "Am" → [A3, C4, E4]: a triad with the root an octave down, for a soft accompaniment. */
const triad = (name: string) => {
  const r = 48 + LETTER[name[0]];
  return [r, r + (name.endsWith("m") ? 3 : 4), r + 7];
};
const chordLabel = (name: string, lang: ArtLang) => {
  const minor = name.endsWith("m");
  if (lang === "en") return name;
  return `${NAMES[lang][LETTER[name[0]]]} ${L(minor ? W.minor : W.major, lang)}`;
};

function MelodyMode({ spec, lang }: SimProps) {
  const p = usePlayer();
  const tune = TUNES[spec.opts.tune ?? ""] ?? TUNES.twinkle;
  const [part, setPart] = useState<"m" | "a" | "b">("b");
  const notes = tune.notes.map(([n, b]) => [parseNote(n) ?? 60, b] as [number, number]);
  const starts: number[] = [];
  notes.reduce((acc, [, b]) => (starts.push(acc), acc + b), 0);
  const total = starts[starts.length - 1] + notes[notes.length - 1][1];
  const spb = 0.5;
  const X0 = 16, XW = 296;
  const x = (beat: number) => X0 + (beat / total) * XW;
  const ms = notes.map(([m]) => m);
  const lo = Math.min(...ms) - 1, hi = Math.max(...ms) + 1;
  const y = (m: number) => 14 + ((hi - m) / (hi - lo)) * 66;
  const chordEvs: Ev[] = tune.chords.map((c, i) => ({ at: i * 2 * spb, dur: 2 * spb - 0.05, notes: triad(c), vol: 0.22 }));
  const melEvs: Ev[] = notes.map(([m, b], i) => ({ at: starts[i] * spb, dur: b * spb - 0.04, notes: [m], vol: 0.34 }));
  const evs = part === "m" ? melEvs : part === "a" ? chordEvs : [...chordEvs, ...melEvs];
  const nC = part === "b" ? chordEvs.length : part === "a" ? chordEvs.length : 0;
  let melIdx: number | null = null, chIdx: number | null = null;
  if (p.active != null) {
    if (part === "a") chIdx = p.active;
    else {
      const k = p.active - (part === "b" ? nC : 0);
      if (k >= 0) { melIdx = k; chIdx = Math.floor(starts[k] / 2); }
      else chIdx = p.active;
    }
  }
  const showM = part !== "a", showA = part !== "m";
  const move = (k: number) => {
    if (k <= 0) return "—";
    const a = ms[k - 1], b = ms[k];
    if (a === b) return L(W.same, lang);
    const dir = L(b > a ? W.up : W.down, lang);
    const leap = Math.abs(diatonic(b) - diatonic(a)) > 1;
    return `${dir}, ${L(leap ? W.leap : W.step, lang)}`;
  };
  return (
    <ArtFrame kind="experiment" title={L(W.melody, lang)} body={spec.body || L(W.melodyHint, lang)}>
      <Stage w={320} h={128} label={L(W.melody, lang)}>
        {[0, 2, 4, 6].map((k) => <line key={k} x1={x(k * 2)} x2={x(k * 2)} y1="6" y2="122" stroke="#e2e8f0" strokeWidth={k % 2 ? 0.8 : 1.6} />)}
        <g opacity={showM ? 1 : 0.25}>
          {notes.slice(1).map(([m], i) => {
            const a = ms[i];
            const leap = Math.abs(diatonic(m) - diatonic(a)) > 1;
            const x1 = x(starts[i]) + 4, x2 = x(starts[i + 1]) + 4;
            return <line key={i} x1={x1} x2={x2} y1={y(a)} y2={y(m)} stroke={a === m ? "#94a3b8" : leap ? "#db2777" : SCALE_C} strokeWidth="2" strokeLinecap="round" />;
          })}
          {notes.map(([m, b], i) => (
            <g key={i}>
              <rect x={x(starts[i]) + 1} y={y(m) - 3} width={Math.max(6, (b / total) * XW - 3)} height="6" rx="3" fill={melIdx === i ? "#f59e0b" : SCALE_C} opacity={melIdx === i ? 1 : 0.35} />
              <circle cx={x(starts[i]) + 4} cy={y(m)} r={melIdx === i ? 4.5 : 3.2} fill={melIdx === i ? "#f59e0b" : SCALE_C} />
              <text x={x(starts[i]) + 4} y={y(m) - 7} textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#475569">{short(m, lang)}</text>
            </g>
          ))}
        </g>
        <g opacity={showA ? 1 : 0.25}>
          {tune.chords.map((c, i) => (
            <g key={i}>
              <rect x={x(i * 2) + 1.5} y="94" width={(2 / total) * XW - 3} height="26" rx="5" fill={chIdx === i ? "#f59e0b" : CHORD_C} opacity={chIdx === i ? 0.95 : 0.18} />
              <text x={x(i * 2 + 1)} y={lang === "en" ? 111 : 106} textAnchor="middle" fontSize={lang === "en" ? 10 : 7} fontWeight="900" fill={chIdx === i ? "#fff" : "#115e59"}>{lang === "en" ? c : NAMES[lang][LETTER[c[0]]]}</text>
              {lang !== "en" ? <text x={x(i * 2 + 1)} y="115" textAnchor="middle" fontSize="5.5" fontWeight="700" fill={chIdx === i ? "#fff" : "#115e59"}>{L(c.endsWith("m") ? W.minor : W.major, lang)}</text> : null}
            </g>
          ))}
        </g>
      </Stage>
      <div className="art-row">
        <PlayButton playing={p.playing} lang={lang} onPlay={() => p.play(evs)} onStop={p.stop} />
        <Choice value={part} options={[["m", L(W.onlyMelody, lang)], ["a", L(W.onlyAcc, lang)], ["b", L(W.both, lang)]]} onChange={(v) => { p.stop(); setPart(v); }} />
      </div>
      <Readouts items={[
        [L(W.note, lang), melIdx != null ? full(ms[melIdx], lang) : "—", "#f59e0b"],
        [L(W.moves, lang), melIdx != null ? move(melIdx) : "—", "#db2777"],
        [L(W.chordName, lang), chIdx != null ? chordLabel(tune.chords[chIdx], lang) : "—", CHORD_C],
      ]} />
    </ArtFrame>
  );
}

/** Chord loops for mode=prog, in C major: Roman numerals, with lower case for minor chords. */
export const PROGS: Record<string, string[]> = {
  pop: ["I", "V", "vi", "IV"],
  fifties: ["I", "vi", "IV", "V"],
  classic: ["I", "IV", "V", "I"],
  canon: ["I", "V", "vi", "iii", "IV", "I", "IV", "V"],
};
const DEGREE: Record<string, string> = { I: "C", ii: "Dm", iii: "Em", IV: "F", V: "G", vi: "Am" };
const FUNC_C: Record<string, string> = { I: "#4f46e5", iii: "#6366f1", vi: "#7c3aed", IV: "#0d9488", ii: "#0d9488", V: "#be123c" };

function ProgMode({ spec, lang }: SimProps) {
  const p = usePlayer();
  const [which, setWhich] = useState(PROGS[spec.opts.prog ?? ""] ? (spec.opts.prog as string) : "pop");
  const [bpm, setBpm] = useState(Number(spec.opts.tempo ?? 96) || 96);
  const prog = PROGS[which];
  const names = prog.map((r) => DEGREE[r]);
  const beat = 60 / bpm;
  const evs: Ev[] = [];
  const loops = prog.length > 4 ? 1 : 2;
  for (let l = 0; l < loops; l++)
    names.forEach((c, i) => {
      const tri = triad(c);
      for (let b = 0; b < 4; b++) evs.push({ at: ((l * names.length + i) * 4 + b) * beat, dur: beat * 0.9, notes: b % 2 ? tri.slice(1) : [tri[0] - 12, ...tri.slice(1)], vol: b === 0 ? 0.32 : 0.22 });
    });
  const cur = p.active != null ? Math.floor(p.active / 4) % names.length : null;
  const keys = layout(6, 22, 48, 71);
  const marks: Record<number, string> = {};
  if (cur != null) triad(names[cur]).forEach((m) => (marks[m] = FUNC_C[prog[cur]]));
  const rows = Math.ceil(prog.length / 4);
  return (
    <ArtFrame kind="experiment" title={L(W.prog, lang)} body={spec.body || L(W.progHint, lang)}>
      <Stage w={320} h={rows * 46 + 92} label={L(W.prog, lang)}>
        {prog.map((r, i) => {
          const cx = 6 + (i % 4) * 77, cy = 4 + Math.floor(i / 4) * 46;
          const on = cur === i;
          return (
            <g key={i}>
              <rect x={cx} y={cy} width="74" height="40" rx="8" fill={FUNC_C[r]} opacity={on ? 1 : 0.14} />
              <text x={cx + 37} y={cy + 19} textAnchor="middle" fontSize="15" fontWeight="900" fill={on ? "#fff" : FUNC_C[r]}>{r}</text>
              <text x={cx + 37} y={cy + 33} textAnchor="middle" fontSize="7.5" fontWeight="800" fill={on ? "#fff" : "#334155"}>{chordLabel(names[i], lang)}</text>
            </g>
          );
        })}
        <g transform={`translate(0 ${rows * 46 + 2})`}><Keyboard keys={keys} y={0} h={86} lang={lang} marks={marks} onKey={(m) => p.tap(m)} /></g>
      </Stage>
      <div className="art-row">
        <PlayButton playing={p.playing} lang={lang} onPlay={() => p.play(evs)} onStop={p.stop} />
        <Choice value={which} options={Object.keys(PROGS).map((k) => [k, PROGS[k].join("–")] as [string, string])} onChange={(v) => { p.stop(); setWhich(v); }} />
      </div>
      <Slider label={L(W.tempo, lang)} value={bpm} min={60} max={150} step={2} lang={lang} display={`${bpm} ${L(W.bpm, lang)}`} onChange={(v) => { p.stop(); setBpm(v); }} />
      <Readouts items={[
        [L(W.chords, lang), names.join(" – "), "#4f46e5"],
        [L(W.now, lang), cur != null ? `${prog[cur]}: ${chordLabel(names[cur], lang)}` : "—", cur != null ? FUNC_C[prog[cur]] : "#64748b"],
      ]} />
    </ArtFrame>
  );
}

function SoundMode({ spec, lang }: SimProps) {
  const p = usePlayer();
  const focus = spec.opts.focus;
  const [pitch, setPitch] = useState(3); // 1 low … 5 high
  const [vol, setVol] = useState(2); // 1 quiet … 3 loud
  const [len, setLen] = useState(1); // seconds
  const m = [48, 57, 64, 72, 81][pitch - 1];
  const amp = [8, 18, 30][vol - 1];
  const dyn = ["p", "mf", "f"][vol - 1];
  const width = 40 + (len / 2) * 260;
  const cycles = [2, 3.5, 5, 7.5, 11][pitch - 1] * (width / 300) * 2;
  const pts = Array.from({ length: 241 }, (_, i) => {
    const x = 10 + (i / 240) * width;
    // fade in and out, like a real note
    const env = Math.min(1, i / 12, (240 - i) / 30);
    return `${x.toFixed(1)},${(46 - Math.sin((i / 240) * cycles * 2 * Math.PI) * amp * env).toFixed(1)}`;
  });
  const play = () => p.play([{ at: 0, dur: len, f: freq(m), vol: [0.07, 0.2, 0.45][vol - 1], held: true }]);
  const pName = pitch >= 4 ? W.high : pitch <= 2 ? W.low : W.mid;
  const show = (k: string) => !focus || focus === k;
  return (
    <ArtFrame kind="experiment" title={L(W.sound, lang)} body={spec.body || L(W.soundHint, lang)}>
      <Stage w={320} h={96} label={L(W.sound, lang)}>
        <line x1="10" x2="310" y1="46" y2="46" stroke="#e2e8f0" />
        <polyline points={pts.join(" ")} fill="none" stroke={p.playing ? "#f59e0b" : "#4f46e5"} strokeWidth="2" />
        <text x="310" y="90" textAnchor="end" fontSize="12" fontWeight="900" fontStyle="italic" fill="#be123c">{dyn}</text>
      </Stage>
      <div className="art-row">
        <PlayButton playing={p.playing} lang={lang} onPlay={play} onStop={p.stop} />
      </div>
      {show("pitch") ? <Slider label={L(W.pitch, lang)} value={pitch} min={1} max={5} lang={lang} display={L(pName, lang)} onChange={setPitch} /> : null}
      {show("volume") ? <Slider label={L(W.volume, lang)} value={vol} min={1} max={3} lang={lang} display={`${dyn}: ${L(vol === 1 ? W.quiet : vol === 3 ? W.loud : W.mid, lang)}`} onChange={setVol} /> : null}
      {show("length") ? <Slider label={L(W.length, lang)} value={len} min={0.2} max={2} step={0.2} lang={lang} display={`${len.toFixed(1).replace(".", lang === "en" ? "." : ",")} ${L(W.sec, lang)}: ${L(len >= 1.2 ? W.long : len <= 0.6 ? W.short : W.mid, lang)}`} onChange={setLen} /> : null}
    </ArtFrame>
  );
}

export default function Piano(props: SimProps) {
  switch (props.spec.opts.mode) {
    case "staff": return <StaffMode {...props} />;
    case "durations": return <DurationsMode {...props} />;
    case "rhythm": return <RhythmMode {...props} />;
    case "meter": return <MeterMode {...props} />;
    case "interval": return <IntervalMode {...props} />;
    case "chord": return <ChordMode {...props} />;
    case "sound": return <SoundMode {...props} />;
    case "melody": return <MelodyMode {...props} />;
    case "prog": return <ProgMode {...props} />;
    default: return <KeysMode {...props} />;
  }
}
