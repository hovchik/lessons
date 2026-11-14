import Anthropic from "@anthropic-ai/sdk";
import { eq, sql } from "drizzle-orm";
import { parseItemId } from "@/lib/memory";
import { displayForm, localKey, localShown, type QuizResponse } from "@/lib/questions";
import { answerText, leaks, lessonForPrompt, rightText, secrets, TUTOR_SYSTEM, tutorPrompt, type TutorLevel, type TutorMode } from "@/lib/tutor";
import { pick } from "@/lib/utils";
import { getDb, schema } from "./db/client";
import type { I18nText, QuizQuestion } from "./db/schema";
import { LIMITS, take } from "./rate-limit";

/**
 * The hint tutor: Claude writes a hint for the second try of a quiz question,
 * or explains a mistake once the answer is shown. Only for signed-in pupils,
 * and only when ANTHROPIC_API_KEY is set; without it the app shows the lesson
 * passage (look-back) alone. Hints are kept in SQLite, so the same wrong
 * answer to the same question costs one call, ever.
 */

export const TUTOR_MODEL = process.env.TUTOR_MODEL || process.env.CLAUDE_MODEL || "claude-opus-5-5";

/** On unless there is no key, or TUTOR=off. */
export const tutorEnabled = () => !!process.env.ANTHROPIC_API_KEY && process.env.TUTOR !== "off";

const SCHEMA = {
  type: "object",
  properties: { text: { type: "string" } },
  required: ["text"],
  additionalProperties: false,
} as const;

type Loaded = {
  question: QuizQuestion;
  explanation: I18nText | null;
  lesson: { title: I18nText; content: I18nText } | null;
  subject: I18nText | null;
  grade: number | null;
  examTitle: I18nText | null;
};

/** The question behind an item id, with the lesson that teaches it. */
async function load(itemId: string): Promise<Loaded | null> {
  const id = parseItemId(itemId);
  if (!id) return null;
  const db = await getDb();
  const lessonById = (lessonId: string) =>
    db
      .select({ title: schema.lessons.title, content: schema.lessons.content, quiz: schema.lessons.quiz, grade: schema.courses.grade, subject: schema.subjects.name })
      .from(schema.lessons)
      .innerJoin(schema.courses, eq(schema.courses.id, schema.lessons.courseId))
      .innerJoin(schema.subjects, eq(schema.subjects.id, schema.courses.subjectId))
      .where(eq(schema.lessons.id, lessonId))
      .get();

  if (id.source === "quiz") {
    const l = await lessonById(id.refId);
    const q = l?.quiz[id.index];
    if (!l || !q) return null;
    return { question: q, explanation: q.explanation ?? null, lesson: { title: l.title, content: l.content }, subject: l.subject, grade: l.grade, examTitle: null };
  }
  if (id.source === "exam") {
    const e = await db.select({ title: schema.exams.title, questions: schema.exams.questions, grade: schema.exams.grade, subject: schema.subjects.name }).from(schema.exams).leftJoin(schema.subjects, eq(schema.subjects.id, schema.exams.subjectId)).where(eq(schema.exams.id, id.refId)).get();
    const q = e?.questions[id.index];
    if (!e || !q) return null;
    const l = q.ref ? await lessonById(q.ref.lessonId) : null;
    // Exams are shown with their options mixed by the same seed as quizzes, so displayForm gives the same order.
    const question = { prompt: q.prompt, options: q.options, answer: q.answer, ...(q.explanation ? { explanation: q.explanation } : {}) } as QuizQuestion;
    return { question, explanation: q.explanation ?? null, lesson: l ? { title: l.title, content: l.content } : null, subject: e.subject, grade: e.grade, examTitle: e.title };
  }
  return null;
}

// A cache, not app data: the table makes itself, like rate_limits.
let ready: Promise<Awaited<ReturnType<typeof getDb>>> | null = null;
function table() {
  ready ??= getDb().then(async (db) => {
    await db.run(sql`create table if not exists tutor_hints (key text primary key, text text not null, created_at integer not null)`);
    return db;
  });
  return ready;
}

