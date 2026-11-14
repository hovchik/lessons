/**
 * Writes the missing quiz explanations with Claude, into src/content/explanations/<subject>.json.
 *
 *   npm run explain -- --dry-run                     # what is missing, and a rough cost
 *   npm run explain -- --subject physics --grade 7   # one course
 *   npm run explain -- --limit 5 --now               # five lessons, answered straight away (full price)
 *   npm run explain                                  # everything, through the Batches API (half price)
 *
 * The batch way submits one request per lesson, remembers the batch in
 * .explain-batch.json, waits for it (most finish within an hour) and writes the
 * results. Stopping and running it again picks the same batch up. Questions that
 * already have an explanation, written or generated, are never sent again.
 *
 * After it runs: read the new JSON over, `npm run content:check`, `npm run db:seed`.
 * Requires ANTHROPIC_API_KEY (not for --dry-run).
 */
import fs from "node:fs";
import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";
import { courses } from "../src/content";
import { EXPLANATIONS, explanationKey, questionPrint, type ExplanationMap } from "../src/content/explanations";
import type { CourseSeed, I18nText, QuizQuestion } from "../src/content/types";
import { lessonForPrompt } from "../src/lib/tutor";

const MODEL = process.env.EXPLAIN_MODEL || process.env.CLAUDE_MODEL || "claude-opus-5-5";
const DIR = path.join(process.cwd(), "src/content/explanations");
const STATE = path.join(process.cwd(), ".explain-batch.json");

const args = process.argv.slice(2);
const opt = (name: string) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const flag = (name: string) => args.includes(`--${name}`);

type Job = { id: string; subject: string; grade: number; slug: string; title: string; lesson: string; questions: { index: number; q: QuizQuestion }[] };

/** Lessons with questions that have no explanation yet. */
function jobs(all: CourseSeed[]): Job[] {
  const subject = opt("subject");
  const grade = opt("grade") ? Number(opt("grade")) : null;
  const out: Job[] = [];
  for (const c of all) {
    if (subject && c.subject !== subject) continue;
    if (grade && c.grade !== grade) continue;
    for (const u of c.units)
      for (const l of u.lessons) {
        const body = l.content?.en?.trim() ? l.content.en : (l.content?.hy ?? "");
        const questions = (l.quiz ?? []).flatMap((q, index) => (q.explanation ? [] : [{ index, q }]));
        if (!body.trim() || !questions.length) continue;
        out.push({ id: `${c.subject}~${c.grade}~${l.slug}`, subject: c.subject, grade: c.grade, slug: l.slug, title: l.title.en || l.title.hy, lesson: lessonForPrompt(body, 9000), questions });
      }
  }
  const limit = opt("limit") ? Number(opt("limit")) : Infinity;
  return out.slice(0, limit);
}

const SYSTEM = `You write short explanations for school quiz questions in a trilingual learning app (English, Armenian, Russian) for pupils in grades 1–12 in Armenia and Russia.

For each question you get the lesson text it comes from, the question in three languages and its right answer. Write the explanation the pupil sees after answering: why the right answer is right, in 1–2 short sentences (at most 40 words), using the lesson's own idea, rule or fact. Where a typical wrong option is tempting, you may say in a few words why it is wrong. For a calculation, show the one line that gets the answer.

Write each explanation three times: English, Armenian (Eastern Armenian, reformed spelling, Armenian punctuation ։ and ՞) and Russian, each natural for a pupil of that grade, not a word-for-word translation, using the terms that textbooks in Armenia and Russia use. Plain text, no Markdown except KaTeX math $...$ where the lesson uses it. Do not start with "Correct" or "The answer is"; do not use emoji.`;

const SCHEMA = {
  type: "object",
  properties: {
    items: {
      type: "array",
      items: {
        type: "object",
        properties: { index: { type: "integer" }, en: { type: "string" }, hy: { type: "string" }, ru: { type: "string" } },
        required: ["index", "en", "hy", "ru"],
        additionalProperties: false,
      },
    },
  },
  required: ["items"],
  additionalProperties: false,
} as const;

const tri = (t: I18nText | undefined) => (t ? `EN: ${t.en} | HY: ${t.hy} | RU: ${t.ru}` : "");

