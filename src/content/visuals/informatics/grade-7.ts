import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade7: VisualMap[number] = {
  "python-first-steps": [
    "trace set=hello",
    closer(
      `**Named after a comedy show.** In December 1989 the Dutch programmer **Guido van Rossum** was looking for a hobby project to keep him busy over the Christmas holidays. He decided to write a new programming language that would be easy to read. For its name he chose **Python**, not after the snake, but after the British comedy series "Monty Python's Flying Circus", which he loved. The first version came out in 1991. For many years Guido was jokingly called Python's "Benevolent Dictator for Life", and today Python is one of the most popular languages in the world.

**Why "Hello, world"?** Almost every programmer's first program prints these two words. The tradition goes back to **Brian Kernighan**, who used a greeting like this as an example in a tutorial in 1972, and then in the famous book "The C Programming Language" in 1978. The program is tiny on purpose: if it works, you know the language is installed and you can see its output, so you are ready to start.`,
      `**Անվանված կատակերգական շոուի պատվին։** 1989 թվականի դեկտեմբերին հոլանդացի ծրագրավորող **Գվիդո վան Ռոսումը** փնտրում էր մի հոբբի նախագիծ, որով զբաղվեր Սուրբ Ծննդյան արձակուրդներին։ Նա որոշեց գրել ծրագրավորման նոր լեզու, որը հեշտ կարդացվեր։ Անունը նա ընտրեց **Python**՝ ոչ թե օձի, այլ բրիտանական «Մոնտի Փայթոնի թռչող կրկեսը» կատակերգական սերիալի պատվին, որը շատ էր սիրում։ Առաջին տարբերակը լույս տեսավ 1991 թվականին։ Երկար տարիներ Գվիդոյին կատակով անվանում էին Python-ի «ցմահ բարեհաճ դիկտատոր», իսկ այսօր Python-ն աշխարհի ամենատարածված լեզուներից է։

**Ինչու՞ «Hello, world»։** Գրեթե ամեն ծրագրավորողի առաջին ծրագիրը տպում է այս երկու բառը («Բարև, աշխարհ»)։ Ավանդույթը սկիզբ է առնում **Բրայան Կերնիգանից**, որը նման ողջույն օգտագործեց որպես օրինակ 1972 թվականի մի ձեռնարկում, իսկ հետո՝ 1978 թվականի հայտնի «C ծրագրավորման լեզուն» գրքում։ Ծրագիրը դիտմամբ է այդքան փոքր․ եթե այն աշխատում է, ուրեմն լեզուն տեղադրված է, և դու տեսնում ես արդյունքը, այսինքն՝ պատրաստ ես սկսելու։`,
      `**Назван в честь комедийного шоу.** В декабре 1989 года голландский программист **Гвидо ван Россум** искал хобби-проект, чтобы занять себя на рождественских каникулах. Он решил написать новый язык программирования, который было бы легко читать. Название он выбрал **Python** — не в честь змеи, а в честь британского комедийного сериала «Летающий цирк Монти Пайтона», который очень любил. Первая версия вышла в 1991 году. Много лет Гвидо в шутку называли «великодушным пожизненным диктатором» Python, а сегодня это один из самых популярных языков в мире.

**Почему «Hello, world»?** Почти первая программа каждого программиста печатает эти два слова («Привет, мир»). Традиция идёт от **Брайана Кернигана**, который использовал такое приветствие как пример в учебнике 1972 года, а затем в знаменитой книге «Язык программирования C» 1978 года. Программа нарочно крошечная: если она работает, значит, язык установлен и ты видишь вывод, — можно начинать.`,
    ),
    ask(2, {
      en: ["What does print(\"2 + 3\") display?", ["5", "2 + 3", "\"2 + 3\"", "An error"], "Inside quotation marks it is text, so Python prints it exactly as written. print(2 + 3) without quotes would print 5."],
      hy: ["Ի՞նչ կտպի print(\"2 + 3\") հրամանը։", ["5", "2 + 3", "\"2 + 3\"", "Սխալ"], "Չակերտների ներսում տեքստ է, ուստի Python-ը տպում է այն ճիշտ այնպես, ինչպես գրված է։ Առանց չակերտների print(2 + 3)-ը կտպեր 5։"],
      ru: ["Что выведет print(\"2 + 3\")?", ["5", "2 + 3", "\"2 + 3\"", "Ошибку"], "В кавычках — это текст, поэтому Python печатает его как есть. print(2 + 3) без кавычек напечатал бы 5."],
    }),
  ],
  "data-types-and-arithmetic": [
    "trace set=join",
    "trace set=minutes",
    closer(
      `**Why 0.1 + 0.2 is not 0.3.** Type print(0.1 + 0.2) into Python and you get 0.30000000000000004. Python is not broken. A computer stores a float in binary, and just as 1/3 cannot be written exactly in decimal (0.333…), the number 0.1 cannot be written exactly in binary. The tiny errors add up. That is why programs that count money often store whole numbers of cents or luma, and why you should not test floats with ==; use round() first.

**A rocket lost to a type conversion.** On 4 June 1996 the first **Ariane 5** rocket of the European Space Agency lifted off and, about 40 seconds later, blew itself up. Its guidance software had been copied from the smaller Ariane 4. One piece converted a decimal number for the rocket's sideways speed into a small whole-number type that could hold numbers only up to 32,767. Ariane 5 was faster, the number did not fit, and the error shut down the guidance computer. One conversion cost hundreds of millions of dollars.`,
      `**Ինչու՞ 0,1 + 0,2-ը 0,3 չէ։** Python-ում գրիր print(0.1 + 0.2), և կստանաս 0.30000000000000004։ Python-ը փչացած չէ։ Համակարգիչը կոտորակային թիվը պահում է երկուական համակարգով, և ինչպես 1/3-ը հնարավոր չէ ճշգրիտ գրել տասական համակարգով (0,333…), այնպես էլ 0,1 թիվը հնարավոր չէ ճշգրիտ գրել երկուական համակարգով։ Մանր սխալները գումարվում են։ Ահա թե ինչու փող հաշվող ծրագրերը հաճախ պահում են ամբողջ թվով ցենտեր կամ լումաներ, և ինչու կոտորակային թվերը չի կարելի ստուգել ==-ով․ նախ օգտագործիր round()։

**Հրթիռը, որ կորավ տիպի փոխակերպման պատճառով։** 1996 թվականի հունիսի 4-ին Եվրոպական տիեզերական գործակալության առաջին **Ariane 5** հրթիռը թռավ և մոտ 40 վայրկյան անց ինքն իրեն պայթեցրեց։ Նրա ղեկավարման ծրագիրը պատճենված էր ավելի փոքր Ariane 4-ից։ Ծրագրի մի մասը հրթիռի կողային արագության կոտորակային թիվը փոխակերպում էր փոքր ամբողջ թվային տիպի, որը կարող էր պահել թվեր միայն մինչև 32 767։ Ariane 5-ն ավելի արագ էր, թիվը չտեղավորվեց, և սխալն անջատեց ղեկավարման համակարգիչը։ Մեկ փոխակերպումն արժեցավ հարյուրավոր միլիոնավոր դոլարներ։`,
      `**Почему 0,1 + 0,2 — не 0,3.** Набери в Python print(0.1 + 0.2), и получишь 0.30000000000000004. Python не сломан. Компьютер хранит дробное число в двоичной системе, и как 1/3 нельзя точно записать десятичной дробью (0,333…), так и число 0,1 нельзя точно записать в двоичной. Крошечные ошибки накапливаются. Поэтому программы, считающие деньги, часто хранят целое число копеек или лум, а дробные числа не стоит сравнивать через == — сначала используй round().

**Ракета, потерянная из-за преобразования типа.** 4 июня 1996 года первая ракета **Ariane 5** Европейского космического агентства взлетела и примерно через 40 секунд самоуничтожилась. Её программу управления скопировали с меньшей Ariane 4. Один фрагмент превращал дробное число боковой скорости ракеты в маленький целочисленный тип, вмещающий числа только до 32 767. Ariane 5 была быстрее, число не поместилось, и ошибка отключила управляющий компьютер. Одно преобразование стоило сотни миллионов долларов.`,
    ),
    ask(4, {
      en: ["What does 17 // 5 give, and what does 17 % 5 give?", ["3.4 and 2", "3 and 3.4", "2 and 3", "3 and 2"], "17 = 5 × 3 + 2: integer division gives the whole part 3, and % gives the remainder 2."],
      hy: ["Ի՞նչ է տալիս 17 // 5-ը, և ի՞նչ է տալիս 17 % 5-ը։", ["3,4 և 2", "3 և 3,4", "2 և 3", "3 և 2"], "17 = 5 × 3 + 2. ամբողջ բաժանումը տալիս է ամբողջ մասը՝ 3, իսկ %-ը՝ մնացորդը՝ 2։"],
      ru: ["Что даёт 17 // 5 и что даёт 17 % 5?", ["3,4 и 2", "3 и 3,4", "2 и 3", "3 и 2"], "17 = 5 × 3 + 2: целочисленное деление даёт целую часть 3, а % — остаток 2."],
    }),
  ],
  "conditions-python": [
    "trace set=max2",
    closer(
      `**One extra line.** In 2014 people discovered a serious hole in the security of Apple's phones and computers. The code that checked a website's certificate contained two identical lines, one after the other: "goto fail;". In that language an if without curly brackets controls only the first line under it. The second copy, although it was indented as if it belonged to the if, always ran, so a key check was skipped every time. In Python this mistake would be much harder to make: indentation is not decoration, it decides what belongs to the if.

**= or ==?** In 2003 someone secretly tried to slip a back door into Linux, the system that runs most of the world's servers. The change looked like an ordinary check of a user, but in one place it used = instead of ==. Instead of asking "is this user the administrator?", it quietly made the user the administrator. Careful reviewers noticed the change and removed it. One missing sign can turn a question into an order.`,
      `**Մեկ ավելորդ տող։** 2014 թվականին Apple-ի հեռախոսների և համակարգիչների անվտանգության մեջ լուրջ անցք հայտնաբերվեց։ Կայքի վկայականը ստուգող կոդում իրար հետևից երկու միանման տող կար՝ «goto fail;»։ Այդ լեզվում ձևավոր փակագծեր չունեցող if-ը կառավարում է միայն իր տակի առաջին տողը։ Երկրորդ պատճենը, թեև գրված էր նահանջով, կարծես պատկաներ if-ին, միշտ կատարվում էր, ուստի կարևոր ստուգումն ամեն անգամ բաց էր թողնվում։ Python-ում այս սխալն անելը շատ ավելի դժվար կլիներ․ նահանջը զարդարանք չէ, այն է որոշում, թե ինչն է պատկանում if-ին։

**=, թե՞ ==։** 2003 թվականին ինչ-որ մեկը գաղտնի փորձեց «հետին դուռ» տեղադրել Linux-ում՝ համակարգում, որի վրա աշխատում են աշխարհի սերվերների մեծ մասը։ Փոփոխությունը սովորական օգտատիրոջ ստուգման տեսք ուներ, բայց մի տեղում ==-ի փոխարեն = էր գրված։ «Արդյո՞ք այս օգտատերն ադմինիստրատոր է» հարցնելու փոխարեն այն անաղմուկ օգտատիրոջը դարձնում էր ադմինիստրատոր։ Ուշադիր ստուգողները նկատեցին փոփոխությունը և հեռացրին այն։ Մեկ բացակայող նշանը կարող է հարցը վերածել հրամանի։`,
      `**Одна лишняя строка.** В 2014 году в защите телефонов и компьютеров Apple нашли серьёзную дыру. В коде, проверявшем сертификат сайта, стояли подряд две одинаковые строки: «goto fail;». В том языке if без фигурных скобок управляет только первой строкой под ним. Вторая копия, хотя и была написана с отступом, будто принадлежит if, выполнялась всегда, поэтому важная проверка каждый раз пропускалась. В Python такую ошибку сделать гораздо труднее: отступ — не украшение, именно он решает, что относится к if.

**= или ==?** В 2003 году кто-то тайно попытался встроить «чёрный ход» в Linux — систему, на которой работает большинство серверов мира. Изменение выглядело как обычная проверка пользователя, но в одном месте вместо == стояло =. Вместо вопроса «этот пользователь — администратор?» оно тихо делало пользователя администратором. Внимательные проверяющие заметили изменение и убрали его. Один пропущенный знак может превратить вопрос в приказ.`,
    ),
    ask(1, {
      en: ["Which line checks whether x equals 10?", ["if x == 10:", "if x = 10:", "if x =< 10:", "if (x) 10:"], "== compares; a single = assigns a value and is an error after if in Python."],
      hy: ["Ո՞ր տողն է ստուգում, թե արդյոք x-ը հավասար է 10-ի։", ["if x == 10:", "if x = 10:", "if x =< 10:", "if (x) 10:"], "==-ը համեմատում է, իսկ մեկ =-ը արժեք է վերագրում, և Python-ում if-ից հետո սխալ է։"],
      ru: ["Какая строка проверяет, равно ли x десяти?", ["if x == 10:", "if x = 10:", "if x =< 10:", "if (x) 10:"], "== сравнивает; одиночное = присваивает значение и после if в Python — ошибка."],
    }),
  ],
  "loops-python": [
    "trace set=sum",
    "trace set=double",
    closer(
      `**Why counting starts at 0.** range(5) gives 0, 1, 2, 3, 4, and the first item of a list is number 0. In 1982 the Dutch computer scientist **Edsger Dijkstra** wrote a short note explaining why this is sensible: if you start at 0, then range(a, b) has exactly b − a numbers, and two ranges such as range(0, 5) and range(5, 10) fit together with no gap and no overlap. Many languages agree, although a few, such as Lua and the spreadsheet functions you know, start at 1.

**An address on an infinite loop.** For many years the headquarters of Apple in California stood at the address **1 Infinite Loop**: the ring road around the buildings was named after the programmer's nightmare. An infinite loop is not always a mistake, though: a phone's operating system runs a loop that never ends on purpose, waiting for your next tap, and games run a "game loop" dozens of times a second.`,
      `**Ինչու է հաշվելը սկսվում 0-ից։** range(5)-ը տալիս է 0, 1, 2, 3, 4, իսկ ցուցակի առաջին տարրի համարը 0 է։ 1982 թվականին հոլանդացի գիտնական **Էդսգեր Դեյկստրան** գրեց կարճ նշում՝ բացատրելով, թե ինչու է դա խելամիտ․ եթե սկսում ես 0-ից, ապա range(a, b)-ում ճիշտ b − a թիվ կա, իսկ range(0, 5)-ի և range(5, 10)-ի նման երկու միջակայքեր իրար են միանում առանց բացի և առանց վերադրման։ Շատ լեզուներ համաձայն են դրա հետ, թեև մի քանիսը, օրինակ՝ Lua-ն և քեզ ծանոթ աղյուսակային ֆունկցիաները, սկսում են 1-ից։

**Հասցե անվերջ ցիկլի վրա։** Երկար տարիներ Կալիֆոռնիայում Apple-ի կենտրոնակայանը գտնվում էր **1 Infinite Loop** («Անվերջ ցիկլ, 1») հասցեում․ շենքերի շուրջը պտտվող օղակաձև ճանապարհն անվանվել էր ծրագրավորողների մղձավանջի պատվին։ Սակայն անվերջ ցիկլը միշտ չէ, որ սխալ է․ հեռախոսի օպերացիոն համակարգը դիտմամբ կատարում է երբեք չավարտվող ցիկլ՝ սպասելով քո հաջորդ հպմանը, իսկ խաղերը վայրկյանում տասնյակ անգամներ կատարում են «խաղային ցիկլ»։`,
      `**Почему счёт начинается с 0.** range(5) даёт 0, 1, 2, 3, 4, а первый элемент списка имеет номер 0. В 1982 году нидерландский учёный **Эдсгер Дейкстра** написал короткую заметку о том, почему это разумно: если начинать с 0, то в range(a, b) ровно b − a чисел, а два диапазона вроде range(0, 5) и range(5, 10) стыкуются без пропуска и без наложения. С этим согласны многие языки, хотя некоторые, например Lua и знакомые тебе функции электронных таблиц, начинают с 1.

**Адрес на бесконечном цикле.** Много лет штаб-квартира Apple в Калифорнии находилась по адресу **1 Infinite Loop** («Бесконечный цикл, 1»): кольцевую дорогу вокруг зданий назвали в честь кошмара программистов. Но бесконечный цикл — не всегда ошибка: операционная система телефона нарочно крутит цикл, который никогда не кончается, ожидая твоего следующего касания, а игры десятки раз в секунду выполняют «игровой цикл».`,
    ),
    ask(3, {
      en: ["How many times does the body of for i in range(2, 10, 2) run?", ["8", "5", "4", "10"], "The values are 2, 4, 6, 8: 10 is not included, so the body runs 4 times."],
      hy: ["Քանի՞ անգամ է կատարվում for i in range(2, 10, 2) ցիկլի մարմինը։", ["8", "5", "4", "10"], "Արժեքներն են 2, 4, 6, 8. 10-ը չի մտնում, ուստի մարմինը կատարվում է 4 անգամ։"],
      ru: ["Сколько раз выполнится тело цикла for i in range(2, 10, 2)?", ["8", "5", "4", "10"], "Значения 2, 4, 6, 8: число 10 не входит, поэтому тело выполнится 4 раза."],
    }),
  ],
  "boolean-logic": [
    "logic",
    closer(
      `**The shoemaker's son.** **George Boole** was born in England in 1815 into a poor family; his father was a shoemaker who loved science. George could not afford university, so he taught himself Latin, Greek and higher mathematics while working as a schoolteacher from the age of 16. In 1854 he published "The Laws of Thought", where he showed that reasoning with "true" and "false" can be done with algebra, like sums. In his time it seemed a curiosity; a century later it became the basis of every computer.

**From switches to logic.** In 1937 a 21-year-old student in the USA, **Claude Shannon**, noticed that Boole's algebra fitted electric circuits perfectly: two switches in a row work like AND, two side by side like OR. His master's thesis showed how to design any circuit by writing it as a logical formula and simplifying it. It has been called one of the most important master's theses ever written, because every chip in your phone is built this way.`,
      `**Կոշկակարի որդին։** **Ջորջ Բուլը** ծնվել է Անգլիայում՝ 1815 թվականին, աղքատ ընտանիքում․ նրա հայրը կոշկակար էր, որը սիրում էր գիտությունը։ Ջորջը համալսարանում սովորելու միջոց չուներ, ուստի 16 տարեկանից աշխատելով որպես ուսուցիչ՝ ինքնուրույն սովորեց լատիներեն, հունարեն և բարձրագույն մաթեմատիկա։ 1854 թվականին նա հրատարակեց «Մտածողության օրենքները», որտեղ ցույց տվեց, որ «ճշմարիտ» և «կեղծ» հասկացություններով դատողությունները կարելի է կատարել հանրահաշվի օգնությամբ, ինչպես գումարումը։ Իր ժամանակ դա հետաքրքրաշարժ թվացող բան էր, իսկ մեկ դար անց դարձավ բոլոր համակարգիչների հիմքը։

**Անջատիչներից՝ դեպի տրամաբանություն։** 1937 թվականին ԱՄՆ-ում 21-ամյա ուսանող **Քլոդ Շենոնը** նկատեց, որ Բուլի հանրահաշիվը կատարելապես համապատասխանում է էլեկտրական շղթաներին․ հաջորդաբար միացված երկու անջատիչն աշխատում է AND-ի պես, իսկ զուգահեռաբար միացվածը՝ OR-ի պես։ Նրա մագիստրոսական թեզը ցույց տվեց, թե ինչպես նախագծել ցանկացած շղթա՝ այն գրելով տրամաբանական բանաձևի տեսքով և պարզեցնելով։ Այն անվանել են երբևէ գրված ամենակարևոր մագիստրոսական թեզերից մեկը, որովհետև քո հեռախոսի յուրաքանչյուր միկրոսխեմա կառուցված է այս սկզբունքով։`,
      `**Сын сапожника.** **Джордж Буль** родился в Англии в 1815 году в бедной семье; его отец был сапожником, который любил науку. На университет у Джорджа не было денег, поэтому, работая учителем с 16 лет, он сам выучил латынь, греческий и высшую математику. В 1854 году он издал «Законы мышления», где показал, что рассуждения с «истиной» и «ложью» можно вести с помощью алгебры, как вычисления. В его время это казалось курьёзом, а через сто лет стало основой каждого компьютера.

**От выключателей к логике.** В 1937 году 21-летний студент из США **Клод Шеннон** заметил, что алгебра Буля идеально подходит к электрическим цепям: два выключателя подряд работают как AND, два рядом — как OR. Его магистерская работа показала, как спроектировать любую схему, записав её логической формулой и упростив. Её называют одной из самых важных магистерских работ в истории, ведь каждый чип в твоём телефоне устроен именно так.`,
    ),
    ask(2, {
      en: ["What is the value of not (True and False) or False?", ["False", "True", "None", "An error"], "True and False is False; not False is True; True or False is True."],
      hy: ["Ի՞նչ արժեք ունի not (True and False) or False արտահայտությունը։", ["False", "True", "None", "Սխալ"], "True and False-ը False է, not False-ը True է, True or False-ը True է։"],
      ru: ["Чему равно not (True and False) or False?", ["False", "True", "None", "Ошибка"], "True and False — это False; not False — True; True or False — True."],
    }),
  ],
  "computer-networks": [
    "diagram network",
    "mechanism website",
    "mechanism packets",
    closer(
      `**The first message: "LO".** On 29 October 1969 a student at the University of California, Los Angeles, tried to log in to a computer at Stanford, about 500 km away, over the new **ARPANET** network, the ancestor of the internet. He typed L, and colleagues on the phone confirmed it had arrived. He typed O: it arrived too. At G the Stanford computer crashed. So the first message ever sent over the internet's ancestor was "LO". An hour later they tried again, and the whole word got through.

**The day a spade cut Armenia off.** In March 2011 an elderly woman in a village in Georgia was digging for scrap copper to sell. Her spade cut through a fibre-optic cable that carried much of Armenia's internet traffic. For several hours most of Armenia and parts of Georgia were offline. The story went round the world, because it showed that the "cloud" in fact runs through real cables in the ground, and that a country is safer with several routes to the world rather than one.`,
      `**Առաջին հաղորդագրությունը՝ «LO»։** 1969 թվականի հոկտեմբերի 29-ին Լոս Անջելեսի Կալիֆոռնիայի համալսարանի ուսանողը նոր **ARPANET** ցանցով՝ ինտերնետի նախահայրով, փորձեց մուտք գործել Սթենֆորդի համալսարանի համակարգիչ, որը մոտ 500 կմ հեռավորության վրա էր։ Նա մուտքագրեց L, և հեռախոսով գործընկերները հաստատեցին, որ այն հասել է։ Մուտքագրեց O, այն էլ հասավ։ G-ի վրա Սթենֆորդի համակարգիչը խափանվեց։ Այսպիսով, ինտերնետի նախահոր միջոցով երբևէ ուղարկված առաջին հաղորդագրությունը «LO»-ն էր։ Մեկ ժամ անց նրանք նորից փորձեցին, և ամբողջ բառն անցավ։

**Օրը, երբ բահը Հայաստանն անջատեց։** 2011 թվականի մարտին Վրաստանի գյուղերից մեկում մի տարեց կին հող էր փորում՝ վաճառելու համար պղնձի ջարդոն գտնելու հույսով։ Նրա բահը կտրեց օպտիկական մալուխը, որով անցնում էր Հայաստանի ինտերնետային երթևեկության մեծ մասը։ Մի քանի ժամ Հայաստանի մեծ մասը և Վրաստանի որոշ շրջաններ մնացին առանց ինտերնետի։ Պատմությունը տարածվեց ամբողջ աշխարհով, որովհետև ցույց տվեց, որ «ամպը» իրականում անցնում է հողի տակ ձգված իրական մալուխներով, և որ երկիրն ավելի ապահով է, երբ աշխարհ տանող մի քանի ճանապարհ ունի, այլ ոչ թե մեկը։`,
      `**Первое сообщение: «LO».** 29 октября 1969 года студент Калифорнийского университета в Лос-Анджелесе попытался войти на компьютер в Стэнфорде, примерно в 500 км, по новой сети **ARPANET** — предку интернета. Он набрал L, и коллеги по телефону подтвердили, что буква дошла. Набрал O — тоже дошла. На G стэнфордский компьютер сломался. Так что первым сообщением, отправленным через предка интернета, стало «LO». Через час попробовали снова, и всё слово прошло.

**День, когда лопата отключила Армению.** В марте 2011 года пожилая женщина в одном из сёл Грузии копала землю в поисках медного лома на продажу. Её лопата перерубила оптоволоконный кабель, по которому шла большая часть интернет-трафика Армении. На несколько часов большая часть Армении и часть Грузии остались без интернета. История облетела мир, потому что показала: «облако» на самом деле идёт по настоящим кабелям в земле, и стране надёжнее, когда у неё несколько путей в мир, а не один.`,
    ),
    ask(4, {
      en: ["What does DNS do?", ["It encrypts the data on its way", "It splits files into packets", "It gives Wi-Fi to the home", "It turns a name like example.com into an IP address"], "DNS is the internet's phone book: it finds the number (IP address) for a name."],
      hy: ["Ի՞նչ է անում DNS-ը։", ["Ծածկագրում է տվյալները ճանապարհին", "Ֆայլերը բաժանում է փաթեթների", "Տանը Wi-Fi է տալիս", "example.com-ի նման անունը վերածում է IP հասցեի"], "DNS-ը ինտերնետի հեռախոսագիրքն է․ այն գտնում է անվան համարը (IP հասցեն)։"],
      ru: ["Что делает DNS?", ["Шифрует данные в пути", "Делит файлы на пакеты", "Раздаёт Wi-Fi дома", "Превращает имя вроде example.com в IP-адрес"], "DNS — телефонная книга интернета: находит номер (IP-адрес) по имени."],
    }),
  ],
  cybersecurity: [
    "diagram phish",
    closer(
      `**Stopped by a domain name.** On 12 May 2017 the ransomware **WannaCry** spread across the world in a single day. It locked the files on more than 200,000 computers in about 150 countries and demanded payment to unlock them; some hospitals in Britain had to turn patients away. That evening a 22-year-old British researcher, **Marcus Hutchins**, looked inside the program and noticed that it kept checking a strange, unregistered web address. He registered it for about 10 dollars, and the spreading stopped: the address had been a hidden "off switch". Most of the damage hit computers that had not installed a security update released two months earlier.

**The weakest link.** **Kevin Mitnick**, once one of the most wanted hackers in the USA, later said that he got many passwords not by clever programs but simply by asking. He would phone an office, pretend to be a colleague from the IT department and politely request a password "to fix a problem". This trick is called **social engineering**. After prison he became a security adviser and spent years teaching companies that people, not computers, are often the easiest way in.`,
      `**Կանգնեցված դոմենային անունով։** 2017 թվականի մայիսի 12-ին **WannaCry** շորթող ծրագիրը մեկ օրում տարածվեց ամբողջ աշխարհով։ Այն արգելափակեց ֆայլերը մոտ 150 երկրի ավելի քան 200 000 համակարգչում և վճար պահանջեց դրանք բացելու համար. Բրիտանիայի որոշ հիվանդանոցներ ստիպված եղան հիվանդներին հետ ուղարկել։ Նույն երեկոյան 22-ամյա բրիտանացի հետազոտող **Մարկուս Հաթչինսը** նայեց ծրագրի ներսը և նկատեց, որ այն անընդհատ ստուգում է մի տարօրինակ, չգրանցված վեբ հասցե։ Նա գրանցեց այն մոտ 10 դոլարով, և տարածումը կանգ առավ․ հասցեն թաքնված «անջատիչ» էր։ Վնասի մեծ մասը կրեցին այն համակարգիչները, որոնց վրա տեղադրված չէր երկու ամիս առաջ թողարկված անվտանգության թարմացումը։

**Ամենաթույլ օղակը։** **Քևին Միտնիկը**, որը ժամանակին ԱՄՆ-ի ամենահետախուզվող հաքերներից էր, հետագայում ասում էր, որ շատ գաղտնաբառեր ստացել է ոչ թե խելացի ծրագրերով, այլ պարզապես խնդրելով։ Նա զանգում էր գրասենյակ, ներկայանում որպես ՏՏ բաժնի գործընկեր և քաղաքավարի խնդրում գաղտնաբառը՝ «խնդիրը շտկելու համար»։ Այս հնարքը կոչվում է **սոցիալական ճարտարագիտություն**։ Բանտից հետո նա դարձավ անվտանգության խորհրդատու և տարիներ շարունակ ընկերություններին սովորեցնում էր, որ ամենահեշտ մուտքը հաճախ մարդիկ են, ոչ թե համակարգիչները։`,
      `**Остановлен доменным именем.** 12 мая 2017 года программа-вымогатель **WannaCry** за один день распространилась по всему миру. Она заблокировала файлы более чем на 200 000 компьютеров примерно в 150 странах и требовала деньги за разблокировку; некоторым больницам в Великобритании пришлось отказывать пациентам. В тот же вечер 22-летний британский исследователь **Маркус Хатчинс** заглянул внутрь программы и заметил, что она всё время проверяет странный незарегистрированный веб-адрес. Он зарегистрировал его примерно за 10 долларов, и распространение остановилось: адрес оказался скрытым «выключателем». Больше всего пострадали компьютеры, на которые не поставили обновление безопасности, вышедшее за два месяца до этого.

**Самое слабое звено.** **Кевин Митник**, когда-то один из самых разыскиваемых хакеров США, позже рассказывал, что многие пароли получал не хитрыми программами, а просто попросив. Он звонил в офис, представлялся коллегой из IT-отдела и вежливо просил пароль, «чтобы исправить проблему». Такой приём называется **социальной инженерией**. После тюрьмы он стал консультантом по безопасности и годами объяснял компаниям, что самый лёгкий путь внутрь — часто люди, а не компьютеры.`,
    ),
    ask(3, {
      en: ["Which habit would have protected most computers from WannaCry?", ["A longer screen-saver time", "A bigger hard disk", "Installing security updates promptly", "Turning off Wi-Fi at night"], "WannaCry used a hole that had already been fixed by an update two months earlier. Updates close known holes."],
      hy: ["Ո՞ր սովորությունը կպաշտպաներ համակարգիչների մեծ մասը WannaCry-ից։", ["Էկրանապահի ավելի երկար ժամանակը", "Ավելի մեծ կոշտ սկավառակը", "Անվտանգության թարմացումները ժամանակին տեղադրելը", "Գիշերը Wi-Fi-ն անջատելը"], "WannaCry-ն օգտագործում էր մի անցք, որն երկու ամիս առաջ արդեն փակվել էր թարմացմամբ։ Թարմացումները փակում են հայտնի անցքերը։"],
      ru: ["Какая привычка защитила бы большинство компьютеров от WannaCry?", ["Более долгая заставка", "Более вместительный диск", "Вовремя ставить обновления безопасности", "Выключать Wi-Fi на ночь"], "WannaCry использовал дыру, которую уже закрыло обновление двумя месяцами раньше. Обновления закрывают известные дыры."],
    }),
  ],
};
