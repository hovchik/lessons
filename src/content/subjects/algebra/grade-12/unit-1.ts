import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Complex numbers", "Կոմպլեքս թվեր", "Комплексные числа"),
  summary: t("Imaginary unit, algebraic and trigonometric form, operations, roots.", "Կեղծ միավոր, հանրահաշվական և եռանկյունաչափական տեսք, գործողություններ, արմատներ։", "Мнимая единица, алгебраическая и тригонометрическая форма, действия, корни."),
  lessons: [
    lesson(
      "imaginary-unit",
      ["The imaginary unit and complex numbers", "Կեղծ միավոր և կոմպլեքս թվեր", "Мнимая единица и комплексные числа"],
      {
        en: ["Explain why the number system is extended by i with i² = −1", "Write a complex number as z = a + bi and name its real and imaginary parts", "Compute powers of i and decide when two complex numbers are equal"],
        hy: ["Բացատրել, թե ինչու է թվային համակարգն ընդլայնվում i-ով, որտեղ i² = −1", "Գրել կոմպլեքս թիվը z = a + bi տեսքով և անվանել նրա իրական և կեղծ մասերը", "Հաշվել i-ի աստիճանները և որոշել, թե երբ են երկու կոմպլեքս թվեր հավասար"],
        ru: ["Объяснять, зачем числовая система расширяется числом i с i² = −1", "Записывать комплексное число в виде z = a + bi и называть его действительную и мнимую части", "Вычислять степени i и определять, когда два комплексных числа равны"],
      },
      {
        en: `## Why extend the numbers again

Each extension of the number system was made so that more equations have solutions. Negative numbers solve $x + 5 = 2$, fractions solve $3x = 1$, irrationals solve $x^2 = 2$. But $x^2 = -1$ has no real solution, because the square of a real number is never negative.

Mathematicians therefore introduce a new number, the **imaginary unit** $i$, with the single defining property

$$i^2 = -1.$$

Then $x^2 = -1$ has two solutions, $x = i$ and $x = -i$, and $x^2 = -9$ has $x = \\pm 3i$, since $(3i)^2 = 9i^2 = -9$.

## Complex numbers

> A **complex number** is an expression $z = a + bi$, where $a$ and $b$ are real. $a = \\operatorname{Re} z$ is the **real part** and $b = \\operatorname{Im} z$ is the **imaginary part**.

- If $b = 0$, $z = a$ is an ordinary real number: the reals are a subset of the complex numbers $\\mathbb C$.
- If $a = 0$ and $b \\ne 0$, $z = bi$ is called **purely imaginary**.
- Two complex numbers are **equal** exactly when both their real parts and their imaginary parts coincide.

**Example 1.** For $z = 3 - 5i$: $\\operatorname{Re} z = 3$, $\\operatorname{Im} z = -5$ (not $-5i$).

**Example 2.** Find real $x$, $y$ with $(x + 2) + (y - 1)i = 5 - 3i$. Equating parts: $x + 2 = 5$, $y - 1 = -3$, so $x = 3$, $y = -2$.

## Powers of $i$

$$i^1 = i, \\quad i^2 = -1, \\quad i^3 = i^2 \\cdot i = -i, \\quad i^4 = (i^2)^2 = 1,$$

and then the cycle repeats: $i^5 = i$, $i^6 = -1$, and so on. To compute $i^n$, divide $n$ by $4$ and keep the remainder.

**Example 3.** $i^{23}$: $23 = 4 \\cdot 5 + 3$, so $i^{23} = i^3 = -i$. $i^{100} = (i^4)^{25} = 1$.

**Example 4.** $i + i^2 + i^3 + i^4 = i - 1 - i + 1 = 0$, so the sum of any four consecutive powers of $i$ is $0$.

## The conjugate

The number $\\bar z = a - bi$ is the **conjugate** of $z = a + bi$. It has the same real part and the opposite imaginary part. For example $\\overline{2 + 7i} = 2 - 7i$, and $\\bar{\\bar z} = z$. A number equals its conjugate exactly when it is real.

**Example 5.** Solve $x^2 + 16 = 0$ in $\\mathbb C$: $x^2 = -16$, $x = \\pm 4i$. The two roots are conjugates.

### Exercises

1. Write the real and imaginary parts of $z = -2 + 7i$, $z = 4$, $z = -i$, $z = \\sqrt3 i - 1$.
2. Solve in $\\mathbb C$: $x^2 = -25$, $x^2 + 2 = 0$, $4x^2 + 1 = 0$.
3. Compute $i^{10}$, $i^{33}$, $i^{2026}$, $i^{-1}$.
4. Compute $i^7 + i^8 + i^9 + i^{10}$ and $i^{1} + i^{2} + \\ldots + i^{10}$.
5. Find real $x$, $y$: $(2x - 1) + (3y + 2)i = 7 - 4i$.
6. Find real $x$, $y$: $x + yi = (y - 1) + (2x + 3)i$.
7. Write the conjugates of $5 - 2i$, $-3i$, $\\dfrac12 + i$, $7$.
8. Which numbers are purely imaginary: $3i$, $0$, $2 + 0i$, $-i\\sqrt5$?

### Answers

1. $(-2; 7)$; $(4; 0)$; $(0; -1)$; $(-1; \\sqrt3)$. 2. $\\pm 5i$; $\\pm i\\sqrt2$; $\\pm \\dfrac i2$. 3. $-1$; $i$; $2026 = 4 \\cdot 506 + 2$: $-1$; $i^{-1} = \\dfrac1i = \\dfrac{i}{i^2} = -i$. 4. $0$; the first eight sum to $0$, leaving $i^9 + i^{10} = i - 1$. 5. $x = 4$, $y = -2$. 6. $x = y - 1$, $y = 2x + 3$: $x = -2$, $y = -1$. 7. $5 + 2i$; $3i$; $\\dfrac12 - i$; $7$. 8. $3i$ and $-i\\sqrt5$ (zero is usually counted as real).`,
        hy: `## Ինչու ևս մեկ անգամ ընդլայնել թվերը

Թվային համակարգի յուրաքանչյուր ընդլայնում արվել է, որպեսզի ավելի շատ հավասարումներ ունենան լուծում։ Բացասական թվերը լուծում են $x + 5 = 2$-ը, կոտորակները՝ $3x = 1$-ը, իռացիոնալ թվերը՝ $x^2 = 2$-ը։ Բայց $x^2 = -1$-ն իրական լուծում չունի, քանի որ իրական թվի քառակուսին երբեք բացասական չէ։

Ուստի մաթեմատիկոսները ներմուծում են նոր թիվ՝ **կեղծ միավոր** $i$-ն, որի միակ սահմանող հատկությունն է

$$i^2 = -1$$

Այդ դեպքում $x^2 = -1$-ն ունի երկու լուծում՝ $x = i$ և $x = -i$, իսկ $x^2 = -9$-ը՝ $x = \\pm 3i$, քանի որ $(3i)^2 = 9i^2 = -9$։

## Կոմպլեքս թվեր

> **Կոմպլեքս թիվը** $z = a + bi$ տեսքի արտահայտություն է, որտեղ $a$-ն և $b$-ն իրական են։ $a = \\operatorname{Re} z$-ն **իրական մասն** է, $b = \\operatorname{Im} z$-ն՝ **կեղծ մասը**։

- Եթե $b = 0$, ապա $z = a$-ն սովորական իրական թիվ է․ իրական թվերը $\\mathbb C$ կոմպլեքս թվերի ենթաբազմություն են։
- Եթե $a = 0$ և $b \\ne 0$, ապա $z = bi$-ն կոչվում է **զուտ կեղծ**։
- Երկու կոմպլեքս թվեր **հավասար** են հենց այն դեպքում, երբ համընկնում են և՛ իրական, և՛ կեղծ մասերը։

**Օրինակ 1։** $z = 3 - 5i$ դեպքում՝ $\\operatorname{Re} z = 3$, $\\operatorname{Im} z = -5$ (ոչ թե $-5i$)։

**Օրինակ 2։** Գտնենք իրական $x$, $y$, որ $(x + 2) + (y - 1)i = 5 - 3i$։ Հավասարեցնելով մասերը՝ $x + 2 = 5$, $y - 1 = -3$, ուստի $x = 3$, $y = -2$։

## $i$-ի աստիճանները

$$i^1 = i, \\quad i^2 = -1, \\quad i^3 = i^2 \\cdot i = -i, \\quad i^4 = (i^2)^2 = 1,$$

և ապա ցիկլը կրկնվում է․ $i^5 = i$, $i^6 = -1$ և այլն։ $i^n$-ը հաշվելու համար $n$-ը բաժանեք $4$-ի և պահեք մնացորդը։

**Օրինակ 3։** $i^{23}$․ $23 = 4 \\cdot 5 + 3$, ուստի $i^{23} = i^3 = -i$։ $i^{100} = (i^4)^{25} = 1$։

**Օրինակ 4։** $i + i^2 + i^3 + i^4 = i - 1 - i + 1 = 0$, ուստի $i$-ի ցանկացած չորս հաջորդական աստիճանների գումարը $0$ է։

## Համալուծ թիվ

$\\bar z = a - bi$ թիվը $z = a + bi$-ի **համալուծն** է։ Այն ունի նույն իրական մասը և հակադիր կեղծ մասը։ Օրինակ՝ $\\overline{2 + 7i} = 2 - 7i$, և $\\bar{\\bar z} = z$։ Թիվը հավասար է իր համալուծին հենց այն դեպքում, երբ իրական է։

**Օրինակ 5։** Լուծենք $x^2 + 16 = 0$-ն $\\mathbb C$-ում․ $x^2 = -16$, $x = \\pm 4i$։ Երկու արմատները համալուծ են։

### Վարժություններ

1. Գրեք իրական և կեղծ մասերը․ $z = -2 + 7i$, $z = 4$, $z = -i$, $z = \\sqrt3 i - 1$։
2. Լուծեք $\\mathbb C$-ում․ $x^2 = -25$, $x^2 + 2 = 0$, $4x^2 + 1 = 0$։
3. Հաշվեք $i^{10}$, $i^{33}$, $i^{2026}$, $i^{-1}$։
4. Հաշվեք $i^7 + i^8 + i^9 + i^{10}$ և $i^{1} + i^{2} + \\ldots + i^{10}$։
5. Գտեք իրական $x$, $y$․ $(2x - 1) + (3y + 2)i = 7 - 4i$։
6. Գտեք իրական $x$, $y$․ $x + yi = (y - 1) + (2x + 3)i$։
7. Գրեք համալուծները․ $5 - 2i$, $-3i$, $\\dfrac12 + i$, $7$։
8. Ո՞ր թվերն են զուտ կեղծ․ $3i$, $0$, $2 + 0i$, $-i\\sqrt5$։

### Պատասխաններ

1. $(-2; 7)$, $(4; 0)$, $(0; -1)$, $(-1; \\sqrt3)$։ 2. $\\pm 5i$, $\\pm i\\sqrt2$, $\\pm \\dfrac i2$։ 3. $-1$, $i$, $2026 = 4 \\cdot 506 + 2$՝ $-1$, $i^{-1} = \\dfrac1i = \\dfrac{i}{i^2} = -i$։ 4. $0$, առաջին ութի գումարը $0$ է, մնում է $i^9 + i^{10} = i - 1$։ 5. $x = 4$, $y = -2$։ 6. $x = y - 1$, $y = 2x + 3$՝ $x = -2$, $y = -1$։ 7. $5 + 2i$, $3i$, $\\dfrac12 - i$, $7$։ 8. $3i$-ն և $-i\\sqrt5$-ը (զրոն սովորաբար համարվում է իրական)։`,
        ru: `## Зачем снова расширять числа

Каждое расширение числовой системы делалось для того, чтобы больше уравнений имели решения. Отрицательные числа решают $x + 5 = 2$, дроби — $3x = 1$, иррациональные — $x^2 = 2$. Но $x^2 = -1$ не имеет действительных решений, так как квадрат действительного числа не бывает отрицательным.

Поэтому математики вводят новое число — **мнимую единицу** $i$ с единственным определяющим свойством

$$i^2 = -1.$$

Тогда $x^2 = -1$ имеет два решения, $x = i$ и $x = -i$, а $x^2 = -9$ — решения $x = \\pm 3i$, так как $(3i)^2 = 9i^2 = -9$.

## Комплексные числа

> **Комплексным числом** называется выражение $z = a + bi$, где $a$ и $b$ действительны. $a = \\operatorname{Re} z$ — **действительная часть**, $b = \\operatorname{Im} z$ — **мнимая часть**.

- Если $b = 0$, то $z = a$ — обычное действительное число: действительные числа являются подмножеством комплексных чисел $\\mathbb C$.
- Если $a = 0$ и $b \\ne 0$, то $z = bi$ называется **чисто мнимым**.
- Два комплексных числа **равны** ровно тогда, когда совпадают и их действительные, и их мнимые части.

**Пример 1.** Для $z = 3 - 5i$: $\\operatorname{Re} z = 3$, $\\operatorname{Im} z = -5$ (а не $-5i$).

**Пример 2.** Найдём действительные $x$, $y$, при которых $(x + 2) + (y - 1)i = 5 - 3i$. Приравнивая части: $x + 2 = 5$, $y - 1 = -3$, значит $x = 3$, $y = -2$.

## Степени $i$

$$i^1 = i, \\quad i^2 = -1, \\quad i^3 = i^2 \\cdot i = -i, \\quad i^4 = (i^2)^2 = 1,$$

и дальше цикл повторяется: $i^5 = i$, $i^6 = -1$ и так далее. Чтобы вычислить $i^n$, разделите $n$ на $4$ и возьмите остаток.

**Пример 3.** $i^{23}$: $23 = 4 \\cdot 5 + 3$, поэтому $i^{23} = i^3 = -i$. $i^{100} = (i^4)^{25} = 1$.

**Пример 4.** $i + i^2 + i^3 + i^4 = i - 1 - i + 1 = 0$, поэтому сумма любых четырёх подряд идущих степеней $i$ равна $0$.

## Сопряжённое число

Число $\\bar z = a - bi$ называется **сопряжённым** к $z = a + bi$. У него та же действительная часть и противоположная мнимая. Например, $\\overline{2 + 7i} = 2 - 7i$, и $\\bar{\\bar z} = z$. Число равно своему сопряжённому ровно тогда, когда оно действительное.

**Пример 5.** Решим $x^2 + 16 = 0$ в $\\mathbb C$: $x^2 = -16$, $x = \\pm 4i$. Два корня сопряжены.

### Упражнения

1. Запишите действительную и мнимую части: $z = -2 + 7i$, $z = 4$, $z = -i$, $z = \\sqrt3 i - 1$.
2. Решите в $\\mathbb C$: $x^2 = -25$, $x^2 + 2 = 0$, $4x^2 + 1 = 0$.
3. Вычислите $i^{10}$, $i^{33}$, $i^{2026}$, $i^{-1}$.
4. Вычислите $i^7 + i^8 + i^9 + i^{10}$ и $i^{1} + i^{2} + \\ldots + i^{10}$.
5. Найдите действительные $x$, $y$: $(2x - 1) + (3y + 2)i = 7 - 4i$.
6. Найдите действительные $x$, $y$: $x + yi = (y - 1) + (2x + 3)i$.
7. Запишите сопряжённые к $5 - 2i$, $-3i$, $\\dfrac12 + i$, $7$.
8. Какие числа чисто мнимые: $3i$, $0$, $2 + 0i$, $-i\\sqrt5$?

### Ответы

1. $(-2; 7)$; $(4; 0)$; $(0; -1)$; $(-1; \\sqrt3)$. 2. $\\pm 5i$; $\\pm i\\sqrt2$; $\\pm \\dfrac i2$. 3. $-1$; $i$; $2026 = 4 \\cdot 506 + 2$: $-1$; $i^{-1} = \\dfrac1i = \\dfrac{i}{i^2} = -i$. 4. $0$; первые восемь дают $0$, остаётся $i^9 + i^{10} = i - 1$. 5. $x = 4$, $y = -2$. 6. $x = y - 1$, $y = 2x + 3$: $x = -2$, $y = -1$. 7. $5 + 2i$; $3i$; $\\dfrac12 - i$; $7$. 8. $3i$ и $-i\\sqrt5$ (нуль обычно считают действительным).`,
      },
      [
        q(t("i² equals…", "i²-ը հավասար է…", "i² равно…"), [t("1", "1", "1"), t("−1", "−1", "−1"), t("i", "i", "i")], 1),
        q(t("The imaginary part of 3 − 5i is…", "3 − 5i-ի կեղծ մասը…", "Мнимая часть числа 3 − 5i —"), [t("−5i", "−5i", "−5i"), t("−5", "−5", "−5"), t("3", "3", "3")], 1),
        q(t("i²³ equals…", "i²³-ը հավասար է…", "i²³ равно…"), [t("−i", "−i", "−i"), t("i", "i", "i"), t("−1", "−1", "−1")], 0),
        q(t("The solutions of x² = −9 are…", "x² = −9-ի լուծումները…", "Решения x² = −9 —"), [t("±3", "±3", "±3"), t("±3i", "±3i", "±3i"), t("none", "չկան", "нет")], 1),
        q(t("a + bi = c + di means…", "a + bi = c + di նշանակում է…", "a + bi = c + di означает…"), [t("a = c and b = d", "a = c և b = d", "a = c и b = d"), t("a + b = c + d", "a + b = c + d", "a + b = c + d"), t("a = d and b = c", "a = d և b = c", "a = d и b = c")], 0),
        q(t("The conjugate of 2 + 7i is…", "2 + 7i-ի համալուծը…", "Сопряжённое к 2 + 7i —"), [t("−2 − 7i", "−2 − 7i", "−2 − 7i"), t("−2 + 7i", "−2 + 7i", "−2 + 7i"), t("2 − 7i", "2 − 7i", "2 − 7i")], 2),
      ],
    ),
    lesson(
      "complex-operations",
      ["Operations in algebraic form", "Գործողություններ հանրահաշվական տեսքով", "Действия в алгебраической форме"],
      {
        en: ["Add, subtract and multiply complex numbers by treating i as a letter with i² = −1", "Divide complex numbers by multiplying numerator and denominator by the conjugate", "Use z·z̄ = a² + b² and solve simple equations in z"],
        hy: ["Գումարել, հանել և բազմապատկել կոմպլեքս թվեր՝ i-ն դիտելով որպես տառ, որի համար i² = −1", "Բաժանել կոմպլեքս թվեր՝ համարիչն ու հայտարարը բազմապատկելով հայտարարի համալուծով", "Օգտվել z·z̄ = a² + b² նույնությունից և լուծել պարզ հավասարումներ z-ի նկատմամբ"],
        ru: ["Складывать, вычитать и умножать комплексные числа, обращаясь с i как с буквой, для которой i² = −1", "Делить комплексные числа, умножая числитель и знаменатель на сопряжённое", "Использовать z·z̄ = a² + b² и решать простые уравнения относительно z"],
      },
      {
        en: `## Addition and subtraction

Complex numbers are added like binomials: real parts with real parts, imaginary with imaginary.

$$(a + bi) \\pm (c + di) = (a \\pm c) + (b \\pm d)i.$$

**Example 1.** $(3 + 2i) + (-1 + 5i) = 2 + 7i$; $(3 + 2i) - (-1 + 5i) = 4 - 3i$.

## Multiplication

Multiply as ordinary brackets and replace $i^2$ by $-1$:

$$(a + bi)(c + di) = ac + adi + bci + bdi^2 = (ac - bd) + (ad + bc)i.$$

There is no need to memorise the formula: just expand.

**Example 2.** $(2 + 3i)(4 - i) = 8 - 2i + 12i - 3i^2 = 8 + 10i + 3 = 11 + 10i$.

**Example 3.** $(1 + i)^2 = 1 + 2i + i^2 = 2i$. Hence $(1 + i)^{10} = (2i)^5 = 32 i^5 = 32i$.

**Example 4.** $(a + bi)(a - bi) = a^2 - (bi)^2 = a^2 + b^2$. The product of a number and its conjugate is a **non-negative real number**:

$$z \\cdot \\bar z = a^2 + b^2.$$

## Division

To divide, make the denominator real by multiplying numerator and denominator by the conjugate of the denominator.

**Example 5.**
$$\\frac{3 + i}{1 - 2i} = \\frac{(3 + i)(1 + 2i)}{(1 - 2i)(1 + 2i)} = \\frac{3 + 6i + i + 2i^2}{1 + 4} = \\frac{1 + 7i}{5} = \\frac15 + \\frac75 i.$$

**Example 6.** $\\dfrac1i = \\dfrac{-i}{i \\cdot (-i)} = \\dfrac{-i}{1} = -i$. More generally $\\dfrac1z = \\dfrac{\\bar z}{a^2 + b^2}$.

**Example 7.** Solve $(2 - i)z = 5 + 5i$. Then $z = \\dfrac{5 + 5i}{2 - i} = \\dfrac{(5 + 5i)(2 + i)}{5} = \\dfrac{10 + 5i + 10i + 5i^2}{5} = \\dfrac{5 + 15i}{5} = 1 + 3i$.

## Properties

All the usual laws hold in $\\mathbb C$: commutativity, associativity, distributivity. Conjugation respects every operation: $\\overline{z + w} = \\bar z + \\bar w$, $\\overline{zw} = \\bar z \\cdot \\bar w$. What is **lost** is order: complex numbers cannot be compared with $<$.

**Example 8.** Find real $x$, $y$ such that $(1 + 2i)x + (3 - i)y = 1 + 3i$. Expand: $(x + 3y) + (2x - y)i = 1 + 3i$, so $x + 3y = 1$, $2x - y = 3$. Solution $x = \\dfrac{10}{7}$, $y = -\\dfrac17$.

### Exercises

1. Compute $(5 - 3i) + (-2 + i)$ and $(5 - 3i) - (-2 + i)$.
2. Compute $(1 + 2i)(3 - 4i)$ and $(2 - i)^2$.
3. Compute $(3 + 4i)(3 - 4i)$ and $(1 - i)^4$.
4. Compute $\\dfrac{2 + 3i}{1 + i}$ and $\\dfrac{5}{2 - i}$.
5. Compute $\\dfrac{1 + i}{1 - i}$ and $\\dfrac{i}{2 + i}$.
6. Solve $(1 + i)z = 3 - i$.
7. Solve $z + 2\\bar z = 6 - 3i$ (write $z = x + yi$).
8. Find real $x$, $y$: $(2 - i)x + (1 + 3i)y = 5 + 4i$.

### Answers

1. $3 - 2i$; $7 - 4i$. 2. $3 - 4i + 6i - 8i^2 = 11 + 2i$; $3 - 4i$. 3. $25$; $(1 - i)^2 = -2i$, so $(-2i)^2 = -4$. 4. $\\dfrac{(2 + 3i)(1 - i)}{2} = \\dfrac{5 + i}{2}$; $\\dfrac{5(2 + i)}{5} = 2 + i$. 5. $\\dfrac{(1 + i)^2}{2} = i$; $\\dfrac{i(2 - i)}{5} = \\dfrac{1 + 2i}{5}$. 6. $z = \\dfrac{(3 - i)(1 - i)}{2} = \\dfrac{2 - 4i}{2} = 1 - 2i$. 7. $3x - yi = 6 - 3i$: $x = 2$, $y = 3$, $z = 2 + 3i$. 8. $2x + y = 5$, $-x + 3y = 4$: $x = \\dfrac{11}{7}$, $y = \\dfrac{13}{7}$.`,
        hy: `## Գումարում և հանում

Կոմպլեքս թվերը գումարվում են երկանդամների պես․ իրական մասերն՝ իրականների, կեղծերը՝ կեղծերի հետ։

$$(a + bi) \\pm (c + di) = (a \\pm c) + (b \\pm d)i$$

**Օրինակ 1։** $(3 + 2i) + (-1 + 5i) = 2 + 7i$, $(3 + 2i) - (-1 + 5i) = 4 - 3i$։

## Բազմապատկում

Բազմապատկեք որպես սովորական փակագծեր և $i^2$-ը փոխարինեք $-1$-ով․

$$(a + bi)(c + di) = ac + adi + bci + bdi^2 = (ac - bd) + (ad + bc)i$$

Բանաձևն անգիր անելու կարիք չկա․ պարզապես բացեք փակագծերը։

**Օրինակ 2։** $(2 + 3i)(4 - i) = 8 - 2i + 12i - 3i^2 = 8 + 10i + 3 = 11 + 10i$։

**Օրինակ 3։** $(1 + i)^2 = 1 + 2i + i^2 = 2i$։ Հետևաբար $(1 + i)^{10} = (2i)^5 = 32 i^5 = 32i$։

**Օրինակ 4։** $(a + bi)(a - bi) = a^2 - (bi)^2 = a^2 + b^2$։ Թվի և նրա համալուծի արտադրյալը **ոչ բացասական իրական թիվ** է․

$$z \\cdot \\bar z = a^2 + b^2$$

## Բաժանում

Բաժանելու համար հայտարարը դարձրեք իրական՝ համարիչն ու հայտարարը բազմապատկելով հայտարարի համալուծով։

**Օրինակ 5։**
$$\\frac{3 + i}{1 - 2i} = \\frac{(3 + i)(1 + 2i)}{(1 - 2i)(1 + 2i)} = \\frac{3 + 6i + i + 2i^2}{1 + 4} = \\frac{1 + 7i}{5} = \\frac15 + \\frac75 i$$

**Օրինակ 6։** $\\dfrac1i = \\dfrac{-i}{i \\cdot (-i)} = \\dfrac{-i}{1} = -i$։ Ընդհանրապես $\\dfrac1z = \\dfrac{\\bar z}{a^2 + b^2}$։

**Օրինակ 7։** Լուծենք $(2 - i)z = 5 + 5i$։ Այդ դեպքում $z = \\dfrac{5 + 5i}{2 - i} = \\dfrac{(5 + 5i)(2 + i)}{5} = \\dfrac{10 + 5i + 10i + 5i^2}{5} = \\dfrac{5 + 15i}{5} = 1 + 3i$։

## Հատկություններ

$\\mathbb C$-ում գործում են բոլոր սովորական օրենքները՝ տեղափոխական, զուգորդական, բաշխական։ Համալուծումը պահպանում է յուրաքանչյուր գործողություն․ $\\overline{z + w} = \\bar z + \\bar w$, $\\overline{zw} = \\bar z \\cdot \\bar w$։ **Կորչում է** կարգավորվածությունը․ կոմպլեքս թվերը չի կարելի համեմատել $<$ նշանով։

**Օրինակ 8։** Գտնենք իրական $x$, $y$, որ $(1 + 2i)x + (3 - i)y = 1 + 3i$։ Բացենք․ $(x + 3y) + (2x - y)i = 1 + 3i$, ուստի $x + 3y = 1$, $2x - y = 3$։ Լուծումը՝ $x = \\dfrac{10}{7}$, $y = -\\dfrac17$։

### Վարժություններ

1. Հաշվեք $(5 - 3i) + (-2 + i)$ և $(5 - 3i) - (-2 + i)$։
2. Հաշվեք $(1 + 2i)(3 - 4i)$ և $(2 - i)^2$։
3. Հաշվեք $(3 + 4i)(3 - 4i)$ և $(1 - i)^4$։
4. Հաշվեք $\\dfrac{2 + 3i}{1 + i}$ և $\\dfrac{5}{2 - i}$։
5. Հաշվեք $\\dfrac{1 + i}{1 - i}$ և $\\dfrac{i}{2 + i}$։
6. Լուծեք $(1 + i)z = 3 - i$ հավասարումը։
7. Լուծեք $z + 2\\bar z = 6 - 3i$ հավասարումը (գրեք $z = x + yi$)։
8. Գտեք իրական $x$, $y$․ $(2 - i)x + (1 + 3i)y = 5 + 4i$։

### Պատասխաններ

1. $3 - 2i$, $7 - 4i$։ 2. $3 - 4i + 6i - 8i^2 = 11 + 2i$, $3 - 4i$։ 3. $25$, $(1 - i)^2 = -2i$, ուստի $(-2i)^2 = -4$։ 4. $\\dfrac{(2 + 3i)(1 - i)}{2} = \\dfrac{5 + i}{2}$, $\\dfrac{5(2 + i)}{5} = 2 + i$։ 5. $\\dfrac{(1 + i)^2}{2} = i$, $\\dfrac{i(2 - i)}{5} = \\dfrac{1 + 2i}{5}$։ 6. $z = \\dfrac{(3 - i)(1 - i)}{2} = \\dfrac{2 - 4i}{2} = 1 - 2i$։ 7. $3x - yi = 6 - 3i$՝ $x = 2$, $y = 3$, $z = 2 + 3i$։ 8. $2x + y = 5$, $-x + 3y = 4$՝ $x = \\dfrac{11}{7}$, $y = \\dfrac{13}{7}$։`,
        ru: `## Сложение и вычитание

Комплексные числа складывают как двучлены: действительные части с действительными, мнимые с мнимыми.

$$(a + bi) \\pm (c + di) = (a \\pm c) + (b \\pm d)i.$$

**Пример 1.** $(3 + 2i) + (-1 + 5i) = 2 + 7i$; $(3 + 2i) - (-1 + 5i) = 4 - 3i$.

## Умножение

Перемножаем как обычные скобки и заменяем $i^2$ на $-1$:

$$(a + bi)(c + di) = ac + adi + bci + bdi^2 = (ac - bd) + (ad + bc)i.$$

Формулу запоминать не нужно: просто раскрывайте скобки.

**Пример 2.** $(2 + 3i)(4 - i) = 8 - 2i + 12i - 3i^2 = 8 + 10i + 3 = 11 + 10i$.

**Пример 3.** $(1 + i)^2 = 1 + 2i + i^2 = 2i$. Значит $(1 + i)^{10} = (2i)^5 = 32 i^5 = 32i$.

**Пример 4.** $(a + bi)(a - bi) = a^2 - (bi)^2 = a^2 + b^2$. Произведение числа на сопряжённое — **неотрицательное действительное число**:

$$z \\cdot \\bar z = a^2 + b^2.$$

## Деление

Чтобы разделить, сделайте знаменатель действительным, умножив числитель и знаменатель на сопряжённое к знаменателю.

**Пример 5.**
$$\\frac{3 + i}{1 - 2i} = \\frac{(3 + i)(1 + 2i)}{(1 - 2i)(1 + 2i)} = \\frac{3 + 6i + i + 2i^2}{1 + 4} = \\frac{1 + 7i}{5} = \\frac15 + \\frac75 i.$$

**Пример 6.** $\\dfrac1i = \\dfrac{-i}{i \\cdot (-i)} = \\dfrac{-i}{1} = -i$. Вообще $\\dfrac1z = \\dfrac{\\bar z}{a^2 + b^2}$.

**Пример 7.** Решим $(2 - i)z = 5 + 5i$. Тогда $z = \\dfrac{5 + 5i}{2 - i} = \\dfrac{(5 + 5i)(2 + i)}{5} = \\dfrac{10 + 5i + 10i + 5i^2}{5} = \\dfrac{5 + 15i}{5} = 1 + 3i$.

## Свойства

В $\\mathbb C$ выполняются все привычные законы: переместительный, сочетательный, распределительный. Сопряжение согласовано с каждой операцией: $\\overline{z + w} = \\bar z + \\bar w$, $\\overline{zw} = \\bar z \\cdot \\bar w$. **Теряется** только порядок: комплексные числа нельзя сравнивать знаком $<$.

**Пример 8.** Найдём действительные $x$, $y$, при которых $(1 + 2i)x + (3 - i)y = 1 + 3i$. Раскроем: $(x + 3y) + (2x - y)i = 1 + 3i$, значит $x + 3y = 1$, $2x - y = 3$. Решение $x = \\dfrac{10}{7}$, $y = -\\dfrac17$.

### Упражнения

1. Вычислите $(5 - 3i) + (-2 + i)$ и $(5 - 3i) - (-2 + i)$.
2. Вычислите $(1 + 2i)(3 - 4i)$ и $(2 - i)^2$.
3. Вычислите $(3 + 4i)(3 - 4i)$ и $(1 - i)^4$.
4. Вычислите $\\dfrac{2 + 3i}{1 + i}$ и $\\dfrac{5}{2 - i}$.
5. Вычислите $\\dfrac{1 + i}{1 - i}$ и $\\dfrac{i}{2 + i}$.
6. Решите $(1 + i)z = 3 - i$.
7. Решите $z + 2\\bar z = 6 - 3i$ (запишите $z = x + yi$).
8. Найдите действительные $x$, $y$: $(2 - i)x + (1 + 3i)y = 5 + 4i$.

### Ответы

1. $3 - 2i$; $7 - 4i$. 2. $3 - 4i + 6i - 8i^2 = 11 + 2i$; $3 - 4i$. 3. $25$; $(1 - i)^2 = -2i$, значит $(-2i)^2 = -4$. 4. $\\dfrac{(2 + 3i)(1 - i)}{2} = \\dfrac{5 + i}{2}$; $\\dfrac{5(2 + i)}{5} = 2 + i$. 5. $\\dfrac{(1 + i)^2}{2} = i$; $\\dfrac{i(2 - i)}{5} = \\dfrac{1 + 2i}{5}$. 6. $z = \\dfrac{(3 - i)(1 - i)}{2} = \\dfrac{2 - 4i}{2} = 1 - 2i$. 7. $3x - yi = 6 - 3i$: $x = 2$, $y = 3$, $z = 2 + 3i$. 8. $2x + y = 5$, $-x + 3y = 4$: $x = \\dfrac{11}{7}$, $y = \\dfrac{13}{7}$.`,
      },
      [
        q(t("(3 + 2i) + (−1 + 5i) equals…", "(3 + 2i) + (−1 + 5i)-ը հավասար է…", "(3 + 2i) + (−1 + 5i) равно…"), [t("2 + 7i", "2 + 7i", "2 + 7i"), t("4 + 7i", "4 + 7i", "4 + 7i"), t("2 − 3i", "2 − 3i", "2 − 3i")], 0),
        q(t("(1 + i)² equals…", "(1 + i)²-ը հավասար է…", "(1 + i)² равно…"), [t("2", "2", "2"), t("2i", "2i", "2i"), t("0", "0", "0")], 1),
        q(t("(a + bi)(a − bi) equals…", "(a + bi)(a − bi)-ն հավասար է…", "(a + bi)(a − bi) равно…"), [t("a² − b²", "a² − b²", "a² − b²"), t("a² + b²", "a² + b²", "a² + b²"), t("a² + b²i", "a² + b²i", "a² + b²i")], 1),
        q(t("To divide by 1 − 2i, multiply numerator and denominator by…", "1 − 2i-ի վրա բաժանելու համար համարիչն ու հայտարարը բազմապատկում ենք…", "Чтобы разделить на 1 − 2i, числитель и знаменатель умножают на…"), [t("1 − 2i", "1 − 2i-ով", "1 − 2i"), t("1 + 2i", "1 + 2i-ով", "1 + 2i"), t("2i", "2i-ով", "2i")], 1),
        q(t("1/i equals…", "1/i-ն հավասար է…", "1/i равно…"), [t("i", "i", "i"), t("−i", "−i", "−i"), t("1", "1", "1")], 1),
        q(t("The solution of (2 − i)z = 5 + 5i is…", "(2 − i)z = 5 + 5i-ի լուծումը…", "Решение (2 − i)z = 5 + 5i —"), [t("1 + 3i", "1 + 3i", "1 + 3i"), t("3 + i", "3 + i", "3 + i"), t("1 − 3i", "1 − 3i", "1 − 3i")], 0),
      ],
    ),
    lesson(
      "complex-plane",
      ["The complex plane and modulus", "Կոմպլեքս հարթություն և մոդուլ", "Комплексная плоскость и модуль"],
      {
        en: ["Represent z = a + bi as the point (a; b) or the vector from the origin", "Compute the modulus |z| = √(a² + b²) and interpret it as a distance", "Describe sets such as |z − z₀| = r and |z| ≤ 2 geometrically"],
        hy: ["Պատկերել z = a + bi-ն որպես (a; b) կետ կամ սկզբնակետից դուրս եկող վեկտոր", "Հաշվել |z| = √(a² + b²) մոդուլը և մեկնաբանել այն որպես հեռավորություն", "Երկրաչափորեն նկարագրել |z − z₀| = r և |z| ≤ 2 տիպի բազմություններ"],
        ru: ["Изображать z = a + bi точкой (a; b) или вектором из начала координат", "Вычислять модуль |z| = √(a² + b²) и трактовать его как расстояние", "Описывать геометрически множества вида |z − z₀| = r и |z| ≤ 2"],
      },
      {
        en: `## Points and vectors

A complex number has two real coordinates, so it is natural to draw $z = a + bi$ as the point $(a; b)$ in a coordinate plane. The horizontal axis carries the real numbers and is called the **real axis**; the vertical axis carries the numbers $bi$ and is the **imaginary axis**. The plane itself is the **complex plane**.

Equally useful is the **vector** from the origin $O$ to the point $(a; b)$. Then:

- adding complex numbers is adding vectors (parallelogram rule);
- $-z$ is the vector reflected through $O$;
- $\\bar z$ is the reflection of $z$ in the real axis.

**Example 1.** $z_1 = 3 + i$ and $z_2 = -1 + 2i$. Their sum $2 + 3i$ is the fourth vertex of the parallelogram built on the two vectors.

## Modulus

> The **modulus** of $z = a + bi$ is its distance from the origin:
>
> $\\lvert z\\rvert = \\sqrt{a^2 + b^2}.$

For a real number this is the ordinary absolute value. Also $\\lvert z\\rvert^2 = z\\bar z$ and $\\lvert \\bar z\\rvert = \\lvert z\\rvert$.

**Example 2.** $\\lvert 3 - 4i\\rvert = \\sqrt{9 + 16} = 5$; $\\lvert i\\rvert = 1$; $\\lvert -7\\rvert = 7$; $\\lvert 1 + i\\rvert = \\sqrt2$.

The modulus behaves well with multiplication and division:

$$\\lvert zw\\rvert = \\lvert z\\rvert \\cdot \\lvert w\\rvert, \\qquad \\left\\lvert \\frac zw \\right\\rvert = \\frac{\\lvert z\\rvert}{\\lvert w\\rvert}, \\qquad \\lvert z^n\\rvert = \\lvert z\\rvert^n.$$

With addition only the **triangle inequality** holds: $\\lvert z + w\\rvert \\le \\lvert z\\rvert + \\lvert w\\rvert$.

**Example 3.** $\\lvert (3 - 4i)(1 + i)\\rvert = 5 \\cdot \\sqrt2 = 5\\sqrt2$ without multiplying out.

**Example 4.** $\\lvert (1 + i)^{20}\\rvert = (\\sqrt2)^{20} = 2^{10} = 1024$.

## Distance between two numbers

$\\lvert z - w\\rvert$ is the length of the vector from $w$ to $z$, i.e. the **distance** between the points. This turns equations in $z$ into geometric figures.

| Condition | Figure |
| --- | --- |
| $\\lvert z\\rvert = r$ | circle of radius $r$ centred at $O$ |
| $\\lvert z - z_0\\rvert = r$ | circle of radius $r$ centred at $z_0$ |
| $\\lvert z - z_0\\rvert \\le r$ | disc |
| $\\lvert z - z_1\\rvert = \\lvert z - z_2\\rvert$ | perpendicular bisector of the segment $z_1 z_2$ |
| $\\operatorname{Re} z = c$ | vertical line |

**Example 5.** $\\lvert z - 2 + i\\rvert = 3$ means $\\lvert z - (2 - i)\\rvert = 3$: a circle of radius $3$ centred at $(2; -1)$.

**Example 6.** The distance between $z_1 = 1 + 5i$ and $z_2 = 4 + i$ is $\\lvert z_1 - z_2\\rvert = \\lvert -3 + 4i\\rvert = 5$.

**Example 7.** Which $z$ satisfy $\\lvert z - i\\rvert = \\lvert z + i\\rvert$? Points equidistant from $i$ and $-i$: the real axis, $\\operatorname{Im} z = 0$.

### Exercises

1. Plot $2 + 3i$, $-3 + i$, $-2i$, $4$ and their conjugates.
2. Compute $\\lvert 5 + 12i\\rvert$, $\\lvert -2 + 2i\\rvert$, $\\lvert -6i\\rvert$, $\\left\\lvert \\dfrac12 - \\dfrac{\\sqrt3}{2} i\\right\\rvert$.
3. Compute $\\lvert (2 + i)(3 - 4i)\\rvert$ and $\\left\\lvert \\dfrac{1 + i}{3 + 4i}\\right\\rvert$.
4. Compute $\\lvert (1 - i)^{8}\\rvert$ and $\\lvert (\\sqrt3 + i)^6\\rvert$.
5. Find the distance between $z_1 = -2 + 3i$ and $z_2 = 4 - 5i$.
6. Describe the sets $\\lvert z\\rvert = 2$, $\\lvert z - 3\\rvert \\le 1$, $\\lvert z + 1 - 2i\\rvert = 2$.
7. Describe the set $\\lvert z - 1\\rvert = \\lvert z - 3\\rvert$.
8. Find all $z$ with $\\lvert z\\rvert = 5$ and $\\operatorname{Re} z = 3$.

### Answers

1. Conjugates are mirror images in the real axis; $4$ is its own conjugate. 2. $13$; $2\\sqrt2$; $6$; $1$. 3. $\\sqrt5 \\cdot 5 = 5\\sqrt5$; $\\dfrac{\\sqrt2}{5}$. 4. $(\\sqrt2)^8 = 16$; $2^6 = 64$. 5. $\\lvert -6 + 8i\\rvert = 10$. 6. Circle of radius $2$ about $O$; disc of radius $1$ about $(3; 0)$; circle of radius $2$ about $(-1; 2)$. 7. The vertical line $\\operatorname{Re} z = 2$. 8. $9 + b^2 = 25$, $b = \\pm 4$: $z = 3 \\pm 4i$.`,
        hy: `## Կետեր և վեկտորներ

Կոմպլեքս թիվն ունի երկու իրական կոորդինատ, ուստի բնական է $z = a + bi$-ն պատկերել որպես $(a; b)$ կետ կոորդինատային հարթության մեջ։ Հորիզոնական առանցքի վրա իրական թվերն են, այն կոչվում է **իրական առանցք**, ուղղաձիգ առանցքի վրա $bi$ թվերն են՝ **կեղծ առանցք**։ Հարթությունն ինքը **կոմպլեքս հարթությունն** է։

Նույնքան օգտակար է $O$ սկզբնակետից $(a; b)$ կետ տանող **վեկտորը**։ Այդ դեպքում․

- կոմպլեքս թվերի գումարումը վեկտորների գումարում է (զուգահեռագծի կանոն),
- $-z$-ը $O$-ի նկատմամբ անդրադարձված վեկտորն է,
- $\\bar z$-ը $z$-ի անդրադարձումն է իրական առանցքի նկատմամբ։

**Օրինակ 1։** $z_1 = 3 + i$ և $z_2 = -1 + 2i$։ Նրանց $2 + 3i$ գումարն երկու վեկտորների վրա կառուցված զուգահեռագծի չորրորդ գագաթն է։

## Մոդուլ

> $z = a + bi$-ի **մոդուլը** նրա հեռավորությունն է սկզբնակետից․
>
> $\\lvert z\\rvert = \\sqrt{a^2 + b^2}$

Իրական թվի համար սա սովորական բացարձակ արժեքն է։ Նաև $\\lvert z\\rvert^2 = z\\bar z$ և $\\lvert \\bar z\\rvert = \\lvert z\\rvert$։

**Օրինակ 2։** $\\lvert 3 - 4i\\rvert = \\sqrt{9 + 16} = 5$, $\\lvert i\\rvert = 1$, $\\lvert -7\\rvert = 7$, $\\lvert 1 + i\\rvert = \\sqrt2$։

Մոդուլը լավ է համաձայնեցված բազմապատկման և բաժանման հետ․

$$\\lvert zw\\rvert = \\lvert z\\rvert \\cdot \\lvert w\\rvert, \\qquad \\left\\lvert \\frac zw \\right\\rvert = \\frac{\\lvert z\\rvert}{\\lvert w\\rvert}, \\qquad \\lvert z^n\\rvert = \\lvert z\\rvert^n$$

Գումարման համար գործում է միայն **եռանկյան անհավասարությունը**․ $\\lvert z + w\\rvert \\le \\lvert z\\rvert + \\lvert w\\rvert$։

**Օրինակ 3։** $\\lvert (3 - 4i)(1 + i)\\rvert = 5 \\cdot \\sqrt2 = 5\\sqrt2$՝ առանց բազմապատկելու։

**Օրինակ 4։** $\\lvert (1 + i)^{20}\\rvert = (\\sqrt2)^{20} = 2^{10} = 1024$։

## Երկու թվերի հեռավորությունը

$\\lvert z - w\\rvert$-ն $w$-ից $z$ տանող վեկտորի երկարությունն է, այսինքն՝ կետերի **հեռավորությունը**։ Սա $z$-ի նկատմամբ հավասարումները վերածում է երկրաչափական պատկերների։

| Պայման | Պատկեր |
| --- | --- |
| $\\lvert z\\rvert = r$ | $O$ կենտրոնով $r$ շառավղով շրջանագիծ |
| $\\lvert z - z_0\\rvert = r$ | $z_0$ կենտրոնով $r$ շառավղով շրջանագիծ |
| $\\lvert z - z_0\\rvert \\le r$ | շրջան |
| $\\lvert z - z_1\\rvert = \\lvert z - z_2\\rvert$ | $z_1 z_2$ հատվածի միջնուղղահայաց |
| $\\operatorname{Re} z = c$ | ուղղաձիգ ուղիղ |

**Օրինակ 5։** $\\lvert z - 2 + i\\rvert = 3$ նշանակում է $\\lvert z - (2 - i)\\rvert = 3$․ $(2; -1)$ կենտրոնով $3$ շառավղով շրջանագիծ։

**Օրինակ 6։** $z_1 = 1 + 5i$ և $z_2 = 4 + i$ կետերի հեռավորությունը $\\lvert z_1 - z_2\\rvert = \\lvert -3 + 4i\\rvert = 5$ է։

**Օրինակ 7։** Ո՞ր $z$-երն են բավարարում $\\lvert z - i\\rvert = \\lvert z + i\\rvert$ պայմանին։ $i$-ից և $-i$-ից հավասարահեռ կետերը՝ իրական առանցքը, $\\operatorname{Im} z = 0$։

### Վարժություններ

1. Պատկերեք $2 + 3i$, $-3 + i$, $-2i$, $4$ թվերը և դրանց համալուծները։
2. Հաշվեք $\\lvert 5 + 12i\\rvert$, $\\lvert -2 + 2i\\rvert$, $\\lvert -6i\\rvert$, $\\left\\lvert \\dfrac12 - \\dfrac{\\sqrt3}{2} i\\right\\rvert$։
3. Հաշվեք $\\lvert (2 + i)(3 - 4i)\\rvert$ և $\\left\\lvert \\dfrac{1 + i}{3 + 4i}\\right\\rvert$։
4. Հաշվեք $\\lvert (1 - i)^{8}\\rvert$ և $\\lvert (\\sqrt3 + i)^6\\rvert$։
5. Գտեք $z_1 = -2 + 3i$ և $z_2 = 4 - 5i$ կետերի հեռավորությունը։
6. Նկարագրեք $\\lvert z\\rvert = 2$, $\\lvert z - 3\\rvert \\le 1$, $\\lvert z + 1 - 2i\\rvert = 2$ բազմությունները։
7. Նկարագրեք $\\lvert z - 1\\rvert = \\lvert z - 3\\rvert$ բազմությունը։
8. Գտեք բոլոր $z$-երը, որոնց համար $\\lvert z\\rvert = 5$ և $\\operatorname{Re} z = 3$։

### Պատասխաններ

1. Համալուծները հայելային պատկերներ են իրական առանցքի նկատմամբ, $4$-ն իր իսկ համալուծն է։ 2. $13$, $2\\sqrt2$, $6$, $1$։ 3. $\\sqrt5 \\cdot 5 = 5\\sqrt5$, $\\dfrac{\\sqrt2}{5}$։ 4. $(\\sqrt2)^8 = 16$, $2^6 = 64$։ 5. $\\lvert -6 + 8i\\rvert = 10$։ 6. $O$ կենտրոնով $2$ շառավղով շրջանագիծ, $(3; 0)$ կենտրոնով $1$ շառավղով շրջան, $(-1; 2)$ կենտրոնով $2$ շառավղով շրջանագիծ։ 7. $\\operatorname{Re} z = 2$ ուղղաձիգ ուղիղը։ 8. $9 + b^2 = 25$, $b = \\pm 4$՝ $z = 3 \\pm 4i$։`,
        ru: `## Точки и векторы

У комплексного числа две действительные координаты, поэтому естественно изображать $z = a + bi$ точкой $(a; b)$ координатной плоскости. На горизонтальной оси лежат действительные числа, она называется **действительной осью**; на вертикальной — числа $bi$, это **мнимая ось**. Сама плоскость — **комплексная плоскость**.

Не менее полезен **вектор** из начала координат $O$ в точку $(a; b)$. Тогда:

- сложение комплексных чисел — сложение векторов (правило параллелограмма);
- $-z$ — вектор, отражённый относительно $O$;
- $\\bar z$ — отражение $z$ относительно действительной оси.

**Пример 1.** $z_1 = 3 + i$ и $z_2 = -1 + 2i$. Их сумма $2 + 3i$ — четвёртая вершина параллелограмма, построенного на двух векторах.

## Модуль

> **Модуль** числа $z = a + bi$ — его расстояние до начала координат:
>
> $\\lvert z\\rvert = \\sqrt{a^2 + b^2}.$

Для действительного числа это обычный модуль. Кроме того, $\\lvert z\\rvert^2 = z\\bar z$ и $\\lvert \\bar z\\rvert = \\lvert z\\rvert$.

**Пример 2.** $\\lvert 3 - 4i\\rvert = \\sqrt{9 + 16} = 5$; $\\lvert i\\rvert = 1$; $\\lvert -7\\rvert = 7$; $\\lvert 1 + i\\rvert = \\sqrt2$.

Модуль хорошо согласован с умножением и делением:

$$\\lvert zw\\rvert = \\lvert z\\rvert \\cdot \\lvert w\\rvert, \\qquad \\left\\lvert \\frac zw \\right\\rvert = \\frac{\\lvert z\\rvert}{\\lvert w\\rvert}, \\qquad \\lvert z^n\\rvert = \\lvert z\\rvert^n.$$

Для сложения верно лишь **неравенство треугольника**: $\\lvert z + w\\rvert \\le \\lvert z\\rvert + \\lvert w\\rvert$.

**Пример 3.** $\\lvert (3 - 4i)(1 + i)\\rvert = 5 \\cdot \\sqrt2 = 5\\sqrt2$ без перемножения.

**Пример 4.** $\\lvert (1 + i)^{20}\\rvert = (\\sqrt2)^{20} = 2^{10} = 1024$.

## Расстояние между двумя числами

$\\lvert z - w\\rvert$ — длина вектора от $w$ к $z$, то есть **расстояние** между точками. Это превращает уравнения относительно $z$ в геометрические фигуры.

| Условие | Фигура |
| --- | --- |
| $\\lvert z\\rvert = r$ | окружность радиуса $r$ с центром $O$ |
| $\\lvert z - z_0\\rvert = r$ | окружность радиуса $r$ с центром $z_0$ |
| $\\lvert z - z_0\\rvert \\le r$ | круг |
| $\\lvert z - z_1\\rvert = \\lvert z - z_2\\rvert$ | серединный перпендикуляр к отрезку $z_1 z_2$ |
| $\\operatorname{Re} z = c$ | вертикальная прямая |

**Пример 5.** $\\lvert z - 2 + i\\rvert = 3$ означает $\\lvert z - (2 - i)\\rvert = 3$: окружность радиуса $3$ с центром $(2; -1)$.

**Пример 6.** Расстояние между $z_1 = 1 + 5i$ и $z_2 = 4 + i$ равно $\\lvert z_1 - z_2\\rvert = \\lvert -3 + 4i\\rvert = 5$.

**Пример 7.** Какие $z$ удовлетворяют $\\lvert z - i\\rvert = \\lvert z + i\\rvert$? Точки, равноудалённые от $i$ и $-i$: действительная ось, $\\operatorname{Im} z = 0$.

### Упражнения

1. Изобразите $2 + 3i$, $-3 + i$, $-2i$, $4$ и сопряжённые к ним.
2. Вычислите $\\lvert 5 + 12i\\rvert$, $\\lvert -2 + 2i\\rvert$, $\\lvert -6i\\rvert$, $\\left\\lvert \\dfrac12 - \\dfrac{\\sqrt3}{2} i\\right\\rvert$.
3. Вычислите $\\lvert (2 + i)(3 - 4i)\\rvert$ и $\\left\\lvert \\dfrac{1 + i}{3 + 4i}\\right\\rvert$.
4. Вычислите $\\lvert (1 - i)^{8}\\rvert$ и $\\lvert (\\sqrt3 + i)^6\\rvert$.
5. Найдите расстояние между $z_1 = -2 + 3i$ и $z_2 = 4 - 5i$.
6. Опишите множества $\\lvert z\\rvert = 2$, $\\lvert z - 3\\rvert \\le 1$, $\\lvert z + 1 - 2i\\rvert = 2$.
7. Опишите множество $\\lvert z - 1\\rvert = \\lvert z - 3\\rvert$.
8. Найдите все $z$, для которых $\\lvert z\\rvert = 5$ и $\\operatorname{Re} z = 3$.

### Ответы

1. Сопряжённые симметричны относительно действительной оси; $4$ сопряжено само себе. 2. $13$; $2\\sqrt2$; $6$; $1$. 3. $\\sqrt5 \\cdot 5 = 5\\sqrt5$; $\\dfrac{\\sqrt2}{5}$. 4. $(\\sqrt2)^8 = 16$; $2^6 = 64$. 5. $\\lvert -6 + 8i\\rvert = 10$. 6. Окружность радиуса $2$ с центром $O$; круг радиуса $1$ с центром $(3; 0)$; окружность радиуса $2$ с центром $(-1; 2)$. 7. Вертикальная прямая $\\operatorname{Re} z = 2$. 8. $9 + b^2 = 25$, $b = \\pm 4$: $z = 3 \\pm 4i$.`,
      },
      [
        q(t("The number 3 − 4i is drawn as the point…", "3 − 4i թիվը պատկերվում է որպես կետ…", "Число 3 − 4i изображается точкой…"), [t("(3; −4)", "(3; −4)", "(3; −4)"), t("(−4; 3)", "(−4; 3)", "(−4; 3)"), t("(3; 4)", "(3; 4)", "(3; 4)")], 0),
        q(t("|3 − 4i| equals…", "|3 − 4i|-ը հավասար է…", "|3 − 4i| равен…"), [t("7", "7", "7"), t("5", "5", "5"), t("√7", "√7", "√7")], 1),
        q(t("|zw| equals…", "|zw|-ն հավասար է…", "|zw| равен…"), [t("|z| + |w|", "|z| + |w|", "|z| + |w|"), t("|z| · |w|", "|z| · |w|", "|z| · |w|"), t("|z| − |w|", "|z| − |w|", "|z| − |w|")], 1),
        q(t("|z − z₀| = r describes…", "|z − z₀| = r-ը նկարագրում է…", "|z − z₀| = r задаёт…"), [t("a line through z₀", "z₀-ով անցնող ուղիղ", "прямую через z₀"), t("a circle centred at z₀", "z₀ կենտրոնով շրջանագիծ", "окружность с центром z₀"), t("a circle centred at O", "O կենտրոնով շրջանագիծ", "окружность с центром O")], 1),
        q(t("The distance between 1 + 5i and 4 + i is…", "1 + 5i-ի և 4 + i-ի հեռավորությունը…", "Расстояние между 1 + 5i и 4 + i —"), [t("5", "5", "5"), t("3", "3", "3"), t("√26", "√26", "√26")], 0),
        q(t("z̄ is the reflection of z in…", "z̄-ը z-ի անդրադարձումն է…", "z̄ — отражение z относительно…"), [t("the origin", "սկզբնակետի նկատմամբ", "начала координат"), t("the imaginary axis", "կեղծ առանցքի նկատմամբ", "мнимой оси"), t("the real axis", "իրական առանցքի նկատմամբ", "действительной оси")], 2),
      ],
    ),
    lesson(
      "trigonometric-form",
      ["Trigonometric form and De Moivre's formula", "Եռանկյունաչափական տեսք և Մուավրի բանաձև", "Тригонометрическая форма и формула Муавра"],
      {
        en: ["Write z = r(cos φ + i sin φ) using the modulus r and an argument φ", "Multiply and divide numbers in trigonometric form: moduli multiply, arguments add", "Raise to a power with De Moivre's formula and find the n-th roots of a complex number"],
        hy: ["Գրել z = r(cos φ + i sin φ)՝ օգտվելով r մոդուլից և φ արգումենտից", "Բազմապատկել և բաժանել թվեր եռանկյունաչափական տեսքով․ մոդուլները բազմապատկվում են, արգումենտները՝ գումարվում", "Աստիճան բարձրացնել Մուավրի բանաձևով և գտնել կոմպլեքս թվի n-րդ աստիճանի արմատները"],
        ru: ["Записывать z = r(cos φ + i sin φ) через модуль r и аргумент φ", "Умножать и делить числа в тригонометрической форме: модули перемножаются, аргументы складываются", "Возводить в степень по формуле Муавра и находить корни n-й степени из комплексного числа"],
      },
      {
        en: `## Polar coordinates for a complex number

A point in the plane can be fixed by its distance $r$ from the origin and the angle $\\varphi$ from the positive real axis. For $z = a + bi \\ne 0$:

$$a = r\\cos\\varphi, \\quad b = r\\sin\\varphi, \\qquad r = \\lvert z\\rvert, \\quad \\tan\\varphi = \\frac ba.$$

Hence the **trigonometric form**

$$z = r(\\cos\\varphi + i\\sin\\varphi).$$

The angle $\\varphi$ is called an **argument** of $z$. It is defined up to multiples of $2\\pi$; the value in $(-\\pi; \\pi]$ or $[0; 2\\pi)$ is the principal one. The quadrant of the point decides which solution of $\\tan\\varphi = \\dfrac ba$ to take.

**Example 1.** $z = 1 + i$: $r = \\sqrt2$, first quadrant, $\\varphi = \\dfrac{\\pi}{4}$. So $z = \\sqrt2\\left(\\cos\\dfrac{\\pi}{4} + i\\sin\\dfrac{\\pi}{4}\\right)$.

**Example 2.** $z = -\\sqrt3 + i$: $r = 2$, second quadrant, $\\tan\\varphi = -\\dfrac{1}{\\sqrt3}$, so $\\varphi = \\dfrac{5\\pi}{6}$.

**Example 3.** $z = -4$: $r = 4$, $\\varphi = \\pi$. $z = -3i$: $r = 3$, $\\varphi = -\\dfrac{\\pi}{2}$ (or $\\dfrac{3\\pi}{2}$).

## Multiplication and division

If $z_1 = r_1(\\cos\\varphi_1 + i\\sin\\varphi_1)$ and $z_2 = r_2(\\cos\\varphi_2 + i\\sin\\varphi_2)$, then by the addition formulas

$$z_1 z_2 = r_1 r_2\\big(\\cos(\\varphi_1 + \\varphi_2) + i\\sin(\\varphi_1 + \\varphi_2)\\big), \\qquad \\frac{z_1}{z_2} = \\frac{r_1}{r_2}\\big(\\cos(\\varphi_1 - \\varphi_2) + i\\sin(\\varphi_1 - \\varphi_2)\\big).$$

Multiplying by $z_2$ **stretches** by $r_2$ and **rotates** by $\\varphi_2$. In particular multiplication by $i$ is a rotation by $90^\\circ$.

## De Moivre's formula

Repeating the product rule $n$ times:

$$\\big(r(\\cos\\varphi + i\\sin\\varphi)\\big)^n = r^n(\\cos n\\varphi + i\\sin n\\varphi).$$

**Example 4.** $(1 + i)^{12} = (\\sqrt2)^{12}\\left(\\cos 3\\pi + i\\sin 3\\pi\\right) = 64 \\cdot (-1) = -64$.

**Example 5.** $(-\\sqrt3 + i)^6 = 2^6(\\cos 5\\pi + i\\sin 5\\pi) = -64$.

## Roots

The equation $w^n = z$, with $z = r(\\cos\\varphi + i\\sin\\varphi) \\ne 0$, has exactly $n$ solutions:

$$w_k = \\sqrt[n]{r}\\left(\\cos\\frac{\\varphi + 2\\pi k}{n} + i\\sin\\frac{\\varphi + 2\\pi k}{n}\\right), \\qquad k = 0, 1, \\ldots, n - 1.$$

They lie on a circle of radius $\\sqrt[n]{r}$ at the vertices of a regular $n$-gon.

**Example 6.** The cube roots of $8$: $r = 8$, $\\varphi = 0$, so $w_k = 2\\left(\\cos\\dfrac{2\\pi k}{3} + i\\sin\\dfrac{2\\pi k}{3}\\right)$: $w_0 = 2$, $w_1 = -1 + i\\sqrt3$, $w_2 = -1 - i\\sqrt3$. Check: $(-1 + i\\sqrt3)^3 = 8$.

**Example 7.** The square roots of $i$: $r = 1$, $\\varphi = \\dfrac{\\pi}{2}$, so $w = \\cos\\dfrac{\\pi}{4} + i\\sin\\dfrac{\\pi}{4} = \\dfrac{\\sqrt2}{2}(1 + i)$ and its negative.

### Exercises

1. Write in trigonometric form: $2i$, $-1$, $1 - i$, $-2 - 2i\\sqrt3$.
2. Write in algebraic form: $4\\left(\\cos\\dfrac{\\pi}{3} + i\\sin\\dfrac{\\pi}{3}\\right)$, $\\sqrt2\\left(\\cos\\dfrac{3\\pi}{4} + i\\sin\\dfrac{3\\pi}{4}\\right)$.
3. Compute $z_1 z_2$ and $\\dfrac{z_1}{z_2}$ for $z_1 = 6\\left(\\cos\\dfrac{\\pi}{2} + i\\sin\\dfrac{\\pi}{2}\\right)$, $z_2 = 2\\left(\\cos\\dfrac{\\pi}{6} + i\\sin\\dfrac{\\pi}{6}\\right)$.
4. Compute $(1 - i)^{10}$ by De Moivre's formula.
5. Compute $\\left(\\dfrac12 + \\dfrac{\\sqrt3}{2}i\\right)^{30}$.
6. Find all cube roots of $-1$.
7. Find all fourth roots of $16$.
8. Solve $w^2 = -2i$.

### Answers

1. $2\\left(\\cos\\dfrac{\\pi}{2} + i\\sin\\dfrac{\\pi}{2}\\right)$; $\\cos\\pi + i\\sin\\pi$; $\\sqrt2\\left(\\cos\\left(-\\dfrac{\\pi}{4}\\right) + i\\sin\\left(-\\dfrac{\\pi}{4}\\right)\\right)$; $4\\left(\\cos\\dfrac{4\\pi}{3} + i\\sin\\dfrac{4\\pi}{3}\\right)$. 2. $2 + 2i\\sqrt3$; $-1 + i$. 3. $12\\left(\\cos\\dfrac{2\\pi}{3} + i\\sin\\dfrac{2\\pi}{3}\\right) = -6 + 6i\\sqrt3$; $3\\left(\\cos\\dfrac{\\pi}{3} + i\\sin\\dfrac{\\pi}{3}\\right) = \\dfrac32 + \\dfrac{3\\sqrt3}{2}i$. 4. $(\\sqrt2)^{10}\\left(\\cos\\left(-\\dfrac{5\\pi}{2}\\right) + i\\sin\\left(-\\dfrac{5\\pi}{2}\\right)\\right) = -32i$. 5. $\\cos 10\\pi + i\\sin 10\\pi = 1$. 6. $-1$, $\\dfrac12 \\pm \\dfrac{\\sqrt3}{2}i$. 7. $\\pm 2$, $\\pm 2i$. 8. $r = 2$, $\\varphi = -\\dfrac{\\pi}{2}$: $w = \\pm\\sqrt2\\left(\\cos\\dfrac{\\pi}{4} - i\\sin\\dfrac{\\pi}{4}\\right) = \\pm(1 - i)$.`,
        hy: `## Կոմպլեքս թվի բևեռային կոորդինատները

Հարթության կետը կարելի է որոշել սկզբնակետից նրա $r$ հեռավորությամբ և դրական իրական առանցքից հաշված $\\varphi$ անկյունով։ $z = a + bi \\ne 0$ դեպքում․

$$a = r\\cos\\varphi, \\quad b = r\\sin\\varphi, \\qquad r = \\lvert z\\rvert, \\quad \\operatorname{tg}\\varphi = \\frac ba$$

Այստեղից՝ **եռանկյունաչափական տեսքը**

$$z = r(\\cos\\varphi + i\\sin\\varphi)$$

$\\varphi$ անկյունը կոչվում է $z$-ի **արգումենտ**։ Այն որոշված է $2\\pi$-ի պատիկների ճշտությամբ, $(-\\pi; \\pi]$ կամ $[0; 2\\pi)$ միջակայքի արժեքը գլխավորն է։ Կետի քառորդը որոշում է, թե $\\operatorname{tg}\\varphi = \\dfrac ba$-ի որ լուծումը վերցնել։

**Օրինակ 1։** $z = 1 + i$․ $r = \\sqrt2$, առաջին քառորդ, $\\varphi = \\dfrac{\\pi}{4}$։ Ուստի $z = \\sqrt2\\left(\\cos\\dfrac{\\pi}{4} + i\\sin\\dfrac{\\pi}{4}\\right)$։

**Օրինակ 2։** $z = -\\sqrt3 + i$․ $r = 2$, երկրորդ քառորդ, $\\operatorname{tg}\\varphi = -\\dfrac{1}{\\sqrt3}$, ուստի $\\varphi = \\dfrac{5\\pi}{6}$։

**Օրինակ 3։** $z = -4$․ $r = 4$, $\\varphi = \\pi$։ $z = -3i$․ $r = 3$, $\\varphi = -\\dfrac{\\pi}{2}$ (կամ $\\dfrac{3\\pi}{2}$)։

## Բազմապատկում և բաժանում

Եթե $z_1 = r_1(\\cos\\varphi_1 + i\\sin\\varphi_1)$ և $z_2 = r_2(\\cos\\varphi_2 + i\\sin\\varphi_2)$, ապա գումարի բանաձևերով

$$z_1 z_2 = r_1 r_2\\big(\\cos(\\varphi_1 + \\varphi_2) + i\\sin(\\varphi_1 + \\varphi_2)\\big), \\qquad \\frac{z_1}{z_2} = \\frac{r_1}{r_2}\\big(\\cos(\\varphi_1 - \\varphi_2) + i\\sin(\\varphi_1 - \\varphi_2)\\big)$$

$z_2$-ով բազմապատկելը **ձգում է** $r_2$ անգամ և **պտտում** $\\varphi_2$ անկյունով։ Մասնավորապես, $i$-ով բազմապատկելը $90^\\circ$-ով պտույտ է։

## Մուավրի բանաձևը

Արտադրյալի կանոնը $n$ անգամ կրկնելով․

$$\\big(r(\\cos\\varphi + i\\sin\\varphi)\\big)^n = r^n(\\cos n\\varphi + i\\sin n\\varphi)$$

**Օրինակ 4։** $(1 + i)^{12} = (\\sqrt2)^{12}\\left(\\cos 3\\pi + i\\sin 3\\pi\\right) = 64 \\cdot (-1) = -64$։

**Օրինակ 5։** $(-\\sqrt3 + i)^6 = 2^6(\\cos 5\\pi + i\\sin 5\\pi) = -64$։

## Արմատներ

$w^n = z$ հավասարումը, որտեղ $z = r(\\cos\\varphi + i\\sin\\varphi) \\ne 0$, ունի ճիշտ $n$ լուծում․

$$w_k = \\sqrt[n]{r}\\left(\\cos\\frac{\\varphi + 2\\pi k}{n} + i\\sin\\frac{\\varphi + 2\\pi k}{n}\\right), \\qquad k = 0, 1, \\ldots, n - 1$$

Դրանք գտնվում են $\\sqrt[n]{r}$ շառավղով շրջանագծի վրա՝ կանոնավոր $n$-անկյան գագաթներում։

**Օրինակ 6։** $8$-ի խորանարդ արմատները․ $r = 8$, $\\varphi = 0$, ուստի $w_k = 2\\left(\\cos\\dfrac{2\\pi k}{3} + i\\sin\\dfrac{2\\pi k}{3}\\right)$․ $w_0 = 2$, $w_1 = -1 + i\\sqrt3$, $w_2 = -1 - i\\sqrt3$։ Ստուգում՝ $(-1 + i\\sqrt3)^3 = 8$։

**Օրինակ 7։** $i$-ի քառակուսի արմատները․ $r = 1$, $\\varphi = \\dfrac{\\pi}{2}$, ուստի $w = \\cos\\dfrac{\\pi}{4} + i\\sin\\dfrac{\\pi}{4} = \\dfrac{\\sqrt2}{2}(1 + i)$ և նրա հակադիրը։

### Վարժություններ

1. Գրեք եռանկյունաչափական տեսքով․ $2i$, $-1$, $1 - i$, $-2 - 2i\\sqrt3$։
2. Գրեք հանրահաշվական տեսքով․ $4\\left(\\cos\\dfrac{\\pi}{3} + i\\sin\\dfrac{\\pi}{3}\\right)$, $\\sqrt2\\left(\\cos\\dfrac{3\\pi}{4} + i\\sin\\dfrac{3\\pi}{4}\\right)$։
3. Հաշվեք $z_1 z_2$ և $\\dfrac{z_1}{z_2}$, եթե $z_1 = 6\\left(\\cos\\dfrac{\\pi}{2} + i\\sin\\dfrac{\\pi}{2}\\right)$, $z_2 = 2\\left(\\cos\\dfrac{\\pi}{6} + i\\sin\\dfrac{\\pi}{6}\\right)$։
4. Հաշվեք $(1 - i)^{10}$-ը Մուավրի բանաձևով։
5. Հաշվեք $\\left(\\dfrac12 + \\dfrac{\\sqrt3}{2}i\\right)^{30}$։
6. Գտեք $-1$-ի բոլոր խորանարդ արմատները։
7. Գտեք $16$-ի բոլոր չորրորդ աստիճանի արմատները։
8. Լուծեք $w^2 = -2i$ հավասարումը։

### Պատասխաններ

1. $2\\left(\\cos\\dfrac{\\pi}{2} + i\\sin\\dfrac{\\pi}{2}\\right)$, $\\cos\\pi + i\\sin\\pi$, $\\sqrt2\\left(\\cos\\left(-\\dfrac{\\pi}{4}\\right) + i\\sin\\left(-\\dfrac{\\pi}{4}\\right)\\right)$, $4\\left(\\cos\\dfrac{4\\pi}{3} + i\\sin\\dfrac{4\\pi}{3}\\right)$։ 2. $2 + 2i\\sqrt3$, $-1 + i$։ 3. $12\\left(\\cos\\dfrac{2\\pi}{3} + i\\sin\\dfrac{2\\pi}{3}\\right) = -6 + 6i\\sqrt3$, $3\\left(\\cos\\dfrac{\\pi}{3} + i\\sin\\dfrac{\\pi}{3}\\right) = \\dfrac32 + \\dfrac{3\\sqrt3}{2}i$։ 4. $(\\sqrt2)^{10}\\left(\\cos\\left(-\\dfrac{5\\pi}{2}\\right) + i\\sin\\left(-\\dfrac{5\\pi}{2}\\right)\\right) = -32i$։ 5. $\\cos 10\\pi + i\\sin 10\\pi = 1$։ 6. $-1$, $\\dfrac12 \\pm \\dfrac{\\sqrt3}{2}i$։ 7. $\\pm 2$, $\\pm 2i$։ 8. $r = 2$, $\\varphi = -\\dfrac{\\pi}{2}$՝ $w = \\pm\\sqrt2\\left(\\cos\\dfrac{\\pi}{4} - i\\sin\\dfrac{\\pi}{4}\\right) = \\pm(1 - i)$։`,
        ru: `## Полярные координаты комплексного числа

Точку плоскости можно задать расстоянием $r$ до начала координат и углом $\\varphi$ от положительной действительной оси. Для $z = a + bi \\ne 0$:

$$a = r\\cos\\varphi, \\quad b = r\\sin\\varphi, \\qquad r = \\lvert z\\rvert, \\quad \\operatorname{tg}\\varphi = \\frac ba.$$

Отсюда **тригонометрическая форма**

$$z = r(\\cos\\varphi + i\\sin\\varphi).$$

Угол $\\varphi$ называется **аргументом** $z$. Он определён с точностью до кратных $2\\pi$; значение из $(-\\pi; \\pi]$ или $[0; 2\\pi)$ называют главным. Четверть, в которой лежит точка, определяет, какое решение $\\operatorname{tg}\\varphi = \\dfrac ba$ брать.

**Пример 1.** $z = 1 + i$: $r = \\sqrt2$, первая четверть, $\\varphi = \\dfrac{\\pi}{4}$. Значит $z = \\sqrt2\\left(\\cos\\dfrac{\\pi}{4} + i\\sin\\dfrac{\\pi}{4}\\right)$.

**Пример 2.** $z = -\\sqrt3 + i$: $r = 2$, вторая четверть, $\\operatorname{tg}\\varphi = -\\dfrac{1}{\\sqrt3}$, значит $\\varphi = \\dfrac{5\\pi}{6}$.

**Пример 3.** $z = -4$: $r = 4$, $\\varphi = \\pi$. $z = -3i$: $r = 3$, $\\varphi = -\\dfrac{\\pi}{2}$ (или $\\dfrac{3\\pi}{2}$).

## Умножение и деление

Если $z_1 = r_1(\\cos\\varphi_1 + i\\sin\\varphi_1)$ и $z_2 = r_2(\\cos\\varphi_2 + i\\sin\\varphi_2)$, то по формулам сложения

$$z_1 z_2 = r_1 r_2\\big(\\cos(\\varphi_1 + \\varphi_2) + i\\sin(\\varphi_1 + \\varphi_2)\\big), \\qquad \\frac{z_1}{z_2} = \\frac{r_1}{r_2}\\big(\\cos(\\varphi_1 - \\varphi_2) + i\\sin(\\varphi_1 - \\varphi_2)\\big).$$

Умножение на $z_2$ **растягивает** в $r_2$ раз и **поворачивает** на $\\varphi_2$. В частности, умножение на $i$ — поворот на $90^\\circ$.

## Формула Муавра

Повторяя правило произведения $n$ раз:

$$\\big(r(\\cos\\varphi + i\\sin\\varphi)\\big)^n = r^n(\\cos n\\varphi + i\\sin n\\varphi).$$

**Пример 4.** $(1 + i)^{12} = (\\sqrt2)^{12}\\left(\\cos 3\\pi + i\\sin 3\\pi\\right) = 64 \\cdot (-1) = -64$.

**Пример 5.** $(-\\sqrt3 + i)^6 = 2^6(\\cos 5\\pi + i\\sin 5\\pi) = -64$.

## Корни

Уравнение $w^n = z$, где $z = r(\\cos\\varphi + i\\sin\\varphi) \\ne 0$, имеет ровно $n$ решений:

$$w_k = \\sqrt[n]{r}\\left(\\cos\\frac{\\varphi + 2\\pi k}{n} + i\\sin\\frac{\\varphi + 2\\pi k}{n}\\right), \\qquad k = 0, 1, \\ldots, n - 1.$$

Они лежат на окружности радиуса $\\sqrt[n]{r}$ в вершинах правильного $n$-угольника.

**Пример 6.** Кубические корни из $8$: $r = 8$, $\\varphi = 0$, значит $w_k = 2\\left(\\cos\\dfrac{2\\pi k}{3} + i\\sin\\dfrac{2\\pi k}{3}\\right)$: $w_0 = 2$, $w_1 = -1 + i\\sqrt3$, $w_2 = -1 - i\\sqrt3$. Проверка: $(-1 + i\\sqrt3)^3 = 8$.

**Пример 7.** Квадратные корни из $i$: $r = 1$, $\\varphi = \\dfrac{\\pi}{2}$, значит $w = \\cos\\dfrac{\\pi}{4} + i\\sin\\dfrac{\\pi}{4} = \\dfrac{\\sqrt2}{2}(1 + i)$ и противоположное ему число.

### Упражнения

1. Запишите в тригонометрической форме: $2i$, $-1$, $1 - i$, $-2 - 2i\\sqrt3$.
2. Запишите в алгебраической форме: $4\\left(\\cos\\dfrac{\\pi}{3} + i\\sin\\dfrac{\\pi}{3}\\right)$, $\\sqrt2\\left(\\cos\\dfrac{3\\pi}{4} + i\\sin\\dfrac{3\\pi}{4}\\right)$.
3. Вычислите $z_1 z_2$ и $\\dfrac{z_1}{z_2}$ для $z_1 = 6\\left(\\cos\\dfrac{\\pi}{2} + i\\sin\\dfrac{\\pi}{2}\\right)$, $z_2 = 2\\left(\\cos\\dfrac{\\pi}{6} + i\\sin\\dfrac{\\pi}{6}\\right)$.
4. Вычислите $(1 - i)^{10}$ по формуле Муавра.
5. Вычислите $\\left(\\dfrac12 + \\dfrac{\\sqrt3}{2}i\\right)^{30}$.
6. Найдите все кубические корни из $-1$.
7. Найдите все корни четвёртой степени из $16$.
8. Решите $w^2 = -2i$.

### Ответы

1. $2\\left(\\cos\\dfrac{\\pi}{2} + i\\sin\\dfrac{\\pi}{2}\\right)$; $\\cos\\pi + i\\sin\\pi$; $\\sqrt2\\left(\\cos\\left(-\\dfrac{\\pi}{4}\\right) + i\\sin\\left(-\\dfrac{\\pi}{4}\\right)\\right)$; $4\\left(\\cos\\dfrac{4\\pi}{3} + i\\sin\\dfrac{4\\pi}{3}\\right)$. 2. $2 + 2i\\sqrt3$; $-1 + i$. 3. $12\\left(\\cos\\dfrac{2\\pi}{3} + i\\sin\\dfrac{2\\pi}{3}\\right) = -6 + 6i\\sqrt3$; $3\\left(\\cos\\dfrac{\\pi}{3} + i\\sin\\dfrac{\\pi}{3}\\right) = \\dfrac32 + \\dfrac{3\\sqrt3}{2}i$. 4. $(\\sqrt2)^{10}\\left(\\cos\\left(-\\dfrac{5\\pi}{2}\\right) + i\\sin\\left(-\\dfrac{5\\pi}{2}\\right)\\right) = -32i$. 5. $\\cos 10\\pi + i\\sin 10\\pi = 1$. 6. $-1$, $\\dfrac12 \\pm \\dfrac{\\sqrt3}{2}i$. 7. $\\pm 2$, $\\pm 2i$. 8. $r = 2$, $\\varphi = -\\dfrac{\\pi}{2}$: $w = \\pm\\sqrt2\\left(\\cos\\dfrac{\\pi}{4} - i\\sin\\dfrac{\\pi}{4}\\right) = \\pm(1 - i)$.`,
      },
      [
        q(t("The trigonometric form of 1 + i is…", "1 + i-ի եռանկյունաչափական տեսքը…", "Тригонометрическая форма 1 + i —"), [t("√2(cos π/4 + i sin π/4)", "√2(cos π/4 + i sin π/4)", "√2(cos π/4 + i sin π/4)"), t("2(cos π/4 + i sin π/4)", "2(cos π/4 + i sin π/4)", "2(cos π/4 + i sin π/4)"), t("√2(cos π/2 + i sin π/2)", "√2(cos π/2 + i sin π/2)", "√2(cos π/2 + i sin π/2)")], 0),
        q(t("When multiplying in trigonometric form, the arguments…", "Եռանկյունաչափական տեսքով բազմապատկելիս արգումենտները…", "При умножении в тригонометрической форме аргументы…"), [t("multiply", "բազմապատկվում են", "перемножаются"), t("add", "գումարվում են", "складываются"), t("stay the same", "չեն փոխվում", "не меняются")], 1),
        q(t("Multiplying by i rotates the vector by…", "i-ով բազմապատկելը վեկտորը պտտում է…", "Умножение на i поворачивает вектор на…"), [t("45°", "45°-ով", "45°"), t("90°", "90°-ով", "90°"), t("180°", "180°-ով", "180°")], 1),
        q(t("(r(cos φ + i sin φ))ⁿ equals…", "(r(cos φ + i sin φ))ⁿ-ը հավասար է…", "(r(cos φ + i sin φ))ⁿ равно…"), [t("rⁿ(cos φⁿ + i sin φⁿ)", "rⁿ(cos φⁿ + i sin φⁿ)", "rⁿ(cos φⁿ + i sin φⁿ)"), t("r(cos nφ + i sin nφ)", "r(cos nφ + i sin nφ)", "r(cos nφ + i sin nφ)"), t("rⁿ(cos nφ + i sin nφ)", "rⁿ(cos nφ + i sin nφ)", "rⁿ(cos nφ + i sin nφ)")], 2),
        q(t("(1 + i)¹² equals…", "(1 + i)¹²-ը հավասար է…", "(1 + i)¹² равно…"), [t("64", "64", "64"), t("−64", "−64", "−64"), t("64i", "64i", "64i")], 1),
        q(t("The equation wⁿ = z (z ≠ 0) has…", "wⁿ = z (z ≠ 0) հավասարումն ունի…", "Уравнение wⁿ = z (z ≠ 0) имеет…"), [t("one solution", "մեկ լուծում", "одно решение"), t("n solutions", "n լուծում", "n решений"), t("two solutions", "երկու լուծում", "два решения")], 1),
      ],
    ),
    lesson(
      "quadratic-complex-roots",
      ["Quadratic equations with complex roots", "Քառակուսային հավասարումներ կոմպլեքս արմատներով", "Квадратные уравнения с комплексными корнями"],
      {
        en: ["Solve ax² + bx + c = 0 with negative discriminant and write the roots as conjugate complex numbers", "Use Vieta's theorem to check complex roots and to build a quadratic from them", "State the fundamental theorem of algebra and factor polynomials over ℂ"],
        hy: ["Լուծել ax² + bx + c = 0 հավասարումը բացասական դիսկրիմինանտի դեպքում և գրել արմատները որպես համալուծ կոմպլեքս թվեր", "Օգտվել Վիետի թեորեմից՝ կոմպլեքս արմատները ստուգելու և դրանցով քառակուսային հավասարում կազմելու համար", "Ձևակերպել հանրահաշվի հիմնական թեորեմը և վերլուծել բազմանդամներ ℂ-ում"],
        ru: ["Решать ax² + bx + c = 0 с отрицательным дискриминантом и записывать корни как сопряжённые комплексные числа", "Применять теорему Виета для проверки комплексных корней и составления уравнения по ним", "Формулировать основную теорему алгебры и раскладывать многочлены на множители над ℂ"],
      },
      {
        en: `## Negative discriminant

For $ax^2 + bx + c = 0$ with real coefficients and $D = b^2 - 4ac < 0$ there are no real roots. In $\\mathbb C$, however, $\\sqrt{D} = i\\sqrt{-D}$ makes sense, and the usual formula gives two roots:

$$x_{1,2} = \\frac{-b \\pm i\\sqrt{-D}}{2a}.$$

They are **complex conjugates** of each other.

**Example 1.** $x^2 - 4x + 13 = 0$: $D = 16 - 52 = -36$, $x_{1,2} = \\dfrac{4 \\pm 6i}{2} = 2 \\pm 3i$.

**Example 2.** $x^2 + x + 1 = 0$: $D = -3$, $x_{1,2} = \\dfrac{-1 \\pm i\\sqrt3}{2}$. These are the non-real cube roots of $1$: indeed $x^3 - 1 = (x - 1)(x^2 + x + 1)$.

**Example 3.** $2x^2 + 2x + 5 = 0$: $D = 4 - 40 = -36$, $x_{1,2} = \\dfrac{-2 \\pm 6i}{4} = -\\dfrac12 \\pm \\dfrac32 i$.

## Vieta's theorem still works

$$x_1 + x_2 = -\\frac ba, \\qquad x_1 x_2 = \\frac ca.$$

**Example 4.** Check Example 1: $(2 + 3i) + (2 - 3i) = 4$ ✓, $(2 + 3i)(2 - 3i) = 4 + 9 = 13$ ✓.

**Example 5.** Write a quadratic with real coefficients whose root is $1 - 2i$. The other root must be $1 + 2i$. Sum $2$, product $1 + 4 = 5$: $x^2 - 2x + 5 = 0$.

**Example 6.** For which real $p$ does $x^2 + px + 9 = 0$ have non-real roots? $D = p^2 - 36 < 0$, so $-6 < p < 6$.

## Complex coefficients

The formula works for complex coefficients too; the roots are then no longer conjugate.

**Example 7.** $x^2 - 2ix - 2 = 0$: $D = (2i)^2 + 8 = 4$, $x_{1,2} = \\dfrac{2i \\pm 2}{2} = i \\pm 1$. Roots $1 + i$ and $-1 + i$.

## The fundamental theorem of algebra

> Every polynomial of degree $n \\ge 1$ with complex coefficients has exactly $n$ complex roots, counted with multiplicity, and factors as $a_n(x - x_1)(x - x_2)\\cdots(x - x_n)$.

Over $\\mathbb R$ this means: every real polynomial factors into linear factors and quadratic factors with negative discriminant, because non-real roots come in conjugate pairs.

**Example 8.** $x^4 - 1 = (x - 1)(x + 1)(x^2 + 1) = (x - 1)(x + 1)(x - i)(x + i)$ over $\\mathbb C$.

**Example 9.** $x^3 + 8 = (x + 2)(x^2 - 2x + 4)$; the quadratic has roots $1 \\pm i\\sqrt3$, so over $\\mathbb C$: $(x + 2)(x - 1 - i\\sqrt3)(x - 1 + i\\sqrt3)$.

### Exercises

1. Solve $x^2 + 9 = 0$, $x^2 - 2x + 5 = 0$, $x^2 + 6x + 10 = 0$.
2. Solve $x^2 - x + 1 = 0$ and $4x^2 + 4x + 5 = 0$.
3. Solve $x^2 + 2x + 2 = 0$ and check by Vieta's theorem.
4. Write a quadratic with real coefficients having the root $3 + i$; the root $-2i$.
5. For which real $m$ does $x^2 - 6x + m = 0$ have non-real roots?
6. Solve $x^2 - (3 + i)x + (2 + 2i) = 0$.
7. Factor $x^4 - 16$ and $x^2 + 4$ over $\\mathbb C$.
8. Factor $x^3 - 1$ over $\\mathbb C$.

### Answers

1. $\\pm 3i$; $1 \\pm 2i$; $-3 \\pm i$. 2. $\\dfrac{1 \\pm i\\sqrt3}{2}$; $-\\dfrac12 \\pm i$. 3. $-1 \\pm i$; sum $-2$, product $2$ ✓. 4. $x^2 - 6x + 10 = 0$; $x^2 + 4 = 0$. 5. $36 - 4m < 0$, $m > 9$. 6. $D = (3 + i)^2 - 4(2 + 2i) = 8 + 6i - 8 - 8i = -2i$, $\\sqrt{-2i} = 1 - i$; $x = \\dfrac{3 + i \\pm (1 - i)}{2}$: $x = 2$ or $x = 1 + i$. 7. $(x - 2)(x + 2)(x - 2i)(x + 2i)$; $(x - 2i)(x + 2i)$. 8. $(x - 1)\\left(x - \\dfrac{-1 + i\\sqrt3}{2}\\right)\\left(x - \\dfrac{-1 - i\\sqrt3}{2}\\right)$.`,
        hy: `## Բացասական դիսկրիմինանտ

Իրական գործակիցներով $ax^2 + bx + c = 0$ հավասարման համար, երբ $D = b^2 - 4ac < 0$, իրական արմատներ չկան։ Սակայն $\\mathbb C$-ում $\\sqrt{D} = i\\sqrt{-D}$-ն իմաստ ունի, և սովորական բանաձևը տալիս է երկու արմատ․

$$x_{1,2} = \\frac{-b \\pm i\\sqrt{-D}}{2a}$$

Դրանք միմյանց **համալուծ կոմպլեքս թվեր** են։

**Օրինակ 1։** $x^2 - 4x + 13 = 0$․ $D = 16 - 52 = -36$, $x_{1,2} = \\dfrac{4 \\pm 6i}{2} = 2 \\pm 3i$։

**Օրինակ 2։** $x^2 + x + 1 = 0$․ $D = -3$, $x_{1,2} = \\dfrac{-1 \\pm i\\sqrt3}{2}$։ Սրանք $1$-ի ոչ իրական խորանարդ արմատներն են․ իսկապես, $x^3 - 1 = (x - 1)(x^2 + x + 1)$։

**Օրինակ 3։** $2x^2 + 2x + 5 = 0$․ $D = 4 - 40 = -36$, $x_{1,2} = \\dfrac{-2 \\pm 6i}{4} = -\\dfrac12 \\pm \\dfrac32 i$։

## Վիետի թեորեմը շարունակում է գործել

$$x_1 + x_2 = -\\frac ba, \\qquad x_1 x_2 = \\frac ca$$

**Օրինակ 4։** Ստուգենք Օրինակ 1-ը․ $(2 + 3i) + (2 - 3i) = 4$ ✓, $(2 + 3i)(2 - 3i) = 4 + 9 = 13$ ✓։

**Օրինակ 5։** Գրենք իրական գործակիցներով քառակուսային հավասարում, որի արմատը $1 - 2i$ է։ Մյուս արմատը պետք է լինի $1 + 2i$։ Գումարը՝ $2$, արտադրյալը՝ $1 + 4 = 5$․ $x^2 - 2x + 5 = 0$։

**Օրինակ 6։** Իրական $p$-ի ո՞ր արժեքների դեպքում $x^2 + px + 9 = 0$-ն ունի ոչ իրական արմատներ։ $D = p^2 - 36 < 0$, ուստի $-6 < p < 6$։

## Կոմպլեքս գործակիցներ

Բանաձևը գործում է նաև կոմպլեքս գործակիցների դեպքում, արմատներն այդ դեպքում այլևս համալուծ չեն։

**Օրինակ 7։** $x^2 - 2ix - 2 = 0$․ $D = (2i)^2 + 8 = 4$, $x_{1,2} = \\dfrac{2i \\pm 2}{2} = i \\pm 1$։ Արմատները՝ $1 + i$ և $-1 + i$։

## Հանրահաշվի հիմնական թեորեմը

> Կոմպլեքս գործակիցներով $n \\ge 1$ աստիճանի ցանկացած բազմանդամ ունի ճիշտ $n$ կոմպլեքս արմատ՝ հաշված պատիկությամբ, և վերլուծվում է $a_n(x - x_1)(x - x_2)\\cdots(x - x_n)$ տեսքով։

$\\mathbb R$-ի համար սա նշանակում է․ իրական բազմանդամը վերլուծվում է գծային արտադրիչների և բացասական դիսկրիմինանտով քառակուսային արտադրիչների, քանի որ ոչ իրական արմատները հանդես են գալիս համալուծ զույգերով։

**Օրինակ 8։** $x^4 - 1 = (x - 1)(x + 1)(x^2 + 1) = (x - 1)(x + 1)(x - i)(x + i)$՝ $\\mathbb C$-ում։

**Օրինակ 9։** $x^3 + 8 = (x + 2)(x^2 - 2x + 4)$, քառակուսային եռանդամի արմատները $1 \\pm i\\sqrt3$ են, ուստի $\\mathbb C$-ում՝ $(x + 2)(x - 1 - i\\sqrt3)(x - 1 + i\\sqrt3)$։

### Վարժություններ

1. Լուծեք $x^2 + 9 = 0$, $x^2 - 2x + 5 = 0$, $x^2 + 6x + 10 = 0$։
2. Լուծեք $x^2 - x + 1 = 0$ և $4x^2 + 4x + 5 = 0$։
3. Լուծեք $x^2 + 2x + 2 = 0$ և ստուգեք Վիետի թեորեմով։
4. Գրեք իրական գործակիցներով քառակուսային հավասարում, որն ունի $3 + i$ արմատ, ապա՝ $-2i$ արմատ։
5. Իրական $m$-ի ո՞ր արժեքների դեպքում $x^2 - 6x + m = 0$-ն ունի ոչ իրական արմատներ։
6. Լուծեք $x^2 - (3 + i)x + (2 + 2i) = 0$։
7. Վերլուծեք $x^4 - 16$-ը և $x^2 + 4$-ը $\\mathbb C$-ում։
8. Վերլուծեք $x^3 - 1$-ը $\\mathbb C$-ում։

### Պատասխաններ

1. $\\pm 3i$, $1 \\pm 2i$, $-3 \\pm i$։ 2. $\\dfrac{1 \\pm i\\sqrt3}{2}$, $-\\dfrac12 \\pm i$։ 3. $-1 \\pm i$, գումարը՝ $-2$, արտադրյալը՝ $2$ ✓։ 4. $x^2 - 6x + 10 = 0$, $x^2 + 4 = 0$։ 5. $36 - 4m < 0$, $m > 9$։ 6. $D = (3 + i)^2 - 4(2 + 2i) = 8 + 6i - 8 - 8i = -2i$, $\\sqrt{-2i} = 1 - i$, $x = \\dfrac{3 + i \\pm (1 - i)}{2}$՝ $x = 2$ կամ $x = 1 + i$։ 7. $(x - 2)(x + 2)(x - 2i)(x + 2i)$, $(x - 2i)(x + 2i)$։ 8. $(x - 1)\\left(x - \\dfrac{-1 + i\\sqrt3}{2}\\right)\\left(x - \\dfrac{-1 - i\\sqrt3}{2}\\right)$։`,
        ru: `## Отрицательный дискриминант

Для $ax^2 + bx + c = 0$ с действительными коэффициентами при $D = b^2 - 4ac < 0$ действительных корней нет. Но в $\\mathbb C$ выражение $\\sqrt{D} = i\\sqrt{-D}$ имеет смысл, и обычная формула даёт два корня:

$$x_{1,2} = \\frac{-b \\pm i\\sqrt{-D}}{2a}.$$

Они **комплексно сопряжены** друг другу.

**Пример 1.** $x^2 - 4x + 13 = 0$: $D = 16 - 52 = -36$, $x_{1,2} = \\dfrac{4 \\pm 6i}{2} = 2 \\pm 3i$.

**Пример 2.** $x^2 + x + 1 = 0$: $D = -3$, $x_{1,2} = \\dfrac{-1 \\pm i\\sqrt3}{2}$. Это недействительные кубические корни из $1$: действительно, $x^3 - 1 = (x - 1)(x^2 + x + 1)$.

**Пример 3.** $2x^2 + 2x + 5 = 0$: $D = 4 - 40 = -36$, $x_{1,2} = \\dfrac{-2 \\pm 6i}{4} = -\\dfrac12 \\pm \\dfrac32 i$.

## Теорема Виета по-прежнему работает

$$x_1 + x_2 = -\\frac ba, \\qquad x_1 x_2 = \\frac ca.$$

**Пример 4.** Проверим Пример 1: $(2 + 3i) + (2 - 3i) = 4$ ✓, $(2 + 3i)(2 - 3i) = 4 + 9 = 13$ ✓.

**Пример 5.** Составим квадратное уравнение с действительными коэффициентами, корень которого $1 - 2i$. Второй корень должен быть $1 + 2i$. Сумма $2$, произведение $1 + 4 = 5$: $x^2 - 2x + 5 = 0$.

**Пример 6.** При каких действительных $p$ уравнение $x^2 + px + 9 = 0$ имеет недействительные корни? $D = p^2 - 36 < 0$, значит $-6 < p < 6$.

## Комплексные коэффициенты

Формула работает и для комплексных коэффициентов; корни тогда уже не сопряжены.

**Пример 7.** $x^2 - 2ix - 2 = 0$: $D = (2i)^2 + 8 = 4$, $x_{1,2} = \\dfrac{2i \\pm 2}{2} = i \\pm 1$. Корни $1 + i$ и $-1 + i$.

## Основная теорема алгебры

> Любой многочлен степени $n \\ge 1$ с комплексными коэффициентами имеет ровно $n$ комплексных корней с учётом кратности и раскладывается в виде $a_n(x - x_1)(x - x_2)\\cdots(x - x_n)$.

Для $\\mathbb R$ это означает: любой действительный многочлен раскладывается на линейные множители и квадратные множители с отрицательным дискриминантом, так как недействительные корни идут сопряжёнными парами.

**Пример 8.** $x^4 - 1 = (x - 1)(x + 1)(x^2 + 1) = (x - 1)(x + 1)(x - i)(x + i)$ над $\\mathbb C$.

**Пример 9.** $x^3 + 8 = (x + 2)(x^2 - 2x + 4)$; корни квадратного трёхчлена $1 \\pm i\\sqrt3$, поэтому над $\\mathbb C$: $(x + 2)(x - 1 - i\\sqrt3)(x - 1 + i\\sqrt3)$.

### Упражнения

1. Решите $x^2 + 9 = 0$, $x^2 - 2x + 5 = 0$, $x^2 + 6x + 10 = 0$.
2. Решите $x^2 - x + 1 = 0$ и $4x^2 + 4x + 5 = 0$.
3. Решите $x^2 + 2x + 2 = 0$ и проверьте по теореме Виета.
4. Составьте квадратное уравнение с действительными коэффициентами с корнем $3 + i$; с корнем $-2i$.
5. При каких действительных $m$ уравнение $x^2 - 6x + m = 0$ имеет недействительные корни?
6. Решите $x^2 - (3 + i)x + (2 + 2i) = 0$.
7. Разложите $x^4 - 16$ и $x^2 + 4$ на множители над $\\mathbb C$.
8. Разложите $x^3 - 1$ на множители над $\\mathbb C$.

### Ответы

1. $\\pm 3i$; $1 \\pm 2i$; $-3 \\pm i$. 2. $\\dfrac{1 \\pm i\\sqrt3}{2}$; $-\\dfrac12 \\pm i$. 3. $-1 \\pm i$; сумма $-2$, произведение $2$ ✓. 4. $x^2 - 6x + 10 = 0$; $x^2 + 4 = 0$. 5. $36 - 4m < 0$, $m > 9$. 6. $D = (3 + i)^2 - 4(2 + 2i) = 8 + 6i - 8 - 8i = -2i$, $\\sqrt{-2i} = 1 - i$; $x = \\dfrac{3 + i \\pm (1 - i)}{2}$: $x = 2$ или $x = 1 + i$. 7. $(x - 2)(x + 2)(x - 2i)(x + 2i)$; $(x - 2i)(x + 2i)$. 8. $(x - 1)\\left(x - \\dfrac{-1 + i\\sqrt3}{2}\\right)\\left(x - \\dfrac{-1 - i\\sqrt3}{2}\\right)$.`,
      },
      [
        q(t("For real coefficients and D < 0 the roots are…", "Իրական գործակիցների և D < 0 դեպքում արմատները…", "При действительных коэффициентах и D < 0 корни…"), [t("two equal real numbers", "երկու հավասար իրական թիվ", "два равных действительных числа"), t("complex conjugates", "համալուծ կոմպլեքս թվեր", "комплексно сопряжённые"), t("purely imaginary always", "միշտ զուտ կեղծ", "всегда чисто мнимые")], 1),
        q(t("The roots of x² − 4x + 13 = 0 are…", "x² − 4x + 13 = 0-ի արմատները…", "Корни x² − 4x + 13 = 0 —"), [t("2 ± 3i", "2 ± 3i", "2 ± 3i"), t("−2 ± 3i", "−2 ± 3i", "−2 ± 3i"), t("4 ± 6i", "4 ± 6i", "4 ± 6i")], 0),
        q(t("If 1 − 2i is a root of a real quadratic, the other root is…", "Եթե 1 − 2i-ն իրական քառակուսային հավասարման արմատ է, մյուս արմատը…", "Если 1 − 2i — корень квадратного уравнения с действительными коэффициентами, второй корень —"), [t("−1 + 2i", "−1 + 2i", "−1 + 2i"), t("1 + 2i", "1 + 2i", "1 + 2i"), t("2 − i", "2 − i", "2 − i")], 1),
        q(t("x² + px + 9 = 0 has non-real roots when…", "x² + px + 9 = 0-ն ունի ոչ իրական արմատներ, երբ…", "x² + px + 9 = 0 имеет недействительные корни при…"), [t("|p| < 6", "|p| < 6", "|p| < 6"), t("|p| > 6", "|p| > 6", "|p| > 6"), t("p < 0", "p < 0", "p < 0")], 0),
        q(t("A polynomial of degree n over ℂ has…", "n աստիճանի բազմանդամը ℂ-ում ունի…", "Многочлен степени n над ℂ имеет…"), [t("at most n − 1 roots", "առավելագույնը n − 1 արմատ", "не более n − 1 корня"), t("exactly n roots with multiplicity", "ճիշտ n արմատ՝ պատիկությամբ", "ровно n корней с учётом кратности"), t("infinitely many roots", "անվերջ շատ արմատ", "бесконечно много корней")], 1),
        q(t("x² + 1 over ℂ factors as…", "x² + 1-ը ℂ-ում վերլուծվում է…", "x² + 1 над ℂ раскладывается как…"), [t("(x − 1)(x + 1)", "(x − 1)(x + 1)", "(x − 1)(x + 1)"), t("(x − i)(x + i)", "(x − i)(x + i)", "(x − i)(x + i)"), t("(x + i)²", "(x + i)²", "(x + i)²")], 1),
      ],
    ),
  ],
};
