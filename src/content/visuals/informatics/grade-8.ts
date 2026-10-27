import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade8: VisualMap[number] = {
  "lists-python": [
    "trace set=maxlist",
    closer(
      `**Too random to feel random.** For years the music service **Spotify** shuffled each playlist truly at random, like random.shuffle in Python. Users complained: "Shuffle played three songs by the same singer in a row, it's broken!" But that is exactly what real randomness does: clusters happen. In 2014 the company changed the algorithm so that songs by the same artist are spread out evenly through the list. It is less random, but it feels more random to people.

**A rover with too many files.** In January 2004, a few weeks after landing on Mars, the rover **Spirit** suddenly stopped doing its work and kept restarting itself. Engineers on Earth found the cause: the list of files in its flash memory had grown so long during the journey that the computer ran out of memory just keeping track of it. They sent commands to delete old files and changed how the list was managed, and Spirit went on to work on Mars for six more years.`,
      `**Չափազանց պատահական, որ պատահական թվա։** Երկար տարիներ **Spotify** երաժշտական ծառայությունը յուրաքանչյուր երգացանկ խառնում էր իսկապես պատահական ձևով, ինչպես Python-ի random.shuffle-ը։ Օգտատերերը բողոքում էին․ «Խառնումն իրար հետևից նույն երգչի երեք երգ միացրեց, այն փչացած է»։ Բայց հենց այդպես է վարվում իսկական պատահականությունը․ կուտակումներ լինում են։ 2014 թվականին ընկերությունը փոխեց ալգորիթմը, որպեսզի նույն կատարողի երգերը հավասարաչափ բաշխվեն ցուցակում։ Այն ավելի քիչ պատահական է, բայց մարդկանց ավելի պատահական է թվում։

**Մարսագնաց՝ չափազանց շատ ֆայլերով։** 2004 թվականի հունվարին, Մարսի վրա վայրէջքից մի քանի շաբաթ անց, **Spirit** մարսագնացը հանկարծ դադարեց աշխատել և անընդհատ վերագործարկվում էր։ Երկրի ինժեներները գտան պատճառը․ ճանապարհորդության ընթացքում նրա ֆլեշ հիշողության ֆայլերի ցուցակն այնքան էր երկարել, որ համակարգչի հիշողությունը չէր բավականացնում նույնիսկ այն հետևելու համար։ Նրանք հրամաններ ուղարկեցին՝ ջնջելու հին ֆայլերը, և փոխեցին ցուցակի կառավարման եղանակը, և Spirit-ը Մարսի վրա աշխատեց ևս վեց տարի։`,
      `**Слишком случайно, чтобы казаться случайным.** Много лет музыкальный сервис **Spotify** перемешивал каждый плейлист по-настоящему случайно, как random.shuffle в Python. Пользователи жаловались: «Перемешивание включило три песни одного певца подряд, оно сломано!» Но именно так и ведёт себя настоящая случайность: скопления бывают. В 2014 году компания изменила алгоритм, чтобы песни одного исполнителя равномерно распределялись по списку. Это менее случайно, но людям кажется более случайным.

**Марсоход со слишком большим числом файлов.** В январе 2004 года, через несколько недель после посадки на Марс, марсоход **Spirit** вдруг перестал работать и всё время перезагружался. Инженеры на Земле нашли причину: список файлов в его флеш-памяти за время полёта так разросся, что компьютеру не хватало памяти даже на то, чтобы его вести. Они отправили команды удалить старые файлы, изменили способ работы со списком, и Spirit проработал на Марсе ещё шесть лет.`,
    ),
    ask(3, {
      en: ["a = [4, 7, 1, 9]. What is a[-1] + a[1]?", ["5", "11", "16", "8"], "a[-1] is the last element, 9, and a[1] is the second, 7: 9 + 7 = 16."],
      hy: ["a = [4, 7, 1, 9]։ Որքա՞ն է a[-1] + a[1]-ը։", ["5", "11", "16", "8"], "a[-1]-ը վերջին տարրն է՝ 9, իսկ a[1]-ը՝ երկրորդը՝ 7․ 9 + 7 = 16։"],
      ru: ["a = [4, 7, 1, 9]. Чему равно a[-1] + a[1]?", ["5", "11", "16", "8"], "a[-1] — последний элемент, 9, а a[1] — второй, 7: 9 + 7 = 16."],
    }),
  ],
  "strings-python": [
    "trace set=palindrome",
    closer(
      `**Palindromes round the world.** In English the most famous one is "A man, a plan, a canal: Panama!", which reads the same backwards if you ignore spaces and punctuation. Russian children know the line attributed to the poet Afanasy Fet, "А роза упала на лапу Азора" ("And the rose fell on Azor's paw"). The longest everyday palindromic word may be the Finnish **saippuakivikauppias**, a seller of soapstone, with 19 letters. A program checking such phrases first removes spaces and punctuation and makes all letters small, then compares the text with text[::-1].

**The Cupertino effect.** Early spell-checkers knew the word "co-operation" but not "cooperation" without the hyphen. When writers typed it, the program helpfully suggested the closest word in its list, which was **Cupertino**, a town in California. Hurried writers accepted the change, and the strange phrase "Cupertino between countries" appeared in real documents of international organisations. Replacing strings automatically is powerful, but someone still has to check the result.`,
      `**Պալինդրոմներ ամբողջ աշխարհում։** Անգլերենում ամենահայտնին «A man, a plan, a canal: Panama!»-ն է («Մարդ, ծրագիր, ջրանցք՝ Պանամա»), որը հետ ընթերցելիս նույնն է, եթե անտեսենք բացատներն ու կետադրությունը։ Ռուս երեխաները գիտեն բանաստեղծ Աֆանասի Ֆետին վերագրվող «А роза упала на лапу Азора» տողը («Եվ վարդն ընկավ Ազորի թաթին»)։ Ամենաերկար առօրյա պալինդրոմ բառը թերևս ֆիններեն **saippuakivikauppias**-ն է՝ օճառաքար վաճառող, 19 տառով։ Նման արտահայտություններ ստուգող ծրագիրը նախ հեռացնում է բացատներն ու կետադրական նշանները, բոլոր տառերը դարձնում փոքրատառ, հետո տեքստը համեմատում text[::-1]-ի հետ։

**Կուպերտինոյի էֆեկտը։** Առաջին ուղղագրիչները գիտեին «co-operation» («համագործակցություն») բառը գծիկով, բայց ոչ առանց գծիկի «cooperation»-ը։ Երբ հեղինակները գրում էին այն, ծրագիրը սիրալիր առաջարկում էր իր ցուցակի ամենամոտ բառը, որը **Cupertino**-ն էր՝ Կալիֆոռնիայի մի քաղաք։ Շտապող հեղինակներն ընդունում էին փոփոխությունը, և միջազգային կազմակերպությունների իրական փաստաթղթերում հայտնվեց տարօրինակ «Կուպերտինո երկրների միջև» արտահայտությունը։ Տողերի ավտոմատ փոխարինումը հզոր է, բայց ինչ-որ մեկը միևնույն է պետք է ստուգի արդյունքը։`,
      `**Палиндромы по всему миру.** В английском самый известный — «A man, a plan, a canal: Panama!» («Человек, план, канал — Панама!»), который читается одинаково в обе стороны, если не обращать внимания на пробелы и знаки препинания. Русские дети знают строку, приписываемую поэту Афанасию Фету: «А роза упала на лапу Азора». Самое длинное обиходное слово-палиндром — пожалуй, финское **saippuakivikauppias**, «торговец мыльным камнем», из 19 букв. Программа, проверяющая такие фразы, сначала убирает пробелы и знаки препинания, делает все буквы строчными, а потом сравнивает текст с text[::-1].

**Эффект Купертино.** Ранние программы проверки орфографии знали слово «co-operation» («сотрудничество») с дефисом, но не «cooperation» без него. Когда авторы набирали его, программа услужливо предлагала ближайшее слово из своего списка — **Cupertino**, название города в Калифорнии. Торопливые авторы соглашались, и в настоящих документах международных организаций появилась странная фраза «Купертино между странами». Автоматическая замена строк — мощная вещь, но результат всё равно должен проверить человек.`,
    ),
    ask(1, {
      en: ["word = \"Yerevan\". What is word[1:4]?", ["\"ere\"", "\"Yer\"", "\"erev\"", "\"rev\""], "The slice takes indices 1, 2 and 3 (4 is not included): e, r, e."],
      hy: ["word = \"Yerevan\"։ Ի՞նչ է word[1:4]-ը։", ["\"ere\"", "\"Yer\"", "\"erev\"", "\"rev\""], "Կտրվածքը վերցնում է 1, 2 և 3 ինդեքսները (4-ը չի մտնում)՝ e, r, e։"],
      ru: ["word = \"Yerevan\". Что такое word[1:4]?", ["\"ere\"", "\"Yer\"", "\"erev\"", "\"rev\""], "Срез берёт индексы 1, 2 и 3 (4 не входит): e, r, e."],
    }),
  ],
  "functions-python": [
    "trace set=area",
    closer(
      `**The first subroutine.** In 1949 at the University of Cambridge the computer **EDSAC** began to run programs. A young researcher, **David Wheeler**, found a clever way to jump into a piece of code, run it and then come back to the place you left: the first **subroutines**, which we now call functions. With his colleagues he built a library of ready-made subroutines for common jobs such as square roots. In 1951 Wheeler became one of the first people in the world to receive a doctorate in computer science.

**Eleven lines that broke the internet.** In March 2016 a programmer removed his small packages from **npm**, a huge online library of JavaScript code. One of them, called left-pad, was a function of just eleven lines that added spaces to the left of a string. Thousands of projects, including tools used by very large companies, depended on it, directly or through other packages, and suddenly they could not be built. The package was restored within hours, but the story is still told: functions let us reuse each other's work, and that creates chains of dependence.`,
      `**Առաջին ենթածրագիրը։** 1949 թվականին Քեմբրիջի համալսարանում **EDSAC** համակարգիչը սկսեց ծրագրեր կատարել։ Երիտասարդ հետազոտող **Դեյվիդ Ուիլերը** գտավ կոդի մի հատվածի մեջ «ցատկելու», այն կատարելու և հետո թողած տեղը վերադառնալու խելացի եղանակ․ դրանք առաջին **ենթածրագրերն** էին, որոնք մենք այժմ ֆունկցիաներ ենք անվանում։ Գործընկերների հետ նա ստեղծեց պատրաստի ենթածրագրերի գրադարան սովորական գործերի համար, օրինակ՝ քառակուսի արմատներ հանելու։ 1951 թվականին Ուիլերը դարձավ աշխարհում առաջիններից մեկը, ով ստացավ համակարգչային գիտության դոկտորի կոչում։

**Տասնմեկ տող, որ «կոտրեցին» ինտերնետը։** 2016 թվականի մարտին մի ծրագրավորող իր փոքր փաթեթները հեռացրեց **npm**-ից՝ JavaScript կոդի հսկայական առցանց գրադարանից։ Դրանցից մեկը՝ left-pad անունով, ընդամենը տասնմեկ տողանոց ֆունկցիա էր, որը տողի ձախից բացատներ էր ավելացնում։ Հազարավոր նախագծեր, այդ թվում՝ շատ մեծ ընկերությունների օգտագործած գործիքներ, կախված էին նրանից՝ ուղղակիորեն կամ այլ փաթեթների միջոցով, և հանկարծ դրանք հնարավոր չէր կառուցել։ Փաթեթը մի քանի ժամում վերականգնվեց, բայց պատմությունը մինչ օրս պատմում են․ ֆունկցիաները թույլ են տալիս վերօգտագործել միմյանց աշխատանքը, և դա կախվածության շղթաներ է ստեղծում։`,
      `**Первая подпрограмма.** В 1949 году в Кембриджском университете компьютер **EDSAC** начал выполнять программы. Молодой исследователь **Дэвид Уилер** нашёл хитрый способ «прыгнуть» в кусок кода, выполнить его и вернуться туда, откуда ушёл: это были первые **подпрограммы**, которые мы теперь называем функциями. Вместе с коллегами он собрал библиотеку готовых подпрограмм для обычных задач, например извлечения квадратного корня. В 1951 году Уилер стал одним из первых в мире докторов наук по информатике.

**Одиннадцать строк, которые «сломали» интернет.** В марте 2016 года один программист удалил свои маленькие пакеты из **npm** — огромной онлайн-библиотеки кода на JavaScript. Один из них, left-pad, был функцией всего из одиннадцати строк, которая добавляла пробелы слева от строки. Тысячи проектов, в том числе инструменты очень крупных компаний, зависели от неё напрямую или через другие пакеты, и вдруг их стало невозможно собрать. Пакет восстановили за несколько часов, но эту историю рассказывают до сих пор: функции позволяют использовать чужую работу, а это создаёт цепочки зависимостей.`,
    ),
    ask(4, {
      en: ["def f(x, n=2): return x ** n. What does f(3) + f(2, 3) give?", ["13", "15", "12", "17"], "f(3) uses the default n = 2: 9. f(2, 3) is 2³ = 8. 9 + 8 = 17."],
      hy: ["def f(x, n=2): return x ** n։ Ի՞նչ է տալիս f(3) + f(2, 3)-ը։", ["13", "15", "12", "17"], "f(3)-ն օգտագործում է լռելյայն n = 2՝ 9։ f(2, 3)-ը 2³ = 8 է։ 9 + 8 = 17։"],
      ru: ["def f(x, n=2): return x ** n. Чему равно f(3) + f(2, 3)?", ["13", "15", "12", "17"], "f(3) берёт значение по умолчанию n = 2: 9. f(2, 3) = 2³ = 8. 9 + 8 = 17."],
    }),
  ],
  "search-and-sort": [
    "algo mode=search",
    "algo",
    closer(
      `**Twenty questions.** In the old game "Twenty Questions" one player thinks of something, and the others may ask only yes-or-no questions. Twenty questions sound few, but each good question halves the possibilities, just like binary search. After 20 halvings you can tell apart 2²⁰ = 1,048,576 things, more than a million. A clever first question is not "Is it a cat?" but "Is it alive?", because it splits the possibilities roughly in half.

**"Bubble sort would be the wrong way to go."** In 2007, during a visit to Google, the US presidential candidate **Barack Obama** was jokingly asked a classic interview question: what is the most efficient way to sort a million 32-bit numbers? Obama paused for a moment and replied, "I think the bubble sort would be the wrong way to go." The audience of engineers burst into applause. He was right: for a million numbers bubble sort needs about a million million comparisons, while merge sort needs about twenty million.`,
      `**Քսան հարց։** Հին «Քսան հարց» խաղում խաղացողներից մեկը մտապահում է ինչ-որ բան, իսկ մյուսները կարող են տալ միայն «այո» կամ «ոչ» պատասխանով հարցեր։ Քսան հարցը քիչ է թվում, բայց յուրաքանչյուր լավ հարց կիսում է հնարավորությունները, ճիշտ ինչպես երկուական որոնումը։ 20 կիսումից հետո կարելի է տարբերել 2²⁰ = 1 048 576 բան՝ միլիոնից ավելի։ Խելացի առաջին հարցը ոչ թե «Կատու՞ է», այլ «Կենդանի՞ է»-ն է, որովհետև այն հնարավորությունները բաժանում է մոտավորապես կիսով չափ։

**«Պղպջակային տեսակավորումը սխալ ճանապարհ կլիներ»։** 2007 թվականին Google ընկերություն այցի ժամանակ ԱՄՆ նախագահի թեկնածու **Բարաք Օբամային** կատակով տվեցին հարցազրույցի դասական հարցը․ ո՞րն է միլիոն 32-բիթանոց թվերը տեսակավորելու ամենաարդյունավետ եղանակը։ Օբաման մի պահ լռեց և պատասխանեց․ «Կարծում եմ՝ պղպջակային տեսակավորումը սխալ ճանապարհ կլիներ»։ Ինժեներներից կազմված դահլիճը ծափահարեց։ Նա իրավացի էր․ միլիոն թվի համար պղպջակային տեսակավորմանը պետք է մոտ միլիոն միլիոն համեմատում, իսկ միաձուլման տեսակավորմանը՝ մոտ քսան միլիոն։`,
      `**Двадцать вопросов.** В старой игре «Двадцать вопросов» один игрок загадывает что-нибудь, а остальные могут задавать только вопросы с ответом «да» или «нет». Двадцать вопросов кажутся немногими, но каждый хороший вопрос делит возможности пополам, совсем как двоичный поиск. После 20 делений можно различить 2²⁰ = 1 048 576 вещей — больше миллиона. Умный первый вопрос — не «Это кошка?», а «Это живое?», потому что он делит варианты примерно пополам.

**«Сортировка пузырьком была бы неверным путём».** В 2007 году во время визита в Google кандидату в президенты США **Бараку Обаме** в шутку задали классический вопрос с собеседований: как эффективнее всего отсортировать миллион 32-битных чисел? Обама на секунду задумался и ответил: «Думаю, сортировка пузырьком была бы неверным путём». Зал, полный инженеров, взорвался аплодисментами. Он был прав: для миллиона чисел пузырьку нужно около миллиона миллионов сравнений, а сортировке слиянием — около двадцати миллионов.`,
    ),
    ask(2, {
      en: ["At most how many steps does binary search need in a sorted list of 1,000 items?", ["1,000", "10", "500", "100"], "2¹⁰ = 1,024, so halving 1,000 items ten times leaves one item."],
      hy: ["Առավելագույնը քանի՞ քայլ է պետք երկուական որոնմանը 1000 տարրից բաղկացած տեսակավորված ցուցակում։", ["1000", "10", "500", "100"], "2¹⁰ = 1024, ուստի 1000 տարրը տասն անգամ կիսելուց հետո մնում է մեկ տարր։"],
      ru: ["Сколько шагов максимум нужно двоичному поиску в отсортированном списке из 1000 элементов?", ["1000", "10", "500", "100"], "2¹⁰ = 1024, так что после десяти делений пополам из 1000 элементов остаётся один."],
    }),
  ],
  "spreadsheets-advanced": [
    "sheet mode=copy",
    closer(
      `**Five rows that changed a debate.** In 2010 two famous economists published a study suggesting that countries with very large debts grow much more slowly. Politicians in several countries quoted it to defend cutting public spending. In 2013 a student, **Thomas Herndon**, tried to repeat the calculation for his homework and could not get the same result. When the authors shared their spreadsheet, he found that an AVERAGE formula covered the wrong range: five countries had been left out. The corrected numbers told a much less dramatic story.

**Genes renamed because of Excel.** Some human genes had names such as SEPT1 and MARCH1. Typed into a spreadsheet, they were automatically turned into dates: 1 September and 1 March. A 2016 study found such errors in about a fifth of the scientific papers it checked that included gene lists. In 2020 scientists gave up and officially renamed 27 genes, for example SEPT1 became SEPTIN1, so that spreadsheets would leave them alone.`,
      `**Հինգ տող, որ փոխեցին բանավեճը։** 2010 թվականին երկու հայտնի տնտեսագետներ հրապարակեցին մի ուսումնասիրություն, ըստ որի շատ մեծ պարտքեր ունեցող երկրները շատ ավելի դանդաղ են աճում։ Մի քանի երկրների քաղաքական գործիչներ մեջբերում էին այն՝ պետական ծախսերի կրճատումը պաշտպանելու համար։ 2013 թվականին ուսանող **Թոմաս Հերնդոնը** փորձեց կրկնել հաշվարկն իր տնային աշխատանքի համար և չկարողացավ ստանալ նույն արդյունքը։ Երբ հեղինակները տրամադրեցին իրենց աղյուսակը, նա պարզեց, որ AVERAGE բանաձևը սխալ միջակայք էր ընդգրկում․ հինգ երկիր դուրս էր մնացել։ Ուղղված թվերն ավելի քիչ դրամատիկ պատմություն էին պատմում։

**Գեներ, որոնք վերանվանվեցին Excel-ի պատճառով։** Մարդու որոշ գեներ ունեին SEPT1 և MARCH1 անուններ։ Աղյուսակում մուտքագրելիս դրանք ավտոմատ կերպով վերածվում էին ամսաթվերի՝ սեպտեմբերի 1 և մարտի 1։ 2016 թվականի մի ուսումնասիրություն նման սխալներ գտավ գեների ցուցակներ պարունակող ստուգված գիտական հոդվածների մոտ հինգերորդ մասում։ 2020 թվականին գիտնականները հանձնվեցին և պաշտոնապես վերանվանեցին 27 գեն, օրինակ՝ SEPT1-ը դարձավ SEPTIN1, որպեսզի աղյուսակները դրանց ձեռք չտան։`,
      `**Пять строк, которые изменили спор.** В 2010 году два известных экономиста опубликовали исследование, из которого следовало, что страны с очень большими долгами растут гораздо медленнее. Политики в нескольких странах цитировали его, защищая сокращение государственных расходов. В 2013 году студент **Томас Херндон** попытался повторить расчёт для домашнего задания и не смог получить тот же результат. Когда авторы показали свою таблицу, он обнаружил, что формула AVERAGE охватывала не тот диапазон: пять стран остались за бортом. Исправленные числа рассказывали гораздо менее драматичную историю.

**Гены, переименованные из-за Excel.** У некоторых генов человека были названия вроде SEPT1 и MARCH1. Если ввести их в таблицу, они автоматически превращались в даты: 1 сентября и 1 марта. Исследование 2016 года нашло такие ошибки примерно в пятой части проверенных научных статей со списками генов. В 2020 году учёные сдались и официально переименовали 27 генов, например SEPT1 стал SEPTIN1, чтобы таблицы оставили их в покое.`,
    ),
    ask(3, {
      en: ["The formula =A2*$B$1 is copied from C2 down to C3. What does C3 contain?", ["=A2*$B$1", "=A3*$B$2", "=A3*$B$1", "=B3*$C$1"], "The relative A2 slides one row down to A3, while the absolute $B$1 stays fixed."],
      hy: ["=A2*$B$1 բանաձևը C2-ից պատճենվում է ներքև՝ C3։ Ի՞նչ կա C3-ում։", ["=A2*$B$1", "=A3*$B$2", "=A3*$B$1", "=B3*$C$1"], "Հարաբերական A2-ը մեկ տող իջնում է՝ դառնալով A3, իսկ բացարձակ $B$1-ը մնում է անփոփոխ։"],
      ru: ["Формулу =A2*$B$1 скопировали из C2 вниз в C3. Что в C3?", ["=A2*$B$1", "=A3*$B$2", "=A3*$B$1", "=B3*$C$1"], "Относительная A2 сдвигается на строку вниз и становится A3, а абсолютная $B$1 остаётся на месте."],
    }),
  ],
  "html-basics": [
    "diagram tag",
    "diagram url",
    closer(
      `**The first website is still there.** In 1990–91 **Tim Berners-Lee** at CERN, near Geneva, wrote the first browser and the first web server, and put up the first website. It was plain text with blue links explaining what the World Wide Web was and how to make your own pages. The server ran on his NeXT computer, which carried a hand-written label: "This machine is a server. DO NOT POWER IT DOWN!!" The page has been restored and you can still open it at info.cern.ch.

**The tag that blinked.** In 1994 the browser Netscape added a tag called **blink**: any text inside it flashed on and off. Its inventor later said that it began as a joke over a drink, and that a colleague built it overnight. Web pages soon filled with flashing words, and people found it annoying and hard to read, especially people with some eye conditions. Browsers gradually dropped it, and today the blink tag does nothing at all: a lesson that HTML should describe what content is, not make it dance.`,
      `**Առաջին կայքը դեռ կա։** 1990–91 թվականներին Ժնևի մոտ գտնվող CERN-ում **Թիմ Բերներս-Լին** գրեց առաջին դիտարկիչը և առաջին վեբ սերվերը և ստեղծեց առաջին կայքը։ Դա պարզ տեքստ էր կապույտ հղումներով, որը բացատրում էր, թե ինչ է Համաշխարհային սարդոստայնը և ինչպես ստեղծել սեփական էջեր։ Սերվերն աշխատում էր նրա NeXT համակարգչի վրա, որի վրա ձեռագիր պիտակ կար․ «Այս մեքենան սերվեր է։ ՉԱՆՋԱՏԵ՛Լ!!»։ Էջը վերականգնվել է, և այն մինչ օրս կարելի է բացել info.cern.ch հասցեով։

**Պիտակը, որ թարթում էր։** 1994 թվականին Netscape դիտարկիչն ավելացրեց **blink** անունով պիտակ․ դրա ներսում գրված ցանկացած տեքստ թարթում էր։ Նրա հեղինակը հետագայում պատմում էր, որ այն սկսվել է որպես կատակ ընկերական զրույցի ժամանակ, և գործընկերներից մեկն այն ստեղծել է մեկ գիշերում։ Վեբ էջերը շուտով լցվեցին թարթող բառերով, և մարդիկ դա նյարդայնացնող և դժվար ընթեռնելի համարեցին, հատկապես աչքի որոշ հիվանդություններ ունեցողները։ Դիտարկիչներն աստիճանաբար հրաժարվեցին դրանից, և այսօր blink պիտակն ընդհանրապես ոչինչ չի անում․ դաս, որ HTML-ը պետք է նկարագրի, թե ինչ է բովանդակությունը, այլ ոչ թե այն պարեցնի։`,
      `**Первый сайт до сих пор жив.** В 1990–91 годах **Тим Бернерс-Ли** в ЦЕРН под Женевой написал первый браузер и первый веб-сервер и создал первый сайт. Это был простой текст с синими ссылками, объяснявший, что такое Всемирная паутина и как делать свои страницы. Сервер работал на его компьютере NeXT, на котором висела рукописная наклейка: «Эта машина — сервер. НЕ ВЫКЛЮЧАТЬ!!» Страницу восстановили, и её до сих пор можно открыть по адресу info.cern.ch.

**Тег, который мигал.** В 1994 году браузер Netscape добавил тег **blink**: любой текст внутри него мигал. Его изобретатель позже рассказывал, что всё началось как шутка в дружеской беседе, а один из коллег сделал его за ночь. Веб-страницы быстро заполнились мигающими словами, и люди сочли это раздражающим и трудночитаемым, особенно люди с некоторыми болезнями глаз. Браузеры постепенно отказались от него, и сегодня тег blink вообще ничего не делает: урок о том, что HTML должен описывать, что такое содержимое, а не заставлять его плясать.`,
    ),
    ask(2, {
      en: ["Which tag shows a picture, with a description for people who cannot see it?", ["<a href=\"ararat.jpg\">Ararat</a>", "<img src=\"ararat.jpg\" alt=\"Mount Ararat\">", "<p src=\"ararat.jpg\">", "<picture>Ararat</picture> with no file"], "img shows an image from src, and alt describes it for screen readers and when the image does not load."],
      hy: ["Ո՞ր պիտակն է ցույց տալիս նկար՝ նկարագրությամբ նրանց համար, ովքեր չեն կարող տեսնել։", ["<a href=\"ararat.jpg\">Արարատ</a>", "<img src=\"ararat.jpg\" alt=\"Արարատ լեռը\">", "<p src=\"ararat.jpg\">", "<picture>Արարատ</picture>՝ առանց ֆայլի"], "img-ը ցույց է տալիս src-ի նկարը, իսկ alt-ը նկարագրում է այն էկրանի ընթերցող ծրագրերի համար և երբ նկարը չի բեռնվում։"],
      ru: ["Какой тег показывает картинку с описанием для тех, кто её не видит?", ["<a href=\"ararat.jpg\">Арарат</a>", "<img src=\"ararat.jpg\" alt=\"Гора Арарат\">", "<p src=\"ararat.jpg\">", "<picture>Арарат</picture> без файла"], "img показывает изображение из src, а alt описывает его для программ экранного доступа и на случай, если картинка не загрузится."],
    }),
  ],
  "css-basics": [
    "diagram box",
    "bits mode=rgb",
    closer(
      `**Before CSS there was the font tag.** On the early web, every heading's colour and size had to be written inside the HTML itself, with tags such as font, over and over on every page. Changing the look of a site meant editing every page by hand. In October 1994 **Håkon Wium Lie**, a Norwegian working with Tim Berners-Lee at CERN, proposed "Cascading HTML Style Sheets": the content stays in HTML, and the look is described once in separate rules. The first official CSS standard appeared in 1996.

**One page, hundreds of designs.** In 2003 the Canadian designer **Dave Shea** launched the **CSS Zen Garden**. It offered a single HTML page that nobody was allowed to change. Designers from all over the world were invited to send only a new CSS file. Hundreds did, and the same text appeared as a Japanese garden, a newspaper, a comic book and a space station. The site convinced many web designers that structure and style really can be kept apart.`,
      `**Մինչև CSS-ը կար font պիտակը։** Վաղ համացանցում ամեն վերնագրի գույնն ու չափը պետք էր գրել հենց HTML-ի ներսում՝ font-ի նման պիտակներով, նորից ու նորից՝ յուրաքանչյուր էջում։ Կայքի տեսքը փոխելը նշանակում էր ձեռքով խմբագրել բոլոր էջերը։ 1994 թվականի հոկտեմբերին CERN-ում Թիմ Բերներս-Լիի հետ աշխատող նորվեգացի **Հոկոն Վիում Լին** առաջարկեց «HTML-ի կասկադային ոճաթերթեր»․ բովանդակությունը մնում է HTML-ում, իսկ տեսքը նկարագրվում է մեկ անգամ՝ առանձին կանոններով։ CSS-ի առաջին պաշտոնական ստանդարտը հայտնվեց 1996 թվականին։

**Մեկ էջ, հարյուրավոր դիզայններ։** 2003 թվականին կանադացի դիզայներ **Դեյվ Շին** գործարկեց **CSS Zen Garden**-ը («CSS-ի ձեն այգին»)։ Այն առաջարկում էր մեկ HTML էջ, որը ոչ ոքի չէր թույլատրվում փոխել։ Ամբողջ աշխարհի դիզայներներին հրավիրում էին ուղարկել միայն նոր CSS ֆայլ։ Հարյուրավորներն ուղարկեցին, և նույն տեքստը հայտնվեց ճապոնական այգու, թերթի, կոմիքսի և տիեզերակայանի տեսքով։ Կայքը շատ վեբ դիզայներների համոզեց, որ կառուցվածքը և ոճն իսկապես կարելի է իրարից առանձին պահել։`,
      `**До CSS был тег font.** В раннем вебе цвет и размер каждого заголовка приходилось писать прямо в HTML, тегами вроде font, снова и снова на каждой странице. Изменить оформление сайта значило править вручную каждую страницу. В октябре 1994 года норвежец **Хокон Виум Ли**, работавший с Тимом Бернерсом-Ли в ЦЕРН, предложил «каскадные таблицы стилей HTML»: содержание остаётся в HTML, а внешний вид описывается один раз отдельными правилами. Первый официальный стандарт CSS появился в 1996 году.

**Одна страница — сотни дизайнов.** В 2003 году канадский дизайнер **Дэйв Ши** запустил **CSS Zen Garden** («Дзен-сад CSS»). Там была одна HTML-страница, которую никому не разрешалось менять. Дизайнеров со всего мира приглашали прислать только новый файл CSS. Прислали сотни, и один и тот же текст предстал японским садом, газетой, комиксом и космической станцией. Сайт убедил многих веб-дизайнеров, что структуру и стиль действительно можно держать отдельно.`,
    ),
    ask(1, {
      en: ["Which selector styles every element with class=\"note\"?", [".note", "#note", "note", "*note"], "A dot selects a class; # selects the one element with that id; a plain name selects a tag."],
      hy: ["Ո՞ր ընտրիչն է ոճավորում class=\"note\" ունեցող բոլոր տարրերը։", [".note", "#note", "note", "*note"], "Կետն ընտրում է դաս (class), #-ը՝ այդ id-ն ունեցող միակ տարրը, իսկ պարզ անունը՝ պիտակ։"],
      ru: ["Какой селектор оформит все элементы с class=\"note\"?", [".note", "#note", "note", "*note"], "Точка выбирает класс; # — единственный элемент с таким id; просто имя — тег."],
    }),
  ],
};
