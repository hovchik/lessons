import { t, unit, type CourseSeed } from "../../types";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const mathGrade3: CourseSeed = {
  subject: "math",
  grade: 3,
  title: t("Mathematics · Grade 3", "Մաթեմատիկա · 3-րդ դասարան", "Математика · 3 класс"),
  description: t(
    "The full multiplication table, numbers to 1000, division with remainder, area, and multi-step problems.",
    "Բազմապատկման ամբողջ աղյուսակ, թվեր մինչև 1000, բաժանում մնացորդով, մակերես, բազմաքայլ խնդիրներ։",
    "Полная таблица умножения, числа до 1000, деление с остатком, площадь, составные задачи.",
  ),
  curriculumNotes: notes(
    ["Armenia grade 3: tables up to 10, out-of-table multiplication and division, numbers to 1000, area of a rectangle, fractions of a quantity, units of time and mass.", "Հայաստան, 3-րդ դասարան՝ աղյուսակ մինչև 10, արտաաղյուսակային բազմապատկում և բաժանում, թվեր մինչև 1000, ուղղանկյան մակերես, քանակի մասեր, ժամանակի և զանգվածի միավորներ։", "Армения, 3 класс: таблица до 10, внетабличное умножение и деление, числа до 1000, площадь прямоугольника, доли величины, единицы времени и массы."],
    ["Russia grade 3 (ФГОС): tables to 9, multiplying and dividing by one-digit numbers, division with remainder, numbers to 1000, area in cm²/dm²/m², fractions (доли), problems in 2–3 steps, equations.", "Ռուսաստան, 3-րդ դասարան (ФГОС)՝ աղյուսակ մինչև 9, միանիշ թվով բազմապատկում և բաժանում, բաժանում մնացորդով, թվեր մինչև 1000, մակերես սմ²/դմ²/մ², մասեր, 2–3 քայլի խնդիրներ, հավասարումներ։", "Россия, 3 класс (ФГОС): таблица до 9, умножение и деление на однозначное число, деление с остатком, числа до 1000, площадь в см²/дм²/м², доли, задачи в 2–3 действия, уравнения."],
  ),
  hoursPerWeek: { armenia: 5, russia: 4 },
  units: [
    unit(t("The multiplication table", "Բազմապատկման աղյուսակ", "Таблица умножения"), t("Tables of 6, 7, 8 and 9; properties of multiplication.", "6, 7, 8 և 9-ի աղյուսակներ, բազմապատկման հատկություններ։", "Таблицы на 6, 7, 8 и 9; свойства умножения."), [
      ["tables-6-7", "Tables of 6 and 7", "6-ի և 7-ի աղյուսակ", "Таблица на 6 и 7"],
      ["tables-8-9", "Tables of 8 and 9", "8-ի և 9-ի աղյուսակ", "Таблица на 8 и 9"],
      ["commutative-multiplication", "Swapping the factors", "Արտադրիչների տեղափոխություն", "Перестановка множителей"],
      ["table-tricks", "Tricks for remembering the table", "Աղյուսակը հիշելու հնարքներ", "Приёмы запоминания таблицы"],
      ["order-of-operations", "Order of operations without brackets", "Գործողությունների կարգ առանց փակագծերի", "Порядок действий без скобок"],
    ]),
    unit(t("Out-of-table multiplication and division", "Արտաաղյուսակային բազմապատկում և բաժանում", "Внетабличное умножение и деление"), t("Multiplying 20 × 3, 23 × 4, dividing 96 ÷ 3, division with remainder.", "20 × 3, 23 × 4 բազմապատկում, 96 ÷ 3 բաժանում, բաժանում մնացորդով։", "Умножение 20 × 3, 23 × 4, деление 96 ÷ 3, деление с остатком."), [
      ["multiply-round-tens", "Multiplying and dividing round numbers", "Կլոր թվերի բազմապատկում և բաժանում", "Умножение и деление круглых чисел"],
      ["multiply-sum-by-number", "Multiplying a sum by a number", "Գումարի բազմապատկում թվով", "Умножение суммы на число"],
      ["divide-sum-by-number", "Dividing a sum by a number", "Գումարի բաժանում թվի", "Деление суммы на число"],
      ["division-with-remainder", "Division with remainder", "Բաժանում մնացորդով", "Деление с остатком"],
      ["checking-division", "Checking multiplication and division", "Բազմապատկման և բաժանման ստուգում", "Проверка умножения и деления"],
    ]),
    unit(t("Numbers to 1000", "Թվեր մինչև 1000", "Числа до 1000"), t("Hundreds, tens and ones; comparing and rounding three-digit numbers.", "Հարյուրյակներ, տասնյակներ, միավորներ, եռանիշ թվերի համեմատում։", "Сотни, десятки и единицы; сравнение трёхзначных чисел."), [
      ["hundreds", "Counting in hundreds", "Հարյուրյակներով հաշվել", "Счёт сотнями"],
      ["three-digit-numbers", "Reading and writing three-digit numbers", "Եռանիշ թվերի կարդալն ու գրելը", "Чтение и запись трёхзначных чисел"],
      ["compare-three-digit", "Comparing three-digit numbers", "Եռանիշ թվերի համեմատում", "Сравнение трёхзначных чисел"],
      ["roman-numerals", "Roman numerals", "Հռոմեական թվանշաններ", "Римские цифры"],
    ]),
    unit(t("Operations with three-digit numbers", "Գործողություններ եռանիշ թվերով", "Действия с трёхзначными числами"), t("Column addition and subtraction to 1000; multiplying and dividing by a one-digit number.", "Սյունակով գումարում և հանում մինչև 1000, միանիշ թվով բազմապատկում և բաժանում։", "Сложение и вычитание столбиком до 1000; умножение и деление на однозначное число."), [
      ["add-subtract-1000", "Adding and subtracting to 1000", "Գումարում և հանում 1000-ի սահմաններում", "Сложение и вычитание в пределах 1000"],
      ["multiply-three-digit", "Multiplying a three-digit number by a digit", "Եռանիշ թվի բազմապատկում միանիշով", "Умножение трёхзначного числа на однозначное"],
      ["divide-three-digit", "Dividing a three-digit number by a digit", "Եռանիշ թվի բաժանում միանիշի", "Деление трёхзначного числа на однозначное"],
    ]),
    unit(t("Fractions and area", "Մասեր և մակերես", "Доли и площадь"), t("Halves, thirds, quarters; area of a rectangle and square.", "Կես, երրորդ, քառորդ, ուղղանկյան և քառակուսու մակերես։", "Половина, треть, четверть; площадь прямоугольника и квадрата."), [
      ["fractions-of-a-whole", "Half, third, quarter", "Կես, երրորդ, քառորդ", "Половина, треть, четверть"],
      ["fraction-of-a-number", "Finding a fraction of a number", "Թվի մասի գտնելը", "Нахождение доли числа"],
      ["area-units", "Area and its units", "Մակերեսը և նրա միավորները", "Площадь и её единицы"],
      ["area-rectangle", "Area of a rectangle", "Ուղղանկյան մակերես", "Площадь прямоугольника"],
    ]),
    unit(t("Problems and quantities", "Խնդիրներ և մեծություններ", "Задачи и величины"), t("Multi-step problems, speed–time–distance, year, month, day.", "Բազմաքայլ խնդիրներ, արագություն–ժամանակ–ուղի, տարի, ամիս, օր։", "Составные задачи, скорость–время–расстояние, год, месяц, сутки."), [
      ["two-step-problems", "Two-step problems", "Երկքայլ խնդիրներ", "Задачи в два действия"],
      ["times-more-less", "Times more, times less", "Անգամ ավելի, անգամ պակաս", "Больше в… раз, меньше в… раз"],
      ["calendar", "Year, month, day, the calendar", "Տարի, ամիս, օր, օրացույց", "Год, месяц, сутки, календарь"],
      ["gram-kilogram", "Gram and kilogram", "Գրամ և կիլոգրամ", "Грамм и килограмм"],
    ]),
  ],
};
