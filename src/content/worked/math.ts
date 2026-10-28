import { t } from "../types";
import { mt, type WorkedMap } from "./kit";

const pct = (p: string, n: string) => t(`${p}% of ${n}`, `${n}-ի ${p} %-ը`, `${p} % от ${n}`);

export const mathWorked: WorkedMap = {
  3: {
    "division-with-remainder": [
      {
        intro: t("Divide with a remainder.", "Բաժանի՛ր մնացորդով։", "Раздели с остатком."),
        actions: [
          t("Find the biggest multiple of the divisor that is not more than the dividend", "Գտի՛ր բաժանարարի ամենամեծ բազմապատիկը, որը չի գերազանցում բաժանելիին", "Найди наибольшее кратное делителя, которое не больше делимого"),
          t("Subtract it to find the remainder", "Հանի՛ր այն՝ մնացորդը գտնելու համար", "Вычти его, чтобы найти остаток"),
          t("Write the answer", "Գրի՛ր պատասխանը", "Запиши ответ"),
        ],
        problems: [
          { problem: mt("38 ÷ 7"), results: [mt("7 × [[5]] = 35"), mt("38 − 35 = [[3]]"), t("38 ÷ 7 = [[5]] remainder [[3]]", "38 : 7 = [[5]] (մնացորդ [[3]])", "38 : 7 = [[5]] (остаток [[3]])")] },
          { problem: mt("47 ÷ 6"), results: [mt("6 × [[7]] = 42"), mt("47 − 42 = [[5]]"), t("47 ÷ 6 = [[7]] remainder [[5]]", "47 : 6 = [[7]] (մնացորդ [[5]])", "47 : 6 = [[7]] (остаток [[5]])")] },
          { problem: mt("59 ÷ 8"), results: [mt("8 × [[7]] = 56"), mt("59 − 56 = [[3]]"), t("59 ÷ 8 = [[7]] remainder [[3]]", "59 : 8 = [[7]] (մնացորդ [[3]])", "59 : 8 = [[7]] (остаток [[3]])")] },
        ],
      },
    ],
  },
  5: {
    "percent-of-number": [
      {
        intro: t("Find the percent of a number in two steps.", "Գտի՛ր թվի տոկոսը երկու քայլով։", "Найди процент от числа за два шага."),
        actions: [t("Find 1%: divide the number by 100", "Գտի՛ր 1 %-ը՝ թիվը բաժանելով 100-ի", "Найди 1 %: раздели число на 100"), t("Multiply by the number of percent", "Բազմապատկի՛ր տոկոսների քանակով", "Умножь на число процентов")],
        problems: [
          { problem: pct("15", "80"), results: [mt("80 ÷ 100 = [[0.8]]"), mt("0.8 × 15 = [[12]]")] },
          { problem: pct("25", "360"), results: [mt("360 ÷ 100 = [[3.6]]"), mt("3.6 × 25 = [[90]]")] },
          { problem: pct("12", "450"), results: [mt("450 ÷ 100 = [[4.5]]"), mt("4.5 × 12 = [[54]]")] },
        ],
      },
    ],
    "arithmetic-mean": [
      {
        actions: [t("Add all the numbers", "Գումարի՛ր բոլոր թվերը", "Сложи все числа"), t("Count how many numbers there are", "Հաշվի՛ր, թե քանի թիվ կա", "Посчитай, сколько всего чисел"), t("Divide the sum by how many there are", "Գումարը բաժանի՛ր թվերի քանակին", "Раздели сумму на количество чисел")],
        problems: [
          {
            problem: t("The mean of 4, 7 and 13", "4, 7 և 13 թվերի միջին թվաբանականը", "Среднее арифметическое чисел 4, 7 и 13"),
            results: [mt("4 + 7 + 13 = [[24]]"), t("how many: [[3]]", "քանակը՝ [[3]]", "количество: [[3]]"), mt("24 ÷ 3 = [[8]]")],
          },
          {
            problem: t("The mean of 12, 15, 9 and 20", "12, 15, 9 և 20 թվերի միջին թվաբանականը", "Среднее арифметическое чисел 12, 15, 9 и 20"),
            results: [mt("12 + 15 + 9 + 20 = [[56]]"), t("how many: [[4]]", "քանակը՝ [[4]]", "количество: [[4]]"), mt("56 ÷ 4 = [[14]]")],
          },
          {
            problem: t("The mean of 2.5, 3.5 and 6", "2,5; 3,5 և 6 թվերի միջին թվաբանականը", "Среднее арифметическое чисел 2,5; 3,5 и 6"),
            results: [mt("2.5 + 3.5 + 6 = [[12]]"), t("how many: [[3]]", "քանակը՝ [[3]]", "количество: [[3]]"), mt("12 ÷ 3 = [[4]]")],
          },
        ],
      },
    ],
  },
  6: {
    proportion: [
      {
        intro: t("Find the unknown term of the proportion.", "Գտի՛ր համեմատության անհայտ անդամը։", "Найди неизвестный член пропорции."),
        actions: [
          t("The product of the extremes equals the product of the means", "Եզրային անդամների արտադրյալը հավասար է միջին անդամների արտադրյալին", "Произведение крайних членов равно произведению средних"),
          t("Divide by the known extreme term", "Բաժանի՛ր հայտնի եզրային անդամին", "Раздели на известный крайний член"),
        ],
        problems: [
          { problem: mt("x : 12 = 3 : 4"), results: [mt("4x = 12 · 3 = [[36]]"), mt("x = 36 ÷ 4 = [[9]]")] },
          { problem: mt("x : 8 = 15 : 20"), results: [mt("20x = 8 · 15 = [[120]]"), mt("x = 120 ÷ 20 = [[6]]")] },
          { problem: mt("x : 4.5 = 2 : 3"), results: [mt("3x = 4.5 · 2 = [[9]]"), mt("x = 9 ÷ 3 = [[3]]")] },
        ],
      },
    ],
  },
};

