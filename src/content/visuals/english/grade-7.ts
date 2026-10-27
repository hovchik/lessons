import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade7: VisualMap[number] = {
  "city-vs-country": [
    "forms mode=compare cols=towncountry busy_streets:quiet_roads theatres_and_museums:fresh_air lots_of_jobs:big_gardens noise_and_traffic:few_buses",
    closer(
      `**Most people now live in cities.** In 2007, for the first time in history, more people in the world lived in towns and cities than in the countryside, according to the United Nations. In Armenia about two thirds of people live in towns, and roughly one in three lives in Yerevan alone.

**Country has two meanings.** **A country** is a nation (*Armenia is a small country*), but **the country** or **the countryside** is the land outside towns (*My grandparents live in the country*). The article tells you which: **the country** with no other words around it usually means fields and villages. Armenian separates them clearly, **երկիր** and **գյուղ** or **գյուղական վայր**, and Russian too, **страна** and **деревня** or **за городом**.`,
      `**Մարդկանց մեծ մասն այժմ ապրում է քաղաքներում։** ՄԱԿ-ի տվյալներով՝ 2007 թվականին պատմության մեջ առաջին անգամ աշխարհում քաղաքներում ապրող մարդիկ ավելի շատ էին, քան գյուղերում ապրողները։ Հայաստանում բնակչության մոտ երկու երրորդն ապրում է քաղաքներում, և մոտավորապես յուրաքանչյուր երրորդը՝ միայն Երևանում։

**Country-ն ունի երկու իմաստ։** **A country**-ն երկիր է (*Armenia is a small country*), իսկ **the country**-ն կամ **the countryside**-ը՝ քաղաքներից դուրս գտնվող վայրեր (*My grandparents live in the country*)։ Հոդն է ցույց տալիս, թե որն է․ **the country**-ն առանց այլ բառերի սովորաբար նշանակում է դաշտեր և գյուղեր։ Հայերենը դրանք հստակ տարբերում է՝ **երկիր** և **գյուղ** կամ **գյուղական վայր**, ռուսերենը նույնպես՝ **страна** և **деревня** կամ **за городом**։`,
      `**Большинство людей теперь живёт в городах.** По данным ООН, в 2007 году впервые в истории в городах жило больше людей, чем в сельской местности. В Армении около двух третей населения живёт в городах, и примерно каждый третий — в одном только Ереване.

**У country два значения.** **A country** — это страна (*Armenia is a small country*), а **the country** или **the countryside** — местность за городом (*My grandparents live in the country*). Подсказывает артикль: **the country** без других слов обычно значит поля и деревни. Армянский чётко разделяет их — **երկիր** и **գյուղ** или **գյուղական վայր**, русский тоже — **страна** и **деревня** или **за городом**.`,
    ),
    ask(2, {
      en: ["«They live in the country.» What does it mean?", ["They live in a nation.", "They live outside towns, among fields and villages.", "They live in the capital."], "The country = the countryside."],
      hy: ["«They live in the country.» Ի՞նչ է նշանակում։", ["They live in a nation.", "They live outside towns, among fields and villages.", "They live in the capital."], "The country = the countryside՝ գյուղական վայր։"],
      ru: ["«They live in the country.» Что это значит?", ["They live in a nation.", "They live outside towns, among fields and villages.", "They live in the capital."], "The country = the countryside — за городом."],
    }),
  ],
  "used-to": [
    "sentence mode=order keep=1 I used to be afraid of the dark .",
    closer(
      `**Only for the past.** **Used to** describes habits and states that were true in the past but are not true now: *I **used to** play with dolls* (but I don't any more). There is no present form: for present habits we say **usually**. In questions and negatives the **-d** disappears: *Did you **use to** live here?*, *I didn't **use to** like coffee.*

**Armenian has it built in.** The Armenian imperfect already carries this meaning: «Մանկության տարիներին գյուղում **էի ապրում**». Russian adds a word: «**Раньше** я жил в деревне». English needs **used to** or **would** for repeated actions: *Every summer we **would** go to the lake.* Be careful: **be used to** + **-ing** is a different phrase meaning "be accustomed to".`,
      `**Միայն անցյալի համար։** **Used to**-ն նկարագրում է սովորություններ և վիճակներ, որոնք ճիշտ էին անցյալում, բայց հիմա ճիշտ չեն՝ *I **used to** play with dolls* (բայց այլևս չեմ խաղում)։ Ներկա ձև չկա․ ներկա սովորությունների համար ասում ենք **usually**։ Հարցում և ժխտման մեջ **-d**-ն անհետանում է՝ *Did you **use to** live here?*, *I didn't **use to** like coffee.*

**Հայերենում այն ներկառուցված է։** Հայերենի անկատար անցյալն արդեն կրում է այս իմաստը՝ «Մանկության տարիներին գյուղում **էի ապրում**»։ Ռուսերենն ավելացնում է բառ՝ «**Раньше** я жил в деревне»։ Անգլերենին պետք է **used to** կամ, կրկնվող գործողությունների համար, **would**՝ *Every summer we **would** go to the lake.*։ Զգույշ եղիր՝ **be used to** + **-ing**-ը այլ արտահայտություն է և նշանակում է «սովոր լինել»։`,
      `**Только для прошлого.** **Used to** описывает привычки и состояния, которые были в прошлом, но сейчас уже нет: *I **used to** play with dolls* (а теперь не играю). Формы настоящего нет: для привычек в настоящем говорят **usually**. В вопросах и отрицаниях **-d** исчезает: *Did you **use to** live here?*, *I didn't **use to** like coffee.*

**В армянском это встроено.** Армянское прошедшее несовершенное уже несёт этот смысл: «Մանկության տարիներին գյուղում **էի ապրում**». Русский добавляет слово: «**Раньше** я жил в деревне». Английскому нужно **used to** или, для повторяющихся действий, **would**: *Every summer we **would** go to the lake.* Осторожно: **be used to** + **-ing** — другое выражение, оно значит «привыкнуть».`,
    ),
    ask(3, {
      en: ["Choose the correct question.", ["Did you used to live in Gyumri?", "Do you use to live in Gyumri?", "Did you use to live in Gyumri?"], "With did, the -d of used disappears: did you use to."],
      hy: ["Ընտրիր ճիշտ հարցը։", ["Did you used to live in Gyumri?", "Do you use to live in Gyumri?", "Did you use to live in Gyumri?"], "Did-ի հետ used-ի -d-ն անհետանում է՝ did you use to։"],
      ru: ["Выбери правильный вопрос.", ["Did you used to live in Gyumri?", "Do you use to live in Gyumri?", "Did you use to live in Gyumri?"], "С did -d в used исчезает: did you use to."],
    }),
  ],
  "relative-clauses": [
    "sentence The:attr girl:subj who_lives_next_door:attr is_my_cousin:pred .",
    closer(
      `**A clause that works like an adjective.** In the sentence above, *who lives next door* tells us **which** girl, exactly like an adjective would (*the tall girl*). That is why it is coloured as an attribute. Russian does the same with **который** (*девочка, **которая** живёт рядом*), and Armenian usually puts a participle **before** the noun: «**կողքի տանն ապրող** աղջիկը».

**That is the everyday choice.** In speech, **that** can replace both **who** and **which**: *the girl **that** lives next door*, *the book **that** I bought*. And if the relative word is the object, it can disappear completely: *the book I bought*. Notice that English, unlike Russian, puts **no comma** before a clause like this.`,
      `**Նախադասություն, որ աշխատում է ածականի պես։** Վերևի նախադասության մեջ *who lives next door*-ը մեզ ասում է, թե **որ** աղջիկը, ճիշտ ինչպես ածականը (*the tall girl*)։ Ահա թե ինչու այն ներկված է որպես որոշիչ։ Ռուսերենը նույնն անում է **который**-ով (*девочка, **которая** живёт рядом*), իսկ հայերենը սովորաբար դերբայը դնում է գոյականից **առաջ**՝ «**կողքի տանն ապրող** աղջիկը»։

**That-ը առօրյա ընտրությունն է։** Խոսքում **that**-ը կարող է փոխարինել և՛ **who**-ին, և՛ **which**-ին՝ *the girl **that** lives next door*, *the book **that** I bought*։ Իսկ եթե հարաբերական բառը խնդիր է, այն կարող է ընդհանրապես անհետանալ՝ *the book I bought*։ Նկատիր, որ անգլերենը, ի տարբերություն ռուսերենի, այսպիսի նախադասությունից առաջ **ստորակետ չի դնում**։`,
      `**Придаточное, которое работает как прилагательное.** В предложении выше *who lives next door* сообщает, **какая** девочка, — точно как прилагательное (*the tall girl*). Поэтому оно раскрашено как определение. Русский делает то же с **который** (*девочка, **которая** живёт рядом*), а армянский обычно ставит причастие **перед** существительным: «**կողքի տանն ապրող** աղջիկը».

**That — повседневный выбор.** В речи **that** может заменить и **who**, и **which**: *the girl **that** lives next door*, *the book **that** I bought*. А если относительное слово — дополнение, его можно вообще убрать: *the book I bought*. Заметь: в английском, в отличие от русского, перед таким придаточным **запятая не ставится**.`,
    ),
    ask(1, {
      en: ["Which word can you leave out? «This is the film that I saw.»", ["that", "film", "saw"], "That is the object of saw, so it can disappear: the film I saw."],
      hy: ["Ո՞ր բառը կարելի է բաց թողնել։ «This is the film that I saw.»", ["that", "film", "saw"], "That-ը saw-ի խնդիրն է, ուստի կարող է անհետանալ՝ the film I saw։"],
      ru: ["Какое слово можно опустить? «This is the film that I saw.»", ["that", "film", "saw"], "That — дополнение к saw, его можно убрать: the film I saw."],
    }),
  ],
  "relative-clauses-practice-7": [
    "forms mode=compare cols=relwho the_man_who_called:the_book_which_I_read:the_town_where_I_was_born a_friend_who_helps:a_phone_which_works:a_café_where_we_meet",
    closer(
      `**Whose is the fourth word.** Besides **who**, **which** and **where**, English has **whose** for possession: *the boy **whose** dog barks all night*. It works for people and things: *a city **whose** streets are full of trees*. Russian uses **чей** or **у которого**, Armenian **որի** or **ում**.

**Where or which?** **Where** replaces "in/at that place": *the town **where** I was born* = *the town I was born **in***. If the verb needs an object, use **which**: *the town **which** I visited* (visit what? the town). A quick test: can you add **there** to the clause? *I was born there* works, so **where** is right.`,
      `**Whose-ը չորրորդ բառն է։** **Who**-ից, **which**-ից և **where**-ից բացի անգլերենն ունի **whose**՝ պատկանելության համար՝ *the boy **whose** dog barks all night*։ Այն գործածվում է և՛ մարդկանց, և՛ իրերի համար՝ *a city **whose** streets are full of trees*։ Ռուսերենը գործածում է **чей** կամ **у которого**, հայերենը՝ **որի** կամ **ում**։

**Where, թե՞ which։** **Where**-ը փոխարինում է «այն վայրում»-ին՝ *the town **where** I was born* = *the town I was born **in***։ Եթե բային խնդիր է պետք, գործածիր **which**՝ *the town **which** I visited* (այցելեցի ի՞նչը․ քաղաքը)։ Արագ ստուգում՝ կարո՞ղ ես նախադասությանն ավելացնել **there**։ *I was born there*-ը ճիշտ է, ուրեմն **where**-ն է ճիշտ։`,
      `**Whose — четвёртое слово.** Кроме **who**, **which** и **where**, в английском есть **whose** для принадлежности: *the boy **whose** dog barks all night*. Оно подходит и для людей, и для вещей: *a city **whose** streets are full of trees*. Русский использует **чей** или **у которого**, армянский — **որի** или **ում**.

**Where или which?** **Where** заменяет «в том месте»: *the town **where** I was born* = *the town I was born **in***. Если глаголу нужно дополнение, бери **which**: *the town **which** I visited* (посетил что? город). Быстрая проверка: можно ли добавить к придаточному **there**? *I was born there* подходит — значит, **where** верно.`,
    ),
    ask(2, {
      en: ["Complete: «That's the girl ___ brother plays in our team.»", ["who", "whose", "which"], "Her brother = possession: whose."],
      hy: ["Լրացրու՝ «That's the girl ___ brother plays in our team.»", ["who", "whose", "which"], "Նրա եղբայրը՝ պատկանելություն՝ whose։"],
      ru: ["Дополни: «That's the girl ___ brother plays in our team.»", ["who", "whose", "which"], "Её брат — принадлежность: whose."],
    }),
  ],
  "describing-places-7": [
    "sentence mode=order We stayed in a lovely little old house .",
    closer(
      `**Adjectives queue in a fixed order.** Native speakers never say *an old little lovely house*, even though nobody taught them the rule. The order is: **opinion** (lovely), **size** (little), **age** (old), **shape**, **colour**, **origin**, **material**, **purpose**, then the noun. In 2016 a tweet quoting this rule from a book by Mark Forsyth went viral, because millions of English speakers realised they followed it without knowing.

**Armenian and Russian are freer.** «Սիրուն փոքրիկ հին տուն» and «милый маленький старый дом» follow a similar order, but you can change it for emphasis without sounding wrong. In English, the wrong order sounds strange at once. In practice, rarely use more than two or three adjectives in a row.`,
      `**Ածականները կանգնում են հաստատուն հերթով։** Անգլիախոսներն երբեք չեն ասում *an old little lovely house*, թեև ոչ ոք նրանց կանոնը չի սովորեցրել։ Կարգն է՝ **կարծիք** (lovely), **չափ** (little), **տարիք** (old), **ձև**, **գույն**, **ծագում**, **նյութ**, **նպատակ**, հետո գոյականը։ 2016 թվականին Մարկ Ֆորսայթի գրքից այս կանոնը մեջբերող թվիթն արագ տարածվեց, որովհետև միլիոնավոր անգլիախոսներ հասկացան, որ հետևում են դրան՝ առանց իմանալու։

**Հայերենն ու ռուսերենն ավելի ազատ են։** «Սիրուն փոքրիկ հին տուն»-ը և «милый маленький старый дом»-ը հետևում են նման կարգի, բայց շեշտելու համար կարող ես փոխել այն՝ առանց սխալ հնչելու։ Անգլերենում սխալ կարգն անմիջապես տարօրինակ է հնչում։ Գործնականում հազվադեպ գործածիր իրար հետևից երկու-երեքից ավելի ածական։`,
      `**Прилагательные стоят в строгой очереди.** Носители никогда не скажут *an old little lovely house*, хотя правилу их никто не учил. Порядок такой: **мнение** (lovely), **размер** (little), **возраст** (old), **форма**, **цвет**, **происхождение**, **материал**, **назначение**, потом существительное. В 2016 году твит с этим правилом из книги Марка Форсайта разлетелся по интернету: миллионы англоговорящих поняли, что следуют ему, сами того не зная.

**Армянский и русский свободнее.** «Սիրուն փոքրիկ հին տուն» и «милый маленький старый дом» идут в похожем порядке, но его можно поменять ради выразительности, и это не будет ошибкой. В английском неправильный порядок сразу режет слух. На практике редко ставь больше двух-трёх прилагательных подряд.`,
    ),
    ask(3, {
      en: ["Choose the natural order.", ["a wooden big old table", "an old big wooden table", "a big old wooden table"], "Size, then age, then material: big old wooden."],
      hy: ["Ընտրիր բնական կարգը։", ["a wooden big old table", "an old big wooden table", "a big old wooden table"], "Չափ, հետո տարիք, հետո նյութ՝ big old wooden։"],
      ru: ["Выбери естественный порядок.", ["a wooden big old table", "an old big wooden table", "a big old wooden table"], "Размер, потом возраст, потом материал: big old wooden."],
    }),
  ],
  "teen-life-around-world": [
    "sentence mode=order Unlike my cousin in London , I walk to school .",
    closer(
      `**The first of September.** In Armenia and Russia the school year starts on **1 September**, the Day of Knowledge, with flowers for the teachers and a ceremony for the first-graders. British schools usually start in the first week of September, but there is no fixed national date. In Japan the school year begins in **April**, with the cherry blossom, and in Australia in late **January** or early **February**, at the end of their summer.

**Words for comparing.** **While** and **whereas** join two contrasting facts in one sentence: *Lessons last forty minutes, **whereas** in Britain they can last an hour.* **Unlike** is followed by a noun, not a clause: *Unlike my cousin, I walk to school.* Armenian uses **մինչդեռ** and **ի տարբերություն**, Russian **тогда как** and **в отличие от**.`,
      `**Սեպտեմբերի մեկը։** Հայաստանում և Ռուսաստանում ուսումնական տարին սկսվում է **սեպտեմբերի 1-ին**՝ Գիտելիքի օրը, ծաղիկներով ուսուցիչների համար և արարողությամբ առաջին դասարանցիների համար։ Բրիտանական դպրոցները սովորաբար սկսվում են սեպտեմբերի առաջին շաբաթում, բայց հաստատուն ազգային ամսաթիվ չկա։ Ճապոնիայում ուսումնական տարին սկսվում է **ապրիլին**՝ բալենիների ծաղկման հետ, իսկ Ավստրալիայում՝ **հունվարի** վերջին կամ **փետրվարի** սկզբին՝ նրանց ամառվա վերջում։

**Համեմատելու բառեր։** **While** և **whereas** բառերը մեկ նախադասության մեջ միացնում են երկու հակադիր փաստ՝ *Lessons last forty minutes, **whereas** in Britain they can last an hour.*։ **Unlike**-ից հետո գալիս է գոյական, ոչ թե նախադասություն՝ *Unlike my cousin, I walk to school.*։ Հայերենը գործածում է **մինչդեռ** և **ի տարբերություն**, ռուսերենը՝ **тогда как** և **в отличие от**։`,
      `**Первое сентября.** В Армении и России учебный год начинается **1 сентября**, в День знаний, с цветами для учителей и линейкой для первоклассников. Британские школы обычно начинают в первую неделю сентября, но единой даты по стране нет. В Японии учебный год начинается в **апреле**, когда цветёт сакура, а в Австралии — в конце **января** или начале **февраля**, в конце их лета.

**Слова для сравнения.** **While** и **whereas** соединяют два противоположных факта в одном предложении: *Lessons last forty minutes, **whereas** in Britain they can last an hour.* После **unlike** идёт существительное, а не придаточное: *Unlike my cousin, I walk to school.* Армянский использует **մինչդեռ** и **ի տարբերություն**, русский — **тогда как** и **в отличие от**.`,
    ),
    ask(1, {
      en: ["Complete: «___ British pupils, we don't wear a tie.»", ["Unlike", "Whereas", "While"], "Before a noun: unlike."],
      hy: ["Լրացրու՝ «___ British pupils, we don't wear a tie.»", ["Unlike", "Whereas", "While"], "Գոյականից առաջ՝ unlike։"],
      ru: ["Дополни: «___ British pupils, we don't wear a tie.»", ["Unlike", "Whereas", "While"], "Перед существительным: unlike."],
    }),
  ],
  "gadgets-internet": [
    "forms mode=compare cols=named Bluetooth:the_Danish_king_Harald_Bluetooth Google:googol,_1_followed_by_100_zeros Wi-Fi:a_made-up_name_that_rhymes_with_hi-fi spam:a_comedy_sketch_about_tinned_meat",
    closer(
      `**Where tech words come from.** **Bluetooth** is named after Harald Bluetooth, a 10th-century king who united Denmark and Norway: the technology was meant to unite devices. **Google** is a playful spelling of **googol**, the number 1 followed by a hundred zeros. **Wi-Fi** does not stand for anything: it was invented by a branding company to sound like *hi-fi*. And junk email is called **spam** after a 1970 Monty Python sketch in which the word is repeated again and again.

**English rules the internet, but not alone.** Many computer words have entered Armenian and Russian almost unchanged: **կոմպյուտեր** / **компьютер**, **ինտերնետ** / **интернет**, **սմարթֆոն** / **смартфон**. Some languages invent their own: Armenian also says **համակարգիչ** for computer, built from native roots meaning "system" and "maker".`,
      `**Որտեղից են գալիս տեխնոլոգիական բառերը։** **Bluetooth**-ը անվանվել է 10-րդ դարի արքա Հարալդ Կապտատամի (Bluetooth) անունով, որը միավորեց Դանիան և Նորվեգիան․ տեխնոլոգիան ստեղծվել էր սարքերը միավորելու համար։ **Google**-ը **googol** բառի խաղային գրությունն է․ դա 1-ն է՝ հարյուր զրոյով։ **Wi-Fi**-ը ոչնչի կրճատում չէ․ այն հորինել է բրենդային ընկերությունը, որ նման լինի *hi-fi*-ին։ Իսկ անպետք նամակները կոչվում են **spam**՝ Մոնթի Փայթոնի 1970 թվականի ծաղրանկարի անունով, որտեղ այդ բառը կրկնվում է նորից ու նորից։

**Անգլերենը տիրում է համացանցին, բայց ոչ միայնակ։** Համակարգչային շատ բառեր հայերեն և ռուսերեն են անցել գրեթե անփոփոխ՝ **կոմպյուտեր** / **компьютер**, **ինտերնետ** / **интернет**, **սմարթֆոն** / **смартфон**։ Որոշ լեզուներ հորինում են իրենց բառերը․ հայերենն ասում է նաև **համակարգիչ**՝ կազմված «համակարգ» և «-իչ» բնիկ արմատներից։`,
      `**Откуда берутся технические слова.** **Bluetooth** назван в честь Харальда Синезубого (Bluetooth), короля X века, объединившего Данию и Норвегию: технология должна была объединять устройства. **Google** — шутливое написание слова **googol**, числа 1 со ста нулями. **Wi-Fi** ничего не сокращает: название придумала брендинговая компания, чтобы оно звучало как *hi-fi*. А мусорные письма называют **spam** по скетчу Монти Пайтона 1970 года, где это слово повторяют снова и снова.

**Английский правит интернетом, но не один.** Многие компьютерные слова вошли в армянский и русский почти без изменений: **կոմպյուտեր** / **компьютер**, **ինտերնետ** / **интернет**, **սմարթֆոն** / **смартфон**. Некоторые языки придумывают свои: армянский говорит ещё **համակարգիչ** — от родных корней «система» и суффикса «-тель».`,
    ),
    ask(2, {
      en: ["What is the word Google based on?", ["a search engine in Danish", "googol, a very large number", "a Monty Python sketch"], "Googol is 1 followed by 100 zeros."],
      hy: ["Ի՞նչ բառից է Google-ը։", ["a search engine in Danish", "googol, a very large number", "a Monty Python sketch"], "Googol-ը 1-ն է՝ 100 զրոյով։"],
      ru: ["От какого слова произошло Google?", ["a search engine in Danish", "googol, a very large number", "a Monty Python sketch"], "Googol — это 1 со 100 нулями."],
    }),
  ],
  "zero-conditional": [
    "sentence mode=order If you heat ice , it melts .",
    closer(
      `**The conditional of science.** The zero conditional describes things that are always true: *If you heat ice, it melts.* *If you mix blue and yellow, you get green.* Both halves are in the present simple, because the result follows every time. You can often replace **if** with **when** and the meaning stays the same.

**Water does not always boil at 100 °C.** *If you heat water to 100 °C, it boils* is true only at sea level. Higher up, the air pressure is lower and water boils sooner: in Yerevan, about 1,000 metres high, it boils at about 96–97 °C, and on the top of Everest at about 70 °C. That is why climbers find it hard to cook pasta in the mountains.`,
      `**Գիտության պայմանականը։** Zero conditional-ը նկարագրում է այն, ինչ միշտ ճիշտ է՝ *If you heat ice, it melts.* *If you mix blue and yellow, you get green.*։ Երկու մասն էլ present simple-ով են, որովհետև արդյունքն ամեն անգամ նույնն է։ Հաճախ **if**-ը կարելի է փոխարինել **when**-ով, և իմաստը չի փոխվում։

**Ջուրը միշտ չէ, որ եռում է 100 °C-ում։** *If you heat water to 100 °C, it boils*-ը ճիշտ է միայն ծովի մակարդակում։ Ավելի բարձր՝ օդի ճնշումն ավելի ցածր է, և ջուրն ավելի շուտ է եռում․ մոտ 1000 մետր բարձրության վրա գտնվող Երևանում այն եռում է մոտ 96–97 °C-ում, իսկ Էվերեստի գագաթին՝ մոտ 70 °C-ում։ Ահա թե ինչու լեռնագնացների համար դժվար է լեռներում մակարոն եփել։`,
      `**Условное предложение науки.** Zero conditional описывает то, что верно всегда: *If you heat ice, it melts.* *If you mix blue and yellow, you get green.* Обе части в present simple, потому что результат наступает каждый раз. Часто **if** можно заменить на **when**, и смысл не изменится.

**Вода не всегда кипит при 100 °C.** *If you heat water to 100 °C, it boils* верно только на уровне моря. Выше давление воздуха ниже, и вода закипает раньше: в Ереване, на высоте около 1000 метров, — примерно при 96–97 °C, а на вершине Эвереста — около 70 °C. Поэтому альпинистам трудно сварить макароны в горах.`,
    ),
    ask(1, {
      en: ["Complete: «If you ___ water, it freezes.»", ["cool", "will cool", "cooled"], "Always true: present simple in both halves."],
      hy: ["Լրացրու՝ «If you ___ water, it freezes.»", ["cool", "will cool", "cooled"], "Միշտ ճիշտ է՝ present simple երկու մասում։"],
      ru: ["Дополни: «If you ___ water, it freezes.»", ["cool", "will cool", "cooled"], "Верно всегда: present simple в обеих частях."],
    }),
  ],
  "first-conditional": [
    "sentence mode=order If it rains tomorrow , we will stay at home .",
    closer(
      `**No will after if.** English puts the future only in the result: *If it **rains** tomorrow, we **will** stay at home.* Russian puts it in both halves: «Если завтра **пойдёт** дождь, мы **останемся** дома», and Armenian uses the subjunctive after **եթե**: «Եթե վաղն անձրև **գա**, տանը **կմնանք**». That is why *If it will rain* is such a common mistake.

**Superstitions love the first conditional.** *If you break a mirror, you'll have seven years of bad luck.* *If a black cat crosses your path, something bad will happen.* Other countries have their own: in Russia, whistling indoors is said to make you lose money. You can swap the halves too: *We'll stay at home if it rains.* With **if** in the middle, no comma is needed.`,
      `**If-ից հետո will չկա։** Անգլերենն ապառնին դնում է միայն արդյունքի մասում՝ *If it **rains** tomorrow, we **will** stay at home.*։ Ռուսերենը դնում է երկու մասում էլ՝ «Если завтра **пойдёт** дождь, мы **останемся** дома», իսկ հայերենը **եթե**-ից հետո գործածում է ըղձական՝ «Եթե վաղն անձրև **գա**, տանը **կմնանք**»։ Ահա թե ինչու *If it will rain*-ը այդքան տարածված սխալ է։

**Սնահավատությունները սիրում են first conditional-ը։** *If you break a mirror, you'll have seven years of bad luck.* *If a black cat crosses your path, something bad will happen.*։ Այլ երկրներն ունեն իրենցը․ Ռուսաստանում ասում են, որ տանը սուլելը փող կորցնել է նշանակում։ Մասերը կարելի է նաև տեղերով փոխել՝ *We'll stay at home if it rains.*։ Երբ **if**-ը մեջտեղում է, ստորակետ պետք չէ։`,
      `**После if нет will.** Английский ставит будущее только в результат: *If it **rains** tomorrow, we **will** stay at home.* Русский ставит его в обе части: «Если завтра **пойдёт** дождь, мы **останемся** дома», а армянский после **եթե** использует сослагательное: «Եթե վաղն անձրև **գա**, տանը **կմնանք**». Вот почему *If it will rain* — такая частая ошибка.

**Приметы любят first conditional.** *If you break a mirror, you'll have seven years of bad luck.* *If a black cat crosses your path, something bad will happen.* У других стран свои приметы: в России говорят, что свистеть в доме — к безденежью. Части можно поменять местами: *We'll stay at home if it rains.* Когда **if** в середине, запятая не нужна.`,
    ),
    ask(2, {
      en: ["Choose the correct sentence.", ["If you will study, you will pass.", "If you study, you will pass.", "If you study, you pass tomorrow."], "Present after if, will in the result."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["If you will study, you will pass.", "If you study, you will pass.", "If you study, you pass tomorrow."], "If-ից հետո ներկա, արդյունքում՝ will։"],
      ru: ["Выбери правильное предложение.", ["If you will study, you will pass.", "If you study, you will pass.", "If you study, you pass tomorrow."], "После if — настоящее, в результате — will."],
    }),
  ],
  "present-perfect-continuous": [
    "tense name=present-perfect-continuous aspects=perfect,perfect-continuous times=present",
    closer(
      `**Still going on, or just stopped.** The present perfect continuous shows an action that started in the past and is still happening: *I've **been learning** English for five years.* It can also explain a visible result of a recent activity: *Your eyes are red. Have you **been crying**?* Armenian and Russian use the present tense here: «Հինգ տարի է՝ անգլերեն **եմ սովորում**», «Я **учу** английский пять лет».

**Activity or result?** Compare *I've **been reading** your book* (the activity, maybe not finished) with *I've **read** your book* (finished, result). Questions with **How long…?** prefer the continuous; questions with **How many…?** prefer the simple: *How many pages have you read?* Switch the two forms on the line above.`,
      `**Դեռ շարունակվում է կամ նոր է ավարտվել։** Present perfect continuous-ը ցույց է տալիս գործողություն, որ սկսվել է անցյալում և դեռ շարունակվում է՝ *I've **been learning** English for five years.*։ Այն կարող է նաև բացատրել վերջերս կատարված գործողության տեսանելի արդյունքը՝ *Your eyes are red. Have you **been crying**?*։ Հայերենն ու ռուսերենն այստեղ ներկա են գործածում՝ «Հինգ տարի է՝ անգլերեն **եմ սովորում**», «Я **учу** английский пять лет»։

**Գործընթա՞ց, թե՞ արդյունք։** Համեմատիր *I've **been reading** your book* (գործընթացը, գուցե դեռ չավարտված) և *I've **read** your book* (ավարտված է, արդյունք)։ **How long…?** հարցերը նախընտրում են continuous, **How many…?** հարցերը՝ simple՝ *How many pages have you read?*։ Վերևի գծում փոխիր երկու ձևերը։`,
      `**Всё ещё длится или только что кончилось.** Present perfect continuous показывает действие, которое началось в прошлом и всё ещё идёт: *I've **been learning** English for five years.* Ещё он объясняет видимый результат недавнего занятия: *Your eyes are red. Have you **been crying**?* Армянский и русский используют здесь настоящее время: «Հինգ տարի է՝ անգլերեն **եմ սովորում**», «Я **учу** английский пять лет».

**Процесс или результат?** Сравни *I've **been reading** your book* (процесс, возможно, не закончен) и *I've **read** your book* (закончено, результат). Вопросы **How long…?** предпочитают continuous, вопросы **How many…?** — simple: *How many pages have you read?* Переключай две формы на линии выше.`,
    ),
    ask(3, {
      en: ["Complete: «How long ___ for the bus?»", ["do you wait", "did you wait", "have you been waiting"], "Started in the past, still going on: have you been waiting."],
      hy: ["Լրացրու՝ «How long ___ for the bus?»", ["do you wait", "did you wait", "have you been waiting"], "Սկսվել է անցյալում և դեռ շարունակվում է՝ have you been waiting։"],
      ru: ["Дополни: «How long ___ for the bus?»", ["do you wait", "did you wait", "have you been waiting"], "Началось в прошлом и длится: have you been waiting."],
    }),
  ],
  "online-safety": [
    "forms mode=compare cols=dodont use_a_long_password:share_your_password_with_friends check_who_sent_a_link:click_on_strange_links tell_an_adult_about_bullying:post_your_home_address",
    closer(
      `**The world's worst password.** Every year security companies publish lists of the most common passwords, and **123456** is almost always at the top, followed by words like **password** and **qwerty**. A computer can guess them in less than a second. A long phrase of four random words, like *purple-tiger-runs-quietly*, is much harder to crack and easier to remember.

**Phishing is fishing.** A fake email or message that tries to steal your password is called **phishing**: the criminal is "fishing" for your data, and the **ph** spelling comes from early hacker slang. Every February, schools in about 180 countries mark **Safer Internet Day**, which began in Europe in 2004. Read the table: each **Do** has a matching **Don't**.`,
      `**Աշխարհի ամենավատ գաղտնաբառը։** Ամեն տարի անվտանգության ընկերությունները հրապարակում են ամենատարածված գաղտնաբառերի ցուցակներ, և **123456**-ը գրեթե միշտ առաջինն է, որին հետևում են **password** և **qwerty** բառերը։ Համակարգիչը կարող է դրանք գուշակել մեկ վայրկյանից պակաս ժամանակում։ Չորս պատահական բառից կազմված երկար արտահայտությունը, օրինակ՝ *purple-tiger-runs-quietly*, շատ ավելի դժվար է կոտրել և ավելի հեշտ է հիշել։

**Phishing-ը ձկնորսություն է։** Կեղծ նամակը կամ հաղորդագրությունը, որը փորձում է գողանալ գաղտնաբառդ, կոչվում է **phishing**․ հանցագործը «ձուկ է որսում»՝ քո տվյալները, իսկ **ph** գրությունն եկել է վաղ շրջանի հաքերային ժարգոնից։ Ամեն փետրվար մոտ 180 երկրների դպրոցները նշում են **Անվտանգ համացանցի օրը**, որը սկսվել է Եվրոպայում 2004 թվականին։ Կարդա աղյուսակը՝ ամեն **Արա**-ին համապատասխանում է մի **Մի արա**։`,
      `**Худший пароль в мире.** Каждый год компании по безопасности публикуют списки самых частых паролей, и **123456** почти всегда на первом месте, а за ним — слова вроде **password** и **qwerty**. Компьютер угадывает их меньше чем за секунду. Длинную фразу из четырёх случайных слов, например *purple-tiger-runs-quietly*, взломать гораздо труднее, а запомнить легче.

**Phishing — это рыбалка.** Поддельное письмо или сообщение, которое пытается украсть пароль, называется **phishing**: преступник «ловит рыбку» — твои данные, а написание через **ph** пришло из раннего хакерского сленга. Каждый февраль школы примерно в 180 странах отмечают **День безопасного интернета**, который начался в Европе в 2004 году. Прочитай таблицу: каждому **Делай** соответствует своё **Не делай**.`,
    ),
    ask(3, {
      en: ["Which password is the safest?", ["123456", "anna2012", "purple-tiger-runs-quietly"], "Long phrases of random words are hardest to guess."],
      hy: ["Ո՞ր գաղտնաբառն է ամենաապահովը։", ["123456", "anna2012", "purple-tiger-runs-quietly"], "Պատահական բառերից կազմված երկար արտահայտություններն ամենադժվարն են գուշակել։"],
      ru: ["Какой пароль самый надёжный?", ["123456", "anna2012", "purple-tiger-runs-quietly"], "Длинные фразы из случайных слов труднее всего угадать."],
    }),
  ],
  "mass-media-7": [
    "forms mode=compare cols=factop The_match_ended_two-one:It_was_the_best_match_of_the_year The_school_opened_in_1964:The_building_looks_ugly Yerevan_has_a_metro:The_metro_is_too_small",
    closer(
      `**The first newspapers.** The first regular daily newspaper in English, the *Daily Courant*, appeared in London in 1702. The first Armenian periodical, **Azdarar** ("The Herald"), was published far from Armenia, in Madras, India, in 1794, by the Armenian community living there. Russia's first printed newspaper, *Vedomosti*, was started by Peter the Great in 1702–1703.

**Spot the opinion.** A fact can be checked; an opinion belongs to someone. Opinion words give it away: *I think*, *probably*, *the best*, *terrible*, *should*. Headlines often mix the two to catch your eye. Hide the right-hand column of the table above, read only the facts, and notice how much less exciting they sound.`,
      `**Առաջին թերթերը։** Անգլերեն առաջին կանոնավոր օրաթերթը՝ *Daily Courant*-ը, լույս տեսավ Լոնդոնում 1702 թվականին։ Հայերեն առաջին պարբերականը՝ **«Ազդարար»**-ը, հրատարակվեց Հայաստանից հեռու՝ Հնդկաստանի Մադրաս քաղաքում, 1794 թվականին, այնտեղ ապրող հայ համայնքի կողմից։ Ռուսաստանի առաջին տպագիր թերթը՝ *«Ведомости»*-ն, հիմնադրել է Պետրոս Մեծը 1702–1703 թվականներին։

**Գտիր կարծիքը։** Փաստը կարելի է ստուգել, կարծիքը պատկանում է մեկին։ Կարծիքը մատնում են բառերը՝ *I think*, *probably*, *the best*, *terrible*, *should*։ Վերնագրերը հաճախ խառնում են երկուսը՝ ուշադրություն գրավելու համար։ Թաքցրու վերևի աղյուսակի աջ սյունակը, կարդա միայն փաստերը և նկատիր, թե որքան ավելի քիչ հետաքրքիր են դրանք հնչում։`,
      `**Первые газеты.** Первая регулярная ежедневная газета на английском, *Daily Courant*, вышла в Лондоне в 1702 году. Первое армянское периодическое издание, **«Аздарар»** («Вестник»), выпустили далеко от Армении — в Мадрасе, в Индии, в 1794 году, силами жившей там армянской общины. Первую в России печатную газету, *«Ведомости»*, основал Пётр Великий в 1702–1703 годах.

**Найди мнение.** Факт можно проверить, мнение принадлежит кому-то. Мнение выдают слова: *I think*, *probably*, *the best*, *terrible*, *should*. Заголовки часто смешивают одно с другим, чтобы привлечь внимание. Спрячь правый столбец таблицы выше, прочитай только факты и заметь, насколько скучнее они звучат.`,
    ),
    ask(2, {
      en: ["Which sentence is an opinion?", ["The film lasts two hours.", "The film is too long.", "The film came out in 2024."], "Too long is what someone thinks, it can't be checked."],
      hy: ["Ո՞ր նախադասությունն է կարծիք։", ["The film lasts two hours.", "The film is too long.", "The film came out in 2024."], "Too long-ը ինչ-որ մեկի կարծիքն է, այն չի կարելի ստուգել։"],
      ru: ["Какое предложение — мнение?", ["The film lasts two hours.", "The film is too long.", "The film came out in 2024."], "Too long — чьё-то мнение, его нельзя проверить."],
    }),
  ],
  "sports-vocabulary": [
    "forms mode=compare cols=playgodo football:swimming:judo tennis:skiing:karate chess:running:gymnastics",
    closer(
      `**Soccer is a British word.** It sounds American, but **soccer** was invented by students at Oxford in the 1880s as a short form of **association football**, the official name of the game; rugby was "rugger". Americans kept **soccer** because their own **football** is a different game. In Britain today most people simply say **football**.

**Play, go or do?** **Play** goes with games you play against someone, usually with a ball: *play football*, *play chess*. **Go** goes with activities ending in **-ing**: *go swimming*, *go skiing*. **Do** goes with the rest, especially martial arts and gymnastics: *do judo*, *do karate*. Armenian and Russian use one verb, **խաղալ** / **играть**, or say **զբաղվել** / **заниматься** for most sports.`,
      `**Soccer-ը բրիտանական բառ է։** Այն ամերիկյան է հնչում, բայց **soccer**-ը 1880-ական թվականներին հորինել են Օքսֆորդի ուսանողները՝ որպես **association football**-ի՝ խաղի պաշտոնական անվան կրճատում․ ռեգբին կոչվում էր «rugger»։ Ամերիկացիները պահեցին **soccer**-ը, որովհետև նրանց սեփական **football**-ը այլ խաղ է։ Այսօր Բրիտանիայում մարդկանց մեծ մասը պարզապես ասում է **football**։

**Play, go, թե՞ do։** **Play**-ը գործածվում է այն խաղերի հետ, որոնք խաղում ես մեկի դեմ, սովորաբար գնդակով՝ *play football*, *play chess*։ **Go**-ն՝ **-ing**-ով ավարտվող զբաղմունքների հետ՝ *go swimming*, *go skiing*։ **Do**-ն՝ մնացածի, հատկապես մարտարվեստների և մարմնամարզության հետ՝ *do judo*, *do karate*։ Հայերենն ու ռուսերենը գործածում են մեկ բայ՝ **խաղալ** / **играть**, կամ մարզաձևերի մեծ մասի համար ասում են **զբաղվել** / **заниматься**։`,
      `**Soccer — британское слово.** Оно звучит по-американски, но **soccer** придумали студенты Оксфорда в 1880-х как сокращение от **association football** — официального названия игры; регби называли «rugger». Американцы сохранили **soccer**, потому что их собственный **football** — другая игра. В Британии сегодня большинство говорит просто **football**.

**Play, go или do?** **Play** — с играми против кого-то, обычно с мячом: *play football*, *play chess*. **Go** — с занятиями на **-ing**: *go swimming*, *go skiing*. **Do** — с остальным, особенно с единоборствами и гимнастикой: *do judo*, *do karate*. Армянский и русский используют один глагол **խաղալ** / **играть** или говорят **զբաղվել** / **заниматься** о большинстве видов спорта.`,
    ),
    ask(1, {
      en: ["Complete: «My brother ___ karate twice a week.»", ["does", "plays", "goes"], "Martial arts take do."],
      hy: ["Լրացրու՝ «My brother ___ karate twice a week.»", ["does", "plays", "goes"], "Մարտարվեստները ստանում են do։"],
      ru: ["Дополни: «My brother ___ karate twice a week.»", ["does", "plays", "goes"], "Единоборства идут с do."],
    }),
  ],
  "olympic-games": [
    "forms mode=compare cols=when 776_BC:first_recorded_Games_at_Olympia 1896:first_modern_Games_in_Athens 1924:first_Winter_Games 1996:first_gold_for_independent_Armenia",
    closer(
      `**Armenia's first Olympic gold.** At the 1996 Games in Atlanta, the wrestler **Armen Nazaryan** won Armenia's first gold medal as an independent country, in Greco-Roman wrestling. Wrestling and weightlifting have brought Armenia most of its Olympic medals since then. In English we say an athlete **wins** a medal and **beats** a rival: you win a game, but you beat a person.

**A motto that grew.** For more than a century the Olympic motto was three Latin words, **Citius, Altius, Fortius**: Faster, Higher, Stronger. In 2021 the International Olympic Committee added a fourth: **Communiter**, "Together". The ancient Games were held at Olympia for over a thousand years, until they were stopped at the end of the 4th century AD.`,
      `**Հայաստանի առաջին օլիմպիական ոսկին։** 1996 թվականին Ատլանտայի խաղերում ըմբիշ **Արմեն Նազարյանը** հունահռոմեական ըմբշամարտում նվաճեց անկախ Հայաստանի առաջին ոսկե մեդալը։ Այդ ժամանակից ի վեր Հայաստանի օլիմպիական մեդալների մեծ մասը բերել են ըմբշամարտն ու ծանրամարտը։ Անգլերենում ասում ենք՝ մարզիկը **wins** մեդալ և **beats** մրցակցին․ խաղը win են անում, իսկ մարդուն՝ beat։

**Կարգախոս, որ մեծացավ։** Ավելի քան մեկ դար օլիմպիական կարգախոսն երեք լատիներեն բառ էր՝ **Citius, Altius, Fortius**՝ Ավելի արագ, Ավելի բարձր, Ավելի ուժեղ։ 2021 թվականին Միջազգային օլիմպիական կոմիտեն ավելացրեց չորրորդը՝ **Communiter**՝ «Միասին»։ Հին խաղերն անցկացվում էին Օլիմպիայում ավելի քան հազար տարի, մինչև դրանք դադարեցվեցին մ.թ. 4-րդ դարի վերջին։`,
      `**Первое олимпийское золото Армении.** На Играх 1996 года в Атланте борец **Армен Назарян** завоевал первую золотую медаль независимой Армении — в греко-римской борьбе. С тех пор большую часть олимпийских медалей Армении принесли борьба и тяжёлая атлетика. По-английски спортсмен **wins** медаль и **beats** соперника: игру выигрывают (win), а человека обыгрывают (beat).

**Девиз, который вырос.** Больше века олимпийским девизом были три латинских слова — **Citius, Altius, Fortius**: Быстрее, Выше, Сильнее. В 2021 году Международный олимпийский комитет добавил четвёртое: **Communiter** — «Вместе». Древние Игры проводились в Олимпии больше тысячи лет, пока их не запретили в конце IV века н. э.`,
    ),
    ask(2, {
      en: ["Complete: «Our team ___ the champions 2–1!»", ["won", "beat", "wins"], "You beat a person or a team; you win a game or a medal."],
      hy: ["Լրացրու՝ «Our team ___ the champions 2–1!»", ["won", "beat", "wins"], "Beat՝ մարդուն կամ թիմին, win՝ խաղը կամ մեդալը։"],
      ru: ["Дополни: «Our team ___ the champions 2–1!»", ["won", "beat", "wins"], "Beat — человека или команду, win — игру или медаль."],
    }),
  ],
  "ing-ed-adjectives": [
    "forms mode=compare cols=inged boring:bored interesting:interested tiring:tired exciting:excited confusing:confused",
    closer(
      `**I am boring is a confession.** *I am bored* means you feel it; *I am boring* means you make other people feel it. The **-ing** adjective describes the thing or person that causes the feeling, and the **-ed** one describes the person who has it: *The film was **boring**, so I was **bored**.*

**Armenian and Russian show it differently.** Russian uses an adjective for the cause and a special form for the feeling: «Фильм **скучный**» but «Мне **скучно**». Armenian uses an adjective and a verb: «Ֆիլմը **ձանձրալի** էր», but «**Ձանձրանում եմ**». English uses two adjectives from one verb, so the ending carries all the meaning. Hide one column above and rebuild it from the other.`,
      `**I am boring-ը խոստովանություն է։** *I am bored* նշանակում է՝ դու ես դա զգում, *I am boring*՝ դու ես ուրիշներին դա զգացնել տալիս։ **-ing** ածականը նկարագրում է այն բանը կամ մարդուն, որը զգացմունքի պատճառն է, իսկ **-ed**-ը՝ այն մարդուն, ով այն ունի՝ *The film was **boring**, so I was **bored**.*

**Հայերենն ու ռուսերենը դա այլ կերպ են ցույց տալիս։** Ռուսերենը պատճառի համար գործածում է ածական, իսկ զգացմունքի համար՝ հատուկ ձև՝ «Фильм **скучный**», բայց «Мне **скучно**»։ Հայերենը գործածում է ածական և բայ՝ «Ֆիլմը **ձանձրալի** էր», բայց «**Ձանձրանում եմ**»։ Անգլերենը մեկ բայից կազմում է երկու ածական, ուստի ամբողջ իմաստը կրում է վերջավորությունը։ Թաքցրու վերևի մի սյունակը և վերականգնիր այն մյուսից։`,
      `**I am boring — это признание.** *I am bored* значит, что скучно тебе; *I am boring* — что ты нагоняешь скуку на других. Прилагательное на **-ing** описывает то, что вызывает чувство, а на **-ed** — того, кто его испытывает: *The film was **boring**, so I was **bored**.*

**Армянский и русский показывают это иначе.** Русский берёт прилагательное для причины и особую форму для чувства: «Фильм **скучный**», но «Мне **скучно**». Армянский — прилагательное и глагол: «Ֆիլմը **ձանձրալի** էր», но «**Ձանձրանում եմ**». Английский образует два прилагательных от одного глагола, так что весь смысл несёт окончание. Спрячь один столбец выше и восстанови его по другому.`,
    ),
    ask(2, {
      en: ["Complete: «The maths test was really ___.»", ["confused", "confusing", "confuse"], "The test causes the feeling: confusing."],
      hy: ["Լրացրու՝ «The maths test was really ___.»", ["confused", "confusing", "confuse"], "Թեստն է զգացմունքի պատճառը՝ confusing։"],
      ru: ["Дополни: «The maths test was really ___.»", ["confused", "confusing", "confuse"], "Тест вызывает чувство: confusing."],
    }),
  ],
  "phrasal-verbs-1": [
    "forms mode=compare cols=phrasal give_up:stop_trying look_after:take_care_of find_out:discover get_on_with:have_a_good_relationship_with turn_down:refuse",
    closer(
      `**Russian prefixes do the same job.** A phrasal verb is a verb plus a small word that changes its meaning: *go* → *go **out***, *give* → *give **up***. Russian does this with prefixes at the front: **вы**-йти (go out), **при**-йти (come), **у**-йти (leave). Armenian often uses a compound: «**դուրս** գալ» (go out), «**հետ** տալ» (give back). So the idea is not new to you; only the position is.

**Everyday English is full of them.** Native speakers prefer *find out* to *discover* and *give up* to *stop trying* in conversation. Dictionaries list thousands of phrasal verbs, but about a hundred cover most of everyday speech. Learn them in sentences, not alone: *I **looked after** my little brother all day.*`,
      `**Ռուսերենի նախածանցներն անում են նույն գործը։** Դարձվածային բայը բայ է՝ գումարած փոքր բառ, որը փոխում է նրա իմաստը՝ *go* → *go **out***, *give* → *give **up***։ Ռուսերենը դա անում է առջևի նախածանցներով՝ **вы**-йти (դուրս գալ), **при**-йти (գալ), **у**-йти (հեռանալ)։ Հայերենը հաճախ գործածում է բաղադրյալ բայ՝ «**դուրս** գալ», «**հետ** տալ»։ Այնպես որ, գաղափարը քեզ համար նոր չէ, նոր է միայն դիրքը։

**Առօրյա անգլերենը լի է դրանցով։** Խոսակցության մեջ անգլիախոսները նախընտրում են *find out*-ը *discover*-ից, *give up*-ը՝ *stop trying*-ից։ Բառարաններում հազարավոր դարձվածային բայեր կան, բայց մոտ հարյուրը ծածկում է առօրյա խոսքի մեծ մասը։ Սովորիր դրանք նախադասություններով, ոչ թե առանձին՝ *I **looked after** my little brother all day.*`,
      `**Русские приставки делают ту же работу.** Фразовый глагол — это глагол плюс маленькое слово, меняющее его смысл: *go* → *go **out***, *give* → *give **up***. Русский делает это приставками спереди: **вы**-йти, **при**-йти, **у**-йти. Армянский часто использует составной глагол: «**դուրս** գալ» (выйти), «**հետ** տալ» (вернуть). Так что сама идея тебе знакома, ново только место.

**Повседневный английский ими полон.** В разговоре носители предпочитают *find out*, а не *discover*, и *give up*, а не *stop trying*. В словарях тысячи фразовых глаголов, но около сотни покрывают большую часть повседневной речи. Учи их в предложениях, а не по отдельности: *I **looked after** my little brother all day.*`,
    ),
    ask(1, {
      en: ["«Don't give up!» means…", ["Don't stop trying!", "Don't give it back!", "Don't get up!"], "Give up = stop trying."],
      hy: ["«Don't give up!» նշանակում է…", ["Don't stop trying!", "Don't give it back!", "Don't get up!"], "Give up՝ դադարել փորձել, հանձնվել։"],
      ru: ["«Don't give up!» значит…", ["Don't stop trying!", "Don't give it back!", "Don't get up!"], "Give up — сдаться, перестать пытаться."],
    }),
  ],
  "sports-injuries-advice-7": [
    "sentence mode=order You should put some ice on your ankle .",
    closer(
      `**RICE.** For a twisted ankle or a bruise, first aid courses teach a word that is easy to remember: **RICE**, which stands for **Rest**, **Ice**, **Compression** (a tight bandage) and **Elevation** (keep the leg up). The American doctor Gabe Mirkin made it popular in 1978. Today doctors also stress gentle movement after the first day or two, and you should always see a doctor if the pain is strong.

**Giving advice politely.** **You should…** and **You'd better…** both give advice, but **You'd better** is stronger and hints at a problem if you don't: *You'd better see a doctor.* **Why don't you…?** is the softest. Armenian **լավ կլինի**, **պետք է** and Russian **тебе стоит**, **тебе лучше** work in a similar way.`,
      `**RICE։** Ոտքի ոլորման կամ կապտուկի դեպքում առաջին օգնության դասընթացներում սովորեցնում են հեշտ հիշվող բառ՝ **RICE**, որը նշանակում է **Rest** (հանգիստ), **Ice** (սառույց), **Compression** (ամուր վիրակապ) և **Elevation** (ոտքը բարձր պահել)։ Այն տարածեց ամերիկացի բժիշկ Գեյբ Միրկինը 1978 թվականին։ Այսօր բժիշկներն ընդգծում են նաև թեթև շարժումն առաջին մեկ-երկու օրից հետո, և ուժեղ ցավի դեպքում միշտ պետք է դիմել բժշկի։

**Քաղաքավարի խորհուրդ։** **You should…** և **You'd better…** երկուսն էլ խորհուրդ են տալիս, բայց **You'd better**-ը ավելի ուժեղ է և ակնարկում է խնդրի մասին, եթե չանես՝ *You'd better see a doctor.*։ **Why don't you…?**-ն ամենամեղմն է։ Հայերեն **լավ կլինի**, **պետք է** և ռուսերեն **тебе стоит**, **тебе лучше** աշխատում են նման կերպ։`,
      `**RICE.** При вывихе лодыжки или ушибе на курсах первой помощи учат легко запоминающемуся слову **RICE**: **Rest** (покой), **Ice** (лёд), **Compression** (тугая повязка) и **Elevation** (держать ногу повыше). Его сделал популярным американский врач Гейб Миркин в 1978 году. Сегодня врачи подчёркивают и пользу лёгкого движения после первых одного-двух дней, а при сильной боли всегда нужно к врачу.

**Вежливый совет.** **You should…** и **You'd better…** оба дают совет, но **You'd better** сильнее и намекает на неприятности, если не послушаешь: *You'd better see a doctor.* **Why don't you…?** — мягче всего. Армянские **լավ կլինի**, **պետք է** и русские **тебе стоит**, **тебе лучше** работают похоже.`,
    ),
    ask(3, {
      en: ["What does the E in RICE stand for?", ["Exercise", "Energy", "Elevation"], "Keep the injured leg up: elevation."],
      hy: ["Ի՞նչ է նշանակում RICE-ի E-ն։", ["Exercise", "Energy", "Elevation"], "Վնասված ոտքը բարձր պահել՝ elevation։"],
      ru: ["Что значит E в RICE?", ["Exercise", "Energy", "Elevation"], "Держать травмированную ногу повыше: elevation."],
    }),
  ],
  "talking-about-a-match-7": [
    "sentence mode=order The match ended in a two-all draw .",
    closer(
      `**Nil, all and love.** English reads scores in its own way. In British football 2–0 is **two-nil**, and 2–2 is **two-all** or **a two-all draw**. In tennis zero is **love**, perhaps from the idea of playing "for love", for nothing. Americans usually say **zero** or **nothing**: *two to nothing*. Armenian simply says «երկու–զրո», Russian «два–ноль».

**A hat for three goals.** A **hat-trick**, three goals by one player in a match, comes from cricket. In 1858 the English bowler H. H. Stephenson took three wickets with three balls in a row, and the fans collected money to buy him a hat. Both Armenian and Russian have borrowed the word: **հեթ-թրիք**, **хет-трик**.`,
      `**Nil, all և love։** Անգլերենը հաշիվը կարդում է յուրովի։ Բրիտանական ֆուտբոլում 2–0-ն **two-nil** է, 2–2-ը՝ **two-all** կամ **a two-all draw**։ Թենիսում զրոն **love** է, գուցե «սիրո համար», այսինքն՝ ոչնչի համար խաղալու գաղափարից։ Ամերիկացիները սովորաբար ասում են **zero** կամ **nothing**՝ *two to nothing*։ Հայերենը պարզապես ասում է «երկու–զրո», ռուսերենը՝ «два–ноль»։

**Գլխարկ՝ երեք գոլի համար։** **Hat-trick**-ը՝ մեկ խաղացողի երեք գոլը մեկ խաղում, եկել է կրիկետից։ 1858 թվականին անգլիացի գնդակ նետող Հ. Հ. Սթիվենսոնն իրար հետևից երեք նետումով երեք վիկետ վերցրեց, և երկրպագուները գումար հավաքեցին՝ նրան գլխարկ գնելու համար։ Հայերենն ու ռուսերենը փոխառել են այս բառը՝ **հեթ-թրիք**, **хет-трик**։`,
      `**Nil, all и love.** Английский читает счёт по-своему. В британском футболе 2–0 — **two-nil**, а 2–2 — **two-all** или **a two-all draw**. В теннисе ноль — **love**, возможно, от идеи играть «за любовь», то есть даром. Американцы обычно говорят **zero** или **nothing**: *two to nothing*. Армянский говорит просто «երկու–զրո», русский — «два–ноль».

**Шляпа за три гола.** **Hat-trick** — три гола одного игрока за матч — пришёл из крикета. В 1858 году английский боулер Х. Х. Стивенсон взял три калитки тремя бросками подряд, и болельщики собрали деньги ему на шляпу. И армянский, и русский заимствовали слово: **հեթ-թրիք**, **хет-трик**.`,
    ),
    ask(1, {
      en: ["How do the British say the score 3–0 in football?", ["three-nil", "three-love", "three-all"], "Zero in British football is nil."],
      hy: ["Ինչպե՞ս են բրիտանացիներն ասում ֆուտբոլում 3–0 հաշիվը։", ["three-nil", "three-love", "three-all"], "Բրիտանական ֆուտբոլում զրոն nil է։"],
      ru: ["Как британцы говорят счёт 3–0 в футболе?", ["three-nil", "three-love", "three-all"], "Ноль в британском футболе — nil."],
    }),
  ],
  "passive-present": [
    "forms mode=compare cols=voice People_speak_English_here:English_is_spoken_here They_make_these_cars_in_Japan:These_cars_are_made_in_Japan Someone_cleans_the_room_every_day:The_room_is_cleaned_every_day",
    closer(
      `**Made in…** Look at the label on your clothes or phone: *Made in China*, *Made in Armenia*. That is a passive, shortened from *It **is made** in…*. We use the passive when the action or the object matters more than the person who does it, or when we do not know who it is. Science writing uses it all the time: *Water **is heated** to 80 °C.*

**Three languages, three passives.** English builds it with **be** + past participle: *is spoken*. Armenian adds **-վ-** inside the verb: «գր**վ**ում է» (is written), «կառուց**վ**ել է» (was built). Russian adds **-ся** or uses a short participle: «дом **строится**», «дом **построен**», and very often avoids the passive with «**говорят** по-английски» (they speak).`,
      `**Made in…** Նայիր հագուստիդ կամ հեռախոսիդ պիտակին՝ *Made in China*, *Made in Armenia*։ Դա կրավորական սեռ է՝ *It **is made** in…*-ի կրճատումը։ Կրավորականը գործածում ենք, երբ գործողությունը կամ առարկան ավելի կարևոր է, քան այն կատարողը, կամ երբ չգիտենք, թե ով է կատարում։ Գիտական տեքստերը մշտապես գործածում են այն՝ *Water **is heated** to 80 °C.*

**Երեք լեզու՝ երեք կրավորական։** Անգլերենն այն կազմում է **be** + անցյալ դերբայով՝ *is spoken*։ Հայերենը բայի ներսում ավելացնում է **-վ-**՝ «գր**վ**ում է», «կառուց**վ**ել է»։ Ռուսերենն ավելացնում է **-ся** կամ գործածում կարճ դերբայ՝ «дом **строится**», «дом **построен**», և շատ հաճախ խուսափում է կրավորականից՝ «**говорят** по-английски»։`,
      `**Made in…** Посмотри на ярлык одежды или телефона: *Made in China*, *Made in Armenia*. Это страдательный залог, сокращённое *It **is made** in…*. Пассив используют, когда действие или предмет важнее того, кто действует, или когда мы не знаем, кто это. Научные тексты используют его постоянно: *Water **is heated** to 80 °C.*

**Три языка — три пассива.** Английский строит его из **be** + причастие прошедшего времени: *is spoken*. Армянский добавляет **-վ-** внутрь глагола: «գր**վ**ում է» (пишется), «կառուց**վ**ել է» (построен). Русский добавляет **-ся** или берёт краткое причастие: «дом **строится**», «дом **построен**», а очень часто обходится без пассива: «**говорят** по-английски».`,
    ),
    ask(2, {
      en: ["Make it passive: «They grow apricots in Armenia.»", ["Apricots grow by Armenia.", "Apricots are grown in Armenia.", "Apricots is grown in Armenia."], "Be (are) + past participle (grown)."],
      hy: ["Դարձրու կրավորական՝ «They grow apricots in Armenia.»", ["Apricots grow by Armenia.", "Apricots are grown in Armenia.", "Apricots is grown in Armenia."], "Be (are) + անցյալ դերբայ (grown)։"],
      ru: ["Сделай пассив: «They grow apricots in Armenia.»", ["Apricots grow by Armenia.", "Apricots are grown in Armenia.", "Apricots is grown in Armenia."], "Be (are) + причастие (grown)."],
    }),
  ],
  "passive-past": [
    "sentence mode=order keep=1 Erebuni was founded in 782 BC .",
    closer(
      `**Most passives have no by.** Corpus studies of real English show that in about four passive sentences out of five, the doer is not mentioned at all. *The temple **was rebuilt** in the 1970s* is complete as it is. Add **by** only when the doer is new or important: *The Armenian alphabet **was created by** Mesrop Mashtots.*

**History loves the past passive.** When we write about buildings, discoveries and events, the thing is usually more important than the person: *Erebuni **was founded** in 782 BC*, *The fortress **was discovered** in 1950*, *Many objects **were found** during the excavations.* The Erebuni fortress on Arin Berd hill was in fact identified in 1950 thanks to a stone inscription of King Argishti I.`,
      `**Կրավորականների մեծ մասն առանց by-ի է։** Իրական անգլերենի ուսումնասիրությունները ցույց են տալիս, որ հինգ կրավորական նախադասությունից մոտ չորսում գործողն ընդհանրապես նշված չէ։ *The temple **was rebuilt** in the 1970s*-ը ամբողջական է այնպես, ինչպես կա։ **By** ավելացրու միայն այն դեպքում, երբ գործողը նոր է կամ կարևոր՝ *The Armenian alphabet **was created by** Mesrop Mashtots.*

**Պատմությունը սիրում է անցյալի կրավորականը։** Երբ գրում ենք շենքերի, հայտնագործությունների և իրադարձությունների մասին, իրը սովորաբար ավելի կարևոր է, քան մարդը՝ *Erebuni **was founded** in 782 BC*, *The fortress **was discovered** in 1950*, *Many objects **were found** during the excavations.*։ Արին Բերդ բլրի վրա գտնվող Էրեբունի ամրոցն իսկապես հայտնաբերվել է 1950 թվականին՝ Արգիշտի I արքայի սեպագիր արձանագրության շնորհիվ։`,
      `**У большинства пассивов нет by.** Исследования живого английского показывают, что примерно в четырёх пассивных предложениях из пяти деятель вообще не назван. *The temple **was rebuilt** in the 1970s* — законченное предложение. Добавляй **by**, только когда деятель новый или важный: *The Armenian alphabet **was created by** Mesrop Mashtots.*

**История любит пассив в прошедшем.** Когда пишут о зданиях, открытиях и событиях, предмет обычно важнее человека: *Erebuni **was founded** in 782 BC*, *The fortress **was discovered** in 1950*, *Many objects **were found** during the excavations.* Крепость Эребуни на холме Арин-Берд действительно опознали в 1950 году благодаря клинописной надписи царя Аргишти I.`,
    ),
    ask(1, {
      en: ["Choose the correct sentence.", ["The bridge was built in 1945.", "The bridge built in 1945 by.", "The bridge was build in 1945."], "Was + past participle (built)."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["The bridge was built in 1945.", "The bridge built in 1945 by.", "The bridge was build in 1945."], "Was + անցյալ դերբայ (built)։"],
      ru: ["Выбери правильное предложение.", ["The bridge was built in 1945.", "The bridge built in 1945 by.", "The bridge was build in 1945."], "Was + причастие (built)."],
    }),
  ],
  "passive-questions-7": [
    "sentence mode=order When was the Eiffel Tower built ?",
    closer(
      `**A tower that was meant to disappear.** The Eiffel Tower **was built** between 1887 and 1889 for the World's Fair in Paris. It **was** only **allowed** to stand for twenty years, and many artists of the time called it ugly. It **was saved** because it turned out to be perfect for radio antennas. Every fact here is a passive, because the tower matters more than the workers.

**The helper moves to the front.** To make a passive question, put **is/are/was/were** before the subject: *The tower **was** built in 1889* → ***When was** the tower built?* Question words come first: *Where **are** these phones made?* *Who **was** the Matenadaran named after?* Armenian and Russian keep the word order and change only the intonation: «Ե՞րբ է կառուցվել», «Когда была построена?».`,
      `**Աշտարակ, որ պետք է անհետանար։** Էյֆելյան աշտարակը **կառուցվել է** 1887–1889 թվականներին Փարիզի համաշխարհային ցուցահանդեսի համար։ Նրան **թույլատրված էր** կանգուն մնալ միայն քսան տարի, և այդ ժամանակի շատ արվեստագետներ այն տգեղ էին համարում։ Այն **փրկվեց**, որովհետև պարզվեց, որ կատարյալ է ռադիոալեհավաքների համար։ Այստեղ ամեն փաստ կրավորական է, որովհետև աշտարակն ավելի կարևոր է, քան բանվորները։

**Օժանդակ բայը գնում է առաջ։** Կրավորական հարց կազմելու համար **is/are/was/were**-ը դիր ենթակայից առաջ՝ *The tower **was** built in 1889* → ***When was** the tower built?*։ Հարցական բառերը գալիս են առաջինը՝ *Where **are** these phones made?* *Who **was** the Matenadaran named after?*։ Հայերենն ու ռուսերենը պահպանում են բառակարգը և փոխում միայն հնչերանգը՝ «Ե՞րբ է կառուցվել», «Когда была построена?»։`,
      `**Башня, которая должна была исчезнуть.** Эйфелева башня **была построена** в 1887–1889 годах для Всемирной выставки в Париже. Ей **разрешили** простоять всего двадцать лет, и многие художники того времени называли её уродливой. Её **спасло** то, что она оказалась идеальной для радиоантенн. Здесь каждый факт — пассив, потому что башня важнее рабочих.

**Помощник выходит вперёд.** Чтобы задать вопрос в пассиве, поставь **is/are/was/were** перед подлежащим: *The tower **was** built in 1889* → ***When was** the tower built?* Вопросительные слова идут первыми: *Where **are** these phones made?* *Who **was** the Matenadaran named after?* Армянский и русский сохраняют порядок слов и меняют только интонацию: «Ե՞րբ է կառուցվել», «Когда была построена?».`,
    ),
    ask(3, {
      en: ["Choose the correct question.", ["Where made is this phone?", "Where this phone is made?", "Where is this phone made?"], "Question word, then is, then the subject."],
      hy: ["Ընտրիր ճիշտ հարցը։", ["Where made is this phone?", "Where this phone is made?", "Where is this phone made?"], "Հարցական բառ, հետո is, հետո ենթական։"],
      ru: ["Выбери правильный вопрос.", ["Where made is this phone?", "Where this phone is made?", "Where is this phone made?"], "Вопросительное слово, потом is, потом подлежащее."],
    }),
  ],
  "biography-writing": [
    "forms mode=compare cols=when 1880:born_in_Nakhichevan-on-Don 1910–1913:travels_to_Turkey,_Egypt_and_Persia 1921:moves_to_Armenia 1972:dies_in_Yerevan",
    closer(
      `**Life writing.** **Biography** comes from two Greek words, **bios**, "life", and **graphein**, "to write". When you write your own life, it is an **autobiography**, from **autos**, "self". Armenian history writing has a famous early author: **Movses Khorenatsi**, often called the "father of Armenian history", who wrote the story of the Armenian people from its legendary beginnings.

**A timeline first.** Before writing a biography, make a timeline like the one above for Martiros Saryan. Then turn each line into a sentence with the right tense and preposition: **in** with years, **on** with dates, **at the age of** with ages. Use the active for what the person did (*He **painted** Ararat*) and the passive for what happened to the work (*His house **was turned** into a museum*).`,
      `**Կյանքի գրառում։** **Biography** բառը կազմված է երկու հունարեն բառից՝ **bios**՝ «կյանք», և **graphein**՝ «գրել»։ Երբ գրում ես քո սեփական կյանքը, դա **autobiography** է՝ **autos**՝ «ինքը» բառից։ Հայ պատմագրությունն ունի հայտնի վաղ հեղինակ՝ **Մովսես Խորենացին**, որին հաճախ անվանում են «հայոց պատմահայր», որը գրել է հայ ժողովրդի պատմությունը՝ առասպելական սկզբից։

**Նախ՝ ժամանակագրություն։** Կենսագրություն գրելուց առաջ կազմիր ժամանակագրություն, ինչպես վերևում՝ Մարտիրոս Սարյանի համար։ Հետո ամեն տող դարձրու նախադասություն՝ ճիշտ ժամանակով և նախդիրով՝ **in**՝ տարեթվերի, **on**՝ ամսաթվերի, **at the age of**՝ տարիքի հետ։ Գործածիր ներգործականն այն բանի համար, ինչ արել է մարդը (*He **painted** Ararat*), և կրավորականը՝ այն բանի համար, ինչ եղել է նրա գործի հետ (*His house **was turned** into a museum*)։`,
      `**Жизнеописание.** **Biography** состоит из двух греческих слов: **bios** — «жизнь» и **graphein** — «писать». Когда пишешь о собственной жизни, это **autobiography**, от **autos** — «сам». В армянской историографии есть знаменитый ранний автор — **Мовсес Хоренаци**, которого часто называют «отцом армянской истории»: он описал историю армянского народа от легендарных начал.

**Сначала — хронология.** Прежде чем писать биографию, составь хронологию, как выше для Мартироса Сарьяна. Потом преврати каждую строку в предложение с нужным временем и предлогом: **in** с годами, **on** с датами, **at the age of** с возрастом. Действительный залог — для того, что человек сделал (*He **painted** Ararat*), страдательный — для того, что случилось с его работой (*His house **was turned** into a museum*).`,
    ),
    ask(2, {
      en: ["Choose the correct sentence.", ["He was born on 1880.", "He was born in 1880.", "He born in 1880."], "Years take in; birth is was born."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["He was born on 1880.", "He was born in 1880.", "He born in 1880."], "Տարեթվի հետ՝ in, ծնունդը՝ was born։"],
      ru: ["Выбери правильное предложение.", ["He was born on 1880.", "He was born in 1880.", "He born in 1880."], "С годом — in, рождение — was born."],
    }),
  ],
  "cultural-heritage": [
    "forms mode=compare cols=heritage Garni_temple:above_the_Azat_gorge:1st_century_AD Kremlin_walls:Moscow:1485–1495 Stonehenge:Salisbury_Plain:about_3000–2000_BC",
    closer(
      `**Armenia on the UNESCO list.** Armenia has three sites on the UNESCO World Heritage List: the monasteries of **Haghpat and Sanahin**, the cathedral and churches of **Echmiadzin** with the ruins of **Zvartnots**, and the monastery of **Geghard** with the Upper Azat Valley. The Moscow Kremlin and Red Square were listed in 1990, and Stonehenge in 1986.

**Heritage is what we inherit.** The word **heritage** comes from the same root as **inherit**: things passed from one generation to the next. In English we say a site **is protected**, a church **was restored**, ruins **were excavated**: the passive again, because the building is the hero. Armenian **ժառանգություն** and Russian **наследие** also come from words for inheritance.`,
      `**Հայաստանը ՅՈՒՆԵՍԿՕ-ի ցուցակում։** Հայաստանն ունի երեք հուշարձան ՅՈՒՆԵՍԿՕ-ի Համաշխարհային ժառանգության ցուցակում՝ **Հաղպատի և Սանահինի** վանքերը, **Էջմիածնի** մայր տաճարն ու եկեղեցիները՝ **Զվարթնոցի** ավերակներով, և **Գեղարդի** վանքը՝ Ազատի հովտի վերին հատվածով։ Մոսկվայի Կրեմլը և Կարմիր հրապարակը ցուցակ են ընդգրկվել 1990 թվականին, Սթոունհենջը՝ 1986-ին։

**Ժառանգությունն այն է, ինչ ժառանգում ենք։** **Heritage** բառը նույն արմատից է, ինչ **inherit**-ը՝ բաներ, որոնք փոխանցվում են սերնդից սերունդ։ Անգլերենում ասում ենք՝ հուշարձանը **is protected**, եկեղեցին **was restored**, ավերակները **were excavated**՝ դարձյալ կրավորական, որովհետև գլխավոր հերոսը շենքն է։ Հայերեն **ժառանգություն**-ը և ռուսերեն **наследие**-ն նույնպես ծագում են ժառանգելու մասին բառերից։`,
      `**Армения в списке ЮНЕСКО.** У Армении три объекта в Списке всемирного наследия ЮНЕСКО: монастыри **Ахпат и Санаин**, кафедральный собор и церкви **Эчмиадзина** с руинами **Звартноца** и монастырь **Гегард** с верхней долиной Азата. Московский Кремль и Красная площадь внесены в список в 1990 году, Стоунхендж — в 1986-м.

**Наследие — то, что мы наследуем.** Слово **heritage** того же корня, что **inherit**: то, что передаётся от поколения к поколению. По-английски говорят, что памятник **is protected**, церковь **was restored**, руины **were excavated** — снова пассив, ведь главный герой — здание. Армянское **ժառանգություն** и русское **наследие** тоже происходят от слов о наследстве.`,
    ),
    ask(1, {
      en: ["Complete: «The temple ___ by an earthquake in 1679.»", ["was destroyed", "destroyed", "is destroying"], "Something happened to the temple: past passive."],
      hy: ["Լրացրու՝ «The temple ___ by an earthquake in 1679.»", ["was destroyed", "destroyed", "is destroying"], "Ինչ-որ բան եղավ տաճարի հետ՝ անցյալի կրավորական։"],
      ru: ["Дополни: «The temple ___ by an earthquake in 1679.»", ["was destroyed", "destroyed", "is destroying"], "Что-то случилось с храмом: пассив в прошедшем."],
    }),
  ],
  "famous-armenians-7": [
    "forms mode=compare cols=who3 Komitas:composer:saving_thousands_of_folk_songs Khachaturian:composer:the_Sabre_Dance Saryan:painter:bright_pictures_of_Armenia Hambardzumyan:astrophysicist:the_Byurakan_Observatory Aznavour:singer:French_songs",
    closer(
      `**A name in the sky and in Geneva.** The astrophysicist **Viktor Hambardzumyan** has an asteroid named after him, **1905 Ambartsumian**. **Charles Aznavour** wrote more than a thousand songs and in 2009 became Armenia's ambassador to Switzerland. When you describe famous people in English, you need jobs with **a/an**: *He was **a** composer*, *She is **an** astrophysicist*. Armenian and Russian need no article: «Նա կոմպոզիտոր էր», «Он был композитором».

**Thirty-six letters in 405.** **Mesrop Mashtots** created the Armenian alphabet in 405 with 36 letters; two more, **օ** and **ֆ**, were added in the Middle Ages. Use the table to build three questions and answers: *Who was Komitas? What is he famous for? Why do you admire him?*`,
      `**Անուն՝ երկնքում և Ժնևում։** Աստղաֆիզիկոս **Վիկտոր Համբարձումյանի** անունով կոչվել է աստերոիդ՝ **1905 Ambartsumian**։ **Շառլ Ազնավուրը** գրել է ավելի քան հազար երգ և 2009 թվականին դարձել Շվեյցարիայում Հայաստանի դեսպան։ Անգլերենով հայտնի մարդկանց նկարագրելիս մասնագիտությունների հետ պետք է **a/an**՝ *He was **a** composer*, *She is **an** astrophysicist*։ Հայերենին և ռուսերենին հոդ պետք չէ՝ «Նա կոմպոզիտոր էր», «Он был композитором»։

**Երեսունվեց տառ՝ 405 թվականին։** **Մեսրոպ Մաշտոցը** հայոց այբուբենը ստեղծեց 405 թվականին՝ 36 տառով․ ևս երկուսը՝ **օ** և **ֆ**, ավելացվեցին միջնադարում։ Աղյուսակի օգնությամբ կազմիր երեք հարց և պատասխան՝ *Who was Komitas? What is he famous for? Why do you admire him?*`,
      `**Имя на небе и в Женеве.** В честь астрофизика **Виктора Амбарцумяна** назван астероид **1905 Ambartsumian**. **Шарль Азнавур** написал больше тысячи песен и в 2009 году стал послом Армении в Швейцарии. Описывая знаменитых людей по-английски, с профессиями нужен **a/an**: *He was **a** composer*, *She is **an** astrophysicist*. Армянскому и русскому артикль не нужен: «Նա կոմպոզիտոր էր», «Он был композитором».

**Тридцать шесть букв в 405 году.** **Месроп Маштоц** создал армянский алфавит в 405 году из 36 букв; ещё две, **օ** и **ֆ**, добавили в Средние века. С помощью таблицы составь три вопроса и ответа: *Who was Komitas? What is he famous for? Why do you admire him?*`,
    ),
    ask(2, {
      en: ["Choose the correct sentence.", ["Saryan was painter.", "Saryan was a painter.", "Saryan was the painter of Armenia."], "Jobs take a/an in English."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["Saryan was painter.", "Saryan was a painter.", "Saryan was the painter of Armenia."], "Անգլերենում մասնագիտությունները ստանում են a/an։"],
      ru: ["Выбери правильное предложение.", ["Saryan was painter.", "Saryan was a painter.", "Saryan was the painter of Armenia."], "Профессии в английском идут с a/an."],
    }),
  ],
  ambitions: [
    "sentence mode=order keep=1 I would like to become a doctor .",
    closer(
      `**Ambition once meant walking around.** The Latin **ambitio** meant "going around": in ancient Rome, a man who wanted to be elected walked around the city asking people for their votes. Slowly the word came to mean a strong wish to succeed. In English it can be positive (*She has great **ambitions***) or a little negative (*He is too **ambitious***).

**Become, not make.** All three languages use a special verb for changing into something: **become**, **դառնալ**, **стать**. *I want to **become** an engineer*, «Ուզում եմ ինժեներ **դառնալ**», «Хочу **стать** инженером». *I would like to…* sounds softer than *I want to…*, and *I hope to…* adds that you are not sure yet.`,
      `**Ambition-ը ժամանակին նշանակում էր շրջել։** Լատիներեն **ambitio**-ն նշանակում էր «շրջագայություն»․ Հին Հռոմում ընտրվել ցանկացող մարդը շրջում էր քաղաքում և մարդկանցից ձայն խնդրում։ Աստիճանաբար բառը սկսեց նշանակել հաջողության հասնելու ուժեղ ցանկություն։ Անգլերենում այն կարող է լինել դրական (*She has great **ambitions***) կամ մի քիչ բացասական (*He is too **ambitious***)։

**Become, ոչ թե make։** Երեք լեզուներն էլ ինչ-որ բան դառնալու համար հատուկ բայ ունեն՝ **become**, **դառնալ**, **стать**՝ *I want to **become** an engineer*, «Ուզում եմ ինժեներ **դառնալ**», «Хочу **стать** инженером»։ *I would like to…*-ն ավելի մեղմ է հնչում, քան *I want to…*-ն, իսկ *I hope to…*-ն ավելացնում է, որ դեռ վստահ չես։`,
      `**Ambition когда-то значило «ходить вокруг».** Латинское **ambitio** означало «обход»: в Древнем Риме человек, который хотел быть избранным, ходил по городу и просил у людей голоса. Постепенно слово стало значить сильное желание добиться успеха. В английском оно бывает положительным (*She has great **ambitions***) и немного отрицательным (*He is too **ambitious***).

**Become, а не make.** Во всех трёх языках есть особый глагол для превращения во что-то: **become**, **դառնալ**, **стать**. *I want to **become** an engineer*, «Ուզում եմ ինժեներ **դառնալ**», «Хочу **стать** инженером». *I would like to…* звучит мягче, чем *I want to…*, а *I hope to…* добавляет, что ты ещё не уверен.`,
    ),
    ask(3, {
      en: ["Complete: «When I grow up, I want to ___ a pilot.»", ["make", "do", "become"], "Changing into something: become."],
      hy: ["Լրացրու՝ «When I grow up, I want to ___ a pilot.»", ["make", "do", "become"], "Ինչ-որ բան դառնալ՝ become։"],
      ru: ["Дополни: «When I grow up, I want to ___ a pilot.»", ["make", "do", "become"], "Стать кем-то: become."],
    }),
  ],
  "future-forms-review": [
    "tense name=future-simple aspects=simple,continuous,going-to times=future",
    closer(
      `**Four ways to talk about the future.** English has no single future tense. It chooses by meaning: **will** for decisions made now, promises and predictions (*I'll help you*); **going to** for plans and visible signs (*I'm going to study medicine*); the **present continuous** for fixed arrangements (*I'm meeting Ani at five*); and the **present simple** for timetables (*The train leaves at six*).

**Future continuous: a moment in the future.** *This time tomorrow I **will be flying** to Paris* shows an action in progress at a future moment, like a photo taken in advance. It is also a polite way to ask about plans: *Will you **be using** the computer tonight?* Armenian and Russian have one future, «կթռչեմ», «буду лететь», and rely on context.`,
      `**Ապագայի մասին խոսելու չորս եղանակ։** Անգլերենը մեկ ապառնի ժամանակ չունի։ Այն ընտրում է ըստ իմաստի՝ **will**՝ հենց հիմա կայացրած որոշումների, խոստումների և կանխատեսումների համար (*I'll help you*), **going to**՝ ծրագրերի և տեսանելի նշանների համար (*I'm going to study medicine*), **present continuous**՝ հաստատուն պայմանավորվածությունների համար (*I'm meeting Ani at five*), և **present simple**՝ չվացուցակների համար (*The train leaves at six*)։

**Future continuous՝ ապագայի մի պահ։** *This time tomorrow I **will be flying** to Paris*-ը ցույց է տալիս ապագայի որոշակի պահին ընթացող գործողություն, ասես նախապես արված լուսանկար։ Դա նաև ծրագրերի մասին հարցնելու քաղաքավարի ձև է՝ *Will you **be using** the computer tonight?*։ Հայերենն ու ռուսերենն ունեն մեկ ապառնի՝ «կթռչեմ», «буду лететь», և հենվում են համատեքստի վրա։`,
      `**Четыре способа говорить о будущем.** В английском нет одного будущего времени. Он выбирает по смыслу: **will** — для решений, принятых сейчас, обещаний и прогнозов (*I'll help you*); **going to** — для планов и видимых признаков (*I'm going to study medicine*); **present continuous** — для твёрдых договорённостей (*I'm meeting Ani at five*); **present simple** — для расписаний (*The train leaves at six*).

**Future continuous: момент в будущем.** *This time tomorrow I **will be flying** to Paris* показывает действие в процессе в определённый момент будущего — как фото, снятое заранее. Это ещё и вежливый способ спросить о планах: *Will you **be using** the computer tonight?* В армянском и русском одно будущее — «կթռչեմ», «буду лететь», — и всё решает контекст.`,
    ),
    ask(2, {
      en: ["«I've got tickets. We ___ the concert on Friday.» (fixed arrangement)", ["will see", "are seeing", "see"], "A fixed arrangement: present continuous."],
      hy: ["«I've got tickets. We ___ the concert on Friday.» (հաստատուն պայմանավորվածություն)", ["will see", "are seeing", "see"], "Հաստատուն պայմանավորվածություն՝ present continuous։"],
      ru: ["«I've got tickets. We ___ the concert on Friday.» (твёрдая договорённость)", ["will see", "are seeing", "see"], "Твёрдая договорённость: present continuous."],
    }),
  ],
  "job-interview-7": [
    "sentence mode=order Why do you want this job ?",
    closer(
      `**CV or résumé?** In Britain you send a **CV**, from the Latin *curriculum vitae*, "the course of life". In the USA it is usually a **résumé**, a French word meaning "summary". A good CV for a young person is one page long and starts with the most recent experience first. Armenian and Russian use **ինքնակենսագրություն** / **резюме**.

**Answering with examples.** Interviewers like answers with a short story: not just *I am hard-working*, but *Last summer I helped at my uncle's shop every morning, and I was never late.* Present perfect is useful here: *I **have worked** with children*, *I **have learnt** to use…* Always prepare one question of your own, such as *What would a normal day look like?*`,
      `**CV, թե՞ résumé։** Բրիտանիայում ուղարկում են **CV**՝ լատիներեն *curriculum vitae*՝ «կյանքի ընթացք» արտահայտությունից։ ԱՄՆ-ում սովորաբար **résumé** են ուղարկում՝ ֆրանսերեն բառ, որ նշանակում է «ամփոփում»։ Երիտասարդի լավ CV-ն մեկ էջ է և սկսվում է ամենավերջին փորձից։ Հայերենն ու ռուսերենը գործածում են **ինքնակենսագրություն** / **резюме**։

**Պատասխանել օրինակներով։** Հարցազրուցավարները սիրում են կարճ պատմությամբ պատասխաններ՝ ոչ թե պարզապես *I am hard-working*, այլ *Last summer I helped at my uncle's shop every morning, and I was never late.*։ Այստեղ օգտակար է present perfect-ը՝ *I **have worked** with children*, *I **have learnt** to use…*։ Միշտ պատրաստիր քո սեփական մեկ հարցը, օրինակ՝ *What would a normal day look like?*`,
      `**CV или résumé?** В Британии отправляют **CV** — от латинского *curriculum vitae*, «течение жизни». В США обычно **résumé** — французское слово «краткое изложение». Хорошее CV молодого человека занимает одну страницу и начинается с самого недавнего опыта. В армянском и русском — **ինքնակենսագրություն** / **резюме**.

**Отвечай примерами.** Интервьюеры любят ответы с короткой историей: не просто *I am hard-working*, а *Last summer I helped at my uncle's shop every morning, and I was never late.* Здесь полезен present perfect: *I **have worked** with children*, *I **have learnt** to use…* Всегда готовь и свой вопрос, например *What would a normal day look like?*`,
    ),
    ask(1, {
      en: ["What does CV stand for?", ["curriculum vitae, the course of life", "computer version", "certificate of value"], "Latin: curriculum vitae, the course of life."],
      hy: ["Ի՞նչ է նշանակում CV-ն։", ["curriculum vitae, the course of life", "computer version", "certificate of value"], "Լատիներեն՝ curriculum vitae՝ կյանքի ընթացք։"],
      ru: ["Как расшифровывается CV?", ["curriculum vitae, the course of life", "computer version", "certificate of value"], "Латынь: curriculum vitae — течение жизни."],
    }),
  ],
  "formal-letter": [
    "sentence mode=order keep=1 I look forward to hearing from you .",
    closer(
      `**Sincerely or faithfully?** British formal letters follow a neat rule. If you start with the person's name, *Dear Mr Hakobyan*, end with **Yours sincerely**. If you do not know the name and start with *Dear Sir or Madam*, end with **Yours faithfully**. Americans usually just write **Sincerely** in both cases.

**To + -ing is not a mistake.** In *I look forward **to hearing** from you*, **to** is a preposition, not part of an infinitive, so the verb after it takes **-ing**. The same is true of *I'm used **to getting up** early*. Armenian letters end with **Հարգանքով**, Russian ones with **С уважением**: both mean "with respect".`,
      `**Sincerely, թե՞ faithfully։** Բրիտանական պաշտոնական նամակները հետևում են մի հստակ կանոնի։ Եթե սկսում ես մարդու անունով՝ *Dear Mr Hakobyan*, ավարտիր **Yours sincerely**-ով։ Եթե անունը չգիտես և սկսում ես *Dear Sir or Madam*-ով, ավարտիր **Yours faithfully**-ով։ Ամերիկացիներն երկու դեպքում էլ սովորաբար գրում են պարզապես **Sincerely**։

**To + -ing-ը սխալ չէ։** *I look forward **to hearing** from you* նախադասության մեջ **to**-ն նախդիր է, ոչ թե անորոշ դերբայի մաս, ուստի դրանից հետո բայը ստանում է **-ing**։ Նույնն է *I'm used **to getting up** early*-ում։ Հայերեն նամակներն ավարտվում են **Հարգանքով**, ռուսերենները՝ **С уважением**․ երկուսն էլ նշանակում են «հարգանքով»։`,
      `**Sincerely или faithfully?** Британские официальные письма следуют чёткому правилу. Если начинаешь с имени, *Dear Mr Hakobyan*, заканчивай **Yours sincerely**. Если имени не знаешь и начинаешь с *Dear Sir or Madam*, заканчивай **Yours faithfully**. Американцы обычно пишут просто **Sincerely** в обоих случаях.

**To + -ing — не ошибка.** В *I look forward **to hearing** from you* слово **to** — предлог, а не часть инфинитива, поэтому глагол после него получает **-ing**. То же в *I'm used **to getting up** early*. Армянские письма заканчиваются словом **Հարգանքով**, русские — **С уважением**: оба значат «с уважением».`,
    ),
    ask(2, {
      en: ["You started «Dear Sir or Madam». How do you end?", ["Yours sincerely", "Yours faithfully", "Love"], "Unknown name: Yours faithfully."],
      hy: ["Սկսել ես «Dear Sir or Madam»-ով։ Ինչպե՞ս ես ավարտում։", ["Yours sincerely", "Yours faithfully", "Love"], "Անհայտ անուն՝ Yours faithfully։"],
      ru: ["Ты начал с «Dear Sir or Madam». Как закончить?", ["Yours sincerely", "Yours faithfully", "Love"], "Имя неизвестно: Yours faithfully."],
    }),
  ],
  "formal-vs-informal-7": [
    "forms mode=compare cols=official get:receive help:assist ask:enquire need:require start:commence buy:purchase",
    closer(
      `**Thank the Normans.** After the Norman Conquest of 1066, French became the language of the court and the law in England for about three hundred years, while ordinary people kept speaking English. That is why the short everyday words in the table are mostly English (*help*, *ask*, *buy*), and their formal partners come from French or Latin (*assist*, *enquire*, *purchase*).

**No ты and вы in English.** Armenian and Russian show politeness with the pronoun: **դու / դուք**, **ты / вы**. English lost its informal **thou** centuries ago, so it shows formality through word choice, full forms (*I am* instead of *I'm*) and longer sentences. Hide the right column and turn the informal words into formal ones.`,
      `**Շնորհակալություն նորմաններին։** 1066 թվականի նորմանդական նվաճումից հետո ֆրանսերենը մոտ երեք հարյուր տարի Անգլիայում դարձավ արքունիքի և օրենքի լեզու, իսկ հասարակ մարդիկ շարունակեցին խոսել անգլերեն։ Ահա թե ինչու աղյուսակի կարճ առօրյա բառերը հիմնականում անգլիական են (*help*, *ask*, *buy*), իսկ նրանց պաշտոնական զույգերն եկել են ֆրանսերենից կամ լատիներենից (*assist*, *enquire*, *purchase*)։

**Անգլերենում ты և вы չկա։** Հայերենն ու ռուսերենը քաղաքավարությունը ցույց են տալիս դերանունով՝ **դու / դուք**, **ты / вы**։ Անգլերենը դարեր առաջ կորցրեց իր ոչ պաշտոնական **thou**-ն, ուստի պաշտոնականությունը ցույց է տալիս բառընտրությամբ, լրիվ ձևերով (*I am*՝ *I'm*-ի փոխարեն) և ավելի երկար նախադասություններով։ Թաքցրու աջ սյունակը և ոչ պաշտոնական բառերը դարձրու պաշտոնական։`,
      `**Спасибо норманнам.** После нормандского завоевания 1066 года французский около трёхсот лет был в Англии языком двора и права, а простые люди продолжали говорить по-английски. Поэтому короткие повседневные слова в таблице в основном английские (*help*, *ask*, *buy*), а их официальные пары пришли из французского или латыни (*assist*, *enquire*, *purchase*).

**В английском нет ты и вы.** Армянский и русский показывают вежливость местоимением: **դու / դուք**, **ты / вы**. Английский давно потерял неформальное **thou**, поэтому официальность выражает выбором слов, полными формами (*I am* вместо *I'm*) и более длинными предложениями. Спрячь правый столбец и преврати разговорные слова в официальные.`,
    ),
    ask(3, {
      en: ["Which word is the formal partner of «buy»?", ["get", "shop", "purchase"], "Purchase came from French and sounds formal."],
      hy: ["Ո՞ր բառն է «buy»-ի պաշտոնական զույգը։", ["get", "shop", "purchase"], "Purchase-ը եկել է ֆրանսերենից և պաշտոնական է հնչում։"],
      ru: ["Какое слово — официальная пара к «buy»?", ["get", "shop", "purchase"], "Purchase пришло из французского и звучит официально."],
    }),
  ],
  "year-7-review": [
    "tense name=present-perfect-continuous aspects=simple,continuous,perfect,perfect-continuous times=past,present,future",
    closer(
      `**The whole tense system.** This year you met the last pieces: the present perfect continuous, the future continuous and the passive. The line above now shows all twelve combinations of time (past, present, future) and aspect (simple, continuous, perfect, perfect continuous). You do not need all twelve every day: about six cover most real conversation.

**Your checklist for grade 7.** Check four things in your writing: no **will** after **if**; no comma before a **who/which/where** clause that tells you which one; **be** + past participle in the passive; and **-ing** for the cause, **-ed** for the feeling. Then choose formal or informal words to match the reader.`,
      `**Ժամանակների ամբողջ համակարգը։** Այս տարի դու ծանոթացար վերջին մասերին՝ present perfect continuous, future continuous և կրավորական սեռ։ Վերևի գիծը հիմա ցույց է տալիս ժամանակի (անցյալ, ներկա, ապառնի) և կերպի (simple, continuous, perfect, perfect continuous) բոլոր տասներկու համակցությունները։ Ամեն օր բոլոր տասներկուսը պետք չեն․ իրական խոսքի մեծ մասը ծածկում են մոտ վեցը։

**Քո ստուգաթերթը 7-րդ դասարանի համար։** Գրավոր աշխատանքում ստուգիր չորս բան՝ **if**-ից հետո **will** չկա, ստորակետ չկա **who/which/where** նախադասությունից առաջ, երբ այն ցույց է տալիս, թե որ մեկը, կրավորականում՝ **be** + անցյալ դերբայ, և **-ing**՝ պատճառի, **-ed**՝ զգացմունքի համար։ Հետո ընտրիր պաշտոնական կամ ոչ պաշտոնական բառեր՝ ըստ ընթերցողի։`,
      `**Вся система времён.** В этом году ты встретил последние кусочки: present perfect continuous, future continuous и пассив. Линия выше теперь показывает все двенадцать сочетаний времени (прошлое, настоящее, будущее) и аспекта (simple, continuous, perfect, perfect continuous). Каждый день все двенадцать не нужны: около шести покрывают большую часть живой речи.

**Твой чек-лист за 7 класс.** Проверь в письме четыре вещи: нет **will** после **if**; нет запятой перед придаточным с **who/which/where**, которое уточняет, о ком или о чём речь; **be** + причастие в пассиве; **-ing** — для причины, **-ed** — для чувства. А потом выбери официальные или разговорные слова под читателя.`,
    ),
    ask(1, {
      en: ["Which sentence is correct?", ["If I see her, I'll tell her.", "If I will see her, I tell her.", "If I will see her, I'll tell her."], "Present after if, will in the result."],
      hy: ["Ո՞ր նախադասությունն է ճիշտ։", ["If I see her, I'll tell her.", "If I will see her, I tell her.", "If I will see her, I'll tell her."], "If-ից հետո ներկա, արդյունքում՝ will։"],
      ru: ["Какое предложение верно?", ["If I see her, I'll tell her.", "If I will see her, I tell her.", "If I will see her, I'll tell her."], "После if — настоящее, в результате — will."],
    }),
  ],
};
