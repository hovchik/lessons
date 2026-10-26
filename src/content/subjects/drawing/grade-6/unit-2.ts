import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("The world of things: still life", "Իրերի աշխարհը․ նատյուրմորտ", "Мир наших вещей. Натюрморт"),
  summary: t(
    "The history of still life, construction of objects, light and shade, perspective of round objects, still life in pencil and in colour.",
    "Նատյուրմորտի պատմությունը, առարկաների կառուցումը, լույս և ստվեր, կլոր առարկաների հեռանկարը, նատյուրմորտ մատիտով և գույնով։",
    "История натюрморта, конструкция предметов, свет и тень, перспектива круглых предметов, натюрморт в графике и в цвете.",
  ),
  lessons: [
    lesson(
      "still-life-history",
      ["Still life through the centuries", "Նատյուրմորտը դարերի միջով", "Натюрморт в истории искусства"],
      {
        en: ["Follow the history of still life from the Dutch masters to the 20th century", "Understand that objects can tell about people and their time", "Compose a still life that tells a story about its owner"],
        hy: ["Հետևել նատյուրմորտի պատմությանը հոլանդացի վարպետներից մինչև 20-րդ դար", "Հասկանալ, որ առարկաները կարող են պատմել մարդկանց և նրանց ժամանակի մասին", "Կազմել նատյուրմորտ, որը պատմություն է պատմում իր տիրոջ մասին"],
        ru: ["Проследить историю натюрморта от голландцев до XX века", "Понимать, что вещи рассказывают о людях и их времени", "Составить натюрморт, который рассказывает о своём хозяине"],
      },
      {
        en: `## "Still life"

The word **still life** (in French *nature morte*) means a picture of objects that do not move: fruit, flowers, dishes, books, instruments. The artist **chooses and arranges** them himself or herself, so a still life is like a small theatre of things.

~~~art
pic genre-still-life
~~~

## A short history

| Time | Artists | What is special |
|---|---|---|
| **17th century, Holland** | Willem Claesz Heda, Willem Kalf | "breakfasts" with glass, silver and lemons painted so exactly that they seem real; objects had hidden meanings (a burnt-out candle reminds that life passes) |
| **18th century, France** | Jean-Baptiste Chardin | simple kitchen things, quiet and warm |
| **19th century, France** | Paul Cézanne | apples and jugs built like solid geometric forms; he was interested in the **construction** of objects |
| **20th century, Russia** | Ilya Mashkov, Pyotr Konchalovsky, Kuzma Petrov-Vodkin | bright, joyful still lifes with bread, fruit, lilacs; Petrov-Vodkin's «Morning Still Life» (1918) |
| **20th century, Armenia** | Martiros Saryan | flowers and fruits of Armenia in hot, pure colours |

## Things tell stories

Objects show **who** lives with them and **when**. A violin and notes speak about a musician; a compass and old maps about a traveller; a samovar about a Russian home; a copper coffee pot, lavash and pomegranates about an Armenian table. A still life can also have a **mood**: festive, calm, sad.

~~~art
pic apple pomegranate karas feather
Things tell stories: a feather for a poet, a jug for a home, a pomegranate for Armenia.
~~~

## Compose a "portrait through objects"

1. Choose a person: a scientist, a grandmother, a football player, yourself.
2. Choose 4–6 objects that tell about that person.
3. Choose a cloth and a background that support the mood.
4. Arrange the objects: one is the main one, others are grouped around it; some are in front, some behind.
5. Make a quick sketch of the arrangement.

~~~art
compose
~~~

~~~art
tasks
1. What does the French name *nature morte* mean?
2. Why is a still life like a small theatre?
3. What did the burnt-out candle mean in Dutch still lifes?
4. What interested Cézanne in objects?
5. Name a Russian and an Armenian master of still life.
6. Which objects would tell about a traveller? About an Armenian home?
7. Compose and sketch a still life "Portrait of a musician".
~~~

~~~art
hints
1. "Dead nature": objects that do not move. 2. The artist chooses and arranges the "actors" himself or herself. 3. That life passes. 4. Their construction, their solid geometric form. 5. For example: Mashkov or Petrov-Vodkin; Saryan. 6. A compass, maps, a backpack; a copper coffee pot, lavash, pomegranates, a carpet. 7. Your sketch.
~~~`,
        hy: `## «Նատյուրմորտ»

**Նատյուրմորտ** (ֆրանսերեն *nature morte*) բառը նշանակում է չշարժվող առարկաների պատկեր՝ մրգեր, ծաղիկներ, ամաններ, գրքեր, գործիքներ։ Նկարիչը դրանք ինքն է **ընտրում և դասավորում**, ուստի նատյուրմորտն իրերի փոքրիկ թատրոնի պես է։

~~~art
pic genre-still-life
~~~

## Համառոտ պատմություն

| Ժամանակ | Նկարիչներ | Ինչն է առանձնահատուկ |
|---|---|---|
| **17-րդ դար, Հոլանդիա** | Վիլեմ Կլաս Հեդա, Վիլեմ Կալֆ | «նախաճաշեր» ապակով, արծաթով և կիտրոններով, այնքան ճշգրիտ նկարված, որ իրական են թվում, առարկաները թաքնված իմաստ ունեին (այրված մոմը հիշեցնում է, որ կյանքն անցնում է) |
| **18-րդ դար, Ֆրանսիա** | Ժան Բատիստ Շարդեն | պարզ խոհանոցային իրեր, հանդարտ և ջերմ |
| **19-րդ դար, Ֆրանսիա** | Պոլ Սեզան | խնձորներ և սափորներ՝ կառուցված ամուր երկրաչափական ձևերի պես, նրան հետաքրքրում էր առարկաների **կառուցվածքը** |
| **20-րդ դար, Ռուսաստան** | Իլյա Մաշկով, Պյոտր Կոնչալովսկի, Կուզմա Պետրով-Վոդկին | վառ, ուրախ նատյուրմորտներ՝ հացով, մրգերով, եղրևանիով, Պետրով-Վոդկինի «Առավոտյան նատյուրմորտը» (1918) |
| **20-րդ դար, Հայաստան** | Մարտիրոս Սարյան | Հայաստանի ծաղիկներն ու մրգերը տաք, մաքուր գույներով |

## Իրերը պատմում են

Առարկաները ցույց են տալիս, թե **ով** է ապրում նրանց հետ և **երբ**։ Ջութակը և նոտաները խոսում են երաժշտի մասին, կողմնացույցն ու հին քարտեզները՝ ճանապարհորդի, սամովարը՝ ռուսական տան, պղնձե սրճեփը, լավաշն ու նռները՝ հայկական սեղանի մասին։ Նատյուրմորտը կարող է ունենալ նաև **տրամադրություն**՝ տոնական, հանդարտ, տխուր։

~~~art
pic apple pomegranate karas feather
Իրերը պատմություններ են պատմում․ փետուր՝ բանաստեղծի համար, սափոր՝ տան համար, նուռ՝ Հայաստանի համար։
~~~

## Կազմիր «դիմանկար առարկաներով»

1. Ընտրիր մարդ՝ գիտնական, տատիկ, ֆուտբոլիստ, ինքդ։
2. Ընտրիր 4–6 առարկա, որոնք պատմում են այդ մարդու մասին։
3. Ընտրիր կտոր և ֆոն, որոնք աջակցում են տրամադրությանը։
4. Դասավորիր առարկաները․ մեկը գլխավորն է, մյուսները խմբավորված են նրա շուրջը, որոշներն առջևում են, որոշները՝ ետևում։
5. Արա դասավորության արագ ուրվանկար։

~~~art
compose
~~~

~~~art
tasks
1. Ինչ է նշանակում ֆրանսերեն *nature morte* անվանումը։
2. Ինչու է նատյուրմորտը փոքր թատրոնի նման։
3. Ինչ էր նշանակում այրված մոմը հոլանդական նատյուրմորտներում։
4. Ինչն էր Սեզանին հետաքրքրում առարկաներում։
5. Անվանիր նատյուրմորտի մեկ ռուս և մեկ հայ վարպետ։
6. Որ առարկաները կպատմեն ճանապարհորդի մասին։ Իսկ հայկական տան մասին։
7. Կազմիր և ուրվանկարիր «Երաժշտի դիմանկարը» նատյուրմորտը։
~~~

~~~art
hints
1. «Մեռած բնություն»՝ չշարժվող առարկաներ։ 2. Նկարիչն ինքն է ընտրում և դասավորում «դերասաններին»։ 3. Որ կյանքն անցնում է։ 4. Նրանց կառուցվածքը, ամուր երկրաչափական ձևը։ 5. Օրինակ՝ Մաշկով կամ Պետրով-Վոդկին, Սարյան։ 6. Կողմնացույց, քարտեզներ, ուսապարկ, պղնձե սրճեփ, լավաշ, նռներ, գորգ։ 7. Քո ուրվանկարը։
~~~`,
        ru: `## «Натюрморт»

Слово **натюрморт** (по-французски *nature morte*) означает изображение неподвижных предметов: фруктов, цветов, посуды, книг, инструментов. Художник сам **выбирает и расставляет** их, поэтому натюрморт похож на маленький театр вещей.

~~~art
pic genre-still-life
~~~

## Краткая история

| Время | Художники | Особенности |
|---|---|---|
| **XVII век, Голландия** | Виллем Клас Хеда, Виллем Кальф | «завтраки» со стеклом, серебром и лимонами, написанные так точно, что кажутся настоящими; у вещей был скрытый смысл (догоревшая свеча напоминает, что жизнь проходит) |
| **XVIII век, Франция** | Жан-Батист Шарден | простые кухонные вещи, тихие и тёплые |
| **XIX век, Франция** | Поль Сезанн | яблоки и кувшины, построенные как прочные геометрические формы; его интересовала **конструкция** предметов |
| **XX век, Россия** | Илья Машков, Пётр Кончаловский, Кузьма Петров-Водкин | яркие, радостные натюрморты с хлебом, фруктами, сиренью; «Утренний натюрморт» Петрова-Водкина (1918) |
| **XX век, Армения** | Мартирос Сарьян | цветы и плоды Армении в горячих чистых цветах |

## Вещи рассказывают

Предметы показывают, **кто** живёт с ними и **когда**. Скрипка и ноты говорят о музыканте; компас и старые карты — о путешественнике; самовар — о русском доме; медная джезва, лаваш и гранаты — об армянском столе. У натюрморта бывает и **настроение**: праздничное, спокойное, грустное.

~~~art
pic apple pomegranate karas feather
Вещи рассказывают истории: перо — о поэте, кувшин — о доме, гранат — об Армении.
~~~

## Составь «портрет через вещи»

1. Выбери человека: учёного, бабушку, футболиста, себя.
2. Подбери 4–6 предметов, которые о нём рассказывают.
3. Выбери ткань и фон, поддерживающие настроение.
4. Расставь предметы: один главный, остальные сгруппированы вокруг; одни впереди, другие сзади.
5. Сделай быстрый набросок постановки.

~~~art
compose
~~~

~~~art
tasks
1. Что означает французское название *nature morte*?
2. Почему натюрморт похож на маленький театр?
3. Что означала догоревшая свеча в голландских натюрмортах?
4. Что интересовало Сезанна в предметах?
5. Назови русского и армянского мастера натюрморта.
6. Какие предметы расскажут о путешественнике? Об армянском доме?
7. Составь и зарисуй натюрморт «Портрет музыканта».
~~~

~~~art
hints
1. «Мёртвая природа»: неподвижные предметы. 2. Художник сам выбирает и расставляет «актёров». 3. Что жизнь проходит. 4. Их конструкция, прочная геометрическая форма. 5. Например: Машков или Петров-Водкин; Сарьян. 6. Компас, карты, рюкзак; медная джезва, лаваш, гранаты, ковёр. 7. Твой набросок.
~~~`,
      },
      [
        q(t("A still life shows…", "Նատյուրմորտը պատկերում է…", "Натюрморт изображает…"), [t("objects that do not move", "չշարժվող առարկաներ", "неподвижные предметы"), t("battles", "ճակատամարտեր", "сражения"), t("the sea", "ծովը", "море")], 0),
        q(t("Exact «breakfast» still lifes were painted in…", "Ճշգրիտ «նախաճաշ» նատյուրմորտները նկարվել են…", "Точные натюрморты-«завтраки» писали в…"), [t("ancient Egypt", "Հին Եգիպտոսում", "Древнем Египте"), t("17th-century Holland", "17-րդ դարի Հոլանդիայում", "Голландии XVII века"), t("Urartu", "Ուրարտուում", "Урарту")], 1),
        q(t("Who built apples and jugs like solid geometric forms?", "Ով էր կառուցում խնձորներն ու սափորներն ամուր երկրաչափական ձևերի պես։", "Кто строил яблоки и кувшины как прочные геометрические формы?"), [t("Aivazovsky", "Այվազովսկին", "Айвазовский"), t("Heda", "Հեդան", "Хеда"), t("Cézanne", "Սեզանը", "Сезанн")], 2),
        q(t("A burnt-out candle in a Dutch still life reminds that…", "Հոլանդական նատյուրմորտում այրված մոմը հիշեցնում է, որ…", "Догоревшая свеча в голландском натюрморте напоминает, что…"), [t("life passes", "կյանքն անցնում է", "жизнь проходит"), t("it is night", "գիշեր է", "наступила ночь"), t("the house is cold", "տունը ցուրտ է", "в доме холодно")], 0),
        q(t("«Morning Still Life» (1918) was painted by…", "«Առավոտյան նատյուրմորտը» (1918) նկարել է…", "«Утренний натюрморт» (1918) написал…"), [t("Saryan", "Սարյանը", "Сарьян"), t("Petrov-Vodkin", "Պետրով-Վոդկինը", "Петров-Водкин"), t("Chardin", "Շարդենը", "Шарден")], 1),
        q(t("A copper coffee pot, lavash and pomegranates tell about…", "Պղնձե սրճեփը, լավաշն ու նռները պատմում են…", "Медная джезва, лаваш и гранаты рассказывают о…"), [t("a sailor", "նավաստու մասին", "моряке"), t("a scientist", "գիտնականի մասին", "учёном"), t("an Armenian table", "հայկական սեղանի մասին", "армянском столе")], 2),
      ],
    ),
    lesson(
      "object-construction",
      ["The construction of objects: geometric bodies", "Առարկաների կառուցումը․ երկրաչափական մարմիններ", "Конструкция предметов: геометрические тела"],
      {
        en: ["See simple geometric bodies inside complex objects", "Draw objects 'through', showing their hidden edges and axes", "Measure proportions with a pencil"],
        hy: ["Տեսնել պարզ երկրաչափական մարմիններ բարդ առարկաների ներսում", "Առարկաները նկարել «թափանցիկ»՝ ցույց տալով թաքնված կողերն ու առանցքները", "Համամասնությունները չափել մատիտով"],
        ru: ["Видеть простые геометрические тела внутри сложных предметов", "Рисовать предметы «насквозь», показывая невидимые рёбра и оси", "Измерять пропорции карандашом"],
      },
      {
        en: `## Everything is built of simple forms

Look at any object and you will find simple **geometric bodies** in it:

| Body | Objects |
|---|---|
| **cube, prism** | a box, a book, a house, a chest |
| **cylinder** | a cup, a pot, a bottle, a tree trunk |
| **cone** | a funnel, a lampshade, a spinning top |
| **sphere** | an apple, an orange, a ball, a pomegranate |
| **pyramid** | a roof, a tent |

A jug, for example, is a **sphere** (the body) + a **cylinder** (the neck) + a small **cone** (the spout) + a curved handle. Cézanne said that nature should be seen in terms of the cylinder, the sphere and the cone.

~~~art
pic shapes
~~~

## Drawing "through"

At first, draw an object as if it were made of **glass**: show its far edges and the hidden lines lightly. This is called **constructive** (or "through") drawing. It helps you to:

* understand the form in space;
* place the parts correctly;
* avoid crooked objects.

~~~art
steps cube
~~~

## The axis

Symmetrical objects (a vase, a bottle, a cup) have a vertical **axis**. Draw it first with a light line; all the round sections (ellipses) are placed on it, and their centres lie on the axis.

~~~art
steps cylinder
~~~

## Measuring with a pencil

1. Hold the pencil at arm's length, with your elbow straight.
2. Close one eye. Put the tip of the pencil at the top of the object, and move your thumb to the bottom: this is its height.
3. Turn the pencil horizontally and compare: how many times does the width fit in the height?
4. Transfer these **proportions**, not the sizes, to the paper.

~~~art
steps jug
~~~

## Try it

1. Draw a cube, a cylinder, a cone and a sphere "through".
2. Draw a jug and show which bodies it consists of.
3. Measure a bottle: how many widths fit in its height?

~~~art
tasks
1. Which bodies make a jug?
2. Which geometric body do you see in a tree trunk? In a roof?
3. What is constructive drawing, and why is it useful?
4. Why do we draw an axis first?
5. Where do the centres of the ellipses of a vase lie?
6. How do you measure proportions with a pencil?
7. Draw three kitchen objects and show the geometric bodies inside them.
~~~

~~~art
hints
1. A sphere, a cylinder, a cone and a handle. 2. A cylinder; a pyramid or a prism. 3. Drawing an object as if made of glass, with hidden lines; it helps to understand the form and place the parts. 4. To build a symmetrical object correctly. 5. On the axis. 6. Hold the pencil at arm's length, with one eye closed, and compare the height and width. 7. Your drawing.
~~~`,
        hy: `## Ամեն ինչ կառուցված է պարզ ձևերից

Նայիր ցանկացած առարկայի, և դրա մեջ կգտնես պարզ **երկրաչափական մարմիններ**․

| Մարմին | Առարկաներ |
|---|---|
| **խորանարդ, պրիզմա** | տուփ, գիրք, տուն, սնդուկ |
| **գլան** | բաժակ, կաթսա, շիշ, ծառի բուն |
| **կոն** | ձագար, լամպի աբաժուր, հոլ |
| **գունդ** | խնձոր, նարինջ, գնդակ, նուռ |
| **բուրգ** | տանիք, վրան |

Սափորը, օրինակ, **գունդ** է (իրանը) + **գլան** (վիզը) + փոքր **կոն** (ծորակը) + կոր բռնակ։ Սեզանն ասում էր, որ բնությունը պետք է տեսնել գլանի, գնդի և կոնի միջոցով։

~~~art
pic shapes
~~~

## «Թափանցիկ» նկարելը

Սկզբում առարկան նկարիր այնպես, կարծես այն **ապակուց** լինի․ թեթև ցույց տուր նրա հեռավոր կողերը և թաքնված գծերը։ Սա կոչվում է **կառուցողական** («թափանցիկ») գծանկար։ Այն օգնում է․

* հասկանալ ձևը տարածության մեջ,
* մասերը ճիշտ տեղադրել,
* խուսափել ծուռ առարկաներից։

~~~art
steps cube
~~~

## Առանցքը

Համաչափ առարկաները (ծաղկաման, շիշ, բաժակ) ունեն ուղղահայաց **առանցք**։ Նախ այն նկարիր թեթև գծով․ բոլոր կլոր կտրվածքները (էլիպսները) տեղադրվում են դրա վրա, և նրանց կենտրոնները գտնվում են առանցքի վրա։

~~~art
steps cylinder
~~~

## Չափում մատիտով

1. Մատիտը պահիր ձգված ձեռքով՝ արմունկն ուղիղ։
2. Փակիր մեկ աչքդ։ Մատիտի ծայրը դիր առարկայի վերին կետին, իսկ բութ մատդ տար ներքև․ սա նրա բարձրությունն է։
3. Մատիտը շրջիր հորիզոնական և համեմատիր․ քանի անգամ է լայնությունը տեղավորվում բարձրության մեջ։
4. Թղթի վրա փոխանցիր այդ **համամասնությունները**, ոչ թե չափերը։

~~~art
steps jug
~~~

## Փորձիր

1. «Թափանցիկ» նկարիր խորանարդ, գլան, կոն և գունդ։
2. Նկարիր սափոր և ցույց տուր, թե որ մարմիններից է այն կազմված։
3. Չափիր շիշը․ քանի լայնություն է տեղավորվում նրա բարձրության մեջ։

~~~art
tasks
1. Որ մարմիններից է կազմված սափորը։
2. Որ երկրաչափական մարմինն ես տեսնում ծառի բնի մեջ։ Իսկ տանիքի։
3. Ինչ է կառուցողական գծանկարը, և ինչու է այն օգտակար։
4. Ինչու ենք նախ առանցքը նկարում։
5. Որտեղ են գտնվում ծաղկամանի էլիպսների կենտրոնները։
6. Ինչպես են համամասնությունները չափում մատիտով։
7. Նկարիր խոհանոցային երեք առարկա և ցույց տուր դրանց ներսի երկրաչափական մարմինները։
~~~

~~~art
hints
1. Գունդ, գլան, կոն և բռնակ։ 2. Գլան, բուրգ կամ պրիզմա։ 3. Առարկան նկարել այնպես, կարծես ապակուց է, թաքնված գծերով․ այն օգնում է հասկանալ ձևը և տեղադրել մասերը։ 4. Համաչափ առարկան ճիշտ կառուցելու համար։ 5. Առանցքի վրա։ 6. Մատիտը պահել ձգված ձեռքով, մեկ աչքը փակ, և համեմատել բարձրությունն ու լայնությունը։ 7. Քո գծանկարը։
~~~`,
        ru: `## Всё построено из простых форм

Посмотри на любой предмет, и ты найдёшь в нём простые **геометрические тела**:

| Тело | Предметы |
|---|---|
| **куб, призма** | коробка, книга, дом, сундук |
| **цилиндр** | чашка, кастрюля, бутылка, ствол дерева |
| **конус** | воронка, абажур, юла |
| **шар** | яблоко, апельсин, мяч, гранат |
| **пирамида** | крыша, палатка |

Кувшин, например, — это **шар** (тулово) + **цилиндр** (горло) + маленький **конус** (носик) + изогнутая ручка. Сезанн говорил, что в природе нужно видеть цилиндр, шар и конус.

~~~art
pic shapes
~~~

## Рисунок «насквозь»

Сначала рисуй предмет так, будто он **стеклянный**: легко покажи дальние рёбра и невидимые линии. Это **конструктивный** рисунок (рисунок «насквозь»). Он помогает:

* понять форму в пространстве;
* правильно расположить части;
* избежать кривых предметов.

~~~art
steps cube
~~~

## Ось

У симметричных предметов (ваза, бутылка, чашка) есть вертикальная **ось**. Сначала проведи её лёгкой линией; все круглые сечения (эллипсы) строятся на ней, и их центры лежат на оси.

~~~art
steps cylinder
~~~

## Измерение карандашом

1. Держи карандаш на вытянутой руке, локоть прямой.
2. Закрой один глаз. Совмести кончик карандаша с верхом предмета, а большой палец подведи к низу: это его высота.
3. Поверни карандаш горизонтально и сравни: сколько раз ширина укладывается в высоте?
4. Переноси на бумагу **пропорции**, а не размеры.

~~~art
steps jug
~~~

## Попробуй

1. Нарисуй «насквозь» куб, цилиндр, конус и шар.
2. Нарисуй кувшин и покажи, из каких тел он состоит.
3. Измерь бутылку: сколько ширин укладывается в её высоте?

~~~art
tasks
1. Из каких тел состоит кувшин?
2. Какое геометрическое тело ты видишь в стволе дерева? В крыше?
3. Что такое конструктивный рисунок и чем он полезен?
4. Почему сначала проводят ось?
5. Где лежат центры эллипсов вазы?
6. Как измерять пропорции карандашом?
7. Нарисуй три кухонных предмета и покажи геометрические тела внутри них.
~~~

~~~art
hints
1. Шар, цилиндр, конус и ручка. 2. Цилиндр; пирамиду или призму. 3. Рисунок предмета как стеклянного, с невидимыми линиями; помогает понять форму и расположить части. 4. Чтобы правильно построить симметричный предмет. 5. На оси. 6. Держать карандаш на вытянутой руке, закрыв один глаз, и сравнивать высоту и ширину. 7. Твой рисунок.
~~~`,
      },
      [
        q(t("An apple is close to a…", "Խնձորը մոտ է…", "Яблоко близко к…"), [t("sphere", "գնդին", "шару"), t("cube", "խորանարդին", "кубу"), t("pyramid", "բուրգին", "пирамиде")], 0),
        q(t("The neck of a bottle is a…", "Շշի վիզը…", "Горло бутылки — это…"), [t("cone", "կոն է", "конус"), t("cylinder", "գլան է", "цилиндр"), t("prism", "պրիզմա է", "призма")], 1),
        q(t("Drawing an object as if it were glass is … drawing.", "Առարկան ապակուց լինելու պես նկարելը … գծանկար է։", "Рисунок предмета как стеклянного — это … рисунок."), [t("decorative", "դեկորատիվ", "декоративный"), t("silhouette", "ուրվապատկերային", "силуэтный"), t("constructive", "կառուցողական", "конструктивный")], 2),
        q(t("The centres of the ellipses of a vase lie on its…", "Ծաղկամանի էլիպսների կենտրոնները գտնվում են նրա…", "Центры эллипсов вазы лежат на её…"), [t("axis", "առանցքի վրա", "оси"), t("handle", "բռնակի վրա", "ручке"), t("shadow", "ստվերի վրա", "тени")], 0),
        q(t("When measuring with a pencil, keep your arm…", "Մատիտով չափելիս ձեռքդ պահիր…", "При измерении карандашом рука должна быть…"), [t("bent", "ծալված", "согнутой"), t("straight", "ուղիղ", "прямой"), t("behind your back", "մեջքիդ ետևում", "за спиной")], 1),
        q(t("We transfer to paper the object's…", "Թղթի վրա փոխանցում ենք առարկայի…", "На бумагу переносят…"), [t("real size", "իրական չափը", "реальные размеры"), t("weight", "քաշը", "вес"), t("proportions", "համամասնությունները", "пропорции")], 2),
      ],
    ),
    lesson(
      "light-and-shade",
      ["Light and shade: how light shows the form", "Լույս և ստվեր․ ինչպես է լույսը ցույց տալիս ձևը", "Свет и тень: как свет выявляет форму"],
      {
        en: ["Name the gradations of light and shade on a form", "Tell the form shadow from the cast shadow", "Model a sphere and a cube with tone"],
        hy: ["Անվանել ձևի վրա լույսի և ստվերի աստիճանավորումները", "Տարբերել սեփական ստվերն ընկնող ստվերից", "Գունդն ու խորանարդը մոդելավորել տոնով"],
        ru: ["Называть градации светотени на форме", "Отличать собственную тень от падающей", "Вылепить тоном шар и куб"],
      },
      {
        en: `## Light creates volume

Without light we see nothing; with flat light everything looks flat. When light falls **from one side**, the form appears: one side is lit, the other is in shadow, and between them there are soft transitions. The distribution of light and shade on a form is called **chiaroscuro** (Italian for "light-dark").

~~~art
light
~~~

## Gradations of light and shade

Look at a white ball lit by a lamp from the side:

| Gradation | Where |
|---|---|
| **highlight** | the brightest small spot, where light is reflected straight to your eye |
| **light** | the part turned towards the light |
| **half-tone** | the transition, where the form turns away from the light |
| **form shadow** (own shadow) | the side turned away from the light; darkest near the border with the light |
| **reflected light** | a weak light inside the shadow, bounced from the table or a nearby object |
| **cast shadow** | the shadow the object throws on the table; darkest near the object |

~~~art
tone
~~~

## Rules to remember

* All objects in a picture are lit from **one** direction.
* A **cube** has flat faces, so its tones change by steps: each face has its own tone.
* A **sphere** or **cylinder** has round faces, so the tones change **gradually**.
* The reflected light is always **darker** than the half-tone. Do not make it too bright, or the shadow "breaks".
* The cast shadow lies on the side **opposite** the light; its edge is sharper near the object.

## Try it

1. Place a white ball and a white box on a table near a window or lamp.
2. Draw their construction lightly.
3. Find the border between light and shadow first.
4. Lay the shadows, then the half-tones; leave the highlight white.
5. Draw the cast shadows and the reflected light.

~~~art
sketch guide=circle
Shade a ball: light, half-tone, core shadow, reflected light and the cast shadow on the table.
~~~

~~~art
tasks
1. What is chiaroscuro?
2. Name the six gradations of light and shade.
3. What is the difference between a form shadow and a cast shadow?
4. Why are the tones on a cube different from those on a sphere?
5. Where does reflected light come from?
6. Why must the reflected light not be too bright?
7. Draw a cylinder lit from the left with all gradations.
~~~

~~~art
hints
1. The distribution of light and shade on a form. 2. Highlight, light, half-tone, form shadow, reflected light, cast shadow. 3. A form shadow is on the object itself; a cast shadow is thrown by the object on another surface. 4. A cube has flat faces with step-like tones; a sphere is round, with gradual tones. 5. From light bounced off the table or nearby objects. 6. Otherwise the shadow looks broken. 7. Your drawing.
~~~`,
        hy: `## Լույսը ստեղծում է ծավալ

Առանց լույսի ոչինչ չենք տեսնում, հարթ լույսի տակ ամեն ինչ հարթ է թվում։ Երբ լույսն ընկնում է **մեկ կողմից**, ձևն երևում է․ մի կողմը լուսավորված է, մյուսը՝ ստվերում, իսկ նրանց միջև փափուկ անցումներ կան։ Ձևի վրա լույսի և ստվերի բաշխումը կոչվում է **լուսաստվեր**։

~~~art
light
~~~

## Լուսաստվերի աստիճանավորումները

Նայիր կողքից լամպով լուսավորված սպիտակ գնդակին․

| Աստիճանավորում | Որտեղ |
|---|---|
| **փայլ (բլիկ)** | ամենալուսավոր փոքր բիծը, որտեղ լույսն անդրադառնում է ուղիղ քո աչքին |
| **լույս** | լույսին ուղղված մասը |
| **կիսատոն** | անցումը, որտեղ ձևը թեքվում է լույսից |
| **սեփական ստվեր** | լույսից շրջված կողմը, ամենամուգը լույսի հետ սահմանին մոտ |
| **ռեֆլեքս** | թույլ լույս ստվերի ներսում՝ անդրադարձած սեղանից կամ մոտակա առարկայից |
| **ընկնող ստվեր** | ստվերը, որ առարկան գցում է սեղանին, ամենամուգն առարկայի մոտ |

~~~art
tone
~~~

## Հիշելու կանոններ

* Նկարի բոլոր առարկաները լուսավորված են **մեկ** ուղղությունից։
* **Խորանարդն** ունի հարթ նիստեր, ուստի նրա տոները փոխվում են աստիճաններով․ յուրաքանչյուր նիստ ունի իր տոնը։
* **Գունդն** ու **գլանը** կլոր են, ուստի տոները փոխվում են **աստիճանաբար**։
* Ռեֆլեքսը միշտ **ավելի մուգ** է կիսատոնից։ Այն շատ վառ մի՛ արա, թե չէ ստվերը «կոտրվում» է։
* Ընկնող ստվերը գտնվում է լույսի **հակառակ** կողմում, նրա եզրն առարկայի մոտ ավելի սուր է։

## Փորձիր

1. Պատուհանի կամ լամպի մոտ սեղանին դիր սպիտակ գնդակ և սպիտակ տուփ։
2. Թեթև նկարիր դրանց կառուցվածքը։
3. Նախ գտիր լույսի և ստվերի սահմանը։
4. Դիր ստվերները, հետո կիսատոները, փայլը թող սպիտակ։
5. Նկարիր ընկնող ստվերները և ռեֆլեքսը։

~~~art
sketch guide=circle
Ստվերավորի՛ր գունդը․ լույս, կիսատոն, սեփական ստվեր, ռեֆլեքս և ընկնող ստվերը սեղանին։
~~~

~~~art
tasks
1. Ինչ է լուսաստվերը։
2. Անվանիր լուսաստվերի վեց աստիճանավորումը։
3. Ինչով է տարբերվում սեփական ստվերն ընկնող ստվերից։
4. Ինչու են խորանարդի տոները տարբերվում գնդի տոներից։
5. Որտեղից է գալիս ռեֆլեքսը։
6. Ինչու ռեֆլեքսը չպետք է շատ վառ լինի։
7. Նկարիր ձախից լուսավորված գլան՝ բոլոր աստիճանավորումներով։
~~~

~~~art
hints
1. Ձևի վրա լույսի և ստվերի բաշխումը։ 2. Փայլ, լույս, կիսատոն, սեփական ստվեր, ռեֆլեքս, ընկնող ստվեր։ 3. Սեփական ստվերը հենց առարկայի վրա է, ընկնող ստվերն առարկան գցում է այլ մակերեսի վրա։ 4. Խորանարդն ունի հարթ նիստեր՝ աստիճանաձև տոներով, գունդը կլոր է՝ աստիճանաբար փոխվող տոներով։ 5. Սեղանից կամ մոտակա առարկաներից անդրադարձած լույսից։ 6. Թե չէ ստվերը կոտրված է երևում։ 7. Քո գծանկարը։
~~~`,
        ru: `## Свет создаёт объём

Без света мы ничего не видим; при плоском свете всё кажется плоским. Когда свет падает **с одной стороны**, проявляется форма: одна сторона освещена, другая в тени, а между ними мягкие переходы. Распределение света и тени на форме называется **светотенью**.

~~~art
light
~~~

## Градации светотени

Посмотри на белый шар, освещённый лампой сбоку:

| Градация | Где |
|---|---|
| **блик** | самое светлое маленькое пятно, где свет отражается прямо в глаз |
| **свет** | часть, обращённая к источнику света |
| **полутень** | переход, где форма отворачивается от света |
| **собственная тень** | сторона, отвёрнутая от света; темнее всего у границы со светом |
| **рефлекс** | слабый свет внутри тени, отражённый от стола или соседнего предмета |
| **падающая тень** | тень, которую предмет отбрасывает на стол; темнее всего у предмета |

~~~art
tone
~~~

## Что нужно помнить

* Все предметы в картине освещены с **одной** стороны.
* У **куба** плоские грани, поэтому тон меняется ступенями: у каждой грани свой тон.
* У **шара** и **цилиндра** поверхность круглая, поэтому тон меняется **постепенно**.
* Рефлекс всегда **темнее** полутени. Не делай его слишком светлым, иначе тень «разваливается».
* Падающая тень лежит на стороне, **противоположной** свету; её край у предмета резче.

## Попробуй

1. Поставь белый шар и белую коробку на стол у окна или лампы.
2. Легко нарисуй их конструкцию.
3. Сначала найди границу света и тени.
4. Проложи тени, потом полутени; блик оставь белым.
5. Нарисуй падающие тени и рефлексы.

~~~art
sketch guide=circle
Затони шар: свет, полутон, собственная тень, рефлекс и падающая тень на столе.
~~~

~~~art
tasks
1. Что такое светотень?
2. Назови шесть градаций светотени.
3. Чем собственная тень отличается от падающей?
4. Почему тона на кубе не такие, как на шаре?
5. Откуда берётся рефлекс?
6. Почему рефлекс не должен быть слишком светлым?
7. Нарисуй цилиндр, освещённый слева, со всеми градациями.
~~~

~~~art
hints
1. Распределение света и тени на форме. 2. Блик, свет, полутень, собственная тень, рефлекс, падающая тень. 3. Собственная тень лежит на самом предмете, падающую предмет отбрасывает на другую поверхность. 4. У куба плоские грани со ступенчатым тоном, шар круглый, тон меняется постепенно. 5. От света, отражённого столом или соседними предметами. 6. Иначе тень кажется разбитой. 7. Твой рисунок.
~~~`,
      },
      [
        q(t("The brightest small spot on a shiny form is the…", "Փայլուն ձևի վրա ամենալուսավոր փոքր բիծը…", "Самое светлое маленькое пятно на блестящей форме —…"), [t("highlight", "փայլն է", "блик"), t("reflected light", "ռեֆլեքսն է", "рефлекс"), t("half-tone", "կիսատոնն է", "полутень")], 0),
        q(t("The shadow an object throws on the table is the…", "Ստվերը, որ առարկան գցում է սեղանին…", "Тень, которую предмет отбрасывает на стол, —…"), [t("form shadow", "սեփական ստվերն է", "собственная"), t("cast shadow", "ընկնող ստվերն է", "падающая"), t("highlight", "փայլն է", "блик")], 1),
        q(t("Weak light inside a shadow is…", "Թույլ լույսը ստվերի ներսում…", "Слабый свет внутри тени — это…"), [t("the highlight", "փայլն է", "блик"), t("the light", "լույսն է", "свет"), t("reflected light", "ռեֆլեքսն է", "рефлекс")], 2),
        q(t("On a cube the tone changes…", "Խորանարդի վրա տոնը փոխվում է…", "На кубе тон меняется…"), [t("by steps, face by face", "աստիճաններով՝ նիստ առ նիստ", "ступенями, по граням"), t("gradually", "աստիճանաբար", "постепенно"), t("not at all", "ընդհանրապես չի փոխվում", "никак")], 0),
        q(t("Reflected light is always … than the half-tone.", "Ռեֆլեքսը միշտ … է կիսատոնից։", "Рефлекс всегда … полутени."), [t("lighter", "ավելի բաց", "светлее"), t("darker", "ավելի մուգ", "темнее"), t("redder", "ավելի կարմիր", "краснее")], 1),
        q(t("The cast shadow lies…", "Ընկնող ստվերը գտնվում է…", "Падающая тень лежит…"), [t("towards the light", "լույսի կողմում", "в сторону света"), t("above the object", "առարկայից վեր", "над предметом"), t("opposite the light", "լույսի հակառակ կողմում", "на стороне, противоположной свету")], 2),
      ],
    ),
    lesson(
      "objects-perspective",
      ["Perspective of objects: ellipses and the horizon", "Առարկաների հեռանկարը․ էլիպսներ և հորիզոն", "Перспектива предметов: эллипсы и линия горизонта"],
      {
        en: ["Understand that the horizon is at the level of the eyes", "Draw circles in perspective as ellipses that change with height", "Draw a box in frontal and angular perspective"],
        hy: ["Հասկանալ, որ հորիզոնը գտնվում է աչքերի մակարդակում", "Հեռանկարում շրջանները նկարել որպես էլիպսներ, որոնք փոխվում են բարձրության հետ", "Տուփը նկարել ճակատային և անկյունային հեռանկարում"],
        ru: ["Понимать, что линия горизонта находится на уровне глаз", "Рисовать окружности в перспективе как эллипсы, меняющиеся с высотой", "Рисовать коробку во фронтальной и угловой перспективе"],
      },
      {
        en: `## The horizon is at eye level

The **horizon line** in a drawing is always at the height of the **artist's eyes**. If you sit, it is low; if you stand, it is higher; from a mountain it is very high.

* Objects **below** the horizon: we see their tops.
* Objects **above** the horizon: we see their bottoms.
* At the **horizon level** a flat top becomes a line.

~~~art
perspective
~~~

## Circles become ellipses

A round rim of a cup or a plate, seen at an angle, looks like an **ellipse** (a flattened circle).

* The **lower** the circle below the horizon, the **rounder** (more open) the ellipse.
* The **closer** to the horizon, the **flatter** the ellipse.
* At eye level the circle turns into a straight **line**.

So on one vase, the top rim is flatter and the bottom is rounder (if the whole vase is below eye level).

~~~art
steps cylinder
~~~

## Rules for good ellipses

* An ellipse is smooth, with **no corners** at the ends.
* It is **symmetrical** about the axis of the object.
* The bottom of a cup is drawn as a full ellipse, even if half is hidden: draw "through" first, then erase lightly.

## Boxes in perspective

* **Frontal perspective:** one face of the box is turned straight to you; the side edges go to **one** vanishing point on the horizon.
* **Angular perspective:** the box is turned with an edge towards you; its sides go to **two** vanishing points on the horizon.

~~~art
steps cube
~~~

## Try it

1. Draw three plates: one on the floor, one on a table, one at eye level.
2. Draw a glass with ellipses at the top and bottom.
3. Draw a book in frontal perspective and a box in angular perspective.

~~~art
sketch guide=vp2
~~~

~~~art
tasks
1. Where is the horizon line in a drawing?
2. What do we see of objects below the horizon? Above it?
3. What shape does a circle take in perspective?
4. How does the ellipse change when the circle gets closer to the horizon?
5. Why is the bottom of a vase rounder than its top?
6. What is the difference between frontal and angular perspective?
7. Draw a cylinder at three heights relative to the horizon.
~~~

~~~art
hints
1. At the height of the artist's eyes. 2. Their tops; their bottoms. 3. An ellipse. 4. It becomes flatter, and at eye level turns into a line. 5. The bottom is further below the horizon than the top. 6. In frontal perspective one face is turned to us and lines go to one vanishing point; in angular perspective an edge is turned to us and lines go to two points. 7. Your drawing.
~~~`,
        hy: `## Հորիզոնն աչքերի մակարդակում է

Գծանկարում **հորիզոնի գիծը** միշտ գտնվում է **նկարչի աչքերի** բարձրության վրա։ Եթե նստած ես, այն ցածր է, եթե կանգնած ես՝ ավելի բարձր, լեռից՝ շատ բարձր։

* Հորիզոնից **ներքև** գտնվող առարկաներ՝ տեսնում ենք դրանց վերին մասերը։
* Հորիզոնից **վեր** գտնվող առարկաներ՝ տեսնում ենք դրանց ներքևի մասերը։
* **Հորիզոնի մակարդակում** հարթ վերին մասը դառնում է գիծ։

~~~art
perspective
~~~

## Շրջանները դառնում են էլիպսներ

Բաժակի կամ ափսեի կլոր եզրը, անկյան տակ նայելիս, նման է **էլիպսի** (տափակեցված շրջանի)։

* Որքան **ցածր** է շրջանը հորիզոնից, այնքան **կլոր** (բաց) է էլիպսը։
* Որքան **մոտ** է հորիզոնին, այնքան **տափակ** է էլիպսը։
* Աչքերի մակարդակում շրջանը դառնում է ուղիղ **գիծ**։

Ուստի նույն ծաղկամանի վերին եզրն ավելի տափակ է, իսկ հատակը՝ ավելի կլոր (եթե ամբողջ ծաղկամանն աչքերից ցածր է)։

~~~art
steps cylinder
~~~

## Լավ էլիպսների կանոններ

* Էլիպսը սահուն է, ծայրերում **անկյուններ չունի**։
* Այն **համաչափ** է առարկայի առանցքի նկատմամբ։
* Բաժակի հատակը նկարում են ամբողջ էլիպսով, նույնիսկ եթե կեսը թաքնված է․ նախ նկարիր «թափանցիկ», հետո թեթև ջնջիր։

## Տուփերը հեռանկարում

* **Ճակատային հեռանկար**՝ տուփի մի նիստն ուղիղ քեզ է նայում, կողային կողերը գնում են հորիզոնի վրա **մեկ** անհետացման կետ։
* **Անկյունային հեռանկար**՝ տուփը շրջված է կողով դեպի քեզ, նրա կողմերը գնում են հորիզոնի վրա **երկու** անհետացման կետ։

~~~art
steps cube
~~~

## Փորձիր

1. Նկարիր երեք ափսե՝ մեկը հատակին, մեկը սեղանին, մեկն աչքերի մակարդակում։
2. Նկարիր բաժակ՝ վերևում և ներքևում էլիպսներով։
3. Նկարիր գիրք ճակատային հեռանկարում և տուփ՝ անկյունային հեռանկարում։

~~~art
sketch guide=vp2
~~~

~~~art
tasks
1. Որտեղ է գտնվում հորիզոնի գիծը գծանկարում։
2. Ինչ ենք տեսնում հորիզոնից ցածր առարկաներից։ Իսկ վեր գտնվողներից։
3. Ինչ ձև է ստանում շրջանը հեռանկարում։
4. Ինչպես է փոխվում էլիպսը, երբ շրջանը մոտենում է հորիզոնին։
5. Ինչու է ծաղկամանի հատակն ավելի կլոր, քան վերին եզրը։
6. Ինչով է տարբերվում ճակատային հեռանկարն անկյունայինից։
7. Նկարիր գլան հորիզոնի նկատմամբ երեք բարձրության վրա։
~~~

~~~art
hints
1. Նկարչի աչքերի բարձրության վրա։ 2. Նրանց վերին մասերը, ներքևի մասերը։ 3. Էլիպսի։ 4. Այն տափակում է, իսկ աչքերի մակարդակում դառնում է գիծ։ 5. Հատակը հորիզոնից ավելի ցածր է, քան վերին եզրը։ 6. Ճակատայինում մի նիստը մեզ է նայում, և գծերը գնում են մեկ կետ, անկյունայինում կողն է մեզ նայում, և գծերը գնում են երկու կետ։ 7. Քո գծանկարը։
~~~`,
        ru: `## Горизонт — на уровне глаз

**Линия горизонта** в рисунке всегда находится на высоте **глаз художника**. Сидишь — она низко, стоишь — выше, смотришь с горы — очень высоко.

* Предметы **ниже** горизонта: мы видим их верх.
* Предметы **выше** горизонта: мы видим их низ.
* На **уровне горизонта** плоский верх превращается в линию.

~~~art
perspective
~~~

## Окружности становятся эллипсами

Круглый край чашки или тарелки, увиденный под углом, выглядит как **эллипс** (сплющенная окружность).

* Чем **ниже** окружность под горизонтом, тем **круглее** (раскрытее) эллипс.
* Чем **ближе** к горизонту, тем **уже** эллипс.
* На уровне глаз окружность превращается в прямую **линию**.

Поэтому у одной вазы верхний край уже, а дно круглее (если вся ваза ниже уровня глаз).

~~~art
steps cylinder
~~~

## Правила хорошего эллипса

* Эллипс плавный, **без углов** на концах.
* Он **симметричен** относительно оси предмета.
* Дно чашки рисуют целым эллипсом, даже если половина скрыта: сначала «насквозь», потом слегка сотри.

## Коробки в перспективе

* **Фронтальная перспектива:** одна грань коробки повёрнута прямо к тебе; боковые рёбра уходят в **одну** точку схода на горизонте.
* **Угловая перспектива:** коробка повёрнута к тебе ребром; её стороны уходят в **две** точки схода на горизонте.

~~~art
steps cube
~~~

## Попробуй

1. Нарисуй три тарелки: на полу, на столе и на уровне глаз.
2. Нарисуй стакан с эллипсами вверху и внизу.
3. Нарисуй книгу во фронтальной перспективе и коробку в угловой.

~~~art
sketch guide=vp2
~~~

~~~art
tasks
1. Где находится линия горизонта в рисунке?
2. Что мы видим у предметов ниже горизонта? Выше него?
3. Какую форму принимает окружность в перспективе?
4. Как меняется эллипс, когда окружность приближается к горизонту?
5. Почему дно вазы круглее, чем её верхний край?
6. Чем фронтальная перспектива отличается от угловой?
7. Нарисуй цилиндр на трёх высотах относительно горизонта.
~~~

~~~art
hints
1. На высоте глаз художника. 2. Верх; низ. 3. Эллипса. 4. Он сужается, а на уровне глаз превращается в линию. 5. Дно дальше от горизонта, чем верхний край. 6. Во фронтальной одна грань обращена к нам и линии уходят в одну точку, в угловой к нам обращено ребро и линии уходят в две точки. 7. Твой рисунок.
~~~`,
      },
      [
        q(t("The horizon line is at the level of…", "Հորիզոնի գիծը գտնվում է … մակարդակում։", "Линия горизонта находится на уровне…"), [t("the artist's eyes", "նկարչի աչքերի", "глаз художника"), t("the floor", "հատակի", "пола"), t("the top of the paper", "թղթի վերին եզրի", "верха листа")], 0),
        q(t("A circle seen at an angle looks like…", "Անկյան տակ տեսած շրջանը նման է…", "Окружность под углом выглядит как…"), [t("a square", "քառակուսու", "квадрат"), t("an ellipse", "էլիպսի", "эллипс"), t("a triangle", "եռանկյան", "треугольник")], 1),
        q(t("At eye level a circle becomes…", "Աչքերի մակարդակում շրջանը դառնում է…", "На уровне глаз окружность становится…"), [t("rounder", "ավելի կլոր", "круглее"), t("a dot", "կետ", "точкой"), t("a straight line", "ուղիղ գիծ", "прямой линией")], 2),
        q(t("The ends of a good ellipse are…", "Լավ էլիպսի ծայրերը…", "Концы хорошего эллипса…"), [t("smooth, without corners", "սահուն են, առանց անկյունների", "плавные, без углов"), t("sharp", "սուր են", "острые"), t("square", "քառակուսի են", "квадратные")], 0),
        q(t("A box turned with an edge to you is in … perspective.", "Կողով դեպի քեզ շրջված տուփը … հեռանկարում է։", "Коробка, повёрнутая ребром к тебе, — в … перспективе."), [t("frontal", "ճակատային", "фронтальной"), t("angular", "անկյունային", "угловой"), t("aerial", "օդային", "воздушной")], 1),
        q(t("Of objects above the horizon we see…", "Հորիզոնից վեր գտնվող առարկաներից տեսնում ենք…", "У предметов выше горизонта мы видим…"), [t("their tops", "վերին մասերը", "верх"), t("nothing", "ոչինչ", "ничего"), t("their bottoms", "ներքևի մասերը", "низ")], 2),
      ],
    ),
    lesson(
      "graphic-still-life",
      ["Still life in pencil: step by step", "Նատյուրմորտ մատիտով․ քայլ առ քայլ", "Натюрморт в графике: последовательность работы"],
      {
        en: ["Place a still life well on the sheet", "Follow the stages of a tonal drawing from construction to generalization", "Draw a still life of two or three objects"],
        hy: ["Նատյուրմորտը լավ տեղադրել թերթի վրա", "Հետևել տոնային գծանկարի փուլերին՝ կառուցումից մինչև ընդհանրացում", "Նկարել երկու-երեք առարկայից նատյուրմորտ"],
        ru: ["Хорошо компоновать натюрморт в листе", "Соблюдать этапы тонального рисунка: от построения до обобщения", "Нарисовать натюрморт из двух-трёх предметов"],
      },
      {
        en: `## Before you draw: composition on the sheet

* **Format:** if the group is wider than tall, turn the paper horizontally; if taller, vertically.
* **Size:** the group should fill the sheet well, not tiny in the middle and not touching the edges.
* **Margins:** leave a little more space at the top and on the side where the light comes from or where the objects "look".
* **Centre:** the group is usually a little above the centre of the sheet.

~~~art
compose
~~~

## Stages of work

| Stage | What you do | Pencil |
|---|---|---|
| **1. layout** | mark the whole group with a few light lines: top, bottom, left, right | H–HB, very light |
| **2. construction** | find the proportions, axes, ellipses; draw each object "through" | HB |
| **3. big light and shadow** | separate the lit and shadowed sides of all objects, lay cast shadows | B–2B |
| **4. modelling** | half-tones, reflected light, the tone of the background and cloth | B–4B |
| **5. details** | highlights, edges, the texture of glass, metal, fruit | sharp point |
| **6. generalization** | step back: is the nearest object the strongest? Soften what is too loud | eraser, soft pencil |

Work on **all objects at once**, not one after another. Then the drawing stays whole.

~~~art
steps jug
~~~

## Showing materials in pencil

* **Glass:** sharp highlights, transparent shadows; you see the background through it.
* **Metal:** strong contrasts, dark and white side by side, reflections of nearby objects.
* **Fruit:** soft tones, a small soft highlight.
* **Cloth:** folds with gentle transitions.

~~~art
tone
~~~

## Other graphic still lifes

A still life can also be made with **only line** (like a fast ink drawing), with **spots of ink** and a brush, or as a **linocut** print with black and white areas. Each has its own expressive language.

## Try it

Draw a still life of a jug, an apple and a cloth in five stages. At each stage stop and compare with the real group.

~~~art
sketch guide=thirds
~~~

~~~art
tasks
1. How do you choose the format of the sheet?
2. Where is the still life usually placed on the sheet?
3. List the six stages of a tonal drawing.
4. Why should all objects be drawn at once?
5. How do you show glass in pencil? Metal?
6. What is generalization?
7. Draw the same still life once in line only and once in tone.
~~~

~~~art
hints
1. By the shape of the group: wide group, horizontal sheet; tall group, vertical sheet. 2. A little above the centre, filling the sheet well. 3. Layout, construction, big light and shadow, modelling, details, generalization. 4. So the drawing stays whole. 5. Glass: sharp highlights and transparent shadows; metal: strong contrasts and reflections. 6. Checking the whole and softening what is too loud so the main things stand out. 7. Your drawings.
~~~`,
        hy: `## Նկարելուց առաջ․ կոմպոզիցիա թերթի վրա

* **Ձևաչափ**՝ եթե խումբն ավելի լայն է, քան բարձր, թուղթը դիր հորիզոնական, եթե ավելի բարձր է՝ ուղղահայաց։
* **Չափ**՝ խումբը պետք է լավ լցնի թերթը՝ ոչ փոքրիկ մեջտեղում և ոչ էլ եզրերին դիպչող։
* **Լուսանցքներ**՝ մի քիչ ավելի շատ տեղ թող վերևում և այն կողմում, որտեղից գալիս է լույսը կամ ուր «նայում» են առարկաները։
* **Կենտրոն**՝ խումբը սովորաբար թերթի կենտրոնից մի քիչ վեր է։

~~~art
compose
~~~

## Աշխատանքի փուլերը

| Փուլ | Ինչ ես անում | Մատիտ |
|---|---|---|
| **1. դասավորում** | մի քանի թեթև գծով նշիր ամբողջ խումբը՝ վերև, ներքև, ձախ, աջ | H–HB, շատ թեթև |
| **2. կառուցում** | գտիր համամասնությունները, առանցքները, էլիպսները, ամեն առարկա նկարիր «թափանցիկ» | HB |
| **3. մեծ լույս և ստվեր** | բաժանիր բոլոր առարկաների լուսավոր և ստվերոտ կողմերը, դիր ընկնող ստվերները | B–2B |
| **4. մոդելավորում** | կիսատոներ, ռեֆլեքսներ, ֆոնի և կտորի տոնը | B–4B |
| **5. մանրամասներ** | փայլեր, եզրեր, ապակու, մետաղի, մրգի ֆակտուրան | սուր ծայր |
| **6. ընդհանրացում** | մի քայլ ետ գնա․ ամենամոտ առարկան ամենաուժեղն է։ Մեղմացրու այն, ինչ շատ «բարձր» է | ռետին, փափուկ մատիտ |

Աշխատիր **բոլոր առարկաների վրա միաժամանակ**, ոչ թե մեկը մյուսի ետևից։ Այդ դեպքում գծանկարը մնում է ամբողջական։

~~~art
steps jug
~~~

## Նյութերը մատիտով

* **Ապակի**՝ սուր փայլեր, թափանցիկ ստվերներ, նրա միջով երևում է ֆոնը։
* **Մետաղ**՝ ուժեղ հակադրություններ, մուգն ու սպիտակը կողք կողքի, մոտակա առարկաների անդրադարձներ։
* **Միրգ**՝ փափուկ տոներ, փոքր փափուկ փայլ։
* **Կտոր**՝ ծալքեր՝ մեղմ անցումներով։

~~~art
tone
~~~

## Այլ գրաֆիկական նատյուրմորտներ

Նատյուրմորտը կարելի է անել նաև **միայն գծով** (ինչպես արագ տուշե նկար), **տուշի բծերով** և վրձնով, կամ որպես **լինոփորագրություն**՝ սև և սպիտակ մակերեսներով։ Ամեն մեկն ունի իր արտահայտչական լեզուն։

## Փորձիր

Հինգ փուլով նկարիր սափորից, խնձորից և կտորից նատյուրմորտ։ Յուրաքանչյուր փուլում կանգ առ և համեմատիր իրական խմբի հետ։

~~~art
sketch guide=thirds
~~~

~~~art
tasks
1. Ինչպես ընտրել թերթի ձևաչափը։
2. Որտեղ է սովորաբար տեղադրվում նատյուրմորտը թերթի վրա։
3. Թվարկիր տոնային գծանկարի վեց փուլը։
4. Ինչու պետք է բոլոր առարկաները նկարել միաժամանակ։
5. Ինչպես ցույց տալ ապակին մատիտով։ Իսկ մետաղը։
6. Ինչ է ընդհանրացումը։
7. Նույն նատյուրմորտը նկարիր մեկ անգամ միայն գծով, մեկ անգամ՝ տոնով։
~~~

~~~art
hints
1. Ըստ խմբի ձևի․ լայն խումբ՝ հորիզոնական թերթ, բարձր խումբ՝ ուղղահայաց։ 2. Կենտրոնից մի քիչ վեր՝ լավ լցնելով թերթը։ 3. Դասավորում, կառուցում, մեծ լույս և ստվեր, մոդելավորում, մանրամասներ, ընդհանրացում։ 4. Որ գծանկարը մնա ամբողջական։ 5. Ապակի՝ սուր փայլեր և թափանցիկ ստվերներ, մետաղ՝ ուժեղ հակադրություններ և անդրադարձներ։ 6. Ամբողջը ստուգելը և շատ «բարձրը» մեղմացնելը, որ գլխավորն աչքի ընկնի։ 7. Քո գծանկարները։
~~~`,
        ru: `## До начала: композиция в листе

* **Формат:** если группа шире, чем выше, положи лист горизонтально; если выше — вертикально.
* **Размер:** группа должна хорошо заполнять лист: не крошечная посередине и не упирается в края.
* **Поля:** оставь чуть больше места сверху и с той стороны, откуда идёт свет или куда «смотрят» предметы.
* **Центр:** группа обычно чуть выше центра листа.

~~~art
compose
~~~

## Этапы работы

| Этап | Что делаешь | Карандаш |
|---|---|---|
| **1. компоновка** | отметь всю группу несколькими лёгкими линиями: верх, низ, лево, право | H–HB, очень легко |
| **2. построение** | найди пропорции, оси, эллипсы; нарисуй каждый предмет «насквозь» | HB |
| **3. большой свет и тень** | раздели освещённые и теневые стороны всех предметов, проложи падающие тени | B–2B |
| **4. лепка формы** | полутени, рефлексы, тон фона и драпировки | B–4B |
| **5. детали** | блики, края, фактура стекла, металла, фруктов | острый грифель |
| **6. обобщение** | отойди: ближний предмет самый сильный? Приглуши то, что «кричит» | ластик, мягкий карандаш |

Работай **над всеми предметами сразу**, а не по очереди. Тогда рисунок остаётся цельным.

~~~art
steps jug
~~~

## Материал в графике

* **Стекло:** резкие блики, прозрачные тени; сквозь него виден фон.
* **Металл:** сильные контрасты, тёмное и белое рядом, отражения соседних предметов.
* **Фрукты:** мягкие тона, маленький мягкий блик.
* **Ткань:** складки с мягкими переходами.

~~~art
tone
~~~

## Другие графические натюрморты

Натюрморт можно выполнить **одной линией** (как быстрый рисунок тушью), **пятнами туши** и кистью или как **линогравюру** с чёрными и белыми плоскостями. У каждой техники свой выразительный язык.

## Попробуй

Нарисуй в пять этапов натюрморт из кувшина, яблока и драпировки. На каждом этапе остановись и сравни с натурой.

~~~art
sketch guide=thirds
~~~

~~~art
tasks
1. Как выбрать формат листа?
2. Где обычно располагают натюрморт в листе?
3. Перечисли шесть этапов тонального рисунка.
4. Почему все предметы нужно рисовать одновременно?
5. Как передать стекло карандашом? А металл?
6. Что такое обобщение?
7. Нарисуй один и тот же натюрморт один раз только линией, другой раз в тоне.
~~~

~~~art
hints
1. По форме группы: широкая — горизонтальный лист, высокая — вертикальный. 2. Чуть выше центра, хорошо заполняя лист. 3. Компоновка, построение, большой свет и тень, лепка формы, детали, обобщение. 4. Чтобы рисунок остался цельным. 5. Стекло — резкие блики и прозрачные тени; металл — сильные контрасты и отражения. 6. Проверка целого и приглушение «кричащего», чтобы главное выделялось. 7. Твои рисунки.
~~~`,
      },
      [
        q(t("A group wider than tall needs a … sheet.", "Բարձրությունից ավելի լայն խմբին պետք է … թերթ։", "Группе шире, чем выше, нужен … лист."), [t("horizontal", "հորիզոնական", "горизонтальный"), t("vertical", "ուղղահայաց", "вертикальный"), t("round", "կլոր", "круглый")], 0),
        q(t("The first stage of a drawing is…", "Գծանկարի առաջին փուլը…", "Первый этап рисунка —…"), [t("details", "մանրամասներն են", "детали"), t("layout of the whole group", "ամբողջ խմբի դասավորումն է", "компоновка всей группы"), t("highlights", "փայլերն են", "блики")], 1),
        q(t("Draw the objects of a still life…", "Նատյուրմորտի առարկաները նկարիր…", "Предметы натюрморта рисуют…"), [t("one after another", "մեկը մյուսի ետևից", "по очереди"), t("only the biggest", "միայն ամենամեծը", "только самый большой"), t("all at once", "բոլորը միաժամանակ", "все одновременно")], 2),
        q(t("Sharp highlights and transparent shadows show…", "Սուր փայլերն ու թափանցիկ ստվերները ցույց են տալիս…", "Резкие блики и прозрачные тени передают…"), [t("glass", "ապակին", "стекло"), t("wool", "բուրդը", "шерсть"), t("bread", "հացը", "хлеб")], 0),
        q(t("At the last stage you…", "Վերջին փուլում դու…", "На последнем этапе ты…"), [t("start the layout", "սկսում ես դասավորումը", "начинаешь компоновку"), t("generalize the drawing", "ընդհանրացնում ես գծանկարը", "обобщаешь рисунок"), t("draw the axes", "նկարում ես առանցքները", "проводишь оси")], 1),
        q(t("A print with black and white areas cut in linoleum is a…", "Լինոլեումի վրա կտրված սև և սպիտակ մակերեսներով տպանկարը…", "Оттиск с чёрными и белыми плоскостями, вырезанными в линолеуме, — это…"), [t("watercolour", "ջրաներկ է", "акварель"), t("fresco", "որմնանկար է", "фреска"), t("linocut", "լինոփորագրություն է", "линогравюра")], 2),
      ],
    ),
    lesson(
      "colour-still-life",
      ["Still life in colour", "Նատյուրմորտ գույնով", "Цвет в натюрморте"],
      {
        en: ["Understand local colour and how light and neighbours change it", "Create a colour mood in a still life", "Paint a still life in watercolour or gouache"],
        hy: ["Հասկանալ առարկայի սեփական գույնը և ինչպես են լույսն ու հարևանները փոխում այն", "Նատյուրմորտում ստեղծել գունային տրամադրություն", "Ջրաներկով կամ գուաշով նկարել նատյուրմորտ"],
        ru: ["Понимать локальный цвет и то, как свет и соседи его меняют", "Создавать цветовое настроение в натюрморте", "Написать натюрморт акварелью или гуашью"],
      },
      {
        en: `## Local colour and real colour

The **local colour** is the "own" colour of an object: a lemon is yellow, a pepper is red. But in a painting the colour is never the same everywhere:

* In the **light** the colour gets lighter and takes the colour of the light (warm in sunlight or lamp light).
* In the **shadow** it gets darker and often **cooler** (bluish or violet) if the light is warm.
* **Coloured reflections:** a red apple next to a white cup gives a pink reflection on the cup.
* The **background** changes how we see a colour: yellow looks brighter on violet than on white.

~~~art
light
~~~

## Colour mood

A still life can be:

* **festive:** pure, saturated, contrasting colours, like Mashkov's bread and fruit or Saryan's flowers;
* **calm:** close, soft colours of one family (for example browns and ochres);
* **cool and fresh:** blues, greens and whites;
* **dramatic:** a dark background and one bright spot.

The **colour scheme** of a picture is the group of colours that dominate it. Choose it before you start.

~~~art
mood scene=still moods=warm,cold,loud,quiet
~~~

## Technique

**Watercolour:**

1. Draw lightly in pencil.
2. Paint from **light to dark**: first the light background and objects, then the shadows.
3. Leave the paper white for highlights.
4. Let a layer dry before the next one, or work wet-in-wet for soft transitions.

**Gouache:**

1. Gouache covers well, so you can paint dark first and add light on top.
2. Mix colours on the palette, not on the paper.
3. Use white to lighten, and a complementary colour (not black) to darken.

~~~art
mixer
~~~

## Try it

1. Set up a still life of 2–3 fruits, a jug and a coloured cloth.
2. Choose the mood: festive or calm.
3. Paint it in watercolour or gouache. Show coloured reflections and cool shadows.

~~~art
tasks
1. What is local colour?
2. How does a warm light change the colour of shadows?
3. What are coloured reflections? Give an example.
4. How does the background change a colour?
5. Name three possible moods of a still life and their colours.
6. Why does watercolour go from light to dark?
7. Paint two small studies of the same apple: one on a red, one on a green background.
~~~

~~~art
hints
1. The own colour of an object. 2. The shadows become cooler, bluish or violet. 3. Colour thrown from one object onto another, for example a pink reflection from a red apple on a white cup. 4. A colour looks different on different backgrounds, for example yellow is brighter on violet. 5. For example: festive (pure contrasting colours), calm (close soft colours), dramatic (dark background and one bright spot). 6. Light places must stay transparent; you cannot paint light over dark. 7. Your studies.
~~~`,
        hy: `## Սեփական գույն և իրական գույն

**Սեփական (լոկալ) գույնը** առարկայի «իր» գույնն է․ կիտրոնը դեղին է, պղպեղը՝ կարմիր։ Բայց նկարում գույնն երբեք ամենուր նույնը չէ․

* **Լույսի** տակ գույնը բացվում է և ստանում է լույսի գույնը (արևի կամ լամպի լույսի տակ՝ տաք)։
* **Ստվերում** այն մգանում է և հաճախ դառնում **ավելի սառը** (կապտավուն կամ մանուշակագույն), եթե լույսը տաք է։
* **Գունավոր ռեֆլեքսներ**՝ սպիտակ բաժակի կողքին կարմիր խնձորը վարդագույն ռեֆլեքս է տալիս բաժակի վրա։
* **Ֆոնը** փոխում է, թե ինչպես ենք տեսնում գույնը․ դեղինը մանուշակագույնի վրա ավելի վառ է երևում, քան սպիտակի վրա։

~~~art
light
~~~

## Գունային տրամադրություն

Նատյուրմորտը կարող է լինել․

* **տոնական**՝ մաքուր, հագեցված, հակադիր գույներ, ինչպես Մաշկովի հացն ու մրգերը կամ Սարյանի ծաղիկները,
* **հանդարտ**՝ մոտ, փափուկ, մեկ ընտանիքի գույներ (օրինակ՝ դարչնագույններ և օխրաներ),
* **սառը և թարմ**՝ կապույտներ, կանաչներ և սպիտակներ,
* **դրամատիկ**՝ մուգ ֆոն և մեկ վառ բիծ։

Նկարի **գունային գաման** այն գույների խումբն է, որոնք գերիշխում են նրանում։ Ընտրիր այն, նախքան սկսելը։

~~~art
mood scene=still moods=warm,cold,loud,quiet
~~~

## Տեխնիկա

**Ջրաներկ**․

1. Թեթև նկարիր մատիտով։
2. Նկարիր **բացից մուգ**՝ նախ բաց ֆոնը և առարկաները, հետո ստվերները։
3. Փայլերի համար թուղթը թող սպիտակ։
4. Թող, որ շերտը չորանա հաջորդից առաջ, կամ փափուկ անցումների համար աշխատիր «թացը թացի վրա»։

**Գուաշ**․

1. Գուաշը լավ է ծածկում, ուստի կարելի է նախ մուգը նկարել և վրայից բաց ավելացնել։
2. Գույները խառնիր գունապնակի վրա, ոչ թե թղթի։
3. Բացելու համար օգտագործիր սպիտակ, մգացնելու համար՝ փոխլրացնող գույն (ոչ թե սև)։

~~~art
mixer
~~~

## Փորձիր

1. Կազմիր նատյուրմորտ 2–3 մրգից, սափորից և գունավոր կտորից։
2. Ընտրիր տրամադրությունը՝ տոնական կամ հանդարտ։
3. Նկարիր այն ջրաներկով կամ գուաշով։ Ցույց տուր գունավոր ռեֆլեքսները և սառը ստվերները։

~~~art
tasks
1. Ինչ է սեփական գույնը։
2. Ինչպես է տաք լույսը փոխում ստվերների գույնը։
3. Ինչ են գունավոր ռեֆլեքսները։ Բեր օրինակ։
4. Ինչպես է ֆոնը փոխում գույնը։
5. Անվանիր նատյուրմորտի երեք հնարավոր տրամադրություն և դրանց գույները։
6. Ինչու է ջրաներկով աշխատանքը գնում բացից մուգ։
7. Նկարիր նույն խնձորի երկու փոքր էտյուդ՝ մեկը կարմիր, մյուսը կանաչ ֆոնի վրա։
~~~

~~~art
hints
1. Առարկայի իր գույնը։ 2. Ստվերները դառնում են ավելի սառը՝ կապտավուն կամ մանուշակագույն։ 3. Մի առարկայից մյուսի վրա ընկած գույն, օրինակ՝ կարմիր խնձորից վարդագույն ռեֆլեքս սպիտակ բաժակի վրա։ 4. Գույնը տարբեր ֆոների վրա տարբեր է երևում, օրինակ՝ դեղինը մանուշակագույնի վրա ավելի վառ է։ 5. Օրինակ՝ տոնական (մաքուր հակադիր գույներ), հանդարտ (մոտ փափուկ գույներ), դրամատիկ (մուգ ֆոն և մեկ վառ բիծ)։ 6. Բաց տեղերը պետք է թափանցիկ մնան․ մուգի վրա բաց չես կարող նկարել։ 7. Քո էտյուդները։
~~~`,
        ru: `## Локальный цвет и цвет в натуре

**Локальный цвет** — «собственный» цвет предмета: лимон жёлтый, перец красный. Но в живописи цвет никогда не бывает везде одинаковым:

* На **свету** цвет светлеет и принимает оттенок освещения (тёплый при солнце или лампе).
* В **тени** он темнеет и часто становится **холоднее** (голубоватым или фиолетовым), если свет тёплый.
* **Цветные рефлексы:** красное яблоко рядом с белой чашкой даёт на ней розовый рефлекс.
* **Фон** меняет восприятие цвета: жёлтый на фиолетовом ярче, чем на белом.

~~~art
light
~~~

## Цветовое настроение

Натюрморт может быть:

* **праздничным:** чистые, насыщенные, контрастные цвета, как хлебы и фрукты Машкова или цветы Сарьяна;
* **спокойным:** близкие мягкие цвета одной семьи (например, коричневые и охры);
* **прохладным и свежим:** синие, зелёные и белые;
* **драматичным:** тёмный фон и одно яркое пятно.

**Колорит** (цветовая гамма) картины — группа цветов, которые в ней преобладают. Выбери его до начала работы.

~~~art
mood scene=still moods=warm,cold,loud,quiet
~~~

## Техника

**Акварель:**

1. Легко нарисуй карандашом.
2. Пиши **от светлого к тёмному**: сначала светлый фон и предметы, потом тени.
3. Для бликов оставляй белую бумагу.
4. Давай слою высохнуть перед следующим или работай по-сырому для мягких переходов.

**Гуашь:**

1. Гуашь хорошо кроет, поэтому можно сначала писать тёмное, а сверху добавлять светлое.
2. Смешивай цвета на палитре, а не на бумаге.
3. Высветляй белилами, а затемняй дополнительным цветом (не чёрным).

~~~art
mixer
~~~

## Попробуй

1. Поставь натюрморт из 2–3 фруктов, кувшина и цветной драпировки.
2. Выбери настроение: праздничное или спокойное.
3. Напиши его акварелью или гуашью. Покажи цветные рефлексы и холодные тени.

~~~art
tasks
1. Что такое локальный цвет?
2. Как тёплый свет меняет цвет теней?
3. Что такое цветные рефлексы? Приведи пример.
4. Как фон меняет цвет?
5. Назови три возможных настроения натюрморта и их цвета.
6. Почему в акварели работают от светлого к тёмному?
7. Напиши два маленьких этюда одного яблока: на красном и на зелёном фоне.
~~~

~~~art
hints
1. Собственный цвет предмета. 2. Тени становятся холоднее, голубоватыми или фиолетовыми. 3. Цвет, отражённый одним предметом на другой, например розовый рефлекс от красного яблока на белой чашке. 4. Один цвет на разных фонах выглядит по-разному, например жёлтый ярче на фиолетовом. 5. Например: праздничное (чистые контрастные цвета), спокойное (близкие мягкие), драматичное (тёмный фон и одно яркое пятно). 6. Светлые места должны оставаться прозрачными; светлым по тёмному не напишешь. 7. Твои этюды.
~~~`,
      },
      [
        q(t("The own colour of an object is its … colour.", "Առարկայի իր գույնը նրա … գույնն է։", "Собственный цвет предмета — … цвет."), [t("local", "սեփական (լոկալ)", "локальный"), t("complementary", "փոխլրացնող", "дополнительный"), t("reflected", "անդրադարձած", "отражённый")], 0),
        q(t("Under warm light, shadows often look…", "Տաք լույսի տակ ստվերները հաճախ երևում են…", "При тёплом свете тени часто выглядят…"), [t("warmer", "ավելի տաք", "теплее"), t("cooler", "ավելի սառը", "холоднее"), t("white", "սպիտակ", "белыми")], 1),
        q(t("A pink spot on a white cup next to a red apple is a…", "Կարմիր խնձորի կողքին սպիտակ բաժակի վրա վարդագույն բիծը…", "Розовое пятно на белой чашке рядом с красным яблоком — это…"), [t("mistake", "սխալ է", "ошибка"), t("highlight", "փայլ է", "блик"), t("coloured reflection", "գունավոր ռեֆլեքս է", "цветной рефлекс")], 2),
        q(t("Watercolour is painted…", "Ջրաներկով նկարում են…", "Акварелью пишут…"), [t("from light to dark", "բացից մուգ", "от светлого к тёмному"), t("from dark to light", "մուգից բաց", "от тёмного к светлому"), t("only in black", "միայն սևով", "только чёрным")], 0),
        q(t("In gouache, a colour is best darkened with…", "Գուաշում գույնը լավագույնս մգացնում են…", "В гуаши цвет лучше затемнять…"), [t("white", "սպիտակով", "белилами"), t("a complementary colour", "փոխլրացնող գույնով", "дополнительным цветом"), t("water", "ջրով", "водой")], 1),
        q(t("The group of dominant colours in a picture is its…", "Նկարում գերիշխող գույների խումբը նրա…", "Группа преобладающих цветов картины — это её…"), [t("format", "ձևաչափն է", "формат"), t("texture", "ֆակտուրան է", "фактура"), t("colour scheme", "գունային գաման է", "колорит")], 2),
      ],
    ),
  ],
};
