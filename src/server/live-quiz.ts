import { randomBytes } from "node:crypto";
import { asc, eq } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import type { I18nText } from "./db/schema";
import { skillQuestions } from "./mastery";
import { LIVE_MAX_PLAYERS, cleanName, leaderboard, livePoints, makePin, questionOver, uniqueName, type LivePhase } from "@/lib/live-quiz";

/**
 * Live class quizzes, kept in this server's memory: a game lasts one lesson,
 * and nothing about the players (nicknames, no accounts) is stored. That
 * needs the app to run as one process, as it does today; several instances
 * would each have their own games. Idle games are dropped after three hours.
 */

export type LiveQuestion = { prompt: I18nText; options: I18nText[]; answer: number };
type Answer = { choice: number; ms: number; points: number };
type Player = { id: string; token: string; name: string; score: number; joinedAt: number; answers: Map<number, Answer> };
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
  players: Map<string, Player>;
  touchedAt: number;
};

const IDLE_MS = 3 * 60 * 60 * 1000;
const MAX_GAMES = 300;
// Kept on globalThis so a dev-server reload doesn't lose running games.
const store = ((globalThis as { __liveGames?: Map<string, Game> }).__liveGames ??= new Map<string, Game>());

const token = () => randomBytes(18).toString("base64url");
const sweep = (now: number) => {
  for (const [pin, g] of store) if (now - g.touchedAt > IDLE_MS) store.delete(pin);
};

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
  sweep(now);
  if (store.size >= MAX_GAMES) return { error: "busy" as const };
  const made = await liveQuestionsFor(skillId, count);
  if (!made) return { error: "unknown" as const };
  if (made.questions.length < 3) return { error: "few" as const };
  return openGame(hostUserId, made.title, made.questions, seconds, now);
}

/** Opens a game in the lobby with questions already chosen. */
export function openGame(hostUserId: string, title: I18nText, questions: LiveQuestion[], seconds: number, now = Date.now()) {
  let pin = makePin();
  while (store.has(pin)) pin = makePin();
  const game: Game = { pin, hostToken: token(), hostUserId, title, questions, seconds, phase: "lobby", index: -1, startedAt: 0, endsAt: 0, players: new Map(), touchedAt: now };
  store.set(pin, game);
  return { pin, hostToken: game.hostToken };
}

export function joinGame(pin: string, rawName: string, now = Date.now()) {
  const g = store.get(pin);
  if (!g) return { error: "nogame" as const };
  if (g.phase === "podium") return { error: "over" as const };
  if (g.players.size >= LIVE_MAX_PLAYERS) return { error: "full" as const };
  const clean = cleanName(rawName);
  if (!clean) return { error: "name" as const };
  const name = uniqueName(clean, [...g.players.values()].map((p) => p.name));
  const p: Player = { id: token().slice(0, 10), token: token(), name, score: 0, joinedAt: now, answers: new Map() };
  g.players.set(p.id, p);
  g.touchedAt = now;
  return { playerId: p.id, token: p.token, name };
}

/** Closes the open question when its time is up or everyone has answered. */
function settle(g: Game, now: number) {
  if (g.phase !== "question") return;
  const answered = [...g.players.values()].filter((p) => p.answers.has(g.index)).length;
  if (questionOver(now, g.endsAt, answered, g.players.size)) g.phase = "reveal";
}

const playerBy = (g: Game, tok: string) => [...g.players.values()].find((p) => p.token === tok);

/** `index` is the question the player saw: an answer sent just before the host moved on must not land on the next one. */
export function answer(pin: string, tok: string, index: number, choice: number, now = Date.now()) {
  const g = store.get(pin);
  if (!g) return { error: "nogame" as const };
  settle(g, now);
  const p = playerBy(g, tok);
  if (!p) return { error: "noplayer" as const };
  const q = g.questions[g.index];
  if (g.phase !== "question" || !q || index !== g.index || p.answers.has(g.index)) return { error: "closed" as const };
  if (!Number.isInteger(choice) || choice < 0 || choice >= q.options.length) return { error: "invalid" as const };
  const ms = now - g.startedAt;
  const points = livePoints(choice === q.answer, ms, g.seconds * 1000);
  p.answers.set(g.index, { choice, ms, points });
  p.score += points;
  g.touchedAt = now;
  settle(g, now);
  return { ok: true as const };
}

export type HostAction = "start" | "reveal" | "next" | "end" | "kick";

export function hostAct(pin: string, hostToken: string, action: HostAction, playerId?: string, now = Date.now()) {
  const g = store.get(pin);
  if (!g || g.hostToken !== hostToken) return { error: "nogame" as const };
  settle(g, now);
  const open = (i: number) => {
    g.phase = "question";
    g.index = i;
    g.startedAt = now;
    g.endsAt = now + g.seconds * 1000;
  };
  if (action === "start" && g.phase === "lobby") {
    if (g.players.size === 0) return { error: "empty" as const };
    open(0);
  } else if (action === "reveal" && g.phase === "question") g.phase = "reveal";
  else if (action === "next" && g.phase === "reveal") {
    if (g.index + 1 < g.questions.length) open(g.index + 1);
    else g.phase = "podium";
  } else if (action === "end") g.phase = "podium";
  else if (action === "kick" && playerId) g.players.delete(playerId);
  g.touchedAt = now;
  return { ok: true as const };
}

const standings = (g: Game) => leaderboard([...g.players.values()].map((p) => ({ id: p.id, name: p.name, score: p.score, joinedAt: p.joinedAt })));

/** What the teacher's screen shows. */
export function hostView(pin: string, hostToken: string, now = Date.now()) {
  const g = store.get(pin);
  if (!g || g.hostToken !== hostToken) return null;
  settle(g, now);
  g.touchedAt = now;
  const q = g.questions[g.index];
  const board = standings(g);
  const answers = [...g.players.values()].map((p) => p.answers.get(g.index)).filter((a): a is Answer => !!a);
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
export type HostView = NonNullable<ReturnType<typeof hostView>>;

/** What a pupil's phone shows; the right answer only once the question is closed. */
export function playerView(pin: string, tok: string, now = Date.now()) {
  const g = store.get(pin);
  if (!g) return null;
  settle(g, now);
  const p = playerBy(g, tok);
  if (!p) return { kicked: true as const };
  const q = g.questions[g.index];
  const mine = p.answers.get(g.index);
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
export type PlayerView = Extract<NonNullable<ReturnType<typeof playerView>>, { kicked: false }>;

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
export function resetLiveGames() {
  store.clear();
}
