/** Validates src/content/tips: known course, unique slugs, three languages, KaTeX formulas. */
import katex from "katex";
import { courses, courseId } from "../src/content";
import { tips } from "../src/content/tips";
import { TIP_LESSONS } from "../src/content/tips/links";
import { TIP_CATEGORIES } from "../src/server/db/schema";

const LANGS = ["en", "hy", "ru"] as const;

export function checkTips(): { errors: string[]; count: number; courses: number; lessons: number } {
  const errors: string[] = [];
  const known = new Set(courses.map((c) => courseId(c.subject, c.grade)));
  const seen = new Set<string>();
  const perCourse = new Set<string>();
  for (const tp of tips) {
    const cid = courseId(tp.subject, tp.grade);
    const where = `tips ${cid}/${tp.slug}`;
    if (!known.has(cid)) errors.push(`${where}: no such course`);
    if (tp.lesson) {
      const course = courses.find((c) => courseId(c.subject, c.grade) === cid);
      const lesson = course?.units.flatMap((u) => u.lessons).find((l) => l.slug === tp.lesson);
      if (!lesson) errors.push(`${where}: no lesson "${tp.lesson}" in this course`);
      else if (!lesson.content) errors.push(`${where}: lesson "${tp.lesson}" is not written`);
    }
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
    if (/[\t\f\v\b]/.test(tp.body.hy + tp.body.ru + tp.body.en)) errors.push(`${where}: tab or control character in the body (a single backslash, like \\times, in a template literal?)`);
  }
  for (const key of Object.keys(TIP_LESSONS)) {
    if (!tips.some((tp) => `${tp.subject}-${tp.grade}/${tp.slug}` === key)) errors.push(`tips/links.ts: no tip "${key}"`);
  }
  return { errors, count: tips.length, courses: perCourse.size, lessons: new Set(tips.filter((x) => x.lesson).map((x) => `${courseId(x.subject, x.grade)}/${x.lesson}`)).size };
}
