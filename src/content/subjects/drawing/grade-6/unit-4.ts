import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  title: t("Man and space: landscape", "Մարդը և տարածությունը․ բնանկար", "Человек и пространство. Пейзаж"),
  summary: t(
    "How artists showed space through history, linear and aerial perspective, the history of landscape, landscape and mood in Saryan's Armenia, the city landscape.",
    "Ինչպես են նկարիչները ցույց տվել տարածությունը պատմության ընթացքում, գծային և օդային հեռանկար, բնանկարի պատմությունը, բնանկար և տրամադրություն Սարյանի Հայաստանում, քաղաքային բնանկար։",
    "Как художники изображали пространство в разные эпохи, линейная и воздушная перспектива, история пейзажа, пейзаж-настроение и Армения Сарьяна, городской пейзаж.",
  ),
  lessons: [
    lesson(
      "space-in-art",
      ["Space in the art of different epochs", "Տարածությունը տարբեր դարաշրջանների արվեստում", "Изображение пространства в искусстве разных эпох"],
      {
        en: ["Know how different epochs showed space", "Understand that perspective is a convention, not the only truth", "Draw one scene in two systems: 'ancient' and 'Renaissance'"],
        hy: ["Իմանալ, թե ինչպես են տարբեր դարաշրջանները ցույց տվել տարածությունը", "Հասկանալ, որ հեռանկարը պայմանականություն է, ոչ թե միակ ճշմարտությունը", "Նույն տեսարանը նկարել երկու համակարգով՝ «հնագույն» և «վերածննդյան»"],
        ru: ["Знать, как разные эпохи изображали пространство", "Понимать, что перспектива — условность, а не единственная истина", "Нарисовать одну сцену в двух системах: «древней» и «ренессансной»"],
      },
      {
        en: `## A flat sheet and a deep world

The world has three dimensions, but a sheet of paper has two. Every epoch found its own way to show depth.

| Epoch | How space is shown |
|---|---|
| **ancient Egypt** | figures in rows (registers) one above another; important people are bigger; faces in profile, eyes and shoulders from the front |
| **Middle Ages, icons and miniatures** | gold or flat background; buildings drawn as if seen from several sides at once; sometimes lines widen into the distance (**reverse perspective**), as if the space opens towards the viewer |
| **Armenian miniature** (Toros Roslin) | figures on a gold or coloured background, architecture as a decorative frame; the meaning matters more than depth |
| **Renaissance, 15th century, Italy** | **linear perspective**: parallel lines meet at a vanishing point on the horizon; far things are smaller |
| **Japan, China** | far things are placed **higher** on the sheet; empty space and mist show distance |
| **20th century** | artists again free themselves: several points of view, flat colour planes |

~~~art
pic pyramids genre-icon genre-landscape
Three ways to show space: Egyptian flat figures, icon space, and the deep landscape of later painters.
~~~

## Why there are different systems

Each system expresses a **way of thinking**:

* Egyptian art shows the eternal order and the importance of the pharaoh.
* Icons show a spiritual world, not an earthly room.
* Renaissance perspective shows the world as seen by one person from one point.

So perspective is a strong tool, but not the "only right" way. An artist chooses what fits the idea.

## Try it

Draw the same scene, "A family at the table", twice:

1. **in the "ancient" way:** figures in rows, the most important person bigger, a flat background;
2. **in the Renaissance way:** a horizon, a vanishing point, figures smaller in the distance.

~~~art
perspective modes=one
~~~

~~~art
tasks
1. Why is showing depth a problem for an artist?
2. How did Egyptian artists show who was important?
3. What is reverse perspective?
4. When and where did linear perspective appear?
5. How do Chinese and Japanese artists show distance?
6. Why did icon painters not use linear perspective?
7. Draw one scene in two systems and compare.
~~~

~~~art
hints
1. The world has three dimensions, but the sheet has two. 2. Important people were drawn bigger. 3. Lines that widen into the distance, as if space opens towards the viewer. 4. In the 15th century in Italy, during the Renaissance. 5. Far things are higher on the sheet; empty space and mist show distance. 6. They showed a spiritual world, not an earthly space seen from one point. 7. Your drawings.
~~~`,
        hy: `## Հարթ թերթ և խոր աշխարհ

Աշխարհն ունի երեք չափում, իսկ թղթի թերթը՝ երկու։ Ամեն դարաշրջան գտել է խորությունը ցույց տալու իր եղանակը։

| Դարաշրջան | Ինչպես է ցույց տրված տարածությունը |
|---|---|
| **Հին Եգիպտոս** | պատկերները շարքերով (գոտիներով) իրար վրա, կարևոր մարդիկ ավելի մեծ են, դեմքերը պրոֆիլով, աչքերն ու ուսերը դիմացից |
| **Միջնադար, սրբապատկերներ և մանրանկարներ** | ոսկե կամ հարթ ֆոն, շենքերը նկարված են կարծես միանգամից մի քանի կողմից, երբեմն գծերը լայնանում են դեպի հեռուն (**հակադարձ հեռանկար**), կարծես տարածությունը բացվում է դեպի դիտողը |
| **Հայկական մանրանկար** (Թորոս Ռոսլին) | պատկերներ ոսկե կամ գունավոր ֆոնի վրա, ճարտարապետությունն որպես դեկորատիվ շրջանակ, իմաստն ավելի կարևոր է, քան խորությունը |
| **Վերածնունդ, 15-րդ դար, Իտալիա** | **գծային հեռանկար**՝ զուգահեռ գծերը հանդիպում են հորիզոնի վրայի անհետացման կետում, հեռավոր առարկաներն ավելի փոքր են |
| **Ճապոնիա, Չինաստան** | հեռավոր առարկաները տեղադրվում են թերթի **ավելի վերևում**, դատարկ տարածությունն ու մշուշը ցույց են տալիս հեռավորությունը |
| **20-րդ դար** | նկարիչները նորից ազատվում են՝ մի քանի տեսակետ, հարթ գունային հարթություններ |

~~~art
pic pyramids genre-icon genre-landscape
Տարածություն ցույց տալու երեք ձև․ եգիպտական հարթ կերպարներ, սրբապատկերի տարածություն և հետագա նկարիչների խորը բնանկար։
~~~

## Ինչու կան տարբեր համակարգեր

Ամեն համակարգ արտահայտում է **մտածելակերպ**․

* Եգիպտական արվեստը ցույց է տալիս հավերժական կարգը և փարավոնի կարևորությունը։
* Սրբապատկերները ցույց են տալիս հոգևոր աշխարհ, ոչ թե երկրային սենյակ։
* Վերածննդյան հեռանկարը ցույց է տալիս աշխարհն այնպես, ինչպես այն տեսնում է մեկ մարդը մեկ կետից։

Ուստի հեռանկարն ուժեղ գործիք է, բայց ոչ «միակ ճիշտ» եղանակը։ Նկարիչն ընտրում է այն, ինչ համապատասխանում է գաղափարին։

## Փորձիր

Նույն տեսարանը՝ «Ընտանիքը սեղանի շուրջ», նկարիր երկու անգամ․

1. **«հնագույն» ձևով**՝ պատկերները շարքերով, ամենակարևոր մարդն ավելի մեծ, հարթ ֆոն,
2. **վերածննդյան ձևով**՝ հորիզոն, անհետացման կետ, հեռվում ավելի փոքր պատկերներ։

~~~art
perspective modes=one
~~~

~~~art
tasks
1. Ինչու է խորությունը ցույց տալը խնդիր նկարչի համար։
2. Ինչպես էին եգիպտացի նկարիչները ցույց տալիս, թե ով է կարևոր։
3. Ինչ է հակադարձ հեռանկարը։
4. Երբ և որտեղ հայտնվեց գծային հեռանկարը։
5. Ինչպես են չինացի և ճապոնացի նկարիչները ցույց տալիս հեռավորությունը։
6. Ինչու սրբապատկերիչները չէին օգտագործում գծային հեռանկար։
7. Նկարիր մեկ տեսարան երկու համակարգով և համեմատիր։
~~~

~~~art
hints
1. Աշխարհն ունի երեք չափում, իսկ թերթը՝ երկու։ 2. Կարևոր մարդկանց նկարում էին ավելի մեծ։ 3. Գծեր, որոնք լայնանում են դեպի հեռուն, կարծես տարածությունը բացվում է դեպի դիտողը։ 4. 15-րդ դարում Իտալիայում՝ Վերածննդի ժամանակ։ 5. Հեռավոր առարկաները թերթի վերևում են, դատարկ տարածությունն ու մշուշը ցույց են տալիս հեռավորությունը։ 6. Նրանք ցույց էին տալիս հոգևոր աշխարհ, ոչ թե մեկ կետից տեսած երկրային տարածություն։ 7. Քո գծանկարները։
~~~`,
        ru: `## Плоский лист и глубокий мир

У мира три измерения, а у листа бумаги — два. Каждая эпоха нашла свой способ показать глубину.

| Эпоха | Как изображено пространство |
|---|---|
| **Древний Египет** | фигуры рядами (регистрами) одна над другой; важные люди крупнее; лица в профиль, глаза и плечи — анфас |
| **Средние века, иконы и миниатюры** | золотой или плоский фон; здания показаны как будто сразу с нескольких сторон; иногда линии расходятся вглубь (**обратная перспектива**), будто пространство раскрывается к зрителю |
| **армянская миниатюра** (Торос Рослин) | фигуры на золотом или цветном фоне, архитектура как декоративная рамка; смысл важнее глубины |
| **Возрождение, XV век, Италия** | **линейная перспектива**: параллельные линии сходятся в точке схода на горизонте; дальнее меньше |
| **Япония, Китай** | дальнее располагают **выше** на листе; пустота и туман передают даль |
| **XX век** | художники снова освобождаются: несколько точек зрения, плоские цветовые плоскости |

~~~art
pic pyramids genre-icon genre-landscape
Три способа показать пространство: плоские египетские фигуры, пространство иконы и глубокий пейзаж поздних художников.
~~~

## Почему системы разные

Каждая система выражает **образ мысли**:

* Египетское искусство показывает вечный порядок и величие фараона.
* Икона показывает духовный мир, а не земную комнату.
* Ренессансная перспектива показывает мир таким, каким его видит один человек из одной точки.

Значит, перспектива — сильный инструмент, но не «единственно верный» способ. Художник выбирает то, что подходит замыслу.

## Попробуй

Нарисуй одну сцену, «Семья за столом», дважды:

1. **«по-древнему»:** фигуры рядами, самый важный человек крупнее, плоский фон;
2. **по-ренессансному:** горизонт, точка схода, фигуры вдали меньше.

~~~art
perspective modes=one
~~~

~~~art
tasks
1. Почему изображение глубины — задача для художника?
2. Как египетские художники показывали, кто важнее?
3. Что такое обратная перспектива?
4. Когда и где появилась линейная перспектива?
5. Как китайские и японские художники передают даль?
6. Почему иконописцы не пользовались линейной перспективой?
7. Нарисуй одну сцену в двух системах и сравни.
~~~

~~~art
hints
1. У мира три измерения, а у листа — два. 2. Важных людей изображали крупнее. 3. Линии, расходящиеся вглубь, будто пространство раскрывается к зрителю. 4. В XV веке в Италии, в эпоху Возрождения. 5. Дальнее располагают выше на листе; пустота и туман передают даль. 6. Они показывали духовный мир, а не земное пространство из одной точки. 7. Твои рисунки.
~~~`,
      },
      [
        q(t("In ancient Egypt important people were drawn…", "Հին Եգիպտոսում կարևոր մարդկանց նկարում էին…", "В Древнем Египте важных людей изображали…"), [t("bigger", "ավելի մեծ", "крупнее"), t("smaller", "ավելի փոքր", "мельче"), t("only in blue", "միայն կապույտով", "только синим")], 0),
        q(t("Lines that widen into the distance form … perspective.", "Դեպի հեռուն լայնացող գծերը կազմում են … հեռանկար։", "Линии, расходящиеся вглубь, образуют … перспективу."), [t("linear", "գծային", "линейную"), t("reverse", "հակադարձ", "обратную"), t("aerial", "օդային", "воздушную")], 1),
        q(t("Linear perspective appeared in…", "Գծային հեռանկարը հայտնվեց…", "Линейная перспектива появилась в…"), [t("ancient Egypt", "Հին Եգիպտոսում", "Древнем Египте"), t("Urartu", "Ուրարտուում", "Урарту"), t("15th-century Italy", "15-րդ դարի Իտալիայում", "Италии XV века")], 2),
        q(t("In Chinese painting far things are placed…", "Չինական նկարչությունում հեռավոր առարկաները տեղադրվում են…", "В китайской живописи дальнее располагают…"), [t("higher on the sheet", "թերթի ավելի վերևում", "выше на листе"), t("lower on the sheet", "թերթի ավելի ներքևում", "ниже на листе"), t("in the centre only", "միայն կենտրոնում", "только в центре")], 0),
        q(t("Renaissance perspective shows the world as seen…", "Վերածննդյան հեռանկարը ցույց է տալիս աշխարհն այնպես, ինչպես տեսնում է…", "Ренессансная перспектива показывает мир, каким его видит…"), [t("from everywhere at once", "ամեն տեղից միանգամից", "отовсюду сразу"), t("by one person from one point", "մեկ մարդը մեկ կետից", "один человек из одной точки"), t("by a bird only", "միայն թռչունը", "только птица")], 1),
        q(t("Perspective is…", "Հեռանկարը…", "Перспектива — это…"), [t("the only right way to draw", "նկարելու միակ ճիշտ եղանակն է", "единственно верный способ рисовать"), t("forbidden in art", "արգելված է արվեստում", "запрещённый в искусстве приём"), t("one strong tool among others", "ուժեղ գործիքներից մեկն է", "один из сильных инструментов")], 2),
      ],
    ),
    lesson(
      "linear-perspective",
      ["Linear perspective: horizon and vanishing point", "Գծային հեռանկար․ հորիզոն և անհետացման կետ", "Правила построения линейной перспективы"],
      {
        en: ["Know the rules of linear perspective", "Use one-point perspective for a road, a street or a room", "Use two-point perspective for a building seen from its corner"],
        hy: ["Իմանալ գծային հեռանկարի կանոնները", "Մեկ կետով հեռանկարն օգտագործել ճանապարհի, փողոցի կամ սենյակի համար", "Երկու կետով հեռանկարն օգտագործել անկյունից տեսած շենքի համար"],
        ru: ["Знать правила линейной перспективы", "Использовать перспективу с одной точкой схода для дороги, улицы или комнаты", "Использовать перспективу с двумя точками схода для здания, видимого с угла"],
      },
      {
        en: `## Rules of linear perspective

1. Things that are **farther** away look **smaller**. Telegraph poles along a road get shorter and closer to each other.
2. Parallel lines going away from us **seem to meet** at one point on the horizon: the **vanishing point**. Think of rails or the edges of a long road.
3. Vertical lines stay **vertical**; horizontal lines parallel to the picture stay **horizontal**.
4. The horizon is at the height of the viewer's **eyes**.

~~~art
perspective
~~~

## Point of view

* **Low horizon:** we look from below; the sky is big, buildings look tall and majestic.
* **Middle horizon:** a calm, natural view.
* **High horizon:** a view from above, like from a hill; we see a lot of ground, roads and fields.

## One-point perspective

Use it when you look **straight along** a road, a street, a corridor, a row of trees.

1. Draw the horizon and put one vanishing point on it.
2. Draw the near objects (the front of houses, the edge of the road).
3. Connect their corners with the vanishing point by light lines.
4. Place the far objects between these lines: they become smaller.

~~~art
sketch guide=vp
One-point road: draw the road edges, rails and fence posts running to the point on the horizon.
~~~

## Two-point perspective

Use it when you see a building from its **corner**.

1. Draw the horizon and two vanishing points far apart, at the edges of the sheet or beyond.
2. Draw the nearest vertical edge of the building.
3. From its top and bottom draw lines to both vanishing points.
4. Mark the far vertical edges; windows and doors also follow the lines to the vanishing points.

~~~art
sketch guide=vp2
~~~

## Try it

1. Draw a road with poles going into the distance (one point).
2. Draw a street of Yerevan or your town with houses on both sides (one point).
3. Draw a house or a church seen from the corner (two points).

~~~art
tasks
1. Why do far objects look smaller?
2. What is a vanishing point?
3. Which lines stay vertical in perspective?
4. What does a low horizon express? A high horizon?
5. When do we use one-point perspective? Two-point perspective?
6. Where should the vanishing points be in two-point perspective?
7. Draw your classroom in one-point perspective.
~~~

~~~art
hints
1. Because of the distance: the farther, the smaller they appear. 2. The point on the horizon where parallel lines going away seem to meet. 3. Vertical lines. 4. A low horizon makes things look tall and majestic; a high horizon shows a view from above. 5. When looking straight along a road or street; when seeing a building from its corner. 6. Far apart on the horizon, at the edges of the sheet or beyond. 7. Your drawing.
~~~`,
        hy: `## Գծային հեռանկարի կանոնները

1. **Ավելի հեռու** գտնվող առարկաները **ավելի փոքր** են երևում։ Ճանապարհի երկայնքով հեռագրասյուները կարճանում են և մոտենում իրար։
2. Մեզնից հեռացող զուգահեռ գծերը **կարծես հանդիպում են** հորիզոնի վրայի մեկ կետում՝ **անհետացման կետում**։ Մտածիր ռելսերի կամ երկար ճանապարհի եզրերի մասին։
3. Ուղղահայաց գծերը մնում են **ուղղահայաց**, նկարին զուգահեռ հորիզոնական գծերը մնում են **հորիզոնական**։
4. Հորիզոնը դիտողի **աչքերի** բարձրության վրա է։

~~~art
perspective
~~~

## Տեսակետ

* **Ցածր հորիզոն**՝ նայում ենք ներքևից, երկինքը մեծ է, շենքերը բարձր և վեհ են թվում։
* **Միջին հորիզոն**՝ հանդարտ, բնական տեսք։
* **Բարձր հորիզոն**՝ տեսք վերևից, ինչպես բլրից, տեսնում ենք շատ հող, ճանապարհներ և դաշտեր։

## Մեկ կետով հեռանկար

Օգտագործիր այն, երբ նայում ես **ուղիղ երկայնքով**՝ ճանապարհի, փողոցի, միջանցքի, ծառերի շարքի։

1. Նկարիր հորիզոնը և դրա վրա դիր մեկ անհետացման կետ։
2. Նկարիր մոտիկ առարկաները (տների ճակատը, ճանապարհի եզրը)։
3. Նրանց անկյունները թեթև գծերով միացրու անհետացման կետին։
4. Հեռավոր առարկաները տեղադրիր այդ գծերի միջև․ դրանք փոքրանում են։

~~~art
sketch guide=vp
Մեկ կետով ճանապարհ․ նկարի՛ր ճանապարհի եզրերը, ռելսերը և ցանկապատի սյուները, որոնք գնում են դեպի հորիզոնի կետը։
~~~

## Երկու կետով հեռանկար

Օգտագործիր այն, երբ շենքը տեսնում ես **անկյունից**։

1. Նկարիր հորիզոնը և երկու իրարից հեռու անհետացման կետ՝ թերթի եզրերին կամ դրանցից դուրս։
2. Նկարիր շենքի ամենամոտ ուղղահայաց կողը։
3. Նրա վերևից և ներքևից գծեր տար դեպի երկու անհետացման կետերը։
4. Նշիր հեռավոր ուղղահայաց կողերը, պատուհաններն ու դռները նույնպես հետևում են դեպի անհետացման կետերը գնացող գծերին։

~~~art
sketch guide=vp2
~~~

## Փորձիր

1. Նկարիր ճանապարհ՝ հեռուն գնացող սյուներով (մեկ կետ)։
2. Նկարիր Երևանի կամ քո քաղաքի փողոց՝ երկու կողմից տներով (մեկ կետ)։
3. Նկարիր անկյունից տեսած տուն կամ եկեղեցի (երկու կետ)։

~~~art
tasks
1. Ինչու են հեռավոր առարկաներն ավելի փոքր երևում։
2. Ինչ է անհետացման կետը։
3. Որ գծերն են մնում ուղղահայաց հեռանկարում։
4. Ինչ է արտահայտում ցածր հորիզոնը։ Իսկ բարձր հորիզոնը։
5. Երբ ենք օգտագործում մեկ կետով հեռանկար։ Իսկ երկու կետով։
6. Որտեղ պետք է լինեն անհետացման կետերն երկու կետով հեռանկարում։
7. Նկարիր քո դասասենյակը մեկ կետով հեռանկարում։
~~~

~~~art
hints
1. Հեռավորության պատճառով․ որքան հեռու, այնքան փոքր են երևում։ 2. Հորիզոնի այն կետը, որտեղ հեռացող զուգահեռ գծերը կարծես հանդիպում են։ 3. Ուղղահայաց գծերը։ 4. Ցածր հորիզոնն առարկաները բարձր և վեհ է ցույց տալիս, բարձրը՝ տեսք վերևից։ 5. Երբ նայում ենք ուղիղ ճանապարհի կամ փողոցի երկայնքով, երբ շենքը տեսնում ենք անկյունից։ 6. Հորիզոնի վրա իրարից հեռու՝ թերթի եզրերին կամ դրանցից դուրս։ 7. Քո գծանկարը։
~~~`,
        ru: `## Правила линейной перспективы

1. Предметы, которые **дальше**, кажутся **меньше**. Столбы вдоль дороги становятся ниже и ближе друг к другу.
2. Параллельные линии, уходящие от нас, **как будто сходятся** в одной точке на горизонте — **точке схода**. Вспомни рельсы или края длинной дороги.
3. Вертикальные линии остаются **вертикальными**; горизонтальные линии, параллельные картине, остаются **горизонтальными**.
4. Горизонт находится на высоте **глаз** зрителя.

~~~art
perspective
~~~

## Точка зрения

* **Низкий горизонт:** смотрим снизу; неба много, здания кажутся высокими и величественными.
* **Средний горизонт:** спокойный, естественный вид.
* **Высокий горизонт:** вид сверху, как с холма; видно много земли, дорог и полей.

## Перспектива с одной точкой схода

Используй её, когда смотришь **прямо вдоль** дороги, улицы, коридора, ряда деревьев.

1. Проведи горизонт и поставь на нём одну точку схода.
2. Нарисуй ближние предметы (фасады домов, край дороги).
3. Соедини их углы с точкой схода лёгкими линиями.
4. Дальние предметы размещай между этими линиями: они становятся меньше.

~~~art
sketch guide=vp
Дорога с одной точкой схода: края дороги, рельсы и столбики забора бегут к точке на горизонте.
~~~

## Перспектива с двумя точками схода

Используй её, когда видишь здание **с угла**.

1. Проведи горизонт и поставь две точки схода далеко друг от друга, на краях листа или за ними.
2. Нарисуй ближайшее вертикальное ребро здания.
3. От его верха и низа проведи линии к обеим точкам схода.
4. Отметь дальние вертикальные рёбра; окна и двери тоже подчиняются линиям к точкам схода.

~~~art
sketch guide=vp2
~~~

## Попробуй

1. Нарисуй дорогу со столбами, уходящую вдаль (одна точка).
2. Нарисуй улицу Еревана или своего города с домами по обеим сторонам (одна точка).
3. Нарисуй дом или церковь, видимые с угла (две точки).

~~~art
tasks
1. Почему дальние предметы кажутся меньше?
2. Что такое точка схода?
3. Какие линии остаются вертикальными в перспективе?
4. Что выражает низкий горизонт? Высокий?
5. Когда используют перспективу с одной точкой схода? С двумя?
6. Где должны быть точки схода в перспективе с двумя точками?
7. Нарисуй свой класс в перспективе с одной точкой схода.
~~~

~~~art
hints
1. Из-за расстояния: чем дальше, тем меньше они кажутся. 2. Точка на горизонте, где как будто сходятся уходящие параллельные линии. 3. Вертикальные. 4. Низкий горизонт делает предметы высокими и величественными, высокий показывает вид сверху. 5. Когда смотрим прямо вдоль дороги или улицы; когда видим здание с угла. 6. Далеко друг от друга на горизонте, на краях листа или за ними. 7. Твой рисунок.
~~~`,
      },
      [
        q(t("Parallel lines going away meet at the…", "Հեռացող զուգահեռ գծերը հանդիպում են…", "Уходящие параллельные линии сходятся в…"), [t("vanishing point", "անհետացման կետում", "точке схода"), t("highlight", "փայլում", "блике"), t("frame", "շրջանակում", "раме")], 0),
        q(t("In linear perspective vertical lines…", "Գծային հեռանկարում ուղղահայաց գծերը…", "В линейной перспективе вертикальные линии…"), [t("bend", "կորանում են", "изгибаются"), t("stay vertical", "մնում են ուղղահայաց", "остаются вертикальными"), t("disappear", "անհետանում են", "исчезают")], 1),
        q(t("A view from a hill has a … horizon.", "Բլրից տեսքն ունի … հորիզոն։", "Вид с холма — это … горизонт."), [t("low", "ցածր", "низкий"), t("missing", "բացակայող", "отсутствующий"), t("high", "բարձր", "высокий")], 2),
        q(t("A building seen from its corner needs … vanishing points.", "Անկյունից տեսած շենքին պետք է … անհետացման կետ։", "Для здания, видимого с угла, нужно … точки схода."), [t("two", "երկու", "две"), t("no", "ոչ մի", "ни одной"), t("ten", "տասը", "десять")], 0),
        q(t("A low horizon makes buildings look…", "Ցածր հորիզոնը շենքերը դարձնում է…", "Низкий горизонт делает здания…"), [t("tiny", "փոքրիկ", "крошечными"), t("tall and majestic", "բարձր և վեհ", "высокими и величественными"), t("flat", "հարթ", "плоскими")], 1),
        q(t("Looking straight along a street, we use … perspective.", "Ուղիղ փողոցի երկայնքով նայելիս օգտագործում ենք … հեռանկար։", "Глядя прямо вдоль улицы, используют перспективу…"), [t("reverse", "հակադարձ", "обратную"), t("two-point", "երկու կետով", "с двумя точками"), t("one-point", "մեկ կետով", "с одной точкой")], 2),
      ],
    ),
    lesson(
      "aerial-perspective",
      ["Aerial perspective", "Օդային հեռանկար", "Воздушная перспектива"],
      {
        en: ["Know the signs of aerial perspective", "Show distance with tone, colour and detail", "Paint a landscape with three planes"],
        hy: ["Իմանալ օդային հեռանկարի նշանները", "Հեռավորությունը ցույց տալ տոնով, գույնով և մանրամասներով", "Նկարել բնանկար՝ երեք պլանով"],
        ru: ["Знать признаки воздушной перспективы", "Передавать удалённость тоном, цветом и деталями", "Написать пейзаж с тремя планами"],
      },
      {
        en: `## Air between us and the mountains

Between the eye and a far mountain there is a thick layer of **air**, with dust and water vapour. It changes what we see. Leonardo da Vinci wrote about this and painted soft, hazy distances. The effect is called **aerial perspective**.

~~~art
aerial
~~~

## Signs of aerial perspective

| Near | Far |
|---|---|
| darker and stronger | lighter, paler |
| warm colours (red, orange, brown, yellow-green) | cool colours (blue, violet, grey-blue) |
| strong contrasts of light and shadow | weak contrasts |
| sharp outlines | soft, blurred outlines |
| many details (leaves, stones, grass) | few details; only big shapes |
| saturated colours | greyish, less saturated colours |

Look at Mount Ararat from Yerevan: on a summer day it is pale blue and its details disappear in the haze, while the nearby trees and houses are bright and detailed.

## Three planes

Landscape painters often build space with **planes**:

* **foreground:** large, detailed, warm and contrasting; grass, stones, a tree;
* **middle ground:** fields, villages, hills; smaller and calmer;
* **background:** far mountains and sky; pale, cool, simple.

~~~art
steps landscape-planes
~~~

## Try it: mountains in layers

1. Draw four or five lines of mountains one behind another.
2. Paint the **farthest** row first, very pale blue-violet.
3. Each nearer row is a little darker and warmer.
4. The nearest row is dark and warm; add details: rocks, trees, a house.
5. Compare: does the picture look deep?

~~~art
mixer paints=blue,white,black
Mix the layers of the mountains: dark blue in front, paler and paler towards the sky.
~~~

~~~art
tasks
1. Why do far mountains look different from near ones?
2. Name five signs of aerial perspective.
3. Which colours are typical of the distance? Of the foreground?
4. How do outlines change with distance?
5. What are the three planes of a landscape?
6. How does Mount Ararat look from Yerevan on a hazy day?
7. Paint a landscape with three clear planes.
~~~

~~~art
hints
1. Because of the layer of air with dust and water vapour between us and them. 2. Far things are lighter, cooler, less contrasting, softer in outline and less detailed. 3. Cool blue and violet; warm red, orange, brown and yellow-green. 4. They become softer and blurred. 5. Foreground, middle ground, background. 6. Pale blue, with details lost in the haze. 7. Your painting.
~~~`,
        hy: `## Օդը մեր և լեռների միջև

Աչքի և հեռավոր լեռան միջև կա **օդի** հաստ շերտ՝ փոշով և ջրային գոլորշով։ Այն փոխում է այն, ինչ տեսնում ենք։ Լեոնարդո դա Վինչին գրել է այդ մասին և նկարել փափուկ, մշուշոտ հեռուներ։ Այս երևույթը կոչվում է **օդային հեռանկար**։

~~~art
aerial
~~~

## Օդային հեռանկարի նշանները

| Մոտ | Հեռու |
|---|---|
| ավելի մուգ և ուժեղ | ավելի բաց, գունատ |
| տաք գույներ (կարմիր, նարնջագույն, դարչնագույն, դեղնականաչ) | սառը գույներ (կապույտ, մանուշակագույն, մոխրակապույտ) |
| լույսի և ստվերի ուժեղ հակադրություններ | թույլ հակադրություններ |
| սուր եզրագծեր | փափուկ, աղոտ եզրագծեր |
| շատ մանրամասներ (տերևներ, քարեր, խոտ) | քիչ մանրամասներ, միայն մեծ ձևեր |
| հագեցված գույներ | մոխրավուն, պակաս հագեցված գույներ |

Նայիր Արարատ լեռանն Երևանից․ ամառային օրն այն բաց կապույտ է, և նրա մանրամասներն անհետանում են մշուշում, իսկ մոտակա ծառերն ու տները վառ են և մանրամասն։

## Երեք պլան

Բնանկարիչները հաճախ տարածությունը կառուցում են **պլաններով**․

* **առաջին պլան**՝ մեծ, մանրամասն, տաք և հակադիր՝ խոտ, քարեր, ծառ,
* **միջին պլան**՝ դաշտեր, գյուղեր, բլուրներ՝ ավելի փոքր և հանդարտ,
* **հետին պլան**՝ հեռավոր լեռներ և երկինք՝ գունատ, սառը, պարզ։

~~~art
steps landscape-planes
~~~

## Փորձիր․ լեռներ շերտերով

1. Նկարիր լեռների չորս-հինգ շարք՝ մեկը մյուսի ետևում։
2. Նախ ներկիր **ամենահեռավոր** շարքը՝ շատ բաց կապտամանուշակագույն։
3. Ամեն ավելի մոտ շարքը մի քիչ ավելի մուգ և տաք է։
4. Ամենամոտ շարքը մուգ և տաք է, ավելացրու մանրամասներ՝ ժայռեր, ծառեր, տուն։
5. Համեմատիր․ նկարը խոր է թվում։

~~~art
mixer paints=blue,white,black
Խառնի՛ր լեռների շերտերը․ մուգ կապույտ առջևում, ավելի ու ավելի գունատ դեպի երկինք։
~~~

~~~art
tasks
1. Ինչու են հեռավոր լեռները մոտիկներից տարբեր երևում։
2. Անվանիր օդային հեռանկարի հինգ նշան։
3. Որ գույներն են բնորոշ հեռուին։ Իսկ առաջին պլանին։
4. Ինչպես են փոխվում եզրագծերը հեռավորության հետ։
5. Որոնք են բնանկարի երեք պլանները։
6. Ինչ տեսք ունի Արարատն Երևանից մշուշոտ օրը։
7. Նկարիր բնանկար երեք հստակ պլանով։
~~~

~~~art
hints
1. Մեր և նրանց միջև փոշով և ջրային գոլորշով օդի շերտի պատճառով։ 2. Հեռավորն ավելի բաց է, ավելի սառը, պակաս հակադիր, ավելի փափուկ եզրագծով և պակաս մանրամասն։ 3. Սառը կապույտ և մանուշակագույն, տաք կարմիր, նարնջագույն, դարչնագույն և դեղնականաչ։ 4. Դառնում են ավելի փափուկ և աղոտ։ 5. Առաջին, միջին և հետին պլան։ 6. Բաց կապույտ, մանրամասները կորած մշուշում։ 7. Քո նկարը։
~~~`,
        ru: `## Воздух между нами и горами

Между глазом и далёкой горой лежит толстый слой **воздуха** с пылью и водяным паром. Он меняет то, что мы видим. Об этом писал Леонардо да Винчи, и он писал мягкие, затуманенные дали. Это явление называется **воздушной перспективой**.

~~~art
aerial
~~~

## Признаки воздушной перспективы

| Вблизи | Вдали |
|---|---|
| темнее и сильнее | светлее, бледнее |
| тёплые цвета (красный, оранжевый, коричневый, жёлто-зелёный) | холодные цвета (синий, фиолетовый, серо-голубой) |
| сильные контрасты света и тени | слабые контрасты |
| чёткие контуры | мягкие, размытые контуры |
| много деталей (листья, камни, трава) | мало деталей, только крупные формы |
| насыщенные цвета | сероватые, менее насыщенные цвета |

Посмотри на Арарат из Еревана: летним днём он бледно-голубой и его детали тонут в дымке, а ближние деревья и дома яркие и подробные.

## Три плана

Пейзажисты часто строят пространство **планами**:

* **передний план:** крупно, подробно, тепло и контрастно; трава, камни, дерево;
* **средний план:** поля, сёла, холмы; мельче и спокойнее;
* **дальний план:** далёкие горы и небо; бледно, холодно, просто.

~~~art
steps landscape-planes
~~~

## Попробуй: горы слоями

1. Нарисуй четыре-пять гряд гор одну за другой.
2. Сначала напиши **самую дальнюю** гряду, очень бледным сине-фиолетовым.
3. Каждая следующая, более близкая гряда чуть темнее и теплее.
4. Ближняя гряда тёмная и тёплая; добавь детали: скалы, деревья, дом.
5. Сравни: кажется ли картина глубокой?

~~~art
mixer paints=blue,white,black
Смешай слои гор: тёмно-синий впереди, всё бледнее к небу.
~~~

~~~art
tasks
1. Почему далёкие горы выглядят иначе, чем близкие?
2. Назови пять признаков воздушной перспективы.
3. Какие цвета характерны для дали? Для переднего плана?
4. Как меняются контуры с удалением?
5. Какие три плана есть в пейзаже?
6. Как выглядит Арарат из Еревана в дымке?
7. Напиши пейзаж с тремя ясными планами.
~~~

~~~art
hints
1. Из-за слоя воздуха с пылью и водяным паром между нами и ними. 2. Дальнее светлее, холоднее, менее контрастно, мягче по контуру и беднее деталями. 3. Холодные синие и фиолетовые; тёплые красные, оранжевые, коричневые и жёлто-зелёные. 4. Становятся мягче и размытее. 5. Передний, средний и дальний. 6. Бледно-голубым, детали теряются в дымке. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Far mountains look…", "Հեռավոր լեռներն երևում են…", "Далёкие горы выглядят…"), [t("paler and cooler", "ավելի գունատ և սառը", "бледнее и холоднее"), t("darker and warmer", "ավելի մուգ և տաք", "темнее и теплее"), t("more detailed", "ավելի մանրամասն", "подробнее")], 0),
        q(t("Who wrote about aerial perspective and painted hazy distances?", "Ով է գրել օդային հեռանկարի մասին և նկարել մշուշոտ հեռուներ։", "Кто писал о воздушной перспективе и изображал туманные дали?"), [t("Repin", "Ռեպինը", "Репин"), t("Leonardo da Vinci", "Լեոնարդո դա Վինչին", "Леонардо да Винчи"), t("Hokusai", "Հոկուսայը", "Хокусай")], 1),
        q(t("The foreground of a landscape is usually…", "Բնանկարի առաջին պլանը սովորաբար…", "Передний план пейзажа обычно…"), [t("pale and blurred", "գունատ է և աղոտ", "бледный и размытый"), t("empty", "դատարկ է", "пустой"), t("detailed and contrasting", "մանրամասն է և հակադիր", "подробный и контрастный")], 2),
        q(t("With distance, outlines become…", "Հեռավորության հետ եզրագծերը դառնում են…", "С удалением контуры становятся…"), [t("softer", "ավելի փափուկ", "мягче"), t("sharper", "ավելի սուր", "резче"), t("thicker", "ավելի հաստ", "толще")], 0),
        q(t("When painting mountains in layers, start with…", "Լեռները շերտերով նկարելիս սկսիր…", "Рисуя горы слоями, начинают с…"), [t("the nearest row", "ամենամոտ շարքից", "ближней гряды"), t("the farthest row", "ամենահեռավոր շարքից", "самой дальней гряды"), t("the details", "մանրամասներից", "деталей")], 1),
        q(t("Aerial perspective is caused by…", "Օդային հեռանկարի պատճառն է…", "Воздушная перспектива возникает из-за…"), [t("the frame", "շրջանակը", "рамы"), t("the paint", "ներկը", "краски"), t("the layer of air", "օդի շերտը", "слоя воздуха")], 2),
      ],
    ),
    lesson(
      "landscape-history",
      ["The landscape in the history of art", "Բնանկարն արվեստի պատմության մեջ", "Пейзаж в истории искусства"],
      {
        en: ["Follow how landscape became an independent genre", "Recognize famous landscapes of Russian and Armenian painters", "Describe a landscape: plan, horizon, colour, mood"],
        hy: ["Հետևել, թե ինչպես բնանկարը դարձավ ինքնուրույն ժանր", "Ճանաչել ռուս և հայ նկարիչների հայտնի բնանկարները", "Նկարագրել բնանկար՝ պլան, հորիզոն, գույն, տրամադրություն"],
        ru: ["Проследить, как пейзаж стал самостоятельным жанром", "Узнавать знаменитые пейзажи русских и армянских художников", "Описывать пейзаж: планы, горизонт, цвет, настроение"],
      },
      {
        en: `## From background to main subject

For a long time nature was only a **background** for people and events. Gradually artists began to paint nature for its own sake.

| Time and place | What happened |
|---|---|
| **China, from about the 10th century** | great landscape painting in ink: mountains, water, mist |
| **Holland, 17th century** | flat land, wide skies, windmills, clouds |
| **France, 19th century** | painters went outdoors to paint from life (**plein air**); the Impressionists caught light and moments; Monet's «Impression, Sunrise» (1872) gave its name to the movement |
| **Russia, 19th century** | the landscape of the native land became a voice of feeling |
| **Armenia, late 19th–20th centuries** | painters discovered the light and mountains of Armenia |

## Russian landscape

* **Alexei Savrasov**, «The Rooks Have Returned» (1871): early spring, melting snow, a village church; a modest, touching scene.
* **Ivan Shishkin**, «Morning in a Pine Forest» (1889): a mighty forest and bear cubs in morning light.
* **Arkhip Kuindzhi**, «Moonlit Night on the Dnieper» (1880): moonlight so bright that people looked for a lamp behind the canvas.
* **Isaac Levitan**, «Above Eternal Peace» (1894): a little church, a vast lake and sky; thoughts about life and eternity.

~~~art
palette shishkin
~~~

## Armenian landscape

* **Gevorg Bashinjaghian** painted Ararat, Lake Sevan and the gorges of Lori in calm, true light.
* **Panos Terlemezian** painted the land around Van and later the landscapes of Armenia with warm, sincere feeling.
* **Martiros Saryan** found a new language: bright pure colour, simple big shapes, the hot sun of Armenia.

~~~art
palette saryan tuff
~~~

## How to describe a landscape

1. **What** is shown: mountains, a forest, a river, a city?
2. **Season and time of day.**
3. **Horizon:** high or low? What does it give?
4. **Planes:** foreground, middle ground, background.
5. **Colour:** warm or cool, bright or quiet.
6. **Mood:** joyful, calm, sad, solemn, mysterious.

~~~art
mood scene=landscape moods=spring,summer,autumn,winter
~~~

~~~art
tasks
1. What was nature in paintings before landscape became a genre?
2. What is plein air?
3. Which painting gave its name to Impressionism?
4. Describe Savrasov's «The Rooks Have Returned».
5. Why did viewers look for a lamp behind Kuindzhi's painting?
6. Name two Armenian landscape painters and what they painted.
7. Describe one landscape using the six questions.
~~~

~~~art
hints
1. A background for people and events. 2. Painting outdoors, from life. 3. Monet's «Impression, Sunrise» (1872). 4. Early spring, melting snow, rooks, a village church; modest and touching. 5. The moonlight in it looked so bright. 6. For example: Bashinjaghian (Ararat, Sevan, Lori), Terlemezian (Van and Armenia), Saryan (bright Armenian landscapes). 7. Your description.
~~~`,
        hy: `## Ֆոնից՝ գլխավոր թեմա

Երկար ժամանակ բնությունը միայն **ֆոն** էր մարդկանց և իրադարձությունների համար։ Աստիճանաբար նկարիչները սկսեցին նկարել բնությունը հանուն իրեն։

| Ժամանակ և վայր | Ինչ տեղի ունեցավ |
|---|---|
| **Չինաստան, մոտ 10-րդ դարից** | տուշով մեծ բնանկարչություն՝ լեռներ, ջուր, մշուշ |
| **Հոլանդիա, 17-րդ դար** | հարթ երկիր, լայն երկինք, հողմաղացներ, ամպեր |
| **Ֆրանսիա, 19-րդ դար** | նկարիչները դուրս եկան բաց երկնքի տակ՝ բնությունից նկարելու (**պլեներ**), իմպրեսիոնիստներն որսում էին լույսն ու ակնթարթը, Մոնեի «Տպավորություն․ ծագող արև» (1872) կտավն իր անունը տվեց ուղղությանը |
| **Ռուսաստան, 19-րդ դար** | հայրենի բնության բնանկարը դարձավ զգացմունքի ձայն |
| **Հայաստան, 19-րդ դարի վերջ – 20-րդ դար** | նկարիչները բացահայտեցին Հայաստանի լույսն ու լեռները |

## Ռուսական բնանկար

* **Ալեքսեյ Սավրասով**, «Սերմնագռավներն եկել են» (1871)՝ վաղ գարուն, հալվող ձյուն, գյուղական եկեղեցի, համեստ և հուզիչ տեսարան։
* **Իվան Շիշկին**, «Առավոտը սոճու անտառում» (1889)՝ հզոր անտառ և արջի ձագեր առավոտյան լույսում։
* **Արխիպ Կուինջի**, «Լուսնյակ գիշեր Դնեպրի վրա» (1880)՝ լուսնի լույսն այնքան վառ է, որ մարդիկ կտավի ետևում լամպ էին փնտրում։
* **Իսահակ Լևիտան**, «Հավերժական խաղաղության վերևում» (1894)՝ փոքրիկ եկեղեցի, ընդարձակ լիճ և երկինք, մտորումներ կյանքի և հավերժության մասին։

~~~art
palette shishkin
~~~

## Հայկական բնանկար

* **Գևորգ Բաշինջաղյանը** նկարել է Արարատը, Սևանա լիճը և Լոռու կիրճերը հանդարտ, ճշմարիտ լույսով։
* **Փանոս Թերլեմեզյանը** նկարել է Վանի շրջակայքը, իսկ հետո Հայաստանի բնանկարները՝ ջերմ, անկեղծ զգացմունքով։
* **Մարտիրոս Սարյանը** գտավ նոր լեզու՝ վառ մաքուր գույն, պարզ մեծ ձևեր, Հայաստանի տաք արև։

~~~art
palette saryan tuff
~~~

## Ինչպես նկարագրել բնանկարը

1. **Ինչ** է պատկերված՝ լեռներ, անտառ, գետ, քաղաք։
2. **Տարվա եղանակը և օրվա ժամը**։
3. **Հորիզոնը**՝ բարձր, թե ցածր։ Ինչ է այն տալիս։
4. **Պլանները**՝ առաջին, միջին, հետին։
5. **Գույնը**՝ տաք, թե սառը, վառ, թե հանդարտ։
6. **Տրամադրությունը**՝ ուրախ, հանդարտ, տխուր, հանդիսավոր, խորհրդավոր։

~~~art
mood scene=landscape moods=spring,summer,autumn,winter
~~~

~~~art
tasks
1. Ինչ էր բնությունը նկարներում, նախքան բնանկարի ժանր դառնալը։
2. Ինչ է պլեները։
3. Որ կտավն իր անունը տվեց իմպրեսիոնիզմին։
4. Նկարագրիր Սավրասովի «Սերմնագռավներն եկել են» կտավը։
5. Ինչու էին դիտողները Կուինջու կտավի ետևում լամպ փնտրում։
6. Անվանիր երկու հայ բնանկարիչ և թե ինչ են նրանք նկարել։
7. Նկարագրիր մեկ բնանկար՝ օգտագործելով վեց հարցը։
~~~

~~~art
hints
1. Ֆոն մարդկանց և իրադարձությունների համար։ 2. Բաց երկնքի տակ, բնությունից նկարելը։ 3. Մոնեի «Տպավորություն․ ծագող արև» (1872)։ 4. Վաղ գարուն, հալվող ձյուն, սերմնագռավներ, գյուղական եկեղեցի, համեստ և հուզիչ։ 5. Դրանում լուսնի լույսն այնքան վառ էր թվում։ 6. Օրինակ՝ Բաշինջաղյան (Արարատ, Սևան, Լոռի), Թերլեմեզյան (Վան և Հայաստան), Սարյան (Հայաստանի վառ բնանկարներ)։ 7. Քո նկարագրությունը։
~~~`,
        ru: `## От фона к главной теме

Долгое время природа была лишь **фоном** для людей и событий. Постепенно художники начали писать природу ради неё самой.

| Время и место | Что произошло |
|---|---|
| **Китай, примерно с X века** | великая пейзажная живопись тушью: горы, вода, туман |
| **Голландия, XVII век** | плоская земля, широкое небо, мельницы, облака |
| **Франция, XIX век** | художники вышли писать с натуры на открытом воздухе (**пленэр**); импрессионисты ловили свет и мгновение; картина Моне «Впечатление. Восходящее солнце» (1872) дала имя направлению |
| **Россия, XIX век** | пейзаж родной земли стал голосом чувства |
| **Армения, конец XIX–XX век** | художники открыли свет и горы Армении |

## Русский пейзаж

* **Алексей Саврасов**, «Грачи прилетели» (1871): ранняя весна, тающий снег, сельская церковь; скромная, трогательная сцена.
* **Иван Шишкин**, «Утро в сосновом лесу» (1889): могучий лес и медвежата в утреннем свете.
* **Архип Куинджи**, «Лунная ночь на Днепре» (1880): лунный свет так ярок, что зрители искали лампу за холстом.
* **Исаак Левитан**, «Над вечным покоем» (1894): маленькая церковь, огромное озеро и небо; мысли о жизни и вечности.

~~~art
palette shishkin
~~~

## Армянский пейзаж

* **Геворг Башинджагян** писал Арарат, озеро Севан и ущелья Лори в спокойном, правдивом свете.
* **Панос Терлемезян** писал окрестности Вана, а потом пейзажи Армении с тёплым, искренним чувством.
* **Мартирос Сарьян** нашёл новый язык: яркий чистый цвет, простые крупные формы, жаркое солнце Армении.

~~~art
palette saryan tuff
~~~

## Как описать пейзаж

1. **Что** изображено: горы, лес, река, город?
2. **Время года и суток.**
3. **Горизонт:** высокий или низкий? Что это даёт?
4. **Планы:** передний, средний, дальний.
5. **Цвет:** тёплый или холодный, яркий или тихий.
6. **Настроение:** радостное, спокойное, грустное, торжественное, таинственное.

~~~art
mood scene=landscape moods=spring,summer,autumn,winter
~~~

~~~art
tasks
1. Чем была природа в картинах до того, как пейзаж стал жанром?
2. Что такое пленэр?
3. Какая картина дала имя импрессионизму?
4. Опиши картину Саврасова «Грачи прилетели».
5. Почему зрители искали лампу за картиной Куинджи?
6. Назови двух армянских пейзажистов и то, что они писали.
7. Опиши один пейзаж по шести вопросам.
~~~

~~~art
hints
1. Фоном для людей и событий. 2. Работа на открытом воздухе, с натуры. 3. «Впечатление. Восходящее солнце» Моне (1872). 4. Ранняя весна, тающий снег, грачи, сельская церковь; скромная и трогательная. 5. Лунный свет на ней казался таким ярким. 6. Например: Башинджагян (Арарат, Севан, Лори), Терлемезян (Ван и Армения), Сарьян (яркие армянские пейзажи). 7. Твоё описание.
~~~`,
      },
      [
        q(t("Painting outdoors from life is called…", "Բաց երկնքի տակ բնությունից նկարելը կոչվում է…", "Работа с натуры на открытом воздухе называется…"), [t("plein air", "պլեներ", "пленэр"), t("fresco", "որմնանկար", "фреска"), t("collage", "կոլաժ", "коллаж")], 0),
        q(t("«The Rooks Have Returned» was painted by…", "«Սերմնագռավներն եկել են» կտավը նկարել է…", "«Грачи прилетели» написал…"), [t("Shishkin", "Շիշկինը", "Шишкин"), t("Savrasov", "Սավրասովը", "Саврасов"), t("Levitan", "Լևիտանը", "Левитан")], 1),
        q(t("Bright moonlight is the subject of…", "Լուսնի վառ լույսը թեման է…", "Яркий лунный свет — тема картины…"), [t("«Morning in a Pine Forest»", "«Առավոտը սոճու անտառում» կտավի", "«Утро в сосновом лесу»"), t("«Above Eternal Peace»", "«Հավերժական խաղաղության վերևում» կտավի", "«Над вечным покоем»"), t("«Moonlit Night on the Dnieper»", "«Լուսնյակ գիշեր Դնեպրի վրա» կտավի", "«Лунная ночь на Днепре»")], 2),
        q(t("Who painted Ararat, Sevan and the gorges of Lori in calm, true light?", "Ով է նկարել Արարատը, Սևանը և Լոռու կիրճերը հանդարտ, ճշմարիտ լույսով։", "Кто писал Арарат, Севан и ущелья Лори в спокойном правдивом свете?"), [t("Bashinjaghian", "Բաշինջաղյանը", "Башинджагян"), t("Kuindzhi", "Կուինջին", "Куинджи"), t("Monet", "Մոնեն", "Моне")], 0),
        q(t("Before becoming a genre, nature in paintings was…", "Ժանր դառնալուց առաջ բնությունը նկարներում…", "До того как стать жанром, природа в картинах была…"), [t("forbidden", "արգելված էր", "запрещена"), t("a background", "ֆոն էր", "фоном"), t("always the main subject", "միշտ գլխավոր թեման էր", "всегда главной темой")], 1),
        q(t("Levitan's «Above Eternal Peace» makes us think about…", "Լևիտանի «Հավերժական խաղաղության վերևում» կտավը մտածել է տալիս…", "Картина Левитана «Над вечным покоем» заставляет думать о…"), [t("shopping", "գնումների մասին", "покупках"), t("sport", "սպորտի մասին", "спорте"), t("life and eternity", "կյանքի և հավերժության մասին", "жизни и вечности")], 2),
      ],
    ),
    lesson(
      "landscape-mood",
      ["Landscape and mood: Saryan's Armenia", "Բնանկար և տրամադրություն․ Սարյանի Հայաստանը", "Пейзаж-настроение: Армения Сарьяна"],
      {
        en: ["Understand the idea of a 'mood landscape'", "Analyse how Saryan expresses the character of Armenia with colour and shape", "Paint a landscape that expresses one clear mood"],
        hy: ["Հասկանալ «տրամադրության բնանկար» գաղափարը", "Վերլուծել, թե ինչպես է Սարյանը գույնով և ձևով արտահայտում Հայաստանի բնավորությունը", "Նկարել բնանկար, որն արտահայտում է մեկ հստակ տրամադրություն"],
        ru: ["Понимать идею «пейзажа настроения»", "Разобрать, как Сарьян выражает характер Армении цветом и формой", "Написать пейзаж, выражающий одно ясное настроение"],
      },
      {
        en: `## A landscape can feel

A landscape is not just a view. The same place can look joyful in the morning sun and sad in autumn rain. When an artist chooses the season, the time of day, the weather and the colours to express a **feeling**, we call it a **mood landscape**. Levitan was a great master of such landscapes in Russia.

~~~art
mood scene=landscape moods=joy,sad,calm,storm
~~~

## Means of mood

| Means | Joyful, energetic | Calm, quiet | Sad, anxious |
|---|---|---|---|
| **colour** | warm, bright, contrasting | soft, close, light | cool, grey, dark |
| **light** | strong sun, clear shadows | even, soft light | dull light, dusk |
| **lines** | dynamic diagonals | long horizontals | broken or drooping lines |
| **sky** | clear blue | wide, calm | heavy clouds |

~~~art
lines
~~~

## Saryan's Armenia

**Martiros Saryan** (1880–1972) is the most famous Armenian painter. He painted his country many times: Mount Ararat, Aragats, the Ararat valley, villages, gardens and fruit.

How he shows the **character** of Armenia:

* **Hot sun:** orange and yellow earth, deep **blue** and violet shadows. The complementary contrast makes the light blaze.
* **Simple big shapes:** mountains as flat triangles, fields as colour stripes, trees as round spots. Details disappear; the image becomes strong and clear.
* **Pure, saturated colour**, often laid in flat areas with dark outlines.
* **Solemn calm:** the mountains stand like eternal guardians over the people and gardens.

His paintings are not a copy of nature; they are a **song** about the land. You can see many of them in the **Saryan House-Museum** in Yerevan and in the National Gallery of Armenia.

~~~art
mood scene=landscape moods=saryan,noon
~~~

## Paint a mood landscape

1. Choose a place: your street, a mountain, a garden, the sea.
2. Choose one mood: joy, calm, sadness, mystery.
3. Choose the season, time of day and weather that fit it.
4. Choose a colour scheme (warm, cool, bright, soft).
5. Simplify the shapes like Saryan, or keep soft transitions like Levitan.
6. Give your landscape a title that names the mood.

~~~art
sketch guide=horizon
~~~

~~~art
tasks
1. What is a mood landscape?
2. Which colours and lines express calm? Anxiety?
3. What places of Armenia did Saryan often paint?
4. How does Saryan make the sunlight "blaze"?
5. Why does Saryan simplify shapes?
6. Where can you see many of Saryan's works?
7. Paint the same place twice, in two opposite moods.
~~~

~~~art
hints
1. A landscape in which the season, light, weather and colour express a feeling. 2. Calm: soft close colours and long horizontals; anxiety: cool grey or dark colours, broken lines, heavy clouds. 3. For example: Ararat, Aragats, the Ararat valley, villages, gardens. 4. With the contrast of orange and yellow light and blue and violet shadows. 5. To make the image strong, clear and expressive. 6. In the Saryan House-Museum and the National Gallery of Armenia in Yerevan. 7. Your paintings.
~~~`,
        hy: `## Բնանկարը կարող է զգալ

Բնանկարը պարզապես տեսարան չէ։ Նույն վայրը կարող է ուրախ լինել առավոտյան արևի տակ և տխուր՝ աշնանային անձրևի ժամանակ։ Երբ նկարիչն ընտրում է տարվա եղանակը, օրվա ժամը, եղանակը և գույները՝ **զգացմունք** արտահայտելու համար, մենք դա անվանում ենք **տրամադրության բնանկար**։ Ռուսաստանում այդպիսի բնանկարների մեծ վարպետ էր Լևիտանը։

~~~art
mood scene=landscape moods=joy,sad,calm,storm
~~~

## Տրամադրության միջոցներ

| Միջոց | Ուրախ, եռանդուն | Հանդարտ, լուռ | Տխուր, անհանգիստ |
|---|---|---|---|
| **գույն** | տաք, վառ, հակադիր | փափուկ, մոտ, բաց | սառը, մոխրագույն, մուգ |
| **լույս** | ուժեղ արև, հստակ ստվերներ | հավասար, փափուկ լույս | աղոտ լույս, մթնշաղ |
| **գծեր** | դինամիկ անկյունագծեր | երկար հորիզոնականներ | կոտրված կամ կախ ընկած գծեր |
| **երկինք** | պարզ կապույտ | լայն, հանդարտ | ծանր ամպեր |

~~~art
lines
~~~

## Սարյանի Հայաստանը

**Մարտիրոս Սարյանը** (1880–1972) ամենահայտնի հայ նկարիչն է։ Նա բազմաթիվ անգամներ նկարել է իր երկիրը՝ Արարատ լեռը, Արագածը, Արարատյան դաշտը, գյուղերը, այգիներն ու մրգերը։

Ինչպես է նա ցույց տալիս Հայաստանի **բնավորությունը**․

* **Տաք արև**՝ նարնջագույն և դեղին հող, խոր **կապույտ** և մանուշակագույն ստվերներ։ Փոխլրացնող հակադրությունը լույսը բոցավառ է դարձնում։
* **Պարզ մեծ ձևեր**՝ լեռներն որպես հարթ եռանկյուններ, դաշտերն որպես գունավոր շերտեր, ծառերն որպես կլոր բծեր։ Մանրամասներն անհետանում են, կերպարը դառնում է ուժեղ և հստակ։
* **Մաքուր, հագեցված գույն**, հաճախ դրված հարթ մակերեսներով՝ մուգ եզրագծերով։
* **Հանդիսավոր հանդարտություն**՝ լեռները կանգնած են մարդկանց և այգիների վրա հավերժական պահապանների պես։

Նրա կտավները բնության պատճենը չեն, դրանք **երգ** են երկրի մասին։ Նրանցից շատերը կարող ես տեսնել Երևանում՝ **Սարյանի տուն-թանգարանում** և Հայաստանի ազգային պատկերասրահում։

~~~art
mood scene=landscape moods=saryan,noon
~~~

## Նկարիր տրամադրության բնանկար

1. Ընտրիր վայր՝ քո փողոցը, լեռ, այգի, ծով։
2. Ընտրիր մեկ տրամադրություն՝ ուրախություն, հանդարտություն, տխրություն, խորհրդավորություն։
3. Ընտրիր տարվա եղանակը, օրվա ժամը և եղանակը, որոնք համապատասխանում են դրան։
4. Ընտրիր գունային գամա (տաք, սառը, վառ, փափուկ)։
5. Պարզեցրու ձևերը Սարյանի պես կամ պահիր փափուկ անցումները Լևիտանի պես։
6. Բնանկարիդ տուր վերնագիր, որն անվանում է տրամադրությունը։

~~~art
sketch guide=horizon
~~~

~~~art
tasks
1. Ինչ է տրամադրության բնանկարը։
2. Որ գույներն ու գծերն են արտահայտում հանդարտություն։ Իսկ անհանգստություն։
3. Հայաստանի որ վայրերն էր Սարյանը հաճախ նկարում։
4. Ինչպես է Սարյանն արևի լույսը «բոցավառ» դարձնում։
5. Ինչու է Սարյանը պարզեցնում ձևերը։
6. Որտեղ կարելի է տեսնել Սարյանի շատ գործեր։
7. Նույն վայրը նկարիր երկու անգամ՝ երկու հակադիր տրամադրությամբ։
~~~

~~~art
hints
1. Բնանկար, որում տարվա եղանակը, լույսը, եղանակը և գույնը զգացմունք են արտահայտում։ 2. Հանդարտություն՝ փափուկ մոտ գույներ և երկար հորիզոնականներ, անհանգստություն՝ սառը մոխրագույն կամ մուգ գույներ, կոտրված գծեր, ծանր ամպեր։ 3. Օրինակ՝ Արարատ, Արագած, Արարատյան դաշտ, գյուղեր, այգիներ։ 4. Նարնջագույն ու դեղին լույսի և կապույտ ու մանուշակագույն ստվերների հակադրությամբ։ 5. Որ կերպարը դառնա ուժեղ, հստակ և արտահայտիչ։ 6. Երևանում՝ Սարյանի տուն-թանգարանում և Հայաստանի ազգային պատկերասրահում։ 7. Քո նկարները։
~~~`,
        ru: `## Пейзаж умеет чувствовать

Пейзаж — не просто вид. Одно и то же место может казаться радостным в утреннем солнце и грустным под осенним дождём. Когда художник выбирает время года, время суток, погоду и цвета, чтобы выразить **чувство**, это называют **пейзажем настроения**. Великим мастером таких пейзажей в России был Левитан.

~~~art
mood scene=landscape moods=joy,sad,calm,storm
~~~

## Средства настроения

| Средство | Радостное, энергичное | Спокойное, тихое | Грустное, тревожное |
|---|---|---|---|
| **цвет** | тёплый, яркий, контрастный | мягкий, близкий, светлый | холодный, серый, тёмный |
| **свет** | сильное солнце, чёткие тени | ровный, мягкий свет | тусклый свет, сумерки |
| **линии** | динамичные диагонали | длинные горизонтали | ломаные или поникшие линии |
| **небо** | ясное голубое | широкое, спокойное | тяжёлые тучи |

~~~art
lines
~~~

## Армения Сарьяна

**Мартирос Сарьян** (1880–1972) — самый известный армянский художник. Он много раз писал свою страну: гору Арарат, Арагац, Араратскую долину, сёла, сады и плоды.

Как он передаёт **характер** Армении:

* **Жаркое солнце:** оранжевая и жёлтая земля, глубокие **синие** и фиолетовые тени. Контраст дополнительных цветов заставляет свет пылать.
* **Простые крупные формы:** горы — плоские треугольники, поля — цветные полосы, деревья — круглые пятна. Детали исчезают, образ становится сильным и ясным.
* **Чистый насыщенный цвет**, часто положенный плоскостями с тёмным контуром.
* **Торжественный покой:** горы стоят, как вечные стражи, над людьми и садами.

Его картины — не копия природы, а **песня** о земле. Многие из них можно увидеть в **Доме-музее Сарьяна** в Ереване и в Национальной галерее Армении.

~~~art
mood scene=landscape moods=saryan,noon
~~~

## Напиши пейзаж настроения

1. Выбери место: свою улицу, гору, сад, море.
2. Выбери одно настроение: радость, покой, грусть, тайну.
3. Подбери время года, суток и погоду, которые ему подходят.
4. Выбери колорит (тёплый, холодный, яркий, мягкий).
5. Упрости формы, как Сарьян, или сохрани мягкие переходы, как Левитан.
6. Дай пейзажу название, называющее настроение.

~~~art
sketch guide=horizon
~~~

~~~art
tasks
1. Что такое пейзаж настроения?
2. Какие цвета и линии выражают покой? Тревогу?
3. Какие места Армении часто писал Сарьян?
4. Как Сарьян заставляет солнечный свет «пылать»?
5. Зачем Сарьян упрощает формы?
6. Где можно увидеть много работ Сарьяна?
7. Напиши одно место дважды, в двух противоположных настроениях.
~~~

~~~art
hints
1. Пейзаж, в котором время года, свет, погода и цвет выражают чувство. 2. Покой — мягкие близкие цвета и длинные горизонтали; тревогу — холодные серые или тёмные цвета, ломаные линии, тяжёлые тучи. 3. Например: Арарат, Арагац, Араратскую долину, сёла, сады. 4. Контрастом оранжевого и жёлтого света и синих и фиолетовых теней. 5. Чтобы образ был сильным, ясным и выразительным. 6. В Доме-музее Сарьяна и Национальной галерее Армении в Ереване. 7. Твои работы.
~~~`,
      },
      [
        q(t("A landscape that expresses a feeling is a … landscape.", "Զգացմունք արտահայտող բնանկարը … բնանկար է։", "Пейзаж, выражающий чувство, — это пейзаж…"), [t("mood", "տրամադրության", "настроения"), t("city", "քաղաքային", "городской"), t("marine", "ծովային", "морской")], 0),
        q(t("Long horizontal lines usually express…", "Երկար հորիզոնական գծերը սովորաբար արտահայտում են…", "Длинные горизонтали обычно выражают…"), [t("anxiety", "անհանգստություն", "тревогу"), t("calm", "հանդարտություն", "покой"), t("anger", "զայրույթ", "гнев")], 1),
        q(t("Saryan's shadows are often…", "Սարյանի ստվերները հաճախ…", "Тени у Сарьяна часто…"), [t("black", "սև են", "чёрные"), t("grey", "մոխրագույն են", "серые"), t("deep blue and violet", "խոր կապույտ և մանուշակագույն են", "глубокие синие и фиолетовые")], 2),
        q(t("Saryan turned mountains into…", "Սարյանը լեռները դարձնում էր…", "Горы у Сарьяна превращаются в…"), [t("simple flat shapes", "պարզ հարթ ձևեր", "простые плоские формы"), t("tiny details", "մանր մանրամասներ", "мелкие детали"), t("grey spots", "մոխրագույն բծեր", "серые пятна")], 0),
        q(t("The Saryan House-Museum is in…", "Սարյանի տուն-թանգարանը գտնվում է…", "Дом-музей Сарьяна находится в…"), [t("Gyumri", "Գյումրիում", "Гюмри"), t("Yerevan", "Երևանում", "Ереване"), t("Moscow", "Մոսկվայում", "Москве")], 1),
        q(t("A great Russian master of the mood landscape was…", "Տրամադրության բնանկարի մեծ ռուս վարպետն էր…", "Великим русским мастером пейзажа настроения был…"), [t("Serov", "Սերովը", "Серов"), t("Repin", "Ռեպինը", "Репин"), t("Levitan", "Լևիտանը", "Левитан")], 2),
      ],
    ),
    lesson(
      "city-landscape",
      ["The city landscape", "Քաղաքային բնանկար", "Городской пейзаж"],
      {
        en: ["Know the city landscape as a kind of landscape", "Use perspective, rhythm and light to show a city's character", "Draw or paint a street of your town"],
        hy: ["Իմանալ քաղաքային բնանկարն որպես բնանկարի տեսակ", "Հեռանկարով, ռիթմով և լույսով ցույց տալ քաղաքի բնավորությունը", "Նկարել քո քաղաքի փողոցը"],
        ru: ["Знать городской пейзаж как разновидность пейзажа", "Передавать характер города перспективой, ритмом и светом", "Нарисовать или написать улицу своего города"],
      },
      {
        en: `## The city as a subject

A city landscape shows streets, squares, bridges, roofs and courtyards. The Impressionists loved the busy boulevards of Paris, painted from high windows in different weather. Russian painters such as **Konstantin Yuon** painted the colourful life of Moscow streets and old towns. Armenian artists have painted the courtyards of old Yerevan, the pink tuff buildings of Tamanyan, and the cascade of streets climbing the hills.

~~~art
pic genre-city
~~~

## Every city has a character

* **Old town:** narrow crooked streets, small houses, balconies, courtyards.
* **Modern city:** wide avenues, tall glass buildings, cars, lights.
* **Yerevan:** pink and orange tuff, arcades, Republic Square, the Cascade, Mount Ararat above the roofs.
* **Moscow:** the Kremlin towers, onion domes, wide boulevards.

~~~art
pic tamanyan kremlin skyscraper
~~~

## Means of the city landscape

| Means | What it does |
|---|---|
| **perspective** | one-point for a straight street, two-point for a corner building |
| **rhythm** | rows of windows, columns, trees, lamps |
| **viewpoint** | from a window above, from the ground, from a bridge |
| **light and weather** | sunny morning, rain with reflections, evening lights, snow |
| **people and transport** | small figures, cars and buses bring life and scale |

## A night city

At night the sky is dark blue, the windows are warm yellow, and the lamps make round spots of light. Wet streets reflect them. Use the contrast of **warm light** and **cool darkness**.

~~~art
mood scene=city moods=evening,night
~~~

## Draw your street

1. Choose a viewpoint and a horizon line.
2. Build the street in perspective: the vanishing point, the lines of roofs and pavements.
3. Add the rhythm of windows, doors, trees and lamps, smaller in the distance.
4. Add people and transport for scale.
5. Choose a time and weather, and paint the mood.

~~~art
perspective modes=two
~~~

~~~art
tasks
1. What can a city landscape show?
2. Which painters loved the boulevards of Paris?
3. Describe the character of Yerevan in three features.
4. How can rhythm be shown in a city landscape?
5. Why are small figures of people useful in a city landscape?
6. Which colours make a night city expressive?
7. Draw your street in one-point perspective at a time of day you choose.
~~~

~~~art
hints
1. Streets, squares, bridges, roofs, courtyards. 2. The Impressionists. 3. For example: pink and orange tuff, arcades, the Cascade, Mount Ararat above the roofs. 4. With rows of windows, columns, trees and lamps. 5. They bring life and show the scale of the buildings. 6. Warm yellow lights against cool dark blue. 7. Your drawing.
~~~`,
        hy: `## Քաղաքն որպես թեմա

Քաղաքային բնանկարը ցույց է տալիս փողոցներ, հրապարակներ, կամուրջներ, տանիքներ և բակեր։ Իմպրեսիոնիստները սիրում էին Փարիզի աշխույժ բուլվարները, որոնք նկարում էին բարձր պատուհաններից՝ տարբեր եղանակներին։ Ռուս նկարիչները, օրինակ՝ **Կոնստանտին Յուոնը**, նկարել են մոսկովյան փողոցների և հին քաղաքների գունեղ կյանքը։ Հայ նկարիչները նկարել են հին Երևանի բակերը, Թամանյանի վարդագույն տուֆե շենքերը և բլուրներն ի վեր բարձրացող փողոցները։

~~~art
pic genre-city
~~~

## Յուրաքանչյուր քաղաք ունի բնավորություն

* **Հին քաղաք**՝ նեղ ծուռ փողոցներ, փոքր տներ, պատշգամբներ, բակեր։
* **Ժամանակակից քաղաք**՝ լայն պողոտաներ, բարձր ապակե շենքեր, մեքենաներ, լույսեր։
* **Երևան**՝ վարդագույն և նարնջագույն տուֆ, կամարաշարեր, Հանրապետության հրապարակ, Կասկադ, Արարատ լեռը տանիքների վերևում։
* **Մոսկվա**՝ Կրեմլի աշտարակներ, սոխաձև գմբեթներ, լայն բուլվարներ։

~~~art
pic tamanyan kremlin skyscraper
~~~

## Քաղաքային բնանկարի միջոցներ

| Միջոց | Ինչ է անում |
|---|---|
| **հեռանկար** | մեկ կետ՝ ուղիղ փողոցի համար, երկու կետ՝ անկյունային շենքի համար |
| **ռիթմ** | պատուհանների, սյուների, ծառերի, լապտերների շարքեր |
| **տեսակետ** | վերևի պատուհանից, գետնից, կամրջից |
| **լույս և եղանակ** | արևոտ առավոտ, անձրև՝ անդրադարձներով, երեկոյան լույսեր, ձյուն |
| **մարդիկ և տրանսպորտ** | փոքր պատկերները, մեքենաներն ու ավտոբուսները կյանք և մասշտաբ են բերում |

## Գիշերային քաղաք

Գիշերն երկինքը մուգ կապույտ է, պատուհանները՝ տաք դեղին, իսկ լապտերները լույսի կլոր բծեր են ստեղծում։ Թաց փողոցներն անդրադարձնում են դրանք։ Օգտագործիր **տաք լույսի** և **սառը մթության** հակադրությունը։

~~~art
mood scene=city moods=evening,night
~~~

## Նկարիր քո փողոցը

1. Ընտրիր տեսակետ և հորիզոնի գիծ։
2. Կառուցիր փողոցը հեռանկարով՝ անհետացման կետ, տանիքների և մայթերի գծեր։
3. Ավելացրու պատուհանների, դռների, ծառերի և լապտերների ռիթմը՝ հեռվում ավելի փոքր։
4. Մասշտաբի համար ավելացրու մարդիկ և տրանսպորտ։
5. Ընտրիր ժամը և եղանակը և նկարիր տրամադրությունը։

~~~art
perspective modes=two
~~~

~~~art
tasks
1. Ինչ կարող է ցույց տալ քաղաքային բնանկարը։
2. Որ նկարիչներն էին սիրում Փարիզի բուլվարները։
3. Երեք գծով նկարագրիր Երևանի բնավորությունը։
4. Ինչպես կարելի է ռիթմ ցույց տալ քաղաքային բնանկարում։
5. Ինչու են մարդկանց փոքր պատկերներն օգտակար քաղաքային բնանկարում։
6. Որ գույներն են գիշերային քաղաքը դարձնում արտահայտիչ։
7. Նկարիր քո փողոցը մեկ կետով հեռանկարում՝ քո ընտրած ժամին։
~~~

~~~art
hints
1. Փողոցներ, հրապարակներ, կամուրջներ, տանիքներ, բակեր։ 2. Իմպրեսիոնիստները։ 3. Օրինակ՝ վարդագույն և նարնջագույն տուֆ, կամարաշարեր, Կասկադ, Արարատը տանիքների վերևում։ 4. Պատուհանների, սյուների, ծառերի և լապտերների շարքերով։ 5. Կյանք են բերում և ցույց են տալիս շենքերի մասշտաբը։ 6. Տաք դեղին լույսերը սառը մուգ կապույտի դեմ։ 7. Քո նկարը։
~~~`,
        ru: `## Город как тема

Городской пейзаж показывает улицы, площади, мосты, крыши и дворы. Импрессионисты любили оживлённые бульвары Парижа и писали их из высоких окон в разную погоду. Русские художники, например **Константин Юон**, писали яркую жизнь московских улиц и старинных городов. Армянские художники писали дворики старого Еревана, розовые туфовые здания Таманяна и улицы, взбирающиеся на холмы.

~~~art
pic genre-city
~~~

## У каждого города свой характер

* **Старый город:** узкие кривые улочки, маленькие дома, балконы, дворики.
* **Современный город:** широкие проспекты, высокие стеклянные здания, машины, огни.
* **Ереван:** розовый и оранжевый туф, аркады, площадь Республики, Каскад, Арарат над крышами.
* **Москва:** башни Кремля, луковичные купола, широкие бульвары.

~~~art
pic tamanyan kremlin skyscraper
~~~

## Средства городского пейзажа

| Средство | Что оно даёт |
|---|---|
| **перспектива** | одна точка — для прямой улицы, две — для углового здания |
| **ритм** | ряды окон, колонн, деревьев, фонарей |
| **точка зрения** | из окна сверху, с земли, с моста |
| **свет и погода** | солнечное утро, дождь с отражениями, вечерние огни, снег |
| **люди и транспорт** | маленькие фигурки, машины и автобусы приносят жизнь и масштаб |

## Ночной город

Ночью небо тёмно-синее, окна тёплые жёлтые, а фонари дают круглые пятна света. Мокрые улицы отражают их. Используй контраст **тёплого света** и **холодной темноты**.

~~~art
mood scene=city moods=evening,night
~~~

## Нарисуй свою улицу

1. Выбери точку зрения и линию горизонта.
2. Построй улицу в перспективе: точка схода, линии крыш и тротуаров.
3. Добавь ритм окон, дверей, деревьев и фонарей, мельче вдали.
4. Добавь людей и транспорт для масштаба.
5. Выбери время и погоду и передай настроение.

~~~art
perspective modes=two
~~~

~~~art
tasks
1. Что может показывать городской пейзаж?
2. Какие художники любили бульвары Парижа?
3. Опиши характер Еревана тремя чертами.
4. Как передать ритм в городском пейзаже?
5. Зачем в городском пейзаже маленькие фигурки людей?
6. Какие цвета делают ночной город выразительным?
7. Нарисуй свою улицу в перспективе с одной точкой схода в выбранное время суток.
~~~

~~~art
hints
1. Улицы, площади, мосты, крыши, дворы. 2. Импрессионисты. 3. Например: розовый и оранжевый туф, аркады, Каскад, Арарат над крышами. 4. Рядами окон, колонн, деревьев и фонарей. 5. Они приносят жизнь и показывают масштаб зданий. 6. Тёплые жёлтые огни на холодном тёмно-синем. 7. Твой рисунок.
~~~`,
      },
      [
        q(t("The Impressionists loved to paint…", "Իմպրեսիոնիստները սիրում էին նկարել…", "Импрессионисты любили писать…"), [t("the boulevards of Paris", "Փարիզի բուլվարները", "бульвары Парижа"), t("Egyptian pyramids", "եգիպտական բուրգերը", "египетские пирамиды"), t("battle scenes", "մարտական տեսարաններ", "батальные сцены")], 0),
        q(t("Rows of windows and lamps create…", "Պատուհանների և լապտերների շարքերը ստեղծում են…", "Ряды окон и фонарей создают…"), [t("silence", "լռություն", "тишину"), t("rhythm", "ռիթմ", "ритм"), t("texture only", "միայն ֆակտուրա", "только фактуру")], 1),
        q(t("Pink and orange tuff is typical of…", "Վարդագույն և նարնջագույն տուֆը բնորոշ է…", "Розовый и оранжевый туф характерен для…"), [t("Paris", "Փարիզին", "Парижа"), t("Venice", "Վենետիկին", "Венеции"), t("Yerevan", "Երևանին", "Еревана")], 2),
        q(t("Small figures of people in a city landscape show…", "Քաղաքային բնանկարում մարդկանց փոքր պատկերները ցույց են տալիս…", "Маленькие фигурки людей в городском пейзаже показывают…"), [t("scale and life", "մասշտաբ և կյանք", "масштаб и жизнь"), t("the horizon", "հորիզոնը", "горизонт"), t("the season only", "միայն տարվա եղանակը", "только время года")], 0),
        q(t("A night city is built on the contrast of…", "Գիշերային քաղաքը կառուցված է … հակադրության վրա։", "Ночной город строится на контрасте…"), [t("red and green only", "միայն կարմրի և կանաչի", "только красного и зелёного"), t("warm light and cool darkness", "տաք լույսի և սառը մթության", "тёплого света и холодной темноты"), t("black and white only", "միայն սևի և սպիտակի", "только чёрного и белого")], 1),
        q(t("A corner building is best drawn in … perspective.", "Անկյունային շենքը լավագույնս նկարում են … հեռանկարում։", "Угловое здание лучше рисовать в перспективе…"), [t("reverse", "հակադարձ", "обратной"), t("one-point", "մեկ կետով", "с одной точкой"), t("two-point", "երկու կետով", "с двумя точками")], 2),
      ],
    ),
  ],
};
