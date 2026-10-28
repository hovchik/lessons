/**
 * Validates the seed content in src/content without touching the database.
 *
 *   npm run content:check
 *
 * Checks: unique, URL-safe lesson slugs per course, every written lesson has a body,
 * objectives and quiz in all three languages, every quiz answer points
 * at an existing option, art and sim blocks name things their widgets know, and the skill map has no unknown ids, later-grade prerequisites or cycles. Prints a per-course summary of written vs outline lessons.
 */
import katex from "katex";
import { courses, courseId } from "../src/content";
import { exams } from "../src/content/exams";
import { subjects } from "../src/content/subjects";
import { checkTips } from "./check-tips";
import { checkArtBlocks } from "../src/lib/art/validate";
import { checkSimBlocks } from "../src/components/sim/validate";
import { VISUALS } from "../src/content/visuals";
import { QUESTIONS } from "../src/content/questions";
import { questionProblems } from "../src/content/questions/validate";
import { WORKED } from "../src/content/worked";
import { workedProblems } from "../src/content/worked/validate";
import { buildSkillMap, checkSkillMap, prerequisites } from "../src/content/skills";
import { EXAM_SCOPE } from "../src/content/exam-scope";

const LANGS = ["en", "hy", "ru"] as const;
const errors: string[] = [];
let total = 0;
let written = 0;
let questions = 0;
const kinds: Record<string, number> = {};

