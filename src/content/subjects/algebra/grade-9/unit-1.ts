import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Functions and their properties", "Ֆունկցիաներ և դրանց հատկությունները", "Функции и их свойства"),
  summary: t("What a function is, domain and range, zeros, sign intervals, monotonicity, even and odd functions, transformations of graphs.", "Ինչ է ֆունկցիան, որոշման տիրույթ և արժեքների բազմություն, զրոներ, նշանի միջակայքեր, մոնոտոնություն, զույգ և կենտ ֆունկցիաներ, գրաֆիկների ձևափոխումներ։", "Что такое функция, область определения и значений, нули, промежутки знакопостоянства, монотонность, чётные и нечётные функции, преобразования графиков."),
  lessons: [
    lesson(
      "what-is-function",
      ["What a function is; ways of defining it", "Ի՞նչ է ֆունկցիան, նրա տրման եղանակները", "Что такое функция; способы её задания"],
      {
        en: ["Define a function and the words argument and value", "Give a function by a formula, a table, a graph or words", "Use the vertical line test on a graph"],
        hy: ["Սահմանել ֆունկցիան և արգումենտ ու արժեք բառերը", "Ֆունկցիան տալ բանաձևով, աղյուսակով, գրաֆիկով կամ բառերով", "Գրաֆիկի վրա կիրառել ուղղահայաց ուղղի թեստը"],
        ru: ["Определять функцию и понятия аргумент и значение", "Задавать функцию формулой, таблицей, графиком или словами", "Применять к графику признак вертикальной прямой"],
      },
      {
        en: `## A rule with one answer

> A **function** is a rule that gives **exactly one** value $y$ to each value $x$ taken from some set.

- $x$ is the **argument**, or the independent variable;
- $y$ is the **value** of the function, or the dependent variable;
- the set of allowed $x$ is the **domain**, written $D(y)$;
- the set of all values obtained is the **range**, written $E(y)$.

The notation $y = f(x)$ reads "y is f of x". Then $f(3)$ means the value of the function when $x = 3$.

## Four ways to define a function

| Way | Example |
|---|---|
| Formula (analytic) | $y = 2x - 1$ |
| Table | $x$: $1, 2, 3$; $y$: $1, 4, 9$ |
| Graph | a curve on the coordinate plane |
| Words | "to each natural number assign its number of divisors" |

A formula is the most useful: it lets you compute the value for any $x$ of the domain, draw the graph and reason about the function.

## The graph

The **graph** of a function is the set of all points $(x; f(x))$ of the coordinate plane.

> **Vertical line test.** A curve is the graph of a function if and only if every vertical line meets it at most once.

A circle is not a graph of a function: the line $x = 0$ meets $x^2 + y^2 = 1$ at two points.

## Worked examples

> $f(x) = x^2 - 3x$. Find $f(0)$, $f(2)$, $f(-1)$.

$$f(0) = 0,\\quad f(2) = 4 - 6 = -2,\\quad f(-1) = 1 + 3 = 4$$

> For which $x$ is $f(x) = 0$ if $f(x) = x^2 - 3x$?

$$x^2 - 3x = 0 \\Rightarrow x(x - 3) = 0 \\Rightarrow x = 0\\ \\text{or}\\ x = 3$$

> A taxi charges $600$ dram for boarding and $100$ dram per kilometre. Write the cost as a function of the distance.

$$y = 600 + 100x,\\qquad x \\ge 0$$

### Exercises

1. Which of these rules is a function of $x$: (a) $y = 3x$; (b) "$y$ is a number whose square is $x$"; (c) $y = |x|$?
2. $f(x) = 5x - 2$. Find $f(0)$, $f(1)$, $f(-2)$.
3. $g(x) = x^2 + 1$. Find $g(3)$ and the $x$ for which $g(x) = 10$.
4. Define in words the function given by $y = 2x$ for a natural $x$.
5. A shop sells apples at $500$ dram per kilogram. Write the cost as a function of the mass.
6. Does the vertical line test pass for the curve $y^2 = x$?
7. $f(x) = \\dfrac{1}{x}$. Find $f(2)$, $f(0.5)$, and say why $f(0)$ does not exist.
8. A table gives $x$: $0, 1, 2, 3$ and $y$: $5, 7, 9, 11$. Guess a formula.

### Answers

1. (a) and (c) are functions; (b) is not, because $x = 4$ would give both $2$ and $-2$.
2. $-2$, $3$, $-12$.
3. $g(3) = 10$; $x^2 + 1 = 10 \\Rightarrow x = \\pm 3$.
4. To each natural number assign its double.
5. $y = 500x$, $x \\ge 0$.
6. No: the line $x = 1$ meets it at $y = 1$ and $y = -1$.
7. $0.5$ and $2$; division by zero is not defined.
8. $y = 2x + 5$.`,
        hy: `## Կանոն՝ մեկ պատասխանով

> **Ֆունկցիան** կանոն է, որն ինչ-որ բազմությունից վերցված ամեն $x$ արժեքին համապատասխանեցնում է **ճիշտ մեկ** $y$ արժեք։

- $x$-ը **արգումենտն** է՝ անկախ փոփոխականը,
- $y$-ը ֆունկցիայի **արժեքն** է՝ կախյալ փոփոխականը,
- թույլատրելի $x$-երի բազմությունը **որոշման տիրույթն** է՝ $D(y)$,
- ստացվող բոլոր արժեքների բազմությունը **արժեքների բազմությունն** է՝ $E(y)$։

$y = f(x)$ գրառումը կարդացվում է «իգրեկը հավասար է էֆ իքսից»։ Այդ դեպքում $f(3)$-ը ֆունկցիայի արժեքն է $x = 3$-ի դեպքում։

## Ֆունկցիայի տրման չորս եղանակ

| Եղանակ | Օրինակ |
|---|---|
| Բանաձև (անալիտիկ) | $y = 2x - 1$ |
| Աղյուսակ | $x$՝ $1, 2, 3$, $y$՝ $1, 4, 9$ |
| Գրաֆիկ | կոր՝ կոորդինատային հարթությունում |
| Բառեր | «ամեն բնական թվին համապատասխանեցնել նրա բաժանարարների թիվը» |

Բանաձևն ամենահարմարն է. այն թույլ է տալիս հաշվել արժեքն որոշման տիրույթի ցանկացած $x$-ի համար, կառուցել գրաֆիկը և դատել ֆունկցիայի մասին։

## Գրաֆիկ

Ֆունկցիայի **գրաֆիկը** կոորդինատային հարթության $(x; f(x))$ բոլոր կետերի բազմությունն է։

> **Ուղղահայաց ուղղի թեստը։** Կորը ֆունկցիայի գրաֆիկ է այն և միայն այն դեպքում, երբ ամեն ուղղահայաց ուղիղ նրան հատում է առավելագույնը մեկ անգամ։

Շրջանագիծը ֆունկցիայի գրաֆիկ չէ. $x = 0$ ուղիղը $x^2 + y^2 = 1$-ին հատում է երկու կետում։

## Լուծված օրինակներ

> $f(x) = x^2 - 3x$։ Գտիր $f(0)$, $f(2)$, $f(-1)$։

$$f(0) = 0,\\quad f(2) = 4 - 6 = -2,\\quad f(-1) = 1 + 3 = 4$$

> Ո՞ր $x$-երի դեպքում $f(x) = 0$, եթե $f(x) = x^2 - 3x$։

$$x^2 - 3x = 0 \\Rightarrow x(x - 3) = 0 \\Rightarrow x = 0\\ \\text{կամ}\\ x = 3$$

> Տաքսին վերցնում է $600$ դրամ նստելու համար և $100$ դրամ՝ կիլոմետրի դիմաց։ Գրիր արժեքն որպես ճանապարհի ֆունկցիա։

$$y = 600 + 100x,\\qquad x \\ge 0$$

### Վարժություններ

1. Այս կանոններից ո՞րն է $x$-ի ֆունկցիա՝ ա) $y = 3x$, բ) «$y$-ը թիվ է, որի քառակուսին $x$ է», գ) $y = |x|$։
2. $f(x) = 5x - 2$։ Գտիր $f(0)$, $f(1)$, $f(-2)$։
3. $g(x) = x^2 + 1$։ Գտիր $g(3)$-ը և այն $x$-երը, որոնց դեպքում $g(x) = 10$։
4. Բառերով սահմանիր $y = 2x$ բանաձևով տրված ֆունկցիան բնական $x$-ի համար։
5. Խանութը խնձորը վաճառում է կիլոգրամը $500$ դրամով։ Գրիր արժեքն որպես զանգվածի ֆունկցիա։
6. Ուղղահայաց ուղղի թեստն անցնո՞ւմ է $y^2 = x$ կորը։
7. $f(x) = \\dfrac{1}{x}$։ Գտիր $f(2)$, $f(0{,}5)$ և ասա, թե ինչու $f(0)$ գոյություն չունի։
8. Աղյուսակում $x$՝ $0, 1, 2, 3$ և $y$՝ $5, 7, 9, 11$։ Կռահիր բանաձևը։

### Պատասխաններ

1. ա)-ն և գ)-ն ֆունկցիաներ են, բ)-ն՝ ոչ, քանի որ $x = 4$-ը կտար և՛ $2$, և՛ $-2$։
2. $-2$, $3$, $-12$։
3. $g(3) = 10$, $x^2 + 1 = 10 \\Rightarrow x = \\pm 3$։
4. Ամեն բնական թվին համապատասխանեցնել նրա կրկնապատիկը։
5. $y = 500x$, $x \\ge 0$։
6. Ոչ. $x = 1$ ուղիղը նրան հատում է $y = 1$ և $y = -1$ կետերում։
7. $0{,}5$ և $2$, զրոյի վրա բաժանումն որոշված չէ։
8. $y = 2x + 5$։`,
        ru: `## Правило с одним ответом

> **Функция** — это правило, которое каждому значению $x$ из некоторого множества ставит в соответствие **ровно одно** значение $y$.

- $x$ — **аргумент**, независимая переменная;
- $y$ — **значение** функции, зависимая переменная;
- множество допустимых $x$ — **область определения**, $D(y)$;
- множество всех получаемых значений — **область значений**, $E(y)$.

Запись $y = f(x)$ читается «игрек равен эф от икс». Тогда $f(3)$ — значение функции при $x = 3$.

## Четыре способа задать функцию

| Способ | Пример |
|---|---|
| Формула (аналитический) | $y = 2x - 1$ |
| Таблица | $x$: $1, 2, 3$; $y$: $1, 4, 9$ |
| График | кривая на координатной плоскости |
| Словами | «каждому натуральному числу поставить в соответствие число его делителей» |

Формула удобнее всего: она позволяет вычислить значение для любого $x$ из области определения, построить график и рассуждать о функции.

## График

**График** функции — множество всех точек $(x; f(x))$ координатной плоскости.

> **Признак вертикальной прямой.** Кривая является графиком функции тогда и только тогда, когда каждая вертикальная прямая пересекает её не более одного раза.

Окружность не является графиком функции: прямая $x = 0$ пересекает $x^2 + y^2 = 1$ в двух точках.

## Разобранные примеры

> $f(x) = x^2 - 3x$. Найди $f(0)$, $f(2)$, $f(-1)$.

$$f(0) = 0,\\quad f(2) = 4 - 6 = -2,\\quad f(-1) = 1 + 3 = 4$$

> При каких $x$ выполняется $f(x) = 0$, если $f(x) = x^2 - 3x$?

$$x^2 - 3x = 0 \\Rightarrow x(x - 3) = 0 \\Rightarrow x = 0\\ \\text{или}\\ x = 3$$

> Такси берёт $600$ драмов за посадку и $100$ драмов за километр. Запиши стоимость как функцию пути.

$$y = 600 + 100x,\\qquad x \\ge 0$$

### Упражнения

1. Какое из правил является функцией от $x$: а) $y = 3x$; б) «$y$ — число, квадрат которого равен $x$»; в) $y = |x|$?
2. $f(x) = 5x - 2$. Найди $f(0)$, $f(1)$, $f(-2)$.
3. $g(x) = x^2 + 1$. Найди $g(3)$ и те $x$, при которых $g(x) = 10$.
4. Опиши словами функцию, заданную формулой $y = 2x$ для натурального $x$.
5. Магазин продаёт яблоки по $500$ драмов за килограмм. Запиши стоимость как функцию массы.
6. Проходит ли признак вертикальной прямой кривая $y^2 = x$?
7. $f(x) = \\dfrac{1}{x}$. Найди $f(2)$, $f(0{,}5)$ и объясни, почему $f(0)$ не существует.
8. В таблице $x$: $0, 1, 2, 3$ и $y$: $5, 7, 9, 11$. Угадай формулу.

### Ответы

1. Функциями являются а) и в); б) нет, потому что при $x = 4$ получились бы и $2$, и $-2$.
2. $-2$, $3$, $-12$.
3. $g(3) = 10$; $x^2 + 1 = 10 \\Rightarrow x = \\pm 3$.
4. Каждому натуральному числу ставится в соответствие его удвоенное значение.
5. $y = 500x$, $x \\ge 0$.
6. Нет: прямая $x = 1$ пересекает её в точках $y = 1$ и $y = -1$.
7. $0{,}5$ и $2$; деление на нуль не определено.
8. $y = 2x + 5$.`,
      },
      [
        q(t("A function assigns to each value of the argument", "Ֆունկցիան արգումենտի ամեն արժեքին համապատասխանեցնում է", "Функция ставит в соответствие каждому значению аргумента"), [
          t("exactly one value", "ճիշտ մեկ արժեք", "ровно одно значение"),
          t("any number of values", "ցանկացած թվով արժեքներ", "любое число значений"),
          t("at least two values", "առնվազն երկու արժեք", "не менее двух значений"),
        ], 0),
        q(t("If f(x) = 2x + 1, then f(3) equals", "Եթե f(x) = 2x + 1, ապա f(3)-ը հավասար է", "Если f(x) = 2x + 1, то f(3) равно"), [
          t("5", "5", "5"),
          t("7", "7", "7"),
          t("6", "6", "6"),
        ], 1),
        q(t("The set of allowed values of the argument is called", "Արգումենտի թույլատրելի արժեքների բազմությունը կոչվում է", "Множество допустимых значений аргумента называется"), [
          t("the range", "արժեքների բազմություն", "областью значений"),
          t("the graph", "գրաֆիկ", "графиком"),
          t("the domain", "որոշման տիրույթ", "областью определения"),
        ], 2),
        q(t("A curve is the graph of a function if every vertical line meets it", "Կորը ֆունկցիայի գրաֆիկ է, եթե ամեն ուղղահայաց ուղիղ նրան հատում է", "Кривая является графиком функции, если каждая вертикальная прямая пересекает её"), [
          t("at most once", "առավելագույնը մեկ անգամ", "не более одного раза"),
          t("at least twice", "առնվազն երկու անգամ", "не менее двух раз"),
          t("exactly three times", "ճիշտ երեք անգամ", "ровно три раза"),
        ], 0),
        q(t("Which rule is NOT a function of x?", "Ո՞ր կանոնը x-ի ֆունկցիա ՉԷ", "Какое правило НЕ является функцией от x?"), [
          t("y = 3x - 1", "y = 3x - 1", "y = 3x - 1"),
          t("y is a number whose square is x", "y-ը թիվ է, որի քառակուսին x է", "y — число, квадрат которого равен x"),
          t("y = |x|", "y = |x|", "y = |x|"),
        ], 1),
        q(t("A taxi costs 600 dram plus 100 dram per km. The cost is", "Տաքսին արժե 600 դրամ գումարած 100 դրամ կիլոմետրի դիմաց։ Արժեքն է", "Такси стоит 600 драмов плюс 100 драмов за км. Стоимость равна"), [
          t("y = 100x - 600", "y = 100x - 600", "y = 100x - 600"),
          t("y = 600x + 100", "y = 600x + 100", "y = 600x + 100"),
          t("y = 600 + 100x", "y = 600 + 100x", "y = 600 + 100x"),
        ], 2),
      ],
    ),
    lesson(
      "function-domain-range",
      ["Domain and range", "Որոշման տիրույթ և արժեքների բազմություն", "Область определения и область значений"],
      {
        en: ["Find the domain of a function given by a formula", "Find the range from a graph or from the form of the formula", "Give the domain of a function that describes a real situation"],
        hy: ["Գտնել բանաձևով տրված ֆունկցիայի որոշման տիրույթը", "Գտնել արժեքների բազմությունը գրաֆիկից կամ բանաձևի տեսքից", "Նշել իրական իրավիճակ նկարագրող ֆունկցիայի որոշման տիրույթը"],
        ru: ["Находить область определения функции, заданной формулой", "Находить область значений по графику или по виду формулы", "Указывать область определения функции, описывающей реальную ситуацию"],
      },
      {
        en: `## Where the formula works

If a function is given only by a formula, its **domain** is the set of all $x$ for which the formula makes sense. Two rules decide almost every school example:

1. you cannot divide by zero;
2. you cannot take the square root of a negative number.

| Formula | Restriction | Domain |
|---|---|---|
| $y = 3x - 5$ | none | all $x$ |
| $y = \\dfrac{1}{x - 2}$ | $x - 2 \\ne 0$ | $x \\ne 2$ |
| $y = \\sqrt{x + 4}$ | $x + 4 \\ge 0$ | $x \\ge -4$ |
| $y = \\dfrac{\\sqrt{x}}{x - 1}$ | $x \\ge 0$ and $x \\ne 1$ | $[0; 1) \\cup (1; +\\infty)$ |

## The range

The **range** $E(y)$ is the set of all values the function actually takes. Reading it from a graph is easy: project the graph onto the $y$-axis.

| Function | Range |
|---|---|
| $y = 3x - 5$ | all $y$ |
| $y = x^2$ | $y \\ge 0$ |
| $y = x^2 + 3$ | $y \\ge 3$ |
| $y = \\sqrt{x}$ | $y \\ge 0$ |
| $y = \\dfrac{1}{x}$ | $y \\ne 0$ |
| $y = \\lvert x\\rvert - 2$ | $y \\ge -2$ |

## A real situation narrows the domain

> A square has side $a$ cm. Write its perimeter as a function of $a$ and give the domain.

$P = 4a$, and a side cannot be zero or negative, so $a > 0$. The formula alone would allow any $a$; the situation does not.

> A bus has $45$ seats and the ticket costs $300$ dram. The takings are $y = 300x$, where $x$ is a whole number with $0 \\le x \\le 45$.

## Worked examples

> Find the domain of $y = \\dfrac{x + 1}{x^2 - 9}$.

$$x^2 - 9 \\ne 0 \\Rightarrow x \\ne 3,\\ x \\ne -3$$

> Find the domain of $y = \\sqrt{5 - x}$.

$$5 - x \\ge 0 \\Rightarrow x \\le 5$$

> Find the range of $y = -x^2 + 4$.

$x^2 \\ge 0$, so $-x^2 \\le 0$ and $y \\le 4$: the range is $y \\le 4$.

### Exercises

1. Find the domain: (a) $y = 7x + 2$; (b) $y = \\dfrac{3}{x}$; (c) $y = \\sqrt{x - 6}$.
2. Find the domain of $y = \\dfrac{2}{x + 5}$.
3. Find the domain of $y = \\dfrac{1}{x^2 - 4}$.
4. Find the domain of $y = \\sqrt{x} + \\dfrac{1}{x - 2}$.
5. Find the range: (a) $y = x^2 - 1$; (b) $y = \\sqrt{x} + 3$; (c) $y = 5 - x^2$.
6. The side of an equilateral triangle is $a$ cm. Write the perimeter and the domain.
7. A tank holds $200$ litres and is filled at $10$ litres a minute. Write the volume as a function of time and give the domain.
8. Can the range of $y = x^2 + 1$ contain the number $0$?

### Answers

1. (a) all $x$; (b) $x \\ne 0$; (c) $x \\ge 6$.
2. $x \\ne -5$.
3. $x \\ne 2$ and $x \\ne -2$.
4. $x \\ge 0$ and $x \\ne 2$.
5. (a) $y \\ge -1$; (b) $y \\ge 3$; (c) $y \\le 5$.
6. $P = 3a$, $a > 0$.
7. $V = 10t$, $0 \\le t \\le 20$.
8. No: $x^2 \\ge 0$, so $y \\ge 1$.`,
        hy: `## Որտեղ է բանաձևն աշխատում

Եթե ֆունկցիան տրված է միայն բանաձևով, նրա **որոշման տիրույթը** բոլոր այն $x$-երի բազմությունն է, որոնց դեպքում բանաձևն իմաստ ունի։ Դպրոցական գրեթե ամեն օրինակ որոշում են երկու կանոն՝

1. զրոյի վրա բաժանել չի կարելի,
2. բացասական թվից քառակուսի արմատ հանել չի կարելի։

| Բանաձև | Սահմանափակում | Որոշման տիրույթ |
|---|---|---|
| $y = 3x - 5$ | չկա | բոլոր $x$-երը |
| $y = \\dfrac{1}{x - 2}$ | $x - 2 \\ne 0$ | $x \\ne 2$ |
| $y = \\sqrt{x + 4}$ | $x + 4 \\ge 0$ | $x \\ge -4$ |
| $y = \\dfrac{\\sqrt{x}}{x - 1}$ | $x \\ge 0$ և $x \\ne 1$ | $[0; 1) \\cup (1; +\\infty)$ |

## Արժեքների բազմություն

**Արժեքների բազմությունը** $E(y)$ բոլոր այն արժեքների բազմությունն է, որոնք ֆունկցիան իրոք ընդունում է։ Գրաֆիկից այն հեշտ է կարդալ՝ գրաֆիկը նախագծիր $y$ առանցքի վրա։

| Ֆունկցիա | Արժեքների բազմություն |
|---|---|
| $y = 3x - 5$ | բոլոր $y$-երը |
| $y = x^2$ | $y \\ge 0$ |
| $y = x^2 + 3$ | $y \\ge 3$ |
| $y = \\sqrt{x}$ | $y \\ge 0$ |
| $y = \\dfrac{1}{x}$ | $y \\ne 0$ |
| $y = \\lvert x\\rvert - 2$ | $y \\ge -2$ |

## Իրական իրավիճակը նեղացնում է տիրույթը

> Քառակուսու կողմը $a$ սմ է։ Գրիր նրա պարագիծն որպես $a$-ի ֆունկցիա և նշիր որոշման տիրույթը։

$P = 4a$, իսկ կողմը չի կարող զրո կամ բացասական լինել, ուստի $a > 0$։ Միայն բանաձևը թույլ կտար ցանկացած $a$, իրավիճակը՝ ոչ։

> Ավտոբուսն ունի $45$ տեղ, տոմսն արժե $300$ դրամ։ Հասույթը $y = 300x$ է, որտեղ $x$-ը ամբողջ թիվ է և $0 \\le x \\le 45$։

## Լուծված օրինակներ

> Գտիր $y = \\dfrac{x + 1}{x^2 - 9}$-ի որոշման տիրույթը։

$$x^2 - 9 \\ne 0 \\Rightarrow x \\ne 3,\\ x \\ne -3$$

> Գտիր $y = \\sqrt{5 - x}$-ի որոշման տիրույթը։

$$5 - x \\ge 0 \\Rightarrow x \\le 5$$

> Գտիր $y = -x^2 + 4$-ի արժեքների բազմությունը։

$x^2 \\ge 0$, ուստի $-x^2 \\le 0$ և $y \\le 4$. արժեքների բազմությունը $y \\le 4$ է։

### Վարժություններ

1. Գտիր որոշման տիրույթը՝ ա) $y = 7x + 2$, բ) $y = \\dfrac{3}{x}$, գ) $y = \\sqrt{x - 6}$։
2. Գտիր $y = \\dfrac{2}{x + 5}$-ի որոշման տիրույթը։
3. Գտիր $y = \\dfrac{1}{x^2 - 4}$-ի որոշման տիրույթը։
4. Գտիր $y = \\sqrt{x} + \\dfrac{1}{x - 2}$-ի որոշման տիրույթը։
5. Գտիր արժեքների բազմությունը՝ ա) $y = x^2 - 1$, բ) $y = \\sqrt{x} + 3$, գ) $y = 5 - x^2$։
6. Հավասարակողմ եռանկյան կողմը $a$ սմ է։ Գրիր պարագիծը և որոշման տիրույթը։
7. Բաքը տեղավորում է $200$ լիտր և լցվում է րոպեում $10$ լիտրով։ Գրիր ծավալն որպես ժամանակի ֆունկցիա և նշիր տիրույթը։
8. Կարո՞ղ է $y = x^2 + 1$-ի արժեքների բազմությունը պարունակել $0$ թիվը։

### Պատասխաններ

1. ա) բոլոր $x$-երը, բ) $x \\ne 0$, գ) $x \\ge 6$։
2. $x \\ne -5$։
3. $x \\ne 2$ և $x \\ne -2$։
4. $x \\ge 0$ և $x \\ne 2$։
5. ա) $y \\ge -1$, բ) $y \\ge 3$, գ) $y \\le 5$։
6. $P = 3a$, $a > 0$։
7. $V = 10t$, $0 \\le t \\le 20$։
8. Ոչ. $x^2 \\ge 0$, ուստի $y \\ge 1$։`,
        ru: `## Где формула работает

Если функция задана только формулой, её **область определения** — множество всех $x$, при которых формула имеет смысл. Почти любой школьный пример решают два правила:

1. нельзя делить на нуль;
2. нельзя извлекать квадратный корень из отрицательного числа.

| Формула | Ограничение | Область определения |
|---|---|---|
| $y = 3x - 5$ | нет | все $x$ |
| $y = \\dfrac{1}{x - 2}$ | $x - 2 \\ne 0$ | $x \\ne 2$ |
| $y = \\sqrt{x + 4}$ | $x + 4 \\ge 0$ | $x \\ge -4$ |
| $y = \\dfrac{\\sqrt{x}}{x - 1}$ | $x \\ge 0$ и $x \\ne 1$ | $[0; 1) \\cup (1; +\\infty)$ |

## Область значений

**Область значений** $E(y)$ — множество всех значений, которые функция действительно принимает. По графику её легко прочитать: спроецируй график на ось $y$.

| Функция | Область значений |
|---|---|
| $y = 3x - 5$ | все $y$ |
| $y = x^2$ | $y \\ge 0$ |
| $y = x^2 + 3$ | $y \\ge 3$ |
| $y = \\sqrt{x}$ | $y \\ge 0$ |
| $y = \\dfrac{1}{x}$ | $y \\ne 0$ |
| $y = \\lvert x\\rvert - 2$ | $y \\ge -2$ |

## Реальная ситуация сужает область

> Сторона квадрата равна $a$ см. Запиши периметр как функцию от $a$ и укажи область определения.

$P = 4a$, а сторона не может быть нулевой или отрицательной, поэтому $a > 0$. Одна формула допустила бы любое $a$, ситуация — нет.

> В автобусе $45$ мест, билет стоит $300$ драмов. Выручка $y = 300x$, где $x$ — целое число и $0 \\le x \\le 45$.

## Разобранные примеры

> Найди область определения $y = \\dfrac{x + 1}{x^2 - 9}$.

$$x^2 - 9 \\ne 0 \\Rightarrow x \\ne 3,\\ x \\ne -3$$

> Найди область определения $y = \\sqrt{5 - x}$.

$$5 - x \\ge 0 \\Rightarrow x \\le 5$$

> Найди область значений $y = -x^2 + 4$.

$x^2 \\ge 0$, поэтому $-x^2 \\le 0$ и $y \\le 4$: область значений $y \\le 4$.

### Упражнения

1. Найди область определения: а) $y = 7x + 2$; б) $y = \\dfrac{3}{x}$; в) $y = \\sqrt{x - 6}$.
2. Найди область определения $y = \\dfrac{2}{x + 5}$.
3. Найди область определения $y = \\dfrac{1}{x^2 - 4}$.
4. Найди область определения $y = \\sqrt{x} + \\dfrac{1}{x - 2}$.
5. Найди область значений: а) $y = x^2 - 1$; б) $y = \\sqrt{x} + 3$; в) $y = 5 - x^2$.
6. Сторона равностороннего треугольника равна $a$ см. Запиши периметр и область определения.
7. Бак вмещает $200$ литров и наполняется по $10$ литров в минуту. Запиши объём как функцию времени и укажи область определения.
8. Может ли область значений $y = x^2 + 1$ содержать число $0$?

### Ответы

1. а) все $x$; б) $x \\ne 0$; в) $x \\ge 6$.
2. $x \\ne -5$.
3. $x \\ne 2$ и $x \\ne -2$.
4. $x \\ge 0$ и $x \\ne 2$.
5. а) $y \\ge -1$; б) $y \\ge 3$; в) $y \\le 5$.
6. $P = 3a$, $a > 0$.
7. $V = 10t$, $0 \\le t \\le 20$.
8. Нет: $x^2 \\ge 0$, поэтому $y \\ge 1$.`,
      },
      [
        q(t("The domain of y = 1/(x - 3) is", "y = 1/(x - 3)-ի որոշման տիրույթն է", "Область определения y = 1/(x - 3) —"), [
          t("all x except 3", "բոլոր x-երը, բացի 3-ից", "все x, кроме 3"),
          t("x ≥ 3", "x ≥ 3", "x ≥ 3"),
          t("all x", "բոլոր x-երը", "все x"),
        ], 0),
        q(t("The domain of y = √(x - 6) is", "y = √(x - 6)-ի որոշման տիրույթն է", "Область определения y = √(x - 6) —"), [
          t("x ≤ 6", "x ≤ 6", "x ≤ 6"),
          t("x ≥ 6", "x ≥ 6", "x ≥ 6"),
          t("x ≠ 6", "x ≠ 6", "x ≠ 6"),
        ], 1),
        q(t("The range of y = x² + 3 is", "y = x² + 3-ի արժեքների բազմությունն է", "Область значений y = x² + 3 —"), [
          t("all y", "բոլոր y-երը", "все y"),
          t("y ≥ 0", "y ≥ 0", "y ≥ 0"),
          t("y ≥ 3", "y ≥ 3", "y ≥ 3"),
        ], 2),
        q(t("The range of y = 1/x is", "y = 1/x-ի արժեքների բազմությունն է", "Область значений y = 1/x —"), [
          t("all y except 0", "բոլոր y-երը, բացի 0-ից", "все y, кроме 0"),
          t("y > 0", "y > 0", "y > 0"),
          t("all y", "բոլոր y-երը", "все y"),
        ], 0),
        q(t("For the perimeter of a square P = 4a the natural domain is", "Քառակուսու P = 4a պարագծի բնական տիրույթն է", "Для периметра квадрата P = 4a естественная область определения —"), [
          t("all a", "բոլոր a-երը", "все a"),
          t("a > 0", "a > 0", "a > 0"),
          t("a ≤ 0", "a ≤ 0", "a ≤ 0"),
        ], 1),
        q(t("Two rules that usually restrict a domain are", "Տիրույթը սովորաբար սահմանափակող երկու կանոններն են", "Два правила, обычно ограничивающие область определения, —"), [
          t("no negative numbers and no fractions", "ոչ բացասական թվեր և ոչ կոտորակներ", "никаких отрицательных чисел и дробей"),
          t("no zero and no one", "ոչ զրո և ոչ մեկ", "ни нуля, ни единицы"),
          t("no division by zero and no root of a negative number", "զրոյի վրա բաժանում չկա և բացասական թվի արմատ չկա", "нельзя делить на нуль и извлекать корень из отрицательного числа"),
        ], 2),
      ],
    ),
    lesson(
      "function-properties",
      ["Zeros, sign intervals and monotonicity", "Ֆունկցիայի զրոները, նշանի միջակայքերը և մոնոտոնությունը", "Нули, промежутки знакопостоянства и монотонность"],
      {
        en: ["Find the zeros of a function from a formula and from a graph", "Write the intervals where the function is positive and where it is negative", "Decide where a function increases and where it decreases"],
        hy: ["Գտնել ֆունկցիայի զրոները բանաձևից և գրաֆիկից", "Գրել միջակայքերը, որտեղ ֆունկցիան դրական է և որտեղ՝ բացասական", "Որոշել, որտեղ ֆունկցիան աճում է և որտեղ՝ նվազում"],
        ru: ["Находить нули функции по формуле и по графику", "Записывать промежутки, где функция положительна и где отрицательна", "Определять, где функция возрастает и где убывает"],
      },
      {
        en: `## Zeros of a function

> A **zero** of a function is a value of the argument at which the function equals $0$.

To find the zeros from a formula, solve the equation $f(x) = 0$. On a graph the zeros are the **x-coordinates of the points where the graph meets the x-axis**.

**Example 1.** $f(x) = x^2 - 9$. Solve $x^2 - 9 = 0$, so $x = -3$ or $x = 3$. The function has two zeros.

**Example 2.** $f(x) = \\dfrac{x - 4}{x + 1}$. A fraction is zero when its numerator is zero and its denominator is not: $x - 4 = 0$ gives $x = 4$, and $4 + 1 \\ne 0$. One zero, $x = 4$.

## Sign intervals

The zeros cut the domain into pieces. Inside one piece the function keeps the same sign, so it is enough to test one point of each piece.

**Example 3.** For $f(x) = x^2 - 9$ the zeros $-3$ and $3$ give three pieces.

| Interval | Test point | Value | Sign |
|---|---|---|---|
| $(-\\infty; -3)$ | $x = -4$ | $7$ | $+$ |
| $(-3; 3)$ | $x = 0$ | $-9$ | $-$ |
| $(3; +\\infty)$ | $x = 4$ | $7$ | $+$ |

So $f(x) > 0$ for $x \\in (-\\infty; -3) \\cup (3; +\\infty)$ and $f(x) < 0$ for $x \\in (-3; 3)$.

## Increasing and decreasing

> A function **increases** on an interval if a larger argument always gives a larger value: $x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$.
>
> It **decreases** on an interval if a larger argument always gives a smaller value: $x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)$.

A function that only increases, or only decreases, on an interval is called **monotone** there.

On a graph, read left to right: a rising piece means increasing, a falling piece means decreasing.

**Example 4.** $y = x^2$ decreases on $(-\\infty; 0]$ and increases on $[0; +\\infty)$. The point $x = 0$ is where the behaviour changes; there the function has its smallest value $0$.

**Example 5.** $y = 3x - 6$ increases on the whole number line, because the coefficient of $x$ is positive. Its only zero is $x = 2$, it is negative for $x < 2$ and positive for $x > 2$.

## Greatest and least value

If the graph has a lowest point, its $y$-coordinate is the **least value** of the function; a highest point gives the **greatest value**. A linear function $y = kx + b$ with $k \\ne 0$ has neither on the whole line.

### Exercises

1. Find the zeros: a) $f(x) = 5x - 20$; b) $f(x) = x^2 - 16$; c) $f(x) = x^2 + 4$.
2. Find the zeros of $f(x) = \\dfrac{x + 3}{x - 2}$.
3. For $f(x) = 2x + 8$ write the intervals where $f(x) > 0$ and where $f(x) < 0$.
4. For $f(x) = x^2 - 4x$ find the zeros and the sign intervals.
5. On which intervals does $y = -x^2$ increase and on which does it decrease?
6. Is $y = -4x + 1$ increasing or decreasing on the whole line? Why?
7. A graph falls from $(-5; 4)$ to $(1; -2)$ and then rises to $(6; 3)$. Write the intervals of increase and of decrease and the least value.
8. The function $f$ has zeros $-2$ and $5$ only, and $f(0) = -10$. Write the sign of $f$ on each of the three intervals.

### Answers

1. a) $4$; b) $-4$ and $4$; c) no zeros.
2. $x = -3$.
3. $f(x) > 0$ for $x > -4$; $f(x) < 0$ for $x < -4$.
4. Zeros $0$ and $4$; positive on $(-\\infty; 0) \\cup (4; +\\infty)$, negative on $(0; 4)$.
5. Increases on $(-\\infty; 0]$, decreases on $[0; +\\infty)$.
6. Decreasing, because the coefficient $-4$ is negative.
7. Decreases on $[-5; 1]$, increases on $[1; 6]$; least value $-2$.
8. Positive on $(-\\infty; -2)$, negative on $(-2; 5)$, positive on $(5; +\\infty)$.`,
        hy: `## Ֆունկցիայի զրոները

> Ֆունկցիայի **զրո** է կոչվում արգումենտի այն արժեքը, որի դեպքում ֆունկցիան հավասար է $0$-ի։

Բանաձևից զրոները գտնելու համար լուծում ենք $f(x) = 0$ հավասարումը։ Գրաֆիկի վրա զրոներն այն կետերի **աբսցիսներն** են, որտեղ գրաֆիկը հատում է $Ox$ առանցքը։

**Օրինակ 1։** $f(x) = x^2 - 9$։ Լուծում ենք $x^2 - 9 = 0$, ուստի $x = -3$ կամ $x = 3$։ Ֆունկցիան ունի երկու զրո։

**Օրինակ 2։** $f(x) = \\dfrac{x - 4}{x + 1}$։ Կոտորակը զրո է, երբ համարիչը զրո է, իսկ հայտարարը՝ ոչ. $x - 4 = 0$ տալիս է $x = 4$, և $4 + 1 \\ne 0$։ Մեկ զրո՝ $x = 4$։

## Նշանի միջակայքերը

Զրոներն որոշման տիրույթը բաժանում են մասերի։ Մեկ մասի ներսում ֆունկցիան պահպանում է նույն նշանը, ուստի բավական է ստուգել յուրաքանչյուր մասի մեկ կետ։

**Օրինակ 3։** $f(x) = x^2 - 9$ ֆունկցիայի $-3$ և $3$ զրոները տալիս են երեք մաս։

| Միջակայք | Ստուգման կետ | Արժեք | Նշան |
|---|---|---|---|
| $(-\\infty; -3)$ | $x = -4$ | $7$ | $+$ |
| $(-3; 3)$ | $x = 0$ | $-9$ | $-$ |
| $(3; +\\infty)$ | $x = 4$ | $7$ | $+$ |

Ուրեմն $f(x) > 0$, երբ $x \\in (-\\infty; -3) \\cup (3; +\\infty)$, և $f(x) < 0$, երբ $x \\in (-3; 3)$։

## Աճում և նվազում

> Ֆունկցիան միջակայքում **աճում է**, եթե ավելի մեծ արգումենտը միշտ տալիս է ավելի մեծ արժեք. $x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$։
>
> Ֆունկցիան միջակայքում **նվազում է**, եթե ավելի մեծ արգումենտը միշտ տալիս է ավելի փոքր արժեք. $x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)$։

Ֆունկցիան, որը միջակայքում միայն աճում է կամ միայն նվազում, այդ միջակայքում կոչվում է **մոնոտոն**։

Գրաֆիկը կարդում ենք ձախից աջ. բարձրացող մասը նշանակում է աճում, իջնող մասը՝ նվազում։

**Օրինակ 4։** $y = x^2$ ֆունկցիան նվազում է $(-\\infty; 0]$-ում և աճում $[0; +\\infty)$-ում։ $x = 0$ կետում վարքը փոխվում է. այնտեղ ֆունկցիան ունի իր ամենափոքր արժեքը՝ $0$։

**Օրինակ 5։** $y = 3x - 6$ ֆունկցիան աճում է ամբողջ թվային ուղղի վրա, քանի որ $x$-ի գործակիցը դրական է։ Նրա միակ զրոն $x = 2$ է, $x < 2$-ի դեպքում բացասական է, $x > 2$-ի դեպքում՝ դրական։

## Ամենամեծ և ամենափոքր արժեքը

Եթե գրաֆիկն ունի ամենացածր կետ, ապա նրա օրդինատը ֆունկցիայի **ամենափոքր արժեքն** է. ամենաբարձր կետը տալիս է **ամենամեծ արժեքը**։ $y = kx + b$ գծային ֆունկցիան $k \\ne 0$ դեպքում ամբողջ ուղղի վրա ոչ մեկն ունի, ոչ մյուսը։

### Վարժություններ

1. Գտե՛ք զրոները՝ ա) $f(x) = 5x - 20$; բ) $f(x) = x^2 - 16$; գ) $f(x) = x^2 + 4$։
2. Գտե՛ք $f(x) = \\dfrac{x + 3}{x - 2}$ ֆունկցիայի զրոները։
3. $f(x) = 2x + 8$ ֆունկցիայի համար գրե՛ք միջակայքերը, որտեղ $f(x) > 0$ և որտեղ $f(x) < 0$։
4. $f(x) = x^2 - 4x$ ֆունկցիայի համար գտե՛ք զրոները և նշանի միջակայքերը։
5. Ո՞ր միջակայքերում է $y = -x^2$ ֆունկցիան աճում և որտեղ՝ նվազում։
6. $y = -4x + 1$ ֆունկցիան աճո՞ւմ է, թե՞ նվազում ամբողջ ուղղի վրա։ Ինչո՞ւ։
7. Գրաֆիկն իջնում է $(-5; 4)$-ից $(1; -2)$ և ապա բարձրանում է $(6; 3)$։ Գրե՛ք աճման և նվազման միջակայքերը և ամենափոքր արժեքը։
8. $f$ ֆունկցիան ունի միայն $-2$ և $5$ զրոները, և $f(0) = -10$։ Գրե՛ք $f$-ի նշանն երեք միջակայքերից յուրաքանչյուրում։

### Պատասխաններ

1. ա) $4$; բ) $-4$ և $4$; գ) զրո չունի։
2. $x = -3$։
3. $f(x) > 0$, երբ $x > -4$; $f(x) < 0$, երբ $x < -4$։
4. Զրոները՝ $0$ և $4$; դրական է $(-\\infty; 0) \\cup (4; +\\infty)$-ում, բացասական՝ $(0; 4)$-ում։
5. Աճում է $(-\\infty; 0]$-ում, նվազում՝ $[0; +\\infty)$-ում։
6. Նվազում է, քանի որ $-4$ գործակիցը բացասական է։
7. Նվազում է $[-5; 1]$-ում, աճում՝ $[1; 6]$-ում; ամենափոքր արժեքը՝ $-2$։
8. Դրական է $(-\\infty; -2)$-ում, բացասական՝ $(-2; 5)$-ում, դրական՝ $(5; +\\infty)$-ում։`,
        ru: `## Нули функции

> **Нулём** функции называют такое значение аргумента, при котором функция равна $0$.

Чтобы найти нули по формуле, решают уравнение $f(x) = 0$. На графике нули — это **абсциссы точек**, в которых график пересекает ось $Ox$.

**Пример 1.** $f(x) = x^2 - 9$. Решаем $x^2 - 9 = 0$, значит $x = -3$ или $x = 3$. У функции два нуля.

**Пример 2.** $f(x) = \\dfrac{x - 4}{x + 1}$. Дробь равна нулю, когда числитель равен нулю, а знаменатель нет: $x - 4 = 0$ даёт $x = 4$, и $4 + 1 \\ne 0$. Один нуль, $x = 4$.

## Промежутки знакопостоянства

Нули разбивают область определения на части. Внутри одной части функция сохраняет знак, поэтому достаточно проверить одну точку каждой части.

**Пример 3.** Для $f(x) = x^2 - 9$ нули $-3$ и $3$ дают три части.

| Промежуток | Пробная точка | Значение | Знак |
|---|---|---|---|
| $(-\\infty; -3)$ | $x = -4$ | $7$ | $+$ |
| $(-3; 3)$ | $x = 0$ | $-9$ | $-$ |
| $(3; +\\infty)$ | $x = 4$ | $7$ | $+$ |

Итак, $f(x) > 0$ при $x \\in (-\\infty; -3) \\cup (3; +\\infty)$ и $f(x) < 0$ при $x \\in (-3; 3)$.

## Возрастание и убывание

> Функция **возрастает** на промежутке, если большему аргументу всегда соответствует большее значение: $x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$.
>
> Функция **убывает** на промежутке, если большему аргументу всегда соответствует меньшее значение: $x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)$.

Функцию, которая на промежутке только возрастает или только убывает, называют там **монотонной**.

График читают слева направо: поднимающийся участок означает возрастание, опускающийся — убывание.

**Пример 4.** $y = x^2$ убывает на $(-\\infty; 0]$ и возрастает на $[0; +\\infty)$. В точке $x = 0$ поведение меняется; там функция принимает наименьшее значение $0$.

**Пример 5.** $y = 3x - 6$ возрастает на всей числовой прямой, так как коэффициент при $x$ положителен. Единственный нуль $x = 2$, при $x < 2$ функция отрицательна, при $x > 2$ положительна.

## Наибольшее и наименьшее значение

Если у графика есть самая низкая точка, её ордината — **наименьшее значение** функции; самая высокая точка даёт **наибольшее значение**. У линейной функции $y = kx + b$ при $k \\ne 0$ на всей прямой нет ни того, ни другого.

### Упражнения

1. Найдите нули: а) $f(x) = 5x - 20$; б) $f(x) = x^2 - 16$; в) $f(x) = x^2 + 4$.
2. Найдите нули функции $f(x) = \\dfrac{x + 3}{x - 2}$.
3. Для $f(x) = 2x + 8$ запишите промежутки, где $f(x) > 0$ и где $f(x) < 0$.
4. Для $f(x) = x^2 - 4x$ найдите нули и промежутки знакопостоянства.
5. На каких промежутках функция $y = -x^2$ возрастает и на каких убывает?
6. Возрастает или убывает $y = -4x + 1$ на всей прямой? Почему?
7. График опускается от $(-5; 4)$ до $(1; -2)$, а затем поднимается до $(6; 3)$. Запишите промежутки возрастания и убывания и наименьшее значение.
8. У функции $f$ только нули $-2$ и $5$, и $f(0) = -10$. Запишите знак $f$ на каждом из трёх промежутков.

### Ответы

1. а) $4$; б) $-4$ и $4$; в) нулей нет.
2. $x = -3$.
3. $f(x) > 0$ при $x > -4$; $f(x) < 0$ при $x < -4$.
4. Нули $0$ и $4$; положительна на $(-\\infty; 0) \\cup (4; +\\infty)$, отрицательна на $(0; 4)$.
5. Возрастает на $(-\\infty; 0]$, убывает на $[0; +\\infty)$.
6. Убывает, так как коэффициент $-4$ отрицателен.
7. Убывает на $[-5; 1]$, возрастает на $[1; 6]$; наименьшее значение $-2$.
8. Положительна на $(-\\infty; -2)$, отрицательна на $(-2; 5)$, положительна на $(5; +\\infty)$.`,
      },
      [
        q(t("What is a zero of a function?", "Ի՞նչ է ֆունկցիայի զրոն", "Что такое нуль функции?"), [
          t("the value of x at which the function equals 0", "արգումենտի արժեքը, որի դեպքում ֆունկցիան հավասար է 0-ի", "значение x, при котором функция равна 0"),
          t("the value of the function at x = 0", "ֆունկցիայի արժեքը x = 0-ում", "значение функции при x = 0"),
          t("the point where the graph meets the y-axis", "կետը, որտեղ գրաֆիկը հատում է Oy առանցքը", "точка пересечения графика с осью Oy"),
        ], 0),
        q(t("How many zeros has f(x) = x² - 16?", "Քանի՞ զրո ունի f(x) = x² - 16 ֆունկցիան", "Сколько нулей у функции f(x) = x² - 16?"), [
          t("one", "մեկ", "один"),
          t("two", "երկու", "два"),
          t("none", "ոչ մեկ", "ни одного"),
        ], 1),
        q(t("On a graph, the zeros of a function are the", "Գրաֆիկի վրա ֆունկցիայի զրոները", "На графике нули функции — это"), [
          t("highest points", "ամենաբարձր կետերը", "самые высокие точки"),
          t("y-coordinates of the points of intersection", "հատման կետերի օրդինատները", "ординаты точек пересечения"),
          t("x-coordinates of the points where the graph meets the x-axis", "Ox առանցքի հետ հատման կետերի աբսցիսները", "абсциссы точек пересечения с осью Ox"),
        ], 2),
        q(t("For which x is x² - 9 negative?", "Ո՞ր x-երի դեպքում է x² - 9-ը բացասական", "При каких x выражение x² - 9 отрицательно?"), [
          t("for x between -3 and 3", "երբ x-ը -3-ի և 3-ի միջև է", "при x между -3 и 3"),
          t("for x greater than 3", "երբ x-ը մեծ է 3-ից", "при x больше 3"),
          t("for every x", "բոլոր x-երի դեպքում", "при любом x"),
        ], 0),
        q(t("The function y = -4x + 1 on the whole line", "y = -4x + 1 ֆունկցիան ամբողջ ուղղի վրա", "Функция y = -4x + 1 на всей прямой"), [
          t("increases", "աճում է", "возрастает"),
          t("decreases", "նվազում է", "убывает"),
          t("is constant", "հաստատուն է", "постоянна"),
        ], 1),
        q(t("The function y = x² decreases on", "y = x² ֆունկցիան նվազում է", "Функция y = x² убывает на"), [
          t("the whole number line", "ամբողջ թվային ուղղի վրա", "всей числовой прямой"),
          t("the interval from 0 to plus infinity", "0-ից մինչև պլյուս անվերջություն միջակայքում", "промежутке от 0 до плюс бесконечности"),
          t("the interval from minus infinity to 0", "մինուս անվերջությունից մինչև 0 միջակայքում", "промежутке от минус бесконечности до 0"),
        ], 2),
      ],
    ),
    lesson(
      "even-odd-functions",
      ["Even and odd functions", "Զույգ և կենտ ֆունկցիաներ", "Чётные и нечётные функции"],
      {
        en: ["Check whether a function is even, odd or neither", "Use the symmetry of the graph about the y-axis or the origin", "Sketch the second half of a graph from its symmetry"],
        hy: ["Ստուգել՝ ֆունկցիան զույգ է, կենտ, թե ոչ մեկը", "Օգտվել գրաֆիկի համաչափությունից Oy առանցքի կամ կոորդինատների սկզբնակետի նկատմամբ", "Համաչափությամբ լրացնել գրաֆիկի երկրորդ կեսը"],
        ru: ["Проверять, является ли функция чётной, нечётной или ни той, ни другой", "Пользоваться симметрией графика относительно оси Oy или начала координат", "Достраивать вторую половину графика по симметрии"],
      },
      {
        en: `## Two kinds of symmetry

First the domain must be **symmetric**: together with every $x$ it must contain $-x$. If it is not, the question of even or odd does not even arise.

> A function is **even** if $f(-x) = f(x)$ for every $x$ of the domain.
>
> A function is **odd** if $f(-x) = -f(x)$ for every $x$ of the domain.

| Kind | Test | Graph |
|---|---|---|
| even | $f(-x) = f(x)$ | symmetric about the $y$-axis |
| odd | $f(-x) = -f(x)$ | symmetric about the origin |
| neither | neither equality holds | no such symmetry |

## How to test

Write $f(-x)$, simplify, and compare with $f(x)$ and with $-f(x)$.

**Example 1.** $f(x) = x^4 - 3x^2$.
$$f(-x) = (-x)^4 - 3(-x)^2 = x^4 - 3x^2 = f(x).$$
The function is even.

**Example 2.** $f(x) = x^3 + x$.
$$f(-x) = (-x)^3 + (-x) = -x^3 - x = -(x^3 + x) = -f(x).$$
The function is odd.

**Example 3.** $f(x) = x^2 + x$.
$$f(-x) = x^2 - x,$$
which is neither $f(x)$ nor $-f(x)$. The function is neither even nor odd.

**Example 4.** $f(x) = \\dfrac{1}{x}$. The domain $x \\ne 0$ is symmetric, and $f(-x) = -\\dfrac{1}{x} = -f(x)$, so the function is odd.

## A useful rule of thumb

For a polynomial, look at the powers of $x$:

- only **even** powers (and a free term) give an **even** function: $y = 2x^4 - x^2 + 5$;
- only **odd** powers and **no** free term give an **odd** function: $y = x^5 - 4x$;
- a mixture gives neither: $y = x^2 + x$.

## Why symmetry helps

If a function is even or odd, it is enough to build the graph for $x \\ge 0$ and then reflect it:

- an even function: mirror the right half in the $y$-axis;
- an odd function: turn the right half by $180^\\circ$ about the origin.

A non-zero odd function always passes through the origin if $0$ is in its domain, because $f(0) = -f(0)$ forces $f(0) = 0$.

### Exercises

1. Test for evenness and oddness: a) $f(x) = x^2 - 7$; b) $f(x) = x^3 - x$; c) $f(x) = x^2 + x^3$.
2. Is $f(x) = |x|$ even, odd or neither?
3. Is $f(x) = 5x$ even, odd or neither?
4. Why is $f(x) = \\sqrt{x}$ neither even nor odd?
5. An even function satisfies $f(3) = -8$. Find $f(-3)$.
6. An odd function satisfies $f(2) = 7$. Find $f(-2)$.
7. The graph of an even function passes through $(-4; 1)$ and $(0; -3)$. Name one more point of the graph.
8. Test $f(x) = \\dfrac{x}{x^2 + 1}$ for evenness and oddness.

### Answers

1. a) even; b) odd; c) neither.
2. Even, because $|-x| = |x|$.
3. Odd, because $5(-x) = -5x$.
4. Its domain $x \\ge 0$ is not symmetric.
5. $f(-3) = -8$.
6. $f(-2) = -7$.
7. $(4; 1)$.
8. Odd: $f(-x) = \\dfrac{-x}{x^2 + 1} = -f(x)$.`,
        hy: `## Համաչափության երկու տեսակ

Նախ որոշման տիրույթը պետք է լինի **համաչափ**. ամեն $x$-ի հետ պետք է պարունակի նաև $-x$։ Եթե այդպես չէ, զույգ կամ կենտ լինելու հարցն ընդհանրապես չի դրվում։

> Ֆունկցիան **զույգ** է, եթե որոշման տիրույթի ամեն $x$-ի համար $f(-x) = f(x)$։
>
> Ֆունկցիան **կենտ** է, եթե որոշման տիրույթի ամեն $x$-ի համար $f(-x) = -f(x)$։

| Տեսակ | Ստուգում | Գրաֆիկ |
|---|---|---|
| զույգ | $f(-x) = f(x)$ | համաչափ է $Oy$ առանցքի նկատմամբ |
| կենտ | $f(-x) = -f(x)$ | համաչափ է սկզբնակետի նկատմամբ |
| ոչ մեկը | ոչ մի հավասարություն տեղի չունի | այդպիսի համաչափություն չկա |

## Ինչպես ստուգել

Գրում ենք $f(-x)$, պարզեցնում և համեմատում $f(x)$-ի և $-f(x)$-ի հետ։

**Օրինակ 1։** $f(x) = x^4 - 3x^2$։
$$f(-x) = (-x)^4 - 3(-x)^2 = x^4 - 3x^2 = f(x).$$
Ֆունկցիան զույգ է։

**Օրինակ 2։** $f(x) = x^3 + x$։
$$f(-x) = (-x)^3 + (-x) = -x^3 - x = -(x^3 + x) = -f(x).$$
Ֆունկցիան կենտ է։

**Օրինակ 3։** $f(x) = x^2 + x$։
$$f(-x) = x^2 - x,$$
որն ո՛չ $f(x)$-ն է, ո՛չ $-f(x)$-ը։ Ֆունկցիան ո՛չ զույգ է, ո՛չ կենտ։

**Օրինակ 4։** $f(x) = \\dfrac{1}{x}$։ $x \\ne 0$ տիրույթը համաչափ է, և $f(-x) = -\\dfrac{1}{x} = -f(x)$, ուստի ֆունկցիան կենտ է։

## Հարմար կանոն

Բազմանդամի դեպքում նայե՛ք $x$-ի աստիճանները.

- միայն **զույգ** աստիճաններ (և ազատ անդամ) տալիս են **զույգ** ֆունկցիա՝ $y = 2x^4 - x^2 + 5$;
- միայն **կենտ** աստիճաններ և **ոչ** ազատ անդամ տալիս են **կենտ** ֆունկցիա՝ $y = x^5 - 4x$;
- խառնուրդն ոչ մեկը չի տալիս՝ $y = x^2 + x$։

## Ինչու համաչափությունն օգնում է

Եթե ֆունկցիան զույգ է կամ կենտ, բավական է կառուցել գրաֆիկը $x \\ge 0$-ի համար և ապա արտապատկերել.

- զույգ ֆունկցիա՝ աջ կեսը հայելայնորեն $Oy$ առանցքի նկատմամբ;
- կենտ ֆունկցիա՝ աջ կեսը պտտել $180^\\circ$-ով սկզբնակետի շուրջը։

Ոչ զրոյական կենտ ֆունկցիան միշտ անցնում է սկզբնակետով, եթե $0$-ն իր տիրույթում է, քանի որ $f(0) = -f(0)$-ից բխում է $f(0) = 0$։

### Վարժություններ

1. Ստուգե՛ք զույգության և կենտության համար՝ ա) $f(x) = x^2 - 7$; բ) $f(x) = x^3 - x$; գ) $f(x) = x^2 + x^3$։
2. $f(x) = |x|$ ֆունկցիան զույգ է, կենտ, թե՞ ոչ մեկը։
3. $f(x) = 5x$ ֆունկցիան զույգ է, կենտ, թե՞ ոչ մեկը։
4. Ինչո՞ւ $f(x) = \\sqrt{x}$ ֆունկցիան ո՛չ զույգ է, ո՛չ կենտ։
5. Զույգ ֆունկցիայի համար $f(3) = -8$։ Գտե՛ք $f(-3)$-ը։
6. Կենտ ֆունկցիայի համար $f(2) = 7$։ Գտե՛ք $f(-2)$-ը։
7. Զույգ ֆունկցիայի գրաֆիկն անցնում է $(-4; 1)$ և $(0; -3)$ կետերով։ Նշե՛ք գրաֆիկի ևս մեկ կետ։
8. Ստուգե՛ք $f(x) = \\dfrac{x}{x^2 + 1}$ ֆունկցիան զույգության և կենտության համար։

### Պատասխաններ

1. ա) զույգ; բ) կենտ; գ) ոչ մեկը։
2. Զույգ է, քանի որ $|-x| = |x|$։
3. Կենտ է, քանի որ $5(-x) = -5x$։
4. Նրա $x \\ge 0$ տիրույթը համաչափ չէ։
5. $f(-3) = -8$։
6. $f(-2) = -7$։
7. $(4; 1)$։
8. Կենտ է՝ $f(-x) = \\dfrac{-x}{x^2 + 1} = -f(x)$։`,
        ru: `## Два вида симметрии

Сначала область определения должна быть **симметричной**: вместе с каждым $x$ она должна содержать и $-x$. Если это не так, вопрос о чётности вообще не ставится.

> Функция **чётная**, если $f(-x) = f(x)$ при каждом $x$ из области определения.
>
> Функция **нечётная**, если $f(-x) = -f(x)$ при каждом $x$ из области определения.

| Вид | Проверка | График |
|---|---|---|
| чётная | $f(-x) = f(x)$ | симметричен относительно оси $Oy$ |
| нечётная | $f(-x) = -f(x)$ | симметричен относительно начала координат |
| ни та, ни другая | ни одно равенство не выполняется | такой симметрии нет |

## Как проверять

Записывают $f(-x)$, упрощают и сравнивают с $f(x)$ и с $-f(x)$.

**Пример 1.** $f(x) = x^4 - 3x^2$.
$$f(-x) = (-x)^4 - 3(-x)^2 = x^4 - 3x^2 = f(x).$$
Функция чётная.

**Пример 2.** $f(x) = x^3 + x$.
$$f(-x) = (-x)^3 + (-x) = -x^3 - x = -(x^3 + x) = -f(x).$$
Функция нечётная.

**Пример 3.** $f(x) = x^2 + x$.
$$f(-x) = x^2 - x,$$
а это ни $f(x)$, ни $-f(x)$. Функция ни чётная, ни нечётная.

**Пример 4.** $f(x) = \\dfrac{1}{x}$. Область $x \\ne 0$ симметрична, и $f(-x) = -\\dfrac{1}{x} = -f(x)$, значит функция нечётная.

## Удобное правило

Для многочлена посмотрите на степени $x$:

- только **чётные** степени (и свободный член) дают **чётную** функцию: $y = 2x^4 - x^2 + 5$;
- только **нечётные** степени и **без** свободного члена дают **нечётную** функцию: $y = x^5 - 4x$;
- смесь не даёт ни того, ни другого: $y = x^2 + x$.

## Чем полезна симметрия

Если функция чётная или нечётная, достаточно построить график при $x \\ge 0$, а затем отразить его:

- чётная функция: правую половину зеркально относительно оси $Oy$;
- нечётная функция: правую половину повернуть на $180^\\circ$ вокруг начала координат.

Ненулевая нечётная функция всегда проходит через начало координат, если $0$ входит в область определения, потому что из $f(0) = -f(0)$ следует $f(0) = 0$.

### Упражнения

1. Проверьте на чётность и нечётность: а) $f(x) = x^2 - 7$; б) $f(x) = x^3 - x$; в) $f(x) = x^2 + x^3$.
2. Чётная, нечётная или ни та, ни другая функция $f(x) = |x|$?
3. Чётная, нечётная или ни та, ни другая функция $f(x) = 5x$?
4. Почему $f(x) = \\sqrt{x}$ ни чётная, ни нечётная?
5. Для чётной функции $f(3) = -8$. Найдите $f(-3)$.
6. Для нечётной функции $f(2) = 7$. Найдите $f(-2)$.
7. График чётной функции проходит через $(-4; 1)$ и $(0; -3)$. Укажите ещё одну точку графика.
8. Проверьте $f(x) = \\dfrac{x}{x^2 + 1}$ на чётность и нечётность.

### Ответы

1. а) чётная; б) нечётная; в) ни та, ни другая.
2. Чётная, так как $|-x| = |x|$.
3. Нечётная, так как $5(-x) = -5x$.
4. Её область $x \\ge 0$ не симметрична.
5. $f(-3) = -8$.
6. $f(-2) = -7$.
7. $(4; 1)$.
8. Нечётная: $f(-x) = \\dfrac{-x}{x^2 + 1} = -f(x)$.`,
      },
      [
        q(t("A function is even if", "Ֆունկցիան զույգ է, եթե", "Функция чётная, если"), [
          t("f(-x) = f(x) for every x of the domain", "որոշման տիրույթի ամեն x-ի համար f(-x) = f(x)", "f(-x) = f(x) при каждом x области определения"),
          t("f(-x) = -f(x) for every x of the domain", "որոշման տիրույթի ամեն x-ի համար f(-x) = -f(x)", "f(-x) = -f(x) при каждом x области определения"),
          t("f(0) = 0", "f(0) = 0", "f(0) = 0"),
        ], 0),
        q(t("The graph of an odd function is symmetric about", "Կենտ ֆունկցիայի գրաֆիկը համաչափ է", "График нечётной функции симметричен относительно"), [
          t("the y-axis", "Oy առանցքի նկատմամբ", "оси Oy"),
          t("the origin", "կոորդինատների սկզբնակետի նկատմամբ", "начала координат"),
          t("the x-axis", "Ox առանցքի նկատմամբ", "оси Ox"),
        ], 1),
        q(t("The function y = x³ - x is", "y = x³ - x ֆունկցիան", "Функция y = x³ - x"), [
          t("even", "զույգ է", "чётная"),
          t("neither even nor odd", "ո՛չ զույգ է, ո՛չ կենտ", "ни чётная, ни нечётная"),
          t("odd", "կենտ է", "нечётная"),
        ], 2),
        q(t("The function y = x² + x is", "y = x² + x ֆունկցիան", "Функция y = x² + x"), [
          t("neither even nor odd", "ո՛չ զույգ է, ո՛չ կենտ", "ни чётная, ни нечётная"),
          t("even", "զույգ է", "чётная"),
          t("odd", "կենտ է", "нечётная"),
        ], 0),
        q(t("For an even function f(5) = 12. Then f(-5) equals", "Զույգ ֆունկցիայի համար f(5) = 12։ Ապա f(-5)-ը հավասար է", "Для чётной функции f(5) = 12. Тогда f(-5) равно"), [
          t("-12", "-12", "-12"),
          t("12", "12", "12"),
          t("0", "0", "0"),
        ], 1),
        q(t("Why is y = √x neither even nor odd?", "Ինչո՞ւ y = √x ֆունկցիան ո՛չ զույգ է, ո՛չ կենտ", "Почему y = √x ни чётная, ни нечётная?"), [
          t("because it increases", "քանի որ աճում է", "потому что она возрастает"),
          t("because it has one zero", "քանի որ ունի մեկ զրո", "потому что у неё один нуль"),
          t("because its domain x ≥ 0 is not symmetric", "քանի որ նրա x ≥ 0 տիրույթը համաչափ չէ", "потому что её область x ≥ 0 не симметрична"),
        ], 2),
      ],
    ),
    lesson(
      "function-transformations",
      ["Transformations of graphs", "Գրաֆիկների ձևափոխումները", "Преобразования графиков"],
      {
        en: ["Shift a graph along the x-axis and along the y-axis", "Stretch, squeeze and reflect a graph", "Build a graph of y = af(x - m) + n step by step"],
        hy: ["Գրաֆիկը տեղափոխել Ox և Oy առանցքների երկայնքով", "Գրաֆիկը ձգել, սեղմել և արտապատկերել", "Քայլ առ քայլ կառուցել y = af(x - m) + n գրաֆիկը"],
        ru: ["Сдвигать график вдоль оси Ox и вдоль оси Oy", "Растягивать, сжимать и отражать график", "Строить график y = af(x - m) + n шаг за шагом"],
      },
      {
        en: `## One graph, many relatives

If the graph of $y = f(x)$ is already known, the graphs of many related functions can be drawn without a table of values. Each change of the formula moves or reshapes the whole picture.

| Formula | What happens to the graph of $y = f(x)$ |
|---|---|
| $y = f(x) + n$ | shift by $n$ **up** (down if $n < 0$) |
| $y = f(x - m)$ | shift by $m$ **right** (left if $m < 0$) |
| $y = -f(x)$ | reflect in the $x$-axis |
| $y = f(-x)$ | reflect in the $y$-axis |
| $y = af(x)$, $a > 1$ | stretch away from the $x$-axis $a$ times |
| $y = af(x)$, $0 < a < 1$ | squeeze towards the $x$-axis |

Note the minus sign in $f(x - m)$: the graph of $y = f(x - 3)$ moves **three to the right**, not to the left.

## Shifts

**Example 1.** From $y = x^2$ to $y = x^2 + 4$: every point rises by $4$. The vertex moves from $(0; 0)$ to $(0; 4)$.

**Example 2.** From $y = x^2$ to $y = (x - 5)^2$: every point moves $5$ to the right. The vertex moves to $(5; 0)$.

**Example 3.** $y = (x + 2)^2 - 3$ is $y = x^2$ shifted $2$ left and $3$ down, so the vertex is $(-2; -3)$.

## Reflections and stretches

**Example 4.** $y = -x^2$ is the parabola $y = x^2$ turned over: its branches point down.

**Example 5.** $y = 3x^2$ is narrower than $y = x^2$, because each ordinate is tripled. $y = 0{.}5x^2$ is wider.

## The whole chain

To draw $y = af(x - m) + n$, work in this order:

1. start from $y = f(x)$;
2. shift $m$ along the $x$-axis;
3. stretch or squeeze by the factor $a$, and reflect if $a < 0$;
4. shift $n$ along the $y$-axis.

**Example 6.** Build $y = -2(x - 1)^2 + 8$.

| Step | Function | Vertex |
|---|---|---|
| 1 | $y = x^2$ | $(0; 0)$ |
| 2 | $y = (x - 1)^2$ | $(1; 0)$ |
| 3 | $y = -2(x - 1)^2$ | $(1; 0)$, branches down |
| 4 | $y = -2(x - 1)^2 + 8$ | $(1; 8)$ |

The greatest value of this function is $8$, reached at $x = 1$.

**Example 7.** The graph of $y = \\dfrac{1}{x}$ shifted $2$ right and $1$ up gives $y = \\dfrac{1}{x - 2} + 1$.

### Exercises

1. How is the graph of $y = x^2 - 6$ obtained from $y = x^2$?
2. How is the graph of $y = (x + 7)^2$ obtained from $y = x^2$?
3. Name the vertex of the parabola $y = (x - 4)^2 + 2$.
4. Name the vertex of the parabola $y = -(x + 3)^2 - 5$ and say where the branches point.
5. Describe in words how $y = 4x^2$ differs from $y = x^2$.
6. Write the formula obtained from $y = x^2$ by a shift $1$ left and $6$ up.
7. Write the formula obtained from $y = \\dfrac{1}{x}$ by a shift $3$ right.
8. Build $y = 2(x - 3)^2 - 4$ step by step and give its least value.

### Answers

1. A shift $6$ down.
2. A shift $7$ to the left.
3. $(4; 2)$.
4. $(-3; -5)$, branches down.
5. It is narrower: every ordinate is four times larger.
6. $y = (x + 1)^2 + 6$.
7. $y = \\dfrac{1}{x - 3}$.
8. $y = x^2 \\to y = (x - 3)^2 \\to y = 2(x - 3)^2 \\to y = 2(x - 3)^2 - 4$; least value $-4$ at $x = 3$.`,
        hy: `## Մեկ գրաֆիկ, շատ ազգականներ

Եթե $y = f(x)$ ֆունկցիայի գրաֆիկն արդեն հայտնի է, ապա շատ հարակից ֆունկցիաների գրաֆիկներ կարելի է կառուցել առանց արժեքների աղյուսակի։ Բանաձևի ամեն փոփոխություն տեղափոխում կամ ձևափոխում է ամբողջ պատկերը։

| Բանաձև | Ինչ է կատարվում $y = f(x)$ գրաֆիկի հետ |
|---|---|
| $y = f(x) + n$ | տեղափոխում $n$-ով **վերև** (ներքև, եթե $n < 0$) |
| $y = f(x - m)$ | տեղափոխում $m$-ով **աջ** (ձախ, եթե $m < 0$) |
| $y = -f(x)$ | արտապատկերում $Ox$ առանցքի նկատմամբ |
| $y = f(-x)$ | արտապատկերում $Oy$ առանցքի նկատմամբ |
| $y = af(x)$, $a > 1$ | ձգում $Ox$ առանցքից $a$ անգամ |
| $y = af(x)$, $0 < a < 1$ | սեղմում $Ox$ առանցքին |

Նկատե՛ք մինուս նշանը $f(x - m)$-ում. $y = f(x - 3)$ գրաֆիկը տեղափոխվում է **երեքով աջ**, ոչ թե ձախ։

## Տեղափոխումներ

**Օրինակ 1։** $y = x^2$-ից $y = x^2 + 4$. ամեն կետ բարձրանում է $4$-ով։ Գագաթը $(0; 0)$-ից անցնում է $(0; 4)$։

**Օրինակ 2։** $y = x^2$-ից $y = (x - 5)^2$. ամեն կետ տեղափոխվում է $5$-ով աջ։ Գագաթն անցնում է $(5; 0)$։

**Օրինակ 3։** $y = (x + 2)^2 - 3$-ը $y = x^2$-ն է՝ տեղափոխված $2$-ով ձախ և $3$-ով ներքև, ուստի գագաթը $(-2; -3)$ է։

## Արտապատկերումներ և ձգումներ

**Օրինակ 4։** $y = -x^2$-ը $y = x^2$ պարաբոլն է՝ շրջված. նրա ճյուղերն ուղղված են ներքև։

**Օրինակ 5։** $y = 3x^2$-ը $y = x^2$-ից նեղ է, քանի որ ամեն օրդինատ եռապատկվում է։ $y = 0{,}5x^2$-ը լայն է։

## Ամբողջ շղթան

$y = af(x - m) + n$ գրաֆիկը կառուցելու համար աշխատե՛ք այս հերթականությամբ.

1. սկսե՛ք $y = f(x)$-ից;
2. տեղափոխե՛ք $m$-ով $Ox$ առանցքի երկայնքով;
3. ձգե՛ք կամ սեղմե՛ք $a$ գործակցով և արտապատկերե՛ք, եթե $a < 0$;
4. տեղափոխե՛ք $n$-ով $Oy$ առանցքի երկայնքով։

**Օրինակ 6։** Կառուցենք $y = -2(x - 1)^2 + 8$։

| Քայլ | Ֆունկցիա | Գագաթ |
|---|---|---|
| 1 | $y = x^2$ | $(0; 0)$ |
| 2 | $y = (x - 1)^2$ | $(1; 0)$ |
| 3 | $y = -2(x - 1)^2$ | $(1; 0)$, ճյուղերը ներքև |
| 4 | $y = -2(x - 1)^2 + 8$ | $(1; 8)$ |

Այս ֆունկցիայի ամենամեծ արժեքը $8$ է՝ $x = 1$-ի դեպքում։

**Օրինակ 7։** $y = \\dfrac{1}{x}$ գրաֆիկը $2$-ով աջ և $1$-ով վերև տեղափոխելով ստանում ենք $y = \\dfrac{1}{x - 2} + 1$։

### Վարժություններ

1. Ինչպե՞ս է $y = x^2 - 6$ գրաֆիկը ստացվում $y = x^2$-ից։
2. Ինչպե՞ս է $y = (x + 7)^2$ գրաֆիկը ստացվում $y = x^2$-ից։
3. Նշե՛ք $y = (x - 4)^2 + 2$ պարաբոլի գագաթը։
4. Նշե՛ք $y = -(x + 3)^2 - 5$ պարաբոլի գագաթը և ասե՛ք, ուր են ուղղված ճյուղերը։
5. Բառերով նկարագրե՛ք, թե ինչով է $y = 4x^2$-ը տարբերվում $y = x^2$-ից։
6. Գրե՛ք բանաձևը, որը ստացվում է $y = x^2$-ից $1$-ով ձախ և $6$-ով վերև տեղափոխելով։
7. Գրե՛ք բանաձևը, որը ստացվում է $y = \\dfrac{1}{x}$-ից $3$-ով աջ տեղափոխելով։
8. Քայլ առ քայլ կառուցե՛ք $y = 2(x - 3)^2 - 4$ և նշե՛ք նրա ամենափոքր արժեքը։

### Պատասխաններ

1. Տեղափոխում $6$-ով ներքև։
2. Տեղափոխում $7$-ով ձախ։
3. $(4; 2)$։
4. $(-3; -5)$, ճյուղերը ներքև։
5. Ավելի նեղ է. ամեն օրդինատ չորս անգամ մեծ է։
6. $y = (x + 1)^2 + 6$։
7. $y = \\dfrac{1}{x - 3}$։
8. $y = x^2 \\to y = (x - 3)^2 \\to y = 2(x - 3)^2 \\to y = 2(x - 3)^2 - 4$; ամենափոքր արժեքը $-4$ է՝ $x = 3$-ի դեպքում։`,
        ru: `## Один график, много родственников

Если график $y = f(x)$ уже известен, графики многих родственных функций можно построить без таблицы значений. Каждое изменение формулы сдвигает или изменяет всю картину.

| Формула | Что происходит с графиком $y = f(x)$ |
|---|---|
| $y = f(x) + n$ | сдвиг на $n$ **вверх** (вниз, если $n < 0$) |
| $y = f(x - m)$ | сдвиг на $m$ **вправо** (влево, если $m < 0$) |
| $y = -f(x)$ | отражение относительно оси $Ox$ |
| $y = f(-x)$ | отражение относительно оси $Oy$ |
| $y = af(x)$, $a > 1$ | растяжение от оси $Ox$ в $a$ раз |
| $y = af(x)$, $0 < a < 1$ | сжатие к оси $Ox$ |

Обратите внимание на минус в $f(x - m)$: график $y = f(x - 3)$ сдвигается **на три вправо**, а не влево.

## Сдвиги

**Пример 1.** От $y = x^2$ к $y = x^2 + 4$: каждая точка поднимается на $4$. Вершина переходит из $(0; 0)$ в $(0; 4)$.

**Пример 2.** От $y = x^2$ к $y = (x - 5)^2$: каждая точка сдвигается на $5$ вправо. Вершина переходит в $(5; 0)$.

**Пример 3.** $y = (x + 2)^2 - 3$ — это $y = x^2$, сдвинутая на $2$ влево и на $3$ вниз, поэтому вершина $(-2; -3)$.

## Отражения и растяжения

**Пример 4.** $y = -x^2$ — это парабола $y = x^2$, перевёрнутая: её ветви направлены вниз.

**Пример 5.** $y = 3x^2$ уже, чем $y = x^2$, так как каждая ордината умножается на три. $y = 0{,}5x^2$ шире.

## Вся цепочка

Чтобы построить $y = af(x - m) + n$, действуйте в таком порядке:

1. начните с $y = f(x)$;
2. сдвиньте на $m$ вдоль оси $Ox$;
3. растяните или сожмите с коэффициентом $a$ и отразите, если $a < 0$;
4. сдвиньте на $n$ вдоль оси $Oy$.

**Пример 6.** Построим $y = -2(x - 1)^2 + 8$.

| Шаг | Функция | Вершина |
|---|---|---|
| 1 | $y = x^2$ | $(0; 0)$ |
| 2 | $y = (x - 1)^2$ | $(1; 0)$ |
| 3 | $y = -2(x - 1)^2$ | $(1; 0)$, ветви вниз |
| 4 | $y = -2(x - 1)^2 + 8$ | $(1; 8)$ |

Наибольшее значение этой функции равно $8$ и достигается при $x = 1$.

**Пример 7.** График $y = \\dfrac{1}{x}$, сдвинутый на $2$ вправо и на $1$ вверх, даёт $y = \\dfrac{1}{x - 2} + 1$.

### Упражнения

1. Как получается график $y = x^2 - 6$ из $y = x^2$?
2. Как получается график $y = (x + 7)^2$ из $y = x^2$?
3. Укажите вершину параболы $y = (x - 4)^2 + 2$.
4. Укажите вершину параболы $y = -(x + 3)^2 - 5$ и скажите, куда направлены ветви.
5. Опишите словами, чем $y = 4x^2$ отличается от $y = x^2$.
6. Запишите формулу, полученную из $y = x^2$ сдвигом на $1$ влево и на $6$ вверх.
7. Запишите формулу, полученную из $y = \\dfrac{1}{x}$ сдвигом на $3$ вправо.
8. Постройте $y = 2(x - 3)^2 - 4$ шаг за шагом и укажите наименьшее значение.

### Ответы

1. Сдвиг на $6$ вниз.
2. Сдвиг на $7$ влево.
3. $(4; 2)$.
4. $(-3; -5)$, ветви вниз.
5. Она уже: каждая ордината в четыре раза больше.
6. $y = (x + 1)^2 + 6$.
7. $y = \\dfrac{1}{x - 3}$.
8. $y = x^2 \\to y = (x - 3)^2 \\to y = 2(x - 3)^2 \\to y = 2(x - 3)^2 - 4$; наименьшее значение $-4$ при $x = 3$.`,
      },
      [
        q(t("The graph of y = f(x) + 5 is the graph of y = f(x) shifted", "y = f(x) + 5 գրաֆիկը y = f(x) գրաֆիկն է՝ տեղափոխված", "График y = f(x) + 5 — это график y = f(x), сдвинутый"), [
          t("5 up", "5-ով վերև", "на 5 вверх"),
          t("5 down", "5-ով ներքև", "на 5 вниз"),
          t("5 right", "5-ով աջ", "на 5 вправо"),
        ], 0),
        q(t("The graph of y = f(x - 3) is the graph of y = f(x) shifted", "y = f(x - 3) գրաֆիկը y = f(x) գրաֆիկն է՝ տեղափոխված", "График y = f(x - 3) — это график y = f(x), сдвинутый"), [
          t("3 left", "3-ով ձախ", "на 3 влево"),
          t("3 right", "3-ով աջ", "на 3 вправо"),
          t("3 down", "3-ով ներքև", "на 3 вниз"),
        ], 1),
        q(t("The vertex of the parabola y = (x - 4)² + 2 is", "y = (x - 4)² + 2 պարաբոլի գագաթը", "Вершина параболы y = (x - 4)² + 2 —"), [
          t("(-4; 2)", "(-4; 2)", "(-4; 2)"),
          t("(4; -2)", "(4; -2)", "(4; -2)"),
          t("(4; 2)", "(4; 2)", "(4; 2)"),
        ], 2),
        q(t("The graph of y = -f(x) is obtained from y = f(x) by", "y = -f(x) գրաֆիկը y = f(x)-ից ստացվում է", "График y = -f(x) получается из y = f(x)"), [
          t("reflection in the x-axis", "Ox առանցքի նկատմամբ արտապատկերումով", "отражением относительно оси Ox"),
          t("a shift down", "ներքև տեղափոխումով", "сдвигом вниз"),
          t("a stretch", "ձգումով", "растяжением"),
        ], 0),
        q(t("Compared with y = x², the graph of y = 4x² is", "y = x²-ի համեմատ y = 4x² գրաֆիկը", "По сравнению с y = x² график y = 4x²"), [
          t("wider", "ավելի լայն է", "шире"),
          t("narrower", "ավելի նեղ է", "уже"),
          t("exactly the same", "ճիշտ նույնն է", "точно такой же"),
        ], 1),
        q(t("The least value of y = 2(x - 3)² - 4 equals", "y = 2(x - 3)² - 4 ֆունկցիայի ամենափոքր արժեքը հավասար է", "Наименьшее значение y = 2(x - 3)² - 4 равно"), [
          t("3", "3", "3"),
          t("2", "2", "2"),
          t("-4", "-4", "-4"),
        ], 2),
      ],
    ),
  ],
};
