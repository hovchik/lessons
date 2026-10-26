import { PALETTES } from "./palettes";
import { PICS } from "./pictures";
import { MOODS, SCENES } from "./scenes";
import { list, parseArtSpec } from "./spec";
import { STEPS } from "./steps";

/** Widget names the lesson renderer knows (see src/components/art/art-block.tsx). */
export const WIDGET_NAMES = [
  "pic", "steps", "mixer", "wheel", "tints", "mood", "palette", "sketch", "lines", "light", "perspective", "aerial",
  "pattern", "compose", "tone", "shots", "flipbook", "letters", "proportions", "net", "tasks", "hints",
];

/** Returns problems with the ```art / ~~~art blocks in a Markdown body. */
export function checkArtBlocks(markdown: string): string[] {
  const errors: string[] = [];
  const re = /^(```|~~~)art\n([\s\S]*?)^\1\s*$/gm;
  for (const m of markdown.matchAll(re)) {
    const spec = parseArtSpec(m[2]);
    const where = `art "${m[2].split("\n")[0].slice(0, 50)}"`;
    if (!WIDGET_NAMES.includes(spec.widget)) { errors.push(`${where}: unknown widget`); continue; }
    const need = (ids: string[], lib: Record<string, unknown>, what: string) => {
      for (const id of ids) if (!lib[id]) errors.push(`${where}: unknown ${what} "${id}"`);
    };
    if (spec.widget === "pic") { if (!spec.args.length) errors.push(`${where}: no pictures`); need(spec.args, PICS, "picture"); }
    if (spec.widget === "steps") need(spec.args.slice(0, 1), STEPS, "guide");
    if (spec.widget === "palette") need(spec.args, PALETTES, "palette");
    if (spec.widget === "mood") { need([spec.opts.scene ?? "landscape"], SCENES, "scene"); need(list(spec.opts.moods), MOODS, "mood"); }
    if ((spec.widget === "tasks" || spec.widget === "hints") && !spec.body.trim()) errors.push(`${where}: empty body`);
  }
  return errors;
}
