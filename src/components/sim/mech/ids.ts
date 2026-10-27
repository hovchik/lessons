/**
 * Which file holds each step-by-step mechanism. The widget loads only that file, and
 * content:check uses this list to catch misspelt ids.
 */
export const MECH_GROUPS = {
  phys: [
    "engine4", "motor", "fission", "fusion", "reactor", "electrisation", "pn", "transistor", "stars", "expansion",
    "radio", "hydro", "solar", "wind", "laser", "gps", "evaporation", "eclipse", "echo", "powerline", "lc",
    "selfinduction", "conductor", "emwave", "oildrop", "proton", "electroscope", "thermometer", "boiling",
  ],
  chem: [
    "filtration", "distillation", "separate", "ionic", "covalent", "metallic", "electrolysis", "dissolve", "redox", "combustion", "catalyst",
    "polymer", "corrosion", "blastfurnace", "haber", "contact", "soap", "greenhouse", "hardness", "ester", "dna", "acidrain",
  ],
  bio: ["mitosis", "meiosis", "protein", "photosynth", "enzyme", "fertilize", "immune", "reflex", "frog", "butterfly", "germinate", "breathing", "selection", "heartcycle", "drift", "limiting"],
  geog: ["seasons", "watercycle", "plates", "collision", "breeze", "transition"],
  sci: ["moonphases"],
  inf: ["website", "packets", "fetchcycle", "https", "stackqueue"],
  geo: ["midpoint", "bisectAngle", "perpendicular", "copyAngle", "sss", "parallelLine", "angleSum", "threePerp", "cubeSection"],
} as const;

export type MechGroup = keyof typeof MECH_GROUPS;

export function mechGroup(id: string): MechGroup | null {
  for (const g of Object.keys(MECH_GROUPS) as MechGroup[]) if ((MECH_GROUPS[g] as readonly string[]).includes(id)) return g;
  return null;
}

/** Which file holds each labelled diagram. */
export const DIAGRAM_GROUPS = {
  phys: ["sun", "solarsystem", "galaxy", "galaxytypes", "thermos", "eye", "microscope", "telescope", "standardmodel", "interactions", "hr", "smartphone", "tracks"],
  chem: ["lab", "burner", "oilcolumn", "hazards"],
  bio: [
    "plantcell", "animalcell", "bacterium", "virus", "amoeba", "root", "stem", "leaf", "flower", "seed", "mushroom", "insect", "fish",
    "heart", "lungs", "digestive", "neuron", "ear", "kidney", "chloroplast", "mitochondrion", "membrane",
    "fern", "hydra", "snail", "spider", "bird", "bone", "glands", "miller", "homology",
  ],
  geog: ["globegrid", "contour", "earthlayers", "volcano", "river", "atmoslayers", "altzones"],
  sci: ["body", "crossing", "plant", "soil", "forest", "skeleton", "compass"],
  inf: ["computer", "network", "flowchart", "memory", "layers", "url", "tag", "box", "os", "phish", "db", "oop", "dom", "http", "git", "kanban", "arch"],
  soc: ["socialisation", "maslow", "eduarm", "roles", "tki", "govforms", "powers", "ages", "selfgov", "labour", "spheres", "mobility", "fakenews", "chain", "cave", "method", "un", "circular", "lifepath"],
  ch: ["bible", "sixdays", "patriarchs", "tablets"],
} as const;

export type DiagramGroup = keyof typeof DIAGRAM_GROUPS;

export function diagramGroup(id: string): DiagramGroup | null {
  for (const g of Object.keys(DIAGRAM_GROUPS) as DiagramGroup[]) if ((DIAGRAM_GROUPS[g] as readonly string[]).includes(id)) return g;
  return null;
}
