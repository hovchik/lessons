import type { I18nText } from "../types";
import type { RelevanceMap } from "./types";
import { algebraRelevance, geometryRelevance, mathRelevance } from "./math";
import { astronomyRelevance, drawingRelevance, physicsRelevance } from "./science";
import { armenianRelevance, englishRelevance, russianRelevance } from "./languages";
import { biologyRelevance, chemistryRelevance, geographyRelevance, informaticsRelevance, scienceRelevance } from "./natural";
import {
  armenianHistoryRelevance,
  chessRelevance,
  churchHistoryRelevance,
  musicRelevance,
  socialStudiesRelevance,
  technologyRelevance,
  worldHistoryRelevance,
} from "./humanities";

/** subject id → grade → one line per unit. */
export const RELEVANCE: Record<string, RelevanceMap> = {
  math: mathRelevance,
  algebra: algebraRelevance,
  geometry: geometryRelevance,
  physics: physicsRelevance,
  drawing: drawingRelevance,
  armenian: armenianRelevance,
  russian: russianRelevance,
  english: englishRelevance,
  chemistry: chemistryRelevance,
  biology: biologyRelevance,
  geography: geographyRelevance,
  informatics: informaticsRelevance,
  science: scienceRelevance,
  "armenian-history": armenianHistoryRelevance,
  "world-history": worldHistoryRelevance,
  "social-studies": socialStudiesRelevance,
  "church-history": churchHistoryRelevance,
  music: musicRelevance,
  technology: technologyRelevance,
  chess: chessRelevance,
  astronomy: astronomyRelevance,
};

/** The "why learn this" line for a unit (position is 1-based), if there is one. */
export function relevanceFor(subjectId: string, grade: number, position: number): I18nText | null {
  return RELEVANCE[subjectId]?.[grade]?.[position - 1] ?? null;
}
