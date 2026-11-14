/**
 * "Look back": for a quiz question, the passage of its lesson that teaches the answer.
 *
 * Only a few quiz questions carry a written explanation, so a wrong answer used to end with
 * "the answer is B" and nothing more. Feedback that sends the pupil back to the source text works
 * better than a bare key, so every question gets the lesson passage that best matches the question
 * and its right answer. It is plain lexical matching (no AI): words are folded to a short stem so
 * Armenian and Russian endings still match, rare words count more (IDF over the lesson's own
 * passages), words of the right answer count double, and words that only the wrong options share
 * count for nothing. Exercises and Answers sections are never used, and a weak match gives no
 * passage at all rather than a random one.
 *
 * Pure and dependency free: the server renders the passage, the client only gets the result.
 */

export type LookPassage = {
  /** The passage as Markdown (a paragraph, a list item, or a table header with one row). */
  markdown: string;
  /** Stretches of plain text in it (longest first), used to find the passage on the lesson page. */
  find: string[];
  /** How sure the match is, for tests and tuning. */
  score: number;
};

export type LookQuestion = { prompt: string; right: string[]; wrong: string[] };

/** Sections that hold tasks or their answers: pointing there would only give the answer away. */
const SKIP_SECTION = /^(answers?|exercises?|practice|tasks?|homework|պատասխան|վարժություն|առաջադրանք|ответ|упражнени|задани|домашн)/i;

const STOP = new Set(
  (
    "the and for are was were with that this these those from into onto what which who whom whose when where why how than then them they their there here have has had not but can could will would should does did its it's his her our your you about above below after before more most less many much some such each other very also only just like between because while what's "
    + "и в во на не что как это для по из от до за к ко с со о об а но или ли же то так все всё его её их он она они мы вы ты я бы был была были быть есть при над под без про где когда чем там тут уже ещё еще этот эта эти того тому также только очень между который которая которые какой какая какие "
    + "և է են էր էին ու որ թե այս այդ այն իր իրենց մի մեկ էլ ել ոչ չի չեն համար հետ մեջ վրա տակ մոտ նաև միայն շատ քան ինչ ինչպես որը որոնք երբ որտեղ կամ բայց եթե ապա արդեն դեռ"
  ).split(/\s+/),
);

/** Lower case, letters and digits only, math commands dropped, stems so endings still match. */
export function lookTokens(text: string): string[] {
  const plain = text
    .replace(/\\(?:text|mathrm|textbf|mathbf|operatorname)\{([^}]*)\}/g, " $1 ")
    .replace(/\\[a-zA-Z]+/g, " ")
    .replace(/[*_`~#>|[\](){}$^\\]/g, " ")
    .toLowerCase()
    .replace(/[\u055B-\u055E]/g, "")
    .replace(/ё/g, "е");
  const out: string[] = [];
  for (const m of plain.matchAll(/[\p{L}\p{N}]+(?:[.,]\d+)?/gu)) {
    const w = m[0];
    if (/\d/.test(w)) {
      out.push(w.replace(",", "."));
      continue;
    }
    if (w.length < 3 || STOP.has(w)) continue;
    // Two stems: a short one that survives Russian and Armenian endings (связи, связями, связаны),
    // and a longer one that rewards a closer match.
    out.push(w.slice(0, 4));
    if (w.length >= 7) out.push(`${w.slice(0, 6)}+`);
  }
  return out;
}

type Passage = { markdown: string; tokens: string[] };

/** Splits a long paragraph into windows of up to two sentences, keeping $math$ in one piece. */
function sentenceWindows(text: string): string[] {
  if (text.length <= 360) return [text];
  const parts: string[] = [];
  let cur = "";
  let math = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    cur += ch;
    if (ch === "$") math = !math;
    if (!math && /[.!?։]/.test(ch) && (text[i + 1] === " " || i === text.length - 1)) {
      parts.push(cur.trim());
      cur = "";
    }
  }
  if (cur.trim()) parts.push(cur.trim());
  if (parts.length <= 2) return [text];
  const out: string[] = [];
  for (let i = 0; i < parts.length - 1; i++) out.push(`${parts[i]} ${parts[i + 1]}`);
  return out;
}

/** The passages a lesson body offers: paragraphs, list items, quotes, and table rows with their header. */
export function lessonPassages(body: string): Passage[] {
  const lines = body.split("\n");
  const out: Passage[] = [];
  let skip = false;
  let fence: string | null = null;
  let para: string[] = [];
  let item: string[] = [];
  let table: string[] = [];
  const add = (md: string) => {
    const tokens = lookTokens(md);
    if (tokens.length >= 3) out.push({ markdown: md, tokens });
  };
  const flushItem = () => {
    if (item.length && !skip) add(item.join(" ").trim());
    item = [];
  };
  const flushPara = () => {
    flushItem();
    if (para.length && !skip) {
      // Quote markers come off each source line before joining, so a ">" inside the text (an inequality) stays.
      const quote = para[0].trimStart().startsWith(">");
      const text = (quote ? para.map((l) => l.replace(/^\s*>\s?/, "")) : para).join(" ").trim();
      for (const w of sentenceWindows(text)) add(w);
    }
    para = [];
  };
  const flushTable = () => {
    if (table.length >= 3 && !skip) {
      const [head, sep, ...rows] = table;
      for (const r of rows) add(`${head}\n${sep}\n${r}`);
    }
    table = [];
  };
  for (const raw of lines) {
    const line = raw.trimEnd();
    const f = line.match(/^\s*(```|~~~)/);
    if (fence) {
      if (f && line.trim().startsWith(fence)) fence = null;
      continue;
    }
    if (f) {
      flushPara();
      flushTable();
      fence = f[1];
      continue;
    }
    const h = line.match(/^#{1,6}\s+(.*)$/);
    if (h) {
      flushPara();
      flushTable();
      skip = SKIP_SECTION.test(h[1].replace(/^[^\p{L}]+/u, "").trim());
      continue;
    }
    if (/^\s*\|/.test(line)) {
      flushPara();
      table.push(line.trim());
      continue;
    }
    flushTable();
    if (!line.trim() || /^\s*(---|\*\*\*)\s*$/.test(line)) {
      flushPara();
      continue;
    }
    const li = line.match(/^\s*(?:[-*+]|\d+[.)])\s+(.*)$/);
    if (li) {
      flushPara();
      item = [li[1].trim()];
      continue;
    }
    // A line right under a list item continues it.
    if (item.length) item.push(line.trim());
    else para.push(line.trim().replace(/\\$/, ""));
  }
  flushPara();
  flushTable();
  return out;
}

