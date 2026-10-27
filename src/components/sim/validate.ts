/**
 * Checks ~~~sim blocks for content:check: the widget exists, its mode is one the widget knows,
 * and every named mechanism, diagram, molecule, reaction, crystal, geometry preset or solid
 * is in its table. Keep SIM_WIDGETS and MODES in step with ./sim-block.tsx and the widgets.
 */
import { list, parseArtSpec } from "@/lib/art/spec";
import { parseFormula } from "@/lib/sim/elements";
import { BAR_SETS } from "./data/bars";
import { CITIES } from "./data/climate";
import { TIMELINES } from "./data/timelines";
import { DIAGRAM_GROUPS, MECH_GROUPS } from "./mech/ids";
import { REACTIONS } from "./widgets/balance";
import { CHART_SETS } from "./widgets/chart";
import { planColumn } from "./widgets/column";
import { parseCheck } from "./widgets/check";
import { SALTS } from "./widgets/flame";
import { GEO_PRESETS } from "./widgets/geo";
import { EXCHANGE, SOLUTES } from "./widgets/ions";
import { CRYSTALS } from "./widgets/lattice";
import { MOLECULES } from "./widgets/molecule";
import { SETS as PH_SETS } from "./widgets/ph";
import { NAMES as SOLIDS } from "./widgets/solid";
import { TENSE_NAMES } from "./widgets/tense";

/** Modes each widget understands; the first one is what it shows without mode=. */
const MODES: Record<string, string[]> = {
  motion: ["accel", "uniform", "fall", "two", "air"],
  circuit: ["ohm", "series", "parallel", "rheostat", "emf", "fuse"],
  forces: ["cart", "friction", "gravity", "incline", "resultant", "third"],
  spring: ["hooke", "oscillate"],
  pendulum: ["free", "resonance"],
  machines: ["lever", "pulley"],
  fluids: ["buoyancy", "atm", "depth", "press", "solid", "vessels"],
  particles: ["states", "brownian", "diffusion", "gas"],
  thermo: ["heating", "cycle", "mix", "pv", "transfer"],
  charges: ["field", "capacitor"],
  magnet: ["bar", "coil", "earth", "force", "particle", "wire"],
  induction: ["coil", "generator", "transformer"],
  optics: ["lens", "eye", "mirror", "prism", "reflection", "refraction", "shadow"],
  wave: ["transverse", "longitudinal", "interference", "slits", "sound", "am"],
  atom: ["build", "bohr", "config", "rutherford", "shells"],
  energy: ["ramp", "work", "power"],
  collide: ["collide", "rocket"],
  decay: ["halflife", "absorb", "chain"],
  orbit: ["orbit", "kepler", "gravity"],
  quantum: ["photo", "clock", "lines", "spectrum"],
  projectile: ["throw", "circle"],
  measure: ["ruler", "density"],
  ptable: ["family", "metal", "en", "block"],
  ph: ["scale", "titration"],
  mole: ["mass", "amount"],
  solution: ["fraction", "dilute", "mix", "molar"],
  ions: ["exchange", "dissolve"],
  activity: ["acid", "water", "salt"],
  rate: ["rate", "equilibrium"],
  count: ["frame", "split", "add", "compare"],
  numline: ["jump", "skip", "round", "fraction", "decimal", "integers"],
  place: ["blocks", "chart", "decimal"],
  fraction: ["parts", "compare", "equiv", "of", "add"],
  array: ["grid", "area", "share", "table"],
  clock: ["read", "elapsed"],
  chart: ["bar", "picto", "pie", "line"],
  percent: ["grid", "of", "whole"],
  shapes: ["flat", "rect", "complex", "box"],
  trip: ["one", "towards", "apart", "chase"],
  plot: ["linear", "system", "quad", "power", "shift", "trig", "exp", "log", "tangent", "area", "complex"],
  tiles: ["square", "minus", "diff", "product"],
  interval: ["ineq", "system", "signs"],
  seq: ["arith", "geom"],
  chance: ["coin", "die", "dice"],
  unit: ["angle", "signs", "solve"],
  letters: ["board", "vowels", "pairs", "order"],
  word: ["morph", "syll"],
  sentence: ["parts", "order"],
  forms: ["cases", "persons", "verbs", "compare"],
  geocalc: ["scale", "meridian", "time", "height"],
};

export const SIM_WIDGETS = [...Object.keys(MODES), "mechanism", "check", "diagram", "molecule", "balance", "lattice", "flame", "geo", "solid", "column", "scale", "tense", "punnett", "pyramid", "bars", "climate", "timeline"];

const MECHS = new Set(Object.values(MECH_GROUPS).flat() as string[]);
const DIAGRAMS = new Set(Object.values(DIAGRAM_GROUPS).flat() as string[]);

