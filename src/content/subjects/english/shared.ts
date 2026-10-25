import { t, type CourseSeed, type UnitSeed } from "../../types";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const course = (
  grade: number,
  description: [string, string, string],
  am: [string, string, string],
  ru: [string, string, string],
  hours: { armenia: number | null; russia: number | null },
  units: UnitSeed[],
): CourseSeed => ({
  subject: "english",
  grade,
  title: t(`English · Grade ${grade}`, `Անգլերեն · ${grade}-րդ դասարան`, `Английский язык · ${grade} класс`),
  description: t(...description),
  curriculumNotes: notes(am, ru),
  hoursPerWeek: hours,
  units,
});
