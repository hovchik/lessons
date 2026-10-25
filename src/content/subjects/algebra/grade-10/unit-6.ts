import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit6: UnitSeed = {
  title: t("Introduction to analysis", "Ներածություն անալիզին", "Введение в анализ"),
  summary: t(
    "The limit of a sequence and of a function, the idea of the derivative as an instantaneous rate of change, the first differentiation rules, and a review of the year.",
    "Հաջորդականության և ֆունկցիայի սահման, ածանցյալի գաղափարը որպես փոփոխության ակնթարթային արագություն, ածանցման առաջին կանոնները և տարվա կրկնություն։",
    "Предел последовательности и функции, идея производной как мгновенной скорости изменения, первые правила дифференцирования и повторение за год.",
  ),
  lessons: [
    lesson(
      "sequence-limit",
      ["The limit of a sequence", "Հաջորդականության սահմանը", "Предел последовательности"],
      {
        en: ["Explain what it means that a sequence tends to a number", "Find limits of simple sequences such as 1/n, qⁿ and fractions of polynomials in n", "Use the sum of an infinite geometric progression with |q| < 1"],
        hy: ["Բացատրել, թե ինչ է նշանակում, որ հաջորդականությունը ձգտում է որևէ թվի", "Գտնել պարզ հաջորդականությունների սահմանները, օրինակ՝ 1/n, qⁿ և n-ից բազմանդամների կոտորակներ", "Օգտվել |q| < 1 հայտարարով անվերջ նվազող երկրաչափական պրոգրեսիայի գումարից"],
        ru: ["Объяснять, что значит «последовательность стремится к числу»", "Находить пределы простых последовательностей: 1/n, qⁿ, дроби из многочленов от n", "Использовать сумму бесконечно убывающей геометрической прогрессии с |q| < 1"],
      },
      {
        en: `## The idea

Look at $x_n = \\dfrac{1}{n}$: $1, \\dfrac12, \\dfrac13, \\dfrac14, \\dots, \\dfrac{1}{100}, \\dots$ The terms come closer and closer to $0$. We write

$$\\lim_{n \\to \\infty} \\frac{1}{n} = 0.$$

> The number $A$ is the **limit** of the sequence $(x_n)$ if for any small distance $\\varepsilon > 0$, all terms from some number on lie within $\\varepsilon$ of $A$: $\\lvert x_n - A\\rvert < \\varepsilon$.

**Example 1.** For $x_n = \\dfrac1n$ and $\\varepsilon = 0.01$, all terms with $n > 100$ are closer than $0.01$ to $0$.

A sequence that has a limit is called **convergent**. The sequence $1, -1, 1, -1, \\dots$ has no limit, and neither does $x_n = n$.

## Basic limits and rules

$$\\lim_{n \\to \\infty} \\frac{1}{n^k} = 0 \\ (k > 0), \\qquad \\lim_{n \\to \\infty} q^n = 0 \\ (\\lvert q\\rvert < 1), \\qquad \\lim_{n \\to \\infty} c = c.$$

If $x_n \\to A$ and $y_n \\to B$, then $x_n \\pm y_n \\to A \\pm B$, $x_n y_n \\to AB$ and $\\dfrac{x_n}{y_n} \\to \\dfrac{A}{B}$ (if $B \\ne 0$).

**Example 2.** $\\lim\\limits_{n \\to \\infty} \\left(3 + \\dfrac{2}{n}\\right) = 3 + 0 = 3$.

**Example 3.** Divide the numerator and denominator by the highest power of $n$:

$$\\lim_{n \\to \\infty} \\frac{2n^2 + 1}{5n^2 - n} = \\lim_{n \\to \\infty} \\frac{2 + \\frac{1}{n^2}}{5 - \\frac{1}{n}} = \\frac25.$$

**Example 4.** $\\lim\\limits_{n \\to \\infty} \\left(\\dfrac23\\right)^n = 0$, since $\\left\\lvert\\dfrac23\\right\\rvert < 1$.

## Infinite geometric progression

If $\\lvert q\\rvert < 1$, the sums $S_n = \\dfrac{b_1(1 - q^n)}{1 - q}$ tend to

$$S = \\frac{b_1}{1 - q}.$$

**Example 5.** $1 + \\dfrac12 + \\dfrac14 + \\dfrac18 + \\dots = \\dfrac{1}{1 - \\frac12} = 2$.

**Example 6.** $0.(3) = 0.3 + 0.03 + 0.003 + \\dots = \\dfrac{0.3}{1 - 0.1} = \\dfrac13$.

### Exercises

1. Write the first five terms of $x_n = \\dfrac{n}{n + 1}$. What number do they approach?
2. Find $\\lim\\limits_{n \\to \\infty} \\dfrac{5}{n^3}$.
3. Find $\\lim\\limits_{n \\to \\infty} \\dfrac{3n - 2}{n + 4}$.
4. Find $\\lim\\limits_{n \\to \\infty} \\dfrac{n^2 + 3n}{2n^3 + 1}$.
5. Find $\\lim\\limits_{n \\to \\infty} \\left(0.9^n + 1\\right)$.
6. Find the sum $9 + 3 + 1 + \\dfrac13 + \\dots$
7. Write $0.(7)$ as a fraction.

### Answers

1. $\\dfrac12, \\dfrac23, \\dfrac34, \\dfrac45, \\dfrac56$; they approach $1$. 2. $0$. 3. $3$. 4. $0$. 5. $1$. 6. $\\dfrac{9}{1 - \\frac13} = \\dfrac{27}{2}$. 7. $\\dfrac{0.7}{0.9} = \\dfrac79$.`,
        hy: `## Գաղափարը

Դիտարկենք $x_n = \\dfrac{1}{n}$՝ $1, \\dfrac12, \\dfrac13, \\dfrac14, \\dots, \\dfrac{1}{100}, \\dots$ Անդամներն ավելի ու ավելի են մոտենում $0$-ին։ Գրում ենք՝

$$\\lim_{n \\to \\infty} \\frac{1}{n} = 0.$$

> $A$ թիվը $(x_n)$ հաջորդականության **սահմանն** է, եթե ցանկացած փոքր $\\varepsilon > 0$ հեռավորության համար որևէ համարից սկսած բոլոր անդամները $A$-ից գտնվում են $\\varepsilon$-ից փոքր հեռավորության վրա՝ $\\lvert x_n - A\\rvert < \\varepsilon$։

**Օրինակ 1։** $x_n = \\dfrac1n$ և $\\varepsilon = 0{,}01$ դեպքում $n > 100$ համարներով բոլոր անդամները $0$-ից $0{,}01$-ից ավելի մոտ են։

Սահման ունեցող հաջորդականությունը կոչվում է **զուգամետ**։ $1, -1, 1, -1, \\dots$ հաջորդականությունը սահման չունի, ինչպես նաև $x_n = n$-ը։

## Հիմնական սահմաններ և կանոններ

$$\\lim_{n \\to \\infty} \\frac{1}{n^k} = 0 \\ (k > 0), \\qquad \\lim_{n \\to \\infty} q^n = 0 \\ (\\lvert q\\rvert < 1), \\qquad \\lim_{n \\to \\infty} c = c.$$

Եթե $x_n \\to A$ և $y_n \\to B$, ապա $x_n \\pm y_n \\to A \\pm B$, $x_n y_n \\to AB$ և $\\dfrac{x_n}{y_n} \\to \\dfrac{A}{B}$ (եթե $B \\ne 0$)։

**Օրինակ 2։** $\\lim\\limits_{n \\to \\infty} \\left(3 + \\dfrac{2}{n}\\right) = 3 + 0 = 3$։

**Օրինակ 3։** Համարիչը և հայտարարը բաժանենք $n$-ի ամենաբարձր աստիճանի վրա՝

$$\\lim_{n \\to \\infty} \\frac{2n^2 + 1}{5n^2 - n} = \\lim_{n \\to \\infty} \\frac{2 + \\frac{1}{n^2}}{5 - \\frac{1}{n}} = \\frac25.$$

**Օրինակ 4։** $\\lim\\limits_{n \\to \\infty} \\left(\\dfrac23\\right)^n = 0$, քանի որ $\\left\\lvert\\dfrac23\\right\\rvert < 1$։

## Անվերջ երկրաչափական պրոգրեսիա

Եթե $\\lvert q\\rvert < 1$, ապա $S_n = \\dfrac{b_1(1 - q^n)}{1 - q}$ գումարները ձգտում են

$$S = \\frac{b_1}{1 - q}.$$

**Օրինակ 5։** $1 + \\dfrac12 + \\dfrac14 + \\dfrac18 + \\dots = \\dfrac{1}{1 - \\frac12} = 2$։

**Օրինակ 6։** $0{,}(3) = 0{,}3 + 0{,}03 + 0{,}003 + \\dots = \\dfrac{0{,}3}{1 - 0{,}1} = \\dfrac13$։

### Վարժություններ

1. Գրեք $x_n = \\dfrac{n}{n + 1}$-ի առաջին հինգ անդամները։ Ո՞ր թվին են դրանք մոտենում։
2. Գտեք $\\lim\\limits_{n \\to \\infty} \\dfrac{5}{n^3}$-ը։
3. Գտեք $\\lim\\limits_{n \\to \\infty} \\dfrac{3n - 2}{n + 4}$-ը։
4. Գտեք $\\lim\\limits_{n \\to \\infty} \\dfrac{n^2 + 3n}{2n^3 + 1}$-ը։
5. Գտեք $\\lim\\limits_{n \\to \\infty} \\left(0{,}9^n + 1\\right)$-ը։
6. Գտեք $9 + 3 + 1 + \\dfrac13 + \\dots$ գումարը։
7. Գրեք $0{,}(7)$-ը կոտորակի տեսքով։

### Պատասխաններ

1. $\\dfrac12, \\dfrac23, \\dfrac34, \\dfrac45, \\dfrac56$, մոտենում են $1$-ին։ 2. $0$։ 3. $3$։ 4. $0$։ 5. $1$։ 6. $\\dfrac{9}{1 - \\frac13} = \\dfrac{27}{2}$։ 7. $\\dfrac{0{,}7}{0{,}9} = \\dfrac79$։`,
        ru: `## Идея

Рассмотрим $x_n = \\dfrac{1}{n}$: $1, \\dfrac12, \\dfrac13, \\dfrac14, \\dots, \\dfrac{1}{100}, \\dots$ Члены всё ближе подходят к $0$. Пишут

$$\\lim_{n \\to \\infty} \\frac{1}{n} = 0.$$

> Число $A$ — **предел** последовательности $(x_n)$, если для любого малого расстояния $\\varepsilon > 0$ все члены, начиная с некоторого номера, лежат ближе чем на $\\varepsilon$ к $A$: $\\lvert x_n - A\\rvert < \\varepsilon$.

**Пример 1.** Для $x_n = \\dfrac1n$ и $\\varepsilon = 0{,}01$ все члены с $n > 100$ ближе к $0$, чем на $0{,}01$.

Последовательность, имеющая предел, называется **сходящейся**. Последовательность $1, -1, 1, -1, \\dots$ предела не имеет, как и $x_n = n$.

## Основные пределы и правила

$$\\lim_{n \\to \\infty} \\frac{1}{n^k} = 0 \\ (k > 0), \\qquad \\lim_{n \\to \\infty} q^n = 0 \\ (\\lvert q\\rvert < 1), \\qquad \\lim_{n \\to \\infty} c = c.$$

Если $x_n \\to A$ и $y_n \\to B$, то $x_n \\pm y_n \\to A \\pm B$, $x_n y_n \\to AB$ и $\\dfrac{x_n}{y_n} \\to \\dfrac{A}{B}$ (при $B \\ne 0$).

**Пример 2.** $\\lim\\limits_{n \\to \\infty} \\left(3 + \\dfrac{2}{n}\\right) = 3 + 0 = 3$.

**Пример 3.** Разделим числитель и знаменатель на старшую степень $n$:

$$\\lim_{n \\to \\infty} \\frac{2n^2 + 1}{5n^2 - n} = \\lim_{n \\to \\infty} \\frac{2 + \\frac{1}{n^2}}{5 - \\frac{1}{n}} = \\frac25.$$

**Пример 4.** $\\lim\\limits_{n \\to \\infty} \\left(\\dfrac23\\right)^n = 0$, так как $\\left\\lvert\\dfrac23\\right\\rvert < 1$.

## Бесконечная геометрическая прогрессия

Если $\\lvert q\\rvert < 1$, суммы $S_n = \\dfrac{b_1(1 - q^n)}{1 - q}$ стремятся к

$$S = \\frac{b_1}{1 - q}.$$

**Пример 5.** $1 + \\dfrac12 + \\dfrac14 + \\dfrac18 + \\dots = \\dfrac{1}{1 - \\frac12} = 2$.

**Пример 6.** $0{,}(3) = 0{,}3 + 0{,}03 + 0{,}003 + \\dots = \\dfrac{0{,}3}{1 - 0{,}1} = \\dfrac13$.

### Упражнения

1. Запишите первые пять членов $x_n = \\dfrac{n}{n + 1}$. К какому числу они приближаются?
2. Найдите $\\lim\\limits_{n \\to \\infty} \\dfrac{5}{n^3}$.
3. Найдите $\\lim\\limits_{n \\to \\infty} \\dfrac{3n - 2}{n + 4}$.
4. Найдите $\\lim\\limits_{n \\to \\infty} \\dfrac{n^2 + 3n}{2n^3 + 1}$.
5. Найдите $\\lim\\limits_{n \\to \\infty} \\left(0{,}9^n + 1\\right)$.
6. Найдите сумму $9 + 3 + 1 + \\dfrac13 + \\dots$
7. Запишите $0{,}(7)$ в виде дроби.

### Ответы

1. $\\dfrac12, \\dfrac23, \\dfrac34, \\dfrac45, \\dfrac56$; приближаются к $1$. 2. $0$. 3. $3$. 4. $0$. 5. $1$. 6. $\\dfrac{9}{1 - \\frac13} = \\dfrac{27}{2}$. 7. $\\dfrac{0{,}7}{0{,}9} = \\dfrac79$.`,
      },
      [
        q(
          t("The limit of 1/n as n → ∞ is…", "1/n-ի սահմանը, երբ n → ∞…", "Предел 1/n при n → ∞ —"),
          [t("0", "0", "0"), t("1", "1", "1"), t("there is no limit", "սահման չկա", "предела нет")],
          0,
        ),
        q(
          t("Which sequence has no limit?", "Ո՞ր հաջորդականությունը սահման չունի", "Какая последовательность не имеет предела?"),
          [t("1/n²", "1/n²", "1/n²"), t("1, −1, 1, −1, …", "1, −1, 1, −1, …", "1, −1, 1, −1, …"), t("0.5ⁿ", "0,5ⁿ", "0,5ⁿ")],
          1,
        ),
        q(
          t("lim (2n² + 1)/(5n² − n) equals…", "lim (2n² + 1)/(5n² − n)-ը հավասար է…", "lim (2n² + 1)/(5n² − n) равен…"),
          [t("2/5", "2/5", "2/5"), t("0", "0", "0"), t("2", "2", "2")],
          0,
        ),
        q(
          t("qⁿ tends to 0 when…", "qⁿ-ը ձգտում է 0-ի, երբ…", "qⁿ стремится к 0, когда…"),
          [t("|q| < 1", "|q| < 1", "|q| < 1"), t("q > 1", "q > 1", "q > 1"), t("q = 1", "q = 1", "q = 1")],
          0,
        ),
        q(
          t("The sum 1 + 1/2 + 1/4 + … equals…", "1 + 1/2 + 1/4 + … գումարը հավասար է…", "Сумма 1 + 1/2 + 1/4 + … равна…"),
          [t("1.5", "1,5", "1,5"), t("2", "2", "2"), t("it is infinite", "անվերջ է", "бесконечна")],
          1,
        ),
        q(
          t("0.(3) as a fraction is…", "0,(3)-ը կոտորակի տեսքով…", "0,(3) в виде дроби —"),
          [t("3/10", "3/10", "3/10"), t("1/3", "1/3", "1/3"), t("3/100", "3/100", "3/100")],
          1,
        ),
      ],
    ),
    lesson(
      "function-limit",
      ["The limit of a function and continuity", "Ֆունկցիայի սահմանը և անընդհատությունը", "Предел функции и непрерывность"],
      {
        en: ["Explain lim f(x) = A as x → a in words and with a table of values", "Compute limits by substitution and by cancelling a common factor", "Recognise continuous functions and use the limit sin x / x → 1"],
        hy: ["Բառերով և արժեքների աղյուսակով բացատրել lim f(x) = A, երբ x → a", "Հաշվել սահմաններ տեղադրմամբ և ընդհանուր արտադրիչը կրճատելով", "Ճանաչել անընդհատ ֆունկցիաները և օգտվել sin x / x → 1 սահմանից"],
        ru: ["Объяснять lim f(x) = A при x → a словами и с помощью таблицы значений", "Вычислять пределы подстановкой и сокращением общего множителя", "Узнавать непрерывные функции и использовать предел sin x / x → 1"],
      },
      {
        en: `## The idea

$\\lim\\limits_{x \\to a} f(x) = A$ means: when $x$ comes close to $a$ (but $x \\ne a$), the values $f(x)$ come close to $A$.

**Example 1.** $f(x) = \\dfrac{x^2 - 1}{x - 1}$ is not defined at $x = 1$. Look at nearby values:

| $x$ | $0.9$ | $0.99$ | $1.01$ | $1.1$ |
|---|---|---|---|---|
| $f(x)$ | $1.9$ | $1.99$ | $2.01$ | $2.1$ |

The values approach $2$, so $\\lim\\limits_{x \\to 1} f(x) = 2$, even though $f(1)$ does not exist. Indeed, for $x \\ne 1$, $f(x) = x + 1$.

## Continuity

> $f$ is **continuous** at $a$ if $\\lim\\limits_{x \\to a} f(x) = f(a)$.

The graph of a continuous function can be drawn without lifting the pencil. Polynomials, $\\sin x$, $\\cos x$, $\\sqrt{x}$ ($x \\ge 0$) and $a^x$ are continuous wherever they are defined. For them a limit is found by **substitution**.

**Example 2.** $\\lim\\limits_{x \\to 2} (x^3 - 3x + 1) = 8 - 6 + 1 = 3$.

**Example 3.** $\\lim\\limits_{x \\to \\pi} \\cos\\dfrac{x}{3} = \\cos\\dfrac{\\pi}{3} = \\dfrac12$.

## The form 0/0

If substitution gives $\\dfrac00$, simplify first.

**Example 4.** $\\lim\\limits_{x \\to 3} \\dfrac{x^2 - 9}{x - 3} = \\lim\\limits_{x \\to 3} (x + 3) = 6$.

**Example 5.** $\\lim\\limits_{x \\to 0} \\dfrac{\\sqrt{x + 4} - 2}{x}$. Multiply by $\\sqrt{x + 4} + 2$:

$$\\frac{x + 4 - 4}{x(\\sqrt{x + 4} + 2)} = \\frac{1}{\\sqrt{x + 4} + 2} \\to \\frac14.$$

## A remarkable limit

$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\quad (x \\text{ in radians}).$$

For small angles $\\sin x \\approx x$: $\\sin 0.1 \\approx 0.0998$.

**Example 6.** $\\lim\\limits_{x \\to 0} \\dfrac{\\sin 3x}{x} = \\lim\\limits_{x \\to 0} 3 \\cdot \\dfrac{\\sin 3x}{3x} = 3$.

## Limits at infinity

**Example 7.** $\\lim\\limits_{x \\to \\infty} \\dfrac{4x + 1}{2x - 5} = 2$, as for sequences.

### Exercises

1. Find $\\lim\\limits_{x \\to -1} (2x^2 + x)$.
2. Find $\\lim\\limits_{x \\to 2} \\dfrac{x^2 - 4}{x - 2}$.
3. Find $\\lim\\limits_{x \\to 1} \\dfrac{x^2 + 2x - 3}{x - 1}$.
4. Find $\\lim\\limits_{x \\to 0} \\dfrac{\\sin 5x}{x}$.
5. Find $\\lim\\limits_{x \\to 9} \\dfrac{\\sqrt{x} - 3}{x - 9}$.
6. Find $\\lim\\limits_{x \\to \\infty} \\dfrac{3x^2 - x}{x^2 + 7}$.
7. Is $f(x) = \\dfrac{1}{x}$ continuous at $x = 0$?

### Answers

1. $1$. 2. $4$. 3. $(x + 3) \\to 4$. 4. $5$. 5. $\\dfrac{1}{\\sqrt{x} + 3} \\to \\dfrac16$. 6. $3$. 7. No: it is not defined at $0$, and the graph breaks there.`,
        hy: `## Գաղափարը

$\\lim\\limits_{x \\to a} f(x) = A$ նշանակում է՝ երբ $x$-ը մոտենում է $a$-ին (բայց $x \\ne a$), $f(x)$ արժեքները մոտենում են $A$-ին։

**Օրինակ 1։** $f(x) = \\dfrac{x^2 - 1}{x - 1}$-ը որոշված չէ $x = 1$-ում։ Նայենք մոտակա արժեքներին․

| $x$ | $0{,}9$ | $0{,}99$ | $1{,}01$ | $1{,}1$ |
|---|---|---|---|---|
| $f(x)$ | $1{,}9$ | $1{,}99$ | $2{,}01$ | $2{,}1$ |

Արժեքները մոտենում են $2$-ին, ուստի $\\lim\\limits_{x \\to 1} f(x) = 2$, թեև $f(1)$-ը գոյություն չունի։ Իրոք, $x \\ne 1$ դեպքում $f(x) = x + 1$։

## Անընդհատություն

> $f$-ը **անընդհատ** է $a$ կետում, եթե $\\lim\\limits_{x \\to a} f(x) = f(a)$։

Անընդհատ ֆունկցիայի գրաֆիկը կարելի է գծել առանց մատիտը թղթից կտրելու։ Բազմանդամները, $\\sin x$-ը, $\\cos x$-ը, $\\sqrt{x}$-ը ($x \\ge 0$) և $a^x$-ը անընդհատ են այնտեղ, որտեղ որոշված են։ Նրանց սահմանը գտնվում է **տեղադրմամբ**։

**Օրինակ 2։** $\\lim\\limits_{x \\to 2} (x^3 - 3x + 1) = 8 - 6 + 1 = 3$։

**Օրինակ 3։** $\\lim\\limits_{x \\to \\pi} \\cos\\dfrac{x}{3} = \\cos\\dfrac{\\pi}{3} = \\dfrac12$։

## 0/0 տեսքը

Եթե տեղադրումը տալիս է $\\dfrac00$, նախ պարզեցրեք։

**Օրինակ 4։** $\\lim\\limits_{x \\to 3} \\dfrac{x^2 - 9}{x - 3} = \\lim\\limits_{x \\to 3} (x + 3) = 6$։

**Օրինակ 5։** $\\lim\\limits_{x \\to 0} \\dfrac{\\sqrt{x + 4} - 2}{x}$։ Բազմապատկենք $\\sqrt{x + 4} + 2$-ով՝

$$\\frac{x + 4 - 4}{x(\\sqrt{x + 4} + 2)} = \\frac{1}{\\sqrt{x + 4} + 2} \\to \\frac14.$$

## Նշանավոր սահման

$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\quad (x\\text{-ը ռադիաններով}).$$

Փոքր անկյունների համար $\\sin x \\approx x$՝ $\\sin 0{,}1 \\approx 0{,}0998$։

**Օրինակ 6։** $\\lim\\limits_{x \\to 0} \\dfrac{\\sin 3x}{x} = \\lim\\limits_{x \\to 0} 3 \\cdot \\dfrac{\\sin 3x}{3x} = 3$։

## Սահմաններ անվերջությունում

**Օրինակ 7։** $\\lim\\limits_{x \\to \\infty} \\dfrac{4x + 1}{2x - 5} = 2$, ինչպես հաջորդականությունների դեպքում։

### Վարժություններ

1. Գտեք $\\lim\\limits_{x \\to -1} (2x^2 + x)$-ը։
2. Գտեք $\\lim\\limits_{x \\to 2} \\dfrac{x^2 - 4}{x - 2}$-ը։
3. Գտեք $\\lim\\limits_{x \\to 1} \\dfrac{x^2 + 2x - 3}{x - 1}$-ը։
4. Գտեք $\\lim\\limits_{x \\to 0} \\dfrac{\\sin 5x}{x}$-ը։
5. Գտեք $\\lim\\limits_{x \\to 9} \\dfrac{\\sqrt{x} - 3}{x - 9}$-ը։
6. Գտեք $\\lim\\limits_{x \\to \\infty} \\dfrac{3x^2 - x}{x^2 + 7}$-ը։
7. Անընդհա՞տ է արդյոք $f(x) = \\dfrac{1}{x}$-ը $x = 0$ կետում։

### Պատասխաններ

1. $1$։ 2. $4$։ 3. $(x + 3) \\to 4$։ 4. $5$։ 5. $\\dfrac{1}{\\sqrt{x} + 3} \\to \\dfrac16$։ 6. $3$։ 7. Ոչ՝ այն որոշված չէ $0$-ում, և գրաֆիկն այնտեղ ընդհատվում է։`,
        ru: `## Идея

$\\lim\\limits_{x \\to a} f(x) = A$ означает: когда $x$ приближается к $a$ (но $x \\ne a$), значения $f(x)$ приближаются к $A$.

**Пример 1.** $f(x) = \\dfrac{x^2 - 1}{x - 1}$ не определена при $x = 1$. Посмотрим на близкие значения:

| $x$ | $0{,}9$ | $0{,}99$ | $1{,}01$ | $1{,}1$ |
|---|---|---|---|---|
| $f(x)$ | $1{,}9$ | $1{,}99$ | $2{,}01$ | $2{,}1$ |

Значения приближаются к $2$, поэтому $\\lim\\limits_{x \\to 1} f(x) = 2$, хотя $f(1)$ не существует. Действительно, при $x \\ne 1$ $f(x) = x + 1$.

## Непрерывность

> $f$ **непрерывна** в точке $a$, если $\\lim\\limits_{x \\to a} f(x) = f(a)$.

График непрерывной функции можно нарисовать, не отрывая карандаша. Многочлены, $\\sin x$, $\\cos x$, $\\sqrt{x}$ ($x \\ge 0$) и $a^x$ непрерывны там, где определены. Для них предел находят **подстановкой**.

**Пример 2.** $\\lim\\limits_{x \\to 2} (x^3 - 3x + 1) = 8 - 6 + 1 = 3$.

**Пример 3.** $\\lim\\limits_{x \\to \\pi} \\cos\\dfrac{x}{3} = \\cos\\dfrac{\\pi}{3} = \\dfrac12$.

## Неопределённость 0/0

Если подстановка даёт $\\dfrac00$, сначала упростите.

**Пример 4.** $\\lim\\limits_{x \\to 3} \\dfrac{x^2 - 9}{x - 3} = \\lim\\limits_{x \\to 3} (x + 3) = 6$.

**Пример 5.** $\\lim\\limits_{x \\to 0} \\dfrac{\\sqrt{x + 4} - 2}{x}$. Умножим на $\\sqrt{x + 4} + 2$:

$$\\frac{x + 4 - 4}{x(\\sqrt{x + 4} + 2)} = \\frac{1}{\\sqrt{x + 4} + 2} \\to \\frac14.$$

## Замечательный предел

$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\quad (x \\text{ в радианах}).$$

Для малых углов $\\sin x \\approx x$: $\\sin 0{,}1 \\approx 0{,}0998$.

**Пример 6.** $\\lim\\limits_{x \\to 0} \\dfrac{\\sin 3x}{x} = \\lim\\limits_{x \\to 0} 3 \\cdot \\dfrac{\\sin 3x}{3x} = 3$.

## Пределы на бесконечности

**Пример 7.** $\\lim\\limits_{x \\to \\infty} \\dfrac{4x + 1}{2x - 5} = 2$, как и для последовательностей.

### Упражнения

1. Найдите $\\lim\\limits_{x \\to -1} (2x^2 + x)$.
2. Найдите $\\lim\\limits_{x \\to 2} \\dfrac{x^2 - 4}{x - 2}$.
3. Найдите $\\lim\\limits_{x \\to 1} \\dfrac{x^2 + 2x - 3}{x - 1}$.
4. Найдите $\\lim\\limits_{x \\to 0} \\dfrac{\\sin 5x}{x}$.
5. Найдите $\\lim\\limits_{x \\to 9} \\dfrac{\\sqrt{x} - 3}{x - 9}$.
6. Найдите $\\lim\\limits_{x \\to \\infty} \\dfrac{3x^2 - x}{x^2 + 7}$.
7. Непрерывна ли $f(x) = \\dfrac{1}{x}$ в точке $x = 0$?

### Ответы

1. $1$. 2. $4$. 3. $(x + 3) \\to 4$. 4. $5$. 5. $\\dfrac{1}{\\sqrt{x} + 3} \\to \\dfrac16$. 6. $3$. 7. Нет: в $0$ она не определена, и график там разрывается.`,
      },
      [
        q(
          t("lim (x² − 9)/(x − 3) as x → 3 equals…", "lim (x² − 9)/(x − 3), երբ x → 3, հավասար է…", "lim (x² − 9)/(x − 3) при x → 3 равен…"),
          [t("0", "0", "0"), t("6", "6", "6"), t("it does not exist", "գոյություն չունի", "не существует")],
          1,
        ),
        q(
          t("f is continuous at a if…", "f-ը անընդհատ է a կետում, եթե…", "f непрерывна в точке a, если…"),
          [t("lim f(x) as x → a equals f(a)", "lim f(x)-ը, երբ x → a, հավասար է f(a)-ի", "lim f(x) при x → a равен f(a)"), t("f(a) = 0", "f(a) = 0", "f(a) = 0"), t("f is increasing", "f-ը աճող է", "f возрастает")],
          0,
        ),
        q(
          t("lim sin x / x as x → 0 equals…", "lim sin x / x, երբ x → 0, հավասար է…", "lim sin x / x при x → 0 равен…"),
          [t("0", "0", "0"), t("1", "1", "1"), t("π", "π", "π")],
          1,
        ),
        q(
          t("lim sin 3x / x as x → 0 equals…", "lim sin 3x / x, երբ x → 0, հավասար է…", "lim sin 3x / x при x → 0 равен…"),
          [t("1/3", "1/3", "1/3"), t("1", "1", "1"), t("3", "3", "3")],
          2,
        ),
        q(
          t("If substitution gives 0/0, you should…", "Եթե տեղադրումը տալիս է 0/0, պետք է…", "Если подстановка дала 0/0, нужно…"),
          [t("answer 0", "պատասխանել 0", "ответить 0"), t("simplify the expression first", "նախ պարզեցնել արտահայտությունը", "сначала упростить выражение"), t("answer 1", "պատասխանել 1", "ответить 1")],
          1,
        ),
        q(
          t("lim (4x + 1)/(2x − 5) as x → ∞ equals…", "lim (4x + 1)/(2x − 5), երբ x → ∞, հավասար է…", "lim (4x + 1)/(2x − 5) при x → ∞ равен…"),
          [t("2", "2", "2"), t("−1/5", "−1/5", "−1/5"), t("4", "4", "4")],
          0,
        ),
      ],
    ),
    lesson(
      "derivative-idea",
      ["The idea of the derivative", "Ածանցյալի գաղափարը", "Понятие производной"],
      {
        en: ["Find the average rate of change Δy/Δx of a function on an interval", "Define the derivative as the limit of Δy/Δx as Δx → 0", "Interpret the derivative as instantaneous speed and as the slope of the tangent"],
        hy: ["Գտնել ֆունկցիայի փոփոխության միջին արագությունը՝ Δy/Δx, միջակայքում", "Սահմանել ածանցյալը որպես Δy/Δx-ի սահման, երբ Δx → 0", "Մեկնաբանել ածանցյալը որպես ակնթարթային արագություն և շոշափողի թեքություն"],
        ru: ["Находить среднюю скорость изменения функции Δy/Δx на промежутке", "Определять производную как предел Δy/Δx при Δx → 0", "Понимать производную как мгновенную скорость и угловой коэффициент касательной"],
      },
      {
        en: `## Average rate of change

When $x$ changes from $x_0$ to $x_0 + \\Delta x$, the function changes by $\\Delta y = f(x_0 + \\Delta x) - f(x_0)$. The ratio

$$\\frac{\\Delta y}{\\Delta x}$$

is the **average rate of change**. On the graph it is the slope of the secant through two points.

**Example 1.** A stone falls $s(t) = 5t^2$ metres in $t$ seconds. From $t = 1$ to $t = 3$: $\\dfrac{\\Delta s}{\\Delta t} = \\dfrac{45 - 5}{2} = 20$ m/s on average.

## Instantaneous rate: the derivative

What is the speed of the stone **at** $t = 1$? Take shorter and shorter intervals:

$$\\frac{s(1 + \\Delta t) - s(1)}{\\Delta t} = \\frac{5(1 + \\Delta t)^2 - 5}{\\Delta t} = 10 + 5\\Delta t.$$

| $\\Delta t$ | $1$ | $0.1$ | $0.01$ | $0.001$ |
|---|---|---|---|---|
| Average speed | $15$ | $10.5$ | $10.05$ | $10.005$ |

As $\\Delta t \\to 0$ the average speed tends to $10$ m/s. This is the instantaneous speed.

> The **derivative** of $f$ at $x_0$ is

$$f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}.$$

## Geometric meaning

As the second point slides towards the first, the secant turns into the **tangent**. So $f'(x_0)$ is the slope $k$ of the tangent at $x_0$, and the tangent line is

$$y = f(x_0) + f'(x_0)(x - x_0).$$

**Example 2.** $f(x) = x^2$ at $x_0 = 3$: $\\dfrac{(3 + \\Delta x)^2 - 9}{\\Delta x} = 6 + \\Delta x \\to 6$. So $f'(3) = 6$ and the tangent is $y = 9 + 6(x - 3) = 6x - 9$.

**Example 3.** For $f(x) = x^2$ at any $x$: $\\dfrac{(x + \\Delta x)^2 - x^2}{\\Delta x} = 2x + \\Delta x \\to 2x$. So $(x^2)' = 2x$.

**Example 4.** $f(x) = kx + b$: $\\dfrac{\\Delta y}{\\Delta x} = k$ for every $\\Delta x$, so $f'(x) = k$. A line is its own tangent.

### Exercises

1. Find the average rate of change of $f(x) = x^2$ from $x = 1$ to $x = 4$.
2. For $s(t) = 5t^2$, find the average speed from $t = 2$ to $t = 2.1$.
3. Using the definition, find $f'(2)$ for $f(x) = x^2$.
4. Using the definition, find $f'(x)$ for $f(x) = 3x^2$.
5. Find $f'(x)$ for $f(x) = 7 - 2x$.
6. Write the tangent to $y = x^2$ at $x_0 = -1$.
7. A car's distance is $s(t) = t^2 + 4t$ (m). Find its speed at $t = 5$ s.

### Answers

1. $\\dfrac{16 - 1}{3} = 5$. 2. $\\dfrac{22.05 - 20}{0.1} = 20.5$ m/s. 3. $4 + \\Delta x \\to 4$. 4. $6x$. 5. $-2$. 6. $f'(-1) = -2$: $y = 1 - 2(x + 1) = -2x - 1$. 7. $\\dfrac{\\Delta s}{\\Delta t} = 2t + 4 + \\Delta t \\to 14$ m/s.`,
        hy: `## Փոփոխության միջին արագությունը

Երբ $x$-ը $x_0$-ից փոխվում է մինչև $x_0 + \\Delta x$, ֆունկցիան փոխվում է $\\Delta y = f(x_0 + \\Delta x) - f(x_0)$-ով։

$$\\frac{\\Delta y}{\\Delta x}$$

հարաբերությունը **փոփոխության միջին արագությունն** է։ Գրաֆիկի վրա այն երկու կետով անցնող հատողի թեքությունն է։

**Օրինակ 1։** Քարը $t$ վայրկյանում ընկնում է $s(t) = 5t^2$ մետր։ $t = 1$-ից մինչև $t = 3$՝ $\\dfrac{\\Delta s}{\\Delta t} = \\dfrac{45 - 5}{2} = 20$ մ/վ միջինում։

## Ակնթարթային արագություն՝ ածանցյալ

Ինչքա՞ն է քարի արագությունը **հենց** $t = 1$ պահին։ Վերցնենք ավելի ու ավելի կարճ միջակայքեր․

$$\\frac{s(1 + \\Delta t) - s(1)}{\\Delta t} = \\frac{5(1 + \\Delta t)^2 - 5}{\\Delta t} = 10 + 5\\Delta t.$$

| $\\Delta t$ | $1$ | $0{,}1$ | $0{,}01$ | $0{,}001$ |
|---|---|---|---|---|
| Միջին արագություն | $15$ | $10{,}5$ | $10{,}05$ | $10{,}005$ |

Երբ $\\Delta t \\to 0$, միջին արագությունը ձգտում է $10$ մ/վ-ի։ Սա ակնթարթային արագությունն է։

> $f$-ի **ածանցյալը** $x_0$ կետում

$$f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}.$$

## Երկրաչափական իմաստը

Երբ երկրորդ կետը սահում է դեպի առաջինը, հատողը վերածվում է **շոշափողի**։ Ուստի $f'(x_0)$-ն $x_0$ կետում շոշափողի $k$ թեքությունն է, իսկ շոշափողի հավասարումն է

$$y = f(x_0) + f'(x_0)(x - x_0).$$

**Օրինակ 2։** $f(x) = x^2$, $x_0 = 3$՝ $\\dfrac{(3 + \\Delta x)^2 - 9}{\\Delta x} = 6 + \\Delta x \\to 6$։ Ուստի $f'(3) = 6$, և շոշափողն է $y = 9 + 6(x - 3) = 6x - 9$։

**Օրինակ 3։** $f(x) = x^2$ ցանկացած $x$-ի համար՝ $\\dfrac{(x + \\Delta x)^2 - x^2}{\\Delta x} = 2x + \\Delta x \\to 2x$։ Ուստի $(x^2)' = 2x$։

**Օրինակ 4։** $f(x) = kx + b$՝ $\\dfrac{\\Delta y}{\\Delta x} = k$ ցանկացած $\\Delta x$-ի համար, ուստի $f'(x) = k$։ Ուղիղն ինքն իր շոշափողն է։

### Վարժություններ

1. Գտեք $f(x) = x^2$-ի փոփոխության միջին արագությունը $x = 1$-ից մինչև $x = 4$։
2. $s(t) = 5t^2$-ի համար գտեք միջին արագությունը $t = 2$-ից մինչև $t = 2{,}1$։
3. Սահմանման օգնությամբ գտեք $f'(2)$-ը $f(x) = x^2$-ի համար։
4. Սահմանման օգնությամբ գտեք $f'(x)$-ը $f(x) = 3x^2$-ի համար։
5. Գտեք $f'(x)$-ը $f(x) = 7 - 2x$-ի համար։
6. Գրեք $y = x^2$-ի շոշափողը $x_0 = -1$ կետում։
7. Մեքենայի անցած ճանապարհը $s(t) = t^2 + 4t$ (մ) է։ Գտեք նրա արագությունը $t = 5$ վ պահին։

### Պատասխաններ

1. $\\dfrac{16 - 1}{3} = 5$։ 2. $\\dfrac{22{,}05 - 20}{0{,}1} = 20{,}5$ մ/վ։ 3. $4 + \\Delta x \\to 4$։ 4. $6x$։ 5. $-2$։ 6. $f'(-1) = -2$՝ $y = 1 - 2(x + 1) = -2x - 1$։ 7. $\\dfrac{\\Delta s}{\\Delta t} = 2t + 4 + \\Delta t \\to 14$ մ/վ։`,
        ru: `## Средняя скорость изменения

Когда $x$ меняется от $x_0$ до $x_0 + \\Delta x$, функция меняется на $\\Delta y = f(x_0 + \\Delta x) - f(x_0)$. Отношение

$$\\frac{\\Delta y}{\\Delta x}$$

— это **средняя скорость изменения**. На графике это угловой коэффициент секущей через две точки.

**Пример 1.** Камень за $t$ секунд падает на $s(t) = 5t^2$ метров. От $t = 1$ до $t = 3$: $\\dfrac{\\Delta s}{\\Delta t} = \\dfrac{45 - 5}{2} = 20$ м/с в среднем.

## Мгновенная скорость: производная

Какова скорость камня **в момент** $t = 1$? Возьмём всё более короткие промежутки:

$$\\frac{s(1 + \\Delta t) - s(1)}{\\Delta t} = \\frac{5(1 + \\Delta t)^2 - 5}{\\Delta t} = 10 + 5\\Delta t.$$

| $\\Delta t$ | $1$ | $0{,}1$ | $0{,}01$ | $0{,}001$ |
|---|---|---|---|---|
| Средняя скорость | $15$ | $10{,}5$ | $10{,}05$ | $10{,}005$ |

При $\\Delta t \\to 0$ средняя скорость стремится к $10$ м/с. Это мгновенная скорость.

> **Производная** функции $f$ в точке $x_0$:

$$f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}.$$

## Геометрический смысл

Когда вторая точка скользит к первой, секущая превращается в **касательную**. Поэтому $f'(x_0)$ — угловой коэффициент $k$ касательной в точке $x_0$, а уравнение касательной

$$y = f(x_0) + f'(x_0)(x - x_0).$$

**Пример 2.** $f(x) = x^2$ в точке $x_0 = 3$: $\\dfrac{(3 + \\Delta x)^2 - 9}{\\Delta x} = 6 + \\Delta x \\to 6$. Значит, $f'(3) = 6$, касательная $y = 9 + 6(x - 3) = 6x - 9$.

**Пример 3.** Для $f(x) = x^2$ при любом $x$: $\\dfrac{(x + \\Delta x)^2 - x^2}{\\Delta x} = 2x + \\Delta x \\to 2x$. Значит, $(x^2)' = 2x$.

**Пример 4.** $f(x) = kx + b$: $\\dfrac{\\Delta y}{\\Delta x} = k$ при любом $\\Delta x$, поэтому $f'(x) = k$. Прямая сама себе касательная.

### Упражнения

1. Найдите среднюю скорость изменения $f(x) = x^2$ от $x = 1$ до $x = 4$.
2. Для $s(t) = 5t^2$ найдите среднюю скорость от $t = 2$ до $t = 2{,}1$.
3. По определению найдите $f'(2)$ для $f(x) = x^2$.
4. По определению найдите $f'(x)$ для $f(x) = 3x^2$.
5. Найдите $f'(x)$ для $f(x) = 7 - 2x$.
6. Запишите касательную к $y = x^2$ в точке $x_0 = -1$.
7. Путь машины $s(t) = t^2 + 4t$ (м). Найдите её скорость при $t = 5$ с.

### Ответы

1. $\\dfrac{16 - 1}{3} = 5$. 2. $\\dfrac{22{,}05 - 20}{0{,}1} = 20{,}5$ м/с. 3. $4 + \\Delta x \\to 4$. 4. $6x$. 5. $-2$. 6. $f'(-1) = -2$: $y = 1 - 2(x + 1) = -2x - 1$. 7. $\\dfrac{\\Delta s}{\\Delta t} = 2t + 4 + \\Delta t \\to 14$ м/с.`,
      },
      [
        q(
          t("The average rate of change is…", "Փոփոխության միջին արագությունը…", "Средняя скорость изменения —"),
          [t("Δy/Δx", "Δy/Δx-ն է", "Δy/Δx"), t("Δy · Δx", "Δy · Δx-ն է", "Δy · Δx"), t("Δx/Δy", "Δx/Δy-ն է", "Δx/Δy")],
          0,
        ),
        q(
          t("The derivative is the limit of Δy/Δx as…", "Ածանցյալը Δy/Δx-ի սահմանն է, երբ…", "Производная — предел Δy/Δx при…"),
          [t("Δx → ∞", "Δx → ∞", "Δx → ∞"), t("Δx → 0", "Δx → 0", "Δx → 0"), t("Δy → 1", "Δy → 1", "Δy → 1")],
          1,
        ),
        q(
          t("Geometrically, f′(x₀) is…", "Երկրաչափորեն f′(x₀)-ն…", "Геометрически f′(x₀) — это…"),
          [t("the slope of the tangent at x₀", "x₀ կետում շոշափողի թեքությունն է", "угловой коэффициент касательной в x₀"), t("the value f(x₀)", "f(x₀) արժեքն է", "значение f(x₀)"), t("the area under the graph", "գրաֆիկի տակի մակերեսն է", "площадь под графиком")],
          0,
        ),
        q(
          t("For f(x) = x², f′(3) equals…", "f(x) = x²-ի համար f′(3)-ը…", "Для f(x) = x² f′(3) равно…"),
          [t("9", "9", "9"), t("6", "6", "6"), t("3", "3", "3")],
          1,
        ),
        q(
          t("The derivative of f(x) = kx + b is…", "f(x) = kx + b-ի ածանցյալը…", "Производная f(x) = kx + b —"),
          [t("k", "k", "k"), t("b", "b", "b"), t("kx", "kx", "kx")],
          0,
        ),
        q(
          t("s(t) = 5t² m. The speed at t = 1 s is…", "s(t) = 5t² մ։ Արագությունը t = 1 վ պահին…", "s(t) = 5t² м. Скорость при t = 1 с —"),
          [t("5 m/s", "5 մ/վ", "5 м/с"), t("10 m/s", "10 մ/վ", "10 м/с"), t("20 m/s", "20 մ/վ", "20 м/с")],
          1,
        ),
      ],
    ),
    lesson(
      "derivative-rules-intro",
      ["First rules of differentiation", "Ածանցման առաջին կանոնները", "Первые правила дифференцирования"],
      {
        en: ["Use the derivatives of c, x, xⁿ, √x, sin x and cos x", "Differentiate sums, constant multiples, products and quotients", "Find the slope of a tangent and the speed of a motion with the rules"],
        hy: ["Օգտվել c-ի, x-ի, xⁿ-ի, √x-ի, sin x-ի և cos x-ի ածանցյալներից", "Ածանցել գումարներ, հաստատունով բազմապատկած ֆունկցիաներ, արտադրյալներ և քանորդներ", "Կանոններով գտնել շոշափողի թեքությունը և շարժման արագությունը"],
        ru: ["Использовать производные c, x, xⁿ, √x, sin x и cos x", "Дифференцировать суммы, произведения на число, произведения и частные", "Находить с помощью правил угловой коэффициент касательной и скорость движения"],
      },
      {
        en: `## Table of derivatives

| $f(x)$ | $f'(x)$ |
|---|---|
| $c$ (constant) | $0$ |
| $x$ | $1$ |
| $x^n$ | $n x^{n-1}$ |
| $\\sqrt{x}$ | $\\dfrac{1}{2\\sqrt{x}}$ |
| $\\dfrac1x$ | $-\\dfrac{1}{x^2}$ |
| $\\sin x$ | $\\cos x$ |
| $\\cos x$ | $-\\sin x$ |

The power rule works for any real exponent: $\\sqrt{x} = x^{1/2}$ gives $\\dfrac12 x^{-1/2}$.

## Rules

$$(u + v)' = u' + v', \\qquad (cu)' = c\\,u',$$

$$(uv)' = u'v + uv', \\qquad \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}.$$

**Example 1.** $(3x^4 - 5x^2 + 7x - 2)' = 12x^3 - 10x + 7$.

**Example 2.** $(2\\sin x + \\cos x)' = 2\\cos x - \\sin x$.

**Example 3.** $(x^2 \\sin x)' = 2x\\sin x + x^2\\cos x$.

**Example 4.** $\\left(\\dfrac{x}{x + 1}\\right)' = \\dfrac{1 \\cdot (x + 1) - x \\cdot 1}{(x + 1)^2} = \\dfrac{1}{(x + 1)^2}$.

**Example 5.** $(\\tan x)' = \\left(\\dfrac{\\sin x}{\\cos x}\\right)' = \\dfrac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\dfrac{1}{\\cos^2 x}$.

## Applications

**Example 6.** Tangent to $y = x^3$ at $x_0 = 2$: $y' = 3x^2$, $k = 12$, $y(2) = 8$, so $y = 8 + 12(x - 2) = 12x - 16$.

**Example 7.** A body moves by $s(t) = t^3 - 6t^2 + 15t$ m. Its speed is $v(t) = s'(t) = 3t^2 - 12t + 15$. At $t = 3$ s: $v = 27 - 36 + 15 = 6$ m/s.

In grade 11 the derivative is used to find where a function increases and where it has a maximum or minimum.

### Exercises

1. Differentiate $x^5 - 4x^3 + x$.
2. Differentiate $6\\sqrt{x} - \\dfrac{2}{x}$.
3. Differentiate $3\\cos x - x^2$.
4. Differentiate $x\\cos x$.
5. Differentiate $\\dfrac{x^2}{x - 1}$.
6. Write the tangent to $y = x^2 - 3x$ at $x_0 = 1$.
7. For $s(t) = 2t^2 + 3t$ m, find the speed at $t = 4$ s.

### Answers

1. $5x^4 - 12x^2 + 1$. 2. $\\dfrac{3}{\\sqrt{x}} + \\dfrac{2}{x^2}$. 3. $-3\\sin x - 2x$. 4. $\\cos x - x\\sin x$. 5. $\\dfrac{2x(x - 1) - x^2}{(x - 1)^2} = \\dfrac{x^2 - 2x}{(x - 1)^2}$. 6. $y' = 2x - 3$, $k = -1$, $y(1) = -2$: $y = -x - 1$. 7. $v = 4t + 3 = 19$ m/s.`,
        hy: `## Ածանցյալների աղյուսակ

| $f(x)$ | $f'(x)$ |
|---|---|
| $c$ (հաստատուն) | $0$ |
| $x$ | $1$ |
| $x^n$ | $n x^{n-1}$ |
| $\\sqrt{x}$ | $\\dfrac{1}{2\\sqrt{x}}$ |
| $\\dfrac1x$ | $-\\dfrac{1}{x^2}$ |
| $\\sin x$ | $\\cos x$ |
| $\\cos x$ | $-\\sin x$ |

Աստիճանի կանոնը ճիշտ է ցանկացած իրական ցուցիչի համար՝ $\\sqrt{x} = x^{1/2}$-ից ստացվում է $\\dfrac12 x^{-1/2}$։

## Կանոններ

$$(u + v)' = u' + v', \\qquad (cu)' = c\\,u',$$

$$(uv)' = u'v + uv', \\qquad \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}.$$

**Օրինակ 1։** $(3x^4 - 5x^2 + 7x - 2)' = 12x^3 - 10x + 7$։

**Օրինակ 2։** $(2\\sin x + \\cos x)' = 2\\cos x - \\sin x$։

**Օրինակ 3։** $(x^2 \\sin x)' = 2x\\sin x + x^2\\cos x$։

**Օրինակ 4։** $\\left(\\dfrac{x}{x + 1}\\right)' = \\dfrac{1 \\cdot (x + 1) - x \\cdot 1}{(x + 1)^2} = \\dfrac{1}{(x + 1)^2}$։

**Օրինակ 5։** $(\\operatorname{tg} x)' = \\left(\\dfrac{\\sin x}{\\cos x}\\right)' = \\dfrac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\dfrac{1}{\\cos^2 x}$։

## Կիրառություններ

**Օրինակ 6։** $y = x^3$-ի շոշափողը $x_0 = 2$ կետում՝ $y' = 3x^2$, $k = 12$, $y(2) = 8$, ուստի $y = 8 + 12(x - 2) = 12x - 16$։

**Օրինակ 7։** Մարմինը շարժվում է $s(t) = t^3 - 6t^2 + 15t$ մ օրենքով։ Նրա արագությունն է $v(t) = s'(t) = 3t^2 - 12t + 15$։ $t = 3$ վ պահին՝ $v = 27 - 36 + 15 = 6$ մ/վ։

11-րդ դասարանում ածանցյալն օգտագործվում է պարզելու համար, թե որտեղ է ֆունկցիան աճում և որտեղ ունի մաքսիմում կամ մինիմում։

### Վարժություններ

1. Ածանցեք $x^5 - 4x^3 + x$-ը։
2. Ածանցեք $6\\sqrt{x} - \\dfrac{2}{x}$-ը։
3. Ածանցեք $3\\cos x - x^2$-ը։
4. Ածանցեք $x\\cos x$-ը։
5. Ածանցեք $\\dfrac{x^2}{x - 1}$-ը։
6. Գրեք $y = x^2 - 3x$-ի շոշափողը $x_0 = 1$ կետում։
7. $s(t) = 2t^2 + 3t$ մ օրենքի համար գտեք արագությունը $t = 4$ վ պահին։

### Պատասխաններ

1. $5x^4 - 12x^2 + 1$։ 2. $\\dfrac{3}{\\sqrt{x}} + \\dfrac{2}{x^2}$։ 3. $-3\\sin x - 2x$։ 4. $\\cos x - x\\sin x$։ 5. $\\dfrac{2x(x - 1) - x^2}{(x - 1)^2} = \\dfrac{x^2 - 2x}{(x - 1)^2}$։ 6. $y' = 2x - 3$, $k = -1$, $y(1) = -2$՝ $y = -x - 1$։ 7. $v = 4t + 3 = 19$ մ/վ։`,
        ru: `## Таблица производных

| $f(x)$ | $f'(x)$ |
|---|---|
| $c$ (постоянная) | $0$ |
| $x$ | $1$ |
| $x^n$ | $n x^{n-1}$ |
| $\\sqrt{x}$ | $\\dfrac{1}{2\\sqrt{x}}$ |
| $\\dfrac1x$ | $-\\dfrac{1}{x^2}$ |
| $\\sin x$ | $\\cos x$ |
| $\\cos x$ | $-\\sin x$ |

Правило для степени верно при любом действительном показателе: из $\\sqrt{x} = x^{1/2}$ получаем $\\dfrac12 x^{-1/2}$.

## Правила

$$(u + v)' = u' + v', \\qquad (cu)' = c\\,u',$$

$$(uv)' = u'v + uv', \\qquad \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}.$$

**Пример 1.** $(3x^4 - 5x^2 + 7x - 2)' = 12x^3 - 10x + 7$.

**Пример 2.** $(2\\sin x + \\cos x)' = 2\\cos x - \\sin x$.

**Пример 3.** $(x^2 \\sin x)' = 2x\\sin x + x^2\\cos x$.

**Пример 4.** $\\left(\\dfrac{x}{x + 1}\\right)' = \\dfrac{1 \\cdot (x + 1) - x \\cdot 1}{(x + 1)^2} = \\dfrac{1}{(x + 1)^2}$.

**Пример 5.** $(\\operatorname{tg} x)' = \\left(\\dfrac{\\sin x}{\\cos x}\\right)' = \\dfrac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\dfrac{1}{\\cos^2 x}$.

## Применения

**Пример 6.** Касательная к $y = x^3$ в точке $x_0 = 2$: $y' = 3x^2$, $k = 12$, $y(2) = 8$, значит, $y = 8 + 12(x - 2) = 12x - 16$.

**Пример 7.** Тело движется по закону $s(t) = t^3 - 6t^2 + 15t$ м. Его скорость $v(t) = s'(t) = 3t^2 - 12t + 15$. При $t = 3$ с: $v = 27 - 36 + 15 = 6$ м/с.

В 11 классе производную используют, чтобы находить, где функция возрастает и где у неё максимум или минимум.

### Упражнения

1. Найдите производную $x^5 - 4x^3 + x$.
2. Найдите производную $6\\sqrt{x} - \\dfrac{2}{x}$.
3. Найдите производную $3\\cos x - x^2$.
4. Найдите производную $x\\cos x$.
5. Найдите производную $\\dfrac{x^2}{x - 1}$.
6. Запишите касательную к $y = x^2 - 3x$ в точке $x_0 = 1$.
7. Для $s(t) = 2t^2 + 3t$ м найдите скорость при $t = 4$ с.

### Ответы

1. $5x^4 - 12x^2 + 1$. 2. $\\dfrac{3}{\\sqrt{x}} + \\dfrac{2}{x^2}$. 3. $-3\\sin x - 2x$. 4. $\\cos x - x\\sin x$. 5. $\\dfrac{2x(x - 1) - x^2}{(x - 1)^2} = \\dfrac{x^2 - 2x}{(x - 1)^2}$. 6. $y' = 2x - 3$, $k = -1$, $y(1) = -2$: $y = -x - 1$. 7. $v = 4t + 3 = 19$ м/с.`,
      },
      [
        q(
          t("The derivative of x⁵ is…", "x⁵-ի ածանցյալը…", "Производная x⁵ —"),
          [t("5x⁴", "5x⁴", "5x⁴"), t("x⁴", "x⁴", "x⁴"), t("5x⁵", "5x⁵", "5x⁵")],
          0,
        ),
        q(
          t("The derivative of cos x is…", "cos x-ի ածանցյալը…", "Производная cos x —"),
          [t("sin x", "sin x", "sin x"), t("−sin x", "−sin x", "−sin x"), t("−cos x", "−cos x", "−cos x")],
          1,
        ),
        q(
          t("The derivative of a constant is…", "Հաստատունի ածանցյալը…", "Производная постоянной —"),
          [t("the constant itself", "հենց հաստատունն է", "сама постоянная"), t("0", "0", "0"), t("1", "1", "1")],
          1,
        ),
        q(
          t("(uv)′ equals…", "(uv)′-ը հավասար է…", "(uv)′ равно…"),
          [t("u′v′", "u′v′", "u′v′"), t("u′v + uv′", "u′v + uv′", "u′v + uv′"), t("u′v − uv′", "u′v − uv′", "u′v − uv′")],
          1,
        ),
        q(
          t("The derivative of √x is…", "√x-ի ածանցյալը…", "Производная √x —"),
          [t("1/(2√x)", "1/(2√x)", "1/(2√x)"), t("2√x", "2√x", "2√x"), t("√x/2", "√x/2", "√x/2")],
          0,
        ),
        q(
          t("s(t) = t³ − 6t² + 15t. The speed at t = 3 is…", "s(t) = t³ − 6t² + 15t։ Արագությունը t = 3 պահին…", "s(t) = t³ − 6t² + 15t. Скорость при t = 3 —"),
          [t("18", "18", "18"), t("6", "6", "6"), t("0", "0", "0")],
          1,
        ),
      ],
    ),
    lesson(
      "alg10-year-review",
      ["Review of the year", "Տարվա կրկնություն", "Повторение за год"],
      {
        en: ["Revise roots, powers and irrational equations", "Revise trigonometric values, formulas, graphs, equations and inequalities", "Revise limits and the first derivative rules in a mixed test"],
        hy: ["Կրկնել արմատները, աստիճանները և իռացիոնալ հավասարումները", "Կրկնել եռանկյունաչափական արժեքները, բանաձևերը, գրաֆիկները, հավասարումներն ու անհավասարությունները", "Կրկնել սահմանները և ածանցման առաջին կանոնները խառը թեստում"],
        ru: ["Повторить корни, степени и иррациональные уравнения", "Повторить тригонометрические значения, формулы, графики, уравнения и неравенства", "Повторить пределы и первые правила дифференцирования в смешанной работе"],
      },
      {
        en: `## Key facts

| Topic | Remember |
|---|---|
| Powers | $a^{m/n} = \\sqrt[n]{a^m}$, $a^{x}a^{y} = a^{x+y}$ |
| Irrational equations | square both sides, then **check** the roots |
| Radians | $180^\\circ = \\pi$, $l = \\alpha R$ |
| Main identity | $\\sin^2\\alpha + \\cos^2\\alpha = 1$ |
| Double angle | $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$, $\\cos 2\\alpha = 1 - 2\\sin^2\\alpha$ |
| Periods | $\\sin$, $\\cos$: $2\\pi$; $\\tan$: $\\pi$; $f(kx)$: $\\dfrac{T}{k}$ |
| Equations | $\\pm\\arccos a + 2\\pi k$; $(-1)^k\\arcsin a + \\pi k$; $\\arctan a + \\pi k$ |
| Derivatives | $(x^n)' = nx^{n-1}$, $(\\sin x)' = \\cos x$, $(\\cos x)' = -\\sin x$ |

## Worked problems

**Problem 1.** Solve $\\sqrt{x + 7} = x + 1$. Squaring: $x + 7 = x^2 + 2x + 1$, $x^2 + x - 6 = 0$, $x = 2$ or $x = -3$. Check: $x = 2$ gives $3 = 3$; $x = -3$ gives $2 = -2$, false. Answer: $x = 2$.

**Problem 2.** $\\cos\\alpha = -\\dfrac35$, $\\pi < \\alpha < \\dfrac{3\\pi}{2}$. Find $\\sin 2\\alpha$. $\\sin\\alpha = -\\dfrac45$ (quarter III), $\\sin 2\\alpha = 2 \\cdot \\left(-\\dfrac45\\right) \\cdot \\left(-\\dfrac35\\right) = \\dfrac{24}{25}$.

**Problem 3.** Solve $2\\cos^2 x - 1 = 0$ on $[0; \\pi]$. $\\cos 2x = 0$, $2x = \\dfrac{\\pi}{2} + \\pi k$, $x = \\dfrac{\\pi}{4} + \\dfrac{\\pi k}{2}$. On $[0; \\pi]$: $\\dfrac{\\pi}{4}$ and $\\dfrac{3\\pi}{4}$.

**Problem 4.** Find the period and range of $y = 3 - 2\\sin 4x$. Period $\\dfrac{\\pi}{2}$, range $[1; 5]$.

**Problem 5.** Find the tangent to $y = 2\\sin x$ at $x_0 = 0$. $y' = 2\\cos x$, $k = 2$, $y(0) = 0$: $y = 2x$.

### Exercises

1. Compute $27^{2/3} - 16^{0.25}$.
2. Solve $\\sqrt{3x - 2} = x$.
3. Convert $\\dfrac{7\\pi}{9}$ to degrees.
4. Compute $\\sin\\dfrac{7\\pi}{6} + \\cos\\dfrac{2\\pi}{3}$.
5. Simplify $\\dfrac{\\sin 2\\alpha}{2\\cos\\alpha} - \\sin\\alpha$.
6. Solve $\\sin x = -\\dfrac{\\sqrt3}{2}$.
7. Solve $\\tan^2 x = 1$.
8. Solve $\\cos x \\ge \\dfrac12$.
9. Find $\\lim\\limits_{x \\to 4} \\dfrac{x^2 - 16}{x - 4}$.
10. Differentiate $x^3\\cos x$.

### Answers

1. $9 - 2 = 7$. 2. $x^2 - 3x + 2 = 0$, $x = 1$ or $x = 2$; both check. 3. $140^\\circ$. 4. $-\\dfrac12 - \\dfrac12 = -1$. 5. $0$. 6. $x = (-1)^{k+1}\\dfrac{\\pi}{3} + \\pi k$. 7. $x = \\pm\\dfrac{\\pi}{4} + \\pi k$. 8. $-\\dfrac{\\pi}{3} + 2\\pi k \\le x \\le \\dfrac{\\pi}{3} + 2\\pi k$. 9. $8$. 10. $3x^2\\cos x - x^3\\sin x$.`,
        hy: `## Հիմնական փաստեր

| Թեմա | Հիշեք |
|---|---|
| Աստիճաններ | $a^{m/n} = \\sqrt[n]{a^m}$, $a^{x}a^{y} = a^{x+y}$ |
| Իռացիոնալ հավասարումներ | երկու կողմը բարձրացրեք քառակուսի, ապա **ստուգեք** արմատները |
| Ռադիաններ | $180^\\circ = \\pi$, $l = \\alpha R$ |
| Հիմնական նույնություն | $\\sin^2\\alpha + \\cos^2\\alpha = 1$ |
| Կրկնակի անկյուն | $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$, $\\cos 2\\alpha = 1 - 2\\sin^2\\alpha$ |
| Պարբերություններ | $\\sin$, $\\cos$՝ $2\\pi$, $\\operatorname{tg}$՝ $\\pi$, $f(kx)$՝ $\\dfrac{T}{k}$ |
| Հավասարումներ | $\\pm\\arccos a + 2\\pi k$, $(-1)^k\\arcsin a + \\pi k$, $\\operatorname{arctg} a + \\pi k$ |
| Ածանցյալներ | $(x^n)' = nx^{n-1}$, $(\\sin x)' = \\cos x$, $(\\cos x)' = -\\sin x$ |

## Լուծված խնդիրներ

**Խնդիր 1։** Լուծեք $\\sqrt{x + 7} = x + 1$։ Քառակուսի բարձրացնելով՝ $x + 7 = x^2 + 2x + 1$, $x^2 + x - 6 = 0$, $x = 2$ կամ $x = -3$։ Ստուգում՝ $x = 2$-ը տալիս է $3 = 3$, $x = -3$-ը տալիս է $2 = -2$, սխալ է։ Պատասխան՝ $x = 2$։

**Խնդիր 2։** $\\cos\\alpha = -\\dfrac35$, $\\pi < \\alpha < \\dfrac{3\\pi}{2}$։ Գտեք $\\sin 2\\alpha$-ն։ $\\sin\\alpha = -\\dfrac45$ (III քառորդ), $\\sin 2\\alpha = 2 \\cdot \\left(-\\dfrac45\\right) \\cdot \\left(-\\dfrac35\\right) = \\dfrac{24}{25}$։

**Խնդիր 3։** Լուծեք $2\\cos^2 x - 1 = 0$-ն $[0; \\pi]$-ում։ $\\cos 2x = 0$, $2x = \\dfrac{\\pi}{2} + \\pi k$, $x = \\dfrac{\\pi}{4} + \\dfrac{\\pi k}{2}$։ $[0; \\pi]$-ում՝ $\\dfrac{\\pi}{4}$ և $\\dfrac{3\\pi}{4}$։

**Խնդիր 4։** Գտեք $y = 3 - 2\\sin 4x$-ի պարբերությունը և արժեքների տիրույթը։ Պարբերությունը՝ $\\dfrac{\\pi}{2}$, տիրույթը՝ $[1; 5]$։

**Խնդիր 5։** Գտեք $y = 2\\sin x$-ի շոշափողը $x_0 = 0$ կետում։ $y' = 2\\cos x$, $k = 2$, $y(0) = 0$՝ $y = 2x$։

### Վարժություններ

1. Հաշվեք $27^{2/3} - 16^{0{,}25}$-ը։
2. Լուծեք $\\sqrt{3x - 2} = x$ հավասարումը։
3. $\\dfrac{7\\pi}{9}$-ը վերածեք աստիճանների։
4. Հաշվեք $\\sin\\dfrac{7\\pi}{6} + \\cos\\dfrac{2\\pi}{3}$-ը։
5. Պարզեցրեք $\\dfrac{\\sin 2\\alpha}{2\\cos\\alpha} - \\sin\\alpha$-ն։
6. Լուծեք $\\sin x = -\\dfrac{\\sqrt3}{2}$ հավասարումը։
7. Լուծեք $\\operatorname{tg}^2 x = 1$ հավասարումը։
8. Լուծեք $\\cos x \\ge \\dfrac12$ անհավասարությունը։
9. Գտեք $\\lim\\limits_{x \\to 4} \\dfrac{x^2 - 16}{x - 4}$-ը։
10. Ածանցեք $x^3\\cos x$-ը։

### Պատասխաններ

1. $9 - 2 = 7$։ 2. $x^2 - 3x + 2 = 0$, $x = 1$ կամ $x = 2$, երկուսն էլ բավարարում են։ 3. $140^\\circ$։ 4. $-\\dfrac12 - \\dfrac12 = -1$։ 5. $0$։ 6. $x = (-1)^{k+1}\\dfrac{\\pi}{3} + \\pi k$։ 7. $x = \\pm\\dfrac{\\pi}{4} + \\pi k$։ 8. $-\\dfrac{\\pi}{3} + 2\\pi k \\le x \\le \\dfrac{\\pi}{3} + 2\\pi k$։ 9. $8$։ 10. $3x^2\\cos x - x^3\\sin x$։`,
        ru: `## Главное

| Тема | Запомните |
|---|---|
| Степени | $a^{m/n} = \\sqrt[n]{a^m}$, $a^{x}a^{y} = a^{x+y}$ |
| Иррациональные уравнения | возвести обе части в квадрат, затем **проверить** корни |
| Радианы | $180^\\circ = \\pi$, $l = \\alpha R$ |
| Основное тождество | $\\sin^2\\alpha + \\cos^2\\alpha = 1$ |
| Двойной угол | $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$, $\\cos 2\\alpha = 1 - 2\\sin^2\\alpha$ |
| Периоды | $\\sin$, $\\cos$: $2\\pi$; $\\operatorname{tg}$: $\\pi$; $f(kx)$: $\\dfrac{T}{k}$ |
| Уравнения | $\\pm\\arccos a + 2\\pi k$; $(-1)^k\\arcsin a + \\pi k$; $\\operatorname{arctg} a + \\pi k$ |
| Производные | $(x^n)' = nx^{n-1}$, $(\\sin x)' = \\cos x$, $(\\cos x)' = -\\sin x$ |

## Разобранные задачи

**Задача 1.** Решите $\\sqrt{x + 7} = x + 1$. Возводим в квадрат: $x + 7 = x^2 + 2x + 1$, $x^2 + x - 6 = 0$, $x = 2$ или $x = -3$. Проверка: $x = 2$ даёт $3 = 3$; $x = -3$ даёт $2 = -2$ — неверно. Ответ: $x = 2$.

**Задача 2.** $\\cos\\alpha = -\\dfrac35$, $\\pi < \\alpha < \\dfrac{3\\pi}{2}$. Найдите $\\sin 2\\alpha$. $\\sin\\alpha = -\\dfrac45$ (III четверть), $\\sin 2\\alpha = 2 \\cdot \\left(-\\dfrac45\\right) \\cdot \\left(-\\dfrac35\\right) = \\dfrac{24}{25}$.

**Задача 3.** Решите $2\\cos^2 x - 1 = 0$ на $[0; \\pi]$. $\\cos 2x = 0$, $2x = \\dfrac{\\pi}{2} + \\pi k$, $x = \\dfrac{\\pi}{4} + \\dfrac{\\pi k}{2}$. На $[0; \\pi]$: $\\dfrac{\\pi}{4}$ и $\\dfrac{3\\pi}{4}$.

**Задача 4.** Найдите период и множество значений $y = 3 - 2\\sin 4x$. Период $\\dfrac{\\pi}{2}$, множество значений $[1; 5]$.

**Задача 5.** Найдите касательную к $y = 2\\sin x$ в точке $x_0 = 0$. $y' = 2\\cos x$, $k = 2$, $y(0) = 0$: $y = 2x$.

### Упражнения

1. Вычислите $27^{2/3} - 16^{0{,}25}$.
2. Решите $\\sqrt{3x - 2} = x$.
3. Переведите $\\dfrac{7\\pi}{9}$ в градусы.
4. Вычислите $\\sin\\dfrac{7\\pi}{6} + \\cos\\dfrac{2\\pi}{3}$.
5. Упростите $\\dfrac{\\sin 2\\alpha}{2\\cos\\alpha} - \\sin\\alpha$.
6. Решите $\\sin x = -\\dfrac{\\sqrt3}{2}$.
7. Решите $\\operatorname{tg}^2 x = 1$.
8. Решите $\\cos x \\ge \\dfrac12$.
9. Найдите $\\lim\\limits_{x \\to 4} \\dfrac{x^2 - 16}{x - 4}$.
10. Найдите производную $x^3\\cos x$.

### Ответы

1. $9 - 2 = 7$. 2. $x^2 - 3x + 2 = 0$, $x = 1$ или $x = 2$; оба подходят. 3. $140^\\circ$. 4. $-\\dfrac12 - \\dfrac12 = -1$. 5. $0$. 6. $x = (-1)^{k+1}\\dfrac{\\pi}{3} + \\pi k$. 7. $x = \\pm\\dfrac{\\pi}{4} + \\pi k$. 8. $-\\dfrac{\\pi}{3} + 2\\pi k \\le x \\le \\dfrac{\\pi}{3} + 2\\pi k$. 9. $8$. 10. $3x^2\\cos x - x^3\\sin x$.`,
      },
      [
        q(
          t("8^(2/3) equals…", "8^(2/3)-ը հավասար է…", "8^(2/3) равно…"),
          [t("4", "4", "4"), t("16/3", "16/3", "16/3"), t("2", "2", "2")],
          0,
        ),
        q(
          t("Why do we check roots of an irrational equation?", "Ինչու՞ ենք ստուգում իռացիոնալ հավասարման արմատները", "Зачем проверять корни иррационального уравнения?"),
          [t("squaring can add extra roots", "քառակուսի բարձրացնելը կարող է ավելորդ արմատներ ավելացնել", "возведение в квадрат может дать лишние корни"), t("roots are always negative", "արմատները միշտ բացասական են", "корни всегда отрицательны"), t("it is never needed", "դա երբեք պետք չէ", "это никогда не нужно")],
          0,
        ),
        q(
          t("cos α = −3/5 and α is in quarter III. Then sin 2α equals…", "cos α = −3/5, α-ն III քառորդում է։ Այդ դեպքում sin 2α-ն…", "cos α = −3/5, α в III четверти. Тогда sin 2α равен…"),
          [t("−24/25", "−24/25", "−24/25"), t("24/25", "24/25", "24/25"), t("7/25", "7/25", "7/25")],
          1,
        ),
        q(
          t("The period of y = 3 − 2 sin 4x is…", "y = 3 − 2 sin 4x-ի պարբերությունը…", "Период y = 3 − 2 sin 4x —"),
          [t("π/2", "π/2", "π/2"), t("8π", "8π", "8π"), t("2π", "2π", "2π")],
          0,
        ),
        q(
          t("The solutions of tan²x = 1 are…", "tg²x = 1 հավասարման լուծումներն են…", "Решения tg²x = 1 —"),
          [t("x = π/4 + πk", "x = π/4 + πk", "x = π/4 + πk"), t("x = ±π/4 + πk", "x = ±π/4 + πk", "x = ±π/4 + πk"), t("x = π/2 + πk", "x = π/2 + πk", "x = π/2 + πk")],
          1,
        ),
        q(
          t("The derivative of x³ cos x is…", "x³ cos x-ի ածանցյալը…", "Производная x³ cos x —"),
          [t("−3x² sin x", "−3x² sin x", "−3x² sin x"), t("3x² cos x − x³ sin x", "3x² cos x − x³ sin x", "3x² cos x − x³ sin x"), t("3x² cos x + x³ sin x", "3x² cos x + x³ sin x", "3x² cos x + x³ sin x")],
          1,
        ),
      ],
    ),
  ],
};
