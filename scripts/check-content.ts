/**
 * Validates the seed content in src/content without touching the database.
 *
 *   npm run content:check
 *
 * Checks: unique lesson slugs per course, every written lesson has a body,
 * objectives and quiz in all three languages, and every quiz answer points
 * at an existing option. Prints a per-course summary of written vs outline lessons.
 */
import katex from "katex";
import { courses, courseId } from "../src/content";

const LANGS = ["en", "hy", "ru"] as const;
const errors: string[] = [];
let total = 0;
let written = 0;
let questions = 0;

for (const c of courses) {
  const id = courseId(c.subject, c.grade);
  const slugs = new Set<string>();
  let cTotal = 0;
  let cWritten = 0;
  for (const u of c.units) {
    for (const l of u.lessons) {
      cTotal++;
      const where = `${id}/${l.slug}`;
      if (slugs.has(l.slug)) errors.push(`${where}: duplicate slug`);
      slugs.add(l.slug);
      for (const lang of LANGS) if (!l.title[lang]?.trim()) errors.push(`${where}: missing ${lang} title`);
      if (!l.content) continue;
      cWritten++;
      for (const lang of LANGS) {
        if (!l.content[lang]?.trim()) errors.push(`${where}: missing ${lang} body`);
        if (!l.objectives?.[lang]?.length) errors.push(`${where}: missing ${lang} objectives`);
      }
      for (const lang of LANGS) {
        const re = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;
        for (const m of (l.content[lang] ?? "").matchAll(re)) {
          const tex = m[1] ?? m[2];
          try {
            katex.renderToString(tex, { throwOnError: true, strict: (code: string) => { throw new Error(code); } });
          } catch (e) {
            errors.push(`${where} [${lang}]: formula "${tex.slice(0, 40)}" fails: ${(e as Error).message.slice(0, 60)}`);
          }
        }
      }
      if (!l.quiz?.length) errors.push(`${where}: no quiz`);
      for (const [i, qq] of (l.quiz ?? []).entries()) {
        questions++;
        if (qq.answer < 0 || qq.answer >= qq.options.length) errors.push(`${where}: quiz ${i + 1} answer out of range`);
        for (const lang of LANGS) {
          if (!qq.prompt[lang]?.trim()) errors.push(`${where}: quiz ${i + 1} missing ${lang} prompt`);
          qq.options.forEach((o, oi) => {
            if (!o[lang]?.trim()) errors.push(`${where}: quiz ${i + 1} option ${oi + 1} missing ${lang}`);
          });
        }
      }
    }
  }
  total += cTotal;
  written += cWritten;
  if (process.argv.includes("--verbose") || cWritten > 0) console.log(`${id.padEnd(14)} ${String(cWritten).padStart(3)}/${cTotal} written`);
}

console.log(`\n${courses.length} courses, ${total} lessons, ${written} fully written, ${questions} quiz questions.`);
if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n` + errors.map((e) => `  • ${e}`).join("\n"));
  process.exit(1);
}
console.log("Content OK.");
