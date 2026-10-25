import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("Colours, numbers and shapes", "Գույներ, թվեր և պատկերներ", "Цвета, числа и фигуры"),
  summary: t(
    "Ten colours, numbers 1–10, «How many?», «How old are you?», shapes, and action commands with Simon says.",
    "Տասը գույն, 1–10 թվեր, «How many?», «How old are you?», երկրաչափական պատկերներ և հրամաններ «Simon says» խաղով։",
    "Десять цветов, числа 1–10, «How many?», «How old are you?», фигуры и команды в игре «Simon says».",
  ),
  lessons: [
    lesson(
      "colours",
      ["Red, blue, yellow: colours", "Red, blue, yellow․ գույները", "Red, blue, yellow: цвета"],
      {
        en: ["Name ten colours in English", "Ask and answer «What colour is it?»", "Put the colour before the thing: a red ball"],
        hy: ["Անգլերեն անվանել տասը գույն", "Հարցնել և պատասխանել «What colour is it?»", "Գույնը դնել առարկայից առաջ՝ a red ball"],
        ru: ["Называть десять цветов по-английски", "Спрашивать и отвечать «What colour is it?»", "Ставить цвет перед предметом: a red ball"],
      },
      {
        en: `## Ten colours

| Colour | Example |
|---|---|
| red | a red apple 🍎 |
| yellow | a yellow sun ☀️ |
| blue | a blue sky |
| green | green grass 🌿 |
| orange | an orange 🍊 |
| pink | a pink flower 🌸 |
| purple | purple grapes 🍇 |
| brown | a brown bear 🐻 |
| black | a black cat 🐈 |
| white | white snow ❄️ |

## What colour is it?

> **Teacher:** What colour is it?\\
> **Child:** It's red!

The colour comes **before** the thing: a **red** ball, a **green** frog.

## The rainbow

Red, orange, yellow, green, blue, and two shades of purple. Sing the colours in rainbow order!

### Exercises

1. What colour is the sun?
2. What colour is grass?
3. Answer: «What colour is snow?»
4. Put in order: ball / a / blue.
5. Name the colours of the Armenian flag in English.
6. Name the colours of the Russian flag in English.
7. Point to five things at home and say their colours.

### Answers

1. Yellow. 2. Green. 3. It's white. 4. a blue ball. 5. Red, blue, orange. 6. White, blue, red. 7. For example, a brown table, a white door.`,
        hy: `## Տասը գույն

| Գույն | Արտասանություն | Թարգմանություն | Օրինակ |
|---|---|---|---|
| red | [ռեդ] | կարմիր | a red apple 🍎 |
| yellow | [յելոու] | դեղին | a yellow sun ☀️ |
| blue | [բլու] | կապույտ | a blue sky |
| green | [գրին] | կանաչ | green grass 🌿 |
| orange | [օրինջ] | նարնջագույն | an orange 🍊 |
| pink | [փինք] | վարդագույն | a pink flower 🌸 |
| purple | [փըրփլ] | մանուշակագույն | purple grapes 🍇 |
| brown | [բրաուն] | շագանակագույն | a brown bear 🐻 |
| black | [բլեք] | սև | a black cat 🐈 |
| white | [ուայթ] | սպիտակ | white snow ❄️ |

## What colour is it?

> **Teacher:** What colour is it? (*Ի՞նչ գույնի է։*)\\
> **Child:** It's red! (*Կարմիր է։*)

Գույնը դրվում է առարկայից **առաջ**, ինչպես հայերենում՝ a **red** ball (*կարմիր գնդակ*)։

## Ծիածան

Red, orange, yellow, green, blue և մանուշակագույնի երկու երանգ։ Երգի՛ր գույները ծիածանի հերթականությամբ։

### Վարժություններ

1. Ի՞նչ գույնի է արևը։
2. Ի՞նչ գույնի է խոտը։
3. Պատասխանի՛ր՝ «What colour is snow?»։
4. Դասավորի՛ր՝ ball / a / blue։
5. Անգլերեն անվանի՛ր Հայաստանի դրոշի գույները։
6. Անգլերեն անվանի՛ր Ռուսաստանի դրոշի գույները։
7. Ցույց տո՛ւր տանը հինգ առարկա և ասա՛ նրանց գույները։

### Պատասխաններ

1. Yellow։ 2. Green։ 3. It's white.։ 4. a blue ball։ 5. Red, blue, orange։ 6. White, blue, red։ 7. Օրինակ՝ a brown table, a white door։`,
        ru: `## Десять цветов

| Цвет | Произношение | Перевод | Пример |
|---|---|---|---|
| red | [рэд] | красный | a red apple 🍎 |
| yellow | [йелоу] | жёлтый | a yellow sun ☀️ |
| blue | [блу] | синий, голубой | a blue sky |
| green | [грин] | зелёный | green grass 🌿 |
| orange | [ориндж] | оранжевый | an orange 🍊 |
| pink | [пинк] | розовый | a pink flower 🌸 |
| purple | [пёпл] | фиолетовый | purple grapes 🍇 |
| brown | [браун] | коричневый | a brown bear 🐻 |
| black | [блэк] | чёрный | a black cat 🐈 |
| white | [уайт] | белый | white snow ❄️ |

В английском одно слово **blue** и для синего, и для голубого.

## What colour is it?

> **Teacher:** What colour is it? (*Какого это цвета?*)\\
> **Child:** It's red! (*Красный!*)

Цвет стоит **перед** предметом, как в русском: a **red** ball (*красный мяч*). Но по-английски он не меняет окончаний.

## Радуга

Red, orange, yellow, green, blue и два оттенка фиолетового. Спой цвета по порядку радуги!

### Упражнения

1. Какого цвета солнце?
2. Какого цвета трава?
3. Ответь: «What colour is snow?»
4. Расставь по порядку: ball / a / blue.
5. Назови по-английски цвета флага России.
6. Назови по-английски цвета флага Армении.
7. Покажи дома пять предметов и назови их цвет.

### Ответы

1. Yellow. 2. Green. 3. It's white. 4. a blue ball. 5. White, blue, red. 6. Red, blue, orange. 7. Например, a brown table, a white door.`,
      },
      [
        q(t("«green» is the colour of…", "«green»-ը գույնն է…", "«green» — цвет…"), [t("snow", "ձյան", "снега"), t("grass", "խոտի", "травы"), t("the sun", "արևի", "солнца")], 1),
        q(t("What colour is snow?", "Ի՞նչ գույնի է ձյունը։", "Какого цвета снег?"), [t("white", "white", "white"), t("black", "black", "black"), t("pink", "pink", "pink")], 0),
        q(t("Which is correct?", "Ո՞րն է ճիշտ։", "Как правильно?"), [t("a ball red", "a ball red", "a ball red"), t("red a ball", "red a ball", "red a ball"), t("a red ball", "a red ball", "a red ball")], 2),
        q(t("«brown» means…", "«brown» նշանակում է…", "«brown» значит…"), [t("brown", "շագանակագույն", "коричневый"), t("blue", "կապույտ", "синий"), t("black", "սև", "чёрный")], 0),
        q(t("The colours of the Armenian flag:", "Հայաստանի դրոշի գույները՝", "Цвета флага Армении:"), [t("white, blue, red", "white, blue, red", "white, blue, red"), t("red, blue, orange", "red, blue, orange", "red, blue, orange"), t("green, white, red", "green, white, red", "green, white, red")], 1),
        q(t("Ask about the colour:", "Հարցրո՛ւ գույնի մասին՝", "Спроси о цвете:"), [t("How many?", "How many?", "How many?"), t("How old?", "How old?", "How old?"), t("What colour is it?", "What colour is it?", "What colour is it?")], 2),
      ],
    ),
    lesson(
      "numbers-1-10",
      ["Numbers 1–10", "1–10 թվերը", "Числа 1–10"],
      {
        en: ["Count from one to ten in English", "Say numbers out of order", "Say your phone or house number digit by digit"],
        hy: ["Անգլերեն հաշվել մեկից տասը", "Ասել թվերը խառը հերթականությամբ", "Թվանշան առ թվանշան ասել տան կամ հեռախոսի համարը"],
        ru: ["Считать от одного до десяти по-английски", "Называть числа вразбивку", "Называть номер дома или телефона по цифрам"],
      },
      {
        en: `## One to ten

| 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|
| one | two | three | four | five |
| **6** | **7** | **8** | **9** | **10** |
| six | seven | eight | nine | ten |

## A counting rhyme

> One, two, three, four, five,\\
> Once I caught a fish alive.\\
> Six, seven, eight, nine, ten,\\
> Then I let it go again.

This is a traditional English nursery rhyme.

## Zero

0 is **zero**. In phone numbers people often say «oh»: 0 9 1 — «oh, nine, one».

## Game: Clap and count

The teacher claps. Count the claps aloud: «One, two, three!»

### Exercises

1. Count from one to ten.
2. Write the numbers: three, seven, nine.
3. Which number comes after five?
4. Which number comes before ten?
5. Count backwards from ten to one.
6. What do we catch in the rhyme?
7. Say your house number in English.

### Answers

1. one, two … ten. 2. 3, 7, 9. 3. six. 4. nine. 5. ten, nine … one. 6. A fish. 7. For example, house number 12 is «one, two».`,
        hy: `## Մեկից տասը

| 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|
| one [ուան] | two [թու] | three [թրի] | four [ֆոր] | five [ֆայվ] |
| **6** | **7** | **8** | **9** | **10** |
| six [սիքս] | seven [սևն] | eight [էյթ] | nine [նայն] | ten [թեն] |

## Հաշվերգ

> One, two, three, four, five,\\
> Once I caught a fish alive.\\
> Six, seven, eight, nine, ten,\\
> Then I let it go again.

(*Մեկ, երկու, երեք, չորս, հինգ, մի անգամ կենդանի ձուկ բռնեցի։ Վեց, յոթ, ութ, ինը, տասը, հետո նորից բաց թողեցի։*) Սա ավանդական անգլիական մանկական ոտանավոր է։

## Զրո

0-ն **zero** է։ Հեռախոսահամարներում հաճախ ասում են «oh»՝ 0 9 1 — «oh, nine, one»։

## Խաղ՝ ծափ և հաշիվ

Ուսուցիչը ծափ է տալիս։ Բարձրաձայն հաշվի՛ր ծափերը՝ «One, two, three!»։

### Վարժություններ

1. Հաշվի՛ր մեկից տասը։
2. Թվերով գրի՛ր՝ three, seven, nine։
3. Ո՞ր թիվն է հինգից հետո։
4. Ո՞ր թիվն է տասից առաջ։
5. Հաշվի՛ր հակառակ՝ տասից մեկ։
6. Ի՞նչ ենք բռնում ոտանավորում։
7. Ասա՛ քո տան համարը անգլերեն՝ թվանշան առ թվանշան։

### Պատասխաններ

1. one, two … ten։ 2. 3, 7, 9։ 3. six։ 4. nine։ 5. ten, nine … one։ 6. Ձուկ։ 7. Օրինակ՝ 12 — «one, two»։`,
        ru: `## От одного до десяти

| 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|
| one [уан] | two [ту] | three [фри] | four [фо] | five [файв] |
| **6** | **7** | **8** | **9** | **10** |
| six [сикс] | seven [севн] | eight [эйт] | nine [найн] | ten [тэн] |

В слове three звук [θ] — кончик языка между зубами; это не [ф] и не [с].

## Считалка

> One, two, three, four, five,\\
> Once I caught a fish alive.\\
> Six, seven, eight, nine, ten,\\
> Then I let it go again.

(*Раз, два, три, четыре, пять — поймал я рыбку живую. Шесть, семь, восемь, девять, десять — отпустил её опять.*) Это традиционный английский детский стишок.

## Ноль

0 — **zero**. В номерах телефонов часто говорят «oh»: 0 9 1 — «oh, nine, one».

## Игра «Хлопки»

Учитель хлопает. Считай хлопки вслух: «One, two, three!»

### Упражнения

1. Посчитай от одного до десяти.
2. Запиши цифрами: three, seven, nine.
3. Какое число идёт после пяти?
4. Какое число стоит перед десятью?
5. Посчитай обратно от десяти до одного.
6. Кого поймали в считалке?
7. Назови по-английски номер своего дома по цифрам.

### Ответы

1. one, two … ten. 2. 3, 7, 9. 3. six. 4. nine. 5. ten, nine … one. 6. Рыбку. 7. Например, 12 — «one, two».`,
      },
      [
        q(t("«seven» is…", "«seven»-ը…", "«seven» — это…"), [t("6", "6", "6"), t("7", "7", "7"), t("8", "8", "8")], 1),
        q(t("Which number comes after «four»?", "Ո՞ր թիվն է «four»-ից հետո։", "Какое число после «four»?"), [t("five", "five", "five"), t("three", "three", "three"), t("six", "six", "six")], 0),
        q(t("10 is…", "10-ը…", "10 — это…"), [t("two", "two", "two"), t("one", "one", "one"), t("ten", "ten", "ten")], 2),
        q(t("0 in a phone number is often said…", "Հեռախոսահամարում 0-ն հաճախ ասում են…", "0 в номере телефона часто говорят как…"), [t("«ten»", "«ten»", "«ten»"), t("«oh»", "«oh»", "«oh»"), t("«one»", "«one»", "«one»")], 1),
        q(t("«nine» is…", "«nine»-ը…", "«nine» — это…"), [t("9", "9", "9"), t("5", "5", "5"), t("1", "1", "1")], 0),
        q(t("In the rhyme, we catch a…", "Ոտանավորում բռնում ենք…", "В считалке поймали…"), [t("cat", "կատու", "кошку"), t("ball", "գնդակ", "мяч"), t("fish", "ձուկ", "рыбку")], 2),
      ],
    ),
    lesson(
      "how-many",
      ["How many? Counting things", "How many? Հաշվում ենք", "How many? Считаем предметы"],
      {
        en: ["Ask «How many…?»", "Answer with a number and a plural word: three cats", "Add -s to make a word plural"],
        hy: ["Հարցնել «How many…?»", "Պատասխանել թվով և հոգնակի բառով՝ three cats", "Բառը հոգնակի դարձնել -s ավելացնելով"],
        ru: ["Спрашивать «How many…?»", "Отвечать числом и словом во множественном числе: three cats", "Образовывать множественное число с -s"],
      },
      {
        en: `## How many?

> **Teacher:** How many apples?\\
> **Child:** Three apples!

## One — many

| One | Many |
|---|---|
| one cat | two cat**s** |
| one dog | five dog**s** |
| one ball | ten ball**s** |
| one apple | four apple**s** |

For more than one, we usually add **-s**.

## Count and say

| Picture | Answer |
|---|---|
| 🍎🍎🍎 | three apples |
| ⭐⭐⭐⭐⭐ | five stars |
| 🐟🐟 | two fish (*fish does not change!*) |

## Game: How many fingers?

Hide your hands, then show some fingers. Your partner asks «How many fingers?» and answers «Seven fingers!».

### Exercises

1. Ask about pencils with «How many…?»
2. Make plural: cat, ball, star.
3. Answer: 🍎🍎 «How many apples?»
4. Which word does not take -s: dog, fish, book?
5. Say: 4 dogs.
6. How many legs has a cat?
7. Count the windows in your room and say the answer in English.

### Answers

1. How many pencils? 2. cats, balls, stars. 3. Two apples. 4. fish. 5. four dogs. 6. Four legs. 7. For example, «Two windows».`,
        hy: `## How many?

> **Teacher:** How many apples? (*Քանի՞ խնձոր կա։*)\\
> **Child:** Three apples! (*Երեք խնձոր։*)

**How many** [հաու մենի]՝ քանի՞։

## Մեկ — շատ

| Մեկ | Շատ |
|---|---|
| one cat | two cat**s** |
| one dog | five dog**s** |
| one ball | ten ball**s** |
| one apple | four apple**s** |

Մեկից ավելի լինելու դեպքում սովորաբար ավելացնում ենք **-s**, ինչպես հայերենում՝ -եր, -ներ։ Բայց հայերենում թվից հետո հաճախ եզակի ենք ասում (երեք խնձոր), իսկ անգլերենում միշտ հոգնակի՝ three apple**s**։

## Հաշվի՛ր և ասա՛

| Նկար | Պատասխան |
|---|---|
| 🍎🍎🍎 | three apples |
| ⭐⭐⭐⭐⭐ | five stars |
| 🐟🐟 | two fish (*fish-ը չի փոխվում*) |

## Խաղ՝ քանի՞ մատ

Թաքցրու ձեռքերդ, հետո ցույց տուր մի քանի մատ։ Ընկերդ հարցնում է «How many fingers?» և պատասխանում «Seven fingers!»։

### Վարժություններ

1. «How many…?»-ով հարցրո՛ւ մատիտների (pencils) մասին։
2. Դարձրո՛ւ հոգնակի՝ cat, ball, star։
3. Պատասխանի՛ր՝ 🍎🍎 «How many apples?»։
4. Ո՞ր բառը -s չի ստանում՝ dog, fish, book։
5. Ասա՛՝ 4 շուն։
6. Քանի՞ ոտք ունի կատուն։
7. Հաշվի՛ր սենյակիդ պատուհանները և անգլերեն ասա՛ պատասխանը։

### Պատասխաններ

1. How many pencils?։ 2. cats, balls, stars։ 3. Two apples.։ 4. fish։ 5. four dogs։ 6. Four legs։ 7. Օրինակ՝ «Two windows»։`,
        ru: `## How many?

> **Teacher:** How many apples? (*Сколько яблок?*)\\
> **Child:** Three apples! (*Три яблока!*)

**How many** [хау мэни] — сколько.

## Один — много

| Один | Много |
|---|---|
| one cat | two cat**s** |
| one dog | five dog**s** |
| one ball | ten ball**s** |
| one apple | four apple**s** |

Если предметов больше одного, обычно добавляем **-s**. В русском окончание меняется по-разному (два кота, пять котов), а в английском всегда просто -s: two cats, five cats.

## Посчитай и скажи

| Картинка | Ответ |
|---|---|
| 🍎🍎🍎 | three apples |
| ⭐⭐⭐⭐⭐ | five stars |
| 🐟🐟 | two fish (*fish не меняется!*) |

## Игра «Сколько пальцев?»

Спрячь руки, потом покажи несколько пальцев. Партнёр спрашивает «How many fingers?» и отвечает «Seven fingers!».

### Упражнения

1. Спроси о карандашах (pencils) с помощью «How many…?»
2. Поставь во множественное число: cat, ball, star.
3. Ответь: 🍎🍎 «How many apples?»
4. Какое слово не получает -s: dog, fish, book?
5. Скажи: 4 собаки.
6. Сколько лап у кошки?
7. Посчитай окна в своей комнате и ответь по-английски.

### Ответы

1. How many pencils? 2. cats, balls, stars. 3. Two apples. 4. fish. 5. four dogs. 6. Four legs. 7. Например, «Two windows».`,
      },
      [
        q(t("«How many?» asks…", "«How many?»-ն հարցնում է…", "«How many?» спрашивает…"), [t("what colour", "ինչ գույնի", "какого цвета"), t("how many", "քանի", "сколько"), t("what name", "ինչ անուն", "как зовут")], 1),
        q(t("Plural of «dog»:", "«dog»-ի հոգնակին՝", "Множественное число «dog»:"), [t("dogs", "dogs", "dogs"), t("doges", "doges", "doges"), t("dog", "dog", "dog")], 0),
        q(t("⭐⭐⭐ — How many stars?", "⭐⭐⭐ — How many stars?", "⭐⭐⭐ — How many stars?"), [t("Two stars.", "Two stars.", "Two stars."), t("Four stars.", "Four stars.", "Four stars."), t("Three stars.", "Three stars.", "Three stars.")], 2),
        q(t("Which is correct?", "Ո՞րն է ճիշտ։", "Как правильно?"), [t("three apple", "three apple", "three apple"), t("three apples", "three apples", "three apples"), t("threes apple", "threes apple", "threes apple")], 1),
        q(t("Which word does not change in the plural?", "Ո՞ր բառը հոգնակիում չի փոխվում։", "Какое слово не меняется во множественном числе?"), [t("cat", "cat", "cat"), t("ball", "ball", "ball"), t("fish", "fish", "fish")], 2),
        q(t("How many legs has a dog?", "Քանի՞ ոտք ունի շունը։", "Сколько лап у собаки?"), [t("four", "four", "four"), t("two", "two", "two"), t("six", "six", "six")], 0),
      ],
    ),
    lesson(
      "how-old-are-you",
      ["How old are you?", "Քանի՞ տարեկան ես", "Сколько тебе лет?"],
      {
        en: ["Ask «How old are you?»", "Answer «I'm seven» or «I'm seven years old»", "Sing «Happy birthday to you»"],
        hy: ["Հարցնել «How old are you?»", "Պատասխանել «I'm seven» կամ «I'm seven years old»", "Երգել «Happy birthday to you»"],
        ru: ["Спрашивать «How old are you?»", "Отвечать «I'm seven» или «I'm seven years old»", "Петь «Happy birthday to you»"],
      },
      {
        en: `## How old?

> **Mia:** How old are you?\\
> **Davit:** I'm seven. And you?\\
> **Mia:** I'm eight!

| Long answer | Short answer |
|---|---|
| I'm seven years old. | I'm seven. |

## About others

| Question | Answer |
|---|---|
| How old is your brother? | He's ten. |
| How old is your sister? | She's four. |

## Happy birthday!

> Happy birthday to you,\\
> Happy birthday to you,\\
> Happy birthday, dear Ani,\\
> Happy birthday to you!

Count the candles: «One, two, three… seven candles! Ani is seven!»

### Exercises

1. Ask a friend his or her age.
2. Answer: «How old are you?»
3. Make the long answer: «I'm eight.»
4. Your brother is ten. Say it in English.
5. Your sister is five. Say it in English.
6. A cake has 6 candles. How old is the child?
7. Sing «Happy birthday» with a friend's name.

### Answers

1. How old are you? 2. For example, I'm seven. 3. I'm eight years old. 4. He's ten. 5. She's five. 6. Six. 7. Sing!`,
        hy: `## Քանի՞ տարեկան

> **Mia:** How old are you? (*Քանի՞ տարեկան ես։*)\\
> **Davit:** I'm seven. And you? (*Յոթ տարեկան եմ։ Իսկ դու՞։*)\\
> **Mia:** I'm eight! (*Ութ տարեկան եմ։*)

| Երկար պատասխան | Կարճ պատասխան |
|---|---|
| I'm seven years old. | I'm seven. |

## Ուրիշների մասին

| Հարց | Պատասխան |
|---|---|
| How old is your brother? (*Քանի՞ տարեկան է եղբայրդ*) | He's ten. (*Տասը*) |
| How old is your sister? (*Քանի՞ տարեկան է քույրդ*) | She's four. (*Չորս*) |

Տղայի մասին՝ **he**, աղջկա մասին՝ **she**։

## Happy birthday!

> Happy birthday to you,\\
> Happy birthday to you,\\
> Happy birthday, dear Ani,\\
> Happy birthday to you!

(*Ծնունդդ շնորհավոր, սիրելի Անի։*) Հաշվի՛ր մոմերը՝ «One, two, three… seven candles! Ani is seven!»։

### Վարժություններ

1. Հարցրո՛ւ ընկերոջդ տարիքը։
2. Պատասխանի՛ր՝ «How old are you?»։
3. Կազմի՛ր երկար պատասխանը՝ «I'm eight.»։
4. Եղբայրդ տասը տարեկան է։ Ասա՛ անգլերեն։
5. Քույրդ հինգ տարեկան է։ Ասա՛ անգլերեն։
6. Տորթի վրա 6 մոմ կա։ Քանի՞ տարեկան է երեխան։
7. Երգի՛ր «Happy birthday»-ը ընկերոջդ անունով։

### Պատասխաններ

1. How old are you?։ 2. Օրինակ՝ I'm seven.։ 3. I'm eight years old.։ 4. He's ten.։ 5. She's five.։ 6. Վեց։ 7. Երգի՛ր։`,
        ru: `## Сколько лет?

> **Mia:** How old are you? (*Сколько тебе лет?*)\\
> **Davit:** I'm seven. And you? (*Мне семь. А тебе?*)\\
> **Mia:** I'm eight! (*Мне восемь!*)

| Полный ответ | Краткий ответ |
|---|---|
| I'm seven years old. | I'm seven. |

По-английски говорят «я есть семь лет старый», а не «мне семь лет».

## О других

| Вопрос | Ответ |
|---|---|
| How old is your brother? (*Сколько лет твоему брату?*) | He's ten. (*Ему десять.*) |
| How old is your sister? (*Сколько лет твоей сестре?*) | She's four. (*Ей четыре.*) |

## Happy birthday!

> Happy birthday to you,\\
> Happy birthday to you,\\
> Happy birthday, dear Ani,\\
> Happy birthday to you!

(*С днём рождения тебя, дорогая Ани!*) Посчитай свечи: «One, two, three… seven candles! Ani is seven!»

### Упражнения

1. Спроси друга, сколько ему лет.
2. Ответь: «How old are you?»
3. Составь полный ответ: «I'm eight.»
4. Твоему брату десять. Скажи по-английски.
5. Твоей сестре пять. Скажи по-английски.
6. На торте 6 свечей. Сколько лет ребёнку?
7. Спой «Happy birthday» с именем друга.

### Ответы

1. How old are you? 2. Например, I'm seven. 3. I'm eight years old. 4. He's ten. 5. She's five. 6. Шесть. 7. Пой!`,
      },
      [
        q(t("How do you ask someone's age?", "Ինչպե՞ս հարցնել տարիքը։", "Как спросить возраст?"), [t("How are you?", "How are you?", "How are you?"), t("How many?", "How many?", "How many?"), t("How old are you?", "How old are you?", "How old are you?")], 2),
        q(t("Answer: «How old are you?»", "Պատասխանի՛ր՝ «How old are you?»", "Ответь: «How old are you?»"), [t("I'm seven.", "I'm seven.", "I'm seven."), t("I'm fine.", "I'm fine.", "I'm fine."), t("I'm Ani.", "I'm Ani.", "I'm Ani.")], 0),
        q(t("About your brother: «___ ten.»", "Եղբորդ մասին՝ «___ ten.»", "О брате: «___ ten.»"), [t("She's", "She's", "She's"), t("He's", "He's", "He's"), t("I'm", "I'm", "I'm")], 1),
        q(t("The long answer is…", "Երկար պատասխանն է…", "Полный ответ:"), [t("I'm eight old.", "I'm eight old.", "I'm eight old."), t("I'm eight years.", "I'm eight years.", "I'm eight years."), t("I'm eight years old.", "I'm eight years old.", "I'm eight years old.")], 2),
        q(t("On a birthday we sing…", "Ծննդյան օրը երգում ենք…", "На день рождения поют…"), [t("Happy birthday to you", "Happy birthday to you", "Happy birthday to you"), t("Good night", "Good night", "Good night"), t("The ABC song", "The ABC song", "The ABC song")], 0),
        q(t("About your sister: «___ four.»", "Քրոջդ մասին՝ «___ four.»", "О сестре: «___ four.»"), [t("He's", "He's", "He's"), t("You're", "You're", "You're"), t("She's", "She's", "She's")], 2),
      ],
    ),
    lesson(
      "shapes",
      ["Shapes: circle, square, triangle", "Պատկերներ․ circle, square, triangle", "Фигуры: circle, square, triangle"],
      {
        en: ["Name six shapes in English", "Say the colour and the shape together: a red circle", "Find shapes around you"],
        hy: ["Անգլերեն անվանել վեց պատկեր", "Միասին ասել գույնը և պատկերը՝ a red circle", "Գտնել պատկերները շրջապատում"],
        ru: ["Называть шесть фигур по-английски", "Называть цвет и фигуру вместе: a red circle", "Находить фигуры вокруг себя"],
      },
      {
        en: `## Six shapes

| Shape | Looks like |
|---|---|
| circle ⚪ | a coin, a plate, the sun |
| square ⬜ | a window, a napkin |
| triangle 🔺 | a slice of pizza, a roof |
| rectangle ▭ | a door, a book |
| star ⭐ | a star in the sky |
| heart ❤️ | a Valentine card |

## Colour + shape

> a **red** circle, a **blue** square, a **yellow** star

> **Teacher:** What is it?\\
> **Child:** It's a green triangle.

## Draw and say

Draw a house: a **square** for the walls, a **triangle** for the roof, a **rectangle** for the door and a **circle** for the sun.

### Exercises

1. Name the shape of a plate.
2. Name the shape of a door.
3. Which shape has three sides?
4. Which shape has four equal sides?
5. Say: a yellow star, a red heart (point to them).
6. What shapes are in a house drawing?
7. Find three shapes in your room and say them in English.

### Answers

1. circle. 2. rectangle. 3. triangle. 4. square. 5. Point and say. 6. square, triangle, rectangle, circle. 7. For example, a square window, a round clock (circle), a rectangle book.`,
        hy: `## Վեց պատկեր

| Պատկեր | Արտասանություն | Թարգմանություն | Նման է |
|---|---|---|---|
| circle ⚪ | [սըրքլ] | շրջան | մետաղադրամ, ափսե, արև |
| square ⬜ | [սքուեր] | քառակուսի | պատուհան, անձեռոցիկ |
| triangle 🔺 | [թրայանգլ] | եռանկյուն | պիցցայի կտոր, տանիք |
| rectangle ▭ | [ռեքթանգլ] | ուղղանկյուն | դուռ, գիրք |
| star ⭐ | [սթար] | աստղ | աստղ երկնքում |
| heart ❤️ | [հարթ] | սիրտ | բացիկ |

## Գույն + պատկեր

> a **red** circle (*կարմիր շրջան*), a **blue** square (*կապույտ քառակուսի*), a **yellow** star (*դեղին աստղ*)

> **Teacher:** What is it? (*Ի՞նչ է սա։*)\\
> **Child:** It's a green triangle. (*Կանաչ եռանկյուն է։*)

## Նկարի՛ր և ասա՛

Նկարի՛ր տուն՝ **square** պատերի համար, **triangle** տանիքի համար, **rectangle** դռան համար և **circle** արևի համար։

### Վարժություններ

1. Անգլերեն անվանի՛ր ափսեի ձևը։
2. Անգլերեն անվանի՛ր դռան ձևը։
3. Ո՞ր պատկերն ունի երեք կողմ։
4. Ո՞ր պատկերն ունի չորս հավասար կողմ։
5. Ասա՛՝ a yellow star, a red heart (ցույց տալով)։
6. Ի՞նչ պատկերներ կան տան նկարում։
7. Գտի՛ր սենյակումդ երեք պատկեր և անգլերեն ասա՛։

### Պատասխաններ

1. circle։ 2. rectangle։ 3. triangle։ 4. square։ 5. Ցույց տուր և ասա՛։ 6. square, triangle, rectangle, circle։ 7. Օրինակ՝ a square window, a circle clock, a rectangle book։`,
        ru: `## Шесть фигур

| Фигура | Произношение | Перевод | На что похожа |
|---|---|---|---|
| circle ⚪ | [сёкл] | круг | монета, тарелка, солнце |
| square ⬜ | [сквэа] | квадрат | окно, салфетка |
| triangle 🔺 | [трайэнгл] | треугольник | кусок пиццы, крыша |
| rectangle ▭ | [рэктэнгл] | прямоугольник | дверь, книга |
| star ⭐ | [ста] | звезда | звезда на небе |
| heart ❤️ | [хат] | сердце | открытка |

## Цвет + фигура

> a **red** circle (*красный круг*), a **blue** square (*синий квадрат*), a **yellow** star (*жёлтая звезда*)

> **Teacher:** What is it? (*Что это?*)\\
> **Child:** It's a green triangle. (*Это зелёный треугольник.*)

## Нарисуй и скажи

Нарисуй домик: **square** для стен, **triangle** для крыши, **rectangle** для двери и **circle** для солнца.

### Упражнения

1. Назови по-английски форму тарелки.
2. Назови по-английски форму двери.
3. У какой фигуры три стороны?
4. У какой фигуры четыре равные стороны?
5. Скажи: a yellow star, a red heart (показывая на них).
6. Какие фигуры есть на рисунке домика?
7. Найди в комнате три фигуры и назови их по-английски.

### Ответы

1. circle. 2. rectangle. 3. triangle. 4. square. 5. Покажи и скажи. 6. square, triangle, rectangle, circle. 7. Например, a square window, a circle clock, a rectangle book.`,
      },
      [
        q(t("A plate is a…", "Ափսեն…", "Тарелка — это…"), [t("square", "square է", "square"), t("circle", "circle է", "circle"), t("triangle", "triangle է", "triangle")], 1),
        q(t("Which shape has three sides?", "Ո՞ր պատկերն ունի երեք կողմ։", "У какой фигуры три стороны?"), [t("triangle", "triangle", "triangle"), t("square", "square", "square"), t("circle", "circle", "circle")], 0),
        q(t("«star» means…", "«star» նշանակում է…", "«star» значит…"), [t("heart", "սիրտ", "сердце"), t("sun", "արև", "солнце"), t("star", "աստղ", "звезда")], 2),
        q(t("A door is a…", "Դուռը…", "Дверь — это…"), [t("rectangle", "rectangle է", "rectangle"), t("circle", "circle է", "circle"), t("star", "star է", "star")], 0),
        q(t("Which is correct?", "Ո՞րն է ճիշտ։", "Как правильно?"), [t("a square blue", "a square blue", "a square blue"), t("a blue square", "a blue square", "a blue square"), t("blue a square", "blue a square", "blue a square")], 1),
        q(t("In a house drawing the roof is a…", "Տան նկարում տանիքը…", "На рисунке домика крыша — это…"), [t("circle", "circle է", "circle"), t("heart", "heart է", "heart"), t("triangle", "triangle է", "triangle")], 2),
      ],
    ),
    lesson(
      "simon-says",
      ["Simon says: action words", "Simon says․ գործողության բառեր", "Simon says: команды-действия"],
      {
        en: ["Understand and do classroom actions: stand up, sit down, jump", "Play the game «Simon says»", "Give a command to a friend"],
        hy: ["Հասկանալ և կատարել հրամաններ՝ stand up, sit down, jump", "Խաղալ «Simon says» խաղը", "Ընկերոջը հրաման տալ"],
        ru: ["Понимать и выполнять команды: stand up, sit down, jump", "Играть в «Simon says»", "Давать команды другу"],
      },
      {
        en: `## Action words

| Command | Do it! |
|---|---|
| Stand up! | get up from your chair |
| Sit down! | sit on your chair |
| Jump! | jump up |
| Clap your hands! | clap |
| Touch your nose! | touch your nose |
| Turn around! | turn round |
| Open your book! | open it |
| Close your eyes! | close your eyes |

## The game «Simon says»

A leader gives commands. Do the action **only** if the leader says «Simon says» first!

> «Simon says: stand up!» — stand up ✅\\
> «Simon says: clap your hands!» — clap ✅\\
> «Sit down!» — do **not** sit down! ❌

If you move without «Simon says», you are out.

## Be polite

You can add **please**: «Sit down, please.»

### Exercises

1. What do you do when you hear «Stand up!»?
2. What do you do when you hear «Close your eyes!»?
3. In the game, should you do «Jump!» without «Simon says»?
4. Give the opposite command to «Stand up!».
5. Give the opposite command to «Open your book!».
6. Make «Sit down» polite.
7. Play «Simon says» at home and be the leader.

### Answers

1. Get up. 2. Close your eyes. 3. No. 4. Sit down! 5. Close your book! 6. Sit down, please. 7. Play!`,
        hy: `## Գործողության բառեր

| Հրաման | Արտասանություն | Կատարի՛ր |
|---|---|---|
| Stand up! | [սթենդ ափ] | վեր կաց |
| Sit down! | [սիթ դաուն] | նստիր |
| Jump! | [ջամփ] | ցատկիր |
| Clap your hands! | [քլեփ յոր հենդզ] | ծափ տուր |
| Touch your nose! | [թաչ յոր նոուզ] | դիպչիր քթիդ |
| Turn around! | [թըրն ըրաունդ] | շրջվիր |
| Open your book! | [օուփըն յոր բուք] | բացիր գիրքդ |
| Close your eyes! | [քլոուզ յոր այզ] | փակիր աչքերդ |

## «Simon says» խաղը

Առաջնորդը հրամաններ է տալիս։ Կատարի՛ր **միայն** այն դեպքում, երբ նա նախ ասում է «Simon says» (*Սայմոնն ասում է*)։

> «Simon says: stand up!» — վեր կաց ✅\\
> «Simon says: clap your hands!» — ծափ տուր ✅\\
> «Sit down!» — **մի՛** նստիր ❌

Եթե շարժվես առանց «Simon says»-ի, դուրս ես գալիս խաղից։

## Եղի՛ր քաղաքավարի

Կարող ես ավելացնել **please**՝ «Sit down, please.»։

### Վարժություններ

1. Ի՞նչ ես անում, երբ լսում ես «Stand up!»։
2. Ի՞նչ ես անում, երբ լսում ես «Close your eyes!»։
3. Խաղում պե՞տք է կատարել «Jump!»-ը առանց «Simon says»-ի։
4. Տո՛ւր «Stand up!»-ի հակառակ հրամանը։
5. Տո՛ւր «Open your book!»-ի հակառակ հրամանը։
6. «Sit down»-ը դարձրո՛ւ քաղաքավարի։
7. Խաղա՛ «Simon says» տանը և եղի՛ր առաջնորդը։

### Պատասխաններ

1. Վեր եմ կենում։ 2. Փակում եմ աչքերս։ 3. Ոչ։ 4. Sit down!։ 5. Close your book!։ 6. Sit down, please.։ 7. Խաղա՛։`,
        ru: `## Команды

| Команда | Произношение | Выполни |
|---|---|---|
| Stand up! | [стэнд ап] | встань |
| Sit down! | [сит даун] | сядь |
| Jump! | [джамп] | прыгни |
| Clap your hands! | [клэп ё хэндз] | хлопни в ладоши |
| Touch your nose! | [тач ё ноуз] | дотронься до носа |
| Turn around! | [тён эраунд] | повернись |
| Open your book! | [оупэн ё бук] | открой книгу |
| Close your eyes! | [клоуз ё айз] | закрой глаза |

## Игра «Simon says»

Ведущий даёт команды. Выполняй **только** если он сначала сказал «Simon says» (*Саймон говорит*)!

> «Simon says: stand up!» — встаём ✅\\
> «Simon says: clap your hands!» — хлопаем ✅\\
> «Sit down!» — **не** садимся! ❌

Кто ошибся, выбывает.

## Будь вежлив

Можно добавить **please**: «Sit down, please.»

### Упражнения

1. Что ты делаешь, когда слышишь «Stand up!»?
2. Что ты делаешь, когда слышишь «Close your eyes!»?
3. Нужно ли в игре выполнять «Jump!» без «Simon says»?
4. Дай команду, противоположную «Stand up!».
5. Дай команду, противоположную «Open your book!».
6. Сделай команду «Sit down» вежливой.
7. Поиграй дома в «Simon says» и будь ведущим.

### Ответы

1. Встаю. 2. Закрываю глаза. 3. Нет. 4. Sit down! 5. Close your book! 6. Sit down, please. 7. Играй!`,
      },
      [
        q(t("«Sit down!» means…", "«Sit down!» նշանակում է…", "«Sit down!» значит…"), [t("stand up", "վեր կաց", "встань"), t("sit down", "նստիր", "сядь"), t("jump", "ցատկիր", "прыгни")], 1),
        q(t("«Clap your hands!» — you…", "«Clap your hands!» — դու…", "«Clap your hands!» — ты…"), [t("clap", "ծափ ես տալիս", "хлопаешь"), t("jump", "ցատկում ես", "прыгаешь"), t("sleep", "քնում ես", "спишь")], 0),
        q(t("In «Simon says» you move only when you hear…", "«Simon says»-ում շարժվում ես միայն, երբ լսում ես…", "В «Simon says» двигаешься, только если слышишь…"), [t("please", "please", "please"), t("stop", "stop", "stop"), t("Simon says", "Simon says", "Simon says")], 2),
        q(t("The opposite of «Open your book!»:", "«Open your book!»-ի հակառակը՝", "Противоположная команда к «Open your book!»:"), [t("Close your book!", "Close your book!", "Close your book!"), t("Touch your book!", "Touch your book!", "Touch your book!"), t("Jump!", "Jump!", "Jump!")], 0),
        q(t("«Touch your nose!» — touch your…", "«Touch your nose!» — դիպչիր…", "«Touch your nose!» — дотронься до…"), [t("ear", "ականջիդ", "уха"), t("eye", "աչքիդ", "глаза"), t("nose", "քթիդ", "носа")], 2),
        q(t("A polite command:", "Քաղաքավարի հրաման՝", "Вежливая команда:"), [t("Sit down!", "Sit down!", "Sit down!"), t("Sit down, please.", "Sit down, please.", "Sit down, please."), t("Down sit!", "Down sit!", "Down sit!")], 1),
      ],
    ),
  ],
};
