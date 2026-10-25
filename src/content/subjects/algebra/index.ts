import { t, unit, type CourseSeed } from "../../types";
import { algebraGrade7 } from "./grade-7";
import { algebraGrade8 } from "./grade-8";
import { algebraGrade9 } from "./grade-9";
import { algebraGrade10 } from "./grade-10";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const algebra: CourseSeed[] = [
  algebraGrade7,
  algebraGrade8,
  algebraGrade9,
  algebraGrade10,
  {
    subject: "algebra",
    grade: 11,
    title: t("Algebra · Grade 11", "Հանրահաշիվ · 11-րդ դասարան", "Алгебра · 11 класс"),
    description: t("Derivative and its applications, exponential and logarithmic functions, integral, combinatorics and probability.", "Ածանցյալ և նրա կիրառություններ, ցուցչային և լոգարիթմական ֆունկցիաներ, ինտեգրալ, կոմբինատորիկա և հավանականություն։", "Производная и её применение, показательная и логарифмическая функции, интеграл, комбинаторика и вероятность."),
    curriculumNotes: notes(
      ["Armenia grade 11 (3–5 h/week): derivative, its geometric and physical meaning, investigating functions, exponential and logarithmic functions and equations, antiderivative and integral, areas, combinatorics and probability.", "Հայաստան, 11-րդ դասարան (3–5 ժ/շաբ.)՝ ածանցյալ, նրա երկրաչափական և ֆիզիկական իմաստը, ֆունկցիաների հետազոտում, ցուցչային և լոգարիթմական ֆունկցիաներ ու հավասարումներ, նախնական և ինտեգրալ, մակերեսներ, կոմբինատորիկա և հավանականություն։", "Армения, 11 класс (3–5 ч/нед.): производная, её геометрический и физический смысл, исследование функций, показательная и логарифмическая функции и уравнения, первообразная и интеграл, площади, комбинаторика и вероятность."],
      ["Russia grade 11 (ФГОС СОО, final year, ends with ЕГЭ): derivative and its applications, integral, exponential and logarithmic functions and equations, elements of combinatorics, statistics and probability. Armenian grade 11 ≈ Russian grade 11 for analysis; Armenian grade 12 adds review and depth.", "Ռուսաստան, 11-րդ դասարան (ФГОС СОО, ավարտական, ЕГЭ)՝ ածանցյալ և կիրառություններ, ինտեգրալ, ցուցչային և լոգարիթմական ֆունկցիաներ ու հավասարումներ, կոմբինատորիկա, վիճակագրություն, հավանականություն։", "Россия, 11 класс (ФГОС СОО, выпускной, ЕГЭ): производная и её применения, интеграл, показательная и логарифмическая функции и уравнения, элементы комбинаторики, статистики и вероятности. Армянский 11 класс ≈ российскому 11-му по анализу; армянский 12-й добавляет повторение и углубление."],
    ),
    hoursPerWeek: { armenia: 4, russia: 3 },
    units: [
      unit(t("Derivative", "Ածանցյալ", "Производная"), t("Definition, rules of differentiation, derivatives of elementary functions, tangent line.", "Սահմանում, ածանցման կանոններ, տարրական ֆունկցիաների ածանցյալներ, շոշափող։", "Определение, правила дифференцирования, производные элементарных функций, касательная."), [
        ["derivative-definition", "Definition of the derivative", "Ածանցյալի սահմանումը", "Определение производной"],
        ["differentiation-rules", "Rules of differentiation", "Ածանցման կանոնները", "Правила дифференцирования"],
        ["derivative-power-trig", "Derivatives of power and trigonometric functions", "Աստիճանային և եռանկյունաչափական ֆունկցիաների ածանցյալներ", "Производные степенной и тригонометрических функций"],
        ["chain-rule", "Derivative of a composite function", "Բարդ ֆունկցիայի ածանցյալ", "Производная сложной функции"],
        ["tangent-line", "Geometric meaning: the tangent line", "Երկրաչափական իմաստ․ շոշափող", "Геометрический смысл: уравнение касательной"],
      ]),
      unit(t("Applications of the derivative", "Ածանցյալի կիրառություններ", "Применение производной"), t("Monotonicity, extrema, investigating and sketching functions, optimisation.", "Մոնոտոնություն, էքստրեմումներ, ֆունկցիայի հետազոտում և գրաֆիկի կառուցում, օպտիմալացում։", "Монотонность, экстремумы, исследование функций и построение графиков, задачи на оптимум."), [
        ["increasing-decreasing", "Increasing and decreasing functions", "Աճող և նվազող ֆունկցիաներ", "Возрастание и убывание функции"],
        ["extrema", "Maxima and minima", "Մաքսիմում և մինիմում", "Экстремумы функции"],
        ["sketching-functions", "Investigating a function with the derivative", "Ֆունկցիայի հետազոտում ածանցյալով", "Исследование функции с помощью производной"],
        ["max-min-on-interval", "Largest and smallest value on an interval", "Ամենամեծ և ամենափոքր արժեքը հատվածում", "Наибольшее и наименьшее значение на отрезке"],
        ["optimisation", "Optimisation problems", "Օպտիմալացման խնդիրներ", "Задачи на наибольшее и наименьшее значение"],
      ]),
      unit(t("Exponential function", "Ցուցչային ֆունկցիա", "Показательная функция"), t("Properties and graph, exponential equations and inequalities, systems.", "Հատկություններ և գրաֆիկ, ցուցչային հավասարումներ և անհավասարություններ, համակարգեր։", "Свойства и график, показательные уравнения и неравенства, системы."), [
        ["exponential-function", "The exponential function and its graph", "Ցուցչային ֆունկցիան և նրա գրաֆիկը", "Показательная функция, её свойства и график"],
        ["exponential-equations", "Exponential equations", "Ցուցչային հավասարումներ", "Показательные уравнения"],
        ["exponential-inequalities", "Exponential inequalities", "Ցուցչային անհավասարություններ", "Показательные неравенства"],
        ["exponential-growth", "Exponential growth and decay in real life", "Ցուցչային աճ և նվազում կյանքում", "Экспоненциальный рост и убывание в жизни"],
      ]),
      unit(t("Logarithms", "Լոգարիթմներ", "Логарифмы"), t("Definition, properties, change of base, logarithmic function, equations and inequalities.", "Սահմանում, հատկություններ, հիմքի փոխում, լոգարիթմական ֆունկցիա, հավասարումներ և անհավասարություններ։", "Определение, свойства, переход к новому основанию, логарифмическая функция, уравнения и неравенства."), [
        ["logarithm-definition", "Definition of the logarithm", "Լոգարիթմի սահմանումը", "Определение логарифма"],
        ["logarithm-properties", "Properties of logarithms", "Լոգարիթմների հատկությունները", "Свойства логарифмов"],
        ["change-of-base", "Decimal and natural logarithms; change of base", "Տասնորդական և բնական լոգարիթմ, հիմքի փոխում", "Десятичные и натуральные логарифмы; переход к новому основанию"],
        ["logarithmic-function", "The logarithmic function", "Լոգարիթմական ֆունկցիա", "Логарифмическая функция"],
        ["logarithmic-equations", "Logarithmic equations", "Լոգարիթմական հավասարումներ", "Логарифмические уравнения"],
        ["logarithmic-inequalities", "Logarithmic inequalities", "Լոգարիթմական անհավասարություններ", "Логарифмические неравенства"],
      ]),
      unit(t("Integral", "Ինտեգրալ", "Интеграл"), t("Antiderivative, rules, definite integral, area of a curvilinear trapezium.", "Նախնական, կանոններ, որոշյալ ինտեգրալ, կորագիծ սեղանի մակերես։", "Первообразная, правила, определённый интеграл, площадь криволинейной трапеции."), [
        ["antiderivative", "The antiderivative", "Նախնական", "Первообразная"],
        ["antiderivative-rules", "Rules for finding antiderivatives", "Նախնականի գտնելու կանոնները", "Правила нахождения первообразных"],
        ["definite-integral", "Area and the definite integral", "Մակերես և որոշյալ ինտեգրալ", "Площадь криволинейной трапеции и интеграл"],
        ["newton-leibniz", "Newton–Leibniz formula and applications", "Նյուտոն–Լայբնիցի բանաձև և կիրառություններ", "Формула Ньютона–Лейбница и применения"],
      ]),
      unit(t("Combinatorics, probability and statistics", "Կոմբինատորիկա, հավանականություն, վիճակագրություն", "Комбинаторика, вероятность и статистика"), t("Binomial theorem, probability of events, independent events, random variables.", "Նյուտոնի բինոմ, պատահույթների հավանականություն, անկախ պատահույթներ, պատահական մեծություններ։", "Бином Ньютона, вероятность событий, независимые события, случайные величины."), [
        ["binomial-theorem", "Newton's binomial", "Նյուտոնի բինոմ", "Бином Ньютона"],
        ["probability-rules", "Addition and multiplication of probabilities", "Հավանականությունների գումարում և բազմապատկում", "Сложение и умножение вероятностей"],
        ["conditional-probability", "Conditional probability and independence", "Պայմանական հավանականություն և անկախություն", "Условная вероятность и независимость"],
        ["random-variables", "Random variables and expected value", "Պատահական մեծություններ և մաթեմատիկական սպասում", "Случайные величины и математическое ожидание"],
      ]),
    ],
  },
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
