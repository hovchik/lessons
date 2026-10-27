import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade4: VisualMap[number] = {
  "design-process": [
    "diagram designcycle",
    closer(
      `**5,127 tries.** The British engineer **James Dyson** was annoyed that his vacuum cleaner lost suction as its bag filled with dust. He decided to build one without a bag that spun the dust out of the air. For about five years he built and tested one model after another: **5,127** prototypes in all. Each failure taught him something, and the last one worked. Testing and improving really are the heart of design.

**A table that would not fit in a car.** In 1956 a worker at a Swedish furniture company could not fit a table into a car after a photo shoot. So he took off its legs. That gave the company an idea: sell furniture **flat**, in boxes, for people to put together at home. Flat boxes take up much less space in lorries and warehouses, so the furniture became cheaper. One design problem led to a whole new way of selling.`,
      `**5127 փորձ։** Բրիտանացի ինժեներ **Ջեյմս Դայսոնին** նեղացնում էր, որ իր փոշեկուլը թուլանում էր, երբ պարկը լցվում էր փոշով։ Նա որոշեց պատրաստել առանց պարկի փոշեկուլ, որը փոշին պտտելով դուրս կհաներ օդից։ Մոտ հինգ տարի նա պատրաստում և փորձարկում էր մոդելները մեկը մյուսի հետևից՝ ընդհանուր **5127** նախատիպ։ Ամեն ձախողում նրան ինչ-որ բան էր սովորեցնում, և վերջինն աշխատեց։ Փորձարկումն ու բարելավումն իսկապես նախագծման սիրտն են։

**Սեղան, որը չէր տեղավորվում մեքենայում։** 1956 թվականին շվեդական կահույքի ընկերության մի աշխատակից լուսանկարահանումից հետո չկարողացավ սեղանը տեղավորել մեքենայում։ Այդ ժամանակ նա հանեց սեղանի ոտքերը։ Դա ընկերությանը մի միտք հուշեց՝ կահույքը վաճառել **հարթ** վիճակում, տուփերով, որ մարդիկ տանը հավաքեն։ Հարթ տուփերը բեռնատարներում և պահեստներում շատ ավելի քիչ տեղ են զբաղեցնում, ուստի կահույքն ավելի էժան դարձավ։ Նախագծման մեկ խնդիրը ծնեց վաճառելու բոլորովին նոր եղանակ։`,
      `**5127 попыток.** Британского инженера **Джеймса Дайсона** раздражало, что его пылесос хуже тянет, когда мешок заполняется пылью. Он решил сделать пылесос без мешка, который выкручивает пыль из воздуха. Около пяти лет он строил и испытывал одну модель за другой — всего **5127** прототипов. Каждая неудача чему-то его учила, и последний заработал. Испытание и улучшение — действительно сердце проектирования.

**Стол, который не влез в машину.** В 1956 году работник шведской мебельной компании после фотосъёмки не смог поместить стол в машину. Тогда он открутил у стола ножки. Это подсказало компании идею: продавать мебель **плоской**, в коробках, чтобы люди собирали её дома. Плоские коробки занимают гораздо меньше места в грузовиках и на складах, поэтому мебель стала дешевле. Одна задача проектирования породила совершенно новый способ продавать.`,
    ),
    ask(3, {
      en: ["How many prototypes did James Dyson build before his bagless vacuum cleaner worked?", ["12", "About 500", "5,127"], "Each failed prototype taught him something; testing and improving are the heart of design."],
      hy: ["Քանի՞ նախատիպ պատրաստեց Ջեյմս Դայսոնը, մինչև իր առանց պարկի փոշեկուլն աշխատեց։", ["12", "Մոտ 500", "5127"], "Ամեն ձախողված նախատիպ նրան ինչ-որ բան էր սովորեցնում․ փորձարկումն ու բարելավումը նախագծման սիրտն են։"],
      ru: ["Сколько прототипов построил Джеймс Дайсон, пока его пылесос без мешка не заработал?", ["12", "Около 500", "5127"], "Каждый неудачный прототип чему-то его учил; испытание и улучшение — сердце проектирования."],
    }),
  ],
  "sketches-and-drawings": [
    "diagram techdrawing",
    closer(
      `**Why plans are called blueprints.** In 1842 the English scientist **John Herschel** found a way to copy pictures using sunlight and special iron salts. Paper soaked in them turned deep **blue** wherever light reached it. Lay a drawing on traced paper over it in the sun, and you get a copy with white lines on blue. For about a hundred years engineers copied their drawings this way, which is why building plans are still called "blueprints".

**A drawing method kept secret.** At the end of the 1700s the French mathematician **Gaspard Monge** invented an exact way to show any object in several flat views: from the front, from above and from the side. With it, engineers could design complicated fortresses without long calculations. The French army thought the method was so valuable that for years it was kept a military secret. Today every technical drawing uses his idea.`,
      `**Ինչու են գծագրերը կոչվում «կապույտ թղթեր»։** 1842 թվականին անգլիացի գիտնական **Ջոն Հերշելը** գտավ նկարներն արևի լույսով և երկաթի հատուկ աղերով պատճենելու եղանակ։ Դրանցով թրջված թուղթը մուգ **կապույտ** էր դառնում այնտեղ, որտեղ լույս էր ընկնում։ Վրան դնում էին թափանցիկ թղթի վրա արված գծագիրը և պահում արևի տակ, և ստացվում էր պատճեն՝ կապույտի վրա սպիտակ գծերով։ Մոտ հարյուր տարի ինժեներներն այդպես էին պատճենում իրենց գծագրերը, և ահա թե ինչու շատ լեզուներում շենքերի նախագծերը մինչև հիմա կոչվում են «կապույտ թղթեր»։

**Գծագրման եղանակ, որը գաղտնի էին պահում։** 1700-ական թվականների վերջին ֆրանսիացի մաթեմատիկոս **Գասպար Մոնժը** հնարեց ցանկացած առարկա մի քանի հարթ տեսքերով ցույց տալու ճշգրիտ եղանակ՝ առջևից, վերևից և կողքից։ Դրա շնորհիվ ինժեներները կարողանում էին բարդ ամրոցներ նախագծել՝ առանց երկար հաշվարկների։ Ֆրանսիական բանակն այդ եղանակն այնքան արժեքավոր համարեց, որ տարիներ շարունակ այն ռազմական գաղտնիք էր։ Այսօր յուրաքանչյուր տեխնիկական գծագիր օգտագործում է նրա գաղափարը։`,
      `**Почему чертежи называют «синьками».** В 1842 году английский учёный **Джон Гершель** нашёл способ копировать рисунки с помощью солнечного света и особых солей железа. Пропитанная ими бумага становилась густо-**синей** там, куда попадал свет. Сверху клали чертёж на прозрачной бумаге и держали на солнце — получалась копия с белыми линиями на синем. Около ста лет инженеры копировали чертежи так, поэтому их до сих пор называют «синьками», а по-английски — blueprints, «синие отпечатки».

**Способ черчения, который держали в секрете.** В конце 1700-х годов французский математик **Гаспар Монж** придумал точный способ показывать любой предмет в нескольких плоских видах — спереди, сверху и сбоку. С его помощью инженеры могли проектировать сложные крепости без долгих расчётов. Французская армия сочла этот способ таким ценным, что много лет его держали в военном секрете. Сегодня каждый технический чертёж использует его идею.`,
    ),
    ask(2, {
      en: ["Why were old copies of engineering drawings blue?", ["Engineers liked the colour blue", "They were copied with sunlight and iron salts that turn blue", "Blue ink was the cheapest"], "Paper treated with iron salts turned blue where light reached it, leaving the lines white."],
      hy: ["Ինչո՞ւ էին ինժեներական գծագրերի հին պատճենները կապույտ։", ["Ինժեներները սիրում էին կապույտ գույնը", "Դրանք պատճենում էին արևի լույսով և երկաթի աղերով, որոնք կապտում են", "Կապույտ թանաքն ամենաէժանն էր"], "Երկաթի աղերով մշակված թուղթը կապտում էր այնտեղ, որտեղ լույս էր ընկնում, իսկ գծերը մնում էին սպիտակ։"],
      ru: ["Почему старые копии инженерных чертежей были синими?", ["Инженеры любили синий цвет", "Их копировали солнечным светом и солями железа, которые синеют", "Синие чернила были самыми дешёвыми"], "Бумага, пропитанная солями железа, синела там, куда падал свет, а линии оставались белыми."],
    }),
  ],
  "simple-machines": [
    "machines",
    closer(
      `**A screw that lifts water.** More than 2,000 years ago **Archimedes** is said to have described a clever machine: a large screw inside a tube, tilted with its lower end in the water. As you turn it, each twist of the screw scoops up a little water and carries it upwards. **Archimedes' screws** are still used today to pump water in the Netherlands and in small power stations where fish can swim through them without being hurt.

**The silliest machines in the world.** The American cartoonist **Rube Goldberg** drew machines that did simple jobs in the most complicated way possible: to wipe your mouth with a napkin, a spoon pulls a string, which tips a ladle, which throws a biscuit to a parrot, and so on. They are full of levers, pulleys, ramps and wheels. Today students around the world compete to build real "Rube Goldberg machines" that work.`,
      `**Պտուտակ, որը ջուր է բարձրացնում։** Ասում են, որ ավելի քան 2000 տարի առաջ **Արքիմեդը** նկարագրել է մի խելացի մեքենա՝ խողովակի ներսում մեծ պտուտակ, որը թեքված է, և նրա ստորին ծայրը ջրի մեջ է։ Երբ այն պտտում ես, պտուտակի ամեն գալար մի քիչ ջուր է վերցնում և բարձրացնում դեպի վեր։ **Արքիմեդյան պտուտակներն** այսօր էլ օգտագործում են Նիդեռլանդներում ջուր մղելու համար և փոքր էլեկտրակայաններում, որոնց միջով ձկները կարող են լողալ՝ առանց վնասվելու։

**Աշխարհի ամենածիծաղելի մեքենաները։** Ամերիկացի ծաղրանկարիչ **Ռուբ Գոլդբերգը** նկարում էր մեքենաներ, որոնք պարզ գործեր էին կատարում հնարավորինս բարդ ձևով․ որպեսզի անձեռոցիկով սրբես բերանդ, գդալը քաշում է թելը, որը թեքում է շերեփը, որը թխվածքաբլիթ է նետում թութակին, և այսպես շարունակ։ Դրանք լի են լծակներով, ճախարակներով, թեքահարթություններով և անիվներով։ Այսօր ամբողջ աշխարհի աշակերտները մրցում են՝ կառուցելով աշխատող իսկական «Ռուբ Գոլդբերգի մեքենաներ»։`,
      `**Винт, который поднимает воду.** Говорят, что больше 2000 лет назад **Архимед** описал хитрую машину: большой винт внутри трубы, наклонённой так, что нижний конец в воде. Когда его вращаешь, каждый виток винта зачерпывает немного воды и несёт её вверх. **Архимедовы винты** до сих пор качают воду в Нидерландах и работают на маленьких электростанциях, через которые рыба может проплыть невредимой.

**Самые нелепые машины в мире.** Американский карикатурист **Руб Голдберг** рисовал машины, которые делали простые дела самым сложным способом: чтобы вытереть рот салфеткой, ложка тянет верёвочку, та наклоняет половник, половник подбрасывает печенье попугаю, и так далее. В них полно рычагов, блоков, наклонных плоскостей и колёс. Сегодня школьники по всему миру соревнуются, строя настоящие работающие «машины Голдберга».`,
    ),
    ask(1, {
      en: ["What does an Archimedes' screw do when you turn it?", ["It lifts water upwards", "It cuts wood", "It tells the time"], "Each twist of the screw scoops up a little water and carries it up the tilted tube."],
      hy: ["Ի՞նչ է անում Արքիմեդյան պտուտակը, երբ այն պտտում ես։", ["Ջուրը բարձրացնում է վեր", "Փայտ է կտրում", "Ժամն է ցույց տալիս"], "Պտուտակի ամեն գալար մի քիչ ջուր է վերցնում և բարձրացնում թեքված խողովակով։"],
      ru: ["Что делает архимедов винт, когда его вращают?", ["Поднимает воду вверх", "Пилит дерево", "Показывает время"], "Каждый виток винта зачерпывает немного воды и несёт её вверх по наклонной трубе."],
    }),
  ],
  "simple-circuit": [
    "diagram torch",
    closer(
      `**A battery made from a lemon.** Push a copper coin and a zinc-coated nail into a lemon, and connect them with wires: you get about **1 volt**. Several lemons joined in a row can light a small LED. The energy does not really come from the juice: it comes from the two different metals, and the zinc slowly gets used up. The juice only lets tiny charged particles move between them.

**Why birds can sit on power lines.** Current flows only when it has a path: from one wire to another, or down into the ground. A bird sitting on a single wire touches only that wire, so the current has no reason to pass through its body. If a large bird touched two wires at once, it would be in great danger. That is also why people must never go near a fallen wire: through their feet, the ground completes the path.`,
      `**Մարտկոց՝ կիտրոնից։** Կիտրոնի մեջ խրի՛ր պղնձե մետաղադրամ և ցինկապատ մեխ ու միացրու դրանք լարերով․ կստանաս մոտ **1 վոլտ**։ Շարքով միացված մի քանի կիտրոնը կարող է վառել փոքր լուսադիոդ։ Էներգիան իրականում հյութից չէ․ այն գալիս է երկու տարբեր մետաղներից, և ցինկը կամաց-կամաց ծախսվում է։ Հյութը միայն թույլ է տալիս մանրիկ լիցքավորված մասնիկներին շարժվել դրանց միջև։

**Ինչու կարող են թռչունները նստել էլեկտրալարերին։** Հոսանքը հոսում է միայն այն դեպքում, երբ ճանապարհ ունի՝ մի լարից մյուսը կամ դեպի գետին։ Մեկ լարի վրա նստած թռչունը հպվում է միայն այդ լարին, ուստի հոսանքը պատճառ չունի նրա մարմնով անցնելու։ Եթե մեծ թռչունը միաժամանակ դիպչեր երկու լարի, մեծ վտանգի մեջ կլիներ։ Ահա թե ինչու մարդիկ երբեք չպետք է մոտենան ընկած լարին․ նրանց ոտքերի միջով գետինը փակում է ճանապարհը։`,
      `**Батарейка из лимона.** Воткни в лимон медную монету и оцинкованный гвоздь и соедини их проводами — получится около **1 вольта**. Несколько лимонов, соединённых в ряд, могут зажечь маленький светодиод. Энергия на самом деле берётся не из сока, а из двух разных металлов, и цинк понемногу расходуется. Сок лишь позволяет крошечным заряженным частицам двигаться между ними.

**Почему птицы могут сидеть на проводах.** Ток течёт, только когда у него есть путь: от одного провода к другому или в землю. Птица, сидящая на одном проводе, касается только его, поэтому току незачем проходить через её тело. Если бы большая птица коснулась сразу двух проводов, она была бы в большой опасности. Поэтому же людям никогда нельзя подходить к упавшему проводу: через их ноги земля замыкает путь.`,
    ),
    ask(2, {
      en: ["Why is a bird sitting on one power line safe?", ["Its feet are made of rubber", "It touches only one wire, so the current has no path through it", "The current is switched off for birds"], "Current needs a path to another wire or the ground; touching just one wire gives it none."],
      hy: ["Ինչո՞ւ է մեկ էլեկտրալարի վրա նստած թռչունն անվտանգ։", ["Նրա ոտքերը ռետինից են", "Նա հպվում է միայն մեկ լարի, ուստի հոսանքը նրա միջով ճանապարհ չունի", "Թռչունների համար հոսանքն անջատում են"], "Հոսանքին ճանապարհ է պետք դեպի մյուս լարը կամ գետինը, իսկ միայն մեկ լարին հպվելն այդպիսի ճանապարհ չի տալիս։"],
      ru: ["Почему птице, сидящей на одном проводе, ничего не грозит?", ["У неё резиновые лапы", "Она касается только одного провода, и у тока нет пути через неё", "Для птиц ток выключают"], "Току нужен путь к другому проводу или в землю, а касание одного провода такого пути не даёт."],
    }),
  ],
  "clay-and-pottery": [
    "mechanism coilpot",
    closer(
      `**Pots older than farms.** Pieces of pottery found in **Xianrendong Cave** in China are about **20,000** years old. That means people were cooking in clay pots during the Ice Age, thousands of years before anyone began farming. Clay was easy to find, and a pot that could stand in the fire made it possible to boil food and make soups.

**Why fired clay never turns back into mud.** A clay pot that has only dried in the air will go soft and turn back into mud if you leave it in water. But in a kiln, at about 600 °C and above, the water locked inside the tiny clay crystals is driven out, and the crystals change for ever. A flowerpot can stand in the rain for a hundred years and stay hard. That change is what turns clay into **ceramics**.`,
      `**Ամաններ, որոնք հողագործությունից ավելի հին են։** Չինաստանի **Սյանժենդուն քարանձավում** գտնված խեցեղենի կտորները մոտ **20 000** տարեկան են։ Դա նշանակում է, որ մարդիկ կավե ամաններում ճաշ էին եփում սառցադաշտային դարաշրջանում՝ հողագործությունն սկսվելուց հազարավոր տարիներ առաջ։ Կավը հեշտ էր գտնել, իսկ կրակին դիմացող ամանը հնարավորություն էր տալիս սնունդ եփել և ապուրներ պատրաստել։

**Ինչու թրծված կավն երբեք նորից ցեխ չի դառնում։** Միայն օդում չորացած կավե ամանը փափկում և նորից ցեխ է դառնում, եթե այն թողնես ջրում։ Բայց հնոցում՝ մոտ 600 °C-ից բարձր ջերմաստիճանում, կավի մանրիկ բյուրեղների ներսում փակված ջուրը դուրս է մղվում, և բյուրեղներն ընդմիշտ փոխվում են։ Ծաղկամանը կարող է հարյուր տարի մնալ անձրևի տակ և պինդ մնալ։ Հենց այդ փոփոխությունն է կավը դարձնում **կերամիկա**։`,
      `**Горшки старше полей.** Черепкам посуды из **пещеры Сяньжэньдун** в Китае около **20 000** лет. Значит, люди варили еду в глиняных горшках ещё в ледниковый период, за тысячи лет до того, как начали заниматься земледелием. Глину было легко найти, а горшок, который выдерживал огонь, позволял варить пищу и готовить супы.

**Почему обожжённая глина никогда не превращается обратно в грязь.** Глиняный горшок, который только высох на воздухе, размокнет и снова станет грязью, если оставить его в воде. Но в печи, примерно от 600 °C и выше, вода, запертая внутри крошечных кристаллов глины, уходит, и кристаллы меняются навсегда. Цветочный горшок может сто лет простоять под дождём и остаться твёрдым. Именно это изменение превращает глину в **керамику**.`,
    ),
    ask(2, {
      en: ["What happens to a dried but unfired clay pot left in water?", ["It stays hard for ever", "It goes soft and turns back into mud", "It turns into glass"], "Only firing in a kiln drives the water out of the clay crystals and changes them for ever."],
      hy: ["Ի՞նչ է լինում չորացած, բայց չթրծված կավե ամանի հետ, եթե այն թողնես ջրում։", ["Ընդմիշտ պինդ է մնում", "Փափկում է և նորից ցեխ դառնում", "Ապակի է դառնում"], "Միայն հնոցում թրծելն է ջուրը դուրս մղում կավի բյուրեղներից և դրանք ընդմիշտ փոխում։"],
      ru: ["Что будет с высохшим, но не обожжённым глиняным горшком в воде?", ["Он навсегда останется твёрдым", "Он размокнет и снова станет грязью", "Он превратится в стекло"], "Только обжиг в печи выгоняет воду из кристаллов глины и навсегда их меняет."],
    }),
  ],
  "working-with-wood": [
    "diagram woodlog",
    closer(
      `**Wood that sinks.** Most wood floats, but some kinds are so dense that they sink like stones. One of the heaviest is **lignum vitae** from the Caribbean. It is so hard and so full of natural oil that it oils itself. For a long time it was used for the bearings that hold the turning propeller shafts of ships, and it was even used in the first nuclear submarine in 1954.

**Skyscrapers made of wood.** Engineers have learned to glue thin layers of wood together crosswise, so that the grain runs in different directions. Such panels are very strong and do not warp. From them people now build wooden towers more than **80 metres** tall. A wooden building also keeps inside it the carbon that the trees took from the air while they grew.`,
      `**Փայտ, որը սուզվում է։** Փայտի մեծ մասը լողում է, բայց որոշ տեսակներ այնքան խիտ են, որ քարի պես սուզվում են։ Ամենածանրերից մեկը Կարիբյան ավազանի **լիգնում վիտեն** է («կյանքի փայտ»)։ Այն այնքան պինդ է և այնքան լի բնական յուղով, որ ինքն իրեն է յուղում։ Երկար ժամանակ դրանից պատրաստում էին այն առանցքակալները, որոնք պահում են նավերի պտտվող թիակային լիսեռները, և այն օգտագործվել է նույնիսկ առաջին ատոմային սուզանավում՝ 1954 թվականին։

**Փայտե երկնաքերեր։** Ինժեներները սովորել են փայտի բարակ շերտերն իրար սոսնձել խաչաձև, որ շերտերը տարբեր ուղղություններով ձգվեն։ Այդպիսի վահանակներն շատ ամուր են և չեն ծռվում։ Դրանցից այժմ ավելի քան **80 մետր** բարձրությամբ փայտե աշտարակներ են կառուցում։ Փայտե շենքը նաև իր մեջ է պահում այն ածխածինը, որը ծառերը վերցրել են օդից՝ աճելիս։`,
      `**Дерево, которое тонет.** Большинство пород дерева плавает, но некоторые такие плотные, что тонут, как камни. Одна из самых тяжёлых — **бакаут**, «дерево жизни» с Карибских островов. Он такой твёрдый и так пропитан природным маслом, что смазывает сам себя. Долгое время из него делали подшипники, в которых вращаются гребные валы кораблей, и его использовали даже на первой атомной подводной лодке в 1954 году.

**Небоскрёбы из дерева.** Инженеры научились склеивать тонкие слои дерева крест-накрест, так что волокна идут в разные стороны. Такие панели очень прочные и не коробятся. Из них сейчас строят деревянные башни высотой больше **80 метров**. Деревянное здание к тому же хранит в себе углерод, который деревья забрали из воздуха, пока росли.`,
    ),
    ask(3, {
      en: ["What was the heavy, oily wood lignum vitae used for?", ["Matches", "Paper", "Bearings for ships' propeller shafts"], "It is so hard and oily that it lubricates itself, perfect for turning shafts."],
      hy: ["Ինչի՞ համար էին օգտագործում ծանր, յուղոտ լիգնում վիտե փայտը։", ["Լուցկիների", "Թղթի", "Նավերի թիակային լիսեռների առանցքակալների"], "Այն այնքան պինդ է և յուղոտ, որ ինքն իրեն է յուղում, ինչը հիանալի է պտտվող լիսեռների համար։"],
      ru: ["Для чего использовали тяжёлое маслянистое дерево бакаут?", ["Для спичек", "Для бумаги", "Для подшипников гребных валов кораблей"], "Оно такое твёрдое и маслянистое, что смазывает само себя, — идеально для вращающихся валов."],
    }),
  ],
  "finger-knitting-and-pompoms": [
    "mechanism pompom",
    closer(
      `**Socks a thousand years old.** Some of the oldest knitted things in the world are socks found in **Egypt**, about a thousand years old. They are knitted from blue and white cotton in fine patterns, with tiny stitches, and some even have letters worked into them. Whoever knitted them already knew everything that knitters still do today.

**Messages hidden in stitches.** Knitting is made of just two kinds of stitch, and a row of them can work like a code of dots and dashes. During the Second World War some countries worried that spies might hide secret messages in knitting, and they even banned sending knitting patterns abroad. In one story, a woman knitting by a window near a railway made a different stitch for each passing train.`,
      `**Հազարամյա գուլպաներ։** Աշխարհի ամենահին գործված իրերից են **Եգիպտոսում** գտնված մոտ հազար տարեկան գուլպաները։ Դրանք գործված են կապույտ և սպիտակ բամբակե թելից՝ նուրբ նախշերով, մանրիկ օղակներով, իսկ որոշների մեջ նույնիսկ տառեր են գործված։ Ով էլ դրանք գործած լինի, արդեն գիտեր այն ամենը, ինչ գործողներն անում են այսօր։

**Օղակներում թաքցրած նամակներ։** Գործվածքը կազմված է օղակների ընդամենը երկու տեսակից, և դրանց շարքը կարող է աշխատել կետերի ու գծիկների ծածկագրի պես։ Երկրորդ համաշխարհային պատերազմի ժամանակ որոշ երկրներ մտահոգված էին, որ լրտեսները կարող են գաղտնի նամակներ թաքցնել գործվածքում, և նույնիսկ արգելեցին գործելու նախշերն արտասահման ուղարկել։ Մի պատմության համաձայն՝ երկաթգծի մոտ պատուհանի առաջ նստած մի կին ամեն անցնող գնացքի համար տարբեր օղակ էր գործում։`,
      `**Носки, которым тысяча лет.** Одни из самых древних вязаных вещей в мире — носки, найденные в **Египте**, им около тысячи лет. Они связаны из синей и белой хлопковой нити тонкими узорами, крошечными петлями, а в некоторые даже вплетены буквы. Тот, кто их связал, уже знал всё, что делают вязальщицы сегодня.

**Послания, спрятанные в петлях.** Вязание состоит всего из двух видов петель, и их ряд может работать, как код из точек и тире. Во время Второй мировой войны некоторые страны опасались, что шпионы прячут в вязании тайные сообщения, и даже запрещали отправлять схемы вязания за границу. По одной истории, женщина, вязавшая у окна возле железной дороги, делала особую петлю для каждого проходящего поезда.`,
    ),
    ask(2, {
      en: ["How could knitting hide a secret message?", ["Using invisible ink", "Two kinds of stitch can work like dots and dashes", "By the smell of the wool"], "A row of two different stitches can spell out a code, which is why some countries banned sending patterns abroad."],
      hy: ["Ինչպե՞ս կարող էր գործվածքը գաղտնի նամակ թաքցնել։", ["Անտեսանելի թանաքով", "Օղակների երկու տեսակը կարող է աշխատել կետերի և գծիկների պես", "Բրդի հոտով"], "Երկու տարբեր օղակներից շարքը կարող է ծածկագիր կազմել, ահա թե ինչու որոշ երկրներ արգելեցին նախշեր ուղարկել արտասահման։"],
      ru: ["Как вязание могло скрыть тайное послание?", ["Невидимыми чернилами", "Два вида петель могут работать как точки и тире", "Запахом шерсти"], "Ряд из двух разных петель может составить код, поэтому некоторые страны запрещали отправлять схемы за границу."],
    }),
  ],
  "vegetable-salad": [
    "bars set=vitc",
    closer(
      `**The tomato that frightened Europe.** When tomatoes were brought from America to Europe in the 1500s, many people were afraid to eat them. Tomatoes belong to the same plant family as **deadly nightshade**, a very poisonous plant, and their leaves do smell strong. For a long time tomatoes were grown only as pretty decorations in gardens. Today it is hard to imagine an Armenian summer salad without them.

**Why onions make you cry.** An onion keeps its defence ready inside its cells. When a knife breaks them, two substances mix and make a gas that floats up to your eyes and stings. Your eyes make tears to wash it away. A very sharp knife breaks fewer cells, and an onion chilled in the fridge gives off less gas, so you cry less.`,
      `**Լոլիկը, որ վախեցնում էր Եվրոպան։** Երբ 1500-ական թվականներին լոլիկն Ամերիկայից բերեցին Եվրոպա, շատերը վախենում էին այն ուտել։ Լոլիկը պատկանում է նույն բուսաընտանիքին, ինչ շատ թունավոր **մորմը**, իսկ նրա տերևներն իսկապես ուժեղ հոտ ունեն։ Երկար ժամանակ լոլիկն աճեցնում էին միայն որպես գեղեցիկ զարդ այգիներում։ Այսօր դժվար է պատկերացնել հայկական ամառային աղցանն առանց լոլիկի։

**Ինչու է սոխը լացացնում։** Սոխն իր պաշտպանությունը պատրաստ է պահում բջիջների ներսում։ Երբ դանակը քանդում է դրանք, երկու նյութ խառնվում և գազ են առաջացնում, որը բարձրանում է դեպի աչքերդ և այրում։ Աչքերդ արցունք են արտադրում՝ այն լվանալու համար։ Շատ սուր դանակն ավելի քիչ բջիջ է քանդում, իսկ սառնարանում սառեցրած սոխն ավելի քիչ գազ է արձակում, ուստի ավելի քիչ ես լացում։`,
      `**Помидор, который пугал Европу.** Когда в 1500-х годах помидоры привезли из Америки в Европу, многие боялись их есть. Помидор относится к тому же семейству растений, что и очень ядовитая **белладонна**, а его листья действительно сильно пахнут. Долгое время помидоры выращивали только как красивое украшение в садах. Сегодня трудно представить армянский летний салат без них.

**Почему от лука плачут.** Лук держит свою защиту наготове внутри клеток. Когда нож их разрушает, два вещества смешиваются и образуют газ, который поднимается к глазам и щиплет. Глаза выделяют слёзы, чтобы его смыть. Очень острый нож разрушает меньше клеток, а охлаждённый в холодильнике лук выделяет меньше газа, и плачешь меньше.`,
    ),
    ask(1, {
      en: ["Why were many Europeans afraid to eat tomatoes at first?", ["Tomatoes belong to the same family as deadly nightshade", "Tomatoes were blue", "A king had banned them"], "The family link to a very poisonous plant made people think tomatoes were dangerous, so they grew them only as decoration."],
      hy: ["Ինչո՞ւ էին շատ եվրոպացիներ սկզբում վախենում լոլիկ ուտել։", ["Լոլիկը պատկանում է նույն ընտանիքին, ինչ մորմը", "Լոլիկը կապույտ էր", "Թագավորն արգելել էր այն"], "Շատ թունավոր բույսի հետ ազգակցությունը ստիպում էր մարդկանց կարծել, որ լոլիկը վտանգավոր է, ուստի այն աճեցնում էին միայն որպես զարդ։"],
      ru: ["Почему многие европейцы сначала боялись есть помидоры?", ["Помидор из того же семейства, что и белладонна", "Помидоры были синими", "Король запретил их"], "Родство с очень ядовитым растением заставляло думать, что помидоры опасны, поэтому их выращивали только как украшение."],
    }),
  ],
};