/** Column counts of the forms mode=compare tables (see COLS in widgets/forms.tsx). */
const COMPARE_COLS: Record<string, number> = { stages: 4, ew: 2, spelling: 2, ie: 4, root: 2, modern: 2, dialect: 2, loan: 2, norm: 2, sound: 2, hardsoft: 2, gender: 3, number: 2, gender4: 4, check: 2, tenses: 3, aspect: 2, opposite: 2, where: 2, signs: 2, animate: 2, together: 2, precise: 2, polite: 2, old: 2, decl3: 3, iya: 2, animacc: 2, withprep: 2, conj: 2, tsya: 2, dash: 2, reported: 2, stress: 2, figurative: 2, homonym: 2, ao: 2, zs: 2, oe: 2, iy: 2, short: 2, softsign: 2, proverb: 2, prepri: 2, nnn: 2, degrees: 3, moods: 3, transitive: 2, chik: 2, neni: 2, hyphen: 2, native: 2, idiom: 2, numkind: 3, adjclass: 3, itete: 2, ova: 2, skaz: 2, partadj: 2, voice: 2, conjclass: 2, ruhyen: 3, link3: 3, pred3: 3, personal: 2, homattr: 2, vvod: 2, coord3: 3, comma: 2, conjword: 2, attrexpl: 2, advcl3: 3, asyn: 2, mark: 2, cohesion3: 3, official: 2, compress: 2, paronym: 2, colour3: 3, tpp3: 3, device: 2, sciart: 2, move3: 3, ruhy2: 2, quote: 2, sep3: 3, origin: 2, speech3: 3, acad: 2, false3: 3, realia: 2, metre: 2, enhyru: 3, aan: 2, brame: 2, countable: 2, rhyme: 2, plonly: 2, magice: 2, nearfar: 2, apos: 2, its: 2, nounadj: 2, playgodo: 3, named: 2, isgot: 2, freq: 2, feel: 2, muchmany: 2, edsound: 3, article3: 3, nation: 3, when: 2, oblig3: 3, ask3: 3, domake: 2, ordinal: 3, jay: 3, forsince: 2, perfpast: 2, fewlittle: 2, container: 2, capital: 3, towncountry: 2, relwho: 3, dodont: 2, factop: 2, inged: 2, phrasal: 2, heritage: 3, who3: 3, deduce: 3, realunreal: 2, gerinf: 2, lakes: 3, fest3: 3, stative: 2, wordform: 2, extreme: 2, cond23: 2, wishtime: 2, unless: 2, condtypes: 2, eduexam: 3, quality: 2, causeeffect: 2, linkers: 3, usedwould: 2, verbpat: 2, plain: 2, foragainst: 2, prob3: 3, prefix: 2, trip: 2, thegeo: 2, readskill: 2, rightduty: 2, crime3: 3, nominal: 2, star: 4, cvverb: 2, weatherclimate: 2, subj: 2, trend: 2, stagescreen: 2, transform: 2, tfng: 3, inonat: 3, modalpast: 2, colloc: 2, confuse: 2, triplet: 3, family: 3, readspeed: 3, tone: 2, wordparts: 3, headline: 2, essaytype: 2, repessay: 2, stressmove: 3 };

