import Anthropic from "@anthropic-ai/sdk";
import type { ChoiceQuestion, I18nText } from "./db/schema";

export const GENERATION_MODEL = process.env.CLAUDE_MODEL || "claude-opus-5-5";

export type GeneratedLesson = {
  objectives: { en: string[]; hy: string[]; ru: string[] };
  content: I18nText;
  quiz: ChoiceQuestion[];
};

const i18n = {
  type: "object",
  properties: { en: { type: "string" }, hy: { type: "string" }, ru: { type: "string" } },
  required: ["en", "hy", "ru"],
  additionalProperties: false,
} as const;

const SCHEMA = {
  type: "object",
  properties: {
    objectives: {
      type: "object",
      properties: {
        en: { type: "array", items: { type: "string" } },
        hy: { type: "array", items: { type: "string" } },
        ru: { type: "array", items: { type: "string" } },
      },
      required: ["en", "hy", "ru"],
      additionalProperties: false,
    },
    content: i18n,
    quiz: {
      type: "array",
      items: {
        type: "object",
        properties: {
          prompt: i18n,
          options: { type: "array", items: i18n },
          answer: { type: "integer" },
          explanation: i18n,
        },
        required: ["prompt", "options", "answer", "explanation"],
        additionalProperties: false,
      },
    },
  },
  required: ["objectives", "content", "quiz"],
  additionalProperties: false,
} as const;

const SYSTEM = `You write school lessons for a trilingual (English, Armenian, Russian) learning platform that covers grades 1–12 and follows both the Armenian state curriculum and the Russian ФГОС curriculum.

Each lesson must be written three times, once per language, as a complete, self-contained Markdown text (GFM tables and lists allowed; math in KaTeX $...$ / $$...$$). The Armenian and Russian versions are native-quality texts for pupils of that grade, not word-for-word translations. Use the exact terminology that textbooks in Armenia and Russia use for the topic.

Rules:
- Match the reading level and attention span of the grade (grade 1: very short sentences, lots of examples; grade 12: rigorous explanations).
- Structure: a short hook, 2–4 "##" sections that teach the concept step by step with worked examples, a "Practice" section with 4–6 exercises, and a "Remember" summary with 2–4 bullets.
- Where helpful, mention a concrete Armenian or Russian context (places, names, currency, literature) so the lesson feels local.
- Do not use emoji. Do not include a top-level "#" title; the title is shown by the app.
- Give 3–5 learning objectives per language, and a quiz of 3–5 multiple-choice questions with exactly 3 options each; "answer" is the 0-based index of the correct option.`;

export type LessonBrief = {
  subject: I18nText;
  grade: number;
  courseTitle: I18nText;
  unitTitle: I18nText;
  unitSummary: I18nText;
  lessonTitle: I18nText;
  curriculumNotes: { armenia: I18nText; russia: I18nText };
  neighbours: string[];
};

export async function generateLesson(brief: LessonBrief): Promise<GeneratedLesson> {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY is not set");
  }
  const client = new Anthropic();
  const user = `Write the lesson described below.

Subject: ${brief.subject.en} / ${brief.subject.hy} / ${brief.subject.ru}
Grade: ${brief.grade}
Course: ${brief.courseTitle.en}
Unit: ${brief.unitTitle.en} — ${brief.unitSummary.en}
Lesson title (EN / HY / RU): ${brief.lessonTitle.en} / ${brief.lessonTitle.hy} / ${brief.lessonTitle.ru}
Other lessons in this unit (for context, do not repeat them): ${brief.neighbours.join("; ") || "none"}

How this topic sits in the Armenian curriculum: ${brief.curriculumNotes.armenia.en}
How this topic sits in the Russian curriculum: ${brief.curriculumNotes.russia.en}`;

  const stream = client.messages.stream({
    model: GENERATION_MODEL,
    max_tokens: 32000,
    system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
    output_config: { effort: "medium", format: { type: "json_schema", schema: SCHEMA } },
    messages: [{ role: "user", content: user }],
  });
  const message = await stream.finalMessage();

  if (message.stop_reason === "refusal") {
    throw new Error(`Generation refused${message.stop_details?.explanation ? `: ${message.stop_details.explanation}` : ""}`);
  }
  if (message.stop_reason === "max_tokens") {
    throw new Error("Generation stopped at the output token limit; try again");
  }
  const text = message.content.find((b) => b.type === "text")?.text ?? "";
  const parsed = JSON.parse(text) as GeneratedLesson;
  parsed.quiz = parsed.quiz.filter((q) => q.options.length >= 2 && q.answer >= 0 && q.answer < q.options.length);
  return parsed;
}
