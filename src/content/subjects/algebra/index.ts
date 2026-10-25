import { t, unit, type CourseSeed } from "../../types";
import { algebraGrade7 } from "./grade-7";
import { algebraGrade8 } from "./grade-8";
import { algebraGrade9 } from "./grade-9";
import { algebraGrade10 } from "./grade-10";
import { algebraGrade11 } from "./grade-11";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const algebra: CourseSeed[] = [
  algebraGrade7,
  algebraGrade8,
  algebraGrade9,
  algebraGrade10,
  algebraGrade11,
  {
    subject: "algebra",
    grade: 12,
    title: t("Algebra · Grade 12", "Հանրահաշիվ · 12-րդ դասարան", "Алгебра · 12 класс"),
    description: t("Final year of Armenian high school: complex numbers, equations and inequalities with parameters, deeper analysis, and systematic review for the state exam.", "Հայաստանի ավագ դպրոցի ավարտական տարի՝ կոմպլեքս թվեր, պարամետրով հավասարումներ և անհավասարություններ, անալիզի խորացում, պետական քննության համակարգված ամփոփում։", "Выпускной год армянской старшей школы: комплексные числа, уравнения и неравенства с параметром, углубление анализа, систематическое повторение к государственному экзамену."),
    curriculumNotes: notes(
      ["Armenia grade 12 (final; the unified state exam in mathematics replaces the school exam for university entry): complex numbers, polynomials and higher-degree equations, parameters, elements of analysis review, probability and statistics, systematic exam preparation.", "Հայաստան, 12-րդ դասարան (ավարտական, միասնական քննություն մաթեմատիկայից)՝ կոմպլեքս թվեր, բազմանդամներ և բարձր աստիճանի հավասարումներ, պարամետրեր, անալիզի ամփոփում, հավանականություն և վիճակագրություն, քննության համակարգված նախապատրաստություն։", "Армения, 12 класс (выпускной, единый экзамен по математике): комплексные числа, многочлены и уравнения высших степеней, параметры, повторение анализа, вероятность и статистика, системная подготовка к экзамену."],
      ["Russia has no grade 12: this content corresponds to the end of Russian grade 11 (advanced level) and to first-year university preparatory material. ЕГЭ profile-level topics (parameters, complex numbers in advanced programmes) are covered here.", "Ռուսաստանում 12-րդ դասարան չկա․ այս բովանդակությունը համապատասխանում է ռուսական 11-րդ դասարանի խորացված մակարդակին և ЕГЭ պրոֆիլային թեմաներին (պարամետրեր, կոմպլեքս թվեր)։", "В России 12 класса нет: это содержание соответствует концу 11 класса углублённого уровня и профильному ЕГЭ (параметры, комплексные числа в углублённых программах)."],
    ),
    hoursPerWeek: { armenia: 4, russia: null },
    units: [
      unit(t("Complex numbers", "Կոմպլեքս թվեր", "Комплексные числа"), t("Imaginary unit, algebraic and trigonometric form, operations, roots.", "Կեղծ միավոր, հանրահաշվական և եռանկյունաչափական տեսք, գործողություններ, արմատներ։", "Мнимая единица, алгебраическая и тригонометрическая форма, действия, корни."), [
        ["imaginary-unit", "The imaginary unit and complex numbers", "Կեղծ միավոր և կոմպլեքս թվեր", "Мнимая единица и комплексные числа"],
        ["complex-operations", "Operations in algebraic form", "Գործողություններ հանրահաշվական տեսքով", "Действия в алгебраической форме"],
        ["complex-plane", "The complex plane and modulus", "Կոմպլեքս հարթություն և մոդուլ", "Комплексная плоскость и модуль"],
        ["trigonometric-form", "Trigonometric form and De Moivre's formula", "Եռանկյունաչափական տեսք և Մուավրի բանաձև", "Тригонометрическая форма и формула Муавра"],
        ["quadratic-complex-roots", "Quadratic equations with complex roots", "Քառակուսային հավասարումներ կոմպլեքս արմատներով", "Квадратные уравнения с комплексными корнями"],
      ]),
      unit(t("Polynomials and equations of higher degree", "Բազմանդամներ և բարձր աստիճանի հավասարումներ", "Многочлены и уравнения высших степеней"), t("Division of polynomials, Bezout's theorem, rational roots, symmetric equations.", "Բազմանդամների բաժանում, Բեզուի թեորեմ, ռացիոնալ արմատներ, սիմետրիկ հավասարումներ։", "Деление многочленов, теорема Безу, рациональные корни, симметрические уравнения."), [
        ["polynomial-division", "Dividing polynomials", "Բազմանդամների բաժանում", "Деление многочленов"],
        ["bezout", "Bezout's theorem and Horner's scheme", "Բեզուի թեորեմ և Հորների սխեմա", "Теорема Безу и схема Горнера"],
        ["rational-roots", "Rational roots of a polynomial", "Բազմանդամի ռացիոնալ արմատներ", "Рациональные корни многочлена"],
        ["symmetric-equations", "Symmetric and reciprocal equations", "Սիմետրիկ հավասարումներ", "Симметрические и возвратные уравнения"],
      ]),
      unit(t("Equations and inequalities with parameters", "Պարամետրով հավասարումներ և անհավասարություններ", "Уравнения и неравенства с параметром"), t("Linear and quadratic problems with parameters, graphical method.", "Գծային և քառակուսային խնդիրներ պարամետրով, գրաֆիկական եղանակ։", "Линейные и квадратные задачи с параметром, графический метод."), [
        ["linear-parameters", "Linear equations with a parameter", "Պարամետրով գծային հավասարումներ", "Линейные уравнения с параметром"],
        ["quadratic-parameters", "Quadratic equations with a parameter", "Պարամետրով քառակուսային հավասարումներ", "Квадратные уравнения с параметром"],
        ["roots-location", "Location of roots of a quadratic", "Քառակուսային եռանդամի արմատների դիրքը", "Расположение корней квадратного трёхчлена"],
        ["graphical-parameters", "Graphical method for parameters", "Պարամետրերի գրաֆիկական եղանակ", "Графический метод в задачах с параметром"],
      ]),
      unit(t("Deeper analysis", "Անալիզի խորացում", "Углубление анализа"), t("Second derivative and convexity, asymptotes, integrals in physics, differential equations idea.", "Երկրորդ ածանցյալ և ուռուցիկություն, ասիմպտոտներ, ինտեգրալը ֆիզիկայում, դիֆերենցիալ հավասարման գաղափար։", "Вторая производная и выпуклость, асимптоты, интеграл в физике, идея дифференциального уравнения."), [
        ["second-derivative", "Second derivative, convexity, inflection", "Երկրորդ ածանցյալ, ուռուցիկություն, շրջման կետ", "Вторая производная, выпуклость, точки перегиба"],
        ["asymptotes", "Asymptotes and full investigation of a function", "Ասիմպտոտներ և ֆունկցիայի լրիվ հետազոտում", "Асимптоты и полное исследование функции"],
        ["integral-applications", "Integral in geometry and physics", "Ինտեգրալը երկրաչափության և ֆիզիկայում", "Применения интеграла в геометрии и физике"],
        ["differential-equations-idea", "Simple differential equations", "Պարզ դիֆերենցիալ հավասարումներ", "Простейшие дифференциальные уравнения"],
      ]),
      unit(t("Exam preparation", "Քննության նախապատրաստություն", "Подготовка к экзамену"), t("Systematic review of all topics with mixed problem sets.", "Բոլոր թեմաների համակարգված ամփոփում խառը խնդիրներով։", "Системное повторение всех тем со смешанными наборами задач."), [
        ["review-expressions", "Review: expressions and transformations", "Ամփոփում․ արտահայտություններ և ձևափոխություններ", "Повторение: выражения и преобразования"],
        ["review-equations", "Review: equations and systems", "Ամփոփում․ հավասարումներ և համակարգեր", "Повторение: уравнения и системы"],
        ["review-inequalities", "Review: inequalities", "Ամփոփում․ անհավասարություններ", "Повторение: неравенства"],
        ["review-functions", "Review: functions and graphs", "Ամփոփում․ ֆունկցիաներ և գրաֆիկներ", "Повторение: функции и графики"],
        ["review-word-problems", "Review: word problems", "Ամփոփում․ տեքստային խնդիրներ", "Повторение: текстовые задачи"],
        ["mock-exam", "Mock exam", "Փորձնական քննություն", "Пробный экзамен"],
      ]),
    ],
  },
];
