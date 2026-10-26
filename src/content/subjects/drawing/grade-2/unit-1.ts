import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Materials and techniques", "Նյութեր և տեխնիկաներ", "Материалы и техники"),
  summary: t(
    "How and with what artists work: gouache, watercolour, pastel and wax crayons, pencil and ink lines, printing and monotype, collage.",
    "Ինչով և ինչպես են աշխատում նկարիչները՝ գուաշ, ջրաներկ, պաստել և մոմամատիտ, մատիտի և տուշի գծեր, տպագրություն և մոնոտիպ, կոլաժ։",
    "Как и чем работают художники: гуашь, акварель, пастель и восковые мелки, линии карандашом и тушью, печать и монотипия, коллаж.",
  ),
  lessons: [
    lesson(
      "gouache-three-colours",
      ["Gouache: three colours and white", "Գուաշ․ երեք գույն և սպիտակ", "Гуашь: три цвета и белила"],
      {
        en: ["Mix many colours from red, yellow, blue and white", "Make a colour lighter with white and keep gouache thick and even", "Paint a flower meadow using only four paints"],
        hy: ["Կարմիրից, դեղինից, կապույտից և սպիտակից ստանալ բազմաթիվ գույներ", "Գույնը բացացնել սպիտակով, գուաշը պահել թանձր և հավասար", "Նկարել ծաղկավետ մարգագետին՝ միայն չորս ներկով"],
        ru: ["Получать много цветов из красного, жёлтого, синего и белил", "Осветлять цвет белилами, класть гуашь густо и ровно", "Написать цветочный луг только четырьмя красками"],
      },
      {
        en: `## What is gouache?

**Gouache** is a thick water paint. It is **opaque**: a new layer covers the colour underneath. That's why you can paint a light flower on a dark background.

~~~art
pic gouache brush palette
~~~

## Four paints are enough

| Mix | You get |
|---|---|
| red + yellow | orange |
| yellow + blue | green |
| blue + red | violet |
| red + white | pink |
| blue + white | light blue |
| a little of all three | brown or grey |

**Rule of light:** to make a colour lighter, add **white**, not water. Water makes gouache streaky.

~~~art
mixer paints=red,yellow,blue,white
Only four paints: red, yellow, blue and white. Can you mix pink, light blue and light green?
~~~

## Good habits

1. Mix colours on the **palette**, not on the picture.
2. The paint should be thick like sour cream.
3. Paint big shapes first, small details last.
4. Wait until a layer dries before painting on top.

## Task: a flower meadow

Paint a meadow with only red, yellow, blue and white. First cover the paper with the sky and the grass (mix your own greens!). When it is dry, paint flowers on top: pink, orange, violet, light blue.

~~~art
sketch guide=horizon
Paint a flower meadow: big bright flowers in front, small ones far away near the horizon.
~~~

~~~art
tasks
1. What happens when you paint yellow over dark blue gouache?
2. How do you get green? Violet? Orange?
3. How do you make red lighter?
4. Why don't we add a lot of water to gouache?
5. Mix three different greens: more yellow, more blue, with white. Paint three squares.
6. Mix a brown from the three colours.
7. Paint the flower meadow.
~~~

~~~art
hints
1. The yellow covers the blue, because gouache is opaque. 2. yellow + blue; blue + red; red + yellow. 3. Add white. 4. The paint becomes streaky and thin. 5. A warm green, a dark green and a light green. 6. Add a little of each colour until it turns brown. 7. Check that only four paints were used.
~~~`,
        hy: `## Ի՞նչ է գուաշը

**Գուաշը** թանձր ջրային ներկ է։ Այն **անթափանց** է. նոր շերտը ծածկում է տակի գույնը։ Դրա համար մուգ ֆոնի վրա կարելի է բաց ծաղիկ նկարել։

~~~art
pic gouache brush palette
~~~

## Չորս ներկը բավական է

| Խառնուրդ | Ստանում ենք |
|---|---|
| կարմիր + դեղին | նարնջագույն |
| դեղին + կապույտ | կանաչ |
| կապույտ + կարմիր | մանուշակագույն |
| կարմիր + սպիտակ | վարդագույն |
| կապույտ + սպիտակ | երկնագույն |
| երեքից էլ մի քիչ | դարչնագույն կամ մոխրագույն |

**Լույսի կանոնը.** գույնը բացացնելու համար ավելացրո՛ւ **սպիտակ**, ոչ թե ջուր։ Ջուրը գուաշը դարձնում է բծավոր։

~~~art
mixer paints=red,yellow,blue,white
Ընդամենը չորս ներկ՝ կարմիր, դեղին, կապույտ և սպիտակ։ Կկարողանա՞ս ստանալ վարդագույն, երկնագույն և բաց կանաչ։
~~~

## Լավ սովորություններ

1. Գույները խառնի՛ր **ներկապնակի** վրա, ոչ թե նկարի։
2. Ներկը պետք է թթվասերի պես թանձր լինի։
3. Սկզբում մեծ մասերն ես ներկում, մանրուքները՝ վերջում։
4. Սպասի՛ր, որ շերտը չորանա, հետո նոր վրան նկարի՛ր։

## Առաջադրանք. ծաղկավետ մարգագետին

Նկարի՛ր մարգագետին միայն կարմիրով, դեղինով, կապույտով և սպիտակով։ Սկզբում ամբողջ թուղթը ծածկի՛ր երկնքով և խոտով (կանաչները ինքդ խառնի՛ր)։ Երբ չորանա, վրան ծաղիկներ նկարի՛ր՝ վարդագույն, նարնջագույն, մանուշակագույն, երկնագույն։

~~~art
sketch guide=horizon
Նկարի՛ր ծաղկավետ մարգագետին․ մեծ, վառ ծաղիկներ առջևում, փոքրերը՝ հեռվում, հորիզոնի մոտ։
~~~

~~~art
tasks
1. Ի՞նչ կլինի, եթե մուգ կապույտ գուաշի վրա դեղին նկարես։
2. Ինչպե՞ս ստանալ կանաչ։ Մանուշակագույն։ Նարնջագույն։
3. Ինչպե՞ս բացացնել կարմիրը։
4. Ինչո՞ւ գուաշին շատ ջուր չենք ավելացնում։
5. Խառնի՛ր երեք տարբեր կանաչ՝ ավելի շատ դեղինով, ավելի շատ կապույտով, սպիտակով։ Ներկի՛ր երեք քառակուսի։
6. Երեք գույնից դարչնագույն խառնի՛ր։
7. Նկարի՛ր ծաղկավետ մարգագետինը։
~~~

~~~art
hints
1. Դեղինը կծածկի կապույտը, որովհետև գուաշն անթափանց է։ 2. դեղին + կապույտ, կապույտ + կարմիր, կարմիր + դեղին։ 3. Ավելացնել սպիտակ։ 4. Ներկը դառնում է բարակ և բծավոր։ 5. Տաք կանաչ, մուգ կանաչ և բաց կանաչ։ 6. Ամեն գույնից մի քիչ ավելացրո՛ւ, մինչև դարչնագույն դառնա։ 7. Ստուգի՛ր, որ օգտագործված է միայն չորս ներկ։
~~~`,
        ru: `## Что такое гуашь?

**Гуашь** — густая водная краска. Она **кроющая**: новый слой закрывает цвет под ним. Поэтому на тёмном фоне можно написать светлый цветок.

~~~art
pic gouache brush palette
~~~

## Четырёх красок достаточно

| Смешиваем | Получаем |
|---|---|
| красный + жёлтый | оранжевый |
| жёлтый + синий | зелёный |
| синий + красный | фиолетовый |
| красный + белила | розовый |
| синий + белила | голубой |
| понемногу всех трёх | коричневый или серый |

**Правило света:** чтобы сделать цвет светлее, добавь **белила**, а не воду. От воды гуашь ложится пятнами.

~~~art
mixer paints=red,yellow,blue,white
Всего четыре краски: красная, жёлтая, синяя и белая. Получится смешать розовый, голубой и светло-зелёный?
~~~

## Полезные привычки

1. Смешивай цвета на **палитре**, а не на рисунке.
2. Краска должна быть густой, как сметана.
3. Сначала большие части, мелкие детали — в конце.
4. Дай слою высохнуть, потом пиши поверх.

## Задание: цветочный луг

Напиши луг только красным, жёлтым, синим и белилами. Сначала закрой лист небом и травой (зелёные смешай сам!). Когда высохнет, напиши сверху цветы: розовые, оранжевые, фиолетовые, голубые.

~~~art
sketch guide=horizon
Нарисуй цветочный луг: крупные яркие цветы впереди, маленькие вдали у горизонта.
~~~

~~~art
tasks
1. Что будет, если написать жёлтым по тёмно-синей гуаши?
2. Как получить зелёный? Фиолетовый? Оранжевый?
3. Как сделать красный светлее?
4. Почему в гуашь не добавляют много воды?
5. Смешай три разных зелёных: больше жёлтого, больше синего, с белилами. Закрась три квадрата.
6. Смешай коричневый из трёх цветов.
7. Напиши цветочный луг.
~~~

~~~art
hints
1. Жёлтый закроет синий, потому что гуашь кроющая. 2. жёлтый + синий; синий + красный; красный + жёлтый. 3. Добавить белила. 4. Краска становится жидкой и ложится пятнами. 5. Тёплый зелёный, тёмный зелёный и светлый зелёный. 6. Добавляй понемногу каждого цвета, пока не станет коричневым. 7. Проверь, что использованы только четыре краски.
~~~`,
      },
      [
        q(t("Gouache is…", "Գուաշը…", "Гуашь…"), [t("transparent: you see the paper through it", "թափանցիկ է՝ տակից թուղթը երևում է", "прозрачная: сквозь неё видна бумага"), t("opaque: it covers the colour underneath", "անթափանց է՝ ծածկում է տակի գույնը", "кроющая: закрывает цвет под ней"), t("a kind of pencil", "մատիտի տեսակ", "вид карандаша")], 1),
        q(t("How do you make gouache lighter?", "Ինչպե՞ս բացացնել գուաշը։", "Как сделать гуашь светлее?"), [t("add white", "ավելացնել սպիտակ", "добавить белила"), t("add a lot of water", "շատ ջուր ավելացնել", "добавить много воды"), t("add black", "ավելացնել սև", "добавить чёрный")], 0),
        q(t("Yellow + blue =", "Դեղին + կապույտ =", "Жёлтый + синий ="), [t("orange", "նարնջագույն", "оранжевый"), t("violet", "մանուշակագույն", "фиолетовый"), t("green", "կանաչ", "зелёный")], 2),
        q(t("Where do we mix colours?", "Որտե՞ղ ենք խառնում գույները։", "Где смешивают цвета?"), [t("on the palette", "ներկապնակի վրա", "на палитре"), t("in the water jar", "ջրի բաժակում", "в банке с водой"), t("on the table", "սեղանին", "на столе")], 0),
        q(t("Red + white =", "Կարմիր + սպիտակ =", "Красный + белила ="), [t("brown", "դարչնագույն", "коричневый"), t("pink", "վարդագույն", "розовый"), t("orange", "նարնջագույն", "оранжевый")], 1),
        q(t("What do we paint first?", "Ի՞նչն ենք նկարում սկզբում։", "Что пишем сначала?"), [t("small details", "մանր մասերը", "мелкие детали"), t("the signature", "ստորագրությունը", "подпись"), t("big shapes and the background", "մեծ մասերն ու ֆոնը", "большие части и фон")], 2),
      ],
    ),
    lesson(
      "watercolour-wet",
      ["Watercolour: wet on wet", "Ջրաներկ․ թաց թղթի վրա", "Акварель: по сырому"],
      {
        en: ["Know how watercolour differs from gouache", "Paint wet on wet and watch colours flow into each other", "Paint a soft sky or a foggy morning"],
        hy: ["Իմանալ, թե ինչով է ջրաներկը տարբերվում գուաշից", "Նկարել թաց թղթի վրա և տեսնել, թե ինչպես են գույները միախառնվում", "Նկարել մեղմ երկինք կամ մառախլապատ առավոտ"],
        ru: ["Знать, чем акварель отличается от гуаши", "Писать по сырому и наблюдать, как цвета перетекают друг в друга", "Написать мягкое небо или туманное утро"],
      },
      {
        en: `## Watercolour is transparent

**Watercolour** is a **transparent** paint: the white paper shines through it. So in watercolour we don't use white paint. The white is the paper itself! To make a colour lighter, add **more water**.

| | Gouache | Watercolour |
|---|---|---|
| layer | covers | shows what is underneath |
| lighter colour | add white | add water |
| feeling | bright, solid | light, airy |

~~~art
pic watercolour brush
~~~

## Wet on wet

1. Wet the whole paper with a big brush or a sponge. Wait until it stops shining but is still damp.
2. Touch the paper with a brush full of colour. The colour **spreads** by itself!
3. Add a second colour next to it. They **flow** into each other softly.
4. Don't scrub. Let the water do the work.

~~~art
palette pastel
Watercolour is transparent: the white paper shines through, so the colours look light and soft.
~~~

## Wet on dry

On **dry** paper the edges are sharp. Artists often paint the sky **wet on wet** and add a tree or a house **on dry** paper at the end.

## Task: a foggy morning

Wet the paper. Paint a soft pink and yellow sky at the top and pale blue water at the bottom. While it is still damp, add grey-blue shapes of far mountains. They will look like they are in fog. When it is dry, paint a dark boat or a tree with sharp edges.

~~~art
aerial
A foggy morning: the more water and air, the paler and softer the far trees and hills.
~~~

~~~art
tasks
1. What is the white colour in a watercolour painting?
2. How do you make watercolour lighter?
3. What happens when you put a drop of colour on wet paper?
4. Where are the edges sharp: on wet or on dry paper?
5. Make a test: one blue stroke on wet paper and one on dry paper. Compare.
6. Paint a rainbow wet on wet and see the colours mix.
7. Paint the foggy morning.
~~~

~~~art
hints
1. The white paper. 2. Add more water. 3. It spreads softly. 4. On dry paper. 5. On wet paper the stroke is soft and blurred; on dry paper it is sharp. 6. Neighbouring colours mix: yellow and blue give green. 7. The far mountains look soft; the boat or tree has sharp edges.
~~~`,
        hy: `## Ջրաներկը թափանցիկ է

**Ջրաներկը** **թափանցիկ** ներկ է. նրա միջով երևում է սպիտակ թուղթը։ Դրա համար ջրաներկում սպիտակ ներկ չենք օգտագործում. սպիտակը հենց թուղթն է։ Գույնը բացացնելու համար ավելացնում ենք **ավելի շատ ջուր**։

| | Գուաշ | Ջրաներկ |
|---|---|---|
| շերտը | ծածկում է | երևում է տակինը |
| բաց գույն | ավելացնել սպիտակ | ավելացնել ջուր |
| տպավորություն | վառ, խիտ | թեթև, օդային |

~~~art
pic watercolour brush
~~~

## Թաց թղթի վրա

1. Մեծ վրձնով կամ սպունգով թրջի՛ր ամբողջ թուղթը։ Սպասի՛ր, մինչև փայլը անցնի, բայց թուղթը դեռ խոնավ լինի։
2. Գույնով լի վրձնով դիպչի՛ր թղթին։ Գույնը **ինքն է տարածվում**։
3. Կողքին ավելացրո՛ւ երկրորդ գույնը։ Նրանք մեղմ **միախառնվում են**։
4. Մի՛ քսիր։ Թո՛ղ ջուրն աշխատի։

~~~art
palette pastel
Ջրաներկը թափանցիկ է․ սպիտակ թուղթը երևում է միջից, ուստի գույները թեթև և փափուկ են։
~~~

## Չոր թղթի վրա

**Չոր** թղթի վրա եզրերը սուր են։ Նկարիչները հաճախ երկինքը նկարում են **թացի վրա**, իսկ ծառը կամ տունը վերջում ավելացնում են **չորի վրա**։

## Առաջադրանք. մառախլապատ առավոտ

Թրջի՛ր թուղթը։ Վերևում նկարի՛ր մեղմ վարդագույն և դեղին երկինք, ներքևում՝ գունատ կապույտ ջուր։ Քանի դեռ խոնավ է, ավելացրո՛ւ հեռավոր լեռների մոխրակապույտ ուրվագծեր։ Նրանք կթվան մառախուղի մեջ։ Չորանալուց հետո նկարի՛ր սուր եզրերով մուգ նավակ կամ ծառ։

~~~art
aerial
Մառախլապատ առավոտ․ որքան շատ ջուր և օդ, այնքան գունատ ու մեղմ են հեռավոր ծառերն ու բլուրները։
~~~

~~~art
tasks
1. Ո՞րն է սպիտակ գույնը ջրաներկ նկարում։
2. Ինչպե՞ս բացացնել ջրաներկը։
3. Ի՞նչ է լինում, երբ գույնի կաթիլը դնում ես թաց թղթին։
4. Որտե՞ղ են եզրերը սուր՝ թա՞ց, թե՞ չոր թղթի վրա։
5. Փորձ արա՛. մեկ կապույտ գիծ թաց թղթին, մեկը՝ չորին։ Համեմատի՛ր։
6. Թացի վրա նկարի՛ր ծիածան և տես, թե ինչպես են գույները խառնվում։
7. Նկարի՛ր մառախլապատ առավոտը։
~~~

~~~art
hints
1. Սպիտակ թուղթը։ 2. Ավելացնել ավելի շատ ջուր։ 3. Այն մեղմ տարածվում է։ 4. Չոր թղթի վրա։ 5. Թաց թղթի վրա գիծը մեղմ է և լղոզված, չորի վրա՝ սուր։ 6. Հարևան գույները խառնվում են՝ դեղինն ու կապույտը տալիս են կանաչ։ 7. Հեռավոր լեռները մեղմ են, նավակը կամ ծառը՝ սուր եզրերով։
~~~`,
        ru: `## Акварель прозрачная

**Акварель** — **прозрачная** краска: сквозь неё просвечивает белая бумага. Поэтому в акварели белила не используют: белый — это сама бумага! Чтобы сделать цвет светлее, добавляют **больше воды**.

| | Гуашь | Акварель |
|---|---|---|
| слой | закрывает | просвечивает |
| светлее | добавить белила | добавить воду |
| впечатление | яркое, плотное | лёгкое, воздушное |

~~~art
pic watercolour brush
~~~

## По сырому

1. Смочи весь лист большой кистью или губкой. Подожди, пока исчезнет блеск, но бумага останется влажной.
2. Коснись бумаги кистью, полной краски. Цвет **растекается** сам!
3. Рядом положи второй цвет. Они мягко **перетекают** друг в друга.
4. Не три кистью. Пусть работает вода.

~~~art
palette pastel
Акварель прозрачная: белая бумага просвечивает, поэтому цвета лёгкие и нежные.
~~~

## По сухому

На **сухой** бумаге края чёткие. Художники часто пишут небо **по сырому**, а дерево или дом добавляют в конце **по сухому**.

## Задание: туманное утро

Смочи лист. Вверху напиши мягкое розово-жёлтое небо, внизу — бледно-голубую воду. Пока бумага влажная, добавь серо-голубые силуэты далёких гор. Они будут казаться в тумане. Когда высохнет, напиши тёмную лодку или дерево с чёткими краями.

~~~art
aerial
Туманное утро: чем больше воды и воздуха, тем бледнее и мягче дальние деревья и холмы.
~~~

~~~art
tasks
1. Что является белым цветом в акварельной работе?
2. Как сделать акварель светлее?
3. Что происходит, когда капля краски попадает на сырую бумагу?
4. Где края чёткие: на сырой или на сухой бумаге?
5. Проведи опыт: один синий мазок по сырому, другой по сухому. Сравни.
6. Напиши радугу по сырому и посмотри, как смешиваются цвета.
7. Напиши туманное утро.
~~~

~~~art
hints
1. Белая бумага. 2. Добавить больше воды. 3. Она мягко растекается. 4. На сухой бумаге. 5. По сырому мазок мягкий и размытый, по сухому — чёткий. 6. Соседние цвета смешиваются: жёлтый и синий дают зелёный. 7. Дальние горы мягкие, лодка или дерево — с чёткими краями.
~~~`,
      },
      [
        q(t("Watercolour is…", "Ջրաներկը…", "Акварель…"), [t("transparent", "թափանցիկ է", "прозрачная"), t("opaque", "անթափանց է", "кроющая"), t("always thick", "միշտ թանձր է", "всегда густая")], 0),
        q(t("How do you make watercolour lighter?", "Ինչպե՞ս բացացնել ջրաներկը։", "Как сделать акварель светлее?"), [t("add white paint", "ավելացնել սպիտակ ներկ", "добавить белила"), t("add more water", "ավելացնել ավելի շատ ջուր", "добавить больше воды"), t("press harder", "ավելի ուժեղ սեղմել", "сильнее нажать")], 1),
        q(t("On wet paper, colours…", "Թաց թղթի վրա գույները…", "На сырой бумаге цвета…"), [t("have sharp edges", "սուր եզրեր ունեն", "имеют чёткие края"), t("don't stick", "չեն կպչում", "не держатся"), t("spread and flow softly", "մեղմ տարածվում և միախառնվում են", "мягко растекаются и перетекают")], 2),
        q(t("What is white in a watercolour?", "Ի՞նչն է սպիտակ ջրաներկ նկարում։", "Что белое в акварели?"), [t("the paper", "թուղթը", "бумага"), t("white paint", "սպիտակ ներկը", "белила"), t("chalk", "կավիճը", "мел")], 0),
        q(t("A tree with sharp edges is painted…", "Սուր եզրերով ծառը նկարում ենք…", "Дерево с чёткими краями пишут…"), [t("wet on wet", "թացի վրա", "по сырому"), t("on dry paper", "չոր թղթի վրա", "по сухому"), t("in water", "ջրի մեջ", "в воде")], 1),
        q(t("Far mountains in fog look…", "Մառախուղի մեջ հեռավոր լեռները…", "Дальние горы в тумане выглядят…"), [t("dark and sharp", "մուգ և սուր են", "тёмными и чёткими"), t("bright red", "վառ կարմիր են", "ярко-красными"), t("soft and pale", "մեղմ և գունատ են", "мягкими и бледными")], 2),
      ],
    ),
    lesson(
      "pastel-crayons",
      ["Pastel and wax crayons", "Պաստել և մոմամատիտներ", "Пастель и восковые мелки"],
      {
        en: ["Know dry pastel and wax crayons and how they differ", "Blend pastel with a finger and layer wax crayon strokes", "Make a wax-resist picture: crayon first, watercolour on top"],
        hy: ["Ճանաչել չոր պաստելը և մոմամատիտը, իմանալ տարբերությունները", "Պաստելը մատով միախառնել, մոմամատիտի գծերը շերտ առ շերտ դնել", "Անել «մոմի դիմադրություն» նկար՝ սկզբում մոմամատիտ, վրան ջրաներկ"],
        ru: ["Знать сухую пастель и восковые мелки и их отличия", "Растирать пастель пальцем, накладывать штрихи воском слоями", "Сделать рисунок «восковой резерв»: сначала мелки, сверху акварель"],
      },
      {
        en: `## Two kinds of crayons

| | Dry pastel | Wax crayons |
|---|---|---|
| looks like | soft coloured chalk | crayons with wax |
| on paper | velvety, powdery | shiny, bright |
| blending | rub with a finger or a cotton bud | press harder, layer colours |
| best paper | rough, coloured paper | any paper |
| careful! | smudges easily | doesn't smudge |

~~~art
pic pastel crayons
~~~

## Pastel tricks

- Draw with the **side** of a short piece for wide soft areas.
- Draw with the **tip** for thin lines.
- **Blend**: rub two colours with your finger and they melt together.
- Work from the top of the page down so your hand doesn't smudge the picture.

~~~art
palette pastel
~~~

## Wax-resist magic

Wax pushes water away. So:

1. Draw with **wax crayons** and press hard: white or yellow stars, a moon, windows.
2. Paint over the whole paper with dark **watercolour** (blue or violet).
3. The paint slides off the wax, and your drawing shines through!

This is how you can paint a **night city** or a **night sky** with bright stars.

~~~art
sketch paper=dark
Wax-resist on screen: draw with white like with a wax candle. On real paper, paint over it and the lines appear like magic.
~~~

~~~art
tasks
1. Which crayons are velvety and smudge easily?
2. How do you blend pastel?
3. Why should you work from the top down with pastel?
4. Why does watercolour not cover wax?
5. Draw a sunset sky with pastel: blend orange, pink and violet.
6. Draw a fish with wax crayons and paint the sea over it with blue watercolour.
7. Make a night city with wax resist: yellow windows, white stars, a dark blue sky.
~~~

~~~art
hints
1. Dry pastel. 2. Rub the colours together with a finger or a cotton bud. 3. So that your hand doesn't smudge what you have already drawn. 4. Wax pushes water away. 5. The colours should melt into each other with no hard lines. 6. The fish shows through the blue sea. 7. The windows and stars shine through the dark paint.
~~~`,
        hy: `## Մատիտների երկու տեսակ

| | Չոր պաստել | Մոմամատիտ |
|---|---|---|
| ինչի է նման | փափուկ գունավոր կավճի | մոմով մատիտների |
| թղթի վրա | թավշյա, փոշոտ | փայլուն, վառ |
| միախառնում | մատով կամ բամբակյա փայտիկով | ուժեղ սեղմել, գույները շերտերով դնել |
| լավագույն թուղթ | կոպիտ, գունավոր թուղթ | ցանկացած թուղթ |
| զգո՛ւյշ | հեշտությամբ քսվում է | չի քսվում |

~~~art
pic pastel crayons
~~~

## Պաստելի հնարքներ

- Լայն, փափուկ մասերի համար նկարի՛ր կարճ կտորի **կողքով**։
- Բարակ գծերի համար՝ **ծայրով**։
- **Միախառնի՛ր**. երկու գույնը քսի՛ր մատով, և նրանք կհալվեն իրար մեջ։
- Աշխատի՛ր վերևից ներքև, որ ձեռքդ չքսի նկարը։

~~~art
palette pastel
~~~

## Մոմի կախարդանքը

Մոմը վանում է ջուրը։ Ուրեմն՝

1. Նկարի՛ր **մոմամատիտով** և ուժեղ սեղմի՛ր. սպիտակ կամ դեղին աստղեր, լուսին, պատուհաններ։
2. Ամբողջ թուղթը ներկի՛ր մուգ **ջրաներկով** (կապույտ կամ մանուշակագույն)։
3. Ներկը սահում է մոմի վրայից, և նկարդ փայլում է։

Այսպես կարելի է նկարել **գիշերային քաղաք** կամ վառ աստղերով **գիշերային երկինք**։

~~~art
sketch paper=dark
Մոմի կախարդանք էկրանին․ նկարի՛ր սպիտակով, ինչպես մոմով։ Իսկական թղթի վրա ներկով ծածկիր, և գծերը կախարդանքի պես կհայտնվեն։
~~~

~~~art
tasks
1. Ո՞ր մատիտներն են թավշյա և հեշտությամբ քսվում։
2. Ինչպե՞ս միախառնել պաստելը։
3. Ինչո՞ւ պաստելով պետք է աշխատել վերևից ներքև։
4. Ինչո՞ւ ջրաներկը չի ծածկում մոմը։
5. Պաստելով նկարի՛ր մայրամուտի երկինք՝ միախառնելով նարնջագույն, վարդագույն և մանուշակագույն։
6. Մոմամատիտով նկարի՛ր ձուկ և վրան կապույտ ջրաներկով ծով ներկի՛ր։
7. Մոմով նկարի՛ր գիշերային քաղաք՝ դեղին պատուհաններ, սպիտակ աստղեր, մուգ կապույտ երկինք։
~~~

~~~art
hints
1. Չոր պաստելը։ 2. Գույները մատով կամ բամբակյա փայտիկով քսել իրար։ 3. Որ ձեռքդ չքսի արդեն նկարածը։ 4. Մոմը վանում է ջուրը։ 5. Գույները պետք է մեղմ անցնեն իրար՝ առանց կոշտ գծերի։ 6. Ձուկը երևում է կապույտ ծովի միջից։ 7. Պատուհաններն ու աստղերը փայլում են մուգ ներկի միջից։
~~~`,
        ru: `## Два вида мелков

| | Сухая пастель | Восковые мелки |
|---|---|---|
| похожа на | мягкий цветной мел | мелки с воском |
| на бумаге | бархатистая, пыльная | блестящие, яркие |
| растушёвка | пальцем или ватной палочкой | сильнее нажимать, накладывать слои |
| лучшая бумага | шершавая, цветная | любая |
| осторожно! | легко размазывается | не размазываются |

~~~art
pic pastel crayons
~~~

## Секреты пастели

- Широкие мягкие места рисуй **боковой** стороной короткого кусочка.
- Тонкие линии — **кончиком**.
- **Растушёвка**: потри два цвета пальцем — они сольются.
- Работай сверху вниз, чтобы рука не смазала рисунок.

~~~art
palette pastel
~~~

## Волшебство воска

Воск отталкивает воду. Поэтому:

1. Нарисуй **восковыми мелками**, сильно нажимая: белые или жёлтые звёзды, луну, окна.
2. Закрась весь лист тёмной **акварелью** (синей или фиолетовой).
3. Краска скатывается с воска, и рисунок проступает!

Так можно нарисовать **ночной город** или **ночное небо** с яркими звёздами.

~~~art
sketch paper=dark
Восковая магия на экране: рисуй белым, как свечой. На настоящей бумаге закрась сверху — и линии проявятся как по волшебству.
~~~

~~~art
tasks
1. Какие мелки бархатистые и легко размазываются?
2. Как растушевать пастель?
3. Почему пастелью работают сверху вниз?
4. Почему акварель не закрывает воск?
5. Нарисуй пастелью закатное небо: растушуй оранжевый, розовый и фиолетовый.
6. Нарисуй восковыми мелками рыбку и закрась поверх синей акварелью море.
7. Сделай ночной город в технике восковой резерв: жёлтые окна, белые звёзды, тёмно-синее небо.
~~~

~~~art
hints
1. Сухая пастель. 2. Растереть цвета пальцем или ватной палочкой. 3. Чтобы рука не смазала уже нарисованное. 4. Воск отталкивает воду. 5. Цвета должны мягко переходить друг в друга без резких линий. 6. Рыбка проступает сквозь синее море. 7. Окна и звёзды светятся сквозь тёмную краску.
~~~`,
      },
      [
        q(t("Which material smudges easily?", "Ո՞ր նյութն է հեշտությամբ քսվում։", "Какой материал легко размазывается?"), [t("wax crayons", "մոմամատիտ", "восковые мелки"), t("dry pastel", "չոր պաստել", "сухая пастель"), t("felt-tip pens", "ֆլոմաստեր", "фломастеры")], 1),
        q(t("How do we blend pastel?", "Ինչպե՞ս ենք միախառնում պաստելը։", "Как растушёвывают пастель?"), [t("with a finger", "մատով", "пальцем"), t("with water", "ջրով", "водой"), t("with an eraser only", "միայն ռետինով", "только ластиком")], 0),
        q(t("Wax and water…", "Մոմը և ջուրը…", "Воск и вода…"), [t("mix well", "լավ խառնվում են", "хорошо смешиваются"), t("turn green", "կանաչում են", "становятся зелёными"), t("push each other away", "վանում են իրար", "отталкиваются")], 2),
        q(t("In a wax-resist picture, what do we do first?", "Մոմի նկարում ի՞նչ ենք անում սկզբում։", "Что делают сначала в технике восковой резерв?"), [t("draw with wax crayons", "նկարում ենք մոմամատիտով", "рисуют восковыми мелками"), t("paint with watercolour", "ներկում ենք ջրաներկով", "закрашивают акварелью"), t("cut the paper", "կտրում ենք թուղթը", "режут бумагу")], 0),
        q(t("Pastel works best on…", "Պաստելը լավագույնս աշխատում է…", "Пастель лучше всего ложится на…"), [t("glass", "ապակու վրա", "стекло"), t("rough paper", "կոպիտ թղթի վրա", "шершавую бумагу"), t("plastic", "պլաստիկի վրա", "пластик")], 1),
        q(t("For a thin pastel line, draw with…", "Պաստելի բարակ գծի համար նկարում ենք…", "Тонкую линию пастелью рисуют…"), [t("the side", "կողքով", "боком"), t("your palm", "ափով", "ладонью"), t("the tip", "ծայրով", "кончиком")], 2),
      ],
    ),
    lesson(
      "graphic-lines",
      ["Pencil, felt-tip and ink: the art of line", "Մատիտ, ֆլոմաստեր և տուշ․ գծի արվեստը", "Карандаш, фломастер и тушь: искусство линии"],
      {
        en: ["Know what graphics is: art made with lines and dots", "Draw different lines: thin and thick, straight and wavy, calm and sharp", "Fill shapes with hatching, dots and patterns"],
        hy: ["Իմանալ, թե ինչ է գրաֆիկան՝ գծերով և կետերով արվեստ", "Նկարել տարբեր գծեր՝ բարակ և հաստ, ուղիղ և ալիքաձև, հանգիստ և սուր", "Ձևերը լցնել շտրիխներով, կետերով և նախշերով"],
        ru: ["Знать, что такое графика: искусство линии и точки", "Рисовать разные линии: тонкие и толстые, прямые и волнистые, спокойные и острые", "Заполнять формы штриховкой, точками и узорами"],
      },
      {
        en: `## Graphics

**Graphics** is art made mostly with **lines, dots and spots**, often in one colour: a pencil, a black felt-tip pen, ink and a pen or a thin brush. Many book illustrations are graphics.

## Lines have character

| Line | Feeling |
|---|---|
| ——— straight, calm | quiet, still water |
| 〰️ wavy | wind, water, hair |
| ⚡ zigzag, sharp | anger, lightning, thorns |
| thin, light | gentle, airy |
| thick, dark | strong, heavy |

~~~art
lines
~~~

## Pencil tips

- **H** pencils are hard and light, **B** pencils are soft and dark. HB is in the middle.
- Hold the pencil lightly for sketching; press harder only at the end.
- **Hatching**: many short parallel lines. Lines close together look dark; lines far apart look light.

## Textures

| Texture | How to draw |
|---|---|
| fur | many short lines in one direction |
| feathers | little arches in rows |
| bark | long wavy lines with breaks |
| sand | many dots |
| scales | rows of small «u» shapes |

~~~art
tone
~~~

## Task: a hedgehog and its friends

Draw a hedgehog, an owl and a fish with a black felt-tip pen. Give each animal its texture: needles, feathers and scales. Don't colour anything! Only lines and dots.

~~~art
steps hedgehog
~~~

~~~art
sketch
Draw a hedgehog and its friends only with lines: prickly spikes, soft fur, smooth feathers.
~~~

~~~art
tasks
1. What is graphics?
2. Which line shows anger: wavy or zigzag?
3. Which pencil is softer and darker: H or B?
4. How do you make hatching look darker?
5. Draw five different lines and write next to each one a feeling.
6. Fill three squares with three textures: fur, sand, scales.
7. Draw the hedgehog, the owl and the fish.
~~~

~~~art
hints
1. Art made with lines, dots and spots. 2. Zigzag. 3. B. 4. Put the lines closer together. 5. For example, straight — calm, zigzag — angry, wavy — playful. 6. Short lines in one direction; many dots; rows of «u» shapes. 7. Check that each animal has its own texture.
~~~`,
        hy: `## Գրաֆիկա

**Գրաֆիկան** արվեստ է, որն ստեղծվում է հիմնականում **գծերով, կետերով և բծերով**, հաճախ մեկ գույնով՝ մատիտով, սև ֆլոմաստերով, տուշով և գրչով կամ բարակ վրձնով։ Գրքերի շատ նկարազարդումներ գրաֆիկա են։

## Գծերն ունեն բնավորություն

| Գիծ | Զգացում |
|---|---|
| ——— ուղիղ, հանգիստ | խաղաղություն, անշարժ ջուր |
| 〰️ ալիքաձև | քամի, ջուր, մազեր |
| ⚡ զիգզագ, սուր | բարկություն, կայծակ, փշեր |
| բարակ, թեթև | նուրբ, օդային |
| հաստ, մուգ | ուժեղ, ծանր |

~~~art
lines
~~~

## Մատիտի խորհուրդներ

- **H** մատիտները կարծր են և բաց, **B**-ները՝ փափուկ և մուգ։ HB-ն մեջտեղում է։
- Էսքիզի համար մատիտը թեթև բռնի՛ր, ուժեղ սեղմի՛ր միայն վերջում։
- **Շտրիխ**. շատ կարճ զուգահեռ գծեր։ Իրար մոտ գծերը մուգ են երևում, հեռուները՝ բաց։

## Մակերեսներ

| Մակերես | Ինչպես նկարել |
|---|---|
| մորթի | շատ կարճ գծեր մեկ ուղղությամբ |
| փետուրներ | փոքրիկ աղեղներ շարքերով |
| կեղև | երկար ալիքաձև ընդհատվող գծեր |
| ավազ | շատ կետեր |
| թեփուկներ | փոքրիկ «u» ձևերի շարքեր |

~~~art
tone
~~~

## Առաջադրանք. ոզնին և նրա ընկերները

Սև ֆլոմաստերով նկարի՛ր ոզնի, բու և ձուկ։ Յուրաքանչյուր կենդանու տո՛ւր իր մակերեսը՝ փշեր, փետուրներ և թեփուկներ։ Ոչինչ մի՛ ներկիր, միայն գծեր և կետեր։

~~~art
steps hedgehog
~~~

~~~art
sketch
Նկարի՛ր ոզնուն և նրա ընկերներին միայն գծերով՝ փշոտ ասեղներ, փափուկ մորթի, հարթ փետուրներ։
~~~

~~~art
tasks
1. Ի՞նչ է գրաֆիկան։
2. Ո՞ր գիծն է բարկություն արտահայտում՝ ալիքաձև՞, թե՞ զիգզագ։
3. Ո՞ր մատիտն է ավելի փափուկ և մուգ՝ H, թե՞ B։
4. Ինչպե՞ս շտրիխն ավելի մուգ դարձնել։
5. Նկարի՛ր հինգ տարբեր գիծ և ամեն մեկի կողքին գրի՛ր մի զգացում։
6. Երեք քառակուսի լցրո՛ւ երեք մակերեսով՝ մորթի, ավազ, թեփուկներ։
7. Նկարի՛ր ոզնուն, բվին և ձկանը։
~~~

~~~art
hints
1. Գծերով, կետերով և բծերով արվեստ։ 2. Զիգզագը։ 3. B։ 4. Գծերն ավելի մոտ դնել իրար։ 5. Օրինակ՝ ուղիղ՝ հանգիստ, զիգզագ՝ բարկացած, ալիքաձև՝ խաղացկուն։ 6. Կարճ գծեր մեկ ուղղությամբ, շատ կետեր, «u» ձևերի շարքեր։ 7. Ստուգի՛ր, որ ամեն կենդանի ունի իր մակերեսը։
~~~`,
        ru: `## Графика

**Графика** — искусство, созданное в основном **линиями, точками и пятнами**, часто одним цветом: карандашом, чёрным фломастером, тушью и пером или тонкой кистью. Многие книжные иллюстрации — это графика.

## У линий есть характер

| Линия | Чувство |
|---|---|
| ——— прямая, спокойная | покой, тихая вода |
| 〰️ волнистая | ветер, вода, волосы |
| ⚡ зигзаг, острая | злость, молния, колючки |
| тонкая, лёгкая | нежное, воздушное |
| толстая, тёмная | сильное, тяжёлое |

~~~art
lines
~~~

## Советы по карандашу

- Карандаши **Т (H)** твёрдые и светлые, **М (B)** — мягкие и тёмные. ТМ (HB) — посередине.
- Для наброска держи карандаш легко, сильнее нажимай только в конце.
- **Штриховка** — много коротких параллельных линий. Частые линии выглядят темнее, редкие — светлее.

## Фактуры

| Фактура | Как рисовать |
|---|---|
| мех | много коротких линий в одну сторону |
| перья | маленькие дужки рядами |
| кора | длинные волнистые линии с разрывами |
| песок | много точек |
| чешуя | ряды маленьких «u» |

~~~art
tone
~~~

## Задание: ёжик и его друзья

Нарисуй чёрным фломастером ежа, сову и рыбу. Дай каждому животному свою фактуру: иголки, перья и чешую. Ничего не раскрашивай! Только линии и точки.

~~~art
steps hedgehog
~~~

~~~art
sketch
Нарисуй ёжика и его друзей только линиями: колючие иголки, мягкая шерсть, гладкие перья.
~~~

~~~art
tasks
1. Что такое графика?
2. Какая линия выражает злость: волнистая или зигзаг?
3. Какой карандаш мягче и темнее: H (Т) или B (М)?
4. Как сделать штриховку темнее?
5. Нарисуй пять разных линий и подпиши у каждой чувство.
6. Заполни три квадрата тремя фактурами: мех, песок, чешуя.
7. Нарисуй ежа, сову и рыбу.
~~~

~~~art
hints
1. Искусство линий, точек и пятен. 2. Зигзаг. 3. B (М). 4. Чаще класть линии. 5. Например, прямая — спокойная, зигзаг — злая, волнистая — игривая. 6. Короткие линии в одну сторону; много точек; ряды «u». 7. Проверь, что у каждого животного своя фактура.
~~~`,
      },
      [
        q(t("Graphics is art made mostly with…", "Գրաֆիկան արվեստ է, որը հիմնականում ստեղծվում է…", "Графика — искусство, созданное в основном…"), [t("lines and dots", "գծերով և կետերով", "линиями и точками"), t("clay", "կավով", "из глины"), t("bright gouache", "վառ գուաշով", "яркой гуашью")], 0),
        q(t("A zigzag line feels…", "Զիգզագ գիծը թողնում է… տպավորություն", "Линия-зигзаг выражает…"), [t("calm", "հանգիստ", "покой"), t("gentle", "նուրբ", "нежность"), t("sharp and angry", "սուր և բարկացած", "резкость и злость")], 2),
        q(t("Which pencil is softer and darker?", "Ո՞ր մատիտն է ավելի փափուկ և մուգ։", "Какой карандаш мягче и темнее?"), [t("H", "H", "H (Т)"), t("B", "B", "B (М)"), t("They are the same", "Նույնն են", "Одинаковые")], 1),
        q(t("Hatching looks darker when the lines are…", "Շտրիխն ավելի մուգ է, երբ գծերը…", "Штриховка темнее, когда линии…"), [t("close together", "իրար մոտ են", "лежат часто"), t("far apart", "իրարից հեռու են", "лежат редко"), t("red", "կարմիր են", "красные")], 0),
        q(t("How do we draw sand?", "Ինչպե՞ս ենք նկարում ավազը։", "Как нарисовать песок?"), [t("long wavy lines", "երկար ալիքաձև գծերով", "длинными волнистыми линиями"), t("little arches", "փոքրիկ աղեղներով", "маленькими дужками"), t("many dots", "շատ կետերով", "множеством точек")], 2),
        q(t("At the start of a drawing, hold the pencil…", "Նկարի սկզբում մատիտը բռնում ենք…", "В начале рисунка карандаш держат…"), [t("very hard", "շատ ամուր սեղմած", "сильно нажимая"), t("lightly", "թեթև", "легко"), t("with both hands", "երկու ձեռքով", "двумя руками")], 1),
      ],
    ),
    lesson(
      "monotype-printing",
      ["Printing and monotype", "Տպագրություն և մոնոտիպ", "Печать и монотипия"],
      {
        en: ["Know that a print is a picture copied from a surface", "Make a monotype: paint on a smooth surface and press paper on it", "Print with leaves, potato stamps and folded paper"],
        hy: ["Իմանալ, որ տպանկարը մակերեսից արտատպված նկար է", "Անել մոնոտիպ՝ ներկել հարթ մակերեսին և թուղթը սեղմել վրան", "Տպել տերևներով, կարտոֆիլի դրոշմներով և ծալած թղթով"],
        ru: ["Знать, что оттиск — изображение, перенесённое с поверхности", "Сделать монотипию: нанести краску на гладкую поверхность и прижать лист", "Печатать листьями, штампами из картофеля и сложенным листом"],
      },
      {
        en: `## What is a print?

A **print** is a picture that we **transfer** from one surface to paper by pressing. Artists make prints with wood, metal and stone. We will start with simple ones.

## Monotype: «one print»

**Mono** means «one»: each monotype is **unique**, you get only one good print.

1. Paint quickly with thick gouache on a smooth surface: a plastic file, glass or a tile.
2. Put a sheet of paper on it and press gently with your palm.
3. Lift the paper slowly. Surprise! The picture is **mirrored** and has a beautiful texture.

**Butterfly monotype:** paint on one half of a folded sheet, fold it, press and open. You get a symmetrical butterfly or a reflection of a forest in a lake.

~~~art
sketch mode=blot
Monotype means one print. Paint on the left, fold, and you get a print that can never be repeated.
~~~

## Printing with nature and stamps

| Tool | How |
|---|---|
| a leaf 🍁 | paint the veiny side, press it on paper |
| a potato stamp 🥔 | an adult cuts a simple shape in half a potato; dip it in paint and print in rows |
| a sponge | dab paint for clouds, bushes, snow |
| a cork, a bottle cap | circles: berries, bubbles, wheels |

A stamp lets you repeat a shape many times: a pattern, a border, a field of flowers.

~~~art
pic leaf-oak leaf-maple shell
Leaves, shells and half a potato make great stamps.
~~~

~~~art
pattern layout=grid rhythm=repeat motifs=leaf,flower,circle,drop
A stamp repeats one shape again and again. Make a printed pattern.
~~~

## Safety

Only an adult cuts the potato. Cover the table with newspaper.

~~~art
tasks
1. What does «mono» mean?
2. Why is the monotype picture mirrored?
3. Which side of a leaf gives a better print?
4. What is good about a stamp?
5. Make a butterfly monotype.
6. Print an autumn tree: draw the trunk and print the crown with real leaves.
7. With a potato or cork stamp, make a border for a card.
~~~

~~~art
hints
1. One. 2. Because the paper is laid face down on the paint. 3. The back side, where the veins stand out. 4. You can repeat a shape many times. 5. Both wings are the same: symmetry. 6. The leaves leave prints with veins. 7. The shapes repeat in a row with equal spaces.
~~~`,
        hy: `## Ի՞նչ է տպանկարը

**Տպանկարը** նկար է, որը մի մակերեսից սեղմելով **փոխանցում** ենք թղթին։ Նկարիչները տպանկարներ են անում փայտով, մետաղով և քարով։ Մենք կսկսենք պարզերից։

## Մոնոտիպ՝ «մեկ տպանկար»

**Մոնո** նշանակում է «մեկ»։ Յուրաքանչյուր մոնոտիպ **եզակի** է, ստանում ես միայն մեկ լավ տպանկար։

1. Արագ նկարի՛ր թանձր գուաշով հարթ մակերեսին՝ պլաստիկ թղթապանակ, ապակի կամ սալիկ։
2. Վրան թուղթ դի՛ր և ափով մեղմ սեղմի՛ր։
3. Կամաց բարձրացրո՛ւ թուղթը։ Անակնկա՜լ։ Նկարը **հայելային** է և գեղեցիկ մակերես ունի։

**Թիթեռ-մոնոտիպ.** ծալած թերթի մի կեսին նկարի՛ր, ծալի՛ր, սեղմի՛ր և բացի՛ր։ Կստանաս համաչափ թիթեռ կամ անտառի արտացոլանք լճում։

~~~art
sketch mode=blot
Մոնոտիպիան նշանակում է մեկ տպանկար։ Նկարի՛ր ձախ կողմում, ծալի՛ր, և կստանաս տպանկար, որը երբեք չի կրկնվի։
~~~

## Տպում ենք բնությամբ և դրոշմներով

| Գործիք | Ինչպես |
|---|---|
| տերև 🍁 | ներկի՛ր ջղերով կողմը և սեղմի՛ր թղթին |
| կարտոֆիլի դրոշմ 🥔 | մեծահասակը կես կարտոֆիլի վրա պարզ ձև է կտրում, թաթախում ենք ներկի մեջ և տպում շարքերով |
| սպունգ | թփթփացնելով՝ ամպեր, թփեր, ձյուն |
| խցան, շշի կափարիչ | շրջաններ՝ հատապտուղներ, պղպջակներ, անիվներ |

Դրոշմով կարելի է ձևը կրկնել շատ անգամ՝ նախշ, եզրագիծ, ծաղկադաշտ։

~~~art
pic leaf-oak leaf-maple shell
Տերևները, խեցիները և կիսված կարտոֆիլը հիանալի կնիքներ են։
~~~

~~~art
pattern layout=grid rhythm=repeat motifs=leaf,flower,circle,drop
Կնիքը նույն ձևը նորից ու նորից է կրկնում։ Ստեղծի՛ր տպագիր նախշ։
~~~

## Անվտանգություն

Կարտոֆիլը կտրում է միայն մեծահասակը։ Սեղանը ծածկի՛ր թերթով։

~~~art
tasks
1. Ի՞նչ է նշանակում «մոնո»։
2. Ինչո՞ւ է մոնոտիպ նկարը հայելային։
3. Տերևի ո՞ր կողմն է ավելի լավ տպում։
4. Ինչո՞վ է լավ դրոշմը։
5. Արա՛ թիթեռ-մոնոտիպ։
6. Տպի՛ր աշնանային ծառ. նկարի՛ր բունը, իսկ սաղարթը տպի՛ր իսկական տերևներով։
7. Կարտոֆիլի կամ խցանի դրոշմով բացիկի համար եզրագիծ արա՛։
~~~

~~~art
hints
1. Մեկ։ 2. Որովհետև թուղթը դնում ենք ներկի վրա երեսով դեպի ներքև։ 3. Հետևի կողմը, որտեղ ջղերը դուրս են ցցված։ 4. Ձևը կարելի է շատ անգամ կրկնել։ 5. Երկու թևերը նույնն են՝ համաչափություն։ 6. Տերևները թողնում են ջղերով հետքեր։ 7. Ձևերը կրկնվում են շարքով՝ հավասար հեռավորությամբ։
~~~`,
        ru: `## Что такое оттиск?

**Оттиск** (печать) — изображение, которое **переносят** с одной поверхности на бумагу, прижимая её. Художники печатают с дерева, металла и камня. Мы начнём с простого.

## Монотипия: «один оттиск»

**Моно** значит «один»: каждая монотипия **единственная**, хороший оттиск получается только один.

1. Быстро нанеси густую гуашь на гладкую поверхность: пластиковый файл, стекло или плитку.
2. Положи сверху лист и мягко прижми ладонью.
3. Медленно сними лист. Сюрприз! Изображение **зеркальное**, с красивой фактурой.

**Монотипия-бабочка:** нанеси краску на одну половину сложенного листа, сложи, прижми и раскрой. Получится симметричная бабочка или отражение леса в озере.

~~~art
sketch mode=blot
Монотипия значит «один отпечаток». Рисуй слева, сложи лист — и получится оттиск, который не повторить.
~~~

## Печатаем природой и штампами

| Инструмент | Как |
|---|---|
| листок 🍁 | покрась сторону с прожилками и прижми к бумаге |
| штамп из картофеля 🥔 | взрослый вырезает простую фигуру на половинке картофелины; макаем в краску и печатаем рядами |
| губка | примакиванием: облака, кусты, снег |
| пробка, крышка | кружки: ягоды, пузыри, колёса |

Штамп позволяет повторить форму много раз: узор, бордюр, поле цветов.

~~~art
pic leaf-oak leaf-maple shell
Листья, ракушки и половинка картошки — отличные штампы.
~~~

~~~art
pattern layout=grid rhythm=repeat motifs=leaf,flower,circle,drop
Штамп повторяет одну форму снова и снова. Сделай узор оттисками.
~~~

## Безопасность

Картофель режет только взрослый. Застели стол газетой.

~~~art
tasks
1. Что значит «моно»?
2. Почему изображение в монотипии зеркальное?
3. Какой стороной листа печатать лучше?
4. Чем удобен штамп?
5. Сделай монотипию-бабочку.
6. Напечатай осеннее дерево: нарисуй ствол, а крону отпечатай настоящими листьями.
7. Штампом из картофеля или пробки сделай бордюр для открытки.
~~~

~~~art
hints
1. Один. 2. Потому что лист кладут на краску лицом вниз. 3. Обратной, где выступают прожилки. 4. Форму можно повторять много раз. 5. Оба крыла одинаковые: симметрия. 6. Листья оставляют отпечатки с прожилками. 7. Фигуры повторяются в ряд на равных расстояниях.
~~~`,
      },
      [
        q(t("«Mono» means…", "«Մոնո» նշանակում է…", "«Моно» значит…"), [t("many", "շատ", "много"), t("one", "մեկ", "один"), t("colour", "գույն", "цвет")], 1),
        q(t("A monotype print is…", "Մոնոտիպ տպանկարը…", "Оттиск монотипии…"), [t("mirrored", "հայելային է", "зеркальный"), t("always black", "միշտ սև է", "всегда чёрный"), t("exactly like the painting", "ճիշտ նկարի նման է", "точно как рисунок")], 0),
        q(t("Which side of a leaf do we paint?", "Տերևի ո՞ր կողմն ենք ներկում։", "Какую сторону листа красим?"), [t("the shiny front", "փայլուն առջևի", "блестящую лицевую"), t("the stem only", "միայն կոթունը", "только черешок"), t("the back with veins", "ջղերով հետևի կողմը", "обратную, с прожилками")], 2),
        q(t("A stamp is good for…", "Դրոշմը լավ է…", "Штамп удобен, чтобы…"), [t("repeating a shape many times", "ձևը շատ անգամ կրկնելու համար", "повторять форму много раз"), t("drawing thin lines", "բարակ գծեր նկարելու համար", "рисовать тонкие линии"), t("erasing", "ջնջելու համար", "стирать")], 0),
        q(t("Who cuts the potato stamp?", "Ո՞վ է կտրում կարտոֆիլի դրոշմը։", "Кто вырезает штамп из картофеля?"), [t("the youngest child", "ամենափոքր երեխան", "самый младший ребёнок"), t("an adult", "մեծահասակը", "взрослый"), t("nobody, we bite it", "ոչ ոք, ատամներով ենք անում", "никто, кусаем зубами")], 1),
        q(t("A folded-paper monotype gives…", "Ծալած թղթով մոնոտիպը տալիս է…", "Монотипия на сложенном листе даёт…"), [t("a straight line", "ուղիղ գիծ", "прямую линию"), t("a black square", "սև քառակուսի", "чёрный квадрат"), t("a symmetrical picture", "համաչափ նկար", "симметричное изображение")], 2),
      ],
    ),
    lesson(
      "collage-mixed",
      ["Collage and mixed media", "Կոլաժ և խառը տեխնիկա", "Коллаж и смешанная техника"],
      {
        en: ["Know what a collage is and what it can be made of", "Tear and cut paper, choose colours and textures, glue neatly", "Combine collage with paint or crayons in one picture"],
        hy: ["Իմանալ, թե ինչ է կոլաժը և ինչից կարող է պատրաստվել", "Պատռել և կտրել թուղթ, ընտրել գույներ և մակերեսներ, կոկիկ սոսնձել", "Մեկ նկարում միավորել կոլաժը ներկի կամ մատիտների հետ"],
        ru: ["Знать, что такое коллаж и из чего его делают", "Рвать и резать бумагу, подбирать цвета и фактуры, аккуратно клеить", "Совмещать в одной работе коллаж и краски или мелки"],
      },
      {
        en: `## What is a collage?

**Collage** (from French *coller*, «to glue») is a picture made by **gluing** pieces of different materials onto a base: coloured paper, newspaper, fabric, foil, leaves, threads.

The French artist **Henri Matisse** made famous pictures from paper he painted with gouache and then cut out with scissors. He called it «drawing with scissors».

~~~art
pic genre-abstract batik
~~~

## Cut or torn?

| Cut with scissors ✂️ | Torn by hand ✋ |
|---|---|
| sharp, exact edges | soft, fluffy edges |
| houses, cars, letters | clouds, trees, mountains, animals' fur |

## Materials and their «voice»

| Material | Good for |
|---|---|
| newspaper, magazine | a city, a wall with posters |
| foil | water, a fish, the moon |
| fabric | clothes, a carpet |
| corrugated cardboard | a roof, a fence |
| tissue paper | flowers, a stained-glass window |

## Mixed media

**Mixed media** means using several materials in one work: for example, a sky painted with watercolour, a house made of collage and windows drawn with felt-tip pen.

## Steps

1. Draw a light sketch on the base.
2. Prepare the pieces: big ones first.
3. Lay them out **without glue** and move them until you like the picture.
4. Glue from the back layer to the front: sky, mountains, houses, people.
5. Add details with paint or crayons.

~~~art
compose
Plan your collage: move the big pieces until the picture feels balanced, then glue.
~~~

~~~art
tasks
1. Where does the word «collage» come from?
2. Which artist said he was «drawing with scissors»?
3. What edges do torn pieces have?
4. Which material would you choose for water? For a roof?
5. Why do we lay out the pieces before gluing?
6. Make a torn-paper autumn tree.
7. Make a mixed-media picture «My street»: watercolour sky, paper houses, felt-tip details.
~~~

~~~art
hints
1. From the French «coller», to glue. 2. Henri Matisse. 3. Soft, uneven edges. 4. For example, foil for water; corrugated cardboard for a roof. 5. To find the best composition before it's too late to change. 6. The crown has soft edges; the trunk can be cut. 7. Check that at least three materials are used.
~~~`,
        hy: `## Ի՞նչ է կոլաժը

**Կոլաժը** (ֆրանսերեն *coller*՝ «սոսնձել») նկար է, որը ստեղծվում է հիմքի վրա տարբեր նյութերի կտորներ **սոսնձելով**՝ գունավոր թուղթ, թերթ, կտոր, փայլաթիթեղ, տերևներ, թելեր։

Ֆրանսիացի նկարիչ **Անրի Մատիսը** հայտնի նկարներ է ստեղծել թղթից, որը ներկում էր գուաշով և հետո կտրում մկրատով։ Նա դա անվանում էր «նկարել մկրատով»։

~~~art
pic genre-abstract batik
~~~

## Կտրա՞ծ, թե՞ պատռած

| Մկրատով կտրած ✂️ | Ձեռքով պատռած ✋ |
|---|---|
| սուր, ճշգրիտ եզրեր | փափուկ, փխրուն եզրեր |
| տներ, մեքենաներ, տառեր | ամպեր, ծառեր, լեռներ, կենդանիների մորթի |

## Նյութերը և նրանց «ձայնը»

| Նյութ | Հարմար է |
|---|---|
| թերթ, ամսագիր | քաղաք, ազդագրերով պատ |
| փայլաթիթեղ | ջուր, ձուկ, լուսին |
| կտոր | հագուստ, գորգ |
| ծալքավոր ստվարաթուղթ | տանիք, ցանկապատ |
| բարակ թուղթ | ծաղիկներ, վիտրաժ |

## Խառը տեխնիկա

**Խառը տեխնիկա** նշանակում է մեկ աշխատանքում օգտագործել մի քանի նյութ. օրինակ՝ ջրաներկով երկինք, կոլաժից տուն և ֆլոմաստերով պատուհաններ։

## Քայլեր

1. Հիմքի վրա թեթև էսքիզ արա՛։
2. Պատրաստի՛ր կտորները՝ սկզբում մեծերը։
3. Դասավորի՛ր **առանց սոսնձի** և տեղաշարժի՛ր, մինչև նկարը դուր գա։
4. Սոսնձի՛ր հետին շերտից դեպի առաջ՝ երկինք, լեռներ, տներ, մարդիկ։
5. Մանրուքներն ավելացրո՛ւ ներկով կամ մատիտներով։

~~~art
compose
Պլանավորի՛ր կոլաժդ․ տեղաշարժի՛ր մեծ կտորները, մինչև նկարը հավասարակշռված թվա, հետո սոսնձի՛ր։
~~~

~~~art
tasks
1. Որտեղի՞ց է «կոլաժ» բառը։
2. Ո՞ր նկարիչն էր ասում, որ «նկարում է մկրատով»։
3. Ինչպիսի՞ եզրեր ունեն պատռած կտորները։
4. Ո՞ր նյութը կընտրես ջրի համար։ Տանիքի համար։
5. Ինչո՞ւ ենք կտորները դասավորում սոսնձելուց առաջ։
6. Պատռած թղթից աշնանային ծառ պատրաստի՛ր։
7. Խառը տեխնիկայով պատրաստի՛ր «Իմ փողոցը»՝ ջրաներկ երկինք, թղթե տներ, ֆլոմաստերով մանրուքներ։
~~~

~~~art
hints
1. Ֆրանսերեն «coller»՝ սոսնձել։ 2. Անրի Մատիսը։ 3. Փափուկ, անհավասար եզրեր։ 4. Օրինակ՝ փայլաթիթեղ ջրի համար, ծալքավոր ստվարաթուղթ տանիքի համար։ 5. Որ լավագույն կոմպոզիցիան գտնենք, քանի դեռ կարելի է փոխել։ 6. Սաղարթը փափուկ եզրեր ունի, բունը կարելի է կտրել։ 7. Ստուգի՛ր, որ օգտագործված է առնվազն երեք նյութ։
~~~`,
        ru: `## Что такое коллаж?

**Коллаж** (от французского *coller* — «клеить») — изображение, созданное **наклеиванием** кусочков разных материалов на основу: цветной бумаги, газеты, ткани, фольги, листьев, ниток.

Французский художник **Анри Матисс** создавал знаменитые картины из бумаги, которую он раскрашивал гуашью, а потом вырезал ножницами. Он называл это «рисовать ножницами».

~~~art
pic genre-abstract batik
~~~

## Вырезать или рвать?

| Вырезать ножницами ✂️ | Рвать руками ✋ |
|---|---|
| острые, точные края | мягкие, пушистые края |
| дома, машины, буквы | облака, деревья, горы, мех животных |

## Материалы и их «голос»

| Материал | Подходит для |
|---|---|
| газета, журнал | город, стена с афишами |
| фольга | вода, рыба, луна |
| ткань | одежда, ковёр |
| гофрированный картон | крыша, забор |
| папиросная бумага | цветы, витраж |

## Смешанная техника

**Смешанная техника** — несколько материалов в одной работе: например, небо акварелью, дом из коллажа и окна фломастером.

## Шаги

1. Сделай лёгкий набросок на основе.
2. Подготовь кусочки: сначала большие.
3. Разложи их **без клея** и подвигай, пока картинка не понравится.
4. Клей от заднего плана к переднему: небо, горы, дома, люди.
5. Добавь детали красками или мелками.

~~~art
compose
Спланируй коллаж: двигай крупные кусочки, пока картинка не станет уравновешенной, потом клей.
~~~

~~~art
tasks
1. Откуда слово «коллаж»?
2. Какой художник говорил, что «рисует ножницами»?
3. Какие края у рваных кусочков?
4. Какой материал выберешь для воды? Для крыши?
5. Зачем раскладывать кусочки до наклеивания?
6. Сделай осеннее дерево из рваной бумаги.
7. Сделай в смешанной технике «Моя улица»: небо акварелью, дома из бумаги, детали фломастером.
~~~

~~~art
hints
1. От французского «coller» — клеить. 2. Анри Матисс. 3. Мягкие, неровные. 4. Например, фольга для воды; гофрированный картон для крыши. 5. Чтобы найти лучшую композицию, пока её можно изменить. 6. У кроны мягкие края, ствол можно вырезать. 7. Проверь, что использовано не меньше трёх материалов.
~~~`,
      },
      [
        q(t("Collage means a picture made by…", "Կոլաժը նկար է, որն ստեղծվում է…", "Коллаж — изображение, созданное…"), [t("gluing pieces of materials", "նյութերի կտորներ սոսնձելով", "наклеиванием кусочков материалов"), t("only pencil lines", "միայն մատիտի գծերով", "только карандашными линиями"), t("modelling clay", "կավ ծեփելով", "лепкой из глины")], 0),
        q(t("Who called his work «drawing with scissors»?", "Ո՞վ էր իր աշխատանքն անվանում «նկարել մկրատով»։", "Кто называл свою работу «рисованием ножницами»?"), [t("Aivazovsky", "Այվազովսկին", "Айвазовский"), t("Henri Matisse", "Անրի Մատիսը", "Анри Матисс"), t("Shishkin", "Շիշկինը", "Шишкин")], 1),
        q(t("Torn paper has…", "Պատռած թուղթն ունի…", "У рваной бумаги…"), [t("sharp exact edges", "սուր ճշգրիտ եզրեր", "острые точные края"), t("no edges", "եզրեր չունի", "нет краёв"), t("soft uneven edges", "փափուկ անհավասար եզրեր", "мягкие неровные края")], 2),
        q(t("Good material for the moon or water:", "Լավ նյութ լուսնի կամ ջրի համար՝", "Хороший материал для луны или воды:"), [t("foil", "փայլաթիթեղ", "фольга"), t("sand", "ավազ", "песок"), t("bark", "կեղև", "кора")], 0),
        q(t("What do we glue first?", "Ի՞նչն ենք սոսնձում սկզբում։", "Что наклеиваем первым?"), [t("the people in front", "առջևի մարդկանց", "людей на переднем плане"), t("the background, like the sky", "ֆոնը, օրինակ՝ երկինքը", "фон, например небо"), t("the signature", "ստորագրությունը", "подпись")], 1),
        q(t("Mixed media means…", "Խառը տեխնիկա նշանակում է…", "Смешанная техника — это…"), [t("mixing paints on a palette", "ներկապնակի վրա ներկեր խառնել", "смешивание красок на палитре"), t("drawing with your eyes closed", "փակ աչքերով նկարել", "рисование с закрытыми глазами"), t("several materials in one work", "մեկ աշխատանքում մի քանի նյութ", "несколько материалов в одной работе")], 2),
      ],
    ),
  ],
};
