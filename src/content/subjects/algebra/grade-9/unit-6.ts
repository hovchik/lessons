import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit6: UnitSeed = {
  title: t("Elements of combinatorics and probability", "Կոմբինատորիկայի և հավանականության տարրեր", "Элементы комбинаторики и теории вероятностей"),
  summary: t("The multiplication rule, permutations, arrangements and combinations, the classical definition of probability, and a review of the whole year.", "Բազմապատկման կանոնը, տեղափոխություններ, տեղադրություններ և զուգորդություններ, հավանականության դասական սահմանումը և ամբողջ տարվա կրկնություն։", "Правило умножения, перестановки, размещения и сочетания, классическое определение вероятности и повторение всего года."),
  lessons: [
    lesson(
      "counting-rule",
      ["The multiplication rule of counting", "Հաշվման բազմապատկման կանոնը", "Правило умножения в комбинаторике"],
      {
        en: ["Use a tree diagram to list the possibilities", "Apply the multiplication rule to several choices in a row", "Count numbers and codes under given conditions"],
        hy: ["Օգտագործել ծառի սխեման՝ հնարավորությունները թվարկելու համար", "Կիրառել բազմապատկման կանոնը մի քանի հաջորդական ընտրության դեպքում", "Հաշվել թվեր և կոդեր՝ տրված պայմաններում"],
        ru: ["Использовать дерево возможных вариантов", "Применять правило умножения к нескольким выборам подряд", "Подсчитывать числа и коды при заданных условиях"],
      },
      {
        en: `## Counting by a tree

**Example 1.** A canteen offers two soups (S1, S2) and three main courses (M1, M2, M3). How many different lunches of a soup and a main course are there?

Draw a tree: two branches for the soup, and from each of them three branches for the main course. Counting the ends gives $2 \\cdot 3 = 6$ lunches.

A tree is reliable but slow. The rule it suggests is much faster.

## The multiplication rule

> If a first choice can be made in $m$ ways and, after it, a second choice in $n$ ways, then the pair of choices can be made in $m \\cdot n$ ways. The same holds for three and more choices in a row.

**Example 2.** A number plate has two letters out of $26$ and three digits. The count is
$$26 \\cdot 26 \\cdot 10 \\cdot 10 \\cdot 10 = 676\\,000.$$

**Example 3.** How many three-digit numbers can be made from the digits $1, 2, 3, 4, 5$ if the digits may repeat? Each of the three places has $5$ possibilities, so $5^3 = 125$.

**Example 4.** The same question if the digits may **not** repeat. The first place has $5$ possibilities, the second only $4$, the third $3$, so $5 \\cdot 4 \\cdot 3 = 60$.

## Watch the restrictions

A condition on one place is used **first**, and the remaining places are counted afterwards.

**Example 5.** How many three-digit numbers are there with different digits taken from $0, 1, 2, 3$?

The first digit may not be $0$, so it has $3$ possibilities. After it, the second place has $3$ and the third $2$:
$$3 \\cdot 3 \\cdot 2 = 18.$$

**Example 6.** How many even three-digit numbers can be made from $1, 2, 3, 4, 5$ without repetition?

The last digit must be $2$ or $4$: two possibilities. Then the first place has $4$ and the middle $3$:
$$2 \\cdot 4 \\cdot 3 = 24.$$

## The addition rule

> If the cases do not overlap, their counts are added.

**Example 7.** A box has $4$ red and $5$ blue pens. One pen is taken. The number of ways to take a red or a blue pen is $4 + 5 = 9$.

Multiplication is for "and", addition is for "or".

### Exercises

1. A shop sells $3$ kinds of bread and $4$ kinds of cheese. How many pairs of one bread and one cheese are there?
2. A route goes from A to B in $5$ ways and from B to C in $3$ ways. How many routes go from A to C through B?
3. How many two-digit numbers can be made from $1, 2, 3, 4$ if the digits may repeat?
4. The same without repetition.
5. How many three-digit numbers with different digits can be made from $0, 2, 4, 6$?
6. How many four-digit codes are there with digits from $0$ to $9$, repetitions allowed?
7. How many odd three-digit numbers can be made from $1, 2, 3, 4, 5$ without repetition?
8. A pupil must choose one of $6$ books or one of $4$ films. How many choices are there?

### Answers

1. $12$.
2. $15$.
3. $16$.
4. $12$.
5. $3 \\cdot 3 \\cdot 2 = 18$.
6. $10^4 = 10\\,000$.
7. $3 \\cdot 4 \\cdot 3 = 36$.
8. $10$.`,
        hy: `## Հաշվում ծառով

**Օրինակ 1։** Ճաշարանն առաջարկում է երկու ապուր (Ա1, Ա2) և երեք հիմնական ուտեստ (Հ1, Հ2, Հ3)։ Քանի՞ տարբեր ճաշ՝ ապուրից և հիմնական ուտեստից, կարելի է կազմել։

Գծենք ծառ. երկու ճյուղ ապուրի համար, և նրանցից յուրաքանչյուրից երեք ճյուղ հիմնական ուտեստի համար։ Ծայրերը հաշվելով ստանում ենք $2 \\cdot 3 = 6$ ճաշ։

Ծառը հուսալի է, բայց դանդաղ։ Նրա հուշած կանոնը շատ ավելի արագ է։

## Բազմապատկման կանոնը

> Եթե առաջին ընտրությունը կարելի է կատարել $m$ եղանակով, իսկ դրանից հետո երկրորդը՝ $n$ եղանակով, ապա ընտրությունների զույգը կարելի է կատարել $m \\cdot n$ եղանակով։ Նույնը ճիշտ է երեք և ավելի հաջորդական ընտրությունների դեպքում։

**Օրինակ 2։** Համարանիշն ունի երկու տառ $26$-ից և երեք թվանշան։ Հաշվարկը
$$26 \\cdot 26 \\cdot 10 \\cdot 10 \\cdot 10 = 676\\,000.$$

**Օրինակ 3։** Քանի՞ եռանիշ թիվ կարելի է կազմել $1, 2, 3, 4, 5$ թվանշաններից, եթե թվանշանները կարող են կրկնվել։ Երեք տեղերից ամենն ունի $5$ հնարավորություն, ուստի $5^3 = 125$։

**Օրինակ 4։** Նույն հարցը, եթե թվանշանները **չեն** կարող կրկնվել։ Առաջին տեղն ունի $5$ հնարավորություն, երկրորդը՝ միայն $4$, երրորդը՝ $3$, ուստի $5 \\cdot 4 \\cdot 3 = 60$։

## Հետևե՛ք սահմանափակումներին

Մեկ տեղի վերաբերյալ պայմանը կիրառվում է **նախ**, իսկ մնացած տեղերը հաշվվում են հետո։

**Օրինակ 5։** Քանի՞ եռանիշ թիվ կա տարբեր թվանշաններով՝ վերցված $0, 1, 2, 3$-ից։

Առաջին թվանշանը չի կարող $0$ լինել, ուստի նա ունի $3$ հնարավորություն։ Նրանից հետո երկրորդ տեղն ունի $3$, իսկ երրորդը՝ $2$.
$$3 \\cdot 3 \\cdot 2 = 18.$$

**Օրինակ 6։** Քանի՞ զույգ եռանիշ թիվ կարելի է կազմել $1, 2, 3, 4, 5$-ից առանց կրկնության։

Վերջին թվանշանը պետք է լինի $2$ կամ $4$՝ երկու հնարավորություն։ Ապա առաջին տեղն ունի $4$, իսկ միջինը՝ $3$.
$$2 \\cdot 4 \\cdot 3 = 24.$$

## Գումարման կանոնը

> Եթե դեպքերը չեն համընկնում, ապա նրանց քանակները գումարվում են։

**Օրինակ 7։** Տուփում կա $4$ կարմիր և $5$ կապույտ գրիչ։ Վերցվում է մեկ գրիչ։ Կարմիր կամ կապույտ գրիչ վերցնելու եղանակների թիվը $4 + 5 = 9$ է։

Բազմապատկումը «և»-ի համար է, գումարումը՝ «կամ»-ի։

### Վարժություններ

1. Խանութը վաճառում է $3$ տեսակ հաց և $4$ տեսակ պանիր։ Քանի՞ զույգ՝ մեկ հաց և մեկ պանիր, կարելի է կազմել։
2. Ճանապարհը A-ից B գնում է $5$ եղանակով, իսկ B-ից C՝ $3$ եղանակով։ Քանի՞ ճանապարհ է տանում A-ից C՝ B-ով։
3. Քանի՞ երկնիշ թիվ կարելի է կազմել $1, 2, 3, 4$-ից, եթե թվանշանները կարող են կրկնվել։
4. Նույնը՝ առանց կրկնության։
5. Քանի՞ եռանիշ թիվ՝ տարբեր թվանշաններով, կարելի է կազմել $0, 2, 4, 6$-ից։
6. Քանի՞ քառանիշ կոդ կա $0$-ից $9$ թվանշաններով, կրկնությունները թույլատրված։
7. Քանի՞ կենտ եռանիշ թիվ կարելի է կազմել $1, 2, 3, 4, 5$-ից առանց կրկնության։
8. Աշակերտը պետք է ընտրի $6$ գրքից մեկը կամ $4$ ֆիլմից մեկը։ Քանի՞ ընտրություն կա։

### Պատասխաններ

1. $12$։
2. $15$։
3. $16$։
4. $12$։
5. $3 \\cdot 3 \\cdot 2 = 18$։
6. $10^4 = 10\\,000$։
7. $3 \\cdot 4 \\cdot 3 = 36$։
8. $10$։`,
        ru: `## Подсчёт с помощью дерева

**Пример 1.** В столовой два супа (С1, С2) и три вторых блюда (В1, В2, В3). Сколько разных обедов из супа и второго блюда можно составить?

Начертим дерево: две ветви для супа, а из каждой из них три ветви для второго блюда. Подсчёт концов даёт $2 \\cdot 3 = 6$ обедов.

Дерево надёжно, но медленно. Правило, которое оно подсказывает, намного быстрее.

## Правило умножения

> Если первый выбор можно сделать $m$ способами, а после него второй — $n$ способами, то пару выборов можно сделать $m \\cdot n$ способами. То же верно для трёх и более выборов подряд.

**Пример 2.** На номерном знаке две буквы из $26$ и три цифры. Подсчёт даёт
$$26 \\cdot 26 \\cdot 10 \\cdot 10 \\cdot 10 = 676\\,000.$$

**Пример 3.** Сколько трёхзначных чисел можно составить из цифр $1, 2, 3, 4, 5$, если цифры могут повторяться? На каждом из трёх мест $5$ возможностей, поэтому $5^3 = 125$.

**Пример 4.** Тот же вопрос, если цифры повторяться **не** могут. На первом месте $5$ возможностей, на втором только $4$, на третьем $3$, поэтому $5 \\cdot 4 \\cdot 3 = 60$.

## Следите за ограничениями

Условие на одно место используют **первым**, а остальные места подсчитывают потом.

**Пример 5.** Сколько трёхзначных чисел с различными цифрами, взятыми из $0, 1, 2, 3$?

Первая цифра не может быть $0$, поэтому для неё $3$ возможности. После неё на втором месте $3$, а на третьем $2$:
$$3 \\cdot 3 \\cdot 2 = 18.$$

**Пример 6.** Сколько чётных трёхзначных чисел можно составить из $1, 2, 3, 4, 5$ без повторений?

Последняя цифра должна быть $2$ или $4$: две возможности. Затем на первом месте $4$, а в середине $3$:
$$2 \\cdot 4 \\cdot 3 = 24.$$

## Правило сложения

> Если случаи не пересекаются, их количества складывают.

**Пример 7.** В коробке $4$ красные и $5$ синих ручек. Берут одну ручку. Число способов взять красную или синюю ручку равно $4 + 5 = 9$.

Умножение — для «и», сложение — для «или».

### Упражнения

1. В магазине $3$ вида хлеба и $4$ вида сыра. Сколько пар из одного хлеба и одного сыра можно составить?
2. Из A в B ведут $5$ путей, из B в C — $3$ пути. Сколько путей ведёт из A в C через B?
3. Сколько двузначных чисел можно составить из $1, 2, 3, 4$, если цифры могут повторяться?
4. То же без повторений.
5. Сколько трёхзначных чисел с различными цифрами можно составить из $0, 2, 4, 6$?
6. Сколько четырёхзначных кодов из цифр от $0$ до $9$, если повторения разрешены?
7. Сколько нечётных трёхзначных чисел можно составить из $1, 2, 3, 4, 5$ без повторений?
8. Ученик должен выбрать одну из $6$ книг или один из $4$ фильмов. Сколько вариантов выбора?

### Ответы

1. $12$.
2. $15$.
3. $16$.
4. $12$.
5. $3 \\cdot 3 \\cdot 2 = 18$.
6. $10^4 = 10\\,000$.
7. $3 \\cdot 4 \\cdot 3 = 36$.
8. $10$.`,
      },
      [
        q(t("Two soups and three main courses give how many lunches?", "Երկու ապուրը և երեք հիմնական ուտեստը տալիս են քանի՞ ճաշ", "Два супа и три вторых блюда дают сколько обедов?"), [
          t("6", "6", "6"),
          t("5", "5", "5"),
          t("9", "9", "9"),
        ], 0),
        q(t("The multiplication rule says that m and then n choices give", "Բազմապատկման կանոնն ասում է, որ m, ապա n ընտրությունները տալիս են", "Правило умножения говорит, что m, а затем n выборов дают"), [
          t("m + n ways", "m + n եղանակ", "m + n способов"),
          t("m · n ways", "m · n եղանակ", "m · n способов"),
          t("m - n ways", "m - n եղանակ", "m - n способов"),
        ], 1),
        q(t("How many three-digit numbers can be made from 1, 2, 3, 4, 5 with repetition?", "Քանի՞ եռանիշ թիվ կարելի է կազմել 1, 2, 3, 4, 5-ից կրկնությամբ", "Сколько трёхзначных чисел можно составить из 1, 2, 3, 4, 5 с повторениями?"), [
          t("60", "60", "60"),
          t("15", "15", "15"),
          t("125", "125", "125"),
        ], 2),
        q(t("How many three-digit numbers can be made from 1, 2, 3, 4, 5 without repetition?", "Քանի՞ եռանիշ թիվ կարելի է կազմել 1, 2, 3, 4, 5-ից առանց կրկնության", "Сколько трёхзначных чисел можно составить из 1, 2, 3, 4, 5 без повторений?"), [
          t("60", "60", "60"),
          t("125", "125", "125"),
          t("20", "20", "20"),
        ], 0),
        q(t("Which rule is used for choices joined by the word or?", "Ո՞ր կանոնն է կիրառվում «կամ» բառով միացված ընտրությունների համար", "Какое правило применяют для выборов, соединённых словом «или»?"), [
          t("the multiplication rule", "բազմապատկման կանոնը", "правило умножения"),
          t("the addition rule", "գումարման կանոնը", "правило сложения"),
          t("the rule of the tree", "ծառի կանոնը", "правило дерева"),
        ], 1),
        q(t("When counting three-digit numbers from 0, 1, 2, 3, the first place has", "0, 1, 2, 3-ից եռանիշ թվեր հաշվելիս առաջին տեղն ունի", "При подсчёте трёхзначных чисел из 0, 1, 2, 3 на первом месте"), [
          t("four possibilities", "չորս հնարավորություն", "четыре возможности"),
          t("two possibilities", "երկու հնարավորություն", "две возможности"),
          t("three possibilities, since zero is not allowed", "երեք հնարավորություն, քանի որ զրոն թույլատրված չէ", "три возможности, так как нуль не допускается"),
        ], 2),
      ],
    ),
    lesson(
      "permutations",
      ["Permutations and the factorial", "Տեղափոխություններ և ֆակտորիալ", "Перестановки и факториал"],
      {
        en: ["Compute a factorial and simplify expressions with factorials", "Count the permutations of n different objects", "Solve problems in which some objects must stay together"],
        hy: ["Հաշվել ֆակտորիալը և պարզեցնել ֆակտորիալներով արտահայտությունները", "Հաշվել n տարբեր առարկաների տեղափոխությունները", "Լուծել խնդիրներ, որտեղ որոշ առարկաներ պետք է մնան միասին"],
        ru: ["Вычислять факториал и упрощать выражения с факториалами", "Подсчитывать перестановки n различных предметов", "Решать задачи, в которых некоторые предметы должны стоять вместе"],
      },
      {
        en: `## The factorial

> The product of all natural numbers from $1$ to $n$ is called **n factorial** and written $n!$:
> $$n! = 1 \\cdot 2 \\cdot 3 \\cdots n, \\qquad 0! = 1, \\quad 1! = 1.$$

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ |
|---|---|---|---|---|---|---|---|
| $n!$ | $1$ | $2$ | $6$ | $24$ | $120$ | $720$ | $5040$ |

Factorials grow very fast: $10! = 3\\,628\\,800$ and $20!$ is already larger than $10^{18}$.

The useful identity is $n! = n \\cdot (n - 1)!$, which lets fractions of factorials be simplified without computing them.

**Example 1.** $\\dfrac{8!}{6!} = \\dfrac{8 \\cdot 7 \\cdot 6!}{6!} = 56$.

**Example 2.** $\\dfrac{10!}{8! \\cdot 2} = \\dfrac{10 \\cdot 9}{2} = 45$.

**Example 3.** $\\dfrac{(n + 1)!}{n!} = n + 1$.

## Permutations

> A **permutation** of $n$ different objects is an arrangement of all of them in a row. The number of permutations is
> $$P_n = n!.$$

Why: the first place can be filled in $n$ ways, the second in $n - 1$, and so on down to one way for the last place. The multiplication rule gives $n!$.

**Example 4.** In how many orders can $5$ books be put on a shelf? $5! = 120$.

**Example 5.** In how many ways can $7$ runners finish a race, if there are no ties? $7! = 5040$.

**Example 6.** How many words, meaningful or not, can be made by rearranging the letters of the word LAMP? All four letters differ, so $4! = 24$.

## Objects that must stay together

Tie the objects that must be neighbours into one block, count the permutations of the blocks, and then multiply by the permutations inside the block.

**Example 7.** Five pupils sit in a row; two of them, Ani and Aram, want to sit side by side. In how many ways can the five sit?

Treat the pair as one block: then there are $4$ objects, giving $4! = 24$ orders, and inside the block the two can swap, giving $2! = 2$. In all $24 \\cdot 2 = 48$ ways.

**Example 8.** In how many of the $120$ orders of $5$ books do two given books stand **apart**? From the previous idea, together they stand in $48$ orders, so apart in $120 - 48 = 72$.

**Example 9.** How many five-digit numbers can be made from $1, 2, 3, 4, 5$, each digit used once? $5! = 120$. How many of them are even? The last digit must be $2$ or $4$, and the rest can be in any order: $2 \\cdot 4! = 48$.

### Exercises

1. Compute $6!$ and $4!$.
2. Simplify $\\dfrac{9!}{7!}$.
3. Simplify $\\dfrac{(n + 2)!}{(n + 1)!}$.
4. In how many orders can $6$ pupils stand in a line?
5. How many words can be made by rearranging the letters of the word TABLE?
6. In how many ways can $4$ different cups be placed on $4$ saucers?
7. Five friends sit in a row and two of them want to sit together. How many ways are there?
8. How many of the $24$ arrangements of the letters of LAMP begin with the letter L?

### Answers

1. $720$ and $24$.
2. $72$.
3. $n + 2$.
4. $720$.
5. $120$.
6. $24$.
7. $4! \\cdot 2 = 48$.
8. $3! = 6$.`,
        hy: `## Ֆակտորիալ

> $1$-ից $n$ բոլոր բնական թվերի արտադրյալը կոչվում է **n ֆակտորիալ** և գրվում $n!$.
> $$n! = 1 \\cdot 2 \\cdot 3 \\cdots n, \\qquad 0! = 1, \\quad 1! = 1.$$

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ |
|---|---|---|---|---|---|---|---|
| $n!$ | $1$ | $2$ | $6$ | $24$ | $120$ | $720$ | $5040$ |

Ֆակտորիալները շատ արագ աճում են. $10! = 3\\,628\\,800$, իսկ $20!$-ն արդեն մեծ է $10^{18}$-ից։

Օգտակար նույնությունն է $n! = n \\cdot (n - 1)!$, որը թույլ է տալիս պարզեցնել ֆակտորիալների կոտորակները՝ առանց նրանց հաշվելու։

**Օրինակ 1։** $\\dfrac{8!}{6!} = \\dfrac{8 \\cdot 7 \\cdot 6!}{6!} = 56$։

**Օրինակ 2։** $\\dfrac{10!}{8! \\cdot 2} = \\dfrac{10 \\cdot 9}{2} = 45$։

**Օրինակ 3։** $\\dfrac{(n + 1)!}{n!} = n + 1$։

## Տեղափոխություններ

> $n$ տարբեր առարկաների **տեղափոխություն** է նրանց բոլորի դասավորությունը մեկ շարքում։ Տեղափոխությունների թիվը
> $$P_n = n!.$$

Ինչու. առաջին տեղը կարելի է լրացնել $n$ եղանակով, երկրորդը՝ $n - 1$, և այդպես մինչև վերջին տեղի մեկ եղանակը։ Բազմապատկման կանոնը տալիս է $n!$։

**Օրինակ 4։** Քանի՞ կարգով կարելի է $5$ գիրք դնել դարակում։ $5! = 120$։

**Օրինակ 5։** Քանի՞ եղանակով կարող են $7$ վազորդ ավարտել մրցավազքը, եթե հավասար արդյունքներ չկան։ $7! = 5040$։

**Օրինակ 6։** Քանի՞ բառ՝ իմաստալի կամ ոչ, կարելի է կազմել ԼԱՄՊ բառի տառերը վերադասավորելով։ Բոլոր չորս տառերը տարբեր են, ուստի $4! = 24$։

## Առարկաներ, որոնք պետք է մնան միասին

Կապե՛ք հարևան լինելու պարտադիր առարկաները մեկ բլոկի մեջ, հաշվե՛ք բլոկների տեղափոխությունները և ապա բազմապատկե՛ք բլոկի ներսի տեղափոխություններով։

**Օրինակ 7։** Հինգ աշակերտ նստում են մեկ շարքում; նրանցից երկուսը՝ Անին և Արամը, ուզում են նստել կողք կողքի։ Քանի՞ եղանակով կարող են հինգը նստել։

Զույգը դիտե՛ք որպես մեկ բլոկ. ապա կա $4$ առարկա, որը տալիս է $4! = 24$ կարգ, իսկ բլոկի ներսում երկուսը կարող են փոխվել տեղերով՝ տալով $2! = 2$։ Ընդամենը $24 \\cdot 2 = 48$ եղանակ։

**Օրինակ 8։** $5$ գրքի $120$ կարգերից քանիսո՞ւմ են երկու տրված գրքերը կանգնած **առանձին**։ Նախորդ գաղափարից՝ միասին նրանք կանգնած են $48$ կարգում, ուստի առանձին՝ $120 - 48 = 72$-ում։

**Օրինակ 9։** Քանի՞ հնգանիշ թիվ կարելի է կազմել $1, 2, 3, 4, 5$-ից՝ ամեն թվանշանը մեկ անգամ։ $5! = 120$։ Նրանցից քանի՞սն են զույգ։ Վերջին թվանշանը պետք է լինի $2$ կամ $4$, իսկ մնացածը կարող են լինել ցանկացած կարգով՝ $2 \\cdot 4! = 48$։

### Վարժություններ

1. Հաշվե՛ք $6!$-ը և $4!$-ը։
2. Պարզեցրե՛ք $\\dfrac{9!}{7!}$։
3. Պարզեցրե՛ք $\\dfrac{(n + 2)!}{(n + 1)!}$։
4. Քանի՞ կարգով կարող են $6$ աշակերտ կանգնել շարքում։
5. Քանի՞ բառ կարելի է կազմել ՍԵՂԱՆ բառի տառերը վերադասավորելով։
6. Քանի՞ եղանակով կարելի է $4$ տարբեր բաժակ դնել $4$ պնակի վրա։
7. Հինգ ընկեր նստում են մեկ շարքում, և նրանցից երկուսն ուզում են նստել միասին։ Քանի՞ եղանակ կա։
8. ԼԱՄՊ բառի տառերի $24$ դասավորություններից քանի՞սն են սկսվում Լ տառով։

### Պատասխաններ

1. $720$ և $24$։
2. $72$։
3. $n + 2$։
4. $720$։
5. $120$։
6. $24$։
7. $4! \\cdot 2 = 48$։
8. $3! = 6$։`,
        ru: `## Факториал

> Произведение всех натуральных чисел от $1$ до $n$ называют **n факториал** и обозначают $n!$:
> $$n! = 1 \\cdot 2 \\cdot 3 \\cdots n, \\qquad 0! = 1, \\quad 1! = 1.$$

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ |
|---|---|---|---|---|---|---|---|
| $n!$ | $1$ | $2$ | $6$ | $24$ | $120$ | $720$ | $5040$ |

Факториалы растут очень быстро: $10! = 3\\,628\\,800$, а $20!$ уже больше $10^{18}$.

Полезное тождество: $n! = n \\cdot (n - 1)!$ — оно позволяет упрощать дроби из факториалов, не вычисляя их.

**Пример 1.** $\\dfrac{8!}{6!} = \\dfrac{8 \\cdot 7 \\cdot 6!}{6!} = 56$.

**Пример 2.** $\\dfrac{10!}{8! \\cdot 2} = \\dfrac{10 \\cdot 9}{2} = 45$.

**Пример 3.** $\\dfrac{(n + 1)!}{n!} = n + 1$.

## Перестановки

> **Перестановкой** $n$ различных предметов называют расположение всех их в ряд. Число перестановок равно
> $$P_n = n!.$$

Почему: первое место можно заполнить $n$ способами, второе $n - 1$, и так далее до одного способа для последнего места. Правило умножения даёт $n!$.

**Пример 4.** Сколькими способами можно расставить $5$ книг на полке? $5! = 120$.

**Пример 5.** Сколькими способами $7$ бегунов могут закончить забег, если ничьих нет? $7! = 5040$.

**Пример 6.** Сколько слов, осмысленных или нет, можно получить, переставляя буквы слова СТОЛ? Все четыре буквы различны, поэтому $4! = 24$.

## Предметы, которые должны стоять вместе

Свяжите предметы, обязанные быть соседями, в один блок, посчитайте перестановки блоков, а затем умножьте на перестановки внутри блока.

**Пример 7.** Пять учеников садятся в ряд; двое из них, Ани и Арам, хотят сидеть рядом. Сколькими способами могут сесть пятеро?

Будем считать пару одним блоком: тогда предметов $4$, что даёт $4! = 24$ порядка, а внутри блока двое могут поменяться местами, что даёт $2! = 2$. Всего $24 \\cdot 2 = 48$ способов.

**Пример 8.** В скольких из $120$ порядков $5$ книг две данные книги стоят **не** рядом? По предыдущей идее вместе они стоят в $48$ порядках, поэтому не рядом — в $120 - 48 = 72$.

**Пример 9.** Сколько пятизначных чисел можно составить из $1, 2, 3, 4, 5$, используя каждую цифру один раз? $5! = 120$. Сколько из них чётных? Последняя цифра должна быть $2$ или $4$, а остальные в любом порядке: $2 \\cdot 4! = 48$.

### Упражнения

1. Вычислите $6!$ и $4!$.
2. Упростите $\\dfrac{9!}{7!}$.
3. Упростите $\\dfrac{(n + 2)!}{(n + 1)!}$.
4. Сколькими способами $6$ учеников могут встать в шеренгу?
5. Сколько слов можно получить, переставляя буквы слова СТОЛБ?
6. Сколькими способами можно поставить $4$ разные чашки на $4$ блюдца?
7. Пять друзей садятся в ряд, и двое из них хотят сидеть вместе. Сколько способов?
8. Сколько из $24$ расстановок букв слова СТОЛ начинаются с буквы С?

### Ответы

1. $720$ и $24$.
2. $72$.
3. $n + 2$.
4. $720$.
5. $120$.
6. $24$.
7. $4! \\cdot 2 = 48$.
8. $3! = 6$.`,
      },
      [
        q(t("The value of 5! equals", "5!-ի արժեքը հավասար է", "Значение 5! равно"), [
          t("120", "120", "120"),
          t("25", "25", "25"),
          t("15", "15", "15"),
        ], 0),
        q(t("The number of permutations of n different objects equals", "n տարբեր առարկաների տեղափոխությունների թիվը հավասար է", "Число перестановок n различных предметов равно"), [
          t("n²", "n²", "n²"),
          t("n!", "n!", "n!"),
          t("2ⁿ", "2ⁿ", "2ⁿ"),
        ], 1),
        q(t("The fraction 9! / 7! equals", "9! / 7! կոտորակը հավասար է", "Дробь 9! / 7! равна"), [
          t("9", "9", "9"),
          t("63", "63", "63"),
          t("72", "72", "72"),
        ], 2),
        q(t("By definition 0! equals", "Ըստ սահմանման 0!-ը հավասար է", "По определению 0! равно"), [
          t("1", "1", "1"),
          t("0", "0", "0"),
          t("it is undefined", "որոշված չէ", "не определено"),
        ], 0),
        q(t("Five pupils sit in a row and two of them must sit together. The number of ways is", "Հինգ աշակերտ նստում են շարքում, և նրանցից երկուսը պետք է նստեն միասին։ Եղանակների թիվն է", "Пятеро учеников садятся в ряд, и двое должны сидеть вместе. Число способов равно"), [
          t("24", "24", "24"),
          t("48", "48", "48"),
          t("120", "120", "120"),
        ], 1),
        q(t("How many five-digit numbers from the digits 1, 2, 3, 4, 5, each used once, are even?", "1, 2, 3, 4, 5 թվանշաններից, ամենը մեկ անգամ, քանի՞ հնգանիշ թիվ է զույգ", "Сколько пятизначных чисел из цифр 1, 2, 3, 4, 5, каждая по одному разу, чётные?"), [
          t("24", "24", "24"),
          t("60", "60", "60"),
          t("48", "48", "48"),
        ], 2),
      ],
    ),
    lesson(
      "arrangements-combinations",
      ["Arrangements and combinations", "Տեղադրություններ և զուգորդություններ", "Размещения и сочетания"],
      {
        en: ["Tell whether the order matters in a given problem", "Use the formulas for the numbers of arrangements and combinations", "Solve problems on choosing teams and committees"],
        hy: ["Ասել՝ տրված խնդրում կարգը կարևոր է, թե ոչ", "Օգտվել տեղադրությունների և զուգորդությունների թվերի բանաձևերից", "Լուծել թիմերի և հանձնաժողովների ընտրության խնդիրներ"],
        ru: ["Определять, важен ли порядок в данной задаче", "Пользоваться формулами числа размещений и сочетаний", "Решать задачи на выбор команд и комиссий"],
      },
      {
        en: `## The main question: does the order matter?

Out of $n$ objects we choose $k$. Everything depends on one question.

| The order | The name | The formula |
|---|---|---|
| matters | **arrangements** | $A_n^k = \\dfrac{n!}{(n - k)!}$ |
| does not matter | **combinations** | $C_n^k = \\dfrac{n!}{k!\\,(n - k)!}$ |

A prize list (first, second, third place) is arrangements; a team of three is combinations. Each combination can be ordered in $k!$ ways, which is exactly why $A_n^k = C_n^k \\cdot k!$.

## Arrangements

> An **arrangement** of $k$ out of $n$ objects is an ordered choice of $k$ different objects.

$$A_n^k = n(n - 1)(n - 2) \\cdots (n - k + 1),$$
a product of $k$ decreasing factors.

**Example 1.** In a class of $20$ pupils a monitor, a deputy and a treasurer are chosen. The number of ways is
$$A_{20}^3 = 20 \\cdot 19 \\cdot 18 = 6840.$$

**Example 2.** How many two-letter codes with different letters can be made from $8$ letters? $A_8^2 = 8 \\cdot 7 = 56$.

## Combinations

> A **combination** of $k$ out of $n$ objects is an unordered choice of $k$ different objects.

**Example 3.** A team of $3$ is chosen from $20$ pupils:
$$C_{20}^3 = \\frac{20 \\cdot 19 \\cdot 18}{3 \\cdot 2 \\cdot 1} = 1140,$$
six times fewer than in Example 1, because the roles no longer differ.

**Example 4.** From $8$ players a pair is chosen to play doubles: $C_8^2 = \\dfrac{8 \\cdot 7}{2} = 28$.

**Example 5.** How many diagonals has a convex decagon? Choose two of the ten vertices in $C_{10}^2 = 45$ ways and subtract the ten sides: $45 - 10 = 35$ diagonals.

## Useful properties

$$C_n^0 = C_n^n = 1, \\qquad C_n^1 = n, \\qquad C_n^k = C_n^{\\,n - k}.$$

The last one is clear: choosing $k$ objects to take is the same as choosing $n - k$ objects to leave.

**Example 6.** $C_{12}^{10} = C_{12}^2 = 66$, which is much quicker than the long product.

## Choices in two groups

**Example 7.** A committee of $2$ boys and $3$ girls is chosen from $6$ boys and $7$ girls. By the multiplication rule
$$C_6^2 \\cdot C_7^3 = 15 \\cdot 35 = 525.$$

### Exercises

1. Compute $A_7^2$ and $C_7^2$.
2. Compute $C_9^3$.
3. Compute $C_{15}^{13}$.
4. In how many ways can a captain and a vice-captain be chosen from $12$ players?
5. In how many ways can a team of $4$ be chosen from $12$ players?
6. How many diagonals has a convex hexagon?
7. A committee of $3$ is chosen from $5$ men and $4$ women so that there is exactly one woman. How many ways?
8. How many straight lines pass through pairs of $7$ points, no three of them on one line?

### Answers

1. $42$ and $21$.
2. $84$.
3. $C_{15}^2 = 105$.
4. $A_{12}^2 = 132$.
5. $C_{12}^4 = 495$.
6. $C_6^2 - 6 = 15 - 6 = 9$.
7. $C_4^1 \\cdot C_5^2 = 4 \\cdot 10 = 40$.
8. $C_7^2 = 21$.`,
        hy: `## Հիմնական հարցը՝ կարգը կարևո՞ր է

$n$ առարկայից ընտրում ենք $k$-ը։ Ամեն ինչ կախված է մեկ հարցից։

| Կարգը | Անվանումը | Բանաձևը |
|---|---|---|
| կարևոր է | **տեղադրություններ** | $A_n^k = \\dfrac{n!}{(n - k)!}$ |
| կարևոր չէ | **զուգորդություններ** | $C_n^k = \\dfrac{n!}{k!\\,(n - k)!}$ |

Մրցանակների ցուցակը (առաջին, երկրորդ, երրորդ տեղ) տեղադրություններ են; երեք հոգու թիմը՝ զուգորդություններ։ Ամեն զուգորդություն կարելի է դասավորել $k!$ եղանակով, հենց դրա համար էլ $A_n^k = C_n^k \\cdot k!$։

## Տեղադրություններ

> $n$ առարկայից $k$-ի **տեղադրություն** է $k$ տարբեր առարկաների կարգավորված ընտրությունը։

$$A_n^k = n(n - 1)(n - 2) \\cdots (n - k + 1),$$
$k$ նվազող արտադրիչների արտադրյալ։

**Օրինակ 1։** $20$ աշակերտ ունեցող դասարանում ընտրվում են ավագ, նրա տեղակալ և գանձապահ։ Եղանակների թիվը
$$A_{20}^3 = 20 \\cdot 19 \\cdot 18 = 6840.$$

**Օրինակ 2։** Քանի՞ երկտառ կոդ՝ տարբեր տառերով, կարելի է կազմել $8$ տառից։ $A_8^2 = 8 \\cdot 7 = 56$։

## Զուգորդություններ

> $n$ առարկայից $k$-ի **զուգորդություն** է $k$ տարբեր առարկաների չկարգավորված ընտրությունը։

**Օրինակ 3։** $20$ աշակերտից ընտրվում է $3$ հոգու թիմ.
$$C_{20}^3 = \\frac{20 \\cdot 19 \\cdot 18}{3 \\cdot 2 \\cdot 1} = 1140,$$
վեց անգամ ավելի քիչ, քան Օրինակ 1-ում, քանի որ դերերն այլևս չեն տարբերվում։

**Օրինակ 4։** $8$ խաղացողից ընտրվում է զույգ՝ կրկնախաղի համար. $C_8^2 = \\dfrac{8 \\cdot 7}{2} = 28$։

**Օրինակ 5։** Քանի՞ անկյունագիծ ունի ուռուցիկ տասանկյունը։ Տասը գագաթից երկուսն ընտրենք $C_{10}^2 = 45$ եղանակով և հանենք տասը կողմը՝ $45 - 10 = 35$ անկյունագիծ։

## Օգտակար հատկություններ

$$C_n^0 = C_n^n = 1, \\qquad C_n^1 = n, \\qquad C_n^k = C_n^{\\,n - k}.$$

Վերջինը պարզ է. $k$ առարկա վերցնելու ընտրությունը նույնն է, ինչ $n - k$ առարկա թողնելու ընտրությունը։

**Օրինակ 6։** $C_{12}^{10} = C_{12}^2 = 66$, ինչը շատ ավելի արագ է, քան երկար արտադրյալը։

## Ընտրություն երկու խմբում

**Օրինակ 7։** $6$ տղայից և $7$ աղջկանից ընտրվում է $2$ տղայի և $3$ աղջկա հանձնաժողով։ Բազմապատկման կանոնով
$$C_6^2 \\cdot C_7^3 = 15 \\cdot 35 = 525.$$

### Վարժություններ

1. Հաշվե՛ք $A_7^2$-ը և $C_7^2$-ը։
2. Հաշվե՛ք $C_9^3$-ը։
3. Հաշվե՛ք $C_{15}^{13}$-ը։
4. Քանի՞ եղանակով կարելի է $12$ խաղացողից ընտրել ավագ և նրա տեղակալ։
5. Քանի՞ եղանակով կարելի է $12$ խաղացողից ընտրել $4$ հոգու թիմ։
6. Քանի՞ անկյունագիծ ունի ուռուցիկ վեցանկյունը։
7. $5$ տղամարդից և $4$ կնոջից ընտրվում է $3$ հոգու հանձնաժողով այնպես, որ լինի ուղիղ մեկ կին։ Քանի՞ եղանակ։
8. Քանի՞ ուղիղ է անցնում $7$ կետի զույգերով, եթե նրանցից ոչ մի երեքը մեկ ուղղի վրա չեն։

### Պատասխաններ

1. $42$ և $21$։
2. $84$։
3. $C_{15}^2 = 105$։
4. $A_{12}^2 = 132$։
5. $C_{12}^4 = 495$։
6. $C_6^2 - 6 = 15 - 6 = 9$։
7. $C_4^1 \\cdot C_5^2 = 4 \\cdot 10 = 40$։
8. $C_7^2 = 21$։`,
        ru: `## Главный вопрос: важен ли порядок?

Из $n$ предметов выбирают $k$. Всё зависит от одного вопроса.

| Порядок | Название | Формула |
|---|---|---|
| важен | **размещения** | $A_n^k = \\dfrac{n!}{(n - k)!}$ |
| не важен | **сочетания** | $C_n^k = \\dfrac{n!}{k!\\,(n - k)!}$ |

Список призёров (первое, второе, третье место) — это размещения; команда из трёх человек — сочетания. Каждое сочетание можно упорядочить $k!$ способами, именно поэтому $A_n^k = C_n^k \\cdot k!$.

## Размещения

> **Размещением** $k$ предметов из $n$ называют упорядоченный выбор $k$ различных предметов.

$$A_n^k = n(n - 1)(n - 2) \\cdots (n - k + 1),$$
произведение $k$ убывающих множителей.

**Пример 1.** В классе из $20$ учеников выбирают старосту, его заместителя и казначея. Число способов равно
$$A_{20}^3 = 20 \\cdot 19 \\cdot 18 = 6840.$$

**Пример 2.** Сколько двухбуквенных кодов с различными буквами можно составить из $8$ букв? $A_8^2 = 8 \\cdot 7 = 56$.

## Сочетания

> **Сочетанием** $k$ предметов из $n$ называют неупорядоченный выбор $k$ различных предметов.

**Пример 3.** Из $20$ учеников выбирают команду из $3$ человек:
$$C_{20}^3 = \\frac{20 \\cdot 19 \\cdot 18}{3 \\cdot 2 \\cdot 1} = 1140,$$
в шесть раз меньше, чем в примере 1, так как роли больше не различаются.

**Пример 4.** Из $8$ игроков выбирают пару для парной игры: $C_8^2 = \\dfrac{8 \\cdot 7}{2} = 28$.

**Пример 5.** Сколько диагоналей у выпуклого десятиугольника? Выберем две из десяти вершин $C_{10}^2 = 45$ способами и вычтем десять сторон: $45 - 10 = 35$ диагоналей.

## Полезные свойства

$$C_n^0 = C_n^n = 1, \\qquad C_n^1 = n, \\qquad C_n^k = C_n^{\\,n - k}.$$

Последнее очевидно: выбрать $k$ предметов, чтобы взять, — то же, что выбрать $n - k$ предметов, чтобы оставить.

**Пример 6.** $C_{12}^{10} = C_{12}^2 = 66$, что намного быстрее длинного произведения.

## Выбор в двух группах

**Пример 7.** Из $6$ мальчиков и $7$ девочек выбирают комиссию из $2$ мальчиков и $3$ девочек. По правилу умножения
$$C_6^2 \\cdot C_7^3 = 15 \\cdot 35 = 525.$$

### Упражнения

1. Вычислите $A_7^2$ и $C_7^2$.
2. Вычислите $C_9^3$.
3. Вычислите $C_{15}^{13}$.
4. Сколькими способами из $12$ игроков можно выбрать капитана и его заместителя?
5. Сколькими способами из $12$ игроков можно выбрать команду из $4$ человек?
6. Сколько диагоналей у выпуклого шестиугольника?
7. Из $5$ мужчин и $4$ женщин выбирают комиссию из $3$ человек так, чтобы в ней была ровно одна женщина. Сколько способов?
8. Сколько прямых проходит через пары из $7$ точек, если никакие три из них не лежат на одной прямой?

### Ответы

1. $42$ и $21$.
2. $84$.
3. $C_{15}^2 = 105$.
4. $A_{12}^2 = 132$.
5. $C_{12}^4 = 495$.
6. $C_6^2 - 6 = 15 - 6 = 9$.
7. $C_4^1 \\cdot C_5^2 = 4 \\cdot 10 = 40$.
8. $C_7^2 = 21$.`,
      },
      [
        q(t("Arrangements differ from combinations because in arrangements", "Տեղադրությունները զուգորդություններից տարբերվում են նրանով, որ տեղադրություններում", "Размещения отличаются от сочетаний тем, что в размещениях"), [
          t("the order of the chosen objects matters", "ընտրված առարկաների կարգը կարևոր է", "порядок выбранных предметов важен"),
          t("the objects may repeat", "առարկաները կարող են կրկնվել", "предметы могут повторяться"),
          t("all the objects are chosen", "ընտրվում են բոլոր առարկաները", "выбираются все предметы"),
        ], 0),
        q(t("The number of combinations of k out of n equals", "n-ից k-ի զուգորդությունների թիվը հավասար է", "Число сочетаний k из n равно"), [
          t("n! / (n - k)!", "n! / (n - k)!", "n! / (n - k)!"),
          t("n! / (k! · (n - k)!)", "n! / (k! · (n - k)!)", "n! / (k! · (n - k)!)"),
          t("n! · k!", "n! · k!", "n! · k!"),
        ], 1),
        q(t("The value of C(9, 3) equals", "C(9, 3)-ի արժեքը հավասար է", "Значение C(9, 3) равно"), [
          t("504", "504", "504"),
          t("27", "27", "27"),
          t("84", "84", "84"),
        ], 2),
        q(t("Choosing a team of 3 from 20 pupils is counted by", "20 աշակերտից 3 հոգու թիմ ընտրելը հաշվվում է", "Выбор команды из 3 человек из 20 учеников подсчитывают"), [
          t("combinations", "զուգորդություններով", "сочетаниями"),
          t("arrangements", "տեղադրություններով", "размещениями"),
          t("permutations", "տեղափոխություններով", "перестановками"),
        ], 0),
        q(t("The property C(n, k) = C(n, n - k) holds because", "C(n, k) = C(n, n - k) հատկությունը ճիշտ է, քանի որ", "Свойство C(n, k) = C(n, n - k) верно, потому что"), [
          t("the factorials cancel", "ֆակտորիալները կրճատվում են", "факториалы сокращаются"),
          t("choosing what to take is the same as choosing what to leave", "ինչ վերցնել ընտրելը նույնն է, ինչ ինչ թողնել ընտրելը", "выбрать, что взять, — то же, что выбрать, что оставить"),
          t("k is always smaller than n", "k-ն միշտ n-ից փոքր է", "k всегда меньше n"),
        ], 1),
        q(t("How many diagonals has a convex hexagon?", "Քանի՞ անկյունագիծ ունի ուռուցիկ վեցանկյունը", "Сколько диагоналей у выпуклого шестиугольника?"), [
          t("15", "15", "15"),
          t("12", "12", "12"),
          t("9", "9", "9"),
        ], 2),
      ],
    ),
    lesson(
      "classical-probability",
      ["The classical definition of probability", "Հավանականության դասական սահմանումը", "Классическое определение вероятности"],
      {
        en: ["Compute a probability as a ratio of counts of outcomes", "Use the rule for the probability of the opposite event", "Use combinatorics inside a probability problem"],
        hy: ["Հաշվել հավանականությունն որպես ելքերի քանակների հարաբերություն", "Օգտվել հակադիր պատահույթի հավանականության կանոնից", "Կիրառել կոմբինատորիկան հավանականության խնդրի ներսում"],
        ru: ["Вычислять вероятность как отношение числа исходов", "Пользоваться правилом вероятности противоположного события", "Применять комбинаторику внутри вероятностной задачи"],
      },
      {
        en: `## Outcomes and events

In a random experiment, such as rolling a die, the possible results are called **outcomes**. An **event** is a set of outcomes, for example "an even number comes up".

Outcomes are **equally likely** when the experiment gives no reason to prefer one to another: a fair die, a fair coin, a well shuffled pack.

> **Classical definition.** If an experiment has $n$ equally likely outcomes and $m$ of them make the event $A$ happen, then
> $$P(A) = \\frac{m}{n}.$$

The outcomes that make the event happen are called **favourable**.

Since $0 \\le m \\le n$, every probability satisfies $0 \\le P(A) \\le 1$. An impossible event has probability $0$, a certain event has probability $1$. Probabilities are often given as per cents: $0{.}25 = 25\\%$.

## Simple examples

**Example 1.** A die is rolled. The probability of an even number is $\\dfrac{3}{6} = 0{.}5$, because the favourable outcomes are $2, 4, 6$.

**Example 2.** The probability of a number greater than $4$ is $\\dfrac{2}{6} = \\dfrac{1}{3}$.

**Example 3.** A box has $5$ white and $7$ black balls, and one ball is drawn. Then
$$P(\\text{white}) = \\frac{5}{12}, \\qquad P(\\text{black}) = \\frac{7}{12}.$$

**Example 4.** A card is drawn from $36$ cards. The probability that it is a queen is $\\dfrac{4}{36} = \\dfrac{1}{9}$.

## The opposite event

> If $\\bar A$ is the event "A does not happen", then
> $$P(\\bar A) = 1 - P(A).$$

This is the shortest road whenever the words "at least one" appear.

**Example 5.** Two coins are tossed. The outcomes are HH, HT, TH, TT. The probability of at least one head is $1 - P(\\text{no heads}) = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}$.

**Example 6.** Two dice are rolled; there are $36$ equally likely outcomes. The probability that the sum is $7$ is $\\dfrac{6}{36} = \\dfrac{1}{6}$, because the favourable pairs are $(1;6), (2;5), (3;4), (4;3), (5;2), (6;1)$.

## Probability with combinatorics

When the counting is hard, use combinations.

**Example 7.** From $10$ products, $3$ of which are faulty, two are taken at random. What is the probability that both are good?

All choices: $C_{10}^2 = 45$. Favourable: $C_7^2 = 21$. So
$$P = \\frac{21}{45} = \\frac{7}{15} \\approx 0{.}47.$$

**Example 8.** In a lottery $6$ numbers out of $36$ are drawn. The probability of guessing all six is
$$\\frac{1}{C_{36}^6} = \\frac{1}{1\\,947\\,792},$$
about one chance in two million.

### Exercises

1. A die is rolled. Find the probability of getting a $3$.
2. A die is rolled. Find the probability of an odd number.
3. A box has $4$ red and $6$ green balls. Find the probability of drawing a red one.
4. In the same box, find the probability that the ball is not red.
5. A coin is tossed twice. Find the probability of two tails.
6. Two dice are rolled. Find the probability that the sum is $12$.
7. From $8$ products, $2$ of which are faulty, one is taken. Find the probability that it is good.
8. From $9$ products, $2$ of which are faulty, two are taken. Find the probability that both are good.

### Answers

1. $\\dfrac{1}{6}$.
2. $\\dfrac{1}{2}$.
3. $0{.}4$.
4. $0{.}6$.
5. $\\dfrac{1}{4}$.
6. $\\dfrac{1}{36}$.
7. $\\dfrac{6}{8} = 0{.}75$.
8. $\\dfrac{C_7^2}{C_9^2} = \\dfrac{21}{36} = \\dfrac{7}{12}$.`,
        hy: `## Ելքեր և պատահույթներ

Պատահական փորձում, օրինակ՝ խորանարդիկ գցելիս, հնարավոր արդյունքները կոչվում են **ելքեր**։ **Պատահույթը** ելքերի բազմություն է, օրինակ՝ «ընկնում է զույգ թիվ»։

Ելքերը **հավասարահավանական** են, երբ փորձն ոչ մի պատճառ չի տալիս մեկին մյուսից նախապատվել. ազնիվ խորանարդիկ, ազնիվ մետաղադրամ, լավ խառնված տրցակ։

> **Դասական սահմանում։** Եթե փորձն ունի $n$ հավասարահավանական ելք, և նրանցից $m$-ը բերում են $A$ պատահույթի կատարմանը, ապա
> $$P(A) = \\frac{m}{n}.$$

Պատահույթի կատարմանը բերող ելքերը կոչվում են **նպաստավոր**։

Քանի որ $0 \\le m \\le n$, ամեն հավանականություն բավարարում է $0 \\le P(A) \\le 1$։ Անհնարին պատահույթի հավանականությունը $0$ է, հավաստի պատահույթի՝ $1$։ Հավանականությունները հաճախ տրվում են տոկոսներով՝ $0{,}25 = 25\\%$։

## Պարզ օրինակներ

**Օրինակ 1։** Գցվում է խորանարդիկ։ Զույգ թվի հավանականությունը $\\dfrac{3}{6} = 0{,}5$ է, քանի որ նպաստավոր ելքերն են $2, 4, 6$։

**Օրինակ 2։** $4$-ից մեծ թվի հավանականությունը $\\dfrac{2}{6} = \\dfrac{1}{3}$ է։

**Օրինակ 3։** Տուփում կա $5$ սպիտակ և $7$ սև գնդիկ, և հանվում է մեկ գնդիկ։ Ապա
$$P(\\text{սպիտակ}) = \\frac{5}{12}, \\qquad P(\\text{սև}) = \\frac{7}{12}.$$

**Օրինակ 4։** $36$ քարտից հանվում է մեկը։ Հավանականությունը, որ դա տամն է, $\\dfrac{4}{36} = \\dfrac{1}{9}$ է։

## Հակադիր պատահույթը

> Եթե $\\bar A$-ն «A-ն չի կատարվում» պատահույթն է, ապա
> $$P(\\bar A) = 1 - P(A).$$

Սա ամենակարճ ճանապարհն է, երբ հայտնվում են «գոնե մեկ» բառերը։

**Օրինակ 5։** Գցվում են երկու մետաղադրամ։ Ելքերն են ԳԳ, ԳԹ, ԹԳ, ԹԹ, որտեղ Գ-ն գերբն է, Թ-ն՝ թիվը։ Գոնե մեկ գերբի հավանականությունը $1 - P(\\text{գերբ չկա}) = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}$ է։

**Օրինակ 6։** Գցվում են երկու խորանարդիկ; կա $36$ հավասարահավանական ելք։ Հավանականությունը, որ գումարը $7$ է, $\\dfrac{6}{36} = \\dfrac{1}{6}$ է, քանի որ նպաստավոր զույգերն են $(1;6), (2;5), (3;4), (4;3), (5;2), (6;1)$։

## Հավանականություն կոմբինատորիկայով

Երբ հաշվելը դժվար է, օգտվե՛ք զուգորդություններից։

**Օրինակ 7։** $10$ արտադրանքից, որոնցից $3$-ը խոտան է, պատահականորեն վերցվում է երկուսը։ Որքա՞ն է հավանականությունը, որ երկուսն էլ լավն են։

Բոլոր ընտրությունները՝ $C_{10}^2 = 45$։ Նպաստավորները՝ $C_7^2 = 21$։ Ուստի
$$P = \\frac{21}{45} = \\frac{7}{15} \\approx 0{,}47.$$

**Օրինակ 8։** Վիճակախաղում $36$-ից հանվում է $6$ թիվ։ Բոլոր վեցը գուշակելու հավանականությունը
$$\\frac{1}{C_{36}^6} = \\frac{1}{1\\,947\\,792},$$
մոտ մեկ հնարավորություն երկու միլիոնից։

### Վարժություններ

1. Գցվում է խորանարդիկ։ Գտե՛ք $3$ ստանալու հավանականությունը։
2. Գցվում է խորանարդիկ։ Գտե՛ք կենտ թվի հավանականությունը։
3. Տուփում կա $4$ կարմիր և $6$ կանաչ գնդիկ։ Գտե՛ք կարմիր հանելու հավանականությունը։
4. Նույն տուփում գտե՛ք հավանականությունը, որ գնդիկը կարմիր չէ։
5. Մետաղադրամը գցվում է երկու անգամ։ Գտե՛ք երկու թվի հավանականությունը։
6. Գցվում են երկու խորանարդիկ։ Գտե՛ք հավանականությունը, որ գումարը $12$ է։
7. $8$ արտադրանքից, որոնցից $2$-ը խոտան է, վերցվում է մեկը։ Գտե՛ք հավանականությունը, որ այն լավն է։
8. $9$ արտադրանքից, որոնցից $2$-ը խոտան է, վերցվում է երկուսը։ Գտե՛ք հավանականությունը, որ երկուսն էլ լավն են։

### Պատասխաններ

1. $\\dfrac{1}{6}$։
2. $\\dfrac{1}{2}$։
3. $0{,}4$։
4. $0{,}6$։
5. $\\dfrac{1}{4}$։
6. $\\dfrac{1}{36}$։
7. $\\dfrac{6}{8} = 0{,}75$։
8. $\\dfrac{C_7^2}{C_9^2} = \\dfrac{21}{36} = \\dfrac{7}{12}$։`,
        ru: `## Исходы и события

В случайном опыте, например при броске кубика, возможные результаты называют **исходами**. **Событие** — это набор исходов, например «выпало чётное число».

Исходы **равновозможны**, когда опыт не даёт причин предпочесть один другому: честный кубик, честная монета, хорошо перемешанная колода.

> **Классическое определение.** Если опыт имеет $n$ равновозможных исходов и $m$ из них приводят к наступлению события $A$, то
> $$P(A) = \\frac{m}{n}.$$

Исходы, приводящие к наступлению события, называют **благоприятными**.

Так как $0 \\le m \\le n$, любая вероятность удовлетворяет $0 \\le P(A) \\le 1$. У невозможного события вероятность $0$, у достоверного $1$. Вероятности часто записывают в процентах: $0{,}25 = 25\\%$.

## Простые примеры

**Пример 1.** Бросают кубик. Вероятность чётного числа равна $\\dfrac{3}{6} = 0{,}5$, так как благоприятные исходы $2, 4, 6$.

**Пример 2.** Вероятность числа больше $4$ равна $\\dfrac{2}{6} = \\dfrac{1}{3}$.

**Пример 3.** В коробке $5$ белых и $7$ чёрных шаров, вынимают один шар. Тогда
$$P(\\text{белый}) = \\frac{5}{12}, \\qquad P(\\text{чёрный}) = \\frac{7}{12}.$$

**Пример 4.** Из $36$ карт вынимают одну. Вероятность того, что это дама, равна $\\dfrac{4}{36} = \\dfrac{1}{9}$.

## Противоположное событие

> Если $\\bar A$ — событие «A не наступило», то
> $$P(\\bar A) = 1 - P(A).$$

Это самый короткий путь всегда, когда появляются слова «хотя бы один».

**Пример 5.** Бросают две монеты. Исходы: ОО, ОР, РО, РР, где О — орёл, Р — решка. Вероятность хотя бы одного орла равна $1 - P(\\text{нет орлов}) = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}$.

**Пример 6.** Бросают два кубика; равновозможных исходов $36$. Вероятность того, что сумма равна $7$, составляет $\\dfrac{6}{36} = \\dfrac{1}{6}$, так как благоприятные пары: $(1;6), (2;5), (3;4), (4;3), (5;2), (6;1)$.

## Вероятность с комбинаторикой

Когда подсчёт сложен, пользуются сочетаниями.

**Пример 7.** Из $10$ изделий, из которых $3$ бракованные, берут наудачу два. Какова вероятность того, что оба хорошие?

Все выборы: $C_{10}^2 = 45$. Благоприятные: $C_7^2 = 21$. Поэтому
$$P = \\frac{21}{45} = \\frac{7}{15} \\approx 0{,}47.$$

**Пример 8.** В лотерее из $36$ чисел выбирают $6$. Вероятность угадать все шесть равна
$$\\frac{1}{C_{36}^6} = \\frac{1}{1\\,947\\,792},$$
примерно один шанс из двух миллионов.

### Упражнения

1. Бросают кубик. Найдите вероятность получить $3$.
2. Бросают кубик. Найдите вероятность нечётного числа.
3. В коробке $4$ красных и $6$ зелёных шаров. Найдите вероятность вынуть красный.
4. В той же коробке найдите вероятность того, что шар не красный.
5. Монету бросают дважды. Найдите вероятность двух решек.
6. Бросают два кубика. Найдите вероятность того, что сумма равна $12$.
7. Из $8$ изделий, из которых $2$ бракованные, берут одно. Найдите вероятность того, что оно хорошее.
8. Из $9$ изделий, из которых $2$ бракованные, берут два. Найдите вероятность того, что оба хорошие.

### Ответы

1. $\\dfrac{1}{6}$.
2. $\\dfrac{1}{2}$.
3. $0{,}4$.
4. $0{,}6$.
5. $\\dfrac{1}{4}$.
6. $\\dfrac{1}{36}$.
7. $\\dfrac{6}{8} = 0{,}75$.
8. $\\dfrac{C_7^2}{C_9^2} = \\dfrac{21}{36} = \\dfrac{7}{12}$.`,
      },
      [
        q(t("The classical probability of an event equals", "Պատահույթի դասական հավանականությունը հավասար է", "Классическая вероятность события равна"), [
          t("the number of favourable outcomes divided by the number of all outcomes", "նպաստավոր ելքերի թիվը բաժանած բոլոր ելքերի թվին", "числу благоприятных исходов, делённому на число всех исходов"),
          t("the number of all outcomes divided by the favourable ones", "բոլոր ելքերի թիվը բաժանած նպաստավորներին", "числу всех исходов, делённому на благоприятные"),
          t("the number of favourable outcomes", "նպաստավոր ելքերի թիվը", "числу благоприятных исходов"),
        ], 0),
        q(t("Any probability P(A) satisfies", "Ամեն P(A) հավանականություն բավարարում է", "Любая вероятность P(A) удовлетворяет"), [
          t("P(A) > 1", "P(A) > 1", "P(A) > 1"),
          t("0 ≤ P(A) ≤ 1", "0 ≤ P(A) ≤ 1", "0 ≤ P(A) ≤ 1"),
          t("P(A) < 0", "P(A) < 0", "P(A) < 0"),
        ], 1),
        q(t("A die is rolled. The probability of an even number equals", "Գցվում է խորանարդիկ։ Զույգ թվի հավանականությունը հավասար է", "Бросают кубик. Вероятность чётного числа равна"), [
          t("1/6", "1/6", "1/6"),
          t("1/3", "1/3", "1/3"),
          t("0,5", "0,5", "0,5"),
        ], 2),
        q(t("The probability of the opposite event equals", "Հակադիր պատահույթի հավանականությունը հավասար է", "Вероятность противоположного события равна"), [
          t("1 - P(A)", "1 - P(A)", "1 - P(A)"),
          t("P(A) - 1", "P(A) - 1", "P(A) - 1"),
          t("1 / P(A)", "1 / P(A)", "1 / P(A)"),
        ], 0),
        q(t("Two dice are rolled. The probability that the sum is 12 equals", "Գցվում են երկու խորանարդիկ։ Հավանականությունը, որ գումարը 12 է, հավասար է", "Бросают два кубика. Вероятность того, что сумма равна 12, равна"), [
          t("1/6", "1/6", "1/6"),
          t("1/36", "1/36", "1/36"),
          t("1/12", "1/12", "1/12"),
        ], 1),
        q(t("The probability of a certain event equals", "Հավաստի պատահույթի հավանականությունը հավասար է", "Вероятность достоверного события равна"), [
          t("0", "0", "0"),
          t("0,5", "0,5", "0,5"),
          t("1", "1", "1"),
        ], 2),
      ],
    ),
    lesson(
      "exam-review-9",
      ["Review of the ninth-grade course", "Իններորդ դասարանի դասընթացի կրկնություն", "Повторение курса девятого класса"],
      {
        en: ["Recall the main formulas of the year in one table", "Choose the right method for a given exercise", "Work through a mixed set of tasks like those of an examination"],
        hy: ["Մեկ աղյուսակում հիշել տարվա հիմնական բանաձևերը", "Ընտրել ճիշտ մեթոդը տրված վարժության համար", "Աշխատել քննականին նման խառն առաջադրանքների հավաքածուի վրա"],
        ru: ["Вспомнить основные формулы года в одной таблице", "Выбирать правильный метод для данного задания", "Пройти смешанный набор задач, похожих на экзаменационные"],
      },
      {
        en: `## The formulas of the year

| Topic | Formula |
|---|---|
| vertex of a parabola | $x_0 = -\\dfrac{b}{2a}$, $y_0 = f(x_0)$ |
| discriminant | $D = b^2 - 4ac$ |
| roots of a quadratic | $x = \\dfrac{-b \\pm \\sqrt{D}}{2a}$ |
| n-th term, arithmetic | $a_n = a_1 + (n - 1)d$ |
| sum, arithmetic | $S_n = \\dfrac{(a_1 + a_n)n}{2}$ |
| n-th term, geometric | $b_n = b_1 q^{\\,n - 1}$ |
| sum, geometric | $S_n = \\dfrac{b_1(q^n - 1)}{q - 1}$ |
| infinite sum, $\\lvert q\\rvert < 1$ | $S = \\dfrac{b_1}{1 - q}$ |
| permutations | $P_n = n!$ |
| arrangements | $A_n^k = \\dfrac{n!}{(n - k)!}$ |
| combinations | $C_n^k = \\dfrac{n!}{k!(n - k)!}$ |
| probability | $P(A) = \\dfrac{m}{n}$ |

## Which method to choose

| The task says | Do this |
|---|---|
| find the domain | look for denominators and even roots |
| solve a quadratic inequality | sketch the parabola |
| solve an inequality with a product or a fraction | use the interval method |
| the equation has only even powers | substitute $u = x^2$ |
| the variable is in a denominator | write the restrictions first |
| the terms change by the same amount | arithmetic progression |
| the terms change by the same per cent | geometric progression |
| the order of the chosen objects matters | arrangements, not combinations |

## Worked examples

**Example 1.** Build $y = x^2 + 2x - 3$ and read off everything.

Branches up; $x_0 = -1$, $y_0 = -4$, vertex $(-1; -4)$; zeros $-3$ and $1$; meets the $y$-axis at $(0; -3)$; range $y \\ge -4$; decreases on $(-\\infty; -1]$ and increases on $[-1; +\\infty)$; $y < 0$ on $(-3; 1)$.

**Example 2.** Solve $\\dfrac{x - 1}{x + 2} \\le 0$.

Zeros: $1$ from the numerator, $-2$ forbidden. The quotient is negative between them, so the answer is $(-2; 1]$.

**Example 3.** Solve $x^4 - 5x^2 + 4 = 0$.

With $u = x^2$: $u = 1$ or $u = 4$, so $x = \\pm 1$ and $x = \\pm 2$. Four roots.

**Example 4.** In an arithmetic progression $a_1 = 3$, $d = 5$. Find $a_{20}$ and $S_{20}$.

$a_{20} = 3 + 19 \\cdot 5 = 98$ and $S_{20} = \\dfrac{(3 + 98) \\cdot 20}{2} = 1010$.

**Example 5.** A deposit of $300\\,000$ drams grows by $5\\%$ a year. Find the balance after two years.

$300\\,000 \\cdot 1{.}05^2 = 300\\,000 \\cdot 1{.}1025 = 330\\,750$ drams.

**Example 6.** From $6$ pupils a team of $2$ is chosen; what is the probability that a given pupil is in the team?

All teams: $C_6^2 = 15$. Teams with that pupil: $5$. So $P = \\dfrac{5}{15} = \\dfrac{1}{3}$.

### Exercises

1. Find the vertex and the zeros of $y = x^2 - 2x - 8$.
2. Find the domain of $y = \\dfrac{1}{x^2 - 16}$.
3. Solve $x^2 - x - 12 < 0$.
4. Solve $\\dfrac{x + 1}{x - 4} > 0$.
5. Solve $x^4 - 10x^2 + 9 = 0$.
6. In an arithmetic progression $a_1 = 7$ and $d = 4$. Find $a_{15}$ and $S_{15}$.
7. In a geometric progression $b_1 = 3$ and $q = 2$. Find $b_6$ and $S_6$.
8. From $5$ boys and $4$ girls a pair is chosen. Find the probability that it is a boy and a girl.

### Answers

1. Vertex $(1; -9)$; zeros $-2$ and $4$.
2. All $x$ except $-4$ and $4$.
3. $(-3; 4)$.
4. $(-\\infty; -1) \\cup (4; +\\infty)$.
5. $x = \\pm 1$ and $x = \\pm 3$.
6. $a_{15} = 63$, $S_{15} = 525$.
7. $b_6 = 96$, $S_6 = 189$.
8. $\\dfrac{5 \\cdot 4}{C_9^2} = \\dfrac{20}{36} = \\dfrac{5}{9}$.`,
        hy: `## Տարվա բանաձևերը

| Թեմա | Բանաձև |
|---|---|
| պարաբոլի գագաթ | $x_0 = -\\dfrac{b}{2a}$, $y_0 = f(x_0)$ |
| դիսկրիմինանտ | $D = b^2 - 4ac$ |
| քառակուսային հավասարման արմատներ | $x = \\dfrac{-b \\pm \\sqrt{D}}{2a}$ |
| n-րդ անդամ, թվաբանական | $a_n = a_1 + (n - 1)d$ |
| գումար, թվաբանական | $S_n = \\dfrac{(a_1 + a_n)n}{2}$ |
| n-րդ անդամ, երկրաչափական | $b_n = b_1 q^{\\,n - 1}$ |
| գումար, երկրաչափական | $S_n = \\dfrac{b_1(q^n - 1)}{q - 1}$ |
| անվերջ գումար, $\\lvert q\\rvert < 1$ | $S = \\dfrac{b_1}{1 - q}$ |
| տեղափոխություններ | $P_n = n!$ |
| տեղադրություններ | $A_n^k = \\dfrac{n!}{(n - k)!}$ |
| զուգորդություններ | $C_n^k = \\dfrac{n!}{k!(n - k)!}$ |
| հավանականություն | $P(A) = \\dfrac{m}{n}$ |

## Ո՞ր մեթոդն ընտրել

| Առաջադրանքն ասում է | Արե՛ք սա |
|---|---|
| գտնել որոշման տիրույթը | փնտրե՛ք հայտարարներ և զույգ արմատներ |
| լուծել քառակուսային անհավասարում | գծե՛ք պարաբոլի էսքիզը |
| լուծել անհավասարում արտադրյալով կամ կոտորակով | կիրառե՛ք միջակայքերի մեթոդը |
| հավասարումն ունի միայն զույգ աստիճաններ | տեղադրե՛ք $u = x^2$ |
| փոփոխականը հայտարարում է | նախ գրե՛ք սահմանափակումները |
| անդամները փոխվում են նույն մեծությամբ | թվաբանական պրոգրեսիա |
| անդամները փոխվում են նույն տոկոսով | երկրաչափական պրոգրեսիա |
| ընտրված առարկաների կարգը կարևոր է | տեղադրություններ, ոչ զուգորդություններ |

## Լուծված օրինակներ

**Օրինակ 1։** Կառուցենք $y = x^2 + 2x - 3$-ը և կարդանք ամեն ինչ։

Ճյուղերը վերև; $x_0 = -1$, $y_0 = -4$, գագաթը $(-1; -4)$; զրոները $-3$ և $1$; $Oy$ առանցքը հատում է $(0; -3)$ կետում; արժեքների բազմությունը $y \\ge -4$; նվազում է $(-\\infty; -1]$-ում և աճում $[-1; +\\infty)$-ում; $y < 0$՝ $(-3; 1)$-ում։

**Օրինակ 2։** Լուծենք $\\dfrac{x - 1}{x + 2} \\le 0$։

Զրոները՝ $1$ համարիչից, $-2$՝ արգելված։ Քաղորդը բացասական է նրանց միջև, ուստի պատասխանը $(-2; 1]$ է։

**Օրինակ 3։** Լուծենք $x^4 - 5x^2 + 4 = 0$։

$u = x^2$ դեպքում՝ $u = 1$ կամ $u = 4$, ուստի $x = \\pm 1$ և $x = \\pm 2$։ Չորս արմատ։

**Օրինակ 4։** Թվաբանական պրոգրեսիայում $a_1 = 3$, $d = 5$։ Գտնենք $a_{20}$-ը և $S_{20}$-ը։

$a_{20} = 3 + 19 \\cdot 5 = 98$ և $S_{20} = \\dfrac{(3 + 98) \\cdot 20}{2} = 1010$։

**Օրինակ 5։** $300\\,000$ դրամ ավանդն աճում է $5\\%$-ով տարեկան։ Գտնենք մնացորդն երկու տարի անց։

$300\\,000 \\cdot 1{,}05^2 = 300\\,000 \\cdot 1{,}1025 = 330\\,750$ դրամ։

**Օրինակ 6։** $6$ աշակերտից ընտրվում է $2$ հոգու թիմ; որքա՞ն է հավանականությունը, որ տրված աշակերտը թիմում է։

Բոլոր թիմերը՝ $C_6^2 = 15$։ Այդ աշակերտով թիմերը՝ $5$։ Ուստի $P = \\dfrac{5}{15} = \\dfrac{1}{3}$։

### Վարժություններ

1. Գտե՛ք $y = x^2 - 2x - 8$-ի գագաթը և զրոները։
2. Գտե՛ք $y = \\dfrac{1}{x^2 - 16}$-ի որոշման տիրույթը։
3. Լուծե՛ք $x^2 - x - 12 < 0$։
4. Լուծե՛ք $\\dfrac{x + 1}{x - 4} > 0$։
5. Լուծե՛ք $x^4 - 10x^2 + 9 = 0$։
6. Թվաբանական պրոգրեսիայում $a_1 = 7$ և $d = 4$։ Գտե՛ք $a_{15}$-ը և $S_{15}$-ը։
7. Երկրաչափական պրոգրեսիայում $b_1 = 3$ և $q = 2$։ Գտե՛ք $b_6$-ը և $S_6$-ը։
8. $5$ տղայից և $4$ աղջկանից ընտրվում է զույգ։ Գտե՛ք հավանականությունը, որ դա տղա և աղջիկ է։

### Պատասխաններ

1. Գագաթը $(1; -9)$; զրոները $-2$ և $4$։
2. Բոլոր $x$-երը բացի $-4$-ից և $4$-ից։
3. $(-3; 4)$։
4. $(-\\infty; -1) \\cup (4; +\\infty)$։
5. $x = \\pm 1$ և $x = \\pm 3$։
6. $a_{15} = 63$, $S_{15} = 525$։
7. $b_6 = 96$, $S_6 = 189$։
8. $\\dfrac{5 \\cdot 4}{C_9^2} = \\dfrac{20}{36} = \\dfrac{5}{9}$։`,
        ru: `## Формулы года

| Тема | Формула |
|---|---|
| вершина параболы | $x_0 = -\\dfrac{b}{2a}$, $y_0 = f(x_0)$ |
| дискриминант | $D = b^2 - 4ac$ |
| корни квадратного уравнения | $x = \\dfrac{-b \\pm \\sqrt{D}}{2a}$ |
| n-й член, арифметическая | $a_n = a_1 + (n - 1)d$ |
| сумма, арифметическая | $S_n = \\dfrac{(a_1 + a_n)n}{2}$ |
| n-й член, геометрическая | $b_n = b_1 q^{\\,n - 1}$ |
| сумма, геометрическая | $S_n = \\dfrac{b_1(q^n - 1)}{q - 1}$ |
| бесконечная сумма, $\\lvert q\\rvert < 1$ | $S = \\dfrac{b_1}{1 - q}$ |
| перестановки | $P_n = n!$ |
| размещения | $A_n^k = \\dfrac{n!}{(n - k)!}$ |
| сочетания | $C_n^k = \\dfrac{n!}{k!(n - k)!}$ |
| вероятность | $P(A) = \\dfrac{m}{n}$ |

## Какой метод выбрать

| В задании сказано | Делайте так |
|---|---|
| найти область определения | ищите знаменатели и корни чётной степени |
| решить квадратное неравенство | начертите эскиз параболы |
| решить неравенство с произведением или дробью | примените метод интервалов |
| в уравнении только чётные степени | подставьте $u = x^2$ |
| переменная в знаменателе | сначала запишите ограничения |
| члены меняются на одну и ту же величину | арифметическая прогрессия |
| члены меняются на одни и те же проценты | геометрическая прогрессия |
| порядок выбранных предметов важен | размещения, а не сочетания |

## Разобранные примеры

**Пример 1.** Построим $y = x^2 + 2x - 3$ и прочитаем всё.

Ветви вверх; $x_0 = -1$, $y_0 = -4$, вершина $(-1; -4)$; нули $-3$ и $1$; ось $Oy$ пересекает в точке $(0; -3)$; область значений $y \\ge -4$; убывает на $(-\\infty; -1]$ и возрастает на $[-1; +\\infty)$; $y < 0$ на $(-3; 1)$.

**Пример 2.** Решим $\\dfrac{x - 1}{x + 2} \\le 0$.

Нули: $1$ от числителя, $-2$ запрещено. Частное отрицательно между ними, поэтому ответ $(-2; 1]$.

**Пример 3.** Решим $x^4 - 5x^2 + 4 = 0$.

При $u = x^2$: $u = 1$ или $u = 4$, поэтому $x = \\pm 1$ и $x = \\pm 2$. Четыре корня.

**Пример 4.** В арифметической прогрессии $a_1 = 3$, $d = 5$. Найдём $a_{20}$ и $S_{20}$.

$a_{20} = 3 + 19 \\cdot 5 = 98$ и $S_{20} = \\dfrac{(3 + 98) \\cdot 20}{2} = 1010$.

**Пример 5.** Вклад $300\\,000$ драмов растёт на $5\\%$ в год. Найдём остаток через два года.

$300\\,000 \\cdot 1{,}05^2 = 300\\,000 \\cdot 1{,}1025 = 330\\,750$ драмов.

**Пример 6.** Из $6$ учеников выбирают команду из $2$ человек; какова вероятность того, что данный ученик окажется в команде?

Всех команд: $C_6^2 = 15$. Команд с этим учеником: $5$. Поэтому $P = \\dfrac{5}{15} = \\dfrac{1}{3}$.

### Упражнения

1. Найдите вершину и нули $y = x^2 - 2x - 8$.
2. Найдите область определения $y = \\dfrac{1}{x^2 - 16}$.
3. Решите $x^2 - x - 12 < 0$.
4. Решите $\\dfrac{x + 1}{x - 4} > 0$.
5. Решите $x^4 - 10x^2 + 9 = 0$.
6. В арифметической прогрессии $a_1 = 7$ и $d = 4$. Найдите $a_{15}$ и $S_{15}$.
7. В геометрической прогрессии $b_1 = 3$ и $q = 2$. Найдите $b_6$ и $S_6$.
8. Из $5$ мальчиков и $4$ девочек выбирают пару. Найдите вероятность того, что это мальчик и девочка.

### Ответы

1. Вершина $(1; -9)$; нули $-2$ и $4$.
2. Все $x$, кроме $-4$ и $4$.
3. $(-3; 4)$.
4. $(-\\infty; -1) \\cup (4; +\\infty)$.
5. $x = \\pm 1$ и $x = \\pm 3$.
6. $a_{15} = 63$, $S_{15} = 525$.
7. $b_6 = 96$, $S_6 = 189$.
8. $\\dfrac{5 \\cdot 4}{C_9^2} = \\dfrac{20}{36} = \\dfrac{5}{9}$.`,
      },
      [
        q(t("The abscissa of the vertex of a parabola is found by the formula", "Պարաբոլի գագաթի աբսցիսը գտնվում է բանաձևով", "Абсциссу вершины параболы находят по формуле"), [
          t("x₀ = -b / (2a)", "x₀ = -b / (2a)", "x₀ = -b / (2a)"),
          t("x₀ = b² - 4ac", "x₀ = b² - 4ac", "x₀ = b² - 4ac"),
          t("x₀ = -c / b", "x₀ = -c / b", "x₀ = -c / b"),
        ], 0),
        q(t("Which method fits an inequality with a fraction?", "Ո՞ր մեթոդն է հարմար կոտորակով անհավասարման համար", "Какой метод подходит для неравенства с дробью?"), [
          t("the formula for the sum of a progression", "պրոգրեսիայի գումարի բանաձևը", "формула суммы прогрессии"),
          t("the interval method", "միջակայքերի մեթոդը", "метод интервалов"),
          t("the substitution u = x²", "u = x² տեղադրությունը", "подстановка u = x²"),
        ], 1),
        q(t("The solution of x² - x - 12 < 0 is", "x² - x - 12 < 0 անհավասարման լուծումն է", "Решение x² - x - 12 < 0 —"), [
          t("x < -3 or x > 4", "x < -3 կամ x > 4", "x < -3 или x > 4"),
          t("only x = 0", "միայն x = 0", "только x = 0"),
          t("the interval from -3 to 4", "-3-ից 4 միջակայքը", "промежуток от -3 до 4"),
        ], 2),
        q(t("For a₁ = 7 and d = 4 the term a₁₅ equals", "a₁ = 7 և d = 4 դեպքում a₁₅ անդամը հավասար է", "При a₁ = 7 и d = 4 член a₁₅ равен"), [
          t("63", "63", "63"),
          t("67", "67", "67"),
          t("56", "56", "56"),
        ], 0),
        q(t("For b₁ = 3 and q = 2 the sum S₆ equals", "b₁ = 3 և q = 2 դեպքում S₆ գումարը հավասար է", "При b₁ = 3 и q = 2 сумма S₆ равна"), [
          t("96", "96", "96"),
          t("189", "189", "189"),
          t("192", "192", "192"),
        ], 1),
        q(t("A deposit of 300 000 drams at 5 % a year, compound, gives after two years", "300 000 դրամ ավանդը տարեկան 5 %-ով, բարդ տոկոսներով, երկու տարի անց տալիս է", "Вклад 300 000 драмов под 5 % в год со сложными процентами через два года даёт"), [
          t("315 000 drams", "315 000 դրամ", "315 000 драмов"),
          t("330 000 drams", "330 000 դրամ", "330 000 драмов"),
          t("330 750 drams", "330 750 դրամ", "330 750 драмов"),
        ], 2),
      ],
    ),
  ],
};
