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
} as const;

export type DiagramGroup = keyof typeof DIAGRAM_GROUPS;

export function diagramGroup(id: string): DiagramGroup | null {
  for (const g of Object.keys(DIAGRAM_GROUPS) as DiagramGroup[]) if ((DIAGRAM_GROUPS[g] as readonly string[]).includes(id)) return g;
  return null;
}