const fnv = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619) >>> 0;
  return h.toString(36);
};

export type TutorRequest = { userId: string; itemId: string; mode: TutorMode; level: TutorLevel; locale: string; response: QuizResponse | null };
export type TutorResult = { text: string } | { error: "unavailable" | "unknown" | "busy" | "failed"; retryAfterMs?: number };

/** Calls Claude; injectable for tests. */
export type TutorCall = (system: string, user: string) => Promise<string | null>;

let client: Anthropic | null = null;
const callClaude: TutorCall = async (system, user) => {
  client ??= new Anthropic({ timeout: 30_000, maxRetries: 1 });
  const message = await client.messages.create({
    model: TUTOR_MODEL,
    max_tokens: 4000,
    system,
    output_config: { effort: "low", format: { type: "json_schema", schema: SCHEMA } },
    messages: [{ role: "user", content: user }],
  });
  if (message.stop_reason === "refusal" || message.stop_reason === "max_tokens") return null;
  const raw = message.content.find((b) => b.type === "text")?.text ?? "";
  try {
    const text = String((JSON.parse(raw) as { text?: unknown }).text ?? "").trim();
    return text || null;
  } catch {
    return null;
  }
};

export async function askTutor(req: TutorRequest, call: TutorCall = callClaude): Promise<TutorResult> {
  if (call === callClaude && !tutorEnabled()) return { error: "unavailable" };
  const found = await load(req.itemId);
  if (!found) return { error: "unknown" };
  const f = (t: I18nText) => pick(t, req.locale);
  const { shown: s, key: k } = displayForm(found.question, req.itemId);
  const shown = localShown(s, f);
  const key = localKey(k, f);
  const answer = answerText(shown, req.response);
  const right = rightText(shown, key);
  const mode = req.mode;
  const level: TutorLevel = mode === "why" ? 1 : req.level;

  const base = `${req.itemId}|${req.locale}|${mode}|${fnv(`${shown.prompt}|${right}`)}|${fnv(answer)}`;
  const cacheKey = `${base}|${level}`;
  const db = await table();
  const cached = await db.all<{ text: string }>(sql`select text from tutor_hints where key = ${cacheKey}`);
  if (cached[0]) return { text: cached[0].text };

  // Only calls to Claude count against the limits.
  const wait = (await take(`tutor:${req.userId}`, LIMITS.tutorUser)) || (await take("tutor:all", LIMITS.tutorAll));
  if (wait) return { error: "busy", retryAfterMs: wait };

  const previous = level === 2 ? ((await db.all<{ text: string }>(sql`select text from tutor_hints where key = ${`${base}|1`}`))[0]?.text ?? null) : null;
  const lessonMd = found.lesson ? (found.lesson.content[req.locale as "en"]?.trim() ? found.lesson.content[req.locale as "en"] : found.lesson.content.hy) : "";
  const prompt = tutorPrompt({
    mode,
    level,
    locale: req.locale,
    grade: found.grade,
    subject: found.subject ? f(found.subject) : "",
    lessonTitle: found.lesson ? f(found.lesson.title) : found.examTitle ? f(found.examTitle) : "",
    lesson: lessonForPrompt(lessonMd ?? ""),
    shown,
    answer,
    right,
    explanation: found.explanation ? f(found.explanation) : null,
    previous,
  });

  const hidden = mode === "hint" ? secrets(shown, key) : [];
  let text: string | null = null;
  try {
    text = await call(TUTOR_SYSTEM, prompt);
    // A hint that names the answer gets one more go, told what went wrong; then none at all.
    if (text && leaks(text, hidden)) {
      text = await call(TUTOR_SYSTEM, `${prompt}\n\nYour last hint named the right answer: «${text}». Write a hint that does not.`);
      if (text && leaks(text, hidden)) text = null;
    }
  } catch (e) {
    console.error("tutor:", e instanceof Error ? e.message : e);
    return { error: "failed" };
  }
  if (!text) return { error: "failed" };
  await db.run(sql`insert or replace into tutor_hints (key, text, created_at) values (${cacheKey}, ${text}, ${Date.now()})`);
  return { text };
}
