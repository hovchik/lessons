import { t, unit, q, type CourseSeed } from "../types";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const algebra: CourseSeed[] = [
  {
    subject: "algebra",
    grade: 7,
    title: t("Algebra · Grade 7", "Հանրահաշիվ · 7-րդ դասարան", "Алгебра · 7 класс"),
    description: t(
      "Expressions and identities, linear equations, the first functions, powers, polynomials, factorisation and systems of linear equations.",
      "Արտահայտություններ և նույնություններ, գծային հավասարումներ, առաջին ֆունկցիաները, աստիճան, բազմանդամներ, վերլուծում արտադրիչների, գծային հավասարումների համակարգեր։",
      "Выражения и тождества, линейные уравнения, первые функции, степень, многочлены, разложение на множители и системы линейных уравнений.",
    ),
    curriculumNotes: notes(
      ["Armenia grade 7 (3 h/week): algebra separates from geometry. Topics: algebraic expressions, identities, linear equations in one variable, functions and graphs, power with natural exponent, monomials and polynomials, abridged multiplication formulas, systems of two linear equations.", "Հայաստան, 7-րդ դասարան (3 ժ/շաբ.)՝ հանրահաշիվն անջատվում է երկրաչափությունից։ Թեմաներ՝ հանրահաշվական արտահայտություններ, նույնություններ, մեկ փոփոխականով գծային հավասարումներ, ֆունկցիաներ և գրաֆիկներ, բնական ցուցիչով աստիճան, միանդամներ և բազմանդամներ, կրճատ բազմապատկման բանաձևեր, երկու գծային հավասարումների համակարգեր։", "Армения, 7 класс (3 ч/нед.): алгебра отделяется от геометрии. Темы: алгебраические выражения, тождества, линейные уравнения с одной переменной, функции и графики, степень с натуральным показателем, одночлены и многочлены, формулы сокращённого умножения, системы двух линейных уравнений."],
      ["Russia grade 7 (ФГОС ООО, 3 h/week, 105 h): the same core — expressions, identities, linear equations, linear function y = kx + b, powers, polynomials, abridged multiplication, systems of linear equations, plus first statistics and probability.", "Ռուսաստան, 7-րդ դասարան (ФГОС ООО, 3 ժ/շաբ., 105 ժ)՝ նույն միջուկը՝ արտահայտություններ, նույնություններ, գծային հավասարումներ, գծային ֆունկցիա y = kx + b, աստիճան, բազմանդամներ, կրճատ բազմապատկում, գծային համակարգեր, ինչպես նաև վիճակագրության և հավանականության սկիզբ։", "Россия, 7 класс (ФГОС ООО, 3 ч/нед., 105 ч): то же ядро — выражения, тождества, линейные уравнения, линейная функция y = kx + b, степень, многочлены, формулы сокращённого умножения, системы линейных уравнений, а также начала статистики и вероятности."],
    ),
    hoursPerWeek: { armenia: 3, russia: 3 },
    units: [
      {
        title: t("Expressions and identities", "Արտահայտություններ և նույնություններ", "Выражения и тождества"),
        summary: t("Numerical and algebraic expressions, their values, identical transformations.", "Թվային և հանրահաշվական արտահայտություններ, դրանց արժեքները, նույնական ձևափոխություններ։", "Числовые и алгебраические выражения, их значения, тождественные преобразования."),
        lessons: [
          {
            slug: "algebraic-expressions",
            title: t("Numerical and algebraic expressions", "Թվային և հանրահաշվական արտահայտություններ", "Числовые и алгебраические выражения"),
            objectives: {
              en: ["Distinguish numerical from algebraic expressions", "Find the value of an expression for given variable values", "Determine the admissible values of variables"],
              hy: ["Տարբերել թվային և հանրահաշվական արտահայտությունները", "Գտնել արտահայտության արժեքը փոփոխականների տրված արժեքների դեպքում", "Որոշել փոփոխականների թույլատրելի արժեքները"],
              ru: ["Различать числовые и алгебраические выражения", "Находить значение выражения при данных значениях переменных", "Определять допустимые значения переменных"],
            },
            content: {
              en: `## From arithmetic to algebra

In arithmetic we worked with **numerical expressions** such as $3 \\cdot (12 - 7) + 8$. An expression has a **value**: here it is $3 \\cdot 5 + 8 = 23$.

In algebra we let letters stand for numbers. $2a + 3b$, $\\dfrac{x - 1}{x + 4}$, $s = vt$ are **algebraic expressions**. The letters are **variables**: we may substitute different numbers for them.

### Value of an expression

Find the value of $5x - 2y$ when $x = 4$, $y = -3$:

$$5 \\cdot 4 - 2 \\cdot (-3) = 20 + 6 = 26.$$

Always put a negative number in **brackets** when substituting.

### Expressions that make no sense

$\\dfrac{10}{a - 2}$ has no value when $a = 2$, because division by zero is impossible. The **admissible values** of $a$ are all numbers except 2. For an expression without division (a *whole* expression) every value is admissible.

### Reading expressions

| Words | Expression |
|---|---|
| the sum of $a$ and $b$ | $a + b$ |
| the difference of $m$ and $n$ | $m - n$ |
| twice $x$, increased by 7 | $2x + 7$ |
| the square of the sum of $a$ and $b$ | $(a + b)^2$ |
| the sum of the squares of $a$ and $b$ | $a^2 + b^2$ |

Note how $(a+b)^2$ and $a^2 + b^2$ are different: for $a = 1, b = 2$ the first is 9, the second is 5.

### Exercises

1. Find the value of $3a - 4b$ when $a = -2$, $b = 0{,}5$.
2. Which values of $y$ are not admissible for $\\dfrac{y + 3}{2y - 6}$?
3. Write as an expression: the product of $a$ and the difference of $b$ and $c$.
4. A car travels $t$ hours at 60 km/h and then 2 hours at $v$ km/h. Write an expression for the distance.`,
              hy: `## Թվաբանությունից հանրահաշիվ

Թվաբանության մեջ աշխատում էինք **թվային արտահայտությունների** հետ, ինչպիսին է $3 \\cdot (12 - 7) + 8$։ Արտահայտությունն ունի **արժեք**․ այստեղ՝ $3 \\cdot 5 + 8 = 23$։

Հանրահաշվում տառերը թվեր են նշանակում։ $2a + 3b$, $\\dfrac{x - 1}{x + 4}$, $s = vt$՝ **հանրահաշվական արտահայտություններ** են։ Տառերը **փոփոխականներ** են․ դրանց փոխարեն կարող ենք տարբեր թվեր տեղադրել։

### Արտահայտության արժեքը

Գտնենք $5x - 2y$-ի արժեքը, երբ $x = 4$, $y = -3$․

$$5 \\cdot 4 - 2 \\cdot (-3) = 20 + 6 = 26$$

Տեղադրելիս բացասական թիվը միշտ վերցրու **փակագծերի** մեջ։

### Արտահայտություններ, որոնք իմաստ չունեն

$\\dfrac{10}{a - 2}$-ն արժեք չունի, երբ $a = 2$, որովհետև զրոյի վրա բաժանել հնարավոր չէ։ $a$-ի **թույլատրելի արժեքները** 2-ից բացի բոլոր թվերն են։ Առանց բաժանման արտահայտության (*ամբողջ* արտահայտություն) համար բոլոր արժեքները թույլատրելի են։

### Արտահայտությունների ընթերցում

| Խոսքով | Արտահայտություն |
|---|---|
| $a$-ի և $b$-ի գումարը | $a + b$ |
| $m$-ի և $n$-ի տարբերությունը | $m - n$ |
| $x$-ի կրկնապատիկը՝ մեծացրած 7-ով | $2x + 7$ |
| $a$-ի և $b$-ի գումարի քառակուսին | $(a + b)^2$ |
| $a$-ի և $b$-ի քառակուսիների գումարը | $a^2 + b^2$ |

Նկատիր, որ $(a+b)^2$-ը և $a^2 + b^2$-ը տարբեր են․ $a = 1, b = 2$ դեպքում առաջինը 9 է, երկրորդը՝ 5։

### Վարժություններ

1. Գտիր $3a - 4b$-ի արժեքը, երբ $a = -2$, $b = 0{,}5$։
2. $y$-ի ո՞ր արժեքները թույլատրելի չեն $\\dfrac{y + 3}{2y - 6}$-ի համար։
3. Գրիր արտահայտությամբ՝ $a$-ի և $b$-ի ու $c$-ի տարբերության արտադրյալը։
4. Մեքենան $t$ ժամ գնում է 60 կմ/ժ արագությամբ, ապա 2 ժամ՝ $v$ կմ/ժ։ Գրիր ուղու արտահայտությունը։`,
              ru: `## От арифметики к алгебре

В арифметике мы работали с **числовыми выражениями**, например $3 \\cdot (12 - 7) + 8$. У выражения есть **значение**: здесь $3 \\cdot 5 + 8 = 23$.

В алгебре буквы обозначают числа. $2a + 3b$, $\\dfrac{x - 1}{x + 4}$, $s = vt$ — **алгебраические выражения**. Буквы — это **переменные**: вместо них можно подставлять разные числа.

### Значение выражения

Найдём значение $5x - 2y$ при $x = 4$, $y = -3$:

$$5 \\cdot 4 - 2 \\cdot (-3) = 20 + 6 = 26.$$

При подстановке отрицательное число всегда берём в **скобки**.

### Выражения, не имеющие смысла

$\\dfrac{10}{a - 2}$ не имеет значения при $a = 2$, потому что делить на ноль нельзя. **Допустимые значения** $a$ — все числа, кроме 2. Для выражения без деления (*целого* выражения) допустимы все значения.

### Чтение выражений

| Словами | Выражение |
|---|---|
| сумма $a$ и $b$ | $a + b$ |
| разность $m$ и $n$ | $m - n$ |
| удвоенное $x$, увеличенное на 7 | $2x + 7$ |
| квадрат суммы $a$ и $b$ | $(a + b)^2$ |
| сумма квадратов $a$ и $b$ | $a^2 + b^2$ |

Обрати внимание: $(a+b)^2$ и $a^2 + b^2$ — разные выражения. При $a = 1, b = 2$ первое равно 9, второе — 5.

### Упражнения

1. Найди значение $3a - 4b$ при $a = -2$, $b = 0{,}5$.
2. Какие значения $y$ недопустимы для $\\dfrac{y + 3}{2y - 6}$?
3. Запиши выражением: произведение $a$ и разности $b$ и $c$.
4. Автомобиль едет $t$ часов со скоростью 60 км/ч, затем 2 часа со скоростью $v$ км/ч. Запиши выражение для пути.`,
            },
            quiz: [
              q(t("Value of 2x − 3y at x = −1, y = 2:", "2x − 3y-ի արժեքը x = −1, y = 2 դեպքում՝", "Значение 2x − 3y при x = −1, y = 2:"), [t("−8", "−8", "−8"), t("4", "4", "4"), t("−4", "−4", "−4")], 0),
              q(t("Which value of a is NOT admissible for 7/(a + 5)?", "a-ի ո՞ր արժեքը թույլատրելի ՈՒ ԼԻ ՉԷ 7/(a + 5)-ի համար։", "Какое значение a НЕ допустимо для 7/(a + 5)?"), [t("5", "5", "5"), t("−5", "−5", "−5"), t("0", "0", "0")], 1),
              q(t("(a + b)² and a² + b² are…", "(a + b)²-ը և a² + b²-ը…", "(a + b)² и a² + b² — это…"), [t("the same expression", "նույն արտահայտությունն են", "одно и то же выражение"), t("different expressions", "տարբեր արտահայտություններ են", "разные выражения")], 1),
            ],
          },
          {
            slug: "identities",
            title: t("Identities and identical transformations", "Նույնություններ և նույնական ձևափոխություններ", "Тождества и тождественные преобразования"),
            objectives: {
              en: ["Define identically equal expressions and identities", "Simplify expressions using the laws of operations", "Combine like terms and open brackets with a minus sign"],
              hy: ["Սահմանել նույնաբար հավասար արտահայտություններն ու նույնությունը", "Պարզեցնել արտահայտությունները գործողությունների օրենքներով", "Միացնել նման անդամները և բացել փակագծերը մինուսի դեպքում"],
              ru: ["Определять тождественно равные выражения и тождества", "Упрощать выражения с помощью законов действий", "Приводить подобные слагаемые и раскрывать скобки со знаком минус"],
            },
            content: {
              en: `## Identically equal expressions

Compare $3(x + 2)$ and $3x + 6$. For *every* value of $x$ they are equal: at $x = 1$ both give 9, at $x = -4$ both give $-6$. Such expressions are **identically equal**, and the equality

$$3(x + 2) = 3x + 6$$

is an **identity** — an equality true for all admissible values of the variables.

An equality like $2x = 8$ is **not** an identity: it holds only for $x = 4$. That is an *equation*.

## The tools: laws of operations

| Law | Formula |
|---|---|
| Commutative | $a + b = b + a$, $ab = ba$ |
| Associative | $(a + b) + c = a + (b + c)$, $(ab)c = a(bc)$ |
| Distributive | $a(b + c) = ab + ac$ |

Replacing an expression with an identically equal one is an **identical transformation**. Two everyday transformations:

### 1. Combining like terms

Terms with the same letter part are **like terms**. Add their coefficients:

$$7a - 2b + 3a + 5b = (7 + 3)a + (-2 + 5)b = 10a + 3b.$$

### 2. Opening brackets

- Plus before the bracket: drop it, keep every sign. $x + (y - 3) = x + y - 3$.
- **Minus** before the bracket: drop it, **change every sign** inside. $x - (y - 3) = x - y + 3$.
- A factor before the bracket: multiply every term. $-2(3m - 4) = -6m + 8$.

### Worked example

Simplify $5(2x - 1) - 3(x + 4)$.

$= 10x - 5 - 3x - 12 = 7x - 17$.

Check at $x = 2$: left $5 \\cdot 3 - 3 \\cdot 6 = -3$; right $14 - 17 = -3$. ✓

### Exercises

1. Is $(a - b)^2 = a^2 - b^2$ an identity? Test with $a = 3, b = 1$.
2. Simplify: $4(a - 2b) - (a - 8b)$.
3. Simplify and find the value at $x = -1$: $3x - (2 - x) + 2(x + 1)$.`,
              hy: `## Նույնաբար հավասար արտահայտություններ

Համեմատենք $3(x + 2)$-ը և $3x + 6$-ը։ $x$-ի *ցանկացած* արժեքի դեպքում նրանք հավասար են․ $x = 1$-ի դեպքում երկուսն էլ 9 են, $x = -4$-ի դեպքում՝ $-6$։ Այսպիսի արտահայտությունները **նույնաբար հավասար** են, իսկ

$$3(x + 2) = 3x + 6$$

հավասարությունը **նույնություն** է՝ հավասարություն, որը ճիշտ է փոփոխականների բոլոր թույլատրելի արժեքների դեպքում։

$2x = 8$ հավասարությունը նույնություն **չէ**․ այն ճիշտ է միայն $x = 4$-ի դեպքում։ Դա *հավասարում* է։

## Գործիքներ․ գործողությունների օրենքները

| Օրենք | Բանաձև |
|---|---|
| Տեղափոխական | $a + b = b + a$, $ab = ba$ |
| Զուգորդական | $(a + b) + c = a + (b + c)$, $(ab)c = a(bc)$ |
| Բաշխական | $a(b + c) = ab + ac$ |

Արտահայտությունը նույնաբար հավասար արտահայտությամբ փոխարինելը **նույնական ձևափոխություն** է։ Երկու ամենօրյա ձևափոխություն․

### 1. Նման անդամների միացում

Նույն տառային մասով անդամները **նման անդամներ** են։ Գումարում ենք դրանց գործակիցները․

$$7a - 2b + 3a + 5b = (7 + 3)a + (-2 + 5)b = 10a + 3b$$

### 2. Փակագծերի բացում

- Փակագծից առաջ պլյուս․ հանում ենք փակագիծը, նշանները պահում։ $x + (y - 3) = x + y - 3$։
- Փակագծից առաջ **մինուս**․ հանում ենք փակագիծը, **բոլոր նշանները փոխում**։ $x - (y - 3) = x - y + 3$։
- Փակագծից առաջ արտադրիչ․ բազմապատկում ենք յուրաքանչյուր անդամը։ $-2(3m - 4) = -6m + 8$։

### Լուծված օրինակ

Պարզեցնել $5(2x - 1) - 3(x + 4)$։

$= 10x - 5 - 3x - 12 = 7x - 17$։

Ստուգում $x = 2$-ի դեպքում․ ձախը՝ $5 \\cdot 3 - 3 \\cdot 6 = -3$, աջը՝ $14 - 17 = -3$։ ✓

### Վարժություններ

1. $(a - b)^2 = a^2 - b^2$ նույնությու՞ն է։ Ստուգիր $a = 3, b = 1$ դեպքում։
2. Պարզեցրու՝ $4(a - 2b) - (a - 8b)$։
3. Պարզեցրու և գտիր արժեքը $x = -1$ դեպքում՝ $3x - (2 - x) + 2(x + 1)$։`,
              ru: `## Тождественно равные выражения

Сравним $3(x + 2)$ и $3x + 6$. При *любом* значении $x$ они равны: при $x = 1$ оба дают 9, при $x = -4$ оба дают $-6$. Такие выражения называются **тождественно равными**, а равенство

$$3(x + 2) = 3x + 6$$

— **тождеством**: равенством, верным при всех допустимых значениях переменных.

Равенство $2x = 8$ — **не** тождество: оно верно только при $x = 4$. Это *уравнение*.

## Инструменты: законы действий

| Закон | Формула |
|---|---|
| Переместительный | $a + b = b + a$, $ab = ba$ |
| Сочетательный | $(a + b) + c = a + (b + c)$, $(ab)c = a(bc)$ |
| Распределительный | $a(b + c) = ab + ac$ |

Замена выражения тождественно равным называется **тождественным преобразованием**. Два повседневных преобразования:

### 1. Приведение подобных слагаемых

Слагаемые с одинаковой буквенной частью — **подобные**. Складываем их коэффициенты:

$$7a - 2b + 3a + 5b = (7 + 3)a + (-2 + 5)b = 10a + 3b.$$

### 2. Раскрытие скобок

- Перед скобкой плюс: убираем скобки, знаки сохраняем. $x + (y - 3) = x + y - 3$.
- Перед скобкой **минус**: убираем скобки, **меняем все знаки** внутри. $x - (y - 3) = x - y + 3$.
- Перед скобкой множитель: умножаем каждое слагаемое. $-2(3m - 4) = -6m + 8$.

### Разобранный пример

Упростить $5(2x - 1) - 3(x + 4)$.

$= 10x - 5 - 3x - 12 = 7x - 17$.

Проверка при $x = 2$: слева $5 \\cdot 3 - 3 \\cdot 6 = -3$; справа $14 - 17 = -3$. ✓

### Упражнения

1. Является ли $(a - b)^2 = a^2 - b^2$ тождеством? Проверь при $a = 3, b = 1$.
2. Упрости: $4(a - 2b) - (a - 8b)$.
3. Упрости и найди значение при $x = -1$: $3x - (2 - x) + 2(x + 1)$.`,
            },
            quiz: [
              q(t("Simplify: 6a − (2a − 5)", "Պարզեցրու՝ 6a − (2a − 5)", "Упрости: 6a − (2a − 5)"), [t("4a − 5", "4a − 5", "4a − 5"), t("4a + 5", "4a + 5", "4a + 5"), t("8a − 5", "8a − 5", "8a − 5")], 1),
              q(t("Which equality is an identity?", "Ո՞ր հավասարությունն է նույնություն։", "Какое равенство является тождеством?"), [t("x + 3 = 7", "x + 3 = 7", "x + 3 = 7"), t("2(x − 1) = 2x − 2", "2(x − 1) = 2x − 2", "2(x − 1) = 2x − 2"), t("x² = 9", "x² = 9", "x² = 9")], 1),
            ],
          },
        ],
      },
      unit(t("Linear equations in one variable", "Մեկ փոփոխականով գծային հավասարումներ", "Линейные уравнения с одной переменной"), t("Equation, root, equivalent equations, solving ax = b and word problems.", "Հավասարում, արմատ, համարժեք հավասարումներ, ax = b-ի լուծում և տեքստային խնդիրներ։", "Уравнение, корень, равносильные уравнения, решение ax = b и текстовые задачи."), [
        ["equation-and-roots", "Equation and its roots", "Հավասարում և նրա արմատները", "Уравнение и его корни"],
        ["linear-equation", "The linear equation ax = b", "Գծային հավասարում ax = b", "Линейное уравнение ax = b"],
        ["equations-with-brackets", "Equations with brackets and fractions", "Հավասարումներ փակագծերով և կոտորակներով", "Уравнения со скобками и дробями"],
        ["problems-via-equations", "Solving problems with equations", "Խնդիրների լուծում հավասարումներով", "Решение задач с помощью уравнений"],
        ["mean-median-range", "Mean, median and range", "Միջին, մեդիան և տարածք", "Среднее, медиана и размах"],
      ]),
      unit(t("Functions", "Ֆունկցիաներ", "Функции"), t("The concept of a function, graphs, direct proportionality and the linear function.", "Ֆունկցիայի հասկացությունը, գրաֆիկներ, ուղիղ համեմատականություն և գծային ֆունկցիա։", "Понятие функции, графики, прямая пропорциональность и линейная функция."), [
        ["function-concept", "What a function is", "Ի՞նչ է ֆունկցիան", "Что такое функция"],
        ["function-graph", "The graph of a function", "Ֆունկցիայի գրաֆիկ", "График функции"],
        ["direct-proportionality", "Direct proportionality y = kx", "Ուղիղ համեմատականություն y = kx", "Прямая пропорциональность y = kx"],
        ["linear-function", "The linear function y = kx + b", "Գծային ֆունկցիա y = kx + b", "Линейная функция y = kx + b"],
        ["parallel-graphs", "Position of two lines on the plane", "Երկու ուղիղների փոխադարձ դիրքը", "Взаимное расположение графиков линейных функций"],
      ]),
      unit(t("Powers with natural exponents", "Բնական ցուցիչով աստիճան", "Степень с натуральным показателем"), t("Properties of powers, monomials, the functions y = x² and y = x³.", "Աստիճանի հատկություններ, միանդամներ, y = x² և y = x³ ֆունկցիաներ։", "Свойства степени, одночлены, функции y = x² и y = x³."), [
        ["power-definition", "Definition of a power", "Աստիճանի սահմանումը", "Определение степени"],
        ["multiply-divide-powers", "Multiplying and dividing powers", "Աստիճանների բազմապատկում և բաժանում", "Умножение и деление степеней"],
        ["power-of-power", "Power of a power and of a product", "Աստիճանի աստիճան և արտադրյալի աստիճան", "Возведение в степень степени и произведения"],
        ["monomials", "Monomials and their standard form", "Միանդամներ և դրանց կանոնական տեսքը", "Одночлен и его стандартный вид"],
        ["x-squared-cubed", "Functions y = x² and y = x³", "y = x² և y = x³ ֆունկցիաները", "Функции y = x² и y = x³"],
      ]),
      unit(t("Polynomials", "Բազմանդամներ", "Многочлены"), t("Adding, subtracting and multiplying polynomials; factoring by common factor and grouping.", "Բազմանդամների գումարում, հանում, բազմապատկում, վերլուծում ընդհանուր արտադրիչով և խմբավորմամբ։", "Сложение, вычитание и умножение многочленов; вынесение общего множителя и группировка."), [
        ["polynomial-standard-form", "Polynomial and its standard form", "Բազմանդամ և նրա կանոնական տեսքը", "Многочлен и его стандартный вид"],
        ["add-subtract-polynomials", "Adding and subtracting polynomials", "Բազմանդամների գումարում և հանում", "Сложение и вычитание многочленов"],
        ["monomial-times-polynomial", "Multiplying a monomial by a polynomial", "Միանդամի բազմապատկում բազմանդամով", "Умножение одночлена на многочлен"],
        ["common-factor", "Factoring out a common factor", "Ընդհանուր արտադրիչի դուրս բերում", "Вынесение общего множителя за скобки"],
        ["polynomial-times-polynomial", "Multiplying polynomials", "Բազմանդամների բազմապատկում", "Умножение многочлена на многочлен"],
        ["grouping", "Factoring by grouping", "Վերլուծում խմբավորման եղանակով", "Разложение способом группировки"],
      ]),
      unit(t("Abridged multiplication formulas", "Կրճատ բազմապատկման բանաձևեր", "Формулы сокращённого умножения"), t("Square of a sum and difference, difference of squares, sum and difference of cubes.", "Գումարի և տարբերության քառակուսի, քառակուսիների տարբերություն, խորանարդների գումար և տարբերություն։", "Квадрат суммы и разности, разность квадратов, сумма и разность кубов."), [
        ["square-of-sum", "Square of a sum and of a difference", "Գումարի և տարբերության քառակուսին", "Квадрат суммы и квадрат разности"],
        ["perfect-square-factoring", "Factoring a perfect square trinomial", "Լրիվ քառակուսու վերլուծում", "Разложение полного квадрата"],
        ["difference-of-squares", "Difference of squares", "Քառակուսիների տարբերություն", "Разность квадратов"],
        ["cubes", "Sum and difference of cubes", "Խորանարդների գումար և տարբերություն", "Сумма и разность кубов"],
        ["combined-factoring", "Factoring with several methods", "Վերլուծում մի քանի եղանակով", "Разложение на множители разными способами"],
      ]),
      unit(t("Systems of linear equations", "Գծային հավասարումների համակարգեր", "Системы линейных уравнений"), t("Linear equation in two variables, graphs, substitution and addition methods, problems.", "Երկու փոփոխականով գծային հավասարում, գրաֆիկներ, տեղադրման և գումարման եղանակներ, խնդիրներ։", "Линейное уравнение с двумя переменными, графики, способы подстановки и сложения, задачи."), [
        ["two-variable-equation", "Linear equations in two variables", "Երկու փոփոխականով գծային հավասարումներ", "Линейные уравнения с двумя переменными"],
        ["graphical-method", "Graphical solution of a system", "Համակարգի գրաֆիկական լուծում", "Графический способ решения систем"],
        ["substitution-method", "The substitution method", "Տեղադրման եղանակ", "Способ подстановки"],
        ["addition-method", "The addition method", "Գումարման եղանակ", "Способ сложения"],
        ["system-problems", "Problems solved with systems", "Խնդիրների լուծում համակարգերով", "Решение задач с помощью систем"],
      ]),
    ],
  },
  {
    subject: "algebra",
    grade: 8,
    title: t("Algebra · Grade 8", "Հանրահաշիվ · 8-րդ դասարան", "Алгебра · 8 класс"),
    description: t("Rational expressions, square roots, quadratic equations, inequalities, and powers with integer exponents.", "Ռացիոնալ արտահայտություններ, քառակուսի արմատներ, քառակուսային հավասարումներ, անհավասարություններ, ամբողջ ցուցիչով աստիճան։", "Рациональные выражения, квадратные корни, квадратные уравнения, неравенства и степень с целым показателем."),
    curriculumNotes: notes(
      ["Armenia grade 8 (3 h/week): algebraic fractions, square roots and real numbers, quadratic equations and Vieta's formulas, rational equations, numerical inequalities and linear inequalities, integer exponents and standard form.", "Հայաստան, 8-րդ դասարան (3 ժ/շաբ.)՝ հանրահաշվական կոտորակներ, քառակուսի արմատ և իրական թվեր, քառակուսային հավասարումներ և Վիետի բանաձևեր, ռացիոնալ հավասարումներ, թվային և գծային անհավասարություններ, ամբողջ ցուցիչով աստիճան։", "Армения, 8 класс (3 ч/нед.): алгебраические дроби, квадратные корни и действительные числа, квадратные уравнения и теорема Виета, рациональные уравнения, числовые и линейные неравенства, степень с целым показателем."],
      ["Russia grade 8 (ФГОС ООО, 105 h): rational fractions, function y = k/x, square roots and y = √x, quadratic equations, fractional rational equations, inequalities and their systems, integer powers, standard form of a number, statistics (frequency, histograms).", "Ռուսաստան, 8-րդ դասարան (ФГОС ООО, 105 ժ)՝ ռացիոնալ կոտորակներ, y = k/x, քառակուսի արմատ և y = √x, քառակուսային հավասարումներ, կոտորակային ռացիոնալ հավասարումներ, անհավասարություններ և դրանց համակարգեր, ամբողջ ցուցիչով աստիճան, թվի ստանդարտ տեսք, վիճակագրություն։", "Россия, 8 класс (ФГОС ООО, 105 ч): рациональные дроби, функция y = k/x, квадратные корни и y = √x, квадратные уравнения, дробно-рациональные уравнения, неравенства и их системы, степень с целым показателем, стандартный вид числа, статистика."],
    ),
    hoursPerWeek: { armenia: 3, russia: 3 },
    units: [
      unit(t("Rational fractions", "Ռացիոնալ կոտորակներ", "Рациональные дроби"), t("Admissible values, basic property, four operations, the function y = k/x.", "Թույլատրելի արժեքներ, հիմնական հատկություն, չորս գործողություն, y = k/x ֆունկցիա։", "Допустимые значения, основное свойство, четыре действия, функция y = k/x."), [
        ["rational-expressions", "Rational expressions and admissible values", "Ռացիոնալ արտահայտություններ և թույլատրելի արժեքներ", "Рациональные выражения и допустимые значения"],
        ["reduce-fractions", "Basic property and reduction", "Հիմնական հատկություն և կրճատում", "Основное свойство дроби и сокращение"],
        ["add-subtract-rational", "Adding and subtracting rational fractions", "Ռացիոնալ կոտորակների գումարում և հանում", "Сложение и вычитание рациональных дробей"],
        ["multiply-divide-rational", "Multiplying, dividing and raising to a power", "Բազմապատկում, բաժանում, աստիճան", "Умножение, деление и возведение в степень"],
        ["inverse-proportionality", "The function y = k/x", "y = k/x ֆունկցիան", "Функция y = k/x и её график"],
      ]),
      unit(t("Square roots", "Քառակուսի արմատներ", "Квадратные корни"), t("Rational and irrational numbers, arithmetic square root, properties, y = √x.", "Ռացիոնալ և իռացիոնալ թվեր, թվաբանական քառակուսի արմատ, հատկություններ, y = √x։", "Рациональные и иррациональные числа, арифметический квадратный корень, свойства, y = √x."), [
        ["rational-irrational", "Rational and irrational numbers", "Ռացիոնալ և իռացիոնալ թվեր", "Рациональные и иррациональные числа"],
        ["arithmetic-root", "The arithmetic square root", "Թվաբանական քառակուսի արմատ", "Арифметический квадратный корень"],
        ["root-of-product-quotient", "Root of a product and a quotient", "Արտադրյալի և քանորդի արմատ", "Корень из произведения и дроби"],
        ["root-of-power", "Root of a power; √(a²) = |a|", "Աստիճանի արմատ, √(a²) = |a|", "Корень из степени; √(a²) = |a|"],
        ["simplify-radicals", "Taking a factor out of the root", "Արտադրիչի դուրս բերում արմատի նշանի տակից", "Вынесение множителя из-под знака корня"],
        ["sqrt-function", "The function y = √x", "y = √x ֆունկցիան", "Функция y = √x"],
      ]),
      unit(t("Quadratic equations", "Քառակուսային հավասարումներ", "Квадратные уравнения"), t("Incomplete equations, discriminant formula, Vieta's theorem, factoring a quadratic trinomial.", "Ոչ լրիվ հավասարումներ, դիսկրիմինանտ, Վիետի թեորեմ, քառակուսային եռանդամի վերլուծում։", "Неполные уравнения, формула корней, теорема Виета, разложение квадратного трёхчлена."), [
        ["incomplete-quadratics", "Incomplete quadratic equations", "Ոչ լրիվ քառակուսային հավասարումներ", "Неполные квадратные уравнения"],
        ["quadratic-formula", "The discriminant and the root formula", "Դիսկրիմինանտ և արմատների բանաձև", "Дискриминант и формула корней"],
        ["vieta", "Vieta's theorem", "Վիետի թեորեմ", "Теорема Виета"],
        ["factor-quadratic-trinomial", "Factoring a quadratic trinomial", "Քառակուսային եռանդամի վերլուծում", "Разложение квадратного трёхчлена"],
        ["fractional-rational-equations", "Fractional rational equations", "Կոտորակային ռացիոնալ հավասարումներ", "Дробно-рациональные уравнения"],
        ["quadratic-word-problems", "Problems leading to quadratic equations", "Քառակուսային հավասարման բերվող խնդիրներ", "Задачи, сводящиеся к квадратным уравнениям"],
      ]),
      unit(t("Inequalities", "Անհավասարություններ", "Неравенства"), t("Properties of numerical inequalities, intervals, linear inequalities and systems.", "Թվային անհավասարությունների հատկություններ, միջակայքեր, գծային անհավասարություններ և համակարգեր։", "Свойства числовых неравенств, промежутки, линейные неравенства и системы."), [
        ["numerical-inequalities", "Numerical inequalities and their properties", "Թվային անհավասարություններ և դրանց հատկությունները", "Числовые неравенства и их свойства"],
        ["adding-multiplying-inequalities", "Adding and multiplying inequalities", "Անհավասարությունների գումարում և բազմապատկում", "Сложение и умножение неравенств"],
        ["intervals", "Number intervals", "Թվային միջակայքեր", "Числовые промежутки"],
        ["linear-inequalities", "Linear inequalities in one variable", "Մեկ փոփոխականով գծային անհավասարություններ", "Линейные неравенства с одной переменной"],
        ["systems-of-inequalities", "Systems of linear inequalities", "Գծային անհավասարությունների համակարգեր", "Системы линейных неравенств"],
      ]),
      unit(t("Integer exponents and statistics", "Ամբողջ ցուցիչով աստիճան և վիճակագրություն", "Степень с целым показателем и статистика"), t("Negative exponents, standard form, data collection and histograms.", "Բացասական ցուցիչ, ստանդարտ տեսք, տվյալների հավաքում և հիստոգրամներ։", "Отрицательный показатель, стандартный вид числа, сбор данных и гистограммы."), [
        ["negative-exponent", "Powers with a negative exponent", "Բացասական ցուցիչով աստիճան", "Степень с отрицательным показателем"],
        ["integer-exponent-properties", "Properties of integer powers", "Ամբողջ ցուցիչով աստիճանի հատկություններ", "Свойства степени с целым показателем"],
        ["standard-form", "Standard form of a number", "Թվի ստանդարտ տեսք", "Стандартный вид числа"],
        ["statistics-intro", "Collecting and grouping data", "Տվյալների հավաքում և խմբավորում", "Сбор и группировка статистических данных"],
        ["histograms", "Frequency tables and histograms", "Հաճախությունների աղյուսակ և հիստոգրամ", "Таблицы частот и гистограммы"],
      ]),
    ],
  },
  {
    subject: "algebra",
    grade: 9,
    title: t("Algebra · Grade 9", "Հանրահաշիվ · 9-րդ դասարան", "Алгебра · 9 класс"),
    description: t("Quadratic function and inequalities, equations and systems of higher degree, sequences and progressions, elements of combinatorics and probability.", "Քառակուսային ֆունկցիա և անհավասարություններ, բարձր կարգի հավասարումներ և համակարգեր, հաջորդականություններ և պրոգրեսիաներ, կոմբինատորիկայի և հավանականության տարրեր։", "Квадратичная функция и неравенства, уравнения и системы высших степеней, последовательности и прогрессии, элементы комбинаторики и вероятности."),
    curriculumNotes: notes(
      ["Armenia grade 9 (3 h/week): end of basic school, state exam in mathematics (20-point). Topics: properties of functions, quadratic function and its graph, quadratic inequalities, equations reducible to quadratics, systems of nonlinear equations, arithmetic and geometric progressions, elements of combinatorics and probability.", "Հայաստան, 9-րդ դասարան (3 ժ/շաբ.)՝ հիմնական դպրոցի ավարտ, մաթեմատիկայի պետական քննություն (20-բալանոց)։ Թեմաներ՝ ֆունկցիաների հատկություններ, քառակուսային ֆունկցիա և նրա գրաֆիկը, քառակուսային անհավասարություններ, քառակուսայինի բերվող հավասարումներ, ոչ գծային համակարգեր, թվաբանական և երկրաչափական պրոգրեսիաներ, կոմբինատորիկա և հավանականություն։", "Армения, 9 класс (3 ч/нед.): окончание основной школы, государственный экзамен по математике (20 баллов). Темы: свойства функций, квадратичная функция и её график, квадратные неравенства, уравнения, сводящиеся к квадратным, нелинейные системы, арифметическая и геометрическая прогрессии, комбинаторика и вероятность."],
      ["Russia grade 9 (ФГОС ООО, 102 h): ends with ОГЭ. Quadratic function, power function, equations and inequalities with one and two variables, arithmetic and geometric progressions, elements of combinatorics and probability theory.", "Ռուսաստան, 9-րդ դասարան (ФГОС ООО, 102 ժ)՝ ավարտվում է ОГЭ քննությամբ։ Քառակուսային ֆունկցիա, աստիճանային ֆունկցիա, մեկ և երկու փոփոխականով հավասարումներ և անհավասարություններ, պրոգրեսիաներ, կոմբինատորիկա և հավանականություն։", "Россия, 9 класс (ФГОС ООО, 102 ч): завершается ОГЭ. Квадратичная функция, степенная функция, уравнения и неравенства с одной и двумя переменными, арифметическая и геометрическая прогрессии, элементы комбинаторики и теории вероятностей."],
    ),
    hoursPerWeek: { armenia: 3, russia: 3 },
    units: [
      unit(t("Functions and their properties", "Ֆունկցիաներ և դրանց հատկությունները", "Функции и их свойства"), t("Domain, range, zeros, intervals of sign, increasing and decreasing.", "Որոշման տիրույթ, արժեքների բազմություն, զրոներ, նշանապահպանման միջակայքեր, աճում և նվազում։", "Область определения, область значений, нули, промежутки знакопостоянства, возрастание и убывание."), [
        ["function-domain-range", "Domain and range", "Որոշման տիրույթ և արժեքների բազմություն", "Область определения и область значений"],
        ["function-properties", "Zeros, sign intervals, monotonicity", "Զրոներ, նշանի միջակայքեր, մոնոտոնություն", "Нули функции, промежутки знакопостоянства, монотонность"],
        ["even-odd", "Even and odd functions", "Զույգ և կենտ ֆունկցիաներ", "Чётные и нечётные функции"],
      ]),
      unit(t("Quadratic function", "Քառակուսային ֆունկցիա", "Квадратичная функция"), t("y = ax², shifts of the parabola, the general quadratic, vertex and axis.", "y = ax², պարաբոլի տեղաշարժեր, ընդհանուր քառակուսային ֆունկցիա, գագաթ և առանցք։", "y = ax², сдвиги параболы, общий вид, вершина и ось симметрии."), [
        ["parabola-ax2", "The function y = ax²", "y = ax² ֆունկցիան", "Функция y = ax²"],
        ["parabola-shifts", "Graphs of y = ax² + n and y = a(x − m)²", "y = ax² + n և y = a(x − m)² գրաֆիկները", "Графики y = ax² + n и y = a(x − m)²"],
        ["general-quadratic", "Graph of y = ax² + bx + c", "y = ax² + bx + c-ի գրաֆիկը", "График функции y = ax² + bx + c"],
        ["power-function", "The power function y = xⁿ", "Աստիճանային ֆունկցիա y = xⁿ", "Степенная функция y = xⁿ"],
        ["nth-root", "The n-th root", "n-րդ աստիճանի արմատ", "Корень n-й степени"],
      ]),
      unit(t("Equations and inequalities in one variable", "Մեկ փոփոխականով հավասարումներ և անհավասարություններ", "Уравнения и неравенства с одной переменной"), t("Whole equations, biquadratic equations, quadratic inequalities, interval method.", "Ամբողջ հավասարումներ, երկքառակուսային հավասարումներ, քառակուսային անհավասարություններ, միջակայքերի եղանակ։", "Целые уравнения, биквадратные уравнения, квадратные неравенства, метод интервалов."), [
        ["whole-equations", "Whole equations and their degree", "Ամբողջ հավասարումներ և դրանց աստիճանը", "Целое уравнение и его степень"],
        ["biquadratic", "Biquadratic equations and substitution", "Երկքառակուսային հավասարումներ և փոփոխականի փոխարինում", "Биквадратные уравнения и замена переменной"],
        ["quadratic-inequalities", "Quadratic inequalities", "Քառակուսային անհավասարություններ", "Квадратные неравенства"],
        ["interval-method", "The interval method", "Միջակայքերի եղանակ", "Метод интервалов"],
      ]),
      unit(t("Equations and inequalities in two variables", "Երկու փոփոխականով հավասարումներ և անհավասարություններ", "Уравнения и неравенства с двумя переменными"), t("Graphs of equations, nonlinear systems, problems, inequalities on the plane.", "Հավասարումների գրաֆիկներ, ոչ գծային համակարգեր, խնդիրներ, անհավասարություններ հարթության վրա։", "Графики уравнений, нелинейные системы, задачи, неравенства на плоскости."), [
        ["equation-graph-two-vars", "Equation in two variables and its graph", "Երկու փոփոխականով հավասարում և նրա գրաֆիկը", "Уравнение с двумя переменными и его график"],
        ["nonlinear-systems", "Solving systems of second degree", "Երկրորդ աստիճանի համակարգերի լուծում", "Решение систем уравнений второй степени"],
        ["nonlinear-system-problems", "Problems solved with nonlinear systems", "Խնդիրներ ոչ գծային համակարգերով", "Задачи с помощью систем второй степени"],
        ["inequalities-two-vars", "Inequalities in two variables", "Երկու փոփոխականով անհավասարություններ", "Неравенства с двумя переменными"],
      ]),
      unit(t("Progressions", "Պրոգրեսիաներ", "Прогрессии"), t("Sequences, arithmetic and geometric progressions, sum formulas.", "Հաջորդականություններ, թվաբանական և երկրաչափական պրոգրեսիաներ, գումարի բանաձևեր։", "Последовательности, арифметическая и геометрическая прогрессии, формулы сумм."), [
        ["sequences", "Number sequences", "Թվային հաջորդականություններ", "Числовые последовательности"],
        ["arithmetic-progression", "Arithmetic progression and its n-th term", "Թվաբանական պրոգրեսիա և n-րդ անդամը", "Арифметическая прогрессия и её n-й член"],
        ["arithmetic-sum", "Sum of an arithmetic progression", "Թվաբանական պրոգրեսիայի գումարը", "Сумма арифметической прогрессии"],
        ["geometric-progression", "Geometric progression", "Երկրաչափական պրոգրեսիա", "Геометрическая прогрессия"],
        ["geometric-sum", "Sum of a geometric progression; infinite sums", "Երկրաչափական պրոգրեսիայի գումար, անվերջ գումար", "Сумма геометрической прогрессии; бесконечно убывающая прогрессия"],
      ]),
      unit(t("Combinatorics and probability", "Կոմբինատորիկա և հավանականություն", "Комбинаторика и вероятность"), t("Counting rule, permutations, arrangements, combinations, classical probability.", "Հաշվելու կանոն, տեղափոխություններ, տեղադրություններ, զուգորդություններ, դասական հավանականություն։", "Правило умножения, перестановки, размещения, сочетания, классическое определение вероятности."), [
        ["counting-rule", "The multiplication rule", "Բազմապատկման կանոն", "Комбинаторное правило умножения"],
        ["permutations", "Permutations", "Տեղափոխություններ", "Перестановки"],
        ["arrangements-combinations", "Arrangements and combinations", "Տեղադրություններ և զուգորդություններ", "Размещения и сочетания"],
        ["classical-probability", "Classical probability", "Դասական հավանականություն", "Классическое определение вероятности"],
        ["exam-review-9", "Review for the grade 9 exam", "Ամփոփում 9-րդ դասարանի քննության համար", "Повторение к экзамену за 9 класс"],
      ]),
    ],
  },
  {
    subject: "algebra",
    grade: 10,
    title: t("Algebra · Grade 10", "Հանրահաշիվ · 10-րդ դասարան", "Алгебра · 10 класс"),
    description: t("Real numbers, trigonometry, trigonometric equations, power and root functions, and the beginning of mathematical analysis.", "Իրական թվեր, եռանկյունաչափություն, եռանկյունաչափական հավասարումներ, աստիճանային և արմատային ֆունկցիաներ, մաթեմատիկական անալիզի սկիզբ։", "Действительные числа, тригонометрия, тригонометрические уравнения, степенные функции и начала математического анализа."),
    curriculumNotes: notes(
      ["Armenia grade 10 (high school; general or natural-science stream, 3–5 h/week): real numbers, trigonometric functions and identities, trigonometric equations, power functions and roots, sequences and limits, introduction to derivative (in some streams).", "Հայաստան, 10-րդ դասարան (ավագ դպրոց, ընդհանուր կամ բնագիտական հոսք, 3–5 ժ/շաբ.)՝ իրական թվեր, եռանկյունաչափական ֆունկցիաներ և նույնություններ, եռանկյունաչափական հավասարումներ, աստիճանային ֆունկցիաներ և արմատներ, հաջորդականություններ և սահմաններ, ածանցյալի ներմուծում (որոշ հոսքերում)։", "Армения, 10 класс (старшая школа, общий или естественно-научный поток, 3–5 ч/нед.): действительные числа, тригонометрические функции и тождества, тригонометрические уравнения, степенные функции и корни, последовательности и пределы, введение производной (в некоторых потоках)."],
      ["Russia grade 10 (ФГОС СОО, «Алгебра и начала математического анализа», base 2–3 h / advanced 4 h): real numbers, power and root functions, trigonometric functions, trigonometric equations, derivative basics (advanced).", "Ռուսաստան, 10-րդ դասարան (ФГОС СОО, «Հանրահաշիվ և անալիզի սկիզբ», հիմնական 2–3 ժ / խորացված 4 ժ)՝ իրական թվեր, աստիճանային և արմատային ֆունկցիաներ, եռանկյունաչափական ֆունկցիաներ, եռանկյունաչափական հավասարումներ, ածանցյալի հիմունքներ (խորացված)։", "Россия, 10 класс (ФГОС СОО, «Алгебра и начала математического анализа», база 2–3 ч / углублённый 4 ч): действительные числа, степенные функции и корни, тригонометрические функции, тригонометрические уравнения, основы производной (углублённый уровень)."],
    ),
    hoursPerWeek: { armenia: 4, russia: 3 },
    units: [
      unit(t("Real numbers and powers", "Իրական թվեր և աստիճաններ", "Действительные числа и степени"), t("Real numbers, n-th roots, rational exponents, power functions.", "Իրական թվեր, n-րդ արմատ, ռացիոնալ ցուցիչ, աստիճանային ֆունկցիաներ։", "Действительные числа, корни n-й степени, рациональный показатель, степенные функции."), [
        ["real-numbers", "The set of real numbers", "Իրական թվերի բազմությունը", "Множество действительных чисел"],
        ["nth-roots-properties", "Roots of the n-th degree and their properties", "n-րդ աստիճանի արմատներ և հատկություններ", "Корни n-й степени и их свойства"],
        ["rational-exponent", "Powers with rational exponents", "Ռացիոնալ ցուցիչով աստիճան", "Степень с рациональным показателем"],
        ["power-functions-graphs", "Power functions and their graphs", "Աստիճանային ֆունկցիաներ և գրաֆիկներ", "Степенные функции и их графики"],
        ["irrational-equations", "Irrational equations", "Իռացիոնալ հավասարումներ", "Иррациональные уравнения"],
      ]),
      unit(t("Trigonometric functions", "Եռանկյունաչափական ֆունկցիաներ", "Тригонометрические функции"), t("Radians, unit circle, sine, cosine, tangent, cotangent, basic identities.", "Ռադիան, միավոր շրջանագիծ, սինուս, կոսինուս, տանգենս, կոտանգենս, հիմնական նույնություններ։", "Радианы, единичная окружность, синус, косинус, тангенс, котангенс, основные тождества."), [
        ["radians", "Angles in radians", "Անկյուններ ռադիաններով", "Радианная мера угла"],
        ["unit-circle", "Rotating a point on the unit circle", "Կետի պտույտ միավոր շրջանագծի վրա", "Поворот точки вокруг начала координат"],
        ["sin-cos-tan-definition", "Sine, cosine, tangent and cotangent of any angle", "Ցանկացած անկյան սինուս, կոսինուս, տանգենս, կոտանգենս", "Синус, косинус, тангенс и котангенс любого угла"],
        ["trig-signs", "Signs of trigonometric functions", "Եռանկյունաչափական ֆունկցիաների նշանները", "Знаки тригонометрических функций"],
        ["basic-identities", "The basic trigonometric identity", "Հիմնական եռանկյունաչափական նույնությունը", "Основное тригонометрическое тождество"],
        ["reduction-formulas", "Reduction formulas", "Բերման բանաձևեր", "Формулы приведения"],
      ]),
      unit(t("Trigonometric formulas", "Եռանկյունաչափական բանաձևեր", "Тригонометрические формулы"), t("Sum and difference of angles, double angle, half angle, sum-to-product.", "Անկյունների գումար և տարբերություն, կրկնակի անկյուն, կես անկյուն, գումարի վերածում արտադրյալի։", "Сумма и разность углов, двойной угол, половинный угол, преобразование суммы в произведение."), [
        ["addition-formulas", "Sine and cosine of a sum and a difference", "Գումարի և տարբերության սինուս և կոսինուս", "Синус и косинус суммы и разности"],
        ["double-angle", "Double angle formulas", "Կրկնակի անկյան բանաձևեր", "Формулы двойного угла"],
        ["half-angle", "Half angle formulas", "Կես անկյան բանաձևեր", "Формулы половинного угла"],
        ["sum-to-product", "Sum to product and product to sum", "Գումարից արտադրյալ և արտադրյալից գումար", "Преобразование суммы в произведение и произведения в сумму"],
      ]),
      unit(t("Trigonometric equations", "Եռանկյունաչափական հավասարումներ", "Тригонометрические уравнения"), t("Inverse trigonometric functions, cos x = a, sin x = a, tan x = a, methods of solution.", "Հակադարձ եռանկյունաչափական ֆունկցիաներ, cos x = a, sin x = a, tan x = a, լուծման եղանակներ։", "Обратные тригонометрические функции, cos x = a, sin x = a, tg x = a, методы решения."), [
        ["arccos", "Equation cos x = a and arccosine", "cos x = a հավասարումը և արկկոսինուս", "Уравнение cos x = a и арккосинус"],
        ["arcsin", "Equation sin x = a and arcsine", "sin x = a հավասարումը և արկսինուս", "Уравнение sin x = a и арксинус"],
        ["arctan", "Equation tan x = a and arctangent", "tan x = a հավասարումը և արկտանգենս", "Уравнение tg x = a и арктангенс"],
        ["trig-equation-methods", "Methods: substitution, factoring, homogeneous equations", "Եղանակներ՝ փոխարինում, վերլուծում, համասեռ հավասարումներ", "Методы: замена, разложение, однородные уравнения"],
        ["trig-inequalities", "Simple trigonometric inequalities", "Պարզ եռանկյունաչափական անհավասարություններ", "Простейшие тригонометрические неравенства"],
      ]),
      unit(t("Trigonometric functions and their graphs", "Եռանկյունաչափական ֆունկցիաներ և գրաֆիկներ", "Тригонометрические функции и их графики"), t("Periodicity, graphs of sine, cosine and tangent, transformations.", "Պարբերականություն, սինուսի, կոսինուսի և տանգենսի գրաֆիկներ, ձևափոխություններ։", "Периодичность, графики синуса, косинуса и тангенса, преобразования графиков."), [
        ["periodicity", "Domain, range and periodicity", "Որոշման տիրույթ, արժեքներ և պարբերականություն", "Область определения, значений и периодичность"],
        ["graph-sin-cos", "Graphs of y = sin x and y = cos x", "y = sin x և y = cos x գրաֆիկները", "Графики y = sin x и y = cos x"],
        ["graph-tan", "Graph of y = tan x", "y = tan x-ի գրաֆիկը", "График y = tg x"],
        ["graph-transformations", "Transformations: y = A sin(kx + b)", "Ձևափոխություններ՝ y = A sin(kx + b)", "Преобразования графиков: y = A sin(kx + b)"],
      ]),
      unit(t("Introduction to analysis", "Անալիզի ներածություն", "Начала анализа"), t("Limit of a sequence, limit of a function, continuity, the idea of the derivative.", "Հաջորդականության սահման, ֆունկցիայի սահման, անընդհատություն, ածանցյալի գաղափար։", "Предел последовательности, предел функции, непрерывность, идея производной."), [
        ["sequence-limit", "Limit of a sequence", "Հաջորդականության սահման", "Предел последовательности"],
        ["function-limit", "Limit of a function and continuity", "Ֆունկցիայի սահման և անընդհատություն", "Предел функции и непрерывность"],
        ["derivative-idea", "Instantaneous speed and the derivative", "Պահի արագություն և ածանցյալ", "Мгновенная скорость и производная"],
        ["derivative-rules-intro", "Derivatives of basic functions", "Հիմնական ֆունկցիաների ածանցյալներ", "Производные элементарных функций"],
      ]),
    ],
  },
  {
    subject: "algebra",
    grade: 11,
    title: t("Algebra · Grade 11", "Հանրահաշիվ · 11-րդ դասարան", "Алгебра · 11 класс"),
    description: t("Derivative and its applications, exponential and logarithmic functions, integral, combinatorics and probability.", "Ածանցյալ և նրա կիրառություններ, ցուցչային և լոգարիթմական ֆունկցիաներ, ինտեգրալ, կոմբինատորիկա և հավանականություն։", "Производная и её применение, показательная и логарифмическая функции, интеграл, комбинаторика и вероятность."),
    curriculumNotes: notes(
      ["Armenia grade 11 (3–5 h/week): derivative, its geometric and physical meaning, investigating functions, exponential and logarithmic functions and equations, antiderivative and integral, areas, combinatorics and probability.", "Հայաստան, 11-րդ դասարան (3–5 ժ/շաբ.)՝ ածանցյալ, նրա երկրաչափական և ֆիզիկական իմաստը, ֆունկցիաների հետազոտում, ցուցչային և լոգարիթմական ֆունկցիաներ ու հավասարումներ, նախնական և ինտեգրալ, մակերեսներ, կոմբինատորիկա և հավանականություն։", "Армения, 11 класс (3–5 ч/нед.): производная, её геометрический и физический смысл, исследование функций, показательная и логарифмическая функции и уравнения, первообразная и интеграл, площади, комбинаторика и вероятность."],
      ["Russia grade 11 (ФГОС СОО, final year, ends with ЕГЭ): derivative and its applications, integral, exponential and logarithmic functions and equations, elements of combinatorics, statistics and probability. Armenian grade 11 ≈ Russian grade 11 for analysis; Armenian grade 12 adds review and depth.", "Ռուսաստան, 11-րդ դասարան (ФГОС СОО, ավարտական, ЕГЭ)՝ ածանցյալ և կիրառություններ, ինտեգրալ, ցուցչային և լոգարիթմական ֆունկցիաներ ու հավասարումներ, կոմբինատորիկա, վիճակագրություն, հավանականություն։", "Россия, 11 класс (ФГОС СОО, выпускной, ЕГЭ): производная и её применения, интеграл, показательная и логарифмическая функции и уравнения, элементы комбинаторики, статистики и вероятности. Армянский 11 класс ≈ российскому 11-му по анализу; армянский 12-й добавляет повторение и углубление."],
    ),
    hoursPerWeek: { armenia: 4, russia: 3 },
    units: [
      unit(t("Derivative", "Ածանցյալ", "Производная"), t("Definition, rules of differentiation, derivatives of elementary functions, tangent line.", "Սահմանում, ածանցման կանոններ, տարրական ֆունկցիաների ածանցյալներ, շոշափող։", "Определение, правила дифференцирования, производные элементарных функций, касательная."), [
        ["derivative-definition", "Definition of the derivative", "Ածանցյալի սահմանումը", "Определение производной"],
        ["differentiation-rules", "Rules of differentiation", "Ածանցման կանոնները", "Правила дифференцирования"],
        ["derivative-power-trig", "Derivatives of power and trigonometric functions", "Աստիճանային և եռանկյունաչափական ֆունկցիաների ածանցյալներ", "Производные степенной и тригонометрических функций"],
        ["chain-rule", "Derivative of a composite function", "Բարդ ֆունկցիայի ածանցյալ", "Производная сложной функции"],
        ["tangent-line", "Geometric meaning: the tangent line", "Երկրաչափական իմաստ․ շոշափող", "Геометрический смысл: уравнение касательной"],
      ]),
      unit(t("Applications of the derivative", "Ածանցյալի կիրառություններ", "Применение производной"), t("Monotonicity, extrema, investigating and sketching functions, optimisation.", "Մոնոտոնություն, էքստրեմումներ, ֆունկցիայի հետազոտում և գրաֆիկի կառուցում, օպտիմալացում։", "Монотонность, экстремумы, исследование функций и построение графиков, задачи на оптимум."), [
        ["increasing-decreasing", "Increasing and decreasing functions", "Աճող և նվազող ֆունկցիաներ", "Возрастание и убывание функции"],
        ["extrema", "Maxima and minima", "Մաքսիմում և մինիմում", "Экстремумы функции"],
        ["sketching-functions", "Investigating a function with the derivative", "Ֆունկցիայի հետազոտում ածանցյալով", "Исследование функции с помощью производной"],
        ["max-min-on-interval", "Largest and smallest value on an interval", "Ամենամեծ և ամենափոքր արժեքը հատվածում", "Наибольшее и наименьшее значение на отрезке"],
        ["optimisation", "Optimisation problems", "Օպտիմալացման խնդիրներ", "Задачи на наибольшее и наименьшее значение"],
      ]),
      unit(t("Exponential function", "Ցուցչային ֆունկցիա", "Показательная функция"), t("Properties and graph, exponential equations and inequalities, systems.", "Հատկություններ և գրաֆիկ, ցուցչային հավասարումներ և անհավասարություններ, համակարգեր։", "Свойства и график, показательные уравнения и неравенства, системы."), [
        ["exponential-function", "The exponential function and its graph", "Ցուցչային ֆունկցիան և նրա գրաֆիկը", "Показательная функция, её свойства и график"],
        ["exponential-equations", "Exponential equations", "Ցուցչային հավասարումներ", "Показательные уравнения"],
        ["exponential-inequalities", "Exponential inequalities", "Ցուցչային անհավասարություններ", "Показательные неравенства"],
        ["exponential-growth", "Exponential growth and decay in real life", "Ցուցչային աճ և նվազում կյանքում", "Экспоненциальный рост и убывание в жизни"],
      ]),
      unit(t("Logarithms", "Լոգարիթմներ", "Логарифмы"), t("Definition, properties, change of base, logarithmic function, equations and inequalities.", "Սահմանում, հատկություններ, հիմքի փոխում, լոգարիթմական ֆունկցիա, հավասարումներ և անհավասարություններ։", "Определение, свойства, переход к новому основанию, логарифмическая функция, уравнения и неравенства."), [
        ["logarithm-definition", "Definition of the logarithm", "Լոգարիթմի սահմանումը", "Определение логарифма"],
        ["logarithm-properties", "Properties of logarithms", "Լոգարիթմների հատկությունները", "Свойства логарифмов"],
        ["change-of-base", "Decimal and natural logarithms; change of base", "Տասնորդական և բնական լոգարիթմ, հիմքի փոխում", "Десятичные и натуральные логарифмы; переход к новому основанию"],
        ["logarithmic-function", "The logarithmic function", "Լոգարիթմական ֆունկցիա", "Логарифмическая функция"],
        ["logarithmic-equations", "Logarithmic equations", "Լոգարիթմական հավասարումներ", "Логарифмические уравнения"],
        ["logarithmic-inequalities", "Logarithmic inequalities", "Լոգարիթմական անհավասարություններ", "Логарифмические неравенства"],
      ]),
      unit(t("Integral", "Ինտեգրալ", "Интеграл"), t("Antiderivative, rules, definite integral, area of a curvilinear trapezium.", "Նախնական, կանոններ, որոշյալ ինտեգրալ, կորագիծ սեղանի մակերես։", "Первообразная, правила, определённый интеграл, площадь криволинейной трапеции."), [
        ["antiderivative", "The antiderivative", "Նախնական", "Первообразная"],
        ["antiderivative-rules", "Rules for finding antiderivatives", "Նախնականի գտնելու կանոնները", "Правила нахождения первообразных"],
        ["definite-integral", "Area and the definite integral", "Մակերես և որոշյալ ինտեգրալ", "Площадь криволинейной трапеции и интеграл"],
        ["newton-leibniz", "Newton–Leibniz formula and applications", "Նյուտոն–Լայբնիցի բանաձև և կիրառություններ", "Формула Ньютона–Лейбница и применения"],
      ]),
      unit(t("Combinatorics, probability and statistics", "Կոմբինատորիկա, հավանականություն, վիճակագրություն", "Комбинаторика, вероятность и статистика"), t("Binomial theorem, probability of events, independent events, random variables.", "Նյուտոնի բինոմ, պատահույթների հավանականություն, անկախ պատահույթներ, պատահական մեծություններ։", "Бином Ньютона, вероятность событий, независимые события, случайные величины."), [
        ["binomial-theorem", "Newton's binomial", "Նյուտոնի բինոմ", "Бином Ньютона"],
        ["probability-rules", "Addition and multiplication of probabilities", "Հավանականությունների գումարում և բազմապատկում", "Сложение и умножение вероятностей"],
        ["conditional-probability", "Conditional probability and independence", "Պայմանական հավանականություն և անկախություն", "Условная вероятность и независимость"],
        ["random-variables", "Random variables and expected value", "Պատահական մեծություններ և մաթեմատիկական սպասում", "Случайные величины и математическое ожидание"],
      ]),
    ],
  },
  {
    subject: "algebra",
    grade: 12,
    title: t("Algebra · Grade 12", "Հանրահաշիվ · 12-րդ դասարան", "Алгебра · 12 класс"),
    description: t("Final year of Armenian high school: complex numbers, equations and inequalities with parameters, deeper analysis, and systematic review for the state exam.", "Հայաստանի ավագ դպրոցի ավարտական տարի՝ կոմպլեքս թվեր, պարամետրով հավասարումներ և անհավասարություններ, անալիզի խորացում, պետական քննության համակարգված ամփոփում։", "Выпускной год армянской старшей школы: комплексные числа, уравнения и неравенства с параметром, углубление анализа, систематическое повторение к государственному экзамену."),
    curriculumNotes: notes(
      ["Armenia grade 12 (final; the unified state exam in mathematics replaces the school exam for university entry): complex numbers, polynomials and higher-degree equations, parameters, elements of analysis review, probability and statistics, systematic exam preparation.", "Հայաստան, 12-րդ դասարան (ավարտական, միասնական քննություն մաթեմատիկայից)՝ կոմպլեքս թվեր, բազմանդամներ և բարձր աստիճանի հավասարումներ, պարամետրեր, անալիզի ամփոփում, հավանականություն և վիճակագրություն, քննության համակարգված նախապատրաստություն։", "Армения, 12 класс (выпускной, единый экзамен по математике): комплексные числа, многочлены и уравнения высших степеней, параметры, повторение анализа, вероятность и статистика, системная подготовка к экзамену."],
      ["Russia has no grade 12: this content corresponds to the end of Russian grade 11 (advanced level) and to first-year university preparatory material. ЕГЭ profile-level topics (parameters, complex numbers in advanced programmes) are covered here.", "Ռուսաստանում 12-րդ դասարան չկա․ այս բովանդակությունը համապատասխանում է ռուսական 11-րդ դասարանի խորացված մակարդակին և ЕГЭ պրոֆիլային թեմաներին (պարամետրեր, կոմպլեքս թվեր)։", "В России 12 класса нет: это содержание соответствует концу 11 класса углублённого уровня и профильному ЕГЭ (параметры, комплексные числа в углублённых программах)."],
    ),
    hoursPerWeek: { armenia: 4, russia: null },
    units: [
      unit(t("Complex numbers", "Կոմպլեքս թվեր", "Комплексные числа"), t("Imaginary unit, algebraic and trigonometric form, operations, roots.", "Կեղծ միավոր, հանրահաշվական և եռանկյունաչափական տեսք, գործողություններ, արմատներ։", "Мнимая единица, алгебраическая и тригонометрическая форма, действия, корни."), [
        ["imaginary-unit", "The imaginary unit and complex numbers", "Կեղծ միավոր և կոմպլեքս թվեր", "Мнимая единица и комплексные числа"],
        ["complex-operations", "Operations in algebraic form", "Գործողություններ հանրահաշվական տեսքով", "Действия в алгебраической форме"],
        ["complex-plane", "The complex plane and modulus", "Կոմպլեքս հարթություն և մոդուլ", "Комплексная плоскость и модуль"],
        ["trigonometric-form", "Trigonometric form and De Moivre's formula", "Եռանկյունաչափական տեսք և Մուավրի բանաձև", "Тригонометрическая форма и формула Муавра"],
        ["quadratic-complex-roots", "Quadratic equations with complex roots", "Քառակուսային հավասարումներ կոմպլեքս արմատներով", "Квадратные уравнения с комплексными корнями"],
      ]),
      unit(t("Polynomials and equations of higher degree", "Բազմանդամներ և բարձր աստիճանի հավասարումներ", "Многочлены и уравнения высших степеней"), t("Division of polynomials, Bezout's theorem, rational roots, symmetric equations.", "Բազմանդամների բաժանում, Բեզուի թեորեմ, ռացիոնալ արմատներ, սիմետրիկ հավասարումներ։", "Деление многочленов, теорема Безу, рациональные корни, симметрические уравнения."), [
        ["polynomial-division", "Dividing polynomials", "Բազմանդամների բաժանում", "Деление многочленов"],
        ["bezout", "Bezout's theorem and Horner's scheme", "Բեզուի թեորեմ և Հորների սխեմա", "Теорема Безу и схема Горнера"],
        ["rational-roots", "Rational roots of a polynomial", "Բազմանդամի ռացիոնալ արմատներ", "Рациональные корни многочлена"],
        ["symmetric-equations", "Symmetric and reciprocal equations", "Սիմետրիկ հավասարումներ", "Симметрические и возвратные уравнения"],
      ]),
      unit(t("Equations and inequalities with parameters", "Պարամետրով հավասարումներ և անհավասարություններ", "Уравнения и неравенства с параметром"), t("Linear and quadratic problems with parameters, graphical method.", "Գծային և քառակուսային խնդիրներ պարամետրով, գրաֆիկական եղանակ։", "Линейные и квадратные задачи с параметром, графический метод."), [
        ["linear-parameters", "Linear equations with a parameter", "Պարամետրով գծային հավասարումներ", "Линейные уравнения с параметром"],
        ["quadratic-parameters", "Quadratic equations with a parameter", "Պարամետրով քառակուսային հավասարումներ", "Квадратные уравнения с параметром"],
        ["roots-location", "Location of roots of a quadratic", "Քառակուսային եռանդամի արմատների դիրքը", "Расположение корней квадратного трёхчлена"],
        ["graphical-parameters", "Graphical method for parameters", "Պարամետրերի գրաֆիկական եղանակ", "Графический метод в задачах с параметром"],
      ]),
      unit(t("Deeper analysis", "Անալիզի խորացում", "Углубление анализа"), t("Second derivative and convexity, asymptotes, integrals in physics, differential equations idea.", "Երկրորդ ածանցյալ և ուռուցիկություն, ասիմպտոտներ, ինտեգրալը ֆիզիկայում, դիֆերենցիալ հավասարման գաղափար։", "Вторая производная и выпуклость, асимптоты, интеграл в физике, идея дифференциального уравнения."), [
        ["second-derivative", "Second derivative, convexity, inflection", "Երկրորդ ածանցյալ, ուռուցիկություն, շրջման կետ", "Вторая производная, выпуклость, точки перегиба"],
        ["asymptotes", "Asymptotes and full investigation of a function", "Ասիմպտոտներ և ֆունկցիայի լրիվ հետազոտում", "Асимптоты и полное исследование функции"],
        ["integral-applications", "Integral in geometry and physics", "Ինտեգրալը երկրաչափության և ֆիզիկայում", "Применения интеграла в геометрии и физике"],
        ["differential-equations-idea", "Simple differential equations", "Պարզ դիֆերենցիալ հավասարումներ", "Простейшие дифференциальные уравнения"],
      ]),
      unit(t("Exam preparation", "Քննության նախապատրաստություն", "Подготовка к экзамену"), t("Systematic review of all topics with mixed problem sets.", "Բոլոր թեմաների համակարգված ամփոփում խառը խնդիրներով։", "Системное повторение всех тем со смешанными наборами задач."), [
        ["review-expressions", "Review: expressions and transformations", "Ամփոփում․ արտահայտություններ և ձևափոխություններ", "Повторение: выражения и преобразования"],
        ["review-equations", "Review: equations and systems", "Ամփոփում․ հավասարումներ և համակարգեր", "Повторение: уравнения и системы"],
        ["review-inequalities", "Review: inequalities", "Ամփոփում․ անհավասարություններ", "Повторение: неравенства"],
        ["review-functions", "Review: functions and graphs", "Ամփոփում․ ֆունկցիաներ և գրաֆիկներ", "Повторение: функции и графики"],
        ["review-word-problems", "Review: word problems", "Ամփոփում․ տեքստային խնդիրներ", "Повторение: текстовые задачи"],
        ["mock-exam", "Mock exam", "Փորձնական քննություն", "Пробный экзамен"],
      ]),
    ],
  },
];
