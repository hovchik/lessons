import { th } from "../kit";

const r = String.raw;

/** Math 3, units 1–2: the multiplication table, order of operations, multiplying and dividing. */
export const math3a = {
  "tables-6-7": th(
    r`### Every answer in the 6 table is even. Why?

$6 = 2 \times 3$, so $6 \times n$ is the same as $2 \times (3 \times n)$: it is always a **double** of something. Doubles are always even. That is why the 6 table ends only in $6, 2, 8, 4, 0$, and why $6 \times 7$ cannot be $43$ or $47$. If your answer for the 6 table is odd, it is wrong.

### The last digits of the 7 table

Look at the last digits of $7, 14, 21, 28, 35, 42, 49, 56, 63, 70$:

$$7,\ 4,\ 1,\ 8,\ 5,\ 2,\ 9,\ 6,\ 3,\ 0.$$

Every digit from $0$ to $9$ appears **exactly once**. Each step adds $7$, which moves the last digit $7$ forward, or $3$ back, so it never lands on the same digit twice in ten steps. The 3 and 9 tables do the same; the 2, 4, 5, 6 and 8 tables do not. Try it.

### Building a fact you forgot

You never need to panic. If you forget $7 \times 6$, use a fact you know and take one step:

- $7 \times 5 = 35$, one more 7 gives $42$;
- or $6 \times 6 = 36$, one more 6 gives $42$.

Two different paths to the same answer is also a check: if they disagree, one of them has a mistake.

### Why tables are worth learning by heart

Every later calculation, from long multiplication to fractions, is built from table facts. Knowing them by heart is like knowing letters by heart: you stop spelling and start reading.`,
    r`### 6-ի աղյուսակի բոլոր պատասխանները զույգ են։ Ինչո՞ւ

$6 = 2 \times 3$, ուստի $6 \times n$-ը նույնն է, ինչ $2 \times (3 \times n)$-ը. այն միշտ ինչ-որ բանի **կրկնապատիկն** է։ Կրկնապատիկները միշտ զույգ են։ Ահա թե ինչու 6-ի աղյուսակի թվերն ավարտվում են միայն $6, 2, 8, 4, 0$-ով, և ինչու $6 \times 7$-ը չի կարող լինել $43$ կամ $47$։ Եթե 6-ի աղյուսակում պատասխանդ կենտ է, այն սխալ է։

### 7-ի աղյուսակի վերջին թվանշանները

Նայիր $7, 14, 21, 28, 35, 42, 49, 56, 63, 70$ թվերի վերջին թվանշաններին.

$$7,\ 4,\ 1,\ 8,\ 5,\ 2,\ 9,\ 6,\ 3,\ 0.$$

$0$-ից $9$ յուրաքանչյուր թվանշան հանդիպում է **ճիշտ մեկ անգամ**։ Ամեն քայլում գումարվում է $7$, որը վերջին թվանշանը տեղաշարժում է $7$-ով առաջ կամ $3$-ով հետ, ուստի տասը քայլում այն երբեք երկու անգամ նույն թվանշանին չի ընկնում։ 3-ի և 9-ի աղյուսակներն էլ են այդպես, իսկ 2-ի, 4-ի, 5-ի, 6-ի և 8-ի աղյուսակները՝ ոչ։ Փորձիր։

### Մոռացած փաստը կառուցելը

Խուճապի կարիք երբեք չկա։ Եթե մոռացել ես $7 \times 6$-ը, վերցրու քեզ հայտնի փաստ և արա մեկ քայլ.

- $7 \times 5 = 35$, ևս մեկ 7՝ ստացվում է $42$.
- կամ $6 \times 6 = 36$, ևս մեկ 6՝ ստացվում է $42$։

Նույն պատասխանին տանող երկու տարբեր ճանապարհը նաև ստուգում է. եթե դրանք չեն համընկնում, մեկում սխալ կա։

### Ինչու արժե աղյուսակները անգիր սովորել

Հետագա ամեն հաշվարկ՝ սյունակով բազմապատկումից մինչև կոտորակներ, կառուցված է աղյուսակի փաստերից։ Դրանք անգիր իմանալը նման է տառերն անգիր իմանալուն. դադարում ես տառ առ տառ կարդալ և սկսում ես իսկապես կարդալ։`,
    r`### Все ответы в таблице на 6 чётные. Почему?

$6 = 2 \times 3$, поэтому $6 \times n$ — то же, что $2 \times (3 \times n)$: это всегда **удвоенное** какое-то число. А удвоенные числа всегда чётные. Поэтому числа таблицы на 6 оканчиваются только на $6, 2, 8, 4, 0$, и $6 \times 7$ не может быть $43$ или $47$. Если в таблице на 6 у тебя получился нечётный ответ, он неверный.

### Последние цифры таблицы на 7

Посмотри на последние цифры чисел $7, 14, 21, 28, 35, 42, 49, 56, 63, 70$:

$$7,\ 4,\ 1,\ 8,\ 5,\ 2,\ 9,\ 6,\ 3,\ 0.$$

Каждая цифра от $0$ до $9$ встречается **ровно один раз**. На каждом шаге прибавляется $7$, и последняя цифра сдвигается на $7$ вперёд, или на $3$ назад, поэтому за десять шагов она ни разу не попадает на одну и ту же цифру дважды. Таблицы на 3 и на 9 ведут себя так же, а на 2, 4, 5, 6 и 8 — нет. Проверь.

### Как восстановить забытое

Паниковать никогда не нужно. Если забыл $7 \times 6$, возьми то, что знаешь, и сделай один шаг:

- $7 \times 5 = 35$, ещё одна семёрка — $42$;
- или $6 \times 6 = 36$, ещё одна шестёрка — $42$.

Два разных пути к одному ответу — это ещё и проверка: если ответы не совпали, где-то ошибка.

### Зачем учить таблицу наизусть

Любое следующее вычисление, от умножения в столбик до дробей, собрано из табличных фактов. Знать их наизусть — как знать наизусть буквы: перестаёшь читать по слогам и начинаешь читать по-настоящему.`,
  ),

  "tables-8-9": th(
    r`### Why the finger trick for 9 works

Hold up ten fingers. For $9 \times 4$, bend the **fourth** finger. There are $3$ fingers to its left and $6$ to its right: the answer is $36$.

Why? $9 \times 4$ is $10 \times 4$ minus $4$, that is $40 - 4$. Taking 4 away from 40 leaves **one ten fewer**, 3 tens, and $10 - 4 = 6$ ones. The fingers on the left count the tens ($4 - 1 = 3$) and the fingers on the right count the ones ($10 - 4 = 6$). The trick is just the rule "nine is ten minus one" in disguise.

### The digits of the 9 table add up to 9

$18$: $1 + 8 = 9$. $27$: $2 + 7 = 9$. $54$: $5 + 4 = 9$. Each step adds $9$, which is "add one ten, take away one". The tens digit goes up by 1 and the ones digit goes down by 1, so their sum stays the same. This gives a quick check: if the digits of your $9 \times$ answer do not add up to 9, something is wrong.

### 8 is "double, double, double"

$8 = 2 \times 2 \times 2$. So to multiply by 8, double three times. $8 \times 7$: $7 \to 14 \to 28 \to 56$. If you know the 2 table well, you can rebuild the whole 8 table without memorising it. In the same way, $4$ is "double, double".

### Few new facts

Thanks to swapping, the 8 and 9 tables contain only a few facts you have not met before: $8 \times 8 = 64$, $8 \times 9 = 72$ and $9 \times 9 = 81$. All the others you already know from the smaller tables, read the other way round.`,
    r`### Ինչու է 9-ի մատների հնարքն աշխատում

Բարձրացրու տասը մատդ։ $9 \times 4$-ի համար ծալիր **չորրորդ** մատը։ Նրանից ձախ կա $3$ մատ, աջ՝ $6$. պատասխանը $36$ է։

Ինչո՞ւ։ $9 \times 4$-ը $10 \times 4$-ն է՝ հանած $4$, այսինքն՝ $40 - 4$։ 40-ից 4 հանելով՝ մնում է **մեկ տասնյակով պակաս**՝ 3 տասնյակ, և $10 - 4 = 6$ միավոր։ Ձախ կողմի մատները հաշվում են տասնյակները ($4 - 1 = 3$), իսկ աջ կողմինները՝ միավորները ($10 - 4 = 6$)։ Հնարքը պարզապես «ինը տասն է՝ հանած մեկ» կանոնն է՝ քողարկված։

### 9-ի աղյուսակի թվանշանների գումարը 9 է

$18$. $1 + 8 = 9$։ $27$. $2 + 7 = 9$։ $54$. $5 + 4 = 9$։ Ամեն քայլում գումարվում է $9$, որը «գումարիր մեկ տասնյակ, հանիր մեկ» է։ Տասնավորների թվանշանը մեծանում է 1-ով, իսկ միավորներինը՝ փոքրանում 1-ով, ուստի դրանց գումարը մնում է նույնը։ Սա արագ ստուգում է տալիս. եթե $9 \times$-ի պատասխանիդ թվանշանների գումարը 9 չէ, ինչ-որ բան սխալ է։

### 8-ը «կրկնապատկիր, կրկնապատկիր, կրկնապատկիր» է

$8 = 2 \times 2 \times 2$։ Ուստի 8-ով բազմապատկելու համար կրկնապատկիր երեք անգամ։ $8 \times 7$. $7 \to 14 \to 28 \to 56$։ Եթե լավ գիտես 2-ի աղյուսակը, կարող ես վերականգնել 8-ի ամբողջ աղյուսակը՝ առանց անգիր անելու։ Նույն կերպ $4$-ը «կրկնապատկիր, կրկնապատկիր» է։

### Քիչ նոր փաստեր

Տեղափոխման շնորհիվ 8-ի և 9-ի աղյուսակներում կան միայն մի քանի փաստ, որոնց դեռ չես հանդիպել՝ $8 \times 8 = 64$, $8 \times 9 = 72$ և $9 \times 9 = 81$։ Մնացածը արդեն գիտես փոքր աղյուսակներից՝ հակառակ կարգով կարդացած։`,
    r`### Почему работает «пальцевый» фокус для 9

Подними десять пальцев. Для $9 \times 4$ загни **четвёртый** палец. Слева от него $3$ пальца, справа $6$: ответ $36$.

Почему? $9 \times 4$ — это $10 \times 4$ минус $4$, то есть $40 - 4$. Если от 40 отнять 4, останется **на один десяток меньше**, 3 десятка, и $10 - 4 = 6$ единиц. Пальцы слева считают десятки ($4 - 1 = 3$), а пальцы справа — единицы ($10 - 4 = 6$). Фокус — это просто правило «девять — это десять без одного» в маскировке.

### Сумма цифр в таблице на 9 равна 9

$18$: $1 + 8 = 9$. $27$: $2 + 7 = 9$. $54$: $5 + 4 = 9$. На каждом шаге прибавляется $9$, то есть «прибавь десяток, отними единицу». Цифра десятков растёт на 1, а цифра единиц уменьшается на 1, поэтому их сумма не меняется. Это быстрая проверка: если сумма цифр ответа $9 \times$ не равна 9, что-то не так.

### 8 — это «удвой, удвой, удвой»

$8 = 2 \times 2 \times 2$. Поэтому, чтобы умножить на 8, удвой три раза. $8 \times 7$: $7 \to 14 \to 28 \to 56$. Если хорошо знаешь таблицу на 2, можно восстановить всю таблицу на 8, не заучивая её. Так же $4$ — это «удвой, удвой».

### Новых фактов мало

Благодаря перестановке в таблицах на 8 и на 9 всего несколько фактов, которых ты раньше не встречал: $8 \times 8 = 64$, $8 \times 9 = 72$ и $9 \times 9 = 81$. Все остальные ты уже знаешь из меньших таблиц, только прочитанные наоборот.`,
  ),

  "commutative-multiplication": th(
    r`### Why swapping always works

Lay out $3$ rows of $5$ counters. Now walk around the table and look from the side: you see $5$ rows of $3$. You did not add or take away a single counter, so

$$3 \times 5 = 5 \times 3.$$

This works for **any** numbers, because any rectangle of counters can be looked at from the side. That is a real reason, not just "we checked a few examples".

### Why grouping works

Build a box of cubes: $2$ cubes wide, $5$ deep and $3$ high. You can count it as $2 \times 5 = 10$ cubes in each layer, times $3$ layers: $30$. Or as $5 \times 3 = 15$ cubes in each slice, times $2$ slices: $30$. The cubes are the same, only the way of counting changes:

$$(2 \times 5) \times 3 = 2 \times (5 \times 3).$$

### Using it to calculate in your head

Look for pairs that make $10$ or $100$:

- $2 \times 7 \times 5 = (2 \times 5) \times 7 = 10 \times 7 = 70$;
- $4 \times 9 \times 25 = (4 \times 25) \times 9 = 100 \times 9 = 900$.

### Division does not swap

$6 : 2 = 3$, but $2 : 6$ is not $3$: sharing 6 apples between 2 children is not the same as sharing 2 apples between 6 children. The rectangle picture works only for multiplication. Subtraction does not swap either: $7 - 3 \ne 3 - 7$.`,
    r`### Ինչու է տեղափոխումը միշտ աշխատում

Դասավորիր $3$ շարք՝ $5$-ական կոճակով։ Այժմ շրջանցիր սեղանը և նայիր կողքից. տեսնում ես $5$ շարք՝ $3$-ական։ Դու ոչ մի կոճակ չավելացրիր և չվերցրիր, ուստի

$$3 \times 5 = 5 \times 3.$$

Սա աշխատում է **ցանկացած** թվերի համար, քանի որ կոճակների ցանկացած ուղղանկյուն կարելի է նայել կողքից։ Սա իսկական պատճառ է, ոչ թե պարզապես «մի քանի օրինակ ստուգեցինք»։

### Ինչու է խմբավորումն աշխատում

Կառուցիր խորանարդիկներից արկղ՝ $2$ խորանարդիկ լայնությամբ, $5$ խորությամբ և $3$ բարձրությամբ։ Կարող ես այն հաշվել որպես յուրաքանչյուր շերտում $2 \times 5 = 10$ խորանարդիկ՝ անգամ $3$ շերտ. $30$։ Կամ որպես յուրաքանչյուր կտրվածքում $5 \times 3 = 15$ խորանարդիկ՝ անգամ $2$ կտրվածք. $30$։ Խորանարդիկները նույնն են, փոխվում է միայն հաշվելու եղանակը.

$$(2 \times 5) \times 3 = 2 \times (5 \times 3).$$

### Օգտագործիր դա մտքում հաշվելու համար

Փնտրիր զույգեր, որոնք տալիս են $10$ կամ $100$.

- $2 \times 7 \times 5 = (2 \times 5) \times 7 = 10 \times 7 = 70$.
- $4 \times 9 \times 25 = (4 \times 25) \times 9 = 100 \times 9 = 900$։

### Բաժանումը չի տեղափոխվում

$6 : 2 = 3$, բայց $2 : 6$-ը $3$ չէ. 6 խնձորը 2 երեխայի միջև բաժանելը նույնը չէ, ինչ 2 խնձորը 6 երեխայի միջև բաժանելը։ Ուղղանկյան նկարն աշխատում է միայն բազմապատկման համար։ Հանումն էլ չի տեղափոխվում. $7 - 3 \ne 3 - 7$։`,
    r`### Почему от перестановки произведение не меняется

Выложи $3$ ряда по $5$ фишек. Теперь обойди стол и посмотри сбоку: ты видишь $5$ рядов по $3$. Ты не добавил и не убрал ни одной фишки, значит,

$$3 \times 5 = 5 \times 3.$$

Это верно для **любых** чисел, ведь на любой прямоугольник из фишек можно посмотреть сбоку. Это настоящая причина, а не просто «проверили несколько примеров».

### Почему можно группировать

Построй из кубиков коробку: $2$ кубика в ширину, $5$ в глубину и $3$ в высоту. Можно считать так: в каждом слое $2 \times 5 = 10$ кубиков, слоёв $3$ — всего $30$. А можно так: в каждом ломтике $5 \times 3 = 15$ кубиков, ломтиков $2$ — снова $30$. Кубики те же, меняется только способ счёта:

$$(2 \times 5) \times 3 = 2 \times (5 \times 3).$$

### Как это помогает считать в уме

Ищи пары, которые дают $10$ или $100$:

- $2 \times 7 \times 5 = (2 \times 5) \times 7 = 10 \times 7 = 70$;
- $4 \times 9 \times 25 = (4 \times 25) \times 9 = 100 \times 9 = 900$.

### Деление переставлять нельзя

$6 : 2 = 3$, но $2 : 6$ — не $3$: разделить 6 яблок между 2 детьми — не то же самое, что 2 яблока между 6 детьми. Картинка с прямоугольником работает только для умножения. Вычитание тоже нельзя переставлять: $7 - 3 \ne 3 - 7$.`,
  ),

  "table-tricks": th(
    r`### How many facts do you really need?

The full table from $1 \times 1$ to $10 \times 10$ has $100$ cells. But:

- swapping means $3 \times 7$ and $7 \times 3$ are one fact, which leaves $55$;
- $\times 1$, $\times 10$, $\times 2$ and $\times 5$ are easy patterns;
- what remains are about **15** "hard" facts, such as $6 \times 7$, $6 \times 8$, $7 \times 8$, $7 \times 9$, $8 \times 9$.

So "learning the table" is mostly learning a small set of facts and the patterns that give the rest.

### The diagonal of squares

The cells $1 \times 1, 2 \times 2, \dots, 10 \times 10$ run along the diagonal: $1, 4, 9, 16, 25, 36, 49, 64, 81, 100$. They are called **square numbers**, because $n \times n$ counters make a square. Each is the one before plus an odd number: $1 + 3 = 4$, $4 + 5 = 9$, $9 + 7 = 16$. Check it on squared paper: to grow a square by one, you add an L-shaped border.

The table is **symmetric** about this diagonal: fold it along the diagonal and equal numbers meet. That fold is the swapping rule.

### A beautiful near-miss

Next to a square there is always a product **one smaller**: $7 \times 7 = 49$ and $6 \times 8 = 48$; $5 \times 5 = 25$ and $4 \times 6 = 24$. Moving one step away from the middle on both sides always loses exactly $1$. Try $9 \times 9$ and $8 \times 10$.

### Every row is a staircase

The row for $7$ climbs by $7$ each step: $7, 14, 21, \dots$ If you know one cell, you can always walk to its neighbours by adding or taking away the row number.`,
    r`### Իրականում քանի՞ փաստ է պետք

$1 \times 1$-ից մինչև $10 \times 10$ ամբողջական աղյուսակն ունի $100$ վանդակ։ Բայց.

- տեղափոխման շնորհիվ $3 \times 7$-ը և $7 \times 3$-ը մեկ փաստ են, ուստի մնում է $55$.
- $\times 1$-ը, $\times 10$-ը, $\times 2$-ը և $\times 5$-ը հեշտ օրինաչափություններ են.
- մնում են մոտ **15** «դժվար» փաստեր, օրինակ՝ $6 \times 7$, $6 \times 8$, $7 \times 8$, $7 \times 9$, $8 \times 9$։

Ուստի «աղյուսակը սովորելը» հիմնականում փաստերի փոքր խումբ և մնացածը տվող օրինաչափությունները սովորելն է։

### Քառակուսիների անկյունագիծը

$1 \times 1, 2 \times 2, \dots, 10 \times 10$ վանդակները ձգվում են անկյունագծով. $1, 4, 9, 16, 25, 36, 49, 64, 81, 100$։ Դրանք կոչվում են **քառակուսի թվեր**, քանի որ $n \times n$ կոճակները քառակուսի են կազմում։ Յուրաքանչյուրը նախորդն է՝ գումարած կենտ թիվ. $1 + 3 = 4$, $4 + 5 = 9$, $9 + 7 = 16$։ Ստուգիր վանդակավոր թղթի վրա. քառակուսին մեկով մեծացնելու համար ավելացնում ես անկյունաձև եզր։

Աղյուսակը **համաչափ** է այս անկյունագծի նկատմամբ. ծալիր այն անկյունագծով, և հավասար թվերը կհանդիպեն։ Այդ ծալքը տեղափոխման կանոնն է։

### Գեղեցիկ «համարյա»

Քառակուսու կողքին միշտ կա **մեկով փոքր** արտադրյալ. $7 \times 7 = 49$ և $6 \times 8 = 48$, $5 \times 5 = 25$ և $4 \times 6 = 24$։ Մեջտեղից երկու կողմ մեկական քայլ հեռանալը միշտ կորցնում է ճիշտ $1$։ Փորձիր $9 \times 9$-ը և $8 \times 10$-ը։

### Ամեն տող աստիճանավանդակ է

7-ի տողն ամեն քայլում բարձրանում է $7$-ով. $7, 14, 21, \dots$։ Եթե գիտես մեկ վանդակ, միշտ կարող ես անցնել հարևաններին՝ գումարելով կամ հանելով տողի թիվը։`,
    r`### Сколько фактов нужно на самом деле?

В полной таблице от $1 \times 1$ до $10 \times 10$ — $100$ клеток. Но:

- благодаря перестановке $3 \times 7$ и $7 \times 3$ — один факт, остаётся $55$;
- $\times 1$, $\times 10$, $\times 2$ и $\times 5$ — простые закономерности;
- остаётся примерно **15** «трудных» фактов, таких как $6 \times 7$, $6 \times 8$, $7 \times 8$, $7 \times 9$, $8 \times 9$.

Так что «выучить таблицу» — это в основном выучить небольшой набор фактов и закономерности, которые дают остальное.

### Диагональ квадратов

Клетки $1 \times 1, 2 \times 2, \dots, 10 \times 10$ идут по диагонали: $1, 4, 9, 16, 25, 36, 49, 64, 81, 100$. Их называют **квадратными числами**, потому что $n \times n$ фишек складываются в квадрат. Каждое равно предыдущему плюс нечётное число: $1 + 3 = 4$, $4 + 5 = 9$, $9 + 7 = 16$. Проверь на клетчатой бумаге: чтобы увеличить квадрат на один, добавляешь уголок.

Таблица **симметрична** относительно этой диагонали: сложи её по диагонали, и равные числа совпадут. Этот сгиб и есть правило перестановки.

### Красивое «почти»

Рядом с квадратом всегда есть произведение **на один меньше**: $7 \times 7 = 49$ и $6 \times 8 = 48$; $5 \times 5 = 25$ и $4 \times 6 = 24$. Если отойти от середины на шаг в обе стороны, всегда теряется ровно $1$. Попробуй $9 \times 9$ и $8 \times 10$.

### Каждая строка — лесенка

Строка для $7$ поднимается на $7$ с каждым шагом: $7, 14, 21, \dots$ Если знаешь одну клетку, всегда можно дойти до соседних, прибавляя или отнимая номер строки.`,
  ),

  "order-of-operations": th(
    r`### Why we need a rule at all

What is $2 + 3 \times 4$? If you go left to right, $5 \times 4 = 20$. If you multiply first, $2 + 12 = 14$. Both look reasonable, but a number can have only **one** value. Without an agreed order, two people would read the same example and get different answers, like two people reading the same recipe in different orders.

Mathematicians agreed: **multiplication and division first, then addition and subtraction**, and brackets come before everything. Calculators, computers and textbooks all over the world use the same agreement.

### Why multiplication goes first

The agreement was not chosen at random. Think about what the example usually **means**: "I bought 2 pencils, and 3 packs of 4 felt-tip pens." The 3 packs of 4 belong together; they are one amount, $3 \times 4 = 12$. Then we add the 2 pencils: $2 + 12 = 14$. Multiplication describes groups, and a group is counted as one amount before it is added to anything else.

### Brackets change the meaning

$(2 + 3) \times 4$ means something different: "5 children, each with 4 sweets". The brackets say "this sum is **one** amount, use it as a whole". Brackets are how we tell the reader that we want a different order.

### A habit that prevents mistakes

Before calculating a long example, number the steps above the signs: brackets first, then $\times$ and $:$ from left to right, then $+$ and $-$ from left to right. Calculating in the numbered order, you never have to keep the rule in your head.`,
    r`### Ինչու է ընդհանրապես պետք կանոն

Որքա՞ն է $2 + 3 \times 4$-ը։ Եթե գնաս ձախից աջ՝ $5 \times 4 = 20$։ Եթե նախ բազմապատկես՝ $2 + 12 = 14$։ Երկուսն էլ տրամաբանական են թվում, բայց թիվը կարող է ունենալ միայն **մեկ** արժեք։ Առանց համաձայնեցված կարգի՝ երկու մարդ նույն օրինակը կկարդային և տարբեր պատասխաններ կստանային, ինչպես երկու մարդ, որ նույն բաղադրատոմսը կարդում են տարբեր հերթականությամբ։

Մաթեմատիկոսները պայմանավորվեցին. **նախ բազմապատկում և բաժանում, հետո գումարում և հանում**, իսկ փակագծերը՝ ամեն ինչից առաջ։ Ամբողջ աշխարհում հաշվիչները, համակարգիչները և դասագրքերը օգտագործում են այդ նույն պայմանավորվածությունը։

### Ինչու է բազմապատկումը առաջինը

Պայմանավորվածությունը պատահական չի ընտրվել։ Մտածիր, թե օրինակը սովորաբար ինչ է **նշանակում**. «Գնեցի 2 մատիտ և 4-ական ֆլոմաստերով 3 տուփ»։ 4-ական 3 տուփը միասին են. դա մեկ քանակ է՝ $3 \times 4 = 12$։ Հետո գումարում ենք 2 մատիտը. $2 + 12 = 14$։ Բազմապատկումը նկարագրում է խմբեր, և խումբը հաշվվում է որպես մեկ քանակ՝ նախքան որևէ բանի գումարվելը։

### Փակագծերը փոխում են իմաստը

$(2 + 3) \times 4$-ը այլ բան է նշանակում. «5 երեխա, յուրաքանչյուրը՝ 4 կոնֆետով»։ Փակագծերն ասում են. «այս գումարը **մեկ** քանակ է, օգտագործիր այն ամբողջությամբ»։ Փակագծերով ենք կարդացողին ասում, որ ուզում ենք այլ կարգ։

### Սխալներից պաշտպանող սովորություն

Երկար օրինակը հաշվելուց առաջ նշանների վերևում համարակալիր քայլերը. նախ փակագծերը, հետո $\times$-ը և $:$-ը ձախից աջ, հետո $+$-ը և $-$-ը ձախից աջ։ Համարակալված կարգով հաշվելիս կանոնը երբեք պետք չէ մտքում պահել։`,
    r`### Зачем вообще нужно правило

Сколько будет $2 + 3 \times 4$? Если идти слева направо, $5 \times 4 = 20$. Если сначала умножить, $2 + 12 = 14$. Оба способа кажутся разумными, но у числа может быть только **одно** значение. Без общего порядка два человека прочитали бы один пример и получили разные ответы — как двое, которые читают один рецепт в разном порядке.

Математики договорились: **сначала умножение и деление, потом сложение и вычитание**, а скобки — раньше всего. Калькуляторы, компьютеры и учебники во всём мире пользуются этим соглашением.

### Почему умножение первое

Соглашение выбрали не случайно. Подумай, что обычно **означает** пример: «Я купил 2 карандаша и 3 пачки по 4 фломастера». 3 пачки по 4 — это одно целое количество, $3 \times 4 = 12$. Потом прибавляем 2 карандаша: $2 + 12 = 14$. Умножение описывает группы, а группу считают одним количеством, прежде чем к ней что-то прибавлять.

### Скобки меняют смысл

$(2 + 3) \times 4$ означает другое: «5 детей, у каждого по 4 конфеты». Скобки говорят: «эта сумма — **одно** количество, бери её целиком». Скобками мы сообщаем читателю, что хотим другой порядок.

### Привычка, которая спасает от ошибок

Прежде чем считать длинный пример, пронумеруй действия над знаками: сначала скобки, потом $\times$ и $:$ слева направо, потом $+$ и $-$ слева направо. Считая по номерам, правило не нужно держать в голове.`,
  ),

  "multiply-round-tens": th(
    r`### Why $30 \times 4 = 120$

$30$ is $3$ tens. Four times $3$ tens is $12$ tens, and $12$ tens is $120$. We used only the table fact $3 \times 4 = 12$; the word "tens" came along for the ride. In the same way $300 \times 4$ is $12$ hundreds, $1200$.

So multiplying round numbers is the table plus a **unit**: tens, hundreds. That is why the rule "multiply without the zeros, then put the zeros back" works.

### Why multiplying by 10 moves digits

Take $37$: $3$ tens and $7$ ones. Multiply by $10$: each one becomes a ten, and each ten becomes a hundred. So $7$ ones become $7$ tens, and $3$ tens become $3$ hundreds: $370$. Every digit moves **one place to the left**, and the empty ones place gets a $0$.

So "add a zero" is a short way to say "every digit moves up one place". Later, with decimals like $3.7 \times 10 = 37$, nothing is added at the end, but the digits still move one place left. Remember the reason, not just the shortcut.

### Dividing round numbers

$120 : 4$: $12$ tens shared among $4$ is $3$ tens, $30$. And $240 : 30$: how many times do $3$ tens fit into $24$ tens? $8$ times. When both numbers end in zeros, you can cross out **the same number** of zeros in both: $240 : 30 = 24 : 3$. This is like changing both prices to "tens of dram": the answer does not change.

### Check by size

$40 \times 6$ must be more than $40 \times 5 = 200$ and less than $40 \times 10 = 400$. If you get $2400$ or $24$, you lost or added a zero.`,
    r`### Ինչու $30 \times 4 = 120$

$30$-ը $3$ տասնյակ է։ Չորս անգամ $3$ տասնյակը $12$ տասնյակ է, իսկ $12$ տասնյակը $120$ է։ Օգտագործեցինք միայն $3 \times 4 = 12$ աղյուսակային փաստը, իսկ «տասնյակ» բառը պարզապես եկավ հետը։ Նույն կերպ $300 \times 4$-ը $12$ հարյուրյակ է՝ $1200$։

Ուստի կլոր թվերի բազմապատկումը աղյուսակն է՝ գումարած **միավոր**. տասնյակներ, հարյուրյակներ։ Ահա թե ինչու է աշխատում «բազմապատկիր առանց զրոների, հետո զրոները հետ դիր» կանոնը։

### Ինչու է 10-ով բազմապատկելը տեղաշարժում թվանշանները

Վերցնենք $37$-ը՝ $3$ տասնյակ և $7$ միավոր։ Բազմապատկենք $10$-ով. յուրաքանչյուր միավոր դառնում է տասնյակ, իսկ յուրաքանչյուր տասնյակ՝ հարյուրյակ։ Ուստի $7$ միավորը դառնում է $7$ տասնյակ, իսկ $3$ տասնյակը՝ $3$ հարյուրյակ. $370$։ Յուրաքանչյուր թվանշան տեղաշարժվում է **մեկ կարգ դեպի ձախ**, իսկ դատարկ մնացած միավորների կարգը ստանում է $0$։

Ուստի «զրո ավելացրու»-ն կարճ ձև է ասելու «յուրաքանչյուր թվանշան բարձրանում է մեկ կարգով»։ Հետագայում, $3{,}7 \times 10 = 37$-ի պես տասնորդականների դեպքում, վերջում ոչինչ չի ավելանում, բայց թվանշանները դարձյալ մեկ կարգով ձախ են շարժվում։ Հիշիր պատճառը, ոչ միայն կրճատ ճանապարհը։

### Կլոր թվերի բաժանումը

$120 : 4$. $12$ տասնյակը $4$-ի միջև բաժանած՝ $3$ տասնյակ է, $30$։ Իսկ $240 : 30$. քանի՞ անգամ է $3$ տասնյակը տեղավորվում $24$ տասնյակում։ $8$ անգամ։ Երբ երկու թվերն էլ ավարտվում են զրոներով, կարող ես երկուսից էլ ջնջել **նույն քանակով** զրոներ. $240 : 30 = 24 : 3$։ Սա նման է երկու գներն էլ «տասնյակ դրամներով» հաշվելուն. պատասխանը չի փոխվում։

### Ստուգիր չափով

$40 \times 6$-ը պետք է մեծ լինի $40 \times 5 = 200$-ից և փոքր $40 \times 10 = 400$-ից։ Եթե ստացար $2400$ կամ $24$, մի զրո կորցրել կամ ավելացրել ես։`,
    r`### Почему $30 \times 4 = 120$

$30$ — это $3$ десятка. Четыре раза по $3$ десятка — $12$ десятков, а $12$ десятков — это $120$. Мы использовали только табличный факт $3 \times 4 = 12$, а слово «десятки» просто поехало вместе с ним. Так же $300 \times 4$ — это $12$ сотен, $1200$.

Значит, умножение круглых чисел — это таблица плюс **единица счёта**: десятки, сотни. Поэтому и работает правило «умножь без нулей, потом допиши нули».

### Почему умножение на 10 сдвигает цифры

Возьмём $37$: $3$ десятка и $7$ единиц. Умножим на $10$: каждая единица становится десятком, а каждый десяток — сотней. $7$ единиц превращаются в $7$ десятков, $3$ десятка — в $3$ сотни: $370$. Каждая цифра сдвигается **на один разряд влево**, а освободившийся разряд единиц получает $0$.

Так что «припиши нуль» — короткий способ сказать «каждая цифра поднимается на разряд». Потом, с десятичными дробями вроде $3{,}7 \times 10 = 37$, в конце ничего не приписывается, но цифры всё равно сдвигаются на разряд влево. Запомни причину, а не только сокращённое правило.

### Деление круглых чисел

$120 : 4$: $12$ десятков, разделённые на $4$, — это $3$ десятка, $30$. А $240 : 30$: сколько раз $3$ десятка помещаются в $24$ десятках? $8$ раз. Если оба числа оканчиваются нулями, можно зачеркнуть **одинаковое** число нулей у обоих: $240 : 30 = 24 : 3$. Это как пересчитать обе цены в «десятках драмов»: ответ не изменится.

### Проверка по величине

$40 \times 6$ должно быть больше $40 \times 5 = 200$ и меньше $40 \times 10 = 400$. Если получилось $2400$ или $24$, ты потерял или добавил нуль.`,
  ),

  "multiply-sum-by-number": th(
    r`### A picture that proves the rule

Draw $4$ rows. In each row put $3$ red counters and $2$ blue ones. How many counters are there?

- Count each row first: $3 + 2 = 5$ in a row, $4$ rows: $(3 + 2) \times 4 = 20$.
- Or count the colours: $3 \times 4 = 12$ red and $2 \times 4 = 8$ blue: $12 + 8 = 20$.

The counters did not change, only the way we counted them. So

$$(3 + 2) \times 4 = 3 \times 4 + 2 \times 4.$$

Because the same picture can be drawn for **any** numbers, the rule is always true. In grade 7 you will meet it again under its grown-up name, the **distributive law**, and it will be one of the most used rules in all of algebra.

### Where you already use it

At the shop: a pen costs $30$ dram and a notebook $50$ dram. You buy $3$ of each. You can add first, $30 + 50 = 80$ for a pair, then $80 \times 3 = 240$. Or pay separately, $90 + 150 = 240$. Choose whichever is easier to count in your head.

### The rule works with subtraction too

$(10 - 1) \times 6 = 10 \times 6 - 1 \times 6 = 60 - 6 = 54$. This is how the "9 is 10 minus 1" trick works: $9 \times 6 = 54$.

### A common mistake

$(3 + 2) \times 4$ is **not** $3 + 2 \times 4 = 11$. The bracket says both parts must be multiplied. If you multiply only one part, some counters in the picture are never counted.`,
    r`### Նկար, որն ապացուցում է կանոնը

Գծիր $4$ շարք։ Յուրաքանչյուր շարքում դիր $3$ կարմիր և $2$ կապույտ կոճակ։ Քանի՞ կոճակ կա.

- Նախ հաշվիր յուրաքանչյուր շարքը. շարքում $3 + 2 = 5$, $4$ շարք. $(3 + 2) \times 4 = 20$։
- Կամ հաշվիր գույներով. $3 \times 4 = 12$ կարմիր և $2 \times 4 = 8$ կապույտ. $12 + 8 = 20$։

Կոճակները չփոխվեցին, փոխվեց միայն հաշվելու եղանակը։ Ուստի

$$(3 + 2) \times 4 = 3 \times 4 + 2 \times 4.$$

Քանի որ նույն նկարը կարելի է գծել **ցանկացած** թվերի համար, կանոնը միշտ ճիշտ է։ 7-րդ դասարանում նորից կհանդիպես նրան՝ իր «մեծահասակ» անունով՝ **բաշխական օրենք**, և այն կլինի ամբողջ հանրահաշվի ամենաշատ օգտագործվող կանոններից մեկը։

### Որտեղ արդեն օգտագործում ես այն

Խանութում. գրիչն արժե $30$ դրամ, տետրը՝ $50$։ Գնում ես յուրաքանչյուրից $3$ հատ։ Կարող ես նախ գումարել՝ զույգը $30 + 50 = 80$, հետո $80 \times 3 = 240$։ Կամ վճարել առանձին՝ $90 + 150 = 240$։ Ընտրիր այն, որ մտքում ավելի հեշտ է հաշվել։

### Կանոնն աշխատում է նաև հանման դեպքում

$(10 - 1) \times 6 = 10 \times 6 - 1 \times 6 = 60 - 6 = 54$։ Ահա թե ինչպես է աշխատում «9-ը 10 է՝ հանած 1» հնարքը. $9 \times 6 = 54$։

### Հաճախ հանդիպող սխալ

$(3 + 2) \times 4$-ը $3 + 2 \times 4 = 11$ **չէ**։ Փակագիծն ասում է, որ երկու մասերն էլ պետք է բազմապատկվեն։ Եթե բազմապատկես միայն մեկ մասը, նկարի որոշ կոճակներ երբեք չեն հաշվվի։`,
    r`### Картинка, которая доказывает правило

Нарисуй $4$ ряда. В каждом ряду положи $3$ красные фишки и $2$ синие. Сколько всего фишек?

- Сначала посчитай ряд: в ряду $3 + 2 = 5$, рядов $4$: $(3 + 2) \times 4 = 20$.
- Или посчитай по цветам: $3 \times 4 = 12$ красных и $2 \times 4 = 8$ синих: $12 + 8 = 20$.

Фишки не изменились, изменился только способ счёта. Значит,

$$(3 + 2) \times 4 = 3 \times 4 + 2 \times 4.$$

Такую картинку можно нарисовать для **любых** чисел, поэтому правило верно всегда. В 7 классе ты встретишь его снова под «взрослым» именем — **распределительный закон**, и это будет одно из самых используемых правил всей алгебры.

### Где ты им уже пользуешься

В магазине: ручка стоит $30$ драмов, тетрадь — $50$. Ты покупаешь по $3$ штуки. Можно сначала сложить — пара стоит $30 + 50 = 80$, потом $80 \times 3 = 240$. А можно заплатить отдельно: $90 + 150 = 240$. Выбирай, как проще посчитать в уме.

### Правило работает и с вычитанием

$(10 - 1) \times 6 = 10 \times 6 - 1 \times 6 = 60 - 6 = 54$. Так и работает приём «9 — это 10 без 1»: $9 \times 6 = 54$.

### Частая ошибка

$(3 + 2) \times 4$ — это **не** $3 + 2 \times 4 = 11$. Скобка говорит, что умножить нужно обе части. Если умножить только одну, часть фишек на картинке так и останется непосчитанной.`,
  ),

  "multiply-two-digit-by-digit": th(
    r`### Why splitting into tens and ones works

$23 \times 4$: the number $23$ is $20 + 3$, so by the rule for multiplying a sum,

$$23 \times 4 = (20 + 3) \times 4 = 20 \times 4 + 3 \times 4 = 80 + 12 = 92.$$

Picture $4$ rows of $23$ counters: in each row, $2$ sticks of ten and $3$ loose ones. Altogether $8$ sticks ($80$) and $12$ loose counters. Twelve loose counters are one more stick and $2$ loose: $92$. Column multiplication, which you will learn soon, does exactly this, writing the "one more stick" as the little carried digit.

### Ancient Egyptian multiplication by doubling

The Egyptians, 4000 years ago, multiplied using only **doubling** and **adding**. For $13 \times 6$, double $6$ again and again:

| | |
|---|---|
| $1 \times 6$ | $6$ |
| $2 \times 6$ | $12$ |
| $4 \times 6$ | $24$ |
| $8 \times 6$ | $48$ |

Now $13 = 8 + 4 + 1$, so add those rows: $48 + 24 + 6 = 78$. Why does it work? It is the same splitting rule: $13 \times 6 = (8 + 4 + 1) \times 6$. They did not need a multiplication table at all.

### Splitting in other ways

Sometimes a different split is easier. $19 \times 3 = (20 - 1) \times 3 = 60 - 3 = 57$. $25 \times 4$: just remember $100$. Good calculators (people, not machines) choose the split that gives the friendliest numbers.`,
    r`### Ինչու է աշխատում տասնյակների և միավորների բաժանումը

$23 \times 4$. $23$ թիվը $20 + 3$ է, ուստի գումարը բազմապատկելու կանոնով.

$$23 \times 4 = (20 + 3) \times 4 = 20 \times 4 + 3 \times 4 = 80 + 12 = 92.$$

Պատկերացրու $23$-ական կոճակի $4$ շարք. յուրաքանչյուր շարքում $2$ տասնոց փունջ և $3$ առանձին կոճակ։ Ընդամենը $8$ փունջ ($80$) և $12$ առանձին կոճակ։ Տասներկու առանձին կոճակը ևս մեկ փունջ է և $2$ առանձին. $92$։ Սյունակով բազմապատկումը, որը շուտով կսովորես, անում է հենց սա. «ևս մեկ փունջը» գրում է որպես փոքրիկ մտապահված թվանշան։

### Հին եգիպտական բազմապատկումը կրկնապատկմամբ

4000 տարի առաջ եգիպտացիները բազմապատկում էին միայն **կրկնապատկելով** և **գումարելով**։ $13 \times 6$-ի համար $6$-ը կրկնապատկիր նորից ու նորից.

| | |
|---|---|
| $1 \times 6$ | $6$ |
| $2 \times 6$ | $12$ |
| $4 \times 6$ | $24$ |
| $8 \times 6$ | $48$ |

Այժմ $13 = 8 + 4 + 1$, ուստի գումարիր այդ տողերը. $48 + 24 + 6 = 78$։ Ինչո՞ւ է աշխատում։ Դա նույն բաժանման կանոնն է. $13 \times 6 = (8 + 4 + 1) \times 6$։ Նրանց բազմապատկման աղյուսակ ընդհանրապես պետք չէր։

### Այլ կերպ բաժանելը

Երբեմն այլ բաժանումն է ավելի հեշտ։ $19 \times 3 = (20 - 1) \times 3 = 60 - 3 = 57$։ $25 \times 4$. պարզապես հիշիր $100$-ը։ Լավ հաշվողները (մարդիկ, ոչ թե մեքենաները) ընտրում են այն բաժանումը, որը տալիս է ամենահարմար թվերը։`,
    r`### Почему работает разбиение на десятки и единицы

$23 \times 4$: число $23$ — это $20 + 3$, поэтому по правилу умножения суммы

$$23 \times 4 = (20 + 3) \times 4 = 20 \times 4 + 3 \times 4 = 80 + 12 = 92.$$

Представь $4$ ряда по $23$ фишки: в каждом ряду $2$ пучка по десять и $3$ отдельные фишки. Всего $8$ пучков ($80$) и $12$ отдельных фишек. Двенадцать отдельных — это ещё один пучок и $2$ отдельные: $92$. Умножение в столбик, которое ты скоро выучишь, делает ровно это, а «ещё один пучок» записывает маленькой цифрой, которую держат в уме.

### Древнеегипетское умножение удвоением

Египтяне 4000 лет назад умножали, только **удваивая** и **складывая**. Для $13 \times 6$ удваивай $6$ снова и снова:

| | |
|---|---|
| $1 \times 6$ | $6$ |
| $2 \times 6$ | $12$ |
| $4 \times 6$ | $24$ |
| $8 \times 6$ | $48$ |

Теперь $13 = 8 + 4 + 1$, поэтому сложи эти строки: $48 + 24 + 6 = 78$. Почему это работает? Это то же правило разбиения: $13 \times 6 = (8 + 4 + 1) \times 6$. Таблица умножения им вообще не была нужна.

### Можно разбивать иначе

Иногда удобнее другое разбиение. $19 \times 3 = (20 - 1) \times 3 = 60 - 3 = 57$. $25 \times 4$: просто помни $100$. Хорошие вычислители (люди, а не машины) выбирают разбиение, которое даёт самые удобные числа.`,
  ),

  "divide-sum-by-number": th(
    r`### Why sharing part by part works

You have $36$ sweets in two bags, $20$ and $16$, to share among $4$ friends. You can empty both bags together and share $36$: $9$ each. Or share each bag separately: $20 : 4 = 5$ and $16 : 4 = 4$, so $5 + 4 = 9$ each. Every friend gets the same, so

$$(20 + 16) : 4 = 20 : 4 + 16 : 4.$$

### Choose the split that divides well

$72 : 4$. Splitting into tens and ones, $70 + 2$, is awkward: $70$ does not share into $4$ equal whole parts. Choose instead $40 + 32$: $40 : 4 = 10$, $32 : 4 = 8$, answer $18$. The skill is to find parts that are each easy to divide. A good habit: take the **largest round number** that divides well, then deal with what is left.

### A trap: dividing BY a sum

The rule works when a sum is divided by a number. It does **not** work when a number is divided by a sum:

$$12 : (2 + 4) = 12 : 6 = 2, \quad\text{but}\quad 12 : 2 + 12 : 4 = 6 + 3 = 9.$$

Sharing 12 sweets among 6 children is not the same as sharing them among 2 children and then again among 4. Only the thing being shared can be split up, not the number of people.

### Checking

Multiply back: $18 \times 4 = 40 + 32 = 72$. Multiplication and division undo each other, so a division can always be checked by a multiplication.`,
    r`### Ինչու է աշխատում մաս առ մաս բաժանելը

Ունես $36$ կոնֆետ երկու տոպրակում՝ $20$ և $16$, որ պետք է բաժանես $4$ ընկերոջ։ Կարող ես երկու տոպրակները միասին դատարկել և բաժանել $36$-ը. յուրաքանչյուրին՝ $9$։ Կամ բաժանել յուրաքանչյուր տոպրակն առանձին. $20 : 4 = 5$ և $16 : 4 = 4$, ուստի յուրաքանչյուրին $5 + 4 = 9$։ Յուրաքանչյուր ընկեր նույնն է ստանում, ուստի

$$(20 + 16) : 4 = 20 : 4 + 16 : 4.$$

### Ընտրիր լավ բաժանվող մասեր

$72 : 4$։ Տասնյակների և միավորների բաժանելը՝ $70 + 2$, անհարմար է. $70$-ը չի բաժանվում $4$ հավասար ամբողջ մասի։ Փոխարենը ընտրիր $40 + 32$. $40 : 4 = 10$, $32 : 4 = 8$, պատասխանը $18$ է։ Հմտությունն այն է, որ գտնես մասեր, որոնցից յուրաքանչյուրը հեշտ է բաժանվում։ Լավ սովորություն. վերցրու **ամենամեծ կլոր թիվը**, որը լավ է բաժանվում, հետո զբաղվիր մնացածով։

### Թակարդ. բաժանել գումարի ՎՐԱ

Կանոնն աշխատում է, երբ գումարն է բաժանվում թվի։ Այն **չի** աշխատում, երբ թիվն է բաժանվում գումարի.

$$12 : (2 + 4) = 12 : 6 = 2, \quad\text{բայց}\quad 12 : 2 + 12 : 4 = 6 + 3 = 9.$$

12 կոնֆետը 6 երեխայի միջև բաժանելը նույնը չէ, ինչ դրանք բաժանել 2 երեխայի միջև, հետո նորից 4-ի։ Կարելի է մասերի բաժանել միայն բաժանվող բանը, ոչ թե մարդկանց թիվը։

### Ստուգում

Բազմապատկիր հետ. $18 \times 4 = 40 + 32 = 72$։ Բազմապատկումն ու բաժանումը միմյանց հետ են շրջում, ուստի բաժանումը միշտ կարելի է ստուգել բազմապատկմամբ։`,
    r`### Почему можно делить по частям

У тебя $36$ конфет в двух пакетах, $20$ и $16$, и их нужно разделить на $4$ друзей. Можно высыпать оба пакета вместе и делить $36$: каждому по $9$. А можно делить каждый пакет отдельно: $20 : 4 = 5$ и $16 : 4 = 4$, значит, каждому $5 + 4 = 9$. Каждый получает поровну, поэтому

$$(20 + 16) : 4 = 20 : 4 + 16 : 4.$$

### Выбирай части, которые хорошо делятся

$72 : 4$. Разбить на десятки и единицы, $70 + 2$, неудобно: $70$ не делится на $4$ равные целые части. Возьми лучше $40 + 32$: $40 : 4 = 10$, $32 : 4 = 8$, ответ $18$. Умение в том, чтобы найти части, каждая из которых легко делится. Хорошая привычка: возьми **самое большое круглое число**, которое хорошо делится, а потом разберись с остатком.

### Ловушка: деление НА сумму

Правило работает, когда сумму делят на число. Оно **не** работает, когда число делят на сумму:

$$12 : (2 + 4) = 12 : 6 = 2, \quad\text{но}\quad 12 : 2 + 12 : 4 = 6 + 3 = 9.$$

Разделить 12 конфет на 6 детей — не то же самое, что разделить их на 2 детей, а потом ещё раз на 4. Разбивать на части можно только то, что делят, а не число людей.

### Проверка

Умножь обратно: $18 \times 4 = 40 + 32 = 72$. Умножение и деление отменяют друг друга, поэтому деление всегда можно проверить умножением.`,
  ),

  "divide-by-two-digit": th(
    r`### Division is "how many times does it fit?"

$84 : 21$ asks: how many times does $21$ fit into $84$? You cannot use a table fact directly, but you can **guess and check**. $21$ is about $20$, and $84$ is about $80$; $80 : 20 = 4$. Check: $21 \times 4 = 84$. Exactly.

### Why the estimate is a good first guess

Rounding both numbers to tens keeps the answer close, because the quotient here is small (a one-digit number). If the check is too big, try one less; if the remainder is still bigger than the divisor, try one more. For $91 : 13$: rounding gives $90 : 10 = 9$, but $13 \times 9 = 117$, too big. Try $7$: $13 \times 7 = 91$. Exactly.

### How to guess faster: the last digit

$91 : 13$: the answer times $13$ must end in $1$. Which digit times $3$ ends in $1$? Only $7$ ($3 \times 7 = 21$). So the answer is $7$, with no guessing at all. The last digit of the product depends only on the last digits of the factors.

### Why the quotient is small

When a two-digit number is divided by a two-digit number, the answer is always less than $10$: even the largest, $99 : 10$, is less than $10$. So there are at most nine possible answers to test. That is what makes guess-and-check a real method here, not luck.

### Check every time

The check is not extra work; it is part of the method. Multiplying the guess by the divisor tells you if you are right, too high or too low.`,
    r`### Բաժանումը «քանի՞ անգամ է տեղավորվում» հարցն է

$84 : 21$-ը հարցնում է. քանի՞ անգամ է $21$-ը տեղավորվում $84$-ում։ Աղյուսակի փաստն ուղղակի չես կարող օգտագործել, բայց կարող ես **ենթադրել և ստուգել**։ $21$-ը մոտ $20$ է, $84$-ը՝ մոտ $80$. $80 : 20 = 4$։ Ստուգում. $21 \times 4 = 84$։ Ճիշտ։

### Ինչու է գնահատականը լավ առաջին ենթադրություն

Երկու թվերը տասնյակներով կլորացնելը պատասխանը մոտ է պահում, քանի որ այստեղ քանորդը փոքր է (միանիշ թիվ)։ Եթե ստուգումը չափազանց մեծ է, փորձիր մեկով պակաս. եթե մնացորդը դեռ մեծ է բաժանարարից, փորձիր մեկով ավելի։ $91 : 13$-ի համար կլորացումը տալիս է $90 : 10 = 9$, բայց $13 \times 9 = 117$՝ շատ մեծ։ Փորձիր $7$. $13 \times 7 = 91$։ Ճիշտ։

### Ինչպես կռահել ավելի արագ. վերջին թվանշանը

$91 : 13$. պատասխանը $13$-ով բազմապատկած պետք է ավարտվի $1$-ով։ Ո՞ր թվանշանն անգամ $3$ է ավարտվում $1$-ով։ Միայն $7$-ը ($3 \times 7 = 21$)։ Ուստի պատասխանը $7$ է՝ ընդհանրապես առանց կռահելու։ Արտադրյալի վերջին թվանշանը կախված է միայն արտադրիչների վերջին թվանշաններից։

### Ինչու է քանորդը փոքր

Երբ երկնիշ թիվը բաժանվում է երկնիշ թվի, պատասխանը միշտ փոքր է $10$-ից. նույնիսկ ամենամեծը՝ $99 : 10$-ը, փոքր է $10$-ից։ Ուստի ստուգելու համար կա առավելագույնը ինը հնարավոր պատասխան։ Ահա թե ինչն է ենթադրել-ստուգելն այստեղ իսկական եղանակ դարձնում, ոչ թե բախտի բան։

### Ստուգիր ամեն անգամ

Ստուգումը հավելյալ աշխատանք չէ, այն եղանակի մասն է։ Ենթադրությունը բաժանարարով բազմապատկելը ասում է՝ ճի՞շտ ես, թե՞ չափազանց մեծ կամ փոքր։`,
    r`### Деление — это «сколько раз помещается?»

$84 : 21$ спрашивает: сколько раз $21$ помещается в $84$? Табличный факт напрямую не поможет, но можно **прикинуть и проверить**. $21$ — примерно $20$, а $84$ — примерно $80$; $80 : 20 = 4$. Проверка: $21 \times 4 = 84$. Точно.

### Почему прикидка — хорошая первая догадка

Если округлить оба числа до десятков, ответ остаётся близким, потому что частное здесь маленькое (однозначное). Если проверка дала слишком много, попробуй на один меньше; если остаток всё ещё больше делителя, попробуй на один больше. Для $91 : 13$ округление даёт $90 : 10 = 9$, но $13 \times 9 = 117$ — слишком много. Пробуем $7$: $13 \times 7 = 91$. Точно.

### Как угадывать быстрее: последняя цифра

$91 : 13$: ответ, умноженный на $13$, должен оканчиваться на $1$. Какая цифра, умноженная на $3$, оканчивается на $1$? Только $7$ ($3 \times 7 = 21$). Значит, ответ $7$, и гадать вообще не пришлось. Последняя цифра произведения зависит только от последних цифр множителей.

### Почему частное маленькое

Когда двузначное число делят на двузначное, ответ всегда меньше $10$: даже самое большое, $99 : 10$, меньше $10$. Значит, проверить нужно не больше девяти вариантов. Поэтому «прикинь и проверь» здесь — настоящий метод, а не удача.

### Проверяй каждый раз

Проверка — не лишняя работа, а часть метода. Умножив догадку на делитель, ты узнаёшь, угадал ли, или взял слишком много, или слишком мало.`,
  ),

  "division-with-remainder": th(
    r`### Why the remainder must be smaller than the divisor

$23 : 4$. Put the $23$ sweets into bags of $4$: you fill $5$ bags and have $3$ left. Could the remainder be $7$? No: from $7$ sweets you could fill **one more bag**. As long as at least $4$ are left, you are not finished. So the remainder is always **smaller than the divisor**: when dividing by $4$, it can only be $0, 1, 2$ or $3$. If you get a remainder that is too big, the quotient is too small.

### The check that always works

$23 = 4 \times 5 + 3$: bags times their size, plus what is left, gives back everything you started with. If this equality is true **and** the remainder is smaller than the divisor, your answer is certainly right.

### What to do with the remainder depends on the question

The same division, $23 : 4 = 5$ remainder $3$, can have different answers in real life:

- $23$ children go on a trip, $4$ fit in a car. How many cars? **6**: the 3 children left over still need a car.
- $23$ dram, a sticker costs $4$ dram. How many stickers? **5**: you cannot buy part of a sticker.
- $23$ sweets shared among $4$ friends. How many each? **5**, and $3$ are left over (maybe for you).

Always ask what the remainder **means** before writing the answer.

### Remainders on a clock

It is 9 o'clock. What time will it be in $15$ hours? The clock goes around every $12$ hours, so only the remainder matters: $15 = 12 \times 1 + 3$, so it is $3$ hours later, **12 o'clock**. Clocks, weekdays and calendars all work by remainders.`,
    r`### Ինչու մնացորդը պետք է փոքր լինի բաժանարարից

$23 : 4$։ $23$ կոնֆետը դասավորիր $4$-ական տոպրակներում. լցնում ես $5$ տոպրակ, և մնում է $3$։ Կարո՞ղ է մնացորդը $7$ լինել։ Ոչ. $7$ կոնֆետից կարող էիր լցնել **ևս մեկ տոպրակ**։ Քանի դեռ մնացել է առնվազն $4$, չես ավարտել։ Ուստի մնացորդը միշտ **փոքր է բաժանարարից**. $4$-ի բաժանելիս այն կարող է լինել միայն $0, 1, 2$ կամ $3$։ Եթե ստացար չափազանց մեծ մնացորդ, քանորդը չափազանց փոքր է։

### Միշտ աշխատող ստուգումը

$23 = 4 \times 5 + 3$. տոպրակներն անգամ դրանց չափը՝ գումարած մնացածը, հետ է տալիս այն ամենը, ինչով սկսել էիր։ Եթե այս հավասարությունը ճիշտ է, **և** մնացորդը փոքր է բաժանարարից, պատասխանդ անկասկած ճիշտ է։

### Մնացորդի հետ ինչ անելը կախված է հարցից

Նույն բաժանումը՝ $23 : 4 = 5$, մնացորդ $3$, իրական կյանքում կարող է տարբեր պատասխաններ ունենալ.

- $23$ երեխա գնում է էքսկուրսիայի, մեքենայում տեղավորվում է $4$-ը։ Քանի՞ մեքենա։ **6**. մնացած 3 երեխային էլ է մեքենա պետք։
- $23$ դրամ, կպչուկն արժե $4$ դրամ։ Քանի՞ կպչուկ։ **5**. կպչուկի մաս չես կարող գնել։
- $23$ կոնֆետը բաժանվում է $4$ ընկերոջ։ Յուրաքանչյուրին քանի՞սը։ **5**, և մնում է $3$-ը (գուցե քեզ համար)։

Պատասխանը գրելուց առաջ միշտ հարցրու, թե ինչ է **նշանակում** մնացորդը։

### Մնացորդները ժամացույցի վրա

Ժամը 9-ն է։ Ժամը քանիսը կլինի $15$ ժամ հետո։ Ժամացույցը պտտվում է յուրաքանչյուր $12$ ժամը մեկ, ուստի կարևոր է միայն մնացորդը. $15 = 12 \times 1 + 3$, ուստի $3$ ժամ ուշ է՝ **ժամը 12-ը**։ Ժամացույցները, շաբաթվա օրերը և օրացույցները բոլորն աշխատում են մնացորդներով։`,
    r`### Почему остаток должен быть меньше делителя

$23 : 4$. Разложи $23$ конфеты в пакеты по $4$: наполнишь $5$ пакетов, и останется $3$. Может ли остаток быть $7$? Нет: из $7$ конфет можно наполнить **ещё один пакет**. Пока осталось хотя бы $4$, работа не закончена. Поэтому остаток всегда **меньше делителя**: при делении на $4$ он может быть только $0, 1, 2$ или $3$. Если остаток получился слишком большим, значит, частное слишком маленькое.

### Проверка, которая работает всегда

$23 = 4 \times 5 + 3$: пакеты, умноженные на их размер, плюс то, что осталось, дают всё, с чего ты начал. Если это равенство верно **и** остаток меньше делителя, ответ точно правильный.

### Что делать с остатком, зависит от вопроса

Одно и то же деление, $23 : 4 = 5$ (остаток $3$), в жизни может давать разные ответы:

- $23$ ребёнка едут на экскурсию, в машину помещаются $4$. Сколько машин? **6**: оставшимся 3 детям тоже нужна машина.
- $23$ драма, наклейка стоит $4$ драма. Сколько наклеек? **5**: часть наклейки не купишь.
- $23$ конфеты делят на $4$ друзей. Сколько каждому? По **5**, и $3$ останутся (может быть, тебе).

Прежде чем записать ответ, всегда спроси себя, что **означает** остаток.

### Остатки на часах

Сейчас 9 часов. Сколько будет через $15$ часов? Часы делают круг каждые $12$ часов, поэтому важен только остаток: $15 = 12 \times 1 + 3$, значит, на $3$ часа позже — **12 часов**. Часы, дни недели и календари — всё это работает на остатках.`,
  ),
};
