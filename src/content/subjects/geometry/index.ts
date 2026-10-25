import { t, unit, type CourseSeed } from "../../types";
import { geometryGrade7 } from "./grade-7";
import { geometryGrade8 } from "./grade-8";
import { geometryGrade9 } from "./grade-9";
import { geometryGrade10 } from "./grade-10";
import { geometryGrade11 } from "./grade-11";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const geometry: CourseSeed[] = [
  geometryGrade7,
  geometryGrade8,
  geometryGrade9,
  geometryGrade10,
  geometryGrade11,
  {
    subject: "geometry",
    grade: 12,
    title: t("Geometry · Grade 12", "Երկրաչափություն · 12-րդ դասարան", "Геометрия · 12 класс"),
    description: t("Final Armenian year: combinations of solids, inscribed and circumscribed spheres, deeper coordinate and vector methods, systematic exam review of planimetry and stereometry.", "Հայաստանի ավարտական տարի՝ մարմինների համակցություններ, ներգծյալ և արտագծյալ սֆերաներ, կոորդինատային և վեկտորային եղանակների խորացում, հարթաչափության և տարածաչափության համակարգված ամփոփում։", "Выпускной год в Армении: комбинации тел, вписанные и описанные сферы, углублённые координатный и векторный методы, системное повторение планиметрии и стереометрии."),
    curriculumNotes: notes(
      ["Armenia grade 12 (2 h/week): combinations of polyhedra and round bodies, inscribed and circumscribed spheres, distances and angles in space by coordinates, review of planimetry for the unified exam.", "Հայաստան, 12-րդ դասարան (2 ժ/շաբ.)՝ բազմանիստների և պտտման մարմինների համակցություններ, ներգծյալ և արտագծյալ սֆերաներ, հեռավորություններ և անկյուններ տարածության մեջ կոորդինատներով, հարթաչափության ամփոփում միասնական քննության համար։", "Армения, 12 класс (2 ч/нед.): комбинации многогранников и тел вращения, вписанные и описанные сферы, расстояния и углы в пространстве через координаты, повторение планиметрии к единому экзамену."],
      ["No Russian grade 12. Corresponds to advanced-level ЕГЭ stereometry (task 14) and planimetry (task 17) preparation at the end of Russian grade 11.", "Ռուսաստանում 12-րդ դասարան չկա։ Համապատասխանում է ЕГЭ պրոֆիլային տարածաչափության (14-րդ խնդիր) և հարթաչափության (17-րդ խնդիր) նախապատրաստությանը։", "В России 12 класса нет. Соответствует подготовке к стереометрии (задание 14) и планиметрии (задание 17) профильного ЕГЭ в конце 11 класса."],
    ),
    hoursPerWeek: { armenia: 2, russia: null },
    units: [
      unit(t("Combinations of solids", "Մարմինների համակցություններ", "Комбинации тел"), t("Spheres inscribed in and circumscribed about polyhedra, cylinders and cones; prisms in cylinders.", "Բազմանիստների, գլանների և կոնների ներգծյալ և արտագծյալ սֆերաներ, պրիզմաներ գլանների մեջ։", "Сферы, вписанные в многогранники, цилиндры и конусы и описанные около них; призмы в цилиндрах."), [
        ["sphere-polyhedron", "Sphere inscribed in and circumscribed about a polyhedron", "Բազմանիստի ներգծյալ և արտագծյալ սֆերա", "Сфера, вписанная в многогранник и описанная около него"],
        ["sphere-cylinder-cone", "Sphere with cylinder and cone", "Սֆերա գլանի և կոնի հետ", "Сфера с цилиндром и конусом"],
        ["prism-cylinder", "Prism and cylinder; pyramid and cone", "Պրիզմա և գլան, բուրգ և կոն", "Призма и цилиндр; пирамида и конус"],
      ]),
      unit(t("Distances and angles in space", "Հեռավորություններ և անկյուններ տարածության մեջ", "Расстояния и углы в пространстве"), t("Distance between skew lines, from a point to a plane, angles between planes — by coordinates and by construction.", "Խաչվող ուղիղների միջև, կետից հարթություն հեռավորություն, հարթությունների միջև անկյուն՝ կոորդինատներով և կառուցմամբ։", "Расстояние между скрещивающимися прямыми, от точки до плоскости, углы между плоскостями — координатами и построением."), [
        ["distance-point-plane", "Distance from a point to a plane", "Կետից հարթություն հեռավորություն", "Расстояние от точки до плоскости"],
        ["distance-skew-lines", "Distance between skew lines", "Խաչվող ուղիղների միջև հեռավորություն", "Расстояние между скрещивающимися прямыми"],
        ["angle-planes", "Angle between planes; normal vector", "Հարթությունների միջև անկյուն, նորմալ վեկտոր", "Угол между плоскостями; вектор нормали"],
        ["section-areas", "Areas of sections", "Հատույթների մակերեսներ", "Площади сечений"],
      ]),
      unit(t("Planimetry review", "Հարթաչափության ամփոփում", "Повторение планиметрии"), t("Triangles, circles, quadrilaterals, areas — exam-level problems.", "Եռանկյուններ, շրջանագծեր, քառանկյուններ, մակերեսներ՝ քննական մակարդակի խնդիրներ։", "Треугольники, окружности, четырёхугольники, площади — задачи экзаменационного уровня."), [
        ["review-triangles", "Review: triangles and their points", "Ամփոփում․ եռանկյուններ և դրանց կետերը", "Повторение: треугольники и их точки"],
        ["review-circles", "Review: circles, tangents, inscribed angles", "Ամփոփում․ շրջանագծեր, շոշափողներ, ներգծյալ անկյուններ", "Повторение: окружности, касательные, вписанные углы"],
        ["review-quadrilaterals", "Review: quadrilaterals and areas", "Ամփոփում․ քառանկյուններ և մակերեսներ", "Повторение: четырёхугольники и площади"],
        ["review-stereometry", "Review: stereometry", "Ամփոփում․ տարածաչափություն", "Повторение: стереометрия"],
        ["geometry-mock-exam", "Mock exam", "Փորձնական քննություն", "Пробный экзамен"],
      ]),
    ],
  },
];
