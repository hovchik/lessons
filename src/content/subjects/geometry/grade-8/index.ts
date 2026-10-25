import { t, type CourseSeed } from "../../../types";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const geometryGrade8: CourseSeed = {
    subject: "geometry",
    grade: 8,
    title: t("Geometry · Grade 8", "Երկրաչափություն · 8-րդ դասարան", "Геометрия · 8 класс"),
    description: t("Quadrilaterals, areas, the Pythagorean theorem, similar triangles, trigonometry of the right triangle, circles.", "Քառանկյուններ, մակերեսներ, Պյութագորասի թեորեմ, նման եռանկյուններ, ուղղանկյուն եռանկյան եռանկյունաչափություն, շրջանագիծ։", "Четырёхугольники, площади, теорема Пифагора, подобные треугольники, тригонометрия прямоугольного треугольника, окружность."),
    curriculumNotes: notes(
      ["Armenia grade 8 (2 h/week): polygons and quadrilaterals (parallelogram, rectangle, rhombus, square, trapezium), areas, Pythagorean theorem, similarity, sine/cosine/tangent of an acute angle, circle (tangent, inscribed angles, inscribed and circumscribed circles).", "Հայաստան, 8-րդ դասարան (2 ժ/շաբ.)՝ բազմանկյուններ և քառանկյուններ (զուգահեռագիծ, ուղղանկյուն, շեղանկյուն, քառակուսի, սեղան), մակերեսներ, Պյութագորասի թեորեմ, նմանություն, սուր անկյան սինուս/կոսինուս/տանգենս, շրջանագիծ (շոշափող, ներգծյալ անկյուններ, ներգծյալ և արտագծյալ շրջանագծեր)։", "Армения, 8 класс (2 ч/нед.): многоугольники и четырёхугольники (параллелограмм, прямоугольник, ромб, квадрат, трапеция), площади, теорема Пифагора, подобие, синус/косинус/тангенс острого угла, окружность (касательная, вписанные углы, вписанная и описанная окружности)."],
      ["Russia grade 8 (ФГОС ООО, 70 h): quadrilaterals, area, Pythagorean theorem, similar triangles, trigonometric ratios, circle, four remarkable points of a triangle. Identical core to Armenia.", "Ռուսաստան, 8-րդ դասարան (ФГОС ООО, 70 ժ)՝ քառանկյուններ, մակերես, Պյութագորասի թեորեմ, նման եռանկյուններ, եռանկյունաչափական հարաբերություններ, շրջանագիծ, եռանկյան չորս նշանավոր կետերը։ Միջուկը նույնն է, ինչ Հայաստանում։", "Россия, 8 класс (ФГОС ООО, 70 ч): четырёхугольники, площадь, теорема Пифагора, подобные треугольники, тригонометрические соотношения, окружность, четыре замечательные точки треугольника. Ядро совпадает с армянским."],
    ),
    hoursPerWeek: { armenia: 2, russia: 2 },
  units: [unit1, unit2, unit3, unit4],
};
