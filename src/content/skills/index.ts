import type { CourseSeed, I18nText } from "../types";
import { prerequisites } from "./prereqs";

export { prerequisites };

/**
 * The skill map. For now a skill is one unit of a course, so every lesson
 * belongs to exactly one skill and its quiz questions practise that skill.
 * Prerequisites come from ./prereqs.ts, or default to the previous unit.
 */

export const skillId = (courseId: string, unitPosition: number) => `${courseId}.u${unitPosition}`;

export type SkillSeed = {
  id: string;
  courseId: string;
  subject: string;
  grade: number;
  /** 1-based position of the unit in its course. */
  position: number;
  title: I18nText;
  prereqs: string[];
  /** Lesson ids, as the seed builds them: `<courseId>-<slug>`. */
  lessonIds: string[];
};

export function buildSkillMap(courses: CourseSeed[]): SkillSeed[] {
  const out: SkillSeed[] = [];
  for (const c of courses) {
    const cid = `${c.subject}-${c.grade}`;
    c.units.forEach((u, i) => {
      const id = skillId(cid, i + 1);
      out.push({
        id,
        courseId: cid,
        subject: c.subject,
        grade: c.grade,
        position: i + 1,
        title: u.title,
        prereqs: prerequisites[id] ?? (i > 0 ? [skillId(cid, i)] : []),
        lessonIds: u.lessons.map((l) => `${cid}-${l.slug}`),
      });
    });
  }
  return out;
}

/** Problems with the skill map: unknown ids, later-grade prerequisites, cycles. Empty when all is well. */
export function checkSkillMap(map: SkillSeed[], authored: Record<string, string[]> = prerequisites): string[] {
  const errors: string[] = [];
  const byId = new Map(map.map((s) => [s.id, s]));
  for (const id of Object.keys(authored)) if (!byId.has(id)) errors.push(`skills: prerequisites lists unknown skill ${id}`);
  for (const s of map) {
    const seen = new Set<string>();
    for (const p of s.prereqs) {
      const ps = byId.get(p);
      if (!ps) errors.push(`skills: ${s.id} needs unknown skill ${p}`);
      else if (ps.grade > s.grade) errors.push(`skills: ${s.id} (grade ${s.grade}) needs ${p} from a later grade (${ps.grade})`);
      if (p === s.id) errors.push(`skills: ${s.id} needs itself`);
      if (seen.has(p)) errors.push(`skills: ${s.id} lists ${p} twice`);
      seen.add(p);
    }
  }
  // Cycle check: depth-first search with colours.
  const state = new Map<string, 1 | 2>();
  const visit = (id: string, path: string[]) => {
    if (state.get(id) === 2) return;
    if (state.get(id) === 1) {
      errors.push(`skills: prerequisite cycle ${[...path.slice(path.indexOf(id)), id].join(" -> ")}`);
      return;
    }
    state.set(id, 1);
    for (const p of byId.get(id)?.prereqs ?? []) if (byId.has(p)) visit(p, [...path, id]);
    state.set(id, 2);
  };
  for (const s of map) visit(s.id, []);
  return errors;
}

/** Every skill that `id` builds on, directly or not, nearest first. */
export function prerequisiteChain(map: SkillSeed[], id: string): string[] {
  const byId = new Map(map.map((s) => [s.id, s]));
  const out: string[] = [];
  const seen = new Set([id]);
  let frontier = [id];
  while (frontier.length > 0) {
    const next: string[] = [];
    for (const f of frontier)
      for (const p of byId.get(f)?.prereqs ?? [])
        if (!seen.has(p)) {
          seen.add(p);
          out.push(p);
          next.push(p);
        }
    frontier = next;
  }
  return out;
}