/** Problems with one sim spec (the text inside the fence). */
export function checkSimSpec(source: string): string[] {
  const spec = parseArtSpec(source);
  const where = `sim "${source.split("\n")[0].slice(0, 50)}"`;
  const errors: string[] = [];
  const need = (ids: string[], ok: (id: string) => boolean, what: string) => {
    for (const id of ids) if (!ok(id)) errors.push(`${where}: unknown ${what} "${id}"`);
  };
  const inTable = (t: Record<string, unknown>) => (id: string) => id in t;
  const named = () => list(spec.opts.set, spec.args);
  if (!SIM_WIDGETS.includes(spec.widget)) return [`${where}: unknown widget`];
  const modes = MODES[spec.widget];
  if (modes && spec.opts.mode && !modes.includes(spec.opts.mode)) errors.push(`${where}: unknown mode "${spec.opts.mode}"`);
  switch (spec.widget) {
    case "mechanism":
      need(spec.args.slice(0, 1), (id) => MECHS.has(id), "mechanism");
      if (!spec.args.length) errors.push(`${where}: no mechanism`);
      break;
    case "diagram":
      need(spec.args.slice(0, 1), (id) => DIAGRAMS.has(id), "diagram");
      if (!spec.args.length) errors.push(`${where}: no diagram`);
      break;
    case "molecule": need(named(), inTable(MOLECULES), "molecule"); break;
    case "balance": need(named(), inTable(REACTIONS), "reaction"); break;
    case "lattice": need(named(), inTable(CRYSTALS), "crystal"); break;
    case "flame": need(spec.args.slice(0, 1), inTable(SALTS), "flame salt"); break;
    case "solid": need(named(), inTable(SOLIDS), "solid"); break;
    case "geo":
      if (!spec.args.length) errors.push(`${where}: no preset`);
      need(spec.args.slice(0, 1), inTable(GEO_PRESETS), "geometry preset");
      break;
    case "ions":
      need(named(), inTable(spec.opts.mode === "dissolve" ? SOLUTES : EXCHANGE), "ion reaction");
      break;
    case "ph": if (spec.opts.set) need([spec.opts.set], inTable(PH_SETS), "pH set"); break;
    case "mole": need(named(), (f) => !!parseFormula(f), "formula"); break;
    case "column":
      if (!planColumn(spec.args[0] ?? "", "en")) errors.push(`${where}: cannot lay out "${spec.args[0] ?? ""}"`);
      break;
    case "chart": if (spec.opts.set && !CHART_SETS.includes(spec.opts.set)) errors.push(`${where}: unknown chart set "${spec.opts.set}"`); break;
    case "scale": {
      const k = Number(spec.opts.k ?? 2), a = Number(spec.opts.a ?? 1), b = Number(spec.opts.b ?? 7);
      if (!Number.isInteger((b - a) / k) || b < a) errors.push(`${where}: x is not a whole number`);
      break;
    }
    case "tense": if (spec.opts.name && !TENSE_NAMES.includes(spec.opts.name)) errors.push(`${where}: unknown tense "${spec.opts.name}"`); break;
    case "punnett":
      if (spec.opts.mode === "x") {
        if (!/^[A-Za-z]{2}$/.test(spec.args[0] ?? "") || !/^[A-Za-z]$/.test(spec.args[1] ?? "")) errors.push(`${where}: X mode needs a mother like Hh and a father like H`);
      } else if (spec.args.length !== 2 || spec.args.some((g) => !/^([A-Za-z]{2}){1,2}$/.test(g) || g.length !== spec.args[0].length)) errors.push(`${where}: needs two genotypes of the same length, like Aa Aa or AaBb AaBb`);
      if (spec.opts.mode && spec.opts.mode !== "x") errors.push(`${where}: unknown mode "${spec.opts.mode}"`);
      break;
    case "bars": if (!BAR_SETS[spec.opts.set ?? ""]) errors.push(`${where}: unknown set "${spec.opts.set}"`); break;
    case "timeline": if (!TIMELINES[spec.opts.set ?? ""]) errors.push(`${where}: unknown timeline "${spec.opts.set}"`); break;
    case "climate": for (const c of list(spec.opts.city ?? "yerevan")) if (!CITIES[c]) errors.push(`${where}: unknown city "${c}"`); break;
    case "pyramid": if (spec.args.length < 2 || spec.args.length > 5) errors.push(`${where}: needs 2 to 5 levels`); break;
    case "letters":
      if (spec.opts.mode === "order" && list(spec.opts.words).length < 2) errors.push(`${where}: needs words=`);
      if (spec.opts.abc && !["hy", "ru", "en"].includes(spec.opts.abc)) errors.push(`${where}: unknown alphabet "${spec.opts.abc}"`);
      break;
    case "word": case "sentence": case "forms":
      if (spec.args.length < (spec.widget === "sentence" ? 2 : 1)) errors.push(`${where}: nothing to show`);
      if (spec.widget === "word" && spec.opts.mode !== "syll" && !spec.args.some((a) => a.endsWith(":r") || !a.includes(":"))) errors.push(`${where}: no root (:r)`);
      if (spec.widget === "forms" && spec.opts.mode === "compare") {
        const n = COMPARE_COLS[spec.opts.cols ?? "modern"];
        if (!n) errors.push(`${where}: unknown cols "${spec.opts.cols}"`);
        else if (spec.args.some((a) => a.split(":").length !== n)) errors.push(`${where}: every row needs ${n} cells`);
      } else if (spec.widget === "forms" && spec.opts.mode !== "verbs" && spec.args.length < (spec.opts.mode === "persons" ? 6 : spec.opts.lang === "hy" ? 7 : 6)) errors.push(`${where}: too few forms`);
      break;
    case "check": {
      const { question, options } = parseCheck(spec.body);
      const answer = Number(spec.opts.answer);
      if (!question) errors.push(`${where}: no question`);
      if (options.length < 2) errors.push(`${where}: needs at least 2 options`);
      if (!Number.isInteger(answer) || answer < 1 || answer > options.length) errors.push(`${where}: answer out of range`);
      break;
    }
  }
  return errors;
}

/** Returns problems with the ~~~sim blocks in a Markdown body. */
export function checkSimBlocks(markdown: string): string[] {
  const re = /^(```|~~~)sim\n([\s\S]*?)^\1\s*$/gm;
  return [...markdown.matchAll(re)].flatMap((m) => checkSimSpec(m[2]));
}
