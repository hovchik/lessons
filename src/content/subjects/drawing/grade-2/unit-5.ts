import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit5: UnitSeed = {
  title: t("Folk art and modelling", "Ժողովրդական արվեստ և ծեփում", "Народное искусство и лепка"),
  summary: t(
    "Armenian carpet patterns and khachkar motifs, Khokhloma and Gorodets painting, modelling clay animals, the matryoshka doll, and a review of the year.",
    "Հայկական գորգի նախշեր և խաչքարի մոտիվներ, խոխլոմա և գորոդեցյան նկարչություն, կավից կենդանիների ծեփում, մատրյոշկա, տարվա ամփոփում։",
    "Узоры армянского ковра и мотивы хачкаров, хохломская и городецкая роспись, лепка зверей из глины, матрёшка и повторение за год.",
  ),
  lessons: [
    lesson(
      "carpet-pattern",
      ["Armenian carpet patterns", "Հայկական գորգի նախշեր", "Узоры армянского ковра"],
      {
        en: ["Learn the parts of a carpet: field, central medallion and border", "Recognise simple carpet motifs: rhombus, star, eternity sign", "Design a symmetrical carpet on paper"],
        hy: ["Ծանոթանալ գորգի մասերին՝ դաշտ, կենտրոնական մեդալիոն և եզրագիծ", "Ճանաչել գորգի պարզ մոտիվները՝ շեղանկյուն, աստղ, հավերժության նշան", "Թղթի վրա ստեղծել համաչափ գորգ"],
        ru: ["Узнать части ковра: поле, центральный медальон и кайма", "Узнавать простые ковровые мотивы: ромб, звезда, знак вечности", "Придумать симметричный ковёр на бумаге"],
      },
      {
        en: `## Carpets: pictures you can walk on

For centuries Armenian women and men have woven carpets by hand, knot by knot. A carpet decorated the home, kept it warm and was often given as a wedding present. The patterns were not random: each shape had a meaning.

~~~art
pic carpet
~~~

## The parts of a carpet

| Part | Where | What it looks like |
|---|---|---|
| **field** | the big middle area | one main colour, often deep red |
| **medallion** | in the centre of the field | a large rhombus, star or octagon |
| **border** | the frame around the edge | a strip with a repeating small pattern |
| **corners** | the four corners of the field | a quarter of the medallion |

~~~art
palette armenian-carpet
~~~

## Favourite motifs

| Motif | Meaning |
|---|---|
| rhombus ◆ | the earth, a fertile field |
| eight-pointed star ✴ | light, the sun |
| eternity sign (a swirling wheel) | life that goes on forever |
| "dragon" shapes (vishap) | strength and protection; "dragon carpets" are famous |
| tree of life 🌳 | family and growth |

The famous red colour was made from a tiny insect, the **Ararat cochineal**, that lives in the Ararat valley.

~~~art
pic arevakhach eight-star ram-horns tree-of-life
~~~

## Symmetry again

A carpet is almost always **symmetrical**: the left half mirrors the right, the top mirrors the bottom. Fold your paper in four to find the centre and the middle lines.

## Task: design a carpet

1. Fold an A4 sheet in four, then open it.
2. Draw a frame for the border.
3. Draw a big rhombus in the centre as a medallion.
4. Put quarter-rhombuses in the corners.
5. Fill the border with a repeating motif: small rhombuses or stars.
6. Colour: red field, dark blue medallion, a little white and yellow for light.

~~~art
pattern layout=grid palettes=armenian motifs=rhombus,star,spiral,sun
~~~

~~~art
sketch mode=mirror paper=cream
Design a carpet: draw on one half, the other half mirrors itself.
~~~

~~~art
tasks
1. Name the three main parts of a carpet.
2. Where is the medallion?
3. What does the eight-pointed star mean?
4. What was the famous red dye made from?
5. Why do we fold the paper in four?
6. What motif will you put in the border?
7. Draw your carpet design.
~~~

~~~art
hints
1. Field, medallion and border. 2. In the centre of the field. 3. Light, the sun. 4. From a tiny insect, the Ararat cochineal. 5. To find the centre and make the pattern symmetrical. 6. For example, a row of small rhombuses. 7. Your design.
~~~`,
        hy: `## Գորգեր՝ նկարներ, որոնց վրայով կարելի է քայլել

Դարեր շարունակ հայ կանայք և տղամարդիկ ձեռքով, հանգույց առ հանգույց գորգեր են գործել։ Գորգը զարդարում էր տունը, տաքացնում այն և հաճախ նվիրվում էր հարսանիքին։ Նախշերը պատահական չէին՝ յուրաքանչյուր ձև իմաստ ուներ։

~~~art
pic carpet
~~~

## Գորգի մասերը

| Մաս | Որտեղ | Ինչպիսին է |
|---|---|---|
| **դաշտ** | մեծ միջին հատվածը | մեկ գլխավոր գույն, հաճախ մուգ կարմիր |
| **մեդալիոն** | դաշտի կենտրոնում | մեծ շեղանկյուն, աստղ կամ ութանկյուն |
| **եզրագիծ** | եզրի շրջանակը | կրկնվող մանր նախշով շերտ |
| **անկյուններ** | դաշտի չորս անկյունները | մեդալիոնի քառորդը |

~~~art
palette armenian-carpet
~~~

## Սիրված մոտիվներ

| Մոտիվ | Իմաստը |
|---|---|
| շեղանկյուն ◆ | երկիրը, բերքատու դաշտը |
| ութաթև աստղ ✴ | լույսը, արևը |
| հավերժության նշան (պտտվող անիվ) | անվերջ շարունակվող կյանքը |
| վիշապի ձևեր | ուժ և պաշտպանություն․ հայտնի են «վիշապագորգերը» |
| կենաց ծառ 🌳 | ընտանիք և աճ |

Հայտնի կարմիր գույնը ստանում էին փոքրիկ միջատից՝ **արարատյան որդան կարմիրից**, որն ապրում է Արարատյան դաշտում։

~~~art
pic arevakhach eight-star ram-horns tree-of-life
~~~

## Կրկին համաչափություն

Գորգը գրեթե միշտ **համաչափ** է․ ձախ կեսը կրկնում է աջը, վերևը՝ ներքևը։ Թուղթը ծալի՛ր չորս մասի, որ գտնես կենտրոնը և միջին գծերը։

## Առաջադրանք՝ նախագծի՛ր գորգ

1. A4 թերթը ծալի՛ր չորս մասի, հետո բաց արա։
2. Նկարի՛ր եզրագծի շրջանակը։
3. Կենտրոնում նկարի՛ր մեծ շեղանկյուն՝ մեդալիոն։
4. Անկյուններում դի՛ր շեղանկյան քառորդներ։
5. Եզրագիծը լցրո՛ւ կրկնվող մոտիվով՝ մանր շեղանկյուններ կամ աստղեր։
6. Գունավորի՛ր՝ կարմիր դաշտ, մուգ կապույտ մեդալիոն, մի քիչ սպիտակ և դեղին՝ լույսի համար։

~~~art
pattern layout=grid palettes=armenian motifs=rhombus,star,spiral,sun
~~~

~~~art
sketch mode=mirror paper=cream
Ձևավորի՛ր գորգ․ նկարի՛ր մի կեսում, մյուս կեսը կկրկնվի հայելու պես։
~~~

~~~art
tasks
1. Նշի՛ր գորգի երեք գլխավոր մասերը։
2. Որտե՞ղ է մեդալիոնը։
3. Ի՞նչ է նշանակում ութաթև աստղը։
4. Ինչի՞ց էին ստանում հայտնի կարմիր ներկը։
5. Ինչո՞ւ ենք թուղթը ծալում չորս մասի։
6. Ի՞նչ մոտիվ կդնես եզրագծում։
7. Նկարի՛ր քո գորգի նախագիծը։
~~~

~~~art
hints
1. Դաշտ, մեդալիոն և եզրագիծ։ 2. Դաշտի կենտրոնում։ 3. Լույսը, արևը։ 4. Փոքրիկ միջատից՝ արարատյան որդան կարմիրից։ 5. Որ գտնենք կենտրոնը և նախշը համաչափ ստացվի։ 6. Օրինակ՝ մանր շեղանկյունների շարք։ 7. Քո նախագիծը։
~~~`,
        ru: `## Ковёр — картина, по которой можно ходить

Веками армянские мастерицы и мастера ткали ковры вручную, узелок за узелком. Ковёр украшал дом, согревал его и часто дарился на свадьбу. Узоры были не случайными: каждая фигура что-то значила.

~~~art
pic carpet
~~~

## Части ковра

| Часть | Где | Как выглядит |
|---|---|---|
| **поле** | большая середина | один главный цвет, часто тёмно-красный |
| **медальон** | в центре поля | большой ромб, звезда или восьмиугольник |
| **кайма** | рамка по краю | полоса с повторяющимся мелким узором |
| **углы** | четыре угла поля | четверть медальона |

~~~art
palette armenian-carpet
~~~

## Любимые мотивы

| Мотив | Значение |
|---|---|
| ромб ◆ | земля, плодородное поле |
| восьмиконечная звезда ✴ | свет, солнце |
| знак вечности (вращающееся колесо) | жизнь, которая продолжается вечно |
| фигуры «драконов» (вишапов) | сила и защита; знамениты «драконовые ковры» |
| древо жизни 🌳 | семья и рост |

Знаменитый красный цвет получали из крошечного насекомого — **араратской кошенили**, которая живёт в Араратской долине.

~~~art
pic arevakhach eight-star ram-horns tree-of-life
~~~

## Снова симметрия

Ковёр почти всегда **симметричен**: левая половина повторяет правую, верх — низ. Сложи лист вчетверо, чтобы найти центр и средние линии.

## Задание: придумай ковёр

1. Сложи лист A4 вчетверо и разверни.
2. Нарисуй рамку для каймы.
3. В центре нарисуй большой ромб — медальон.
4. В углах помести четвертинки ромба.
5. Заполни кайму повторяющимся мотивом: маленькими ромбами или звёздочками.
6. Раскрась: красное поле, тёмно-синий медальон, немного белого и жёлтого для света.

~~~art
pattern layout=grid palettes=armenian motifs=rhombus,star,spiral,sun
~~~

~~~art
sketch mode=mirror paper=cream
Придумай ковёр: рисуй на одной половине, другая отразится зеркально.
~~~

~~~art
tasks
1. Назови три главные части ковра.
2. Где находится медальон?
3. Что означает восьмиконечная звезда?
4. Из чего получали знаменитую красную краску?
5. Зачем складывать лист вчетверо?
6. Какой мотив ты поместишь в кайму?
7. Нарисуй эскиз своего ковра.
~~~

~~~art
hints
1. Поле, медальон и кайма. 2. В центре поля. 3. Свет, солнце. 4. Из крошечного насекомого — араратской кошенили. 5. Чтобы найти центр и сделать узор симметричным. 6. Например, ряд маленьких ромбов. 7. Твой эскиз.
~~~`,
      },
      [
        q(t("The frame around the edge of a carpet is the…", "Գորգի եզրի շրջանակը…", "Рамка по краю ковра — это…"), [t("medallion", "մեդալիոնն է", "медальон"), t("border", "եզրագիծն է", "кайма"), t("field", "դաշտն է", "поле")], 1),
        q(t("The large shape in the centre of the field is the…", "Դաշտի կենտրոնի մեծ ձևը…", "Большая фигура в центре поля — это…"), [t("medallion", "մեդալիոնն է", "медальон"), t("corner", "անկյունն է", "угол"), t("fringe", "ծոպն է", "бахрома")], 0),
        q(t("The eight-pointed star in carpets means…", "Գորգերում ութաթև աստղը նշանակում է…", "Восьмиконечная звезда на коврах означает…"), [t("water", "ջուր", "воду"), t("night", "գիշեր", "ночь"), t("light, the sun", "լույս, արև", "свет, солнце")], 2),
        q(t("The famous red dye came from…", "Հայտնի կարմիր ներկը ստանում էին…", "Знаменитую красную краску получали из…"), [t("a tiny insect", "փոքրիկ միջատից", "крошечного насекомого"), t("red stones", "կարմիր քարերից", "красных камней"), t("tomatoes", "լոլիկից", "помидоров")], 0),
        q(t("Most carpets are…", "Գորգերի մեծ մասը…", "Большинство ковров…"), [t("without any pattern", "առանց նախշի են", "без узора"), t("symmetrical", "համաչափ են", "симметричны"), t("round", "կլոր են", "круглые")], 1),
        q(t("Carpets with dragon shapes are called…", "Վիշապի ձևերով գորգերը կոչվում են…", "Ковры с фигурами драконов называют…"), [t("star carpets", "աստղագորգեր", "звёздными"), t("garden carpets", "այգեգորգեր", "садовыми"), t("dragon carpets", "վիշապագորգեր", "драконовыми")], 2),
      ],
    ),
    lesson(
      "khachkar-motifs",
      ["Khachkar motifs", "Խաչքարի մոտիվներ", "Мотивы хачкаров"],
      {
        en: ["Learn what a khachkar is and how it is decorated", "Recognise the cross, the rosette, plant shoots and interlace", "Draw a simple khachkar-style ornament"],
        hy: ["Իմանալ, թե ինչ է խաչքարը և ինչպես է այն զարդարված", "Ճանաչել խաչը, վարդյակը, բուսական ընձյուղներն ու հյուսքը", "Նկարել խաչքարի ոճով պարզ զարդանախշ"],
        ru: ["Узнать, что такое хачкар и как он украшен", "Узнавать крест, розетку, ростки и плетёный узор", "Нарисовать простой орнамент в стиле хачкара"],
      },
      {
        en: `## Lace made of stone

A **khachkar** (Armenian: *khach* = cross, *kar* = stone) is a tall stone slab with a carved cross. Armenian masters have carved khachkars for more than a thousand years. The carving is so fine that people call it **"stone lace"**.

There are thousands of khachkars in Armenia. A famous place is the old cemetery of **Noratus**, near Lake Sevan, with hundreds of them. In 2010 the art of khachkars was added to UNESCO's list of the world's intangible cultural heritage.

~~~art
pic khachkar
~~~

## What do we see on a khachkar?

| Element | Where | What it looks like |
|---|---|---|
| **cross** | in the centre | ends of the arms often split into two curls |
| **rosette** or sun disc | under the cross | a circle with a whirling pattern |
| **shoots and leaves** | growing from the bottom of the cross | curling plant stems, like a tree of life |
| **interlace** | around the cross, in the frame | lines that weave over and under each other |
| **frame** | around everything | a border of knots or small crosses |

The cross that grows leaves means **life**: it is like a blossoming tree.

## How to draw interlace

1. Draw two wavy lines that cross each other many times.
2. At every crossing, decide which line goes **over**. Erase a little of the other line there.
3. Alternate: over, under, over, under.
4. Make the lines double (two parallel lines) so they look like ribbons.

~~~art
steps interlace
~~~

## Task: my khachkar

Draw a tall rectangle. Inside, draw a cross with curled ends, a rosette below it, two shoots with leaves growing from its foot, and a frame of interlace or small rhombuses. Use only one colour, like stone: grey, brown or terracotta pencil.

~~~art
sketch mode=mirror paper=cream
Your khachkar: a cross in the middle, a rosette below, an interlace border. Mirror mode keeps both sides equal.
~~~

~~~art
tasks
1. What do the two parts of the word "khachkar" mean?
2. Why is the carving called "stone lace"?
3. Where is the famous khachkar cemetery Noratus?
4. What usually grows from the foot of the cross?
5. What does a cross with leaves mean?
6. Explain how to draw interlace.
7. Draw your khachkar.
~~~

~~~art
hints
1. *Khach* = cross, *kar* = stone. 2. Because it is very fine and full of holes and patterns, like lace. 3. Near Lake Sevan. 4. Plant shoots with leaves. 5. Life, a blossoming tree. 6. Lines weave over and under each other at every crossing. 7. Your drawing.
~~~`,
        hy: `## Քարե ժանյակ

**Խաչքարը** բարձր քարե սալ է՝ փորագրված խաչով։ Հայ վարպետները խաչքարեր են քանդակում ավելի քան հազար տարի։ Փորագրությունն այնքան նուրբ է, որ այն անվանում են **«քարե ժանյակ»**։

Հայաստանում հազարավոր խաչքարեր կան։ Հայտնի վայր է Սևանա լճի մոտ գտնվող **Նորատուսի** հին գերեզմանատունը՝ հարյուրավոր խաչքարերով։ 2010 թվականին խաչքարի արվեստը ներառվեց ՅՈՒՆԵՍԿՕ-ի ոչ նյութական մշակութային ժառանգության ցանկում։

~~~art
pic khachkar
~~~

## Ի՞նչ ենք տեսնում խաչքարի վրա

| Տարր | Որտեղ | Ինչպիսին է |
|---|---|---|
| **խաչ** | կենտրոնում | թևերի ծայրերը հաճախ բաժանվում են երկու գալարի |
| **վարդյակ** կամ արևային սկավառակ | խաչի տակ | պտտվող նախշով շրջան |
| **ընձյուղներ և տերևներ** | խաչի հիմքից աճող | գալարվող բուսական ցողուններ, ինչպես կենաց ծառը |
| **հյուսք** | խաչի շուրջը, շրջանակում | գծեր, որոնք հյուսվում են իրար վրայով և տակով |
| **շրջանակ** | ամեն ինչի շուրջը | հանգույցների կամ փոքր խաչերի եզրագիծ |

Տերևներ արձակող խաչը նշանակում է **կյանք**․ այն նման է ծաղկող ծառի։

## Ինչպես նկարել հյուսք

1. Նկարի՛ր երկու ալիքաձև գիծ, որոնք շատ անգամ հատվում են։
2. Յուրաքանչյուր հատման տեղում որոշի՛ր, թե որ գիծն է անցնում **վերևով**։ Այնտեղ մյուս գծից մի քիչ ջնջի՛ր։
3. Հերթափոխի՛ր՝ վերևով, տակով, վերևով, տակով։
4. Գծերը կրկնակի դարձրո՛ւ (երկու զուգահեռ գիծ), որ ժապավենի նման լինեն։

~~~art
steps interlace
~~~

## Առաջադրանք՝ իմ խաչքարը

Նկարի՛ր բարձր ուղղանկյուն։ Ներսում նկարի՛ր գալարավոր ծայրերով խաչ, դրա տակ՝ վարդյակ, հիմքից աճող երկու տերևավոր ընձյուղ և հյուսքից կամ փոքր շեղանկյուններից շրջանակ։ Օգտագործի՛ր միայն մեկ գույն, ինչպես քարը՝ մոխրագույն, դարչնագույն կամ աղյուսագույն մատիտ։

~~~art
sketch mode=mirror paper=cream
Քո խաչքարը․ խաչ մեջտեղում, վարդյակ ներքևում, հյուսված եզրազարդ։ Հայելային ռեժիմը երկու կողմերը հավասար է պահում։
~~~

~~~art
tasks
1. Ի՞նչ են նշանակում «խաչքար» բառի երկու մասերը։
2. Ինչո՞ւ են փորագրությունն անվանում «քարե ժանյակ»։
3. Որտե՞ղ է գտնվում Նորատուսի հայտնի գերեզմանատունը։
4. Ի՞նչ է սովորաբար աճում խաչի հիմքից։
5. Ի՞նչ է նշանակում տերևներով խաչը։
6. Բացատրի՛ր, թե ինչպես նկարել հյուսք։
7. Նկարի՛ր քո խաչքարը։
~~~

~~~art
hints
1. Խաչ և քար։ 2. Որովհետև այն շատ նուրբ է, լի անցքերով և նախշերով, ինչպես ժանյակը։ 3. Սևանա լճի մոտ։ 4. Տերևավոր բուսական ընձյուղներ։ 5. Կյանք, ծաղկող ծառ։ 6. Գծերը յուրաքանչյուր հատման տեղում անցնում են իրար վրայով և տակով։ 7. Քո նկարը։
~~~`,
        ru: `## Каменное кружево

**Хачкар** (по-армянски *хач* — крест, *кар* — камень) — это высокая каменная плита с вырезанным крестом. Армянские мастера высекают хачкары больше тысячи лет. Резьба такая тонкая, что её называют **«каменным кружевом»**.

В Армении тысячи хачкаров. Знаменитое место — старое кладбище **Норатус** у озера Севан, где их сотни. В 2010 году искусство хачкаров включили в список нематериального культурного наследия ЮНЕСКО.

~~~art
pic khachkar
~~~

## Что мы видим на хачкаре?

| Элемент | Где | Как выглядит |
|---|---|---|
| **крест** | в центре | концы перекладин часто расходятся двумя завитками |
| **розетка** или солнечный диск | под крестом | круг с вращающимся узором |
| **ростки и листья** | растут из основания креста | вьющиеся стебли, как древо жизни |
| **плетёнка** | вокруг креста, в рамке | линии, переплетающиеся сверху и снизу друг друга |
| **рамка** | вокруг всего | кайма из узелков или маленьких крестиков |

Крест, из которого растут листья, означает **жизнь**: он похож на цветущее дерево.

## Как нарисовать плетёнку

1. Нарисуй две волнистые линии, которые много раз пересекаются.
2. На каждом пересечении реши, какая линия идёт **сверху**. Сотри там немного другую линию.
3. Чередуй: сверху, снизу, сверху, снизу.
4. Сделай линии двойными (две параллельные), чтобы они были похожи на ленточки.

~~~art
steps interlace
~~~

## Задание: мой хачкар

Нарисуй высокий прямоугольник. Внутри нарисуй крест с завитками на концах, под ним розетку, два ростка с листьями из его основания и рамку из плетёнки или маленьких ромбиков. Используй только один цвет, как у камня: серый, коричневый или терракотовый карандаш.

~~~art
sketch mode=mirror paper=cream
Твой хачкар: крест в центре, розетка внизу, плетёная рамка. Зеркальный режим делает стороны одинаковыми.
~~~

~~~art
tasks
1. Что означают две части слова «хачкар»?
2. Почему резьбу называют «каменным кружевом»?
3. Где находится знаменитое кладбище хачкаров Норатус?
4. Что обычно растёт из основания креста?
5. Что означает крест с листьями?
6. Объясни, как нарисовать плетёнку.
7. Нарисуй свой хачкар.
~~~

~~~art
hints
1. *Хач* — крест, *кар* — камень. 2. Потому что она очень тонкая, полная отверстий и узоров, как кружево. 3. У озера Севан. 4. Ростки с листьями. 5. Жизнь, цветущее дерево. 6. Линии на каждом пересечении проходят то сверху, то снизу друг друга. 7. Твой рисунок.
~~~`,
      },
      [
        q(t("\"Khachkar\" means…", "«Խաչքար» նշանակում է…", "«Хачкар» означает…"), [t("cross-stone", "խաչ և քար", "крест-камень"), t("red carpet", "կարմիր գորգ", "красный ковёр"), t("big house", "մեծ տուն", "большой дом")], 0),
        q(t("Khachkar carving is often called…", "Խաչքարի փորագրությունը հաճախ անվանում են…", "Резьбу хачкаров часто называют…"), [t("stone bread", "քարե հաց", "каменным хлебом"), t("stone lace", "քարե ժանյակ", "каменным кружевом"), t("stone rain", "քարե անձրև", "каменным дождём")], 1),
        q(t("Noratus, with hundreds of khachkars, is near…", "Նորատուսը՝ հարյուրավոր խաչքարերով, գտնվում է…", "Норатус с сотнями хачкаров находится у…"), [t("the Black Sea", "Սև ծովի մոտ", "Чёрного моря"), t("Mount Aragats", "Արագածի մոտ", "горы Арагац"), t("Lake Sevan", "Սևանա լճի մոտ", "озера Севан")], 2),
        q(t("What often grows from the foot of the cross?", "Ի՞նչ է հաճախ աճում խաչի հիմքից։", "Что часто растёт из основания креста?"), [t("shoots with leaves", "տերևավոր ընձյուղներ", "ростки с листьями"), t("fish", "ձկներ", "рыбы"), t("stars", "աստղեր", "звёзды")], 0),
        q(t("In interlace, the lines…", "Հյուսքում գծերը…", "В плетёнке линии…"), [t("never cross", "երբեք չեն հատվում", "никогда не пересекаются"), t("go over and under each other", "անցնում են իրար վրայով և տակով", "проходят друг над другом и под другом"), t("are all straight", "բոլորն ուղիղ են", "все прямые")], 1),
        q(t("In 2010 the art of khachkars was added to a list of…", "2010-ին խաչքարի արվեստը ներառվեց…", "В 2010 году искусство хачкаров включили в список…"), [t("sports", "սպորտաձևերի ցանկում", "видов спорта"), t("new inventions", "նոր գյուտերի ցանկում", "новых изобретений"), t("UNESCO intangible heritage", "ՅՈՒՆԵՍԿՕ-ի ոչ նյութական ժառանգության ցանկում", "нематериального наследия ЮНЕСКО")], 2),
      ],
    ),
    lesson(
      "khokhloma-gorodets",
      ["Khokhloma and Gorodets painting", "Խոխլոմա և գորոդեցյան նկարչություն", "Хохломская и городецкая роспись"],
      {
        en: ["Recognise Khokhloma and Gorodets painting by their colours and motifs", "Practise the basic brush strokes: grass curl, berry, leaf", "Decorate a paper plate or board in one of the styles"],
        hy: ["Ճանաչել խոխլոման և գորոդեցյան նկարչությունը իրենց գույներով և մոտիվներով", "Վարժվել վրձնի հիմնական հարվածներում՝ խոտի գալար, հատապտուղ, տերև", "Այդ ոճերից մեկով զարդարել թղթե ափսե կամ տախտակ"],
        ru: ["Узнавать хохломскую и городецкую роспись по цветам и мотивам", "Отработать основные мазки: травка, ягодка, листок", "Расписать бумажную тарелку или доску в одном из стилей"],
      },
      {
        en: `## Two Russian folk paintings

Along the Volga river, in the Nizhny Novgorod region, two famous kinds of painting were born. Both decorate **wooden** things, but they look very different.

| | Khokhloma | Gorodets |
|---|---|---|
| what is painted | wooden bowls, spoons, cups | boards, boxes, chairs, once the seats of spinning wheels |
| main colours | **gold**, red and black | bright backgrounds (yellow, red, blue) with pink, blue, white |
| motifs | berries (rowan, strawberry), leaves, curly "grass" | big roses, proud horses, roosters and birds, people |
| feeling | rich, shining, like a fairy-tale treasure | cheerful, festive, like a holiday |

~~~art
pic khokhloma-bowl gorodets-board
~~~

## The secret of Khokhloma gold

Khokhloma bowls shine like gold, but there is **no real gold** in them. Masters cover the wood with a silvery metal powder, paint the pattern, varnish it and heat it in an oven. The varnish turns yellow, and the silver begins to look like gold.

~~~art
palette khokhloma gorodets
~~~

## Basic strokes

| Stroke | How to paint it |
|---|---|
| **grass curl** | touch the paper with the tip, press, and lift while curving: a thin-thick-thin comma |
| **berry** | a round dot with the brush, a tiny white highlight on top |
| **leaf** | press the whole brush flat, then lift towards the tip |
| **Gorodets rose** | a coloured circle, then curved white strokes on top like petals |

Practise each stroke ten times in a row before you paint the real pattern.

~~~art
steps khokhloma-berry
~~~

## Task: a painted plate

Take a paper plate. Choose a style:

- **Khokhloma**: black or red background, a gold (yellow ochre) branch with red berries and curly grass.
- **Gorodets**: yellow background, two roses in the centre and green leaves around them, maybe a horse.

~~~art
sketch paper=black guide=circle
Paint a Khokhloma plate: a curling stem, red berries and golden leaves on black.
~~~

~~~art
tasks
1. Which three colours are typical for Khokhloma?
2. What things were decorated with Gorodets painting?
3. Is there real gold in Khokhloma? How do masters make it shine?
4. Name two Gorodets motifs.
5. How is a grass curl painted?
6. How do we show the shine on a berry?
7. Paint a plate in one of the styles.
~~~

~~~art
hints
1. Gold, red and black. 2. Boards, boxes, chairs and the seats of spinning wheels. 3. No: silvery powder, varnish and oven heat make it look gold. 4. For example, roses and horses. 5. Touch with the tip, press, lift while curving. 6. With a tiny white highlight on top. 7. Your plate.
~~~`,
        hy: `## Ռուսական երկու ժողովրդական նկարչություն

Վոլգա գետի ափին, Նիժնի Նովգորոդի մարզում, ծնվել են նկարչության երկու հայտնի տեսակներ։ Երկուսն էլ զարդարում են **փայտե** իրեր, բայց շատ տարբեր տեսք ունեն։

| | Խոխլոմա | Գորոդեց |
|---|---|---|
| ինչն են նկարազարդում | փայտե ամաններ, գդալներ, բաժակներ | տախտակներ, տուփեր, աթոռներ, ժամանակին՝ ճախարակի նստատեղեր |
| գլխավոր գույներ | **ոսկեգույն**, կարմիր և սև | վառ ֆոն (դեղին, կարմիր, կապույտ)՝ վարդագույնով, կապույտով, սպիտակով |
| մոտիվներ | հատապտուղներ (արոսենի, ելակ), տերևներ, գանգուր «խոտ» | մեծ վարդեր, հպարտ ձիեր, աքլորներ և թռչուններ, մարդիկ |
| զգացողություն | հարուստ, փայլուն, ինչպես հեքիաթային գանձ | ուրախ, տոնական, ինչպես տոն |

~~~art
pic khokhloma-bowl gorodets-board
~~~

## Խոխլոմայի ոսկու գաղտնիքը

Խոխլոմայի ամանները ոսկու պես փայլում են, բայց դրանցում **իսկական ոսկի չկա**։ Վարպետները փայտը ծածկում են արծաթափայլ մետաղի փոշով, նկարում նախշը, պատում լաքով և տաքացնում վառարանում։ Լաքը դեղնում է, և արծաթը սկսում է ոսկու պես երևալ։

~~~art
palette khokhloma gorodets
~~~

## Հիմնական հարվածներ

| Հարված | Ինչպես նկարել |
|---|---|
| **խոտի գալար** | թղթին դիպչի՛ր ծայրով, սեղմի՛ր և թեքելով բարձրացրո՛ւ՝ բարակ-հաստ-բարակ ստորակետ |
| **հատապտուղ** | վրձնով կլոր կետ, վերևում փոքրիկ սպիտակ փայլ |
| **տերև** | սեղմի՛ր ամբողջ վրձինը, հետո բարձրացրո՛ւ դեպի ծայրը |
| **գորոդեցյան վարդ** | գունավոր շրջան, հետո վրան կոր սպիտակ հարվածներ՝ թերթիկների պես |

Իսկական նախշը նկարելուց առաջ յուրաքանչյուր հարվածը տասն անգամ անընդմեջ վարժեցրո՛ւ։

~~~art
steps khokhloma-berry
~~~

## Առաջադրանք՝ նկարազարդված ափսե

Վերցրո՛ւ թղթե ափսե։ Ընտրի՛ր ոճը․

- **Խոխլոմա**՝ սև կամ կարմիր ֆոն, ոսկեգույն (դեղին օխրա) ճյուղ՝ կարմիր հատապտուղներով և գանգուր խոտով։
- **Գորոդեց**՝ դեղին ֆոն, կենտրոնում երկու վարդ, շուրջը կանաչ տերևներ, գուցե նաև ձի։

~~~art
sketch paper=black guide=circle
Նկարի՛ր Խոխլոմայի ափսե․ ոլորվող ցողուն, կարմիր հատապտուղներ և ոսկե տերևներ սևի վրա։
~~~

~~~art
tasks
1. Ո՞ր երեք գույներն են բնորոշ խոխլոմային։
2. Ի՞նչ իրեր էին զարդարում գորոդեցյան նկարչությամբ։
3. Խոխլոմայում իսկական ոսկի կա՞։ Ինչպե՞ս են վարպետները փայլ ստանում։
4. Նշի՛ր գորոդեցյան երկու մոտիվ։
5. Ինչպե՞ս է նկարվում խոտի գալարը։
6. Ինչպե՞ս ենք ցույց տալիս հատապտղի փայլը։
7. Նկարազարդի՛ր ափսե ոճերից մեկով։
~~~

~~~art
hints
1. Ոսկեգույն, կարմիր և սև։ 2. Տախտակներ, տուփեր, աթոռներ և ճախարակի նստատեղեր։ 3. Ոչ․ արծաթափայլ փոշին, լաքը և վառարանի ջերմությունը ոսկու տեսք են տալիս։ 4. Օրինակ՝ վարդեր և ձիեր։ 5. Դիպչել ծայրով, սեղմել, թեքելով բարձրացնել։ 6. Վերևում փոքրիկ սպիտակ փայլով։ 7. Քո ափսեն։
~~~`,
        ru: `## Две русские народные росписи

На Волге, в Нижегородской области, родились две знаменитые росписи. Обе украшают **деревянные** вещи, но выглядят совсем по-разному.

| | Хохлома | Городец |
|---|---|---|
| что расписывают | деревянные миски, ложки, чашки | доски, шкатулки, стулья, раньше — донца прялок |
| главные цвета | **золото**, красный и чёрный | яркий фон (жёлтый, красный, синий) с розовым, голубым, белым |
| мотивы | ягоды (рябина, земляника), листья, кудрявая «травка» | крупные розаны, гордые кони, петухи и птицы, люди |
| настроение | богато, блестяще, как сказочный клад | весело, нарядно, как праздник |

~~~art
pic khokhloma-bowl gorodets-board
~~~

## Секрет хохломского золота

Хохломские миски сияют, как золото, но **настоящего золота** в них нет. Мастера покрывают дерево серебристым металлическим порошком, рисуют узор, покрывают лаком и нагревают в печи. Лак желтеет, и серебро начинает выглядеть как золото.

~~~art
palette khokhloma gorodets
~~~

## Основные мазки

| Мазок | Как рисовать |
|---|---|
| **травинка-завиток** | коснись кончиком, нажми и подними, закругляя: тонко-толсто-тонко, как запятая |
| **ягодка** | круглый отпечаток кисти, сверху крошечный белый блик |
| **листок** | приложи кисть всем ворсом, потом подними к кончику |
| **городецкий розан** | цветной круг, сверху изогнутые белые мазки, как лепестки |

Перед настоящим узором повтори каждый мазок по десять раз подряд.

~~~art
steps khokhloma-berry
~~~

## Задание: расписная тарелка

Возьми бумажную тарелку. Выбери стиль:

- **Хохлома**: чёрный или красный фон, золотая (жёлтая охра) веточка с красными ягодами и кудрявой травкой.
- **Городец**: жёлтый фон, два розана в центре, вокруг зелёные листья, может быть, конь.

~~~art
sketch paper=black guide=circle
Распиши хохломскую тарелку: вьющийся стебель, красные ягоды и золотые листья на чёрном.
~~~

~~~art
tasks
1. Какие три цвета типичны для хохломы?
2. Какие вещи украшали городецкой росписью?
3. Есть ли в хохломе настоящее золото? Как мастера добиваются блеска?
4. Назови два городецких мотива.
5. Как рисуется травинка-завиток?
6. Как показать блеск ягодки?
7. Распиши тарелку в одном из стилей.
~~~

~~~art
hints
1. Золотой, красный и чёрный. 2. Доски, шкатулки, стулья и донца прялок. 3. Нет: серебристый порошок, лак и жар печи придают вид золота. 4. Например, розаны и кони. 5. Коснуться кончиком, нажать, поднять, закругляя. 6. Крошечным белым бликом сверху. 7. Твоя тарелка.
~~~`,
      },
      [
        q(t("Khokhloma's main colours are gold, red and…", "Խոխլոմայի գլխավոր գույներն են ոսկեգույնը, կարմիրը և…", "Главные цвета хохломы: золото, красный и…"), [t("black", "սևը", "чёрный"), t("green", "կանաչը", "зелёный"), t("purple", "մանուշակագույնը", "фиолетовый")], 0),
        q(t("Khokhloma is painted mostly on…", "Խոխլոմայով հիմնականում նկարազարդում են…", "Хохломой расписывают в основном…"), [t("glass bottles", "ապակե շշեր", "стеклянные бутылки"), t("wooden bowls and spoons", "փայտե ամաններ և գդալներ", "деревянные миски и ложки"), t("paper books", "թղթե գրքեր", "бумажные книги")], 1),
        q(t("Typical Gorodets motifs are…", "Գորոդեցյան բնորոշ մոտիվներն են…", "Типичные городецкие мотивы —"), [t("snowflakes and webs", "փաթիլներ և սարդոստայն", "снежинки и паутинки"), t("cars and planes", "մեքենաներ և ինքնաթիռներ", "машины и самолёты"), t("roses, horses and roosters", "վարդեր, ձիեր և աքլորներ", "розаны, кони и петухи")], 2),
        q(t("Khokhloma looks golden because of…", "Խոխլոման ոսկեգույն է թվում…", "Хохлома кажется золотой благодаря…"), [t("silvery powder, varnish and oven heat", "արծաթափայլ փոշու, լաքի և վառարանի ջերմության շնորհիվ", "серебристому порошку, лаку и жару печи"), t("real gold leaf only", "միայն իսկական ոսկու թերթիկի շնորհիվ", "только настоящему сусальному золоту"), t("yellow paper", "դեղին թղթի շնորհիվ", "жёлтой бумаге")], 0),
        q(t("A small white dot on a berry shows…", "Հատապտղի վրա փոքրիկ սպիտակ կետը ցույց է տալիս…", "Маленькая белая точка на ягодке показывает…"), [t("a hole", "անցք", "дырку"), t("shine", "փայլ", "блеск"), t("snow", "ձյուն", "снег")], 1),
        q(t("Both paintings come from the region of…", "Երկու նկարչություններն էլ ծագել են…", "Обе росписи родом из…"), [t("Moscow city", "Մոսկվա քաղաքից", "города Москвы"), t("the Black Sea coast", "Սև ծովի ափից", "побережья Чёрного моря"), t("Nizhny Novgorod on the Volga", "Վոլգայի ափին գտնվող Նիժնի Նովգորոդի մարզից", "Нижегородской области на Волге")], 2),
      ],
    ),
    lesson(
      "clay-animals",
      ["Modelling clay animals", "Կավից կենդանիների ծեփում", "Лепим зверей из глины"],
      {
        en: ["Model an animal from one piece and from parts", "Join parts firmly by smoothing the seams", "Learn about the Dymkovo toy and paint a clay animal with its patterns"],
        hy: ["Կենդանի ծեփել մեկ կտորից և մասերից", "Մասերը ամուր միացնել՝ հարթեցնելով կարերը", "Ծանոթանալ դիմկովյան խաղալիքին և կավե կենդանուն նկարազարդել նրա նախշերով"],
        ru: ["Лепить зверя из целого куска и из частей", "Прочно соединять части, заглаживая швы", "Познакомиться с дымковской игрушкой и расписать глиняного зверя её узорами"],
      },
      {
        en: `## Clay: the oldest toy material

People have modelled clay for thousands of years: pots, jugs, huge Armenian wine jars called **karas**, and toys for children. Clay is soft when wet and becomes hard when it dries or is fired in a kiln.

You can use clay or plasticine for this lesson.

~~~art
pic plasticine karas
~~~

## Two ways to model

| Way | How | Good for |
|---|---|---|
| **from one piece** | pull out the head, legs and tail from a single lump, pinching and stretching | strong, simple animals: a cat, a pig, a bear |
| **from parts** | roll separate balls and sausages, then join them | animals with many details: a horse, a rooster |

## Joining parts so they do not fall off

1. Press the two parts together firmly.
2. **Smooth the seam** with a wet finger or a stick, pulling a little clay from one part onto the other.
3. Thin parts (legs, necks) should be short and thick, or they will break.

## Basic forms

| Form | How to make it | Becomes |
|---|---|---|
| ball ⚪ | roll between the palms in circles | head, body of a pig |
| sausage | roll back and forth on the table | legs, tail, neck |
| flat cake | press a ball flat | ears, wings |
| drop | roll one end of a ball thinner | a bird's body, a beak |

~~~art
pic shapes
~~~

## The Dymkovo toy

In the village of Dymkovo, near the city of Kirov in Russia, craftswomen model clay toys: ladies, horses, turkeys, goats. After firing, the toys are painted **white**, then decorated with bright **circles, dots, stripes, wavy lines and checks** in red, blue, yellow and green.

~~~art
pic dymkovo filimonovo
~~~

## Task: my clay animal

Model an animal you like, either from one piece or from parts. When it is dry, paint it white and decorate it with Dymkovo-style patterns. If you use plasticine, add the patterns with thin coloured sausages and dots.

~~~art
steps horse
~~~

~~~art
tasks
1. What happens to clay when it is fired?
2. What is a karas?
3. Name the two ways of modelling.
4. How do we join parts so they hold?
5. Which basic form is good for legs?
6. Name three typical Dymkovo patterns.
7. Model and decorate your animal.
~~~

~~~art
hints
1. It becomes hard. 2. A huge Armenian clay jar for wine. 3. From one piece and from parts. 4. Press them together and smooth the seam. 5. A sausage. 6. For example, circles, dots and wavy lines. 7. Your animal.
~~~`,
        hy: `## Կավ՝ խաղալիքների ամենահին նյութը

Մարդիկ հազարավոր տարիներ կավից ծեփել են՝ ամաններ, կժեր, գինու հսկա հայկական **կարասներ** և երեխաների համար խաղալիքներ։ Թաց կավը փափուկ է, իսկ չորանալիս կամ վառարանում թրծվելիս կարծրանում է։

Այս դասին կարող ես օգտագործել կավ կամ պլաստիլին։

~~~art
pic plasticine karas
~~~

## Ծեփելու երկու եղանակ

| Եղանակ | Ինչպես | Ինչի համար է լավ |
|---|---|---|
| **մեկ կտորից** | մեկ գնդից դուրս ձգի՛ր գլուխը, ոտքերը և պոչը՝ ճմլելով և ձգելով | ամուր, պարզ կենդանիներ՝ կատու, խոզ, արջ |
| **մասերից** | գլորի՛ր առանձին գնդիկներ և գլանիկներ, հետո միացրո՛ւ | շատ մանրամասներով կենդանիներ՝ ձի, աքլոր |

## Մասերը միացնել այնպես, որ չընկնեն

1. Երկու մասերն ամուր սեղմի՛ր իրար։
2. **Հարթեցրո՛ւ կարը** թաց մատով կամ փայտիկով՝ մի մասից մի քիչ կավ քաշելով մյուսի վրա։
3. Բարակ մասերը (ոտքեր, պարանոց) պետք է կարճ և հաստ լինեն, թե չէ կկոտրվեն։

## Հիմնական ձևեր

| Ձև | Ինչպես ստանալ | Ինչ է դառնում |
|---|---|---|
| գունդ ⚪ | ափերի միջև շրջանաձև գլորի՛ր | գլուխ, խոզի մարմին |
| գլանիկ | սեղանին առաջ ու հետ գլորի՛ր | ոտքեր, պոչ, պարանոց |
| տափակ բլիթ | գունդը սեղմի՛ր տափակ | ականջներ, թևեր |
| կաթիլ | գնդի մի ծայրը գլորելով բարակեցրո՛ւ | թռչնի մարմին, կտուց |

~~~art
pic shapes
~~~

## Դիմկովյան խաղալիք

Ռուսաստանի Կիրով քաղաքի մոտ գտնվող Դիմկովո գյուղում վարպետուհիները կավից խաղալիքներ են ծեփում՝ տիկնայք, ձիեր, հնդկահավեր, այծեր։ Թրծելուց հետո խաղալիքները ներկում են **սպիտակ**, հետո զարդարում վառ **շրջաններով, կետերով, շերտերով, ալիքաձև գծերով և վանդակներով**՝ կարմիր, կապույտ, դեղին և կանաչ գույներով։

~~~art
pic dymkovo filimonovo
~~~

## Առաջադրանք՝ իմ կավե կենդանին

Ծեփի՛ր քեզ դուր եկող կենդանի՝ մեկ կտորից կամ մասերից։ Երբ չորանա, ներկի՛ր սպիտակ և զարդարի՛ր դիմկովյան ոճի նախշերով։ Եթե պլաստիլին ես օգտագործում, նախշերն ավելացրո՛ւ բարակ գունավոր գլանիկներով և կետերով։

~~~art
steps horse
~~~

~~~art
tasks
1. Ի՞նչ է լինում կավի հետ, երբ այն թրծում են։
2. Ի՞նչ է կարասը։
3. Նշի՛ր ծեփելու երկու եղանակը։
4. Ինչպե՞ս ենք միացնում մասերը, որ ամուր մնան։
5. Ո՞ր հիմնական ձևն է հարմար ոտքերի համար։
6. Նշի՛ր դիմկովյան երեք բնորոշ նախշ։
7. Ծեփի՛ր և զարդարի՛ր քո կենդանուն։
~~~

~~~art
hints
1. Կարծրանում է։ 2. Գինու համար հսկա հայկական կավե աման։ 3. Մեկ կտորից և մասերից։ 4. Սեղմում ենք իրար և հարթեցնում կարը։ 5. Գլանիկը։ 6. Օրինակ՝ շրջաններ, կետեր և ալիքաձև գծեր։ 7. Քո կենդանին։
~~~`,
        ru: `## Глина — самый древний материал для игрушек

Люди лепят из глины тысячи лет: горшки, кувшины, огромные армянские винные кувшины — **карасы**, и игрушки для детей. Мокрая глина мягкая, а высохнув или после обжига в печи становится твёрдой.

На этом уроке можно использовать глину или пластилин.

~~~art
pic plasticine karas
~~~

## Два способа лепки

| Способ | Как | Для чего хорош |
|---|---|---|
| **из целого куска** | вытягиваем голову, лапы и хвост из одного комка, прищипывая и оттягивая | крепкие простые звери: кошка, поросёнок, медведь |
| **из частей** | скатываем отдельные шары и колбаски, потом соединяем | звери со многими деталями: конь, петух |

## Соединяем части, чтобы не отвалились

1. Плотно прижми две части друг к другу.
2. **Загладь шов** мокрым пальцем или стекой, перетягивая немного глины с одной части на другую.
3. Тонкие части (ноги, шея) делай короткими и толстыми, иначе сломаются.

## Основные формы

| Форма | Как получить | Чем становится |
|---|---|---|
| шар ⚪ | катаем между ладонями по кругу | голова, тело поросёнка |
| колбаска | катаем по столу вперёд-назад | ноги, хвост, шея |
| лепёшка | сплющиваем шар | уши, крылья |
| капля | раскатываем один конец шара тоньше | тело птицы, клюв |

~~~art
pic shapes
~~~

## Дымковская игрушка

В слободе Дымково возле города Кирова мастерицы лепят глиняные игрушки: барынь, коней, индюков, козликов. После обжига игрушки белят, а потом расписывают яркими **кругами, точками, полосками, волнистыми линиями и клеточками** красного, синего, жёлтого и зелёного цвета.

~~~art
pic dymkovo filimonovo
~~~

## Задание: мой глиняный зверь

Вылепи любимое животное — из целого куска или из частей. Когда оно высохнет, побели его и распиши дымковскими узорами. Если лепишь из пластилина, узоры сделай тонкими цветными колбасками и точками.

~~~art
steps horse
~~~

~~~art
tasks
1. Что происходит с глиной при обжиге?
2. Что такое карас?
3. Назови два способа лепки.
4. Как соединять части, чтобы они держались?
5. Какая основная форма подойдёт для ног?
6. Назови три типичных дымковских узора.
7. Вылепи и распиши своего зверя.
~~~

~~~art
hints
1. Она становится твёрдой. 2. Огромный армянский глиняный кувшин для вина. 3. Из целого куска и из частей. 4. Прижать друг к другу и загладить шов. 5. Колбаска. 6. Например, круги, точки и волнистые линии. 7. Твой зверь.
~~~`,
      },
      [
        q(t("Fired clay becomes…", "Թրծված կավը դառնում է…", "После обжига глина становится…"), [t("hard", "կարծր", "твёрдой"), t("liquid", "հեղուկ", "жидкой"), t("invisible", "անտեսանելի", "невидимой")], 0),
        q(t("A karas is…", "Կարասը…", "Карас — это…"), [t("a kind of brush", "վրձնի տեսակ է", "вид кисти"), t("a huge Armenian clay jar", "հսկա հայկական կավե աման է", "огромный армянский глиняный кувшин"), t("a carpet border", "գորգի եզրագիծ է", "кайма ковра")], 1),
        q(t("To join two clay parts firmly we…", "Կավե երկու մասերն ամուր միացնելու համար…", "Чтобы прочно соединить две части, мы…"), [t("just touch them lightly", "պարզապես թեթև դիպցնում ենք", "просто слегка касаемся"), t("put them in water", "դնում ենք ջրի մեջ", "кладём в воду"), t("press and smooth the seam", "սեղմում և հարթեցնում ենք կարը", "прижимаем и заглаживаем шов")], 2),
        q(t("Which form is good for legs and tails?", "Ո՞ր ձևն է հարմար ոտքերի և պոչերի համար։", "Какая форма подходит для ног и хвостов?"), [t("a sausage", "գլանիկ", "колбаска"), t("a flat cake", "տափակ բլիթ", "лепёшка"), t("a cube", "խորանարդ", "кубик")], 0),
        q(t("Dymkovo toys are first painted…", "Դիմկովյան խաղալիքներն սկզբում ներկում են…", "Дымковские игрушки сначала покрывают…"), [t("black", "սև", "чёрным"), t("white", "սպիտակ", "белым"), t("gold", "ոսկեգույն", "золотом")], 1),
        q(t("Thin clay legs should be…", "Կավե բարակ ոտքերը պետք է լինեն…", "Тонкие глиняные ноги должны быть…"), [t("very long and thin", "շատ երկար և բարակ", "очень длинными и тонкими"), t("made of paper", "թղթից", "из бумаги"), t("short and thick", "կարճ և հաստ", "короткими и толстыми")], 2),
      ],
    ),
    lesson(
      "matryoshka",
      ["The matryoshka doll", "Մատրյոշկա", "Матрёшка"],
      {
        en: ["Learn the story of the matryoshka nesting doll", "Learn the parts of a matryoshka's decoration: face, scarf, apron", "Design your own family of three matryoshkas"],
        hy: ["Ծանոթանալ մատրյոշկա տիկնիկի պատմությանը", "Իմանալ մատրյոշկայի զարդարման մասերը՝ դեմք, գլխաշոր, գոգնոց", "Ստեղծել երեք մատրյոշկաներից բաղկացած քո ընտանիքը"],
        ru: ["Узнать историю матрёшки", "Узнать части росписи матрёшки: лицо, платок, фартук", "Придумать свою семью из трёх матрёшек"],
      },
      {
        en: `## A doll with a surprise inside

A **matryoshka** is a wooden doll that opens in the middle. Inside is a smaller doll, inside that one an even smaller one, and so on, down to a tiny baby that does not open.

The first Russian matryoshka was made at the end of the 19th century. It was carved by the turner **Vasily Zvyozdochkin** and painted by the artist **Sergey Malyutin**. It had **eight** dolls: a girl with a rooster, then smaller sisters and brothers, and a baby.

The name comes from **Matryona**, a popular old Russian woman's name.

~~~art
pic matryoshka
~~~

## How a matryoshka is painted

| Part | What is painted |
|---|---|
| **face** | round, rosy cheeks, small mouth, big eyes |
| **scarf** (headscarf) | bright colour with a border of dots or flowers |
| **sarafan** (dress) | one main colour |
| **apron** | the biggest decorated area: a bunch of flowers, berries, or a little picture |
| **hands** | often holding a flower, a basket or a bird |

## Different towns, different styles

| Town | Style |
|---|---|
| Sergiev Posad | strict, simple, often with a scarf and an apron, things in hands |
| Semyonov | bright, with a big bunch of flowers on the apron |
| Polkhovsky Maidan | flowers like roses, painted with bold outlines |

## Drawing a matryoshka

1. Draw the outline: a small circle on top of a bigger rounded shape, like a snowman whose middle is pinched in.
2. Draw the oval of the face and the line of the scarf around it.
3. Draw a big oval apron on the front.
4. Colour the scarf and dress, then paint flowers on the apron.
5. Add rosy cheeks last.

~~~art
steps matryoshka
~~~

## Task: a matryoshka family

Draw three matryoshkas in a row: big, middle and small. Give them the same style, but different flowers on the aprons, so they look like one family.

~~~art
sketch
Paint a matryoshka family: each doll smaller than the one before, each with her own apron flower.
~~~

~~~art
tasks
1. What is special about a matryoshka?
2. When was the first Russian matryoshka made?
3. How many dolls did the first matryoshka have?
4. Where does the name "matryoshka" come from?
5. What is the biggest decorated area of the doll?
6. What is typical for the Semyonov matryoshka?
7. Draw a family of three matryoshkas.
~~~

~~~art
hints
1. It opens, and smaller dolls are hidden inside. 2. At the end of the 19th century. 3. Eight. 4. From the old Russian name Matryona. 5. The apron. 6. A big bunch of flowers on the apron. 7. Your drawing.
~~~`,
        hy: `## Տիկնիկ՝ ներսում անակնկալով

**Մատրյոշկան** փայտե տիկնիկ է, որը բացվում է մեջտեղից։ Ներսում ավելի փոքր տիկնիկ է, դրա մեջ՝ ավելի փոքրը, և այդպես շարունակ՝ մինչև փոքրիկ մանուկը, որը չի բացվում։

Առաջին ռուսական մատրյոշկան պատրաստվել է 19-րդ դարի վերջին։ Այն խառատել է **Վասիլի Զվյոզդոչկինը**, իսկ նկարազարդել՝ նկարիչ **Սերգեյ Մալյուտինը**։ Այն ուներ **ութ** տիկնիկ՝ աղջիկ աքլորով, հետո ավելի փոքր քույրեր ու եղբայրներ և մանուկ։

Անունը գալիս է **Մատրյոնա** անունից, որը հին ռուսական տարածված կանացի անուն է։

~~~art
pic matryoshka
~~~

## Ինչպես են նկարազարդում մատրյոշկան

| Մաս | Ինչ են նկարում |
|---|---|
| **դեմք** | կլոր, վարդագույն այտեր, փոքրիկ բերան, մեծ աչքեր |
| **գլխաշոր** | վառ գույն՝ կետերից կամ ծաղիկներից եզրագծով |
| **սարաֆան** (զգեստ) | մեկ գլխավոր գույն |
| **գոգնոց** | ամենամեծ զարդարված մասը՝ ծաղկեփունջ, հատապտուղներ կամ փոքրիկ նկար |
| **ձեռքեր** | հաճախ բռնած են ծաղիկ, զամբյուղ կամ թռչուն |

## Տարբեր քաղաքներ՝ տարբեր ոճեր

| Քաղաք | Ոճ |
|---|---|
| Սերգիև Պոսադ | խիստ, պարզ, հաճախ գլխաշորով և գոգնոցով, ձեռքին ինչ-որ բան |
| Սեմյոնով | վառ, գոգնոցին մեծ ծաղկեփնջով |
| Պոլխովսկի Մայդան | վարդանման ծաղիկներ՝ հաստ եզրագծերով |

## Ինչպես նկարել մատրյոշկա

1. Նկարի՛ր ուրվագիծը՝ փոքր շրջան ավելի մեծ կլորացված ձևի վրա, ինչպես ձնեմարդ, որի մեջտեղը սեղմված է։
2. Նկարի՛ր դեմքի օվալը և դրա շուրջը գլխաշորի գիծը։
3. Առջևում նկարի՛ր մեծ օվալաձև գոգնոց։
4. Գունավորի՛ր գլխաշորը և զգեստը, հետո գոգնոցին ծաղիկներ նկարի՛ր։
5. Վերջում ավելացրո՛ւ վարդագույն այտերը։

~~~art
steps matryoshka
~~~

## Առաջադրանք՝ մատրյոշկաների ընտանիք

Նկարի՛ր երեք մատրյոշկա շարքով՝ մեծ, միջին և փոքր։ Նրանց տուր նույն ոճը, բայց գոգնոցներին տարբեր ծաղիկներ նկարի՛ր, որ մեկ ընտանիքի նման լինեն։

~~~art
sketch
Նկարի՛ր մատրյոշկաների ընտանիք․ ամեն տիկնիկ նախորդից փոքր է՝ իր գոգնոցի ծաղկով։
~~~

~~~art
tasks
1. Ինչո՞վ է առանձնահատուկ մատրյոշկան։
2. Ե՞րբ է պատրաստվել առաջին ռուսական մատրյոշկան։
3. Քանի՞ տիկնիկ ուներ առաջին մատրյոշկան։
4. Որտեղի՞ց է գալիս «մատրյոշկա» անունը։
5. Ո՞րն է տիկնիկի ամենամեծ զարդարված մասը։
6. Ի՞նչն է բնորոշ սեմյոնովյան մատրյոշկային։
7. Նկարի՛ր երեք մատրյոշկաներից բաղկացած ընտանիք։
~~~

~~~art
hints
1. Այն բացվում է, և ներսում ավելի փոքր տիկնիկներ են թաքնված։ 2. 19-րդ դարի վերջին։ 3. Ութ։ 4. Հին ռուսական Մատրյոնա անունից։ 5. Գոգնոցը։ 6. Գոգնոցին մեծ ծաղկեփունջ։ 7. Քո նկարը։
~~~`,
        ru: `## Кукла с сюрпризом внутри

**Матрёшка** — деревянная кукла, которая открывается посередине. Внутри кукла поменьше, в ней ещё меньше и так далее, до крошечного малыша, который не открывается.

Первая русская матрёшка появилась в конце XIX века. Её выточил токарь **Василий Звёздочкин**, а расписал художник **Сергей Малютин**. В ней было **восемь** кукол: девочка с петухом, потом сёстры и братья поменьше и младенец.

Название происходит от имени **Матрёна** — старинного распространённого русского женского имени.

~~~art
pic matryoshka
~~~

## Как расписывают матрёшку

| Часть | Что рисуют |
|---|---|
| **лицо** | круглое, румяные щёки, маленький рот, большие глаза |
| **платок** | яркий цвет с каймой из точек или цветочков |
| **сарафан** | один главный цвет |
| **фартук** | самая большая расписная часть: букет, ягоды или маленькая картинка |
| **руки** | часто держат цветок, корзинку или птичку |

## Разные города — разные стили

| Город | Стиль |
|---|---|
| Сергиев Посад | строгая, простая, часто с платком и фартуком, с предметом в руках |
| Семёнов | яркая, с большим букетом на фартуке |
| Полховский Майдан | цветы-розаны с чёткой обводкой |

## Как нарисовать матрёшку

1. Нарисуй контур: маленький круг на большой округлой фигуре, как снеговик с перехватом посередине.
2. Нарисуй овал лица и вокруг него линию платка.
3. Спереди нарисуй большой овальный фартук.
4. Раскрась платок и сарафан, потом нарисуй цветы на фартуке.
5. В конце добавь румяные щёки.

~~~art
steps matryoshka
~~~

## Задание: семья матрёшек

Нарисуй в ряд три матрёшки: большую, среднюю и маленькую. Сделай их в одном стиле, но с разными цветами на фартуках, чтобы было видно, что это одна семья.

~~~art
sketch
Нарисуй семью матрёшек: каждая меньше предыдущей и со своим цветком на фартуке.
~~~

~~~art
tasks
1. Чем необычна матрёшка?
2. Когда появилась первая русская матрёшка?
3. Сколько кукол было в первой матрёшке?
4. Откуда название «матрёшка»?
5. Какая часть куклы расписана больше всего?
6. Что характерно для семёновской матрёшки?
7. Нарисуй семью из трёх матрёшек.
~~~

~~~art
hints
1. Она открывается, а внутри спрятаны куклы поменьше. 2. В конце XIX века. 3. Восемь. 4. От старинного русского имени Матрёна. 5. Фартук. 6. Большой букет на фартуке. 7. Твой рисунок.
~~~`,
      },
      [
        q(t("Inside a matryoshka there are…", "Մատրյոշկայի ներսում կան…", "Внутри матрёшки находятся…"), [t("smaller dolls", "ավելի փոքր տիկնիկներ", "куклы поменьше"), t("sweets only", "միայն կոնֆետներ", "только конфеты"), t("nothing", "ոչինչ", "ничего")], 0),
        q(t("The first Russian matryoshka had…", "Առաջին ռուսական մատրյոշկան ուներ…", "В первой русской матрёшке было…"), [t("three dolls", "երեք տիկնիկ", "три куклы"), t("eight dolls", "ութ տիկնիկ", "восемь кукол"), t("twenty dolls", "քսան տիկնիկ", "двадцать кукол")], 1),
        q(t("Who painted the first matryoshka?", "Ո՞վ է նկարազարդել առաջին մատրյոշկան։", "Кто расписал первую матрёшку?"), [t("Ivan Aivazovsky", "Իվան Այվազովսկին", "Иван Айвазовский"), t("Martiros Saryan", "Մարտիրոս Սարյանը", "Мартирос Сарьян"), t("Sergey Malyutin", "Սերգեյ Մալյուտինը", "Сергей Малютин")], 2),
        q(t("The name comes from the woman's name…", "Անունը գալիս է կանացի…", "Название происходит от женского имени…"), [t("Matryona", "Մատրյոնա անունից", "Матрёна"), t("Maria", "Մարիա անունից", "Мария"), t("Marina", "Մարինա անունից", "Марина")], 0),
        q(t("The biggest decorated area of a matryoshka is the…", "Մատրյոշկայի ամենամեծ զարդարված մասը…", "Самая большая расписная часть матрёшки —"), [t("back", "մեջքն է", "спина"), t("apron", "գոգնոցն է", "фартук"), t("bottom", "հատակն է", "донышко")], 1),
        q(t("A matryoshka with a big bunch of flowers on the apron is typical for…", "Գոգնոցին մեծ ծաղկեփնջով մատրյոշկան բնորոշ է…", "Матрёшка с большим букетом на фартуке типична для…"), [t("Khokhloma", "Խոխլոմային", "Хохломы"), t("Dymkovo", "Դիմկովոյին", "Дымково"), t("Semyonov", "Սեմյոնովին", "Семёнова")], 2),
      ],
    ),
    lesson(
      "year-2-review",
      ["Review of the year", "Տարվա ամփոփում", "Повторение за год"],
      {
        en: ["Remember the materials, colour ideas and drawing rules learned this year", "Recognise folk art and fairy-tale illustration styles", "Make a final picture that uses at least three things learned this year"],
        hy: ["Հիշել այս տարի սովորած նյութերը, գույնի գաղափարները և նկարելու կանոնները", "Ճանաչել ժողովրդական արվեստի և հեքիաթային նկարազարդման ոճերը", "Ստեղծել ամփոփիչ նկար, որում օգտագործված է այս տարվա առնվազն երեք բան"],
        ru: ["Вспомнить материалы, законы цвета и правила рисования, изученные за год", "Узнавать стили народного искусства и сказочной иллюстрации", "Создать итоговую работу, используя не меньше трёх изученных приёмов"],
      },
      {
        en: `## What we learned this year

| Unit | Key ideas |
|---|---|
| Materials and techniques | gouache: three colours and white; watercolour wet on wet and wet on dry; pastel and wax resist; lines with character; monotype and prints; collage |
| Colour and mood | loud and quiet colours; light and dark; colours of feelings; the moods of the sea and the sky; rhythm of lines and spots |
| Drawing from nature | still life with fruit; studying leaves; drawing a toy; placing the picture on the page; proportions of birds; small forms of nature |
| Reality and fantasy | illustrating a Tumanyan tale and a Russian tale; good and evil heroes; invented creatures; patterns of nature; a dream house |
| Folk art and modelling | carpet patterns; khachkar motifs; Khokhloma and Gorodets; clay animals; the matryoshka |

~~~art
pic gouache watercolour pastel ink
~~~

## Quick memory check

| Question | Answer |
|---|---|
| How do we make a colour quieter? | add white, grey or a drop of its opposite colour |
| Wet on wet gives… | soft, blurry edges, like fog |
| A monotype is… | a single print from a painted smooth surface |
| Good heroes have… | round shapes, warm light colours |
| A snowflake has… | six arms, symmetrical |
| Khokhloma colours are… | gold, red and black |
| To join clay parts we… | press them and smooth the seam |

~~~art
mixer
~~~

## Final project: "My favourite tale in folk style"

Choose a fairy tale you love. Draw one scene from it, and use **at least three things** from this year. For example:

- a sky painted **wet on wet** for the background;
- a good and an evil hero shown with **shapes and colours**;
- a **border** around the picture with a carpet or Khokhloma pattern.

Then look at your first drawings from September. Compare them. What have you learned to do better?

~~~art
sketch guide=frame
My favourite tale in folk style: a scene framed by an ornament border.
~~~

~~~art
tasks
1. Name three painting or drawing materials we used this year.
2. What are the three colours (plus white) of the gouache lesson?
3. Which colour is the opposite of blue?
4. Why do we leave space around the object when placing it on the page?
5. Name an Armenian and a Russian folk art we studied.
6. What is a carpet's medallion?
7. Make your final project.
~~~

~~~art
hints
1. For example, gouache, watercolour, pastel. 2. Red, yellow and blue. 3. Orange. 4. So that it does not touch the edges and looks comfortable on the sheet. 5. For example, khachkars and the matryoshka. 6. The big shape in the centre of the field. 7. Your project.
~~~`,
        hy: `## Ինչ սովորեցինք այս տարի

| Բաժին | Գլխավոր գաղափարներ |
|---|---|
| Նյութեր և տեխնիկաներ | գուաշ՝ երեք գույն և սպիտակ, ջրաներկ թաց թղթի և չոր թղթի վրա, պաստել և մոմի կախարդանք, բնավորությամբ գծեր, մոնոտիպ և տպագրություն, կոլաժ |
| Գույն և տրամադրություն | աղմկոտ և հանգիստ գույներ, լույս և մութ, զգացմունքների գույներ, ծովի և երկնքի տրամադրությունները, գծերի և բծերի ռիթմ |
| Նկարչություն բնությունից | մրգերով նատյուրմորտ, տերևների ուսումնասիրություն, խաղալիքի նկարում, նկարի տեղադրումը թերթի վրա, թռչունների համամասնություններ, բնության մանր ձևեր |
| Իրականություն և երևակայություն | Թումանյանի և ռուսական հեքիաթների նկարազարդում, բարի և չար հերոսներ, հորինված արարածներ, բնության նախշեր, երազանքների տուն |
| Ժողովրդական արվեստ և ծեփում | գորգի նախշեր, խաչքարի մոտիվներ, խոխլոմա և գորոդեց, կավե կենդանիներ, մատրյոշկա |

~~~art
pic gouache watercolour pastel ink
~~~

## Արագ ստուգում

| Հարց | Պատասխան |
|---|---|
| Ինչպե՞ս հանգստացնել գույնը | ավելացնել սպիտակ, մոխրագույն կամ մի կաթիլ հակադիր գույն |
| Թաց թղթի վրա նկարելը տալիս է… | մեղմ, լղոզված եզրեր, ինչպես մառախուղը |
| Մոնոտիպը… | ներկված հարթ մակերեսից միակ տպվածքն է |
| Բարի հերոսներն ունեն… | կլոր ձևեր, տաք բաց գույներ |
| Ձյան փաթիլն ունի… | վեց թև, համաչափ է |
| Խոխլոմայի գույներն են… | ոսկեգույն, կարմիր և սև |
| Կավե մասերը միացնելու համար… | սեղմում և հարթեցնում ենք կարը |

~~~art
mixer
~~~

## Ամփոփիչ աշխատանք՝ «Իմ սիրած հեքիաթը ժողովրդական ոճով»

Ընտրի՛ր քո սիրած հեքիաթը։ Նկարի՛ր դրանից մեկ տեսարան և օգտագործի՛ր այս տարվա **առնվազն երեք բան**։ Օրինակ՝

- ֆոնի համար **թաց թղթի վրա** նկարված երկինք,
- **ձևերով և գույներով** ցույց տրված բարի և չար հերոս,
- նկարի շուրջը գորգի կամ խոխլոմայի նախշով **եզրագիծ**։

Հետո նայի՛ր սեպտեմբերի քո առաջին նկարներին։ Համեմատի՛ր։ Ի՞նչն ես սովորել ավելի լավ անել։

~~~art
sketch guide=frame
Իմ սիրելի հեքիաթը ժողովրդական ոճով՝ տեսարան զարդանախշ շրջանակում։
~~~

~~~art
tasks
1. Նշի՛ր այս տարի օգտագործած երեք նյութ։
2. Որո՞նք են գուաշի դասի երեք գույները (և սպիտակը)։
3. Ո՞ր գույնն է կապույտի հակադիրը։
4. Ինչո՞ւ ենք առարկայի շուրջը տեղ թողնում թերթի վրա տեղադրելիս։
5. Նշի՛ր մեր ուսումնասիրած մեկ հայկական և մեկ ռուսական ժողովրդական արվեստ։
6. Ի՞նչ է գորգի մեդալիոնը։
7. Կատարի՛ր ամփոփիչ աշխատանքը։
~~~

~~~art
hints
1. Օրինակ՝ գուաշ, ջրաներկ, պաստել։ 2. Կարմիր, դեղին և կապույտ։ 3. Նարնջագույնը։ 4. Որպեսզի այն չդիպչի եզրերին և հարմար տեղավորվի թերթի վրա։ 5. Օրինակ՝ խաչքարերը և մատրյոշկան։ 6. Դաշտի կենտրոնի մեծ ձևը։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Чему мы научились за год

| Раздел | Главное |
|---|---|
| Материалы и техники | гуашь: три цвета и белила; акварель по сырому и по сухому; пастель и восковые мелки; линии с характером; монотипия и печать; коллаж |
| Цвет и настроение | звонкие и тихие цвета; светлое и тёмное; цвета чувств; настроения моря и неба; ритм линий и пятен |
| Рисование с натуры | натюрморт с фруктами; изучение листьев; рисуем игрушку; размещение на листе; пропорции птиц; малые формы природы |
| Реальность и фантазия | иллюстрации к сказке Туманяна и русской сказке; добрые и злые герои; придуманные существа; узоры природы; дом мечты |
| Народное искусство и лепка | ковровые узоры; мотивы хачкаров; хохлома и городец; глиняные звери; матрёшка |

~~~art
pic gouache watercolour pastel ink
~~~

## Быстрая проверка

| Вопрос | Ответ |
|---|---|
| Как сделать цвет тише? | добавить белила, серый или каплю противоположного цвета |
| Письмо по сырому даёт… | мягкие, размытые края, как туман |
| Монотипия — это… | единственный оттиск с расписанной гладкой поверхности |
| У добрых героев… | круглые формы, тёплые светлые цвета |
| У снежинки… | шесть лучей, она симметрична |
| Цвета хохломы… | золото, красный и чёрный |
| Чтобы соединить части из глины… | прижимаем и заглаживаем шов |

~~~art
mixer
~~~

## Итоговая работа: «Моя любимая сказка в народном стиле»

Выбери любимую сказку. Нарисуй из неё одну сцену и используй **не меньше трёх приёмов** этого года. Например:

- небо на фоне, написанное **по сырому**;
- добрый и злой герой, показанные **формой и цветом**;
- **кайма** вокруг рисунка с ковровым или хохломским узором.

Потом посмотри на свои первые сентябрьские рисунки. Сравни. Что ты научился делать лучше?

~~~art
sketch guide=frame
Моя любимая сказка в народном стиле: сцена в узорной рамке.
~~~

~~~art
tasks
1. Назови три материала, которыми мы работали в этом году.
2. Какие три цвета (и белила) были на уроке гуаши?
3. Какой цвет противоположен синему?
4. Зачем оставлять место вокруг предмета при размещении на листе?
5. Назови одно армянское и одно русское народное искусство, которые мы изучали.
6. Что такое медальон ковра?
7. Выполни итоговую работу.
~~~

~~~art
hints
1. Например, гуашь, акварель, пастель. 2. Красный, жёлтый и синий. 3. Оранжевый. 4. Чтобы он не касался краёв и удобно размещался на листе. 5. Например, хачкары и матрёшка. 6. Большая фигура в центре поля. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Which colour is the opposite of red?", "Ո՞ր գույնն է կարմիրի հակադիրը։", "Какой цвет противоположен красному?"), [t("green", "կանաչը", "зелёный"), t("yellow", "դեղինը", "жёлтый"), t("blue", "կապույտը", "синий")], 0),
        q(t("Painting wet on wet gives…", "Թաց թղթի վրա նկարելը տալիս է…", "Письмо по сырому даёт…"), [t("sharp hard edges", "սուր, կոշտ եզրեր", "резкие жёсткие края"), t("soft, blurry edges", "մեղմ, լղոզված եզրեր", "мягкие размытые края"), t("no colour at all", "ոչ մի գույն", "никакого цвета")], 1),
        q(t("A monotype gives…", "Մոնոտիպը տալիս է…", "Монотипия даёт…"), [t("a hundred identical copies", "հարյուր նույնական օրինակ", "сто одинаковых копий"), t("a clay figure", "կավե արձանիկ", "глиняную фигурку"), t("a single print", "միակ տպվածք", "единственный оттиск")], 2),
        q(t("A carved stone cross with lace-like ornament is a…", "Ժանյակի պես զարդանախշով փորագրված քարե խաչը…", "Каменный крест с узором, похожим на кружево, — это…"), [t("khachkar", "խաչքար է", "хачкар"), t("matryoshka", "մատրյոշկա է", "матрёшка"), t("monotype", "մոնոտիպ է", "монотипия")], 0),
        q(t("Gold, red and black on a wooden bowl is…", "Փայտե ամանի վրա ոսկեգույն, կարմիր և սև գույները…", "Золото, красный и чёрный на деревянной миске — это…"), [t("Gorodets", "գորոդեց է", "городец"), t("Khokhloma", "խոխլոմա է", "хохлома"), t("Dymkovo", "դիմկովո է", "дымка")], 1),
        q(t("The final project should use…", "Ամփոփիչ աշխատանքում պետք է օգտագործել…", "В итоговой работе нужно использовать…"), [t("only a pencil", "միայն մատիտ", "только карандаш"), t("only one colour", "միայն մեկ գույն", "только один цвет"), t("at least three things learned this year", "այս տարի սովորածից առնվազն երեք բան", "не меньше трёх изученных приёмов")], 2),
      ],
    ),
  ],
};
