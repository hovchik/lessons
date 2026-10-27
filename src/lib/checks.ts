/**
 * Quick checks are ~~~sim blocks whose spec starts with `check` (see
 * src/content/visuals/ask.ts). Each language of a lesson has the same checks in
 * the same order, so a check is addressed by its position: `check:<lessonId>#<n>`.
 */

const CHECK_HEAD = /^(```|~~~)sim[ \t]*\n[ \t]*check\b([^\n]*)/gm;

export const checkItemId = (lessonId: string, index: number) => `check:${lessonId}#${index}`;

/** Adds `n=<position>` to every check in a lesson body, so the widget knows which one it is. */
export function numberChecks(md: string): string {
  let n = 0;
  return md.replace(CHECK_HEAD, (_m, fence: string, rest: string) => `${fence}sim\ncheck${rest} n=${n++}`);
}

/** The right option (from 0) of every check in a lesson body, in order. */
export function checkAnswers(md: string): number[] {
  return [...md.matchAll(CHECK_HEAD)].map((m) => {
    const answer = /(?:^|\s)answer=(\d+)/.exec(m[2]);
    return Number(answer?.[1] ?? 1) - 1;
  });
}
