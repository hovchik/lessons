import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("Folk crafts: the link of times", "Ժողովրդական արհեստներ․ ժամանակների կապը", "Связь времён в народном искусстве"),
  summary: t(
    "Gzhel and Zhostovo, Palekh lacquer miniature, folk clay toys, Armenian crafts, the Vernissage and designing a souvenir.",
    "Գժել և Ժոստովո, Պալեխի լաքային մանրանկար, ժողովրդական կավե խաղալիքներ, հայկական արհեստներ, Վերնիսաժ և հուշանվերի նախագծում։",
    "Гжель и Жостово, палехская лаковая миниатюра, народная глиняная игрушка, армянские ремёсла, вернисаж и проект сувенира.",
  ),
  lessons: [
    lesson(
      "gzhel-zhostovo",
      ["Gzhel and Zhostovo", "Գժել և Ժոստովո", "Гжель и Жостово"],
      {
        en: ["Know the Gzhel and Zhostovo crafts and their typical patterns", "Paint a stroke with a shadow, as Gzhel masters do", "Paint a flower motif in the style of Gzhel or Zhostovo"],
        hy: ["Իմանալ Գժելի և Ժոստովոյի արհեստները և նրանց բնորոշ նախշերը", "Գժելի վարպետների պես նկարել ստվերով վրձնահարված", "Գժելի կամ Ժոստովոյի ոճով նկարել ծաղկային մոտիվ"],
        ru: ["Знать промыслы Гжель и Жостово и их типичные узоры", "Выполнять мазок с тенями, как гжельские мастера", "Написать цветочный мотив в стиле Гжели или Жостова"],
      },
      {
        en: `## Two crafts near Moscow

Many Russian folk crafts are named after the villages where they were born. Masters have passed their skills from parents to children for generations, so the old craft lives today. This is the **link of times**.

## Gzhel

| Feature | What it is |
|---|---|
| **where** | villages around Gzhel, near Moscow |
| **material** | white porcelain and earthenware: dishes, teapots, figurines |
| **colour** | only **cobalt blue** on white |
| **technique** | the **stroke with shadow**: one side of the brush has more paint, so one stroke goes from dark to light |
| **motifs** | roses and other flowers, leaves, birds, small scenes |

~~~art
pic gzhel-plate
~~~

~~~art
palette gzhel
~~~

## Zhostovo

| Feature | What it is |
|---|---|
| **where** | the village of Zhostovo, near Moscow |
| **object** | painted **metal trays** |
| **background** | most often **black**, also red, green or blue |
| **motifs** | a **bouquet** of garden and wild flowers in the centre, a thin golden border |
| **technique** | oil paint in several layers: first dark shapes of flowers, then shadows, then light and glare |

~~~art
pic zhostovo-tray
~~~

~~~art
palette zhostovo
~~~

## Paint a stroke with shadow

1. Dip the brush in water, then touch one side of its tip into blue paint.
2. Press the brush to the paper and turn it: one edge is dark, the other light.
3. Make a petal with one stroke; repeat around a centre to make a rose.
4. Add thin lines: stems, tendrils, small leaves.

~~~art
steps gzhel-stroke
~~~

~~~art
mixer paints=blue,white
The Gzhel stroke has dark and light in one move. Mix the shades of cobalt from deep blue to almost white.
~~~

## Task

Choose one style:
- **Gzhel**: a plate or teapot shape, blue strokes on white, a rose in the centre, a border of lines and dots.
- **Zhostovo**: an oval tray on black paper, a bouquet of 3–5 bright flowers, gold or yellow thin border.

~~~art
tasks
1. Why are many crafts named after villages?
2. What is the «link of times» in folk art?
3. What colour is Gzhel painting?
4. What is a stroke with shadow?
5. What objects are painted in Zhostovo?
6. Describe the layers of Zhostovo painting.
7. Paint a motif in the style of Gzhel or Zhostovo.
~~~

~~~art
hints
1. They were born in those villages. 2. Skills are passed from parents to children for generations, so the old craft lives today. 3. Cobalt blue on white. 4. One stroke going from dark to light because one side of the brush has more paint. 5. Metal trays. 6. Dark shapes of flowers, then shadows, then light and glare. 7. Your work.
~~~`,
        hy: `## Երկու արհեստ Մոսկվայի մոտ

Ռուսական ժողովրդական արհեստներից շատերը կոչվում են այն գյուղերի անուններով, որտեղ ծնվել են։ Վարպետները սերունդներ շարունակ իրենց հմտությունը փոխանցում են ծնողներից երեխաներին, այդ պատճառով հին արհեստն ապրում է այսօր։ Սա **ժամանակների կապն** է։

## Գժել

| Առանձնահատկություն | Ինչ է |
|---|---|
| **որտեղ** | Գժելի շրջակա գյուղերում, Մոսկվայի մոտ |
| **նյութ** | սպիտակ ճենապակի և հախճապակի՝ ամաններ, թեյնիկներ, արձանիկներ |
| **գույն** | միայն **կոբալտե կապույտ** սպիտակի վրա |
| **տեխնիկա** | **ստվերով վրձնահարված**՝ վրձնի մի կողմում ավելի շատ ներկ կա, ուստի մեկ հարվածն անցնում է մուգից բաց |
| **մոտիվներ** | վարդեր և այլ ծաղիկներ, տերևներ, թռչուններ, փոքր տեսարաններ |

~~~art
pic gzhel-plate
~~~

~~~art
palette gzhel
~~~

## Ժոստովո

| Առանձնահատկություն | Ինչ է |
|---|---|
| **որտեղ** | Ժոստովո գյուղը, Մոսկվայի մոտ |
| **իր** | ներկված **մետաղե սկուտեղներ** |
| **ֆոն** | առավել հաճախ **սև**, նաև կարմիր, կանաչ կամ կապույտ |
| **մոտիվներ** | այգու և դաշտային ծաղիկների **փունջ** կենտրոնում, բարակ ոսկե եզրագիծ |
| **տեխնիկա** | յուղաներկ մի քանի շերտով՝ նախ ծաղիկների մուգ ձևերը, հետո ստվերները, հետո լույսն ու փայլը |

~~~art
pic zhostovo-tray
~~~

~~~art
palette zhostovo
~~~

## Նկարի՛ր ստվերով վրձնահարված

1. Վրձինը թաթախի՛ր ջրի մեջ, հետո ծայրի մի կողմը դիպցրու՛ կապույտ ներկին։
2. Վրձինը սեղմի՛ր թղթին և պտտի՛ր՝ մի եզրը մուգ է, մյուսը՝ բաց։
3. Մեկ հարվածով արա՛ թերթիկ, կրկնի՛ր կենտրոնի շուրջը՝ վարդ ստանալու համար։
4. Ավելացրու՛ բարակ գծեր՝ ցողուններ, բեղիկներ, փոքր տերևներ։

~~~art
steps gzhel-stroke
~~~

~~~art
mixer paints=blue,white
Գժելյան վրձնահարվածը մեկ շարժումով ունի և՛ մուգ, և՛ բաց։ Խառնի՛ր կոբալտի երանգները մուգ կապույտից մինչև գրեթե սպիտակ։
~~~

## Առաջադրանք

Ընտրի՛ր մեկ ոճ․
- **Գժել**՝ ափսեի կամ թեյնիկի ձև, կապույտ վրձնահարվածներ սպիտակի վրա, կենտրոնում վարդ, գծերի և կետերի եզրագիծ։
- **Ժոստովո**՝ օվալաձև սկուտեղ սև թղթի վրա, 3–5 վառ ծաղկի փունջ, ոսկեգույն կամ դեղին բարակ եզրագիծ։

~~~art
tasks
1. Ինչո՞ւ են շատ արհեստներ կոչվում գյուղերի անուններով։
2. Ի՞նչ է «ժամանակների կապը» ժողովրդական արվեստում։
3. Ի՞նչ գույնի է Գժելի նկարազարդումը։
4. Ի՞նչ է ստվերով վրձնահարվածը։
5. Ի՞նչ իրեր են նկարազարդում Ժոստովոյում։
6. Նկարագրի՛ր Ժոստովոյի նկարազարդման շերտերը։
7. Նկարի՛ր մոտիվ Գժելի կամ Ժոստովոյի ոճով։
~~~

~~~art
hints
1. Նրանք ծնվել են այդ գյուղերում։ 2. Հմտությունները սերունդներ շարունակ փոխանցվում են ծնողներից երեխաներին, և հին արհեստն ապրում է այսօր։ 3. Կոբալտե կապույտ սպիտակի վրա։ 4. Մեկ հարված, որն անցնում է մուգից բաց, որովհետև վրձնի մի կողմում ավելի շատ ներկ կա։ 5. Մետաղե սկուտեղներ։ 6. Ծաղիկների մուգ ձևեր, հետո ստվերներ, հետո լույս և փայլ։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Два промысла под Москвой

Многие русские народные промыслы названы по сёлам, где они родились. Мастера поколениями передают умение от родителей детям, поэтому старинный промысел живёт и сегодня. Это и есть **связь времён**.

## Гжель

| Черта | Что это |
|---|---|
| **где** | сёла вокруг Гжели, под Москвой |
| **материал** | белый фарфор и фаянс: посуда, чайники, статуэтки |
| **цвет** | только **кобальтовый синий** по белому |
| **приём** | **мазок с тенями**: на одной стороне кисти больше краски, поэтому один мазок переходит от тёмного к светлому |
| **мотивы** | розы и другие цветы, листья, птицы, маленькие сценки |

~~~art
pic gzhel-plate
~~~

~~~art
palette gzhel
~~~

## Жостово

| Черта | Что это |
|---|---|
| **где** | село Жостово под Москвой |
| **предмет** | расписные **металлические подносы** |
| **фон** | чаще всего **чёрный**, а также красный, зелёный или синий |
| **мотивы** | **букет** садовых и полевых цветов в центре, тонкий золотой бордюр |
| **приём** | масляная краска в несколько слоёв: сначала тёмные силуэты цветов, затем тени, затем свет и блики |

~~~art
pic zhostovo-tray
~~~

~~~art
palette zhostovo
~~~

## Выполни мазок с тенями

1. Смочи кисть водой, затем коснись одной стороной кончика синей краски.
2. Прижми кисть к бумаге и поверни: один край тёмный, другой светлый.
3. Одним мазком сделай лепесток; повтори вокруг центра — получится роза.
4. Добавь тонкие линии: стебли, усики, маленькие листики.

~~~art
steps gzhel-stroke
~~~

~~~art
mixer paints=blue,white
Гжельский мазок с тенями: тёмное и светлое в одном движении. Смешай оттенки кобальта от глубокого синего до почти белого.
~~~

## Задание

Выбери один стиль:
- **Гжель**: форма тарелки или чайника, синие мазки по белому, роза в центре, кайма из линий и точек.
- **Жостово**: овальный поднос на чёрной бумаге, букет из 3–5 ярких цветов, тонкий золотой или жёлтый бордюр.

~~~art
tasks
1. Почему многие промыслы названы по сёлам?
2. Что такое «связь времён» в народном искусстве?
3. Какого цвета гжельская роспись?
4. Что такое мазок с тенями?
5. Какие предметы расписывают в Жостове?
6. Опиши слои жостовской росписи.
7. Напиши мотив в стиле Гжели или Жостова.
~~~

~~~art
hints
1. Они родились в этих сёлах. 2. Умение поколениями передаётся от родителей детям, и старинный промысел живёт сегодня. 3. Кобальтовый синий по белому. 4. Мазок, переходящий от тёмного к светлому, потому что на одной стороне кисти больше краски. 5. Металлические подносы. 6. Тёмные силуэты цветов, затем тени, затем свет и блики. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Gzhel painting is…", "Գժելի նկարազարդումը…", "Гжельская роспись —"), [t("cobalt blue on white", "կոբալտե կապույտ է սպիտակի վրա", "кобальтовая синяя по белому"), t("gold on red", "ոսկի է կարմիրի վրա", "золото по красному"), t("black on yellow", "սև է դեղինի վրա", "чёрная по жёлтому")], 0),
        q(t("Zhostovo masters paint…", "Ժոստովոյի վարպետները նկարազարդում են…", "Жостовские мастера расписывают…"), [t("clay toys", "կավե խաղալիքներ", "глиняные игрушки"), t("metal trays", "մետաղե սկուտեղներ", "металлические подносы"), t("wooden spoons", "փայտե գդալներ", "деревянные ложки")], 1),
        q(t("The typical Zhostovo background is…", "Ժոստովոյի բնորոշ ֆոնն է…", "Типичный фон жостовского подноса —"), [t("white", "սպիտակը", "белый"), t("sky blue", "երկնագույնը", "голубой"), t("black", "սևը", "чёрный")], 2),
        q(t("A stroke going from dark to light is…", "Մուգից բաց անցնող վրձնահարվածը…", "Мазок от тёмного к светлому —"), [t("a stroke with shadow", "ստվերով վրձնահարված է", "мазок с тенями"), t("a dot", "կետ է", "точка"), t("hatching", "շտրիխավորում է", "штриховка")], 0),
        q(t("The «link of times» means…", "«Ժամանակների կապը» նշանակում է…", "«Связь времён» означает…"), [t("a broken clock", "կոտրված ժամացույց", "сломанные часы"), t("skills passed through generations", "սերունդներով փոխանցվող հմտություններ", "умения, передаваемые поколениями"), t("a new invention", "նոր գյուտ", "новое изобретение")], 1),
        q(t("The last layer of Zhostovo painting is…", "Ժոստովոյի նկարազարդման վերջին շերտն է…", "Последний слой жостовской росписи —"), [t("dark silhouettes", "մուգ ուրվագծերը", "тёмные силуэты"), t("the black background", "սև ֆոնը", "чёрный фон"), t("light and glare", "լույսը և փայլը", "свет и блики")], 2),
      ],
    ),
    lesson(
      "palekh-miniature",
      ["Palekh lacquer miniature", "Պալեխի լաքային մանրանկար", "Палехская лаковая миниатюра"],
      {
        en: ["Know how Palekh lacquer miniatures are made", "See the features of the Palekh style: black background, slender figures, gold", "Paint a fairy-tale scene on a black background in the Palekh style"],
        hy: ["Իմանալ, թե ինչպես են պատրաստվում Պալեխի լաքային մանրանկարները", "Տեսնել Պալեխի ոճի առանձնահատկությունները՝ սև ֆոն, նրբագեղ պատկերներ, ոսկի", "Պալեխի ոճով սև ֆոնի վրա նկարել հեքիաթային տեսարան"],
        ru: ["Знать, как создаётся палехская лаковая миниатюра", "Видеть черты палехского стиля: чёрный фон, тонкие фигуры, золото", "Написать сказочную сцену на чёрном фоне в стиле Палеха"],
      },
      {
        en: `## From icons to boxes

**Palekh** is a village in the Ivanovo region, famous for centuries for its icon painters. In the 1920s its masters began to paint with the same fine technique on small black boxes, brooches and caskets. This is how **Palekh lacquer miniature** appeared.

~~~art
pic palekh-box
~~~

## How a box is made

1. **Papier-mâché**: layers of cardboard are glued and pressed, then dried and turned into a box.
2. The box is covered with black lacquer outside and red inside.
3. The master paints with **egg tempera** and very thin brushes.
4. Fine lines of **gold** are added.
5. The box is covered with many layers of clear lacquer and polished until it shines like glass.

## The Palekh style

| Feature | What we see |
|---|---|
| **background** | deep black, like the night: the colours glow on it |
| **figures** | slender, elongated, graceful, in elegant poses |
| **colours** | bright, jewel-like: red, green, blue, gold |
| **gold** | thin golden lines on clothes, trees, horses and in the border |
| **themes** | Russian fairy tales, byliny, Pushkin's tales, folk songs |
| **landscape** | stylized hills, thin trees, small white churches |

~~~art
palette palekh
~~~

## Paint a Palekh scene

1. Take black or very dark paper.
2. Choose a scene: the Firebird, a troika in the snow, the hero on a horse, a tale by Pushkin.
3. Draw slender figures with long legs and small heads; use thin light outlines.
4. Paint with bright gouache; let the black stay between shapes as the background.
5. Add thin golden or yellow lines and a decorative border.

~~~art
sketch paper=black
Palekh is painted on black lacquer: bright figures, thin golden lines. Paint a small fairy-tale scene on black.
~~~

~~~art
tasks
1. Where is Palekh and what was it famous for before lacquer?
2. When did Palekh lacquer miniature appear?
3. What is papier-mâché?
4. What paint do Palekh masters use?
5. Why do colours glow on a Palekh box?
6. What themes do Palekh masters paint?
7. Paint a fairy-tale scene in the Palekh style.
~~~

~~~art
hints
1. In the Ivanovo region; it was famous for icon painters. 2. In the 1920s. 3. Layers of cardboard glued and pressed together. 4. Egg tempera. 5. Because they are painted on a deep black background. 6. Russian fairy tales, byliny, Pushkin's tales, folk songs. 7. Your work.
~~~`,
        hy: `## Սրբապատկերներից տուփեր

**Պալեխը** Իվանովոյի մարզի գյուղ է, որը դարեր շարունակ հայտնի էր իր սրբապատկերիչներով։ 1920-ական թվականներին նրա վարպետները նույն նուրբ տեխնիկայով սկսեցին նկարազարդել փոքր սև տուփեր, կրծքազարդեր և արկղիկներ։ Այդպես հայտնվեց **Պալեխի լաքային մանրանկարը**։

~~~art
pic palekh-box
~~~

## Ինչպես է պատրաստվում տուփը

1. **Պապյե-մաշե**՝ ստվարաթղթի շերտերը սոսնձում և սեղմում են, հետո չորացնում և դարձնում տուփ։
2. Տուփը ծածկում են սև լաքով դրսից և կարմիրով ներսից։
3. Վարպետը նկարում է **ձվային տեմպերայով** և շատ բարակ վրձիններով։
4. Ավելացնում են **ոսկու** բարակ գծեր։
5. Տուփը ծածկում են թափանցիկ լաքի բազմաթիվ շերտերով և փայլեցնում, մինչև ապակու պես շողա։

## Պալեխի ոճը

| Առանձնահատկություն | Ինչ ենք տեսնում |
|---|---|
| **ֆոն** | խոր սև, ինչպես գիշերը՝ գույները փայլում են դրա վրա |
| **պատկերներ** | նրբագեղ, երկարավուն, շնորհալի, էլեգանտ դիրքերով |
| **գույներ** | վառ, թանկարժեք քարերի նման՝ կարմիր, կանաչ, կապույտ, ոսկի |
| **ոսկի** | բարակ ոսկե գծեր հագուստի, ծառերի, ձիերի վրա և եզրագծում |
| **թեմաներ** | ռուսական հեքիաթներ, բիլինաներ, Պուշկինի հեքիաթներ, ժողովրդական երգեր |
| **բնապատկեր** | ոճավորված բլուրներ, բարակ ծառեր, փոքր սպիտակ եկեղեցիներ |

~~~art
palette palekh
~~~

## Նկարի՛ր Պալեխի տեսարան

1. Վերցրու՛ սև կամ շատ մուգ թուղթ։
2. Ընտրի՛ր տեսարան՝ Հրաշք թռչուն, եռաձի ձյան մեջ, հերոսը ձիու վրա, Պուշկինի հեքիաթ։
3. Նկարի՛ր նրբագեղ պատկերներ՝ երկար ոտքերով և փոքր գլուխներով, օգտագործի՛ր բարակ բաց եզրագծեր։
4. Ներկի՛ր վառ գուաշով, ձևերի միջև թո՛ղ սևն որպես ֆոն։
5. Ավելացրու՛ բարակ ոսկեգույն կամ դեղին գծեր և դեկորատիվ եզրագիծ։

~~~art
sketch paper=black
Պալեխը նկարվում է սև լաքի վրա․ վառ կերպարներ, բարակ ոսկեգույն գծեր։ Նկարի՛ր փոքրիկ հեքիաթային տեսարան սևի վրա։
~~~

~~~art
tasks
1. Որտե՞ղ է Պալեխը, և ինչո՞վ էր այն հայտնի մինչև լաքային մանրանկարը։
2. Ե՞րբ է հայտնվել Պալեխի լաքային մանրանկարը։
3. Ի՞նչ է պապյե-մաշեն։
4. Ի՞նչ ներկ են օգտագործում Պալեխի վարպետները։
5. Ինչո՞ւ են գույները փայլում Պալեխի տուփի վրա։
6. Ի՞նչ թեմաներ են նկարում Պալեխի վարպետները։
7. Պալեխի ոճով նկարի՛ր հեքիաթային տեսարան։
~~~

~~~art
hints
1. Իվանովոյի մարզում, այն հայտնի էր սրբապատկերիչներով։ 2. 1920-ական թվականներին։ 3. Իրար սոսնձված և սեղմված ստվարաթղթի շերտեր։ 4. Ձվային տեմպերա։ 5. Որովհետև նկարված են խոր սև ֆոնի վրա։ 6. Ռուսական հեքիաթներ, բիլինաներ, Պուշկինի հեքիաթներ, ժողովրդական երգեր։ 7. Քո աշխատանքը։
~~~`,
        ru: `## От иконы к шкатулке

**Палех** — село в Ивановской области, веками славившееся иконописцами. В 1920-е годы его мастера стали той же тонкой техникой расписывать маленькие чёрные шкатулки, броши и ларцы. Так появилась **палехская лаковая миниатюра**.

~~~art
pic palekh-box
~~~

## Как делают шкатулку

1. **Папье-маше**: слои картона склеивают и прессуют, затем сушат и делают из них шкатулку.
2. Шкатулку покрывают чёрным лаком снаружи и красным внутри.
3. Мастер пишет **яичной темперой** очень тонкими кисточками.
4. Добавляют тончайшие линии **золота**.
5. Шкатулку покрывают многими слоями прозрачного лака и полируют до стеклянного блеска.

## Палехский стиль

| Черта | Что мы видим |
|---|---|
| **фон** | глубокий чёрный, как ночь: краски на нём светятся |
| **фигуры** | тонкие, вытянутые, изящные, в нарядных позах |
| **цвета** | яркие, как драгоценные камни: красный, зелёный, синий, золото |
| **золото** | тонкие золотые линии на одежде, деревьях, конях и в бордюре |
| **темы** | русские сказки, былины, сказки Пушкина, народные песни |
| **пейзаж** | стилизованные горки, тонкие деревца, маленькие белые церкви |

~~~art
palette palekh
~~~

## Напиши палехскую сцену

1. Возьми чёрную или очень тёмную бумагу.
2. Выбери сюжет: Жар-птица, тройка в снегу, богатырь на коне, сказка Пушкина.
3. Нарисуй тонкие фигуры с длинными ногами и небольшими головами; используй тонкий светлый контур.
4. Пиши яркой гуашью; между формами оставляй чёрный фон.
5. Добавь тонкие золотые или жёлтые линии и декоративный бордюр.

~~~art
sketch paper=black
Палех пишут на чёрном лаке: яркие фигурки, тонкие золотые линии. Нарисуй маленькую сказочную сцену на чёрном.
~~~

~~~art
tasks
1. Где находится Палех и чем он славился до лаковой миниатюры?
2. Когда появилась палехская лаковая миниатюра?
3. Что такое папье-маше?
4. Какой краской пишут палехские мастера?
5. Почему краски светятся на палехской шкатулке?
6. Какие сюжеты пишут палехские мастера?
7. Напиши сказочную сцену в стиле Палеха.
~~~

~~~art
hints
1. В Ивановской области; славился иконописцами. 2. В 1920-е годы. 3. Склеенные и спрессованные слои картона. 4. Яичной темперой. 5. Потому что написаны на глубоком чёрном фоне. 6. Русские сказки, былины, сказки Пушкина, народные песни. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Before lacquer miniature Palekh was famous for…", "Մինչև լաքային մանրանկարը Պալեխը հայտնի էր…", "До лаковой миниатюры Палех славился…"), [t("icon painters", "սրբապատկերիչներով", "иконописцами"), t("carpet weavers", "գորգագործներով", "ковроткачами"), t("glassblowers", "ապակեգործներով", "стеклодувами")], 0),
        q(t("The background of a Palekh box is…", "Պալեխի տուփի ֆոնը…", "Фон палехской шкатулки —"), [t("white", "սպիտակ է", "белый"), t("deep black", "խոր սև է", "глубокий чёрный"), t("transparent", "թափանցիկ է", "прозрачный")], 1),
        q(t("Palekh boxes are made of…", "Պալեխի տուփերը պատրաստված են…", "Палехские шкатулки делают из…"), [t("stone", "քարից", "камня"), t("iron", "երկաթից", "железа"), t("papier-mâché", "պապյե-մաշեից", "папье-маше")], 2),
        q(t("Palekh figures are…", "Պալեխի պատկերները…", "Палехские фигуры…"), [t("slender and elongated", "նրբագեղ են և երկարավուն", "тонкие и вытянутые"), t("short and heavy", "կարճ են և ծանր", "короткие и тяжёлые"), t("square", "քառակուսի են", "квадратные")], 0),
        q(t("Palekh lacquer miniature appeared in…", "Պալեխի լաքային մանրանկարը հայտնվել է…", "Палехская лаковая миниатюра появилась в…"), [t("the 13th century", "13-րդ դարում", "XIII веке"), t("the 1920s", "1920-ական թվականներին", "1920-е годы"), t("2020", "2020 թվականին", "2020 году")], 1),
        q(t("A typical Palekh theme is…", "Պալեխի բնորոշ թեման է…", "Типичный палехский сюжет —"), [t("a car factory", "մեքենաների գործարանը", "автозавод"), t("a still life with a jug", "սափորով նատյուրմորտը", "натюрморт с кувшином"), t("a Russian fairy tale", "ռուսական հեքիաթը", "русская сказка")], 2),
      ],
    ),
    lesson(
      "clay-toys",
      ["Folk clay toys: Dymkovo, Filimonovo, Kargopol", "Ժողովրդական կավե խաղալիքներ․ Դիմկովո, Ֆիլիմոնովո, Կարգոպոլ", "Народная глиняная игрушка: Дымково, Филимоново, Каргополь"],
      {
        en: ["Compare three Russian clay toy crafts by shape, colour and pattern", "Understand that a folk toy is a generalized, decorative image", "Model and paint a clay toy in one of the styles"],
        hy: ["Համեմատել ռուսական կավե խաղալիքի երեք արհեստ՝ ըստ ձևի, գույնի և նախշի", "Հասկանալ, որ ժողովրդական խաղալիքն ընդհանրացված, դեկորատիվ կերպար է", "Ծեփել և ներկել կավե խաղալիք այդ ոճերից մեկով"],
        ru: ["Сравнивать три промысла глиняной игрушки по форме, цвету и узору", "Понимать, что народная игрушка — обобщённый декоративный образ", "Вылепить и расписать глиняную игрушку в одном из стилей"],
      },
      {
        en: `## Toys with ancient roots

Clay toys were made for children and for holidays, and many of them were **whistles**. Their images are very old: horses, birds, deer, women. Each village made them in its own way.

| | Dymkovo | Filimonovo | Kargopol |
|---|---|---|---|
| **region** | Kirov (Vyatka) | Tula | Arkhangelsk (north) |
| **shape** | round, plump, festive: ladies in wide skirts, turkeys with fan tails | very **elongated**: long necks of deer and horses, tall thin ladies | heavy, simple, a little rough: peasants, bears, **Polkan** (half man, half horse) |
| **background** | **white** | the colour of the clay or white | earthy, light |
| **colours** | bright: red, yellow, blue, green, gold leaf | red, green and yellow stripes | calm: black, red, green, ochre |
| **pattern** | circles, dots, rings, wavy lines, checks | stripes, herringbones, little suns | simple stripes, crosses, sprigs |

~~~art
pic dymkovo filimonovo
~~~

## A generalized image

A folk toy does not show every feather or every fold. The master keeps only the **main features** of the image and makes them more **decorative**: a turkey's tail becomes a big painted fan; a deer's neck becomes long and elegant. This is why folk toys are easy to recognize and joyful to look at.

~~~art
pic mode=silhouette dymkovo filimonovo horse stork
A generalized image is clear from far away. Guess each one by its silhouette.
~~~

## Make a clay toy

1. Choose a style and an image: a Dymkovo turkey, a Filimonovo deer, a Kargopol bear.
2. Model the main body from one piece; pull out the neck, legs and tail.
3. Smooth the surface with a wet finger. Let it dry.
4. Paint the background (white for Dymkovo), then the pattern in the colours of the style.
5. If you make a whistle, ask an adult to help you make the air channel.

~~~art
palette dymkovo
~~~

~~~art
tasks
1. Why were many clay toys whistles?
2. Which toy has a white background and bright circles and dots?
3. What is special about Filimonovo shapes?
4. Who is Polkan?
5. What does «generalized image» mean?
6. Compare the colours of Dymkovo and Kargopol toys.
7. Model and paint a toy in one style.
~~~

~~~art
hints
1. They were made for children and holidays to play and make music. 2. The Dymkovo toy. 3. They are very elongated: long necks, tall thin figures. 4. A Kargopol figure, half man, half horse. 5. Only the main features are kept and made decorative. 6. Dymkovo colours are bright on white; Kargopol colours are calm and earthy. 7. Your work.
~~~`,
        hy: `## Հին արմատներով խաղալիքներ

Կավե խաղալիքները պատրաստվում էին երեխաների և տոների համար, և դրանցից շատերը **սուլիչներ** էին։ Նրանց կերպարները շատ հին են՝ ձիեր, թռչուններ, եղնիկներ, կանայք։ Յուրաքանչյուր գյուղ դրանք պատրաստում էր յուրովի։

| | Դիմկովո | Ֆիլիմոնովո | Կարգոպոլ |
|---|---|---|---|
| **շրջան** | Կիրով (Վյատկա) | Տուլա | Արխանգելսկ (հյուսիս) |
| **ձև** | կլոր, թմբլիկ, տոնական՝ լայն փեշերով տիկնայք, հովհարաձև պոչերով հնդկահավեր | շատ **երկարավուն**՝ եղնիկների և ձիերի երկար վզեր, բարձրահասակ նիհար տիկնայք | ծանր, պարզ, մի քիչ կոպիտ՝ գյուղացիներ, արջեր, **Պոլկան** (կես մարդ, կես ձի) |
| **ֆոն** | **սպիտակ** | կավի գույնը կամ սպիտակ | հողեղեն, բաց |
| **գույներ** | վառ՝ կարմիր, դեղին, կապույտ, կանաչ, ոսկե թերթիկ | կարմիր, կանաչ և դեղին շերտեր | հանդարտ՝ սև, կարմիր, կանաչ, օխրա |
| **նախշ** | շրջաններ, կետեր, օղակներ, ալիքաձև գծեր, վանդակներ | շերտեր, եղևնաձև գծեր, փոքր արևներ | պարզ շերտեր, խաչեր, ճյուղիկներ |

~~~art
pic dymkovo filimonovo
~~~

## Ընդհանրացված կերպար

Ժողովրդական խաղալիքը ցույց չի տալիս ամեն փետուր կամ ամեն ծալք։ Վարպետը պահում է կերպարի միայն **հիմնական գծերը** և դարձնում դրանք ավելի **դեկորատիվ**՝ հնդկահավի պոչը դառնում է մեծ ներկված հովհար, եղնիկի վիզը՝ երկար և նրբագեղ։ Ահա թե ինչու ժողովրդական խաղալիքները հեշտ է ճանաչել, և ուրախ է նայել նրանց։

~~~art
pic mode=silhouette dymkovo filimonovo horse stork
Ընդհանրացված կերպարը հստակ է նույնիսկ հեռվից։ Գուշակի՛ր յուրաքանչյուրը ըստ ուրվագծի։
~~~

## Պատրաստի՛ր կավե խաղալիք

1. Ընտրի՛ր ոճը և կերպարը՝ դիմկովյան հնդկահավ, ֆիլիմոնովյան եղնիկ, կարգոպոլյան արջ։
2. Հիմնական իրանը ծեփի՛ր մեկ կտորից, դուրս քաշի՛ր վիզը, ոտքերը և պոչը։
3. Թաց մատով հարթեցրու՛ մակերեսը։ Թո՛ղ չորանա։
4. Ներկի՛ր ֆոնը (Դիմկովոյի համար՝ սպիտակ), հետո նախշն ոճի գույներով։
5. Եթե սուլիչ ես պատրաստում, խնդրի՛ր մեծահասակին օգնել օդի անցքը բացելու հարցում։

~~~art
palette dymkovo
~~~

~~~art
tasks
1. Ինչո՞ւ էին շատ կավե խաղալիքներ սուլիչներ։
2. Ո՞ր խաղալիքն ունի սպիտակ ֆոն և վառ շրջաններ ու կետեր։
3. Ինչո՞վ են յուրահատուկ Ֆիլիմոնովոյի ձևերը։
4. Ո՞վ է Պոլկանը։
5. Ի՞նչ է նշանակում «ընդհանրացված կերպար»։
6. Համեմատի՛ր Դիմկովոյի և Կարգոպոլի խաղալիքների գույները։
7. Ծեփի՛ր և ներկի՛ր խաղալիք մեկ ոճով։
~~~

~~~art
hints
1. Դրանք պատրաստվում էին երեխաների և տոների համար՝ խաղալու և նվագելու։ 2. Դիմկովյան խաղալիքը։ 3. Դրանք շատ երկարավուն են՝ երկար վզեր, բարձրահասակ նիհար պատկերներ։ 4. Կարգոպոլյան պատկեր՝ կես մարդ, կես ձի։ 5. Պահվում են միայն հիմնական գծերը և դարձվում դեկորատիվ։ 6. Դիմկովոյի գույները վառ են սպիտակի վրա, Կարգոպոլինը՝ հանդարտ և հողեղեն։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Игрушки с древними корнями

Глиняные игрушки делали для детей и к праздникам, и многие из них были **свистульками**. Их образы очень древние: кони, птицы, олени, женщины. Каждое село лепило их по-своему.

| | Дымково | Филимоново | Каргополь |
|---|---|---|---|
| **край** | Киров (Вятка) | Тульская область | Архангельская область (север) |
| **форма** | круглая, пышная, нарядная: барыни в широких юбках, индюки с хвостом-веером | очень **вытянутая**: длинные шеи оленей и коней, высокие тонкие барыни | тяжёлая, простая, немного грубоватая: крестьяне, медведи, **Полкан** (получеловек-полуконь) |
| **фон** | **белый** | цвет глины или белый | землистый, светлый |
| **цвета** | яркие: красный, жёлтый, синий, зелёный, сусальное золото | красные, зелёные и жёлтые полоски | спокойные: чёрный, красный, зелёный, охра |
| **узор** | круги, точки, кольца, волнистые линии, клетки | полоски, ёлочки, солнышки | простые полосы, кресты, веточки |

~~~art
pic dymkovo filimonovo
~~~

## Обобщённый образ

Народная игрушка не показывает каждое пёрышко и каждую складку. Мастер оставляет только **главные черты** образа и делает их **декоративнее**: хвост индюка становится большим расписным веером, шея оленя — длинной и изящной. Поэтому народную игрушку легко узнать и радостно рассматривать.

~~~art
pic mode=silhouette dymkovo filimonovo horse stork
Обобщённый образ понятен издалека. Угадай каждый по силуэту.
~~~

## Слепи глиняную игрушку

1. Выбери стиль и образ: дымковского индюка, филимоновского оленя, каргопольского медведя.
2. Вылепи основное тело из одного куска; вытяни шею, ноги и хвост.
3. Загладь поверхность мокрым пальцем. Дай высохнуть.
4. Распиши фон (белый для Дымкова), затем узор красками своего стиля.
5. Если делаешь свистульку, попроси взрослого помочь сделать воздушный канал.

~~~art
palette dymkovo
~~~

~~~art
tasks
1. Почему многие глиняные игрушки были свистульками?
2. У какой игрушки белый фон и яркие круги и точки?
3. Чем особенны филимоновские формы?
4. Кто такой Полкан?
5. Что значит «обобщённый образ»?
6. Сравни цвета дымковской и каргопольской игрушки.
7. Вылепи и распиши игрушку в одном стиле.
~~~

~~~art
hints
1. Их делали для детей и праздников — играть и свистеть. 2. У дымковской. 3. Они очень вытянутые: длинные шеи, высокие тонкие фигуры. 4. Каргопольский образ получеловека-полуконя. 5. Оставлены только главные черты, и они сделаны декоративными. 6. Дымковские цвета яркие на белом, каргопольские — спокойные и землистые. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Many clay toys were also…", "Շատ կավե խաղալիքներ նաև…", "Многие глиняные игрушки были ещё и…"), [t("whistles", "սուլիչներ էին", "свистульками"), t("cups", "բաժակներ էին", "чашками"), t("lamps", "լամպեր էին", "лампами")], 0),
        q(t("Very elongated shapes are typical of…", "Շատ երկարավուն ձևերը բնորոշ են…", "Очень вытянутые формы характерны для…"), [t("Dymkovo", "Դիմկովոյին", "Дымкова"), t("Filimonovo", "Ֆիլիմոնովոյին", "Филимонова"), t("Gzhel", "Գժելին", "Гжели")], 1),
        q(t("Polkan, half man and half horse, comes from…", "Պոլկանը՝ կես մարդ, կես ձի, …", "Полкан, получеловек-полуконь, — из…"), [t("Palekh", "Պալեխից է", "Палеха"), t("Zhostovo", "Ժոստովոյից է", "Жостова"), t("Kargopol", "Կարգոպոլից է", "Каргополя")], 2),
        q(t("The Dymkovo toy has a … background.", "Դիմկովյան խաղալիքն ունի … ֆոն։", "У дымковской игрушки … фон."), [t("white", "սպիտակ", "белый"), t("black", "սև", "чёрный"), t("blue", "կապույտ", "синий")], 0),
        q(t("A generalized image keeps…", "Ընդհանրացված կերպարը պահում է…", "Обобщённый образ сохраняет…"), [t("every feather", "ամեն փետուրը", "каждое пёрышко"), t("only the main features", "միայն հիմնական գծերը", "только главные черты"), t("nothing", "ոչինչ", "ничего")], 1),
        q(t("Kargopol colours are…", "Կարգոպոլի գույները…", "Каргопольские цвета…"), [t("neon", "նեոնային են", "неоновые"), t("only blue", "միայն կապույտ են", "только синие"), t("calm and earthy", "հանդարտ են և հողեղեն", "спокойные и землистые")], 2),
      ],
    ),
    lesson(
      "armenian-crafts",
      ["Armenian folk crafts: copper, wood, lace, obsidian", "Հայկական ժողովրդական արհեստներ․ պղինձ, փայտ, ժանյակ, վանակն", "Армянские народные ремёсла: медь, дерево, кружево, обсидиан"],
      {
        en: ["Name the main Armenian folk crafts and their materials", "Notice how the material shapes the pattern", "Design an object decorated in the spirit of an Armenian craft"],
        hy: ["Անվանել հայկական հիմնական ժողովրդական արհեստները և դրանց նյութերը", "Նկատել, թե ինչպես է նյութը թելադրում նախշը", "Նախագծել առարկա՝ զարդարված հայկական արհեստի ոգով"],
        ru: ["Называть основные армянские народные ремёсла и их материалы", "Замечать, как материал определяет узор", "Придумать предмет, украшенный в духе армянского ремесла"],
      },
      {
        en: `## Crafts of the Armenian Highland

For thousands of years Armenian masters have turned simple materials into beautiful things. Each material asks for its own technique and its own pattern.

| Craft | Material | What is made | Typical decoration |
|---|---|---|---|
| **coppersmithing** | copper | pots, trays, jugs, coffee pots | chased (hammered) ornaments, birds, vines |
| **wood carving** | walnut, apricot wood | chests, doors, boxes, spoons | rosettes, interlace, pomegranates |
| **needle lace** | thin thread | collars, napkins, edges of cloth | tiny knotted flowers, stars, leaves |
| **obsidian work** | volcanic glass | jewellery, small figures, boxes | smooth shine, simple strong shapes |
| **instrument making** | apricot wood | the **duduk** | the warm colour and polish of the wood |

~~~art
pic carpet karas copper-jug jewellery khachkar
~~~

## The material speaks

* **Copper** is soft and shines warmly. The master hammers the pattern from the front (chasing), so the ornament is slightly raised and plays with light.
* **Wood** is cut with a chisel (դուր). Deep cuts give strong shadows, so carved ornaments are clear and geometric.
* **Armenian needle lace** is made only with a needle and thread, knot by knot. Its patterns are tiny and airy.
* **Obsidian** is black volcanic glass found in Armenia. It is hard and breaks with sharp edges, so it is polished into simple, glossy forms.
* The **duduk** is made from apricot wood. Its beauty is in its perfect shape and its colour, not in a busy pattern.

~~~art
palette tuff earth
~~~

## Common motifs

Many crafts share the same motifs: the **eternity sign**, the **tree of life**, the **pomegranate**, **birds** and **grapevines**. When you see them on copper, on wood and on stone, you see one artistic language.

~~~art
pic pomegranate grapevine bird-motif eight-star
~~~

## Design an object

1. Choose a craft and an object: a copper tray, a carved box, a lace napkin.
2. Draw the shape of the object large.
3. Choose one main motif (a pomegranate or an eternity sign) and a border.
4. Show the material with colour: orange-gold for copper, warm brown for wood, white on a dark background for lace, black and shine for obsidian.
5. Write a label: craft, material, motif.

~~~art
sketch guide=axis
~~~

~~~art
tasks
1. Name four Armenian folk crafts.
2. What is a duduk made from?
3. Why are wood carvings usually clear and geometric?
4. How is Armenian needle lace made?
5. What is obsidian, and why is it polished into simple forms?
6. Name three motifs shared by several crafts.
7. Draw a copper tray with a chased pattern of a bird and a vine.
~~~

~~~art
hints
1. For example: coppersmithing, wood carving, needle lace, obsidian work, carpet weaving. 2. Apricot wood. 3. Deep chisel cuts give strong shadows, so clear shapes read best. 4. Only with a needle and thread, knot by knot. 5. Black volcanic glass; it is hard and breaks sharply, so simple polished forms suit it. 6. For example: eternity sign, tree of life, pomegranate, birds, grapevine. 7. Your drawing.
~~~`,
        hy: `## Հայկական լեռնաշխարհի արհեստները

Հազարավոր տարիներ հայ վարպետները պարզ նյութերից գեղեցիկ իրեր են ստեղծել։ Ամեն նյութ պահանջում է իր տեխնիկան և իր նախշը։

| Արհեստ | Նյութ | Ինչ են պատրաստում | Բնորոշ զարդարանք |
|---|---|---|---|
| **պղնձագործություն** | պղինձ | կաթսաներ, սկուտեղներ, սափորներ, սրճեփներ | դրվագված (կռված) զարդեր, թռչուններ, որթեր |
| **փայտափորագրություն** | ընկուզենի, ծիրանենի | սնդուկներ, դռներ, տուփեր, գդալներ | վարդյակներ, հյուսքեր, նռներ |
| **ասեղնագործ ժանյակ** | բարակ թել | օձիքներ, անձեռոցիկներ, կտորի եզրեր | մանր հանգուցավոր ծաղիկներ, աստղեր, տերևներ |
| **վանակնի մշակում** | հրաբխային ապակի | զարդեր, փոքր արձանիկներ, տուփեր | հարթ փայլ, պարզ ու ուժեղ ձևեր |
| **նվագարանագործություն** | ծիրանենու փայտ | **դուդուկ** | փայտի տաք գույնն ու փայլը |

~~~art
pic carpet karas copper-jug jewellery khachkar
~~~

## Նյութը խոսում է

* **Պղինձը** փափուկ է և տաք է փայլում։ Վարպետը նախշը կռում է առջևից (դրվագում), ուստի զարդը թեթևակի բարձրացած է և խաղում է լույսի հետ։
* **Փայտը** կտրում են դուրով։ Խոր կտրվածքներն ուժեղ ստվեր են տալիս, այդ պատճառով փորագրված զարդերը հստակ են և երկրաչափական։
* **Հայկական ասեղնագործ ժանյակը** պատրաստում են միայն ասեղով և թելով՝ հանգույց առ հանգույց։ Նրա նախշերը մանր են և օդեղեն։
* **Վանակնը** (օբսիդիանը) սև հրաբխային ապակի է, որը շատ կա Հայաստանում։ Այն կարծր է և կոտրվում է սուր եզրերով, ուստի այն հղկում են պարզ, փայլուն ձևերի։
* **Դուդուկը** պատրաստում են ծիրանենու փայտից։ Նրա գեղեցկությունը կատարյալ ձևի և գույնի մեջ է, ոչ թե խիտ նախշի։

~~~art
palette tuff earth
~~~

## Ընդհանուր մոտիվներ

Շատ արհեստներ ունեն նույն մոտիվները՝ **հավերժության նշան**, **կենաց ծառ**, **նուռ**, **թռչուններ** և **խաղողի որթ**։ Երբ դրանք տեսնում ես պղնձի, փայտի և քարի վրա, տեսնում ես մեկ գեղարվեստական լեզու։

~~~art
pic pomegranate grapevine bird-motif eight-star
~~~

## Նախագծիր առարկա

1. Ընտրիր արհեստ և առարկա՝ պղնձե սկուտեղ, փորագրված տուփ, ժանյակե անձեռոցիկ։
2. Մեծ նկարիր առարկայի ձևը։
3. Ընտրիր մեկ գլխավոր մոտիվ (նուռ կամ հավերժության նշան) և եզրագիծ։
4. Նյութը ցույց տուր գույնով՝ նարնջա-ոսկեգույն պղնձի համար, տաք դարչնագույն փայտի համար, սպիտակ մուգ ֆոնի վրա ժանյակի համար, սև և փայլ վանակնի համար։
5. Գրիր պիտակ՝ արհեստ, նյութ, մոտիվ։

~~~art
sketch guide=axis
~~~

~~~art
tasks
1. Անվանիր հայկական չորս ժողովրդական արհեստ։
2. Ինչից են պատրաստում դուդուկը։
3. Ինչու են փայտի փորագրությունները սովորաբար հստակ և երկրաչափական։
4. Ինչպես են պատրաստում հայկական ասեղնագործ ժանյակը։
5. Ինչ է վանակնը, և ինչու են այն հղկում պարզ ձևերի։
6. Անվանիր երեք մոտիվ, որ հանդիպում են մի քանի արհեստում։
7. Նկարիր պղնձե սկուտեղ՝ թռչունի և որթի դրվագված նախշով։
~~~

~~~art
hints
1. Օրինակ՝ պղնձագործություն, փայտափորագրություն, ասեղնագործ ժանյակ, վանակնի մշակում, գորգագործություն։ 2. Ծիրանենու փայտից։ 3. Դուրի խոր կտրվածքներն ուժեղ ստվեր են տալիս, ուստի հստակ ձևերն են լավ երևում։ 4. Միայն ասեղով և թելով՝ հանգույց առ հանգույց։ 5. Սև հրաբխային ապակի է․ այն կարծր է և սուր է կոտրվում, ուստի պարզ հղկված ձևերն են սազում։ 6. Օրինակ՝ հավերժության նշան, կենաց ծառ, նուռ, թռչուններ, որթ։ 7. Քո նկարը։
~~~`,
        ru: `## Ремёсла Армянского нагорья

Тысячи лет армянские мастера превращают простые материалы в красивые вещи. Каждый материал требует своей техники и своего узора.

| Ремесло | Материал | Что делают | Типичный декор |
|---|---|---|---|
| **чеканка по меди** | медь | котлы, подносы, кувшины, джезвы | чеканные узоры, птицы, лозы |
| **резьба по дереву** | орех, абрикос | сундуки, двери, шкатулки, ложки | розетки, плетёнка, гранаты |
| **игольное кружево** | тонкая нить | воротники, салфетки, края ткани | крошечные узелковые цветы, звёзды, листья |
| **обработка обсидиана** | вулканическое стекло | украшения, фигурки, шкатулки | гладкий блеск, простые сильные формы |
| **изготовление инструментов** | абрикосовое дерево | **дудук** | тёплый цвет и полировка дерева |

~~~art
pic carpet karas copper-jug jewellery khachkar
~~~

## Материал говорит

* **Медь** мягкая и тепло блестит. Мастер выбивает узор молоточком (чеканит), поэтому орнамент немного выпуклый и играет со светом.
* **Дерево** режут резцом. Глубокие надрезы дают сильные тени, поэтому резные орнаменты чёткие и геометричные.
* **Армянское игольное кружево** плетут только иглой и ниткой, узелок за узелком. Его узоры крошечные и воздушные.
* **Обсидиан** — чёрное вулканическое стекло, которого много в Армении. Он твёрдый и колется с острыми краями, поэтому его полируют в простые блестящие формы.
* **Дудук** делают из абрикосового дерева. Его красота — в совершенной форме и цвете, а не в пёстром узоре.

~~~art
palette tuff earth
~~~

## Общие мотивы

Во многих ремёслах встречаются одни и те же мотивы: **знак вечности**, **древо жизни**, **гранат**, **птицы** и **виноградная лоза**. Видя их на меди, дереве и камне, ты видишь единый художественный язык.

~~~art
pic pomegranate grapevine bird-motif eight-star
~~~

## Придумай предмет

1. Выбери ремесло и предмет: медный поднос, резную шкатулку, кружевную салфетку.
2. Крупно нарисуй форму предмета.
3. Выбери один главный мотив (гранат или знак вечности) и кайму.
4. Передай материал цветом: оранжево-золотой для меди, тёплый коричневый для дерева, белый на тёмном фоне для кружева, чёрный с бликом для обсидиана.
5. Подпиши: ремесло, материал, мотив.

~~~art
sketch guide=axis
~~~

~~~art
tasks
1. Назови четыре армянских народных ремесла.
2. Из чего делают дудук?
3. Почему резьба по дереву обычно чёткая и геометричная?
4. Как плетут армянское игольное кружево?
5. Что такое обсидиан и почему ему придают простые формы?
6. Назови три мотива, общих для нескольких ремёсел.
7. Нарисуй медный поднос с чеканным узором из птицы и лозы.
~~~

~~~art
hints
1. Например: чеканка, резьба по дереву, игольное кружево, обработка обсидиана, ковроткачество. 2. Из абрикосового дерева. 3. Глубокие надрезы дают сильные тени, и чёткие формы читаются лучше. 4. Только иглой и ниткой, узелок за узелком. 5. Чёрное вулканическое стекло; он твёрдый и колется остро, поэтому ему подходят простые полированные формы. 6. Например: знак вечности, древо жизни, гранат, птицы, лоза. 7. Твой рисунок.
~~~`,
      },
      [
        q(t("The duduk is made from…", "Դուդուկը պատրաստում են…", "Дудук делают из…"), [t("apricot wood", "ծիրանենու փայտից", "абрикосового дерева"), t("copper", "պղնձից", "меди"), t("obsidian", "վանակնից", "обсидиана")], 0),
        q(t("Obsidian is…", "Վանակնը…", "Обсидиан — это…"), [t("a kind of wood", "փայտի տեսակ է", "вид дерева"), t("black volcanic glass", "սև հրաբխային ապակի է", "чёрное вулканическое стекло"), t("a thread", "թել է", "нить")], 1),
        q(t("Armenian needle lace is made with…", "Հայկական ասեղնագործ ժանյակը պատրաստում են…", "Армянское игольное кружево плетут…"), [t("a hammer", "մուրճով", "молотком"), t("a loom", "ջուլհակահաստոցով", "на ткацком станке"), t("a needle and thread", "ասեղով և թելով", "иглой и ниткой")], 2),
        q(t("Hammering a pattern into copper is called…", "Պղնձի վրա նախշը կռելը կոչվում է…", "Выбивание узора на меди называется…"), [t("chasing", "դրվագում", "чеканкой"), t("weaving", "գործվածք", "ткачеством"), t("glazing", "ջնարակում", "глазурованием")], 0),
        q(t("Deep chisel cuts in wood give…", "Փայտի խոր կտրվածքները տալիս են…", "Глубокие надрезы в дереве дают…"), [t("no shadows", "ոչ մի ստվեր", "никаких теней"), t("strong shadows", "ուժեղ ստվերներ", "сильные тени"), t("colour", "գույն", "цвет")], 1),
        q(t("A motif shared by many Armenian crafts is…", "Շատ հայկական արհեստների ընդհանուր մոտիվ է…", "Мотив, общий для многих армянских ремёсел, —…"), [t("the snowflake", "ձյան փաթիլը", "снежинка"), t("the anchor", "խարիսխը", "якорь"), t("the pomegranate", "նուռը", "гранат")], 2),
      ],
    ),
    lesson(
      "vernissage-fair",
      ["The craft fair: Vernissage and folk markets", "Արհեստների տոնավաճառ․ Վերնիսաժ և ժողովրդական շուկաներ", "Ярмарка ремёсел: вернисаж и народные базары"],
      {
        en: ["Understand the role of the fair in the life of folk crafts", "Describe a craft market as a colourful scene", "Draw a fair stall full of folk objects"],
        hy: ["Հասկանալ տոնավաճառի դերը ժողովրդական արհեստների կյանքում", "Նկարագրել արհեստների շուկան որպես գունեղ տեսարան", "Նկարել տոնավաճառի վաճառասեղան՝ լի ժողովրդական իրերով"],
        ru: ["Понимать роль ярмарки в жизни народных промыслов", "Описывать ярмарку ремёсел как красочную сцену", "Нарисовать ярмарочный прилавок с народными изделиями"],
      },
      {
        en: `## Why fairs matter

In the past, masters brought their pots, toys, carpets and copperware to **fairs**. There they sold their work, saw what other villages made and learned from each other. A fair was also a holiday: music, games, bright clothes.

## Fairs today

* **Vernissage in Yerevan** is a big open-air market not far from Republic Square. On weekends you can see carpets, copper coffee pots, carved boxes, obsidian jewellery, duduks, paintings and lace.
* **Izmailovsky market in Moscow** gathers nesting dolls, Gzhel and Khokhloma dishes, Palekh boxes, shawls and clay toys.
* Many towns hold **craft fairs** on holidays, where masters show how they work.

~~~art
pic carpet ceramic-plate jewellery matryoshka
~~~

## A fair as a picture

A fair is a wonderful subject for a **multi-figure composition**:

* **Foreground:** a stall with objects, large and detailed.
* **Middle ground:** the master and the buyers, talking and choosing.
* **Background:** other stalls, awnings, trees, the town.
* Use **rhythm**: rows of plates, hanging carpets, lines of jugs.
* Use **colour accents**: one red carpet, a gold tray, a blue Gzhel jug among warm colours.

## Draw a fair stall

1. Draw a table and an awning in the foreground.
2. Put objects on it in rows: jugs, plates, toys. Hang a carpet behind.
3. Draw the master behind the table and one or two buyers.
4. Add other stalls smaller in the background.
5. Paint the objects in the colours of their crafts.

~~~art
perspective modes=one
~~~

~~~art
sketch guide=vp
Draw a fair stall in perspective: the table and the awning lines run to the vanishing point.
~~~

~~~art
tasks
1. Why did masters bring their work to fairs?
2. Where is the Vernissage in Yerevan, and what is sold there? Name four things.
3. What crafts can you find at Izmailovsky market?
4. What goes in the foreground of a fair picture?
5. How can you create rhythm in a fair scene?
6. What is a colour accent? Give an example.
7. Draw a fair stall with at least three different crafts on it.
~~~

~~~art
hints
1. To sell their work, see what others made and learn; a fair was also a holiday. 2. Near Republic Square; for example carpets, copper coffee pots, carved boxes, obsidian jewellery, duduks, lace. 3. For example: nesting dolls, Gzhel, Khokhloma, Palekh boxes, shawls, clay toys. 4. A large, detailed stall with objects. 5. With rows of plates, hanging carpets, lines of jugs. 6. A bright spot that stands out, for example a blue Gzhel jug among warm colours. 7. Your drawing.
~~~`,
        hy: `## Ինչու են տոնավաճառները կարևոր

Անցյալում վարպետներն իրենց կճուճները, խաղալիքները, գորգերն ու պղնձե իրերը բերում էին **տոնավաճառներ**։ Այնտեղ նրանք վաճառում էին իրենց գործերը, տեսնում էին, թե ինչ են պատրաստում այլ գյուղերում, և սովորում էին միմյանցից։ Տոնավաճառը նաև տոն էր՝ երաժշտություն, խաղեր, վառ հագուստ։

## Տոնավաճառներն այսօր

* **Երևանի Վերնիսաժը** մեծ բացօթյա շուկա է Հանրապետության հրապարակից ոչ հեռու։ Շաբաթ-կիրակի այնտեղ կարելի է տեսնել գորգեր, պղնձե սրճեփներ, փորագրված տուփեր, վանակնից զարդեր, դուդուկներ, նկարներ և ժանյակներ։
* **Մոսկվայի Իզմայլովյան շուկայում** կան մատրյոշկաներ, գժելյան և խոխլոմայի ամաններ, պալեխյան տուփեր, շալեր և կավե խաղալիքներ։
* Շատ քաղաքներում տոներին անցկացնում են **արհեստների տոնավաճառներ**, որտեղ վարպետները ցույց են տալիս, թե ինչպես են աշխատում։

~~~art
pic carpet ceramic-plate jewellery matryoshka
~~~

## Տոնավաճառն որպես նկար

Տոնավաճառը հրաշալի թեմա է **բազմաֆիգուր կոմպոզիցիայի** համար․

* **Առաջին պլան**՝ վաճառասեղան իրերով, մեծ և մանրամասն։
* **Միջին պլան**՝ վարպետը և գնորդները, որոնք խոսում են ու ընտրում։
* **Հետին պլան**՝ այլ վաճառասեղաններ, ծածկեր, ծառեր, քաղաքը։
* Օգտագործիր **ռիթմ**՝ ափսեների շարքեր, կախված գորգեր, սափորների շարաններ։
* Օգտագործիր **գունային շեշտեր**՝ մեկ կարմիր գորգ, ոսկեգույն սկուտեղ, կապույտ գժելյան սափոր տաք գույների մեջ։

## Նկարիր վաճառասեղան

1. Առաջին պլանում նկարիր սեղան և ծածկ։
2. Իրերը դիր դրա վրա շարքերով՝ սափորներ, ափսեներ, խաղալիքներ։ Ետևում կախիր գորգ։
3. Նկարիր վարպետին սեղանի ետևում և մեկ-երկու գնորդի։
4. Հետին պլանում ավելի փոքր նկարիր այլ վաճառասեղաններ։
5. Իրերը ներկիր իրենց արհեստների գույներով։

~~~art
perspective modes=one
~~~

~~~art
sketch guide=vp
Նկարի՛ր տոնավաճառի վաճառասեղան հեռանկարով․ սեղանի և ծածկի գծերը գնում են դեպի հեռանկարի կետը։
~~~

~~~art
tasks
1. Ինչու էին վարպետներն իրենց գործերը բերում տոնավաճառ։
2. Որտեղ է Երևանի Վերնիսաժը, և ինչ են վաճառում այնտեղ։ Անվանիր չորս բան։
3. Ինչ արհեստներ կարելի է գտնել Իզմայլովյան շուկայում։
4. Ինչ է լինում տոնավաճառի նկարի առաջին պլանում։
5. Ինչպես կարելի է ռիթմ ստեղծել տոնավաճառի տեսարանում։
6. Ինչ է գունային շեշտը։ Բեր օրինակ։
7. Նկարիր վաճառասեղան՝ առնվազն երեք տարբեր արհեստների իրերով։
~~~

~~~art
hints
1. Վաճառելու, ուրիշների գործերը տեսնելու և սովորելու համար․ տոնավաճառը նաև տոն էր։ 2. Հանրապետության հրապարակի մոտ․ օրինակ՝ գորգեր, պղնձե սրճեփներ, փորագրված տուփեր, վանակնից զարդեր, դուդուկներ, ժանյակ։ 3. Օրինակ՝ մատրյոշկաներ, Գժել, Խոխլոմա, պալեխյան տուփեր, շալեր, կավե խաղալիքներ։ 4. Մեծ, մանրամասն վաճառասեղան իրերով։ 5. Ափսեների շարքերով, կախված գորգերով, սափորների շարաններով։ 6. Վառ բիծ, որն աչքի է ընկնում, օրինակ՝ կապույտ գժելյան սափոր տաք գույների մեջ։ 7. Քո նկարը։
~~~`,
        ru: `## Зачем нужны ярмарки

Раньше мастера привозили на **ярмарки** горшки, игрушки, ковры и медную посуду. Там они продавали работы, смотрели, что делают в других сёлах, и учились друг у друга. Ярмарка была и праздником: музыка, игры, нарядная одежда.

## Ярмарки сегодня

* **Вернисаж в Ереване** — большой рынок под открытым небом недалеко от площади Республики. По выходным там можно увидеть ковры, медные джезвы, резные шкатулки, украшения из обсидиана, дудуки, картины и кружево.
* **Измайловский рынок в Москве** собирает матрёшек, гжель и хохлому, палехские шкатулки, платки и глиняные игрушки.
* Во многих городах по праздникам проходят **ярмарки ремёсел**, где мастера показывают свою работу.

~~~art
pic carpet ceramic-plate jewellery matryoshka
~~~

## Ярмарка как картина

Ярмарка — прекрасная тема для **многофигурной композиции**:

* **Передний план:** прилавок с изделиями, крупно и подробно.
* **Средний план:** мастер и покупатели, которые беседуют и выбирают.
* **Дальний план:** другие прилавки, навесы, деревья, город.
* Используй **ритм**: ряды тарелок, висящие ковры, вереницы кувшинов.
* Используй **цветовые акценты**: один красный ковёр, золотой поднос, синий гжельский кувшин среди тёплых цветов.

## Нарисуй ярмарочный прилавок

1. На переднем плане нарисуй стол и навес.
2. Расставь на нём изделия рядами: кувшины, тарелки, игрушки. Сзади повесь ковёр.
3. Нарисуй мастера за прилавком и одного-двух покупателей.
4. На дальнем плане нарисуй другие прилавки помельче.
5. Раскрась изделия в цвета их промыслов.

~~~art
perspective modes=one
~~~

~~~art
sketch guide=vp
Нарисуй ярмарочный прилавок в перспективе: линии стола и навеса сходятся в точку схода.
~~~

~~~art
tasks
1. Зачем мастера привозили работы на ярмарку?
2. Где находится ереванский Вернисаж и что там продают? Назови четыре вещи.
3. Изделия каких промыслов можно найти на Измайловском рынке?
4. Что изображают на переднем плане ярмарочной картины?
5. Как создать ритм в сцене ярмарки?
6. Что такое цветовой акцент? Приведи пример.
7. Нарисуй прилавок с изделиями как минимум трёх разных ремёсел.
~~~

~~~art
hints
1. Чтобы продать работы, увидеть изделия других и поучиться; ярмарка была и праздником. 2. Недалеко от площади Республики; например ковры, медные джезвы, резные шкатулки, украшения из обсидиана, дудуки, кружево. 3. Например: матрёшки, гжель, хохлома, палехские шкатулки, платки, глиняные игрушки. 4. Крупный подробный прилавок с изделиями. 5. Рядами тарелок, висящими коврами, вереницами кувшинов. 6. Яркое пятно, которое выделяется, например синий гжельский кувшин среди тёплых цветов. 7. Твой рисунок.
~~~`,
      },
      [
        q(t("At old fairs masters also…", "Հին տոնավաճառներում վարպետները նաև…", "На старых ярмарках мастера ещё и…"), [t("learned from each other", "սովորում էին միմյանցից", "учились друг у друга"), t("built houses", "տներ էին կառուցում", "строили дома"), t("went to school", "դպրոց էին գնում", "ходили в школу")], 0),
        q(t("The Vernissage is a market in…", "Վերնիսաժը շուկա է…", "Вернисаж — это рынок в…"), [t("Moscow", "Մոսկվայում", "Москве"), t("Yerevan", "Երևանում", "Ереване"), t("Tula", "Տուլայում", "Туле")], 1),
        q(t("The foreground of a fair picture shows…", "Տոնավաճառի նկարի առաջին պլանում…", "На переднем плане ярмарочной картины —…"), [t("the sky", "երկինքն է", "небо"), t("distant trees", "հեռավոր ծառերն են", "далёкие деревья"), t("a large, detailed stall", "մեծ, մանրամասն վաճառասեղանն է", "крупный подробный прилавок")], 2),
        q(t("Rows of plates create…", "Ափսեների շարքերը ստեղծում են…", "Ряды тарелок создают…"), [t("rhythm", "ռիթմ", "ритм"), t("silence", "լռություն", "тишину"), t("perspective only", "միայն հեռանկար", "только перспективу")], 0),
        q(t("A blue jug among warm colours is a…", "Կապույտ սափորը տաք գույների մեջ…", "Синий кувшин среди тёплых цветов — это…"), [t("mistake", "սխալ է", "ошибка"), t("colour accent", "գունային շեշտ է", "цветовой акцент"), t("background", "ֆոն է", "фон")], 1),
        q(t("A picture with many people is a … composition.", "Շատ մարդկանցով նկարը … կոմպոզիցիա է։", "Картина со многими людьми — … композиция."), [t("one-figure", "միաֆիգուր", "однофигурная"), t("empty", "դատարկ", "пустая"), t("multi-figure", "բազմաֆիգուր", "многофигурная")], 2),
      ],
    ),
    lesson(
      "souvenir-design",
      ["Designing a souvenir in folk style", "Ժողովրդական ոճով հուշանվերի նախագծում", "Проект сувенира в народном стиле"],
      {
        en: ["Explain what makes a good souvenir", "Use traditional motifs in a modern object", "Design and present a souvenir of your town"],
        hy: ["Բացատրել, թե ինչն է լավ հուշանվերը դարձնում լավ", "Ավանդական մոտիվներն օգտագործել ժամանակակից առարկայում", "Նախագծել և ներկայացնել քո քաղաքի հուշանվերը"],
        ru: ["Объяснять, каким должен быть хороший сувенир", "Использовать традиционные мотивы в современном предмете", "Придумать и представить сувенир своего города"],
      },
      {
        en: `## What is a souvenir?

A **souvenir** is a small object that helps us remember a place. A good souvenir tells something true about that place: its nature, its buildings, its crafts, its holidays.

## Signs of a good souvenir

1. **It is recognizable.** Mount Ararat, a pomegranate, Gzhel blue, a nesting doll: one look tells where it comes from.
2. **It is honest to the craft.** It keeps the colours and motifs of a real tradition.
3. **It is useful or joyful.** A magnet, a bookmark, a cup, a box, a toy, a pendant.
4. **It is well made.** Clean lines, a clear pattern, no extra details.

~~~art
pic matryoshka khokhloma-bowl copper-jug
~~~

## Old motif, new object

Designers take a traditional motif and put it on a modern thing:

* an Armenian carpet pattern on a phone case or a notebook cover;
* a Dymkovo turkey as a fridge magnet;
* a khachkar ornament on a bookmark;
* Gzhel blue on a mug.

The motif must stay respectful: a sacred symbol is not a joke.

~~~art
pic apricot pomegranate arevakhach
Old motif, new object: a pomegranate on a phone case, an arevakhach on a bookmark. What would you choose?
~~~

## Design your souvenir

1. Choose your place: your town, school or region.
2. Choose its sign: a building, a mountain, a fruit, a craft.
3. Choose the object: magnet, bookmark, box, badge.
4. Draw three small sketches, then choose the best one and draw it large.
5. Add colour, a border and a short name. Present it to the class: what it shows and why.

~~~art
sketch guide=frame
~~~

~~~art
tasks
1. What is a souvenir for?
2. Name four signs of a good souvenir.
3. Give two examples of a traditional motif on a modern object.
4. Why must a designer use sacred symbols respectfully?
5. Why do designers draw several small sketches first?
6. Which signs could represent Yerevan on a souvenir? Name three.
7. Design a bookmark with an ornament of your region.
~~~

~~~art
hints
1. To help us remember a place. 2. It is recognizable, honest to the craft, useful or joyful, and well made. 3. For example: a carpet pattern on a notebook, a Dymkovo turkey magnet, Gzhel blue on a mug. 4. Because they are important to people, and a souvenir must not mock them. 5. To compare ideas and choose the best one. 6. For example: Mount Ararat, the Cascade, the pomegranate, apricots, pink tuff buildings. 7. Your design.
~~~`,
        hy: `## Ինչ է հուշանվերը

**Հուշանվերը** փոքր առարկա է, որն օգնում է հիշել որևէ վայր։ Լավ հուշանվերը ճիշտ բան է պատմում այդ վայրի մասին՝ նրա բնության, շենքերի, արհեստների, տոների։

## Լավ հուշանվերի նշանները

1. **Այն ճանաչելի է։** Արարատ լեռը, նուռը, գժելյան կապույտը, մատրյոշկան․ մեկ հայացքից պարզ է, թե որտեղից է։
2. **Այն հավատարիմ է արհեստին։** Պահպանում է իսկական ավանդույթի գույներն ու մոտիվները։
3. **Այն օգտակար է կամ ուրախ։** Մագնիս, էջանիշ, բաժակ, տուփ, խաղալիք, կախազարդ։
4. **Այն լավ է պատրաստված։** Մաքուր գծեր, հստակ նախշ, ավելորդ մանրուքներ չկան։

~~~art
pic matryoshka khokhloma-bowl copper-jug
~~~

## Հին մոտիվ, նոր առարկա

Դիզայներներն ավանդական մոտիվը տեղափոխում են ժամանակակից իրի վրա․

* հայկական գորգի նախշ՝ հեռախոսի պատյանի կամ տետրի կազմի վրա,
* դիմկովյան հնդկահավ՝ սառնարանի մագնիսի տեսքով,
* խաչքարի զարդ՝ էջանիշի վրա,
* գժելյան կապույտ՝ գավաթի վրա։

Մոտիվը պետք է մնա հարգալից․ սրբազան խորհրդանիշը կատակ չէ։

~~~art
pic apricot pomegranate arevakhach
Հին մոտիվ, նոր առարկա․ նուռ հեռախոսի պատյանին, արևախաչ էջանիշի վրա։ Դու ի՞նչ կընտրեիր։
~~~

## Նախագծիր քո հուշանվերը

1. Ընտրիր վայրը՝ քո քաղաքը, դպրոցը կամ մարզը։
2. Ընտրիր նրա նշանը՝ շենք, լեռ, միրգ, արհեստ։
3. Ընտրիր առարկան՝ մագնիս, էջանիշ, տուփ, կրծքանշան։
4. Նկարիր երեք փոքր էսքիզ, հետո ընտրիր լավագույնը և մեծ նկարիր։
5. Ավելացրու գույն, եզրագիծ և կարճ անուն։ Ներկայացրու դասարանին՝ ինչ է պատկերում և ինչու։

~~~art
sketch guide=frame
~~~

~~~art
tasks
1. Ինչի համար է հուշանվերը։
2. Անվանիր լավ հուշանվերի չորս նշան։
3. Բեր ժամանակակից իրի վրա ավանդական մոտիվի երկու օրինակ։
4. Ինչու պետք է դիզայները սրբազան խորհրդանիշներն օգտագործի հարգանքով։
5. Ինչու են դիզայներները նախ նկարում մի քանի փոքր էսքիզ։
6. Ինչ նշաններ կարող են ներկայացնել Երևանը հուշանվերի վրա։ Անվանիր երեքը։
7. Նախագծիր էջանիշ՝ քո մարզի զարդանախշով։
~~~

~~~art
hints
1. Որ օգնի հիշել որևէ վայր։ 2. Ճանաչելի է, հավատարիմ է արհեստին, օգտակար է կամ ուրախ, լավ է պատրաստված։ 3. Օրինակ՝ գորգի նախշ տետրի վրա, դիմկովյան հնդկահավի մագնիս, գժելյան կապույտ գավաթի վրա։ 4. Որովհետև դրանք կարևոր են մարդկանց համար, և հուշանվերը չպետք է ծաղրի դրանք։ 5. Որ համեմատեն գաղափարները և ընտրեն լավագույնը։ 6. Օրինակ՝ Արարատ լեռը, Կասկադը, նուռը, ծիրանը, վարդագույն տուֆե շենքերը։ 7. Քո նախագիծը։
~~~`,
        ru: `## Что такое сувенир

**Сувенир** — небольшая вещь, которая помогает помнить о месте. Хороший сувенир рассказывает о месте что-то правдивое: о его природе, зданиях, ремёслах, праздниках.

## Признаки хорошего сувенира

1. **Он узнаваем.** Гора Арарат, гранат, гжельская синева, матрёшка: с одного взгляда ясно, откуда он.
2. **Он верен ремеслу.** Сохраняет цвета и мотивы настоящей традиции.
3. **Он полезен или радует.** Магнит, закладка, кружка, шкатулка, игрушка, кулон.
4. **Он хорошо сделан.** Чистые линии, ясный узор, нет лишних деталей.

~~~art
pic matryoshka khokhloma-bowl copper-jug
~~~

## Старый мотив, новая вещь

Дизайнеры переносят традиционный мотив на современный предмет:

* узор армянского ковра — на чехол телефона или обложку тетради;
* дымковский индюк — в виде магнита на холодильник;
* орнамент хачкара — на закладку;
* гжельская синева — на кружку.

Мотив должен оставаться уважительным: священный символ — не шутка.

~~~art
pic apricot pomegranate arevakhach
Старый мотив, новая вещь: гранат на чехле телефона, аревахач на закладке. Что выберешь ты?
~~~

## Придумай свой сувенир

1. Выбери место: свой город, школу или край.
2. Выбери его знак: здание, гору, фрукт, ремесло.
3. Выбери предмет: магнит, закладку, шкатулку, значок.
4. Сделай три маленьких эскиза, выбери лучший и нарисуй его крупно.
5. Добавь цвет, кайму и короткое название. Представь классу: что изображено и почему.

~~~art
sketch guide=frame
~~~

~~~art
tasks
1. Для чего нужен сувенир?
2. Назови четыре признака хорошего сувенира.
3. Приведи два примера традиционного мотива на современном предмете.
4. Почему дизайнер должен уважительно обращаться со священными символами?
5. Зачем дизайнеры сначала делают несколько маленьких эскизов?
6. Какие знаки могут представлять Ереван на сувенире? Назови три.
7. Придумай закладку с орнаментом своего края.
~~~

~~~art
hints
1. Чтобы помнить о месте. 2. Узнаваем, верен ремеслу, полезен или радует, хорошо сделан. 3. Например: узор ковра на тетради, магнит с дымковским индюком, гжельская синева на кружке. 4. Потому что они важны для людей, и сувенир не должен над ними смеяться. 5. Чтобы сравнить идеи и выбрать лучшую. 6. Например: гора Арарат, Каскад, гранат, абрикос, здания из розового туфа. 7. Твой проект.
~~~`,
      },
      [
        q(t("A souvenir helps us…", "Հուշանվերն օգնում է…", "Сувенир помогает…"), [t("remember a place", "հիշել որևէ վայր", "помнить о месте"), t("count money", "փող հաշվել", "считать деньги"), t("tell the time", "ժամն իմանալ", "узнать время")], 0),
        q(t("A good souvenir is…", "Լավ հուշանվերը…", "Хороший сувенир…"), [t("random", "պատահական է", "случайный"), t("recognizable", "ճանաչելի է", "узнаваемый"), t("as big as possible", "որքան հնարավոր է մեծ է", "как можно больше")], 1),
        q(t("A Dymkovo turkey works well as…", "Դիմկովյան հնդկահավը լավ է սազում որպես…", "Дымковский индюк хорошо подходит как…"), [t("a door", "դուռ", "дверь"), t("a carpet", "գորգ", "ковёр"), t("a fridge magnet", "սառնարանի մագնիս", "магнит на холодильник")], 2),
        q(t("Sacred symbols on souvenirs must be used…", "Սրբազան խորհրդանիշները հուշանվերների վրա պետք է օգտագործել…", "Священные символы на сувенирах нужно использовать…"), [t("respectfully", "հարգանքով", "уважительно"), t("as jokes", "որպես կատակ", "как шутку"), t("upside down", "գլխիվայր", "вверх ногами")], 0),
        q(t("Several small sketches help to…", "Մի քանի փոքր էսքիզն օգնում է…", "Несколько маленьких эскизов помогают…"), [t("waste paper", "թուղթ վատնել", "тратить бумагу"), t("choose the best idea", "ընտրել լավագույն գաղափարը", "выбрать лучшую идею"), t("skip colour", "գույնը բաց թողնել", "обойтись без цвета")], 1),
        q(t("A good souvenir has…", "Լավ հուշանվերն ունի…", "У хорошего сувенира…"), [t("many extra details", "շատ ավելորդ մանրուքներ", "много лишних деталей"), t("no pattern", "նախշ չունի", "нет узора"), t("clean lines and a clear pattern", "մաքուր գծեր և հստակ նախշ", "чистые линии и ясный узор")], 2),
      ],
    ),
  ],
};
