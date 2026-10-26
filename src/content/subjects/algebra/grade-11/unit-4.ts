import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  title: t("Logarithms", "Լոգարիթմներ", "Логарифмы"),
  summary: t("Definition, properties, change of base, logarithmic function, equations and inequalities.", "Սահմանում, հատկություններ, հիմքի փոխում, լոգարիթմական ֆունկցիա, հավասարումներ և անհավասարություններ։", "Определение, свойства, переход к новому основанию, логарифмическая функция, уравнения и неравенства."),
  lessons: [
    lesson(
      "logarithm-definition",
      ["Definition of the logarithm", "Լոգարիթմի սահմանումը", "Определение логарифма"],
      {
        en: ["Define logₐ b as the exponent to which a must be raised to get b", "Pass between the forms aˣ = b and x = logₐ b", "Evaluate simple logarithms and use the basic identity a^(logₐ b) = b"],
        hy: ["Սահմանել logₐ b-ն որպես աստիճանացույց, որին պետք է բարձրացնել a-ն՝ b ստանալու համար", "Անցնել aˣ = b և x = logₐ b գրառումներից մեկից մյուսին", "Հաշվել պարզ լոգարիթմներ և օգտվել a^(logₐ b) = b հիմնական նույնությունից"],
        ru: ["Определять logₐ b как показатель степени, в которую нужно возвести a, чтобы получить b", "Переходить от записи aˣ = b к x = logₐ b и обратно", "Вычислять простые логарифмы и применять основное тождество a^(logₐ b) = b"],
      },
      {
        en: `## Why a new operation

The equation $2^x = 8$ has the solution $x = 3$, because $2^3 = 8$. But what is $x$ in $2^x = 10$? It lies between $3$ and $4$, and there is no way to write it with the operations we already have. The new operation is the **logarithm**.

> **Definition.** The logarithm of a positive number $b$ to the base $a$ ($a > 0$, $a \\ne 1$) is the exponent to which $a$ must be raised to obtain $b$:
>
> $\\log_a b = x \\iff a^x = b.$

So $\\log_2 8 = 3$, $\\log_2 10 \\approx 3.32$, and the two statements

$$a^x = b \\qquad\\text{and}\\qquad x = \\log_a b$$

say exactly the same thing. Substituting one into the other gives the **basic logarithmic identity**:

$$a^{\\log_a b} = b.$$

## Restrictions

- $b > 0$: a power $a^x$ with positive base is always positive, so $\\log_a 0$ and $\\log_a(-4)$ do not exist.
- $a > 0$, $a \\ne 1$: for $a = 1$ every power equals $1$, so $\\log_1 b$ would be undefined.

Two values are always worth remembering: $\\log_a 1 = 0$ (since $a^0 = 1$) and $\\log_a a = 1$ (since $a^1 = a$).

## Worked examples

**Example 1.** $\\log_3 81 = 4$, because $3^4 = 81$.

**Example 2.** $\\log_5 \\dfrac{1}{25} = -2$, because $5^{-2} = \\dfrac{1}{25}$.

**Example 3.** $\\log_{1/2} 8 = -3$, because $\\left(\\dfrac12\\right)^{-3} = 2^3 = 8$.

**Example 4.** $\\log_4 2 = \\dfrac12$, because $4^{1/2} = \\sqrt4 = 2$.

**Example 5.** Find $x$ if $\\log_x 49 = 2$. By definition $x^2 = 49$, and since $x > 0$, $x = 7$.

**Example 6.** $3^{\\log_3 7} = 7$ by the basic identity. Also $2^{1 + \\log_2 5} = 2 \\cdot 2^{\\log_2 5} = 10$.

**Example 7.** Rewrite $10^x = 7$ in logarithmic form: $x = \\log_{10} 7$. Rewrite $\\log_6 x = 2$ in exponential form: $x = 6^2 = 36$.

| Exponential form | Logarithmic form |
| --- | --- |
| $2^5 = 32$ | $\\log_2 32 = 5$ |
| $10^{-1} = 0.1$ | $\\log_{10} 0.1 = -1$ |
| $9^{1/2} = 3$ | $\\log_9 3 = \\dfrac12$ |
| $e^0 = 1$ | $\\log_e 1 = 0$ |

### Exercises

1. Evaluate $\\log_2 64$, $\\log_3 \\dfrac19$, $\\log_7 7$.
2. Evaluate $\\log_{1/3} 27$ and $\\log_{0.1} 1000$.
3. Evaluate $\\log_8 2$ and $\\log_{25} 5$.
4. Write $5^3 = 125$ and $4^{-2} = \\dfrac1{16}$ in logarithmic form.
5. Write $\\log_2 x = 7$ and $\\log_x 81 = 4$ in exponential form and solve.
6. Compute $5^{\\log_5 12}$ and $3^{2 + \\log_3 2}$.
7. For which $x$ does $\\log_3(x - 2)$ exist?
8. Between which two integers does $\\log_2 50$ lie?

### Answers

1. $6$; $-2$; $1$. 2. $-3$; $-3$. 3. $\\dfrac13$; $\\dfrac12$. 4. $\\log_5 125 = 3$; $\\log_4 \\dfrac1{16} = -2$. 5. $x = 2^7 = 128$; $x^4 = 81$, $x = 3$. 6. $12$; $9 \\cdot 2 = 18$. 7. $x - 2 > 0$, so $x > 2$. 8. $2^5 = 32 < 50 < 64 = 2^6$, so between $5$ and $6$.`,
        hy: `## Ինչու է անհրաժեշտ նոր գործողություն

$2^x = 8$ հավասարման լուծումը $x = 3$ է, քանի որ $2^3 = 8$։ Իսկ ի՞նչ է $x$-ը $2^x = 10$ հավասարման մեջ։ Այն $3$-ի և $4$-ի միջև է, և մեր ունեցած գործողություններով այն գրել հնարավոր չէ։ Նոր գործողությունը **լոգարիթմն** է։

> **Սահմանում։** Դրական $b$ թվի լոգարիթմը $a$ հիմքով ($a > 0$, $a \\ne 1$) այն աստիճանացույցն է, որին պետք է բարձրացնել $a$-ն՝ $b$ ստանալու համար․
>
> $\\log_a b = x \\iff a^x = b$

Այսպիսով, $\\log_2 8 = 3$, $\\log_2 10 \\approx 3{,}32$, իսկ

$$a^x = b \\qquad\\text{և}\\qquad x = \\log_a b$$

գրառումները նշանակում են միևնույն բանը։ Մեկը մյուսի մեջ տեղադրելով՝ ստանում ենք **հիմնական լոգարիթմական նույնությունը**․

$$a^{\\log_a b} = b$$

## Սահմանափակումներ

- $b > 0$․ դրական հիմքով $a^x$ աստիճանը միշտ դրական է, ուստի $\\log_a 0$ և $\\log_a(-4)$ գոյություն չունեն։
- $a > 0$, $a \\ne 1$․ $a = 1$ դեպքում ցանկացած աստիճան հավասար է $1$-ի, ուստի $\\log_1 b$-ն անորոշ կլիներ։

Երկու արժեք միշտ արժե հիշել․ $\\log_a 1 = 0$ (քանի որ $a^0 = 1$) և $\\log_a a = 1$ (քանի որ $a^1 = a$)։

## Լուծված օրինակներ

**Օրինակ 1։** $\\log_3 81 = 4$, քանի որ $3^4 = 81$։

**Օրինակ 2։** $\\log_5 \\dfrac{1}{25} = -2$, քանի որ $5^{-2} = \\dfrac{1}{25}$։

**Օրինակ 3։** $\\log_{1/2} 8 = -3$, քանի որ $\\left(\\dfrac12\\right)^{-3} = 2^3 = 8$։

**Օրինակ 4։** $\\log_4 2 = \\dfrac12$, քանի որ $4^{1/2} = \\sqrt4 = 2$։

**Օրինակ 5։** Գտնենք $x$-ը, եթե $\\log_x 49 = 2$։ Սահմանումով $x^2 = 49$, և քանի որ $x > 0$, ապա $x = 7$։

**Օրինակ 6։** $3^{\\log_3 7} = 7$՝ հիմնական նույնությամբ։ Նաև $2^{1 + \\log_2 5} = 2 \\cdot 2^{\\log_2 5} = 10$։

**Օրինակ 7։** $10^x = 7$-ը գրենք լոգարիթմական տեսքով․ $x = \\log_{10} 7$։ $\\log_6 x = 2$-ը գրենք ցուցչային տեսքով․ $x = 6^2 = 36$։

| Ցուցչային տեսք | Լոգարիթմական տեսք |
| --- | --- |
| $2^5 = 32$ | $\\log_2 32 = 5$ |
| $10^{-1} = 0{,}1$ | $\\log_{10} 0{,}1 = -1$ |
| $9^{1/2} = 3$ | $\\log_9 3 = \\dfrac12$ |
| $e^0 = 1$ | $\\log_e 1 = 0$ |

### Վարժություններ

1. Հաշվեք $\\log_2 64$, $\\log_3 \\dfrac19$, $\\log_7 7$։
2. Հաշվեք $\\log_{1/3} 27$ և $\\log_{0{,}1} 1000$։
3. Հաշվեք $\\log_8 2$ և $\\log_{25} 5$։
4. $5^3 = 125$ և $4^{-2} = \\dfrac1{16}$ հավասարությունները գրեք լոգարիթմական տեսքով։
5. $\\log_2 x = 7$ և $\\log_x 81 = 4$ հավասարումները գրեք ցուցչային տեսքով և լուծեք։
6. Հաշվեք $5^{\\log_5 12}$ և $3^{2 + \\log_3 2}$։
7. $x$-ի ո՞ր արժեքների դեպքում գոյություն ունի $\\log_3(x - 2)$-ը։
8. Ո՞ր երկու ամբողջ թվերի միջև է $\\log_2 50$-ը։

### Պատասխաններ

1. $6$, $-2$, $1$։ 2. $-3$, $-3$։ 3. $\\dfrac13$, $\\dfrac12$։ 4. $\\log_5 125 = 3$, $\\log_4 \\dfrac1{16} = -2$։ 5. $x = 2^7 = 128$, $x^4 = 81$, $x = 3$։ 6. $12$, $9 \\cdot 2 = 18$։ 7. $x - 2 > 0$, այսինքն $x > 2$։ 8. $2^5 = 32 < 50 < 64 = 2^6$, ուստի $5$-ի և $6$-ի միջև։`,
        ru: `## Зачем нужна новая операция

Уравнение $2^x = 8$ имеет решение $x = 3$, так как $2^3 = 8$. А чему равен $x$ в уравнении $2^x = 10$? Он лежит между $3$ и $4$, и записать его известными операциями невозможно. Новая операция — **логарифм**.

> **Определение.** Логарифмом положительного числа $b$ по основанию $a$ ($a > 0$, $a \\ne 1$) называется показатель степени, в которую нужно возвести $a$, чтобы получить $b$:
>
> $\\log_a b = x \\iff a^x = b.$

Итак, $\\log_2 8 = 3$, $\\log_2 10 \\approx 3{,}32$, а записи

$$a^x = b \\qquad\\text{и}\\qquad x = \\log_a b$$

означают одно и то же. Подставив одну в другую, получаем **основное логарифмическое тождество**:

$$a^{\\log_a b} = b.$$

## Ограничения

- $b > 0$: степень $a^x$ с положительным основанием всегда положительна, поэтому $\\log_a 0$ и $\\log_a(-4)$ не существуют.
- $a > 0$, $a \\ne 1$: при $a = 1$ любая степень равна $1$, и $\\log_1 b$ был бы не определён.

Два значения стоит помнить всегда: $\\log_a 1 = 0$ (так как $a^0 = 1$) и $\\log_a a = 1$ (так как $a^1 = a$).

## Разобранные примеры

**Пример 1.** $\\log_3 81 = 4$, так как $3^4 = 81$.

**Пример 2.** $\\log_5 \\dfrac{1}{25} = -2$, так как $5^{-2} = \\dfrac{1}{25}$.

**Пример 3.** $\\log_{1/2} 8 = -3$, так как $\\left(\\dfrac12\\right)^{-3} = 2^3 = 8$.

**Пример 4.** $\\log_4 2 = \\dfrac12$, так как $4^{1/2} = \\sqrt4 = 2$.

**Пример 5.** Найдём $x$, если $\\log_x 49 = 2$. По определению $x^2 = 49$, и так как $x > 0$, то $x = 7$.

**Пример 6.** $3^{\\log_3 7} = 7$ по основному тождеству. Также $2^{1 + \\log_2 5} = 2 \\cdot 2^{\\log_2 5} = 10$.

**Пример 7.** Запишем $10^x = 7$ в логарифмической форме: $x = \\log_{10} 7$. Запишем $\\log_6 x = 2$ в показательной форме: $x = 6^2 = 36$.

| Показательная форма | Логарифмическая форма |
| --- | --- |
| $2^5 = 32$ | $\\log_2 32 = 5$ |
| $10^{-1} = 0{,}1$ | $\\log_{10} 0{,}1 = -1$ |
| $9^{1/2} = 3$ | $\\log_9 3 = \\dfrac12$ |
| $e^0 = 1$ | $\\log_e 1 = 0$ |

### Упражнения

1. Вычислите $\\log_2 64$, $\\log_3 \\dfrac19$, $\\log_7 7$.
2. Вычислите $\\log_{1/3} 27$ и $\\log_{0{,}1} 1000$.
3. Вычислите $\\log_8 2$ и $\\log_{25} 5$.
4. Запишите $5^3 = 125$ и $4^{-2} = \\dfrac1{16}$ в логарифмической форме.
5. Запишите $\\log_2 x = 7$ и $\\log_x 81 = 4$ в показательной форме и решите.
6. Вычислите $5^{\\log_5 12}$ и $3^{2 + \\log_3 2}$.
7. При каких $x$ существует $\\log_3(x - 2)$?
8. Между какими двумя целыми числами лежит $\\log_2 50$?

### Ответы

1. $6$; $-2$; $1$. 2. $-3$; $-3$. 3. $\\dfrac13$; $\\dfrac12$. 4. $\\log_5 125 = 3$; $\\log_4 \\dfrac1{16} = -2$. 5. $x = 2^7 = 128$; $x^4 = 81$, $x = 3$. 6. $12$; $9 \\cdot 2 = 18$. 7. $x - 2 > 0$, то есть $x > 2$. 8. $2^5 = 32 < 50 < 64 = 2^6$, значит между $5$ и $6$.`,
      },
      [
        q(t("log₂ 32 equals…", "log₂ 32-ը հավասար է…", "log₂ 32 равен…"), [t("4", "4", "4"), t("5", "5", "5"), t("16", "16", "16")], 1),
        q(t("log₃ (1/9) equals…", "log₃ (1/9)-ը հավասար է…", "log₃ (1/9) равен…"), [t("−2", "−2", "−2"), t("2", "2", "2"), t("−3", "−3", "−3")], 0),
        q(t("logₐ 1 equals…", "logₐ 1-ը հավասար է…", "logₐ 1 равен…"), [t("1", "1", "1"), t("a", "a", "a"), t("0", "0", "0")], 2),
        q(t("The equation aˣ = b is equivalent to…", "aˣ = b հավասարումը համարժեք է…", "Уравнение aˣ = b равносильно…"), [t("x = logₐ b", "x = logₐ b", "x = logₐ b"), t("x = log_b a", "x = log_b a", "x = log_b a"), t("b = logₐ x", "b = logₐ x", "b = logₐ x")], 0),
        q(t("7^(log₇ 11) equals…", "7^(log₇ 11)-ը հավասար է…", "7^(log₇ 11) равно…"), [t("7", "7", "7"), t("11", "11", "11"), t("77", "77", "77")], 1),
        q(t("logₐ b is defined when…", "logₐ b-ն սահմանված է, երբ…", "logₐ b определён, когда…"), [t("b > 0, a > 0, a ≠ 1", "b > 0, a > 0, a ≠ 1", "b > 0, a > 0, a ≠ 1"), t("b ≥ 0, a > 0", "b ≥ 0, a > 0", "b ≥ 0, a > 0"), t("any a and b", "ցանկացած a-ի և b-ի դեպքում", "при любых a и b")], 0),
      ],
    ),
    lesson(
      "logarithm-properties",
      ["Properties of logarithms", "Լոգարիթմների հատկությունները", "Свойства логарифмов"],
      {
        en: ["State and prove the logarithm of a product, quotient and power", "Expand and collapse logarithmic expressions", "Use the properties to compute values such as log₆ 4 + log₆ 9"],
        hy: ["Ձևակերպել և ապացուցել արտադրյալի, քանորդի և աստիճանի լոգարիթմի բանաձևերը", "Բացել և հավաքել լոգարիթմական արտահայտություններ", "Հատկությունների միջոցով հաշվել log₆ 4 + log₆ 9 տիպի արժեքներ"],
        ru: ["Формулировать и доказывать формулы логарифма произведения, частного и степени", "Раскрывать и свёртывать логарифмические выражения", "С помощью свойств вычислять значения вида log₆ 4 + log₆ 9"],
      },
      {
        en: `## Three main properties

Logarithms turn multiplication into addition. For $a > 0$, $a \\ne 1$ and positive $x$, $y$:

$$\\log_a(xy) = \\log_a x + \\log_a y,$$
$$\\log_a \\frac{x}{y} = \\log_a x - \\log_a y,$$
$$\\log_a x^p = p \\log_a x.$$

**Proof of the first.** Let $\\log_a x = m$ and $\\log_a y = n$, so $x = a^m$ and $y = a^n$. Then $xy = a^m a^n = a^{m+n}$, which by definition means $\\log_a(xy) = m + n$. The other two are proved the same way, using $a^m : a^n = a^{m-n}$ and $(a^m)^p = a^{mp}$.

A useful special case of the third property: $\\log_a \\sqrt[n]{x} = \\dfrac1n \\log_a x$.

## Expanding and collapsing

**Example 1.** Expand $\\log_2 \\dfrac{8x^3}{\\sqrt y}$:
$$\\log_2 8 + 3\\log_2 x - \\tfrac12 \\log_2 y = 3 + 3\\log_2 x - \\tfrac12\\log_2 y.$$

**Example 2.** Collapse $2\\log_5 3 + \\log_5 2 - \\log_5 6$:
$$\\log_5 \\frac{3^2 \\cdot 2}{6} = \\log_5 3.$$

**Example 3.** $\\log_6 4 + \\log_6 9 = \\log_6 36 = 2$.

**Example 4.** $\\log_3 54 - \\log_3 2 = \\log_3 27 = 3$.

**Example 5.** If $\\log_a 2 = m$ and $\\log_a 3 = n$, express $\\log_a 72$: $72 = 2^3 \\cdot 3^2$, so $\\log_a 72 = 3m + 2n$.

## Common mistakes

The properties concern products, quotients and powers **inside** the logarithm. There is no formula for $\\log_a(x + y)$, and

$$\\log_a(x + y) \\ne \\log_a x + \\log_a y, \\qquad (\\log_a x)^2 \\ne 2\\log_a x.$$

For instance $\\log_2(4 + 4) = 3$, but $\\log_2 4 + \\log_2 4 = 4$.

Also note: $\\log_a x^2 = 2\\log_a \\lvert x\\rvert$ when $x$ may be negative, since $x^2 > 0$ even for $x < 0$.

### Exercises

1. Compute $\\log_2 12 - \\log_2 3$.
2. Compute $\\log_{12} 2 + \\log_{12} 6 + \\log_{12} 12$.
3. Compute $\\log_5 \\sqrt[3]{25}$.
4. Expand $\\log_a \\dfrac{x^2 y}{z^3}$.
5. Collapse $\\dfrac12 \\log_3 16 - 2\\log_3 2 + \\log_3 5$.
6. Given $\\log_a 2 = m$, $\\log_a 5 = n$, express $\\log_a 40$ and $\\log_a 0.4$.
7. Compute $\\log_7 98 - \\log_7 2 + \\log_7 \\dfrac17$.
8. Decide whether $\\log_3(9 + 27) = \\log_3 9 + \\log_3 27$.

### Answers

1. $\\log_2 4 = 2$. 2. $\\log_{12} 144 = 2$. 3. $\\dfrac23$. 4. $2\\log_a x + \\log_a y - 3\\log_a z$. 5. $\\log_3 4 - \\log_3 4 + \\log_3 5 = \\log_3 5$. 6. $40 = 2^3 \\cdot 5$: $3m + n$; $0.4 = \\dfrac25$: $m - n$. 7. $\\log_7 49 - 1 = 1$. 8. No: the left side is $\\log_3 36 \\approx 3.26$, the right side is $5$.`,
        hy: `## Երեք հիմնական հատկություն

Լոգարիթմները բազմապատկումը վերածում են գումարման։ $a > 0$, $a \\ne 1$ և դրական $x$, $y$ դեպքում․

$$\\log_a(xy) = \\log_a x + \\log_a y,$$
$$\\log_a \\frac{x}{y} = \\log_a x - \\log_a y,$$
$$\\log_a x^p = p \\log_a x$$

**Առաջինի ապացույցը։** Դիցուք $\\log_a x = m$ և $\\log_a y = n$, այսինքն $x = a^m$ և $y = a^n$։ Այդ դեպքում $xy = a^m a^n = a^{m+n}$, ինչը սահմանումով նշանակում է $\\log_a(xy) = m + n$։ Մյուս երկուսն ապացուցվում են նույն կերպ՝ $a^m : a^n = a^{m-n}$ և $(a^m)^p = a^{mp}$ հավասարությունների միջոցով։

Երրորդ հատկության օգտակար մասնավոր դեպքն է․ $\\log_a \\sqrt[n]{x} = \\dfrac1n \\log_a x$։

## Բացում և հավաքում

**Օրինակ 1։** Բացենք $\\log_2 \\dfrac{8x^3}{\\sqrt y}$-ը․
$$\\log_2 8 + 3\\log_2 x - \\tfrac12 \\log_2 y = 3 + 3\\log_2 x - \\tfrac12\\log_2 y$$

**Օրինակ 2։** Հավաքենք $2\\log_5 3 + \\log_5 2 - \\log_5 6$-ը․
$$\\log_5 \\frac{3^2 \\cdot 2}{6} = \\log_5 3$$

**Օրինակ 3։** $\\log_6 4 + \\log_6 9 = \\log_6 36 = 2$։

**Օրինակ 4։** $\\log_3 54 - \\log_3 2 = \\log_3 27 = 3$։

**Օրինակ 5։** Եթե $\\log_a 2 = m$ և $\\log_a 3 = n$, արտահայտենք $\\log_a 72$-ը․ $72 = 2^3 \\cdot 3^2$, ուստի $\\log_a 72 = 3m + 2n$։

## Տարածված սխալներ

Հատկությունները վերաբերում են լոգարիթմի **ներսում** գտնվող արտադրյալին, քանորդին և աստիճանին։ $\\log_a(x + y)$-ի համար բանաձև չկա, և

$$\\log_a(x + y) \\ne \\log_a x + \\log_a y, \\qquad (\\log_a x)^2 \\ne 2\\log_a x$$

Օրինակ՝ $\\log_2(4 + 4) = 3$, բայց $\\log_2 4 + \\log_2 4 = 4$։

Նկատենք նաև․ $\\log_a x^2 = 2\\log_a \\lvert x\\rvert$, եթե $x$-ը կարող է բացասական լինել, քանի որ $x^2 > 0$ նույնիսկ $x < 0$ դեպքում։

### Վարժություններ

1. Հաշվեք $\\log_2 12 - \\log_2 3$։
2. Հաշվեք $\\log_{12} 2 + \\log_{12} 6 + \\log_{12} 12$։
3. Հաշվեք $\\log_5 \\sqrt[3]{25}$։
4. Բացեք $\\log_a \\dfrac{x^2 y}{z^3}$-ը։
5. Հավաքեք $\\dfrac12 \\log_3 16 - 2\\log_3 2 + \\log_3 5$-ը։
6. Եթե $\\log_a 2 = m$, $\\log_a 5 = n$, արտահայտեք $\\log_a 40$-ը և $\\log_a 0{,}4$-ը։
7. Հաշվեք $\\log_7 98 - \\log_7 2 + \\log_7 \\dfrac17$։
8. Ճի՞շտ է, որ $\\log_3(9 + 27) = \\log_3 9 + \\log_3 27$։

### Պատասխաններ

1. $\\log_2 4 = 2$։ 2. $\\log_{12} 144 = 2$։ 3. $\\dfrac23$։ 4. $2\\log_a x + \\log_a y - 3\\log_a z$։ 5. $\\log_3 4 - \\log_3 4 + \\log_3 5 = \\log_3 5$։ 6. $40 = 2^3 \\cdot 5$՝ $3m + n$, $0{,}4 = \\dfrac25$՝ $m - n$։ 7. $\\log_7 49 - 1 = 1$։ 8. Ոչ․ ձախ կողմը $\\log_3 36 \\approx 3{,}26$ է, աջ կողմը՝ $5$։`,
        ru: `## Три основных свойства

Логарифмы превращают умножение в сложение. При $a > 0$, $a \\ne 1$ и положительных $x$, $y$:

$$\\log_a(xy) = \\log_a x + \\log_a y,$$
$$\\log_a \\frac{x}{y} = \\log_a x - \\log_a y,$$
$$\\log_a x^p = p \\log_a x.$$

**Доказательство первого.** Пусть $\\log_a x = m$ и $\\log_a y = n$, то есть $x = a^m$ и $y = a^n$. Тогда $xy = a^m a^n = a^{m+n}$, что по определению означает $\\log_a(xy) = m + n$. Остальные два доказываются так же, через $a^m : a^n = a^{m-n}$ и $(a^m)^p = a^{mp}$.

Полезный частный случай третьего свойства: $\\log_a \\sqrt[n]{x} = \\dfrac1n \\log_a x$.

## Раскрытие и свёртывание

**Пример 1.** Раскроем $\\log_2 \\dfrac{8x^3}{\\sqrt y}$:
$$\\log_2 8 + 3\\log_2 x - \\tfrac12 \\log_2 y = 3 + 3\\log_2 x - \\tfrac12\\log_2 y.$$

**Пример 2.** Свернём $2\\log_5 3 + \\log_5 2 - \\log_5 6$:
$$\\log_5 \\frac{3^2 \\cdot 2}{6} = \\log_5 3.$$

**Пример 3.** $\\log_6 4 + \\log_6 9 = \\log_6 36 = 2$.

**Пример 4.** $\\log_3 54 - \\log_3 2 = \\log_3 27 = 3$.

**Пример 5.** Если $\\log_a 2 = m$ и $\\log_a 3 = n$, выразим $\\log_a 72$: $72 = 2^3 \\cdot 3^2$, поэтому $\\log_a 72 = 3m + 2n$.

## Типичные ошибки

Свойства относятся к произведению, частному и степени **внутри** логарифма. Для $\\log_a(x + y)$ формулы нет, и

$$\\log_a(x + y) \\ne \\log_a x + \\log_a y, \\qquad (\\log_a x)^2 \\ne 2\\log_a x.$$

Например, $\\log_2(4 + 4) = 3$, а $\\log_2 4 + \\log_2 4 = 4$.

Заметим также: $\\log_a x^2 = 2\\log_a \\lvert x\\rvert$, если $x$ может быть отрицательным, так как $x^2 > 0$ и при $x < 0$.

### Упражнения

1. Вычислите $\\log_2 12 - \\log_2 3$.
2. Вычислите $\\log_{12} 2 + \\log_{12} 6 + \\log_{12} 12$.
3. Вычислите $\\log_5 \\sqrt[3]{25}$.
4. Раскройте $\\log_a \\dfrac{x^2 y}{z^3}$.
5. Сверните $\\dfrac12 \\log_3 16 - 2\\log_3 2 + \\log_3 5$.
6. Если $\\log_a 2 = m$, $\\log_a 5 = n$, выразите $\\log_a 40$ и $\\log_a 0{,}4$.
7. Вычислите $\\log_7 98 - \\log_7 2 + \\log_7 \\dfrac17$.
8. Верно ли, что $\\log_3(9 + 27) = \\log_3 9 + \\log_3 27$?

### Ответы

1. $\\log_2 4 = 2$. 2. $\\log_{12} 144 = 2$. 3. $\\dfrac23$. 4. $2\\log_a x + \\log_a y - 3\\log_a z$. 5. $\\log_3 4 - \\log_3 4 + \\log_3 5 = \\log_3 5$. 6. $40 = 2^3 \\cdot 5$: $3m + n$; $0{,}4 = \\dfrac25$: $m - n$. 7. $\\log_7 49 - 1 = 1$. 8. Нет: слева $\\log_3 36 \\approx 3{,}26$, справа $5$.`,
      },
      [
        q(t("logₐ(xy) equals…", "logₐ(xy)-ը հավասար է…", "logₐ(xy) равен…"), [t("logₐ x · logₐ y", "logₐ x · logₐ y", "logₐ x · logₐ y"), t("logₐ x + logₐ y", "logₐ x + logₐ y", "logₐ x + logₐ y"), t("logₐ x − logₐ y", "logₐ x − logₐ y", "logₐ x − logₐ y")], 1),
        q(t("logₐ xᵖ equals…", "logₐ xᵖ-ը հավասար է…", "logₐ xᵖ равен…"), [t("p · logₐ x", "p · logₐ x", "p · logₐ x"), t("(logₐ x)ᵖ", "(logₐ x)ᵖ", "(logₐ x)ᵖ"), t("logₐ x + p", "logₐ x + p", "logₐ x + p")], 0),
        q(t("log₆ 4 + log₆ 9 equals…", "log₆ 4 + log₆ 9-ը հավասար է…", "log₆ 4 + log₆ 9 равен…"), [t("1", "1", "1"), t("2", "2", "2"), t("log₆ 13", "log₆ 13", "log₆ 13")], 1),
        q(t("log₃ 54 − log₃ 2 equals…", "log₃ 54 − log₃ 2-ը հավասար է…", "log₃ 54 − log₃ 2 равен…"), [t("3", "3", "3"), t("log₃ 52", "log₃ 52", "log₃ 52"), t("27", "27", "27")], 0),
        q(t("logₐ √x equals…", "logₐ √x-ը հավասար է…", "logₐ √x равен…"), [t("2 logₐ x", "2 logₐ x", "2 logₐ x"), t("√(logₐ x)", "√(logₐ x)", "√(logₐ x)"), t("½ logₐ x", "½ logₐ x", "½ logₐ x")], 2),
        q(t("Which equality is false?", "Ո՞ր հավասարությունն է սխալ։", "Какое равенство неверно?"), [t("logₐ(x + y) = logₐ x + logₐ y", "logₐ(x + y) = logₐ x + logₐ y", "logₐ(x + y) = logₐ x + logₐ y"), t("logₐ(x/y) = logₐ x − logₐ y", "logₐ(x/y) = logₐ x − logₐ y", "logₐ(x/y) = logₐ x − logₐ y"), t("logₐ 1 = 0", "logₐ 1 = 0", "logₐ 1 = 0")], 0),
      ],
    ),
    lesson(
      "change-of-base",
      ["Decimal and natural logarithms; change of base", "Տասնորդական և բնական լոգարիթմ, հիմքի փոխում", "Десятичные и натуральные логарифмы; переход к новому основанию"],
      {
        en: ["Use the notations lg x = log₁₀ x and ln x = logₑ x", "Apply the change-of-base formula logₐ b = log_c b / log_c a", "Use the consequences logₐ b = 1 / log_b a and log_(aᵏ) b = (1/k) logₐ b"],
        hy: ["Օգտվել lg x = log₁₀ x և ln x = logₑ x նշանակումներից", "Կիրառել հիմքի փոխման logₐ b = log_c b / log_c a բանաձևը", "Օգտվել logₐ b = 1 / log_b a և log_(aᵏ) b = (1/k) logₐ b հետևանքներից"],
        ru: ["Использовать обозначения lg x = log₁₀ x и ln x = logₑ x", "Применять формулу перехода к новому основанию logₐ b = log_c b / log_c a", "Использовать следствия logₐ b = 1 / log_b a и log_(aᵏ) b = (1/k) logₐ b"],
      },
      {
        en: `## Two special bases

Two bases are used so often that they have their own notation.

- The **decimal logarithm** $\\lg x = \\log_{10} x$. Since $\\lg 10 = 1$, $\\lg 100 = 2$, $\\lg 1000 = 3$, the decimal logarithm counts the digits: $\\lg 5370 \\approx 3.73$ lies between $3$ and $4$ because $5370$ has four digits.
- The **natural logarithm** $\\ln x = \\log_e x$, with $e \\approx 2.718$. It appears everywhere derivatives and growth processes are involved: $(e^x)' = e^x$ and $(a^x)' = a^x \\ln a$.

A calculator usually has only the $\\lg$ and $\\ln$ keys. To compute $\\log_2 10$ we need to change the base.

## The change-of-base formula

$$\\log_a b = \\frac{\\log_c b}{\\log_c a} \\qquad (a, b, c > 0;\\ a, c \\ne 1).$$

**Proof.** Let $\\log_a b = x$, so $a^x = b$. Taking $\\log_c$ of both sides: $x \\log_c a = \\log_c b$, hence $x = \\dfrac{\\log_c b}{\\log_c a}$.

**Example 1.** $\\log_2 10 = \\dfrac{\\lg 10}{\\lg 2} = \\dfrac{1}{0.3010} \\approx 3.32$.

## Two consequences

Taking $c = b$ gives $\\log_a b = \\dfrac{1}{\\log_b a}$. Taking $c = a$ in $\\log_{a^k} b$ gives

$$\\log_{a^k} b = \\frac{\\log_a b}{\\log_a a^k} = \\frac1k \\log_a b.$$

**Example 2.** $\\log_8 32 = \\dfrac{\\log_2 32}{\\log_2 8} = \\dfrac53$.

**Example 3.** $\\log_3 5 \\cdot \\log_5 9 = \\dfrac{\\lg 5}{\\lg 3} \\cdot \\dfrac{\\lg 9}{\\lg 5} = \\log_3 9 = 2$.

**Example 4.** $\\log_{\\sqrt 3} 27 = \\log_{3^{1/2}} 3^3 = \\dfrac{3}{1/2} = 6$.

**Example 5.** Express $\\log_6 12$ through $m = \\log_2 3$: $\\log_6 12 = \\dfrac{\\log_2 12}{\\log_2 6} = \\dfrac{2 + m}{1 + m}$.

**Example 6.** Compare $\\log_2 3$ and $\\log_3 2$. Since $\\log_2 3 > 1$ and $\\log_3 2 = \\dfrac{1}{\\log_2 3} < 1$, we have $\\log_2 3 > \\log_3 2$.

### Exercises

1. Compute $\\lg 0.001$, $\\lg \\sqrt{10}$, $\\ln e^5$, $\\ln \\dfrac1e$.
2. Using $\\lg 2 \\approx 0.301$ and $\\lg 3 \\approx 0.477$, find $\\lg 6$, $\\lg 5$, $\\lg 1.5$.
3. Compute $\\log_4 128$ via base $2$.
4. Compute $\\log_5 7 \\cdot \\log_7 25$.
5. Compute $\\log_{\\sqrt 2} 8$ and $\\log_{1/9} 3$.
6. Express $\\log_{12} 18$ through $m = \\log_2 3$.
7. Which is larger: $\\log_5 6$ or $\\log_6 5$?
8. Solve $\\log_x 2 = 3$.

### Answers

1. $-3$; $\\dfrac12$; $5$; $-1$. 2. $0.778$; $\\lg 5 = \\lg 10 - \\lg 2 = 0.699$; $0.176$. 3. $\\dfrac72$. 4. $\\log_5 25 = 2$. 5. $6$; $-\\dfrac12$. 6. $\\dfrac{1 + 2m}{2 + m}$. 7. $\\log_5 6 > 1 > \\log_6 5$. 8. $x^3 = 2$, $x = \\sqrt[3]{2}$.`,
        hy: `## Երկու հատուկ հիմք

Երկու հիմք այնքան հաճախ են գործածվում, որ ունեն սեփական նշանակում։

- **Տասնորդական լոգարիթմ**՝ $\\lg x = \\log_{10} x$։ Քանի որ $\\lg 10 = 1$, $\\lg 100 = 2$, $\\lg 1000 = 3$, տասնորդական լոգարիթմը «հաշվում է» թվանշանները․ $\\lg 5370 \\approx 3{,}73$-ը $3$-ի և $4$-ի միջև է, քանի որ $5370$-ը քառանիշ է։
- **Բնական լոգարիթմ**՝ $\\ln x = \\log_e x$, որտեղ $e \\approx 2{,}718$։ Այն հանդիպում է ամենուր, որտեղ կան ածանցյալներ և աճի պրոցեսներ․ $(e^x)' = e^x$ և $(a^x)' = a^x \\ln a$։

Հաշվիչը սովորաբար ունի միայն $\\lg$ և $\\ln$ ստեղներ։ $\\log_2 10$-ը հաշվելու համար պետք է փոխել հիմքը։

## Հիմքի փոխման բանաձևը

$$\\log_a b = \\frac{\\log_c b}{\\log_c a} \\qquad (a, b, c > 0;\\ a, c \\ne 1)$$

**Ապացույց։** Դիցուք $\\log_a b = x$, այսինքն $a^x = b$։ Երկու կողմից վերցնենք $\\log_c$․ $x \\log_c a = \\log_c b$, որտեղից $x = \\dfrac{\\log_c b}{\\log_c a}$։

**Օրինակ 1։** $\\log_2 10 = \\dfrac{\\lg 10}{\\lg 2} = \\dfrac{1}{0{,}3010} \\approx 3{,}32$։

## Երկու հետևանք

$c = b$ վերցնելով՝ ստանում ենք $\\log_a b = \\dfrac{1}{\\log_b a}$։ $\\log_{a^k} b$-ում $c = a$ վերցնելով՝

$$\\log_{a^k} b = \\frac{\\log_a b}{\\log_a a^k} = \\frac1k \\log_a b$$

**Օրինակ 2։** $\\log_8 32 = \\dfrac{\\log_2 32}{\\log_2 8} = \\dfrac53$։

**Օրինակ 3։** $\\log_3 5 \\cdot \\log_5 9 = \\dfrac{\\lg 5}{\\lg 3} \\cdot \\dfrac{\\lg 9}{\\lg 5} = \\log_3 9 = 2$։

**Օրինակ 4։** $\\log_{\\sqrt 3} 27 = \\log_{3^{1/2}} 3^3 = \\dfrac{3}{1/2} = 6$։

**Օրինակ 5։** Արտահայտենք $\\log_6 12$-ը $m = \\log_2 3$-ի միջոցով․ $\\log_6 12 = \\dfrac{\\log_2 12}{\\log_2 6} = \\dfrac{2 + m}{1 + m}$։

**Օրինակ 6։** Համեմատենք $\\log_2 3$-ը և $\\log_3 2$-ը։ Քանի որ $\\log_2 3 > 1$, իսկ $\\log_3 2 = \\dfrac{1}{\\log_2 3} < 1$, ապա $\\log_2 3 > \\log_3 2$։

### Վարժություններ

1. Հաշվեք $\\lg 0{,}001$, $\\lg \\sqrt{10}$, $\\ln e^5$, $\\ln \\dfrac1e$։
2. $\\lg 2 \\approx 0{,}301$ և $\\lg 3 \\approx 0{,}477$ արժեքներով գտեք $\\lg 6$, $\\lg 5$, $\\lg 1{,}5$։
3. Հաշվեք $\\log_4 128$-ը՝ անցնելով $2$ հիմքի։
4. Հաշվեք $\\log_5 7 \\cdot \\log_7 25$։
5. Հաշվեք $\\log_{\\sqrt 2} 8$ և $\\log_{1/9} 3$։
6. Արտահայտեք $\\log_{12} 18$-ը $m = \\log_2 3$-ի միջոցով։
7. Ո՞րն է մեծ՝ $\\log_5 6$-ը կամ $\\log_6 5$-ը։
8. Լուծեք $\\log_x 2 = 3$ հավասարումը։

### Պատասխաններ

1. $-3$, $\\dfrac12$, $5$, $-1$։ 2. $0{,}778$, $\\lg 5 = \\lg 10 - \\lg 2 = 0{,}699$, $0{,}176$։ 3. $\\dfrac72$։ 4. $\\log_5 25 = 2$։ 5. $6$, $-\\dfrac12$։ 6. $\\dfrac{1 + 2m}{2 + m}$։ 7. $\\log_5 6 > 1 > \\log_6 5$։ 8. $x^3 = 2$, $x = \\sqrt[3]{2}$։`,
        ru: `## Два особых основания

Два основания используются так часто, что имеют собственные обозначения.

- **Десятичный логарифм** $\\lg x = \\log_{10} x$. Так как $\\lg 10 = 1$, $\\lg 100 = 2$, $\\lg 1000 = 3$, десятичный логарифм «считает» цифры: $\\lg 5370 \\approx 3{,}73$ лежит между $3$ и $4$, потому что в числе $5370$ четыре цифры.
- **Натуральный логарифм** $\\ln x = \\log_e x$, где $e \\approx 2{,}718$. Он встречается всюду, где есть производные и процессы роста: $(e^x)' = e^x$ и $(a^x)' = a^x \\ln a$.

На калькуляторе обычно есть только клавиши $\\lg$ и $\\ln$. Чтобы вычислить $\\log_2 10$, нужно перейти к другому основанию.

## Формула перехода к новому основанию

$$\\log_a b = \\frac{\\log_c b}{\\log_c a} \\qquad (a, b, c > 0;\\ a, c \\ne 1).$$

**Доказательство.** Пусть $\\log_a b = x$, то есть $a^x = b$. Возьмём $\\log_c$ от обеих частей: $x \\log_c a = \\log_c b$, откуда $x = \\dfrac{\\log_c b}{\\log_c a}$.

**Пример 1.** $\\log_2 10 = \\dfrac{\\lg 10}{\\lg 2} = \\dfrac{1}{0{,}3010} \\approx 3{,}32$.

## Два следствия

При $c = b$ получаем $\\log_a b = \\dfrac{1}{\\log_b a}$. При $c = a$ в $\\log_{a^k} b$ получаем

$$\\log_{a^k} b = \\frac{\\log_a b}{\\log_a a^k} = \\frac1k \\log_a b.$$

**Пример 2.** $\\log_8 32 = \\dfrac{\\log_2 32}{\\log_2 8} = \\dfrac53$.

**Пример 3.** $\\log_3 5 \\cdot \\log_5 9 = \\dfrac{\\lg 5}{\\lg 3} \\cdot \\dfrac{\\lg 9}{\\lg 5} = \\log_3 9 = 2$.

**Пример 4.** $\\log_{\\sqrt 3} 27 = \\log_{3^{1/2}} 3^3 = \\dfrac{3}{1/2} = 6$.

**Пример 5.** Выразим $\\log_6 12$ через $m = \\log_2 3$: $\\log_6 12 = \\dfrac{\\log_2 12}{\\log_2 6} = \\dfrac{2 + m}{1 + m}$.

**Пример 6.** Сравним $\\log_2 3$ и $\\log_3 2$. Так как $\\log_2 3 > 1$, а $\\log_3 2 = \\dfrac{1}{\\log_2 3} < 1$, то $\\log_2 3 > \\log_3 2$.

### Упражнения

1. Вычислите $\\lg 0{,}001$, $\\lg \\sqrt{10}$, $\\ln e^5$, $\\ln \\dfrac1e$.
2. Зная $\\lg 2 \\approx 0{,}301$ и $\\lg 3 \\approx 0{,}477$, найдите $\\lg 6$, $\\lg 5$, $\\lg 1{,}5$.
3. Вычислите $\\log_4 128$, перейдя к основанию $2$.
4. Вычислите $\\log_5 7 \\cdot \\log_7 25$.
5. Вычислите $\\log_{\\sqrt 2} 8$ и $\\log_{1/9} 3$.
6. Выразите $\\log_{12} 18$ через $m = \\log_2 3$.
7. Что больше: $\\log_5 6$ или $\\log_6 5$?
8. Решите уравнение $\\log_x 2 = 3$.

### Ответы

1. $-3$; $\\dfrac12$; $5$; $-1$. 2. $0{,}778$; $\\lg 5 = \\lg 10 - \\lg 2 = 0{,}699$; $0{,}176$. 3. $\\dfrac72$. 4. $\\log_5 25 = 2$. 5. $6$; $-\\dfrac12$. 6. $\\dfrac{1 + 2m}{2 + m}$. 7. $\\log_5 6 > 1 > \\log_6 5$. 8. $x^3 = 2$, $x = \\sqrt[3]{2}$.`,
      },
      [
        q(t("lg x means…", "lg x-ը նշանակում է…", "lg x означает…"), [t("log₁₀ x", "log₁₀ x", "log₁₀ x"), t("logₑ x", "logₑ x", "logₑ x"), t("log₂ x", "log₂ x", "log₂ x")], 0),
        q(t("ln e⁵ equals…", "ln e⁵-ը հավասար է…", "ln e⁵ равен…"), [t("e", "e", "e"), t("5", "5", "5"), t("5e", "5e", "5e")], 1),
        q(t("logₐ b equals…", "logₐ b-ը հավասար է…", "logₐ b равен…"), [t("lg a / lg b", "lg a / lg b", "lg a / lg b"), t("lg b / lg a", "lg b / lg a", "lg b / lg a"), t("lg b − lg a", "lg b − lg a", "lg b − lg a")], 1),
        q(t("logₐ b · log_b a equals…", "logₐ b · log_b a-ն հավասար է…", "logₐ b · log_b a равно…"), [t("1", "1", "1"), t("0", "0", "0"), t("ab", "ab", "ab")], 0),
        q(t("log₈ 32 equals…", "log₈ 32-ը հավասար է…", "log₈ 32 равен…"), [t("4", "4", "4"), t("3/5", "3/5", "3/5"), t("5/3", "5/3", "5/3")], 2),
        q(t("log₍₉₎ x equals…", "log₍₉₎ x-ը հավասար է…", "log₍₉₎ x равен…"), [t("2 log₃ x", "2 log₃ x", "2 log₃ x"), t("½ log₃ x", "½ log₃ x", "½ log₃ x"), t("(log₃ x)²", "(log₃ x)²", "(log₃ x)²")], 1),
      ],
    ),
    lesson(
      "logarithmic-function",
      ["The logarithmic function", "Լոգարիթմական ֆունկցիա", "Логарифмическая функция"],
      {
        en: ["Describe the domain, range, zero and monotonicity of y = logₐ x for a > 1 and 0 < a < 1", "Sketch y = logₐ x as the reflection of y = aˣ in the line y = x", "Differentiate ln x and logₐ x and write tangent lines"],
        hy: ["Նկարագրել y = logₐ x-ի որոշման տիրույթը, արժեքների բազմությունը, զրոն և մոնոտոնությունը a > 1 և 0 < a < 1 դեպքերում", "Կառուցել y = logₐ x-ի գրաֆիկը որպես y = aˣ-ի անդրադարձում y = x ուղղի նկատմամբ", "Ածանցել ln x-ը և logₐ x-ը և գրել շոշափողի հավասարումը"],
        ru: ["Описывать область определения, множество значений, нуль и монотонность y = logₐ x при a > 1 и 0 < a < 1", "Строить y = logₐ x как отражение y = aˣ относительно прямой y = x", "Дифференцировать ln x и logₐ x и записывать касательные"],
      },
      {
        en: `## Inverse of the exponential

The exponential function $y = a^x$ is monotonic, so it has an inverse. Solving $y = a^x$ for $x$ gives $x = \\log_a y$. Swapping the letters, the inverse is

$$y = \\log_a x, \\qquad a > 0,\\ a \\ne 1.$$

The graph of an inverse is the reflection of the original graph in the line $y = x$. Everything about $\\log_a x$ follows from this:

| | $y = a^x$ | $y = \\log_a x$ |
| --- | --- | --- |
| Domain | $\\mathbb R$ | $(0; +\\infty)$ |
| Range | $(0; +\\infty)$ | $\\mathbb R$ |
| Passes through | $(0; 1)$ | $(1; 0)$ |
| Asymptote | $y = 0$ | $x = 0$ |

- For $a > 1$ the function **increases**: $\\log_a x < 0$ on $(0; 1)$ and $\\log_a x > 0$ for $x > 1$.
- For $0 < a < 1$ the function **decreases**: $\\log_a x > 0$ on $(0; 1)$ and $\\log_a x < 0$ for $x > 1$.

The graph never crosses the $y$-axis: as $x \\to 0^+$, $\\log_a x \\to -\\infty$ for $a > 1$ (and $\\to +\\infty$ for $a < 1$).

## Comparing logarithms

Monotonicity lets us compare without computing.

**Example 1.** $\\log_3 7 < \\log_3 8$, since base $3 > 1$ and $7 < 8$.

**Example 2.** $\\log_{0.5} 7 > \\log_{0.5} 8$, since the base is less than $1$.

**Example 3.** Compare $\\log_2 5$ with $2$ and $3$: $2 = \\log_2 4 < \\log_2 5 < \\log_2 8 = 3$.

**Example 4.** The sign of $\\log_{0.3} 0.6$: the base is below $1$ and the argument $0.6 \\in (0; 1)$, so the value is positive.

## Derivative

$$(\\ln x)' = \\frac1x, \\qquad (\\log_a x)' = \\frac{1}{x \\ln a}.$$

The first follows from the inverse relationship with $e^x$; the second from $\\log_a x = \\dfrac{\\ln x}{\\ln a}$.

**Example 5.** $(\\ln(3x + 1))' = \\dfrac{3}{3x + 1}$ by the chain rule.

**Example 6.** Tangent to $y = \\ln x$ at $x_0 = 1$: $y(1) = 0$, $y'(1) = 1$, so $y = x - 1$.

**Example 7.** $(x \\ln x)' = \\ln x + 1$; it vanishes at $x = \\dfrac1e$, where $x\\ln x$ has its minimum $-\\dfrac1e$.

### Exercises

1. Find the domain of $y = \\log_2(x - 3)$ and of $y = \\lg(4 - x^2)$.
2. Sketch $y = \\log_2 x$ and $y = \\log_{1/2} x$ on the same axes. How are they related?
3. Compare $\\log_5 9$ and $\\log_5 11$; $\\log_{0.2} 9$ and $\\log_{0.2} 11$.
4. Between which integers does $\\log_3 50$ lie?
5. Determine the sign of $\\log_{0.4} 3$, $\\log_7 0.2$, $\\log_{0.6} 0.1$.
6. Differentiate $y = \\ln(x^2 + 1)$ and $y = \\log_2 x$.
7. Write the tangent to $y = \\ln x$ at $x_0 = e$.
8. Find the extremum of $f(x) = \\ln x - x$.

### Answers

1. $x > 3$; $-2 < x < 2$. 2. They are reflections of each other in the $x$-axis, since $\\log_{1/2} x = -\\log_2 x$. 3. $\\log_5 9 < \\log_5 11$; $\\log_{0.2} 9 > \\log_{0.2} 11$. 4. $27 < 50 < 81$: between $3$ and $4$. 5. negative; negative; positive. 6. $\\dfrac{2x}{x^2 + 1}$; $\\dfrac{1}{x \\ln 2}$. 7. $y = \\dfrac{x}{e}$. 8. $f' = \\dfrac1x - 1 = 0$ at $x = 1$: maximum $f(1) = -1$.`,
        hy: `## Ցուցչայինի հակադարձը

$y = a^x$ ցուցչային ֆունկցիան մոնոտոն է, ուստի ունի հակադարձ։ $y = a^x$-ից $x$-ը արտահայտելով՝ $x = \\log_a y$։ Տառերը փոխելով՝ հակադարձ ֆունկցիան է

$$y = \\log_a x, \\qquad a > 0,\\ a \\ne 1$$

Հակադարձ ֆունկցիայի գրաֆիկը սկզբնականի անդրադարձումն է $y = x$ ուղղի նկատմամբ։ $\\log_a x$-ի մասին ամեն ինչ հետևում է այստեղից․

| | $y = a^x$ | $y = \\log_a x$ |
| --- | --- | --- |
| Որոշման տիրույթ | $\\mathbb R$ | $(0; +\\infty)$ |
| Արժեքների բազմություն | $(0; +\\infty)$ | $\\mathbb R$ |
| Անցնում է | $(0; 1)$ | $(1; 0)$ |
| Ասիմպտոտ | $y = 0$ | $x = 0$ |

- $a > 1$ դեպքում ֆունկցիան **աճում է**․ $\\log_a x < 0$, երբ $x \\in (0; 1)$, և $\\log_a x > 0$, երբ $x > 1$։
- $0 < a < 1$ դեպքում ֆունկցիան **նվազում է**․ $\\log_a x > 0$, երբ $x \\in (0; 1)$, և $\\log_a x < 0$, երբ $x > 1$։

Գրաֆիկն երբեք չի հատում $y$ առանցքը․ երբ $x \\to 0^+$, $\\log_a x \\to -\\infty$ ($a > 1$ դեպքում), իսկ $a < 1$ դեպքում՝ $\\to +\\infty$։

## Լոգարիթմների համեմատում

Մոնոտոնությունը թույլ է տալիս համեմատել առանց հաշվելու։

**Օրինակ 1։** $\\log_3 7 < \\log_3 8$, քանի որ $3 > 1$ հիմքով և $7 < 8$։

**Օրինակ 2։** $\\log_{0{,}5} 7 > \\log_{0{,}5} 8$, քանի որ հիմքը $1$-ից փոքր է։

**Օրինակ 3։** Համեմատենք $\\log_2 5$-ը $2$-ի և $3$-ի հետ․ $2 = \\log_2 4 < \\log_2 5 < \\log_2 8 = 3$։

**Օրինակ 4։** $\\log_{0{,}3} 0{,}6$-ի նշանը․ հիմքը $1$-ից փոքր է, իսկ $0{,}6 \\in (0; 1)$, ուստի արժեքը դրական է։

## Ածանցյալ

$$(\\ln x)' = \\frac1x, \\qquad (\\log_a x)' = \\frac{1}{x \\ln a}$$

Առաջինը հետևում է $e^x$-ի հետ հակադարձ կապից, երկրորդը՝ $\\log_a x = \\dfrac{\\ln x}{\\ln a}$-ից։

**Օրինակ 5։** $(\\ln(3x + 1))' = \\dfrac{3}{3x + 1}$՝ բարդ ֆունկցիայի կանոնով։

**Օրինակ 6։** $y = \\ln x$-ի շոշափողը $x_0 = 1$ կետում․ $y(1) = 0$, $y'(1) = 1$, ուստի $y = x - 1$։

**Օրինակ 7։** $(x \\ln x)' = \\ln x + 1$․ զրո է դառնում $x = \\dfrac1e$ կետում, որտեղ $x\\ln x$-ն ունի $-\\dfrac1e$ մինիմում։

### Վարժություններ

1. Գտեք $y = \\log_2(x - 3)$ և $y = \\lg(4 - x^2)$ ֆունկցիաների որոշման տիրույթը։
2. Նույն կոորդինատային հարթության մեջ կառուցեք $y = \\log_2 x$ և $y = \\log_{1/2} x$ գրաֆիկները։ Ինչպե՞ս են դրանք կապված։
3. Համեմատեք $\\log_5 9$ և $\\log_5 11$, $\\log_{0{,}2} 9$ և $\\log_{0{,}2} 11$։
4. Ո՞ր ամբողջ թվերի միջև է $\\log_3 50$-ը։
5. Որոշեք $\\log_{0{,}4} 3$, $\\log_7 0{,}2$, $\\log_{0{,}6} 0{,}1$ արժեքների նշանը։
6. Ածանցեք $y = \\ln(x^2 + 1)$ և $y = \\log_2 x$ ֆունկցիաները։
7. Գրեք $y = \\ln x$-ի շոշափողը $x_0 = e$ կետում։
8. Գտեք $f(x) = \\ln x - x$-ի էքստրեմումը։

### Պատասխաններ

1. $x > 3$, $-2 < x < 2$։ 2. Դրանք միմյանց անդրադարձումն են $x$ առանցքի նկատմամբ, քանի որ $\\log_{1/2} x = -\\log_2 x$։ 3. $\\log_5 9 < \\log_5 11$, $\\log_{0{,}2} 9 > \\log_{0{,}2} 11$։ 4. $27 < 50 < 81$՝ $3$-ի և $4$-ի միջև։ 5. Բացասական, բացասական, դրական։ 6. $\\dfrac{2x}{x^2 + 1}$, $\\dfrac{1}{x \\ln 2}$։ 7. $y = \\dfrac{x}{e}$։ 8. $f' = \\dfrac1x - 1 = 0$, երբ $x = 1$՝ մաքսիմում $f(1) = -1$։`,
        ru: `## Обратная к показательной

Показательная функция $y = a^x$ монотонна, поэтому имеет обратную. Выразив $x$ из $y = a^x$, получим $x = \\log_a y$. Поменяв буквы, запишем обратную функцию:

$$y = \\log_a x, \\qquad a > 0,\\ a \\ne 1.$$

График обратной функции — отражение исходного графика относительно прямой $y = x$. Всё о $\\log_a x$ следует из этого:

| | $y = a^x$ | $y = \\log_a x$ |
| --- | --- | --- |
| Область определения | $\\mathbb R$ | $(0; +\\infty)$ |
| Множество значений | $(0; +\\infty)$ | $\\mathbb R$ |
| Проходит через | $(0; 1)$ | $(1; 0)$ |
| Асимптота | $y = 0$ | $x = 0$ |

- При $a > 1$ функция **возрастает**: $\\log_a x < 0$ на $(0; 1)$ и $\\log_a x > 0$ при $x > 1$.
- При $0 < a < 1$ функция **убывает**: $\\log_a x > 0$ на $(0; 1)$ и $\\log_a x < 0$ при $x > 1$.

График никогда не пересекает ось $y$: при $x \\to 0^+$ имеем $\\log_a x \\to -\\infty$ для $a > 1$ (и $\\to +\\infty$ для $a < 1$).

## Сравнение логарифмов

Монотонность позволяет сравнивать без вычислений.

**Пример 1.** $\\log_3 7 < \\log_3 8$, так как основание $3 > 1$ и $7 < 8$.

**Пример 2.** $\\log_{0{,}5} 7 > \\log_{0{,}5} 8$, так как основание меньше $1$.

**Пример 3.** Сравним $\\log_2 5$ с $2$ и $3$: $2 = \\log_2 4 < \\log_2 5 < \\log_2 8 = 3$.

**Пример 4.** Знак $\\log_{0{,}3} 0{,}6$: основание меньше $1$, а аргумент $0{,}6 \\in (0; 1)$, поэтому значение положительно.

## Производная

$$(\\ln x)' = \\frac1x, \\qquad (\\log_a x)' = \\frac{1}{x \\ln a}.$$

Первая формула следует из связи с обратной функцией $e^x$, вторая — из $\\log_a x = \\dfrac{\\ln x}{\\ln a}$.

**Пример 5.** $(\\ln(3x + 1))' = \\dfrac{3}{3x + 1}$ по правилу сложной функции.

**Пример 6.** Касательная к $y = \\ln x$ в точке $x_0 = 1$: $y(1) = 0$, $y'(1) = 1$, значит $y = x - 1$.

**Пример 7.** $(x \\ln x)' = \\ln x + 1$; обращается в нуль при $x = \\dfrac1e$, где $x\\ln x$ имеет минимум $-\\dfrac1e$.

### Упражнения

1. Найдите область определения $y = \\log_2(x - 3)$ и $y = \\lg(4 - x^2)$.
2. Постройте в одной системе координат $y = \\log_2 x$ и $y = \\log_{1/2} x$. Как они связаны?
3. Сравните $\\log_5 9$ и $\\log_5 11$; $\\log_{0{,}2} 9$ и $\\log_{0{,}2} 11$.
4. Между какими целыми числами лежит $\\log_3 50$?
5. Определите знак $\\log_{0{,}4} 3$, $\\log_7 0{,}2$, $\\log_{0{,}6} 0{,}1$.
6. Найдите производные $y = \\ln(x^2 + 1)$ и $y = \\log_2 x$.
7. Запишите касательную к $y = \\ln x$ в точке $x_0 = e$.
8. Найдите экстремум $f(x) = \\ln x - x$.

### Ответы

1. $x > 3$; $-2 < x < 2$. 2. Они симметричны относительно оси $x$, так как $\\log_{1/2} x = -\\log_2 x$. 3. $\\log_5 9 < \\log_5 11$; $\\log_{0{,}2} 9 > \\log_{0{,}2} 11$. 4. $27 < 50 < 81$: между $3$ и $4$. 5. отрицательный; отрицательный; положительный. 6. $\\dfrac{2x}{x^2 + 1}$; $\\dfrac{1}{x \\ln 2}$. 7. $y = \\dfrac{x}{e}$. 8. $f' = \\dfrac1x - 1 = 0$ при $x = 1$: максимум $f(1) = -1$.`,
      },
      [
        q(t("The domain of y = logₐ x is…", "y = logₐ x-ի որոշման տիրույթը…", "Область определения y = logₐ x —"), [t("all real numbers", "բոլոր իրական թվերը", "все действительные числа"), t("x > 0", "x > 0", "x > 0"), t("x ≥ 0", "x ≥ 0", "x ≥ 0")], 1),
        q(t("The graph of y = logₐ x always passes through…", "y = logₐ x-ի գրաֆիկը միշտ անցնում է…", "График y = logₐ x всегда проходит через…"), [t("(0; 1)", "(0; 1)", "(0; 1)"), t("(1; 0)", "(1; 0)", "(1; 0)"), t("(0; 0)", "(0; 0)", "(0; 0)")], 1),
        q(t("For 0 < a < 1 the function logₐ x…", "0 < a < 1 դեպքում logₐ x ֆունկցիան…", "При 0 < a < 1 функция logₐ x…"), [t("increases", "աճում է", "возрастает"), t("decreases", "նվազում է", "убывает"), t("is constant", "հաստատուն է", "постоянна")], 1),
        q(t("log₀.₅ 7 compared with log₀.₅ 8 is…", "log₀.₅ 7-ը log₀.₅ 8-ի համեմատ…", "log₀.₅ 7 по сравнению с log₀.₅ 8…"), [t("greater", "մեծ է", "больше"), t("smaller", "փոքր է", "меньше"), t("equal", "հավասար է", "равен")], 0),
        q(t("(ln x)′ equals…", "(ln x)′-ը հավասար է…", "(ln x)′ равна…"), [t("1/x", "1/x", "1/x"), t("ln x", "ln x", "ln x"), t("eˣ", "eˣ", "eˣ")], 0),
        q(t("The tangent to y = ln x at x = 1 is…", "y = ln x-ի շոշափողը x = 1 կետում…", "Касательная к y = ln x в точке x = 1 —"), [t("y = x", "y = x", "y = x"), t("y = x − 1", "y = x − 1", "y = x − 1"), t("y = x + 1", "y = x + 1", "y = x + 1")], 1),
      ],
    ),
    lesson(
      "logarithmic-equations",
      ["Logarithmic equations", "Լոգարիթմական հավասարումներ", "Логарифмические уравнения"],
      {
        en: ["Solve equations of the form logₐ f(x) = b and logₐ f(x) = logₐ g(x)", "Find the domain first or check every root in the original equation", "Use a substitution t = logₐ x and the properties of logarithms to reduce an equation to a basic one"],
        hy: ["Լուծել logₐ f(x) = b և logₐ f(x) = logₐ g(x) տեսքի հավասարումներ", "Նախ գտնել թույլատրելի արժեքների բազմությունը կամ ստուգել յուրաքանչյուր արմատ սկզբնական հավասարման մեջ", "t = logₐ x փոխարինմամբ և լոգարիթմների հատկություններով հավասարումը բերել պարզագույնի"],
        ru: ["Решать уравнения вида logₐ f(x) = b и logₐ f(x) = logₐ g(x)", "Сначала находить ОДЗ или проверять каждый корень в исходном уравнении", "Заменой t = logₐ x и свойствами логарифмов сводить уравнение к простейшему"],
      },
      {
        en: `## The simplest equation

$$\\log_a f(x) = b \\iff f(x) = a^b.$$

Since $a^b > 0$, the condition $f(x) > 0$ is satisfied automatically.

**Example 1.** $\\log_3(2x - 1) = 2 \\iff 2x - 1 = 9 \\iff x = 5$.

**Example 2.** $\\lg(x^2 - 3x) = 1 \\iff x^2 - 3x = 10 \\iff x = 5$ or $x = -2$. Both satisfy the original equation (check: $25 - 15 = 10$, $4 + 6 = 10$).

## Equal logarithms with the same base

$$\\log_a f(x) = \\log_a g(x) \\iff \\begin{cases} f(x) = g(x), \\\\ f(x) > 0. \\end{cases}$$

Here the domain condition is essential. Dropping the logarithms can create **extraneous roots**, so either write the domain or substitute every root back.

**Example 3.** $\\log_2(x^2 - 2) = \\log_2 x$. Then $x^2 - 2 = x$, so $x = 2$ or $x = -1$. For $x = -1$ the right side $\\log_2(-1)$ does not exist. Answer: $x = 2$.

**Example 4.** $\\log_5(x + 3) + \\log_5(x - 1) = 1$. Domain: $x > 1$. Collapsing: $\\log_5\\big((x + 3)(x - 1)\\big) = 1$, so $(x + 3)(x - 1) = 5$, $x^2 + 2x - 8 = 0$, $x = 2$ or $x = -4$. Only $x = 2$ is in the domain.

## Substitution

**Example 5.** $\\log_2^2 x - 3\\log_2 x + 2 = 0$. Let $t = \\log_2 x$: $t^2 - 3t + 2 = 0$, $t = 1$ or $t = 2$. Hence $x = 2$ or $x = 4$.

**Example 6.** $\\log_3 x + \\log_9 x = 3$. Since $\\log_9 x = \\dfrac12 \\log_3 x$, we get $\\dfrac32 \\log_3 x = 3$, $\\log_3 x = 2$, $x = 9$.

**Example 7.** $x^{\\lg x} = 100x$. Take $\\lg$ of both sides ($x > 0$): $\\lg x \\cdot \\lg x = 2 + \\lg x$. With $t = \\lg x$: $t^2 - t - 2 = 0$, $t = 2$ or $t = -1$, so $x = 100$ or $x = 0.1$.

> **Plan.** 1) Write the domain. 2) Bring the equation to one of the two basic forms, possibly after a substitution. 3) Solve. 4) Discard roots outside the domain.

### Exercises

1. Solve $\\log_2(3x - 5) = 4$.
2. Solve $\\log_{1/3}(x^2 + 8) = -2$.
3. Solve $\\log_7(x^2 - 5) = \\log_7(4x)$.
4. Solve $\\lg(x - 1) + \\lg(x + 2) = 1$.
5. Solve $\\log_2(x + 1) - \\log_2(x - 2) = 2$.
6. Solve $\\lg^2 x - \\lg x - 6 = 0$.
7. Solve $\\log_4 x + \\log_2 x = 6$.
8. Solve $\\log_x 125 = 3$ and $\\log_x(2x + 3) = 2$.

### Answers

1. $3x - 5 = 16$, $x = 7$. 2. $x^2 + 8 = 9$, $x = \\pm 1$. 3. $x^2 - 4x - 5 = 0$, $x = 5$ ($x = -1$ is extraneous). 4. $(x - 1)(x + 2) = 10$, $x = 3$ ($x = -4$ is extraneous). 5. $\\dfrac{x + 1}{x - 2} = 4$, $x = 3$. 6. $\\lg x = 3$ or $-2$: $x = 1000$ or $x = 0.01$. 7. $\\dfrac32 \\log_2 x = 6$, $x = 16$. 8. $x = 5$; $x^2 = 2x + 3$, $x = 3$ ($x = -1$ is not a valid base).`,
        hy: `## Պարզագույն հավասարում

$$\\log_a f(x) = b \\iff f(x) = a^b$$

Քանի որ $a^b > 0$, $f(x) > 0$ պայմանը բավարարվում է ինքնաբերաբար։

**Օրինակ 1։** $\\log_3(2x - 1) = 2 \\iff 2x - 1 = 9 \\iff x = 5$։

**Օրինակ 2։** $\\lg(x^2 - 3x) = 1 \\iff x^2 - 3x = 10 \\iff x = 5$ կամ $x = -2$։ Երկուսն էլ բավարարում են սկզբնական հավասարմանը (ստուգում՝ $25 - 15 = 10$, $4 + 6 = 10$)։

## Նույն հիմքով հավասար լոգարիթմներ

$$\\log_a f(x) = \\log_a g(x) \\iff \\begin{cases} f(x) = g(x), \\\\ f(x) > 0 \\end{cases}$$

Այստեղ թույլատրելի արժեքների պայմանն էական է։ Լոգարիթմները դեն նետելիս կարող են առաջանալ **կողմնակի արմատներ**, ուստի կամ գրեք թույլատրելի արժեքների բազմությունը, կամ յուրաքանչյուր արմատ տեղադրեք սկզբնական հավասարման մեջ։

**Օրինակ 3։** $\\log_2(x^2 - 2) = \\log_2 x$։ Այստեղից $x^2 - 2 = x$, այսինքն $x = 2$ կամ $x = -1$։ $x = -1$ դեպքում աջ կողմի $\\log_2(-1)$-ը գոյություն չունի։ Պատասխան՝ $x = 2$։

**Օրինակ 4։** $\\log_5(x + 3) + \\log_5(x - 1) = 1$։ Թույլատրելի արժեքներ՝ $x > 1$։ Հավաքելով՝ $\\log_5\\big((x + 3)(x - 1)\\big) = 1$, ուստի $(x + 3)(x - 1) = 5$, $x^2 + 2x - 8 = 0$, $x = 2$ կամ $x = -4$։ Միայն $x = 2$-ն է թույլատրելի։

## Փոխարինում

**Օրինակ 5։** $\\log_2^2 x - 3\\log_2 x + 2 = 0$։ Դիցուք $t = \\log_2 x$․ $t^2 - 3t + 2 = 0$, $t = 1$ կամ $t = 2$։ Հետևաբար $x = 2$ կամ $x = 4$։

**Օրինակ 6։** $\\log_3 x + \\log_9 x = 3$։ Քանի որ $\\log_9 x = \\dfrac12 \\log_3 x$, ստանում ենք $\\dfrac32 \\log_3 x = 3$, $\\log_3 x = 2$, $x = 9$։

**Օրինակ 7։** $x^{\\lg x} = 100x$։ Երկու կողմից վերցնենք $\\lg$ ($x > 0$)․ $\\lg x \\cdot \\lg x = 2 + \\lg x$։ $t = \\lg x$ փոխարինմամբ՝ $t^2 - t - 2 = 0$, $t = 2$ կամ $t = -1$, ուստի $x = 100$ կամ $x = 0{,}1$։

> **Պլան։** 1) Գրեք թույլատրելի արժեքների բազմությունը։ 2) Հավասարումը բերեք երկու հիմնական տեսքերից մեկին՝ անհրաժեշտության դեպքում փոխարինումից հետո։ 3) Լուծեք։ 4) Դեն նետեք թույլատրելի արժեքներից դուրս արմատները։

### Վարժություններ

1. Լուծեք $\\log_2(3x - 5) = 4$ հավասարումը։
2. Լուծեք $\\log_{1/3}(x^2 + 8) = -2$ հավասարումը։
3. Լուծեք $\\log_7(x^2 - 5) = \\log_7(4x)$ հավասարումը։
4. Լուծեք $\\lg(x - 1) + \\lg(x + 2) = 1$ հավասարումը։
5. Լուծեք $\\log_2(x + 1) - \\log_2(x - 2) = 2$ հավասարումը։
6. Լուծեք $\\lg^2 x - \\lg x - 6 = 0$ հավասարումը։
7. Լուծեք $\\log_4 x + \\log_2 x = 6$ հավասարումը։
8. Լուծեք $\\log_x 125 = 3$ և $\\log_x(2x + 3) = 2$ հավասարումները։

### Պատասխաններ

1. $3x - 5 = 16$, $x = 7$։ 2. $x^2 + 8 = 9$, $x = \\pm 1$։ 3. $x^2 - 4x - 5 = 0$, $x = 5$ ($x = -1$-ը կողմնակի է)։ 4. $(x - 1)(x + 2) = 10$, $x = 3$ ($x = -4$-ը կողմնակի է)։ 5. $\\dfrac{x + 1}{x - 2} = 4$, $x = 3$։ 6. $\\lg x = 3$ կամ $-2$՝ $x = 1000$ կամ $x = 0{,}01$։ 7. $\\dfrac32 \\log_2 x = 6$, $x = 16$։ 8. $x = 5$, $x^2 = 2x + 3$, $x = 3$ ($x = -1$-ը հիմք լինել չի կարող)։`,
        ru: `## Простейшее уравнение

$$\\log_a f(x) = b \\iff f(x) = a^b.$$

Так как $a^b > 0$, условие $f(x) > 0$ выполняется автоматически.

**Пример 1.** $\\log_3(2x - 1) = 2 \\iff 2x - 1 = 9 \\iff x = 5$.

**Пример 2.** $\\lg(x^2 - 3x) = 1 \\iff x^2 - 3x = 10 \\iff x = 5$ или $x = -2$. Оба корня подходят (проверка: $25 - 15 = 10$, $4 + 6 = 10$).

## Равные логарифмы с одним основанием

$$\\log_a f(x) = \\log_a g(x) \\iff \\begin{cases} f(x) = g(x), \\\\ f(x) > 0. \\end{cases}$$

Здесь условие ОДЗ существенно. Отбрасывание логарифмов может породить **посторонние корни**, поэтому либо выписывайте ОДЗ, либо подставляйте каждый корень в исходное уравнение.

**Пример 3.** $\\log_2(x^2 - 2) = \\log_2 x$. Тогда $x^2 - 2 = x$, то есть $x = 2$ или $x = -1$. При $x = -1$ правая часть $\\log_2(-1)$ не существует. Ответ: $x = 2$.

**Пример 4.** $\\log_5(x + 3) + \\log_5(x - 1) = 1$. ОДЗ: $x > 1$. Свернём: $\\log_5\\big((x + 3)(x - 1)\\big) = 1$, значит $(x + 3)(x - 1) = 5$, $x^2 + 2x - 8 = 0$, $x = 2$ или $x = -4$. В ОДЗ входит только $x = 2$.

## Замена переменной

**Пример 5.** $\\log_2^2 x - 3\\log_2 x + 2 = 0$. Пусть $t = \\log_2 x$: $t^2 - 3t + 2 = 0$, $t = 1$ или $t = 2$. Значит $x = 2$ или $x = 4$.

**Пример 6.** $\\log_3 x + \\log_9 x = 3$. Так как $\\log_9 x = \\dfrac12 \\log_3 x$, получаем $\\dfrac32 \\log_3 x = 3$, $\\log_3 x = 2$, $x = 9$.

**Пример 7.** $x^{\\lg x} = 100x$. Возьмём $\\lg$ от обеих частей ($x > 0$): $\\lg x \\cdot \\lg x = 2 + \\lg x$. При $t = \\lg x$: $t^2 - t - 2 = 0$, $t = 2$ или $t = -1$, значит $x = 100$ или $x = 0{,}1$.

> **План.** 1) Запишите ОДЗ. 2) Приведите уравнение к одному из двух основных видов, при необходимости после замены. 3) Решите. 4) Отбросьте корни вне ОДЗ.

### Упражнения

1. Решите $\\log_2(3x - 5) = 4$.
2. Решите $\\log_{1/3}(x^2 + 8) = -2$.
3. Решите $\\log_7(x^2 - 5) = \\log_7(4x)$.
4. Решите $\\lg(x - 1) + \\lg(x + 2) = 1$.
5. Решите $\\log_2(x + 1) - \\log_2(x - 2) = 2$.
6. Решите $\\lg^2 x - \\lg x - 6 = 0$.
7. Решите $\\log_4 x + \\log_2 x = 6$.
8. Решите $\\log_x 125 = 3$ и $\\log_x(2x + 3) = 2$.

### Ответы

1. $3x - 5 = 16$, $x = 7$. 2. $x^2 + 8 = 9$, $x = \\pm 1$. 3. $x^2 - 4x - 5 = 0$, $x = 5$ ($x = -1$ посторонний). 4. $(x - 1)(x + 2) = 10$, $x = 3$ ($x = -4$ посторонний). 5. $\\dfrac{x + 1}{x - 2} = 4$, $x = 3$. 6. $\\lg x = 3$ или $-2$: $x = 1000$ или $x = 0{,}01$. 7. $\\dfrac32 \\log_2 x = 6$, $x = 16$. 8. $x = 5$; $x^2 = 2x + 3$, $x = 3$ ($x = -1$ не может быть основанием).`,
      },
      [
        q(t("log₃(2x − 1) = 2 gives x = …", "log₃(2x − 1) = 2-ից x = …", "Из log₃(2x − 1) = 2 получаем x = …"), [t("5", "5", "5"), t("3.5", "3,5", "3,5"), t("1", "1", "1")], 0),
        q(t("logₐ f(x) = logₐ g(x) is equivalent to…", "logₐ f(x) = logₐ g(x)-ը համարժեք է…", "logₐ f(x) = logₐ g(x) равносильно…"), [t("f(x) = g(x) with no conditions", "f(x) = g(x)՝ առանց պայմանների", "f(x) = g(x) без условий"), t("f(x) = g(x) and f(x) > 0", "f(x) = g(x) և f(x) > 0", "f(x) = g(x) и f(x) > 0"), t("f(x) · g(x) = 1", "f(x) · g(x) = 1", "f(x) · g(x) = 1")], 1),
        q(t("The roots of log₂(x² − 2) = log₂ x are…", "log₂(x² − 2) = log₂ x հավասարման արմատները…", "Корни уравнения log₂(x² − 2) = log₂ x —"), [t("2 and −1", "2 և −1", "2 и −1"), t("only 2", "միայն 2", "только 2"), t("only −1", "միայն −1", "только −1")], 1),
        q(t("The substitution for lg² x − lg x − 6 = 0 is…", "lg² x − lg x − 6 = 0 հավասարման փոխարինումը…", "Замена для lg² x − lg x − 6 = 0 —"), [t("t = lg x", "t = lg x", "t = lg x"), t("t = x²", "t = x²", "t = x²"), t("t = 10ˣ", "t = 10ˣ", "t = 10ˣ")], 0),
        q(t("The domain of lg(x − 1) + lg(x + 2) = 1 is…", "lg(x − 1) + lg(x + 2) = 1-ի թույլատրելի արժեքները…", "ОДЗ уравнения lg(x − 1) + lg(x + 2) = 1 —"), [t("x > −2", "x > −2", "x > −2"), t("x > 1", "x > 1", "x > 1"), t("all x", "բոլոր x-երը", "все x")], 1),
        q(t("log₄ x + log₂ x = 6 gives x = …", "log₄ x + log₂ x = 6-ից x = …", "Из log₄ x + log₂ x = 6 получаем x = …"), [t("4", "4", "4"), t("16", "16", "16"), t("64", "64", "64")], 1),
      ],
    ),
    lesson(
      "logarithmic-inequalities",
      ["Logarithmic inequalities", "Լոգարիթմական անհավասարություններ", "Логарифмические неравенства"],
      {
        en: ["Solve logₐ f(x) > b and logₐ f(x) > logₐ g(x), keeping or reversing the sign according to the base", "Always intersect the solution with the domain f(x) > 0, g(x) > 0", "Reduce inequalities with a substitution t = logₐ x to a quadratic one"],
        hy: ["Լուծել logₐ f(x) > b և logₐ f(x) > logₐ g(x) անհավասարություններ՝ հիմքից ելնելով պահելով կամ փոխելով նշանը", "Լուծումը միշտ հատել f(x) > 0, g(x) > 0 թույլատրելի արժեքների հետ", "t = logₐ x փոխարինմամբ անհավասարությունը բերել քառակուսայինի"],
        ru: ["Решать logₐ f(x) > b и logₐ f(x) > logₐ g(x), сохраняя или меняя знак в зависимости от основания", "Всегда пересекать решение с ОДЗ f(x) > 0, g(x) > 0", "Заменой t = logₐ x сводить неравенство к квадратному"],
      },
      {
        en: `## The rule of the base

The logarithmic function increases for $a > 1$ and decreases for $0 < a < 1$. Therefore, for $f(x) > 0$ and $g(x) > 0$:

$$\\log_a f(x) > \\log_a g(x) \\iff \\begin{cases} f(x) > g(x), & a > 1, \\\\ f(x) < g(x), & 0 < a < 1. \\end{cases}$$

A number $b$ on the right is first written as a logarithm: $b = \\log_a a^b$.

The big difference from equations: an inequality cannot be checked by substituting single roots, so the **domain must be written explicitly** and intersected with the result.

## Worked examples

**Example 1.** $\\log_2(x - 1) > 3$. Domain: $x > 1$. Base $2 > 1$: $x - 1 > 8$, $x > 9$. Intersecting with the domain: $x > 9$.

**Example 2.** $\\log_{1/3}(2x + 1) \\ge -2$. Domain: $x > -\\dfrac12$. Base below $1$, so the sign reverses: $2x + 1 \\le 9$, $x \\le 4$. Answer: $-\\dfrac12 < x \\le 4$.

**Example 3.** $\\log_5(x^2 - 4) \\le \\log_5(3x)$. Domain: $x^2 - 4 > 0$ and $3x > 0$, i.e. $x > 2$. Then $x^2 - 4 \\le 3x$, $x^2 - 3x - 4 \\le 0$, $-1 \\le x \\le 4$. Answer: $2 < x \\le 4$.

**Example 4.** $\\lg(x + 2) + \\lg(x - 1) < 1$. Domain: $x > 1$. Collapse: $\\lg\\big((x + 2)(x - 1)\\big) < 1$, $(x + 2)(x - 1) < 10$, $x^2 + x - 12 < 0$, $-4 < x < 3$. Answer: $1 < x < 3$.

**Example 5.** $\\log_{0.5}(x - 3) < \\log_{0.5} 5$. Domain: $x > 3$. Reverse the sign: $x - 3 > 5$, $x > 8$.

**Example 6.** $\\log_2^2 x - \\log_2 x - 2 \\le 0$. Let $t = \\log_2 x$: $t^2 - t - 2 \\le 0$, $-1 \\le t \\le 2$, so $-1 \\le \\log_2 x \\le 2$, i.e. $\\dfrac12 \\le x \\le 4$.

**Example 7.** $\\log_3 x < 1$ is **not** $x < 3$. The domain gives $x > 0$, so the answer is $0 < x < 3$. Forgetting the domain is the most common error.

### Exercises

1. Solve $\\log_3(x + 2) < 2$.
2. Solve $\\log_{1/2}(x - 1) > -3$.
3. Solve $\\lg(3x - 2) \\ge \\lg(x + 4)$.
4. Solve $\\log_{0.3}(x^2 - 5) \\ge \\log_{0.3}(4x)$.
5. Solve $\\log_2(x - 3) + \\log_2(x - 2) < 1$.
6. Solve $\\log_5 x \\ge 0$ and $\\log_{1/5} x \\ge 0$.
7. Solve $\\lg^2 x - 3\\lg x + 2 > 0$.
8. Solve $\\log_x 9 > 2$ for $x > 1$.

### Answers

1. $-2 < x < 7$. 2. $1 < x < 9$. 3. $3x - 2 \\ge x + 4$ with $x > \\dfrac23$: $x \\ge 3$. 4. Domain $x > \\sqrt5$; sign reverses: $x^2 - 4x - 5 \\le 0$, $-1 \\le x \\le 5$. Answer: $\\sqrt5 < x \\le 5$. 5. Domain $x > 3$; $(x - 3)(x - 2) < 2$, $x^2 - 5x + 4 < 0$, $1 < x < 4$. Answer: $3 < x < 4$. 6. $x \\ge 1$; $0 < x \\le 1$. 7. $\\lg x < 1$ or $\\lg x > 2$: $0 < x < 10$ or $x > 100$. 8. $9 > x^2$: $1 < x < 3$.`,
        hy: `## Հիմքի կանոնը

Լոգարիթմական ֆունկցիան աճում է $a > 1$ դեպքում և նվազում՝ $0 < a < 1$ դեպքում։ Ուստի $f(x) > 0$ և $g(x) > 0$ պայմանով․

$$\\log_a f(x) > \\log_a g(x) \\iff \\begin{cases} f(x) > g(x), & a > 1, \\\\ f(x) < g(x), & 0 < a < 1 \\end{cases}$$

Աջ կողմի $b$ թիվը նախ գրվում է լոգարիթմի տեսքով․ $b = \\log_a a^b$։

Հավասարումներից մեծ տարբերությունը․ անհավասարությունը չի կարելի ստուգել առանձին արմատներ տեղադրելով, ուստի **թույլատրելի արժեքների բազմությունը պետք է բացահայտ գրել** և հատել արդյունքի հետ։

## Լուծված օրինակներ

**Օրինակ 1։** $\\log_2(x - 1) > 3$։ Թույլատրելի արժեքներ՝ $x > 1$։ Հիմքը $2 > 1$․ $x - 1 > 8$, $x > 9$։ Հատելով թույլատրելի արժեքների հետ՝ $x > 9$։

**Օրինակ 2։** $\\log_{1/3}(2x + 1) \\ge -2$։ Թույլատրելի արժեքներ՝ $x > -\\dfrac12$։ Հիմքը $1$-ից փոքր է, ուստի նշանը փոխվում է․ $2x + 1 \\le 9$, $x \\le 4$։ Պատասխան՝ $-\\dfrac12 < x \\le 4$։

**Օրինակ 3։** $\\log_5(x^2 - 4) \\le \\log_5(3x)$։ Թույլատրելի արժեքներ՝ $x^2 - 4 > 0$ և $3x > 0$, այսինքն $x > 2$։ Այնուհետև $x^2 - 4 \\le 3x$, $x^2 - 3x - 4 \\le 0$, $-1 \\le x \\le 4$։ Պատասխան՝ $2 < x \\le 4$։

**Օրինակ 4։** $\\lg(x + 2) + \\lg(x - 1) < 1$։ Թույլատրելի արժեքներ՝ $x > 1$։ Հավաքենք․ $\\lg\\big((x + 2)(x - 1)\\big) < 1$, $(x + 2)(x - 1) < 10$, $x^2 + x - 12 < 0$, $-4 < x < 3$։ Պատասխան՝ $1 < x < 3$։

**Օրինակ 5։** $\\log_{0{,}5}(x - 3) < \\log_{0{,}5} 5$։ Թույլատրելի արժեքներ՝ $x > 3$։ Նշանը փոխվում է․ $x - 3 > 5$, $x > 8$։

**Օրինակ 6։** $\\log_2^2 x - \\log_2 x - 2 \\le 0$։ Դիցուք $t = \\log_2 x$․ $t^2 - t - 2 \\le 0$, $-1 \\le t \\le 2$, ուստի $-1 \\le \\log_2 x \\le 2$, այսինքն $\\dfrac12 \\le x \\le 4$։

**Օրինակ 7։** $\\log_3 x < 1$-ը **չի** նշանակում $x < 3$։ Թույլատրելի արժեքներից $x > 0$, ուստի պատասխանը $0 < x < 3$ է։ Թույլատրելի արժեքները մոռանալն ամենատարածված սխալն է։

### Վարժություններ

1. Լուծեք $\\log_3(x + 2) < 2$ անհավասարությունը։
2. Լուծեք $\\log_{1/2}(x - 1) > -3$ անհավասարությունը։
3. Լուծեք $\\lg(3x - 2) \\ge \\lg(x + 4)$ անհավասարությունը։
4. Լուծեք $\\log_{0{,}3}(x^2 - 5) \\ge \\log_{0{,}3}(4x)$ անհավասարությունը։
5. Լուծեք $\\log_2(x - 3) + \\log_2(x - 2) < 1$ անհավասարությունը։
6. Լուծեք $\\log_5 x \\ge 0$ և $\\log_{1/5} x \\ge 0$ անհավասարությունները։
7. Լուծեք $\\lg^2 x - 3\\lg x + 2 > 0$ անհավասարությունը։
8. Լուծեք $\\log_x 9 > 2$ անհավասարությունը $x > 1$ դեպքում։

### Պատասխաններ

1. $-2 < x < 7$։ 2. $1 < x < 9$։ 3. $3x - 2 \\ge x + 4$, $x > \\dfrac23$ պայմանով՝ $x \\ge 3$։ 4. Թույլատրելի արժեքներ՝ $x > \\sqrt5$, նշանը փոխվում է․ $x^2 - 4x - 5 \\le 0$, $-1 \\le x \\le 5$։ Պատասխան՝ $\\sqrt5 < x \\le 5$։ 5. Թույլատրելի արժեքներ՝ $x > 3$, $(x - 3)(x - 2) < 2$, $x^2 - 5x + 4 < 0$, $1 < x < 4$։ Պատասխան՝ $3 < x < 4$։ 6. $x \\ge 1$, $0 < x \\le 1$։ 7. $\\lg x < 1$ կամ $\\lg x > 2$՝ $0 < x < 10$ կամ $x > 100$։ 8. $9 > x^2$՝ $1 < x < 3$։`,
        ru: `## Правило основания

Логарифмическая функция возрастает при $a > 1$ и убывает при $0 < a < 1$. Поэтому при $f(x) > 0$ и $g(x) > 0$:

$$\\log_a f(x) > \\log_a g(x) \\iff \\begin{cases} f(x) > g(x), & a > 1, \\\\ f(x) < g(x), & 0 < a < 1. \\end{cases}$$

Число $b$ в правой части сначала записывают как логарифм: $b = \\log_a a^b$.

Главное отличие от уравнений: неравенство нельзя проверить подстановкой отдельных корней, поэтому **ОДЗ нужно выписать явно** и пересечь с результатом.

## Разобранные примеры

**Пример 1.** $\\log_2(x - 1) > 3$. ОДЗ: $x > 1$. Основание $2 > 1$: $x - 1 > 8$, $x > 9$. Пересекая с ОДЗ: $x > 9$.

**Пример 2.** $\\log_{1/3}(2x + 1) \\ge -2$. ОДЗ: $x > -\\dfrac12$. Основание меньше $1$, знак меняется: $2x + 1 \\le 9$, $x \\le 4$. Ответ: $-\\dfrac12 < x \\le 4$.

**Пример 3.** $\\log_5(x^2 - 4) \\le \\log_5(3x)$. ОДЗ: $x^2 - 4 > 0$ и $3x > 0$, то есть $x > 2$. Далее $x^2 - 4 \\le 3x$, $x^2 - 3x - 4 \\le 0$, $-1 \\le x \\le 4$. Ответ: $2 < x \\le 4$.

**Пример 4.** $\\lg(x + 2) + \\lg(x - 1) < 1$. ОДЗ: $x > 1$. Свернём: $\\lg\\big((x + 2)(x - 1)\\big) < 1$, $(x + 2)(x - 1) < 10$, $x^2 + x - 12 < 0$, $-4 < x < 3$. Ответ: $1 < x < 3$.

**Пример 5.** $\\log_{0{,}5}(x - 3) < \\log_{0{,}5} 5$. ОДЗ: $x > 3$. Меняем знак: $x - 3 > 5$, $x > 8$.

**Пример 6.** $\\log_2^2 x - \\log_2 x - 2 \\le 0$. Пусть $t = \\log_2 x$: $t^2 - t - 2 \\le 0$, $-1 \\le t \\le 2$, значит $-1 \\le \\log_2 x \\le 2$, то есть $\\dfrac12 \\le x \\le 4$.

**Пример 7.** $\\log_3 x < 1$ — это **не** $x < 3$. ОДЗ даёт $x > 0$, поэтому ответ $0 < x < 3$. Забытая ОДЗ — самая частая ошибка.

### Упражнения

1. Решите $\\log_3(x + 2) < 2$.
2. Решите $\\log_{1/2}(x - 1) > -3$.
3. Решите $\\lg(3x - 2) \\ge \\lg(x + 4)$.
4. Решите $\\log_{0{,}3}(x^2 - 5) \\ge \\log_{0{,}3}(4x)$.
5. Решите $\\log_2(x - 3) + \\log_2(x - 2) < 1$.
6. Решите $\\log_5 x \\ge 0$ и $\\log_{1/5} x \\ge 0$.
7. Решите $\\lg^2 x - 3\\lg x + 2 > 0$.
8. Решите $\\log_x 9 > 2$ при $x > 1$.

### Ответы

1. $-2 < x < 7$. 2. $1 < x < 9$. 3. $3x - 2 \\ge x + 4$ при $x > \\dfrac23$: $x \\ge 3$. 4. ОДЗ $x > \\sqrt5$; знак меняется: $x^2 - 4x - 5 \\le 0$, $-1 \\le x \\le 5$. Ответ: $\\sqrt5 < x \\le 5$. 5. ОДЗ $x > 3$; $(x - 3)(x - 2) < 2$, $x^2 - 5x + 4 < 0$, $1 < x < 4$. Ответ: $3 < x < 4$. 6. $x \\ge 1$; $0 < x \\le 1$. 7. $\\lg x < 1$ или $\\lg x > 2$: $0 < x < 10$ или $x > 100$. 8. $9 > x^2$: $1 < x < 3$.`,
      },
      [
        q(t("For a > 1, logₐ f(x) > logₐ g(x) means…", "a > 1 դեպքում logₐ f(x) > logₐ g(x) նշանակում է…", "При a > 1 неравенство logₐ f(x) > logₐ g(x) означает…"), [t("f(x) > g(x) > 0", "f(x) > g(x) > 0", "f(x) > g(x) > 0"), t("0 < f(x) < g(x)", "0 < f(x) < g(x)", "0 < f(x) < g(x)"), t("f(x) > g(x) for any sign", "f(x) > g(x) ցանկացած նշանի դեպքում", "f(x) > g(x) при любом знаке")], 0),
        q(t("For 0 < a < 1 the inequality sign…", "0 < a < 1 դեպքում անհավասարության նշանը…", "При 0 < a < 1 знак неравенства…"), [t("is kept", "պահպանվում է", "сохраняется"), t("is reversed", "փոխվում է", "меняется"), t("disappears", "անհետանում է", "исчезает")], 1),
        q(t("The solution of log₃ x < 1 is…", "log₃ x < 1-ի լուծումը…", "Решение log₃ x < 1 —"), [t("x < 3", "x < 3", "x < 3"), t("0 < x < 3", "0 < x < 3", "0 < x < 3"), t("x > 3", "x > 3", "x > 3")], 1),
        q(t("The solution of log₂(x − 1) > 3 is…", "log₂(x − 1) > 3-ի լուծումը…", "Решение log₂(x − 1) > 3 —"), [t("x > 9", "x > 9", "x > 9"), t("x > 4", "x > 4", "x > 4"), t("1 < x < 9", "1 < x < 9", "1 < x < 9")], 0),
        q(t("The solution of log₀.₅(x − 3) < log₀.₅ 5 is…", "log₀.₅(x − 3) < log₀.₅ 5-ի լուծումը…", "Решение log₀.₅(x − 3) < log₀.₅ 5 —"), [t("3 < x < 8", "3 < x < 8", "3 < x < 8"), t("x > 8", "x > 8", "x > 8"), t("x < 8", "x < 8", "x < 8")], 1),
        q(t("The solution of log₅ x ≥ 0 is…", "log₅ x ≥ 0-ի լուծումը…", "Решение log₅ x ≥ 0 —"), [t("x ≥ 0", "x ≥ 0", "x ≥ 0"), t("x ≥ 1", "x ≥ 1", "x ≥ 1"), t("x ≥ 5", "x ≥ 5", "x ≥ 5")], 1),
      ],
    ),
  ],
};
