import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("Every nation is an artist", "Յուրաքանչյուր ժողովուրդ նկարիչ է", "Каждый народ — художник"),
  summary: t(
    "Japan, peoples of mountains and steppes, cities of Central Asia, Ancient Greece, Gothic Europe and our neighbours Georgia and Iran.",
    "Ճապոնիա, լեռների և տափաստանների ժողովուրդներ, Միջին Ասիայի քաղաքներ, Հին Հունաստան, գոթական Եվրոպա և մեր հարևանները՝ Վրաստան և Իրան։",
    "Япония, народы гор и степей, города Средней Азии, Древняя Греция, готическая Европа и наши соседи Грузия и Иран.",
  ),
  lessons: [
    lesson(
      "japan-art",
      ["The Land of the Rising Sun", "Ծագող արևի երկիրը", "Страна восходящего солнца"],
      {
        en: ["Know features of Japanese houses, gardens and festivals", "Know Hokusai's «The Great Wave» and Japanese prints", "Paint a blossoming cherry branch with few, light brushstrokes"],
        hy: ["Իմանալ ճապոնական տների, այգիների և տոների առանձնահատկությունները", "Իմանալ Հոկուսայի «Մեծ ալիքը» և ճապոնական փորագրանկարները", "Մի քանի թեթև վրձնահարվածով նկարել ծաղկած բալենու ճյուղ"],
        ru: ["Знать особенности японского дома, сада и праздников", "Знать «Большую волну» Хокусая и японскую гравюру", "Написать цветущую ветку сакуры немногими лёгкими мазками"],
      },
      {
        en: `## Love for small things

Japan is an island country where people have long admired the beauty of nature: a single flower, a stone covered with moss, the moon over the water. Japanese art often says a lot with **very little**.

## House and garden

| | What is special |
|---|---|
| **house** | wood and paper; sliding doors and paper screens; mats on the floor; almost no furniture |
| **rock garden** | stones on raked sand: the sand is like the sea, the stones like islands |
| **pagoda** | a tower with several roofs, the corners turned up |

~~~art
pic pagoda
~~~

## The cherry festival

In spring people gather under blossoming **sakura** (cherry) trees to admire the flowers. This custom is called **hanami** – «looking at flowers». The pink blossom lasts only a few days, and that is why it is so precious.

~~~art
palette japan
~~~

## Japanese prints

Japanese artists made **woodblock prints**: a picture was cut into a wooden board, covered with paint and pressed onto paper, so many copies could be made. The most famous print is **«The Great Wave off Kanagawa»** by **Katsushika Hokusai**: a huge blue wave with claws of foam rises over small boats, and far away stands the snowy Mount Fuji.

Compare it with Aivazovsky's «Ninth Wave»: there are soft colours and light; here are clear outlines, flat colours and a pattern of foam.

~~~art
tone
~~~

## Paint a sakura branch

1. Paint the branch with one confident stroke of dark brown or black; let it bend.
2. Add flowers with pink dabs: some open, some buds.
3. Leave a lot of empty space: in Japanese art emptiness is part of the picture.
4. Sign your picture with a small red stamp-square, like a Japanese artist.

~~~art
steps sakura
~~~

~~~art
tasks
1. What are Japanese houses made of?
2. What do the sand and stones in a rock garden show?
3. What is hanami?
4. How were Japanese woodblock prints made?
5. Describe «The Great Wave» by Hokusai.
6. Why do Japanese artists leave empty space?
7. Paint a blossoming sakura branch.
~~~

~~~art
hints
1. Wood and paper. 2. The sea and islands. 3. The custom of admiring blossoming cherry trees. 4. A picture was cut into a wooden board, covered with paint and pressed onto paper. 5. A huge blue wave with foam over small boats; Mount Fuji far away. 6. Emptiness is part of the picture. 7. Your work.
~~~`,
        hy: `## Սեր փոքր բաների հանդեպ

Ճապոնիան կղզիային երկիր է, որտեղ մարդիկ վաղուց հիանում են բնության գեղեցկությամբ՝ մեկ ծաղիկ, մամուռով ծածկված քար, լուսինը ջրի վրա։ Ճապոնական արվեստը հաճախ շատ բան է ասում **շատ քիչով**։

## Տուն և այգի

| | Ինչն է յուրահատուկ |
|---|---|
| **տուն** | փայտ և թուղթ, սահող դռներ և թղթե միջնապատեր, ներքնակներ հատակին, գրեթե առանց կահույքի |
| **քարերի այգի** | քարեր փոցխված ավազի վրա՝ ավազը նման է ծովի, քարերը՝ կղզիների |
| **պագոդա** | մի քանի տանիքով աշտարակ՝ վեր թեքված անկյուններով |

~~~art
pic pagoda
~~~

## Բալենու տոնը

Գարնանը մարդիկ հավաքվում են ծաղկած **սակուրաների** (բալենիների) տակ՝ ծաղիկներով հիանալու։ Այս սովորույթը կոչվում է **հանամի**՝ «ծաղիկներին նայել»։ Վարդագույն ծաղկունքը տևում է ընդամենը մի քանի օր, և հենց դրա համար է այդքան թանկ։

~~~art
palette japan
~~~

## Ճապոնական փորագրանկարներ

Ճապոնացի նկարիչները ստեղծում էին **փայտափորագրեր**՝ նկարը փորագրում էին փայտե տախտակի վրա, ծածկում ներկով և սեղմում թղթին, այնպես որ կարելի էր շատ օրինակներ անել։ Ամենահայտնի փորագրանկարը **Կացուսիկա Հոկուսայի** **«Կանագավայի մեծ ալիքն»** է՝ փրփուրի ճանկերով հսկա կապույտ ալիքը բարձրանում է փոքր նավակների վրա, իսկ հեռվում կանգնած է ձյունածածկ Ֆուջի լեռը։

Համեմատի՛ր այն Այվազովսկու «Իններորդ ալիքի» հետ․ այնտեղ մեղմ գույներ և լույս են, այստեղ՝ հստակ եզրագծեր, հարթ գույներ և փրփուրի նախշ։

~~~art
tone
~~~

## Նկարի՛ր սակուրայի ճյուղ

1. Նկարի՛ր ճյուղը մուգ շագանակագույնի կամ սևի մեկ վստահ վրձնահարվածով, թո՛ղ այն ծռվի։
2. Վարդագույն հպումներով ավելացրու՛ ծաղիկներ՝ որոշները բաց, որոշները՝ կոկոններ։
3. Թո՛ղ շատ դատարկ տարածություն՝ ճապոնական արվեստում դատարկությունը նկարի մասն է։
4. Ստորագրի՛ր նկարդ փոքր կարմիր կնիք-քառակուսիով, ինչպես ճապոնացի նկարիչը։

~~~art
steps sakura
~~~

~~~art
tasks
1. Ինչի՞ց են պատրաստված ճապոնական տները։
2. Ի՞նչ են ցույց տալիս քարերի այգու ավազն ու քարերը։
3. Ի՞նչ է հանամին։
4. Ինչպե՞ս էին պատրաստվում ճապոնական փայտափորագրերը։
5. Նկարագրի՛ր Հոկուսայի «Մեծ ալիքը»։
6. Ինչո՞ւ են ճապոնացի նկարիչները թողնում դատարկ տարածություն։
7. Նկարի՛ր ծաղկած սակուրայի ճյուղ։
~~~

~~~art
hints
1. Փայտից և թղթից։ 2. Ծովը և կղզիները։ 3. Ծաղկած բալենիներով հիանալու սովորույթը։ 4. Նկարը փորագրում էին փայտե տախտակի վրա, ծածկում ներկով և սեղմում թղթին։ 5. Հսկա կապույտ ալիք փրփուրով փոքր նավակների վրա, հեռվում՝ Ֆուջի լեռը։ 6. Դատարկությունը նկարի մասն է։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Любовь к малому

Япония — островная страна, где люди издавна любуются красотой природы: одним цветком, камнем, покрытым мхом, луной над водой. Японское искусство часто говорит многое **очень малым**.

## Дом и сад

| | Что особенного |
|---|---|
| **дом** | дерево и бумага; раздвижные двери и бумажные ширмы; циновки на полу; почти нет мебели |
| **сад камней** | камни на расчёсанном песке: песок — как море, камни — как острова |
| **пагода** | башня с несколькими крышами, углы которых загнуты вверх |

~~~art
pic pagoda
~~~

## Праздник сакуры

Весной люди собираются под цветущей **сакурой** (вишней), чтобы любоваться цветами. Этот обычай называется **ханами** — «любование цветами». Розовое цветение длится всего несколько дней, и поэтому оно так ценно.

~~~art
palette japan
~~~

## Японская гравюра

Японские художники делали **гравюры на дереве**: рисунок вырезали на деревянной доске, покрывали краской и прижимали к бумаге, так что можно было сделать много оттисков. Самая знаменитая гравюра — **«Большая волна в Канагаве»** **Кацусики Хокусая**: огромная синяя волна с «когтями» пены поднимается над маленькими лодками, а вдали стоит заснеженная гора Фудзи.

Сравни её с «Девятым валом» Айвазовского: там мягкие цвета и свет, здесь — чёткие контуры, плоские цвета и узор пены.

~~~art
tone
~~~

## Напиши ветку сакуры

1. Напиши ветку одним уверенным мазком тёмно-коричневой или чёрной краски; пусть она изгибается.
2. Добавь цветы розовыми касаниями кисти: одни раскрыты, другие — бутоны.
3. Оставь много пустого места: в японском искусстве пустота — часть картины.
4. Подпиши работу маленькой красной печатью-квадратом, как японский художник.

~~~art
steps sakura
~~~

~~~art
tasks
1. Из чего сделаны японские дома?
2. Что изображают песок и камни в саду камней?
3. Что такое ханами?
4. Как делали японские гравюры на дереве?
5. Опиши «Большую волну» Хокусая.
6. Почему японские художники оставляют пустое место?
7. Напиши цветущую ветку сакуры.
~~~

~~~art
hints
1. Из дерева и бумаги. 2. Море и острова. 3. Обычай любоваться цветущей сакурой. 4. Рисунок вырезали на доске, покрывали краской и прижимали к бумаге. 5. Огромная синяя волна с пеной над лодками, вдали гора Фудзи. 6. Пустота — часть картины. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Hanami is the custom of…", "Հանամին սովորույթ է…", "Ханами — это обычай…"), [t("admiring cherry blossom", "ծաղկած բալենիներով հիանալու", "любоваться цветущей сакурой"), t("jumping over fire", "կրակի վրայով թռչելու", "прыгать через костёр"), t("splashing water", "ջուր լցնելու", "обливаться водой")], 0),
        q(t("«The Great Wave» was made by…", "«Մեծ ալիքը» ստեղծել է…", "«Большую волну» создал…"), [t("Aivazovsky", "Այվազովսկին", "Айвазовский"), t("Hokusai", "Հոկուսայը", "Хокусай"), t("Rublev", "Ռուբլյովը", "Рублёв")], 1),
        q(t("In a rock garden the sand is like…", "Քարերի այգում ավազը նման է…", "В саду камней песок похож на…"), [t("snow", "ձյան", "снег"), t("a road", "ճանապարհի", "дорогу"), t("the sea", "ծովի", "море")], 2),
        q(t("The mountain in «The Great Wave» is…", "«Մեծ ալիքի» լեռը…", "Гора на «Большой волне» —"), [t("Fuji", "Ֆուջին է", "Фудзи"), t("Ararat", "Արարատն է", "Арарат"), t("Aragats", "Արագածն է", "Арагац")], 0),
        q(t("A woodblock print is made by…", "Փայտափորագիրը ստեղծում են…", "Гравюру на дереве делают…"), [t("weaving threads", "թելեր հյուսելով", "плетя нитки"), t("pressing a painted carved board onto paper", "ներկված փորագրված տախտակը թղթին սեղմելով", "прижимая к бумаге вырезанную доску с краской"), t("taking a photo", "լուսանկարելով", "фотографируя")], 1),
        q(t("In Japanese art empty space is…", "Ճապոնական արվեստում դատարկ տարածությունը…", "В японском искусстве пустота —"), [t("a mistake", "սխալ է", "ошибка"), t("always painted black", "միշտ սև է ներկվում", "всегда закрашивается чёрным"), t("part of the picture", "նկարի մասն է", "часть картины")], 2),
      ],
    ),
    lesson(
      "mountain-steppe",
      ["Peoples of mountains and steppes", "Լեռների և տափաստանների ժողովուրդներ", "Народы гор и степей"],
      {
        en: ["Know how nomads of the steppe and mountain peoples live and build", "Describe the yurt and a mountain village with terraces", "Draw a yurt in the steppe or a mountain village"],
        hy: ["Իմանալ, թե ինչպես են ապրում և կառուցում տափաստանի քոչվորներն ու լեռնային ժողովուրդները", "Նկարագրել յուրտան և դարավանդներով լեռնային գյուղը", "Նկարել յուրտա տափաստանում կամ լեռնային գյուղ"],
        ru: ["Знать, как живут и строят кочевники степи и горные народы", "Описывать юрту и горный аул с террасами", "Нарисовать юрту в степи или горный аул"],
      },
      {
        en: `## Two ways of life

| | Steppe | Mountains |
|---|---|---|
| **landscape** | flat, endless grassland, a huge sky | steep slopes, gorges, rocks |
| **life** | **nomads** move with their herds of horses and sheep | people stay in one place and build stone villages |
| **house** | the **yurt** – easy to take apart and carry | stone houses, one above another |

## The yurt

A yurt is a round house of nomads.
- Its frame is a folding **wooden lattice**, light enough to load on a horse or camel.
- It is covered with **felt**, made of sheep's wool: warm in winter, cool in summer.
- At the top there is a round opening for light and smoke, like the **yerdik** of an Armenian house.
- Inside there are bright felt carpets, chests and embroidered cushions.

~~~art
pic yurt
~~~

## A mountain village

In the mountains of the Caucasus, for example in Dagestan, houses are built on the slope in **terraces**. The flat roof of a lower house can be the yard of the house above. From far away the village looks like a staircase of stone cubes.

Mountain peoples are famous for crafts. The masters of the Dagestan village **Kubachi** have made silver and engraved jewellery and weapons for centuries.

~~~art
pic armenian-house
~~~

## Ornament of nomads

Nomad ornaments are bold and big: curling **ram's horns**, waves, spirals. They are made of contrasting colours of felt, so they can be seen from far away.

~~~art
pattern layout=grid rhythm=mirror palettes=armenian,mono motifs=spiral,rhombus,triangle
Felt patterns of the nomads are full of ram's horns. Try the mirror rhythm, like a felt rug cut in half.
~~~

## Draw

1. Steppe: a low horizon, a lot of sky; a white yurt with a red door, horses grazing.
2. Mountains: a high horizon; stone cubes of houses climbing the slope; a path and a bridge over a gorge.
3. Decorate the border with a ram's-horn ornament.

~~~art
sketch guide=horizon
~~~

~~~art
tasks
1. What is the main difference between nomads and mountain villagers?
2. What is the frame of a yurt made of?
3. Why is felt good for a yurt?
4. Which part of a yurt is like the Armenian yerdik?
5. How are houses placed in a mountain village?
6. What is the village of Kubachi famous for?
7. Draw a yurt in the steppe or a mountain village.
~~~

~~~art
hints
1. Nomads move with their herds; mountain villagers stay and build stone villages. 2. A folding wooden lattice. 3. It is warm in winter and cool in summer. 4. The round opening at the top. 5. On the slope in terraces, one above another. 6. Silverwork and engraved jewellery and weapons. 7. Your work.
~~~`,
        hy: `## Կյանքի երկու ձև

| | Տափաստան | Լեռներ |
|---|---|---|
| **բնապատկեր** | հարթ, անվերջ խոտածածկ տարածք, հսկա երկինք | զառիթափ լանջեր, կիրճեր, ժայռեր |
| **կյանք** | **քոչվորները** տեղափոխվում են իրենց ձիերի և ոչխարների հոտերով | մարդիկ մնում են մեկ տեղում և կառուցում քարե գյուղեր |
| **տուն** | **յուրտա**՝ հեշտ է քանդել և տեղափոխել | քարե տներ՝ մեկը մյուսի վերևում |

## Յուրտա

Յուրտան քոչվորների կլոր տունն է։
- Նրա կմախքը ծալովի **փայտե ցանց** է՝ այնքան թեթև, որ կարելի է բարձել ձիու կամ ուղտի վրա։
- Այն ծածկված է ոչխարի բրդից պատրաստված **թաղիքով**՝ տաք ձմռանը, զով ամռանը։
- Գագաթին կլոր բացվածք կա լույսի և ծխի համար, ինչպես հայկական տան **երդիկը**։
- Ներսում վառ թաղիքե գորգեր, սնդուկներ և ասեղնագործ բարձեր են։

~~~art
pic yurt
~~~

## Լեռնային գյուղ

Կովկասի լեռներում, օրինակ Դաղստանում, տները կառուցում են լանջին **դարավանդներով**։ Ներքևի տան հարթ տանիքը կարող է լինել վերևի տան բակը։ Հեռվից գյուղը նման է քարե խորանարդների սանդուղքի։

Լեռնային ժողովուրդները հայտնի են իրենց արհեստներով։ Դաղստանի **Կուբաչի** գյուղի վարպետները դարեր շարունակ ստեղծում են արծաթե և փորագրված զարդեր ու զենքեր։

~~~art
pic armenian-house
~~~

## Քոչվորների զարդանախշը

Քոչվորների զարդանախշերը համարձակ են և մեծ՝ ոլորվող **խոյի եղջյուրներ**, ալիքներ, պարույրներ։ Դրանք պատրաստվում են հակադիր գույների թաղիքից, որպեսզի երևան հեռվից։

~~~art
pattern layout=grid rhythm=mirror palettes=armenian,mono motifs=spiral,rhombus,triangle
Քոչվորների թաղիքի նախշերը լի են խոյի եղջյուրներով։ Փորձի՛ր հայելային ռիթմը, ինչպես կիսով կտրած թաղիքե գորգը։
~~~

## Նկարի՛ր

1. Տափաստան՝ ցածր հորիզոն, շատ երկինք, սպիտակ յուրտա կարմիր դռնով, արածող ձիեր։
2. Լեռներ՝ բարձր հորիզոն, լանջով բարձրացող տների քարե խորանարդներ, արահետ և կամուրջ կիրճի վրայով։
3. Եզրը զարդարի՛ր խոյի եղջյուրների զարդանախշով։

~~~art
sketch guide=horizon
~~~

~~~art
tasks
1. Ո՞րն է քոչվորների և լեռնային գյուղացիների հիմնական տարբերությունը։
2. Ինչի՞ց է պատրաստված յուրտայի կմախքը։
3. Ինչո՞ւ է թաղիքը լավ յուրտայի համար։
4. Յուրտայի ո՞ր մասն է նման հայկական երդիկին։
5. Ինչպե՞ս են դասավորված տները լեռնային գյուղում։
6. Ինչո՞վ է հայտնի Կուբաչի գյուղը։
7. Նկարի՛ր յուրտա տափաստանում կամ լեռնային գյուղ։
~~~

~~~art
hints
1. Քոչվորները տեղափոխվում են հոտերով, լեռնային գյուղացիները մնում են և կառուցում քարե գյուղեր։ 2. Ծալովի փայտե ցանցից։ 3. Այն տաք է ձմռանը և զով ամռանը։ 4. Գագաթի կլոր բացվածքը։ 5. Լանջին՝ դարավանդներով, մեկը մյուսի վերևում։ 6. Արծաթագործությամբ, փորագրված զարդերով և զենքերով։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Два уклада жизни

| | Степь | Горы |
|---|---|---|
| **пейзаж** | ровная бескрайняя степь, огромное небо | крутые склоны, ущелья, скалы |
| **жизнь** | **кочевники** переходят с табунами лошадей и отарами овец | люди живут на одном месте и строят каменные аулы |
| **жилище** | **юрта** — её легко разобрать и перевезти | каменные дома, один над другим |

## Юрта

Юрта — круглый дом кочевников.
- Её каркас — складная **деревянная решётка**, такая лёгкая, что её можно навьючить на коня или верблюда.
- Её покрывают **войлоком** из овечьей шерсти: тепло зимой, прохладно летом.
- Наверху есть круглое отверстие для света и дыма, как **ердик** армянского дома.
- Внутри — яркие войлочные ковры, сундуки и вышитые подушки.

~~~art
pic yurt
~~~

## Горный аул

В горах Кавказа, например в Дагестане, дома строят на склоне **террасами**. Плоская крыша нижнего дома может быть двором верхнего. Издалека аул похож на лестницу из каменных кубиков.

Горные народы славятся ремёслами. Мастера дагестанского аула **Кубачи** веками делают серебряные украшения и оружие с гравировкой.

~~~art
pic armenian-house
~~~

## Орнамент кочевников

Орнаменты кочевников смелые и крупные: закрученные **бараньи рога**, волны, спирали. Их делают из войлока контрастных цветов, чтобы они были видны издалека.

~~~art
pattern layout=grid rhythm=mirror palettes=armenian,mono motifs=spiral,rhombus,triangle
Войлочные узоры кочевников полны бараньих рогов. Попробуй зеркальный ритм, как у разрезанного пополам войлока.
~~~

## Нарисуй

1. Степь: низкий горизонт, много неба; белая юрта с красной дверью, пасущиеся кони.
2. Горы: высокий горизонт; каменные кубики домов поднимаются по склону; тропа и мост через ущелье.
3. Укрась бордюр орнаментом «бараньи рога».

~~~art
sketch guide=horizon
~~~

~~~art
tasks
1. В чём главное отличие кочевников от жителей горных аулов?
2. Из чего сделан каркас юрты?
3. Почему войлок хорош для юрты?
4. Какая часть юрты похожа на армянский ердик?
5. Как расположены дома в горном ауле?
6. Чем славится аул Кубачи?
7. Нарисуй юрту в степи или горный аул.
~~~

~~~art
hints
1. Кочевники переходят со стадами, горцы живут на месте и строят каменные аулы. 2. Из складной деревянной решётки. 3. Он тёплый зимой и прохладный летом. 4. Круглое отверстие наверху. 5. На склоне террасами, один над другим. 6. Серебряными украшениями и оружием с гравировкой. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Nomads live in a…", "Քոչվորներն ապրում են…", "Кочевники живут в…"), [t("yurt", "յուրտայում", "юрте"), t("pagoda", "պագոդայում", "пагоде"), t("kremlin", "կրեմլում", "кремле")], 0),
        q(t("A yurt is covered with…", "Յուրտան ծածկված է…", "Юрту покрывают…"), [t("glass", "ապակիով", "стеклом"), t("felt", "թաղիքով", "войлоком"), t("tiles", "սալիկներով", "черепицей")], 1),
        q(t("In a mountain village the roof of a lower house can be…", "Լեռնային գյուղում ներքևի տան տանիքը կարող է լինել…", "В горном ауле крыша нижнего дома может быть…"), [t("a lake", "լիճ", "озером"), t("a garden of sakura", "սակուրայի այգի", "садом сакуры"), t("the yard of the house above", "վերևի տան բակը", "двором верхнего дома")], 2),
        q(t("Kubachi masters are famous for…", "Կուբաչիի վարպետները հայտնի են…", "Мастера Кубачи славятся…"), [t("silverwork", "արծաթագործությամբ", "серебряными изделиями"), t("glass windows", "ապակե պատուհաններով", "стеклянными окнами"), t("paper houses", "թղթե տներով", "бумажными домами")], 0),
        q(t("A typical nomad ornament is…", "Քոչվորների բնորոշ զարդանախշն է…", "Типичный орнамент кочевников —"), [t("cherry blossom", "բալենու ծաղիկը", "цветы сакуры"), t("ram's horns", "խոյի եղջյուրները", "бараньи рога"), t("Gothic arches", "գոթական կամարները", "готические арки")], 1),
        q(t("For a steppe picture we choose a…", "Տափաստանի նկարի համար ընտրում ենք…", "Для степного пейзажа выбирают…"), [t("high horizon", "բարձր հորիզոն", "высокий горизонт"), t("no horizon", "առանց հորիզոնի", "отсутствие горизонта"), t("low horizon", "ցածր հորիզոն", "низкий горизонт")], 2),
      ],
    ),
    lesson(
      "central-asia",
      ["Cities in the desert: Samarkand and Bukhara", "Քաղաքներ անապատում․ Սամարղանդ և Բուխարա", "Города в пустыне: Самарканд и Бухара"],
      {
        en: ["Know how cities were built among the deserts of Central Asia", "Describe the Registan, blue domes and tile mosaics", "Create a geometric ornament for a tiled portal"],
        hy: ["Իմանալ, թե ինչպես էին կառուցվում քաղաքները Միջին Ասիայի անապատների մեջ", "Նկարագրել Ռեգիստանը, կապույտ գմբեթները և սալիկների խճանկարները", "Ստեղծել երկրաչափական զարդանախշ սալիկապատ մուտքի համար"],
        ru: ["Знать, как строили города среди пустынь Средней Азии", "Описывать Регистан, голубые купола и изразцовую мозаику", "Создать геометрический орнамент для изразцового портала"],
      },
      {
        en: `## An oasis city

In Central Asia there are hot deserts. Cities grew in **oases**, where there was water: along rivers and canals. Merchants of the **Silk Road** brought silk, spices and stories through these cities.

| Material | Why |
|---|---|
| **clay and mud brick** | clay is everywhere; thick clay walls keep the heat out |
| **glazed tiles** | shining blue and turquoise tiles protect the brick and look like water and sky in a yellow land |

## Samarkand and the Registan

The square **Registan** in **Samarkand** is surrounded by three large buildings with huge gates, the **portals**. Their walls are covered with mosaics of blue, turquoise, white and yellow tiles. Above them rise blue ribbed domes and tall slender towers, the **minarets**.

**Bukhara** is famous for its old streets, domed markets and the tall Kalyan minaret.

~~~art
pic registan
~~~

## Geometric ornament

Masters of Central Asia created very complex patterns from simple shapes: stars, polygons, interlacing lines. Every pattern is built with a ruler and compasses, repeating again and again like a carpet of light.

| Shape | How it repeats |
|---|---|
| **8-pointed star** | two squares turned over each other |
| **hexagon** | like honeycomb |
| **interlacing** | lines go over and under each other |

~~~art
sketch mode=kaleido n=8 paper=blue
Eastern tile ornament is built of stars that repeat around a centre. Draw one ray and watch the star grow.
~~~

## Create a portal

1. Draw a tall rectangle with a pointed arch inside.
2. Divide the frame around the arch into squares.
3. In every square draw the same star or polygon with a ruler and compasses.
4. Paint with a limited palette: deep blue, turquoise, white, a little yellow.

~~~art
pattern layout=grid palettes=gzhel motifs=star,rhombus,flower
~~~

~~~art
tasks
1. Why did cities in Central Asia grow in oases?
2. What did merchants of the Silk Road bring?
3. Why were walls made of clay?
4. What is the Registan?
5. What is a minaret?
6. How can you build an 8-pointed star?
7. Create a portal decorated with a geometric ornament.
~~~

~~~art
hints
1. Because there was water there. 2. Silk, spices and stories. 3. Clay is everywhere, and thick clay walls keep the heat out. 4. A square in Samarkand surrounded by three large buildings with portals. 5. A tall slender tower. 6. From two squares turned over each other. 7. Your work.
~~~`,
        hy: `## Օազիս-քաղաք

Միջին Ասիայում շոգ անապատներ կան։ Քաղաքներն աճում էին **օազիսներում**, որտեղ ջուր կար՝ գետերի և ջրանցքների երկայնքով։ **Մետաքսի ճանապարհի** վաճառականներն այս քաղաքներով մետաքս, համեմունքներ և պատմություններ էին բերում։

| Նյութ | Ինչու |
|---|---|
| **կավ և հում աղյուս** | կավն ամենուր է, հաստ կավե պատերը շոգը ներս չեն թողնում |
| **ջնարակված սալիկներ** | փայլող կապույտ և փիրուզագույն սալիկները պաշտպանում են աղյուսը և դեղին երկրում նման են ջրի ու երկնքի |

## Սամարղանդ և Ռեգիստան

**Սամարղանդի** **Ռեգիստան** հրապարակը շրջապատված է երեք մեծ շենքերով, որոնք ունեն հսկա մուտքեր՝ **պորտալներ**։ Նրանց պատերը ծածկված են կապույտ, փիրուզագույն, սպիտակ և դեղին սալիկների խճանկարներով։ Դրանց վերևում բարձրանում են կապույտ կողավոր գմբեթներ և բարձր, բարակ աշտարակներ՝ **մինարեթներ**։

**Բուխարան** հայտնի է իր հին փողոցներով, գմբեթավոր շուկաներով և բարձր Քալյան մինարեթով։

~~~art
pic registan
~~~

## Երկրաչափական զարդանախշ

Միջին Ասիայի վարպետները պարզ ձևերից շատ բարդ նախշեր էին ստեղծում՝ աստղեր, բազմանկյուններ, իրար միահյուսվող գծեր։ Յուրաքանչյուր նախշ կառուցվում է քանոնով և կարկինով և կրկնվում է նորից ու նորից, ինչպես լույսի գորգ։

| Ձև | Ինչպես է կրկնվում |
|---|---|
| **8-թևանի աստղ** | երկու քառակուսի՝ իրար վրա շրջված |
| **վեցանկյուն** | մեղրախորիսխի պես |
| **միահյուսում** | գծերն անցնում են իրար վրայով և տակով |

~~~art
sketch mode=kaleido n=8 paper=blue
Արևելյան սալիկների զարդանախշը կառուցված է կենտրոնի շուրջ կրկնվող աստղերից։ Նկարի՛ր մեկ ճառագայթ և տե՛ս, ինչպես է աստղը աճում։
~~~

## Ստեղծի՛ր պորտալ

1. Նկարի՛ր բարձր ուղղանկյուն՝ ներսում սրածայր կամար։
2. Կամարի շուրջը շրջանակը բաժանի՛ր քառակուսիների։
3. Յուրաքանչյուր քառակուսում քանոնով և կարկինով նկարի՛ր նույն աստղը կամ բազմանկյունը։
4. Ներկի՛ր սահմանափակ գունապնակով՝ մուգ կապույտ, փիրուզագույն, սպիտակ, մի քիչ դեղին։

~~~art
pattern layout=grid palettes=gzhel motifs=star,rhombus,flower
~~~

~~~art
tasks
1. Ինչո՞ւ էին Միջին Ասիայի քաղաքներն աճում օազիսներում։
2. Ի՞նչ էին բերում Մետաքսի ճանապարհի վաճառականները։
3. Ինչո՞ւ էին պատերը կավից։
4. Ի՞նչ է Ռեգիստանը։
5. Ի՞նչ է մինարեթը։
6. Ինչպե՞ս կարելի է կառուցել 8-թևանի աստղ։
7. Ստեղծի՛ր երկրաչափական զարդանախշով զարդարված պորտալ։
~~~

~~~art
hints
1. Որովհետև այնտեղ ջուր կար։ 2. Մետաքս, համեմունքներ և պատմություններ։ 3. Կավն ամենուր է, և հաստ կավե պատերը շոգը ներս չեն թողնում։ 4. Սամարղանդի հրապարակ՝ պորտալներով երեք մեծ շենքերով շրջապատված։ 5. Բարձր, բարակ աշտարակ։ 6. Երկու քառակուսուց՝ իրար վրա շրջված։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Город-оазис

В Средней Азии жаркие пустыни. Города вырастали в **оазисах**, где была вода: вдоль рек и каналов. Купцы **Великого шёлкового пути** везли через эти города шёлк, пряности и истории.

| Материал | Почему |
|---|---|
| **глина и сырцовый кирпич** | глина есть везде; толстые глиняные стены не пускают жару |
| **глазурованные изразцы** | блестящие синие и бирюзовые изразцы защищают кирпич и похожи на воду и небо среди жёлтой земли |

## Самарканд и Регистан

Площадь **Регистан** в **Самарканде** окружена тремя большими зданиями с огромными входами — **порталами**. Их стены покрыты мозаикой из синих, бирюзовых, белых и жёлтых изразцов. Над ними поднимаются голубые ребристые купола и высокие стройные башни — **минареты**.

**Бухара** славится старыми улочками, купольными базарами и высоким минаретом Калян.

~~~art
pic registan
~~~

## Геометрический орнамент

Мастера Средней Азии создавали очень сложные узоры из простых фигур: звёзд, многоугольников, переплетающихся линий. Каждый узор строится линейкой и циркулем и повторяется снова и снова, как ковёр из света.

| Фигура | Как повторяется |
|---|---|
| **8-конечная звезда** | два квадрата, повёрнутые друг относительно друга |
| **шестиугольник** | как пчелиные соты |
| **плетёнка** | линии проходят друг над другом и под другом |

~~~art
sketch mode=kaleido n=8 paper=blue
Восточный изразцовый орнамент строится из звёзд вокруг центра. Нарисуй один луч и смотри, как растёт звезда.
~~~

## Создай портал

1. Нарисуй высокий прямоугольник со стрельчатой аркой внутри.
2. Раздели рамку вокруг арки на квадраты.
3. В каждом квадрате построй линейкой и циркулем одну и ту же звезду или многоугольник.
4. Раскрась ограниченной палитрой: тёмно-синий, бирюзовый, белый, немного жёлтого.

~~~art
pattern layout=grid palettes=gzhel motifs=star,rhombus,flower
~~~

~~~art
tasks
1. Почему города Средней Азии вырастали в оазисах?
2. Что везли купцы Великого шёлкового пути?
3. Почему стены делали из глины?
4. Что такое Регистан?
5. Что такое минарет?
6. Как построить 8-конечную звезду?
7. Создай портал, украшенный геометрическим орнаментом.
~~~

~~~art
hints
1. Потому что там была вода. 2. Шёлк, пряности и истории. 3. Глина есть везде, а толстые глиняные стены не пускают жару. 4. Площадь в Самарканде, окружённая тремя большими зданиями с порталами. 5. Высокая стройная башня. 6. Из двух квадратов, повёрнутых друг относительно друга. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Cities in the desert grew in…", "Անապատի քաղաքներն աճում էին…", "Города в пустыне вырастали в…"), [t("oases", "օազիսներում", "оазисах"), t("glaciers", "սառցադաշտերում", "ледниках"), t("forests", "անտառներում", "лесах")], 0),
        q(t("The Registan is in…", "Ռեգիստանը գտնվում է…", "Регистан находится в…"), [t("Moscow", "Մոսկվայում", "Москве"), t("Samarkand", "Սամարղանդում", "Самарканде"), t("Kyoto", "Կիոտոյում", "Киото")], 1),
        q(t("A tall slender tower is a…", "Բարձր, բարակ աշտարակը…", "Высокая стройная башня — это…"), [t("yurt", "յուրտա է", "юрта"), t("pagoda", "պագոդա է", "пагода"), t("minaret", "մինարեթ է", "минарет")], 2),
        q(t("The main colours of the tiles are…", "Սալիկների հիմնական գույներն են…", "Основные цвета изразцов —"), [t("blue and turquoise", "կապույտը և փիրուզագույնը", "синий и бирюзовый"), t("black and grey", "սևը և մոխրագույնը", "чёрный и серый"), t("pink and brown", "վարդագույնը և շագանակագույնը", "розовый и коричневый")], 0),
        q(t("Geometric ornaments are built with…", "Երկրաչափական զարդանախշերը կառուցում են…", "Геометрический орнамент строят…"), [t("only fingers", "միայն մատներով", "только пальцами"), t("a ruler and compasses", "քանոնով և կարկինով", "линейкой и циркулем"), t("a sponge", "սպունգով", "губкой")], 1),
        q(t("Merchants travelled along the…", "Վաճառականները ճանապարհորդում էին…", "Купцы путешествовали по…"), [t("Volkhov river", "Վոլխով գետով", "реке Волхов"), t("Kremlin wall", "Կրեմլի պարսպով", "кремлёвской стене"), t("Silk Road", "Մետաքսի ճանապարհով", "Великому шёлковому пути")], 2),
      ],
    ),
    lesson(
      "ancient-greece",
      ["Ancient Greece: temple and vase", "Հին Հունաստան․ տաճար և սափոր", "Древняя Эллада: храм и вазопись"],
      {
        en: ["Know the Parthenon and the three orders of columns", "Tell black-figure from red-figure vases", "Draw a Greek vase with a scene in profile"],
        hy: ["Իմանալ Պարթենոնը և սյուների երեք օրդերները", "Տարբերել սևաֆիգուր և կարմրաֆիգուր սափորները", "Նկարել հունական սափոր պրոֆիլով տեսարանով"],
        ru: ["Знать Парфенон и три ордера колонн", "Отличать чернофигурные вазы от краснофигурных", "Нарисовать греческую вазу со сценой в профиль"],
      },
      {
        en: `## Harmony and measure

The ancient Greeks believed that beauty is **harmony**: the right measure of every part. They admired a strong, healthy human body and held the **Olympic Games** in its honour.

## The Parthenon

On the hill of the **Acropolis** in Athens stands the **Parthenon**, a temple of the goddess Athena built of white marble in the 5th century BC. Rows of columns stand around it. Everything in it is calm, balanced and in proportion.

~~~art
pic greek-temple
~~~

## Three orders of columns

| Order | Capital (the top of the column) | Character |
|---|---|---|
| **Doric** | a simple round cushion and a square slab | strong, strict, «male» |
| **Ionic** | two curls, the **volutes** | lighter, graceful |
| **Corinthian** | a basket of acanthus leaves | rich, festive |

In Armenia there is a temple in the Greek style: **Garni** (1st century AD) with Ionic columns, standing over a deep gorge.

~~~art
pic orders
~~~

## Painted vases

Greek vases had different shapes for different uses: the **amphora** for wine and oil, the **kylix** for drinking. They were decorated with scenes of gods, heroes and athletes.

| Style | How it looks |
|---|---|
| **black-figure** | black figures on the red-orange clay |
| **red-figure** | the figures stay red-orange, the background is painted black |

Figures are shown **in profile**, in motion, with a clear outline. Around the scene there are borders of the **meander**: a line bent at right angles like a running wave.

~~~art
pattern layout=strip rhythm=repeat palettes=egypt motifs=wave,spiral,leaf
~~~

## Draw a vase

1. Fold a sheet in half and draw half of a vase along the fold; cut it out so it is symmetrical.
2. Paint the vase red-orange or black.
3. Draw one scene in profile: a runner, a discus thrower, a hero with a shield.
4. Add a meander border at the neck and bottom.

~~~art
steps greek-vase
~~~

~~~art
tasks
1. What did the Greeks believe beauty was?
2. Where does the Parthenon stand and whose temple is it?
3. Name the three orders of columns.
4. Which order has volutes?
5. Which temple in Armenia is in the Greek style?
6. How does a red-figure vase look?
7. Draw a Greek vase with a scene in profile and a meander border.
~~~

~~~art
hints
1. Harmony, the right measure of every part. 2. On the Acropolis in Athens; the temple of Athena. 3. Doric, Ionic, Corinthian. 4. The Ionic. 5. Garni. 6. The figures stay red-orange, the background is black. 7. Your work.
~~~`,
        hy: `## Ներդաշնակություն և չափ

Հին հույները հավատում էին, որ գեղեցկությունը **ներդաշնակությունն** է՝ յուրաքանչյուր մասի ճիշտ չափը։ Նրանք հիանում էին ուժեղ, առողջ մարդկային մարմնով և նրա պատվին անցկացնում էին **Օլիմպիական խաղերը**։

## Պարթենոն

Աթենքի **Ակրոպոլիս** բլրի վրա կանգնած է **Պարթենոնը**՝ Աթենաս աստվածուհու տաճարը, որը կառուցվել է սպիտակ մարմարից ք․ ա․ 5-րդ դարում։ Նրա շուրջը սյուների շարքեր են կանգնած։ Նրանում ամեն ինչ հանդարտ է, հավասարակշռված և համաչափ։

~~~art
pic greek-temple
~~~

## Սյուների երեք օրդերը

| Օրդեր | Խոյակ (սյան գագաթը) | Բնավորություն |
|---|---|---|
| **դորիական** | պարզ կլոր բարձիկ և քառակուսի սալ | ուժեղ, խիստ, «արական» |
| **իոնիական** | երկու գանգուր՝ **վոլյուտներ** | ավելի թեթև, նրբագեղ |
| **կորնթոսյան** | ականթի տերևների զամբյուղ | հարուստ, տոնական |

Հայաստանում կա հունական ոճի տաճար՝ **Գառնին** (մ․ թ․ 1-ին դար)՝ իոնիական սյուներով, կանգնած խոր կիրճի վերևում։

~~~art
pic orders
~~~

## Նկարազարդ սափորներ

Հունական սափորներն ունեին տարբեր ձևեր տարբեր նպատակների համար՝ **ամֆորա** գինու և յուղի համար, **կիլիկ** խմելու համար։ Դրանք զարդարվում էին աստվածների, հերոսների և մարզիկների տեսարաններով։

| Ոճ | Ինչպես է երևում |
|---|---|
| **սևաֆիգուր** | սև պատկերներ կարմրանարնջագույն կավի վրա |
| **կարմրաֆիգուր** | պատկերները մնում են կարմրանարնջագույն, ֆոնը ներկվում է սև |

Պատկերները ցույց են տրվում **պրոֆիլով**, շարժման մեջ, հստակ եզրագծով։ Տեսարանի շուրջը **մեանդրի** եզրագծեր են՝ ուղիղ անկյուններով ծռված գիծ, ինչպես վազող ալիք։

~~~art
pattern layout=strip rhythm=repeat palettes=egypt motifs=wave,spiral,leaf
~~~

## Նկարի՛ր սափոր

1. Ծալի՛ր թերթը կիսով չափ և ծալքի երկայնքով նկարի՛ր սափորի կեսը, կտրի՛ր, որպեսզի համաչափ լինի։
2. Ներկի՛ր սափորը կարմրանարնջագույն կամ սև։
3. Նկարի՛ր մեկ տեսարան պրոֆիլով՝ վազորդ, սկավառակ նետող, վահանով հերոս։
4. Վզին և ներքևում ավելացրու՛ մեանդրի եզրագիծ։

~~~art
steps greek-vase
~~~

~~~art
tasks
1. Ի՞նչ էին հույները համարում գեղեցկություն։
2. Որտե՞ղ է կանգնած Պարթենոնը, և ո՞ւմ տաճարն է այն։
3. Անվանի՛ր սյուների երեք օրդերը։
4. Ո՞ր օրդերն ունի վոլյուտներ։
5. Հայաստանի ո՞ր տաճարն է հունական ոճով։
6. Ինչպե՞ս է երևում կարմրաֆիգուր սափորը։
7. Նկարի՛ր հունական սափոր՝ պրոֆիլով տեսարանով և մեանդրի եզրագծով։
~~~

~~~art
hints
1. Ներդաշնակությունը՝ յուրաքանչյուր մասի ճիշտ չափը։ 2. Աթենքի Ակրոպոլիսում, Աթենասի տաճարն է։ 3. Դորիական, իոնիական, կորնթոսյան։ 4. Իոնիականը։ 5. Գառնին։ 6. Պատկերները մնում են կարմրանարնջագույն, ֆոնը սև է։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Гармония и мера

Древние греки считали, что красота — это **гармония**: правильная мера каждой части. Они восхищались сильным, здоровым телом человека и в его честь проводили **Олимпийские игры**.

## Парфенон

На холме **Акрополь** в Афинах стоит **Парфенон** — храм богини Афины, построенный из белого мрамора в V веке до н. э. Вокруг него стоят ряды колонн. Всё в нём спокойно, уравновешенно и соразмерно.

~~~art
pic greek-temple
~~~

## Три ордера колонн

| Ордер | Капитель (верх колонны) | Характер |
|---|---|---|
| **дорический** | простая круглая подушка и квадратная плита | сильный, строгий, «мужской» |
| **ионический** | два завитка — **волюты** | более лёгкий, изящный |
| **коринфский** | корзинка из листьев аканта | пышный, праздничный |

В Армении есть храм в греческом стиле — **Гарни** (I век н. э.) с ионическими колоннами, стоящий над глубоким ущельем.

~~~art
pic orders
~~~

## Расписные вазы

Греческие вазы имели разную форму для разных целей: **амфора** — для вина и масла, **килик** — для питья. Их украшали сценами с богами, героями и атлетами.

| Стиль | Как выглядит |
|---|---|
| **чернофигурный** | чёрные фигуры на красно-оранжевой глине |
| **краснофигурный** | фигуры остаются красно-оранжевыми, фон закрашен чёрным |

Фигуры изображены **в профиль**, в движении, с чётким контуром. Вокруг сцены — бордюры из **меандра**: линии, изломанной под прямым углом, как бегущая волна.

~~~art
pattern layout=strip rhythm=repeat palettes=egypt motifs=wave,spiral,leaf
~~~

## Нарисуй вазу

1. Сложи лист пополам и нарисуй половину вазы по сгибу; вырежи — получится симметрично.
2. Раскрась вазу красно-оранжевым или чёрным.
3. Нарисуй одну сцену в профиль: бегун, метатель диска, герой со щитом.
4. Добавь меандр на горлышке и внизу.

~~~art
steps greek-vase
~~~

~~~art
tasks
1. Что греки считали красотой?
2. Где стоит Парфенон и чей это храм?
3. Назови три ордера колонн.
4. У какого ордера есть волюты?
5. Какой храм в Армении построен в греческом стиле?
6. Как выглядит краснофигурная ваза?
7. Нарисуй греческую вазу со сценой в профиль и меандром.
~~~

~~~art
hints
1. Гармонию, правильную меру каждой части. 2. На Акрополе в Афинах; храм Афины. 3. Дорический, ионический, коринфский. 4. У ионического. 5. Гарни. 6. Фигуры красно-оранжевые, фон чёрный. 7. Твоя работа.
~~~`,
      },
      [
        q(t("The Parthenon is a temple of…", "Պարթենոնը … տաճարն է։", "Парфенон — храм…"), [t("Athena", "Աթենասի", "Афины"), t("Khaldi", "Խալդիի", "Халди"), t("Zeus only", "միայն Զևսի", "только Зевса")], 0),
        q(t("Volutes are on the capital of the … order.", "Վոլյուտները … օրդերի խոյակին են։", "Волюты — на капители … ордера."), [t("Doric", "դորիական", "дорического"), t("Ionic", "իոնիական", "ионического"), t("Gothic", "գոթական", "готического")], 1),
        q(t("A basket of acanthus leaves is the … capital.", "Ականթի տերևների զամբյուղը … խոյակն է։", "Корзинка из листьев аканта — … капитель."), [t("Doric", "դորիական", "дорическая"), t("Ionic", "իոնիական", "ионическая"), t("Corinthian", "կորնթոսյան", "коринфская")], 2),
        q(t("Which Armenian temple has Ionic columns?", "Հայկական ո՞ր տաճարն ունի իոնիական սյուներ։", "У какого армянского храма ионические колонны?"), [t("Garni", "Գառնին", "Гарни"), t("Haghpat", "Հաղպատը", "Ахпат"), t("Geghard", "Գեղարդը", "Гегард")], 0),
        q(t("On a black-figure vase the figures are…", "Սևաֆիգուր սափորի վրա պատկերները…", "На чернофигурной вазе фигуры…"), [t("red", "կարմիր են", "красные"), t("black", "սև են", "чёрные"), t("blue", "կապույտ են", "синие")], 1),
        q(t("A line bent at right angles like a running wave is a…", "Ուղիղ անկյուններով ծռված, վազող ալիքի նման գիծը…", "Линия, изломанная под прямым углом, как бегущая волна, — это…"), [t("volute", "վոլյուտ է", "волюта"), t("minaret", "մինարեթ է", "минарет"), t("meander", "մեանդր է", "меандр")], 2),
      ],
    ),
    lesson(
      "medieval-europe",
      ["Medieval Europe: Gothic cathedrals and towns", "Միջնադարյան Եվրոպա․ գոթական տաճարներ և քաղաքներ", "Европейские города Средневековья: готика"],
      {
        en: ["Know the features of Gothic architecture", "Describe a medieval European town", "Make a «stained-glass window» from coloured paper"],
        hy: ["Իմանալ գոթական ճարտարապետության առանձնահատկությունները", "Նկարագրել միջնադարյան եվրոպական քաղաքը", "Գունավոր թղթից պատրաստել «վիտրաժ»"],
        ru: ["Знать черты готической архитектуры", "Описывать средневековый европейский город", "Сделать «витраж» из цветной бумаги"],
      },
      {
        en: `## Stone that reaches for the sky

In Western Europe in the 12th–15th centuries a new style appeared: **Gothic**. Cathedrals became very tall, light and full of coloured light.

| Feature | What it is |
|---|---|
| **pointed arch** | an arch with a sharp top; it lifts the eye upwards |
| **spires** | tall thin towers like needles |
| **stained glass** | windows of coloured glass pieces joined with lead: pictures made of light |
| **rose window** | a big round stained-glass window like a flower |
| **flying buttresses** | stone «arms» outside that support the high walls |

Famous Gothic cathedrals: **Notre-Dame** in Paris and **Cologne Cathedral** in Germany with its two huge spires.

~~~art
pic gothic
~~~

## A medieval town

- The town was surrounded by walls; its streets were **narrow and winding**.
- In the centre there was a **market square** with the town hall and the cathedral.
- Houses stood close together, tall and narrow, often with a wooden frame filled with plaster: **half-timbered** houses.
- Craftsmen hung **signs** above their workshops: a boot for a shoemaker, a pretzel for a baker, a key for a locksmith.
- Knights lived in **castles**; their shields carried **coats of arms**.

## Make a stained-glass window

1. Draw a tall window with a pointed arch on black paper.
2. Draw a simple picture inside: a flower, a bird, a knight, a rose.
3. Cut out the coloured parts, leaving thick black lines between them, like lead.
4. Glue coloured tissue or tracing paper behind the holes.
5. Hang it on the window and look at the light coming through.

~~~art
pic stained-glass
~~~

~~~art
sketch paper=black guide=circle
Stained glass on screen: draw thick dark lead lines first, then fill the pieces with bright colours.
~~~

~~~art
tasks
1. In which centuries did the Gothic style appear?
2. What does a pointed arch do?
3. What is stained glass?
4. What is a rose window?
5. Describe the streets of a medieval town.
6. What sign would a baker hang over his shop?
7. Make a stained-glass window with a pointed arch.
~~~

~~~art
hints
1. In the 12th–15th centuries. 2. It lifts the eye upwards. 3. A window of coloured glass pieces joined with lead. 4. A big round stained-glass window like a flower. 5. Narrow and winding. 6. A pretzel. 7. Your work.
~~~`,
        hy: `## Դեպի երկինք ձգվող քար

Արևմտյան Եվրոպայում 12–15-րդ դարերում նոր ոճ հայտնվեց՝ **գոթիկա**։ Տաճարները դարձան շատ բարձր, լուսավոր և գունավոր լույսով լի։

| Առանձնահատկություն | Ինչ է |
|---|---|
| **սլաքաձև կամար** | սուր գագաթով կամար, այն հայացքը բարձրացնում է վեր |
| **սրածայր աշտարակներ** | ասեղների նման բարձր, բարակ աշտարակներ |
| **վիտրաժ** | կապարով միացված գունավոր ապակու կտորներից պատուհաններ՝ լույսից նկարներ |
| **վարդակ պատուհան** | ծաղկի նման մեծ կլոր վիտրաժ |
| **արտաքին հենարաններ** | դրսի քարե «ձեռքեր», որոնք պահում են բարձր պատերը |

Հայտնի գոթական տաճարներ՝ **Նոտր Դամը** Փարիզում և Գերմանիայի **Քյոլնի տաճարը**՝ երկու հսկա սրածայր աշտարակներով։

~~~art
pic gothic
~~~

## Միջնադարյան քաղաք

- Քաղաքը շրջապատված էր պարիսպներով, փողոցները **նեղ ու ոլորապտույտ** էին։
- Կենտրոնում **շուկայի հրապարակն** էր՝ քաղաքապետարանով և տաճարով։
- Տները կանգնած էին իրար մոտ՝ բարձր և նեղ, հաճախ սվաղով լցված փայտե կմախքով՝ **ֆախվերկ** տներ։
- Արհեստավորներն իրենց արհեստանոցների վերևում կախում էին **ցուցանակներ**՝ կոշիկ կոշկակարի համար, գալարահաց՝ հացթուխի համար, բանալի՝ փականագործի համար։
- Ասպետներն ապրում էին **դղյակներում**, նրանց վահանների վրա **զինանշաններ** էին։

## Պատրաստի՛ր վիտրաժ

1. Սև թղթի վրա նկարի՛ր սլաքաձև կամարով բարձր պատուհան։
2. Ներսում նկարի՛ր պարզ պատկեր՝ ծաղիկ, թռչուն, ասպետ, վարդ։
3. Կտրի՛ր գունավոր մասերը՝ նրանց միջև թողնելով հաստ սև գծեր, ինչպես կապարը։
4. Անցքերի հետևից սոսնձի՛ր գունավոր բարակ թուղթ կամ պատճենաթուղթ։
5. Կախի՛ր այն պատուհանին և նայի՛ր միջով անցնող լույսին։

~~~art
pic stained-glass
~~~

~~~art
sketch paper=black guide=circle
Վիտրաժ էկրանին․ նախ նկարի՛ր հաստ մուգ կապարե գծերը, հետո լցրու մասերը վառ գույներով։
~~~

~~~art
tasks
1. Ո՞ր դարերում հայտնվեց գոթական ոճը։
2. Ի՞նչ է անում սլաքաձև կամարը։
3. Ի՞նչ է վիտրաժը։
4. Ի՞նչ է վարդակ պատուհանը։
5. Նկարագրի՛ր միջնադարյան քաղաքի փողոցները։
6. Ի՞նչ ցուցանակ կկախեր հացթուխն իր խանութի վերևում։
7. Պատրաստի՛ր վիտրաժ սլաքաձև կամարով։
~~~

~~~art
hints
1. 12–15-րդ դարերում։ 2. Հայացքը բարձրացնում է վեր։ 3. Կապարով միացված գունավոր ապակու կտորներից պատուհան։ 4. Ծաղկի նման մեծ կլոր վիտրաժ։ 5. Նեղ ու ոլորապտույտ։ 6. Գալարահաց։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Камень, устремлённый в небо

В Западной Европе в XII–XV веках появился новый стиль — **готика**. Соборы стали очень высокими, светлыми и полными цветного света.

| Черта | Что это |
|---|---|
| **стрельчатая арка** | арка с острым верхом; она поднимает взгляд вверх |
| **шпили** | высокие тонкие башни, как иглы |
| **витраж** | окно из кусочков цветного стекла, соединённых свинцом: картина из света |
| **роза** | большое круглое витражное окно, похожее на цветок |
| **аркбутаны** | каменные «руки» снаружи, поддерживающие высокие стены |

Знаменитые готические соборы — **Нотр-Дам** в Париже и **Кёльнский собор** в Германии с двумя огромными шпилями.

~~~art
pic gothic
~~~

## Средневековый город

- Город окружали стены; улицы были **узкими и извилистыми**.
- В центре находилась **рыночная площадь** с ратушей и собором.
- Дома стояли тесно, высокие и узкие, часто с деревянным каркасом, заполненным штукатуркой, — **фахверк**.
- Ремесленники вешали над мастерскими **вывески**: сапог — у сапожника, крендель — у пекаря, ключ — у слесаря.
- Рыцари жили в **замках**, на их щитах были **гербы**.

## Сделай витраж

1. Нарисуй на чёрной бумаге высокое окно со стрельчатой аркой.
2. Внутри нарисуй простое изображение: цветок, птицу, рыцаря, розу.
3. Вырежи цветные части, оставив между ними толстые чёрные линии, как свинец.
4. Сзади приклей цветную папиросную бумагу или кальку.
5. Повесь работу на окно и посмотри на свет, проходящий сквозь неё.

~~~art
pic stained-glass
~~~

~~~art
sketch paper=black guide=circle
Витраж на экране: сначала толстые тёмные свинцовые линии, потом заполни кусочки яркими цветами.
~~~

~~~art
tasks
1. В каких веках появилась готика?
2. Что делает стрельчатая арка?
3. Что такое витраж?
4. Что такое роза в готическом соборе?
5. Опиши улицы средневекового города.
6. Какую вывеску повесил бы пекарь над лавкой?
7. Сделай витраж со стрельчатой аркой.
~~~

~~~art
hints
1. В XII–XV веках. 2. Поднимает взгляд вверх. 3. Окно из кусочков цветного стекла, соединённых свинцом. 4. Большое круглое витражное окно, похожее на цветок. 5. Узкие и извилистые. 6. Крендель. 7. Твоя работа.
~~~`,
      },
      [
        q(t("A Gothic arch is…", "Գոթական կամարը…", "Готическая арка —"), [t("pointed", "սլաքաձև է", "стрельчатая"), t("flat", "հարթ է", "плоская"), t("square", "քառակուսի է", "квадратная")], 0),
        q(t("A window of coloured glass joined with lead is a…", "Կապարով միացված գունավոր ապակու պատուհանը…", "Окно из цветного стекла, соединённого свинцом, — это…"), [t("fresco", "որմնանկար է", "фреска"), t("stained-glass window", "վիտրաժ է", "витраж"), t("mosaic floor", "խճանկարե հատակ է", "мозаичный пол")], 1),
        q(t("Notre-Dame is in…", "Նոտր Դամը գտնվում է…", "Нотр-Дам находится в…"), [t("Athens", "Աթենքում", "Афинах"), t("Samarkand", "Սամարղանդում", "Самарканде"), t("Paris", "Փարիզում", "Париже")], 2),
        q(t("Streets of a medieval town were…", "Միջնադարյան քաղաքի փողոցները…", "Улицы средневекового города были…"), [t("narrow and winding", "նեղ ու ոլորապտույտ էին", "узкими и извилистыми"), t("wide highways", "լայն մայրուղիներ էին", "широкими шоссе"), t("under water", "ջրի տակ էին", "под водой")], 0),
        q(t("A coat of arms was painted on a knight's…", "Զինանշանը նկարվում էր ասպետի…", "Герб рисовали на рыцарском…"), [t("boots", "կոշիկների վրա", "сапоге"), t("shield", "վահանի վրա", "щите"), t("horse's tail", "ձիու պոչին", "хвосте коня")], 1),
        q(t("Stone «arms» that support high walls outside are…", "Բարձր պատերը դրսից պահող քարե «ձեռքերը»…", "Каменные «руки», поддерживающие стены снаружи, — это…"), [t("minarets", "մինարեթներ են", "минареты"), t("volutes", "վոլյուտներ են", "волюты"), t("flying buttresses", "արտաքին հենարաններ են", "аркбутаны")], 2),
      ],
    ),
    lesson(
      "neighbours-art",
      ["Our neighbours: Georgia and Iran", "Մեր հարևանները․ Վրաստան և Իրան", "Наши соседи: Грузия и Иран"],
      {
        en: ["Know features of Georgian and Persian art", "Compare them with Armenian art: what is similar, what is different", "Draw a Svan tower village or a Persian garden"],
        hy: ["Իմանալ վրացական և պարսկական արվեստի առանձնահատկությունները", "Համեմատել դրանք հայկական արվեստի հետ՝ ինչն է նման, ինչը՝ տարբեր", "Նկարել սվանական աշտարակներով գյուղ կամ պարսկական այգի"],
        ru: ["Знать черты грузинского и персидского искусства", "Сравнивать их с армянским: что похоже, что отличается", "Нарисовать сванское селение с башнями или персидский сад"],
      },
      {
        en: `## Neighbours learn from each other

Armenia has lived side by side with Georgia and Iran for thousands of years. Masters travelled, traded and learned from each other, so their arts have much in common, but each keeps its own face.

## Georgia

| What | What is special |
|---|---|
| **churches** | stone churches with **cone domes on drums**, like Armenian ones; the old monastery of **Jvari** stands on a hill above the meeting of two rivers |
| **Svan towers** | in the mountain villages of **Svaneti** almost every family had a tall stone tower for defence; a village looks like a forest of towers |
| **Niko Pirosmani** | a self-taught painter who often painted on **black oilcloth**: feasts, animals, simple people of Tbilisi; his pictures are simple, calm and very sincere |

## Iran

| What | What is special |
|---|---|
| **Persian miniature** | bright pure colours, flat figures, gardens full of flowers, golden skies; very fine details |
| **carpets** | gardens, medallions and endless borders of flowers |
| **tiles** | blue and turquoise domes and portals, like in Central Asia |
| **Persian garden** | a garden divided into **four parts** by water channels, with a pool or pavilion in the centre |

~~~art
pattern layout=grid palettes=gzhel,armenian motifs=flower,star,leaf,bird
~~~

## What is similar to Armenian art

- Love for **ornament** and carpets.
- Stone architecture with domes (Georgia).
- Book miniature with bright colours and gold (Iran).

~~~art
pic carpet pomegranate grapevine
~~~

## Draw

**Svaneti:** a high horizon, snowy peaks, a group of stone houses with tall square towers with small windows at the top.

**Persian garden:** a square garden seen from above, two crossing channels of blue water, a pool in the centre, flowers and trees arranged symmetrically in four parts.

~~~art
sketch mode=mirror paper=cream
~~~

~~~art
tasks
1. Why do the arts of neighbouring peoples have much in common?
2. What do Georgian and Armenian churches have in common?
3. What were Svan towers for?
4. On what did Pirosmani often paint?
5. Describe a Persian garden.
6. Name three features of a Persian miniature.
7. Draw a Svan village with towers or a Persian garden.
~~~

~~~art
hints
1. Masters travelled, traded and learned from each other. 2. Stone walls and cone domes on drums. 3. For defence. 4. On black oilcloth. 5. A garden divided into four parts by water channels with a pool or pavilion in the centre. 6. Bright pure colours, flat figures, fine details (also gardens and golden skies). 7. Your work.
~~~`,
        hy: `## Հարևանները սովորում են իրարից

Հայաստանը հազարավոր տարիներ ապրել է Վրաստանի և Իրանի կողքին։ Վարպետները ճանապարհորդում էին, առևտուր անում և սովորում իրարից, ուստի նրանց արվեստը շատ ընդհանրություններ ունի, բայց յուրաքանչյուրը պահում է իր դեմքը։

## Վրաստան

| Ինչ | Ինչն է յուրահատուկ |
|---|---|
| **եկեղեցիներ** | քարե եկեղեցիներ **թմբուկների վրա կոնաձև գմբեթներով**, ինչպես հայկականները, հին **Ջվարի** վանքը կանգնած է երկու գետերի միախառնման վերևում բլրի վրա |
| **սվանական աշտարակներ** | **Սվանեթիի** լեռնային գյուղերում գրեթե յուրաքանչյուր ընտանիք ուներ պաշտպանական բարձր քարե աշտարակ, գյուղը նման է աշտարակների անտառի |
| **Նիկո Փիրոսմանի** | ինքնուս նկարիչ, որը հաճախ նկարում էր **սև մոմլաթի** վրա՝ խնջույքներ, կենդանիներ, Թբիլիսիի հասարակ մարդիկ, նրա նկարները պարզ են, հանդարտ և շատ անկեղծ |

## Իրան

| Ինչ | Ինչն է յուրահատուկ |
|---|---|
| **պարսկական մանրանկար** | վառ մաքուր գույներ, հարթ պատկերներ, ծաղիկներով լի այգիներ, ոսկե երկինք, շատ նուրբ մանրամասներ |
| **գորգեր** | այգիներ, մեդալյոններ և ծաղիկների անվերջ եզրագծեր |
| **սալիկներ** | կապույտ և փիրուզագույն գմբեթներ և պորտալներ, ինչպես Միջին Ասիայում |
| **պարսկական այգի** | ջրանցքներով **չորս մասի** բաժանված այգի՝ կենտրոնում ավազան կամ տաղավար |

~~~art
pattern layout=grid palettes=gzhel,armenian motifs=flower,star,leaf,bird
~~~

## Ինչն է նման հայկական արվեստին

- Սերը **զարդանախշի** և գորգերի հանդեպ։
- Գմբեթներով քարե ճարտարապետությունը (Վրաստան)։
- Վառ գույներով և ոսկով գրքային մանրանկարը (Իրան)։

~~~art
pic carpet pomegranate grapevine
~~~

## Նկարի՛ր

**Սվանեթի**՝ բարձր հորիզոն, ձյունածածկ գագաթներ, քարե տների խումբ՝ գագաթին փոքր պատուհաններով բարձր քառակուսի աշտարակներով։

**Պարսկական այգի**՝ վերևից տեսած քառակուսի այգի, կապույտ ջրի երկու խաչվող ջրանցք, կենտրոնում ավազան, չորս մասերում համաչափ դասավորված ծաղիկներ և ծառեր։

~~~art
sketch mode=mirror paper=cream
~~~

~~~art
tasks
1. Ինչո՞ւ է հարևան ժողովուրդների արվեստը շատ ընդհանրություններ ունենում։
2. Ի՞նչ ընդհանուր բան ունեն վրացական և հայկական եկեղեցիները։
3. Ինչի՞ համար էին սվանական աշտարակները։
4. Ինչի՞ վրա էր Փիրոսմանին հաճախ նկարում։
5. Նկարագրի՛ր պարսկական այգին։
6. Անվանի՛ր պարսկական մանրանկարի երեք առանձնահատկություն։
7. Նկարի՛ր աշտարակներով սվանական գյուղ կամ պարսկական այգի։
~~~

~~~art
hints
1. Վարպետները ճանապարհորդում էին, առևտուր անում և սովորում իրարից։ 2. Քարե պատեր և կոնաձև գմբեթներ թմբուկների վրա։ 3. Պաշտպանության համար։ 4. Սև մոմլաթի վրա։ 5. Ջրանցքներով չորս մասի բաժանված այգի՝ կենտրոնում ավազան կամ տաղավար։ 6. Վառ մաքուր գույներ, հարթ պատկերներ, նուրբ մանրամասներ (նաև այգիներ և ոսկե երկինք)։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Соседи учатся друг у друга

Армения тысячи лет живёт бок о бок с Грузией и Ираном. Мастера путешествовали, торговали и учились друг у друга, поэтому в их искусстве много общего, но каждое сохраняет своё лицо.

## Грузия

| Что | Чем особенное |
|---|---|
| **храмы** | каменные храмы с **конусными куполами на барабанах**, как армянские; древний монастырь **Джвари** стоит на холме над слиянием двух рек |
| **сванские башни** | в горных сёлах **Сванетии** почти у каждой семьи была высокая каменная башня для защиты; селение похоже на лес башен |
| **Нико Пиросмани** | художник-самоучка, часто писал на **чёрной клеёнке**: застолья, животных, простых людей Тбилиси; его картины простые, спокойные и очень искренние |

## Иран

| Что | Чем особенное |
|---|---|
| **персидская миниатюра** | яркие чистые цвета, плоские фигуры, сады, полные цветов, золотое небо; очень тонкие детали |
| **ковры** | сады, медальоны и бесконечные цветочные каймы |
| **изразцы** | синие и бирюзовые купола и порталы, как в Средней Азии |
| **персидский сад** | сад, разделённый каналами с водой на **четыре части**, с бассейном или павильоном в центре |

~~~art
pattern layout=grid palettes=gzhel,armenian motifs=flower,star,leaf,bird
~~~

## Что похоже на армянское искусство

- Любовь к **орнаменту** и коврам.
- Каменная архитектура с куполами (Грузия).
- Книжная миниатюра с яркими красками и золотом (Иран).

~~~art
pic carpet pomegranate grapevine
~~~

## Нарисуй

**Сванетия:** высокий горизонт, снежные вершины, группа каменных домов с высокими квадратными башнями с маленькими окнами наверху.

**Персидский сад:** квадратный сад сверху, два пересекающихся канала голубой воды, бассейн в центре, цветы и деревья симметрично в четырёх частях.

~~~art
sketch mode=mirror paper=cream
~~~

~~~art
tasks
1. Почему в искусстве соседних народов много общего?
2. Что общего у грузинских и армянских храмов?
3. Для чего служили сванские башни?
4. На чём часто писал Пиросмани?
5. Опиши персидский сад.
6. Назови три черты персидской миниатюры.
7. Нарисуй сванское селение с башнями или персидский сад.
~~~

~~~art
hints
1. Мастера путешествовали, торговали и учились друг у друга. 2. Каменные стены и конусные купола на барабанах. 3. Для защиты. 4. На чёрной клеёнке. 5. Сад, разделённый каналами на четыре части, с бассейном или павильоном в центре. 6. Яркие чистые цвета, плоские фигуры, тонкие детали (а также сады и золотое небо). 7. Твоя работа.
~~~`,
      },
      [
        q(t("Svan towers were built for…", "Սվանական աշտարակները կառուցվում էին…", "Сванские башни строили для…"), [t("defence", "պաշտպանության համար", "защиты"), t("storing ice cream", "պաղպաղակ պահելու համար", "хранения мороженого"), t("watching the sea", "ծովին նայելու համար", "наблюдения за морем")], 0),
        q(t("Pirosmani often painted on…", "Փիրոսմանին հաճախ նկարում էր…", "Пиросмани часто писал на…"), [t("parchment", "մագաղաթի վրա", "пергаменте"), t("black oilcloth", "սև մոմլաթի վրա", "чёрной клеёнке"), t("glass", "ապակու վրա", "стекле")], 1),
        q(t("A Persian garden is divided into…", "Պարսկական այգին բաժանված է…", "Персидский сад разделён на…"), [t("two parts", "երկու մասի", "две части"), t("ten parts", "տասը մասի", "десять частей"), t("four parts", "չորս մասի", "четыре части")], 2),
        q(t("Georgian churches, like Armenian ones, have…", "Վրացական եկեղեցիները, ինչպես հայկականները, ունեն…", "Грузинские храмы, как и армянские, имеют…"), [t("cone domes on drums", "կոնաձև գմբեթներ թմբուկների վրա", "конусные купола на барабанах"), t("onion domes", "սոխաձև գմբեթներ", "луковичные главы"), t("glass roofs", "ապակե տանիքներ", "стеклянные крыши")], 0),
        q(t("A Persian miniature has…", "Պարսկական մանրանկարն ունի…", "В персидской миниатюре…"), [t("grey colours only", "միայն մոխրագույն գույներ", "только серые цвета"), t("bright colours and fine details", "վառ գույներ և նուրբ մանրամասներ", "яркие цвета и тонкие детали"), t("no figures", "պատկերներ չունի", "нет фигур")], 1),
        q(t("Jvari monastery stands…", "Ջվարի վանքը կանգնած է…", "Монастырь Джвари стоит…"), [t("in a desert", "անապատում", "в пустыне"), t("on an island in Lake Onega", "Օնեգա լճի կղզում", "на острове в Онежском озере"), t("on a hill above two rivers", "երկու գետերի վերևում բլրի վրա", "на холме над двумя реками")], 2),
      ],
    ),
  ],
};
