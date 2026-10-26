import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit5: UnitSeed = {
  title: t("Constructing", "Կառուցել", "Постройка"),
  summary: t(
    "Building with paper and plasticine: applique, folding, a paper city, modelling, a holiday card and our end-of-year exhibition.",
    "Կառուցում ենք թղթով և պլաստիլինով՝ ապլիկացիա, ծալում, թղթե քաղաք, ծեփում, տոնական բացիկ և տարեվերջյան մեր ցուցահանդեսը։",
    "Строим из бумаги и пластилина: аппликация, складывание, бумажный город, лепка, праздничная открытка и наша выставка в конце года.",
  ),
  lessons: [
    lesson(
      "applique-basics",
      ["Applique: a picture from paper pieces", "Ապլիկացիա՝ նկար թղթի կտորներից", "Аппликация: картинка из кусочков бумаги"],
      {
        en: ["Know what applique is", "Cut out simple shapes safely and glue them neatly", "Build a picture from the background forward"],
        hy: ["Իմանալ, թե ինչ է ապլիկացիան", "Անվտանգ կտրել պարզ ձևեր և կոկիկ սոսնձել դրանք", "Նկարը կառուցել ֆոնից դեպի առաջ"],
        ru: ["Знать, что такое аппликация", "Безопасно вырезать простые формы и аккуратно их наклеивать", "Собирать картинку от фона вперёд"],
      },
      {
        en: `## What is applique?

**Applique** is a picture made of pieces of coloured paper or fabric **glued onto a background**. You do not draw the shapes with a pencil only: you **cut** them out and **arrange** them.

~~~art
pic scissors glue shapes
~~~

## Safety with scissors

| Rule | Why |
|---|---|
| pass scissors handle first, closed | so nobody gets hurt |
| cut sitting at the table | the hand is steady |
| turn the paper, not the scissors | the line stays smooth |
| put scissors down closed | the blades do not cut anything |

## Ways to get shapes

| Way | What you get |
|---|---|
| cut along a pencil line | an exact shape |
| fold and cut | two or more equal shapes at once |
| tear with fingers | soft, furry edges, good for clouds and grass |

## Building a picture in order

1. Choose the **background** sheet: blue for the sky, green for a meadow.
2. Glue the **far** things first: hills, the sun, clouds.
3. Then the **middle** things: a house, trees.
4. Last, the **near** things on top: flowers, a cat, a fence.
5. Put glue on the **back** of a piece, a thin layer near the edges, and press it with a cloth.

**Tip:** first lay all the pieces on the background without glue. Move them until you like the picture, then glue.

~~~art
compose
Before gluing, move the paper shapes around: the big shape first, small ones around it.
~~~

~~~art
tasks
1. What is applique?
2. How do you pass scissors to a friend?
3. Do you turn the paper or the scissors when cutting a curve?
4. How can you cut two equal shapes at once?
5. Which pieces are glued first?
6. Make an applique "A house in a meadow" with at least six pieces.
7. Make clouds and grass by tearing paper.
~~~

~~~art
hints
1. A picture made of paper or fabric pieces glued onto a background. 2. Handle first, closed. 3. The paper. 4. Fold the paper and cut through both layers. 5. The far things: hills, sky, sun. 6. Check: far pieces under near ones, no glue spots. 7. Check: the edges are soft and furry.
~~~`,
        hy: `## Ի՞նչ է ապլիկացիան

**Ապլիկացիան** նկար է, որը կազմված է գունավոր թղթի կամ կտորի կտորներից, որոնք **սոսնձված են ֆոնի վրա**։ Ձևերը միայն մատիտով չենք գծում՝ դրանք **կտրում** ենք և **դասավորում**։

~~~art
pic scissors glue shapes
~~~

## Անվտանգությունը մկրատի հետ

| Կանոն | Ինչու |
|---|---|
| մկրատը տալիս ենք բռնակով առաջ, փակ | որ ոչ ոք չվնասվի |
| կտրում ենք սեղանի մոտ նստած | ձեռքը կայուն է |
| պտտում ենք թուղթը, ոչ թե մկրատը | գիծը հարթ է մնում |
| մկրատը դնում ենք փակ | շեղբերը ոչինչ չեն կտրում |

## Ինչպես ստանալ ձևեր

| Եղանակ | Ինչ ենք ստանում |
|---|---|
| կտրել մատիտի գծով | ճշգրիտ ձև |
| ծալել և կտրել | միանգամից երկու կամ ավելի նույն ձևեր |
| պոկել մատներով | փափուկ, խավոտ եզրեր, լավ է ամպերի և խոտի համար |

## Նկարը կառուցում ենք հերթականությամբ

1. Ընտրի՛ր **ֆոնի** թերթը՝ կապույտ՝ երկնքի համար, կանաչ՝ մարգագետնի համար։
2. Նախ սոսնձի՛ր **հեռվի** առարկաները՝ բլուրներ, արև, ամպեր։
3. Հետո՝ **միջին** առարկաները՝ տուն, ծառեր։
4. Վերջում վրայից՝ **մոտիկ** առարկաները՝ ծաղիկներ, կատու, ցանկապատ։
5. Սոսինձը քսի՛ր կտորի **հետևի կողմին**՝ եզրերի մոտ բարակ շերտով, և սեղմի՛ր լաթով։

**Խորհուրդ.** նախ բոլոր կտորները առանց սոսնձի դարսի՛ր ֆոնի վրա։ Տեղաշարժի՛ր, մինչև նկարը դուր գա, հետո սոսնձի՛ր։

~~~art
compose
Սոսնձելուց առաջ տեղաշարժի՛ր թղթե ձևերը․ նախ մեծ ձևը, փոքրերը՝ շուրջը։
~~~

~~~art
tasks
1. Ի՞նչ է ապլիկացիան։
2. Ինչպե՞ս ես մկրատը տալիս ընկերոջդ։
3. Կոր գիծ կտրելիս պտտո՞ւմ ես թուղթը, թե՞ մկրատը։
4. Ինչպե՞ս միանգամից կտրել երկու նույն ձև։
5. Ո՞ր կտորներն են սոսնձվում առաջինը։
6. Պատրաստի՛ր «Տունը մարգագետնում» ապլիկացիան՝ առնվազն վեց կտորով։
7. Թուղթը պոկելով պատրաստի՛ր ամպեր և խոտ։
~~~

~~~art
hints
1. Նկար՝ ֆոնի վրա սոսնձված թղթի կամ կտորի կտորներից։ 2. Բռնակով առաջ, փակ։ 3. Թուղթը։ 4. Ծալել թուղթը և կտրել երկու շերտը միասին։ 5. Հեռվի առարկաները՝ բլուրներ, երկինք, արև։ 6. Ստուգի՛ր՝ հեռվի կտորները մոտիկների տակ են, սոսնձի բծեր չկան։ 7. Ստուգի՛ր՝ եզրերը փափուկ և խավոտ են։
~~~`,
        ru: `## Что такое аппликация?

**Аппликация** — это картинка из кусочков цветной бумаги или ткани, **наклеенных на фон**. Формы мы не только рисуем карандашом: мы их **вырезаем** и **раскладываем**.

~~~art
pic scissors glue shapes
~~~

## Безопасность с ножницами

| Правило | Зачем |
|---|---|
| передаём ножницы кольцами вперёд, сомкнутыми | чтобы никто не поранился |
| режем, сидя за столом | рука устойчива |
| поворачиваем бумагу, а не ножницы | линия получается ровной |
| кладём ножницы сомкнутыми | лезвия ничего не режут |

## Как получить формы

| Способ | Что получаем |
|---|---|
| вырезать по линии карандаша | точную форму |
| сложить и вырезать | сразу две или больше одинаковых форм |
| обрывать пальцами | мягкие, пушистые края — хорошо для облаков и травы |

## Собираем картинку по порядку

1. Выбери лист **фона**: голубой для неба, зелёный для луга.
2. Сначала наклей **дальние** предметы: холмы, солнце, облака.
3. Потом **средние**: дом, деревья.
4. В конце сверху — **ближние**: цветы, кошку, забор.
5. Клей наноси на **изнанку** детали тонким слоем у краёв и прижимай салфеткой.

**Совет:** сначала разложи все детали на фоне без клея. Подвигай их, пока картинка не понравится, и только потом наклеивай.

~~~art
compose
Перед тем как клеить, подвигай бумажные фигуры: сначала большая, вокруг маленькие.
~~~

~~~art
tasks
1. Что такое аппликация?
2. Как передать ножницы другу?
3. Когда вырезаешь кривую линию, поворачиваешь бумагу или ножницы?
4. Как вырезать сразу две одинаковые формы?
5. Какие детали наклеиваем первыми?
6. Сделай аппликацию «Домик на лугу» — не меньше шести деталей.
7. Сделай облака и траву обрывной аппликацией.
~~~

~~~art
hints
1. Картинка из кусочков бумаги или ткани, наклеенных на фон. 2. Кольцами вперёд, сомкнутыми. 3. Бумагу. 4. Сложить бумагу и вырезать сразу оба слоя. 5. Дальние предметы: холмы, небо, солнце. 6. Проверь: дальние детали под ближними, пятен клея нет. 7. Проверь: края мягкие и пушистые.
~~~`,
      },
      [
        q(t("Applique is a picture made by…", "Ապլիկացիան նկար է, որը ստեղծվում է…", "Аппликация — это картинка, которую делают…"), [t("gluing paper pieces onto a background", "թղթի կտորները ֆոնի վրա սոսնձելով", "наклеивая кусочки бумаги на фон"), t("only with pencils", "միայն մատիտներով", "только карандашами"), t("with a camera", "լուսանկարչական ապարատով", "фотоаппаратом")], 0),
        q(t("Scissors are passed…", "Մկրատը տալիս ենք…", "Ножницы передают…"), [t("blades first, open", "շեղբերով առաջ, բաց", "лезвиями вперёд, раскрытыми"), t("handle first, closed", "բռնակով առաջ, փակ", "кольцами вперёд, сомкнутыми"), t("by throwing them", "նետելով", "бросая")], 1),
        q(t("When cutting a curve, we turn…", "Կոր գիծ կտրելիս պտտում ենք…", "Вырезая кривую, поворачиваем…"), [t("the scissors", "մկրատը", "ножницы"), t("the table", "սեղանը", "стол"), t("the paper", "թուղթը", "бумагу")], 2),
        q(t("Which pieces are glued first?", "Ո՞ր կտորներն ենք սոսնձում առաջինը։", "Какие детали наклеиваем первыми?"), [t("the far ones", "հեռվինները", "дальние"), t("the near ones", "մոտիկները", "ближние"), t("the smallest ones", "ամենափոքրերը", "самые мелкие")], 0),
        q(t("Torn paper gives edges that are…", "Պոկված թուղթը տալիս է եզրեր, որոնք…", "Обрывная бумага даёт края…"), [t("perfectly straight", "կատարյալ ուղիղ են", "идеально ровные"), t("sharp", "սուր են", "острые"), t("soft and furry", "փափուկ և խավոտ են", "мягкие и пушистые")], 2),
        q(t("Before gluing, it is good to…", "Սոսնձելուց առաջ լավ է…", "Перед наклеиванием полезно…"), [t("throw away the background", "դեն նետել ֆոնը", "выбросить фон"), t("lay out all pieces without glue", "բոլոր կտորները դարսել առանց սոսնձի", "разложить все детали без клея"), t("paint the table", "ներկել սեղանը", "покрасить стол")], 1),
      ],
    ),
    lesson(
      "paper-folding",
      ["Paper folding", "Թղթի ծալում", "Складываем из бумаги"],
      {
        en: ["Learn the basic folds: in half, corner to corner, the \"valley\" and the \"mountain\"", "Follow a folding plan step by step", "Fold a simple cup, a fish and a cat's face"],
        hy: ["Սովորել հիմնական ծալքերը՝ կիսով չափ, անկյունից անկյուն, «հովիտ» և «սար»", "Հետևել ծալման պլանին քայլ առ քայլ", "Ծալել պարզ բաժակ, ձուկ և կատվի դեմք"],
        ru: ["Выучить основные сгибы: пополам, уголок к уголку, «долина» и «гора»", "Выполнять схему складывания шаг за шагом", "Сложить простой стаканчик, рыбку и мордочку кота"],
      },
      {
        en: `## The art of folding

Folding paper into figures without glue or scissors is called **origami**. The word comes from Japan, where this art has been loved for centuries. All you need is a **square** sheet and careful hands.

## How to make a square from a rectangle

Fold one corner of a rectangular sheet down to the opposite edge, making a triangle. Cut off the strip that is left. Open the triangle: you have a square.

~~~art
steps fold-square
~~~

## Basic folds

| Fold | How to do it |
|---|---|
| in half | edge to edge, press the fold with a fingernail |
| corner to corner | makes a triangle |
| "valley" | fold towards you, the fold looks like a valley |
| "mountain" | fold away from you, the fold looks like a mountain |

**Rule:** match corners **exactly** and press every fold **firmly**. Then the figure is neat.

~~~art
net
~~~

## A cat's face (simple)

1. Fold the square corner to corner into a triangle, long side up.
2. Fold the two side corners **up**: these are the ears.
3. Fold the bottom corner up a little: this is the chin.
4. Turn it over and draw eyes, a nose and whiskers.

## A fish

1. Fold the square into a triangle.
2. Fold one corner towards the middle at an angle: this is the tail.
3. Turn it over, draw an eye and scales.

~~~art
tasks
1. What is origami?
2. What shape of paper do we usually start from?
3. How do you make a square from a rectangle?
4. What is the difference between a "valley" and a "mountain" fold?
5. Why press every fold firmly?
6. Fold a cat's face and draw its face.
7. Fold three fish of different colours and glue them on a blue sheet as an aquarium.
~~~

~~~art
hints
1. Folding paper into figures without glue or scissors. 2. A square. 3. Fold a corner down to the opposite edge into a triangle and cut off the strip. 4. A valley folds towards you, a mountain away from you. 5. So that the figure is neat and holds its shape. 6. Check: the ears are equal. 7. Check: the fish are spread over the aquarium.
~~~`,
        hy: `## Ծալելու արվեստը

Թուղթը առանց սոսնձի և մկրատի ֆիգուրների ծալելը կոչվում է **օրիգամի**։ Բառը Ճապոնիայից է, որտեղ այս արվեստը դարեր շարունակ սիրված է։ Պետք է միայն **քառակուսի** թերթ և ուշադիր ձեռքեր։

## Ինչպես ուղղանկյունից քառակուսի ստանալ

Ուղղանկյուն թերթի մի անկյունը ծալի՛ր դեպի հակառակ եզրը՝ եռանկյուն ստանալով։ Մնացած շերտը կտրի՛ր։ Բացի՛ր եռանկյունը՝ ունես քառակուսի։

~~~art
steps fold-square
~~~

## Հիմնական ծալքեր

| Ծալք | Ինչպես անել |
|---|---|
| կիսով չափ | եզրը եզրին, ծալքը սեղմի՛ր եղունգով |
| անկյունից անկյուն | ստացվում է եռանկյուն |
| «հովիտ» | ծալում ենք դեպի մեզ, ծալքը հովտի է նման |
| «սար» | ծալում ենք մեզնից դեպի դուրս, ծալքը սարի է նման |

**Կանոն.** անկյունները համընկեցրո՛ւ **ճշգրիտ** և ամեն ծալք **ամուր** սեղմի՛ր։ Այդ դեպքում ֆիգուրը կոկիկ կլինի։

~~~art
net
~~~

## Կատվի դեմք (պարզ)

1. Քառակուսին ծալի՛ր անկյունից անկյուն՝ եռանկյուն, երկար կողմը վերև։
2. Երկու կողային անկյունները ծալի՛ր **դեպի վերև**՝ սրանք ականջներն են։
3. Ներքևի անկյունը մի քիչ ծալի՛ր վերև՝ սա կզակն է։
4. Շրջի՛ր և նկարի՛ր աչքեր, քիթ և բեղեր։

## Ձուկ

1. Քառակուսին ծալի՛ր եռանկյուն։
2. Մի անկյունը թեքությամբ ծալի՛ր դեպի մեջտեղ՝ սա պոչն է։
3. Շրջի՛ր, նկարի՛ր աչք և թեփուկներ։

~~~art
tasks
1. Ի՞նչ է օրիգամին։
2. Թղթի ի՞նչ ձևից ենք սովորաբար սկսում։
3. Ինչպե՞ս ուղղանկյունից քառակուսի ստանալ։
4. Ո՞րն է «հովիտ» և «սար» ծալքերի տարբերությունը։
5. Ինչո՞ւ պետք է ամեն ծալք ամուր սեղմել։
6. Ծալի՛ր կատվի դեմք և նկարի՛ր նրա դեմքը։
7. Ծալի՛ր տարբեր գույների երեք ձուկ և սոսնձի՛ր կապույտ թերթի վրա՝ որպես ակվարիում։
~~~

~~~art
hints
1. Թուղթը առանց սոսնձի և մկրատի ֆիգուրների ծալելը։ 2. Քառակուսուց։ 3. Անկյունը ծալել դեպի հակառակ եզրը՝ եռանկյուն, և կտրել շերտը։ 4. Հովիտը ծալվում է դեպի մեզ, սարը՝ մեզնից դեպի դուրս։ 5. Որ ֆիգուրը կոկիկ լինի և պահի իր ձևը։ 6. Ստուգի՛ր՝ ականջները հավասար են։ 7. Ստուգի՛ր՝ ձկները բաշխված են ամբողջ ակվարիումով։
~~~`,
        ru: `## Искусство складывания

Складывание фигурок из бумаги без клея и ножниц называется **оригами**. Слово пришло из Японии, где это искусство любят уже много веков. Нужен только **квадратный** лист и аккуратные руки.

## Как сделать квадрат из прямоугольника

Согни один угол прямоугольного листа к противоположному краю, получится треугольник. Отрежь оставшуюся полоску. Разверни треугольник — у тебя квадрат.

~~~art
steps fold-square
~~~

## Основные сгибы

| Сгиб | Как делать |
|---|---|
| пополам | край к краю, прогладь сгиб ногтем |
| уголок к уголку | получается треугольник |
| «долина» | сгибаем к себе, сгиб похож на долину |
| «гора» | сгибаем от себя, сгиб похож на гору |

**Правило:** совмещай уголки **точно** и **хорошо** проглаживай каждый сгиб. Тогда фигурка получится аккуратной.

~~~art
net
~~~

## Мордочка кота (простая)

1. Сложи квадрат уголок к уголку в треугольник, длинной стороной вверх.
2. Боковые уголки загни **вверх** — это уши.
3. Нижний уголок немного загни вверх — это подбородок.
4. Переверни и нарисуй глаза, нос и усы.

## Рыбка

1. Сложи квадрат в треугольник.
2. Один уголок загни наискосок к середине — это хвост.
3. Переверни, нарисуй глаз и чешую.

~~~art
tasks
1. Что такое оригами?
2. С какой формы листа обычно начинаем?
3. Как сделать квадрат из прямоугольника?
4. Чем отличаются сгибы «долина» и «гора»?
5. Зачем хорошо проглаживать каждый сгиб?
6. Сложи мордочку кота и нарисуй ей лицо.
7. Сложи три рыбки разного цвета и наклей их на голубой лист — получится аквариум.
~~~

~~~art
hints
1. Складывание фигурок из бумаги без клея и ножниц. 2. С квадрата. 3. Согнуть угол к противоположному краю в треугольник и отрезать полоску. 4. «Долину» сгибаем к себе, «гору» — от себя. 5. Чтобы фигурка была аккуратной и держала форму. 6. Проверь: уши одинаковые. 7. Проверь: рыбки расположены по всему аквариуму.
~~~`,
      },
      [
        q(t("Folding figures from paper without glue is called…", "Թղթից առանց սոսնձի ֆիգուրներ ծալելը կոչվում է…", "Складывание фигурок из бумаги без клея называется…"), [t("applique", "ապլիկացիա", "аппликация"), t("mosaic", "խճանկար", "мозаика"), t("origami", "օրիգամի", "оригами")], 2),
        q(t("Origami usually starts from a…", "Օրիգամին սովորաբար սկսվում է…", "Оригами обычно начинают с…"), [t("square sheet", "քառակուսի թերթից", "квадратного листа"), t("round sheet", "կլոր թերթից", "круглого листа"), t("ball of clay", "կավի գնդից", "комка глины")], 0),
        q(t("A fold towards you is called…", "Դեպի մեզ ծալքը կոչվում է…", "Сгиб к себе называется…"), [t("mountain", "սար", "гора"), t("valley", "հովիտ", "долина"), t("river", "գետ", "река")], 1),
        q(t("Every fold should be…", "Ամեն ծալք պետք է…", "Каждый сгиб нужно…"), [t("pressed firmly", "ամուր սեղմված լինի", "хорошо прогладить"), t("left loose", "թույլ թողնված լինի", "оставить неплотным"), t("glued", "սոսնձված լինի", "приклеить")], 0),
        q(t("Folding a square corner to corner gives a…", "Քառակուսին անկյունից անկյուն ծալելով ստանում ենք…", "Квадрат, сложенный уголок к уголку, даёт…"), [t("circle", "շրջան", "круг"), t("rectangle", "ուղղանկյուն", "прямоугольник"), t("triangle", "եռանկյուն", "треугольник")], 2),
        q(t("The word \"origami\" comes from…", "«Օրիգամի» բառը եկել է…", "Слово «оригами» пришло из…"), [t("Italy", "Իտալիայից", "Италии"), t("Japan", "Ճապոնիայից", "Японии"), t("Brazil", "Բրազիլիայից", "Бразилии")], 1),
      ],
    ),
    lesson(
      "paper-city",
      ["A paper city", "Թղթե քաղաք", "Бумажный город"],
      {
        en: ["Know that an architect designs buildings", "Make a simple building from a paper tube or a folded box", "Build a small street together with the class"],
        hy: ["Իմանալ, որ ճարտարապետը նախագծում է շենքեր", "Թղթե գլանից կամ ծալված տուփից պարզ շենք պատրաստել", "Դասարանով միասին փոքր փողոց կառուցել"],
        ru: ["Знать, что здания придумывает архитектор", "Сделать простое здание из бумажного цилиндра или сложенной коробочки", "Построить всем классом маленькую улицу"],
      },
      {
        en: `## Who designs a city?

An **architect** is an artist who designs buildings, streets and squares. First the architect draws a plan and makes a small **model** (a maquette), then builders build the real house.

Architect **Alexander Tamanyan** designed the plan of the centre of modern **Yerevan**, with its round shape, green ring of parks and buildings of pink tuff.

~~~art
pic model-building skyscraper
~~~

## Paper shapes for buildings

| Paper shape | Becomes |
|---|---|
| a rolled tube (cylinder) | a tower, a lighthouse |
| a folded box (cube or prism) | a house, a school, a shop |
| a cone | a roof of a tower |
| a folded strip like an accordion | a fence, a bridge |

~~~art
net
A flat paper net folds into a box: the start of every paper house.
~~~

## Making a tower from a tube

1. Draw windows and a door on a rectangle of paper **while it is flat**.
2. Roll it into a tube and glue the edge.
3. Cut a circle, cut it to the centre and roll it into a **cone**: this is the roof.
4. Glue the roof on top.

## Making a house from a box

1. Take a small box or fold a sheet into a box.
2. Cover it with coloured paper.
3. Fold a rectangle in half: this is a two-sided roof. Glue it on.
4. Glue on windows, a door, a balcony.

## Building a street

Put all the class's buildings on a big sheet. Draw a road, a pavement, trees and a square. Think: where is the school, where is the shop, where is the park?

~~~art
pic box-net
~~~

~~~art
tasks
1. Who designs buildings?
2. What is a maquette?
3. Which architect designed the plan of central Yerevan?
4. What can a paper tube become?
5. Why draw the windows before rolling the tube?
6. Make a tower from a paper tube with a cone roof.
7. Make a house from a box and add it to the class street.
~~~

~~~art
hints
1. An architect. 2. A small model of a building or a city. 3. Alexander Tamanyan. 4. A tower or a lighthouse. 5. It is easier to draw on flat paper. 6. Check: the tube is glued neatly and the roof sits firmly. 7. Check: the house has windows, a door and a roof.
~~~`,
        hy: `## Ո՞վ է նախագծում քաղաքը

**Ճարտարապետը** արվեստագետ է, որը նախագծում է շենքեր, փողոցներ և հրապարակներ։ Նախ ճարտարապետը գծում է հատակագիծ և պատրաստում փոքր **մակետ**, հետո շինարարները կառուցում են իսկական տունը։

Ճարտարապետ **Ալեքսանդր Թամանյանը** նախագծել է ժամանակակից **Երևանի** կենտրոնի հատակագիծը՝ իր կլոր ձևով, այգիների կանաչ օղակով և վարդագույն տուֆից շենքերով։

~~~art
pic model-building skyscraper
~~~

## Թղթե ձևեր շենքերի համար

| Թղթե ձև | Դառնում է |
|---|---|
| ոլորված գլան | աշտարակ, փարոս |
| ծալված տուփ (խորանարդ կամ պրիզմա) | տուն, դպրոց, խանութ |
| կոն | աշտարակի տանիք |
| ակորդեոնի պես ծալված շերտ | ցանկապատ, կամուրջ |

~~~art
net
Հարթ թղթե փռվածքը ծալվում է տուփի․ ամեն թղթե տան սկիզբը։
~~~

## Աշտարակ ենք պատրաստում գլանից

1. Թղթի ուղղանկյան վրա նկարի՛ր պատուհաններ և դուռ, **քանի դեռ այն հարթ է**։
2. Ոլորի՛ր գլան և սոսնձի՛ր եզրը։
3. Կտրի՛ր շրջան, կտրի՛ր մինչև կենտրոն և ոլորի՛ր **կոն**՝ սա տանիքն է։
4. Տանիքը սոսնձի՛ր վերևում։

## Տուն ենք պատրաստում տուփից

1. Վերցրո՛ւ փոքր տուփ կամ թերթից տուփ ծալի՛ր։
2. Ծածկի՛ր այն գունավոր թղթով։
3. Ուղղանկյունը ծալի՛ր կիսով չափ՝ սա երկթեք տանիք է։ Սոսնձի՛ր։
4. Սոսնձի՛ր պատուհաններ, դուռ, պատշգամբ։

## Փողոց ենք կառուցում

Դասարանի բոլոր շենքերը դրե՛ք մեծ թերթի վրա։ Գծե՛ք ճանապարհ, մայթ, ծառեր և հրապարակ։ Մտածե՛ք՝ որտե՞ղ է դպրոցը, որտե՞ղ է խանութը, որտե՞ղ է այգին։

~~~art
pic box-net
~~~

~~~art
tasks
1. Ո՞վ է նախագծում շենքերը։
2. Ի՞նչ է մակետը։
3. Ո՞ր ճարտարապետն է նախագծել Երևանի կենտրոնի հատակագիծը։
4. Ի՞նչ կարող է դառնալ թղթե գլանը։
5. Ինչո՞ւ են պատուհանները նկարում նախքան գլանը ոլորելը։
6. Թղթե գլանից պատրաստի՛ր աշտարակ՝ կոնաձև տանիքով։
7. Տուփից տուն պատրաստի՛ր և ավելացրո՛ւ դասարանի փողոցին։
~~~

~~~art
hints
1. Ճարտարապետը։ 2. Շենքի կամ քաղաքի փոքր մոդել։ 3. Ալեքսանդր Թամանյանը։ 4. Աշտարակ կամ փարոս։ 5. Հարթ թղթի վրա ավելի հեշտ է նկարել։ 6. Ստուգի՛ր՝ գլանը կոկիկ է սոսնձված, տանիքը ամուր է նստած։ 7. Ստուգի՛ր՝ տունն ունի պատուհաններ, դուռ և տանիք։
~~~`,
        ru: `## Кто придумывает город?

**Архитектор** — художник, который придумывает здания, улицы и площади. Сначала архитектор чертит план и делает маленький **макет**, потом строители возводят настоящий дом.

Архитектор **Александр Таманян** создал план центра современного **Еревана** — с круглой формой, зелёным кольцом парков и домами из розового туфа.

~~~art
pic model-building skyscraper
~~~

## Бумажные формы для зданий

| Бумажная форма | Становится |
|---|---|
| свёрнутый цилиндр | башней, маяком |
| сложенная коробочка (куб или призма) | домом, школой, магазином |
| конус | крышей башни |
| полоска, сложенная гармошкой | забором, мостом |

~~~art
net
Плоская развёртка складывается в коробку — начало любого бумажного дома.
~~~

## Делаем башню из цилиндра

1. Нарисуй окна и дверь на прямоугольнике бумаги, **пока он плоский**.
2. Сверни цилиндр и склей край.
3. Вырежи круг, надрежь его до центра и сверни **конус** — это крыша.
4. Приклей крышу сверху.

## Делаем дом из коробочки

1. Возьми маленькую коробочку или сложи её из листа.
2. Оклей её цветной бумагой.
3. Сложи прямоугольник пополам — это двускатная крыша. Приклей её.
4. Наклей окна, дверь, балкон.

## Строим улицу

Поставьте все здания класса на большой лист. Нарисуйте дорогу, тротуар, деревья и площадь. Подумайте: где школа, где магазин, где парк?

~~~art
pic box-net
~~~

~~~art
tasks
1. Кто придумывает здания?
2. Что такое макет?
3. Какой архитектор создал план центра Еревана?
4. Чем может стать бумажный цилиндр?
5. Зачем рисовать окна до того, как свернуть цилиндр?
6. Сделай башню из бумажного цилиндра с крышей-конусом.
7. Сделай дом из коробочки и поставь его на улицу класса.
~~~

~~~art
hints
1. Архитектор. 2. Маленькая модель здания или города. 3. Александр Таманян. 4. Башней или маяком. 5. На плоской бумаге рисовать легче. 6. Проверь: цилиндр склеен аккуратно, крыша держится крепко. 7. Проверь: у дома есть окна, дверь и крыша.
~~~`,
      },
      [
        q(t("Buildings and streets are designed by an…", "Շենքերն ու փողոցները նախագծում է…", "Здания и улицы придумывает…"), [t("astronaut", "տիեզերագնացը", "космонавт"), t("architect", "ճարտարապետը", "архитектор"), t("actor", "դերասանը", "актёр")], 1),
        q(t("A small model of a building is a…", "Շենքի փոքր մոդելը…", "Маленькая модель здания — это…"), [t("maquette", "մակետ է", "макет"), t("poster", "պաստառ է", "плакат"), t("ticket", "տոմս է", "билет")], 0),
        q(t("The plan of central Yerevan was made by…", "Երևանի կենտրոնի հատակագիծը ստեղծել է…", "План центра Еревана создал…"), [t("Ivan Shishkin", "Իվան Շիշկինը", "Иван Шишкин"), t("Martiros Saryan", "Մարտիրոս Սարյանը", "Мартирос Сарьян"), t("Alexander Tamanyan", "Ալեքսանդր Թամանյանը", "Александр Таманян")], 2),
        q(t("A rolled paper tube can become a…", "Ոլորված թղթե գլանը կարող է դառնալ…", "Свёрнутый бумажный цилиндр может стать…"), [t("tower", "աշտարակ", "башней"), t("carpet", "գորգ", "ковром"), t("puddle", "ջրափոս", "лужей")], 0),
        q(t("A tower roof is made from a…", "Աշտարակի տանիքը պատրաստում ենք…", "Крышу башни делаем из…"), [t("square", "քառակուսուց", "квадрата"), t("strip", "շերտից", "полоски"), t("cone", "կոնից", "конуса")], 2),
        q(t("Windows on a tube are drawn…", "Գլանի պատուհանները նկարում ենք…", "Окна на цилиндре рисуем…"), [t("never", "երբեք", "никогда"), t("while the paper is still flat", "քանի դեռ թուղթը հարթ է", "пока бумага ещё плоская"), t("after the roof is glued", "տանիքը սոսնձելուց հետո", "после того как приклеим крышу")], 1),
      ],
    ),
    lesson(
      "plasticine-modelling",
      ["Modelling with plasticine", "Ծեփում ենք պլաստիլինից", "Лепим из пластилина"],
      {
        en: ["Learn the basic modelling moves: roll a ball, a sausage, flatten, pinch, smooth", "Model an animal from simple parts", "Know that sculpture is art in three dimensions"],
        hy: ["Սովորել ծեփելու հիմնական շարժումները՝ գունդ գլորել, երշիկ, տափակեցնել, պտղունցել, հարթել", "Պարզ մասերից կենդանի ծեփել", "Իմանալ, որ քանդակը եռաչափ արվեստ է"],
        ru: ["Выучить основные приёмы лепки: шарик, колбаска, расплющить, защипнуть, сгладить", "Вылепить животное из простых частей", "Знать, что скульптура — объёмное искусство"],
      },
      {
        en: `## Sculpture

A drawing is flat: it has height and width. A **sculpture** is **three-dimensional**: you can walk round it and see it from every side. Sculptors work in stone, clay, wood and metal. We work in **plasticine** or modelling clay.

In Yerevan, many sculptures stand in the streets and parks; in front of the Cascade there are big sculptures you can walk around.

~~~art
pic plasticine
~~~

## Basic moves

| Move | How | What you get |
|---|---|---|
| roll a ball | roll between your palms in circles | a head, a body, eyes |
| roll a sausage | roll on the board back and forth | legs, a tail, a neck |
| flatten | press with your palm | ears, a pancake, a base |
| pinch | squeeze with two fingers | a nose, a beak, ears |
| smooth | rub with a wet finger | joins disappear |

## Modelling a hedgehog

1. **Warm** the plasticine in your hands so it is soft.
2. Roll a big **ball** for the body.
3. Pull and pinch one side into a pointed **nose**.
4. Make little dots for the eyes and nose.
5. Make the **spines**: snip with scissors or press in short pieces of a matchstick or seeds.

~~~art
steps hedgehog
~~~

## Modelling a cat from parts

Body: a thick sausage. Head: a ball. Ears: two pinched triangles. Legs: four short sausages. Tail: a long thin sausage. **Press** every part firmly to the body and **smooth** the join.

~~~art
steps cat
~~~

~~~art
tasks
1. How is a sculpture different from a drawing?
2. What materials do sculptors use?
3. How do you roll a ball?
4. Which move gives a beak or a nose?
5. Why smooth the joins?
6. Model a hedgehog.
7. Model a cat from five kinds of parts and put it on a base.
~~~

~~~art
hints
1. It is three-dimensional: you can walk round it. 2. Stone, clay, wood, metal. 3. Roll the plasticine between your palms in circles. 4. Pinching. 5. So the parts hold together and the figure looks whole. 6. Check: the nose is pointed, the spines cover the back. 7. Check: all the parts are pressed on and the figure stands.
~~~`,
        hy: `## Քանդակ

Նկարը հարթ է՝ ունի բարձրություն և լայնություն։ **Քանդակը** **եռաչափ** է՝ կարելի է նրա շուրջը քայլել և տեսնել բոլոր կողմերից։ Քանդակագործներն աշխատում են քարով, կավով, փայտով և մետաղով։ Մենք աշխատում ենք **պլաստիլինով** կամ ծեփակավով։

Երևանում շատ քանդակներ կան փողոցներում և այգիներում, իսկ Կասկադի առջև կան մեծ քանդակներ, որոնց շուրջը կարելի է քայլել։

~~~art
pic plasticine
~~~

## Հիմնական շարժումներ

| Շարժում | Ինչպես | Ինչ ենք ստանում |
|---|---|---|
| գունդ գլորել | ափերի միջև գլորել շրջանաձև | գլուխ, մարմին, աչքեր |
| երշիկ գլորել | տախտակի վրա գլորել առաջ-հետ | ոտքեր, պոչ, վիզ |
| տափակեցնել | սեղմել ափով | ականջներ, բլիթ, հիմք |
| պտղունցել | սեղմել երկու մատով | քիթ, կտուց, ականջներ |
| հարթել | շփել թաց մատով | միացումներն անհետանում են |

## Ոզնի ենք ծեփում

1. Պլաստիլինը **տաքացրո՛ւ** ձեռքերում, որ փափուկ լինի։
2. Մարմնի համար գլորի՛ր մեծ **գունդ**։
3. Մի կողմը ձգի՛ր և պտղունցի՛ր սրածայր **քթի** տեսքով։
4. Աչքերի և քթի համար արա՛ փոքրիկ կետեր։
5. Պատրաստի՛ր **փշերը**՝ մկրատով կտրտի՛ր կամ մեջը խրի՛ր լուցկու կարճ կտորներ կամ սերմեր։

~~~art
steps hedgehog
~~~

## Կատու ենք ծեփում մասերից

Մարմին՝ հաստ երշիկ։ Գլուխ՝ գունդ։ Ականջներ՝ երկու պտղունցված եռանկյուն։ Ոտքեր՝ չորս կարճ երշիկ։ Պոչ՝ երկար բարակ երշիկ։ Ամեն մաս **ամուր սեղմի՛ր** մարմնին և **հարթի՛ր** միացումը։

~~~art
steps cat
~~~

~~~art
tasks
1. Ինչո՞վ է քանդակը տարբերվում նկարից։
2. Ի՞նչ նյութերով են աշխատում քանդակագործները։
3. Ինչպե՞ս ես գունդ գլորում։
4. Ո՞ր շարժումն է տալիս կտուց կամ քիթ։
5. Ինչո՞ւ են հարթում միացումները։
6. Ծեփի՛ր ոզնի։
7. Հինգ տեսակի մասերից ծեփի՛ր կատու և դրի՛ր հիմքի վրա։
~~~

~~~art
hints
1. Այն եռաչափ է՝ կարելի է նրա շուրջը քայլել։ 2. Քար, կավ, փայտ, մետաղ։ 3. Պլաստիլինը շրջանաձև գլորում ենք ափերի միջև։ 4. Պտղունցելը։ 5. Որ մասերն իրար պահեն, և ֆիգուրն ամբողջական տեսք ունենա։ 6. Ստուգի՛ր՝ քիթը սրածայր է, փշերը ծածկում են մեջքը։ 7. Ստուգի՛ր՝ բոլոր մասերը սեղմված են, և ֆիգուրը կանգնած է։
~~~`,
        ru: `## Скульптура

Рисунок плоский: у него есть высота и ширина. **Скульптура** — **объёмная**: её можно обойти и рассмотреть со всех сторон. Скульпторы работают с камнем, глиной, деревом и металлом. Мы работаем с **пластилином** или глиной для лепки.

В Ереване много скульптур на улицах и в парках; перед Каскадом стоят большие скульптуры, которые можно обойти вокруг.

~~~art
pic plasticine
~~~

## Основные приёмы

| Приём | Как | Что получаем |
|---|---|---|
| скатать шарик | катаем между ладонями по кругу | голову, туловище, глаза |
| раскатать колбаску | катаем по доске вперёд-назад | лапы, хвост, шею |
| расплющить | нажимаем ладонью | уши, лепёшку, подставку |
| защипнуть | сжимаем двумя пальцами | нос, клюв, уши |
| сгладить | проводим мокрым пальцем | стыки исчезают |

## Лепим ёжика

1. **Разогрей** пластилин в руках, чтобы он стал мягким.
2. Скатай большой **шар** для туловища.
3. Одну сторону вытяни и защипни острым **носиком**.
4. Сделай маленькие точки для глаз и носа.
5. Сделай **иголки**: надрежь ножницами или вставь короткие кусочки спичек или семечки.

~~~art
steps hedgehog
~~~

## Лепим кошку из частей

Туловище — толстая колбаска. Голова — шарик. Уши — два защипнутых треугольника. Лапы — четыре короткие колбаски. Хвост — длинная тонкая колбаска. Каждую часть **плотно прижми** к туловищу и **сгладь** стык.

~~~art
steps cat
~~~

~~~art
tasks
1. Чем скульптура отличается от рисунка?
2. С какими материалами работают скульпторы?
3. Как скатать шарик?
4. Какой приём даёт клюв или нос?
5. Зачем сглаживать стыки?
6. Вылепи ёжика.
7. Вылепи кошку из пяти видов частей и поставь её на подставку.
~~~

~~~art
hints
1. Она объёмная: её можно обойти. 2. Камень, глина, дерево, металл. 3. Катать пластилин между ладонями по кругу. 4. Защипывание. 5. Чтобы части держались вместе и фигурка выглядела цельной. 6. Проверь: носик острый, иголки покрывают спинку. 7. Проверь: все части прижаты, фигурка стоит.
~~~`,
      },
      [
        q(t("A sculpture is…", "Քանդակը…", "Скульптура…"), [t("flat", "հարթ է", "плоская"), t("three-dimensional", "եռաչափ է", "объёмная"), t("only drawn in pencil", "միայն մատիտով է նկարված", "только нарисована карандашом")], 1),
        q(t("Legs and a tail are made from a…", "Ոտքերը և պոչը պատրաստում ենք…", "Лапы и хвост делаем из…"), [t("sausage", "երշիկից", "колбаски"), t("pancake", "բլիթից", "лепёшки"), t("cube", "խորանարդից", "кубика")], 0),
        q(t("A beak is made by…", "Կտուցը ստանում ենք…", "Клюв получаем…"), [t("flattening", "տափակեցնելով", "расплющиванием"), t("rolling a ball", "գունդ գլորելով", "скатыванием шарика"), t("pinching", "պտղունցելով", "защипыванием")], 2),
        q(t("Before modelling, plasticine should be…", "Ծեփելուց առաջ պլաստիլինը պետք է…", "Перед лепкой пластилин нужно…"), [t("frozen", "սառեցնել", "заморозить"), t("warmed in your hands", "ձեռքերում տաքացնել", "разогреть в руках"), t("wet with paint", "ներկով թրջել", "намочить краской")], 1),
        q(t("Joins between parts are…", "Մասերի միացումները…", "Стыки между частями…"), [t("smoothed", "հարթում ենք", "сглаживаем"), t("painted black", "սև ենք ներկում", "красим чёрным"), t("left open", "բաց ենք թողնում", "оставляем открытыми")], 0),
        q(t("The body of a hedgehog starts as a…", "Ոզնու մարմինը սկսվում է…", "Туловище ёжика начинается с…"), [t("thin sausage", "բարակ երշիկից", "тонкой колбаски"), t("flat pancake", "տափակ բլիթից", "плоской лепёшки"), t("big ball", "մեծ գնդից", "большого шара")], 2),
      ],
    ),
    lesson(
      "holiday-card",
      ["A holiday card", "Տոնական բացիկ", "Праздничная открытка"],
      {
        en: ["Plan a card: picture, words and where they go", "Make a folded card with an applique or a drawing on the front", "Write a short greeting neatly inside"],
        hy: ["Պլանավորել բացիկը՝ նկար, բառեր և նրանց տեղը", "Պատրաստել ծալված բացիկ՝ առջևի կողմում ապլիկացիայով կամ նկարով", "Ներսում կոկիկ գրել կարճ շնորհավորանք"],
        ru: ["Спланировать открытку: картинка, слова и их место", "Сделать складную открытку с аппликацией или рисунком на лицевой стороне", "Аккуратно написать внутри короткое поздравление"],
      },
      {
        en: `## A card is a small work of art

A card is a gift made by hand. It has a **front** with a picture and an **inside** with a greeting. People make cards for the New Year, birthdays, Mother's Day and other holidays. In Armenia mothers are honoured on 8 March and on 7 April, the Day of Motherhood and Beauty.

## Planning the card

| Part | What to put there |
|---|---|
| front | one big clear picture: a fir tree, flowers, a heart, a sun |
| inside left | a small drawing or a pattern |
| inside right | the greeting and your name |
| back | a tiny stamp or your initials, like a real artist |

**Rule:** one **main** picture is better than many small ones. It should be big and seen from far.

~~~art
compose
~~~

## Making the card

1. Fold a sheet of thick paper in half. Press the fold.
2. On the front, lightly sketch the picture with a pencil.
3. Make it with applique or paint it. Leave space around it, do not crowd the edges.
4. Add a border along the edge of the front.
5. Inside, draw two light pencil lines and write the greeting between them. Rub out the lines when the ink is dry.

~~~art
sketch guide=frame
Design your card: a picture in the middle and a place for the greeting at the bottom.
~~~

## Holiday colours

| Holiday | Colours that suit it |
|---|---|
| New Year | dark blue, white, silver, green, red |
| spring holiday | pink, light green, yellow |
| birthday | any bright and happy colours |

~~~art
palette winter spring
~~~

~~~art
tasks
1. What are the parts of a card?
2. Where does the main picture go?
3. Why is one big picture better than many small ones?
4. Why draw light pencil lines before writing?
5. Which colours suit a New Year card?
6. Make a New Year card with a fir tree on the front.
7. Make a spring card for your mother or grandmother and write a greeting inside.
~~~

~~~art
hints
1. Front, inside and back. 2. On the front. 3. It is clear and seen from far. 4. So that the words are straight. 5. Dark blue, white, silver, green, red. 6. Check: the tree is big, there is space around it. 7. Check: the greeting is written neatly between lines.
~~~`,
        hy: `## Բացիկը փոքրիկ արվեստի գործ է

Բացիկը ձեռքով պատրաստված նվեր է։ Այն ունի նկարով **առջևի կողմ** և շնորհավորանքով **ներսի կողմ**։ Բացիկներ պատրաստում են Նոր տարվա, ծննդյան օրերի, մայրերի տոնի և այլ տոների համար։ Հայաստանում մայրերին մեծարում են մարտի 8-ին և ապրիլի 7-ին՝ Մայրության և գեղեցկության տոնին։

## Բացիկը պլանավորում ենք

| Մաս | Ինչ դնել այնտեղ |
|---|---|
| առջևի կողմ | մեկ մեծ պարզ նկար՝ եղևնի, ծաղիկներ, սիրտ, արև |
| ներսում՝ ձախից | փոքր նկար կամ նախշ |
| ներսում՝ աջից | շնորհավորանքը և քո անունը |
| հետևի կողմ | փոքրիկ կնիք կամ քո անվան սկզբնատառերը, ինչպես իսկական նկարիչը |

**Կանոն.** մեկ **գլխավոր** նկարն ավելի լավ է, քան շատ փոքրերը։ Այն պետք է մեծ լինի և հեռվից երևա։

~~~art
compose
~~~

## Բացիկն ենք պատրաստում

1. Հաստ թղթի թերթը ծալի՛ր կիսով չափ։ Սեղմի՛ր ծալքը։
2. Առջևի կողմում մատիտով թեթև ուրվագծի՛ր նկարը։
3. Պատրաստի՛ր այն ապլիկացիայով կամ ներկի՛ր։ Շուրջը տեղ թո՛ղ, եզրերը մի՛ խցկիր։
4. Առջևի կողմի եզրով ավելացրո՛ւ եզրանախշ։
5. Ներսում թեթև մատիտով գծի՛ր երկու գիծ և դրանց միջև գրի՛ր շնորհավորանքը։ Երբ թանաքը չորանա, ռետինով մաքրի՛ր գծերը։

~~~art
sketch guide=frame
Ձևավորի՛ր բացիկդ՝ նկար մեջտեղում և շնորհավորանքի տեղ ներքևում։
~~~

## Տոնական գույներ

| Տոն | Համապատասխան գույներ |
|---|---|
| Նոր տարի | մուգ կապույտ, սպիտակ, արծաթագույն, կանաչ, կարմիր |
| գարնանային տոն | վարդագույն, բաց կանաչ, դեղին |
| ծննդյան օր | ցանկացած վառ և ուրախ գույներ |

~~~art
palette winter spring
~~~

~~~art
tasks
1. Ի՞նչ մասեր ունի բացիկը։
2. Որտե՞ղ է գլխավոր նկարը։
3. Ինչո՞ւ է մեկ մեծ նկարն ավելի լավ, քան շատ փոքրերը։
4. Ինչո՞ւ են գրելուց առաջ թեթև մատիտով գծեր գծում։
5. Ո՞ր գույներն են սազում ամանորյա բացիկին։
6. Պատրաստի՛ր ամանորյա բացիկ՝ առջևում եղևնիով։
7. Պատրաստի՛ր գարնանային բացիկ մայրիկիդ կամ տատիկիդ համար և ներսում գրի՛ր շնորհավորանք։
~~~

~~~art
hints
1. Առջևի կողմ, ներսի կողմ և հետևի կողմ։ 2. Առջևի կողմում։ 3. Այն պարզ է և հեռվից երևում է։ 4. Որ բառերը ուղիղ լինեն։ 5. Մուգ կապույտ, սպիտակ, արծաթագույն, կանաչ, կարմիր։ 6. Ստուգի՛ր՝ եղևնին մեծ է, շուրջը տեղ կա։ 7. Ստուգի՛ր՝ շնորհավորանքը կոկիկ գրված է գծերի միջև։
~~~`,
        ru: `## Открытка — маленькое произведение искусства

Открытка — это подарок, сделанный своими руками. У неё есть **лицевая сторона** с картинкой и **разворот** с поздравлением. Открытки делают к Новому году, дню рождения, Дню матери и другим праздникам. В Армении мам поздравляют 8 марта и 7 апреля — в День материнства и красоты.

## Планируем открытку

| Часть | Что туда поместить |
|---|---|
| лицевая сторона | одна крупная ясная картинка: ёлка, цветы, сердечко, солнце |
| разворот слева | маленький рисунок или узор |
| разворот справа | поздравление и твоё имя |
| обратная сторона | маленький значок или твои инициалы, как у настоящего художника |

**Правило:** одна **главная** картинка лучше многих маленьких. Она должна быть крупной и видной издалека.

~~~art
compose
~~~

## Делаем открытку

1. Сложи лист плотной бумаги пополам. Прогладь сгиб.
2. На лицевой стороне легко наметь картинку карандашом.
3. Выполни её аппликацией или красками. Оставь вокруг место, не тесни края.
4. Добавь бордюр по краю лицевой стороны.
5. Внутри проведи карандашом две лёгкие линии и напиши между ними поздравление. Когда чернила высохнут, сотри линии ластиком.

~~~art
sketch guide=frame
Придумай открытку: рисунок в центре и место для поздравления внизу.
~~~

## Праздничные цвета

| Праздник | Подходящие цвета |
|---|---|
| Новый год | тёмно-синий, белый, серебряный, зелёный, красный |
| весенний праздник | розовый, светло-зелёный, жёлтый |
| день рождения | любые яркие и весёлые цвета |

~~~art
palette winter spring
~~~

~~~art
tasks
1. Из каких частей состоит открытка?
2. Где главная картинка?
3. Почему одна крупная картинка лучше многих маленьких?
4. Зачем перед письмом проводят лёгкие линии карандашом?
5. Какие цвета подходят новогодней открытке?
6. Сделай новогоднюю открытку с ёлкой на лицевой стороне.
7. Сделай весеннюю открытку для мамы или бабушки и напиши внутри поздравление.
~~~

~~~art
hints
1. Лицевая сторона, разворот и обратная сторона. 2. На лицевой стороне. 3. Она ясная и видна издалека. 4. Чтобы слова шли ровно. 5. Тёмно-синий, белый, серебряный, зелёный, красный. 6. Проверь: ёлка крупная, вокруг есть место. 7. Проверь: поздравление аккуратно написано между линиями.
~~~`,
      },
      [
        q(t("The main picture of a card goes on the…", "Բացիկի գլխավոր նկարը գտնվում է…", "Главная картинка открытки располагается…"), [t("front", "առջևի կողմում", "на лицевой стороне"), t("back", "հետևի կողմում", "на обратной стороне"), t("fold", "ծալքի վրա", "на сгибе")], 0),
        q(t("It is better to have…", "Ավելի լավ է ունենալ…", "Лучше сделать…"), [t("many tiny pictures", "շատ մանր նկարներ", "много крошечных картинок"), t("one big clear picture", "մեկ մեծ պարզ նկար", "одну крупную ясную картинку"), t("no picture", "ոչ մի նկար", "без картинки")], 1),
        q(t("Light pencil lines inside help to…", "Ներսի թեթև մատիտե գծերն օգնում են…", "Лёгкие линии внутри помогают…"), [t("hide the words", "թաքցնել բառերը", "спрятать слова"), t("colour the card", "գունավորել բացիկը", "раскрасить открытку"), t("write straight", "ուղիղ գրել", "писать ровно")], 2),
        q(t("Which colours suit a New Year card?", "Ո՞ր գույներն են սազում ամանորյա բացիկին։", "Какие цвета подходят новогодней открытке?"), [t("brown and grey only", "միայն շագանակագույն և մոխրագույն", "только коричневый и серый"), t("dark blue, white, silver", "մուգ կապույտ, սպիտակ, արծաթագույն", "тёмно-синий, белый, серебряный"), t("only black", "միայն սև", "только чёрный")], 1),
        q(t("In Armenia the Day of Motherhood and Beauty is on…", "Հայաստանում Մայրության և գեղեցկության տոնը…", "В Армении День материнства и красоты —…"), [t("1 January", "հունվարի 1-ին է", "1 января"), t("1 September", "սեպտեմբերի 1-ին է", "1 сентября"), t("7 April", "ապրիլի 7-ին է", "7 апреля")], 2),
        q(t("Around the main picture we should…", "Գլխավոր նկարի շուրջը պետք է…", "Вокруг главной картинки нужно…"), [t("leave some space", "որոշ տեղ թողնել", "оставить место"), t("fill every corner", "լցնել ամեն անկյուն", "заполнить каждый угол"), t("cut holes", "անցքեր բացել", "вырезать дырки")], 0),
      ],
    ),
    lesson(
      "year-exhibition",
      ["Our end-of-year exhibition", "Տարեվերջյան մեր ցուցահանդեսը", "Наша выставка в конце года"],
      {
        en: ["Remember what we learnt in art this year", "Choose and present your best works at a class exhibition", "Speak kindly about your own work and the work of others"],
        hy: ["Հիշել, թե ինչ սովորեցինք կերպարվեստից այս տարի", "Ընտրել և ներկայացնել լավագույն աշխատանքները դասարանի ցուցահանդեսում", "Բարյացակամ խոսել սեփական և ուրիշների աշխատանքների մասին"],
        ru: ["Вспомнить, чему мы научились на уроках рисования в этом году", "Выбрать и представить лучшие работы на выставке класса", "Доброжелательно говорить о своей и чужой работе"],
      },
      {
        en: `## What we learnt this year

| Unit | We learnt to… |
|---|---|
| Lines and shapes | see lines, shapes and spots; use pencils, crayons and paints |
| Colour | mix colours, find warm and cold, light and dark |
| Depicting | draw trees, people, houses, animals, fairy tales, winter |
| Decorating | make patterns, Armenian and Russian ornament, symmetry |
| Constructing | applique, folding, a paper city, modelling, cards |

~~~art
pic genre-landscape genre-still-life genre-portrait genre-animal
~~~

## What is an exhibition?

An **exhibition** is a show of works for visitors. Paintings are kept and shown in **museums** and **galleries**. In Yerevan there is the National Gallery of Armenia and the House-Museum of Martiros Saryan; in Moscow there is the Tretyakov Gallery.

## Preparing our exhibition

1. Choose **two or three** of your best works.
2. Put each work on a paper **frame** (passe-partout): a slightly bigger sheet of plain colour.
3. Make a **label**: your name, the title of the work and the material, for example "Autumn Forest. Watercolour".
4. Hang the works at children's eye level, in neat rows, with space between them.
5. Put sculptures and paper buildings on a table.

## How to talk about a picture

Begin with something good. Then say what you notice: colours, shapes, mood.

| You can say | Example |
|---|---|
| I like… | I like the bright colours of the sky. |
| I notice… | I notice the house is near and the hills are far. |
| It makes me feel… | It makes me feel calm. |
| I would ask… | Why did you choose a pink sun? |

~~~art
sketch
Draw your favourite picture of the year again, even better, for the exhibition.
~~~

~~~art
tasks
1. Name the five units of this year.
2. What is an exhibition?
3. Name a gallery in Yerevan and a gallery in Moscow.
4. What is written on a label?
5. How do we hang works at an exhibition?
6. Choose three of your works, frame them and make labels.
7. Tell a classmate about one of their works using "I like…" and "I notice…".
~~~

~~~art
hints
1. Lines and shapes, Colour, Depicting, Decorating, Constructing. 2. A show of works for visitors. 3. For example, the National Gallery of Armenia and the Tretyakov Gallery. 4. The name of the author, the title and the material. 5. At children's eye level, in neat rows, with space between them. 6. Check: every work has a frame and a label. 7. Check: you started with something good.
~~~`,
        hy: `## Ինչ սովորեցինք այս տարի

| Բաժին | Սովորեցինք… |
|---|---|
| Գծեր և ձևեր | տեսնել գծեր, ձևեր և բծեր, աշխատել մատիտներով, մոմամատիտներով և ներկերով |
| Գույն | խառնել գույներ, գտնել տաքն ու սառը, բացն ու մուգը |
| Պատկերել | նկարել ծառեր, մարդիկ, տներ, կենդանիներ, հեքիաթներ, ձմեռ |
| Զարդարել | նախշեր, հայկական և ռուսական զարդանախշ, համաչափություն |
| Կառուցել | ապլիկացիա, ծալում, թղթե քաղաք, ծեփում, բացիկներ |

~~~art
pic genre-landscape genre-still-life genre-portrait genre-animal
~~~

## Ի՞նչ է ցուցահանդեսը

**Ցուցահանդեսը** աշխատանքների ցուցադրություն է այցելուների համար։ Նկարները պահվում և ցուցադրվում են **թանգարաններում** և **պատկերասրահներում**։ Երևանում կան Հայաստանի ազգային պատկերասրահը և Մարտիրոս Սարյանի տուն-թանգարանը, Մոսկվայում՝ Տրետյակովյան պատկերասրահը։

## Մեր ցուցահանդեսն ենք պատրաստում

1. Ընտրի՛ր քո **երկու-երեք** լավագույն աշխատանքը։
2. Ամեն աշխատանք դրի՛ր թղթե **շրջանակի** (պասպարտուի) վրա՝ միագույն, մի փոքր ավելի մեծ թերթի։
3. Պատրաստի՛ր **պիտակ**՝ քո անունը, աշխատանքի վերնագիրը և նյութը, օրինակ՝ «Աշնանային անտառ. ջրաներկ»։
4. Աշխատանքները կախի՛ր երեխաների աչքերի բարձրությամբ, կոկիկ շարքերով, իրարից հեռու։
5. Քանդակները և թղթե շենքերը դրի՛ր սեղանին։

## Ինչպես խոսել նկարի մասին

Սկսի՛ր լավ բանից։ Հետո ասա՛, թե ինչ ես նկատում՝ գույներ, ձևեր, տրամադրություն։

| Կարող ես ասել | Օրինակ |
|---|---|
| Ինձ դուր է գալիս… | Ինձ դուր են գալիս երկնքի վառ գույները։ |
| Նկատում եմ… | Նկատում եմ, որ տունը մոտ է, իսկ բլուրները՝ հեռու։ |
| Ինձ մոտ առաջանում է… | Ինձ մոտ հանգիստ զգացում է առաջանում։ |
| Կհարցնեի… | Ինչո՞ւ ընտրեցիր վարդագույն արև։ |

~~~art
sketch
Ցուցահանդեսի համար նորից նկարի՛ր տարվա սիրելի նկարդ, ավելի լավ։
~~~

~~~art
tasks
1. Անվանի՛ր այս տարվա հինգ բաժինները։
2. Ի՞նչ է ցուցահանդեսը։
3. Անվանի՛ր մեկ պատկերասրահ Երևանում և մեկը՝ Մոսկվայում։
4. Ի՞նչ է գրվում պիտակի վրա։
5. Ինչպե՞ս ենք կախում աշխատանքները ցուցահանդեսում։
6. Ընտրի՛ր քո երեք աշխատանքը, դրի՛ր շրջանակների մեջ և պատրաստի՛ր պիտակներ։
7. Դասընկերոջդ պատմի՛ր նրա աշխատանքներից մեկի մասին՝ օգտագործելով «Ինձ դուր է գալիս…» և «Նկատում եմ…»։
~~~

~~~art
hints
1. Գծեր և ձևեր, Գույն, Պատկերել, Զարդարել, Կառուցել։ 2. Աշխատանքների ցուցադրություն այցելուների համար։ 3. Օրինակ՝ Հայաստանի ազգային պատկերասրահը և Տրետյակովյան պատկերասրահը։ 4. Հեղինակի անունը, վերնագիրը և նյութը։ 5. Երեխաների աչքերի բարձրությամբ, կոկիկ շարքերով, իրարից հեռու։ 6. Ստուգի՛ր՝ ամեն աշխատանք ունի շրջանակ և պիտակ։ 7. Ստուգի՛ր՝ սկսել ես լավ բանից։
~~~`,
        ru: `## Чему мы научились в этом году

| Раздел | Мы научились… |
|---|---|
| Линии и формы | видеть линии, формы и пятна; работать карандашами, мелками и красками |
| Цвет | смешивать цвета, находить тёплые и холодные, светлые и тёмные |
| Изображение | рисовать деревья, людей, дома, животных, сказки, зиму |
| Украшение | узоры, армянский и русский орнамент, симметрия |
| Постройка | аппликация, складывание, бумажный город, лепка, открытки |

~~~art
pic genre-landscape genre-still-life genre-portrait genre-animal
~~~

## Что такое выставка?

**Выставка** — это показ работ для посетителей. Картины хранят и показывают в **музеях** и **галереях**. В Ереване есть Национальная галерея Армении и Дом-музей Мартироса Сарьяна, в Москве — Третьяковская галерея.

## Готовим нашу выставку

1. Выбери **две-три** свои лучшие работы.
2. Положи каждую работу на бумажную **рамку** (паспарту) — чуть больший лист одного цвета.
3. Сделай **этикетку**: твоё имя, название работы и материал, например «Осенний лес. Акварель».
4. Повесь работы на уровне глаз детей, ровными рядами, с промежутками.
5. Скульптуры и бумажные здания поставь на стол.

## Как говорить о картине

Начни с хорошего. Потом скажи, что замечаешь: цвета, формы, настроение.

| Можно сказать | Пример |
|---|---|
| Мне нравится… | Мне нравятся яркие цвета неба. |
| Я замечаю… | Я замечаю, что дом близко, а холмы далеко. |
| У меня настроение… | У меня спокойное настроение. |
| Я бы спросил(а)… | Почему ты выбрал(а) розовое солнце? |

~~~art
sketch
Нарисуй для выставки свою любимую картинку года ещё раз — ещё лучше.
~~~

~~~art
tasks
1. Назови пять разделов этого года.
2. Что такое выставка?
3. Назови галерею в Ереване и галерею в Москве.
4. Что пишут на этикетке?
5. Как вешают работы на выставке?
6. Выбери три свои работы, оформи их в рамки и сделай этикетки.
7. Расскажи однокласснику о его работе, используя «Мне нравится…» и «Я замечаю…».
~~~

~~~art
hints
1. Линии и формы, Цвет, Изображение, Украшение, Постройка. 2. Показ работ для посетителей. 3. Например, Национальная галерея Армении и Третьяковская галерея. 4. Имя автора, название и материал. 5. На уровне глаз детей, ровными рядами, с промежутками. 6. Проверь: у каждой работы есть рамка и этикетка. 7. Проверь: ты начал(а) с хорошего.
~~~`,
      },
      [
        q(t("An exhibition is…", "Ցուցահանդեսը…", "Выставка — это…"), [t("a show of works for visitors", "աշխատանքների ցուցադրություն է այցելուների համար", "показ работ для посетителей"), t("a kind of paint", "ներկի տեսակ է", "вид краски"), t("a test", "ստուգողական է", "контрольная")], 0),
        q(t("The Tretyakov Gallery is in…", "Տրետյակովյան պատկերասրահը գտնվում է…", "Третьяковская галерея находится в…"), [t("Yerevan", "Երևանում", "Ереване"), t("Moscow", "Մոսկվայում", "Москве"), t("Gyumri", "Գյումրիում", "Гюмри")], 1),
        q(t("A label tells…", "Պիտակը ցույց է տալիս…", "На этикетке пишут…"), [t("the price of paper", "թղթի գինը", "цену бумаги"), t("the weather", "եղանակը", "погоду"), t("the author, title and material", "հեղինակին, վերնագիրը և նյութը", "автора, название и материал")], 2),
        q(t("Works are hung…", "Աշխատանքները կախում ենք…", "Работы вешают…"), [t("at children's eye level", "երեխաների աչքերի բարձրությամբ", "на уровне глаз детей"), t("on the ceiling", "առաստաղին", "на потолке"), t("on top of each other", "իրար վրա", "друг на друга")], 0),
        q(t("When talking about a friend's picture, start with…", "Ընկերոջ նկարի մասին խոսելիս սկսի՛ր…", "Говоря о рисунке друга, начни с…"), [t("what is wrong", "սխալներից", "ошибок"), t("its price", "գնից", "цены"), t("something good", "լավ բանից", "хорошего")], 2),
        q(t("A paper frame around a work is called a…", "Աշխատանքի շուրջ թղթե շրջանակը կոչվում է…", "Бумажная рамка вокруг работы называется…"), [t("label", "պիտակ", "этикетка"), t("passe-partout", "պասպարտու", "паспарту"), t("border", "եզրանախշ", "бордюр")], 1),
      ],
    ),
  ],
};