export const algebraWorked: WorkedMap = {
  7: {
    "equations-with-brackets": [
      {
        intro: t("Solve the equations.", "Լուծի՛ր հավասարումները։", "Реши уравнения."),
        actions: [
          t("Open the brackets", "Բացի՛ր փակագծերը", "Раскрой скобки"),
          t("Move the number to the right side, changing its sign", "Թիվը տեղափոխի՛ր աջ մաս՝ փոխելով նշանը", "Перенеси число в правую часть, сменив знак"),
          t("Divide both sides by the coefficient of x", "Երկու մասը բաժանի՛ր x-ի գործակցին", "Раздели обе части на коэффициент при x"),
        ],
        problems: [
          { problem: mt("2(x − 3) = 10"), results: [mt("2x − [[6]] = 10"), mt("2x = [[16]]"), mt("x = [[8]]")] },
          { problem: mt("3(x + 2) = 21"), results: [mt("3x + [[6]] = 21"), mt("3x = [[15]]"), mt("x = [[5]]")] },
          { problem: mt("4(x − 5) = −8"), results: [mt("4x − [[20]] = −8"), mt("4x = [[12]]"), mt("x = [[3]]")] },
        ],
      },
    ],
  },
  8: {
    "quadratic-formula": [
      {
        intro: t("Solve with the discriminant: D = b² − 4ac, x = (−b ± √D) / 2a.", "Լուծի՛ր դիսկրիմինանտով՝ D = b² − 4ac, x = (−b ± √D) / 2a։", "Реши через дискриминант: D = b² − 4ac, x = (−b ± √D) / 2a."),
        actions: [
          t("Write down a, b and c", "Դուրս գրի՛ր a-ն, b-ն և c-ն", "Выпиши a, b и c"),
          t("Find the discriminant", "Գտի՛ր դիսկրիմինանտը", "Найди дискриминант"),
          t("Find the roots, first with +√D, then with −√D", "Գտի՛ր արմատները՝ նախ +√D-ով, հետո −√D-ով", "Найди корни: сначала с +√D, потом с −√D"),
        ],
        problems: [
          { problem: mt("x² − 5x + 6 = 0"), results: [mt("a = 1, b = [[−5]], c = [[6]]"), mt("D = 25 − 24 = [[1]]"), mt("x₁ = (5 + 1) / 2 = [[3]], x₂ = (5 − 1) / 2 = [[2]]")] },
          { problem: mt("x² + 2x − 8 = 0"), results: [mt("a = 1, b = [[2]], c = [[−8]]"), mt("D = 4 + 32 = [[36]]"), mt("x₁ = (−2 + 6) / 2 = [[2]], x₂ = (−2 − 6) / 2 = [[−4]]")] },
          { problem: mt("2x² − 7x + 3 = 0"), results: [mt("a = 2, b = [[−7]], c = [[3]]"), mt("D = [[49]] − [[24]] = [[25]]"), mt("x₁ = (7 + 5) / 4 = [[3]], x₂ = (7 − 5) / 4 = [[0.5]]")] },
        ],
      },
    ],
  },
};

export const geometryWorked: WorkedMap = {
  8: {
    pythagoras: [
      {
        intro: t("Find the hypotenuse c from the legs a and b: c² = a² + b².", "Գտի՛ր c ներքնաձիգը a և b էջերով՝ c² = a² + b²։", "Найди гипотенузу c по катетам a и b: c² = a² + b²."),
        actions: [t("Add the squares of the legs", "Գումարի՛ր էջերի քառակուսիները", "Сложи квадраты катетов"), t("Take the square root", "Հանի՛ր քառակուսի արմատը", "Извлеки квадратный корень")],
        problems: [
          { problem: mt("a = 3, b = 4"), results: [mt("c² = 9 + 16 = [[25]]"), mt("c = √25 = [[5]]")] },
          { problem: mt("a = 6, b = 8"), results: [mt("c² = 36 + 64 = [[100]]"), mt("c = √100 = [[10]]")] },
          { problem: mt("a = 5, b = 12"), results: [mt("c² = 25 + 144 = [[169]]"), mt("c = √169 = [[13]]")] },
        ],
      },
    ],
  },
};