for (const c of courses) {
  const id = courseId(c.subject, c.grade);
  const slugs = new Set<string>();
  let cTotal = 0;
  let cWritten = 0;
  const langs = c.languages ?? LANGS;
  for (const lang of LANGS) {
    if (!c.title[lang]?.trim() || !c.description[lang]?.trim()) errors.push(`${id}: missing ${lang} course title or description`);
  }
  for (const u of c.units) {
    for (const lang of LANGS) if (!u.title[lang]?.trim()) errors.push(`${id}: unit "${u.title.en}" missing ${lang} title`);
    for (const l of u.lessons) {
      cTotal++;
      const where = `${id}/${l.slug}`;
      if (slugs.has(l.slug)) errors.push(`${where}: duplicate slug`);
      slugs.add(l.slug);
      if (!/^[a-z0-9-]+$/.test(l.slug)) errors.push(`${where}: slug must be lowercase ASCII letters, digits and dashes`);
      for (const lang of LANGS) if (!l.title[lang]?.trim()) errors.push(`${where}: missing ${lang} title`);
      if (!l.content) continue;
      cWritten++;
      for (const lang of langs) {
        if (!l.content[lang]?.trim()) errors.push(`${where}: missing ${lang} body`);
        if (!l.objectives?.[lang]?.length) errors.push(`${where}: missing ${lang} objectives`);
      }
      if (/[\u0596\u05bf\u4e00-\u9fff]/.test(Object.values(l.content).join(""))) errors.push(`${where}: stray non-Armenian/CJK character`);
      for (const lang of langs) {
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
      for (const lang of LANGS) for (const e of checkArtBlocks(l.content[lang] ?? "")) errors.push(`${where} [${lang}]: ${e}`);
      for (const lang of langs) for (const e of checkSimBlocks(l.content[lang] ?? "")) errors.push(`${where} [${lang}]: ${e}`);
      if (!l.quiz?.length) errors.push(`${where}: no quiz`);
      for (const [i, qq] of (l.quiz ?? []).entries()) {
        questions++;
        kinds[qq.kind ?? "choice"] = (kinds[qq.kind ?? "choice"] ?? 0) + 1;
        // Questions added on top of a lesson (src/content/questions) are always written in all three languages.
        for (const p of questionProblems(qq, qq.kind ? LANGS : langs)) errors.push(`${where}: quiz ${i + 1} ${p}`);
      }
    }
  }
  total += cTotal;
  written += cWritten;
  const only = c.languages ? ` (${c.languages.join(", ")} only)` : "";
  if (process.argv.includes("--verbose") || cWritten > 0) console.log(`${id.padEnd(22)} ${String(cWritten).padStart(3)}/${cTotal} written${only}`);
}

// Visual blocks: every lesson in a visuals map must exist, and science lessons should all have one.
let visualLessons = 0;
for (const [subject, byGrade] of Object.entries(VISUALS)) {
  for (const [grade, bySlug] of Object.entries(byGrade)) {
    const c = courses.find((x) => x.subject === subject && x.grade === Number(grade));
    if (!c) { errors.push(`visuals ${subject}-${grade}: no such course`); continue; }
    const lessons = c.units.flatMap((u) => u.lessons);
    for (const slug of Object.keys(bySlug)) if (!lessons.some((l) => l.slug === slug)) errors.push(`visuals ${subject}-${grade}: no lesson "${slug}"`);
    const bare = lessons.filter((l) => l.content && !bySlug[l.slug]?.length).map((l) => l.slug);
    if (bare.length) console.log(`${subject}-${grade}: no visuals in ${bare.join(", ")}`);
    visualLessons += Object.keys(bySlug).length;
  }
}

// Extra questions: every lesson in a questions map must exist and be written.
for (const [subject, byGrade] of Object.entries(QUESTIONS)) {
  for (const [grade, bySlug] of Object.entries(byGrade)) {
    const c = courses.find((x) => x.subject === subject && x.grade === Number(grade));
    if (!c) { errors.push(`questions ${subject}-${grade}: no such course`); continue; }
    const lessons = c.units.flatMap((u) => u.lessons);
    for (const slug of Object.keys(bySlug)) if (!lessons.some((l) => l.slug === slug && l.content)) errors.push(`questions ${subject}-${grade}: no written lesson "${slug}"`);
  }
}

// Worked examples: every lesson must exist and be written, and every set must read the same in all three languages.
let workedSets = 0;
for (const [subject, byGrade] of Object.entries(WORKED)) {
  for (const [grade, bySlug] of Object.entries(byGrade)) {
    const c = courses.find((x) => x.subject === subject && x.grade === Number(grade));
    if (!c) { errors.push(`worked ${subject}-${grade}: no such course`); continue; }
    const lessons = c.units.flatMap((u) => u.lessons);
    for (const [slug, sets] of Object.entries(bySlug)) {
      if (!lessons.some((l) => l.slug === slug && l.content)) errors.push(`worked ${subject}-${grade}: no written lesson "${slug}"`);
      sets.forEach((set, i) => {
        workedSets++;
        for (const p of workedProblems(set)) errors.push(`worked ${subject}-${grade}/${slug} set ${i + 1}: ${p}`);
      });
    }
  }
}

// Exams: unique ids, every text in three languages, answers in range, one trial per written course.
const examIds = new Set<string>();
let examQuestions = 0;
const subjectIds = new Set(subjects.map((s) => s.id));
for (const e of exams) {
  const where = `exam ${e.id}`;
  if (examIds.has(e.id)) errors.push(`${where}: duplicate id`);
  examIds.add(e.id);
  if (!/^[a-z0-9-]+$/.test(e.id)) errors.push(`${where}: id must be lowercase ASCII letters, digits and dashes`);
  if (e.subject && !subjectIds.has(e.subject)) errors.push(`${where}: unknown subject ${e.subject}`);
  if (e.kind === "trial" && !courses.some((c) => c.subject === e.subject && c.grade === e.grade)) errors.push(`${where}: no course ${e.subject}-${e.grade}`);
  for (const lang of LANGS) {
    for (const [field, text] of [["title", e.title], ["description", e.description], ["format", e.format]] as const) {
      if (!text[lang]?.trim()) errors.push(`${where}: missing ${lang} ${field}`);
    }
    const re = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;
    for (const m of (e.format[lang] ?? "").matchAll(re)) {
      const tex = m[1] ?? m[2];
      try {
        katex.renderToString(tex, { throwOnError: true, strict: (code: string) => { throw new Error(code); } });
      } catch (err) {
        errors.push(`${where} [${lang}]: formula "${tex.slice(0, 40)}" fails: ${(err as Error).message.slice(0, 60)}`);
      }
    }
  }
  if (e.questions.length < 5) errors.push(`${where}: only ${e.questions.length} questions`);
  if (e.passPercent < 1 || e.passPercent > 99) errors.push(`${where}: passPercent out of range`);
  for (const [i, qq] of e.questions.entries()) {
    examQuestions++;
    if (qq.answer < 0 || qq.answer >= qq.options.length) errors.push(`${where}: question ${i + 1} answer out of range`);
    if (qq.options.length < 2) errors.push(`${where}: question ${i + 1} needs at least 2 options`);
    if (qq.points !== undefined && (!Number.isInteger(qq.points) || qq.points < 1)) errors.push(`${where}: question ${i + 1} points must be a positive integer`);
    for (const lang of LANGS) {
      if (!qq.prompt[lang]?.trim()) errors.push(`${where}: question ${i + 1} missing ${lang} prompt`);
      if (qq.explanation && !qq.explanation[lang]?.trim()) errors.push(`${where}: question ${i + 1} missing ${lang} explanation`);
      qq.options.forEach((o, oi) => {
        if (!o[lang]?.trim()) errors.push(`${where}: question ${i + 1} option ${oi + 1} missing ${lang}`);
      });
    }
    const seen = new Set<string>();
    for (const o of qq.options) {
      if (seen.has(o.en)) errors.push(`${where}: question ${i + 1} has duplicate option "${o.en}"`);
      seen.add(o.en);
    }
  }
}
// Exam scope: every state exam has its courses, and every course exists.
for (const e of exams.filter((x) => x.kind === "state")) if (!EXAM_SCOPE[e.id]?.length) errors.push(`exam ${e.id}: no courses in src/content/exam-scope.ts`);
for (const [id, ids] of Object.entries(EXAM_SCOPE)) {
  if (!examIds.has(id)) errors.push(`exam scope ${id}: no such exam`);
  for (const c of ids) if (!courses.some((x) => courseId(x.subject, x.grade) === c)) errors.push(`exam scope ${id}: no course ${c}`);
}
const trialsFor = new Set(exams.filter((e) => e.kind === "trial").map((e) => `${e.subject}-${e.grade}`));
const missingTrials = courses.map((c) => courseId(c.subject, c.grade)).filter((id) => !trialsFor.has(id));
console.log(`\n${exams.length} exams (${exams.filter((e) => e.kind === "state").length} state, ${trialsFor.size} trials), ${examQuestions} exam questions.`);
if (missingTrials.length) console.log(`Courses without a year-end trial: ${missingTrials.join(", ")}`);

const tipCheck = checkTips();
errors.push(...tipCheck.errors);

const skillMap = buildSkillMap(courses);
errors.push(...checkSkillMap(skillMap));
console.log(`${skillMap.length} skills, ${skillMap.reduce((a, s) => a + s.prereqs.length, 0)} prerequisite links (${Object.keys(prerequisites).length} skills mapped by hand).`);
const kindList = Object.entries(kinds).map(([k, n]) => `${n} ${k}`).join(", ");
console.log(`\n${courses.length} courses, ${total} lessons, ${written} fully written, ${questions} quiz questions (${kindList}), ${tipCheck.count} tips in ${tipCheck.courses} courses, visuals in ${visualLessons} lessons, ${workedSets} worked example sets.`);
if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n` + errors.map((e) => `  • ${e}`).join("\n"));
  process.exit(1);
}
console.log("Content OK.");
