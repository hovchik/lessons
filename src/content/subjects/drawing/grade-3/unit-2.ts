import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("Art on the street", "Արվեստը փողոցում", "Искусство на улицах твоего города"),
  summary: t(
    "Architecture of Armenia and Russia, monuments and parks, lanterns and fences, shop windows, transport and a street panorama.",
    "Հայաստանի և Ռուսաստանի ճարտարապետություն, հուշարձաններ և պուրակներ, լապտերներ և ցանկապատեր, ցուցափեղկեր, տրանսպորտ և փողոցի համայնապատկեր։",
    "Архитектура Армении и России, памятники и парки, фонари и ограды, витрины, транспорт и панорама улицы.",
  ),
  lessons: [
    lesson(
      "architecture-armenia",
      ["Armenian architecture: Garni, Zvartnots, Yerevan", "Հայկական ճարտարապետություն․ Գառնի, Զվարթնոց, Երևան", "Армянская архитектура: Гарни, Звартноц, Ереван"],
      {
        en: ["Know three landmarks of Armenian architecture and their age", "See the parts of a building: base, walls, columns, roof", "Draw the temple of Garni from simple shapes"],
        hy: ["Իմանալ հայկական ճարտարապետության երեք կոթող և դրանց տարիքը", "Տեսնել շենքի մասերը՝ հիմք, պատեր, սյուներ, տանիք", "Պարզ ձևերից նկարել Գառնու տաճարը"],
        ru: ["Знать три памятника армянской архитектуры и их возраст", "Видеть части здания: основание, стены, колонны, крыша", "Нарисовать храм Гарни из простых форм"],
      },
      {
        en: `## Architecture is an art

An **architect** designs buildings: how they look, how strong they are, how people use them. Buildings tell us about the time when they were built.

## Three landmarks

| Building | When | What is special |
|---|---|---|
| **Temple of Garni** | 1st century AD | a pagan temple with columns, standing on a cliff above a gorge; restored in the 20th century |
| **Zvartnots** | 7th century | a huge round cathedral; today we see its ruins and tall columns near Vagharshapat |
| **Yerevan** city centre | 20th century | architect **Alexander Tamanyan** planned it; buildings of pink **tuff** stone around Republic Square |

~~~art
pic garni zvartnots armenian-church
~~~

## Parts of a building

| Part | Job |
|---|---|
| **base** (foundation) | holds the building |
| **walls** and **columns** | carry the roof |
| **roof** | protects from rain and snow |
| **decoration** | carvings, arches, ornaments |

~~~art
pic orders
~~~

## Draw Garni

1. Draw a wide **rectangle** for the base with steps in front.
2. Draw a row of tall thin **columns**.
3. Put a **triangle** on top — this is the pediment.
4. Add mountains behind the temple.

~~~art
steps garni
~~~

~~~art
tasks
1. Who designs buildings?
2. When was the temple of Garni built?
3. What can we see today at Zvartnots?
4. Who planned the centre of Yerevan?
5. Of what stone are many Yerevan buildings made?
6. Name four parts of a building.
7. Draw the temple of Garni with mountains behind it.
~~~

~~~art
hints
1. An architect. 2. In the 1st century AD. 3. Ruins and tall columns of a round cathedral. 4. Alexander Tamanyan. 5. Pink tuff. 6. Base, walls, columns, roof. 7. Your drawing.
~~~`,
        hy: `## Ճարտարապետությունն արվեստ է

**Ճարտարապետը** նախագծում է շենքեր՝ ինչ տեսք ունեն, որքան ամուր են, ինչպես են մարդիկ օգտագործում դրանք։ Շենքերը պատմում են այն ժամանակի մասին, երբ կառուցվել են։

## Երեք կոթող

| Կառույց | Երբ | Ինչով է առանձնահատուկ |
|---|---|---|
| **Գառնու տաճար** | մ․թ․ 1-ին դար | սյուներով հեթանոսական տաճար՝ կիրճի վերևում, ժայռի վրա, վերականգնվել է 20-րդ դարում |
| **Զվարթնոց** | 7-րդ դար | հսկայական կլոր տաճար, այսօր Վաղարշապատի մոտ տեսնում ենք նրա ավերակները և բարձր սյուները |
| **Երևանի** կենտրոն | 20-րդ դար | նախագծել է ճարտարապետ **Ալեքսանդր Թամանյանը**, Հանրապետության հրապարակի շուրջ վարդագույն **տուֆից** շենքեր |

~~~art
pic garni zvartnots armenian-church
~~~

## Շենքի մասերը

| Մաս | Գործը |
|---|---|
| **հիմք** | պահում է շենքը |
| **պատեր** և **սյուներ** | կրում են տանիքը |
| **տանիք** | պաշտպանում է անձրևից և ձյունից |
| **զարդարանք** | քանդակներ, կամարներ, զարդանախշեր |

~~~art
pic orders
~~~

## Նկարի՛ր Գառնին

1. Նկարի՛ր լայն **ուղղանկյուն**՝ հիմքը, առջևում՝ աստիճաններ։
2. Նկարի՛ր բարձր, բարակ **սյուների** շարք։
3. Վրան դի՛ր **եռանկյուն**՝ սա ճակտոնն է։
4. Տաճարի հետևում լեռներ ավելացրու՛։

~~~art
steps garni
~~~

~~~art
tasks
1. Ո՞վ է նախագծում շենքերը։
2. Ե՞րբ է կառուցվել Գառնու տաճարը։
3. Ի՞նչ ենք այսօր տեսնում Զվարթնոցում։
4. Ո՞վ է նախագծել Երևանի կենտրոնը։
5. Ի՞նչ քարից են կառուցված Երևանի շատ շենքեր։
6. Անվանի՛ր շենքի չորս մաս։
7. Նկարի՛ր Գառնու տաճարը՝ հետևում լեռներով։
~~~

~~~art
hints
1. Ճարտարապետը։ 2. Մ․թ․ 1-ին դարում։ 3. Կլոր տաճարի ավերակներ և բարձր սյուներ։ 4. Ալեքսանդր Թամանյանը։ 5. Վարդագույն տուֆից։ 6. Հիմք, պատեր, սյուներ, տանիք։ 7. Քո նկարը։
~~~`,
        ru: `## Архитектура — это искусство

**Архитектор** проектирует здания: как они выглядят, насколько прочны, как ими пользуются люди. Здания рассказывают о времени, когда их построили.

## Три памятника

| Здание | Когда | Чем примечательно |
|---|---|---|
| **Храм Гарни** | I век н. э. | языческий храм с колоннами на скале над ущельем; восстановлен в XX веке |
| **Звартноц** | VII век | огромный круглый собор; сегодня мы видим его руины и высокие колонны около Вагаршапата |
| **Центр Еревана** | XX век | спланировал архитектор **Александр Таманян**; здания из розового **туфа** вокруг площади Республики |

~~~art
pic garni zvartnots armenian-church
~~~

## Части здания

| Часть | Назначение |
|---|---|
| **основание** (фундамент) | держит здание |
| **стены** и **колонны** | несут крышу |
| **крыша** | защищает от дождя и снега |
| **украшения** | резьба, арки, орнаменты |

~~~art
pic orders
~~~

## Рисуем Гарни

1. Нарисуй широкий **прямоугольник** — основание, впереди ступени.
2. Нарисуй ряд высоких тонких **колонн**.
3. Сверху помести **треугольник** — это фронтон.
4. Добавь горы за храмом.

~~~art
steps garni
~~~

~~~art
tasks
1. Кто проектирует здания?
2. Когда построен храм Гарни?
3. Что мы видим сегодня в Звартноце?
4. Кто спланировал центр Еревана?
5. Из какого камня построены многие здания Еревана?
6. Назови четыре части здания.
7. Нарисуй храм Гарни с горами позади.
~~~

~~~art
hints
1. Архитектор. 2. В I веке н. э. 3. Руины и высокие колонны круглого собора. 4. Александр Таманян. 5. Из розового туфа. 6. Основание, стены, колонны, крыша. 7. Твой рисунок.
~~~`,
      },
      [
        q(t("Who designs buildings?", "Ո՞վ է նախագծում շենքերը։", "Кто проектирует здания?"), [t("An architect", "Ճարտարապետը", "Архитектор"), t("A pilot", "Օդաչուն", "Лётчик"), t("A cook", "Խոհարարը", "Повар")], 0),
        q(t("The temple of Garni was built in the…", "Գառնու տաճարը կառուցվել է…", "Храм Гарни построен в…"), [t("20th century", "20-րդ դարում", "XX веке"), t("1st century AD", "մ․թ․ 1-ին դարում", "I веке н. э."), t("7th century", "7-րդ դարում", "VII веке")], 1),
        q(t("Zvartnots was a…", "Զվարթնոցն եղել է…", "Звартноц был…"), [t("castle", "ամրոց", "крепостью"), t("bridge", "կամուրջ", "мостом"), t("round cathedral", "կլոր տաճար", "круглым собором")], 2),
        q(t("Who planned the centre of Yerevan?", "Ո՞վ է նախագծել Երևանի կենտրոնը։", "Кто спланировал центр Еревана?"), [t("Alexander Tamanyan", "Ալեքսանդր Թամանյանը", "Александр Таманян"), t("Martiros Saryan", "Մարտիրոս Սարյանը", "Мартирос Сарьян"), t("Hovhannes Tumanyan", "Հովհաննես Թումանյանը", "Ованес Туманян")], 0),
        q(t("Many Yerevan buildings are made of…", "Երևանի շատ շենքեր կառուցված են…", "Многие здания Еревана построены из…"), [t("wood", "փայտից", "дерева"), t("pink tuff", "վարդագույն տուֆից", "розового туфа"), t("glass only", "միայն ապակուց", "только стекла")], 1),
        q(t("Which part of a building carries the roof?", "Շենքի ո՞ր մասն է կրում տանիքը։", "Какая часть здания несёт крышу?"), [t("the windows", "պատուհանները", "окна"), t("the door", "դուռը", "дверь"), t("walls and columns", "պատերն ու սյուները", "стены и колонны")], 2),
      ],
    ),
    lesson(
      "monuments-parks",
      ["Monuments and parks", "Հուշարձաններ և պուրակներ", "Памятники и парки"],
      {
        en: ["Know why cities have monuments and name famous ones in Yerevan, Moscow and Saint Petersburg", "See how a park is designed: paths, flowerbeds, fountains, benches", "Design a plan of a small park with a monument"],
        hy: ["Իմանալ, թե ինչու են քաղաքներում հուշարձաններ կանգնեցնում, և անվանել Երևանի, Մոսկվայի և Սանկտ Պետերբուրգի հայտնի հուշարձանները", "Տեսնել, թե ինչպես է նախագծվում պուրակը՝ արահետներ, ծաղկաթմբեր, շատրվաններ, նստարաններ", "Նախագծել հուշարձանով փոքր պուրակի հատակագիծ"],
        ru: ["Знать, зачем в городах ставят памятники, и называть известные памятники Еревана, Москвы и Санкт-Петербурга", "Видеть, как устроен парк: дорожки, клумбы, фонтаны, скамейки", "Нарисовать план небольшого парка с памятником"],
      },
      {
        en: `## Why monuments?

A **monument** keeps the memory of a person or an event. Sculptors and architects make monuments together: a **statue** stands on a **pedestal**.

| City | Monument | Author and year |
|---|---|---|
| Yerevan | «David of Sasun», the hero on a horse | Yervand Kochar, 1959 |
| Yerevan | «Mother Armenia» in Victory Park | 1967 |
| Moscow | Minin and Pozharsky on Red Square | Ivan Martos, 1818 |
| Saint Petersburg | the Bronze Horseman, Peter I | Étienne Falconet, 1782 |

~~~art
pic tamanyan stork
~~~

## A park is designed too

| Element | Why |
|---|---|
| **paths** | to walk; they lead to the main places |
| **flowerbeds** | colour and pattern |
| **fountains** and ponds | coolness and beauty |
| **benches** and lamps | rest and light |
| **monument** or sculpture | the centre of attention |

## The plan

A **plan** is a drawing **from above**. On it trees are circles, paths are lines, flowerbeds are coloured shapes.

~~~art
pic park-plan
~~~

~~~art
sketch guide=grid
Draw the plan of a park as a bird sees it: paths, a fountain, trees as circles, benches as small rectangles.
~~~

~~~art
tasks
1. What is a monument for?
2. What does a statue stand on?
3. Who made the monument «David of Sasun» in Yerevan, and when?
4. Where is the monument to Minin and Pozharsky?
5. Name four elements of a park.
6. How are trees shown on a plan?
7. Draw a plan of a small park with paths, a fountain and a monument in the centre.
~~~

~~~art
hints
1. To keep the memory of a person or an event. 2. On a pedestal. 3. Yervand Kochar, in 1959. 4. On Red Square in Moscow. 5. Paths, flowerbeds, fountains, benches. 6. As circles. 7. Your plan.
~~~`,
        hy: `## Ինչու՞ են պետք հուշարձանները

**Հուշարձանը** պահում է մարդու կամ իրադարձության հիշատակը։ Քանդակագործներն ու ճարտարապետները միասին են ստեղծում հուշարձաններ․ **արձանը** կանգնած է **պատվանդանի** վրա։

| Քաղաք | Հուշարձան | Հեղինակ և տարի |
|---|---|---|
| Երևան | «Սասունցի Դավիթ»՝ հերոսը ձիու վրա | Երվանդ Քոչար, 1959 |
| Երևան | «Մայր Հայաստան»՝ Հաղթանակի զբոսայգում | 1967 |
| Մոսկվա | Մինին և Պոժարսկի՝ Կարմիր հրապարակում | Իվան Մարտոս, 1818 |
| Սանկտ Պետերբուրգ | Պղնձե ձիավոր՝ Պետրոս I | Էտյեն Ֆալկոնե, 1782 |

~~~art
pic tamanyan stork
~~~

## Պուրակն էլ է նախագծվում

| Տարր | Ինչու |
|---|---|
| **արահետներ** | զբոսնելու համար, տանում են գլխավոր վայրեր |
| **ծաղկաթմբեր** | գույն և նախշ |
| **շատրվաններ** և լճակներ | զովություն և գեղեցկություն |
| **նստարաններ** և լապտերներ | հանգիստ և լույս |
| **հուշարձան** կամ քանդակ | ուշադրության կենտրոնը |

## Հատակագիծը

**Հատակագիծը** նկար է **վերևից**։ Դրանում ծառերը շրջաններ են, արահետները՝ գծեր, ծաղկաթմբերը՝ գունավոր ձևեր։

~~~art
pic park-plan
~~~

~~~art
sketch guide=grid
Նկարի՛ր այգու հատակագիծը թռչնի աչքով․ արահետներ, շատրվան, ծառերը՝ շրջաններով, նստարանները՝ փոքր ուղղանկյուններով։
~~~

~~~art
tasks
1. Ինչի՞ համար է հուշարձանը։
2. Ինչի՞ վրա է կանգնած արձանը։
3. Ո՞վ և ե՞րբ է ստեղծել Երևանի «Սասունցի Դավիթ» հուշարձանը։
4. Որտե՞ղ է Մինինի և Պոժարսկու հուշարձանը։
5. Անվանի՛ր պուրակի չորս տարր։
6. Ինչպե՞ս են ծառերը պատկերվում հատակագծում։
7. Նկարի՛ր փոքր պուրակի հատակագիծ՝ արահետներով, շատրվանով և կենտրոնում հուշարձանով։
~~~

~~~art
hints
1. Մարդու կամ իրադարձության հիշատակը պահելու համար։ 2. Պատվանդանի վրա։ 3. Երվանդ Քոչարը, 1959 թվականին։ 4. Մոսկվայի Կարմիր հրապարակում։ 5. Արահետներ, ծաղկաթմբեր, շատրվաններ, նստարաններ։ 6. Շրջաններով։ 7. Քո հատակագիծը։
~~~`,
        ru: `## Зачем нужны памятники?

**Памятник** хранит память о человеке или событии. Скульпторы и архитекторы создают памятники вместе: **статуя** стоит на **постаменте**.

| Город | Памятник | Автор и год |
|---|---|---|
| Ереван | «Давид Сасунский» — герой на коне | Ерванд Кочар, 1959 |
| Ереван | «Мать Армения» в парке Победы | 1967 |
| Москва | Минину и Пожарскому на Красной площади | Иван Мартос, 1818 |
| Санкт-Петербург | Медный всадник, Пётр I | Этьен Фальконе, 1782 |

~~~art
pic tamanyan stork
~~~

## Парк тоже проектируют

| Элемент | Зачем |
|---|---|
| **дорожки** | для прогулок; ведут к главным местам |
| **клумбы** | цвет и узор |
| **фонтаны** и пруды | прохлада и красота |
| **скамейки** и фонари | отдых и свет |
| **памятник** или скульптура | центр внимания |

## План

**План** — это рисунок **сверху**. На нём деревья — кружки, дорожки — линии, клумбы — цветные фигуры.

~~~art
pic park-plan
~~~

~~~art
sketch guide=grid
Нарисуй план парка с высоты птичьего полёта: дорожки, фонтан, деревья кружками, скамейки прямоугольниками.
~~~

~~~art
tasks
1. Зачем нужен памятник?
2. На чём стоит статуя?
3. Кто и когда создал памятник «Давид Сасунский» в Ереване?
4. Где находится памятник Минину и Пожарскому?
5. Назови четыре элемента парка.
6. Как изображают деревья на плане?
7. Нарисуй план небольшого парка с дорожками, фонтаном и памятником в центре.
~~~

~~~art
hints
1. Чтобы хранить память о человеке или событии. 2. На постаменте. 3. Ерванд Кочар, в 1959 году. 4. На Красной площади в Москве. 5. Дорожки, клумбы, фонтаны, скамейки. 6. Кружками. 7. Твой план.
~~~`,
      },
      [
        q(t("A statue stands on a…", "Արձանը կանգնած է…", "Статуя стоит на…"), [t("pedestal", "պատվանդանի վրա", "постаменте"), t("roof", "տանիքի վրա", "крыше"), t("bench", "նստարանի վրա", "скамейке")], 0),
        q(t("Who made «David of Sasun» in Yerevan?", "Ո՞վ է ստեղծել Երևանի «Սասունցի Դավիթը»։", "Кто создал «Давида Сасунского» в Ереване?"), [t("Ivan Martos", "Իվան Մարտոսը", "Иван Мартос"), t("Yervand Kochar", "Երվանդ Քոչարը", "Ерванд Кочар"), t("Isaac Levitan", "Իսահակ Լևիտանը", "Исаак Левитан")], 1),
        q(t("The Bronze Horseman is in…", "Պղնձե ձիավորը գտնվում է…", "Медный всадник находится в…"), [t("Yerevan", "Երևանում", "Ереване"), t("Moscow", "Մոսկվայում", "Москве"), t("Saint Petersburg", "Սանկտ Պետերբուրգում", "Санкт-Петербурге")], 2),
        q(t("A plan is a drawing…", "Հատակագիծը նկար է…", "План — это рисунок…"), [t("from above", "վերևից", "сверху"), t("from the side", "կողքից", "сбоку"), t("from below", "ներքևից", "снизу")], 0),
        q(t("On a plan, paths are shown as…", "Հատակագծում արահետները պատկերվում են…", "На плане дорожки изображают…"), [t("circles", "շրջաններով", "кружками"), t("lines", "գծերով", "линиями"), t("stars", "աստղերով", "звёздочками")], 1),
        q(t("A monument keeps…", "Հուշարձանը պահում է…", "Памятник хранит…"), [t("rain water", "անձրևաջուր", "дождевую воду"), t("money", "փող", "деньги"), t("the memory of a person or event", "մարդու կամ իրադարձության հիշատակը", "память о человеке или событии")], 2),
      ],
    ),
    lesson(
      "lanterns-fences",
      ["Lanterns and openwork fences", "Լապտերներ և ցանցկեն ցանկապատեր", "Фонари и ажурные ограды"],
      {
        en: ["Notice the decorative details of a city: lanterns, gates and fences", "Learn that an openwork pattern is built from a repeated element", "Draw an openwork fence and a festive lantern"],
        hy: ["Նկատել քաղաքի զարդային մանրամասները՝ լապտերներ, դարպասներ, ցանկապատեր", "Իմանալ, որ ցանցկեն նախշը կառուցվում է կրկնվող տարրից", "Նկարել ցանցկեն ցանկապատ և տոնական լապտեր"],
        ru: ["Замечать декоративные детали города: фонари, ворота, ограды", "Понимать, что ажурный узор строится из повторяющегося элемента", "Нарисовать ажурную ограду и праздничный фонарь"],
      },
      {
        en: `## Small details make a city beautiful

A city is not only buildings. **Lanterns**, **gates**, **fences**, **balconies** and **benches** are also designed by artists.

## Openwork

An **openwork** (*ажурный*) pattern has **holes** between its lines, so you can see through it, like lace. Iron fences and gates are often openwork.

| How it's made | Look |
|---|---|
| **forged** iron (a smith bends hot metal) | curls, spirals, leaves |
| **cast** iron (metal poured into a mould) | repeated identical sections |

The railing of the **Summer Garden** in Saint Petersburg (18th century) is one of the most famous fences in the world: tall bars, granite columns and gilded decorations. Yerevan has many old balconies and gates with iron curls too.

~~~art
pic lace street-furniture
~~~

## Building a fence pattern

1. Draw two horizontal lines: the top and the bottom.
2. Add **vertical bars** at equal distances.
3. Between the bars, repeat one **element**: a spiral, a circle, a heart, a leaf.
4. Decorate the tops of the bars with spikes or balls.

~~~art
pattern layout=strip rhythm=mirror motifs=spiral,rhombus,circle,leaf palettes=mono
A fence is a pattern made of metal. Build one from curls and rhombuses and try the mirror rhythm.
~~~

## Lanterns

A lantern has a **post**, a **lamp** and a **top**. It can be strict and simple or curly and festive.

~~~art
sketch paper=dark
Draw a lantern on a dark evening street: the metal frame, the glass and the warm circle of light.
~~~

~~~art
tasks
1. Name four decorative details of a city.
2. What does «openwork» mean?
3. How is forged iron different from cast iron?
4. Which famous fence is in Saint Petersburg?
5. Name the three parts of a lantern.
6. Draw one section of an openwork fence with spirals.
7. Draw a festive lantern for a fairy-tale city.
~~~

~~~art
hints
1. Lanterns, gates, fences, balconies. 2. A pattern with holes, so you can see through it. 3. Forged iron is bent by hand when hot; cast iron is poured into a mould. 4. The railing of the Summer Garden. 5. Post, lamp, top. 6–7. Your drawings.
~~~`,
        hy: `## Մանր մանրամասները քաղաքը գեղեցիկ են դարձնում

Քաղաքը միայն շենքեր չէ։ **Լապտերները**, **դարպասները**, **ցանկապատերը**, **պատշգամբները** և **նստարանները** նույնպես նկարիչներն են ձևավորում։

## Ցանցկեն

**Ցանցկեն** նախշն իր գծերի միջև **բացվածքներ** ունի, այնպես որ նրա միջով կարելի է տեսնել, ինչպես ժանյակի։ Երկաթե ցանկապատերը և դարպասները հաճախ ցանցկեն են։

| Ինչպես է պատրաստվում | Տեսքը |
|---|---|
| **կռած** երկաթ (դարբինը ծռում է տաք մետաղը) | գանգուրներ, պարույրներ, տերևներ |
| **ձուլված** չուգուն (մետաղը լցնում են կաղապարի մեջ) | կրկնվող միանման հատվածներ |

Սանկտ Պետերբուրգի **Ամառային այգու** ցանկապատը (18-րդ դար) աշխարհի ամենահայտնի ցանկապատերից է՝ բարձր ձողեր, գրանիտե սյուներ և ոսկեզօծ զարդեր։ Երևանում նույնպես կան երկաթե գանգուրներով շատ հին պատշգամբներ և դարպասներ։

~~~art
pic lace street-furniture
~~~

## Ցանկապատի նախշի կառուցում

1. Գծի՛ր երկու հորիզոնական գիծ՝ վերինը և ներքինը։
2. Հավասար հեռավորությամբ ավելացրու՛ **ուղղահայաց ձողեր**։
3. Ձողերի միջև կրկնի՛ր մեկ **տարր**՝ պարույր, շրջան, սիրտ, տերև։
4. Ձողերի ծայրերը զարդարի՛ր սուր ծայրերով կամ գնդիկներով։

~~~art
pattern layout=strip rhythm=mirror motifs=spiral,rhombus,circle,leaf palettes=mono
Ցանկապատը մետաղից նախշ է։ Կառուցի՛ր այն գանգուրներից և շեղանկյուններից, փորձի՛ր հայելային ռիթմը։
~~~

## Լապտերներ

Լապտերն ունի **սյուն**, **լամպ** և **գագաթ**։ Այն կարող է լինել խիստ ու պարզ կամ գանգուր ու տոնական։

~~~art
sketch paper=dark
Նկարի՛ր լապտեր մութ երեկոյան փողոցում․ մետաղե շրջանակը, ապակին և լույսի տաք շրջանը։
~~~

~~~art
tasks
1. Անվանի՛ր քաղաքի չորս զարդային մանրամասն։
2. Ի՞նչ է նշանակում «ցանցկեն»։
3. Ինչո՞վ է կռած երկաթը տարբերվում ձուլված չուգունից։
4. Ո՞ր հայտնի ցանկապատն է Սանկտ Պետերբուրգում։
5. Անվանի՛ր լապտերի երեք մասը։
6. Նկարի՛ր ցանցկեն ցանկապատի մի հատված՝ պարույրներով։
7. Նկարի՛ր տոնական լապտեր հեքիաթային քաղաքի համար։
~~~

~~~art
hints
1. Լապտերներ, դարպասներ, ցանկապատեր, պատշգամբներ։ 2. Բացվածքներով նախշ, որի միջով կարելի է տեսնել։ 3. Կռած երկաթը ձեռքով են ծռում տաք վիճակում, չուգունը լցնում են կաղապարի մեջ։ 4. Ամառային այգու ցանկապատը։ 5. Սյուն, լամպ, գագաթ։ 6–7. Քո նկարները։
~~~`,
        ru: `## Мелочи делают город красивым

Город — это не только дома. **Фонари**, **ворота**, **ограды**, **балконы** и **скамейки** тоже придумывают художники.

## Ажур

**Ажурный** узор имеет **просветы** между линиями, сквозь него видно, как сквозь кружево. Железные ограды и ворота часто бывают ажурными.

| Как сделано | Как выглядит |
|---|---|
| **кованое** железо (кузнец гнёт горячий металл) | завитки, спирали, листья |
| **литой** чугун (металл заливают в форму) | повторяющиеся одинаковые звенья |

Ограда **Летнего сада** в Санкт-Петербурге (XVIII век) — одна из самых знаменитых в мире: высокие прутья, гранитные колонны и позолоченные украшения. В Ереване тоже много старых балконов и ворот с железными завитками.

~~~art
pic lace street-furniture
~~~

## Строим узор ограды

1. Проведи две горизонтальные линии: верх и низ.
2. Добавь **вертикальные прутья** на равном расстоянии.
3. Между прутьями повтори один **элемент**: спираль, круг, сердечко, лист.
4. Укрась верхушки прутьев пиками или шариками.

~~~art
pattern layout=strip rhythm=mirror motifs=spiral,rhombus,circle,leaf palettes=mono
Ограда — это узор из металла. Собери её из завитков и ромбов, попробуй зеркальный ритм.
~~~

## Фонари

У фонаря есть **столб**, **светильник** и **навершие**. Он может быть строгим и простым или витым и праздничным.

~~~art
sketch paper=dark
Нарисуй фонарь на тёмной вечерней улице: металлическая рамка, стекло и тёплый круг света.
~~~

~~~art
tasks
1. Назови четыре декоративные детали города.
2. Что значит «ажурный»?
3. Чем кованое железо отличается от литого чугуна?
4. Какая знаменитая ограда есть в Санкт-Петербурге?
5. Назови три части фонаря.
6. Нарисуй звено ажурной ограды со спиралями.
7. Нарисуй праздничный фонарь для сказочного города.
~~~

~~~art
hints
1. Фонари, ворота, ограды, балконы. 2. Узор с просветами, сквозь который видно. 3. Кованое гнут вручную в горячем виде, чугун заливают в форму. 4. Ограда Летнего сада. 5. Столб, светильник, навершие. 6–7. Твои рисунки.
~~~`,
      },
      [
        q(t("An openwork pattern…", "Ցանցկեն նախշը…", "Ажурный узор…"), [t("has holes you can see through", "ունի բացվածքներ, որոնց միջով տեսնում ես", "имеет просветы, сквозь которые видно"), t("is painted black", "սև է ներկված", "закрашен чёрным"), t("has no lines", "գծեր չունի", "не имеет линий")], 0),
        q(t("A smith bends hot metal to make…", "Դարբինը ծռում է տաք մետաղը՝ պատրաստելու համար…", "Кузнец гнёт горячий металл, чтобы сделать…"), [t("cast iron", "ձուլված չուգուն", "литой чугун"), t("forged iron details", "կռած երկաթե մանրամասներ", "кованые детали"), t("glass", "ապակի", "стекло")], 1),
        q(t("The famous railing of the Summer Garden is in…", "Ամառային այգու հայտնի ցանկապատը գտնվում է…", "Знаменитая ограда Летнего сада находится в…"), [t("Yerevan", "Երևանում", "Ереване"), t("Moscow", "Մոսկվայում", "Москве"), t("Saint Petersburg", "Սանկտ Պետերբուրգում", "Санкт-Петербурге")], 2),
        q(t("A fence pattern is built from…", "Ցանկապատի նախշը կառուցվում է…", "Узор ограды строится из…"), [t("a repeated element", "կրկնվող տարրից", "повторяющегося элемента"), t("random blots", "պատահական բծերից", "случайных клякс"), t("one big picture", "մեկ մեծ նկարից", "одной большой картины")], 0),
        q(t("Which is NOT a part of a lantern?", "Ո՞րը լապտերի մաս չէ։", "Что НЕ является частью фонаря?"), [t("post", "սյուն", "столб"), t("wheel", "անիվ", "колесо"), t("lamp", "լամպ", "светильник")], 1),
        q(t("Cast iron is…", "Ձուլված չուգունը…", "Литой чугун —"), [t("woven like a basket", "զամբյուղի պես է հյուսված", "плетёный как корзина"), t("carved from wood", "փայտից է փորագրված", "вырезан из дерева"), t("metal poured into a mould", "կաղապարի մեջ լցված մետաղ է", "металл, залитый в форму")], 2),
      ],
    ),
    lesson(
      "shop-windows",
      ["Shop windows and signs", "Ցուցափեղկեր և ցուցանակներ", "Витрины и вывески"],
      {
        en: ["Understand that a shop window and a sign must tell at once what is sold", "Use a big main object, a clear title and a few colours", "Design a sign and a window for a bakery, a toy shop or a bookshop"],
        hy: ["Հասկանալ, որ ցուցափեղկը և ցուցանակը պետք է միանգամից ասեն, թե ինչ են վաճառում", "Օգտագործել մեծ գլխավոր առարկա, հստակ անվանում և քիչ գույներ", "Ձևավորել ցուցանակ և ցուցափեղկ հացատան, խաղալիքների կամ գրքերի խանութի համար"],
        ru: ["Понимать, что витрина и вывеска должны сразу сообщать, что продаётся", "Использовать крупный главный предмет, ясное название и немного цветов", "Придумать вывеску и витрину для пекарни, магазина игрушек или книжного"],
      },
      {
        en: `## The face of a shop

A **sign** (*вывеска*) and a **shop window** (*витрина*) are the face of a shop. People walk by quickly, so they must understand **at a glance** what is inside.

## Rules of a good sign

| Rule | Example |
|---|---|
| a short, clear **name** | «Хлеб», «Игрушки», «Գրքեր» |
| a **symbol** of the goods | a loaf, a teddy bear, an open book |
| **few colours**, strong contrast | dark letters on a light background |
| letters that **match** the shop | round and cheerful for toys, warm and soft for bread |

~~~art
letters
A sign must be read from across the street. Try styles and weights: which is easiest to read from far away?
~~~

## A shop window

1. Choose the **main object** and put it in the centre, big.
2. Arrange smaller objects around it.
3. Add a **background**: a colour, a curtain, a sky, a fairy-tale scene.
4. Think of the **season**: New Year windows sparkle, spring windows bloom.

Old signs were often **pictures without words**, because not everyone could read: a boot for a shoemaker, a pretzel for a baker.

~~~art
compose
~~~

~~~art
tasks
1. Why must a sign be understood at a glance?
2. Name four rules of a good sign.
3. Which symbol would you choose for a bakery?
4. Why did old signs often have no words?
5. Where do we put the main object in a shop window?
6. Draw a sign for a toy shop.
7. Design a New Year window for a bookshop.
~~~

~~~art
hints
1. People walk by quickly. 2. A short name, a symbol, few colours with contrast, matching letters. 3. For example a loaf or a pretzel. 4. Not everyone could read. 5. In the centre, big. 6–7. Your drawings.
~~~`,
        hy: `## Խանութի դեմքը

**Ցուցանակը** և **ցուցափեղկը** խանութի դեմքն են։ Մարդիկ արագ են անցնում, ուստի պետք է **միանգամից** հասկանան, թե ինչ կա ներսում։

## Լավ ցուցանակի կանոններ

| Կանոն | Օրինակ |
|---|---|
| կարճ, հստակ **անվանում** | «Հաց», «Խաղալիքներ», «Գրքեր» |
| ապրանքի **խորհրդանիշ** | բոքոն, արջուկ, բաց գիրք |
| **քիչ գույներ**, ուժեղ հակադրություն | մուգ տառեր բաց ֆոնի վրա |
| տառեր, որոնք **համապատասխանում** են խանութին | կլոր և ուրախ՝ խաղալիքների համար, տաք և փափուկ՝ հացի համար |

~~~art
letters
Ցուցանակը պետք է կարդացվի փողոցի մյուս կողմից։ Փորձի՛ր ոճերն ու հաստությունը․ ո՞րն է ամենահեշտը կարդալ հեռվից։
~~~

## Ցուցափեղկ

1. Ընտրի՛ր **գլխավոր առարկան** և դի՛ր կենտրոնում՝ մեծ։
2. Նրա շուրջը դասավորի՛ր ավելի փոքր առարկաներ։
3. Ավելացրու՛ **ֆոն**՝ գույն, վարագույր, երկինք, հեքիաթային տեսարան։
4. Մտածի՛ր **տարվա եղանակի** մասին՝ ամանորյա ցուցափեղկերը փայլում են, գարնանայինները՝ ծաղկում։

Հին ցուցանակները հաճախ **առանց բառերի նկարներ** էին, որովհետև ոչ բոլորը կարդալ գիտեին՝ կոշիկ՝ կոշկակարի համար, քաղցր կրենդել՝ հացթուխի համար։

~~~art
compose
~~~

~~~art
tasks
1. Ինչո՞ւ պետք է ցուցանակը միանգամից հասկանալի լինի։
2. Անվանի՛ր լավ ցուցանակի չորս կանոն։
3. Ո՞ր խորհրդանիշը կընտրեիր հացատան համար։
4. Ինչո՞ւ հին ցուցանակները հաճախ բառեր չունեին։
5. Որտե՞ղ ենք դնում գլխավոր առարկան ցուցափեղկում։
6. Նկարի՛ր ցուցանակ խաղալիքների խանութի համար։
7. Ձևավորի՛ր գրքի խանութի ամանորյա ցուցափեղկ։
~~~

~~~art
hints
1. Մարդիկ արագ են անցնում։ 2. Կարճ անվանում, խորհրդանիշ, քիչ գույներ՝ հակադրությամբ, համապատասխան տառեր։ 3. Օրինակ՝ բոքոն կամ կրենդել։ 4. Ոչ բոլորը կարդալ գիտեին։ 5. Կենտրոնում՝ մեծ։ 6–7. Քո նկարները։
~~~`,
        ru: `## Лицо магазина

**Вывеска** и **витрина** — лицо магазина. Люди проходят быстро, поэтому должны **с первого взгляда** понять, что внутри.

## Правила хорошей вывески

| Правило | Пример |
|---|---|
| короткое, ясное **название** | «Хлеб», «Игрушки», «Книги» |
| **символ** товара | батон, мишка, раскрытая книга |
| **мало цветов**, сильный контраст | тёмные буквы на светлом фоне |
| буквы **подходят** магазину | круглые и весёлые для игрушек, тёплые и мягкие для хлеба |

~~~art
letters
Вывеску должно быть видно с другой стороны улицы. Попробуй шрифты и толщину: какой легче прочитать издалека?
~~~

## Витрина

1. Выбери **главный предмет** и помести его в центр, крупно.
2. Вокруг расположи предметы поменьше.
3. Добавь **фон**: цвет, занавес, небо, сказочную сцену.
4. Подумай о **времени года**: новогодние витрины сверкают, весенние — цветут.

Старинные вывески часто были **картинками без слов**, потому что не все умели читать: сапог у сапожника, крендель у булочника.

~~~art
compose
~~~

~~~art
tasks
1. Почему вывеску нужно понимать с первого взгляда?
2. Назови четыре правила хорошей вывески.
3. Какой символ ты выберешь для пекарни?
4. Почему на старинных вывесках часто не было слов?
5. Куда ставим главный предмет в витрине?
6. Нарисуй вывеску для магазина игрушек.
7. Придумай новогоднюю витрину книжного магазина.
~~~

~~~art
hints
1. Люди проходят быстро. 2. Короткое название, символ, мало цветов с контрастом, подходящие буквы. 3. Например, батон или крендель. 4. Не все умели читать. 5. В центр, крупно. 6–7. Твои рисунки.
~~~`,
      },
      [
        q(t("A good sign must be understood…", "Լավ ցուցանակը պետք է հասկանալի լինի…", "Хорошую вывеску должны понимать…"), [t("at a glance", "միանգամից", "с первого взгляда"), t("after a long time", "երկար ժամանակ անց", "через долгое время"), t("only by adults", "միայն մեծահասակների համար", "только взрослые")], 0),
        q(t("A sign should have…", "Ցուցանակը պետք է ունենա…", "На вывеске должно быть…"), [t("many colours and long text", "շատ գույներ և երկար տեքստ", "много цветов и длинный текст"), t("a short name and a symbol", "կարճ անվանում և խորհրդանիշ", "короткое название и символ"), t("no letters at all, always", "միշտ առանց տառերի", "никогда никаких букв")], 1),
        q(t("Where is the main object of a shop window?", "Որտե՞ղ է ցուցափեղկի գլխավոր առարկան։", "Где главный предмет витрины?"), [t("in a corner, small", "անկյունում՝ փոքր", "в углу, маленький"), t("hidden behind others", "մյուսների հետևում թաքնված", "спрятан за другими"), t("in the centre, big", "կենտրոնում՝ մեծ", "в центре, крупно")], 2),
        q(t("Old signs were often pictures because…", "Հին ցուցանակները հաճախ նկարներ էին, որովհետև…", "Старинные вывески часто были картинками, потому что…"), [t("not everyone could read", "ոչ բոլորը կարդալ գիտեին", "не все умели читать"), t("paint was cheap", "ներկն էժան էր", "краска была дешёвой"), t("letters were forbidden", "տառերն արգելված էին", "буквы были запрещены")], 0),
        q(t("A good symbol for a bookshop:", "Գրքի խանութի լավ խորհրդանիշ․", "Хороший символ для книжного магазина:"), [t("a boot", "կոշիկ", "сапог"), t("an open book", "բաց գիրք", "раскрытая книга"), t("a fish", "ձուկ", "рыба")], 1),
        q(t("Strong contrast on a sign means…", "Ցուցանակի ուժեղ հակադրությունը նշանակում է…", "Сильный контраст на вывеске — это…"), [t("light letters on a light background", "բաց տառեր բաց ֆոնի վրա", "светлые буквы на светлом фоне"), t("letters the same colour as the background", "ֆոնի գույնի տառեր", "буквы цвета фона"), t("dark letters on a light background", "մուգ տառեր բաց ֆոնի վրա", "тёмные буквы на светлом фоне")], 2),
      ],
    ),
    lesson(
      "transport-design",
      ["Designing transport", "Տրանսպորտի ձևավորում", "Транспорт в городе"],
      {
        en: ["See that cars, buses and trains are designed by artists and engineers", "Notice how nature inspires transport: fish, birds, insects", "Invent and draw a transport of the future for your city"],
        hy: ["Տեսնել, որ մեքենաները, ավտոբուսները և գնացքները ստեղծում են նկարիչներն ու ինժեներները", "Նկատել, թե ինչպես է բնությունն ոգեշնչում տրանսպորտը՝ ձուկ, թռչուն, միջատ", "Հորինել և նկարել ապագայի տրանսպորտ քո քաղաքի համար"],
        ru: ["Видеть, что машины, автобусы и поезда придумывают художники и инженеры", "Замечать, как природа подсказывает формы транспорта: рыбы, птицы, насекомые", "Придумать и нарисовать транспорт будущего для своего города"],
      },
      {
        en: `## Who designs a car?

Before a car is built, a **designer** draws many sketches. The car must be **beautiful**, **safe**, **comfortable** and **fast**. The **engineer** makes sure it works.

## Nature as a teacher

| In nature | In transport |
|---|---|
| a fish or a dolphin — smooth, pointed | a fast train, a submarine |
| a bird with wide wings | an aeroplane |
| a beetle — round and strong | a small round car |
| a dragonfly with a long tail | a helicopter |

Smooth, **streamlined** shapes cut through air and water easily.

~~~art
pic feather bird-motif shell
Designers borrow from nature: smooth feathers, birds and shells cut through air and water.
~~~

## City transport

| Transport | Where | Shape |
|---|---|---|
| bus, trolleybus, tram | streets | long box with many windows |
| metro | under the ground | a long train of carriages |
| taxi | everywhere | a small car with a sign |

Yerevan and Moscow both have a **metro**; the Moscow metro is famous for its stations decorated like palaces.

## Draw a future transport

1. Choose an animal or plant as an **idea**.
2. Draw its main shape and add **wheels**, **wings** or **rails**.
3. Add windows, doors and lights.
4. Paint it in bright colours of your city.

~~~art
sketch guide=horizon
Draw the transport of the future: does it fly, float or roll? Give it a streamlined shape and big windows.
~~~

~~~art
tasks
1. Who draws a car before it is built?
2. Name four qualities a car must have.
3. Which animal looks like a fast train?
4. What does «streamlined» mean?
5. Which two cities in the lesson have a metro?
6. Draw a bus inspired by a caterpillar.
7. Invent and draw a flying tram for your city.
~~~

~~~art
hints
1. A designer. 2. Beautiful, safe, comfortable, fast. 3. A fish or a dolphin. 4. Smooth and shaped to cut through air or water easily. 5. Yerevan and Moscow. 6–7. Your drawings.
~~~`,
        hy: `## Ո՞վ է ձևավորում մեքենան

Մինչև մեքենան կառուցելը **դիզայները** բազմաթիվ էսքիզներ է նկարում։ Մեքենան պետք է լինի **գեղեցիկ**, **անվտանգ**, **հարմարավետ** և **արագ**։ **Ինժեները** հոգ է տանում, որ այն աշխատի։

## Բնությունը՝ ուսուցիչ

| Բնության մեջ | Տրանսպորտում |
|---|---|
| ձուկ կամ դելֆին՝ ողորկ, սրածայր | արագընթաց գնացք, սուզանավ |
| լայն թևերով թռչուն | ինքնաթիռ |
| բզեզ՝ կլոր և ամուր | փոքր, կլոր մեքենա |
| երկար պոչով ճպուռ | ուղղաթիռ |

Ողորկ, **հոսքաձև** ձևերը հեշտությամբ ճեղքում են օդը և ջուրը։

~~~art
pic feather bird-motif shell
Դիզայներները սովորում են բնությունից․ փետուրի, թռչնի և խեցու սահուն ձևերը հեշտությամբ ճեղքում են օդն ու ջուրը։
~~~

## Քաղաքային տրանսպորտ

| Տրանսպորտ | Որտեղ | Ձև |
|---|---|---|
| ավտոբուս, տրոլեյբուս, տրամվայ | փողոցներում | երկար արկղ՝ շատ պատուհաններով |
| մետրո | գետնի տակ | վագոնների երկար գնացք |
| տաքսի | ամենուր | փոքր մեքենա՝ նշանով |

Թե՛ Երևանը, թե՛ Մոսկվան ունեն **մետրո**․ Մոսկվայի մետրոն հայտնի է պալատների պես զարդարված կայարաններով։

## Նկարի՛ր ապագայի տրանսպորտ

1. Որպես **գաղափար** ընտրի՛ր կենդանի կամ բույս։
2. Նկարի՛ր նրա հիմնական ձևը և ավելացրու՛ **անիվներ**, **թևեր** կամ **ռելսեր**։
3. Ավելացրու՛ պատուհաններ, դռներ և լույսեր։
4. Ներկի՛ր քո քաղաքի վառ գույներով։

~~~art
sketch guide=horizon
Նկարի՛ր ապագայի տրանսպորտը․ թռչո՞ւմ է, լողո՞ւմ, թե՞ գլորվում։ Տո՛ւր նրան սահուն ձև և մեծ պատուհաններ։
~~~

~~~art
tasks
1. Ո՞վ է նկարում մեքենան մինչև կառուցելը։
2. Անվանի՛ր չորս որակ, որ պետք է ունենա մեքենան։
3. Ո՞ր կենդանին է նման արագընթաց գնացքի։
4. Ի՞նչ է նշանակում «հոսքաձև»։
5. Դասի ո՞ր երկու քաղաքներն ունեն մետրո։
6. Նկարի՛ր թրթուրից ոգեշնչված ավտոբուս։
7. Հորինի՛ր և նկարի՛ր թռչող տրամվայ քո քաղաքի համար։
~~~

~~~art
hints
1. Դիզայները։ 2. Գեղեցիկ, անվտանգ, հարմարավետ, արագ։ 3. Ձուկը կամ դելֆինը։ 4. Ողորկ և այնպիսի ձևի, որ հեշտությամբ ճեղքի օդը կամ ջուրը։ 5. Երևանը և Մոսկվան։ 6–7. Քո նկարները։
~~~`,
        ru: `## Кто придумывает машину?

Прежде чем построить машину, **дизайнер** рисует много эскизов. Машина должна быть **красивой**, **безопасной**, **удобной** и **быстрой**. **Инженер** следит, чтобы она работала.

## Природа — учитель

| В природе | В транспорте |
|---|---|
| рыба или дельфин — гладкие, заострённые | скоростной поезд, подводная лодка |
| птица с широкими крыльями | самолёт |
| жук — круглый и крепкий | маленькая круглая машина |
| стрекоза с длинным хвостом | вертолёт |

Гладкие, **обтекаемые** формы легко рассекают воздух и воду.

~~~art
pic feather bird-motif shell
Дизайнеры учатся у природы: обтекаемые перья, птицы и раковины легко рассекают воздух и воду.
~~~

## Городской транспорт

| Транспорт | Где | Форма |
|---|---|---|
| автобус, троллейбус, трамвай | на улицах | длинная коробка с множеством окон |
| метро | под землёй | длинный поезд из вагонов |
| такси | везде | небольшая машина с шашечками |

И в Ереване, и в Москве есть **метро**; московское метро знаменито станциями, украшенными как дворцы.

## Нарисуй транспорт будущего

1. Выбери животное или растение как **идею**.
2. Нарисуй его основную форму и добавь **колёса**, **крылья** или **рельсы**.
3. Добавь окна, двери и фары.
4. Раскрась яркими цветами своего города.

~~~art
sketch guide=horizon
Нарисуй транспорт будущего: он летает, плавает или катится? Дай ему обтекаемую форму и большие окна.
~~~

~~~art
tasks
1. Кто рисует машину до её постройки?
2. Назови четыре качества, которые нужны машине.
3. На какое животное похож скоростной поезд?
4. Что значит «обтекаемый»?
5. В каких двух городах из урока есть метро?
6. Нарисуй автобус, похожий на гусеницу.
7. Придумай и нарисуй летающий трамвай для своего города.
~~~

~~~art
hints
1. Дизайнер. 2. Красивая, безопасная, удобная, быстрая. 3. На рыбу или дельфина. 4. Гладкий, такой формы, чтобы легко рассекать воздух или воду. 5. В Ереване и Москве. 6–7. Твои рисунки.
~~~`,
      },
      [
        q(t("Who draws sketches of a new car?", "Ո՞վ է նկարում նոր մեքենայի էսքիզները։", "Кто рисует эскизы новой машины?"), [t("A designer", "Դիզայները", "Дизайнер"), t("A passenger", "Ուղևորը", "Пассажир"), t("A conductor", "Ուղեկցողը", "Кондуктор")], 0),
        q(t("An aeroplane looks like…", "Ինքնաթիռը նման է…", "Самолёт похож на…"), [t("a beetle", "բզեզի", "жука"), t("a bird", "թռչունի", "птицу"), t("a snail", "խխունջի", "улитку")], 1),
        q(t("Streamlined shapes are…", "Հոսքաձև ձևերը…", "Обтекаемые формы —"), [t("square with sharp corners", "քառակուսի են՝ սուր անկյուններով", "квадратные с острыми углами"), t("full of holes", "լի են անցքերով", "с дырками"), t("smooth and easy to move through air and water", "ողորկ են և հեշտ շարժվում են օդում ու ջրում", "гладкие и легко движутся в воздухе и воде")], 2),
        q(t("Which transport goes under the ground?", "Ո՞ր տրանսպորտն է անցնում գետնի տակով։", "Какой транспорт ходит под землёй?"), [t("the metro", "մետրոն", "метро"), t("a taxi", "տաքսին", "такси"), t("a helicopter", "ուղղաթիռը", "вертолёт")], 0),
        q(t("The Moscow metro is famous for…", "Մոսկվայի մետրոն հայտնի է…", "Московское метро знаменито…"), [t("having no stations", "կայարաններ չունենալով", "отсутствием станций"), t("stations decorated like palaces", "պալատների պես զարդարված կայարաններով", "станциями, украшенными как дворцы"), t("running on water", "ջրի վրայով գնալով", "тем, что ходит по воде")], 1),
        q(t("A helicopter is like a…", "Ուղղաթիռը նման է…", "Вертолёт похож на…"), [t("fish", "ձկան", "рыбу"), t("tortoise", "կրիայի", "черепаху"), t("dragonfly", "ճպուռի", "стрекозу")], 2),
      ],
    ),
    lesson(
      "street-panorama",
      ["A street panorama", "Փողոցի համայնապատկեր", "Панорама улицы"],
      {
        en: ["Know what a panorama is: a long picture of a whole street", "Show near and far: big and detailed in front, small and pale far away", "Make a class panorama of «My street» where each pupil draws one building"],
        hy: ["Իմանալ, թե ինչ է համայնապատկերը՝ ամբողջ փողոցի երկար նկար", "Ցույց տալ մոտը և հեռուն՝ մեծ ու մանրամասն առջևում, փոքր ու գունատ՝ հեռվում", "Ստեղծել «Իմ փողոցը» դասարանական համայնապատկեր, որտեղ յուրաքանչյուր աշակերտ մի շենք է նկարում"],
        ru: ["Знать, что такое панорама — длинное изображение целой улицы", "Показывать близкое и далёкое: впереди крупно и подробно, вдали мелко и бледно", "Сделать классную панораму «Моя улица», где каждый рисует один дом"],
      },
      {
        en: `## What is a panorama?

A **panorama** is a long, wide picture that shows a whole view: a street, a city, mountains. You look at it from left to right, as if you were walking.

~~~art
pic genre-city
~~~

## Near and far

| Near (foreground) | Far (background) |
|---|---|
| big | small |
| bright colours | pale, bluish colours |
| many details: windows, doors, signs | few details, simple shapes |
| low on the page | higher on the page, near the horizon |

~~~art
perspective modes=one
~~~

## What a street has

- **Buildings** of different heights and colours.
- **Trees**, lamps, benches, a bus stop.
- **People**, cars, a dog, birds.
- The **sky** and, in Yerevan, maybe **Mount Ararat** far away.

## A class project

1. Glue several sheets in a long strip and draw one **ground line**.
2. Each pupil draws and cuts out **one building** of the street.
3. Glue the buildings in a row; add trees, lamps and people between them.
4. Paint a common sky over the whole street.

~~~art
sketch mode=frames cells=4
A class panorama: each pupil draws one house in their own frame. Together they make one long street.
~~~

~~~art
tasks
1. What is a panorama?
2. How do things look far away?
3. Where on the page do we put things that are near?
4. Name five things you can see on a street.
5. Why are far mountains pale and bluish?
6. Draw your own house as a part of a panorama.
7. Add three people and a tree in front of your house.
~~~

~~~art
hints
1. A long picture showing a whole view. 2. Small, pale, with few details. 3. Low on the page. 4. For example buildings, trees, lamps, cars, people. 5. Because air between us and them makes them look lighter and bluer. 6–7. Your drawing.
~~~`,
        hy: `## Ի՞նչ է համայնապատկերը

**Համայնապատկերը** երկար, լայն նկար է, որը ցույց է տալիս ամբողջ տեսարանը՝ փողոց, քաղաք, լեռներ։ Այն դիտում ես ձախից աջ, կարծես քայլում ես։

~~~art
pic genre-city
~~~

## Մոտը և հեռուն

| Մոտ (առաջին պլան) | Հեռու (հետին պլան) |
|---|---|
| մեծ | փոքր |
| վառ գույներ | գունատ, կապտավուն գույներ |
| շատ մանրամասներ՝ պատուհաններ, դռներ, ցուցանակներ | քիչ մանրամասներ, պարզ ձևեր |
| էջի ներքևում | էջի ավելի վերևում, հորիզոնի մոտ |

~~~art
perspective modes=one
~~~

## Ինչ կա փողոցում

- Տարբեր բարձրության և գույնի **շենքեր**։
- **Ծառեր**, լապտերներ, նստարաններ, կանգառ։
- **Մարդիկ**, մեքենաներ, շուն, թռչուններ։
- **Երկինքը**, իսկ Երևանում՝ գուցե հեռվում **Արարատը**։

## Դասարանական նախագիծ

1. Մի քանի թերթ սոսնձի՛ր երկար շերտով և գծի՛ր մեկ **գետնի գիծ**։
2. Յուրաքանչյուր աշակերտ նկարում և կտրում է փողոցի **մեկ շենք**։
3. Շենքերը սոսնձի՛ր շարքով, դրանց միջև ավելացրու՛ ծառեր, լապտերներ և մարդիկ։
4. Ամբողջ փողոցի վրա ընդհանուր երկինք ներկի՛ր։

~~~art
sketch mode=frames cells=4
Դասարանի համայնապատկեր․ յուրաքանչյուր աշակերտ իր շրջանակում նկարում է մեկ տուն։ Միասին դրանք մեկ երկար փողոց են։
~~~

~~~art
tasks
1. Ի՞նչ է համայնապատկերը։
2. Ինչպե՞ս են երևում հեռվում գտնվող առարկաները։
3. Էջի որ մասում ենք դնում մոտիկ առարկաները։
4. Անվանի՛ր հինգ բան, որ կարելի է տեսնել փողոցում։
5. Ինչո՞ւ են հեռավոր լեռները գունատ և կապտավուն։
6. Նկարի՛ր քո տունն որպես համայնապատկերի մաս։
7. Տանդ առջև ավելացրու՛ երեք մարդ և մեկ ծառ։
~~~

~~~art
hints
1. Ամբողջ տեսարանը ցույց տվող երկար նկար։ 2. Փոքր, գունատ, քիչ մանրամասներով։ 3. Էջի ներքևում։ 4. Օրինակ՝ շենքեր, ծառեր, լապտերներ, մեքենաներ, մարդիկ։ 5. Որովհետև մեր և նրանց միջև եղած օդը դրանք ավելի բաց և կապույտ է դարձնում։ 6–7. Քո նկարը։
~~~`,
        ru: `## Что такое панорама?

**Панорама** — длинное широкое изображение, на котором виден весь вид: улица, город, горы. Её рассматривают слева направо, будто идёшь по улице.

~~~art
pic genre-city
~~~

## Близко и далеко

| Близко (передний план) | Далеко (задний план) |
|---|---|
| крупно | мелко |
| яркие цвета | бледные, голубоватые цвета |
| много деталей: окна, двери, вывески | мало деталей, простые формы |
| внизу листа | выше, ближе к линии горизонта |

~~~art
perspective modes=one
~~~

## Что есть на улице

- **Дома** разной высоты и цвета.
- **Деревья**, фонари, скамейки, остановка.
- **Люди**, машины, собака, птицы.
- **Небо**, а в Ереване, может быть, и **Арарат** вдали.

## Проект класса

1. Склейте несколько листов в длинную полосу и проведите одну **линию земли**.
2. Каждый ученик рисует и вырезает **один дом** улицы.
3. Наклейте дома в ряд; между ними добавьте деревья, фонари и людей.
4. Нарисуйте общее небо над всей улицей.

~~~art
sketch mode=frames cells=4
Классная панорама: каждый рисует один дом в своей рамке. Вместе получается одна длинная улица.
~~~

~~~art
tasks
1. Что такое панорама?
2. Как выглядят предметы вдали?
3. В какой части листа рисуем близкие предметы?
4. Назови пять вещей, которые можно увидеть на улице.
5. Почему далёкие горы бледные и голубоватые?
6. Нарисуй свой дом как часть панорамы.
7. Добавь перед домом трёх человек и дерево.
~~~

~~~art
hints
1. Длинное изображение, показывающее весь вид. 2. Мелкими, бледными, с малым числом деталей. 3. Внизу листа. 4. Например, дома, деревья, фонари, машины, люди. 5. Воздух между нами и ними делает их светлее и голубее. 6–7. Твой рисунок.
~~~`,
      },
      [
        q(t("A panorama is…", "Համայնապատկերը…", "Панорама —"), [t("a long picture of a whole view", "ամբողջ տեսարանի երկար նկար է", "длинное изображение всего вида"), t("a tiny stamp", "փոքրիկ նամականիշ է", "маленькая марка"), t("a portrait", "դիմանկար է", "портрет")], 0),
        q(t("Objects far away look…", "Հեռավոր առարկաներն երևում են…", "Далёкие предметы выглядят…"), [t("bigger and brighter", "ավելի մեծ և վառ", "крупнее и ярче"), t("smaller and paler", "ավելի փոքր և գունատ", "мельче и бледнее"), t("black", "սև", "чёрными")], 1),
        q(t("Near objects are drawn…", "Մոտ առարկաները նկարվում են…", "Близкие предметы рисуют…"), [t("at the top of the page", "էջի վերևում", "вверху листа"), t("very small", "շատ փոքր", "очень мелко"), t("low on the page, with details", "էջի ներքևում, մանրամասներով", "внизу листа, с деталями")], 2),
        q(t("Why are far mountains bluish?", "Ինչո՞ւ են հեռավոր լեռները կապտավուն։", "Почему далёкие горы голубоватые?"), [t("Because of the air between us and them", "Մեր և նրանց միջև եղած օդի պատճառով", "Из-за воздуха между нами и ними"), t("They are painted blue", "Կապույտ են ներկված", "Они покрашены в синий"), t("Because of the night", "Գիշերվա պատճառով", "Из-за ночи")], 0),
        q(t("We look at a panorama…", "Համայնապատկերը դիտում ենք…", "Панораму рассматривают…"), [t("from bottom to top", "ներքևից վերև", "снизу вверх"), t("from left to right", "ձախից աջ", "слева направо"), t("only in the centre", "միայն կենտրոնում", "только в центре")], 1),
        q(t("In a class panorama each pupil draws…", "Դասարանական համայնապատկերում յուրաքանչյուր աշակերտ նկարում է…", "В классной панораме каждый ученик рисует…"), [t("the whole street", "ամբողջ փողոցը", "всю улицу"), t("only the sky", "միայն երկինքը", "только небо"), t("one building", "մեկ շենք", "один дом")], 2),
      ],
    ),
  ],
};
