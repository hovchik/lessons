/** Validates src/content/tips: known course, unique slugs, three languages, KaTeX formulas. */
import katex from "katex";
import { courses, courseId } from "../src/content";
import { tips } from "../src/content/tips";
import { TIP_CATEGORIES } from "../src/server/db/schema";

const LANGS = ["en", "hy", "ru"] as const;

export function checkTips(): { errors: string[]; count: number; courses: number } {
  const errors: string[] = [];
  const known = new Set(courses.map((c) => courseId(c.subject, c.grade)));
  const seen = new Set<string>();
  const perCourse = new Set<string>();
  for (const tp of tips) {
    const cid = courseId(tp.subject, tp.grade);
    const where = `tips ${cid}/${tp.slug}`;
    if (!known.has(cid)) errors.push(`${where}: no such course`);
    perCourse.add(cid);
    const id = `${cid}-${tp.slug}`;
    if (seen.has(id)) errors.push(`${where}: duplicate slug`);
    seen.add(id);
    if (!/^[a-z0-9-]+$/.test(tp.slug)) errors.push(`${where}: slug must be lowercase ASCII letters, digits and dashes`);
    if (!(TIP_CATEGORIES as readonly string[]).includes(tp.category)) errors.push(`${where}: unknown category ${tp.category}`);
    for (const lang of LANGS) {
      if (!tp.title[lang]?.trim()) errors.push(`${where}: missing ${lang} title`);
      if (tp.title[lang]?.includes("$")) errors.push(`${where}: ${lang} title contains $ (titles render as plain text)`);
      if (!tp.body[lang]?.trim()) errors.push(`${where}: missing ${lang} body`);
      const re = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;
      for (const m of (tp.body[lang] ?? "").matchAll(re)) {
        const tex = m[1] ?? m[2];
        try {
          katex.renderToString(tex, { throwOnError: true, strict: (code: string) => { throw new Error(code); } });
        } catch (e) {
          errors.push(`${where} [${lang}]: formula "${tex.slice(0, 40)}" fails: ${(e as Error).message.slice(0, 60)}`);
        }
      }
    }
    if (/[ֿ֖一-鿿]/.test(tp.body.hy + tp.body.ru + tp.body.en)) errors.push(`${where}: stray non-Armenian/CJK character`);
  }
  return { errors, count: tips.length, courses: perCourse.size };
}
