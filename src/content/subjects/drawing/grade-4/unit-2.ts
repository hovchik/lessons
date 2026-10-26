import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("Ancient cities", "Հին քաղաքներ", "Древние города нашей земли"),
  summary: t(
    "Fortress towns, ancient Erebuni, temples and monasteries, old Moscow, the Armenian miniature, icons and frescoes.",
    "Ամրոց-քաղաքներ, հին Էրեբունին, տաճարներ և վանքեր, հին Մոսկվան, հայկական մանրանկարչությունը, սրբապատկերներ և որմնանկարներ։",
    "Города-крепости, древний Эребуни, храмы и монастыри, старая Москва, армянская миниатюра, иконы и фрески.",
  ),
  lessons: [
    lesson(
      "fortress-town",
      ["A fortress town: Amberd and the Novgorod kremlin", "Ամրոց-քաղաք․ Ամբերդ և Նովգորոդի կրեմլ", "Город-крепость: Амберд и Новгородский кремль"],
      {
        en: ["Know why and how ancient fortresses were built", "Name the parts of a fortress: walls, towers, gates", "Draw or build a paper model of a fortress"],
        hy: ["Իմանալ, թե ինչու և ինչպես էին կառուցվում հին ամրոցները", "Անվանել ամրոցի մասերը՝ պարիսպներ, աշտարակներ, դարպասներ", "Նկարել կամ թղթից պատրաստել ամրոցի մակետ"],
        ru: ["Знать, зачем и как строили древние крепости", "Называть части крепости: стены, башни, ворота", "Нарисовать крепость или сделать её макет из бумаги"],
      },
      {
        en: `## A city behind walls

Long ago a city had to protect itself from enemies. So people built it on a hill, a rock or a river bend and surrounded it with **walls**. The strong inner part of a Russian city was called the **kremlin**.

## Amberd

**Amberd** stands high on the slope of Mount Aragats, on a cape between two deep gorges. Its name means «fortress in the clouds». It has thick stone walls with round towers, a palace, a church and baths. The gorges protected it from three sides, so walls were built mainly on the open side.

~~~art
pic fortress
~~~

## The Novgorod kremlin

The **Novgorod kremlin** stands on the bank of the Volkhov river. Its red brick walls have tall towers with pointed roofs. Inside is the old **St Sophia Cathedral** with golden and silver domes.

~~~art
pic kremlin
~~~

## Parts of a fortress

| Part | What for |
|---|---|
| **wall** | stops enemies |
| **battlements** | the «teeth» on top of the wall: defenders hide behind them |
| **tower** | to see far and to shoot from |
| **gate** | the main entrance, strongly guarded |
| **moat** | a ditch with water in front of the wall |

Notice: a fortress looks **heavy, strong and calm**. The walls are thick, windows are narrow, and the towers stand like guards.

## Build a paper fortress

1. Cut strips of card for the walls; cut battlements along the top.
2. Roll tubes for the round towers; add cone roofs.
3. Join the walls and towers in a ring on a base.
4. Add a gate, a church or palace inside, and paint the stones.

~~~art
net
A tower starts as a flat net. Fold it on screen, then cut a real one from paper and add battlements.
~~~

~~~art
tasks
1. Why were ancient cities surrounded by walls?
2. What is a kremlin?
3. Where is Amberd and what does its name mean?
4. How did the gorges help to protect Amberd?
5. What are battlements?
6. Why does a fortress look heavy and calm?
7. Draw or build a fortress with walls, towers and a gate.
~~~

~~~art
hints
1. To protect them from enemies. 2. The strong inner part of a Russian city surrounded by walls. 3. On the slope of Mount Aragats; «fortress in the clouds». 4. They protected it from three sides. 5. The «teeth» on top of the wall. 6. Its walls are thick, windows narrow, towers stand like guards. 7. Your work.
~~~`,
        hy: `## Քաղաք պարիսպների հետևում

Վաղուց քաղաքը պետք է պաշտպաներ իրեն թշնամիներից։ Ուստի մարդիկ այն կառուցում էին բլրի, ժայռի կամ գետի ոլորանի վրա և շրջապատում էին **պարիսպներով**։ Ռուսական քաղաքի ամուր ներքին մասը կոչվում էր **կրեմլ**։

## Ամբերդ

**Ամբերդը** կանգնած է Արագած լեռան լանջին բարձր, երկու խոր կիրճերի միջև գտնվող հրվանդանի վրա։ Նրա անունը նշանակում է «ամպերի բերդ»։ Այն ունի կլոր աշտարակներով հաստ քարե պարիսպներ, պալատ, եկեղեցի և բաղնիք։ Կիրճերը պաշտպանում էին այն երեք կողմից, ուստի պարիսպները կառուցվել են հիմնականում բաց կողմում։

~~~art
pic fortress
~~~

## Նովգորոդի կրեմլ

**Նովգորոդի կրեմլը** կանգնած է Վոլխով գետի ափին։ Նրա կարմիր աղյուսե պարիսպներն ունեն սրածայր տանիքներով բարձր աշտարակներ։ Ներսում հին **Սուրբ Սոֆիայի տաճարն** է՝ ոսկե և արծաթե գմբեթներով։

~~~art
pic kremlin
~~~

## Ամրոցի մասերը

| Մաս | Ինչի համար |
|---|---|
| **պարիսպ** | կանգնեցնում է թշնամուն |
| **ատամնավոր եզր** | պարսպի վրայի «ատամները»՝ պաշտպանները թաքնվում են դրանց հետևում |
| **աշտարակ** | հեռուն տեսնելու և կրակելու համար |
| **դարպաս** | գլխավոր մուտքը, ուժեղ պահպանվող |
| **խրամ** | ջրով փոս պարսպի առջև |

Նկատի՛ր․ ամրոցը թվում է **ծանր, ամուր և հանդարտ**։ Պատերը հաստ են, պատուհանները՝ նեղ, իսկ աշտարակները կանգնած են պահակների պես։

## Թղթից կառուցի՛ր ամրոց

1. Ստվարաթղթից կտրի՛ր շերտեր պարիսպների համար, վերևի եզրով կտրի՛ր ատամներ։
2. Կլոր աշտարակների համար փաթաթի՛ր խողովակներ, ավելացրու՛ կոնաձև տանիքներ։
3. Հիմքի վրա պարիսպներն ու աշտարակները միացրու՛ օղակով։
4. Ավելացրու՛ դարպաս, ներսում՝ եկեղեցի կամ պալատ և ներկի՛ր քարերը։

~~~art
net
Աշտարակը սկսվում է հարթ բացվածքից։ Ծալի՛ր այն էկրանին, հետո կտրի՛ր իսկականը թղթից և ավելացրու ատամնավոր պարիսպ։
~~~

~~~art
tasks
1. Ինչո՞ւ էին հին քաղաքները շրջապատում պարիսպներով։
2. Ի՞նչ է կրեմլը։
3. Որտե՞ղ է Ամբերդը, և ի՞նչ է նշանակում նրա անունը։
4. Ինչպե՞ս էին կիրճերն օգնում պաշտպանել Ամբերդը։
5. Ի՞նչ է ատամնավոր եզրը։
6. Ինչո՞ւ է ամրոցը թվում ծանր և հանդարտ։
7. Նկարի՛ր կամ կառուցի՛ր ամրոց՝ պարիսպներով, աշտարակներով և դարպասով։
~~~

~~~art
hints
1. Թշնամիներից պաշտպանելու համար։ 2. Ռուսական քաղաքի ամուր ներքին մասը՝ պարիսպներով շրջապատված։ 3. Արագած լեռան լանջին, «ամպերի բերդ»։ 4. Պաշտպանում էին այն երեք կողմից։ 5. Պարսպի վրայի «ատամները»։ 6. Պատերը հաստ են, պատուհանները՝ նեղ, աշտարակները կանգնած են պահակների պես։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Город за стенами

Давно городу приходилось защищаться от врагов. Поэтому его строили на холме, скале или излучине реки и окружали **стенами**. Крепкая внутренняя часть русского города называлась **кремлём**.

## Амберд

**Амберд** стоит высоко на склоне горы Арагац, на мысу между двумя глубокими ущельями. Его название значит «крепость в облаках». У него толстые каменные стены с круглыми башнями, дворец, церковь и баня. Ущелья защищали его с трёх сторон, поэтому стены строили в основном с открытой стороны.

~~~art
pic fortress
~~~

## Новгородский кремль

**Новгородский кремль** стоит на берегу реки Волхов. Его красные кирпичные стены имеют высокие башни с острыми крышами. Внутри — древний **Софийский собор** с золотыми и серебряными куполами.

~~~art
pic kremlin
~~~

## Части крепости

| Часть | Для чего |
|---|---|
| **стена** | останавливает врага |
| **зубцы** | «зубы» наверху стены: за ними прячутся защитники |
| **башня** | чтобы видеть далеко и стрелять |
| **ворота** | главный вход, сильно охраняемый |
| **ров** | канава с водой перед стеной |

Заметь: крепость выглядит **тяжёлой, сильной и спокойной**. Стены толстые, окна узкие, а башни стоят, как стражи.

## Построй бумажную крепость

1. Вырежи из картона полосы для стен; по верху вырежи зубцы.
2. Сверни трубочки для круглых башен; добавь крыши-конусы.
3. Соедини стены и башни кольцом на основе.
4. Добавь ворота, внутри — храм или дворец, раскрась камни.

~~~art
net
Башня начинается с плоской развёртки. Сложи её на экране, потом вырежи настоящую из бумаги и добавь зубцы.
~~~

~~~art
tasks
1. Зачем древние города окружали стенами?
2. Что такое кремль?
3. Где находится Амберд и что значит его название?
4. Как ущелья помогали защищать Амберд?
5. Что такое зубцы?
6. Почему крепость выглядит тяжёлой и спокойной?
7. Нарисуй или построй крепость со стенами, башнями и воротами.
~~~

~~~art
hints
1. Чтобы защитить их от врагов. 2. Крепкая внутренняя часть русского города, окружённая стенами. 3. На склоне горы Арагац; «крепость в облаках». 4. Защищали его с трёх сторон. 5. «Зубы» наверху стены. 6. Стены толстые, окна узкие, башни стоят, как стражи. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Amberd stands on the slope of…", "Ամբերդը կանգնած է … լանջին։", "Амберд стоит на склоне…"), [t("Mount Aragats", "Արագած լեռան", "горы Арагац"), t("Mount Elbrus", "Էլբրուս լեռան", "горы Эльбрус"), t("a sand dune", "ավազաբլրի", "песчаного бархана")], 0),
        q(t("The strong inner part of a Russian city is a…", "Ռուսական քաղաքի ամուր ներքին մասը…", "Крепкая внутренняя часть русского города —"), [t("market", "շուկա է", "рынок"), t("kremlin", "կրեմլ է", "кремль"), t("glkhatun", "գլխատուն է", "глхатун")], 1),
        q(t("A ditch with water in front of a wall is a…", "Պարսպի առջևի ջրով փոսը…", "Канава с водой перед стеной — это…"), [t("tower", "աշտարակ է", "башня"), t("gate", "դարպաս է", "ворота"), t("moat", "խրամ է", "ров")], 2),
        q(t("The name Amberd means…", "Ամբերդ անունը նշանակում է…", "Название Амберд значит…"), [t("fortress in the clouds", "ամպերի բերդ", "крепость в облаках"), t("city of apples", "խնձորների քաղաք", "город яблок"), t("river bend", "գետի ոլորան", "излучина реки")], 0),
        q(t("The Novgorod kremlin stands on the river…", "Նովգորոդի կրեմլը կանգնած է … ափին։", "Новгородский кремль стоит на реке…"), [t("Hrazdan", "Հրազդան գետի", "Раздан"), t("Volkhov", "Վոլխով գետի", "Волхов"), t("Nile", "Նեղոս գետի", "Нил")], 1),
        q(t("A fortress looks…", "Ամրոցը թվում է…", "Крепость выглядит…"), [t("light and airy", "թեթև և օդային", "лёгкой и воздушной"), t("made of glass", "ապակուց", "стеклянной"), t("heavy and strong", "ծանր և ամուր", "тяжёлой и сильной")], 2),
      ],
    ),
    lesson(
      "erebuni-yerevan",
      ["Erebuni: the birthplace of Yerevan", "Էրեբունի․ Երևանի բնօրրանը", "Эребуни: начало Еревана"],
      {
        en: ["Know when and by whom Erebuni was founded", "Describe the fortress, its inscription and wall paintings", "Draw the fortress on the hill and old Yerevan around it"],
        hy: ["Իմանալ, թե երբ և ում կողմից է հիմնադրվել Էրեբունին", "Նկարագրել ամրոցը, նրա արձանագրությունը և որմնանկարները", "Նկարել բլրի վրայի ամրոցը և շուրջը հին Երևանը"],
        ru: ["Знать, когда и кем основан Эребуни", "Описывать крепость, её надпись и настенные росписи", "Нарисовать крепость на холме и старый Ереван вокруг"],
      },
      {
        en: `## A city older than Rome

In **782 BC** King **Argishti I** of Urartu built the fortress **Erebuni** on the hill of Arin Berd. This year is counted as the birthday of **Yerevan**, so Yerevan is older than Rome.

We know the date because a **cuneiform inscription** was found on a stone. It tells that Argishti built this fortress for the greatness of the land. Cuneiform is writing made of small wedge-shaped marks pressed or cut into clay or stone.

~~~art
pic erebuni
~~~

## What was inside

| Part | What we know |
|---|---|
| **walls** | thick walls of stone and mud brick with towers |
| **palace** | rooms around a courtyard with columns |
| **temple** | a temple of the god Khaldi |
| **wall paintings** | red, blue, black and white patterns, figures of gods, lions and bulls |
| **storerooms** | huge clay jars for wine and grain |

Today on the hill there is the **Erebuni Museum**, and part of the walls and paintings was restored.

## How Urartian painters worked

- They used few colours: red, blue, black, white.
- Figures were shown **flat**, in profile, in strict rows.
- Borders of repeated shapes framed the scenes: squares, zigzags, rosettes.

~~~art
palette earth
~~~

~~~art
pattern layout=strip rhythm=repeat palettes=egypt,armenian motifs=rhombus,triangle,circle,sun
Urartian painters used only a few earthy colours and strict geometric friezes. Build one.
~~~

## Draw Erebuni

1. Draw the hill with a low horizon: the fortress must look high and strong.
2. Draw the walls with towers following the shape of the hill.
3. Add the palace with columns inside.
4. Make a border under your picture in the Urartian style: red, blue, black and white.

~~~art
sketch paper=cream guide=horizon
~~~

~~~art
tasks
1. Who founded Erebuni and when?
2. Why is Yerevan called older than Rome?
3. What is cuneiform?
4. Which colours did Urartian painters use?
5. How did they show figures?
6. What is on the hill of Arin Berd today?
7. Draw Erebuni on its hill with an Urartian border.
~~~

~~~art
hints
1. King Argishti I, in 782 BC. 2. Its birthday is counted from 782 BC, and Rome was founded later. 3. Writing made of small wedge-shaped marks. 4. Red, blue, black and white. 5. Flat, in profile, in strict rows. 6. The Erebuni Museum and restored walls. 7. Your work.
~~~`,
        hy: `## Հռոմից հին քաղաք

**Ք․ ա․ 782** թվականին Ուրարտուի **Արգիշտի Առաջին** թագավորն Արին բերդ բլրի վրա կառուցեց **Էրեբունի** ամրոցը։ Այս տարին համարվում է **Երևանի** ծննդյան տարին, ուստի Երևանը Հռոմից հին է։

Մենք գիտենք թվականը, որովհետև քարի վրա գտնվել է **սեպագիր արձանագրություն**։ Այն պատմում է, որ Արգիշտին կառուցել է այս ամրոցն երկրի մեծության համար։ Սեպագիրը կավի կամ քարի վրա սեղմված կամ փորված փոքր սեպաձև նշաններից կազմված գիր է։

~~~art
pic erebuni
~~~

## Ինչ կար ներսում

| Մաս | Ինչ գիտենք |
|---|---|
| **պարիսպներ** | քարից և հում աղյուսից հաստ պարիսպներ աշտարակներով |
| **պալատ** | սենյակներ սյուներով բակի շուրջը |
| **տաճար** | Խալդի աստծո տաճարը |
| **որմնանկարներ** | կարմիր, կապույտ, սև և սպիտակ նախշեր, աստվածների, առյուծների և ցուլերի պատկերներ |
| **մառաններ** | հսկա կավե կարասներ գինու և հացահատիկի համար |

Այսօր բլրի վրա **Էրեբունի թանգարանն** է, իսկ պարիսպների և որմնանկարների մի մասը վերականգնվել է։

## Ինչպես էին աշխատում ուրարտական նկարիչները

- Օգտագործում էին քիչ գույներ՝ կարմիր, կապույտ, սև, սպիտակ։
- Պատկերները ցույց էին տալիս **հարթ**, պրոֆիլով, խիստ շարքերով։
- Տեսարանները շրջանակում էին կրկնվող ձևերի եզրագծեր՝ քառակուսիներ, զիգզագներ, վարդյակներ։

~~~art
palette earth
~~~

~~~art
pattern layout=strip rhythm=repeat palettes=egypt,armenian motifs=rhombus,triangle,circle,sun
Ուրարտական նկարիչները օգտագործում էին միայն մի քանի հողագույն ներկ և խիստ երկրաչափական զարդագոտիներ։ Կառուցի՛ր մեկը։
~~~

## Նկարի՛ր Էրեբունին

1. Նկարի՛ր բլուրը ցածր հորիզոնով՝ ամրոցը պետք է բարձր և ամուր երևա։
2. Նկարի՛ր աշտարակներով պարիսպները՝ հետևելով բլրի ձևին։
3. Ներսում ավելացրու՛ սյուներով պալատը։
4. Նկարիդ տակ ուրարտական ոճով եզրագիծ արա՛՝ կարմիր, կապույտ, սև և սպիտակ։

~~~art
sketch paper=cream guide=horizon
~~~

~~~art
tasks
1. Ո՞վ և ե՞րբ է հիմնադրել Էրեբունին։
2. Ինչո՞ւ են ասում, որ Երևանը Հռոմից հին է։
3. Ի՞նչ է սեպագիրը։
4. Ի՞նչ գույներ էին օգտագործում ուրարտական նկարիչները։
5. Ինչպե՞ս էին նրանք ցույց տալիս պատկերները։
6. Ի՞նչ կա այսօր Արին բերդ բլրի վրա։
7. Նկարի՛ր Էրեբունին իր բլրի վրա՝ ուրարտական եզրագծով։
~~~

~~~art
hints
1. Արգիշտի Առաջին թագավորը, ք․ ա․ 782 թվականին։ 2. Նրա ծննդյան տարին համարվում է ք․ ա․ 782-ը, իսկ Հռոմը հիմնադրվել է ավելի ուշ։ 3. Փոքր սեպաձև նշաններից կազմված գիր։ 4. Կարմիր, կապույտ, սև և սպիտակ։ 5. Հարթ, պրոֆիլով, խիստ շարքերով։ 6. Էրեբունի թանգարանը և վերականգնված պարիսպները։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Город старше Рима

В **782 году до н. э.** царь Урарту **Аргишти I** построил на холме Арин-Берд крепость **Эребуни**. Этот год считается днём рождения **Еревана**, поэтому Ереван старше Рима.

Мы знаем дату, потому что на камне нашли **клинописную надпись**. Она рассказывает, что Аргишти построил эту крепость для величия страны. Клинопись — это письмо из маленьких клиновидных знаков, выдавленных или высеченных на глине или камне.

~~~art
pic erebuni
~~~

## Что было внутри

| Часть | Что мы знаем |
|---|---|
| **стены** | толстые стены из камня и сырцового кирпича с башнями |
| **дворец** | комнаты вокруг двора с колоннами |
| **храм** | храм бога Халди |
| **росписи** | красные, синие, чёрные и белые узоры, фигуры богов, львов и быков |
| **кладовые** | огромные глиняные карасы для вина и зерна |

Сегодня на холме находится **музей «Эребуни»**, а часть стен и росписей восстановлена.

## Как работали урартские художники

- Использовали мало цветов: красный, синий, чёрный, белый.
- Фигуры изображали **плоскими**, в профиль, строгими рядами.
- Сцены обрамляли бордюры из повторяющихся форм: квадратов, зигзагов, розеток.

~~~art
palette earth
~~~

~~~art
pattern layout=strip rhythm=repeat palettes=egypt,armenian motifs=rhombus,triangle,circle,sun
Урартские художники брали всего несколько земляных красок и строгие геометрические фризы. Собери такой фриз.
~~~

## Нарисуй Эребуни

1. Нарисуй холм с низким горизонтом: крепость должна казаться высокой и сильной.
2. Нарисуй стены с башнями по форме холма.
3. Внутри добавь дворец с колоннами.
4. Под рисунком сделай бордюр в урартском стиле: красный, синий, чёрный и белый.

~~~art
sketch paper=cream guide=horizon
~~~

~~~art
tasks
1. Кто и когда основал Эребуни?
2. Почему говорят, что Ереван старше Рима?
3. Что такое клинопись?
4. Какие цвета использовали урартские художники?
5. Как они изображали фигуры?
6. Что сегодня находится на холме Арин-Берд?
7. Нарисуй Эребуни на холме с урартским бордюром.
~~~

~~~art
hints
1. Царь Аргишти I, в 782 году до н. э. 2. Его днём рождения считается 782 год до н. э., а Рим основан позже. 3. Письмо из маленьких клиновидных знаков. 4. Красный, синий, чёрный и белый. 5. Плоскими, в профиль, строгими рядами. 6. Музей «Эребуни» и восстановленные стены. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Erebuni was founded in…", "Էրեբունին հիմնադրվել է…", "Эребуни основан в…"), [t("782 BC", "ք․ ա․ 782 թվականին", "782 году до н. э."), t("1967", "1967 թվականին", "1967 году"), t("451", "451 թվականին", "451 году")], 0),
        q(t("Erebuni was founded by…", "Էրեբունին հիմնադրել է…", "Эребуни основал…"), [t("Tigran the Great", "Տիգրան Մեծը", "Тигран Великий"), t("Argishti I", "Արգիշտի Առաջինը", "Аргишти I"), t("Toros Roslin", "Թորոս Ռոսլինը", "Торос Рослин")], 1),
        q(t("Cuneiform is writing made of…", "Սեպագիրը կազմված է…", "Клинопись состоит из…"), [t("pictures of animals only", "միայն կենդանիների պատկերներից", "только рисунков животных"), t("Latin letters", "լատինական տառերից", "латинских букв"), t("wedge-shaped marks", "սեպաձև նշաններից", "клиновидных знаков")], 2),
        q(t("Urartian painters showed figures…", "Ուրարտական նկարիչները պատկերները ցույց էին տալիս…", "Урартские художники изображали фигуры…"), [t("flat, in profile", "հարթ, պրոֆիլով", "плоскими, в профиль"), t("in 3D", "ծավալով", "объёмными"), t("as photos", "լուսանկարի պես", "как на фото")], 0),
        q(t("Yerevan is older than…", "Երևանը հին է…", "Ереван старше…"), [t("Erebuni", "Էրեբունուց", "Эребуни"), t("Rome", "Հռոմից", "Рима"), t("Urartu", "Ուրարտուից", "Урарту")], 1),
        q(t("Which colour is NOT among the main Urartian colours?", "Ո՞ր գույնը չկա ուրարտական հիմնական գույների մեջ։", "Какого цвета НЕТ среди основных урартских?"), [t("Red", "Կարմիրը", "Красного"), t("Blue", "Կապույտը", "Синего"), t("Pink", "Վարդագույնը", "Розового")], 2),
      ],
    ),
    lesson(
      "temples-monasteries",
      ["Temples and monasteries: Geghard, Haghpat, Kizhi", "Տաճարներ և վանքեր․ Գեղարդ, Հաղպատ, Կիժի", "Храмы и монастыри: Гегард, Ахпат, Кижи"],
      {
        en: ["Know famous monasteries of Armenia and churches of Russia", "Compare the silhouettes: the cone dome and the onion dome", "Draw a monastery in its landscape"],
        hy: ["Իմանալ Հայաստանի հայտնի վանքերը և Ռուսաստանի եկեղեցիները", "Համեմատել ուրվագծերը՝ կոնաձև և սոխաձև գմբեթներ", "Նկարել վանք իր բնապատկերում"],
        ru: ["Знать известные монастыри Армении и храмы России", "Сравнивать силуэты: конусный купол и луковичная глава", "Нарисовать монастырь в его пейзаже"],
      },
      {
        en: `## Stone and wood that pray

Monasteries were not only places of prayer. They were also schools, libraries and workshops where books were copied and painted.

## Monasteries of Armenia

| Monastery | What is special |
|---|---|
| **Geghard** | partly **carved into the rock** of a gorge: some halls are cut right in the mountain; a spring flows inside |
| **Haghpat** | in the Lori region, founded in the 10th century; churches, a library and a bell tower on a high plateau above the Debed gorge |

Both monasteries are on the **UNESCO World Heritage** list.

~~~art
pic armenian-church khachkar
~~~

## Churches of Russia

| Church | What is special |
|---|---|
| **Kizhi** | on an island in Lake Onega; the wooden Church of the Transfiguration has 22 domes covered with wooden «scales» |
| **Trinity Lavra of St Sergius** | a big monastery in Sergiev Posad with white walls and blue and golden domes |

~~~art
pic st-basil
~~~

## Two silhouettes

| | Armenian church | Russian church |
|---|---|---|
| **dome** | a **cone** on a round or many-sided drum | an **onion** dome, often many domes |
| **material** | tuff and basalt | white stone, brick or wood |
| **decoration** | stone carving: crosses, plants, birds | carved wood, painted tiles, gilded domes |
| **mood** | strict and strong, like the mountains | bright and festive, rising like a flame |

~~~art
pic mode=silhouette armenian-church st-basil gothic pagoda
Two silhouettes, and more: a cone dome or an onion dome? Guess the building, then tap to check.
~~~

## Draw a monastery

1. Choose the monastery and its place: a gorge, a plateau or an island.
2. Draw the main church, then the smaller buildings around it.
3. Show the silhouette clearly against the sky.
4. Paint the stone or wood colour, and the landscape around.

~~~art
steps armenian-church
~~~

~~~art
tasks
1. What else were monasteries besides places of prayer?
2. What is special about Geghard?
3. Where is Haghpat?
4. How many domes does the Transfiguration Church in Kizhi have?
5. Compare the domes of Armenian and Russian churches.
6. Which list are Geghard and Haghpat on?
7. Draw a monastery in its landscape.
~~~

~~~art
hints
1. Schools, libraries and workshops. 2. It is partly carved into the rock, with a spring inside. 3. In the Lori region, above the Debed gorge. 4. 22. 5. Armenian: a cone on a drum; Russian: onion domes, often many. 6. The UNESCO World Heritage list. 7. Your work.
~~~`,
        hy: `## Աղոթող քար և փայտ

Վանքերը միայն աղոթքի վայրեր չէին։ Դրանք նաև դպրոցներ, գրադարաններ և արհեստանոցներ էին, որտեղ գրքեր էին ընդօրինակում և նկարազարդում։

## Հայաստանի վանքերը

| Վանք | Ինչն է յուրահատուկ |
|---|---|
| **Գեղարդ** | մասամբ **փորված է կիրճի ժայռի մեջ**՝ որոշ սրահներ կտրված են հենց լեռան մեջ, ներսում աղբյուր է հոսում |
| **Հաղպատ** | Լոռու մարզում, հիմնադրվել է 10-րդ դարում, եկեղեցիներ, մատենադարան և զանգակատուն Դեբեդի կիրճի վերևում բարձր սարահարթի վրա |

Երկու վանքերն էլ ընդգրկված են **ՅՈՒՆԵՍԿՕ-ի Համաշխարհային ժառանգության** ցանկում։

~~~art
pic armenian-church khachkar
~~~

## Ռուսաստանի եկեղեցիները

| Եկեղեցի | Ինչն է յուրահատուկ |
|---|---|
| **Կիժի** | Օնեգա լճի կղզում, փայտե Պայծառակերպության եկեղեցին ունի 22 գմբեթ՝ ծածկված փայտե «թեփուկներով» |
| **Սուրբ Սերգիի Երրորդություն լավրա** | մեծ վանք Սերգիև Պոսադում՝ սպիտակ պատերով և կապույտ ու ոսկե գմբեթներով |

~~~art
pic st-basil
~~~

## Երկու ուրվագիծ

| | Հայկական եկեղեցի | Ռուսական եկեղեցի |
|---|---|---|
| **գմբեթ** | **կոն** կլոր կամ բազմանիստ թմբուկի վրա | **սոխաձև** գմբեթ, հաճախ շատ գմբեթներ |
| **նյութ** | տուֆ և բազալտ | սպիտակ քար, աղյուս կամ փայտ |
| **զարդարանք** | քարի քանդակ՝ խաչեր, բույսեր, թռչուններ | փորագրված փայտ, ներկված սալիկներ, ոսկեզօծ գմբեթներ |
| **տրամադրություն** | խիստ և ամուր, ինչպես լեռները | վառ և տոնական, բոցի պես վեր խոյացող |

~~~art
pic mode=silhouette armenian-church st-basil gothic pagoda
Երկու ուրվագիծ և ավելին․ կոնաձև գմբե՞թ, թե՞ սոխաձև։ Գուշակի՛ր շենքը, հետո հպի՛ր՝ ստուգելու համար։
~~~

## Նկարի՛ր վանք

1. Ընտրի՛ր վանքը և նրա տեղը՝ կիրճ, սարահարթ կամ կղզի։
2. Նկարի՛ր գլխավոր եկեղեցին, հետո՝ նրա շուրջը փոքր շենքերը։
3. Ուրվագիծը հստակ ցույց տուր երկնքի ֆոնին։
4. Ներկի՛ր քարի կամ փայտի գույնը և շրջակա բնապատկերը։

~~~art
steps armenian-church
~~~

~~~art
tasks
1. Ի՞նչ էին նաև վանքերը, բացի աղոթքի վայր լինելուց։
2. Ինչո՞վ է յուրահատուկ Գեղարդը։
3. Որտե՞ղ է Հաղպատը։
4. Քանի՞ գմբեթ ունի Կիժիի Պայծառակերպության եկեղեցին։
5. Համեմատի՛ր հայկական և ռուսական եկեղեցիների գմբեթները։
6. Ո՞ր ցանկում են ընդգրկված Գեղարդը և Հաղպատը։
7. Նկարի՛ր վանք իր բնապատկերում։
~~~

~~~art
hints
1. Դպրոցներ, գրադարաններ և արհեստանոցներ։ 2. Այն մասամբ փորված է ժայռի մեջ, ներսում աղբյուր կա։ 3. Լոռու մարզում՝ Դեբեդի կիրճի վերևում։ 4. 22։ 5. Հայկականը՝ կոն թմբուկի վրա, ռուսականը՝ սոխաձև, հաճախ շատ գմբեթներ։ 6. ՅՈՒՆԵՍԿՕ-ի Համաշխարհային ժառանգության ցանկում։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Камень и дерево, которые молятся

Монастыри были не только местами молитвы. Это были также школы, библиотеки и мастерские, где переписывали и украшали книги.

## Монастыри Армении

| Монастырь | Чем особенный |
|---|---|
| **Гегард** | частично **высечен в скале** ущелья: некоторые залы вырублены прямо в горе; внутри течёт родник |
| **Ахпат** | в Лори, основан в X веке; церкви, книгохранилище и колокольня на высоком плато над ущельем Дебеда |

Оба монастыря входят в список **Всемирного наследия ЮНЕСКО**.

~~~art
pic armenian-church khachkar
~~~

## Храмы России

| Храм | Чем особенный |
|---|---|
| **Кижи** | на острове в Онежском озере; деревянная Преображенская церковь имеет 22 главы, покрытые деревянной «чешуёй» |
| **Троице-Сергиева лавра** | большой монастырь в Сергиевом Посаде с белыми стенами и синими и золотыми куполами |

~~~art
pic st-basil
~~~

## Два силуэта

| | Армянская церковь | Русская церковь |
|---|---|---|
| **купол** | **конус** на круглом или многогранном барабане | **луковичная** глава, часто много глав |
| **материал** | туф и базальт | белый камень, кирпич или дерево |
| **украшение** | резьба по камню: кресты, растения, птицы | резное дерево, расписные изразцы, золочёные купола |
| **настроение** | строгое и мощное, как горы | яркое и праздничное, устремлённое вверх, как пламя |

~~~art
pic mode=silhouette armenian-church st-basil gothic pagoda
Два силуэта и не только: шатровый купол или луковица? Угадай здание и нажми, чтобы проверить.
~~~

## Нарисуй монастырь

1. Выбери монастырь и его место: ущелье, плато или остров.
2. Нарисуй главный храм, затем небольшие постройки вокруг.
3. Чётко покажи силуэт на фоне неба.
4. Напиши цвет камня или дерева и окружающий пейзаж.

~~~art
steps armenian-church
~~~

~~~art
tasks
1. Чем ещё были монастыри, кроме мест молитвы?
2. Чем особенный Гегард?
3. Где находится Ахпат?
4. Сколько глав у Преображенской церкви в Кижах?
5. Сравни купола армянских и русских храмов.
6. В какой список входят Гегард и Ахпат?
7. Нарисуй монастырь в его пейзаже.
~~~

~~~art
hints
1. Школами, библиотеками и мастерскими. 2. Он частично высечен в скале, внутри есть родник. 3. В Лори, над ущельем Дебеда. 4. 22. 5. Армянский — конус на барабане; русский — луковичные главы, часто много. 6. В список Всемирного наследия ЮНЕСКО. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Geghard is partly…", "Գեղարդը մասամբ…", "Гегард частично…"), [t("carved into the rock", "փորված է ժայռի մեջ", "высечен в скале"), t("made of glass", "ապակուց է", "из стекла"), t("under water", "ջրի տակ է", "под водой")], 0),
        q(t("The Kizhi church is made of…", "Կիժիի եկեղեցին պատրաստված է…", "Церковь в Кижах сделана из…"), [t("basalt", "բազալտից", "базальта"), t("wood", "փայտից", "дерева"), t("ice", "սառույցից", "льда")], 1),
        q(t("An Armenian church dome is shaped like a…", "Հայկական եկեղեցու գմբեթը նման է…", "Купол армянской церкви похож на…"), [t("ball", "գնդի", "шар"), t("onion", "սոխի", "луковицу"), t("cone", "կոնի", "конус")], 2),
        q(t("Haghpat is in the region of…", "Հաղպատը գտնվում է…", "Ахпат находится в…"), [t("Lori", "Լոռու մարզում", "Лори"), t("Syunik", "Սյունիքի մարզում", "Сюнике"), t("Moscow", "Մոսկվայում", "Москве")], 0),
        q(t("Many onion domes are typical of…", "Շատ սոխաձև գմբեթները բնորոշ են…", "Много луковичных глав характерно для…"), [t("Urartian palaces", "ուրարտական պալատներին", "урартских дворцов"), t("Russian churches", "ռուսական եկեղեցիներին", "русских храмов"), t("Greek temples", "հունական տաճարներին", "греческих храмов")], 1),
        q(t("Monasteries were also…", "Վանքերը նաև…", "Монастыри были также…"), [t("factories of cars", "մեքենաների գործարաններ էին", "автозаводами"), t("sports stadiums", "մարզադաշտեր էին", "стадионами"), t("schools and libraries", "դպրոցներ և գրադարաններ էին", "школами и библиотеками")], 2),
      ],
    ),
    lesson(
      "old-moscow",
      ["Old Moscow: the Kremlin and Red Square", "Հին Մոսկվա․ Կրեմլ և Կարմիր հրապարակ", "Старая Москва: Кремль и Красная площадь"],
      {
        en: ["Know the Moscow Kremlin, Red Square and St Basil's Cathedral", "See how rhythm and colour make a building festive", "Draw a fantasy cathedral with different domes"],
        hy: ["Իմանալ Մոսկվայի Կրեմլը, Կարմիր հրապարակը և Վասիլի Երանելու տաճարը", "Տեսնել, թե ինչպես են ռիթմն ու գույնը շենքը տոնական դարձնում", "Նկարել երևակայական տաճար տարբեր գմբեթներով"],
        ru: ["Знать Московский Кремль, Красную площадь и собор Василия Блаженного", "Видеть, как ритм и цвет делают здание праздничным", "Нарисовать сказочный собор с разными главами"],
      },
      {
        en: `## The heart of Moscow

The **Moscow Kremlin** stands on a hill above the Moscow river. Its red brick walls and towers were built at the end of the 15th century; Italian masters helped to build them. The most famous tower, the **Spasskaya Tower**, has a big clock with chimes.

Next to the Kremlin lies **Red Square**. In old Russian the word «red» also meant «beautiful», so the name means «beautiful square».

~~~art
pic kremlin
~~~

## St Basil's Cathedral

At the edge of Red Square stands the **Cathedral of the Intercession**, known as **St Basil's**. It was built in 1555–1561. It is really several churches standing together on one base, each with its own dome.

| What we see | How it looks |
|---|---|
| **domes** | all different: twisted stripes, diamonds, zigzags, scales |
| **colours** | red, green, yellow, blue, white and gold |
| **rhythm** | towers of different height rise around the tallest central tower |
| **mood** | festive, like a fairy-tale city or a bunch of flowers |

~~~art
pic st-basil
~~~

## Rhythm and variety

An architect can repeat the same shape (towers, arches, windows) to make **rhythm**, and change the size and colour to make **variety**. Together they make a building lively but not chaotic.

## Draw a fairy-tale cathedral

1. Draw a tall central tower and 4–8 lower towers around it.
2. Give each tower its own dome shape: onion, helmet, tent.
3. Decorate each dome with a different pattern: stripes, spirals, checks, scales.
4. Use bright colours, but repeat some of them so the picture stays one whole.

~~~art
steps onion-dome
~~~

~~~art
palette loud
~~~

~~~art
tasks
1. Where does the Moscow Kremlin stand?
2. When were its red brick walls built?
3. What did «red» mean in old Russian?
4. When was St Basil's Cathedral built?
5. How are its domes different from each other?
6. What do rhythm and variety give a building?
7. Draw a fairy-tale cathedral with domes of different patterns.
~~~

~~~art
hints
1. On a hill above the Moscow river. 2. At the end of the 15th century. 3. «Beautiful». 4. In 1555–1561. 5. They have different shapes, patterns and colours. 6. Liveliness and order. 7. Your work.
~~~`,
        hy: `## Մոսկվայի սիրտը

**Մոսկվայի Կրեմլը** կանգնած է Մոսկվա գետի վերևում գտնվող բլրի վրա։ Նրա կարմիր աղյուսե պարիսպներն ու աշտարակները կառուցվել են 15-րդ դարի վերջին, կառուցմանն օգնել են իտալացի վարպետներ։ Ամենահայտնի աշտարակը՝ **Սպասսկայա աշտարակը**, ունի զնգացող մեծ ժամացույց։

Կրեմլի կողքին **Կարմիր հրապարակն** է։ Հին ռուսերենում «կարմիր» բառը նշանակում էր նաև «գեղեցիկ», ուստի անունը նշանակում է «գեղեցիկ հրապարակ»։

~~~art
pic kremlin
~~~

## Վասիլի Երանելու տաճարը

Կարմիր հրապարակի եզրին կանգնած է **Պոկրովի տաճարը**, որը հայտնի է որպես **Վասիլի Երանելու տաճար**։ Այն կառուցվել է 1555–1561 թվականներին։ Իրականում դա մեկ հիմքի վրա միասին կանգնած մի քանի եկեղեցի է՝ յուրաքանչյուրն իր գմբեթով։

| Ինչ ենք տեսնում | Ինչպես է երևում |
|---|---|
| **գմբեթներ** | բոլորը տարբեր՝ ոլորված շերտեր, շեղանկյուններ, զիգզագներ, թեփուկներ |
| **գույներ** | կարմիր, կանաչ, դեղին, կապույտ, սպիտակ և ոսկեգույն |
| **ռիթմ** | տարբեր բարձրության աշտարակները բարձրանում են ամենաբարձր կենտրոնական աշտարակի շուրջը |
| **տրամադրություն** | տոնական, ինչպես հեքիաթային քաղաք կամ ծաղկեփունջ |

~~~art
pic st-basil
~~~

## Ռիթմ և բազմազանություն

Ճարտարապետը կարող է կրկնել նույն ձևը (աշտարակներ, կամարներ, պատուհաններ)՝ **ռիթմ** ստեղծելու համար, և փոխել չափն ու գույնը՝ **բազմազանություն** ստեղծելու համար։ Միասին դրանք շենքը դարձնում են կենդանի, բայց ոչ խառնաշփոթ։

## Նկարի՛ր հեքիաթային տաճար

1. Նկարի՛ր բարձր կենտրոնական աշտարակ և նրա շուրջը 4–8 ավելի ցածր աշտարակ։
2. Յուրաքանչյուր աշտարակին տո՛ւր իր գմբեթի ձևը՝ սոխ, սաղավարտ, վրան։
3. Յուրաքանչյուր գմբեթ զարդարի՛ր տարբեր նախշով՝ շերտեր, պարույրներ, վանդակներ, թեփուկներ։
4. Օգտագործի՛ր վառ գույներ, բայց դրանցից մի քանիսը կրկնի՛ր, որպեսզի նկարը մնա ամբողջական։

~~~art
steps onion-dome
~~~

~~~art
palette loud
~~~

~~~art
tasks
1. Որտե՞ղ է կանգնած Մոսկվայի Կրեմլը։
2. Ե՞րբ են կառուցվել նրա կարմիր աղյուսե պարիսպները։
3. Ի՞նչ էր նշանակում «կարմիր» բառը հին ռուսերենում։
4. Ե՞րբ է կառուցվել Վասիլի Երանելու տաճարը։
5. Ինչո՞վ են նրա գմբեթները տարբերվում իրարից։
6. Ի՞նչ են տալիս ռիթմն ու բազմազանությունը շենքին։
7. Նկարի՛ր հեքիաթային տաճար տարբեր նախշերով գմբեթներով։
~~~

~~~art
hints
1. Մոսկվա գետի վերևում գտնվող բլրի վրա։ 2. 15-րդ դարի վերջին։ 3. «Գեղեցիկ»։ 4. 1555–1561 թվականներին։ 5. Նրանք ունեն տարբեր ձևեր, նախշեր և գույներ։ 6. Կենդանություն և կարգ։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Сердце Москвы

**Московский Кремль** стоит на холме над Москвой-рекой. Его красные кирпичные стены и башни построены в конце XV века; строить их помогали итальянские мастера. Самая известная башня — **Спасская** — имеет большие часы с курантами.

Рядом с Кремлём лежит **Красная площадь**. В древнерусском языке слово «красный» значило также «красивый», поэтому название значит «красивая площадь».

~~~art
pic kremlin
~~~

## Собор Василия Блаженного

На краю Красной площади стоит **Покровский собор**, известный как **собор Василия Блаженного**. Он построен в 1555–1561 годах. На самом деле это несколько церквей, стоящих вместе на одном основании, у каждой своя глава.

| Что мы видим | Как это выглядит |
|---|---|
| **главы** | все разные: витые полосы, ромбы, зигзаги, чешуя |
| **цвета** | красный, зелёный, жёлтый, синий, белый и золото |
| **ритм** | башни разной высоты поднимаются вокруг самой высокой центральной |
| **настроение** | праздничное, как сказочный город или букет цветов |

~~~art
pic st-basil
~~~

## Ритм и разнообразие

Архитектор может повторять одну форму (башни, арки, окна), чтобы создать **ритм**, и менять размер и цвет, чтобы создать **разнообразие**. Вместе они делают здание живым, но не хаотичным.

## Нарисуй сказочный собор

1. Нарисуй высокую центральную башню и вокруг 4–8 башен пониже.
2. Дай каждой башне свою форму главы: луковица, шлем, шатёр.
3. Укрась каждую главу своим узором: полосы, спирали, клетки, чешуя.
4. Используй яркие цвета, но повторяй некоторые из них, чтобы рисунок остался цельным.

~~~art
steps onion-dome
~~~

~~~art
palette loud
~~~

~~~art
tasks
1. Где стоит Московский Кремль?
2. Когда построены его красные кирпичные стены?
3. Что значило слово «красный» в древнерусском языке?
4. Когда построен собор Василия Блаженного?
5. Чем отличаются друг от друга его главы?
6. Что дают зданию ритм и разнообразие?
7. Нарисуй сказочный собор с главами разных узоров.
~~~

~~~art
hints
1. На холме над Москвой-рекой. 2. В конце XV века. 3. «Красивый». 4. В 1555–1561 годах. 5. У них разные формы, узоры и цвета. 6. Живость и порядок. 7. Твоя работа.
~~~`,
      },
      [
        q(t("In old Russian «red» also meant…", "Հին ռուսերենում «կարմիր»-ը նշանակում էր նաև…", "В древнерусском «красный» значило также…"), [t("beautiful", "գեղեցիկ", "красивый"), t("old", "հին", "старый"), t("big", "մեծ", "большой")], 0),
        q(t("The tower with the big clock is…", "Մեծ ժամացույցով աշտարակը…", "Башня с большими часами —"), [t("the Leaning Tower", "Թեք աշտարակն է", "Падающая башня"), t("the Spasskaya Tower", "Սպասսկայա աշտարակն է", "Спасская башня"), t("the Eiffel Tower", "Էյֆելյան աշտարակն է", "Эйфелева башня")], 1),
        q(t("St Basil's Cathedral was built in…", "Վասիլի Երանելու տաճարը կառուցվել է…", "Собор Василия Блаженного построен в…"), [t("782 BC", "ք․ ա․ 782-ին", "782 году до н. э."), t("1967", "1967-ին", "1967 году"), t("1555–1561", "1555–1561 թվականներին", "1555–1561 годах")], 2),
        q(t("The domes of St Basil's are…", "Վասիլի Երանելու տաճարի գմբեթները…", "Главы собора Василия Блаженного…"), [t("all different", "բոլորը տարբեր են", "все разные"), t("all grey", "բոլորը մոխրագույն են", "все серые"), t("all the same", "բոլորը նույնն են", "все одинаковые")], 0),
        q(t("Repeating the same shape creates…", "Նույն ձևի կրկնությունը ստեղծում է…", "Повторение одной формы создаёт…"), [t("chaos", "խառնաշփոթ", "хаос"), t("rhythm", "ռիթմ", "ритм"), t("silence", "լռություն", "тишину")], 1),
        q(t("The Kremlin walls are made of…", "Կրեմլի պարիսպները պատրաստված են…", "Стены Кремля сделаны из…"), [t("wood", "փայտից", "дерева"), t("glass", "ապակուց", "стекла"), t("red brick", "կարմիր աղյուսից", "красного кирпича")], 2),
      ],
    ),
    lesson(
      "armenian-miniature",
      ["Armenian miniature: Toros Roslin", "Հայկական մանրանկարչություն․ Թորոս Ռոսլին", "Армянская миниатюра: Торос Рослин"],
      {
        en: ["Know what a book miniature is and who Toros Roslin was", "Name the parts of a decorated manuscript: miniature, khoran, margin ornament, bird-letter", "Create a page with a bird-letter and a border"],
        hy: ["Իմանալ, թե ինչ է գրքային մանրանկարը, և ով էր Թորոս Ռոսլինը", "Անվանել զարդարված ձեռագրի մասերը՝ մանրանկար, խորան, լուսանցազարդ, թռչնագիր", "Ստեղծել էջ թռչնագրով և եզրազարդով"],
        ru: ["Знать, что такое книжная миниатюра и кто такой Торос Рослин", "Называть части украшенной рукописи: миниатюра, хоран, орнамент на полях, буква-птица", "Создать страницу с буквой-птицей и рамкой"],
      },
      {
        en: `## Small pictures in big books

Before printing, books were written by hand. Masters decorated them with small, very fine paintings called **miniatures**. Armenia has one of the richest traditions of miniature painting in the world. Thousands of old Armenian manuscripts are kept in the **Matenadaran** in Yerevan.

## Toros Roslin

**Toros Roslin** lived in the **13th century** in the Armenian kingdom of Cilicia. He is the most famous Armenian miniaturist. His figures are graceful and alive, their faces are gentle, the colours are bright and clear: deep blue, red, green and a lot of **gold**.

~~~art
pic letter-initial bird-motif
~~~

## Parts of a decorated manuscript

| Part | What it is |
|---|---|
| **miniature** | a small picture of a scene from the book |
| **khoran** | a decorated arch over the text at the start of the book, like a gate |
| **margin ornament** | small plants, birds and crosses in the margins |
| **bird-letter** | a capital letter made of birds, animals or plants |

## How a miniature was made

1. The page was **parchment**: thin, specially treated animal skin.
2. Paints were made from minerals and plants and mixed with egg yolk.
3. Gold was put on in very thin leaves and polished until it shone.
4. The master worked with a very fine brush, sometimes of only a few hairs.

~~~art
palette palekh
~~~

## Make your own page

1. Draw a frame or a khoran arch at the top of the page.
2. Write the first letter of your name large, building it from birds: their necks, wings and tails form the lines of the letter.
3. Add a margin ornament: a branch, a bird, a flower.
4. Paint with pure bright colours; use gold or yellow for shine.

~~~art
steps initial
~~~

~~~art
tasks
1. What is a miniature?
2. Where are old Armenian manuscripts kept?
3. When and where did Toros Roslin live?
4. What is a khoran?
5. What is a bird-letter?
6. What was parchment?
7. Create a page with a bird-letter of your name and a margin ornament.
~~~

~~~art
hints
1. A small, very fine painting in a handwritten book. 2. In the Matenadaran in Yerevan. 3. In the 13th century, in Cilicia. 4. A decorated arch over the text, like a gate. 5. A capital letter made of birds, animals or plants. 6. Thin, specially treated animal skin. 7. Your work.
~~~`,
        hy: `## Փոքր նկարներ մեծ գրքերում

Մինչև տպագրությունը գրքերը գրվում էին ձեռքով։ Վարպետները դրանք զարդարում էին փոքր, շատ նուրբ նկարներով, որոնք կոչվում են **մանրանկարներ**։ Հայաստանն ունի մանրանկարչության աշխարհի ամենահարուստ ավանդույթներից մեկը։ Հազարավոր հին հայկական ձեռագրեր պահվում են Երևանի **Մատենադարանում**։

## Թորոս Ռոսլին

**Թորոս Ռոսլինն** ապրել է **13-րդ դարում** Կիլիկիայի հայկական թագավորությունում։ Նա ամենահայտնի հայ մանրանկարիչն է։ Նրա պատկերները նրբագեղ են և կենդանի, դեմքերը՝ մեղմ, գույները՝ վառ և մաքուր՝ խոր կապույտ, կարմիր, կանաչ և շատ **ոսկի**։

~~~art
pic letter-initial bird-motif
~~~

## Զարդարված ձեռագրի մասերը

| Մաս | Ինչ է |
|---|---|
| **մանրանկար** | գրքի տեսարանի փոքր նկար |
| **խորան** | զարդարված կամար տեքստի վերևում գրքի սկզբում, դարպասի պես |
| **լուսանցազարդ** | փոքր բույսեր, թռչուններ և խաչեր լուսանցքներում |
| **թռչնագիր** | թռչուններից, կենդանիներից կամ բույսերից կազմված գլխատառ |

## Ինչպես էր պատրաստվում մանրանկարը

1. Էջը **մագաղաթ** էր՝ բարակ, հատուկ մշակված կենդանու մորթի։
2. Ներկերը պատրաստում էին հանքանյութերից և բույսերից ու խառնում ձվի դեղնուցի հետ։
3. Ոսկին դնում էին շատ բարակ թերթիկներով և փայլեցնում, մինչև շողար։
4. Վարպետն աշխատում էր շատ նուրբ վրձնով, երբեմն ընդամենը մի քանի մազից։

~~~art
palette palekh
~~~

## Ստեղծի՛ր քո էջը

1. Էջի վերևում նկարի՛ր շրջանակ կամ խորանի կամար։
2. Մեծ գրի՛ր անվանդ առաջին տառը՝ կառուցելով այն թռչուններից․ նրանց վզերը, թևերը և պոչերը կազմում են տառի գծերը։
3. Ավելացրու՛ լուսանցազարդ՝ ճյուղ, թռչուն, ծաղիկ։
4. Ներկի՛ր մաքուր վառ գույներով, փայլի համար օգտագործի՛ր ոսկեգույն կամ դեղին։

~~~art
steps initial
~~~

~~~art
tasks
1. Ի՞նչ է մանրանկարը։
2. Որտե՞ղ են պահվում հին հայկական ձեռագրերը։
3. Ե՞րբ և որտե՞ղ է ապրել Թորոս Ռոսլինը։
4. Ի՞նչ է խորանը։
5. Ի՞նչ է թռչնագիրը։
6. Ի՞նչ էր մագաղաթը։
7. Ստեղծի՛ր էջ քո անվան թռչնագրով և լուսանցազարդով։
~~~

~~~art
hints
1. Փոքր, շատ նուրբ նկար ձեռագիր գրքում։ 2. Երևանի Մատենադարանում։ 3. 13-րդ դարում, Կիլիկիայում։ 4. Զարդարված կամար տեքստի վերևում՝ դարպասի պես։ 5. Թռչուններից, կենդանիներից կամ բույսերից կազմված գլխատառ։ 6. Բարակ, հատուկ մշակված կենդանու մորթի։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Маленькие картины в больших книгах

До книгопечатания книги писали от руки. Мастера украшали их маленькими, очень тонкими рисунками — **миниатюрами**. У Армении одна из самых богатых традиций миниатюры в мире. Тысячи старинных армянских рукописей хранятся в ереванском **Матенадаране**.

## Торос Рослин

**Торос Рослин** жил в **XIII веке** в армянском Киликийском царстве. Это самый знаменитый армянский миниатюрист. Его фигуры изящны и живы, лица мягкие, цвета яркие и чистые: глубокий синий, красный, зелёный и много **золота**.

~~~art
pic letter-initial bird-motif
~~~

## Части украшенной рукописи

| Часть | Что это |
|---|---|
| **миниатюра** | небольшая картина сцены из книги |
| **хоран** | украшенная арка над текстом в начале книги, похожая на ворота |
| **орнамент на полях** | маленькие растения, птицы и кресты на полях |
| **буква-птица** | заглавная буква, составленная из птиц, зверей или растений |

## Как делали миниатюру

1. Страница была из **пергамента** — тонкой, особым образом обработанной кожи животного.
2. Краски делали из минералов и растений и смешивали с яичным желтком.
3. Золото наносили тончайшими листочками и полировали до блеска.
4. Мастер работал очень тонкой кистью, иногда всего из нескольких волосков.

~~~art
palette palekh
~~~

## Создай свою страницу

1. Наверху страницы нарисуй рамку или арку-хоран.
2. Крупно напиши первую букву своего имени, составив её из птиц: их шеи, крылья и хвосты образуют линии буквы.
3. Добавь орнамент на полях: веточку, птицу, цветок.
4. Раскрась чистыми яркими цветами; для блеска используй золотую или жёлтую краску.

~~~art
steps initial
~~~

~~~art
tasks
1. Что такое миниатюра?
2. Где хранятся старинные армянские рукописи?
3. Когда и где жил Торос Рослин?
4. Что такое хоран?
5. Что такое буква-птица?
6. Что такое пергамент?
7. Создай страницу с буквой-птицей своего имени и орнаментом на полях.
~~~

~~~art
hints
1. Маленький, очень тонкий рисунок в рукописной книге. 2. В Матенадаране в Ереване. 3. В XIII веке, в Киликии. 4. Украшенная арка над текстом, похожая на ворота. 5. Заглавная буква из птиц, зверей или растений. 6. Тонкая, особым образом обработанная кожа животного. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Toros Roslin lived in the…", "Թորոս Ռոսլինն ապրել է…", "Торос Рослин жил в…"), [t("13th century", "13-րդ դարում", "XIII веке"), t("19th century", "19-րդ դարում", "XIX веке"), t("1st century BC", "ք․ ա․ 1-ին դարում", "I веке до н. э.")], 0),
        q(t("Old Armenian manuscripts are kept in the…", "Հին հայկական ձեռագրերը պահվում են…", "Старинные армянские рукописи хранятся в…"), [t("Kremlin", "Կրեմլում", "Кремле"), t("Matenadaran", "Մատենադարանում", "Матенадаране"), t("Erebuni", "Էրեբունիում", "Эребуни")], 1),
        q(t("A capital letter made of birds is a…", "Թռչուններից կազմված գլխատառը…", "Заглавная буква из птиц — это…"), [t("khoran", "խորան է", "хоран"), t("cuneiform", "սեպագիր է", "клинопись"), t("bird-letter", "թռչնագիր է", "буква-птица")], 2),
        q(t("Parchment is…", "Մագաղաթը…", "Пергамент — это…"), [t("treated animal skin", "մշակված կենդանու մորթի է", "обработанная кожа животного"), t("plastic", "պլաստիկ է", "пластик"), t("glass", "ապակի է", "стекло")], 0),
        q(t("Paints were mixed with…", "Ներկերը խառնում էին…", "Краски смешивали с…"), [t("sea water", "ծովի ջրի հետ", "морской водой"), t("egg yolk", "ձվի դեղնուցի հետ", "яичным желтком"), t("sand", "ավազի հետ", "песком")], 1),
        q(t("A decorated arch over the text is a…", "Տեքստի վերևի զարդարված կամարը…", "Украшенная арка над текстом — это…"), [t("margin", "լուսանցք է", "поле"), t("parchment", "մագաղաթ է", "пергамент"), t("khoran", "խորան է", "хоран")], 2),
      ],
    ),
    lesson(
      "icon-fresco",
      ["Icons and frescoes", "Սրբապատկերներ և որմնանկարներ", "Иконы и фрески"],
      {
        en: ["Know how an icon and a fresco are made", "Know Rublev's «Trinity» and the frescoes of Akhtala and Ferapontov monastery", "Build a calm composition in a circle"],
        hy: ["Իմանալ, թե ինչպես են պատրաստվում սրբապատկերը և որմնանկարը", "Իմանալ Ռուբլյովի «Երրորդությունը» և Ախթալայի ու Ֆերապոնտովյան վանքի որմնանկարները", "Կառուցել հանդարտ կոմպոզիցիա շրջանի մեջ"],
        ru: ["Знать, как пишут икону и фреску", "Знать «Троицу» Рублёва и фрески Ахталы и Ферапонтова монастыря", "Строить спокойную композицию в круге"],
      },
      {
        en: `## Painting on a board and on a wall

| | Icon | Fresco |
|---|---|---|
| **where** | on a wooden board | on the wall or ceiling of a church |
| **how** | the board is covered with white ground; the painter uses **egg tempera**: pigments mixed with egg yolk | paint is put on **wet plaster**; when it dries, the colour becomes part of the wall |
| **background** | often gold: a sign of heavenly light | blue or ochre |
| **name** | from the Greek word for «image» | from the Italian «fresco» – «fresh» |

The fresco painter has to work fast: only the part of the wall that was plastered today can be painted today.

~~~art
pic genre-icon
~~~

## Andrei Rublev's «Trinity»

In the early 15th century the monk **Andrei Rublev** painted the icon «Trinity». It is now in the **Tretyakov Gallery**. Three angels sit around a table. Their figures and heads lean towards each other and form a **circle**. Soft blue, gold and green colours make the icon quiet and peaceful.

## Frescoes of Armenia and Russia

- In the **Akhtala** monastery in Lori, the walls are covered with bright 13th-century frescoes with a lot of deep blue.
- In the **Ferapontov monastery** in the north of Russia, **Dionysius** and his sons painted the church in 1502 with light, tender colours: sky blue, pink, pale yellow.

## A composition in a circle

A circle is a calm, closed shape. Figures placed along a circle «talk» to each other and lead the eye around and back to the centre.

1. Draw a large circle lightly.
2. Place two or three figures so that their backs and heads follow the circle.
3. Put a simple object in the centre: a table, a bowl, a tree.
4. Use a limited palette: two or three main colours and gold or yellow.

~~~art
sketch guide=circle
Build a composition in a circle: figures lean towards the centre and their outlines follow the round edge.
~~~

~~~art
tasks
1. What is an icon painted on?
2. What is egg tempera?
3. Why must a fresco painter work fast?
4. What does the word «fresco» mean?
5. Describe the composition of Rublev's «Trinity».
6. Who painted the frescoes of the Ferapontov monastery and when?
7. Make a composition of two or three figures in a circle.
~~~

~~~art
hints
1. On a wooden board. 2. Paint made of pigments mixed with egg yolk. 3. Paint must go on wet plaster before it dries. 4. «Fresh». 5. Three angels around a table, leaning towards each other in a circle. 6. Dionysius and his sons, in 1502. 7. Your work.
~~~`,
        hy: `## Նկար տախտակի և պատի վրա

| | Սրբապատկեր | Որմնանկար |
|---|---|---|
| **որտեղ** | փայտե տախտակի վրա | եկեղեցու պատին կամ առաստաղին |
| **ինչպես** | տախտակը ծածկում են սպիտակ հողաշերտով, նկարիչն օգտագործում է **ձվային տեմպերա**՝ ձվի դեղնուցի հետ խառնված ներկանյութեր | ներկը դնում են **թաց սվաղի** վրա, երբ այն չորանում է, գույնը դառնում է պատի մասը |
| **ֆոն** | հաճախ ոսկե՝ երկնային լույսի նշան | կապույտ կամ օխրա |
| **անուն** | հունարեն «պատկեր» բառից | իտալերեն «fresco»՝ «թարմ» բառից |

Որմնանկարիչը պետք է արագ աշխատի․ այսօր կարելի է նկարել միայն պատի այն մասը, որն այսօր է սվաղվել։

~~~art
pic genre-icon
~~~

## Անդրեյ Ռուբլյովի «Երրորդությունը»

15-րդ դարի սկզբին վանական **Անդրեյ Ռուբլյովը** նկարեց «Երրորդություն» սրբապատկերը։ Այժմ այն գտնվում է **Տրետյակովյան պատկերասրահում**։ Երեք հրեշտակ նստած են սեղանի շուրջը։ Նրանց պատկերներն ու գլուխները թեքվում են իրար կողմ և կազմում են **շրջան**։ Մեղմ կապույտ, ոսկեգույն և կանաչ գույները սրբապատկերը դարձնում են լուռ և խաղաղ։

## Հայաստանի և Ռուսաստանի որմնանկարները

- Լոռու **Ախթալայի** վանքում պատերը ծածկված են 13-րդ դարի վառ որմնանկարներով՝ շատ խոր կապույտով։
- Ռուսաստանի հյուսիսում գտնվող **Ֆերապոնտովյան վանքում** **Դիոնիսիոսը** և նրա որդիները 1502 թվականին նկարազարդել են եկեղեցին թեթև, քնքուշ գույներով՝ երկնագույն, վարդագույն, բաց դեղին։

## Կոմպոզիցիա շրջանի մեջ

Շրջանը հանդարտ, փակ ձև է։ Շրջանի երկայնքով դասավորված պատկերները «զրուցում» են իրար հետ և հայացքը տանում են շուրջը և հետ՝ դեպի կենտրոն։

1. Թեթև գծի՛ր մեծ շրջան։
2. Դասավորի՛ր երկու կամ երեք պատկեր այնպես, որ նրանց մեջքերն ու գլուխները հետևեն շրջանին։
3. Կենտրոնում դի՛ր պարզ առարկա՝ սեղան, աման, ծառ։
4. Օգտագործի՛ր սահմանափակ գունապնակ՝ երկու կամ երեք հիմնական գույն և ոսկեգույն կամ դեղին։

~~~art
sketch guide=circle
Կառուցի՛ր շրջանաձև կոմպոզիցիա․ կերպարները թեքվում են դեպի կենտրոն, իսկ ուրվագծերը կրկնում են կլոր եզրը։
~~~

~~~art
tasks
1. Ինչի՞ վրա է նկարվում սրբապատկերը։
2. Ի՞նչ է ձվային տեմպերան։
3. Ինչո՞ւ պետք է որմնանկարիչն արագ աշխատի։
4. Ի՞նչ է նշանակում «fresco» բառը։
5. Նկարագրի՛ր Ռուբլյովի «Երրորդության» կոմպոզիցիան։
6. Ո՞վ և ե՞րբ է նկարել Ֆերապոնտովյան վանքի որմնանկարները։
7. Կազմի՛ր երկու կամ երեք պատկերի կոմպոզիցիա շրջանի մեջ։
~~~

~~~art
hints
1. Փայտե տախտակի վրա։ 2. Ձվի դեղնուցի հետ խառնված ներկանյութերից ներկ։ 3. Ներկը պետք է դրվի թաց սվաղի վրա, մինչև այն կչորանա։ 4. «Թարմ»։ 5. Երեք հրեշտակ սեղանի շուրջը՝ իրար կողմ թեքված, շրջանով։ 6. Դիոնիսիոսը և նրա որդիները, 1502 թվականին։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Живопись на доске и на стене

| | Икона | Фреска |
|---|---|---|
| **где** | на деревянной доске | на стене или своде храма |
| **как** | доску покрывают белым грунтом; художник пишет **яичной темперой** — пигментами, смешанными с желтком | краску наносят на **сырую штукатурку**; высыхая, цвет становится частью стены |
| **фон** | часто золотой — знак небесного света | синий или охристый |
| **название** | от греческого слова «образ» | от итальянского «fresco» — «свежий» |

Мастер фрески должен работать быстро: сегодня можно расписать только ту часть стены, которую сегодня оштукатурили.

~~~art
pic genre-icon
~~~

## «Троица» Андрея Рублёва

В начале XV века монах **Андрей Рублёв** написал икону «Троица». Сейчас она находится в **Третьяковской галерее**. Три ангела сидят вокруг стола. Их фигуры и головы склоняются друг к другу и образуют **круг**. Мягкие голубые, золотые и зелёные цвета делают икону тихой и мирной.

## Фрески Армении и России

- В монастыре **Ахтала** в Лори стены покрыты яркими фресками XIII века, в них много глубокого синего.
- В **Ферапонтовом монастыре** на севере России **Дионисий** с сыновьями расписал храм в 1502 году светлыми нежными красками: голубой, розовой, бледно-жёлтой.

## Композиция в круге

Круг — спокойная, замкнутая форма. Фигуры, расположенные по кругу, «разговаривают» друг с другом и ведут взгляд по кругу и обратно к центру.

1. Легко начерти большой круг.
2. Расположи две-три фигуры так, чтобы их спины и головы следовали кругу.
3. В центр поставь простой предмет: стол, чашу, дерево.
4. Используй ограниченную палитру: два-три основных цвета и золото или жёлтый.

~~~art
sketch guide=circle
Построй композицию в круге: фигуры склоняются к центру, а их контуры повторяют край круга.
~~~

~~~art
tasks
1. На чём пишут икону?
2. Что такое яичная темпера?
3. Почему мастер фрески должен работать быстро?
4. Что значит слово «fresco»?
5. Опиши композицию «Троицы» Рублёва.
6. Кто и когда расписал Ферапонтов монастырь?
7. Составь композицию из двух-трёх фигур в круге.
~~~

~~~art
hints
1. На деревянной доске. 2. Краска из пигментов, смешанных с яичным желтком. 3. Краску нужно нанести на сырую штукатурку, пока она не высохла. 4. «Свежий». 5. Три ангела вокруг стола склоняются друг к другу, образуя круг. 6. Дионисий с сыновьями, в 1502 году. 7. Твоя работа.
~~~`,
      },
      [
        q(t("An icon is painted on…", "Սրբապատկերը նկարում են…", "Икону пишут на…"), [t("a wooden board", "փայտե տախտակի վրա", "деревянной доске"), t("wet plaster", "թաց սվաղի վրա", "сырой штукатурке"), t("glass", "ապակու վրա", "стекле")], 0),
        q(t("A fresco is painted on…", "Որմնանկարը նկարում են…", "Фреску пишут на…"), [t("paper", "թղթի վրա", "бумаге"), t("wet plaster", "թաց սվաղի վրա", "сырой штукатурке"), t("canvas", "կտավի վրա", "холсте")], 1),
        q(t("«Trinity» was painted by…", "«Երրորդությունը» նկարել է…", "«Троицу» написал…"), [t("Dionysius", "Դիոնիսիոսը", "Дионисий"), t("Toros Roslin", "Թորոս Ռոսլինը", "Торос Рослин"), t("Andrei Rublev", "Անդրեյ Ռուբլյովը", "Андрей Рублёв")], 2),
        q(t("In «Trinity» the angels form a…", "«Երրորդության» մեջ հրեշտակները կազմում են…", "В «Троице» ангелы образуют…"), [t("circle", "շրջան", "круг"), t("straight line", "ուղիղ գիծ", "прямую линию"), t("square", "քառակուսի", "квадрат")], 0),
        q(t("Egg tempera is paint mixed with…", "Ձվային տեմպերան խառնված է…", "Яичная темпера — краска, смешанная с…"), [t("oil", "յուղի հետ", "маслом"), t("egg yolk", "ձվի դեղնուցի հետ", "яичным желтком"), t("milk", "կաթի հետ", "молоком")], 1),
        q(t("Bright 13th-century frescoes can be seen in…", "13-րդ դարի վառ որմնանկարներ կարելի է տեսնել…", "Яркие фрески XIII века можно увидеть в…"), [t("Erebuni", "Էրեբունիում", "Эребуни"), t("Kizhi", "Կիժիում", "Кижах"), t("Akhtala", "Ախթալայում", "Ахтале")], 2),
      ],
    ),
  ],
};
