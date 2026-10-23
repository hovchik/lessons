import { t, unit, type CourseSeed } from "../../types";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const mathGrade6: CourseSeed = {
  subject: "math",
  grade: 6,
  title: t("Mathematics · Grade 6", "Մաթեմատիկա · 6-րդ դասարան", "Математика · 6 класс"),
  description: t(
    "Ratios and proportion, rational numbers (negative numbers), equations, coordinates, and preparation for algebra and geometry.",
    "Հարաբերություն և համեմատություն, ռացիոնալ (բացասական) թվեր, հավասարումներ, կոորդինատներ, նախապատրաստություն հանրահաշվին և երկրաչափությանը։",
    "Отношения и пропорции, рациональные (отрицательные) числа, уравнения, координаты, подготовка к алгебре и геометрии.",
  ),
  curriculumNotes: notes(
    ["Armenia grade 6: fractions review, ratios, proportions and percentages, integers and rational numbers, operations with rational numbers, linear equations, coordinate plane, circle and circumference, symmetry. Last year before algebra and geometry split.", "Հայաստան, 6-րդ դասարան՝ կոտորակների ամփոփում, հարաբերություն, համեմատություն, տոկոս, ամբողջ և ռացիոնալ թվեր, գործողություններ դրանց հետ, գծային հավասարումներ, կոորդինատային հարթություն, շրջանագիծ, համաչափություն։ Վերջին տարին մինչև հանրահաշվի և երկրաչափության բաժանումը։", "Армения, 6 класс: повторение дробей, отношения, пропорции и проценты, целые и рациональные числа, действия с ними, линейные уравнения, координатная плоскость, окружность, симметрия. Последний год перед разделением на алгебру и геометрию."],
    ["Russia grade 6 (ФГОС ООО, 5 h/week, 175 h): divisibility, fractions with different denominators, ratios and proportions, scale, circle and circumference, positive and negative numbers, rational numbers, solving equations, coordinate plane, statistics basics.", "Ռուսաստան, 6-րդ դասարան (ФГОС ООО, 5 ժ/շաբ.)՝ բաժանելիություն, տարբեր հայտարարով կոտորակներ, հարաբերություն և համեմատություն, մասշտաբ, շրջանագիծ, դրական և բացասական թվեր, ռացիոնալ թվեր, հավասարումներ, կոորդինատային հարթություն, վիճակագրության հիմունքներ։", "Россия, 6 класс (ФГОС ООО, 5 ч/нед., 175 ч): делимость, дроби с разными знаменателями, отношения и пропорции, масштаб, окружность и круг, положительные и отрицательные числа, рациональные числа, решение уравнений, координатная плоскость, элементы статистики."],
  ),
  hoursPerWeek: { armenia: 5, russia: 5 },
  units: [
    unit(t("Fractions: review and extension", "Կոտորակներ․ ամփոփում և զարգացում", "Дроби: повторение и развитие"), t("Operations with fractions of different denominators; fraction of a number and number by fraction.", "Տարբեր հայտարարով կոտորակների գործողություններ, թվի մաս և թիվ իր մասով։", "Действия с дробями с разными знаменателями; дробь от числа и число по дроби."), [
      ["lcm-denominators", "Reducing to a common denominator with LCM", "Ընդհանուր հայտարարի բերել ՓԸԲ-ով", "Приведение к общему знаменателю через НОК"],
      ["fraction-of-number", "Finding a fraction of a number", "Թվի մասի գտնելը", "Нахождение дроби от числа"],
      ["number-by-fraction", "Finding a number by its fraction", "Թվի գտնելն իր մասով", "Нахождение числа по его дроби"],
      ["reciprocals", "Reciprocal numbers", "Փոխհակադարձ թվեր", "Взаимно обратные числа"],
      ["fraction-expressions", "Fractional expressions", "Կոտորակային արտահայտություններ", "Дробные выражения"],
    ]),
    unit(t("Ratios and proportions", "Հարաբերություն և համեմատություն", "Отношения и пропорции"), t("Ratio, proportion and its basic property, direct and inverse proportionality, scale.", "Հարաբերություն, համեմատություն և նրա հիմնական հատկությունը, ուղիղ և հակադարձ համեմատականություն, մասշտաբ։", "Отношение, пропорция и её основное свойство, прямая и обратная пропорциональность, масштаб."), [
      ["ratio", "Ratios", "Հարաբերություն", "Отношения"],
      ["proportion", "Proportions and the cross-product rule", "Համեմատություն և նրա հիմնական հատկությունը", "Пропорции и основное свойство пропорции"],
      ["direct-inverse", "Direct and inverse proportionality", "Ուղիղ և հակադարձ համեմատականություն", "Прямая и обратная пропорциональность"],
      ["scale", "Scale on maps and drawings", "Մասշտաբ քարտեզների և գծագրերի վրա", "Масштаб"],
      ["circumference-area", "Circumference and area of a circle", "Շրջանագծի երկարություն և շրջանի մակերես", "Длина окружности и площадь круга"],
    ]),
    unit(t("Positive and negative numbers", "Դրական և բացասական թվեր", "Положительные и отрицательные числа"), t("Coordinates on a line, opposite numbers, absolute value, comparison.", "Կոորդինատներ ուղղի վրա, հակադիր թվեր, բացարձակ արժեք, համեմատում։", "Координаты на прямой, противоположные числа, модуль, сравнение."), [
      ["coordinate-line", "The coordinate line", "Կոորդինատային ուղիղ", "Координатная прямая"],
      ["opposite-numbers", "Opposite numbers and integers", "Հակադիր թվեր և ամբողջ թվեր", "Противоположные числа и целые числа"],
      ["absolute-value", "Absolute value (modulus)", "Թվի մոդուլ", "Модуль числа"],
      ["compare-rationals", "Comparing rational numbers", "Ռացիոնալ թվերի համեմատում", "Сравнение рациональных чисел"],
    ]),
    unit(t("Operations with rational numbers", "Գործողություններ ռացիոնալ թվերով", "Действия с рациональными числами"), t("Adding, subtracting, multiplying and dividing numbers with different signs.", "Տարբեր նշանի թվերի գումարում, հանում, բազմապատկում, բաժանում։", "Сложение, вычитание, умножение и деление чисел с разными знаками."), [
      ["add-negatives", "Adding negative numbers", "Բացասական թվերի գումարում", "Сложение отрицательных чисел"],
      ["add-different-signs", "Adding numbers with different signs", "Տարբեր նշանի թվերի գումարում", "Сложение чисел с разными знаками"],
      ["subtract-rationals", "Subtraction", "Հանում", "Вычитание"],
      ["multiply-rationals", "Multiplication: the sign rules", "Բազմապատկում․ նշանների կանոնները", "Умножение: правила знаков"],
      ["divide-rationals", "Division", "Բաժանում", "Деление"],
      ["rational-properties", "Properties of operations with rational numbers", "Գործողությունների հատկությունները ռացիոնալ թվերով", "Свойства действий с рациональными числами"],
    ]),
    unit(t("Expressions and equations", "Արտահայտություններ և հավասարումներ", "Выражения и уравнения"), t("Opening brackets, like terms, linear equations and problems solved with equations.", "Փակագծերի բացում, նման անդամներ, գծային հավասարումներ և խնդիրներ հավասարումներով։", "Раскрытие скобок, подобные слагаемые, линейные уравнения и задачи на составление уравнений."), [
      ["opening-brackets", "Opening brackets", "Փակագծերի բացում", "Раскрытие скобок"],
      ["coefficient-like-terms", "Coefficient and like terms", "Գործակից և նման անդամներ", "Коэффициент и подобные слагаемые"],
      ["solving-linear-equations", "Solving equations", "Հավասարումների լուծում", "Решение уравнений"],
      ["problems-with-equations", "Word problems solved with equations", "Խնդիրների լուծում հավասարումների միջոցով", "Решение задач с помощью уравнений"],
    ]),
    unit(t("Coordinates and geometry", "Կոորդինատներ և երկրաչափություն", "Координаты и геометрия"), t("Perpendicular and parallel lines, the coordinate plane, graphs, symmetry.", "Ուղղահայաց և զուգահեռ ուղիղներ, կոորդինատային հարթություն, գրաֆիկներ, համաչափություն։", "Перпендикулярные и параллельные прямые, координатная плоскость, графики, симметрия."), [
      ["perpendicular-parallel", "Perpendicular and parallel lines", "Ուղղահայաց և զուգահեռ ուղիղներ", "Перпендикулярные и параллельные прямые"],
      ["coordinate-plane", "The coordinate plane", "Կոորդինատային հարթություն", "Координатная плоскость"],
      ["reading-graphs", "Reading graphs and diagrams", "Գրաֆիկների և դիագրամների ընթերցում", "Чтение графиков и диаграмм"],
      ["symmetry", "Axial and central symmetry", "Առանցքային և կենտրոնային համաչափություն", "Осевая и центральная симметрия"],
      ["grade6-review", "Review: ready for algebra and geometry", "Ամփոփում․ պատրաստ ենք հանրահաշվին և երկրաչափությանը", "Повторение: готовимся к алгебре и геометрии"],
    ]),
  ],
};
