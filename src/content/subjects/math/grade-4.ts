import { t, unit, type CourseSeed } from "../../types";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const mathGrade4: CourseSeed = {
  subject: "math",
  grade: 4,
  title: t("Mathematics · Grade 4", "Մաթեմատիկա · 4-րդ դասարան", "Математика · 4 класс"),
  description: t(
    "Multi-digit numbers, written multiplication and division, speed problems, and the end-of-primary review.",
    "Բազմանիշ թվեր, գրավոր բազմապատկում և բաժանում, արագության խնդիրներ, տարրական դպրոցի ամփոփում։",
    "Многозначные числа, письменное умножение и деление, задачи на движение, итоговое повторение начальной школы.",
  ),
  curriculumNotes: notes(
    ["Armenia grade 4: numbers to a million, four operations with multi-digit numbers, speed/time/distance, area and perimeter, data in tables and diagrams. Ends with the grade 4 state assessment (20-point scale).", "Հայաստան, 4-րդ դասարան՝ թվեր մինչև միլիոն, չորս գործողություն բազմանիշ թվերով, արագություն/ժամանակ/ուղի, մակերես և պարագիծ, տվյալներ աղյուսակներում։ Ավարտվում է 4-րդ դասարանի պետական ստուգմամբ (20-բալանոց)։", "Армения, 4 класс: числа до миллиона, четыре действия с многозначными числами, скорость/время/расстояние, площадь и периметр, данные в таблицах и диаграммах. Завершается государственной проверкой за 4 класс (20-балльная шкала)."],
    ["Russia grade 4 (ФГОС): numbers beyond 1000, column multiplication and division by two- and three-digit numbers, quantities (t, ц, km², га), motion problems, equations, diagrams. Ends with ВПР (all-Russian check).", "Ռուսաստան, 4-րդ դասարան (ФГОС)՝ թվեր 1000-ից մեծ, սյունակով բազմապատկում և բաժանում երկնիշ և եռանիշ թվերով, մեծություններ (տ, ց, կմ², հա), շարժման խնդիրներ, հավասարումներ, դիագրամներ։ Ավարտվում է ВПР ստուգմամբ։", "Россия, 4 класс (ФГОС): числа больше 1000, умножение и деление столбиком на двузначное и трёхзначное число, величины (т, ц, км², га), задачи на движение, уравнения, диаграммы. Завершается ВПР."],
  ),
  hoursPerWeek: { armenia: 5, russia: 4 },
  units: [
    unit(t("Multi-digit numbers", "Բազմանիշ թվեր", "Многозначные числа"), t("Classes of thousands and millions, comparing and rounding.", "Հազարների և միլիոնների դասեր, համեմատում և կլորացում։", "Классы тысяч и миллионов, сравнение и округление."), [
      ["class-of-thousands", "The class of thousands", "Հազարների դասը", "Класс тысяч"],
      ["millions", "Millions", "Միլիոններ", "Миллионы"],
      ["rounding", "Rounding numbers", "Թվերի կլորացում", "Округление чисел"],
      ["large-units", "Tonnes, centners, km², hectares", "Տոննա, ցենտներ, կմ², հեկտար", "Тонна, центнер, км², гектар"],
    ]),
    unit(t("Addition and subtraction of multi-digit numbers", "Բազմանիշ թվերի գումարում և հանում", "Сложение и вычитание многозначных чисел"), t("Column algorithms, properties, estimation.", "Սյունակով ալգորիթմներ, հատկություններ, գնահատում։", "Алгоритмы столбиком, свойства, прикидка."), [
      ["column-add-large", "Column addition of large numbers", "Մեծ թվերի սյունակով գումարում", "Сложение многозначных чисел столбиком"],
      ["column-subtract-large", "Column subtraction of large numbers", "Մեծ թվերի սյունակով հանում", "Вычитание многозначных чисел столбиком"],
      ["estimation", "Estimating the answer", "Պատասխանի գնահատում", "Прикидка результата"],
    ]),
    unit(t("Multiplication and division by a one-digit number", "Բազմապատկում և բաժանում միանիշ թվով", "Умножение и деление на однозначное число"), t("Written algorithms and zeros in the quotient.", "Գրավոր ալգորիթմներ, զրոներ քանորդում։", "Письменные алгоритмы, нули в частном."), [
      ["multiply-by-digit", "Written multiplication by a digit", "Գրավոր բազմապատկում միանիշով", "Письменное умножение на однозначное число"],
      ["divide-by-digit", "Written division by a digit", "Գրավոր բաժանում միանիշի", "Письменное деление на однозначное число"],
      ["zeros-in-quotient", "Zeros in the quotient", "Զրոներ քանորդում", "Нули в частном"],
    ]),
    unit(t("Multiplication and division by two- and three-digit numbers", "Բազմապատկում և բաժանում երկնիշ և եռանիշ թվերով", "Умножение и деление на двузначное и трёхзначное число"), t("Multiplying by 10, 100, round numbers, and the long division algorithm.", "10-ով, 100-ով և կլոր թվերով բազմապատկում, երկար բաժանման ալգորիթմ։", "Умножение на 10, 100, круглые числа и алгоритм деления уголком."), [
      ["multiply-10-100", "Multiplying and dividing by 10, 100, 1000", "10, 100, 1000-ով բազմապատկում և բաժանում", "Умножение и деление на 10, 100, 1000"],
      ["multiply-two-digit", "Multiplying by a two-digit number", "Երկնիշ թվով բազմապատկում", "Умножение на двузначное число"],
      ["divide-two-digit", "Dividing by a two-digit number", "Երկնիշ թվի բաժանում", "Деление на двузначное число"],
      ["divide-three-digit", "Dividing by a three-digit number", "Եռանիշ թվի բաժանում", "Деление на трёхзначное число"],
    ]),
    unit(t("Speed, time and distance", "Արագություն, ժամանակ և ուղի", "Скорость, время, расстояние"), t("Motion problems: towards each other, in the same direction.", "Շարժման խնդիրներ՝ դեմ դիմաց, նույն ուղղությամբ։", "Задачи на движение: навстречу, в одном направлении."), [
      ["speed-formula", "Speed, time and distance", "Արագություն, ժամանակ և ուղի", "Скорость, время и расстояние"],
      ["towards-each-other", "Moving towards each other", "Դեմ դիմաց շարժում", "Движение навстречу друг другу"],
      ["same-direction", "Moving in the same direction", "Նույն ուղղությամբ շարժում", "Движение в одном направлении"],
    ]),
    unit(t("Geometry, data and review", "Երկրաչափություն, տվյալներ և ամփոփում", "Геометрия, данные и повторение"), t("Area of complex figures, cubes and boxes, bar charts, final review.", "Բարդ պատկերների մակերես, խորանարդ և ուղղանկյունանիստ, դիագրամներ, ամփոփում։", "Площадь составных фигур, куб и прямоугольный параллелепипед, диаграммы, итоговое повторение."), [
      ["area-complex", "Area of composite figures", "Բաղադրյալ պատկերների մակերես", "Площадь составных фигур"],
      ["cube-box", "Cube and rectangular box", "Խորանարդ և ուղղանկյունանիստ", "Куб и прямоугольный параллелепипед"],
      ["bar-charts", "Reading tables and bar charts", "Աղյուսակների և սյունակաձև դիագրամների ընթերցում", "Чтение таблиц и столбчатых диаграмм"],
      ["primary-review", "Review of primary mathematics", "Տարրական մաթեմատիկայի ամփոփում", "Повторение курса начальной школы"],
    ]),
  ],
};
