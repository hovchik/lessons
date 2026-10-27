import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade5: VisualMap[number] = {
  "school-subjects": [
    "sentence mode=order keep=1 I like maths because it is fun .",
    closer(
      `**School once meant free time.** The word **school** comes from the Greek **scholē**, which meant "leisure": free time that you could spend on thinking and talking. Only people who did not have to work all day had that time, so the word moved from "free time" to "a place for learning".

**Maths or math?** In Britain the short word is **maths**, in the USA it is **math**. Both come from **mathematics**. Whichever you choose, the verb is singular: *Maths **is** my favourite subject*, never *Maths are*. The same is true of **physics**: *Physics is hard*. Put the words above in order, then make the sentence true for you.`,
      `**Դպրոցը ժամանակին նշանակել է ազատ ժամանակ։** **School** բառը ծագում է հունարեն **scholē** բառից, որ նշանակում էր «պարապ ժամանակ»՝ ազատ ժամեր, որ կարելի էր անցկացնել մտածելով և զրուցելով։ Այդպիսի ժամանակ ունեին միայն նրանք, ովքեր ստիպված չէին ամբողջ օրն աշխատել, և բառն «ազատ ժամանակից» դարձավ «սովորելու վայր»։

**Maths, թե՞ math։** Բրիտանիայում կարճ բառը **maths** է, ԱՄՆ-ում՝ **math**։ Երկուսն էլ **mathematics** բառից են։ Ինչ էլ ընտրես, բայն եզակի է՝ *Maths **is** my favourite subject*, երբեք՝ *Maths are*։ Նույնը **physics**-ի դեպքում է՝ *Physics is hard*։ Վերևի բառերը դասավորիր, ապա նախադասությունը դարձրու քո մասին։`,
      `**Когда-то школа означала свободное время.** Слово **school** происходит от греческого **scholē** — «досуг»: свободное время, которое можно потратить на размышления и беседы. Такое время было только у тех, кому не нужно было работать весь день, и слово из «свободного времени» превратилось в «место учёбы».

**Maths или math?** В Британии коротко говорят **maths**, в США — **math**. Оба слова от **mathematics**. Что бы ты ни выбрал, глагол в единственном числе: *Maths **is** my favourite subject*, а не *Maths are*. То же с **physics**: *Physics is hard*. Расставь слова выше по порядку, а потом сделай предложение правдой о себе.`,
    ),
    ask(2, {
      en: ["Choose the correct sentence.", ["Maths are my favourite subject.", "Maths is my favourite subject.", "Maths my favourite subject is."], "Maths is one subject, so the verb is singular: is."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["Maths are my favourite subject.", "Maths is my favourite subject.", "Maths my favourite subject is."], "Maths-ը մեկ առարկա է, բայն եզակի է՝ is։"],
      ru: ["Выбери правильное предложение.", ["Maths are my favourite subject.", "Maths is my favourite subject.", "Maths my favourite subject is."], "Maths — один предмет, поэтому глагол в единственном числе: is."],
    }),
  ],
  "question-words": [
    "sentence mode=order Where does she live ?",
    closer(
      `**Six honest serving-men.** In 1902 Rudyard Kipling wrote a short poem in *Just So Stories*: "I keep six honest serving-men, they taught me all I knew; their names are What and Why and When and How and Where and Who." Journalists still check every news story with these six questions, often called the **five Ws and one H**.

**Same idea, different place.** All three languages put the question word near the start: *Where do you live?*, «Որտե՞ղ ես ապրում», «Где ты живёшь?». English adds a helper verb (**do**, **does**) after the question word, and Armenian puts the question mark **՞** on the stressed vowel of the question word itself.`,
      `**Վեց ազնիվ ծառա։** 1902 թվականին Ռադյարդ Քիփլինգը *Just So Stories* գրքում կարճ բանաստեղծություն գրեց․ «Ես վեց ազնիվ ծառա ունեմ, նրանք ինձ սովորեցրին այն ամենը, ինչ գիտեմ․ նրանց անուններն են Ինչ, Ինչու, Երբ, Ինչպես, Որտեղ և Ով»։ Լրագրողները մինչ օրս յուրաքանչյուր լուր ստուգում են այս վեց հարցով, որոնք հաճախ կոչվում են **five Ws and one H**։

**Նույն միտքը, տարբեր տեղ։** Երեք լեզուներն էլ հարցական բառը դնում են սկզբում՝ *Where do you live?*, «Որտե՞ղ ես ապրում», «Где ты живёшь?»։ Անգլերենը հարցական բառից հետո ավելացնում է օժանդակ բայ (**do**, **does**), իսկ հայերենը հարցական նշանը՝ **՞**, դնում է հենց հարցական բառի շեշտված ձայնավորի վրա։`,
      `**Шесть честных слуг.** В 1902 году Редьярд Киплинг написал в *Just So Stories* короткое стихотворение: «У меня шесть честных слуг, они научили меня всему, что я знаю; их зовут Что, Почему, Когда, Как, Где и Кто». Журналисты до сих пор проверяют каждую новость этими шестью вопросами — их называют **five Ws and one H**.

**Та же мысль, разное место.** Все три языка ставят вопросительное слово в начало: *Where do you live?*, «Որտե՞ղ ես ապրում», «Где ты живёшь?». Английский добавляет после вопросительного слова вспомогательный глагол (**do**, **does**), а армянский ставит знак вопроса **՞** прямо над ударной гласной вопросительного слова.`,
    ),
    ask(3, {
      en: ["Which question asks about a time?", ["Where is the cinema?", "Who is your teacher?", "When does the film start?"], "When asks about time."],
      hy: ["Ո՞ր հարցն է ժամանակի մասին։", ["Where is the cinema?", "Who is your teacher?", "When does the film start?"], "When-ը հարցնում է ժամանակի մասին։"],
      ru: ["Какой вопрос о времени?", ["Where is the cinema?", "Who is your teacher?", "When does the film start?"], "When спрашивает о времени."],
    }),
  ],
  "present-simple-review": [
    "sentence mode=order She always gets up at seven .",
    closer(
      `**A present tense for the future.** The present simple is also used for timetables, even when they are in the future: *The train **leaves** at six tomorrow*, *The lesson **starts** at nine*. Armenian and Russian do the same: «Գնացքը վաղը մեկնում է ժամը վեցին», «Поезд отправляется завтра в шесть».

**Where the little word goes.** Words like **always**, **usually**, **often** and **never** stand before the main verb (*She **always** gets up at seven*) but after **be** (*She is **always** late*). Try moving **always** in the sentence above and listen to which order sounds right.`,
      `**Ներկա ժամանակ՝ ապագայի համար։** Present simple-ը գործածվում է նաև չվացուցակների համար, նույնիսկ եթե դրանք ապագայում են՝ *The train **leaves** at six tomorrow*, *The lesson **starts** at nine*։ Հայերենն ու ռուսերենը նույնն են անում՝ «Գնացքը վաղը մեկնում է ժամը վեցին», «Поезд отправляется завтра в шесть»։

**Ո՞ւր է դրվում փոքր բառը։** **Always**, **usually**, **often**, **never** բառերը դրվում են հիմնական բայից առաջ (*She **always** gets up at seven*), բայց **be**-ից հետո (*She is **always** late*)։ Փորձիր վերևի նախադասության մեջ տեղափոխել **always**-ը և լսիր, թե որ կարգն է ճիշտ հնչում։`,
      `**Настоящее время для будущего.** Present simple используют и для расписаний, даже если речь о будущем: *The train **leaves** at six tomorrow*, *The lesson **starts** at nine*. Армянский и русский делают так же: «Գնացքը վաղը մեկնում է ժամը վեցին», «Поезд отправляется завтра в шесть».

**Куда ставить маленькое слово.** Слова **always**, **usually**, **often**, **never** стоят перед основным глаголом (*She **always** gets up at seven*), но после **be** (*She is **always** late*). Попробуй переставить **always** в предложении выше и послушай, какой порядок звучит правильно.`,
    ),
    ask(1, {
      en: ["Choose the correct sentence.", ["He is never late.", "He never is late.", "Never he is late."], "With be, the frequency word comes after it: is never."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["He is never late.", "He never is late.", "Never he is late."], "Be-ի հետ հաճախականության բառը գալիս է նրանից հետո՝ is never։"],
      ru: ["Выбери правильное предложение.", ["He is never late.", "He never is late.", "Never he is late."], "С be слово частотности идёт после него: is never."],
    }),
  ],
  "present-continuous-5": [
    "tense name=present-continuous aspects=simple,continuous times=present",
    closer(
      `**English has two presents, Armenian and Russian have one.** «Ես գրում եմ» and «Я пишу» can mean both *I write* (usually) and *I am writing* (right now). English must choose. Ask yourself: is it happening **now**, or is it a **habit**? The line above shows the two presents side by side.

**Verbs that do not like -ing.** Some verbs describe a state, not an action, and are almost never used in the continuous: **know**, **like**, **want**, **understand**, **need**. We say *I **know** the answer*, not *I am knowing*. A famous advertising slogan, *I'm lovin' it*, breaks this rule on purpose to sound fresh and chatty.`,
      `**Անգլերենն ունի երկու ներկա, հայերենն ու ռուսերենը՝ մեկ։** «Ես գրում եմ» և «Я пишу» կարող են նշանակել և՛ *I write* (սովորաբար), և՛ *I am writing* (հենց հիմա)։ Անգլերենը պետք է ընտրի։ Հարցրու քեզ՝ դա կատարվում է **հիմա**, թե՞ դա **սովորություն** է։ Վերևի գիծը ցույց է տալիս երկու ներկաները կողք կողքի։

**Բայեր, որոնք չեն սիրում -ing։** Որոշ բայեր նկարագրում են վիճակ, ոչ թե գործողություն, և գրեթե երբեք չեն գործածվում շարունակական ձևով՝ **know**, **like**, **want**, **understand**, **need**։ Ասում ենք *I **know** the answer*, ոչ թե *I am knowing*։ Հայտնի գովազդային կարգախոսը՝ *I'm lovin' it*, միտումնավոր խախտում է այս կանոնը, որ թարմ և խոսակցական հնչի։`,
      `**В английском два настоящих, в армянском и русском — одно.** «Ես գրում եմ» и «Я пишу» могут значить и *I write* (обычно), и *I am writing* (прямо сейчас). Английский обязан выбрать. Спроси себя: это происходит **сейчас** или это **привычка**? Линия выше показывает оба настоящих рядом.

**Глаголы, которые не любят -ing.** Некоторые глаголы описывают состояние, а не действие, и почти никогда не употребляются в continuous: **know**, **like**, **want**, **understand**, **need**. Говорят *I **know** the answer*, а не *I am knowing*. Знаменитый рекламный слоган *I'm lovin' it* нарочно нарушает это правило, чтобы звучать свежо и по-разговорному.`,
    ),
    ask(2, {
      en: ["Choose the correct sentence.", ["I am knowing his name.", "I know his name.", "I knowing his name."], "Know is a state verb: present simple."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["I am knowing his name.", "I know his name.", "I knowing his name."], "Know-ը վիճակի բայ է՝ present simple։"],
      ru: ["Выбери правильное предложение.", ["I am knowing his name.", "I know his name.", "I knowing his name."], "Know — глагол состояния: present simple."],
    }),
  ],
  "articles-a-an-the": [
    "forms mode=compare cols=article3 a_dog:the_sun:cats_in_general an_hour:the_biggest_city:breakfast a_teacher:the_USA:Armenia",
    closer(
      `**The most common word in English.** In any long English text the most frequent word is **the**: it makes up about one word in every sixteen. Russian has no articles at all, which is why Russian speakers often forget them. Armenian has them, but in a different place: the definite article is an ending, **-ը** or **-ն** (*գիրքը* = *the book*), and **մի** before a noun works like **a** (*մի գիրք* = *a book*).

**Sound, not letter.** **A** or **an** depends on the first **sound**, not the first letter: **an hour** (the h is silent), but **a university** (it starts with a "yu" sound). Look at the table: one thing you mention for the first time, one thing everybody knows, and things in general with no article.`,
      `**Անգլերենի ամենահաճախ բառը։** Ցանկացած երկար անգլերեն տեքստում ամենահաճախ հանդիպող բառը **the**-ն է՝ մոտավորապես ամեն տասնվեց բառից մեկը։ Ռուսերենը հոդեր ընդհանրապես չունի, ահա թե ինչու ռուսախոսները հաճախ մոռանում են դրանք։ Հայերենն ունի, բայց այլ տեղում․ որոշիչ հոդը վերջավորություն է՝ **-ը** կամ **-ն** (*գիրքը* = *the book*), իսկ գոյականից առաջ **մի**-ն աշխատում է ինչպես **a**-ն (*մի գիրք* = *a book*)։

**Հնչյուն, ոչ թե տառ։** **A**, թե **an**, կախված է առաջին **հնչյունից**, ոչ թե առաջին տառից՝ **an hour** (h-ն չի արտասանվում), բայց **a university** (սկսվում է «յու» հնչյունով)։ Նայիր աղյուսակին՝ մի բան, որ նշում ես առաջին անգամ, մի բան, որ բոլորը գիտեն, և բաներ ընդհանրապես՝ առանց հոդի։`,
      `**Самое частое слово английского.** В любом длинном английском тексте самое частое слово — **the**: примерно каждое шестнадцатое слово. В русском артиклей нет вовсе, поэтому русскоязычные часто их забывают. В армянском они есть, но в другом месте: определённый артикль — это окончание **-ը** или **-ն** (*գիրքը* = *the book*), а **մի** перед существительным работает как **a** (*մի գիրք* = *a book*).

**Звук, а не буква.** **A** или **an** зависит от первого **звука**, а не первой буквы: **an hour** (h не читается), но **a university** (начинается со звука «ю»). Посмотри на таблицу: то, что упоминаешь впервые, то, что все знают, и вещи вообще — без артикля.`,
    ),
    ask(3, {
      en: ["Choose the correct phrase.", ["a hour", "an university", "an hour"], "The h in hour is silent, so it starts with a vowel sound: an hour."],
      hy: ["Ընտրիր ճիշտ արտահայտությունը։", ["a hour", "an university", "an hour"], "Hour-ի h-ն չի արտասանվում, բառը սկսվում է ձայնավոր հնչյունով՝ an hour։"],
      ru: ["Выбери правильное сочетание.", ["a hour", "an university", "an hour"], "H в hour не читается, слово начинается с гласного звука: an hour."],
    }),
  ],
  "classroom-english-5": [
    "sentence mode=order Could you repeat that , please ?",
    closer(
      `**Please and thank you do a lot of work.** In English a request without **please** can sound like an order, even when the words are polite. Armenian has **խնդրում եմ** and Russian **пожалуйста**, but English speakers use **please** much more often, even with friends and family.

**Questions instead of orders.** English likes to turn a request into a question: *Could you repeat that, please?* instead of *Repeat that.* The longer the question, the more polite it sounds: *Sorry, could you say that again, please?* Put the words above in order; notice where the comma goes.`,
      `**Please-ն ու thank you-ն շատ գործ են անում։** Անգլերենում առանց **please**-ի խնդրանքը կարող է հրաման հնչել, նույնիսկ եթե բառերը քաղաքավարի են։ Հայերենն ունի **խնդրում եմ**, ռուսերենը՝ **пожалуйста**, բայց անգլիախոսները **please** ասում են շատ ավելի հաճախ, նույնիսկ ընկերների և ընտանիքի հետ։

**Հարցեր՝ հրամանների փոխարեն։** Անգլերենը սիրում է խնդրանքը դարձնել հարց՝ *Could you repeat that, please?*, ոչ թե *Repeat that.*։ Որքան երկար է հարցը, այնքան ավելի քաղաքավարի է հնչում՝ *Sorry, could you say that again, please?*։ Դասավորիր վերևի բառերը, ուշադրություն դարձրու, թե որտեղ է գնում ստորակետը։`,
      `**Please и thank you делают много работы.** В английском просьба без **please** может звучать как приказ, даже если слова вежливые. В армянском есть **խնդրում եմ**, в русском **пожалуйста**, но англоговорящие говорят **please** гораздо чаще, даже друзьям и родным.

**Вопросы вместо приказов.** Английский любит превращать просьбу в вопрос: *Could you repeat that, please?* вместо *Repeat that.* Чем длиннее вопрос, тем вежливее он звучит: *Sorry, could you say that again, please?* Расставь слова выше по порядку и обрати внимание, куда идёт запятая.`,
    ),
    ask(2, {
      en: ["Which request is the most polite?", ["Repeat that.", "Could you repeat that, please?", "You repeat that."], "A question with could and please is the most polite."],
      hy: ["Ո՞ր խնդրանքն է ամենաքաղաքավարին։", ["Repeat that.", "Could you repeat that, please?", "You repeat that."], "Could-ով և please-ով հարցն ամենաքաղաքավարին է։"],
      ru: ["Какая просьба самая вежливая?", ["Repeat that.", "Could you repeat that, please?", "You repeat that."], "Вопрос с could и please — самый вежливый."],
    }),
  ],
  "countries-nationalities": [
    "forms mode=compare cols=nation Armenia:Armenian:Armenian the_UK:British:English China:Chinese:Chinese France:French:French Brazil:Brazilian:Portuguese",
    closer(
      `**Always a capital letter.** In English, countries, nationalities and languages all start with a capital: *Armenia*, *an Armenian girl*, *she speaks Armenian*. Armenian and Russian write nationalities and languages with a small letter: **հայ**, **հայերեն**, **армянин**, **армянский язык**. Only the country gets a capital: **Հայաստան**, **Армения**.

**Two names for one country.** Armenians call their country **Hayastan**, but most other languages say **Armenia**. That name is very old: it appears in the Behistun inscription of the Persian king Darius I, carved into a cliff about 2,500 years ago. Notice in the table that a nationality and a language are not always the same word: *Brazilian* people speak *Portuguese*.`,
      `**Միշտ մեծատառով։** Անգլերենում երկրները, ազգությունները և լեզուները սկսվում են մեծատառով՝ *Armenia*, *an Armenian girl*, *she speaks Armenian*։ Հայերենն ու ռուսերենն ազգություններն ու լեզուները գրում են փոքրատառով՝ **հայ**, **հայերեն**, **армянин**, **армянский язык**։ Մեծատառ է ստանում միայն երկիրը՝ **Հայաստան**, **Армения**։

**Մեկ երկիր՝ երկու անուն։** Հայերն իրենց երկիրը կոչում են **Հայաստան**, իսկ այլ լեզուների մեծ մասն ասում է **Armenia**։ Այդ անունը շատ հին է․ այն հանդիպում է պարսից Դարեհ I արքայի Բեհիսթունյան արձանագրության մեջ, որը մոտ 2500 տարի առաջ փորագրվել է ժայռի վրա։ Աղյուսակում նկատիր, որ ազգությունն ու լեզուն միշտ չէ, որ նույն բառն են՝ *Brazilian* մարդիկ խոսում են *Portuguese*։`,
      `**Всегда с заглавной буквы.** В английском страны, национальности и языки пишутся с заглавной: *Armenia*, *an Armenian girl*, *she speaks Armenian*. Армянский и русский пишут национальности и языки со строчной: **հայ**, **հայերեն**, **армянин**, **армянский язык**. Заглавную получает только страна: **Հայաստան**, **Армения**.

**Два имени одной страны.** Армяне называют свою страну **Hayastan**, а большинство других языков говорит **Armenia**. Это имя очень древнее: оно есть в Бехистунской надписи персидского царя Дария I, высеченной на скале около 2500 лет назад. Обрати внимание в таблице: национальность и язык не всегда одно слово — *Brazilian* люди говорят на *Portuguese*.`,
    ),
    ask(1, {
      en: ["Choose the correct sentence.", ["My friend is Armenian.", "My friend is armenian.", "My Friend is armenian."], "Nationalities always take a capital letter in English."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["My friend is Armenian.", "My friend is armenian.", "My Friend is armenian."], "Անգլերենում ազգությունները միշտ գրվում են մեծատառով։"],
      ru: ["Выбери правильное предложение.", ["My friend is Armenian.", "My friend is armenian.", "My Friend is armenian."], "В английском национальности всегда пишутся с заглавной."],
    }),
  ],
  "english-speaking-world": [
    "forms mode=compare cols=brame lift:elevator autumn:fall football:soccer colour:color centre:center",
    closer(
      `**One man changed American spelling.** In 1828 Noah Webster published *An American Dictionary of the English Language*. He wanted spelling to be simpler and more "American", so he dropped letters: **colour** became **color**, **centre** became **center**, **defence** became **defense**. Britain kept the old spellings, which is why both exist today.

**Many Englishes.** English is the first language of about 400 million people, in the UK, the USA, Canada, Australia, New Zealand and Ireland, and it is an official language in India, Nigeria, Singapore and many other countries. Far more people speak it as a second language than as a first. Choose one side of the table above and stay with it in your writing: do not mix *colour* and *center* in one text.`,
      `**Մեկ մարդ փոխեց ամերիկյան ուղղագրությունը։** 1828 թվականին Նոյ Վեբստերը հրատարակեց *An American Dictionary of the English Language*։ Նա ուզում էր, որ ուղղագրությունը լինի ավելի պարզ և ավելի «ամերիկյան», ուստի տառեր հանեց՝ **colour**-ը դարձավ **color**, **centre**-ը՝ **center**, **defence**-ը՝ **defense**։ Բրիտանիան պահեց հին ուղղագրությունը, ահա թե ինչու այսօր երկուսն էլ կան։

**Շատ անգլերեններ։** Անգլերենը մոտ 400 միլիոն մարդու մայրենի լեզուն է Միացյալ Թագավորությունում, ԱՄՆ-ում, Կանադայում, Ավստրալիայում, Նոր Զելանդիայում և Իռլանդիայում, և պաշտոնական լեզու է Հնդկաստանում, Նիգերիայում, Սինգապուրում և շատ այլ երկրներում։ Այն որպես երկրորդ լեզու խոսողները շատ ավելի են, քան մայրենի լեզու խոսողները։ Ընտրիր վերևի աղյուսակի մի կողմը և գրելիս մնա դրան հավատարիմ․ մի տեքստում մի խառնիր *colour* և *center*։`,
      `**Один человек изменил американское написание.** В 1828 году Ной Уэбстер издал *An American Dictionary of the English Language*. Он хотел, чтобы написание было проще и «американее», и убрал буквы: **colour** стало **color**, **centre** — **center**, **defence** — **defense**. Британия сохранила старое написание, поэтому сегодня существуют оба.

**Много английских.** Английский — родной язык примерно 400 миллионов человек в Великобритании, США, Канаде, Австралии, Новой Зеландии и Ирландии, и официальный язык в Индии, Нигерии, Сингапуре и многих других странах. Говорящих на нём как на втором языке гораздо больше, чем носителей. Выбери одну сторону таблицы выше и держись её в письме: не смешивай *colour* и *center* в одном тексте.`,
    ),
    ask(3, {
      en: ["Which word is American English?", ["autumn", "lift", "color"], "Webster dropped the u: color is American, colour is British."],
      hy: ["Ո՞ր բառն է ամերիկյան անգլերեն։", ["autumn", "lift", "color"], "Վեբստերը հանեց u-ն՝ color-ը ամերիկյան է, colour-ը՝ բրիտանական։"],
      ru: ["Какое слово американское?", ["autumn", "lift", "color"], "Уэбстер убрал u: color — американское, colour — британское."],
    }),
  ],
  comparatives: [
    "sentence mode=order keep=1 Yerevan is bigger than Gyumri .",
    closer(
      `**One word for all adjectives.** Armenian makes every comparative with **ավելի** (*ավելի մեծ*), and Russian mostly with an ending (*больше*, *быстрее*). English uses both ways: short adjectives take **-er** (*bigger*, *faster*), long ones take **more** (*more interesting*). Never use both together: *more bigger* is a mistake.

**Than and then were once one word.** In Old English one word, **þanne**, meant both "than" and "then". The two spellings only separated about three hundred years ago, and even today people mix them up in writing. Remember: **than** compares (*bigger than*), **then** is about time (*and then we left*).`,
      `**Մեկ բառ՝ բոլոր ածականների համար։** Հայերենը յուրաքանչյուր համեմատական կազմում է **ավելի**-ով (*ավելի մեծ*), ռուսերենը հիմնականում վերջավորությամբ (*больше*, *быстрее*)։ Անգլերենը գործածում է երկու եղանակն էլ՝ կարճ ածականները ստանում են **-er** (*bigger*, *faster*), երկարները՝ **more** (*more interesting*)։ Երբեք մի գործածիր երկուսը միասին՝ *more bigger*-ը սխալ է։

**Than-ն ու then-ը ժամանակին մեկ բառ էին։** Հին անգլերենում մեկ բառ՝ **þanne**, նշանակում էր և՛ «than», և՛ «then»։ Երկու ուղղագրությունները բաժանվեցին միայն մոտ երեք հարյուր տարի առաջ, և մինչ օրս մարդիկ գրելիս շփոթում են դրանք։ Հիշիր՝ **than**-ը համեմատում է (*bigger than*), **then**-ը ժամանակի մասին է (*and then we left*)։`,
      `**Одно слово для всех прилагательных.** Армянский образует любую сравнительную степень с **ավելի** (*ավելի մեծ*), русский — чаще окончанием (*больше*, *быстрее*). Английский использует оба способа: короткие прилагательные получают **-er** (*bigger*, *faster*), длинные — **more** (*more interesting*). Никогда не используй оба сразу: *more bigger* — ошибка.

**Than и then когда-то были одним словом.** В древнеанглийском одно слово **þanne** значило и «чем», и «потом». Два написания разошлись лишь около трёхсот лет назад, и до сих пор люди путают их на письме. Запомни: **than** сравнивает (*bigger than*), **then** — о времени (*and then we left*).`,
    ),
    ask(2, {
      en: ["Choose the correct sentence.", ["My bag is more heavier than yours.", "My bag is heavier than yours.", "My bag is heavier then yours."], "Short adjective: -er, and compare with than."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["My bag is more heavier than yours.", "My bag is heavier than yours.", "My bag is heavier then yours."], "Կարճ ածական՝ -er, համեմատում ենք than-ով։"],
      ru: ["Выбери правильное предложение.", ["My bag is more heavier than yours.", "My bag is heavier than yours.", "My bag is heavier then yours."], "Короткое прилагательное: -er, а сравниваем с than."],
    }),
  ],
  superlatives: [
    "forms mode=compare cols=degrees high:higher:the_highest good:better:the_best bad:worse:the_worst far:farther:the_farthest interesting:more_interesting:the_most_interesting",
    closer(
      `**The highest mountain in Armenia.** **Aragats** is the highest mountain in Armenia today, at 4,090 metres. **Ararat**, which you can see from Yerevan, is higher, at 5,137 metres, but it is now in Turkey. And **Everest**, 8,849 metres, is the highest mountain in the world. Try saying it in English: *Ararat is higher than Aragats, but Everest is the highest.*

**Always with the.** A superlative almost always takes **the**: *the best*, *the most interesting*. The reason is simple: there is only one "best", and **the** marks a thing everybody can identify. Armenian uses **ամենա-** (*ամենաբարձր*) and Russian **самый** or **-ейший** (*самый высокий*, *высочайший*). The three most common adjectives in English, **good**, **bad** and **far**, are the irregular ones: learn them by heart.`,
      `**Հայաստանի ամենաբարձր լեռը։** **Արագածը** այսօր Հայաստանի ամենաբարձր լեռն է՝ 4090 մետր։ **Արարատը**, որ երևում է Երևանից, ավելի բարձր է՝ 5137 մետր, բայց այժմ գտնվում է Թուրքիայում։ Իսկ **Էվերեստը**՝ 8849 մետր, աշխարհի ամենաբարձր լեռն է։ Փորձիր ասել անգլերեն՝ *Ararat is higher than Aragats, but Everest is the highest.*

**Միշտ the-ով։** Գերադրականը գրեթե միշտ ստանում է **the**՝ *the best*, *the most interesting*։ Պատճառը պարզ է․ «լավագույնը» մեկն է, իսկ **the**-ն նշում է այն, ինչ բոլորը կարող են ճանաչել։ Հայերենը գործածում է **ամենա-** (*ամենաբարձր*), ռուսերենը՝ **самый** կամ **-ейший** (*самый высокий*, *высочайший*)։ Անգլերենի ամենատարածված երեք ածականները՝ **good**, **bad** և **far**, անկանոն են․ սովորիր դրանք անգիր։`,
      `**Самая высокая гора Армении.** **Арагац** — самая высокая гора современной Армении, 4090 метров. **Арарат**, который виден из Еревана, выше, 5137 метров, но сейчас он в Турции. А **Эверест**, 8849 метров, — самая высокая гора мира. Попробуй сказать по-английски: *Ararat is higher than Aragats, but Everest is the highest.*

**Всегда с the.** Превосходная степень почти всегда берёт **the**: *the best*, *the most interesting*. Причина проста: «лучший» только один, а **the** отмечает то, что все могут узнать. Армянский использует **ամենա-** (*ամենաբարձր*), русский — **самый** или **-ейший** (*самый высокий*, *высочайший*). Три самых частых прилагательных английского, **good**, **bad** и **far**, неправильные: выучи их наизусть.`,
    ),
    ask(1, {
      en: ["Complete: «It is ___ day of my life!»", ["the best", "the goodest", "the most good"], "Good is irregular: good, better, the best."],
      hy: ["Լրացրու՝ «It is ___ day of my life!»", ["the best", "the goodest", "the most good"], "Good-ն անկանոն է՝ good, better, the best։"],
      ru: ["Дополни: «It is ___ day of my life!»", ["the best", "the goodest", "the most good"], "Good — неправильное: good, better, the best."],
    }),
  ],
  "describing-people-5": [
    "sentence mode=order She is very funny but quite shy .",
    closer(
      `**Very, quite, a bit.** Little words before an adjective change how strong it is: **a bit** shy < **quite** shy < **very** shy < **really** shy. Use **a bit** mostly with negative words (*a bit lazy*), not with positive ones: *a bit kind* sounds strange. Armenian has **մի քիչ**, **բավական**, **շատ**; Russian **немного**, **довольно**, **очень**.

**An honest friend.** **Honest** starts with the letter h, but the h is silent, so we say **an honest** person. The same is true of **hour** and **honour**. Words from French often lost their h sound in English. Put the words above in order, then describe a friend with two adjectives and **but**.`,
      `**Very, quite, a bit։** Ածականից առաջ փոքր բառերը փոխում են նրա ուժը՝ **a bit** shy < **quite** shy < **very** shy < **really** shy։ **A bit**-ը գործածիր հիմնականում բացասական բառերի հետ (*a bit lazy*), ոչ թե դրականների՝ *a bit kind*-ը տարօրինակ է հնչում։ Հայերենն ունի **մի քիչ**, **բավական**, **շատ**, ռուսերենը՝ **немного**, **довольно**, **очень**։

**An honest friend։** **Honest**-ը սկսվում է h տառով, բայց h-ն չի արտասանվում, ուստի ասում ենք **an honest** person։ Նույնն է **hour**-ի և **honour**-ի դեպքում։ Ֆրանսերենից եկած բառերն անգլերենում հաճախ կորցրել են իրենց h հնչյունը։ Դասավորիր վերևի բառերը, ապա նկարագրիր ընկերոջդ երկու ածականով և **but**-ով։`,
      `**Very, quite, a bit.** Маленькие слова перед прилагательным меняют его силу: **a bit** shy < **quite** shy < **very** shy < **really** shy. **A bit** ставь в основном с отрицательными словами (*a bit lazy*), а не с положительными: *a bit kind* звучит странно. В армянском есть **մի քիչ**, **բավական**, **շատ**, в русском — **немного**, **довольно**, **очень**.

**An honest friend.** **Honest** начинается с буквы h, но h не читается, поэтому говорят **an honest** person. То же с **hour** и **honour**. Слова из французского часто теряли в английском звук h. Расставь слова выше по порядку, а потом опиши друга двумя прилагательными и **but**.`,
    ),
    ask(2, {
      en: ["Choose the correct phrase.", ["a honest boy", "an honest boy", "an honest boys"], "The h in honest is silent: an honest boy."],
      hy: ["Ընտրիր ճիշտ արտահայտությունը։", ["a honest boy", "an honest boy", "an honest boys"], "Honest-ի h-ն չի արտասանվում՝ an honest boy։"],
      ru: ["Выбери правильное сочетание.", ["a honest boy", "an honest boy", "an honest boys"], "H в honest не читается: an honest boy."],
    }),
  ],
  "my-country": [
    "sentence mode=order keep=1 Armenia is famous for its old churches .",
    closer(
      `**Some facts in English.** Armenia covers about 29,700 square kilometres and has about three million people. In 301 it became the first country to adopt Christianity as its state religion, which is why it has so many old churches and monasteries, such as **Geghard** and **Haghpat**, both on the UNESCO World Heritage list. Practise saying numbers: *about three million people*, *in three hundred and one*.

**Its, not it's.** In the sentence above, **its** means "belonging to it": *Armenia is famous for **its** churches*. **It's** with an apostrophe means *it is*: *It's a small country*. Armenian uses **իր** and Russian **свой** in both cases, so English learners often mix them up.`,
      `**Մի քանի փաստ անգլերենով։** Հայաստանի տարածքը մոտ 29 700 քառակուսի կիլոմետր է, բնակչությունը՝ մոտ երեք միլիոն։ 301 թվականին Հայաստանն առաջին երկիրն էր, որ քրիստոնեությունն ընդունեց որպես պետական կրոն, ահա թե ինչու այնքան շատ հին եկեղեցիներ և վանքեր ունի, ինչպես **Գեղարդը** և **Հաղպատը**, որոնք երկուսն էլ ընդգրկված են ՅՈՒՆԵՍԿՕ-ի Համաշխարհային ժառանգության ցուցակում։ Վարժվիր թվեր ասել՝ *about three million people*, *in three hundred and one*։

**Its, ոչ թե it's։** Վերևի նախադասության մեջ **its** նշանակում է «նրա»՝ *Armenia is famous for **its** churches*։ Ապաթարցով **it's**-ը նշանակում է *it is*՝ *It's a small country*։ Հայերենն երկու դեպքում էլ գործածում է **իր**, ռուսերենը՝ **свой**, ուստի սովորողները հաճախ շփոթում են դրանք։`,
      `**Немного фактов по-английски.** Площадь Армении около 29 700 квадратных километров, население — около трёх миллионов. В 301 году Армения стала первой страной, принявшей христианство как государственную религию, поэтому в ней так много старых церквей и монастырей, например **Гегард** и **Ахпат** — оба в списке Всемирного наследия ЮНЕСКО. Потренируйся говорить числа: *about three million people*, *in three hundred and one*.

**Its, а не it's.** В предложении выше **its** значит «его, её»: *Armenia is famous for **its** churches*. **It's** с апострофом значит *it is*: *It's a small country*. Армянский в обоих случаях использует **իր**, русский — **свой**, поэтому их часто путают.`,
    ),
    ask(1, {
      en: ["Complete: «Yerevan is famous for ___ cafés.»", ["its", "it's", "it"], "Belonging to it: its, with no apostrophe."],
      hy: ["Լրացրու՝ «Yerevan is famous for ___ cafés.»", ["its", "it's", "it"], "«Նրա»՝ its, առանց ապաթարցի։"],
      ru: ["Дополни: «Yerevan is famous for ___ cafés.»", ["its", "it's", "it"], "Принадлежность: its, без апострофа."],
    }),
  ],
  "past-simple-regular-5": [
    "sentence mode=order keep=1 Yesterday I finished my homework at six .",
    closer(
      `**Ago comes after.** **Ago** always follows the time phrase: *two days **ago***, *a year **ago***. Armenian and Russian put their word in the same place: «երկու օր **առաջ**», «два дня **назад**». So this is one thing all three languages agree on.

**One ending, three sounds.** The **-ed** ending is spelt the same but said three ways: **/t/** in *finished*, *walked*; **/d/** in *played*, *cleaned*; and **/ɪd/**, an extra syllable, in *wanted*, *needed*. The extra syllable appears only after **t** or **d**. Say the sentence above aloud and listen to *finished*: it has two syllables, not three.`,
      `**Ago-ն գալիս է հետո։** **Ago**-ն միշտ հաջորդում է ժամանակի արտահայտությանը՝ *two days **ago***, *a year **ago***։ Հայերենն ու ռուսերենն իրենց բառը դնում են նույն տեղում՝ «երկու օր **առաջ**», «два дня **назад**»։ Սա մի բան է, որում երեք լեզուներն էլ համաձայն են։

**Մեկ վերջավորություն՝ երեք հնչյուն։** **-ed** վերջավորությունը գրվում է նույն կերպ, բայց արտասանվում է երեք ձևով՝ **/t/** *finished*, *walked* բառերում, **/d/** *played*, *cleaned* բառերում, և **/ɪd/**՝ լրացուցիչ վանկ, *wanted*, *needed* բառերում։ Լրացուցիչ վանկը հայտնվում է միայն **t**-ից կամ **d**-ից հետո։ Բարձրաձայն ասա վերևի նախադասությունը և լսիր *finished*-ը․ այն երկու վանկ ունի, ոչ թե երեք։`,
      `**Ago идёт после.** **Ago** всегда стоит после выражения времени: *two days **ago***, *a year **ago***. Армянский и русский ставят своё слово туда же: «երկու օր **առաջ**», «два дня **назад**». Здесь все три языка согласны.

**Одно окончание, три звука.** Окончание **-ed** пишется одинаково, но читается тремя способами: **/t/** в *finished*, *walked*; **/d/** в *played*, *cleaned*; и **/ɪd/** — лишний слог — в *wanted*, *needed*. Лишний слог появляется только после **t** или **d**. Прочитай предложение выше вслух и послушай *finished*: в нём два слога, а не три.`,
    ),
    ask(3, {
      en: ["In which verb is -ed an extra syllable?", ["walked", "played", "wanted"], "After t or d, -ed is said /ɪd/: want-ed."],
      hy: ["Ո՞ր բայում է -ed-ը լրացուցիչ վանկ։", ["walked", "played", "wanted"], "T-ից կամ d-ից հետո -ed-ն արտասանվում է /ɪd/՝ want-ed։"],
      ru: ["В каком глаголе -ed — лишний слог?", ["walked", "played", "wanted"], "После t или d -ed читается /ɪd/: want-ed."],
    }),
  ],
  "irregular-verbs-1": [
    "forms mode=verbs buy:bought:bought bring:brought:brought think:thought:thought teach:taught:taught catch:caught:caught sit:sat:sat",
    closer(
      `**A family that rhymes.** Look at the first five verbs above: their past forms all end in **-ought** or **-aught** and sound the same, /ɔːt/. Learning verbs in such sound families is much easier than learning a random list. English has about 200 irregular verbs in everyday use, but the most common 50 cover almost everything you will say.

**Irregular verbs can become regular.** Long ago the past of **help** was **holp**, and the past of **climb** was **clomb**. Over the centuries people started saying *helped* and *climbed*, and the old forms disappeared. Verbs that we use very often, like **be**, **go** and **have**, stay irregular because we hear them all the time.`,
      `**Ընտանիք, որ հանգավորվում է։** Նայիր վերևի առաջին հինգ բային․ նրանց անցյալ ձևերը բոլորն ավարտվում են **-ought** կամ **-aught**-ով և հնչում են նույն կերպ՝ /ɔːt/։ Բայերն այսպիսի հնչյունային ընտանիքներով սովորելը շատ ավելի հեշտ է, քան պատահական ցուցակով։ Անգլերենն առօրյայում ունի մոտ 200 անկանոն բայ, բայց ամենատարածված 50-ը ծածկում են գրեթե այն ամենը, ինչ կասես։

**Անկանոն բայերը կարող են կանոնավոր դառնալ։** Վաղուց **help**-ի անցյալը **holp** էր, իսկ **climb**-ինը՝ **clomb**։ Դարերի ընթացքում մարդիկ սկսեցին ասել *helped* և *climbed*, և հին ձևերը վերացան։ Այն բայերը, որ շատ հաճախ ենք գործածում, ինչպես **be**, **go**, **have**, մնում են անկանոն, որովհետև դրանք անընդհատ լսում ենք։`,
      `**Семья, которая рифмуется.** Посмотри на первые пять глаголов выше: их прошедшие формы все кончаются на **-ought** или **-aught** и звучат одинаково — /ɔːt/. Учить глаголы такими звуковыми семьями гораздо легче, чем случайным списком. В английском около 200 неправильных глаголов в повседневном употреблении, но 50 самых частых покрывают почти всё, что ты будешь говорить.

**Неправильные глаголы могут стать правильными.** Давным-давно прошедшим от **help** было **holp**, а от **climb** — **clomb**. С веками люди стали говорить *helped* и *climbed*, и старые формы исчезли. Глаголы, которые мы употребляем очень часто, вроде **be**, **go** и **have**, остаются неправильными, потому что мы слышим их постоянно.`,
    ),
    ask(2, {
      en: ["What is the past of teach?", ["teached", "taught", "thought"], "Teach – taught – taught. Thought is the past of think."],
      hy: ["Ո՞րն է teach-ի անցյալը։", ["teached", "taught", "thought"], "Teach – taught – taught։ Thought-ը think-ի անցյալն է։"],
      ru: ["Какое прошедшее у teach?", ["teached", "taught", "thought"], "Teach – taught – taught. Thought — прошедшее от think."],
    }),
  ],
  "past-questions": [
    "sentence mode=order Where did you go yesterday ?",
    closer(
      `**Did does the work.** In a past question, **did** carries the past, so the main verb goes back to its basic form: *Where **did** you **go**?*, never *Where did you went?* One past marker is enough. Armenian and Russian need no helper: «Ո՞ւր գնացիր երեկ», «Куда ты ходил вчера?».

**Shakespeare did not need do.** Four hundred years ago English made questions just by changing the word order: *What say you?*, *Came he here?* You can still meet these forms in old books and plays. The helper **do** slowly took over, and today it is required in almost every question without **be**, **have got** or a modal verb.`,
      `**Did-ն է կատարում աշխատանքը։** Անցյալի հարցում **did**-ն է կրում անցյալը, ուստի հիմնական բայը վերադառնում է իր սկզբնական ձևին՝ *Where **did** you **go**?*, երբեք՝ *Where did you went?*։ Անցյալի մեկ նշանը բավական է։ Հայերենն ու ռուսերենն օժանդակ բայի կարիք չունեն՝ «Ո՞ւր գնացիր երեկ», «Куда ты ходил вчера?»։

**Շեքսպիրին do պետք չէր։** Չորս հարյուր տարի առաջ անգլերենը հարց էր կազմում պարզապես բառերի կարգը փոխելով՝ *What say you?*, *Came he here?*։ Այս ձևերին այսօր էլ կարող ես հանդիպել հին գրքերում և պիեսներում։ Օժանդակ **do**-ն աստիճանաբար տիրեց, և այսօր այն պարտադիր է գրեթե ամեն հարցում, որտեղ չկա **be**, **have got** կամ եղանակավորող բայ։`,
      `**Всю работу делает did.** В вопросе о прошлом прошедшее время несёт **did**, поэтому основной глагол возвращается в начальную форму: *Where **did** you **go**?*, а не *Where did you went?* Одной метки прошлого достаточно. Армянскому и русскому помощник не нужен: «Ո՞ւր գնացիր երեկ», «Куда ты ходил вчера?».

**Шекспиру do было не нужно.** Четыреста лет назад английский строил вопросы, просто меняя порядок слов: *What say you?*, *Came he here?* Эти формы ещё встречаются в старых книгах и пьесах. Вспомогательный **do** постепенно победил, и сегодня он обязателен почти в каждом вопросе без **be**, **have got** или модального глагола.`,
    ),
    ask(1, {
      en: ["Choose the correct question.", ["Did you see the film?", "Did you saw the film?", "You did see the film?"], "Did carries the past: the main verb is see."],
      hy: ["Ընտրիր ճիշտ հարցը։", ["Did you see the film?", "Did you saw the film?", "You did see the film?"], "Did-ն է կրում անցյալը՝ հիմնական բայը see է։"],
      ru: ["Выбери правильный вопрос.", ["Did you see the film?", "Did you saw the film?", "You did see the film?"], "Прошедшее несёт did: основной глагол — see."],
    }),
  ],
  "last-weekend": [
    "sentence mode=order First I got up late , then I had breakfast .",
    closer(
      `**Words that tie a story together.** **First**, **then**, **after that**, **later** and **finally** tell the listener what happened in what order. Without them a story is just a list. Armenian uses **սկզբում**, **հետո**, **վերջում**; Russian **сначала**, **потом**, **в конце**. One story usually needs only one **finally**, at the very end.

**Weekend or week-end?** The word **weekend** first appeared in England in the 1870s, after factory workers had started getting Saturday afternoon off. At first it was written as two words, then with a hyphen, and now as one word. The British say **at the weekend**, Americans **on the weekend**: both are correct.`,
      `**Բառեր, որ պատմությունը կապում են։** **First**, **then**, **after that**, **later** և **finally** ունկնդրին ասում են, թե ինչ ինչից հետո եղավ։ Առանց դրանց պատմությունը պարզապես ցուցակ է։ Հայերենը գործածում է **սկզբում**, **հետո**, **վերջում**, ռուսերենը՝ **сначала**, **потом**, **в конце**։ Մեկ պատմության մեջ սովորաբար պետք է միայն մեկ **finally**՝ ամենավերջում։

**Weekend, թե՞ week-end։** **Weekend** բառն առաջին անգամ հայտնվեց Անգլիայում 1870-ական թվականներին, այն բանից հետո, երբ գործարանի բանվորները սկսեցին ազատ լինել շաբաթ կեսօրից հետո։ Սկզբում այն գրվում էր երկու բառով, հետո՝ գծիկով, իսկ այժմ՝ մեկ բառով։ Բրիտանացիներն ասում են **at the weekend**, ամերիկացիները՝ **on the weekend**․ երկուսն էլ ճիշտ են։`,
      `**Слова, которые связывают рассказ.** **First**, **then**, **after that**, **later** и **finally** говорят слушателю, что за чем случилось. Без них рассказ — просто список. Армянский использует **սկզբում**, **հետո**, **վերջում**, русский — **сначала**, **потом**, **в конце**. В одном рассказе обычно нужно только одно **finally** — в самом конце.

**Weekend или week-end?** Слово **weekend** впервые появилось в Англии в 1870-х, после того как рабочим фабрик стали давать свободную субботу после обеда. Сначала его писали двумя словами, потом через дефис, а теперь одним словом. Британцы говорят **at the weekend**, американцы — **on the weekend**: оба варианта правильны.`,
    ),
    ask(3, {
      en: ["Which word ends a story?", ["First", "Then", "Finally"], "Finally marks the last event."],
      hy: ["Ո՞ր բառով է ավարտվում պատմությունը։", ["First", "Then", "Finally"], "Finally-ն նշում է վերջին իրադարձությունը։"],
      ru: ["Каким словом заканчивают рассказ?", ["First", "Then", "Finally"], "Finally отмечает последнее событие."],
    }),
  ],
  "famous-people": [
    "forms mode=compare cols=when 1867:born_in_Warsaw 1891:moved_to_Paris 1903:Nobel_Prize_in_Physics 1911:Nobel_Prize_in_Chemistry 1934:died",
    closer(
      `**A life in dates.** The table shows the life of **Marie Curie**, the first person to win two Nobel Prizes and still the only one to win them in two different sciences. When you tell a life story in English, use **in** with years (*in 1867*), **was born** for birth (never *is born* about the past), and the past simple for the rest: *she moved*, *she won*, *she died*.

**A famous Armenian painter.** **Ivan Aivazovsky**, the great painter of the sea, was born **Hovhannes Ayvazyan** in Feodosia in 1817 and painted about 6,000 pictures. His brother **Gabriel** became an archbishop of the Armenian Church and a historian. Try writing three sentences about him, using the table as a model.`,
      `**Կյանքը՝ թվականներով։** Աղյուսակը ցույց է տալիս **Մարի Կյուրիի** կյանքը․ նա առաջին մարդն էր, որ ստացավ երկու Նոբելյան մրցանակ, և մինչ օրս միակն է, որ ստացել է դրանք երկու տարբեր գիտություններում։ Երբ անգլերենով կյանքի պատմություն ես պատմում, տարեթվերի հետ գործածիր **in** (*in 1867*), ծննդյան համար՝ **was born** (անցյալի մասին երբեք՝ *is born*), իսկ մնացածի համար՝ past simple՝ *she moved*, *she won*, *she died*։

**Հայտնի հայ նկարիչ։** **Իվան Այվազովսկին**՝ ծովի մեծ նկարիչը, ծնվել է **Հովհաննես Այվազյան** անունով Ֆեոդոսիայում 1817 թվականին և նկարել է մոտ 6000 կտավ։ Նրա եղբայրը՝ **Գաբրիելը**, դարձավ Հայ եկեղեցու արքեպիսկոպոս և պատմաբան։ Փորձիր նրա մասին երեք նախադասություն գրել՝ աղյուսակն որպես օրինակ վերցնելով։`,
      `**Жизнь в датах.** Таблица показывает жизнь **Марии Кюри** — первого человека, получившего две Нобелевские премии, и до сих пор единственного, кто получил их в двух разных науках. Когда рассказываешь биографию по-английски, с годами используй **in** (*in 1867*), для рождения — **was born** (о прошлом никогда *is born*), а для остального — past simple: *she moved*, *she won*, *she died*.

**Знаменитый армянский художник.** **Иван Айвазовский**, великий художник моря, родился как **Ованес Айвазян** в Феодосии в 1817 году и написал около 6000 картин. Его брат **Габриэл** стал архиепископом Армянской церкви и историком. Попробуй написать о нём три предложения, взяв таблицу за образец.`,
    ),
    ask(2, {
      en: ["Choose the correct sentence.", ["Aivazovsky is born in 1817.", "Aivazovsky was born in 1817.", "Aivazovsky born on 1817."], "Birth in the past: was born, and in with years."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["Aivazovsky is born in 1817.", "Aivazovsky was born in 1817.", "Aivazovsky born on 1817."], "Ծնունդն անցյալում՝ was born, իսկ տարեթվի հետ՝ in։"],
      ru: ["Выбери правильное предложение.", ["Aivazovsky is born in 1817.", "Aivazovsky was born in 1817.", "Aivazovsky born on 1817."], "Рождение в прошлом: was born, а с годом — in."],
    }),
  ],
  "story-writing-5": [
    "tense name=past-continuous aspects=simple,continuous times=past",
    closer(
      `**Every language has a magic opening.** English fairy tales start with **Once upon a time**, Armenian ones with «**Լինում է, չի լինում**» ("there was, there was not"), and Russian ones with «**Жили-были**» ("they lived, they were"). Each phrase tells the listener: this is a story, not the news. English tales often end with **…and they lived happily ever after**.

**Background and event.** The line above shows two past tenses working together. The **past continuous** paints the background (*It **was raining** and the wind **was blowing***), and the **past simple** tells what suddenly happened (*…when somebody **knocked** at the door*). Good stories switch between the two.`,
      `**Ամեն լեզու ունի կախարդական սկիզբ։** Անգլիական հեքիաթները սկսվում են **Once upon a time**-ով, հայկականները՝ «**Լինում է, չի լինում**»-ով, ռուսականները՝ «**Жили-были**»-ով («ապրում էին, կային»)։ Ամեն արտահայտություն ունկնդրին ասում է՝ սա պատմություն է, ոչ թե լուր։ Անգլիական հեքիաթները հաճախ ավարտվում են **…and they lived happily ever after**-ով։

**Ֆոն և իրադարձություն։** Վերևի գիծը ցույց է տալիս անցյալի երկու ժամանակ, որոնք միասին են աշխատում։ **Past continuous**-ը նկարում է ֆոնը (*It **was raining** and the wind **was blowing***), իսկ **past simple**-ը պատմում է, թե ինչ եղավ հանկարծ (*…when somebody **knocked** at the door*)։ Լավ պատմություններում այս երկուսը հերթափոխվում են։`,
      `**В каждом языке есть волшебное начало.** Английские сказки начинаются с **Once upon a time**, армянские — с «**Լինում է, չի լինում**» («было, не было»), русские — с «**Жили-были**». Каждая фраза говорит слушателю: это сказка, а не новости. Английские сказки часто заканчиваются словами **…and they lived happily ever after**.

**Фон и событие.** Линия выше показывает два прошедших времени, которые работают вместе. **Past continuous** рисует фон (*It **was raining** and the wind **was blowing***), а **past simple** рассказывает, что вдруг случилось (*…when somebody **knocked** at the door*). Хорошие рассказы переключаются между ними.`,
    ),
    ask(1, {
      en: ["«I ___ a book when the phone rang.»", ["was reading", "read", "am reading"], "Background action in progress: past continuous."],
      hy: ["«I ___ a book when the phone rang.»", ["was reading", "read", "am reading"], "Ընթացքի մեջ գտնվող ֆոնային գործողություն՝ past continuous։"],
      ru: ["«I ___ a book when the phone rang.»", ["was reading", "read", "am reading"], "Фоновое действие в процессе: past continuous."],
    }),
  ],
  "must-mustnt": [
    "forms mode=compare cols=oblig3 wear_a_seat_belt:use_phones_in_class:wear_a_uniform_on_Saturday do_your_homework:run_in_the_corridor:bring_lunch_from_home",
    closer(
      `**Mustn't and don't have to are opposites.** It is easy to think they mean the same, but they do not. **You mustn't run** means running is forbidden. **You don't have to run** means you can run if you want, but it is not necessary. Armenian makes the same split: «**չի կարելի**» (forbidden) and «**պարտադիր չէ**» (not necessary); Russian too: «**нельзя**» and «**не обязательно**».

**Must has no past.** **Must** has only one form. For the past we use **had to**: *Yesterday I **had to** stay at home*. Read the table above row by row and decide which rules are true at your school.`,
      `**Mustn't-ն ու don't have to-ն հակադիր են։** Հեշտ է կարծել, թե դրանք նույնն են նշանակում, բայց այդպես չէ։ **You mustn't run** նշանակում է՝ վազել արգելված է։ **You don't have to run** նշանակում է՝ կարող ես վազել, եթե ուզում ես, բայց դա անհրաժեշտ չէ։ Հայերենը նույն բաժանումն ունի՝ «**չի կարելի**» (արգելված է) և «**պարտադիր չէ**» (անհրաժեշտ չէ), ռուսերենը նույնպես՝ «**нельзя**» և «**не обязательно**»։

**Must-ը անցյալ չունի։** **Must**-ն ունի միայն մեկ ձև։ Անցյալի համար գործածում ենք **had to**՝ *Yesterday I **had to** stay at home*։ Կարդա վերևի աղյուսակը տող առ տող և որոշիր, թե որ կանոններն են ճիշտ քո դպրոցում։`,
      `**Mustn't и don't have to — противоположности.** Легко подумать, что они значат одно и то же, но это не так. **You mustn't run** значит, что бегать запрещено. **You don't have to run** значит, что бежать можно, если хочешь, но не нужно. Армянский делит так же: «**չի կարելի**» (запрещено) и «**պարտադիր չէ**» (не обязательно); русский тоже: «**нельзя**» и «**не обязательно**».

**У must нет прошедшего.** У **must** только одна форма. Для прошлого используем **had to**: *Yesterday I **had to** stay at home*. Прочитай таблицу выше по строкам и реши, какие правила верны в твоей школе.`,
    ),
    ask(3, {
      en: ["«It's Sunday. You ___ get up early.» (it is not necessary)", ["must", "mustn't", "don't have to"], "Not necessary: don't have to."],
      hy: ["«It's Sunday. You ___ get up early.» (անհրաժեշտ չէ)", ["must", "mustn't", "don't have to"], "Անհրաժեշտ չէ՝ don't have to։"],
      ru: ["«It's Sunday. You ___ get up early.» (не нужно)", ["must", "mustn't", "don't have to"], "Не нужно: don't have to."],
    }),
  ],
  should: [
    "sentence mode=order Why don't you ask the teacher ?",
    closer(
      `**Should was once a past tense.** Historically **should** was the past form of **shall**, just as **could** is the past of **can** and **would** is the past of **will**. Over time it lost its past meaning and became a soft way to give advice: *You **should** see a doctor*. It is gentler than **must**, which sounds like an order.

**Three ways to give advice.** *You should ask the teacher.* *Why don't you ask the teacher?* *If I were you, I'd ask the teacher.* All three mean the same, but the question form sounds the friendliest. Armenian and Russian use **պետք է** / **հարկավոր է** and **стоит** / **следует**, or simply the question «Իսկ ինչո՞ւ չես հարցնում ուսուցչին», «А почему бы не спросить учителя?».`,
      `**Should-ը ժամանակին անցյալ էր։** Պատմականորեն **should**-ը **shall**-ի անցյալ ձևն էր, ինչպես **could**-ը **can**-ի անցյալն է, իսկ **would**-ը՝ **will**-ի։ Ժամանակի ընթացքում այն կորցրեց անցյալի իմաստը և դարձավ խորհուրդ տալու մեղմ եղանակ՝ *You **should** see a doctor*։ Այն ավելի մեղմ է, քան **must**-ը, որը հրամանի պես է հնչում։

**Խորհուրդ տալու երեք եղանակ։** *You should ask the teacher.* *Why don't you ask the teacher?* *If I were you, I'd ask the teacher.*։ Երեքն էլ նույնն են նշանակում, բայց հարցական ձևն ամենաընկերականն է հնչում։ Հայերենը գործածում է **պետք է** / **արժե**, ռուսերենը՝ **стоит** / **следует**, կամ պարզապես հարց՝ «Իսկ ինչո՞ւ չես հարցնում ուսուցչին», «А почему бы не спросить учителя?»։`,
      `**Should когда-то было прошедшим временем.** Исторически **should** — прошедшая форма от **shall**, так же как **could** — прошедшее от **can**, а **would** — от **will**. Со временем оно потеряло значение прошлого и стало мягким способом дать совет: *You **should** see a doctor*. Это мягче, чем **must**, которое звучит как приказ.

**Три способа дать совет.** *You should ask the teacher.* *Why don't you ask the teacher?* *If I were you, I'd ask the teacher.* Все три значат одно и то же, но вопрос звучит дружелюбнее всего. Армянский использует **պետք է** / **արժե**, русский — **стоит** / **следует** или просто вопрос «А почему бы не спросить учителя?».`,
    ),
    ask(2, {
      en: ["Your friend has a headache. Which is advice?", ["You must go home now!", "You should drink some water.", "You don't have to drink water."], "Should gives soft advice."],
      hy: ["Ընկերոջդ գլուխը ցավում է։ Ո՞րն է խորհուրդ։", ["You must go home now!", "You should drink some water.", "You don't have to drink water."], "Should-ը մեղմ խորհուրդ է տալիս։"],
      ru: ["У друга болит голова. Что из этого совет?", ["You must go home now!", "You should drink some water.", "You don't have to drink water."], "Should даёт мягкий совет."],
    }),
  ],
  "can-permission-5": [
    "forms mode=compare cols=ask3 Can_I_borrow_your_rubber:Could_I_open_the_window:May_I_come_in Can_I_have_a_biscuit:Could_I_leave_early_today:May_I_ask_a_question",
    closer(
      `**Three keys for three doors.** **Can I…?** is fine with friends and family. **Could I…?** is more polite and works with teachers and people you do not know. **May I…?** is the most formal: you hear it in shops, offices and at the classroom door. Notice that **could** here is not about the past at all: it simply sounds softer.

**How to say yes and no.** The short answers are *Yes, of course*, *Sure*, *Go ahead* and *I'm sorry, you can't*. In Armenian you ask «**Կարո՞ղ եմ**…» and in Russian «**Можно**…?» for all three levels, and make it more polite with **խնդրում եմ** or **пожалуйста**. Read the table above across a row: the same request at three levels of politeness.`,
      `**Երեք բանալի՝ երեք դռան համար։** **Can I…?**-ը հարմար է ընկերների և ընտանիքի հետ։ **Could I…?**-ն ավելի քաղաքավարի է և հարմար է ուսուցիչների ու անծանոթների հետ։ **May I…?**-ն ամենապաշտոնականն է․ այն լսում ես խանութներում, գրասենյակներում և դասարանի դռան մոտ։ Նկատիր, որ այստեղ **could**-ը ամենևին անցյալի մասին չէ․ այն պարզապես ավելի մեղմ է հնչում։

**Ինչպես ասել այո և ոչ։** Կարճ պատասխաններն են՝ *Yes, of course*, *Sure*, *Go ahead* և *I'm sorry, you can't*։ Հայերենում երեք մակարդակի համար էլ հարցնում ես «**Կարո՞ղ եմ**…», ռուսերենում՝ «**Можно**…?», և ավելի քաղաքավարի ես դարձնում **խնդրում եմ**-ով կամ **пожалуйста**-ով։ Կարդա վերևի աղյուսակի մի տողը՝ նույն խնդրանքը քաղաքավարության երեք մակարդակով։`,
      `**Три ключа для трёх дверей.** **Can I…?** подходит для друзей и семьи. **Could I…?** вежливее и годится для учителей и незнакомых людей. **May I…?** самое официальное: его слышно в магазинах, офисах и у двери класса. Заметь: **could** здесь вовсе не о прошлом, оно просто звучит мягче.

**Как сказать да и нет.** Короткие ответы: *Yes, of course*, *Sure*, *Go ahead* и *I'm sorry, you can't*. По-армянски для всех трёх уровней спрашивают «**Կարո՞ղ եմ**…», по-русски «**Можно**…?», а вежливости добавляют **խնդրում եմ** или **пожалуйста**. Прочитай строку таблицы выше: одна и та же просьба на трёх уровнях вежливости.`,
    ),
    ask(3, {
      en: ["You knock on the head teacher's door. What do you say?", ["Can I come in?", "I come in.", "May I come in?"], "A formal situation: May I…?"],
      hy: ["Թակում ես տնօրենի դուռը։ Ի՞նչ ես ասում։", ["Can I come in?", "I come in.", "May I come in?"], "Պաշտոնական իրավիճակ՝ May I…?"],
      ru: ["Ты стучишь в дверь директора. Что ты скажешь?", ["Can I come in?", "I come in.", "May I come in?"], "Официальная ситуация: May I…?"],
    }),
  ],
  "going-to": [
    "tense name=going-to",
    closer(
      `**Gonna is for speaking only.** In fast speech **going to** often sounds like **gonna**: *I'm gonna call you*. You hear it in songs and films all the time, but in writing at school always use the full form, *going to*. The same is true of **wanna** (*want to*).

**Plans and signs.** We use **going to** for two things: a plan we have already made (*I'm going to visit my grandma on Sunday*) and something we can see coming (*Look at those clouds! It's going to rain*). Armenian and Russian often use the present for plans: «Կիրակի տատիկիս մոտ եմ գնում», «В воскресенье я еду к бабушке». English can do that too, but **going to** makes the plan clear.`,
      `**Gonna-ն միայն խոսքի համար է։** Արագ խոսքում **going to**-ն հաճախ հնչում է **gonna**՝ *I'm gonna call you*։ Այն անընդհատ լսում ես երգերում և ֆիլմերում, բայց դպրոցում գրելիս միշտ գործածիր լրիվ ձևը՝ *going to*։ Նույնն է **wanna**-ի (*want to*) դեպքում։

**Ծրագրեր և նշաններ։** **Going to**-ն գործածում ենք երկու բանի համար՝ ծրագիր, որ արդեն կազմել ենք (*I'm going to visit my grandma on Sunday*), և մի բան, որի մոտենալը տեսնում ենք (*Look at those clouds! It's going to rain*)։ Հայերենն ու ռուսերենը ծրագրերի համար հաճախ գործածում են ներկան՝ «Կիրակի տատիկիս մոտ եմ գնում», «В воскресенье я еду к бабушке»։ Անգլերենը նույնպես կարող է, բայց **going to**-ն ծրագիրը պարզ է դարձնում։`,
      `**Gonna — только для устной речи.** В быстрой речи **going to** часто звучит как **gonna**: *I'm gonna call you*. Это постоянно слышно в песнях и фильмах, но в школьных письменных работах всегда пиши полную форму *going to*. То же с **wanna** (*want to*).

**Планы и признаки.** **Going to** используем для двух вещей: план, который уже составлен (*I'm going to visit my grandma on Sunday*), и то, что вот-вот случится, судя по признакам (*Look at those clouds! It's going to rain*). Армянский и русский для планов часто берут настоящее время: «Կիրակի տատիկիս մոտ եմ գնում», «В воскресенье я еду к бабушке». Английский тоже так может, но **going to** делает план ясным.`,
    ),
    ask(1, {
      en: ["Look at the black clouds! It ___ rain.", ["is going to", "goes to", "going"], "We can see it coming: going to."],
      hy: ["Նայիր սև ամպերին։ It ___ rain.", ["is going to", "goes to", "going"], "Տեսնում ենք, որ մոտենում է՝ going to։"],
      ru: ["Посмотри на чёрные тучи! It ___ rain.", ["is going to", "goes to", "going"], "Мы видим признаки: going to."],
    }),
  ],
  "will-vs-going-to": [
    "tense name=future-simple aspects=simple,going-to times=future",
    closer(
      `**Decided before or decided now?** The difference is about **when you decided**. *I'm going to buy a bike* means you made the plan earlier. *The phone is ringing. I'**ll** answer it!* means you decided at that moment. Promises and offers also take **will**: *I'll help you*, *I'll call you tomorrow*.

**Shall we?** With **I** and **we**, English has a special question for offers and suggestions: *Shall I open the window?*, *Shall we go to the park?* It sounds a little British and a little polite. Armenian says «**Գնա՞նք** այգի», Russian «**Пойдём** в парк?» or «**Давай** пойдём в парк?».`,
      `**Որոշվե՞լ է առաջ, թե՞ հիմա։** Տարբերությունն այն է, թե **երբ ես որոշել**։ *I'm going to buy a bike* նշանակում է՝ ծրագիրը կազմել ես ավելի վաղ։ *The phone is ringing. I'**ll** answer it!* նշանակում է՝ որոշել ես հենց այդ պահին։ Խոստումներն ու առաջարկները նույնպես ստանում են **will**՝ *I'll help you*, *I'll call you tomorrow*։

**Shall we?** **I**-ի և **we**-ի հետ անգլերենն առաջարկների համար ունի հատուկ հարց՝ *Shall I open the window?*, *Shall we go to the park?*։ Այն մի քիչ բրիտանական և մի քիչ քաղաքավարի է հնչում։ Հայերենն ասում է «**Գնա՞նք** այգի», ռուսերենը՝ «**Пойдём** в парк?» կամ «**Давай** пойдём в парк?»։`,
      `**Решил заранее или сейчас?** Разница в том, **когда ты решил**. *I'm going to buy a bike* значит, что план составлен раньше. *The phone is ringing. I'**ll** answer it!* значит, что ты решил в этот момент. Обещания и предложения помощи тоже идут с **will**: *I'll help you*, *I'll call you tomorrow*.

**Shall we?** С **I** и **we** у английского есть особый вопрос для предложений: *Shall I open the window?*, *Shall we go to the park?* Он звучит немного по-британски и немного вежливо. Армянский говорит «**Գնա՞նք** այգի», русский — «**Пойдём** в парк?» или «**Давай** пойдём в парк?».`,
    ),
    ask(2, {
      en: ["Your bag is heavy. Your friend says: «I ___ carry it for you.»", ["am going to", "will", "am"], "An offer decided at that moment: will (I'll)."],
      hy: ["Պայուսակդ ծանր է։ Ընկերդ ասում է՝ «I ___ carry it for you.»", ["am going to", "will", "am"], "Հենց պահին որոշված առաջարկ՝ will (I'll)։"],
      ru: ["Твоя сумка тяжёлая. Друг говорит: «I ___ carry it for you.»", ["am going to", "will", "am"], "Предложение, решённое в этот момент: will (I'll)."],
    }),
  ],
  "making-arrangements-5": [
    "sentence mode=order Would you like to come to my birthday ?",
    closer(
      `**Would you like or do you like?** They look alike but ask different things. **Do you like** pizza? asks about your taste in general. **Would you like** some pizza? is an invitation or an offer, right now. Answer an invitation with *Yes, I'd love to!* or *I'm sorry, I can't. I'm busy on Saturday*: a reason makes a "no" friendlier.

**Fixing the details.** When you agree, check three things: the day, the time and the place. *What time shall we meet?* *Let's meet at five.* *Where?* *Outside the cinema.* English uses **at** with clock times (*at five*), **on** with days (*on Saturday*) and **in** with months and years (*in May*).`,
      `**Would you like, թե՞ do you like։** Նման են, բայց տարբեր բաներ են հարցնում։ **Do you like** pizza? հարցնում է քո ճաշակի մասին ընդհանրապես։ **Would you like** some pizza? հրավեր կամ առաջարկ է՝ հենց հիմա։ Հրավերին պատասխանիր *Yes, I'd love to!* կամ *I'm sorry, I can't. I'm busy on Saturday*․ պատճառը «ոչ»-ն ավելի ընկերական է դարձնում։

**Մանրամասների ճշտում։** Երբ համաձայնում եք, ստուգեք երեք բան՝ օրը, ժամը և վայրը։ *What time shall we meet?* *Let's meet at five.* *Where?* *Outside the cinema.*։ Անգլերենը ժամերի հետ գործածում է **at** (*at five*), օրերի հետ՝ **on** (*on Saturday*), ամիսների և տարիների հետ՝ **in** (*in May*)։`,
      `**Would you like или do you like?** Похожи, но спрашивают о разном. **Do you like** pizza? — вопрос о вкусах вообще. **Would you like** some pizza? — приглашение или предложение прямо сейчас. На приглашение отвечай *Yes, I'd love to!* или *I'm sorry, I can't. I'm busy on Saturday*: причина делает «нет» дружелюбнее.

**Уточняем детали.** Договариваясь, проверь три вещи: день, время и место. *What time shall we meet?* *Let's meet at five.* *Where?* *Outside the cinema.* Английский ставит **at** с часами (*at five*), **on** с днями (*on Saturday*) и **in** с месяцами и годами (*in May*).`,
    ),
    ask(1, {
      en: ["«Would you like to come to the park?» What is a polite yes?", ["Yes, I'd love to!", "Yes, I like.", "Yes, I would like it park."], "Answer an invitation with I'd love to."],
      hy: ["«Would you like to come to the park?» Ո՞րն է քաղաքավարի «այո»-ն։", ["Yes, I'd love to!", "Yes, I like.", "Yes, I would like it park."], "Հրավերին պատասխանում ենք I'd love to-ով։"],
      ru: ["«Would you like to come to the park?» Какое «да» вежливое?", ["Yes, I'd love to!", "Yes, I like.", "Yes, I would like it park."], "На приглашение отвечают I'd love to."],
    }),
  ],
  "transport-travel": [
    "forms mode=compare cols=brame return_ticket:round-trip_ticket single_ticket:one-way_ticket underground:subway petrol:gas motorway:highway",
    closer(
      `**The first railway for passengers.** In 1830 the **Liverpool and Manchester Railway** opened in England: the first line where steam trains carried passengers between two cities on a timetable. The **Rocket**, a locomotive built by George and Robert Stephenson, won the 1829 trials to run on it, reaching about 45 km an hour, which seemed incredibly fast.

**By bus, on foot.** With transport English uses **by**: *by bus*, *by train*, *by plane*, but **on foot** for walking. And it says **get on** a bus or a train but **get into** a car or a taxi. Armenian uses an ending (*ավտոբուսով*), Russian a case form (*на автобусе*, *пешком*). Look at the table: British and American travellers buy different tickets for the same journey.`,
      `**Առաջին մարդատար երկաթուղին։** 1830 թվականին Անգլիայում բացվեց **Լիվերպուլ–Մանչեսթեր երկաթուղին**՝ առաջին գիծը, որով շոգեքարշ գնացքները չվացուցակով ուղևորներ էին տեղափոխում երկու քաղաքի միջև։ **Rocket** շոգեքարշը, որ կառուցել էին Ջորջ և Ռոբերտ Սթիվենսոնները, հաղթեց այդ գծով երթևեկելու 1829 թվականի մրցույթում՝ հասնելով ժամում մոտ 45 կմ արագության, որ այն ժամանակ աներևակայելի արագ էր թվում։

**By bus, on foot։** Տրանսպորտի հետ անգլերենը գործածում է **by**՝ *by bus*, *by train*, *by plane*, բայց քայլելու համար՝ **on foot**։ Եվ ասում է **get on** ավտոբուս կամ գնացք, բայց **get into** մեքենա կամ տաքսի։ Հայերենը գործածում է վերջավորություն (*ավտոբուսով*), ռուսերենը՝ հոլովական ձև (*на автобусе*, *пешком*)։ Նայիր աղյուսակին․ բրիտանացի և ամերիկացի ճամփորդները նույն ճանապարհի համար տարբեր տոմսեր են գնում։`,
      `**Первая пассажирская железная дорога.** В 1830 году в Англии открылась **железная дорога Ливерпуль — Манчестер**: первая линия, где паровые поезда возили пассажиров между двумя городами по расписанию. Паровоз **Rocket** Джорджа и Роберта Стефенсонов выиграл в 1829 году конкурс на право ездить по ней, развив около 45 км в час, что казалось невероятно быстрым.

**By bus, on foot.** С транспортом английский использует **by**: *by bus*, *by train*, *by plane*, но пешком — **on foot**. И говорит **get on** про автобус или поезд, но **get into** про машину или такси. Армянский использует окончание (*ավտոբուսով*), русский — падежную форму (*на автобусе*, *пешком*). Посмотри на таблицу: британские и американские путешественники покупают разные билеты на одну и ту же поездку.`,
    ),
    ask(3, {
      en: ["Choose the correct sentence.", ["I go to school by foot.", "I go to school on bus.", "I go to school on foot."], "Walking: on foot. Transport: by bus."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["I go to school by foot.", "I go to school on bus.", "I go to school on foot."], "Քայլելով՝ on foot, տրանսպորտով՝ by bus։"],
      ru: ["Выбери правильное предложение.", ["I go to school by foot.", "I go to school on bus.", "I go to school on foot."], "Пешком: on foot. Транспортом: by bus."],
    }),
  ],
  "giving-directions": [
    "sentence mode=order Turn left at the traffic lights .",
    closer(
      `**Older than the car.** The first traffic lights were put up in London in 1868, outside the Houses of Parliament, to control horses and carriages. They used gas and had two coloured lamps, red and green, worked by a police officer. The first electric traffic lights appeared in Cleveland, USA, in 1914.

**Directions are orders, and that is fine.** In English, directions use the imperative: *Turn left*, *Go straight on*, *Take the second street on the right*. It is not rude, because you are helping. Start politely, though: *Excuse me, how do I get to the station?* Armenian says «Թեքվե՛ք ձախ», Russian «Поверните налево»: the polite **you** form does the same job as English *please*.`,
      `**Ավտոմեքենայից էլ հին։** Առաջին լուսացույցները տեղադրվեցին Լոնդոնում 1868 թվականին՝ Պառլամենտի շենքի մոտ, ձիերի և կառքերի երթևեկությունը կարգավորելու համար։ Դրանք աշխատում էին գազով, ունեին երկու գունավոր լապտեր՝ կարմիր և կանաչ, և դրանք միացնում էր ոստիկանը։ Առաջին էլեկտրական լուսացույցները հայտնվեցին ԱՄՆ-ի Քլիվլենդ քաղաքում 1914 թվականին։

**Ուղղությունները հրամաններ են, և դա նորմալ է։** Անգլերենում ուղղությունները տրվում են հրամայականով՝ *Turn left*, *Go straight on*, *Take the second street on the right*։ Դա կոպիտ չէ, որովհետև դու օգնում ես։ Բայց սկսիր քաղաքավարի՝ *Excuse me, how do I get to the station?*։ Հայերենն ասում է «Թեքվե՛ք ձախ», ռուսերենը՝ «Поверните налево»․ քաղաքավարի **դուք** ձևը կատարում է նույն դերը, ինչ անգլերեն *please*-ը։`,
      `**Старше автомобиля.** Первый светофор поставили в Лондоне в 1868 году у здания Парламента, чтобы управлять лошадьми и каретами. Он работал на газе, у него было два цветных фонаря, красный и зелёный, и переключал их полицейский. Первые электрические светофоры появились в Кливленде (США) в 1914 году.

**Указания — это приказы, и это нормально.** В английском дорогу объясняют повелительным наклонением: *Turn left*, *Go straight on*, *Take the second street on the right*. Это не грубо, ведь ты помогаешь. Но начинай вежливо: *Excuse me, how do I get to the station?* Армянский говорит «Թեքվե՛ք ձախ», русский — «Поверните налево»: вежливая форма на **вы** делает ту же работу, что английское *please*.`,
    ),
    ask(2, {
      en: ["Which phrase means «go forward, do not turn»?", ["Turn right.", "Go straight on.", "Go past."], "Straight on means forward, without turning."],
      hy: ["Ո՞ր արտահայտությունն է նշանակում «գնա առաջ, մի թեքվիր»։", ["Turn right.", "Go straight on.", "Go past."], "Straight on՝ ուղիղ առաջ, առանց թեքվելու։"],
      ru: ["Какая фраза значит «иди вперёд, не поворачивай»?", ["Turn right.", "Go straight on.", "Go past."], "Straight on — прямо, не поворачивая."],
    }),
  ],
  "wild-animals": [
    "forms mode=compare cols=degrees heavy:heavier:the_heaviest fast:faster:the_fastest tall:taller:the_tallest dangerous:more_dangerous:the_most_dangerous",
    closer(
      `**Record holders.** The **blue whale** is the heaviest animal that has ever lived: it can be about 30 metres long and weigh as much as 30 elephants. The **cheetah** is the fastest land animal, reaching about 100 km an hour for a short run, and the **giraffe** is the tallest, up to about 5.5 metres. Use the table to say it: *The blue whale is **the heaviest** animal in the world.*

**Wild animals of Armenia.** The rare **Caucasian leopard** still lives in the mountains of southern Armenia, and the **bezoar goat**, with its long curved horns, climbs the rocks of Khosrov Forest. Both are protected. Notice that English animal names usually take a small letter, but names from places keep their capital: *the Caucasian leopard*.`,
      `**Ռեկորդակիրներ։** **Կապույտ կետը** երբևէ ապրած ամենածանր կենդանին է՝ այն կարող է լինել մոտ 30 մետր երկարությամբ և կշռել այնքան, որքան 30 փիղ։ **Գեպարդը** ցամաքի ամենաարագ կենդանին է՝ կարճ վազքի ժամանակ հասնում է ժամում մոտ 100 կմ արագության, իսկ **ընձուղտն** ամենաբարձրահասակն է՝ մինչև մոտ 5,5 մետր։ Ասա դա աղյուսակի օգնությամբ՝ *The blue whale is **the heaviest** animal in the world.*

**Հայաստանի վայրի կենդանիներ։** Հազվագյուտ **կովկասյան ընձառյուծը** դեռ ապրում է Հայաստանի հարավի լեռներում, իսկ երկար, կոր եղջյուրներով **բեզոարյան այծը** մագլցում է Խոսրովի անտառի ժայռերը։ Երկուսն էլ պահպանվում են։ Նկատիր, որ անգլերենում կենդանիների անունները սովորաբար գրվում են փոքրատառով, բայց տեղանուններից եկած բառերը պահում են մեծատառը՝ *the Caucasian leopard*։`,
      `**Рекордсмены.** **Синий кит** — самое тяжёлое животное, когда-либо жившее на Земле: он бывает около 30 метров в длину и весит как 30 слонов. **Гепард** — самое быстрое сухопутное животное, на коротком рывке он развивает около 100 км в час, а **жираф** — самый высокий, до 5,5 метра. Скажи это с помощью таблицы: *The blue whale is **the heaviest** animal in the world.*

**Дикие животные Армении.** Редкий **переднеазиатский (кавказский) леопард** до сих пор живёт в горах юга Армении, а **безоаровый козёл** с длинными изогнутыми рогами лазает по скалам Хосровского леса. Оба под охраной. Заметь: в английском названия животных обычно пишутся со строчной буквы, но слова от названий мест сохраняют заглавную: *the Caucasian leopard*.`,
    ),
    ask(1, {
      en: ["Complete: «The cheetah is ___ land animal.»", ["the fastest", "the most fast", "faster"], "Fast is short: the fastest."],
      hy: ["Լրացրու՝ «The cheetah is ___ land animal.»", ["the fastest", "the most fast", "faster"], "Fast-ը կարճ է՝ the fastest։"],
      ru: ["Дополни: «The cheetah is ___ land animal.»", ["the fastest", "the most fast", "faster"], "Fast — короткое: the fastest."],
    }),
  ],
  "places-in-town-5": [
    "sentence mode=order There is a library opposite the bank .",
    closer(
      `**Borrow or buy?** **Library** comes from the Latin **liber**, "book", and means a place where you **borrow** books; the person who works there is a **librarian**. A shop where you **buy** books is a **bookshop** (US **bookstore**). In French a **librairie** is a bookshop, so the two words are a classic trap for learners who know French.

**A treasure house in Yerevan.** The **Matenadaran**, named after Mesrop Mashtots, keeps more than 23,000 old manuscripts in Armenian and other languages. In 1997 its collection was added to UNESCO's **Memory of the World** register. Describe where it is in English: *It is at the top of Mashtots Avenue.*`,
      `**Վերցնե՞լ, թե՞ գնել։** **Library**-ն ծագում է լատիներեն **liber**՝ «գիրք» բառից և նշանակում է վայր, որտեղից գրքեր ես **վերցնում** կարդալու․ այնտեղ աշխատող մարդը **librarian** է՝ գրադարանավար։ Խանութը, որտեղ գրքեր ես **գնում**, **bookshop** է (ԱՄՆ-ում՝ **bookstore**)։ Ֆրանսերենում **librairie**-ն գրախանութ է, ուստի այս երկու բառը դասական թակարդ է ֆրանսերեն իմացողների համար։

**Գանձատուն Երևանում։** Մեսրոպ Մաշտոցի անվան **Մատենադարանը** պահում է ավելի քան 23 000 հին ձեռագիր՝ հայերեն և այլ լեզուներով։ 1997 թվականին նրա հավաքածուն ընդգրկվեց ՅՈՒՆԵՍԿՕ-ի **«Աշխարհի հիշողություն»** ծրագրի ռեեստրում։ Անգլերենով նկարագրիր, թե որտեղ է այն՝ *It is at the top of Mashtots Avenue.*`,
      `**Взять или купить?** **Library** происходит от латинского **liber** — «книга» и означает место, где книги **берут** почитать; работает там **librarian** — библиотекарь. Магазин, где книги **покупают**, — **bookshop** (в США **bookstore**). По-французски **librairie** — книжный магазин, поэтому эти два слова — классическая ловушка для тех, кто знает французский.

**Сокровищница Еревана.** **Матенадаран** имени Месропа Маштоца хранит более 23 000 старинных рукописей на армянском и других языках. В 1997 году его собрание внесли в реестр ЮНЕСКО **«Память мира»**. Опиши по-английски, где он находится: *It is at the top of Mashtots Avenue.*`,
    ),
    ask(2, {
      en: ["Where do you buy a new book?", ["at the library", "at the bookshop", "at the bank"], "You buy books in a bookshop and borrow them from a library."],
      hy: ["Որտե՞ղ ես նոր գիրք գնում։", ["at the library", "at the bookshop", "at the bank"], "Գրքերը գնում են bookshop-ում, իսկ library-ից վերցնում են կարդալու։"],
      ru: ["Где покупают новую книгу?", ["at the library", "at the bookshop", "at the bank"], "Книги покупают в bookshop, а берут почитать в library."],
    }),
  ],
  "postcard-writing": [
    "sentence mode=order keep=1 Yesterday we walked to the old church .",
    closer(
      `**The first postcard.** The world's first official postcard was issued in Austria-Hungary in October 1869. It was cheaper than a letter, but anyone could read it, so people learnt to write short and simple messages. Picture postcards with photographs became popular around 1900, and collecting them is still a hobby today.

**A postcard has a pattern.** Start with *Dear…* or *Hi…*, then say where you are, what the weather is like, what you did (past simple) and what you are going to do (*going to*). Finish with *See you soon* or *Love,* and your name. On most postcards the address goes on the right half of the card, and the message on the left.`,
      `**Առաջին բացիկը։** Աշխարհի առաջին պաշտոնական բացիկը թողարկվեց Ավստրո-Հունգարիայում 1869 թվականի հոկտեմբերին։ Այն նամակից էժան էր, բայց ցանկացած մեկը կարող էր կարդալ այն, ուստի մարդիկ սովորեցին գրել կարճ և պարզ հաղորդագրություններ։ Լուսանկարներով բացիկները տարածվեցին մոտ 1900 թվականին, և դրանք հավաքելը մինչ օրս սիրված զբաղմունք է։

**Բացիկն ունի կաղապար։** Սկսիր *Dear…*-ով կամ *Hi…*-ով, ապա ասա, թե որտեղ ես, ինչպիսին է եղանակը, ինչ արեցիր (past simple) և ինչ ես անելու (*going to*)։ Ավարտիր *See you soon*-ով կամ *Love,*-ով և քո անունով։ Հասցեն գրվում է բացիկի աջ կեսում, իսկ հաղորդագրությունը՝ ձախում։`,
      `**Первая открытка.** Первая в мире официальная почтовая карточка вышла в Австро-Венгрии в октябре 1869 года. Она была дешевле письма, но прочитать её мог кто угодно, поэтому люди научились писать коротко и просто. Открытки с фотографиями стали популярны около 1900 года, и коллекционировать их любят до сих пор.

**У открытки есть схема.** Начни с *Dear…* или *Hi…*, потом скажи, где ты, какая погода, что ты делал (past simple) и что собираешься делать (*going to*). Закончи *See you soon* или *Love,* и своим именем. Адрес пишут на правой половине открытки, а текст — на левой.`,
    ),
    ask(3, {
      en: ["Which tense tells what you did on holiday?", ["present continuous", "going to", "past simple"], "Finished actions in the past: past simple."],
      hy: ["Ո՞ր ժամանակն է պատմում, թե ինչ արեցիր արձակուրդին։", ["present continuous", "going to", "past simple"], "Անցյալում ավարտված գործողություններ՝ past simple։"],
      ru: ["Какое время рассказывает, что ты делал на каникулах?", ["present continuous", "going to", "past simple"], "Законченные действия в прошлом: past simple."],
    }),
  ],
  "year-5-review": [
    "tense name=present-simple aspects=simple,continuous times=past,present,future",
    closer(
      `**Your year on one line.** This year you met six ways to talk about time: present simple and continuous, past simple and continuous, **will** and **going to**. Tap through the line above and say one true sentence for each: *I usually walk to school. I'm sitting at my desk now. Yesterday I played football. I was reading when Mum came home. I'll help you. I'm going to travel in summer.*

**Helpers to remember.** Most English questions and negatives need a helper: **do/does** in the present, **did** in the past, **will** for the future, **am/is/are** and **was/were** for the continuous. Armenian and Russian build questions with intonation and the **՞** sign or a question word. If you know which helper to choose, you know the tense.`,
      `**Քո տարին՝ մեկ գծի վրա։** Այս տարի դու ծանոթացար ժամանակի մասին խոսելու վեց եղանակի՝ present simple և continuous, past simple և continuous, **will** և **going to**։ Անցիր վերևի գծով և յուրաքանչյուրի համար մեկ ճիշտ նախադասություն ասա՝ *I usually walk to school. I'm sitting at my desk now. Yesterday I played football. I was reading when Mum came home. I'll help you. I'm going to travel in summer.*

**Օգնականներ, որ պետք է հիշել։** Անգլերենի հարցերի և ժխտումների մեծ մասին օգնական է պետք՝ **do/does** ներկայում, **did** անցյալում, **will** ապագայում, **am/is/are** և **was/were** շարունակականի համար։ Հայերենն ու ռուսերենը հարց են կազմում հնչերանգով և **՞** նշանով կամ հարցական բառով։ Եթե գիտես, թե որ օգնականն ընտրել, ուրեմն գիտես ժամանակը։`,
      `**Твой год на одной линии.** В этом году ты познакомился с шестью способами говорить о времени: present simple и continuous, past simple и continuous, **will** и **going to**. Пройди по линии выше и скажи по одному правдивому предложению для каждого: *I usually walk to school. I'm sitting at my desk now. Yesterday I played football. I was reading when Mum came home. I'll help you. I'm going to travel in summer.*

**Помощники, которых надо помнить.** Большинству английских вопросов и отрицаний нужен помощник: **do/does** в настоящем, **did** в прошедшем, **will** в будущем, **am/is/are** и **was/were** в continuous. Армянский и русский строят вопрос интонацией и знаком **՞** или вопросительным словом. Если знаешь, какого помощника выбрать, значит, знаешь время.`,
    ),
    ask(2, {
      en: ["Which helper makes a past simple question?", ["does", "did", "was"], "Past simple questions use did: Did you play?"],
      hy: ["Ո՞ր օգնականն է կազմում past simple-ի հարցը։", ["does", "did", "was"], "Past simple-ի հարցերում գործածվում է did՝ Did you play?"],
      ru: ["Какой помощник строит вопрос в past simple?", ["does", "did", "was"], "В вопросах past simple используется did: Did you play?"],
    }),
  ],
};
