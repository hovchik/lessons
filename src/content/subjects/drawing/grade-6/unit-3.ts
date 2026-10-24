import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("Looking at a person: portrait", "Նայելով մարդուն․ դիմանկար", "Вглядываясь в человека. Портрет"),
  summary: t(
    "The history of portrait, proportions and construction of the head, graphic and painted portrait, self-portrait and great portraitists: Hovnatanyan, Repin, Serov.",
    "Դիմանկարի պատմությունը, գլխի համամասնությունները և կառուցումը, գրաֆիկական և գունային դիմանկար, ինքնանկար և մեծ դիմանկարիչներ՝ Հովնաթանյան, Ռեպին, Սերով։",
    "История портрета, пропорции и конструкция головы, графический и живописный портрет, автопортрет и великие портретисты: Овнатанян, Репин, Серов.",
  ),
  lessons: [
    lesson(
      "portrait-history",
      ["The portrait through the ages", "Դիմանկարը դարերի միջով", "Образ человека — главная тема искусства"],
      {
        en: ["Follow how the image of a person changed through history", "Tell a ceremonial portrait from an intimate one", "Describe what a portrait tells about the person and the time"],
        hy: ["Հետևել, թե ինչպես է փոխվել մարդու կերպարը պատմության ընթացքում", "Տարբերել շքեղ (պարադային) դիմանկարը մտերմիկից", "Նկարագրել, թե ինչ է պատմում դիմանկարը մարդու և ժամանակի մասին"],
        ru: ["Проследить, как менялся образ человека в истории", "Отличать парадный портрет от камерного", "Описывать, что портрет рассказывает о человеке и его времени"],
      },
      {
        en: `## People have always painted people

The image of a person is the **main theme** of art. But each epoch saw a person differently.

| Time | Example | How the person is shown |
|---|---|---|
| **ancient Egypt** | statues and reliefs of pharaohs | calm, ideal, eternal; not a real likeness |
| **Roman Egypt, 1st–3rd centuries** | **Fayum portraits** painted on wood | real faces with big, living eyes |
| **Middle Ages** | icons, miniatures | the spiritual image, not the earthly likeness |
| **Renaissance** | Leonardo da Vinci's «Mona Lisa» | a real, thinking person in a landscape |
| **17th century** | Rembrandt | the inner life, light out of darkness |
| **18th–19th centuries, Russia** | Levitsky, Borovikovsky, Kiprensky's portrait of Pushkin (1827) | elegance, dignity, feeling |
| **19th century, Armenia** | Hakob Hovnatanyan in Tbilisi | precise, dignified portraits of townspeople |
| **19th–20th centuries** | Repin, Serov, Saryan | character, movement, mood |

## Kinds of portrait

* **Ceremonial (formal) portrait:** a person in full height, in rich clothes, with symbols of power or position; it shows their **role** in society.
* **Intimate (chamber) portrait:** a face or half-figure, simple background; it shows the **inner world**.
* **Group portrait:** a family, friends, a team.
* **Self-portrait:** the artist paints himself or herself.

By size: head, bust (to the chest), half-figure, full-length.

## A portrait tells

Look at the **face** (expression, glance), the **pose** and **hands**, the **clothes**, the **background** and the **light**. Together they tell about the person's character, mood, profession and time.

### Exercises

1. Why is the image of a person called the main theme of art?
2. What are Fayum portraits?
3. How did the Renaissance change the portrait?
4. What is the difference between a ceremonial and an intimate portrait?
5. Name the four sizes of a portrait.
6. Who painted the famous 1827 portrait of Pushkin?
7. Choose a portrait in a museum or book and describe the person: character, mood, profession, time.

### Answers

1. Because people have always painted people, in every epoch. 2. Realistic portraits painted on wood in Roman Egypt in the 1st–3rd centuries. 3. It showed a real, thinking person, often in a landscape. 4. A ceremonial portrait shows a person's role in society with rich clothes and symbols; an intimate one shows the inner world simply. 5. Head, bust, half-figure, full-length. 6. Orest Kiprensky. 7. Your description.`,
        hy: `## Մարդիկ միշտ նկարել են մարդկանց

Մարդու կերպարն արվեստի **գլխավոր թեման** է։ Բայց ամեն դարաշրջան մարդուն տարբեր կերպ է տեսել։

| Ժամանակ | Օրինակ | Ինչպես է պատկերված մարդը |
|---|---|---|
| **Հին Եգիպտոս** | փարավոնների արձաններ և բարձրաքանդակներ | հանդարտ, իդեալական, հավերժական, ոչ իրական նմանություն |
| **Հռոմեական Եգիպտոս, 1–3-րդ դարեր** | փայտի վրա նկարված **Ֆայումյան դիմանկարներ** | իրական դեմքեր՝ մեծ, կենդանի աչքերով |
| **Միջնադար** | սրբապատկերներ, մանրանկարներ | հոգևոր կերպար, ոչ թե երկրային նմանություն |
| **Վերածնունդ** | Լեոնարդո դա Վինչիի «Մոնա Լիզան» | իրական, մտածող մարդ բնանկարի ֆոնին |
| **17-րդ դար** | Ռեմբրանդտ | ներքին կյանքը, լույսը խավարից |
| **18–19-րդ դարեր, Ռուսաստան** | Լևիցկի, Բորովիկովսկի, Կիպրենսկու՝ Պուշկինի դիմանկարը (1827) | նրբագեղություն, արժանապատվություն, զգացմունք |
| **19-րդ դար, Հայաստան** | Հակոբ Հովնաթանյանը Թիֆլիսում | քաղաքացիների ճշգրիտ, արժանապատիվ դիմանկարներ |
| **19–20-րդ դարեր** | Ռեպին, Սերով, Սարյան | բնավորություն, շարժում, տրամադրություն |

## Դիմանկարի տեսակներ

* **Շքեղ (պարադային) դիմանկար**՝ մարդն ամբողջ հասակով, հարուստ հագուստով, իշխանության կամ դիրքի խորհրդանիշներով, ցույց է տալիս նրա **դերը** հասարակության մեջ։
* **Մտերմիկ (կամերային) դիմանկար**՝ դեմք կամ կիսաֆիգուր, պարզ ֆոն, ցույց է տալիս **ներքին աշխարհը**։
* **Խմբային դիմանկար**՝ ընտանիք, ընկերներ, թիմ։
* **Ինքնանկար**՝ նկարիչը նկարում է ինքն իրեն։

Ըստ չափի՝ գլուխ, կիսանդրի (մինչև կուրծքը), կիսաֆիգուր, ամբողջ հասակով։

## Դիմանկարը պատմում է

Նայիր **դեմքին** (արտահայտություն, հայացք), **դիրքին** և **ձեռքերին**, **հագուստին**, **ֆոնին** և **լույսին**։ Միասին դրանք պատմում են մարդու բնավորության, տրամադրության, մասնագիտության և ժամանակի մասին։

### Վարժություններ

1. Ինչու է մարդու կերպարը կոչվում արվեստի գլխավոր թեմա։
2. Ինչ են Ֆայումյան դիմանկարները։
3. Ինչպես փոխեց Վերածնունդը դիմանկարը։
4. Ինչով է տարբերվում շքեղ դիմանկարը մտերմիկից։
5. Անվանիր դիմանկարի չորս չափը։
6. Ով է նկարել Պուշկինի հայտնի դիմանկարը 1827 թվականին։
7. Թանգարանում կամ գրքում ընտրիր դիմանկար և նկարագրիր մարդուն՝ բնավորություն, տրամադրություն, մասնագիտություն, ժամանակ։

### Պատասխաններ

1. Որովհետև մարդիկ միշտ, ամեն դարաշրջանում, նկարել են մարդկանց։ 2. Հռոմեական Եգիպտոսում 1–3-րդ դարերում փայտի վրա նկարված իրատեսական դիմանկարներ։ 3. Այն ցույց տվեց իրական, մտածող մարդ, հաճախ բնանկարի ֆոնին։ 4. Շքեղ դիմանկարը հարուստ հագուստով և խորհրդանիշներով ցույց է տալիս մարդու դերը հասարակության մեջ, մտերմիկը պարզ ձևով ցույց է տալիս ներքին աշխարհը։ 5. Գլուխ, կիսանդրի, կիսաֆիգուր, ամբողջ հասակով։ 6. Օրեստ Կիպրենսկին։ 7. Քո նկարագրությունը։`,
        ru: `## Люди всегда изображали людей

Образ человека — **главная тема** искусства. Но каждая эпоха видела человека по-своему.

| Время | Пример | Каким показан человек |
|---|---|---|
| **Древний Египет** | статуи и рельефы фараонов | спокойным, идеальным, вечным; не реальное сходство |
| **Римский Египет, I–III века** | **фаюмские портреты** на дереве | настоящие лица с большими живыми глазами |
| **Средние века** | иконы, миниатюры | духовный образ, а не земное сходство |
| **Возрождение** | «Мона Лиза» Леонардо да Винчи | реальный, думающий человек на фоне пейзажа |
| **XVII век** | Рембрандт | внутренняя жизнь, свет из темноты |
| **XVIII–XIX века, Россия** | Левицкий, Боровиковский, портрет Пушкина работы Кипренского (1827) | изящество, достоинство, чувство |
| **XIX век, Армения** | Акоп Овнатанян в Тифлисе | точные, полные достоинства портреты горожан |
| **XIX–XX века** | Репин, Серов, Сарьян | характер, движение, настроение |

## Виды портрета

* **Парадный портрет:** человек в полный рост, в богатой одежде, с символами власти или положения; показывает его **роль** в обществе.
* **Камерный портрет:** лицо или полуфигура, простой фон; показывает **внутренний мир**.
* **Групповой портрет:** семья, друзья, коллектив.
* **Автопортрет:** художник пишет самого себя.

По охвату: голова, погрудный, поясной, в полный рост.

## Портрет рассказывает

Смотри на **лицо** (выражение, взгляд), **позу** и **руки**, **одежду**, **фон** и **свет**. Вместе они рассказывают о характере, настроении, профессии человека и его времени.

### Упражнения

1. Почему образ человека называют главной темой искусства?
2. Что такое фаюмские портреты?
3. Как Возрождение изменило портрет?
4. Чем парадный портрет отличается от камерного?
5. Назови четыре вида портрета по охвату фигуры.
6. Кто написал знаменитый портрет Пушкина в 1827 году?
7. Выбери портрет в музее или книге и опиши человека: характер, настроение, профессию, время.

### Ответы

1. Потому что люди изображали людей всегда, в каждую эпоху. 2. Реалистичные портреты на дереве из Римского Египта I–III веков. 3. Он показал реального, думающего человека, часто на фоне пейзажа. 4. Парадный показывает роль человека в обществе через богатую одежду и символы, камерный просто показывает внутренний мир. 5. Голова, погрудный, поясной, в полный рост. 6. Орест Кипренский. 7. Твоё описание.`,
      },
      [
        q(t("Realistic portraits on wood from Roman Egypt are…", "Հռոմեական Եգիպտոսի փայտի վրա իրատեսական դիմանկարները…", "Реалистичные портреты на дереве из Римского Египта —…"), [t("Fayum portraits", "Ֆայումյան դիմանկարներն են", "фаюмские портреты"), t("icons", "սրբապատկերներն են", "иконы"), t("frescoes", "որմնանկարներն են", "фрески")], 0),
        q(t("A full-length portrait with symbols of power is…", "Ամբողջ հասակով դիմանկարն իշխանության խորհրդանիշներով…", "Портрет в полный рост с символами власти —…"), [t("intimate", "մտերմիկ է", "камерный"), t("ceremonial", "շքեղ է", "парадный"), t("a self-portrait", "ինքնանկար է", "автопортрет")], 1),
        q(t("«Mona Lisa» was painted by…", "«Մոնա Լիզան» նկարել է…", "«Мону Лизу» написал…"), [t("Rembrandt", "Ռեմբրանդտը", "Рембрандт"), t("Repin", "Ռեպինը", "Репин"), t("Leonardo da Vinci", "Լեոնարդո դա Վինչին", "Леонардо да Винчи")], 2),
        q(t("A portrait to the chest is a…", "Մինչև կուրծքը դիմանկարը…", "Портрет до груди — это…"), [t("bust", "կիսանդրի է", "погрудный"), t("full-length portrait", "ամբողջ հասակով է", "в полный рост"), t("landscape", "բնանկար է", "пейзаж")], 0),
        q(t("Hakob Hovnatanyan worked in…", "Հակոբ Հովնաթանյանն աշխատում էր…", "Акоп Овнатанян работал в…"), [t("Paris", "Փարիզում", "Париже"), t("Tbilisi", "Թիֆլիսում", "Тифлисе"), t("Venice", "Վենետիկում", "Венеции")], 1),
        q(t("An intimate portrait mainly shows…", "Մտերմիկ դիմանկարը հիմնականում ցույց է տալիս…", "Камерный портрет главным образом показывает…"), [t("a crown and a sword", "թագ և սուր", "корону и меч"), t("a battle", "ճակատամարտ", "сражение"), t("the inner world", "ներքին աշխարհը", "внутренний мир")], 2),
      ],
    ),
    lesson(
      "head-proportions",
      ["Proportions and construction of the head", "Գլխի համամասնությունները և կառուցումը", "Конструкция головы человека и её пропорции"],
      {
        en: ["Know the basic proportions of the human face", "Construct the head as an egg shape with guide lines", "Draw a head in front view and in profile"],
        hy: ["Իմանալ մարդու դեմքի հիմնական համամասնությունները", "Գլուխը կառուցել որպես ձվաձև՝ օժանդակ գծերով", "Նկարել գլուխ դիմացից և պրոֆիլով"],
        ru: ["Знать основные пропорции лица человека", "Строить голову как яйцевидную форму со вспомогательными линиями", "Нарисовать голову анфас и в профиль"],
      },
      {
        en: `## The head is an egg

Seen from the front, the head of an adult is close to an **egg** (oval), wider at the top. Seen from the side, it is wider: the skull goes back behind the ears.

## Main proportions (front view, adult)

1. Draw the oval and a vertical **axis** through its middle.
2. The **eyes** are on the horizontal line in the **middle** of the head (not high up, as children often draw).
3. The face from the hairline to the chin is divided into **three equal parts**:
   * hairline to eyebrows;
   * eyebrows to the bottom of the nose;
   * bottom of the nose to the chin.
4. The distance **between the eyes** is about **one eye width**.
5. The **ears** lie between the line of the eyebrows and the line of the nose bottom.
6. The **mouth** is about one third of the way down from the nose to the chin.
7. The corners of the mouth are roughly under the pupils.
8. The **neck** is almost as wide as the jaw, not thin like a stick.

## Children are different

A child's head has a bigger forehead and skull; the eyes are **below** the middle; the nose and chin are small. That is why young faces look round and soft.

## Profile

In profile, the head fits almost into a **square**. The ear is just behind the middle, the eye is set back from the bridge of the nose, and the forehead, nose, lips and chin make a lively line.

## Turning the head

When the head turns, the axis **curves** around the egg, and all the horizontal lines curve with it. The features stay on these lines.

## Try it

1. Draw a head in front view using all the guide lines.
2. Draw the same head in profile.
3. Draw a head turned three-quarters, with curved guide lines.
4. Look in a mirror and check: are your eyes really in the middle of your head?

### Exercises

1. What shape is the head in front view?
2. Where are the eyes on an adult's head?
3. Into how many parts is the face divided from the hairline to the chin? Name them.
4. How wide is the space between the eyes?
5. Between which lines are the ears?
6. How does a child's head differ from an adult's?
7. Draw three heads: front, profile and three-quarters.

### Answers

1. An egg shape, an oval wider at the top. 2. On the line in the middle of the head. 3. Three: hairline to eyebrows, eyebrows to nose bottom, nose bottom to chin. 4. About one eye width. 5. Between the eyebrow line and the nose-bottom line. 6. A bigger forehead and skull, eyes below the middle, a small nose and chin. 7. Your drawings.`,
        hy: `## Գլուխը ձու է

Դիմացից նայելիս մեծահասակի գլուխը մոտ է **ձվին** (ձվաձևին)՝ վերևում ավելի լայն։ Կողքից այն ավելի լայն է․ գանգն ականջներից ետ է գնում։

## Հիմնական համամասնություններ (դիմացից, մեծահասակ)

1. Նկարիր ձվաձև և նրա մեջտեղով ուղղահայաց **առանցք**։
2. **Աչքերը** գլխի **մեջտեղի** հորիզոնական գծի վրա են (ոչ թե վերևում, ինչպես հաճախ երեխաներն են նկարում)։
3. Դեմքը մազերի սկզբից մինչև կզակը բաժանվում է **երեք հավասար մասի**․
   * մազերի սկզբից մինչև հոնքերը,
   * հոնքերից մինչև քթի ստորին մասը,
   * քթի ստորին մասից մինչև կզակը։
4. **Աչքերի միջև** հեռավորությունը մոտավորապես **մեկ աչքի լայնություն** է։
5. **Ականջները** գտնվում են հոնքերի գծի և քթի ստորին մասի գծի միջև։
6. **Բերանը** քթից կզակ ճանապարհի մոտ մեկ երրորդի վրա է։
7. Բերանի անկյունները մոտավորապես բիբերի տակ են։
8. **Պարանոցը** գրեթե ծնոտի չափ լայն է, ոչ թե փայտիկի պես բարակ։

## Երեխաները տարբեր են

Երեխայի գլուխն ունի ավելի մեծ ճակատ և գանգ, աչքերը մեջտեղից **ցածր** են, քիթն ու կզակը փոքր են։ Այդ պատճառով մանկական դեմքերը կլոր և փափուկ են թվում։

## Պրոֆիլ

Պրոֆիլով գլուխը գրեթե տեղավորվում է **քառակուսու** մեջ։ Ականջը մեջտեղից անմիջապես ետ է, աչքը քթարմատից ներս է, իսկ ճակատը, քիթը, շուրթերն ու կզակը կենդանի գիծ են կազմում։

## Գլխի շրջադարձը

Երբ գլուխը շրջվում է, առանցքը **կորանում** է ձվի շուրջը, և բոլոր հորիզոնական գծերը կորանում են նրա հետ։ Դիմագծերը մնում են այդ գծերի վրա։

## Փորձիր

1. Նկարիր գլուխ դիմացից՝ օգտագործելով բոլոր օժանդակ գծերը։
2. Նկարիր նույն գլուխը պրոֆիլով։
3. Նկարիր երեք քառորդով շրջված գլուխ՝ կոր օժանդակ գծերով։
4. Նայիր հայելուն և ստուգիր․ իսկապես քո աչքերը գլխիդ մեջտեղում են։

### Վարժություններ

1. Ինչ ձև ունի գլուխը դիմացից։
2. Որտեղ են աչքերը մեծահասակի գլխի վրա։
3. Քանի մասի է բաժանվում դեմքը մազերի սկզբից մինչև կզակը։ Անվանիր դրանք։
4. Որքան է աչքերի միջև տարածությունը։
5. Որ գծերի միջև են ականջները։
6. Ինչով է երեխայի գլուխը տարբերվում մեծահասակինից։
7. Նկարիր երեք գլուխ՝ դիմացից, պրոֆիլով և երեք քառորդով։

### Պատասխաններ

1. Ձվաձև, վերևում ավելի լայն օվալ։ 2. Գլխի մեջտեղի գծի վրա։ 3. Երեք՝ մազերի սկզբից հոնքեր, հոնքերից քթի ստորին մաս, քթի ստորին մասից կզակ։ 4. Մոտավորապես մեկ աչքի լայնություն։ 5. Հոնքերի և քթի ստորին մասի գծերի միջև։ 6. Ավելի մեծ ճակատ և գանգ, աչքերը մեջտեղից ցածր, փոքր քիթ և կզակ։ 7. Քո գծանկարները։`,
        ru: `## Голова — это яйцо

Спереди голова взрослого близка к **яйцу** (овалу), шире вверху. Сбоку она шире: череп уходит назад за ушами.

## Основные пропорции (анфас, взрослый)

1. Нарисуй овал и вертикальную **ось** через его середину.
2. **Глаза** лежат на горизонтальной линии **посередине** головы (а не высоко, как часто рисуют дети).
3. Лицо от линии волос до подбородка делится на **три равные части**:
   * от волос до бровей;
   * от бровей до основания носа;
   * от основания носа до подбородка.
4. Расстояние **между глазами** — примерно **ширина одного глаза**.
5. **Уши** находятся между линией бровей и линией основания носа.
6. **Рот** — примерно на трети расстояния от носа до подбородка.
7. Уголки рта — примерно под зрачками.
8. **Шея** почти так же широка, как челюсть, а не тонкая, как палочка.

## У детей иначе

У ребёнка больше лоб и череп; глаза **ниже** середины; нос и подбородок маленькие. Поэтому детские лица кажутся круглыми и мягкими.

## Профиль

В профиль голова почти вписывается в **квадрат**. Ухо чуть позади середины, глаз отступает от переносицы, а лоб, нос, губы и подбородок образуют живую линию.

## Поворот головы

Когда голова поворачивается, ось **изгибается** по яйцу, и все горизонтальные линии изгибаются вместе с ней. Черты лица остаются на этих линиях.

## Попробуй

1. Нарисуй голову анфас со всеми вспомогательными линиями.
2. Нарисуй ту же голову в профиль.
3. Нарисуй голову в повороте три четверти с изогнутыми вспомогательными линиями.
4. Посмотри в зеркало и проверь: правда ли глаза посередине головы?

### Упражнения

1. Какую форму имеет голова анфас?
2. Где находятся глаза на голове взрослого?
3. На сколько частей делится лицо от волос до подбородка? Назови их.
4. Каково расстояние между глазами?
5. Между какими линиями находятся уши?
6. Чем голова ребёнка отличается от головы взрослого?
7. Нарисуй три головы: анфас, в профиль и в три четверти.

### Ответы

1. Яйцевидную, овал, шире вверху. 2. На линии посередине головы. 3. На три: от волос до бровей, от бровей до основания носа, от основания носа до подбородка. 4. Примерно ширина одного глаза. 5. Между линией бровей и линией основания носа. 6. Больше лоб и череп, глаза ниже середины, маленькие нос и подбородок. 7. Твои рисунки.`,
      },
      [
        q(t("On an adult's head the eyes are…", "Մեծահասակի գլխի վրա աչքերը…", "На голове взрослого глаза…"), [t("in the middle", "մեջտեղում են", "посередине"), t("near the top", "վերևի մոտ են", "у макушки"), t("near the chin", "կզակի մոտ են", "у подбородка")], 0),
        q(t("The face is divided into … equal parts.", "Դեմքը բաժանվում է … հավասար մասի։", "Лицо делится на … равные части."), [t("two", "երկու", "две"), t("three", "երեք", "три"), t("five", "հինգ", "пять")], 1),
        q(t("The space between the eyes is about…", "Աչքերի միջև տարածությունը մոտավորապես…", "Расстояние между глазами примерно…"), [t("two noses", "երկու քիթ է", "два носа"), t("a mouth width", "բերանի լայնություն է", "ширина рта"), t("one eye width", "մեկ աչքի լայնություն է", "ширина одного глаза")], 2),
        q(t("The ears lie between the lines of…", "Ականջները գտնվում են … գծերի միջև։", "Уши находятся между линиями…"), [t("eyebrows and nose bottom", "հոնքերի և քթի ստորին մասի", "бровей и основания носа"), t("hair and eyes", "մազերի և աչքերի", "волос и глаз"), t("mouth and chin", "բերանի և կզակի", "рта и подбородка")], 0),
        q(t("In a child's head the eyes are…", "Երեխայի գլխում աչքերը…", "У ребёнка глаза…"), [t("above the middle", "մեջտեղից վեր են", "выше середины"), t("below the middle", "մեջտեղից ցածր են", "ниже середины"), t("on the forehead", "ճակատին են", "на лбу")], 1),
        q(t("When the head turns, the guide lines…", "Երբ գլուխը շրջվում է, օժանդակ գծերը…", "При повороте головы вспомогательные линии…"), [t("disappear", "անհետանում են", "исчезают"), t("stay straight", "մնում են ուղիղ", "остаются прямыми"), t("curve around the form", "կորանում են ձևի շուրջը", "изгибаются по форме")], 2),
      ],
    ),
    lesson(
      "portrait-graphics",
      ["The graphic portrait", "Գրաֆիկական դիմանկար", "Графический портретный рисунок"],
      {
        en: ["See how masters made portraits with line and tone", "Show character with lighting and the choice of line", "Draw a portrait of a classmate in pencil or charcoal"],
        hy: ["Տեսնել, թե ինչպես են վարպետները դիմանկար ստեղծել գծով և տոնով", "Բնավորությունը ցույց տալ լուսավորությամբ և գծի ընտրությամբ", "Մատիտով կամ ածուխով նկարել դասընկերոջ դիմանկարը"],
        ru: ["Видеть, как мастера создавали портрет линией и тоном", "Передавать характер освещением и выбором линии", "Нарисовать портрет одноклассника карандашом или углём"],
      },
      {
        en: `## Portrait without colour

A graphic portrait uses only **line, spot and tone**. Without colour, everything depends on the **drawing**: the likeness, the glance, the character.

* **Albrecht Dürer** drew a charcoal portrait of his old mother (1514), honest and full of love.
* **Hans Holbein** made precise chalk portraits of people at the English court.
* **Orest Kiprensky** drew quick, lively pencil portraits of his friends and of officers of 1812.
* **Valentin Serov** drew portraits with a few confident lines that catch the whole person.

## Line or tone?

* A **linear** portrait: a few confident lines, almost no shading. Light, fresh, elegant.
* A **tonal** portrait: modelled with light and shade, like a sculpture. Strong, deep.
* A **mixed** portrait: a careful face and quick lines for the clothes and hair, so the face stands out.

## Light creates mood

* **Soft light from the front:** calm, open, gentle.
* **Side light:** strong volume, character, seriousness.
* **Light from below:** mysterious, frightening (used in theatre).
* **Back light (contre-jour):** a dark silhouette with a bright edge, poetic.

## Drawing a classmate

1. Seat your model comfortably, with light from the side.
2. Mark the size of the head on the sheet (not too small).
3. Build the oval, axis and lines of eyes, nose and mouth.
4. Draw the shapes of the eyes, nose, lips, ears and hairstyle.
5. Lay the big shadows: the eye sockets, under the nose and lip, the side of the face.
6. Work on the eyes most carefully: they are the centre of the portrait.
7. Draw hair and clothes more freely.

### Exercises

1. What are the means of a graphic portrait?
2. Whose charcoal portrait did Dürer draw in 1514?
3. What is the difference between a linear and a tonal portrait?
4. What mood does light from below give?
5. Why are the eyes the centre of a portrait?
6. Why are the hair and clothes often drawn more freely than the face?
7. Draw a classmate's portrait with side lighting.

### Answers

1. Line, spot and tone. 2. His mother's. 3. A linear portrait uses a few lines and little shading; a tonal one is modelled with light and shade. 4. Mystery, fear. 5. They show the glance and inner life of the person. 6. So the face stands out. 7. Your drawing.`,
        hy: `## Դիմանկար առանց գույնի

Գրաֆիկական դիմանկարն օգտագործում է միայն **գիծ, բիծ և տոն**։ Առանց գույնի ամեն ինչ կախված է **գծանկարից**՝ նմանությունը, հայացքը, բնավորությունը։

* **Ալբրեխտ Դյուրերը** ածուխով նկարել է իր ծեր մոր դիմանկարը (1514)՝ անկեղծ և սիրով լի։
* **Հանս Հոլբայնը** ստեղծել է անգլիական արքունիքի մարդկանց ճշգրիտ կավճե դիմանկարներ։
* **Օրեստ Կիպրենսկին** նկարում էր իր ընկերների և 1812 թվականի սպաների արագ, կենդանի մատիտե դիմանկարները։
* **Վալենտին Սերովը** դիմանկարներ էր նկարում մի քանի վստահ գծով, որոնք որսում են ամբողջ մարդուն։

## Գիծ, թե տոն

* **Գծային** դիմանկար՝ մի քանի վստահ գիծ, գրեթե առանց ստվերագծման։ Թեթև, թարմ, նրբագեղ։
* **Տոնային** դիմանկար՝ մոդելավորված լույսով և ստվերով, ինչպես քանդակը։ Ուժեղ, խոր։
* **Խառը** դիմանկար՝ խնամքով նկարված դեմք և արագ գծեր հագուստի ու մազերի համար, որ դեմքն աչքի ընկնի։

## Լույսը ստեղծում է տրամադրություն

* **Փափուկ լույս դիմացից**՝ հանդարտ, բաց, քնքուշ։
* **Կողքի լույս**՝ ուժեղ ծավալ, բնավորություն, լրջություն։
* **Ներքևից լույս**՝ խորհրդավոր, վախեցնող (օգտագործվում է թատրոնում)։
* **Ետևից լույս (կոնտրաժուր)**՝ մուգ ուրվապատկեր լուսավոր եզրով, բանաստեղծական։

## Դասընկերոջ դիմանկարը

1. Բնորդին հարմար նստեցրու՝ կողքից լույսով։
2. Թերթի վրա նշիր գլխի չափը (ոչ շատ փոքր)։
3. Կառուցիր ձվաձևը, առանցքը և աչքերի, քթի ու բերանի գծերը։
4. Նկարիր աչքերի, քթի, շուրթերի, ականջների և սանրվածքի ձևերը։
5. Դիր մեծ ստվերները՝ ակնախոռոչները, քթի և շրթունքի տակ, դեմքի կողմը։
6. Ամենից խնամքով աշխատիր աչքերի վրա․ դրանք դիմանկարի կենտրոնն են։
7. Մազերն ու հագուստն ավելի ազատ նկարիր։

### Վարժություններ

1. Որոնք են գրաֆիկական դիմանկարի միջոցները։
2. Ում դիմանկարն է Դյուրերը նկարել ածուխով 1514 թվականին։
3. Ինչով է տարբերվում գծային դիմանկարը տոնայինից։
4. Ինչ տրամադրություն է տալիս ներքևից լույսը։
5. Ինչու են աչքերը դիմանկարի կենտրոնը։
6. Ինչու են մազերն ու հագուստը հաճախ դեմքից ավելի ազատ նկարում։
7. Նկարիր դասընկերոջդ դիմանկարը կողքի լույսով։

### Պատասխաններ

1. Գիծ, բիծ և տոն։ 2. Իր մոր։ 3. Գծայինն օգտագործում է մի քանի գիծ և քիչ ստվերագծում, տոնայինը մոդելավորված է լույսով և ստվերով։ 4. Խորհրդավորություն, վախ։ 5. Դրանք ցույց են տալիս մարդու հայացքը և ներքին կյանքը։ 6. Որ դեմքն աչքի ընկնի։ 7. Քո գծանկարը։`,
        ru: `## Портрет без цвета

Графический портрет использует только **линию, пятно и тон**. Без цвета всё зависит от **рисунка**: сходство, взгляд, характер.

* **Альбрехт Дюрер** нарисовал углём портрет своей старой матери (1514), честный и полный любви.
* **Ганс Гольбейн** создавал точные портреты мелом людей английского двора.
* **Орест Кипренский** рисовал быстрые живые карандашные портреты друзей и офицеров 1812 года.
* **Валентин Серов** рисовал портреты несколькими уверенными линиями, которые схватывают всего человека.

## Линия или тон?

* **Линейный** портрет: несколько уверенных линий, почти без штриховки. Лёгкий, свежий, изящный.
* **Тональный** портрет: вылеплен светом и тенью, как скульптура. Сильный, глубокий.
* **Смешанный** портрет: тщательно проработанное лицо и быстрые линии одежды и волос, чтобы лицо выделялось.

## Свет создаёт настроение

* **Мягкий свет спереди:** спокойствие, открытость, нежность.
* **Боковой свет:** сильный объём, характер, серьёзность.
* **Свет снизу:** таинственность, страх (используется в театре).
* **Свет сзади (контражур):** тёмный силуэт со светлым краем, поэтичность.

## Рисуем одноклассника

1. Удобно посади натурщика, со светом сбоку.
2. Наметь размер головы в листе (не слишком маленький).
3. Построй овал, ось и линии глаз, носа и рта.
4. Нарисуй формы глаз, носа, губ, ушей и причёски.
5. Проложи большие тени: глазные впадины, под носом и губой, теневую сторону лица.
6. Тщательнее всего работай над глазами: они центр портрета.
7. Волосы и одежду рисуй свободнее.

### Упражнения

1. Каковы средства графического портрета?
2. Чей портрет Дюрер нарисовал углём в 1514 году?
3. Чем линейный портрет отличается от тонального?
4. Какое настроение даёт свет снизу?
5. Почему глаза — центр портрета?
6. Почему волосы и одежду часто рисуют свободнее, чем лицо?
7. Нарисуй портрет одноклассника при боковом освещении.

### Ответы

1. Линия, пятно и тон. 2. Своей матери. 3. Линейный — несколько линий и мало штриховки, тональный вылеплен светом и тенью. 4. Таинственность, страх. 5. Они передают взгляд и внутреннюю жизнь человека. 6. Чтобы выделялось лицо. 7. Твой рисунок.`,
      },
      [
        q(t("A graphic portrait uses…", "Գրաֆիկական դիմանկարն օգտագործում է…", "Графический портрет использует…"), [t("line, spot and tone", "գիծ, բիծ և տոն", "линию, пятно и тон"), t("only bright colours", "միայն վառ գույներ", "только яркие цвета"), t("clay", "կավ", "глину")], 0),
        q(t("Dürer's portrait of his mother is drawn in…", "Դյուրերի մոր դիմանկարը նկարված է…", "Портрет матери Дюрер нарисовал…"), [t("oil", "յուղաներկով", "маслом"), t("charcoal", "ածուխով", "углём"), t("watercolour", "ջրաներկով", "акварелью")], 1),
        q(t("A portrait made of a few confident lines is…", "Մի քանի վստահ գծից կազմված դիմանկարը…", "Портрет из нескольких уверенных линий —…"), [t("tonal", "տոնային է", "тональный"), t("ceremonial", "շքեղ է", "парадный"), t("linear", "գծային է", "линейный")], 2),
        q(t("Side light gives a face…", "Կողքի լույսը դեմքին տալիս է…", "Боковой свет придаёт лицу…"), [t("strong volume and character", "ուժեղ ծավալ և բնավորություն", "сильный объём и характер"), t("no volume", "ոչ մի ծավալ", "никакого объёма"), t("a green colour", "կանաչ գույն", "зелёный цвет")], 0),
        q(t("The centre of a portrait is usually…", "Դիմանկարի կենտրոնը սովորաբար…", "Центр портрета обычно —…"), [t("the collar", "օձիքն է", "воротник"), t("the eyes", "աչքերն են", "глаза"), t("the background", "ֆոնն է", "фон")], 1),
        q(t("Light from behind the model is called…", "Բնորդի ետևից լույսը կոչվում է…", "Свет из-за спины модели называется…"), [t("highlight", "փայլ", "блик"), t("hatching", "շտրիխ", "штриховка"), t("contre-jour", "կոնտրաժուր", "контражур")], 2),
      ],
    ),
    lesson(
      "portrait-colour",
      ["The painted portrait: colour and mood", "Գունային դիմանկար․ գույն և տրամադրություն", "Портрет в живописи: роль цвета"],
      {
        en: ["Understand how colour expresses character and mood in a portrait", "Mix skin tones with warm and cool shades", "Paint a portrait with a colour mood"],
        hy: ["Հասկանալ, թե ինչպես է գույնը դիմանկարում արտահայտում բնավորությունն ու տրամադրությունը", "Խառնել մաշկի երանգներ տաք և սառն երանգներով", "Նկարել դիմանկար՝ գունային տրամադրությամբ"],
        ru: ["Понимать, как цвет выражает характер и настроение в портрете", "Смешивать цвет кожи с тёплыми и холодными оттенками", "Написать портрет с цветовым настроением"],
      },
      {
        en: `## Colour speaks about the person

In a painted portrait, colour does more than copy the skin and clothes. It creates a **mood** and shows the **character**.

* In Serov's «Girl with Peaches» (1887), warm daylight, pink and gold create a feeling of youth and happiness.
* In Repin's portraits, the dark background makes the face stand out and look serious and thoughtful.
* Saryan painted faces with bold, bright colour spots: blue shadows, orange light; the people look full of energy.

## Skin is not one colour

There is no paint called "skin colour". A face has many shades:

* the **forehead** is lighter and yellower;
* the **cheeks, nose and ears** are pinker, warmer;
* the **chin** of a man can be bluish or greenish;
* **shadows** are cooler or warmer depending on the light and the surroundings;
* coloured reflections from the clothes and background appear on the face.

**Basic mixture:** white + a little ochre + a little red. Make it warmer with red or orange, cooler with a little blue or green, darker with burnt umber.

## Background and clothes

* A **warm** background brings warmth and closeness.
* A **cool** background gives calm or seriousness.
* A **complementary** background (for example green behind a pink face) makes the face glow.
* Clothes should support the face, not compete with it.

## Paint a portrait

1. Draw the head lightly in pencil.
2. Decide on the mood: joyful, calm, thoughtful, dreamy.
3. Choose a background colour for that mood.
4. Paint big areas first: background, hair, clothes, face in light and shadow.
5. Add warm and cool shades on the face.
6. Finish with the eyes, the lips and a few highlights.

### Exercises

1. What can colour express in a portrait?
2. What feeling does the colour of «Girl with Peaches» create?
3. Why is there no single "skin colour"?
4. Which parts of a face are usually warmer and pinker?
5. How do you make a skin tone cooler? Darker?
6. Why does a complementary background make a face glow?
7. Paint the same face twice: on a warm and on a cool background. Compare the moods.

### Answers

1. Mood and character. 2. Youth and happiness. 3. A face has many shades: lighter, warmer, cooler places and reflections. 4. The cheeks, nose and ears. 5. With a little blue or green; with burnt umber. 6. Complementary colours make each other brighter. 7. Your work.`,
        hy: `## Գույնը պատմում է մարդու մասին

Գունային դիմանկարում գույնը պարզապես չի կրկնում մաշկն ու հագուստը։ Այն ստեղծում է **տրամադրություն** և ցույց է տալիս **բնավորությունը**։

* Սերովի «Դեղձերով աղջիկը» (1887) կտավում տաք ցերեկային լույսը, վարդագույնն ու ոսկեգույնը ստեղծում են երիտասարդության և երջանկության զգացում։
* Ռեպինի դիմանկարներում մուգ ֆոնը դեմքն առանձնացնում է, և այն լուրջ ու մտածկոտ է երևում։
* Սարյանը դեմքերը նկարում էր համարձակ, վառ գունաբծերով՝ կապույտ ստվերներ, նարնջագույն լույս, մարդիկ եռանդով լի են թվում։

## Մաշկը մեկ գույն չէ

«Մաշկի գույն» կոչվող ներկ չկա։ Դեմքն ունի բազմաթիվ երանգներ․

* **ճակատն** ավելի բաց և դեղնավուն է,
* **այտերը, քիթն ու ականջները** ավելի վարդագույն են, ավելի տաք,
* տղամարդու **կզակը** կարող է կապտավուն կամ կանաչավուն լինել,
* **ստվերներն** ավելի սառն են կամ ավելի տաք՝ կախված լույսից և շրջապատից,
* դեմքի վրա երևում են հագուստից և ֆոնից գունավոր ռեֆլեքսներ։

**Հիմնական խառնուրդ**՝ սպիտակ + մի քիչ օխրա + մի քիչ կարմիր։ Կարմիրով կամ նարնջագույնով դարձրու ավելի տաք, մի քիչ կապույտով կամ կանաչով՝ ավելի սառը, այրված ումբրայով՝ ավելի մուգ։

## Ֆոն և հագուստ

* **Տաք** ֆոնը ջերմություն և մտերմություն է բերում։
* **Սառը** ֆոնը հանդարտություն կամ լրջություն է տալիս։
* **Փոխլրացնող** ֆոնը (օրինակ՝ կանաչ վարդագույն դեմքի ետևում) դեմքը փայլեցնում է։
* Հագուստը պետք է աջակցի դեմքին, ոչ թե մրցի նրա հետ։

## Նկարիր դիմանկար

1. Մատիտով թեթև նկարիր գլուխը։
2. Որոշիր տրամադրությունը՝ ուրախ, հանդարտ, մտածկոտ, երազկոտ։
3. Ընտրիր այդ տրամադրությանը համապատասխան ֆոնի գույն։
4. Նախ նկարիր մեծ մակերեսները՝ ֆոն, մազեր, հագուստ, դեմքը լույսում և ստվերում։
5. Դեմքին ավելացրու տաք և սառն երանգներ։
6. Ավարտիր աչքերով, շուրթերով և մի քանի փայլով։

### Վարժություններ

1. Ինչ կարող է արտահայտել գույնը դիմանկարում։
2. Ինչ զգացում է ստեղծում «Դեղձերով աղջիկը» կտավի գույնը։
3. Ինչու չկա մեկ «մաշկի գույն»։
4. Դեմքի որ մասերն են սովորաբար ավելի տաք և վարդագույն։
5. Ինչպես մաշկի երանգը դարձնել ավելի սառը։ Իսկ ավելի մուգ։
6. Ինչու է փոխլրացնող ֆոնը դեմքը փայլեցնում։
7. Նույն դեմքը նկարիր երկու անգամ՝ տաք և սառը ֆոնի վրա։ Համեմատիր տրամադրությունները։

### Պատասխաններ

1. Տրամադրություն և բնավորություն։ 2. Երիտասարդության և երջանկության։ 3. Դեմքն ունի բազմաթիվ երանգներ՝ ավելի բաց, տաք, սառը տեղեր և ռեֆլեքսներ։ 4. Այտերը, քիթը և ականջները։ 5. Մի քիչ կապույտով կամ կանաչով, այրված ումբրայով։ 6. Փոխլրացնող գույներն իրար ավելի վառ են դարձնում։ 7. Քո աշխատանքը։`,
        ru: `## Цвет рассказывает о человеке

В живописном портрете цвет не просто повторяет кожу и одежду. Он создаёт **настроение** и показывает **характер**.

* В «Девочке с персиками» Серова (1887) тёплый дневной свет, розовый и золотистый создают ощущение юности и счастья.
* В портретах Репина тёмный фон выделяет лицо, и оно кажется серьёзным и задумчивым.
* Сарьян писал лица смелыми яркими пятнами цвета: синие тени, оранжевый свет; люди кажутся полными энергии.

## Кожа — не один цвет

Краски «телесного цвета» не существует. В лице много оттенков:

* **лоб** светлее и желтее;
* **щёки, нос и уши** розовее, теплее;
* **подбородок** у мужчины может быть голубоватым или зеленоватым;
* **тени** холоднее или теплее в зависимости от света и окружения;
* на лице появляются цветные рефлексы от одежды и фона.

**Основная смесь:** белила + немного охры + немного красной. Теплее — с красной или оранжевой, холоднее — с капелькой синей или зелёной, темнее — с умброй жжёной.

## Фон и одежда

* **Тёплый** фон приносит тепло и близость.
* **Холодный** фон даёт спокойствие или серьёзность.
* **Дополнительный** фон (например, зелёный за розовым лицом) заставляет лицо светиться.
* Одежда должна поддерживать лицо, а не спорить с ним.

## Напиши портрет

1. Легко нарисуй голову карандашом.
2. Реши, каким будет настроение: радостным, спокойным, задумчивым, мечтательным.
3. Выбери цвет фона для этого настроения.
4. Сначала закрой большие плоскости: фон, волосы, одежду, лицо на свету и в тени.
5. Добавь на лицо тёплые и холодные оттенки.
6. Закончи глазами, губами и несколькими бликами.

### Упражнения

1. Что может выразить цвет в портрете?
2. Какое чувство создаёт колорит «Девочки с персиками»?
3. Почему не существует одного «телесного цвета»?
4. Какие части лица обычно теплее и розовее?
5. Как сделать цвет кожи холоднее? Темнее?
6. Почему дополнительный фон заставляет лицо светиться?
7. Напиши одно лицо дважды: на тёплом и на холодном фоне. Сравни настроения.

### Ответы

1. Настроение и характер. 2. Юности и счастья. 3. В лице много оттенков: светлые, тёплые, холодные места и рефлексы. 4. Щёки, нос и уши. 5. Капелькой синей или зелёной; умброй жжёной. 6. Дополнительные цвета делают друг друга ярче. 7. Твоя работа.`,
      },
      [
        q(t("Serov's «Girl with Peaches» was painted in…", "Սերովի «Դեղձերով աղջիկը» նկարվել է…", "«Девочка с персиками» Серова написана в…"), [t("1887", "1887 թվականին", "1887 году"), t("1514", "1514 թվականին", "1514 году"), t("1959", "1959 թվականին", "1959 году")], 0),
        q(t("In colour, a portrait expresses…", "Գույնով դիմանկարն արտահայտում է…", "Цветом портрет выражает…"), [t("only the size", "միայն չափը", "только размер"), t("mood and character", "տրամադրություն և բնավորություն", "настроение и характер"), t("the price", "գինը", "цену")], 1),
        q(t("The basic skin mixture is white with a little…", "Մաշկի հիմնական խառնուրդը սպիտակ է մի քիչ…", "Основная телесная смесь — белила с небольшим количеством…"), [t("black and blue", "սևով և կապույտով", "чёрной и синей"), t("green and violet", "կանաչով և մանուշակագույնով", "зелёной и фиолетовой"), t("ochre and red", "օխրայով և կարմիրով", "охры и красной")], 2),
        q(t("The warmest, pinkest parts of a face are usually…", "Դեմքի ամենատաք, վարդագույն մասերը սովորաբար…", "Самые тёплые, розовые части лица обычно —…"), [t("cheeks, nose and ears", "այտերը, քիթը և ականջներն են", "щёки, нос и уши"), t("the forehead only", "միայն ճակատն է", "только лоб"), t("the hair", "մազերն են", "волосы")], 0),
        q(t("A green background behind a pink face is…", "Կանաչ ֆոնը վարդագույն դեմքի ետևում…", "Зелёный фон за розовым лицом —…"), [t("a mistake", "սխալ է", "ошибка"), t("complementary", "փոխլրացնող է", "дополнительный"), t("a reflection", "ռեֆլեքս է", "рефлекс")], 1),
        q(t("Clothes in a portrait should…", "Դիմանկարում հագուստը պետք է…", "Одежда в портрете должна…"), [t("be brighter than the face", "դեմքից ավելի վառ լինի", "быть ярче лица"), t("be missing", "բացակայի", "отсутствовать"), t("support the face", "աջակցի դեմքին", "поддерживать лицо")], 2),
      ],
    ),
    lesson(
      "self-portrait",
      ["The self-portrait", "Ինքնանկար", "Автопортрет"],
      {
        en: ["Understand why artists paint themselves", "Learn to draw from a mirror", "Make a self-portrait that shows something about you"],
        hy: ["Հասկանալ, թե ինչու են նկարիչներն իրենց նկարում", "Սովորել նկարել հայելուց", "Ստեղծել ինքնանկար, որ ինչ-որ բան է պատմում քո մասին"],
        ru: ["Понимать, зачем художники пишут самих себя", "Научиться рисовать по зеркалу", "Создать автопортрет, который что-то рассказывает о тебе"],
      },
      {
        en: `## Why do artists paint themselves?

* The model is **always at hand** and free.
* A self-portrait is a way to **know yourself**: to look honestly at your face and your feelings.
* It shows how the artist sees his or her **role**: a master, a thinker, a worker, a dreamer.
* A series of self-portraits becomes a **diary** of a life.

## Famous self-portraits

* **Albrecht Dürer** (1500) painted himself from the front, serious and solemn, like a noble image.
* **Rembrandt** painted and drew himself many times, from a young man in a hat to a tired old man; we see his whole life.
* **Vincent van Gogh** made more than thirty-five self-portraits, often because he had no money to pay models.
* **Martiros Saryan** painted himself several times; in his self-portraits the colour is as bright and confident as in his landscapes.

## How to draw from a mirror

1. Put the mirror at eye level, so you do not have to bend.
2. Light your face from the side (a window or lamp).
3. Remember: in a mirror everything is **reversed**: your left is on the right.
4. Look in the mirror more often than at the paper. Check proportions with the guide lines.
5. Keep the same position of the head all the time.

## A self-portrait with meaning

Add something that tells about you:

* an object in your hands (a book, a ball, a violin, a paintbrush);
* a background (your room, your city, Mount Ararat, a football field);
* a colour that shows your mood;
* a pose: proud, shy, dreamy, cheerful.

## Try it

1. Make three quick sketches of yourself in a mirror: serious, smiling, surprised.
2. Make one careful self-portrait with an object and background that tell about you.

### Exercises

1. Name three reasons why artists paint self-portraits.
2. What did Dürer's self-portrait of 1500 show?
3. Why do Rembrandt's self-portraits look like a diary?
4. Why did Van Gogh paint so many self-portraits?
5. What must you remember when drawing from a mirror?
6. Where should the mirror and the light be?
7. Make a self-portrait with an object that tells about your hobby.

### Answers

1. For example: the model is always at hand; to know yourself; to show the artist's role; to keep a diary of life. 2. The artist seen from the front, serious and solemn. 3. He painted himself from youth to old age, so we see his whole life. 4. Often he had no money to pay models. 5. Everything is reversed; look at the mirror more than at the paper. 6. The mirror at eye level, the light from the side. 7. Your work.`,
        hy: `## Ինչու են նկարիչներն իրենց նկարում

* Բնորդը **միշտ ձեռքի տակ** է և անվճար։
* Ինքնանկարը **ինքդ քեզ ճանաչելու** եղանակ է՝ ազնվորեն նայել քո դեմքին և զգացմունքներին։
* Այն ցույց է տալիս, թե ինչպես է նկարիչը տեսնում իր **դերը**՝ վարպետ, մտածող, աշխատավոր, երազող։
* Ինքնանկարների շարքը դառնում է կյանքի **օրագիր**։

## Հայտնի ինքնանկարներ

* **Ալբրեխտ Դյուրերը** (1500) ինքն իրեն նկարել է դիմացից՝ լուրջ և հանդիսավոր, ինչպես վեհ կերպար։
* **Ռեմբրանդտը** բազմաթիվ անգամներ նկարել է ինքն իրեն՝ գլխարկով երիտասարդից մինչև հոգնած ծերունի․ մենք տեսնում ենք նրա ամբողջ կյանքը։
* **Վինսենթ Վան Գոգը** ստեղծել է երեսունհինգից ավելի ինքնանկար, հաճախ այն պատճառով, որ բնորդներին վճարելու փող չուներ։
* **Մարտիրոս Սարյանը** մի քանի անգամ նկարել է ինքն իրեն, նրա ինքնանկարներում գույնը նույնքան վառ և վստահ է, որքան բնանկարներում։

## Ինչպես նկարել հայելուց

1. Հայելին դիր աչքերի մակարդակում, որ չկռանաս։
2. Դեմքդ լուսավորիր կողքից (պատուհան կամ լամպ)։
3. Հիշիր․ հայելում ամեն ինչ **շրջված** է, քո ձախն աջում է։
4. Հայելուն ավելի հաճախ նայիր, քան թղթին։ Համամասնությունները ստուգիր օժանդակ գծերով։
5. Ամբողջ ժամանակ գլուխդ պահիր նույն դիրքում։

## Իմաստով ինքնանկար

Ավելացրու մի բան, որ պատմում է քո մասին․

* առարկա ձեռքերումդ (գիրք, գնդակ, ջութակ, վրձին),
* ֆոն (քո սենյակը, քո քաղաքը, Արարատ լեռը, ֆուտբոլի դաշտը),
* գույն, որ ցույց է տալիս քո տրամադրությունը,
* դիրք՝ հպարտ, ամաչկոտ, երազկոտ, ուրախ։

## Փորձիր

1. Հայելուց արա քո երեք արագ ուրվանկար՝ լուրջ, ժպտացող, զարմացած։
2. Արա մեկ խնամքով ինքնանկար՝ առարկայով և ֆոնով, որոնք պատմում են քո մասին։

### Վարժություններ

1. Անվանիր երեք պատճառ, թե ինչու են նկարիչներն ինքնանկարներ ստեղծում։
2. Ինչ էր ցույց տալիս Դյուրերի 1500 թվականի ինքնանկարը։
3. Ինչու են Ռեմբրանդտի ինքնանկարներն օրագրի նման։
4. Ինչու էր Վան Գոգն այդքան շատ ինքնանկարներ նկարում։
5. Ինչ պետք է հիշել հայելուց նկարելիս։
6. Որտեղ պետք է լինեն հայելին և լույսը։
7. Ստեղծիր ինքնանկար՝ առարկայով, որը պատմում է քո հետաքրքրության մասին։

### Պատասխաններ

1. Օրինակ՝ բնորդը միշտ ձեռքի տակ է, ինքդ քեզ ճանաչելու համար, նկարչի դերը ցույց տալու համար, կյանքի օրագիր պահելու համար։ 2. Նկարչին դիմացից՝ լուրջ և հանդիսավոր։ 3. Նա ինքն իրեն նկարել է երիտասարդությունից մինչև ծերություն, և մենք տեսնում ենք նրա ամբողջ կյանքը։ 4. Հաճախ բնորդներին վճարելու փող չուներ։ 5. Ամեն ինչ շրջված է, հայելուն ավելի շատ նայիր, քան թղթին։ 6. Հայելին աչքերի մակարդակում, լույսը՝ կողքից։ 7. Քո աշխատանքը։`,
        ru: `## Зачем художники пишут самих себя?

* Модель **всегда под рукой** и бесплатна.
* Автопортрет — способ **познать себя**: честно вглядеться в своё лицо и чувства.
* Он показывает, как художник видит свою **роль**: мастер, мыслитель, труженик, мечтатель.
* Серия автопортретов становится **дневником** жизни.

## Знаменитые автопортреты

* **Альбрехт Дюрер** (1500) написал себя анфас, серьёзным и торжественным, как возвышенный образ.
* **Рембрандт** много раз писал и рисовал себя — от юноши в шляпе до усталого старика; мы видим всю его жизнь.
* **Винсент Ван Гог** создал более тридцати пяти автопортретов, часто потому, что ему нечем было платить натурщикам.
* **Мартирос Сарьян** несколько раз писал себя; в его автопортретах цвет так же ярок и уверен, как в пейзажах.

## Как рисовать по зеркалу

1. Поставь зеркало на уровне глаз, чтобы не наклоняться.
2. Освети лицо сбоку (окно или лампа).
3. Помни: в зеркале всё **наоборот**: твоё левое — справа.
4. Смотри в зеркало чаще, чем на бумагу. Проверяй пропорции вспомогательными линиями.
5. Всё время держи голову в одном положении.

## Автопортрет со смыслом

Добавь что-то, что рассказывает о тебе:

* предмет в руках (книга, мяч, скрипка, кисть);
* фон (твоя комната, твой город, гора Арарат, футбольное поле);
* цвет, который показывает твоё настроение;
* позу: гордую, застенчивую, мечтательную, весёлую.

## Попробуй

1. Сделай по зеркалу три быстрых наброска: серьёзный, улыбающийся, удивлённый.
2. Сделай один тщательный автопортрет с предметом и фоном, которые рассказывают о тебе.

### Упражнения

1. Назови три причины, по которым художники пишут автопортреты.
2. Каким показал себя Дюрер на автопортрете 1500 года?
3. Почему автопортреты Рембрандта похожи на дневник?
4. Почему Ван Гог написал так много автопортретов?
5. Что нужно помнить, рисуя по зеркалу?
6. Где должны быть зеркало и свет?
7. Сделай автопортрет с предметом, который рассказывает о твоём увлечении.

### Ответы

1. Например: модель всегда под рукой; чтобы познать себя; чтобы показать роль художника; чтобы вести дневник жизни. 2. Анфас, серьёзным и торжественным. 3. Он писал себя от юности до старости, и мы видим всю его жизнь. 4. Часто ему нечем было платить натурщикам. 5. Всё отражено наоборот; смотреть в зеркало чаще, чем на бумагу. 6. Зеркало на уровне глаз, свет сбоку. 7. Твоя работа.`,
      },
      [
        q(t("A portrait of the artist by himself or herself is a…", "Նկարչի՝ ինքն իր դիմանկարը…", "Портрет художника, написанный им самим, —…"), [t("self-portrait", "ինքնանկար է", "автопортрет"), t("still life", "նատյուրմորտ է", "натюрморт"), t("group portrait", "խմբային դիմանկար է", "групповой портрет")], 0),
        q(t("Who painted himself from youth to old age, like a diary?", "Ով է իրեն նկարել երիտասարդությունից մինչև ծերություն, օրագրի պես։", "Кто писал себя от юности до старости, как дневник?"), [t("Holbein", "Հոլբայնը", "Гольбейн"), t("Rembrandt", "Ռեմբրանդտը", "Рембрандт"), t("Chardin", "Շարդենը", "Шарден")], 1),
        q(t("In a mirror your left hand appears…", "Հայելում քո ձախ ձեռքն երևում է…", "В зеркале твоя левая рука видна…"), [t("on the left", "ձախում", "слева"), t("upside down", "գլխիվայր", "вверх ногами"), t("on the right", "աջում", "справа")], 2),
        q(t("The mirror should be placed…", "Հայելին պետք է դնել…", "Зеркало нужно поставить…"), [t("at eye level", "աչքերի մակարդակում", "на уровне глаз"), t("on the floor", "հատակին", "на пол"), t("behind you", "ետևումդ", "за спиной")], 0),
        q(t("Van Gogh painted … self-portraits.", "Վան Գոգը նկարել է … ինքնանկար։", "Ван Гог написал … автопортретов."), [t("only one", "միայն մեկ", "только один"), t("more than thirty-five", "երեսունհինգից ավելի", "более тридцати пяти"), t("none", "ոչ մի", "ни одного")], 1),
        q(t("A book or a violin in a self-portrait tells about…", "Ինքնանկարում գիրքը կամ ջութակը պատմում են…", "Книга или скрипка в автопортрете рассказывают о…"), [t("the weather", "եղանակի մասին", "погоде"), t("the paper", "թղթի մասին", "бумаге"), t("the person's interests", "մարդու հետաքրքրությունների մասին", "увлечениях человека")], 2),
      ],
    ),
    lesson(
      "great-portraits",
      ["Great portraitists: Hovnatanyan, Repin, Serov", "Մեծ դիմանկարիչներ․ Հովնաթանյան, Ռեպին, Սերով", "Великие портретисты: Овнатанян, Репин, Серов"],
      {
        en: ["Learn about three great masters of the portrait", "Compare their styles: precise, dramatic, fresh", "Describe a portrait using the words learned in this unit"],
        hy: ["Ծանոթանալ դիմանկարի երեք մեծ վարպետների", "Համեմատել նրանց ոճերը՝ ճշգրիտ, դրամատիկ, թարմ", "Նկարագրել դիմանկար՝ օգտագործելով այս բաժնում սովորած բառերը"],
        ru: ["Познакомиться с тремя великими мастерами портрета", "Сравнить их манеры: точную, драматичную, свежую", "Описать портрет словами, изученными в этом разделе"],
      },
      {
        en: `## Hakob Hovnatanyan (1806–1881)

Hakob Hovnatanyan came from a family of Armenian painters who worked for several generations. He lived and worked in **Tiflis** (Tbilisi), where many Armenians lived, and became the city's favourite portraitist.

* His portraits show merchants, their wives and children, writers, officials.
* The faces are painted **very precisely**, with smooth surfaces and careful details: lace, jewellery, buttons.
* The people look calm and full of **dignity**; the dark background makes the face shine.
* One of his best-known works is the portrait of **Natalia Teumyan**, kept in the National Gallery of Armenia.

## Ilya Repin (1844–1930)

Repin is one of the greatest Russian painters. He worked in many genres, but his portraits are especially powerful.

* He painted writers, composers and scientists, for example **Lev Tolstoy** and the composer **Modest Mussorgsky** (1881, a few days before the composer's death).
* His portraits are **psychological**: we feel the person's thoughts, illness, strength or doubt.
* He used free, energetic brush strokes.

## Valentin Serov (1865–1911)

Serov was Repin's student.

* His early works «Girl with Peaches» (1887) and «Girl Lit by the Sun» (1888) are full of **light, air and youth**.
* Later he painted elegant formal portraits, for example of the actress **Maria Yermolova** (1905), standing tall and proud.
* He could catch a person's character in a few lines; his drawings are as famous as his paintings.

## Compare

| | Hovnatanyan | Repin | Serov |
|---|---|---|---|
| **manner** | precise, smooth | free, energetic | fresh, light |
| **background** | dark, plain | varied, often dark | light, air, interior |
| **main feeling** | dignity | inner drama | life and freshness |

### Exercises

1. In which city did Hovnatanyan work?
2. What is typical of his portraits?
3. Whose portrait did Repin paint a few days before the sitter's death?
4. What does "psychological portrait" mean?
5. Name two early paintings by Serov. What feeling do they share?
6. Who was Serov's teacher?
7. Choose a portrait by one of these masters and describe it: kind, size, pose, light, colour, mood.

### Answers

1. In Tiflis (Tbilisi). 2. Precise faces, smooth surfaces, careful details, dignity and a dark background. 3. Modest Mussorgsky's. 4. A portrait that shows the inner world: thoughts and feelings. 5. «Girl with Peaches» and «Girl Lit by the Sun»; light, air and youth. 6. Ilya Repin. 7. Your description.`,
        hy: `## Հակոբ Հովնաթանյան (1806–1881)

Հակոբ Հովնաթանյանը սերում էր հայ նկարիչների ընտանիքից, որոնք աշխատել են մի քանի սերունդ։ Նա ապրում և ստեղծագործում էր **Թիֆլիսում**, որտեղ շատ հայեր էին ապրում, և դարձավ քաղաքի սիրված դիմանկարիչը։

* Նրա դիմանկարները պատկերում են վաճառականների, նրանց կանանց և երեխաների, գրողների, պաշտոնյաների։
* Դեմքերը նկարված են **շատ ճշգրիտ**՝ հարթ մակերեսներով և խնամքով մանրամասներով՝ ժանյակ, զարդեր, կոճակներ։
* Մարդիկ հանդարտ են և **արժանապատվությամբ** լի, մուգ ֆոնը դեմքը փայլեցնում է։
* Նրա ամենահայտնի գործերից է **Նատալյա Թեումյանի** դիմանկարը, որը պահվում է Հայաստանի ազգային պատկերասրահում։

## Իլյա Ռեպին (1844–1930)

Ռեպինը ռուս մեծագույն նկարիչներից է։ Նա աշխատել է բազմաթիվ ժանրերում, բայց նրա դիմանկարները հատկապես ուժեղ են։

* Նա նկարել է գրողների, կոմպոզիտորների և գիտնականների, օրինակ՝ **Լև Տոլստոյին** և կոմպոզիտոր **Մոդեստ Մուսորգսկուն** (1881, կոմպոզիտորի մահից մի քանի օր առաջ)։
* Նրա դիմանկարները **հոգեբանական** են․ մենք զգում ենք մարդու մտքերը, հիվանդությունը, ուժը կամ կասկածը։
* Նա օգտագործում էր ազատ, եռանդուն վրձնահարվածներ։

## Վալենտին Սերով (1865–1911)

Սերովը Ռեպինի աշակերտն էր։

* Նրա վաղ գործերը՝ «Դեղձերով աղջիկը» (1887) և «Արևով լուսավորված աղջիկը» (1888), լի են **լույսով, օդով և երիտասարդությամբ**։
* Հետագայում նա նկարել է նրբագեղ շքեղ դիմանկարներ, օրինակ՝ դերասանուհի **Մարիա Երմոլովայի** (1905) դիմանկարը, որը կանգնած է բարձր և հպարտ։
* Նա կարողանում էր մի քանի գծով որսալ մարդու բնավորությունը, նրա գծանկարները նույնքան հայտնի են, որքան կտավները։

## Համեմատիր

| | Հովնաթանյան | Ռեպին | Սերով |
|---|---|---|---|
| **ոճ** | ճշգրիտ, հարթ | ազատ, եռանդուն | թարմ, թեթև |
| **ֆոն** | մուգ, պարզ | բազմազան, հաճախ մուգ | լույս, օդ, ինտերիեր |
| **գլխավոր զգացում** | արժանապատվություն | ներքին դրամա | կյանք և թարմություն |

### Վարժություններ

1. Որ քաղաքում էր աշխատում Հովնաթանյանը։
2. Ինչն է բնորոշ նրա դիմանկարներին։
3. Ում դիմանկարն է Ռեպինը նկարել բնորդի մահից մի քանի օր առաջ։
4. Ինչ է նշանակում «հոգեբանական դիմանկար»։
5. Անվանիր Սերովի երկու վաղ կտավ։ Ինչ զգացում ունեն դրանք ընդհանուր։
6. Ով էր Սերովի ուսուցիչը։
7. Ընտրիր այս վարպետներից մեկի դիմանկարը և նկարագրիր այն՝ տեսակ, չափ, դիրք, լույս, գույն, տրամադրություն։

### Պատասխաններ

1. Թիֆլիսում (Թբիլիսիում)։ 2. Ճշգրիտ դեմքեր, հարթ մակերեսներ, խնամքով մանրամասներ, արժանապատվություն և մուգ ֆոն։ 3. Մոդեստ Մուսորգսկու։ 4. Դիմանկար, որը ցույց է տալիս ներքին աշխարհը՝ մտքերն ու զգացմունքները։ 5. «Դեղձերով աղջիկը» և «Արևով լուսավորված աղջիկը»․ լույս, օդ և երիտասարդություն։ 6. Իլյա Ռեպինը։ 7. Քո նկարագրությունը։`,
        ru: `## Акоп Овнатанян (1806–1881)

Акоп Овнатанян происходил из семьи армянских художников, работавших несколько поколений. Он жил и работал в **Тифлисе**, где жило много армян, и стал любимым портретистом города.

* На его портретах — купцы, их жёны и дети, писатели, чиновники.
* Лица написаны **очень точно**, с гладкой поверхностью и тщательными деталями: кружево, украшения, пуговицы.
* Люди спокойны и полны **достоинства**; тёмный фон заставляет лицо светиться.
* Одна из самых известных его работ — портрет **Натальи Теумян**, хранящийся в Национальной галерее Армении.

## Илья Репин (1844–1930)

Репин — один из величайших русских художников. Он работал во многих жанрах, но его портреты особенно сильны.

* Он писал писателей, композиторов и учёных, например **Льва Толстого** и композитора **Модеста Мусоргского** (1881, за несколько дней до смерти композитора).
* Его портреты **психологичны**: мы чувствуем мысли человека, его болезнь, силу или сомнение.
* Он писал свободными энергичными мазками.

## Валентин Серов (1865–1911)

Серов был учеником Репина.

* Его ранние работы «Девочка с персиками» (1887) и «Девушка, освещённая солнцем» (1888) полны **света, воздуха и юности**.
* Позже он писал изящные парадные портреты, например актрисы **Марии Ермоловой** (1905), стоящей высоко и гордо.
* Он умел схватить характер человека несколькими линиями; его рисунки так же знамениты, как картины.

## Сравни

| | Овнатанян | Репин | Серов |
|---|---|---|---|
| **манера** | точная, гладкая | свободная, энергичная | свежая, лёгкая |
| **фон** | тёмный, простой | разный, часто тёмный | свет, воздух, интерьер |
| **главное чувство** | достоинство | внутренняя драма | жизнь и свежесть |

### Упражнения

1. В каком городе работал Овнатанян?
2. Что характерно для его портретов?
3. Чей портрет Репин написал за несколько дней до смерти модели?
4. Что значит «психологический портрет»?
5. Назови две ранние картины Серова. Какое чувство их объединяет?
6. Кто был учителем Серова?
7. Выбери портрет одного из этих мастеров и опиши его: вид, охват, поза, свет, цвет, настроение.

### Ответы

1. В Тифлисе (Тбилиси). 2. Точные лица, гладкая поверхность, тщательные детали, достоинство и тёмный фон. 3. Модеста Мусоргского. 4. Портрет, показывающий внутренний мир: мысли и чувства. 5. «Девочка с персиками» и «Девушка, освещённая солнцем»; свет, воздух и юность. 6. Илья Репин. 7. Твоё описание.`,
      },
      [
        q(t("Hakob Hovnatanyan was the favourite portraitist of…", "Հակոբ Հովնաթանյանը սիրված դիմանկարիչն էր…", "Акоп Овнатанян был любимым портретистом…"), [t("Tiflis", "Թիֆլիսի", "Тифлиса"), t("Rome", "Հռոմի", "Рима"), t("London", "Լոնդոնի", "Лондона")], 0),
        q(t("Repin's portrait of Mussorgsky was painted in…", "Ռեպինը Մուսորգսկու դիմանկարը նկարել է…", "Портрет Мусоргского Репин написал в…"), [t("1805", "1805 թվականին", "1805 году"), t("1881", "1881 թվականին", "1881 году"), t("1959", "1959 թվականին", "1959 году")], 1),
        q(t("A portrait that shows thoughts and feelings is…", "Մտքերն ու զգացմունքները ցույց տվող դիմանկարը…", "Портрет, показывающий мысли и чувства, —…"), [t("decorative", "դեկորատիվ է", "декоративный"), t("ceremonial only", "միայն շքեղ է", "только парадный"), t("psychological", "հոգեբանական է", "психологический")], 2),
        q(t("Serov's teacher was…", "Սերովի ուսուցիչն էր…", "Учителем Серова был…"), [t("Repin", "Ռեպինը", "Репин"), t("Hovnatanyan", "Հովնաթանյանը", "Овнатанян"), t("Saryan", "Սարյանը", "Сарьян")], 0),
        q(t("«Girl Lit by the Sun» is full of…", "«Արևով լուսավորված աղջիկը» լի է…", "«Девушка, освещённая солнцем» полна…"), [t("darkness and fear", "խավարով և վախով", "темноты и страха"), t("light, air and youth", "լույսով, օդով և երիտասարդությամբ", "света, воздуха и юности"), t("battle scenes", "մարտական տեսարաններով", "батальных сцен")], 1),
        q(t("Hovnatanyan's manner is…", "Հովնաթանյանի ոճը…", "Манера Овнатаняна —…"), [t("rough and fast", "կոպիտ և արագ է", "грубая и быстрая"), t("abstract", "աբստրակտ է", "абстрактная"), t("precise and smooth", "ճշգրիտ և հարթ է", "точная и гладкая")], 2),
      ],
    ),
  ],
};
