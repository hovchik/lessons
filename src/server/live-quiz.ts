import { randomBytes } from "node:crypto";
import { and, asc, count as countRows, eq, lt } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import type { I18nText } from "./db/schema";
import { skillQuestions } from "./mastery";
import { LIVE_MAX_PLAYERS, cleanName, leaderboard, livePoints, makePin, questionOver, uniqueName, type LivePhase } from "@/lib/live-quiz";

/**
 * Live class quizzes. A game lasts one lesson, and nothing about the players
 * (nicknames, no accounts) is kept after it: idle games are deleted after three
 * hours. Each game is one row of live_games, so every server worker
 * (server.mjs, WEB_CONCURRENCY) sees the same game; a change is written only if
 * nobody else changed the game since it was read, and is retried otherwise.
 */

export type LiveQuestion = { prompt: I18nText; options: I18nText[]; answer: number };
type Answer = { choice: number; ms: number; points: number };
type Player = { id: string; token: string; name: string; score: number; joinedAt: number; answers: Record<number, Answer> };
type Game = {
  pin: string;
  hostToken: string;
  hostUserId: string;
  title: I18nText;
  questions: LiveQuestion[];
  seconds: number;
  phase: LivePhase;
  index: number;
  startedAt: number;
  endsAt: number;
  /** In joining order. */
  players: Player[];
};

// Results in the same shape as before, so callers can test `.error` or `.ok` on any of them.
type Fail<E extends string> = { error: E; ok?: undefined; playerId?: undefined; token?: undefined; name?: undefined };
type Done = { ok: true; error?: undefined };

const IDLE_MS = 3 * 60 * 60 * 1000;
const MAX_GAMES = 300;
/** Views keep a game alive, but write that down at most this often. */
const TOUCH_MS = 60 * 1000;

const token = () => randomBytes(18).toString("base64url");
const lg = schema.liveGames;

async function sweep(now: number) {
  const db = await getDb();
  await db.delete(lg).where(lt(lg.touchedAt, now - IDLE_MS)).run();
}

async function load(pin: string) {
  const db = await getDb();
  const row = await db.select().from(lg).where(eq(lg.pin, pin)).get();
  return row ? { game: JSON.parse(row.state) as Game, version: row.version, touchedAt: row.touchedAt } : null;
}

/**
 * Reads the game, lets `change` alter it, and saves it if it did (`change` returns true), unless
 * another request saved the game in between: then it starts again with the newer game, until the
 * change is saved. A result is returned only once its change is in the database.
 */
async function update<R>(pin: string, now: number, change: (g: Game) => { result: R; changed: boolean }): Promise<R | null> {
  const db = await getDb();
  for (let attempt = 0; ; attempt++) {
    const found = await load(pin);
    if (!found) return null;
    const { result, changed } = change(found.game);
    const touch = now - found.touchedAt > TOUCH_MS;
    if (!changed && !touch) return result;
    const set = changed ? { state: JSON.stringify(found.game), version: found.version + 1, touchedAt: now } : { touchedAt: now };
    const saved = await db.update(lg).set(set).where(and(eq(lg.pin, pin), eq(lg.version, found.version))).run();
    // A view that only keeps the game alive may lose the race: someone else just saved it.
    if (saved.rowsAffected > 0 || !changed) return result;
    // Each clash means another request's change went in, so this ends; after a few, spread the retries out.
    if (attempt >= 3) await new Promise((r) => setTimeout(r, Math.random() * Math.min(attempt, 20)));
  }
}

