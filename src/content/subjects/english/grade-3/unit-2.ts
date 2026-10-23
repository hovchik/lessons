import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("My school", "Իմ դպրոցը", "Моя школа"),
  summary: t(
    "Classroom objects, a/an, plurals, this/that, «there is / there are», classroom commands.",
    "Դասարանի առարկաներ, a/an, հոգնակի, this/that, «there is / there are», հրահանգներ։",
    "Школьные предметы, a/an, множественное число, this/that, «there is / there are», команды в классе.",
  ),
  lessons: [
    lesson(
      "classroom-objects",
      ["In my schoolbag: a pen, a book, a ruler", "Իմ պայուսակում․ pen, book, ruler", "В моём портфеле: pen, book, ruler"],
      {
        en: ["Name 12 classroom objects", "Say what colour things are: «My pen is blue»", "Ask «What's this?» and answer «It's a…»"],
        hy: ["Անվանել դասարանի 12 առարկա", "Ասել առարկաների գույնը՝ «My pen is blue»", "Հարցնել «What's this?» և պատասխանել «It's a…»"],
        ru: ["Называть 12 школьных предметов", "Говорить, какого цвета вещи: «My pen is blue»", "Спрашивать «What's this?» и отвечать «It's a…»"],
      },
      {
        en: `## What's in my schoolbag?

| Word | What for | Word | What for |
|---|---|---|---|
| a pen | for writing in ink | a pencil | for writing and drawing |
| a book | to read | an exercise book | to write in |
| a ruler | to draw straight lines | a rubber (an eraser) | to rub out |
| a pencil case | for pens and pencils | a schoolbag | to carry books |
| a desk | a school table | a chair | to sit on |
| a board | the teacher writes on it | scissors | to cut paper |

## What's this?

> **A:** What's this?\\
> **B:** It's a ruler.\\
> **A:** What colour is it?\\
> **B:** It's green.

## My things

*My pen is blue. My pencil case is red. My schoolbag is big.*

### Exercises

1. What do you use to cut paper?
2. What do you write in: a book or an exercise book?
3. Complete: *What's ___? — It's a pencil.*
4. Answer about your own pencil case: *What colour is it?*
5. Find the odd one out: *pen, pencil, chair, rubber*.
6. Translate the idea: the teacher writes on the ___.
7. Write three sentences about your schoolbag.

### Answers

1. Scissors. 2. An exercise book. 3. this. 4. Example: It's red. 5. chair (it is furniture, the others are for writing). 6. board. 7. Example: My schoolbag is blue. It's big. My books are in it.`,
        hy: `## Ի՞նչ կա իմ պայուսակում

| Անգլերեն | Հայերեն |
|---|---|
| a pen | գրիչ |
| a pencil | մատիտ |
| a book | գիրք |
| an exercise book | տետր |
| a ruler | քանոն |
| a rubber (an eraser) | ռետին |
| a pencil case | գրչատուփ |
| a schoolbag | պայուսակ |
| a desk | նստարան, գրասեղան |
| a chair | աթոռ |
| a board | գրատախտակ |
| scissors | մկրատ |

## What's this?

> **A:** What's this? (Սա ի՞նչ է)\\
> **B:** It's a ruler. (Քանոն է)\\
> **A:** What colour is it? (Ի՞նչ գույնի է)\\
> **B:** It's green. (Կանաչ է)

## Իմ իրերը

*My pen is blue. My pencil case is red. My schoolbag is big.*

### Վարժություններ

1. Ինչո՞վ ենք թուղթ կտրում (անգլերեն)։
2. Ինչո՞ւմ ենք գրում՝ book, թե՞ exercise book։
3. Լրացրո՛ւ. *What's ___? — It's a pencil.*
4. Պատասխանի՛ր քո գրչատուփի մասին. *What colour is it?*
5. Գտի՛ր ավելորդը. *pen, pencil, chair, rubber*։
6. Ուսուցիչը գրում է ___-ի վրա (անգլերեն)։
7. Գրի՛ր երեք նախադասություն քո պայուսակի մասին։

### Պատասխաններ

1. Scissors։ 2. An exercise book։ 3. this։ 4. Օրինակ՝ It's red. 5. chair (կահույք է, մյուսները գրելու համար են)։ 6. board։ 7. Օրինակ՝ My schoolbag is blue. It's big. My books are in it.`,
        ru: `## Что в моём портфеле?

| По-английски | По-русски |
|---|---|
| a pen | ручка |
| a pencil | карандаш |
| a book | книга |
| an exercise book | тетрадь |
| a ruler | линейка |
| a rubber (an eraser) | ластик |
| a pencil case | пенал |
| a schoolbag | портфель |
| a desk | парта |
| a chair | стул |
| a board | доска |
| scissors | ножницы |

## What's this?

> **A:** What's this? (Что это?)\\
> **B:** It's a ruler. (Это линейка.)\\
> **A:** What colour is it? (Какого она цвета?)\\
> **B:** It's green. (Зелёная.)

## Мои вещи

*My pen is blue. My pencil case is red. My schoolbag is big.*

### Упражнения

1. Чем режут бумагу (по-английски)?
2. В чём пишут: book или exercise book?
3. Дополни: *What's ___? — It's a pencil.*
4. Ответь про свой пенал: *What colour is it?*
5. Найди лишнее: *pen, pencil, chair, rubber*.
6. Учитель пишет на ___ (по-английски).
7. Напиши три предложения о своём портфеле.

### Ответы

1. Scissors. 2. An exercise book. 3. this. 4. Например: It's red. 5. chair (мебель, остальное — для письма). 6. board. 7. Например: My schoolbag is blue. It's big. My books are in it.`,
      },
      [
        q(t("«a rubber» is used to…", "«a rubber»-ով…", "«a rubber» нужен, чтобы…"), [t("rub out mistakes", "ջնջում ենք", "стирать ошибки"), t("cut paper", "թուղթ ենք կտրում", "резать бумагу"), t("draw lines", "գիծ ենք քաշում", "чертить линии")], 0),
        q(t("We cut paper with…", "Թուղթը կտրում ենք…", "Бумагу режут…"), [t("a ruler", "a ruler", "a ruler"), t("scissors", "scissors", "scissors"), t("a pen", "a pen", "a pen")], 1),
        q(t("«What's this?» — «___ a book.»", "«What's this?» — «___ a book.»", "«What's this?» — «___ a book.»"), [t("Is", "Is", "Is"), t("This", "This", "This"), t("It's", "It's", "It's")], 2),
        q(t("The teacher writes on the…", "Ուսուցիչը գրում է…", "Учитель пишет на…"), [t("board", "board", "board"), t("chair", "chair", "chair"), t("pencil case", "pencil case", "pencil case")], 0),
        q(t("Which is NOT for writing?", "Ո՞րը գրելու համար չէ։", "Что НЕ для письма?"), [t("pen", "pen", "pen"), t("desk", "desk", "desk"), t("pencil", "pencil", "pencil")], 1),
        q(t("«What colour is it?» — ?", "«What colour is it?» — ?", "«What colour is it?» — ?"), [t("It's a pen.", "It's a pen.", "It's a pen."), t("It's big.", "It's big.", "It's big."), t("It's blue.", "It's blue.", "It's blue.")], 2),
      ],
    ),
    lesson(
      "a-an",
      ["A or an?", "A, թե՞ an", "A или an?"],
      {
        en: ["Use «a» before a consonant sound and «an» before a vowel sound", "Use a/an only with one thing", "Say what things are: «It's an apple»"],
        hy: ["«a» գործածել բաղաձայն հնչյունից առաջ, «an»՝ ձայնավորից առաջ", "a/an գործածել միայն մեկ առարկայի համար", "Ասել, թե ինչ է առարկան՝ «It's an apple»"],
        ru: ["Ставить «a» перед согласным звуком и «an» перед гласным", "Употреблять a/an только с одним предметом", "Говорить, что это: «It's an apple»"],
      },
      {
        en: `## One thing: a or an

When we talk about **one** thing for the first time, we put **a** or **an** in front of it.

| a + consonant sound | an + vowel sound |
|---|---|
| **a** pen | **an** apple |
| **a** bag | **an** egg |
| **a** cat | **an** ink pot |
| **a** desk | **an** orange |
| **a** ruler | **an** umbrella |

**An** is easier to say before a vowel: *an apple*, not *a apple*.

## Not with two or more

*a book* — but *two books*, *three books*. No **a** with plurals!

## With adjectives

Look at the **next word**: *a egg* ✗ → *an egg* ✓, but *a big egg* ✓ (b is a consonant). *an orange* ✓, *a red orange* ✓.

### Exercises

Write **a** or **an**.

1. ___ dog
2. ___ elephant
3. ___ ice cream
4. ___ book
5. ___ old car
6. ___ big apple
7. Correct the mistakes: *It's a orange. I have an pen.*

### Answers

1. a. 2. an. 3. an. 4. a. 5. an. 6. a (big starts with b). 7. It's an orange. I have a pen.`,
        hy: `## Մեկ առարկա՝ a կամ an

Երբ առաջին անգամ խոսում ենք **մեկ** առարկայի մասին, նրանից առաջ դնում ենք **a** կամ **an**։ Հայերենում սա մոտավորապես «մի» բառն է՝ «մի գրիչ»։

| a + բաղաձայն հնչյուն | an + ձայնավոր հնչյուն |
|---|---|
| **a** pen | **an** apple |
| **a** bag | **an** egg |
| **a** cat | **an** ink pot |
| **a** desk | **an** orange |
| **a** ruler | **an** umbrella |

**An**-ը ավելի հեշտ է արտասանել ձայնավորից առաջ՝ *an apple*, ոչ թե *a apple*։

## Ոչ երկու և ավելի առարկաների համար

*a book*, բայց *two books*, *three books*։ Հոգնակիի հետ **a** չենք դնում։

## Ածականի հետ

Նայի՛ր **հաջորդ բառին**. *an egg* ✓, բայց *a big egg* ✓ (b-ն բաղաձայն է)։

### Վարժություններ

Գրի՛ր **a** կամ **an**։

1. ___ dog
2. ___ elephant
3. ___ ice cream
4. ___ book
5. ___ old car
6. ___ big apple
7. Ուղղի՛ր սխալները. *It's a orange. I have an pen.*

### Պատասխաններ

1. a։ 2. an։ 3. an։ 4. a։ 5. an։ 6. a (big-ը սկսվում է b-ով)։ 7. It's an orange. I have a pen.`,
        ru: `## Один предмет: a или an

Когда мы впервые говорим об **одном** предмете, перед ним ставим **a** или **an** (неопределённый артикль). По-русски его нет, но по смыслу это «один, какой-то».

| a + согласный звук | an + гласный звук |
|---|---|
| **a** pen | **an** apple |
| **a** bag | **an** egg |
| **a** cat | **an** ink pot |
| **a** desk | **an** orange |
| **a** ruler | **an** umbrella |

**An** легче произносить перед гласной: *an apple*, а не *a apple*.

## Не с двумя и больше

*a book*, но *two books*, *three books*. С множественным числом **a** не ставим!

## С прилагательным

Смотри на **следующее слово**: *an egg* ✓, но *a big egg* ✓ (b — согласная).

### Упражнения

Напиши **a** или **an**.

1. ___ dog
2. ___ elephant
3. ___ ice cream
4. ___ book
5. ___ old car
6. ___ big apple
7. Исправь ошибки: *It's a orange. I have an pen.*

### Ответы

1. a. 2. an. 3. an. 4. a. 5. an. 6. a (big начинается с b). 7. It's an orange. I have a pen.`,
      },
      [
        q(t("___ apple", "___ apple", "___ apple"), [t("a", "a", "a"), t("an", "an", "an"), t("—", "—", "—")], 1),
        q(t("___ ruler", "___ ruler", "___ ruler"), [t("a", "a", "a"), t("an", "an", "an"), t("two", "two", "two")], 0),
        q(t("Which is correct?", "Ո՞րն է ճիշտ։", "Что правильно?"), [t("a books", "a books", "a books"), t("an books", "an books", "an books"), t("two books", "two books", "two books")], 2),
        q(t("___ big egg", "___ big egg", "___ big egg"), [t("a", "a", "a"), t("an", "an", "an"), t("—", "—", "—")], 0),
        q(t("We use «an» before…", "«an» դնում ենք…", "«an» ставим перед…"), [t("a consonant sound", "բաղաձայն հնչյունից առաջ", "согласным звуком"), t("a vowel sound", "ձայնավոր հնչյունից առաջ", "гласным звуком"), t("two or more things", "երկու և ավելի առարկաներից առաջ", "двумя и более предметами")], 1),
        q(t("It's ___ umbrella.", "It's ___ umbrella.", "It's ___ umbrella."), [t("a", "a", "a"), t("the two", "the two", "the two"), t("an", "an", "an")], 2),
      ],
    ),
    lesson(
      "plural-s",
      ["One book, two books: plurals", "One book, two books․ հոգնակի թիվ", "One book, two books: множественное число"],
      {
        en: ["Make plurals with -s and -es", "Know the special plurals: children, men, women, mice, teeth, feet", "Count things in sentences: «I have got three pencils»"],
        hy: ["Հոգնակի կազմել -s և -es վերջավորություններով", "Իմանալ բացառությունները՝ children, men, women, mice, teeth, feet", "Հաշվել առարկաները նախադասություններում"],
        ru: ["Образовывать множественное число с -s и -es", "Знать особые формы: children, men, women, mice, teeth, feet", "Считать предметы в предложениях: «I have got three pencils»"],
      },
      {
        en: `## Add -s

Most nouns: add **-s**. *a pen → two pens, a cat → three cats, a book → four books.*

## Add -es

After **s, ss, sh, ch, x**, add **-es** (we say an extra syllable): *a bus → buses, a box → boxes, a watch → watches, a dish → dishes, a glass → glasses.*

## -y after a consonant → -ies

*a baby → babies, a lady → ladies.* But after a vowel just add -s: *a boy → boys, a toy → toys.*

## Special plurals

| One | Many |
|---|---|
| a child | children |
| a man | men |
| a woman | women |
| a mouse | mice |
| a tooth | teeth |
| a foot | feet |

### Exercises

Write the plural.

1. a desk → two ___
2. a box → three ___
3. a toy → five ___
4. a baby → two ___
5. a child → four ___
6. a foot → two ___
7. Complete: *I have got three ___ (pencil) and two ___ (ruler).*

### Answers

1. desks. 2. boxes. 3. toys. 4. babies. 5. children. 6. feet. 7. pencils, rulers.`,
        hy: `## Ավելացրո՛ւ -s

Գոյականների մեծ մասին ավելացնում ենք **-s**՝ *a pen → two pens, a cat → three cats, a book → four books*։

## Ավելացրո՛ւ -es

**s, ss, sh, ch, x**-ից հետո ավելացնում ենք **-es** (լսվում է ևս մեկ վանկ)՝ *a bus → buses, a box → boxes, a watch → watches, a dish → dishes, a glass → glasses*։

## Բաղաձայնից հետո -y → -ies

*a baby → babies, a lady → ladies*։ Բայց ձայնավորից հետո պարզապես ավելացնում ենք -s՝ *a boy → boys, a toy → toys*։

## Բացառություններ

| Եզակի | Հոգնակի | Նշանակություն |
|---|---|---|
| a child | children | երեխա |
| a man | men | տղամարդ |
| a woman | women | կին |
| a mouse | mice | մուկ |
| a tooth | teeth | ատամ |
| a foot | feet | ոտնաթաթ |

### Վարժություններ

Գրի՛ր հոգնակին։

1. a desk → two ___
2. a box → three ___
3. a toy → five ___
4. a baby → two ___
5. a child → four ___
6. a foot → two ___
7. Լրացրո՛ւ. *I have got three ___ (pencil) and two ___ (ruler).*

### Պատասխաններ

1. desks։ 2. boxes։ 3. toys։ 4. babies։ 5. children։ 6. feet։ 7. pencils, rulers։`,
        ru: `## Добавь -s

К большинству существительных добавляем **-s**: *a pen → two pens, a cat → three cats, a book → four books.*

## Добавь -es

После **s, ss, sh, ch, x** добавляем **-es** (слышен лишний слог): *a bus → buses, a box → boxes, a watch → watches, a dish → dishes, a glass → glasses.*

## -y после согласной → -ies

*a baby → babies, a lady → ladies.* А после гласной просто -s: *a boy → boys, a toy → toys.*

## Особые формы

| Один | Много | Перевод |
|---|---|---|
| a child | children | ребёнок |
| a man | men | мужчина |
| a woman | women | женщина |
| a mouse | mice | мышь |
| a tooth | teeth | зуб |
| a foot | feet | ступня |

### Упражнения

Напиши множественное число.

1. a desk → two ___
2. a box → three ___
3. a toy → five ___
4. a baby → two ___
5. a child → four ___
6. a foot → two ___
7. Дополни: *I have got three ___ (pencil) and two ___ (ruler).*

### Ответы

1. desks. 2. boxes. 3. toys. 4. babies. 5. children. 6. feet. 7. pencils, rulers.`,
      },
      [
        q(t("a bus → two ___", "a bus → two ___", "a bus → two ___"), [t("buss", "buss", "buss"), t("buses", "buses", "buses"), t("busies", "busies", "busies")], 1),
        q(t("a child → three ___", "a child → three ___", "a child → three ___"), [t("children", "children", "children"), t("childs", "childs", "childs"), t("childes", "childes", "childes")], 0),
        q(t("a toy → two ___", "a toy → two ___", "a toy → two ___"), [t("toies", "toies", "toies"), t("toyes", "toyes", "toyes"), t("toys", "toys", "toys")], 2),
        q(t("a mouse → two ___", "a mouse → two ___", "a mouse → two ___"), [t("mouses", "mouses", "mouses"), t("mice", "mice", "mice"), t("mices", "mices", "mices")], 1),
        q(t("a baby → two ___", "a baby → two ___", "a baby → two ___"), [t("babies", "babies", "babies"), t("babys", "babys", "babys"), t("babyes", "babyes", "babyes")], 0),
        q(t("a tooth → many ___", "a tooth → many ___", "a tooth → many ___"), [t("tooths", "tooths", "tooths"), t("toothes", "toothes", "toothes"), t("teeth", "teeth", "teeth")], 2),
      ],
    ),
    lesson(
      "this-that",
      ["This, that, these, those", "This, that, these, those", "This, that, these, those"],
      {
        en: ["Use this/these for things near you and that/those for things far away", "Match this/that with one thing and these/those with many", "Ask «What are these?» and answer «They're…»"],
        hy: ["this/these՝ մոտ առարկաների, that/those՝ հեռու առարկաների համար", "this/that՝ մեկ առարկայի, these/those՝ շատերի համար", "Հարցնել «What are these?» և պատասխանել «They're…»"],
        ru: ["Употреблять this/these для близких предметов, that/those для далёких", "this/that — с одним предметом, these/those — с несколькими", "Спрашивать «What are these?» и отвечать «They're…»"],
      },
      {
        en: `## Near or far? One or many?

| | Near (here) | Far (there) |
|---|---|---|
| **One** | **this** pen | **that** pen |
| **Many** | **these** pens | **those** pens |

## Questions and answers

> **What's this?** — It's a pencil.\\
> **What's that?** — It's a clock.\\
> **What are these?** — They're books.\\
> **What are those?** — They're birds.

For one thing we answer **It's…**, for many **They're…**.

## Remember

- *this book* but *these books* — the noun changes too.
- **These** sounds like [ðiːz], **this** like [ðɪs].

### Exercises

1. Near, one: ___ apple.
2. Far, many: ___ trees.
3. Near, many: ___ pencils.
4. Far, one: ___ car.
5. Answer: *What are these?* (rulers)
6. Correct: *This books are new.*
7. Point to things in the room and say two sentences with **this** and two with **that**.

### Answers

1. this. 2. those. 3. these. 4. that. 5. They're rulers. 6. These books are new. 7. Example: This is my desk. That is the door.`,
        hy: `## Մո՞տ, թե՞ հեռու։ Մե՞կ, թե՞ շատ

| | Մոտ (այստեղ) | Հեռու (այնտեղ) |
|---|---|---|
| **Մեկ** | **this** pen՝ այս գրիչը | **that** pen՝ այն գրիչը |
| **Շատ** | **these** pens՝ այս գրիչները | **those** pens՝ այն գրիչները |

## Հարցեր և պատասխաններ

> **What's this?** — It's a pencil.\\
> **What's that?** — It's a clock.\\
> **What are these?** — They're books.\\
> **What are those?** — They're birds.

Մեկ առարկայի դեպքում պատասխանում ենք **It's…**, շատերի դեպքում՝ **They're…**։

## Հիշի՛ր

- *this book*, բայց *these books*. գոյականն էլ է փոխվում։
- **these**-ը հնչում է [ðiːz], **this**-ը՝ [ðɪs]։

### Վարժություններ

1. Մոտ, մեկ. ___ apple։
2. Հեռու, շատ. ___ trees։
3. Մոտ, շատ. ___ pencils։
4. Հեռու, մեկ. ___ car։
5. Պատասխանի՛ր. *What are these?* (rulers)
6. Ուղղի՛ր. *This books are new.*
7. Ցույց տուր սենյակի առարկաները և ասա՛ երկու նախադասություն **this**-ով, երկուսը՝ **that**-ով։

### Պատասխաններ

1. this։ 2. those։ 3. these։ 4. that։ 5. They're rulers. 6. These books are new. 7. Օրինակ՝ This is my desk. That is the door.`,
        ru: `## Близко или далеко? Один или много?

| | Близко (здесь) | Далеко (там) |
|---|---|---|
| **Один** | **this** pen — эта ручка | **that** pen — та ручка |
| **Много** | **these** pens — эти ручки | **those** pens — те ручки |

## Вопросы и ответы

> **What's this?** — It's a pencil.\\
> **What's that?** — It's a clock.\\
> **What are these?** — They're books.\\
> **What are those?** — They're birds.

Про один предмет отвечаем **It's…**, про много — **They're…**.

## Запомни

- *this book*, но *these books* — существительное тоже меняется.
- **these** звучит [ðiːz], **this** — [ðɪs].

### Упражнения

1. Близко, один: ___ apple.
2. Далеко, много: ___ trees.
3. Близко, много: ___ pencils.
4. Далеко, один: ___ car.
5. Ответь: *What are these?* (rulers)
6. Исправь: *This books are new.*
7. Покажи на предметы в комнате и скажи два предложения с **this** и два с **that**.

### Ответы

1. this. 2. those. 3. these. 4. that. 5. They're rulers. 6. These books are new. 7. Например: This is my desk. That is the door.`,
      },
      [
        q(t("One thing, near you:", "Մեկ առարկա, մոտ է։", "Один предмет, близко:"), [t("this", "this", "this"), t("those", "those", "those"), t("these", "these", "these")], 0),
        q(t("Many things, far away:", "Շատ առարկաներ, հեռու են։", "Много предметов, далеко:"), [t("that", "that", "that"), t("these", "these", "these"), t("those", "those", "those")], 2),
        q(t("___ books are new. (near)", "___ books are new. (մոտ)", "___ books are new. (близко)"), [t("This", "This", "This"), t("These", "These", "These"), t("That", "That", "That")], 1),
        q(t("«What are those?» — ?", "«What are those?» — ?", "«What are those?» — ?"), [t("It's a bird.", "It's a bird.", "It's a bird."), t("They're birds.", "They're birds.", "They're birds."), t("This is birds.", "This is birds.", "This is birds.")], 1),
        q(t("___ is my house over there.", "___ is my house over there.", "___ is my house over there."), [t("That", "That", "That"), t("These", "These", "These"), t("Those", "Those", "Those")], 0),
        q(t("The plural of «this» is…", "«this»-ի հոգնակին է…", "Множественное число от «this» —"), [t("those", "those", "those"), t("thises", "thises", "thises"), t("these", "these", "these")], 2),
      ],
    ),
    lesson(
      "there-is-are",
      ["There is / There are", "There is / There are", "There is / There are"],
      {
        en: ["Say what is in a place with «There is» (one) and «There are» (many)", "Make negatives and questions: There isn't…, Is there…?", "Describe a classroom in four sentences"],
        hy: ["Ասել, թե ինչ կա ինչ-որ տեղում՝ «There is» (մեկ) և «There are» (շատ)", "Կազմել ժխտում և հարց՝ There isn't…, Is there…?", "Չորս նախադասությամբ նկարագրել դասարանը"],
        ru: ["Говорить, что где находится: «There is» (одно) и «There are» (много)", "Строить отрицания и вопросы: There isn't…, Is there…?", "Описывать класс четырьмя предложениями"],
      },
      {
        en: `## What is in the classroom?

| One | Many |
|---|---|
| **There is** a board. | **There are** twenty desks. |
| **There's** a clock on the wall. | **There are** two windows. |

## Negative

**There isn't** a computer. **There aren't** any plants.

## Questions

| Question | Yes | No |
|---|---|---|
| **Is there** a map? | Yes, there is. | No, there isn't. |
| **Are there** any books? | Yes, there are. | No, there aren't. |

## How many?

> **How many** chairs **are there**? — There are twenty-five chairs.

### Exercises

1. There ___ a teacher in the classroom.
2. There ___ six windows.
3. Make negative: *There is a cat.*
4. Make a question: *There are pencils in the box.*
5. Answer: *Is there a board in your classroom?*
6. Correct: *There is three books on the desk.*
7. Describe your classroom in four sentences.

### Answers

1. is. 2. are. 3. There isn't a cat. 4. Are there any pencils in the box? 5. Yes, there is. 6. There are three books on the desk. 7. Example: There is a board. There are twenty desks. There is a clock. There are two windows.`,
        hy: `## Ի՞նչ կա դասարանում

**There is / there are** նշանակում է «կա, կան»։

| Մեկ | Շատ |
|---|---|
| **There is** a board. (Գրատախտակ կա։) | **There are** twenty desks. (Քսան նստարան կա։) |
| **There's** a clock on the wall. | **There are** two windows. |

## Ժխտում

**There isn't** a computer. **There aren't** any plants.

## Հարց

| Հարց | Այո | Ոչ |
|---|---|---|
| **Is there** a map? | Yes, there is. | No, there isn't. |
| **Are there** any books? | Yes, there are. | No, there aren't. |

## Քանի՞սը

> **How many** chairs **are there**? — There are twenty-five chairs.

### Վարժություններ

1. There ___ a teacher in the classroom.
2. There ___ six windows.
3. Դարձրո՛ւ ժխտական. *There is a cat.*
4. Կազմի՛ր հարց. *There are pencils in the box.*
5. Պատասխանի՛ր. *Is there a board in your classroom?*
6. Ուղղի՛ր. *There is three books on the desk.*
7. Նկարագրի՛ր քո դասարանը չորս նախադասությամբ։

### Պատասխաններ

1. is։ 2. are։ 3. There isn't a cat. 4. Are there any pencils in the box? 5. Yes, there is. 6. There are three books on the desk. 7. Օրինակ՝ There is a board. There are twenty desks. There is a clock. There are two windows.`,
        ru: `## Что есть в классе?

**There is / there are** значит «есть, находится». Такие предложения по-русски часто переводят с конца: *There is a clock on the wall* — «На стене висят часы».

| Одно | Много |
|---|---|
| **There is** a board. | **There are** twenty desks. |
| **There's** a clock on the wall. | **There are** two windows. |

## Отрицание

**There isn't** a computer. **There aren't** any plants.

## Вопросы

| Вопрос | Да | Нет |
|---|---|---|
| **Is there** a map? | Yes, there is. | No, there isn't. |
| **Are there** any books? | Yes, there are. | No, there aren't. |

## Сколько?

> **How many** chairs **are there**? — There are twenty-five chairs.

### Упражнения

1. There ___ a teacher in the classroom.
2. There ___ six windows.
3. Сделай отрицание: *There is a cat.*
4. Задай вопрос: *There are pencils in the box.*
5. Ответь: *Is there a board in your classroom?*
6. Исправь: *There is three books on the desk.*
7. Опиши свой класс четырьмя предложениями.

### Ответы

1. is. 2. are. 3. There isn't a cat. 4. Are there any pencils in the box? 5. Yes, there is. 6. There are three books on the desk. 7. Например: There is a board. There are twenty desks. There is a clock. There are two windows.`,
      },
      [
        q(t("There ___ two doors.", "There ___ two doors.", "There ___ two doors."), [t("is", "is", "is"), t("are", "are", "are"), t("am", "am", "am")], 1),
        q(t("There ___ a map on the wall.", "There ___ a map on the wall.", "There ___ a map on the wall."), [t("is", "is", "is"), t("are", "are", "are"), t("be", "be", "be")], 0),
        q(t("«Is there a clock?» — «No, …»", "«Is there a clock?» — «No, …»", "«Is there a clock?» — «No, …»"), [t("there aren't.", "there aren't.", "there aren't."), t("it isn't there.", "it isn't there.", "it isn't there."), t("there isn't.", "there isn't.", "there isn't.")], 2),
        q(t("Which question is correct?", "Ո՞ր հարցն է ճիշտ։", "Какой вопрос правильный?"), [t("Are there any books?", "Are there any books?", "Are there any books?"), t("Is there any books?", "Is there any books?", "Is there any books?"), t("There are books?", "There are books?", "There are books?")], 0),
        q(t("How many ___ there?", "How many ___ there?", "How many ___ there?"), [t("desks is", "desks is", "desks is"), t("desk are", "desk are", "desk are"), t("desks are", "desks are", "desks are")], 2),
        q(t("The short form of «there is» is…", "«there is»-ի կարճ ձևն է…", "Краткая форма «there is» —"), [t("there's", "there's", "there's"), t("theres'", "theres'", "theres'"), t("ther's", "ther's", "ther's")], 0),
      ],
    ),
    lesson(
      "classroom-language",
      ["Classroom language: open your books, listen, repeat", "Դասարանային խոսք․ open your books, listen, repeat", "Язык урока: open your books, listen, repeat"],
      {
        en: ["Understand and follow 12 classroom instructions", "Make polite requests: «Can I…, please?», «Sorry, I don't understand»", "Give a negative command with «Don't…»"],
        hy: ["Հասկանալ և կատարել դասարանի 12 հրահանգ", "Քաղաքավարի խնդրել՝ «Can I…, please?», «Sorry, I don't understand»", "Արգելել «Don't…»-ով"],
        ru: ["Понимать и выполнять 12 команд на уроке", "Вежливо просить: «Can I…, please?», «Sorry, I don't understand»", "Запрещать с помощью «Don't…»"],
      },
      {
        en: `## The teacher says

| Instruction | What you do |
|---|---|
| Stand up. / Sit down. | you stand / you sit |
| Open your books. / Close your books. | you open / close the book |
| Listen. | you listen carefully |
| Repeat after me. | you say the same words |
| Look at the board. | you look at the board |
| Write the date. | you write today's date |
| Work in pairs. | you work with a partner |
| Put up your hand. | you raise your hand |
| Be quiet, please. | you stop talking |
| Come to the board. | you go to the board |

## Don't…

**Don't** + verb tells you **not** to do something: *Don't talk. Don't run in the classroom.*

## The pupil says

- **Can I go out, please?**
- **Can I have a pencil, please?**
- **Sorry, I don't understand.**
- **Can you repeat, please?**
- **How do you say … in English?**

### Exercises

1. The teacher wants you to raise your hand. What does she say?
2. What does «Repeat after me» mean? Explain in your own words.
3. Make a negative command: *Run!* → ___
4. You haven't got a ruler. Ask politely.
5. You didn't hear the teacher. What do you say?
6. Match: *Open your books* / *Close your books* — which one comes at the end of the lesson?
7. Play "Teacher says": give three instructions to a friend.

### Answers

1. Put up your hand. 2. Say the same words after the teacher. 3. Don't run! 4. Can I have a ruler, please? 5. Can you repeat, please? 6. Close your books. 7. Example: Stand up. Look at the board. Sit down.`,
        hy: `## Ուսուցիչն ասում է

| Հրահանգ | Նշանակություն |
|---|---|
| Stand up. / Sit down. | Կանգնի՛ր։ / Նստի՛ր։ |
| Open your books. / Close your books. | Բացե՛ք / փակե՛ք գրքերը։ |
| Listen. | Լսե՛ք։ |
| Repeat after me. | Կրկնե՛ք ինձնից հետո։ |
| Look at the board. | Նայե՛ք գրատախտակին։ |
| Write the date. | Գրե՛ք ամսաթիվը։ |
| Work in pairs. | Աշխատե՛ք զույգերով։ |
| Put up your hand. | Բարձրացրե՛ք ձեռքը։ |
| Be quiet, please. | Լռությո՛ւն, խնդրում եմ։ |
| Come to the board. | Արի՛ գրատախտակի մոտ։ |

## Don't…

**Don't** + բայ՝ արգելք՝ *Don't talk.* (Մի՛ խոսիր։) *Don't run in the classroom.* (Դասարանում մի՛ վազիր։)

## Աշակերտն ասում է

- **Can I go out, please?**՝ Կարո՞ղ եմ դուրս գալ։
- **Can I have a pencil, please?**՝ Կարո՞ղ եմ մատիտ վերցնել։
- **Sorry, I don't understand.**՝ Ներեցեք, չեմ հասկանում։
- **Can you repeat, please?**՝ Կկրկնե՞ք, խնդրում եմ։
- **How do you say … in English?**՝ Ինչպե՞ս է … անգլերեն։

### Վարժություններ

1. Ուսուցիչն ուզում է, որ ձեռք բարձրացնես։ Ի՞նչ է ասում։
2. Ի՞նչ է նշանակում «Repeat after me»։
3. Կազմի՛ր արգելք. *Run!* → ___
4. Քանոն չունես։ Քաղաքավարի խնդրի՛ր։
5. Չլսեցիր ուսուցչին։ Ի՞նչ ես ասում։
6. *Open your books* և *Close your books*. ո՞րն է ասվում դասի վերջում։
7. Խաղա՛ «Teacher says». ընկերոջդ տո՛ւր երեք հրահանգ։

### Պատասխաններ

1. Put up your hand. 2. Կրկնել ուսուցչից հետո։ 3. Don't run! 4. Can I have a ruler, please? 5. Can you repeat, please? 6. Close your books. 7. Օրինակ՝ Stand up. Look at the board. Sit down.`,
        ru: `## Учитель говорит

| Команда | Перевод |
|---|---|
| Stand up. / Sit down. | Встаньте. / Сядьте. |
| Open your books. / Close your books. | Откройте / закройте книги. |
| Listen. | Слушайте. |
| Repeat after me. | Повторяйте за мной. |
| Look at the board. | Посмотрите на доску. |
| Write the date. | Запишите дату. |
| Work in pairs. | Работайте в парах. |
| Put up your hand. | Поднимите руку. |
| Be quiet, please. | Тише, пожалуйста. |
| Come to the board. | Выйди к доске. |

## Don't…

**Don't** + глагол — запрет: *Don't talk.* (Не разговаривай.) *Don't run in the classroom.* (Не бегай в классе.)

## Ученик говорит

- **Can I go out, please?** — Можно выйти?
- **Can I have a pencil, please?** — Можно карандаш?
- **Sorry, I don't understand.** — Извините, я не понимаю.
- **Can you repeat, please?** — Повторите, пожалуйста.
- **How do you say … in English?** — Как сказать … по-английски?

### Упражнения

1. Учитель хочет, чтобы ты поднял руку. Что он говорит?
2. Что значит «Repeat after me»?
3. Сделай запрет: *Run!* → ___
4. У тебя нет линейки. Вежливо попроси.
5. Ты не расслышал учителя. Что скажешь?
6. *Open your books* и *Close your books*: что говорят в конце урока?
7. Поиграй в «Teacher says»: дай другу три команды.

### Ответы

1. Put up your hand. 2. Повторять за учителем. 3. Don't run! 4. Can I have a ruler, please? 5. Can you repeat, please? 6. Close your books. 7. Например: Stand up. Look at the board. Sit down.`,
      },
      [
        q(t("«Sit down» means…", "«Sit down» նշանակում է…", "«Sit down» значит…"), [t("stand on your feet", "կանգնի՛ր", "встань"), t("sit on your chair", "նստի՛ր", "сядь"), t("open the book", "բա՛ց գիրքը", "открой книгу")], 1),
        q(t("How do you ask to leave the room?", "Ինչպե՞ս խնդրել դուրս գալ դասարանից։", "Как попроситься выйти?"), [t("Can I go out, please?", "Can I go out, please?", "Can I go out, please?"), t("Go out!", "Go out!", "Go out!"), t("Don't go out.", "Don't go out.", "Don't go out.")], 0),
        q(t("A negative command:", "Արգելք՝", "Запрет:"), [t("No talk.", "No talk.", "No talk."), t("Not talk.", "Not talk.", "Not talk."), t("Don't talk.", "Don't talk.", "Don't talk.")], 2),
        q(t("You did not understand. You say…", "Չհասկացար։ Ասում ես…", "Ты не понял. Ты говоришь…"), [t("Sorry, I don't understand.", "Sorry, I don't understand.", "Sorry, I don't understand."), t("Be quiet, please.", "Be quiet, please.", "Be quiet, please."), t("Sit down.", "Sit down.", "Sit down.")], 0),
        q(t("«Work in pairs» means work…", "«Work in pairs»՝ աշխատել…", "«Work in pairs» — работать…"), [t("alone", "մենակ", "одному"), t("with one partner", "զույգերով", "в парах"), t("at home", "տանը", "дома")], 1),
        q(t("Which is polite?", "Ո՞րն է քաղաքավարի։", "Что звучит вежливо?"), [t("Give me a pencil.", "Give me a pencil.", "Give me a pencil."), t("Pencil!", "Pencil!", "Pencil!"), t("Can I have a pencil, please?", "Can I have a pencil, please?", "Can I have a pencil, please?")], 2),
      ],
    ),
  ],
};
