import { t, unit, type CourseSeed } from "../../types";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const mathGrade2: CourseSeed = {
  subject: "math",
  grade: 2,
  title: t("Mathematics · Grade 2", "Մաթեմատիկա · 2-րդ դասարան", "Математика · 2 класс"),
  description: t(
    "Numbers to 100, written addition and subtraction, the meaning of multiplication and division, length, mass and time.",
    "Թվեր մինչև 100, գրավոր գումարում և հանում, բազմապատկման և բաժանման իմաստը, երկարություն, զանգված և ժամանակ։",
    "Числа до 100, письменное сложение и вычитание, смысл умножения и деления, длина, масса и время.",
  ),
  curriculumNotes: notes(
    ["Armenia grade 2: numbers to 100, oral and written addition/subtraction, introduction of multiplication and division, tables of 2–5, perimeter, units of length, mass and time.", "Հայաստան, 2-րդ դասարան՝ թվեր մինչև 100, բանավոր և գրավոր գումարում/հանում, բազմապատկման և բաժանման ներմուծում, 2–5-ի աղյուսակ, պարագիծ, երկարության, զանգվածի և ժամանակի միավորներ։", "Армения, 2 класс: числа до 100, устное и письменное сложение/вычитание, введение умножения и деления, таблица на 2–5, периметр, единицы длины, массы и времени."],
    ["Russia grade 2 (ФГОС): numbers 1–100, written column addition and subtraction, multiplication and division as repeated addition/sharing, tables of 2 and 3, order of operations with brackets, perimeter, rouble/kopeck, hour/minute.", "Ռուսաստան, 2-րդ դասարան (ФГОС)՝ 1–100 թվեր, սյունակով գումարում և հանում, բազմապատկում և բաժանում, 2-ի և 3-ի աղյուսակ, գործողությունների կարգ փակագծերով, պարագիծ, ժամ/րոպե։", "Россия, 2 класс (ФГОС): числа 1–100, сложение и вычитание столбиком, умножение и деление как сложение одинаковых слагаемых и деление поровну, таблица на 2 и 3, порядок действий со скобками, периметр, рубль/копейка, час/минута."],
  ),
  hoursPerWeek: { armenia: 5, russia: 4 },
  units: [
    unit(t("Numbers to 100", "Թվեր մինչև 100", "Числа до 100"), t("Counting by tens, place value, comparing two-digit numbers.", "Տասնյակներով հաշվել, կարգային արժեք, երկնիշ թվերի համեմատում։", "Счёт десятками, разряды, сравнение двузначных чисел."), [
      ["counting-by-tens", "Counting by tens to 100", "Տասնյակներով հաշվել մինչև 100", "Счёт десятками до 100"],
      ["tens-and-ones-100", "Tens and ones in two-digit numbers", "Տասնյակներ և միավորներ երկնիշ թվերում", "Десятки и единицы в двузначных числах"],
      ["compare-two-digit", "Comparing two-digit numbers", "Երկնիշ թվերի համեմատում", "Сравнение двузначных чисел"],
      ["metre", "The metre", "Մետր", "Метр"],
    ]),
    unit(t("Oral addition and subtraction", "Բանավոր գումարում և հանում", "Устное сложение и вычитание"), t("Mental strategies: round numbers, adding by parts, checking with the inverse operation.", "Մտքում հաշվելու հնարքներ՝ կլոր թվեր, մասերով գումարում, ստուգում հակադարձ գործողությամբ։", "Приёмы устного счёта: круглые числа, сложение по частям, проверка обратным действием."), [
      ["add-round-tens", "Adding and subtracting round tens", "Կլոր տասնյակների գումարում և հանում", "Сложение и вычитание круглых десятков"],
      ["add-by-parts", "Adding by parts (36 + 7)", "Մասերով գումարում (36 + 7)", "Сложение по частям (36 + 7)"],
      ["subtract-by-parts", "Subtracting by parts (42 − 5)", "Մասերով հանում (42 − 5)", "Вычитание по частям (42 − 5)"],
      ["brackets", "Brackets and the order of operations", "Փակագծեր և գործողությունների կարգ", "Скобки и порядок действий"],
      ["checking-answers", "Checking addition and subtraction", "Գումարման և հանման ստուգում", "Проверка сложения и вычитания"],
    ]),
    unit(t("Written addition and subtraction", "Գրավոր գումարում և հանում", "Письменное сложение и вычитание"), t("Column method with and without carrying/borrowing.", "Սյունակով հաշվել՝ տասնյակի անցումով և առանց։", "Вычисления столбиком с переходом и без перехода через десяток."), [
      ["column-addition", "Column addition without carrying", "Սյունակով գումարում առանց անցման", "Сложение столбиком без перехода"],
      ["column-addition-carry", "Column addition with carrying", "Սյունակով գումարում անցումով", "Сложение столбиком с переходом через десяток"],
      ["column-subtraction", "Column subtraction with borrowing", "Սյունակով հանում տասնյակի վերցնումով", "Вычитание столбиком с переходом через десяток"],
      ["equations-intro", "Finding the unknown: x + 4 = 9", "Անհայտի գտնելը․ x + 4 = 9", "Нахождение неизвестного: x + 4 = 9"],
    ]),
    unit(t("Multiplication and division", "Բազմապատկում և բաժանում", "Умножение и деление"), t("Repeated addition, sharing equally, and the first tables.", "Հավասար գումարելիներ, հավասար բաժանում և առաջին աղյուսակները։", "Сложение одинаковых слагаемых, деление поровну и первые таблицы."), [
      ["meaning-of-multiplication", "What multiplication means", "Ի՞նչ է բազմապատկումը", "Смысл умножения"],
      ["meaning-of-division", "What division means", "Ի՞նչ է բաժանումը", "Смысл деления"],
      ["table-of-2", "Multiplying and dividing by 2", "2-ով բազմապատկում և բաժանում", "Умножение и деление на 2"],
      ["table-of-3", "Multiplying and dividing by 3", "3-ով բազմապատկում և բաժանում", "Умножение и деление на 3"],
      ["tables-4-5", "Multiplying by 4 and 5", "4-ով և 5-ով բազմապատկում", "Умножение на 4 и 5"],
      ["times-1-and-0", "Multiplying by 1 and 0", "1-ով և 0-ով բազմապատկում", "Умножение на 1 и 0"],
    ]),
    unit(t("Measurement", "Չափումներ", "Измерения"), t("Length, mass, time and money; perimeter of a polygon.", "Երկարություն, զանգված, ժամանակ և գումար, բազմանկյան պարագիծ։", "Длина, масса, время и деньги; периметр многоугольника."), [
      ["perimeter", "Perimeter of a polygon", "Բազմանկյան պարագիծ", "Периметр многоугольника"],
      ["kilogram", "Mass: the kilogram", "Զանգված․ կիլոգրամ", "Масса: килограмм"],
      ["hours-minutes", "Hours and minutes", "Ժամ և րոպե", "Часы и минуты"],
      ["money", "Money: drams, roubles, coins and notes", "Գումար․ դրամ, ռուբլի, մետաղադրամ և թղթադրամ", "Деньги: драмы, рубли, монеты и купюры"],
    ]),
    unit(t("Geometry", "Երկրաչափություն", "Геометрия"), t("Angles, rectangles and squares, broken lines.", "Անկյուններ, ուղղանկյուններ և քառակուսիներ, բեկյալ գծեր։", "Углы, прямоугольники и квадраты, ломаные линии."), [
      ["angles", "Angles: right, acute, obtuse", "Անկյուններ․ ուղիղ, սուր, բութ", "Углы: прямой, острый, тупой"],
      ["rectangle-square", "Rectangle and square", "Ուղղանկյուն և քառակուսի", "Прямоугольник и квадрат"],
      ["broken-line", "Broken lines and their length", "Բեկյալ գծեր և դրանց երկարությունը", "Ломаная и её длина"],
    ]),
  ],
};
