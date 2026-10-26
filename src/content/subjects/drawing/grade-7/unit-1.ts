import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("The art of composition", "Կոմպոզիցիայի արվեստ", "Искусство композиции — основа дизайна"),
  summary: t(
    "Laws of composition, colour in design, letters and fonts, the poster, book layout, signs and infographics.",
    "Կոմպոզիցիայի օրենքներ, գույնը դիզայնում, տառ և տառատեսակ, պաստառ, գրքի մակետ, նշաններ և ինֆոգրաֆիկա։",
    "Законы композиции, цвет в дизайне, буква и шрифт, плакат, макет книги, знаки и инфографика.",
  ),
  lessons: [
    lesson(
      "composition-laws",
      ["Laws of composition: balance, rhythm, dominant", "Կոմպոզիցիայի օրենքներ․ հավասարակշռություն, ռիթմ, դոմինանտ", "Основы композиции: равновесие, ритм, доминанта"],
      {
        en: ["Understand what design and architecture have in common with painting: composition", "Know the main laws of composition: balance, symmetry, rhythm, contrast and dominant", "Build a flat composition from simple shapes"],
        hy: ["Հասկանալ, թե ինչն է դիզայնին և ճարտարապետությանը միավորում նկարչության հետ՝ կոմպոզիցիան", "Իմանալ կոմպոզիցիայի հիմնական օրենքները՝ հավասարակշռություն, համաչափություն, ռիթմ, կոնտրաստ և դոմինանտ", "Կառուցել հարթ կոմպոզիցիա պարզ ձևերից"],
        ru: ["Понять, что объединяет дизайн и архитектуру с живописью: композиция", "Знать основные законы композиции: равновесие, симметрию, ритм, контраст и доминанту", "Построить плоскостную композицию из простых форм"],
      },
      {
        en: `## Design and architecture

This year we study the arts that shape the world around us. **Design** creates useful and beautiful things: books, posters, chairs, phones, clothes. **Architecture** creates buildings and cities. Both start with a sheet of paper and with **composition**, the art of arranging parts into a whole.

~~~art
pic poster app-screen chair tamanyan
~~~

## The main laws

| Law | What it means | Example |
|---|---|---|
| **Balance** | the parts feel equally heavy on both sides | a big pale shape balances a small dark one |
| **Symmetry** | the left and right halves mirror each other | the facade of the Opera in Yerevan |
| **Asymmetry** | the halves are different but still balanced | a modern poster |
| **Rhythm** | shapes or intervals repeat | windows of a building, columns |
| **Contrast** | strong differences: big and small, dark and light | a red circle on a grey page |
| **Dominant** | the main element that catches the eye first | a tower above a city, a title on a poster |

~~~art
compose
~~~

## Visual weight

Not all shapes are equally "heavy" for the eye:

* a **dark** shape is heavier than a light one;
* a **big** shape is heavier than a small one;
* a **bright** colour is heavier than a dull one;
* a shape far from the centre feels heavier, like a weight on a long lever.

A composition is **static** (calm) when it rests on horizontals and verticals and is **dynamic** (moving) when diagonals and open space lead the eye.

## Composition on a plane

Designers start with the simplest elements: **point, line, spot**. Try it:

1. Take a square sheet.
2. Cut out three rectangles of different sizes and one line strip.
3. Move them until the composition feels balanced.
4. Make one element the dominant: biggest, darkest or brightest.
5. Make a second version that feels dynamic, with a diagonal.

~~~art
sketch guide=thirds
Composition with three shapes: a big one, a middle one, a small one. Make them balance on the sheet.
~~~

~~~art
tasks
1. What do design and architecture have in common?
2. What is balance in a composition?
3. Give an example of rhythm in architecture.
4. Which is heavier for the eye: a small black square or a small light grey square?
5. What is a dominant?
6. When is a composition dynamic?
7. Make two compositions from rectangles and a line: one static and one dynamic.
~~~

~~~art
hints
1. Both are built on composition, the arrangement of parts into a whole. 2. The parts feel equally heavy on both sides. 3. A row of windows or columns. 4. The black square. 5. The main element that catches the eye first. 6. When diagonals and open space lead the eye. 7. Your compositions.
~~~`,
        hy: `## Դիզայն և ճարտարապետություն

Այս տարի ուսումնասիրում ենք այն արվեստները, որոնք ձևավորում են մեզ շրջապատող աշխարհը։ **Դիզայնը** ստեղծում է օգտակար և գեղեցիկ իրեր՝ գրքեր, պաստառներ, աթոռներ, հեռախոսներ, հագուստ։ **Ճարտարապետությունը** ստեղծում է շենքեր և քաղաքներ։ Երկուսն էլ սկսվում են թղթի թերթից և **կոմպոզիցիայից**՝ մասերն ամբողջության մեջ դասավորելու արվեստից։

~~~art
pic poster app-screen chair tamanyan
~~~

## Հիմնական օրենքները

| Օրենք | Ինչ է նշանակում | Օրինակ |
|---|---|---|
| **Հավասարակշռություն** | մասերն երկու կողմից էլ հավասարապես ծանր են թվում | մեծ գունատ ձևը հավասարակշռում է փոքր մուգ ձևին |
| **Համաչափություն** | ձախ և աջ կեսերը միմյանց հայելային արտացոլում են | Երևանի Օպերայի ճակատը |
| **Անհամաչափություն** | կեսերը տարբեր են, բայց հավասարակշռված | ժամանակակից պաստառ |
| **Ռիթմ** | ձևերը կամ միջակայքերը կրկնվում են | շենքի պատուհանները, սյուները |
| **Կոնտրաստ** | ուժեղ տարբերություններ՝ մեծ և փոքր, մուգ և բաց | կարմիր շրջան մոխրագույն էջի վրա |
| **Դոմինանտ** | գլխավոր տարրը, որն առաջինն է գրավում հայացքը | աշտարակ քաղաքի վերևում, վերնագիր պաստառի վրա |

~~~art
compose
~~~

## Տեսողական ծանրություն

Ոչ բոլոր ձևերն են աչքի համար հավասարապես «ծանր».

* **մուգ** ձևն ավելի ծանր է, քան բացը,
* **մեծ** ձևն ավելի ծանր է, քան փոքրը,
* **վառ** գույնն ավելի ծանր է, քան խամրածը,
* կենտրոնից հեռու ձևն ավելի ծանր է թվում, ինչպես բեռն երկար լծակի վրա։

Կոմպոզիցիան **ստատիկ** է (հանգիստ), երբ հենվում է հորիզոնականների և ուղղահայացների վրա, և **դինամիկ** է (շարժուն), երբ անկյունագծերն ու բաց տարածությունն առաջնորդում են հայացքը։

## Կոմպոզիցիա հարթության վրա

Դիզայներները սկսում են ամենապարզ տարրերից՝ **կետ, գիծ, բիծ**։ Փորձիր.

1. Վերցրու քառակուսի թերթ։
2. Կտրիր տարբեր չափերի երեք ուղղանկյուն և մեկ գծաշերտ։
3. Տեղաշարժիր դրանք, մինչև կոմպոզիցիան հավասարակշռված թվա։
4. Մի տարրը դարձրու դոմինանտ՝ ամենամեծը, ամենամուգը կամ ամենավառը։
5. Արա երկրորդ տարբերակ, որը դինամիկ լինի՝ անկյունագծով։

~~~art
sketch guide=thirds
Կոմպոզիցիա երեք ձևով․ մեկ մեծ, մեկ միջին, մեկ փոքր։ Թող դրանք հավասարակշռված լինեն թերթի վրա։
~~~

~~~art
tasks
1. Ինչն է ընդհանուր դիզայնի և ճարտարապետության մեջ։
2. Ինչ է հավասարակշռությունը կոմպոզիցիայում։
3. Բեր ճարտարապետության մեջ ռիթմի օրինակ։
4. Որն է աչքի համար ավելի ծանր՝ փոքր սև քառակուսին, թե փոքր բաց մոխրագույն քառակուսին։
5. Ինչ է դոմինանտը։
6. Երբ է կոմպոզիցիան դինամիկ։
7. Ուղղանկյուններից և գծից կազմիր երկու կոմպոզիցիա՝ մեկը ստատիկ, մյուսը՝ դինամիկ։
~~~

~~~art
hints
1. Երկուսն էլ կառուցվում են կոմպոզիցիայի վրա՝ մասերն ամբողջության մեջ դասավորելով։ 2. Մասերն երկու կողմից հավասարապես ծանր են թվում։ 3. Պատուհանների կամ սյուների շարքը։ 4. Սև քառակուսին։ 5. Գլխավոր տարրը, որն առաջինն է գրավում հայացքը։ 6. Երբ անկյունագծերն ու բաց տարածությունն առաջնորդում են հայացքը։ 7. Քո կոմպոզիցիաները։
~~~`,
        ru: `## Дизайн и архитектура

В этом году мы изучаем искусства, которые формируют мир вокруг нас. **Дизайн** создаёт полезные и красивые вещи: книги, плакаты, стулья, телефоны, одежду. **Архитектура** создаёт здания и города. И то и другое начинается с листа бумаги и с **композиции** — искусства соединять части в целое.

~~~art
pic poster app-screen chair tamanyan
~~~

## Основные законы

| Закон | Что означает | Пример |
|---|---|---|
| **Равновесие** | части кажутся одинаково тяжёлыми с обеих сторон | большое светлое пятно уравновешивает маленькое тёмное |
| **Симметрия** | левая и правая половины зеркально повторяют друг друга | фасад Оперного театра в Ереване |
| **Асимметрия** | половины разные, но уравновешенные | современный плакат |
| **Ритм** | повторяются формы или интервалы | окна здания, колонны |
| **Контраст** | сильные различия: большое и малое, тёмное и светлое | красный круг на сером листе |
| **Доминанта** | главный элемент, который первым притягивает взгляд | башня над городом, заголовок на плакате |

~~~art
compose
~~~

## Зрительный вес

Не все формы одинаково «тяжелы» для глаза:

* **тёмная** форма тяжелее светлой;
* **большая** форма тяжелее маленькой;
* **яркий** цвет тяжелее блёклого;
* форма далеко от центра кажется тяжелее, как груз на длинном рычаге.

Композиция **статичная** (спокойная), когда опирается на горизонтали и вертикали, и **динамичная** (движущаяся), когда взгляд ведут диагонали и свободное пространство.

## Композиция на плоскости

Дизайнеры начинают с самых простых элементов: **точки, линии, пятна**. Попробуй:

1. Возьми квадратный лист.
2. Вырежи три прямоугольника разного размера и одну полоску-линию.
3. Передвигай их, пока композиция не станет уравновешенной.
4. Сделай один элемент доминантой: самым большим, тёмным или ярким.
5. Сделай второй вариант, динамичный, с диагональю.

~~~art
sketch guide=thirds
Композиция из трёх фигур: большая, средняя и маленькая. Добейся равновесия на листе.
~~~

~~~art
tasks
1. Что общего у дизайна и архитектуры?
2. Что такое равновесие в композиции?
3. Приведи пример ритма в архитектуре.
4. Что тяжелее для глаза: маленький чёрный квадрат или маленький светло-серый?
5. Что такое доминанта?
6. Когда композиция динамичная?
7. Составь из прямоугольников и линии две композиции: статичную и динамичную.
~~~

~~~art
hints
1. Оба основаны на композиции — соединении частей в целое. 2. Части кажутся одинаково тяжёлыми с обеих сторон. 3. Ряд окон или колонн. 4. Чёрный квадрат. 5. Главный элемент, который первым притягивает взгляд. 6. Когда взгляд ведут диагонали и свободное пространство. 7. Твои композиции.
~~~`,
      },
      [
        q(t("The main element that catches the eye first is the…", "Գլխավոր տարրը, որն առաջինն է գրավում հայացքը…", "Главный элемент, который первым притягивает взгляд, — это…"), [t("dominant", "դոմինանտն է", "доминанта"), t("background", "ֆոնն է", "фон"), t("margin", "լուսանցքն է", "поле")], 0),
        q(t("A row of identical windows creates…", "Միանման պատուհանների շարքը ստեղծում է…", "Ряд одинаковых окон создаёт…"), [t("contrast", "կոնտրաստ", "контраст"), t("rhythm", "ռիթմ", "ритм"), t("asymmetry", "անհամաչափություն", "асимметрию")], 1),
        q(t("Which shape is heavier for the eye?", "Որ ձևն է աչքի համար ավելի ծանր։", "Какая форма тяжелее для глаза?"), [t("small and pale", "փոքր և գունատ", "маленькая и бледная"), t("light grey", "բաց մոխրագույն", "светло-серая"), t("big and dark", "մեծ և մուգ", "большая и тёмная")], 2),
        q(t("A composition built on horizontals and verticals is…", "Հորիզոնականների և ուղղահայացների վրա կառուցված կոմպոզիցիան…", "Композиция на горизонталях и вертикалях…"), [t("static", "ստատիկ է", "статичная"), t("dynamic", "դինամիկ է", "динамичная"), t("chaotic", "քաոսային է", "хаотичная")], 0),
        q(t("When the left and right halves mirror each other, it is…", "Երբ ձախ և աջ կեսերը միմյանց արտացոլում են, դա…", "Когда левая и правая половины зеркальны, это…"), [t("rhythm", "ռիթմ է", "ритм"), t("symmetry", "համաչափություն է", "симметрия"), t("contrast", "կոնտրաստ է", "контраст")], 1),
        q(t("The simplest elements of a flat composition are…", "Հարթ կոմպոզիցիայի ամենապարզ տարրերն են…", "Простейшие элементы плоскостной композиции —…"), [t("columns and arches", "սյուներ և կամարներ", "колонны и арки"), t("chairs and tables", "աթոռներ և սեղաններ", "стулья и столы"), t("point, line and spot", "կետ, գիծ և բիծ", "точка, линия и пятно")], 2),
      ],
    ),
    lesson(
      "colour-in-design",
      ["Colour in design: harmony and contrast", "Գույնը դիզայնում․ հարմոնիա և կոնտրաստ", "Цвет — элемент композиционного творчества"],
      {
        en: ["Know the main colour harmonies used by designers", "Understand how colour changes the visual weight and mood of a composition", "Choose a colour scheme for a design task"],
        hy: ["Իմանալ դիզայներների օգտագործած հիմնական գունային հարմոնիաները", "Հասկանալ, թե ինչպես է գույնը փոխում կոմպոզիցիայի տեսողական ծանրությունը և տրամադրությունը", "Ընտրել գունային սխեմա դիզայնի առաջադրանքի համար"],
        ru: ["Знать основные цветовые гармонии, которыми пользуются дизайнеры", "Понимать, как цвет меняет зрительный вес и настроение композиции", "Подобрать цветовую схему для дизайнерской задачи"],
      },
      {
        en: `## Colour works

In design, colour is not decoration only. It **attracts attention**, **groups** things, **tells** us what is important and creates a **mood**. A red button says «press me», a green sign says «exit», a calm blue makes a hospital feel safe.

~~~art
palette digital eco bauhaus
~~~

## Colour harmonies

Remember the colour wheel. Designers use a few proven schemes:

| Harmony | How to choose | Feeling |
|---|---|---|
| **Monochrome** | one hue in light and dark shades | calm, elegant |
| **Analogous** | three neighbours on the wheel, e.g. yellow, orange, red | soft, natural |
| **Complementary** | two opposite colours, e.g. blue and orange | bright, energetic |
| **Triad** | three colours evenly spaced, e.g. red, yellow, blue | lively, playful |
| **Accent** | neutral greys or whites plus one bright colour | modern, clear |

~~~art
wheel modes=complementary,analogous,triad
~~~

## Rules designers follow

* **Contrast for reading.** Dark text on light background or light on dark. Yellow text on white cannot be read.
* **60–30–10.** About 60% main colour, 30% second colour, 10% accent.
* **Warm comes forward, cool goes back.** A warm red shape seems closer than a blue one of the same size.
* **Colour has meaning.** Red can mean danger or celebration; green, nature or permission; but meanings differ between cultures.
* **Fewer is stronger.** Two or three colours are usually enough.

## Colours of a country

Flags are the simplest colour compositions. The flag of Armenia has three horizontal stripes: red, blue and apricot (orange). The flag of Russia is white, blue and red. Many cities and brands also choose their own colours, like the pink tuff of Yerevan.

~~~art
palette armenia-flag russia-flag
~~~

## Task

Make three versions of the same simple composition (for example, a square with three shapes): monochrome, complementary and accent. Compare which is calm and which is loud.

~~~art
tints
~~~

~~~art
tasks
1. Name three jobs colour does in design.
2. What is a monochrome scheme?
3. Which colours are complementary to blue?
4. Explain the 60–30–10 rule.
5. Why can't yellow text be used on a white background?
6. What are the colours of the Armenian flag?
7. Make three colour versions of one composition.
~~~

~~~art
hints
1. Attracts attention, groups things, creates mood (also shows what is important). 2. One hue in light and dark shades. 3. Orange. 4. About 60% main colour, 30% second colour, 10% accent. 5. The contrast is too weak to read. 6. Red, blue and apricot. 7. Your work.
~~~`,
        hy: `## Գույնն աշխատում է

Դիզայնում գույնը միայն զարդ չէ։ Այն **գրավում է ուշադրությունը**, **խմբավորում** է իրերը, **ասում** է, թե ինչն է կարևոր, և ստեղծում **տրամադրություն**։ Կարմիր կոճակն ասում է «սեղմիր ինձ», կանաչ նշանը՝ «ելք», հանգիստ կապույտը հիվանդանոցը դարձնում է ապահով թվացող։

~~~art
palette digital eco bauhaus
~~~

## Գունային հարմոնիաներ

Հիշիր գունային շրջանը։ Դիզայներներն օգտագործում են մի քանի փորձված սխեմա.

| Հարմոնիա | Ինչպես ընտրել | Զգացողություն |
|---|---|---|
| **Միագույն** | մեկ երանգ՝ բաց և մուգ տարբերակներով | հանգիստ, նրբագեղ |
| **Հարակից** | շրջանի երեք հարևան գույն, օրինակ՝ դեղին, նարնջագույն, կարմիր | մեղմ, բնական |
| **Լրացուցիչ** | երկու հակադիր գույն, օրինակ՝ կապույտ և նարնջագույն | վառ, եռանդուն |
| **Եռյակ** | երեք հավասարաչափ դասավորված գույն, օրինակ՝ կարմիր, դեղին, կապույտ | աշխույժ, խաղային |
| **Շեշտ** | չեզոք մոխրագույններ կամ սպիտակներ և մեկ վառ գույն | ժամանակակից, հստակ |

~~~art
wheel modes=complementary,analogous,triad
~~~

## Կանոններ, որոնց հետևում են դիզայներները

* **Կոնտրաստ՝ ընթերցելու համար։** Մուգ տեքստ բաց ֆոնի վրա կամ բաց՝ մուգի վրա։ Դեղին տեքստը սպիտակի վրա չի կարդացվում։
* **60–30–10։** Մոտ 60%՝ հիմնական գույն, 30%՝ երկրորդ գույն, 10%՝ շեշտ։
* **Տաքն առաջ է գալիս, սառը՝ հետ գնում։** Տաք կարմիր ձևն ավելի մոտ է թվում, քան նույն չափի կապույտը։
* **Գույնն իմաստ ունի։** Կարմիրը կարող է նշանակել վտանգ կամ տոն, կանաչը՝ բնություն կամ թույլտվություն, բայց իմաստները տարբեր մշակույթներում տարբեր են։
* **Քիչն ավելի ուժեղ է։** Սովորաբար երկու կամ երեք գույնը բավական է։

## Երկրի գույները

Դրոշներն ամենապարզ գունային կոմպոզիցիաներն են։ Հայաստանի դրոշն ունի երեք հորիզոնական շերտ՝ կարմիր, կապույտ և ծիրանագույն։ Ռուսաստանի դրոշը սպիտակ, կապույտ և կարմիր է։ Շատ քաղաքներ և բրենդներ նույնպես ընտրում են իրենց գույները, ինչպես Երևանի վարդագույն տուֆը։

~~~art
palette armenia-flag russia-flag
~~~

## Առաջադրանք

Նույն պարզ կոմպոզիցիայից (օրինակ՝ քառակուսի երեք ձևով) արա երեք տարբերակ՝ միագույն, լրացուցիչ և շեշտով։ Համեմատիր, թե որն է հանգիստ, և որը՝ բարձրաձայն։

~~~art
tints
~~~

~~~art
tasks
1. Անվանիր երեք գործ, որ գույնը կատարում է դիզայնում։
2. Ինչ է միագույն սխեման։
3. Որ գույնն է լրացուցիչ կապույտին։
4. Բացատրիր 60–30–10 կանոնը։
5. Ինչու չի կարելի դեղին տեքստ օգտագործել սպիտակ ֆոնի վրա։
6. Որոնք են Հայաստանի դրոշի գույները։
7. Մեկ կոմպոզիցիայից արա երեք գունային տարբերակ։
~~~

~~~art
hints
1. Գրավում է ուշադրությունը, խմբավորում է իրերը, ստեղծում է տրամադրություն (նաև ցույց է տալիս կարևորը)։ 2. Մեկ երանգ՝ բաց և մուգ տարբերակներով։ 3. Նարնջագույնը։ 4. Մոտ 60%՝ հիմնական գույն, 30%՝ երկրորդ, 10%՝ շեշտ։ 5. Կոնտրաստը չափազանց թույլ է կարդալու համար։ 6. Կարմիր, կապույտ և ծիրանագույն։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Цвет работает

В дизайне цвет — не только украшение. Он **привлекает внимание**, **группирует** предметы, **сообщает**, что важно, и создаёт **настроение**. Красная кнопка говорит «нажми меня», зелёный знак — «выход», спокойный голубой делает больницу уютной.

~~~art
palette digital eco bauhaus
~~~

## Цветовые гармонии

Вспомни цветовой круг. Дизайнеры пользуются несколькими проверенными схемами:

| Гармония | Как подобрать | Впечатление |
|---|---|---|
| **Монохромная** | один цвет в светлых и тёмных оттенках | спокойная, изящная |
| **Родственная** | три соседа по кругу, например жёлтый, оранжевый, красный | мягкая, природная |
| **Контрастная** | два противоположных цвета, например синий и оранжевый | яркая, энергичная |
| **Триада** | три цвета на равном расстоянии, например красный, жёлтый, синий | живая, весёлая |
| **Акцентная** | нейтральные серые или белые плюс один яркий цвет | современная, ясная |

~~~art
wheel modes=complementary,analogous,triad
~~~

## Правила дизайнеров

* **Контраст для чтения.** Тёмный текст на светлом фоне или светлый на тёмном. Жёлтый текст на белом прочитать нельзя.
* **60–30–10.** Около 60% — основной цвет, 30% — второй, 10% — акцент.
* **Тёплое выступает, холодное отступает.** Тёплое красное пятно кажется ближе синего того же размера.
* **Цвет имеет значение.** Красный может означать опасность или праздник, зелёный — природу или разрешение; но значения в разных культурах различаются.
* **Меньше — сильнее.** Обычно хватает двух-трёх цветов.

## Цвета страны

Флаги — простейшие цветовые композиции. Флаг Армении состоит из трёх горизонтальных полос: красной, синей и абрикосовой (оранжевой). Флаг России белый, синий и красный. Многие города и бренды тоже выбирают свои цвета — как розовый туф Еревана.

~~~art
palette armenia-flag russia-flag
~~~

## Задание

Сделай три варианта одной простой композиции (например, квадрат с тремя фигурами): монохромный, контрастный и акцентный. Сравни, какой спокойный, а какой «громкий».

~~~art
tints
~~~

~~~art
tasks
1. Назови три задачи цвета в дизайне.
2. Что такое монохромная схема?
3. Какой цвет контрастен (дополнителен) синему?
4. Объясни правило 60–30–10.
5. Почему нельзя использовать жёлтый текст на белом фоне?
6. Какие цвета у флага Армении?
7. Сделай три цветовых варианта одной композиции.
~~~

~~~art
hints
1. Привлекает внимание, группирует, создаёт настроение (а также показывает главное). 2. Один цвет в светлых и тёмных оттенках. 3. Оранжевый. 4. Около 60% основного цвета, 30% второго, 10% акцента. 5. Контраст слишком слабый для чтения. 6. Красный, синий и абрикосовый. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Two opposite colours on the wheel form a … harmony.", "Շրջանի երկու հակադիր գույները կազմում են … հարմոնիա։", "Два противоположных цвета круга образуют … гармонию."), [t("complementary", "լրացուցիչ", "контрастную"), t("monochrome", "միագույն", "монохромную"), t("analogous", "հարակից", "родственную")], 0),
        q(t("In the 60–30–10 rule, 10% is the…", "60–30–10 կանոնում 10%-ը…", "В правиле 60–30–10 десять процентов — это…"), [t("background", "ֆոնն է", "фон"), t("accent", "շեշտն է", "акцент"), t("text", "տեքստն է", "текст")], 1),
        q(t("Which pair is hardest to read?", "Որ զույգն է ամենադժվարը կարդալու համար։", "Какую пару труднее всего прочитать?"), [t("black on white", "սև սպիտակի վրա", "чёрное на белом"), t("white on dark blue", "սպիտակ մուգ կապույտի վրա", "белое на тёмно-синем"), t("yellow on white", "դեղին սպիտակի վրա", "жёлтое на белом")], 2),
        q(t("A warm red shape seems … than a blue one of the same size.", "Տաք կարմիր ձևը թվում է … , քան նույն չափի կապույտը։", "Тёплое красное пятно кажется … синего того же размера."), [t("closer", "ավելի մոտ", "ближе"), t("further", "ավելի հեռու", "дальше"), t("smaller", "ավելի փոքր", "меньше")], 0),
        q(t("The third stripe of the Armenian flag is…", "Հայաստանի դրոշի երրորդ շերտը…", "Третья полоса флага Армении…"), [t("green", "կանաչ է", "зелёная"), t("apricot", "ծիրանագույն է", "абрикосовая"), t("white", "սպիտակ է", "белая")], 1),
        q(t("One hue in light and dark shades is a … scheme.", "Մեկ երանգը բաց և մուգ տարբերակներով … սխեմա է։", "Один цвет в светлых и тёмных оттенках — … схема."), [t("triad", "եռյակ", "триада"), t("complementary", "լրացուցիչ", "контрастная"), t("monochrome", "միագույն", "монохромная")], 2),
      ],
    ),
    lesson(
      "typography-armenian-letters",
      ["Font and letter: Armenian and Cyrillic typography", "Տառատեսակ և տառ․ հայկական և կիրիլիցյան տիպոգրաֆիա", "Буква — строка — текст: армянский и кириллический шрифт"],
      {
        en: ["Know the history of Armenian and Cyrillic letter forms", "Learn basic typography terms: serif, sans serif, weight, spacing", "Design an initial letter or a short word in your own font"],
        hy: ["Իմանալ հայկական և կիրիլիցյան տառաձևերի պատմությունը", "Սովորել տիպոգրաֆիայի հիմնական եզրույթները՝ թաթիկ, առանց թաթիկի, հաստություն, միջատառային տարածություն", "Ստեղծել գլխատառ կամ կարճ բառ քո սեփական տառատեսակով"],
        ru: ["Знать историю армянских и кириллических букв", "Освоить основные понятия типографики: засечки, рубленый шрифт, насыщенность, интервалы", "Нарисовать буквицу или короткое слово своим шрифтом"],
      },
      {
        en: `## A letter is a picture

Every letter is a small composition of lines and spaces. **Typography** is the art of designing letters and arranging them on a page. A **font** (typeface) is a set of letters drawn in one style.

## Armenian letters

**Mesrop Mashtots** created the Armenian alphabet in 405. It had 36 letters; later **Օ** and **Ֆ** were added. Over the centuries Armenian scribes developed several scripts:

| Script | Look | Where it was used |
|---|---|---|
| **Yerkatagir** («iron letters») | tall, solemn capitals | early manuscripts and stone inscriptions |
| **Bolorgir** («round letters») | rounded small letters | manuscripts, later the basis of printed type |
| **Notrgir** | small and quick | everyday writing |
| **Shghagir** | slanted | handwriting, later the italic style |

Today Armenian designers create new fonts for books, screens and street signs. Near Artashavan in Aragatsotn stands the **Alphabet Monument** with large stone letters, made in 2005 for the 1600th anniversary of the alphabet.

~~~art
pic letter-initial
~~~

## Cyrillic letters

Cyrillic appeared in the 9th–10th centuries and is named after **Saint Cyril**. Old Russian books were written in **ustav**, solemn upright letters. In 1708 **Peter the Great** introduced the simpler **civil script**, close to the modern Russian letters.

## Words of typography

* **Serif:** small strokes at the ends of letters, as in old book fonts. **Sans serif:** without them, clean and modern.
* **Weight:** thin, regular, bold.
* **Upright** and **italic** (slanted).
* **Letter spacing** and **line spacing:** the air between letters and between lines.
* **Readability:** body text needs a simple font; bright decorative fonts are for titles.

~~~art
letters
~~~

## Designing a letter

1. Choose the first letter of your name in Armenian or Russian.
2. Draw it on squared paper; decide on the thickness of the strokes.
3. Make a version with serifs and one without.
4. Turn the best version into a decorated **initial** with an ornament, like in a manuscript.

~~~art
sketch guide=grid
Design a letter on the grid: keep the same stroke thickness and the same height as its neighbours.
~~~

~~~art
tasks
1. What is typography?
2. Who created the Armenian alphabet and when?
3. Which two letters were added to the Armenian alphabet later?
4. What does bolorgir look like?
5. What did Peter the Great change in 1708?
6. What is the difference between serif and sans serif fonts?
7. Draw the first letter of your name in two styles and decorate one as an initial.
~~~

~~~art
hints
1. The art of designing letters and arranging them on a page. 2. Mesrop Mashtots, in 405. 3. Օ and Ֆ. 4. Rounded small letters. 5. He introduced the simpler civil script. 6. Serif fonts have small strokes at the ends of letters; sans serif fonts do not. 7. Your drawings.
~~~`,
        hy: `## Տառը նկար է

Յուրաքանչյուր տառ գծերի և տարածությունների փոքր կոմպոզիցիա է։ **Տիպոգրաֆիան** տառեր նախագծելու և դրանք էջի վրա դասավորելու արվեստն է։ **Տառատեսակը** մեկ ոճով նկարված տառերի հավաքածու է։

## Հայկական տառեր

**Մեսրոպ Մաշտոցը** հայոց այբուբենը ստեղծել է 405 թվականին։ Այն ուներ 36 տառ, հետագայում ավելացան **Օ**-ն և **Ֆ**-ն։ Դարերի ընթացքում հայ գրիչները մշակել են մի քանի գիր.

| Գիր | Տեսք | Որտեղ է օգտագործվել |
|---|---|---|
| **Երկաթագիր** | բարձր, հանդիսավոր գլխատառեր | վաղ ձեռագրեր և քարե արձանագրություններ |
| **Բոլորգիր** | կլորավուն փոքրատառեր | ձեռագրեր, հետագայում՝ տպագիր տառերի հիմք |
| **Նոտրգիր** | մանր և արագ | առօրյա գրություն |
| **Շղագիր** | թեք | ձեռագիր, հետագայում՝ շեղատառ ոճ |

Այսօր հայ դիզայներները նոր տառատեսակներ են ստեղծում գրքերի, էկրանների և փողոցային ցուցանակների համար։ Արագածոտնի Արտաշավանի մոտ կանգնած է **Այբուբենի հուշարձանը**՝ մեծ քարե տառերով, ստեղծված 2005 թվականին՝ այբուբենի 1600-ամյակի առթիվ։

~~~art
pic letter-initial
~~~

## Կիրիլյան տառեր

Կիրիլիցան ի հայտ է եկել 9–10-րդ դարերում և կոչվում է **Սուրբ Կիրիլի** անունով։ Հին ռուսական գրքերը գրվում էին **ուստավով**՝ հանդիսավոր ուղիղ տառերով։ 1708 թվականին **Պետրոս Առաջինը** ներմուծեց ավելի պարզ **քաղաքացիական գիրը**, որը մոտ է ժամանակակից ռուսական տառերին։

## Տիպոգրաֆիայի բառեր

* **Թաթիկներ (սերիֆներ)**՝ փոքր գծիկներ տառերի ծայրերին, ինչպես հին գրքային տառատեսակներում։ **Առանց թաթիկի**՝ մաքուր և ժամանակակից։
* **Հաստություն**՝ բարակ, սովորական, թավ։
* **Ուղիղ** և **շեղ** տառ։
* **Միջատառային** և **միջտողային տարածություն**՝ օդը տառերի և տողերի միջև։
* **Ընթեռնելիություն**՝ հիմնական տեքստին պետք է պարզ տառատեսակ, վառ զարդարուն տառատեսակները վերնագրերի համար են։

~~~art
letters
~~~

## Տառի նախագծում

1. Ընտրիր քո անվան առաջին տառը հայերեն կամ ռուսերեն։
2. Նկարիր այն վանդակավոր թղթի վրա, որոշիր գծերի հաստությունը։
3. Արա մի տարբերակ թաթիկներով և մեկը՝ առանց։
4. Լավագույն տարբերակը դարձրու զարդարված **գլխազարդ տառ**՝ զարդանախշով, ինչպես ձեռագրում։

~~~art
sketch guide=grid
Ձևավորի՛ր տառ ցանցի վրա․ պահպանի՛ր գծի նույն հաստությունը և նույն բարձրությունը, ինչ հարևան տառերինը։
~~~

~~~art
tasks
1. Ինչ է տիպոգրաֆիան։
2. Ով և երբ է ստեղծել հայոց այբուբենը։
3. Որ երկու տառն են հետագայում ավելացվել հայոց այբուբենին։
4. Ինչ տեսք ունի բոլորգիրը։
5. Ինչ փոխեց Պետրոս Առաջինը 1708 թվականին։
6. Ինչով են տարբերվում թաթիկներով և առանց թաթիկի տառատեսակները։
7. Նկարիր քո անվան առաջին տառն երկու ոճով և մեկը զարդարիր որպես գլխազարդ տառ։
~~~

~~~art
hints
1. Տառեր նախագծելու և էջի վրա դասավորելու արվեստը։ 2. Մեսրոպ Մաշտոցը, 405 թվականին։ 3. Օ և Ֆ։ 4. Կլորավուն փոքրատառեր։ 5. Ներմուծեց ավելի պարզ քաղաքացիական գիրը։ 6. Թաթիկներով տառատեսակներն ունեն փոքր գծիկներ տառերի ծայրերին, առանց թաթիկիները՝ ոչ։ 7. Քո նկարները։
~~~`,
        ru: `## Буква — это рисунок

Каждая буква — маленькая композиция из линий и промежутков. **Типографика** — искусство создавать буквы и располагать их на странице. **Шрифт** — набор букв, нарисованных в одном стиле.

## Армянские буквы

**Месроп Маштоц** создал армянский алфавит в 405 году. В нём было 36 букв; позже добавились **Օ** и **Ֆ**. За века армянские писцы выработали несколько видов письма:

| Письмо | Вид | Где использовалось |
|---|---|---|
| **Еркатагир** («железное письмо») | высокие торжественные прописные | ранние рукописи и надписи на камне |
| **Болоргир** («круглое письмо») | округлые строчные буквы | рукописи, позже основа печатного шрифта |
| **Нотргир** | мелкое и быстрое | повседневное письмо |
| **Шхагир** | наклонное | скоропись, позже курсив |

Сегодня армянские дизайнеры создают новые шрифты для книг, экранов и уличных вывесок. Возле Арташавана в Арагацотне стоит **памятник армянскому алфавиту** с большими каменными буквами, созданный в 2005 году к 1600-летию алфавита.

~~~art
pic letter-initial
~~~

## Кириллица

Кириллица появилась в IX–X веках и названа в честь **святого Кирилла**. Древнерусские книги писали **уставом** — торжественными прямыми буквами. В 1708 году **Пётр I** ввёл более простой **гражданский шрифт**, близкий к современным русским буквам.

## Слова типографики

* **Засечки:** маленькие штрихи на концах букв, как в старых книжных шрифтах. **Рубленый шрифт** (без засечек) — чистый и современный.
* **Насыщенность:** светлый, нормальный, жирный.
* **Прямое** и **курсивное** (наклонное) начертание.
* **Межбуквенный** и **межстрочный интервал** (интерлиньяж): воздух между буквами и строками.
* **Удобочитаемость:** для основного текста нужен простой шрифт, яркие декоративные — для заголовков.

~~~art
letters
~~~

## Рисуем букву

1. Выбери первую букву своего имени по-армянски или по-русски.
2. Нарисуй её на клетчатой бумаге; реши, какой толщины будут штрихи.
3. Сделай вариант с засечками и без.
4. Преврати лучший вариант в украшенную **буквицу** с орнаментом, как в рукописи.

~~~art
sketch guide=grid
Нарисуй букву на сетке: держи ту же толщину штриха и ту же высоту, что у соседних букв.
~~~

~~~art
tasks
1. Что такое типографика?
2. Кто и когда создал армянский алфавит?
3. Какие две буквы позже добавились к армянскому алфавиту?
4. Как выглядит болоргир?
5. Что изменил Пётр I в 1708 году?
6. Чем шрифт с засечками отличается от рубленого?
7. Нарисуй первую букву своего имени в двух стилях и укрась одну как буквицу.
~~~

~~~art
hints
1. Искусство создавать буквы и располагать их на странице. 2. Месроп Маштоц, в 405 году. 3. Օ и Ֆ. 4. Округлые строчные буквы. 5. Ввёл более простой гражданский шрифт. 6. У шрифта с засечками на концах букв есть маленькие штрихи, у рубленого их нет. 7. Твои рисунки.
~~~`,
      },
      [
        q(t("The Armenian alphabet was created in…", "Հայոց այբուբենը ստեղծվել է…", "Армянский алфавит создан в…"), [t("405", "405 թվականին", "405 году"), t("1512", "1512 թվականին", "1512 году"), t("1708", "1708 թվականին", "1708 году")], 0),
        q(t("Tall, solemn Armenian capitals are called…", "Բարձր, հանդիսավոր հայկական գլխատառերը կոչվում են…", "Высокие торжественные армянские прописные называются…"), [t("notrgir", "նոտրգիր", "нотргир"), t("yerkatagir", "երկաթագիր", "еркатагир"), t("shghagir", "շղագիր", "шхагир")], 1),
        q(t("A font without small strokes at the ends of letters is…", "Տառերի ծայրերին առանց գծիկների տառատեսակը…", "Шрифт без штрихов на концах букв называется…"), [t("italic", "շեղատառ է", "курсивом"), t("bold", "թավ է", "жирным"), t("sans serif", "առանց թաթիկի է", "рубленым")], 2),
        q(t("The civil script in Russia was introduced by…", "Ռուսաստանում քաղաքացիական գիրը ներմուծել է…", "Гражданский шрифт в России ввёл…"), [t("Peter the Great", "Պետրոս Առաջինը", "Пётр I"), t("Ivan the Terrible", "Իվան Ահեղը", "Иван Грозный"), t("Catherine the Great", "Եկատերինա Երկրորդը", "Екатерина II")], 0),
        q(t("The air between lines of text is called…", "Տեքստի տողերի միջև օդը կոչվում է…", "Воздух между строками текста называется…"), [t("weight", "հաստություն", "насыщенностью"), t("line spacing", "միջտողային տարածություն", "межстрочным интервалом"), t("serif", "թաթիկ", "засечкой")], 1),
        q(t("Decorative fonts are best used for…", "Զարդարուն տառատեսակները լավագույնս օգտագործվում են…", "Декоративные шрифты лучше всего подходят для…"), [t("long body text", "երկար հիմնական տեքստի համար", "длинного основного текста"), t("footnotes", "ծանոթագրությունների համար", "сносок"), t("titles", "վերնագրերի համար", "заголовков")], 2),
      ],
    ),
    lesson(
      "poster-design",
      ["Poster: image plus text", "Պաստառ․ պատկեր և տեքստ", "Плакат: изображение и слово"],
      {
        en: ["Know what a poster is and how it differs from a painting", "Learn how image and text work together in a poster", "Design a poster for a school event or a social idea"],
        hy: ["Իմանալ, թե ինչ է պաստառը և ինչով է տարբերվում կտավից", "Իմանալ, թե ինչպես են պատկերն ու տեքստը միասին աշխատում պաստառում", "Ստեղծել պաստառ դպրոցական միջոցառման կամ հասարակական գաղափարի համար"],
        ru: ["Знать, что такое плакат и чем он отличается от картины", "Понять, как изображение и слово работают вместе в плакате", "Создать плакат к школьному событию или на социальную тему"],
      },
      {
        en: `## A shout on the wall

A painting is looked at for a long time. A **poster** must be understood **in three seconds**, from a distance, by a person passing by. That is why a poster speaks loudly and briefly: one idea, a big image, a short text.

~~~art
pic poster
~~~

## Kinds of posters

* **Advertising:** a concert, a film, a product, an exhibition.
* **Social:** save water, do not drop litter, read books, be kind.
* **Political and historical:** calls to people at important moments.
* **Information:** a timetable, rules, a map of a museum.

## Famous posters

* At the end of the 19th century **Henri de Toulouse-Lautrec** drew posters for the Paris cabaret Moulin Rouge: flat bright colour spots and bold silhouettes.
* In 1920 **Dmitry Moor** made the poster «Have you volunteered?», where a soldier points straight at the viewer.
* **Vladimir Mayakovsky** and other artists made the «ROSTA Windows», poster comics with short rhyming texts.
* Today posters for festivals, theatres and films are made in Yerevan, Moscow and all over the world, often on a computer.

~~~art
palette loud bauhaus
~~~

## How a poster is built

1. **Idea:** one message, one sentence.
2. **Image:** simple and strong, often a symbol or a silhouette. A picture can be a **metaphor**: a drop of water as a tear, a tree as a pair of lungs.
3. **Slogan:** short, 3–7 words, large letters.
4. **Information:** date, place, smaller letters, at the bottom or side.
5. **Contrast and colour:** two or three colours, a clear dominant.
6. **Font:** bold and readable; the style of the letters supports the mood.

~~~art
steps poster-layout
~~~

## The image and the word

The text should not repeat the picture; they must **complete** each other. A picture of a melting ice cream with the slogan «The planet is melting too» says more than either part alone.

~~~art
letters
~~~

## Task

Choose a topic: a school concert, a book day, saving water, or a city cleanup. Make three thumbnails, choose the best, then draw the poster in A3 with gouache or markers.

~~~art
compose
~~~

~~~art
tasks
1. How long should it take to understand a poster?
2. Name four kinds of posters.
3. What did Toulouse-Lautrec draw posters for?
4. What does the soldier do in Moor's poster?
5. How long should a slogan be?
6. Why must text and image not repeat each other?
7. Make a poster on a topic of your choice.
~~~

~~~art
hints
1. About three seconds. 2. Advertising, social, political (historical), information. 3. The Paris cabaret Moulin Rouge. 4. He points straight at the viewer. 5. About 3–7 words. 6. They must complete each other and together say more. 7. Your poster.
~~~`,
        hy: `## Ճիչ պատի վրա

Կտավին երկար են նայում։ **Պաստառը** պետք է հասկանալի լինի **երեք վայրկյանում**, հեռվից, կողքով անցնող մարդու համար։ Ահա թե ինչու պաստառը խոսում է բարձր և կարճ՝ մեկ գաղափար, մեծ պատկեր, կարճ տեքստ։

~~~art
pic poster
~~~

## Պաստառների տեսակները

* **Գովազդային**՝ համերգ, ֆիլմ, ապրանք, ցուցահանդես։
* **Սոցիալական**՝ խնայիր ջուրը, աղբ մի գցիր, գիրք կարդա, բարի եղիր։
* **Քաղաքական և պատմական**՝ կոչեր մարդկանց կարևոր պահերին։
* **Տեղեկատվական**՝ ժամանակացույց, կանոններ, թանգարանի քարտեզ։

## Հայտնի պաստառներ

* 19-րդ դարի վերջում **Անրի դը Թուլուզ-Լոտրեկը** պաստառներ էր նկարում Փարիզի «Մուլեն Ռուժ» կաբարեի համար՝ հարթ վառ գունաբծեր և համարձակ ուրվագծեր։
* 1920 թվականին **Դմիտրի Մոորը** ստեղծեց «Դու գրանցվե՞լ ես կամավոր» պաստառը, որտեղ զինվորը մատնացույց է անում ուղիղ դիտողին։
* **Վլադիմիր Մայակովսկին** և այլ նկարիչներ ստեղծում էին «ՌՈՍՏԱ-ի պատուհանները»՝ պաստառ-կոմիքսներ կարճ հանգավոր տեքստերով։
* Այսօր փառատոների, թատրոնների և ֆիլմերի պաստառներ ստեղծվում են Երևանում, Մոսկվայում և ամբողջ աշխարհում, հաճախ համակարգչով։

~~~art
palette loud bauhaus
~~~

## Ինչպես է կառուցվում պաստառը

1. **Գաղափար**՝ մեկ ուղերձ, մեկ նախադասություն։
2. **Պատկեր**՝ պարզ և ուժեղ, հաճախ խորհրդանիշ կամ ուրվագիծ։ Նկարը կարող է լինել **փոխաբերություն**՝ ջրի կաթիլն որպես արցունք, ծառն որպես թոքեր։
3. **Կարգախոս**՝ կարճ, 3–7 բառ, մեծ տառերով։
4. **Տեղեկություն**՝ ամսաթիվ, վայր, ավելի փոքր տառերով, ներքևում կամ կողքին։
5. **Կոնտրաստ և գույն**՝ երկու-երեք գույն, հստակ դոմինանտ։
6. **Տառատեսակ**՝ թավ և ընթեռնելի, տառերի ոճն աջակցում է տրամադրությանը։

~~~art
steps poster-layout
~~~

## Պատկեր և բառ

Տեքստը չպետք է կրկնի նկարը, դրանք պետք է **լրացնեն** միմյանց։ Հալվող պաղպաղակի նկարը «Մոլորակն էլ է հալվում» կարգախոսով ավելին է ասում, քան մասերից յուրաքանչյուրն առանձին։

~~~art
letters
~~~

## Առաջադրանք

Ընտրիր թեմա՝ դպրոցական համերգ, գրքի օր, ջրի խնայողություն կամ քաղաքի մաքրում։ Արա երեք փոքր էսքիզ, ընտրիր լավագույնը, ապա պաստառը նկարիր A3 չափով՝ գուաշով կամ մարկերներով։

~~~art
compose
~~~

~~~art
tasks
1. Որքան ժամանակում պետք է պաստառը հասկանալի լինի։
2. Անվանիր պաստառների չորս տեսակ։
3. Ինչի համար էր Թուլուզ-Լոտրեկը պաստառներ նկարում։
4. Ինչ է անում զինվորը Մոորի պաստառում։
5. Որքան երկար պետք է լինի կարգախոսը։
6. Ինչու տեքստն ու պատկերը չպետք է կրկնեն միմյանց։
7. Ստեղծիր պաստառ քո ընտրած թեմայով։
~~~

~~~art
hints
1. Մոտ երեք վայրկյանում։ 2. Գովազդային, սոցիալական, քաղաքական (պատմական), տեղեկատվական։ 3. Փարիզի «Մուլեն Ռուժ» կաբարեի համար։ 4. Մատնացույց է անում ուղիղ դիտողին։ 5. Մոտ 3–7 բառ։ 6. Նրանք պետք է լրացնեն միմյանց և միասին ավելին ասեն։ 7. Քո պաստառը։
~~~`,
        ru: `## Крик на стене

На картину смотрят долго. **Плакат** должен быть понятен **за три секунды**, издалека, человеку, который проходит мимо. Поэтому плакат говорит громко и кратко: одна идея, крупное изображение, короткий текст.

~~~art
pic poster
~~~

## Виды плакатов

* **Рекламный:** концерт, фильм, товар, выставка.
* **Социальный:** береги воду, не мусори, читай книги, будь добрым.
* **Политический и исторический:** призывы к людям в важные моменты.
* **Информационный:** расписание, правила, схема музея.

## Знаменитые плакаты

* В конце XIX века **Анри де Тулуз-Лотрек** рисовал афиши для парижского кабаре «Мулен Руж»: плоские яркие пятна цвета и смелые силуэты.
* В 1920 году **Дмитрий Моор** создал плакат «Ты записался добровольцем?», где красноармеец указывает пальцем прямо на зрителя.
* **Владимир Маяковский** и другие художники делали «Окна РОСТА» — плакаты-комиксы с короткими стихотворными подписями.
* Сегодня плакаты к фестивалям, спектаклям и фильмам создают в Ереване, Москве и по всему миру, часто на компьютере.

~~~art
palette loud bauhaus
~~~

## Как строится плакат

1. **Идея:** одно сообщение, одна фраза.
2. **Изображение:** простое и сильное, часто символ или силуэт. Картинка может быть **метафорой**: капля воды как слеза, дерево как лёгкие.
3. **Слоган:** короткий, 3–7 слов, крупными буквами.
4. **Информация:** дата, место — мельче, внизу или сбоку.
5. **Контраст и цвет:** два-три цвета, ясная доминанта.
6. **Шрифт:** жирный и читаемый; стиль букв поддерживает настроение.

~~~art
steps poster-layout
~~~

## Изображение и слово

Текст не должен повторять картинку — они должны **дополнять** друг друга. Тающее мороженое со слоганом «Планета тоже тает» говорит больше, чем каждая часть по отдельности.

~~~art
letters
~~~

## Задание

Выбери тему: школьный концерт, день книги, экономия воды или уборка города. Сделай три маленьких эскиза, выбери лучший и нарисуй плакат формата А3 гуашью или маркерами.

~~~art
compose
~~~

~~~art
tasks
1. За сколько времени должен быть понятен плакат?
2. Назови четыре вида плакатов.
3. Для чего рисовал афиши Тулуз-Лотрек?
4. Что делает красноармеец на плакате Моора?
5. Какой длины должен быть слоган?
6. Почему текст и изображение не должны повторять друг друга?
7. Создай плакат на выбранную тему.
~~~

~~~art
hints
1. Примерно за три секунды. 2. Рекламный, социальный, политический (исторический), информационный. 3. Для парижского кабаре «Мулен Руж». 4. Указывает пальцем прямо на зрителя. 5. Примерно 3–7 слов. 6. Они должны дополнять друг друга и вместе говорить больше. 7. Твой плакат.
~~~`,
      },
      [
        q(t("A poster should be understood in about…", "Պաստառը պետք է հասկանալի լինի մոտ…", "Плакат должен быть понятен примерно за…"), [t("three seconds", "երեք վայրկյանում", "три секунды"), t("three minutes", "երեք րոպեում", "три минуты"), t("an hour", "մեկ ժամում", "час")], 0),
        q(t("A poster about saving water is…", "Ջրի խնայողության մասին պաստառը…", "Плакат об экономии воды —…"), [t("advertising", "գովազդային է", "рекламный"), t("social", "սոցիալական է", "социальный"), t("a timetable", "ժամանակացույց է", "расписание")], 1),
        q(t("Toulouse-Lautrec drew posters for…", "Թուլուզ-Լոտրեկը պաստառներ էր նկարում…", "Тулуз-Лотрек рисовал афиши для…"), [t("the Bolshoi Theatre", "Մեծ թատրոնի համար", "Большого театра"), t("the Olympic Games", "Օլիմպիական խաղերի համար", "Олимпийских игр"), t("the Moulin Rouge", "«Մուլեն Ռուժի» համար", "«Мулен Руж»")], 2),
        q(t("A good slogan has about…", "Լավ կարգախոսն ունի մոտ…", "Хороший слоган содержит примерно…"), [t("3–7 words", "3–7 բառ", "3–7 слов"), t("30 words", "30 բառ", "30 слов"), t("one letter", "մեկ տառ", "одну букву")], 0),
        q(t("A drop of water drawn as a tear is a…", "Արցունքի տեսքով նկարված ջրի կաթիլը…", "Капля воды, нарисованная как слеза, — это…"), [t("timetable", "ժամանակացույց է", "расписание"), t("metaphor", "փոխաբերություն է", "метафора"), t("serif", "թաթիկ է", "засечка")], 1),
        q(t("Image and text in a poster should…", "Պաստառում պատկերն ու տեքստը պետք է…", "Изображение и текст в плакате должны…"), [t("repeat each other", "կրկնեն միմյանց", "повторять друг друга"), t("be the same size", "նույն չափի լինեն", "быть одного размера"), t("complete each other", "լրացնեն միմյանց", "дополнять друг друга")], 2),
      ],
    ),
    lesson(
      "book-magazine-layout",
      ["Book and magazine layout", "Գրքի և ամսագրի մակետ", "Многообразие форм полиграфического дизайна"],
      {
        en: ["Know the parts of a book and a magazine page", "Understand the layout grid and how text and pictures share a spread", "Make a mock-up of a small book or a magazine spread"],
        hy: ["Իմանալ գրքի և ամսագրի էջի մասերը", "Հասկանալ մակետի ցանցը և թե ինչպես են տեքստն ու նկարները բաժանում տարածությունը", "Պատրաստել փոքր գրքի կամ ամսագրի տարածքի մակետ"],
        ru: ["Знать части книги и журнальной полосы", "Понимать модульную сетку и то, как текст и иллюстрации делят разворот", "Сделать макет маленькой книги или журнального разворота"],
      },
      {
        en: `## The designed book

Every book, magazine, booklet or menu was planned by a **graphic designer**. The designer decides the size, the font, where pictures go and how much white space is left. This plan is called a **layout**, and a hand-made model of it is a **mock-up**.

## Parts of a book

| Part | What it is |
|---|---|
| **Cover** | the hard or soft outside; shows the title, author and an image |
| **Spine** | the narrow back edge, which we see on a shelf |
| **Endpapers** | the sheets glued inside the covers |
| **Title page** | the first important page with the title, author and publisher |
| **Spread** | two pages seen together when the book is open |
| **Margins** | empty fields around the text |
| **Illustrations** | pictures; a full-page picture before the title page is a frontispiece |

Armenian manuscripts were real works of book design: decorated title pages, margins with birds and plants, and initial letters made of figures.

~~~art
pic book-spread
~~~

## The grid

Designers divide a page into **columns** and **rows**, an invisible **grid**. Text and pictures are placed along the grid lines, so the pages look orderly and the reader's eye moves easily. A novel usually has one wide column; a magazine or newspaper has two to four.

~~~art
sketch guide=grid
Lay out a spread on the grid: a big picture across columns, a heading, two text columns as grey lines.
~~~

## A magazine spread

* **Headline:** large and bold, the dominant of the spread.
* **Lead:** a short introduction in bigger letters.
* **Body text:** in columns, a readable font.
* **Photos and captions:** a large photo attracts attention; captions explain.
* **White space:** empty areas give rest to the eye. Do not fill everything.

~~~art
compose
~~~

## Make a mock-up

1. Fold two A4 sheets in half and put one inside the other: you have an 8-page booklet.
2. Plan on a small sketch what goes on each page: cover, title page, text, pictures.
3. Draw a grid of two columns lightly in pencil.
4. Glue or draw pictures, write a headline and short texts (lines can show the body text).
5. Design the cover with a title, a picture and the author's name: you.

~~~art
tasks
1. What is a layout, and what is a mock-up?
2. What is the spine of a book?
3. What is a spread?
4. Why do designers use a grid?
5. What is the lead in a magazine article?
6. Why is white space important?
7. Make an 8-page booklet mock-up on a topic you like.
~~~

~~~art
hints
1. A layout is the plan of the pages; a mock-up is a hand-made model of it. 2. The narrow back edge we see on a shelf. 3. Two pages seen together when the book is open. 4. So that pages look orderly and are easy to read. 5. A short introduction in bigger letters. 6. It gives rest to the eye. 7. Your booklet.
~~~`,
        hy: `## Ձևավորված գիրքը

Յուրաքանչյուր գիրք, ամսագիր, բուկլետ կամ ճաշացանկ պլանավորել է **գրաֆիկական դիզայները**։ Դիզայներն որոշում է չափը, տառատեսակը, թե որտեղ են լինելու նկարները և որքան դատարկ տարածություն է մնալու։ Այս պլանը կոչվում է **մակետավորում**, իսկ դրա ձեռքով պատրաստված մոդելը՝ **մակետ**։

## Գրքի մասերը

| Մաս | Ինչ է |
|---|---|
| **Կազմ** | կոշտ կամ փափուկ արտաքին մասը, ցույց է տալիս վերնագիրը, հեղինակին և պատկեր |
| **Կողք** | նեղ հետևի եզրը, որը տեսնում ենք դարակի վրա |
| **Ներքին կազմաթերթեր** | կազմի ներսում սոսնձված թերթերը |
| **Տիտղոսաթերթ** | առաջին կարևոր էջը՝ վերնագրով, հեղինակով և հրատարակչով |
| **Բացվածք** | երկու էջ, որ տեսնում ենք միասին բաց գրքում |
| **Լուսանցքներ** | դատարկ դաշտեր տեքստի շուրջ |
| **Նկարազարդումներ** | նկարներ, տիտղոսաթերթից առաջ ամբողջ էջով նկարը ֆրոնտիսպիս է |

Հայկական ձեռագրերը գրքի դիզայնի իսկական գործեր էին՝ զարդարված տիտղոսաթերթեր, թռչուններով և բույսերով լուսանցքներ, պատկերներից կազմված գլխատառեր։

~~~art
pic book-spread
~~~

## Ցանցը

Դիզայներներն էջը բաժանում են **սյունակների** և **տողաշարերի**՝ անտեսանելի **ցանցի**։ Տեքստն ու նկարները տեղադրվում են ցանցի գծերով, այնպես որ էջերը կարգավորված տեսք ունեն, և ընթերցողի աչքը հեշտությամբ է շարժվում։ Վեպը սովորաբար ունի մեկ լայն սյունակ, ամսագիրը կամ թերթը՝ երկուսից չորս։

~~~art
sketch guide=grid
Դասավորի՛ր տարածքը ցանցի վրա․ մեծ նկար սյունակների վրայով, վերնագիր, տեքստի երկու սյունակ՝ մոխրագույն գծերով։
~~~

## Ամսագրի բացվածք

* **Վերնագիր**՝ մեծ և թավ, բացվածքի դոմինանտը։
* **Լիդ**՝ կարճ ներածություն ավելի մեծ տառերով։
* **Հիմնական տեքստ**՝ սյունակներով, ընթեռնելի տառատեսակով։
* **Լուսանկարներ և ստորագրություններ**՝ մեծ լուսանկարը գրավում է ուշադրությունը, ստորագրությունները բացատրում են։
* **Դատարկ տարածություն**՝ դատարկ մասերը հանգիստ են տալիս աչքին։ Ամեն ինչ մի լցրու։

~~~art
compose
~~~

## Պատրաստիր մակետ

1. Երկու A4 թերթ ծալիր կիսով և մեկը դիր մյուսի մեջ՝ ունես 8 էջանոց գրքույկ։
2. Փոքր էսքիզում պլանավորիր, թե ինչ է լինելու յուրաքանչյուր էջում՝ կազմ, տիտղոսաթերթ, տեքստ, նկարներ։
3. Մատիտով թեթևակի գծիր երկու սյունակի ցանց։
4. Սոսնձիր կամ նկարիր նկարներ, գրիր վերնագիր և կարճ տեքստեր (գծերը կարող են ցույց տալ հիմնական տեքստը)։
5. Ձևավորիր կազմը՝ վերնագրով, նկարով և հեղինակի անունով՝ քո։

~~~art
tasks
1. Ինչ է մակետավորումը, և ինչ է մակետը։
2. Ինչ է գրքի կողքը։
3. Ինչ է բացվածքը։
4. Ինչու են դիզայներներն օգտագործում ցանց։
5. Ինչ է լիդն ամսագրի հոդվածում։
6. Ինչու է կարևոր դատարկ տարածությունը։
7. Պատրաստիր 8 էջանոց գրքույկի մակետ քեզ դուր եկող թեմայով։
~~~

~~~art
hints
1. Մակետավորումն էջերի պլանն է, մակետը՝ դրա ձեռքով պատրաստված մոդելը։ 2. Նեղ հետևի եզրը, որը տեսնում ենք դարակի վրա։ 3. Երկու էջ, որ տեսնում ենք միասին բաց գրքում։ 4. Որպեսզի էջերը կարգավորված լինեն և հեշտ կարդացվեն։ 5. Կարճ ներածություն ավելի մեծ տառերով։ 6. Այն հանգիստ է տալիս աչքին։ 7. Քո գրքույկը։
~~~`,
        ru: `## Книга, которую придумали

Каждую книгу, журнал, буклет или меню спланировал **графический дизайнер**. Он решает, каким будет формат, шрифт, где разместить иллюстрации и сколько оставить свободного места. Этот план называется **вёрсткой**, а сделанная руками модель — **макетом**.

## Части книги

| Часть | Что это |
|---|---|
| **Обложка (переплёт)** | твёрдая или мягкая внешняя часть; на ней название, автор и изображение |
| **Корешок** | узкий задний край, который виден на полке |
| **Форзацы** | листы, приклеенные изнутри к переплёту |
| **Титульный лист** | первая важная страница с названием, автором и издательством |
| **Разворот** | две страницы, видимые вместе в открытой книге |
| **Поля** | пустое пространство вокруг текста |
| **Иллюстрации** | картинки; рисунок на всю страницу перед титулом — фронтиспис |

Армянские рукописи были настоящими произведениями книжного дизайна: украшенные заставки, поля с птицами и растениями, буквицы из фигур.

~~~art
pic book-spread
~~~

## Модульная сетка

Дизайнеры делят страницу на **колонки** и **ряды** — невидимую **сетку**. Текст и картинки ставят по линиям сетки, поэтому страницы выглядят упорядоченно, а взгляд читателя движется легко. В романе обычно одна широкая колонка, в журнале или газете — от двух до четырёх.

~~~art
sketch guide=grid
Сверстай разворот по сетке: большая картинка через колонки, заголовок, две колонки текста серыми линиями.
~~~

## Журнальный разворот

* **Заголовок:** крупный и жирный, доминанта разворота.
* **Лид:** короткое вступление более крупным шрифтом.
* **Основной текст:** колонками, читаемым шрифтом.
* **Фотографии и подписи:** большое фото привлекает внимание, подписи объясняют.
* **Свободное пространство:** пустые места дают глазу отдохнуть. Не заполняй всё.

~~~art
compose
~~~

## Сделай макет

1. Сложи два листа А4 пополам и вложи один в другой: получилась 8-страничная книжечка.
2. На маленьком эскизе спланируй, что будет на каждой странице: обложка, титул, текст, картинки.
3. Слегка начерти карандашом сетку из двух колонок.
4. Наклей или нарисуй картинки, напиши заголовок и короткие тексты (основной текст можно обозначить линиями).
5. Оформи обложку: название, картинка и имя автора — твоё.

~~~art
tasks
1. Что такое вёрстка и что такое макет?
2. Что такое корешок книги?
3. Что такое разворот?
4. Зачем дизайнеры используют сетку?
5. Что такое лид в журнальной статье?
6. Почему важно свободное пространство?
7. Сделай макет 8-страничной книжечки на интересную тебе тему.
~~~

~~~art
hints
1. Вёрстка — план страниц, макет — его модель, сделанная руками. 2. Узкий задний край, который виден на полке. 3. Две страницы, видимые вместе в открытой книге. 4. Чтобы страницы были упорядоченными и легко читались. 5. Короткое вступление более крупным шрифтом. 6. Оно даёт глазу отдохнуть. 7. Твоя книжечка.
~~~`,
      },
      [
        q(t("The narrow edge of a book we see on a shelf is the…", "Գրքի նեղ եզրը, որ տեսնում ենք դարակի վրա…", "Узкий край книги, видимый на полке, — это…"), [t("spine", "կողքն է", "корешок"), t("margin", "լուսանցքն է", "поле"), t("title page", "տիտղոսաթերթն է", "титул")], 0),
        q(t("Two pages seen together in an open book form a…", "Բաց գրքում միասին տեսանելի երկու էջը կազմում են…", "Две страницы открытой книги образуют…"), [t("column", "սյունակ", "колонку"), t("spread", "բացվածք", "разворот"), t("cover", "կազմ", "обложку")], 1),
        q(t("The invisible system of columns and rows on a page is the…", "Էջի սյունակների և տողաշարերի անտեսանելի համակարգը…", "Невидимая система колонок и рядов на странице — это…"), [t("spine", "կողքն է", "корешок"), t("lead", "լիդն է", "лид"), t("grid", "ցանցն է", "сетка")], 2),
        q(t("The dominant of a magazine spread is usually the…", "Ամսագրի բացվածքի դոմինանտը սովորաբար…", "Доминанта журнального разворота обычно —…"), [t("headline", "վերնագիրն է", "заголовок"), t("page number", "էջի համարն է", "номер страницы"), t("caption", "ստորագրությունն է", "подпись")], 0),
        q(t("A full-page picture before the title page is a…", "Տիտղոսաթերթից առաջ ամբողջ էջով նկարը…", "Рисунок на всю страницу перед титулом — это…"), [t("lead", "լիդ է", "лид"), t("frontispiece", "ֆրոնտիսպիս է", "фронтиспис"), t("spine", "կողք է", "корешок")], 1),
        q(t("Empty areas on a page…", "Էջի դատարկ մասերը…", "Пустые места на странице…"), [t("are a mistake", "սխալ են", "это ошибка"), t("must be filled", "պետք է լցվեն", "нужно заполнить"), t("give rest to the eye", "հանգիստ են տալիս աչքին", "дают глазу отдохнуть")], 2),
      ],
    ),
    lesson(
      "signs-infographics",
      ["Signs, pictograms and infographics", "Նշաններ, պիկտոգրամներ և ինֆոգրաֆիկա", "Знаки, пиктограммы и инфографика"],
      {
        en: ["Know what pictograms and information signs are and why they work without words", "Learn how infographics turn numbers and facts into pictures", "Design a set of pictograms or a simple infographic"],
        hy: ["Իմանալ, թե ինչ են պիկտոգրամներն ու տեղեկատվական նշանները և ինչու են աշխատում առանց բառերի", "Իմանալ, թե ինչպես է ինֆոգրաֆիկան թվերն ու փաստերը վերածում նկարների", "Նախագծել պիկտոգրամների շարք կամ պարզ ինֆոգրաֆիկա"],
        ru: ["Знать, что такое пиктограммы и информационные знаки и почему они понятны без слов", "Узнать, как инфографика превращает числа и факты в изображения", "Создать набор пиктограмм или простую инфографику"],
      },
      {
        en: `## Pictures instead of words

At an airport people speak dozens of languages, but everyone understands a picture of a suitcase, a cup or a plane. Such simple pictures are **pictograms**. They are one of the oldest ideas of humanity: rock drawings and the first writing systems also used pictures for words.

~~~art
pic pictograms
~~~

## Rules of a good pictogram

* **Simple:** a silhouette, no small details.
* **One idea:** one object or one action.
* **Same style in a set:** the same line thickness, the same proportions, the same corners.
* **Readable when small:** check it at the size of a fingernail.
* **Colour code:** in road and safety signs colour and shape have a meaning: red circle for a ban, triangle for a warning, blue for information, green for safety and exit.

For the Munich Olympic Games of 1972, the designer **Otl Aicher** drew a famous set of sport pictograms on a strict grid of lines at 45 and 90 degrees. Since then every Olympics has its own set.

~~~art
steps pictogram
~~~

## Wayfinding

Signs that help people find their way in a city, a metro, a hospital or a school are called **wayfinding**. Arrows, numbers, colours of lines and clear fonts all work together. The map of the London Underground, drawn by **Harry Beck** in the 1930s, showed lines straight and stations evenly spaced, not as on a real map. Most metro maps in the world, including Moscow and Yerevan, follow this idea.

## Infographics

**Infographics** show information as pictures: charts, diagrams, maps, timelines, icons with numbers. Good infographics:

1. answer one question;
2. compare things in size or colour (a bigger bar means more);
3. use few colours and clear labels;
4. state where the numbers come from.

~~~art
pic infographic
~~~

## Task

Choose one: design a set of six pictograms for your school (library, gym, canteen, art room, toilets, exit), or make an infographic about your class: how many pupils walk, take the bus or come by car.

~~~art
tasks
1. What is a pictogram?
2. Why are pictograms used at airports?
3. What does a red circle mean on a sign?
4. Who designed the pictograms for the 1972 Munich Olympics?
5. What did Harry Beck change in the London Underground map?
6. Name three forms of infographics.
7. Design six pictograms for your school or an infographic about your class.
~~~

~~~art
hints
1. A simple picture that stands for a word or idea. 2. People speak many languages, but everyone understands a picture. 3. A ban. 4. Otl Aicher. 5. He drew lines straight and stations evenly spaced, not as on a real map. 6. Any three: chart, diagram, map, timeline, icons with numbers. 7. Your work.
~~~`,
        hy: `## Նկարներ բառերի փոխարեն

Օդանավակայանում մարդիկ խոսում են տասնյակ լեզուներով, բայց բոլորը հասկանում են ճամպրուկի, բաժակի կամ ինքնաթիռի նկարը։ Նման պարզ նկարները **պիկտոգրամներ** են։ Դրանք մարդկության ամենահին գաղափարներից են՝ ժայռապատկերներն ու առաջին գրային համակարգերը նույնպես նկարներ էին օգտագործում բառերի փոխարեն։

~~~art
pic pictograms
~~~

## Լավ պիկտոգրամի կանոնները

* **Պարզ**՝ ուրվագիծ, առանց մանր մանրամասների։
* **Մեկ գաղափար**՝ մեկ առարկա կամ մեկ գործողություն։
* **Մեկ ոճ՝ շարքում**՝ գծի նույն հաստությունը, նույն համամասնությունները, նույն անկյունները։
* **Ընթեռնելի փոքր չափով**՝ ստուգիր եղունգի չափով։
* **Գունային կոդ**՝ ճանապարհային և անվտանգության նշաններում գույնն ու ձևն իմաստ ունեն. կարմիր շրջանը՝ արգելք, եռանկյունին՝ զգուշացում, կապույտը՝ տեղեկություն, կանաչը՝ անվտանգություն և ելք։

1972 թվականի Մյունխենի օլիմպիական խաղերի համար դիզայներ **Օտլ Այխերը** նկարեց սպորտային պիկտոգրամների հայտնի շարք՝ 45 և 90 աստիճանի գծերի խիստ ցանցի վրա։ Այդ ժամանակից ի վեր յուրաքանչյուր օլիմպիադա ունի իր շարքը։

~~~art
steps pictogram
~~~

## Կողմնորոշման համակարգ

Նշանները, որոնք օգնում են մարդկանց ճանապարհը գտնել քաղաքում, մետրոյում, հիվանդանոցում կամ դպրոցում, կոչվում են **կողմնորոշման համակարգ**։ Սլաքները, թվերը, գծերի գույները և հստակ տառատեսակներն աշխատում են միասին։ Լոնդոնի մետրոյի սխեման, որը նկարել է **Հարրի Բեկը** 1930-ական թվականներին, գծերը ցույց էր տալիս ուղիղ, իսկ կայարանները՝ հավասար հեռավորությամբ, ոչ թե ինչպես իրական քարտեզում։ Աշխարհի մետրոյի սխեմաների մեծ մասը, այդ թվում Մոսկվայի և Երևանի, հետևում է այս գաղափարին։

## Ինֆոգրաֆիկա

**Ինֆոգրաֆիկան** տեղեկությունը ցույց է տալիս նկարներով՝ գծապատկերներ, դիագրամներ, քարտեզներ, ժամանակագծեր, թվերով պատկերակներ։ Լավ ինֆոգրաֆիկան.

1. պատասխանում է մեկ հարցի,
2. համեմատում է իրերը չափով կամ գույնով (ավելի բարձր սյունը նշանակում է ավելի շատ),
3. օգտագործում է քիչ գույներ և հստակ պիտակներ,
4. նշում է, թե որտեղից են թվերը։

~~~art
pic infographic
~~~

## Առաջադրանք

Ընտրիր մեկը՝ նախագծիր վեց պիկտոգրամի շարք քո դպրոցի համար (գրադարան, մարզադահլիճ, ճաշարան, նկարչության սենյակ, զուգարաններ, ելք), կամ պատրաստիր ինֆոգրաֆիկա քո դասարանի մասին՝ քանի աշակերտ է գալիս ոտքով, ավտոբուսով կամ մեքենայով։

~~~art
tasks
1. Ինչ է պիկտոգրամը։
2. Ինչու են պիկտոգրամներն օգտագործվում օդանավակայաններում։
3. Ինչ է նշանակում կարմիր շրջանը նշանի վրա։
4. Ով է նախագծել 1972 թվականի Մյունխենի օլիմպիադայի պիկտոգրամները։
5. Ինչ փոխեց Հարրի Բեկը Լոնդոնի մետրոյի սխեմայում։
6. Անվանիր ինֆոգրաֆիկայի երեք ձև։
7. Նախագծիր վեց պիկտոգրամ քո դպրոցի համար կամ ինֆոգրաֆիկա քո դասարանի մասին։
~~~

~~~art
hints
1. Պարզ նկար, որը փոխարինում է բառին կամ գաղափարին։ 2. Մարդիկ խոսում են տարբեր լեզուներով, բայց նկարը բոլորն են հասկանում։ 3. Արգելք։ 4. Օտլ Այխերը։ 5. Գծերը նկարեց ուղիղ, կայարանները՝ հավասար հեռավորությամբ, ոչ թե ինչպես իրական քարտեզում։ 6. Ցանկացած երեքը՝ գծապատկեր, դիագրամ, քարտեզ, ժամանակագիծ, թվերով պատկերակներ։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Картинки вместо слов

В аэропорту люди говорят на десятках языков, но каждый понимает изображение чемодана, чашки или самолёта. Такие простые картинки называются **пиктограммами**. Это одна из древнейших идей человечества: наскальные рисунки и первые системы письма тоже обозначали слова картинками.

~~~art
pic pictograms
~~~

## Правила хорошей пиктограммы

* **Простота:** силуэт без мелких деталей.
* **Одна идея:** один предмет или одно действие.
* **Единый стиль в наборе:** одна толщина линий, одни пропорции, одинаковые углы.
* **Читаемость в малом размере:** проверь её размером с ноготь.
* **Цветовой код:** в дорожных знаках и знаках безопасности цвет и форма имеют значение — красный круг запрещает, треугольник предупреждает, синий информирует, зелёный обозначает безопасность и выход.

Для Олимпийских игр 1972 года в Мюнхене дизайнер **Отль Айхер** нарисовал знаменитый набор спортивных пиктограмм на строгой сетке из линий под 45 и 90 градусов. С тех пор у каждой Олимпиады свой набор.

~~~art
steps pictogram
~~~

## Навигация

Знаки, которые помогают людям найти дорогу в городе, метро, больнице или школе, называют **навигацией** (вейфайндингом). Стрелки, номера, цвета линий и ясные шрифты работают вместе. Схема лондонского метро, нарисованная **Гарри Беком** в 1930-х годах, показывала линии прямыми, а станции на равном расстоянии — не так, как на настоящей карте. Большинство схем метро в мире, включая московскую и ереванскую, следуют этой идее.

## Инфографика

**Инфографика** показывает информацию в виде изображений: графики, диаграммы, карты, ленты времени, значки с числами. Хорошая инфографика:

1. отвечает на один вопрос;
2. сравнивает величины размером или цветом (выше столбик — больше);
3. использует мало цветов и ясные подписи;
4. указывает, откуда взяты числа.

~~~art
pic infographic
~~~

## Задание

Выбери одно: создай набор из шести пиктограмм для своей школы (библиотека, спортзал, столовая, кабинет ИЗО, туалеты, выход) или сделай инфографику о своём классе: сколько учеников приходит пешком, приезжает на автобусе или на машине.

~~~art
tasks
1. Что такое пиктограмма?
2. Почему пиктограммы используют в аэропортах?
3. Что означает красный круг на знаке?
4. Кто создал пиктограммы для Олимпиады 1972 года в Мюнхене?
5. Что изменил Гарри Бек в схеме лондонского метро?
6. Назови три формы инфографики.
7. Создай шесть пиктограмм для школы или инфографику о своём классе.
~~~

~~~art
hints
1. Простая картинка, обозначающая слово или понятие. 2. Люди говорят на разных языках, а картинку понимают все. 3. Запрет. 4. Отль Айхер. 5. Нарисовал линии прямыми, а станции на равном расстоянии, не как на настоящей карте. 6. Любые три: график, диаграмма, карта, лента времени, значки с числами. 7. Твоя работа.
~~~`,
      },
      [
        q(t("A simple picture that stands for a word is a…", "Պարզ նկարը, որը փոխարինում է բառին…", "Простая картинка, заменяющая слово, — это…"), [t("pictogram", "պիկտոգրամ է", "пиктограмма"), t("spread", "բացվածք է", "разворот"), t("serif", "թաթիկ է", "засечка")], 0),
        q(t("A triangle on a road sign usually means…", "Ճանապարհային նշանի եռանկյունին սովորաբար նշանակում է…", "Треугольник на дорожном знаке обычно означает…"), [t("information", "տեղեկություն", "информацию"), t("a warning", "զգուշացում", "предупреждение"), t("exit", "ելք", "выход")], 1),
        q(t("The 1972 Olympic pictograms were designed by…", "1972 թվականի օլիմպիական պիկտոգրամները նախագծել է…", "Пиктограммы Олимпиады 1972 года создал…"), [t("Harry Beck", "Հարրի Բեկը", "Гарри Бек"), t("Toulouse-Lautrec", "Թուլուզ-Լոտրեկը", "Тулуз-Лотрек"), t("Otl Aicher", "Օտլ Այխերը", "Отль Айхер")], 2),
        q(t("Pictograms in one set should have…", "Մեկ շարքի պիկտոգրամները պետք է ունենան…", "Пиктограммы одного набора должны иметь…"), [t("the same style", "նույն ոճը", "единый стиль"), t("different colours and lines", "տարբեր գույներ և գծեր", "разные цвета и линии"), t("many small details", "շատ մանր մանրամասներ", "много мелких деталей")], 0),
        q(t("Harry Beck drew the metro lines…", "Հարրի Բեկը մետրոյի գծերը նկարեց…", "Гарри Бек нарисовал линии метро…"), [t("exactly as on a real map", "ճիշտ ինչպես իրական քարտեզում", "точно как на карте"), t("straight, with stations evenly spaced", "ուղիղ, կայարանները՝ հավասար հեռավորությամբ", "прямыми, со станциями на равном расстоянии"), t("as circles only", "միայն շրջաններով", "только кругами")], 1),
        q(t("A good infographic…", "Լավ ինֆոգրաֆիկան…", "Хорошая инфографика…"), [t("uses as many colours as possible", "օգտագործում է որքան հնարավոր է շատ գույներ", "использует как можно больше цветов"), t("hides where numbers come from", "թաքցնում է թվերի աղբյուրը", "скрывает источник чисел"), t("answers one question", "պատասխանում է մեկ հարցի", "отвечает на один вопрос")], 2),
      ],
    ),
  ],
};
