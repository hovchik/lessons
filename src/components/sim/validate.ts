/**
 * Checks ~~~sim blocks for content:check: the widget exists, its mode is one the widget knows,
 * and every named mechanism, diagram, molecule, reaction, crystal, geometry preset or solid
 * is in its table. Keep SIM_WIDGETS and MODES in step with ./sim-block.tsx and the widgets.
 */
import { list, parseArtSpec } from "@/lib/art/spec";
import { parseFormula } from "@/lib/sim/elements";
import { DIAGRAM_GROUPS, MECH_GROUPS } from "./mech/ids";
import { REACTIONS } from "./widgets/balance";
import { parseCheck } from "./widgets/check";
import { SALTS } from "./widgets/flame";
import { GEO_PRESETS } from "./widgets/geo";
import { EXCHANGE, SOLUTES } from "./widgets/ions";
import { CRYSTALS } from "./widgets/lattice";
import { MOLECULES } from "./widgets/molecule";
import { SETS as PH_SETS } from "./widgets/ph";
import { NAMES as SOLIDS } from "./widgets/solid";

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
};

export const SIM_WIDGETS = [...Object.keys(MODES), "mechanism", "check", "diagram", "molecule", "balance", "lattice", "flame", "geo", "solid"];

const MECHS = new Set(Object.values(MECH_GROUPS).flat() as string[]);
const DIAGRAMS = new Set(Object.values(DIAGRAM_GROUPS).flat() as string[]);

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
