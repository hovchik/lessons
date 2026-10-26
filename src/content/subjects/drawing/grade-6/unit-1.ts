import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("The language of fine art", "Կերպարվեստի լեզուն", "Виды изобразительного искусства и основы образного языка"),
  summary: t(
    "Kinds and genres of fine art, drawing as the basis, line, tone and hatching, spot and silhouette, the colour wheel, texture and materials in sculpture.",
    "Կերպարվեստի տեսակներն ու ժանրերը, գծանկարն որպես հիմք, գիծ, տոն և շտրիխ, բիծ և ուրվապատկեր, գունային շրջան, ֆակտուրա և նյութեր քանդակում։",
    "Виды и жанры изобразительного искусства, рисунок как основа, линия, тон и штриховка, пятно и силуэт, цветовой круг, фактура и материалы скульптуры.",
  ),
  lessons: [
    lesson(
      "kinds-of-art",
      ["Kinds and genres of fine art", "Կերպարվեստի տեսակներն ու ժանրերը", "Виды и жанры изобразительного искусства"],
      {
        en: ["Name the kinds of fine art and their means", "Name the main genres and recognize them in famous works", "Sort a set of artworks by kind and genre"],
        hy: ["Անվանել կերպարվեստի տեսակները և դրանց միջոցները", "Անվանել հիմնական ժանրերը և ճանաչել դրանք հայտնի գործերում", "Արվեստի գործերը դասակարգել ըստ տեսակի և ժանրի"],
        ru: ["Называть виды изобразительного искусства и их средства", "Называть основные жанры и узнавать их в известных произведениях", "Распределить произведения по видам и жанрам"],
      },
      {
        en: `## The family of spatial arts

Music and literature unfold in **time**. Painting, sculpture and architecture exist in **space**: we see the whole work at once. They are called the **spatial arts**.

| Kind | Main means | Example |
|---|---|---|
| **painting** | colour: oil, gouache, watercolour, tempera | Saryan's landscapes of Armenia, Aivazovsky's «The Ninth Wave» |
| **graphics** | line, spot and tone on paper: pencil, ink, prints | book illustrations, posters, etchings |
| **sculpture** | volume in stone, bronze, wood, clay | Kochar's «David of Sasun» |
| **architecture** | buildings and spaces | Zvartnots, Tamanyan's Opera House |
| **decorative and applied art** | beautiful useful things | carpets, ceramics, jewellery |

Painting, graphics and sculpture are the **fine (visual) arts** in the narrow sense: they **depict** the world.

~~~art
pic easel plasticine garni poster
Painting, sculpture, architecture, design: four members of one family.
~~~

## Genres

A **genre** is a group of works with the same kind of subject.

| Genre | Subject | Masters |
|---|---|---|
| **portrait** | a person | Hakob Hovnatanyan, Repin, Serov |
| **landscape** | nature or a city | Saryan, Bashinjaghian, Levitan, Shishkin |
| **still life** | objects arranged by the artist | Chardin, Cézanne, Mashkov |
| **everyday (genre) painting** | daily life of people | Venetsianov, Perov |
| **historical painting** | events of the past | Surikov, Vasnetsov |
| **battle painting** | battles | Vereshchagin |
| **marine painting** | the sea | Aivazovsky |
| **animal art** | animals | Vatagin, Charushin |

One work can belong to two genres, for example a portrait in a landscape.

~~~art
pic genre-landscape genre-still-life genre-portrait genre-animal genre-battle genre-everyday genre-marine genre-fairy
~~~

## Why learn kinds and genres?

They are like a map of art. When you know them, you can walk through a museum and understand what each artist chose to show and with what means.

~~~art
tasks
1. Why are painting, sculpture and architecture called spatial arts?
2. What is the main means of painting? Of graphics? Of sculpture?
3. Name the genre: a bowl of apples on a table; the sea in a storm; a family at dinner.
4. What is the difference between a kind of art and a genre?
5. Name one Armenian and one Russian landscape painter.
6. Can one work belong to two genres? Give an example.
7. Choose five pictures from a book or a museum website and sort them by kind and genre.
~~~

~~~art
hints
1. They exist in space, and we see the whole work at once. 2. Colour; line, spot and tone; volume. 3. Still life; marine painting; everyday genre. 4. A kind is defined by its means (painting, sculpture), a genre by its subject (portrait, landscape). 5. For example: Saryan or Bashinjaghian; Levitan or Shishkin. 6. Yes, for example a portrait in a landscape. 7. Your work.
~~~`,
        hy: `## Տարածական արվեստների ընտանիքը

Երաժշտությունն ու գրականությունը ծավալվում են **ժամանակի** մեջ։ Գեղանկարչությունը, քանդակը և ճարտարապետությունը գոյություն ունեն **տարածության** մեջ․ մենք ամբողջ գործը տեսնում ենք միանգամից։ Դրանք կոչվում են **տարածական արվեստներ**։

| Տեսակ | Հիմնական միջոց | Օրինակ |
|---|---|---|
| **գեղանկարչություն** | գույն՝ յուղաներկ, գուաշ, ջրաներկ, տեմպերա | Սարյանի Հայաստանի բնանկարները, Այվազովսկու «Իններորդ ալիքը» |
| **գրաֆիկա** | գիծ, բիծ և տոն թղթի վրա՝ մատիտ, տուշ, փորագրանկարներ | գրքի նկարազարդումներ, պաստառներ, օֆորտներ |
| **քանդակ** | ծավալ քարում, բրոնզում, փայտում, կավում | Քոչարի «Սասունցի Դավիթը» |
| **ճարտարապետություն** | շենքեր և տարածություններ | Զվարթնոց, Թամանյանի Օպերային թատրոնը |
| **դեկորատիվ-կիրառական արվեստ** | գեղեցիկ օգտակար իրեր | գորգեր, խեցեղեն, զարդեր |

Գեղանկարչությունը, գրաֆիկան և քանդակը նեղ իմաստով **կերպարվեստն** են․ դրանք **պատկերում** են աշխարհը։

~~~art
pic easel plasticine garni poster
Գեղանկարչություն, քանդակ, ճարտարապետություն, դիզայն․ մեկ ընտանիքի չորս անդամ։
~~~

## Ժանրեր

**Ժանրը** նույն տեսակի թեմա ունեցող գործերի խումբ է։

| Ժանր | Թեմա | Վարպետներ |
|---|---|---|
| **դիմանկար** | մարդ | Հակոբ Հովնաթանյան, Ռեպին, Սերով |
| **բնանկար** | բնություն կամ քաղաք | Սարյան, Բաշինջաղյան, Լևիտան, Շիշկին |
| **նատյուրմորտ** | նկարչի դասավորած առարկաներ | Շարդեն, Սեզան, Մաշկով |
| **կենցաղային ժանր** | մարդկանց առօրյա կյանքը | Վենեցիանով, Պերով |
| **պատմական ժանր** | անցյալի իրադարձություններ | Սուրիկով, Վասնեցով |
| **մարտանկար** | ճակատամարտեր | Վերեշչագին |
| **ծովանկար** | ծով | Այվազովսկի |
| **կենդանանկար** | կենդանիներ | Վատագին, Չարուշին |

Մեկ գործը կարող է պատկանել երկու ժանրի, օրինակ՝ դիմանկար բնանկարի ֆոնին։

~~~art
pic genre-landscape genre-still-life genre-portrait genre-animal genre-battle genre-everyday genre-marine genre-fairy
~~~

## Ինչու իմանալ տեսակներն ու ժանրերը

Դրանք արվեստի քարտեզի պես են։ Երբ դրանք գիտես, կարող ես քայլել թանգարանով և հասկանալ, թե ամեն նկարիչ ինչ է ընտրել ցույց տալու և ինչ միջոցներով։

~~~art
tasks
1. Ինչու են գեղանկարչությունը, քանդակը և ճարտարապետությունը կոչվում տարածական արվեստներ։
2. Որն է գեղանկարչության հիմնական միջոցը։ Իսկ գրաֆիկայի։ Իսկ քանդակի։
3. Անվանիր ժանրը՝ խնձորներով աման սեղանին, փոթորկոտ ծով, ընտանիքը ճաշի ժամին։
4. Ինչով է տարբերվում արվեստի տեսակը ժանրից։
5. Անվանիր մեկ հայ և մեկ ռուս բնանկարիչ։
6. Կարող է մեկ գործը պատկանել երկու ժանրի։ Բեր օրինակ։
7. Գրքից կամ թանգարանի կայքից ընտրիր հինգ նկար և դասակարգիր ըստ տեսակի և ժանրի։
~~~

~~~art
hints
1. Դրանք գոյություն ունեն տարածության մեջ, և մենք ամբողջ գործը տեսնում ենք միանգամից։ 2. Գույնը, գիծը, բիծն ու տոնը, ծավալը։ 3. Նատյուրմորտ, ծովանկար, կենցաղային ժանր։ 4. Տեսակն որոշվում է միջոցներով (գեղանկարչություն, քանդակ), ժանրը՝ թեմայով (դիմանկար, բնանկար)։ 5. Օրինակ՝ Սարյան կամ Բաշինջաղյան, Լևիտան կամ Շիշկին։ 6. Այո, օրինակ՝ դիմանկար բնանկարի ֆոնին։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Семья пространственных искусств

Музыка и литература разворачиваются во **времени**. Живопись, скульптура и архитектура существуют в **пространстве**: мы видим всё произведение сразу. Их называют **пространственными искусствами**.

| Вид | Главное средство | Пример |
|---|---|---|
| **живопись** | цвет: масло, гуашь, акварель, темпера | армянские пейзажи Сарьяна, «Девятый вал» Айвазовского |
| **графика** | линия, пятно и тон на бумаге: карандаш, тушь, гравюры | книжные иллюстрации, плакаты, офорты |
| **скульптура** | объём в камне, бронзе, дереве, глине | «Давид Сасунский» Кочара |
| **архитектура** | здания и пространства | Звартноц, Оперный театр Таманяна |
| **декоративно-прикладное искусство** | красивые полезные вещи | ковры, керамика, украшения |

Живопись, графика и скульптура — **изобразительные искусства** в узком смысле: они **изображают** мир.

~~~art
pic easel plasticine garni poster
Живопись, скульптура, архитектура, дизайн: четыре члена одной семьи.
~~~

## Жанры

**Жанр** — группа произведений с одинаковым типом сюжета.

| Жанр | Предмет изображения | Мастера |
|---|---|---|
| **портрет** | человек | Акоп Овнатанян, Репин, Серов |
| **пейзаж** | природа или город | Сарьян, Башинджагян, Левитан, Шишкин |
| **натюрморт** | предметы, расставленные художником | Шарден, Сезанн, Машков |
| **бытовой жанр** | повседневная жизнь людей | Венецианов, Перов |
| **исторический жанр** | события прошлого | Суриков, Васнецов |
| **батальный жанр** | сражения | Верещагин |
| **марина** | море | Айвазовский |
| **анималистический жанр** | животные | Ватагин, Чарушин |

Одно произведение может относиться к двум жанрам, например портрет на фоне пейзажа.

~~~art
pic genre-landscape genre-still-life genre-portrait genre-animal genre-battle genre-everyday genre-marine genre-fairy
~~~

## Зачем знать виды и жанры?

Они похожи на карту искусства. Зная их, можно пройти по музею и понять, что каждый художник решил показать и какими средствами.

~~~art
tasks
1. Почему живопись, скульптуру и архитектуру называют пространственными искусствами?
2. Какое главное средство живописи? Графики? Скульптуры?
3. Назови жанр: ваза с яблоками на столе; море в бурю; семья за обедом.
4. Чем вид искусства отличается от жанра?
5. Назови одного армянского и одного русского пейзажиста.
6. Может ли одно произведение относиться к двум жанрам? Приведи пример.
7. Выбери пять картин из книги или с сайта музея и распредели их по видам и жанрам.
~~~

~~~art
hints
1. Они существуют в пространстве, и мы видим всё произведение сразу. 2. Цвет; линия, пятно и тон; объём. 3. Натюрморт; марина; бытовой жанр. 4. Вид определяется средствами (живопись, скульптура), жанр — сюжетом (портрет, пейзаж). 5. Например: Сарьян или Башинджагян; Левитан или Шишкин. 6. Да, например портрет на фоне пейзажа. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Painting, sculpture and architecture are … arts.", "Գեղանկարչությունը, քանդակը և ճարտարապետությունը … արվեստներ են։", "Живопись, скульптура и архитектура — … искусства."), [t("spatial", "տարածական", "пространственные"), t("temporal", "ժամանակային", "временные"), t("musical", "երաժշտական", "музыкальные")], 0),
        q(t("The main means of painting is…", "Գեղանկարչության հիմնական միջոցը…", "Главное средство живописи —…"), [t("volume", "ծավալն է", "объём"), t("colour", "գույնն է", "цвет"), t("sound", "ձայնն է", "звук")], 1),
        q(t("A picture of the sea is called a…", "Ծովի պատկերը կոչվում է…", "Изображение моря называется…"), [t("portrait", "դիմանկար", "портрет"), t("still life", "նատյուրմորտ", "натюрморт"), t("marine painting", "ծովանկար", "марина")], 2),
        q(t("Objects arranged by the artist form a…", "Նկարչի դասավորած առարկաները կազմում են…", "Предметы, расставленные художником, — это…"), [t("still life", "նատյուրմորտ", "натюрморт"), t("battle scene", "մարտանկար", "батальная сцена"), t("landscape", "բնանկար", "пейзаж")], 0),
        q(t("A genre is defined by…", "Ժանրն որոշվում է…", "Жанр определяется…"), [t("the size of the work", "գործի չափով", "размером работы"), t("its subject", "թեմայով", "сюжетом"), t("the price", "գնով", "ценой")], 1),
        q(t("Kochar's «David of Sasun» is a work of…", "Քոչարի «Սասունցի Դավիթը» … գործ է։", "«Давид Сасунский» Кочара — произведение…"), [t("graphics", "գրաֆիկայի", "графики"), t("painting", "գեղանկարչության", "живописи"), t("sculpture", "քանդակի", "скульптуры")], 2),
      ],
    ),
    lesson(
      "drawing-basis",
      ["Drawing: the basis of fine art", "Գծանկարը՝ կերպարվեստի հիմքը", "Рисунок — основа изобразительного творчества"],
      {
        en: ["Understand why drawing is the basis of every kind of fine art", "Tell a sketch, a study and a finished drawing apart", "Know graphic materials and choose the right pencil"],
        hy: ["Հասկանալ, թե ինչու է գծանկարը կերպարվեստի յուրաքանչյուր տեսակի հիմքը", "Տարբերել ուրվանկարը, էտյուդը և ավարտուն գծանկարը", "Իմանալ գրաֆիկական նյութերը և ընտրել ճիշտ մատիտը"],
        ru: ["Понимать, почему рисунок — основа всех видов изобразительного искусства", "Отличать набросок, этюд и законченный рисунок", "Знать графические материалы и выбирать нужный карандаш"],
      },
      {
        en: `## Every work begins with a drawing

A painter plans a picture with a drawing; a sculptor draws a statue before carving; an architect draws a building before it is built; a designer draws a chair before it is made. **Drawing** is the way an artist thinks on paper.

## Three kinds of drawings

| Kind | Time | Purpose |
|---|---|---|
| **sketch** (quick drawing) | 1–10 minutes | catch a pose, a movement, an idea |
| **study** | 15–60 minutes | learn the form, the light, a detail |
| **finished drawing** | hours | a complete work of graphic art |

Many great artists filled hundreds of **sketchbooks**. Saryan, Repin and Leonardo da Vinci drew every day.

~~~art
steps cube
~~~

## Graphic materials

* **Graphite pencils:** marked **H** (hard, light grey) and **B** (soft, dark). HB is in the middle. Use 2H–HB for light construction lines, 2B–6B for dark tones.
* **Charcoal:** very black, soft, easy to smudge; good for big drawings.
* **Sanguine:** a red-brown chalk, warm and alive; loved for portraits.
* **Pastel:** soft coloured chalk.
* **Ink:** with a pen or a brush; lines cannot be erased, so the hand must be confident.

~~~art
pic pencil ink felt pastel
~~~

## How to hold the pencil

* For **long, light lines**, hold the pencil far from the tip and move the whole arm.
* For **small details**, hold it close to the tip, like when writing.
* Sharpen the pencil with a long point.
* Use the eraser rarely: first draw lightly, then strengthen the right lines.

## Try it

1. Make five sketches of your hand in different positions, two minutes each.
2. Make one study of a leaf or a shell, twenty minutes, with light and shade.
3. Compare: what did the sketches teach you, and what did the study teach you?

~~~art
sketch guide=frame
Warm-up: fill the frame with long confident lines, circles in one move, and lines from light to strong pressure.
~~~

~~~art
tasks
1. Why is drawing called the basis of fine art? Give two examples.
2. What is the difference between a sketch and a study?
3. What do the letters H and B on a pencil mean?
4. Which pencil would you use for light construction lines? For deep shadows?
5. What is sanguine?
6. Why must the hand be confident when drawing with ink?
7. Make three sketches of a classmate sitting, standing and walking.
~~~

~~~art
hints
1. Every kind of art begins with a drawing: a painter plans a picture, an architect draws a building. 2. A sketch is quick and catches a pose or idea; a study is longer and explores form and light. 3. H means hard and light, B means soft and dark. 4. 2H–HB; 2B–6B. 5. A red-brown chalk. 6. Ink lines cannot be erased. 7. Your sketches.
~~~`,
        hy: `## Յուրաքանչյուր գործ սկսվում է գծանկարով

Գեղանկարիչը նկարը պլանավորում է գծանկարով, քանդակագործն արձանը նկարում է, նախքան այն քանդակելը, ճարտարապետը շենքը նկարում է, նախքան այն կառուցելը, դիզայներն աթոռը նկարում է, նախքան այն պատրաստելը։ **Գծանկարը** նկարչի՝ թղթի վրա մտածելու եղանակն է։

## Գծանկարի երեք տեսակ

| Տեսակ | Ժամանակ | Նպատակ |
|---|---|---|
| **ուրվանկար** (արագ նկար) | 1–10 րոպե | որսալ դիրքը, շարժումը, գաղափարը |
| **էտյուդ** | 15–60 րոպե | ուսումնասիրել ձևը, լույսը, մանրամասնը |
| **ավարտուն գծանկար** | ժամեր | գրաֆիկական արվեստի ամբողջական գործ |

Շատ մեծ նկարիչներ լցրել են հարյուրավոր **ալբոմներ**։ Սարյանը, Ռեպինը և Լեոնարդո դա Վինչին նկարում էին ամեն օր։

~~~art
steps cube
~~~

## Գրաֆիկական նյութեր

* **Գրաֆիտե մատիտներ**՝ նշված **H** (կարծր, բաց մոխրագույն) և **B** (փափուկ, մուգ)։ HB-ն մեջտեղում է։ Բաց կառուցողական գծերի համար օգտագործիր 2H–HB, մուգ տոների համար՝ 2B–6B։
* **Ածուխ**՝ շատ սև, փափուկ, հեշտ է քսվում․ լավ է մեծ գծանկարների համար։
* **Սանգինա**՝ կարմրադարչնագույն կավիճ, տաք և կենդանի․ սիրված է դիմանկարների համար։
* **Պաստել**՝ փափուկ գունավոր կավիճ։
* **Տուշ**՝ գրչով կամ վրձնով․ գծերը չեն ջնջվում, ուստի ձեռքը պետք է վստահ լինի։

~~~art
pic pencil ink felt pastel
~~~

## Ինչպես բռնել մատիտը

* **Երկար, թեթև գծերի** համար մատիտը բռնիր ծայրից հեռու և շարժիր ամբողջ ձեռքը։
* **Մանր մանրամասների** համար բռնիր ծայրին մոտ, ինչպես գրելիս։
* Մատիտը սրիր երկար ծայրով։
* Ռետինը հազվադեպ օգտագործիր․ նախ թեթև նկարիր, հետո ուժեղացրու ճիշտ գծերը։

## Փորձիր

1. Արա քո ձեռքի հինգ ուրվանկար տարբեր դիրքերում՝ ամեն մեկն երկու րոպե։
2. Արա տերևի կամ խխունջի խեցու մեկ էտյուդ՝ քսան րոպե, լույսով և ստվերով։
3. Համեմատիր․ ինչ սովորեցրին ուրվանկարները, և ինչ սովորեցրեց էտյուդը։

~~~art
sketch guide=frame
Տաքացում․ լցրու շրջանակը երկար վստահ գծերով, մեկ շարժումով շրջաններով և թեթևից ուժեղ ճնշման գծերով։
~~~

~~~art
tasks
1. Ինչու է գծանկարը կոչվում կերպարվեստի հիմք։ Բեր երկու օրինակ։
2. Ինչով է տարբերվում ուրվանկարն էտյուդից։
3. Ինչ են նշանակում մատիտի վրայի H և B տառերը։
4. Որ մատիտը կօգտագործես բաց կառուցողական գծերի համար։ Իսկ խոր ստվերների համար։
5. Ինչ է սանգինան։
6. Ինչու պետք է ձեռքը վստահ լինի տուշով նկարելիս։
7. Արա դասընկերոջդ երեք ուրվանկար՝ նստած, կանգնած և քայլելիս։
~~~

~~~art
hints
1. Արվեստի յուրաքանչյուր տեսակ սկսվում է գծանկարով․ գեղանկարիչը պլանավորում է նկարը, ճարտարապետը նկարում է շենքը։ 2. Ուրվանկարն արագ է և որսում է դիրքը կամ գաղափարը, էտյուդն ավելի երկար է և ուսումնասիրում է ձևն ու լույսը։ 3. H-ը նշանակում է կարծր և բաց, B-ն՝ փափուկ և մուգ։ 4. 2H–HB, 2B–6B։ 5. Կարմրադարչնագույն կավիճ։ 6. Տուշի գծերը չեն ջնջվում։ 7. Քո ուրվանկարները։
~~~`,
        ru: `## Каждая работа начинается с рисунка

Живописец намечает картину рисунком; скульптор рисует статую, прежде чем высечь её; архитектор рисует здание, прежде чем его построят; дизайнер рисует стул, прежде чем его сделают. **Рисунок** — это способ художника думать на бумаге.

## Три вида рисунков

| Вид | Время | Цель |
|---|---|---|
| **набросок** | 1–10 минут | поймать позу, движение, идею |
| **этюд** | 15–60 минут | изучить форму, свет, деталь |
| **законченный рисунок** | часы | завершённое произведение графики |

Многие великие художники заполнили сотни **альбомов**. Сарьян, Репин и Леонардо да Винчи рисовали каждый день.

~~~art
steps cube
~~~

## Графические материалы

* **Графитные карандаши:** маркируются **H** (твёрдый, светло-серый; в России — Т) и **B** (мягкий, тёмный; в России — М). HB (ТМ) — посередине. Для лёгких линий построения бери 2H–HB, для тёмных тонов — 2B–6B.
* **Уголь:** очень чёрный, мягкий, легко растушёвывается; хорош для больших рисунков.
* **Сангина:** красно-коричневый мелок, тёплый и живой; любим портретистами.
* **Пастель:** мягкие цветные мелки.
* **Тушь:** пером или кистью; линии не стираются, поэтому рука должна быть уверенной.

~~~art
pic pencil ink felt pastel
~~~

## Как держать карандаш

* Для **длинных лёгких линий** держи карандаш далеко от кончика и двигай всей рукой.
* Для **мелких деталей** держи ближе к кончику, как при письме.
* Затачивай карандаш с длинным грифелем.
* Ластиком пользуйся редко: сначала рисуй легко, потом усиливай нужные линии.

## Попробуй

1. Сделай пять набросков своей руки в разных положениях, по две минуты.
2. Сделай один этюд листа или ракушки, двадцать минут, со светом и тенью.
3. Сравни: чему научили наброски и чему — этюд?

~~~art
sketch guide=frame
Разминка: заполни рамку длинными уверенными линиями, кругами в одно движение и линиями от лёгкого к сильному нажиму.
~~~

~~~art
tasks
1. Почему рисунок называют основой изобразительного искусства? Приведи два примера.
2. Чем набросок отличается от этюда?
3. Что означают буквы H и B на карандаше?
4. Каким карандашом рисовать лёгкие линии построения? А глубокие тени?
5. Что такое сангина?
6. Почему при рисунке тушью рука должна быть уверенной?
7. Сделай три наброска одноклассника: сидя, стоя и в движении.
~~~

~~~art
hints
1. Все виды искусства начинаются с рисунка: живописец намечает картину, архитектор рисует здание. 2. Набросок быстрый и ловит позу или идею, этюд дольше и изучает форму и свет. 3. H — твёрдый и светлый, B — мягкий и тёмный. 4. 2H–HB; 2B–6B. 5. Красно-коричневый мелок. 6. Линии туши не стираются. 7. Твои наброски.
~~~`,
      },
      [
        q(t("A quick drawing that catches a pose is a…", "Արագ նկարը, որ որսում է դիրքը…", "Быстрый рисунок, ловящий позу, — это…"), [t("sketch", "ուրվանկար է", "набросок"), t("fresco", "որմնանկար է", "фреска"), t("mosaic", "խճանկար է", "мозаика")], 0),
        q(t("A soft, dark pencil is marked…", "Փափուկ, մուգ մատիտը նշված է…", "Мягкий тёмный карандаш маркируется…"), [t("H", "H", "H"), t("B", "B", "B"), t("X", "X", "X")], 1),
        q(t("Red-brown chalk loved by portraitists is…", "Դիմանկարիչների սիրած կարմրադարչնագույն կավիճը…", "Красно-коричневый мелок, любимый портретистами, — это…"), [t("charcoal", "ածուխն է", "уголь"), t("ink", "տուշն է", "тушь"), t("sanguine", "սանգինան է", "сангина")], 2),
        q(t("A study is made to…", "Էտյուդն արվում է…", "Этюд делают, чтобы…"), [t("learn the form and light", "ուսումնասիրելու ձևը և լույսը", "изучить форму и свет"), t("sell quickly", "արագ վաճառելու համար", "быстро продать"), t("decorate a cup", "բաժակ զարդարելու համար", "украсить чашку")], 0),
        q(t("Long light lines are drawn by moving…", "Երկար թեթև գծերը նկարում են՝ շարժելով…", "Длинные лёгкие линии рисуют, двигая…"), [t("only the fingers", "միայն մատները", "только пальцами"), t("the whole arm", "ամբողջ ձեռքը", "всей рукой"), t("the paper", "թուղթը", "бумагой")], 1),
        q(t("Which material cannot be erased?", "Որ նյութը չի ջնջվում։", "Какой материал нельзя стереть?"), [t("graphite", "գրաֆիտը", "графит"), t("pastel", "պաստելը", "пастель"), t("ink", "տուշը", "тушь")], 2),
      ],
    ),
    lesson(
      "line-tone-hatching",
      ["Line, tone and hatching", "Գիծ, տոն և շտրիխ", "Линия, тон и штриховка"],
      {
        en: ["Use line as an expressive means: thick and thin, calm and sharp", "Build a tonal scale from white to black", "Model a form with hatching and cross-hatching"],
        hy: ["Գիծն օգտագործել որպես արտահայտչական միջոց՝ հաստ և բարակ, հանդարտ և սուր", "Կառուցել տոնային սանդղակ սպիտակից մինչև սև", "Ձևը մոդելավորել շտրիխով և խաչվող շտրիխով"],
        ru: ["Использовать линию как выразительное средство: толстую и тонкую, спокойную и острую", "Построить тональную шкалу от белого к чёрному", "Лепить форму штриховкой и перекрёстной штриховкой"],
      },
      {
        en: `## The character of a line

A line is not just a border. It has **character**:

| Line | Feeling |
|---|---|
| smooth, flowing | calm, soft, gentle |
| straight, firm | strong, strict |
| zigzag, broken | sharp, nervous, dangerous |
| thick and dark | heavy, near, important |
| thin and light | light, far, delicate |

A good drawing uses lines of **different weight**: the outline of near objects is stronger, of far ones lighter.

~~~art
lines
~~~

## Tone

**Tone** is how light or dark a place is, without thinking about colour. A black-and-white photo shows only tones. Artists use a **tonal scale**: steps from white through light, middle and dark grey to black.

~~~art
tone
~~~

## Hatching

**Hatching** is a set of parallel strokes. By changing it you change the tone:

* **density:** strokes close together look darker;
* **pressure:** pressing harder gives darker strokes;
* **layers:** a second layer at an angle (**cross-hatching**) makes the tone darker.

Strokes should **follow the form**: on a cylinder they go around it; on a flat wall they go straight. Then the hatching helps to show the volume.

~~~art
sketch guide=grid
Make a tone scale: in each cell, hatch a little darker than in the one before.
~~~

## Rules of good hatching

1. Strokes are short to medium, in one direction, with even gaps.
2. Do not rub or scribble: clean strokes look better.
3. Lay tone gradually: from light to dark, layer by layer.
4. Leave the lightest places white.

## Try it

1. Draw a strip of 7 squares and fill it with a scale from white to black using hatching.
2. Draw lines that express: calm, joy, anger, fear.
3. Draw a cylinder and a cube and hatch them following the form.

~~~art
tasks
1. What feelings can a zigzag line express?
2. Why are near outlines drawn stronger than far ones?
3. What is tone?
4. Name three ways to make hatching darker.
5. What is cross-hatching?
6. How should strokes go on a cylinder?
7. Make a seven-step tonal scale.
~~~

~~~art
hints
1. Sharpness, nervousness, danger. 2. To show that they are nearer and more important. 3. How light or dark a place is, without colour. 4. Put strokes closer, press harder, add another layer at an angle. 5. A second layer of hatching at an angle to the first. 6. Around the form, following its curve. 7. Your scale.
~~~`,
        hy: `## Գծի բնավորությունը

Գիծը պարզապես սահման չէ։ Այն ունի **բնավորություն**․

| Գիծ | Զգացում |
|---|---|
| սահուն, հոսող | հանդարտ, փափուկ, քնքուշ |
| ուղիղ, ամուր | ուժեղ, խիստ |
| զիգզագ, կոտրված | սուր, նյարդային, վտանգավոր |
| հաստ և մուգ | ծանր, մոտիկ, կարևոր |
| բարակ և բաց | թեթև, հեռու, նուրբ |

Լավ գծանկարում օգտագործվում են **տարբեր ուժգնության** գծեր․ մոտիկ առարկաների եզրագիծն ավելի ուժեղ է, հեռավորներինը՝ ավելի թեթև։

~~~art
lines
~~~

## Տոն

**Տոնը** այն է, թե որքան բաց կամ մուգ է որևէ տեղ՝ առանց գույնի մասին մտածելու։ Սև-սպիտակ լուսանկարը ցույց է տալիս միայն տոներ։ Նկարիչներն օգտագործում են **տոնային սանդղակ**՝ աստիճաններ սպիտակից բաց, միջին և մուգ մոխրագույնով մինչև սև։

~~~art
tone
~~~

## Շտրիխ

**Շտրիխը** զուգահեռ հարվածների խումբ է։ Փոխելով այն՝ փոխում ես տոնը․

* **խտություն**՝ իրար մոտ հարվածներն ավելի մուգ են երևում,
* **ճնշում**՝ ավելի ուժեղ սեղմելը տալիս է ավելի մուգ հարվածներ,
* **շերտեր**՝ անկյան տակ երկրորդ շերտը (**խաչվող շտրիխ**) տոնն ավելի մուգ է դարձնում։

Հարվածները պետք է **հետևեն ձևին**․ գլանի վրա դրանք գնում են նրա շուրջը, հարթ պատի վրա՝ ուղիղ։ Այդ դեպքում շտրիխն օգնում է ցույց տալ ծավալը։

~~~art
sketch guide=grid
Կազմի՛ր տոնային սանդղակ․ յուրաքանչյուր վանդակում շտրիխավորի՛ր մի փոքր ավելի մուգ, քան նախորդում։
~~~

## Լավ շտրիխի կանոններ

1. Հարվածները կարճ կամ միջին են, մեկ ուղղությամբ, հավասար միջակայքերով։
2. Մի՛ քսիր և մի՛ խզբզիր․ մաքուր հարվածներն ավելի լավ են երևում։
3. Տոնը դիր աստիճանաբար՝ բացից մուգ, շերտ առ շերտ։
4. Ամենալուսավոր տեղերը թող սպիտակ։

## Փորձիր

1. Նկարիր 7 քառակուսուց շերտ և շտրիխով լցրու այն սանդղակով՝ սպիտակից սև։
2. Նկարիր գծեր, որոնք արտահայտում են հանդարտություն, ուրախություն, զայրույթ, վախ։
3. Նկարիր գլան և խորանարդ և շտրիխիր՝ հետևելով ձևին։

~~~art
tasks
1. Ինչ զգացումներ կարող է արտահայտել զիգզագ գիծը։
2. Ինչու են մոտիկ եզրագծերը նկարում ավելի ուժեղ, քան հեռավորները։
3. Ինչ է տոնը։
4. Անվանիր շտրիխն ավելի մուգ դարձնելու երեք եղանակ։
5. Ինչ է խաչվող շտրիխը։
6. Ինչպես պետք է գնան հարվածները գլանի վրա։
7. Կառուցիր յոթ աստիճանով տոնային սանդղակ։
~~~

~~~art
hints
1. Սրություն, նյարդայնություն, վտանգ։ 2. Ցույց տալու համար, որ դրանք ավելի մոտ են և ավելի կարևոր։ 3. Թե որքան բաց կամ մուգ է որևէ տեղ՝ առանց գույնի։ 4. Հարվածներն իրար մոտեցնել, ավելի ուժեղ սեղմել, անկյան տակ մեկ այլ շերտ ավելացնել։ 5. Առաջինի նկատմամբ անկյան տակ դրված շտրիխի երկրորդ շերտ։ 6. Ձևի շուրջը՝ հետևելով նրա կորությանը։ 7. Քո սանդղակը։
~~~`,
        ru: `## Характер линии

Линия — не просто граница. У неё есть **характер**:

| Линия | Настроение |
|---|---|
| плавная, текучая | спокойствие, мягкость, нежность |
| прямая, твёрдая | сила, строгость |
| зигзаг, ломаная | резкость, тревога, опасность |
| толстая и тёмная | тяжесть, близость, важность |
| тонкая и светлая | лёгкость, даль, хрупкость |

В хорошем рисунке линии **разной силы**: контур близких предметов сильнее, дальних — легче.

~~~art
lines
~~~

## Тон

**Тон** — это степень светлоты или темноты места без учёта цвета. Чёрно-белая фотография показывает только тона. Художники пользуются **тональной шкалой**: ступенями от белого через светло-, средне- и тёмно-серый к чёрному.

~~~art
tone
~~~

## Штриховка

**Штриховка** — ряд параллельных штрихов. Меняя её, меняешь тон:

* **плотность:** близко лежащие штрихи кажутся темнее;
* **нажим:** сильнее нажимаешь — темнее штрих;
* **слои:** второй слой под углом (**перекрёстная штриховка**) делает тон темнее.

Штрихи должны **идти по форме**: на цилиндре — вокруг него, на плоской стене — прямо. Тогда штриховка помогает показать объём.

~~~art
sketch guide=grid
Сделай тоновую растяжку: в каждой клетке штрихуй чуть темнее, чем в предыдущей.
~~~

## Правила хорошей штриховки

1. Штрихи короткие или средние, в одном направлении, с ровными промежутками.
2. Не растирай и не черкай: чистые штрихи смотрятся лучше.
3. Набирай тон постепенно: от светлого к тёмному, слой за слоем.
4. Самые светлые места оставляй белыми.

## Попробуй

1. Нарисуй полоску из 7 квадратов и заполни её штриховкой от белого к чёрному.
2. Нарисуй линии, выражающие спокойствие, радость, гнев, страх.
3. Нарисуй цилиндр и куб и заштрихуй их по форме.

~~~art
tasks
1. Какие чувства может выразить зигзаг?
2. Почему контуры близких предметов рисуют сильнее, чем дальних?
3. Что такое тон?
4. Назови три способа сделать штриховку темнее.
5. Что такое перекрёстная штриховка?
6. Как должны идти штрихи на цилиндре?
7. Построй тональную шкалу из семи ступеней.
~~~

~~~art
hints
1. Резкость, тревогу, опасность. 2. Чтобы показать, что они ближе и важнее. 3. Степень светлоты или темноты без учёта цвета. 4. Положить штрихи плотнее, сильнее нажать, добавить слой под углом. 5. Второй слой штриховки под углом к первому. 6. Вокруг формы, по её изгибу. 7. Твоя шкала.
~~~`,
      },
      [
        q(t("A smooth, flowing line usually feels…", "Սահուն, հոսող գիծը սովորաբար թողնում է…", "Плавная текучая линия обычно передаёт…"), [t("calm", "հանդարտ տպավորություն", "спокойствие"), t("danger", "վտանգի տպավորություն", "опасность"), t("anger", "զայրույթի տպավորություն", "гнев")], 0),
        q(t("How light or dark a place is, is its…", "Թե որքան բաց կամ մուգ է որևէ տեղ, նրա…", "Степень светлоты или темноты места — это…"), [t("texture", "ֆակտուրան է", "фактура"), t("tone", "տոնն է", "тон"), t("genre", "ժանրն է", "жанр")], 1),
        q(t("A second layer of hatching at an angle is…", "Անկյան տակ շտրիխի երկրորդ շերտը…", "Второй слой штриховки под углом — это…"), [t("a sketch", "ուրվանկար է", "набросок"), t("a contour", "եզրագիծ է", "контур"), t("cross-hatching", "խաչվող շտրիխ է", "перекрёстная штриховка")], 2),
        q(t("On a cylinder strokes should go…", "Գլանի վրա հարվածները պետք է գնան…", "На цилиндре штрихи должны идти…"), [t("around the form", "ձևի շուրջը", "вокруг формы"), t("in any direction", "ցանկացած ուղղությամբ", "в любом направлении"), t("only vertically", "միայն ուղղահայաց", "только вертикально")], 0),
        q(t("The outline of a far object is drawn…", "Հեռավոր առարկայի եզրագիծը նկարում են…", "Контур далёкого предмета рисуют…"), [t("stronger", "ավելի ուժեղ", "сильнее"), t("lighter", "ավելի թեթև", "легче"), t("in red", "կարմիրով", "красным")], 1),
        q(t("The lightest places in a drawing are…", "Գծանկարի ամենալուսավոր տեղերը…", "Самые светлые места рисунка…"), [t("hatched twice", "երկու անգամ շտրիխվում են", "штрихуют дважды"), t("rubbed with a finger", "մատով քսվում են", "растирают пальцем"), t("left white", "թողնվում են սպիտակ", "оставляют белыми")], 2),
      ],
    ),
    lesson(
      "spot-silhouette",
      ["Spot and silhouette", "Բիծ և ուրվապատկեր", "Пятно и силуэт"],
      {
        en: ["Understand the spot as a means of expression", "Make a silhouette that is recognizable without details", "Balance black and white spots in a composition"],
        hy: ["Հասկանալ բիծն որպես արտահայտչական միջոց", "Ստեղծել ուրվապատկեր, որ ճանաչելի է առանց մանրամասների", "Հավասարակշռել սև և սպիտակ բծերը կոմպոզիցիայում"],
        ru: ["Понимать пятно как средство выразительности", "Создать силуэт, узнаваемый без деталей", "Уравновесить чёрные и белые пятна в композиции"],
      },
      {
        en: `## The spot

Besides lines, a picture is made of **spots**: areas of tone or colour. Look at a picture through half-closed eyes: the details disappear and you see only big light and dark spots. This is the **tonal structure** of the picture. If it is clear, the picture "reads" from far away.

## The silhouette

A **silhouette** is a dark flat shape on a light background (or the opposite), without inner details. A good silhouette shows the **most characteristic** outline of a thing:

* a cat is recognized by its ears and tail;
* a person running, by the bent legs and arms;
* Mount Ararat, by its two peaks.

Silhouettes were very popular in the 18th and 19th centuries: artists **cut** portraits of people in profile from black paper. Shadow theatre also uses silhouettes.

~~~art
pic mode=silhouette horse dove butterfly stork
A good silhouette tells everything. Guess, then tap to see the full picture.
~~~

## Positive and negative space

The figure is the **positive** space; the background around it is the **negative** space. In a good composition both are interesting. Sometimes they change places, and we see two pictures at once.

~~~art
sketch mode=blot paper=white
Positive and negative: make a black blot, fold the sheet, then look at the white shapes between the black ones.
~~~

## Balance of spots

* One big dark spot can be balanced by several small ones.
* A dark spot near the edge "pulls" the eye; place it with care.
* Black, white and one grey give a clear, strong picture.

~~~art
compose
~~~

## Try it

1. Cut three silhouettes from black paper: an animal, a tree and a person in motion. Check: are they recognizable?
2. Make a composition "A city at night" from black and grey silhouettes on a light paper.
3. Draw a vase so that its negative space shows two faces in profile.

~~~art
tasks
1. What is a spot in a picture?
2. How can you see the tonal structure of a picture?
3. What is a silhouette?
4. By which features is a cat recognizable in a silhouette?
5. What is negative space?
6. How can a big dark spot be balanced?
7. Cut a silhouette portrait of a classmate in profile.
~~~

~~~art
hints
1. An area of tone or colour. 2. Look at it through half-closed eyes. 3. A flat dark shape on a light background without inner details. 4. By its ears and tail. 5. The background around the figure. 6. With several small dark spots. 7. Your work.
~~~`,
        hy: `## Բիծը

Բացի գծերից, նկարը կազմված է **բծերից**՝ տոնի կամ գույնի տարածքներից։ Նայիր նկարին կիսափակ աչքերով․ մանրամասներն անհետանում են, և տեսնում ես միայն մեծ բաց և մուգ բծեր։ Սա նկարի **տոնային կառուցվածքն** է։ Եթե այն հստակ է, նկարը «կարդացվում» է հեռվից։

## Ուրվապատկերը

**Ուրվապատկերը** (սիլուետը) մուգ հարթ ձև է բաց ֆոնի վրա (կամ հակառակը)՝ առանց ներքին մանրամասների։ Լավ ուրվապատկերը ցույց է տալիս առարկայի **ամենաբնորոշ** եզրագիծը․

* կատվին ճանաչում են ականջներից և պոչից,
* վազող մարդուն՝ ծալված ոտքերից ու ձեռքերից,
* Արարատ լեռը՝ երկու գագաթից։

Ուրվապատկերները շատ տարածված էին 18-րդ և 19-րդ դարերում․ նկարիչները սև թղթից **կտրում** էին մարդկանց դիմանկարները պրոֆիլով։ Ստվերների թատրոնը նույնպես ուրվապատկերներ է օգտագործում։

~~~art
pic mode=silhouette horse dove butterfly stork
Լավ ուրվագիծը ամեն ինչ պատմում է։ Գուշակի՛ր, հետո հպի՛ր՝ ամբողջ նկարը տեսնելու համար։
~~~

## Դրական և բացասական տարածություն

Պատկերը **դրական** տարածությունն է, իսկ նրա շուրջը ֆոնը՝ **բացասական**։ Լավ կոմպոզիցիայում երկուսն էլ հետաքրքիր են։ Երբեմն դրանք տեղերով փոխվում են, և մենք միանգամից երկու պատկեր ենք տեսնում։

~~~art
sketch mode=blot paper=white
Դրական և բացասական․ արա՛ սև բիծ, ծալի՛ր թերթը, հետո նայի՛ր սև ձևերի միջև եղած սպիտակ ձևերին։
~~~

## Բծերի հավասարակշռություն

* Մեկ մեծ մուգ բիծը կարելի է հավասարակշռել մի քանի փոքրով։
* Եզրին մոտ մուգ բիծը «քաշում» է աչքը․ այն զգուշությամբ տեղադրիր։
* Սևը, սպիտակը և մեկ մոխրագույնը տալիս են հստակ, ուժեղ նկար։

~~~art
compose
~~~

## Փորձիր

1. Սև թղթից կտրիր երեք ուրվապատկեր՝ կենդանի, ծառ և շարժման մեջ գտնվող մարդ։ Ստուգիր՝ ճանաչելի են։
2. Բաց թղթի վրա սև և մոխրագույն ուրվապատկերներից կազմիր «Գիշերային քաղաք» կոմպոզիցիան։
3. Նկարիր ծաղկաման այնպես, որ նրա բացասական տարածությունը ցույց տա երկու դեմք պրոֆիլով։

~~~art
tasks
1. Ինչ է բիծը նկարում։
2. Ինչպես կարելի է տեսնել նկարի տոնային կառուցվածքը։
3. Ինչ է ուրվապատկերը։
4. Որ գծերով է կատուն ճանաչելի ուրվապատկերում։
5. Ինչ է բացասական տարածությունը։
6. Ինչպես կարելի է հավասարակշռել մեծ մուգ բիծը։
7. Կտրիր դասընկերոջդ ուրվապատկերային դիմանկարը պրոֆիլով։
~~~

~~~art
hints
1. Տոնի կամ գույնի տարածք։ 2. Նայել նրան կիսափակ աչքերով։ 3. Հարթ մուգ ձև բաց ֆոնի վրա՝ առանց ներքին մանրամասների։ 4. Ականջներով և պոչով։ 5. Պատկերի շուրջն եղած ֆոնը։ 6. Մի քանի փոքր մուգ բծով։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Пятно

Кроме линий, картина состоит из **пятен**: участков тона или цвета. Посмотри на картину прищурившись: детали исчезают, и видны только крупные светлые и тёмные пятна. Это **тональное строение** картины. Если оно ясное, картина «читается» издалека.

## Силуэт

**Силуэт** — тёмная плоская форма на светлом фоне (или наоборот) без внутренних деталей. Хороший силуэт показывает **самый характерный** контур предмета:

* кошку узнают по ушам и хвосту;
* бегущего человека — по согнутым ногам и рукам;
* гору Арарат — по двум вершинам.

Силуэты были очень популярны в XVIII–XIX веках: художники **вырезали** из чёрной бумаги портреты людей в профиль. Теневой театр тоже использует силуэты.

~~~art
pic mode=silhouette horse dove butterfly stork
Хороший силуэт рассказывает всё. Угадай, потом нажми, чтобы увидеть рисунок целиком.
~~~

## Позитивное и негативное пространство

Фигура — **позитивное** пространство, фон вокруг неё — **негативное**. В хорошей композиции интересны оба. Иногда они меняются местами, и мы видим сразу две картинки.

~~~art
sketch mode=blot paper=white
Позитив и негатив: поставь чёрную кляксу, сложи лист и посмотри на белые формы между чёрными.
~~~

## Равновесие пятен

* Одно большое тёмное пятно можно уравновесить несколькими маленькими.
* Тёмное пятно у края «тянет» взгляд; ставь его осторожно.
* Чёрный, белый и один серый дают ясную, сильную картину.

~~~art
compose
~~~

## Попробуй

1. Вырежи из чёрной бумаги три силуэта: животное, дерево и человека в движении. Проверь: узнаются ли они?
2. Составь композицию «Ночной город» из чёрных и серых силуэтов на светлой бумаге.
3. Нарисуй вазу так, чтобы её негативное пространство показывало два лица в профиль.

~~~art
tasks
1. Что такое пятно в картине?
2. Как увидеть тональное строение картины?
3. Что такое силуэт?
4. По каким признакам кошку узнают в силуэте?
5. Что такое негативное пространство?
6. Как уравновесить большое тёмное пятно?
7. Вырежи силуэтный портрет одноклассника в профиль.
~~~

~~~art
hints
1. Участок тона или цвета. 2. Посмотреть на неё прищурившись. 3. Плоская тёмная форма на светлом фоне без внутренних деталей. 4. По ушам и хвосту. 5. Фон вокруг фигуры. 6. Несколькими маленькими тёмными пятнами. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Half-closed eyes help to see…", "Կիսափակ աչքերն օգնում են տեսնել…", "Прищуренные глаза помогают увидеть…"), [t("the big spots of a picture", "նկարի մեծ բծերը", "крупные пятна картины"), t("tiny details", "մանր մանրամասները", "мелкие детали"), t("the signature", "ստորագրությունը", "подпись")], 0),
        q(t("A flat dark shape without inner details is a…", "Հարթ մուգ ձևն առանց ներքին մանրամասների…", "Плоская тёмная форма без внутренних деталей — это…"), [t("hatching", "շտրիխ է", "штриховка"), t("silhouette", "ուրվապատկեր է", "силуэт"), t("relief", "բարձրաքանդակ է", "рельеф")], 1),
        q(t("The background around a figure is … space.", "Պատկերի շուրջը ֆոնը … տարածություն է։", "Фон вокруг фигуры — … пространство."), [t("positive", "դրական", "позитивное"), t("aerial", "օդային", "воздушное"), t("negative", "բացասական", "негативное")], 2),
        q(t("Silhouette portraits used to be…", "Ուրվապատկերային դիմանկարները նախկինում…", "Силуэтные портреты раньше…"), [t("cut from black paper", "կտրում էին սև թղթից", "вырезали из чёрной бумаги"), t("woven", "գործում էին", "ткали"), t("cast in bronze", "ձուլում էին բրոնզից", "отливали из бронзы")], 0),
        q(t("A good silhouette shows the … outline.", "Լավ ուրվապատկերը ցույց է տալիս … եզրագիծը։", "Хороший силуэт показывает … контур."), [t("most random", "ամենապատահական", "самый случайный"), t("most characteristic", "ամենաբնորոշ", "самый характерный"), t("longest", "ամենաերկար", "самый длинный")], 1),
        q(t("A big dark spot can be balanced by…", "Մեծ մուգ բիծը կարելի է հավասարակշռել…", "Большое тёмное пятно можно уравновесить…"), [t("nothing", "ոչնչով", "ничем"), t("a signature", "ստորագրությամբ", "подписью"), t("several small dark spots", "մի քանի փոքր մուգ բծով", "несколькими маленькими тёмными пятнами")], 2),
      ],
    ),
    lesson(
      "colour-wheel",
      ["Colour: the colour wheel and complementary colours", "Գույն․ գունային շրջան և փոխլրացնող գույներ", "Цвет: цветовой круг и дополнительные цвета"],
      {
        en: ["Build a twelve-part colour wheel", "Know hue, lightness and saturation", "Use complementary contrast to make colours sing"],
        hy: ["Կառուցել տասներկու մասից գունային շրջան", "Իմանալ գունային երանգը, բացությունը և հագեցվածությունը", "Փոխլրացնող հակադրությամբ գույները հնչեղ դարձնել"],
        ru: ["Построить двенадцатичастный цветовой круг", "Знать цветовой тон, светлоту и насыщенность", "Использовать контраст дополнительных цветов, чтобы цвета зазвучали"],
      },
      {
        en: `## The colour wheel

Artists arrange colours in a **wheel**.

* **Primary colours:** red, yellow, blue. They cannot be mixed from other paints.
* **Secondary colours:** orange (red + yellow), green (yellow + blue), violet (blue + red).
* **Tertiary colours:** mixtures of a primary and a neighbouring secondary, for example yellow-orange or blue-green.

Together they form a wheel of **twelve** colours.

~~~art
wheel modes=primary,secondary
~~~

## Three properties of colour

| Property | Question | Example |
|---|---|---|
| **hue** | which colour is it? | red, blue, green |
| **lightness (value)** | how light or dark? | pink is a light red, maroon a dark red |
| **saturation** | how pure and bright? | a bright red poppy vs a dusty red brick |

Adding **white** makes a colour lighter; adding **black** or a complementary colour makes it darker and less saturated; adding **grey** makes it dull.

~~~art
tints
~~~

## Complementary colours

Colours **opposite** each other on the wheel are **complementary**:

* red and green;
* yellow and violet;
* blue and orange.

Side by side, they make each other **brighter**: this is **complementary contrast**. Mixed together, they give a grey-brown and cancel each other. Look at a red flower among green leaves, or at Saryan's orange mountains under a blue sky.

~~~art
wheel mode=complementary
~~~

## Other contrasts

* **warm and cool:** red, orange, yellow against blue, green, violet;
* **light and dark:** yellow against violet;
* **saturated and dull:** one pure colour among greyish ones.

~~~art
wheel modes=warmcool,analogous,triad
~~~

## Try it

1. Paint a twelve-part colour wheel with gouache, using only red, yellow and blue.
2. Paint three small squares, each with one complementary pair side by side.
3. Paint a fruit still life where the background is complementary to the fruit.

~~~art
mixer
~~~

~~~art
tasks
1. Name the primary colours. Why are they called primary?
2. How do you get green? Violet?
3. Name the three properties of colour.
4. Which colour is complementary to orange? To violet?
5. What happens when you mix two complementary colours?
6. How does saturation differ from lightness?
7. Paint one landscape twice: once in warm, once in cool colours.
~~~

~~~art
hints
1. Red, yellow, blue; they cannot be mixed from other paints. 2. Yellow + blue; blue + red. 3. Hue, lightness, saturation. 4. Blue; yellow. 5. A grey-brown colour: they cancel each other. 6. Saturation is how pure and bright a colour is; lightness is how light or dark it is. 7. Your work.
~~~`,
        hy: `## Գունային շրջանը

Նկարիչները գույները դասավորում են **շրջանաձև**։

* **Հիմնական գույներ**՝ կարմիր, դեղին, կապույտ։ Դրանք չի կարելի ստանալ այլ ներկեր խառնելով։
* **Երկրորդային գույներ**՝ նարնջագույն (կարմիր + դեղին), կանաչ (դեղին + կապույտ), մանուշակագույն (կապույտ + կարմիր)։
* **Երրորդային գույներ**՝ հիմնական և հարևան երկրորդային գույնի խառնուրդներ, օրինակ՝ դեղնանարնջագույն կամ կապտականաչ։

Միասին նրանք կազմում են **տասներկու** գույնից շրջան։

~~~art
wheel modes=primary,secondary
~~~

## Գույնի երեք հատկություն

| Հատկություն | Հարց | Օրինակ |
|---|---|---|
| **գունային երանգ** | որ գույնն է | կարմիր, կապույտ, կանաչ |
| **բացություն** | որքան բաց կամ մուգ | վարդագույնը բաց կարմիր է, բալագույնը՝ մուգ կարմիր |
| **հագեցվածություն** | որքան մաքուր և վառ | վառ կարմիր կակաչ և փոշոտ կարմիր աղյուս |

**Սպիտակ** ավելացնելիս գույնը բացվում է, **սև** կամ փոխլրացնող գույն ավելացնելիս մգանում է և պակաս հագեցված դառնում, **մոխրագույն** ավելացնելիս՝ խամրում է։

~~~art
tints
~~~

## Փոխլրացնող գույներ

Շրջանի վրա **իրար դիմաց** գտնվող գույները **փոխլրացնող** են․

* կարմիր և կանաչ,
* դեղին և մանուշակագույն,
* կապույտ և նարնջագույն։

Կողք կողքի նրանք իրար ավելի **վառ** են դարձնում․ սա **փոխլրացնող հակադրությունն** է։ Խառնված՝ տալիս են մոխրադարչնագույն և չեզոքացնում իրար։ Նայիր կարմիր ծաղկին կանաչ տերևների մեջ կամ Սարյանի նարնջագույն լեռներին կապույտ երկնքի տակ։

~~~art
wheel mode=complementary
~~~

## Այլ հակադրություններ

* **տաք և սառը**՝ կարմիր, նարնջագույն, դեղին՝ կապույտի, կանաչի, մանուշակագույնի դեմ,
* **բաց և մուգ**՝ դեղին մանուշակագույնի դեմ,
* **հագեցված և խամրած**՝ մեկ մաքուր գույն մոխրավուն գույների մեջ։

~~~art
wheel modes=warmcool,analogous,triad
~~~

## Փորձիր

1. Գուաշով նկարիր տասներկու մասից գունային շրջան՝ օգտագործելով միայն կարմիր, դեղին և կապույտ։
2. Նկարիր երեք փոքր քառակուսի, ամեն մեկում՝ մեկ փոխլրացնող զույգ կողք կողքի։
3. Նկարիր մրգերով նատյուրմորտ, որտեղ ֆոնը փոխլրացնող է մրգերին։

~~~art
mixer
~~~

~~~art
tasks
1. Անվանիր հիմնական գույները։ Ինչու են դրանք կոչվում հիմնական։
2. Ինչպես ստանալ կանաչ։ Իսկ մանուշակագույն։
3. Անվանիր գույնի երեք հատկությունը։
4. Որ գույնն է փոխլրացնող նարնջագույնին։ Իսկ մանուշակագույնին։
5. Ինչ է տեղի ունենում, երբ խառնում ես երկու փոխլրացնող գույն։
6. Ինչով է հագեցվածությունը տարբերվում բացությունից։
7. Նկարիր նույն բնանկարն երկու անգամ՝ մեկ անգամ տաք, մեկ անգամ սառը գույներով։
~~~

~~~art
hints
1. Կարմիր, դեղին, կապույտ․ դրանք չի կարելի ստանալ այլ ներկեր խառնելով։ 2. Դեղին + կապույտ, կապույտ + կարմիր։ 3. Գունային երանգ, բացություն, հագեցվածություն։ 4. Կապույտը, դեղինը։ 5. Ստացվում է մոխրադարչնագույն․ դրանք չեզոքացնում են իրար։ 6. Հագեցվածությունն այն է, թե որքան մաքուր և վառ է գույնը, բացությունը՝ թե որքան բաց կամ մուգ է։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Цветовой круг

Художники располагают цвета по **кругу**.

* **Основные цвета:** красный, жёлтый, синий. Их нельзя получить смешением других красок.
* **Составные цвета:** оранжевый (красный + жёлтый), зелёный (жёлтый + синий), фиолетовый (синий + красный).
* **Промежуточные цвета:** смеси основного и соседнего составного, например жёлто-оранжевый или сине-зелёный.

Вместе они образуют круг из **двенадцати** цветов.

~~~art
wheel modes=primary,secondary
~~~

## Три характеристики цвета

| Характеристика | Вопрос | Пример |
|---|---|---|
| **цветовой тон** | какой это цвет? | красный, синий, зелёный |
| **светлота** | насколько светлый или тёмный? | розовый — светлый красный, бордовый — тёмный красный |
| **насыщенность** | насколько чистый и яркий? | яркий красный мак и пыльный красный кирпич |

Если добавить **белила**, цвет светлеет; **чёрную** или дополнительную краску — темнеет и теряет насыщенность; **серую** — тускнеет.

~~~art
tints
~~~

## Дополнительные цвета

Цвета, стоящие **друг напротив друга** в круге, — **дополнительные**:

* красный и зелёный;
* жёлтый и фиолетовый;
* синий и оранжевый.

Рядом они делают друг друга **ярче**: это **контраст дополнительных цветов**. Смешанные, они дают серо-коричневый и гасят друг друга. Посмотри на красный цветок среди зелёных листьев или на оранжевые горы Сарьяна под синим небом.

~~~art
wheel mode=complementary
~~~

## Другие контрасты

* **тёплое и холодное:** красный, оранжевый, жёлтый против синего, зелёного, фиолетового;
* **светлое и тёмное:** жёлтый против фиолетового;
* **насыщенное и приглушённое:** один чистый цвет среди сероватых.

~~~art
wheel modes=warmcool,analogous,triad
~~~

## Попробуй

1. Напиши гуашью двенадцатичастный цветовой круг, используя только красный, жёлтый и синий.
2. Напиши три маленьких квадрата, в каждом — пара дополнительных цветов рядом.
3. Напиши натюрморт с фруктами, где фон дополнителен к фруктам.

~~~art
mixer
~~~

~~~art
tasks
1. Назови основные цвета. Почему они так называются?
2. Как получить зелёный? Фиолетовый?
3. Назови три характеристики цвета.
4. Какой цвет дополнителен к оранжевому? К фиолетовому?
5. Что будет, если смешать два дополнительных цвета?
6. Чем насыщенность отличается от светлоты?
7. Напиши один пейзаж дважды: в тёплой и в холодной гамме.
~~~

~~~art
hints
1. Красный, жёлтый, синий; их нельзя получить смешением других красок. 2. Жёлтый + синий; синий + красный. 3. Цветовой тон, светлота, насыщенность. 4. Синий; жёлтый. 5. Серо-коричневый цвет: они гасят друг друга. 6. Насыщенность — чистота и яркость цвета, светлота — насколько он светлый или тёмный. 7. Твоя работа.
~~~`,
      },
      [
        q(t("The primary colours are…", "Հիմնական գույներն են…", "Основные цвета —…"), [t("red, yellow, blue", "կարմիրը, դեղինը, կապույտը", "красный, жёлтый, синий"), t("green, orange, violet", "կանաչը, նարնջագույնը, մանուշակագույնը", "зелёный, оранжевый, фиолетовый"), t("black, white, grey", "սևը, սպիտակը, մոխրագույնը", "чёрный, белый, серый")], 0),
        q(t("Yellow + blue gives…", "Դեղին + կապույտ տալիս է…", "Жёлтый + синий дают…"), [t("orange", "նարնջագույն", "оранжевый"), t("green", "կանաչ", "зелёный"), t("violet", "մանուշակագույն", "фиолетовый")], 1),
        q(t("The complementary colour of red is…", "Կարմիրի փոխլրացնող գույնը…", "Дополнительный цвет к красному —…"), [t("orange", "նարնջագույնն է", "оранжевый"), t("blue", "կապույտն է", "синий"), t("green", "կանաչն է", "зелёный")], 2),
        q(t("How pure and bright a colour is, is its…", "Թե որքան մաքուր և վառ է գույնը, նրա…", "Чистота и яркость цвета — это его…"), [t("saturation", "հագեցվածությունն է", "насыщенность"), t("lightness", "բացությունն է", "светлота"), t("temperature", "ջերմաստիճանն է", "температура")], 0),
        q(t("Side by side, complementary colours…", "Կողք կողքի փոխլրացնող գույները…", "Рядом дополнительные цвета…"), [t("disappear", "անհետանում են", "исчезают"), t("look brighter", "ավելի վառ են երևում", "кажутся ярче"), t("turn grey", "մոխրագույն են դառնում", "становятся серыми")], 1),
        q(t("Adding white to a colour makes it…", "Գույնին սպիտակ ավելացնելն այն դարձնում է…", "Белила делают цвет…"), [t("darker", "ավելի մուգ", "темнее"), t("warmer", "ավելի տաք", "теплее"), t("lighter", "ավելի բաց", "светлее")], 2),
      ],
    ),
    lesson(
      "texture-materials",
      ["Sculpture: volume, texture and material", "Քանդակ․ ծավալ, ֆակտուրա և նյութ", "Скульптура: объём, фактура и материал"],
      {
        en: ["Know the kinds of sculpture: round sculpture and relief, monumental and easel", "Understand how material and texture change the image", "Model a small figure in clay or plasticine with different textures"],
        hy: ["Իմանալ քանդակի տեսակները՝ կլոր քանդակ և բարձրաքանդակ, մոնումենտալ և հաստոցային", "Հասկանալ, թե ինչպես են նյութն ու ֆակտուրան փոխում կերպարը", "Կավից կամ պլաստիլինից ծեփել փոքր արձանիկ տարբեր ֆակտուրաներով"],
        ru: ["Знать виды скульптуры: круглая и рельеф, монументальная и станковая", "Понимать, как материал и фактура меняют образ", "Вылепить маленькую фигуру из глины или пластилина с разными фактурами"],
      },
      {
        en: `## Kinds of sculpture

* **Round sculpture** can be seen from all sides: you walk around it.
* **Relief** rises from a flat background (you met it on Zvartnots and Akhtamar).

By size and place:

| Kind | Where | Example |
|---|---|---|
| **monumental** | squares, parks, mountains; meant to be seen from far away | «Mother Armenia» in Yerevan; Mukhina's «Worker and Kolkhoz Woman» in Moscow |
| **easel** | in a room or museum, close to the viewer | a portrait bust |
| **small sculpture** | on a shelf or table | a figurine, a medal |

~~~art
pic tamanyan stork
~~~

## Materials

| Material | Character |
|---|---|
| **marble** | white, smooth, glowing; can be polished |
| **granite, basalt** | very hard, dark, strong; lasts for ages |
| **tuff** | the soft volcanic stone of Armenia, pink, orange or black |
| **bronze** | cast from a clay model; dark, shining, strong |
| **hammered copper** | shaped by hammering sheets; Kochar's «David of Sasun» (1959) and Ara Harutyunyan's «Mother Armenia» (1967) are made this way |
| **wood** | warm, with a pattern of fibres |
| **clay, terracotta** | soft for modelling; fired clay is called terracotta |

~~~art
pic plasticine pebbles
~~~

## Texture

**Texture** is the character of a surface: smooth, rough, grainy, striped. A polished surface reflects light and looks calm and noble; a rough surface catches shadows and looks strong and alive. Sculptors often combine them: a smooth face and rough hair or clothes.

~~~art
tone
Texture can be drawn: smooth marble with soft tone, rough stone with dots, wood with lines.
~~~

## Light and sculpture

A sculpture lives in **light**. Under the midday sun its shadows are sharp; in the evening they are soft. The same statue looks different from different sides and at different times.

~~~art
light
~~~

## Try it

1. Model a small animal or a person from clay or plasticine (10–15 cm).
2. Make the main form first, then add details.
3. Give different parts different textures: smooth (wet finger), rough (a toothbrush), striped (a fork), dotted (a pencil tip).
4. Light it with a lamp from the side and look at the shadows.

~~~art
tasks
1. What is the difference between round sculpture and relief?
2. What is monumental sculpture? Give an example.
3. Name four materials of sculpture and their character.
4. How was Kochar's «David of Sasun» made?
5. What is texture? What can a rough texture express?
6. Why does a sculpture look different in the morning and in the evening?
7. Model a figure with at least three different textures.
~~~

~~~art
hints
1. Round sculpture can be seen from all sides; relief rises from a flat background. 2. Large sculpture for squares and parks, seen from far away; for example «Mother Armenia». 3. For example: marble (white, smooth), granite (hard, dark), bronze (cast, shining), wood (warm, fibrous). 4. From hammered copper. 5. The character of a surface; strength and life. 6. The light changes, and so do the shadows. 7. Your work.
~~~`,
        hy: `## Քանդակի տեսակները

* **Կլոր քանդակը** կարելի է տեսնել բոլոր կողմերից․ դու պտտվում ես նրա շուրջը։
* **Բարձրաքանդակը** (ռելիեֆը) բարձրանում է հարթ ֆոնից (դու այն տեսել ես Զվարթնոցում և Աղթամարում)։

Ըստ չափի և տեղի․

| Տեսակ | Որտեղ | Օրինակ |
|---|---|---|
| **մոնումենտալ** | հրապարակներ, այգիներ, լեռներ, նախատեսված է հեռվից դիտելու համար | «Մայր Հայաստան» Երևանում, Մուխինայի «Բանվորը և կոլտնտեսուհին» Մոսկվայում |
| **հաստոցային** | սենյակում կամ թանգարանում, դիտողին մոտ | դիմաքանդակ (կիսանդրի) |
| **փոքր քանդակ** | դարակի կամ սեղանի վրա | արձանիկ, մեդալ |

~~~art
pic tamanyan stork
~~~

## Նյութեր

| Նյութ | Բնավորություն |
|---|---|
| **մարմար** | սպիտակ, հարթ, լուսավոր, կարելի է հղկել |
| **գրանիտ, բազալտ** | շատ կարծր, մուգ, ամուր, դարեր է դիմանում |
| **տուֆ** | Հայաստանի փափուկ հրաբխային քարը՝ վարդագույն, նարնջագույն կամ սև |
| **բրոնզ** | ձուլում են կավե մոդելից, մուգ, փայլուն, ամուր |
| **կռած պղինձ** | ձևավորում են թիթեղները կռելով․ այսպես են պատրաստված Քոչարի «Սասունցի Դավիթը» (1959) և Արա Հարությունյանի «Մայր Հայաստանը» (1967) |
| **փայտ** | տաք, մանրաթելերի նախշով |
| **կավ, տերակոտա** | փափուկ է ծեփելու համար, թրծված կավը կոչվում է տերակոտա |

~~~art
pic plasticine pebbles
~~~

## Ֆակտուրա

**Ֆակտուրան** մակերեսի բնույթն է՝ հարթ, կոպիտ, հատիկավոր, գծավոր։ Հղկված մակերեսն անդրադարձնում է լույսը և հանդարտ ու ազնիվ տեսք ունի, կոպիտ մակերեսն որսում է ստվերները և ուժեղ ու կենդանի տեսք ունի։ Քանդակագործները հաճախ համադրում են դրանք՝ հարթ դեմք և կոպիտ մազեր կամ հագուստ։

~~~art
tone
Ֆակտուրան կարելի է նկարել․ հարթ մարմարը՝ մեղմ տոնով, կոպիտ քարը՝ կետերով, փայտը՝ գծերով։
~~~

## Լույսը և քանդակը

Քանդակն ապրում է **լույսի** մեջ։ Կեսօրվա արևի տակ նրա ստվերները սուր են, երեկոյան՝ փափուկ։ Նույն արձանը տարբեր կողմերից և տարբեր ժամերին տարբեր տեսք ունի։

~~~art
light
~~~

## Փորձիր

1. Կավից կամ պլաստիլինից ծեփիր փոքր կենդանի կամ մարդ (10–15 սմ)։
2. Նախ արա հիմնական ձևը, հետո ավելացրու մանրամասները։
3. Տարբեր մասերին տուր տարբեր ֆակտուրաներ՝ հարթ (թաց մատով), կոպիտ (ատամի խոզանակով), գծավոր (պատառաքաղով), կետավոր (մատիտի ծայրով)։
4. Լուսավորիր այն լամպով կողքից և նայիր ստվերներին։

~~~art
tasks
1. Ինչով է տարբերվում կլոր քանդակը բարձրաքանդակից։
2. Ինչ է մոնումենտալ քանդակը։ Բեր օրինակ։
3. Անվանիր քանդակի չորս նյութ և դրանց բնավորությունը։
4. Ինչպես է պատրաստված Քոչարի «Սասունցի Դավիթը»։
5. Ինչ է ֆակտուրան։ Ինչ կարող է արտահայտել կոպիտ ֆակտուրան։
6. Ինչու է քանդակը տարբեր տեսք ունենում առավոտյան և երեկոյան։
7. Ծեփիր արձանիկ՝ առնվազն երեք տարբեր ֆակտուրայով։
~~~

~~~art
hints
1. Կլոր քանդակը կարելի է տեսնել բոլոր կողմերից, բարձրաքանդակը բարձրանում է հարթ ֆոնից։ 2. Հրապարակների և այգիների մեծ քանդակ, որ դիտում են հեռվից, օրինակ՝ «Մայր Հայաստանը»։ 3. Օրինակ՝ մարմար (սպիտակ, հարթ), գրանիտ (կարծր, մուգ), բրոնզ (ձուլված, փայլուն), փայտ (տաք, մանրաթելային)։ 4. Կռած պղնձից։ 5. Մակերեսի բնույթը․ ուժ և կենդանություն։ 6. Լույսը փոխվում է, և նրա հետ՝ ստվերները։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Виды скульптуры

* **Круглую скульптуру** можно осмотреть со всех сторон: её обходят вокруг.
* **Рельеф** выступает из плоского фона (ты видел его в Звартноце и Ахтамаре).

По размеру и месту:

| Вид | Где | Пример |
|---|---|---|
| **монументальная** | площади, парки, горы; рассчитана на взгляд издалека | «Мать Армения» в Ереване; «Рабочий и колхозница» Мухиной в Москве |
| **станковая** | в комнате или музее, близко к зрителю | портретный бюст |
| **мелкая пластика** | на полке или столе | статуэтка, медаль |

~~~art
pic tamanyan stork
~~~

## Материалы

| Материал | Характер |
|---|---|
| **мрамор** | белый, гладкий, светящийся; его можно полировать |
| **гранит, базальт** | очень твёрдые, тёмные, прочные; стоят веками |
| **туф** | мягкий вулканический камень Армении, розовый, оранжевый или чёрный |
| **бронза** | её отливают по глиняной модели; тёмная, блестящая, прочная |
| **чеканная медь** | форму выколачивают из листов; так сделаны «Давид Сасунский» Кочара (1959) и «Мать Армения» Ара Арутюняна (1967) |
| **дерево** | тёплое, с рисунком волокон |
| **глина, терракота** | мягкая для лепки; обожжённую глину называют терракотой |

~~~art
pic plasticine pebbles
~~~

## Фактура

**Фактура** — характер поверхности: гладкая, шероховатая, зернистая, полосатая. Полированная поверхность отражает свет и выглядит спокойной и благородной; шероховатая ловит тени и выглядит сильной и живой. Скульпторы часто сочетают их: гладкое лицо и шероховатые волосы или одежда.

~~~art
tone
Фактуру можно нарисовать: гладкий мрамор мягким тоном, грубый камень точками, дерево линиями.
~~~

## Свет и скульптура

Скульптура живёт в **свете**. Под полуденным солнцем её тени резкие, вечером — мягкие. Одна и та же статуя выглядит по-разному с разных сторон и в разное время.

~~~art
light
~~~

## Попробуй

1. Вылепи из глины или пластилина маленькое животное или человека (10–15 см).
2. Сначала сделай основную форму, потом добавь детали.
3. Придай разным частям разную фактуру: гладкую (мокрым пальцем), шероховатую (зубной щёткой), полосатую (вилкой), точечную (кончиком карандаша).
4. Освети её лампой сбоку и посмотри на тени.

~~~art
tasks
1. Чем круглая скульптура отличается от рельефа?
2. Что такое монументальная скульптура? Приведи пример.
3. Назови четыре материала скульптуры и их характер.
4. Как сделан «Давид Сасунский» Кочара?
5. Что такое фактура? Что может выразить шероховатая фактура?
6. Почему скульптура утром и вечером выглядит по-разному?
7. Вылепи фигуру не менее чем с тремя разными фактурами.
~~~

~~~art
hints
1. Круглую скульптуру видно со всех сторон, рельеф выступает из плоского фона. 2. Большая скульптура для площадей и парков, рассчитанная на взгляд издалека; например «Мать Армения». 3. Например: мрамор (белый, гладкий), гранит (твёрдый, тёмный), бронза (литая, блестящая), дерево (тёплое, волокнистое). 4. Из чеканной меди. 5. Характер поверхности; силу и жизнь. 6. Меняется свет, а с ним и тени. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Sculpture you can walk around is…", "Քանդակը, որի շուրջը կարելի է պտտվել…", "Скульптура, которую можно обойти, —…"), [t("round sculpture", "կլոր քանդակ է", "круглая"), t("relief", "բարձրաքանդակ է", "рельеф"), t("a mosaic", "խճանկար է", "мозаика")], 0),
        q(t("«Mother Armenia» is an example of … sculpture.", "«Մայր Հայաստանը» … քանդակի օրինակ է։", "«Мать Армения» — пример … скульптуры."), [t("small", "փոքր", "мелкой"), t("monumental", "մոնումենտալ", "монументальной"), t("easel", "հաստոցային", "станковой")], 1),
        q(t("Fired clay is called…", "Թրծված կավը կոչվում է…", "Обожжённую глину называют…"), [t("marble", "մարմար", "мрамором"), t("tuff", "տուֆ", "туфом"), t("terracotta", "տերակոտա", "терракотой")], 2),
        q(t("The character of a surface is its…", "Մակերեսի բնույթը նրա…", "Характер поверхности — это…"), [t("texture", "ֆակտուրան է", "фактура"), t("genre", "ժանրն է", "жанр"), t("hue", "երանգն է", "цветовой тон")], 0),
        q(t("Kochar's «David of Sasun» is made of…", "Քոչարի «Սասունցի Դավիթը» պատրաստված է…", "«Давид Сасунский» Кочара сделан из…"), [t("marble", "մարմարից", "мрамора"), t("hammered copper", "կռած պղնձից", "чеканной меди"), t("wood", "փայտից", "дерева")], 1),
        q(t("A polished surface looks…", "Հղկված մակերեսը թվում է…", "Полированная поверхность выглядит…"), [t("rough and wild", "կոպիտ և վայրի", "грубой и дикой"), t("dusty", "փոշոտ", "пыльной"), t("calm and noble", "հանդարտ և ազնիվ", "спокойной и благородной")], 2),
      ],
    ),
  ],
};
