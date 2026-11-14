import { HOWTO_META, type Safety } from "@/content/subjects/howto/meta";
import type { I18nText } from "./db/schema";
import { getCourse, getCourses } from "./queries";

export type HowtoCard = { grade: number; slug: string; title: I18nText; minutes: number | null; emoji: string; safety: Safety | null };

/** Every published how-to lesson, grade by grade, with its emoji and safety level. */
export async function getHowtos(): Promise<HowtoCard[]> {
  const courses = await getCourses({ subjectId: "howto" });
  const full = await Promise.all(courses.map((c) => getCourse("howto", c.course.grade)));
  return full.flatMap((c) =>
    !c
      ? []
      : c.units.flatMap((u) =>
          u.lessons
            .filter((l) => l.status === "published")
            .map((l) => ({
              grade: c.course.grade,
              slug: l.slug,
              title: l.title,
              minutes: l.durationMin,
              // Lessons an admin adds get a default look.
              emoji: HOWTO_META[l.slug]?.emoji ?? "🧭",
              safety: HOWTO_META[l.slug]?.safety ?? null,
            })),
        ),
  );
}

/** Age bands for the hub page: grades → ages (pupils start school at 6). */
export const HOWTO_BANDS = [
  { id: "little", grades: [1, 2, 3] },
  { id: "young", grades: [4, 5, 6] },
  { id: "teen", grades: [7, 8, 9] },
  { id: "ready", grades: [10, 11, 12] },
] as const;
