import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Grammar mastery", "Քերականության տիրապետում", "Мастерство грамматики"),
  summary: t(
    "The whole tense system on one map, conditionals and wishes with inversion, the passive and causative, modals in all three times, reported speech, and the articles and prepositions that decide exam marks.",
    "Ժամանակների ամբողջ համակարգը մեկ քարտեզի վրա, պայմանականներ և ցանկություններ շրջադասությամբ, կրավորական և causative, մոդալներ երեք ժամանակում, անուղղակի խոսք, և այն հոդերն ու նախդիրները, որոնք որոշում են քննական բալը։",
    "Вся система времён на одной карте, условные и желания с инверсией, пассив и causative, модальные в трёх временах, косвенная речь и те артикли и предлоги, которые решают экзаменационный балл.",
  ),
  lessons: [
    lesson(
      "tense-system-review",
      ["The English tense system: full map", "Անգլերենի ժամանակների համակարգը․ ամբողջական քարտեզ", "Система времён английского: полная карта"],
      {
        en: ["Place any of the twelve tenses on a grid of time and aspect", "Choose between the simple, the continuous and the perfect by what the sentence means", "Correct the four tense errors that cost the most marks"],
        hy: ["Տասներկու ժամանակից ցանկացածը տեղավորել ժամանակի և կերպի ցանցում", "Ընտրել simple-ի, continuous-ի և perfect-ի միջև՝ ըստ նախադասության իմաստի", "Ուղղել չորս ժամանակային սխալը, որոնք ամենաշատ բալն են արժենում"],
        ru: ["Размещать любое из двенадцати времён в сетке времени и вида", "Выбирать между simple, continuous и perfect по смыслу предложения", "Исправлять четыре ошибки во временах, которые стоят больше всего баллов"],
      },
      {
        en: `## The grid

Every English tense is one box in a grid of three times and four aspects.

| | simple | continuous | perfect | perfect continuous |
|---|---|---|---|---|
| **present** | *I work* | *I am working* | *I have worked* | *I have been working* |
| **past** | *I worked* | *I was working* | *I had worked* | *I had been working* |
| **future** | *I will work* | *I will be working* | *I will have worked* | *I will have been working* |

Learn the grid, not twelve separate rules. The **time** says when; the **aspect** says how you are looking at it.

## What each aspect means

| Aspect | Question it answers | Example |
|---|---|---|
| simple | What happens? What happened? | *Water boils at 100 degrees.* |
| continuous | What is going on around now? | *She is writing her thesis.* |
| perfect | What happened before now, and still matters? | *He has lost his keys.* |
| perfect continuous | How long has it been going on? | *They have been waiting for an hour.* |

## The choices that matter

**Present simple or present continuous.** The simple is for what is always or usually true; the continuous is for what is happening around now or is temporary.

*He works in a bank* (his job) against *He is working in a bank this summer* (just now).

Some verbs are **stative** and resist the continuous: *know, believe, belong, contain, seem, prefer, own, cost*. We say *I know* and *This belongs to me*, not *I am knowing*.

**Past simple or present perfect.** The past simple needs a finished time: *yesterday, in 2019, last week, when I was a child*. The present perfect refuses one: *ever, never, just, already, yet, so far, since, for*.

*I saw him yesterday* ✓, *I have seen him yesterday* ✗.

**Past simple or past perfect.** The past perfect marks the earlier of two past events, and only when the order is not already clear. *When we arrived, the train had left.*

**Future forms.** *Will* for a decision made now or a prediction; *going to* for a plan already made or evidence you can see; the present continuous for a fixed arrangement; the present simple for timetables.

## The four most expensive errors

| Wrong | Right | Why |
|---|---|---|
| *I am knowing the answer.* | *I know the answer.* | stative verb |
| *I have seen him yesterday.* | *I saw him yesterday.* | finished time |
| *When I will come, I will call.* | *When I come, I will call.* | no *will* after *when, if, as soon as, until* |
| *He said he will come.* | *He said he would come.* | the tense steps back in reported speech |

### Exercises

1. Name the twelve boxes of the grid.
2. Choose: *He \_\_\_\_ in a bank this summer* (works / is working).
3. Correct: *I am knowing the answer.*
4. Correct: *I have seen him yesterday.*
5. Correct: *When I will come, I will call.*
6. Which tense marks the earlier of two past events?
7. Write six sentences about one day of your life, each in a different box of the grid.

### Answers

1. Present, past and future, each in simple, continuous, perfect and perfect continuous. 2. is working. 3. *I know the answer.* 4. *I saw him yesterday.* 5. *When I come, I will call.* 6. The past perfect. 7. Your own answer.`,
        hy: `## Ցանցը

Անգլերենի ամեն ժամանակ մեկ վանդակ է երեք ժամանակի և չորս կերպի ցանցում։

| | simple | continuous | perfect | perfect continuous |
|---|---|---|---|---|
| **ներկա** | *I work* | *I am working* | *I have worked* | *I have been working* |
| **անցյալ** | *I worked* | *I was working* | *I had worked* | *I had been working* |
| **ապառնի** | *I will work* | *I will be working* | *I will have worked* | *I will have been working* |

Սովորիր ցանցը, ոչ տասներկու առանձին կանոն։ **Ժամանակն** ասում է՝ երբ, **կերպն** ասում է՝ ինչպես ես նայում դրան։

## Ինչ է նշանակում ամեն կերպ

| Կերպ | Ի՞նչ հարցի է պատասխանում | Օրինակ |
|---|---|---|
| simple | Ի՞նչ է լինում։ Ի՞նչ եղավ։ | *Water boils at 100 degrees.* |
| continuous | Ի՞նչ է կատարվում հիմա շուրջդ։ | *She is writing her thesis.* |
| perfect | Ի՞նչ է եղել մինչև հիմա և դեռ կարևոր է։ | *He has lost his keys.* |
| perfect continuous | Որքա՞ն է այն շարունակվում։ | *They have been waiting for an hour.* |

## Ընտրությունները, որ կարևոր են

**Present simple թե present continuous։** Simple-ը միշտ կամ սովորաբար ճիշտ բանի համար է, continuous-ը՝ հիմա կատարվողի կամ ժամանակավորի։

*He works in a bank* (նրա աշխատանքն է) և *He is working in a bank this summer* (հենց հիմա)։

Որոշ բայեր **վիճակային** են և դիմադրում են continuous-ին․ *know, believe, belong, contain, seem, prefer, own, cost*։ Ասում ենք *I know* և *This belongs to me*, ոչ *I am knowing*։

**Past simple թե present perfect։** Past simple-ին պետք է ավարտված ժամանակ․ *yesterday, in 2019, last week, when I was a child*։ Present perfect-ը մերժում է այն․ *ever, never, just, already, yet, so far, since, for*։

*I saw him yesterday* ճիշտ է, *I have seen him yesterday* սխալ է։

**Past simple թե past perfect։** Past perfect-ը նշում է երկու անցյալ դեպքից ավելի վաղը, և միայն այն ժամանակ, երբ հերթականությունն արդեն պարզ չէ։ *When we arrived, the train had left.*

**Ապառնու ձևերը։** *Will*՝ հենց հիմա կայացված որոշման կամ կանխատեսման համար, *going to*՝ արդեն կայացված պլանի կամ տեսանելի ապացույցի, present continuous՝ հաստատված պայմանավորվածության, present simple՝ չվացուցակի։

## Չորս ամենաթանկ սխալը

| Սխալ | Ճիշտ | Ինչու |
|---|---|---|
| *I am knowing the answer.* | *I know the answer.* | վիճակային բայ |
| *I have seen him yesterday.* | *I saw him yesterday.* | ավարտված ժամանակ |
| *When I will come, I will call.* | *When I come, I will call.* | *when, if, as soon as, until*-ից հետո *will* չկա |
| *He said he will come.* | *He said he would come.* | անուղղակի խոսքում ժամանակը մեկ քայլ հետ է գնում |

### Վարժություններ

1. Անվանիր ցանցի տասներկու վանդակը։
2. Ընտրիր․ *He \_\_\_\_ in a bank this summer* (works / is working)։
3. Ուղղիր․ *I am knowing the answer.*
4. Ուղղիր․ *I have seen him yesterday.*
5. Ուղղիր․ *When I will come, I will call.*
6. Ո՞ր ժամանակն է նշում երկու անցյալ դեպքից ավելի վաղը։
7. Գրիր վեց նախադասություն քո կյանքի մեկ օրվա մասին՝ ամեն մեկը ցանցի տարբեր վանդակում։

### Պատասխաններ

1. Ներկա, անցյալ և ապառնի՝ ամեն մեկը simple, continuous, perfect և perfect continuous ձևով։ 2. is working։ 3. *I know the answer.* 4. *I saw him yesterday.* 5. *When I come, I will call.* 6. Past perfect-ը։ 7. Քո պատասխանը։`,
        ru: `## Сетка

Каждое английское время — одна клетка в сетке из трёх времён и четырёх видов.

| | simple | continuous | perfect | perfect continuous |
|---|---|---|---|---|
| **настоящее** | *I work* | *I am working* | *I have worked* | *I have been working* |
| **прошедшее** | *I worked* | *I was working* | *I had worked* | *I had been working* |
| **будущее** | *I will work* | *I will be working* | *I will have worked* | *I will have been working* |

Учите сетку, а не двенадцать отдельных правил. **Время** говорит когда, **вид** — как вы на это смотрите.

## Что значит каждый вид

| Вид | На какой вопрос отвечает | Пример |
|---|---|---|
| simple | Что бывает? Что случилось? | *Water boils at 100 degrees.* |
| continuous | Что происходит сейчас вокруг? | *She is writing her thesis.* |
| perfect | Что было до сих пор и до сих пор важно? | *He has lost his keys.* |
| perfect continuous | Как долго это длится? | *They have been waiting for an hour.* |

## Выборы, которые решают

**Present simple или present continuous.** Simple — для того, что верно всегда или обычно; continuous — для происходящего сейчас или временного.

*He works in a bank* (его работа) против *He is working in a bank this summer* (прямо сейчас).

Некоторые глаголы **статичные** и сопротивляются continuous: *know, believe, belong, contain, seem, prefer, own, cost*. Говорят *I know* и *This belongs to me*, а не *I am knowing*.

**Past simple или present perfect.** Past simple требует законченного времени: *yesterday, in 2019, last week, when I was a child*. Present perfect его отвергает: *ever, never, just, already, yet, so far, since, for*.

*I saw him yesterday* верно, *I have seen him yesterday* неверно.

**Past simple или past perfect.** Past perfect отмечает более раннее из двух прошедших событий, и только когда порядок не ясен сам по себе. *When we arrived, the train had left.*

**Формы будущего.** *Will* — решение, принятое сейчас, или прогноз; *going to* — уже принятый план или видимое доказательство; present continuous — твёрдая договорённость; present simple — расписание.

## Четыре самые дорогие ошибки

| Неверно | Верно | Почему |
|---|---|---|
| *I am knowing the answer.* | *I know the answer.* | статичный глагол |
| *I have seen him yesterday.* | *I saw him yesterday.* | законченное время |
| *When I will come, I will call.* | *When I come, I will call.* | после *when, if, as soon as, until* нет *will* |
| *He said he will come.* | *He said he would come.* | в косвенной речи время отступает на шаг |

### Упражнения

1. Назови двенадцать клеток сетки.
2. Выбери: *He \_\_\_\_ in a bank this summer* (works / is working).
3. Исправь: *I am knowing the answer.*
4. Исправь: *I have seen him yesterday.*
5. Исправь: *When I will come, I will call.*
6. Какое время отмечает более раннее из двух прошедших событий?
7. Напиши шесть предложений об одном дне своей жизни, каждое в другой клетке сетки.

### Ответы

1. Настоящее, прошедшее и будущее, каждое в simple, continuous, perfect и perfect continuous. 2. is working. 3. *I know the answer.* 4. *I saw him yesterday.* 5. *When I come, I will call.* 6. Past perfect. 7. Свой ответ.`,
      },
      [
        q(t("How many boxes does the tense grid have?", "Քանի՞ վանդակ ունի ժամանակների ցանցը", "Сколько клеток в сетке времён?"), [t("twelve", "տասներկու", "двенадцать"), t("eight", "ութ", "восемь"), t("sixteen", "տասնվեց", "шестнадцать")], 0),
        q(t("He ___ in a bank this summer.", "He ___ in a bank this summer.", "He ___ in a bank this summer."), [t("works", "works", "works"), t("is working", "is working", "is working"), t("has worked", "has worked", "has worked")], 1),
        q(t("Which verb resists the continuous?", "Ո՞ր բայն է դիմադրում continuous-ին", "Какой глагол сопротивляется continuous?"), [t("write", "write", "write"), t("wait", "wait", "wait"), t("belong", "belong", "belong")], 2),
        q(t("Correct: I have seen him yesterday.", "Ուղղիր․ I have seen him yesterday.", "Исправь: I have seen him yesterday."), [t("I saw him yesterday.", "I saw him yesterday.", "I saw him yesterday."), t("I had seen him yesterday.", "I had seen him yesterday.", "I had seen him yesterday."), t("I was seeing him yesterday.", "I was seeing him yesterday.", "I was seeing him yesterday.")], 0),
        q(t("When I ___ , I will call.", "When I ___ , I will call.", "When I ___ , I will call."), [t("will come", "will come", "will come"), t("come", "come", "come"), t("would come", "would come", "would come")], 1),
        q(t("Which tense marks the earlier of two past events?", "Ո՞ր ժամանակն է նշում ավելի վաղ անցյալ դեպքը", "Какое время отмечает более раннее прошедшее событие?"), [t("the past continuous", "past continuous-ը", "past continuous"), t("the present perfect", "present perfect-ը", "present perfect"), t("the past perfect", "past perfect-ը", "past perfect")], 2),
      ],
    ),
    lesson(
      "conditionals-wishes-review",
      ["Conditionals, wishes and inversion", "Պայմանականներ, ցանկություններ և շրջադասություն", "Условные, желания и инверсия"],
      {
        en: ["Use the four conditional types and the mixed conditional correctly", "Choose the right tense after wish, if only, would rather and it is time", "Replace if with inversion in formal writing"],
        hy: ["Ճիշտ գործածել պայմանականի չորս տեսակը և խառը պայմանականը", "Ընտրել ճիշտ ժամանակը wish, if only, would rather և it is time-ից հետո", "Պաշտոնական գրության մեջ if-ը փոխարինել շրջադասությամբ"],
        ru: ["Правильно употреблять четыре типа условных и смешанное условное", "Выбирать верное время после wish, if only, would rather и it is time", "Заменять if инверсией в формальном письме"],
      },
      {
        en: `## The four types

| Type | If-clause | Main clause | Meaning |
|---|---|---|---|
| zero | present simple | present simple | always true: *If you heat ice, it melts.* |
| first | present simple | will + infinitive | likely future: *If it rains, we will stay.* |
| second | past simple | would + infinitive | unreal present: *If I had time, I would help.* |
| third | past perfect | would have + participle | unreal past: *If I had known, I would have come.* |

Two rules hold across all four: **no will and no would inside the if-clause**, and the comma appears only when the if-clause comes first.

## The mixed conditional

A past condition can have a present result, and a present condition a past result.

| Mix | Example |
|---|---|
| past condition, present result | *If I **had studied** medicine, I **would be** a doctor now.* |
| present condition, past result | *If I **were** more careful, I **would not have lost** the key.* |

The mix is a mark-winner, because it shows you are choosing the form for its meaning rather than copying a type.

## wish and if only

| Wish about | Tense | Example |
|---|---|---|
| the present | past simple | *I wish I **knew** the answer.* |
| the past | past perfect | *I wish I **had said** nothing.* |
| another person's habit | would | *I wish you **would stop** interrupting.* |

**If only** works exactly the same way, with more feeling: *If only I had said nothing.* After *wish*, **were** is the formal form for all persons: *I wish it were Friday.*

## would rather and it is time

| Pattern | Example |
|---|---|
| would rather + infinitive (same subject) | *I would rather **stay** here.* |
| would rather + past simple (other subject) | *I would rather you **stayed** here.* |
| it is time + past simple | *It is time we **left**.* |
| it is time + for + infinitive | *It is time **for us to leave**.* |

The past tense in these patterns is not about past time at all; it marks unreality, exactly as in the second conditional.

## Inversion instead of if

| With if | Inverted |
|---|---|
| *If I were you…* | ***Were I** you…* |
| *If you should need help…* | ***Should you** need help…* |
| *If he had known…* | ***Had he** known…* |

Inversion is formal and never takes *not* in a contraction: *Had he not known*, never *Hadn't he known*.

### Exercises

1. Complete: *If you heat ice, it \_\_\_\_.*
2. Complete: *If I had time, I \_\_\_\_ you.*
3. Complete: *If I had known, I \_\_\_\_ earlier.*
4. Make a mixed conditional: *I did not study medicine. I am not a doctor now.*
5. Complete: *I wish I \_\_\_\_ the answer* (about now).
6. Invert: *If he had known, he would have come.*
7. Write four sentences about your own choices, one of each conditional type.

### Answers

1. melts. 2. would help. 3. would have come. 4. *If I had studied medicine, I would be a doctor now.* 5. knew. 6. *Had he known, he would have come.* 7. Your own answer.`,
        hy: `## Չորս տեսակը

| Տեսակ | If-ով մաս | Հիմնական մաս | Իմաստը |
|---|---|---|---|
| զրոյական | present simple | present simple | միշտ ճիշտ․ *If you heat ice, it melts.* |
| առաջին | present simple | will + infinitive | հավանական ապագա․ *If it rains, we will stay.* |
| երկրորդ | past simple | would + infinitive | անիրական ներկա․ *If I had time, I would help.* |
| երրորդ | past perfect | would have + participle | անիրական անցյալ․ *If I had known, I would have come.* |

Երկու կանոն գործում է չորսի համար էլ՝ **if-ով մասում ո՛չ will, ո՛չ would**, և ստորակետը դրվում է միայն այն ժամանակ, երբ if-ով մասն առաջինն է։

## Խառը պայմանականը

Անցյալի պայմանը կարող է ներկա արդյունք ունենալ, իսկ ներկայի պայմանը՝ անցյալ արդյունք։

| Խառնուրդ | Օրինակ |
|---|---|
| անցյալ պայման, ներկա արդյունք | *If I **had studied** medicine, I **would be** a doctor now.* |
| ներկա պայման, անցյալ արդյունք | *If I **were** more careful, I **would not have lost** the key.* |

Խառնուրդը բալ է բերում, որովհետև ցույց է տալիս, որ ձևն ընտրում ես ըստ իմաստի, ոչ թե տեսակն ես արտագրում։

## wish և if only

| Ցանկություն ինչի մասին | Ժամանակ | Օրինակ |
|---|---|---|
| ներկայի | past simple | *I wish I **knew** the answer.* |
| անցյալի | past perfect | *I wish I **had said** nothing.* |
| ուրիշի սովորության | would | *I wish you **would stop** interrupting.* |

**If only**-ն աշխատում է ճիշտ նույն ձևով, ավելի զգացմունքով․ *If only I had said nothing.* *Wish*-ից հետո **were**-ը պաշտոնական ձևն է բոլոր դեմքերի համար․ *I wish it were Friday.*

## would rather և it is time

| Կառույց | Օրինակ |
|---|---|
| would rather + infinitive (նույն ենթական) | *I would rather **stay** here.* |
| would rather + past simple (ուրիշ ենթակա) | *I would rather you **stayed** here.* |
| it is time + past simple | *It is time we **left**.* |
| it is time + for + infinitive | *It is time **for us to leave**.* |

Այս կառույցներում անցյալ ժամանակն ընդհանրապես անցյալի մասին չէ․ այն նշում է անիրականությունը, ճիշտ ինչպես երկրորդ պայմանականում։

## Շրջադասություն if-ի փոխարեն

| if-ով | Շրջված |
|---|---|
| *If I were you…* | ***Were I** you…* |
| *If you should need help…* | ***Should you** need help…* |
| *If he had known…* | ***Had he** known…* |

Շրջադասությունը պաշտոնական է և երբեք չի վերցնում կրճատ ժխտական․ *Had he not known*, երբեք *Hadn't he known*։

### Վարժություններ

1. Լրացրու․ *If you heat ice, it \_\_\_\_.*
2. Լրացրու․ *If I had time, I \_\_\_\_ you.*
3. Լրացրու․ *If I had known, I \_\_\_\_ earlier.*
4. Կազմիր խառը պայմանական․ *I did not study medicine. I am not a doctor now.*
5. Լրացրու․ *I wish I \_\_\_\_ the answer* (հիմայի մասին)։
6. Շրջիր․ *If he had known, he would have come.*
7. Գրիր չորս նախադասություն քո ընտրությունների մասին՝ ամեն պայմանականի տեսակից մեկը։

### Պատասխաններ

1. melts։ 2. would help։ 3. would have come։ 4. *If I had studied medicine, I would be a doctor now.* 5. knew։ 6. *Had he known, he would have come.* 7. Քո պատասխանը։`,
        ru: `## Четыре типа

| Тип | Часть с if | Главная часть | Смысл |
|---|---|---|---|
| нулевой | present simple | present simple | всегда верно: *If you heat ice, it melts.* |
| первый | present simple | will + инфинитив | вероятное будущее: *If it rains, we will stay.* |
| второй | past simple | would + инфинитив | нереальное настоящее: *If I had time, I would help.* |
| третий | past perfect | would have + причастие | нереальное прошлое: *If I had known, I would have come.* |

Два правила действуют для всех четырёх: **в части с if нет ни will, ни would**, и запятая ставится только тогда, когда часть с if идёт первой.

## Смешанное условное

Прошлое условие может иметь настоящий результат, а настоящее условие — прошлый.

| Смесь | Пример |
|---|---|
| прошлое условие, настоящий результат | *If I **had studied** medicine, I **would be** a doctor now.* |
| настоящее условие, прошлый результат | *If I **were** more careful, I **would not have lost** the key.* |

Смесь приносит балл, потому что показывает: форму вы выбираете по смыслу, а не списываете тип.

## wish и if only

| Желание о чём | Время | Пример |
|---|---|---|
| о настоящем | past simple | *I wish I **knew** the answer.* |
| о прошлом | past perfect | *I wish I **had said** nothing.* |
| о чужой привычке | would | *I wish you **would stop** interrupting.* |

**If only** работает точно так же, но с большим чувством: *If only I had said nothing.* После *wish* формальная форма для всех лиц — **were**: *I wish it were Friday.*

## would rather и it is time

| Конструкция | Пример |
|---|---|
| would rather + инфинитив (то же подлежащее) | *I would rather **stay** here.* |
| would rather + past simple (другое подлежащее) | *I would rather you **stayed** here.* |
| it is time + past simple | *It is time we **left**.* |
| it is time + for + инфинитив | *It is time **for us to leave**.* |

Прошедшее время в этих конструкциях вовсе не о прошлом: оно отмечает нереальность, ровно как во втором условном.

## Инверсия вместо if

| С if | С инверсией |
|---|---|
| *If I were you…* | ***Were I** you…* |
| *If you should need help…* | ***Should you** need help…* |
| *If he had known…* | ***Had he** known…* |

Инверсия формальна и никогда не берёт сокращённое отрицание: *Had he not known*, никогда *Hadn't he known*.

### Упражнения

1. Заполни: *If you heat ice, it \_\_\_\_.*
2. Заполни: *If I had time, I \_\_\_\_ you.*
3. Заполни: *If I had known, I \_\_\_\_ earlier.*
4. Построй смешанное условное: *I did not study medicine. I am not a doctor now.*
5. Заполни: *I wish I \_\_\_\_ the answer* (о настоящем).
6. Сделай инверсию: *If he had known, he would have come.*
7. Напиши четыре предложения о своих решениях, по одному каждого типа условных.

### Ответы

1. melts. 2. would help. 3. would have come. 4. *If I had studied medicine, I would be a doctor now.* 5. knew. 6. *Had he known, he would have come.* 7. Свой ответ.`,
      },
      [
        q(t("If I had time, I ___ you.", "If I had time, I ___ you.", "If I had time, I ___ you."), [t("will help", "will help", "will help"), t("would help", "would help", "would help"), t("would have helped", "would have helped", "would have helped")], 1),
        q(t("If I had known, I ___ earlier.", "If I had known, I ___ earlier.", "If I had known, I ___ earlier."), [t("would have come", "would have come", "would have come"), t("would come", "would come", "would come"), t("will come", "will come", "will come")], 0),
        q(t("I wish I ___ the answer (about now).", "I wish I ___ the answer (հիմայի մասին)։", "I wish I ___ the answer (о настоящем)."), [t("know", "know", "know"), t("had known", "had known", "had known"), t("knew", "knew", "knew")], 2),
        q(t("Invert: If he had known…", "Շրջիր․ If he had known…", "Инверсия: If he had known…"), [t("Did he know…", "Did he know…", "Did he know…"), t("Had he known…", "Had he known…", "Had he known…"), t("Were he known…", "Were he known…", "Were he known…")], 1),
        q(t("I would rather you ___ here.", "I would rather you ___ here.", "I would rather you ___ here."), [t("stayed", "stayed", "stayed"), t("stay", "stay", "stay"), t("will stay", "will stay", "will stay")], 0),
        q(t("What never goes inside an if-clause?", "Ի՞նչն երբեք չի դրվում if-ով մասում", "Что никогда не стоит в части с if?"), [t("a past tense", "անցյալ ժամանակ", "прошедшее время"), t("a comma", "ստորակետ", "запятая"), t("will or would", "will կամ would", "will или would")], 2),
      ],
    ),
    lesson(
      "passive-causative-review",
      ["Passive and causative structures", "Կրավորական և causative կառույցներ", "Пассив и causative-конструкции"],
      {
        en: ["Form the passive in every tense and with modals and infinitives", "Choose the passive when the doer is unknown, obvious or unimportant", "Use have something done and get something done correctly"],
        hy: ["Կազմել կրավորականը բոլոր ժամանակներում, մոդալների և անորոշ դերբայի հետ", "Ընտրել կրավորականը, երբ կատարողն անհայտ է, ակնհայտ կամ կարևոր չէ", "Ճիշտ գործածել have something done և get something done կառույցները"],
        ru: ["Образовывать пассив во всех временах, с модальными и инфинитивом", "Выбирать пассив, когда деятель неизвестен, очевиден или неважен", "Правильно употреблять have something done и get something done"],
      },
      {
        en: `## The passive in every tense

| Tense | Active | Passive |
|---|---|---|
| present simple | *They build houses.* | *Houses **are built**.* |
| present continuous | *They are building it.* | *It **is being built**.* |
| past simple | *They built it.* | *It **was built**.* |
| past continuous | *They were building it.* | *It **was being built**.* |
| present perfect | *They have built it.* | *It **has been built**.* |
| past perfect | *They had built it.* | *It **had been built**.* |
| future | *They will build it.* | *It **will be built**.* |
| modal | *They must build it.* | *It **must be built**.* |
| infinitive | *They want to build it.* | *They want it **to be built**.* |
| gerund | *I remember them building it.* | *I remember it **being built**.* |

Only the auxiliary changes; the main verb stays in its third form. Perfect continuous passives (*it has been being built*) exist on paper and nobody writes them.

## When to choose it

| Reason | Example |
|---|---|
| the doer is unknown | *My bag **was stolen**.* |
| the doer is obvious | *He **was arrested** last night.* |
| the doer does not matter | *The results **will be published** in June.* |
| the news is the thing, not the person | *A new school **has been opened** in Kapan.* |
| you want a formal, impersonal tone | *It **was decided** that…* |

Add **by** only when the doer is worth naming: *The film was directed by Paradjanov* is worth it; *The window was broken by somebody* is not.

## Two-object verbs

Verbs like *give, send, offer, tell, show* have two objects, so they make two passives.

*They gave **Anna** **a prize**.* → *Anna **was given** a prize.* (the usual one) \\
*They gave Anna a prize.* → *A prize **was given to** Anna.* (less usual, and note the **to**)

## Reporting with the passive

| Pattern | Example |
|---|---|
| it is said that | *It **is said that** the bridge is Roman.* |
| subject + is said to | *The bridge **is said to be** Roman.* |
| subject + is said to have | *The bridge **is said to have been** built by the Romans.* |

This pair of patterns appears in every exam transformation paper.

## have and get something done

You use it when somebody else does the work for you.

| Pattern | Example |
|---|---|
| have + object + participle | *I **had my hair cut** yesterday.* |
| get + object + participle | *We **got the roof repaired**.* |
| for a misfortune | *He **had his bike stolen**.* |

The difference: *I repaired the roof* means I did it; *I had the roof repaired* means I paid somebody. **Get** is a little more informal, and the misfortune meaning works with *have* only.

### Exercises

1. Make it passive: *They are building a new school.*
2. Make it passive: *They have published the results.*
3. Make it passive: *They must finish it today.*
4. Make both passives: *They gave Anna a prize.*
5. Rewrite with *is said to*: *It is said that the bridge is Roman.*
6. Rewrite with *have done*: *Somebody cut my hair yesterday.*
7. Write five sentences about your town, each in a different passive tense.

### Answers

1. *A new school is being built.* 2. *The results have been published.* 3. *It must be finished today.* 4. *Anna was given a prize.* / *A prize was given to Anna.* 5. *The bridge is said to be Roman.* 6. *I had my hair cut yesterday.* 7. Your own answer.`,
        hy: `## Կրավորականը բոլոր ժամանակներում

| Ժամանակ | Ներգործական | Կրավորական |
|---|---|---|
| present simple | *They build houses.* | *Houses **are built**.* |
| present continuous | *They are building it.* | *It **is being built**.* |
| past simple | *They built it.* | *It **was built**.* |
| past continuous | *They were building it.* | *It **was being built**.* |
| present perfect | *They have built it.* | *It **has been built**.* |
| past perfect | *They had built it.* | *It **had been built**.* |
| ապառնի | *They will build it.* | *It **will be built**.* |
| մոդալ | *They must build it.* | *It **must be built**.* |
| անորոշ դերբայ | *They want to build it.* | *They want it **to be built**.* |
| gerund | *I remember them building it.* | *I remember it **being built**.* |

Փոխվում է միայն օժանդակը, հիմնական բայը մնում է երրորդ ձևով։ Perfect continuous-ի կրավորականները *(it has been being built)* թղթի վրա կան, և ոչ ոք չի գրում։

## Երբ ընտրել այն

| Պատճառ | Օրինակ |
|---|---|
| կատարողն անհայտ է | *My bag **was stolen**.* |
| կատարողն ակնհայտ է | *He **was arrested** last night.* |
| կատարողը կարևոր չէ | *The results **will be published** in June.* |
| լուրը բանն է, ոչ մարդը | *A new school **has been opened** in Kapan.* |
| ուզում ես պաշտոնական, անանձնական տոն | *It **was decided** that…* |

**By**-ն ավելացրու միայն այն ժամանակ, երբ կատարողն արժե անվանել․ *The film was directed by Paradjanov* արժե, *The window was broken by somebody*՝ ոչ։

## Երկխնդիր բայեր

*give, send, offer, tell, show* տիպի բայերն երկու խնդիր ունեն, ուստի երկու կրավորական են կազմում։

*They gave **Anna** **a prize**.* → *Anna **was given** a prize.* (սովորականը) \\
*They gave Anna a prize.* → *A prize **was given to** Anna.* (պակաս սովորական, և ուշադրություն՝ **to**-ին)

## Հաղորդումը կրավորականով

| Կառույց | Օրինակ |
|---|---|
| it is said that | *It **is said that** the bridge is Roman.* |
| ենթակա + is said to | *The bridge **is said to be** Roman.* |
| ենթակա + is said to have | *The bridge **is said to have been** built by the Romans.* |

Այս զույգ կառույցը հանդիպում է փոխակերպումների ամեն քննական աշխատանքում։

## have և get something done

Գործածում ես, երբ աշխատանքը քեզ համար ուրիշն է անում։

| Կառույց | Օրինակ |
|---|---|
| have + խնդիր + դերբայ | *I **had my hair cut** yesterday.* |
| get + խնդիր + դերբայ | *We **got the roof repaired**.* |
| դժբախտության համար | *He **had his bike stolen**.* |

Տարբերությունը․ *I repaired the roof* նշանակում է՝ ես արեցի, *I had the roof repaired*՝ վճարեցի ուրիշին։ **Get**-ը մի փոքր ավելի խոսակցական է, իսկ դժբախտության իմաստը գործում է միայն *have*-ով։

### Վարժություններ

1. Դարձրու կրավորական․ *They are building a new school.*
2. Դարձրու կրավորական․ *They have published the results.*
3. Դարձրու կրավորական․ *They must finish it today.*
4. Կազմիր երկու կրավորականն էլ․ *They gave Anna a prize.*
5. Վերաշարադրիր *is said to*-ով․ *It is said that the bridge is Roman.*
6. Վերաշարադրիր *have done*-ով․ *Somebody cut my hair yesterday.*
7. Գրիր հինգ նախադասություն քո քաղաքի մասին՝ ամեն մեկը կրավորականի տարբեր ժամանակով։

### Պատասխաններ

1. *A new school is being built.* 2. *The results have been published.* 3. *It must be finished today.* 4. *Anna was given a prize.* / *A prize was given to Anna.* 5. *The bridge is said to be Roman.* 6. *I had my hair cut yesterday.* 7. Քո պատասխանը։`,
        ru: `## Пассив во всех временах

| Время | Актив | Пассив |
|---|---|---|
| present simple | *They build houses.* | *Houses **are built**.* |
| present continuous | *They are building it.* | *It **is being built**.* |
| past simple | *They built it.* | *It **was built**.* |
| past continuous | *They were building it.* | *It **was being built**.* |
| present perfect | *They have built it.* | *It **has been built**.* |
| past perfect | *They had built it.* | *It **had been built**.* |
| будущее | *They will build it.* | *It **will be built**.* |
| модальное | *They must build it.* | *It **must be built**.* |
| инфинитив | *They want to build it.* | *They want it **to be built**.* |
| герундий | *I remember them building it.* | *I remember it **being built**.* |

Меняется только вспомогательный глагол, основной остаётся в третьей форме. Пассив perfect continuous *(it has been being built)* существует на бумаге, и его никто не пишет.

## Когда его выбирают

| Причина | Пример |
|---|---|
| деятель неизвестен | *My bag **was stolen**.* |
| деятель очевиден | *He **was arrested** last night.* |
| деятель не важен | *The results **will be published** in June.* |
| новость — событие, а не человек | *A new school **has been opened** in Kapan.* |
| нужен формальный безличный тон | *It **was decided** that…* |

**By** добавляют только тогда, когда деятеля стоит назвать: *The film was directed by Paradjanov* стоит, *The window was broken by somebody* нет.

## Глаголы с двумя дополнениями

Глаголы вроде *give, send, offer, tell, show* имеют два дополнения и дают два пассива.

*They gave **Anna** **a prize**.* → *Anna **was given** a prize.* (обычный) \\
*They gave Anna a prize.* → *A prize **was given to** Anna.* (реже, и обратите внимание на **to**)

## Передача чужих слов пассивом

| Конструкция | Пример |
|---|---|
| it is said that | *It **is said that** the bridge is Roman.* |
| подлежащее + is said to | *The bridge **is said to be** Roman.* |
| подлежащее + is said to have | *The bridge **is said to have been** built by the Romans.* |

Эта пара встречается в каждой экзаменационной работе на трансформации.

## have и get something done

Их употребляют, когда работу за вас делает кто-то другой.

| Конструкция | Пример |
|---|---|
| have + дополнение + причастие | *I **had my hair cut** yesterday.* |
| get + дополнение + причастие | *We **got the roof repaired**.* |
| о несчастье | *He **had his bike stolen**.* |

Разница: *I repaired the roof* — сделал сам, *I had the roof repaired* — заплатил другому. **Get** чуть разговорнее, а значение несчастья работает только с *have*.

### Упражнения

1. Сделай пассивным: *They are building a new school.*
2. Сделай пассивным: *They have published the results.*
3. Сделай пассивным: *They must finish it today.*
4. Построй оба пассива: *They gave Anna a prize.*
5. Перепиши через *is said to*: *It is said that the bridge is Roman.*
6. Перепиши через *have done*: *Somebody cut my hair yesterday.*
7. Напиши пять предложений о своём городе, каждое в другом времени пассива.

### Ответы

1. *A new school is being built.* 2. *The results have been published.* 3. *It must be finished today.* 4. *Anna was given a prize.* / *A prize was given to Anna.* 5. *The bridge is said to be Roman.* 6. *I had my hair cut yesterday.* 7. Свой ответ.`,
      },
      [
        q(t("They are building a new school. → Passive", "They are building a new school. → Կրավորական", "They are building a new school. → Пассив"), [t("A new school is built.", "A new school is built.", "A new school is built."), t("A new school is being built.", "A new school is being built.", "A new school is being built."), t("A new school has built.", "A new school has built.", "A new school has built.")], 1),
        q(t("They must finish it today. → Passive", "They must finish it today. → Կրավորական", "They must finish it today. → Пассив"), [t("It must be finished today.", "It must be finished today.", "It must be finished today."), t("It must finished today.", "It must finished today.", "It must finished today."), t("It must being finished today.", "It must being finished today.", "It must being finished today.")], 0),
        q(t("It is said that the bridge is Roman. → The bridge ___", "It is said that the bridge is Roman. → The bridge ___", "It is said that the bridge is Roman. → The bridge ___"), [t("says to be Roman", "says to be Roman", "says to be Roman"), t("is said being Roman", "is said being Roman", "is said being Roman"), t("is said to be Roman", "is said to be Roman", "is said to be Roman")], 2),
        q(t("Somebody cut my hair yesterday. → I ___", "Somebody cut my hair yesterday. → I ___", "Somebody cut my hair yesterday. → I ___"), [t("had my hair cut yesterday", "had my hair cut yesterday", "had my hair cut yesterday"), t("had cut my hair yesterday", "had cut my hair yesterday", "had cut my hair yesterday"), t("have cut my hair yesterday", "have cut my hair yesterday", "have cut my hair yesterday")], 0),
        q(t("When should you add 'by'?", "Ե՞րբ պետք է ավելացնել «by»", "Когда добавляют 'by'?"), [t("always", "միշտ", "всегда"), t("only when the doer is worth naming", "միայն երբ կատարողն արժե անվանել", "только когда деятеля стоит назвать"), t("never in formal writing", "երբեք պաշտոնական գրության մեջ", "никогда в формальном письме")], 1),
        q(t("I had my bike stolen means…", "I had my bike stolen նշանակում է", "I had my bike stolen значит…"), [t("I paid someone to steal it", "վճարեցի, որ գողանան", "я заплатил, чтобы его украли"), t("I stole a bike", "ես հեծանիվ գողացա", "я украл велосипед"), t("someone stole my bike", "ինչ-որ մեկը գողացավ հեծանիվս", "кто-то украл мой велосипед")], 2),
      ],
    ),
    lesson(
      "modals-review",
      ["Modals in past, present and future", "Մոդալ բայեր անցյալում, ներկայում, ապառնիում", "Модальные глаголы в прошлом, настоящем и будущем"],
      {
        en: ["Match each modal to the degree of certainty or obligation it carries", "Form the past of every modal, including the ones with no past of their own", "Separate must not from do not have to, and should have from had to"],
        hy: ["Ամեն մոդալը համապատասխանեցնել այն վստահության կամ պարտավորության աստիճանին, որ կրում է", "Կազմել ամեն մոդալի անցյալը, ներառյալ նրանց, որոնք սեփական անցյալ չունեն", "Տարբերել must not-ը do not have to-ից, և should have-ը had to-ից"],
        ru: ["Соотносить каждый модальный глагол со степенью уверенности или долженствования", "Образовывать прошедшее у всех модальных, включая те, у которых своего прошедшего нет", "Различать must not и do not have to, should have и had to"],
      },
      {
        en: `## Two families

Modals say one of two things: **how sure** you are, or **what has to happen**.

| Certainty | Modal | Example |
|---|---|---|
| 100 per cent yes | *must* | *He **must** be at home; the light is on.* |
| likely | *should, ought to* | *The letter **should** arrive tomorrow.* |
| possible | *may, might, could* | *It **may** rain later.* |
| 100 per cent no | *cannot* | *She **cannot** be forty; she looks twenty-five.* |

| Obligation | Modal | Example |
|---|---|---|
| duty from a rule | *must, have to* | *You **must** wear a seat belt.* |
| advice | *should, ought to* | *You **should** see a doctor.* |
| permission | *can, may* | *You **may** leave now.* |
| no obligation | *do not have to, need not* | *You **do not have to** come.* |
| prohibition | *must not, cannot* | *You **must not** smoke here.* |

## The pair everyone confuses

| Phrase | Meaning |
|---|---|
| *You **must not** go.* | it is forbidden |
| *You **do not have to** go.* | it is not necessary; go if you like |

The same trap appears with *need*: *You needn't come* means it is not necessary, while *You must not come* means stay away.

## The past of every modal

| Present | Past | Note |
|---|---|---|
| can | could / was able to | *could* for a general ability, *was able to* for one occasion that succeeded |
| must (obligation) | had to | *must* has no past of its own |
| must (certainty) | must have | *He must have left.* |
| may, might | may have, might have | *She might have forgotten.* |
| should, ought to | should have, ought to have | *You should have told me.* |
| cannot (certainty) | cannot have | *He cannot have known.* |
| need not | need not have / did not need to | two different meanings |

Two of these deserve a sentence each. *Could* describes an ability over a stretch of time; a single successful act takes *was able to*: *I could swim at five* but *He was able to swim to the bank*. And *needn't have done* means you did it and it was unnecessary, while *didn't need to do* means you knew it was unnecessary and probably did not do it.

## Modals about the past

| Form | Meaning |
|---|---|
| *must have* | I am sure it happened |
| *cannot have* | I am sure it did not |
| *may / might / could have* | perhaps it did |
| *should have* | it did not happen, and that was wrong |
| *needn't have* | it happened, and it was unnecessary |

> *The lights are off and the car has gone. They **must have left** early. They **cannot have forgotten** the meeting, so somebody **may have called** them. Still, they **should have told** us.*

### Exercises

1. Which modal means you are sure something is true?
2. Explain the difference between *You must not go* and *You do not have to go*.
3. Give the past of *must* in its obligation sense.
4. Choose: *I \_\_\_\_ swim at five* (could / was able to).
5. Choose: *He \_\_\_\_ swim to the bank* (could / was able to).
6. Complete: *The lights are off. They \_\_\_\_ left early.*
7. Write five sentences guessing why a friend did not come, each with a different modal of the past.

### Answers

1. *must*. 2. The first forbids; the second says it is not necessary. 3. had to. 4. could. 5. was able to. 6. must have. 7. Your own answer.`,
        hy: `## Երկու ընտանիք

Մոդալներն ասում են երկու բանից մեկը՝ **որքան վստահ** ես, կամ **ինչ պետք է լինի**։

| Վստահություն | Մոդալ | Օրինակ |
|---|---|---|
| 100 տոկոս այո | *must* | *He **must** be at home; the light is on.* |
| հավանական | *should, ought to* | *The letter **should** arrive tomorrow.* |
| հնարավոր | *may, might, could* | *It **may** rain later.* |
| 100 տոկոս ոչ | *cannot* | *She **cannot** be forty; she looks twenty-five.* |

| Պարտավորություն | Մոդալ | Օրինակ |
|---|---|---|
| կանոնից բխող պարտք | *must, have to* | *You **must** wear a seat belt.* |
| խորհուրդ | *should, ought to* | *You **should** see a doctor.* |
| թույլտվություն | *can, may* | *You **may** leave now.* |
| պարտավորություն չկա | *do not have to, need not* | *You **do not have to** come.* |
| արգելք | *must not, cannot* | *You **must not** smoke here.* |

## Զույգը, որ բոլորը շփոթում են

| Արտահայտություն | Իմաստը |
|---|---|
| *You **must not** go.* | արգելված է |
| *You **do not have to** go.* | անհրաժեշտ չէ․ գնա, եթե ուզում ես |

Նույն թակարդը հանդիպում է *need*-ի հետ․ *You needn't come* նշանակում է՝ անհրաժեշտ չէ, իսկ *You must not come*՝ մի՛ արի։

## Ամեն մոդալի անցյալը

| Ներկա | Անցյալ | Նշում |
|---|---|---|
| can | could / was able to | *could*՝ ընդհանուր կարողության, *was able to*՝ մեկ հաջողված դեպքի համար |
| must (պարտավորություն) | had to | *must*-ը սեփական անցյալ չունի |
| must (վստահություն) | must have | *He must have left.* |
| may, might | may have, might have | *She might have forgotten.* |
| should, ought to | should have, ought to have | *You should have told me.* |
| cannot (վստահություն) | cannot have | *He cannot have known.* |
| need not | need not have / did not need to | երկու տարբեր իմաստ |

Սրանցից երկուսն արժանի են առանձին նախադասության։ *Could*-ը նկարագրում է կարողություն ժամանակի մի հատվածում, իսկ մեկ հաջողված արարքը վերցնում է *was able to*․ *I could swim at five*, բայց *He was able to swim to the bank*։ Եվ *needn't have done* նշանակում է՝ արեցիր, և դա ավելորդ էր, իսկ *didn't need to do*՝ գիտեիր, որ ավելորդ է, և հավանաբար չարեցիր։

## Մոդալներն անցյալի մասին

| Ձև | Իմաստը |
|---|---|
| *must have* | վստահ եմ, որ եղել է |
| *cannot have* | վստահ եմ, որ չի եղել |
| *may / might / could have* | գուցե եղել է |
| *should have* | չի եղել, և դա սխալ էր |
| *needn't have* | եղել է, և ավելորդ էր |

> *The lights are off and the car has gone. They **must have left** early. They **cannot have forgotten** the meeting, so somebody **may have called** them. Still, they **should have told** us.*

*(Լույսերն անջատված են, մեքենան չկա։ Նրանք, անշուշտ, շուտ են հեռացել։ Չէին կարող մոռանալ հանդիպումը, ուրեմն գուցե ինչ-որ մեկը զանգել է նրանց։ Այնուամենայնիվ, պետք է մեզ ասեին։)*

### Վարժություններ

1. Ո՞ր մոդալն է նշանակում, որ վստահ ես, թե բանը ճիշտ է։
2. Բացատրիր *You must not go*-ի և *You do not have to go*-ի տարբերությունը։
3. Տուր *must*-ի անցյալը պարտավորության իմաստով։
4. Ընտրիր․ *I \_\_\_\_ swim at five* (could / was able to)։
5. Ընտրիր․ *He \_\_\_\_ swim to the bank* (could / was able to)։
6. Լրացրու․ *The lights are off. They \_\_\_\_ left early.*
7. Գրիր հինգ նախադասություն՝ գուշակելով, թե ինչու ընկերդ չեկավ, ամեն մեկն անցյալի տարբեր մոդալով։

### Պատասխաններ

1. *must*։ 2. Առաջինն արգելում է, երկրորդն ասում է՝ անհրաժեշտ չէ։ 3. had to։ 4. could։ 5. was able to։ 6. must have։ 7. Քո պատասխանը։`,
        ru: `## Две семьи

Модальные говорят об одном из двух: **насколько вы уверены** или **что должно произойти**.

| Уверенность | Модальный | Пример |
|---|---|---|
| 100 процентов да | *must* | *He **must** be at home; the light is on.* |
| вероятно | *should, ought to* | *The letter **should** arrive tomorrow.* |
| возможно | *may, might, could* | *It **may** rain later.* |
| 100 процентов нет | *cannot* | *She **cannot** be forty; she looks twenty-five.* |

| Долженствование | Модальный | Пример |
|---|---|---|
| обязанность по правилу | *must, have to* | *You **must** wear a seat belt.* |
| совет | *should, ought to* | *You **should** see a doctor.* |
| разрешение | *can, may* | *You **may** leave now.* |
| обязанности нет | *do not have to, need not* | *You **do not have to** come.* |
| запрет | *must not, cannot* | *You **must not** smoke here.* |

## Пара, которую все путают

| Фраза | Смысл |
|---|---|
| *You **must not** go.* | запрещено |
| *You **do not have to** go.* | не обязательно; иди, если хочешь |

Та же ловушка с *need*: *You needn't come* значит «не обязательно», а *You must not come* — «не приходи».

## Прошедшее у каждого модального

| Настоящее | Прошедшее | Примечание |
|---|---|---|
| can | could / was able to | *could* — общая способность, *was able to* — один удавшийся случай |
| must (долженствование) | had to | у *must* своего прошедшего нет |
| must (уверенность) | must have | *He must have left.* |
| may, might | may have, might have | *She might have forgotten.* |
| should, ought to | should have, ought to have | *You should have told me.* |
| cannot (уверенность) | cannot have | *He cannot have known.* |
| need not | need not have / did not need to | два разных значения |

Двум из них нужно по предложению отдельно. *Could* описывает способность на отрезке времени, а один удавшийся поступок берёт *was able to*: *I could swim at five*, но *He was able to swim to the bank*. А *needn't have done* значит «сделал, и это было лишним», тогда как *didn't need to do* — «знал, что лишнее, и, вероятно, не делал».

## Модальные о прошлом

| Форма | Смысл |
|---|---|
| *must have* | уверен, что было |
| *cannot have* | уверен, что не было |
| *may / might / could have* | возможно, было |
| *should have* | не было, и это было неправильно |
| *needn't have* | было, и было лишним |

> *The lights are off and the car has gone. They **must have left** early. They **cannot have forgotten** the meeting, so somebody **may have called** them. Still, they **should have told** us.*

*(Свет выключен, машины нет. Они наверняка уехали рано. Забыть о встрече они не могли, значит, кто-то им, возможно, позвонил. И всё же они должны были нам сказать.)*

### Упражнения

1. Какой модальный значит, что вы уверены в чём-то?
2. Объясни разницу между *You must not go* и *You do not have to go*.
3. Дай прошедшее от *must* в значении долженствования.
4. Выбери: *I \_\_\_\_ swim at five* (could / was able to).
5. Выбери: *He \_\_\_\_ swim to the bank* (could / was able to).
6. Заполни: *The lights are off. They \_\_\_\_ left early.*
7. Напиши пять предложений с догадками, почему друг не пришёл, каждое с другим модальным о прошлом.

### Ответы

1. *must*. 2. Первое запрещает, второе говорит, что не обязательно. 3. had to. 4. could. 5. was able to. 6. must have. 7. Свой ответ.`,
      },
      [
        q(t("You must not go means…", "You must not go նշանակում է", "You must not go значит…"), [t("it is forbidden", "արգելված է", "запрещено"), t("it is not necessary", "անհրաժեշտ չէ", "не обязательно"), t("it is advisable", "ցանկալի է", "желательно")], 0),
        q(t("The past of 'must' in its obligation sense", "«must»-ի անցյալը պարտավորության իմաստով", "Прошедшее от 'must' в значении долженствования"), [t("musted", "musted", "musted"), t("had to", "had to", "had to"), t("must have", "must have", "must have")], 1),
        q(t("He ___ swim to the bank (one successful occasion)", "He ___ swim to the bank (մեկ հաջողված դեպք)", "He ___ swim to the bank (один удавшийся случай)"), [t("could", "could", "could"), t("might", "might", "might"), t("was able to", "was able to", "was able to")], 2),
        q(t("The lights are off. They ___ left early.", "The lights are off. They ___ left early.", "The lights are off. They ___ left early."), [t("must have", "must have", "must have"), t("should have", "should have", "should have"), t("needn't have", "needn't have", "needn't have")], 0),
        q(t("'You should have told me' means…", "«You should have told me» նշանակում է", "'You should have told me' значит…"), [t("you told me, which was wrong", "ասացիր, և դա սխալ էր", "ты сказал, и это было неправильно"), t("you did not tell me, and that was wrong", "չասացիր, և դա սխալ էր", "ты не сказал, и это было неправильно"), t("you may tell me later", "կարող ես հետո ասել", "можешь сказать позже")], 1),
        q(t("Which modal means you are sure something did not happen?", "Ո՞ր մոդալն է նշանակում, որ վստահ ես, թե բանը չի եղել", "Какой модальный значит уверенность, что этого не было?"), [t("might not have", "might not have", "might not have"), t("needn't have", "needn't have", "needn't have"), t("cannot have", "cannot have", "cannot have")], 2),
      ],
    ),
    lesson(
      "articles-prepositions-review",
      ["Articles and prepositions: tricky cases", "Հոդեր և նախդիրներ․ բարդ դեպքեր", "Артикли и предлоги: сложные случаи"],
      {
        en: ["Choose a, the or no article by three questions", "Use the article correctly with institutions, meals, illnesses and geography", "Fix the prepositions of time, place and dependency that Armenian and Russian speakers get wrong"],
        hy: ["Երեք հարցով ընտրել a, the կամ առանց հոդի", "Ճիշտ գործածել հոդը հաստատությունների, կերակուրների, հիվանդությունների և աշխարհագրության հետ", "Ուղղել ժամանակի, տեղի և կախյալ նախդիրները, որոնք հայախոսներն ու ռուսախոսները սխալ են գործածում"],
        ru: ["Выбирать a, the или отсутствие артикля по трём вопросам", "Правильно ставить артикль с учреждениями, едой, болезнями и географией", "Исправлять предлоги времени, места и зависимые предлоги, в которых ошибаются говорящие по-армянски и по-русски"],
      },
      {
        en: `## Three questions decide the article

1. **Is it countable and singular?** If not, you usually need no *a*.
2. **Do we both know which one?** If yes, **the**. If no, **a** or **an**.
3. **Am I talking about the thing in general?** If yes, plural or uncountable with **no article**.

| Example | Why |
|---|---|
| *I bought **a** book.* | one of many, new to you |
| *I bought **the** book you wanted.* | we both know which |
| *I like **books**.* | books in general |
| *She plays **the** piano.* | instruments take *the* |
| *He plays **football**.* | sports take no article |

## The lists worth memorising

| Group | No article | With the |
|---|---|---|
| institutions | *go to school, in hospital, at university, in prison* (for their purpose) | *go to the school* (the building) |
| meals | *have breakfast, after lunch* | *the dinner we had on Friday* |
| illnesses | *have flu, have pneumonia* | *the flu* in American usage |
| transport | *by bus, by train, on foot* | *on the bus I take every day* |
| geography | countries, cities, lakes, single mountains: *Armenia, Yerevan, Lake Sevan, Mount Ararat* | rivers, seas, ranges, plurals, republics: *the Araks, the Black Sea, the Caucasus, the Netherlands, the Republic of Armenia* |
| superlatives and ordinals | — | *the best, the first, the only* |

*He is in hospital* means he is ill; *He is at the hospital* means he is in that building, perhaps visiting.

## Prepositions of time

| Preposition | With |
|---|---|
| at | clock times, night, the weekend, Christmas: *at six, at night* |
| on | days and dates: *on Monday, on 5 May, on my birthday* |
| in | months, seasons, years, centuries, parts of the day: *in May, in winter, in the morning* |
| no preposition | *next, last, this, every*: *last week*, never *in last week* |

## Prepositions of place

| Preposition | Use |
|---|---|
| at | a point or an event: *at the door, at the concert* |
| on | a surface or a line: *on the table, on the wall, on the bus* |
| in | an enclosed space: *in the room, in the car, in Yerevan* |

*In the corner* of a room, but *at the corner* of a street. *In the picture*, but *on the page*.

## Dependent prepositions to learn by heart

*depend **on**, consist **of**, suffer **from**, succeed **in**, insist **on**, apologise **for** something **to** somebody, congratulate **on**, interested **in**, afraid **of**, good **at**, married **to**, similar **to**, different **from**, responsible **for**, the reason **for**, an increase **in**, an effect **on**, research **into**.*

Three of these are traps: English says *married **to***, not *married with*; *different **from***, not *different of*; and *congratulate **on***, not *congratulate with*.

### Exercises

1. Choose: *She plays \_\_\_\_ piano* (the / no article).
2. Choose: *He plays \_\_\_\_ football* (the / no article).
3. What is the difference between *in hospital* and *at the hospital*?
4. Add articles if needed: *\_\_\_\_ Lake Sevan, \_\_\_\_ Araks, \_\_\_\_ Caucasus, \_\_\_\_ Armenia.*
5. Choose: *\_\_\_\_ Monday, \_\_\_\_ May, \_\_\_\_ six o'clock.*
6. Correct: *She is married with a doctor.*
7. Write six sentences about your week, one for each preposition of time in the table.

### Answers

1. the. 2. no article. 3. *In hospital* means he is a patient; *at the hospital* means he is in the building. 4. Lake Sevan, the Araks, the Caucasus, Armenia. 5. on Monday, in May, at six o'clock. 6. *She is married to a doctor.* 7. Your own answer.`,
        hy: `## Երեք հարցն որոշում է հոդը

1. **Հաշվելի՞ է և եզակի՞։** Եթե ոչ, սովորաբար *a* պետք չէ։
2. **Երկուսս էլ գիտե՞նք՝ որը։** Եթե այո՝ **the**։ Եթե ոչ՝ **a** կամ **an**։
3. **Խոսո՞ւմ եմ ընդհանրապես առարկայի մասին։** Եթե այո՝ հոգնակի կամ անհաշվելի՝ **առանց հոդի**։

| Օրինակ | Ինչու |
|---|---|
| *I bought **a** book.* | շատերից մեկը, քեզ համար նոր |
| *I bought **the** book you wanted.* | երկուսս էլ գիտենք՝ որը |
| *I like **books**.* | գրքերն ընդհանրապես |
| *She plays **the** piano.* | գործիքները վերցնում են *the* |
| *He plays **football**.* | սպորտաձևերը հոդ չեն վերցնում |

## Ցուցակները, որ արժե անգիր անել

| Խումբ | Առանց հոդի | The-ով |
|---|---|---|
| հաստատություններ | *go to school, in hospital, at university, in prison* (ըստ նրանց նպատակի) | *go to the school* (շենքը) |
| կերակուրներ | *have breakfast, after lunch* | *the dinner we had on Friday* |
| հիվանդություններ | *have flu, have pneumonia* | *the flu*՝ ամերիկյան գործածության մեջ |
| տրանսպորտ | *by bus, by train, on foot* | *on the bus I take every day* |
| աշխարհագրություն | երկրներ, քաղաքներ, լճեր, առանձին սարեր․ *Armenia, Yerevan, Lake Sevan, Mount Ararat* | գետեր, ծովեր, լեռնաշղթաներ, հոգնակիներ, հանրապետություններ․ *the Araks, the Black Sea, the Caucasus, the Netherlands, the Republic of Armenia* |
| գերադրականներ և դասականներ | — | *the best, the first, the only* |

*He is in hospital* նշանակում է՝ հիվանդ է, *He is at the hospital*՝ այդ շենքում է, գուցե այցի։

## Ժամանակի նախդիրներ

| Նախդիր | Ինչի հետ |
|---|---|
| at | ժամեր, գիշեր, հանգստյան օրեր, Սուրբ Ծնունդ․ *at six, at night* |
| on | օրեր և ամսաթվեր․ *on Monday, on 5 May, on my birthday* |
| in | ամիսներ, եղանակներ, տարիներ, դարեր, օրվա մասեր․ *in May, in winter, in the morning* |
| առանց նախդիրի | *next, last, this, every*․ *last week*, երբեք *in last week* |

## Տեղի նախդիրներ

| Նախդիր | Գործածություն |
|---|---|
| at | կետ կամ միջոցառում․ *at the door, at the concert* |
| on | մակերես կամ գիծ․ *on the table, on the wall, on the bus* |
| in | փակ տարածություն․ *in the room, in the car, in Yerevan* |

Սենյակի *in the corner*, բայց փողոցի *at the corner*։ *In the picture*, բայց *on the page*։

## Կախյալ նախդիրներ՝ անգիր սովորելու

*depend **on**, consist **of**, suffer **from**, succeed **in**, insist **on**, apologise **for** something **to** somebody, congratulate **on**, interested **in**, afraid **of**, good **at**, married **to**, similar **to**, different **from**, responsible **for**, the reason **for**, an increase **in**, an effect **on**, research **into**.*

Սրանցից երեքը թակարդ են․ անգլերենն ասում է *married **to***, ոչ *married with*, *different **from***, ոչ *different of*, և *congratulate **on***, ոչ *congratulate with*։

### Վարժություններ

1. Ընտրիր․ *She plays \_\_\_\_ piano* (the / առանց հոդի)։
2. Ընտրիր․ *He plays \_\_\_\_ football* (the / առանց հոդի)։
3. Ո՞րն է *in hospital*-ի և *at the hospital*-ի տարբերությունը։
4. Ավելացրու հոդեր, եթե պետք է․ *\_\_\_\_ Lake Sevan, \_\_\_\_ Araks, \_\_\_\_ Caucasus, \_\_\_\_ Armenia.*
5. Ընտրիր․ *\_\_\_\_ Monday, \_\_\_\_ May, \_\_\_\_ six o'clock.*
6. Ուղղիր․ *She is married with a doctor.*
7. Գրիր վեց նախադասություն քո շաբաթվա մասին՝ աղյուսակի ամեն ժամանակի նախդիրի համար մեկը։

### Պատասխաններ

1. the։ 2. Առանց հոդի։ 3. *In hospital* նշանակում է՝ հիվանդ է, *at the hospital*՝ շենքում է։ 4. Lake Sevan, the Araks, the Caucasus, Armenia։ 5. on Monday, in May, at six o'clock։ 6. *She is married to a doctor.* 7. Քո պատասխանը։`,
        ru: `## Три вопроса решают артикль

1. **Исчисляемое ли это и единственное?** Если нет, *a* обычно не нужен.
2. **Знаем ли мы оба, какой именно?** Если да — **the**. Если нет — **a** или **an**.
3. **Говорю ли я о предмете вообще?** Если да — множественное или неисчисляемое **без артикля**.

| Пример | Почему |
|---|---|
| *I bought **a** book.* | одна из многих, для вас новая |
| *I bought **the** book you wanted.* | мы оба знаем какая |
| *I like **books**.* | книги вообще |
| *She plays **the** piano.* | инструменты берут *the* |
| *He plays **football**.* | виды спорта артикля не берут |

## Списки, которые стоит выучить

| Группа | Без артикля | С the |
|---|---|---|
| учреждения | *go to school, in hospital, at university, in prison* (по их назначению) | *go to the school* (здание) |
| еда | *have breakfast, after lunch* | *the dinner we had on Friday* |
| болезни | *have flu, have pneumonia* | *the flu* в американском узусе |
| транспорт | *by bus, by train, on foot* | *on the bus I take every day* |
| география | страны, города, озёра, одиночные горы: *Armenia, Yerevan, Lake Sevan, Mount Ararat* | реки, моря, хребты, множественные, республики: *the Araks, the Black Sea, the Caucasus, the Netherlands, the Republic of Armenia* |
| превосходная степень и порядковые | — | *the best, the first, the only* |

*He is in hospital* значит «он болен», *He is at the hospital* — «он в этом здании», может быть, в гостях.

## Предлоги времени

| Предлог | С чем |
|---|---|
| at | часы, ночь, выходные, Рождество: *at six, at night* |
| on | дни и даты: *on Monday, on 5 May, on my birthday* |
| in | месяцы, сезоны, годы, века, части дня: *in May, in winter, in the morning* |
| без предлога | *next, last, this, every*: *last week*, никогда *in last week* |

## Предлоги места

| Предлог | Употребление |
|---|---|
| at | точка или событие: *at the door, at the concert* |
| on | поверхность или линия: *on the table, on the wall, on the bus* |
| in | замкнутое пространство: *in the room, in the car, in Yerevan* |

*In the corner* комнаты, но *at the corner* улицы. *In the picture*, но *on the page*.

## Зависимые предлоги наизусть

*depend **on**, consist **of**, suffer **from**, succeed **in**, insist **on**, apologise **for** something **to** somebody, congratulate **on**, interested **in**, afraid **of**, good **at**, married **to**, similar **to**, different **from**, responsible **for**, the reason **for**, an increase **in**, an effect **on**, research **into**.*

Три из них — ловушки: английский говорит *married **to***, не *married with*; *different **from***, не *different of*; и *congratulate **on***, не *congratulate with*.

### Упражнения

1. Выбери: *She plays \_\_\_\_ piano* (the / без артикля).
2. Выбери: *He plays \_\_\_\_ football* (the / без артикля).
3. В чём разница между *in hospital* и *at the hospital*?
4. Поставь артикли, если нужно: *\_\_\_\_ Lake Sevan, \_\_\_\_ Araks, \_\_\_\_ Caucasus, \_\_\_\_ Armenia.*
5. Выбери: *\_\_\_\_ Monday, \_\_\_\_ May, \_\_\_\_ six o'clock.*
6. Исправь: *She is married with a doctor.*
7. Напиши шесть предложений о своей неделе, по одному на каждый предлог времени из таблицы.

### Ответы

1. the. 2. Без артикля. 3. *In hospital* значит, что он пациент; *at the hospital* — что он в здании. 4. Lake Sevan, the Araks, the Caucasus, Armenia. 5. on Monday, in May, at six o'clock. 6. *She is married to a doctor.* 7. Свой ответ.`,
      },
      [
        q(t("She plays ___ piano.", "She plays ___ piano.", "She plays ___ piano."), [t("the", "the", "the"), t("a", "a", "a"), t("no article", "առանց հոդի", "без артикля")], 0),
        q(t("He plays ___ football.", "He plays ___ football.", "He plays ___ football."), [t("the", "the", "the"), t("no article", "առանց հոդի", "без артикля"), t("a", "a", "a")], 1),
        q(t("Which needs 'the'?", "Ո՞րն է պահանջում «the»", "Чему нужен 'the'?"), [t("Lake Sevan", "Lake Sevan", "Lake Sevan"), t("Armenia", "Armenia", "Armenia"), t("Caucasus", "Caucasus", "Caucasus")], 2),
        q(t("___ Monday", "___ Monday", "___ Monday"), [t("on", "on", "on"), t("in", "in", "in"), t("at", "at", "at")], 0),
        q(t("Correct: She is married with a doctor.", "Ուղղիր․ She is married with a doctor.", "Исправь: She is married with a doctor."), [t("married of", "married of", "married of"), t("married to", "married to", "married to"), t("married on", "married on", "married on")], 1),
        q(t("'He is in hospital' means…", "«He is in hospital» նշանակում է", "'He is in hospital' значит…"), [t("he works there", "այնտեղ աշխատում է", "он там работает"), t("he is visiting someone", "ինչ-որ մեկի մոտ այցի է", "он кого-то навещает"), t("he is ill and a patient there", "հիվանդ է և այնտեղ հիվանդ է պառկած", "он болен и лежит там")], 2),
      ],
    ),
    lesson(
      "reported-speech-review-12",
      ["Reported speech: the full system", "Անուղղակի խոսք․ ամբողջ համակարգը", "Косвенная речь: вся система"],
      {
        en: ["Step every tense back correctly, and know when not to", "Report questions, orders, requests and offers with the right pattern", "Use twenty reporting verbs instead of repeating said"],
        hy: ["Ճիշտ հետ տանել ամեն ժամանակ և իմանալ, թե երբ չտանել", "Հաղորդել հարցեր, հրամաններ, խնդրանքներ և առաջարկներ ճիշտ կառույցով", "Գործածել քսան հաղորդող բայ՝ said-ը կրկնելու փոխարեն"],
        ru: ["Правильно сдвигать каждое время назад и знать, когда не сдвигать", "Передавать вопросы, приказы, просьбы и предложения нужной конструкцией", "Употреблять двадцать глаголов передачи вместо повторяющегося said"],
      },
      {
        en: `## The step back

| Direct | Reported |
|---|---|
| present simple | past simple |
| present continuous | past continuous |
| past simple | past perfect |
| present perfect | past perfect |
| will | would |
| can | could |
| must (obligation) | had to |
| may | might |

The past perfect and the modals *would, could, should, might, ought to* do not step back; they have nowhere further to go.

## What else changes

| Direct | Reported |
|---|---|
| I, we | he, she, they |
| this, these | that, those |
| here | there |
| now | then |
| today | that day |
| tomorrow | the next day |
| yesterday | the day before |
| last week | the week before |
| ago | before |

## When not to step back

1. The reporting verb is in the present: *He **says** he **is** tired.*
2. The fact is still true: *She said the Earth **goes** round the Sun.*
3. You are reporting something that has not yet happened: *He said the train **leaves** at six* when the train has still not left.

Both the stepped and the unstepped version are correct in cases 2 and 3; stepping back is never wrong.

## Questions

A reported question keeps **statement word order**, loses the question mark and loses *do, does, did*.

| Direct | Reported |
|---|---|
| *"Where do you live?"* | *She asked **where I lived**.* |
| *"Are you coming?"* | *She asked **whether I was coming**.* |
| *"What is this?"* | *He asked **what that was**.* |

A yes-or-no question takes **if** or **whether**; a wh-question keeps its own question word.

## Orders, requests, offers and more

| Function | Pattern | Example |
|---|---|---|
| order | tell + object + to | *He **told me to wait**.* |
| request | ask + object + to | *She **asked me to help**.* |
| negative | not + to | *He **told me not to move**.* |
| advice | advise + object + to | *She **advised him to rest**.* |
| offer | offer + to | *He **offered to drive** us.* |
| promise | promise + to | *She **promised to call**.* |
| suggestion | suggest + -ing or that | *He **suggested going** home.* / *He **suggested that we go** home.* |
| refusal | refuse + to | *He **refused to sign**.* |
| admission | admit + -ing | *She **admitted taking** it.* |
| accusation | accuse + of + -ing | *They **accused him of taking** it.* |

**Suggest** never takes an object plus infinitive: *He suggested me to go* is wrong in every register.

## Twenty reporting verbs

*add, admit, agree, announce, argue, claim, complain, confirm, deny, explain, insist, mention, note, observe, point out, promise, remark, reply, state, warn.*

Choosing the right one carries meaning that *said* cannot: *He **denied** taking it* says far more than *He said he did not take it*.

### Exercises

1. Report: *"I am tired," he said.*
2. Report: *"Where do you live?" she asked.*
3. Report: *"Are you coming?" she asked.*
4. Report: *"Wait here," he told me.*
5. Report: *"Let's go home," he suggested.*
6. Correct: *He suggested me to go.*
7. Report five sentences of a conversation you had, using five different reporting verbs.

### Answers

1. *He said he was tired.* 2. *She asked where I lived.* 3. *She asked whether I was coming.* 4. *He told me to wait there.* 5. *He suggested going home.* 6. *He suggested that I go* or *He suggested going.* 7. Your own answer.`,
        hy: `## Քայլը հետ

| Ուղիղ | Անուղղակի |
|---|---|
| present simple | past simple |
| present continuous | past continuous |
| past simple | past perfect |
| present perfect | past perfect |
| will | would |
| can | could |
| must (պարտավորություն) | had to |
| may | might |

Past perfect-ը և *would, could, should, might, ought to* մոդալները հետ չեն գնում․ նրանք այլևս գնալու տեղ չունեն։

## Ուրիշ ի՞նչ է փոխվում

| Ուղիղ | Անուղղակի |
|---|---|
| I, we | he, she, they |
| this, these | that, those |
| here | there |
| now | then |
| today | that day |
| tomorrow | the next day |
| yesterday | the day before |
| last week | the week before |
| ago | before |

## Երբ հետ չտանել

1. Հաղորդող բայը ներկայում է․ *He **says** he **is** tired.*
2. Փաստը դեռ ճիշտ է․ *She said the Earth **goes** round the Sun.*
3. Հաղորդում ես այն, ինչ դեռ չի եղել․ *He said the train **leaves** at six*, երբ գնացքը դեռ չի մեկնել։

2-րդ և 3-րդ դեպքերում ճիշտ են և հետ տարված, և չտարված տարբերակը․ հետ տանելն երբեք սխալ չէ։

## Հարցեր

Անուղղակի հարցը պահում է **պատմողական բառակարգը**, կորցնում է հարցականը և կորցնում *do, does, did*-ը։

| Ուղիղ | Անուղղակի |
|---|---|
| *"Where do you live?"* | *She asked **where I lived**.* |
| *"Are you coming?"* | *She asked **whether I was coming**.* |
| *"What is this?"* | *He asked **what that was**.* |

Այո-ոչ հարցը վերցնում է **if** կամ **whether**, իսկ wh-հարցը պահում է իր հարցական բառը։

## Հրամաններ, խնդրանքներ, առաջարկներ և այլն

| Գործառույթ | Կառույց | Օրինակ |
|---|---|---|
| հրաման | tell + խնդիր + to | *He **told me to wait**.* |
| խնդրանք | ask + խնդիր + to | *She **asked me to help**.* |
| ժխտական | not + to | *He **told me not to move**.* |
| խորհուրդ | advise + խնդիր + to | *She **advised him to rest**.* |
| առաջարկ | offer + to | *He **offered to drive** us.* |
| խոստում | promise + to | *She **promised to call**.* |
| առաջարկություն | suggest + -ing կամ that | *He **suggested going** home.* / *He **suggested that we go** home.* |
| մերժում | refuse + to | *He **refused to sign**.* |
| խոստովանություն | admit + -ing | *She **admitted taking** it.* |
| մեղադրանք | accuse + of + -ing | *They **accused him of taking** it.* |

**Suggest**-ը երբեք չի վերցնում խնդիր գումարած անորոշ դերբայ․ *He suggested me to go* սխալ է ամեն ոճային մակարդակում։

## Քսան հաղորդող բայ

*add, admit, agree, announce, argue, claim, complain, confirm, deny, explain, insist, mention, note, observe, point out, promise, remark, reply, state, warn.*

Ճիշտն ընտրելը կրում է իմաստ, որ *said*-ը չի կարող․ *He **denied** taking it*-ը շատ ավելին է ասում, քան *He said he did not take it*։

### Վարժություններ

1. Հաղորդիր․ *"I am tired," he said.*
2. Հաղորդիր․ *"Where do you live?" she asked.*
3. Հաղորդիր․ *"Are you coming?" she asked.*
4. Հաղորդիր․ *"Wait here," he told me.*
5. Հաղորդիր․ *"Let's go home," he suggested.*
6. Ուղղիր․ *He suggested me to go.*
7. Հաղորդիր քո ունեցած զրույցի հինգ նախադասություն՝ հինգ տարբեր հաղորդող բայով։

### Պատասխաններ

1. *He said he was tired.* 2. *She asked where I lived.* 3. *She asked whether I was coming.* 4. *He told me to wait there.* 5. *He suggested going home.* 6. *He suggested that I go* կամ *He suggested going.* 7. Քո պատասխանը։`,
        ru: `## Шаг назад

| Прямая речь | Косвенная |
|---|---|
| present simple | past simple |
| present continuous | past continuous |
| past simple | past perfect |
| present perfect | past perfect |
| will | would |
| can | could |
| must (долженствование) | had to |
| may | might |

Past perfect и модальные *would, could, should, might, ought to* назад не сдвигаются: им некуда дальше идти.

## Что ещё меняется

| Прямая речь | Косвенная |
|---|---|
| I, we | he, she, they |
| this, these | that, those |
| here | there |
| now | then |
| today | that day |
| tomorrow | the next day |
| yesterday | the day before |
| last week | the week before |
| ago | before |

## Когда не сдвигать

1. Глагол передачи в настоящем: *He **says** he **is** tired.*
2. Факт по-прежнему верен: *She said the Earth **goes** round the Sun.*
3. Передаёте то, что ещё не случилось: *He said the train **leaves** at six*, когда поезд ещё не ушёл.

В случаях 2 и 3 верны оба варианта; сдвигать назад никогда не ошибка.

## Вопросы

Косвенный вопрос сохраняет **порядок слов утверждения**, теряет вопросительный знак и теряет *do, does, did*.

| Прямая речь | Косвенная |
|---|---|
| *"Where do you live?"* | *She asked **where I lived**.* |
| *"Are you coming?"* | *She asked **whether I was coming**.* |
| *"What is this?"* | *He asked **what that was**.* |

Вопрос «да или нет» берёт **if** или **whether**, а вопрос с wh-словом сохраняет своё слово.

## Приказы, просьбы, предложения и прочее

| Функция | Конструкция | Пример |
|---|---|---|
| приказ | tell + дополнение + to | *He **told me to wait**.* |
| просьба | ask + дополнение + to | *She **asked me to help**.* |
| отрицание | not + to | *He **told me not to move**.* |
| совет | advise + дополнение + to | *She **advised him to rest**.* |
| предложение помощи | offer + to | *He **offered to drive** us.* |
| обещание | promise + to | *She **promised to call**.* |
| предложение сделать | suggest + -ing или that | *He **suggested going** home.* / *He **suggested that we go** home.* |
| отказ | refuse + to | *He **refused to sign**.* |
| признание | admit + -ing | *She **admitted taking** it.* |
| обвинение | accuse + of + -ing | *They **accused him of taking** it.* |

**Suggest** никогда не берёт дополнение плюс инфинитив: *He suggested me to go* неверно в любом регистре.

## Двадцать глаголов передачи

*add, admit, agree, announce, argue, claim, complain, confirm, deny, explain, insist, mention, note, observe, point out, promise, remark, reply, state, warn.*

Верный выбор несёт смысл, недоступный *said*: *He **denied** taking it* говорит куда больше, чем *He said he did not take it*.

### Упражнения

1. Передай: *"I am tired," he said.*
2. Передай: *"Where do you live?" she asked.*
3. Передай: *"Are you coming?" she asked.*
4. Передай: *"Wait here," he told me.*
5. Передай: *"Let's go home," he suggested.*
6. Исправь: *He suggested me to go.*
7. Передай пять реплик своего разговора пятью разными глаголами передачи.

### Ответы

1. *He said he was tired.* 2. *She asked where I lived.* 3. *She asked whether I was coming.* 4. *He told me to wait there.* 5. *He suggested going home.* 6. *He suggested that I go* или *He suggested going.* 7. Свой ответ.`,
      },
      [
        q(t("\"I am tired,\" he said. → He said he ___ tired.", "\"I am tired,\" he said. → He said he ___ tired.", "\"I am tired,\" he said. → He said he ___ tired."), [t("is", "is", "is"), t("was", "was", "was"), t("had been", "had been", "had been")], 1),
        q(t("\"Where do you live?\" she asked. → She asked ___", "\"Where do you live?\" she asked. → She asked ___", "\"Where do you live?\" she asked. → She asked ___"), [t("where I lived", "where I lived", "where I lived"), t("where did I live", "where did I live", "where did I live"), t("where do I live", "where do I live", "where do I live")], 0),
        q(t("Which modal does not step back?", "Ո՞ր մոդալը հետ չի գնում", "Какой модальный не сдвигается назад?"), [t("can", "can", "can"), t("will", "will", "will"), t("should", "should", "should")], 2),
        q(t("Correct: He suggested me to go.", "Ուղղիր․ He suggested me to go.", "Исправь: He suggested me to go."), [t("He suggested going.", "He suggested going.", "He suggested going."), t("He suggested me going.", "He suggested me going.", "He suggested me going."), t("He suggested to go me.", "He suggested to go me.", "He suggested to go me.")], 0),
        q(t("A yes-or-no question is reported with…", "Այո-ոչ հարցը հաղորդվում է", "Вопрос «да или нет» передают через…"), [t("that", "that", "that"), t("whether or if", "whether կամ if", "whether или if"), t("what", "what", "what")], 1),
        q(t("Which reporting verb takes 'of' and -ing?", "Ո՞ր հաղորդող բայն է վերցնում «of» և -ing", "Какой глагол передачи берёт 'of' и -ing?"), [t("admit", "admit", "admit"), t("refuse", "refuse", "refuse"), t("accuse", "accuse", "accuse")], 2),
      ],
    ),
  ],
};
