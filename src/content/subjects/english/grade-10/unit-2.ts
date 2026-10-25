import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("Media literacy", "Մեդիագրագիտություն", "Медиаграмотность"),
  summary: t(
    "News and fake news with the tests that separate them, the vocabulary of the media, reporting verbs and the patterns they take, cohesion beyond linking words, summarising and paraphrasing, and the for-and-against essay.",
    "Լուրեր և կեղծ լուրեր՝ դրանք տարբերող փորձերով, մեդիայի բառապաշարը, հաղորդող բայերը և դրանց կառուցվածքները, համակապությունը կապակցիչներից անդին, ամփոփում և վերաշարադրում, կողմ և դեմ էսսեն։",
    "Новости и фейки с проверками, которые их различают, лексика медиа, глаголы передачи речи и их модели, связность за пределами союзов, краткое изложение и пересказ, эссе «за и против».",
  ),
  lessons: [
    lesson(
      "news-fake-news",
      ["News and fake news", "Լուրեր և կեղծ լուրեր", "Новости и фейки"],
      {
        en: ["Name the parts of a news report in English", "Tell fact from opinion in a headline and a paragraph", "Apply five tests to a story before believing it"],
        hy: ["Անգլերենով անվանել լրատվական հաղորդման մասերը", "Տարբերել փաստը կարծիքից վերնագրում և պարբերությունում", "Կիրառել հինգ փորձ՝ նախքան պատմությանը հավատալը"],
        ru: ["Называть по-английски части новостного сообщения", "Отличать факт от мнения в заголовке и абзаце", "Применять пять проверок, прежде чем поверить новости"],
      },
      {
        en: `## The parts of a report

| Part | What it does |
|---|---|
| headline | names the story in as few words as possible |
| byline | who wrote it and from where |
| lead | the first paragraph: who, what, where, when |
| body | the detail, most important first |
| quote | the words of a witness or an official |
| source | where the information came from |

A news report is built upside down: if the editor cuts the last paragraph, nothing essential is lost. That is why the first sentence carries the whole story.

## Fact and opinion

| Fact | Opinion |
|---|---|
| *The bridge was closed on Monday.* | *The closure was a disaster.* |
| *Prices rose by 12 per cent.* | *Prices are out of control.* |
| *Three schools were rebuilt.* | *Not enough schools were rebuilt.* |

Opinion hides in adjectives and adverbs: *shocking*, *so-called*, *allegedly*, *predictably*. A sentence can be true and still be loaded.

## Five tests before you believe it

1. **Who published it?** A name and an address, or an account with none?
2. **When?** An old photograph can illustrate a new lie.
3. **Where else?** If something huge happened, more than one newspaper has it.
4. **What is the evidence?** A document, a named witness, a number with a source.
5. **How does it make you feel?** A story built to make you angry is built to be shared, not checked.

## Headline language

Headlines drop articles and auxiliaries and use the present for the past: *Bridge closes after flood* means it closed. *To* means the future: *PM to visit Yerevan*. A noun pile such as *School bus fare rise row* takes practice: read it backwards.

### Exercises

1. Which part of a report answers who, what, where and when?
2. Fact or opinion: *Prices rose by 12 per cent.*
3. Fact or opinion: *Prices are out of control.*
4. What does *PM to visit Yerevan* mean?
5. What does *Bridge closes after flood* mean?
6. Name three of the five tests.
7. Find a short news item, and write six sentences: three facts it reports and three places where an opinion is hidden.

### Answers

1. The lead. 2. Fact. 3. Opinion. 4. The Prime Minister will visit Yerevan. 5. The bridge closed after a flood. 6. Any three: who published it, when, where else it appears, what the evidence is, how it makes you feel. 7. Your own answer: three facts, three loaded words or phrases.`,
        hy: `## Հաղորդման մասերը

| Մաս | Ինչ է անում |
|---|---|
| headline | վերնագիր՝ հնարավորինս քիչ բառով |
| byline | ով է գրել և որտեղից |
| lead | առաջին պարբերությունը՝ ով, ինչ, որտեղ, երբ |
| body | մանրամասները՝ ամենակարևորն առաջ |
| quote | վկայի կամ պաշտոնյայի խոսքը |
| source | որտեղից է տեղեկությունը |

Լրատվական հաղորդումը կառուցված է գլխիվայր․ եթե խմբագիրը կտրի վերջին պարբերությունը, էականը չի կորչի։ Ահա թե ինչու առաջին նախադասությունը կրում է ամբողջ պատմությունը։

## Փաստ և կարծիք

| Փաստ | Կարծիք |
|---|---|
| *The bridge was closed on Monday.* | *The closure was a disaster.* |
| *Prices rose by 12 per cent.* | *Prices are out of control.* |
| *Three schools were rebuilt.* | *Not enough schools were rebuilt.* |

Կարծիքը թաքնվում է ածականների և մակբայների մեջ․ *shocking*, *so-called*, *allegedly*, *predictably*։ Նախադասությունը կարող է ճիշտ լինել և միաժամանակ՝ բեռնված։

## Հինգ փորձ՝ նախքան հավատալը

1. **Ո՞վ է հրապարակել։** Անուն և հասցե, թե՞ առանց դրանց հաշիվ։
2. **Ե՞րբ։** Հին լուսանկարը կարող է նոր ստի համար ծառայել։
3. **Ուրիշ որտե՞ղ կա։** Եթե մեծ բան է եղել, մեկից ավելի թերթ ունի այն։
4. **Ո՞րն է ապացույցը։** Փաստաթուղթ, անունով վկա, աղբյուր ունեցող թիվ։
5. **Ինչպե՞ս է այն քեզ զգացնել տալիս։** Զայրացնելու համար սարքված պատմությունը սարքված է տարածելու, ոչ թե ստուգելու համար։

## Վերնագրերի լեզուն

Վերնագրերը հանում են հոդերն ու օժանդակ բայերը և անցյալի համար գործածում ներկա․ *Bridge closes after flood* նշանակում է՝ փակվեց։ *To*-ն նշանակում է ապագա․ *PM to visit Yerevan*։ Գոյականների շարքը, ինչպես *School bus fare rise row*, վարժություն է պահանջում․ կարդա հակառակ կարգով։

### Վարժություններ

1. Ո՞ր մասն է պատասխանում՝ ով, ինչ, որտեղ, երբ։
2. Փա՞ստ թե կարծիք․ *Prices rose by 12 per cent.*
3. Փա՞ստ թե կարծիք․ *Prices are out of control.*
4. Ի՞նչ է նշանակում *PM to visit Yerevan*։
5. Ի՞նչ է նշանակում *Bridge closes after flood*։
6. Անվանիր հինգ փորձից երեքը։
7. Գտիր կարճ լրատվություն և գրիր վեց նախադասություն․ երեք փաստ և երեք տեղ, որտեղ կարծիք է թաքնված։

### Պատասխաններ

1. Lead-ը։ 2. Փաստ։ 3. Կարծիք։ 4. Վարչապետը կայցելի Երևան։ 5. Կամուրջը փակվեց ջրհեղեղից հետո։ 6. Ցանկացած երեքը։ 7. Քո պատասխանը․ երեք փաստ, երեք բեռնված բառ։`,
        ru: `## Части сообщения

| Часть | Что делает |
|---|---|
| headline | заголовок, называет новость минимумом слов |
| byline | кто написал и откуда |
| lead | первый абзац: кто, что, где, когда |
| body | подробности, важнейшее впереди |
| quote | слова свидетеля или чиновника |
| source | откуда сведения |

Новость построена вверх ногами: если редактор отрежет последний абзац, важное не потеряется. Поэтому первое предложение несёт всю историю.

## Факт и мнение

| Факт | Мнение |
|---|---|
| *The bridge was closed on Monday.* | *The closure was a disaster.* |
| *Prices rose by 12 per cent.* | *Prices are out of control.* |
| *Three schools were rebuilt.* | *Not enough schools were rebuilt.* |

Мнение прячется в прилагательных и наречиях: *shocking*, *so-called*, *allegedly*, *predictably*. Предложение может быть правдивым и при этом нагруженным.

## Пять проверок

1. **Кто опубликовал?** Имя и адрес или аккаунт без них?
2. **Когда?** Старая фотография может иллюстрировать новую ложь.
3. **Где ещё?** Если случилось большое, об этом пишет не одна газета.
4. **Каковы доказательства?** Документ, названный свидетель, число с источником.
5. **Что вы чувствуете?** История, сделанная, чтобы разозлить, сделана, чтобы её переслали, а не проверили.

## Язык заголовков

Заголовки убирают артикли и вспомогательные глаголы и ставят настоящее вместо прошедшего: *Bridge closes after flood* значит «закрылся». *To* означает будущее: *PM to visit Yerevan*. Цепочку существительных вроде *School bus fare rise row* читают с конца.

### Упражнения

1. Какая часть отвечает на кто, что, где и когда?
2. Факт или мнение: *Prices rose by 12 per cent.*
3. Факт или мнение: *Prices are out of control.*
4. Что значит *PM to visit Yerevan*?
5. Что значит *Bridge closes after flood*?
6. Назови три из пяти проверок.
7. Найди короткую новость и напиши шесть предложений: три факта и три места, где спрятано мнение.

### Ответы

1. Lead. 2. Факт. 3. Мнение. 4. Премьер-министр посетит Ереван. 5. Мост закрылся после наводнения. 6. Любые три. 7. Свой ответ: три факта, три нагруженных слова.`,
      },
      [
        q(t("Which part answers who, what, where and when?", "Ո՞ր մասն է պատասխանում՝ ով, ինչ, որտեղ, երբ", "Какая часть отвечает на кто, что, где и когда?"), [t("the lead", "lead-ը", "lead"), t("the byline", "byline-ը", "byline"), t("the headline", "headline-ը", "заголовок")], 0),
        q(t("Fact or opinion: Prices are out of control.", "Փա՞ստ թե կարծիք․ Prices are out of control.", "Факт или мнение: Prices are out of control."), [t("fact", "փաստ", "факт"), t("opinion", "կարծիք", "мнение"), t("neither", "ոչ մեկը", "ни то, ни другое")], 1),
        q(t("What does 'PM to visit Yerevan' mean?", "Ի՞նչ է նշանակում «PM to visit Yerevan»", "Что значит 'PM to visit Yerevan'?"), [t("the PM visited Yerevan", "վարչապետն այցելեց Երևան", "премьер посетил Ереван"), t("the PM is in Yerevan", "վարչապետն Երևանում է", "премьер в Ереване"), t("the PM will visit Yerevan", "վարչապետը կայցելի Երևան", "премьер посетит Ереван")], 2),
        q(t("What does 'Bridge closes after flood' mean?", "Ի՞նչ է նշանակում «Bridge closes after flood»", "Что значит 'Bridge closes after flood'?"), [t("the bridge closed", "կամուրջը փակվեց", "мост закрылся"), t("the bridge will close", "կամուրջը կփակվի", "мост закроется"), t("the bridge is open", "կամուրջը բաց է", "мост открыт")], 0),
        q(t("Why is a news report built upside down?", "Ինչո՞ւ է լրատվությունը կառուցված գլխիվայր", "Почему новость построена вверх ногами?"), [t("to confuse the reader", "ընթերցողին շփոթեցնելու համար", "чтобы запутать читателя"), t("so nothing essential is lost if the end is cut", "որ վերջը կտրելիս էականը չկորչի", "чтобы при отрезании конца не терялось важное"), t("to make it longer", "երկարացնելու համար", "чтобы было длиннее")], 1),
        q(t("Which word usually signals an opinion?", "Ո՞ր բառն է սովորաբար կարծիքի նշան", "Какое слово обычно сигналит о мнении?"), [t("Monday", "Monday", "Monday"), t("12 per cent", "12 per cent", "12 per cent"), t("shocking", "shocking", "shocking")], 2),
      ],
    ),
    lesson(
      "media-vocabulary-10",
      ["The vocabulary of the media", "Մեդիայի բառապաշարը", "Лексика медиа"],
      {
        en: ["Name the kinds of media and the people who work in them", "Use the collocations of broadcasting and publishing", "Describe your own media habits in six sentences"],
        hy: ["Անվանել մեդիայի տեսակները և այնտեղ աշխատող մարդկանց", "Գործածել հեռարձակման և հրատարակման կապակցությունները", "Վեց նախադասությամբ նկարագրել մեդիայի քո սովորությունները"],
        ru: ["Называть виды медиа и людей, которые в них работают", "Использовать сочетания вещания и издания", "Описывать свои медиапривычки в шести предложениях"],
      },
      {
        en: `## Kinds of media

| Medium | Words |
|---|---|
| print | newspaper, magazine, tabloid, broadsheet, edition |
| broadcast | channel, station, programme, broadcast, live |
| online | website, feed, post, stream, platform, algorithm |
| social | follower, subscriber, viral, influencer, comment thread |

A **tabloid** is a small-format paper with short, loud stories; a **broadsheet** is the large-format serious paper. The words now describe the style, not the paper size.

## The people

| Person | What they do |
|---|---|
| journalist, reporter | gathers the story |
| correspondent | reports from one place or on one subject |
| editor | decides what is printed and how |
| presenter, anchor | speaks on air |
| columnist | writes opinion under their own name |
| freelancer | works for several papers, employed by none |

## Collocations

| Phrase | Example |
|---|---|
| break a story | *The paper **broke the story** on Tuesday.* |
| cover an event | *Six channels **covered** the election.* |
| go viral | *The clip **went viral** overnight.* |
| go live | *We **go live** at eight.* |
| run an article | *They **ran an article** about the school.* |
| issue a correction | *The site **issued a correction** two days later.* |
| be biased, be balanced | *The report **was balanced**.* |
| reach an audience | *The programme **reaches** two million people.* |

## A short text

> My grandmother reads one newspaper and believes all of it. I read nothing and believe a short video made by somebody whose name I do not know. It is not obvious which of us is better informed. She at least knows who to blame when the paper is wrong; my feed has no editor, no address and no correction page, only an algorithm that has worked out that I will watch anything about trains.

### Exercises

1. Which word: *a person who reports from one country for a newspaper*?
2. Which word: *the person who decides what is printed*?
3. Complete: *The clip __ viral overnight.*
4. Complete: *Six channels __ the election.*
5. What is the difference between a tabloid and a broadsheet?
6. Which phrase means to publish an admission of a mistake?
7. Write six sentences about your own media habits, with four words or phrases from the lesson.

### Answers

1. A correspondent. 2. The editor. 3. went. 4. covered. 5. A tabloid is short and loud, a broadsheet long and serious; the words now describe style, not size. 6. To issue a correction. 7. Your own answer: six sentences, four items used.`,
        hy: `## Մեդիայի տեսակները

| Տեսակ | Բառեր |
|---|---|
| print | newspaper, magazine, tabloid, broadsheet, edition |
| broadcast | channel, station, programme, broadcast, live |
| online | website, feed, post, stream, platform, algorithm |
| social | follower, subscriber, viral, influencer, comment thread |

**Tabloid**-ը փոքր ձևաչափի թերթ է՝ կարճ, բարձրաձայն պատմություններով, **broadsheet**-ը՝ մեծ ձևաչափի լուրջ թերթ։ Այսօր բառերը նկարագրում են ոճը, ոչ թե թղթի չափը։

## Մարդիկ

| Մարդ | Ինչ է անում |
|---|---|
| journalist, reporter | հավաքում է նյութը |
| correspondent | թղթակցում է մեկ վայրից կամ մեկ թեմայով |
| editor | որոշում է՝ ինչ և ինչպես տպել |
| presenter, anchor | հաղորդավար |
| columnist | սյունակագիր՝ իր անունով կարծիք գրող |
| freelancer | աշխատում է մի քանի խմբագրության համար, ոչ մեկի հաստիքում |

## Կապակցություններ

| Արտահայտություն | Օրինակ |
|---|---|
| break a story *(առաջինը հրապարակել)* | *The paper **broke the story** on Tuesday.* |
| cover an event *(լուսաբանել)* | *Six channels **covered** the election.* |
| go viral *(տարածվել)* | *The clip **went viral** overnight.* |
| go live *(եթեր դուրս գալ)* | *We **go live** at eight.* |
| run an article *(հոդված տպել)* | *They **ran an article** about the school.* |
| issue a correction *(ուղղում հրապարակել)* | *The site **issued a correction** two days later.* |
| be biased, be balanced *(կողմնակալ, հավասարակշռված լինել)* | *The report **was balanced**.* |
| reach an audience *(հասնել լսարանին)* | *The programme **reaches** two million people.* |

## Կարճ տեքստ

> My grandmother reads one newspaper and believes all of it. I read nothing and believe a short video made by somebody whose name I do not know. It is not obvious which of us is better informed. She at least knows who to blame when the paper is wrong; my feed has no editor, no address and no correction page, only an algorithm that has worked out that I will watch anything about trains.

*(Տատս կարդում է մեկ թերթ և հավատում ամեն ինչին։ Ես ոչինչ չեմ կարդում և հավատում եմ կարճ տեսանյութի, որը սարքել է մեկը, ում անունը չգիտեմ։ Պարզ չէ, թե մեզնից որն է ավելի լավ տեղեկացված։ Նա գոնե գիտի՝ ում մեղադրել, երբ թերթը սխալ է․ իմ հոսքը չունի խմբագիր, չունի հասցե և ուղղումների էջ, ունի միայն ալգորիթմ, որը պարզել է, որ ես կդիտեմ գնացքների մասին ցանկացած բան։)*

### Վարժություններ

1. Ո՞ր բառը․ *մարդ, որ մեկ երկրից թղթակցում է թերթի համար*։
2. Ո՞ր բառը․ *մարդ, որ որոշում է՝ ինչ տպել*։
3. Լրացրու․ *The clip __ viral overnight.*
4. Լրացրու․ *Six channels __ the election.*
5. Ո՞րն է tabloid-ի և broadsheet-ի տարբերությունը։
6. Ո՞ր արտահայտությունն է նշանակում սխալի ընդունում հրապարակել։
7. Գրիր վեց նախադասություն քո մեդիա սովորությունների մասին՝ դասի չորս բառով։

### Պատասխաններ

1. Correspondent։ 2. Editor։ 3. went։ 4. covered։ 5. Tabloid-ը կարճ է և բարձրաձայն, broadsheet-ը՝ երկար և լուրջ. այսօր բառերն ոճ են նկարագրում։ 6. To issue a correction։ 7. Քո պատասխանը․ վեց նախադասություն, չորս բառ։`,
        ru: `## Виды медиа

| Вид | Слова |
|---|---|
| print | newspaper, magazine, tabloid, broadsheet, edition |
| broadcast | channel, station, programme, broadcast, live |
| online | website, feed, post, stream, platform, algorithm |
| social | follower, subscriber, viral, influencer, comment thread |

**Tabloid** — малоформатная газета с короткими громкими материалами, **broadsheet** — большая серьёзная газета. Сегодня слова описывают стиль, а не размер бумаги.

## Люди

| Человек | Что делает |
|---|---|
| journalist, reporter | собирает материал |
| correspondent | работает из одного места или по одной теме |
| editor | решает, что и как печатать |
| presenter, anchor | ведущий |
| columnist | колумнист, пишет мнение под своим именем |
| freelancer | работает на несколько изданий, не в штате |

## Сочетания

| Выражение | Пример |
|---|---|
| break a story *(первым опубликовать)* | *The paper **broke the story** on Tuesday.* |
| cover an event *(освещать)* | *Six channels **covered** the election.* |
| go viral *(разойтись по сети)* | *The clip **went viral** overnight.* |
| go live *(выйти в эфир)* | *We **go live** at eight.* |
| run an article *(напечатать статью)* | *They **ran an article** about the school.* |
| issue a correction *(опубликовать поправку)* | *The site **issued a correction** two days later.* |
| be biased, be balanced *(быть предвзятым, сбалансированным)* | *The report **was balanced**.* |
| reach an audience *(достигать аудитории)* | *The programme **reaches** two million people.* |

## Короткий текст

> My grandmother reads one newspaper and believes all of it. I read nothing and believe a short video made by somebody whose name I do not know. It is not obvious which of us is better informed. She at least knows who to blame when the paper is wrong; my feed has no editor, no address and no correction page, only an algorithm that has worked out that I will watch anything about trains.

*(Моя бабушка читает одну газету и верит ей целиком. Я не читаю ничего и верю короткому видео, снятому человеком, имени которого не знаю. Неочевидно, кто из нас лучше осведомлён. Она хотя бы знает, кого винить, когда газета ошиблась; у моей ленты нет ни редактора, ни адреса, ни страницы поправок — только алгоритм, выяснивший, что я посмотрю что угодно про поезда.)*

### Упражнения

1. Какое слово: *человек, который ведёт репортажи из одной страны для газеты*?
2. Какое слово: *тот, кто решает, что печатать*?
3. Дополни: *The clip __ viral overnight.*
4. Дополни: *Six channels __ the election.*
5. В чём разница между tabloid и broadsheet?
6. Какое выражение значит «опубликовать признание ошибки»?
7. Напиши шесть предложений о своих медиапривычках с четырьмя словами урока.

### Ответы

1. Correspondent. 2. Editor. 3. went. 4. covered. 5. Tabloid короткий и громкий, broadsheet длинный и серьёзный; сегодня это о стиле. 6. To issue a correction. 7. Свой ответ: шесть предложений, четыре слова.`,
      },
      [
        q(t("Who decides what is printed?", "Ո՞վ է որոշում՝ ինչ տպել", "Кто решает, что печатать?"), [t("the editor", "խմբագիրը", "редактор"), t("the columnist", "սյունակագիրը", "колумнист"), t("the freelancer", "ազատ լրագրողը", "фрилансер")], 0),
        q(t("Complete: The clip __ viral overnight.", "Լրացրու․ The clip __ viral overnight.", "Дополни: The clip __ viral overnight."), [t("made", "made", "made"), t("went", "went", "went"), t("ran", "ran", "ran")], 1),
        q(t("Which phrase means to report on an event?", "Ո՞ր արտահայտությունն է նշանակում իրադարձությունը լուսաբանել", "Какое выражение значит освещать событие?"), [t("to break a story", "to break a story", "to break a story"), t("to go live", "to go live", "to go live"), t("to cover an event", "to cover an event", "to cover an event")], 2),
        q(t("A tabloid is…", "Tabloid-ը", "Tabloid — это…"), [t("a short, loud paper", "կարճ, բարձրաձայն թերթ", "короткая, громкая газета"), t("a serious large paper", "լուրջ մեծ թերթ", "серьёзная большая газета"), t("a television channel", "հեռուստաալիք", "телеканал")], 0),
        q(t("A person who reports on one subject is a…", "Մեկ թեմայով թղթակցողը կոչվում է", "Тот, кто работает по одной теме, — это…"), [t("presenter", "presenter", "presenter"), t("correspondent", "correspondent", "correspondent"), t("influencer", "influencer", "influencer")], 1),
        q(t("Which phrase admits a mistake?", "Ո՞ր արտահայտությունն է ընդունում սխալը", "Какое выражение признаёт ошибку?"), [t("reach an audience", "reach an audience", "reach an audience"), t("run an article", "run an article", "run an article"), t("issue a correction", "issue a correction", "issue a correction")], 2),
      ],
    ),
    lesson(
      "reporting-verbs",
      ["Reporting verbs and their patterns", "Հաղորդող բայեր և դրանց կառուցվածքները", "Глаголы передачи речи и их модели"],
      {
        en: ["Replace said with twenty precise reporting verbs", "Use the four patterns these verbs take", "Choose a verb that reports the speaker's attitude"],
        hy: ["Փոխարինել said-ը քսան ճշգրիտ հաղորդող բայով", "Գործածել այդ բայերի չորս կառուցվածքը", "Ընտրել բայ, որը հաղորդում է խոսողի վերաբերմունքը"],
        ru: ["Заменять said двадцатью точными глаголами передачи речи", "Использовать четыре модели этих глаголов", "Выбирать глагол, передающий отношение говорящего"],
      },
      {
        en: `## Why not always 'said'

*He said that the plan was bad* tells you nothing about how he said it. English has a verb for almost every attitude.

| Attitude | Verbs |
|---|---|
| neutral | say, tell, state, explain, mention, add |
| strong | insist, claim, argue, maintain, stress |
| against | deny, refuse, object, complain |
| for | agree, admit, confirm, promise, offer |
| asking | suggest, recommend, advise, warn, remind, urge |

*Claim* is not neutral: it quietly says the writer does not believe it. *Admit* says the speaker did not want to say it.

## The four patterns

| Pattern | Verbs | Example |
|---|---|---|
| verb + that | say, explain, claim, admit, deny, agree, suggest | *He **admitted that** he was wrong.* |
| verb + somebody + that | tell, remind, warn, convince | *She **reminded me that** the shop closed at six.* |
| verb + somebody + to + infinitive | tell, ask, advise, warn, urge, persuade | *They **advised us to** wait.* |
| verb + -ing | suggest, recommend, deny, admit | *He **denied taking** the money.* |

Watch the two that take both: *admit* and *deny* work with *that* and with *-ing*; *suggest* takes *that* and *-ing* but never *to*. *He suggested me to go* is one of the most common mistakes in the whole language.

## Choosing the verb

| Direct speech | Report |
|---|---|
| "I didn't do it." | He **denied** doing it. |
| "Yes, all right, I did it." | He **admitted** doing it. |
| "You really should rest." | She **advised** me to rest. |
| "Don't touch the wire!" | He **warned** us not to touch the wire. |
| "Let's meet at six." | She **suggested** meeting at six. |
| "I'll bring the book." | He **promised** to bring the book. |

### Exercises

1. Report: *"I didn't take it," he said.* (deny)
2. Report: *"You should rest," she said.* (advise)
3. Report: *"Let's meet at six," she said.* (suggest)
4. Report: *"Don't touch it!" he said.* (warn)
5. Correct: *He suggested me to go home.*
6. Which verb hints that the writer doubts the speaker?
7. Report six lines of a conversation with six different reporting verbs.

### Answers

1. He denied taking it. 2. She advised me to rest. 3. She suggested meeting at six. 4. He warned us not to touch it. 5. He suggested that I go home (or: He suggested going home). 6. Claim. 7. Your own answer: six sentences, six verbs, the right pattern for each.`,
        hy: `## Ինչու միշտ չէ «said»

*He said that the plan was bad*-ը ոչինչ չի ասում, թե ինչպես է ասել։ Անգլերենն ունի բայ գրեթե ամեն վերաբերմունքի համար։

| Վերաբերմունք | Բայեր |
|---|---|
| չեզոք | say, tell, state, explain, mention, add |
| ուժեղ | insist, claim, argue, maintain, stress |
| դեմ | deny, refuse, object, complain |
| կողմ | agree, admit, confirm, promise, offer |
| առաջարկող | suggest, recommend, advise, warn, remind, urge |

*Claim*-ը չեզոք չէ․ այն հանգիստ ասում է, որ գրողը չի հավատում։ *Admit*-ը ասում է, որ խոսողը չէր ուզում դա ասել։

## Չորս կառուցվածք

| Կառուցվածք | Բայեր | Օրինակ |
|---|---|---|
| verb + that | say, explain, claim, admit, deny, agree, suggest | *He **admitted that** he was wrong.* |
| verb + somebody + that | tell, remind, warn, convince | *She **reminded me that** the shop closed at six.* |
| verb + somebody + to + infinitive | tell, ask, advise, warn, urge, persuade | *They **advised us to** wait.* |
| verb + -ing | suggest, recommend, deny, admit | *He **denied taking** the money.* |

Ուշադրություն երկուսին, որ երկու ձև են ընդունում․ *admit*-ը և *deny*-ն աշխատում են *that*-ով և *-ing*-ով, *suggest*-ը՝ *that*-ով և *-ing*-ով, բայց երբեք *to*-ով։ *He suggested me to go*-ն ամբողջ լեզվի ամենատարածված սխալներից է։

## Բայի ընտրություն

| Ուղղակի խոսք | Հաղորդում |
|---|---|
| "I didn't do it." | He **denied** doing it. |
| "Yes, all right, I did it." | He **admitted** doing it. |
| "You really should rest." | She **advised** me to rest. |
| "Don't touch the wire!" | He **warned** us not to touch the wire. |
| "Let's meet at six." | She **suggested** meeting at six. |
| "I'll bring the book." | He **promised** to bring the book. |

### Վարժություններ

1. Հաղորդիր․ *"I didn't take it," he said.* (deny)
2. Հաղորդիր․ *"You should rest," she said.* (advise)
3. Հաղորդիր․ *"Let's meet at six," she said.* (suggest)
4. Հաղորդիր․ *"Don't touch it!" he said.* (warn)
5. Ուղղիր․ *He suggested me to go home.*
6. Ո՞ր բայն է ակնարկում, որ գրողը կասկածում է խոսողին։
7. Հաղորդիր խոսակցության վեց տող՝ վեց տարբեր հաղորդող բայով։

### Պատասխաններ

1. He denied taking it. 2. She advised me to rest. 3. She suggested meeting at six. 4. He warned us not to touch it. 5. He suggested that I go home (կամ He suggested going home). 6. Claim։ 7. Քո պատասխանը․ վեց նախադասություն, վեց բայ։`,
        ru: `## Почему не всегда 'said'

*He said that the plan was bad* ничего не говорит о том, как он это сказал. В английском есть глагол почти для каждого отношения.

| Отношение | Глаголы |
|---|---|
| нейтральное | say, tell, state, explain, mention, add |
| сильное | insist, claim, argue, maintain, stress |
| против | deny, refuse, object, complain |
| за | agree, admit, confirm, promise, offer |
| побуждение | suggest, recommend, advise, warn, remind, urge |

*Claim* не нейтрален: он тихо сообщает, что автор не верит. *Admit* говорит, что говорящий не хотел этого признавать.

## Четыре модели

| Модель | Глаголы | Пример |
|---|---|---|
| verb + that | say, explain, claim, admit, deny, agree, suggest | *He **admitted that** he was wrong.* |
| verb + somebody + that | tell, remind, warn, convince | *She **reminded me that** the shop closed at six.* |
| verb + somebody + to + инфинитив | tell, ask, advise, warn, urge, persuade | *They **advised us to** wait.* |
| verb + -ing | suggest, recommend, deny, admit | *He **denied taking** the money.* |

Обратите внимание на те, что берут обе модели: *admit* и *deny* работают с *that* и с *-ing*; *suggest* берёт *that* и *-ing*, но никогда *to*. *He suggested me to go* — одна из самых частых ошибок во всём языке.

## Выбор глагола

| Прямая речь | Передача |
|---|---|
| "I didn't do it." | He **denied** doing it. |
| "Yes, all right, I did it." | He **admitted** doing it. |
| "You really should rest." | She **advised** me to rest. |
| "Don't touch the wire!" | He **warned** us not to touch the wire. |
| "Let's meet at six." | She **suggested** meeting at six. |
| "I'll bring the book." | He **promised** to bring the book. |

### Упражнения

1. Передай: *"I didn't take it," he said.* (deny)
2. Передай: *"You should rest," she said.* (advise)
3. Передай: *"Let's meet at six," she said.* (suggest)
4. Передай: *"Don't touch it!" he said.* (warn)
5. Исправь: *He suggested me to go home.*
6. Какой глагол намекает, что автор сомневается в говорящем?
7. Передай шесть реплик разговора шестью разными глаголами.

### Ответы

1. He denied taking it. 2. She advised me to rest. 3. She suggested meeting at six. 4. He warned us not to touch it. 5. He suggested that I go home (или He suggested going home). 6. Claim. 7. Свой ответ: шесть предложений, шесть глаголов.`,
      },
      [
        q(t("Report with 'deny': I didn't take it.", "Հաղորդիր deny-ով․ I didn't take it.", "Передай через 'deny': I didn't take it."), [t("He denied taking it.", "He denied taking it.", "He denied taking it."), t("He denied to take it.", "He denied to take it.", "He denied to take it."), t("He denied me to take it.", "He denied me to take it.", "He denied me to take it.")], 0),
        q(t("Which is correct?", "Ո՞րն է ճիշտ", "Что верно?"), [t("He suggested me to go.", "He suggested me to go.", "He suggested me to go."), t("He suggested going.", "He suggested going.", "He suggested going."), t("He suggested to go me.", "He suggested to go me.", "He suggested to go me.")], 1),
        q(t("Which verb hints that the writer doubts the speaker?", "Ո՞ր բայն է ակնարկում, որ գրողը կասկածում է", "Какой глагол намекает на сомнение автора?"), [t("explain", "explain", "explain"), t("confirm", "confirm", "confirm"), t("claim", "claim", "claim")], 2),
        q(t("Report with 'advise': You should rest.", "Հաղորդիր advise-ով․ You should rest.", "Передай через 'advise': You should rest."), [t("She advised me to rest.", "She advised me to rest.", "She advised me to rest."), t("She advised me resting.", "She advised me resting.", "She advised me resting."), t("She advised that me rest.", "She advised that me rest.", "She advised that me rest.")], 0),
        q(t("Which pattern does 'remind' take?", "Ո՞ր կառուցվածքն է վերցնում remind-ը", "Какую модель берёт 'remind'?"), [t("remind + -ing only", "միայն remind + -ing", "только remind + -ing"), t("remind + somebody + that", "remind + somebody + that", "remind + somebody + that"), t("remind + that only", "միայն remind + that", "только remind + that")], 1),
        q(t("Which verb means the speaker did not want to say it?", "Ո՞ր բայն է նշանակում, որ խոսողը չէր ուզում դա ասել", "Какой глагол значит, что говорящий не хотел это сказать?"), [t("state", "state", "state"), t("mention", "mention", "mention"), t("admit", "admit", "admit")], 2),
      ],
    ),
    lesson(
      "linking-devices",
      ["Cohesion: reference, substitution and discourse markers", "Համակապություն․ հղում, փոխարինում և խոսքի նշիչներ", "Связность: отсылка, замена и дискурсивные маркеры"],
      {
        en: ["Use reference words so that every it and this has one clear owner", "Replace a repeated phrase with one, do so or the same", "Use discourse markers to steer a paragraph"],
        hy: ["Գործածել հղող բառերն այնպես, որ ամեն it-ը և this-ը ունենա մեկ հստակ տեր", "Փոխարինել կրկնվող արտահայտությունը one, do so կամ the same-ով", "Գործածել խոսքի նշիչները պարբերությունն ուղղորդելու համար"],
        ru: ["Использовать отсылочные слова так, чтобы у каждого it и this был один ясный хозяин", "Заменять повтор на one, do so или the same", "Вести абзац дискурсивными маркерами"],
      },
      {
        en: `## Three ways a text holds together

Linking words such as *however* are only one of them. Good English also uses **reference**, **substitution** and **discourse markers**.

## Reference

| Word | Points to |
|---|---|
| it, they | a thing already named |
| this, that | the whole idea in the last sentence |
| such, the latter, the former | the second and the first of two |
| so | a whole clause: *I think **so**.* |

> The council closed the library in March. **This** surprised nobody.

*This* points to the closing, not to the library. If a reader has to stop and ask what *this* means, the sentence has failed. Rule of thumb: never start a paragraph with a bare *it* or *this*.

## Substitution

| Instead of repeating | Use |
|---|---|
| a countable noun | **one**, **ones**: *I'd like the red **one**.* |
| a verb phrase | **do**, **do so**: *She asked me to wait, and I **did**.* |
| a whole statement | **so**, **not**: *Is it open? I hope **so**. / I'm afraid **not**.* |
| a repeated thing | **the same**: *He ordered tea and I ordered **the same**.* |

## Discourse markers

| Marker | What it signals |
|---|---|
| in fact, actually | a correction of what the reader expects |
| after all | a reason the reader already knows |
| that said, having said that | a step back from your own claim |
| as far as… is concerned | a change of topic |
| to put it another way | a restatement |
| admittedly | a concession before an argument |

> The scheme is expensive. **That said**, the old buses cost more every year in repairs.

## Putting it together

> Our school has two computer rooms. **The former** is used for lessons, **the latter** for the chess club. **This** arrangement works until exam week, when both are needed at once. **In fact** the chess club has not met in the second room since March, although nobody has told the timetable office. **As far as the pupils are concerned**, the problem is simpler: one room is warm and **the other one** is not.

### Exercises

1. What does *this* point to: *The library closed. This surprised nobody.*?
2. Replace the repeat: *I'd like the red jacket, not the blue jacket.*
3. Replace the repeat: *She asked me to wait, and I waited.*
4. Complete: *Is the shop open? I hope __.*
5. Which marker steps back from your own claim?
6. Which words mean the first and the second of two?
7. Rewrite this paragraph using three reference or substitution words: *Our class has two windows. The first window is broken. The second window does not open. The caretaker says he will repair the first window.*

### Answers

1. To the closing of the library. 2. I'd like the red one, not the blue one. 3. She asked me to wait, and I did. 4. so. 5. That said (or having said that). 6. The former and the latter. 7. For example: *Our class has two windows. The former is broken and the latter does not open. The caretaker says he will repair the first one.*`,
        hy: `## Երեք ձև, որով տեքստը պահվում է միասին

*However*-ի նման կապակցող բառերը միայն մեկն են։ Լավ անգլերենը գործածում է նաև **հղում**, **փոխարինում** և **խոսքի նշիչներ**։

## Հղում

| Բառ | Ցույց է տալիս |
|---|---|
| it, they | արդեն անվանված առարկա |
| this, that | նախորդ նախադասության ամբողջ միտքը |
| such, the latter, the former | երկուսից երկրորդը և առաջինը |
| so | ամբողջ նախադասություն․ *I think **so**.* |

> The council closed the library in March. **This** surprised nobody.

*This*-ը ցույց է տալիս փակելը, ոչ թե գրադարանը։ Եթե ընթերցողը ստիպված է կանգ առնել և հարցնել՝ ինչ է նշանակում *this*-ը, նախադասությունը ձախողվել է։ Կանոն․ պարբերությունն երբեք մի՛ սկսիր մերկ *it*-ով կամ *this*-ով։

## Փոխարինում

| Կրկնելու փոխարեն | Գործածիր |
|---|---|
| հաշվելի գոյական | **one**, **ones**․ *I'd like the red **one**.* |
| բայական արտահայտություն | **do**, **do so**․ *She asked me to wait, and I **did**.* |
| ամբողջ պնդում | **so**, **not**․ *Is it open? I hope **so**. / I'm afraid **not**.* |
| կրկնվող բան | **the same**․ *He ordered tea and I ordered **the same**.* |

## Խոսքի նշիչներ

| Նշիչ | Ինչ է ազդարարում |
|---|---|
| in fact, actually | ընթերցողի սպասելիքի ուղղում |
| after all | պատճառ, որ ընթերցողն արդեն գիտի |
| that said, having said that | քայլ հետ սեփական պնդումից |
| as far as… is concerned | թեմայի փոփոխություն |
| to put it another way | նույնն այլ կերպ |
| admittedly | զիջում՝ փաստարկից առաջ |

> The scheme is expensive. **That said**, the old buses cost more every year in repairs.

## Միասին

> Our school has two computer rooms. **The former** is used for lessons, **the latter** for the chess club. **This** arrangement works until exam week, when both are needed at once. **In fact** the chess club has not met in the second room since March, although nobody has told the timetable office. **As far as the pupils are concerned**, the problem is simpler: one room is warm and **the other one** is not.

*(Մեր դպրոցն ունի երկու համակարգչային սենյակ։ Առաջինը գործածվում է դասերի, երկրորդը՝ շախմատի խմբակի համար։ Այս կարգը գործում է մինչև քննական շաբաթը, երբ երկուսն էլ միանգամից պետք են։ Իրականում շախմատի խմբակը մարտից ի վեր երկրորդ սենյակում չի հավաքվել, թեև ոչ ոք չի տեղեկացրել դասացուցակի բաժինը։ Ինչ վերաբերում է աշակերտներին, խնդիրն ավելի պարզ է․ մի սենյակը տաք է, մյուսը՝ ոչ։)*

### Վարժություններ

1. Ի՞նչ է ցույց տալիս *this*-ը․ *The library closed. This surprised nobody.*
2. Վերացրու կրկնությունը․ *I'd like the red jacket, not the blue jacket.*
3. Վերացրու կրկնությունը․ *She asked me to wait, and I waited.*
4. Լրացրու․ *Is the shop open? I hope __.*
5. Ո՞ր նշիչն է քայլ անում հետ սեփական պնդումից։
6. Ո՞ր բառերն են նշանակում երկուսից առաջինը և երկրորդը։
7. Վերաշարադրիր պարբերությունն երեք հղող կամ փոխարինող բառով․ *Our class has two windows. The first window is broken. The second window does not open. The caretaker says he will repair the first window.*

### Պատասխաններ

1. Գրադարանի փակվելուն։ 2. I'd like the red one, not the blue one. 3. She asked me to wait, and I did. 4. so։ 5. That said։ 6. The former և the latter։ 7. Քո պատասխանը․ երեք փոխարինում։`,
        ru: `## Три способа связать текст

Связки вроде *however* — только один из них. Хороший английский использует ещё **отсылку**, **замену** и **дискурсивные маркеры**.

## Отсылка

| Слово | На что указывает |
|---|---|
| it, they | на уже названный предмет |
| this, that | на всю мысль предыдущего предложения |
| such, the latter, the former | на второй и первый из двух |
| so | на целое высказывание: *I think **so**.* |

> The council closed the library in March. **This** surprised nobody.

*This* указывает на закрытие, а не на библиотеку. Если читателю приходится остановиться и спросить, что значит *this*, предложение не сработало. Правило: не начинайте абзац с голого *it* или *this*.

## Замена

| Вместо повтора | Используйте |
|---|---|
| исчисляемое существительное | **one**, **ones**: *I'd like the red **one**.* |
| глагольную группу | **do**, **do so**: *She asked me to wait, and I **did**.* |
| целое высказывание | **so**, **not**: *Is it open? I hope **so**. / I'm afraid **not**.* |
| повторяемое | **the same**: *He ordered tea and I ordered **the same**.* |

## Дискурсивные маркеры

| Маркер | Что сигналит |
|---|---|
| in fact, actually | поправку к ожиданию читателя |
| after all | причину, известную читателю |
| that said, having said that | шаг назад от собственного утверждения |
| as far as… is concerned | смену темы |
| to put it another way | переформулировку |
| admittedly | уступку перед доводом |

> The scheme is expensive. **That said**, the old buses cost more every year in repairs.

## Всё вместе

> Our school has two computer rooms. **The former** is used for lessons, **the latter** for the chess club. **This** arrangement works until exam week, when both are needed at once. **In fact** the chess club has not met in the second room since March, although nobody has told the timetable office. **As far as the pupils are concerned**, the problem is simpler: one room is warm and **the other one** is not.

*(В нашей школе два компьютерных класса. Первый используется для уроков, второй — для шахматного кружка. Этот порядок работает до экзаменационной недели, когда нужны оба сразу. На самом деле шахматный кружок не собирался во втором классе с марта, хотя расписанию об этом никто не сообщил. Что касается учеников, проблема проще: один класс тёплый, а другой нет.)*

### Упражнения

1. На что указывает *this*: *The library closed. This surprised nobody.*?
2. Убери повтор: *I'd like the red jacket, not the blue jacket.*
3. Убери повтор: *She asked me to wait, and I waited.*
4. Дополни: *Is the shop open? I hope __.*
5. Какой маркер делает шаг назад от собственного утверждения?
6. Какие слова значат «первый» и «второй» из двух?
7. Перепиши абзац с тремя заменами: *Our class has two windows. The first window is broken. The second window does not open. The caretaker says he will repair the first window.*

### Ответы

1. На закрытие библиотеки. 2. I'd like the red one, not the blue one. 3. She asked me to wait, and I did. 4. so. 5. That said. 6. The former и the latter. 7. Свой ответ: три замены.`,
      },
      [
        q(t("In 'The library closed. This surprised nobody', 'this' points to…", "«The library closed. This surprised nobody»-ում this-ը ցույց է տալիս", "В 'The library closed. This surprised nobody' слово 'this' указывает на…"), [t("the closing of the library", "գրադարանի փակվելը", "закрытие библиотеки"), t("the library building", "գրադարանի շենքը", "здание библиотеки"), t("nobody", "nobody", "nobody")], 0),
        q(t("Replace the repeat: She asked me to wait, and I waited.", "Վերացրու կրկնությունը․ She asked me to wait, and I waited.", "Убери повтор: She asked me to wait, and I waited."), [t("and I was.", "and I was.", "and I was."), t("and I did.", "and I did.", "and I did."), t("and I so.", "and I so.", "and I so.")], 1),
        q(t("Complete: Is the shop open? I hope __.", "Լրացրու․ Is the shop open? I hope __.", "Дополни: Is the shop open? I hope __."), [t("it", "it", "it"), t("that", "that", "that"), t("so", "so", "so")], 2),
        q(t("Which pair means the first and the second of two?", "Ո՞ր զույգն է նշանակում երկուսից առաջինը և երկրորդը", "Какая пара значит «первый» и «второй» из двух?"), [t("the former and the latter", "the former և the latter", "the former и the latter"), t("this and that", "this և that", "this и that"), t("one and ones", "one և ones", "one и ones")], 0),
        q(t("Which marker steps back from your own claim?", "Ո՞ր նշիչն է քայլ անում հետ սեփական պնդումից", "Какой маркер делает шаг назад от своего утверждения?"), [t("in fact", "in fact", "in fact"), t("that said", "that said", "that said"), t("after all", "after all", "after all")], 1),
        q(t("How should a paragraph not begin?", "Ինչպե՞ս պարբերությունը չպետք է սկսվի", "Как не должен начинаться абзац?"), [t("with a noun", "գոյականով", "с существительного"), t("with a linking word", "կապակցիչով", "со связки"), t("with a bare 'this' or 'it'", "մերկ this-ով կամ it-ով", "с голого 'this' или 'it'")], 2),
      ],
    ),
    lesson(
      "summarising-paraphrasing-10",
      ["Summarising and paraphrasing", "Ամփոփում և վերաշարադրում", "Краткое изложение и пересказ"],
      {
        en: ["Cut a text to a third of its length without losing the argument", "Paraphrase with synonyms, a changed structure and a changed word class", "Avoid the two mistakes that turn a paraphrase into copying"],
        hy: ["Կրճատել տեքստը մինչև մեկ երրորդը՝ առանց փաստարկը կորցնելու", "Վերաշարադրել հոմանիշներով, փոխված կառուցվածքով և խոսքի մասով", "Խուսափել երկու սխալից, որոնք վերաշարադրումը դարձնում են արտագրում"],
        ru: ["Сокращать текст до трети, не теряя аргумента", "Пересказывать синонимами, другой структурой и другой частью речи", "Избегать двух ошибок, превращающих пересказ в списывание"],
      },
      {
        en: `## Summarising in four steps

1. Read the whole text once without a pen.
2. Underline the sentence of each paragraph that carries its point, usually the first or the last.
3. Cross out examples, repetitions and anything in brackets.
4. Join what is left with your own linking words, in your own order if it reads better.

A summary keeps the **argument** and drops the **evidence**. If the original says *Prices rose sharply, by 12 per cent in March, 9 per cent in April and 14 per cent in May*, the summary says *Prices rose sharply for three months*.

## Three ways to paraphrase

| Way | Original | Paraphrase |
|---|---|---|
| synonym | The scheme was **expensive**. | The scheme was **costly**. |
| change the structure | The council **closed** the library. | The library **was closed** by the council. |
| change the word class | The report was **a criticism of** the plan. | The report **criticised** the plan. |

The best paraphrase uses all three at once, and then the sentence no longer looks like its original at all.

> **Original.** The council's decision to close the library was criticised by parents, who said it would harm children's reading.
> **Paraphrase.** Parents attacked the closure, arguing that children would read less as a result.

## Two mistakes

1. **Changing only the words.** *The council's decision to shut the library was attacked by parents, who stated it would damage children's reading* is the same sentence wearing a hat.
2. **Changing the meaning.** A paraphrase may not add *badly*, *obviously* or *of course*. It reports; it does not argue.

## Useful phrases

| Use | Phrase |
|---|---|
| open a summary | *The article argues that… / The writer's main point is…* |
| report a view | *According to the author… / In the writer's view…* |
| close | *Overall, the text claims that…* |

### Exercises

1. What does a summary keep and what does it drop?
2. Paraphrase with a synonym: *The scheme was expensive.*
3. Paraphrase by changing the structure: *The council closed the library.*
4. Paraphrase by changing the word class: *The report was a criticism of the plan.*
5. Why is changing only the words not a paraphrase?
6. Open a summary with a phrase from the table.
7. Summarise a paragraph of 120 words from any article in 40 words of your own.

### Answers

1. It keeps the argument and drops the evidence and examples. 2. The scheme was costly. 3. The library was closed by the council. 4. The report criticised the plan. 5. Because the structure and the shape of the sentence are still the original's, so it is still copying. 6. For example: *The article argues that…* 7. Your own answer: about a third of the length, no sentence copied.`,
        hy: `## Ամփոփում չորս քայլով

1. Կարդա ամբողջ տեքստը մեկ անգամ՝ առանց գրիչի։
2. Ընդգծիր ամեն պարբերության այն նախադասությունը, որը կրում է միտքը՝ սովորաբար առաջինը կամ վերջինը։
3. Ջնջիր օրինակները, կրկնությունները և փակագծերում եղածը։
4. Միացրու մնացածը քո կապակցող բառերով, քո հերթականությամբ, եթե այդպես ավելի լավ է կարդացվում։

Ամփոփումը պահում է **փաստարկը** և թողնում **ապացույցը**։ Եթե բնագիրն ասում է *Prices rose sharply, by 12 per cent in March, 9 per cent in April and 14 per cent in May*, ամփոփումն ասում է *Prices rose sharply for three months*։

## Վերաշարադրելու երեք ձև

| Ձև | Բնագիր | Վերաշարադրում |
|---|---|---|
| հոմանիշ | The scheme was **expensive**. | The scheme was **costly**. |
| կառուցվածքի փոփոխություն | The council **closed** the library. | The library **was closed** by the council. |
| խոսքի մասի փոփոխություն | The report was **a criticism of** the plan. | The report **criticised** the plan. |

Լավագույն վերաշարադրումը գործածում է երեքն էլ միանգամից, և այդ ժամանակ նախադասությունն այլևս բնագրին չի նմանվում։

> **Original.** The council's decision to close the library was criticised by parents, who said it would harm children's reading.
> **Paraphrase.** Parents attacked the closure, arguing that children would read less as a result.

## Երկու սխալ

1. **Միայն բառերը փոխել։** *The council's decision to shut the library was attacked by parents, who stated it would damage children's reading*-ը նույն նախադասությունն է՝ գլխարկով։
2. **Իմաստը փոխել։** Վերաշարադրումը չի կարող ավելացնել *badly*, *obviously* կամ *of course*։ Այն հաղորդում է, ոչ թե փաստարկում։

## Օգտակար արտահայտություններ

| Գործածություն | Արտահայտություն |
|---|---|
| ամփոփում սկսել | *The article argues that… / The writer's main point is…* |
| տեսակետ հաղորդել | *According to the author… / In the writer's view…* |
| ավարտել | *Overall, the text claims that…* |

### Վարժություններ

1. Ի՞նչ է պահում ամփոփումը և ի՞նչ է թողնում։
2. Վերաշարադրիր հոմանիշով․ *The scheme was expensive.*
3. Վերաշարադրիր կառուցվածքը փոխելով․ *The council closed the library.*
4. Վերաշարադրիր խոսքի մասը փոխելով․ *The report was a criticism of the plan.*
5. Ինչո՞ւ միայն բառերը փոխելը վերաշարադրում չէ։
6. Սկսիր ամփոփումն աղյուսակի արտահայտությամբ։
7. Ամփոփիր ցանկացած հոդվածի 120 բառանոց պարբերությունը քո 40 բառով։

### Պատասխաններ

1. Պահում է փաստարկը, թողնում ապացույցն ու օրինակները։ 2. The scheme was costly. 3. The library was closed by the council. 4. The report criticised the plan. 5. Որովհետև նախադասության կառուցվածքը մնում է բնագրինը։ 6. Օրինակ՝ *The article argues that…* 7. Քո պատասխանը․ մոտ մեկ երրորդը, ոչ մի արտագրված նախադասություն։`,
        ru: `## Краткое изложение в четыре шага

1. Прочитайте весь текст один раз без ручки.
2. Подчеркните в каждом абзаце предложение, несущее его мысль, обычно первое или последнее.
3. Вычеркните примеры, повторы и всё в скобках.
4. Соедините оставшееся своими связками и своим порядком, если так читается лучше.

Изложение сохраняет **аргумент** и отбрасывает **доказательства**. Если в оригинале *Prices rose sharply, by 12 per cent in March, 9 per cent in April and 14 per cent in May*, в изложении будет *Prices rose sharply for three months*.

## Три способа пересказать

| Способ | Оригинал | Пересказ |
|---|---|---|
| синоним | The scheme was **expensive**. | The scheme was **costly**. |
| смена структуры | The council **closed** the library. | The library **was closed** by the council. |
| смена части речи | The report was **a criticism of** the plan. | The report **criticised** the plan. |

Лучший пересказ использует все три сразу, и тогда предложение уже не похоже на исходное.

> **Original.** The council's decision to close the library was criticised by parents, who said it would harm children's reading.
> **Paraphrase.** Parents attacked the closure, arguing that children would read less as a result.

## Две ошибки

1. **Поменять только слова.** *The council's decision to shut the library was attacked by parents, who stated it would damage children's reading* — то же предложение в шляпе.
2. **Поменять смысл.** Пересказ не вправе добавлять *badly*, *obviously* или *of course*. Он передаёт, а не спорит.

## Полезные фразы

| Где | Фраза |
|---|---|
| начало изложения | *The article argues that… / The writer's main point is…* |
| передача мнения | *According to the author… / In the writer's view…* |
| завершение | *Overall, the text claims that…* |

### Упражнения

1. Что изложение сохраняет и что отбрасывает?
2. Перескажи синонимом: *The scheme was expensive.*
3. Перескажи сменой структуры: *The council closed the library.*
4. Перескажи сменой части речи: *The report was a criticism of the plan.*
5. Почему замена только слов — не пересказ?
6. Начни изложение фразой из таблицы.
7. Изложи абзац в 120 слов из любой статьи своими 40 словами.

### Ответы

1. Сохраняет аргумент, отбрасывает доказательства и примеры. 2. The scheme was costly. 3. The library was closed by the council. 4. The report criticised the plan. 5. Потому что структура предложения осталась исходной. 6. Например: *The article argues that…* 7. Свой ответ: около трети длины, ни одного списанного предложения.`,
      },
      [
        q(t("A summary keeps…", "Ամփոփումը պահում է", "Изложение сохраняет…"), [t("the argument", "փաստարկը", "аргумент"), t("the examples", "օրինակները", "примеры"), t("the exact words", "ճշգրիտ բառերը", "точные слова")], 0),
        q(t("Paraphrase by changing the word class: The report was a criticism of the plan.", "Վերաշարադրիր խոսքի մասը փոխելով․ The report was a criticism of the plan.", "Перескажи сменой части речи: The report was a criticism of the plan."), [t("The report was critical about the plan.", "The report was critical about the plan.", "The report was critical about the plan."), t("The report criticised the plan.", "The report criticised the plan.", "The report criticised the plan."), t("The plan was a criticism.", "The plan was a criticism.", "The plan was a criticism.")], 1),
        q(t("Why is changing only the words not a paraphrase?", "Ինչո՞ւ միայն բառերը փոխելը վերաշարադրում չէ", "Почему замена только слов — не пересказ?"), [t("because synonyms are forbidden", "որովհետև հոմանիշներն արգելված են", "потому что синонимы запрещены"), t("because it is too short", "որովհետև շատ կարճ է", "потому что слишком коротко"), t("because the structure is still the original's", "որովհետև կառուցվածքը մնում է բնագրինը", "потому что структура осталась исходной")], 2),
        q(t("Which sentence may a paraphrase not add?", "Ի՞նչը վերաշարադրումը չի կարող ավելացնել", "Что пересказ не вправе добавлять?"), [t("an opinion of its own", "սեփական կարծիք", "собственное мнение"), t("a linking word", "կապակցող բառ", "связку"), t("a synonym", "հոմանիշ", "синоним")], 0),
        q(t("Which sentence of a paragraph usually carries its point?", "Պարբերության ո՞ր նախադասությունն է սովորաբար կրում միտքը", "Какое предложение абзаца обычно несёт его мысль?"), [t("the middle one", "միջինը", "среднее"), t("the first or the last", "առաջինը կամ վերջինը", "первое или последнее"), t("the longest one", "ամենաերկարը", "самое длинное")], 1),
        q(t("Which phrase opens a summary?", "Ո՞ր արտահայտությունն է սկսում ամփոփումը", "Какая фраза начинает изложение?"), [t("In my opinion…", "In my opinion…", "In my opinion…"), t("To sum up my view…", "To sum up my view…", "To sum up my view…"), t("The article argues that…", "The article argues that…", "The article argues that…")], 2),
      ],
    ),
    lesson(
      "for-against-essay",
      ["The for-and-against essay", "Կողմ և դեմ էսսեն", "Эссе «за и против»"],
      {
        en: [
          "Plan a for-and-against essay in four paragraphs.",
          "Balance each argument with an example and a counter-argument.",
          "Write a conclusion that follows from the body, not from feeling.",
        ],
        hy: [
          "Ծրագրել կողմ և դեմ էսսեն չորս պարբերությամբ։",
          "Հավասարակշռել յուրաքանչյուր փաստարկն օրինակով և հակափաստարկով։",
          "Գրել եզրակացություն, որը բխում է շարադրանքից, ոչ թե զգացմունքից։",
        ],
        ru: [
          "Планировать эссе «за и против» в четырёх абзацах.",
          "Уравновешивать каждый аргумент примером и контраргументом.",
          "Писать вывод, который следует из текста, а не из чувства.",
        ],
      },
      {
        en: `## What the essay is for

A for-and-against essay does not ask what you feel. It asks you to show that you have understood both sides of a question, and only then to say which side the evidence favours. An examiner reading it looks for three things: a clear structure, real arguments on both sides, and a conclusion that follows from what came before.

## The four-paragraph plan

| Paragraph | Job | Length |
|---|---|---|
| 1 Introduction | restate the question in your own words, say the essay will look at both sides | 2–3 sentences |
| 2 For | two arguments in favour, each with an example | 4–5 sentences |
| 3 Against | two arguments against, each with an example | 4–5 sentences |
| 4 Conclusion | weigh the two sides, give your view | 2–3 sentences |

Never mix for and against inside one paragraph. The reader should know, from the first words of a paragraph, which side it is defending.

## An argument is not an opinion

An opinion is *School uniforms are terrible.* An argument has three parts.

| Part | Example |
|---|---|
| claim | Uniforms reduce the pressure to follow fashion. |
| reason | because every student wears the same thing |
| evidence | In a 2019 survey of Yerevan schools, pupils in uniform reported fewer arguments about clothes. |

If you cannot add a reason and an example, you have written an opinion, and an examiner will not count it.

## The language of the two sides

| Function | Phrases |
|---|---|
| introducing the question | *The question of whether… divides opinion. / People disagree about whether…* |
| adding a point for | *The main argument in favour is that… / Supporters point out that…* |
| adding a point against | *On the other hand, / Critics argue that… / A further objection is that…* |
| conceding and answering | *It is true that… However, / While this is a fair point, …* |
| concluding | *On balance, / Having considered both sides, I would argue that…* |

Note **On balance** and **Having considered both sides**: they tell the reader the conclusion came from the body. *I think* tells the reader nothing.

## Conceding a point

The strongest paragraphs admit what the other side gets right, then answer it.

> It is true that free public transport would cost the city a great deal. However, the cost of widening roads for private cars is higher still, and the city pays that cost already.

This pattern, concession plus **However**, is worth more marks than two unanswered arguments.

## A model body paragraph

> The main argument in favour of free public transport is that it reduces traffic. When buses cost nothing, people who own cars leave them at home, and the streets clear. In Tallinn, which made its buses free in 2013, car journeys in the centre fell within a year. A second argument is fairness: a city paid for by everyone's taxes should be usable by everyone, including those who cannot afford a car.

Two arguments, one example each, no opinion words.

## Mistakes that cost marks

| Mistake | Fix |
|---|---|
| three paragraphs for, one against | two and two, always |
| a conclusion that contradicts the body | weigh the arguments you actually wrote |
| *I think, I feel, in my opinion* in every sentence | keep opinion for the conclusion |
| rhetorical questions as arguments | turn the question into a claim with a reason |

### Exercises

1. Which paragraph of the plan holds your own view?
2. Turn this opinion into an argument: *Homework is useless.*
3. Which phrase introduces an argument against?
4. Complete the concession: *It is true that uniforms cost money. ______*
5. Why is *I think* a weak way to begin a conclusion?
6. What is wrong with an essay that gives three arguments for and one against?
7. Write a for-and-against body paragraph of 60 words on *Should students have mobile phones in class?* Give two arguments on one side with an example each.

### Answers

1. The conclusion, paragraph 4. 2. For example: *Homework is of little use because it is set for a whole class, so the fast students repeat what they know and the slow ones copy.* 3. *On the other hand* (also *Critics argue that*, *A further objection is that*). 4. For example: *However, a uniform costs less over a year than the fashionable clothes it replaces.* 5. Because it says the view came from feeling, not from the arguments above it; *On balance* says the opposite. 6. The essay is no longer balanced, and the reader sees the conclusion was decided before the thinking. 7. Own answer: check that both arguments are on the same side, each has an example, and no opinion words appear.`,
        hy: `## Ինչի՞ համար է էսսեն

Կողմ և դեմ էսսեն չի հարցնում, թե ի՞նչ ես զգում։ Նա պահանջում է ցույց տալ, որ հասկացել ես հարցի երկու կողմը, և միայն դրանից հետո ասել, թե որ կողմին են նպաստում փաստերը։ Քննողը փնտրում է երեք բան՝ հստակ կառուցվածք, իրական փաստարկներ երկու կողմից, և եզրակացություն, որը բխում է նախորդից։

## Չորս պարբերության ծրագիրը

| Պարբերություն | Գործը | Երկարությունը |
|---|---|---|
| 1 Ներածություն *(Introduction)* | վերաձևակերպիր հարցը սեփական բառերով, ասա, որ կքննես երկու կողմը | 2–3 նախադասություն |
| 2 Կողմ *(For)* | երկու փաստարկ կողմ, յուրաքանչյուրն օրինակով | 4–5 նախադասություն |
| 3 Դեմ *(Against)* | երկու փաստարկ դեմ, յուրաքանչյուրն օրինակով | 4–5 նախադասություն |
| 4 Եզրակացություն *(Conclusion)* | կշռիր երկու կողմը, տուր քո կարծիքը | 2–3 նախադասություն |

Երբեք մեկ պարբերության մեջ չխառնես կողմն ու դեմը։ Ընթերցողը պարբերության առաջին բառերից պետք է իմանա, թե որ կողմն է այն պաշտպանում։

## Փաստարկը կարծիք չէ

Կարծիքն է՝ *School uniforms are terrible* **(դպրոցական համազգեստը սարսափելի է)**։ Փաստարկն ունի երեք մաս։

| Մասը | Օրինակ |
|---|---|
| պնդում *(claim)* | Uniforms reduce the pressure to follow fashion. *(համազգեստը նվազեցնում է նորաձևությանը հետևելու ճնշումը)* |
| պատճառ *(reason)* | because every student wears the same thing *(որովհետև բոլոր աշակերտները նույնն են հագնում)* |
| ապացույց *(evidence)* | In a 2019 survey of Yerevan schools, pupils in uniform reported fewer arguments about clothes. *(2019 թ․ Երևանի դպրոցների հարցման մեջ համազգեստով աշակերտներն ավելի քիչ վիճաբանություն են նշել հագուստի շուրջ)* |

Եթե չես կարող ավելացնել պատճառ և օրինակ, ուրեմն գրել ես կարծիք, և քննողը դա չի հաշվի։

## Երկու կողմի լեզուն

| Գործառույթ | Արտահայտություններ |
|---|---|
| հարցի ներկայացում | *The question of whether… divides opinion. / People disagree about whether…* |
| կողմ փաստարկ | *The main argument in favour is that… / Supporters point out that…* |
| դեմ փաստարկ | *On the other hand, / Critics argue that… / A further objection is that…* |
| զիջում և պատասխան | *It is true that… However, / While this is a fair point, …* |
| եզրակացություն | *On balance, / Having considered both sides, I would argue that…* |

Նկատիր **On balance** *(ի վերջո՝ կշռելով)* և **Having considered both sides** *(երկու կողմը քննելուց հետո)*․ դրանք ընթերցողին ասում են, որ եզրակացությունը բխել է շարադրանքից։ *I think* *(ես կարծում եմ)* ոչինչ չի ասում։

## Զիջում

Ամենաուժեղ պարբերություններն ընդունում են, թե ինչում է ճիշտ մյուս կողմը, ապա պատասխանում են։

> It is true that free public transport would cost the city a great deal. However, the cost of widening roads for private cars is higher still, and the city pays that cost already.

Այս կաղապարը՝ զիջում գումարած **However**, ավելի շատ միավոր է բերում, քան երկու չպատասխանված փաստարկ։

## Օրինակելի պարբերություն

> The main argument in favour of free public transport is that it reduces traffic. When buses cost nothing, people who own cars leave them at home, and the streets clear. In Tallinn, which made its buses free in 2013, car journeys in the centre fell within a year. A second argument is fairness: a city paid for by everyone's taxes should be usable by everyone, including those who cannot afford a car.

Երկու փաստարկ, մեկ օրինակ յուրաքանչյուրին, ոչ մի կարծիքի բառ։

## Սխալներ, որ միավոր են արժենում

| Սխալը | Ուղղումը |
|---|---|
| երեք պարբերություն կողմ, մեկը՝ դեմ | միշտ երկու և երկու |
| եզրակացություն, որը հակասում է շարադրանքին | կշռիր հենց այն փաստարկները, որ գրել ես |
| *I think, I feel, in my opinion* ամեն նախադասության մեջ | կարծիքը թող եզրակացությանը |
| հարցական նախադասություններն որպես փաստարկ | հարցը դարձրու պնդում՝ պատճառով |

### Վարժություններ

1. Ծրագրի ո՞ր պարբերությունն է պահում քո կարծիքը։
2. Կարծիքը դարձրու փաստարկ․ *Homework is useless.*
3. Ո՞ր արտահայտությունն է ներկայացնում դեմ փաստարկը։
4. Լրացրու զիջումը․ *It is true that uniforms cost money. ______*
5. Ինչո՞ւ է *I think*-ը եզրակացությունը սկսելու թույլ ձև։
6. Ի՞նչն է սխալ էսսեում, որը տալիս է երեք փաստարկ կողմ և մեկը՝ դեմ։
7. Գրիր 60 բառանոց կողմ կամ դեմ պարբերություն *Should students have mobile phones in class?* թեմայով։ Տուր երկու փաստարկ մեկ կողմից, յուրաքանչյուրն օրինակով։

### Պատասխաններ

1. Եզրակացությունը՝ չորրորդ պարբերությունը։ 2. Օրինակ՝ *Homework is of little use because it is set for a whole class, so the fast students repeat what they know and the slow ones copy.* 3. *On the other hand* (նաև *Critics argue that*, *A further objection is that*)։ 4. Օրինակ՝ *However, a uniform costs less over a year than the fashionable clothes it replaces.* 5. Որովհետև ասում է, որ կարծիքը բխել է զգացմունքից, ոչ թե վերևի փաստարկներից․ *On balance*-ն ասում է հակառակը։ 6. Էսսեն այլևս հավասարակշռված չէ, և ընթերցողը տեսնում է, որ եզրակացությունը վճռվել էր մտածելուց առաջ։ 7. Սեփական պատասխան․ ստուգիր, որ երկու փաստարկը նույն կողմից են, յուրաքանչյուրն ունի օրինակ, և կարծիքի բառեր չկան։

*(Թարգմանություններ։ Օրինակելի պարբերությունը․ «Անվճար հանրային տրանսպորտի օգտին գլխավոր փաստարկն այն է, որ նվազեցնում է երթևեկը։ Երբ ավտոբուսն անվճար է, մեքենա ունեցողները թողնում են տանը, և փողոցները դատարկվում են։ Տալլինում, որ 2013 թ․ ավտոբուսն անվճար դարձրեց, կենտրոնի մեքենայի երթերը մեկ տարվա ընթացքում նվազեցին։ Երկրորդ փաստարկն արդարությունն է․ քաղաքը, որ վճարվում է բոլորի հարկերով, պետք է օգտագործելի լինի բոլորի համար, այդ թվում նրանց, ովքեր մեքենա չեն կարող գնել»։ Զիջման օրինակը․ «Ճիշտ է, որ անվճար հանրային տրանսպորտը քաղաքին շատ կարժենա։ Սակայն մասնավոր մեքենաների համար ճանապարհներ լայնացնելու արժեքն ավելի բարձր է, և քաղաքն այդ գինն արդեն վճարում է»։)*`,
        ru: `## Зачем это эссе

Эссе «за и против» не спрашивает, что ты чувствуешь. Оно требует показать, что ты понял обе стороны вопроса, и только потом сказать, какой стороне благоприятствуют факты. Экзаменатор ищет три вещи: ясную структуру, настоящие аргументы с обеих сторон и вывод, который следует из сказанного выше.

## План из четырёх абзацев

| Абзац | Задача | Длина |
|---|---|---|
| 1 Введение *(Introduction)* | переформулируй вопрос своими словами, скажи, что рассмотришь обе стороны | 2–3 предложения |
| 2 За *(For)* | два аргумента в пользу, каждый с примером | 4–5 предложений |
| 3 Против *(Against)* | два аргумента против, каждый с примером | 4–5 предложений |
| 4 Вывод *(Conclusion)* | взвесь обе стороны, дай своё мнение | 2–3 предложения |

Никогда не смешивай «за» и «против» внутри одного абзаца. Читатель с первых слов абзаца должен знать, какую сторону тот защищает.

## Аргумент — не мнение

Мнение: *School uniforms are terrible* **(школьная форма ужасна)**. У аргумента три части.

| Часть | Пример |
|---|---|
| утверждение *(claim)* | Uniforms reduce the pressure to follow fashion. *(форма снижает давление следовать моде)* |
| причина *(reason)* | because every student wears the same thing *(потому что все ученики одеты одинаково)* |
| доказательство *(evidence)* | In a 2019 survey of Yerevan schools, pupils in uniform reported fewer arguments about clothes. *(в опросе ереванских школ 2019 года ученики в форме отметили меньше споров об одежде)* |

Если ты не можешь добавить причину и пример, ты написал мнение, и экзаменатор его не зачтёт.

## Язык двух сторон

| Функция | Фразы |
|---|---|
| постановка вопроса | *The question of whether… divides opinion. / People disagree about whether…* |
| аргумент за | *The main argument in favour is that… / Supporters point out that…* |
| аргумент против | *On the other hand, / Critics argue that… / A further objection is that…* |
| уступка и ответ | *It is true that… However, / While this is a fair point, …* |
| вывод | *On balance, / Having considered both sides, I would argue that…* |

Заметь **On balance** *(взвесив всё)* и **Having considered both sides** *(рассмотрев обе стороны)*: они говорят читателю, что вывод вырос из текста. *I think* *(я думаю)* не говорит ничего.

## Уступка

Самые сильные абзацы признают, в чём права другая сторона, и отвечают ей.

> It is true that free public transport would cost the city a great deal. However, the cost of widening roads for private cars is higher still, and the city pays that cost already.

Эта схема, уступка плюс **However**, стоит больше баллов, чем два аргумента без ответа.

## Образцовый абзац

> The main argument in favour of free public transport is that it reduces traffic. When buses cost nothing, people who own cars leave them at home, and the streets clear. In Tallinn, which made its buses free in 2013, car journeys in the centre fell within a year. A second argument is fairness: a city paid for by everyone's taxes should be usable by everyone, including those who cannot afford a car.

Два аргумента, по одному примеру, ни одного слова мнения.

## Ошибки, которые стоят баллов

| Ошибка | Исправление |
|---|---|
| три абзаца «за», один «против» | всегда два и два |
| вывод, противоречащий тексту | взвешивай именно те аргументы, которые написал |
| *I think, I feel, in my opinion* в каждом предложении | оставь мнение для вывода |
| риторические вопросы вместо аргументов | преврати вопрос в утверждение с причиной |

### Упражнения

1. Какой абзац плана содержит твоё мнение?
2. Преврати мнение в аргумент: *Homework is useless.*
3. Какая фраза вводит аргумент против?
4. Заверши уступку: *It is true that uniforms cost money. ______*
5. Почему *I think* — слабое начало вывода?
6. Что не так с эссе, где три аргумента «за» и один «против»?
7. Напиши абзац на 60 слов на тему *Should students have mobile phones in class?* Дай два аргумента одной стороны, каждый с примером.

### Ответы

1. Вывод, четвёртый абзац. 2. Например: *Homework is of little use because it is set for a whole class, so the fast students repeat what they know and the slow ones copy.* 3. *On the other hand* (также *Critics argue that*, *A further objection is that*). 4. Например: *However, a uniform costs less over a year than the fashionable clothes it replaces.* 5. Потому что он говорит, что мнение выросло из чувства, а не из аргументов выше; *On balance* говорит обратное. 6. Эссе перестало быть уравновешенным, и читатель видит, что вывод был решён до размышления. 7. Свой ответ: проверь, что оба аргумента на одной стороне, у каждого есть пример и нет слов мнения.

*(Переводы. Образцовый абзац: «Главный аргумент в пользу бесплатного общественного транспорта — он снижает пробки. Когда автобус бесплатный, владельцы машин оставляют их дома, и улицы пустеют. В Таллине, сделавшем автобусы бесплатными в 2013 году, число поездок на машине в центре упало за год. Второй аргумент — справедливость: город, оплаченный налогами всех, должен быть доступен всем, включая тех, кто не может купить машину». Пример уступки: «Верно, что бесплатный общественный транспорт дорого обойдётся городу. Однако расширение дорог для частных машин стоит ещё дороже, и этот счёт город уже оплачивает».)*`,
      },
      [
        q(t("Which paragraph of the plan holds your own view?", "Ծրագրի ո՞ր պարբերությունն է պահում քո կարծիքը", "Какой абзац плана содержит твоё мнение?"), [t("the introduction", "ներածությունը", "введение"), t("the for paragraph", "կողմ պարբերությունը", "абзац «за»"), t("the conclusion", "եզրակացությունը", "вывод")], 2),
        q(t("An argument has a claim, a reason and…", "Փաստարկն ունի պնդում, պատճառ և", "У аргумента есть утверждение, причина и…"), [t("evidence", "ապացույց", "доказательство"), t("a question", "հարց", "вопрос"), t("a feeling", "զգացմունք", "чувство")], 0),
        q(t("Which phrase introduces an argument against?", "Ո՞ր արտահայտությունն է ներկայացնում դեմ փաստարկը", "Какая фраза вводит аргумент против?"), [t("Supporters point out that…", "Supporters point out that…", "Supporters point out that…"), t("A further objection is that…", "A further objection is that…", "A further objection is that…"), t("The main argument in favour is…", "The main argument in favour is…", "The main argument in favour is…")], 1),
        q(t("What follows a concession such as It is true that…?", "Ի՞նչն է հետևում It is true that… զիջմանը", "Что следует за уступкой It is true that…?"), [t("However", "However", "However"), t("Because", "Because", "Because"), t("For example", "For example", "For example")], 0),
        q(t("How many arguments should each side get?", "Քանի՞ փաստարկ պետք է ստանա յուրաքանչյուր կողմը", "Сколько аргументов должна получить каждая сторона?"), [t("three for and one against", "երեք կողմ և մեկը դեմ", "три за и один против"), t("as many as you can think of", "որքան մտքովդ անցնի", "сколько придумаешь"), t("two and two", "երկու և երկու", "два и два")], 2),
        q(t("Which opening shows the conclusion came from the body?", "Ո՞ր սկիզբը ցույց է տալիս, որ եզրակացությունը բխել է շարադրանքից", "Какое начало показывает, что вывод вырос из текста?"), [t("I think that…", "I think that…", "I think that…"), t("On balance,", "On balance,", "On balance,"), t("In my opinion,", "In my opinion,", "In my opinion,")], 1),
      ],
    ),
  ],
};
