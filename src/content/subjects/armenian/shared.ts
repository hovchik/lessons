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
  subject: "armenian",
  grade,
  title: t(`Armenian Language · Grade ${grade}`, `Հայոց լեզու · ${grade}-րդ դասարան`, `Армянский язык · ${grade} класс`),
  description: t(...description),
  curriculumNotes: notes(am, ru),
  hoursPerWeek: hours,
  units,
});

export const ruNote: [string, string, string] = [
  "Not part of the Russian federal curriculum. In Russia, Armenian is taught in Armenian Sunday schools and some community schools (Moscow, Krasnodar, Rostov); this course doubles as a heritage-language programme for the diaspora.",
  "Ռուսաստանի ֆեդերալ ծրագրի մաս չէ։ Ռուսաստանում հայերենը դասավանդվում է հայկական կիրակնօրյա և համայնքային դպրոցներում (Մոսկվա, Կրասնոդար, Ռոստով)․ այս դասընթացը ծառայում է նաև սփյուռքի մայրենիի ծրագրի համար։",
  "Не входит в федеральную программу России. В России армянский преподаётся в армянских воскресных и общинных школах (Москва, Краснодар, Ростов); этот курс служит и программой родного языка для диаспоры.",
];
