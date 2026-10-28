import type { I18nText, QuizQuestion } from "../types";

/** What a puzzle is about; each has its own icon and colour. */
export type PuzzleTheme = "numbers" | "logic" | "words" | "chess" | "shapes" | "nature" | "teaser";

export type Puzzle = {
  /** Stable id (results keep it): `j01`…, `s01`…. */
  id: string;
  theme: PuzzleTheme;
  /** The question, with its answer and the explanation shown at the end. */
  q: QuizQuestion;
  /** Opens after a wrong first try. */
  hint: I18nText;
  /** Markdown shown above the answers, the same in every language (a chessboard). */
  visual?: string;
  /** A mate-in-one puzzle: the position and the moves offered, checked by tests/puzzle.test.ts. */
  chess?: { fen: string; moves: string[]; answer: number };
};

const PIECE: Record<string, I18nText> = {
  k: { en: "King", hy: "Արքա", ru: "Король" },
  q: { en: "Queen", hy: "Թագուհի", ru: "Ферзь" },
  r: { en: "Rook", hy: "Նավակ", ru: "Ладья" },
  b: { en: "Bishop", hy: "Փիղ", ru: "Слон" },
  n: { en: "Knight", hy: "Ձի", ru: "Конь" },
  p: { en: "Pawn", hy: "Զինվոր", ru: "Пешка" },
};

/** The piece standing on a square of a FEN placement, lower case, or null. */
function pieceAt(fen: string, square: string): string | null {
  const rows = fen.split(" ")[0].split("/");
  const row = rows[8 - Number(square[1])];
  let file = 0;
  for (const ch of row) {
    if (/\d/.test(ch)) file += Number(ch);
    else {
      if (file === square.charCodeAt(0) - 97) return ch.toLowerCase();
      file++;
    }
  }
  return null;
}

/**
 * A mate-in-one puzzle for White. Each offered move is written as the piece
 * and the square it goes to ("Rook to a8"), so the pupil reads the board, not
 * notation.
 */
export function mateInOne(id: string, fen: string, moves: string[], answer: number, hint: I18nText, explanation: I18nText): Puzzle {
  const label = (m: string): I18nText => {
    const p = PIECE[pieceAt(fen, m.slice(0, 2)) ?? "p"];
    const to = m.slice(2, 4);
    return { en: `${p.en} to ${to}`, hy: `${p.hy}՝ ${to}`, ru: `${p.ru} на ${to}` };
  };
  return {
    id,
    theme: "chess",
    q: {
      prompt: { en: "White to move. Which move is checkmate?", hy: "Քայլը սպիտակներինն է։ Ո՞ր քայլն է մատ։", ru: "Ход белых. Какой ход ставит мат?" },
      options: moves.map(label),
      answer,
      explanation,
    },
    hint,
    visual: `~~~sim\nchess mode=moves fen=${fen}\n~~~`,
    chess: { fen, moves, answer },
  };
}
