import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade7: VisualMap[number] = {
  "living-things-kingdoms": [
    "bars set=kingdoms",
    closer(
      `**Most of life is still unnamed.** Scientists have described about 2 million species, but a 2011 study by C. Mora and colleagues estimated that the Earth holds about **8.7 million** species of plants, animals and fungi alone, so most are still waiting for a name. New species are found every year, not only in rainforests: tiny insects, fungi and bacteria are discovered even in city parks.

**Why fungi got a kingdom of their own.** For a long time mushrooms were counted as plants, because they grow in one place and have cell walls. In 1969 the American ecologist R. Whittaker gave them a separate kingdom. Today DNA shows something surprising: fungi are **closer relatives of animals than of plants**. Their cell walls are made of **chitin**, the same substance as an insect's shell, and like animals they store sugar as **glycogen**, not starch.`,
      `**Կյանքի մեծ մասը դեռ անանուն է։** Գիտնականները նկարագրել են մոտ 2 միլիոն տեսակ, բայց Կ. Մորայի և գործընկերների 2011 թվականի հետազոտության գնահատմամբ Երկրի վրա միայն բույսերի, կենդանիների և սնկերի մոտ **8,7 միլիոն** տեսակ կա, ուստի մեծ մասը դեռ անուն է սպասում։ Ամեն տարի նոր տեսակներ են հայտնաբերվում, և ոչ միայն արևադարձային անտառներում․ մանր միջատներ, սնկեր և բակտերիաներ գտնում են նույնիսկ քաղաքային այգիներում։

**Ինչու սնկերը ստացան առանձին թագավորություն։** Երկար ժամանակ սնկերը համարվում էին բույսեր, քանի որ աճում են մեկ տեղում և ունեն բջջապատ։ 1969 թվականին ամերիկացի էկոլոգ Ռ. Ուիթաքերը նրանց առանձնացրեց որպես առանձին թագավորություն։ Այսօր ԴՆԹ-ն զարմանալի բան է ցույց տալիս․ սնկերը **ավելի մոտ ազգական են կենդանիներին, քան բույսերին**։ Նրանց բջջապատը կազմված է **քիտինից**՝ նույն նյութից, ինչից միջատի պատյանը, և կենդանիների նման նրանք շաքարը պահեստավորում են **գլիկոգենի**, ոչ թե օսլայի տեսքով։`,
      `**Большая часть жизни ещё не названа.** Учёные описали около 2 миллионов видов, но по оценке К. Моры и коллег (2011) на Земле только растений, животных и грибов около **8,7 миллиона** видов, так что большинство ещё ждёт своего названия. Новые виды находят каждый год, и не только в тропических лесах: крошечных насекомых, грибы и бактерии открывают даже в городских парках.

**Почему грибам дали своё царство.** Долгое время грибы считали растениями: они растут на одном месте и имеют клеточную стенку. В 1969 году американский эколог Р. Уиттекер выделил их в отдельное царство. Сегодня ДНК показывает удивительное: грибы **ближе к животным, чем к растениям**. Их клеточная стенка состоит из **хитина** — того же вещества, что панцирь насекомого, и, как животные, они запасают сахар в виде **гликогена**, а не крахмала.`,
    ),
    ask(2, {
      en: ["Which kingdom has the most described species?", ["Plants", "Animals", "Fungi", "Bacteria"], "About 1.5 million animals have been described, two thirds of them insects."],
      hy: ["Ո՞ր թագավորությունն ունի ամենաշատ նկարագրված տեսակները։", ["Բույսեր", "Կենդանիներ", "Սնկեր", "Բակտերիաներ"], "Նկարագրված է մոտ 1,5 միլիոն կենդանի, որոնց երկու երրորդը միջատներ են։"],
      ru: ["В каком царстве больше всего описанных видов?", ["Растения", "Животные", "Грибы", "Бактерии"], "Описано около 1,5 миллиона животных, две трети из них — насекомые."],
    }),
  ],
  "plant-cell": [
    "diagram microscope",
    "diagram plantcell",
    closer(
      `**Hooke's "little rooms".** In his book *Micrographia* (1665) Robert Hooke drew a thin slice of cork and counted about 1,259,712,000 cells in a cubic inch. What he saw were only the **empty walls** of dead cells. Ten years later the Dutch draper **A. van Leeuwenhoek** looked through single tiny lenses he ground himself, magnifying up to about 270 times, and was the first to see living cells swimming in a drop of water.

**Why a plant keeps its shape.** A plant cell is like a balloon inside a box. Water fills the large **vacuole** and presses the cytoplasm against the **cell wall**; this pressure is called **turgor**. When a plant is not watered, the vacuoles shrink and the leaves droop. Water it, and in an hour the leaves stand up again. Under a microscope in the leaf of the water plant *Elodea* you can watch the chloroplasts slowly **circle** around the cell, carried by the moving cytoplasm.`,
      `**Հուկի «փոքրիկ սենյակները»։** Իր «Միկրոգրաֆիա» գրքում (1665) Ռոբերտ Հուկը նկարեց խցանի բարակ կտրվածքը և հաշվեց, որ մեկ խորանարդ դյույմում մոտ 1 259 712 000 բջիջ կա։ Նա տեսել էր մեռած բջիջների միայն **դատարկ պատերը**։ Տասը տարի անց հոլանդացի մահուդագործ **Ա. վան Լևենհուկը** նայեց իր իսկ հղկած փոքրիկ միակի ոսպնյակներով, որոնք խոշորացնում էին մինչև մոտ 270 անգամ, և առաջինը տեսավ ջրի կաթիլում լողացող կենդանի բջիջներ։

**Ինչու է բույսը պահպանում իր ձևը։** Բուսական բջիջը նման է արկղի մեջ դրված փուչիկի։ Ջուրը լցնում է մեծ **վակուոլը** և ցիտոպլազման սեղմում **բջջապատին**․ այս ճնշումը կոչվում է **տուրգոր**։ Երբ բույսը չեն ջրում, վակուոլները փոքրանում են, և տերևները թառամում են։ Ջրի՛ր այն, և մեկ ժամից տերևները նորից կկանգնեն։ Մանրադիտակով ջրային բույսի՝ *էլոդեայի* տերևում կարելի է տեսնել, թե ինչպես են քլորոպլաստները դանդաղ **պտտվում** բջջի ներսում՝ տարվելով շարժվող ցիտոպլազմայով։`,
      `**«Комнатки» Гука.** В книге «Микрография» (1665) Роберт Гук нарисовал тонкий срез пробки и насчитал около 1 259 712 000 ячеек в кубическом дюйме. Он видел лишь **пустые стенки** мёртвых клеток. Через десять лет голландский торговец сукном **А. ван Левенгук** посмотрел в крошечные одиночные линзы собственной шлифовки, увеличивавшие примерно в 270 раз, и первым увидел живые клетки, плавающие в капле воды.

**Почему растение держит форму.** Растительная клетка похожа на воздушный шарик в коробке. Вода заполняет большую **вакуоль** и прижимает цитоплазму к **клеточной стенке**; это давление называют **тургором**. Если растение не поливать, вакуоли сжимаются и листья никнут. Полей — и через час листья снова поднимутся. В микроскоп в листе водного растения *элодеи* видно, как хлоропласты медленно **кружат** по клетке, увлекаемые движущейся цитоплазмой.`,
    ),
    ask(3, {
      en: ["The eyepiece is ×15 and the objective ×40. What is the magnification?", ["×55", "×400", "×600", "×150"], "Multiply them: 15 × 40 = 600."],
      hy: ["Ակնադիտակը ×15 է, օբյեկտիվը՝ ×40։ Որքա՞ն է խոշորացումը։", ["×55", "×400", "×600", "×150"], "Բազմապատկիր․ 15 × 40 = 600։"],
      ru: ["Окуляр ×15, объектив ×40. Каково увеличение?", ["×55", "×400", "×600", "×150"], "Перемножь: 15 × 40 = 600."],
    }),
  ],
  "plant-tissues": [
    "diagram leaf",
    closer(
      `**A tree that never stops growing.** Animals stop growing when they reach adult size, but a tree keeps adding new cells all its life, because **meristems** at the tips of its shoots and roots and in the cambium go on dividing. That is why trees can be extremely old. A Great Basin bristlecone pine in California, nicknamed **Methuselah**, is more than **4,800 years** old by its tree rings: it was already a young tree when the Egyptian pyramids were built.

**Cork: a tissue we use every day.** The bark of the cork oak, which grows around the Mediterranean, is a thick layer of dead **dermal** cells filled with air. It is light, springy and waterproof, so it is used for bottle stoppers and floors. The bark is stripped by hand about every nine years without felling the tree, and it grows back. These are exactly the cells Hooke saw in 1665.`,
      `**Ծառ, որն երբեք չի դադարում աճել։** Կենդանիները դադարում են աճել, երբ հասնում են հասուն չափի, բայց ծառն ամբողջ կյանքում նոր բջիջներ է ավելացնում, որովհետև նրա ընձյուղների և արմատների ծայրերի ու կամբիումի **մերիստեմները** շարունակում են բաժանվել։ Ահա թե ինչու ծառերը կարող են չափազանց հին լինել։ Կալիֆոռնիայում աճող փշոտ սոճին, որին անվանում են **Մաթուսաղա**, ըստ տարեշերտերի **4800 տարուց** ավելի հին է․ այն արդեն երիտասարդ ծառ էր, երբ կառուցվում էին եգիպտական բուրգերը։

**Խցան՝ հյուսվածք, որ օգտագործում ենք ամեն օր։** Միջերկրածովյան տարածաշրջանում աճող խցանակաղնու կեղևն օդով լցված մեռած **ծածկող** բջիջների հաստ շերտ է։ Այն թեթև է, առաձգական և ջրակայուն, ուստի օգտագործվում է շշերի խցանների և հատակների համար։ Կեղևը ձեռքով հանում են մոտ ինը տարին մեկ՝ առանց ծառը կտրելու, և այն նորից աճում է։ Հենց այս բջիջներն էր տեսել Հուկը 1665 թվականին։`,
      `**Дерево, которое не перестаёт расти.** Животные прекращают расти, достигнув взрослых размеров, а дерево добавляет новые клетки всю жизнь, потому что **меристемы** на концах побегов и корней и в камбии продолжают делиться. Поэтому деревья бывают необычайно старыми. Остистая сосна в Калифорнии по прозвищу **Мафусаил** по годичным кольцам старше **4800 лет**: она была уже молодым деревом, когда строили египетские пирамиды.

**Пробка: ткань, которой мы пользуемся каждый день.** Кора пробкового дуба, растущего вокруг Средиземного моря, — толстый слой мёртвых **покровных** клеток, заполненных воздухом. Она лёгкая, упругая и не пропускает воду, поэтому из неё делают пробки для бутылок и полы. Кору снимают вручную примерно раз в девять лет, не срубая дерево, и она отрастает. Именно эти клетки увидел Гук в 1665 году.`,
    ),
    ask(1, {
      en: ["Which tissue carries water and mineral salts up from the root?", ["Vessels", "Sieve tubes", "Meristem", "Cork"], "Vessels carry water up; sieve tubes carry organic substances from the leaves."],
      hy: ["Ո՞ր հյուսվածքն է ջուրը և հանքային աղերն արմատից տանում վեր։", ["Անոթները", "Մաղանման խողովակները", "Մերիստեմը", "Խցանը"], "Անոթները ջուրը տանում են վեր, մաղանման խողովակները՝ օրգանական նյութերը տերևներից։"],
      ru: ["По какой ткани вода и минеральные соли поднимаются от корня?", ["По сосудам", "По ситовидным трубкам", "По меристеме", "По пробке"], "Сосуды несут воду вверх, а ситовидные трубки — органические вещества от листьев."],
    }),
  ],
  root: [
    "diagram root",
    closer(
      `**Six hundred kilometres of roots.** In 1937 the American botanist **H. Dittmer** grew a single rye plant in a box of soil for four months and then measured every root. He counted about 14 million roots with a total length of about **620 km**, and about 14 billion root hairs that would stretch for more than **10,000 km**, a quarter of the way round the Earth. All this hides under one plant about half a metre tall. This is why root hairs matter so much: they give the plant an enormous surface for drinking.

**How a root knows which way is down.** Turn a seedling on its side and in a day its root bends downwards again. Cells in the **root cap** contain heavy grains of starch that sink to the lower side of the cell, like sand in a jar. The root senses where they settle and grows more slowly on that side, so it curves towards gravity. This response is called **gravitropism**.`,
      `**Վեց հարյուր կիլոմետր արմատ։** 1937 թվականին ամերիկացի բուսաբան **Հ. Դիտմերը** աշորայի մեկ բույս չորս ամիս աճեցրեց հողով լի արկղում, ապա չափեց բոլոր արմատները։ Նա հաշվեց մոտ 14 միլիոն արմատ՝ մոտ **620 կմ** ընդհանուր երկարությամբ, և մոտ 14 միլիարդ արմատամազիկ, որոնք կձգվեին ավելի քան **10 000 կմ**, Երկրի շրջագծի քառորդը։ Այս ամենը թաքնված է կես մետր բարձրությամբ մեկ բույսի տակ։ Ահա թե ինչու են արմատամազիկներն այդքան կարևոր․ նրանք բույսին տալիս են ջուր ներծծելու հսկայական մակերես։

**Ինչպես է արմատն իմանում, թե որտեղ է ներքևը։** Ծիլը պառկեցրու կողքի վրա, և մեկ օրում արմատը նորից կթեքվի դեպի ներքև։ **Արմատային ծածկույթի** բջիջներում կան օսլայի ծանր հատիկներ, որոնք նստում են բջջի ստորին կողմում, ինչպես ավազը բանկայում։ Արմատը զգում է, թե որտեղ են դրանք նստել, և այդ կողմում ավելի դանդաղ է աճում, ուստի թեքվում է դեպի ծանրության ուժը։ Այս արձագանքը կոչվում է **գրավիտրոպիզմ**։`,
      `**Шестьсот километров корней.** В 1937 году американский ботаник **Х. Диттмер** четыре месяца выращивал одно растение ржи в ящике с землёй, а потом измерил все корни. Он насчитал около 14 миллионов корней общей длиной около **620 км** и около 14 миллиардов корневых волосков, которые протянулись бы больше чем на **10 000 км**, четверть окружности Земли. И всё это под одним растением высотой около полуметра. Вот почему корневые волоски так важны: они дают растению огромную поверхность для питья.

**Как корень узнаёт, где низ.** Положи проросток на бок, и за сутки его корень снова изогнётся вниз. В клетках **корневого чехлика** есть тяжёлые зёрна крахмала, которые оседают на нижнюю сторону клетки, как песок в банке. Корень чувствует, куда они легли, и с этой стороны растёт медленнее, поэтому изгибается в сторону силы тяжести. Этот ответ называют **гравитропизмом**.`,
    ),
    ask(3, {
      en: ["Which plant has a fibrous root system?", ["Carrot", "Bean", "Maize", "Sunflower"], "Monocots such as maize, wheat and onion have fibrous roots."],
      hy: ["Ո՞ր բույսն ունի փնջաձև արմատային համակարգ։", ["Գազար", "Լոբի", "Եգիպտացորեն", "Արևածաղիկ"], "Միաշաքիլավորները, օրինակ՝ եգիպտացորենը, ցորենը և սոխը, ունեն փնջաձև արմատներ։"],
      ru: ["У какого растения мочковатая корневая система?", ["Морковь", "Фасоль", "Кукуруза", "Подсолнечник"], "Мочковатые корни у однодольных: кукурузы, пшеницы, лука."],
    }),
  ],
  "shoot-and-stem": [
    "diagram stem",
    closer(
      `**Tree rings as a calendar.** In the early 1900s the American astronomer **A. E. Douglass** noticed that wide rings in trees match wet years and narrow rings dry years. Because every tree in a region records the same pattern, rings from living trees, old beams and buried logs can be matched like barcodes. This method, **dendrochronology**, can date a wooden house or a ship to the exact year its timber was felled, and it shows droughts thousands of years back.

**A potato is a stem, and it shows it.** Leave potatoes in the light and their skin turns **green**: like any stem in the light, the tuber makes chlorophyll. At the same time it builds up **solanine**, a bitter poison that defends it from animals. That is why potatoes are stored in the dark, and green parts are cut away before cooking.`,
      `**Տարեշերտերն որպես օրացույց։** 1900-ականների սկզբին ամերիկացի աստղագետ **Ա. Է. Դուգլասը** նկատեց, որ ծառերի լայն տարեշերտերը համընկնում են խոնավ տարիների հետ, իսկ նեղերը՝ չորային տարիների։ Քանի որ տարածաշրջանի բոլոր ծառերը գրանցում են նույն պատկերը, կենդանի ծառերի, հին գերանների և հողում թաղված կոճղերի տարեշերտերը կարելի է համեմատել շտրիխ կոդերի պես։ Այս մեթոդը՝ **դենդրոքրոնոլոգիան**, կարող է ճշգրիտ տարով որոշել, թե երբ է կտրվել փայտե տան կամ նավի փայտանյութը, և ցույց է տալիս հազարավոր տարիներ առաջվա երաշտները։

**Կարտոֆիլը ցողուն է, և դա երևում է։** Կարտոֆիլը թողնես լույսի տակ, և նրա կեղևը կդառնա **կանաչ**․ ինչպես ցանկացած ցողուն լույսի տակ, պալարը քլորոֆիլ է առաջացնում։ Միաժամանակ նրանում կուտակվում է **սոլանին**՝ դառը թույն, որը պաշտպանում է կենդանիներից։ Ահա թե ինչու կարտոֆիլը պահում են մթության մեջ, իսկ կանաչ մասերն եփելուց առաջ կտրում են։`,
      `**Годичные кольца как календарь.** В начале XX века американский астроном **А. Э. Дуглас** заметил, что широкие кольца деревьев совпадают с влажными годами, а узкие — с засушливыми. Все деревья в местности записывают один и тот же узор, поэтому кольца живых деревьев, старых балок и погребённых брёвен можно сопоставить, как штрихкоды. Этот метод, **дендрохронология**, позволяет с точностью до года узнать, когда срубили дерево для дома или корабля, и показывает засухи тысячелетней давности.

**Картофель — это стебель, и он это показывает.** Оставь картофель на свету, и кожура **позеленеет**: как любой стебель на свету, клубень образует хлорофилл. Одновременно в нём накапливается **соланин** — горький яд, защищающий от животных. Поэтому картофель хранят в темноте, а зелёные части срезают перед готовкой.`,
    ),
    ask(2, {
      en: ["Which layer carries sugars down from the leaves?", ["Wood (xylem)", "Phloem (bast)", "Pith", "Cambium"], "Phloem sieve tubes carry organic substances; this is why ringing the bark kills a tree."],
      hy: ["Ո՞ր շերտն է շաքարները տերևներից տանում ներքև։", ["Բնափայտը (քսիլեմ)", "Լուբը (ֆլոեմ)", "Ծուծը", "Կամբիումը"], "Լուբի մաղանման խողովակները տանում են օրգանական նյութեր․ ահա թե ինչու է կեղևի օղակաձև հեռացումը սպանում ծառը։"],
      ru: ["Какой слой несёт сахара вниз от листьев?", ["Древесина (ксилема)", "Луб (флоэма)", "Сердцевина", "Камбий"], "Ситовидные трубки луба несут органические вещества, поэтому кольцевание коры губит дерево."],
    }),
  ],
  "leaf-photosynthesis": [
    "mechanism photosynth",
    closer(
      `**Where does a tree's mass come from?** Around 1640 the Flemish doctor **J. B. van Helmont** planted a 2.3 kg willow in a pot of weighed soil and only watered it. Five years later the willow weighed about 77 kg, yet the soil had lost only about 57 grams. He decided the tree was made of water. He was half right: most of a plant's dry mass is in fact built from **carbon dioxide** taken from the air, joined with the hydrogen of water.

**The mint that saved a mouse.** In 1771 the English chemist **J. Priestley** put a candle under a glass jar; it soon went out. A mouse under such a jar could not live long. But when he put a sprig of mint in the jar, after some days a candle could burn there again and a mouse could breathe. The plant had "restored" the air. Today we know it released **oxygen**, and later scientists found that it does so only in the light.`,
      `**Որտեղի՞ց է գալիս ծառի զանգվածը։** Մոտ 1640 թվականին ֆլամանդացի բժիշկ **Յա. Բ. վան Հելմոնտը** 2,3 կգ զանգվածով ուռենի տնկեց կշռված հողով լի տաշտում և միայն ջրում էր այն։ Հինգ տարի անց ուռենին կշռում էր մոտ 77 կգ, իսկ հողը կորցրել էր ընդամենը մոտ 57 գրամ։ Նա որոշեց, որ ծառը կազմված է ջրից։ Նա կիսով չափ իրավացի էր․ բույսի չոր զանգվածի մեծ մասն իրականում կառուցված է օդից վերցված **ածխաթթու գազից**՝ միացված ջրի ջրածնին։

**Անանուխը, որ փրկեց մկանը։** 1771 թվականին անգլիացի քիմիկոս **Ջ. Փրիստլին** ապակե անոթի տակ մոմ դրեց․ այն շուտով մարեց։ Մուկը նման անոթի տակ երկար չէր կարող ապրել։ Բայց երբ նա անոթի մեջ դրեց անանուխի ճյուղ, մի քանի օր անց մոմն այնտեղ նորից կարող էր վառվել, իսկ մուկը՝ շնչել։ Բույսը «վերականգնել» էր օդը։ Այսօր գիտենք, որ այն **թթվածին** էր անջատել, իսկ ավելի ուշ գիտնականները պարզեցին, որ դա տեղի է ունենում միայն լույսի տակ։`,
      `**Откуда берётся масса дерева?** Около 1640 года фламандский врач **Я. Б. ван Гельмонт** посадил иву массой 2,3 кг в кадку со взвешенной землёй и только поливал её. Через пять лет ива весила около 77 кг, а земля потеряла лишь около 57 граммов. Он решил, что дерево состоит из воды. Он был прав наполовину: большая часть сухой массы растения на самом деле построена из **углекислого газа** воздуха, соединённого с водородом воды.

**Мята, которая спасла мышь.** В 1771 году английский химик **Дж. Пристли** поставил свечу под стеклянный колпак — она скоро погасла. Мышь под таким колпаком долго не жила. Но когда он поместил туда веточку мяты, через несколько дней свеча снова могла гореть, а мышь — дышать. Растение «исправило» воздух. Сегодня мы знаем, что оно выделило **кислород**, а позже учёные выяснили, что это происходит только на свету.`,
    ),
    ask(4, {
      en: ["Where does most of the dry mass of a plant come from?", ["From the soil", "From water", "From sunlight", "From carbon dioxide in the air"], "Photosynthesis builds sugars from CO₂; the soil gives only a little mineral matter."],
      hy: ["Որտեղի՞ց է գալիս բույսի չոր զանգվածի մեծ մասը։", ["Հողից", "Ջրից", "Արևի լույսից", "Օդի ածխաթթու գազից"], "Ֆոտոսինթեզը շաքարներ է կառուցում CO₂-ից, հողը տալիս է միայն քիչ հանքային նյութ։"],
      ru: ["Откуда берётся большая часть сухой массы растения?", ["Из почвы", "Из воды", "Из солнечного света", "Из углекислого газа воздуха"], "Фотосинтез строит сахара из CO₂, а почва даёт лишь немного минеральных веществ."],
    }),
  ],
  "flower-pollination": [
    "diagram flower",
    closer(
      `**Flowers we cannot see.** Bees see **ultraviolet** light, which is invisible to us, but they cannot see red: a red poppy looks dark to them. Many flowers that look plain yellow to a person carry ultraviolet stripes and spots, called **nectar guides**, which lead the bee to the nectar like runway lights. Already in ancient Greece Aristotle noticed that a bee on one trip visits flowers of only one kind. This habit is what makes bees such good pollinators: the pollen they carry reaches a flower of the same species.

**Darwin's prediction.** In 1862 Charles Darwin was sent an orchid from Madagascar whose nectar lay at the bottom of a spur about **30 cm** long. He predicted that somewhere on the island lived a moth with a tongue long enough to reach it. People laughed. In 1903 such a moth was described, and it was named *Xanthopan morganii **praedicta***, "the predicted one". Flower and pollinator had shaped each other.`,
      `**Ծաղիկներ, որոնք մենք չենք տեսնում։** Մեղուները տեսնում են մեզ համար անտեսանելի **ուլտրամանուշակագույն** լույսը, բայց չեն տեսնում կարմիրը․ կարմիր կակաչը նրանց մուգ է թվում։ Շատ ծաղիկներ, որոնք մարդուն պարզապես դեղին են թվում, ունեն ուլտրամանուշակագույն գծեր և բծեր՝ **նեկտարի ցուցիչներ**, որոնք մեղվին տանում են դեպի նեկտարը, ինչպես թռիչքուղու լույսերը։ Դեռ Հին Հունաստանում Արիստոտելը նկատել էր, որ մեղուն մեկ թռիչքի ընթացքում այցելում է միայն մեկ տեսակի ծաղիկների։ Հենց այս սովորության շնորհիվ են մեղուներն այդքան լավ փոշոտողներ․ նրանց տարած ծաղկափոշին հասնում է նույն տեսակի ծաղկի։

**Դարվինի կանխատեսումը։** 1862 թվականին Չարլզ Դարվինին Մադագասկարից խոլորձ ուղարկեցին, որի նեկտարը գտնվում էր մոտ **30 սմ** երկարությամբ խթանի հատակին։ Նա կանխատեսեց, որ կղզում ինչ-որ տեղ ապրում է թիթեռ, որի կնճիթը բավական երկար է այն հասնելու համար։ Մարդիկ ծիծաղեցին։ 1903 թվականին նման թիթեռ նկարագրվեց և ստացավ *Xanthopan morganii **praedicta*** անունը՝ «կանխատեսվածը»։ Ծաղիկը և փոշոտողը ձևավորել էին միմյանց։`,
      `**Цветы, которых мы не видим.** Пчёлы видят **ультрафиолет**, невидимый для нас, но не видят красного: красный мак кажется им тёмным. У многих цветков, которые человеку кажутся просто жёлтыми, есть ультрафиолетовые полосы и пятна — **нектарные указатели**, ведущие пчелу к нектару, как огни взлётной полосы. Ещё в Древней Греции Аристотель заметил, что пчела за один вылет посещает цветки только одного вида. Именно поэтому пчёлы так хорошо опыляют: принесённая ими пыльца попадает на цветок того же вида.

**Предсказание Дарвина.** В 1862 году Чарлзу Дарвину прислали с Мадагаскара орхидею, нектар которой находился на дне шпорца длиной около **30 см**. Он предсказал, что где-то на острове живёт бабочка с хоботком такой длины. Над ним смеялись. В 1903 году такую бабочку описали и назвали *Xanthopan morganii **praedicta*** — «предсказанная». Цветок и опылитель сформировали друг друга.`,
    ),
    ask(4, {
      en: ["Which plant is pollinated by the wind?", ["Apple", "Apricot", "Sunflower", "Maize"], "Wind-pollinated flowers are dull, with long stamens and light pollen."],
      hy: ["Ո՞ր բույսն է փոշոտվում քամով։", ["Խնձորենի", "Ծիրանենի", "Արևածաղիկ", "Եգիպտացորեն"], "Քամով փոշոտվող ծաղիկներն աննկատ են, երկար առէջքներով և թեթև ծաղկափոշով։"],
      ru: ["Какое растение опыляется ветром?", ["Яблоня", "Абрикос", "Подсолнечник", "Кукуруза"], "У ветроопыляемых растений невзрачные цветки, длинные тычинки и лёгкая пыльца."],
    }),
  ],
  "fruits-seeds": [
    "diagram seed",
    "mechanism germinate",
    closer(
      `**A seed that waited 2,000 years.** In the 1960s archaeologists digging at **Masada**, the ancient fortress by the Dead Sea, found date palm seeds about 2,000 years old. In 2005 scientists in Israel soaked three of them and planted them, and one sprouted. Radiocarbon dating confirmed its age. The young palm still grows today: a living plant of a variety that had disappeared. A dry seed is alive but almost "switched off", and in a cool, dry place it can wait a very long time.

**A bank for seeds.** On the Norwegian island of Spitsbergen, deep in the frozen rock, is the **Svalbard Global Seed Vault**, opened in 2008. Countries send copies of their crop seeds there, so that if a war or a disaster destroys a collection, the seeds can be returned. It now keeps more than a million samples. Wheat varieties from the Caucasus, one of the oldest centres of farming, are among them.`,
      `**Սերմ, որը սպասեց 2000 տարի։** 1960-ականներին Մեռյալ ծովի ափին գտնվող հնագույն **Մասադա** ամրոցում պեղումներ կատարող հնագետները գտան մոտ 2000 տարեկան արմավենու սերմեր։ 2005 թվականին Իսրայելում գիտնականները դրանցից երեքը թրջեցին և ցանեցին, և մեկը ծլեց։ Ռադիոածխածնային թվագրումը հաստատեց դրա տարիքը։ Երիտասարդ արմավենին մինչ օրս աճում է՝ մի սորտի կենդանի բույս, որն անհետացել էր։ Չոր սերմը կենդանի է, բայց գրեթե «անջատված», և զով, չոր տեղում այն կարող է շատ երկար սպասել։

**Սերմերի բանկ։** Նորվեգական Շպիցբերգեն կղզում, սառած ժայռի խորքում, գտնվում է 2008 թվականին բացված **Սվալբարդի համաշխարհային սերմնապահոցը**։ Երկրներն այնտեղ ուղարկում են իրենց մշակաբույսերի սերմերի պատճենները, որպեսզի պատերազմի կամ աղետի դեպքում հավաքածուն ոչնչանալու դեպքում սերմերը կարելի լինի վերադարձնել։ Այժմ այնտեղ պահվում է ավելի քան մեկ միլիոն նմուշ։ Դրանց թվում են Կովկասի՝ երկրագործության ամենահին կենտրոններից մեկի ցորենի սորտերը։`,
      `**Семя, которое ждало 2000 лет.** В 1960-х годах археологи, раскапывавшие древнюю крепость **Масада** у Мёртвого моря, нашли семена финиковой пальмы возрастом около 2000 лет. В 2005 году учёные в Израиле замочили и посадили три из них, и одно проросло. Радиоуглеродный анализ подтвердил возраст. Молодая пальма растёт до сих пор — живое растение исчезнувшего сорта. Сухое семя живо, но почти «выключено», и в прохладном сухом месте может ждать очень долго.

**Банк семян.** На норвежском острове Шпицберген, глубоко в мёрзлой скале, находится **Всемирное семенохранилище Свальбард**, открытое в 2008 году. Страны присылают туда копии семян своих культур, чтобы после войны или катастрофы утраченную коллекцию можно было восстановить. Сейчас там больше миллиона образцов, среди них сорта пшеницы с Кавказа — одного из древнейших центров земледелия.`,
    ),
    ask(2, {
      en: ["Which condition is NOT needed for a seed to germinate?", ["Water", "Light", "Air", "Warmth"], "Seeds germinate underground in the dark; light is needed only later, by the green leaves."],
      hy: ["Ո՞ր պայմանը պետք ՉԷ սերմի ծլման համար։", ["Ջուր", "Լույս", "Օդ", "Ջերմություն"], "Սերմերը ծլում են հողի տակ՝ մթության մեջ․ լույսը պետք է միայն ավելի ուշ՝ կանաչ տերևներին։"],
      ru: ["Какое условие НЕ нужно для прорастания семени?", ["Вода", "Свет", "Воздух", "Тепло"], "Семена прорастают в темноте под землёй; свет нужен позже, зелёным листьям."],
    }),
  ],
  "bacteria-viruses": [
    "diagram bacterium",
    "diagram virus",
    closer(
      `**A billion by bedtime.** A bacterium that divides every 20 minutes doubles three times an hour. After 10 hours that is 30 doublings: 2³⁰, or about **one billion** bacteria from a single cell. That is why food left in a warm kitchen spoils in one day and why it should go into the fridge. The growth does not go on forever: food runs out and waste piles up, so the colony stops.

**Penicillin by accident.** In 1928 **A. Fleming** came back from holiday and found that a blue-green mould had spoiled one of his dishes of bacteria. Around the mould the bacteria had died. Instead of throwing the dish away, he studied it and named the substance **penicillin**. Viruses are far smaller than bacteria, about 20 to 300 nanometres, and were first photographed only in 1939 with the new **electron microscope**.`,
      `**Մեկ միլիարդ՝ մինչև քնելը։** 20 րոպեն մեկ բաժանվող բակտերիան ժամում երեք անգամ կրկնապատկվում է։ 10 ժամ հետո դա 30 կրկնապատկում է՝ 2³⁰, կամ մեկ բջջից մոտ **մեկ միլիարդ** բակտերիա։ Ահա թե ինչու տաք խոհանոցում թողած սնունդը մեկ օրում փչանում է, և այն պետք է դնել սառնարան։ Աճը հավերժ չի շարունակվում․ սնունդը վերջանում է, թափոնները կուտակվում են, և գաղութը կանգ է առնում։

**Պենիցիլին՝ պատահաբար։** 1928 թվականին **Ա. Ֆլեմինգը** վերադարձավ արձակուրդից և տեսավ, որ կապտականաչ բորբոսը փչացրել է բակտերիաներով իր թասերից մեկը։ Բորբոսի շուրջը բակտերիաները մահացել էին։ Թասը դեն նետելու փոխարեն նա ուսումնասիրեց այն և նյութն անվանեց **պենիցիլին**։ Վիրուսները շատ ավելի փոքր են, քան բակտերիաները՝ մոտ 20-ից 300 նանոմետր, և առաջին անգամ լուսանկարվեցին միայն 1939 թվականին՝ նոր **էլեկտրոնային մանրադիտակով**։`,
      `**Миллиард к вечеру.** Бактерия, которая делится каждые 20 минут, удваивается трижды в час. За 10 часов это 30 удвоений: 2³⁰, или около **миллиарда** бактерий из одной клетки. Вот почему еда, оставленная на тёплой кухне, портится за день и её нужно убирать в холодильник. Бесконечно рост не идёт: пища кончается, отходы накапливаются, и колония останавливается.

**Пенициллин случайно.** В 1928 году **А. Флеминг** вернулся из отпуска и обнаружил, что сине-зелёная плесень испортила одну из его чашек с бактериями. Вокруг плесени бактерии погибли. Вместо того чтобы выбросить чашку, он изучил её и назвал вещество **пенициллином**. Вирусы гораздо мельче бактерий, примерно от 20 до 300 нанометров, и впервые их сфотографировали лишь в 1939 году с помощью нового **электронного микроскопа**.`,
    ),
    ask(3, {
      en: ["A bacterium divides every 20 minutes. How many bacteria are there after 1 hour?", ["3", "6", "8", "60"], "Three doublings: 1 → 2 → 4 → 8."],
      hy: ["Բակտերիան բաժանվում է 20 րոպեն մեկ։ Քանի՞ բակտերիա կլինի 1 ժամ հետո։", ["3", "6", "8", "60"], "Երեք կրկնապատկում․ 1 → 2 → 4 → 8։"],
      ru: ["Бактерия делится каждые 20 минут. Сколько бактерий будет через 1 час?", ["3", "6", "8", "60"], "Три удвоения: 1 → 2 → 4 → 8."],
    }),
  ],
  "fungi-lichens": [
    "diagram mushroom",
    closer(
      `**The largest living thing is a fungus.** In the Malheur National Forest in Oregon, USA, one single **honey fungus** (*Armillaria ostoyae*) has spread its threads underground over about **9 square kilometres**, more than 1,200 football pitches. Scientists proved it is one organism by comparing the DNA of samples taken far apart. Above ground you would see only clumps of honey mushrooms in autumn and dying trees, because this fungus is a parasite of tree roots. It is estimated to be thousands of years old.

**Lichens: slow, tough pioneers.** Many lichens grow less than a millimetre a year, so geologists use their size to find out how long a rock has lain uncovered. They are also among the toughest organisms known: in 2005 lichens spent 15 days **in open space** on the outside of a Russian satellite, and after returning they went on growing.`,
      `**Ամենամեծ կենդանի օրգանիզմը սունկ է։** ԱՄՆ-ի Օրեգոն նահանգի Մալհյուր ազգային անտառում մեկ միակ **աշնանային մեղրասունկ** (*Armillaria ostoyae*) իր թելերը տարածել է ստորգետնյա մոտ **9 քառակուսի կիլոմետր** տարածքում՝ ավելի քան 1200 ֆուտբոլի դաշտ։ Գիտնականներն ապացուցեցին, որ սա մեկ օրգանիզմ է՝ համեմատելով միմյանցից հեռու վերցված նմուշների ԴՆԹ-ն։ Գետնի վրա աշնանը կտեսնեիր միայն մեղրասնկերի խմբեր և չորացող ծառեր, որովհետև այս սունկը ծառերի արմատների մակաբույծ է։ Գնահատվում է, որ այն հազարավոր տարեկան է։

**Քարաքոսեր՝ դանդաղ և դիմացկուն առաջամարտիկներ։** Շատ քարաքոսեր տարեկան աճում են մեկ միլիմետրից պակաս, ուստի երկրաբաններն օգտագործում են դրանց չափը՝ պարզելու համար, թե որքան ժամանակ է ժայռը բաց մնացել։ Դրանք նաև հայտնի ամենադիմացկուն օրգանիզմներից են․ 2005 թվականին քարաքոսերը 15 օր անցկացրին **բաց տիեզերքում**՝ ռուսական արբանյակի արտաքին մասում, և վերադառնալուց հետո շարունակեցին աճել։`,
      `**Самое большое живое существо — гриб.** В национальном лесу Малур в Орегоне (США) один-единственный **опёнок** (*Armillaria ostoyae*) раскинул нити под землёй примерно на **9 квадратных километров** — больше 1200 футбольных полей. Учёные доказали, что это один организм, сравнив ДНК образцов, взятых далеко друг от друга. На поверхности осенью видны лишь кучки опят и засыхающие деревья: этот гриб паразитирует на корнях. По оценкам, ему тысячи лет.

**Лишайники: медленные и стойкие первопроходцы.** Многие лишайники растут меньше чем на миллиметр в год, поэтому геологи по их размеру определяют, сколько лет скала лежит открытой. Это и одни из самых выносливых организмов: в 2005 году лишайники провели 15 дней **в открытом космосе** снаружи российского спутника и после возвращения продолжили расти.`,
    ),
    ask(1, {
      en: ["A lichen is a partnership of which two organisms?", ["A fungus and an alga", "A moss and a fern", "A bacterium and a virus", "A fungus and a moss"], "The alga photosynthesises; the fungus gives water and protection."],
      hy: ["Քարաքոսն ո՞ր երկու օրգանիզմների համագործակցությունն է։", ["Սնկի և ջրիմուռի", "Մամուռի և պտերի", "Բակտերիայի և վիրուսի", "Սնկի և մամուռի"], "Ջրիմուռը ֆոտոսինթեզ է կատարում, սունկը տալիս է ջուր և պաշտպանություն։"],
      ru: ["Лишайник — союз каких двух организмов?", ["Гриба и водоросли", "Мха и папоротника", "Бактерии и вируса", "Гриба и мха"], "Водоросль фотосинтезирует, гриб даёт воду и защиту."],
    }),
  ],
  "algae-mosses-ferns": [
    "diagram fern",
    closer(
      `**Forests under the sea.** The **giant kelp**, a brown alga of the Pacific coast, can grow about half a metre in a single day and reach more than 40 metres in length. It has no roots: a holdfast grips the rock, and bladders full of gas hold the fronds up towards the light. Kelp forests shelter fish, sea urchins and sea otters, just as trees shelter animals on land.

**What peat keeps.** **Sphagnum** moss makes the water of a bog acidic, and with little oxygen and cold, dead plants hardly rot: they slowly become peat. Bogs cover only about 3% of the land, yet they hold about **twice as much carbon** as all the world's forests. They also keep the past: in 1950 in Denmark peat cutters found the **Tollund Man**, a body about 2,400 years old, so well preserved that even the stubble on his chin could be seen.`,
      `**Անտառներ ծովի տակ։** **Հսկա լամինարիան**՝ Խաղաղ օվկիանոսի ափերի գորշ ջրիմուռը, կարող է մեկ օրում աճել մոտ կես մետր և հասնել ավելի քան 40 մետր երկարության։ Այն արմատներ չունի․ ամրակը կառչում է ժայռին, իսկ գազով լի պղպջակները թիթեղները պահում են դեպի լույսը։ Լամինարիայի անտառներն ապաստան են տալիս ձկներին, ծովոզնիներին և ծովային ջրասամույրներին, ինչպես ծառերը՝ ցամաքի կենդանիներին։

**Ինչ է պահում տորֆը։** **Սֆագնում** մամուռը ճահճի ջուրը թթվային է դարձնում, և քիչ թթվածնի ու ցրտի պայմաններում մեռած բույսերը գրեթե չեն փտում․ դրանք դանդաղ վերածվում են տորֆի։ Ճահիճները ծածկում են ցամաքի ընդամենը մոտ 3%-ը, բայց պարունակում են մոտ **երկու անգամ ավելի ածխածին**, քան աշխարհի բոլոր անտառները։ Դրանք պահում են նաև անցյալը․ 1950 թվականին Դանիայում տորֆ հանողները գտան **Տոլլունդցի մարդուն**՝ մոտ 2400 տարեկան մարմին, այնքան լավ պահպանված, որ նույնիսկ կզակի մազերն էին երևում։`,
      `**Леса под водой.** **Гигантская ламинария**, бурая водоросль тихоокеанских берегов, может вырасти примерно на полметра за день и достигать более 40 метров в длину. Корней у неё нет: ризоид держится за камень, а пузыри с газом поднимают пластины к свету. Ламинариевые леса укрывают рыб, морских ежей и каланов, как деревья укрывают животных на суше.

**Что хранит торф.** Мох **сфагнум** делает воду болота кислой, и при недостатке кислорода и холоде мёртвые растения почти не гниют, а медленно превращаются в торф. Болота занимают лишь около 3% суши, но хранят примерно **вдвое больше углерода**, чем все леса мира. Они хранят и прошлое: в 1950 году в Дании торфяники нашли **Человека из Толлунда** — тело возрастом около 2400 лет, сохранившееся так хорошо, что видна даже щетина на подбородке.`,
    ),
    ask(2, {
      en: ["What do mosses use instead of roots?", ["Root hairs", "Rhizoids", "Rhizomes", "Spores"], "Rhizoids are thin threads that hold the moss to the soil; mosses have no true roots."],
      hy: ["Ի՞նչ են օգտագործում մամուռներն արմատների փոխարեն։", ["Արմատամազիկներ", "Ռիզոիդներ", "Կոճղարմատներ", "Սպորներ"], "Ռիզոիդները բարակ թելեր են, որոնք մամուռը պահում են հողին․ իսկական արմատներ մամուռները չունեն։"],
      ru: ["Что у мхов вместо корней?", ["Корневые волоски", "Ризоиды", "Корневища", "Споры"], "Ризоиды — тонкие нити, которыми мох держится за почву; настоящих корней у мхов нет."],
    }),
  ],
  "seed-plants-flora-armenia": [
    "bars set=plantgroups",
    closer(
      `**Living fossils among the conifers.** In 1994 a park ranger in a remote canyon near Sydney, Australia, found trees that botanists knew only from fossils about 90 million years old: the **Wollemi pine**. Fewer than a hundred wild trees survive. Another gymnosperm, the **ginkgo**, is the last of a group that lived with the dinosaurs. It is so tough that several ginkgo trees within 2 km of the atomic bomb blast in **Hiroshima** in 1945 sprouted again and still grow today.

**Armenia, a homeland of wheat.** The wild wheat *Triticum urartu*, named after the ancient kingdom of Urartu, grows on the dry slopes of Armenia. DNA studies show that it gave one of the three sets of chromosomes of the **bread wheat** we eat today. To protect the wild relatives of wheat, rye and barley, the **Erebuni Reserve** near Yerevan was created in 1981.`,
      `**Կենդանի բրածոներ փշատերևների մեջ։** 1994 թվականին Ավստրալիայի Սիդնեյի մոտ հեռավոր կիրճում անտառապահը գտավ ծառեր, որոնք բուսաբանները ճանաչում էին միայն մոտ 90 միլիոն տարեկան բրածոներից․ դա **Վոլեմիի սոճին** էր։ Պահպանվել է հարյուրից պակաս վայրի ծառ։ Մեկ այլ մերկասերմ՝ **գինկգոն**, դինոզավրերի հետ ապրած խմբի վերջին ներկայացուցիչն է։ Այն այնքան դիմացկուն է, որ 1945 թվականին **Հիրոսիմայում** ատոմային պայթյունի կենտրոնից 2 կմ-ի սահմաններում գտնվող մի քանի գինկգո նորից ծլեցին և մինչ օրս աճում են։

**Հայաստանը՝ ցորենի հայրենիք։** Հայաստանի չոր լանջերին աճում է վայրի ցորեն *Triticum urartu*, որն անվանվել է հնագույն Ուրարտու թագավորության անունով։ ԴՆԹ-ի հետազոտությունները ցույց են տալիս, որ այն տվել է այսօր մեր կերած **փափուկ ցորենի** քրոմոսոմների երեք հավաքակազմից մեկը։ Ցորենի, աշորայի և գարու վայրի ազգականներին պաշտպանելու համար 1981 թվականին Երևանի մոտ ստեղծվեց **«Էրեբունի» արգելոցը**։`,
      `**Живые ископаемые среди хвойных.** В 1994 году лесничий в глухом каньоне близ Сиднея (Австралия) нашёл деревья, которые ботаники знали только по окаменелостям возрастом около 90 миллионов лет: **воллемию**. В природе осталось меньше сотни деревьев. Другое голосеменное, **гинкго**, — последний представитель группы, жившей вместе с динозаврами. Оно так выносливо, что несколько деревьев гинкго в пределах 2 км от эпицентра атомного взрыва в **Хиросиме** в 1945 году снова дали побеги и растут до сих пор.

**Армения — родина пшеницы.** На сухих склонах Армении растёт дикая пшеница *Triticum urartu*, названная в честь древнего царства Урарту. Исследования ДНК показывают, что она дала один из трёх наборов хромосом той **мягкой пшеницы**, которую мы едим сегодня. Чтобы сохранить диких родичей пшеницы, ржи и ячменя, в 1981 году под Ереваном создали **заповедник «Эребуни»**.`,
    ),
    ask(3, {
      en: ["A plant has one cotyledon, parallel veins and flower parts in threes. What is it?", ["A gymnosperm", "A dicot", "A monocot", "A fern"], "These are the signs of monocots, such as wheat, maize and lilies."],
      hy: ["Բույսն ունի մեկ շաքիլ, զուգահեռ ջղավորություն և ծաղկի մասեր՝ երեքական։ Ի՞նչ բույս է։", ["Մերկասերմ", "Երկշաքիլավոր", "Միաշաքիլավոր", "Պտեր"], "Սրանք միաշաքիլավորների հատկանիշներն են, օրինակ՝ ցորենի, եգիպտացորենի և շուշանի։"],
      ru: ["У растения одна семядоля, параллельное жилкование и части цветка по три. Что это?", ["Голосеменное", "Двудольное", "Однодольное", "Папоротник"], "Это признаки однодольных: пшеницы, кукурузы, лилий."],
    }),
  ],
};
