import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit5: UnitSeed = {
  title: t("Exam preparation", "Քննության նախապատրաստություն", "Подготовка к экзамену"),
  summary: t("Systematic review of all topics with mixed problem sets.", "Բոլոր թեմաների համակարգված ամփոփում խառը խնդիրներով։", "Системное повторение всех тем со смешанными наборами задач."),
  lessons: [
    lesson(
      "review-expressions",
      ["Review: expressions and transformations", "Ամփոփում․ արտահայտություններ և ձևափոխություններ", "Повторение: выражения и преобразования"],
      {
        en: ["Simplify expressions with powers, roots and logarithms using the basic laws", "Transform algebraic fractions and rationalize denominators", "Apply trigonometric identities to simplify and evaluate expressions"],
        hy: ["Պարզեցնել աստիճաններով, արմատներով և լոգարիթմներով արտահայտությունները հիմնական օրենքներով", "Ձևափոխել հանրահաշվական կոտորակները և ազատվել հայտարարի իռացիոնալությունից", "Կիրառել եռանկյունաչափական նույնություններն արտահայտություններ պարզեցնելու և հաշվելու համար"],
        ru: ["Упрощать выражения со степенями, корнями и логарифмами по основным законам", "Преобразовывать алгебраические дроби и избавляться от иррациональности в знаменателе", "Применять тригонометрические тождества для упрощения и вычисления выражений"],
      },
      {
        en: `## What the exam asks

Almost every exam paper opens with a "simplify" or "evaluate" task. Nothing new is needed: the laws of powers, roots, logarithms and the trigonometric identities from grades 7 to 11. What matters is choosing the right law quickly and avoiding sign and domain slips.

## Powers and roots

$$a^m a^n = a^{m+n},\\quad \\dfrac{a^m}{a^n} = a^{m-n},\\quad (a^m)^n = a^{mn},\\quad a^{-n} = \\dfrac{1}{a^n},\\quad a^{m/n} = \\sqrt[n]{a^m}.$$

**Example 1.** $\\dfrac{8^{2/3} \\cdot 4^{-1/2}}{2^{-2}} = \\dfrac{4 \\cdot \\frac12}{\\frac14} = 8$. Convert everything to base $2$ if in doubt: $2^{2} \\cdot 2^{-1} \\cdot 2^{2} = 2^3$.

**Example 2.** $\\sqrt{50} - \\sqrt{18} + \\sqrt{8} = 5\\sqrt2 - 3\\sqrt2 + 2\\sqrt2 = 4\\sqrt2$.

**Example 3.** $\\sqrt{(1 - \\sqrt3)^2} = \\lvert 1 - \\sqrt3\\rvert = \\sqrt3 - 1$, because $\\sqrt{x^2} = \\lvert x\\rvert$, not $x$.

**Example 4.** Rationalize: $\\dfrac{6}{\\sqrt7 - 2} = \\dfrac{6(\\sqrt7 + 2)}{7 - 4} = 2(\\sqrt7 + 2)$.

## Algebraic fractions

Factor first, then cancel. Common patterns: $a^2 - b^2 = (a-b)(a+b)$, $a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)$, $a^2 \\pm 2ab + b^2 = (a \\pm b)^2$.

**Example 5.** $\\dfrac{x^2 - 9}{x^2 - 6x + 9} \\cdot \\dfrac{x - 3}{x + 3} = \\dfrac{(x-3)(x+3)}{(x-3)^2} \\cdot \\dfrac{x-3}{x+3} = 1$ for $x \\ne \\pm 3$.

**Example 6.** $\\dfrac{1}{x - 1} - \\dfrac{2}{x^2 - 1} = \\dfrac{x + 1 - 2}{(x-1)(x+1)} = \\dfrac{x - 1}{(x-1)(x+1)} = \\dfrac{1}{x + 1}$, $x \\ne \\pm1$.

**Example 7.** $\\dfrac{a^3 - 8}{a - 2} = a^2 + 2a + 4$ (sum of the geometric series or the cube difference formula).

## Logarithms

$$\\log_a (xy) = \\log_a x + \\log_a y,\\quad \\log_a \\dfrac{x}{y} = \\log_a x - \\log_a y,\\quad \\log_a x^p = p\\log_a x,\\quad \\log_a b = \\dfrac{\\ln b}{\\ln a},\\quad a^{\\log_a b} = b.$$

**Example 8.** $\\log_2 48 - \\log_2 3 = \\log_2 16 = 4$.

**Example 9.** $\\log_5 \\sqrt{125} + 25^{\\log_5 2} = \\dfrac32 + (5^{\\log_5 2})^2 = \\dfrac32 + 4 = 5{,}5$.

**Example 10.** $\\log_3 2 \\cdot \\log_4 27 = \\dfrac{\\ln 2}{\\ln 3} \\cdot \\dfrac{3\\ln 3}{2\\ln 2} = \\dfrac32$.

## Trigonometry

Key identities: $\\sin^2\\alpha + \\cos^2\\alpha = 1$, $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha}$, $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$, $\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha = 1 - 2\\sin^2\\alpha = 2\\cos^2\\alpha - 1$, and the reduction formulas.

**Example 11.** $\\dfrac{\\sin 2\\alpha}{1 + \\cos 2\\alpha} = \\dfrac{2\\sin\\alpha\\cos\\alpha}{2\\cos^2\\alpha} = \\tan\\alpha$.

**Example 12.** If $\\sin\\alpha = \\dfrac35$ and $\\dfrac{\\pi}{2} < \\alpha < \\pi$, then $\\cos\\alpha = -\\dfrac45$ (second quadrant), $\\tan\\alpha = -\\dfrac34$, $\\sin 2\\alpha = 2 \\cdot \\dfrac35 \\cdot \\left(-\\dfrac45\\right) = -\\dfrac{24}{25}$.

**Example 13.** $\\cos 75^\\circ \\cos 15^\\circ = \\dfrac12\\left(\\cos 90^\\circ + \\cos 60^\\circ\\right) = \\dfrac12 \\cdot \\dfrac12 = \\dfrac14$.

**Example 14.** $\\sin\\left(\\dfrac{3\\pi}{2} - \\alpha\\right) + \\cos(\\pi + \\alpha) = -\\cos\\alpha - \\cos\\alpha = -2\\cos\\alpha$.

## Common traps

- $\\sqrt{a^2} = \\lvert a\\rvert$ and $\\log_a x^2 = 2\\log_a \\lvert x\\rvert$.
- $\\log_a (x + y) \\ne \\log_a x + \\log_a y$ and $\\sqrt{x + y} \\ne \\sqrt x + \\sqrt y$.
- When cancelling, note the excluded values: in Example 5 the answer $1$ is valid only for $x \\ne \\pm 3$.
- The sign of a trigonometric value depends on the quadrant, so always check which quadrant the angle lies in.

### Exercises

1. Evaluate $\\dfrac{27^{2/3} \\cdot 9^{-1/2}}{3^{-1}}$.
2. Simplify $\\sqrt{72} - \\sqrt{32} + \\sqrt{(2 - \\sqrt5)^2}$.
3. Rationalize $\\dfrac{10}{\\sqrt{11} + 1}$.
4. Simplify $\\dfrac{x^2 - 4}{x^2 + 4x + 4} : \\dfrac{x - 2}{x^2 - 2x}$ and state the excluded values.
5. Simplify $\\dfrac{2}{x + 3} + \\dfrac{x - 9}{x^2 - 9}$.
6. Evaluate $\\log_6 9 + \\log_6 4$, $\\log_2 5 \\cdot \\log_5 8$ and $49^{\\log_7 3}$.
7. Given $\\cos\\alpha = -\\dfrac{5}{13}$, $\\pi < \\alpha < \\dfrac{3\\pi}{2}$, find $\\sin\\alpha$, $\\tan\\alpha$ and $\\cos 2\\alpha$.
8. Simplify $\\dfrac{1 - \\cos 2\\alpha}{\\sin 2\\alpha}$ and $\\sin(\\pi - \\alpha)\\cos\\left(\\dfrac{\\pi}{2} + \\alpha\\right)$.

### Answers

1. $\\dfrac{9 \\cdot \\frac13}{\\frac13} = 9$. 2. $6\\sqrt2 - 4\\sqrt2 + (\\sqrt5 - 2) = 2\\sqrt2 + \\sqrt5 - 2$. 3. $\\dfrac{10(\\sqrt{11} - 1)}{10} = \\sqrt{11} - 1$. 4. $\\dfrac{(x-2)(x+2)}{(x+2)^2} \\cdot \\dfrac{x(x-2)}{x-2} = \\dfrac{x(x-2)}{x+2}$; $x \\ne 0, \\pm2$. 5. $\\dfrac{2(x-3) + x - 9}{(x-3)(x+3)} = \\dfrac{3x - 15}{(x-3)(x+3)} = \\dfrac{3(x-5)}{x^2 - 9}$. 6. $\\log_6 36 = 2$; $\\log_2 8 = 3$; $(7^{\\log_7 3})^2 = 9$. 7. Third quadrant: $\\sin\\alpha = -\\dfrac{12}{13}$, $\\tan\\alpha = \\dfrac{12}{5}$, $\\cos 2\\alpha = 2 \\cdot \\dfrac{25}{169} - 1 = -\\dfrac{119}{169}$. 8. $\\dfrac{2\\sin^2\\alpha}{2\\sin\\alpha\\cos\\alpha} = \\tan\\alpha$; $\\sin\\alpha \\cdot (-\\sin\\alpha) = -\\sin^2\\alpha$.`,
        hy: `## Ի՞նչ է հարցնում քննությունը

Գրեթե յուրաքանչյուր քննական աշխատանք սկսվում է «պարզեցրեք» կամ «հաշվեք» առաջադրանքով։ Նոր բան պետք չէ․ աստիճանների, արմատների, լոգարիթմների օրենքները և եռանկյունաչափական նույնությունները 7-11-րդ դասարաններից։ Կարևորը ճիշտ օրենքն արագ ընտրելն է և նշանի ու որոշման տիրույթի սխալներից խուսափելը։

## Աստիճաններ և արմատներ

$$a^m a^n = a^{m+n},\\quad \\dfrac{a^m}{a^n} = a^{m-n},\\quad (a^m)^n = a^{mn},\\quad a^{-n} = \\dfrac{1}{a^n},\\quad a^{m/n} = \\sqrt[n]{a^m}.$$

**Օրինակ 1։** $\\dfrac{8^{2/3} \\cdot 4^{-1/2}}{2^{-2}} = \\dfrac{4 \\cdot \\frac12}{\\frac14} = 8$։ Կասկածի դեպքում ամեն ինչ բերեք $2$ հիմքի․ $2^{2} \\cdot 2^{-1} \\cdot 2^{2} = 2^3$։

**Օրինակ 2։** $\\sqrt{50} - \\sqrt{18} + \\sqrt{8} = 5\\sqrt2 - 3\\sqrt2 + 2\\sqrt2 = 4\\sqrt2$։

**Օրինակ 3։** $\\sqrt{(1 - \\sqrt3)^2} = \\lvert 1 - \\sqrt3\\rvert = \\sqrt3 - 1$, քանի որ $\\sqrt{x^2} = \\lvert x\\rvert$, ոչ թե $x$։

**Օրինակ 4։** Ազատվենք հայտարարի իռացիոնալությունից․ $\\dfrac{6}{\\sqrt7 - 2} = \\dfrac{6(\\sqrt7 + 2)}{7 - 4} = 2(\\sqrt7 + 2)$։

## Հանրահաշվական կոտորակներ

Սկզբում վերլուծեք արտադրիչների, հետո կրճատեք։ Հիմնական բանաձևեր․ $a^2 - b^2 = (a-b)(a+b)$, $a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)$, $a^2 \\pm 2ab + b^2 = (a \\pm b)^2$։

**Օրինակ 5։** $\\dfrac{x^2 - 9}{x^2 - 6x + 9} \\cdot \\dfrac{x - 3}{x + 3} = \\dfrac{(x-3)(x+3)}{(x-3)^2} \\cdot \\dfrac{x-3}{x+3} = 1$, երբ $x \\ne \\pm 3$։

**Օրինակ 6։** $\\dfrac{1}{x - 1} - \\dfrac{2}{x^2 - 1} = \\dfrac{x + 1 - 2}{(x-1)(x+1)} = \\dfrac{x - 1}{(x-1)(x+1)} = \\dfrac{1}{x + 1}$, $x \\ne \\pm1$։

**Օրինակ 7։** $\\dfrac{a^3 - 8}{a - 2} = a^2 + 2a + 4$ (խորանարդների տարբերության բանաձևով)։

## Լոգարիթմներ

$$\\log_a (xy) = \\log_a x + \\log_a y,\\quad \\log_a \\dfrac{x}{y} = \\log_a x - \\log_a y,\\quad \\log_a x^p = p\\log_a x,\\quad \\log_a b = \\dfrac{\\ln b}{\\ln a},\\quad a^{\\log_a b} = b.$$

**Օրինակ 8։** $\\log_2 48 - \\log_2 3 = \\log_2 16 = 4$։

**Օրինակ 9։** $\\log_5 \\sqrt{125} + 25^{\\log_5 2} = \\dfrac32 + (5^{\\log_5 2})^2 = \\dfrac32 + 4 = 5{,}5$։

**Օրինակ 10։** $\\log_3 2 \\cdot \\log_4 27 = \\dfrac{\\ln 2}{\\ln 3} \\cdot \\dfrac{3\\ln 3}{2\\ln 2} = \\dfrac32$։

## Եռանկյունաչափություն

Հիմնական նույնություններ․ $\\sin^2\\alpha + \\cos^2\\alpha = 1$, $\\operatorname{tg}\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha}$, $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$, $\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha = 1 - 2\\sin^2\\alpha = 2\\cos^2\\alpha - 1$ և բերման բանաձևերը։

**Օրինակ 11։** $\\dfrac{\\sin 2\\alpha}{1 + \\cos 2\\alpha} = \\dfrac{2\\sin\\alpha\\cos\\alpha}{2\\cos^2\\alpha} = \\operatorname{tg}\\alpha$։

**Օրինակ 12։** Եթե $\\sin\\alpha = \\dfrac35$ և $\\dfrac{\\pi}{2} < \\alpha < \\pi$, ապա $\\cos\\alpha = -\\dfrac45$ (երկրորդ քառորդ), $\\operatorname{tg}\\alpha = -\\dfrac34$, $\\sin 2\\alpha = 2 \\cdot \\dfrac35 \\cdot \\left(-\\dfrac45\\right) = -\\dfrac{24}{25}$։

**Օրինակ 13։** $\\cos 75^\\circ \\cos 15^\\circ = \\dfrac12\\left(\\cos 90^\\circ + \\cos 60^\\circ\\right) = \\dfrac12 \\cdot \\dfrac12 = \\dfrac14$։

**Օրինակ 14։** $\\sin\\left(\\dfrac{3\\pi}{2} - \\alpha\\right) + \\cos(\\pi + \\alpha) = -\\cos\\alpha - \\cos\\alpha = -2\\cos\\alpha$։

## Տարածված սխալներ

- $\\sqrt{a^2} = \\lvert a\\rvert$ և $\\log_a x^2 = 2\\log_a \\lvert x\\rvert$։
- $\\log_a (x + y) \\ne \\log_a x + \\log_a y$ և $\\sqrt{x + y} \\ne \\sqrt x + \\sqrt y$։
- Կրճատելիս նշեք բացառված արժեքները․ 5-րդ օրինակում $1$ պատասխանը ճիշտ է միայն $x \\ne \\pm 3$ դեպքում։
- Եռանկյունաչափական արժեքի նշանը կախված է քառորդից, ուստի միշտ ստուգեք, թե որ քառորդում է անկյունը։

### Վարժություններ

1. Հաշվեք $\\dfrac{27^{2/3} \\cdot 9^{-1/2}}{3^{-1}}$։
2. Պարզեցրեք $\\sqrt{72} - \\sqrt{32} + \\sqrt{(2 - \\sqrt5)^2}$։
3. Ազատվեք հայտարարի իռացիոնալությունից․ $\\dfrac{10}{\\sqrt{11} + 1}$։
4. Պարզեցրեք $\\dfrac{x^2 - 4}{x^2 + 4x + 4} : \\dfrac{x - 2}{x^2 - 2x}$ և նշեք բացառված արժեքները։
5. Պարզեցրեք $\\dfrac{2}{x + 3} + \\dfrac{x - 9}{x^2 - 9}$։
6. Հաշվեք $\\log_6 9 + \\log_6 4$, $\\log_2 5 \\cdot \\log_5 8$ և $49^{\\log_7 3}$։
7. Տրված է $\\cos\\alpha = -\\dfrac{5}{13}$, $\\pi < \\alpha < \\dfrac{3\\pi}{2}$։ Գտեք $\\sin\\alpha$, $\\operatorname{tg}\\alpha$ և $\\cos 2\\alpha$։
8. Պարզեցրեք $\\dfrac{1 - \\cos 2\\alpha}{\\sin 2\\alpha}$ և $\\sin(\\pi - \\alpha)\\cos\\left(\\dfrac{\\pi}{2} + \\alpha\\right)$։

### Պատասխաններ

1. $\\dfrac{9 \\cdot \\frac13}{\\frac13} = 9$։ 2. $6\\sqrt2 - 4\\sqrt2 + (\\sqrt5 - 2) = 2\\sqrt2 + \\sqrt5 - 2$։ 3. $\\dfrac{10(\\sqrt{11} - 1)}{10} = \\sqrt{11} - 1$։ 4. $\\dfrac{(x-2)(x+2)}{(x+2)^2} \\cdot \\dfrac{x(x-2)}{x-2} = \\dfrac{x(x-2)}{x+2}$, $x \\ne 0, \\pm2$։ 5. $\\dfrac{2(x-3) + x - 9}{(x-3)(x+3)} = \\dfrac{3x - 15}{(x-3)(x+3)} = \\dfrac{3(x-5)}{x^2 - 9}$։ 6. $\\log_6 36 = 2$, $\\log_2 8 = 3$, $(7^{\\log_7 3})^2 = 9$։ 7. Երրորդ քառորդ․ $\\sin\\alpha = -\\dfrac{12}{13}$, $\\operatorname{tg}\\alpha = \\dfrac{12}{5}$, $\\cos 2\\alpha = 2 \\cdot \\dfrac{25}{169} - 1 = -\\dfrac{119}{169}$։ 8. $\\dfrac{2\\sin^2\\alpha}{2\\sin\\alpha\\cos\\alpha} = \\operatorname{tg}\\alpha$, $\\sin\\alpha \\cdot (-\\sin\\alpha) = -\\sin^2\\alpha$։`,
        ru: `## Что спрашивает экзамен

Почти каждая экзаменационная работа начинается с задания «упростите» или «вычислите». Ничего нового не нужно: законы степеней, корней, логарифмов и тригонометрические тождества из 7-11 классов. Важно быстро выбрать нужный закон и не ошибиться в знаке и области определения.

## Степени и корни

$$a^m a^n = a^{m+n},\\quad \\dfrac{a^m}{a^n} = a^{m-n},\\quad (a^m)^n = a^{mn},\\quad a^{-n} = \\dfrac{1}{a^n},\\quad a^{m/n} = \\sqrt[n]{a^m}.$$

**Пример 1.** $\\dfrac{8^{2/3} \\cdot 4^{-1/2}}{2^{-2}} = \\dfrac{4 \\cdot \\frac12}{\\frac14} = 8$. Если сомневаетесь, приведите всё к основанию $2$: $2^{2} \\cdot 2^{-1} \\cdot 2^{2} = 2^3$.

**Пример 2.** $\\sqrt{50} - \\sqrt{18} + \\sqrt{8} = 5\\sqrt2 - 3\\sqrt2 + 2\\sqrt2 = 4\\sqrt2$.

**Пример 3.** $\\sqrt{(1 - \\sqrt3)^2} = \\lvert 1 - \\sqrt3\\rvert = \\sqrt3 - 1$, потому что $\\sqrt{x^2} = \\lvert x\\rvert$, а не $x$.

**Пример 4.** Избавимся от иррациональности: $\\dfrac{6}{\\sqrt7 - 2} = \\dfrac{6(\\sqrt7 + 2)}{7 - 4} = 2(\\sqrt7 + 2)$.

## Алгебраические дроби

Сначала разложите на множители, потом сокращайте. Основные формулы: $a^2 - b^2 = (a-b)(a+b)$, $a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)$, $a^2 \\pm 2ab + b^2 = (a \\pm b)^2$.

**Пример 5.** $\\dfrac{x^2 - 9}{x^2 - 6x + 9} \\cdot \\dfrac{x - 3}{x + 3} = \\dfrac{(x-3)(x+3)}{(x-3)^2} \\cdot \\dfrac{x-3}{x+3} = 1$ при $x \\ne \\pm 3$.

**Пример 6.** $\\dfrac{1}{x - 1} - \\dfrac{2}{x^2 - 1} = \\dfrac{x + 1 - 2}{(x-1)(x+1)} = \\dfrac{x - 1}{(x-1)(x+1)} = \\dfrac{1}{x + 1}$, $x \\ne \\pm1$.

**Пример 7.** $\\dfrac{a^3 - 8}{a - 2} = a^2 + 2a + 4$ (формула разности кубов).

## Логарифмы

$$\\log_a (xy) = \\log_a x + \\log_a y,\\quad \\log_a \\dfrac{x}{y} = \\log_a x - \\log_a y,\\quad \\log_a x^p = p\\log_a x,\\quad \\log_a b = \\dfrac{\\ln b}{\\ln a},\\quad a^{\\log_a b} = b.$$

**Пример 8.** $\\log_2 48 - \\log_2 3 = \\log_2 16 = 4$.

**Пример 9.** $\\log_5 \\sqrt{125} + 25^{\\log_5 2} = \\dfrac32 + (5^{\\log_5 2})^2 = \\dfrac32 + 4 = 5{,}5$.

**Пример 10.** $\\log_3 2 \\cdot \\log_4 27 = \\dfrac{\\ln 2}{\\ln 3} \\cdot \\dfrac{3\\ln 3}{2\\ln 2} = \\dfrac32$.

## Тригонометрия

Основные тождества: $\\sin^2\\alpha + \\cos^2\\alpha = 1$, $\\operatorname{tg}\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha}$, $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$, $\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha = 1 - 2\\sin^2\\alpha = 2\\cos^2\\alpha - 1$ и формулы приведения.

**Пример 11.** $\\dfrac{\\sin 2\\alpha}{1 + \\cos 2\\alpha} = \\dfrac{2\\sin\\alpha\\cos\\alpha}{2\\cos^2\\alpha} = \\operatorname{tg}\\alpha$.

**Пример 12.** Если $\\sin\\alpha = \\dfrac35$ и $\\dfrac{\\pi}{2} < \\alpha < \\pi$, то $\\cos\\alpha = -\\dfrac45$ (вторая четверть), $\\operatorname{tg}\\alpha = -\\dfrac34$, $\\sin 2\\alpha = 2 \\cdot \\dfrac35 \\cdot \\left(-\\dfrac45\\right) = -\\dfrac{24}{25}$.

**Пример 13.** $\\cos 75^\\circ \\cos 15^\\circ = \\dfrac12\\left(\\cos 90^\\circ + \\cos 60^\\circ\\right) = \\dfrac12 \\cdot \\dfrac12 = \\dfrac14$.

**Пример 14.** $\\sin\\left(\\dfrac{3\\pi}{2} - \\alpha\\right) + \\cos(\\pi + \\alpha) = -\\cos\\alpha - \\cos\\alpha = -2\\cos\\alpha$.

## Типичные ловушки

- $\\sqrt{a^2} = \\lvert a\\rvert$ и $\\log_a x^2 = 2\\log_a \\lvert x\\rvert$.
- $\\log_a (x + y) \\ne \\log_a x + \\log_a y$ и $\\sqrt{x + y} \\ne \\sqrt x + \\sqrt y$.
- При сокращении указывайте исключённые значения: в примере 5 ответ $1$ верен только при $x \\ne \\pm 3$.
- Знак тригонометрической величины зависит от четверти, поэтому всегда проверяйте, в какой четверти лежит угол.

### Упражнения

1. Вычислите $\\dfrac{27^{2/3} \\cdot 9^{-1/2}}{3^{-1}}$.
2. Упростите $\\sqrt{72} - \\sqrt{32} + \\sqrt{(2 - \\sqrt5)^2}$.
3. Избавьтесь от иррациональности: $\\dfrac{10}{\\sqrt{11} + 1}$.
4. Упростите $\\dfrac{x^2 - 4}{x^2 + 4x + 4} : \\dfrac{x - 2}{x^2 - 2x}$ и укажите исключённые значения.
5. Упростите $\\dfrac{2}{x + 3} + \\dfrac{x - 9}{x^2 - 9}$.
6. Вычислите $\\log_6 9 + \\log_6 4$, $\\log_2 5 \\cdot \\log_5 8$ и $49^{\\log_7 3}$.
7. Дано $\\cos\\alpha = -\\dfrac{5}{13}$, $\\pi < \\alpha < \\dfrac{3\\pi}{2}$. Найдите $\\sin\\alpha$, $\\operatorname{tg}\\alpha$ и $\\cos 2\\alpha$.
8. Упростите $\\dfrac{1 - \\cos 2\\alpha}{\\sin 2\\alpha}$ и $\\sin(\\pi - \\alpha)\\cos\\left(\\dfrac{\\pi}{2} + \\alpha\\right)$.

### Ответы

1. $\\dfrac{9 \\cdot \\frac13}{\\frac13} = 9$. 2. $6\\sqrt2 - 4\\sqrt2 + (\\sqrt5 - 2) = 2\\sqrt2 + \\sqrt5 - 2$. 3. $\\dfrac{10(\\sqrt{11} - 1)}{10} = \\sqrt{11} - 1$. 4. $\\dfrac{(x-2)(x+2)}{(x+2)^2} \\cdot \\dfrac{x(x-2)}{x-2} = \\dfrac{x(x-2)}{x+2}$; $x \\ne 0, \\pm2$. 5. $\\dfrac{2(x-3) + x - 9}{(x-3)(x+3)} = \\dfrac{3x - 15}{(x-3)(x+3)} = \\dfrac{3(x-5)}{x^2 - 9}$. 6. $\\log_6 36 = 2$; $\\log_2 8 = 3$; $(7^{\\log_7 3})^2 = 9$. 7. Третья четверть: $\\sin\\alpha = -\\dfrac{12}{13}$, $\\operatorname{tg}\\alpha = \\dfrac{12}{5}$, $\\cos 2\\alpha = 2 \\cdot \\dfrac{25}{169} - 1 = -\\dfrac{119}{169}$. 8. $\\dfrac{2\\sin^2\\alpha}{2\\sin\\alpha\\cos\\alpha} = \\operatorname{tg}\\alpha$; $\\sin\\alpha \\cdot (-\\sin\\alpha) = -\\sin^2\\alpha$.`,
      },
      [
        q(t("√(a²) equals…", "√(a²) հավասար է…", "√(a²) равно…"), [t("a", "a", "a"), t("|a|", "|a|", "|a|"), t("±a", "±a", "±a")], 1),
        q(t("log₂ 48 − log₂ 3 = …", "log₂ 48 − log₂ 3 = …", "log₂ 48 − log₂ 3 = …"), [t("4", "4", "4"), t("16", "16", "16"), t("log₂ 45", "log₂ 45", "log₂ 45")], 0),
        q(t("8^(2/3) equals…", "8^(2/3) հավասար է…", "8^(2/3) равно…"), [t("4", "4", "4"), t("16/3", "16/3", "16/3"), t("2", "2", "2")], 0),
        q(t("(x² − 9)/(x − 3) simplifies to x + 3 for…", "(x² − 9)/(x − 3) = x + 3, երբ…", "(x² − 9)/(x − 3) = x + 3 при…"), [t("all x", "ցանկացած x", "всех x"), t("x ≠ 3", "x ≠ 3", "x ≠ 3"), t("x ≠ −3", "x ≠ −3", "x ≠ −3")], 1),
        q(t("If sin α = 3/5 and α is in the second quadrant, cos α = …", "Եթե sin α = 3/5 և α-ն երկրորդ քառորդում է, cos α = …", "Если sin α = 3/5 и α во второй четверти, cos α = …"), [t("4/5", "4/5", "4/5"), t("−4/5", "−4/5", "−4/5"), t("−3/5", "−3/5", "−3/5")], 1),
        q(t("sin 2α / (1 + cos 2α) equals…", "sin 2α / (1 + cos 2α) հավասար է…", "sin 2α / (1 + cos 2α) равно…"), [t("tan α", "tg α", "tg α"), t("cot α", "ctg α", "ctg α"), t("sin α", "sin α", "sin α")], 0),
      ],
    ),
    lesson(
      "review-equations",
      ["Review: equations and systems", "Ամփոփում․ հավասարումներ և համակարգեր", "Повторение: уравнения и системы"],
      {
        en: ["Solve polynomial, rational and irrational equations with full domain checks", "Solve exponential, logarithmic and trigonometric equations by reducing them to basic ones", "Solve systems of two equations by substitution, addition and change of variables"],
        hy: ["Լուծել բազմանդամային, ռացիոնալ և իռացիոնալ հավասարումներ՝ ստուգելով որոշման տիրույթը", "Լուծել ցուցչային, լոգարիթմական և եռանկյունաչափական հավասարումներ՝ բերելով դրանք պարզագույններին", "Լուծել երկու հավասարումների համակարգեր տեղադրման, գումարման և փոփոխականի փոխարինման եղանակներով"],
        ru: ["Решать многочленные, рациональные и иррациональные уравнения с проверкой области определения", "Решать показательные, логарифмические и тригонометрические уравнения сведением к простейшим", "Решать системы двух уравнений подстановкой, сложением и заменой переменных"],
      },
      {
        en: `## One strategy for all equations

Every equation type in the course is solved by the same three steps: **(1)** find the domain, **(2)** transform to a basic equation, **(3)** check the roots against the domain. Most lost exam points come from skipping step 1 or 3.

## Polynomial and rational equations

**Example 1.** $x^3 - 3x^2 - 4x + 12 = 0$. Group: $x^2(x - 3) - 4(x - 3) = (x - 3)(x^2 - 4) = 0$, so $x \\in \\{-2, 2, 3\\}$.

**Example 2.** $x^4 - 5x^2 + 4 = 0$. Put $u = x^2$: $u^2 - 5u + 4 = 0$, $u = 1$ or $u = 4$, hence $x = \\pm 1, \\pm 2$.

**Example 3.** $\\dfrac{x}{x - 2} + \\dfrac{1}{x + 2} = \\dfrac{8}{x^2 - 4}$. Domain: $x \\ne \\pm 2$. Multiply by $(x-2)(x+2)$: $x(x+2) + (x - 2) = 8$, $x^2 + 3x - 10 = 0$, $x = 2$ or $x = -5$. Reject $x = 2$. Answer: $x = -5$.

## Irrational equations

Isolate the root, square, and **check every root**, since squaring can introduce extraneous solutions.

**Example 4.** $\\sqrt{2x + 7} = x + 2$. Need $x + 2 \\ge 0$. Square: $2x + 7 = x^2 + 4x + 4$, $x^2 + 2x - 3 = 0$, $x = 1$ or $x = -3$. Reject $x = -3$ (right side negative). Answer: $x = 1$.

**Example 5.** $\\sqrt{x + 5} - \\sqrt{x} = 1$. Write $\\sqrt{x + 5} = 1 + \\sqrt x$, square: $x + 5 = 1 + 2\\sqrt x + x$, $\\sqrt x = 2$, $x = 4$. Check: $3 - 2 = 1$ ✓.

## Exponential and logarithmic equations

**Example 6.** $4^x - 3 \\cdot 2^x - 4 = 0$. With $u = 2^x > 0$: $u^2 - 3u - 4 = 0$, $u = 4$ (reject $u = -1$). So $2^x = 4$, $x = 2$.

**Example 7.** $\\log_3 (x + 2) + \\log_3 (x - 6) = 2$. Domain: $x > 6$. Then $(x+2)(x-6) = 9$, $x^2 - 4x - 21 = 0$, $x = 7$ or $x = -3$. Only $x = 7$ fits the domain.

**Example 8.** $\\log_2^2 x - 3\\log_2 x + 2 = 0$. With $u = \\log_2 x$: $u = 1$ or $u = 2$, so $x = 2$ or $x = 4$.

**Example 9.** $5^{x+1} = 3^x$. Take logarithms: $(x + 1)\\ln 5 = x\\ln 3$, $x(\\ln 5 - \\ln 3) = -\\ln 5$, $x = -\\dfrac{\\ln 5}{\\ln 5 - \\ln 3} = -\\dfrac{\\ln 5}{\\ln(5/3)}$.

## Trigonometric equations

**Example 10.** $2\\sin^2 x - \\sin x - 1 = 0$. With $u = \\sin x$: $u = 1$ or $u = -\\dfrac12$. So $x = \\dfrac{\\pi}{2} + 2\\pi n$ or $x = (-1)^{k+1}\\dfrac{\\pi}{6} + \\pi k$.

**Example 11.** $\\sin 2x = \\cos x$. $2\\sin x\\cos x - \\cos x = \\cos x(2\\sin x - 1) = 0$. So $\\cos x = 0$: $x = \\dfrac{\\pi}{2} + \\pi n$; or $\\sin x = \\dfrac12$: $x = (-1)^k\\dfrac{\\pi}{6} + \\pi k$.

**Example 12.** $\\sin x + \\sqrt3\\cos x = 1$. Divide by $2$: $\\sin\\left(x + \\dfrac{\\pi}{3}\\right) = \\dfrac12$, so $x + \\dfrac{\\pi}{3} = (-1)^k\\dfrac{\\pi}{6} + \\pi k$, $x = (-1)^k\\dfrac{\\pi}{6} - \\dfrac{\\pi}{3} + \\pi k$.

## Systems

**Example 13.** $\\begin{cases} x + y = 7 \\\\ xy = 12 \\end{cases}$. By Vieta, $x, y$ are the roots of $t^2 - 7t + 12 = 0$: $(3; 4)$ and $(4; 3)$.

**Example 14.** $\\begin{cases} x^2 + y^2 = 25 \\\\ x - y = 1 \\end{cases}$. Substitute $x = y + 1$: $2y^2 + 2y - 24 = 0$, $y = 3$ or $y = -4$. Solutions $(4; 3)$, $(-3; -4)$.

**Example 15.** $\\begin{cases} 2^x + 3^y = 11 \\\\ 2^{x+1} - 3^y = 1 \\end{cases}$. Add: $3 \\cdot 2^x = 12$, $2^x = 4$, $x = 2$; then $3^y = 7$, $y = \\log_3 7$.

### Exercises

1. Solve $x^3 + 2x^2 - 9x - 18 = 0$.
2. Solve $x^4 - 13x^2 + 36 = 0$.
3. Solve $\\dfrac{3}{x - 1} - \\dfrac{2}{x + 1} = \\dfrac{4}{x^2 - 1}$.
4. Solve $\\sqrt{3x + 4} = x$ and $\\sqrt{x + 7} + \\sqrt{x} = 7$.
5. Solve $9^x - 10 \\cdot 3^x + 9 = 0$ and $2^{x} = 7^{x - 1}$.
6. Solve $\\log_2 (x - 1) + \\log_2 (x + 2) = 2$ and $\\lg^2 x - \\lg x - 2 = 0$.
7. Solve $2\\cos^2 x + 3\\cos x - 2 = 0$ and $\\sin 2x = \\sqrt3\\sin x$.
8. Solve the systems $\\begin{cases} x + y = 5 \\\\ x^2 + y^2 = 13 \\end{cases}$ and $\\begin{cases} \\log_2 x + \\log_2 y = 3 \\\\ x - y = 2 \\end{cases}$.

### Answers

1. $(x + 2)(x^2 - 9) = 0$: $x \\in \\{-3, -2, 3\\}$. 2. $x^2 = 4$ or $9$: $x = \\pm 2, \\pm 3$. 3. $3(x+1) - 2(x-1) = 4$, $x = -1$, rejected by the domain: no solutions. 4. $x^2 - 3x - 4 = 0$, $x = 4$ ($x = -1$ rejected); $\\sqrt{x + 7} = 7 - \\sqrt x$, $x + 7 = 49 - 14\\sqrt x + x$, $\\sqrt x = 3$, $x = 9$. 5. $3^x = 1$ or $9$: $x = 0$ or $2$; $x\\ln 2 = (x - 1)\\ln 7$, $x = \\dfrac{\\ln 7}{\\ln 7 - \\ln 2}$. 6. $x > 1$, $(x-1)(x+2) = 4$, $x^2 + x - 6 = 0$, $x = 2$; $\\lg x = 2$ or $-1$: $x = 100$ or $0{,}1$. 7. $\\cos x = \\dfrac12$ ($\\cos x = -2$ rejected): $x = \\pm\\dfrac{\\pi}{3} + 2\\pi n$; $\\sin x(2\\cos x - \\sqrt3) = 0$: $x = \\pi n$ or $x = \\pm\\dfrac{\\pi}{6} + 2\\pi k$. 8. $xy = \\dfrac{25 - 13}{2} = 6$: $(2; 3)$, $(3; 2)$; $xy = 8$, $x = y + 2$, $y^2 + 2y - 8 = 0$, $y = 2$ ($y = -4$ rejected): $(4; 2)$.`,
        hy: `## Մեկ ռազմավարություն բոլոր հավասարումների համար

Դասընթացի յուրաքանչյուր տեսակի հավասարում լուծվում է նույն երեք քայլով․ **(1)** գտնել որոշման տիրույթը, **(2)** բերել պարզագույն հավասարման, **(3)** արմատները ստուգել տիրույթով։ Քննության կորցրած միավորների մեծ մասը գալիս է 1-ին կամ 3-րդ քայլը բաց թողնելուց։

## Բազմանդամային և ռացիոնալ հավասարումներ

**Օրինակ 1։** $x^3 - 3x^2 - 4x + 12 = 0$։ Խմբավորենք․ $x^2(x - 3) - 4(x - 3) = (x - 3)(x^2 - 4) = 0$, ուստի $x \\in \\{-2, 2, 3\\}$։

**Օրինակ 2։** $x^4 - 5x^2 + 4 = 0$։ Նշանակենք $u = x^2$․ $u^2 - 5u + 4 = 0$, $u = 1$ կամ $u = 4$, հետևաբար $x = \\pm 1, \\pm 2$։

**Օրինակ 3։** $\\dfrac{x}{x - 2} + \\dfrac{1}{x + 2} = \\dfrac{8}{x^2 - 4}$։ Տիրույթ․ $x \\ne \\pm 2$։ Բազմապատկենք $(x-2)(x+2)$-ով․ $x(x+2) + (x - 2) = 8$, $x^2 + 3x - 10 = 0$, $x = 2$ կամ $x = -5$։ $x = 2$-ը չի բավարարում։ Պատասխան․ $x = -5$։

## Իռացիոնալ հավասարումներ

Առանձնացրեք արմատը, քառակուսի բարձրացրեք և **ստուգեք բոլոր արմատները**, քանի որ քառակուսի բարձրացնելը կարող է կողմնակի արմատներ առաջացնել։

**Օրինակ 4։** $\\sqrt{2x + 7} = x + 2$։ Պետք է $x + 2 \\ge 0$։ Քառակուսի բարձրացնենք․ $2x + 7 = x^2 + 4x + 4$, $x^2 + 2x - 3 = 0$, $x = 1$ կամ $x = -3$։ $x = -3$-ը չի բավարարում (աջ կողմը բացասական է)։ Պատասխան․ $x = 1$։

**Օրինակ 5։** $\\sqrt{x + 5} - \\sqrt{x} = 1$։ Գրենք $\\sqrt{x + 5} = 1 + \\sqrt x$, քառակուսի բարձրացնենք․ $x + 5 = 1 + 2\\sqrt x + x$, $\\sqrt x = 2$, $x = 4$։ Ստուգում․ $3 - 2 = 1$ ✓։

## Ցուցչային և լոգարիթմական հավասարումներ

**Օրինակ 6։** $4^x - 3 \\cdot 2^x - 4 = 0$։ $u = 2^x > 0$ նշանակումով․ $u^2 - 3u - 4 = 0$, $u = 4$ ($u = -1$ չի բավարարում)։ Այսպիսով $2^x = 4$, $x = 2$։

**Օրինակ 7։** $\\log_3 (x + 2) + \\log_3 (x - 6) = 2$։ Տիրույթ․ $x > 6$։ Այդ դեպքում $(x+2)(x-6) = 9$, $x^2 - 4x - 21 = 0$, $x = 7$ կամ $x = -3$։ Տիրույթին բավարարում է միայն $x = 7$։

**Օրինակ 8։** $\\log_2^2 x - 3\\log_2 x + 2 = 0$։ $u = \\log_2 x$ նշանակումով․ $u = 1$ կամ $u = 2$, ուստի $x = 2$ կամ $x = 4$։

**Օրինակ 9։** $5^{x+1} = 3^x$։ Լոգարիթմենք․ $(x + 1)\\ln 5 = x\\ln 3$, $x(\\ln 5 - \\ln 3) = -\\ln 5$, $x = -\\dfrac{\\ln 5}{\\ln 5 - \\ln 3} = -\\dfrac{\\ln 5}{\\ln(5/3)}$։

## Եռանկյունաչափական հավասարումներ

**Օրինակ 10։** $2\\sin^2 x - \\sin x - 1 = 0$։ $u = \\sin x$ նշանակումով․ $u = 1$ կամ $u = -\\dfrac12$։ Ուստի $x = \\dfrac{\\pi}{2} + 2\\pi n$ կամ $x = (-1)^{k+1}\\dfrac{\\pi}{6} + \\pi k$։

**Օրինակ 11։** $\\sin 2x = \\cos x$։ $2\\sin x\\cos x - \\cos x = \\cos x(2\\sin x - 1) = 0$։ Ուստի $\\cos x = 0$․ $x = \\dfrac{\\pi}{2} + \\pi n$, կամ $\\sin x = \\dfrac12$․ $x = (-1)^k\\dfrac{\\pi}{6} + \\pi k$։

**Օրինակ 12։** $\\sin x + \\sqrt3\\cos x = 1$։ Բաժանենք $2$-ի․ $\\sin\\left(x + \\dfrac{\\pi}{3}\\right) = \\dfrac12$, ուստի $x + \\dfrac{\\pi}{3} = (-1)^k\\dfrac{\\pi}{6} + \\pi k$, $x = (-1)^k\\dfrac{\\pi}{6} - \\dfrac{\\pi}{3} + \\pi k$։

## Համակարգեր

**Օրինակ 13։** $\\begin{cases} x + y = 7 \\\\ xy = 12 \\end{cases}$։ Վիետի թեորեմով $x, y$-ը $t^2 - 7t + 12 = 0$ հավասարման արմատներն են․ $(3; 4)$ և $(4; 3)$։

**Օրինակ 14։** $\\begin{cases} x^2 + y^2 = 25 \\\\ x - y = 1 \\end{cases}$։ Տեղադրենք $x = y + 1$․ $2y^2 + 2y - 24 = 0$, $y = 3$ կամ $y = -4$։ Լուծումներ՝ $(4; 3)$, $(-3; -4)$։

**Օրինակ 15։** $\\begin{cases} 2^x + 3^y = 11 \\\\ 2^{x+1} - 3^y = 1 \\end{cases}$։ Գումարենք․ $3 \\cdot 2^x = 12$, $2^x = 4$, $x = 2$, ապա $3^y = 7$, $y = \\log_3 7$։

### Վարժություններ

1. Լուծեք $x^3 + 2x^2 - 9x - 18 = 0$։
2. Լուծեք $x^4 - 13x^2 + 36 = 0$։
3. Լուծեք $\\dfrac{3}{x - 1} - \\dfrac{2}{x + 1} = \\dfrac{4}{x^2 - 1}$։
4. Լուծեք $\\sqrt{3x + 4} = x$ և $\\sqrt{x + 7} + \\sqrt{x} = 7$։
5. Լուծեք $9^x - 10 \\cdot 3^x + 9 = 0$ և $2^{x} = 7^{x - 1}$։
6. Լուծեք $\\log_2 (x - 1) + \\log_2 (x + 2) = 2$ և $\\lg^2 x - \\lg x - 2 = 0$։
7. Լուծեք $2\\cos^2 x + 3\\cos x - 2 = 0$ և $\\sin 2x = \\sqrt3\\sin x$։
8. Լուծեք համակարգերը․ $\\begin{cases} x + y = 5 \\\\ x^2 + y^2 = 13 \\end{cases}$ և $\\begin{cases} \\log_2 x + \\log_2 y = 3 \\\\ x - y = 2 \\end{cases}$։

### Պատասխաններ

1. $(x + 2)(x^2 - 9) = 0$․ $x \\in \\{-3, -2, 3\\}$։ 2. $x^2 = 4$ կամ $9$․ $x = \\pm 2, \\pm 3$։ 3. $3(x+1) - 2(x-1) = 4$, $x = -1$, որը տիրույթից դուրս է․ լուծում չկա։ 4. $x^2 - 3x - 4 = 0$, $x = 4$ ($x = -1$ չի բավարարում), $\\sqrt{x + 7} = 7 - \\sqrt x$, $x + 7 = 49 - 14\\sqrt x + x$, $\\sqrt x = 3$, $x = 9$։ 5. $3^x = 1$ կամ $9$․ $x = 0$ կամ $2$, $x\\ln 2 = (x - 1)\\ln 7$, $x = \\dfrac{\\ln 7}{\\ln 7 - \\ln 2}$։ 6. $x > 1$, $(x-1)(x+2) = 4$, $x^2 + x - 6 = 0$, $x = 2$, $\\lg x = 2$ կամ $-1$․ $x = 100$ կամ $0{,}1$։ 7. $\\cos x = \\dfrac12$ ($\\cos x = -2$ չի բավարարում)․ $x = \\pm\\dfrac{\\pi}{3} + 2\\pi n$, $\\sin x(2\\cos x - \\sqrt3) = 0$․ $x = \\pi n$ կամ $x = \\pm\\dfrac{\\pi}{6} + 2\\pi k$։ 8. $xy = \\dfrac{25 - 13}{2} = 6$․ $(2; 3)$, $(3; 2)$, $xy = 8$, $x = y + 2$, $y^2 + 2y - 8 = 0$, $y = 2$ ($y = -4$ չի բավարարում)․ $(4; 2)$։`,
        ru: `## Одна стратегия для всех уравнений

Каждый тип уравнений в курсе решается одними и теми же тремя шагами: **(1)** найти область определения, **(2)** свести к простейшему уравнению, **(3)** проверить корни по области определения. Большинство потерянных на экзамене баллов связано с пропуском шага 1 или 3.

## Многочленные и рациональные уравнения

**Пример 1.** $x^3 - 3x^2 - 4x + 12 = 0$. Группируем: $x^2(x - 3) - 4(x - 3) = (x - 3)(x^2 - 4) = 0$, значит $x \\in \\{-2, 2, 3\\}$.

**Пример 2.** $x^4 - 5x^2 + 4 = 0$. Пусть $u = x^2$: $u^2 - 5u + 4 = 0$, $u = 1$ или $u = 4$, откуда $x = \\pm 1, \\pm 2$.

**Пример 3.** $\\dfrac{x}{x - 2} + \\dfrac{1}{x + 2} = \\dfrac{8}{x^2 - 4}$. ОДЗ: $x \\ne \\pm 2$. Умножим на $(x-2)(x+2)$: $x(x+2) + (x - 2) = 8$, $x^2 + 3x - 10 = 0$, $x = 2$ или $x = -5$. $x = 2$ не подходит. Ответ: $x = -5$.

## Иррациональные уравнения

Уединить корень, возвести в квадрат и **проверить каждый корень**, так как возведение в квадрат может дать посторонние решения.

**Пример 4.** $\\sqrt{2x + 7} = x + 2$. Нужно $x + 2 \\ge 0$. Возводим в квадрат: $2x + 7 = x^2 + 4x + 4$, $x^2 + 2x - 3 = 0$, $x = 1$ или $x = -3$. $x = -3$ не подходит (правая часть отрицательна). Ответ: $x = 1$.

**Пример 5.** $\\sqrt{x + 5} - \\sqrt{x} = 1$. Запишем $\\sqrt{x + 5} = 1 + \\sqrt x$, возведём в квадрат: $x + 5 = 1 + 2\\sqrt x + x$, $\\sqrt x = 2$, $x = 4$. Проверка: $3 - 2 = 1$ ✓.

## Показательные и логарифмические уравнения

**Пример 6.** $4^x - 3 \\cdot 2^x - 4 = 0$. При $u = 2^x > 0$: $u^2 - 3u - 4 = 0$, $u = 4$ ($u = -1$ не подходит). Значит $2^x = 4$, $x = 2$.

**Пример 7.** $\\log_3 (x + 2) + \\log_3 (x - 6) = 2$. ОДЗ: $x > 6$. Тогда $(x+2)(x-6) = 9$, $x^2 - 4x - 21 = 0$, $x = 7$ или $x = -3$. ОДЗ удовлетворяет только $x = 7$.

**Пример 8.** $\\log_2^2 x - 3\\log_2 x + 2 = 0$. При $u = \\log_2 x$: $u = 1$ или $u = 2$, значит $x = 2$ или $x = 4$.

**Пример 9.** $5^{x+1} = 3^x$. Логарифмируем: $(x + 1)\\ln 5 = x\\ln 3$, $x(\\ln 5 - \\ln 3) = -\\ln 5$, $x = -\\dfrac{\\ln 5}{\\ln 5 - \\ln 3} = -\\dfrac{\\ln 5}{\\ln(5/3)}$.

## Тригонометрические уравнения

**Пример 10.** $2\\sin^2 x - \\sin x - 1 = 0$. При $u = \\sin x$: $u = 1$ или $u = -\\dfrac12$. Значит $x = \\dfrac{\\pi}{2} + 2\\pi n$ или $x = (-1)^{k+1}\\dfrac{\\pi}{6} + \\pi k$.

**Пример 11.** $\\sin 2x = \\cos x$. $2\\sin x\\cos x - \\cos x = \\cos x(2\\sin x - 1) = 0$. Значит $\\cos x = 0$: $x = \\dfrac{\\pi}{2} + \\pi n$; или $\\sin x = \\dfrac12$: $x = (-1)^k\\dfrac{\\pi}{6} + \\pi k$.

**Пример 12.** $\\sin x + \\sqrt3\\cos x = 1$. Делим на $2$: $\\sin\\left(x + \\dfrac{\\pi}{3}\\right) = \\dfrac12$, значит $x + \\dfrac{\\pi}{3} = (-1)^k\\dfrac{\\pi}{6} + \\pi k$, $x = (-1)^k\\dfrac{\\pi}{6} - \\dfrac{\\pi}{3} + \\pi k$.

## Системы

**Пример 13.** $\\begin{cases} x + y = 7 \\\\ xy = 12 \\end{cases}$. По теореме Виета $x, y$ — корни уравнения $t^2 - 7t + 12 = 0$: $(3; 4)$ и $(4; 3)$.

**Пример 14.** $\\begin{cases} x^2 + y^2 = 25 \\\\ x - y = 1 \\end{cases}$. Подставим $x = y + 1$: $2y^2 + 2y - 24 = 0$, $y = 3$ или $y = -4$. Решения $(4; 3)$, $(-3; -4)$.

**Пример 15.** $\\begin{cases} 2^x + 3^y = 11 \\\\ 2^{x+1} - 3^y = 1 \\end{cases}$. Сложим: $3 \\cdot 2^x = 12$, $2^x = 4$, $x = 2$; тогда $3^y = 7$, $y = \\log_3 7$.

### Упражнения

1. Решите $x^3 + 2x^2 - 9x - 18 = 0$.
2. Решите $x^4 - 13x^2 + 36 = 0$.
3. Решите $\\dfrac{3}{x - 1} - \\dfrac{2}{x + 1} = \\dfrac{4}{x^2 - 1}$.
4. Решите $\\sqrt{3x + 4} = x$ и $\\sqrt{x + 7} + \\sqrt{x} = 7$.
5. Решите $9^x - 10 \\cdot 3^x + 9 = 0$ и $2^{x} = 7^{x - 1}$.
6. Решите $\\log_2 (x - 1) + \\log_2 (x + 2) = 2$ и $\\lg^2 x - \\lg x - 2 = 0$.
7. Решите $2\\cos^2 x + 3\\cos x - 2 = 0$ и $\\sin 2x = \\sqrt3\\sin x$.
8. Решите системы $\\begin{cases} x + y = 5 \\\\ x^2 + y^2 = 13 \\end{cases}$ и $\\begin{cases} \\log_2 x + \\log_2 y = 3 \\\\ x - y = 2 \\end{cases}$.

### Ответы

1. $(x + 2)(x^2 - 9) = 0$: $x \\in \\{-3, -2, 3\\}$. 2. $x^2 = 4$ или $9$: $x = \\pm 2, \\pm 3$. 3. $3(x+1) - 2(x-1) = 4$, $x = -1$, не входит в ОДЗ: решений нет. 4. $x^2 - 3x - 4 = 0$, $x = 4$ ($x = -1$ не подходит); $\\sqrt{x + 7} = 7 - \\sqrt x$, $x + 7 = 49 - 14\\sqrt x + x$, $\\sqrt x = 3$, $x = 9$. 5. $3^x = 1$ или $9$: $x = 0$ или $2$; $x\\ln 2 = (x - 1)\\ln 7$, $x = \\dfrac{\\ln 7}{\\ln 7 - \\ln 2}$. 6. $x > 1$, $(x-1)(x+2) = 4$, $x^2 + x - 6 = 0$, $x = 2$; $\\lg x = 2$ или $-1$: $x = 100$ или $0{,}1$. 7. $\\cos x = \\dfrac12$ ($\\cos x = -2$ не подходит): $x = \\pm\\dfrac{\\pi}{3} + 2\\pi n$; $\\sin x(2\\cos x - \\sqrt3) = 0$: $x = \\pi n$ или $x = \\pm\\dfrac{\\pi}{6} + 2\\pi k$. 8. $xy = \\dfrac{25 - 13}{2} = 6$: $(2; 3)$, $(3; 2)$; $xy = 8$, $x = y + 2$, $y^2 + 2y - 8 = 0$, $y = 2$ ($y = -4$ не подходит): $(4; 2)$.`,
      },
      [
        q(t("Squaring both sides of an equation may…", "Հավասարման երկու կողմերը քառակուսի բարձրացնելը կարող է…", "Возведение обеих частей уравнения в квадрат может…"), [t("lose roots", "արմատներ կորցնել", "потерять корни"), t("add extraneous roots", "կողմնակի արմատներ ավելացնել", "добавить посторонние корни"), t("change nothing", "ոչինչ չփոխել", "ничего не изменить")], 1),
        q(t("x⁴ − 5x² + 4 = 0 has how many real roots?", "x⁴ − 5x² + 4 = 0 հավասարումը քանի՞ իրական արմատ ունի։", "Сколько действительных корней у x⁴ − 5x² + 4 = 0?"), [t("2", "2", "2"), t("4", "4", "4"), t("0", "0", "0")], 1),
        q(t("The domain of log₃(x + 2) + log₃(x − 6) = 2 is…", "log₃(x + 2) + log₃(x − 6) = 2-ի տիրույթը…", "ОДЗ уравнения log₃(x + 2) + log₃(x − 6) = 2 —"), [t("x > −2", "x > −2", "x > −2"), t("x > 6", "x > 6", "x > 6"), t("all x", "ցանկացած x", "все x")], 1),
        q(t("In 4ˣ − 3·2ˣ − 4 = 0 the substitution u = 2ˣ requires…", "4ˣ − 3·2ˣ − 4 = 0-ում u = 2ˣ նշանակումը պահանջում է…", "В 4ˣ − 3·2ˣ − 4 = 0 замена u = 2ˣ требует…"), [t("u > 0", "u > 0", "u > 0"), t("u ≥ 1", "u ≥ 1", "u ≥ 1"), t("nothing", "ոչինչ", "ничего")], 0),
        q(t("sin x + √3 cos x can be written as…", "sin x + √3 cos x-ը կարելի է գրել որպես…", "sin x + √3 cos x можно записать как…"), [t("2 sin(x + π/3)", "2 sin(x + π/3)", "2 sin(x + π/3)"), t("2 sin(x + π/6)", "2 sin(x + π/6)", "2 sin(x + π/6)"), t("√3 sin 2x", "√3 sin 2x", "√3 sin 2x")], 0),
        q(t("If x + y = 7 and xy = 12, then x and y are roots of…", "Եթե x + y = 7 և xy = 12, ապա x-ը և y-ը արմատներն են…", "Если x + y = 7 и xy = 12, то x и y — корни…"), [t("t² + 7t + 12 = 0", "t² + 7t + 12 = 0", "t² + 7t + 12 = 0"), t("t² − 7t + 12 = 0", "t² − 7t + 12 = 0", "t² − 7t + 12 = 0"), t("t² − 12t + 7 = 0", "t² − 12t + 7 = 0", "t² − 12t + 7 = 0")], 1),
      ],
    ),
    lesson(
      "review-inequalities",
      ["Review: inequalities", "Ամփոփում․ անհավասարություններ", "Повторение: неравенства"],
      {
        en: ["Solve rational inequalities with the interval method", "Solve exponential and logarithmic inequalities, keeping track of the base and the domain", "Solve inequalities with absolute values and simple irrational and trigonometric inequalities"],
        hy: ["Լուծել ռացիոնալ անհավասարություններ միջակայքերի եղանակով", "Լուծել ցուցչային և լոգարիթմական անհավասարություններ՝ հետևելով հիմքին և որոշման տիրույթին", "Լուծել մոդուլով անհավասարություններ և պարզ իռացիոնալ ու եռանկյունաչափական անհավասարություններ"],
        ru: ["Решать рациональные неравенства методом интервалов", "Решать показательные и логарифмические неравенства, следя за основанием и ОДЗ", "Решать неравенства с модулем и простые иррациональные и тригонометрические неравенства"],
      },
      {
        en: `## The interval method is the master tool

Bring everything to one side, write it as a product or quotient of factors, mark the zeros of the factors and the points where the expression is undefined, then find the sign on each interval. Every other inequality type is reduced to this.

**Example 1.** $\\dfrac{(x - 1)(x + 3)}{x - 2} \\le 0$. Critical points $-3, 1, 2$ (the last one is excluded). Signs from the right: $+, -, +, -$. Answer: $x \\in (-\\infty; -3] \\cup [1; 2)$.

**Example 2.** $\\dfrac{x + 4}{x - 1} > 2$. Do **not** multiply by $x - 1$ (its sign is unknown). Instead: $\\dfrac{x + 4 - 2x + 2}{x - 1} > 0$, $\\dfrac{6 - x}{x - 1} > 0$, so $x \\in (1; 6)$.

**Example 3.** $x^3 - 4x \\ge 0$: $x(x - 2)(x + 2) \\ge 0$, so $x \\in [-2; 0] \\cup [2; +\\infty)$.

**Example 4.** $(x - 3)^2(x + 1) < 0$. The square does not change the sign, except that it is zero at $x = 3$. Answer: $x < -1$.

## Absolute value

$\\lvert f \\rvert < a \\iff -a < f < a$; $\\lvert f \\rvert > a \\iff f < -a$ or $f > a$ (for $a > 0$).

**Example 5.** $\\lvert 2x - 5 \\rvert \\le 3$: $-3 \\le 2x - 5 \\le 3$, $1 \\le x \\le 4$.

**Example 6.** $\\lvert x + 1 \\rvert > 2x$. If $x < 0$ the right side is negative and the inequality always holds. If $x \\ge 0$: $x + 1 > 2x$, $x < 1$. Answer: $x < 1$.

## Exponential inequalities

For base $a > 1$ the direction is kept; for $0 < a < 1$ it **flips**.

**Example 7.** $3^{2x - 1} > 27$: $2x - 1 > 3$, $x > 2$.

**Example 8.** $\\left(\\dfrac12\\right)^{x^2 - 3} \\ge \\dfrac18$: $x^2 - 3 \\le 3$, $x^2 \\le 6$, $-\\sqrt6 \\le x \\le \\sqrt6$.

**Example 9.** $4^x - 6 \\cdot 2^x + 8 < 0$. With $u = 2^x$: $(u - 2)(u - 4) < 0$, $2 < u < 4$, so $1 < x < 2$.

## Logarithmic inequalities

First the domain, then compare the arguments with the direction decided by the base.

**Example 10.** $\\log_2 (3x - 1) \\le 3$: domain $x > \\dfrac13$; $3x - 1 \\le 8$, $x \\le 3$. Answer: $\\left(\\dfrac13; 3\\right]$.

**Example 11.** $\\log_{0{,}5}(x - 2) > -1$: domain $x > 2$; the base is less than $1$, so $x - 2 < 0{,}5^{-1} = 2$, $x < 4$. Answer: $(2; 4)$.

**Example 12.** $\\log_3 (x + 1) > \\log_3 (5 - x)$: domain $-1 < x < 5$; $x + 1 > 5 - x$, $x > 2$. Answer: $(2; 5)$.

## Irrational inequalities

**Example 13.** $\\sqrt{x + 3} < x + 1$. Need $x + 3 \\ge 0$, $x + 1 > 0$ and $x + 3 < (x + 1)^2$: $x^2 + x - 2 > 0$, $x < -2$ or $x > 1$. Combined with $x > -1$: $x > 1$.

**Example 14.** $\\sqrt{2x - 1} \\ge x - 2$. If $x - 2 < 0$ (and $x \\ge \\dfrac12$): true for $\\dfrac12 \\le x < 2$. If $x \\ge 2$: $2x - 1 \\ge x^2 - 4x + 4$, $x^2 - 6x + 5 \\le 0$, $1 \\le x \\le 5$, so $2 \\le x \\le 5$. Answer: $\\left[\\dfrac12; 5\\right]$.

## Trigonometric inequalities

Use the unit circle. **Example 15.** $\\sin x > \\dfrac12$: $\\dfrac{\\pi}{6} + 2\\pi n < x < \\dfrac{5\\pi}{6} + 2\\pi n$.

**Example 16.** $\\cos x \\le -\\dfrac{\\sqrt2}{2}$: $\\dfrac{3\\pi}{4} + 2\\pi n \\le x \\le \\dfrac{5\\pi}{4} + 2\\pi n$.

### Exercises

1. Solve $\\dfrac{(x + 2)(x - 5)}{x + 1} \\ge 0$.
2. Solve $\\dfrac{2x - 1}{x + 3} < 1$.
3. Solve $\\lvert 3x + 2 \\rvert \\ge 4$ and $\\lvert x - 4 \\rvert < x$.
4. Solve $2^{x^2 - 2x} < 8$ and $\\left(\\dfrac13\\right)^{x + 1} \\le 9$.
5. Solve $9^x - 4 \\cdot 3^x + 3 \\le 0$.
6. Solve $\\log_3 (2x + 1) < 2$ and $\\log_{1/2}(x + 3) \\ge -2$.
7. Solve $\\log_5 (x - 1) \\le \\log_5 (7 - 2x)$ and $\\sqrt{x + 6} > x$.
8. Solve $\\cos x > \\dfrac12$ and $\\sin x \\le -\\dfrac{\\sqrt3}{2}$.

### Answers

1. Points $-2, -1, 5$; signs $+, -, +, -$ from the right: $x \\in [-2; -1) \\cup [5; +\\infty)$. 2. $\\dfrac{2x - 1 - x - 3}{x + 3} < 0$, $\\dfrac{x - 4}{x + 3} < 0$: $-3 < x < 4$. 3. $3x + 2 \\ge 4$ or $3x + 2 \\le -4$: $x \\ge \\dfrac23$ or $x \\le -2$; $-x < x - 4 < x$ gives $x > 2$. 4. $x^2 - 2x < 3$: $-1 < x < 3$; $x + 1 \\ge -2$: $x \\ge -3$. 5. $1 \\le 3^x \\le 3$: $0 \\le x \\le 1$. 6. $-\\dfrac12 < x < 4$; $x > -3$ and $x + 3 \\le 4$: $-3 < x \\le 1$. 7. $1 < x < 3{,}5$ and $x - 1 \\le 7 - 2x$: $1 < x \\le \\dfrac83$; for $x < 0$ true when $x \\ge -6$, for $x \\ge 0$: $x^2 - x - 6 < 0$, $x < 3$: $-6 \\le x < 3$. 8. $-\\dfrac{\\pi}{3} + 2\\pi n < x < \\dfrac{\\pi}{3} + 2\\pi n$; $\\dfrac{4\\pi}{3} + 2\\pi n \\le x \\le \\dfrac{5\\pi}{3} + 2\\pi n$.`,
        hy: `## Միջակայքերի եղանակը հիմնական գործիքն է

Ամեն ինչ տարեք մի կողմ, գրեք արտադրիչների արտադրյալի կամ քանորդի տեսքով, նշեք արտադրիչների զրոները և այն կետերը, որտեղ արտահայտությունն անորոշ է, ապա գտեք նշանը յուրաքանչյուր միջակայքում։ Անհավասարությունների բոլոր մյուս տեսակները բերվում են սրան։

**Օրինակ 1։** $\\dfrac{(x - 1)(x + 3)}{x - 2} \\le 0$։ Կրիտիկական կետեր՝ $-3, 1, 2$ (վերջինը բացառվում է)։ Նշաններն աջից՝ $+, -, +, -$։ Պատասխան․ $x \\in (-\\infty; -3] \\cup [1; 2)$։

**Օրինակ 2։** $\\dfrac{x + 4}{x - 1} > 2$։ **Չի կարելի** բազմապատկել $(x - 1)$-ով (նշանն անհայտ է)։ Փոխարենը․ $\\dfrac{x + 4 - 2x + 2}{x - 1} > 0$, $\\dfrac{6 - x}{x - 1} > 0$, ուստի $x \\in (1; 6)$։

**Օրինակ 3։** $x^3 - 4x \\ge 0$․ $x(x - 2)(x + 2) \\ge 0$, ուստի $x \\in [-2; 0] \\cup [2; +\\infty)$։

**Օրինակ 4։** $(x - 3)^2(x + 1) < 0$։ Քառակուսին նշանը չի փոխում, բացի այն, որ զրո է $x = 3$-ում։ Պատասխան․ $x < -1$։

## Մոդուլ

$\\lvert f \\rvert < a \\iff -a < f < a$, $\\lvert f \\rvert > a \\iff f < -a$ կամ $f > a$ ($a > 0$ դեպքում)։

**Օրինակ 5։** $\\lvert 2x - 5 \\rvert \\le 3$․ $-3 \\le 2x - 5 \\le 3$, $1 \\le x \\le 4$։

**Օրինակ 6։** $\\lvert x + 1 \\rvert > 2x$։ Եթե $x < 0$, աջ կողմը բացասական է և անհավասարությունը միշտ ճիշտ է։ Եթե $x \\ge 0$․ $x + 1 > 2x$, $x < 1$։ Պատասխան․ $x < 1$։

## Ցուցչային անհավասարություններ

$a > 1$ հիմքի դեպքում նշանը պահպանվում է, $0 < a < 1$ դեպքում՝ **փոխվում է**։

**Օրինակ 7։** $3^{2x - 1} > 27$․ $2x - 1 > 3$, $x > 2$։

**Օրինակ 8։** $\\left(\\dfrac12\\right)^{x^2 - 3} \\ge \\dfrac18$․ $x^2 - 3 \\le 3$, $x^2 \\le 6$, $-\\sqrt6 \\le x \\le \\sqrt6$։

**Օրինակ 9։** $4^x - 6 \\cdot 2^x + 8 < 0$։ $u = 2^x$ նշանակումով․ $(u - 2)(u - 4) < 0$, $2 < u < 4$, ուստի $1 < x < 2$։

## Լոգարիթմական անհավասարություններ

Սկզբում տիրույթը, հետո համեմատեք արգումենտները՝ նշանի ուղղությունը որոշելով հիմքով։

**Օրինակ 10։** $\\log_2 (3x - 1) \\le 3$․ տիրույթ $x > \\dfrac13$, $3x - 1 \\le 8$, $x \\le 3$։ Պատասխան․ $\\left(\\dfrac13; 3\\right]$։

**Օրինակ 11։** $\\log_{0{,}5}(x - 2) > -1$․ տիրույթ $x > 2$, հիմքը փոքր է $1$-ից, ուստի $x - 2 < 0{,}5^{-1} = 2$, $x < 4$։ Պատասխան․ $(2; 4)$։

**Օրինակ 12։** $\\log_3 (x + 1) > \\log_3 (5 - x)$․ տիրույթ $-1 < x < 5$, $x + 1 > 5 - x$, $x > 2$։ Պատասխան․ $(2; 5)$։

## Իռացիոնալ անհավասարություններ

**Օրինակ 13։** $\\sqrt{x + 3} < x + 1$։ Պետք է $x + 3 \\ge 0$, $x + 1 > 0$ և $x + 3 < (x + 1)^2$․ $x^2 + x - 2 > 0$, $x < -2$ կամ $x > 1$։ $x > -1$-ի հետ միասին՝ $x > 1$։

**Օրինակ 14։** $\\sqrt{2x - 1} \\ge x - 2$։ Եթե $x - 2 < 0$ (և $x \\ge \\dfrac12$)․ ճիշտ է $\\dfrac12 \\le x < 2$ դեպքում։ Եթե $x \\ge 2$․ $2x - 1 \\ge x^2 - 4x + 4$, $x^2 - 6x + 5 \\le 0$, $1 \\le x \\le 5$, ուստի $2 \\le x \\le 5$։ Պատասխան․ $\\left[\\dfrac12; 5\\right]$։

## Եռանկյունաչափական անհավասարություններ

Օգտվեք միավոր շրջանագծից։ **Օրինակ 15։** $\\sin x > \\dfrac12$․ $\\dfrac{\\pi}{6} + 2\\pi n < x < \\dfrac{5\\pi}{6} + 2\\pi n$։

**Օրինակ 16։** $\\cos x \\le -\\dfrac{\\sqrt2}{2}$․ $\\dfrac{3\\pi}{4} + 2\\pi n \\le x \\le \\dfrac{5\\pi}{4} + 2\\pi n$։

### Վարժություններ

1. Լուծեք $\\dfrac{(x + 2)(x - 5)}{x + 1} \\ge 0$։
2. Լուծեք $\\dfrac{2x - 1}{x + 3} < 1$։
3. Լուծեք $\\lvert 3x + 2 \\rvert \\ge 4$ և $\\lvert x - 4 \\rvert < x$։
4. Լուծեք $2^{x^2 - 2x} < 8$ և $\\left(\\dfrac13\\right)^{x + 1} \\le 9$։
5. Լուծեք $9^x - 4 \\cdot 3^x + 3 \\le 0$։
6. Լուծեք $\\log_3 (2x + 1) < 2$ և $\\log_{1/2}(x + 3) \\ge -2$։
7. Լուծեք $\\log_5 (x - 1) \\le \\log_5 (7 - 2x)$ և $\\sqrt{x + 6} > x$։
8. Լուծեք $\\cos x > \\dfrac12$ և $\\sin x \\le -\\dfrac{\\sqrt3}{2}$։

### Պատասխաններ

1. Կետեր՝ $-2, -1, 5$, նշաններն աջից՝ $+, -, +, -$․ $x \\in [-2; -1) \\cup [5; +\\infty)$։ 2. $\\dfrac{2x - 1 - x - 3}{x + 3} < 0$, $\\dfrac{x - 4}{x + 3} < 0$․ $-3 < x < 4$։ 3. $3x + 2 \\ge 4$ կամ $3x + 2 \\le -4$․ $x \\ge \\dfrac23$ կամ $x \\le -2$, $-x < x - 4 < x$-ից $x > 2$։ 4. $x^2 - 2x < 3$․ $-1 < x < 3$, $x + 1 \\ge -2$․ $x \\ge -3$։ 5. $1 \\le 3^x \\le 3$․ $0 \\le x \\le 1$։ 6. $-\\dfrac12 < x < 4$, $x > -3$ և $x + 3 \\le 4$․ $-3 < x \\le 1$։ 7. $1 < x < 3{,}5$ և $x - 1 \\le 7 - 2x$․ $1 < x \\le \\dfrac83$, $x < 0$ դեպքում ճիշտ է, երբ $x \\ge -6$, $x \\ge 0$ դեպքում՝ $x^2 - x - 6 < 0$, $x < 3$․ $-6 \\le x < 3$։ 8. $-\\dfrac{\\pi}{3} + 2\\pi n < x < \\dfrac{\\pi}{3} + 2\\pi n$, $\\dfrac{4\\pi}{3} + 2\\pi n \\le x \\le \\dfrac{5\\pi}{3} + 2\\pi n$։`,
        ru: `## Метод интервалов — главный инструмент

Перенесите всё в одну часть, запишите в виде произведения или частного множителей, отметьте нули множителей и точки, где выражение не определено, затем найдите знак на каждом интервале. Все остальные типы неравенств сводятся к этому.

**Пример 1.** $\\dfrac{(x - 1)(x + 3)}{x - 2} \\le 0$. Критические точки $-3, 1, 2$ (последняя исключена). Знаки справа: $+, -, +, -$. Ответ: $x \\in (-\\infty; -3] \\cup [1; 2)$.

**Пример 2.** $\\dfrac{x + 4}{x - 1} > 2$. **Нельзя** умножать на $x - 1$ (его знак неизвестен). Вместо этого: $\\dfrac{x + 4 - 2x + 2}{x - 1} > 0$, $\\dfrac{6 - x}{x - 1} > 0$, значит $x \\in (1; 6)$.

**Пример 3.** $x^3 - 4x \\ge 0$: $x(x - 2)(x + 2) \\ge 0$, значит $x \\in [-2; 0] \\cup [2; +\\infty)$.

**Пример 4.** $(x - 3)^2(x + 1) < 0$. Квадрат не меняет знак, только обращается в нуль при $x = 3$. Ответ: $x < -1$.

## Модуль

$\\lvert f \\rvert < a \\iff -a < f < a$; $\\lvert f \\rvert > a \\iff f < -a$ или $f > a$ (при $a > 0$).

**Пример 5.** $\\lvert 2x - 5 \\rvert \\le 3$: $-3 \\le 2x - 5 \\le 3$, $1 \\le x \\le 4$.

**Пример 6.** $\\lvert x + 1 \\rvert > 2x$. Если $x < 0$, правая часть отрицательна и неравенство верно всегда. Если $x \\ge 0$: $x + 1 > 2x$, $x < 1$. Ответ: $x < 1$.

## Показательные неравенства

При основании $a > 1$ знак сохраняется; при $0 < a < 1$ он **меняется**.

**Пример 7.** $3^{2x - 1} > 27$: $2x - 1 > 3$, $x > 2$.

**Пример 8.** $\\left(\\dfrac12\\right)^{x^2 - 3} \\ge \\dfrac18$: $x^2 - 3 \\le 3$, $x^2 \\le 6$, $-\\sqrt6 \\le x \\le \\sqrt6$.

**Пример 9.** $4^x - 6 \\cdot 2^x + 8 < 0$. При $u = 2^x$: $(u - 2)(u - 4) < 0$, $2 < u < 4$, значит $1 < x < 2$.

## Логарифмические неравенства

Сначала ОДЗ, потом сравнение аргументов, направление знака задаёт основание.

**Пример 10.** $\\log_2 (3x - 1) \\le 3$: ОДЗ $x > \\dfrac13$; $3x - 1 \\le 8$, $x \\le 3$. Ответ: $\\left(\\dfrac13; 3\\right]$.

**Пример 11.** $\\log_{0{,}5}(x - 2) > -1$: ОДЗ $x > 2$; основание меньше $1$, поэтому $x - 2 < 0{,}5^{-1} = 2$, $x < 4$. Ответ: $(2; 4)$.

**Пример 12.** $\\log_3 (x + 1) > \\log_3 (5 - x)$: ОДЗ $-1 < x < 5$; $x + 1 > 5 - x$, $x > 2$. Ответ: $(2; 5)$.

## Иррациональные неравенства

**Пример 13.** $\\sqrt{x + 3} < x + 1$. Нужно $x + 3 \\ge 0$, $x + 1 > 0$ и $x + 3 < (x + 1)^2$: $x^2 + x - 2 > 0$, $x < -2$ или $x > 1$. Вместе с $x > -1$: $x > 1$.

**Пример 14.** $\\sqrt{2x - 1} \\ge x - 2$. Если $x - 2 < 0$ (и $x \\ge \\dfrac12$): верно при $\\dfrac12 \\le x < 2$. Если $x \\ge 2$: $2x - 1 \\ge x^2 - 4x + 4$, $x^2 - 6x + 5 \\le 0$, $1 \\le x \\le 5$, значит $2 \\le x \\le 5$. Ответ: $\\left[\\dfrac12; 5\\right]$.

## Тригонометрические неравенства

Используйте единичную окружность. **Пример 15.** $\\sin x > \\dfrac12$: $\\dfrac{\\pi}{6} + 2\\pi n < x < \\dfrac{5\\pi}{6} + 2\\pi n$.

**Пример 16.** $\\cos x \\le -\\dfrac{\\sqrt2}{2}$: $\\dfrac{3\\pi}{4} + 2\\pi n \\le x \\le \\dfrac{5\\pi}{4} + 2\\pi n$.

### Упражнения

1. Решите $\\dfrac{(x + 2)(x - 5)}{x + 1} \\ge 0$.
2. Решите $\\dfrac{2x - 1}{x + 3} < 1$.
3. Решите $\\lvert 3x + 2 \\rvert \\ge 4$ и $\\lvert x - 4 \\rvert < x$.
4. Решите $2^{x^2 - 2x} < 8$ и $\\left(\\dfrac13\\right)^{x + 1} \\le 9$.
5. Решите $9^x - 4 \\cdot 3^x + 3 \\le 0$.
6. Решите $\\log_3 (2x + 1) < 2$ и $\\log_{1/2}(x + 3) \\ge -2$.
7. Решите $\\log_5 (x - 1) \\le \\log_5 (7 - 2x)$ и $\\sqrt{x + 6} > x$.
8. Решите $\\cos x > \\dfrac12$ и $\\sin x \\le -\\dfrac{\\sqrt3}{2}$.

### Ответы

1. Точки $-2, -1, 5$; знаки справа $+, -, +, -$: $x \\in [-2; -1) \\cup [5; +\\infty)$. 2. $\\dfrac{2x - 1 - x - 3}{x + 3} < 0$, $\\dfrac{x - 4}{x + 3} < 0$: $-3 < x < 4$. 3. $3x + 2 \\ge 4$ или $3x + 2 \\le -4$: $x \\ge \\dfrac23$ или $x \\le -2$; из $-x < x - 4 < x$ получаем $x > 2$. 4. $x^2 - 2x < 3$: $-1 < x < 3$; $x + 1 \\ge -2$: $x \\ge -3$. 5. $1 \\le 3^x \\le 3$: $0 \\le x \\le 1$. 6. $-\\dfrac12 < x < 4$; $x > -3$ и $x + 3 \\le 4$: $-3 < x \\le 1$. 7. $1 < x < 3{,}5$ и $x - 1 \\le 7 - 2x$: $1 < x \\le \\dfrac83$; при $x < 0$ верно, когда $x \\ge -6$, при $x \\ge 0$: $x^2 - x - 6 < 0$, $x < 3$: $-6 \\le x < 3$. 8. $-\\dfrac{\\pi}{3} + 2\\pi n < x < \\dfrac{\\pi}{3} + 2\\pi n$; $\\dfrac{4\\pi}{3} + 2\\pi n \\le x \\le \\dfrac{5\\pi}{3} + 2\\pi n$.`,
      },
      [
        q(t("In (x + 4)/(x − 1) > 2 you should…", "(x + 4)/(x − 1) > 2-ում պետք է…", "В (x + 4)/(x − 1) > 2 следует…"), [t("multiply by x − 1", "բազմապատկել (x − 1)-ով", "умножить на x − 1"), t("move 2 to the left and use the interval method", "2-ը տանել ձախ և կիրառել միջակայքերի եղանակը", "перенести 2 влево и применить метод интервалов"), t("square both sides", "քառակուսի բարձրացնել", "возвести в квадрат")], 1),
        q(t("|2x − 5| ≤ 3 is equivalent to…", "|2x − 5| ≤ 3-ը համարժեք է…", "|2x − 5| ≤ 3 равносильно…"), [t("−3 ≤ 2x − 5 ≤ 3", "−3 ≤ 2x − 5 ≤ 3", "−3 ≤ 2x − 5 ≤ 3"), t("2x − 5 ≤ 3", "2x − 5 ≤ 3", "2x − 5 ≤ 3"), t("2x − 5 ≥ 3", "2x − 5 ≥ 3", "2x − 5 ≥ 3")], 0),
        q(t("(1/2)^x ≥ 1/8 gives…", "(1/2)^x ≥ 1/8-ից ստացվում է…", "Из (1/2)^x ≥ 1/8 получаем…"), [t("x ≥ 3", "x ≥ 3", "x ≥ 3"), t("x ≤ 3", "x ≤ 3", "x ≤ 3"), t("x ≤ −3", "x ≤ −3", "x ≤ −3")], 1),
        q(t("For log₂(3x − 1) ≤ 3 the domain requires…", "log₂(3x − 1) ≤ 3-ի տիրույթը պահանջում է…", "Для log₂(3x − 1) ≤ 3 ОДЗ требует…"), [t("x > 1/3", "x > 1/3", "x > 1/3"), t("x ≥ 0", "x ≥ 0", "x ≥ 0"), t("x ≤ 3", "x ≤ 3", "x ≤ 3")], 0),
        q(t("The factor (x − 3)² in an inequality…", "(x − 3)² արտադրիչն անհավասարությունում…", "Множитель (x − 3)² в неравенстве…"), [t("changes sign at x = 3", "նշանը փոխում է x = 3-ում", "меняет знак при x = 3"), t("does not change sign, only vanishes at x = 3", "նշանը չի փոխում, միայն զրո է x = 3-ում", "знак не меняет, лишь обращается в нуль при x = 3"), t("can be dropped", "կարելի է դեն նետել", "можно отбросить")], 1),
        q(t("sin x > 1/2 holds for…", "sin x > 1/2 ճիշտ է, երբ…", "sin x > 1/2 верно при…"), [t("π/6 + 2πn < x < 5π/6 + 2πn", "π/6 + 2πn < x < 5π/6 + 2πn", "π/6 + 2πn < x < 5π/6 + 2πn"), t("x > π/6", "x > π/6", "x > π/6"), t("−π/6 + 2πn < x < π/6 + 2πn", "−π/6 + 2πn < x < π/6 + 2πn", "−π/6 + 2πn < x < π/6 + 2πn")], 0),
      ],
    ),
    lesson(
      "review-functions",
      ["Review: functions and graphs", "Ամփոփում․ ֆունկցիաներ և գրաֆիկներ", "Повторение: функции и графики"],
      {
        en: ["Find the domain, range, zeros, parity and periodicity of a function", "Sketch graphs of the standard functions and their transformations", "Use the derivative to study monotonicity, extrema and the largest and smallest values on an interval"],
        hy: ["Գտնել ֆունկցիայի որոշման տիրույթը, արժեքների բազմությունը, զրոները, զույգությունը և պարբերականությունը", "Կառուցել ստանդարտ ֆունկցիաների և դրանց ձևափոխությունների գրաֆիկները", "Ածանցյալով հետազոտել մոնոտոնությունը, էքստրեմումները և միջակայքում ամենամեծ ու ամենափոքր արժեքները"],
        ru: ["Находить область определения, множество значений, нули, чётность и периодичность функции", "Строить графики стандартных функций и их преобразований", "С помощью производной исследовать монотонность, экстремумы и наибольшее и наименьшее значения на отрезке"],
      },
      {
        en: `## The investigation checklist

For any function $f$ the exam expects the same list: domain, zeros and sign, parity, periodicity, monotonicity and extrema, range, asymptotes, graph. Below each item is illustrated on familiar functions.

## Domain and range

**Example 1.** $f(x) = \\dfrac{\\sqrt{x + 2}}{x - 3}$: need $x \\ge -2$ and $x \\ne 3$, so $D = [-2; 3) \\cup (3; +\\infty)$.

**Example 2.** $f(x) = \\log_2 (4 - x^2)$: $4 - x^2 > 0$, $D = (-2; 2)$. Since $0 < 4 - x^2 \\le 4$, the range is $(-\\infty; 2]$.

**Example 3.** $f(x) = 3 - 2\\sin x$: range $[1; 5]$, because $-1 \\le \\sin x \\le 1$.

**Example 4.** $f(x) = x^2 - 4x + 7 = (x - 2)^2 + 3$: range $[3; +\\infty)$, vertex $(2; 3)$.

## Parity and periodicity

$f$ is **even** if $f(-x) = f(x)$ (graph symmetric about the $y$-axis), **odd** if $f(-x) = -f(x)$ (symmetric about the origin).

**Example 5.** $f(x) = x^3 - \\dfrac{1}{x}$ is odd; $g(x) = x^4\\cos x$ is even; $h(x) = x^2 + x$ is neither, since $h(-1) = 0 \\ne h(1) = 2$.

**Example 6.** The period of $y = \\sin 3x$ is $\\dfrac{2\\pi}{3}$; of $y = \\tan\\dfrac{x}{2}$ it is $2\\pi$; of $y = \\cos^2 x = \\dfrac{1 + \\cos 2x}{2}$ it is $\\pi$.

## Transformations

From $y = f(x)$: $y = f(x - a)$ shifts right by $a$, $y = f(x) + b$ shifts up by $b$, $y = -f(x)$ reflects in the $x$-axis, $y = f(-x)$ reflects in the $y$-axis, $y = kf(x)$ stretches vertically, $y = \\lvert f(x) \\rvert$ reflects the negative parts upward.

**Example 7.** $y = 2^{x - 1} + 3$: the graph of $y = 2^x$ shifted right $1$ and up $3$; asymptote $y = 3$, passes through $(1; 4)$.

**Example 8.** $y = -\\sqrt{x + 4}$: the half-parabola $y = \\sqrt x$ shifted left $4$ and reflected downward. Domain $[-4; +\\infty)$, range $(-\\infty; 0]$.

**Example 9.** $y = \\lvert x^2 - 4 \\rvert$: the parabola with the part on $(-2; 2)$ flipped up. Its minimum value $0$ is at $x = \\pm 2$, local maximum $4$ at $x = 0$.

## Derivative and monotonicity

**Example 10.** $f(x) = x^3 - 3x^2 - 9x + 1$. $f' = 3x^2 - 6x - 9 = 3(x - 3)(x + 1)$. Increasing on $(-\\infty; -1]$ and $[3; +\\infty)$, decreasing on $[-1; 3]$. Maximum $f(-1) = 6$, minimum $f(3) = -26$.

**Example 11.** Largest and smallest values of $f(x) = x^3 - 3x^2 - 9x + 1$ on $[0; 4]$: candidates are the critical point $x = 3$ inside and the endpoints. $f(0) = 1$, $f(3) = -26$, $f(4) = -19$. Largest $1$, smallest $-26$.

**Example 12.** $f(x) = \\dfrac{x^2 + 4}{x}$, $x > 0$. $f' = 1 - \\dfrac{4}{x^2} = 0$ at $x = 2$. Decreasing on $(0; 2]$, increasing on $[2; +\\infty)$, minimum $f(2) = 4$. Range on $x > 0$: $[4; +\\infty)$.

**Example 13.** $f(x) = xe^{-x}$. $f' = e^{-x}(1 - x)$, maximum at $x = 1$: $f(1) = \\dfrac1e$. As $x \\to +\\infty$, $f \\to 0$ (horizontal asymptote $y = 0$ on the right).

## Reading a graph

The exam often shows a graph of $f'$ and asks about $f$: where $f' > 0$, $f$ increases; a zero of $f'$ with a sign change from $+$ to $-$ is a maximum of $f$. Conversely, from a graph of $f$ the tangent slope at a point is $f'$ there.

### Exercises

1. Find the domain of $f(x) = \\dfrac{\\sqrt{5 - x}}{\\log_2 x}$.
2. Find the range of $y = 4\\cos x - 1$ and of $y = \\sqrt{9 - x^2}$.
3. Decide whether the functions are even, odd or neither: $x\\sin x$, $\\dfrac{x}{x^2 + 1}$, $2^x$.
4. Find the smallest positive period of $y = \\cos 4x$ and $y = \\sin x\\cos x$.
5. Describe how the graph of $y = \\log_3 (x + 2) - 1$ is obtained from $y = \\log_3 x$ and give its asymptote and zero.
6. Study $f(x) = 2x^3 - 9x^2 + 12x$: intervals of monotonicity and extrema.
7. Find the largest and smallest values of $f(x) = x^4 - 8x^2 + 3$ on $[-1; 3]$.
8. For $f(x) = \\dfrac{x^2 - 3}{x - 2}$, find the critical points and the extrema.

### Answers

1. $x \\le 5$, $x > 0$, $x \\ne 1$: $D = (0; 1) \\cup (1; 5]$. 2. $[-5; 3]$; $[0; 3]$. 3. Even ($(-x)\\sin(-x) = x\\sin x$); odd; neither. 4. $\\dfrac{\\pi}{2}$; $\\sin x\\cos x = \\dfrac12\\sin 2x$, period $\\pi$. 5. Shift left $2$, down $1$; asymptote $x = -2$; zero: $\\log_3 (x + 2) = 1$, $x = 1$. 6. $f' = 6x^2 - 18x + 12 = 6(x - 1)(x - 2)$: increasing on $(-\\infty; 1]$ and $[2; +\\infty)$, decreasing on $[1; 2]$; max $f(1) = 5$, min $f(2) = 4$. 7. $f' = 4x^3 - 16x = 4x(x - 2)(x + 2)$, critical points in the interval: $0, 2$. $f(-1) = -4$, $f(0) = 3$, $f(2) = -13$, $f(3) = 12$. Largest $12$, smallest $-13$. 8. $f' = \\dfrac{2x(x - 2) - (x^2 - 3)}{(x - 2)^2} = \\dfrac{x^2 - 4x + 3}{(x - 2)^2} = \\dfrac{(x - 1)(x - 3)}{(x - 2)^2}$; max $f(1) = 2$, min $f(3) = 6$.`,
        hy: `## Հետազոտության ցուցակը

Ցանկացած $f$ ֆունկցիայի համար քննությունը սպասում է նույն ցանկը․ որոշման տիրույթ, զրոներ և նշան, զույգություն, պարբերականություն, մոնոտոնություն և էքստրեմումներ, արժեքների բազմություն, ասիմպտոտներ, գրաֆիկ։ Ստորև յուրաքանչյուր կետը ցուցադրված է ծանոթ ֆունկցիաների վրա։

## Որոշման տիրույթ և արժեքների բազմություն

**Օրինակ 1։** $f(x) = \\dfrac{\\sqrt{x + 2}}{x - 3}$․ պետք է $x \\ge -2$ և $x \\ne 3$, ուստի $D = [-2; 3) \\cup (3; +\\infty)$։

**Օրինակ 2։** $f(x) = \\log_2 (4 - x^2)$․ $4 - x^2 > 0$, $D = (-2; 2)$։ Քանի որ $0 < 4 - x^2 \\le 4$, արժեքների բազմությունը $(-\\infty; 2]$ է։

**Օրինակ 3։** $f(x) = 3 - 2\\sin x$․ արժեքների բազմությունը $[1; 5]$, քանի որ $-1 \\le \\sin x \\le 1$։

**Օրինակ 4։** $f(x) = x^2 - 4x + 7 = (x - 2)^2 + 3$․ արժեքների բազմությունը $[3; +\\infty)$, գագաթը $(2; 3)$։

## Զույգություն և պարբերականություն

$f$-ը **զույգ** է, եթե $f(-x) = f(x)$ (գրաֆիկը սիմետրիկ է $y$ առանցքի նկատմամբ), **կենտ** է, եթե $f(-x) = -f(x)$ (սիմետրիկ է սկզբնակետի նկատմամբ)։

**Օրինակ 5։** $f(x) = x^3 - \\dfrac{1}{x}$-ը կենտ է, $g(x) = x^4\\cos x$-ը զույգ է, $h(x) = x^2 + x$-ը ոչ զույգ է, ոչ կենտ, քանի որ $h(-1) = 0 \\ne h(1) = 2$։

**Օրինակ 6։** $y = \\sin 3x$-ի պարբերությունը $\\dfrac{2\\pi}{3}$ է, $y = \\operatorname{tg}\\dfrac{x}{2}$-ի՝ $2\\pi$, $y = \\cos^2 x = \\dfrac{1 + \\cos 2x}{2}$-ի՝ $\\pi$։

## Ձևափոխություններ

$y = f(x)$-ից․ $y = f(x - a)$՝ տեղաշարժ աջ $a$-ով, $y = f(x) + b$՝ տեղաշարժ վերև $b$-ով, $y = -f(x)$՝ անդրադարձում $x$ առանցքի նկատմամբ, $y = f(-x)$՝ անդրադարձում $y$ առանցքի նկատմամբ, $y = kf(x)$՝ ուղղաձիգ ձգում, $y = \\lvert f(x) \\rvert$՝ բացասական մասերն անդրադարձվում են վերև։

**Օրինակ 7։** $y = 2^{x - 1} + 3$․ $y = 2^x$-ի գրաֆիկը տեղաշարժված աջ $1$-ով և վերև $3$-ով, ասիմպտոտը $y = 3$, անցնում է $(1; 4)$ կետով։

**Օրինակ 8։** $y = -\\sqrt{x + 4}$․ $y = \\sqrt x$ կիսապարաբոլը տեղաշարժված ձախ $4$-ով և անդրադարձված ներքև։ Տիրույթ $[-4; +\\infty)$, արժեքներ $(-\\infty; 0]$։

**Օրինակ 9։** $y = \\lvert x^2 - 4 \\rvert$․ պարաբոլը, որի $(-2; 2)$ մասը շրջված է վերև։ Ամենափոքր արժեքը $0$ է $x = \\pm 2$-ում, լոկալ մաքսիմումը $4$ է $x = 0$-ում։

## Ածանցյալ և մոնոտոնություն

**Օրինակ 10։** $f(x) = x^3 - 3x^2 - 9x + 1$։ $f' = 3x^2 - 6x - 9 = 3(x - 3)(x + 1)$։ Աճում է $(-\\infty; -1]$ և $[3; +\\infty)$ վրա, նվազում է $[-1; 3]$ վրա։ Մաքսիմում $f(-1) = 6$, մինիմում $f(3) = -26$։

**Օրինակ 11։** $f(x) = x^3 - 3x^2 - 9x + 1$-ի ամենամեծ և ամենափոքր արժեքները $[0; 4]$ վրա․ թեկնածուներն են ներսի $x = 3$ կրիտիկական կետը և ծայրակետերը։ $f(0) = 1$, $f(3) = -26$, $f(4) = -19$։ Ամենամեծը $1$, ամենափոքրը $-26$։

**Օրինակ 12։** $f(x) = \\dfrac{x^2 + 4}{x}$, $x > 0$։ $f' = 1 - \\dfrac{4}{x^2} = 0$ $x = 2$-ում։ Նվազում է $(0; 2]$ վրա, աճում է $[2; +\\infty)$ վրա, մինիմում $f(2) = 4$։ Արժեքները $x > 0$ դեպքում՝ $[4; +\\infty)$։

**Օրինակ 13։** $f(x) = xe^{-x}$։ $f' = e^{-x}(1 - x)$, մաքսիմում $x = 1$-ում․ $f(1) = \\dfrac1e$։ Երբ $x \\to +\\infty$, $f \\to 0$ (հորիզոնական ասիմպտոտ $y = 0$ աջից)։

## Գրաֆիկի ընթերցում

Քննությունը հաճախ ցույց է տալիս $f'$-ի գրաֆիկը և հարցնում $f$-ի մասին․ որտեղ $f' > 0$, $f$-ն աճում է, $f'$-ի զրոն, որտեղ նշանը $+$-ից փոխվում է $-$-ի, $f$-ի մաքսիմումն է։ Հակառակը՝ $f$-ի գրաֆիկից կետում շոշափողի թեքությունը $f'$-ն է այդ կետում։

### Վարժություններ

1. Գտեք $f(x) = \\dfrac{\\sqrt{5 - x}}{\\log_2 x}$-ի որոշման տիրույթը։
2. Գտեք $y = 4\\cos x - 1$-ի և $y = \\sqrt{9 - x^2}$-ի արժեքների բազմությունը։
3. Որոշեք՝ ֆունկցիաները զույգ են, կենտ, թե ոչ մեկը․ $x\\sin x$, $\\dfrac{x}{x^2 + 1}$, $2^x$։
4. Գտեք $y = \\cos 4x$-ի և $y = \\sin x\\cos x$-ի ամենափոքր դրական պարբերությունը։
5. Նկարագրեք, թե ինչպես է $y = \\log_3 (x + 2) - 1$-ի գրաֆիկը ստացվում $y = \\log_3 x$-ից, և նշեք ասիմպտոտն ու զրոն։
6. Հետազոտեք $f(x) = 2x^3 - 9x^2 + 12x$-ը․ մոնոտոնության միջակայքեր և էքստրեմումներ։
7. Գտեք $f(x) = x^4 - 8x^2 + 3$-ի ամենամեծ և ամենափոքր արժեքները $[-1; 3]$ վրա։
8. $f(x) = \\dfrac{x^2 - 3}{x - 2}$-ի համար գտեք կրիտիկական կետերը և էքստրեմումները։

### Պատասխաններ

1. $x \\le 5$, $x > 0$, $x \\ne 1$․ $D = (0; 1) \\cup (1; 5]$։ 2. $[-5; 3]$, $[0; 3]$։ 3. Զույգ ($(-x)\\sin(-x) = x\\sin x$), կենտ, ոչ մեկը։ 4. $\\dfrac{\\pi}{2}$, $\\sin x\\cos x = \\dfrac12\\sin 2x$, պարբերությունը $\\pi$։ 5. Տեղաշարժ ձախ $2$-ով, ներքև $1$-ով, ասիմպտոտ $x = -2$, զրո․ $\\log_3 (x + 2) = 1$, $x = 1$։ 6. $f' = 6x^2 - 18x + 12 = 6(x - 1)(x - 2)$․ աճում է $(-\\infty; 1]$ և $[2; +\\infty)$ վրա, նվազում է $[1; 2]$ վրա, մաքս $f(1) = 5$, մին $f(2) = 4$։ 7. $f' = 4x^3 - 16x = 4x(x - 2)(x + 2)$, միջակայքի կրիտիկական կետերը՝ $0, 2$։ $f(-1) = -4$, $f(0) = 3$, $f(2) = -13$, $f(3) = 12$։ Ամենամեծը $12$, ամենափոքրը $-13$։ 8. $f' = \\dfrac{2x(x - 2) - (x^2 - 3)}{(x - 2)^2} = \\dfrac{x^2 - 4x + 3}{(x - 2)^2} = \\dfrac{(x - 1)(x - 3)}{(x - 2)^2}$, մաքս $f(1) = 2$, մին $f(3) = 6$։`,
        ru: `## Схема исследования

Для любой функции $f$ экзамен ожидает один и тот же список: область определения, нули и знак, чётность, периодичность, монотонность и экстремумы, множество значений, асимптоты, график. Ниже каждый пункт показан на знакомых функциях.

## Область определения и множество значений

**Пример 1.** $f(x) = \\dfrac{\\sqrt{x + 2}}{x - 3}$: нужно $x \\ge -2$ и $x \\ne 3$, значит $D = [-2; 3) \\cup (3; +\\infty)$.

**Пример 2.** $f(x) = \\log_2 (4 - x^2)$: $4 - x^2 > 0$, $D = (-2; 2)$. Так как $0 < 4 - x^2 \\le 4$, множество значений $(-\\infty; 2]$.

**Пример 3.** $f(x) = 3 - 2\\sin x$: множество значений $[1; 5]$, потому что $-1 \\le \\sin x \\le 1$.

**Пример 4.** $f(x) = x^2 - 4x + 7 = (x - 2)^2 + 3$: множество значений $[3; +\\infty)$, вершина $(2; 3)$.

## Чётность и периодичность

$f$ **чётная**, если $f(-x) = f(x)$ (график симметричен относительно оси $y$), **нечётная**, если $f(-x) = -f(x)$ (симметричен относительно начала координат).

**Пример 5.** $f(x) = x^3 - \\dfrac{1}{x}$ нечётная; $g(x) = x^4\\cos x$ чётная; $h(x) = x^2 + x$ ни то ни другое, так как $h(-1) = 0 \\ne h(1) = 2$.

**Пример 6.** Период $y = \\sin 3x$ равен $\\dfrac{2\\pi}{3}$; $y = \\operatorname{tg}\\dfrac{x}{2}$ — $2\\pi$; $y = \\cos^2 x = \\dfrac{1 + \\cos 2x}{2}$ — $\\pi$.

## Преобразования

От $y = f(x)$: $y = f(x - a)$ — сдвиг вправо на $a$, $y = f(x) + b$ — сдвиг вверх на $b$, $y = -f(x)$ — отражение относительно оси $x$, $y = f(-x)$ — отражение относительно оси $y$, $y = kf(x)$ — растяжение по вертикали, $y = \\lvert f(x) \\rvert$ — отрицательные части отражаются вверх.

**Пример 7.** $y = 2^{x - 1} + 3$: график $y = 2^x$, сдвинутый вправо на $1$ и вверх на $3$; асимптота $y = 3$, проходит через $(1; 4)$.

**Пример 8.** $y = -\\sqrt{x + 4}$: полупарабола $y = \\sqrt x$, сдвинутая влево на $4$ и отражённая вниз. Область определения $[-4; +\\infty)$, значения $(-\\infty; 0]$.

**Пример 9.** $y = \\lvert x^2 - 4 \\rvert$: парабола, у которой часть на $(-2; 2)$ отражена вверх. Наименьшее значение $0$ при $x = \\pm 2$, локальный максимум $4$ при $x = 0$.

## Производная и монотонность

**Пример 10.** $f(x) = x^3 - 3x^2 - 9x + 1$. $f' = 3x^2 - 6x - 9 = 3(x - 3)(x + 1)$. Возрастает на $(-\\infty; -1]$ и $[3; +\\infty)$, убывает на $[-1; 3]$. Максимум $f(-1) = 6$, минимум $f(3) = -26$.

**Пример 11.** Наибольшее и наименьшее значения $f(x) = x^3 - 3x^2 - 9x + 1$ на $[0; 4]$: кандидаты — критическая точка $x = 3$ внутри и концы отрезка. $f(0) = 1$, $f(3) = -26$, $f(4) = -19$. Наибольшее $1$, наименьшее $-26$.

**Пример 12.** $f(x) = \\dfrac{x^2 + 4}{x}$, $x > 0$. $f' = 1 - \\dfrac{4}{x^2} = 0$ при $x = 2$. Убывает на $(0; 2]$, возрастает на $[2; +\\infty)$, минимум $f(2) = 4$. Значения при $x > 0$: $[4; +\\infty)$.

**Пример 13.** $f(x) = xe^{-x}$. $f' = e^{-x}(1 - x)$, максимум при $x = 1$: $f(1) = \\dfrac1e$. При $x \\to +\\infty$ $f \\to 0$ (горизонтальная асимптота $y = 0$ справа).

## Чтение графика

На экзамене часто дан график $f'$ и спрашивают о $f$: где $f' > 0$, $f$ возрастает; нуль $f'$ со сменой знака с $+$ на $-$ — максимум $f$. Наоборот, по графику $f$ наклон касательной в точке равен $f'$ в этой точке.

### Упражнения

1. Найдите область определения $f(x) = \\dfrac{\\sqrt{5 - x}}{\\log_2 x}$.
2. Найдите множество значений $y = 4\\cos x - 1$ и $y = \\sqrt{9 - x^2}$.
3. Определите, чётные, нечётные или ни те ни другие функции: $x\\sin x$, $\\dfrac{x}{x^2 + 1}$, $2^x$.
4. Найдите наименьший положительный период $y = \\cos 4x$ и $y = \\sin x\\cos x$.
5. Опишите, как график $y = \\log_3 (x + 2) - 1$ получается из $y = \\log_3 x$, укажите асимптоту и нуль.
6. Исследуйте $f(x) = 2x^3 - 9x^2 + 12x$: промежутки монотонности и экстремумы.
7. Найдите наибольшее и наименьшее значения $f(x) = x^4 - 8x^2 + 3$ на $[-1; 3]$.
8. Для $f(x) = \\dfrac{x^2 - 3}{x - 2}$ найдите критические точки и экстремумы.

### Ответы

1. $x \\le 5$, $x > 0$, $x \\ne 1$: $D = (0; 1) \\cup (1; 5]$. 2. $[-5; 3]$; $[0; 3]$. 3. Чётная ($(-x)\\sin(-x) = x\\sin x$); нечётная; ни та ни другая. 4. $\\dfrac{\\pi}{2}$; $\\sin x\\cos x = \\dfrac12\\sin 2x$, период $\\pi$. 5. Сдвиг влево на $2$, вниз на $1$; асимптота $x = -2$; нуль: $\\log_3 (x + 2) = 1$, $x = 1$. 6. $f' = 6x^2 - 18x + 12 = 6(x - 1)(x - 2)$: возрастает на $(-\\infty; 1]$ и $[2; +\\infty)$, убывает на $[1; 2]$; макс $f(1) = 5$, мин $f(2) = 4$. 7. $f' = 4x^3 - 16x = 4x(x - 2)(x + 2)$, критические точки в отрезке: $0, 2$. $f(-1) = -4$, $f(0) = 3$, $f(2) = -13$, $f(3) = 12$. Наибольшее $12$, наименьшее $-13$. 8. $f' = \\dfrac{2x(x - 2) - (x^2 - 3)}{(x - 2)^2} = \\dfrac{x^2 - 4x + 3}{(x - 2)^2} = \\dfrac{(x - 1)(x - 3)}{(x - 2)^2}$; макс $f(1) = 2$, мин $f(3) = 6$.`,
      },
      [
        q(t("The domain of √(x + 2)/(x − 3) is…", "√(x + 2)/(x − 3)-ի որոշման տիրույթը…", "Область определения √(x + 2)/(x − 3) —"), [t("x ≥ −2", "x ≥ −2", "x ≥ −2"), t("x ≥ −2, x ≠ 3", "x ≥ −2, x ≠ 3", "x ≥ −2, x ≠ 3"), t("x > 3", "x > 3", "x > 3")], 1),
        q(t("The range of 3 − 2 sin x is…", "3 − 2 sin x-ի արժեքների բազմությունը…", "Множество значений 3 − 2 sin x —"), [t("[1; 5]", "[1; 5]", "[1; 5]"), t("[−2; 2]", "[−2; 2]", "[−2; 2]"), t("[3; 5]", "[3; 5]", "[3; 5]")], 0),
        q(t("x⁴ cos x is…", "x⁴ cos x-ը…", "x⁴ cos x —"), [t("even", "զույգ է", "чётная"), t("odd", "կենտ է", "нечётная"), t("neither", "ոչ մեկը", "ни та ни другая")], 0),
        q(t("The graph of y = f(x − 1) + 3 is f shifted…", "y = f(x − 1) + 3-ի գրաֆիկը f-ի տեղաշարժն է…", "График y = f(x − 1) + 3 — это f, сдвинутая…"), [t("left 1, up 3", "ձախ 1, վերև 3", "влево на 1, вверх на 3"), t("right 1, up 3", "աջ 1, վերև 3", "вправо на 1, вверх на 3"), t("right 1, down 3", "աջ 1, ներքև 3", "вправо на 1, вниз на 3")], 1),
        q(t("Where f′ changes sign from + to −, f has…", "Որտեղ f′-ի նշանը +-ից փոխվում է −-ի, f-ն ունի…", "Где f′ меняет знак с + на −, у f…"), [t("a minimum", "մինիմում", "минимум"), t("a maximum", "մաքսիմում", "максимум"), t("an inflection point", "շրջման կետ", "точка перегиба")], 1),
        q(t("The largest value of f on [a; b] is found among…", "f-ի ամենամեծ արժեքը [a; b]-ի վրա փնտրվում է…", "Наибольшее значение f на [a; b] ищут среди…"), [t("critical points inside and the endpoints", "ներսի կրիտիկական կետերի և ծայրակետերի մեջ", "критических точек внутри и концов отрезка"), t("only the endpoints", "միայն ծայրակետերի մեջ", "только концов отрезка"), t("only the zeros of f", "միայն f-ի զրոների մեջ", "только нулей f")], 0),
      ],
    ),
    lesson(
      "review-word-problems",
      ["Review: word problems", "Ամփոփում․ տեքստային խնդիրներ", "Повторение: текстовые задачи"],
      {
        en: ["Translate motion, work and mixture problems into equations and systems", "Solve percentage, interest and growth problems with exponential models", "Solve optimization problems with the derivative and check the answer against the real situation"],
        hy: ["Շարժման, աշխատանքի և խառնուրդների խնդիրները թարգմանել հավասարումների և համակարգերի լեզվով", "Լուծել տոկոսների, տոկոսադրույքի և աճի խնդիրներ ցուցչային մոդելներով", "Լուծել օպտիմալացման խնդիրներ ածանցյալով և պատասխանը ստուգել իրական իրավիճակով"],
        ru: ["Переводить задачи на движение, работу и смеси на язык уравнений и систем", "Решать задачи на проценты, вклады и рост с показательными моделями", "Решать задачи на оптимизацию с помощью производной и проверять ответ по смыслу задачи"],
      },
      {
        en: `## Four steps for every word problem

**1.** Choose the unknown and name its unit. **2.** Express every other quantity through it. **3.** Write the equation from the condition that links them. **4.** Solve, then check that the answer makes sense (positive time, speed below the speed of light, whole number of people).

## Motion

$s = vt$. In a current the speed downstream is $v + c$, upstream $v - c$.

**Example 1.** A boat travels $24$ km downstream and back in $5$ hours; the current is $2$ km/h. Find the boat's own speed $v$.
$$\\dfrac{24}{v + 2} + \\dfrac{24}{v - 2} = 5 \\Rightarrow 24(2v) = 5(v^2 - 4) \\Rightarrow 5v^2 - 48v - 20 = 0 \\Rightarrow v = 10.$$
(The other root $-0{,}4$ is rejected.)

**Example 2.** Two cyclists start towards each other from towns $60$ km apart at $14$ and $16$ km/h. They meet after $\\dfrac{60}{30} = 2$ hours. If the second starts $1$ hour later: $14(t + 1) + 16t = 60$, $t = \\dfrac{46}{30} = 1\\dfrac{8}{15}$ h.

**Example 3.** A train was late by $10$ minutes and made it up over $120$ km by raising its speed by $10$ km/h. Planned speed $v$: $\\dfrac{120}{v} - \\dfrac{120}{v + 10} = \\dfrac16$, $7200 = v^2 + 10v$, $v = 80$ km/h.

## Work

Rate $=$ work $/$ time. Rates add when workers cooperate.

**Example 4.** Two pumps fill a pool in $6$ h together; the first alone needs $5$ h less than the second. If the second takes $x$ h: $\\dfrac{1}{x - 5} + \\dfrac{1}{x} = \\dfrac16$, $6(2x - 5) = x^2 - 5x$, $x^2 - 17x + 30 = 0$, $x = 15$ (reject $2$). First: $10$ h, second: $15$ h.

## Mixtures and percentages

**Example 5.** How much water must be added to $300$ g of a $20\\%$ salt solution to get $12\\%$? Salt is $60$ g: $\\dfrac{60}{300 + x} = 0{,}12$, $x = 200$ g.

**Example 6.** A price rose by $25\\%$ and then fell by $20\\%$. Overall: $1{,}25 \\cdot 0{,}8 = 1$, so the price is unchanged. In general, successive changes **multiply**, they do not add.

**Example 7.** A deposit grows at $8\\%$ per year. After $n$ years it is $A \\cdot 1{,}08^n$. Doubling time: $1{,}08^n = 2$, $n = \\dfrac{\\ln 2}{\\ln 1{,}08} \\approx 9$ years.

**Example 8.** A town's population falls by $3\\%$ a year from $50\\,000$. After $10$ years: $50\\,000 \\cdot 0{,}97^{10} \\approx 36\\,900$.

## Optimization

Write the quantity to optimize as a function of one variable, find the domain, and use the derivative.

**Example 9.** A rectangular field along a river is fenced on three sides with $200$ m of fence. Maximize the area. Sides $x$ (perpendicular) and $200 - 2x$: $S = x(200 - 2x)$, $S' = 200 - 4x = 0$, $x = 50$, area $5000$ m$^2$.

**Example 10.** An open box is made from a $12 \\times 12$ sheet by cutting squares of side $x$ from the corners. $V = x(12 - 2x)^2$, $0 < x < 6$. $V' = (12 - 2x)^2 - 4x(12 - 2x) = (12 - 2x)(12 - 6x) = 0$, $x = 2$. $V_{\\max} = 2 \\cdot 64 = 128$.

**Example 11.** Among all rectangles with perimeter $40$, the square $10 \\times 10$ has the largest area: $S = x(20 - x)$, maximum at $x = 10$.

**Example 12.** The cost of a cylindrical can with volume $V = 500$ cm$^3$ is proportional to its surface area $A = 2\\pi r^2 + \\dfrac{1000}{r}$. $A' = 4\\pi r - \\dfrac{1000}{r^2} = 0$, $r^3 = \\dfrac{250}{\\pi}$, $r \\approx 4{,}3$ cm, and then $h = \\dfrac{500}{\\pi r^2} = 2r$: the height equals the diameter.

### Exercises

1. A motorboat goes $36$ km upstream and back in $5$ hours. The current is $3$ km/h. Find the boat's speed in still water.
2. A car covered $240$ km. Had it gone $20$ km/h faster, it would have arrived $1$ hour earlier. Find its speed.
3. Two workers finish a job in $12$ days together. The first alone would need $10$ days more than the second. How long would each take alone?
4. How many grams of a $40\\%$ acid solution must be mixed with $300$ g of a $10\\%$ solution to get $25\\%$?
5. A price was raised by $20\\%$ twice and then cut by $30\\%$. By what percent did it change overall?
6. A deposit at $6\\%$ a year became $1{,}5$ times larger. How many whole years did it take?
7. Find two positive numbers with sum $30$ whose product is largest, and two with product $64$ whose sum is smallest.
8. A rectangular plot is fenced with $120$ m of fence on three sides, the fourth side being a wall. Find the maximum area and the dimensions.

### Answers

1. $\\dfrac{36}{v - 3} + \\dfrac{36}{v + 3} = 5$, $72v = 5v^2 - 45$, $5v^2 - 72v - 45 = 0$, $v = 15$ km/h. 2. $\\dfrac{240}{v} - \\dfrac{240}{v + 20} = 1$, $v^2 + 20v - 4800 = 0$, $v = 60$ km/h. 3. $\\dfrac{1}{x} + \\dfrac{1}{x + 10} = \\dfrac{1}{12}$, $x^2 - 14x - 120 = 0$, $x = 20$: $20$ and $30$ days. 4. $0{,}4x + 30 = 0{,}25(300 + x)$, $0{,}15x = 45$, $x = 300$ g. 5. $1{,}2^2 \\cdot 0{,}7 = 1{,}008$: up by $0{,}8\\%$. 6. $1{,}06^n \\ge 1{,}5$, $n \\ge \\dfrac{\\ln 1{,}5}{\\ln 1{,}06} \\approx 6{,}96$: $7$ years. 7. $15$ and $15$; $8$ and $8$ (by $S = x + \\dfrac{64}{x}$, $S' = 1 - \\dfrac{64}{x^2} = 0$). 8. $S = x(120 - 2x)$, $x = 30$: $30 \\times 60$ m, area $1800$ m$^2$.`,
        hy: `## Չորս քայլ ցանկացած տեքստային խնդրի համար

**1.** Ընտրեք անհայտը և նշեք դրա չափման միավորը։ **2.** Մնացած բոլոր մեծություններն արտահայտեք դրանով։ **3.** Գրեք հավասարումը դրանք կապող պայմանից։ **4.** Լուծեք, ապա ստուգեք, որ պատասխանն իմաստ ունի (դրական ժամանակ, խելամիտ արագություն, մարդկանց ամբողջ թիվ)։

## Շարժում

$s = vt$։ Հոսանքով արագությունը $v + c$ է, հոսանքին հակառակ՝ $v - c$։

**Օրինակ 1։** Նավակը $24$ կմ անցնում է հոսանքով և վերադառնում $5$ ժամում, հոսանքի արագությունը $2$ կմ/ժ է։ Գտեք նավակի սեփական $v$ արագությունը։
$$\\dfrac{24}{v + 2} + \\dfrac{24}{v - 2} = 5 \\Rightarrow 24(2v) = 5(v^2 - 4) \\Rightarrow 5v^2 - 48v - 20 = 0 \\Rightarrow v = 10.$$
(Մյուս արմատը՝ $-0{,}4$, չի բավարարում։)

**Օրինակ 2։** Երկու հեծանվորդ միմյանց ընդառաջ դուրս են գալիս $60$ կմ հեռավորության վրա գտնվող քաղաքներից $14$ և $16$ կմ/ժ արագությամբ։ Նրանք հանդիպում են $\\dfrac{60}{30} = 2$ ժամ հետո։ Եթե երկրորդը դուրս գա $1$ ժամ ուշ․ $14(t + 1) + 16t = 60$, $t = \\dfrac{46}{30} = 1\\dfrac{8}{15}$ ժ։

**Օրինակ 3։** Գնացքն ուշացավ $10$ րոպեով և $120$ կմ-ի վրա փոխհատուցեց՝ արագությունը մեծացնելով $10$ կմ/ժ-ով։ Պլանային $v$ արագությունը․ $\\dfrac{120}{v} - \\dfrac{120}{v + 10} = \\dfrac16$, $7200 = v^2 + 10v$, $v = 80$ կմ/ժ։

## Աշխատանք

Արտադրողականություն $=$ աշխատանք $/$ ժամանակ։ Համատեղ աշխատելիս արտադրողականությունները գումարվում են։

**Օրինակ 4։** Երկու պոմպ միասին լողավազանը լցնում են $6$ ժամում, առաջինին միայնակ պետք է $5$ ժամ պակաս, քան երկրորդին։ Եթե երկրորդին պետք է $x$ ժամ․ $\\dfrac{1}{x - 5} + \\dfrac{1}{x} = \\dfrac16$, $6(2x - 5) = x^2 - 5x$, $x^2 - 17x + 30 = 0$, $x = 15$ ($2$-ը չի բավարարում)։ Առաջինը՝ $10$ ժ, երկրորդը՝ $15$ ժ։

## Խառնուրդներ և տոկոսներ

**Օրինակ 5։** Որքա՞ն ջուր պետք է ավելացնել $300$ գ $20\\%$-անոց աղի լուծույթին, որ ստացվի $12\\%$-անոց։ Աղը $60$ գ է․ $\\dfrac{60}{300 + x} = 0{,}12$, $x = 200$ գ։

**Օրինակ 6։** Գինը բարձրացավ $25\\%$-ով, ապա իջավ $20\\%$-ով։ Ընդհանուր․ $1{,}25 \\cdot 0{,}8 = 1$, ուստի գինը չի փոխվել։ Ընդհանրապես, հաջորդական փոփոխությունները **բազմապատկվում են**, ոչ թե գումարվում։

**Օրինակ 7։** Ավանդն աճում է տարեկան $8\\%$-ով։ $n$ տարի հետո այն $A \\cdot 1{,}08^n$ է։ Կրկնապատկման ժամանակը․ $1{,}08^n = 2$, $n = \\dfrac{\\ln 2}{\\ln 1{,}08} \\approx 9$ տարի։

**Օրինակ 8։** Քաղաքի բնակչությունը տարեկան նվազում է $3\\%$-ով $50\\,000$-ից։ $10$ տարի հետո․ $50\\,000 \\cdot 0{,}97^{10} \\approx 36\\,900$։

## Օպտիմալացում

Օպտիմալացվող մեծությունը գրեք մեկ փոփոխականի ֆունկցիայի տեսքով, գտեք տիրույթը և օգտվեք ածանցյալից։

**Օրինակ 9։** Գետի ափին ուղղանկյուն դաշտն երեք կողմից պարսպապատված է $200$ մ ցանկապատով։ Առավելագույնի հասցրեք մակերեսը։ Կողմերը՝ $x$ (ուղղահայաց) և $200 - 2x$․ $S = x(200 - 2x)$, $S' = 200 - 4x = 0$, $x = 50$, մակերեսը $5000$ մ$^2$։

**Օրինակ 10։** Բաց արկղը պատրաստվում է $12 \\times 12$ թիթեղից՝ անկյուններից կտրելով $x$ կողմով քառակուսիներ։ $V = x(12 - 2x)^2$, $0 < x < 6$։ $V' = (12 - 2x)^2 - 4x(12 - 2x) = (12 - 2x)(12 - 6x) = 0$, $x = 2$։ $V_{\\max} = 2 \\cdot 64 = 128$։

**Օրինակ 11։** $40$ պարագծով բոլոր ուղղանկյունների մեջ ամենամեծ մակերեսն ունի $10 \\times 10$ քառակուսին․ $S = x(20 - x)$, մաքսիմումը $x = 10$-ում։

**Օրինակ 12։** $V = 500$ սմ$^3$ ծավալով գլանաձև տուփի արժեքը համեմատական է նրա մակերևույթին՝ $A = 2\\pi r^2 + \\dfrac{1000}{r}$։ $A' = 4\\pi r - \\dfrac{1000}{r^2} = 0$, $r^3 = \\dfrac{250}{\\pi}$, $r \\approx 4{,}3$ սմ, և այդ դեպքում $h = \\dfrac{500}{\\pi r^2} = 2r$․ բարձրությունը հավասար է տրամագծին։

### Վարժություններ

1. Մոտորանավակը $36$ կմ անցնում է հոսանքին հակառակ և վերադառնում $5$ ժամում։ Հոսանքի արագությունը $3$ կմ/ժ է։ Գտեք նավակի արագությունն անշարժ ջրում։
2. Ավտոմեքենան անցել է $240$ կմ։ Եթե գնար $20$ կմ/ժ-ով ավելի արագ, կհասներ $1$ ժամ շուտ։ Գտեք արագությունը։
3. Երկու բանվոր միասին աշխատանքն ավարտում են $12$ օրում։ Առաջինին միայնակ պետք կլիներ $10$ օր ավելի, քան երկրորդին։ Որքա՞ն ժամանակ կպահանջվեր յուրաքանչյուրին։
4. Քանի՞ գրամ $40\\%$-անոց թթվի լուծույթ պետք է խառնել $300$ գ $10\\%$-անոց լուծույթին, որ ստացվի $25\\%$-անոց։
5. Գինն երկու անգամ բարձրացվել է $20\\%$-ով, ապա իջեցվել $30\\%$-ով։ Քանի՞ տոկոսով է փոխվել ընդհանուր։
6. Տարեկան $6\\%$-ով ավանդը դարձել է $1{,}5$ անգամ մեծ։ Քանի՞ լրիվ տարի է պահանջվել։
7. Գտեք $30$ գումարով երկու դրական թիվ, որոնց արտադրյալն ամենամեծն է, և $64$ արտադրյալով երկու թիվ, որոնց գումարն ամենափոքրն է։
8. Ուղղանկյուն հողամասն երեք կողմից պարսպապատված է $120$ մ ցանկապատով, չորրորդ կողմը պատ է։ Գտեք ամենամեծ մակերեսը և չափերը։

### Պատասխաններ

1. $\\dfrac{36}{v - 3} + \\dfrac{36}{v + 3} = 5$, $72v = 5v^2 - 45$, $5v^2 - 72v - 45 = 0$, $v = 15$ կմ/ժ։ 2. $\\dfrac{240}{v} - \\dfrac{240}{v + 20} = 1$, $v^2 + 20v - 4800 = 0$, $v = 60$ կմ/ժ։ 3. $\\dfrac{1}{x} + \\dfrac{1}{x + 10} = \\dfrac{1}{12}$, $x^2 - 14x - 120 = 0$, $x = 20$․ $20$ և $30$ օր։ 4. $0{,}4x + 30 = 0{,}25(300 + x)$, $0{,}15x = 45$, $x = 300$ գ։ 5. $1{,}2^2 \\cdot 0{,}7 = 1{,}008$․ աճ $0{,}8\\%$-ով։ 6. $1{,}06^n \\ge 1{,}5$, $n \\ge \\dfrac{\\ln 1{,}5}{\\ln 1{,}06} \\approx 6{,}96$․ $7$ տարի։ 7. $15$ և $15$, $8$ և $8$ ($S = x + \\dfrac{64}{x}$, $S' = 1 - \\dfrac{64}{x^2} = 0$)։ 8. $S = x(120 - 2x)$, $x = 30$․ $30 \\times 60$ մ, մակերեսը $1800$ մ$^2$։`,
        ru: `## Четыре шага для любой текстовой задачи

**1.** Выберите неизвестное и назовите его единицу измерения. **2.** Выразите через него все остальные величины. **3.** Составьте уравнение из условия, которое их связывает. **4.** Решите и проверьте, что ответ имеет смысл (положительное время, разумная скорость, целое число людей).

## Движение

$s = vt$. По течению скорость равна $v + c$, против течения $v - c$.

**Пример 1.** Лодка проходит $24$ км по течению и возвращается за $5$ часов; скорость течения $2$ км/ч. Найдите собственную скорость лодки $v$.
$$\\dfrac{24}{v + 2} + \\dfrac{24}{v - 2} = 5 \\Rightarrow 24(2v) = 5(v^2 - 4) \\Rightarrow 5v^2 - 48v - 20 = 0 \\Rightarrow v = 10.$$
(Второй корень $-0{,}4$ не подходит.)

**Пример 2.** Два велосипедиста выезжают навстречу друг другу из городов на расстоянии $60$ км со скоростями $14$ и $16$ км/ч. Они встретятся через $\\dfrac{60}{30} = 2$ часа. Если второй выедет на $1$ час позже: $14(t + 1) + 16t = 60$, $t = \\dfrac{46}{30} = 1\\dfrac{8}{15}$ ч.

**Пример 3.** Поезд опоздал на $10$ минут и наверстал опоздание на $120$ км, увеличив скорость на $10$ км/ч. Плановая скорость $v$: $\\dfrac{120}{v} - \\dfrac{120}{v + 10} = \\dfrac16$, $7200 = v^2 + 10v$, $v = 80$ км/ч.

## Работа

Производительность $=$ работа $/$ время. При совместной работе производительности складываются.

**Пример 4.** Два насоса вместе наполняют бассейн за $6$ ч; первому одному нужно на $5$ ч меньше, чем второму. Если второму нужно $x$ ч: $\\dfrac{1}{x - 5} + \\dfrac{1}{x} = \\dfrac16$, $6(2x - 5) = x^2 - 5x$, $x^2 - 17x + 30 = 0$, $x = 15$ ($2$ не подходит). Первый: $10$ ч, второй: $15$ ч.

## Смеси и проценты

**Пример 5.** Сколько воды нужно добавить к $300$ г $20\\%$-го раствора соли, чтобы получить $12\\%$-й? Соли $60$ г: $\\dfrac{60}{300 + x} = 0{,}12$, $x = 200$ г.

**Пример 6.** Цена выросла на $25\\%$, а затем упала на $20\\%$. Итого: $1{,}25 \\cdot 0{,}8 = 1$, цена не изменилась. Вообще последовательные изменения **перемножаются**, а не складываются.

**Пример 7.** Вклад растёт на $8\\%$ в год. Через $n$ лет он равен $A \\cdot 1{,}08^n$. Время удвоения: $1{,}08^n = 2$, $n = \\dfrac{\\ln 2}{\\ln 1{,}08} \\approx 9$ лет.

**Пример 8.** Население города уменьшается на $3\\%$ в год с $50\\,000$. Через $10$ лет: $50\\,000 \\cdot 0{,}97^{10} \\approx 36\\,900$.

## Оптимизация

Запишите оптимизируемую величину как функцию одной переменной, найдите область определения и используйте производную.

**Пример 9.** Прямоугольное поле вдоль реки огораживают с трёх сторон забором длиной $200$ м. Найдите наибольшую площадь. Стороны $x$ (перпендикулярная) и $200 - 2x$: $S = x(200 - 2x)$, $S' = 200 - 4x = 0$, $x = 50$, площадь $5000$ м$^2$.

**Пример 10.** Открытую коробку делают из листа $12 \\times 12$, вырезая по углам квадраты со стороной $x$. $V = x(12 - 2x)^2$, $0 < x < 6$. $V' = (12 - 2x)^2 - 4x(12 - 2x) = (12 - 2x)(12 - 6x) = 0$, $x = 2$. $V_{\\max} = 2 \\cdot 64 = 128$.

**Пример 11.** Среди всех прямоугольников с периметром $40$ наибольшую площадь имеет квадрат $10 \\times 10$: $S = x(20 - x)$, максимум при $x = 10$.

**Пример 12.** Стоимость цилиндрической банки объёмом $V = 500$ см$^3$ пропорциональна площади поверхности $A = 2\\pi r^2 + \\dfrac{1000}{r}$. $A' = 4\\pi r - \\dfrac{1000}{r^2} = 0$, $r^3 = \\dfrac{250}{\\pi}$, $r \\approx 4{,}3$ см, и тогда $h = \\dfrac{500}{\\pi r^2} = 2r$: высота равна диаметру.

### Упражнения

1. Моторная лодка проходит $36$ км против течения и возвращается за $5$ часов. Скорость течения $3$ км/ч. Найдите скорость лодки в стоячей воде.
2. Автомобиль проехал $240$ км. Если бы он ехал на $20$ км/ч быстрее, то прибыл бы на $1$ час раньше. Найдите его скорость.
3. Два рабочих вместе выполняют работу за $12$ дней. Первому одному понадобилось бы на $10$ дней больше, чем второму. За сколько дней каждый сделает работу один?
4. Сколько граммов $40\\%$-го раствора кислоты нужно смешать с $300$ г $10\\%$-го раствора, чтобы получить $25\\%$-й?
5. Цену дважды повышали на $20\\%$, а затем снизили на $30\\%$. На сколько процентов она изменилась в итоге?
6. Вклад под $6\\%$ годовых увеличился в $1{,}5$ раза. Сколько полных лет на это потребовалось?
7. Найдите два положительных числа с суммой $30$, произведение которых наибольшее, и два числа с произведением $64$, сумма которых наименьшая.
8. Прямоугольный участок огорожен забором длиной $120$ м с трёх сторон, четвёртая сторона — стена. Найдите наибольшую площадь и размеры.

### Ответы

1. $\\dfrac{36}{v - 3} + \\dfrac{36}{v + 3} = 5$, $72v = 5v^2 - 45$, $5v^2 - 72v - 45 = 0$, $v = 15$ км/ч. 2. $\\dfrac{240}{v} - \\dfrac{240}{v + 20} = 1$, $v^2 + 20v - 4800 = 0$, $v = 60$ км/ч. 3. $\\dfrac{1}{x} + \\dfrac{1}{x + 10} = \\dfrac{1}{12}$, $x^2 - 14x - 120 = 0$, $x = 20$: $20$ и $30$ дней. 4. $0{,}4x + 30 = 0{,}25(300 + x)$, $0{,}15x = 45$, $x = 300$ г. 5. $1{,}2^2 \\cdot 0{,}7 = 1{,}008$: рост на $0{,}8\\%$. 6. $1{,}06^n \\ge 1{,}5$, $n \\ge \\dfrac{\\ln 1{,}5}{\\ln 1{,}06} \\approx 6{,}96$: $7$ лет. 7. $15$ и $15$; $8$ и $8$ (по $S = x + \\dfrac{64}{x}$, $S' = 1 - \\dfrac{64}{x^2} = 0$). 8. $S = x(120 - 2x)$, $x = 30$: $30 \\times 60$ м, площадь $1800$ м$^2$.`,
      },
      [
        q(t("Speed downstream with own speed v and current c is…", "Հոսանքով արագությունը v սեփական և c հոսանքի արագության դեպքում…", "Скорость по течению при собственной скорости v и течении c —"), [t("v − c", "v − c", "v − c"), t("v + c", "v + c", "v + c"), t("vc", "vc", "vc")], 1),
        q(t("A rise of 25% followed by a fall of 20% changes the price by…", "25% բարձրացումը և հետո 20% իջեցումը գինը փոխում են…", "Рост на 25%, затем падение на 20% меняют цену на…"), [t("+5%", "+5%", "+5%"), t("0%", "0%", "0%"), t("−5%", "−5%", "−5%")], 1),
        q(t("If two workers' times are 10 h and 15 h, together they need…", "Եթե երկու բանվորի ժամանակները 10 և 15 ժ են, միասին պետք է…", "Если время двух рабочих 10 ч и 15 ч, вместе им нужно…"), [t("12,5 h", "12,5 ժ", "12,5 ч"), t("6 h", "6 ժ", "6 ч"), t("25 h", "25 ժ", "25 ч")], 1),
        q(t("A deposit at 8% per year after n years equals…", "Տարեկան 8%-ով ավանդը n տարի հետո հավասար է…", "Вклад под 8% годовых через n лет равен…"), [t("A·1,08ⁿ", "A·1,08ⁿ", "A·1,08ⁿ"), t("A·(1 + 0,08n)", "A·(1 + 0,08n)", "A·(1 + 0,08n)"), t("A·8ⁿ", "A·8ⁿ", "A·8ⁿ")], 0),
        q(t("The area x(200 − 2x) is largest at x = …", "x(200 − 2x) մակերեսն ամենամեծն է x = …", "Площадь x(200 − 2x) наибольшая при x = …"), [t("100", "100", "100"), t("50", "50", "50"), t("25", "25", "25")], 1),
        q(t("A negative root in a motion problem is…", "Շարժման խնդրում բացասական արմատը…", "Отрицательный корень в задаче на движение…"), [t("rejected as meaningless", "մերժվում է որպես անիմաստ", "отбрасывается как лишённый смысла"), t("the second answer", "երկրորդ պատասխանն է", "второй ответ"), t("a sign of an error in the equation", "հավասարման սխալի նշան է", "признак ошибки в уравнении")], 0),
      ],
    ),
    lesson(
      "mock-exam",
      ["Mock exam", "Փորձնական քննություն", "Пробный экзамен"],
      {
        en: ["Work through a complete timed paper covering every topic of the course", "Manage time: do the short tasks first, then the multi-step problems", "Check answers systematically against the domain and the sense of the problem"],
        hy: ["Լուծել դասընթացի բոլոր թեմաները ներառող լրիվ աշխատանք սահմանափակ ժամանակում", "Կառավարել ժամանակը․ սկզբում կարճ առաջադրանքները, ապա բազմաքայլ խնդիրները", "Պատասխանները համակարգված ստուգել որոշման տիրույթով և խնդրի իմաստով"],
        ru: ["Прорешать полный вариант на время, охватывающий все темы курса", "Распределять время: сначала короткие задания, затем многошаговые задачи", "Систематически проверять ответы по ОДЗ и смыслу задачи"],
      },
      {
        en: `## How to use this lesson

Set a timer for $120$ minutes and solve Part A (short answers, $1$ point each), Part B (full solutions, $2$ points each) and Part C ($3$ points each) without looking at the solutions. Then mark yourself: $20$ points is the maximum. Only after that read the worked solutions below.

## Part A (short answer)

**A1.** Evaluate $\\log_2 80 - \\log_2 5 + 8^{2/3}$.
**A2.** Simplify $\\dfrac{1 - \\cos 2\\alpha}{2\\sin\\alpha}$.
**A3.** Solve $\\sqrt{x + 11} = x - 1$.
**A4.** Solve $\\left(\\dfrac13\\right)^{2x - 1} > 9$.
**A5.** Find $f'(1)$ for $f(x) = x^2 e^{x}$.
**A6.** Find $\\lvert z \\rvert$ and $\\bar z$ for $z = (2 - i)(1 + 3i)$.

## Part B (full solution)

**B1.** Solve $\\log_2 (x - 3) + \\log_2 (x + 4) = 3$.
**B2.** Solve $2\\cos^2 x - 5\\cos x + 2 = 0$ on $[0; 2\\pi]$.
**B3.** Find the intervals of monotonicity and the extrema of $f(x) = x^3 - 6x^2 + 9x - 2$.
**B4.** Compute $\\displaystyle\\int_0^2 (3x^2 - 2x + 1)\\,dx$ and the area between $y = 4 - x^2$ and the $x$-axis.

## Part C (multi-step)

**C1.** For which values of $a$ does $x^2 - 2(a + 1)x + a^2 + 5 = 0$ have two distinct real roots both greater than $1$?
**C2.** A cyclist rode $30$ km. On the way back the speed was $3$ km/h higher and the trip took $30$ minutes less. Find the speed there and back.

## Solutions

**A1.** $\\log_2 16 + 4 = 4 + 4 = 8$.

**A2.** $\\dfrac{1 - \\cos 2\\alpha}{2\\sin\\alpha} = \\dfrac{2\\sin^2\\alpha}{2\\sin\\alpha} = \\sin\\alpha$.

**A3.** $x \\ge 1$; $x + 11 = x^2 - 2x + 1$, $x^2 - 3x - 10 = 0$, $x = 5$ ($x = -2$ rejected).

**A4.** $9 = \\left(\\dfrac13\\right)^{-2}$, base less than $1$: $2x - 1 < -2$, $x < -\\dfrac12$.

**A5.** $f' = 2xe^x + x^2 e^x = e^x(x^2 + 2x)$, $f'(1) = 3e$.

**A6.** $z = 2 + 6i - i - 3i^2 = 5 + 5i$, $\\lvert z \\rvert = 5\\sqrt2$, $\\bar z = 5 - 5i$.

**B1.** Domain $x > 3$. $(x - 3)(x + 4) = 8$, $x^2 + x - 20 = 0$, $x = 4$ or $x = -5$. Answer: $x = 4$.

**B2.** $\\cos x = \\dfrac12$ (the root $2$ is impossible): $x = \\dfrac{\\pi}{3}$, $x = \\dfrac{5\\pi}{3}$.

**B3.** $f' = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)$. Increasing on $(-\\infty; 1]$ and $[3; +\\infty)$, decreasing on $[1; 3]$. Max $f(1) = 2$, min $f(3) = -2$.

**B4.** $\\left[x^3 - x^2 + x\\right]_0^2 = 8 - 4 + 2 = 6$. Area: $\\displaystyle\\int_{-2}^{2}(4 - x^2)\\,dx = \\left[4x - \\dfrac{x^3}{3}\\right]_{-2}^{2} = 2\\left(8 - \\dfrac83\\right) = \\dfrac{32}{3}$.

**C1.** Let $f(x) = x^2 - 2(a + 1)x + a^2 + 5$. Conditions: $D > 0$, $f(1) > 0$, vertex $x_0 = a + 1 > 1$.
$D/4 = (a + 1)^2 - a^2 - 5 = 2a - 4 > 0 \\Rightarrow a > 2$.
$f(1) = 1 - 2a - 2 + a^2 + 5 = a^2 - 2a + 4 > 0$ always (discriminant negative).
$a + 1 > 1 \\Rightarrow a > 0$.
Answer: $a > 2$.

**C2.** Speed there $v$: $\\dfrac{30}{v} - \\dfrac{30}{v + 3} = \\dfrac12$, $180 = v^2 + 3v$, $v^2 + 3v - 180 = 0$, $v = 12$ ($-15$ rejected). Speeds $12$ and $15$ km/h.

## Marking scheme and common slips

- A3 and B1: a root outside the domain costs the whole point. Always write the domain first.
- A4: forgetting to flip the inequality for a base less than $1$.
- B2: writing only $\\dfrac{\\pi}{3}$ and forgetting the second solution on $[0; 2\\pi]$.
- C1: checking only $D > 0$. Root location needs three conditions: discriminant, the sign of $f$ at the boundary point, and the position of the vertex.

### Exercises

A second paper for independent work. Give yourself $120$ minutes again.

1. Evaluate $\\log_3 54 - \\log_3 2 + \\left(\\dfrac{1}{16}\\right)^{-3/4}$.
2. Solve $\\dfrac{x - 2}{x + 1} \\ge 2$.
3. Solve $4^{x} - 2^{x + 1} - 8 = 0$.
4. Solve $\\sin 2x + \\cos x = 0$ on $[0; \\pi]$.
5. Find the tangent to $y = x^3 - 2x$ at $x = 1$ and the largest value of this function on $[0; 2]$.
6. Compute $\\displaystyle\\int_1^e \\dfrac{2}{x}\\,dx$ and the area between $y = x^2$ and $y = 2x$.
7. Write $z = -1 + i\\sqrt3$ in trigonometric form and find $z^3$.
8. For which $a$ does $x^2 + ax + 9 = 0$ have two distinct negative roots?

### Answers

1. $\\log_3 27 + 8 = 3 + 8 = 11$. 2. $\\dfrac{x - 2 - 2x - 2}{x + 1} \\ge 0$, $\\dfrac{-x - 4}{x + 1} \\ge 0$: $-4 \\le x < -1$. 3. $2^x = 4$ ($-2$ rejected): $x = 2$. 4. $\\cos x(2\\sin x + 1) = 0$: $x = \\dfrac{\\pi}{2}$ (since $\\sin x = -\\dfrac12$ has no solutions on $[0; \\pi]$). 5. $y' = 3x^2 - 2$, $y'(1) = 1$, $y(1) = -1$: tangent $y = x - 2$; on $[0; 2]$: $y(0) = 0$, $y\\left(\\sqrt{2/3}\\right) < 0$, $y(2) = 4$: largest $4$. 6. $2\\ln e - 2\\ln 1 = 2$; $\\displaystyle\\int_0^2 (2x - x^2)\\,dx = 4 - \\dfrac83 = \\dfrac43$. 7. $\\lvert z \\rvert = 2$, $\\arg z = \\dfrac{2\\pi}{3}$: $z = 2\\left(\\cos\\dfrac{2\\pi}{3} + i\\sin\\dfrac{2\\pi}{3}\\right)$, $z^3 = 8(\\cos 2\\pi + i\\sin 2\\pi) = 8$. 8. $D = a^2 - 36 > 0$, sum $-a < 0$, product $9 > 0$: $a > 6$.`,
        hy: `## Ինչպես օգտվել այս դասից

Դրեք $120$ րոպեի ժամաչափ և լուծեք A մասը (կարճ պատասխան, յուրաքանչյուրը $1$ միավոր), B մասը (լրիվ լուծում, յուրաքանչյուրը $2$ միավոր) և C մասը (յուրաքանչյուրը $3$ միավոր)՝ չնայելով լուծումներին։ Ապա գնահատեք ինքներդ ձեզ․ առավելագույնը $20$ միավոր է։ Միայն դրանից հետո կարդացեք ստորև բերված լուծումները։

## A մաս (կարճ պատասխան)

**A1.** Հաշվեք $\\log_2 80 - \\log_2 5 + 8^{2/3}$։
**A2.** Պարզեցրեք $\\dfrac{1 - \\cos 2\\alpha}{2\\sin\\alpha}$։
**A3.** Լուծեք $\\sqrt{x + 11} = x - 1$։
**A4.** Լուծեք $\\left(\\dfrac13\\right)^{2x - 1} > 9$։
**A5.** Գտեք $f'(1)$, եթե $f(x) = x^2 e^{x}$։
**A6.** Գտեք $\\lvert z \\rvert$ և $\\bar z$, եթե $z = (2 - i)(1 + 3i)$։

## B մաս (լրիվ լուծում)

**B1.** Լուծեք $\\log_2 (x - 3) + \\log_2 (x + 4) = 3$։
**B2.** Լուծեք $2\\cos^2 x - 5\\cos x + 2 = 0$ $[0; 2\\pi]$ վրա։
**B3.** Գտեք $f(x) = x^3 - 6x^2 + 9x - 2$-ի մոնոտոնության միջակայքերը և էքստրեմումները։
**B4.** Հաշվեք $\\displaystyle\\int_0^2 (3x^2 - 2x + 1)\\,dx$ և $y = 4 - x^2$-ի ու $x$ առանցքի միջև մակերեսը։

## C մաս (բազմաքայլ)

**C1.** $a$-ի ո՞ր արժեքների դեպքում $x^2 - 2(a + 1)x + a^2 + 5 = 0$ հավասարումն ունի երկու տարբեր իրական արմատ, որոնք երկուսն էլ մեծ են $1$-ից։
**C2.** Հեծանվորդն անցել է $30$ կմ։ Վերադարձի ճանապարհին արագությունը $3$ կմ/ժ-ով մեծ էր և ուղևորությունը տևեց $30$ րոպե պակաս։ Գտեք արագությունը գնալիս և վերադառնալիս։

## Լուծումներ

**A1.** $\\log_2 16 + 4 = 4 + 4 = 8$։

**A2.** $\\dfrac{1 - \\cos 2\\alpha}{2\\sin\\alpha} = \\dfrac{2\\sin^2\\alpha}{2\\sin\\alpha} = \\sin\\alpha$։

**A3.** $x \\ge 1$, $x + 11 = x^2 - 2x + 1$, $x^2 - 3x - 10 = 0$, $x = 5$ ($x = -2$ չի բավարարում)։

**A4.** $9 = \\left(\\dfrac13\\right)^{-2}$, հիմքը փոքր է $1$-ից․ $2x - 1 < -2$, $x < -\\dfrac12$։

**A5.** $f' = 2xe^x + x^2 e^x = e^x(x^2 + 2x)$, $f'(1) = 3e$։

**A6.** $z = 2 + 6i - i - 3i^2 = 5 + 5i$, $\\lvert z \\rvert = 5\\sqrt2$, $\\bar z = 5 - 5i$։

**B1.** Տիրույթ $x > 3$։ $(x - 3)(x + 4) = 8$, $x^2 + x - 20 = 0$, $x = 4$ կամ $x = -5$։ Պատասխան․ $x = 4$։

**B2.** $\\cos x = \\dfrac12$ ($2$ արմատն անհնար է)․ $x = \\dfrac{\\pi}{3}$, $x = \\dfrac{5\\pi}{3}$։

**B3.** $f' = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)$։ Աճում է $(-\\infty; 1]$ և $[3; +\\infty)$ վրա, նվազում է $[1; 3]$ վրա։ Մաքս $f(1) = 2$, մին $f(3) = -2$։

**B4.** $\\left[x^3 - x^2 + x\\right]_0^2 = 8 - 4 + 2 = 6$։ Մակերես․ $\\displaystyle\\int_{-2}^{2}(4 - x^2)\\,dx = \\left[4x - \\dfrac{x^3}{3}\\right]_{-2}^{2} = 2\\left(8 - \\dfrac83\\right) = \\dfrac{32}{3}$։

**C1.** Դիցուք $f(x) = x^2 - 2(a + 1)x + a^2 + 5$։ Պայմաններ․ $D > 0$, $f(1) > 0$, գագաթ $x_0 = a + 1 > 1$։
$D/4 = (a + 1)^2 - a^2 - 5 = 2a - 4 > 0 \\Rightarrow a > 2$։
$f(1) = 1 - 2a - 2 + a^2 + 5 = a^2 - 2a + 4 > 0$ միշտ (դիսկրիմինանտը բացասական է)։
$a + 1 > 1 \\Rightarrow a > 0$։
Պատասխան․ $a > 2$։

**C2.** Գնալու արագությունը $v$․ $\\dfrac{30}{v} - \\dfrac{30}{v + 3} = \\dfrac12$, $180 = v^2 + 3v$, $v^2 + 3v - 180 = 0$, $v = 12$ ($-15$ չի բավարարում)։ Արագությունները՝ $12$ և $15$ կմ/ժ։

## Գնահատման սխեմա և տարածված սխալներ

- A3 և B1․ տիրույթից դուրս արմատն արժե ամբողջ միավորը։ Միշտ սկզբում գրեք տիրույթը։
- A4․ $1$-ից փոքր հիմքի դեպքում անհավասարության նշանը չփոխելը։
- B2․ միայն $\\dfrac{\\pi}{3}$ գրելը և $[0; 2\\pi]$-ի երկրորդ լուծումը մոռանալը։
- C1․ միայն $D > 0$ ստուգելը։ Արմատների տեղադրությունը պահանջում է երեք պայման․ դիսկրիմինանտ, $f$-ի նշանը սահմանային կետում և գագաթի դիրքը։

### Վարժություններ

Երկրորդ աշխատանք ինքնուրույն լուծման համար։ Նորից տրամադրեք $120$ րոպե։

1. Հաշվեք $\\log_3 54 - \\log_3 2 + \\left(\\dfrac{1}{16}\\right)^{-3/4}$։
2. Լուծեք $\\dfrac{x - 2}{x + 1} \\ge 2$։
3. Լուծեք $4^{x} - 2^{x + 1} - 8 = 0$։
4. Լուծեք $\\sin 2x + \\cos x = 0$ $[0; \\pi]$ վրա։
5. Գտեք $y = x^3 - 2x$-ի շոշափողը $x = 1$-ում և այս ֆունկցիայի ամենամեծ արժեքը $[0; 2]$ վրա։
6. Հաշվեք $\\displaystyle\\int_1^e \\dfrac{2}{x}\\,dx$ և $y = x^2$-ի ու $y = 2x$-ի միջև մակերեսը։
7. Գրեք $z = -1 + i\\sqrt3$-ը եռանկյունաչափական տեսքով և գտեք $z^3$։
8. $a$-ի ո՞ր արժեքների դեպքում $x^2 + ax + 9 = 0$-ն ունի երկու տարբեր բացասական արմատ։

### Պատասխաններ

1. $\\log_3 27 + 8 = 3 + 8 = 11$։ 2. $\\dfrac{x - 2 - 2x - 2}{x + 1} \\ge 0$, $\\dfrac{-x - 4}{x + 1} \\ge 0$․ $-4 \\le x < -1$։ 3. $2^x = 4$ ($-2$ չի բավարարում)․ $x = 2$։ 4. $\\cos x(2\\sin x + 1) = 0$․ $x = \\dfrac{\\pi}{2}$ (քանի որ $\\sin x = -\\dfrac12$-ը $[0; \\pi]$ վրա լուծում չունի)։ 5. $y' = 3x^2 - 2$, $y'(1) = 1$, $y(1) = -1$․ շոշափողը $y = x - 2$, $[0; 2]$ վրա՝ $y(0) = 0$, $y\\left(\\sqrt{2/3}\\right) < 0$, $y(2) = 4$․ ամենամեծը $4$։ 6. $2\\ln e - 2\\ln 1 = 2$, $\\displaystyle\\int_0^2 (2x - x^2)\\,dx = 4 - \\dfrac83 = \\dfrac43$։ 7. $\\lvert z \\rvert = 2$, $\\arg z = \\dfrac{2\\pi}{3}$․ $z = 2\\left(\\cos\\dfrac{2\\pi}{3} + i\\sin\\dfrac{2\\pi}{3}\\right)$, $z^3 = 8(\\cos 2\\pi + i\\sin 2\\pi) = 8$։ 8. $D = a^2 - 36 > 0$, գումարը $-a < 0$, արտադրյալը $9 > 0$․ $a > 6$։`,
        ru: `## Как работать с этим уроком

Поставьте таймер на $120$ минут и решите часть A (краткий ответ, по $1$ баллу), часть B (полное решение, по $2$ балла) и часть C (по $3$ балла), не заглядывая в решения. Затем оцените себя: максимум $20$ баллов. Только после этого читайте разборы ниже.

## Часть A (краткий ответ)

**A1.** Вычислите $\\log_2 80 - \\log_2 5 + 8^{2/3}$.
**A2.** Упростите $\\dfrac{1 - \\cos 2\\alpha}{2\\sin\\alpha}$.
**A3.** Решите $\\sqrt{x + 11} = x - 1$.
**A4.** Решите $\\left(\\dfrac13\\right)^{2x - 1} > 9$.
**A5.** Найдите $f'(1)$ для $f(x) = x^2 e^{x}$.
**A6.** Найдите $\\lvert z \\rvert$ и $\\bar z$ для $z = (2 - i)(1 + 3i)$.

## Часть B (полное решение)

**B1.** Решите $\\log_2 (x - 3) + \\log_2 (x + 4) = 3$.
**B2.** Решите $2\\cos^2 x - 5\\cos x + 2 = 0$ на $[0; 2\\pi]$.
**B3.** Найдите промежутки монотонности и экстремумы $f(x) = x^3 - 6x^2 + 9x - 2$.
**B4.** Вычислите $\\displaystyle\\int_0^2 (3x^2 - 2x + 1)\\,dx$ и площадь между $y = 4 - x^2$ и осью $x$.

## Часть C (многошаговые)

**C1.** При каких $a$ уравнение $x^2 - 2(a + 1)x + a^2 + 5 = 0$ имеет два различных действительных корня, оба больше $1$?
**C2.** Велосипедист проехал $30$ км. На обратном пути скорость была на $3$ км/ч больше, и поездка заняла на $30$ минут меньше. Найдите скорость туда и обратно.

## Решения

**A1.** $\\log_2 16 + 4 = 4 + 4 = 8$.

**A2.** $\\dfrac{1 - \\cos 2\\alpha}{2\\sin\\alpha} = \\dfrac{2\\sin^2\\alpha}{2\\sin\\alpha} = \\sin\\alpha$.

**A3.** $x \\ge 1$; $x + 11 = x^2 - 2x + 1$, $x^2 - 3x - 10 = 0$, $x = 5$ ($x = -2$ не подходит).

**A4.** $9 = \\left(\\dfrac13\\right)^{-2}$, основание меньше $1$: $2x - 1 < -2$, $x < -\\dfrac12$.

**A5.** $f' = 2xe^x + x^2 e^x = e^x(x^2 + 2x)$, $f'(1) = 3e$.

**A6.** $z = 2 + 6i - i - 3i^2 = 5 + 5i$, $\\lvert z \\rvert = 5\\sqrt2$, $\\bar z = 5 - 5i$.

**B1.** ОДЗ $x > 3$. $(x - 3)(x + 4) = 8$, $x^2 + x - 20 = 0$, $x = 4$ или $x = -5$. Ответ: $x = 4$.

**B2.** $\\cos x = \\dfrac12$ (корень $2$ невозможен): $x = \\dfrac{\\pi}{3}$, $x = \\dfrac{5\\pi}{3}$.

**B3.** $f' = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)$. Возрастает на $(-\\infty; 1]$ и $[3; +\\infty)$, убывает на $[1; 3]$. Макс $f(1) = 2$, мин $f(3) = -2$.

**B4.** $\\left[x^3 - x^2 + x\\right]_0^2 = 8 - 4 + 2 = 6$. Площадь: $\\displaystyle\\int_{-2}^{2}(4 - x^2)\\,dx = \\left[4x - \\dfrac{x^3}{3}\\right]_{-2}^{2} = 2\\left(8 - \\dfrac83\\right) = \\dfrac{32}{3}$.

**C1.** Пусть $f(x) = x^2 - 2(a + 1)x + a^2 + 5$. Условия: $D > 0$, $f(1) > 0$, вершина $x_0 = a + 1 > 1$.
$D/4 = (a + 1)^2 - a^2 - 5 = 2a - 4 > 0 \\Rightarrow a > 2$.
$f(1) = 1 - 2a - 2 + a^2 + 5 = a^2 - 2a + 4 > 0$ всегда (дискриминант отрицателен).
$a + 1 > 1 \\Rightarrow a > 0$.
Ответ: $a > 2$.

**C2.** Скорость туда $v$: $\\dfrac{30}{v} - \\dfrac{30}{v + 3} = \\dfrac12$, $180 = v^2 + 3v$, $v^2 + 3v - 180 = 0$, $v = 12$ ($-15$ не подходит). Скорости $12$ и $15$ км/ч.

## Критерии и типичные ошибки

- A3 и B1: корень вне ОДЗ стоит всего балла. Всегда сначала записывайте ОДЗ.
- A4: забыть сменить знак неравенства при основании меньше $1$.
- B2: записать только $\\dfrac{\\pi}{3}$ и забыть второе решение на $[0; 2\\pi]$.
- C1: проверить только $D > 0$. Расположение корней требует трёх условий: дискриминант, знак $f$ в граничной точке и положение вершины.

### Упражнения

Второй вариант для самостоятельной работы. Снова отведите $120$ минут.

1. Вычислите $\\log_3 54 - \\log_3 2 + \\left(\\dfrac{1}{16}\\right)^{-3/4}$.
2. Решите $\\dfrac{x - 2}{x + 1} \\ge 2$.
3. Решите $4^{x} - 2^{x + 1} - 8 = 0$.
4. Решите $\\sin 2x + \\cos x = 0$ на $[0; \\pi]$.
5. Найдите касательную к $y = x^3 - 2x$ при $x = 1$ и наибольшее значение этой функции на $[0; 2]$.
6. Вычислите $\\displaystyle\\int_1^e \\dfrac{2}{x}\\,dx$ и площадь между $y = x^2$ и $y = 2x$.
7. Запишите $z = -1 + i\\sqrt3$ в тригонометрической форме и найдите $z^3$.
8. При каких $a$ уравнение $x^2 + ax + 9 = 0$ имеет два различных отрицательных корня?

### Ответы

1. $\\log_3 27 + 8 = 3 + 8 = 11$. 2. $\\dfrac{x - 2 - 2x - 2}{x + 1} \\ge 0$, $\\dfrac{-x - 4}{x + 1} \\ge 0$: $-4 \\le x < -1$. 3. $2^x = 4$ ($-2$ не подходит): $x = 2$. 4. $\\cos x(2\\sin x + 1) = 0$: $x = \\dfrac{\\pi}{2}$ (так как $\\sin x = -\\dfrac12$ не имеет решений на $[0; \\pi]$). 5. $y' = 3x^2 - 2$, $y'(1) = 1$, $y(1) = -1$: касательная $y = x - 2$; на $[0; 2]$: $y(0) = 0$, $y\\left(\\sqrt{2/3}\\right) < 0$, $y(2) = 4$: наибольшее $4$. 6. $2\\ln e - 2\\ln 1 = 2$; $\\displaystyle\\int_0^2 (2x - x^2)\\,dx = 4 - \\dfrac83 = \\dfrac43$. 7. $\\lvert z \\rvert = 2$, $\\arg z = \\dfrac{2\\pi}{3}$: $z = 2\\left(\\cos\\dfrac{2\\pi}{3} + i\\sin\\dfrac{2\\pi}{3}\\right)$, $z^3 = 8(\\cos 2\\pi + i\\sin 2\\pi) = 8$. 8. $D = a^2 - 36 > 0$, сумма $-a < 0$, произведение $9 > 0$: $a > 6$.`,
      },
      [
        q(t("log₂ 80 − log₂ 5 = …", "log₂ 80 − log₂ 5 = …", "log₂ 80 − log₂ 5 = …"), [t("4", "4", "4"), t("16", "16", "16"), t("75", "75", "75")], 0),
        q(t("√(x + 11) = x − 1 has the solution…", "√(x + 11) = x − 1-ի լուծումը…", "Решение √(x + 11) = x − 1 —"), [t("x = 5 and x = −2", "x = 5 և x = −2", "x = 5 и x = −2"), t("x = 5", "x = 5", "x = 5"), t("x = −2", "x = −2", "x = −2")], 1),
        q(t("(1/3)^(2x − 1) > 9 gives…", "(1/3)^(2x − 1) > 9-ից ստացվում է…", "Из (1/3)^(2x − 1) > 9 получаем…"), [t("x > −1/2", "x > −1/2", "x > −1/2"), t("x < −1/2", "x < −1/2", "x < −1/2"), t("x > 3/2", "x > 3/2", "x > 3/2")], 1),
        q(t("|(2 − i)(1 + 3i)| equals…", "|(2 − i)(1 + 3i)| հավասար է…", "|(2 − i)(1 + 3i)| равно…"), [t("5√2", "5√2", "5√2"), t("10", "10", "10"), t("5", "5", "5")], 0),
        q(t("On [0; 2π], cos x = 1/2 has…", "[0; 2π]-ի վրա cos x = 1/2-ն ունի…", "На [0; 2π] уравнение cos x = 1/2 имеет…"), [t("one solution", "մեկ լուծում", "одно решение"), t("two solutions", "երկու լուծում", "два решения"), t("no solutions", "լուծում չունի", "нет решений")], 1),
        q(t("For both roots to exceed 1, besides D > 0 you need…", "Որ երկու արմատն էլ 1-ից մեծ լինեն, D > 0-ից բացի պետք է…", "Чтобы оба корня были больше 1, кроме D > 0 нужно…"), [t("f(1) > 0 and vertex > 1", "f(1) > 0 և գագաթը > 1", "f(1) > 0 и вершина > 1"), t("only f(1) > 0", "միայն f(1) > 0", "только f(1) > 0"), t("f(1) < 0", "f(1) < 0", "f(1) < 0")], 0),
      ],
    ),
  ],
};
