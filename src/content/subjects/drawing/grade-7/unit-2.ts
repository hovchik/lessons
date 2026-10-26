import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("From plane to volume", "Հարթությունից ծավալ", "В мире вещей и зданий"),
  summary: t(
    "Volumetric composition from paper, module and structure, a model of a building, product design, material and form, packaging.",
    "Ծավալային կոմպոզիցիա թղթից, մոդուլ և կառուցվածք, շենքի մակետ, իրի դիզայն, նյութ և ձև, փաթեթավորում։",
    "Объёмная композиция из бумаги, модуль и конструкция, макет здания, дизайн вещи, материал и форма, упаковка.",
  ),
  lessons: [
    lesson(
      "volumetric-composition",
      ["Volumetric composition from paper", "Ծավալային կոմպոզիցիա թղթից", "Объёмно-пространственная композиция"],
      {
        en: ["Understand how a flat drawing becomes a volume in space", "Learn paper techniques: scoring, folding, cutting and gluing", "Build a composition of several geometric volumes"],
        hy: ["Հասկանալ, թե ինչպես է հարթ գծագիրը դառնում ծավալ տարածության մեջ", "Սովորել թղթի հետ աշխատելու հնարքներ՝ ակոսում, ծալում, կտրում և սոսնձում", "Կառուցել կոմպոզիցիա մի քանի երկրաչափական ծավալից"],
        ru: ["Понять, как плоский рисунок превращается в объём в пространстве", "Освоить приёмы работы с бумагой: надрез, сгиб, вырезание и склейку", "Построить композицию из нескольких геометрических объёмов"],
      },
      {
        en: `## From a sheet to a space

Architects and designers think in **volumes**. Before building a house or making a chair, they make a **model** (maquette) from paper or cardboard. A flat sheet turns into a volume when we fold it.

## Basic volumes

| Volume | Made from | Feeling |
|---|---|---|
| **Cube and prism** | a net of squares or rectangles | stable, solid |
| **Cylinder** | a rectangle rolled up | smooth, soft |
| **Pyramid and cone** | triangles or a sector of a circle | striving upward |
| **Sphere and hemisphere** | strips or segments | complete, calm |

The flat pattern of a volume is called a **net**. Remember to add **flaps** for gluing.

~~~art
pic shapes
~~~

## Paper techniques

1. **Scoring:** draw a line with a blunt point (a ruler and an empty pen) so the paper folds neatly.
2. **Folding:** a fold toward you is a «valley», away from you a «mountain».
3. **Cutting:** a sharp knife on a board, or scissors; adults help with the knife.
4. **Gluing:** a thin layer of glue on the flaps, press and wait.

~~~art
net
~~~

## Laws of volumetric composition

* **Dominant:** one volume is the biggest or tallest; the others support it.
* **Contrast:** tall and low, round and square, light and shadow.
* **Rhythm:** volumes or openings repeat.
* **Balance:** the composition does not seem to fall.
* **View from all sides:** walk around your model; it must look good from every side, not only from the front.

In 1919–1920 the Russian artist **Vladimir Tatlin** made a model of a huge spiral tower, the «Monument to the Third International». It was never built, but its model became a symbol of a new art of volumes.

~~~art
light
~~~

## Task

Build a composition of three to five volumes on a base of cardboard: one dominant (a tall prism or cone) and smaller ones around it. Use white paper only, so that light and shadow show the form.

~~~art
tasks
1. Why do architects make models?
2. What is the net of a volume?
3. Which paper technique helps the paper fold neatly?
4. What is the difference between a «valley» and a «mountain» fold?
5. Which volumes look stable, and which strive upward?
6. Why should a model be viewed from all sides?
7. Build a paper composition of three to five volumes with a dominant.
~~~

~~~art
hints
1. To see the volume and composition before building. 2. Its flat pattern. 3. Scoring. 4. A valley folds toward you, a mountain away from you. 5. Cube and prism look stable; pyramid and cone strive upward. 6. Because volumes are seen from every side, not only from the front. 7. Your model.
~~~`,
        hy: `## Թերթից՝ տարածություն

Ճարտարապետներն ու դիզայներները մտածում են **ծավալներով**։ Նախքան տուն կառուցելը կամ աթոռ պատրաստելը, նրանք թղթից կամ ստվարաթղթից **մակետ** են պատրաստում։ Հարթ թերթը դառնում է ծավալ, երբ այն ծալում ենք։

## Հիմնական ծավալներ

| Ծավալ | Ինչից է պատրաստվում | Զգացողություն |
|---|---|---|
| **Խորանարդ և պրիզմա** | քառակուսիների կամ ուղղանկյունների փռվածք | կայուն, ամուր |
| **Գլան** | փաթաթված ուղղանկյուն | սահուն, մեղմ |
| **Բուրգ և կոն** | եռանկյուններ կամ շրջանի հատված | ձգտում դեպի վեր |
| **Գունդ և կիսագունդ** | շերտեր կամ հատվածներ | ամբողջական, հանգիստ |

Ծավալի հարթ ձևանմուշը կոչվում է **փռվածք**։ Չմոռանաս ավելացնել **եզրեր**՝ սոսնձելու համար։

~~~art
pic shapes
~~~

## Թղթի հետ աշխատելու հնարքներ

1. **Ակոսում**՝ բութ ծայրով գիծ քաշիր (քանոն և դատարկ գրիչ), որպեսզի թուղթը կոկիկ ծալվի։
2. **Ծալում**՝ դեպի քեզ ծալքը «հովիտ» է, քեզնից դեպի դուրս՝ «լեռ»։
3. **Կտրում**՝ սուր դանակ տախտակի վրա կամ մկրատ, դանակով աշխատելիս մեծերն են օգնում։
4. **Սոսնձում**՝ սոսնձի բարակ շերտ եզրերին, սեղմիր և սպասիր։

~~~art
net
~~~

## Ծավալային կոմպոզիցիայի օրենքները

* **Դոմինանտ**՝ մի ծավալն ամենամեծն է կամ ամենաբարձրը, մյուսներն աջակցում են նրան։
* **Կոնտրաստ**՝ բարձր և ցածր, կլոր և քառակուսի, լույս և ստվեր։
* **Ռիթմ**՝ ծավալները կամ բացվածքները կրկնվում են։
* **Հավասարակշռություն**՝ կոմպոզիցիան չի թվում, թե ընկնում է։
* **Դիտում բոլոր կողմերից**՝ շրջիր մակետի շուրջը, այն պետք է լավ երևա ամեն կողմից, ոչ միայն առջևից։

1919–1920 թվականներին ռուս նկարիչ **Վլադիմիր Տատլինը** պատրաստեց հսկայական պարուրաձև աշտարակի մակետ՝ «Երրորդ Ինտերնացիոնալի հուշարձանը»։ Այն այդպես էլ չկառուցվեց, բայց նրա մակետը դարձավ ծավալների նոր արվեստի խորհրդանիշ։

~~~art
light
~~~

## Առաջադրանք

Ստվարաթղթե հիմքի վրա կառուցիր երեքից հինգ ծավալից կոմպոզիցիա՝ մեկ դոմինանտ (բարձր պրիզմա կամ կոն) և ավելի փոքրեր նրա շուրջը։ Օգտագործիր միայն սպիտակ թուղթ, որպեսզի լույսն ու ստվերը ցույց տան ձևը։

~~~art
tasks
1. Ինչու են ճարտարապետները մակետներ պատրաստում։
2. Ինչ է ծավալի փռվածքը։
3. Թղթի հետ աշխատելու որ հնարքն է օգնում թղթին կոկիկ ծալվել։
4. Ինչով է «հովիտ» ծալքը տարբերվում «լեռ» ծալքից։
5. Որ ծավալներն են կայուն թվում, և որոնք են ձգտում դեպի վեր։
6. Ինչու պետք է մակետը դիտել բոլոր կողմերից։
7. Կառուցիր թղթե կոմպոզիցիա երեքից հինգ ծավալից՝ դոմինանտով։
~~~

~~~art
hints
1. Որպեսզի կառուցելուց առաջ տեսնեն ծավալը և կոմպոզիցիան։ 2. Նրա հարթ ձևանմուշը։ 3. Ակոսումը։ 4. Հովիտը ծալվում է դեպի քեզ, լեռը՝ քեզնից դեպի դուրս։ 5. Խորանարդն ու պրիզման կայուն են թվում, բուրգն ու կոնը ձգտում են դեպի վեր։ 6. Որովհետև ծավալներն երևում են ամեն կողմից, ոչ միայն առջևից։ 7. Քո մակետը։
~~~`,
        ru: `## От листа к пространству

Архитекторы и дизайнеры мыслят **объёмами**. Прежде чем построить дом или сделать стул, они создают **макет** из бумаги или картона. Плоский лист превращается в объём, когда мы его сгибаем.

## Основные объёмы

| Объём | Из чего делается | Впечатление |
|---|---|---|
| **Куб и призма** | развёртка из квадратов или прямоугольников | устойчивость, прочность |
| **Цилиндр** | свёрнутый прямоугольник | плавность, мягкость |
| **Пирамида и конус** | треугольники или сектор круга | устремлённость вверх |
| **Шар и полусфера** | полоски или сегменты | завершённость, покой |

Плоская выкройка объёма называется **развёрткой**. Не забудь добавить **клапаны** для склейки.

~~~art
pic shapes
~~~

## Приёмы работы с бумагой

1. **Биговка:** проведи линию тупым концом (линейка и пустая ручка), чтобы бумага ровно согнулась.
2. **Сгиб:** сгиб к себе — «долина», от себя — «гора».
3. **Резание:** острый нож на доске или ножницы; с ножом помогают взрослые.
4. **Склейка:** тонкий слой клея на клапаны, прижми и подожди.

~~~art
net
~~~

## Законы объёмной композиции

* **Доминанта:** один объём самый большой или высокий, остальные его поддерживают.
* **Контраст:** высокое и низкое, круглое и квадратное, свет и тень.
* **Ритм:** повторяются объёмы или проёмы.
* **Равновесие:** композиция не кажется падающей.
* **Обзор со всех сторон:** обойди макет — он должен хорошо смотреться отовсюду, а не только спереди.

В 1919–1920 годах русский художник **Владимир Татлин** сделал модель огромной спиральной башни — «Памятника III Интернационалу». Её так и не построили, но модель стала символом нового искусства объёмов.

~~~art
light
~~~

## Задание

Построй на картонной основе композицию из трёх-пяти объёмов: одна доминанта (высокая призма или конус) и меньшие объёмы вокруг. Используй только белую бумагу, чтобы свет и тень выявили форму.

~~~art
tasks
1. Зачем архитекторы делают макеты?
2. Что такое развёртка объёма?
3. Какой приём помогает бумаге ровно согнуться?
4. Чем сгиб «долина» отличается от сгиба «гора»?
5. Какие объёмы выглядят устойчивыми, а какие устремлены вверх?
6. Почему макет нужно рассматривать со всех сторон?
7. Построй бумажную композицию из трёх-пяти объёмов с доминантой.
~~~

~~~art
hints
1. Чтобы увидеть объём и композицию до строительства. 2. Его плоская выкройка. 3. Биговка. 4. «Долина» сгибается к себе, «гора» — от себя. 5. Куб и призма устойчивы, пирамида и конус устремлены вверх. 6. Потому что объём видно со всех сторон, а не только спереди. 7. Твой макет.
~~~`,
      },
      [
        q(t("The flat pattern of a volume is called a…", "Ծավալի հարթ ձևանմուշը կոչվում է…", "Плоская выкройка объёма называется…"), [t("net", "փռվածք", "развёрткой"), t("grid", "ցանց", "сеткой"), t("spread", "բացվածք", "разворотом")], 0),
        q(t("Which volume seems to strive upward?", "Որ ծավալն է թվում, թե ձգտում է դեպի վեր։", "Какой объём устремлён вверх?"), [t("cube", "խորանարդը", "куб"), t("cone", "կոնը", "конус"), t("hemisphere", "կիսագունդը", "полусфера")], 1),
        q(t("Pressing a line with a blunt point before folding is…", "Ծալելուց առաջ բութ ծայրով գիծ սեղմելը…", "Продавливание линии тупым концом перед сгибом — это…"), [t("gluing", "սոսնձում է", "склейка"), t("cutting", "կտրում է", "резание"), t("scoring", "ակոսում է", "биговка")], 2),
        q(t("A fold toward you is called a…", "Դեպի քեզ ծալքը կոչվում է…", "Сгиб к себе называется…"), [t("valley", "հովիտ", "«долина»"), t("mountain", "լեռ", "«гора»"), t("flap", "եզր", "клапан")], 0),
        q(t("Tatlin's tower model had the shape of a…", "Տատլինի աշտարակի մակետն ուներ … ձև։", "Модель башни Татлина имела форму…"), [t("cube", "խորանարդի", "куба"), t("spiral", "պարույրի", "спирали"), t("sphere", "գնդի", "шара")], 1),
        q(t("A volumetric composition must look good…", "Ծավալային կոմպոզիցիան պետք է լավ երևա…", "Объёмная композиция должна хорошо смотреться…"), [t("only from the front", "միայն առջևից", "только спереди"), t("only from above", "միայն վերևից", "только сверху"), t("from all sides", "բոլոր կողմերից", "со всех сторон")], 2),
      ],
    ),
    lesson(
      "module-structure",
      ["Module and structure in architecture", "Մոդուլ և կառուցվածք ճարտարապետությունում", "Конструкция: часть и целое; модуль"],
      {
        en: ["Know what a module is and why builders repeat it", "Learn the main structures: post and beam, arch, vault, dome, frame", "Build a structure from identical modules"],
        hy: ["Իմանալ, թե ինչ է մոդուլը և ինչու են շինարարներն այն կրկնում", "Իմանալ հիմնական կառուցվածքները՝ սյուն և հեծան, կամար, թաղ, գմբեթ, կմախք", "Կառուցել կառուցվածք միանման մոդուլներից"],
        ru: ["Знать, что такое модуль и зачем его повторяют строители", "Познакомиться с основными конструкциями: стойка и балка, арка, свод, купол, каркас", "Построить конструкцию из одинаковых модулей"],
      },
      {
        en: `## Part and whole

A building is made of many repeated parts: bricks, stone blocks, panels, windows. A repeated unit of size is called a **module**. When the parts are related to each other in size, the building looks harmonious.

## Modules through history

* In ancient Greek temples the **diameter of a column** was the module: the height of the column and the distances between columns were measured in it.
* In Japan the room size is counted in **tatami** mats of the same size.
* In Armenia churches were built from **cut tuff blocks**; their rhythm is visible on the walls.
* The French architect **Le Corbusier** created the **Modulor**, a system of proportions based on the height of a human figure.
* Modern houses are built from factory-made **panels** and **blocks**.

~~~art
pic lace khachkar stained-glass
~~~

## Main structures

| Structure | How it works | Example |
|---|---|---|
| **Post and beam** | two posts carry a horizontal beam | Greek temple, the temple of Garni |
| **Arch** | stones press on each other in a curve | Roman aqueducts, bridges |
| **Vault** | an arch extended in length | church halls |
| **Dome** | an arch rotated around its axis | Armenian churches, the Pantheon in Rome |
| **Frame** | a skeleton of steel or concrete; walls only fill it | skyscrapers |
| **Shell and lattice** | thin curved surfaces or nets of bars | the Shukhov radio tower in Moscow |

Armenian builders were masters of the **dome**: a round dome rests on a square hall, and the transition is made with special corner structures. The dome usually stands on a high **drum** with a cone-shaped roof.

~~~art
pattern layout=grid rhythm=alternate palettes=mono,gzhel motifs=triangle,rhombus,circle
One module, many structures: the same shape on a grid makes very different surfaces.
~~~

## Structure and beauty

A good structure is not hidden: its logic is beautiful. Columns show how the roof is carried; arches show how the weight flows to the ground. The engineer **Vladimir Shukhov** built light lattice towers of steel bars; his tower in Moscow (1922) looks like a woven basket.

## Task

Make 10–20 identical modules from paper (for example, triangular tubes or folded strips) and build a tower, a bridge or a pavilion from them. Check how strong it is with a light book.

~~~art
sketch mode=kaleido n=6 paper=white
~~~

~~~art
tasks
1. What is a module?
2. What was the module in a Greek temple?
3. How does an arch work?
4. What is the difference between an arch and a dome?
5. What does a frame do in a skyscraper?
6. What does a typical Armenian dome stand on?
7. Build a structure from identical paper modules and test its strength.
~~~

~~~art
hints
1. A repeated unit of size. 2. The diameter of a column. 3. Stones press on each other in a curve and carry the weight to the supports. 4. A dome is an arch rotated around its axis. 5. It carries the building; the walls only fill it. 6. On a high drum. 7. Your structure.
~~~`,
        hy: `## Մաս և ամբողջություն

Շենքը կազմված է բազմաթիվ կրկնվող մասերից՝ աղյուսներ, քարե բլոկներ, պանելներ, պատուհաններ։ Չափի կրկնվող միավորը կոչվում է **մոդուլ**։ Երբ մասերը չափերով կապված են միմյանց հետ, շենքը ներդաշնակ է թվում։

## Մոդուլները պատմության մեջ

* Հին հունական տաճարներում մոդուլը **սյան տրամագիծն** էր. դրանով էին չափում սյան բարձրությունը և սյուների միջև հեռավորությունները։
* Ճապոնիայում սենյակի չափը հաշվում են նույն չափի **տատամի** խսիրներով։
* Հայաստանում եկեղեցիները կառուցում էին **տաշված տուֆե քարերից**, դրանց ռիթմն երևում է պատերին։
* Ֆրանսիացի ճարտարապետ **Լե Կորբյուզիեն** ստեղծեց **Մոդուլորը**՝ մարդու հասակի վրա հիմնված համամասնությունների համակարգ։
* Ժամանակակից տները կառուցվում են գործարանային **պանելներից** և **բլոկներից**։

~~~art
pic lace khachkar stained-glass
~~~

## Հիմնական կառուցվածքներ

| Կառուցվածք | Ինչպես է աշխատում | Օրինակ |
|---|---|---|
| **Սյուն և հեծան** | երկու սյուն կրում են հորիզոնական հեծանը | հունական տաճար, Գառնիի տաճարը |
| **Կամար** | քարերը կորով սեղմում են միմյանց | հռոմեական ջրատարներ, կամուրջներ |
| **Թաղ** | երկարությամբ ձգված կամար | եկեղեցիների դահլիճներ |
| **Գմբեթ** | իր առանցքի շուրջը պտտված կամար | հայկական եկեղեցիներ, Հռոմի Պանթեոնը |
| **Կմախք** | պողպատե կամ բետոնե հենք, պատերը միայն լցնում են այն | երկնաքերեր |
| **Թաղանթ և ցանց** | բարակ կոր մակերեսներ կամ ձողերի ցանցեր | Շուխովի ռադիոաշտարակը Մոսկվայում |

Հայ շինարարները **գմբեթի** վարպետներ էին. կլոր գմբեթը հենվում է քառակուսի դահլիճի վրա, և անցումն արվում է հատուկ անկյունային կառուցվածքներով։ Գմբեթը սովորաբար կանգնած է բարձր **թմբուկի** վրա՝ կոնաձև տանիքով։

~~~art
pattern layout=grid rhythm=alternate palettes=mono,gzhel motifs=triangle,rhombus,circle
Մեկ մոդուլ, շատ կառուցվածքներ․ նույն ձևը ցանցի վրա ստեղծում է շատ տարբեր մակերեսներ։
~~~

## Կառուցվածք և գեղեցկություն

Լավ կառուցվածքը չի թաքցվում, նրա տրամաբանությունը գեղեցիկ է։ Սյուները ցույց են տալիս, թե ինչպես է կրվում տանիքը, կամարները՝ թե ինչպես է ծանրությունը հոսում դեպի գետին։ Ինժեներ **Վլադիմիր Շուխովը** պողպատե ձողերից թեթև ցանցավոր աշտարակներ էր կառուցում, նրա աշտարակը Մոսկվայում (1922) նման է հյուսված զամբյուղի։

## Առաջադրանք

Թղթից պատրաստիր 10–20 միանման մոդուլ (օրինակ՝ եռանկյուն խողովակներ կամ ծալված շերտեր) և դրանցից կառուցիր աշտարակ, կամուրջ կամ տաղավար։ Թեթև գրքով ստուգիր, թե որքան ամուր է այն։

~~~art
sketch mode=kaleido n=6 paper=white
~~~

~~~art
tasks
1. Ինչ է մոդուլը։
2. Ինչն էր մոդուլը հունական տաճարում։
3. Ինչպես է աշխատում կամարը։
4. Ինչով է կամարը տարբերվում գմբեթից։
5. Ինչ է անում կմախքն երկնաքերում։
6. Ինչի վրա է կանգնած սովորական հայկական գմբեթը։
7. Միանման թղթե մոդուլներից կառուցիր կառուցվածք և ստուգիր նրա ամրությունը։
~~~

~~~art
hints
1. Չափի կրկնվող միավոր։ 2. Սյան տրամագիծը։ 3. Քարերը կորով սեղմում են միմյանց և ծանրությունը տանում հենարաններին։ 4. Գմբեթն իր առանցքի շուրջը պտտված կամար է։ 5. Կրում է շենքը, պատերը միայն լցնում են այն։ 6. Բարձր թմբուկի վրա։ 7. Քո կառուցվածքը։
~~~`,
        ru: `## Часть и целое

Здание состоит из множества повторяющихся частей: кирпичей, каменных блоков, панелей, окон. Повторяющаяся единица размера называется **модулем**. Когда части соразмерны друг другу, здание выглядит гармоничным.

## Модули в истории

* В древнегреческих храмах модулем был **диаметр колонны**: им измеряли высоту колонны и расстояния между колоннами.
* В Японии размер комнаты считают циновками **татами** одного размера.
* В Армении церкви строили из **тёсаных туфовых блоков**; их ритм виден на стенах.
* Французский архитектор **Ле Корбюзье** создал **Модулор** — систему пропорций, основанную на росте человека.
* Современные дома собирают из заводских **панелей** и **блоков**.

~~~art
pic lace khachkar stained-glass
~~~

## Основные конструкции

| Конструкция | Как работает | Пример |
|---|---|---|
| **Стоечно-балочная** | две стойки несут горизонтальную балку | греческий храм, храм Гарни |
| **Арка** | камни давят друг на друга по кривой | римские акведуки, мосты |
| **Свод** | арка, вытянутая в длину | залы церквей |
| **Купол** | арка, повёрнутая вокруг оси | армянские церкви, Пантеон в Риме |
| **Каркас** | скелет из стали или бетона; стены его лишь заполняют | небоскрёбы |
| **Оболочка и сетка** | тонкие изогнутые поверхности или сетки из стержней | Шуховская радиобашня в Москве |

Армянские зодчие были мастерами **купола**: круглый купол опирается на квадратный зал, а переход делают особыми угловыми конструкциями. Купол обычно стоит на высоком **барабане** с конической кровлей.

~~~art
pattern layout=grid rhythm=alternate palettes=mono,gzhel motifs=triangle,rhombus,circle
Один модуль, много структур: одна и та же форма на сетке даёт совсем разные поверхности.
~~~

## Конструкция и красота

Хорошую конструкцию не прячут: её логика красива. Колонны показывают, как держится крыша, арки — как тяжесть стекает к земле. Инженер **Владимир Шухов** строил лёгкие сетчатые башни из стальных стержней; его башня в Москве (1922) похожа на плетёную корзину.

## Задание

Сделай из бумаги 10–20 одинаковых модулей (например, трёхгранные трубочки или сложенные полоски) и построй из них башню, мост или павильон. Проверь прочность лёгкой книгой.

~~~art
sketch mode=kaleido n=6 paper=white
~~~

~~~art
tasks
1. Что такое модуль?
2. Что было модулем в греческом храме?
3. Как работает арка?
4. Чем арка отличается от купола?
5. Что делает каркас в небоскрёбе?
6. На чём стоит типичный армянский купол?
7. Построй конструкцию из одинаковых бумажных модулей и проверь её прочность.
~~~

~~~art
hints
1. Повторяющаяся единица размера. 2. Диаметр колонны. 3. Камни давят друг на друга по кривой и передают тяжесть на опоры. 4. Купол — арка, повёрнутая вокруг оси. 5. Несёт здание, а стены лишь заполняют его. 6. На высоком барабане. 7. Твоя конструкция.
~~~`,
      },
      [
        q(t("A repeated unit of size in a building is a…", "Շենքում չափի կրկնվող միավորը…", "Повторяющаяся единица размера в здании — это…"), [t("module", "մոդուլ է", "модуль"), t("dome", "գմբեթ է", "купол"), t("drum", "թմբուկ է", "барабан")], 0),
        q(t("The temple of Garni uses the … structure.", "Գառնիի տաճարում կիրառված է … կառուցվածքը։", "В храме Гарни использована … конструкция."), [t("frame", "կմախքային", "каркасная"), t("post and beam", "սյուն-հեծանային", "стоечно-балочная"), t("shell", "թաղանթային", "оболочковая")], 1),
        q(t("A dome is an arch…", "Գմբեթը կամար է…", "Купол — это арка,…"), [t("cut in half", "կիսով կտրված", "разрезанная пополам"), t("extended in length", "երկարությամբ ձգված", "вытянутая в длину"), t("rotated around its axis", "իր առանցքի շուրջը պտտված", "повёрнутая вокруг оси")], 2),
        q(t("The Modulor was created by…", "Մոդուլորը ստեղծել է…", "Модулор создал…"), [t("Le Corbusier", "Լե Կորբյուզիեն", "Ле Корбюзье"), t("Shukhov", "Շուխովը", "Шухов"), t("Tatlin", "Տատլինը", "Татлин")], 0),
        q(t("A skyscraper is usually carried by a…", "Երկնաքերը սովորաբար կրում է…", "Небоскрёб обычно держится на…"), [t("dome", "գմբեթը", "куполе"), t("frame", "կմախքը", "каркасе"), t("vault", "թաղը", "своде")], 1),
        q(t("Shukhov's tower in Moscow looks like a…", "Շուխովի աշտարակը Մոսկվայում նման է…", "Шуховская башня в Москве похожа на…"), [t("pyramid", "բուրգի", "пирамиду"), t("cube", "խորանարդի", "куб"), t("woven basket", "հյուսված զամբյուղի", "плетёную корзину")], 2),
      ],
    ),
    lesson(
      "building-model",
      ["Model of a building", "Շենքի մակետ", "Макет здания"],
      {
        en: ["Know the architect's drawings: plan, facade and section", "Understand scale and how to use it in a model", "Make a paper model of a small building on a site"],
        hy: ["Իմանալ ճարտարապետի գծագրերը՝ հատակագիծ, ճակատ և կտրվածք", "Հասկանալ մասշտաբը և թե ինչպես օգտագործել այն մակետում", "Պատրաստել փոքր շենքի թղթե մակետ հողամասի վրա"],
        ru: ["Знать чертежи архитектора: план, фасад и разрез", "Понимать масштаб и уметь применять его в макете", "Сделать бумажный макет небольшого здания на участке"],
      },
      {
        en: `## How an architect shows a building

A building is drawn in several ways before it is built:

| Drawing | What it shows |
|---|---|
| **Plan** | the building seen from above, as if cut horizontally: rooms, walls, doors, windows |
| **Facade** (elevation) | the outside wall seen straight from the front or side |
| **Section** | the building cut vertically: floors, stairs, heights |
| **Perspective** | a picture of how the building will look to a person |
| **Model** | a small three-dimensional copy |

~~~art
pic model-building
~~~

## Scale

A model is smaller than the real building, but all parts are reduced **equally**. The scale **1:100** means that 1 cm on the model is 100 cm, that is 1 m, in reality. A room 4 m long becomes 4 cm; a house 9 m tall becomes 9 cm. A person in 1:100 scale is about 1.7 cm tall: put small paper figures next to your model to show the size.

## Making a model

1. **Site:** a piece of thick cardboard; mark north, the street, trees.
2. **Plan:** draw the outline of the building in scale.
3. **Walls:** draw the facades on paper, cut out windows and doors, fold and glue the walls along the plan.
4. **Roof:** flat, pitched or with a dome; make it as a separate part.
5. **Details:** steps, a porch, balconies.
6. **Surroundings:** paths, lawns, trees from sponge or twisted paper, benches, people.

Architects often make **white models**: only white paper and cardboard. Without colour, the eye sees pure form, light and shadow.

~~~art
net
~~~

## What makes a building good

The Roman architect **Vitruvius** wrote that a building must be **strong**, **useful** and **beautiful**. Think about all three: Will it stand? Is it comfortable inside? Does it look good and fit its place?

~~~art
perspective modes=two
~~~

## Task

Design a small building: a library, a pavilion in a park, a bus stop or a summer house. Draw its plan and one facade on squared paper in scale 1:100, then make a white model on a site with paths and trees.

~~~art
tasks
1. What does a plan show?
2. What is the difference between a facade and a section?
3. What does the scale 1:100 mean?
4. How long is a 6 m wall in a 1:100 model?
5. Why do architects make white models?
6. Name the three qualities of a good building according to Vitruvius.
7. Make a plan, a facade and a white model of a small building.
~~~

~~~art
hints
1. The building from above, cut horizontally: rooms, walls, doors, windows. 2. A facade is the outside wall seen from the front or side; a section shows the building cut vertically. 3. 1 cm on the model is 100 cm in reality. 4. 6 cm. 5. So that the eye sees pure form, light and shadow. 6. Strong, useful, beautiful. 7. Your work.
~~~`,
        hy: `## Ինչպես է ճարտարապետը ցույց տալիս շենքը

Նախքան կառուցելը շենքը գծագրվում է մի քանի եղանակով.

| Գծագիր | Ինչ է ցույց տալիս |
|---|---|
| **Հատակագիծ** | շենքը վերևից, կարծես հորիզոնական կտրված՝ սենյակներ, պատեր, դռներ, պատուհաններ |
| **Ճակատ** | արտաքին պատը՝ ուղիղ առջևից կամ կողքից |
| **Կտրվածք** | ուղղահայաց կտրված շենքը՝ հարկեր, աստիճաններ, բարձրություններ |
| **Հեռանկար** | նկար, թե ինչպես է շենքն երևալու մարդուն |
| **Մակետ** | փոքր եռաչափ պատճեն |

~~~art
pic model-building
~~~

## Մասշտաբ

Մակետն ավելի փոքր է, քան իրական շենքը, բայց բոլոր մասերը փոքրացված են **հավասարապես**։ **1:100** մասշտաբը նշանակում է, որ մակետի 1 սմ-ն իրականում 100 սմ է, այսինքն՝ 1 մ։ 4 մ երկարությամբ սենյակը դառնում է 4 սմ, 9 մ բարձրությամբ տունը՝ 9 սմ։ 1:100 մասշտաբով մարդը մոտ 1,7 սմ բարձրություն ունի. մակետի կողքին դիր թղթե փոքր կերպարներ՝ չափը ցույց տալու համար։

## Մակետի պատրաստում

1. **Հողամաս**՝ հաստ ստվարաթղթի կտոր, նշիր հյուսիսը, փողոցը, ծառերը։
2. **Հատակագիծ**՝ մասշտաբով գծիր շենքի եզրագիծը։
3. **Պատեր**՝ ճակատները գծիր թղթի վրա, կտրիր պատուհաններն ու դռները, ծալիր և պատերը սոսնձիր հատակագծի երկայնքով։
4. **Տանիք**՝ հարթ, թեք կամ գմբեթով, պատրաստիր որպես առանձին մաս։
5. **Մանրամասներ**՝ աստիճաններ, մուտքի ծածկ, պատշգամբներ։
6. **Շրջապատ**՝ արահետներ, սիզամարգեր, սպունգից կամ ոլորված թղթից ծառեր, նստարաններ, մարդիկ։

Ճարտարապետները հաճախ պատրաստում են **սպիտակ մակետներ**՝ միայն սպիտակ թղթից և ստվարաթղթից։ Առանց գույնի աչքը տեսնում է մաքուր ձևը, լույսը և ստվերը։

~~~art
net
~~~

## Ինչն է շենքը լավը դարձնում

Հռոմեացի ճարտարապետ **Վիտրուվիուսը** գրել է, որ շենքը պետք է լինի **ամուր**, **օգտակար** և **գեղեցիկ**։ Մտածիր երեքի մասին էլ. Կկանգնի՞ արդյոք։ Հարմա՞ր է ներսում։ Լա՞վ է երևում և համապատասխանո՞ւմ է իր տեղին։

~~~art
perspective modes=two
~~~

## Առաջադրանք

Նախագծիր փոքր շենք՝ գրադարան, տաղավար այգում, ավտոբուսի կանգառ կամ ամառանոց։ Վանդակավոր թղթի վրա 1:100 մասշտաբով գծիր նրա հատակագիծը և մեկ ճակատը, ապա պատրաստիր սպիտակ մակետ հողամասի վրա՝ արահետներով և ծառերով։

~~~art
tasks
1. Ինչ է ցույց տալիս հատակագիծը։
2. Ինչով է ճակատը տարբերվում կտրվածքից։
3. Ինչ է նշանակում 1:100 մասշտաբը։
4. Որքան երկար է 6 մ պատը 1:100 մակետում։
5. Ինչու են ճարտարապետները սպիտակ մակետներ պատրաստում։
6. Անվանիր լավ շենքի երեք որակները՝ ըստ Վիտրուվիուսի։
7. Պատրաստիր փոքր շենքի հատակագիծ, ճակատ և սպիտակ մակետ։
~~~

~~~art
hints
1. Շենքը վերևից, հորիզոնական կտրված՝ սենյակներ, պատեր, դռներ, պատուհաններ։ 2. Ճակատն արտաքին պատն է առջևից կամ կողքից, կտրվածքը ցույց է տալիս ուղղահայաց կտրված շենքը։ 3. Մակետի 1 սմ-ն իրականում 100 սմ է։ 4. 6 սմ։ 5. Որպեսզի աչքը տեսնի մաքուր ձևը, լույսը և ստվերը։ 6. Ամուր, օգտակար, գեղեցիկ։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Как архитектор показывает здание

Прежде чем построить здание, его изображают несколькими способами:

| Изображение | Что показывает |
|---|---|
| **План** | здание сверху, будто разрезанное горизонтально: комнаты, стены, двери, окна |
| **Фасад** | наружная стена прямо спереди или сбоку |
| **Разрез** | здание, разрезанное вертикально: этажи, лестницы, высоты |
| **Перспектива** | изображение того, как здание увидит человек |
| **Макет** | маленькая объёмная копия |

~~~art
pic model-building
~~~

## Масштаб

Макет меньше настоящего здания, но все части уменьшены **одинаково**. Масштаб **1:100** означает, что 1 см на макете равен 100 см, то есть 1 м, в действительности. Комната длиной 4 м становится 4 см, дом высотой 9 м — 9 см. Человек в масштабе 1:100 ростом около 1,7 см: поставь рядом с макетом маленькие бумажные фигурки, чтобы показать размер.

## Как сделать макет

1. **Участок:** кусок толстого картона; отметь север, улицу, деревья.
2. **План:** начерти контур здания в масштабе.
3. **Стены:** нарисуй фасады на бумаге, вырежи окна и двери, согни и приклей стены по плану.
4. **Крыша:** плоская, скатная или с куполом; сделай её отдельной деталью.
5. **Детали:** ступени, навес над входом, балконы.
6. **Окружение:** дорожки, газоны, деревья из губки или скрученной бумаги, скамейки, люди.

Архитекторы часто делают **белые макеты** — только из белой бумаги и картона. Без цвета глаз видит чистую форму, свет и тень.

~~~art
net
~~~

## Каким должно быть хорошее здание

Римский архитектор **Витрувий** писал, что здание должно быть **прочным**, **полезным** и **красивым**. Подумай обо всём: устоит ли оно? Удобно ли внутри? Хорошо ли выглядит и подходит ли к своему месту?

~~~art
perspective modes=two
~~~

## Задание

Спроектируй небольшое здание: библиотеку, павильон в парке, остановку или летний домик. Начерти на клетчатой бумаге его план и один фасад в масштабе 1:100, затем сделай белый макет на участке с дорожками и деревьями.

~~~art
tasks
1. Что показывает план?
2. Чем фасад отличается от разреза?
3. Что означает масштаб 1:100?
4. Какой длины стена 6 м на макете 1:100?
5. Зачем архитекторы делают белые макеты?
6. Назови три качества хорошего здания по Витрувию.
7. Сделай план, фасад и белый макет небольшого здания.
~~~

~~~art
hints
1. Здание сверху в горизонтальном разрезе: комнаты, стены, двери, окна. 2. Фасад — наружная стена спереди или сбоку, разрез показывает здание, разрезанное вертикально. 3. 1 см на макете равен 100 см в действительности. 4. 6 см. 5. Чтобы глаз видел чистую форму, свет и тень. 6. Прочность, польза, красота. 7. Твоя работа.
~~~`,
      },
      [
        q(t("A building seen from above, cut horizontally, is a…", "Վերևից տեսանելի, հորիզոնական կտրված շենքը…", "Здание сверху в горизонтальном разрезе — это…"), [t("plan", "հատակագիծ է", "план"), t("facade", "ճակատ է", "фасад"), t("perspective", "հեռանկար է", "перспектива")], 0),
        q(t("In scale 1:100, a 4 m room on the model is…", "1:100 մասշտաբով 4 մ սենյակը մակետում…", "В масштабе 1:100 комната 4 м на макете —…"), [t("40 cm", "40 սմ է", "40 см"), t("4 cm", "4 սմ է", "4 см"), t("4 mm", "4 մմ է", "4 мм")], 1),
        q(t("A building cut vertically to show floors and stairs is a…", "Ուղղահայաց կտրված շենքը՝ հարկերով և աստիճաններով…", "Здание в вертикальном разрезе с этажами и лестницами — это…"), [t("plan", "հատակագիծ է", "план"), t("facade", "ճակատ է", "фасад"), t("section", "կտրվածք է", "разрез")], 2),
        q(t("A white model helps to see…", "Սպիտակ մակետն օգնում է տեսնել…", "Белый макет помогает увидеть…"), [t("pure form, light and shadow", "մաքուր ձևը, լույսը և ստվերը", "чистую форму, свет и тень"), t("the colours of the walls", "պատերի գույները", "цвета стен"), t("the price", "գինը", "цену")], 0),
        q(t("Vitruvius said a building must be strong, useful and…", "Վիտրուվիուսն ասում էր, որ շենքը պետք է լինի ամուր, օգտակար և…", "Витрувий говорил, что здание должно быть прочным, полезным и…"), [t("tall", "բարձր", "высоким"), t("beautiful", "գեղեցիկ", "красивым"), t("cheap", "էժան", "дешёвым")], 1),
        q(t("Small figures of people next to a model show…", "Մակետի կողքի մարդկանց փոքր կերպարները ցույց են տալիս…", "Маленькие фигурки людей рядом с макетом показывают…"), [t("the colour", "գույնը", "цвет"), t("the season", "եղանակը", "время года"), t("the size", "չափը", "размер")], 2),
      ],
    ),
    lesson(
      "product-design",
      ["Designing a thing: form follows function", "Իրի դիզայն․ ձևը հետևում է գործառույթին", "Вещь: красота и целесообразность"],
      {
        en: ["Understand the connection between the form of a thing and its function", "Know the stages of design work and the idea of ergonomics", "Design a useful object for everyday life"],
        hy: ["Հասկանալ իրի ձևի և նրա գործառույթի կապը", "Իմանալ դիզայնի աշխատանքի փուլերը և էրգոնոմիկայի գաղափարը", "Նախագծել օգտակար առարկա առօրյա կյանքի համար"],
        ru: ["Понять связь формы вещи и её назначения", "Знать этапы работы дизайнера и понятие эргономики", "Спроектировать полезный предмет для повседневной жизни"],
      },
      {
        en: `## Every thing was designed

A cup, a chair, a backpack, a phone, a lamp: someone thought about each of them. A **product designer** makes things that are **useful, comfortable and beautiful** at the same time.

## Form follows function

The American architect **Louis Sullivan** wrote in 1896 that **form follows function**: the shape of a thing should come from what it does. A cup has a handle because the tea is hot; a jug has a spout so that the water pours in a thin stream. A thing is beautiful when nothing in it is extra.

Look at the Armenian **jazzve**, the small coffee pot: a wide bottom heats quickly, a narrow neck keeps the foam, a long handle protects the hand, a lip helps to pour. Every part has a job.

~~~art
pic chair lamp
~~~

## The Bauhaus

In 1919 the architect **Walter Gropius** founded the **Bauhaus**, a school in Germany where artists, architects and craftsmen worked together. They designed simple chairs from steel tubes, lamps, teapots and fonts for factories, so that good design would be available to everyone. Their ideas still shape the things around us.

~~~art
palette bauhaus
~~~

## Ergonomics

**Ergonomics** studies how things fit the human body. A good chair supports the back; a handle fits the hand; buttons are big enough for a finger; a backpack spreads the weight over both shoulders. Designers measure people and test their prototypes.

~~~art
proportions
~~~

## Stages of design

1. **Problem:** what do people need? Watch and ask.
2. **Ideas:** many quick sketches, even strange ones.
3. **Choice:** pick the best idea; think about material and price.
4. **Drawings:** views from the front, side and top, with sizes.
5. **Prototype:** a model from paper, cardboard or clay.
6. **Test:** let people use it; improve it.

~~~art
sketch guide=grid
Sketch three ideas for one object, fast and rough. Then choose the best one and draw it clean.
~~~

## Task

Design one object: a pencil holder for a small desk, a lamp, a water bottle, a lunch box, or a chair for a school yard. Make at least five sketches, choose one, draw it from two sides and make a paper or clay prototype.

~~~art
tasks
1. What does a product designer do?
2. Explain the words «form follows function».
3. Why does a cup have a handle?
4. Name two parts of a jazzve and their jobs.
5. What was the Bauhaus?
6. What does ergonomics study?
7. Design an everyday object through all six stages.
~~~

~~~art
hints
1. Makes things that are useful, comfortable and beautiful. 2. The shape of a thing should come from what it does. 3. Because the drink is hot. 4. For example: wide bottom heats quickly; narrow neck keeps the foam; long handle protects the hand; lip helps to pour. 5. A design school founded by Walter Gropius in Germany in 1919. 6. How things fit the human body. 7. Your project.
~~~`,
        hy: `## Յուրաքանչյուր իր նախագծված է

Բաժակը, աթոռը, ուսապարկը, հեռախոսը, լամպը. ինչ-որ մեկը մտածել է դրանցից յուրաքանչյուրի մասին։ **Արտադրանքի դիզայները** ստեղծում է իրեր, որոնք միաժամանակ **օգտակար, հարմար և գեղեցիկ** են։

## Ձևը հետևում է գործառույթին

Ամերիկացի ճարտարապետ **Լուիս Սալիվանը** 1896 թվականին գրել է, որ **ձևը հետևում է գործառույթին**՝ իրի ձևը պետք է բխի այն բանից, ինչ իրն անում է։ Բաժակը բռնակ ունի, որովհետև թեյը տաք է, սափորն ունի ծորակ, որպեսզի ջուրը լցվի բարակ շիթով։ Իրը գեղեցիկ է, երբ դրանում ոչինչ ավելորդ չէ։

Նայիր հայկական **ջեզվեին**՝ սուրճի փոքր ամանին. լայն հատակն արագ է տաքանում, նեղ վիզը պահում է փրփուրը, երկար կոթը պաշտպանում է ձեռքը, քիթն օգնում է լցնել։ Ամեն մաս ունի իր գործը։

~~~art
pic chair lamp
~~~

## Բաուհաուս

1919 թվականին ճարտարապետ **Վալտեր Գրոպիուսը** հիմնեց **Բաուհաուսը**՝ դպրոց Գերմանիայում, որտեղ նկարիչները, ճարտարապետներն ու արհեստավորները միասին էին աշխատում։ Նրանք նախագծում էին պողպատե խողովակներից պարզ աթոռներ, լամպեր, թեյնիկներ և տառատեսակներ գործարանների համար, որպեսզի լավ դիզայնը հասանելի լինի բոլորին։ Նրանց գաղափարները մինչ օրս ձևավորում են մեզ շրջապատող իրերը։

~~~art
palette bauhaus
~~~

## Էրգոնոմիկա

**Էրգոնոմիկան** ուսումնասիրում է, թե ինչպես են իրերը համապատասխանում մարդու մարմնին։ Լավ աթոռը հենարան է տալիս մեջքին, բռնակը տեղավորվում է ձեռքում, կոճակները բավական մեծ են մատի համար, ուսապարկը բաշխում է ծանրությունն երկու ուսերին։ Դիզայներները չափում են մարդկանց և փորձարկում իրենց նախատիպերը։

~~~art
proportions
~~~

## Դիզայնի փուլերը

1. **Խնդիր**՝ ինչի կարիք ունեն մարդիկ։ Դիտիր և հարցրու։
2. **Գաղափարներ**՝ շատ արագ էսքիզներ, նույնիսկ տարօրինակ։
3. **Ընտրություն**՝ ընտրիր լավագույն գաղափարը, մտածիր նյութի և գնի մասին։
4. **Գծագրեր**՝ տեսքեր առջևից, կողքից և վերևից՝ չափերով։
5. **Նախատիպ**՝ մոդել թղթից, ստվարաթղթից կամ կավից։
6. **Փորձարկում**՝ թող մարդիկ օգտագործեն այն, բարելավիր։

~~~art
sketch guide=grid
Ուրվագծի՛ր մեկ առարկայի երեք գաղափար՝ արագ և կոպիտ։ Հետո ընտրի՛ր լավագույնը և նկարի՛ր մաքուր։
~~~

## Առաջադրանք

Նախագծիր մեկ առարկա՝ մատիտաման փոքր գրասեղանի համար, լամպ, ջրի շիշ, նախաճաշի տուփ կամ աթոռ դպրոցի բակի համար։ Արա առնվազն հինգ էսքիզ, ընտրիր մեկը, գծիր այն երկու կողմից և պատրաստիր թղթե կամ կավե նախատիպ։

~~~art
tasks
1. Ինչ է անում արտադրանքի դիզայները։
2. Բացատրիր «ձևը հետևում է գործառույթին» խոսքերը։
3. Ինչու բաժակն ունի բռնակ։
4. Անվանիր ջեզվեի երկու մաս և դրանց գործը։
5. Ինչ էր Բաուհաուսը։
6. Ինչ է ուսումնասիրում էրգոնոմիկան։
7. Նախագծիր առօրյա առարկա՝ անցնելով բոլոր վեց փուլերով։
~~~

~~~art
hints
1. Ստեղծում է իրեր, որոնք օգտակար են, հարմար և գեղեցիկ։ 2. Իրի ձևը պետք է բխի այն բանից, ինչ իրն անում է։ 3. Որովհետև ըմպելիքը տաք է։ 4. Օրինակ՝ լայն հատակն արագ է տաքանում, նեղ վիզը պահում է փրփուրը, երկար կոթը պաշտպանում է ձեռքը, քիթն օգնում է լցնել։ 5. Դիզայնի դպրոց, որը Վալտեր Գրոպիուսը հիմնել է Գերմանիայում 1919 թվականին։ 6. Թե ինչպես են իրերը համապատասխանում մարդու մարմնին։ 7. Քո նախագիծը։
~~~`,
        ru: `## Каждую вещь придумали

Чашка, стул, рюкзак, телефон, лампа — о каждой из них кто-то подумал. **Дизайнер** промышленных изделий создаёт вещи, которые одновременно **полезны, удобны и красивы**.

## Форма следует за функцией

Американский архитектор **Луис Салливан** в 1896 году написал, что **форма следует за функцией**: облик вещи должен вытекать из того, что она делает. У чашки есть ручка, потому что чай горячий; у кувшина есть носик, чтобы вода лилась тонкой струёй. Вещь красива, когда в ней нет ничего лишнего.

Посмотри на армянскую **джезве** — маленькую турку для кофе: широкое дно быстро нагревается, узкое горлышко сохраняет пенку, длинная ручка защищает руку, носик помогает наливать. У каждой части своя работа.

~~~art
pic chair lamp
~~~

## Баухаус

В 1919 году архитектор **Вальтер Гропиус** основал **Баухаус** — школу в Германии, где вместе работали художники, архитекторы и ремесленники. Они проектировали простые стулья из стальных трубок, лампы, чайники и шрифты для фабрик, чтобы хороший дизайн был доступен всем. Их идеи до сих пор определяют вещи вокруг нас.

~~~art
palette bauhaus
~~~

## Эргономика

**Эргономика** изучает, как вещи подходят человеческому телу. Хороший стул поддерживает спину, ручка ложится в ладонь, кнопки достаточно большие для пальца, рюкзак распределяет вес на оба плеча. Дизайнеры измеряют людей и испытывают свои прототипы.

~~~art
proportions
~~~

## Этапы проектирования

1. **Задача:** что нужно людям? Наблюдай и спрашивай.
2. **Идеи:** много быстрых эскизов, даже странных.
3. **Выбор:** выбери лучшую идею; подумай о материале и цене.
4. **Чертежи:** виды спереди, сбоку и сверху, с размерами.
5. **Прототип:** модель из бумаги, картона или глины.
6. **Испытание:** дай людям попользоваться; доработай.

~~~art
sketch guide=grid
Набросай три идеи одной вещи, быстро и грубо. Потом выбери лучшую и нарисуй её чисто.
~~~

## Задание

Спроектируй один предмет: подставку для карандашей на маленький стол, лампу, бутылку для воды, ланч-бокс или скамейку для школьного двора. Сделай не меньше пяти эскизов, выбери один, нарисуй его с двух сторон и сделай прототип из бумаги или глины.

~~~art
tasks
1. Чем занимается дизайнер изделий?
2. Объясни слова «форма следует за функцией».
3. Почему у чашки есть ручка?
4. Назови две части джезве и их работу.
5. Что такое Баухаус?
6. Что изучает эргономика?
7. Спроектируй бытовой предмет, пройдя все шесть этапов.
~~~

~~~art
hints
1. Создаёт вещи, которые полезны, удобны и красивы. 2. Облик вещи должен вытекать из её назначения. 3. Потому что напиток горячий. 4. Например: широкое дно быстро нагревается, узкое горлышко сохраняет пенку, длинная ручка защищает руку, носик помогает наливать. 5. Школа дизайна, основанная Вальтером Гропиусом в Германии в 1919 году. 6. Как вещи подходят человеческому телу. 7. Твой проект.
~~~`,
      },
      [
        q(t("«Form follows function» was written by…", "«Ձևը հետևում է գործառույթին» գրել է…", "«Форма следует за функцией» написал…"), [t("Louis Sullivan", "Լուիս Սալիվանը", "Луис Салливан"), t("Le Corbusier", "Լե Կորբյուզիեն", "Ле Корбюзье"), t("Vitruvius", "Վիտրուվիուսը", "Витрувий")], 0),
        q(t("The Bauhaus was founded in…", "Բաուհաուսը հիմնադրվել է…", "Баухаус основан в…"), [t("1896 in the USA", "1896 թվականին ԱՄՆ-ում", "1896 году в США"), t("1919 in Germany", "1919 թվականին Գերմանիայում", "1919 году в Германии"), t("1972 in Munich", "1972 թվականին Մյունխենում", "1972 году в Мюнхене")], 1),
        q(t("The narrow neck of a jazzve…", "Ջեզվեի նեղ վիզը…", "Узкое горлышко джезве…"), [t("heats quickly", "արագ է տաքանում", "быстро нагревается"), t("protects the hand", "պաշտպանում է ձեռքը", "защищает руку"), t("keeps the foam", "պահում է փրփուրը", "сохраняет пенку")], 2),
        q(t("How things fit the human body is studied by…", "Թե ինչպես են իրերը համապատասխանում մարդու մարմնին, ուսումնասիրում է…", "Как вещи подходят телу человека, изучает…"), [t("ergonomics", "էրգոնոմիկան", "эргономика"), t("typography", "տիպոգրաֆիան", "типографика"), t("heraldry", "հերալդիկան", "геральдика")], 0),
        q(t("A model made to test an idea is a…", "Գաղափարը փորձարկելու համար պատրաստված մոդելը…", "Модель для проверки идеи — это…"), [t("logo", "լոգո է", "логотип"), t("prototype", "նախատիպ է", "прототип"), t("poster", "պաստառ է", "плакат")], 1),
        q(t("The first stage of design work is…", "Դիզայնի աշխատանքի առաջին փուլը…", "Первый этап работы дизайнера —…"), [t("the prototype", "նախատիպն է", "прототип"), t("the test", "փորձարկումն է", "испытание"), t("understanding the problem", "խնդրի ըմբռնումն է", "понимание задачи")], 2),
      ],
    ),
    lesson(
      "material-and-form",
      ["Material and form", "Նյութ և ձև", "Материал и форма вещи"],
      {
        en: ["Know the main materials of design and their properties", "Understand how a material influences the form of a thing", "Choose a material for a design idea and explain the choice"],
        hy: ["Իմանալ դիզայնի հիմնական նյութերը և դրանց հատկությունները", "Հասկանալ, թե ինչպես է նյութն ազդում իրի ձևի վրա", "Ընտրել նյութ դիզայնի գաղափարի համար և բացատրել ընտրությունը"],
        ru: ["Знать основные материалы дизайна и их свойства", "Понимать, как материал влияет на форму вещи", "Выбрать материал для идеи и объяснить выбор"],
      },
      {
        en: `## Each material has a character

The same object, a chair for example, looks different in wood, steel or plastic. Every material can do some things and cannot do others. A good designer «listens» to the material.

| Material | Properties | Typical forms |
|---|---|---|
| **Wood** | warm, light, can be carved and bent with steam | furniture, toys, floors |
| **Metal** | strong, thin, can be bent, cast and welded | frames, tubes, tools, jewellery |
| **Glass** | transparent, fragile, blown or pressed when hot | vessels, windows, lamps |
| **Ceramics** | clay fired in a kiln, holds heat, glazed | dishes, tiles, vases |
| **Plastic** | light, any colour, moulded into any shape | phones, toys, containers |
| **Textile** | soft, flexible, can be woven, knitted, sewn | clothes, bags, curtains |
| **Stone** | heavy, durable, cut and carved | buildings, monuments, stairs |

~~~art
pic copper-jug karas lace pebbles
~~~

## Material shapes the form

* **Wood bent with steam:** in 1859 Michael Thonet produced his chair No. 14 from a few pieces of bent beech wood. It was light, cheap and was sold in millions.
* **Steel tube:** in the Bauhaus, designers made chairs from a single bent tube, light and springy.
* **Plastic:** in the 20th century chairs appeared that were made from one moulded piece, without legs screwed on.
* **Tuff and basalt:** Armenia is a land of stone. Soft tuff of pink, orange and black colours is easy to cut and carve; hard grey basalt is used for stairs and pavements.
* **Clay:** a round form is natural for a potter's wheel; that is why jugs and bowls are round.

## Truth to materials

Designers say: do not imitate one material with another. Plastic pretending to be wood looks cheap; plastic that shows its own bright colours and smooth curves looks honest and modern.

~~~art
tone
~~~

## Materials and nature

Today designers also ask: where does the material come from, and what will happen to it later? **Recycled** paper and plastic, local stone and wood, and things that can be repaired help to protect nature.

~~~art
pic shell leaf-plane web
Nature is the best engineer: a shell, the veins of a leaf, a web. Find the structure in each.
~~~

## Task

Take the same idea, for example a lamp, and draw it in three materials: wood, metal and ceramics. Show how the form changes. Then choose the best and explain why.

~~~art
tasks
1. Why does the same chair look different in different materials?
2. Which material is transparent and fragile?
3. What was special about Thonet's chair No. 14?
4. Why are jugs and bowls usually round?
5. Which Armenian stone is soft and easy to carve, and which is hard?
6. What does «truth to materials» mean?
7. Draw one object in three materials and explain your choice.
~~~

~~~art
hints
1. Every material has its own properties and possible forms. 2. Glass. 3. It was made from a few pieces of bent wood; light, cheap, sold in millions. 4. A round form is natural for the potter's wheel. 5. Tuff is soft; basalt is hard. 6. Do not imitate one material with another; show the material's own nature. 7. Your drawings.
~~~`,
        hy: `## Յուրաքանչյուր նյութ բնավորություն ունի

Նույն առարկան, օրինակ՝ աթոռը, փայտից, պողպատից կամ պլաստիկից տարբեր տեսք ունի։ Յուրաքանչյուր նյութ որոշ բաներ կարող է, որոշները՝ ոչ։ Լավ դիզայները «լսում» է նյութին։

| Նյութ | Հատկություններ | Բնորոշ ձևեր |
|---|---|---|
| **Փայտ** | ջերմ, թեթև, կարելի է փորագրել և գոլորշով ծռել | կահույք, խաղալիքներ, հատակներ |
| **Մետաղ** | ամուր, բարակ, կարելի է ծռել, ձուլել և եռակցել | հենքեր, խողովակներ, գործիքներ, զարդեր |
| **Ապակի** | թափանցիկ, փխրուն, տաք վիճակում փչում կամ սեղմում են | անոթներ, պատուհաններ, լամպեր |
| **Կերամիկա** | վառարանում թրծված կավ, պահում է ջերմությունը, ջնարակվում է | սպասք, սալիկներ, ծաղկամաններ |
| **Պլաստիկ** | թեթև, ցանկացած գույնի, ձուլվում է ցանկացած ձևի | հեռախոսներ, խաղալիքներ, տարաներ |
| **Գործվածք** | փափուկ, ճկուն, կարելի է գործել, հյուսել, կարել | հագուստ, պայուսակներ, վարագույրներ |
| **Քար** | ծանր, դիմացկուն, կտրում և փորագրում են | շենքեր, հուշարձաններ, աստիճաններ |

~~~art
pic copper-jug karas lace pebbles
~~~

## Նյութը ձևավորում է ձևը

* **Գոլորշով ծռված փայտ**՝ 1859 թվականին Միխայել Թոնետը ծռված հաճարենու մի քանի կտորից արտադրեց իր թիվ 14 աթոռը։ Այն թեթև էր, էժան և վաճառվեց միլիոններով։
* **Պողպատե խողովակ**՝ Բաուհաուսում դիզայներներն աթոռներ էին պատրաստում մեկ ծռված խողովակից՝ թեթև և զսպանակավոր։
* **Պլաստիկ**՝ 20-րդ դարում հայտնվեցին աթոռներ, որոնք ձուլված էին մեկ կտորից՝ առանց պտուտակված ոտքերի։
* **Տուֆ և բազալտ**՝ Հայաստանը քարի երկիր է։ Վարդագույն, նարնջագույն և սև փափուկ տուֆը հեշտ է կտրել և փորագրել, կոշտ մոխրագույն բազալտն օգտագործում են աստիճանների և մայթերի համար։
* **Կավ**՝ կլոր ձևը բնական է բրուտի անիվի համար, ահա թե ինչու են սափորներն ու թասերը կլոր։

## Ճշմարտություն նյութի նկատմամբ

Դիզայներներն ասում են՝ մի նյութով մի նմանակիր մյուսը։ Փայտ ձևացող պլաստիկն էժան է երևում, իսկ պլաստիկը, որը ցույց է տալիս իր սեփական վառ գույներն ու սահուն կորերը, ազնիվ և ժամանակակից է երևում։

~~~art
tone
~~~

## Նյութերը և բնությունը

Այսօր դիզայներները հարցնում են նաև՝ որտեղից է գալիս նյութը, և ինչ կլինի դրա հետ հետո։ **Վերամշակված** թուղթն ու պլաստիկը, տեղական քարն ու փայտը և այն իրերը, որոնք կարելի է նորոգել, օգնում են պաշտպանել բնությունը։

~~~art
pic shell leaf-plane web
Բնությունը լավագույն ինժեներն է․ խեցի, տերևի ջղեր, ոստայն։ Գտի՛ր յուրաքանչյուրի կառուցվածքը։
~~~

## Առաջադրանք

Վերցրու նույն գաղափարը, օրինակ՝ լամպը, և նկարիր այն երեք նյութով՝ փայտ, մետաղ և կերամիկա։ Ցույց տուր, թե ինչպես է փոխվում ձևը։ Հետո ընտրիր լավագույնը և բացատրիր՝ ինչու։

~~~art
tasks
1. Ինչու է նույն աթոռը տարբեր նյութերից տարբեր տեսք ունենում։
2. Որ նյութն է թափանցիկ և փխրուն։
3. Ինչով էր առանձնահատուկ Թոնետի թիվ 14 աթոռը։
4. Ինչու են սափորներն ու թասերը սովորաբար կլոր։
5. Հայկական որ քարն է փափուկ և հեշտ փորագրվող, և որն է կոշտ։
6. Ինչ է նշանակում «ճշմարտություն նյութի նկատմամբ»։
7. Նկարիր մեկ առարկա երեք նյութով և բացատրիր քո ընտրությունը։
~~~

~~~art
hints
1. Յուրաքանչյուր նյութ ունի իր հատկություններն ու հնարավոր ձևերը։ 2. Ապակին։ 3. Պատրաստված էր ծռված փայտի մի քանի կտորից՝ թեթև, էժան, վաճառվեց միլիոններով։ 4. Կլոր ձևը բնական է բրուտի անիվի համար։ 5. Տուֆը փափուկ է, բազալտը՝ կոշտ։ 6. Մի նյութով մի նմանակիր մյուսը, ցույց տուր նյութի սեփական բնույթը։ 7. Քո նկարները։
~~~`,
        ru: `## У каждого материала свой характер

Один и тот же предмет, например стул, выглядит по-разному из дерева, стали или пластика. Каждый материал что-то умеет, а чего-то не умеет. Хороший дизайнер «слушает» материал.

| Материал | Свойства | Типичные формы |
|---|---|---|
| **Дерево** | тёплое, лёгкое, режется и гнётся с паром | мебель, игрушки, полы |
| **Металл** | прочный, тонкий, гнётся, отливается и сваривается | каркасы, трубки, инструменты, украшения |
| **Стекло** | прозрачное, хрупкое, выдувается или прессуется горячим | сосуды, окна, светильники |
| **Керамика** | обожжённая в печи глина, держит тепло, покрывается глазурью | посуда, плитка, вазы |
| **Пластик** | лёгкий, любого цвета, отливается в любую форму | телефоны, игрушки, контейнеры |
| **Ткань** | мягкая, гибкая, её ткут, вяжут, шьют | одежда, сумки, шторы |
| **Камень** | тяжёлый, долговечный, его режут и высекают | здания, памятники, лестницы |

~~~art
pic copper-jug karas lace pebbles
~~~

## Материал создаёт форму

* **Гнутое дерево:** в 1859 году Михаэль Тонет выпустил стул № 14 из нескольких деталей гнутого бука. Он был лёгким, дешёвым и разошёлся миллионами.
* **Стальная трубка:** в Баухаусе дизайнеры делали стулья из одной изогнутой трубки — лёгкие и пружинящие.
* **Пластик:** в XX веке появились стулья, отлитые целиком, без привинченных ножек.
* **Туф и базальт:** Армения — страна камня. Мягкий розовый, оранжевый и чёрный туф легко резать и высекать, твёрдый серый базальт идёт на лестницы и мостовые.
* **Глина:** круглая форма естественна для гончарного круга — поэтому кувшины и миски круглые.

## Правда материала

Дизайнеры говорят: не подделывай один материал под другой. Пластик «под дерево» выглядит дёшево, а пластик, который показывает свои яркие цвета и плавные изгибы, — честно и современно.

~~~art
tone
~~~

## Материалы и природа

Сегодня дизайнеры спрашивают ещё: откуда берётся материал и что будет с ним потом? **Вторичные** бумага и пластик, местные камень и дерево и вещи, которые можно починить, помогают беречь природу.

~~~art
pic shell leaf-plane web
Природа — лучший инженер: раковина, прожилки листа, паутина. Найди конструкцию в каждой.
~~~

## Задание

Возьми одну идею, например светильник, и нарисуй его в трёх материалах: дереве, металле и керамике. Покажи, как меняется форма. Затем выбери лучший вариант и объясни почему.

~~~art
tasks
1. Почему один и тот же стул выглядит по-разному из разных материалов?
2. Какой материал прозрачный и хрупкий?
3. Чем был особенным стул № 14 Тонета?
4. Почему кувшины и миски обычно круглые?
5. Какой армянский камень мягкий и легко режется, а какой твёрдый?
6. Что значит «правда материала»?
7. Нарисуй один предмет в трёх материалах и объясни выбор.
~~~

~~~art
hints
1. У каждого материала свои свойства и возможные формы. 2. Стекло. 3. Он сделан из нескольких деталей гнутого дерева; лёгкий, дешёвый, разошёлся миллионами. 4. Круглая форма естественна для гончарного круга. 5. Туф мягкий, базальт твёрдый. 6. Не подделывать один материал под другой, показывать его собственную природу. 7. Твои рисунки.
~~~`,
      },
      [
        q(t("Clay fired in a kiln is…", "Վառարանում թրծված կավը…", "Обожжённая в печи глина — это…"), [t("ceramics", "կերամիկա է", "керамика"), t("glass", "ապակի է", "стекло"), t("plastic", "պլաստիկ է", "пластик")], 0),
        q(t("Thonet's chair No. 14 was made of…", "Թոնետի թիվ 14 աթոռը պատրաստված էր…", "Стул № 14 Тонета сделан из…"), [t("steel tube", "պողպատե խողովակից", "стальной трубки"), t("bent wood", "ծռված փայտից", "гнутого дерева"), t("plastic", "պլաստիկից", "пластика")], 1),
        q(t("Hard grey stone used for stairs in Armenia is…", "Հայաստանում աստիճանների համար օգտագործվող կոշտ մոխրագույն քարը…", "Твёрдый серый камень для лестниц в Армении —…"), [t("tuff", "տուֆն է", "туф"), t("marble", "մարմարն է", "мрамор"), t("basalt", "բազալտն է", "базальт")], 2),
        q(t("Which material can be moulded into any shape and colour?", "Որ նյութը կարելի է ձուլել ցանկացած ձևի և գույնի։", "Какой материал можно отлить любой формы и цвета?"), [t("plastic", "պլաստիկը", "пластик"), t("stone", "քարը", "камень"), t("wood", "փայտը", "дерево")], 0),
        q(t("Plastic pretending to be wood breaks the rule of…", "Փայտ ձևացող պլաստիկը խախտում է … կանոնը։", "Пластик «под дерево» нарушает правило…"), [t("60–30–10", "60–30–10", "60–30–10"), t("truth to materials", "նյութի նկատմամբ ճշմարտության", "правды материала"), t("scale", "մասշտաբի", "масштаба")], 1),
        q(t("Jugs are round because of…", "Սափորները կլոր են…", "Кувшины круглые из-за…"), [t("fashion", "նորաձևության պատճառով", "моды"), t("the kiln", "վառարանի պատճառով", "печи"), t("the potter's wheel", "բրուտի անիվի պատճառով", "гончарного круга")], 2),
      ],
    ),
    lesson(
      "packaging-design",
      ["Packaging design", "Փաթեթավորման դիզայն", "Дизайн упаковки"],
      {
        en: ["Know what packaging is for and how it is designed", "Learn to draw a net of a box and fold it", "Design and make the packaging for a product"],
        hy: ["Իմանալ, թե ինչի համար է փաթեթավորումը և ինչպես է այն նախագծվում", "Սովորել տուփի փռվածք գծել և ծալել այն", "Նախագծել և պատրաստել ապրանքի փաթեթավորում"],
        ru: ["Знать, зачем нужна упаковка и как её проектируют", "Научиться чертить развёртку коробки и складывать её", "Спроектировать и сделать упаковку для товара"],
      },
      {
        en: `## Three jobs of packaging

1. **Protect:** keep the thing safe and clean on its way to us.
2. **Inform:** say what is inside, how much, who made it, how to use and keep it.
3. **Attract:** stand out on a shelf among dozens of others and show the character of the product.

Packaging is the meeting point of structure, graphics and marketing. A designer must think about the net, the material, the pictures and the letters at the same time.

## From a net to a box

A box starts as a flat **net** of cardboard. The classic net of a rectangular box has four side faces in a row, a bottom, a lid and flaps for gluing.

1. Measure the product: length, width, height.
2. Draw the net on cardboard, adding 1 cm flaps.
3. Score the fold lines and cut the outline.
4. Fold and glue. Check that the product fits with a little space.

Some packs need no glue: a hexagonal pack, a pyramid, a pack with a handle, or a sliding box like a matchbox.

~~~art
net
~~~

~~~art
steps box-net
~~~

## Graphics on the pack

* **Name** in a font that matches the character: strict for medicine, playful for sweets.
* **Image or pattern:** a photo, a drawing or an ornament.
* **Colour:** often says what the product tastes like or what it is made of.
* **Required information:** weight, ingredients, date, maker, in small but readable letters.
* **Three sides:** people see the pack from the front, side and top; the design must work on all of them.

Armenian products often use national motifs: carpet patterns, pomegranates, apricots, Mount Ararat and Armenian letters.

~~~art
pic box-net
~~~

## Think about nature

A lot of packaging becomes rubbish the same day. Designers try to use less material, choose paper instead of plastic where possible, mark the pack for recycling and sometimes make it reusable, for example a tin that becomes a pencil box.

~~~art
pic recycle
~~~

## Task

Choose a product: dried apricots, tea, soap, a toy or school chalk. Draw the net of the box in centimetres, design the graphics for the front and the sides, then build the pack and put the product inside.

~~~art
tasks
1. Name the three jobs of packaging.
2. What is the net of a box?
3. Why are flaps added to a net?
4. Which packs need no glue?
5. Which information must be on a food pack?
6. How can a designer make packaging kinder to nature?
7. Design and build a pack for a product of your choice.
~~~

~~~art
hints
1. Protect, inform, attract. 2. The flat cardboard pattern it is folded from. 3. For gluing the faces together. 4. For example a pyramid, a hexagonal pack or a sliding box. 5. Weight, ingredients, date and maker. 6. Use less material, choose paper, mark for recycling, make it reusable. 7. Your pack.
~~~`,
        hy: `## Փաթեթավորման երեք գործը

1. **Պաշտպանել**՝ պահել իրն ամբողջական և մաքուր մեզ հասնելու ճանապարհին։
2. **Տեղեկացնել**՝ ասել, թե ինչ կա ներսում, որքան, ով է պատրաստել, ինչպես օգտագործել և պահել։
3. **Գրավել**՝ աչքի ընկնել դարակի վրա տասնյակ ուրիշների մեջ և ցույց տալ ապրանքի բնավորությունը։

Փաթեթավորումը կառուցվածքի, գրաֆիկայի և շուկայավարման հանդիպման կետն է։ Դիզայները պետք է միաժամանակ մտածի փռվածքի, նյութի, պատկերների և տառերի մասին։

## Փռվածքից դեպի տուփ

Տուփը սկսվում է ստվարաթղթե հարթ **փռվածքից**։ Ուղղանկյուն տուփի դասական փռվածքն ունի չորս կողային նիստ՝ շարքով, հատակ, կափարիչ և եզրեր՝ սոսնձելու համար։

1. Չափիր ապրանքը՝ երկարություն, լայնություն, բարձրություն։
2. Գծիր փռվածքը ստվարաթղթի վրա՝ ավելացնելով 1 սմ եզրեր։
3. Ակոսիր ծալքի գծերը և կտրիր եզրագիծը։
4. Ծալիր և սոսնձիր։ Ստուգիր, որ ապրանքը տեղավորվի փոքր պահուստով։

Որոշ փաթեթավորումներ սոսինձ չեն պահանջում՝ վեցանկյուն փաթեթ, բուրգ, բռնակով փաթեթ կամ դուրս քաշվող տուփ՝ լուցկու տուփի պես։

~~~art
net
~~~

~~~art
steps box-net
~~~

## Գրաֆիկան փաթեթի վրա

* **Անվանում**՝ բնավորությանը համապատասխան տառատեսակով. խիստ՝ դեղի համար, խաղային՝ քաղցրավենիքի։
* **Պատկեր կամ նախշ**՝ լուսանկար, նկար կամ զարդանախշ։
* **Գույն**՝ հաճախ ասում է, թե ինչ համ ունի ապրանքը կամ ինչից է պատրաստված։
* **Պարտադիր տեղեկություն**՝ քաշ, բաղադրություն, ամսաթիվ, արտադրող՝ մանր, բայց ընթեռնելի տառերով։
* **Երեք կողմ**՝ մարդիկ փաթեթը տեսնում են առջևից, կողքից և վերևից, դիզայնը պետք է աշխատի բոլորի վրա։

Հայկական ապրանքները հաճախ օգտագործում են ազգային մոտիվներ՝ գորգի նախշեր, նուռ, ծիրան, Արարատ լեռ և հայերեն տառեր։

~~~art
pic box-net
~~~

## Մտածիր բնության մասին

Շատ փաթեթավորում նույն օրն աղբ է դառնում։ Դիզայներները փորձում են պակաս նյութ օգտագործել, հնարավորության դեպքում պլաստիկի փոխարեն թուղթ ընտրել, փաթեթը նշել վերամշակման համար և երբեմն դարձնել կրկին օգտագործելի, օրինակ՝ թիթեղյա տուփ, որը դառնում է մատիտաման։

~~~art
pic recycle
~~~

## Առաջադրանք

Ընտրիր ապրանք՝ չիր, թեյ, օճառ, խաղալիք կամ դպրոցական կավիճ։ Գծիր տուփի փռվածքը սանտիմետրերով, նախագծիր գրաֆիկան առջևի և կողային նիստերի համար, ապա կառուցիր փաթեթը և ներսում դիր ապրանքը։

~~~art
tasks
1. Անվանիր փաթեթավորման երեք գործը։
2. Ինչ է տուփի փռվածքը։
3. Ինչու են փռվածքին եզրեր ավելացնում։
4. Որ փաթեթներին սոսինձ պետք չէ։
5. Ինչ տեղեկություն պետք է լինի սննդի փաթեթի վրա։
6. Ինչպես կարող է դիզայները փաթեթավորումը բնությանն ավելի բարյացակամ դարձնել։
7. Նախագծիր և կառուցիր փաթեթ քո ընտրած ապրանքի համար։
~~~

~~~art
hints
1. Պաշտպանել, տեղեկացնել, գրավել։ 2. Հարթ ստվարաթղթե ձևանմուշը, որից այն ծալվում է։ 3. Նիստերը միմյանց սոսնձելու համար։ 4. Օրինակ՝ բուրգին, վեցանկյուն փաթեթին կամ դուրս քաշվող տուփին։ 5. Քաշ, բաղադրություն, ամսաթիվ և արտադրող։ 6. Պակաս նյութ օգտագործել, թուղթ ընտրել, նշել վերամշակման համար, դարձնել կրկին օգտագործելի։ 7. Քո փաթեթը։
~~~`,
        ru: `## Три задачи упаковки

1. **Защитить:** сохранить вещь целой и чистой на пути к нам.
2. **Сообщить:** что внутри, сколько, кто изготовил, как использовать и хранить.
3. **Привлечь:** выделиться на полке среди десятков других и показать характер товара.

Упаковка — место встречи конструкции, графики и маркетинга. Дизайнер думает сразу о развёртке, материале, изображениях и буквах.

## От развёртки к коробке

Коробка начинается с плоской картонной **развёртки**. Классическая развёртка прямоугольной коробки содержит четыре боковые грани в ряд, дно, крышку и клапаны для склейки.

1. Измерь товар: длину, ширину, высоту.
2. Начерти развёртку на картоне, добавив клапаны по 1 см.
3. Пробигуй линии сгиба и вырежи контур.
4. Согни и склей. Проверь, что товар входит с небольшим запасом.

Некоторым упаковкам клей не нужен: шестигранная коробочка, пирамидка, пакет с ручкой или выдвижная коробка вроде спичечной.

~~~art
net
~~~

~~~art
steps box-net
~~~

## Графика на упаковке

* **Название** шрифтом, подходящим по характеру: строгим для лекарства, игривым для сладостей.
* **Изображение или узор:** фотография, рисунок или орнамент.
* **Цвет:** часто подсказывает вкус или состав.
* **Обязательные сведения:** вес, состав, дата, изготовитель — мелкими, но читаемыми буквами.
* **Три стороны:** упаковку видят спереди, сбоку и сверху; дизайн должен работать на всех.

Армянские товары часто используют национальные мотивы: узоры ковров, гранат, абрикос, гору Арарат и армянские буквы.

~~~art
pic box-net
~~~

## Подумай о природе

Много упаковки в тот же день становится мусором. Дизайнеры стараются тратить меньше материала, выбирать бумагу вместо пластика, помечать упаковку знаком переработки, а иногда делать её многоразовой — например, жестяная коробка становится пеналом.

~~~art
pic recycle
~~~

## Задание

Выбери товар: курагу, чай, мыло, игрушку или школьный мел. Начерти развёртку коробки в сантиметрах, придумай графику для лицевой и боковых сторон, затем склей упаковку и положи товар внутрь.

~~~art
tasks
1. Назови три задачи упаковки.
2. Что такое развёртка коробки?
3. Зачем к развёртке добавляют клапаны?
4. Каким упаковкам не нужен клей?
5. Какие сведения должны быть на пищевой упаковке?
6. Как дизайнер может сделать упаковку бережнее к природе?
7. Спроектируй и склей упаковку для выбранного товара.
~~~

~~~art
hints
1. Защитить, сообщить, привлечь. 2. Плоская картонная выкройка, из которой её складывают. 3. Чтобы склеить грани между собой. 4. Например, пирамидке, шестигранной коробочке или выдвижной коробке. 5. Вес, состав, дата и изготовитель. 6. Тратить меньше материала, выбирать бумагу, помечать знаком переработки, делать многоразовой. 7. Твоя упаковка.
~~~`,
      },
      [
        q(t("Which is NOT a job of packaging?", "Որը փաթեթավորման գործը ՉԷ։", "Что НЕ является задачей упаковки?"), [t("to cook the product", "ապրանքն եփելը", "готовить товар"), t("to protect the product", "ապրանքը պաշտպանելը", "защищать товар"), t("to inform the buyer", "գնորդին տեղեկացնելը", "сообщать покупателю")], 0),
        q(t("The flat cardboard pattern of a box is its…", "Տուփի հարթ ստվարաթղթե ձևանմուշը նրա…", "Плоская картонная выкройка коробки — это её…"), [t("prototype", "նախատիպն է", "прототип"), t("net", "փռվածքն է", "развёртка"), t("module", "մոդուլն է", "модуль")], 1),
        q(t("Flaps on a net are used for…", "Փռվածքի եզրերն օգտագործվում են…", "Клапаны на развёртке нужны для…"), [t("decoration", "զարդարման համար", "украшения"), t("writing the price", "գինը գրելու համար", "цены"), t("gluing", "սոսնձելու համար", "склейки")], 2),
        q(t("A pack must be designed to work from…", "Փաթեթը պետք է նախագծվի՝ աշխատելու…", "Упаковку проектируют так, чтобы она работала…"), [t("the front, side and top", "առջևից, կողքից և վերևից", "спереди, сбоку и сверху"), t("the front only", "միայն առջևից", "только спереди"), t("the inside", "ներսից", "изнутри")], 0),
        q(t("A tin that later becomes a pencil box is an example of…", "Թիթեղյա տուփը, որը հետո դառնում է մատիտաման, օրինակ է…", "Жестянка, которая потом становится пеналом, — пример…"), [t("a net", "փռվածքի", "развёртки"), t("reusable packaging", "կրկին օգտագործելի փաթեթավորման", "многоразовой упаковки"), t("a pictogram", "պիկտոգրամի", "пиктограммы")], 1),
        q(t("The font on a pack of sweets should be…", "Քաղցրավենիքի փաթեթի տառատեսակը պետք է լինի…", "Шрифт на упаковке сладостей должен быть…"), [t("as small as possible", "հնարավորինս մանր", "как можно мельче"), t("strict like on medicine", "խիստ, ինչպես դեղի վրա", "строгим, как на лекарстве"), t("playful", "խաղային", "игривым")], 2),
      ],
    ),
  ],
};
