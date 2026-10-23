import { t, unit, q, type CourseSeed } from "../types";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

const g = (n: number) => ({
  title: t(`Drawing & Art · Grade ${n}`, `Կերպարվեստ · ${n}-րդ դասարան`, `Рисование и ИЗО · ${n} класс`),
});

export const drawing: CourseSeed[] = [
  {
    subject: "drawing",
    grade: 1,
    ...g(1),
    description: t("First steps in art: lines, shapes, primary colours, drawing from imagination and nature, paper crafts.", "Արվեստի առաջին քայլերը՝ գծեր, ձևեր, հիմնական գույներ, նկարել երևակայությամբ և բնությունից, թղթե աշխատանքներ։", "Первые шаги в искусстве: линии, формы, основные цвета, рисование по воображению и с натуры, работа с бумагой."),
    curriculumNotes: notes(
      ["Armenia grade 1, «Կերպարվեստ» (1 h/week): acquaintance with art materials, line and spot, basic shapes, three primary colours and mixing, warm and cold colours, drawing from observation and imagination, appliqué, Armenian ornaments and folk motifs.", "Հայաստան, 1-ին դասարան, «Կերպարվեստ» (1 ժ/շաբ.)՝ ծանոթություն նյութերին, գիծ և բիծ, հիմնական ձևեր, երեք հիմնական գույն և դրանց խառնում, տաք և սառը գույներ, նկարել դիտումով և երևակայությամբ, ապլիկացիա, հայկական զարդանախշեր և ժողովրդական մոտիվներ։", "Армения, 1 класс, «Կերպարվեստ» (1 ч/нед.): знакомство с материалами, линия и пятно, основные формы, три основных цвета и смешение, тёплые и холодные цвета, рисование с натуры и по воображению, аппликация, армянские орнаменты и народные мотивы."],
      ["Russia grade 1, ИЗО (ФГОС НОО, 1 h/week, 33 h; Неменский programme «Ты изображаешь, украшаешь, строишь»): the three 'Master Brothers' — depicting, decorating, constructing; spot, line, colour, volume; nature as a source of forms.", "Ռուսաստան, 1-ին դասարան, ИЗО (ФГОС НОО, 1 ժ/շաբ., 33 ժ, Նեմենսկու ծրագիր)՝ երեք «վարպետ եղբայրները»՝ պատկերել, զարդարել, կառուցել, բիծ, գիծ, գույն, ծավալ, բնությունը որպես ձևերի աղբյուր։", "Россия, 1 класс, ИЗО (ФГОС НОО, 1 ч/нед., 33 ч; программа Неменского «Ты изображаешь, украшаешь, строишь»): три «Брата-Мастера» — изображение, украшение, постройка; пятно, линия, цвет, объём; природа как источник форм."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
    units: [
      {
        title: t("Lines and shapes", "Գծեր և ձևեր", "Линии и формы"),
        summary: t("Holding a pencil, kinds of lines, turning lines into shapes and pictures.", "Մատիտը բռնել, գծերի տեսակները, գծերը դարձնել ձևեր և պատկերներ։", "Как держать карандаш, виды линий, превращение линий в формы и картинки."),
        lessons: [
          {
            slug: "magic-line",
            title: t("The magic line", "Կախարդական գիծը", "Волшебная линия"),
            durationMin: 40,
            objectives: {
              en: ["Draw straight, wavy, zigzag and spiral lines", "Control pressure to make thin and thick lines", "Create a picture using only lines"],
              hy: ["Գծել ուղիղ, ալիքաձև, զիգզագ և պարուրաձև գծեր", "Վերահսկել սեղմումը՝ բարակ և հաստ գծեր ստանալու համար", "Ստեղծել պատկեր միայն գծերով"],
              ru: ["Проводить прямые, волнистые, зигзагообразные и спиральные линии", "Регулировать нажим для тонких и толстых линий", "Создать картинку только из линий"],
            },
            content: {
              en: `## Every drawing starts with a line

A line is the path of a moving point. Put your pencil on the paper and move it: you have made a line! Lines can be:

- **straight** — like a ruler, a road, a flagpole
- **wavy** — like waves, hills, a snake
- **zigzag** — like lightning, mountains, a crocodile's teeth
- **spiral** — like a snail shell, a lollipop
- **dotted** — like footprints in snow

### Thin and thick

Press lightly — the line is **thin** and pale. Press harder — it becomes **thick** and dark. Try drawing one line that starts thin and grows thick, like a river widening.

### How to hold the pencil

Hold the pencil about two fingers above the tip, not too tight. Your hand should rest on the paper. Move your whole arm for long lines, only your fingers for short ones.

### Let's make a line picture

1. Draw a wavy line across the paper: this is the sea.
2. Above it, zigzag lines make mountains.
3. A spiral in the sky is the sun.
4. Short straight lines going down are rain. Or sunbeams!
5. Dotted lines are a path to a house made of straight lines.

Use **only lines**, no colouring yet. See how many things you can show!

### Look around

Find five lines in the classroom: the edge of a desk, a crack in the wall, the cord of a lamp… What kind of lines are they?

### Artists and lines

Armenian artist **Martiros Saryan** used bold, simple lines to draw mountains. Many ancient Armenian manuscripts begin with letters drawn as birds made of flowing lines — look for a picture of one.`,
              hy: `## Ամեն նկար սկսվում է գծից

Գիծը շարժվող կետի հետքն է։ Մատիտը դիր թղթի վրա և շարժիր․ դու գիծ ես գծել։ Գծերը լինում են․

- **ուղիղ**՝ քանոնի, ճանապարհի, դրոշակաձողի նման
- **ալիքաձև**՝ ալիքների, բլուրների, օձի նման
- **զիգզագ**՝ կայծակի, սարերի, կոկորդիլոսի ատամների նման
- **պարուրաձև**՝ խխունջի խեցու, շաքարեղեգի նման
- **կետագիծ**՝ ձյան վրա հետքերի նման

### Բարակ և հաստ

Թեթև սեղմիր՝ գիծը **բարակ** է և գունատ։ Ավելի ուժեղ սեղմիր՝ **հաստ** ու մուգ է դառնում։ Փորձիր գծել մեկ գիծ, որ սկսվում է բարակ և դառնում հաստ՝ ինչպես լայնացող գետ։

### Ինչպես բռնել մատիտը

Մատիտը բռնիր սրածայրից մոտ երկու մատ վերև, ոչ շատ ամուր։ Ձեռքը պետք է հենվի թղթին։ Երկար գծերի համար շարժիր ամբողջ թևը, կարճերի համար՝ միայն մատները։

### Գծերից նկար սարքենք

1. Թղթի վրայով ալիքաձև գիծ գծիր․ դա ծովն է։
2. Նրա վերևում զիգզագ գծերը սարեր են։
3. Երկնքում պարույրը արևն է։
4. Ներքև գնացող կարճ ուղիղ գծերը անձրև են։ Կամ արևի շողեր։
5. Կետագծերը ճանապարհ են դեպի ուղիղ գծերից կազմված տուն։

Օգտագործիր **միայն գծեր**, դեռ մի գունավորիր։ Տես, քանի՞ բան կարող ես ցույց տալ։

### Նայիր շուրջդ

Դասարանում գտիր հինգ գիծ՝ սեղանի եզրը, պատի ճաքը, լամպի լարը… Ի՞նչ տեսակի գծեր են դրանք։

### Նկարիչները և գծերը

Հայ նկարիչ **Մարտիրոս Սարյանը** սարերը նկարում էր համարձակ, պարզ գծերով։ Հին հայկական ձեռագրերը հաճախ սկսվում են թռչնատառերով՝ հոսուն գծերից կազմված թռչուն-տառերով։ Փորձիր գտնել դրանցից մեկի պատկերը։`,
              ru: `## Каждый рисунок начинается с линии

Линия — это след движущейся точки. Поставь карандаш на бумагу и проведи им: ты нарисовал линию! Линии бывают:

- **прямые** — как линейка, дорога, флагшток
- **волнистые** — как волны, холмы, змея
- **зигзагом** — как молния, горы, зубы крокодила
- **спиральные** — как раковина улитки, леденец
- **пунктирные** — как следы на снегу

### Тонкие и толстые

Нажми слабо — линия **тонкая** и бледная. Нажми сильнее — она станет **толстой** и тёмной. Попробуй провести одну линию, которая начинается тонкой и становится толстой, как расширяющаяся река.

### Как держать карандаш

Держи карандаш примерно на два пальца выше кончика, не слишком крепко. Рука должна опираться на бумагу. Для длинных линий двигай всей рукой, для коротких — только пальцами.

### Сделаем картинку из линий

1. Проведи волнистую линию через лист: это море.
2. Над ней зигзаги — горы.
3. Спираль на небе — солнце.
4. Короткие прямые линии вниз — дождь. Или солнечные лучи!
5. Пунктир — дорожка к домику из прямых линий.

Используй **только линии**, пока без раскрашивания. Посмотри, сколько всего можно показать!

### Посмотри вокруг

Найди пять линий в классе: край парты, трещина на стене, провод лампы… Какие это линии?

### Художники и линии

Армянский художник **Мартирос Сарьян** рисовал горы смелыми простыми линиями. Многие древние армянские рукописи начинаются с букв-птиц, составленных из плавных линий — найди картинку одной из них.`,
            },
            quiz: [
              q(t("Which line looks like a snail shell?", "Ո՞ր գիծն է խխունջի խեցու նման։", "Какая линия похожа на раковину улитки?"), [t("zigzag", "զիգզագ", "зигзаг"), t("spiral", "պարուրաձև", "спираль"), t("straight", "ուղիղ", "прямая")], 1),
              q(t("To make a thick dark line you should…", "Հաստ մուգ գիծ ստանալու համար պետք է…", "Чтобы линия стала толстой и тёмной, нужно…"), [t("press harder", "ավելի ուժեղ սեղմել", "нажать сильнее"), t("press lightly", "թեթև սեղմել", "нажать слабее")], 0),
            ],
          },
          { slug: "shapes-around-us", title: t("Shapes around us: circle, square, triangle", "Ձևերը մեր շուրջ․ շրջան, քառակուսի, եռանկյուն", "Формы вокруг нас: круг, квадрат, треугольник") },
          { slug: "spot-and-silhouette", title: t("Spot and silhouette", "Բիծ և ուրվագիծ", "Пятно и силуэт") },
          { slug: "drawing-from-shapes", title: t("Drawing animals from simple shapes", "Կենդանիներ պարզ ձևերից", "Рисуем животных из простых форм") },
        ],
      },
      unit(t("Colour", "Գույն", "Цвет"), t("Three primary colours, mixing, warm and cold, the rainbow.", "Երեք հիմնական գույն, խառնում, տաք և սառը, ծիածան։", "Три основных цвета, смешение, тёплые и холодные, радуга."), [
        ["primary-colours", "Three primary colours", "Երեք հիմնական գույներ", "Три основных цвета"],
        ["mixing-colours", "Mixing: orange, green, violet", "Խառնում․ նարնջագույն, կանաչ, մանուշակագույն", "Смешиваем: оранжевый, зелёный, фиолетовый"],
        ["warm-cold", "Warm and cold colours", "Տաք և սառը գույներ", "Тёплые и холодные цвета"],
        ["rainbow", "The rainbow and its order", "Ծիածանը և նրա գույների կարգը", "Радуга и порядок её цветов"],
        ["autumn-colours", "Colours of autumn: leaf printing", "Աշնան գույները․ տերևների տպագրություն", "Краски осени: отпечатки листьев"],
      ]),
      unit(t("Depicting", "Պատկերել", "Изображение"), t("Drawing what we see and what we imagine; people, trees, houses.", "Նկարել, ինչ տեսնում ենք և ինչ երևակայում ենք․ մարդիկ, ծառեր, տներ։", "Рисуем то, что видим и что представляем: люди, деревья, дома."), [
        ["drawing-a-tree", "Drawing a tree", "Ծառ նկարել", "Рисуем дерево"],
        ["drawing-a-person", "Drawing a person: head, body, arms, legs", "Մարդ նկարել․ գլուխ, մարմին, ձեռքեր, ոտքեր", "Рисуем человека: голова, туловище, руки, ноги"],
        ["my-house", "My house and my street", "Իմ տունը և իմ փողոցը", "Мой дом и моя улица"],
        ["fairy-tale-hero", "A fairy-tale hero", "Հեքիաթի հերոս", "Сказочный герой"],
        ["winter-picture", "Winter picture on dark paper", "Ձմեռային պատկեր մուգ թղթի վրա", "Зимняя картина на тёмной бумаге"],
      ]),
      unit(t("Decorating", "Զարդարել", "Украшение"), t("Patterns, ornaments, symmetry, Armenian and Russian folk motifs.", "Նախշեր, զարդանախշեր, համաչափություն, հայկական և ռուսական ժողովրդական մոտիվներ։", "Узоры, орнаменты, симметрия, армянские и русские народные мотивы."), [
        ["pattern-in-a-strip", "Pattern in a strip", "Նախշ շերտի մեջ", "Узор в полосе"],
        ["armenian-ornament", "Armenian ornament: pomegranate and grapes", "Հայկական զարդանախշ․ նուռ և խաղող", "Армянский орнамент: гранат и виноград"],
        ["russian-folk-pattern", "Russian folk patterns: Dymkovo toy", "Ռուսական ժողովրդական նախշեր․ Դիմկովոյի խաղալիք", "Русские народные узоры: дымковская игрушка"],
        ["symmetry-butterfly", "Symmetry: the butterfly print", "Համաչափություն․ թիթեռի տպագրություն", "Симметрия: отпечаток-бабочка"],
        ["decorating-a-cup", "Decorating a cup", "Բաժակի զարդարում", "Украшаем чашку"],
      ]),
      unit(t("Constructing", "Կառուցել", "Постройка"), t("Paper, scissors, glue: appliqué, paper buildings, holiday cards.", "Թուղթ, մկրատ, սոսինձ․ ապլիկացիա, թղթե շինություններ, տոնական բացիկներ։", "Бумага, ножницы, клей: аппликация, бумажные постройки, открытки."), [
        ["applique-basics", "Appliqué: cut and glue", "Ապլիկացիա․ կտրել և սոսնձել", "Аппликация: вырезаем и наклеиваем"],
        ["paper-city", "A paper city", "Թղթե քաղաք", "Бумажный город"],
        ["holiday-card", "Holiday card", "Տոնական բացիկ", "Праздничная открытка"],
        ["year-exhibition", "Our exhibition: looking at our work", "Մեր ցուցահանդեսը․ նայում ենք մեր աշխատանքներին", "Наша выставка: смотрим на свои работы"],
      ]),
    ],
  },
  {
    subject: "drawing",
    grade: 2,
    ...g(2),
    description: t("Art materials and techniques, colour moods, drawing from nature, folk art of Armenia and Russia.", "Նյութեր և տեխնիկաներ, գույնի տրամադրություն, նկարել բնությունից, Հայաստանի և Ռուսաստանի ժողովրդական արվեստ։", "Художественные материалы и техники, настроение цвета, рисование с натуры, народное искусство Армении и России."),
    curriculumNotes: notes(
      ["Armenia grade 2 (1 h/week): gouache, watercolour, pastel; colour moods; drawing from nature (fruit, leaves, toys); illustration of Armenian fairy tales (H. Tumanyan); carpet ornaments; clay modelling.", "Հայաստան, 2-րդ դասարան (1 ժ/շաբ.)՝ գուաշ, ջրաներկ, պաստել, գույնի տրամադրություն, նկարել բնությունից (միրգ, տերև, խաղալիք), Թումանյանի հեքիաթների նկարազարդում, գորգի զարդանախշեր, կավե ծեփ։", "Армения, 2 класс (1 ч/нед.): гуашь, акварель, пастель; настроение цвета; рисование с натуры (фрукты, листья, игрушки); иллюстрации к сказкам О. Туманяна; ковровые орнаменты; лепка из глины."],
      ["Russia grade 2, ИЗО («Искусство и ты», 34 h): how and with what artists work; reality and fantasy; what art says; how art speaks (colour, line, rhythm, proportion).", "Ռուսաստան, 2-րդ դասարան, ИЗО («Արվեստը և դու», 34 ժ)՝ ինչպես և ինչով են աշխատում նկարիչները, իրականություն և երևակայություն, ինչ է ասում արվեստը, ինչպես է խոսում արվեստը (գույն, գիծ, ռիթմ, համամասնություն)։", "Россия, 2 класс, ИЗО («Искусство и ты», 34 ч): как и чем работают художники; реальность и фантазия; о чём говорит искусство; как говорит искусство (цвет, линия, ритм, пропорции)."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
    units: [
      unit(t("Materials and techniques", "Նյութեր և տեխնիկաներ", "Материалы и техники"), t("Gouache, watercolour, pastel, wax crayons, mixed media.", "Գուաշ, ջրաներկ, պաստել, մոմամատիտ, խառը տեխնիկա։", "Гуашь, акварель, пастель, восковые мелки, смешанная техника."), [
        ["gouache-three-colours", "Gouache: three colours and white", "Գուաշ․ երեք գույն և սպիտակ", "Гуашь: три цвета и белила"],
        ["watercolour-wet", "Watercolour: wet on wet", "Ջրաներկ․ թաց թղթի վրա", "Акварель: по сырому"],
        ["pastel-crayons", "Pastel and wax crayons", "Պաստել և մոմամատիտներ", "Пастель и восковые мелки"],
        ["monotype-printing", "Printing and monotype", "Տպագրություն և մոնոտիպ", "Печать и монотипия"],
      ]),
      unit(t("Colour and mood", "Գույն և տրամադրություն", "Цвет и настроение"), t("Quiet and loud colours, light and dark, colour tells a story.", "Հանգիստ և աղմկոտ գույներ, լույս և մութ, գույնը պատմություն է պատմում։", "Тихие и звонкие цвета, светлое и тёмное, цвет рассказывает историю."), [
        ["quiet-loud-colours", "Quiet and loud colours", "Հանգիստ և աղմկոտ գույներ", "Тихие и звонкие цвета"],
        ["light-dark", "Light and dark: adding white and black", "Լույս և մութ․ սպիտակի և սևի ավելացում", "Светлое и тёмное: добавляем белый и чёрный"],
        ["colour-of-feelings", "The colour of feelings: joy and sadness", "Զգացմունքների գույնը․ ուրախություն և տխրություն", "Цвет чувств: радость и грусть"],
        ["sea-moods", "The sea in different moods", "Ծովը տարբեր տրամադրություններով", "Море в разном настроении"],
      ]),
      unit(t("Drawing from nature", "Նկարել բնությունից", "Рисование с натуры"), t("Fruit, leaves, a toy; proportions and placement on the page.", "Միրգ, տերև, խաղալիք, համամասնություններ և տեղադրում թղթի վրա։", "Фрукты, листья, игрушка; пропорции и размещение на листе."), [
        ["fruit-still-life", "Fruit on a plate", "Միրգ ափսեի մեջ", "Фрукты на тарелке"],
        ["leaf-study", "Study of a leaf", "Տերևի ուսումնասիրություն", "Этюд листа"],
        ["favourite-toy", "My favourite toy", "Իմ սիրելի խաղալիքը", "Моя любимая игрушка"],
        ["placing-on-page", "Big and small: placing objects on the page", "Մեծ և փոքր․ առարկաների տեղադրումը թղթի վրա", "Большое и маленькое: размещение на листе"],
      ]),
      unit(t("Reality and fantasy", "Իրականություն և երևակայություն", "Реальность и фантазия"), t("Illustrating fairy tales, inventing creatures, dream houses.", "Հեքիաթների նկարազարդում, արարածների հորինում, երազանքի տներ։", "Иллюстрируем сказки, придумываем существ, дома мечты."), [
        ["tumanyan-tale", "Illustrating a Tumanyan tale", "Թումանյանի հեքիաթի նկարազարդում", "Иллюстрация к сказке Туманяна"],
        ["russian-tale", "Illustrating a Russian folk tale", "Ռուսական ժողովրդական հեքիաթի նկարազարդում", "Иллюстрация к русской народной сказке"],
        ["invented-creature", "An invented creature", "Հորինված արարած", "Придуманное существо"],
        ["dream-house", "The house of my dreams", "Երազանքիս տունը", "Дом моей мечты"],
      ]),
      unit(t("Folk art and modelling", "Ժողովրդական արվեստ և ծեփ", "Народное искусство и лепка"), t("Carpet patterns, khachkar motifs, Russian lacquer, clay animals.", "Գորգի նախշեր, խաչքարի մոտիվներ, ռուսական լաքապատ նկար, կավե կենդանիներ։", "Ковровые узоры, мотивы хачкаров, русская лаковая роспись, животные из глины."), [
        ["carpet-pattern", "Armenian carpet pattern", "Հայկական գորգի նախշ", "Узор армянского ковра"],
        ["khachkar-motifs", "Khachkar: the stone lace", "Խաչքար․ քարե ժանյակ", "Хачкар: каменное кружево"],
        ["khokhloma-gorodets", "Khokhloma and Gorodets painting", "Խոխլոմա և Գորոդեց նկարազարդում", "Хохлома и городецкая роспись"],
        ["clay-animals", "Clay modelling: animals", "Կավե ծեփ․ կենդանիներ", "Лепка из глины: животные"],
      ]),
    ],
  },
  {
    subject: "drawing",
    grade: 3,
    ...g(3),
    description: t("Art around us: in the home, on the street, in the theatre and museum; composition, still life, landscape, portrait beginnings.", "Արվեստը մեր շուրջ՝ տանը, փողոցում, թատրոնում և թանգարանում, կոմպոզիցիա, նատյուրմորտ, բնանկար, դիմանկարի սկիզբ։", "Искусство вокруг нас: дома, на улице, в театре и музее; композиция, натюрморт, пейзаж, начала портрета."),
    curriculumNotes: notes(
      ["Armenia grade 3 (1 h/week): composition basics (centre, balance), still life, landscape of Armenia (Ararat, Sevan), architecture (churches, old Yerevan), book illustration, theatre masks, museum visit (National Gallery).", "Հայաստան, 3-րդ դասարան (1 ժ/շաբ.)՝ կոմպոզիցիայի հիմունքներ (կենտրոն, հավասարակշռություն), նատյուրմորտ, Հայաստանի բնանկար (Արարատ, Սևան), ճարտարապետություն (եկեղեցիներ, հին Երևան), գրքի նկարազարդում, թատերական դիմակներ, թանգարանի այց (Ազգային պատկերասրահ)։", "Армения, 3 класс (1 ч/нед.): основы композиции (центр, равновесие), натюрморт, пейзаж Армении (Арарат, Севан), архитектура (церкви, старый Ереван), книжная иллюстрация, театральные маски, посещение музея (Национальная галерея)."],
      ["Russia grade 3, ИЗО («Искусство вокруг нас», 34 h): art in your home, on the streets of your city, the artist and the spectacle (theatre, circus, posters), the artist and the museum (painting genres).", "Ռուսաստան, 3-րդ դասարան, ИЗО («Արվեստը մեր շուրջ», 34 ժ)՝ արվեստը տանը, քաղաքի փողոցներում, նկարիչը և տեսարանը (թատրոն, կրկես, ազդագրեր), նկարիչը և թանգարանը (նկարչության ժանրերը)։", "Россия, 3 класс, ИЗО («Искусство вокруг нас», 34 ч): искусство в твоём доме, на улицах твоего города, художник и зрелище (театр, цирк, афиша), художник и музей (жанры живописи)."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
    units: [
      unit(t("Art in the home", "Արվեստը տանը", "Искусство в твоём доме"), t("Toys, dishes, textiles, wallpaper, books, cards — designed by artists.", "Խաղալիքներ, սպասք, գործվածք, պաստառ, գրքեր, բացիկներ՝ նկարիչների ստեղծած։", "Игрушки, посуда, ткани, обои, книги, открытки — их создают художники."), [
        ["designing-dishes", "Designing dishes", "Սպասքի ձևավորում", "Посуда у тебя дома"],
        ["fabric-pattern", "Pattern for a fabric", "Գործվածքի նախշ", "Узор для ткани"],
        ["book-illustration", "Illustrating a book page", "Գրքի էջի նկարազարդում", "Иллюстрация книжной страницы"],
        ["greeting-card-design", "Designing a greeting card", "Շնորհավորական բացիկի ձևավորում", "Открытка"],
      ]),
      unit(t("Art on the street", "Արվեստը փողոցում", "Искусство на улицах твоего города"), t("Architecture, monuments, parks, fences, lamps, transport.", "Ճարտարապետություն, հուշարձաններ, պուրակներ, ցանկապատեր, լապտերներ, տրանսպորտ։", "Архитектура, памятники, парки, ограды, фонари, транспорт."), [
        ["architecture-armenia", "Armenian architecture: Garni, Zvartnots, Yerevan", "Հայկական ճարտարապետություն․ Գառնի, Զվարթնոց, Երևան", "Армянская архитектура: Гарни, Звартноц, Ереван"],
        ["monuments-parks", "Monuments and parks", "Հուշարձաններ և պուրակներ", "Памятники и парки"],
        ["lanterns-fences", "Lanterns and openwork fences", "Լապտերներ և ցանցկեն ցանկապատեր", "Фонари и ажурные ограды"],
        ["transport-design", "Designing transport", "Տրանսպորտի ձևավորում", "Транспорт в городе"],
      ]),
      unit(t("Artist and spectacle", "Նկարիչը և տեսարանը", "Художник и зрелище"), t("Theatre, puppets, masks, circus, posters.", "Թատրոն, տիկնիկներ, դիմակներ, կրկես, ազդագրեր։", "Театр, куклы, маски, цирк, афиша."), [
        ["theatre-masks", "Theatre masks", "Թատերական դիմակներ", "Театральные маски"],
        ["puppet-design", "Designing a puppet", "Տիկնիկի ձևավորում", "Театр кукол"],
        ["circus-poster", "Circus poster", "Կրկեսի ազդագիր", "Афиша и плакат"],
        ["stage-set", "Stage set for a fairy tale", "Հեքիաթի բեմադրության դեկոր", "Декорации к сказке"],
      ]),
      unit(t("Artist and museum", "Նկարիչը և թանգարանը", "Художник и музей"), t("Genres: landscape, portrait, still life, historical painting; sculpture.", "Ժանրեր․ բնանկար, դիմանկար, նատյուրմորտ, պատմական նկար, քանդակ։", "Жанры: пейзаж, портрет, натюрморт, историческая картина; скульптура."), [
        ["landscape-genre", "Landscape: Ararat and Sevan", "Բնանկար․ Արարատ և Սևան", "Пейзаж: Арарат и Севан"],
        ["still-life-genre", "Still life in the museum", "Նատյուրմորտը թանգարանում", "Натюрморт в музее"],
        ["portrait-genre", "Portrait: first attempt", "Դիմանկար․ առաջին փորձ", "Портрет: первая попытка"],
        ["sculpture", "Sculpture in parks and museums", "Քանդակը պուրակներում և թանգարաններում", "Скульптура в парках и музеях"],
        ["museum-visit", "Our museum visit: National Gallery of Armenia / Tretyakov", "Մեր թանգարանային այցը․ Ազգային պատկերասրահ / Տրետյակով", "Наш музей: Национальная галерея Армении / Третьяковка"],
      ]),
    ],
  },
  {
    subject: "drawing",
    grade: 4,
    ...g(4),
    description: t("Every nation is an artist: landscape and people of Armenia and Russia, ancient cities, art of other peoples, heroes and holidays.", "Յուրաքանչյուր ժողովուրդ նկարիչ է՝ Հայաստանի և Ռուսաստանի բնապատկերն ու մարդիկ, հին քաղաքներ, այլ ժողովուրդների արվեստ, հերոսներ և տոներ։", "Каждый народ — художник: природа и люди Армении и России, древние города, искусство других народов, герои и праздники."),
    curriculumNotes: notes(
      ["Armenia grade 4 (1 h/week): landscape of the native land, national costume (taraz), village and city, medieval Armenian miniature (Toros Roslin), art of neighbouring peoples, heroes of Armenian epic (David of Sassoun), holidays (Vardavar, Trndez).", "Հայաստան, 4-րդ դասարան (1 ժ/շաբ.)՝ հայրենի երկրի բնապատկեր, տարազ, գյուղ և քաղաք, միջնադարյան հայկական մանրանկարչություն (Թորոս Ռոսլին), հարևան ժողովուրդների արվեստ, հայկական էպոսի հերոսներ (Սասունցի Դավիթ), տոներ (Վարդավառ, Տրնդեզ)։", "Армения, 4 класс (1 ч/нед.): пейзаж родной земли, национальный костюм (тараз), село и город, средневековая армянская миниатюра (Торос Рослин), искусство соседних народов, герои армянского эпоса (Давид Сасунский), праздники (Вардавар, Трндез)."],
      ["Russia grade 4, ИЗО («Каждый народ — художник», 34 h): origins of native art (landscape, village, beauty of a person), ancient cities of the land, every nation is an artist (Japan, mountain and steppe peoples, Central Asia, Ancient Greece, medieval Europe), art unites nations.", "Ռուսաստան, 4-րդ դասարան, ИЗО («Յուրաքանչյուր ժողովուրդ նկարիչ է», 34 ժ)՝ հայրենի արվեստի ակունքներ, հին քաղաքներ, այլ ժողովուրդների արվեստ (Ճապոնիա, լեռնային և տափաստանային ժողովուրդներ, Միջին Ասիա, Հին Հունաստան, միջնադարյան Եվրոպա), արվեստը միավորում է ժողովուրդներին։", "Россия, 4 класс, ИЗО («Каждый народ — художник», 34 ч): истоки родного искусства (пейзаж, деревня, красота человека), древние города нашей земли, каждый народ — художник (Япония, народы гор и степей, Средняя Азия, Древняя Греция, средневековая Европа), искусство объединяет народы."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
    units: [
      unit(t("Origins of native art", "Հայրենի արվեստի ակունքները", "Истоки родного искусства"), t("Native landscape, village, the beauty of a person, national costume.", "Հայրենի բնապատկեր, գյուղ, մարդու գեղեցկություն, ազգային տարազ։", "Родной пейзаж, деревня, красота человека, национальный костюм."), [
        ["native-landscape", "Landscape of the native land", "Հայրենի երկրի բնապատկերը", "Пейзаж родной земли"],
        ["village-architecture", "Village: wooden and stone houses", "Գյուղ․ փայտե և քարե տներ", "Деревня: деревянный и каменный дом"],
        ["national-costume", "National costume: taraz and sarafan", "Ազգային տարազ․ տարազ և սարաֆան", "Национальный костюм: тараз и сарафан"],
        ["folk-holidays", "Folk holidays: Vardavar, Maslenitsa", "Ժողովրդական տոներ․ Վարդավառ, Մասլենիցա", "Народные праздники: Вардавар, Масленица"],
      ]),
      unit(t("Ancient cities", "Հին քաղաքներ", "Древние города нашей земли"), t("Fortress towns, temples, monasteries, the medieval miniature.", "Ամրոց-քաղաքներ, տաճարներ, վանքեր, միջնադարյան մանրանկար։", "Города-крепости, храмы, монастыри, средневековая миниатюра."), [
        ["fortress-town", "A fortress town: Amberd, Novgorod kremlin", "Ամրոց-քաղաք․ Ամբերդ, Նովգորոդի կրեմլ", "Город-крепость: Амберд, Новгородский кремль"],
        ["temples-monasteries", "Temples and monasteries: Geghard, Haghpat", "Տաճարներ և վանքեր․ Գեղարդ, Հաղպատ", "Храмы и монастыри: Гегард, Ахпат"],
        ["armenian-miniature", "Armenian miniature: Toros Roslin", "Հայկական մանրանկարչություն․ Թորոս Ռոսլին", "Армянская миниатюра: Торос Рослин"],
        ["icon-fresco", "Icons and frescoes", "Սրբապատկերներ և որմնանկարներ", "Иконы и фрески"],
      ]),
      unit(t("Every nation is an artist", "Յուրաքանչյուր ժողովուրդ նկարիչ է", "Каждый народ — художник"), t("Japan, mountain and steppe peoples, Central Asia, Ancient Greece, medieval Europe.", "Ճապոնիա, լեռնային և տափաստանային ժողովուրդներ, Միջին Ասիա, Հին Հունաստան, միջնադարյան Եվրոպա։", "Япония, народы гор и степей, Средняя Азия, Древняя Греция, средневековая Европа."), [
        ["japan-art", "Art of Japan", "Ճապոնիայի արվեստ", "Страна восходящего солнца"],
        ["mountain-steppe", "Peoples of mountains and steppes", "Լեռների և տափաստանների ժողովուրդներ", "Народы гор и степей"],
        ["central-asia", "Cities of Central Asia", "Միջին Ասիայի քաղաքներ", "Города в пустыне"],
        ["ancient-greece", "Ancient Greece: temple and vase", "Հին Հունաստան․ տաճար և սափոր", "Древняя Эллада: храм и вазопись"],
        ["medieval-europe", "Medieval Europe: Gothic", "Միջնադարյան Եվրոպա․ գոթիկա", "Европейские города Средневековья"],
      ]),
      unit(t("Art unites nations", "Արվեստը միավորում է ժողովուրդներին", "Искусство объединяет народы"), t("Motherhood, old age, heroes, compassion, youth — eternal themes in art.", "Մայրություն, ծերություն, հերոսներ, գթասրտություն, երիտասարդություն՝ արվեստի հավերժական թեմաներ։", "Материнство, старость, герои, сострадание, юность — вечные темы искусства."), [
        ["motherhood", "Motherhood in art", "Մայրությունը արվեստում", "Материнство"],
        ["wisdom-of-age", "Wisdom of old age", "Ծերության իմաստնությունը", "Мудрость старости"],
        ["epic-heroes", "Heroes: David of Sassoun, Ilya Muromets", "Հերոսներ․ Սասունցի Դավիթ, Իլյա Մուրոմեց", "Герои: Давид Сасунский, Илья Муромец"],
        ["youth-dreams", "Youth and dreams; final exhibition", "Երիտասարդություն և երազանքներ, ամփոփիչ ցուցահանդես", "Юность и надежды; итоговая выставка"],
      ]),
    ],
  },
  {
    subject: "drawing",
    grade: 5,
    ...g(5),
    description: t("Decorative and applied art: ornament, symbols, folk costume, art in the life of society, modern design.", "Դեկորատիվ-կիրառական արվեստ՝ զարդանախշ, նշաններ, ժողովրդական տարազ, արվեստը հասարակության կյանքում, ժամանակակից դիզայն։", "Декоративно-прикладное искусство: орнамент, символы, народный костюм, искусство в жизни общества, современный дизайн."),
    curriculumNotes: notes(
      ["Armenia grade 5 (1 h/week): ornament and its language (geometric, plant, zoomorphic), Armenian decorative arts (carpets, ceramics, metalwork, khachkars), costume, heraldry and symbols, modern applied design.", "Հայաստան, 5-րդ դասարան (1 ժ/շաբ.)՝ զարդանախշ և նրա լեզուն (երկրաչափական, բուսական, կենդանական), հայկական դեկորատիվ արվեստ (գորգ, խեցեգործություն, մետաղագործություն, խաչքար), տարազ, զինանշաններ և նշաններ, ժամանակակից կիրառական դիզայն։", "Армения, 5 класс (1 ч/нед.): орнамент и его язык (геометрический, растительный, зооморфный), армянское декоративное искусство (ковры, керамика, металл, хачкары), костюм, геральдика и символы, современный прикладной дизайн."],
      ["Russia grade 5, ИЗО («Декоративно-прикладное искусство в жизни человека», 34 h): ancient roots of folk art, links with modern life, decorative art of different epochs, decorative art in modern world.", "Ռուսաստան, 5-րդ դասարան, ИЗО («Դեկորատիվ-կիրառական արվեստը մարդու կյանքում», 34 ժ)՝ ժողովրդական արվեստի հին արմատներ, կապը ժամանակակից կյանքի հետ, տարբեր դարաշրջանների դեկորատիվ արվեստ, դեկորատիվ արվեստը ժամանակակից աշխարհում։", "Россия, 5 класс, ИЗО («Декоративно-прикладное искусство в жизни человека», 34 ч): древние корни народного искусства, связь времён в народном искусстве, декор — человек, общество, время; декоративное искусство в современном мире."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
    units: [
      unit(t("Ancient roots of folk art", "Ժողովրդական արվեստի հին արմատները", "Древние корни народного искусства"), t("Ancient symbols, ornament structure, the peasant house and its decoration.", "Հին նշաններ, զարդանախշի կառուցվածք, գյուղացիական տուն և նրա զարդարանք։", "Древние образы, структура орнамента, крестьянский дом и его убранство."), [
        ["ancient-symbols", "Ancient symbols: sun, earth, water, tree of life", "Հին նշաններ․ արև, երկիր, ջուր, կենաց ծառ", "Древние образы: солнце, земля, вода, древо жизни"],
        ["ornament-types", "Geometric, plant and zoomorphic ornament", "Երկրաչափական, բուսական և կենդանական զարդանախշ", "Геометрический, растительный и зооморфный орнамент"],
        ["ornament-rhythm", "Rhythm and symmetry in ornament", "Ռիթմ և համաչափություն զարդանախշում", "Ритм и симметрия в орнаменте"],
        ["house-decoration", "Decoration of the traditional house", "Ավանդական տան զարդարանքը", "Убранство традиционного жилища"],
      ]),
      unit(t("Armenian decorative arts", "Հայկական դեկորատիվ արվեստ", "Армянское декоративное искусство"), t("Carpets, ceramics, metalwork, khachkar, manuscript ornament.", "Գորգեր, խեցեգործություն, մետաղագործություն, խաչքար, ձեռագրի զարդանախշ։", "Ковры, керамика, металл, хачкар, орнамент рукописей."), [
        ["armenian-carpets", "Armenian carpets: dragon carpets", "Հայկական գորգեր․ վիշապագորգեր", "Армянские ковры: вишапагорги"],
        ["ceramics-kutahya", "Ceramics: from Urartu to Kütahya", "Խեցեգործություն․ Ուրարտուից Կուտինա", "Керамика: от Урарту до Кютахьи"],
        ["khachkar-design", "Designing a khachkar composition", "Խաչքարի կոմպոզիցիայի ձևավորում", "Композиция хачкара"],
        ["manuscript-ornament", "Manuscript ornament and bird letters", "Ձեռագրի զարդանախշ և թռչնատառեր", "Орнамент рукописей и буквы-птицы"],
      ]),
      unit(t("Decoration, person, society, time", "Զարդ, մարդ, հասարակություն, ժամանակ", "Декор — человек, общество, время"), t("Costume of different epochs, heraldry, emblems.", "Տարբեր դարաշրջանների տարազ, զինանշանագիտություն, խորհրդանիշներ։", "Костюм разных эпох, геральдика, эмблемы."), [
        ["costume-epochs", "Costume tells about the epoch", "Տարազը պատմում է դարաշրջանի մասին", "Одежда говорит о человеке"],
        ["heraldry", "Heraldry: coats of arms of Armenia and Russia", "Զինանշանագիտություն․ Հայաստանի և Ռուսաստանի զինանշանները", "Геральдика: гербы Армении и России"],
        ["class-emblem", "Designing our class emblem", "Մեր դասարանի խորհրդանիշի ձևավորում", "Эмблема нашего класса"],
      ]),
      unit(t("Decorative art today", "Դեկորատիվ արվեստն այսօր", "Декоративное искусство в современном мире"), t("Modern ceramics, glass, textile, jewellery; a collective project.", "Ժամանակակից խեցեգործություն, ապակի, գործվածք, ոսկերչություն, կոլեկտիվ նախագիծ։", "Современная керамика, стекло, текстиль, ювелирное искусство; коллективный проект."), [
        ["modern-crafts", "Modern ceramics, glass and textile", "Ժամանակակից խեցեգործություն, ապակի և գործվածք", "Современное выставочное искусство"],
        ["jewellery-design", "Jewellery design", "Զարդերի դիզայն", "Ювелирное искусство"],
        ["collective-panel", "Collective decorative panel", "Կոլեկտիվ դեկորատիվ պանո", "Коллективное декоративное панно"],
      ]),
    ],
  },
  {
    subject: "drawing",
    grade: 6,
    ...g(6),
    description: t("Fine art in human life: the language of drawing and painting, still life, portrait, landscape, perspective.", "Կերպարվեստը մարդու կյանքում՝ գծանկարի և նկարչության լեզուն, նատյուրմորտ, դիմանկար, բնանկար, հեռանկար։", "Изобразительное искусство в жизни человека: язык рисунка и живописи, натюрморт, портрет, пейзаж, перспектива."),
    curriculumNotes: notes(
      ["Armenia grade 6 (1 h/week): kinds of fine art, graphic means (line, tone, texture), colour science, still life with light and shade, proportions of the face and figure, portrait, linear and aerial perspective, landscape, Armenian painters (Saryan, Aivazovsky, Bashinjaghian).", "Հայաստան, 6-րդ դասարան (1 ժ/շաբ.)՝ կերպարվեստի տեսակները, գրաֆիկական միջոցներ (գիծ, տոն, ֆակտուրա), գունագիտություն, նատյուրմորտ լույս-ստվերով, դեմքի և կազմվածքի համամասնություններ, դիմանկար, գծային և օդային հեռանկար, բնանկար, հայ նկարիչներ (Սարյան, Այվազովսկի, Բաշինջաղյան)։", "Армения, 6 класс (1 ч/нед.): виды изобразительного искусства, графические средства (линия, тон, фактура), цветоведение, натюрморт со светотенью, пропорции лица и фигуры, портрет, линейная и воздушная перспектива, пейзаж, армянские живописцы (Сарьян, Айвазовский, Башинджагян)."],
      ["Russia grade 6, ИЗО («Изобразительное искусство в жизни человека», 34 h): kinds of art and the basics of imagery, the world of our things (still life), the image of a person (portrait), man and space (landscape).", "Ռուսաստան, 6-րդ դասարան, ИЗО («Կերպարվեստը մարդու կյանքում», 34 ժ)՝ արվեստի տեսակները և պատկերային լեզվի հիմունքներ, մեր իրերի աշխարհը (նատյուրմորտ), մարդու կերպարը (դիմանկար), մարդը և տարածությունը (բնանկար)։", "Россия, 6 класс, ИЗО («Изобразительное искусство в жизни человека», 34 ч): виды изобразительного искусства и основы образного языка, мир наших вещей (натюрморт), вглядываясь в человека (портрет), человек и пространство (пейзаж)."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
    units: [
      unit(t("The language of fine art", "Կերպարվեստի լեզուն", "Виды изобразительного искусства и основы образного языка"), t("Drawing, painting, graphics, sculpture; line, tone, texture, colour.", "Գծանկար, նկարչություն, գրաֆիկա, քանդակ, գիծ, տոն, ֆակտուրա, գույն։", "Рисунок, живопись, графика, скульптура; линия, тон, фактура, цвет."), [
        ["kinds-of-art", "Kinds and genres of fine art", "Կերպարվեստի տեսակներն ու ժանրերը", "Виды и жанры изобразительного искусства"],
        ["line-tone-hatching", "Line, tone and hatching", "Գիծ, տոն և շտրիխ", "Линия, тон и штриховка"],
        ["colour-wheel", "Colour wheel, complementary colours, saturation", "Գունային շրջան, փոխլրացնող գույներ, հագեցվածություն", "Цветовой круг, дополнительные цвета, насыщенность"],
        ["texture-materials", "Texture and materials in sculpture", "Ֆակտուրա և նյութեր քանդակում", "Фактура и материалы в скульптуре"],
      ]),
      unit(t("The world of things: still life", "Իրերի աշխարհը․ նատյուրմորտ", "Мир наших вещей. Натюрморт"), t("Construction of objects, light and shade, still life in graphics and colour.", "Առարկաների կառուցում, լույս և ստվեր, նատյուրմորտ գրաֆիկայում և գույնով։", "Конструкция предметов, светотень, натюрморт в графике и в цвете."), [
        ["object-construction", "Geometric construction of objects", "Առարկաների երկրաչափական կառուցումը", "Понятие формы; геометрические тела"],
        ["light-and-shade", "Light and shade on a simple form", "Լույս և ստվեր պարզ ձևի վրա", "Освещение; свет и тень"],
        ["graphic-still-life", "Still life in pencil", "Նատյուրմորտ մատիտով", "Натюрморт в графике"],
        ["colour-still-life", "Still life in colour", "Նատյուրմորտ գույնով", "Цвет в натюрморте"],
      ]),
      unit(t("Looking at a person: portrait", "Նայելով մարդուն․ դիմանկար", "Вглядываясь в человека. Портрет"), t("Proportions of the head, construction, portrait in graphics and colour, self-portrait.", "Գլխի համամասնություններ, կառուցում, դիմանկար գրաֆիկայում և գույնով, ինքնանկար։", "Пропорции головы, конструкция, портрет в графике и цвете, автопортрет."), [
        ["head-proportions", "Proportions and construction of the head", "Գլխի համամասնությունները և կառուցումը", "Конструкция головы человека и её пропорции"],
        ["portrait-graphics", "Graphic portrait", "Գրաֆիկական դիմանկար", "Графический портретный рисунок"],
        ["portrait-colour", "Portrait in colour; mood", "Դիմանկար գույնով, տրամադրություն", "Портрет в живописи; роль цвета"],
        ["self-portrait", "Self-portrait", "Ինքնանկար", "Автопортрет"],
        ["great-portraits", "Great portraits: Hakob Hovnatanyan, Repin, Serov", "Մեծ դիմանկարներ․ Հակոբ Հովնաթանյան, Ռեպին, Սերով", "Великие портретисты: Овнатанян, Репин, Серов"],
      ]),
      unit(t("Man and space: landscape", "Մարդը և տարածությունը․ բնանկար", "Человек и пространство. Пейзаж"), t("Linear and aerial perspective, landscape composition, city landscape.", "Գծային և օդային հեռանկար, բնանկարի կոմպոզիցիա, քաղաքային բնանկար։", "Линейная и воздушная перспектива, композиция пейзажа, городской пейзаж."), [
        ["linear-perspective", "Linear perspective: horizon and vanishing point", "Գծային հեռանկար․ հորիզոն և անհետացման կետ", "Правила построения перспективы"],
        ["aerial-perspective", "Aerial perspective", "Օդային հեռանկար", "Воздушная перспектива"],
        ["landscape-mood", "Landscape and mood: Saryan's Armenia", "Բնանկար և տրամադրություն․ Սարյանի Հայաստանը", "Пейзаж — настроение: Армения Сарьяна"],
        ["city-landscape", "City landscape", "Քաղաքային բնանկար", "Городской пейзаж"],
      ]),
    ],
  },
  {
    subject: "drawing",
    grade: 7,
    ...g(7),
    description: t("Design and architecture in human life: composition basics, graphic design, typography, architecture, interior and the designed environment.", "Դիզայնը և ճարտարապետությունը մարդու կյանքում՝ կոմպոզիցիայի հիմունքներ, գրաֆիկական դիզայն, տառատեսակ, ճարտարապետություն, ինտերիեր և ձևավորված միջավայր։", "Дизайн и архитектура в жизни человека: основы композиции, графический дизайн, шрифт, архитектура, интерьер и проектируемая среда."),
    curriculumNotes: notes(
      ["Armenia grade 7 (1 h/week, last year of Kerparvest as a separate subject): composition laws, poster and font, book design, architecture of Armenia from Urartu to Tamanyan's Yerevan, interior and landscape design, final project. From grade 8 art continues within «Արվեստ».", "Հայաստան, 7-րդ դասարան (1 ժ/շաբ., Կերպարվեստի՝ որպես առանձին առարկայի վերջին տարին)՝ կոմպոզիցիայի օրենքներ, պաստառ և տառատեսակ, գրքի ձևավորում, Հայաստանի ճարտարապետությունը Ուրարտուից մինչև Թամանյանի Երևան, ինտերիերի և լանդշաֆտի դիզայն, ավարտական նախագիծ։ 8-րդ դասարանից արվեստը շարունակվում է «Արվեստ» առարկայի մեջ։", "Армения, 7 класс (1 ч/нед., последний год Кերպարվեստ как отдельного предмета): законы композиции, плакат и шрифт, оформление книги, архитектура Армении от Урарту до Еревана Таманяна, дизайн интерьера и ландшафта, итоговый проект. С 8 класса искусство продолжается в предмете «Արվեստ»."],
      ["Russia grade 7, ИЗО («Дизайн и архитектура в жизни человека», 34 h, last year of compulsory ИЗО): art of composition (basics of design and architecture), the world of things (from plane to volume), city and man, man in the mirror of design and architecture.", "Ռուսաստան, 7-րդ դասարան, ИЗО («Դիզայնը և ճարտարապետությունը մարդու կյանքում», 34 ժ, պարտադիր ИЗО-ի վերջին տարին)՝ կոմպոզիցիայի արվեստ, իրերի աշխարհ (հարթությունից ծավալ), քաղաքը և մարդը, մարդը դիզայնի և ճարտարապետության հայելում։", "Россия, 7 класс, ИЗО («Дизайн и архитектура в жизни человека», 34 ч, последний год обязательного ИЗО): искусство композиции — основа дизайна и архитектуры, в мире вещей и зданий, город и человек, человек в зеркале дизайна и архитектуры."],
    ),
    hoursPerWeek: { armenia: 1, russia: 1 },
    units: [
      unit(t("The art of composition", "Կոմպոզիցիայի արվեստ", "Искусство композиции — основа дизайна и архитектуры"), t("Balance, rhythm, contrast, dominant; font and poster; book layout.", "Հավասարակշռություն, ռիթմ, կոնտրաստ, դոմինանտ, տառատեսակ և պաստառ, գրքի մակետ։", "Равновесие, ритм, контраст, доминанта; шрифт и плакат; макет книги."), [
        ["composition-laws", "Laws of composition: balance, rhythm, dominant", "Կոմպոզիցիայի օրենքներ․ հավասարակշռություն, ռիթմ, դոմինանտ", "Основы композиции: равновесие, ритм, доминанта"],
        ["colour-in-design", "Colour in design: harmony and contrast", "Գույնը դիզայնում․ հարմոնիա և կոնտրաստ", "Цвет — элемент композиционного творчества"],
        ["typography-armenian-letters", "Font and letter: Armenian and Cyrillic typography", "Տառատեսակ և տառ․ հայկական և կիրիլիցյան տիպոգրաֆիա", "Буква — строка — текст: армянский и кириллический шрифт"],
        ["poster-design", "Poster: image plus text", "Պաստառ․ պատկեր և տեքստ", "Плакат: изображение и слово"],
        ["book-magazine-layout", "Book and magazine layout", "Գրքի և ամսագրի մակետ", "Многообразие форм полиграфического дизайна"],
      ]),
      unit(t("From plane to volume", "Հարթությունից ծավալ", "В мире вещей и зданий"), t("Volumetric composition, module, architectural models from paper, product design.", "Ծավալային կոմպոզիցիա, մոդուլ, թղթե ճարտարապետական մակետներ, արտադրանքի դիզայն։", "Объёмно-пространственная композиция, модуль, макеты из бумаги, дизайн вещи."), [
        ["volumetric-composition", "Volumetric composition from paper", "Ծավալային կոմպոզիցիա թղթից", "Объёмно-пространственная макетирование"],
        ["module-structure", "Module and structure in architecture", "Մոդուլ և կառուցվածք ճարտարապետությունում", "Конструкция: часть и целое; модуль"],
        ["building-model", "Model of a building", "Շենքի մակետ", "Макет здания"],
        ["product-design", "Designing a thing: form follows function", "Իրի դիզայն․ ձևը հետևում է գործառույթին", "Вещь: красота и целесообразность"],
      ]),
      unit(t("City and man", "Քաղաքը և մարդը", "Город и человек"), t("History of architecture, Armenian architecture from Urartu to Tamanyan, modern city, landscape design.", "Ճարտարապետության պատմություն, հայկական ճարտարապետությունը Ուրարտուից Թամանյան, ժամանակակից քաղաք, լանդշաֆտի դիզայն։", "История архитектуры, армянская архитектура от Урарту до Таманяна, современный город, ландшафтный дизайн."), [
        ["architecture-history", "Architecture through the ages", "Ճարտարապետությունը դարերի միջով", "Город сквозь времена и страны"],
        ["armenian-architecture-7", "Armenian architecture: Urartu, Ani, Tamanyan's Yerevan", "Հայկական ճարտարապետություն․ Ուրարտու, Անի, Թամանյանի Երևան", "Армянская архитектура: Урарту, Ани, Ереван Таманяна"],
        ["modern-city", "The modern city: planning and transport", "Ժամանակակից քաղաք․ պլանավորում և տրանսպորտ", "Город сегодня и завтра"],
        ["landscape-design", "Landscape design: park and courtyard", "Լանդշաֆտի դիզայն․ պուրակ և բակ", "Природа и архитектура: ландшафтный дизайн"],
        ["interior-design", "Interior: my room", "Ինտերիեր․ իմ սենյակը", "Интерьер: моя комната"],
      ]),
      unit(t("Man in the mirror of design", "Մարդը դիզայնի հայելում", "Человек в зеркале дизайна и архитектуры"), t("Costume design, image and style, final design project.", "Հագուստի դիզայն, կերպար և ոճ, ավարտական դիզայն-նախագիծ։", "Дизайн костюма, образ и стиль, итоговый дизайн-проект."), [
        ["fashion-design", "Costume design: from taraz to streetwear", "Հագուստի դիզայն․ տարազից մինչև ժամանակակից", "Мода, культура и ты"],
        ["image-style", "Image and style; brand identity basics", "Կերպար և ոճ, բրենդի հիմունքներ", "Автопортрет на каждый день; стиль"],
        ["final-design-project", "Final design project and presentation", "Ավարտական նախագիծ և ներկայացում", "Итоговый дизайн-проект и защита"],
      ]),
    ],
  },
];
