import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade12: VisualMap[number] = {
  "tense-system-review": [
    "tense name=present-perfect-continuous aspects=simple,continuous,perfect,perfect-continuous times=past,present,future",
    closer(
      `**The most expensive error.** Of all tense mistakes, examiners see one more than any other: the present perfect with a finished time, *I **have seen** him yesterday*. The rule is short: a finished time (*yesterday*, *in 2019*, *last week*) takes the **past simple**; *ever*, *never*, *just*, *already*, *yet*, *since* and *for* point to the **present perfect**. American English bends this a little and often says *Did you eat yet?*, where British English prefers *Have you eaten yet?*.

**Why your languages make it hard.** Russian has no present perfect, so learners choose by aspect instead: *я прочитал* can be *I read* or *I have read*. Armenian has a form that looks like a perfect, *կարդացել եմ*, but it happily takes a finished time, *Երեկ կարդացել եմ*, which English never allows. So ask the English question every time: is the time **finished**, or does it reach **now**?`,
      `**Ամենաթանկ սխալը։** Ժամանակաձևերի բոլոր սխալներից քննողներն ամենից հաճախ տեսնում են մեկը՝ present perfect-ը ավարտված ժամանակի հետ՝ *I **have seen** him yesterday*։ Կանոնը կարճ է․ ավարտված ժամանակը (*yesterday*, *in 2019*, *last week*) պահանջում է **past simple**, իսկ *ever*, *never*, *just*, *already*, *yet*, *since* և *for* բառերը մատնանշում են **present perfect**-ը։ Ամերիկյան անգլերենը մի փոքր ճկում է այս կանոնը և հաճախ ասում է *Did you eat yet?*, որտեղ բրիտանականը նախընտրում է *Have you eaten yet?*։

**Ինչու են քո լեզուները դա դժվարացնում։** Ռուսերենը present perfect չունի, ուստի սովորողներն ընտրում են ըստ կերպի՝ *я прочитал*-ը կարող է լինել *I read* կամ *I have read*։ Հայերենն ունի մի ձև, որը նման է perfect-ի՝ *կարդացել եմ*, բայց այն հանգիստ ընդունում է ավարտված ժամանակ՝ *Երեկ կարդացել եմ*, ինչն անգլերենը երբեք թույլ չի տալիս։ Ուստի ամեն անգամ տուր անգլերենի հարցը․ ժամանակը **ավարտվա՞ծ** է, թե՞ հասնում է **մինչև հիմա**։`,
      `**Самая дорогая ошибка.** Из всех ошибок во временах экзаменаторы чаще всего видят одну: present perfect с законченным временем, *I **have seen** him yesterday*. Правило короткое: законченное время (*yesterday*, *in 2019*, *last week*) требует **past simple**, а *ever*, *never*, *just*, *already*, *yet*, *since* и *for* указывают на **present perfect**. Американский английский немного гнёт правило и часто говорит *Did you eat yet?*, где британский предпочитает *Have you eaten yet?*.

**Почему твоим языкам это трудно.** В русском нет present perfect, поэтому выбирают по виду: *я прочитал* может быть и *I read*, и *I have read*. В армянском есть форма, похожая на перфект, — *կարդացել եմ*, но она спокойно сочетается с законченным временем: *Երեկ կարդացել եմ*, чего английский никогда не допускает. Поэтому каждый раз задавай английский вопрос: время **закончилось** или доходит **до сейчас**?`,
    ),
    ask(2, {
      en: ["Choose the correct sentence.", ["I have seen him yesterday.", "I saw him yesterday.", "I have been seeing him yesterday."], "A finished time takes the past simple."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["I have seen him yesterday.", "I saw him yesterday.", "I have been seeing him yesterday."], "Ավարտված ժամանակը պահանջում է past simple։"],
      ru: ["Выбери правильное предложение.", ["I have seen him yesterday.", "I saw him yesterday.", "I have been seeing him yesterday."], "Законченное время требует past simple."],
    }),
  ],
  "conditionals-wishes-review": [
    "forms mode=compare cols=condtypes zero:If_you_heat_ice,_it_melts. first:If_it_rains,_we'll_stay_in. second:If_I_had_wings,_I_would_fly. third:If_I_had_known,_I_would_have_come. mixed:If_I_had_studied_medicine,_I_would_be_a_doctor_now.",
    closer(
      `**If wishes were horses.** *"If wishes were horses, beggars would ride"* is an old British proverb, recorded in Scotland in the 1600s: wishing costs nothing. It is also a perfect **second conditional**, with *were* for every person. The **mixed conditional** joins two times: a past condition with a present result (*If I **had studied** medicine, I **would be** a doctor now*), or a present condition with a past result (*If I **were** braver, I **would have spoken** up*).

**One Russian word, four English forms.** Russian *если бы* covers every unreal case, and Armenian uses one pattern as well, *եթե սովորած լինեի, բժիշկ կլինեի*. English instead marks time inside the conditional, so the same rule applies to the relatives of *if*: ***I wish** I **had** more time* (now), ***If only** I **had listened*** (past), ***I'd rather** you **didn't** smoke*, ***It's high time** we **left***: all take a past form for an unreal present.`,
      `**Եթե ցանկությունները ձիեր լինեին։** *"If wishes were horses, beggars would ride"*-ը բրիտանական հին ասացվածք է, որը գրանցվել է Շոտլանդիայում 1600-ականներին․ ցանկանալն ոչինչ չարժե։ Այն նաև կատարյալ **երկրորդ պայմանական** է՝ *were*-ով բոլոր դեմքերի համար։ **Խառը պայմանականը** միացնում է երկու ժամանակ՝ անցյալի պայման և ներկա արդյունք (*If I **had studied** medicine, I **would be** a doctor now*) կամ ներկա պայման և անցյալ արդյունք (*If I **were** braver, I **would have spoken** up*)։

**Մեկ ռուսերեն բառ, չորս անգլերեն ձև։** Ռուսերեն *если бы*-ն ընդգրկում է բոլոր անիրական դեպքերը, հայերենը նույնպես մեկ կաղապար ունի՝ *եթե սովորած լինեի, բժիշկ կլինեի*։ Անգլերենը, ընդհակառակը, ժամանակը նշում է պայմանականի ներսում, ուստի նույն կանոնը վերաբերում է *if*-ի «ազգականներին»՝ ***I wish** I **had** more time* (հիմա), ***If only** I **had listened*** (անցյալ), ***I'd rather** you **didn't** smoke*, ***It's high time** we **left***․ բոլորն անիրական ներկայի համար ստանում են անցյալի ձև։`,
      `**Если бы желания были лошадьми.** *"If wishes were horses, beggars would ride"* — старая британская пословица, записанная в Шотландии в XVII веке: желать ничего не стоит. Это ещё и образцовый **второй тип условных** с *were* для всех лиц. **Смешанный тип** соединяет два времени: прошлое условие и настоящий результат (*If I **had studied** medicine, I **would be** a doctor now*) или настоящее условие и прошлый результат (*If I **were** braver, I **would have spoken** up*).

**Одно русское слово, четыре английские формы.** Русское *если бы* покрывает все нереальные случаи, армянский тоже обходится одной схемой: *եթե սովորած լինեի, բժիշկ կլինեի*. Английский же отмечает время внутри условного, и то же правило действует для «родственников» *if*: ***I wish** I **had** more time* (сейчас), ***If only** I **had listened*** (в прошлом), ***I'd rather** you **didn't** smoke*, ***It's high time** we **left***: все берут прошедшую форму для нереального настоящего.`,
    ),
    ask(3, {
      en: ["Which is a mixed conditional?", ["If it rains, we'll stay in.", "If I had known, I would have come.", "If I had taken the job, I would be rich now."], "Past condition, present result."],
      hy: ["Ո՞րն է խառը պայմանական։", ["If it rains, we'll stay in.", "If I had known, I would have come.", "If I had taken the job, I would be rich now."], "Անցյալի պայման, ներկա արդյունք։"],
      ru: ["Где смешанный тип условного?", ["If it rains, we'll stay in.", "If I had known, I would have come.", "If I had taken the job, I would be rich now."], "Прошлое условие, настоящий результат."],
    }),
  ],
  "passive-causative-review": [
    "forms mode=compare cols=voice They_built_the_bridge_in_1910:The_bridge_was_built_in_1910 Someone_is_repairing_my_car:My_car_is_being_repaired People_believe_he_left:He_is_believed_to_have_left I_paid_someone_to_cut_my_hair:I_had_my_hair_cut",
    closer(
      `**Mistakes were made.** In his 1987 State of the Union address, US President **Ronald Reagan** said of a scandal that *"serious mistakes were made"*. The passive let him admit the mistakes without saying who made them, and *mistakes were made* became a byword for the non-apology. That is the passive's power and its danger: it moves the doer out of sight. Use it when the doer is unknown, obvious or unimportant (*The bridge **was built** in 1910*), not to hide responsibility.

**Have something done.** The **causative** says that someone else does a job for you: *I **had my hair cut*** (by a hairdresser), not *I cut my hair* (myself). In speech *get* is common: *We **got the roof repaired***. It also describes bad experiences: *She **had her bag stolen***. Reporting passives are the formal way to report beliefs: *He **is said to be** rich*, *She **is thought to have left***.`,
      `**Mistakes were made։** 1987 թվականին Միության վիճակի մասին ուղերձում ԱՄՆ նախագահ **Ռոնալդ Ռեյգանը** մի սկանդալի մասին ասաց *"serious mistakes were made"*՝ «լուրջ սխալներ են թույլ տրվել»։ Կրավորականը նրան թույլ տվեց ընդունել սխալները՝ առանց ասելու, թե ով է դրանք թույլ տվել, և *mistakes were made*-ը դարձավ «ոչ ներողության» խորհրդանիշ։ Սա է կրավորականի ուժն ու վտանգը․ այն գործողին հեռացնում է տեսադաշտից։ Գործածիր այն, երբ գործողն անհայտ է, ակնհայտ կամ անկարևոր (*The bridge **was built** in 1910*), ոչ թե պատասխանատվությունը թաքցնելու համար։

**Have something done։** **Պատճառական** կառույցն ասում է, որ քո փոխարեն գործն անում է ուրիշը՝ *I **had my hair cut*** (վարսավիրը), ոչ թե *I cut my hair* (ինքս)։ Խոսքում հաճախ է գործածվում *get*-ը՝ *We **got the roof repaired***։ Այն նկարագրում է նաև վատ փորձառություններ՝ *She **had her bag stolen***։ Հաղորդող կրավորականները կարծիքներ հաղորդելու պաշտոնական եղանակն են՝ *He **is said to be** rich*, *She **is thought to have left***։`,
      `**Mistakes were made.** В послании «О положении страны» 1987 года президент США **Рональд Рейган** сказал о скандале: *"serious mistakes were made"* — «были допущены серьёзные ошибки». Пассив позволил признать ошибки, не называя, кто их допустил, и *mistakes were made* стало символом «извинения без извинения». В этом сила и опасность пассива: он убирает деятеля из поля зрения. Используй его, когда деятель неизвестен, очевиден или неважен (*The bridge **was built** in 1910*), а не чтобы спрятать ответственность.

**Have something done.** **Каузатив** говорит, что работу за тебя сделал кто-то другой: *I **had my hair cut*** (у парикмахера), а не *I cut my hair* (сам). В речи часто *get*: *We **got the roof repaired***. Он описывает и неприятности: *She **had her bag stolen***. Пассив сообщения — официальный способ передавать мнения: *He **is said to be** rich*, *She **is thought to have left***.`,
    ),
    ask(1, {
      en: ["A hairdresser cut your hair. What do you say?", ["I had my hair cut.", "I cut my hair.", "I had cut my hair."], "Have + object + past participle: someone else did it."],
      hy: ["Վարսավիրը կտրեց քո մազերը։ Ի՞նչ ես ասում։", ["I had my hair cut.", "I cut my hair.", "I had cut my hair."], "Have + խնդիր + անցյալ դերբայ՝ ուրիշն է արել։"],
      ru: ["Тебя подстриг парикмахер. Что ты скажешь?", ["I had my hair cut.", "I cut my hair.", "I had cut my hair."], "Have + дополнение + причастие: сделал кто-то другой."],
    }),
  ],
  "modals-review": [
    "forms mode=compare cols=modalpast must_(obligation):had_to can:could_/_was_able_to may:might will:would needn't:didn't_need_to_/_needn't_have",
    closer(
      `**Can means know.** Modal verbs are some of the oldest words in English. **Can** comes from Old English *cunnan*, "to know how", the same family as *know* and *cunning*: to be able was to know how. **Must** was once a past tense, of the verb *mōtan*, which is why it still has no *-ed* form today and borrows *had to* for the past. Russian **мочь** and Armenian **կարող** are ordinary verbs that change for tense, which is why *I could to swim* is such a common slip.

**Two pasts for can.** For general ability in the past, use **could**: *I **could** swim when I was five*. For one success on one occasion, use **was able to** or **managed to**: *The fire spread, but everyone **was able to** escape*, not *could escape*. And remember the two pasts of *need*: *We **didn't need to** wait* (so we didn't) and *We **needn't have** waited* (we did, for nothing).`,
      `**Can նշանակում է իմանալ։** Եղանակավորող բայերն անգլերենի ամենահին բառերից են։ **Can**-ը գալիս է հին անգլերեն *cunnan*՝ «իմանալ, թե ինչպես» բայից, նույն ընտանիքից, ինչ *know*-ն և *cunning*-ը․ կարողանալը նշանակում էր իմանալ, թե ինչպես։ **Must**-ը ժամանակին անցյալ ժամանակ էր՝ *mōtan* բայի, ուստի այսօր էլ չունի *-ed* ձև և անցյալի համար փոխառում է *had to*-ն։ Ռուսերեն **мочь**-ը և հայերեն **կարող**-ը սովորական բայեր են, որոնք փոխվում են ըստ ժամանակի, ուստի *I could to swim*-ը այդքան տարածված սխալ է։

**Can-ի երկու անցյալ։** Անցյալում ընդհանուր կարողության համար գործածիր **could**՝ *I **could** swim when I was five*։ Մեկ դեպքում մեկ հաջողության համար գործածիր **was able to** կամ **managed to**՝ *The fire spread, but everyone **was able to** escape*, ոչ թե *could escape*։ Եվ հիշիր *need*-ի երկու անցյալը՝ *We **didn't need to** wait* (ուստի չսպասեցինք) և *We **needn't have** waited* (սպասեցինք, բայց իզուր)։`,
      `**Can значит «знать».** Модальные глаголы — одни из самых древних слов английского. **Can** происходит от древнеанглийского *cunnan*, «знать, как», из той же семьи, что *know* и *cunning*: уметь значило знать как. **Must** когда-то было прошедшим временем глагола *mōtan*, поэтому у него до сих пор нет формы на *-ed* и в прошедшем оно берёт взаймы *had to*. Русское **мочь** и армянское **կարող** — обычные глаголы, меняющиеся по временам, отсюда частая ошибка *I could to swim*.

**Два прошедших для can.** Для общей способности в прошлом — **could**: *I **could** swim when I was five*. Для одного успеха в одном случае — **was able to** или **managed to**: *The fire spread, but everyone **was able to** escape*, а не *could escape*. И помни два прошедших у *need*: *We **didn't need to** wait* (и не ждали) и *We **needn't have** waited* (ждали, но зря).`,
    ),
    ask(2, {
      en: ["The building caught fire, but everyone ______ get out.", ["could", "was able to", "can"], "One success on one occasion: was able to / managed to."],
      hy: ["The building caught fire, but everyone ______ get out.", ["could", "was able to", "can"], "Մեկ դեպքում մեկ հաջողություն՝ was able to / managed to։"],
      ru: ["The building caught fire, but everyone ______ get out.", ["could", "was able to", "can"], "Один успех в одном случае — was able to / managed to."],
    }),
  ],
  "articles-prepositions-review": [
    "forms mode=compare cols=inonat at_six_o'clock:on_Monday:in_May at_night:on_my_birthday:in_the_morning at_the_weekend:on_1_September:in_2026 at_Christmas:on_Christmas_Day:in_winter",
    closer(
      `**From a point to a period.** Time prepositions follow a simple scale: **at** for a point (*at six*, *at night*, *at Christmas*), **on** for a day or date (*on Monday*, *on 1 September*, *on Christmas Day*), **in** for anything longer (*in May*, *in winter*, *in 2026*, *in the morning*). British English says *at the weekend*, American English *on the weekend*. And no preposition at all before *this*, *next*, *last* and *every*: *next Monday*, not *on next Monday*.

**Learn them in chunks.** Russian and Armenian do much of this work with **cases** and endings (*в мае*, *մայիսին*), so English prepositions rarely translate one to one: *в пятницу* is *on Friday*, but *в 2026 году* is *in 2026*, and *ժամը վեցին* is *at six*. Dependent prepositions must be memorised with their word: *interested **in***, *depend **on***, *good **at***, *married **to***, *different **from***.`,
      `**Պահից մինչև ժամանակահատված։** Ժամանակի նախդիրները հետևում են պարզ սանդղակի՝ **at**՝ պահի համար (*at six*, *at night*, *at Christmas*), **on**՝ օրվա կամ ամսաթվի (*on Monday*, *on 1 September*, *on Christmas Day*), **in**՝ ավելի երկար ամեն ինչի համար (*in May*, *in winter*, *in 2026*, *in the morning*)։ Բրիտանական անգլերենն ասում է *at the weekend*, ամերիկյանը՝ *on the weekend*։ Իսկ *this*, *next*, *last* և *every* բառերից առաջ նախդիր չի դրվում՝ *next Monday*, ոչ թե *on next Monday*։

**Սովորիր կտորներով։** Ռուսերենն ու հայերենն այս աշխատանքի մեծ մասն անում են **հոլովներով** և վերջավորություններով (*в мае*, *մայիսին*), ուստի անգլերեն նախդիրները հազվադեպ են թարգմանվում մեկը մեկին՝ *в пятницу*-ն *on Friday* է, բայց *в 2026 году*-ն՝ *in 2026*, իսկ *ժամը վեցին*-ը՝ *at six*։ Կախյալ նախդիրները պետք է անգիր անել իրենց բառի հետ՝ *interested **in***, *depend **on***, *good **at***, *married **to***, *different **from***։`,
      `**От точки к периоду.** Предлоги времени подчиняются простой шкале: **at** — точка (*at six*, *at night*, *at Christmas*), **on** — день или дата (*on Monday*, *on 1 September*, *on Christmas Day*), **in** — всё, что длиннее (*in May*, *in winter*, *in 2026*, *in the morning*). Британцы говорят *at the weekend*, американцы — *on the weekend*. А перед *this*, *next*, *last* и *every* предлога нет вовсе: *next Monday*, а не *on next Monday*.

**Учи блоками.** Русский и армянский делают большую часть этой работы **падежами** и окончаниями (*в мае*, *մայիսին*), поэтому английские предлоги редко переводятся один к одному: *в пятницу* — *on Friday*, но *в 2026 году* — *in 2026*, а *ժամը վեցին* — *at six*. Зависимые предлоги запоминай вместе со словом: *interested **in***, *depend **on***, *good **at***, *married **to***, *different **from***.`,
    ),
    ask(3, {
      en: ["Choose the correct phrase.", ["on next Monday", "in next Monday", "next Monday"], "No preposition before next, last, this, every."],
      hy: ["Ընտրիր ճիշտ արտահայտությունը։", ["on next Monday", "in next Monday", "next Monday"], "Next, last, this, every բառերից առաջ նախդիր չկա։"],
      ru: ["Выбери правильный вариант.", ["on next Monday", "in next Monday", "next Monday"], "Перед next, last, this, every предлога нет."],
    }),
  ],
  "reported-speech-review-12": [
    "forms mode=compare cols=reported \"I'm_tired.\":She_said_she_was_tired. \"I'll_call_you.\":He_promised_to_call_me. \"Don't_touch_it!\":She_told_us_not_to_touch_it. \"Where_do_you_live?\":He_asked_where_I_lived.",
    closer(
      `**English steps back, your languages do not.** After a past reporting verb, English usually moves the tense one step back: *"I am tired"* → *She said she **was** tired*. Russian and Armenian keep the original tense: *Она сказала, что **устала***, *Ասաց, որ **հոգնած է***. This is why learners write *She said she is tired*. You can keep the present only when the fact is still true and you want to show it: *He told me he **lives** in Gyumri* (he still does).

**The voice inside the story.** Novelists blend the two kinds of speech into **free indirect speech**: the narrator's past tense with the character's own words and feelings, *Was she really going to leave? Tomorrow, of all days!* **Jane Austen** was one of the first great masters of the technique, in novels published from 1811. In exams, though, you will mostly need the tidy forms: questions without question order (*He asked where I **lived***), and orders with *told + object + to* (*She told us **not to touch** it*).`,
      `**Անգլերենը մի քայլ հետ է գնում, քո լեզուները՝ ոչ։** Անցյալ ժամանակով հաղորդող բայից հետո անգլերենը սովորաբար ժամանակը մեկ քայլ հետ է տանում՝ *"I am tired"* → *She said she **was** tired*։ Ռուսերենն ու հայերենը պահում են սկզբնական ժամանակը՝ *Она сказала, что **устала***, *Ասաց, որ **հոգնած է***։ Ահա թե ինչու են սովորողները գրում *She said she is tired*։ Ներկան կարող ես պահել միայն այն դեպքում, երբ փաստը դեռ ճիշտ է, և ուզում ես դա ցույց տալ՝ *He told me he **lives** in Gyumri* (նա դեռ այնտեղ է ապրում)։

**Ձայնը պատմության ներսում։** Վիպասաններն երկու տեսակի խոսքը միախառնում են **free indirect speech**-ում՝ պատմողի անցյալ ժամանակը հերոսի սեփական բառերի և զգացմունքների հետ՝ *Was she really going to leave? Tomorrow, of all days!* **Ջեյն Օսթինը** 1811 թվականից հրատարակված իր վեպերում այս հնարքի առաջին մեծ վարպետներից էր։ Քննություններում, սակայն, հիմնականում պետք կգան կոկիկ ձևերը՝ հարցեր առանց հարցական շարադասության (*He asked where I **lived***) և հրամաններ *told + խնդիր + to* կառույցով (*She told us **not to touch** it*)։`,
      `**Английский делает шаг назад, твои языки — нет.** После глагола сообщения в прошедшем английский обычно сдвигает время на шаг назад: *"I am tired"* → *She said she **was** tired*. Русский и армянский сохраняют исходное время: *Она сказала, что **устала***, *Ասաց, որ **հոգնած է***. Поэтому ученики пишут *She said she is tired*. Настоящее можно оставить, только если факт всё ещё верен и ты хочешь это подчеркнуть: *He told me he **lives** in Gyumri* (он и сейчас там живёт).

**Голос внутри рассказа.** Романисты смешивают оба вида речи в **несобственно-прямую речь**: прошедшее время рассказчика со словами и чувствами героя — *Was she really going to leave? Tomorrow, of all days!* **Джейн Остин** в романах, выходивших с 1811 года, стала одним из первых великих мастеров этого приёма. На экзамене же чаще всего нужны аккуратные формы: вопросы без вопросительного порядка слов (*He asked where I **lived***) и приказы с *told + дополнение + to* (*She told us **not to touch** it*).`,
    ),
    ask(1, {
      en: ["«Where do you live?» he asked. Report it.", ["He asked where I lived.", "He asked where did I live.", "He asked where do you live."], "Reported questions use statement order."],
      hy: ["«Where do you live?» he asked. Հաղորդիր անուղղակի։", ["He asked where I lived.", "He asked where did I live.", "He asked where do you live."], "Անուղղակի հարցերում շարադասությունը պատմողական է։"],
      ru: ["«Where do you live?» he asked. Передай косвенно.", ["He asked where I lived.", "He asked where did I live.", "He asked where do you live."], "В косвенных вопросах прямой порядок слов."],
    }),
  ],
  "collocations-advanced": [
    "forms mode=compare cols=colloc make_a_photo:take_a_photo say_a_lie:tell_a_lie high_traffic:heavy_traffic open_the_TV:turn_on_the_TV give_an_exam:take_an_exam",
    closer(
      `**Translation pulls you off course.** Each wrong form in the table is a word-for-word copy of Russian or Armenian: *сделать фото* gives *make a photo*, *открыть телевизор* gives *open the TV*, and *քննություն հանձնել* ("hand over an exam") gives *give an exam*, when English **takes** or **sits** an exam and only the teacher *gives* one. Nothing is grammatically wrong in these mistakes; they are simply not the words English speakers put together.

**Precise verbs and delexical verbs.** English is rich in verbs that carry the whole meaning: not *make bigger* but **enlarge**, not *go up quickly* but **soar**. At the same time, very common verbs like *have*, *take*, *give* and *make* lose their own meaning and just carry a noun: *have a look*, *take a break*, *give a speech*, *make a suggestion*. These **delexical** phrases must be learnt whole; a good collocations dictionary or corpus search shows which verb a noun prefers.`,
      `**Թարգմանությունը շեղում է։** Աղյուսակի յուրաքանչյուր սխալ ձև ռուսերենի կամ հայերենի բառացի պատճեն է․ *сделать фото*-ն տալիս է *make a photo*, *открыть телевизор*-ը՝ *open the TV*, իսկ *քննություն հանձնել*-ը՝ *give an exam*, մինչդեռ անգլերենում քննություն **take** կամ **sit** են անում, իսկ *give* է անում միայն ուսուցիչը։ Այս սխալներում քերականորեն ոչինչ սխալ չէ․ պարզապես անգլախոսներն այդ բառերն իրար հետ չեն դնում։

**Ճշգրիտ բայեր և «դատարկ» բայեր։** Անգլերենը հարուստ է բայերով, որոնք կրում են ամբողջ իմաստը՝ ոչ թե *make bigger*, այլ **enlarge**, ոչ թե *go up quickly*, այլ **soar**։ Միևնույն ժամանակ շատ տարածված բայերը, ինչպես *have*, *take*, *give* և *make*, կորցնում են իրենց իմաստը և պարզապես կրում են գոյականը՝ *have a look*, *take a break*, *give a speech*, *make a suggestion*։ Այս **delexical** արտահայտությունները պետք է սովորել ամբողջությամբ․ լավ կապակցությունների բառարանը կամ կորպուսում որոնումը ցույց է տալիս, թե որ բայն է նախընտրում գոյականը։`,
      `**Перевод сбивает с курса.** Каждая неверная форма в таблице — дословная копия русского или армянского: *сделать фото* даёт *make a photo*, *открыть телевизор* — *open the TV*, а *քննություն հանձնել* («сдать экзамен») — *give an exam*, хотя по-английски экзамен **take** или **sit**, а *give* его только учитель. Грамматически в этих ошибках всё верно; просто англоговорящие так слова не сочетают.

**Точные глаголы и «пустые» глаголы.** В английском много глаголов, несущих весь смысл: не *make bigger*, а **enlarge**, не *go up quickly*, а **soar**. В то же время самые частые глаголы — *have*, *take*, *give*, *make* — теряют собственное значение и просто несут существительное: *have a look*, *take a break*, *give a speech*, *make a suggestion*. Эти **делексические** сочетания учат целиком; хороший словарь сочетаемости или поиск по корпусу покажет, какой глагол предпочитает существительное.`,
    ),
    ask(2, {
      en: ["Choose the natural English.", ["I have to give an exam tomorrow.", "I have to take an exam tomorrow.", "I have to make an exam tomorrow."], "Students take or sit exams; teachers give them."],
      hy: ["Ընտրիր բնական անգլերենը։", ["I have to give an exam tomorrow.", "I have to take an exam tomorrow.", "I have to make an exam tomorrow."], "Աշակերտները take կամ sit են անում քննությունը, ուսուցիչները՝ give։"],
      ru: ["Выбери естественный английский.", ["I have to give an exam tomorrow.", "I have to take an exam tomorrow.", "I have to make an exam tomorrow."], "Ученики take или sit экзамен, учителя его give."],
    }),
  ],
  "phrasal-verbs-advanced": [
    "forms mode=compare cols=phrasal put_off:postpone turn_down:reject come_across:find_by_chance look_into:investigate bring_about:cause carry_out:perform",
    closer(
      `**A name from 1925.** The term **phrasal verb** is usually credited to the writer **Logan Pearsall Smith**, who used it in his book *Words and Idioms* (1925). The verbs themselves are much older and almost all **Germanic**: a short native verb plus a particle (*put off*, *turn down*). Their formal equivalents are mostly **Latin** or French single words: *postpone*, *reject*, *investigate*. That is why phrasal verbs feel informal and single verbs formal.

**The particle carries meaning.** Particles are not random. **Up** often means completion (*eat up*, *use up*, *fill up*); **off** means departure or ending (*set off*, *call off*); **out** means to the end or into the open (*find out*, *carry out*, *point out*); **down** means reduction or refusal (*cut down*, *turn down*). Learn the separable ones with the object between: *turn **it** down*, never *turn down it*.`,
      `**Անուն 1925 թվականից։** **Phrasal verb** եզրույթը սովորաբար վերագրում են գրող **Լոգան Փիրսոլ Սմիթին**, ով այն գործածել է իր *Words and Idioms* (1925) գրքում։ Բայերն իրենք շատ ավելի հին են և գրեթե բոլորը **գերմանական** ծագման են՝ կարճ բնիկ բայ գումարած մասնիկ (*put off*, *turn down*)։ Նրանց պաշտոնական համարժեքները հիմնականում **լատինական** կամ ֆրանսիական միաբառ ձևեր են՝ *postpone*, *reject*, *investigate*։ Ահա թե ինչու դարձվածային բայերն ոչ պաշտոնական են հնչում, իսկ միաբառ բայերը՝ պաշտոնական։

**Մասնիկը կրում է իմաստ։** Մասնիկները պատահական չեն։ **Up**-ը հաճախ նշանակում է ավարտ (*eat up*, *use up*, *fill up*), **off**-ը՝ մեկնում կամ դադարեցում (*set off*, *call off*), **out**-ը՝ մինչև վերջ կամ դեպի բաց տեղ (*find out*, *carry out*, *point out*), **down**-ը՝ նվազեցում կամ մերժում (*cut down*, *turn down*)։ Բաժանելի բայերը սովորիր խնդիրը մեջտեղում՝ *turn **it** down*, երբեք՝ *turn down it*։`,
      `**Название 1925 года.** Термин **phrasal verb** обычно приписывают писателю **Логану Пирсоллу Смиту**, который употребил его в книге *Words and Idioms* (1925). Сами глаголы гораздо старше и почти все **германские**: короткий исконный глагол плюс частица (*put off*, *turn down*). Их официальные соответствия — в основном **латинские** или французские однословные глаголы: *postpone*, *reject*, *investigate*. Поэтому фразовые глаголы звучат разговорно, а однословные — официально.

**Частица несёт смысл.** Частицы не случайны. **Up** часто значит завершение (*eat up*, *use up*, *fill up*); **off** — отбытие или отмену (*set off*, *call off*); **out** — до конца или наружу (*find out*, *carry out*, *point out*); **down** — уменьшение или отказ (*cut down*, *turn down*). Разделяемые глаголы учи с дополнением посередине: *turn **it** down*, никогда *turn down it*.`,
    ),
    ask(3, {
      en: ["Which is the formal equivalent of «put off»?", ["reject", "investigate", "postpone"], "Put off a meeting = postpone it."],
      hy: ["Ո՞րն է «put off»-ի պաշտոնական համարժեքը։", ["reject", "investigate", "postpone"], "Put off a meeting = postpone it։"],
      ru: ["Какой официальный эквивалент «put off»?", ["reject", "investigate", "postpone"], "Put off a meeting = postpone it."],
    }),
  ],
  "confusable-words": [
    "forms mode=compare cols=confuse affect:a_verb,_to_influence effect:a_noun,_a_result lie_(lay,_lain):to_be_flat,_no_object lay_(laid,_laid):to_put_something_down rise:to_go_up_by_itself raise:to_lift_something",
    closer(
      `**Even Bob Dylan mixed them up.** The pair **lie** and **lay** is so slippery that Bob Dylan's 1969 song *Lay Lady Lay* uses *lay* where standard grammar needs *lie*. The trick is the object: **lay** always has one (*lay **the book** on the table*), **lie** never does (*lie on the bed*). It gets worse because the past of *lie* is *lay*: *Yesterday I **lay** in bed all day*. The same pattern separates **raise** (with an object: *raise **your hand***) and **rise** (without: *the sun **rises***).

**Affect the verb, effect the noun.** A memory hook: **A**ffect is the **A**ction, **E**ffect is the **E**nd result. *The weather **affects** my mood*; *The weather has an **effect** on my mood*. Other exam favourites: *economic* (about the economy) and *economical* (saving money), *sensible* (wise) and *sensitive* (easily hurt), and *actual*, which means "real", not "current" like Russian **актуальный**.`,
      `**Նույնիսկ Բոբ Դիլանն էր շփոթում։** **Lie** և **lay** զույգն այնքան սայթաքուն է, որ Բոբ Դիլանի 1969 թվականի *Lay Lady Lay* երգում *lay* է գործածվում այնտեղ, որտեղ ստանդարտ քերականությունը պահանջում է *lie*։ Գաղտնիքը խնդիրն է․ **lay**-ը միշտ խնդիր ունի (*lay **the book** on the table*), **lie**-ը՝ երբեք (*lie on the bed*)։ Ավելի է բարդանում, քանի որ *lie*-ի անցյալը *lay* է՝ *Yesterday I **lay** in bed all day*։ Նույն կաղապարն է բաժանում **raise**-ը (խնդրով՝ *raise **your hand***) և **rise**-ը (առանց խնդրի՝ *the sun **rises***)։

**Affect՝ բայ, effect՝ գոյական։** Հիշելու հնարք՝ **A**ffect-ը **A**ction է (գործողություն), **E**ffect-ը՝ **E**nd result (վերջնական արդյունք)։ *The weather **affects** my mood*, *The weather has an **effect** on my mood*։ Քննությունների այլ «սիրելիներ»՝ *economic* (տնտեսությանը վերաբերող) և *economical* (խնայող), *sensible* (խելամիտ) և *sensitive* (զգայուն), և *actual*-ը, որը նշանակում է «իրական», ոչ թե «արդիական», ինչպես ռուսերեն **актуальный**-ը։`,
      `**Даже Боб Дилан их путал.** Пара **lie** и **lay** настолько скользкая, что в песне Боба Дилана *Lay Lady Lay* (1969) стоит *lay* там, где нормативная грамматика требует *lie*. Ключ — дополнение: у **lay** оно есть всегда (*lay **the book** on the table*), у **lie** — никогда (*lie on the bed*). Хуже того, прошедшее от *lie* — это *lay*: *Yesterday I **lay** in bed all day*. Та же схема различает **raise** (с дополнением: *raise **your hand***) и **rise** (без: *the sun **rises***).

**Affect — глагол, effect — существительное.** Подсказка для памяти: **A**ffect — это **A**ction (действие), **E**ffect — **E**nd result (итог). *The weather **affects** my mood*; *The weather has an **effect** on my mood*. Другие любимцы экзаменаторов: *economic* (экономический) и *economical* (экономный), *sensible* (разумный) и *sensitive* (чувствительный), а также *actual*, которое значит «действительный», а не «актуальный», как русское **актуальный**.`,
    ),
    ask(1, {
      en: ["Choose the correct sentence.", ["The new rules will affect everyone.", "The new rules will effect everyone.", "The new rules will have an affect on everyone."], "Affect is the verb; effect is the noun."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["The new rules will affect everyone.", "The new rules will effect everyone.", "The new rules will have an affect on everyone."], "Affect-ը բայ է, effect-ը՝ գոյական։"],
      ru: ["Выбери правильное предложение.", ["The new rules will affect everyone.", "The new rules will effect everyone.", "The new rules will have an affect on everyone."], "Affect — глагол, effect — существительное."],
    }),
  ],
  "idioms-advanced-12": [
    "forms mode=compare cols=origin steal_someone's_thunder:a_playwright's_stage_thunder,_1709 a_red_herring:a_smoked_fish_said_to_mislead_hounds burn_the_midnight_oil:working_late_by_an_oil_lamp turn_a_blind_eye:Nelson's_telescope_at_Copenhagen,_1801",
    closer(
      `**Stolen thunder.** In 1709 the English playwright **John Dennis** invented a new way to make the sound of thunder on stage. His play failed, but soon afterwards he heard his machine used in another theatre's production of *Macbeth* and is said to have cried, *"They will not let my play run, but they steal my thunder!"* **Turn a blind eye** is linked to Admiral **Nelson**, who at the Battle of Copenhagen in 1801 reportedly put his telescope to his blind eye so as not to see the signal to withdraw.

**Some origins are lost.** Nobody knows for certain where ***the whole nine yards*** comes from, despite dozens of confident theories, and a **red herring** as a false clue was popularised by the journalist William Cobbett in 1807 with a story about laying a herring trail to throw dogs off a hare. In an exam, idioms are safest in speaking and informal writing; in a formal essay prefer the plain meaning: *ignore* rather than *turn a blind eye*.`,
      `**Գողացված որոտ։** 1709 թվականին անգլիացի դրամատուրգ **Ջոն Դեննիսը** բեմում որոտի ձայն ստեղծելու նոր եղանակ հորինեց։ Նրա պիեսը ձախողվեց, բայց շուտով նա լսեց իր սարքը մեկ այլ թատրոնի *«Մակբեթ»* բեմադրությունում և, ասում են, բացականչեց՝ *«Իմ պիեսը չեն թողնում բեմադրել, բայց իմ որոտը գողանում են»*։ **Turn a blind eye** արտահայտությունը կապում են ծովակալ **Նելսոնի** հետ, ով 1801 թվականին Կոպենհագենի ճակատամարտում, ըստ պատմության, դիտակը դրեց իր կույր աչքին, որպեսզի չտեսնի նահանջի ազդանշանը։

**Որոշ ծագումներ կորել են։** Ոչ ոք հաստատ չգիտի, թե որտեղից է ծագել ***the whole nine yards***-ը, չնայած տասնյակ վստահ տեսությունների, իսկ **red herring**-ը՝ որպես կեղծ հետք, տարածեց լրագրող Ուիլյամ Քոբեթը 1807 թվականին մի պատմությամբ, թե ինչպես է ծովատառեխի հետքով շներին շեղել նապաստակից։ Քննության ժամանակ դարձվածքներն ամենաապահովն են բանավոր խոսքում և ոչ պաշտոնական գրավոր խոսքում, իսկ պաշտոնական շարադրությունում նախընտրիր պարզ իմաստը՝ *ignore*, ոչ թե *turn a blind eye*։`,
      `**Украденный гром.** В 1709 году английский драматург **Джон Деннис** придумал новый способ изображать гром на сцене. Его пьеса провалилась, но вскоре он услышал свою машину в постановке *«Макбета»* в другом театре и, говорят, воскликнул: *«Мою пьесу играть не дают, а гром мой крадут!»* **Turn a blind eye** связывают с адмиралом **Нельсоном**, который в битве при Копенгагене в 1801 году, по преданию, приставил подзорную трубу к слепому глазу, чтобы не видеть сигнала к отступлению.

**Некоторые истоки утеряны.** Никто точно не знает, откуда взялось ***the whole nine yards***, несмотря на десятки уверенных теорий, а **red herring** в значении ложного следа популяризовал журналист Уильям Коббет в 1807 году историей о том, как селёдкой сбивал собак со следа зайца. На экзамене идиомы безопаснее всего в устной речи и неофициальном письме; в официальном эссе лучше прямое значение: *ignore*, а не *turn a blind eye*.`,
    ),
    ask(2, {
      en: ["What is a «red herring» in an argument?", ["a strong piece of evidence", "a false clue that distracts", "a final conclusion"], "It leads attention away from the real issue."],
      hy: ["Ի՞նչ է «red herring»-ը վեճում։", ["a strong piece of evidence", "a false clue that distracts", "a final conclusion"], "Այն ուշադրությունը շեղում է իրական հարցից։"],
      ru: ["Что такое «red herring» в споре?", ["a strong piece of evidence", "a false clue that distracts", "a final conclusion"], "Он уводит внимание от настоящего вопроса."],
    }),
  ],
  "register-synonyms-12": [
    "forms mode=compare cols=triplet kingly:royal:regal ask:question:interrogate rise:mount:ascend fear:terror:trepidation time:age:epoch",
    closer(
      `**Three layers of English.** English often has three words for one idea, laid down by its history: a short **Old English** word, a **French** one brought by the Normans after 1066, and a **Latin** one borrowed by scholars later. The classic list, made famous by Albert Baugh's *A History of the English Language* (1935), includes *kingly / royal / regal*, *ask / question / interrogate* and *rise / mount / ascend*. The Old English word is usually the most everyday and emotional, the Latin one the most formal and technical.

**Synonyms are never equal.** *Ask* is neutral, *question* suggests doubt, and *interrogate* suggests the police. So choose by **reader** and **purpose**, not by length: a letter of complaint wants *request* and *receive*, a message to a friend *ask* and *get*. Russian has a similar layering with Church Slavonic words (*глаз / око*, *город / град*), and Armenian with grabar forms, so the idea of "high" and "plain" synonyms is not new to you.`,
      `**Անգլերենի երեք շերտ։** Անգլերենը հաճախ մեկ գաղափարի համար ունի երեք բառ՝ դրված իր պատմության կողմից՝ կարճ **հին անգլերեն** բառ, **ֆրանսիական** բառ, որը նորմանները բերեցին 1066-ից հետո, և **լատինական** բառ, որը հետագայում փոխառեցին գիտնականները։ Դասական ցանկը, որը հայտնի դարձավ Ալբերտ Բոյի *A History of the English Language* (1935) գրքով, ներառում է *kingly / royal / regal*, *ask / question / interrogate* և *rise / mount / ascend*։ Հին անգլերեն բառը սովորաբար ամենաառօրյան և զգացմունքայինն է, լատինականը՝ ամենապաշտոնականն ու տեխնիկականը։

**Հոմանիշներն երբեք հավասար չեն։** *Ask*-ը չեզոք է, *question*-ը կասկած է ենթադրում, իսկ *interrogate*-ը՝ ոստիկանություն։ Ուստի ընտրիր ըստ **ընթերցողի** և **նպատակի**, ոչ թե երկարության․ բողոքի նամակը պահանջում է *request* և *receive*, ընկերոջը գրված հաղորդագրությունը՝ *ask* և *get*։ Ռուսերենն ունի նման շերտավորում եկեղեցասլավոնական բառերով (*глаз / око*, *город / град*), իսկ հայերենը՝ գրաբարյան ձևերով, ուստի «բարձր» և «պարզ» հոմանիշների գաղափարը քեզ համար նոր չէ։`,
      `**Три слоя английского.** В английском часто три слова для одного понятия, оставленные историей: короткое **древнеанглийское**, **французское**, принесённое норманнами после 1066 года, и **латинское**, позже заимствованное учёными. Классический список, прославленный книгой Альберта Бо *A History of the English Language* (1935), включает *kingly / royal / regal*, *ask / question / interrogate* и *rise / mount / ascend*. Древнеанглийское слово обычно самое бытовое и эмоциональное, латинское — самое официальное и техническое.

**Синонимы никогда не равны.** *Ask* нейтрально, *question* предполагает сомнение, а *interrogate* — полицию. Поэтому выбирай по **читателю** и **цели**, а не по длине: жалобе нужны *request* и *receive*, сообщению другу — *ask* и *get*. В русском есть похожее расслоение с церковнославянскими словами (*глаз / око*, *город / град*), в армянском — с формами грабара, так что идея «высоких» и «простых» синонимов тебе знакома.`,
    ),
    ask(3, {
      en: ["Which word would a police report most likely use?", ["ask", "question", "interrogate"], "The Latin layer is the most formal and technical."],
      hy: ["Ո՞ր բառն ամենայն հավանականությամբ կգործածի ոստիկանական զեկույցը։", ["ask", "question", "interrogate"], "Լատինական շերտն ամենապաշտոնականն ու տեխնիկականն է։"],
      ru: ["Какое слово скорее всего будет в полицейском протоколе?", ["ask", "question", "interrogate"], "Латинский слой — самый официальный и технический."],
    }),
  ],
  "word-formation-exam": [
    "forms mode=compare cols=family success:succeed:successful decision:decide:decisive strength:strengthen:strong danger:endanger:dangerous",
    closer(
      `**Learn the whole family.** Word formation tasks reward students who learn each root as a family of four: noun, verb, adjective, adverb. Some members are regular (*danger → dangerous → dangerously*), others change inside (*strong → strength → strengthen*, *decide → decision*). Watch for **prefix + suffix** in one gap: *(BELIEVE) → **un**believ**able***, *(EMPLOY) → **un**employ**ment***. A good habit is two passes: first decide the part of speech for every gap, then build the words.

**Stress can move.** When a suffix is added, the stress in English often jumps: ***PHO**tograph*, *pho**TO**graphy*, *photo**GRA**phic*; ***E**conomy* is wrong, it is *e**CO**nomy*, but *eco**NO**mic*. Endings like **-ic**, **-ion** and **-ity** pull the stress onto the syllable just before them: *ac**TI**vity*, *de**CI**sion*. Russian has moving stress too (*го́род*, *города́*), while Armenian almost always stresses the last syllable, so watch this in speaking.`,
      `**Սովորիր ամբողջ ընտանիքը։** Բառակազմության առաջադրանքները պարգևատրում են այն աշակերտներին, որոնք յուրաքանչյուր արմատ սովորում են որպես չորս անդամից բաղկացած ընտանիք՝ գոյական, բայ, ածական, մակբայ։ Որոշ անդամներ կանոնավոր են (*danger → dangerous → dangerously*), մյուսները փոխվում են ներսից (*strong → strength → strengthen*, *decide → decision*)։ Ուշադիր եղիր մեկ բացթողման մեջ **նախածանց + վերջածանց** դեպքին՝ *(BELIEVE) → **un**believ**able***, *(EMPLOY) → **un**employ**ment***։ Լավ սովորություն է երկու անցումը․ նախ որոշիր յուրաքանչյուր բացթողման խոսքի մասը, հետո կազմիր բառերը։

**Շեշտը կարող է տեղաշարժվել։** Վերջածանց ավելացնելիս անգլերենում շեշտը հաճախ ցատկում է՝ ***PHO**tograph*, *pho**TO**graphy*, *photo**GRA**phic*, իսկ *e**CO**nomy*, բայց *eco**NO**mic*։ **-ic**, **-ion** և **-ity** վերջավորությունները շեշտը քաշում են իրենցից անմիջապես առաջ գտնվող վանկի վրա՝ *ac**TI**vity*, *de**CI**sion*։ Ռուսերենը նույնպես շարժական շեշտ ունի (*го́род*, *города́*), իսկ հայերենը գրեթե միշտ շեշտում է վերջին վանկը, ուստի բանավոր խոսքում ուշադիր եղիր։`,
      `**Учи всю семью.** Задания на словообразование вознаграждают тех, кто учит каждый корень как семью из четырёх: существительное, глагол, прилагательное, наречие. Одни члены семьи правильные (*danger → dangerous → dangerously*), другие меняются внутри (*strong → strength → strengthen*, *decide → decision*). Следи за **приставкой + суффиксом** в одном пропуске: *(BELIEVE) → **un**believ**able***, *(EMPLOY) → **un**employ**ment***. Полезная привычка — два прохода: сначала определи часть речи для каждого пропуска, потом строй слова.

**Ударение может сдвигаться.** При добавлении суффикса ударение в английском часто прыгает: ***PHO**tograph*, *pho**TO**graphy*, *photo**GRA**phic*; правильно *e**CO**nomy*, но *eco**NO**mic*. Окончания **-ic**, **-ion** и **-ity** притягивают ударение на слог прямо перед собой: *ac**TI**vity*, *de**CI**sion*. В русском ударение тоже подвижное (*го́род*, *города́*), а в армянском почти всегда падает на последний слог, так что в устной речи будь внимателен.`,
    ),
    ask(2, {
      en: ["«Thousands lost their jobs, and ______ rose sharply.» (EMPLOY)", ["employment", "unemployment", "employer"], "Prefix and suffix: un-employ-ment."],
      hy: ["«Thousands lost their jobs, and ______ rose sharply.» (EMPLOY)", ["employment", "unemployment", "employer"], "Նախածանց և վերջածանց՝ un-employ-ment։"],
      ru: ["«Thousands lost their jobs, and ______ rose sharply.» (EMPLOY)", ["employment", "unemployment", "employer"], "Приставка и суффикс: un-employ-ment."],
    }),
  ],
  "reading-strategies": [
    "forms mode=compare cols=readspeed get_the_gist:skimming:very_fast find_one_fact:scanning:very_fast understand_an_argument:close_reading:steady learn_and_remember:study_reading:slow",
    closer(
      `**Speed reading has limits.** The comedian **Woody Allen** once joked: *"I took a speed-reading course and read War and Peace in twenty minutes. It involves Russia."* Research agrees with the joke: beyond a certain speed, understanding falls away. Good readers do not read everything fast; they change speed to suit the **purpose**: very fast to skim or scan, steady to follow an argument, slow to study.

**Which words you can skip.** In a hard text you do not need every word. Unknown adjectives and adverbs can often be skipped without losing the point, while unknown nouns and verbs in the key sentence usually matter. Names, numbers and capital letters are the shapes your eye catches when scanning. In a 40-minute paper, spend the first minutes skimming the whole text before you look at any question.`,
      `**Արագ ընթերցանությունն իր սահմաններն ունի։** Կատակերգու **Վուդի Ալենը** մի անգամ կատակեց՝ *«Արագ ընթերցանության դասընթաց անցա և «Պատերազմ և խաղաղությունը» կարդացի քսան րոպեում։ Դա Ռուսաստանի մասին է»*։ Հետազոտությունները համաձայն են կատակի հետ․ որոշակի արագությունից հետո ըմբռնումն անհետանում է։ Լավ ընթերցողներն ամեն ինչ արագ չեն կարդում․ նրանք արագությունը փոխում են ըստ **նպատակի**՝ շատ արագ՝ թերթելու կամ որոնելու համար, հավասարաչափ՝ փաստարկին հետևելու, դանդաղ՝ ուսումնասիրելու համար։

**Որ բառերը կարելի է բաց թողնել։** Դժվար տեքստում ամեն բառ պետք չէ։ Անծանոթ ածականներն ու մակբայները հաճախ կարելի է բաց թողնել՝ առանց միտքը կորցնելու, մինչդեռ հիմնական նախադասության անծանոթ գոյականներն ու բայերը սովորաբար կարևոր են։ Անունները, թվերը և մեծատառերն այն ձևերն են, որոնք աչքդ որսում է որոնելիս։ 40 րոպեանոց քննությունում առաջին րոպեները ծախսիր ամբողջ տեքստը թերթելու վրա, նախքան որևէ հարցի նայելը։`,
      `**У быстрого чтения есть пределы.** Комик **Вуди Аллен** однажды пошутил: *«Я прошёл курс скорочтения и прочёл „Войну и мир“ за двадцать минут. Это о России»*. Исследования согласны с шуткой: после определённой скорости понимание исчезает. Хорошие читатели читают не всё быстро — они меняют скорость под **цель**: очень быстро, чтобы просмотреть или найти, ровно, чтобы следить за аргументом, медленно, чтобы изучить.

**Какие слова можно пропустить.** В трудном тексте не нужно каждое слово. Незнакомые прилагательные и наречия часто можно пропустить без потери смысла, а незнакомые существительные и глаголы в ключевом предложении обычно важны. Имена, числа и заглавные буквы — те формы, за которые цепляется глаз при поиске. В 40-минутной работе потрать первые минуты на просмотр всего текста, прежде чем смотреть на вопросы.`,
    ),
    ask(1, {
      en: ["You need the main idea of an article in one minute. What do you do?", ["skim it", "study-read it", "translate every word"], "Skimming gets the gist fast."],
      hy: ["Մեկ րոպեում պետք է հասկանաս հոդվածի հիմնական միտքը։ Ի՞նչ ես անում։", ["skim it", "study-read it", "translate every word"], "Skimming-ը արագ տալիս է ընդհանուր իմաստը։"],
      ru: ["Нужно за минуту понять главную мысль статьи. Что ты делаешь?", ["skim it", "study-read it", "translate every word"], "Skimming быстро даёт общий смысл."],
    }),
  ],
  "inference-tone": [
    "forms mode=compare cols=tone a_so-called_expert:doubtful,_sarcastic sadly,_regrettably:regretful surely_nobody_still_believes:critical,_mocking it_remains_to_be_seen:cautious what_a_triumph!:enthusiastic",
    closer(
      `**The iceberg under the text.** In *Death in the Afternoon* (1932) **Ernest Hemingway** described his "iceberg" theory: a writer who knows his subject can leave things out, and the reader will feel them, because *"the dignity of movement of an ice-berg is due to only one-eighth of it being above water."* Inference questions test the seven-eighths below: what the writer **implies** but does not state.

**Stated, implied, invented.** For every answer, ask: **can I point to the words that force it?** *She closed the door quietly* lets you infer that she did not want to be heard; it does not let you decide that she was afraid of her father. That would be **invented**, and it loses the mark. Tone lives in small words: *so-called* doubts, *surely* challenges, *admittedly* concedes, and an exclamation mark can be enthusiastic or ironic depending on what surrounds it.`,
      `**Սառցալեռը տեքստի տակ։** *«Մահը կեսօրից հետո»* (1932) գրքում **Էռնեստ Հեմինգուեյը** նկարագրեց իր «սառցալեռան» տեսությունը․ իր թեման իմացող գրողը կարող է որոշ բաներ բաց թողնել, և ընթերցողը դրանք կզգա, քանի որ *«սառցալեռան շարժման վեհությունը պայմանավորված է նրանով, որ միայն մեկ ութերորդն է ջրից վեր»*։ Եզրահանգման հարցերը ստուգում են ներքևի յոթ ութերորդը՝ այն, ինչ հեղինակը **ենթադրել է տալիս**, բայց չի ասում։

**Ասված, ենթադրվող, հորինված։** Յուրաքանչյուր պատասխանի համար հարցրու․ **կարո՞ղ եմ մատնանշել այն բառերը, որոնք ստիպում են այս եզրակացությանը**։ *She closed the door quietly*-ն թույլ է տալիս եզրակացնել, որ նա չէր ուզում, որ իրեն լսեն, բայց թույլ չի տալիս որոշել, որ նա վախենում էր հորից։ Դա **հորինված** կլիներ և կկորցներ միավորը։ Տոնն ապրում է փոքր բառերում՝ *so-called*-ը կասկածում է, *surely*-ն մարտահրավեր է նետում, *admittedly*-ն զիջում է, իսկ բացականչական նշանը կարող է լինել ոգևորված կամ հեգնական՝ կախված շրջապատից։`,
      `**Айсберг под текстом.** В книге *«Смерть после полудня»* (1932) **Эрнест Хемингуэй** описал свою теорию «айсберга»: писатель, знающий предмет, может кое-что опустить, и читатель это почувствует, потому что *«величавость движения айсберга в том, что он только на одну восьмую возвышается над поверхностью воды»*. Вопросы на вывод проверяют семь восьмых под водой — то, что автор **подразумевает**, но не говорит.

**Сказано, подразумевается, придумано.** Для каждого ответа спрашивай: **могу ли я указать слова, которые вынуждают этот вывод?** *She closed the door quietly* позволяет заключить, что она не хотела, чтобы её услышали, но не позволяет решить, что она боялась отца. Это было бы **придумано** и стоило бы балла. Тон живёт в маленьких словах: *so-called* сомневается, *surely* бросает вызов, *admittedly* уступает, а восклицательный знак может быть восторженным или ироничным — в зависимости от окружения.`,
    ),
    ask(3, {
      en: ["«The so-called expert gave his opinion.» What tone does «so-called» show?", ["admiration", "neutral fact", "doubt"], "So-called suggests the title is not deserved."],
      hy: ["«The so-called expert gave his opinion.» Ի՞նչ տոն է ցույց տալիս «so-called»-ը։", ["admiration", "neutral fact", "doubt"], "So-called-ը ենթադրում է, որ կոչումն արժանի չէ։"],
      ru: ["«The so-called expert gave his opinion.» Какой тон передаёт «so-called»?", ["admiration", "neutral fact", "doubt"], "So-called намекает, что звание не заслужено."],
    }),
  ],
  "matching-headings-12": [
    "sentence mode=order The main idea is usually in the first or last sentence .",
    closer(
      `**A paragraph was once a mark in the margin.** The word comes from Greek **paragraphos**, a short stroke that ancient scribes drew beside a line to show where a new section began. Today the paragraph is a unit of **one idea**, and good writers usually state it in a **topic sentence**, most often the first, sometimes the last. Matching headings is really a test of whether you can find that sentence and say it in other words.

**The two traps.** The first is the **word-match**: a heading that repeats a striking word from the paragraph but not its point. The second is the **detail**: a heading that fits one example rather than the whole paragraph. Read the topic sentence, write your own three-word heading in the margin, and only then look at the list. Cross out headings as you use them, and leave the hardest paragraph for last.`,
      `**Պարբերությունը ժամանակին նշան էր լուսանցքում։** Բառը գալիս է հունարեն **paragraphos**-ից, որը կարճ գիծ էր, որ հին գրիչները քաշում էին տողի կողքին՝ ցույց տալու, թե որտեղ է սկսվում նոր հատվածը։ Այսօր պարբերությունը **մեկ մտքի** միավոր է, և լավ գրողներն այն սովորաբար ձևակերպում են **թեմատիկ նախադասությամբ**, ամենից հաճախ առաջինով, երբեմն՝ վերջինով։ Վերնագրերի համապատասխանեցումն իրականում ստուգում է, թե կարո՞ղ ես գտնել այդ նախադասությունը և ասել այն այլ բառերով։

**Երկու թակարդ։** Առաջինը **բառի համընկնումն** է՝ վերնագիր, որը կրկնում է պարբերության աչքի ընկնող բառը, բայց ոչ նրա միտքը։ Երկրորդը **մանրամասնն** է՝ վերնագիր, որը համապատասխանում է մեկ օրինակի, ոչ թե ամբողջ պարբերությանը։ Կարդա թեմատիկ նախադասությունը, լուսանցքում գրիր քո եռաբառ վերնագիրը, և միայն հետո նայիր ցանկին։ Օգտագործած վերնագրերը ջնջիր, իսկ ամենադժվար պարբերությունը թող վերջում։`,
      `**Абзац когда-то был значком на полях.** Слово происходит от греческого **paragraphos** — короткой черты, которую древние писцы ставили у строки, чтобы показать начало нового раздела. Сегодня абзац — единица **одной мысли**, и хорошие авторы обычно формулируют её в **тематическом предложении**, чаще всего в первом, иногда в последнем. Подбор заголовков — это по сути проверка, умеешь ли ты найти это предложение и пересказать его своими словами.

**Две ловушки.** Первая — **совпадение слова**: заголовок повторяет яркое слово из абзаца, но не его мысль. Вторая — **деталь**: заголовок подходит к одному примеру, а не ко всему абзацу. Прочитай тематическое предложение, напиши на полях свой заголовок из трёх слов и только потом смотри в список. Вычёркивай использованные заголовки, а самый трудный абзац оставь напоследок.`,
    ),
    ask(2, {
      en: ["A heading repeats a striking word from the paragraph but not its main point. What is it?", ["the right answer", "a word-match trap", "a topic sentence"], "Match the idea, not the word."],
      hy: ["Վերնագիրը կրկնում է պարբերության աչքի ընկնող բառը, բայց ոչ հիմնական միտքը։ Ի՞նչ է դա։", ["the right answer", "a word-match trap", "a topic sentence"], "Համապատասխանեցրու միտքը, ոչ թե բառը։"],
      ru: ["Заголовок повторяет яркое слово из абзаца, но не его главную мысль. Что это?", ["the right answer", "a word-match trap", "a topic sentence"], "Сопоставляй мысль, а не слово."],
    }),
  ],
  "vocabulary-in-context-12": [
    "forms mode=compare cols=wordparts un-:predict:-able in-:vis:-ible dis-:agree:-ment trans-:port:-ation",
    closer(
      `**Nonsense you can still understand.** In *Through the Looking-Glass* (1871) Lewis Carroll wrote: *"'Twas brillig, and the slithy toves / Did gyre and gimble in the wabe."* Almost none of these words exist, yet any reader can tell that *toves* are things (plural, after *the*), *slithy* describes them, and *gyre* and *gimble* are actions. That is guessing from **context and grammar**, and it works in exams as well as in poetry.

**Take the word apart.** When context is not enough, look at the parts: **prefix** (*un-* = not, *trans-* = across), **root** (*port* = carry, *vis* = see) and **suffix**, which gives the part of speech (*-able*, *-ible* adjectives; *-ment*, *-ation* nouns). Then test your guess by putting it back into the sentence. Russian and Armenian learners can often use a familiar international root: *transport*, *visual* and *television* are cousins of **транспорт**, **визуальный** and **տրանսպորտ**.`,
      `**Անհեթեթություն, որը կարելի է հասկանալ։** *«Ալիսը հայելու աշխարհում»* (1871) գրքում Լյուիս Քերոլը գրեց՝ *"'Twas brillig, and the slithy toves / Did gyre and gimble in the wabe."* Այս բառերից գրեթե ոչ մեկը գոյություն չունի, բայց ցանկացած ընթերցող կարող է ասել, որ *toves*-ը առարկաներ են (հոգնակի, *the*-ից հետո), *slithy*-ն նկարագրում է նրանց, իսկ *gyre*-ը և *gimble*-ը գործողություններ են։ Դա կռահում է ըստ **համատեքստի և քերականության**, և այն աշխատում է քննություններում նույնքան, որքան պոեզիայում։

**Բառը մասերի բաժանիր։** Երբ համատեքստը բավարար չէ, նայիր մասերին՝ **նախածանց** (*un-* = ոչ, *trans-* = միջով), **արմատ** (*port* = կրել, *vis* = տեսնել) և **վերջածանց**, որը տալիս է խոսքի մասը (*-able*, *-ible*՝ ածականներ, *-ment*, *-ation*՝ գոյականներ)։ Հետո ստուգիր կռահումդ՝ այն նորից տեղադրելով նախադասության մեջ։ Ռուսախոս և հայախոս սովորողները հաճախ կարող են օգտվել ծանոթ միջազգային արմատից՝ *transport*, *visual* բառերն արդեն ծանոթ բառերի ազգականներն են։`,
      `**Бессмыслица, которую можно понять.** В книге *«Алиса в Зазеркалье»* (1871) Льюис Кэрролл написал: *"'Twas brillig, and the slithy toves / Did gyre and gimble in the wabe."* Почти ни одного из этих слов не существует, но любой читатель скажет, что *toves* — предметы (множественное число, после *the*), *slithy* их описывает, а *gyre* и *gimble* — действия. Это догадка по **контексту и грамматике**, и она работает на экзамене так же, как в поэзии. В русском есть свой знаменитый пример — «Глокая куздра штеко будланула бокра» Льва Щербы.

**Разбери слово на части.** Когда контекста мало, смотри на части: **приставка** (*un-* = не, *trans-* = через), **корень** (*port* = нести, *vis* = видеть) и **суффикс**, который показывает часть речи (*-able*, *-ible* — прилагательные; *-ment*, *-ation* — существительные). Затем проверь догадку, вернув слово в предложение. Русско- и армяноязычным часто помогает знакомый международный корень: *transport*, *visual* — родственники уже известных слов.`,
    ),
    ask(1, {
      en: ["In «the slithy toves», what is «toves»?", ["a plural noun", "a verb", "an adverb"], "After the, with a plural -s: a noun."],
      hy: ["«the slithy toves»-ում ի՞նչ է «toves»-ը։", ["a plural noun", "a verb", "an adverb"], "The-ից հետո, հոգնակի -s-ով՝ գոյական։"],
      ru: ["В «the slithy toves» что такое «toves»?", ["a plural noun", "a verb", "an adverb"], "После the, с -s множественного числа — существительное."],
    }),
  ],
  "literary-extracts": [
    "forms mode=compare cols=device first-person_narrator:I_never_told_anyone_what_I_saw. metaphor:The_city_was_a_furnace. symbol:a_locked_door_for_a_secret dialogue:\"You're_late,\"_she_said. unreliable_narrator:I_am_a_very_honest_person,_believe_me.",
    closer(
      `**Can you trust the narrator?** The American critic **Wayne C. Booth** coined the term **unreliable narrator** in *The Rhetoric of Fiction* (1961) for a storyteller whose account we cannot fully believe, because they lie, misunderstand or hide things from themselves. A first-person narrator who keeps insisting *I am a very honest person* is already making the reader suspicious. Asking *who is telling the story, and how much do they know?* is the first step in any answer about a literary extract.

**Device, effect, evidence.** Exam answers lose marks by naming devices without saying what they do. A strong answer has three parts: the **device** (*a metaphor*), its **effect** (*it makes the heat feel inescapable*) and the **evidence** (*"The city was a furnace"*). Write about character in the present tense: *Anahit **hides** her fear behind jokes*. Armenian and Russian literature classes use the same tools under the names **փոխաբերություն** and **метафора**, so your knowledge transfers directly.`,
      `**Կարելի՞ է վստահել պատմողին։** Ամերիկացի քննադատ **Ուեյն Բութը** *The Rhetoric of Fiction* (1961) գրքում ստեղծեց **unreliable narrator**՝ «անվստահելի պատմող» եզրույթն այն պատմողի համար, որի պատմությանը չենք կարող լիովին հավատալ, քանի որ նա ստում է, սխալ է հասկանում կամ ինչ-որ բան թաքցնում է նույնիսկ իրենից։ Առաջին դեմքով պատմողը, որ անընդհատ պնդում է *I am a very honest person*, արդեն կասկած է առաջացնում ընթերցողի մոտ։ *Ով է պատմում, և որքա՞ն գիտի*՝ այս հարցը գրական հատվածի մասին ցանկացած պատասխանի առաջին քայլն է։

**Հնար, ազդեցություն, ապացույց։** Քննական պատասխանները միավորներ են կորցնում, երբ հնարներն անվանում են՝ առանց ասելու, թե ինչ են դրանք անում։ Ուժեղ պատասխանն ունի երեք մաս՝ **հնարը** (*a metaphor*), նրա **ազդեցությունը** (*it makes the heat feel inescapable*) և **ապացույցը** (*"The city was a furnace"*)։ Հերոսի մասին գրիր ներկա ժամանակով՝ *Anahit **hides** her fear behind jokes*։ Հայ և ռուս գրականության դասերը գործածում են նույն գործիքները **փոխաբերություն** և **метафора** անուններով, ուստի քո գիտելիքն ուղղակիորեն փոխանցվում է։`,
      `**Можно ли верить рассказчику?** Американский критик **Уэйн Бут** ввёл термин **unreliable narrator** — «ненадёжный рассказчик» — в книге *The Rhetoric of Fiction* (1961) для повествователя, которому нельзя полностью верить, потому что он лжёт, ошибается или скрывает что-то даже от себя. Рассказчик от первого лица, который всё время повторяет *I am a very honest person*, уже вызывает подозрение. Вопрос *кто рассказывает и сколько он знает?* — первый шаг любого ответа о литературном отрывке.

**Приём, эффект, доказательство.** Экзаменационные ответы теряют баллы, когда приёмы называют, не объясняя, что они делают. Сильный ответ состоит из трёх частей: **приём** (*a metaphor*), его **эффект** (*it makes the heat feel inescapable*) и **доказательство** (*"The city was a furnace"*). О персонаже пиши в настоящем времени: *Anahit **hides** her fear behind jokes*. На уроках армянской и русской литературы те же инструменты называются **փոխաբերություն** и **метафора**, так что твои знания переносятся напрямую.`,
    ),
    ask(3, {
      en: ["What makes a strong answer about a literary device?", ["only naming the device", "retelling the plot", "device, effect and evidence"], "Say what the device does and quote it."],
      hy: ["Ի՞նչն է ուժեղ դարձնում գրական հնարի մասին պատասխանը։", ["only naming the device", "retelling the plot", "device, effect and evidence"], "Ասա, թե ինչ է անում հնարը, և մեջբերիր այն։"],
      ru: ["Что делает ответ о литературном приёме сильным?", ["only naming the device", "retelling the plot", "device, effect and evidence"], "Скажи, что делает приём, и процитируй."],
    }),
  ],
  "journalistic-texts": [
    "forms mode=compare cols=headline PM_TO_VISIT_PARIS:The_Prime_Minister_is_going_to_visit_Paris. MAN_HELD_AFTER_FIRE:A_man_has_been_arrested_after_a_fire. RENTS_SOAR:Rents_have_risen_sharply. SCHOOLS_HIT_BY_STRIKE:Schools_have_been_affected_by_a_strike.",
    closer(
      `**Headline English is a dialect.** To save space, headlines drop articles and the verb *be*, use the **present simple** for past events (*MAN HELD*), the **infinitive** for the future (*PM TO VISIT*), and short dramatic words: *soar* (rise sharply), *slam* (criticise), *bid* (attempt), *probe* (investigation). The result can be comically ambiguous, as in the classic *SQUAD HELPS DOG BITE VICTIM*: did the squad help a victim, or help a dog to bite one?

**The inverted pyramid.** A news story puts the most important facts first, who, what, where, when, then details, then background, so that it can be cut from the bottom without losing the core. The style is often linked to the age of the telegraph, when a message could be cut off at any moment. When you read critically, check the **source**, separate **fact from opinion**, and look hard at numbers: *sales rose 200 per cent* may mean from two to six.`,
      `**Վերնագրային անգլերենը բարբառ է։** Տեղ խնայելու համար վերնագրերը բաց են թողնում հոդերը և *be* բայը, անցյալի իրադարձությունների համար գործածում են **present simple** (*MAN HELD*), ապագայի համար՝ **անորոշ դերբայը** (*PM TO VISIT*), և կարճ, դրամատիկ բառեր՝ *soar* (կտրուկ աճել), *slam* (խիստ քննադատել), *bid* (փորձ), *probe* (հետաքննություն)։ Արդյունքը կարող է ծիծաղելիորեն երկիմաստ լինել, ինչպես դասական *SQUAD HELPS DOG BITE VICTIM*-ում․ ջոկատն օգնե՞լ է տուժածին, թե՞ շանն է օգնել կծել։

**Շրջված բուրգ։** Լուրն ամենակարևոր փաստերը դնում է առաջինը՝ ով, ինչ, որտեղ, երբ, հետո մանրամասները, հետո նախապատմությունը, որպեսզի այն կարելի լինի կրճատել ներքևից՝ առանց միջուկը կորցնելու։ Այս ոճը հաճախ կապում են հեռագրի դարաշրջանի հետ, երբ հաղորդագրությունը կարող էր ցանկացած պահի ընդհատվել։ Քննադատաբար կարդալիս ստուգիր **աղբյուրը**, տարբերիր **փաստը կարծիքից** և ուշադիր նայիր թվերին՝ *sales rose 200 per cent*-ը կարող է նշանակել երկուսից վեց։`,
      `**Язык заголовков — отдельный диалект.** Чтобы сэкономить место, заголовки опускают артикли и глагол *be*, используют **present simple** для прошлых событий (*MAN HELD*), **инфинитив** для будущего (*PM TO VISIT*) и короткие эффектные слова: *soar* (резко вырасти), *slam* (раскритиковать), *bid* (попытка), *probe* (расследование). Результат бывает комично двусмысленным, как в классическом *SQUAD HELPS DOG BITE VICTIM*: отряд помог пострадавшему от укуса — или помог собаке укусить?

**Перевёрнутая пирамида.** Новостная заметка ставит самые важные факты в начало — кто, что, где, когда, — затем подробности, затем предысторию, чтобы её можно было сократить снизу без потери сути. Этот стиль часто связывают с эпохой телеграфа, когда сообщение могло оборваться в любой момент. Читая критически, проверяй **источник**, отделяй **факт от мнения** и внимательно смотри на числа: *sales rose 200 per cent* может значить рост с двух до шести.`,
    ),
    ask(1, {
      en: ["What does the headline «PM TO VISIT PARIS» refer to?", ["a future visit", "a visit that happened yesterday", "a visit happening now"], "Headlines use to + verb for the future."],
      hy: ["Ինչի՞ մասին է «PM TO VISIT PARIS» վերնագիրը։", ["a future visit", "a visit that happened yesterday", "a visit happening now"], "Վերնագրերն ապագայի համար գործածում են to + բայ։"],
      ru: ["О чём заголовок «PM TO VISIT PARIS»?", ["a future visit", "a visit that happened yesterday", "a visit happening now"], "В заголовках to + глагол обозначает будущее."],
    }),
  ],
  "essay-types": [
    "forms mode=compare cols=essaytype To_what_extent_do_you_agree?:opinion Discuss_both_views_and_give_your_own.:discussion What_are_the_causes,_and_what_can_be_done?:problem_and_solution Do_the_advantages_outweigh_the_disadvantages?:advantages_and_disadvantages",
    closer(
      `**The wording tells you the type.** Before you plan, find the instruction words. *To what extent do you agree?* asks for your **opinion** and its strength. *Discuss both views* asks for a **balanced discussion**, and usually your own view at the end. *What are the causes… what can be done?* asks for **problems and solutions**. *Do the advantages outweigh…?* asks you to weigh and decide. Writing an excellent essay of the wrong type is one of the most painful ways to lose marks.

**A thesis is a position.** The word **thesis** comes from Greek, "a placing, a position": the sentence where you take your stand. Every essay type needs one, usually at the end of the introduction: *While tourism brings real income, its costs to small villages are often underestimated.* Then each body paragraph supports one part of it, and the conclusion returns to it in new words, without adding new arguments.`,
      `**Ձևակերպումը ցույց է տալիս տեսակը։** Նախքան պլանավորելը գտիր հրահանգող բառերը։ *To what extent do you agree?*-ն պահանջում է քո **կարծիքը** և նրա ուժգնությունը։ *Discuss both views*-ը պահանջում է **հավասարակշռված քննարկում** և սովորաբար վերջում՝ քո կարծիքը։ *What are the causes… what can be done?*-ը պահանջում է **խնդիրներ և լուծումներ**։ *Do the advantages outweigh…?*-ը խնդրում է կշռադատել և որոշել։ Սխալ տեսակի գերազանց շարադրություն գրելը միավորներ կորցնելու ամենացավալի եղանակներից է։

**Թեզը դիրքորոշում է։** **Thesis** բառը գալիս է հունարենից՝ «դրում, դիրք»․ դա այն նախադասությունն է, որտեղ դու գրավում ես քո դիրքը։ Շարադրության յուրաքանչյուր տեսակ դրա կարիքն ունի, սովորաբար ներածության վերջում՝ *While tourism brings real income, its costs to small villages are often underestimated.* Հետո յուրաքանչյուր հիմնական պարբերություն պաշտպանում է նրա մի մասը, իսկ եզրակացությունը վերադառնում է դրան նոր բառերով՝ առանց նոր փաստարկներ ավելացնելու։`,
      `**Формулировка подсказывает тип.** Прежде чем планировать, найди слова-инструкции. *To what extent do you agree?* требует твоего **мнения** и его силы. *Discuss both views* — **взвешенного обсуждения** и обычно твоего мнения в конце. *What are the causes… what can be done?* — **проблем и решений**. *Do the advantages outweigh…?* — взвесить и решить. Написать отличное эссе не того типа — один из самых обидных способов потерять баллы.

**Тезис — это позиция.** Слово **thesis** — греческое, «положение, установка»: предложение, в котором ты занимаешь позицию. Он нужен эссе любого типа, обычно в конце вступления: *While tourism brings real income, its costs to small villages are often underestimated.* Затем каждый абзац основной части поддерживает одну его часть, а заключение возвращается к нему новыми словами, не добавляя новых аргументов.`,
    ),
    ask(2, {
      en: ["«Discuss both views and give your own opinion.» What type of essay is this?", ["problem and solution", "discussion", "story"], "Both views, then your own: a discussion essay."],
      hy: ["«Discuss both views and give your own opinion.» Ի՞նչ տեսակի շարադրություն է սա։", ["problem and solution", "discussion", "story"], "Երկու տեսակետ, հետո քոնը՝ քննարկման շարադրություն։"],
      ru: ["«Discuss both views and give your own opinion.» Какой это тип эссе?", ["problem and solution", "discussion", "story"], "Обе точки зрения, затем своя — эссе-обсуждение."],
    }),
  ],
  "opinion-essay-12": [
    "sentence mode=order In my view , the benefits clearly outweigh the drawbacks .",
    closer(
      `**Three ways to persuade.** In his *Rhetoric*, written in the 4th century BC, **Aristotle** named three means of persuasion: **ethos** (the speaker's credibility), **pathos** (the audience's emotions) and **logos** (reasoning and evidence). An exam essay leans on **logos**, supported by a little ethos (a calm, fair tone) and only a touch of pathos. A paragraph full of exclamation marks persuades nobody.

**Thirty-five minutes, five stages.** Spend about five minutes planning (position, two or three reasons, one objection), twenty-five writing, and five checking. Build each body paragraph in four moves: **point**, **explanation**, **example**, **link back** to the thesis. Answer an objection to show that you have thought about the other side: *Some argue that…; however, this overlooks…*. State your opinion clearly in both the introduction and the conclusion.`,
      `**Համոզելու երեք եղանակ։** Մ.թ.ա. 4-րդ դարում գրված իր *«Ճարտասանություն»*-ում **Արիստոտելը** համոզելու երեք միջոց անվանեց՝ **ethos** (խոսողի վստահելիություն), **pathos** (լսարանի զգացմունքներ) և **logos** (դատողություն և ապացույցներ)։ Քննական շարադրությունը հենվում է **logos**-ի վրա՝ մի փոքր ethos-ով (հանգիստ, արդար տոն) և pathos-ի միայն մի կաթիլով։ Բացականչական նշաններով լի պարբերությունն ոչ ոքի չի համոզում։

**Երեսունհինգ րոպե, հինգ փուլ։** Մոտ հինգ րոպե ծախսիր պլանավորելու վրա (դիրքորոշում, երկու-երեք պատճառ, մեկ առարկություն), քսանհինգ՝ գրելու, և հինգ՝ ստուգելու։ Յուրաքանչյուր հիմնական պարբերություն կառուցիր չորս քայլով՝ **միտք**, **բացատրություն**, **օրինակ**, **վերադարձ** թեզին։ Պատասխանիր առարկությանը՝ ցույց տալու, որ մտածել ես մյուս կողմի մասին՝ *Some argue that…; however, this overlooks…*։ Կարծիքդ հստակ ասա և՛ ներածությունում, և՛ եզրակացությունում։`,
      `**Три способа убеждать.** В *«Риторике»*, написанной в IV веке до н. э., **Аристотель** назвал три средства убеждения: **ethos** (доверие к говорящему), **pathos** (чувства слушателей) и **logos** (рассуждение и доказательства). Экзаменационное эссе опирается на **logos**, немного на ethos (спокойный, честный тон) и лишь чуть-чуть на pathos. Абзац, полный восклицательных знаков, никого не убеждает.

**Тридцать пять минут, пять этапов.** Около пяти минут — на план (позиция, две-три причины, одно возражение), двадцать пять — на письмо и пять — на проверку. Строй каждый абзац основной части в четыре хода: **тезис**, **объяснение**, **пример**, **возврат** к главной мысли. Ответь на возражение, чтобы показать, что подумал о другой стороне: *Some argue that…; however, this overlooks…*. Ясно выскажи своё мнение и во вступлении, и в заключении.`,
    ),
    ask(1, {
      en: ["Which of Aristotle's three appeals should an exam essay rely on most?", ["logos: reasoning and evidence", "pathos: strong emotion", "ethos alone: your reputation"], "Reasons and evidence carry an exam essay."],
      hy: ["Արիստոտելի երեք միջոցներից որի՞ վրա պետք է առավելապես հենվի քննական շարադրությունը։", ["logos: reasoning and evidence", "pathos: strong emotion", "ethos alone: your reputation"], "Քննական շարադրությունը պահում են պատճառներն ու ապացույցները։"],
      ru: ["На какое из трёх средств Аристотеля должно больше всего опираться экзаменационное эссе?", ["logos: reasoning and evidence", "pathos: strong emotion", "ethos alone: your reputation"], "Экзаменационное эссе держится на доводах и доказательствах."],
    }),
  ],
  "summary-writing": [
    "forms mode=compare cols=compress prices_rose_by_12%,_9%_and_14%_in_three_months:prices_rose_sharply apples,_pears_and_plums:fruit the_council_said_the_building_was_unsafe_and_closed_it:the_council_closed_the_unsafe_building",
    closer(
      `**Six words, and a myth.** *"For sale: baby shoes, never worn"* is often called the shortest story ever written and credited to **Ernest Hemingway**, supposedly to win a bet. There is no evidence he wrote it: versions of the line appeared in newspapers decades earlier. Still, it shows what a summary aims for: the whole meaning in the fewest words. A summary keeps the **argument** and drops the **evidence**: not every percentage, but *prices rose sharply*.

**Three levels of compression.** Replace a list with one general word (*apples, pears and plums* → *fruit*), merge sentences into one (*The council said it was unsafe. It closed it.* → *The council closed the unsafe building*), and cut examples, repetition and quotations. Paraphrase rather than copy, keep the original's order of ideas, add no opinion of your own, and check the word limit last: going over it costs marks just as surely as leaving out a key point.`,
      `**Վեց բառ և մի առասպել։** *"For sale: baby shoes, never worn"*-ը («Վաճառվում են մանկական կոշիկներ, երբեք չհագած») հաճախ անվանում են երբևէ գրված ամենակարճ պատմությունը և վերագրում **Էռնեստ Հեմինգուեյին**, իբր գրազը շահելու համար։ Ոչ մի ապացույց չկա, որ նա է գրել այն․ տողի տարբերակները թերթերում հայտնվել էին տասնամյակներ առաջ։ Այնուամենայնիվ, այն ցույց է տալիս, թե ինչին է ձգտում ամփոփումը՝ ամբողջ իմաստը նվազագույն բառերով։ Ամփոփումը պահում է **փաստարկը** և բաց թողնում **ապացույցները**՝ ոչ թե ամեն տոկոսը, այլ *prices rose sharply*։

**Սեղմման երեք մակարդակ։** Ցանկը փոխարինիր մեկ ընդհանուր բառով (*apples, pears and plums* → *fruit*), նախադասությունները միացրու մեկի մեջ (*The council said it was unsafe. It closed it.* → *The council closed the unsafe building*) և կրճատիր օրինակները, կրկնությունները և մեջբերումները։ Վերաշարադրիր, մի արտագրիր, պահիր բնագրի մտքերի հերթականությունը, մի ավելացրու քո կարծիքը և վերջում ստուգիր բառերի սահմանը․ դրանից անցնելն այնքան միավոր է արժենում, որքան հիմնական մտքի բաց թողնելը։`,
      `**Шесть слов и миф.** *"For sale: baby shoes, never worn"* («Продаются детские ботинки, неношеные») часто называют самым коротким рассказом в истории и приписывают **Эрнесту Хемингуэю** — будто бы он написал его на спор. Доказательств этому нет: варианты фразы появлялись в газетах на десятилетия раньше. И всё же она показывает, к чему стремится изложение: весь смысл в наименьшем числе слов. Изложение сохраняет **аргумент** и отбрасывает **доказательства**: не каждый процент, а *prices rose sharply*.

**Три уровня сжатия.** Замени перечень одним общим словом (*apples, pears and plums* → *fruit*), объедини предложения в одно (*The council said it was unsafe. It closed it.* → *The council closed the unsafe building*) и убери примеры, повторы и цитаты. Перефразируй, а не копируй, сохраняй порядок мыслей оригинала, не добавляй своего мнения и в конце проверь лимит слов: превышение стоит баллов так же верно, как пропуск главной мысли.`,
    ),
    ask(3, {
      en: ["What does a summary keep?", ["every figure and example", "your own opinion", "the main argument"], "Keep the argument, drop the evidence."],
      hy: ["Ի՞նչ է պահում ամփոփումը։", ["every figure and example", "your own opinion", "the main argument"], "Պահիր փաստարկը, բաց թող ապացույցները։"],
      ru: ["Что сохраняет изложение?", ["every figure and example", "your own opinion", "the main argument"], "Сохрани аргумент, отбрось доказательства."],
    }),
  ],
  "formal-letter-12": [
    "sentence mode=order I am writing to complain about the service I received .",
    closer(
      `**A penny changed letter-writing.** On 1 May 1840 Britain issued the **Penny Black**, the world's first adhesive postage stamp, as part of **Rowland Hill's** reform: one penny to send a letter anywhere in the country, paid by the sender. Before that, the person who received a letter usually paid, by distance, and letters were a luxury. Cheap post made formal letters part of ordinary life, and many of their conventions date from that century.

**The frame never changes.** Opening, purpose, details, request, close: *Dear Sir or Madam* … *I am writing to complain about* … *I would be grateful if you could* … *I look forward to hearing from you* … *Yours faithfully*. A complaint stays **firm but polite**: state facts, dates and amounts, say what you want done, and avoid sarcasm. An application shows **fit**: what you offer that matches what they need, with one piece of evidence for each claim.`,
      `**Մեկ պենին փոխեց նամակագրությունը։** 1840 թվականի մայիսի 1-ին Բրիտանիան թողարկեց **Penny Black**-ը՝ աշխարհի առաջին սոսնձվող փոստային նամականիշը՝ **Ռոուլենդ Հիլի** բարեփոխման շրջանակում․ մեկ պենի՝ երկրի ցանկացած վայր նամակ ուղարկելու համար, վճարում էր ուղարկողը։ Մինչ այդ սովորաբար վճարում էր նամակը ստացողը՝ ըստ հեռավորության, և նամակները շքեղություն էին։ Էժան փոստը պաշտոնական նամակները դարձրեց առօրյա կյանքի մաս, և դրանց կանոններից շատերը գալիս են այդ դարից։

**Շրջանակն երբեք չի փոխվում։** Սկիզբ, նպատակ, մանրամասներ, խնդրանք, ավարտ՝ *Dear Sir or Madam* … *I am writing to complain about* … *I would be grateful if you could* … *I look forward to hearing from you* … *Yours faithfully*։ Բողոքը մնում է **հաստատուն, բայց քաղաքավարի**՝ ասա փաստերը, ամսաթվերը և գումարները, ասա, թե ինչ ես ուզում, որ արվի, և խուսափիր հեգնանքից։ Դիմումը ցույց է տալիս **համապատասխանությունը**՝ ինչ ես առաջարկում, որ համընկնում է նրանց կարիքներին, յուրաքանչյուր պնդման համար մեկ ապացույցով։`,
      `**Один пенни изменил переписку.** 1 мая 1840 года Британия выпустила **Penny Black** — первую в мире клеящуюся почтовую марку — в рамках реформы **Роуленда Хилла**: один пенни за письмо в любую точку страны, платит отправитель. До этого обычно платил получатель, по расстоянию, и письма были роскошью. Дешёвая почта сделала официальные письма частью обычной жизни, и многие их правила родом из того века.

**Рамка не меняется.** Обращение, цель, подробности, просьба, завершение: *Dear Sir or Madam* … *I am writing to complain about* … *I would be grateful if you could* … *I look forward to hearing from you* … *Yours faithfully*. Жалоба остаётся **твёрдой, но вежливой**: факты, даты и суммы, чего ты хочешь, и никакого сарказма. Заявление показывает **соответствие**: что ты предлагаешь из того, что им нужно, с одним доказательством на каждое утверждение.`,
    ),
    ask(2, {
      en: ["Which sentence is right for a formal letter of complaint?", ["You must give me my money back now!", "I would be grateful if you could refund the full amount.", "Give me a refund, OK?"], "Firm but polite: I would be grateful if you could…"],
      hy: ["Ո՞ր նախադասությունն է համապատասխան պաշտոնական բողոքի նամակին։", ["You must give me my money back now!", "I would be grateful if you could refund the full amount.", "Give me a refund, OK?"], "Հաստատուն, բայց քաղաքավարի՝ I would be grateful if you could…"],
      ru: ["Какое предложение подходит для официальной жалобы?", ["You must give me my money back now!", "I would be grateful if you could refund the full amount.", "Give me a refund, OK?"], "Твёрдо, но вежливо: I would be grateful if you could…"],
    }),
  ],
  "report-writing-12": [
    "forms mode=compare cols=repessay headings_for_each_section:no_headings findings_and_recommendations:arguments_and_opinion written_for_a_named_reader:written_for_a_general_reader neutral_until_the_recommendations:your_view_throughout",
    closer(
      `**To carry back.** **Report** comes from Latin *reportare*, "to carry back": a report brings information back to someone who needs to decide. That is the key difference from an essay. An essay argues a view for a general reader; a report is written for a **named reader** (*the head teacher*, *the council*), organised under **headings**, and ends with **recommendations** they can act on.

**Five sections, no opinion until the end.** A short report usually has: **introduction** (purpose and method), two or three **findings** sections, and **recommendations**. Findings stay neutral and specific: *Two-thirds of pupils surveyed said…*, not *I think pupils hate…*. Recommendations are concrete and practical: *The canteen **should** open at 8:30*, *It is **recommended** that…*. Short paragraphs and an occasional bullet list are welcome; contractions are not.`,
      `**Ետ բերել։** **Report**-ը գալիս է լատիներեն *reportare*՝ «ետ բերել» բայից․ զեկույցը տեղեկություն է բերում նրան, ով պետք է որոշում կայացնի։ Սա է շարադրությունից հիմնական տարբերությունը։ Շարադրությունը պաշտպանում է տեսակետ ընդհանուր ընթերցողի համար, իսկ զեկույցը գրվում է **կոնկրետ ընթերցողի** համար (*the head teacher*, *the council*), կազմակերպված է **վերնագրերով** և ավարտվում է **առաջարկություններով**, որոնց հիման վրա կարելի է գործել։

**Հինգ բաժին, կարծիք՝ միայն վերջում։** Կարճ զեկույցը սովորաբար ունի **ներածություն** (նպատակ և մեթոդ), երկու-երեք **արդյունքների** բաժին և **առաջարկություններ**։ Արդյունքները մնում են չեզոք և կոնկրետ՝ *Two-thirds of pupils surveyed said…*, ոչ թե *I think pupils hate…*։ Առաջարկությունները կոնկրետ են և գործնական՝ *The canteen **should** open at 8:30*, *It is **recommended** that…*։ Կարճ պարբերություններն ու երբեմն կետավոր ցանկն ողջունելի են, կրճատումները՝ ոչ։`,
      `**Принести обратно.** **Report** происходит от латинского *reportare* — «приносить обратно»: отчёт приносит сведения тому, кто должен принять решение. В этом главное отличие от эссе. Эссе отстаивает позицию для широкого читателя, а отчёт пишется для **конкретного адресата** (*the head teacher*, *the council*), разбит на **разделы с заголовками** и заканчивается **рекомендациями**, по которым можно действовать.

**Пять разделов, мнение — только в конце.** Короткий отчёт обычно состоит из **введения** (цель и метод), двух-трёх разделов **результатов** и **рекомендаций**. Результаты нейтральны и конкретны: *Two-thirds of pupils surveyed said…*, а не *I think pupils hate…*. Рекомендации конкретны и выполнимы: *The canteen **should** open at 8:30*, *It is **recommended** that…*. Короткие абзацы и иногда маркированный список приветствуются, сокращения — нет.`,
    ),
    ask(1, {
      en: ["What does a report end with that an essay usually does not?", ["recommendations for a named reader", "a personal story", "a question for the reader"], "Reports end with action the reader can take."],
      hy: ["Ինչո՞վ է ավարտվում զեկույցը, ինչով սովորաբար չի ավարտվում շարադրությունը։", ["recommendations for a named reader", "a personal story", "a question for the reader"], "Զեկույցներն ավարտվում են գործողություններով, որ ընթերցողը կարող է ձեռնարկել։"],
      ru: ["Чем заканчивается отчёт, но обычно не эссе?", ["recommendations for a named reader", "a personal story", "a question for the reader"], "Отчёт заканчивается действиями, которые адресат может предпринять."],
    }),
  ],
  "academic-style-12": [
    "sentence mode=order The results suggest that the method may be effective .",
    closer(
      `**The most famous understatement in science.** In April 1953 **James Watson and Francis Crick** described the double helix of DNA in a one-page paper in *Nature*. Near the end they wrote: *"It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism for the genetic material."* They had found how life copies itself, and said so in one carefully hedged sentence. That is academic style at its best: impersonal, precise and modest about what the evidence shows.

**Hedge to the strength of the evidence.** Academic writers match their verbs to their certainty: *the data **show*** (strong), *the results **suggest*** (moderate), *this **may** indicate* (weak). They avoid *you* (*one can see*, *it can be seen*), contractions and emotional adjectives, but they do not need to avoid *we* or short words. A useful six-point check: no contractions, no *you*, hedged claims, precise vocabulary, sources named, and sentences that a reader can follow on first reading.`,
      `**Գիտության ամենահայտնի թերագնահատումը։** 1953 թվականի ապրիլին **Ջեյմս Ուոթսոնը և Ֆրենսիս Քրիքը** *Nature* ամսագրում մեկ էջանոց հոդվածով նկարագրեցին ԴՆԹ-ի կրկնակի պարույրը։ Վերջում նրանք գրեցին՝ *«Մեր ուշադրությունից չի վրիպել, որ մեր ենթադրած սպեցիֆիկ զուգավորումն անմիջապես հուշում է գենետիկական նյութի պատճենման հնարավոր մեխանիզմ»*։ Նրանք գտել էին, թե ինչպես է կյանքը պատճենում ինքն իրեն, և դա ասացին մեկ խնամքով զգուշավոր նախադասությամբ։ Սա գիտական ոճն է իր լավագույն դրսևորմամբ՝ անանձնական, ճշգրիտ և համեստ այն հարցում, թե ինչ են ցույց տալիս ապացույցները։

**Զգուշությունը համապատասխանեցրու ապացույցների ուժին։** Գիտական հեղինակներն իրենց բայերը համապատասխանեցնում են իրենց վստահությանը՝ *the data **show*** (ուժեղ), *the results **suggest*** (չափավոր), *this **may** indicate* (թույլ)։ Նրանք խուսափում են *you*-ից (*one can see*, *it can be seen*), կրճատումներից և զգացմունքային ածականներից, բայց պարտադիր չէ խուսափել *we*-ից կամ կարճ բառերից։ Օգտակար վեցկետանի ստուգում՝ առանց կրճատումների, առանց *you*-ի, զգուշավոր պնդումներ, ճշգրիտ բառապաշար, նշված աղբյուրներ և նախադասություններ, որոնց ընթերցողը կարող է հետևել առաջին իսկ ընթերցումից։`,
      `**Самое знаменитое преуменьшение в науке.** В апреле 1953 года **Джеймс Уотсон и Фрэнсис Крик** описали двойную спираль ДНК в статье на одну страницу в *Nature*. В конце они написали: *«От нашего внимания не ускользнуло, что постулированное нами специфическое спаривание сразу наводит на мысль о возможном механизме копирования генетического материала»*. Они открыли, как жизнь копирует саму себя, и сказали об этом одной тщательно взвешенной фразой. Это академический стиль в лучшем виде: безличный, точный и скромный в оценке того, что показывают данные.

**Осторожность по силе доказательств.** Учёные подбирают глаголы по степени уверенности: *the data **show*** (сильно), *the results **suggest*** (умеренно), *this **may** indicate* (слабо). Они избегают *you* (*one can see*, *it can be seen*), сокращений и эмоциональных прилагательных, но не обязаны избегать *we* или коротких слов. Полезная проверка из шести пунктов: без сокращений, без *you*, осторожные утверждения, точная лексика, названные источники и предложения, понятные с первого прочтения.`,
    ),
    ask(2, {
      en: ["Your evidence is only moderate. Which verb fits?", ["The data prove that…", "The results suggest that…", "Everyone knows that…"], "Suggest matches moderate evidence."],
      hy: ["Քո ապացույցները միայն չափավոր են։ Ո՞ր բայն է համապատասխանում։", ["The data prove that…", "The results suggest that…", "Everyone knows that…"], "Suggest-ը համապատասխանում է չափավոր ապացույցներին։"],
      ru: ["Твои доказательства лишь умеренные. Какой глагол подходит?", ["The data prove that…", "The results suggest that…", "Everyone knows that…"], "Suggest соответствует умеренным доказательствам."],
    }),
  ],
  "debate-skills": [
    "forms mode=compare cols=foragainst homework_builds_discipline:it_takes_time_from_rest practice_fixes_what_was_learnt:it_widens_the_gap_between_families teachers_see_what_pupils_missed:quality_matters_more_than_quantity",
    closer(
      `**Seven debates that made a president.** In 1858 **Abraham Lincoln** and **Stephen Douglas**, competing for a US Senate seat in Illinois, held seven public debates, each lasting about three hours: one spoke for an hour, the other for an hour and a half, then the first had half an hour to reply. Douglas won the seat, but the printed debates made Lincoln nationally famous, and two years later he was elected president. The format survives in school debating as the **Lincoln–Douglas** style.

**Concede and turn.** The strongest move in a debate is not to deny everything but to **concede** a point and **turn** it: *My opponent is right that homework takes time; **however**, that is exactly why it should be short and focused.* Stay polite even when you disagree hard: attack the argument, never the person. Useful phrases: *With respect, I'd question that*, *That may be true, but…*, *Let me finish my point*, *Could I come in here?*.`,
      `**Յոթ բանավեճ, որոնք նախագահ ստեղծեցին։** 1858 թվականին **Աբրահամ Լինքոլնը** և **Սթիվեն Դուգլասը**, պայքարելով Իլինոյսից ԱՄՆ Սենատի տեղի համար, անցկացրին յոթ հրապարակային բանավեճ, յուրաքանչյուրը մոտ երեք ժամ․ մեկը խոսում էր մեկ ժամ, մյուսը՝ մեկուկես, ապա առաջինը պատասխանելու կես ժամ ուներ։ Տեղը շահեց Դուգլասը, բայց տպագրված բանավեճերը Լինքոլնին ազգովին հայտնի դարձրին, և երկու տարի անց նա ընտրվեց նախագահ։ Այս ձևաչափը դպրոցական բանավեճերում պահպանվել է **Lincoln–Douglas** անվամբ։

**Զիջիր և շրջիր։** Բանավեճում ամենաուժեղ քայլն ոչ թե ամեն ինչ ժխտելն է, այլ մի կետ **զիջելը** և այն **շրջելը**՝ *My opponent is right that homework takes time; **however**, that is exactly why it should be short and focused.* Մնա քաղաքավարի, նույնիսկ երբ կտրուկ համաձայն չես․ հարձակվիր փաստարկի, երբեք՝ մարդու վրա։ Օգտակար արտահայտություններ՝ *With respect, I'd question that*, *That may be true, but…*, *Let me finish my point*, *Could I come in here?*։`,
      `**Семь дебатов, создавших президента.** В 1858 году **Авраам Линкольн** и **Стивен Дуглас**, боровшиеся за место в Сенате США от Иллинойса, провели семь публичных дебатов, каждый около трёх часов: один говорил час, другой — полтора, затем первому давалось полчаса на ответ. Место получил Дуглас, но изданные дебаты сделали Линкольна известным на всю страну, и через два года его избрали президентом. В школьных дебатах этот формат сохранился под названием **Lincoln–Douglas**.

**Уступи и разверни.** Сильнейший ход в споре — не отрицать всё, а **уступить** в одном пункте и **развернуть** его: *My opponent is right that homework takes time; **however**, that is exactly why it should be short and focused.* Оставайся вежливым даже в жёстком несогласии: атакуй аргумент, а не человека. Полезные фразы: *With respect, I'd question that*, *That may be true, but…*, *Let me finish my point*, *Could I come in here?*.`,
    ),
    ask(3, {
      en: ["Which reply concedes and then turns the point?", ["You're completely wrong.", "That's a silly idea.", "That may be true, but it actually supports my case."], "Concede first, then turn it to your side."],
      hy: ["Ո՞ր պատասխանն է զիջում, ապա շրջում կետը։", ["You're completely wrong.", "That's a silly idea.", "That may be true, but it actually supports my case."], "Նախ զիջիր, հետո շրջիր քո օգտին։"],
      ru: ["Какой ответ уступает, а затем разворачивает довод?", ["You're completely wrong.", "That's a silly idea.", "That may be true, but it actually supports my case."], "Сначала уступи, потом разверни в свою пользу."],
    }),
  ],
  "presentation-skills": [
    "sentence mode=order Today I am going to talk about three things .",
    closer(
      `**Fear of the tongue.** The fear of public speaking has a name, **glossophobia**, from Greek *glōssa*, "tongue", and surveys regularly place it among the most common fears of all. Preparation is the cure: know your first and last sentences by heart, and plan five minutes as **opening**, **three points**, **summary** and **questions**. Audiences remember three points far better than seven.

**Signposts and slides.** Spoken English needs more signposting than writing, because listeners cannot reread: *First, …*, *Moving on to…*, *To sum up…*. **PowerPoint**, released in 1987, made slides universal, and the phrase *death by PowerPoint* followed. Keep slides for pictures, numbers and a few key words, never paragraphs you then read aloud. When a question stumps you, say so honestly: *That's a good question; I'd need to check, but my guess is…*.`,
      `**Լեզվի վախ։** Հրապարակային ելույթի վախն անուն ունի՝ **glossophobia**, հունարեն *glōssa*՝ «լեզու» բառից, և հարցումները պարբերաբար այն դասում են ամենատարածված վախերի շարքում։ Բուժումը պատրաստվածությունն է․ անգիր իմացիր առաջին և վերջին նախադասություններդ և հինգ րոպեն պլանավորիր այսպես՝ **սկիզբ**, **երեք կետ**, **ամփոփում** և **հարցեր**։ Լսարանն երեք կետը շատ ավելի լավ է հիշում, քան յոթը։

**Ուղենիշներ և սլայդներ։** Բանավոր անգլերենին ավելի շատ ուղենիշներ են պետք, քան գրավորին, քանի որ ունկնդիրները չեն կարող նորից կարդալ՝ *First, …*, *Moving on to…*, *To sum up…*։ 1987 թվականին թողարկված **PowerPoint**-ը սլայդները համընդհանուր դարձրեց, և դրան հետևեց *death by PowerPoint* արտահայտությունը։ Սլայդները պահիր նկարների, թվերի և մի քանի բանալի բառերի համար, երբեք՝ պարբերությունների, որոնք հետո բարձրաձայն կարդում ես։ Երբ հարցը քեզ շփոթեցնում է, ազնվորեն ասա՝ *That's a good question; I'd need to check, but my guess is…*։`,
      `**Страх языка.** У страха публичных выступлений есть название — **глоссофобия**, от греческого *glōssa*, «язык», — и опросы регулярно ставят его среди самых распространённых страхов. Лекарство — подготовка: выучи наизусть первую и последнюю фразы и спланируй пять минут как **вступление**, **три пункта**, **итог** и **вопросы**. Слушатели запоминают три пункта гораздо лучше, чем семь.

**Указатели и слайды.** Устному английскому нужно больше указателей, чем письменному, потому что слушатель не может перечитать: *First, …*, *Moving on to…*, *To sum up…*. **PowerPoint**, выпущенный в 1987 году, сделал слайды повсеместными, а за ним появилось выражение *death by PowerPoint*. Оставляй на слайдах картинки, числа и несколько ключевых слов, но никогда не абзацы, которые потом читаешь вслух. Если вопрос поставил в тупик, скажи честно: *That's a good question; I'd need to check, but my guess is…*.`,
    ),
    ask(1, {
      en: ["What belongs on a good slide?", ["a picture and a few key words", "the full text you will say", "as many points as possible"], "Slides support the talk; they don't replace it."],
      hy: ["Ի՞նչ պետք է լինի լավ սլայդի վրա։", ["a picture and a few key words", "the full text you will say", "as many points as possible"], "Սլայդներն օժանդակում են ելույթին, ոչ թե փոխարինում։"],
      ru: ["Что должно быть на хорошем слайде?", ["a picture and a few key words", "the full text you will say", "as many points as possible"], "Слайды поддерживают выступление, а не заменяют его."],
    }),
  ],
  "interview-and-discussion-12": [
    "sentence mode=order I see your point , but I'd look at it differently .",
    closer(
      `**A fifth of a second.** In 2009 a team led by **Tanya Stivers** recorded conversations in ten languages, from Danish to Japanese to a Mayan language, and found the same pattern everywhere: people answer questions after a gap of only about **200 milliseconds**, faster than it takes to plan a sentence. So in a speaking exam a short filler is natural: *Well…*, *That's an interesting question…*. A long silence or *I don't know* is not.

**Discussion is a two-way street.** In the discussion part of a speaking exam, examiners want you to **respond** to the other person, not just give a speech: agree and add (*Exactly, and what's more…*), disagree politely (*I see your point, but…*), and invite them in (*What do you think?*). Never answer *I don't know*: say what you would think, *I've never really thought about it, but I suppose…*, and give a reason and an example.`,
      `**Վայրկյանի մեկ հինգերորդը։** 2009 թվականին **Թանյա Սթայվերսի** գլխավորած խումբը ձայնագրեց զրույցներ տասը լեզվով՝ դանիերենից ու ճապոներենից մինչև մայաների լեզուներից մեկը, և ամենուր գտավ նույն օրինաչափությունը․ մարդիկ հարցերին պատասխանում են ընդամենը մոտ **200 միլիվայրկյան** դադարից հետո, ավելի արագ, քան նախադասություն պլանավորելու համար պահանջվող ժամանակն է։ Ուստի բանավոր քննությունում կարճ լրացնող բառը բնական է՝ *Well…*, *That's an interesting question…*։ Երկար լռությունը կամ *I don't know*-ն՝ ոչ։

**Քննարկումն երկկողմանի ճանապարհ է։** Բանավոր քննության քննարկման մասում քննողներն ուզում են, որ **արձագանքես** դիմացինին, ոչ թե պարզապես ճառ ասես՝ համաձայնիր և ավելացրու (*Exactly, and what's more…*), քաղաքավարի առարկիր (*I see your point, but…*) և հրավիրիր նրան խոսելու (*What do you think?*)։ Երբեք մի պատասխանիր *I don't know*․ ասա, թե ինչ կմտածեիր՝ *I've never really thought about it, but I suppose…*, և տուր պատճառ ու օրինակ։`,
      `**Пятая доля секунды.** В 2009 году группа под руководством **Тани Стиверс** записала разговоры на десяти языках — от датского и японского до одного из языков майя — и везде обнаружила одно и то же: люди отвечают на вопрос после паузы всего около **200 миллисекунд**, быстрее, чем можно спланировать фразу. Поэтому на устном экзамене короткое слово-заполнитель естественно: *Well…*, *That's an interesting question…*. Долгое молчание или *I don't know* — нет.

**Обсуждение — улица с двусторонним движением.** В части-обсуждении экзаменаторы хотят, чтобы ты **реагировал** на собеседника, а не произносил речь: соглашайся и добавляй (*Exactly, and what's more…*), вежливо возражай (*I see your point, but…*) и приглашай высказаться (*What do you think?*). Никогда не отвечай *I don't know*: скажи, что бы ты подумал, — *I've never really thought about it, but I suppose…* — и приведи причину и пример.`,
    ),
    ask(2, {
      en: ["The examiner asks something you have never thought about. What do you say?", ["I don't know.", "I've never really thought about it, but I suppose…", "Next question, please."], "Never stop at I don't know; give a view and a reason."],
      hy: ["Քննողը հարցնում է մի բան, որի մասին երբեք չես մտածել։ Ի՞նչ ես ասում։", ["I don't know.", "I've never really thought about it, but I suppose…", "Next question, please."], "Երբեք մի կանգնիր I don't know-ի վրա․ տուր կարծիք և պատճառ։"],
      ru: ["Экзаменатор спрашивает о том, о чём ты никогда не думал. Что ты скажешь?", ["I don't know.", "I've never really thought about it, but I suppose…", "Next question, please."], "Не останавливайся на I don't know: дай мнение и причину."],
    }),
  ],
  "pronunciation-fluency-12": [
    "forms mode=compare cols=stressmove PHOtograph:phoTOgraphy:photoGRAphic POlitics:poLItical:poliTIcian eCOnomy:-:ecoNOmic",
    closer(
      `**Stress moves with the suffix.** In English the stressed syllable can jump when a word grows: ***PHO**tograph*, *pho**TO**graphy*, *photo**GRA**phic*. Endings such as **-ic**, **-ical**, **-ian** and **-ion** pull the stress onto the syllable just before them: *po**LI**tical*, *poli**TI**cian*, *eco**NO**mic*. Armenian almost always stresses the **last** syllable of a word, so Armenian speakers often say *photoGRAPH*; Russian has free stress, so Russian speakers are used to learning it word by word.

**Fluency is not speed.** Examiners listen for speech that flows in **thought groups**, with short pauses in natural places, not for fast speech. Stress the content words (nouns, main verbs, adjectives, adverbs) and let the small words weaken: *I want to go* sounds like *I **want** tə **go***. Link words together, *an‿apple*, *turn‿off*. A week's drill: read a paragraph aloud every day, marking pauses with / and stresses with capitals first.`,
      `**Շեշտը շարժվում է վերջածանցի հետ։** Անգլերենում շեշտված վանկը կարող է ցատկել, երբ բառը մեծանում է՝ ***PHO**tograph*, *pho**TO**graphy*, *photo**GRA**phic*։ **-ic**, **-ical**, **-ian** և **-ion** վերջավորությունները շեշտը քաշում են իրենցից անմիջապես առաջ գտնվող վանկի վրա՝ *po**LI**tical*, *poli**TI**cian*, *eco**NO**mic*։ Հայերենը գրեթե միշտ շեշտում է բառի **վերջին** վանկը, ուստի հայախոսները հաճախ ասում են *photoGRAPH*, իսկ ռուսերենում շեշտն ազատ է, ուստի ռուսախոսները սովոր են այն սովորել բառ առ բառ։

**Սահունությունն արագություն չէ։** Քննողները լսում են **մտքի խմբերով** հոսող խոսք՝ բնական տեղերում կարճ դադարներով, ոչ թե արագ խոսք։ Շեշտիր բովանդակային բառերը (գոյականներ, հիմնական բայեր, ածականներ, մակբայներ) և թող փոքր բառերը թուլանան՝ *I want to go*-ն հնչում է *I **want** tə **go***։ Բառերը կապիր իրար՝ *an‿apple*, *turn‿off*։ Մեկշաբաթյա վարժություն՝ ամեն օր բարձրաձայն կարդա մեկ պարբերություն՝ նախապես դադարները նշելով /-ով, իսկ շեշտերը՝ մեծատառերով։`,
      `**Ударение движется вместе с суффиксом.** В английском ударный слог может прыгать, когда слово растёт: ***PHO**tograph*, *pho**TO**graphy*, *photo**GRA**phic*. Окончания **-ic**, **-ical**, **-ian** и **-ion** притягивают ударение на слог прямо перед собой: *po**LI**tical*, *poli**TI**cian*, *eco**NO**mic*. В армянском ударение почти всегда падает на **последний** слог, поэтому армяноязычные часто говорят *photoGRAPH*; в русском ударение свободное, и русскоязычные привыкли учить его слово за словом.

**Беглость — не скорость.** Экзаменаторы слушают речь, текущую **смысловыми группами** с короткими паузами в естественных местах, а не быструю речь. Выделяй знаменательные слова (существительные, основные глаголы, прилагательные, наречия) и позволяй служебным ослабевать: *I want to go* звучит как *I **want** tə **go***. Связывай слова: *an‿apple*, *turn‿off*. Упражнение на неделю: каждый день читай вслух абзац, заранее отметив паузы знаком /, а ударения — заглавными буквами.`,
    ),
    ask(3, {
      en: ["Where is the stress in «photographic»?", ["PHO-to-gra-phic", "pho-TO-gra-phic", "pho-to-GRA-phic"], "-ic pulls the stress onto the syllable before it."],
      hy: ["Որտե՞ղ է շեշտը «photographic» բառում։", ["PHO-to-gra-phic", "pho-TO-gra-phic", "pho-to-GRA-phic"], "-ic-ը շեշտը քաշում է իրենից առաջ գտնվող վանկի վրա։"],
      ru: ["Где ударение в «photographic»?", ["PHO-to-gra-phic", "pho-TO-gra-phic", "pho-to-GRA-phic"], "-ic притягивает ударение на предыдущий слог."],
    }),
  ],
  "exam-day-strategy-12": [
    "sentence mode=order Read every question twice before you answer .",
    closer(
      `**A little stress helps.** In 1908 the psychologists **Robert Yerkes and John Dodson** found that mice learned a task best under a moderate level of stimulation, and worse with too little or too much. The **Yerkes–Dodson law**, as it became known, explains exam nerves: some tension sharpens attention, panic ruins it. Slow breathing in the first minute, and a time plan you have practised, keep you on the good side of the curve.

**The first four minutes decide the rest.** Read the whole paper, note the marks for each part, and write the finishing time for each section in the margin. Start with the part you are surest of, answer every question (a blank always scores zero), and watch for questions with two instructions: *Read the text and **underline** the words that show…*. Keep the last minutes for four checking passes: names and numbers, verb forms, articles and plurals, spelling.`,
      `**Մի փոքր սթրեսն օգնում է։** 1908 թվականին հոգեբաններ **Ռոբերտ Յերքսը և Ջոն Դոդսոնը** պարզեցին, որ մկները խնդիրը լավագույնս սովորում էին չափավոր գրգռման պայմաններում և ավելի վատ՝ շատ քիչ կամ շատ ուժեղ գրգռման դեպքում։ **Յերքս–Դոդսոնի օրենքը**, ինչպես այն հետագայում կոչվեց, բացատրում է քննական հուզմունքը․ որոշ լարվածություն սրում է ուշադրությունը, խուճապը՝ քանդում։ Առաջին րոպեին դանդաղ շնչառությունը և վարժեցված ժամանակային պլանը քեզ պահում են կորի լավ կողմում։

**Առաջին չորս րոպեներն որոշում են մնացածը։** Կարդա ամբողջ թեստը, նշիր յուրաքանչյուր մասի միավորները և լուսանցքում գրիր յուրաքանչյուր բաժնի ավարտի ժամը։ Սկսիր այն մասից, որում ամենավստահն ես, պատասխանիր բոլոր հարցերին (դատարկ տեղը միշտ զրո է) և ուշադիր եղիր երկու հրահանգ ունեցող հարցերին՝ *Read the text and **underline** the words that show…*։ Վերջին րոպեները պահիր չորս ստուգման համար՝ անուններ և թվեր, բայաձևեր, հոդեր և հոգնակի, ուղղագրություն։`,
      `**Немного стресса полезно.** В 1908 году психологи **Роберт Йеркс и Джон Додсон** обнаружили, что мыши лучше всего обучались при умеренной стимуляции и хуже — при слишком слабой или слишком сильной. **Закон Йеркса–Додсона**, как его потом назвали, объясняет экзаменационное волнение: некоторое напряжение обостряет внимание, паника его разрушает. Медленное дыхание в первую минуту и отрепетированный план времени удерживают тебя на хорошей стороне кривой.

**Первые четыре минуты решают остальное.** Прочитай всю работу, отметь баллы за каждую часть и запиши на полях время окончания каждого раздела. Начни с той части, в которой уверен больше всего, отвечай на все вопросы (пустая клетка всегда даёт ноль) и следи за вопросами с двумя инструкциями: *Read the text and **underline** the words that show…*. Последние минуты оставь на четыре прохода проверки: имена и числа, формы глаголов, артикли и множественное число, орфография.`,
    ),
    ask(1, {
      en: ["You don't know an answer and there is no penalty for wrong answers. What should you do?", ["make your best guess", "leave it blank", "write «I don't know»"], "A blank always scores zero."],
      hy: ["Չգիտես պատասխանը, և սխալ պատասխանների համար տույժ չկա։ Ի՞նչ պետք է անես։", ["make your best guess", "leave it blank", "write «I don't know»"], "Դատարկ տեղը միշտ զրո է։"],
      ru: ["Ты не знаешь ответа, а штрафа за ошибки нет. Что делать?", ["make your best guess", "leave it blank", "write «I don't know»"], "Пустой ответ всегда даёт ноль."],
    }),
  ],
  "final-mock-exam": [
    "tense name=past-perfect-continuous aspects=simple,continuous,perfect,perfect-continuous times=past,present,future",
    closer(
      `**Testing is learning.** In a 2006 study, the psychologists **Henry Roediger and Jeffrey Karpicke** gave students a text to learn. Some reread it several times; others read it once and then took practice tests. A week later the tested group remembered far more, although the rereaders had felt more confident. This **testing effect** is why a mock exam is not just a measurement: sitting it is one of the best ways to revise.

**Turn the result into a plan.** After marking, sort every lost mark by cause: a grammar form (which one?), a word you did not know, a misread question, or time. Then plan the last weeks around the biggest group, not around the parts you already enjoy. The table above brings the whole tense system together one last time: three times, four aspects, twelve forms you now know how to choose between.`,
      `**Ստուգվելը սովորել է։** 2006 թվականի մի ուսումնասիրությունում հոգեբաններ **Հենրի Ռոդիգերը և Ջեֆրի Կարպիկեն** ուսանողներին սովորելու համար տեքստ տվեցին։ Ոմանք այն մի քանի անգամ վերընթերցեցին, մյուսները կարդացին մեկ անգամ, ապա փորձնական թեստեր հանձնեցին։ Մեկ շաբաթ անց ստուգված խումբը շատ ավելին էր հիշում, թեև վերընթերցողներն իրենց ավելի վստահ էին զգացել։ Այս **testing effect**-ն է պատճառը, որ փորձնական քննությունը պարզապես չափում չէ․ այն հանձնելը կրկնելու լավագույն եղանակներից մեկն է։

**Արդյունքը վերածիր պլանի։** Ստուգելուց հետո յուրաքանչյուր կորցրած միավոր դասակարգիր ըստ պատճառի՝ քերականական ձև (որը՞), անծանոթ բառ, սխալ կարդացված հարց կամ ժամանակ։ Հետո վերջին շաբաթները պլանավորիր ամենամեծ խմբի շուրջ, ոչ թե այն մասերի, որոնք արդեն սիրում ես։ Վերևի աղյուսակը վերջին անգամ միավորում է ժամանակաձևերի ամբողջ համակարգը՝ երեք ժամանակ, չորս կերպ, տասներկու ձև, որոնց միջև դու այժմ գիտես ընտրել։`,
      `**Проверка — это учёба.** В исследовании 2006 года психологи **Генри Рёдигер и Джеффри Карпик** дали студентам выучить текст. Одни перечитывали его несколько раз, другие прочитали один раз, а затем писали пробные тесты. Через неделю проверявшаяся группа помнила гораздо больше, хотя перечитывавшие чувствовали себя увереннее. Этот **эффект тестирования** объясняет, почему пробный экзамен — не просто измерение: писать его — один из лучших способов повторить материал.

**Преврати результат в план.** После проверки распредели каждый потерянный балл по причине: грамматическая форма (какая?), незнакомое слово, неверно прочитанный вопрос или время. Затем строй последние недели вокруг самой большой группы, а не вокруг частей, которые тебе и так нравятся. Таблица выше в последний раз собирает всю систему времён: три времени, четыре вида, двенадцать форм, между которыми ты теперь умеешь выбирать.`,
    ),
    ask(2, {
      en: ["According to the testing effect, which revision method works better?", ["rereading the notes many times", "taking practice tests", "highlighting every line"], "Retrieving information strengthens memory."],
      hy: ["Ըստ testing effect-ի՝ կրկնության ո՞ր եղանակն է ավելի արդյունավետ։", ["rereading the notes many times", "taking practice tests", "highlighting every line"], "Տեղեկությունը հիշողությունից հանելն ամրացնում է այն։"],
      ru: ["Какой способ повторения лучше, согласно эффекту тестирования?", ["rereading the notes many times", "taking practice tests", "highlighting every line"], "Извлечение информации из памяти укрепляет её."],
    }),
  ],
};