function describe(q: QuizQuestion): string {
  const lines = [`Question: ${tri(q.prompt)}`];
  switch (q.kind) {
    case "number":
      lines.push(`Type the number. Right answer: ${q.answer}${q.unit ? ` ${q.unit.en}` : ""}`);
      break;
    case "gap":
      lines.push(`Text with gaps (___): ${tri(q.text)}`, `Right answers per gap: ${q.gaps.map(tri).join(" ; ")}`);
      break;
    case "order":
      lines.push(`Put in order. Right order: ${q.items.map((i) => i.en || i.hy).join(" → ")}`);
      break;
    case "match":
      lines.push(`Match. Right pairs: ${q.pairs.map(([a, b]) => `${a.en || a.hy} = ${b.en || b.hy}`).join("; ")}`);
      break;
    default:
      q.options.forEach((o, i) => lines.push(`${i === q.answer ? "RIGHT" : "wrong"} option: ${tri(o)}`));
  }
  return lines.join("\n");
}

function request(job: Job) {
  const user = [
    `Grade ${job.grade}, ${job.subject}. Lesson: ${job.title}`,
    "<lesson>",
    job.lesson,
    "</lesson>",
    "",
    ...job.questions.map(({ index, q }) => `[${index}]\n${describe(q)}\n`),
    `Write one explanation for each question above, with its number as index (${job.questions.map((x) => x.index).join(", ")}).`,
  ].join("\n");
  return {
    model: MODEL,
    max_tokens: 16000,
    system: [{ type: "text" as const, text: SYSTEM, cache_control: { type: "ephemeral" as const } }],
    output_config: { effort: (opt("effort") ?? "medium") as "low" | "medium" | "high", format: { type: "json_schema" as const, schema: SCHEMA } },
    messages: [{ role: "user" as const, content: user }],
  };
}

const ARMENIAN = /[Ա-և]/;
const CYRILLIC = /[Ѐ-ӿ]/;

/** Checks Claude's answer for one lesson; returns the entries to keep. */
function accept(job: Job, raw: string): ExplanationMap {
  const out: ExplanationMap = {};
  let items: { index: number; en: string; hy: string; ru: string }[] = [];
  try {
    items = (JSON.parse(raw) as { items: typeof items }).items ?? [];
  } catch {
    console.warn(`  ${job.id}: not JSON, skipped`);
    return out;
  }
  for (const it of items) {
    const want = job.questions.find((x) => x.index === it.index);
    const [en, hy, ru] = [it.en, it.hy, it.ru].map((s) => (s ?? "").trim());
    const ok = want && en && hy && ru && ARMENIAN.test(hy) && CYRILLIC.test(ru) && Math.max(en.length, hy.length, ru.length) <= 500;
    if (!ok) {
      console.warn(`  ${job.id}#${it.index}: rejected`);
      continue;
    }
    out[explanationKey(job.grade, job.slug, it.index)] = { q: questionPrint(want.q), en, hy, ru };
  }
  return out;
}

/** Merges new entries into the subject files and rewrites the import list. */
function save(bySubject: Map<string, ExplanationMap>) {
  for (const [subject, add] of bySubject) {
    if (!Object.keys(add).length) continue;
    const file = path.join(DIR, `${subject}.json`);
    const old: ExplanationMap = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : {};
    const merged = { ...old, ...add };
    const sorted = Object.fromEntries(Object.keys(merged).sort((a, b) => a.localeCompare(b, "en", { numeric: true })).map((k) => [k, merged[k]]));
    fs.writeFileSync(file, `${JSON.stringify(sorted, null, 1)}\n`);
    console.log(`  ${subject}: +${Object.keys(add).length} (${Object.keys(sorted).length} in ${path.relative(process.cwd(), file)})`);
  }
  const names = fs.readdirSync(DIR).filter((f) => f.endsWith(".json")).map((f) => f.slice(0, -5)).sort();
  const ident = (s: string) => s.replace(/-(\w)/g, (_, c: string) => c.toUpperCase());
  fs.writeFileSync(
    path.join(DIR, "files.ts"),
    [
      "// Written by scripts/explain.ts: one import per subject file. Do not edit by hand.",
      'import type { ExplanationMap } from "./index";',
      ...names.map((n) => `import ${ident(n)} from "./${n}.json";`),
      "",
      "export const FILES: Record<string, ExplanationMap> = {",
      ...names.map((n) => `  ${JSON.stringify(n)}: ${ident(n)},`),
      "};",
      "",
    ].join("\n"),
  );
}

