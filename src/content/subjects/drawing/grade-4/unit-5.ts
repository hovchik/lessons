import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit5: UnitSeed = {
  title: t("Letters, holidays and review", "Տառեր, տոներ և ամփոփում", "Буквы, праздники и итоги"),
  summary: t(
    "The beauty of Armenian and Russian letters, New Year traditions, a class album about the art of nations, the final exhibition and the year review.",
    "Հայկական և ռուսական տառերի գեղեցկությունը, Ամանորի ավանդույթները, դասարանական ալբոմ ժողովուրդների արվեստի մասին, ամփոփիչ ցուցահանդես և տարվա ամփոփում։",
    "Красота армянских и русских букв, новогодние традиции, альбом класса об искусстве народов, итоговая выставка и повторение за год.",
  ),
  lessons: [
    lesson(
      "letter-art",
      ["The beauty of letters", "Տառերի գեղեցկությունը", "Красота букв"],
      {
        en: ["Know who created the Armenian alphabet and the Cyrillic alphabet", "See letters as art: bird-letters, the decorated initial, Russian vyaz", "Design a decorated letter or a short word as an ornament"],
        hy: ["Իմանալ, թե ով է ստեղծել հայոց այբուբենը և կիրիլիցան", "Տառերը տեսնել որպես արվեստ՝ թռչնագիր, զարդագիր գլխատառ, ռուսական վյազ", "Ստեղծել զարդարված տառ կամ կարճ բառ՝ որպես զարդանախշ"],
        ru: ["Знать, кто создал армянский алфавит и кириллицу", "Видеть в буквах искусство: буквы-птицы, буквица, русская вязь", "Создать украшенную букву или короткое слово как орнамент"],
      },
      {
        en: `## Letters are also art

Every nation is proud of its letters. For centuries scribes wrote them beautifully by hand, and the letters themselves became ornament.

| Alphabet | Who created it | When |
|---|---|---|
| **Armenian** | **Mesrop Mashtots** | in 405 |
| **Cyrillic** (used for Russian) | students of the brothers **Cyril and Methodius** | in the 9th–10th centuries |

In Yerevan, in front of the Matenadaran, there is a statue of Mesrop Mashtots with his student. Near the town of Aparan there is the **Alphabet Monument**: large stone letters of the Armenian alphabet standing in a field.

## Decorated letters

| Kind | What it is |
|---|---|
| **bird-letter** (Armenian manuscripts) | the letter is built from birds, fish, animals |
| **initial** (Russian books) | a large first letter on the page, decorated with plants, animals, gold |
| **vyaz** (Russian) | tall narrow letters joined and woven together into one ornamental line; used for titles |

~~~art
pic letter-initial
~~~

## Rules of a beautiful letter

- All letters of a word have the **same height** and **same slope**.
- Thick and thin strokes alternate: this gives rhythm.
- Ornament must not hide the letter: the letter stays readable.

~~~art
letters
~~~

## Make your letter

1. Choose the first letter of your name or a short word: «Mother», «Peace», «Light».
2. Draw the letter large in pencil, with thick and thin parts.
3. Turn its lines into birds, branches or a dragon, or weave the letters together as in vyaz.
4. Paint with red, blue, green and gold; add a small border.

~~~art
steps initial
~~~

~~~art
tasks
1. Who created the Armenian alphabet and when?
2. Whose students created Cyrillic?
3. Where is the Alphabet Monument?
4. What is an initial?
5. What is vyaz?
6. What must a decorated letter keep?
7. Design a decorated first letter of your name.
~~~

~~~art
hints
1. Mesrop Mashtots, in 405. 2. Of Cyril and Methodius. 3. Near Aparan. 4. A large decorated first letter on the page. 5. Tall narrow letters woven together into one ornamental line. 6. It must stay readable. 7. Your work.
~~~`,
        hy: `## Տառերը նույնպես արվեստ են

Յուրաքանչյուր ժողովուրդ հպարտ է իր տառերով։ Դարեր շարունակ գրիչները դրանք գեղեցիկ գրել են ձեռքով, և տառերն իրենք դարձել են զարդանախշ։

| Այբուբեն | Ով է ստեղծել | Երբ |
|---|---|---|
| **հայոց** | **Մեսրոպ Մաշտոց** | 405 թվականին |
| **կիրիլիցա** (ռուսերենի համար) | **Կյուրեղ և Մեթոդիոս** եղբայրների աշակերտները | 9–10-րդ դարերում |

Երևանում՝ Մատենադարանի առջև, Մեսրոպ Մաշտոցի և նրա աշակերտի արձանն է։ Ապարան քաղաքի մոտ գտնվում է **Տառերի հուշահամալիրը**՝ դաշտում կանգնած հայոց այբուբենի քարե մեծ տառեր։

## Զարդարված տառեր

| Տեսակ | Ինչ է |
|---|---|
| **թռչնագիր** (հայկական ձեռագրեր) | տառը կառուցված է թռչուններից, ձկներից, կենդանիներից |
| **զարդագիր գլխատառ** (ռուսական գրքեր) | էջի առաջին մեծ տառը՝ զարդարված բույսերով, կենդանիներով, ոսկով |
| **վյազ** (ռուսական) | բարձր, նեղ տառեր, որոնք միացված և հյուսված են մեկ զարդագծի մեջ, օգտագործվում էր վերնագրերի համար |

~~~art
pic letter-initial
~~~

## Գեղեցիկ տառի կանոնները

- Բառի բոլոր տառերն ունեն **նույն բարձրությունը** և **նույն թեքությունը**։
- Հաստ և բարակ գծերը հերթափոխվում են՝ սա ռիթմ է տալիս։
- Զարդը չպետք է թաքցնի տառը՝ տառը մնում է ընթեռնելի։

~~~art
letters
~~~

## Ստեղծի՛ր քո տառը

1. Ընտրի՛ր անվանդ առաջին տառը կամ կարճ բառ՝ «Մայր», «Խաղաղություն», «Լույս»։
2. Մատիտով մեծ նկարի՛ր տառը՝ հաստ և բարակ մասերով։
3. Նրա գծերը դարձրու՛ թռչուններ, ճյուղեր կամ վիշապ, կամ տառերը հյուսի՛ր իրար, ինչպես վյազում։
4. Ներկի՛ր կարմիրով, կապույտով, կանաչով և ոսկեգույնով, ավելացրու՛ փոքր եզրագիծ։

~~~art
steps initial
~~~

~~~art
tasks
1. Ո՞վ և ե՞րբ է ստեղծել հայոց այբուբենը։
2. Ո՞ւմ աշակերտներն են ստեղծել կիրիլիցան։
3. Որտե՞ղ է Տառերի հուշահամալիրը։
4. Ի՞նչ է զարդագիր գլխատառը։
5. Ի՞նչ է վյազը։
6. Ի՞նչ պետք է պահպանի զարդարված տառը։
7. Ստեղծի՛ր անվանդ զարդարված առաջին տառը։
~~~

~~~art
hints
1. Մեսրոպ Մաշտոցը, 405 թվականին։ 2. Կյուրեղի և Մեթոդիոսի։ 3. Ապարանի մոտ։ 4. Էջի մեծ զարդարված առաջին տառը։ 5. Բարձր, նեղ տառեր՝ հյուսված մեկ զարդագծի մեջ։ 6. Այն պետք է մնա ընթեռնելի։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Буквы — тоже искусство

Каждый народ гордится своими буквами. Веками писцы красиво выводили их от руки, и сами буквы стали орнаментом.

| Алфавит | Кто создал | Когда |
|---|---|---|
| **армянский** | **Месроп Маштоц** | в 405 году |
| **кириллица** (для русского языка) | ученики братьев **Кирилла и Мефодия** | в IX–X веках |

В Ереване перед Матенадараном стоит памятник Месропу Маштоцу с учеником. Возле города Апаран находится **памятник армянскому алфавиту**: большие каменные буквы стоят в поле.

## Украшенные буквы

| Вид | Что это |
|---|---|
| **буква-птица** (армянские рукописи) | буква составлена из птиц, рыб, зверей |
| **буквица** (русские книги) | крупная первая буква на странице, украшенная растениями, зверями, золотом |
| **вязь** (русская) | высокие узкие буквы, соединённые и переплетённые в одну орнаментальную строку; ею писали заголовки |

~~~art
pic letter-initial
~~~

## Правила красивой буквы

- Все буквы слова одной **высоты** и одного **наклона**.
- Толстые и тонкие линии чередуются — это даёт ритм.
- Украшение не должно прятать букву: она остаётся читаемой.

~~~art
letters
~~~

## Создай свою букву

1. Выбери первую букву своего имени или короткое слово: «Мама», «Мир», «Свет».
2. Крупно нарисуй букву карандашом, с толстыми и тонкими частями.
3. Преврати её линии в птиц, ветки или дракона или сплети буквы, как в вязи.
4. Раскрась красным, синим, зелёным и золотым; добавь небольшую рамку.

~~~art
steps initial
~~~

~~~art
tasks
1. Кто и когда создал армянский алфавит?
2. Чьи ученики создали кириллицу?
3. Где находится памятник армянскому алфавиту?
4. Что такое буквица?
5. Что такое вязь?
6. Что должна сохранять украшенная буква?
7. Создай украшенную первую букву своего имени.
~~~

~~~art
hints
1. Месроп Маштоц, в 405 году. 2. Кирилла и Мефодия. 3. Возле Апарана. 4. Крупная украшенная первая буква на странице. 5. Высокие узкие буквы, переплетённые в одну орнаментальную строку. 6. Она должна оставаться читаемой. 7. Твоя работа.
~~~`,
      },
      [
        q(t("The Armenian alphabet was created by…", "Հայոց այբուբենը ստեղծել է…", "Армянский алфавит создал…"), [t("Mesrop Mashtots", "Մեսրոպ Մաշտոցը", "Месроп Маштоц"), t("Toros Roslin", "Թորոս Ռոսլինը", "Торос Рослин"), t("Argishti I", "Արգիշտի Առաջինը", "Аргишти I")], 0),
        q(t("The Armenian alphabet was created in…", "Հայոց այբուբենը ստեղծվել է…", "Армянский алфавит создан в…"), [t("1967", "1967 թվականին", "1967 году"), t("405", "405 թվականին", "405 году"), t("1555", "1555 թվականին", "1555 году")], 1),
        q(t("Tall narrow letters woven into one line are…", "Մեկ գծի մեջ հյուսված բարձր, նեղ տառերը…", "Высокие узкие буквы, сплетённые в одну строку, — это…"), [t("cuneiform", "սեպագիր են", "клинопись"), t("a meander", "մեանդր են", "меандр"), t("vyaz", "վյազ են", "вязь")], 2),
        q(t("The Alphabet Monument is near…", "Տառերի հուշահամալիրը գտնվում է … մոտ։", "Памятник алфавиту находится возле…"), [t("Aparan", "Ապարանի", "Апарана"), t("Moscow", "Մոսկվայի", "Москвы"), t("Athens", "Աթենքի", "Афин")], 0),
        q(t("A decorated letter must stay…", "Զարդարված տառը պետք է մնա…", "Украшенная буква должна оставаться…"), [t("invisible", "անտեսանելի", "невидимой"), t("readable", "ընթեռնելի", "читаемой"), t("grey", "մոխրագույն", "серой")], 1),
        q(t("Cyrillic was created by students of…", "Կիրիլիցան ստեղծել են … աշակերտները։", "Кириллицу создали ученики…"), [t("Picasso", "Պիկասոյի", "Пикассо"), t("Rembrandt", "Ռեմբրանդտի", "Рембрандта"), t("Cyril and Methodius", "Կյուրեղի և Մեթոդիոսի", "Кирилла и Мефодия")], 2),
      ],
    ),
    lesson(
      "new-year-traditions",
      ["New Year traditions and tree decorations", "Ամանորի ավանդույթներ և տոնածառի խաղալիքներ", "Новогодние традиции и ёлочные игрушки"],
      {
        en: ["Know New Year traditions of Armenia and Russia", "Use national motifs in festive decorations", "Make paper decorations for a New Year tree"],
        hy: ["Իմանալ Հայաստանի և Ռուսաստանի ամանորյա ավանդույթները", "Տոնական զարդերում օգտագործել ազգային մոտիվներ", "Թղթից պատրաստել ամանորյա տոնածառի զարդեր"],
        ru: ["Знать новогодние традиции Армении и России", "Использовать национальные мотивы в праздничных украшениях", "Сделать бумажные украшения для новогодней ёлки"],
      },
      {
        en: `## The same holiday, different faces

In both Armenia and Russia the **New Year** is the favourite family holiday. People decorate a fir tree, give presents and wait for midnight together. But each country has its own heroes and dishes.

| | Armenia | Russia |
|---|---|---|
| **winter hero** | **Dzmer Papi**, Grandfather Winter | **Ded Moroz** with his granddaughter **Snegurochka** |
| **festive food** | sweet **gata**, dried fruit, nuts, **anushabur** (a sweet wheat pudding) | salads, tangerines, pies |
| **Christmas** | 6 January | 7 January |
| **customs** | visiting relatives during the first days of the year, wishing a good year | the chimes of the Spasskaya Tower at midnight |

## National motifs for decorations

| Motif | Meaning |
|---|---|
| **pomegranate** (Armenia) | plenty and a happy family: many seeds in one fruit |
| **apricot, grapes** (Armenia) | the sweetness and sun of the land |
| **khachkar ornament** (Armenia) | interlacing lines, a sign of eternity |
| **matryoshka** (Russia) | a big friendly family |
| **snowflake, bullfinch** (Russia) | winter beauty; the red-breasted bullfinch is a favourite winter bird |

~~~art
pic snowflake pomegranate matryoshka
~~~

## Make tree decorations

1. **Flat decoration**: fold card in half, draw half of a pomegranate or a matryoshka along the fold, cut it out, decorate both sides with patterns.
2. **Snowflake**: fold a paper circle three times into a narrow triangle, cut small shapes on the edges, open it.
3. **Garland**: fold a long strip like an accordion, draw a figure touching both edges, cut — you get a chain of figures holding hands.
4. Add a thread and hang your decorations on the class tree.

~~~art
sketch mode=kaleido n=6 paper=blue
Design a tree decoration: a snowflake or a star with six rays. Draw one ray and get the whole.
~~~

~~~art
steps snowflake
~~~

~~~art
tasks
1. Who brings presents in Armenia and who in Russia?
2. What is gata?
3. When is Christmas celebrated in Armenia and in Russia?
4. What does a pomegranate mean?
5. Why is a matryoshka a good motif for a family holiday?
6. How do you cut a chain of figures holding hands?
7. Make three tree decorations with national motifs.
~~~

~~~art
hints
1. Dzmer Papi in Armenia; Ded Moroz with Snegurochka in Russia. 2. A sweet festive bread. 3. On 6 January in Armenia and 7 January in Russia. 4. Plenty and a happy family. 5. It means a big friendly family. 6. Fold a strip like an accordion and cut a figure that touches both edges. 7. Your work.
~~~`,
        hy: `## Նույն տոնը, տարբեր դեմքեր

Թե՛ Հայաստանում, թե՛ Ռուսաստանում **Ամանորը** սիրելի ընտանեկան տոնն է։ Մարդիկ զարդարում են եղևնին, նվերներ տալիս և միասին սպասում կեսգիշերին։ Բայց յուրաքանչյուր երկիր ունի իր հերոսներն ու ուտեստները։

| | Հայաստան | Ռուսաստան |
|---|---|---|
| **ձմեռային հերոս** | **Ձմեռ պապը** | **Դեդ Մորոզը**՝ թոռնուհու՝ **Ձյունանուշի** հետ |
| **տոնական ուտեստ** | քաղցր **գաթա**, չիր, ընկույզ, **անուշապուր** (ցորենով քաղցր ուտեստ) | աղցաններ, մանդարիններ, կարկանդակներ |
| **Սուրբ Ծնունդ** | հունվարի 6-ին | հունվարի 7-ին |
| **սովորույթներ** | տարվա առաջին օրերին հարազատներին այցելել, լավ տարի մաղթել | կեսգիշերին Սպասսկայա աշտարակի զանգերը |

## Ազգային մոտիվներ զարդերի համար

| Մոտիվ | Նշանակություն |
|---|---|
| **նուռ** (Հայաստան) | առատություն և երջանիկ ընտանիք՝ շատ հատիկներ մեկ պտղի մեջ |
| **ծիրան, խաղող** (Հայաստան) | երկրի քաղցրությունն ու արևը |
| **խաչքարի զարդանախշ** (Հայաստան) | միահյուսվող գծեր՝ հավերժության նշան |
| **մատրյոշկա** (Ռուսաստան) | մեծ, համերաշխ ընտանիք |
| **ձյան փաթիլ, խածկտիկ** (Ռուսաստան) | ձմռան գեղեցկությունը, կարմրակուրծք խածկտիկը սիրելի ձմեռային թռչուն է |

~~~art
pic snowflake pomegranate matryoshka
~~~

## Պատրաստի՛ր տոնածառի զարդեր

1. **Հարթ զարդ**՝ ստվարաթուղթը ծալի՛ր կիսով չափ, ծալքի երկայնքով նկարի՛ր նռան կամ մատրյոշկայի կեսը, կտրի՛ր և երկու կողմերը զարդարի՛ր նախշերով։
2. **Ձյան փաթիլ**՝ թղթե շրջանն երեք անգամ ծալի՛ր նեղ եռանկյան տեսքով, եզրերից կտրի՛ր փոքր ձևեր, բացի՛ր։
3. **Ծաղկեպսակ**՝ երկար շերտը ծալի՛ր ակորդեոնի պես, նկարի՛ր երկու եզրերին դիպչող պատկեր, կտրի՛ր՝ կստանաս ձեռք ձեռքի տված պատկերների շղթա։
4. Ավելացրու՛ թել և զարդերդ կախի՛ր դասարանի տոնածառից։

~~~art
sketch mode=kaleido n=6 paper=blue
Ձևավորի՛ր տոնածառի խաղալիք․ վեցճառագայթ ձյան փաթիլ կամ աստղ։ Նկարի՛ր մեկ ճառագայթ և ստացի՛ր ամբողջը։
~~~

~~~art
steps snowflake
~~~

~~~art
tasks
1. Ո՞վ է նվերներ բերում Հայաստանում, և ո՞վ՝ Ռուսաստանում։
2. Ի՞նչ է գաթան։
3. Ե՞րբ են նշում Սուրբ Ծնունդը Հայաստանում և Ռուսաստանում։
4. Ի՞նչ է նշանակում նուռը։
5. Ինչո՞ւ է մատրյոշկան լավ մոտիվ ընտանեկան տոնի համար։
6. Ինչպե՞ս կտրել ձեռք ձեռքի տված պատկերների շղթա։
7. Պատրաստի՛ր ազգային մոտիվներով երեք տոնածառի զարդ։
~~~

~~~art
hints
1. Հայաստանում՝ Ձմեռ պապը, Ռուսաստանում՝ Դեդ Մորոզը Ձյունանուշի հետ։ 2. Քաղցր տոնական հաց։ 3. Հայաստանում՝ հունվարի 6-ին, Ռուսաստանում՝ հունվարի 7-ին։ 4. Առատություն և երջանիկ ընտանիք։ 5. Այն նշանակում է մեծ, համերաշխ ընտանիք։ 6. Շերտը ծալել ակորդեոնի պես և կտրել երկու եզրերին դիպչող պատկեր։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Один праздник — разные лица

И в Армении, и в России **Новый год** — любимый семейный праздник. Люди наряжают ёлку, дарят подарки и вместе ждут полуночи. Но у каждой страны свои герои и угощения.

| | Армения | Россия |
|---|---|---|
| **зимний герой** | **Дзмер Папи** — «Зимний дедушка» | **Дед Мороз** с внучкой **Снегурочкой** |
| **праздничная еда** | сладкая **гата**, сухофрукты, орехи, **ануш-апур** (сладкое блюдо из пшеницы) | салаты, мандарины, пироги |
| **Рождество** | 6 января | 7 января |
| **обычаи** | в первые дни года навещать родных, желать доброго года | бой курантов Спасской башни в полночь |

## Национальные мотивы для украшений

| Мотив | Значение |
|---|---|
| **гранат** (Армения) | изобилие и счастливая семья: много зёрен в одном плоде |
| **абрикос, виноград** (Армения) | сладость и солнце родной земли |
| **орнамент хачкара** (Армения) | переплетающиеся линии — знак вечности |
| **матрёшка** (Россия) | большая дружная семья |
| **снежинка, снегирь** (Россия) | зимняя красота; красногрудый снегирь — любимая зимняя птица |

~~~art
pic snowflake pomegranate matryoshka
~~~

## Сделай ёлочные украшения

1. **Плоская игрушка**: сложи картон пополам, нарисуй по сгибу половину граната или матрёшки, вырежи, укрась узорами с двух сторон.
2. **Снежинка**: сложи бумажный круг трижды в узкий треугольник, вырежи по краям мелкие фигурки, разверни.
3. **Гирлянда**: сложи длинную полоску гармошкой, нарисуй фигурку, касающуюся обоих краёв, вырежи — получится цепочка фигурок, держащихся за руки.
4. Привяжи нитку и повесь украшения на ёлку класса.

~~~art
sketch mode=kaleido n=6 paper=blue
Придумай ёлочную игрушку: снежинку или звезду с шестью лучами. Нарисуй один луч и получи целое.
~~~

~~~art
steps snowflake
~~~

~~~art
tasks
1. Кто приносит подарки в Армении, а кто в России?
2. Что такое гата?
3. Когда празднуют Рождество в Армении и в России?
4. Что означает гранат?
5. Почему матрёшка — хороший мотив для семейного праздника?
6. Как вырезать цепочку фигурок, держащихся за руки?
7. Сделай три ёлочных украшения с национальными мотивами.
~~~

~~~art
hints
1. В Армении — Дзмер Папи, в России — Дед Мороз со Снегурочкой. 2. Сладкий праздничный хлеб. 3. В Армении 6 января, в России 7 января. 4. Изобилие и счастливую семью. 5. Она означает большую дружную семью. 6. Сложить полоску гармошкой и вырезать фигурку, касающуюся обоих краёв. 7. Твоя работа.
~~~`,
      },
      [
        q(t("In Armenia presents are brought by…", "Հայաստանում նվերներ է բերում…", "В Армении подарки приносит…"), [t("Dzmer Papi", "Ձմեռ պապը", "Дзмер Папи"), t("Hokusai", "Հոկուսայը", "Хокусай"), t("a knight", "ասպետը", "рыцарь")], 0),
        q(t("Snegurochka is Ded Moroz's…", "Ձյունանուշը Դեդ Մորոզի…", "Снегурочка — … Деда Мороза."), [t("sister", "քույրն է", "сестра"), t("granddaughter", "թոռնուհին է", "внучка"), t("neighbour", "հարևանն է", "соседка")], 1),
        q(t("A pomegranate means…", "Նուռը նշանակում է…", "Гранат означает…"), [t("cold winter", "ցուրտ ձմեռ", "холодную зиму"), t("a long road", "երկար ճանապարհ", "дальнюю дорогу"), t("plenty and a happy family", "առատություն և երջանիկ ընտանիք", "изобилие и счастливую семью")], 2),
        q(t("Christmas in Armenia is celebrated on…", "Հայաստանում Սուրբ Ծնունդը նշում են…", "В Армении Рождество празднуют…"), [t("6 January", "հունվարի 6-ին", "6 января"), t("7 January", "հունվարի 7-ին", "7 января"), t("1 September", "սեպտեմբերի 1-ին", "1 сентября")], 0),
        q(t("A chain of figures is cut from a strip folded…", "Պատկերների շղթան կտրում են … ծալված շերտից։", "Цепочку фигурок вырезают из полоски, сложенной…"), [t("into a ball", "գնդի պես", "в комок"), t("like an accordion", "ակորդեոնի պես", "гармошкой"), t("in a roll", "գլանի պես", "в рулон")], 1),
        q(t("A favourite Russian winter bird with a red breast is the…", "Կարմիր կրծքով սիրելի ռուսական ձմեռային թռչունը…", "Любимая русская зимняя птица с красной грудкой —"), [t("dove", "աղավնին է", "голубь"), t("crane", "կռունկն է", "журавль"), t("bullfinch", "խածկտիկն է", "снегирь")], 2),
      ],
    ),
    lesson(
      "peoples-album",
      ["Class album «Every nation is an artist»", "Դասարանական ալբոմ «Յուրաքանչյուր ժողովուրդ նկարիչ է»", "Альбом класса «Каждый народ — художник»"],
      {
        en: ["Plan a book: cover, contents, spreads", "Combine a picture and a short text on one page", "Make a page about the art of one nation for a class album"],
        hy: ["Պլանավորել գիրք՝ կազմ, բովանդակություն, բացվածքներ", "Մեկ էջի վրա միավորել նկարը և կարճ տեքստը", "Դասարանական ալբոմի համար պատրաստել էջ մեկ ժողովրդի արվեստի մասին"],
        ru: ["Планировать книгу: обложка, оглавление, развороты", "Сочетать на странице рисунок и короткий текст", "Сделать страницу об искусстве одного народа для альбома класса"],
      },
      {
        en: `## A book made by the whole class

This year we travelled through the art of many nations. Now the class will make an **album**: every pupil makes one page, and together they become a book.

## Parts of the album

| Part | What it is |
|---|---|
| **cover** | the title «Every nation is an artist», a picture that unites everything (a globe of ornaments, children of different nations) |
| **contents** | the list of pages with their numbers |
| **pages** | one nation or one theme on each page |
| **last page** | the names of all authors |

## Themes to choose from

Armenia: the glkhatun, the taraz, Erebuni, Geghard, the miniature. Russia: the izba, the sarafan, the kremlin, St Basil's, icons. Japan, the steppe, Central Asia, Greece, Gothic Europe, Georgia, Iran.

## How to lay out a page

1. **Title** at the top in large letters: «Japan: the land of the rising sun».
2. **Main picture**: about two thirds of the page.
3. **Short text**: 3–4 sentences in your own words: what is special about this art.
4. **Ornament** of this nation as a border or a strip at the bottom.
5. Leave **margins**: the picture and text must not touch the edge.

~~~art
pic book-spread
~~~

~~~art
compose
~~~

## Joining pages

- All pages are the **same size and orientation**.
- Use the same type of title on every page, so the album looks like one book.
- Put the pages in order, glue them onto card or put them in a folder, add the cover.

~~~art
tasks
1. What is an album?
2. What is written on the last page?
3. How much of the page should the main picture take?
4. How many sentences should the text have?
5. Why must all pages have the same size and the same kind of title?
6. Why do we leave margins?
7. Make your page for the class album.
~~~

~~~art
hints
1. A book of pictures, here made by the whole class. 2. The names of all authors. 3. About two thirds. 4. 3–4 sentences. 5. So that the album looks like one book. 6. So that the picture and text do not touch the edge. 7. Your work.
~~~`,
        hy: `## Ամբողջ դասարանի ստեղծած գիրք

Այս տարի մենք ճանապարհորդեցինք բազմաթիվ ժողովուրդների արվեստով։ Հիմա դասարանը **ալբոմ** կպատրաստի․ յուրաքանչյուր աշակերտ պատրաստում է մեկ էջ, և միասին դրանք դառնում են գիրք։

## Ալբոմի մասերը

| Մաս | Ինչ է |
|---|---|
| **կազմ** | «Յուրաքանչյուր ժողովուրդ նկարիչ է» վերնագիրը, ամեն ինչ միավորող նկար (զարդանախշերից երկրագունդ, տարբեր ժողովուրդների երեխաներ) |
| **բովանդակություն** | էջերի ցանկը՝ իրենց համարներով |
| **էջեր** | յուրաքանչյուր էջում մեկ ժողովուրդ կամ մեկ թեմա |
| **վերջին էջ** | բոլոր հեղինակների անունները |

## Թեմաներ ընտրելու համար

Հայաստան՝ գլխատուն, տարազ, Էրեբունի, Գեղարդ, մանրանկարչություն։ Ռուսաստան՝ իզբա, սարաֆան, կրեմլ, Վասիլի Երանելու տաճար, սրբապատկերներ։ Ճապոնիա, տափաստան, Միջին Ասիա, Հունաստան, գոթական Եվրոպա, Վրաստան, Իրան։

## Ինչպես դասավորել էջը

1. **Վերնագիր**՝ վերևում մեծ տառերով՝ «Ճապոնիա․ ծագող արևի երկիրը»։
2. **Գլխավոր նկար**՝ էջի մոտ երկու երրորդը։
3. **Կարճ տեքստ**՝ 3–4 նախադասություն քո բառերով՝ ինչն է յուրահատուկ այդ արվեստում։
4. Այդ ժողովրդի **զարդանախշը**՝ որպես եզրագիծ կամ շերտ ներքևում։
5. Թո՛ղ **լուսանցքներ**՝ նկարը և տեքստը չպետք է դիպչեն եզրին։

~~~art
pic book-spread
~~~

~~~art
compose
~~~

## Էջերի միավորումը

- Բոլոր էջերն ունեն **նույն չափը և դիրքը**։
- Յուրաքանչյուր էջում օգտագործի՛ր նույն տեսակի վերնագիր, որպեսզի ալբոմը մեկ գրքի տեսք ունենա։
- Էջերը դասավորե՛ք հերթականությամբ, սոսնձե՛ք ստվարաթղթին կամ դրե՛ք թղթապանակի մեջ, ավելացրե՛ք կազմը։

~~~art
tasks
1. Ի՞նչ է ալբոմը։
2. Ի՞նչ է գրված վերջին էջում։
3. Էջի որքա՞ն մասը պետք է զբաղեցնի գլխավոր նկարը։
4. Քանի՞ նախադասություն պետք է ունենա տեքստը։
5. Ինչո՞ւ պետք է բոլոր էջերն ունենան նույն չափը և նույն տեսակի վերնագիրը։
6. Ինչո՞ւ ենք թողնում լուսանցքներ։
7. Պատրաստի՛ր քո էջը դասարանական ալբոմի համար։
~~~

~~~art
hints
1. Նկարների գիրք, այստեղ՝ ամբողջ դասարանի ստեղծած։ 2. Բոլոր հեղինակների անունները։ 3. Մոտ երկու երրորդը։ 4. 3–4 նախադասություն։ 5. Որպեսզի ալբոմը մեկ գրքի տեսք ունենա։ 6. Որպեսզի նկարը և տեքստը չդիպչեն եզրին։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Книга, созданная всем классом

В этом году мы путешествовали по искусству многих народов. Теперь класс сделает **альбом**: каждый ученик делает одну страницу, а вместе они становятся книгой.

## Части альбома

| Часть | Что это |
|---|---|
| **обложка** | название «Каждый народ — художник», объединяющий рисунок (земной шар из орнаментов, дети разных народов) |
| **оглавление** | список страниц с номерами |
| **страницы** | на каждой — один народ или одна тема |
| **последняя страница** | имена всех авторов |

## Темы на выбор

Армения: глхатун, тараз, Эребуни, Гегард, миниатюра. Россия: изба, сарафан, кремль, собор Василия Блаженного, иконы. Япония, степь, Средняя Азия, Греция, готическая Европа, Грузия, Иран.

## Как сверстать страницу

1. **Заголовок** наверху крупными буквами: «Япония — страна восходящего солнца».
2. **Главный рисунок**: примерно две трети страницы.
3. **Короткий текст**: 3–4 предложения своими словами — чем особенно это искусство.
4. **Орнамент** этого народа — рамкой или полосой внизу.
5. Оставь **поля**: рисунок и текст не должны касаться края.

~~~art
pic book-spread
~~~

~~~art
compose
~~~

## Как объединить страницы

- Все страницы **одного размера и одной ориентации**.
- На каждой странице используй один и тот же вид заголовка, чтобы альбом выглядел единой книгой.
- Разложите страницы по порядку, наклейте на картон или вложите в папку, добавьте обложку.

~~~art
tasks
1. Что такое альбом?
2. Что пишут на последней странице?
3. Какую часть страницы должен занимать главный рисунок?
4. Сколько предложений должно быть в тексте?
5. Почему все страницы должны быть одного размера и с одинаковыми заголовками?
6. Зачем оставлять поля?
7. Сделай свою страницу для альбома класса.
~~~

~~~art
hints
1. Книга рисунков, здесь — созданная всем классом. 2. Имена всех авторов. 3. Примерно две трети. 4. 3–4 предложения. 5. Чтобы альбом выглядел единой книгой. 6. Чтобы рисунок и текст не касались края. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Each pupil makes…", "Յուրաքանչյուր աշակերտ պատրաստում է…", "Каждый ученик делает…"), [t("one page", "մեկ էջ", "одну страницу"), t("the whole album alone", "ամբողջ ալբոմը միայնակ", "весь альбом в одиночку"), t("only the cover", "միայն կազմը", "только обложку")], 0),
        q(t("The list of pages with numbers is the…", "Էջերի ցանկը համարներով…", "Список страниц с номерами — это…"), [t("cover", "կազմն է", "обложка"), t("contents", "բովանդակությունն է", "оглавление"), t("border", "եզրագիծն է", "рамка")], 1),
        q(t("The main picture takes about…", "Գլխավոր նկարը զբաղեցնում է մոտ…", "Главный рисунок занимает примерно…"), [t("a tenth of the page", "էջի մեկ տասներորդը", "десятую часть страницы"), t("nothing", "ոչինչ", "ничего"), t("two thirds of the page", "էջի երկու երրորդը", "две трети страницы")], 2),
        q(t("The text on a page has…", "Էջի տեքստն ունի…", "Текст на странице состоит из…"), [t("3–4 sentences", "3–4 նախադասություն", "3–4 предложений"), t("three pages", "երեք էջ", "трёх страниц"), t("one letter", "մեկ տառ", "одной буквы")], 0),
        q(t("Margins are left so that…", "Լուսանցքներ թողնում են, որպեսզի…", "Поля оставляют, чтобы…"), [t("the page looks empty", "էջը դատարկ երևա", "страница казалась пустой"), t("the picture and text do not touch the edge", "նկարը և տեքստը չդիպչեն եզրին", "рисунок и текст не касались края"), t("there is no title", "վերնագիր չլինի", "не было заголовка")], 1),
        q(t("The same kind of title on every page makes the album…", "Յուրաքանչյուր էջում նույն տեսակի վերնագիրն ալբոմը դարձնում է…", "Одинаковые заголовки на всех страницах делают альбом…"), [t("messy", "խառնաշփոթ", "беспорядочным"), t("shorter", "ավելի կարճ", "короче"), t("one whole book", "մեկ ամբողջական գիրք", "единой книгой")], 2),
      ],
    ),
    lesson(
      "final-exhibition",
      ["Final exhibition: a journey through the art of nations", "Ամփոփիչ ցուցահանդես․ ճանապարհորդություն ժողովուրդների արվեստով", "Итоговая выставка: путешествие по искусству народов"],
      {
        en: ["Organise an exhibition as a journey with a route", "Write labels and short guide texts", "Lead a short tour for guests"],
        hy: ["Կազմակերպել ցուցահանդես՝ որպես երթուղով ճանապարհորդություն", "Գրել պիտակներ և կարճ էքսկուրսիոն տեքստեր", "Հյուրերի համար վարել կարճ էքսկուրսիա"],
        ru: ["Организовать выставку как путешествие с маршрутом", "Писать этикетки и короткие тексты экскурсовода", "Провести небольшую экскурсию для гостей"],
      },
      {
        en: `## An exhibition as a journey

In grade 3 we made a museum in the classroom. Now our exhibition will be a **journey**: the guests travel from country to country along a route.

## Plan the route

| Stop | What is shown |
|---|---|
| **1. Native land** | landscapes, village houses, costumes, holidays of Armenia and Russia |
| **2. Ancient cities** | fortresses, Erebuni, monasteries, Moscow, miniatures and icons |
| **3. Around the world** | Japan, the steppe, Central Asia, Greece, Gothic Europe, our neighbours |
| **4. What unites us** | motherhood, old age, heroes, dreams, posters for peace |

Draw a **map of the route** for the entrance: a path with arrows and small pictures of each stop.

~~~art
pic room-plan
~~~

## Labels and texts

- Each work has a **label**: author, title, year, material.
- Each stop has a short **guide text** of 3–5 sentences: what the guests will see and what is special about it.

## The tour

| Role | What to do |
|---|---|
| **guides** | each pupil prepares 1–2 minutes about one stop |
| **hosts** | meet the guests, give them the route map |
| **designers** | hang the works at eye level, keep equal spaces, put labels on the right |

## Speak like a guide

1. Greet the guests: «Welcome to the stop "Ancient cities"».
2. Point to one or two works and explain them.
3. Ask the guests a question: «Which dome do you like more, the cone or the onion?»
4. Invite them to the next stop.

~~~art
shots
~~~

~~~art
tasks
1. How is this exhibition different from a museum in the classroom?
2. Name the four stops of the route.
3. What is put at the entrance?
4. How long is a guide text?
5. What do hosts and designers do?
6. Why should a guide ask the guests a question?
7. Prepare a 1–2 minute tour of one stop.
~~~

~~~art
hints
1. It is built as a journey along a route. 2. Native land, Ancient cities, Around the world, What unites us. 3. A map of the route. 4. 3–5 sentences. 5. Hosts meet guests and give them the map; designers hang the works and labels. 6. To make them look closer and take part. 7. Your work.
~~~`,
        hy: `## Ցուցահանդեսն որպես ճանապարհորդություն

3-րդ դասարանում մենք թանգարան ստեղծեցինք դասարանում։ Հիմա մեր ցուցահանդեսը **ճանապարհորդություն** կլինի․ հյուրերն երթուղով երկրից երկիր են գնում։

## Պլանավորի՛ր երթուղին

| Կանգառ | Ինչ է ցուցադրվում |
|---|---|
| **1. Հայրենի երկիր** | Հայաստանի և Ռուսաստանի բնանկարներ, գյուղական տներ, տարազներ, տոներ |
| **2. Հին քաղաքներ** | ամրոցներ, Էրեբունի, վանքեր, Մոսկվա, մանրանկարներ և սրբապատկերներ |
| **3. Աշխարհով մեկ** | Ճապոնիա, տափաստան, Միջին Ասիա, Հունաստան, գոթական Եվրոպա, մեր հարևանները |
| **4. Ինչն է մեզ միավորում** | մայրություն, ծերություն, հերոսներ, երազանքներ, պաստառներ հանուն խաղաղության |

Մուտքի համար նկարի՛ր **երթուղու քարտեզ**՝ սլաքներով արահետ և յուրաքանչյուր կանգառի փոքր նկարներ։

~~~art
pic room-plan
~~~

## Պիտակներ և տեքստեր

- Յուրաքանչյուր աշխատանք ունի **պիտակ**՝ հեղինակ, վերնագիր, տարի, նյութ։
- Յուրաքանչյուր կանգառ ունի 3–5 նախադասությամբ կարճ **էքսկուրսիոն տեքստ**՝ ինչ կտեսնեն հյուրերը, և ինչն է այնտեղ յուրահատուկ։

## Էքսկուրսիա

| Դեր | Ինչ անել |
|---|---|
| **էքսկուրսավարներ** | յուրաքանչյուր աշակերտ 1–2 րոպեանոց պատմություն է պատրաստում մեկ կանգառի մասին |
| **տանտերեր** | դիմավորում են հյուրերին, տալիս երթուղու քարտեզը |
| **ձևավորողներ** | աշխատանքները կախում են աչքերի բարձրությամբ, պահում հավասար տարածություններ, պիտակները դնում աջ կողմում |

## Խոսի՛ր էքսկուրսավարի պես

1. Ողջունի՛ր հյուրերին՝ «Բարի գալուստ "Հին քաղաքներ" կանգառ»։
2. Ցույց տո՛ւր մեկ կամ երկու աշխատանք և բացատրի՛ր։
3. Հյուրերին հարց տո՛ւր՝ «Ո՞ր գմբեթն է ձեզ ավելի շատ դուր գալիս՝ կոնաձև՞, թե՞ սոխաձև»։
4. Հրավիրի՛ր նրանց հաջորդ կանգառ։

~~~art
shots
~~~

~~~art
tasks
1. Ինչո՞վ է այս ցուցահանդեսը տարբերվում դասարանի թանգարանից։
2. Անվանի՛ր երթուղու չորս կանգառները։
3. Ի՞նչ են դնում մուտքի մոտ։
4. Որքա՞ն երկար է էքսկուրսիոն տեքստը։
5. Ի՞նչ են անում տանտերերն ու ձևավորողները։
6. Ինչո՞ւ պետք է էքսկուրսավարը հյուրերին հարց տա։
7. Պատրաստի՛ր 1–2 րոպեանոց էքսկուրսիա մեկ կանգառի մասին։
~~~

~~~art
hints
1. Այն կառուցված է որպես երթուղով ճանապարհորդություն։ 2. Հայրենի երկիր, Հին քաղաքներ, Աշխարհով մեկ, Ինչն է մեզ միավորում։ 3. Երթուղու քարտեզ։ 4. 3–5 նախադասություն։ 5. Տանտերերը դիմավորում են հյուրերին և տալիս քարտեզը, ձևավորողները կախում են աշխատանքներն ու պիտակները։ 6. Որպեսզի նրանք ավելի ուշադիր նայեն և մասնակցեն։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Выставка-путешествие

В 3 классе мы сделали музей в классе. Теперь наша выставка станет **путешествием**: гости идут по маршруту из страны в страну.

## Спланируй маршрут

| Остановка | Что показано |
|---|---|
| **1. Родная земля** | пейзажи, деревенские дома, костюмы, праздники Армении и России |
| **2. Древние города** | крепости, Эребуни, монастыри, Москва, миниатюры и иконы |
| **3. Вокруг света** | Япония, степь, Средняя Азия, Греция, готическая Европа, наши соседи |
| **4. Что нас объединяет** | материнство, старость, герои, мечты, плакаты за мир |

Для входа нарисуй **карту маршрута**: дорожку со стрелками и маленькими рисунками каждой остановки.

~~~art
pic room-plan
~~~

## Этикетки и тексты

- У каждой работы есть **этикетка**: автор, название, год, материал.
- У каждой остановки — короткий **текст экскурсовода** из 3–5 предложений: что увидят гости и чем это особенно.

## Экскурсия

| Роль | Что делать |
|---|---|
| **экскурсоводы** | каждый ученик готовит рассказ на 1–2 минуты об одной остановке |
| **хозяева** | встречают гостей, дают им карту маршрута |
| **оформители** | вешают работы на уровне глаз, с равными промежутками, этикетки — справа |

## Говори как экскурсовод

1. Поприветствуй гостей: «Добро пожаловать на остановку "Древние города"».
2. Покажи одну-две работы и объясни их.
3. Задай гостям вопрос: «Какой купол вам нравится больше — конус или луковица?»
4. Пригласи их на следующую остановку.

~~~art
shots
~~~

~~~art
tasks
1. Чем эта выставка отличается от музея в классе?
2. Назови четыре остановки маршрута.
3. Что ставят у входа?
4. Какой длины текст экскурсовода?
5. Что делают хозяева и оформители?
6. Зачем экскурсоводу задавать гостям вопрос?
7. Подготовь экскурсию на 1–2 минуты по одной остановке.
~~~

~~~art
hints
1. Она построена как путешествие по маршруту. 2. Родная земля, Древние города, Вокруг света, Что нас объединяет. 3. Карту маршрута. 4. 3–5 предложений. 5. Хозяева встречают гостей и дают карту; оформители вешают работы и этикетки. 6. Чтобы гости смотрели внимательнее и участвовали. 7. Твоя работа.
~~~`,
      },
      [
        q(t("This exhibition is built as a…", "Այս ցուցահանդեսը կառուցված է որպես…", "Эта выставка построена как…"), [t("journey along a route", "երթուղով ճանապարհորդություն", "путешествие по маршруту"), t("football match", "ֆուտբոլային խաղ", "футбольный матч"), t("shop", "խանութ", "магазин")], 0),
        q(t("At the entrance guests get…", "Մուտքի մոտ հյուրերը ստանում են…", "У входа гости получают…"), [t("a ticket for a train", "գնացքի տոմս", "билет на поезд"), t("a map of the route", "երթուղու քարտեզ", "карту маршрута"), t("a paintbrush", "վրձին", "кисть")], 1),
        q(t("A guide text has…", "Էքսկուրսիոն տեքստն ունի…", "Текст экскурсовода состоит из…"), [t("one word", "մեկ բառ", "одного слова"), t("ten pages", "տասն էջ", "десяти страниц"), t("3–5 sentences", "3–5 նախադասություն", "3–5 предложений")], 2),
        q(t("Works are hung…", "Աշխատանքները կախում են…", "Работы вешают…"), [t("at eye level", "աչքերի բարձրությամբ", "на уровне глаз"), t("on the ceiling", "առաստաղից", "на потолке"), t("behind a curtain", "վարագույրի հետևում", "за занавеской")], 0),
        q(t("Who meets the guests?", "Ո՞վ է դիմավորում հյուրերին։", "Кто встречает гостей?"), [t("Designers", "Ձևավորողները", "Оформители"), t("Hosts", "Տանտերերը", "Хозяева"), t("Nobody", "Ոչ ոք", "Никто")], 1),
        q(t("A guide asks guests a question so that they…", "Էքսկուրսավարը հարց է տալիս, որպեսզի հյուրերը…", "Экскурсовод задаёт вопрос, чтобы гости…"), [t("leave quickly", "արագ հեռանան", "быстрее ушли"), t("stop listening", "դադարեն լսել", "перестали слушать"), t("look closer and take part", "ավելի ուշադիր նայեն և մասնակցեն", "смотрели внимательнее и участвовали")], 2),
      ],
    ),
    lesson(
      "friendship-mural",
      ["Group panel «Friendship of nations»", "Խմբային պաննո «Ժողովուրդների բարեկամություն»", "Коллективное панно «Дружба народов»"],
      {
        en: ["Know what a panel and a mural are", "Plan a large decorative composition with a group", "Make a panel from separate parts joined by one ornament"],
        hy: ["Իմանալ, թե ինչ են պաննոն և որմնանկարը", "Խմբով պլանավորել մեծ դեկորատիվ կոմպոզիցիա", "Պատրաստել պաննո առանձին մասերից՝ միավորված մեկ զարդանախշով"],
        ru: ["Знать, что такое панно и настенная роспись", "Планировать с группой большую декоративную композицию", "Сделать панно из отдельных частей, объединённых одним орнаментом"],
      },
      {
        en: `## Big pictures for a wall

A **panel** is a large decorative picture made for one wall: painted, sewn, made of mosaic or ceramics. Panels decorate schools, stations, metro stations and squares, where many people see them every day. In Yerevan and Moscow you can find mosaic panels on the walls of buildings and in the metro.

A decorative panel is different from an ordinary painting:

| Ordinary painting | Decorative panel |
|---|---|
| shows depth and light | is often **flat**, like a carpet |
| many small details | big simple shapes, clear outlines |
| looked at closely | must be read **from far away** |
| one author | often made by a **team** |

## Plan «Friendship of nations»

1. **Idea**: a big tree or a sun in the centre; around it figures of children of different nations, each in a costume, each with a gift of his or her people.
2. **Grid**: divide the large sheet into equal parts; each pupil gets one part.
3. **Common rules**: the same horizon line, the same size of figures, a limited palette of 5–6 colours for everyone.
4. **Unifying border**: one ornament around the whole panel ties all parts together.

~~~art
palette rainbow
~~~

## Work step by step

1. Draw the whole composition small on one sheet together.
2. Enlarge it: each pupil copies his or her square onto a big part.
3. Paint the big areas first, then the details.
4. Join the parts and paint the border over the joins.
5. Step back and check the panel from the other end of the room.

~~~art
sketch mode=frames cells=6
A mural in parts: each frame is one pupil's piece. Make the horizon line meet from frame to frame.
~~~

~~~art
tasks
1. What is a panel?
2. Where can you see panels?
3. How is a decorative panel different from an ordinary painting?
4. Why do we use the same horizon and a limited palette?
5. What does the common border do?
6. Why should we look at the panel from far away?
7. Make your part of the panel «Friendship of nations».
~~~

~~~art
hints
1. A large decorative picture made for a wall. 2. In schools, stations, the metro, on squares. 3. It is often flat, with big simple shapes, read from far away, made by a team. 4. So that all parts look like one work. 5. Ties all parts together. 6. Because people will see it from far away. 7. Your work.
~~~`,
        hy: `## Մեծ նկարներ պատի համար

**Պաննոն** մեկ պատի համար ստեղծված մեծ դեկորատիվ նկար է՝ ներկված, կարված, խճանկարից կամ կերամիկայից։ Պաննոները զարդարում են դպրոցներ, կայարաններ, մետրոյի կայարաններ և հրապարակներ, որտեղ շատ մարդիկ ամեն օր տեսնում են դրանք։ Երևանում և Մոսկվայում շենքերի պատերին և մետրոյում կարող ես գտնել խճանկարե պաննոներ։

Դեկորատիվ պաննոն տարբերվում է սովորական նկարից․

| Սովորական նկար | Դեկորատիվ պաննո |
|---|---|
| ցույց է տալիս խորություն և լույս | հաճախ **հարթ** է, գորգի պես |
| շատ մանր մանրամասներ | մեծ պարզ ձևեր, հստակ եզրագծեր |
| դիտում են մոտիկից | պետք է ընկալվի **հեռվից** |
| մեկ հեղինակ | հաճախ ստեղծվում է **թիմով** |

## Պլանավորի՛ր «Ժողովուրդների բարեկամություն»

1. **Գաղափար**՝ կենտրոնում մեծ ծառ կամ արև, շուրջը տարբեր ժողովուրդների երեխաներ, յուրաքանչյուրն իր տարազով, յուրաքանչյուրն իր ժողովրդի նվերով։
2. **Ցանց**՝ մեծ թերթը բաժանե՛ք հավասար մասերի, յուրաքանչյուր աշակերտ ստանում է մեկ մաս։
3. **Ընդհանուր կանոններ**՝ նույն հորիզոնի գիծը, պատկերների նույն չափը, բոլորի համար 5–6 գույնից սահմանափակ գունապնակ։
4. **Միավորող եզրագիծ**՝ ամբողջ պաննոյի շուրջը մեկ զարդանախշ, որը կապում է բոլոր մասերը։

~~~art
palette rainbow
~~~

## Աշխատի՛ր քայլ առ քայլ

1. Միասին մեկ թերթի վրա փոքր նկարե՛ք ամբողջ կոմպոզիցիան։
2. Մեծացրե՛ք՝ յուրաքանչյուր աշակերտ իր քառակուսին պատճենում է մեծ մասի վրա։
3. Նախ ներկե՛ք մեծ մասերը, հետո մանրամասները։
4. Միացրե՛ք մասերը և եզրագիծը ներկե՛ք միացումների վրայով։
5. Հեռացե՛ք և ստուգե՛ք պաննոն սենյակի մյուս ծայրից։

~~~art
sketch mode=frames cells=6
Որմնանկար մասերով․ յուրաքանչյուր շրջանակ մեկ աշակերտի մասն է։ Հորիզոնի գիծը թող միանա շրջանակից շրջանակ։
~~~

~~~art
tasks
1. Ի՞նչ է պաննոն։
2. Որտե՞ղ կարելի է տեսնել պաննոներ։
3. Ինչո՞վ է դեկորատիվ պաննոն տարբերվում սովորական նկարից։
4. Ինչո՞ւ ենք օգտագործում նույն հորիզոնը և սահմանափակ գունապնակ։
5. Ի՞նչ է անում ընդհանուր եզրագիծը։
6. Ինչո՞ւ պետք է պաննոյին նայել հեռվից։
7. Պատրաստի՛ր քո մասը «Ժողովուրդների բարեկամություն» պաննոյի համար։
~~~

~~~art
hints
1. Պատի համար ստեղծված մեծ դեկորատիվ նկար։ 2. Դպրոցներում, կայարաններում, մետրոյում, հրապարակներում։ 3. Այն հաճախ հարթ է, մեծ պարզ ձևերով, ընկալվում է հեռվից, ստեղծվում է թիմով։ 4. Որպեսզի բոլոր մասերը մեկ աշխատանքի տեսք ունենան։ 5. Կապում է բոլոր մասերը։ 6. Որովհետև մարդիկ այն կտեսնեն հեռվից։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Большие картины для стены

**Панно** — большое декоративное изображение, созданное для одной стены: написанное красками, вышитое, из мозаики или керамики. Панно украшают школы, вокзалы, станции метро и площади, где их каждый день видят многие люди. В Ереване и Москве мозаичные панно можно найти на стенах зданий и в метро.

Декоративное панно отличается от обычной картины:

| Обычная картина | Декоративное панно |
|---|---|
| передаёт глубину и свет | часто **плоское**, как ковёр |
| много мелких деталей | крупные простые формы, чёткие контуры |
| рассматривают вблизи | должно читаться **издалека** |
| один автор | часто создаётся **командой** |

## Спланируй «Дружбу народов»

1. **Замысел**: в центре большое дерево или солнце; вокруг — дети разных народов, каждый в своём костюме, каждый с подарком своего народа.
2. **Сетка**: раздели большой лист на равные части; каждый ученик получает одну часть.
3. **Общие правила**: одна линия горизонта, одинаковый размер фигур, ограниченная палитра из 5–6 цветов для всех.
4. **Объединяющая рамка**: один орнамент вокруг всего панно связывает все части.

~~~art
palette rainbow
~~~

## Работай по шагам

1. Вместе нарисуйте всю композицию в малом размере на одном листе.
2. Увеличьте её: каждый переносит свой квадрат на большую часть.
3. Сначала напишите большие пятна, потом детали.
4. Соедините части и напишите рамку поверх стыков.
5. Отойдите и проверьте панно с другого конца класса.

~~~art
sketch mode=frames cells=6
Роспись по частям: каждая рамка — часть одного ученика. Пусть линия горизонта совпадает от рамки к рамке.
~~~

~~~art
tasks
1. Что такое панно?
2. Где можно увидеть панно?
3. Чем декоративное панно отличается от обычной картины?
4. Зачем нужны общий горизонт и ограниченная палитра?
5. Что делает общая рамка?
6. Почему панно нужно проверять издалека?
7. Сделай свою часть панно «Дружба народов».
~~~

~~~art
hints
1. Большое декоративное изображение для стены. 2. В школах, на вокзалах, в метро, на площадях. 3. Оно часто плоское, с крупными простыми формами, читается издалека, создаётся командой. 4. Чтобы все части выглядели одной работой. 5. Связывает все части вместе. 6. Потому что люди будут видеть его издалека. 7. Твоя работа.
~~~`,
      },
      [
        q(t("A panel is made for…", "Պաննոն ստեղծվում է…", "Панно создают для…"), [t("a wall", "պատի համար", "стены"), t("a pocket", "գրպանի համար", "кармана"), t("a book page", "գրքի էջի համար", "страницы книги")], 0),
        q(t("A decorative panel is often…", "Դեկորատիվ պաննոն հաճախ…", "Декоративное панно часто…"), [t("full of tiny details", "լի է մանր մանրամասներով", "полно мелких деталей"), t("flat, like a carpet", "հարթ է, գորգի պես", "плоское, как ковёр"), t("invisible from far away", "հեռվից անտեսանելի է", "не видно издалека")], 1),
        q(t("A common border on a panel…", "Պաննոյի ընդհանուր եզրագիծը…", "Общая рамка панно…"), [t("hides the figures", "թաքցնում է պատկերները", "прячет фигуры"), t("is not needed", "պետք չէ", "не нужна"), t("ties all parts together", "կապում է բոլոր մասերը", "связывает все части")], 2),
        q(t("For a group panel everyone uses…", "Խմբային պաննոյի համար բոլորն օգտագործում են…", "Для коллективного панно все используют…"), [t("the same horizon and palette", "նույն հորիզոնը և գունապնակը", "один горизонт и палитру"), t("any colours they like", "իրենց ուզած ցանկացած գույն", "любые цвета"), t("different sizes of figures", "պատկերների տարբեր չափեր", "разный размер фигур")], 0),
        q(t("We paint first…", "Նախ ներկում ենք…", "Сначала пишут…"), [t("tiny details", "մանր մանրամասները", "мелкие детали"), t("big areas", "մեծ մասերը", "большие пятна"), t("the signature", "ստորագրությունը", "подпись")], 1),
        q(t("A panel is checked…", "Պաննոն ստուգում են…", "Панно проверяют…"), [t("with a magnifying glass", "խոշորացույցով", "через лупу"), t("with eyes closed", "փակ աչքերով", "с закрытыми глазами"), t("from far away", "հեռվից", "издалека")], 2),
      ],
    ),
    lesson(
      "year-4-review",
      ["Year 4 review", "4-րդ դասարանի ամփոփում", "Повторение за 4 класс"],
      {
        en: ["Remember the main ideas of the year: native art, ancient cities, art of nations, eternal themes", "Match works, artists and countries", "Make a final work «Every nation is an artist»"],
        hy: ["Հիշել տարվա հիմնական գաղափարները՝ հայրենի արվեստ, հին քաղաքներ, ժողովուրդների արվեստ, հավերժական թեմաներ", "Համապատասխանեցնել ստեղծագործությունները, նկարիչներին և երկրները", "Կատարել «Յուրաքանչյուր ժողովուրդ նկարիչ է» ամփոփիչ աշխատանքը"],
        ru: ["Вспомнить главные идеи года: родное искусство, древние города, искусство народов, вечные темы", "Соотносить произведения, художников и страны", "Выполнить итоговую работу «Каждый народ — художник»"],
      },
      {
        en: `## What we learned this year

| Unit | Main ideas |
|---|---|
| **Origins of native art** | native landscape, the izba and the glkhatun, a village panorama, the taraz and the sarafan, the beauty of a person at work, Trndez, Maslenitsa, Vardavar |
| **Ancient cities** | Amberd and the Novgorod kremlin, Erebuni (782 BC), Geghard, Haghpat, Kizhi, the Moscow Kremlin and St Basil's, Toros Roslin, icons and frescoes |
| **Every nation is an artist** | Japan and Hokusai, the yurt and mountain villages, Samarkand, the Parthenon and Greek vases, Gothic cathedrals, Georgia and Iran |
| **Art unites nations** | motherhood, the wisdom of old age, compassion and memory, epic heroes, youth and dreams, the dove of peace |
| **Letters, holidays and review** | Mesrop Mashtots, decorated letters, New Year traditions, a class album, the final exhibition |

## Who and what

| Work or place | Author or country |
|---|---|
| «The Rooks Have Come Back» | Alexei Savrasov |
| «The Great Wave» | Katsushika Hokusai, Japan |
| «Trinity» | Andrei Rublev |
| miniatures of the 13th century | Toros Roslin, Cilicia |
| «Guernica», «Dove of Peace» | Pablo Picasso |
| Registan | Samarkand |
| Parthenon | Athens |
| Erebuni | Argishti I, Urartu |

~~~art
pic mode=silhouette izba yurt pagoda greek-temple gothic st-basil
Guess the building and the country by its silhouette, then tap to check.
~~~

## Final work

Paint «Every nation is an artist»: children of different nations in their costumes stand in a circle or a row, each holding something from the art of his or her people: a pomegranate, a matryoshka, a Greek vase, a sakura branch, a carpet. Use what you know: a clear centre, rhythm, warm and cold colours, ornament in the border.

~~~art
sketch
~~~

~~~art
tasks
1. Name the five units of this year.
2. When was Erebuni founded?
3. Who painted «Trinity»?
4. What is the difference between a yurt and an izba?
5. Name the three orders of Greek columns.
6. What is a symbol of peace?
7. Paint the final work «Every nation is an artist».
~~~

~~~art
hints
1. Origins of native art, Ancient cities, Every nation is an artist, Art unites nations, Letters, holidays and review. 2. In 782 BC. 3. Andrei Rublev. 4. A yurt is a round felt house that can be carried; an izba is a log house that stays in one place. 5. Doric, Ionic, Corinthian. 6. A white dove. 7. Your work.
~~~`,
        hy: `## Ինչ սովորեցինք այս տարի

| Բաժին | Հիմնական գաղափարներ |
|---|---|
| **Հայրենի արվեստի ակունքները** | հայրենի բնապատկեր, իզբա և գլխատուն, գյուղի համայնապատկեր, տարազ և սարաֆան, աշխատող մարդու գեղեցկությունը, Տրնդեզ, Մասլենիցա, Վարդավառ |
| **Հին քաղաքներ** | Ամբերդ և Նովգորոդի կրեմլ, Էրեբունի (ք․ ա․ 782), Գեղարդ, Հաղպատ, Կիժի, Մոսկվայի Կրեմլ և Վասիլի Երանելու տաճար, Թորոս Ռոսլին, սրբապատկերներ և որմնանկարներ |
| **Յուրաքանչյուր ժողովուրդ նկարիչ է** | Ճապոնիա և Հոկուսայ, յուրտա և լեռնային գյուղեր, Սամարղանդ, Պարթենոն և հունական սափորներ, գոթական տաճարներ, Վրաստան և Իրան |
| **Արվեստը միավորում է ժողովուրդներին** | մայրություն, ծերության իմաստնություն, կարեկցանք և հիշողություն, էպիկական հերոսներ, երիտասարդություն և երազանքներ, խաղաղության աղավնի |
| **Տառեր, տոներ և ամփոփում** | Մեսրոպ Մաշտոց, զարդարված տառեր, ամանորյա ավանդույթներ, դասարանական ալբոմ, ամփոփիչ ցուցահանդես |

## Ով և ինչ

| Ստեղծագործություն կամ վայր | Հեղինակ կամ երկիր |
|---|---|
| «Սերմնագռավներն եկան» | Ալեքսեյ Սավրասով |
| «Մեծ ալիք» | Կացուսիկա Հոկուսայ, Ճապոնիա |
| «Երրորդություն» | Անդրեյ Ռուբլյով |
| 13-րդ դարի մանրանկարներ | Թորոս Ռոսլին, Կիլիկիա |
| «Գեռնիկա», «Խաղաղության աղավնի» | Պաբլո Պիկասո |
| Ռեգիստան | Սամարղանդ |
| Պարթենոն | Աթենք |
| Էրեբունի | Արգիշտի Առաջին, Ուրարտու |

~~~art
pic mode=silhouette izba yurt pagoda greek-temple gothic st-basil
Գուշակի՛ր շենքը և երկիրը ըստ ուրվագծի, հետո հպի՛ր՝ ստուգելու համար։
~~~

## Ամփոփիչ աշխատանք

Նկարի՛ր «Յուրաքանչյուր ժողովուրդ նկարիչ է»՝ տարբեր ժողովուրդների երեխաներ իրենց տարազներով կանգնած են շրջանով կամ շարքով, յուրաքանչյուրը ձեռքին բռնել է մի բան իր ժողովրդի արվեստից՝ նուռ, մատրյոշկա, հունական սափոր, սակուրայի ճյուղ, գորգ։ Օգտագործի՛ր այն, ինչ գիտես՝ հստակ կենտրոն, ռիթմ, տաք և սառը գույներ, եզրագծում զարդանախշ։

~~~art
sketch
~~~

~~~art
tasks
1. Անվանի՛ր այս տարվա հինգ բաժինները։
2. Ե՞րբ է հիմնադրվել Էրեբունին։
3. Ո՞վ է նկարել «Երրորդությունը»։
4. Ինչո՞վ է յուրտան տարբերվում իզբայից։
5. Անվանի՛ր հունական սյուների երեք օրդերը։
6. Ի՞նչն է խաղաղության խորհրդանիշ։
7. Նկարի՛ր «Յուրաքանչյուր ժողովուրդ նկարիչ է» ամփոփիչ աշխատանքը։
~~~

~~~art
hints
1. Հայրենի արվեստի ակունքները, Հին քաղաքներ, Յուրաքանչյուր ժողովուրդ նկարիչ է, Արվեստը միավորում է ժողովուրդներին, Տառեր, տոներ և ամփոփում։ 2. Ք․ ա․ 782 թվականին։ 3. Անդրեյ Ռուբլյովը։ 4. Յուրտան թաղիքե կլոր տուն է, որը կարելի է տեղափոխել, իզբան գերանե տուն է, որը մնում է մեկ տեղում։ 5. Դորիական, իոնիական, կորնթոսյան։ 6. Սպիտակ աղավնին։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Что мы узнали в этом году

| Раздел | Главное |
|---|---|
| **Истоки родного искусства** | родной пейзаж, изба и глхатун, панорама села, тараз и сарафан, красота человека в труде, Трндез, Масленица, Вардавар |
| **Древние города** | Амберд и Новгородский кремль, Эребуни (782 год до н. э.), Гегард, Ахпат, Кижи, Московский Кремль и собор Василия Блаженного, Торос Рослин, иконы и фрески |
| **Каждый народ — художник** | Япония и Хокусай, юрта и горные аулы, Самарканд, Парфенон и греческие вазы, готические соборы, Грузия и Иран |
| **Искусство объединяет народы** | материнство, мудрость старости, сострадание и память, эпические герои, юность и мечты, голубь мира |
| **Буквы, праздники и итоги** | Месроп Маштоц, украшенные буквы, новогодние традиции, альбом класса, итоговая выставка |

## Кто и что

| Произведение или место | Автор или страна |
|---|---|
| «Грачи прилетели» | Алексей Саврасов |
| «Большая волна» | Кацусика Хокусай, Япония |
| «Троица» | Андрей Рублёв |
| миниатюры XIII века | Торос Рослин, Киликия |
| «Герника», «Голубь мира» | Пабло Пикассо |
| Регистан | Самарканд |
| Парфенон | Афины |
| Эребуни | Аргишти I, Урарту |

~~~art
pic mode=silhouette izba yurt pagoda greek-temple gothic st-basil
Угадай здание и страну по силуэту, потом нажми, чтобы проверить.
~~~

## Итоговая работа

Напиши картину «Каждый народ — художник»: дети разных народов в своих костюмах стоят по кругу или в ряд, и каждый держит что-то из искусства своего народа: гранат, матрёшку, греческую вазу, ветку сакуры, ковёр. Используй то, что знаешь: ясный центр, ритм, тёплые и холодные цвета, орнамент в рамке.

~~~art
sketch
~~~

~~~art
tasks
1. Назови пять разделов этого года.
2. Когда основан Эребуни?
3. Кто написал «Троицу»?
4. Чем юрта отличается от избы?
5. Назови три ордера греческих колонн.
6. Что является символом мира?
7. Напиши итоговую работу «Каждый народ — художник».
~~~

~~~art
hints
1. Истоки родного искусства, Древние города, Каждый народ — художник, Искусство объединяет народы, Буквы, праздники и итоги. 2. В 782 году до н. э. 3. Андрей Рублёв. 4. Юрта — круглый войлочный дом, который можно перевезти; изба — бревенчатый дом, который стоит на месте. 5. Дорический, ионический, коринфский. 6. Белый голубь. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Erebuni was founded by…", "Էրեբունին հիմնադրել է…", "Эребуни основал…"), [t("Argishti I", "Արգիշտի Առաջինը", "Аргишти I"), t("Mesrop Mashtots", "Մեսրոպ Մաշտոցը", "Месроп Маштоц"), t("Picasso", "Պիկասոն", "Пикассо")], 0),
        q(t("«The Great Wave» comes from…", "«Մեծ ալիքը» … է։", "«Большая волна» — из…"), [t("Greece", "Հունաստանից", "Греции"), t("Japan", "Ճապոնիայից", "Японии"), t("Iran", "Իրանից", "Ирана")], 1),
        q(t("The Registan is in…", "Ռեգիստանը գտնվում է…", "Регистан находится в…"), [t("Paris", "Փարիզում", "Париже"), t("Athens", "Աթենքում", "Афинах"), t("Samarkand", "Սամարղանդում", "Самарканде")], 2),
        q(t("A house of felt that nomads carry is a…", "Քոչվորների տեղափոխվող թաղիքե տունը…", "Войлочный дом, который перевозят кочевники, — это…"), [t("yurt", "յուրտա է", "юрта"), t("izba", "իզբա է", "изба"), t("glkhatun", "գլխատուն է", "глхатун")], 0),
        q(t("The Armenian alphabet was created by…", "Հայոց այբուբենը ստեղծել է…", "Армянский алфавит создал…"), [t("Toros Roslin", "Թորոս Ռոսլինը", "Торос Рослин"), t("Mesrop Mashtots", "Մեսրոպ Մաշտոցը", "Месроп Маштоц"), t("Yervand Kochar", "Երվանդ Քոչարը", "Ерванд Кочар")], 1),
        q(t("Vardavar is a holiday of…", "Վարդավառը … տոն է։", "Вардавар — праздник…"), [t("pancakes", "բլինների", "блинов"), t("bonfires", "խարույկների", "костров"), t("water", "ջրի", "воды")], 2),
      ],
    ),
  ],
};