/** Choice questions with 2–4 options from a unit, shuffled, each with its options shuffled too. */
export async function liveQuestionsFor(skillId: string, count: number, random: () => number = Math.random): Promise<{ title: I18nText; questions: LiveQuestion[] } | null> {
  const data = await skillQuestions(skillId);
  if (!data) return null;
  const pool = data.byLesson
    .flat()
    .map((x) => x.q)
    .filter((q): q is Extract<typeof q, { options: I18nText[] }> => (!q.kind || q.kind === "choice") && "options" in q && q.options.length >= 2 && q.options.length <= 4);
  const shuffle = <T,>(xs: T[]) => {
    const a = [...xs];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const questions = shuffle(pool)
    .slice(0, count)
    .map((q) => {
      const order = shuffle(q.options.map((_, i) => i));
      return { prompt: q.prompt, options: order.map((i) => q.options[i]), answer: order.indexOf(q.answer) };
    });
  return { title: data.skill.title, questions };
}

export async function createGame(hostUserId: string, skillId: string, count: number, seconds: number, now = Date.now()) {
  await sweep(now);
  const db = await getDb();
  const games = (await db.select({ n: countRows() }).from(lg).get())?.n ?? 0;
  if (games >= MAX_GAMES) return { error: "busy" as const };
  const made = await liveQuestionsFor(skillId, count);
  if (!made) return { error: "unknown" as const };
  if (made.questions.length < 3) return { error: "few" as const };
  return openGame(hostUserId, made.title, made.questions, seconds, now);
}

/** Opens a game in the lobby with questions already chosen. */
export async function openGame(hostUserId: string, title: I18nText, questions: LiveQuestion[], seconds: number, now = Date.now()) {
  const db = await getDb();
  const game: Game = { pin: "", hostToken: token(), hostUserId, title, questions, seconds, phase: "lobby", index: -1, startedAt: 0, endsAt: 0, players: [] };
  for (;;) {
    game.pin = makePin();
    const made = await db.insert(lg).values({ pin: game.pin, state: JSON.stringify(game), touchedAt: now }).onConflictDoNothing().run();
    if (made.rowsAffected > 0) return { pin: game.pin, hostToken: game.hostToken };
  }
}

export async function joinGame(pin: string, rawName: string, now = Date.now()) {
  const clean = cleanName(rawName);
  const r = await update<Fail<"over" | "full" | "name"> | { playerId: string; token: string; name: string; error?: undefined }>(pin, now, (g) => {
    if (g.phase === "podium") return { result: { error: "over" as const }, changed: false };
    if (g.players.length >= LIVE_MAX_PLAYERS) return { result: { error: "full" as const }, changed: false };
    if (!clean) return { result: { error: "name" as const }, changed: false };
    const name = uniqueName(clean, g.players.map((p) => p.name));
    const p: Player = { id: token().slice(0, 10), token: token(), name, score: 0, joinedAt: now, answers: {} };
    g.players.push(p);
    return { result: { playerId: p.id, token: p.token, name }, changed: true };
  });
  return r ?? ({ error: "nogame" } as Fail<"nogame">);
}

/** Closes the open question when its time is up or everyone has answered. True when it did. */
function settle(g: Game, now: number) {
  if (g.phase !== "question") return false;
  const answered = g.players.filter((p) => p.answers[g.index]).length;
  if (!questionOver(now, g.endsAt, answered, g.players.length)) return false;
  g.phase = "reveal";
  return true;
}

const playerBy = (g: Game, tok: string) => g.players.find((p) => p.token === tok);

export async function answer(pin: string, tok: string, choice: number, now = Date.now()) {
  const r = await update<Fail<"noplayer" | "closed" | "invalid"> | Done>(pin, now, (g) => {
    const settled = settle(g, now);
    const p = playerBy(g, tok);
    if (!p) return { result: { error: "noplayer" as const }, changed: settled };
    const q = g.questions[g.index];
    if (g.phase !== "question" || !q || p.answers[g.index]) return { result: { error: "closed" as const }, changed: settled };
    if (!Number.isInteger(choice) || choice < 0 || choice >= q.options.length) return { result: { error: "invalid" as const }, changed: settled };
    const ms = now - g.startedAt;
    const points = livePoints(choice === q.answer, ms, g.seconds * 1000);
    p.answers[g.index] = { choice, ms, points };
    p.score += points;
    settle(g, now);
    return { result: { ok: true as const }, changed: true };
  });
  return r ?? ({ error: "nogame" } as Fail<"nogame">);
}

export type HostAction = "start" | "reveal" | "next" | "end" | "kick";

export async function hostAct(pin: string, hostToken: string, action: HostAction, playerId?: string, now = Date.now()) {
  const r = await update<Fail<"nogame" | "empty"> | Done>(pin, now, (g) => {
    if (g.hostToken !== hostToken) return { result: { error: "nogame" as const }, changed: false };
    settle(g, now);
    const open = (i: number) => {
      g.phase = "question";
      g.index = i;
      g.startedAt = now;
      g.endsAt = now + g.seconds * 1000;
    };
    if (action === "start" && g.phase === "lobby") {
      if (g.players.length === 0) return { result: { error: "empty" as const }, changed: false };
      open(0);
    } else if (action === "reveal" && g.phase === "question") g.phase = "reveal";
    else if (action === "next" && g.phase === "reveal") {
      if (g.index + 1 < g.questions.length) open(g.index + 1);
      else g.phase = "podium";
    } else if (action === "end") g.phase = "podium";
    else if (action === "kick" && playerId) g.players = g.players.filter((p) => p.id !== playerId);
    return { result: { ok: true as const }, changed: true };
  });
  return r ?? ({ error: "nogame" } as Fail<"nogame">);
}

/** The game as it is now: closes a question whose time ran out, and keeps the game alive. */
async function current(pin: string, now: number) {
  return update(pin, now, (g) => ({ result: g, changed: settle(g, now) }));
}

const standings = (g: Game) => leaderboard(g.players.map((p) => ({ id: p.id, name: p.name, score: p.score, joinedAt: p.joinedAt })));

/** What the teacher's screen shows. */
export async function hostView(pin: string, hostToken: string, now = Date.now()) {
  const g = await current(pin, now);
  if (!g || g.hostToken !== hostToken) return null;
  const q = g.questions[g.index];
  const board = standings(g);
  const answers = g.players.map((p) => p.answers[g.index]).filter((a): a is Answer => !!a);
  return {
    pin: g.pin,
    title: g.title,
    phase: g.phase,
    index: g.index,
    total: g.questions.length,
    seconds: g.seconds,
    msLeft: g.phase === "question" ? Math.max(0, g.endsAt - now) : 0,
    players: board.map((p) => ({ id: p.id, name: p.name, score: p.score, rank: p.rank })),
    question: q && g.phase !== "lobby" && g.phase !== "podium" ? { prompt: q.prompt, options: q.options } : null,
    answered: answers.length,
    reveal:
      g.phase === "reveal" && q
        ? { answer: q.answer, counts: q.options.map((_, i) => answers.filter((a) => a.choice === i).length) }
        : null,
  };
}
export type HostView = NonNullable<Awaited<ReturnType<typeof hostView>>>;

/** What a pupil's phone shows; the right answer only once the question is closed. */
export async function playerView(pin: string, tok: string, now = Date.now()) {
  const g = await current(pin, now);
  if (!g) return null;
  const p = playerBy(g, tok);
  if (!p) return { kicked: true as const };
  const q = g.questions[g.index];
  const mine = p.answers[g.index];
  const board = standings(g);
  const me = board.find((x) => x.id === p.id)!;
  return {
    kicked: false as const,
    title: g.title,
    phase: g.phase,
    index: g.index,
    total: g.questions.length,
    msLeft: g.phase === "question" ? Math.max(0, g.endsAt - now) : 0,
    me: { name: p.name, score: p.score, rank: me.rank, players: board.length },
    question: q && g.phase === "question" ? { prompt: q.prompt, options: q.options, answered: mine?.choice ?? null } : null,
    reveal: q && g.phase === "reveal" ? { answer: q.answer, choice: mine?.choice ?? null, points: mine?.points ?? 0, options: q.options } : null,
    podium: g.phase === "podium" ? board.slice(0, 3).map((x) => ({ name: x.name, score: x.score, rank: x.rank })) : null,
  };
}
export type PlayerView = Extract<NonNullable<Awaited<ReturnType<typeof playerView>>>, { kicked: false }>;

/** Units a teacher can run a quiz on: subject → grade → units, in the given language. */
export async function liveCatalogue(pickText: (t: I18nText) => string) {
  const db = await getDb();
  const rows = await db
    .select({ skillId: schema.skills.id, title: schema.skills.title, position: schema.skills.position, grade: schema.courses.grade, subjectId: schema.subjects.id, subject: schema.subjects.name, order: schema.subjects.sortOrder })
    .from(schema.skills)
    .innerJoin(schema.courses, eq(schema.skills.courseId, schema.courses.id))
    .innerJoin(schema.subjects, eq(schema.courses.subjectId, schema.subjects.id))
    .orderBy(asc(schema.subjects.sortOrder), asc(schema.courses.grade), asc(schema.skills.position))
    .all();
  const out: { id: string; name: string; grades: { grade: number; units: { skillId: string; title: string; position: number }[] }[] }[] = [];
  for (const r of rows) {
    let s = out.find((x) => x.id === r.subjectId);
    if (!s) out.push((s = { id: r.subjectId, name: pickText(r.subject), grades: [] }));
    let g = s.grades.find((x) => x.grade === r.grade);
    if (!g) s.grades.push((g = { grade: r.grade, units: [] }));
    g.units.push({ skillId: r.skillId, title: pickText(r.title), position: r.position });
  }
  return out;
}

/** For tests: forget every game. */
export async function resetLiveGames() {
  const db = await getDb();
  await db.delete(lg).run();
}
