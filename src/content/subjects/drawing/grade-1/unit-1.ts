import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Lines and shapes", "Գծեր և ձևեր", "Линии и формы"),
  summary: t(
    "Art around us, art materials, kinds of lines, shapes, spot and silhouette, drawing animals from shapes.",
    "Արվեստը մեր շուրջ, նկարչական պարագաներ, գծերի տեսակներ, ձևեր, բիծ և ուրվագիծ, կենդանիներ պարզ ձևերից։",
    "Искусство вокруг нас, художественные материалы, виды линий, формы, пятно и силуэт, животные из простых форм.",
  ),
  lessons: [
    lesson(
      "art-around-us",
      ["Art is all around us", "Արվեստը մեր շուրջն է", "Искусство вокруг нас"],
      {
        en: ["Notice art at home, at school and in the street", "Meet the three art helpers: the Master of Pictures, of Decoration and of Building", "Draw something beautiful you saw on your way to school"],
        hy: ["Նկատել արվեստը տանը, դպրոցում և փողոցում", "Ծանոթանալ արվեստի երեք օգնականներին՝ Պատկերողին, Զարդարողին և Կառուցողին", "Նկարել մի գեղեցիկ բան, որ տեսել ես դպրոց գալիս"],
        ru: ["Замечать искусство дома, в школе и на улице", "Познакомиться с тремя Братьями-Мастерами: Изображения, Украшения и Постройки", "Нарисовать что-то красивое, что ты видел по дороге в школу"],
      },
      {
        en: `## Where do we find art?

Art is not only in museums. Look around:

| Place | Art you can find |
|---|---|
| at home | a patterned carpet, painted cups, pictures on the wall, a nice lamp |
| at school | posters, book pictures, our own drawings |
| in the street | beautiful buildings, statues, shop signs, a playground |
| in nature | butterfly wings, autumn leaves, snowflakes |

Somebody **designed** every chair, cup and book cover you see.

~~~art
pic carpet gzhel-plate genre-landscape butterfly
Art lives at home, in the street and in nature: a carpet, a painted plate, a picture, a butterfly's wings.
~~~

## The three art helpers

This year three helpers will guide us.

| Helper | What he does | We will learn to… |
|---|---|---|
| **Master of Pictures** | draws what he sees and imagines | draw trees, people, animals, houses |
| **Master of Decoration** | makes things beautiful with patterns | paint ornaments and patterns |
| **Master of Building** | builds houses, toys, towns | make things from paper and clay |

They always work **together**. A teapot needs all three: someone builds its shape, someone decorates it, and an artist may paint it in a picture.

~~~art
pic genre-landscape carpet izba
One picture for each helper: the Master of Pictures paints, the Master of Decoration decorates, the Master of Building builds.
~~~

## Your first task

On the way to school, find **one beautiful thing**: a tree, a gate, a cat, a flower bed. At home, draw it with a pencil or crayons.

~~~art
sketch paper=cream
Draw the most beautiful thing you saw on your way to school. Then save your picture!
~~~

~~~art
tasks
1. Name three things at home that an artist made beautiful.
2. Which helper draws pictures of a forest?
3. Which helper puts patterns on a scarf?
4. Which helper makes a paper house?
5. Find one beautiful thing in nature and say what makes it beautiful (colour, shape, pattern).
6. Look at a book cover: what is drawn on it?
7. Draw the beautiful thing you saw on your way to school.
~~~

~~~art
hints
1. Example: a carpet, a cup, a lamp. 2. The Master of Pictures. 3. The Master of Decoration. 4. The Master of Building. 5. Example: a butterfly has bright colours and a pattern that is the same on both wings. 6. Answers vary. 7. Show your drawing and tell the class what it is.
~~~`,
        hy: `## Որտե՞ղ ենք գտնում արվեստը

Արվեստը միայն թանգարանում չէ։ Նայի՛ր շուրջդ՝

| Վայր | Ինչ արվեստ կա |
|---|---|
| տանը | նախշավոր գորգ, նկարազարդ բաժակներ, պատի նկարներ, գեղեցիկ լամպ |
| դպրոցում | պաստառներ, գրքերի նկարներ, մեր նկարները |
| փողոցում | գեղեցիկ շենքեր, արձաններ, ցուցանակներ, խաղահրապարակ |
| բնության մեջ | թիթեռի թևեր, աշնան տերևներ, ձյան փաթիլներ |

Ամեն աթոռ, բաժակ և գրքի կազմ ինչ-որ մեկը **ձևավորել** է։

~~~art
pic carpet gzhel-plate genre-landscape butterfly
Արվեստն ապրում է տանը, փողոցում և բնության մեջ՝ գորգ, նկարազարդ ափսե, նկար, թիթեռի թևեր։
~~~

## Արվեստի երեք օգնականները

Այս տարի մեզ կօգնեն երեք օգնական՝

| Օգնական | Ինչ է անում | Մենք կսովորենք… |
|---|---|---|
| **Պատկերող վարպետ** | նկարում է այն, ինչ տեսնում և երևակայում է | նկարել ծառեր, մարդիկ, կենդանիներ, տներ |
| **Զարդարող վարպետ** | նախշերով գեղեցկացնում է իրերը | նկարել զարդանախշեր |
| **Կառուցող վարպետ** | կառուցում է տներ, խաղալիքներ, քաղաքներ | պատրաստել իրեր թղթից և կավից |

Նրանք միշտ աշխատում են **միասին**։ Թեյնիկին պետք են երեքն էլ՝ մեկը կառուցում է ձևը, մյուսը զարդարում է, իսկ նկարիչը կարող է այն նկարել։

~~~art
pic genre-landscape carpet izba
Ամեն օգնականին՝ մեկ նկար․ Պատկերողը նկարում է, Զարդարողը զարդարում է, Կառուցողը կառուցում է։
~~~

## Առաջին առաջադրանքը

Դպրոց գալիս գտի՛ր **մեկ գեղեցիկ բան**՝ ծառ, դարպաս, կատու, ծաղկաթումբ։ Տանը նկարի՛ր այն մատիտով կամ մոմամատիտներով։

~~~art
sketch paper=cream
Նկարի՛ր ամենագեղեցիկ բանը, որ տեսել ես դպրոց գալիս։ Հետո պահպանի՛ր նկարդ։
~~~

~~~art
tasks
1. Անվանի՛ր տան երեք իր, որոնք նկարիչը գեղեցկացրել է։
2. Ո՞ր օգնականն է նկարում անտառ։
3. Ո՞ր օգնականն է նախշեր անում շարֆի վրա։
4. Ո՞ր օգնականն է թղթե տուն սարքում։
5. Գտի՛ր բնության մեջ մի գեղեցիկ բան և ասա՛, թե ինչն է այն գեղեցիկ դարձնում (գույն, ձև, նախշ)։
6. Նայի՛ր գրքի կազմին. ի՞նչ է նկարված։
7. Նկարի՛ր այն գեղեցիկ բանը, որ տեսել ես դպրոց գալիս։
~~~

~~~art
hints
1. Օրինակ՝ գորգ, բաժակ, լամպ։ 2. Պատկերող վարպետը։ 3. Զարդարող վարպետը։ 4. Կառուցող վարպետը։ 5. Օրինակ՝ թիթեռն ունի վառ գույներ և նախշ, որը երկու թևերին նույնն է։ 6. Պատասխանները տարբեր են։ 7. Ցույց տո՛ւր նկարդ և պատմի՛ր դասարանին։
~~~`,
        ru: `## Где мы встречаем искусство?

Искусство есть не только в музеях. Оглянись:

| Где | Какое искусство |
|---|---|
| дома | узорный ковёр, расписные чашки, картины на стене, красивая лампа |
| в школе | плакаты, картинки в книгах, наши рисунки |
| на улице | красивые здания, памятники, вывески, детская площадка |
| в природе | крылья бабочки, осенние листья, снежинки |

Каждый стул, чашку и обложку книги кто-то **придумал и оформил**.

~~~art
pic carpet gzhel-plate genre-landscape butterfly
Искусство живёт дома, на улице и в природе: ковёр, расписная тарелка, картина, крылья бабочки.
~~~

## Три Брата-Мастера

В этом году нам помогут три Мастера:

| Мастер | Что делает | Мы научимся… |
|---|---|---|
| **Мастер Изображения** | рисует то, что видит и придумывает | рисовать деревья, людей, животных, дома |
| **Мастер Украшения** | украшает вещи узорами | рисовать орнаменты и узоры |
| **Мастер Постройки** | строит дома, игрушки, города | делать вещи из бумаги и глины |

Они всегда работают **вместе**. Чайнику нужны все трое: один строит его форму, другой украшает, а художник может нарисовать его на картине.

~~~art
pic genre-landscape carpet izba
По картинке на каждого Мастера: Мастер Изображения рисует, Мастер Украшения украшает, Мастер Постройки строит.
~~~

## Первое задание

По дороге в школу найди **одну красивую вещь**: дерево, ворота, кошку, клумбу. Дома нарисуй её карандашом или мелками.

~~~art
sketch paper=cream
Нарисуй самое красивое, что ты видел по дороге в школу. Потом сохрани рисунок!
~~~

~~~art
tasks
1. Назови три вещи дома, которые художник сделал красивыми.
2. Какой Мастер рисует лес?
3. Какой Мастер делает узоры на шарфе?
4. Какой Мастер делает бумажный домик?
5. Найди красивое в природе и скажи, что делает его красивым (цвет, форма, узор).
6. Посмотри на обложку книги: что на ней нарисовано?
7. Нарисуй красивую вещь, которую ты увидел по дороге в школу.
~~~

~~~art
hints
1. Например: ковёр, чашка, лампа. 2. Мастер Изображения. 3. Мастер Украшения. 4. Мастер Постройки. 5. Например: у бабочки яркие цвета и одинаковый узор на обоих крыльях. 6. Ответы разные. 7. Покажи рисунок и расскажи классу, что это.
~~~`,
      },
      [
        q(t("Where can we find art?", "Որտե՞ղ կարող ենք գտնել արվեստը։", "Где можно встретить искусство?"), [t("only in museums", "միայն թանգարանում", "только в музеях"), t("only in books", "միայն գրքերում", "только в книгах"), t("everywhere: at home, at school, in the street", "ամենուր՝ տանը, դպրոցում, փողոցում", "везде: дома, в школе, на улице")], 2),
        q(t("Which helper decorates things with patterns?", "Ո՞ր օգնականն է զարդարում իրերը նախշերով։", "Какой Мастер украшает вещи узорами?"), [t("the Master of Decoration", "Զարդարող վարպետը", "Мастер Украшения"), t("the Master of Building", "Կառուցող վարպետը", "Мастер Постройки"), t("the Master of Pictures", "Պատկերող վարպետը", "Мастер Изображения")], 0),
        q(t("Which helper makes a paper town?", "Ո՞ր օգնականն է սարքում թղթե քաղաք։", "Какой Мастер делает бумажный город?"), [t("the Master of Pictures", "Պատկերող վարպետը", "Мастер Изображения"), t("the Master of Building", "Կառուցող վարպետը", "Мастер Постройки"), t("the Master of Decoration", "Զարդարող վարպետը", "Мастер Украшения")], 1),
        q(t("The three helpers usually work…", "Երեք օգնականները սովորաբար աշխատում են…", "Три Мастера обычно работают…"), [t("together", "միասին", "вместе"), t("never", "երբեք", "никогда"), t("only one at a time, never together", "միայն առանձին", "только поодиночке")], 0),
        q(t("Which is art from nature?", "Ո՞րն է բնության «արվեստը»։", "Что из этого — красота природы?"), [t("a poster", "պաստառ", "плакат"), t("a teapot", "թեյնիկ", "чайник"), t("a snowflake", "ձյան փաթիլ", "снежинка")], 2),
        q(t("Who designed the cup you drink from?", "Ո՞վ է ձևավորել այն բաժակը, որից խմում ես։", "Кто придумал чашку, из которой ты пьёшь?"), [t("nobody, it just appeared", "ոչ ոք, ինքն իրեն է հայտնվել", "никто, она сама появилась"), t("an artist or designer", "նկարիչ կամ դիզայներ", "художник или дизайнер"), t("a tree", "ծառը", "дерево")], 1),
      ],
    ),
    lesson(
      "art-materials",
      ["Art materials and how to use them", "Նկարչական պարագաներ և դրանց օգտագործումը", "Художественные материалы и как ими пользоваться"],
      {
        en: ["Name the main art materials: pencils, crayons, felt-tip pens, gouache, watercolour, brushes, glue, scissors", "Prepare the workplace and clean up after work", "Use scissors and brushes safely and carefully"],
        hy: ["Անվանել հիմնական պարագաները՝ մատիտներ, մոմամատիտներ, ֆլոմաստերներ, գուաշ, ջրաներկ, վրձիններ, սոսինձ, մկրատ", "Նախապատրաստել աշխատատեղը և մաքրել այն աշխատանքից հետո", "Ապահով և խնամքով օգտագործել մկրատն ու վրձինները"],
        ru: ["Называть основные материалы: карандаши, мелки, фломастеры, гуашь, акварель, кисти, клей, ножницы", "Готовить рабочее место и убирать его после работы", "Безопасно и аккуратно пользоваться ножницами и кистями"],
      },
      {
        en: `## What artists use

| Material | Good for | Tip |
|---|---|---|
| simple pencil | sketches, lines | press lightly first, you can rub out |
| coloured pencils | small details, colouring | colour in one direction |
| wax crayons | bright, thick colour | good on rough paper |
| felt-tip pens | outlines, bright spots | close the cap so it does not dry |
| gouache | thick, bright paint | covers the paper; mix with a little water |
| watercolour | thin, see-through paint | use lots of water, light colours |
| brushes | painting | a thick brush for big areas, a thin one for details |
| glue and scissors | appliqué, paper crafts | a little glue is enough |

~~~art
pic pencil crayons felt brush gouache watercolour palette scissors glue plasticine
~~~

## Getting ready

1. Cover the desk with an oilcloth or newspaper.
2. Put a jar of water on the **right** (if you are right-handed) so you do not knock it over.
3. Keep a cloth to wipe the brush.

~~~art
sketch
Test your tools: draw a thin line, a middle line and a thick line. Then try the eraser.
~~~

## Safety with scissors

- Pass scissors **handles first**, with the blades closed.
- Cut **away** from your fingers.
- Never walk around with open scissors.

## Cleaning up

Wash brushes until the water is clear and stand them **bristles up**. Close the paint jars. Put everything back in its place.

~~~art
pic mode=silhouette scissors brush pencil palette
Guess each tool by its shadow.
~~~

~~~art
tasks
1. Which material is best for a thin outline?
2. Which paint is see-through: gouache or watercolour?
3. Where do you put the water jar if you draw with your right hand?
4. How do you pass scissors to a friend?
5. How do you store a clean brush?
6. Draw the same small flower three times: with a pencil, with crayons and with a felt-tip pen. Which one is the brightest?
7. Make a list of your own art materials.
~~~

~~~art
hints
1. A pencil or a thin felt-tip pen. 2. Watercolour. 3. On the right. 4. Handles first, blades closed. 5. Bristles up, in a jar. 6. Usually the felt-tip pen or the crayon is the brightest. 7. Lists will differ.
~~~`,
        hy: `## Ինչով են աշխատում նկարիչները

| Պարագա | Ինչի համար | Խորհուրդ |
|---|---|---|
| սև մատիտ | էսքիզ, գծեր | սկզբում թեթև սեղմի՛ր, կարելի է ջնջել |
| գունավոր մատիտներ | մանր մասեր, գունավորում | գունավորի՛ր մեկ ուղղությամբ |
| մոմամատիտներ | վառ, հաստ գույն | լավ է կոպիտ թղթի վրա |
| ֆլոմաստերներ | եզրագծեր, վառ բծեր | փակի՛ր գլխարկը, որ չչորանա |
| գուաշ | թանձր, վառ ներկ | ծածկում է թուղթը, խառնի՛ր քիչ ջրով |
| ջրաներկ | բարակ, թափանցիկ ներկ | շատ ջուր, բաց գույներ |
| վրձիններ | ներկելու համար | հաստը՝ մեծ մասերի, բարակը՝ մանրուքների |
| սոսինձ և մկրատ | ապլիկացիա, թղթե իրեր | քիչ սոսինձը բավական է |

~~~art
pic pencil crayons felt brush gouache watercolour palette scissors glue plasticine
~~~

## Նախապատրաստում

1. Սեղանը ծածկի՛ր մոմլաթով կամ թերթով։
2. Ջրի բաժակը դի՛ր **աջ** կողմում (եթե աջլիկ ես), որ չշրջես։
3. Կողքիդ պահի՛ր լաթ՝ վրձինը սրբելու համար։

~~~art
sketch
Փորձարկի՛ր գործիքներդ․ նկարի՛ր բարակ, միջին և հաստ գիծ։ Հետո փորձի՛ր ռետինը։
~~~

## Մկրատի անվտանգությունը

- Մկրատը փոխանցի՛ր **բռնակով առաջ**, սայրերը փակ։
- Կտրի՛ր մատներիցդ **դեպի դուրս**։
- Երբեք մի՛ քայլիր բաց մկրատով։

## Մաքրություն

Վրձինները լվա՛ մինչև ջուրը մաքրվի և դի՛ր բաժակի մեջ **մազիկները վերև**։ Փակի՛ր ներկերը։ Ամեն ինչ դի՛ր իր տեղը։

~~~art
pic mode=silhouette scissors brush pencil palette
Գուշակի՛ր ամեն գործիքն իր ստվերով։
~~~

~~~art
tasks
1. Ո՞ր պարագան է լավագույնը բարակ եզրագծի համար։
2. Ո՞ր ներկն է թափանցիկ՝ գուաշը, թե՞ ջրաներկը։
3. Որտե՞ղ ես դնում ջրի բաժակը, եթե նկարում ես աջ ձեռքով։
4. Ինչպե՞ս ես մկրատը փոխանցում ընկերոջդ։
5. Ինչպե՞ս ես պահում մաքուր վրձինը։
6. Նույն փոքրիկ ծաղիկը նկարի՛ր երեք անգամ՝ մատիտով, մոմամատիտով և ֆլոմաստերով։ Ո՞րն է ամենավառը։
7. Կազմի՛ր քո նկարչական պարագաների ցուցակը։
~~~

~~~art
hints
1. Մատիտը կամ բարակ ֆլոմաստերը։ 2. Ջրաներկը։ 3. Աջ կողմում։ 4. Բռնակով առաջ, սայրերը փակ։ 5. Մազիկները վերև, բաժակի մեջ։ 6. Սովորաբար ամենավառը ֆլոմաստերն է կամ մոմամատիտը։ 7. Ցուցակները տարբեր կլինեն։
~~~`,
        ru: `## Чем работают художники

| Материал | Для чего | Совет |
|---|---|---|
| простой карандаш | наброски, линии | сначала нажимай слабо, можно стереть |
| цветные карандаши | мелкие детали, раскрашивание | штрихуй в одном направлении |
| восковые мелки | яркий, плотный цвет | хорошо на шероховатой бумаге |
| фломастеры | контуры, яркие пятна | закрывай колпачок, чтобы не высохли |
| гуашь | густая, яркая краска | перекрывает бумагу; разводи немного водой |
| акварель | тонкая, прозрачная краска | много воды, светлые цвета |
| кисти | для красок | толстая — для больших мест, тонкая — для деталей |
| клей и ножницы | аппликация, поделки | клея нужно немного |

~~~art
pic pencil crayons felt brush gouache watercolour palette scissors glue plasticine
~~~

## Подготовка

1. Застели парту клеёнкой или газетой.
2. Поставь баночку с водой **справа** (если ты правша), чтобы не опрокинуть.
3. Положи рядом тряпочку, чтобы вытирать кисть.

~~~art
sketch
Проверь инструменты: проведи тонкую, среднюю и толстую линию. Потом попробуй ластик.
~~~

## Ножницы — осторожно!

- Передавай ножницы **кольцами вперёд**, с сомкнутыми лезвиями.
- Режь в сторону **от пальцев**.
- Никогда не ходи с открытыми ножницами.

## Уборка

Мой кисти, пока вода не станет чистой, и ставь их **ворсом вверх**. Закрой краски. Положи всё на место.

~~~art
pic mode=silhouette scissors brush pencil palette
Угадай каждый инструмент по тени.
~~~

~~~art
tasks
1. Какой материал лучше всего для тонкого контура?
2. Какая краска прозрачная: гуашь или акварель?
3. Куда ставить баночку с водой, если рисуешь правой рукой?
4. Как передать ножницы другу?
5. Как хранить чистую кисть?
6. Нарисуй один и тот же цветок три раза: карандашом, мелками и фломастером. Какой самый яркий?
7. Составь список своих художественных материалов.
~~~

~~~art
hints
1. Карандаш или тонкий фломастер. 2. Акварель. 3. Справа. 4. Кольцами вперёд, лезвия сомкнуты. 5. Ворсом вверх, в баночке. 6. Обычно самый яркий — фломастер или мелок. 7. Списки будут разными.
~~~`,
      },
      [
        q(t("Which paint is see-through?", "Ո՞ր ներկն է թափանցիկ։", "Какая краска прозрачная?"), [t("gouache", "գուաշ", "гуашь"), t("watercolour", "ջրաներկ", "акварель"), t("wax crayon", "մոմամատիտ", "восковой мелок")], 1),
        q(t("How do you pass scissors?", "Ինչպե՞ս են փոխանցում մկրատը։", "Как передают ножницы?"), [t("handles first, blades closed", "բռնակով առաջ, սայրերը փակ", "кольцами вперёд, лезвия сомкнуты"), t("blades first", "սայրերով առաջ", "лезвиями вперёд"), t("throw them", "նետում են", "бросают")], 0),
        q(t("A thin brush is good for…", "Բարակ վրձինը լավ է…", "Тонкая кисть подходит для…"), [t("painting the whole sky", "ամբողջ երկինքը ներկելու համար", "закрашивания всего неба"), t("cleaning the desk", "սեղանը մաքրելու համար", "уборки парты"), t("small details", "մանրուքների համար", "мелких деталей")], 2),
        q(t("A clean brush is stored…", "Մաքուր վրձինը պահում են…", "Чистую кисть хранят…"), [t("bristles down in water", "մազիկները ներքև՝ ջրի մեջ", "ворсом вниз в воде"), t("bristles up", "մազիկները վերև", "ворсом вверх"), t("in the paint", "ներկի մեջ", "в краске")], 1),
        q(t("Why do we close felt-tip pens?", "Ինչո՞ւ ենք փակում ֆլոմաստերները։", "Зачем закрывать фломастеры?"), [t("so they do not dry out", "որ չչորանան", "чтобы не высохли"), t("so they get brighter", "որ վառ դառնան", "чтобы стали ярче"), t("so they get longer", "որ երկարեն", "чтобы стали длиннее")], 0),
        q(t("Before painting, the desk should be…", "Ներկելուց առաջ սեղանը պետք է…", "Перед работой красками парту нужно…"), [t("wet", "թաց լինի", "намочить"), t("empty of everything", "լրիվ դատարկ լինի", "полностью освободить от всего"), t("covered with an oilcloth or newspaper", "ծածկված լինի մոմլաթով կամ թերթով", "застелить клеёнкой или газетой")], 2),
      ],
    ),
    lesson(
      "magic-line",
      ["The magic line", "Կախարդական գիծը", "Волшебная линия"],
      {
        en: ["Draw straight, wavy, zigzag and spiral lines", "Control pressure to make thin and thick lines", "Create a picture using only lines"],
        hy: ["Գծել ուղիղ, ալիքաձև, զիգզագ և պարուրաձև գծեր", "Վերահսկել սեղմումը՝ բարակ և հաստ գծեր ստանալու համար", "Ստեղծել պատկեր միայն գծերով"],
        ru: ["Проводить прямые, волнистые, зигзагообразные и спиральные линии", "Регулировать нажим для тонких и толстых линий", "Создать картинку только из линий"],
      },
      {
        en: `## Every drawing starts with a line

A line is the path of a moving point. Put your pencil on the paper and move it: you have made a line! Lines can be:

- **straight** — like a ruler, a road, a flagpole
- **wavy** — like waves, hills, a snake
- **zigzag** — like lightning, mountains, a crocodile's teeth
- **spiral** — like a snail shell, a lollipop
- **dotted** — like footprints in snow

### Thin and thick

Press lightly — the line is **thin** and pale. Press harder — it becomes **thick** and dark. Try drawing one line that starts thin and grows thick, like a river widening.

### How to hold the pencil

Hold the pencil about two fingers above the tip, not too tight. Your hand should rest on the paper. Move your whole arm for long lines, only your fingers for short ones.

### Let's make a line picture

1. Draw a wavy line across the paper: this is the sea.
2. Above it, zigzag lines make mountains.
3. A spiral in the sky is the sun.
4. Short straight lines going down are rain. Or sunbeams!
5. Dotted lines are a path to a house made of straight lines.

Use **only lines**, no colouring yet. See how many things you can show!

### Look around

Find five lines in the classroom: the edge of a desk, a crack in the wall, the cord of a lamp… What kind of lines are they?

### Artists and lines

Armenian artist **Martiros Saryan** used bold, simple lines to draw mountains. Many ancient Armenian manuscripts begin with letters drawn as birds made of flowing lines — look for a picture of one.

~~~art
lines
~~~

~~~art
sketch
Make a whole picture only from lines: wavy water, zigzag mountains, a spiral sun.
~~~

~~~art
tasks
1. Name five kinds of lines.
2. Which kind of line looks like lightning?
3. How do you make a line thin and pale?
4. Draw a line that starts thin and becomes thick.
5. Find five lines in the classroom and say what kind each one is.
6. Make the line picture: sea, mountains, sun, rain and a path to a house.
7. Draw a cat using only lines: no colouring.
~~~

~~~art
hints
1. Straight, wavy, zigzag, spiral, dotted. 2. Zigzag. 3. Press lightly. 4. Start pressing lightly, then press harder and harder. 5. Example: the edge of the desk is straight, the lamp cord is wavy. 6. Check: wavy sea, zigzag mountains, spiral sun, short straight rain, dotted path. 7. Show your cat to a friend: can they see what it is?
~~~`,
        hy: `## Ամեն նկար սկսվում է գծից

Գիծը շարժվող կետի հետքն է։ Մատիտը դիր թղթի վրա և շարժիր․ դու գիծ ես գծել։ Գծերը լինում են․

- **ուղիղ**՝ քանոնի, ճանապարհի, դրոշակաձողի նման
- **ալիքաձև**՝ ալիքների, բլուրների, օձի նման
- **զիգզագ**՝ կայծակի, սարերի, կոկորդիլոսի ատամների նման
- **պարուրաձև**՝ խխունջի խեցու, շաքարեղեգի նման
- **կետագիծ**՝ ձյան վրա հետքերի նման

### Բարակ և հաստ

Թեթև սեղմիր՝ գիծը **բարակ** է և գունատ։ Ավելի ուժեղ սեղմիր՝ **հաստ** ու մուգ է դառնում։ Փորձիր գծել մեկ գիծ, որ սկսվում է բարակ և դառնում հաստ՝ ինչպես լայնացող գետ։

### Ինչպես բռնել մատիտը

Մատիտը բռնիր սրածայրից մոտ երկու մատ վերև, ոչ շատ ամուր։ Ձեռքը պետք է հենվի թղթին։ Երկար գծերի համար շարժիր ամբողջ թևը, կարճերի համար՝ միայն մատները։

### Գծերից նկար սարքենք

1. Թղթի վրայով ալիքաձև գիծ գծիր․ դա ծովն է։
2. Նրա վերևում զիգզագ գծերը սարեր են։
3. Երկնքում պարույրը արևն է։
4. Ներքև գնացող կարճ ուղիղ գծերը անձրև են։ Կամ արևի շողեր։
5. Կետագծերը ճանապարհ են դեպի ուղիղ գծերից կազմված տուն։

Օգտագործիր **միայն գծեր**, դեռ մի գունավորիր։ Տես, քանի՞ բան կարող ես ցույց տալ։

### Նայիր շուրջդ

Դասարանում գտիր հինգ գիծ՝ սեղանի եզրը, պատի ճաքը, լամպի լարը… Ի՞նչ տեսակի գծեր են դրանք։

### Նկարիչները և գծերը

Հայ նկարիչ **Մարտիրոս Սարյանը** սարերը նկարում էր համարձակ, պարզ գծերով։ Հին հայկական ձեռագրերը հաճախ սկսվում են թռչնատառերով՝ հոսուն գծերից կազմված թռչուն-տառերով։ Փորձիր գտնել դրանցից մեկի պատկերը։

~~~art
lines
~~~

~~~art
sketch
Ամբողջ նկար ստեղծի՛ր միայն գծերով՝ ալիքաձև ջուր, զիգզագ լեռներ, պարուրաձև արև։
~~~

~~~art
tasks
1. Անվանի՛ր գծերի հինգ տեսակ։
2. Ո՞ր գիծն է կայծակի նման։
3. Ինչպե՞ս ստանալ բարակ և գունատ գիծ։
4. Գծի՛ր գիծ, որ սկսվում է բարակ և դառնում հաստ։
5. Դասարանում գտի՛ր հինգ գիծ և ասա՛, թե ինչ տեսակի են։
6. Արա՛ գծերից նկարը՝ ծով, սարեր, արև, անձրև և ճանապարհ դեպի տուն։
7. Նկարի՛ր կատու միայն գծերով, առանց գունավորելու։
~~~

~~~art
hints
1. Ուղիղ, ալիքաձև, զիգզագ, պարուրաձև, կետագիծ։ 2. Զիգզագը։ 3. Թեթև սեղմել։ 4. Սկզբում թեթև սեղմի՛ր, հետո ավելի ու ավելի ուժեղ։ 5. Օրինակ՝ սեղանի եզրը ուղիղ է, լամպի լարը՝ ալիքաձև։ 6. Ստուգի՛ր՝ ալիքաձև ծով, զիգզագ սարեր, պարուրաձև արև, կարճ ուղիղ անձրև, կետագիծ ճանապարհ։ 7. Ցույց տուր կատուդ ընկերոջդ. կհասկանա՞, թե ինչ է։
~~~`,
        ru: `## Каждый рисунок начинается с линии

Линия — это след движущейся точки. Поставь карандаш на бумагу и проведи им: ты нарисовал линию! Линии бывают:

- **прямые** — как линейка, дорога, флагшток
- **волнистые** — как волны, холмы, змея
- **зигзагом** — как молния, горы, зубы крокодила
- **спиральные** — как раковина улитки, леденец
- **пунктирные** — как следы на снегу

### Тонкие и толстые

Нажми слабо — линия **тонкая** и бледная. Нажми сильнее — она станет **толстой** и тёмной. Попробуй провести одну линию, которая начинается тонкой и становится толстой, как расширяющаяся река.

### Как держать карандаш

Держи карандаш примерно на два пальца выше кончика, не слишком крепко. Рука должна опираться на бумагу. Для длинных линий двигай всей рукой, для коротких — только пальцами.

### Сделаем картинку из линий

1. Проведи волнистую линию через лист: это море.
2. Над ней зигзаги — горы.
3. Спираль на небе — солнце.
4. Короткие прямые линии вниз — дождь. Или солнечные лучи!
5. Пунктир — дорожка к домику из прямых линий.

Используй **только линии**, пока без раскрашивания. Посмотри, сколько всего можно показать!

### Посмотри вокруг

Найди пять линий в классе: край парты, трещина на стене, провод лампы… Какие это линии?

### Художники и линии

Армянский художник **Мартирос Сарьян** рисовал горы смелыми простыми линиями. Многие древние армянские рукописи начинаются с букв-птиц, составленных из плавных линий — найди картинку одной из них.

~~~art
lines
~~~

~~~art
sketch
Сделай целую картину только из линий: волнистая вода, горы-зигзаги, солнце-спираль.
~~~

~~~art
tasks
1. Назови пять видов линий.
2. Какая линия похожа на молнию?
3. Как сделать линию тонкой и бледной?
4. Проведи линию, которая начинается тонкой и становится толстой.
5. Найди в классе пять линий и скажи, какие они.
6. Сделай картинку из линий: море, горы, солнце, дождь и дорожка к дому.
7. Нарисуй кошку только линиями, без раскрашивания.
~~~

~~~art
hints
1. Прямая, волнистая, зигзаг, спираль, пунктир. 2. Зигзаг. 3. Нажимать слабо. 4. Сначала нажимай слабо, потом всё сильнее. 5. Например: край парты — прямая, провод лампы — волнистая. 6. Проверь: волнистое море, горы-зигзаги, солнце-спираль, дождь из коротких прямых, дорожка-пунктир. 7. Покажи кошку другу: поймёт ли он, что это?
~~~`,
      },
      [
        q(t("Which line looks like a snail shell?", "Ո՞ր գիծն է խխունջի խեցու նման։", "Какая линия похожа на раковину улитки?"), [t("zigzag", "զիգզագ", "зигзаг"), t("spiral", "պարուրաձև", "спираль"), t("straight", "ուղիղ", "прямая")], 1),
        q(t("To make a thick dark line you should…", "Հաստ մուգ գիծ ստանալու համար պետք է…", "Чтобы линия стала толстой и тёмной, нужно…"), [t("press harder", "ավելի ուժեղ սեղմել", "нажать сильнее"), t("press lightly", "թեթև սեղմել", "нажать слабее"), t("use an eraser", "ռետին օգտագործել", "взять ластик")], 0),
        q(t("Which line looks like lightning?", "Ո՞ր գիծն է կայծակի նման։", "Какая линия похожа на молнию?"), [t("wavy", "ալիքաձև", "волнистая"), t("dotted", "կետագիծ", "пунктирная"), t("zigzag", "զիգզագ", "зигзаг")], 2),
        q(t("A line is the path of…", "Գիծը…", "Линия — это след…"), [t("a moving point", "շարժվող կետի հետքն է", "движущейся точки"), t("a colour", "գույնի հետքն է", "цвета"), t("a shadow", "ստվերի հետքն է", "тени")], 0),
        q(t("Which line is like footprints in snow?", "Ո՞ր գիծն է ձյան վրա հետքերի նման։", "Какая линия похожа на следы на снегу?"), [t("straight", "ուղիղ", "прямая"), t("dotted", "կետագիծ", "пунктирная"), t("spiral", "պարուրաձև", "спираль")], 1),
        q(t("For a long line you move…", "Երկար գծի համար շարժում ենք…", "Для длинной линии двигаем…"), [t("only your fingers", "միայն մատները", "только пальцами"), t("only the paper", "միայն թուղթը", "только бумагой"), t("your whole arm", "ամբողջ թևը", "всей рукой")], 2),
      ],
    ),
    lesson(
      "shapes-around-us",
      ["Shapes around us: circle, square, triangle", "Ձևերը մեր շուրջ․ շրջան, քառակուսի, եռանկյուն", "Формы вокруг нас: круг, квадрат, треугольник"],
      {
        en: ["Recognise circles, ovals, squares, rectangles and triangles around us", "Draw the basic shapes freehand", "Build a simple picture from shapes"],
        hy: ["Ճանաչել շրջանները, օվալները, քառակուսիները, ուղղանկյունները և եռանկյունները մեր շուրջ", "Ձեռքով գծել հիմնական ձևերը", "Ձևերից կազմել պարզ նկար"],
        ru: ["Узнавать круги, овалы, квадраты, прямоугольники и треугольники вокруг нас", "Рисовать основные формы от руки", "Составлять простую картинку из форм"],
      },
      {
        en: `## Five basic shapes

| Shape | What it looks like | Where we see it |
|---|---|---|
| circle | perfectly round | the sun, a plate, a wheel |
| oval | a stretched circle | an egg, a face, a leaf |
| square | four equal sides | a window pane, a napkin |
| rectangle | two long and two short sides | a door, a book, a desk |
| triangle | three sides and three corners | a roof, a slice of pizza, a mountain |

~~~art
pic shapes apple karas
Circle, square, triangle, oval: find them in an apple, a window, a roof and a jar.
~~~

## Drawing shapes freehand

- **Circle:** draw it in one smooth movement, turning your whole hand. Try several times lightly, then go over the best one.
- **Square:** first mark four dots in the corners, then join them.
- **Triangle:** put three dots and join them with straight lines.

~~~art
sketch guide=grid
Draw a circle, a square and a triangle freehand. The grid helps to keep them even.
~~~

## A picture from shapes

1. A big **rectangle** is a house.
2. A **triangle** on top is the roof.
3. Small **squares** are windows, a tall **rectangle** is the door.
4. A **circle** in the sky is the sun, **ovals** are clouds.
5. A **triangle** on a **rectangle** stick is a fir tree.

~~~art
steps house
~~~

~~~art
tasks
1. Which shape is an egg?
2. Which shape is a roof?
3. Name three round things in your kitchen.
4. How many corners has a triangle? A square?
5. Draw a house only from a rectangle, a triangle and squares.
6. Draw a car from rectangles and circles.
7. Find six shapes in your classroom and draw them.
~~~

~~~art
hints
1. An oval. 2. A triangle. 3. Example: a plate, a pan lid, a cup bottom. 4. Three; four. 5. Check: rectangle walls, triangle roof, square windows. 6. Rectangles for the body and windows, circles for the wheels. 7. Example: a square window, a rectangle board, a round clock.
~~~`,
        hy: `## Հինգ հիմնական ձև

| Ձև | Ինչպիսին է | Որտեղ ենք տեսնում |
|---|---|---|
| շրջան | կատարյալ կլոր | արև, ափսե, անիվ |
| օվալ | ձգված շրջան | ձու, դեմք, տերև |
| քառակուսի | չորս հավասար կողմ | պատուհանի ապակի, անձեռոցիկ |
| ուղղանկյուն | երկու երկար և երկու կարճ կողմ | դուռ, գիրք, սեղան |
| եռանկյուն | երեք կողմ և երեք անկյուն | տանիք, պիցցայի կտոր, սար |

~~~art
pic shapes apple karas
Շրջան, քառակուսի, եռանկյուն, օվալ․ գտի՛ր դրանք խնձորի, պատուհանի, տանիքի և կարասի մեջ։
~~~

## Ձևերը գծում ենք ձեռքով

- **Շրջան.** գծի՛ր մեկ սահուն շարժումով, պտտելով ամբողջ ձեռքը։ Մի քանի անգամ թեթև փորձի՛ր, հետո լավագույնի վրայով անցի՛ր։
- **Քառակուսի.** նախ անկյուններում դի՛ր չորս կետ, հետո միացրո՛ւ։
- **Եռանկյուն.** դի՛ր երեք կետ և միացրո՛ւ ուղիղ գծերով։

~~~art
sketch guide=grid
Ձեռքով նկարի՛ր շրջան, քառակուսի և եռանկյուն։ Ցանցն օգնում է դրանք հավասար պահել։
~~~

## Նկար ձևերից

1. Մեծ **ուղղանկյունը** տունն է։
2. Վերևի **եռանկյունը** տանիքն է։
3. Փոքր **քառակուսիները** պատուհաններ են, բարձր **ուղղանկյունը**՝ դուռ։
4. Երկնքի **շրջանը** արևն է, **օվալները**՝ ամպեր։
5. **Եռանկյունը** **ուղղանկյուն** ձողի վրա եղևնի է։

~~~art
steps house
~~~

~~~art
tasks
1. Ի՞նչ ձև ունի ձուն։
2. Ի՞նչ ձև ունի տանիքը։
3. Անվանի՛ր խոհանոցի երեք կլոր իր։
4. Քանի՞ անկյուն ունի եռանկյունը։ Իսկ քառակուսի՞ն։
5. Նկարի՛ր տուն միայն ուղղանկյունից, եռանկյունից և քառակուսիներից։
6. Նկարի՛ր մեքենա ուղղանկյուններից և շրջաններից։
7. Դասարանում գտի՛ր վեց ձև և նկարի՛ր։
~~~

~~~art
hints
1. Օվալ։ 2. Եռանկյուն։ 3. Օրինակ՝ ափսե, կաթսայի կափարիչ, բաժակի հատակ։ 4. Երեք, չորս։ 5. Ստուգի՛ր՝ ուղղանկյուն պատեր, եռանկյուն տանիք, քառակուսի պատուհաններ։ 6. Ուղղանկյուններ՝ թափքի և պատուհանների համար, շրջաններ՝ անիվների։ 7. Օրինակ՝ քառակուսի պատուհան, ուղղանկյուն գրատախտակ, կլոր ժամացույց։
~~~`,
        ru: `## Пять основных форм

| Форма | Какая она | Где встречаем |
|---|---|---|
| круг | совсем круглый | солнце, тарелка, колесо |
| овал | вытянутый круг | яйцо, лицо, листок |
| квадрат | четыре равные стороны | стекло в окне, салфетка |
| прямоугольник | две длинные и две короткие стороны | дверь, книга, парта |
| треугольник | три стороны и три угла | крыша, кусок пиццы, гора |

~~~art
pic shapes apple karas
Круг, квадрат, треугольник, овал: найди их в яблоке, окне, крыше и кувшине.
~~~

## Рисуем формы от руки

- **Круг:** рисуй одним плавным движением, поворачивая всю кисть. Попробуй несколько раз слегка, потом обведи лучший.
- **Квадрат:** сначала поставь четыре точки в углах, потом соедини.
- **Треугольник:** поставь три точки и соедини прямыми линиями.

~~~art
sketch guide=grid
Нарисуй от руки круг, квадрат и треугольник. Сетка поможет сделать их ровными.
~~~

## Картинка из форм

1. Большой **прямоугольник** — дом.
2. **Треугольник** сверху — крыша.
3. Маленькие **квадраты** — окна, высокий **прямоугольник** — дверь.
4. **Круг** в небе — солнце, **овалы** — облака.
5. **Треугольник** на **прямоугольной** палочке — ёлка.

~~~art
steps house
~~~

~~~art
tasks
1. Какой формы яйцо?
2. Какой формы крыша?
3. Назови три круглых предмета на кухне.
4. Сколько углов у треугольника? А у квадрата?
5. Нарисуй дом только из прямоугольника, треугольника и квадратов.
6. Нарисуй машину из прямоугольников и кругов.
7. Найди в классе шесть форм и нарисуй их.
~~~

~~~art
hints
1. Овал. 2. Треугольник. 3. Например: тарелка, крышка кастрюли, дно чашки. 4. Три; четыре. 5. Проверь: стены — прямоугольник, крыша — треугольник, окна — квадраты. 6. Прямоугольники — кузов и окна, круги — колёса. 7. Например: квадратное окно, прямоугольная доска, круглые часы.
~~~`,
      },
      [
        q(t("Which shape is an egg?", "Ի՞նչ ձև ունի ձուն։", "Какой формы яйцо?"), [t("square", "քառակուսի", "квадрат"), t("oval", "օվալ", "овал"), t("triangle", "եռանկյուն", "треугольник")], 1),
        q(t("How many corners has a triangle?", "Քանի՞ անկյուն ունի եռանկյունը։", "Сколько углов у треугольника?"), [t("3", "3", "3"), t("4", "4", "4"), t("0", "0", "0")], 0),
        q(t("A door is usually a…", "Դուռը սովորաբար…", "Дверь обычно —"), [t("circle", "շրջան է", "круг"), t("triangle", "եռանկյուն է", "треугольник"), t("rectangle", "ուղղանկյուն է", "прямоугольник")], 2),
        q(t("How do you start drawing a square?", "Ինչպե՞ս սկսել քառակուսին գծելը։", "С чего начать рисовать квадрат?"), [t("mark four corner dots", "դնել չորս անկյունային կետ", "поставить четыре точки в углах"), t("draw a circle", "գծել շրջան", "нарисовать круг"), t("colour it in", "գունավորել", "раскрасить")], 0),
        q(t("Which thing is round?", "Ո՞ր իրն է կլոր։", "Какой предмет круглый?"), [t("a book", "գիրք", "книга"), t("a wheel", "անիվ", "колесо"), t("a roof", "տանիք", "крыша")], 1),
        q(t("A fir tree can be drawn from…", "Եղևնին կարելի է նկարել…", "Ёлку можно нарисовать из…"), [t("circles only", "միայն շրջաններից", "одних кругов"), t("ovals only", "միայն օվալներից", "одних овалов"), t("triangles and a rectangle trunk", "եռանկյուններից և ուղղանկյուն բնից", "треугольников и прямоугольного ствола")], 2),
      ],
    ),
    lesson(
      "spot-and-silhouette",
      ["Spot and silhouette", "Բիծ և ուրվագիծ", "Пятно и силуэт"],
      {
        en: ["Understand that a spot of colour can become a picture", "Recognise objects by their silhouette", "Turn a blot into an animal or a creature by adding details"],
        hy: ["Հասկանալ, որ գունային բիծը կարող է նկար դառնալ", "Ճանաչել առարկաները ըստ ուրվագծի", "Բծից կենդանի կամ արարած ստանալ՝ մանրամասներ ավելացնելով"],
        ru: ["Понять, что цветовое пятно может стать картинкой", "Узнавать предметы по силуэту", "Превращать кляксу в зверька, дорисовывая детали"],
      },
      {
        en: `## What is a spot?

A **spot** is a patch of colour with a shape: a puddle, a cloud, a shadow. Artists see pictures in spots. Look at clouds: one looks like a dog, another like a ship!

## What is a silhouette?

A **silhouette** is a dark shape without details, like a shadow on the wall. We can still tell what it is: a cat with pointed ears, a rabbit with long ears, a bird with wings.

| Silhouette | How we know it |
|---|---|
| cat | pointed ears, long tail |
| rabbit | long ears, round tail |
| elephant | big ears, a trunk |
| bird | beak and wings |

~~~art
pic mode=silhouette apple butterfly dove horse matryoshka
A silhouette is a dark spot with a clear outline. Can you guess who is who?
~~~

## The blot game

1. Put a drop of gouache or ink in the middle of the paper.
2. Fold the paper in half and press. Open it: a **symmetrical** blot!
3. Or blow on a wet drop through a straw: it runs into branches.
4. Look at the blot. What does it look like? Add eyes, legs, a tail with a felt-tip pen.

~~~art
sketch mode=blot
The blot game: drop some paint, fold the paper and look: who appeared?
~~~

## Shadow theatre

With a lamp and your hands you can make silhouettes on the wall: a dog, a bird, a rabbit.

~~~art
pic puppets
~~~

~~~art
tasks
1. What is a silhouette?
2. How do we recognise a rabbit by its silhouette?
3. Look at the clouds today. What did you see in them?
4. Make a folded blot and turn it into a butterfly or a beetle.
5. Blow a drop through a straw and turn it into a tree.
6. Cut a black paper silhouette of a cat and stick it on yellow paper.
7. Make a hand shadow of a dog or a bird.
~~~

~~~art
hints
1. A dark shape without details, like a shadow. 2. By its long ears. 3. Answers differ. 4. Add antennae, eyes and dots on the wings. 5. The lines of paint are branches: add leaves. 6. Check the pointed ears and the long tail. 7. Practise in front of a lamp.
~~~`,
        hy: `## Ի՞նչ է բիծը

**Բիծը** որոշակի ձև ունեցող գունային հատված է՝ ջրափոս, ամպ, ստվեր։ Նկարիչները բծերի մեջ պատկերներ են տեսնում։ Նայի՛ր ամպերին. մեկը շան է նման, մյուսը՝ նավի։

## Ի՞նչ է ուրվագիծը (սիլուետը)

**Ուրվագիծը** մուգ ձև է առանց մանրամասների, ինչպես ստվերը պատին։ Միևնույն է՝ ճանաչում ենք՝ սրածայր ականջներով կատու, երկար ականջներով ճագար, թևերով թռչուն։

| Ուրվագիծ | Ինչով ենք ճանաչում |
|---|---|
| կատու | սրածայր ականջներ, երկար պոչ |
| ճագար | երկար ականջներ, կլոր պոչիկ |
| փիղ | մեծ ականջներ, կնճիթ |
| թռչուն | կտուց և թևեր |

~~~art
pic mode=silhouette apple butterfly dove horse matryoshka
Ուրվագիծը հստակ եզրով մուգ բիծ է։ Կգուշակե՞ս, թե ով ով է։
~~~

## Բծի խաղը

1. Թղթի մեջտեղում կաթեցրո՛ւ գուաշ կամ թանաք։
2. Թուղթը ծալի՛ր կիսով և սեղմի՛ր։ Բացի՛ր. **համաչափ** բիծ է։
3. Կամ ծղոտով փչի՛ր թաց կաթիլի վրա. այն ճյուղերով կտարածվի։
4. Նայի՛ր բծին։ Ինչի՞ է նման։ Ֆլոմաստերով ավելացրո՛ւ աչքեր, ոտքեր, պոչ։

~~~art
sketch mode=blot
Բծերի խաղ․ ներկ կաթեցրու՛, ծալի՛ր թուղթը և նայի՛ր՝ ո՞վ հայտնվեց։
~~~

## Ստվերների թատրոն

Լամպով և ձեռքերով կարող ես պատին ուրվագծեր ստանալ՝ շուն, թռչուն, ճագար։

~~~art
pic puppets
~~~

~~~art
tasks
1. Ի՞նչ է ուրվագիծը։
2. Ինչո՞վ ենք ճանաչում ճագարի ուրվագիծը։
3. Այսօր նայի՛ր ամպերին։ Ի՞նչ տեսար։
4. Ծալովի բիծ արա՛ և դարձրո՛ւ թիթեռ կամ բզեզ։
5. Ծղոտով փչի՛ր կաթիլը և դարձրո՛ւ ծառ։
6. Սև թղթից կտրի՛ր կատվի ուրվագիծ և սոսնձի՛ր դեղին թղթի վրա։
7. Ձեռքերով արա՛ շան կամ թռչնի ստվեր։
~~~

~~~art
hints
1. Մուգ ձև առանց մանրամասների, ինչպես ստվերը։ 2. Երկար ականջներով։ 3. Պատասխանները տարբեր են։ 4. Ավելացրո՛ւ բեղիկներ, աչքեր և կետեր թևերին։ 5. Ներկի գծերը ճյուղեր են. ավելացրո՛ւ տերևներ։ 6. Ստուգի՛ր սրածայր ականջները և երկար պոչը։ 7. Վարժվի՛ր լամպի առաջ։
~~~`,
        ru: `## Что такое пятно?

**Пятно** — это цветное место определённой формы: лужа, облако, тень. Художники видят в пятнах картинки. Посмотри на облака: одно похоже на собаку, другое — на корабль!

## Что такое силуэт?

**Силуэт** — тёмная форма без деталей, как тень на стене. И всё равно мы узнаём: кошку с острыми ушками, зайца с длинными ушами, птицу с крыльями.

| Силуэт | Как узнаём |
|---|---|
| кошка | острые ушки, длинный хвост |
| заяц | длинные уши, хвостик-шарик |
| слон | большие уши, хобот |
| птица | клюв и крылья |

~~~art
pic mode=silhouette apple butterfly dove horse matryoshka
Силуэт — тёмное пятно с ясным контуром. Угадаешь, кто есть кто?
~~~

## Игра с кляксой

1. Капни гуашь или тушь в середину листа.
2. Сложи лист пополам и прижми. Раскрой: **симметричная** клякса!
3. Или подуй на мокрую каплю через трубочку — она растечётся веточками (кляксография).
4. Посмотри на кляксу. На что похоже? Дорисуй фломастером глаза, лапки, хвост.

~~~art
sketch mode=blot
Игра в кляксы: капни краску, сложи лист и посмотри — кто получился?
~~~

## Театр теней

С лампой и руками можно делать силуэты на стене: собаку, птицу, зайца.

~~~art
pic puppets
~~~

~~~art
tasks
1. Что такое силуэт?
2. Как узнать зайца по силуэту?
3. Посмотри сегодня на облака. Что ты в них увидел?
4. Сделай кляксу со сгибом и преврати её в бабочку или жука.
5. Раздуй каплю через трубочку и преврати её в дерево.
6. Вырежи из чёрной бумаги силуэт кошки и наклей на жёлтый лист.
7. Покажи руками тень собаки или птицы.
~~~

~~~art
hints
1. Тёмная форма без деталей, как тень. 2. По длинным ушам. 3. Ответы разные. 4. Дорисуй усики, глазки и точки на крыльях. 5. Полоски краски — это ветки: дорисуй листья. 6. Проверь острые ушки и длинный хвост. 7. Потренируйся перед лампой.
~~~`,
      },
      [
        q(t("A silhouette is…", "Ուրվագիծը…", "Силуэт — это…"), [t("a dark shape without details", "մուգ ձև է առանց մանրամասների", "тёмная форма без деталей"), t("a bright pattern", "վառ նախշ է", "яркий узор"), t("a kind of brush", "վրձնի տեսակ է", "вид кисти")], 0),
        q(t("We know a rabbit's silhouette by its…", "Ճագարի ուրվագիծը ճանաչում ենք…", "Силуэт зайца узнаём по…"), [t("trunk", "կնճիթով", "хоботу"), t("beak", "կտուցով", "клюву"), t("long ears", "երկար ականջներով", "длинным ушам")], 2),
        q(t("What happens when you fold paper over a wet blot?", "Ի՞նչ է լինում, երբ թուղթը ծալում ենք թաց բծի վրա։", "Что будет, если сложить лист с мокрой кляксой?"), [t("the blot disappears", "բիծն անհետանում է", "клякса исчезнет"), t("you get a symmetrical blot", "ստացվում է համաչափ բիծ", "получится симметричная клякса"), t("the paper turns white", "թուղթը սպիտակում է", "бумага побелеет")], 1),
        q(t("An elephant's silhouette has…", "Փղի ուրվագիծն ունի…", "У силуэта слона есть…"), [t("a trunk", "կնճիթ", "хобот"), t("wings", "թևեր", "крылья"), t("a beak", "կտուց", "клюв")], 0),
        q(t("Blowing a drop through a straw makes it look like…", "Ծղոտով փչելիս կաթիլը նմանվում է…", "Если раздуть каплю через трубочку, она похожа на…"), [t("a square", "քառակուսու", "квадрат"), t("a circle", "շրջանի", "круг"), t("branches", "ճյուղերի", "веточки")], 2),
        q(t("A spot of colour can become…", "Գունային բիծը կարող է դառնալ…", "Цветное пятно может стать…"), [t("nothing", "ոչինչ", "ничем"), t("a picture, if we add details", "նկար, եթե մանրամասներ ավելացնենք", "картинкой, если дорисовать детали"), t("only a mistake", "միայն սխալ", "только ошибкой")], 1),
      ],
    ),
    lesson(
      "drawing-from-shapes",
      ["Drawing animals from simple shapes", "Կենդանիներ պարզ ձևերից", "Рисуем животных из простых форм"],
      {
        en: ["See the simple shapes inside an animal's body", "Draw a cat, a bird and a fish step by step from circles, ovals and triangles", "Add details and colour to bring the animal to life"],
        hy: ["Կենդանու մարմնում տեսնել պարզ ձևերը", "Քայլ առ քայլ նկարել կատու, թռչուն և ձուկ շրջաններից, օվալներից և եռանկյուններից", "Մանրամասներով և գույնով կենդանացնել կենդանուն"],
        ru: ["Видеть простые формы в теле животного", "Рисовать по шагам кошку, птицу и рыбу из кругов, овалов и треугольников", "Оживлять животное деталями и цветом"],
      },
      {
        en: `## Every animal is made of shapes

Look carefully: a cat's head is a **circle**, its body is an **oval**, its ears are **triangles**. Artists start with light simple shapes and add details later.

## A cat in five steps

1. Draw a **circle** for the head.
2. Under it, a bigger **oval** for the body.
3. Two small **triangles** on the head for ears.
4. A long curved line for the tail, small ovals for paws.
5. Add eyes, a nose, whiskers. Rub out extra lines and colour it.

~~~art
steps cat
~~~

## A bird

**Oval** body, **circle** head, **triangle** beak, a **half-oval** wing, two thin lines for legs.

~~~art
steps bird
~~~

## A fish

**Oval** body, **triangle** tail, small **triangles** for fins, **arcs** for scales.

| Animal | Head | Body | Extra |
|---|---|---|---|
| cat | circle | oval | triangle ears |
| bird | circle | oval | triangle beak |
| fish | — | oval | triangle tail |
| owl | circle | big oval | two big circle eyes |

~~~art
steps fish
~~~

~~~art
sketch
Now invent your own animal from circles, ovals and triangles.
~~~

~~~art
tasks
1. Which shape is a cat's body?
2. Which shape is a bird's beak?
3. Why do we draw the first shapes lightly?
4. Draw a cat in five steps.
5. Draw a fish and decorate it with scales.
6. Draw an owl from circles and ovals.
7. Invent your own animal from shapes and give it a name.
~~~

~~~art
hints
1. An oval. 2. A triangle. 3. So that we can rub out the extra lines later. 4. Check: circle head, oval body, triangle ears, tail, face. 5. Oval body, triangle tail, arcs for scales. 6. Big oval body, circle head, two big circle eyes, triangle beak. 7. Answers differ.
~~~`,
        hy: `## Ամեն կենդանի կազմված է ձևերից

Ուշադիր նայի՛ր. կատվի գլուխը **շրջան** է, մարմինը՝ **օվալ**, ականջները՝ **եռանկյուններ**։ Նկարիչները սկսում են թեթև, պարզ ձևերից, իսկ մանրամասները ավելացնում են հետո։

## Կատու հինգ քայլով

1. Գլխի համար գծի՛ր **շրջան**։
2. Նրա տակ՝ ավելի մեծ **օվալ** մարմնի համար։
3. Գլխին՝ երկու փոքր **եռանկյուն** ականջների համար։
4. Երկար կոր գիծ՝ պոչի համար, փոքր օվալներ՝ թաթերի։
5. Ավելացրո՛ւ աչքեր, քիթ, բեղեր։ Ջնջի՛ր ավելորդ գծերը և գունավորի՛ր։

~~~art
steps cat
~~~

## Թռչուն

**Օվալ** մարմին, **շրջան** գլուխ, **եռանկյուն** կտուց, **կիսաօվալ** թև, երկու բարակ գիծ՝ ոտքեր։

~~~art
steps bird
~~~

## Ձուկ

**Օվալ** մարմին, **եռանկյուն** պոչ, փոքր **եռանկյուններ**՝ լողակներ, **աղեղներ**՝ թեփուկներ։

| Կենդանի | Գլուխ | Մարմին | Լրացուցիչ |
|---|---|---|---|
| կատու | շրջան | օվալ | եռանկյուն ականջներ |
| թռչուն | շրջան | օվալ | եռանկյուն կտուց |
| ձուկ | — | օվալ | եռանկյուն պոչ |
| բու | շրջան | մեծ օվալ | երկու մեծ կլոր աչք |

~~~art
steps fish
~~~

~~~art
sketch
Հիմա հորինի՛ր քո կենդանին շրջաններից, օվալներից և եռանկյուններից։
~~~

~~~art
tasks
1. Ի՞նչ ձև ունի կատվի մարմինը։
2. Ի՞նչ ձև ունի թռչնի կտուցը։
3. Ինչո՞ւ ենք առաջին ձևերը գծում թեթև։
4. Նկարի՛ր կատու հինգ քայլով։
5. Նկարի՛ր ձուկ և զարդարի՛ր թեփուկներով։
6. Նկարի՛ր բու շրջաններից և օվալներից։
7. Ձևերից հորինի՛ր քո կենդանին և անուն տուր նրան։
~~~

~~~art
hints
1. Օվալ։ 2. Եռանկյուն։ 3. Որպեսզի հետո կարողանանք ջնջել ավելորդ գծերը։ 4. Ստուգի՛ր՝ շրջան գլուխ, օվալ մարմին, եռանկյուն ականջներ, պոչ, դեմք։ 5. Օվալ մարմին, եռանկյուն պոչ, աղեղներ՝ թեփուկներ։ 6. Մեծ օվալ մարմին, շրջան գլուխ, երկու մեծ կլոր աչք, եռանկյուն կտուց։ 7. Պատասխանները տարբեր են։
~~~`,
        ru: `## Каждое животное состоит из форм

Посмотри внимательно: голова кошки — **круг**, туловище — **овал**, уши — **треугольники**. Художники начинают с лёгких простых форм, а детали добавляют потом.

## Кошка за пять шагов

1. Нарисуй **круг** — голову.
2. Под ним — **овал** побольше, туловище.
3. На голове — два маленьких **треугольника**, уши.
4. Длинная изогнутая линия — хвост, маленькие овалы — лапки.
5. Добавь глаза, нос, усы. Сотри лишние линии и раскрась.

~~~art
steps cat
~~~

## Птица

**Овал** — туловище, **круг** — голова, **треугольник** — клюв, **пол-овала** — крыло, две тонкие линии — лапки.

~~~art
steps bird
~~~

## Рыба

**Овал** — туловище, **треугольник** — хвост, маленькие **треугольники** — плавники, **дуги** — чешуя.

| Животное | Голова | Туловище | Ещё |
|---|---|---|---|
| кошка | круг | овал | уши-треугольники |
| птица | круг | овал | клюв-треугольник |
| рыба | — | овал | хвост-треугольник |
| сова | круг | большой овал | два больших круглых глаза |

~~~art
steps fish
~~~

~~~art
sketch
А теперь придумай своего зверя из кругов, овалов и треугольников.
~~~

~~~art
tasks
1. Какой формы туловище кошки?
2. Какой формы клюв птицы?
3. Почему первые формы рисуем слегка?
4. Нарисуй кошку за пять шагов.
5. Нарисуй рыбу и укрась её чешуёй.
6. Нарисуй сову из кругов и овалов.
7. Придумай своё животное из форм и дай ему имя.
~~~

~~~art
hints
1. Овал. 2. Треугольник. 3. Чтобы потом можно было стереть лишние линии. 4. Проверь: голова-круг, туловище-овал, уши-треугольники, хвост, мордочка. 5. Туловище-овал, хвост-треугольник, чешуя-дуги. 6. Большой овал, круглая голова, два больших круглых глаза, клюв-треугольник. 7. Ответы разные.
~~~`,
      },
      [
        q(t("A cat's ears are drawn as…", "Կատվի ականջները գծում ենք…", "Уши кошки рисуем как…"), [t("circles", "շրջաններ", "круги"), t("squares", "քառակուսիներ", "квадраты"), t("triangles", "եռանկյուններ", "треугольники")], 2),
        q(t("A fish's body is…", "Ձկան մարմինը…", "Туловище рыбы —"), [t("an oval", "օվալ է", "овал"), t("a square", "քառակուսի է", "квадрат"), t("a line", "գիծ է", "линия")], 0),
        q(t("We draw the first shapes…", "Առաջին ձևերը գծում ենք…", "Первые формы рисуем…"), [t("very dark", "շատ մուգ", "очень тёмно"), t("lightly", "թեթև", "слегка"), t("with paint", "ներկով", "краской")], 1),
        q(t("An owl has two big…", "Բուն ունի երկու մեծ…", "У совы два больших…"), [t("round eyes", "կլոր աչք", "круглых глаза"), t("square ears", "քառակուսի ականջ", "квадратных уха"), t("tails", "պոչ", "хвоста")], 0),
        q(t("What do we do at the end?", "Ի՞նչ ենք անում վերջում։", "Что делаем в конце?"), [t("start again", "սկսում ենք նորից", "начинаем заново"), t("draw the head", "նկարում ենք գլուխը", "рисуем голову"), t("rub out extra lines and colour", "ջնջում ենք ավելորդ գծերը և գունավորում", "стираем лишнее и раскрашиваем")], 2),
        q(t("A bird's beak is a…", "Թռչնի կտուցը…", "Клюв птицы —"), [t("circle", "շրջան է", "круг"), t("triangle", "եռանկյուն է", "треугольник"), t("rectangle", "ուղղանկյուն է", "прямоугольник")], 1),
      ],
    ),
  ],
};
