import { t, type CourseSeed } from "../../../types";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const geometryGrade12: CourseSeed = {
  subject: "geometry",
  grade: 12,
  title: t("Geometry · Grade 12", "Երկրաչափություն · 12-րդ դասարան", "Геометрия · 12 класс"),
  description: t("Final Armenian year: combinations of solids, inscribed and circumscribed spheres, deeper coordinate and vector methods, systematic exam review of planimetry and stereometry.", "Հայաստանի ավարտական տարի՝ մարմինների համակցություններ, ներգծյալ և արտագծյալ սֆերաներ, կոորդինատային և վեկտորային եղանակների խորացում, հարթաչափության և տարածաչափության համակարգված ամփոփում։", "Выпускной год в Армении: комбинации тел, вписанные и описанные сферы, углублённые координатный и векторный методы, системное повторение планиметрии и стереометрии."),
  curriculumNotes: notes(
    ["Armenia grade 12 (2 h/week): combinations of polyhedra and round bodies, inscribed and circumscribed spheres, distances and angles in space by coordinates, review of planimetry for the unified exam.", "Հայաստան, 12-րդ դասարան (2 ժ/շաբ.)՝ բազմանիստների և պտտման մարմինների համակցություններ, ներգծյալ և արտագծյալ սֆերաներ, հեռավորություններ և անկյուններ տարածության մեջ կոորդինատներով, հարթաչափության ամփոփում միասնական քննության համար։", "Армения, 12 класс (2 ч/нед.): комбинации многогранников и тел вращения, вписанные и описанные сферы, расстояния и углы в пространстве через координаты, повторение планиметрии к единому экзамену."],
    ["No Russian grade 12. Corresponds to advanced-level ЕГЭ stereometry (task 14) and planimetry (task 17) preparation at the end of Russian grade 11.", "Ռուսաստանում 12-րդ դասարան չկա։ Համապատասխանում է ЕГЭ պրոֆիլային տարածաչափության (14-րդ խնդիր) և հարթաչափության (17-րդ խնդիր) նախապատրաստությանը։", "В России 12 класса нет. Соответствует подготовке к стереометрии (задание 14) и планиметрии (задание 17) профильного ЕГЭ в конце 11 класса."],
  ),
  hoursPerWeek: { armenia: 2, russia: null },
  units: [unit1, unit2, unit3],
};
