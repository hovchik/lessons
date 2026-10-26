import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("Colour and mood", "Գույն և տրամադրություն", "Цвет и настроение"),
  summary: t(
    "Quiet and loud colours, light and dark, the colour of feelings, the sea in different moods, the sky at different times of day, rhythm of lines and spots.",
    "Հանգիստ և աղմկոտ գույներ, լույս և մութ, զգացմունքների գույնը, ծովը տարբեր տրամադրություններով, երկինքը օրվա տարբեր ժամերին, գծերի և բծերի ռիթմ։",
    "Тихие и звонкие цвета, светлое и тёмное, цвет чувств, море в разном настроении, небо в разное время дня, ритм линий и пятен.",
  ),
  lessons: [
    lesson(
      "quiet-loud-colours",
      ["Quiet and loud colours", "Հանգիստ և աղմկոտ գույներ", "Тихие и звонкие цвета"],
      {
        en: ["Tell bright («loud») colours from soft («quiet») ones", "Make a colour quieter by adding white, grey or a little of the opposite colour", "Paint the same flower in a loud and in a quiet way"],
        hy: ["Տարբերել վառ («աղմկոտ») գույները մեղմ («հանգիստ») գույներից", "Գույնը հանգստացնել՝ ավելացնելով սպիտակ, մոխրագույն կամ մի քիչ հակադիր գույն", "Նույն ծաղիկը նկարել աղմկոտ և հանգիստ գույներով"],
        ru: ["Отличать звонкие (яркие) цвета от тихих (приглушённых)", "Приглушать цвет белилами, серым или каплей противоположного цвета", "Написать один и тот же цветок звонко и тихо"],
      },
      {
        en: `## Colours can shout or whisper

| Loud colours 📢 | Quiet colours 🤫 |
|---|---|
| pure, bright, straight from the tube | mixed with white, grey or another colour |
| red, orange, lemon yellow, bright green | pink-grey, pale blue, olive, beige |
| a festival, a circus, a summer meadow | fog, a rainy day, early morning |

~~~art
palette loud pastel
~~~

## How to make a colour quieter

1. Add **white**: the colour becomes soft and gentle.
2. Add a little **grey** (black + white): the colour becomes calm and dull.
3. Add a drop of the **opposite colour**: red + a little green, blue + a little orange, yellow + a little violet.

| Colour | Its opposite |
|---|---|
| red | green |
| blue | orange |
| yellow | violet |

When opposite colours stand **next to each other**, both look louder! When they are **mixed**, they become quieter.

~~~art
mixer paints=red,blue,white
Make a loud colour quieter: start with red and add white drop by drop.
~~~

## Look at artists

**Martiros Saryan** often painted Armenia with loud, sunny colours: orange mountains, deep blue shadows. Paintings of a foggy autumn day usually use quiet, greyish colours.

## Task: two bouquets

Fold your paper in half. On the left, paint a bouquet in loud colours. On the right, paint the same bouquet in quiet colours. Which one is a party, and which is a dream?

~~~art
mood scene=still moods=loud,quiet
Two bouquets: the same vase in loud and in quiet colours.
~~~

~~~art
tasks
1. Name three loud colours.
2. How do you make blue quieter?
3. What is the opposite of red? Of yellow?
4. What happens when opposite colours stand side by side?
5. Paint a «scale» of five squares: from pure red to very quiet pink-grey.
6. Paint the two bouquets.
7. Which bouquet do you like more and why? Write two sentences.
~~~

~~~art
hints
1. For example, red, orange, lemon yellow. 2. Add white, grey or a little orange. 3. Green; violet. 4. Both look brighter. 5. Each square has a little more white and grey than the one before. 6. The left one is bright, the right one is soft. 7. Your own opinion.
~~~`,
        hy: `## Գույները կարող են գոռալ կամ շշնջալ

| Աղմկոտ գույներ 📢 | Հանգիստ գույներ 🤫 |
|---|---|
| մաքուր, վառ, անմիջապես տուփից | խառնված սպիտակի, մոխրագույնի կամ այլ գույնի հետ |
| կարմիր, նարնջագույն, կիտրոնի դեղին, վառ կանաչ | մոխրավարդագույն, գունատ երկնագույն, ձիթապտղագույն, բեժ |
| տոն, կրկես, ամառային մարգագետին | մառախուղ, անձրևոտ օր, վաղ առավոտ |

~~~art
palette loud pastel
~~~

## Ինչպես գույնը հանգստացնել

1. Ավելացրո՛ւ **սպիտակ**. գույնը դառնում է մեղմ և նուրբ։
2. Ավելացրո՛ւ մի քիչ **մոխրագույն** (սև + սպիտակ). գույնը դառնում է հանգիստ և խամրած։
3. Ավելացրո՛ւ մի կաթիլ **հակադիր գույն**. կարմիր + մի քիչ կանաչ, կապույտ + մի քիչ նարնջագույն, դեղին + մի քիչ մանուշակագույն։

| Գույն | Հակադիրը |
|---|---|
| կարմիր | կանաչ |
| կապույտ | նարնջագույն |
| դեղին | մանուշակագույն |

Երբ հակադիր գույները **կողք կողքի** են, երկուսն էլ ավելի աղմկոտ են թվում։ Երբ **խառնվում** են՝ հանգստանում են։

~~~art
mixer paints=red,blue,white
Բարձրաձայն գույնը մեղմացրու՛․ սկսի՛ր կարմիրից և կաթիլ առ կաթիլ ավելացրու սպիտակ։
~~~

## Նայենք նկարիչներին

**Մարտիրոս Սարյանը** հաճախ էր նկարում Հայաստանը աղմկոտ, արևոտ գույներով՝ նարնջագույն լեռներ, խոր կապույտ ստվերներ։ Մառախլապատ աշնանային օրվա նկարներում սովորաբար հանգիստ, մոխրավուն գույներ են։

## Առաջադրանք. երկու ծաղկեփունջ

Թուղթը կիսով ծալի՛ր։ Ձախում աղմկոտ գույներով ծաղկեփունջ նկարի՛ր։ Աջում նույն ծաղկեփունջը՝ հանգիստ գույներով։ Ո՞րն է տոն, ո՞րը՝ երազ։

~~~art
mood scene=still moods=loud,quiet
Երկու ծաղկեփունջ․ նույն ծաղկամանը բարձրաձայն և մեղմ գույներով։
~~~

~~~art
tasks
1. Անվանի՛ր երեք աղմկոտ գույն։
2. Ինչպե՞ս հանգստացնել կապույտը։
3. Ո՞րն է կարմիրի հակադիրը։ Դեղինի՞։
4. Ի՞նչ է լինում, երբ հակադիր գույները կողք կողքի են։
5. Նկարի՛ր հինգ քառակուսու «սանդղակ»՝ մաքուր կարմիրից մինչև շատ հանգիստ մոխրավարդագույն։
6. Նկարի՛ր երկու ծաղկեփունջը։
7. Ո՞ր ծաղկեփունջն է քեզ ավելի դուր գալիս և ինչու։ Գրի՛ր երկու նախադասություն։
~~~

~~~art
hints
1. Օրինակ՝ կարմիր, նարնջագույն, կիտրոնի դեղին։ 2. Ավելացնել սպիտակ, մոխրագույն կամ մի քիչ նարնջագույն։ 3. Կանաչը, մանուշակագույնը։ 4. Երկուսն էլ ավելի վառ են թվում։ 5. Ամեն քառակուսում մի քիչ ավելի շատ սպիտակ և մոխրագույն կա, քան նախորդում։ 6. Ձախը վառ է, աջը՝ մեղմ։ 7. Քո կարծիքը։
~~~`,
        ru: `## Цвета могут кричать или шептать

| Звонкие цвета 📢 | Тихие цвета 🤫 |
|---|---|
| чистые, яркие, прямо из баночки | смешанные с белилами, серым или другим цветом |
| красный, оранжевый, лимонный, ярко-зелёный | серо-розовый, бледно-голубой, оливковый, бежевый |
| праздник, цирк, летний луг | туман, дождливый день, раннее утро |

~~~art
palette loud pastel
~~~

## Как приглушить цвет

1. Добавь **белила**: цвет станет мягким и нежным.
2. Добавь немного **серого** (чёрный + белый): цвет станет спокойным, сдержанным.
3. Добавь каплю **противоположного цвета**: красный + немного зелёного, синий + немного оранжевого, жёлтый + немного фиолетового.

| Цвет | Противоположный |
|---|---|
| красный | зелёный |
| синий | оранжевый |
| жёлтый | фиолетовый |

Когда противоположные цвета стоят **рядом**, оба кажутся звонче! Когда их **смешивают**, они становятся тише.

~~~art
mixer paints=red,blue,white
Сделай звонкий цвет тише: начни с красного и по капле добавляй белила.
~~~

## Посмотрим на художников

**Мартирос Сарьян** часто писал Армению звонкими, солнечными красками: оранжевые горы, глубокие синие тени. А картины туманного осеннего дня обычно написаны тихими, сероватыми цветами.

## Задание: два букета

Согни лист пополам. Слева напиши букет звонкими красками. Справа — тот же букет тихими. Какой из них праздник, а какой — сон?

~~~art
mood scene=still moods=loud,quiet
Два букета: одна ваза в звонких и в тихих цветах.
~~~

~~~art
tasks
1. Назови три звонких цвета.
2. Как приглушить синий?
3. Какой цвет противоположен красному? Жёлтому?
4. Что происходит, когда противоположные цвета стоят рядом?
5. Сделай «лесенку» из пяти квадратов: от чистого красного до совсем тихого серо-розового.
6. Напиши два букета.
7. Какой букет тебе нравится больше и почему? Напиши два предложения.
~~~

~~~art
hints
1. Например, красный, оранжевый, лимонный. 2. Добавить белила, серый или немного оранжевого. 3. Зелёный; фиолетовый. 4. Оба кажутся ярче. 5. В каждом следующем квадрате немного больше белил и серого. 6. Левый яркий, правый мягкий. 7. Твоё мнение.
~~~`,
      },
      [
        q(t("Which colour is «loud»?", "Ո՞ր գույնն է «աղմկոտ»։", "Какой цвет «звонкий»?"), [t("pale grey-blue", "գունատ մոխրակապույտ", "бледный серо-голубой"), t("pure bright orange", "մաքուր վառ նարնջագույն", "чистый ярко-оранжевый"), t("beige", "բեժ", "бежевый")], 1),
        q(t("The opposite colour of red is…", "Կարմիրի հակադիր գույնն է…", "Противоположный красному цвет —"), [t("green", "կանաչ", "зелёный"), t("orange", "նարնջագույն", "оранжевый"), t("pink", "վարդագույն", "розовый")], 0),
        q(t("How can you make a colour quieter?", "Ինչպե՞ս կարելի է գույնը հանգստացնել։", "Как приглушить цвет?"), [t("use it straight from the jar", "օգտագործել անմիջապես տուփից", "брать прямо из баночки"), t("put its opposite next to it", "կողքին դնել հակադիրը", "поставить рядом противоположный"), t("add a little grey", "ավելացնել մի քիչ մոխրագույն", "добавить немного серого")], 2),
        q(t("Opposite colours side by side look…", "Կողք կողքի հակադիր գույները թվում են…", "Противоположные цвета рядом кажутся…"), [t("brighter", "ավելի վառ", "ярче"), t("grey", "մոխրագույն", "серыми"), t("invisible", "անտեսանելի", "невидимыми")], 0),
        q(t("A foggy day is usually painted with…", "Մառախլապատ օրը սովորաբար նկարում են…", "Туманный день обычно пишут…"), [t("loud colours", "աղմկոտ գույներով", "звонкими цветами"), t("quiet colours", "հանգիստ գույներով", "тихими цветами"), t("only red", "միայն կարմիրով", "только красным")], 1),
        q(t("The opposite of blue is…", "Կապույտի հակադիրն է…", "Противоположный синему —"), [t("violet", "մանուշակագույն", "фиолетовый"), t("green", "կանաչ", "зелёный"), t("orange", "նարնջագույն", "оранжевый")], 2),
      ],
    ),
    lesson(
      "light-dark",
      ["Light and dark: adding white and black", "Լույս և մութ․ սպիտակի և սևի ավելացում", "Светлое и тёмное: добавляем белый и чёрный"],
      {
        en: ["Make tints with white and shades with black", "Paint a scale from light to dark in one colour", "Use light and dark to show day and night, near and far"],
        hy: ["Սպիտակով ստանալ բաց երանգներ, սևով՝ մուգ", "Մեկ գույնով նկարել սանդղակ՝ բացից մուգ", "Լույսով և մութով ցույց տալ ցերեկ և գիշեր, մոտիկ և հեռու"],
        ru: ["Получать светлые оттенки с белилами и тёмные с чёрным", "Сделать растяжку одного цвета от светлого к тёмному", "Светлым и тёмным показывать день и ночь, близкое и далёкое"],
      },
      {
        en: `## One colour, many steps

| + white (lighter) | pure colour | + black (darker) |
|---|---|---|
| very pale blue · pale blue | blue | dark blue · almost black |
| cream · light yellow | yellow | olive · khaki |
| pink · light red | red | dark red · brown-red |

Careful with black: add it **drop by drop**. A little black changes a colour very much. Yellow with black turns greenish!

~~~art
tints
~~~

## What light and dark tell us

| Light colours | Dark colours |
|---|---|
| day, sun, joy | night, storm, mystery |
| far away (mountains in haze) | near (a tree in front) |
| air, lightness | weight, strength |

## Task: one-colour landscape

Choose one colour, for example blue. With white and black make five steps. Paint a landscape with only these five tones:

1. the sky: the lightest;
2. far mountains: light;
3. near hills: middle (pure colour);
4. trees in front: dark;
5. a few shadows: the darkest.

You will see that a picture can look deep and beautiful even in one colour!

~~~art
mood scene=landscape moods=mono,noon
A landscape in one colour: only light and dark blue. Is it still a picture? Yes!
~~~

~~~art
tasks
1. How do you make a colour lighter in gouache? Darker?
2. Why do we add black drop by drop?
3. What happens to yellow with black?
4. Are far mountains usually lighter or darker than near trees?
5. Make a five-step scale in red.
6. Paint the one-colour landscape.
7. Paint the same small house twice: once on a light day background and once on a dark night background.
~~~

~~~art
hints
1. Add white; add black. 2. Because a little black changes the colour a lot. 3. It turns greenish, olive. 4. Lighter. 5. From pale pink to dark red. 6. Far is light, near is dark. 7. On the night background, the windows can be light yellow.
~~~`,
        hy: `## Մեկ գույն, շատ աստիճաններ

| + սպիտակ (ավելի բաց) | մաքուր գույն | + սև (ավելի մուգ) |
|---|---|---|
| շատ գունատ կապույտ · երկնագույն | կապույտ | մուգ կապույտ · գրեթե սև |
| սերուցքագույն · բաց դեղին | դեղին | ձիթապտղագույն · խակի |
| վարդագույն · բաց կարմիր | կարմիր | մուգ կարմիր · շագանակակարմիր |

Սևի հետ զգույշ եղի՛ր. ավելացրո՛ւ **կաթիլ առ կաթիլ**։ Մի քիչ սևը շատ է փոխում գույնը։ Դեղինը սևի հետ կանաչավուն է դառնում։

~~~art
tints
~~~

## Ինչ են պատմում լույսը և մութը

| Բաց գույներ | Մուգ գույներ |
|---|---|
| ցերեկ, արև, ուրախություն | գիշեր, փոթորիկ, խորհրդավորություն |
| հեռու (լեռներ մշուշում) | մոտիկ (ծառ առջևում) |
| օդ, թեթևություն | ծանրություն, ուժ |

## Առաջադրանք. միագույն բնանկար

Ընտրի՛ր մեկ գույն, օրինակ՝ կապույտ։ Սպիտակով և սևով հինգ աստիճան ստացի՛ր։ Բնանկար նկարի՛ր միայն այդ հինգ երանգներով.

1. երկինք՝ ամենաբացը,
2. հեռավոր լեռներ՝ բաց,
3. մոտիկ բլուրներ՝ միջին (մաքուր գույն),
4. առջևի ծառեր՝ մուգ,
5. մի քանի ստվեր՝ ամենամուգը։

Կտեսնես, որ նկարը կարող է խոր և գեղեցիկ լինել նույնիսկ մեկ գույնով։

~~~art
mood scene=landscape moods=mono,noon
Բնանկար մեկ գույնով՝ միայն բաց և մուգ կապույտ։ Դա դեռ նկա՞ր է։ Այո՛։
~~~

~~~art
tasks
1. Գուաշում ինչպե՞ս բացացնել գույնը։ Մգացնե՞լ։
2. Ինչո՞ւ ենք սևն ավելացնում կաթիլ առ կաթիլ։
3. Ի՞նչ է լինում դեղինի հետ սև ավելացնելիս։
4. Հեռավոր լեռները սովորաբար ավելի բա՞ց են, թե՞ մուգ, քան մոտիկ ծառերը։
5. Կարմիրով հինգաստիճան սանդղակ արա՛։
6. Նկարի՛ր միագույն բնանկարը։
7. Նույն փոքրիկ տունը նկարի՛ր երկու անգամ՝ բաց ցերեկային ֆոնի և մուգ գիշերային ֆոնի վրա։
~~~

~~~art
hints
1. Ավելացնել սպիտակ, ավելացնել սև։ 2. Որովհետև մի քիչ սևը շատ է փոխում գույնը։ 3. Դառնում է կանաչավուն, ձիթապտղագույն։ 4. Ավելի բաց։ 5. Գունատ վարդագույնից մինչև մուգ կարմիր։ 6. Հեռուն բաց է, մոտիկը՝ մուգ։ 7. Գիշերային ֆոնի վրա պատուհանները կարող են բաց դեղին լինել։
~~~`,
        ru: `## Один цвет — много ступеней

| + белила (светлее) | чистый цвет | + чёрный (темнее) |
|---|---|---|
| очень бледно-голубой · голубой | синий | тёмно-синий · почти чёрный |
| кремовый · светло-жёлтый | жёлтый | оливковый · хаки |
| розовый · светло-красный | красный | тёмно-красный · коричнево-красный |

Осторожно с чёрным: добавляй **по капельке**. Немного чёрного сильно меняет цвет. Жёлтый с чёрным становится зеленоватым!

~~~art
tints
~~~

## О чём говорят светлое и тёмное

| Светлые цвета | Тёмные цвета |
|---|---|
| день, солнце, радость | ночь, буря, тайна |
| далеко (горы в дымке) | близко (дерево впереди) |
| воздух, лёгкость | тяжесть, сила |

## Задание: пейзаж в одном цвете

Выбери один цвет, например синий. С белилами и чёрным получи пять ступеней. Напиши пейзаж только этими пятью тонами:

1. небо — самое светлое;
2. дальние горы — светлые;
3. ближние холмы — средние (чистый цвет);
4. деревья впереди — тёмные;
5. несколько теней — самые тёмные.

Увидишь: картина может быть глубокой и красивой даже в одном цвете!

~~~art
mood scene=landscape moods=mono,noon
Пейзаж одним цветом: только светлый и тёмный синий. Это всё ещё картина? Да!
~~~

~~~art
tasks
1. Как в гуаши сделать цвет светлее? Темнее?
2. Почему чёрный добавляют по капельке?
3. Что происходит с жёлтым, если добавить чёрный?
4. Дальние горы обычно светлее или темнее ближних деревьев?
5. Сделай растяжку красного из пяти ступеней.
6. Напиши пейзаж в одном цвете.
7. Нарисуй один и тот же домик дважды: на светлом дневном фоне и на тёмном ночном.
~~~

~~~art
hints
1. Добавить белила; добавить чёрный. 2. Потому что немного чёрного сильно меняет цвет. 3. Он становится зеленоватым, оливковым. 4. Светлее. 5. От бледно-розового до тёмно-красного. 6. Далёкое светлое, близкое тёмное. 7. На ночном фоне окна могут быть светло-жёлтыми.
~~~`,
      },
      [
        q(t("To make a colour darker, add…", "Գույնը մգացնելու համար ավելացնում ենք…", "Чтобы сделать цвет темнее, добавляют…"), [t("white", "սպիտակ", "белила"), t("black, drop by drop", "սև՝ կաթիլ առ կաթիլ", "чёрный по капельке"), t("water", "ջուր", "воду")], 1),
        q(t("Yellow + a little black becomes…", "Դեղին + մի քիչ սև դառնում է…", "Жёлтый + немного чёрного становится…"), [t("greenish, olive", "կանաչավուն, ձիթապտղագույն", "зеленоватым, оливковым"), t("pink", "վարդագույն", "розовым"), t("bright orange", "վառ նարնջագույն", "ярко-оранжевым")], 0),
        q(t("In a landscape, far mountains are usually…", "Բնանկարում հեռավոր լեռները սովորաբար…", "В пейзаже дальние горы обычно…"), [t("darker than near trees", "ավելի մուգ են, քան մոտիկ ծառերը", "темнее ближних деревьев"), t("black", "սև են", "чёрные"), t("lighter than near trees", "ավելի բաց են, քան մոտիկ ծառերը", "светлее ближних деревьев")], 2),
        q(t("Dark colours often show…", "Մուգ գույները հաճախ ցույց են տալիս…", "Тёмные цвета часто передают…"), [t("night and mystery", "գիշեր և խորհրդավորություն", "ночь и тайну"), t("a sunny morning", "արևոտ առավոտ", "солнечное утро"), t("lightness", "թեթևություն", "лёгкость")], 0),
        q(t("Blue + white =", "Կապույտ + սպիտակ =", "Синий + белила ="), [t("dark blue", "մուգ կապույտ", "тёмно-синий"), t("light blue", "երկնագույն", "голубой"), t("green", "կանաչ", "зелёный")], 1),
        q(t("In a one-colour landscape, the sky is…", "Միագույն բնանկարում երկինքը…", "В пейзаже в одном цвете небо —"), [t("the darkest", "ամենամուգն է", "самое тёмное"), t("a different colour", "ուրիշ գույն է", "другого цвета"), t("the lightest", "ամենաբացն է", "самое светлое")], 2),
      ],
    ),
    lesson(
      "colour-of-feelings",
      ["The colour of feelings: joy and sadness", "Զգացմունքների գույնը․ ուրախություն և տխրություն", "Цвет чувств: радость и грусть"],
      {
        en: ["Notice that colours can express feelings", "Choose colours, lines and shapes for joy, sadness, anger and calm", "Paint an abstract picture of a feeling and explain it"],
        hy: ["Նկատել, որ գույները կարող են զգացմունքներ արտահայտել", "Ընտրել գույներ, գծեր և ձևեր ուրախության, տխրության, բարկության և հանգստության համար", "Նկարել զգացմունքի վերացական նկար և բացատրել այն"],
        ru: ["Замечать, что цвет может выражать чувства", "Подбирать цвета, линии и формы для радости, грусти, гнева и покоя", "Написать абстрактную картину чувства и объяснить её"],
      },
      {
        en: `## Feelings in colour

| Feeling | Colours | Lines and shapes |
|---|---|---|
| joy 😄 | yellow, orange, bright pink, light green | round, jumping, spirals |
| sadness 😢 | grey-blue, violet, dull brown | drooping, falling down |
| anger 😠 | red, black, dark orange | sharp zigzags, spikes |
| calm 😌 | soft blue, pale green, white | long horizontal lines, waves |
| fear 😨 | dark violet, black with sharp yellow | crooked, broken lines |

These are not strict rules: every person can feel colours a little differently. That's what makes art interesting!

~~~art
mood scene=abstract moods=joy,sad,loud,quiet
No objects, only colours and shapes. Which one is joy? Which one is sadness?
~~~

## Abstract art

A picture doesn't always show a thing. **Abstract** art shows only colours, lines and shapes. The Russian artist **Wassily Kandinsky** was one of the first abstract painters. He believed colours sound like music: yellow like a trumpet, blue like a cello.

~~~art
pic genre-abstract
~~~

## Task: two feelings

Fold your paper in half. On one side, paint **joy**. On the other, paint **sadness**. Don't draw people or faces! Only colours, lines and spots. Then show your work to a friend: can they guess which side is which?

~~~art
sketch guide=axis
Paint two feelings without drawing any objects: joy on one half, sadness on the other.
~~~

~~~art
tasks
1. Which colours would you use for joy?
2. What kind of lines show anger?
3. What is abstract art?
4. Which artist thought colours sound like music?
5. Draw three small squares: calm, anger, fear. Use only lines and colours.
6. Paint «joy» and «sadness» on two halves of a sheet.
7. Listen to a short piece of music and paint the feeling it gives you.
~~~

~~~art
hints
1. For example, yellow, orange, bright pink. 2. Sharp zigzags and spikes. 3. Art that shows only colours, lines and shapes, not things. 4. Wassily Kandinsky. 5. Calm: soft blue waves; anger: red and black zigzags; fear: crooked dark lines. 6. A friend should be able to guess each feeling. 7. Your own picture.
~~~`,
        hy: `## Զգացմունքները գույնով

| Զգացմունք | Գույներ | Գծեր և ձևեր |
|---|---|---|
| ուրախություն 😄 | դեղին, նարնջագույն, վառ վարդագույն, բաց կանաչ | կլոր, ցատկոտող, պարույրներ |
| տխրություն 😢 | մոխրակապույտ, մանուշակագույն, խամրած դարչնագույն | կախ ընկած, դեպի ներքև |
| բարկություն 😠 | կարմիր, սև, մուգ նարնջագույն | սուր զիգզագներ, փշեր |
| հանգստություն 😌 | մեղմ կապույտ, գունատ կանաչ, սպիտակ | երկար հորիզոնական գծեր, ալիքներ |
| վախ 😨 | մուգ մանուշակագույն, սև՝ սուր դեղինով | ծուռ, կոտրված գծեր |

Սրանք խիստ կանոններ չեն. ամեն մարդ գույները կարող է մի քիչ այլ կերպ զգալ։ Դա է արվեստը հետաքրքիր դարձնում։

~~~art
mood scene=abstract moods=joy,sad,loud,quiet
Ոչ մի առարկա, միայն գույներ և ձևեր։ Ո՞րն է ուրախությունը, ո՞րը՝ տխրությունը։
~~~

## Վերացական արվեստ

Նկարը միշտ չէ, որ որևէ առարկա է պատկերում։ **Վերացական** (աբստրակտ) արվեստը ցույց է տալիս միայն գույներ, գծեր և ձևեր։ Ռուս նկարիչ **Վասիլի Կանդինսկին** առաջին աբստրակտ նկարիչներից էր։ Նա կարծում էր, որ գույները հնչում են երաժշտության պես՝ դեղինը՝ շեփորի, կապույտը՝ թավջութակի։

~~~art
pic genre-abstract
~~~

## Առաջադրանք. երկու զգացմունք

Թուղթը կիսով ծալի՛ր։ Մի կողմում նկարի՛ր **ուրախություն**, մյուսում՝ **տխրություն**։ Մարդիկ կամ դեմքեր մի՛ նկարիր, միայն գույներ, գծեր և բծեր։ Հետո ցույց տուր ընկերոջդ. կգուշակի՞, թե որ կողմը որն է։

~~~art
sketch guide=axis
Նկարի՛ր երկու զգացմունք առանց առարկաների՝ ուրախությունը մի կեսում, տխրությունը՝ մյուսում։
~~~

~~~art
tasks
1. Ո՞ր գույներն ես կօգտագործես ուրախության համար։
2. Ինչպիսի՞ գծեր են բարկություն արտահայտում։
3. Ի՞նչ է վերացական արվեստը։
4. Ո՞ր նկարիչն էր կարծում, որ գույները հնչում են երաժշտության պես։
5. Նկարի՛ր երեք փոքրիկ քառակուսի՝ հանգստություն, բարկություն, վախ։ Միայն գծեր և գույներ։
6. Թերթի երկու կեսերին նկարի՛ր «ուրախություն» և «տխրություն»։
7. Լսի՛ր մի կարճ երաժշտություն և նկարի՛ր այն զգացումը, որ նա տալիս է քեզ։
~~~

~~~art
hints
1. Օրինակ՝ դեղին, նարնջագույն, վառ վարդագույն։ 2. Սուր զիգզագներ և փշեր։ 3. Արվեստ, որը ցույց է տալիս միայն գույներ, գծեր և ձևեր, ոչ թե առարկաներ։ 4. Վասիլի Կանդինսկին։ 5. Հանգստություն՝ մեղմ կապույտ ալիքներ, բարկություն՝ կարմիր և սև զիգզագներ, վախ՝ ծուռ մուգ գծեր։ 6. Ընկերդ պետք է կարողանա գուշակել զգացմունքները։ 7. Քո նկարը։
~~~`,
        ru: `## Чувства в цвете

| Чувство | Цвета | Линии и формы |
|---|---|---|
| радость 😄 | жёлтый, оранжевый, ярко-розовый, светло-зелёный | круглые, прыгающие, спирали |
| грусть 😢 | серо-голубой, фиолетовый, тусклый коричневый | поникшие, падающие вниз |
| гнев 😠 | красный, чёрный, тёмно-оранжевый | острые зигзаги, шипы |
| покой 😌 | мягкий голубой, бледно-зелёный, белый | длинные горизонтальные линии, волны |
| страх 😨 | тёмно-фиолетовый, чёрный с резким жёлтым | кривые, ломаные линии |

Это не строгие правила: каждый человек может чувствовать цвета немного по-своему. Этим искусство и интересно!

~~~art
mood scene=abstract moods=joy,sad,loud,quiet
Никаких предметов, только цвета и формы. Где радость? Где грусть?
~~~

## Абстрактное искусство

Картина не всегда изображает предмет. **Абстрактное** искусство показывает только цвета, линии и формы. Русский художник **Василий Кандинский** был одним из первых художников-абстракционистов. Он считал, что цвета звучат как музыка: жёлтый — как труба, синий — как виолончель.

~~~art
pic genre-abstract
~~~

## Задание: два чувства

Согни лист пополам. На одной половине напиши **радость**, на другой — **грусть**. Не рисуй людей и лица! Только цвета, линии и пятна. Потом покажи другу: угадает ли он, где что?

~~~art
sketch guide=axis
Нарисуй два чувства без предметов: радость на одной половине, грусть на другой.
~~~

~~~art
tasks
1. Какие цвета ты выберешь для радости?
2. Какие линии выражают гнев?
3. Что такое абстрактное искусство?
4. Какой художник считал, что цвета звучат как музыка?
5. Нарисуй три маленьких квадрата: покой, гнев, страх. Только линиями и цветом.
6. Напиши «радость» и «грусть» на двух половинах листа.
7. Послушай короткую музыку и нарисуй чувство, которое она вызывает.
~~~

~~~art
hints
1. Например, жёлтый, оранжевый, ярко-розовый. 2. Острые зигзаги и шипы. 3. Искусство, которое показывает только цвета, линии и формы, а не предметы. 4. Василий Кандинский. 5. Покой — мягкие голубые волны; гнев — красные и чёрные зигзаги; страх — кривые тёмные линии. 6. Друг должен угадать каждое чувство. 7. Твой рисунок.
~~~`,
      },
      [
        q(t("Which colours suit joy best?", "Ո՞ր գույներն են ամենից շատ համապատասխանում ուրախությանը։", "Какие цвета лучше всего подходят радости?"), [t("grey and dark violet", "մոխրագույն և մուգ մանուշակագույն", "серый и тёмно-фиолетовый"), t("yellow and orange", "դեղին և նարնջագույն", "жёлтый и оранжевый"), t("black and brown", "սև և դարչնագույն", "чёрный и коричневый")], 1),
        q(t("Sharp zigzag lines usually show…", "Սուր զիգզագ գծերը սովորաբար արտահայտում են…", "Острые зигзаги обычно выражают…"), [t("anger", "բարկություն", "гнев"), t("calm", "հանգստություն", "покой"), t("sleep", "քուն", "сон")], 0),
        q(t("Abstract art shows…", "Վերացական արվեստը ցույց է տալիս…", "Абстрактное искусство показывает…"), [t("only portraits", "միայն դիմանկարներ", "только портреты"), t("photos", "լուսանկարներ", "фотографии"), t("colours, lines and shapes", "գույներ, գծեր և ձևեր", "цвета, линии и формы")], 2),
        q(t("Who was one of the first abstract painters?", "Ո՞վ էր առաջին աբստրակտ նկարիչներից մեկը։", "Кто был одним из первых абстракционистов?"), [t("Wassily Kandinsky", "Վասիլի Կանդինսկին", "Василий Кандинский"), t("Ivan Shishkin", "Իվան Շիշկինը", "Иван Шишкин"), t("Ivan Aivazovsky", "Իվան Այվազովսկին", "Иван Айвазовский")], 0),
        q(t("Long horizontal lines and soft blue feel…", "Երկար հորիզոնական գծերն ու մեղմ կապույտը թողնում են… տպավորություն", "Длинные горизонтальные линии и мягкий голубой передают…"), [t("angry", "բարկության", "гнев"), t("calm", "հանգստության", "покой"), t("scary", "վախի", "страх")], 1),
        q(t("Do all people feel colours exactly the same?", "Բոլոր մարդիկ գույները նույնությամբ զգո՞ւմ են։", "Все ли люди чувствуют цвета одинаково?"), [t("Yes, always", "Այո, միշտ", "Да, всегда"), t("Only adults do", "Միայն մեծահասակները", "Только взрослые"), t("No, a little differently", "Ոչ, մի քիչ տարբեր", "Нет, немного по-разному")], 2),
      ],
    ),
    lesson(
      "sea-moods",
      ["The sea in different moods", "Ծովը տարբեր տրամադրություններով", "Море в разном настроении"],
      {
        en: ["Learn about Ivan Aivazovsky, the great painter of the sea", "Show a calm sea and a stormy sea with colour and lines", "Paint two seas: «calm» and «storm»"],
        hy: ["Ծանոթանալ ծովանկարիչ Հովհաննես Այվազովսկու արվեստին", "Գույնով և գծերով ցույց տալ հանդարտ և փոթորկոտ ծովը", "Նկարել երկու ծով՝ «խաղաղություն» և «փոթորիկ»"],
        ru: ["Познакомиться с творчеством великого мариниста Ивана Айвазовского", "Передавать цветом и линиями спокойное и бурное море", "Написать два моря: «штиль» и «шторм»"],
      },
      {
        en: `## Marine painting

A painting of the sea is called a **marine painting** (seascape). An artist who paints the sea is a **marine painter**.

~~~art
pic genre-marine
~~~

## Ivan Aivazovsky

**Ivan (Hovhannes) Aivazovsky** (1817–1900) was born into an Armenian family in Feodosia, a town by the Black Sea in Crimea. He painted the sea all his life, about **6000** pictures! His most famous painting, **«The Ninth Wave»** (1850), shows people on a broken mast after a storm, with a huge wave and the rising sun shining through it. It is in the Russian Museum in St Petersburg. Paintings by Aivazovsky are also in the National Gallery of Armenia in Yerevan.

He painted from memory: he watched the sea for a long time and then painted it in his studio.

~~~art
palette aivazovsky
~~~

## Calm and storm

| | Calm sea 🌅 | Stormy sea 🌊 |
|---|---|---|
| colours | soft blue, pink, gold, light green | dark blue, grey-green, black, white foam |
| lines | long, flat, horizontal | high waves, curls, diagonals |
| sky | clear, light | heavy dark clouds, sometimes lightning |
| feeling | peace, quiet | power, danger, struggle |

~~~art
mood scene=sea moods=calm,storm,evening,night
~~~

## How to paint a wave

1. Draw the wave as a big curve leaning forward.
2. Paint the water dark at the bottom and lighter and greener at the top where light shines through.
3. Add white **foam** on the crest with a dry brush.

~~~art
steps wave
~~~

~~~art
tasks
1. What is a marine painting?
2. Where was Aivazovsky born?
3. What is his most famous painting called?
4. What lines show a calm sea?
5. Which colours would you use for a storm?
6. Paint two small seas on one sheet: calm and storm.
7. Add a little boat to each sea. How does the boat «feel» in each picture?
~~~

~~~art
hints
1. A painting of the sea. 2. In Feodosia, on the Black Sea. 3. «The Ninth Wave». 4. Long, flat, horizontal lines. 5. Dark blue, grey-green, black and white foam. 6. The calm sea is light and flat; the storm is dark with high waves. 7. In the calm sea the boat is peaceful; in the storm it is in danger.
~~~`,
        hy: `## Ծովանկար

Ծովի նկարը կոչվում է **ծովանկար** (մարինա)։ Ծով նկարող նկարիչը **ծովանկարիչ** է։

~~~art
pic genre-marine
~~~

## Հովհաննես Այվազովսկի

**Հովհաննես (Իվան) Այվազովսկին** (1817–1900) ծնվել է հայկական ընտանիքում, Ղրիմի Ֆեոդոսիա քաղաքում՝ Սև ծովի ափին։ Նա ամբողջ կյանքում ծով է նկարել՝ մոտ **6000** կտավ։ Նրա ամենահայտնի նկարը՝ **«Իններորդ ալիքը»** (1850), պատկերում է մարդկանց փոթորկից հետո կոտրված կայմի վրա, հսկա ալիքը և ծագող արևը, որի լույսը թափանցում է ալիքի միջով։ Այն գտնվում է Սանկտ Պետերբուրգի Ռուսական թանգարանում։ Այվազովսկու նկարներ կան նաև Երևանում՝ Հայաստանի ազգային պատկերասրահում։

Նա նկարում էր հիշողությամբ. երկար դիտում էր ծովը, հետո նկարում արվեստանոցում։

~~~art
palette aivazovsky
~~~

## Խաղաղ և փոթորկոտ

| | Խաղաղ ծով 🌅 | Փոթորկոտ ծով 🌊 |
|---|---|---|
| գույներ | մեղմ կապույտ, վարդագույն, ոսկեգույն, բաց կանաչ | մուգ կապույտ, մոխրականաչ, սև, սպիտակ փրփուր |
| գծեր | երկար, հարթ, հորիզոնական | բարձր ալիքներ, գանգուրներ, թեք գծեր |
| երկինք | պարզ, բաց | ծանր մուգ ամպեր, երբեմն կայծակ |
| զգացում | խաղաղություն, լռություն | ուժ, վտանգ, պայքար |

~~~art
mood scene=sea moods=calm,storm,evening,night
~~~

## Ինչպես նկարել ալիք

1. Ալիքը նկարի՛ր որպես առաջ թեքված մեծ կոր։
2. Ջուրը ներքևում մուգ ներկի՛ր, իսկ վերևում՝ ավելի բաց և կանաչավուն, որտեղ լույսն է անցնում։
3. Կատարին չոր վրձնով սպիտակ **փրփուր** ավելացրո՛ւ։

~~~art
steps wave
~~~

~~~art
tasks
1. Ի՞նչ է ծովանկարը։
2. Որտե՞ղ է ծնվել Այվազովսկին։
3. Ինչպե՞ս է կոչվում նրա ամենահայտնի նկարը։
4. Ո՞ր գծերն են ցույց տալիս խաղաղ ծովը։
5. Ո՞ր գույները կօգտագործես փոթորկի համար։
6. Մեկ թերթի վրա նկարի՛ր երկու փոքր ծով՝ խաղաղ և փոթորկոտ։
7. Ամեն ծովում մի փոքրիկ նավակ ավելացրո՛ւ։ Ինչպե՞ս է նավակը «զգում» իրեն ամեն նկարում։
~~~

~~~art
hints
1. Ծովի նկար։ 2. Ֆեոդոսիայում՝ Սև ծովի ափին։ 3. «Իններորդ ալիքը»։ 4. Երկար, հարթ, հորիզոնական գծեր։ 5. Մուգ կապույտ, մոխրականաչ, սև և սպիտակ փրփուր։ 6. Խաղաղ ծովը բաց է և հարթ, փոթորկոտը՝ մուգ, բարձր ալիքներով։ 7. Խաղաղ ծովում նավակը հանգիստ է, փոթորկում՝ վտանգի մեջ։
~~~`,
        ru: `## Марина

Картина с изображением моря называется **мариной**. Художник, который пишет море, — **маринист**.

~~~art
pic genre-marine
~~~

## Иван Айвазовский

**Иван (Ованес) Айвазовский** (1817–1900) родился в армянской семье в Феодосии, городе на берегу Чёрного моря в Крыму. Всю жизнь он писал море — около **6000** картин! Его самая знаменитая картина **«Девятый вал»** (1850) изображает людей на обломке мачты после бури, огромную волну и восходящее солнце, свет которого пробивается сквозь неё. Она хранится в Русском музее в Санкт-Петербурге. Картины Айвазовского есть и в Национальной галерее Армении в Ереване.

Он писал по памяти: долго наблюдал море, а потом писал его в мастерской.

~~~art
palette aivazovsky
~~~

## Штиль и шторм

| | Спокойное море 🌅 | Бурное море 🌊 |
|---|---|---|
| цвета | мягкий голубой, розовый, золотистый, светло-зелёный | тёмно-синий, серо-зелёный, чёрный, белая пена |
| линии | длинные, ровные, горизонтальные | высокие волны, завитки, диагонали |
| небо | ясное, светлое | тяжёлые тёмные тучи, иногда молния |
| чувство | покой, тишина | сила, опасность, борьба |

~~~art
mood scene=sea moods=calm,storm,evening,night
~~~

## Как написать волну

1. Нарисуй волну большой дугой, наклонённой вперёд.
2. Внизу пиши воду тёмной, а вверху светлее и зеленее, где её просвечивает свет.
3. На гребне добавь белую **пену** полусухой кистью.

~~~art
steps wave
~~~

~~~art
tasks
1. Что такое марина?
2. Где родился Айвазовский?
3. Как называется его самая известная картина?
4. Какие линии передают спокойное море?
5. Какие цвета ты выберешь для шторма?
6. Напиши на одном листе два маленьких моря: штиль и шторм.
7. Добавь в каждое море лодочку. Как «чувствует себя» лодка на каждой картине?
~~~

~~~art
hints
1. Картина с изображением моря. 2. В Феодосии, на Чёрном море. 3. «Девятый вал». 4. Длинные, ровные, горизонтальные линии. 5. Тёмно-синий, серо-зелёный, чёрный и белая пена. 6. Штиль светлый и ровный, шторм тёмный, с высокими волнами. 7. В штиль лодке спокойно, в шторм она в опасности.
~~~`,
      },
      [
        q(t("A painting of the sea is called…", "Ծովի նկարը կոչվում է…", "Картина с морем называется…"), [t("a portrait", "դիմանկար", "портрет"), t("a marine painting", "ծովանկար", "марина"), t("a still life", "նատյուրմորտ", "натюрморт")], 1),
        q(t("Aivazovsky was born in…", "Այվազովսկին ծնվել է…", "Айвазовский родился в…"), [t("Feodosia", "Ֆեոդոսիայում", "Феодосии"), t("Yerevan", "Երևանում", "Ереване"), t("Moscow", "Մոսկվայում", "Москве")], 0),
        q(t("His most famous painting is…", "Նրա ամենահայտնի նկարն է…", "Его самая известная картина —"), [t("«Morning in a Pine Forest»", "«Առավոտը սոճու անտառում»", "«Утро в сосновом лесу»"), t("«Golden Autumn»", "«Ոսկե աշուն»", "«Золотая осень»"), t("«The Ninth Wave»", "«Իններորդ ալիքը»", "«Девятый вал»")], 2),
        q(t("A calm sea has…", "Խաղաղ ծովն ունի…", "У спокойного моря…"), [t("long flat lines", "երկար հարթ գծեր", "длинные ровные линии"), t("high curling waves", "բարձր գանգուր ալիքներ", "высокие завитые волны"), t("lightning", "կայծակ", "молния")], 0),
        q(t("How did Aivazovsky usually paint the sea?", "Ինչպե՞ս էր Այվազովսկին սովորաբար նկարում ծովը։", "Как Айвазовский обычно писал море?"), [t("from photos", "լուսանկարներից", "по фотографиям"), t("from memory", "հիշողությամբ", "по памяти"), t("standing in the water", "ջրի մեջ կանգնած", "стоя в воде")], 1),
        q(t("The foam on a wave is painted…", "Ալիքի փրփուրը նկարում ենք…", "Пену на волне пишут…"), [t("black", "սև", "чёрной"), t("red", "կարմիր", "красной"), t("white, on the crest", "սպիտակ՝ կատարին", "белой, на гребне")], 2),
      ],
    ),
    lesson(
      "sky-times-of-day",
      ["The sky in the morning, at noon and in the evening", "Երկինքը առավոտյան, կեսօրին և երեկոյան", "Небо утром, днём и вечером"],
      {
        en: ["Observe how the colour of the sky changes during the day", "Paint smooth colour transitions from the horizon to the top", "Paint one place at three times of day"],
        hy: ["Դիտել, թե ինչպես է օրվա ընթացքում փոխվում երկնքի գույնը", "Նկարել գույնի սահուն անցումներ՝ հորիզոնից դեպի վեր", "Նկարել նույն վայրը օրվա երեք ժամին"],
        ru: ["Наблюдать, как меняется цвет неба в течение дня", "Писать плавные цветовые переходы от горизонта вверх", "Написать одно место в три времени дня"],
      },
      {
        en: `## The sky is never just blue

| Time | Sky near the horizon | Sky at the top | Shadows |
|---|---|---|---|
| early morning 🌄 | pale yellow, pink | soft light blue | long, blue |
| noon ☀️ | light blue, almost white | bright blue | short, dark |
| sunset 🌇 | orange, red, gold | violet, deep blue | very long |
| night 🌙 | dark blue | almost black, with stars | — |

The **horizon** is the line where the sky meets the earth or the sea. Near the horizon the sky is usually **lighter** than at the top.

~~~art
mood scene=landscape moods=morning,noon,evening,night
~~~

## A smooth transition

1. Wet the top part of the paper (watercolour) or prepare two gouache colours.
2. Start at the horizon with the lightest colour.
3. Move up with wide horizontal strokes, adding the next colour little by little.
4. Don't wait: colours should mix while they are wet.

## Artists and the time of day

The French painter **Claude Monet** painted the same haystacks and the same cathedral many times, in the morning, at noon and in the evening, to show how light changes colour. Armenian painters loved the evening light on **Mount Ararat**, when the snowy top turns pink.

## Task: three windows

Divide the paper into three «windows». Paint the same view in each: hills, a tree and a house. Window 1: morning. Window 2: noon. Window 3: sunset. Change only the colours of the sky, the light and the shadows.

~~~art
sketch guide=thirds
Three windows: paint the morning sky, the noon sky and the evening sky side by side.
~~~

~~~art
tasks
1. What is the horizon?
2. Where is the sky usually lighter?
3. What colours does the sky have at sunset?
4. When are shadows shortest?
5. Which artist painted the same haystacks at different times of day?
6. Paint a smooth transition from yellow to blue.
7. Paint the three windows.
~~~

~~~art
hints
1. The line where the sky meets the earth or sea. 2. Near the horizon. 3. Orange, red, gold near the horizon and violet above. 4. At noon. 5. Claude Monet. 6. There should be no sharp line between the colours. 7. The view is the same; only the light and colours change.
~~~`,
        hy: `## Երկինքը երբեք պարզապես կապույտ չէ

| Ժամ | Երկինքը հորիզոնի մոտ | Երկինքը վերևում | Ստվերներ |
|---|---|---|---|
| վաղ առավոտ 🌄 | գունատ դեղին, վարդագույն | մեղմ երկնագույն | երկար, կապտավուն |
| կեսօր ☀️ | բաց կապույտ, գրեթե սպիտակ | վառ կապույտ | կարճ, մուգ |
| մայրամուտ 🌇 | նարնջագույն, կարմիր, ոսկեգույն | մանուշակագույն, խոր կապույտ | շատ երկար |
| գիշեր 🌙 | մուգ կապույտ | գրեթե սև, աստղերով | — |

**Հորիզոնը** այն գիծն է, որտեղ երկինքը հանդիպում է երկրին կամ ծովին։ Հորիզոնի մոտ երկինքը սովորաբար **ավելի բաց** է, քան վերևում։

~~~art
mood scene=landscape moods=morning,noon,evening,night
~~~

## Սահուն անցում

1. Թրջի՛ր թղթի վերին մասը (ջրաներկ) կամ պատրաստի՛ր գուաշի երկու գույն։
2. Սկսի՛ր հորիզոնից՝ ամենաբաց գույնով։
3. Լայն հորիզոնական շարժումներով բարձրացի՛ր վեր՝ քիչ-քիչ ավելացնելով հաջորդ գույնը։
4. Մի՛ սպասիր. գույները պետք է խառնվեն, քանի դեռ թաց են։

## Նկարիչները և օրվա ժամը

Ֆրանսիացի նկարիչ **Կլոդ Մոնեն** միևնույն խոտի դեզերը և միևնույն տաճարը նկարել է շատ անգամ՝ առավոտյան, կեսօրին և երեկոյան, որ ցույց տա, թե ինչպես է լույսը փոխում գույնը։ Հայ նկարիչները սիրում էին **Արարատի** երեկոյան լույսը, երբ ձյունածածկ գագաթը վարդագույն է դառնում։

## Առաջադրանք. երեք պատուհան

Թուղթը բաժանի՛ր երեք «պատուհանի»։ Ամեն մեկում նկարի՛ր նույն տեսարանը՝ բլուրներ, ծառ և տուն։ Պատուհան 1՝ առավոտ, պատուհան 2՝ կեսօր, պատուհան 3՝ մայրամուտ։ Փոխի՛ր միայն երկնքի, լույսի և ստվերների գույները։

~~~art
sketch guide=thirds
Երեք պատուհան․ կողք կողքի նկարի՛ր առավոտյան, կեսօրվա և երեկոյան երկինքը։
~~~

~~~art
tasks
1. Ի՞նչ է հորիզոնը։
2. Որտե՞ղ է երկինքը սովորաբար ավելի բաց։
3. Ի՞նչ գույներ ունի երկինքը մայրամուտին։
4. Ե՞րբ են ստվերներն ամենակարճը։
5. Ո՞ր նկարիչն է նույն խոտի դեզերը նկարել օրվա տարբեր ժամերին։
6. Դեղինից կապույտ սահուն անցում նկարի՛ր։
7. Նկարի՛ր երեք պատուհանը։
~~~

~~~art
hints
1. Գիծը, որտեղ երկինքը հանդիպում է երկրին կամ ծովին։ 2. Հորիզոնի մոտ։ 3. Հորիզոնի մոտ նարնջագույն, կարմիր, ոսկեգույն, վերևում՝ մանուշակագույն։ 4. Կեսօրին։ 5. Կլոդ Մոնեն։ 6. Գույների միջև սուր գիծ չպետք է լինի։ 7. Տեսարանը նույնն է, փոխվում են միայն լույսն ու գույները։
~~~`,
        ru: `## Небо никогда не бывает просто синим

| Время | Небо у горизонта | Небо вверху | Тени |
|---|---|---|---|
| раннее утро 🌄 | бледно-жёлтое, розовое | мягкое голубое | длинные, голубоватые |
| полдень ☀️ | светло-голубое, почти белое | ярко-синее | короткие, тёмные |
| закат 🌇 | оранжевое, красное, золотое | фиолетовое, глубокое синее | очень длинные |
| ночь 🌙 | тёмно-синее | почти чёрное, со звёздами | — |

**Горизонт** — линия, где небо встречается с землёй или морем. У горизонта небо обычно **светлее**, чем вверху.

~~~art
mood scene=landscape moods=morning,noon,evening,night
~~~

## Плавный переход

1. Смочи верх листа (акварель) или приготовь два цвета гуаши.
2. Начни у горизонта с самого светлого цвета.
3. Поднимайся широкими горизонтальными мазками, понемногу добавляя следующий цвет.
4. Не жди: цвета должны смешиваться, пока сырые.

## Художники и время суток

Французский художник **Клод Моне** много раз писал одни и те же стога сена и один и тот же собор — утром, днём и вечером, чтобы показать, как свет меняет цвет. Армянские художники любили вечерний свет на **Арарате**, когда снежная вершина становится розовой.

## Задание: три окна

Раздели лист на три «окна». В каждом нарисуй один и тот же вид: холмы, дерево и дом. Окно 1 — утро. Окно 2 — полдень. Окно 3 — закат. Меняй только цвета неба, света и теней.

~~~art
sketch guide=thirds
Три окна: нарисуй рядом утреннее, полуденное и вечернее небо.
~~~

~~~art
tasks
1. Что такое горизонт?
2. Где небо обычно светлее?
3. Какого цвета небо на закате?
4. Когда тени самые короткие?
5. Какой художник писал одни и те же стога в разное время дня?
6. Напиши плавный переход от жёлтого к синему.
7. Напиши три окна.
~~~

~~~art
hints
1. Линия, где небо встречается с землёй или морем. 2. У горизонта. 3. У горизонта оранжевое, красное, золотое, а выше фиолетовое. 4. В полдень. 5. Клод Моне. 6. Между цветами не должно быть резкой границы. 7. Вид одинаковый, меняются только свет и цвета.
~~~`,
      },
      [
        q(t("The horizon is…", "Հորիզոնը…", "Горизонт — это…"), [t("the line where sky meets earth or sea", "գիծն է, որտեղ երկինքը հանդիպում է երկրին կամ ծովին", "линия, где небо встречается с землёй или морем"), t("the top of the paper", "թղթի վերին եզրն է", "верхний край листа"), t("a kind of brush", "վրձնի տեսակ է", "вид кисти")], 0),
        q(t("Near the horizon, the sky is usually…", "Հորիզոնի մոտ երկինքը սովորաբար…", "У горизонта небо обычно…"), [t("darker", "ավելի մուգ է", "темнее"), t("lighter", "ավելի բաց է", "светлее"), t("green", "կանաչ է", "зелёное")], 1),
        q(t("At sunset the sky near the horizon is…", "Մայրամուտին երկինքը հորիզոնի մոտ…", "На закате небо у горизонта…"), [t("white", "սպիտակ է", "белое"), t("black", "սև է", "чёрное"), t("orange and red", "նարնջագույն և կարմիր է", "оранжевое и красное")], 2),
        q(t("When are shadows shortest?", "Ե՞րբ են ստվերներն ամենակարճը։", "Когда тени самые короткие?"), [t("at noon", "կեսօրին", "в полдень"), t("in the morning", "առավոտյան", "утром"), t("at sunset", "մայրամուտին", "на закате")], 0),
        q(t("Who painted the same haystacks at different times of day?", "Ո՞վ է նկարել նույն խոտի դեզերը օրվա տարբեր ժամերին։", "Кто писал одни и те же стога в разное время суток?"), [t("Matisse", "Մատիսը", "Матисс"), t("Claude Monet", "Կլոդ Մոնեն", "Клод Моне"), t("Kandinsky", "Կանդինսկին", "Кандинский")], 1),
        q(t("For a smooth transition, colours should mix…", "Սահուն անցման համար գույները պետք է խառնվեն…", "Для плавного перехода цвета смешивают…"), [t("after drying", "չորանալուց հետո", "после высыхания"), t("never", "երբեք", "никогда"), t("while still wet", "քանի դեռ թաց են", "пока они сырые")], 2),
      ],
    ),
    lesson(
      "rhythm-lines-spots",
      ["Rhythm of lines and spots", "Գծերի և բծերի ռիթմ", "Ритм линий и пятен"],
      {
        en: ["Understand rhythm in art as repetition with a pattern", "Make calm and lively rhythms with lines and spots", "Show movement: birds in flight, falling leaves, dancing people"],
        hy: ["Հասկանալ ռիթմը արվեստում՝ որպես օրինաչափ կրկնություն", "Գծերով և բծերով ստեղծել հանգիստ և աշխույժ ռիթմեր", "Ցույց տալ շարժում՝ թռչող թռչուններ, թափվող տերևներ, պարող մարդիկ"],
        ru: ["Понимать ритм в искусстве как повтор с закономерностью", "Создавать спокойный и живой ритм линиями и пятнами", "Передавать движение: птицы в полёте, падающие листья, танцующие люди"],
      },
      {
        en: `## What is rhythm?

In music, rhythm is how sounds repeat: ta-ta-TAA, ta-ta-TAA. In a picture, **rhythm** is how **lines, spots and shapes repeat**.

| Rhythm | What it looks like | Feeling |
|---|---|---|
| even ● ● ● ● ● | same shapes, same spaces | calm, order (a fence, a row of trees) |
| growing ● ● ⬤ ⬤ ⬤ | shapes get bigger or smaller | movement, coming closer |
| jumping ● ●● ● ●●● | groups and gaps | joy, play, dance |
| broken ⚡ | sudden changes | excitement, storm |

~~~art
pattern layout=strip rhythm=grow motifs=bird,leaf,circle,drop
~~~

## Rhythm in nature and life

- Waves on the sea, footprints in the snow, stripes on a zebra.
- Birds flying in a wedge 🐦, leaves falling in the wind 🍂.
- Arches of a bridge, windows of a building, people in a round dance.

## How to show movement

- Put shapes on a **diagonal**: they look like they are moving.
- Make shapes **smaller** towards one side: they fly away.
- Leave **space in front** of a moving thing so it has «somewhere to go».

~~~art
flipbook bird
~~~

## Task: «Birds fly south»

Cut or paint 7–10 birds of different sizes. Place them in a wedge or a wavy line across a sunset sky. Make the near birds bigger and the far birds smaller. Your picture should «fly»!

~~~art
sketch guide=horizon
Birds fly south: draw a flock of little ticks that get smaller and smaller in the distance.
~~~

~~~art
tasks
1. What is rhythm in a picture?
2. Which rhythm feels calm?
3. Name two rhythms you can see in nature.
4. How can you make shapes look like they are moving away?
5. Draw three rows: an even rhythm, a growing rhythm and a jumping rhythm.
6. Make the «Birds fly south» picture.
7. Find rhythm in your classroom or street and draw it.
~~~

~~~art
hints
1. The repeating of lines, spots and shapes. 2. An even rhythm. 3. For example, waves, stripes on a zebra, footprints. 4. Make them smaller and put them on a diagonal. 5. Equal circles; growing circles; groups of circles with gaps. 6. Near birds big, far birds small. 7. For example, windows, desks, radiator fins.
~~~`,
        hy: `## Ի՞նչ է ռիթմը

Երաժշտության մեջ ռիթմն այն է, թե ինչպես են կրկնվում հնչյունները՝ տա-տա-ՏԱ՜, տա-տա-ՏԱ՜։ Նկարում **ռիթմն** այն է, թե ինչպես են **կրկնվում գծերը, բծերը և ձևերը**։

| Ռիթմ | Ինչ տեսք ունի | Զգացում |
|---|---|---|
| հավասար ● ● ● ● ● | նույն ձևեր, նույն տարածություններ | հանգստություն, կարգ (ցանկապատ, ծառերի շարք) |
| աճող ● ● ⬤ ⬤ ⬤ | ձևերը մեծանում կամ փոքրանում են | շարժում, մոտենալ |
| ցատկոտող ● ●● ● ●●● | խմբեր և դատարկություններ | ուրախություն, խաղ, պար |
| կոտրված ⚡ | հանկարծակի փոփոխություններ | հուզմունք, փոթորիկ |

~~~art
pattern layout=strip rhythm=grow motifs=bird,leaf,circle,drop
~~~

## Ռիթմը բնության և կյանքի մեջ

- Ծովի ալիքներ, ոտնահետքեր ձյան վրա, զեբրի գծեր։
- Սեպաձև թռչող թռչուններ 🐦, քամուց թափվող տերևներ 🍂։
- Կամրջի կամարներ, շենքի պատուհաններ, շուրջպար պարող մարդիկ։

## Ինչպես ցույց տալ շարժում

- Ձևերը դասավորի՛ր **անկյունագծով**. նրանք շարժվող են թվում։
- Ձևերը **փոքրացրո՛ւ** դեպի մի կողմ. նրանք հեռանում են։
- Շարժվող առարկայի **առջևում տեղ թո՛ղ**, որ «գնալու տեղ» ունենա։

~~~art
flipbook bird
~~~

## Առաջադրանք. «Թռչունները չվում են հարավ»

Կտրի՛ր կամ նկարի՛ր տարբեր չափերի 7–10 թռչուն։ Դասավորի՛ր նրանց սեպաձև կամ ալիքաձև գծով մայրամուտի երկնքում։ Մոտիկ թռչունները մեծ արա՛, հեռավորները՝ փոքր։ Նկարդ պետք է «թռչի»։

~~~art
sketch guide=horizon
Թռչունները չվում են հարավ․ նկարի՛ր երամ՝ փոքրիկ «թռչնիկներից», որոնք հեռվում ավելի ու ավելի փոքր են դառնում։
~~~

~~~art
tasks
1. Ի՞նչ է ռիթմը նկարում։
2. Ո՞ր ռիթմն է հանգիստ թվում։
3. Անվանի՛ր բնության մեջ տեսանելի երկու ռիթմ։
4. Ինչպե՞ս անել, որ ձևերը հեռացող թվան։
5. Նկարի՛ր երեք շարք՝ հավասար ռիթմ, աճող ռիթմ և ցատկոտող ռիթմ։
6. Պատրաստի՛ր «Թռչունները չվում են հարավ» նկարը։
7. Գտի՛ր ռիթմ դասարանում կամ փողոցում և նկարի՛ր այն։
~~~

~~~art
hints
1. Գծերի, բծերի և ձևերի կրկնությունը։ 2. Հավասար ռիթմը։ 3. Օրինակ՝ ալիքներ, զեբրի գծեր, ոտնահետքեր։ 4. Փոքրացնել դրանք և դասավորել անկյունագծով։ 5. Հավասար շրջաններ, մեծացող շրջաններ, շրջանների խմբեր՝ դատարկություններով։ 6. Մոտիկ թռչունները մեծ են, հեռավորները՝ փոքր։ 7. Օրինակ՝ պատուհաններ, նստարաններ, ջեռուցման մարտկոցի կողեր։
~~~`,
        ru: `## Что такое ритм?

В музыке ритм — это то, как повторяются звуки: та-та-ТА, та-та-ТА. В картине **ритм** — это то, как **повторяются линии, пятна и формы**.

| Ритм | Как выглядит | Чувство |
|---|---|---|
| ровный ● ● ● ● ● | одинаковые формы, одинаковые промежутки | покой, порядок (забор, ряд деревьев) |
| нарастающий ● ● ⬤ ⬤ ⬤ | формы увеличиваются или уменьшаются | движение, приближение |
| прыгающий ● ●● ● ●●● | группы и паузы | радость, игра, танец |
| ломаный ⚡ | резкие перемены | волнение, буря |

~~~art
pattern layout=strip rhythm=grow motifs=bird,leaf,circle,drop
~~~

## Ритм в природе и в жизни

- Волны на море, следы на снегу, полоски зебры.
- Птицы, летящие клином 🐦, листья, падающие на ветру 🍂.
- Арки моста, окна дома, люди в хороводе.

## Как передать движение

- Располагай формы **по диагонали**: кажется, что они движутся.
- **Уменьшай** формы к одной стороне: они улетают вдаль.
- Оставляй **место впереди** движущегося предмета, чтобы ему было «куда двигаться».

~~~art
flipbook bird
~~~

## Задание: «Птицы улетают на юг»

Вырежи или нарисуй 7–10 птиц разного размера. Расположи их клином или волнистой линией на закатном небе. Ближних птиц сделай крупнее, дальних — мельче. Картина должна «лететь»!

~~~art
sketch guide=horizon
Птицы летят на юг: нарисуй стаю «галочек», которые вдали становятся всё меньше.
~~~

~~~art
tasks
1. Что такое ритм в картине?
2. Какой ритм передаёт покой?
3. Назови два ритма, которые можно увидеть в природе.
4. Как сделать, чтобы формы казались удаляющимися?
5. Нарисуй три ряда: ровный ритм, нарастающий и прыгающий.
6. Сделай картину «Птицы улетают на юг».
7. Найди ритм в классе или на улице и нарисуй его.
~~~

~~~art
hints
1. Повтор линий, пятен и форм. 2. Ровный. 3. Например, волны, полоски зебры, следы. 4. Уменьшать их и располагать по диагонали. 5. Одинаковые круги; растущие круги; группы кругов с промежутками. 6. Ближние птицы крупные, дальние мелкие. 7. Например, окна, парты, рёбра батареи.
~~~`,
      },
      [
        q(t("Rhythm in a picture is…", "Ռիթմը նկարում…", "Ритм в картине — это…"), [t("the repeating of lines and shapes", "գծերի և ձևերի կրկնությունն է", "повтор линий и форм"), t("the frame", "շրջանակն է", "рама"), t("the signature", "ստորագրությունն է", "подпись")], 0),
        q(t("A fence with equal boards has…", "Հավասար տախտակներով ցանկապատն ունի…", "У забора с одинаковыми досками…"), [t("a broken rhythm", "կոտրված ռիթմ", "ломаный ритм"), t("an even rhythm", "հավասար ռիթմ", "ровный ритм"), t("no rhythm", "ռիթմ չունի", "нет ритма")], 1),
        q(t("Shapes on a diagonal look…", "Անկյունագծով դասավորված ձևերը թվում են…", "Формы по диагонали выглядят…"), [t("sleeping", "քնած", "спящими"), t("heavy and still", "ծանր և անշարժ", "тяжёлыми и неподвижными"), t("moving", "շարժվող", "движущимися")], 2),
        q(t("To make birds fly away into the distance, make them…", "Որ թռչունները հեռանան, դրանք անում ենք…", "Чтобы птицы улетали вдаль, их делают…"), [t("smaller", "ավելի փոքր", "мельче"), t("bigger", "ավելի մեծ", "крупнее"), t("black", "սև", "чёрными")], 0),
        q(t("Which is a rhythm in nature?", "Ո՞րն է ռիթմ բնության մեջ։", "Какой ритм есть в природе?"), [t("one lonely stone", "մեկ միայնակ քար", "один одинокий камень"), t("stripes on a zebra", "զեբրի գծերը", "полоски зебры"), t("a white sheet of paper", "սպիտակ թերթը", "белый лист")], 1),
        q(t("A jumping rhythm feels…", "Ցատկոտող ռիթմը թողնում է… տպավորություն", "Прыгающий ритм передаёт…"), [t("sad", "տխրության", "грусть"), t("sleepy", "քնկոտության", "сонливость"), t("joyful and playful", "ուրախության և խաղի", "радость и игру")], 2),
      ],
    ),
  ],
};
