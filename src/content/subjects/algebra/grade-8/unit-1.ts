import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Rational fractions", "Ռացիոնալ կոտորակներ", "Рациональные дроби"),
  summary: t(
    "Admissible values, the basic property and reduction, four operations with fractions, combined transformations and the function y = k/x.",
    "Թույլատրելի արժեքներ, հիմնական հատկություն և կրճատում, կոտորակների չորս գործողություն, համակցված ձևափոխություններ և y = k/x ֆունկցիան։",
    "Допустимые значения, основное свойство и сокращение, четыре действия с дробями, совместные преобразования и функция y = k/x.",
  ),
  lessons: [
    lesson(
      "rational-expressions",
      ["Rational expressions and admissible values", "Ռացիոնալ արտահայտություններ և թույլատրելի արժեքներ", "Рациональные выражения и допустимые значения"],
      {
        en: ["Tell a whole expression from a fractional one", "Find the admissible values of the variables", "Find the value of a rational fraction and when it equals zero"],
        hy: ["Տարբերել ամբողջ և կոտորակային արտահայտությունները", "Գտնել փոփոխականների թույլատրելի արժեքները", "Գտնել ռացիոնալ կոտորակի արժեքը և երբ է այն հավասար զրոյի"],
        ru: ["Отличать целое выражение от дробного", "Находить допустимые значения переменных", "Находить значение рациональной дроби и выяснять, когда она равна нулю"],
      },
      {
        en: `## Whole and fractional expressions

An expression built from numbers and variables with addition, subtraction, multiplication, raising to a natural power and division **by numbers only** is called **whole**: $3a^2 - \\dfrac{b}{5} + 2$.

If the expression contains division **by a variable**, it is **fractional**: $\\dfrac{7}{x}$, $\\dfrac{a + 1}{a - 3}$, $\\dfrac{2}{x} + x$.

Whole and fractional expressions together are called **rational expressions**. An expression of the form $\\dfrac{P}{Q}$, where $P$ and $Q$ are polynomials and $Q \\ne 0$, is a **rational fraction**.

## Admissible values

Division by zero is impossible, so the variable may not take values that make the **denominator zero**. All the other values are **admissible**.

**Example 1.** $\\dfrac{5x}{x - 4}$. The denominator is zero when $x = 4$, so the admissible values are all $x \\ne 4$.

**Example 2.** $\\dfrac{a + 2}{a^2 - 9}$. Solve $a^2 - 9 = 0$: $a = 3$ or $a = -3$. Admissible: all $a$ except $3$ and $-3$.

**Example 3.** $\\dfrac{x}{x^2 + 1}$. The denominator $x^2 + 1 \\ge 1$ is never zero, so every value of $x$ is admissible.

## The value of a fraction

To find the value, substitute the number and compute. For $\\dfrac{a - 6}{a + 2}$ at $a = 4$:

$$\\frac{4 - 6}{4 + 2} = \\frac{-2}{6} = -\\frac{1}{3}.$$

## When is a fraction zero?

$$\\frac{P}{Q} = 0 \\iff P = 0 \\text{ and } Q \\ne 0.$$

**Example 4.** $\\dfrac{x^2 - 25}{x - 5} = 0$. The numerator is zero at $x = 5$ and $x = -5$, but $x = 5$ makes the denominator zero. Answer: $x = -5$.

### Exercises

1. Which expressions are whole: $\\dfrac{a}{7}$, $\\dfrac{7}{a}$, $3x^2 - x$, $\\dfrac{1}{x + 1}$?
2. Find the admissible values: $\\dfrac{9}{x + 5}$.
3. Find the admissible values: $\\dfrac{x - 1}{x^2 - 16}$.
4. Find the admissible values: $\\dfrac{3a}{a^2 + 4}$.
5. Find the value of $\\dfrac{2x + 1}{x - 3}$ at $x = 5$.
6. For which $x$ is $\\dfrac{x + 7}{x - 2}$ equal to zero?
7. For which $x$ is $\\dfrac{x^2 - 4}{x + 2}$ equal to zero?
8. The fraction $\\dfrac{5}{x - a}$ has no sense at $x = 8$. Find $a$.

### Answers

1. $\\dfrac{a}{7}$ and $3x^2 - x$. 2. $x \\ne -5$. 3. $x \\ne 4$, $x \\ne -4$. 4. Any $a$. 5. $\\dfrac{11}{2} = 5{,}5$. 6. $x = -7$. 7. $x = 2$. 8. $a = 8$.`,
        hy: `## Ամբողջ և կոտորակային արտահայտություններ

Այն արտահայտությունը, որը կազմված է թվերից և փոփոխականներից գումարման, հանման, բազմապատկման, բնական ցուցիչով աստիճան բարձրացնելու և **միայն թվերով** բաժանման միջոցով, կոչվում է **ամբողջ**․ $3a^2 - \\dfrac{b}{5} + 2$.

Եթե արտահայտությունը պարունակում է **փոփոխականով** բաժանում, այն **կոտորակային** է․ $\\dfrac{7}{x}$, $\\dfrac{a + 1}{a - 3}$, $\\dfrac{2}{x} + x$.

Ամբողջ և կոտորակային արտահայտությունները միասին կոչվում են **ռացիոնալ արտահայտություններ**։ $\\dfrac{P}{Q}$ տեսքի արտահայտությունը, որտեղ $P$-ն և $Q$-ն բազմանդամներ են և $Q \\ne 0$, **ռացիոնալ կոտորակ** է։

## Թույլատրելի արժեքներ

Զրոյի վրա բաժանել չի կարելի, ուստի փոփոխականը չի կարող ընդունել այն արժեքները, որոնց դեպքում **հայտարարը դառնում է զրո**։ Մնացած բոլոր արժեքները **թույլատրելի** են։

**Օրինակ 1։** $\\dfrac{5x}{x - 4}$. Հայտարարը զրո է $x = 4$ դեպքում, ուստի թույլատրելի են բոլոր $x \\ne 4$ արժեքները։

**Օրինակ 2։** $\\dfrac{a + 2}{a^2 - 9}$. Լուծենք $a^2 - 9 = 0$․ $a = 3$ կամ $a = -3$. Թույլատրելի են բոլոր $a$-երը, բացի $3$-ից և $-3$-ից։

**Օրինակ 3։** $\\dfrac{x}{x^2 + 1}$. $x^2 + 1 \\ge 1$ հայտարարն երբեք զրո չէ, ուստի $x$-ի բոլոր արժեքները թույլատրելի են։

## Կոտորակի արժեքը

Արժեքը գտնելու համար տեղադրիր թիվը և հաշվիր։ $\\dfrac{a - 6}{a + 2}$ արտահայտության համար $a = 4$ դեպքում՝

$$\\frac{4 - 6}{4 + 2} = \\frac{-2}{6} = -\\frac{1}{3}.$$

## Երբ է կոտորակը հավասար զրոյի

$$\\frac{P}{Q} = 0 \\iff P = 0 \\text{ և } Q \\ne 0.$$

**Օրինակ 4։** $\\dfrac{x^2 - 25}{x - 5} = 0$. Համարիչը զրո է $x = 5$ և $x = -5$ դեպքերում, բայց $x = 5$-ը հայտարարը զրո է դարձնում։ Պատասխան՝ $x = -5$.

### Վարժություններ

1. Որ արտահայտություններն են ամբողջ՝ $\\dfrac{a}{7}$, $\\dfrac{7}{a}$, $3x^2 - x$, $\\dfrac{1}{x + 1}$.
2. Գտիր թույլատրելի արժեքները՝ $\\dfrac{9}{x + 5}$.
3. Գտիր թույլատրելի արժեքները՝ $\\dfrac{x - 1}{x^2 - 16}$.
4. Գտիր թույլատրելի արժեքները՝ $\\dfrac{3a}{a^2 + 4}$.
5. Գտիր $\\dfrac{2x + 1}{x - 3}$ արտահայտության արժեքը $x = 5$ դեպքում։
6. $x$-ի որ արժեքի դեպքում է $\\dfrac{x + 7}{x - 2}$ հավասար զրոյի։
7. $x$-ի որ արժեքի դեպքում է $\\dfrac{x^2 - 4}{x + 2}$ հավասար զրոյի։
8. $\\dfrac{5}{x - a}$ կոտորակն իմաստ չունի $x = 8$ դեպքում։ Գտիր $a$-ն։

### Պատասխաններ

1. $\\dfrac{a}{7}$ և $3x^2 - x$. 2. $x \\ne -5$. 3. $x \\ne 4$, $x \\ne -4$. 4. Ցանկացած $a$. 5. $\\dfrac{11}{2} = 5{,}5$. 6. $x = -7$. 7. $x = 2$. 8. $a = 8$.`,
        ru: `## Целые и дробные выражения

Выражение, составленное из чисел и переменных с помощью сложения, вычитания, умножения, возведения в натуральную степень и деления **только на числа**, называется **целым**: $3a^2 - \\dfrac{b}{5} + 2$.

Если в выражении есть деление **на переменную**, оно **дробное**: $\\dfrac{7}{x}$, $\\dfrac{a + 1}{a - 3}$, $\\dfrac{2}{x} + x$.

Целые и дробные выражения вместе называют **рациональными выражениями**. Выражение вида $\\dfrac{P}{Q}$, где $P$ и $Q$ — многочлены и $Q \\ne 0$, называется **рациональной дробью**.

## Допустимые значения

На ноль делить нельзя, поэтому переменная не может принимать значения, при которых **знаменатель обращается в ноль**. Все остальные значения — **допустимые**.

**Пример 1.** $\\dfrac{5x}{x - 4}$. Знаменатель равен нулю при $x = 4$, значит допустимы все $x \\ne 4$.

**Пример 2.** $\\dfrac{a + 2}{a^2 - 9}$. Решим $a^2 - 9 = 0$: $a = 3$ или $a = -3$. Допустимы все $a$, кроме $3$ и $-3$.

**Пример 3.** $\\dfrac{x}{x^2 + 1}$. Знаменатель $x^2 + 1 \\ge 1$ никогда не равен нулю, поэтому допустимо любое $x$.

## Значение дроби

Чтобы найти значение, подставь число и вычисли. Для $\\dfrac{a - 6}{a + 2}$ при $a = 4$:

$$\\frac{4 - 6}{4 + 2} = \\frac{-2}{6} = -\\frac{1}{3}.$$

## Когда дробь равна нулю

$$\\frac{P}{Q} = 0 \\iff P = 0 \\text{ и } Q \\ne 0.$$

**Пример 4.** $\\dfrac{x^2 - 25}{x - 5} = 0$. Числитель равен нулю при $x = 5$ и $x = -5$, но при $x = 5$ знаменатель обращается в ноль. Ответ: $x = -5$.

### Упражнения

1. Какие выражения целые: $\\dfrac{a}{7}$, $\\dfrac{7}{a}$, $3x^2 - x$, $\\dfrac{1}{x + 1}$?
2. Найди допустимые значения: $\\dfrac{9}{x + 5}$.
3. Найди допустимые значения: $\\dfrac{x - 1}{x^2 - 16}$.
4. Найди допустимые значения: $\\dfrac{3a}{a^2 + 4}$.
5. Найди значение $\\dfrac{2x + 1}{x - 3}$ при $x = 5$.
6. При каком $x$ дробь $\\dfrac{x + 7}{x - 2}$ равна нулю?
7. При каком $x$ дробь $\\dfrac{x^2 - 4}{x + 2}$ равна нулю?
8. Дробь $\\dfrac{5}{x - a}$ не имеет смысла при $x = 8$. Найди $a$.

### Ответы

1. $\\dfrac{a}{7}$ и $3x^2 - x$. 2. $x \\ne -5$. 3. $x \\ne 4$, $x \\ne -4$. 4. Любое $a$. 5. $\\dfrac{11}{2} = 5{,}5$. 6. $x = -7$. 7. $x = 2$. 8. $a = 8$.`,
      },
      [
        q(t("Which expression is fractional?", "Որ արտահայտությունն է կոտորակային։", "Какое выражение дробное?"), [t("5/x", "5/x", "5/x"), t("x/5", "x/5", "x/5"), t("x squared minus 3", "x-ի քառակուսի մինուս 3", "x в квадрате минус 3")], 0),
        q(t("The admissible values of 9/(x + 5) are…", "9/(x + 5) արտահայտության թույլատրելի արժեքներն են…", "Допустимые значения 9/(x + 5) — это…"), [t("x not equal to 5", "x ≠ 5", "x ≠ 5"), t("x not equal to −5", "x ≠ −5", "x ≠ −5"), t("x not equal to 9", "x ≠ 9", "x ≠ 9")], 1),
        q(t("A fraction equals zero when…", "Կոտորակը հավասար է զրոյի, երբ…", "Дробь равна нулю, когда…"), [t("the denominator is zero", "հայտարարը զրո է", "знаменатель равен нулю"), t("both are zero", "երկուսն էլ զրո են", "оба равны нулю"), t("the numerator is zero and the denominator is not", "համարիչը զրո է, իսկ հայտարարը՝ ոչ", "числитель равен нулю, а знаменатель нет")], 2),
        q(t("For which x does the fraction (x − 1)/(x² − 16) make no sense?", "x-ի որ արժեքների դեպքում (x − 1)/(x² − 16) կոտորակն իմաստ չունի։", "При каких x дробь (x − 1)/(x² − 16) не имеет смысла?"), [t("x = 4 and x = −4", "x = 4 և x = −4", "x = 4 и x = −4"), t("x = 1", "x = 1", "x = 1"), t("x = 16", "x = 16", "x = 16")], 0),
        q(t("The admissible values of 3a/(a² + 4) are…", "3a/(a² + 4) արտահայտության թույլատրելի արժեքներն են…", "Допустимые значения 3a/(a² + 4) — это…"), [t("a ≠ 2", "a ≠ 2", "a ≠ 2"), t("any a", "ցանկացած a", "любое a"), t("a ≠ −4", "a ≠ −4", "a ≠ −4")], 1),
        q(t("The value of (2x + 1)/(x − 3) at x = 5 is…", "(2x + 1)/(x − 3) արտահայտության արժեքը x = 5 դեպքում…", "Значение (2x + 1)/(x − 3) при x = 5 равно…"), [t("11", "11", "11"), t("2", "2", "2"), t("5.5", "5,5", "5,5")], 2),
      ],
    ),
    lesson(
      "reduce-fractions",
      ["Basic property and reduction", "Հիմնական հատկություն և կրճատում", "Основное свойство дроби и сокращение"],
      {
        en: ["Use the basic property of a fraction", "Reduce rational fractions by factoring", "Change the sign in front of a fraction correctly"],
        hy: ["Կիրառել կոտորակի հիմնական հատկությունը", "Կրճատել ռացիոնալ կոտորակները՝ վերլուծելով արտադրիչների", "Ճիշտ փոխել կոտորակի առջևի նշանը"],
        ru: ["Применять основное свойство дроби", "Сокращать рациональные дроби разложением на множители", "Правильно менять знак перед дробью"],
      },
      {
        en: `## The basic property

For $c \\ne 0$:

$$\\frac{a}{b} = \\frac{a c}{b c}.$$

Multiplying or dividing the numerator and the denominator by the same non-zero expression does not change the fraction. Dividing is called **reduction** (cancelling).

## How to reduce

1. Factor the numerator and the denominator completely.
2. Cancel the common factors.

**Example 1.** $\\dfrac{12a^3b}{18ab^2} = \\dfrac{2a^2}{3b}$.

**Example 2.**

$$\\frac{x^2 - 9}{x^2 + 6x + 9} = \\frac{(x - 3)(x + 3)}{(x + 3)^2} = \\frac{x - 3}{x + 3}.$$

**Example 3.**

$$\\frac{5a - 5b}{a^2 - b^2} = \\frac{5(a - b)}{(a - b)(a + b)} = \\frac{5}{a + b}.$$

## Opposite expressions

$a - b$ and $b - a$ are **opposite**: $b - a = -(a - b)$. This helps very often:

$$\\frac{x - 7}{7 - x} = \\frac{x - 7}{-(x - 7)} = -1.$$

$$\\frac{3 - a}{a^2 - 9} = \\frac{-(a - 3)}{(a - 3)(a + 3)} = -\\frac{1}{a + 3}.$$

## Signs

A fraction has three signs: in front of it, in the numerator, in the denominator. Changing any **two** of them does not change the fraction:

$$-\\frac{a}{b} = \\frac{-a}{b} = \\frac{a}{-b}.$$

## A common mistake

Only **factors** may be cancelled, never separate terms:

$$\\frac{x + 4}{x} \\ne 4, \\qquad \\frac{a + 2}{a + 5} \\ne \\frac{2}{5}.$$

### Exercises

1. Reduce $\\dfrac{15x^2y}{20xy^3}$.
2. Reduce $\\dfrac{4a + 4b}{8a}$.
3. Reduce $\\dfrac{x^2 - 16}{x + 4}$.
4. Reduce $\\dfrac{a^2 - 10a + 25}{a^2 - 25}$.
5. Reduce $\\dfrac{2x - 6}{9 - x^2}$.
6. Simplify $\\dfrac{b - 5}{5 - b}$.
7. Write $-\\dfrac{3}{x - 2}$ with the denominator $2 - x$.
8. Is the reduction $\\dfrac{x + 3}{3} = x$ correct? Explain.

### Answers

1. $\\dfrac{3x}{4y^2}$. 2. $\\dfrac{a + b}{2a}$. 3. $x - 4$. 4. $\\dfrac{a - 5}{a + 5}$. 5. $-\\dfrac{2}{3 + x}$. 6. $-1$. 7. $\\dfrac{3}{2 - x}$. 8. No: 3 is a term in the numerator, not a factor.`,
        hy: `## Հիմնական հատկությունը

$c \\ne 0$ դեպքում՝

$$\\frac{a}{b} = \\frac{a c}{b c}.$$

Համարիչն ու հայտարարը նույն ոչ զրոյական արտահայտությամբ բազմապատկելը կամ բաժանելը կոտորակը չի փոխում։ Բաժանումը կոչվում է **կրճատում**։

## Ինչպես կրճատել

1. Լրիվ վերլուծիր համարիչն ու հայտարարն արտադրիչների։
2. Կրճատիր ընդհանուր արտադրիչները։

**Օրինակ 1։** $\\dfrac{12a^3b}{18ab^2} = \\dfrac{2a^2}{3b}$.

**Օրինակ 2։**

$$\\frac{x^2 - 9}{x^2 + 6x + 9} = \\frac{(x - 3)(x + 3)}{(x + 3)^2} = \\frac{x - 3}{x + 3}.$$

**Օրինակ 3։**

$$\\frac{5a - 5b}{a^2 - b^2} = \\frac{5(a - b)}{(a - b)(a + b)} = \\frac{5}{a + b}.$$

## Հակադիր արտահայտություններ

$a - b$-ն և $b - a$-ն **հակադիր** են․ $b - a = -(a - b)$. Սա շատ հաճախ է օգնում․

$$\\frac{x - 7}{7 - x} = \\frac{x - 7}{-(x - 7)} = -1.$$

$$\\frac{3 - a}{a^2 - 9} = \\frac{-(a - 3)}{(a - 3)(a + 3)} = -\\frac{1}{a + 3}.$$

## Նշաններ

Կոտորակն ունի երեք նշան՝ իր առջևում, համարիչում, հայտարարում։ Դրանցից ցանկացած **երկուսը** փոխելը կոտորակը չի փոխում․

$$-\\frac{a}{b} = \\frac{-a}{b} = \\frac{a}{-b}.$$

## Տարածված սխալ

Կրճատել կարելի է միայն **արտադրիչները**, ոչ երբեք առանձին գումարելիները․

$$\\frac{x + 4}{x} \\ne 4, \\qquad \\frac{a + 2}{a + 5} \\ne \\frac{2}{5}.$$

### Վարժություններ

1. Կրճատիր $\\dfrac{15x^2y}{20xy^3}$.
2. Կրճատիր $\\dfrac{4a + 4b}{8a}$.
3. Կրճատիր $\\dfrac{x^2 - 16}{x + 4}$.
4. Կրճատիր $\\dfrac{a^2 - 10a + 25}{a^2 - 25}$.
5. Կրճատիր $\\dfrac{2x - 6}{9 - x^2}$.
6. Պարզեցրու $\\dfrac{b - 5}{5 - b}$.
7. Գրիր $-\\dfrac{3}{x - 2}$ արտահայտությունը $2 - x$ հայտարարով։
8. Ճի՞շտ է $\\dfrac{x + 3}{3} = x$ կրճատումը։ Բացատրիր։

### Պատասխաններ

1. $\\dfrac{3x}{4y^2}$. 2. $\\dfrac{a + b}{2a}$. 3. $x - 4$. 4. $\\dfrac{a - 5}{a + 5}$. 5. $-\\dfrac{2}{3 + x}$. 6. $-1$. 7. $\\dfrac{3}{2 - x}$. 8. Ոչ․ 3-ը համարիչի գումարելի է, ոչ թե արտադրիչ։`,
        ru: `## Основное свойство

При $c \\ne 0$:

$$\\frac{a}{b} = \\frac{a c}{b c}.$$

Умножение или деление числителя и знаменателя на одно и то же ненулевое выражение не меняет дробь. Деление называют **сокращением**.

## Как сокращать

1. Разложи числитель и знаменатель на множители полностью.
2. Сократи общие множители.

**Пример 1.** $\\dfrac{12a^3b}{18ab^2} = \\dfrac{2a^2}{3b}$.

**Пример 2.**

$$\\frac{x^2 - 9}{x^2 + 6x + 9} = \\frac{(x - 3)(x + 3)}{(x + 3)^2} = \\frac{x - 3}{x + 3}.$$

**Пример 3.**

$$\\frac{5a - 5b}{a^2 - b^2} = \\frac{5(a - b)}{(a - b)(a + b)} = \\frac{5}{a + b}.$$

## Противоположные выражения

$a - b$ и $b - a$ **противоположны**: $b - a = -(a - b)$. Это помогает очень часто:

$$\\frac{x - 7}{7 - x} = \\frac{x - 7}{-(x - 7)} = -1.$$

$$\\frac{3 - a}{a^2 - 9} = \\frac{-(a - 3)}{(a - 3)(a + 3)} = -\\frac{1}{a + 3}.$$

## Знаки

У дроби три знака: перед ней, в числителе, в знаменателе. Изменение любых **двух** из них дробь не меняет:

$$-\\frac{a}{b} = \\frac{-a}{b} = \\frac{a}{-b}.$$

## Частая ошибка

Сокращать можно только **множители**, но не отдельные слагаемые:

$$\\frac{x + 4}{x} \\ne 4, \\qquad \\frac{a + 2}{a + 5} \\ne \\frac{2}{5}.$$

### Упражнения

1. Сократи $\\dfrac{15x^2y}{20xy^3}$.
2. Сократи $\\dfrac{4a + 4b}{8a}$.
3. Сократи $\\dfrac{x^2 - 16}{x + 4}$.
4. Сократи $\\dfrac{a^2 - 10a + 25}{a^2 - 25}$.
5. Сократи $\\dfrac{2x - 6}{9 - x^2}$.
6. Упрости $\\dfrac{b - 5}{5 - b}$.
7. Запиши $-\\dfrac{3}{x - 2}$ со знаменателем $2 - x$.
8. Верно ли сокращение $\\dfrac{x + 3}{3} = x$? Объясни.

### Ответы

1. $\\dfrac{3x}{4y^2}$. 2. $\\dfrac{a + b}{2a}$. 3. $x - 4$. 4. $\\dfrac{a - 5}{a + 5}$. 5. $-\\dfrac{2}{3 + x}$. 6. $-1$. 7. $\\dfrac{3}{2 - x}$. 8. Нет: 3 — слагаемое числителя, а не множитель.`,
      },
      [
        q(t("Reducing a fraction means dividing…", "Կոտորակը կրճատել նշանակում է բաժանել…", "Сократить дробь — значит разделить…"), [t("the numerator and the denominator by the same expression", "համարիչն ու հայտարարը նույն արտահայտության վրա", "числитель и знаменатель на одно и то же выражение"), t("only the numerator", "միայն համարիչը", "только числитель"), t("only the denominator", "միայն հայտարարը", "только знаменатель")], 0),
        q(t("(x − 7)/(7 − x) equals…", "(x − 7)/(7 − x) հավասար է…", "(x − 7)/(7 − x) равно…"), [t("1", "1", "1"), t("−1", "−1", "−1"), t("0", "0", "0")], 1),
        q(t("Reduce (x² − 16)/(x + 4).", "Կրճատիր (x² − 16)/(x + 4).", "Сократи (x² − 16)/(x + 4)."), [t("x + 4", "x + 4", "x + 4"), t("x² − 4", "x² − 4", "x² − 4"), t("x − 4", "x − 4", "x − 4")], 2),
        q(t("Which cancellation is correct?", "Որ կրճատումն է ճիշտ։", "Какое сокращение верно?"), [t("(5a)/(5b) = a/b", "(5a)/(5b) = a/b", "(5a)/(5b) = a/b"), t("(a + 5)/(b + 5) = a/b", "(a + 5)/(b + 5) = a/b", "(a + 5)/(b + 5) = a/b"), t("(a + 5)/5 = a", "(a + 5)/5 = a", "(a + 5)/5 = a")], 0),
        q(t("−a/b is equal to…", "−a/b հավասար է…", "−a/b равно…"), [t("a/b", "a/b", "a/b"), t("a/(−b)", "a/(−b)", "a/(−b)"), t("(−a)/(−b)", "(−a)/(−b)", "(−a)/(−b)")], 1),
        q(t("Reduce (5a − 5b)/(a² − b²).", "Կրճատիր (5a − 5b)/(a² − b²).", "Сократи (5a − 5b)/(a² − b²)."), [t("5", "5", "5"), t("5/(a − b)", "5/(a − b)", "5/(a − b)"), t("5/(a + b)", "5/(a + b)", "5/(a + b)")], 2),
      ],
    ),
    lesson(
      "add-subtract-rational",
      ["Adding and subtracting rational fractions", "Ռացիոնալ կոտորակների գումարում և հանում", "Сложение и вычитание рациональных дробей"],
      {
        en: ["Add and subtract fractions with like denominators", "Find the lowest common denominator of rational fractions", "Add and subtract fractions with unlike denominators"],
        hy: ["Գումարել և հանել միանման հայտարարով կոտորակներ", "Գտնել ռացիոնալ կոտորակների ամենափոքր ընդհանուր հայտարարը", "Գումարել և հանել տարբեր հայտարարով կոտորակներ"],
        ru: ["Складывать и вычитать дроби с одинаковыми знаменателями", "Находить наименьший общий знаменатель рациональных дробей", "Складывать и вычитать дроби с разными знаменателями"],
      },
      {
        en: `## Like denominators

$$\\frac{a}{c} \\pm \\frac{b}{c} = \\frac{a \\pm b}{c}.$$

When subtracting, put the whole numerator of the second fraction **in brackets**:

$$\\frac{5x - 1}{x + 2} - \\frac{3x - 7}{x + 2} = \\frac{(5x - 1) - (3x - 7)}{x + 2} = \\frac{2x + 6}{x + 2}.$$

## Unlike denominators

1. Factor every denominator.
2. Build the **lowest common denominator (LCD)**: take every different factor with its greatest exponent.
3. Find the extra factor for each fraction and multiply.
4. Add or subtract the numerators, then reduce the result.

**Example 1.**

$$\\frac{3}{2a} + \\frac{5}{6a^2} = \\frac{3 \\cdot 3a}{6a^2} + \\frac{5}{6a^2} = \\frac{9a + 5}{6a^2}.$$

**Example 2.**

$$\\frac{1}{x - 3} - \\frac{1}{x + 3} = \\frac{(x + 3) - (x - 3)}{(x - 3)(x + 3)} = \\frac{6}{x^2 - 9}.$$

**Example 3.** Factor first:

$$\\frac{4}{x^2 - 4} + \\frac{1}{x + 2} = \\frac{4}{(x - 2)(x + 2)} + \\frac{x - 2}{(x - 2)(x + 2)} = \\frac{x + 2}{(x - 2)(x + 2)} = \\frac{1}{x - 2}.$$

**Example 4.** Opposite denominators:

$$\\frac{a}{a - b} + \\frac{b}{b - a} = \\frac{a}{a - b} - \\frac{b}{a - b} = \\frac{a - b}{a - b} = 1.$$

## A whole expression plus a fraction

Write the whole expression as a fraction with denominator 1:

$$x + \\frac{2}{x} = \\frac{x^2}{x} + \\frac{2}{x} = \\frac{x^2 + 2}{x}.$$

### Exercises

1. $\\dfrac{3a}{7} + \\dfrac{4a}{7}$.
2. $\\dfrac{7x}{x - 1} - \\dfrac{7}{x - 1}$.
3. $\\dfrac{1}{2b} + \\dfrac{3}{4b}$.
4. $\\dfrac{1}{x} - \\dfrac{1}{x + 1}$.
5. $\\dfrac{5}{a - 5} + \\dfrac{5}{5 - a}$.
6. $\\dfrac{2}{x - 4} + \\dfrac{8}{x^2 - 16}$.
7. $a + \\dfrac{1}{a}$.
8. $\\dfrac{3}{x^2 - x} - \\dfrac{3}{x - 1}$.

### Answers

1. $a$. 2. $7$. 3. $\\dfrac{5}{4b}$. 4. $\\dfrac{1}{x(x + 1)}$. 5. $0$. 6. $\\dfrac{2}{x - 4} + \\dfrac{8}{(x-4)(x+4)} = \\dfrac{2x + 16}{x^2 - 16}$. 7. $\\dfrac{a^2 + 1}{a}$. 8. $\\dfrac{3 - 3x}{x(x - 1)} = -\\dfrac{3}{x}$.`,
        hy: `## Միանման հայտարարներ

$$\\frac{a}{c} \\pm \\frac{b}{c} = \\frac{a \\pm b}{c}.$$

Հանելիս երկրորդ կոտորակի ամբողջ համարիչը վերցրու **փակագծերի մեջ**․

$$\\frac{5x - 1}{x + 2} - \\frac{3x - 7}{x + 2} = \\frac{(5x - 1) - (3x - 7)}{x + 2} = \\frac{2x + 6}{x + 2}.$$

## Տարբեր հայտարարներ

1. Վերլուծիր յուրաքանչյուր հայտարար արտադրիչների։
2. Կազմիր **ամենափոքր ընդհանուր հայտարարը**՝ վերցնելով յուրաքանչյուր տարբեր արտադրիչն իր ամենամեծ ցուցիչով։
3. Գտիր յուրաքանչյուր կոտորակի լրացուցիչ արտադրիչը և բազմապատկիր։
4. Գումարիր կամ հանիր համարիչները, ապա կրճատիր արդյունքը։

**Օրինակ 1։**

$$\\frac{3}{2a} + \\frac{5}{6a^2} = \\frac{3 \\cdot 3a}{6a^2} + \\frac{5}{6a^2} = \\frac{9a + 5}{6a^2}.$$

**Օրինակ 2։**

$$\\frac{1}{x - 3} - \\frac{1}{x + 3} = \\frac{(x + 3) - (x - 3)}{(x - 3)(x + 3)} = \\frac{6}{x^2 - 9}.$$

**Օրինակ 3։** Նախ վերլուծիր․

$$\\frac{4}{x^2 - 4} + \\frac{1}{x + 2} = \\frac{4}{(x - 2)(x + 2)} + \\frac{x - 2}{(x - 2)(x + 2)} = \\frac{x + 2}{(x - 2)(x + 2)} = \\frac{1}{x - 2}.$$

**Օրինակ 4։** Հակադիր հայտարարներ․

$$\\frac{a}{a - b} + \\frac{b}{b - a} = \\frac{a}{a - b} - \\frac{b}{a - b} = \\frac{a - b}{a - b} = 1.$$

## Ամբողջ արտահայտություն և կոտորակ

Ամբողջ արտահայտությունը գրիր 1 հայտարարով կոտորակի տեսքով․

$$x + \\frac{2}{x} = \\frac{x^2}{x} + \\frac{2}{x} = \\frac{x^2 + 2}{x}.$$

### Վարժություններ

1. $\\dfrac{3a}{7} + \\dfrac{4a}{7}$.
2. $\\dfrac{7x}{x - 1} - \\dfrac{7}{x - 1}$.
3. $\\dfrac{1}{2b} + \\dfrac{3}{4b}$.
4. $\\dfrac{1}{x} - \\dfrac{1}{x + 1}$.
5. $\\dfrac{5}{a - 5} + \\dfrac{5}{5 - a}$.
6. $\\dfrac{2}{x - 4} + \\dfrac{8}{x^2 - 16}$.
7. $a + \\dfrac{1}{a}$.
8. $\\dfrac{3}{x^2 - x} - \\dfrac{3}{x - 1}$.

### Պատասխաններ

1. $a$. 2. $7$. 3. $\\dfrac{5}{4b}$. 4. $\\dfrac{1}{x(x + 1)}$. 5. $0$. 6. $\\dfrac{2x + 16}{x^2 - 16}$. 7. $\\dfrac{a^2 + 1}{a}$. 8. $-\\dfrac{3}{x}$.`,
        ru: `## Одинаковые знаменатели

$$\\frac{a}{c} \\pm \\frac{b}{c} = \\frac{a \\pm b}{c}.$$

При вычитании бери весь числитель второй дроби **в скобки**:

$$\\frac{5x - 1}{x + 2} - \\frac{3x - 7}{x + 2} = \\frac{(5x - 1) - (3x - 7)}{x + 2} = \\frac{2x + 6}{x + 2}.$$

## Разные знаменатели

1. Разложи каждый знаменатель на множители.
2. Составь **наименьший общий знаменатель**: возьми каждый различный множитель с наибольшим показателем.
3. Найди дополнительный множитель для каждой дроби и умножь.
4. Сложи или вычти числители, затем сократи результат.

**Пример 1.**

$$\\frac{3}{2a} + \\frac{5}{6a^2} = \\frac{3 \\cdot 3a}{6a^2} + \\frac{5}{6a^2} = \\frac{9a + 5}{6a^2}.$$

**Пример 2.**

$$\\frac{1}{x - 3} - \\frac{1}{x + 3} = \\frac{(x + 3) - (x - 3)}{(x - 3)(x + 3)} = \\frac{6}{x^2 - 9}.$$

**Пример 3.** Сначала разложим:

$$\\frac{4}{x^2 - 4} + \\frac{1}{x + 2} = \\frac{4}{(x - 2)(x + 2)} + \\frac{x - 2}{(x - 2)(x + 2)} = \\frac{x + 2}{(x - 2)(x + 2)} = \\frac{1}{x - 2}.$$

**Пример 4.** Противоположные знаменатели:

$$\\frac{a}{a - b} + \\frac{b}{b - a} = \\frac{a}{a - b} - \\frac{b}{a - b} = \\frac{a - b}{a - b} = 1.$$

## Целое выражение и дробь

Запиши целое выражение как дробь со знаменателем 1:

$$x + \\frac{2}{x} = \\frac{x^2}{x} + \\frac{2}{x} = \\frac{x^2 + 2}{x}.$$

### Упражнения

1. $\\dfrac{3a}{7} + \\dfrac{4a}{7}$.
2. $\\dfrac{7x}{x - 1} - \\dfrac{7}{x - 1}$.
3. $\\dfrac{1}{2b} + \\dfrac{3}{4b}$.
4. $\\dfrac{1}{x} - \\dfrac{1}{x + 1}$.
5. $\\dfrac{5}{a - 5} + \\dfrac{5}{5 - a}$.
6. $\\dfrac{2}{x - 4} + \\dfrac{8}{x^2 - 16}$.
7. $a + \\dfrac{1}{a}$.
8. $\\dfrac{3}{x^2 - x} - \\dfrac{3}{x - 1}$.

### Ответы

1. $a$. 2. $7$. 3. $\\dfrac{5}{4b}$. 4. $\\dfrac{1}{x(x + 1)}$. 5. $0$. 6. $\\dfrac{2x + 16}{x^2 - 16}$. 7. $\\dfrac{a^2 + 1}{a}$. 8. $-\\dfrac{3}{x}$.`,
      },
      [
        q(t("To subtract fractions with the same denominator you…", "Միանման հայտարարով կոտորակները հանելիս…", "Чтобы вычесть дроби с одинаковым знаменателем, нужно…"), [t("subtract the numerators", "հանում են համարիչները", "вычесть числители"), t("subtract the denominators", "հանում են հայտարարները", "вычесть знаменатели"), t("subtract both", "հանում են երկուսն էլ", "вычесть и то и другое")], 0),
        q(t("The lowest common denominator of 1/(x − 3) and 1/(x + 3) is…", "1/(x − 3) և 1/(x + 3) կոտորակների ամենափոքր ընդհանուր հայտարարն է…", "Наименьший общий знаменатель 1/(x − 3) и 1/(x + 3) — это…"), [t("x", "x", "x"), t("(x − 3)(x + 3)", "(x − 3)(x + 3)", "(x − 3)(x + 3)"), t("x² + 9", "x² + 9", "x² + 9")], 1),
        q(t("5/(a − 5) + 5/(5 − a) equals…", "5/(a − 5) + 5/(5 − a) հավասար է…", "5/(a − 5) + 5/(5 − a) равно…"), [t("10/(a − 5)", "10/(a − 5)", "10/(a − 5)"), t("1", "1", "1"), t("0", "0", "0")], 2),
        q(t("Before adding fractions with different denominators you should first…", "Տարբեր հայտարարով կոտորակները գումարելուց առաջ նախ պետք է…", "Перед сложением дробей с разными знаменателями сначала нужно…"), [t("factor the denominators", "վերլուծել հայտարարներն արտադրիչների", "разложить знаменатели на множители"), t("add the numerators", "գումարել համարիչները", "сложить числители"), t("cancel the numerators", "կրճատել համարիչները", "сократить числители")], 0),
        q(t("a + 1/a equals…", "a + 1/a հավասար է…", "a + 1/a равно…"), [t("(a + 1)/a", "(a + 1)/a", "(a + 1)/a"), t("(a² + 1)/a", "(a² + 1)/a", "(a² + 1)/a"), t("1/(a + 1)", "1/(a + 1)", "1/(a + 1)")], 1),
        q(t("1/x − 1/(x + 1) equals…", "1/x − 1/(x + 1) հավասար է…", "1/x − 1/(x + 1) равно…"), [t("1", "1", "1"), t("−1/x", "−1/x", "−1/x"), t("1/(x(x + 1))", "1/(x(x + 1))", "1/(x(x + 1))")], 2),
      ],
    ),
    lesson(
      "multiply-divide-rational",
      ["Multiplying, dividing and raising to a power", "Բազմապատկում, բաժանում, աստիճան", "Умножение, деление и возведение в степень"],
      {
        en: ["Multiply and divide rational fractions", "Raise a fraction to a natural power", "Simplify a product or quotient by cancelling before multiplying"],
        hy: ["Բազմապատկել և բաժանել ռացիոնալ կոտորակներ", "Կոտորակը բարձրացնել բնական աստիճան", "Պարզեցնել արտադրյալը կամ քանորդը՝ կրճատելով բազմապատկելուց առաջ"],
        ru: ["Умножать и делить рациональные дроби", "Возводить дробь в натуральную степень", "Упрощать произведение и частное, сокращая до умножения"],
      },
      {
        en: `## The rules

$$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}, \\qquad \\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{ad}{bc}, \\qquad \\left(\\frac{a}{b}\\right)^{n} = \\frac{a^{n}}{b^{n}}.$$

Dividing by a fraction means multiplying by its **reciprocal**.

## Cancel first, multiply later

Never multiply the brackets out at once. Factor everything, cancel, and only then write the answer.

**Example 1.**

$$\\frac{3a^2}{10b} \\cdot \\frac{5b^3}{9a} = \\frac{3 \\cdot 5 \\, a^2 b^3}{10 \\cdot 9 \\, ab} = \\frac{ab^2}{6}.$$

**Example 2.**

$$\\frac{x^2 - 9}{4x} \\cdot \\frac{2}{x + 3} = \\frac{(x - 3)(x + 3)}{4x} \\cdot \\frac{2}{x + 3} = \\frac{x - 3}{2x}.$$

**Example 3.**

$$\\frac{a + b}{a^2} : \\frac{a^2 - b^2}{a} = \\frac{a + b}{a^2} \\cdot \\frac{a}{(a - b)(a + b)} = \\frac{1}{a(a - b)}.$$

**Example 4.**

$$\\left(\\frac{2x}{3y}\\right)^{3} = \\frac{8x^3}{27y^3}.$$

## Watch the signs

$$\\left(-\\frac{a}{b}\\right)^{2} = \\frac{a^2}{b^2}, \\qquad \\left(-\\frac{a}{b}\\right)^{3} = -\\frac{a^3}{b^3}.$$

An even power gives a plus, an odd power keeps the minus.

## Admissible values

In Example 3 the admissible values are $a \\ne 0$, $a \\ne b$, $a \\ne -b$: both the denominators and the divisor must be non-zero.

### Exercises

1. $\\dfrac{4a}{9b} \\cdot \\dfrac{3b}{8a^2}$.
2. $\\dfrac{x - 2}{5} \\cdot \\dfrac{10}{x^2 - 4}$.
3. $\\dfrac{6x}{y} : \\dfrac{3x^2}{y^2}$.
4. $\\dfrac{a^2 - 1}{a} : (a + 1)$.
5. $\\left(\\dfrac{3m}{2n}\\right)^{2}$.
6. $\\left(-\\dfrac{x}{2}\\right)^{3}$.
7. $\\dfrac{a^2 - 6a + 9}{a + 2} \\cdot \\dfrac{a^2 - 4}{a - 3}$.
8. Find the admissible values in exercise 4.

### Answers

1. $\\dfrac{1}{6a}$. 2. $\\dfrac{2}{x + 2}$. 3. $\\dfrac{2y}{x}$. 4. $\\dfrac{a - 1}{a}$. 5. $\\dfrac{9m^2}{4n^2}$. 6. $-\\dfrac{x^3}{8}$. 7. $(a - 3)(a - 2)$. 8. $a \\ne 0$ and $a \\ne -1$.`,
        hy: `## Կանոնները

$$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}, \\qquad \\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{ad}{bc}, \\qquad \\left(\\frac{a}{b}\\right)^{n} = \\frac{a^{n}}{b^{n}}.$$

Կոտորակի վրա բաժանելը նշանակում է բազմապատկել նրա **հակադարձով**։

## Նախ կրճատիր, հետո բազմապատկիր

Երբեք միանգամից մի բացիր փակագծերը։ Վերլուծիր ամեն ինչ, կրճատիր և միայն հետո գրիր պատասխանը։

**Օրինակ 1։**

$$\\frac{3a^2}{10b} \\cdot \\frac{5b^3}{9a} = \\frac{3 \\cdot 5 \\, a^2 b^3}{10 \\cdot 9 \\, ab} = \\frac{ab^2}{6}.$$

**Օրինակ 2։**

$$\\frac{x^2 - 9}{4x} \\cdot \\frac{2}{x + 3} = \\frac{(x - 3)(x + 3)}{4x} \\cdot \\frac{2}{x + 3} = \\frac{x - 3}{2x}.$$

**Օրինակ 3։**

$$\\frac{a + b}{a^2} : \\frac{a^2 - b^2}{a} = \\frac{a + b}{a^2} \\cdot \\frac{a}{(a - b)(a + b)} = \\frac{1}{a(a - b)}.$$

**Օրինակ 4։**

$$\\left(\\frac{2x}{3y}\\right)^{3} = \\frac{8x^3}{27y^3}.$$

## Հետևիր նշաններին

$$\\left(-\\frac{a}{b}\\right)^{2} = \\frac{a^2}{b^2}, \\qquad \\left(-\\frac{a}{b}\\right)^{3} = -\\frac{a^3}{b^3}.$$

Զույգ աստիճանը տալիս է գումարած, կենտ աստիճանը պահում է մինուսը։

## Թույլատրելի արժեքներ

3-րդ օրինակում թույլատրելի արժեքներն են $a \\ne 0$, $a \\ne b$, $a \\ne -b$․ և՛ հայտարարները, և՛ բաժանարարը պետք է զրոյից տարբեր լինեն։

### Վարժություններ

1. $\\dfrac{4a}{9b} \\cdot \\dfrac{3b}{8a^2}$.
2. $\\dfrac{x - 2}{5} \\cdot \\dfrac{10}{x^2 - 4}$.
3. $\\dfrac{6x}{y} : \\dfrac{3x^2}{y^2}$.
4. $\\dfrac{a^2 - 1}{a} : (a + 1)$.
5. $\\left(\\dfrac{3m}{2n}\\right)^{2}$.
6. $\\left(-\\dfrac{x}{2}\\right)^{3}$.
7. $\\dfrac{a^2 - 6a + 9}{a + 2} \\cdot \\dfrac{a^2 - 4}{a - 3}$.
8. Գտիր 4-րդ վարժության թույլատրելի արժեքները։

### Պատասխաններ

1. $\\dfrac{1}{6a}$. 2. $\\dfrac{2}{x + 2}$. 3. $\\dfrac{2y}{x}$. 4. $\\dfrac{a - 1}{a}$. 5. $\\dfrac{9m^2}{4n^2}$. 6. $-\\dfrac{x^3}{8}$. 7. $(a - 3)(a - 2)$. 8. $a \\ne 0$ և $a \\ne -1$.`,
        ru: `## Правила

$$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}, \\qquad \\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{ad}{bc}, \\qquad \\left(\\frac{a}{b}\\right)^{n} = \\frac{a^{n}}{b^{n}}.$$

Деление на дробь — это умножение на **обратную** дробь.

## Сначала сократи, потом умножай

Никогда не раскрывай скобки сразу. Разложи всё на множители, сократи и только потом записывай ответ.

**Пример 1.**

$$\\frac{3a^2}{10b} \\cdot \\frac{5b^3}{9a} = \\frac{3 \\cdot 5 \\, a^2 b^3}{10 \\cdot 9 \\, ab} = \\frac{ab^2}{6}.$$

**Пример 2.**

$$\\frac{x^2 - 9}{4x} \\cdot \\frac{2}{x + 3} = \\frac{(x - 3)(x + 3)}{4x} \\cdot \\frac{2}{x + 3} = \\frac{x - 3}{2x}.$$

**Пример 3.**

$$\\frac{a + b}{a^2} : \\frac{a^2 - b^2}{a} = \\frac{a + b}{a^2} \\cdot \\frac{a}{(a - b)(a + b)} = \\frac{1}{a(a - b)}.$$

**Пример 4.**

$$\\left(\\frac{2x}{3y}\\right)^{3} = \\frac{8x^3}{27y^3}.$$

## Следи за знаками

$$\\left(-\\frac{a}{b}\\right)^{2} = \\frac{a^2}{b^2}, \\qquad \\left(-\\frac{a}{b}\\right)^{3} = -\\frac{a^3}{b^3}.$$

Чётная степень даёт плюс, нечётная сохраняет минус.

## Допустимые значения

В примере 3 допустимые значения: $a \\ne 0$, $a \\ne b$, $a \\ne -b$ — и знаменатели, и делитель не должны обращаться в ноль.

### Упражнения

1. $\\dfrac{4a}{9b} \\cdot \\dfrac{3b}{8a^2}$.
2. $\\dfrac{x - 2}{5} \\cdot \\dfrac{10}{x^2 - 4}$.
3. $\\dfrac{6x}{y} : \\dfrac{3x^2}{y^2}$.
4. $\\dfrac{a^2 - 1}{a} : (a + 1)$.
5. $\\left(\\dfrac{3m}{2n}\\right)^{2}$.
6. $\\left(-\\dfrac{x}{2}\\right)^{3}$.
7. $\\dfrac{a^2 - 6a + 9}{a + 2} \\cdot \\dfrac{a^2 - 4}{a - 3}$.
8. Найди допустимые значения в задании 4.

### Ответы

1. $\\dfrac{1}{6a}$. 2. $\\dfrac{2}{x + 2}$. 3. $\\dfrac{2y}{x}$. 4. $\\dfrac{a - 1}{a}$. 5. $\\dfrac{9m^2}{4n^2}$. 6. $-\\dfrac{x^3}{8}$. 7. $(a - 3)(a - 2)$. 8. $a \\ne 0$ и $a \\ne -1$.`,
      },
      [
        q(t("Dividing by a fraction means multiplying by…", "Կոտորակի վրա բաժանելը նշանակում է բազմապատկել…", "Деление на дробь — это умножение на…"), [t("its reciprocal", "նրա հակադարձով", "обратную дробь"), t("the same fraction", "նույն կոտորակով", "ту же дробь"), t("its square", "նրա քառակուսիով", "её квадрат")], 0),
        q(t("(2x/(3y))³ equals…", "(2x/(3y))³ հավասար է…", "(2x/(3y))³ равно…"), [t("6x³/9y³", "6x³/9y³", "6x³/9y³"), t("8x³/27y³", "8x³/27y³", "8x³/27y³"), t("2x³/3y³", "2x³/3y³", "2x³/3y³")], 1),
        q(t("(−a/b)³ equals…", "(−a/b)³ հավասար է…", "(−a/b)³ равно…"), [t("a³/b³", "a³/b³", "a³/b³"), t("a²/b²", "a²/b²", "a²/b²"), t("−a³/b³", "−a³/b³", "−a³/b³")], 2),
        q(t("Before multiplying two fractions it is best to…", "Երկու կոտորակ բազմապատկելուց առաջ լավագույնն է…", "Перед умножением двух дробей лучше всего…"), [t("factor and cancel", "վերլուծել և կրճատել", "разложить на множители и сократить"), t("expand all brackets", "բացել բոլոր փակագծերը", "раскрыть все скобки"), t("add the denominators", "գումարել հայտարարները", "сложить знаменатели")], 0),
        q(t("(x − 2)/5 · 10/(x² − 4) equals…", "(x − 2)/5 · 10/(x² − 4) հավասար է…", "(x − 2)/5 · 10/(x² − 4) равно…"), [t("2(x − 2)", "2(x − 2)", "2(x − 2)"), t("2/(x + 2)", "2/(x + 2)", "2/(x + 2)"), t("10/(x + 2)", "10/(x + 2)", "10/(x + 2)")], 1),
        q(t("6x/y : 3x²/y² equals…", "6x/y : 3x²/y² հավասար է…", "6x/y : 3x²/y² равно…"), [t("18x³/y³", "18x³/y³", "18x³/y³"), t("2x/y", "2x/y", "2x/y"), t("2y/x", "2y/x", "2y/x")], 2),
      ],
    ),
    lesson(
      "combined-rational-transformations",
      ["Combined transformations of rational expressions", "Ռացիոնալ արտահայտությունների համակցված ձևափոխություններ", "Совместные преобразования рациональных выражений"],
      {
        en: ["Follow the order of operations in a complex rational expression", "Simplify expressions with brackets and a fraction bar", "Prove an identity by simplifying"],
        hy: ["Պահպանել գործողությունների հերթականությունը բարդ ռացիոնալ արտահայտությունում", "Պարզեցնել փակագծերով և կոտորակի գծով արտահայտությունները", "Ապացուցել նույնություն՝ պարզեցնելով"],
        ru: ["Соблюдать порядок действий в сложном рациональном выражении", "Упрощать выражения со скобками и дробной чертой", "Доказывать тождество упрощением"],
      },
      {
        en: `## Order of operations

In a rational expression the order is the usual one: **brackets, powers, multiplication and division, addition and subtraction**. The fraction bar also acts as a bracket.

A good plan:

1. Factor every denominator and numerator.
2. Do the operations inside the brackets.
3. Do multiplication and division.
4. Do addition and subtraction.
5. Reduce the answer and state the admissible values.

## Worked example 1

$$\\left(\\frac{1}{a - 2} - \\frac{1}{a + 2}\\right) \\cdot \\frac{a^2 - 4}{4}.$$

Inside the brackets:

$$\\frac{(a + 2) - (a - 2)}{(a - 2)(a + 2)} = \\frac{4}{a^2 - 4}.$$

Then

$$\\frac{4}{a^2 - 4} \\cdot \\frac{a^2 - 4}{4} = 1, \\qquad a \\ne 2,\\ a \\ne -2.$$

## Worked example 2

$$\\frac{x}{x - 1} - \\frac{1}{x + 1} \\cdot \\frac{x^2 - 1}{x - 1}.$$

Multiplication first:

$$\\frac{1}{x + 1} \\cdot \\frac{(x - 1)(x + 1)}{x - 1} = 1.$$

So the expression equals $\\dfrac{x}{x - 1} - 1 = \\dfrac{x - (x - 1)}{x - 1} = \\dfrac{1}{x - 1}$.

## A four-storey fraction

$$\\frac{\;\\dfrac{a}{b}\;}{\;\\dfrac{c}{d}\;} = \\frac{a}{b} : \\frac{c}{d} = \\frac{ad}{bc}.$$

**Example.** $\\dfrac{\;\\dfrac{x^2 - 1}{x}\;}{\;\\dfrac{x + 1}{x^2}\;} = \\dfrac{x^2 - 1}{x} \\cdot \\dfrac{x^2}{x + 1} = x(x - 1)$.

## Proving an identity

To prove that two expressions are identically equal, simplify the more complicated side until it becomes the other one, and state the admissible values.

**Example.** Prove that $\\dfrac{1}{x} - \\dfrac{1}{x + 1} = \\dfrac{1}{x(x + 1)}$ for $x \\ne 0$, $x \\ne -1$. Indeed, $\\dfrac{(x + 1) - x}{x(x + 1)} = \\dfrac{1}{x(x + 1)}$.

### Exercises

1. $\\left(\\dfrac{1}{x} + \\dfrac{1}{y}\\right) \\cdot \\dfrac{xy}{x + y}$.
2. $\\left(\\dfrac{a}{a - 3} - \\dfrac{3}{a - 3}\\right) : (a + 3)$.
3. $\\dfrac{2}{x - 2} + \\dfrac{x}{2 - x}$.
4. $\\dfrac{\;\\dfrac{a^2 - b^2}{a}\;}{\;\\dfrac{a + b}{a^2}\;}$.
5. $\\left(1 - \\dfrac{1}{x}\\right) \\cdot \\dfrac{x}{x - 1}$.
6. $\\dfrac{x^2}{x - 3} - \\dfrac{9}{x - 3}$.
7. Prove: $\\dfrac{1}{a - 1} - \\dfrac{1}{a + 1} = \\dfrac{2}{a^2 - 1}$.
8. Find the value of $\\left(\\dfrac{1}{m} - \\dfrac{1}{n}\\right) : \\dfrac{n - m}{mn}$ at $m = 7$, $n = 4$.

### Answers

1. $1$. 2. $\\dfrac{1}{a + 3}$. 3. $\\dfrac{2 - x}{x - 2} = -1$. 4. $a(a - b)$. 5. $1$. 6. $x + 3$. 7. $\\dfrac{(a+1)-(a-1)}{(a-1)(a+1)} = \\dfrac{2}{a^2-1}$, for $a \\ne \\pm 1$. 8. $-1$.`,
        hy: `## Գործողությունների հերթականությունը

Ռացիոնալ արտահայտությունում հերթականությունը սովորականն է՝ **փակագծեր, աստիճան, բազմապատկում և բաժանում, գումարում և հանում**։ Կոտորակի գիծը նույնպես գործում է փակագծի պես։

Լավ պլան․

1. Վերլուծիր արտադրիչների բոլոր հայտարարներն ու համարիչները։
2. Կատարիր փակագծերի ներսի գործողությունները։
3. Կատարիր բազմապատկումն ու բաժանումը։
4. Կատարիր գումարումն ու հանումը։
5. Կրճատիր պատասխանը և նշիր թույլատրելի արժեքները։

## Լուծված օրինակ 1

$$\\left(\\frac{1}{a - 2} - \\frac{1}{a + 2}\\right) \\cdot \\frac{a^2 - 4}{4}.$$

Փակագծերի ներսում․

$$\\frac{(a + 2) - (a - 2)}{(a - 2)(a + 2)} = \\frac{4}{a^2 - 4}.$$

Ապա

$$\\frac{4}{a^2 - 4} \\cdot \\frac{a^2 - 4}{4} = 1, \\qquad a \\ne 2,\\ a \\ne -2.$$

## Լուծված օրինակ 2

$$\\frac{x}{x - 1} - \\frac{1}{x + 1} \\cdot \\frac{x^2 - 1}{x - 1}.$$

Նախ բազմապատկումը․

$$\\frac{1}{x + 1} \\cdot \\frac{(x - 1)(x + 1)}{x - 1} = 1.$$

Ուրեմն արտահայտությունը հավասար է $\\dfrac{x}{x - 1} - 1 = \\dfrac{x - (x - 1)}{x - 1} = \\dfrac{1}{x - 1}$.

## Քառհարկ կոտորակ

$$\\frac{\;\\dfrac{a}{b}\;}{\;\\dfrac{c}{d}\;} = \\frac{a}{b} : \\frac{c}{d} = \\frac{ad}{bc}.$$

**Օրինակ։** $\\dfrac{\;\\dfrac{x^2 - 1}{x}\;}{\;\\dfrac{x + 1}{x^2}\;} = \\dfrac{x^2 - 1}{x} \\cdot \\dfrac{x^2}{x + 1} = x(x - 1)$.

## Նույնության ապացուցում

Երկու արտահայտությունների նույնական հավասարությունն ապացուցելու համար պարզեցրու ավելի բարդ կողմը, մինչև այն դառնա մյուսը, և նշիր թույլատրելի արժեքները։

**Օրինակ։** Ապացուցենք, որ $\\dfrac{1}{x} - \\dfrac{1}{x + 1} = \\dfrac{1}{x(x + 1)}$ $x \\ne 0$, $x \\ne -1$ դեպքում։ Իրոք, $\\dfrac{(x + 1) - x}{x(x + 1)} = \\dfrac{1}{x(x + 1)}$.

### Վարժություններ

1. $\\left(\\dfrac{1}{x} + \\dfrac{1}{y}\\right) \\cdot \\dfrac{xy}{x + y}$.
2. $\\left(\\dfrac{a}{a - 3} - \\dfrac{3}{a - 3}\\right) : (a + 3)$.
3. $\\dfrac{2}{x - 2} + \\dfrac{x}{2 - x}$.
4. $\\dfrac{\;\\dfrac{a^2 - b^2}{a}\;}{\;\\dfrac{a + b}{a^2}\;}$.
5. $\\left(1 - \\dfrac{1}{x}\\right) \\cdot \\dfrac{x}{x - 1}$.
6. $\\dfrac{x^2}{x - 3} - \\dfrac{9}{x - 3}$.
7. Ապացուցիր․ $\\dfrac{1}{a - 1} - \\dfrac{1}{a + 1} = \\dfrac{2}{a^2 - 1}$.
8. Գտիր $\\left(\\dfrac{1}{m} - \\dfrac{1}{n}\\right) : \\dfrac{n - m}{mn}$ արտահայտության արժեքը $m = 7$, $n = 4$ դեպքում։

### Պատասխաններ

1. $1$. 2. $\\dfrac{1}{a + 3}$. 3. $-1$. 4. $a(a - b)$. 5. $1$. 6. $x + 3$. 7. $\\dfrac{(a+1)-(a-1)}{(a-1)(a+1)} = \\dfrac{2}{a^2-1}$, $a \\ne \\pm 1$ դեպքում։ 8. $-1$.`,
        ru: `## Порядок действий

В рациональном выражении порядок обычный: **скобки, степени, умножение и деление, сложение и вычитание**. Дробная черта тоже работает как скобка.

Хороший план:

1. Разложи все знаменатели и числители на множители.
2. Выполни действия в скобках.
3. Выполни умножение и деление.
4. Выполни сложение и вычитание.
5. Сократи ответ и укажи допустимые значения.

## Разбор 1

$$\\left(\\frac{1}{a - 2} - \\frac{1}{a + 2}\\right) \\cdot \\frac{a^2 - 4}{4}.$$

В скобках:

$$\\frac{(a + 2) - (a - 2)}{(a - 2)(a + 2)} = \\frac{4}{a^2 - 4}.$$

Тогда

$$\\frac{4}{a^2 - 4} \\cdot \\frac{a^2 - 4}{4} = 1, \\qquad a \\ne 2,\\ a \\ne -2.$$

## Разбор 2

$$\\frac{x}{x - 1} - \\frac{1}{x + 1} \\cdot \\frac{x^2 - 1}{x - 1}.$$

Сначала умножение:

$$\\frac{1}{x + 1} \\cdot \\frac{(x - 1)(x + 1)}{x - 1} = 1.$$

Значит, выражение равно $\\dfrac{x}{x - 1} - 1 = \\dfrac{x - (x - 1)}{x - 1} = \\dfrac{1}{x - 1}$.

## Четырёхэтажная дробь

$$\\frac{\;\\dfrac{a}{b}\;}{\;\\dfrac{c}{d}\;} = \\frac{a}{b} : \\frac{c}{d} = \\frac{ad}{bc}.$$

**Пример.** $\\dfrac{\;\\dfrac{x^2 - 1}{x}\;}{\;\\dfrac{x + 1}{x^2}\;} = \\dfrac{x^2 - 1}{x} \\cdot \\dfrac{x^2}{x + 1} = x(x - 1)$.

## Доказательство тождества

Чтобы доказать тождественное равенство, упрости более сложную часть, пока она не превратится в другую, и укажи допустимые значения.

**Пример.** Докажем, что $\\dfrac{1}{x} - \\dfrac{1}{x + 1} = \\dfrac{1}{x(x + 1)}$ при $x \\ne 0$, $x \\ne -1$. Действительно, $\\dfrac{(x + 1) - x}{x(x + 1)} = \\dfrac{1}{x(x + 1)}$.

### Упражнения

1. $\\left(\\dfrac{1}{x} + \\dfrac{1}{y}\\right) \\cdot \\dfrac{xy}{x + y}$.
2. $\\left(\\dfrac{a}{a - 3} - \\dfrac{3}{a - 3}\\right) : (a + 3)$.
3. $\\dfrac{2}{x - 2} + \\dfrac{x}{2 - x}$.
4. $\\dfrac{\;\\dfrac{a^2 - b^2}{a}\;}{\;\\dfrac{a + b}{a^2}\;}$.
5. $\\left(1 - \\dfrac{1}{x}\\right) \\cdot \\dfrac{x}{x - 1}$.
6. $\\dfrac{x^2}{x - 3} - \\dfrac{9}{x - 3}$.
7. Докажи: $\\dfrac{1}{a - 1} - \\dfrac{1}{a + 1} = \\dfrac{2}{a^2 - 1}$.
8. Найди значение $\\left(\\dfrac{1}{m} - \\dfrac{1}{n}\\right) : \\dfrac{n - m}{mn}$ при $m = 7$, $n = 4$.

### Ответы

1. $1$. 2. $\\dfrac{1}{a + 3}$. 3. $-1$. 4. $a(a - b)$. 5. $1$. 6. $x + 3$. 7. $\\dfrac{(a+1)-(a-1)}{(a-1)(a+1)} = \\dfrac{2}{a^2-1}$ при $a \\ne \\pm 1$. 8. $-1$.`,
      },
      [
        q(t("In a rational expression the fraction bar works like…", "Ռացիոնալ արտահայտությունում կոտորակի գիծը գործում է…", "В рациональном выражении дробная черта работает как…"), [t("a bracket", "փակագծի պես", "скобка"), t("a plus sign", "գումարման նշանի պես", "знак плюс"), t("nothing", "ոչ մի բան", "ничего")], 0),
        q(t("Which operation is done first: a − b · c?", "Որ գործողությունն է կատարվում առաջինը՝ a − b · c։", "Какое действие выполняется первым: a − b · c?"), [t("the subtraction", "հանումը", "вычитание"), t("the multiplication", "բազմապատկումը", "умножение"), t("any order", "ցանկացած հերթականությամբ", "любой порядок")], 1),
        q(t("A four-storey fraction (a/b)/(c/d) equals…", "(a/b)/(c/d) քառհարկ կոտորակը հավասար է…", "Четырёхэтажная дробь (a/b)/(c/d) равна…"), [t("ac/bd", "ac/bd", "ac/bd"), t("bc/ad", "bc/ad", "bc/ad"), t("ad/bc", "ad/bc", "ad/bc")], 2),
        q(t("(1/x + 1/y) · xy/(x + y) equals…", "(1/x + 1/y) · xy/(x + y) հավասար է…", "(1/x + 1/y) · xy/(x + y) равно…"), [t("1", "1", "1"), t("x + y", "x + y", "x + y"), t("xy", "xy", "xy")], 0),
        q(t("2/(x − 2) + x/(2 − x) equals…", "2/(x − 2) + x/(2 − x) հավասար է…", "2/(x − 2) + x/(2 − x) равно…"), [t("1", "1", "1"), t("−1", "−1", "−1"), t("x + 2", "x + 2", "x + 2")], 1),
        q(t("After simplifying an expression you should also…", "Արտահայտությունը պարզեցնելուց հետո պետք է նաև…", "После упрощения выражения нужно также…"), [t("multiply by zero", "բազմապատկել զրոյով", "умножить на ноль"), t("change all signs", "փոխել բոլոր նշանները", "поменять все знаки"), t("state the admissible values", "նշել թույլատրելի արժեքները", "указать допустимые значения")], 2),
      ],
    ),
    lesson(
      "inverse-proportionality",
      ["The function y = k/x", "y = k/x ֆունկցիան", "Функция y = k/x и её график"],
      {
        en: ["Know the definition and the graph of inverse proportionality", "Read the properties of the hyperbola for k > 0 and k < 0", "Solve problems on inversely proportional quantities"],
        hy: ["Իմանալ հակադարձ համեմատականության սահմանումը և գրաֆիկը", "Կարդալ հիպերբոլի հատկությունները k > 0 և k < 0 դեպքերում", "Լուծել հակադարձ համեմատական մեծությունների խնդիրներ"],
        ru: ["Знать определение и график обратной пропорциональности", "Читать свойства гиперболы при k > 0 и k < 0", "Решать задачи на обратно пропорциональные величины"],
      },
      {
        en: `## Definition

A function given by the formula

$$y = \\frac{k}{x}, \\qquad k \\ne 0,$$

is called **inverse proportionality**. The domain is all $x \\ne 0$; the range is all $y \\ne 0$.

## The graph

The graph is a curve of two branches called a **hyperbola**.

| Property | $k > 0$ | $k < 0$ |
|---|---|---|
| Branches | in the 1st and 3rd quarters | in the 2nd and 4th quarters |
| Behaviour | $y$ decreases on each branch | $y$ increases on each branch |
| Symmetry | about the origin | about the origin |
| Axes | the branches come near the axes but never touch them | the same |

**Example.** For $y = \\dfrac{6}{x}$ take the points

| $x$ | $1$ | $2$ | $3$ | $6$ | $-1$ | $-2$ | $-6$ |
|---|---|---|---|---|---|---|---|
| $y$ | $6$ | $3$ | $2$ | $1$ | $-6$ | $-3$ | $-1$ |

Plot them and join each group with a smooth curve: two branches appear.

## Checking whether a point lies on the graph

Substitute the coordinates. Does $A(4; 1{,}5)$ lie on $y = \\dfrac{6}{x}$? Yes, because $\\dfrac{6}{4} = 1{,}5$. Does $B(5; 1)$? No, because $\\dfrac{6}{5} = 1{,}2 \\ne 1$.

Useful fact: for all points of the graph the product $xy = k$ is the same.

## Inversely proportional quantities

If the product of two quantities is constant, they are **inversely proportional**: speed and time for a fixed distance, the number of workers and the days of work, the pressure and the volume of a gas at a fixed temperature.

**Problem.** A car covers a distance in 4 hours at 60 km/h. At what speed must it go to cover the same distance in 3 hours?

The distance is $60 \\cdot 4 = 240$ km, so $v = \\dfrac{240}{3} = 80$ km/h.

### Exercises

1. Does the point $(3; 4)$ lie on the graph of $y = \\dfrac{12}{x}$?
2. Find $k$ if the graph of $y = \\dfrac{k}{x}$ passes through $(2; -5)$.
3. In which quarters are the branches of $y = \\dfrac{-8}{x}$?
4. Fill the table for $y = \\dfrac{4}{x}$ at $x = 1; 2; 4; -2$.
5. Is $y = \\dfrac{3}{x}$ increasing or decreasing on each branch?
6. Six workers do a job in 10 days. How long will 15 workers need, working at the same rate?
7. A rectangle has area $36$ cm². Write $y$ as a function of $x$ for its sides.
8. Why does the hyperbola never cross the $y$-axis?

### Answers

1. Yes, $12 : 3 = 4$. 2. $k = -10$. 3. The 2nd and 4th. 4. $4; 2; 1; -2$. 5. Decreasing. 6. $4$ days. 7. $y = \\dfrac{36}{x}$. 8. Because $x = 0$ is not in the domain: division by zero is impossible.`,
        hy: `## Սահմանում

$$y = \\frac{k}{x}, \\qquad k \\ne 0,$$

բանաձևով տրված ֆունկցիան կոչվում է **հակադարձ համեմատականություն**։ Որոշման տիրույթը բոլոր $x \\ne 0$ արժեքներն են, արժեքների բազմությունը՝ բոլոր $y \\ne 0$ արժեքները։

## Գրաֆիկը

Գրաֆիկն երկու ճյուղից կազմված կոր է՝ **հիպերբոլ**։

| Հատկություն | $k > 0$ | $k < 0$ |
|---|---|---|
| Ճյուղերը | 1-ին և 3-րդ քառորդներում | 2-րդ և 4-րդ քառորդներում |
| Վարքը | $y$-ը նվազում է յուրաքանչյուր ճյուղի վրա | $y$-ը աճում է յուրաքանչյուր ճյուղի վրա |
| Համաչափություն | կոորդինատների սկզբնակետի նկատմամբ | կոորդինատների սկզբնակետի նկատմամբ |
| Առանցքներ | ճյուղերը մոտենում են առանցքներին, բայց երբեք չեն հատում | նույնը |

**Օրինակ։** $y = \\dfrac{6}{x}$ ֆունկցիայի համար վերցնենք կետերը․

| $x$ | $1$ | $2$ | $3$ | $6$ | $-1$ | $-2$ | $-6$ |
|---|---|---|---|---|---|---|---|
| $y$ | $6$ | $3$ | $2$ | $1$ | $-6$ | $-3$ | $-1$ |

Նշիր դրանք և յուրաքանչյուր խումբը միացրու հարթ կորով․ ստացվում է երկու ճյուղ։

## Կետը գրաֆիկի վրա է

Տեղադրիր կոորդինատները։ $A(4; 1{,}5)$ կետը $y = \\dfrac{6}{x}$ գրաֆիկի վրա՞ է։ Այո, քանի որ $\\dfrac{6}{4} = 1{,}5$. Իսկ $B(5; 1)$-ը։ Ոչ, քանի որ $\\dfrac{6}{5} = 1{,}2 \\ne 1$.

Օգտակար փաստ․ գրաֆիկի բոլոր կետերի համար $xy = k$ արտադրյալը նույնն է։

## Հակադարձ համեմատական մեծություններ

Եթե երկու մեծությունների արտադրյալը հաստատուն է, դրանք **հակադարձ համեմատական** են․ արագությունը և ժամանակը տրված ճանապարհի դեպքում, բանվորների թիվը և աշխատանքի օրերը, գազի ճնշումը և ծավալը հաստատուն ջերմաստիճանի դեպքում։

**Խնդիր։** Ավտոմեքենան ճանապարհն անցնում է 4 ժամում՝ 60 կմ/ժ արագությամբ։ Ինչ արագությամբ պետք է գնա, որ նույն ճանապարհն անցնի 3 ժամում։

Ճանապարհը $60 \\cdot 4 = 240$ կմ է, ուրեմն $v = \\dfrac{240}{3} = 80$ կմ/ժ։

### Վարժություններ

1. $(3; 4)$ կետը $y = \\dfrac{12}{x}$ գրաֆիկի վրա՞ է։
2. Գտիր $k$-ն, եթե $y = \\dfrac{k}{x}$ գրաֆիկն անցնում է $(2; -5)$ կետով։
3. Որ քառորդներում են $y = \\dfrac{-8}{x}$ ֆունկցիայի ճյուղերը։
4. Լրացրու աղյուսակը $y = \\dfrac{4}{x}$ ֆունկցիայի համար $x = 1; 2; 4; -2$ դեպքում։
5. $y = \\dfrac{3}{x}$ ֆունկցիան աճո՞ւմ է, թե նվազում յուրաքանչյուր ճյուղի վրա։
6. Վեց բանվոր աշխատանքը կատարում է 10 օրում։ Որքա՞ն ժամանակ կպահանջվի 15 բանվորի՝ նույն արտադրողականությամբ։
7. Ուղղանկյան մակերեսը $36$ սմ² է։ Գրիր $y$-ը որպես $x$-ի ֆունկցիա նրա կողմերի համար։
8. Ինչու հիպերբոլն երբեք չի հատում $y$ առանցքը։

### Պատասխաններ

1. Այո, $12 : 3 = 4$. 2. $k = -10$. 3. 2-րդ և 4-րդ։ 4. $4; 2; 1; -2$. 5. Նվազում է։ 6. $4$ օր։ 7. $y = \\dfrac{36}{x}$. 8. Որովհետև $x = 0$-ն որոշման տիրույթում չէ․ զրոյի վրա բաժանել չի կարելի։`,
        ru: `## Определение

Функция, заданная формулой

$$y = \\frac{k}{x}, \\qquad k \\ne 0,$$

называется **обратной пропорциональностью**. Область определения — все $x \\ne 0$, множество значений — все $y \\ne 0$.

## График

График — кривая из двух ветвей, она называется **гиперболой**.

| Свойство | $k > 0$ | $k < 0$ |
|---|---|---|
| Ветви | в 1-й и 3-й четвертях | во 2-й и 4-й четвертях |
| Поведение | $y$ убывает на каждой ветви | $y$ возрастает на каждой ветви |
| Симметрия | относительно начала координат | относительно начала координат |
| Оси | ветви приближаются к осям, но не пересекают их | так же |

**Пример.** Для $y = \\dfrac{6}{x}$ возьмём точки:

| $x$ | $1$ | $2$ | $3$ | $6$ | $-1$ | $-2$ | $-6$ |
|---|---|---|---|---|---|---|---|
| $y$ | $6$ | $3$ | $2$ | $1$ | $-6$ | $-3$ | $-1$ |

Отметь их и соедини каждую группу плавной кривой: получаются две ветви.

## Принадлежит ли точка графику

Подставь координаты. Лежит ли $A(4; 1{,}5)$ на $y = \\dfrac{6}{x}$? Да, ведь $\\dfrac{6}{4} = 1{,}5$. А $B(5; 1)$? Нет, ведь $\\dfrac{6}{5} = 1{,}2 \\ne 1$.

Полезный факт: для всех точек графика произведение $xy = k$ одно и то же.

## Обратно пропорциональные величины

Если произведение двух величин постоянно, они **обратно пропорциональны**: скорость и время при данном пути, число рабочих и дни работы, давление и объём газа при постоянной температуре.

**Задача.** Автомобиль проходит путь за 4 часа со скоростью 60 км/ч. С какой скоростью нужно ехать, чтобы пройти тот же путь за 3 часа?

Путь равен $60 \\cdot 4 = 240$ км, значит $v = \\dfrac{240}{3} = 80$ км/ч.

### Упражнения

1. Лежит ли точка $(3; 4)$ на графике $y = \\dfrac{12}{x}$?
2. Найди $k$, если график $y = \\dfrac{k}{x}$ проходит через $(2; -5)$.
3. В каких четвертях расположены ветви $y = \\dfrac{-8}{x}$?
4. Заполни таблицу для $y = \\dfrac{4}{x}$ при $x = 1; 2; 4; -2$.
5. Возрастает или убывает $y = \\dfrac{3}{x}$ на каждой ветви?
6. Шесть рабочих выполняют работу за 10 дней. Сколько времени понадобится 15 рабочим при той же производительности?
7. Площадь прямоугольника $36$ см². Запиши $y$ как функцию $x$ для его сторон.
8. Почему гипербола никогда не пересекает ось $y$?

### Ответы

1. Да, $12 : 3 = 4$. 2. $k = -10$. 3. Во 2-й и 4-й. 4. $4; 2; 1; -2$. 5. Убывает. 6. $4$ дня. 7. $y = \\dfrac{36}{x}$. 8. Потому что $x = 0$ не входит в область определения: деление на ноль невозможно.`,
      },
      [
        q(t("The graph of y = k/x is called a…", "y = k/x ֆունկցիայի գրաֆիկը կոչվում է…", "График функции y = k/x называется…"), [t("hyperbola", "հիպերբոլ", "гипербола"), t("parabola", "պարաբոլ", "парабола"), t("straight line", "ուղիղ", "прямая")], 0),
        q(t("For k > 0 the branches lie in quarters…", "k > 0 դեպքում ճյուղերը գտնվում են … քառորդներում։", "При k > 0 ветви лежат в … четвертях."), [t("2 and 4", "2-րդ և 4-րդ", "2-й и 4-й"), t("1 and 3", "1-ին և 3-րդ", "1-й и 3-й"), t("1 and 2", "1-ին և 2-րդ", "1-й и 2-й")], 1),
        q(t("The domain of y = 6/x is…", "y = 6/x ֆունկցիայի որոշման տիրույթն է…", "Область определения y = 6/x — это…"), [t("all numbers", "բոլոր թվերը", "все числа"), t("x > 0", "x > 0", "x > 0"), t("all x except 0", "բոլոր x ≠ 0", "все x, кроме 0")], 2),
        q(t("For all points of the graph of y = k/x the product xy is…", "y = k/x գրաֆիկի բոլոր կետերի համար xy արտադրյալը…", "Для всех точек графика y = k/x произведение xy…"), [t("equal to k", "հավասար է k-ին", "равно k"), t("equal to 0", "հավասար է 0-ի", "равно 0"), t("different everywhere", "ամենուր տարբեր է", "всюду разное")], 0),
        q(t("If 6 workers need 10 days, 15 workers need…", "Եթե 6 բանվորին պետք է 10 օր, ապա 15 բանվորին պետք է…", "Если 6 рабочим нужно 10 дней, то 15 рабочим нужно…"), [t("25 days", "25 օր", "25 дней"), t("4 days", "4 օր", "4 дня"), t("9 days", "9 օր", "9 дней")], 1),
        q(t("The graph of y = k/x and the coordinate axes…", "y = k/x գրաֆիկը և կոորդինատային առանցքները…", "График y = k/x и координатные оси…"), [t("cross at one point", "հատվում են մեկ կետում", "пересекаются в одной точке"), t("cross at two points", "հատվում են երկու կետում", "пересекаются в двух точках"), t("never cross", "երբեք չեն հատվում", "не пересекаются")], 2),
      ],
    ),
  ],
};
