import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Ancient roots of folk art", "Ժողովրդական արվեստի հին արմատները", "Древние корни народного искусства"),
  summary: t(
    "Ancient symbols, kinds of ornament, rhythm and symmetry, the decoration of the traditional house, everyday objects and folk embroidery.",
    "Հին նշաններ, զարդանախշի տեսակներ, ռիթմ և համաչափություն, ավանդական տան զարդարանքը, կենցաղային իրեր և ժողովրդական ասեղնագործություն։",
    "Древние образы, виды орнамента, ритм и симметрия, убранство традиционного жилища, предметы быта и народная вышивка.",
  ),
  lessons: [
    lesson(
      "ancient-symbols",
      ["Ancient symbols: sun, earth, water, tree of life", "Հին նշաններ․ արև, երկիր, ջուր, կենաց ծառ", "Древние образы: солнце, земля, вода, древо жизни"],
      {
        en: ["Know the meaning of the main ancient symbols in folk art", "Find the same symbols in Armenian and Russian ornament", "Compose a decorative motif from ancient symbols"],
        hy: ["Իմանալ ժողովրդական արվեստի հիմնական հին նշանների իմաստը", "Գտնել նույն նշանները հայկական և ռուսական զարդանախշում", "Հին նշաններից կազմել դեկորատիվ մոտիվ"],
        ru: ["Знать значение главных древних образов народного искусства", "Находить одни и те же образы в армянском и русском орнаменте", "Составить декоративный мотив из древних знаков"],
      },
      {
        en: `## Signs older than letters

Long before writing, people drew signs on pots, stones, clothes and houses. Each sign was a short «word» about the world: the sun that gives life, the earth that feeds, the water that waters. Many of these signs still live in folk ornament.

| Symbol | How it is drawn | Meaning |
|---|---|---|
| **sun** | a circle, a rosette, a wheel with rays, a swirling rosette | light, warmth, life |
| **earth** | a rhombus or square, often divided into four with dots inside | a sown field, fertility |
| **water** | wavy lines, zigzags | rain, rivers, life-giving moisture |
| **tree of life** | a tree in the centre with birds or animals on both sides | the world, the family, life that continues |
| **bird** | a bird with spread wings or a pair of birds | the sky, spring, happiness |
| **horse** | a horse or a horse head | the sun moving across the sky, strength |

~~~art
pic arevakhach sun-sign tree-of-life water-sign earth-sign ram-horns
~~~

## In Armenian and Russian art

- The Armenian **eternity sign**, a rosette of swirling rays, is carved on old stones and khachkars and is a favourite sign today.
- The **tree of life** grows on Armenian carpets and khachkars and on Russian embroidered towels.
- The **rhombus with dots** – the sown field – is common in Russian embroidery.
- **Paired birds** facing a tree are found in both traditions.

The same ideas of life appear among many peoples because all farmers depended on the sun, the earth and the water.

~~~art
pic bird-motif horse eight-star
~~~

## Make a motif

1. Choose 2–3 symbols, for example the tree of life, birds and the sun.
2. Put the main symbol in the centre and repeat the others symmetrically.
3. Simplify the shapes: few lines, clear outlines.
4. Paint in 2–3 colours: red, black and white are traditional.

~~~art
steps arevakhach
~~~

~~~art
tasks
1. Why did people draw signs before writing appeared?
2. How is the sun drawn in ornament?
3. What does a rhombus with dots mean?
4. Describe the tree of life composition.
5. What is the Armenian eternity sign?
6. Why are the same symbols found among different peoples?
7. Make a decorative motif of 2–3 ancient symbols.
~~~

~~~art
hints
1. Each sign was a short «word» about the world. 2. As a circle, rosette, wheel with rays or swirling rosette. 3. A sown field, fertility. 4. A tree in the centre with birds or animals on both sides. 5. A rosette of swirling rays carved on stones and khachkars. 6. All farmers depended on the sun, the earth and the water. 7. Your work.
~~~`,
        hy: `## Տառերից հին նշաններ

Գրից շատ առաջ մարդիկ նշաններ էին նկարում ամանների, քարերի, հագուստի և տների վրա։ Յուրաքանչյուր նշան աշխարհի մասին կարճ «բառ» էր՝ կյանք տվող արևը, կերակրող երկիրը, ոռոգող ջուրը։ Այդ նշաններից շատերը մինչև հիմա ապրում են ժողովրդական զարդանախշում։

| Նշան | Ինչպես է նկարվում | Իմաստ |
|---|---|---|
| **արև** | շրջան, վարդյակ, ճառագայթներով անիվ, պտտվող վարդյակ | լույս, ջերմություն, կյանք |
| **երկիր** | շեղանկյուն կամ քառակուսի, հաճախ չորսի բաժանված՝ ներսում կետերով | ցանված դաշտ, պտղաբերություն |
| **ջուր** | ալիքաձև գծեր, զիգզագներ | անձրև, գետեր, կենարար խոնավություն |
| **կենաց ծառ** | ծառ կենտրոնում՝ երկու կողմերում թռչուններով կամ կենդանիներով | աշխարհը, ընտանիքը, շարունակվող կյանքը |
| **թռչուն** | տարածված թևերով թռչուն կամ զույգ թռչուններ | երկինք, գարուն, երջանկություն |
| **ձի** | ձի կամ ձիու գլուխ | երկնքով շարժվող արևը, ուժ |

~~~art
pic arevakhach sun-sign tree-of-life water-sign earth-sign ram-horns
~~~

## Հայկական և ռուսական արվեստում

- Հայկական **հավերժության նշանը**՝ պտտվող ճառագայթներով վարդյակը, փորագրված է հին քարերի և խաչքարերի վրա և այսօր էլ սիրված նշան է։
- **Կենաց ծառն** աճում է հայկական գորգերի և խաչքարերի վրա և ռուսական ասեղնագործ սրբիչների վրա։
- **Կետերով շեղանկյունը**՝ ցանված դաշտը, տարածված է ռուսական ասեղնագործության մեջ։
- Ծառին նայող **զույգ թռչուններ** հանդիպում են երկու ավանդույթներում էլ։

Կյանքի նույն գաղափարները հանդիպում են շատ ժողովուրդների մոտ, որովհետև բոլոր հողագործները կախված էին արևից, հողից և ջրից։

~~~art
pic bird-motif horse eight-star
~~~

## Կազմի՛ր մոտիվ

1. Ընտրի՛ր 2–3 նշան, օրինակ՝ կենաց ծառը, թռչունները և արևը։
2. Գլխավոր նշանը դի՛ր կենտրոնում, մյուսները կրկնի՛ր համաչափ։
3. Պարզեցրու՛ ձևերը՝ քիչ գծեր, հստակ եզրագծեր։
4. Ներկի՛ր 2–3 գույնով՝ կարմիրը, սևը և սպիտակն ավանդական են։

~~~art
steps arevakhach
~~~

~~~art
tasks
1. Ինչո՞ւ էին մարդիկ նշաններ նկարում մինչև գրի հայտնվելը։
2. Ինչպե՞ս է արևը նկարվում զարդանախշում։
3. Ի՞նչ է նշանակում կետերով շեղանկյունը։
4. Նկարագրի՛ր կենաց ծառի կոմպոզիցիան։
5. Ի՞նչ է հայկական հավերժության նշանը։
6. Ինչո՞ւ են նույն նշանները հանդիպում տարբեր ժողովուրդների մոտ։
7. 2–3 հին նշանից կազմի՛ր դեկորատիվ մոտիվ։
~~~

~~~art
hints
1. Յուրաքանչյուր նշան աշխարհի մասին կարճ «բառ» էր։ 2. Որպես շրջան, վարդյակ, ճառագայթներով անիվ կամ պտտվող վարդյակ։ 3. Ցանված դաշտ, պտղաբերություն։ 4. Ծառ կենտրոնում՝ երկու կողմերում թռչուններով կամ կենդանիներով։ 5. Պտտվող ճառագայթներով վարդյակ՝ փորագրված քարերի և խաչքարերի վրա։ 6. Բոլոր հողագործները կախված էին արևից, հողից և ջրից։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Знаки старше букв

Задолго до письменности люди рисовали знаки на сосудах, камнях, одежде и домах. Каждый знак был коротким «словом» о мире: солнце, дающее жизнь, земля, которая кормит, вода, которая поит. Многие из этих знаков до сих пор живут в народном орнаменте.

| Образ | Как изображают | Значение |
|---|---|---|
| **солнце** | круг, розетка, колесо с лучами, вихревая розетка | свет, тепло, жизнь |
| **земля** | ромб или квадрат, часто разделённый на четыре части, с точками внутри | засеянное поле, плодородие |
| **вода** | волнистые линии, зигзаги | дождь, реки, живительная влага |
| **древо жизни** | дерево в центре, по сторонам — птицы или звери | мир, род, продолжение жизни |
| **птица** | птица с раскрытыми крыльями или пара птиц | небо, весна, счастье |
| **конь** | конь или конская голова | солнце, движущееся по небу, сила |

~~~art
pic arevakhach sun-sign tree-of-life water-sign earth-sign ram-horns
~~~

## В армянском и русском искусстве

- Армянский **знак вечности** — розетка из закрученных лучей — вырезан на древних камнях и хачкарах и любим и сегодня.
- **Древо жизни** растёт на армянских коврах и хачкарах и на русских вышитых полотенцах.
- **Ромб с точками** — засеянное поле — часто встречается в русской вышивке.
- **Парные птицы** у дерева есть в обеих традициях.

Одни и те же образы жизни встречаются у многих народов, потому что все земледельцы зависели от солнца, земли и воды.

~~~art
pic bird-motif horse eight-star
~~~

## Составь мотив

1. Выбери 2–3 образа, например древо жизни, птиц и солнце.
2. Главный образ помести в центр, остальные повтори симметрично.
3. Упрости формы: мало линий, чёткие контуры.
4. Раскрась 2–3 цветами: красный, чёрный и белый — традиционные.

~~~art
steps arevakhach
~~~

~~~art
tasks
1. Зачем люди рисовали знаки до появления письменности?
2. Как изображают солнце в орнаменте?
3. Что означает ромб с точками?
4. Опиши композицию «древо жизни».
5. Что такое армянский знак вечности?
6. Почему одни и те же образы встречаются у разных народов?
7. Составь декоративный мотив из 2–3 древних знаков.
~~~

~~~art
hints
1. Каждый знак был коротким «словом» о мире. 2. Кругом, розеткой, колесом с лучами или вихревой розеткой. 3. Засеянное поле, плодородие. 4. Дерево в центре, по сторонам птицы или звери. 5. Розетка из закрученных лучей на камнях и хачкарах. 6. Все земледельцы зависели от солнца, земли и воды. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Wavy lines in ornament usually mean…", "Զարդանախշում ալիքաձև գծերը սովորաբար նշանակում են…", "Волнистые линии в орнаменте обычно означают…"), [t("water", "ջուր", "воду"), t("fire", "կրակ", "огонь"), t("stone", "քար", "камень")], 0),
        q(t("A rhombus with dots means…", "Կետերով շեղանկյունը նշանակում է…", "Ромб с точками означает…"), [t("a river", "գետ", "реку"), t("a sown field", "ցանված դաշտ", "засеянное поле"), t("a mountain", "լեռ", "гору")], 1),
        q(t("A tree with birds on both sides is…", "Երկու կողմերում թռչուններով ծառը…", "Дерево с птицами по сторонам — это…"), [t("a sun sign", "արևի նշան է", "знак солнца"), t("a sign of water", "ջրի նշան է", "знак воды"), t("the tree of life", "կենաց ծառն է", "древо жизни")], 2),
        q(t("A rosette of swirling rays is the Armenian sign of…", "Պտտվող ճառագայթներով վարդյակը հայկական … նշանն է։", "Розетка из закрученных лучей — армянский знак…"), [t("eternity", "հավերժության", "вечности"), t("winter", "ձմռան", "зимы"), t("war", "պատերազմի", "войны")], 0),
        q(t("The horse in folk art is linked with…", "Ժողովրդական արվեստում ձին կապված է…", "Конь в народном искусстве связан с…"), [t("the moon only", "միայն լուսնի հետ", "только с луной"), t("the sun moving across the sky", "երկնքով շարժվող արևի հետ", "движением солнца по небу"), t("rain", "անձրևի հետ", "дождём")], 1),
        q(t("Traditional colours for folk motifs are…", "Ժողովրդական մոտիվների ավանդական գույներն են…", "Традиционные цвета народных мотивов —"), [t("silver and violet", "արծաթագույնը և մանուշակագույնը", "серебряный и фиолетовый"), t("neon green and pink", "նեոնային կանաչը և վարդագույնը", "неоново-зелёный и розовый"), t("red, black and white", "կարմիրը, սևը և սպիտակը", "красный, чёрный и белый")], 2),
      ],
    ),
    lesson(
      "ornament-types",
      ["Geometric, plant and zoomorphic ornament", "Երկրաչափական, բուսական և կենդանական զարդանախշ", "Геометрический, растительный и зооморфный орнамент"],
      {
        en: ["Tell the main kinds of ornament apart", "Understand stylization: turning a real form into a decorative one", "Stylize a plant or an animal in three steps"],
        hy: ["Տարբերել զարդանախշի հիմնական տեսակները", "Հասկանալ ոճավորումը՝ իրական ձևը դեկորատիվի վերածելը", "Երեք քայլով ոճավորել բույս կամ կենդանի"],
        ru: ["Различать основные виды орнамента", "Понимать стилизацию: превращение реальной формы в декоративную", "Стилизовать растение или животное в три шага"],
      },
      {
        en: `## What ornament is made of

**Ornament** is a pattern of repeated elements that decorates an object. By its elements, ornament is divided into kinds:

| Kind | Elements | Examples |
|---|---|---|
| **geometric** | lines, dots, rhombuses, triangles, stars, meanders, interlace | Armenian carpets, tiles of Central Asia, Greek vases |
| **plant** | leaves, flowers, vines, fruit | grapes and pomegranates on khachkars, Khokhloma berries |
| **zoomorphic** | animals and birds | dragons on carpets, eagles on capitals, birds in manuscripts |
| **anthropomorphic** | human figures | dancers on vases, women's figures in embroidery |
| **with letters** | letters and inscriptions | bird-letters, Russian vyaz, Arabic script on tiles |

Many ornaments are **mixed**: a geometric frame with plants inside, birds sitting on vines.

~~~art
pic grapevine eight-star bird-motif
Three kinds of motifs: plant, geometric and animal. Which one is which?
~~~

## Stylization

An ornament does not copy nature exactly. The master **stylizes** the form: makes it simpler, more regular and more decorative.

| Step | What to do with a leaf |
|---|---|
| **1. from life** | draw a real leaf with all its veins and uneven edge |
| **2. simplify** | keep only the outline and the main vein; make the edge smooth |
| **3. decorate** | make it symmetrical, fill it with pattern, maybe turn its edge into curls |

The same works with animals: a real cat becomes a figure of a few curved lines; a dragon becomes a zigzag S-shape on a carpet.

~~~art
pic leaf-maple pomegranate
Stylization: a real leaf or fruit becomes a simple, clear sign. Draw it again with only a few lines.
~~~

## Task

1. Choose a plant (leaf, flower, pomegranate) or an animal (bird, fish, deer).
2. Draw it in three steps from real to decorative, side by side.
3. Repeat the stylized form in a strip of 4–5 elements.

~~~art
sketch guide=axis
~~~

~~~art
tasks
1. What is ornament?
2. Name five kinds of ornament.
3. What does zoomorphic mean?
4. Give two examples of plant ornament in Armenian art.
5. What is stylization?
6. Describe the three steps of stylizing a leaf.
7. Stylize a plant or animal in three steps and make a strip.
~~~

~~~art
hints
1. A pattern of repeated elements that decorates an object. 2. Geometric, plant, zoomorphic, anthropomorphic, with letters. 3. Made of animals and birds. 4. Grapes and pomegranates on khachkars. 5. Making a real form simpler, more regular and decorative. 6. Draw from life, simplify, decorate. 7. Your work.
~~~`,
        hy: `## Ինչից է կազմված զարդանախշը

**Զարդանախշը** կրկնվող տարրերի նախշ է, որը զարդարում է առարկան։ Ըստ տարրերի զարդանախշը բաժանվում է տեսակների․

| Տեսակ | Տարրեր | Օրինակներ |
|---|---|---|
| **երկրաչափական** | գծեր, կետեր, շեղանկյուններ, եռանկյուններ, աստղեր, մեանդրներ, հյուսքեր | հայկական գորգեր, Միջին Ասիայի սալիկներ, հունական սափորներ |
| **բուսական** | տերևներ, ծաղիկներ, որթատունկ, մրգեր | խաղող և նուռ խաչքարերի վրա, խոխլոմայի հատապտուղներ |
| **կենդանական** | կենդանիներ և թռչուններ | վիշապներ գորգերի վրա, արծիվներ խոյակների վրա, թռչուններ ձեռագրերում |
| **մարդակերպ** | մարդկային պատկերներ | պարողներ սափորների վրա, կանացի պատկերներ ասեղնագործության մեջ |
| **տառային** | տառեր և արձանագրություններ | թռչնագրեր, ռուսական վյազ, արաբական գիր սալիկների վրա |

Շատ զարդանախշեր **խառն** են՝ երկրաչափական շրջանակ՝ ներսում բույսերով, որթատունկի վրա նստած թռչուններ։

~~~art
pic grapevine eight-star bird-motif
Մոտիվների երեք տեսակ․ բուսական, երկրաչափական և կենդանական։ Ո՞րն է որը։
~~~

## Ոճավորում

Զարդանախշը ճշգրիտ չի կրկնօրինակում բնությունը։ Վարպետը **ոճավորում** է ձևը՝ դարձնում այն ավելի պարզ, կանոնավոր և դեկորատիվ։

| Քայլ | Ինչ անել տերևի հետ |
|---|---|
| **1. բնօրինակից** | նկարի՛ր իրական տերև՝ իր բոլոր ջղերով և անհարթ եզրով |
| **2. պարզեցրու՛** | պահի՛ր միայն եզրագիծը և գլխավոր ջիղը, եզրը դարձրու՛ հարթ |
| **3. զարդարի՛ր** | դարձրու՛ այն համաչափ, լցրու՛ նախշով, գուցե եզրը վերածի՛ր գանգուրների |

Նույնը վերաբերում է կենդանիներին․ իրական կատուն դառնում է մի քանի կոր գծերից պատկեր, վիշապը գորգի վրա դառնում է զիգզագաձև S։

~~~art
pic leaf-maple pomegranate
Ոճավորում․ իսկական տերևը կամ պտուղը դառնում է պարզ, հստակ նշան։ Նկարի՛ր այն նորից ընդամենը մի քանի գծով։
~~~

## Առաջադրանք

1. Ընտրի՛ր բույս (տերև, ծաղիկ, նուռ) կամ կենդանի (թռչուն, ձուկ, եղնիկ)։
2. Կողք կողքի նկարի՛ր այն երեք քայլով՝ իրականից դեկորատիվ։
3. Ոճավորված ձևը կրկնի՛ր 4–5 տարրից բաղկացած շերտում։

~~~art
sketch guide=axis
~~~

~~~art
tasks
1. Ի՞նչ է զարդանախշը։
2. Անվանի՛ր զարդանախշի հինգ տեսակ։
3. Ի՞նչ է նշանակում կենդանական (զոոմորֆ)։
4. Բե՛ր հայկական արվեստում բուսական զարդանախշի երկու օրինակ։
5. Ի՞նչ է ոճավորումը։
6. Նկարագրի՛ր տերևի ոճավորման երեք քայլերը։
7. Երեք քայլով ոճավորի՛ր բույս կամ կենդանի և կազմի՛ր շերտ։
~~~

~~~art
hints
1. Կրկնվող տարրերի նախշ, որը զարդարում է առարկան։ 2. Երկրաչափական, բուսական, կենդանական, մարդակերպ, տառային։ 3. Կենդանիներից և թռչուններից կազմված։ 4. Խաղող և նուռ խաչքարերի վրա։ 5. Իրական ձևն ավելի պարզ, կանոնավոր և դեկորատիվ դարձնելը։ 6. Նկարել բնօրինակից, պարզեցնել, զարդարել։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Из чего состоит орнамент

**Орнамент** — узор из повторяющихся элементов, украшающий предмет. По элементам орнамент делится на виды:

| Вид | Элементы | Примеры |
|---|---|---|
| **геометрический** | линии, точки, ромбы, треугольники, звёзды, меандры, плетёнка | армянские ковры, изразцы Средней Азии, греческие вазы |
| **растительный** | листья, цветы, лозы, плоды | виноград и гранаты на хачкарах, ягоды хохломы |
| **зооморфный** | звери и птицы | драконы на коврах, орлы на капителях, птицы в рукописях |
| **антропоморфный** | фигуры людей | танцоры на вазах, женские фигуры в вышивке |
| **буквенный** | буквы и надписи | буквы-птицы, русская вязь, арабское письмо на изразцах |

Многие орнаменты **смешанные**: геометрическая рамка с растениями внутри, птицы на виноградной лозе.

~~~art
pic grapevine eight-star bird-motif
Три вида мотивов: растительный, геометрический и животный. Какой где?
~~~

## Стилизация

Орнамент не копирует природу точно. Мастер **стилизует** форму: делает её проще, правильнее и декоративнее.

| Шаг | Что делать с листом |
|---|---|
| **1. с натуры** | нарисуй настоящий лист со всеми прожилками и неровным краем |
| **2. упрости** | оставь только контур и главную жилку; сделай край плавным |
| **3. укрась** | сделай его симметричным, заполни узором, можно превратить край в завитки |

С животными так же: настоящая кошка превращается в фигуру из нескольких изогнутых линий, дракон на ковре — в зигзаг в форме буквы S.

~~~art
pic leaf-maple pomegranate
Стилизация: настоящий лист или плод превращается в простой ясный знак. Нарисуй его снова несколькими линиями.
~~~

## Задание

1. Выбери растение (лист, цветок, гранат) или животное (птицу, рыбу, оленя).
2. Нарисуй его рядом в три шага — от реального к декоративному.
3. Повтори стилизованную форму в полосе из 4–5 элементов.

~~~art
sketch guide=axis
~~~

~~~art
tasks
1. Что такое орнамент?
2. Назови пять видов орнамента.
3. Что значит «зооморфный»?
4. Приведи два примера растительного орнамента в армянском искусстве.
5. Что такое стилизация?
6. Опиши три шага стилизации листа.
7. Стилизуй растение или животное в три шага и составь полосу.
~~~

~~~art
hints
1. Узор из повторяющихся элементов, украшающий предмет. 2. Геометрический, растительный, зооморфный, антропоморфный, буквенный. 3. Состоящий из зверей и птиц. 4. Виноград и гранаты на хачкарах. 5. Превращение реальной формы в более простую, правильную и декоративную. 6. Нарисовать с натуры, упростить, украсить. 7. Твоя работа.
~~~`,
      },
      [
        q(t("An ornament of animals and birds is…", "Կենդանիներից և թռչուններից զարդանախշը…", "Орнамент из зверей и птиц —"), [t("zoomorphic", "կենդանական է", "зооморфный"), t("geometric", "երկրաչափական է", "геометрический"), t("plant", "բուսական է", "растительный")], 0),
        q(t("Grapes on a khachkar are an example of … ornament.", "Խաչքարի խաղողը … զարդանախշի օրինակ է։", "Виноград на хачкаре — пример … орнамента."), [t("geometric", "երկրաչափական", "геометрического"), t("plant", "բուսական", "растительного"), t("letter", "տառային", "буквенного")], 1),
        q(t("Making a form simpler and more decorative is…", "Ձևն ավելի պարզ և դեկորատիվ դարձնելը…", "Сделать форму проще и декоративнее — это…"), [t("copying", "պատճենում է", "копирование"), t("shading", "ստվերարկում է", "штриховка"), t("stylization", "ոճավորում է", "стилизация")], 2),
        q(t("Meanders, rhombuses and stars belong to … ornament.", "Մեանդրները, շեղանկյունները և աստղերը պատկանում են … զարդանախշին։", "Меандры, ромбы и звёзды относятся к … орнаменту."), [t("geometric", "երկրաչափական", "геометрическому"), t("anthropomorphic", "մարդակերպ", "антропоморфному"), t("plant", "բուսական", "растительному")], 0),
        q(t("The first step of stylization is…", "Ոճավորման առաջին քայլն է…", "Первый шаг стилизации —"), [t("adding curls", "գանգուրներ ավելացնելը", "добавить завитки"), t("drawing from life", "բնօրինակից նկարելը", "нарисовать с натуры"), t("colouring the strip", "շերտը ներկելը", "раскрасить полосу")], 1),
        q(t("Russian vyaz is an example of … ornament.", "Ռուսական վյազը … զարդանախշի օրինակ է։", "Русская вязь — пример … орнамента."), [t("zoomorphic", "կենդանական", "зооморфного"), t("plant", "բուսական", "растительного"), t("letter", "տառային", "буквенного")], 2),
      ],
    ),
    lesson(
      "ornament-rhythm",
      ["Rhythm and symmetry in ornament", "Ռիթմ և համաչափություն զարդանախշում", "Ритм и симметрия в орнаменте"],
      {
        en: ["Know the three kinds of ornament composition: strip, rosette, mesh", "Use repetition, alternation, mirror and central symmetry", "Build three ornaments from one element"],
        hy: ["Իմանալ զարդանախշի կոմպոզիցիայի երեք տեսակ՝ շերտ, վարդյակ, ցանց", "Օգտագործել կրկնություն, հերթափոխում, հայելային և կենտրոնային համաչափություն", "Մեկ տարրից կառուցել երեք զարդանախշ"],
        ru: ["Знать три вида композиции орнамента: ленточный, розетта, сетчатый", "Применять повтор, чередование, зеркальную и центральную симметрию", "Построить три орнамента из одного элемента"],
      },
      {
        en: `## The rapport

The smallest part of an ornament that repeats is the **rapport** (from French «link»). It can be one leaf, or a leaf and a dot together.

~~~art
pattern layout=strip rhythm=repeat motifs=pomegranate,leaf,spiral palettes=armenian
~~~

## Three compositions

| Composition | Shape | Where |
|---|---|---|
| **strip (border)** | the rapport repeats along a line, left and right | the edge of a carpet, a belt, the hem of a dress, a frieze on a wall |
| **rosette (closed)** | the elements are placed in a circle or square around the centre | a plate, the middle of a carpet, a ceiling, a window in a church |
| **mesh (all-over)** | the rapport repeats in all directions and covers a surface | fabric, wallpaper, tiles, the field of a carpet |

~~~art
pattern layout=rosette rhythm=alternate motifs=flower,leaf,bird palettes=khokhloma
The same motifs, three compositions: switch between strip, rosette and grid.
~~~

## Kinds of rhythm

| Rhythm | Scheme | Feeling |
|---|---|---|
| **repetition** | A A A A | calm, steady |
| **alternation** | A B A B | lively |
| **growth** | a A **A** | movement, growth |
| **turning** | ↑ → ↓ ← | rotation, like a wheel |

## Kinds of symmetry

- **Mirror symmetry**: the left half is like the right half reflected in a mirror; the line between them is the axis. Many leaves, butterflies and Armenian carpet medallions are mirror-symmetric.
- **Central (rotational) symmetry**: the element turns around the centre, like the petals of a flower or the spokes of a wheel. The eternity sign is centrally symmetric but not mirror-symmetric.

~~~art
sketch mode=kaleido n=4 paper=cream
~~~

## Task: one element, three ornaments

1. Draw one simple element: a leaf, a bird, a triangle with a dot.
2. **Strip**: repeat it in a row; then try alternation with a second element.
3. **Rosette**: place it 4, 6 or 8 times around a centre.
4. **Mesh**: draw a grid of squares or rhombuses and put the element in every cell.
5. Paint all three in the same 3 colours and compare the moods.

~~~art
tasks
1. What is a rapport?
2. Name the three kinds of ornament composition.
3. Where is a strip ornament used?
4. Write the scheme of alternation.
5. What is the difference between mirror and central symmetry?
6. Which kind of symmetry does the eternity sign have?
7. Make three ornaments from one element.
~~~

~~~art
hints
1. The smallest part of an ornament that repeats. 2. Strip, rosette, mesh. 3. On edges: carpets, belts, hems, wall friezes. 4. A B A B. 5. Mirror: halves reflect each other across an axis; central: elements turn around the centre. 6. Central symmetry. 7. Your work.
~~~`,
        hy: `## Ռապորտ

Զարդանախշի ամենափոքր կրկնվող մասը **ռապորտն** է (ֆրանսերեն՝ «կապ»)։ Այն կարող է լինել մեկ տերև կամ տերևը և կետը միասին։

~~~art
pattern layout=strip rhythm=repeat motifs=pomegranate,leaf,spiral palettes=armenian
~~~

## Երեք կոմպոզիցիա

| Կոմպոզիցիա | Ձև | Որտեղ |
|---|---|---|
| **շերտ (եզրազարդ)** | ռապորտը կրկնվում է գծի երկայնքով՝ աջ և ձախ | գորգի եզրը, գոտին, զգեստի փեշը, պատի ֆրիզը |
| **վարդյակ (փակ)** | տարրերը դասավորված են շրջանի կամ քառակուսու մեջ՝ կենտրոնի շուրջը | ափսե, գորգի կենտրոն, առաստաղ, եկեղեցու պատուհան |
| **ցանց** | ռապորտը կրկնվում է բոլոր ուղղություններով և ծածկում մակերեսը | գործվածք, պաստառներ, սալիկներ, գորգի դաշտը |

~~~art
pattern layout=rosette rhythm=alternate motifs=flower,leaf,bird palettes=khokhloma
Նույն մոտիվները, երեք կոմպոզիցիա․ փոխի՛ր ժապավենը, վարդյակը և ցանցը։
~~~

## Ռիթմի տեսակներ

| Ռիթմ | Սխեմա | Զգացում |
|---|---|---|
| **կրկնություն** | A A A A | հանդարտ, կայուն |
| **հերթափոխում** | A B A B | աշխույժ |
| **աճ** | a A **A** | շարժում, աճ |
| **պտույտ** | ↑ → ↓ ← | պտույտ, ինչպես անիվը |

## Համաչափության տեսակներ

- **Հայելային համաչափություն**՝ ձախ կեսը նման է աջին՝ հայելու մեջ արտացոլված, նրանց միջև գիծն առանցքն է։ Շատ տերևներ, թիթեռներ և հայկական գորգերի մեդալյոններ հայելային համաչափ են։
- **Կենտրոնային (պտտական) համաչափություն**՝ տարրը պտտվում է կենտրոնի շուրջը, ինչպես ծաղկի թերթիկները կամ անիվի ճաղերը։ Հավերժության նշանը կենտրոնային համաչափ է, բայց ոչ հայելային։

~~~art
sketch mode=kaleido n=4 paper=cream
~~~

## Առաջադրանք․ մեկ տարր՝ երեք զարդանախշ

1. Նկարի՛ր մեկ պարզ տարր՝ տերև, թռչուն, կետով եռանկյուն։
2. **Շերտ**՝ կրկնի՛ր այն շարքով, հետո փորձի՛ր հերթափոխում երկրորդ տարրի հետ։
3. **Վարդյակ**՝ դասավորի՛ր այն 4, 6 կամ 8 անգամ կենտրոնի շուրջը։
4. **Ցանց**՝ նկարի՛ր քառակուսիների կամ շեղանկյունների ցանց և տարրը դի՛ր յուրաքանչյուր վանդակում։
5. Երեքն էլ ներկի՛ր նույն 3 գույնով և համեմատի՛ր տրամադրությունները։

~~~art
tasks
1. Ի՞նչ է ռապորտը։
2. Անվանի՛ր զարդանախշի կոմպոզիցիայի երեք տեսակները։
3. Որտե՞ղ է օգտագործվում շերտային զարդանախշը։
4. Գրի՛ր հերթափոխման սխեման։
5. Ո՞րն է հայելային և կենտրոնային համաչափության տարբերությունը։
6. Համաչափության ո՞ր տեսակն ունի հավերժության նշանը։
7. Մեկ տարրից կազմի՛ր երեք զարդանախշ։
~~~

~~~art
hints
1. Զարդանախշի ամենափոքր կրկնվող մասը։ 2. Շերտ, վարդյակ, ցանց։ 3. Եզրերին՝ գորգեր, գոտիներ, փեշեր, պատի ֆրիզներ։ 4. A B A B։ 5. Հայելայինում կեսերն արտացոլում են իրար առանցքի նկատմամբ, կենտրոնայինում տարրերը պտտվում են կենտրոնի շուրջը։ 6. Կենտրոնային համաչափություն։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Раппорт

Наименьшая повторяющаяся часть орнамента — **раппорт** (от французского «связь»). Это может быть один листок или листок вместе с точкой.

~~~art
pattern layout=strip rhythm=repeat motifs=pomegranate,leaf,spiral palettes=armenian
~~~

## Три композиции

| Композиция | Форма | Где |
|---|---|---|
| **ленточный (бордюр)** | раппорт повторяется вдоль линии, вправо и влево | край ковра, пояс, подол платья, фриз на стене |
| **розетта (замкнутый)** | элементы расположены в круге или квадрате вокруг центра | тарелка, середина ковра, плафон, окно храма |
| **сетчатый** | раппорт повторяется во все стороны и покрывает поверхность | ткань, обои, изразцы, поле ковра |

~~~art
pattern layout=rosette rhythm=alternate motifs=flower,leaf,bird palettes=khokhloma
Те же мотивы, три композиции: переключай полосу, розетку и сетку.
~~~

## Виды ритма

| Ритм | Схема | Ощущение |
|---|---|---|
| **повтор** | А А А А | спокойствие, устойчивость |
| **чередование** | А Б А Б | живость |
| **нарастание** | а А **А** | движение, рост |
| **поворот** | ↑ → ↓ ← | вращение, как колесо |

## Виды симметрии

- **Зеркальная симметрия**: левая половина похожа на правую, отражённую в зеркале; линия между ними — ось. Зеркально симметричны многие листья, бабочки и медальоны армянских ковров.
- **Центральная (поворотная) симметрия**: элемент поворачивается вокруг центра, как лепестки цветка или спицы колеса. Знак вечности центрально-симметричен, но не зеркален.

~~~art
sketch mode=kaleido n=4 paper=cream
~~~

## Задание: один элемент — три орнамента

1. Нарисуй один простой элемент: листок, птицу, треугольник с точкой.
2. **Лента**: повтори его в ряд; затем попробуй чередование со вторым элементом.
3. **Розетта**: расположи его 4, 6 или 8 раз вокруг центра.
4. **Сетка**: начерти сетку из квадратов или ромбов и помести элемент в каждую ячейку.
5. Раскрась все три одними и теми же 3 цветами и сравни настроение.

~~~art
tasks
1. Что такое раппорт?
2. Назови три вида композиции орнамента.
3. Где используют ленточный орнамент?
4. Запиши схему чередования.
5. Чем зеркальная симметрия отличается от центральной?
6. Какая симметрия у знака вечности?
7. Составь три орнамента из одного элемента.
~~~

~~~art
hints
1. Наименьшая повторяющаяся часть орнамента. 2. Ленточный, розетта, сетчатый. 3. По краям: ковры, пояса, подолы, фризы. 4. А Б А Б. 5. В зеркальной половины отражают друг друга относительно оси, в центральной элементы поворачиваются вокруг центра. 6. Центральная. 7. Твоя работа.
~~~`,
      },
      [
        q(t("The smallest repeating part of an ornament is the…", "Զարդանախշի ամենափոքր կրկնվող մասը…", "Наименьшая повторяющаяся часть орнамента —"), [t("rapport", "ռապորտն է", "раппорт"), t("axis", "առանցքն է", "ось"), t("frame", "շրջանակն է", "рамка")], 0),
        q(t("An ornament on the edge of a carpet is a…", "Գորգի եզրի զարդանախշը…", "Орнамент по краю ковра —"), [t("rosette", "վարդյակ է", "розетта"), t("strip", "շերտ է", "ленточный"), t("mesh", "ցանց է", "сетчатый")], 1),
        q(t("The scheme A B A B is…", "A B A B սխեման…", "Схема А Б А Б — это…"), [t("growth", "աճ է", "нарастание"), t("turning", "պտույտ է", "поворот"), t("alternation", "հերթափոխում է", "чередование")], 2),
        q(t("Petals turning around the centre show … symmetry.", "Կենտրոնի շուրջը պտտվող թերթիկները ցույց են տալիս … համաչափություն։", "Лепестки вокруг центра показывают … симметрию."), [t("central", "կենտրոնային", "центральную"), t("no", "ոչ մի", "никакую"), t("mirror only", "միայն հայելային", "только зеркальную")], 0),
        q(t("Fabric and wallpaper usually have a … ornament.", "Գործվածքն ու պաստառները սովորաբար ունեն … զարդանախշ։", "Ткань и обои обычно имеют … орнамент."), [t("rosette", "վարդյակային", "розеттный"), t("mesh", "ցանցային", "сетчатый"), t("single", "միակ", "единичный")], 1),
        q(t("A plate is often decorated with a…", "Ափսեն հաճախ զարդարում են…", "Тарелку часто украшают…"), [t("mesh only", "միայն ցանցով", "только сеткой"), t("strip only", "միայն շերտով", "только лентой"), t("rosette", "վարդյակով", "розеттой")], 2),
      ],
    ),
    lesson(
      "house-decoration",
      ["Decoration of the traditional house", "Ավանդական տան զարդարանքը", "Убранство традиционного жилища"],
      {
        en: ["Understand the traditional house as a model of the world", "Know the inside of a Russian izba and an Armenian village house", "Draw the interior of a traditional house with its decorated objects"],
        hy: ["Ավանդական տունը հասկանալ որպես աշխարհի մոդել", "Իմանալ ռուսական իզբայի և հայկական գյուղական տան ներսը", "Նկարել ավանդական տան ինտերիերը՝ իր զարդարված իրերով"],
        ru: ["Понимать традиционный дом как модель мира", "Знать внутреннее убранство русской избы и армянского сельского дома", "Нарисовать интерьер традиционного дома с его украшенными вещами"],
      },
      {
        en: `## A house is a small world

For people of the past the house was a **model of the world**. The roof was like the sky, so solar signs were carved on it. The walls and floor were the earth. The doors and windows were the boundaries between the safe inner world and the outer world, so they were decorated with protective ornaments.

## Inside a Russian izba

| Place or object | What it is |
|---|---|
| **stove** | the biggest thing in the house; it cooked, warmed and was a place to sleep |
| **red corner** | the most beautiful and honoured corner, opposite the stove, with icons and an embroidered towel; «red» means «beautiful» |
| **benches** | along the walls; built into the house |
| **spinning wheel** | carved and painted with suns, birds and horses; a girl kept it all her life |
| **embroidered towels** | hung over icons and windows; red patterns on white linen |

~~~art
pic izba
~~~

## Inside an Armenian village house

| Place or object | What it is |
|---|---|
| **tonir** | the clay oven in the floor: the heart of the house where bread was baked and the family gathered |
| **carpets** | on the floor and walls, warm and bright; woven by the women of the family |
| **wooden chest** | carved, for clothes and the dowry |
| **copper vessels** | jugs, trays and pots, polished to shine, displayed on shelves |
| **cradle** | wooden, carved with signs of the sun and protection |

~~~art
pic armenian-house carpet karas
~~~

## Composition of an interior

1. Draw the back wall, the floor line and the side walls going into depth.
2. Place the main object: the stove or the tonir.
3. Add furniture and objects along the walls.
4. Decorate: towels, carpets, carved chests, copper.
5. Warm light from the stove fire or a window makes the room cosy.

~~~art
pic room-plan
~~~

~~~art
tasks
1. Why was the house a model of the world?
2. Why were doors and windows decorated?
3. What is the red corner?
4. Why did a girl keep her spinning wheel all her life?
5. What was the tonir for?
6. Name three decorated objects of an Armenian village house.
7. Draw the interior of a traditional house.
~~~

~~~art
hints
1. The roof was like the sky, the walls and floor like the earth. 2. They were boundaries between the safe inside and the outside world, so they got protective ornaments. 3. The most beautiful and honoured corner of the izba with icons and a towel. 4. It was a precious, decorated personal thing. 5. Baking bread and gathering the family. 6. Carpets, a carved chest, copper vessels (also a cradle). 7. Your work.
~~~`,
        hy: `## Տունը փոքրիկ աշխարհ է

Անցյալի մարդկանց համար տունը **աշխարհի մոդել** էր։ Տանիքը նման էր երկնքին, ուստի դրա վրա փորագրում էին արևի նշաններ։ Պատերն ու հատակն երկիրն էին։ Դռներն ու պատուհանները սահման էին ապահով ներքին աշխարհի և արտաքին աշխարհի միջև, ուստի դրանք զարդարում էին պաշտպանիչ զարդանախշերով։

## Ռուսական իզբայի ներսը

| Տեղ կամ իր | Ինչ է |
|---|---|
| **վառարան** | տան ամենամեծ իրը, դրանով եփում էին, տաքանում, դրա վրա քնում |
| **կարմիր անկյուն** | ամենագեղեցիկ և պատվավոր անկյունը վառարանի դիմաց՝ սրբապատկերներով և ասեղնագործ սրբիչով, «կարմիր» նշանակում է «գեղեցիկ» |
| **նստարաններ** | պատերի երկայնքով՝ կառուցված տան մեջ |
| **ճախարակ** | փորագրված և ներկված արևներով, թռչուններով և ձիերով, աղջիկն այն պահում էր ամբողջ կյանքում |
| **ասեղնագործ սրբիչներ** | կախված էին սրբապատկերների և պատուհանների վրա, կարմիր նախշեր սպիտակ քաթանի վրա |

~~~art
pic izba
~~~

## Հայկական գյուղական տան ներսը

| Տեղ կամ իր | Ինչ է |
|---|---|
| **թոնիր** | հատակի կավե վառարանը՝ տան սիրտը, որտեղ հաց էին թխում և հավաքվում ընտանիքով |
| **գորգեր** | հատակին և պատերին, տաք և վառ, գործված էին ընտանիքի կանանց ձեռքով |
| **փայտե սնդուկ** | փորագրված, հագուստի և օժիտի համար |
| **պղնձե ամաններ** | սափորներ, սկուտեղներ և կաթսաներ՝ փայլեցված, ցուցադրված դարակների վրա |
| **օրորոց** | փայտե, փորագրված արևի և պաշտպանության նշաններով |

~~~art
pic armenian-house carpet karas
~~~

## Ինտերիերի կոմպոզիցիա

1. Նկարի՛ր հետևի պատը, հատակի գիծը և խորքը գնացող կողային պատերը։
2. Տեղադրի՛ր գլխավոր իրը՝ վառարանը կամ թոնիրը։
3. Պատերի երկայնքով ավելացրու՛ կահույք և իրեր։
4. Զարդարի՛ր՝ սրբիչներ, գորգեր, փորագրված սնդուկներ, պղինձ։
5. Վառարանի կրակի կամ պատուհանի տաք լույսը սենյակը հարմարավետ է դարձնում։

~~~art
pic room-plan
~~~

~~~art
tasks
1. Ինչո՞ւ էր տունն աշխարհի մոդել։
2. Ինչո՞ւ էին զարդարում դռներն ու պատուհանները։
3. Ի՞նչ է կարմիր անկյունը։
4. Ինչո՞ւ էր աղջիկը ճախարակը պահում ամբողջ կյանքում։
5. Ինչի՞ համար էր թոնիրը։
6. Անվանի՛ր հայկական գյուղական տան երեք զարդարված իր։
7. Նկարի՛ր ավանդական տան ինտերիերը։
~~~

~~~art
hints
1. Տանիքը նման էր երկնքին, պատերն ու հատակը՝ երկրին։ 2. Դրանք սահման էին ապահով ներսի և արտաքին աշխարհի միջև, ուստի ստանում էին պաշտպանիչ զարդանախշեր։ 3. Իզբայի ամենագեղեցիկ և պատվավոր անկյունը՝ սրբապատկերներով և սրբիչով։ 4. Այն թանկ, զարդարված անձնական իր էր։ 5. Հաց թխելու և ընտանիքով հավաքվելու համար։ 6. Գորգեր, փորագրված սնդուկ, պղնձե ամաններ (նաև օրորոց)։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Дом — маленький мир

Для людей прошлого дом был **моделью мира**. Крыша была как небо, поэтому на ней вырезали солярные знаки. Стены и пол были землёй. Двери и окна были границей между безопасным внутренним миром и внешним, поэтому их украшали оберегающими узорами.

## Внутри русской избы

| Место или предмет | Что это |
|---|---|
| **печь** | самый большой предмет в доме; в ней готовили, она грела, на ней спали |
| **красный угол** | самый красивый и почётный угол напротив печи, с иконами и вышитым полотенцем; «красный» значит «красивый» |
| **лавки** | вдоль стен, встроенные в дом |
| **прялка** | резная и расписная, с солнцами, птицами и конями; девушка хранила её всю жизнь |
| **вышитые полотенца** | висели над иконами и окнами; красные узоры на белом льне |

~~~art
pic izba
~~~

## Внутри армянского сельского дома

| Место или предмет | Что это |
|---|---|
| **тонир** | глиняная печь в полу — сердце дома, где пекли хлеб и собиралась семья |
| **ковры** | на полу и стенах, тёплые и яркие; их ткали женщины семьи |
| **деревянный сундук** | резной, для одежды и приданого |
| **медная утварь** | кувшины, подносы и котлы, начищенные до блеска, выставленные на полках |
| **колыбель** | деревянная, с резными знаками солнца и оберега |

~~~art
pic armenian-house carpet karas
~~~

## Композиция интерьера

1. Нарисуй заднюю стену, линию пола и боковые стены, уходящие в глубину.
2. Размести главный предмет — печь или тонир.
3. Добавь мебель и вещи вдоль стен.
4. Укрась: полотенца, ковры, резные сундуки, медь.
5. Тёплый свет от огня печи или окна делает комнату уютной.

~~~art
pic room-plan
~~~

~~~art
tasks
1. Почему дом был моделью мира?
2. Зачем украшали двери и окна?
3. Что такое красный угол?
4. Почему девушка хранила прялку всю жизнь?
5. Для чего служил тонир?
6. Назови три украшенных предмета армянского сельского дома.
7. Нарисуй интерьер традиционного дома.
~~~

~~~art
hints
1. Крыша была как небо, стены и пол — как земля. 2. Они были границей между безопасным домом и внешним миром, поэтому получали оберегающие узоры. 3. Самый красивый и почётный угол избы с иконами и полотенцем. 4. Это была дорогая украшенная личная вещь. 5. Чтобы печь хлеб и собираться всей семьёй. 6. Ковры, резной сундук, медная утварь (а также колыбель). 7. Твоя работа.
~~~`,
      },
      [
        q(t("In the traditional house the roof was like…", "Ավանդական տանը տանիքը նման էր…", "В традиционном доме крыша была как…"), [t("the sky", "երկնքին", "небо"), t("water", "ջրին", "вода"), t("a road", "ճանապարհին", "дорога")], 0),
        q(t("The red corner of an izba is…", "Իզբայի կարմիր անկյունը…", "Красный угол избы —"), [t("where firewood is kept", "որտեղ վառելափայտ են պահում", "место для дров"), t("the most honoured and beautiful corner", "ամենապատվավոր և գեղեցիկ անկյունն է", "самый почётный и красивый угол"), t("painted red", "ներկված է կարմիր", "окрашен в красный цвет")], 1),
        q(t("The heart of an Armenian village house is the…", "Հայկական գյուղական տան սիրտը…", "Сердце армянского сельского дома —"), [t("cradle", "օրորոցն է", "колыбель"), t("chest", "սնդուկն է", "сундук"), t("tonir", "թոնիրն է", "тонир")], 2),
        q(t("A carved and painted spinning wheel was decorated with…", "Փորագրված և ներկված ճախարակը զարդարված էր…", "Резная расписная прялка украшалась…"), [t("suns, birds and horses", "արևներով, թռչուններով և ձիերով", "солнцами, птицами и конями"), t("cars", "մեքենաներով", "машинами"), t("letters only", "միայն տառերով", "только буквами")], 0),
        q(t("Copper vessels in the house were…", "Տան պղնձե ամանները…", "Медную утварь в доме…"), [t("hidden in the ground", "թաքցնում էին հողում", "прятали в землю"), t("polished and displayed", "փայլեցնում և ցուցադրում էին", "начищали и выставляли"), t("painted black", "ներկում էին սև", "красили в чёрный")], 1),
        q(t("Doors and windows got protective ornaments because they were…", "Դռներն ու պատուհանները պաշտպանիչ զարդեր էին ստանում, որովհետև…", "Двери и окна получали обереги, потому что были…"), [t("made of glass", "ապակուց էին", "из стекла"), t("too small", "շատ փոքր էին", "слишком малы"), t("boundaries with the outer world", "սահման էին արտաքին աշխարհի հետ", "границей с внешним миром")], 2),
      ],
    ),
    lesson(
      "household-objects",
      ["Useful and beautiful: everyday objects", "Օգտակար և գեղեցիկ․ կենցաղային իրեր", "Польза и красота: предметы быта"],
      {
        en: ["Understand how the use of an object defines its form and decoration", "Know folk objects: the duck ladle, the salt cellar, the khnotsi, the copper jug", "Design a useful object in the shape of a bird or animal"],
        hy: ["Հասկանալ, թե ինչպես է իրի գործածությունն որոշում նրա ձևն ու զարդարանքը", "Իմանալ ժողովրդական իրեր՝ բադաձև շերեփ, աղաման, խնոցի, պղնձե սափոր", "Նախագծել օգտակար իր թռչնի կամ կենդանու տեսքով"],
        ru: ["Понимать, как назначение предмета определяет его форму и украшение", "Знать народные предметы: ковш-утку, солонку, хноци, медный кувшин", "Придумать полезный предмет в форме птицы или зверя"],
      },
      {
        en: `## Every object has a job

A folk master never made a thing «just for beauty». First the object had to be **useful**: to hold water, to scoop, to keep salt. Then it was made **beautiful**. The form came from the use, and the decoration followed the form.

## Folk objects

| Object | Use | How it is made beautiful |
|---|---|---|
| **ladle** (Russia) | to scoop and serve drinks | carved from one piece of wood in the shape of a floating **duck** or a horse; the handle is the head |
| **salt cellar** (Russia) | to keep salt on the table | a wooden bird or duck with a lid on its back |
| **khnotsi** (Armenia) | a vessel for churning butter; it was hung and swung | a clay or wooden vessel with a smooth rounded body and simple carved or painted bands |
| **copper jug** (Armenia) | to carry and keep water | a tall neck, a round body and a curved spout; engraved ornament on the shoulders |
| **wooden spoons** (both) | to eat | the handle carved and painted, the bowl left smooth |

~~~art
pic karas copper-jug khokhloma-bowl gorodets-board
~~~

## Rules of the master

1. **Use first**: a spoon must be comfortable in the hand; a jug must not spill.
2. **Decoration follows the form**: ornament goes on the widest parts, the shoulders, the edges and the handles.
3. **The material speaks**: wood keeps its texture, copper shines, clay stays warm and earthy.
4. **Not too much**: the part that touches food or water is left plain.

~~~art
steps jug
~~~

## Design your object

1. Choose the use: a box for pencils, a salt cellar, a cup, a jug.
2. Choose the image: a bird, a fish, a horse, a pomegranate.
3. Make the object's parts from the image: the handle from the head or tail, the lid from the wing.
4. Draw the object from the side and from above.
5. Add ornament where it suits the form.

~~~art
sketch guide=axis
Design a useful object: a jug, a spoon or a box. First the form for the job, then the decoration that follows the form.
~~~

~~~art
tasks
1. What came first for a folk master: use or beauty?
2. What was a Russian wooden ladle often shaped like?
3. What was the khnotsi used for?
4. Where is ornament placed on a jug?
5. Why is the part that touches food left plain?
6. What does «the material speaks» mean?
7. Design a useful object in the shape of a bird or animal.
~~~

~~~art
hints
1. Use. 2. A floating duck or a horse. 3. For churning butter. 4. On the shoulders and widest parts, edges and handles. 5. It is easier to clean and to use. 6. Each material keeps its own beauty: texture of wood, shine of copper, warmth of clay. 7. Your work.
~~~`,
        hy: `## Ամեն իր ունի իր գործը

Ժողովրդական վարպետն երբեք իր չէր պատրաստում «պարզապես գեղեցկության համար»։ Նախ իրը պետք է **օգտակար** լիներ՝ ջուր պահեր, շերեփեր, աղ պահեր։ Հետո այն դարձնում էին **գեղեցիկ**։ Ձևը բխում էր գործածությունից, իսկ զարդարանքը հետևում էր ձևին։

## Ժողովրդական իրեր

| Իր | Գործածություն | Ինչպես են գեղեցիկ դարձնում |
|---|---|---|
| **շերեփ** (Ռուսաստան) | խմիչքներ լցնելու և մատուցելու համար | փորագրվում է մեկ կտոր փայտից՝ լողացող **բադի** կամ ձիու տեսքով, բռնակը գլուխն է |
| **աղաման** (Ռուսաստան) | սեղանին աղ պահելու համար | փայտե թռչուն կամ բադ՝ մեջքին կափարիչով |
| **խնոցի** (Հայաստան) | կարագ հարելու անոթ, այն կախում և ճոճում էին | կավե կամ փայտե անոթ՝ հարթ կլորավուն իրանով և պարզ փորագրված կամ ներկված շերտերով |
| **պղնձե սափոր** (Հայաստան) | ջուր տանելու և պահելու համար | բարձր վիզ, կլոր իրան և կոր ծորակ, ուսերին փորագրված զարդանախշ |
| **փայտե գդալներ** (երկուսն էլ) | ուտելու համար | կոթը փորագրված և ներկված է, գոգը թողնված է հարթ |

~~~art
pic karas copper-jug khokhloma-bowl gorodets-board
~~~

## Վարպետի կանոնները

1. **Նախ գործածությունը**՝ գդալը պետք է հարմար լինի ձեռքին, սափորը չպետք է թափի։
2. **Զարդը հետևում է ձևին**՝ զարդանախշը դրվում է ամենալայն մասերին, ուսերին, եզրերին և բռնակներին։
3. **Նյութը խոսում է**՝ փայտը պահում է իր կառուցվածքը, պղինձը փայլում է, կավը մնում է տաք և հողեղեն։
4. **Ոչ չափազանց շատ**՝ սննդին կամ ջրին դիպչող մասը թողնում են պարզ։

~~~art
steps jug
~~~

## Նախագծի՛ր քո իրը

1. Ընտրի՛ր գործածությունը՝ մատիտների տուփ, աղաման, բաժակ, սափոր։
2. Ընտրի՛ր պատկերը՝ թռչուն, ձուկ, ձի, նուռ։
3. Իրի մասերը ստեղծի՛ր պատկերից՝ բռնակը՝ գլխից կամ պոչից, կափարիչը՝ թևից։
4. Նկարի՛ր իրը կողքից և վերևից։
5. Ավելացրու՛ զարդանախշ այնտեղ, որտեղ այն սազում է ձևին։

~~~art
sketch guide=axis
Ձևավորի՛ր օգտակար առարկա․ սափոր, գդալ կամ տուփ։ Նախ ձևը՝ ըստ գործառույթի, հետո զարդարանքը, որը հետևում է ձևին։
~~~

~~~art
tasks
1. Ի՞նչն էր առաջինը ժողովրդական վարպետի համար՝ գործածությո՞ւնը, թե՞ գեղեցկությունը։
2. Ինչի՞ տեսքով էր հաճախ պատրաստվում ռուսական փայտե շերեփը։
3. Ինչի՞ համար էր խնոցին։
4. Որտե՞ղ է դրվում զարդանախշը սափորի վրա։
5. Ինչո՞ւ են սննդին դիպչող մասը թողնում պարզ։
6. Ի՞նչ է նշանակում «նյութը խոսում է»։
7. Նախագծի՛ր օգտակար իր թռչնի կամ կենդանու տեսքով։
~~~

~~~art
hints
1. Գործածությունը։ 2. Լողացող բադի կամ ձիու տեսքով։ 3. Կարագ հարելու համար։ 4. Ուսերին և ամենալայն մասերին, եզրերին և բռնակներին։ 5. Այդպես ավելի հեշտ է մաքրել և օգտագործել։ 6. Յուրաքանչյուր նյութ պահում է իր գեղեցկությունը՝ փայտի կառուցվածքը, պղնձի փայլը, կավի ջերմությունը։ 7. Քո աշխատանքը։
~~~`,
        ru: `## У каждой вещи своя работа

Народный мастер никогда не делал вещь «просто для красоты». Сначала предмет должен был быть **полезным**: держать воду, черпать, хранить соль. Потом его делали **красивым**. Форма рождалась из назначения, а украшение следовало за формой.

## Народные предметы

| Предмет | Назначение | Как сделан красивым |
|---|---|---|
| **ковш** (Россия) | черпать и подавать напитки | вырезан из цельного куска дерева в виде плывущей **утки** или коня; ручка — голова |
| **солонка** (Россия) | хранить соль на столе | деревянная птица или утка с крышкой на спине |
| **хноци** (Армения) | сосуд для сбивания масла; его подвешивали и раскачивали | глиняный или деревянный сосуд с гладким округлым туловом и простыми резными или расписными поясками |
| **медный кувшин** (Армения) | носить и хранить воду | высокое горло, круглое тулово и изогнутый носик; гравированный орнамент на плечиках |
| **деревянные ложки** (обе страны) | есть | черенок резной и расписной, черпак гладкий |

~~~art
pic karas copper-jug khokhloma-bowl gorodets-board
~~~

## Правила мастера

1. **Сначала польза**: ложка должна удобно лежать в руке, кувшин не должен проливать.
2. **Украшение следует за формой**: узор — на самых широких частях, плечиках, краях и ручках.
3. **Материал говорит**: дерево сохраняет фактуру, медь блестит, глина остаётся тёплой и земной.
4. **Не слишком много**: то, что касается еды или воды, оставляют гладким.

~~~art
steps jug
~~~

## Придумай свой предмет

1. Выбери назначение: пенал, солонку, чашку, кувшин.
2. Выбери образ: птицу, рыбу, коня, гранат.
3. Составь части предмета из образа: ручку — из головы или хвоста, крышку — из крыла.
4. Нарисуй предмет сбоку и сверху.
5. Добавь орнамент там, где он подходит к форме.

~~~art
sketch guide=axis
Придумай полезный предмет: кувшин, ложку или шкатулку. Сначала форма для дела, потом украшение по форме.
~~~

~~~art
tasks
1. Что было главным для народного мастера: польза или красота?
2. В форме чего часто делали русский деревянный ковш?
3. Для чего служил хноци?
4. Где помещают орнамент на кувшине?
5. Почему часть, касающуюся еды, оставляют гладкой?
6. Что значит «материал говорит»?
7. Придумай полезный предмет в форме птицы или зверя.
~~~

~~~art
hints
1. Польза. 2. Плывущей утки или коня. 3. Для сбивания масла. 4. На плечиках и самых широких частях, краях и ручках. 5. Так легче мыть и пользоваться. 6. Каждый материал сохраняет свою красоту: фактуру дерева, блеск меди, тепло глины. 7. Твоя работа.
~~~`,
      },
      [
        q(t("For a folk master the first thing was…", "Ժողովրդական վարպետի համար առաջինը…", "Для народного мастера главным было…"), [t("use", "գործածությունն էր", "назначение"), t("price", "գինն էր", "цена"), t("colour", "գույնն էր", "цвет")], 0),
        q(t("A Russian ladle is often shaped like a…", "Ռուսական շերեփը հաճախ ունի … տեսք։", "Русский ковш часто имеет форму…"), [t("fish", "ձկան", "рыбы"), t("duck", "բադի", "утки"), t("tree", "ծառի", "дерева")], 1),
        q(t("The khnotsi was used for…", "Խնոցին օգտագործվում էր…", "Хноци служил для…"), [t("baking bread", "հաց թխելու համար", "выпечки хлеба"), t("keeping salt", "աղ պահելու համար", "хранения соли"), t("churning butter", "կարագ հարելու համար", "сбивания масла")], 2),
        q(t("Ornament on a jug goes on…", "Սափորի զարդանախշը դրվում է…", "Орнамент на кувшине помещают…"), [t("the shoulders and widest parts", "ուսերին և ամենալայն մասերին", "на плечиках и самых широких частях"), t("the inside", "ներսում", "внутри"), t("the bottom only", "միայն հատակին", "только на дне")], 0),
        q(t("The part touching food is usually…", "Սննդին դիպչող մասը սովորաբար…", "Часть, касающаяся еды, обычно…"), [t("covered with paint", "ծածկված է ներկով", "покрыта краской"), t("left plain", "թողնված է պարզ", "оставлена гладкой"), t("made of glass", "ապակուց է", "из стекла")], 1),
        q(t("A salt cellar with a lid on its back looks like a…", "Մեջքին կափարիչով աղամանը նման է…", "Солонка с крышкой на спине похожа на…"), [t("house", "տան", "дом"), t("tree", "ծառի", "дерево"), t("bird", "թռչնի", "птицу")], 2),
      ],
    ),
    lesson(
      "folk-embroidery",
      ["Folk embroidery", "Ժողովրդական ասեղնագործություն", "Народная вышивка"],
      {
        en: ["Know features of Armenian and Russian folk embroidery", "Know basic stitches: running stitch, cross stitch, satin stitch", "Design an embroidery pattern on squared paper"],
        hy: ["Իմանալ հայկական և ռուսական ժողովրդական ասեղնագործության առանձնահատկությունները", "Իմանալ հիմնական կարերը՝ առաջ ասեղ, խաչաձև կար, հարթ կար", "Վանդակավոր թղթի վրա նախագծել ասեղնագործության նախշ"],
        ru: ["Знать черты армянской и русской народной вышивки", "Знать основные швы: «вперёд иголку», крестик, гладь", "Составить узор для вышивки на клетчатой бумаге"],
      },
      {
        en: `## Pictures made with a needle

Embroidery decorated clothes, towels, pillows, tablecloths and curtains. Girls learned it from early childhood and prepared embroidered things for their dowry.

## Armenian embroidery

| Style | What is special |
|---|---|
| **Marash embroidery** | dense geometric patterns of stars, crosses and interlacing, sewn with silk or metal thread, often on dark velvet |
| **needle lace** | very fine lace made with a needle only, knot after knot; used for collars, edges of napkins and head scarves |
| **motifs** | the tree of life, the eternity sign, pomegranates, birds, crosses |
| **colours** | red, dark blue, green and gold on light or dark fabric |

~~~art
pic embroidery taraz
~~~

## Russian embroidery

| Feature | What it is |
|---|---|
| **material** | **red thread on white linen** |
| **where** | the ends of towels, the hem and sleeves of shirts, the collar |
| **motifs** | a woman figure with raised arms, the tree of life, birds, horses, rhombuses with dots |
| **meaning** | red was a colour of protection and life |

~~~art
pic sarafan
~~~

## Basic stitches

| Stitch | How it looks |
|---|---|
| **running stitch** | a dashed line: the needle goes up and down |
| **cross stitch** | small crosses in the cells of the fabric; a pattern is built like pixels |
| **satin stitch** | stitches lie close together and fill a shape with smooth colour |

## Design a cross-stitch pattern

1. Take squared paper: one square is one cross.
2. Draw a symmetrical motif: a bird, a tree, a star; colour each square fully.
3. Add a border: a strip of rhombuses or zigzags.
4. Use only 2–3 colours, like real folk embroidery.
5. If you have fabric and thread, embroider a small part of your pattern.

~~~art
sketch guide=cells paper=cream
Cross-stitch on screen: fill whole squares only, like stitches on canvas. Make the pattern symmetric.
~~~

~~~art
tasks
1. What did embroidery decorate?
2. What is special about Marash embroidery?
3. How is needle lace made?
4. What colours are typical of Russian embroidery?
5. Where were patterns placed on a Russian shirt?
6. How does a cross-stitch pattern look on squared paper?
7. Design a cross-stitch pattern with a border.
~~~

~~~art
hints
1. Clothes, towels, pillows, tablecloths and curtains. 2. Dense geometric patterns in silk or metal thread, often on dark velvet. 3. With a needle only, knot after knot. 4. Red thread on white linen. 5. On the hem, sleeves and collar. 6. Each square is one cross, like pixels. 7. Your work.
~~~`,
        hy: `## Ասեղով ստեղծված նկարներ

Ասեղնագործությունը զարդարում էր հագուստ, սրբիչներ, բարձեր, սփռոցներ և վարագույրներ։ Աղջիկները սովորում էին այն վաղ մանկությունից և ասեղնագործ իրեր էին պատրաստում իրենց օժիտի համար։

## Հայկական ասեղնագործություն

| Ոճ | Ինչն է յուրահատուկ |
|---|---|
| **Մարաշի ասեղնագործություն** | աստղերի, խաչերի և հյուսքերի խիտ երկրաչափական նախշեր՝ կարված մետաքսե կամ մետաղե թելով, հաճախ մուգ թավշի վրա |
| **ասեղնագործ ժանյակ** | շատ նուրբ ժանյակ, որը գործվում է միայն ասեղով՝ հանգույց առ հանգույց, օգտագործվում էր օձիքների, անձեռոցիկների եզրերի և գլխաշորերի համար |
| **մոտիվներ** | կենաց ծառ, հավերժության նշան, նուռ, թռչուններ, խաչեր |
| **գույներ** | կարմիր, մուգ կապույտ, կանաչ և ոսկեգույն՝ բաց կամ մուգ գործվածքի վրա |

~~~art
pic embroidery taraz
~~~

## Ռուսական ասեղնագործություն

| Առանձնահատկություն | Ինչ է |
|---|---|
| **նյութ** | **կարմիր թել սպիտակ քաթանի վրա** |
| **որտեղ** | սրբիչների ծայրերին, շապիկների փեշին և թևքերին, օձիքին |
| **մոտիվներ** | բարձրացված ձեռքերով կնոջ պատկեր, կենաց ծառ, թռչուններ, ձիեր, կետերով շեղանկյուններ |
| **իմաստ** | կարմիրը պաշտպանության և կյանքի գույն էր |

~~~art
pic sarafan
~~~

## Հիմնական կարեր

| Կար | Ինչպես է երևում |
|---|---|
| **առաջ ասեղ** | կետագիծ՝ ասեղը բարձրանում և իջնում է |
| **խաչաձև կար** | փոքր խաչեր գործվածքի վանդակներում, նախշը կառուցվում է պիքսելների պես |
| **հարթ կար** | կարերը դրված են իրար մոտ և ձևը լցնում են հարթ գույնով |

## Նախագծի՛ր խաչաձև կարի նախշ

1. Վերցրու՛ վանդակավոր թուղթ՝ մեկ վանդակը մեկ խաչ է։
2. Նկարի՛ր համաչափ մոտիվ՝ թռչուն, ծառ, աստղ, յուրաքանչյուր վանդակ ներկի՛ր ամբողջությամբ։
3. Ավելացրու՛ եզրագիծ՝ շեղանկյունների կամ զիգզագների շերտ։
4. Օգտագործի՛ր միայն 2–3 գույն, ինչպես իսկական ժողովրդական ասեղնագործության մեջ։
5. Եթե գործվածք և թել ունես, ասեղնագործի՛ր նախշիդ փոքր մասը։

~~~art
sketch guide=cells paper=cream
Խաչաձև կար էկրանին․ լցրու միայն ամբողջական քառակուսիներ, ինչպես կանվայի վրա։ Նախշը թող համաչափ լինի։
~~~

~~~art
tasks
1. Ի՞նչ էր զարդարում ասեղնագործությունը։
2. Ինչո՞վ է յուրահատուկ Մարաշի ասեղնագործությունը։
3. Ինչպե՞ս է գործվում ասեղնագործ ժանյակը։
4. Ի՞նչ գույներ են բնորոշ ռուսական ասեղնագործությանը։
5. Որտե՞ղ էին դրվում նախշերը ռուսական շապիկի վրա։
6. Ինչպե՞ս է երևում խաչաձև կարի նախշը վանդակավոր թղթի վրա։
7. Նախագծի՛ր խաչաձև կարի նախշ եզրագծով։
~~~

~~~art
hints
1. Հագուստ, սրբիչներ, բարձեր, սփռոցներ և վարագույրներ։ 2. Խիտ երկրաչափական նախշեր մետաքսե կամ մետաղե թելով, հաճախ մուգ թավշի վրա։ 3. Միայն ասեղով՝ հանգույց առ հանգույց։ 4. Կարմիր թել սպիտակ քաթանի վրա։ 5. Փեշին, թևքերին և օձիքին։ 6. Յուրաքանչյուր վանդակ մեկ խաչ է՝ պիքսելների պես։ 7. Քո աշխատանքը։
~~~`,
        ru: `## Картины, созданные иглой

Вышивка украшала одежду, полотенца, подушки, скатерти и занавеси. Девочки учились вышивать с раннего детства и готовили вышитые вещи в приданое.

## Армянская вышивка

| Стиль | Чем особенный |
|---|---|
| **марашская вышивка** | плотные геометрические узоры из звёзд, крестов и плетёнки шёлковой или металлической нитью, часто по тёмному бархату |
| **игольное кружево** | очень тонкое кружево, которое плетут только иглой, узелок за узелком; им отделывали воротники, края салфеток и платки |
| **мотивы** | древо жизни, знак вечности, гранаты, птицы, кресты |
| **цвета** | красный, тёмно-синий, зелёный и золото на светлой или тёмной ткани |

~~~art
pic embroidery taraz
~~~

## Русская вышивка

| Черта | Что это |
|---|---|
| **материал** | **красная нить на белом льне** |
| **где** | концы полотенец, подол и рукава рубах, ворот |
| **мотивы** | женская фигура с поднятыми руками, древо жизни, птицы, кони, ромбы с точками |
| **смысл** | красный был цветом защиты и жизни |

~~~art
pic sarafan
~~~

## Основные швы

| Шов | Как выглядит |
|---|---|
| **«вперёд иголку»** | пунктир: игла идёт вверх-вниз |
| **крестик** | маленькие крестики в клетках ткани; узор строится как из пикселей |
| **гладь** | стежки лежат плотно и заполняют форму ровным цветом |

## Составь узор для вышивки крестом

1. Возьми бумагу в клетку: одна клетка — один крестик.
2. Нарисуй симметричный мотив: птицу, дерево, звезду; закрашивай каждую клетку целиком.
3. Добавь кайму: полосу ромбов или зигзагов.
4. Используй только 2–3 цвета, как в настоящей народной вышивке.
5. Если есть ткань и нитки, вышей небольшую часть своего узора.

~~~art
sketch guide=cells paper=cream
Вышивка крестиком на экране: заполняй только целые клетки, как стежки на канве. Сделай узор симметричным.
~~~

~~~art
tasks
1. Что украшала вышивка?
2. Чем особенна марашская вышивка?
3. Как плетут игольное кружево?
4. Какие цвета типичны для русской вышивки?
5. Где помещали узоры на русской рубахе?
6. Как выглядит узор для вышивки крестом на клетчатой бумаге?
7. Составь узор для вышивки крестом с каймой.
~~~

~~~art
hints
1. Одежду, полотенца, подушки, скатерти и занавеси. 2. Плотные геометрические узоры шёлковой или металлической нитью, часто по тёмному бархату. 3. Только иглой, узелок за узелком. 4. Красная нить на белом льне. 5. По подолу, рукавам и вороту. 6. Каждая клетка — один крестик, как пиксели. 7. Твоя работа.
~~~`,
      },
      [
        q(t("Typical Russian embroidery is…", "Ռուսական բնորոշ ասեղնագործությունը…", "Типичная русская вышивка —"), [t("red thread on white linen", "կարմիր թել է սպիտակ քաթանի վրա", "красная нить на белом льне"), t("gold on black plastic", "ոսկի է սև պլաստիկի վրա", "золото на чёрном пластике"), t("blue on yellow paper", "կապույտ է դեղին թղթի վրա", "синее на жёлтой бумаге")], 0),
        q(t("Marash embroidery is often sewn on…", "Մարաշի ասեղնագործությունը հաճախ կարվում է…", "Марашскую вышивку часто шьют по…"), [t("glass", "ապակու վրա", "стеклу"), t("dark velvet", "մուգ թավշի վրա", "тёмному бархату"), t("paper", "թղթի վրա", "бумаге")], 1),
        q(t("Needle lace is made…", "Ասեղնագործ ժանյակը գործում են…", "Игольное кружево плетут…"), [t("on a machine", "մեքենայով", "на машине"), t("with paint", "ներկով", "краской"), t("with a needle only, knot after knot", "միայն ասեղով՝ հանգույց առ հանգույց", "только иглой, узелок за узелком")], 2),
        q(t("A stitch that fills a shape with smooth colour is…", "Ձևը հարթ գույնով լցնող կարը…", "Шов, заполняющий форму ровным цветом, —"), [t("satin stitch", "հարթ կարն է", "гладь"), t("running stitch", "առաջ ասեղն է", "«вперёд иголку»"), t("cross stitch", "խաչաձև կարն է", "крестик")], 0),
        q(t("On squared paper one square is…", "Վանդակավոր թղթի վրա մեկ վանդակը…", "На клетчатой бумаге одна клетка —"), [t("one row", "մեկ շարք է", "один ряд"), t("one cross", "մեկ խաչ է", "один крестик"), t("one colour of the whole work", "ամբողջ աշխատանքի մեկ գույնն է", "один цвет всей работы")], 1),
        q(t("Red in folk embroidery meant…", "Ժողովրդական ասեղնագործության մեջ կարմիրը նշանակում էր…", "Красный в народной вышивке означал…"), [t("danger", "վտանգ", "опасность"), t("sadness", "տխրություն", "грусть"), t("protection and life", "պաշտպանություն և կյանք", "защиту и жизнь")], 2),
      ],
    ),
  ],
};