/** Plain-text stretches of the passage (no math, no Markdown), longest first, that the page can search for. */
export function findText(markdown: string): string[] {
  // For a table row only the row itself is searched; its header is shared by every row.
  const lines = markdown.split("\n");
  const own = lines.length === 3 && lines[0].startsWith("|") ? lines[2] : markdown;
  const pieces = own
    .replace(/\$\$[\s\S]*?\$\$|\$[^$]*\$/g, "\u0000")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`#>|]/g, " ")
    .split(/\u0000|\n/)
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter((s) => /[\p{L}\p{N}]/u.test(s));
  return pieces
    .sort((a, b) => b.length - a.length)
    .slice(0, 3)
    .map((s) => s.slice(0, 60).trim());
}

/** Finds the best passage for each question, or null when nothing in the lesson clearly matches. */
export function lookBack(body: string, questions: LookQuestion[]): (LookPassage | null)[] {
  const passages = lessonPassages(body);
  if (!passages.length) return questions.map(() => null);
  const df = new Map<string, number>();
  for (const p of passages) for (const t of new Set(p.tokens)) df.set(t, (df.get(t) ?? 0) + 1);
  const n = passages.length;
  const idf = (t: string) => Math.log((n + 1) / ((df.get(t) ?? 0) + 0.5));

  return questions.map((q) => {
    const weight = new Map<string, number>();
    const right = new Set(q.right.flatMap(lookTokens));
    const wrong = new Set(q.wrong.flatMap(lookTokens));
    for (const t of lookTokens(q.prompt)) weight.set(t, 1);
    for (const t of right) weight.set(t, 2);
    for (const t of wrong) if (!right.has(t) && weight.get(t) === 1) weight.delete(t);
    if (!weight.size) return null;

    let best: { p: Passage; score: number; rightHits: number; hits: number } | null = null;
    for (const p of passages) {
      const own = new Set(p.tokens);
      let score = 0, rightHits = 0, hits = 0;
      for (const [t, w] of weight) {
        if (!own.has(t)) continue;
        score += w * idf(t);
        hits++;
        if (right.has(t)) rightHits++;
      }
      // A long passage matches more by chance; a little length penalty keeps the pointer focused.
      score /= 1 + 0.25 * Math.log(1 + p.tokens.length / 12);
      if (!best || score > best.score) best = { p, score, rightHits, hits };
    }
    if (!best || best.hits < 2 || best.score < 2.2) return null;
    // Without a word of the right answer in it, only a strong match on the question will do.
    if (right.size && best.rightHits === 0 && best.score < 4) return null;
    const find = findText(best.p.markdown);
    if (!find.length || find.join("").length < 4) return null;
    return { markdown: best.p.markdown, find, score: Math.round(best.score * 100) / 100 };
  });
}