function collect(results: { job: Job; text: string | null }[]) {
  const bySubject = new Map<string, ExplanationMap>();
  for (const { job, text } of results) {
    if (!text) continue;
    bySubject.set(job.subject, { ...bySubject.get(job.subject), ...accept(job, text) });
  }
  save(bySubject);
}

async function main() {
  const list = jobs(courses);
  const questions = list.reduce((a, j) => a + j.questions.length, 0);
  const inTok = list.reduce((a, j) => a + (j.lesson.length + j.questions.length * 500) / 3.5, 0) + list.length * 400;
  const outTok = questions * 260 + list.length * 1500; // explanations in three languages, plus thinking
  const dollars = (inTok * 4 + outTok * 20) / 1e6;
  console.log(`${questions} questions without an explanation in ${list.length} lessons (${Object.values(EXPLANATIONS).reduce((a, m) => a + Object.keys(m).length, 0)} written by this script so far).`);
  console.log(`Rough cost with ${MODEL}: ~$${dollars.toFixed(0)} now, ~$${(dollars / 2).toFixed(0)} through the Batches API.`);
  if (flag("dry-run") || !list.length) return;
  if (!process.env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY is not set");
  const client = new Anthropic();

  if (flag("now")) {
    const results: { job: Job; text: string | null }[] = [];
    let next = 0;
    const worker = async () => {
      while (next < list.length) {
        const job = list[next++];
        try {
          const m = await client.messages.stream(request(job)).finalMessage();
          const ok = m.stop_reason !== "refusal" && m.stop_reason !== "max_tokens";
          results.push({ job, text: ok ? (m.content.find((b) => b.type === "text")?.text ?? null) : null });
          console.log(`  ${job.id}: ${ok ? "done" : m.stop_reason}`);
        } catch (e) {
          console.warn(`  ${job.id}: ${e instanceof Error ? e.message : e}`);
        }
      }
    };
    await Promise.all(Array.from({ length: 4 }, worker));
    collect(results);
    return;
  }

  // The batch way: one request per lesson, resumable.
  const byId = new Map(list.map((j) => [j.id, j]));
  let state: { batchId: string; ids: string[] } | null = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, "utf8")) : null;
  if (!state) {
    const ids = list.map((j) => j.id);
    const requests = list.map((j) => ({ custom_id: `r${ids.indexOf(j.id)}`, params: request(j) }));
    const batch = await client.messages.batches.create({ requests });
    state = { batchId: batch.id, ids };
    fs.writeFileSync(STATE, JSON.stringify(state));
    console.log(`Submitted batch ${batch.id} with ${requests.length} lessons. Waiting; you can stop this and run it again later.`);
  } else {
    console.log(`Picking up batch ${state.batchId}.`);
  }
  for (;;) {
    const b = await client.messages.batches.retrieve(state.batchId);
    if (b.processing_status === "ended") break;
    console.log(`  ${b.request_counts.succeeded} done, ${b.request_counts.processing} in progress…`);
    await new Promise((r) => setTimeout(r, 60_000));
  }
  const results: { job: Job; text: string | null }[] = [];
  for await (const r of await client.messages.batches.results(state.batchId)) {
    const job = byId.get(state.ids[Number(r.custom_id.slice(1))]);
    if (!job) continue; // answered since, or the content changed
    if (r.result.type !== "succeeded") {
      console.warn(`  ${job.id}: ${r.result.type}`);
      continue;
    }
    const m = r.result.message;
    results.push({ job, text: m.stop_reason === "refusal" ? null : (m.content.find((b) => b.type === "text")?.text ?? null) });
  }
  collect(results);
  fs.rmSync(STATE);
  console.log("Done. Read the new explanations over, then npm run content:check && npm run db:seed.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
