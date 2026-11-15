import { th } from "../kit";

const r = String.raw;

/** Algebra 7, units 6–7: cubes, combined factoring, systems of linear equations, review. */
export const algebra7d = {
  cubes: th(
    r`### Where the formulas come from

Multiply out and watch the cancellation:

$$(a - b)(a^2 + ab + b^2) = a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3 = a^3 - b^3.$$

Four of the six products cancel in pairs. For the sum, replace $b$ by $-b$: $a^3 + b^3 = a^3 - (-b)^3 = (a + b)(a^2 - ab + b^2)$.

**A picture.** From a cube of edge $a$ cut out a small cube of edge $b$ in a corner. The rest splits into three boxes: $a \cdot a \cdot (a - b)$, $a \cdot b \cdot (a - b)$ and $b \cdot b \cdot (a - b)$. Their total volume is $(a - b)(a^2 + ab + b^2)$.

### The general pattern

The same cancellation works for any power:

$$a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \dots + ab^{n-2} + b^{n-1}).$$

So $a^n - b^n$ is **always** divisible by $a - b$. Example: $7^{10} - 2^{10}$ is divisible by $5$. And $a^n + b^n$ is divisible by $a + b$ when $n$ is **odd**, because then $b^n = -(-b)^n$. For even $n$ this fails: $a^2 + b^2$ does not factor.

### Two beautiful facts about cubes

**Sums of cubes are squares.** $1^3 = 1$, $1^3 + 2^3 = 9 = 3^2$, $1^3 + 2^3 + 3^3 = 36 = 6^2$, $1^3 + \dots + 4^3 = 100 = 10^2$. In general

$$1^3 + 2^3 + \dots + n^3 = (1 + 2 + \dots + n)^2.$$

**The taxicab number.** The mathematician Hardy once visited Srinivasa Ramanujan in hospital and said his taxi had the dull number 1729. Ramanujan answered at once that it is very interesting: the smallest number that is a sum of two cubes in **two different ways**, $1729 = 1^3 + 12^3 = 9^3 + 10^3$.`,
    r`### Որտեղից են բանաձևերը

Բացիր փակագծերը և հետևիր կրճատմանը.

$$(a - b)(a^2 + ab + b^2) = a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3 = a^3 - b^3.$$

Վեց արտադրյալներից չորսը կրճատվում են զույգերով։ Գումարի համար $b$-ն փոխարինիր $-b$-ով. $a^3 + b^3 = a^3 - (-b)^3 = (a + b)(a^2 - ab + b^2)$։

**Նկար։** $a$ կողով խորանարդի անկյունից կտրիր $b$ կողով փոքր խորանարդ։ Մնացածը բաժանվում է երեք արկղի՝ $a \cdot a \cdot (a - b)$, $a \cdot b \cdot (a - b)$ և $b \cdot b \cdot (a - b)$։ Դրանց ընդհանուր ծավալը $(a - b)(a^2 + ab + b^2)$ է։

### Ընդհանուր օրինաչափությունը

Նույն կրճատումն աշխատում է ցանկացած աստիճանի համար.

$$a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \dots + ab^{n-2} + b^{n-1}).$$

Ուստի $a^n - b^n$-ը **միշտ** բաժանվում է $a - b$-ի։ Օրինակ՝ $7^{10} - 2^{10}$-ը բաժանվում է $5$-ի։ Իսկ $a^n + b^n$-ը բաժանվում է $a + b$-ի, երբ $n$-ը **կենտ** է, քանի որ այդ դեպքում $b^n = -(-b)^n$։ Զույգ $n$-ի դեպքում դա չի աշխատում. $a^2 + b^2$-ն արտադրիչների չի վերլուծվում։

### Երկու գեղեցիկ փաստ խորանարդների մասին

**Խորանարդների գումարները քառակուսիներ են։** $1^3 = 1$, $1^3 + 2^3 = 9 = 3^2$, $1^3 + 2^3 + 3^3 = 36 = 6^2$, $1^3 + \dots + 4^3 = 100 = 10^2$։ Ընդհանուր դեպքում

$$1^3 + 2^3 + \dots + n^3 = (1 + 2 + \dots + n)^2.$$

**Տաքսու թիվը։** Մաթեմատիկոս Հարդին մի անգամ հիվանդանոցում այցելեց Սրինիվասա Ռամանուջանին և ասաց, որ իր տաքսին ուներ ձանձրալի 1729 համարը։ Ռամանուջանն անմիջապես պատասխանեց, որ այն շատ հետաքրքիր է. դա ամենափոքր թիվն է, որը **երկու տարբեր եղանակով** երկու խորանարդի գումար է՝ $1729 = 1^3 + 12^3 = 9^3 + 10^3$։`,
    r`### Откуда берутся формулы

Раскрой скобки и проследи за сокращением:

$$(a - b)(a^2 + ab + b^2) = a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3 = a^3 - b^3.$$

Четыре из шести произведений сокращаются попарно. Для суммы замени $b$ на $-b$: $a^3 + b^3 = a^3 - (-b)^3 = (a + b)(a^2 - ab + b^2)$.

**Картинка.** Из угла куба с ребром $a$ вырежем маленький куб с ребром $b$. Остаток разбивается на три бруска: $a \cdot a \cdot (a - b)$, $a \cdot b \cdot (a - b)$ и $b \cdot b \cdot (a - b)$. Их общий объём равен $(a - b)(a^2 + ab + b^2)$.

### Общая закономерность

То же сокращение работает для любой степени:

$$a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \dots + ab^{n-2} + b^{n-1}).$$

Поэтому $a^n - b^n$ **всегда** делится на $a - b$. Например, $7^{10} - 2^{10}$ делится на $5$. А $a^n + b^n$ делится на $a + b$ при **нечётном** $n$, потому что тогда $b^n = -(-b)^n$. При чётном $n$ это не так: $a^2 + b^2$ на множители не раскладывается.

### Два красивых факта о кубах

**Суммы кубов — квадраты.** $1^3 = 1$, $1^3 + 2^3 = 9 = 3^2$, $1^3 + 2^3 + 3^3 = 36 = 6^2$, $1^3 + \dots + 4^3 = 100 = 10^2$. В общем случае

$$1^3 + 2^3 + \dots + n^3 = (1 + 2 + \dots + n)^2.$$

**Число такси.** Математик Харди однажды навестил в больнице Сринивасу Рамануджана и сказал, что у его такси был скучный номер 1729. Рамануджан сразу ответил, что это очень интересное число: наименьшее, которое представляется суммой двух кубов **двумя разными способами**: $1729 = 1^3 + 12^3 = 9^3 + 10^3$.`,
  ),

  "combined-factoring": th(
    r`### Polynomials have "prime factors" too

A whole number splits into primes in only **one** way: $60 = 2 \cdot 2 \cdot 3 \cdot 5$, whatever order you find them in. Polynomials behave the same: a polynomial that cannot be split further (like $x - 2$ or $x^2 + 4$) plays the role of a prime, and every polynomial splits into such pieces in essentially one way. "Essentially" means up to the order and up to number factors: $(2x - 4)(x + 1)$ and $2(x - 2)(x + 1)$ are the same factorisation.

That is why different routes give the same final answer. $x^4 - 16$ can start as $(x^2 - 4)(x^2 + 4)$ or with a different trick, but it always ends as $(x - 2)(x + 2)(x^2 + 4)$.

### Why the common factor goes first

Taking out the common factor makes the remaining bracket **simpler** and reveals the pattern. $3x^3 - 12x$ does not look like a formula, but $3x(x^2 - 4)$ shows a difference of squares at once. Doing it last is not wrong, but then each step drags the factor $3x$ along.

### A clever identity: $n^4 + 4$ is never prime (for $n > 1$)

Add and subtract $4n^2$ to make a perfect square, then use the difference of squares:

$$n^4 + 4 = (n^4 + 4n^2 + 4) - 4n^2 = (n^2 + 2)^2 - (2n)^2 = (n^2 - 2n + 2)(n^2 + 2n + 2).$$

For $n > 1$ both brackets are bigger than 1, so $n^4 + 4$ is a product of two numbers: $3^4 + 4 = 85 = 5 \cdot 17$. This trick is due to the French mathematician **Sophie Germain** (around 1800).

### How to tell you have finished

Check every bracket: a common factor left? a difference of squares or cubes? four terms that group? If none applies, and each bracket has degree 1 or is a sum of squares like $x^2 + 4$, you are done.`,
    r`### Բազմանդամներն էլ ունեն «պարզ արտադրիչներ»

Ամբողջ թիվը պարզ արտադրիչների վերլուծվում է միայն **մեկ** եղանակով. $60 = 2 \cdot 2 \cdot 3 \cdot 5$, ինչ կարգով էլ դրանք գտնես։ Բազմանդամներն իրենց պահում են նույն կերպ. այն բազմանդամը, որը չի կարելի ավելի վերլուծել (ինչպես $x - 2$-ը կամ $x^2 + 4$-ը), պարզ թվի դեր է կատարում, և յուրաքանչյուր բազմանդամ այդպիսի կտորների է վերլուծվում ըստ էության մեկ եղանակով։ «Ըստ էության» նշանակում է՝ մինչև կարգը և թվային արտադրիչները. $(2x - 4)(x + 1)$-ը և $2(x - 2)(x + 1)$-ը նույն վերլուծությունն են։

Ահա թե ինչու տարբեր ճանապարհները տալիս են նույն վերջնական պատասխանը։ $x^4 - 16$-ը կարելի է սկսել $(x^2 - 4)(x^2 + 4)$-ով կամ մեկ այլ հնարքով, բայց այն միշտ ավարտվում է $(x - 2)(x + 2)(x^2 + 4)$-ով։

### Ինչու է ընդհանուր արտադրիչը առաջինը

Ընդհանուր արտադրիչը դուրս բերելով՝ մնացած փակագիծը դառնում է **ավելի պարզ** և բացահայտում է օրինաչափությունը։ $3x^3 - 12x$-ը բանաձևի նման չէ, բայց $3x(x^2 - 4)$-ն անմիջապես ցույց է տալիս քառակուսիների տարբերություն։ Վերջում անելը սխալ չէ, բայց այդ դեպքում ամեն քայլում պետք է $3x$ արտադրիչը քաշել հետդ։

### Խելացի նույնություն. $n^4 + 4$-ը երբեք պարզ չէ ($n > 1$-ի դեպքում)

Գումարենք և հանենք $4n^2$՝ լրիվ քառակուսի ստանալու համար, ապա կիրառենք քառակուսիների տարբերությունը.

$$n^4 + 4 = (n^4 + 4n^2 + 4) - 4n^2 = (n^2 + 2)^2 - (2n)^2 = (n^2 - 2n + 2)(n^2 + 2n + 2).$$

$n > 1$-ի դեպքում երկու փակագծերն էլ մեծ են 1-ից, ուստի $n^4 + 4$-ը երկու թվի արտադրյալ է. $3^4 + 4 = 85 = 5 \cdot 17$։ Այս հնարքը պատկանում է ֆրանսիացի մաթեմատիկոս **Սոֆի Ժերմենին** (մոտ 1800 թ.)։

### Ինչպես իմանալ, որ ավարտել ես

Ստուգիր յուրաքանչյուր փակագիծ. ընդհանուր արտադրիչ մնացե՞լ է, քառակուսիների կամ խորանարդների տարբերությո՞ւն է, խմբավորվող չորս անդա՞մ է։ Եթե ոչինչ չի կիրառվում, և յուրաքանչյուր փակագիծ 1-ին աստիճանի է կամ $x^2 + 4$-ի պես քառակուսիների գումար է, ավարտել ես։`,
    r`### У многочленов тоже есть «простые множители»

Целое число раскладывается на простые множители только **одним** способом: $60 = 2 \cdot 2 \cdot 3 \cdot 5$, в каком бы порядке ты их ни находил. Многочлены ведут себя так же: многочлен, который дальше не раскладывается (как $x - 2$ или $x^2 + 4$), играет роль простого числа, и каждый многочлен раскладывается на такие части, по существу, одним способом. «По существу» значит с точностью до порядка и числовых множителей: $(2x - 4)(x + 1)$ и $2(x - 2)(x + 1)$ — одно и то же разложение.

Поэтому разные пути приводят к одному ответу. $x^4 - 16$ можно начать с $(x^2 - 4)(x^2 + 4)$ или другим приёмом, но в конце всегда получится $(x - 2)(x + 2)(x^2 + 4)$.

### Почему общий множитель — первым

Вынесение общего множителя делает оставшуюся скобку **проще** и открывает закономерность. $3x^3 - 12x$ не похоже на формулу, но $3x(x^2 - 4)$ сразу показывает разность квадратов. Сделать это последним — не ошибка, но тогда на каждом шаге приходится тащить за собой множитель $3x$.

### Хитрое тождество: $n^4 + 4$ никогда не простое (при $n > 1$)

Прибавим и вычтем $4n^2$, чтобы получить полный квадрат, а затем применим разность квадратов:

$$n^4 + 4 = (n^4 + 4n^2 + 4) - 4n^2 = (n^2 + 2)^2 - (2n)^2 = (n^2 - 2n + 2)(n^2 + 2n + 2).$$

При $n > 1$ обе скобки больше 1, поэтому $n^4 + 4$ — произведение двух чисел: $3^4 + 4 = 85 = 5 \cdot 17$. Этот приём принадлежит французскому математику **Софи Жермен** (около 1800 года).

### Как понять, что всё готово

Проверь каждую скобку: остался общий множитель? разность квадратов или кубов? четыре члена, которые группируются? Если ничего не подходит и каждая скобка первой степени или является суммой квадратов вроде $x^2 + 4$, разложение закончено.`,
  ),

  "two-variable-equation": th(
    r`### Why the graph of ax + by = c is a straight line

If $b \ne 0$, express $y$: $y = -\dfrac{a}{b}x + \dfrac{c}{b}$. That is a linear function, and its graph is a line.

If $b = 0$ (and $a \ne 0$), the equation is $ax = c$, so $x = \dfrac{c}{a}$ for **every** $y$. The graph is a **vertical** line. Notice: a vertical line is not the graph of any function, because one $x$ has infinitely many $y$. So "linear equation in two variables" is a wider idea than "linear function": it includes vertical lines too.

### Whole-number solutions: when they exist

Many real problems need whole $x$ and $y$: coins, tickets, boxes. Such equations are called **Diophantine**, after Diophantus.

- $4x + 6y = 7$ has **no** whole solutions: the left side is always even ($2(2x + 3y)$), the right side is odd.
- In general, $ax + by = c$ has whole solutions exactly when the greatest common divisor of $a$ and $b$ divides $c$.

Once you have one solution, you have all of them. For $3x + 5y = 22$ one solution is $(4; 2)$. Add $5$ to $x$ and subtract $3$ from $y$: $3(x + 5) + 5(y - 3) = 3x + 5y + 15 - 15$, unchanged. So $(9; -1)$, $(-1; 5)$, $(-6; 8)$, … are all solutions.

### Stamps of 3 and 5

With stamps worth 3 and 5 dram, which amounts can you pay exactly? $8 = 3 + 5$, $9 = 3 \cdot 3$, $10 = 5 \cdot 2$. From 8 on, every amount works: once you have three amounts in a row, add a 3-stamp to each to get the next three. The largest amount you **cannot** pay is $7$. For any two such values $p$ and $q$ with no common divisor, the answer is $pq - p - q$: here $15 - 3 - 5 = 7$.`,
    r`### Ինչու է $ax + by = c$-ի գրաֆիկն ուղիղ

Եթե $b \ne 0$, արտահայտենք $y$-ը. $y = -\dfrac{a}{b}x + \dfrac{c}{b}$։ Սա գծային ֆունկցիա է, և նրա գրաֆիկն ուղիղ է։

Եթե $b = 0$ (և $a \ne 0$), հավասարումը $ax = c$ է, ուստի $x = \dfrac{c}{a}$ **ցանկացած** $y$-ի դեպքում։ Գրաֆիկը **ուղղաձիգ** ուղիղ է։ Ուշադրություն. ուղղաձիգ ուղիղը ոչ մի ֆունկցիայի գրաֆիկ չէ, քանի որ մեկ $x$-ն ունի անվերջ շատ $y$։ Ուստի «երկու փոփոխականով գծային հավասարումը» ավելի լայն գաղափար է, քան «գծային ֆունկցիան». այն ներառում է նաև ուղղաձիգ ուղիղները։

### Ամբողջ թվերով լուծումներ. երբ են դրանք գոյություն ունենում

Իրական շատ խնդիրներ պահանջում են ամբողջ $x$ և $y$. մետաղադրամներ, տոմսեր, արկղեր։ Այդպիսի հավասարումները կոչվում են **դիոֆանտյան**՝ Դիոֆանտի անունով։

- $4x + 6y = 7$-ը ամբողջ լուծումներ **չունի**. ձախ մասը միշտ զույգ է ($2(2x + 3y)$), աջը՝ կենտ։
- Ընդհանուր դեպքում $ax + by = c$-ն ամբողջ լուծումներ ունի ճիշտ այն դեպքում, երբ $a$-ի և $b$-ի ամենամեծ ընդհանուր բաժանարարը բաժանում է $c$-ն։

Մեկ լուծում ունենալով՝ ունես բոլորը։ $3x + 5y = 22$-ի համար մեկ լուծումը $(4; 2)$ է։ $x$-ին գումարիր $5$, $y$-ից հանիր $3$. $3(x + 5) + 5(y - 3) = 3x + 5y + 15 - 15$՝ անփոփոխ։ Ուստի $(9; -1)$, $(-1; 5)$, $(-6; 8)$, … բոլորը լուծումներ են։

### 3 և 5 դրամանոց նամականիշեր

3 և 5 դրամանոց նամականիշերով ո՞ր գումարները կարող ես վճարել ճշգրիտ։ $8 = 3 + 5$, $9 = 3 \cdot 3$, $10 = 5 \cdot 2$։ 8-ից սկսած՝ ցանկացած գումար ստացվում է. անընդմեջ երեք գումար ունենալով՝ յուրաքանչյուրին ավելացրու 3-անոց նամականիշ և կստանաս հաջորդ երեքը։ Ամենամեծ գումարը, որը **չես կարող** վճարել, $7$-ն է։ Ընդհանուր բաժանարար չունեցող ցանկացած երկու $p$ և $q$ արժեքների համար պատասխանը $pq - p - q$ է. այստեղ՝ $15 - 3 - 5 = 7$։`,
    r`### Почему график ax + by = c — прямая

Если $b \ne 0$, выразим $y$: $y = -\dfrac{a}{b}x + \dfrac{c}{b}$. Это линейная функция, и её график — прямая.

Если $b = 0$ (и $a \ne 0$), уравнение имеет вид $ax = c$, то есть $x = \dfrac{c}{a}$ при **любом** $y$. График — **вертикальная** прямая. Заметь: вертикальная прямая не является графиком никакой функции, потому что одному $x$ отвечает бесконечно много $y$. Так что «линейное уравнение с двумя переменными» — понятие шире, чем «линейная функция»: оно включает и вертикальные прямые.

### Целые решения: когда они существуют

Многие реальные задачи требуют целых $x$ и $y$: монеты, билеты, коробки. Такие уравнения называют **диофантовыми** — в честь Диофанта.

- $4x + 6y = 7$ **не имеет** целых решений: левая часть всегда чётная ($2(2x + 3y)$), а правая нечётная.
- В общем случае $ax + by = c$ имеет целые решения ровно тогда, когда наибольший общий делитель $a$ и $b$ делит $c$.

Зная одно решение, ты знаешь все. Для $3x + 5y = 22$ одно решение — $(4; 2)$. Прибавим к $x$ число $5$ и вычтем из $y$ число $3$: $3(x + 5) + 5(y - 3) = 3x + 5y + 15 - 15$ — без изменений. Значит, $(9; -1)$, $(-1; 5)$, $(-6; 8)$, … — тоже решения.

### Марки по 3 и 5

Какие суммы можно заплатить без сдачи марками по 3 и 5 драмов? $8 = 3 + 5$, $9 = 3 \cdot 3$, $10 = 5 \cdot 2$. Начиная с 8 получается любая сумма: если есть три суммы подряд, добавь к каждой марку в 3 драма и получишь следующие три. Наибольшая сумма, которую заплатить **нельзя**, — $7$. Для любых двух таких значений $p$ и $q$ без общих делителей ответ равен $pq - p - q$: здесь $15 - 3 - 5 = 7$.`,
  ),

  "graphical-method": th(
    r`### Why the solution is the crossing point

A pair $(x; y)$ satisfies the first equation exactly when the point lies on the first line, and the second equation exactly when it lies on the second line. A solution of the **system** must satisfy both, so it is a point lying on **both** lines: their intersection. Nothing more is needed to prove the method; it is the definition of a graph read twice.

### The three cases, again

Two lines in a plane can cross once, be parallel, or coincide. So a system of two linear equations has **one** solution, **none**, or **infinitely many**, and never exactly two. You can tell which without drawing by comparing the ratios of the coefficients in $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$:

| Ratios | Lines | Solutions |
|---|---|---|
| $\dfrac{a_1}{a_2} \ne \dfrac{b_1}{b_2}$ | cross | one |
| $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} \ne \dfrac{c_1}{c_2}$ | parallel | none |
| $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} = \dfrac{c_1}{c_2}$ | the same | infinitely many |

### When the picture is dangerous: nearly parallel lines

$$\begin{cases} x + y = 2 \\ x + 1.01y = 2.01 \end{cases} \quad\text{gives}\quad (1; 1).$$

Change $2.01$ to $2.02$, a tiny change: subtracting the equations gives $0.01y = 0.02$, so $y = 2$, $x = 0$. The answer jumped from $(1; 1)$ to $(0; 2)$. Nearly parallel lines meet at a very sharp angle, and a small error in a coefficient moves the crossing point far. Engineers call such systems **ill-conditioned** and treat measured data in them with great care.

### What the graph is good for

The drawing is exact about **how many** solutions there are and roughly **where**. The algebraic methods then give the exact numbers.`,
    r`### Ինչու է լուծումը հատման կետը

$(x; y)$ զույգը բավարարում է առաջին հավասարմանը ճիշտ այն դեպքում, երբ կետն ընկած է առաջին ուղղի վրա, իսկ երկրորդին՝ երբ ընկած է երկրորդ ուղղի վրա։ **Համակարգի** լուծումը պետք է բավարարի երկուսին էլ, ուստի այն կետ է, որն ընկած է **երկու** ուղիղների վրա էլ՝ դրանց հատման կետը։ Եղանակն ապացուցելու համար ուրիշ ոչինչ պետք չէ. դա երկու անգամ կարդացված գրաֆիկի սահմանումն է։

### Երեք դեպքերը՝ նորից

Հարթության երկու ուղիղ կարող են հատվել մեկ անգամ, լինել զուգահեռ կամ համընկնել։ Ուստի երկու գծային հավասարումների համակարգն ունի **մեկ** լուծում, **ոչ մի** լուծում կամ **անվերջ շատ** լուծումներ, և երբեք ճիշտ երկու։ Առանց գծելու կարող ես որոշել, թե որն է, համեմատելով $a_1x + b_1y = c_1$ և $a_2x + b_2y = c_2$ հավասարումների գործակիցների հարաբերությունները.

| Հարաբերություններ | Ուղիղներ | Լուծումներ |
|---|---|---|
| $\dfrac{a_1}{a_2} \ne \dfrac{b_1}{b_2}$ | հատվում են | մեկ |
| $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} \ne \dfrac{c_1}{c_2}$ | զուգահեռ են | չկան |
| $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} = \dfrac{c_1}{c_2}$ | համընկնում են | անվերջ շատ |

### Երբ է նկարը վտանգավոր. գրեթե զուգահեռ ուղիղներ

$$\begin{cases} x + y = 2 \\ x + 1{,}01y = 2{,}01 \end{cases} \quad\text{տալիս է}\quad (1; 1).$$

$2{,}01$-ը փոխիր $2{,}02$-ով՝ չնչին փոփոխություն. հավասարումները հանելով՝ ստանում ենք $0{,}01y = 0{,}02$, ուստի $y = 2$, $x = 0$։ Պատասխանը $(1; 1)$-ից թռավ $(0; 2)$։ Գրեթե զուգահեռ ուղիղները հատվում են շատ սուր անկյան տակ, և գործակցի փոքր սխալը հատման կետը շատ հեռու է տանում։ Ճարտարագետներն այդպիսի համակարգերն անվանում են **վատ պայմանավորված** և դրանցում չափված տվյալներին վերաբերվում մեծ զգուշությամբ։

### Ինչի համար է պետք գրաֆիկը

Գծագիրը ճշգրիտ է այն հարցում, թե **քանի** լուծում կա և մոտավորապես **որտեղ**։ Հետո հանրահաշվական եղանակները տալիս են ճշգրիտ թվերը։`,
    r`### Почему решение — точка пересечения

Пара $(x; y)$ удовлетворяет первому уравнению ровно тогда, когда точка лежит на первой прямой, а второму — когда она лежит на второй прямой. Решение **системы** должно удовлетворять обоим, значит, это точка, лежащая на **обеих** прямых, — их пересечение. Больше для доказательства метода ничего не нужно: это определение графика, прочитанное дважды.

### Снова три случая

Две прямые на плоскости могут пересекаться в одной точке, быть параллельными или совпадать. Поэтому система двух линейных уравнений имеет **одно** решение, **ни одного** или **бесконечно много** — и никогда ровно два. Какой случай, можно узнать без чертежа, сравнив отношения коэффициентов уравнений $a_1x + b_1y = c_1$ и $a_2x + b_2y = c_2$:

| Отношения | Прямые | Решения |
|---|---|---|
| $\dfrac{a_1}{a_2} \ne \dfrac{b_1}{b_2}$ | пересекаются | одно |
| $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} \ne \dfrac{c_1}{c_2}$ | параллельны | нет |
| $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} = \dfrac{c_1}{c_2}$ | совпадают | бесконечно много |

### Когда картинка опасна: почти параллельные прямые

$$\begin{cases} x + y = 2 \\ x + 1{,}01y = 2{,}01 \end{cases} \quad\text{даёт}\quad (1; 1).$$

Заменим $2{,}01$ на $2{,}02$ — крошечное изменение: вычитая уравнения, получаем $0{,}01y = 0{,}02$, то есть $y = 2$, $x = 0$. Ответ перескочил с $(1; 1)$ на $(0; 2)$. Почти параллельные прямые пересекаются под очень острым углом, и маленькая ошибка в коэффициенте далеко сдвигает точку пересечения. Инженеры называют такие системы **плохо обусловленными** и очень осторожно относятся к измеренным данным в них.

### Для чего нужен график

Чертёж точно показывает, **сколько** решений и примерно **где** они. Точные числа потом дают алгебраические методы.`,
  ),

  "substitution-method": th(
    r`### Why substitution does not lose or add solutions

Suppose from the first equation we get $x = 7 - 2y$. The system

$$\begin{cases} x + 2y = 7 \\ 3x - y = 7 \end{cases} \quad\text{and}\quad \begin{cases} x = 7 - 2y \\ 3(7 - 2y) - y = 7 \end{cases}$$

have the same solutions. Why? The first equations are equivalent (one is the other with $2y$ moved). And whenever $x = 7 - 2y$ is true, putting $7 - 2y$ in place of $x$ in the second equation changes nothing. So a pair solves one system exactly when it solves the other.

### The idea behind it: elimination

Substitution turns **two** equations with **two** unknowns into **one** equation with **one** unknown, which we already know how to solve. This "reduce to a problem you have already solved" is one of the most powerful ideas in mathematics. With three unknowns and three equations, substitute twice; the idea is the same.

### It works beyond linear systems

The method does not care whether the equations are linear. Find two numbers with sum 5 and product 6:

$$\begin{cases} x + y = 5 \\ xy = 6 \end{cases} \;\Rightarrow\; y = 5 - x,\quad x(5 - x) = 6 \;\Rightarrow\; x^2 - 5x + 6 = 0.$$

Factor: $(x - 2)(x - 3) = 0$, so $x = 2$, $y = 3$ or $x = 3$, $y = 2$. The addition method would not help here, but substitution does. You will solve such systems in grade 9.

### What $0 = 5$ and $0 = 0$ really mean

When the variable disappears, the remaining equality is about numbers only. $0 = 5$ is false whatever $x$ and $y$ are: the system has **no** solutions, the lines are parallel. $0 = 0$ is always true: the second equation added nothing new, so every solution of the first works, and there are **infinitely many**.`,
    r`### Ինչու տեղադրումը չի կորցնում և չի ավելացնում լուծումներ

Ենթադրենք՝ առաջին հավասարումից ստանում ենք $x = 7 - 2y$։ Հետևյալ համակարգերը

$$\begin{cases} x + 2y = 7 \\ 3x - y = 7 \end{cases} \quad\text{և}\quad \begin{cases} x = 7 - 2y \\ 3(7 - 2y) - y = 7 \end{cases}$$

ունեն նույն լուծումները։ Ինչո՞ւ։ Առաջին հավասարումները համարժեք են (մեկը մյուսն է՝ $2y$-ը տեղափոխված)։ Եվ երբ $x = 7 - 2y$-ը ճիշտ է, երկրորդ հավասարման մեջ $x$-ի փոխարեն $7 - 2y$ տեղադրելը ոչինչ չի փոխում։ Ուստի զույգը լուծում է մի համակարգը ճիշտ այն դեպքում, երբ լուծում է մյուսը։

### Հիմքում ընկած գաղափարը. արտաքսում

Տեղադրումը **երկու** անհայտով **երկու** հավասարումը դարձնում է **մեկ** անհայտով **մեկ** հավասարում, որն արդեն գիտենք լուծել։ «Բերել արդեն լուծված խնդրի» գաղափարը մաթեմատիկայի ամենահզոր գաղափարներից է։ Երեք անհայտով երեք հավասարման դեպքում տեղադրիր երկու անգամ. գաղափարը նույնն է։

### Այն աշխատում է գծային համակարգերից դուրս էլ

Եղանակին չի հետաքրքրում՝ հավասարումները գծայի՞ն են, թե՞ ոչ։ Գտնենք երկու թիվ, որոնց գումարը 5 է, արտադրյալը՝ 6.

$$\begin{cases} x + y = 5 \\ xy = 6 \end{cases} \;\Rightarrow\; y = 5 - x,\quad x(5 - x) = 6 \;\Rightarrow\; x^2 - 5x + 6 = 0.$$

Վերլուծենք. $(x - 2)(x - 3) = 0$, ուստի $x = 2$, $y = 3$ կամ $x = 3$, $y = 2$։ Գումարման եղանակն այստեղ չէր օգնի, իսկ տեղադրումն օգնում է։ Այդպիսի համակարգեր կլուծես 9-րդ դասարանում։

### Ինչ են իրականում նշանակում $0 = 5$-ը և $0 = 0$-ն

Երբ փոփոխականն անհետանում է, մնացած հավասարությունը միայն թվերի մասին է։ $0 = 5$-ը սխալ է, ինչպիսին էլ լինեն $x$-ը և $y$-ը. համակարգը լուծումներ **չունի**, ուղիղները զուգահեռ են։ $0 = 0$-ն միշտ ճիշտ է. երկրորդ հավասարումը նոր բան չավելացրեց, ուստի առաջինի յուրաքանչյուր լուծում հարմար է, և դրանք **անվերջ շատ** են։`,
    r`### Почему подстановка не теряет и не добавляет решений

Пусть из первого уравнения получили $x = 7 - 2y$. Системы

$$\begin{cases} x + 2y = 7 \\ 3x - y = 7 \end{cases} \quad\text{и}\quad \begin{cases} x = 7 - 2y \\ 3(7 - 2y) - y = 7 \end{cases}$$

имеют одни и те же решения. Почему? Первые уравнения равносильны (одно получено из другого переносом $2y$). А когда $x = 7 - 2y$ верно, замена $x$ на $7 - 2y$ во втором уравнении ничего не меняет. Поэтому пара решает одну систему ровно тогда, когда решает другую.

### Идея: исключение

Подстановка превращает **два** уравнения с **двумя** неизвестными в **одно** уравнение с **одним** неизвестным, которое мы уже умеем решать. Идея «свести к уже решённой задаче» — одна из самых сильных в математике. При трёх неизвестных и трёх уравнениях подставляй дважды — идея та же.

### Работает не только для линейных систем

Методу всё равно, линейны ли уравнения. Найдём два числа с суммой 5 и произведением 6:

$$\begin{cases} x + y = 5 \\ xy = 6 \end{cases} \;\Rightarrow\; y = 5 - x,\quad x(5 - x) = 6 \;\Rightarrow\; x^2 - 5x + 6 = 0.$$

Разложим: $(x - 2)(x - 3) = 0$, значит, $x = 2$, $y = 3$ или $x = 3$, $y = 2$. Сложение здесь не помогло бы, а подстановка помогает. Такие системы ты будешь решать в 9 классе.

### Что на самом деле значат $0 = 5$ и $0 = 0$

Когда переменная исчезает, остаётся равенство только о числах. $0 = 5$ ложно при любых $x$ и $y$: у системы **нет** решений, прямые параллельны. $0 = 0$ верно всегда: второе уравнение ничего нового не добавило, поэтому подходит каждое решение первого, и их **бесконечно много**.`,
  ),

  "addition-method": th(
    r`### Why we may add equations

If $A = B$ and $C = D$ are both true, then $A + C = B + D$ is true: we added equal amounts to equal amounts. The same holds after multiplying an equation by a number first. So every solution of the system also satisfies the sum.

But to keep an **equivalent** system we must keep one of the original equations: the pair "first equation, sum" has exactly the same solutions as "first equation, second equation", because the second can be recovered by subtracting the first from the sum. Replacing **both** equations by their sum would lose information.

### Two thousand years old

The Chinese book *Nine Chapters on the Mathematical Art* (around the 1st century AD) solved systems with up to five unknowns by arranging the coefficients in columns on a counting board and subtracting multiples of one column from another. That is the addition method. In Europe the same procedure was described systematically only in the 19th century and is now called **Gaussian elimination**; every computer program that solves large systems uses it.

### A formula for the answer

Do the addition method once with letters, for $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$. Multiply the first by $b_2$, the second by $b_1$, and subtract: the $y$ disappears and

$$x = \frac{c_1b_2 - c_2b_1}{a_1b_2 - a_2b_1}, \qquad y = \frac{a_1c_2 - a_2c_1}{a_1b_2 - a_2b_1}.$$

The denominator $a_1b_2 - a_2b_1$ is **zero** exactly when $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2}$, that is, when the lines are parallel or the same. So the formula itself tells you when there is no single solution. In grade 9 or 10 you may meet this number again as a **determinant**.`,
    r`### Ինչու կարելի է գումարել հավասարումները

Եթե $A = B$-ն և $C = D$-ն երկուսն էլ ճիշտ են, ապա $A + C = B + D$-ն ճիշտ է. հավասարներին գումարեցինք հավասարներ։ Նույնը ճիշտ է, եթե նախապես հավասարումը բազմապատկենք թվով։ Ուստի համակարգի յուրաքանչյուր լուծում բավարարում է նաև գումարին։

Բայց **համարժեք** համակարգ պահելու համար պետք է պահել սկզբնական հավասարումներից մեկը. «առաջին հավասարում, գումար» զույգն ունի ճիշտ նույն լուծումները, ինչ «առաջին հավասարում, երկրորդ հավասարում»-ը, քանի որ երկրորդը կարելի է վերականգնել՝ գումարից հանելով առաջինը։ **Երկու** հավասարումներն էլ դրանց գումարով փոխարինելը կկորցներ տեղեկություն։

### Երկու հազար տարեկան եղանակ

Չինական «Ինը գլուխ մաթեմատիկական արվեստի մասին» գիրքը (մոտ I դար) լուծում էր մինչև հինգ անհայտով համակարգեր՝ գործակիցները սյուներով դասավորելով հաշվիչ տախտակին և մի սյունից հանելով մյուսի բազմապատիկները։ Սա գումարման եղանակն է։ Եվրոպայում նույն ընթացակարգը համակարգված նկարագրվեց միայն XIX դարում և այժմ կոչվում է **Գաուսի եղանակ**. մեծ համակարգեր լուծող ամեն համակարգչային ծրագիր օգտագործում է այն։

### Պատասխանի բանաձևը

Կիրառենք գումարման եղանակը մեկ անգամ տառերով՝ $a_1x + b_1y = c_1$ և $a_2x + b_2y = c_2$ հավասարումների համար։ Առաջինը բազմապատկենք $b_2$-ով, երկրորդը՝ $b_1$-ով, և հանենք. $y$-ն անհետանում է, և

$$x = \frac{c_1b_2 - c_2b_1}{a_1b_2 - a_2b_1}, \qquad y = \frac{a_1c_2 - a_2c_1}{a_1b_2 - a_2b_1}.$$

$a_1b_2 - a_2b_1$ հայտարարը **զրո** է ճիշտ այն դեպքում, երբ $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2}$, այսինքն՝ երբ ուղիղները զուգահեռ են կամ համընկնում են։ Ուստի բանաձևն ինքն է ասում, թե երբ միակ լուծում չկա։ Ավագ դասարաններում այս թվին կրկին կհանդիպես որպես **որոշիչ** (դետերմինանտ)։`,
    r`### Почему уравнения можно складывать

Если $A = B$ и $C = D$ оба верны, то верно и $A + C = B + D$: к равным прибавили равные. То же верно, если сначала умножить уравнение на число. Поэтому каждое решение системы удовлетворяет и сумме.

Но чтобы система осталась **равносильной**, нужно сохранить одно из исходных уравнений: пара «первое уравнение, сумма» имеет ровно те же решения, что и «первое уравнение, второе уравнение», потому что второе можно восстановить, вычтя первое из суммы. Если заменить **оба** уравнения их суммой, информация потеряется.

### Методу две тысячи лет

Китайская книга «Математика в девяти книгах» (около I века н. э.) решала системы с пятью неизвестными: коэффициенты раскладывали столбцами на счётной доске и вычитали из одного столбца кратные другого. Это и есть метод сложения. В Европе ту же процедуру систематически описали только в XIX веке, и теперь её называют **методом Гаусса**; им пользуется каждая компьютерная программа, решающая большие системы.

### Формула для ответа

Проведём метод сложения один раз с буквами для $a_1x + b_1y = c_1$ и $a_2x + b_2y = c_2$. Умножим первое на $b_2$, второе на $b_1$ и вычтем: $y$ исчезнет, и

$$x = \frac{c_1b_2 - c_2b_1}{a_1b_2 - a_2b_1}, \qquad y = \frac{a_1c_2 - a_2c_1}{a_1b_2 - a_2b_1}.$$

Знаменатель $a_1b_2 - a_2b_1$ равен **нулю** ровно тогда, когда $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2}$, то есть когда прямые параллельны или совпадают. Так что сама формула говорит, когда единственного решения нет. В старших классах это число встретится тебе как **определитель**.`,
  ),

  "system-problems": th(
    r`### How many equations a problem needs

Each unknown needs one **independent** condition. With two unknowns and one condition ("a pen and a notebook cost 130 together") there are infinitely many answers. With two conditions that say the same thing in different words ("…and two pens and two notebooks cost 260"), there are still infinitely many: the second equation is the first multiplied by 2, and the lines coincide. With two conditions that contradict each other, there are none. A well-posed problem has exactly as many independent conditions as unknowns.

### The ancient chickens-and-rabbits puzzle

A Chinese book of the 4th–5th century, the *Sunzi Suanjing*, asks: "Chickens and rabbits are in one cage. There are 35 heads and 94 legs. How many of each?"

The old mental solution: imagine all 35 animals are chickens. Then there would be $70$ legs, $24$ fewer than 94. Each rabbit adds 2 legs more than a chicken, so there are $24 : 2 = 12$ rabbits and $23$ chickens.

This is the addition method in disguise. With $x$ chickens and $y$ rabbits:

$$\begin{cases} x + y = 35 \\ 2x + 4y = 94 \end{cases}$$

Multiply the first equation by 2 and subtract: $2y = 24$. "Imagine they are all chickens" is exactly "multiply the heads equation by 2".

### Why "name the letters in words"

In a motion problem $x$ could be a speed, a time or a distance. Writing "$x$ is the boat's speed in still water, km/h" before any equation fixes the **units** and the **meaning**, and makes it easy to check the answer against the text at the end. Many wrong answers come from solving correctly for the wrong quantity: finding the speed when the question asked for the time.`,
    r`### Քանի հավասարում է պետք խնդրին

Յուրաքանչյուր անհայտի համար պետք է մեկ **անկախ** պայման։ Երկու անհայտի և մեկ պայմանի դեպքում («գրիչն ու տետրը միասին արժեն 130») անվերջ շատ պատասխաններ կան։ Եթե երկու պայմանը նույն բանն են ասում տարբեր բառերով («…իսկ երկու գրիչն ու երկու տետրն արժեն 260»), դարձյալ անվերջ շատ են. երկրորդ հավասարումն առաջինն է՝ բազմապատկած 2-ով, և ուղիղները համընկնում են։ Իրար հակասող երկու պայմանի դեպքում լուծում չկա։ Ճիշտ դրված խնդիրն ունի ճիշտ այնքան անկախ պայման, որքան անհայտ։

### Հավերի և ճագարների հին հանելուկը

IV–V դարերի չինական «Սունցզի Սուանցզին» գիրքը հարցնում է. «Մի վանդակում հավեր և ճագարներ են։ Կան 35 գլուխ և 94 ոտք։ Քանի՞սն են յուրաքանչյուրից»։

Հին բանավոր լուծումը. պատկերացրու, որ բոլոր 35 կենդանիները հավեր են։ Այդ դեպքում կլիներ $70$ ոտք՝ 94-ից $24$-ով պակաս։ Յուրաքանչյուր ճագար հավից 2 ոտք ավելի ունի, ուստի ճագարները $24 : 2 = 12$ են, հավերը՝ $23$։

Սա քողարկված գումարման եղանակն է։ $x$ հավի և $y$ ճագարի դեպքում.

$$\begin{cases} x + y = 35 \\ 2x + 4y = 94 \end{cases}$$

Առաջին հավասարումը բազմապատկիր 2-ով և հանիր. $2y = 24$։ «Պատկերացրու, որ բոլորը հավեր են»-ը հենց «գլուխների հավասարումը բազմապատկիր 2-ով»-ն է։

### Ինչու «տառերն անվանել բառերով»

Շարժման խնդրում $x$-ը կարող է լինել արագություն, ժամանակ կամ ճանապարհ։ Ցանկացած հավասարումից առաջ «$x$-ը նավակի արագությունն է կանգնած ջրում, կմ/ժ» գրելը ամրագրում է **միավորները** և **իմաստը**, և վերջում հեշտացնում է պատասխանը տեքստով ստուգելը։ Շատ սխալ պատասխաններ ծագում են սխալ մեծության համար ճիշտ լուծելուց՝ գտնում են արագությունը, երբ հարցը ժամանակի մասին էր։`,
    r`### Сколько уравнений нужно задаче

Каждому неизвестному нужно одно **независимое** условие. При двух неизвестных и одном условии («ручка и тетрадь вместе стоят 130») ответов бесконечно много. Если два условия говорят одно и то же разными словами («…а две ручки и две тетради стоят 260»), их всё равно бесконечно много: второе уравнение — это первое, умноженное на 2, и прямые совпадают. При двух противоречащих условиях решений нет. В правильно поставленной задаче независимых условий ровно столько, сколько неизвестных.

### Древняя задача о фазанах и кроликах

Китайская книга IV–V веков «Сунь-цзы суань цзин» спрашивает: «В клетке фазаны и кролики. Всего 35 голов и 94 ноги. Сколько тех и других?»

Старинное устное решение: представим, что все 35 животных — фазаны. Тогда ног было бы $70$, на $24$ меньше, чем 94. Каждый кролик добавляет на 2 ноги больше, чем фазан, значит, кроликов $24 : 2 = 12$, а фазанов $23$.

Это замаскированный метод сложения. При $x$ фазанах и $y$ кроликах:

$$\begin{cases} x + y = 35 \\ 2x + 4y = 94 \end{cases}$$

Умножим первое уравнение на 2 и вычтем: $2y = 24$. «Представим, что все — фазаны» — это в точности «умножим уравнение голов на 2».

### Зачем «называть буквы словами»

В задаче на движение $x$ может быть скоростью, временем или расстоянием. Запись «$x$ — скорость лодки в стоячей воде, км/ч» перед любым уравнением закрепляет **единицы** и **смысл** и облегчает проверку ответа по тексту в конце. Многие неверные ответы возникают, когда правильно находят не ту величину: скорость, когда спрашивали время.`,
  ),

  "algebra7-review": th(
    r`### Three meanings of a letter

This year the same symbol $x$ was used in three different ways. Telling them apart is the key to the whole course.

1. **Any number** (in an identity). $(a + b)^2 = a^2 + 2ab + b^2$ is a claim about **all** $a$ and $b$. To prove it you transform; to disprove it one counterexample is enough.
2. **An unknown number** (in an equation). $3x + 1 = 10$ is a **condition**. It is true only for some $x$, and we look for them.
3. **A changing number** (in a function). In $y = 3x + 1$ the letter $x$ runs through many values, and we study how $y$ follows it.

The same expression $3x + 1$ appears in all three, but the question asked about it is different each time.

### One toolbox for everything

Almost every step this year was one of a few moves:

- the laws of operations (commutative, associative, distributive);
- equivalent transformations of equations: add the same thing to both sides, multiply both sides by the same **non-zero** number;
- the rules for powers, which come from counting factors;
- "a product is zero only when a factor is zero".

Factoring, the abridged multiplication formulas, the methods for systems and the graph of the linear function are all built from these.

### Algebra and geometry are one subject

The formula for $(a + b)^2$ is a statement about areas; the difference of squares is a cut-and-move puzzle; a system of two equations is two lines crossing; $k$ is a slope you can see. When you are stuck on an algebra problem, draw it; when you are stuck on a geometry problem, write an equation.

### What comes next

In grade 8: quadratic equations (the completed square and the factoring tricks of this year are the way in), algebraic fractions (factoring is needed to cancel them), square roots and negative exponents (which extend the power rules). Everything you learned this year is used again.`,
    r`### Տառի երեք իմաստը

Այս տարի նույն $x$ նշանն օգտագործվեց երեք տարբեր ձևով։ Դրանք իրարից տարբերելը ամբողջ դասընթացի բանալին է։

1. **Ցանկացած թիվ** (նույնության մեջ)։ $(a + b)^2 = a^2 + 2ab + b^2$-ն պնդում է **բոլոր** $a$-երի և $b$-երի մասին։ Ապացուցելու համար ձևափոխում ես, հերքելու համար բավական է մեկ հակաօրինակ։
2. **Անհայտ թիվ** (հավասարման մեջ)։ $3x + 1 = 10$-ը **պայման** է։ Այն ճիշտ է միայն որոշ $x$-երի համար, և մենք փնտրում ենք դրանք։
3. **Փոփոխվող թիվ** (ֆունկցիայի մեջ)։ $y = 3x + 1$-ում $x$ տառն անցնում է բազմաթիվ արժեքներով, և մենք ուսումնասիրում ենք, թե ինչպես է $y$-ը հետևում նրան։

Նույն $3x + 1$ արտահայտությունը հանդիպում է երեքում էլ, բայց դրա մասին տրվող հարցն ամեն անգամ տարբեր է։

### Մեկ գործիքակազմ ամեն ինչի համար

Այս տարվա գրեթե յուրաքանչյուր քայլ մի քանի շարժումներից մեկն էր.

- գործողությունների օրենքները (տեղափոխական, զուգորդական, բաշխական).
- հավասարումների համարժեք ձևափոխությունները. երկու մասերին գումարել նույնը, երկու մասերը բազմապատկել նույն **զրոյից տարբեր** թվով.
- աստիճանի կանոնները, որոնք ծագում են արտադրիչները հաշվելուց.
- «արտադրյալը զրո է միայն այն դեպքում, երբ արտադրիչներից մեկը զրո է»։

Արտադրիչների վերլուծումը, կրճատ բազմապատկման բանաձևերը, համակարգերի լուծման եղանակները և գծային ֆունկցիայի գրաֆիկը բոլորը կառուցված են սրանցից։

### Հանրահաշիվն ու երկրաչափությունը մեկ առարկա են

$(a + b)^2$-ի բանաձևը մակերեսների մասին պնդում է, քառակուսիների տարբերությունը՝ «կտրիր և տեղափոխիր» հանելուկ, երկու հավասարման համակարգը՝ հատվող երկու ուղիղ, $k$-ն՝ տեսանելի թեքություն։ Երբ խրվել ես հանրահաշվական խնդրում, գծիր այն, երբ խրվել ես երկրաչափականում՝ գրիր հավասարում։

### Ինչ է հաջորդում

8-րդ դասարանում՝ քառակուսի հավասարումներ (այս տարվա քառակուսու լրացումը և վերլուծման հնարքները դրանց դուռն են), հանրահաշվական կոտորակներ (դրանք կրճատելու համար պետք է վերլուծումը), քառակուսի արմատներ և բացասական ցուցիչներ (որոնք ընդլայնում են աստիճանի կանոնները)։ Այս տարի սովորածդ ամեն ինչ նորից է օգտագործվելու։`,
    r`### Три значения буквы

В этом году один и тот же символ $x$ использовался тремя разными способами. Умение различать их — ключ ко всему курсу.

1. **Любое число** (в тождестве). $(a + b)^2 = a^2 + 2ab + b^2$ — утверждение обо **всех** $a$ и $b$. Чтобы доказать его, преобразуют; чтобы опровергнуть, достаточно одного контрпримера.
2. **Неизвестное число** (в уравнении). $3x + 1 = 10$ — это **условие**. Оно верно только при некоторых $x$, и мы их ищем.
3. **Меняющееся число** (в функции). В $y = 3x + 1$ буква $x$ пробегает много значений, и мы изучаем, как за ней следует $y$.

Одно и то же выражение $3x + 1$ встречается во всех трёх случаях, но вопрос о нём каждый раз разный.

### Один набор инструментов для всего

Почти каждый шаг этого года был одним из немногих ходов:

- законы действий (переместительный, сочетательный, распределительный);
- равносильные преобразования уравнений: прибавить к обеим частям одно и то же, умножить обе части на одно и то же **ненулевое** число;
- правила действий со степенями, полученные подсчётом множителей;
- «произведение равно нулю, только если один из множителей равен нулю».

Разложение на множители, формулы сокращённого умножения, методы решения систем и график линейной функции построены из этих ходов.

### Алгебра и геометрия — один предмет

Формула $(a + b)^2$ — утверждение о площадях; разность квадратов — головоломка «разрежь и переложи»; система двух уравнений — две пересекающиеся прямые; $k$ — видимый наклон. Застрял в алгебраической задаче — нарисуй её; застрял в геометрической — составь уравнение.

### Что дальше

В 8 классе: квадратные уравнения (выделение полного квадрата и приёмы разложения этого года — вход в них), алгебраические дроби (чтобы их сокращать, нужно раскладывать на множители), квадратные корни и отрицательные показатели (которые расширяют правила степеней). Всё, что ты выучил в этом году, понадобится снова.`,
  ),
};
