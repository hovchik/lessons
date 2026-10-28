import { WORDS, type Word } from "@/content/games/words";
import type { Rng } from "./calc";

/** The English words game: levels, rounds and the id scores are saved under. */

export const WORD_LEVELS = [1, 2] as const;
export type WordLevel = (typeof WORD_LEVELS)[number];

export const wordsGameId = (level: WordLevel) => `words:${level}`;
export function parseWordsGameId(id: string): { level: WordLevel } | null {
  const m = /^words:([12])$/.exec(id);
  return m ? { level: Number(m[1]) as WordLevel } : null;
}

/** The level for a grade: 1 for grades 2–4, 2 from grade 5. */
export const wordLevelFor = (grade: number | null) => (grade !== null && grade >= 5 ? 2 : 1);

export const wordsFor = (level: WordLevel) => WORDS.filter((x) => x.level <= level);

export type WordRound = { word: Word; options: string[] };

const shuffle = <T,>(xs: T[], rng: Rng) => {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/** A picture and four words: the right one and three from the same theme, never a recent picture. */
export function nextWordRound(level: WordLevel, recent: string[], rng: Rng = Math.random): WordRound {
  const pool = wordsFor(level);
  const fresh = pool.filter((x) => !recent.includes(x.en));
  const word = (fresh.length ? fresh : pool)[Math.floor(rng() * (fresh.length || pool.length))];
  const others = shuffle(
    pool.filter((x) => x.theme === word.theme && x.en !== word.en),
    rng,
  ).slice(0, 3);
  return { word, options: shuffle([word.en, ...others.map((x) => x.en)], rng) };
}
