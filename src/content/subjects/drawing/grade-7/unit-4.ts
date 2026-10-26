import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  title: t("Man in the mirror of design", "Մարդը դիզայնի հայելում", "Человек в зеркале дизайна и архитектуры"),
  summary: t(
    "Costume design, image and style, brand identity, photography and the moving image, design in the digital world.",
    "Հագուստի դիզայն, կերպար և ոճ, բրենդի ինքնություն, լուսանկարչություն և շարժուն պատկեր, դիզայնը թվային աշխարհում։",
    "Дизайн костюма, образ и стиль, фирменный стиль, фотография и движущееся изображение, дизайн в цифровом мире.",
  ),
  lessons: [
    lesson(
      "fashion-design",
      ["Costume design: from taraz to streetwear", "Հագուստի դիզայն․ տարազից մինչև ժամանակակից", "Мода, культура и ты"],
      {
        en: ["Know how clothing reflects the time, the place and the person", "Learn the basics of costume design: silhouette, proportion, fabric, detail", "Design a costume collection sketch"],
        hy: ["Իմանալ, թե ինչպես է հագուստն արտացոլում ժամանակը, վայրը և մարդուն", "Սովորել հագուստի դիզայնի հիմունքները՝ ուրվագիծ, համամասնություն, գործվածք, մանրամասն", "Ստեղծել հագուստի հավաքածուի էսքիզ"],
        ru: ["Знать, как одежда отражает время, место и человека", "Освоить основы дизайна костюма: силуэт, пропорции, ткань, детали", "Нарисовать эскиз коллекции костюма"],
      },
      {
        en: `## Clothes speak

Clothing protects us from cold and heat, but it also says who we are: our work, our country, our age, our mood. A fashion designer works with the human figure and must know proportions, movement and materials.

## The silhouette

The **silhouette** is the outline of a costume. Designers name silhouettes by letters:

| Silhouette | Shape | Feeling |
|---|---|---|
| **A** | narrow at the top, wide at the bottom | light, young |
| **H** | straight, the same width | calm, strict |
| **X** | wide shoulders, narrow waist, wide skirt | elegant, festive |
| **O** | rounded, wide in the middle | soft, cosy |

~~~art
pic mode=silhouette taraz sarafan
The silhouette comes first. Guess the costume by its outline.
~~~

## The Armenian taraz

The **taraz** is the traditional Armenian costume. A woman's taraz has a long dress with an **arkhaluk** over it, a wide belt, an apron and a headdress with a veil; the colours and the embroidery differed from region to region. A man's taraz has a shirt, wide trousers, an arkhaluk and a **chukha** coat with a belt or a dagger. Today designers take its colours, embroidery and silhouettes into modern dresses, coats and even sports clothes.

~~~art
pic taraz embroidery
~~~

## How a designer works

1. **Idea and mood:** a theme, a season, a feeling; a mood board with colours, photos and fabrics.
2. **Sketches:** quick drawings of figures in costume, eight or nine heads tall.
3. **Fabric:** heavy wool hangs straight, light silk flows, denim keeps its shape.
4. **Construction:** the pattern, the pieces the costume is sewn from.
5. **Details:** collar, pockets, buttons, embroidery; they give character.
6. **Collection:** several costumes in one style, as a family.

~~~art
proportions
~~~

## Fashion and responsibility

Clothes are made in huge numbers and often thrown away quickly. Designers speak about **slow fashion**: good quality, repairs, second-hand clothes, local materials and traditional crafts instead of endless buying.

## Task

Make a mood board and then three sketches of a small collection on one theme, for example «Mountains», «Pomegranate» or «My city». Use one silhouette family and two or three colours. Add a detail inspired by the taraz.

~~~art
sketch guide=figure
~~~

~~~art
tasks
1. What does the silhouette of a costume mean?
2. Which silhouette is wide at the bottom and narrow at the top?
3. Name three parts of a woman's or a man's taraz.
4. Why does the choice of fabric matter?
5. What is a mood board?
6. What does slow fashion mean?
7. Make a mood board and three sketches of a collection.
~~~

~~~art
hints
1. The outline of the costume. 2. The A silhouette. 3. For example: dress, arkhaluk, belt, apron, headdress; or shirt, wide trousers, arkhaluk, chukha. 4. Different fabrics hang and move differently, so they change the silhouette. 5. A board with colours, photos and fabrics that sets the mood of a collection. 6. Good quality, repairs and local crafts instead of buying and throwing away. 7. Your work.
~~~`,
        hy: `## Հագուստը խոսում է

Հագուստը պաշտպանում է մեզ ցրտից և շոգից, բայց նաև ասում է, թե ովքեր ենք մենք՝ մեր աշխատանքը, երկիրը, տարիքը, տրամադրությունը։ Հագուստի դիզայներն աշխատում է մարդու կազմվածքի հետ և պետք է իմանա համամասնություններ, շարժում և նյութեր։

## Ուրվագիծը

**Ուրվագիծը** հագուստի եզրագիծն է։ Դիզայներներն ուրվագծերն անվանում են տառերով.

| Ուրվագիծ | Ձև | Զգացողություն |
|---|---|---|
| **A** | վերևում նեղ, ներքևում լայն | թեթև, երիտասարդական |
| **H** | ուղիղ, նույն լայնությամբ | հանգիստ, խիստ |
| **X** | լայն ուսեր, նեղ գոտկատեղ, լայն փեշ | նրբագեղ, տոնական |
| **O** | կլորացված, մեջտեղում լայն | փափուկ, հարմարավետ |

~~~art
pic mode=silhouette taraz sarafan
Ուրվագիծը առաջինն է։ Գուշակի՛ր տարազը ըստ ուրվագծի։
~~~

## Հայկական տարազը

**Տարազը** ավանդական հայկական հագուստն է։ Կանացի տարազն ունի երկար զգեստ՝ վրայից **արխալուխ**, լայն գոտի, գոգնոց և գլխաշոր։ Գույներն ու ասեղնագործությունը տարբերվում էին ըստ գավառների։ Տղամարդու տարազն ունի շապիկ, լայն շալվար, արխալուխ և **չուխա**՝ գոտիով կամ դաշույնով։ Այսօր դիզայներները նրա գույները, ասեղնագործությունն ու ուրվագծերը տեղափոխում են ժամանակակից զգեստների, վերարկուների և նույնիսկ սպորտային հագուստի մեջ։

~~~art
pic taraz embroidery
~~~

## Ինչպես է աշխատում դիզայները

1. **Գաղափար և տրամադրություն**՝ թեմա, եղանակ, զգացողություն, տրամադրության տախտակ՝ գույներով, լուսանկարներով և գործվածքներով։
2. **Էսքիզներ**՝ հագուստով կերպարների արագ նկարներ՝ ութ-ինը գլխի բարձրությամբ։
3. **Գործվածք**՝ ծանր բուրդն ուղիղ է ընկնում, թեթև մետաքսը հոսում է, ջինսը պահում է ձևը։
4. **Կառուցվածք**՝ ձևվածքը, այն կտորները, որոնցից կարվում է հագուստը։
5. **Մանրամասներ**՝ օձիք, գրպաններ, կոճակներ, ասեղնագործություն, դրանք բնավորություն են տալիս։
6. **Հավաքածու**՝ մի քանի հագուստ մեկ ոճով, որպես ընտանիք։

~~~art
proportions
~~~

## Նորաձևություն և պատասխանատվություն

Հագուստն արտադրվում է հսկայական քանակով և հաճախ արագ դեն նետվում։ Դիզայներները խոսում են **դանդաղ նորաձևության** մասին՝ լավ որակ, նորոգում, օգտագործված հագուստ, տեղական նյութեր և ավանդական արհեստներ՝ անվերջ գնումների փոխարեն։

## Առաջադրանք

Պատրաստիր տրամադրության տախտակ, ապա երեք էսքիզ փոքր հավաքածուի՝ մեկ թեմայով, օրինակ՝ «Լեռներ», «Նուռ» կամ «Իմ քաղաքը»։ Օգտագործիր ուրվագծերի մեկ ընտանիք և երկու-երեք գույն։ Ավելացրու տարազից ներշնչված մանրամաս։

~~~art
sketch guide=figure
~~~

~~~art
tasks
1. Ինչ է նշանակում հագուստի ուրվագիծը։
2. Որ ուրվագիծն է ներքևում լայն, վերևում՝ նեղ։
3. Անվանիր կանացի կամ տղամարդու տարազի երեք մաս։
4. Ինչու է կարևոր գործվածքի ընտրությունը։
5. Ինչ է տրամադրության տախտակը։
6. Ինչ է նշանակում դանդաղ նորաձևությունը։
7. Պատրաստիր տրամադրության տախտակ և հավաքածուի երեք էսքիզ։
~~~

~~~art
hints
1. Հագուստի եզրագիծը։ 2. A ուրվագիծը։ 3. Օրինակ՝ զգեստ, արխալուխ, գոտի, գոգնոց, գլխաշոր կամ շապիկ, լայն շալվար, արխալուխ, չուխա։ 4. Տարբեր գործվածքներ տարբեր կերպ են ընկնում և շարժվում, ուստի փոխում են ուրվագիծը։ 5. Տախտակ՝ գույներով, լուսանկարներով և գործվածքներով, որը սահմանում է հավաքածուի տրամադրությունը։ 6. Լավ որակ, նորոգում և տեղական արհեստներ՝ գնելու և դեն նետելու փոխարեն։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Одежда говорит

Одежда защищает нас от холода и жары, но ещё и рассказывает, кто мы: наша работа, страна, возраст, настроение. Дизайнер костюма работает с фигурой человека и должен знать пропорции, движение и материалы.

## Силуэт

**Силуэт** — это очертание костюма. Дизайнеры называют силуэты буквами:

| Силуэт | Форма | Впечатление |
|---|---|---|
| **А** | узкий вверху, широкий внизу | лёгкий, молодой |
| **Н** | прямой, одной ширины | спокойный, строгий |
| **Х** | широкие плечи, узкая талия, широкая юбка | нарядный, праздничный |
| **О** | округлый, широкий в середине | мягкий, уютный |

~~~art
pic mode=silhouette taraz sarafan
Силуэт — прежде всего. Угадай костюм по контуру.
~~~

## Армянский тараз

**Тараз** — традиционный армянский костюм. Женский тараз — длинное платье, поверх него **архалух**, широкий пояс, передник и головной убор с покрывалом; цвета и вышивка различались по областям. Мужской тараз — рубаха, широкие штаны, архалух и **чуха** с поясом или кинжалом. Сегодня дизайнеры переносят его цвета, вышивку и силуэты в современные платья, пальто и даже спортивную одежду.

~~~art
pic taraz embroidery
~~~

## Как работает дизайнер

1. **Идея и настроение:** тема, сезон, чувство; мудборд с цветами, фотографиями и тканями.
2. **Эскизы:** быстрые рисунки фигур в костюме, высотой в восемь-девять голов.
3. **Ткань:** тяжёлая шерсть падает прямо, лёгкий шёлк струится, джинса держит форму.
4. **Конструкция:** выкройка, детали, из которых сшит костюм.
5. **Детали:** воротник, карманы, пуговицы, вышивка — они дают характер.
6. **Коллекция:** несколько костюмов в одном стиле, как семья.

~~~art
proportions
~~~

## Мода и ответственность

Одежду выпускают огромными партиями и часто быстро выбрасывают. Дизайнеры говорят о **медленной моде**: хорошее качество, починка, вещи из вторых рук, местные материалы и традиционные ремёсла вместо бесконечных покупок.

## Задание

Сделай мудборд, а затем три эскиза небольшой коллекции на одну тему, например «Горы», «Гранат» или «Мой город». Используй одно семейство силуэтов и два-три цвета. Добавь деталь, вдохновлённую таразом.

~~~art
sketch guide=figure
~~~

~~~art
tasks
1. Что означает силуэт костюма?
2. Какой силуэт узкий вверху и широкий внизу?
3. Назови три части женского или мужского тараза.
4. Почему важен выбор ткани?
5. Что такое мудборд?
6. Что означает медленная мода?
7. Сделай мудборд и три эскиза коллекции.
~~~

~~~art
hints
1. Очертание костюма. 2. Силуэт А. 3. Например: платье, архалух, пояс, передник, головной убор; или рубаха, широкие штаны, архалух, чуха. 4. Разные ткани по-разному падают и двигаются и меняют силуэт. 5. Доска с цветами, фотографиями и тканями, задающая настроение коллекции. 6. Качество, починка и местные ремёсла вместо покупок и выбрасывания. 7. Твоя работа.
~~~`,
      },
      [
        q(t("The outline of a costume is called the…", "Հագուստի եզրագիծը կոչվում է…", "Очертание костюма называется…"), [t("silhouette", "ուրվագիծ", "силуэтом"), t("pattern", "ձևվածք", "выкройкой"), t("detail", "մանրամաս", "деталью")], 0),
        q(t("Wide shoulders, narrow waist and a wide skirt make the … silhouette.", "Լայն ուսերը, նեղ գոտկատեղը և լայն փեշը կազմում են … ուրվագիծը։", "Широкие плечи, узкая талия и широкая юбка дают силуэт…"), [t("H", "H", "Н"), t("X", "X", "Х"), t("O", "O", "О")], 1),
        q(t("The arkhaluk is part of the…", "Արխալուխը մաս է կազմում…", "Архалух — часть…"), [t("Japanese kimono", "ճապոնական կիմոնոյի", "японского кимоно"), t("Russian sarafan", "ռուսական սարաֆանի", "русского сарафана"), t("Armenian taraz", "հայկական տարազի", "армянского тараза")], 2),
        q(t("A board with colours, photos and fabrics for a collection is a…", "Հավաքածուի համար գույներով, լուսանկարներով և գործվածքներով տախտակը…", "Доска с цветами, фотографиями и тканями для коллекции — это…"), [t("mood board", "տրամադրության տախտակ է", "мудборд"), t("plan", "հատակագիծ է", "план"), t("net", "փռվածք է", "развёртка")], 0),
        q(t("Which fabric keeps its shape best?", "Որ գործվածքն է լավագույնս պահում ձևը։", "Какая ткань лучше всего держит форму?"), [t("light silk", "թեթև մետաքսը", "лёгкий шёлк"), t("denim", "ջինսը", "джинса"), t("fine chiffon", "բարակ շիֆոնը", "тонкий шифон")], 1),
        q(t("Slow fashion means…", "Դանդաղ նորաձևությունը նշանակում է…", "Медленная мода означает…"), [t("buying more every week", "ամեն շաբաթ ավելի շատ գնել", "покупать больше каждую неделю"), t("wearing only black", "հագնել միայն սև", "носить только чёрное"), t("quality, repair and local crafts", "որակ, նորոգում և տեղական արհեստներ", "качество, починку и местные ремёсла")], 2),
      ],
    ),
    lesson(
      "image-style",
      ["Image and style", "Կերպար և ոճ", "Образ и стиль"],
      {
        en: ["Understand what style means in clothes, objects and behaviour", "Know the main modern styles of dress", "Build an image for a given situation and explain the choice"],
        hy: ["Հասկանալ, թե ինչ է ոճը հագուստում, առարկաներում և վարքում", "Իմանալ հագուստի հիմնական ժամանակակից ոճերը", "Կառուցել կերպար տվյալ իրավիճակի համար և բացատրել ընտրությունը"],
        ru: ["Понимать, что такое стиль в одежде, вещах и поведении", "Знать основные современные стили одежды", "Создать образ для заданной ситуации и объяснить выбор"],
      },
      {
        en: `## What is style?

**Style** is a set of features that repeat and make a whole: in architecture, in furniture, in clothes, in a way of speaking. A person's style is not expensive clothes; it is a choice that fits the person and the occasion.

## Main styles of dress

| Style | Signs | Where it fits |
|---|---|---|
| **Classic** | simple cut, calm colours, good materials | school, a concert, an important meeting |
| **Casual** | jeans, T-shirt, trainers, comfort | every day, friends, a walk |
| **Sport** | tracksuit, trainers, light fabrics | training, a game, a hike |
| **Romantic** | soft lines, flowers, light fabrics, lace | a party, a theatre |
| **Folk (ethnic)** | ornament, embroidery, natural fabrics | a festival, a national holiday |
| **Streetwear** | oversized shapes, prints, bright accessories | free time, with friends |

Mixing two styles can work well; mixing four at once usually does not.

~~~art
palette pastel loud earth greys
~~~

## The image

An **image** is the whole picture a person makes: clothes, shoes, hair, bag, way of standing and speaking. Designers build an image from:

* **The occasion:** a lesson, a sports day, a concert, an interview.
* **The proportions:** what suits this figure and height.
* **The colours:** two or three, with one accent.
* **The details:** a scarf, a badge, a bag can change the whole image.
* **Comfort:** if you cannot move or sit, the image has failed.

~~~art
mood scene=abstract moods=joy,quiet,loud
~~~

## Yourself and others

Clothes help to say who you are, but fashion should not command. A good question before buying: do I really like this, will I wear it many times, and does it fit my life? Judging other people by their clothes is unfair: style is a choice, not a mark of value.

## Task

Build three images for the same person and three situations: a school day, a sports competition and a family celebration. Draw the figure three times and describe colours, materials and details. Explain in two sentences why each image fits its situation.

~~~art
sketch guide=figure
~~~

~~~art
tasks
1. What is style?
2. Name three signs of the classic style.
3. Which style uses ornament and embroidery?
4. What is an image made of besides clothes?
5. Why is comfort part of a good image?
6. What questions should you ask before buying a new thing?
7. Draw three images of one person for three situations.
~~~

~~~art
hints
1. A set of repeating features that make a whole. 2. Simple cut, calm colours, good materials. 3. The folk or ethnic style. 4. Shoes, hair, bag, way of standing and speaking. 5. If you cannot move or sit comfortably, the image does not work. 6. Do I like it, will I wear it often, does it fit my life? 7. Your drawings.
~~~`,
        hy: `## Ինչ է ոճը

**Ոճը** գծերի ամբողջություն է, որոնք կրկնվում են և ստեղծում ամբողջություն՝ ճարտարապետության, կահույքի, հագուստի, խոսելաձևի մեջ։ Մարդու ոճը թանկ հագուստը չէ, այլ ընտրություն, որը համապատասխանում է մարդուն և առիթին։

## Հագուստի հիմնական ոճերը

| Ոճ | Նշաններ | Որտեղ է տեղին |
|---|---|---|
| **Դասական** | պարզ կտրվածք, հանգիստ գույներ, լավ նյութեր | դպրոց, համերգ, կարևոր հանդիպում |
| **Առօրյա** | ջինս, շապիկ, սպորտային կոշիկներ, հարմարավետություն | ամեն օր, ընկերներ, զբոսանք |
| **Սպորտային** | մարզահագուստ, սպորտային կոշիկներ, թեթև գործվածքներ | մարզում, խաղ, արշավ |
| **Ռոմանտիկ** | մեղմ գծեր, ծաղիկներ, թեթև գործվածքներ, ժանյակ | երեկույթ, թատրոն |
| **Ժողովրդական (էթնիկ)** | զարդանախշ, ասեղնագործություն, բնական գործվածքներ | փառատոն, ազգային տոն |
| **Փողոցային** | մեծացված ձևեր, տպագրություններ, վառ աքսեսուարներ | ազատ ժամանակ, ընկերների հետ |

Երկու ոճ խառնելը կարող է լավ ստացվել, չորսը միաժամանակ՝ սովորաբար ոչ։

~~~art
palette pastel loud earth greys
~~~

## Կերպարը

**Կերպարը** այն ամբողջ պատկերն է, որ ստեղծում է մարդը՝ հագուստ, կոշիկ, սանրվածք, պայուսակ, կանգնելու և խոսելու ձև։ Դիզայներները կերպարը կառուցում են՝

* **Առիթից**՝ դաս, սպորտային օր, համերգ, հարցազրույց։
* **Համամասնություններից**՝ ինչն է սազում այս կազմվածքին և հասակին։
* **Գույներից**՝ երկու-երեք, մեկ շեշտով։
* **Մանրամասներից**՝ շարֆը, նշանը, պայուսակը կարող են փոխել ամբողջ կերպարը։
* **Հարմարավետությունից**՝ եթե չես կարող շարժվել կամ նստել, կերպարը ձախողվել է։

~~~art
mood scene=abstract moods=joy,quiet,loud
~~~

## Դու և ուրիշները

Հագուստն օգնում է ասել, թե ով ես դու, բայց նորաձևությունը չպետք է հրամայի։ Լավ հարց գնելուց առաջ՝ իրո՞ք դուր է գալիս ինձ, շա՞տ անգամ կհագնեմ, և համապատասխանո՞ւմ է իմ կյանքին։ Մարդկանց հագուստով դատելն անարդար է. ոճն ընտրություն է, ոչ թե արժեքի նշան։

## Առաջադրանք

Կառուցիր երեք կերպար նույն մարդու և երեք իրավիճակի համար՝ դպրոցական օր, սպորտային մրցում և ընտանեկան տոն։ Նկարիր կերպարն երեք անգամ և նկարագրիր գույները, նյութերը և մանրամասները։ Երկու նախադասությամբ բացատրիր, թե ինչու է յուրաքանչյուր կերպար համապատասխանում իր իրավիճակին։

~~~art
sketch guide=figure
~~~

~~~art
tasks
1. Ինչ է ոճը։
2. Անվանիր դասական ոճի երեք նշան։
3. Որ ոճն է օգտագործում զարդանախշ և ասեղնագործություն։
4. Ինչից է կազմված կերպարը՝ բացի հագուստից։
5. Ինչու է հարմարավետությունը լավ կերպարի մաս։
6. Ինչ հարցեր պետք է տալ նոր իր գնելուց առաջ։
7. Նկարիր մեկ մարդու երեք կերպար երեք իրավիճակի համար։
~~~

~~~art
hints
1. Կրկնվող գծերի ամբողջություն, որը ստեղծում է մեկ ամբողջություն։ 2. Պարզ կտրվածք, հանգիստ գույներ, լավ նյութեր։ 3. Ժողովրդական կամ էթնիկ ոճը։ 4. Կոշիկից, սանրվածքից, պայուսակից, կանգնելու և խոսելու ձևից։ 5. Եթե չես կարող հարմար շարժվել կամ նստել, կերպարը չի աշխատում։ 6. Դուր է գալիս ինձ, հաճախ կհագնե՞մ, համապատասխանում է իմ կյանքին։ 7. Քո նկարները։
~~~`,
        ru: `## Что такое стиль

**Стиль** — это набор черт, которые повторяются и создают целое: в архитектуре, мебели, одежде, манере говорить. Стиль человека — не дорогая одежда, а выбор, который подходит ему и случаю.

## Основные стили одежды

| Стиль | Признаки | Где уместен |
|---|---|---|
| **Классический** | простой крой, спокойные цвета, хорошие материалы | школа, концерт, важная встреча |
| **Повседневный** | джинсы, футболка, кроссовки, удобство | каждый день, друзья, прогулка |
| **Спортивный** | спортивный костюм, кроссовки, лёгкие ткани | тренировка, игра, поход |
| **Романтический** | мягкие линии, цветы, лёгкие ткани, кружево | праздник, театр |
| **Народный (этнический)** | орнамент, вышивка, натуральные ткани | фестиваль, национальный праздник |
| **Уличный** | свободные формы, принты, яркие аксессуары | свободное время, с друзьями |

Смешать два стиля часто удаётся, четыре сразу — обычно нет.

~~~art
palette pastel loud earth greys
~~~

## Образ

**Образ** — это цельная картина, которую создаёт человек: одежда, обувь, причёска, сумка, манера держаться и говорить. Дизайнеры строят образ из:

* **Повода:** урок, спортивный день, концерт, собеседование.
* **Пропорций:** что идёт этой фигуре и росту.
* **Цветов:** двух-трёх, с одним акцентом.
* **Деталей:** шарф, значок, сумка могут изменить весь образ.
* **Удобства:** если нельзя двигаться и сидеть, образ не удался.

~~~art
mood scene=abstract moods=joy,quiet,loud
~~~

## Ты и другие

Одежда помогает сказать, кто ты, но мода не должна командовать. Хорошие вопросы перед покупкой: действительно ли мне это нравится, надену ли я это много раз, подходит ли это моей жизни? Судить людей по одежде несправедливо: стиль — это выбор, а не знак ценности человека.

## Задание

Построй три образа для одного человека и трёх ситуаций: школьный день, спортивные соревнования и семейный праздник. Нарисуй фигуру три раза и опиши цвета, материалы и детали. Двумя предложениями объясни, почему каждый образ подходит своей ситуации.

~~~art
sketch guide=figure
~~~

~~~art
tasks
1. Что такое стиль?
2. Назови три признака классического стиля.
3. В каком стиле используют орнамент и вышивку?
4. Из чего состоит образ, кроме одежды?
5. Почему удобство — часть хорошего образа?
6. Какие вопросы стоит задать перед покупкой новой вещи?
7. Нарисуй три образа одного человека для трёх ситуаций.
~~~

~~~art
hints
1. Набор повторяющихся черт, создающих целое. 2. Простой крой, спокойные цвета, хорошие материалы. 3. В народном (этническом). 4. Из обуви, причёски, сумки, манеры держаться и говорить. 5. Если нельзя удобно двигаться и сидеть, образ не работает. 6. Нравится ли мне, надену ли часто, подходит ли моей жизни. 7. Твои рисунки.
~~~`,
      },
      [
        q(t("Simple cut, calm colours and good materials belong to the … style.", "Պարզ կտրվածքը, հանգիստ գույներն ու լավ նյութերը պատկանում են … ոճին։", "Простой крой, спокойные цвета и хорошие материалы — это … стиль."), [t("classic", "դասական", "классический"), t("sport", "սպորտային", "спортивный"), t("streetwear", "փողոցային", "уличный")], 0),
        q(t("Ornament, embroidery and natural fabrics belong to the … style.", "Զարդանախշը, ասեղնագործությունը և բնական գործվածքները պատկանում են … ոճին։", "Орнамент, вышивка и натуральные ткани — это … стиль."), [t("classic", "դասական", "классический"), t("folk", "ժողովրդական", "народный"), t("casual", "առօրյա", "повседневный")], 1),
        q(t("An image includes clothes, shoes, hair and…", "Կերպարը ներառում է հագուստ, կոշիկ, սանրվածք և…", "Образ включает одежду, обувь, причёску и…"), [t("the price tag", "գնապիտակը", "ценник"), t("the weather", "եղանակը", "погоду"), t("the way of standing and speaking", "կանգնելու և խոսելու ձևը", "манеру держаться и говорить")], 2),
        q(t("How many colours are usually enough in one image?", "Սովորաբար քանի գույնն է բավական մեկ կերպարում։", "Сколько цветов обычно достаточно в одном образе?"), [t("two or three", "երկու կամ երեք", "два-три"), t("at least six", "առնվազն վեց", "не меньше шести"), t("only one", "միայն մեկը", "только один")], 0),
        q(t("If you cannot move or sit comfortably, the image…", "Եթե չես կարող հարմար շարժվել կամ նստել, կերպարը…", "Если нельзя удобно двигаться и сидеть, образ…"), [t("is perfect", "կատարյալ է", "идеален"), t("has failed", "ձախողվել է", "не удался"), t("costs more", "ավելի թանկ է", "стоит дороже")], 1),
        q(t("Judging a person by their clothes is…", "Մարդուն հագուստով դատելը…", "Судить о человеке по одежде —…"), [t("always correct", "միշտ ճիշտ է", "всегда верно"), t("a rule of design", "դիզայնի կանոն է", "правило дизайна"), t("unfair", "անարդար է", "несправедливо")], 2),
      ],
    ),
    lesson(
      "brand-identity",
      ["Logo and brand identity", "Լոգո և բրենդի ինքնություն", "Логотип и фирменный стиль"],
      {
        en: ["Know what a logo and a brand identity are", "Learn the rules of a good logo and the parts of an identity", "Design a logo and an identity for a school club or a small shop"],
        hy: ["Իմանալ, թե ինչ են լոգոն և բրենդի ինքնությունը", "Սովորել լավ լոգոյի կանոնները և ինքնության մասերը", "Նախագծել լոգո և ինքնություն դպրոցական ակումբի կամ փոքր խանութի համար"],
        ru: ["Знать, что такое логотип и фирменный стиль", "Усвоить правила хорошего логотипа и элементы фирменного стиля", "Создать логотип и стиль для школьного клуба или маленького магазина"],
      },
      {
        en: `## A sign that is remembered

A **logo** is the sign of an organisation, a product or an event. It works like a face: it is seen first and remembered longest.

Kinds of logos:

* **Letter mark:** initials, for example two letters in a circle.
* **Word mark:** the name written in a special font.
* **Symbol:** a picture without words, like a bird or a mountain.
* **Combined:** a symbol plus the name.
* **Emblem:** the name inside a shape, like a badge or a seal.

~~~art
pic logo-kinds
~~~

## Rules of a good logo

1. **Simple:** it can be drawn from memory.
2. **Memorable:** it has one clear idea.
3. **Works small and big:** on a pen and on a building.
4. **Works in one colour:** try it in black and white first.
5. **Honest:** it says what the organisation really is.
6. **Lasting:** not built on a short-lived fashion.

~~~art
steps logo
~~~

## Brand identity

A logo is only the beginning. A **brand identity** is the whole family of elements:

| Element | Example |
|---|---|
| **Logo** and its allowed versions | horizontal, square, one-colour |
| **Colours** | two or three, with exact numbers |
| **Fonts** | one for titles, one for text |
| **Pattern or graphic element** | a stripe, an ornament, a shape |
| **Carriers** | sign, badge, bag, T-shirt, poster, website, packaging |

The rules are written in a **brand book**, so that everybody uses the identity in the same way.

~~~art
palette digital
~~~

## Signs around us

Mount Ararat, the pomegranate, the apricot, the Armenian letter and carpet ornament often appear in Armenian logos. A good designer uses such symbols carefully, so that the sign stays simple and does not repeat someone else's.

~~~art
pic pictograms poster
~~~

## Task

Choose a school club, a bakery, a bookshop or a sports team. Draw ten quick ideas, choose one, and make the logo in black and white and in colour. Then show it on three carriers: a badge, a T-shirt and a bag. Write the rules: colours, fonts, free space around the logo.

~~~art
tasks
1. What is a logo?
2. Name three kinds of logos.
3. Why should a logo be checked in black and white?
4. Why must a logo work in a very small size?
5. What is a brand identity?
6. What is written in a brand book?
7. Design a logo and show it on three carriers.
~~~

~~~art
hints
1. The sign of an organisation, product or event. 2. Any three: letter mark, word mark, symbol, combined, emblem. 3. To be sure it works in one colour. 4. Because it is used on small things such as pens and badges. 5. The whole family of elements: logo, colours, fonts, pattern and carriers. 6. The rules for using the identity. 7. Your work.
~~~`,
        hy: `## Նշան, որը հիշվում է

**Լոգոն** կազմակերպության, ապրանքի կամ միջոցառման նշանն է։ Այն աշխատում է դեմքի պես՝ առաջինն է երևում և ամենաերկարը հիշվում։

Լոգոների տեսակները.

* **Տառային**՝ սկզբնատառեր, օրինակ՝ երկու տառ շրջանի մեջ։
* **Բառային**՝ անունը հատուկ տառատեսակով գրված։
* **Խորհրդանշական**՝ պատկեր առանց բառերի, օրինակ՝ թռչուն կամ լեռ։
* **Համակցված**՝ խորհրդանիշ և անուն։
* **Էմբլեմա**՝ անունը ձևի ներսում, ինչպես կրծքանշան կամ կնիք։

~~~art
pic logo-kinds
~~~

## Լավ լոգոյի կանոնները

1. **Պարզ**՝ կարելի է նկարել հիշողությամբ։
2. **Հիշվող**՝ ունի մեկ հստակ գաղափար։
3. **Աշխատում է փոքր և մեծ չափերով**՝ գրչի և շենքի վրա։
4. **Աշխատում է մեկ գույնով**՝ նախ փորձիր սև-սպիտակով։
5. **Ազնիվ**՝ ասում է, թե իրականում ինչ է կազմակերպությունը։
6. **Երկարակյաց**՝ կառուցված չէ կարճատև նորաձևության վրա։

~~~art
steps logo
~~~

## Բրենդի ինքնություն

Լոգոն միայն սկիզբն է։ **Բրենդի ինքնությունը** տարրերի ամբողջ ընտանիքն է.

| Տարր | Օրինակ |
|---|---|
| **Լոգո** և նրա թույլատրված տարբերակները | հորիզոնական, քառակուսի, միագույն |
| **Գույներ** | երկու-երեք՝ ճշգրիտ համարներով |
| **Տառատեսակներ** | մեկը՝ վերնագրերի, մեկը՝ տեքստի համար |
| **Նախշ կամ գրաֆիկական տարր** | շերտ, զարդանախշ, ձև |
| **Կրիչներ** | ցուցանակ, կրծքանշան, պայուսակ, շապիկ, պաստառ, կայք, փաթեթավորում |

Կանոնները գրվում են **բրենդբուքում**, որպեսզի բոլորն ինքնությունը նույն կերպ օգտագործեն։

~~~art
palette digital
~~~

## Նշաններ մեր շուրջը

Արարատ լեռը, նուռը, ծիրանը, հայերեն տառը և գորգի զարդանախշը հաճախ են հայտնվում հայկական լոգոներում։ Լավ դիզայներն այդպիսի խորհրդանիշներն օգտագործում է զգուշորեն, որպեսզի նշանը մնա պարզ և չկրկնի ուրիշինը։

~~~art
pic pictograms poster
~~~

## Առաջադրանք

Ընտրիր դպրոցական ակումբ, հացատուն, գրախանութ կամ սպորտային թիմ։ Նկարիր տասն արագ գաղափար, ընտրիր մեկը և պատրաստիր լոգոն սև-սպիտակով և գունավոր։ Հետո ցույց տուր այն երեք կրիչի վրա՝ կրծքանշան, շապիկ և պայուսակ։ Գրիր կանոնները՝ գույներ, տառատեսակներ, լոգոյի շուրջ ազատ տարածություն։

~~~art
tasks
1. Ինչ է լոգոն։
2. Անվանիր լոգոների երեք տեսակ։
3. Ինչու պետք է լոգոն ստուգել սև-սպիտակով։
4. Ինչու պետք է լոգոն աշխատի շատ փոքր չափով։
5. Ինչ է բրենդի ինքնությունը։
6. Ինչ է գրվում բրենդբուքում։
7. Նախագծիր լոգո և ցույց տուր երեք կրիչի վրա։
~~~

~~~art
hints
1. Կազմակերպության, ապրանքի կամ միջոցառման նշանը։ 2. Ցանկացած երեքը՝ տառային, բառային, խորհրդանշական, համակցված, էմբլեմա։ 3. Որպեսզի համոզվես, որ այն աշխատում է մեկ գույնով։ 4. Որովհետև օգտագործվում է փոքր իրերի վրա՝ գրիչներ, կրծքանշաններ։ 5. Տարրերի ամբողջ ընտանիքը՝ լոգո, գույներ, տառատեսակներ, նախշ և կրիչներ։ 6. Ինքնությունն օգտագործելու կանոնները։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Знак, который запоминают

**Логотип** — знак организации, товара или события. Он работает как лицо: его видят первым и помнят дольше всего.

Виды логотипов:

* **Буквенный:** инициалы, например две буквы в круге.
* **Словесный:** название, написанное особым шрифтом.
* **Символ:** изображение без слов, например птица или гора.
* **Комбинированный:** символ плюс название.
* **Эмблема:** название внутри формы, как значок или печать.

~~~art
pic logo-kinds
~~~

## Правила хорошего логотипа

1. **Простой:** его можно нарисовать по памяти.
2. **Запоминающийся:** в нём одна ясная идея.
3. **Работает в малом и большом размере:** на ручке и на здании.
4. **Работает в один цвет:** сначала проверь в чёрно-белом варианте.
5. **Честный:** он говорит о том, чем организация является на самом деле.
6. **Долговечный:** не построен на короткой моде.

~~~art
steps logo
~~~

## Фирменный стиль

Логотип — только начало. **Фирменный стиль** — целая семья элементов:

| Элемент | Пример |
|---|---|
| **Логотип** и его разрешённые версии | горизонтальная, квадратная, одноцветная |
| **Цвета** | два-три, с точными номерами |
| **Шрифты** | один для заголовков, один для текста |
| **Паттерн или графический элемент** | полоса, орнамент, форма |
| **Носители** | вывеска, значок, сумка, футболка, плакат, сайт, упаковка |

Правила записывают в **брендбук**, чтобы все использовали стиль одинаково.

~~~art
palette digital
~~~

## Знаки вокруг нас

Гора Арарат, гранат, абрикос, армянская буква и ковровый орнамент часто встречаются в армянских логотипах. Хороший дизайнер использует такие символы осторожно, чтобы знак остался простым и не повторял чужой.

~~~art
pic pictograms poster
~~~

## Задание

Выбери школьный клуб, пекарню, книжный магазин или спортивную команду. Нарисуй десять быстрых идей, выбери одну и сделай логотип в чёрно-белом и цветном варианте. Затем покажи его на трёх носителях: значке, футболке и сумке. Запиши правила: цвета, шрифты, свободное поле вокруг логотипа.

~~~art
tasks
1. Что такое логотип?
2. Назови три вида логотипов.
3. Зачем проверять логотип в чёрно-белом варианте?
4. Почему логотип должен работать в очень маленьком размере?
5. Что такое фирменный стиль?
6. Что записывают в брендбуке?
7. Создай логотип и покажи его на трёх носителях.
~~~

~~~art
hints
1. Знак организации, товара или события. 2. Любые три: буквенный, словесный, символ, комбинированный, эмблема. 3. Чтобы убедиться, что он работает в один цвет. 4. Потому что его используют на маленьких предметах: ручках, значках. 5. Целая семья элементов: логотип, цвета, шрифты, паттерн и носители. 6. Правила использования стиля. 7. Твоя работа.
~~~`,
      },
      [
        q(t("A logo made only of the name in a special font is a…", "Լոգոն, որը բաղկացած է միայն հատուկ տառատեսակով անունից…", "Логотип только из названия особым шрифтом — это…"), [t("word mark", "բառային լոգո է", "словесный"), t("symbol", "խորհրդանիշ է", "символ"), t("emblem", "էմբլեմա է", "эмблема")], 0),
        q(t("A good logo should first be checked…", "Լավ լոգոն նախ պետք է ստուգել…", "Хороший логотип сначала проверяют…"), [t("on a website only", "միայն կայքում", "только на сайте"), t("in black and white", "սև-սպիտակով", "в чёрно-белом варианте"), t("in five colours", "հինգ գույնով", "в пяти цветах")], 1),
        q(t("The rules for using an identity are written in a…", "Ինքնության օգտագործման կանոնները գրվում են…", "Правила использования стиля записывают в…"), [t("poster", "պաստառում", "плакате"), t("net", "փռվածքում", "развёртке"), t("brand book", "բրենդբուքում", "брендбуке")], 2),
        q(t("Which is NOT part of a brand identity?", "Որը բրենդի ինքնության մաս ՉԷ։", "Что НЕ входит в фирменный стиль?"), [t("the price of the product", "ապրանքի գինը", "цена товара"), t("the fonts", "տառատեսակները", "шрифты"), t("the colours", "գույները", "цвета")], 0),
        q(t("A logo must be simple so that it…", "Լոգոն պետք է պարզ լինի, որպեսզի…", "Логотип должен быть простым, чтобы…"), [t("costs nothing", "ոչինչ չարժենա", "ничего не стоил"), t("can be drawn from memory", "կարելի լինի նկարել հիշողությամբ", "его можно было нарисовать по памяти"), t("looks like others", "նման լինի ուրիշներին", "быть похожим на другие")], 1),
        q(t("A badge, a T-shirt and a bag are examples of…", "Կրծքանշանը, շապիկը և պայուսակն օրինակներ են…", "Значок, футболка и сумка — примеры…"), [t("fonts", "տառատեսակների", "шрифтов"), t("colours", "գույների", "цветов"), t("carriers of an identity", "ինքնության կրիչների", "носителей фирменного стиля")], 2),
      ],
    ),
    lesson(
      "photography-basics",
      ["Photography: framing and light", "Լուսանկարչություն․ կադր և լույս", "Фотография: кадр и свет"],
      {
        en: ["Know the short history of photography and its genres", "Learn the basic rules of framing and light", "Take and choose photographs for a small series"],
        hy: ["Իմանալ լուսանկարչության կարճ պատմությունը և ժանրերը", "Սովորել կադրի և լույսի հիմնական կանոնները", "Նկարել և ընտրել լուսանկարներ փոքր շարքի համար"],
        ru: ["Знать краткую историю фотографии и её жанры", "Усвоить основные правила построения кадра и работы со светом", "Снять и отобрать фотографии для небольшой серии"],
      },
      {
        en: `## Drawing with light

The word **photography** means «drawing with light». The first lasting photographs were made in the 1820s–1830s; in 1839 the **daguerreotype** was announced in France and photography began to spread. Exposures took minutes, so people sat still with head supports.

Photography changed painting: artists no longer had to copy reality exactly and turned to colour, feeling and new forms.

~~~art
pic camera
~~~

## Genres

Photography has the same genres as painting: **portrait**, **landscape**, **still life**, **everyday (documentary)**, **architecture**, **sport**, **nature**. There is also **reportage**, the photography of events as they happen.

## Building the frame

* **Rule of thirds:** divide the frame into three parts across and down. Put the main subject near a crossing of the lines, not always in the centre.
* **Horizon:** keep it straight; place it on the upper or lower third, not in the middle.
* **Leading lines:** a road, a fence or a river can lead the eye to the subject.
* **Framing:** shoot through an arch, a window or branches.
* **Free space:** leave room in front of a moving or looking person.
* **Background:** look at it before you press; a pole «growing» from a head spoils a portrait.
* **Point of view:** kneel down or climb up; a different height makes an ordinary thing new.

~~~art
shots
~~~

~~~art
compose
~~~

## Light

* **Soft light** of a cloudy day or a shaded place is good for portraits.
* **Hard sunlight** at noon gives strong shadows and squinting eyes.
* **The golden hour**, just after sunrise and before sunset, gives warm, long shadows.
* **Backlight** makes a silhouette; **side light** shows texture.

~~~art
light
~~~

## Ethics

Ask before photographing a person close up, especially a stranger or a child. Do not publish photos that could embarrass someone. A photograph can be edited, so be honest about what you change in a documentary picture.

## Task

Shoot a small series of five photographs on one theme: «My street», «Hands at work», «Morning light». Use the rule of thirds in at least two of them and two different points of view. Choose the best five, give them titles and arrange them in an order that tells a story.

~~~art
tasks
1. What does the word «photography» mean?
2. When did photography begin to spread widely?
3. Explain the rule of thirds.
4. Where should the horizon not be placed?
5. What is the golden hour?
6. Name one ethical rule of photographing people.
7. Shoot a series of five photographs on one theme and arrange them.
~~~

~~~art
hints
1. Drawing with light. 2. From 1839, with the daguerreotype. 3. Divide the frame in three across and down and put the subject near a crossing of the lines. 4. Exactly in the middle of the frame. 5. The time just after sunrise and before sunset, with warm light and long shadows. 6. Ask permission before photographing a person close up. 7. Your series.
~~~`,
        hy: `## Նկարել լույսով

**Լուսանկարչություն** բառը նշանակում է «լույսով նկարել»։ Առաջին մնայուն լուսանկարները ստեղծվել են 1820–1830-ական թվականներին, իսկ 1839 թվականին Ֆրանսիայում հայտարարվեց **դագերոտիպը**, և լուսանկարչությունը սկսեց տարածվել։ Նկարահանումը տևում էր րոպեներ, ուստի մարդիկ նստում էին անշարժ՝ գլխի հենարաններով։

Լուսանկարչությունը փոխեց գեղանկարչությունը. նկարիչներն այլևս պարտավոր չէին ճշգրիտ կրկնել իրականությունը և դիմեցին գույնին, զգացմունքին և նոր ձևերին։

~~~art
pic camera
~~~

## Ժանրեր

Լուսանկարչությունն ունի գեղանկարչության նույն ժանրերը՝ **դիմանկար**, **բնանկար**, **նատյուրմորտ**, **կենցաղային (վավերագրական)**, **ճարտարապետական**, **սպորտային**, **բնության**։ Կա նաև **ռեպորտաժ**՝ իրադարձությունների լուսանկարում դրանց ընթացքում։

## Կադրի կառուցում

* **Երրորդների կանոն**՝ կադրը բաժանիր երեք մասի լայնքով և երկայնքով։ Գլխավոր առարկան տեղադրիր գծերի հատման կետի մոտ, ոչ միշտ կենտրոնում։
* **Հորիզոն**՝ պահիր ուղիղ, տեղադրիր վերին կամ ստորին երրորդի վրա, ոչ մեջտեղում։
* **Առաջնորդող գծեր**՝ ճանապարհը, ցանկապատը կամ գետը կարող են հայացքն առաջնորդել դեպի առարկան։
* **Շրջանակում**՝ նկարիր կամարի, պատուհանի կամ ճյուղերի միջով։
* **Ազատ տարածություն**՝ թող տեղ շարժվող կամ նայող մարդու առջև։
* **Ֆոն**՝ նայիր դրան սեղմելուց առաջ, գլխից «աճող» սյունը փչացնում է դիմանկարը։
* **Տեսակետ**՝ ծնկիր կամ բարձրացիր, այլ բարձրությունը սովորական բանը նոր է դարձնում։

~~~art
shots
~~~

~~~art
compose
~~~

## Լույս

* **Մեղմ լույսը** ամպամած օրվա կամ ստվերոտ տեղի լավ է դիմանկարների համար։
* **Կոշտ արևը** կեսօրին տալիս է ուժեղ ստվերներ և կկոցված աչքեր։
* **Ոսկե ժամը**՝ արևածագից անմիջապես հետո և մայրամուտից առաջ, տալիս է ջերմ, երկար ստվերներ։
* **Հակառակ լույսը** ստեղծում է ուրվագիծ, **կողային լույսը** ցույց է տալիս ֆակտուրան։

~~~art
light
~~~

## Էթիկա

Հարցրու, նախքան մարդուն մոտիկից լուսանկարելը, հատկապես անծանոթին կամ երեխային։ Մի հրապարակիր լուսանկարներ, որոնք կարող են ամաչեցնել որևէ մեկին։ Լուսանկարը կարելի է խմբագրել, ուստի ազնիվ եղիր այն բանի մասին, ինչ փոխում ես վավերագրական նկարում։

## Առաջադրանք

Նկարիր հինգ լուսանկարի փոքր շարք մեկ թեմայով՝ «Իմ փողոցը», «Ձեռքերն աշխատանքի մեջ», «Առավոտյան լույս»։ Առնվազն երկուսում օգտագործիր երրորդների կանոնը և երկու տարբեր տեսակետ։ Ընտրիր լավագույն հինգը, տուր վերնագրեր և դասավորիր այնպես, որ պատմություն պատմեն։

~~~art
tasks
1. Ինչ է նշանակում «լուսանկարչություն» բառը։
2. Երբ սկսեց լայնորեն տարածվել լուսանկարչությունը։
3. Բացատրիր երրորդների կանոնը։
4. Որտեղ չպետք է տեղադրել հորիզոնը։
5. Ինչ է ոսկե ժամը։
6. Անվանիր մարդկանց լուսանկարելու մեկ էթիկական կանոն։
7. Նկարիր հինգ լուսանկարի շարք մեկ թեմայով և դասավորիր դրանք։
~~~

~~~art
hints
1. Լույսով նկարել։ 2. 1839 թվականից՝ դագերոտիպով։ 3. Կադրը բաժանիր երեք մասի լայնքով և երկայնքով և առարկան տեղադրիր գծերի հատման մոտ։ 4. Ճիշտ կադրի մեջտեղում։ 5. Արևածագից հետո և մայրամուտից առաջ ժամանակը՝ ջերմ լույսով և երկար ստվերներով։ 6. Թույլտվություն հարցնել մարդուն մոտիկից լուսանկարելուց առաջ։ 7. Քո շարքը։
~~~`,
        ru: `## Рисование светом

Слово **фотография** означает «рисование светом». Первые устойчивые фотографии сделаны в 1820–1830-х годах; в 1839 году во Франции был представлен **дагеротип**, и фотография начала распространяться. Выдержка длилась минутами, поэтому люди сидели неподвижно, опираясь головой на подставку.

Фотография изменила живопись: художникам больше не нужно было точно повторять действительность, и они обратились к цвету, чувству и новым формам.

~~~art
pic camera
~~~

## Жанры

У фотографии те же жанры, что и у живописи: **портрет**, **пейзаж**, **натюрморт**, **бытовой (документальный)**, **архитектурный**, **спортивный**, **природный**. Есть и **репортаж** — съёмка событий по ходу их развития.

## Построение кадра

* **Правило третей:** раздели кадр на три части по ширине и высоте. Главное помести у пересечения линий, не всегда в центре.
* **Горизонт:** держи его ровным, ставь на верхнюю или нижнюю треть, а не посередине.
* **Направляющие линии:** дорога, забор или река могут вести взгляд к главному.
* **Обрамление:** снимай через арку, окно или ветви.
* **Свободное пространство:** оставь место перед идущим или смотрящим человеком.
* **Фон:** посмотри на него до нажатия; столб, «растущий» из головы, портит портрет.
* **Точка съёмки:** присядь или поднимись выше; другая высота делает привычное новым.

~~~art
shots
~~~

~~~art
compose
~~~

## Свет

* **Мягкий свет** пасмурного дня или тени хорош для портрета.
* **Жёсткое солнце** в полдень даёт резкие тени и прищуренные глаза.
* **Золотой час** — сразу после восхода и перед закатом — даёт тёплый свет и длинные тени.
* **Контровой свет** даёт силуэт, **боковой** выявляет фактуру.

~~~art
light
~~~

## Этика

Спроси разрешение, прежде чем снимать человека крупно, особенно незнакомого или ребёнка. Не публикуй фотографии, которые могут кого-то смутить. Фотографию можно отредактировать, поэтому будь честен в том, что ты меняешь в документальном снимке.

## Задание

Сними небольшую серию из пяти фотографий на одну тему: «Моя улица», «Руки в работе», «Утренний свет». Минимум в двух используй правило третей и две разные точки съёмки. Отбери лучшие пять, дай им названия и выстрой в порядке, который рассказывает историю.

~~~art
tasks
1. Что означает слово «фотография»?
2. Когда фотография начала широко распространяться?
3. Объясни правило третей.
4. Где не следует располагать линию горизонта?
5. Что такое золотой час?
6. Назови одно этическое правило съёмки людей.
7. Сними серию из пяти фотографий на одну тему и выстрой её.
~~~

~~~art
hints
1. Рисование светом. 2. С 1839 года, с появлением дагеротипа. 3. Раздели кадр на три части по ширине и высоте и помести главное у пересечения линий. 4. Ровно посередине кадра. 5. Время сразу после восхода и перед закатом с тёплым светом и длинными тенями. 6. Спрашивать разрешение перед крупной съёмкой человека. 7. Твоя серия.
~~~`,
      },
      [
        q(t("The word «photography» means…", "«Լուսանկարչություն» բառը նշանակում է…", "Слово «фотография» означает…"), [t("drawing with light", "լույսով նկարել", "рисование светом"), t("printing on glass", "ապակու վրա տպել", "печать на стекле"), t("writing in a book", "գրքում գրել", "письмо в книге")], 0),
        q(t("The daguerreotype was announced in…", "Դագերոտիպը հայտարարվել է…", "Дагеротип был представлен в…"), [t("1512", "1512 թվականին", "1512 году"), t("1839", "1839 թվականին", "1839 году"), t("1922", "1922 թվականին", "1922 году")], 1),
        q(t("By the rule of thirds the main subject goes…", "Երրորդների կանոնով գլխավոր առարկան տեղադրվում է…", "По правилу третей главное помещают…"), [t("in the corner", "անկյունում", "в углу"), t("always in the centre", "միշտ կենտրոնում", "всегда в центре"), t("near a crossing of the lines", "գծերի հատման մոտ", "у пересечения линий")], 2),
        q(t("The golden hour is…", "Ոսկե ժամը…", "Золотой час — это…"), [t("just after sunrise and before sunset", "արևածագից հետո և մայրամուտից առաջ", "сразу после восхода и перед закатом"), t("noon", "կեսօրը", "полдень"), t("midnight", "կեսգիշերը", "полночь")], 0),
        q(t("Side light is good for showing…", "Կողային լույսը լավ է ցույց տալու…", "Боковой свет хорош для показа…"), [t("the sky", "երկինքը", "неба"), t("texture", "ֆակտուրան", "фактуры"), t("the title", "վերնագիրը", "названия")], 1),
        q(t("Before photographing a stranger close up you should…", "Անծանոթին մոտիկից լուսանկարելուց առաջ պետք է…", "Перед крупной съёмкой незнакомого человека нужно…"), [t("use a flash", "օգտագործել լուսաթարթիչ", "включить вспышку"), t("publish it first", "նախ հրապարակել", "сначала опубликовать"), t("ask permission", "թույլտվություն հարցնել", "спросить разрешение")], 2),
      ],
    ),
    lesson(
      "moving-image",
      ["The moving image: film and animation", "Շարժուն պատկեր․ կինո և անիմացիա", "Движущееся изображение: кино и анимация"],
      {
        en: ["Understand how a series of pictures becomes movement", "Know the main shot sizes and the idea of a storyboard", "Draw a storyboard and make a short animation"],
        hy: ["Հասկանալ, թե ինչպես է նկարների շարքը դառնում շարժում", "Իմանալ կադրերի հիմնական խոշորացումները և սցենարային տախտակի գաղափարը", "Գծել սցենարային տախտակ և պատրաստել կարճ անիմացիա"],
        ru: ["Понять, как череда изображений превращается в движение", "Знать основные планы и понятие раскадровки", "Нарисовать раскадровку и сделать короткую анимацию"],
      },
      {
        en: `## Pictures that move

Our eye keeps an image for a moment after it disappears. If pictures change fast enough, about 24 per second, we see continuous movement. Each separate picture is a **frame**.

The first public film shows were given by the **Lumière brothers** in Paris in 1895. Soon artists began to draw films frame by frame: that is **animation**.

Armenia has a strong animation tradition; one of its best known works is the short film «Lake» (1964) by **Robert Sahakyants**, and the country also has a famous master of unusual cinema, **Sergei Parajanov**.

~~~art
pic film-strip
~~~

## Shot sizes

| Shot | What is seen | What it is for |
|---|---|---|
| **Wide (long) shot** | a whole place with small figures | shows where we are |
| **Full shot** | the whole figure | shows movement and action |
| **Medium shot** | a person from the waist up | conversation |
| **Close-up** | the face | feelings |
| **Extreme close-up** | an eye, a hand, a detail | tension, an important detail |

Changing shot sizes keeps the viewer interested; a whole film in one shot size becomes boring.

~~~art
shots
~~~

## The storyboard

A **storyboard** is a comic strip of the future film: small drawings of each shot with notes on what happens, what the camera does and what we hear. It is cheaper to redraw a storyboard than to reshoot a film.

1. Write the story in 5–8 sentences.
2. Draw one frame for each important moment.
3. Mark the shot size and the camera movement with arrows.
4. Write the sound under each frame: speech, music, noise.

~~~art
pic storyboard
~~~

## Make an animation

* **Flip book:** draw a small figure on the corner of each page, changing a little; flip the pages.
* **Stop motion:** make a figure from plasticine, photograph it, move it a little, photograph again. 12 photos give one second of calm movement.
* **Rule:** change one thing at a time, and make the moves small.

~~~art
flipbook ball
~~~

~~~art
sketch mode=frames cells=4
Your storyboard: four frames, one action. Change the shot size at least once.
~~~

## Task

Write a short story in five sentences. Draw a storyboard of 6–8 frames using at least three different shot sizes. Then make a flip book or a stop-motion film of a few seconds.

~~~art
tasks
1. What is a frame?
2. How many frames per second give smooth movement?
3. Who gave the first public film shows and when?
4. Which shot shows feelings best?
5. What is a storyboard and why is it useful?
6. How many photographs give one second of stop motion?
7. Make a storyboard and a short animation.
~~~

~~~art
hints
1. One separate picture of a film. 2. About 24. 3. The Lumière brothers, in 1895. 4. The close-up. 5. A comic strip of the future film; it is cheaper to redraw than to reshoot. 6. About 12 for calm movement. 7. Your work.
~~~`,
        hy: `## Նկարներ, որոնք շարժվում են

Մեր աչքը պատկերը պահում է մի ակնթարթ այն անհետանալուց հետո։ Եթե նկարները բավական արագ փոխվեն, մոտ 24-ը վայրկյանում, մենք տեսնում ենք անընդհատ շարժում։ Յուրաքանչյուր առանձին նկար **կադր** է։

Առաջին հրապարակային կինոցուցադրությունները կազմակերպել են **Լյումիեր եղբայրները** Փարիզում 1895 թվականին։ Շուտով նկարիչները սկսեցին ֆիլմեր նկարել կադր առ կադր. դա **անիմացիան** է։

Հայաստանն ունի ուժեղ անիմացիոն ավանդույթ, նրա ամենահայտնի գործերից է **Ռոբերտ Սահակյանցի** «Լճակ» կարճամետրաժ ֆիլմը (1964), իսկ երկիրն ունի նաև անսովոր կինոյի հայտնի վարպետ՝ **Սերգեյ Փարաջանովին**։

~~~art
pic film-strip
~~~

## Կադրերի խոշորացումները

| Կադր | Ինչ է երևում | Ինչի համար է |
|---|---|---|
| **Ընդհանուր (հեռավոր)** | ամբողջ վայրը՝ փոքր կերպարներով | ցույց է տալիս, թե որտեղ ենք |
| **Ամբողջ հասակով** | ամբողջ կերպարը | ցույց է տալիս շարժումը և գործողությունը |
| **Միջին** | մարդը գոտկատեղից վեր | խոսակցություն |
| **Խոշոր** | դեմքը | զգացմունքներ |
| **Գերխոշոր** | աչք, ձեռք, մանրամաս | լարվածություն, կարևոր մանրամաս |

Կադրերի խոշորացումների փոփոխությունը պահում է դիտողի հետաքրքրությունը, ամբողջ ֆիլմը մեկ խոշորացմամբ դառնում է ձանձրալի։

~~~art
shots
~~~

## Սցենարային տախտակը

**Սցենարային տախտակը** ապագա ֆիլմի կոմիքսն է՝ յուրաքանչյուր կադրի փոքր նկարներ՝ նշումներով, թե ինչ է կատարվում, ինչ է անում տեսախցիկը և ինչ ենք լսում։ Սցենարային տախտակը վերագծելն ավելի էժան է, քան ֆիլմը վերանկարահանելը։

1. Պատմությունը գրիր 5–8 նախադասությամբ։
2. Յուրաքանչյուր կարևոր պահի համար նկարիր մեկ կադր։
3. Սլաքներով նշիր կադրի խոշորացումը և տեսախցիկի շարժումը։
4. Յուրաքանչյուր կադրի տակ գրիր ձայնը՝ խոսք, երաժշտություն, աղմուկ։

~~~art
pic storyboard
~~~

## Պատրաստիր անիմացիա

* **Թերթվող գրքույկ**՝ յուրաքանչյուր էջի անկյունում նկարիր փոքր կերպար՝ քիչ փոփոխելով, հետո թերթիր էջերը։
* **Օբյեկտային անիմացիա**՝ պլաստիլինից կերպար պատրաստիր, լուսանկարիր, քիչ տեղաշարժիր, նորից լուսանկարիր։ 12 լուսանկարը տալիս է հանդարտ շարժման մեկ վայրկյան։
* **Կանոն**՝ փոխիր մեկ բան միաժամանակ և շարժումները փոքր արա։

~~~art
flipbook ball
~~~

~~~art
sketch mode=frames cells=4
Քո կադրաշարը․ չորս կադր, մեկ գործողություն։ Գոնե մեկ անգամ փոխի՛ր կադրի չափը։
~~~

## Առաջադրանք

Գրիր կարճ պատմություն հինգ նախադասությամբ։ Գծիր 6–8 կադրից սցենարային տախտակ՝ օգտագործելով առնվազն երեք տարբեր խոշորացում։ Հետո պատրաստիր թերթվող գրքույկ կամ մի քանի վայրկյան տևողությամբ օբյեկտային անիմացիա։

~~~art
tasks
1. Ինչ է կադրը։
2. Վայրկյանում քանի կադր է տալիս սահուն շարժում։
3. Ով և երբ է կազմակերպել առաջին հրապարակային կինոցուցադրությունները։
4. Որ կադրն է լավագույնս ցույց տալիս զգացմունքները։
5. Ինչ է սցենարային տախտակը և ինչու է օգտակար։
6. Քանի լուսանկար է տալիս օբյեկտային անիմացիայի մեկ վայրկյան։
7. Պատրաստիր սցենարային տախտակ և կարճ անիմացիա։
~~~

~~~art
hints
1. Ֆիլմի մեկ առանձին նկարը։ 2. Մոտ 24։ 3. Լյումիեր եղբայրները, 1895 թվականին։ 4. Խոշոր կադրը։ 5. Ապագա ֆիլմի կոմիքսը, վերագծելն ավելի էժան է, քան վերանկարահանելը։ 6. Հանդարտ շարժման համար մոտ 12։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Картинки, которые движутся

Наш глаз удерживает изображение мгновение после того, как оно исчезло. Если картинки меняются достаточно быстро, около 24 в секунду, мы видим непрерывное движение. Каждое отдельное изображение — **кадр**.

Первые публичные киносеансы устроили **братья Люмьер** в Париже в 1895 году. Вскоре художники стали рисовать фильмы кадр за кадром — это **анимация**.

В Армении сильная анимационная традиция; одна из самых известных работ — короткометражный фильм «Лужа» (1964) **Роберта Саакянца**, а ещё страна дала знаменитого мастера необычного кино — **Сергея Параджанова**.

~~~art
pic film-strip
~~~

## Планы

| План | Что видно | Для чего |
|---|---|---|
| **Общий (дальний)** | всё место с маленькими фигурами | показывает, где мы находимся |
| **Средний общий** | фигура целиком | показывает движение и действие |
| **Средний** | человек по пояс | разговор |
| **Крупный** | лицо | чувства |
| **Деталь (макро)** | глаз, рука, предмет | напряжение, важная деталь |

Смена планов удерживает интерес зрителя; весь фильм на одном плане становится скучным.

~~~art
shots
~~~

## Раскадровка

**Раскадровка** — комикс будущего фильма: маленькие рисунки каждого кадра с пометками, что происходит, что делает камера и что мы слышим. Перерисовать раскадровку дешевле, чем переснять фильм.

1. Запиши историю в 5–8 предложениях.
2. Нарисуй по кадру на каждый важный момент.
3. Отметь план и движение камеры стрелками.
4. Под каждым кадром напиши звук: речь, музыку, шум.

~~~art
pic storyboard
~~~

## Сделай анимацию

* **Флипбук:** нарисуй маленькую фигурку в углу каждой страницы, чуть меняя её, и пролистай.
* **Покадровая съёмка (стоп-моушен):** слепи фигурку из пластилина, сфотографируй, чуть сдвинь, снова сфотографируй. 12 снимков дают секунду спокойного движения.
* **Правило:** меняй по одному и делай движения маленькими.

~~~art
flipbook ball
~~~

~~~art
sketch mode=frames cells=4
Твоя раскадровка: четыре кадра, одно действие. Хотя бы раз поменяй крупность плана.
~~~

## Задание

Напиши короткую историю в пяти предложениях. Нарисуй раскадровку из 6–8 кадров, используя не меньше трёх разных планов. Затем сделай флипбук или стоп-моушен длиной в несколько секунд.

~~~art
tasks
1. Что такое кадр?
2. Сколько кадров в секунду дают плавное движение?
3. Кто и когда устроил первые публичные киносеансы?
4. Какой план лучше всего передаёт чувства?
5. Что такое раскадровка и чем она полезна?
6. Сколько снимков дают секунду стоп-моушена?
7. Сделай раскадровку и короткую анимацию.
~~~

~~~art
hints
1. Одно отдельное изображение фильма. 2. Около 24. 3. Братья Люмьер, в 1895 году. 4. Крупный план. 5. Комикс будущего фильма; перерисовать её дешевле, чем переснять фильм. 6. Около 12 для спокойного движения. 7. Твоя работа.
~~~`,
      },
      [
        q(t("One separate picture of a film is a…", "Ֆիլմի մեկ առանձին նկարը…", "Одно отдельное изображение фильма — это…"), [t("frame", "կադր է", "кадр"), t("storyboard", "սցենարային տախտակ է", "раскадровка"), t("shot size", "խոշորացում է", "план")], 0),
        q(t("Smooth movement needs about … frames per second.", "Սահուն շարժման համար պետք է վայրկյանում մոտ … կադր։", "Для плавного движения нужно около … кадров в секунду."), [t("3", "3", "3"), t("24", "24", "24"), t("200", "200", "200")], 1),
        q(t("The first public film shows were given by…", "Առաջին հրապարակային կինոցուցադրությունները կազմակերպել են…", "Первые публичные киносеансы устроили…"), [t("Parajanov", "Փարաջանովը", "Параджанов"), t("Sahakyants", "Սահակյանցը", "Саакянц"), t("the Lumière brothers", "Լյումիեր եղբայրները", "братья Люмьер")], 2),
        q(t("Which shot is best for showing feelings?", "Որ կադրն է լավագույնը զգացմունքներ ցույց տալու համար։", "Какой план лучше всего передаёт чувства?"), [t("close-up", "խոշորը", "крупный"), t("wide shot", "ընդհանուրը", "общий"), t("full shot", "ամբողջ հասակով կադրը", "средний общий")], 0),
        q(t("A comic strip of the future film is a…", "Ապագա ֆիլմի կոմիքսը…", "Комикс будущего фильма — это…"), [t("flip book", "թերթվող գրքույկ է", "флипбук"), t("storyboard", "սցենարային տախտակ է", "раскадровка"), t("logo", "լոգո է", "логотип")], 1),
        q(t("In stop motion you should…", "Օբյեկտային անիմացիայում պետք է…", "В стоп-моушене нужно…"), [t("move everything at once", "ամեն ինչ միանգամից տեղաշարժել", "двигать всё сразу"), t("take one photo per minute", "րոպեն մեկ լուսանկար անել", "делать один снимок в минуту"), t("make small moves", "փոքր շարժումներ անել", "делать маленькие движения")], 2),
      ],
    ),
    lesson(
      "digital-design",
      ["Design in the digital world", "Դիզայնը թվային աշխարհում", "Дизайн в цифровом мире"],
      {
        en: ["Know what interface design is and what makes an interface good", "Understand raster and vector graphics and where each is used", "Design a screen of an app or a page of a website on paper"],
        hy: ["Իմանալ, թե ինչ է ինտերֆեյսի դիզայնը և ինչն է լավ ինտերֆեյս դարձնում", "Հասկանալ ռաստերային և վեկտորային գրաֆիկան և որտեղ է յուրաքանչյուրը կիրառվում", "Նախագծել հավելվածի էկրան կամ կայքի էջ թղթի վրա"],
        ru: ["Знать, что такое дизайн интерфейсов и что делает интерфейс хорошим", "Понимать растровую и векторную графику и где применяется каждая", "Спроектировать экран приложения или страницу сайта на бумаге"],
      },
      {
        en: `## Design you touch

Most pictures we see today are on screens. The design of what happens on a screen is called **interface design**: apps, websites, games, maps, tickets.

An interface is good when a person reaches the goal **quickly and without thinking about the interface at all**.

~~~art
pic app-screen
~~~

## Rules of a good interface

* **Clear hierarchy:** the most important thing is the biggest and first.
* **Few actions:** the main task should take as few taps as possible.
* **Familiar signs:** a magnifying glass for search, a house for the main page.
* **Feedback:** the button changes when pressed; the user sees that something is happening.
* **Readability:** enough contrast, text not too small, lines not too long.
* **Accessibility:** large tap targets, captions for pictures, a mode for weak eyesight.
* **Consistency:** the same things look the same on every screen.

~~~art
palette digital
~~~

## Raster and vector

| Raster | Vector |
|---|---|
| a grid of coloured dots, **pixels** | lines and shapes described by formulas |
| photographs, painted pictures | logos, icons, maps, fonts |
| becomes blurry when enlarged | can be enlarged without loss |
| formats such as JPEG and PNG | formats such as SVG |

**Resolution** says how many pixels an image has. For printing it must be high; for a screen a smaller image is enough.

~~~art
pic pictograms
Vector icons stay sharp at any size; a photo is made of pixels and blurs when you zoom in.
~~~

## Designing a screen

1. **Task:** what does the person want to do here?
2. **Structure:** list the blocks: header, search, list, buttons.
3. **Wireframe:** a rough plan on paper with rectangles, no colours.
4. **Grid:** place the blocks on an even grid with equal gaps.
5. **Style:** colours, fonts, icons, the same as in the brand identity.
6. **Check:** show it to someone and watch where they get lost.

~~~art
sketch guide=grid
~~~

## Honest design

A design should not trick people: hidden buttons that make you buy, a tiny «no, thank you», endless scrolling that steals time. Good designers think about the user's time and attention, and about privacy.

## Task

Design an app for your school on paper: a timetable, a library or a sports club. Draw three screens as wireframes, then draw one of them in colour with icons. Explain in two sentences what task each screen solves.

~~~art
tasks
1. What is interface design?
2. Name three rules of a good interface.
3. What is a pixel?
4. Which graphics can be enlarged without loss?
5. Which format is better for a logo: JPEG or SVG?
6. Give an example of dishonest design.
7. Draw three wireframes and one coloured screen of an app.
~~~

~~~art
hints
1. The design of what happens on a screen: apps, websites, games. 2. Any three: clear hierarchy, few actions, familiar signs, feedback, readability, accessibility, consistency. 3. One coloured dot of a raster image. 4. Vector graphics. 5. SVG. 6. For example a hidden button that makes you buy, or a tiny «no, thank you». 7. Your screens.
~~~`,
        hy: `## Դիզայն, որին դիպչում ես

Այսօր մեր տեսած պատկերների մեծ մասն էկրաններին է։ Էկրանին կատարվողի դիզայնը կոչվում է **ինտերֆեյսի դիզայն**՝ հավելվածներ, կայքեր, խաղեր, քարտեզներ, տոմսեր։

Ինտերֆեյսը լավն է, երբ մարդը նպատակին հասնում է **արագ և ինտերֆեյսի մասին ընդհանրապես չմտածելով**։

~~~art
pic app-screen
~~~

## Լավ ինտերֆեյսի կանոնները

* **Հստակ հիերարխիա**՝ ամենակարևորն ամենամեծն է և առաջինը։
* **Քիչ գործողություն**՝ գլխավոր խնդիրը պետք է պահանջի հնարավորինս քիչ հպում։
* **Ծանոթ նշաններ**՝ խոշորացույց՝ որոնման, տուն՝ գլխավոր էջի համար։
* **Հետադարձ կապ**՝ կոճակը փոխվում է սեղմելիս, օգտվողը տեսնում է, որ ինչ-որ բան է կատարվում։
* **Ընթեռնելիություն**՝ բավարար կոնտրաստ, տեքստն ոչ շատ մանր, տողերը՝ ոչ շատ երկար։
* **Հասանելիություն**՝ մեծ հպման գոտիներ, նկարների նկարագրություններ, թույլ տեսողության ռեժիմ։
* **Հետևողականություն**՝ նույն բաները նույն տեսքն ունեն բոլոր էկրաններին։

~~~art
palette digital
~~~

## Ռաստերային և վեկտորային

| Ռաստերային | Վեկտորային |
|---|---|
| գունավոր կետերի՝ **փիքսելների** ցանց | բանաձևերով նկարագրված գծեր և ձևեր |
| լուսանկարներ, նկարված պատկերներ | լոգոներ, պատկերակներ, քարտեզներ, տառատեսակներ |
| խոշորացնելիս մշուշոտվում է | կարելի է խոշորացնել առանց կորստի |
| ձևաչափեր, ինչպիսիք են JPEG-ը և PNG-ն | ձևաչափեր, ինչպիսին է SVG-ն |

**Լուծաչափը** ասում է, թե քանի փիքսել ունի պատկերը։ Տպագրության համար այն պետք է բարձր լինի, էկրանի համար բավական է ավելի փոքր պատկերը։

~~~art
pic pictograms
Վեկտորային պատկերակները ցանկացած չափով մնում են սուր, իսկ լուսանկարը կազմված է պիքսելներից և մեծացնելիս պղտորվում է։
~~~

## Էկրանի նախագծում

1. **Խնդիր**՝ ինչ է ուզում անել մարդն այստեղ։
2. **Կառուցվածք**՝ թվարկիր բլոկները՝ վերնագիր, որոնում, ցուցակ, կոճակներ։
3. **Ուրվագիծ**՝ կոպիտ պլան թղթի վրա՝ ուղղանկյուններով, առանց գույների։
4. **Ցանց**՝ բլոկները տեղադրիր հավասար ցանցի վրա՝ հավասար բացվածքներով։
5. **Ոճ**՝ գույներ, տառատեսակներ, պատկերակներ՝ նույնը, ինչ բրենդի ինքնությունում։
6. **Ստուգում**՝ ցույց տուր մեկին և նայիր, թե որտեղ է նա մոլորվում։

~~~art
sketch guide=grid
~~~

## Ազնիվ դիզայն

Դիզայնը չպետք է խաբի մարդկանց՝ թաքնված կոճակներ, որոնք ստիպում են գնել, մանրիկ «ոչ, շնորհակալություն», անվերջ ոլորում, որը գողանում է ժամանակը։ Լավ դիզայներները մտածում են օգտվողի ժամանակի, ուշադրության և գաղտնիության մասին։

## Առաջադրանք

Թղթի վրա նախագծիր հավելված քո դպրոցի համար՝ դասացուցակ, գրադարան կամ սպորտային ակումբ։ Գծիր երեք էկրան որպես ուրվագիծ, հետո դրանցից մեկը նկարիր գունավոր՝ պատկերակներով։ Երկու նախադասությամբ բացատրիր, թե յուրաքանչյուր էկրան ինչ խնդիր է լուծում։

~~~art
tasks
1. Ինչ է ինտերֆեյսի դիզայնը։
2. Անվանիր լավ ինտերֆեյսի երեք կանոն։
3. Ինչ է փիքսելը։
4. Որ գրաֆիկան կարելի է խոշորացնել առանց կորստի։
5. Որ ձևաչափն է ավելի լավ լոգոյի համար՝ JPEG, թե SVG։
6. Բեր անազնիվ դիզայնի օրինակ։
7. Գծիր երեք ուրվագիծ և հավելվածի մեկ գունավոր էկրան։
~~~

~~~art
hints
1. Էկրանին կատարվողի դիզայնը՝ հավելվածներ, կայքեր, խաղեր։ 2. Ցանկացած երեքը՝ հստակ հիերարխիա, քիչ գործողություն, ծանոթ նշաններ, հետադարձ կապ, ընթեռնելիություն, հասանելիություն, հետևողականություն։ 3. Ռաստերային պատկերի մեկ գունավոր կետը։ 4. Վեկտորայինը։ 5. SVG-ն։ 6. Օրինակ՝ թաքնված կոճակը, որը ստիպում է գնել, կամ մանրիկ «ոչ, շնորհակալություն»։ 7. Քո էկրանները։
~~~`,
        ru: `## Дизайн, к которому прикасаются

Большую часть изображений сегодня мы видим на экранах. Дизайн того, что происходит на экране, называется **дизайном интерфейсов**: приложения, сайты, игры, карты, билеты.

Интерфейс хорош, когда человек достигает цели **быстро и вообще не думая об интерфейсе**.

~~~art
pic app-screen
~~~

## Правила хорошего интерфейса

* **Ясная иерархия:** самое важное — самое крупное и первое.
* **Мало действий:** главная задача должна решаться за минимум касаний.
* **Знакомые знаки:** лупа для поиска, домик для главной страницы.
* **Обратная связь:** кнопка меняется при нажатии, пользователь видит, что что-то происходит.
* **Читаемость:** достаточный контраст, не слишком мелкий текст, не слишком длинные строки.
* **Доступность:** крупные зоны нажатия, описания картинок, режим для слабого зрения.
* **Единообразие:** одинаковые вещи выглядят одинаково на всех экранах.

~~~art
palette digital
~~~

## Растр и вектор

| Растровая графика | Векторная графика |
|---|---|
| сетка цветных точек — **пикселей** | линии и формы, описанные формулами |
| фотографии, нарисованные картины | логотипы, иконки, карты, шрифты |
| при увеличении становится размытой | увеличивается без потерь |
| форматы JPEG и PNG | формат SVG |

**Разрешение** говорит, сколько пикселей в изображении. Для печати оно должно быть высоким, для экрана достаточно меньшего.

~~~art
pic pictograms
Векторные значки остаются чёткими в любом размере, а фото состоит из пикселей и размывается при увеличении.
~~~

## Проектирование экрана

1. **Задача:** что человек хочет здесь сделать?
2. **Структура:** перечисли блоки: шапку, поиск, список, кнопки.
3. **Каркас (вайрфрейм):** грубый план на бумаге из прямоугольников, без цвета.
4. **Сетка:** расставь блоки по ровной сетке с равными отступами.
5. **Стиль:** цвета, шрифты, иконки — те же, что в фирменном стиле.
6. **Проверка:** покажи кому-нибудь и посмотри, где он теряется.

~~~art
sketch guide=grid
~~~

## Честный дизайн

Дизайн не должен обманывать: спрятанные кнопки, подталкивающие к покупке, крошечное «нет, спасибо», бесконечная лента, крадущая время. Хорошие дизайнеры думают о времени, внимании и приватности пользователя.

## Задание

Спроектируй на бумаге приложение для своей школы: расписание, библиотеку или спортивный клуб. Нарисуй три экрана каркасами, затем один из них в цвете с иконками. Двумя предложениями объясни, какую задачу решает каждый экран.

~~~art
tasks
1. Что такое дизайн интерфейсов?
2. Назови три правила хорошего интерфейса.
3. Что такое пиксель?
4. Какая графика увеличивается без потерь?
5. Какой формат лучше для логотипа: JPEG или SVG?
6. Приведи пример нечестного дизайна.
7. Нарисуй три каркаса и один цветной экран приложения.
~~~

~~~art
hints
1. Дизайн того, что происходит на экране: приложений, сайтов, игр. 2. Любые три: ясная иерархия, мало действий, знакомые знаки, обратная связь, читаемость, доступность, единообразие. 3. Одна цветная точка растрового изображения. 4. Векторная. 5. SVG. 6. Например, спрятанная кнопка, подталкивающая к покупке, или крошечное «нет, спасибо». 7. Твои экраны.
~~~`,
      },
      [
        q(t("A grid of coloured dots is … graphics.", "Գունավոր կետերի ցանցը … գրաֆիկա է։", "Сетка цветных точек — это … графика."), [t("raster", "ռաստերային", "растровая"), t("vector", "վեկտորային", "векторная"), t("printed", "տպագիր", "печатная")], 0),
        q(t("Which format suits a logo best?", "Որ ձևաչափն է լավագույնս սազում լոգոյին։", "Какой формат лучше подходит логотипу?"), [t("JPEG", "JPEG", "JPEG"), t("SVG", "SVG", "SVG"), t("PNG photo", "PNG լուսանկար", "фото PNG")], 1),
        q(t("When a button changes as it is pressed, this is…", "Երբ կոճակը սեղմելիս փոխվում է, դա…", "Когда кнопка меняется при нажатии, это…"), [t("a pixel", "փիքսել է", "пиксель"), t("a wireframe", "ուրվագիծ է", "каркас"), t("feedback", "հետադարձ կապ է", "обратная связь")], 2),
        q(t("A rough plan of a screen without colours is a…", "Էկրանի կոպիտ պլանն առանց գույների…", "Грубый план экрана без цвета — это…"), [t("wireframe", "ուրվագիծ է", "каркас"), t("logo", "լոգո է", "логотип"), t("storyboard", "սցենարային տախտակ է", "раскадровка")], 0),
        q(t("A magnifying glass icon usually means…", "Խոշորացույցի պատկերակը սովորաբար նշանակում է…", "Иконка лупы обычно означает…"), [t("delete", "ջնջել", "удалить"), t("search", "որոնել", "поиск"), t("exit", "ելք", "выход")], 1),
        q(t("A tiny «no, thank you» next to a big buy button is an example of…", "Մեծ գնելու կոճակի կողքի մանրիկ «ոչ, շնորհակալություն»-ը օրինակ է…", "Крошечное «нет, спасибо» рядом с большой кнопкой покупки — пример…"), [t("good hierarchy", "լավ հիերարխիայի", "хорошей иерархии"), t("accessibility", "հասանելիության", "доступности"), t("dishonest design", "անազնիվ դիզայնի", "нечестного дизайна")], 2),
      ],
    ),
  ],
};
