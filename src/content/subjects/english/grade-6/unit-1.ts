import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Home and family life", "Տուն և ընտանեկան կյանք", "Дом и семейная жизнь"),
  summary: t(
    "The rooms and the furniture of a home, housework with have to, the possessive pronouns, ordinal numbers and dates, family traditions in three countries and a description of your own home.",
    "Տան սենյակները և կահույքը, տնային գործերը have to-ով, ստացական դերանունները, դասական թվականները և ամսաթվերը, ընտանեկան ավանդույթներն երեք երկրում և սեփական տան նկարագրությունը։",
    "Комнаты и мебель в доме, домашние дела с have to, притяжательные местоимения, порядковые числительные и даты, семейные традиции трёх стран и описание своего дома.",
  ),
  lessons: [
    lesson(
      "house-and-furniture-6",
      ["Rooms and furniture", "Սենյակներ և կահույք", "Комнаты и мебель"],
      {
        en: ["Name the rooms of a house and the main furniture in each", "Place objects with prepositions and with there is and there are", "Describe a room in five sentences"],
        hy: ["Անվանել տան սենյակները և յուրաքանչյուրի հիմնական կահույքը", "Տեղադրել առարկաները նախդիրներով և there is, there are-ով", "Նկարագրել սենյակը հինգ նախադասությամբ"],
        ru: ["Назвать комнаты дома и основную мебель в каждой", "Располагать предметы с предлогами и с there is и there are", "Описать комнату пятью предложениями"],
      },
      {
        en: `## The rooms

| Room | What you do there |
|---|---|
| living room | watch TV, sit with the family |
| kitchen | cook and eat |
| bedroom | sleep |
| bathroom | wash |
| hall | leave your coat and shoes |
| balcony | hang the washing, grow flowers |

## The furniture

| Room | Furniture |
|---|---|
| living room | sofa, armchair, coffee table, bookcase, carpet, curtains |
| kitchen | cooker, fridge, sink, cupboard, kitchen table |
| bedroom | bed, wardrobe, desk, chair, shelf, lamp |
| bathroom | bath, shower, washbasin, mirror |

A **flat** is in a block of flats, a **house** stands on its own. In the countryside people say **a yard** and **a garden**.

## Where things are

| Preposition | Example |
|---|---|
| in | The plates are **in** the cupboard. |
| on | The lamp is **on** the desk. |
| under | My bag is **under** the bed. |
| above | There is a picture **above** the sofa. |
| next to | The armchair is **next to** the window. |
| in the corner | The bookcase is **in the corner**. |

> **There is** a big bookcase in the corner and **there are** two armchairs next to it.

## A model description

> Our flat is on the fourth floor. It has got three rooms, a kitchen and a small balcony. My room is the smallest, but it has got a big window. There is a bed under the window, a desk next to it and a shelf above the desk. The carpet is old and red, and my grandmother made the curtains herself.

### Exercises

1. In which room do you cook?
2. Name three pieces of furniture in a bedroom.
3. Complete: *The lamp is … the desk.*
4. Complete: *There … two armchairs in the living room.*
5. Correct: *There is a pictures above the sofa.*
6. Where is your bag at the moment? Answer with a preposition.
7. Describe your room in five sentences.

### Answers

1. In the kitchen. 2. For example bed, wardrobe, desk. 3. on. 4. are. 5. There is a picture above the sofa. 6. Your own answer, for example *It's under the chair.* 7. Your own answer: five sentences with *there is*, *there are* and at least two prepositions.`,
        hy: `## Սենյակները

| Room (սենյակ) | What you do there (ինչ ես անում) |
|---|---|
| living room (հյուրասենյակ) | watch TV, sit with the family |
| kitchen (խոհանոց) | cook and eat |
| bedroom (ննջասենյակ) | sleep |
| bathroom (լոգասենյակ) | wash |
| hall (նախասենյակ) | leave your coat and shoes |
| balcony (պատշգամբ) | hang the washing, grow flowers |

## Կահույքը

| Սենյակ | Furniture (կահույք) |
|---|---|
| living room | sofa (բազմոց), armchair (բազկաթոռ), coffee table (սեղանիկ), bookcase (գրապահարան), carpet (գորգ), curtains (վարագույրներ) |
| kitchen | cooker (վառարան), fridge (սառնարան), sink (լվացարան), cupboard (պահարան), kitchen table |
| bedroom | bed (մահճակալ), wardrobe (զգեստապահարան), desk (գրասեղան), chair, shelf (դարակ), lamp (լամպ) |
| bathroom | bath (լոգարան), shower (ցնցուղ), washbasin (լվացարան), mirror (հայելի) |

**Flat**-ը բազմաբնակարան շենքում է, **house**-ը՝ առանձին տուն։ Գյուղում ասում են **a yard** (բակ) և **a garden** (այգի)։

## Որտեղ են իրերը

| Նախդիր | Օրինակ |
|---|---|
| in (մեջ) | The plates are **in** the cupboard. |
| on (վրա) | The lamp is **on** the desk. |
| under (տակ) | My bag is **under** the bed. |
| above (վերևում) | There is a picture **above** the sofa. |
| next to (կողքին) | The armchair is **next to** the window. |
| in the corner (անկյունում) | The bookcase is **in the corner**. |

> **There is** a big bookcase in the corner and **there are** two armchairs next to it. *(Անկյունում մեծ գրապահարան կա, կողքին՝ երկու բազկաթոռ։)*

## Օրինակելի նկարագրություն

> Our flat is on the fourth floor. It has got three rooms, a kitchen and a small balcony. My room is the smallest, but it has got a big window. There is a bed under the window, a desk next to it and a shelf above the desk. The carpet is old and red, and my grandmother made the curtains herself.

*(Մեր բնակարանը չորրորդ հարկում է։ Ունի երեք սենյակ, խոհանոց և փոքր պատշգամբ։ Իմ սենյակն ամենափոքրն է, բայց մեծ պատուհան ունի։ Պատուհանի տակ մահճակալ է, կողքին՝ գրասեղան, գրասեղանի վերևում՝ դարակ։ Գորգը հին է ու կարմիր, իսկ վարագույրները տատիկս ինքն է կարել։)*

### Վարժություններ

1. Ո՞ր սենյակում ես եփում (անգլերեն)։
2. Անվանիր ննջասենյակի երեք կահույք։
3. Լրացրու․ *The lamp is … the desk.*
4. Լրացրու․ *There … two armchairs in the living room.*
5. Ուղղիր․ *There is a pictures above the sofa.*
6. Որտե՞ղ է քո պայուսակը հիմա։ Պատասխանիր նախդիրով։
7. Նկարագրիր քո սենյակը հինգ նախադասությամբ։

### Պատասխաններ

1. In the kitchen. 2. Օրինակ՝ bed, wardrobe, desk։ 3. on. 4. are. 5. There is a picture above the sofa. 6. Սեփական պատասխան, օրինակ՝ *It's under the chair.* 7. Սեփական պատասխան․ հինգ նախադասություն *there is*, *there are* և առնվազն երկու նախդիրով։`,
        ru: `## Комнаты

| Room (комната) | What you do there (что там делают) |
|---|---|
| living room (гостиная) | watch TV, sit with the family |
| kitchen (кухня) | cook and eat |
| bedroom (спальня) | sleep |
| bathroom (ванная) | wash |
| hall (прихожая) | leave your coat and shoes |
| balcony (балкон) | hang the washing, grow flowers |

## Мебель

| Комната | Furniture (мебель) |
|---|---|
| living room | sofa (диван), armchair (кресло), coffee table (журнальный столик), bookcase (книжный шкаф), carpet (ковёр), curtains (шторы) |
| kitchen | cooker (плита), fridge (холодильник), sink (мойка), cupboard (шкафчик), kitchen table |
| bedroom | bed (кровать), wardrobe (шкаф для одежды), desk (письменный стол), chair, shelf (полка), lamp (лампа) |
| bathroom | bath (ванна), shower (душ), washbasin (раковина), mirror (зеркало) |

**Flat** — квартира в доме, **house** — отдельный дом. В селе говорят **a yard** (двор) и **a garden** (сад).

## Где что стоит

| Предлог | Пример |
|---|---|
| in (в) | The plates are **in** the cupboard. |
| on (на) | The lamp is **on** the desk. |
| under (под) | My bag is **under** the bed. |
| above (над) | There is a picture **above** the sofa. |
| next to (рядом с) | The armchair is **next to** the window. |
| in the corner (в углу) | The bookcase is **in the corner**. |

> **There is** a big bookcase in the corner and **there are** two armchairs next to it. *(В углу большой книжный шкаф, а рядом два кресла.)*

## Образец описания

> Our flat is on the fourth floor. It has got three rooms, a kitchen and a small balcony. My room is the smallest, but it has got a big window. There is a bed under the window, a desk next to it and a shelf above the desk. The carpet is old and red, and my grandmother made the curtains herself.

*(Наша квартира на четвёртом этаже. В ней три комнаты, кухня и маленький балкон. Моя комната самая маленькая, но с большим окном. Под окном кровать, рядом письменный стол, а над столом полка. Ковёр старый и красный, а шторы бабушка сшила сама.)*

### Упражнения

1. В какой комнате готовят (по-английски)?
2. Назови три предмета мебели в спальне.
3. Дополни: *The lamp is … the desk.*
4. Дополни: *There … two armchairs in the living room.*
5. Исправь: *There is a pictures above the sofa.*
6. Где сейчас твоя сумка? Ответь с предлогом.
7. Опиши свою комнату пятью предложениями.

### Ответы

1. In the kitchen. 2. Например bed, wardrobe, desk. 3. on. 4. are. 5. There is a picture above the sofa. 6. Свой ответ, например *It's under the chair.* 7. Свой ответ: пять предложений с *there is*, *there are* и минимум двумя предлогами.`,
      },
      [
        q(t("You cook in the", "Եփում ես", "Готовят в"), [
          t("kitchen", "kitchen", "kitchen"),
          t("hall", "hall", "hall"),
          t("bedroom", "bedroom", "bedroom"),
        ], 0),
        q(t("The lamp is … the desk.", "The lamp is … the desk.", "The lamp is … the desk."), [
          t("in", "in", "in"),
          t("on", "on", "on"),
          t("under", "under", "under"),
        ], 1),
        q(t("There … two armchairs in the living room.", "There … two armchairs in the living room.", "There … two armchairs in the living room."), [
          t("is", "is", "is"),
          t("be", "be", "be"),
          t("are", "are", "are"),
        ], 2),
        q(t("A wardrobe is for", "Wardrobe-ը նախատեսված է", "Wardrobe нужен для"), [
          t("clothes", "հագուստի", "одежды"),
          t("plates", "ափսեների", "тарелок"),
          t("books", "գրքերի", "книг"),
        ], 0),
        q(t("«Above the sofa» means", "«Above the sofa» նշանակում է", "«Above the sofa» значит"), [
          t("under the sofa", "բազմոցի տակ", "под диваном"),
          t("higher than the sofa", "բազմոցից վերև", "выше дивана"),
          t("behind the sofa", "բազմոցի ետևում", "за диваном"),
        ], 1),
        q(t("A flat is", "Flat-ը", "Flat — это"), [
          t("a separate house", "առանձին տուն", "отдельный дом"),
          t("a garden", "այգի", "сад"),
          t("a home in a block of flats", "բնակարան շենքում", "квартира в доме"),
        ], 2),
      ],
    ),
    lesson(
      "housework-have-to",
      ["I have to tidy my room", "I have to tidy my room", "I have to tidy my room"],
      {
        en: ["Name ten housework jobs in English", "Use have to and has to for duties, with don't have to for what is not needed", "Ask and answer Do you have to …? about your own duties at home"],
        hy: ["Անվանել տնային տասը գործ անգլերեն", "Կիրառել have to-ն և has to-ն պարտականությունների համար, don't have to-ն՝ ոչ պարտադիրի", "Հարցնել և պատասխանել Do you have to …? տան պարտականությունների մասին"],
        ru: ["Назвать десять домашних дел по-английски", "Использовать have to и has to для обязанностей и don't have to для необязательного", "Спрашивать и отвечать Do you have to …? о своих обязанностях дома"],
      },
      {
        en: `## Housework

| Job | Meaning |
|---|---|
| tidy my room | put everything in its place |
| make the bed | tidy the bed in the morning |
| wash up / do the washing-up | wash the plates after a meal |
| lay the table | put the plates and forks on the table |
| take out the rubbish | carry the bin bag outside |
| do the shopping | buy the food |
| water the plants | give the plants water |
| hoover the carpet | clean the carpet with a machine |
| feed the cat | give the cat food |
| walk the dog | take the dog outside |

## Have to

**Have to** means a duty that comes from outside: a parent, a school, a rule.

| Person | Form | Example |
|---|---|---|
| I, you, we, they | have to | I **have to** feed the cat every morning. |
| he, she, it | has to | My brother **has to** take out the rubbish. |
| negative | don't / doesn't have to | We **don't have to** get up early on Sunday. |
| question | Do / Does … have to? | **Does** she **have to** help at home? |

**Don't have to** does not mean a prohibition. It means that the job is not necessary. A prohibition is **mustn't**.

> You **don't have to** wash up today. (It is not necessary.)\\
> You **mustn't** touch the cooker. (It is forbidden.)

## A short dialogue

> What do you have to do at home?\\
> I have to make my bed and feed the cat. At the weekend I also have to do the shopping with my mother.\\
> Do you have to wash up?\\
> No, I don't. My sister does the washing-up, but she doesn't have to walk the dog. That's my job.

### Exercises

1. What do you call the job of putting plates and forks on the table?
2. Complete: *My brother … to take out the rubbish.*
3. Make a question: *You have to help at home.*
4. Choose: *We (don't have to / mustn't) get up early on Sunday.*
5. Choose: *You (don't have to / mustn't) play with matches.*
6. Correct: *She have to feed the dog.*
7. Write five sentences about what you have to do at home.

### Answers

1. Lay the table. 2. has. 3. Do you have to help at home? 4. don't have to. 5. mustn't. 6. She has to feed the dog. 7. Your own answer: five sentences with *have to* or *has to*.`,
        hy: `## Տնային գործեր

| Job (գործ) | Նշանակությունը |
|---|---|
| tidy my room | սենյակը կարգի բերել |
| make the bed | անկողինը հավաքել |
| wash up / do the washing-up | ափսեները լվանալ |
| lay the table | սեղանը գցել |
| take out the rubbish | աղբը դուրս հանել |
| do the shopping | մթերք գնել |
| water the plants | ծաղիկները ջրել |
| hoover the carpet | գորգը փոշեկուլով մաքրել |
| feed the cat | կատվին կերակրել |
| walk the dog | շանը զբոսնելու տանել |

## Have to

**Have to**-ն նշանակում է դրսից եկած պարտականություն․ ծնողից, դպրոցից, կանոնից։

| Դեմք | Ձև | Օրինակ |
|---|---|---|
| I, you, we, they | have to | I **have to** feed the cat every morning. |
| he, she, it | has to | My brother **has to** take out the rubbish. |
| ժխտական | don't / doesn't have to | We **don't have to** get up early on Sunday. |
| հարցական | Do / Does … have to? | **Does** she **have to** help at home? |

**Don't have to**-ն արգելք չէ։ Այն նշանակում է, որ գործը պարտադիր չէ։ Արգելքը **mustn't**-ն է։

> You **don't have to** wash up today. *(Պարտադիր չէ։)*\\
> You **mustn't** touch the cooker. *(Արգելված է։)*

## Կարճ երկխոսություն

> What do you have to do at home?\\
> I have to make my bed and feed the cat. At the weekend I also have to do the shopping with my mother.\\
> Do you have to wash up?\\
> No, I don't. My sister does the washing-up, but she doesn't have to walk the dog. That's my job.

*(Ի՞նչ ես պարտավոր անել տանը։ – Պետք է անկողինս հավաքեմ և կատվին կերակրեմ։ Հանգստյան օրերին նաև մայրիկիս հետ մթերք եմ գնում։ – Ափսեներ լվանո՞ւմ ես։ – Ոչ։ Ափսեները քույրս է լվանում, բայց նա շանը զբոսնելու տանել պարտավոր չէ։ Դա իմ գործն է։)*

### Վարժություններ

1. Ինչպե՞ս է կոչվում սեղանը գցելու գործը (անգլերեն)։
2. Լրացրու․ *My brother … to take out the rubbish.*
3. Դարձրու հարցական․ *You have to help at home.*
4. Ընտրիր․ *We (don't have to / mustn't) get up early on Sunday.*
5. Ընտրիր․ *You (don't have to / mustn't) play with matches.*
6. Ուղղիր․ *She have to feed the dog.*
7. Գրիր հինգ նախադասություն այն մասին, ինչ պարտավոր ես անել տանը։

### Պատասխաններ

1. Lay the table. 2. has. 3. Do you have to help at home? 4. don't have to. 5. mustn't. 6. She has to feed the dog. 7. Սեփական պատասխան․ հինգ նախադասություն *have to* կամ *has to*-ով։`,
        ru: `## Домашние дела

| Job (дело) | Значение |
|---|---|
| tidy my room | убрать в комнате |
| make the bed | застелить постель |
| wash up / do the washing-up | мыть посуду |
| lay the table | накрыть на стол |
| take out the rubbish | вынести мусор |
| do the shopping | купить продукты |
| water the plants | полить цветы |
| hoover the carpet | пропылесосить ковёр |
| feed the cat | покормить кошку |
| walk the dog | выгулять собаку |

## Have to

**Have to** — обязанность, которая приходит извне: от родителей, школы, правила.

| Лицо | Форма | Пример |
|---|---|---|
| I, you, we, they | have to | I **have to** feed the cat every morning. |
| he, she, it | has to | My brother **has to** take out the rubbish. |
| отрицание | don't / doesn't have to | We **don't have to** get up early on Sunday. |
| вопрос | Do / Does … have to? | **Does** she **have to** help at home? |

**Don't have to** — это не запрет. Это значит, что дело необязательно. Запрет — **mustn't**.

> You **don't have to** wash up today. *(Необязательно.)*\\
> You **mustn't** touch the cooker. *(Нельзя.)*

## Короткий диалог

> What do you have to do at home?\\
> I have to make my bed and feed the cat. At the weekend I also have to do the shopping with my mother.\\
> Do you have to wash up?\\
> No, I don't. My sister does the washing-up, but she doesn't have to walk the dog. That's my job.

*(Что ты должен делать дома? – Я должен застилать постель и кормить кошку. На выходных ещё хожу за продуктами с мамой. – Посуду моешь? – Нет. Посуду моет сестра, но выгуливать собаку она не обязана. Это моё дело.)*

### Упражнения

1. Как называется дело «накрыть на стол» (по-английски)?
2. Дополни: *My brother … to take out the rubbish.*
3. Сделай вопрос: *You have to help at home.*
4. Выбери: *We (don't have to / mustn't) get up early on Sunday.*
5. Выбери: *You (don't have to / mustn't) play with matches.*
6. Исправь: *She have to feed the dog.*
7. Напиши пять предложений о том, что ты должен делать дома.

### Ответы

1. Lay the table. 2. has. 3. Do you have to help at home? 4. don't have to. 5. mustn't. 6. She has to feed the dog. 7. Свой ответ: пять предложений с *have to* или *has to*.`,
      },
      [
        q(t("«Lay the table» means", "«Lay the table» նշանակում է", "«Lay the table» значит"), [
          t("put the plates and forks on the table", "սեղանը գցել", "накрыть на стол"),
          t("wash the plates", "ափսեները լվանալ", "вымыть посуду"),
          t("buy the food", "մթերք գնել", "купить еду"),
        ], 0),
        q(t("My brother … to take out the rubbish.", "My brother … to take out the rubbish.", "My brother … to take out the rubbish."), [
          t("have", "have", "have"),
          t("has", "has", "has"),
          t("haves", "haves", "haves"),
        ], 1),
        q(t("The question form is", "Հարցական ձևը", "Вопросительная форма"), [
          t("You have to help?", "You have to help?", "You have to help?"),
          t("Have you to help?", "Have you to help?", "Have you to help?"),
          t("Do you have to help?", "Do you have to help?", "Do you have to help?"),
        ], 2),
        q(t("«You don't have to wash up» means", "«You don't have to wash up» նշանակում է", "«You don't have to wash up» значит"), [
          t("it isn't necessary", "պարտադիր չէ", "это необязательно"),
          t("it is forbidden", "արգելված է", "это запрещено"),
          t("you never wash up", "երբեք չես լվանում", "ты никогда не моешь посуду"),
        ], 0),
        q(t("A prohibition is", "Արգելքն արտահայտվում է", "Запрет выражается через"), [
          t("don't have to", "don't have to", "don't have to"),
          t("mustn't", "mustn't", "mustn't"),
          t("doesn't have", "doesn't have", "doesn't have"),
        ], 1),
        q(t("«Walk the dog» means", "«Walk the dog» նշանակում է", "«Walk the dog» значит"), [
          t("give the dog food", "շանը կերակրել", "покормить собаку"),
          t("wash the dog", "շանը լողացնել", "вымыть собаку"),
          t("take the dog outside", "շանը զբոսնելու տանել", "выгулять собаку"),
        ], 2),
      ],
    ),
    lesson(
      "possessive-pronouns",
      ["Mine, yours, his, hers: possessive pronouns", "Mine, yours, his, hers․ ստացական դերանուններ", "Mine, yours, his, hers: притяжательные местоимения"],
      {
        en: ["Tell the possessive adjectives from the possessive pronouns", "Answer Whose is it? with a pronoun or with 's", "Use the pronouns in short exchanges about things in the classroom"],
        hy: ["Տարբերել ստացական ածականները ստացական դերանուններից", "Պատասխանել Whose is it? հարցին դերանունով կամ 's-ով", "Կիրառել դերանունները դասարանի իրերի մասին կարճ երկխոսություններում"],
        ru: ["Отличать притяжательные прилагательные от притяжательных местоимений", "Отвечать на Whose is it? местоимением или формой с 's", "Использовать местоимения в коротких диалогах о вещах в классе"],
      },
      {
        en: `## Two columns

| Subject | Possessive adjective (+ noun) | Possessive pronoun (alone) |
|---|---|---|
| I | my book | mine |
| you | your book | yours |
| he | his book | his |
| she | her book | hers |
| it | its name | — |
| we | our books | ours |
| they | their books | theirs |

The adjective always stands **before a noun**. The pronoun stands **alone**, with no noun after it.

> This is **my** pen. The pen is **mine**.\\
> Those are **their** seats. Those seats are **theirs**.

Note the spelling: a possessive pronoun never takes an apostrophe. **Yours**, not *your's*. And **its** (of it) is not **it's** (it is).

## Whose?

| Question | Answers |
|---|---|
| Whose book is this? | It's **mine**. / It's **Ani's**. / It's **my sister's**. |
| Whose are these shoes? | They're **his**. / They're **Tigran's**. |

With a name we add **'s**: Ani**'s** bag. With a plural noun that already ends in -s we add only the apostrophe: the boy**s'** room.

## A short dialogue

> Is this your dictionary?\\
> No, it isn't mine. I think it's Ani's.\\
> Are these pencils hers too?\\
> No, they're ours. We bought them for the art lesson.\\
> And whose is the red bag under the desk?\\
> It's Tigran's. He always forgets it.

### Exercises

1. Which is the pronoun: *my* or *mine*?
2. Complete: *This book is … (I).*
3. Complete: *These seats are … (they).*
4. Correct: *This pen is your's.*
5. Rewrite with 's: *the bag of Ani*.
6. Answer: *Whose is this pencil?* (your own answer)
7. Write six short sentences about things in your classroom with *mine*, *yours*, *his*, *hers*, *ours* and *theirs*.

### Answers

1. Mine. 2. mine. 3. theirs. 4. This pen is yours. 5. Ani's bag. 6. Your own answer, for example *It's mine.* 7. Your own answer: six sentences, one for each pronoun.`,
        hy: `## Երկու սյունակ

| Ենթակա | Ստացական ածական (+ գոյական) | Ստացական դերանուն (առանձին) |
|---|---|---|
| I | my book | mine |
| you | your book | yours |
| he | his book | his |
| she | her book | hers |
| it | its name | — |
| we | our books | ours |
| they | their books | theirs |

Ածականը միշտ կանգնում է **գոյականից առաջ**։ Դերանունը կանգնում է **առանձին**, իրենից հետո գոյական չի լինում։

> This is **my** pen. The pen is **mine**. *(Սա իմ գրիչն է։ Գրիչն իմն է։)*\\
> Those are **their** seats. Those seats are **theirs**. *(Դրանք նրանց տեղերն են։ Այդ տեղերը նրանցն են։)*

Ուշադրություն ուղղագրությանը․ ստացական դերանունն երբեք չի ստանում ապաթարց։ **Yours**, ոչ թե *your's*։ Եվ **its** (դրա) նույնը չէ, ինչ **it's** (it is)։

## Whose?

| Հարց | Պատասխաններ |
|---|---|
| Whose book is this? | It's **mine**. / It's **Ani's**. / It's **my sister's**. |
| Whose are these shoes? | They're **his**. / They're **Tigran's**. |

Անվան հետ ավելանում է **'s**․ Ani**'s** bag։ Հոգնակի գոյականը, որն արդեն -s-ով է ավարտվում, ստանում է միայն ապաթարց․ the boy**s'** room։

## Կարճ երկխոսություն

> Is this your dictionary?\\
> No, it isn't mine. I think it's Ani's.\\
> Are these pencils hers too?\\
> No, they're ours. We bought them for the art lesson.\\
> And whose is the red bag under the desk?\\
> It's Tigran's. He always forgets it.

*(Սա քո բառարա՞նն է։ – Ոչ, իմը չէ։ Կարծում եմ՝ Անիինն է։ – Այս մատիտները նո՞ւյնպես նրանն են։ – Ոչ, մերն են։ Նկարչության դասի համար գնեցինք։ – Իսկ ո՞ւմն է գրասեղանի տակի կարմիր պայուսակը։ – Տիգրանինն է։ Միշտ մոռանում է։)*

### Վարժություններ

1. Ո՞րն է դերանունը՝ *my*-ն, թե՞ *mine*-ը։
2. Լրացրու․ *This book is … (I).*
3. Լրացրու․ *These seats are … (they).*
4. Ուղղիր․ *This pen is your's.*
5. Վերաշարադրիր 's-ով․ *the bag of Ani*։
6. Պատասխանիր․ *Whose is this pencil?*
7. Գրիր վեց կարճ նախադասություն դասարանի իրերի մասին *mine*, *yours*, *his*, *hers*, *ours* և *theirs*-ով։

### Պատասխաններ

1. Mine. 2. mine. 3. theirs. 4. This pen is yours. 5. Ani's bag. 6. Սեփական պատասխան, օրինակ՝ *It's mine.* 7. Սեփական պատասխան․ վեց նախադասություն՝ մեկը յուրաքանչյուր դերանվան համար։`,
        ru: `## Два столбца

| Подлежащее | Притяжательное прилагательное (+ существительное) | Притяжательное местоимение (без существительного) |
|---|---|---|
| I | my book | mine |
| you | your book | yours |
| he | his book | his |
| she | her book | hers |
| it | its name | — |
| we | our books | ours |
| they | their books | theirs |

Прилагательное всегда стоит **перед существительным**. Местоимение стоит **само по себе**, после него существительного нет.

> This is **my** pen. The pen is **mine**. *(Это моя ручка. Ручка моя.)*\\
> Those are **their** seats. Those seats are **theirs**. *(Это их места. Эти места их.)*

Обрати внимание на написание: притяжательное местоимение никогда не пишется с апострофом. **Yours**, а не *your's*. И **its** (его, о предмете) — не то же самое, что **it's** (it is).

## Whose?

| Вопрос | Ответы |
|---|---|
| Whose book is this? | It's **mine**. / It's **Ani's**. / It's **my sister's**. |
| Whose are these shoes? | They're **his**. / They're **Tigran's**. |

С именем добавляется **'s**: Ani**'s** bag. К существительному во множественном числе на -s добавляется только апостроф: the boy**s'** room.

## Короткий диалог

> Is this your dictionary?\\
> No, it isn't mine. I think it's Ani's.\\
> Are these pencils hers too?\\
> No, they're ours. We bought them for the art lesson.\\
> And whose is the red bag under the desk?\\
> It's Tigran's. He always forgets it.

*(Это твой словарь? – Нет, не мой. Думаю, это Ани. – Эти карандаши тоже её? – Нет, наши. Мы купили их для урока рисования. – А чья красная сумка под партой? – Тиграна. Он вечно её забывает.)*

### Упражнения

1. Что из этого местоимение: *my* или *mine*?
2. Дополни: *This book is … (I).*
3. Дополни: *These seats are … (they).*
4. Исправь: *This pen is your's.*
5. Перепиши с 's: *the bag of Ani*.
6. Ответь: *Whose is this pencil?*
7. Напиши шесть коротких предложений о вещах в классе с *mine*, *yours*, *his*, *hers*, *ours* и *theirs*.

### Ответы

1. Mine. 2. mine. 3. theirs. 4. This pen is yours. 5. Ani's bag. 6. Свой ответ, например *It's mine.* 7. Свой ответ: шесть предложений, по одному на каждое местоимение.`,
      },
      [
        q(t("Which word is a possessive pronoun?", "Ո՞ր բառն է ստացական դերանուն", "Какое слово — притяжательное местоимение?"), [
          t("mine", "mine", "mine"),
          t("my", "my", "my"),
          t("me", "me", "me"),
        ], 0),
        q(t("These seats are … (they).", "These seats are … (they).", "These seats are … (they)."), [
          t("their", "their", "their"),
          t("theirs", "theirs", "theirs"),
          t("they're", "they're", "they're"),
        ], 1),
        q(t("The correct spelling is", "Ճիշտ ուղղագրությունը", "Правильное написание"), [
          t("your's", "your's", "your's"),
          t("yours'", "yours'", "yours'"),
          t("yours", "yours", "yours"),
        ], 2),
        q(t("«the bag of Ani» with 's is", "«the bag of Ani»-ն 's-ով", "«the bag of Ani» с 's"), [
          t("Ani's bag", "Ani's bag", "Ani's bag"),
          t("Anis bag", "Anis bag", "Anis bag"),
          t("Ani bag's", "Ani bag's", "Ani bag's"),
        ], 0),
        q(t("A possessive adjective is followed by", "Ստացական ածականից հետո գալիս է", "После притяжательного прилагательного идёт"), [
          t("nothing", "ոչինչ", "ничего"),
          t("a noun", "գոյական", "существительное"),
          t("a verb", "բայ", "глагол"),
        ], 1),
        q(t("«It's» means", "«It's» նշանակում է", "«It's» значит"), [
          t("of it", "դրա", "его, о предмете"),
          t("their", "նրանց", "их"),
          t("it is", "it is", "it is"),
        ], 2),
      ],
    ),
    lesson(
      "ordinal-numbers-dates",
      ["First, second, third: dates and birthdays", "First, second, third․ ամսաթվեր", "First, second, third: даты и дни рождения"],
      {
        en: ["Form the ordinal numbers from first to thirty-first", "Say and write dates in the British and the American way", "Ask and answer When is your birthday?"],
        hy: ["Կազմել դասական թվականները first-ից thirty-first", "Ասել և գրել ամսաթվերը բրիտանական և ամերիկյան ձևով", "Հարցնել և պատասխանել When is your birthday?"],
        ru: ["Образовывать порядковые числительные от first до thirty-first", "Говорить и записывать даты по-британски и по-американски", "Спрашивать и отвечать When is your birthday?"],
      },
      {
        en: `## The ordinal numbers

Most ordinals are the cardinal number plus **-th**: four → four**th**, seven → seven**th**.

| Irregular | Spelling change |
|---|---|
| one → first | five → fifth |
| two → second | eight → eighth |
| three → third | nine → ninth |
| | twelve → twelfth |

Numbers ending in -y change -y to -ie: twenty → twent**ie**th, thirty → thirt**ie**th.

| 20th | 21st | 22nd | 23rd | 24th | 30th | 31st |
|---|---|---|---|---|---|---|
| twentieth | twenty-first | twenty-second | twenty-third | twenty-fourth | thirtieth | thirty-first |

The short written forms take the last two letters of the word: 1**st**, 2**nd**, 3**rd**, 4**th**.

## Dates

| Style | Written | Said |
|---|---|---|
| British | 5 April 2026 or 5th April | the fifth of April |
| American | April 5, 2026 | April fifth |

Before a date we use **on**: We meet **on** the fifth of April. Before a month alone we also use **in**: **in** April.

The year 2026 is said **twenty twenty-six**. The year 1999 is said **nineteen ninety-nine**.

## Birthdays

| Question | Answer |
|---|---|
| When is your birthday? | It's on the twelfth of June. |
| What's the date today? | It's the first of March. |
| Which year were you born in? | I was born in 2014. |

### Exercises

1. Write the ordinal of *nine*.
2. Write the ordinal of *twelve*.
3. Write 23rd in words.
4. Say the date 5 April the British way.
5. Correct: *My birthday is in the fifth of May.*
6. How do you say the year 1999?
7. Write five sentences about birthdays in your family, with dates.

### Answers

1. Ninth. 2. Twelfth. 3. Twenty-third. 4. The fifth of April. 5. My birthday is on the fifth of May. 6. Nineteen ninety-nine. 7. Your own answer: five sentences with *on* and an ordinal number.`,
        hy: `## Դասական թվականները

Դասականների մեծ մասը քանակականն է գումարած **-th**․ four → four**th**, seven → seven**th**։

| Անկանոն | Ուղղագրական փոփոխություն |
|---|---|
| one → first | five → fifth |
| two → second | eight → eighth |
| three → third | nine → ninth |
| | twelve → twelfth |

-y-ով ավարտվողները -y-ն դարձնում են -ie․ twenty → twent**ie**th, thirty → thirt**ie**th։

| 20th | 21st | 22nd | 23rd | 24th | 30th | 31st |
|---|---|---|---|---|---|---|
| twentieth | twenty-first | twenty-second | twenty-third | twenty-fourth | thirtieth | thirty-first |

Կարճ գրությունը վերցնում է բառի վերջին երկու տառը․ 1**st**, 2**nd**, 3**rd**, 4**th**։

## Ամսաթվերը

| Ոճ | Գրվում է | Կարդացվում է |
|---|---|---|
| բրիտանական | 5 April 2026 կամ 5th April | the fifth of April |
| ամերիկյան | April 5, 2026 | April fifth |

Ամսաթվից առաջ դրվում է **on**․ We meet **on** the fifth of April։ Միայն ամսվանից առաջ՝ **in**․ **in** April։

2026 թվականը կարդացվում է **twenty twenty-six**, 1999-ը՝ **nineteen ninety-nine**։

## Ծննդյան օրեր

| Հարց | Պատասխան |
|---|---|
| When is your birthday? | It's on the twelfth of June. |
| What's the date today? | It's the first of March. |
| Which year were you born in? | I was born in 2014. |

### Վարժություններ

1. Գրիր *nine*-ի դասականը։
2. Գրիր *twelve*-ի դասականը։
3. Գրիր 23rd-ը բառերով։
4. Ասա 5 April ամսաթիվը բրիտանական ձևով։
5. Ուղղիր․ *My birthday is in the fifth of May.*
6. Ինչպե՞ս է կարդացվում 1999 թվականը։
7. Գրիր հինգ նախադասություն ընտանիքիդ ծննդյան օրերի մասին՝ ամսաթվերով։

### Պատասխաններ

1. Ninth. 2. Twelfth. 3. Twenty-third. 4. The fifth of April. 5. My birthday is on the fifth of May. 6. Nineteen ninety-nine. 7. Սեփական պատասխան․ հինգ նախադասություն *on*-ով և դասական թվականով։`,
        ru: `## Порядковые числительные

Большинство порядковых — это количественное плюс **-th**: four → four**th**, seven → seven**th**.

| Неправильные | Изменение написания |
|---|---|
| one → first | five → fifth |
| two → second | eight → eighth |
| three → third | nine → ninth |
| | twelve → twelfth |

Числительные на -y меняют -y на -ie: twenty → twent**ie**th, thirty → thirt**ie**th.

| 20th | 21st | 22nd | 23rd | 24th | 30th | 31st |
|---|---|---|---|---|---|---|
| twentieth | twenty-first | twenty-second | twenty-third | twenty-fourth | thirtieth | thirty-first |

Краткая запись берёт две последние буквы слова: 1**st**, 2**nd**, 3**rd**, 4**th**.

## Даты

| Стиль | Запись | Чтение |
|---|---|---|
| британский | 5 April 2026 или 5th April | the fifth of April |
| американский | April 5, 2026 | April fifth |

Перед датой ставится **on**: We meet **on** the fifth of April. Перед одним названием месяца — **in**: **in** April.

Год 2026 читается **twenty twenty-six**, 1999 — **nineteen ninety-nine**.

## Дни рождения

| Вопрос | Ответ |
|---|---|
| When is your birthday? | It's on the twelfth of June. |
| What's the date today? | It's the first of March. |
| Which year were you born in? | I was born in 2014. |

### Упражнения

1. Напиши порядковое от *nine*.
2. Напиши порядковое от *twelve*.
3. Запиши 23rd словами.
4. Прочитай дату 5 April по-британски.
5. Исправь: *My birthday is in the fifth of May.*
6. Как читается год 1999?
7. Напиши пять предложений о днях рождения в твоей семье с датами.

### Ответы

1. Ninth. 2. Twelfth. 3. Twenty-third. 4. The fifth of April. 5. My birthday is on the fifth of May. 6. Nineteen ninety-nine. 7. Свой ответ: пять предложений с *on* и порядковым числительным.`,
      },
      [
        q(t("The ordinal of «nine» is", "«nine»-ի դասականը", "Порядковое от «nine»"), [
          t("ninth", "ninth", "ninth"),
          t("nineth", "nineth", "nineth"),
          t("ninenth", "ninenth", "ninenth"),
        ], 0),
        q(t("23rd in words is", "23rd-ը բառերով", "23rd словами"), [
          t("twenty-three", "twenty-three", "twenty-three"),
          t("twenty-third", "twenty-third", "twenty-third"),
          t("twentieth-three", "twentieth-three", "twentieth-three"),
        ], 1),
        q(t("Before a date we use", "Ամսաթվից առաջ դրվում է", "Перед датой ставится"), [
          t("in", "in", "in"),
          t("at", "at", "at"),
          t("on", "on", "on"),
        ], 2),
        q(t("The British way to say 5 April is", "5 April-ի բրիտանական կարդալը", "По-британски 5 April читается"), [
          t("the fifth of April", "the fifth of April", "the fifth of April"),
          t("April five", "April five", "April five"),
          t("five April", "five April", "five April"),
        ], 0),
        q(t("The ordinal of «twelve» is", "«twelve»-ի դասականը", "Порядковое от «twelve»"), [
          t("twelveth", "twelveth", "twelveth"),
          t("twelfth", "twelfth", "twelfth"),
          t("twelth", "twelth", "twelth"),
        ], 1),
        q(t("The year 1999 is said", "1999 թվականը կարդացվում է", "Год 1999 читается"), [
          t("one thousand nine hundred ninety-nine", "one thousand nine hundred ninety-nine", "one thousand nine hundred ninety-nine"),
          t("one nine nine nine", "one nine nine nine", "one nine nine nine"),
          t("nineteen ninety-nine", "nineteen ninety-nine", "nineteen ninety-nine"),
        ], 2),
      ],
    ),
    lesson(
      "family-traditions",
      ["Family traditions in Armenia, Russia and Britain", "Ընտանեկան ավանդույթներ Հայաստանում, Ռուսաստանում և Բրիտանիայում", "Семейные традиции в Армении, России и Британии"],
      {
        en: ["Name the main family celebrations of the three countries", "Describe a tradition with the present simple and usually, always and every year", "Compare two traditions in writing"],
        hy: ["Անվանել երեք երկրի հիմնական ընտանեկան տոները", "Նկարագրել ավանդույթը present simple-ով և usually, always, every year բառերով", "Գրավոր համեմատել երկու ավանդույթ"],
        ru: ["Назвать главные семейные праздники трёх стран", "Описывать традицию в present simple со словами usually, always и every year", "Письменно сравнивать две традиции"],
      },
      {
        en: `## Celebrations

| Country | Celebration | What families do |
|---|---|---|
| Armenia | New Year and Christmas on 6 January | lay a big table, visit relatives, eat gata and dried fruit |
| Armenia | Vardavar in summer | pour water over each other in the street |
| Russia | New Year | decorate the tree, watch the clock at midnight, give presents |
| Russia | Maslenitsa in late winter | make pancakes for a whole week |
| Britain | Christmas on 25 December | hang stockings, open presents in the morning, eat turkey |
| Britain | Bonfire Night on 5 November | watch fireworks outside |

## Describing a tradition

Traditions are described in the **present simple**, because they happen again and again.

| Word | Example |
|---|---|
| always | We **always** visit my grandparents on New Year's Day. |
| usually | My mother **usually** makes gata on Saturday. |
| every year | **Every year** we go to the village in August. |
| on + day | **On** the sixth of January we go to church. |

> In our family we **always** open the presents in the morning. My father **usually** cooks, and the children **lay** the table.

## A short text

> In our family the first day of the year is the longest. We get up late, and then the guests begin to arrive. My grandmother puts out dried fruit, nuts and gata, and the table stays full until the evening. Every year my uncle brings the same box of sweets and says the same joke about it. In Britain my pen friend Tom does something different: his family opens the presents under the tree at eight o'clock in the morning and eats a big dinner at two.

## Comparing

| Phrase | Example |
|---|---|
| Both … | **Both** families lay a big table. |
| In Armenia …, but in Britain … | In Armenia we visit relatives, **but in Britain** people stay at home. |
| The same thing is … | **The same thing is** the presents. |

### Exercises

1. Name one Armenian and one British celebration.
2. Which tense describes a tradition?
3. Complete: *We … visit our grandparents on New Year's Day.* (always)
4. Correct: *Every year we went to the village in August.*
5. Write one sentence with *both*.
6. Describe one tradition of your family in three sentences.
7. Compare a tradition of your country with a British one in five sentences.

### Answers

1. For example Vardavar and Bonfire Night. 2. The present simple. 3. always. 4. Every year we go to the village in August. 5. Your own answer, for example *Both countries decorate a tree.* 6. Your own answer: three present simple sentences. 7. Your own answer: five sentences with *both* or *but*.`,
        hy: `## Տոները

| Երկիր | Տոն | Ինչ են անում ընտանիքները |
|---|---|---|
| Armenia | New Year and Christmas on 6 January | մեծ սեղան են գցում, այցելում են հարազատներին, ուտում են գաթա և չրեր |
| Armenia | Vardavar in summer | փողոցում ջուր են լցնում իրար վրա |
| Russia | New Year | զարդարում են տոնածառը, կեսգիշերին նայում են ժամացույցին, նվերներ են տալիս |
| Russia | Maslenitsa in late winter | մի ամբողջ շաբաթ բլիթներ են թխում |
| Britain | Christmas on 25 December | գուլպաներ են կախում, առավոտյան բացում են նվերները, հնդկահավ են ուտում |
| Britain | Bonfire Night on 5 November | դրսում հրավառություն են դիտում |

## Ավանդույթի նկարագրությունը

Ավանդույթները նկարագրվում են **present simple**-ով, որովհետև կրկնվում են։

| Բառ | Օրինակ |
|---|---|
| always | We **always** visit my grandparents on New Year's Day. |
| usually | My mother **usually** makes gata on Saturday. |
| every year | **Every year** we go to the village in August. |
| on + օր | **On** the sixth of January we go to church. |

> In our family we **always** open the presents in the morning. My father **usually** cooks, and the children **lay** the table. *(Մեր ընտանիքում նվերները միշտ առավոտյան ենք բացում։ Հայրիկս սովորաբար եփում է, իսկ երեխաները սեղանն են գցում։)*

## Կարճ տեքստ

> In our family the first day of the year is the longest. We get up late, and then the guests begin to arrive. My grandmother puts out dried fruit, nuts and gata, and the table stays full until the evening. Every year my uncle brings the same box of sweets and says the same joke about it. In Britain my pen friend Tom does something different: his family opens the presents under the tree at eight o'clock in the morning and eats a big dinner at two.

*(Մեր ընտանիքում տարվա առաջին օրն ամենաերկարն է։ Ուշ ենք արթնանում, հետո սկսում են գալ հյուրերը։ Տատիկս դնում է չրեր, ընկույզ և գաթա, և սեղանը մինչև երեկո լիքն է մնում։ Ամեն տարի քեռիս նույն տուփ քաղցրավենիքն է բերում և դրա մասին նույն կատակն անում։ Բրիտանիայում իմ նամակընկեր Թոմի մոտ այլ կերպ է․ նրա ընտանիքն առավոտյան ժամն ութին է բացում ծառի տակի նվերները և ժամն երկուսին մեծ ճաշ ուտում։)*

## Համեմատելը

| Արտահայտություն | Օրինակ |
|---|---|
| Both … | **Both** families lay a big table. |
| In Armenia …, but in Britain … | In Armenia we visit relatives, **but in Britain** people stay at home. |
| The same thing is … | **The same thing is** the presents. |

### Վարժություններ

1. Անվանիր մեկ հայկական և մեկ բրիտանական տոն։
2. Ո՞ր ժամանակն է նկարագրում ավանդույթը։
3. Լրացրու․ *We … visit our grandparents on New Year's Day.* (always)
4. Ուղղիր․ *Every year we went to the village in August.*
5. Գրիր մեկ նախադասություն *both*-ով։
6. Նկարագրիր քո ընտանիքի մեկ ավանդույթ երեք նախադասությամբ։
7. Հինգ նախադասությամբ համեմատիր քո երկրի ավանդույթը բրիտանականի հետ։

### Պատասխաններ

1. Օրինակ՝ Vardavar և Bonfire Night։ 2. Present simple-ը։ 3. always. 4. Every year we go to the village in August. 5. Սեփական պատասխան, օրինակ՝ *Both countries decorate a tree.* 6. Սեփական պատասխան․ երեք present simple նախադասություն։ 7. Սեփական պատասխան․ հինգ նախադասություն *both*-ով կամ *but*-ով։`,
        ru: `## Праздники

| Страна | Праздник | Что делают семьи |
|---|---|---|
| Armenia | New Year and Christmas on 6 January | накрывают большой стол, ходят к родственникам, едят гату и сухофрукты |
| Armenia | Vardavar in summer | обливают друг друга водой на улице |
| Russia | New Year | наряжают ёлку, смотрят на часы в полночь, дарят подарки |
| Russia | Maslenitsa in late winter | всю неделю пекут блины |
| Britain | Christmas on 25 December | вешают носки, утром открывают подарки, едят индейку |
| Britain | Bonfire Night on 5 November | смотрят фейерверк на улице |

## Как описывают традицию

Традиции описывают в **present simple**, потому что они повторяются.

| Слово | Пример |
|---|---|
| always | We **always** visit my grandparents on New Year's Day. |
| usually | My mother **usually** makes gata on Saturday. |
| every year | **Every year** we go to the village in August. |
| on + день | **On** the sixth of January we go to church. |

> In our family we **always** open the presents in the morning. My father **usually** cooks, and the children **lay** the table. *(У нас в семье подарки всегда открывают утром. Папа обычно готовит, а дети накрывают на стол.)*

## Короткий текст

> In our family the first day of the year is the longest. We get up late, and then the guests begin to arrive. My grandmother puts out dried fruit, nuts and gata, and the table stays full until the evening. Every year my uncle brings the same box of sweets and says the same joke about it. In Britain my pen friend Tom does something different: his family opens the presents under the tree at eight o'clock in the morning and eats a big dinner at two.

*(В нашей семье первый день года самый длинный. Мы встаём поздно, а потом начинают приходить гости. Бабушка выставляет сухофрукты, орехи и гату, и стол остаётся полным до вечера. Каждый год дядя приносит одну и ту же коробку конфет и шутит про неё одинаково. В Британии у моего друга по переписке Тома иначе: его семья открывает подарки под ёлкой в восемь утра и обедает в два.)*

## Как сравнивать

| Выражение | Пример |
|---|---|
| Both … | **Both** families lay a big table. |
| In Armenia …, but in Britain … | In Armenia we visit relatives, **but in Britain** people stay at home. |
| The same thing is … | **The same thing is** the presents. |

### Упражнения

1. Назови один армянский и один британский праздник.
2. Какое время описывает традицию?
3. Дополни: *We … visit our grandparents on New Year's Day.* (always)
4. Исправь: *Every year we went to the village in August.*
5. Напиши одно предложение с *both*.
6. Опиши одну традицию своей семьи тремя предложениями.
7. Сравни традицию своей страны с британской пятью предложениями.

### Ответы

1. Например Vardavar и Bonfire Night. 2. Present simple. 3. always. 4. Every year we go to the village in August. 5. Свой ответ, например *Both countries decorate a tree.* 6. Свой ответ: три предложения в present simple. 7. Свой ответ: пять предложений с *both* или *but*.`,
      },
      [
        q(t("Vardavar is a celebration of", "Vardavar-ը տոն է", "Vardavar — праздник"), [
          t("Armenia", "Armenia", "Armenia"),
          t("Britain", "Britain", "Britain"),
          t("Russia", "Russia", "Russia"),
        ], 0),
        q(t("Traditions are described in", "Ավանդույթները նկարագրվում են", "Традиции описывают в"), [
          t("the past simple", "past simple-ով", "past simple"),
          t("the present simple", "present simple-ով", "present simple"),
          t("the present continuous", "present continuous-ով", "present continuous"),
        ], 1),
        q(t("On which date is Christmas in Armenia?", "Ե՞րբ է Սուրբ Ծնունդը Հայաստանում", "Какого числа Рождество в Армении?"), [
          t("25 December", "25 December", "25 December"),
          t("1 January", "1 January", "1 January"),
          t("6 January", "6 January", "6 January"),
        ], 2),
        q(t("Maslenitsa is the week of", "Maslenitsa-ն շաբաթն է", "Масленица — неделя"), [
          t("pancakes", "բլիթների", "блинов"),
          t("fireworks", "հրավառության", "фейерверков"),
          t("water", "ջրի", "воды"),
        ], 0),
        q(t("«Both families lay a big table» means", "«Both families lay a big table» նշանակում է", "«Both families lay a big table» значит"), [
          t("only one family does it", "միայն մեկ ընտանիքն է անում", "это делает только одна семья"),
          t("the two families do the same", "երկու ընտանիքն էլ նույնն են անում", "обе семьи делают одно и то же"),
          t("neither family does it", "ոչ մի ընտանիք չի անում", "ни одна семья так не делает"),
        ], 1),
        q(t("Bonfire Night is on", "Bonfire Night-ը", "Bonfire Night — это"), [
          t("5 January", "5 January", "5 January"),
          t("25 December", "25 December", "25 December"),
          t("5 November", "5 November", "5 November"),
        ], 2),
      ],
    ),
    lesson(
      "describing-my-home-6",
      ["Writing about my home", "Գրել իմ տան մասին", "Пишем о своём доме"],
      {
        en: ["Plan a description of a home in four paragraphs", "Join sentences with and, but, because and which", "Write a description of about eighty words and check it"],
        hy: ["Պլանավորել տան նկարագրությունը չորս պարբերությամբ", "Միացնել նախադասությունները and, but, because և which բառերով", "Գրել մոտ ութսուն բառանոց նկարագրություն և ստուգել այն"],
        ru: ["Планировать описание дома из четырёх абзацев", "Соединять предложения словами and, but, because и which", "Написать описание примерно в восемьдесят слов и проверить его"],
      },
      {
        en: `## The plan

| Paragraph | Content |
|---|---|
| 1 | where you live: a town or a village, a house or a flat, which floor |
| 2 | the rooms: how many, which ones, what they are like |
| 3 | your own room: the furniture and where it stands |
| 4 | your opinion: what you like and what you would change |

## Joining sentences

A text of short sentences sounds like a list. Join them.

| Word | Use | Example |
|---|---|---|
| and | adds | The kitchen is small **and** bright. |
| but | contrasts | My room is small, **but** I like it. |
| because | gives a reason | I like the balcony **because** we grow flowers there. |
| which | describes a thing | We have an old carpet, **which** my grandmother made. |
| where | describes a place | This is the room **where** I do my homework. |

## A model text

> I live in Gyumri, in a block of flats on the third floor. Our flat isn't big, but there is enough room for four people. It has got two bedrooms, a living room, a kitchen and a long hall where we keep the bicycles. My room is the smallest one. There is a bed under the window, a desk next to it and a shelf full of books above the desk. I like my room because it is quiet in the afternoon. If I could change one thing, I would paint the walls green.

## Checking

1. Four paragraphs?
2. At least three joining words?
3. Present simple with the -s ending where it is needed?
4. *a*, *an* and *the* in place?
5. Capital letters and full stops?

### Exercises

1. What goes in the first paragraph?
2. Join with *because*: *I like the balcony. We grow flowers there.*
3. Join with *but*: *My room is small. I like it.*
4. Join with *which*: *We have an old carpet. My grandmother made it.*
5. Correct: *My room are the smallest one.*
6. Write the third paragraph about your own room.
7. Write the whole description of your home in about eighty words.

### Answers

1. Where you live: town or village, house or flat, which floor. 2. I like the balcony because we grow flowers there. 3. My room is small, but I like it. 4. We have an old carpet, which my grandmother made. 5. My room is the smallest one. 6. Your own answer: three or four sentences with furniture and prepositions. 7. Your own answer: four paragraphs, about eighty words, all five checks done.`,
        hy: `## Պլանը

| Պարբերություն | Բովանդակություն |
|---|---|
| 1 | որտեղ ես ապրում․ քաղաք կամ գյուղ, տուն կամ բնակարան, որերորդ հարկ |
| 2 | սենյակները․ քանիսը, որոնք, ինչպիսին են |
| 3 | քո սենյակը․ կահույքը և որտեղ է կանգնած |
| 4 | քո կարծիքը․ ինչն է դուր գալիս և ինչը կփոխեիր |

## Նախադասությունները միացնելը

Կարճ նախադասությունների տեքստը ցուցակի պես է հնչում։ Միացրու դրանք։

| Բառ | Կիրառություն | Օրինակ |
|---|---|---|
| and | ավելացնում է | The kitchen is small **and** bright. |
| but | հակադրում է | My room is small, **but** I like it. |
| because | պատճառ է տալիս | I like the balcony **because** we grow flowers there. |
| which | նկարագրում է իրը | We have an old carpet, **which** my grandmother made. |
| where | նկարագրում է վայրը | This is the room **where** I do my homework. |

## Օրինակելի տեքստ

> I live in Gyumri, in a block of flats on the third floor. Our flat isn't big, but there is enough room for four people. It has got two bedrooms, a living room, a kitchen and a long hall where we keep the bicycles. My room is the smallest one. There is a bed under the window, a desk next to it and a shelf full of books above the desk. I like my room because it is quiet in the afternoon. If I could change one thing, I would paint the walls green.

*(Ապրում եմ Գյումրիում, բազմաբնակարան շենքի երրորդ հարկում։ Մեր բնակարանը մեծ չէ, բայց չորս հոգու համար բավական տեղ կա։ Ունի երկու ննջասենյակ, հյուրասենյակ, խոհանոց և երկար նախասենյակ, որտեղ հեծանիվներն ենք պահում։ Իմ սենյակն ամենափոքրն է։ Պատուհանի տակ մահճակալ է, կողքին՝ գրասեղան, վերևում՝ գրքերով լի դարակ։ Սենյակս դուր է գալիս, որովհետև կեսօրին հանգիստ է։ Եթե մի բան փոխեի, պատերը կանաչ կներկեի։)*

## Ստուգում

1. Չո՞րս պարբերություն է։
2. Առնվազն երե՞ք միացնող բառ կա։
3. Present simple-ում -s-ը տեղո՞ւմ է։
4. *a*, *an* և *the*-ն տեղո՞ւմ են։
5. Մեծատառեր և կետեր կա՞ն։

### Վարժություններ

1. Ի՞նչ է գրվում առաջին պարբերությունում։
2. Միացրու *because*-ով․ *I like the balcony. We grow flowers there.*
3. Միացրու *but*-ով․ *My room is small. I like it.*
4. Միացրու *which*-ով․ *We have an old carpet. My grandmother made it.*
5. Ուղղիր․ *My room are the smallest one.*
6. Գրիր երրորդ պարբերությունը քո սենյակի մասին։
7. Գրիր քո տան ամբողջ նկարագրությունը մոտ ութսուն բառով։

### Պատասխաններ

1. Որտեղ ես ապրում․ քաղաք կամ գյուղ, տուն կամ բնակարան, որերորդ հարկ։ 2. I like the balcony because we grow flowers there. 3. My room is small, but I like it. 4. We have an old carpet, which my grandmother made. 5. My room is the smallest one. 6. Սեփական պատասխան․ երեք-չորս նախադասություն կահույքով և նախդիրներով։ 7. Սեփական պատասխան․ չորս պարբերություն, մոտ ութսուն բառ, հինգ ստուգումն արած։`,
        ru: `## План

| Абзац | Содержание |
|---|---|
| 1 | где ты живёшь: город или село, дом или квартира, какой этаж |
| 2 | комнаты: сколько, какие, какие они |
| 3 | твоя комната: мебель и где она стоит |
| 4 | твоё мнение: что нравится и что бы ты изменил |

## Как соединять предложения

Текст из коротких предложений звучит как список. Соединяй их.

| Слово | Для чего | Пример |
|---|---|---|
| and | добавляет | The kitchen is small **and** bright. |
| but | противопоставляет | My room is small, **but** I like it. |
| because | даёт причину | I like the balcony **because** we grow flowers there. |
| which | описывает предмет | We have an old carpet, **which** my grandmother made. |
| where | описывает место | This is the room **where** I do my homework. |

## Образец текста

> I live in Gyumri, in a block of flats on the third floor. Our flat isn't big, but there is enough room for four people. It has got two bedrooms, a living room, a kitchen and a long hall where we keep the bicycles. My room is the smallest one. There is a bed under the window, a desk next to it and a shelf full of books above the desk. I like my room because it is quiet in the afternoon. If I could change one thing, I would paint the walls green.

*(Я живу в Гюмри, в многоквартирном доме на третьем этаже. Наша квартира небольшая, но места на четверых хватает. В ней две спальни, гостиная, кухня и длинная прихожая, где мы держим велосипеды. Моя комната самая маленькая. Под окном кровать, рядом стол, а над столом полка, полная книг. Мне нравится моя комната, потому что днём там тихо. Если бы я мог изменить одно, я покрасил бы стены в зелёный.)*

## Проверка

1. Четыре абзаца?
2. Минимум три соединительных слова?
3. Present simple с -s там, где нужно?
4. *a*, *an* и *the* на месте?
5. Заглавные буквы и точки?

### Упражнения

1. Что пишут в первом абзаце?
2. Соедини через *because*: *I like the balcony. We grow flowers there.*
3. Соедини через *but*: *My room is small. I like it.*
4. Соедини через *which*: *We have an old carpet. My grandmother made it.*
5. Исправь: *My room are the smallest one.*
6. Напиши третий абзац о своей комнате.
7. Напиши всё описание своего дома примерно в восемьдесят слов.

### Ответы

1. Где ты живёшь: город или село, дом или квартира, этаж. 2. I like the balcony because we grow flowers there. 3. My room is small, but I like it. 4. We have an old carpet, which my grandmother made. 5. My room is the smallest one. 6. Свой ответ: три-четыре предложения с мебелью и предлогами. 7. Свой ответ: четыре абзаца, около восьмидесяти слов, все пять проверок сделаны.`,
      },
      [
        q(t("The first paragraph says", "Առաջին պարբերությունն ասում է", "В первом абзаце говорится"), [
          t("where you live", "որտեղ ես ապրում", "где ты живёшь"),
          t("what furniture you have", "ինչ կահույք ունես", "какая у тебя мебель"),
          t("what you would change", "ինչ կփոխեիր", "что бы ты изменил"),
        ], 0),
        q(t("Which word gives a reason?", "Ո՞ր բառն է պատճառ տալիս", "Какое слово даёт причину?"), [
          t("but", "but", "but"),
          t("because", "because", "because"),
          t("and", "and", "and"),
        ], 1),
        q(t("«We have an old carpet, … my grandmother made.»", "«We have an old carpet, … my grandmother made.»", "«We have an old carpet, … my grandmother made.»"), [
          t("who", "who", "who"),
          t("where", "where", "where"),
          t("which", "which", "which"),
        ], 2),
        q(t("Which sentence is correct?", "Ո՞ր նախադասությունն է ճիշտ", "Какое предложение верное?"), [
          t("My room is the smallest one.", "My room is the smallest one.", "My room is the smallest one."),
          t("My room are the smallest one.", "My room are the smallest one.", "My room are the smallest one."),
          t("My room the smallest one.", "My room the smallest one.", "My room the smallest one."),
        ], 0),
        q(t("«This is the room … I do my homework.»", "«This is the room … I do my homework.»", "«This is the room … I do my homework.»"), [
          t("which", "which", "which"),
          t("where", "where", "where"),
          t("but", "but", "but"),
        ], 1),
        q(t("The description should be about", "Նկարագրությունը պետք է լինի մոտ", "Описание должно быть примерно"), [
          t("ten words", "տասը բառ", "десять слов"),
          t("three hundred words", "երեք հարյուր բառ", "триста слов"),
          t("eighty words", "ութսուն բառ", "восемьдесят слов"),
        ], 2),
      ],
    ),
  ],
};
