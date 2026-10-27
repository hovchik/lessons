import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade9: VisualMap[number] = {
  "festivals-world": [
    "forms mode=compare cols=fest3 Vardavar:Armenia:14_weeks_after_Easter Maslenitsa:Russia:the_week_before_Lent Halloween:Ireland,_the_UK,_the_USA:31_October Guy_Fawkes_Night:Britain:5_November",
    closer(
      `**Old festivals in new clothes.** Many festivals are older than the religions that now host them. **Vardavar** goes back to pre-Christian Armenia, when water was poured in honour of the goddess **Astghik**; today the Armenian Church celebrates the Transfiguration on the same day. **Halloween** comes from the Celtic festival of **Samhain**, and the first jack-o'-lanterns in Ireland were carved from turnips, not pumpkins.

**A failed plot, celebrated for 400 years.** On 5 November 1605 Guy Fawkes was caught guarding barrels of gunpowder under the Houses of Parliament. The plot failed, and the British have lit bonfires and fireworks on that night ever since. In English, festivals take capital letters (*Easter*, *Vardavar*), and we **celebrate** a festival, but celebrate **by** doing something.`,
      `**Հին տոներ՝ նոր հագուստով։** Շատ տոներ ավելի հին են, քան այն կրոնները, որոնք այժմ նշում են դրանք։ **Վարդավառը** գալիս է նախաքրիստոնեական Հայաստանից, երբ ջուր էին լցնում **Աստղիկ** աստվածուհու պատվին․ այսօր Հայ եկեղեցին նույն օրը նշում է Պայծառակերպությունը։ **Halloween**-ը ծագում է կելտական **Սամհեյն** տոնից, իսկ Իռլանդիայում առաջին լապտերները փորագրում էին շաղգամից, ոչ թե դդումից։

**Ձախողված դավադրություն, որ նշվում է 400 տարի։** 1605 թվականի նոյեմբերի 5-ին Գայ Ֆոքսին բռնեցին Պառլամենտի շենքի տակ վառոդի տակառներ հսկելիս։ Դավադրությունը ձախողվեց, և այդ ժամանակից ի վեր բրիտանացիներն այդ գիշեր խարույկներ և հրավառություն են անում։ Անգլերենում տոները գրվում են մեծատառով (*Easter*, *Vardavar*), մենք **celebrate** ենք անում տոնը, բայց celebrate **by** doing something։`,
      `**Старые праздники в новой одежде.** Многие праздники старше религий, которые их сейчас отмечают. **Вардавар** восходит к дохристианской Армении, когда воду лили в честь богини **Астхик**; сегодня Армянская церковь в этот день празднует Преображение. **Хэллоуин** происходит от кельтского праздника **Самайн**, а первые светильники-«джеки» в Ирландии вырезали из репы, а не из тыквы.

**Провалившийся заговор, который празднуют 400 лет.** 5 ноября 1605 года Гая Фокса поймали, когда он охранял бочки с порохом под зданием Парламента. Заговор провалился, и с тех пор британцы в эту ночь жгут костры и запускают фейерверки. В английском названия праздников пишутся с заглавной (*Easter*, *Vardavar*), праздник мы **celebrate**, а отмечаем его **by** doing something.`,
    ),
    ask(2, {
      en: ["Choose the correct sentence.", ["We celebrate Vardavar with throwing water.", "We celebrate Vardavar by throwing water.", "We celebrate Vardavar for throw water."], "Celebrate by + -ing."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["We celebrate Vardavar with throwing water.", "We celebrate Vardavar by throwing water.", "We celebrate Vardavar for throw water."], "Celebrate by + -ing։"],
      ru: ["Выбери правильное предложение.", ["We celebrate Vardavar with throwing water.", "We celebrate Vardavar by throwing water.", "We celebrate Vardavar for throw water."], "Celebrate by + -ing."],
    }),
  ],
  "celebration-vocabulary-9": [
    "sentence mode=order The custom dates back to pre-Christian times .",
    closer(
      `**A holiday was a holy day.** The English word **holiday** comes from **holy day**: in the Middle Ages, days off work were church feasts. Russian **праздник** comes from **праздный**, "idle, empty", a day when people did not work. Armenian **տոն** is an old word for a feast. Today British English uses **holiday** for a trip too (*We went on holiday to Spain*), while Americans say **vacation**.

**Phrases that sound native.** *The festival **takes place** in July*, *A concert **is held** in the square*, *This year it **falls on** a Sunday*, *The custom **dates back to** ancient times*, *The day **marks** the end of winter*. Each one is better than a plain *is* or *happens*. Notice that **date back to** is followed by a time, not a verb.`,
      `**Holiday-ը սուրբ օր էր։** Անգլերեն **holiday** բառը ծագում է **holy day**-ից՝ «սուրբ օր»․ միջնադարում ոչ աշխատանքային օրերն եկեղեցական տոներ էին։ Ռուսերեն **праздник**-ը ծագում է **праздный**՝ «պարապ, դատարկ» բառից՝ օր, երբ մարդիկ չէին աշխատում։ Հայերեն **տոն**-ը հին բառ է՝ տոնախմբություն իմաստով։ Այսօր բրիտանական անգլերենը **holiday** է ասում նաև ճամփորդությանը (*We went on holiday to Spain*), իսկ ամերիկացիներն ասում են **vacation**։

**Արտահայտություններ, որ բնիկի պես են հնչում։** *The festival **takes place** in July*, *A concert **is held** in the square*, *This year it **falls on** a Sunday*, *The custom **dates back to** ancient times*, *The day **marks** the end of winter*։ Յուրաքանչյուրն ավելի լավ է, քան պարզ *is*-ը կամ *happens*-ը։ Նկատիր, որ **date back to**-ից հետո գալիս է ժամանակ, ոչ թե բայ։`,
      `**Holiday был святым днём.** Английское **holiday** происходит от **holy day** — «святой день»: в Средние века выходные были церковными праздниками. Русское **праздник** — от **праздный**, «незанятый, пустой»: день, когда не работали. Армянское **տոն** — старое слово для торжества. Сегодня британский английский говорит **holiday** и о поездке (*We went on holiday to Spain*), а американцы — **vacation**.

**Выражения, которые звучат по-родному.** *The festival **takes place** in July*, *A concert **is held** in the square*, *This year it **falls on** a Sunday*, *The custom **dates back to** ancient times*, *The day **marks** the end of winter*. Каждое лучше простого *is* или *happens*. Заметь: после **date back to** идёт время, а не глагол.`,
    ),
    ask(3, {
      en: ["Complete: «This year New Year's Day ___ a Thursday.»", ["takes on", "dates on", "falls on"], "A date falls on a day of the week."],
      hy: ["Լրացրու՝ «This year New Year's Day ___ a Thursday.»", ["takes on", "dates on", "falls on"], "Ամսաթիվը falls on շաբաթվա որևէ օր։"],
      ru: ["Дополни: «This year New Year's Day ___ a Thursday.»", ["takes on", "dates on", "falls on"], "Дата falls on день недели."],
    }),
  ],
  "stative-verbs": [
    "forms mode=compare cols=stative I_think_it's_a_good_idea:I'm_thinking_about_the_trip She_has_a_car:She's_having_lunch This_soup_tastes_great:He's_tasting_the_soup I_see_what_you_mean:I'm_seeing_the_dentist_tomorrow",
    closer(
      `**One verb, two meanings.** Some verbs are stative in one meaning and active in another. **Think** = believe (*I think so*) is a state; **think** = consider (*I'm thinking about it*) is an action. **Have** = own is a state; **have** = eat or experience (*having lunch*, *having fun*) is an action. Read the table across: the left side never takes **-ing**, the right side can.

**Not every English uses the rule.** In Indian English you may hear *I am knowing him for years* or *She is having two brothers*. These are normal there but count as mistakes in British and American exams. Armenian and Russian have no continuous forms, so the danger for you is the opposite: forgetting **-ing** where it *is* needed.`,
      `**Մեկ բայ՝ երկու իմաստ։** Որոշ բայեր մի իմաստով վիճակային են, մյուսով՝ գործողական։ **Think**՝ կարծել (*I think so*) վիճակ է, **think**՝ մտածել, քննարկել (*I'm thinking about it*) գործողություն է։ **Have**՝ ունենալ, վիճակ է, **have**՝ ուտել կամ ապրել (*having lunch*, *having fun*), գործողություն է։ Կարդա աղյուսակը տողերով՝ ձախ կողմն երբեք **-ing** չի ստանում, աջը կարող է։

**Ոչ բոլոր անգլերենները հետևում են կանոնին։** Հնդկական անգլերենում կարող ես լսել *I am knowing him for years* կամ *She is having two brothers*։ Այնտեղ դրանք սովորական են, բայց բրիտանական և ամերիկյան քննություններում սխալ են համարվում։ Հայերենն ու ռուսերենը շարունակական ձևեր չունեն, ուստի քեզ համար վտանգը հակառակն է՝ մոռանալ **-ing**-ը այնտեղ, որտեղ այն *պետք է*։`,
      `**Один глагол — два значения.** Некоторые глаголы в одном значении статичны, в другом — активны. **Think** = считать (*I think so*) — состояние; **think** = обдумывать (*I'm thinking about it*) — действие. **Have** = иметь — состояние; **have** = есть или переживать (*having lunch*, *having fun*) — действие. Прочитай таблицу по строкам: левая сторона никогда не берёт **-ing**, правая — может.

**Не каждый английский соблюдает правило.** В индийском английском можно услышать *I am knowing him for years* или *She is having two brothers*. Там это нормально, но на британских и американских экзаменах считается ошибкой. В армянском и русском нет продолженных форм, так что для тебя опасность обратная: забыть **-ing** там, где он *нужен*.`,
    ),
    ask(1, {
      en: ["Choose the correct sentence.", ["This cake tastes delicious.", "This cake is tasting delicious.", "This cake taste delicious."], "Taste = has a flavour: a state, simple form."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["This cake tastes delicious.", "This cake is tasting delicious.", "This cake taste delicious."], "Taste՝ համ ունենալ՝ վիճակ, simple ձև։"],
      ru: ["Выбери правильное предложение.", ["This cake tastes delicious.", "This cake is tasting delicious.", "This cake taste delicious."], "Taste = иметь вкус: состояние, простая форма."],
    }),
  ],
  "word-formation-nouns": [
    "forms mode=compare cols=wordform decide:decision kind:kindness free:freedom child:childhood improve:improvement able:ability",
    closer(
      `**Old suffixes with a story.** **-dom** comes from the Old English word **dōm**, "judgement, state", the same word as **doom**: *freedom* is "the state of being free". **-hood** meant "condition, rank": *childhood*, *neighbourhood*. **-ness** is native English too, while **-tion**, **-ment** and **-ity** came from French and Latin: *decision*, *improvement*, *ability*.

**Armenian and Russian have their own factories.** Armenian makes abstract nouns with **-ություն**: *բարի* → *բարություն* (kindness), *ազատ* → *ազատություն* (freedom). Russian uses **-ость**, **-ство** and **-ние**: *добрый* → *доброта*, *свободный* → *свобода*, *решить* → *решение*. Exams often test these: hide the right column of the table and form the nouns yourself.`,
      `**Հին վերջածանցներ՝ պատմությամբ։** **-dom**-ը ծագում է հին անգլերեն **dōm**՝ «դատաստան, վիճակ» բառից, նույն բառը, ինչ **doom**-ը՝ *freedom*-ը «ազատ լինելու վիճակն» է։ **-hood**-ը նշանակում էր «վիճակ, աստիճան»՝ *childhood*, *neighbourhood*։ **-ness**-ը նույնպես բնիկ անգլերեն է, իսկ **-tion**, **-ment** և **-ity** եկել են ֆրանսերենից և լատիներենից՝ *decision*, *improvement*, *ability*։

**Հայերենն ու ռուսերենն ունեն իրենց «գործարանները»։** Հայերենը վերացական գոյականներ կազմում է **-ություն**-ով՝ *բարի* → *բարություն*, *ազատ* → *ազատություն*։ Ռուսերենը գործածում է **-ость**, **-ство** և **-ние**՝ *добрый* → *доброта*, *свободный* → *свобода*, *решить* → *решение*։ Քննությունները հաճախ ստուգում են սա․ թաքցրու աղյուսակի աջ սյունակը և ինքդ կազմիր գոյականները։`,
      `**Старые суффиксы с историей.** **-dom** происходит от древнеанглийского **dōm** — «суд, состояние», того же слова, что **doom**: *freedom* — «состояние свободы». **-hood** значило «состояние, положение»: *childhood*, *neighbourhood*. **-ness** — тоже исконно английский, а **-tion**, **-ment** и **-ity** пришли из французского и латыни: *decision*, *improvement*, *ability*.

**У армянского и русского свои «фабрики».** Армянский образует отвлечённые существительные с **-ություն**: *բարի* → *բարություն* (доброта), *ազատ* → *ազատություն* (свобода). Русский использует **-ость**, **-ство** и **-ние**: *добрый* → *доброта*, *свободный* → *свобода*, *решить* → *решение*. На экзаменах это проверяют часто: спрячь правый столбец таблицы и образуй существительные сам.`,
    ),
    ask(3, {
      en: ["Form the noun: «Thank you for your ___.» (kind)", ["kindhood", "kindment", "kindness"], "Kind + -ness = kindness."],
      hy: ["Կազմիր գոյականը՝ «Thank you for your ___.» (kind)", ["kindhood", "kindment", "kindness"], "Kind + -ness = kindness։"],
      ru: ["Образуй существительное: «Thank you for your ___.» (kind)", ["kindhood", "kindment", "kindness"], "Kind + -ness = kindness."],
    }),
  ],
  "invitations-and-replies-9": [
    "sentence mode=order keep=1 I'm afraid I can't make it on Saturday .",
    closer(
      `**RSVP is French.** Formal invitations in English often end with **RSVP**, from the French *répondez s'il vous plaît*, "please reply". The host needs to know how many guests to expect, so not answering is considered rude. A formal invitation might say *Mr and Mrs Petrosyan request the pleasure of your company…*; an informal one just *Fancy coming to my party?*

**Saying no nicely.** English rarely says a direct *No*. Polite refusals have three parts: thanks, a soft no with a reason, and a positive ending. *Thanks so much for inviting me. **I'm afraid I can't make it** on Saturday, I'm at my grandmother's. **Have a great time!*** **Make it** here means "manage to come". Armenian «Ցավոք, չեմ կարող գալ» and Russian «К сожалению, не смогу прийти» work the same way.`,
      `**RSVP-ն ֆրանսերեն է։** Անգլերեն պաշտոնական հրավերները հաճախ ավարտվում են **RSVP**-ով՝ ֆրանսերեն *répondez s'il vous plaît*՝ «խնդրում ենք պատասխանել»։ Տանտիրոջը պետք է իմանալ, թե քանի հյուր սպասի, ուստի չպատասխանելը կոպտություն է համարվում։ Պաշտոնական հրավերում կարող է գրված լինել *Mr and Mrs Petrosyan request the pleasure of your company…*, իսկ ոչ պաշտոնականում՝ պարզապես *Fancy coming to my party?*

**Գեղեցիկ մերժել։** Անգլերենը հազվադեպ է ուղիղ *No* ասում։ Քաղաքավարի մերժումն ունի երեք մաս՝ շնորհակալություն, մեղմ «ոչ»՝ պատճառով, և դրական ավարտ՝ *Thanks so much for inviting me. **I'm afraid I can't make it** on Saturday, I'm at my grandmother's. **Have a great time!***։ **Make it**-ը այստեղ նշանակում է «հասցնել գալ»։ Հայերեն «Ցավոք, չեմ կարող գալ» և ռուսերեն «К сожалению, не смогу прийти» աշխատում են նույն կերպ։`,
      `**RSVP — это французский.** Официальные приглашения на английском часто заканчиваются на **RSVP** — от французского *répondez s'il vous plaît*, «просим ответить». Хозяевам нужно знать, сколько ждать гостей, поэтому не ответить считается невежливым. В официальном приглашении может быть *Mr and Mrs Petrosyan request the pleasure of your company…*, в неофициальном — просто *Fancy coming to my party?*

**Красиво отказать.** Английский редко говорит прямое *No*. Вежливый отказ состоит из трёх частей: благодарность, мягкое «нет» с причиной и позитивный конец. *Thanks so much for inviting me. **I'm afraid I can't make it** on Saturday, I'm at my grandmother's. **Have a great time!*** **Make it** здесь значит «успеть прийти». Армянское «Ցավոք, չեմ կարող գալ» и русское «К сожалению, не смогу прийти» работают так же.`,
    ),
    ask(2, {
      en: ["Which reply is the most polite refusal?", ["No. I'm busy.", "Thanks for asking! I'm afraid I can't make it, but have fun!", "I don't want to come."], "Thanks, soft no, positive ending."],
      hy: ["Ո՞ր պատասխանն է ամենաքաղաքավարի մերժումը։", ["No. I'm busy.", "Thanks for asking! I'm afraid I can't make it, but have fun!", "I don't want to come."], "Շնորհակալություն, մեղմ «ոչ», դրական ավարտ։"],
      ru: ["Какой ответ — самый вежливый отказ?", ["No. I'm busy.", "Thanks for asking! I'm afraid I can't make it, but have fun!", "I don't want to come."], "Благодарность, мягкое «нет», позитивный конец."],
    }),
  ],
  "describing-event": [
    "forms mode=compare cols=extreme very_big:huge very_small:tiny very_good:excellent very_tired:exhausted very_cold:freezing very_surprised:astonished",
    closer(
      `**Never very amazing.** Strong (extreme) adjectives already contain the idea of **very**, so they cannot take it: *very huge* and *very excellent* sound wrong. They go with **absolutely**, **really** or **totally**: *The concert was **absolutely amazing***. Ordinary adjectives go with **very**, **extremely** or **quite**: *It was **very** good*. **Really** works with both.

**Make the reader see it.** A good description of an event uses the senses: what you **saw**, **heard**, **smelt** and **felt**. *The square was **packed**; you could **hear** the drums from three streets away, and the air **smelt** of grilled corn.* Armenian and Russian use similar intensifiers: «**շատ** լավ» / «**բացարձակ** անհավանական», «**очень** хорошо» / «**совершенно** потрясающе».`,
      `**Երբեք very amazing։** Ուժեղ (ծայրահեղ) ածականներն արդեն պարունակում են **very**-ի գաղափարը, ուստի չեն կարող ստանալ այն՝ *very huge*-ը և *very excellent*-ը սխալ են հնչում։ Դրանց հետ գործածվում են **absolutely**, **really** կամ **totally**՝ *The concert was **absolutely amazing***։ Սովորական ածականները գործածվում են **very**, **extremely** կամ **quite** բառերի հետ՝ *It was **very** good*։ **Really**-ն աշխատում է երկուսի հետ էլ։

**Թող ընթերցողը տեսնի։** Իրադարձության լավ նկարագրությունը գործածում է զգայարանները՝ ինչ **տեսար**, **լսեցիր**, **հոտ առար** և **զգացիր**՝ *The square was **packed**; you could **hear** the drums from three streets away, and the air **smelt** of grilled corn.*։ Հայերենն ու ռուսերենը գործածում են նման ուժեղացուցիչներ՝ «**շատ** լավ» / «**բացարձակ** անհավանական», «**очень** хорошо» / «**совершенно** потрясающе»։`,
      `**Никогда не very amazing.** Сильные (крайние) прилагательные уже содержат идею **very**, поэтому не сочетаются с ним: *very huge* и *very excellent* звучат неправильно. С ними идут **absolutely**, **really** или **totally**: *The concert was **absolutely amazing***. Обычные прилагательные идут с **very**, **extremely** или **quite**: *It was **very** good*. **Really** подходит к обоим.

**Пусть читатель увидит.** Хорошее описание события использует чувства: что ты **видел**, **слышал**, **чуял** и **ощущал**. *The square was **packed**; you could **hear** the drums from three streets away, and the air **smelt** of grilled corn.* Армянский и русский используют похожие усилители: «**շատ** լավ» / «**բացարձակ** անհավանական», «**очень** хорошо» / «**совершенно** потрясающе».`,
    ),
    ask(3, {
      en: ["Choose the correct phrase.", ["very exhausted", "absolutely tired", "absolutely exhausted"], "Exhausted is extreme: absolutely."],
      hy: ["Ընտրիր ճիշտ արտահայտությունը։", ["very exhausted", "absolutely tired", "absolutely exhausted"], "Exhausted-ը ծայրահեղ ածական է՝ absolutely։"],
      ru: ["Выбери правильное сочетание.", ["very exhausted", "absolutely tired", "absolutely exhausted"], "Exhausted — крайнее: absolutely."],
    }),
  ],
  "books-films-music": [
    "sentence mode=order keep=1 It is set in Yerevan in the 1920s .",
    closer(
      `**A novel was once a novelty.** **Novel** comes from the Italian **novella**, "a new story, a piece of news". Russian **роман** and Armenian **վեպ** come from different roots: **роман** from the old French *romanz*, a story written in the everyday Romance language rather than Latin, while **վեպ** is an old Armenian word that once meant an epic tale, as in the ancient *Vipasank* songs.

**Review language.** English reviewers use fixed phrases: *It **is set in**…* (place and time), *It **tells the story of**…* (plot), *It **deals with**…* (theme), *The main character is…*. And they avoid *good* and *bad*: a book is **gripping**, **moving** or **thought-provoking**, or else **predictable**, **dull** or **disappointing**. Never give away the ending: that is a **spoiler**.`,
      `**Վեպը ժամանակին նորություն էր։** **Novel**-ը ծագում է իտալերեն **novella**՝ «նոր պատմություն, լուր» բառից։ Ռուսերեն **роман**-ը և հայերեն **վեպ**-ը այլ արմատներից են․ **роман**-ը հին ֆրանսերեն *romanz*-ից է՝ պատմություն, գրված առօրյա ռոմանական լեզվով, ոչ թե լատիներենով, իսկ **վեպ**-ը հին հայերեն բառ է, որ ժամանակին նշանակում էր էպիկական պատմություն, ինչպես հնագույն *Վիպասանք* երգերում։

**Գրախոսության լեզուն։** Անգլիացի գրախոսները գործածում են կայուն արտահայտություններ՝ *It **is set in**…* (վայր և ժամանակ), *It **tells the story of**…* (սյուժե), *It **deals with**…* (թեմա), *The main character is…*։ Եվ խուսափում են *good*-ից և *bad*-ից՝ գիրքը **gripping**, **moving** կամ **thought-provoking** է, կամ էլ՝ **predictable**, **dull** կամ **disappointing**։ Երբեք մի բացահայտիր ավարտը՝ դա **spoiler** է։`,
      `**Роман когда-то был новинкой.** **Novel** происходит от итальянского **novella** — «новая история, новость». Русское **роман** и армянское **վեպ** — из других корней: **роман** — от старофранцузского *romanz*, рассказа на народном романском языке, а не на латыни, а **վեպ** — древнеармянское слово, когда-то означавшее эпическое сказание, как в старинных песнях *Випасанк*.

**Язык рецензии.** Английские рецензенты пользуются устойчивыми фразами: *It **is set in**…* (место и время), *It **tells the story of**…* (сюжет), *It **deals with**…* (тема), *The main character is…*. И избегают *good* и *bad*: книга **gripping**, **moving** или **thought-provoking** — либо **predictable**, **dull** или **disappointing**. Никогда не раскрывай концовку: это **spoiler**.`,
    ),
    ask(1, {
      en: ["Which phrase tells the reader where and when a story happens?", ["It is set in…", "It deals with…", "Without giving too much away…"], "Set in = the place and time."],
      hy: ["Ո՞ր արտահայտությունն է ընթերցողին ասում, թե որտեղ և երբ է կատարվում պատմությունը։", ["It is set in…", "It deals with…", "Without giving too much away…"], "Set in՝ վայրը և ժամանակը։"],
      ru: ["Какая фраза говорит, где и когда происходит история?", ["It is set in…", "It deals with…", "Without giving too much away…"], "Set in — место и время."],
    }),
  ],
  "art-vocabulary-9": [
    "sentence mode=order In the foreground there is a small white house .",
    closer(
      `**Still life or dead nature?** English **still life** comes from the Dutch **stilleven**, "motionless life", a name given by Dutch painters in the 17th century. Russian **натюрморт** and Armenian **նատյուրմորտ** come instead from the French **nature morte**, "dead nature". Same fruit, flowers and jugs, opposite names.

**Describing a picture in order.** English describes a painting from front to back or from one side to the other: ***In the foreground** there is…*, ***In the background** you can see…*, ***On the left / right**…*, ***In the middle**…*. Then give your reaction: *The colours are bright and warm; it makes me feel…* Try it with a Saryan landscape: blue shadows, orange earth and no grey at all.`,
      `**Still life, թե՞ մեռյալ բնություն։** Անգլերեն **still life**-ը ծագում է հոլանդերեն **stilleven**՝ «անշարժ կյանք» բառից, որ անվանումը տվել են 17-րդ դարի հոլանդացի նկարիչները։ Ռուսերեն **натюрморт**-ը և հայերեն **նատյուրմորտ**-ը, ընդհակառակը, ծագում են ֆրանսերեն **nature morte**՝ «մեռյալ բնություն» արտահայտությունից։ Նույն մրգերը, ծաղիկներն ու սափորները՝ հակառակ անուններով։

**Նկարի նկարագրությունը հերթականությամբ։** Անգլերենը նկարը նկարագրում է առջևից խորքը կամ մի կողմից մյուսը՝ ***In the foreground** there is…*, ***In the background** you can see…*, ***On the left / right**…*, ***In the middle**…*։ Հետո ասա քո տպավորությունը՝ *The colours are bright and warm; it makes me feel…*։ Փորձիր Սարյանի բնանկարով՝ կապույտ ստվերներ, նարնջագույն հող և ամենևին մոխրագույն չկա։`,
      `**Тихая жизнь или мёртвая природа?** Английское **still life** — от голландского **stilleven**, «неподвижная жизнь»: так назвали жанр голландские художники XVII века. Русское **натюрморт** и армянское **նատյուրմորտ**, наоборот, — от французского **nature morte**, «мёртвая природа». Те же фрукты, цветы и кувшины — противоположные названия.

**Описываем картину по порядку.** Английский описывает картину спереди назад или слева направо: ***In the foreground** there is…*, ***In the background** you can see…*, ***On the left / right**…*, ***In the middle**…*. Потом — твоё впечатление: *The colours are bright and warm; it makes me feel…* Попробуй на пейзаже Сарьяна: синие тени, оранжевая земля и ни капли серого.`,
    ),
    ask(2, {
      en: ["What is a still life?", ["a picture of the sea", "a picture of objects like fruit and flowers", "a picture of the painter"], "Still life: objects on a table."],
      hy: ["Ի՞նչ է still life-ը։", ["a picture of the sea", "a picture of objects like fruit and flowers", "a picture of the painter"], "Still life՝ առարկաներ սեղանի վրա։"],
      ru: ["Что такое still life?", ["a picture of the sea", "a picture of objects like fruit and flowers", "a picture of the painter"], "Still life — предметы на столе."],
    }),
  ],
  "passive-all-tenses": [
    "forms mode=compare cols=voice They_are_building_a_bridge:A_bridge_is_being_built They_have_built_a_bridge:A_bridge_has_been_built They_will_build_a_bridge:A_bridge_will_be_built They_had_built_a_bridge:A_bridge_had_been_built",
    closer(
      `**One recipe for every tense.** The passive always has the same two parts: a form of **be** in the right tense, then the **past participle**. Only **be** changes: *is built*, *is **being** built*, *has **been** built*, *will **be** built*, *had **been** built*. If you know the tenses of **be**, you know every passive. Read the table across: the meaning stays, the focus moves from the builders to the bridge.

**Orwell's warning.** In his 1946 essay *Politics and the English Language*, George Orwell advised: "Never use the passive where you can use the active." He meant that the passive can hide who is responsible: *Mistakes were made* says nothing about who made them. Use it when the doer is unknown or unimportant, not to hide them.`,
      `**Մեկ բաղադրատոմս՝ բոլոր ժամանակների համար։** Կրավորականը միշտ ունի նույն երկու մասը՝ **be**-ի ձևը ճիշտ ժամանակով, հետո **անցյալ դերբայը**։ Փոխվում է միայն **be**-ն՝ *is built*, *is **being** built*, *has **been** built*, *will **be** built*, *had **been** built*։ Եթե գիտես **be**-ի ժամանակները, գիտես բոլոր կրավորականները։ Կարդա աղյուսակը տողերով՝ իմաստը մնում է, ուշադրությունը շինարարներից տեղափոխվում է կամրջին։

**Օրուելի զգուշացումը։** 1946 թվականի *Politics and the English Language* էսսեում Ջորջ Օրուելը խորհուրդ էր տալիս՝ «Երբեք մի գործածիր կրավորականը, որտեղ կարող ես գործածել ներգործականը»։ Նա նկատի ուներ, որ կրավորականը կարող է թաքցնել պատասխանատուին՝ *Mistakes were made*-ը ոչինչ չի ասում, թե ով է սխալվել։ Գործածիր այն, երբ գործողն անհայտ է կամ կարևոր չէ, ոչ թե նրան թաքցնելու համար։`,
      `**Один рецепт для всех времён.** Пассив всегда состоит из двух частей: форма **be** в нужном времени, потом **причастие прошедшего времени**. Меняется только **be**: *is built*, *is **being** built*, *has **been** built*, *will **be** built*, *had **been** built*. Знаешь времена **be** — знаешь любой пассив. Прочитай таблицу по строкам: смысл тот же, а внимание переходит со строителей на мост.

**Предупреждение Оруэлла.** В эссе 1946 года *Politics and the English Language* Джордж Оруэлл советовал: «Никогда не используй пассив там, где можно использовать актив». Он имел в виду, что пассив может скрыть ответственного: *Mistakes were made* ничего не говорит о том, кто ошибся. Используй пассив, когда деятель неизвестен или неважен, а не чтобы его спрятать.`,
    ),
    ask(2, {
      en: ["Make it passive: «They are repairing the road.»", ["The road is repaired.", "The road is being repaired.", "The road has being repaired."], "Present continuous passive: is being + participle."],
      hy: ["Դարձրու կրավորական՝ «They are repairing the road.»", ["The road is repaired.", "The road is being repaired.", "The road has being repaired."], "Present continuous passive՝ is being + դերբայ։"],
      ru: ["Сделай пассив: «They are repairing the road.»", ["The road is repaired.", "The road is being repaired.", "The road has being repaired."], "Present continuous passive: is being + причастие."],
    }),
  ],
  "passive-with-modals-9": [
    "sentence mode=order Phones must be switched off during the exam .",
    closer(
      `**The language of signs and rules.** Modal passives are everywhere in public notices: *Phones **must be switched off***, *Children **must be accompanied** by an adult*, *Tickets **can be bought** online*, *This door **should be kept** closed*. They sound impersonal and official, because the rule matters, not the person who made it.

**Modal + be + participle.** The pattern never changes: *can be done*, *must be done*, *should be done*, *might be done*, *will be done*. For the past: *should **have been** done* (but wasn't). Russian uses **нужно**, **можно**, **нельзя** with an impersonal sentence: «Телефоны **нужно выключить**»; Armenian uses **պետք է** + passive verb: «Հեռախոսները **պետք է անջատվեն**».`,
      `**Ցուցանակների և կանոնների լեզուն։** Եղանակավորող բայով կրավորականն ամենուր է հանրային հայտարարություններում՝ *Phones **must be switched off***, *Children **must be accompanied** by an adult*, *Tickets **can be bought** online*, *This door **should be kept** closed*։ Դրանք անանձնական և պաշտոնական են հնչում, որովհետև կարևորը կանոնն է, ոչ թե այն ստեղծողը։

**Modal + be + դերբայ։** Կաղապարն երբեք չի փոխվում՝ *can be done*, *must be done*, *should be done*, *might be done*, *will be done*։ Անցյալի համար՝ *should **have been** done* (բայց չի արվել)։ Ռուսերենը գործածում է **нужно**, **можно**, **нельзя** անդեմ նախադասությամբ՝ «Телефоны **нужно выключить**», հայերենը՝ **պետք է** + կրավորական բայ՝ «Հեռախոսները **պետք է անջատվեն**»։`,
      `**Язык табличек и правил.** Модальный пассив повсюду в объявлениях: *Phones **must be switched off***, *Children **must be accompanied** by an adult*, *Tickets **can be bought** online*, *This door **should be kept** closed*. Он звучит безлично и официально, потому что важно правило, а не тот, кто его придумал.

**Modal + be + причастие.** Схема не меняется: *can be done*, *must be done*, *should be done*, *might be done*, *will be done*. Для прошлого: *should **have been** done* (а не сделали). Русский использует **нужно**, **можно**, **нельзя** с безличным предложением: «Телефоны **нужно выключить**»; армянский — **պետք է** + пассивный глагол: «Հեռախոսները **պետք է անջատվեն**».`,
    ),
    ask(1, {
      en: ["Complete the sign: «Bags ___ left in the corridor.»", ["must not be", "must not", "not must be"], "Modal + not + be + participle."],
      hy: ["Լրացրու ցուցանակը՝ «Bags ___ left in the corridor.»", ["must not be", "must not", "not must be"], "Modal + not + be + դերբայ։"],
      ru: ["Дополни табличку: «Bags ___ left in the corridor.»", ["must not be", "must not", "not must be"], "Modal + not + be + причастие."],
    }),
  ],
  "great-writers": [
    "forms mode=compare cols=who3 Shakespeare:playwright_and_poet:Hamlet,_Romeo_and_Juliet Pushkin:poet:Eugene_Onegin Tumanyan:poet_and_storyteller:Anush,_Gikor",
    closer(
      `**Words we owe to Shakespeare.** The Oxford English Dictionary records many words for the first time in Shakespeare's plays, among them **eyeball**, **bedroom** and **lonely**, as well as phrases like *break the ice* and *wild-goose chase*. Seven years after his death, his friends collected 36 of his plays in the **First Folio** of 1623; without it, about half of them would have been lost.

**Three writers, three families.** **Pushkin**'s great-grandfather, Abram Gannibal, was born in Africa and became a general under Peter the Great. **Tumanyan**'s poem *Anush* became the libretto of Armen Tigranian's opera *Anush*, first staged in 1912. Use the passive to talk about writers' work: *Hamlet **was written** around 1600*, *Tumanyan's tales **have been translated** into many languages*.`,
      `**Բառեր, որ պարտական ենք Շեքսպիրին։** Օքսֆորդի անգլերեն բառարանը շատ բառեր առաջին անգամ արձանագրում է Շեքսպիրի պիեսներում, դրանց թվում՝ **eyeball**, **bedroom** և **lonely**, ինչպես նաև *break the ice* և *wild-goose chase* արտահայտությունները։ Նրա մահից յոթ տարի անց ընկերները նրա 36 պիեսները հավաքեցին 1623 թվականի **First Folio**-ում․ առանց դրա՝ դրանց մոտ կեսը կկորչեր։

**Երեք գրող, երեք ընտանիք։** **Պուշկինի** նախապապը՝ Աբրամ Գանիբալը, ծնվել էր Աֆրիկայում և Պետրոս Մեծի օրոք դարձել գեներալ։ **Թումանյանի** «Անուշ» պոեմը դարձավ Արմեն Տիգրանյանի «Անուշ» օպերայի լիբրետոն, որն առաջին անգամ բեմադրվեց 1912 թվականին։ Գրողների ստեղծագործության մասին խոսելիս գործածիր կրավորականը՝ *Hamlet **was written** around 1600*, *Tumanyan's tales **have been translated** into many languages*։`,
      `**Слова, которыми мы обязаны Шекспиру.** Оксфордский словарь английского языка впервые фиксирует многие слова в пьесах Шекспира, среди них **eyeball**, **bedroom** и **lonely**, а также выражения *break the ice* и *wild-goose chase*. Через семь лет после его смерти друзья собрали 36 его пьес в **Первом фолио** 1623 года; без него около половины из них были бы утрачены.

**Три писателя — три семьи.** Прадед **Пушкина**, Абрам Ганнибал, родился в Африке и стал генералом при Петре Великом. Поэма **Туманяна** «Ануш» стала либретто оперы Армена Тиграняна «Ануш», впервые поставленной в 1912 году. О творчестве писателей говори в пассиве: *Hamlet **was written** around 1600*, *Tumanyan's tales **have been translated** into many languages*.`,
    ),
    ask(3, {
      en: ["Complete: «Eugene Onegin ___ by Pushkin.»", ["wrote", "has written", "was written"], "The book is the subject: passive, was written."],
      hy: ["Լրացրու՝ «Eugene Onegin ___ by Pushkin.»", ["wrote", "has written", "was written"], "Ենթական գիրքն է՝ կրավորական՝ was written։"],
      ru: ["Дополни: «Eugene Onegin ___ by Pushkin.»", ["wrote", "has written", "was written"], "Подлежащее — книга: пассив, was written."],
    }),
  ],
  "writing-review": [
    "sentence mode=order Without giving too much away , the ending is a surprise .",
    closer(
      `**Critics can win prizes too.** In 1975 the American film critic **Roger Ebert** became the first film critic to win the Pulitzer Prize for criticism. His reviews were famous for being honest, personal and easy to read: he wrote as if he were talking to a friend. That is the tone to aim for in an exam review too.

**A review has four parts.** First the basics: title, author or director, genre. Then a short summary **without the ending**. Then your opinion with reasons, using precise adjectives: *gripping*, *predictable*, *beautifully written*. Finally a recommendation: *I would recommend it to anyone who likes…* Russian and Armenian reviews follow the same plan: «**рекомендую**», «**խորհուրդ եմ տալիս**».`,
      `**Քննադատներն էլ կարող են մրցանակներ ստանալ։** 1975 թվականին ամերիկացի կինոքննադատ **Ռոջեր Էբերտը** դարձավ առաջին կինոքննադատը, որ ստացավ Պուլիցերյան մրցանակ քննադատության համար։ Նրա գրախոսությունները հայտնի էին անկեղծությամբ, անձնական տոնով և հեշտ ընթերցվելով․ նա գրում էր այնպես, կարծես խոսում էր ընկերոջ հետ։ Քննական գրախոսության մեջ էլ ձգտիր այդ տոնին։

**Գրախոսությունն ունի չորս մաս։** Նախ՝ հիմնականը՝ վերնագիր, հեղինակ կամ ռեժիսոր, ժանր։ Հետո՝ կարճ ամփոփում **առանց ավարտի**։ Հետո՝ քո կարծիքը՝ պատճառներով և ճշգրիտ ածականներով՝ *gripping*, *predictable*, *beautifully written*։ Վերջում՝ առաջարկություն՝ *I would recommend it to anyone who likes…*։ Ռուսերեն և հայերեն գրախոսությունները հետևում են նույն ծրագրին՝ «**рекомендую**», «**խորհուրդ եմ տալիս**»։`,
      `**Критики тоже получают премии.** В 1975 году американский кинокритик **Роджер Эберт** стал первым кинокритиком, получившим Пулитцеровскую премию за критику. Его рецензии славились честностью, личным тоном и лёгкостью: он писал так, будто разговаривает с другом. К такому тону стоит стремиться и в экзаменационной рецензии.

**В рецензии четыре части.** Сначала основное: название, автор или режиссёр, жанр. Потом краткий пересказ **без концовки**. Потом твоё мнение с причинами и точными прилагательными: *gripping*, *predictable*, *beautifully written*. И наконец рекомендация: *I would recommend it to anyone who likes…* Русские и армянские рецензии строятся по тому же плану: «**рекомендую**», «**խորհուրդ եմ տալիս**».`,
    ),
    ask(2, {
      en: ["What should a review never include?", ["the genre", "the ending", "a recommendation"], "Telling the ending spoils it for the reader."],
      hy: ["Ի՞նչ չպետք է երբեք լինի գրախոսության մեջ։", ["the genre", "the ending", "a recommendation"], "Ավարտը պատմելը փչացնում է ընթերցողի հաճույքը։"],
      ru: ["Чего никогда не должно быть в рецензии?", ["the genre", "the ending", "a recommendation"], "Рассказать концовку — испортить впечатление читателю."],
    }),
  ],
  "third-conditional": [
    "sentence mode=order If we had left earlier , we would have caught the train .",
    closer(
      `**Russian does not separate the past.** Russian uses the same form for an imagined present and an imagined past: «Если **бы** мы **вышли** раньше, мы **бы успели**» can mean both *If we left earlier…* and *If we had left earlier…*; context decides. Armenian separates them: «Եթե ավելի շուտ **դուրս եկած լինեինք**, գնացքին **կհասնեինք**». English always separates: the third conditional is only about the past.

**Would of is a spelling mistake.** In speech, *would have* sounds like *would've*, and many native speakers write it as *would of*. That is always wrong. The pattern is **if + had + participle**, **would have + participle**: *If she **had asked**, I **would have helped**.*`,
      `**Ռուսերենը չի առանձնացնում անցյալը։** Ռուսերենը նույն ձևն է գործածում երևակայական ներկայի և երևակայական անցյալի համար՝ «Если **бы** мы **вышли** раньше, мы **бы успели**» կարող է նշանակել և՛ *If we left earlier…*, և՛ *If we had left earlier…*․ որոշում է համատեքստը։ Հայերենը տարբերում է դրանք՝ «Եթե ավելի շուտ **դուրս եկած լինեինք**, գնացքին **կհասնեինք**»։ Անգլերենը միշտ տարբերում է՝ third conditional-ը միայն անցյալի մասին է։

**Would of-ը ուղղագրական սխալ է։** Խոսքում *would have*-ը հնչում է *would've*, և շատ անգլիախոսներ այն գրում են *would of*։ Դա միշտ սխալ է։ Կաղապարն է **if + had + դերբայ**, **would have + դերբայ**՝ *If she **had asked**, I **would have helped**.*`,
      `**Русский не отделяет прошлое.** Русский использует одну форму для воображаемого настоящего и воображаемого прошлого: «Если **бы** мы **вышли** раньше, мы **бы успели**» может значить и *If we left earlier…*, и *If we had left earlier…* — решает контекст. Армянский их различает: «Եթե ավելի շուտ **դուրս եկած լինեինք**, գնացքին **կհասնեինք**». Английский различает всегда: третье условное — только о прошлом.

**Would of — орфографическая ошибка.** В речи *would have* звучит как *would've*, и многие носители пишут *would of*. Это всегда неверно. Схема: **if + had + причастие**, **would have + причастие**: *If she **had asked**, I **would have helped**.*`,
    ),
    ask(2, {
      en: ["Choose the correct sentence.", ["If I had known, I would of come.", "If I had known, I would have come.", "If I would have known, I had come."], "If + had + participle, would have + participle."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["If I had known, I would of come.", "If I had known, I would have come.", "If I would have known, I had come."], "If + had + դերբայ, would have + դերբայ։"],
      ru: ["Выбери правильное предложение.", ["If I had known, I would of come.", "If I had known, I would have come.", "If I would have known, I had come."], "If + had + причастие, would have + причастие."],
    }),
  ],
  "third-conditional-practice-9": [
    "forms mode=compare cols=cond23 If_I_had_time,_I'd_help:If_I_had_had_time,_I'd_have_helped If_it_were_sunny,_we'd_go_out:If_it_had_been_sunny,_we'd_have_gone_out If_she_knew,_she'd_tell_us:If_she_had_known,_she'd_have_told_us",
    closer(
      `**The butterfly effect.** In 1972 the American meteorologist **Edward Lorenz** gave a talk with a famous title: *Does the flap of a butterfly's wings in Brazil set off a tornado in Texas?* He showed that tiny changes can lead to huge differences later. The third conditional is the grammar of that idea: *If I **hadn't missed** the bus, I **wouldn't have met** my best friend.*

**Had had is correct.** In *If I **had had** time*, the first **had** is the helper of the past perfect and the second is the past participle of **have**. It looks strange but is perfectly normal. Read the table across: the left side imagines the present, the right side imagines a past that cannot be changed.`,
      `**Թիթեռի էֆեկտը։** 1972 թվականին ամերիկացի օդերևութաբան **Էդվարդ Լորենցը** զեկուցում կարդաց հայտնի վերնագրով՝ *Կարո՞ղ է Բրազիլիայում թիթեռի թևերի թափահարումը Տեխասում տորնադո առաջացնել*։ Նա ցույց տվեց, որ փոքրիկ փոփոխությունները հետագայում կարող են հսկայական տարբերությունների հանգեցնել։ Third conditional-ը այդ գաղափարի քերականությունն է՝ *If I **hadn't missed** the bus, I **wouldn't have met** my best friend.*

**Had had-ը ճիշտ է։** *If I **had had** time*-ում առաջին **had**-ը past perfect-ի օժանդակ բայն է, երկրորդը՝ **have**-ի անցյալ դերբայը։ Տարօրինակ է թվում, բայց միանգամայն սովորական է։ Կարդա աղյուսակը տողերով՝ ձախ կողմը պատկերացնում է ներկան, աջը՝ անցյալ, որն այլևս չի կարելի փոխել։`,
      `**Эффект бабочки.** В 1972 году американский метеоролог **Эдвард Лоренц** выступил с докладом под знаменитым названием: *Может ли взмах крыльев бабочки в Бразилии вызвать торнадо в Техасе?* Он показал, что крошечные изменения могут привести к огромным различиям потом. Третье условное — грамматика этой идеи: *If I **hadn't missed** the bus, I **wouldn't have met** my best friend.*

**Had had — это правильно.** В *If I **had had** time* первое **had** — вспомогательный глагол past perfect, а второе — причастие от **have**. Выглядит странно, но совершенно нормально. Прочитай таблицу по строкам: левая сторона воображает настоящее, правая — прошлое, которое уже не изменить.`,
    ),
    ask(1, {
      en: ["«I didn't study, so I failed.» Which sentence means the same?", ["If I had studied, I wouldn't have failed.", "If I studied, I wouldn't fail.", "If I study, I won't fail."], "A past that can't be changed: third conditional."],
      hy: ["«I didn't study, so I failed.» Ո՞ր նախադասությունն է նույնը նշանակում։", ["If I had studied, I wouldn't have failed.", "If I studied, I wouldn't fail.", "If I study, I won't fail."], "Անցյալ, որ չի կարելի փոխել՝ third conditional։"],
      ru: ["«I didn't study, so I failed.» Какое предложение значит то же самое?", ["If I had studied, I wouldn't have failed.", "If I studied, I wouldn't fail.", "If I study, I won't fail."], "Прошлое, которое не изменить: третье условное."],
    }),
  ],
  "mixed-conditionals": [
    "sentence mode=order If I had studied medicine , I would be a doctor now .",
    closer(
      `**When the past changes the present.** A mixed conditional joins two times: an imagined **past** cause and an imagined **present** result. *If I **had studied** medicine (past), I **would be** a doctor now (present).* The word **now** is a strong hint that the second half is about the present, not the past.

**The other direction.** A present fact can also change the past: *If I **were** braver (always, now), I **would have spoken** to her yesterday (past).* Armenian handles this easily by mixing the two forms: «Եթե բժշկություն **սովորած լինեի**, հիմա բժիշկ **կլինեի**». Russian, again, uses one **бы** form for everything and lets the words *сейчас* and *тогда* show the time.`,
      `**Երբ անցյալը փոխում է ներկան։** Խառը պայմանականը միացնում է երկու ժամանակ՝ երևակայական **անցյալ** պատճառ և երևակայական **ներկա** արդյունք՝ *If I **had studied** medicine (անցյալ), I **would be** a doctor now (ներկա).*։ **Now** բառն ուժեղ ակնարկ է, որ երկրորդ մասը ներկայի մասին է, ոչ թե անցյալի։

**Մյուս ուղղությունը։** Ներկայի փաստը նույնպես կարող է փոխել անցյալը՝ *If I **were** braver (միշտ, հիմա), I **would have spoken** to her yesterday (անցյալ).*։ Հայերենը հեշտությամբ է դա անում՝ խառնելով երկու ձևերը՝ «Եթե բժշկություն **սովորած լինեի**, հիմա բժիշկ **կլինեի**»։ Ռուսերենը, դարձյալ, ամեն ինչի համար գործածում է մեկ **бы** ձև և թողնում, որ *сейчас* և *тогда* բառերը ցույց տան ժամանակը։`,
      `**Когда прошлое меняет настоящее.** Смешанное условное соединяет два времени: воображаемую причину в **прошлом** и воображаемый результат в **настоящем**. *If I **had studied** medicine (прошлое), I **would be** a doctor now (настоящее).* Слово **now** — сильная подсказка, что вторая часть о настоящем, а не о прошлом.

**Обратное направление.** Факт настоящего тоже может менять прошлое: *If I **were** braver (всегда, сейчас), I **would have spoken** to her yesterday (прошлое).* Армянский легко справляется, смешивая две формы: «Եթե բժշկություն **սովորած լինեի**, հիմա բժիշկ **կլինեի**». Русский снова использует одну форму с **бы**, а время показывают слова *сейчас* и *тогда*.`,
    ),
    ask(3, {
      en: ["«I didn't eat breakfast, so I'm hungry now.» Choose the mixed conditional.", ["If I ate breakfast, I wouldn't be hungry.", "If I had eaten breakfast, I wouldn't have been hungry.", "If I had eaten breakfast, I wouldn't be hungry now."], "Past cause (had eaten), present result (wouldn't be … now)."],
      hy: ["«I didn't eat breakfast, so I'm hungry now.» Ընտրիր խառը պայմանականը։", ["If I ate breakfast, I wouldn't be hungry.", "If I had eaten breakfast, I wouldn't have been hungry.", "If I had eaten breakfast, I wouldn't be hungry now."], "Անցյալ պատճառ (had eaten), ներկա արդյունք (wouldn't be … now)։"],
      ru: ["«I didn't eat breakfast, so I'm hungry now.» Выбери смешанное условное.", ["If I ate breakfast, I wouldn't be hungry.", "If I had eaten breakfast, I wouldn't have been hungry.", "If I had eaten breakfast, I wouldn't be hungry now."], "Причина в прошлом (had eaten), результат сейчас (wouldn't be … now)."],
    }),
  ],
  "wishes-regrets": [
    "forms mode=compare cols=wishtime I_wish_I_knew_the_answer:I_wish_I_had_known_the_answer I_wish_it_were_sunny:I_wish_it_had_been_sunny I_wish_I_lived_by_the_sea:I_wish_I_hadn't_said_that",
    closer(
      `**A step back in time.** **Wish** always takes a form one step further in the past than the time you mean. For a wish about **now**, use the past: *I wish I **knew***. For a regret about the **past**, use the past perfect: *I wish I **had known***. Armenian does the same with **Երանի՜**: «Երանի՜ **իմանայի**» (now) and «Երանի՜ **իմացած լինեի**» (past).

**No regrets.** One of the most famous songs about regret says the opposite: Édith Piaf's *Non, je ne regrette rien* (1960), "No, I regret nothing". In English, **regret** is followed by **-ing** for the past: *I **regret saying** that.* **Should have** is another way to express regret: *I **should have listened** to my mother.*`,
      `**Մեկ քայլ հետ՝ ժամանակի մեջ։** **Wish**-ը միշտ ստանում է այն ժամանակից մեկ քայլ ավելի անցյալ ձև, որի մասին խոսում ես։ **Հիմայի** մասին ցանկության համար գործածիր անցյալը՝ *I wish I **knew***։ **Անցյալի** մասին ափսոսանքի համար՝ past perfect՝ *I wish I **had known***։ Հայերենը նույնն է անում **Երանի՜**-ով՝ «Երանի՜ **իմանայի**» (հիմա) և «Երանի՜ **իմացած լինեի**» (անցյալ)։

**Ոչ մի ափսոսանք։** Ափսոսանքի մասին ամենահայտնի երգերից մեկն ասում է հակառակը՝ Էդիթ Պիաֆի *Non, je ne regrette rien* (1960)՝ «Ոչ, ես ոչնչի համար չեմ ափսոսում»։ Անգլերենում **regret**-ից հետո անցյալի համար գալիս է **-ing**՝ *I **regret saying** that.*։ **Should have**-ը ափսոսանք արտահայտելու ևս մեկ եղանակ է՝ *I **should have listened** to my mother.*`,
      `**Шаг назад во времени.** **Wish** всегда берёт форму на шаг дальше в прошлое, чем время, о котором речь. Желание о **настоящем** — прошедшее: *I wish I **knew***. Сожаление о **прошлом** — past perfect: *I wish I **had known***. Армянский делает то же с **Երանի՜**: «Երանի՜ **իմանայի**» (сейчас) и «Երանի՜ **իմացած լինեի**» (в прошлом).

**Ни о чём не жалею.** Одна из самых знаменитых песен о сожалении говорит обратное: *Non, je ne regrette rien* Эдит Пиаф (1960) — «Нет, я ни о чём не жалею». В английском после **regret** для прошлого идёт **-ing**: *I **regret saying** that.* **Should have** — ещё один способ выразить сожаление: *I **should have listened** to my mother.*`,
    ),
    ask(2, {
      en: ["You missed the concert yesterday. «I wish I ___ it.»", ["didn't miss", "hadn't missed", "don't miss"], "A regret about the past: wish + past perfect."],
      hy: ["Երեկ բաց ես թողել համերգը։ «I wish I ___ it.»", ["didn't miss", "hadn't missed", "don't miss"], "Ափսոսանք անցյալի մասին՝ wish + past perfect։"],
      ru: ["Ты вчера пропустил концерт. «I wish I ___ it.»", ["didn't miss", "hadn't missed", "don't miss"], "Сожаление о прошлом: wish + past perfect."],
    }),
  ],
  "unless-and-alternatives-9": [
    "forms mode=compare cols=unless If_you_don't_hurry,_you'll_be_late:Unless_you_hurry,_you'll_be_late If_it_doesn't_rain,_we'll_play:Unless_it_rains,_we'll_play I_won't_go_if_you_don't_come:I_won't_go_unless_you_come",
    closer(
      `**Unless already contains not.** **Unless** means **if … not**, so the verb after it is positive: *Unless you **hurry**…*, never *Unless you don't hurry*. Armenian says «**եթե** չշտապես», Russian «**если не** поторопишься» — both need a separate negative, which is why the double negative mistake is so common.

**More ways to say if.** **As long as** and **provided that** mean "only if": *You can go out **as long as** you're back by ten.* **In case** is different: it is about being prepared, not a condition. *Take an umbrella **in case** it rains* means take it now, whether it rains or not. Russian **на случай, если** and Armenian **եթե հանկարծ** carry the same idea.`,
      `**Unless-ն արդեն պարունակում է not։** **Unless** նշանակում է **if … not**, ուստի դրանից հետո բայը դրական է՝ *Unless you **hurry**…*, երբեք՝ *Unless you don't hurry*։ Հայերենն ասում է «**եթե** չշտապես», ռուսերենը՝ «**если не** поторопишься»․ երկուսին էլ առանձին ժխտում է պետք, ահա թե ինչու կրկնակի ժխտման սխալն այդքան տարածված է։

**If ասելու այլ եղանակներ։** **As long as** և **provided that** նշանակում են «միայն եթե»՝ *You can go out **as long as** you're back by ten.*։ **In case**-ը այլ է՝ այն պատրաստ լինելու մասին է, ոչ թե պայման՝ *Take an umbrella **in case** it rains* նշանակում է՝ վերցրու հիմա՝ անկախ նրանից՝ անձրև կգա, թե ոչ։ Ռուսերեն **на случай, если** և հայերեն **եթե հանկարծ** արտահայտությունները կրում են նույն գաղափարը։`,
      `**В unless уже есть not.** **Unless** значит **if … not**, поэтому глагол после него утвердительный: *Unless you **hurry**…*, а не *Unless you don't hurry*. Армянский говорит «**եթե** չշտապես», русский — «**если не** поторопишься»: обоим нужно отдельное отрицание, поэтому ошибка с двойным отрицанием так распространена.

**Другие способы сказать if.** **As long as** и **provided that** значат «только если»: *You can go out **as long as** you're back by ten.* **In case** — другое: это о подготовке, а не об условии. *Take an umbrella **in case** it rains* — возьми сейчас, будет дождь или нет. Русское **на случай, если** и армянское **եթե հանկարծ** несут ту же идею.`,
    ),
    ask(1, {
      en: ["Complete: «You won't pass ___ you work harder.»", ["unless", "if", "in case"], "Unless = if … not: you won't pass if you don't work harder."],
      hy: ["Լրացրու՝ «You won't pass ___ you work harder.»", ["unless", "if", "in case"], "Unless = if … not՝ չես անցնի, եթե ավելի շատ չաշխատես։"],
      ru: ["Дополни: «You won't pass ___ you work harder.»", ["unless", "if", "in case"], "Unless = if … not: не сдашь, если не будешь работать больше."],
    }),
  ],
  "conditionals-review": [
    "forms mode=compare cols=condtypes zero:If_you_heat_ice,_it_melts first:If_it_rains,_we'll_stay_in second:If_I_were_rich,_I'd_travel third:If_I_had_known,_I'd_have_come mixed:If_I_had_slept,_I_wouldn't_be_tired_now",
    closer(
      `**English has five, Russian has two.** Russian divides conditions into real («Если пойдёт дождь, останемся дома») and unreal, with **бы** («Если бы я был богат…»). Armenian has more forms and can mark the past separately. English uses tense to show how real and how far in time the situation is. Read the table from top to bottom: each type is a step further from reality.

**One question chooses the type.** Ask yourself two things: is it **real** or **imagined**? And is it about **now/the future** or about the **past**? Always true → zero. Real future → first. Imagined now → second. Imagined past → third. Past cause with present result → mixed. Most exam mistakes come from putting **will** or **would** after **if**.`,
      `**Անգլերենն ունի հինգ, ռուսերենը՝ երկու։** Ռուսերենը պայմանները բաժանում է իրականի («Если пойдёт дождь, останемся дома») և անիրականի՝ **бы**-ով («Если бы я был богат…»)։ Հայերենն ունի ավելի շատ ձևեր և կարող է անցյալն առանձին նշել։ Անգլերենը ժամանակով է ցույց տալիս, թե որքան իրական է իրավիճակը և որքան հեռու է ժամանակում։ Կարդա աղյուսակը վերևից ներքև՝ ամեն տեսակ մեկ քայլ ավելի հեռու է իրականությունից։

**Մեկ հարցն է ընտրում տեսակը։** Հարցրու քեզ երկու բան՝ դա **իրակա՞ն** է, թե՞ **երևակայական**։ Եվ դա **հիմայի/ապագայի** մասին է, թե՞ **անցյալի**։ Միշտ ճիշտ է → zero։ Իրական ապագա → first։ Երևակայական հիմա → second։ Երևակայական անցյալ → third։ Անցյալ պատճառ՝ ներկա արդյունքով → mixed։ Քննական սխալների մեծ մասը գալիս է **if**-ից հետո **will** կամ **would** դնելուց։`,
      `**В английском пять, в русском — два.** Русский делит условия на реальные («Если пойдёт дождь, останемся дома») и нереальные — с **бы** («Если бы я был богат…»). В армянском форм больше, и прошлое можно отметить отдельно. Английский показывает временем, насколько ситуация реальна и насколько далека во времени. Прочитай таблицу сверху вниз: каждый тип — шаг дальше от реальности.

**Тип выбирает один вопрос.** Спроси себя о двух вещах: это **реально** или **воображаемо**? И это о **настоящем/будущем** или о **прошлом**? Всегда верно → zero. Реальное будущее → first. Воображаемое сейчас → second. Воображаемое прошлое → third. Причина в прошлом, результат сейчас → mixed. Большинство экзаменационных ошибок — от **will** или **would** после **if**.`,
    ),
    ask(2, {
      en: ["«If I ___ a superpower, I'd choose flying.» (imagined)", ["have", "had", "will have"], "Imagined present: second conditional, past form."],
      hy: ["«If I ___ a superpower, I'd choose flying.» (երևակայական)", ["have", "had", "will have"], "Երևակայական ներկա՝ second conditional, անցյալ ձև։"],
      ru: ["«If I ___ a superpower, I'd choose flying.» (воображаемое)", ["have", "had", "will have"], "Воображаемое настоящее: второе условное, форма прошедшего."],
    }),
  ],
  "education-systems": [
    "forms mode=compare cols=eduexam Armenia:grade_9_leaving_exams:unified_exams Russia:ОГЭ:ЕГЭ the_UK:GCSEs:A-levels",
    closer(
      `**Some of the oldest universities.** The University of **Bologna** in Italy, founded in 1088, is usually called the oldest university in the Western world; teaching at **Oxford** began by 1096. Medieval Armenia had its own centres of higher learning: the **University of Gladzor** in the late 13th century and the **University of Tatev** from the 1390s, where theology, philosophy, music and painting were taught. Moscow University was founded in 1755.

**Pupil or student? Pass or take?** In British English a child at school is a **pupil** and a person at university is a **student**; Americans say **student** for both. And remember: you **take** (or **sit**) an exam when you write it, but you **pass** it only if you succeed. *I took the exam yesterday; I hope I passed.* Russian «**сдавать**» and «**сдать**» show the same difference with aspect.`,
      `**Ամենահին համալսարաններից մի քանիսը։** Իտալիայի **Բոլոնիայի** համալսարանը, որը հիմնադրվել է 1088 թվականին, սովորաբար համարվում է արևմտյան աշխարհի ամենահին համալսարանը, իսկ **Օքսֆորդում** դասավանդումը սկսվել էր 1096 թվականին։ Միջնադարյան Հայաստանն ուներ բարձրագույն կրթության իր կենտրոնները՝ **Գլաձորի համալսարանը** 13-րդ դարի վերջին և **Տաթևի համալսարանը** 1390-ական թվականներից, որտեղ դասավանդում էին աստվածաբանություն, փիլիսոփայություն, երաժշտություն և նկարչություն։ Մոսկվայի համալսարանը հիմնադրվել է 1755 թվականին։

**Pupil, թե՞ student։ Pass, թե՞ take։** Բրիտանական անգլերենում դպրոցական երեխան **pupil** է, իսկ համալսարանում սովորողը՝ **student**․ ամերիկացիներն երկուսին էլ ասում են **student**։ Եվ հիշիր՝ քննությունը **take** (կամ **sit**) ես անում, երբ գրում ես այն, իսկ **pass**՝ միայն եթե հաջողվում ես՝ *I took the exam yesterday; I hope I passed.*։ Ռուսերեն «**сдавать**» և «**сдать**» բայերը նույն տարբերությունն են ցույց տալիս կերպով։`,
      `**Одни из древнейших университетов.** Болонский университет в Италии, основанный в 1088 году, обычно называют старейшим университетом западного мира; преподавание в **Оксфорде** началось к 1096 году. В средневековой Армении были свои центры высшего образования: **Гладзорский университет** в конце XIII века и **Татевский университет** с 1390-х годов, где преподавали богословие, философию, музыку и живопись. Московский университет основан в 1755 году.

**Pupil или student? Pass или take?** В британском английском ребёнок в школе — **pupil**, а тот, кто учится в университете, — **student**; американцы говорят **student** об обоих. И помни: экзамен **take** (или **sit**), когда его пишешь, а **pass** — только если сдал успешно. *I took the exam yesterday; I hope I passed.* Русские «**сдавать**» и «**сдать**» показывают ту же разницу видом.`,
    ),
    ask(3, {
      en: ["«I ___ the exam last week and got a good mark.»", ["took part", "sat for", "passed"], "Succeeded: passed."],
      hy: ["«I ___ the exam last week and got a good mark.»", ["took part", "sat for", "passed"], "Հաջողվել է՝ passed։"],
      ru: ["«I ___ the exam last week and got a good mark.»", ["took part", "sat for", "passed"], "Сдал успешно: passed."],
    }),
  ],
  "jobs-and-qualities-9": [
    "forms mode=compare cols=quality patient:teacher brave:firefighter creative:designer accurate:accountant calm:surgeon",
    closer(
      `**Salary and salt.** The word **salary** comes from the Latin **salarium**, which is connected with **sal**, "salt". A popular story says Roman soldiers were paid in salt, but historians think that is probably a legend; the link may be an allowance for buying salt. Russian **зарплата** is simply a short form of **заработная плата**, "earned pay", and Armenian **աշխատավարձ** means "work pay".

**Describing qualities.** Job adverts and interviews use adjectives of character: *reliable*, *hard-working*, *patient*, *creative*, *accurate*. Use them with evidence: *I'm **patient**: I've been helping my little cousin with maths every week.* The table pairs each quality with a job; try adding a second job for each quality.`,
      `**Աշխատավարձ և աղ։** **Salary** բառը ծագում է լատիներեն **salarium**-ից, որը կապված է **sal**՝ «աղ» բառի հետ։ Տարածված պատմությունն ասում է, որ հռոմեացի զինվորներին վճարում էին աղով, բայց պատմաբանները կարծում են, որ դա հավանաբար լեգենդ է․ կապը կարող է լինել աղ գնելու համար տրվող գումարը։ Ռուսերեն **зарплата**-ն պարզապես **заработная плата**-ի կրճատումն է, իսկ հայերեն **աշխատավարձ**-ը նշանակում է «աշխատանքի վարձ»։

**Հատկանիշների նկարագրություն։** Աշխատանքի հայտարարություններն ու հարցազրույցները գործածում են բնավորության ածականներ՝ *reliable*, *hard-working*, *patient*, *creative*, *accurate*։ Գործածիր դրանք ապացույցով՝ *I'm **patient**: I've been helping my little cousin with maths every week.*։ Աղյուսակը յուրաքանչյուր հատկանիշը զուգակցում է մի մասնագիտության հետ․ փորձիր յուրաքանչյուրի համար ավելացնել երկրորդը։`,
      `**Зарплата и соль.** Слово **salary** происходит от латинского **salarium**, связанного с **sal** — «соль». Популярная история гласит, что римским солдатам платили солью, но историки считают это скорее легендой; связь, возможно, в деньгах на покупку соли. Русское **зарплата** — просто сокращение от **заработная плата**, а армянское **աշխատավարձ** значит «плата за работу».

**Описываем качества.** В объявлениях о работе и на собеседованиях используют прилагательные характера: *reliable*, *hard-working*, *patient*, *creative*, *accurate*. Подкрепляй их примером: *I'm **patient**: I've been helping my little cousin with maths every week.* Таблица соединяет каждое качество с профессией; попробуй добавить к каждому качеству вторую профессию.`,
    ),
    ask(2, {
      en: ["Which quality matters most for an accountant?", ["brave", "accurate", "funny"], "Accountants work with numbers: accurate."],
      hy: ["Ո՞ր հատկանիշն է ամենակարևորը հաշվապահի համար։", ["brave", "accurate", "funny"], "Հաշվապահներն աշխատում են թվերի հետ՝ accurate։"],
      ru: ["Какое качество важнее всего для бухгалтера?", ["brave", "accurate", "funny"], "Бухгалтер работает с цифрами: accurate."],
    }),
  ],
  "reported-speech-review": [
    "forms mode=compare cols=reported today:that_day tomorrow:the_next_day yesterday:the_day_before here:there now:then next_week:the_following_week",
    closer(
      `**Time and place words move too.** When you report what someone said on another day or in another place, words for time and place usually change with the tense: *"I'll come **tomorrow**"* → *She said she would come **the next day***. If you report it on the same day and in the same place, there is no need to change: *She said she'll come tomorrow* is fine at lunchtime.

**Said is boring.** Good writers replace **said** with a reporting verb that shows how it was said: **admit** (*He admitted breaking the window*), **deny** (*She denied taking it*), **promise** (*They promised to call*), **suggest** (*He suggested going by bus*), **warn** (*She warned us not to be late*). Each verb has its own pattern: **-ing**, **to** or **that**.`,
      `**Ժամանակի և տեղի բառերն էլ են տեղափոխվում։** Երբ փոխանցում ես, թե ինչ է ասել մեկը մեկ այլ օր կամ մեկ այլ տեղում, ժամանակի և տեղի բառերը սովորաբար փոխվում են ժամանակի հետ միասին՝ *"I'll come **tomorrow**"* → *She said she would come **the next day***։ Եթե փոխանցում ես նույն օրը և նույն տեղում, փոխել պետք չէ՝ *She said she'll come tomorrow*-ը ճիշտ է ճաշի ժամին։

**Said-ը ձանձրալի է։** Լավ գրողները **said**-ը փոխարինում են հաղորդող բայով, որը ցույց է տալիս, թե ինչպես է ասվել՝ **admit** (*He admitted breaking the window*), **deny** (*She denied taking it*), **promise** (*They promised to call*), **suggest** (*He suggested going by bus*), **warn** (*She warned us not to be late*)։ Ամեն բայ ունի իր կաղապարը՝ **-ing**, **to** կամ **that**։`,
      `**Слова времени и места тоже сдвигаются.** Когда передаёшь чужие слова в другой день или в другом месте, слова времени и места обычно меняются вместе со временем глагола: *"I'll come **tomorrow**"* → *She said she would come **the next day***. Если передаёшь в тот же день и там же, менять не нужно: *She said she'll come tomorrow* — нормально в обед.

**Said — скучно.** Хорошие авторы заменяют **said** глаголом, который показывает, как это было сказано: **admit** (*He admitted breaking the window*), **deny** (*She denied taking it*), **promise** (*They promised to call*), **suggest** (*He suggested going by bus*), **warn** (*She warned us not to be late*). У каждого глагола своя схема: **-ing**, **to** или **that**.`,
    ),
    ask(1, {
      en: ["«I didn't take your pen!» Report it with a precise verb.", ["He denied taking my pen.", "He admitted taking my pen.", "He promised taking my pen."], "Saying you didn't do it: deny + -ing."],
      hy: ["«I didn't take your pen!» Փոխանցիր ճշգրիտ բայով։", ["He denied taking my pen.", "He admitted taking my pen.", "He promised taking my pen."], "Ասել, որ չես արել՝ deny + -ing։"],
      ru: ["«I didn't take your pen!» Передай точным глаголом.", ["He denied taking my pen.", "He admitted taking my pen.", "He promised taking my pen."], "Отрицать, что сделал: deny + -ing."],
    }),
  ],
  "indirect-questions-9": [
    "sentence mode=order Could you tell me where the station is ?",
    closer(
      `**The polite wrapper.** An indirect question wraps a direct one in a polite opening: *Could you tell me…?*, *Do you know…?*, *I was wondering…*. Inside the wrapper the word order becomes a statement: *Where **is** the station?* → *Could you tell me where the station **is**?* The question mark belongs to the wrapper, so it stays if the opening is a question.

**Why bother?** Direct questions to strangers can sound abrupt in English, especially in Britain. *Excuse me, do you know what time the museum opens?* sounds much friendlier than *What time does the museum open?* Russian **Не подскажете, …?** and Armenian **Չե՞ք ասի, …** are the same kind of soft opening.`,
      `**Քաղաքավարի փաթեթավորում։** Անուղղակի հարցն ուղիղ հարցը փաթաթում է քաղաքավարի սկզբով՝ *Could you tell me…?*, *Do you know…?*, *I was wondering…*։ Այդ «փաթեթի» ներսում բառակարգը դառնում է պատմողական՝ *Where **is** the station?* → *Could you tell me where the station **is**?*։ Հարցական նշանը պատկանում է «փաթեթին», ուստի մնում է, եթե սկիզբը հարց է։

**Ինչի՞ համար։** Անծանոթներին ուղիղ հարցերն անգլերենում կարող են կտրուկ հնչել, հատկապես Բրիտանիայում։ *Excuse me, do you know what time the museum opens?*-ը շատ ավելի ընկերական է հնչում, քան *What time does the museum open?*-ը։ Ռուսերեն **Не подскажете, …?** և հայերեն **Չե՞ք ասի, …** նույն տեսակի մեղմ սկիզբ են։`,
      `**Вежливая обёртка.** Косвенный вопрос заворачивает прямой в вежливое начало: *Could you tell me…?*, *Do you know…?*, *I was wondering…*. Внутри обёртки порядок слов становится повествовательным: *Where **is** the station?* → *Could you tell me where the station **is**?* Вопросительный знак относится к обёртке, поэтому остаётся, если начало — вопрос.

**Зачем это?** Прямые вопросы незнакомым людям могут звучать в английском резко, особенно в Британии. *Excuse me, do you know what time the museum opens?* звучит гораздо дружелюбнее, чем *What time does the museum open?* Русское **Не подскажете, …?** и армянское **Չե՞ք ասի, …** — такое же мягкое начало.`,
    ),
    ask(2, {
      en: ["Choose the correct indirect question.", ["Do you know where is the bank?", "Do you know where the bank is?", "Do you know where does the bank is?"], "Statement order inside: the bank is."],
      hy: ["Ընտրիր ճիշտ անուղղակի հարցը։", ["Do you know where is the bank?", "Do you know where the bank is?", "Do you know where does the bank is?"], "Ներսում՝ պատմողական կարգ՝ the bank is։"],
      ru: ["Выбери правильный косвенный вопрос.", ["Do you know where is the bank?", "Do you know where the bank is?", "Do you know where does the bank is?"], "Внутри повествовательный порядок: the bank is."],
    }),
  ],
  causative: [
    "sentence mode=order keep=1 I had my hair cut yesterday .",
    closer(
      `**Who did it?** *I cut my hair* means you did it yourself, perhaps badly. *I **had** my hair **cut*** means someone else, a hairdresser, did it for you. The pattern is **have/get + object + past participle**: *We **had** the car **repaired***, *She **got** her phone **fixed***. **Get** is a little more informal.

**Armenian and Russian do it differently.** Armenian uses **տալ** (give) with the infinitive: «Մազերս **կտրել տվեցի**», literally "I gave my hair to be cut". Russian often uses a reflexive verb and lets context explain: «Я **подстригся**» (I got a haircut), or «Мне **починили** машину» (they repaired the car for me). English needs the special structure every time.`,
      `**Ո՞վ արեց։** *I cut my hair* նշանակում է՝ ինքդ ես արել, գուցե վատ։ *I **had** my hair **cut*** նշանակում է՝ ուրիշը՝ վարսահարդարը, արել է քեզ համար։ Կաղապարն է **have/get + խնդիր + անցյալ դերբայ**՝ *We **had** the car **repaired***, *She **got** her phone **fixed***։ **Get**-ը մի քիչ ավելի ոչ պաշտոնական է։

**Հայերենն ու ռուսերենը դա այլ կերպ են անում։** Հայերենը գործածում է **տալ** բայն անորոշ դերբայի հետ՝ «Մազերս **կտրել տվեցի**»։ Ռուսերենը հաճախ գործածում է անդրադարձ բայ և թողնում, որ համատեքստը բացատրի՝ «Я **подстригся**» կամ «Мне **починили** машину»։ Անգլերենին ամեն անգամ պետք է հատուկ կառույց։`,
      `**Кто это сделал?** *I cut my hair* — ты постригся сам, возможно, неудачно. *I **had** my hair **cut*** — кто-то другой, парикмахер, сделал это для тебя. Схема: **have/get + дополнение + причастие прошедшего времени**: *We **had** the car **repaired***, *She **got** her phone **fixed***. **Get** чуть разговорнее.

**Армянский и русский делают это иначе.** Армянский использует **տալ** («давать») с инфинитивом: «Մազերս **կտրել տվեցի**» — буквально «дал постричь волосы». Русский часто берёт возвратный глагол и оставляет остальное контексту: «Я **подстригся**», или «Мне **починили** машину». Английскому каждый раз нужна особая конструкция.`,
    ),
    ask(3, {
      en: ["A mechanic repaired your bike. You say:", ["I repaired my bike.", "I had repaired my bike.", "I had my bike repaired."], "Someone did it for you: have + object + participle."],
      hy: ["Վարպետը վերանորոգել է հեծանիվդ։ Դու ասում ես՝", ["I repaired my bike.", "I had repaired my bike.", "I had my bike repaired."], "Ուրիշն է արել քեզ համար՝ have + խնդիր + դերբայ։"],
      ru: ["Мастер починил твой велосипед. Ты говоришь:", ["I repaired my bike.", "I had repaired my bike.", "I had my bike repaired."], "Сделали для тебя: have + дополнение + причастие."],
    }),
  ],
  "letter-application": [
    "sentence mode=order keep=1 I am writing to apply for the position of volunteer .",
    closer(
      `**Covering or cover letter?** In Britain a letter sent with a CV is a **covering letter**; in the USA it is a **cover letter**. Either way, it should be short: three or four paragraphs on one page. Paragraph one says what you are applying for and where you saw it; paragraph two shows why you are suitable, with examples; paragraph three says when you are available and thanks the reader.

**Formal means full.** In an application, avoid contractions (*I am*, not *I'm*), slang and exclamation marks. Use polite formulas: *I would be grateful if…*, *Please find attached my CV*, *I look forward to hearing from you*. Armenian **Կից ներկայացնում եմ…** and Russian **Прилагаю…** do the job of *Please find attached*.`,
      `**Covering, թե՞ cover letter։** Բրիտանիայում CV-ի հետ ուղարկվող նամակը **covering letter** է, ԱՄՆ-ում՝ **cover letter**։ Ամեն դեպքում այն պետք է կարճ լինի՝ երեք-չորս պարբերություն մեկ էջում։ Առաջին պարբերությունն ասում է, թե ինչի համար ես դիմում և որտեղ ես տեսել հայտարարությունը, երկրորդը ցույց է տալիս, թե ինչու ես համապատասխան՝ օրինակներով, երրորդն ասում է, թե երբ ես ազատ, և շնորհակալություն հայտնում։

**Պաշտոնական նշանակում է լրիվ։** Դիմումում խուսափիր կրճատումներից (*I am*, ոչ թե *I'm*), ժարգոնից և բացականչական նշաններից։ Գործածիր քաղաքավարի բանաձևեր՝ *I would be grateful if…*, *Please find attached my CV*, *I look forward to hearing from you*։ Հայերեն **Կից ներկայացնում եմ…** և ռուսերեն **Прилагаю…** կատարում են *Please find attached*-ի դերը։`,
      `**Covering или cover letter?** В Британии письмо, которое отправляют вместе с CV, — **covering letter**, в США — **cover letter**. В любом случае оно должно быть коротким: три-четыре абзаца на одной странице. Первый абзац — на что ты претендуешь и где увидел объявление; второй — почему ты подходишь, с примерами; третий — когда ты свободен, и благодарность.

**Официально — значит полностью.** В заявлении избегай сокращений (*I am*, а не *I'm*), сленга и восклицательных знаков. Используй вежливые формулы: *I would be grateful if…*, *Please find attached my CV*, *I look forward to hearing from you*. Армянское **Կից ներկայացնում եմ…** и русское **Прилагаю…** выполняют роль *Please find attached*.`,
    ),
    ask(1, {
      en: ["Which sentence fits a formal application?", ["I would be grateful if you could consider my application.", "Hope you like me!", "I'm dead keen on this job."], "Full forms and a polite formula."],
      hy: ["Ո՞ր նախադասությունն է համապատասխանում պաշտոնական դիմումին։", ["I would be grateful if you could consider my application.", "Hope you like me!", "I'm dead keen on this job."], "Լրիվ ձևեր և քաղաքավարի բանաձև։"],
      ru: ["Какое предложение подходит для официального заявления?", ["I would be grateful if you could consider my application.", "Hope you like me!", "I'm dead keen on this job."], "Полные формы и вежливая формула."],
    }),
  ],
  "global-issues": [
    "forms mode=compare cols=causeeffect burning_coal_and_oil:global_warming heavy_rain:floods no_rain_for_months:drought war:refugees cutting_down_forests:fewer_animals_and_plants",
    closer(
      `**Seventeen goals for 2030.** In 2015 all member states of the United Nations agreed on 17 **Sustainable Development Goals**, from "no poverty" and "zero hunger" to "climate action" and "quality education", with a target date of 2030. They give English a ready vocabulary for global issues: *to tackle poverty*, *to reduce emissions*, *to provide access to clean water*.

**Refugee or migrant?** A **refugee** is forced to leave home because of war or danger; a **migrant** chooses to move, often for work. Newspapers sometimes mix them up, but an examiner will not. For causes and effects, use **lead to**, **result in** and **be caused by** with a noun: *Burning coal **leads to** global warming.* Read the table from left to right and make a sentence for each row.`,
      `**Տասնյոթ նպատակ՝ 2030-ի համար։** 2015 թվականին ՄԱԿ-ի բոլոր անդամ պետությունները համաձայնեցին 17 **Կայուն զարգացման նպատակների** շուրջ՝ «աղքատության վերացումից» և «զրո սովից» մինչև «կլիմայական գործողություններ» և «որակյալ կրթություն»՝ 2030 թվականի թիրախով։ Դրանք անգլերենին տալիս են պատրաստի բառապաշար համաշխարհային խնդիրների համար՝ *to tackle poverty*, *to reduce emissions*, *to provide access to clean water*։

**Refugee, թե՞ migrant։** **Refugee**-ն (փախստական) ստիպված է լքել տունը պատերազմի կամ վտանգի պատճառով, **migrant**-ը (միգրանտ) ինքն է որոշում տեղափոխվել, հաճախ՝ աշխատանքի համար։ Թերթերն երբեմն շփոթում են դրանք, բայց քննողը՝ ոչ։ Պատճառների և հետևանքների համար գործածիր **lead to**, **result in** և **be caused by**՝ գոյականով՝ *Burning coal **leads to** global warming.*։ Կարդա աղյուսակը ձախից աջ և յուրաքանչյուր տողի համար նախադասություն կազմիր։`,
      `**Семнадцать целей к 2030 году.** В 2015 году все государства — члены ООН договорились о 17 **Целях устойчивого развития** — от «ликвидации нищеты» и «нулевого голода» до «борьбы с изменением климата» и «качественного образования» — со сроком до 2030 года. Они дают английскому готовую лексику глобальных проблем: *to tackle poverty*, *to reduce emissions*, *to provide access to clean water*.

**Refugee или migrant?** **Refugee** (беженец) вынужден покинуть дом из-за войны или опасности; **migrant** (мигрант) переезжает по своему выбору, часто ради работы. Газеты иногда их путают, а экзаменатор — нет. Для причин и следствий используй **lead to**, **result in** и **be caused by** с существительным: *Burning coal **leads to** global warming.* Прочитай таблицу слева направо и составь предложение для каждой строки.`,
    ),
    ask(2, {
      en: ["Complete: «The flood ___ by three days of heavy rain.»", ["led to", "was caused", "resulted"], "Effect as the subject: was caused by."],
      hy: ["Լրացրու՝ «The flood ___ by three days of heavy rain.»", ["led to", "was caused", "resulted"], "Ենթական հետևանքն է՝ was caused by։"],
      ru: ["Дополни: «The flood ___ by three days of heavy rain.»", ["led to", "was caused", "resulted"], "Подлежащее — следствие: was caused by."],
    }),
  ],
  "linking-words-9": [
    "forms mode=compare cols=linkers moreover:however:therefore in_addition:although:as_a_result furthermore:despite:consequently",
    closer(
      `**However needs punctuation.** **However** joins two sentences, not two halves of one: *The plan is cheap. **However**, it is slow.* or *The plan is cheap; **however**, it is slow.* Putting just a comma before it (*cheap, however it is slow*) is a classic exam mistake. **Although** works inside one sentence: ***Although** the plan is cheap, it is slow.*

**Despite, not despite of.** **Despite** and **in spite of** mean the same, but only one has **of**: *despite the rain*, *in spite of the rain*. Never *despite of*. Both are followed by a noun or **-ing**, not a full clause: *Despite **feeling** tired, she finished.* Read the table by columns: each column does one job, adding, contrasting or showing a result.`,
      `**However-ին կետադրություն է պետք։** **However**-ը միացնում է երկու նախադասություն, ոչ թե մեկի երկու կեսը՝ *The plan is cheap. **However**, it is slow.* կամ *The plan is cheap; **however**, it is slow.*։ Դրանից առաջ միայն ստորակետ դնելը (*cheap, however it is slow*) դասական քննական սխալ է։ **Although**-ն աշխատում է մեկ նախադասության ներսում՝ ***Although** the plan is cheap, it is slow.*

**Despite, ոչ թե despite of։** **Despite** և **in spite of** նույնն են նշանակում, բայց միայն մեկն ունի **of**՝ *despite the rain*, *in spite of the rain*։ Երբեք՝ *despite of*։ Երկուսից հետո էլ գալիս է գոյական կամ **-ing**, ոչ թե ամբողջական նախադասություն՝ *Despite **feeling** tired, she finished.*։ Կարդա աղյուսակը սյունակներով՝ յուրաքանչյուրը մի գործ է անում՝ ավելացնում, հակադրում կամ արդյունք է ցույց տալիս։`,
      `**However требует пунктуации.** **However** соединяет два предложения, а не две половины одного: *The plan is cheap. **However**, it is slow.* или *The plan is cheap; **however**, it is slow.* Поставить перед ним только запятую (*cheap, however it is slow*) — классическая экзаменационная ошибка. **Although** работает внутри одного предложения: ***Although** the plan is cheap, it is slow.*

**Despite, а не despite of.** **Despite** и **in spite of** значат одно и то же, но **of** есть только у второго: *despite the rain*, *in spite of the rain*. Никогда не *despite of*. После обоих идёт существительное или **-ing**, а не целое предложение: *Despite **feeling** tired, she finished.* Прочитай таблицу по столбцам: каждый делает одну работу — добавляет, противопоставляет или показывает результат.`,
    ),
    ask(3, {
      en: ["Choose the correct sentence.", ["Despite of the rain, we went out.", "Despite it rained, we went out.", "Despite the rain, we went out."], "Despite + noun, without of."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["Despite of the rain, we went out.", "Despite it rained, we went out.", "Despite the rain, we went out."], "Despite + գոյական, առանց of-ի։"],
      ru: ["Выбери правильное предложение.", ["Despite of the rain, we went out.", "Despite it rained, we went out.", "Despite the rain, we went out."], "Despite + существительное, без of."],
    }),
  ],
  "opinion-essay": [
    "sentence mode=order In my opinion , school uniforms should be optional .",
    closer(
      `**An essay is an attempt.** The word **essay** comes from the French **essai**, "a try, an attempt". In 1580 the French writer **Michel de Montaigne** published a book of short texts called *Essais*, in which he tried out his thoughts on everything from friendship to cannibals. An essay is still an attempt to think something through on paper, not a list of facts.

**The shape of an opinion essay.** Introduction with your opinion (*In my opinion…*, *I strongly believe that…*); two or three body paragraphs, each with one reason and an example; one paragraph for the other side (*Some people argue that… However…*); and a conclusion that repeats your view in new words (*To sum up…*). Russian **сочинение-рассуждение** and Armenian **շարադրություն-դատողություն** follow almost the same plan.`,
      `**Էսսեն փորձ է։** **Essay** բառը ծագում է ֆրանսերեն **essai**՝ «փորձ» բառից։ 1580 թվականին ֆրանսիացի գրող **Միշել դը Մոնտենը** հրատարակեց *Essais* կոչվող կարճ տեքստերի գիրք, որում փորձում էր իր մտքերն ամեն ինչի մասին՝ ընկերությունից մինչև մարդակերներ։ Էսսեն մինչ օրս թղթի վրա ինչ-որ բան մտածելու փորձ է, ոչ թե փաստերի ցուցակ։

**Կարծիք-էսսեի կառուցվածքը։** Ներածություն՝ քո կարծիքով (*In my opinion…*, *I strongly believe that…*), երկու-երեք հիմնական պարբերություն՝ յուրաքանչյուրում մեկ պատճառ և օրինակ, մեկ պարբերություն՝ հակառակ կողմի համար (*Some people argue that… However…*), և եզրակացություն, որը նոր բառերով կրկնում է քո տեսակետը (*To sum up…*)։ Ռուսերեն **сочинение-рассуждение**-ը և հայերեն **շարադրություն-դատողությունը** հետևում են գրեթե նույն ծրագրին։`,
      `**Эссе — это попытка.** Слово **essay** происходит от французского **essai** — «проба, попытка». В 1580 году французский писатель **Мишель де Монтень** издал книгу коротких текстов под названием *Essais*, где пробовал свои мысли обо всём — от дружбы до каннибалов. Эссе до сих пор — попытка продумать что-то на бумаге, а не список фактов.

**Строение эссе-мнения.** Вступление с твоим мнением (*In my opinion…*, *I strongly believe that…*); два-три основных абзаца, в каждом одна причина и пример; один абзац для другой стороны (*Some people argue that… However…*); и заключение, повторяющее твою позицию новыми словами (*To sum up…*). Русское **сочинение-рассуждение** и армянское **շարադրություն-դատողություն** строятся почти так же.`,
    ),
    ask(2, {
      en: ["Where do you mention the opposite view in an opinion essay?", ["Nowhere: only your view counts.", "In a separate paragraph before the conclusion.", "In the title."], "Show the other side, then answer it."],
      hy: ["Կարծիք-էսսեում որտե՞ղ ես նշում հակառակ տեսակետը։", ["Nowhere: only your view counts.", "In a separate paragraph before the conclusion.", "In the title."], "Ցույց տուր մյուս կողմը, հետո պատասխանիր դրան։"],
      ru: ["Где в эссе-мнении упоминают противоположную точку зрения?", ["Nowhere: only your view counts.", "In a separate paragraph before the conclusion.", "In the title."], "Покажи другую сторону, а потом ответь на неё."],
    }),
  ],
  "personal-letter-exam": [
    "sentence mode=order Thanks for your letter , it was great to hear from you .",
    closer(
      `**Letters for a penny.** In 1840 Britain introduced the **Penny Black**, the world's first adhesive postage stamp, and a letter could be sent anywhere in the country for one penny. The reformer Rowland Hill's idea made letter-writing a habit for ordinary people. The basic shape of a friendly letter has hardly changed since.

**What examiners look for.** In a personal letter exam task, you must answer **every question** your pen friend asked, ask a few of your own, and stay within the word limit. Use an informal opening (*Dear Tom,* or *Hi Tom,*), a friendly first line (*Thanks for your letter…*), contractions (*I'm*, *it's*), and a warm ending (*Write back soon*, *Best wishes*).`,
      `**Նամակներ՝ մեկ պենսով։** 1840 թվականին Բրիտանիան ներմուծեց **Penny Black**-ը՝ աշխարհի առաջին սոսնձվող նամականիշը, և նամակն երկրի ցանկացած վայր կարելի էր ուղարկել մեկ պենսով։ Բարեփոխիչ Ռոուլենդ Հիլի գաղափարը նամակագրությունը սովորություն դարձրեց հասարակ մարդկանց համար։ Ընկերական նամակի հիմնական ձևն այդ ժամանակից ի վեր գրեթե չի փոխվել։

**Ինչ են փնտրում քննողները։** Անձնական նամակի քննական առաջադրանքում պետք է պատասխանես գրչընկերոջդ տված **բոլոր հարցերին**, տաս քո մի քանի հարցը և մնաս բառերի սահմանի մեջ։ Գործածիր ոչ պաշտոնական սկիզբ (*Dear Tom,* կամ *Hi Tom,*), ընկերական առաջին տող (*Thanks for your letter…*), կրճատ ձևեր (*I'm*, *it's*) և ջերմ ավարտ (*Write back soon*, *Best wishes*)։`,
      `**Письма за пенни.** В 1840 году в Британии ввели **Penny Black** — первую в мире клеящуюся почтовую марку, и письмо можно было отправить в любую точку страны за один пенни. Идея реформатора Роуленда Хилла сделала переписку привычкой простых людей. Основная форма дружеского письма с тех пор почти не изменилась.

**Что ищут экзаменаторы.** В экзаменационном личном письме нужно ответить на **все вопросы** друга по переписке, задать несколько своих и уложиться в лимит слов. Используй неформальное начало (*Dear Tom,* или *Hi Tom,*), дружескую первую фразу (*Thanks for your letter…*), сокращения (*I'm*, *it's*) и тёплый конец (*Write back soon*, *Best wishes*).`,
    ),
    ask(3, {
      en: ["What must a personal letter in the exam always do?", ["Use formal language.", "Avoid questions.", "Answer all your friend's questions."], "Examiners check that every question is answered."],
      hy: ["Ի՞նչ պետք է միշտ անի քննական անձնական նամակը։", ["Use formal language.", "Avoid questions.", "Answer all your friend's questions."], "Քննողները ստուգում են, որ ամեն հարցի պատասխան տրված լինի։"],
      ru: ["Что обязательно должно быть в экзаменационном личном письме?", ["Use formal language.", "Avoid questions.", "Answer all your friend's questions."], "Экзаменаторы проверяют, что ответ дан на каждый вопрос."],
    }),
  ],
  "speaking-monologue": [
    "sentence mode=order First of all , I would like to talk about my favourite place .",
    closer(
      `**Even "improvised" speeches are prepared.** A line often attributed to Mark Twain says: "It usually takes me more than three weeks to prepare a good impromptu speech." For an exam monologue, that means: learn a clear structure and useful phrases in advance, then fill them with content on the day.

**Signposts for the listener.** Phrases like *First of all…*, *Another thing I'd like to mention is…*, *For example…*, *That's why…* and *To sum up…* tell the examiner where you are in your talk. When you need time to think, use natural fillers instead of silence or *em*: *Well…*, *Let me think…*, *That's an interesting question…*. Armenian **Նախ…**, **Բացի այդ…**, **Ամփոփելով…** and Russian **Во-первых…**, **Кроме того…**, **Подводя итог…** work the same way.`,
      `**Նույնիսկ «հանպատրաստից» ելույթները պատրաստված են։** Մի տող, որ հաճախ վերագրում են Մարկ Տվենին, ասում է՝ «Լավ հանպատրաստից ելույթ պատրաստելու համար ինձ սովորաբար երեք շաբաթից ավելի է պետք»։ Քննական մենախոսության համար սա նշանակում է՝ նախապես սովորիր հստակ կառուցվածք և օգտակար արտահայտություններ, իսկ քննության օրը լցրու դրանք բովանդակությամբ։

**Ուղենիշներ ունկնդրի համար։** *First of all…*, *Another thing I'd like to mention is…*, *For example…*, *That's why…* և *To sum up…* արտահայտությունները քննողին ասում են, թե ելույթիդ որ մասում ես։ Երբ մտածելու ժամանակ է պետք, լռության կամ *էմ*-ի փոխարեն գործածիր բնական լրացուցիչ բառեր՝ *Well…*, *Let me think…*, *That's an interesting question…*։ Հայերեն **Նախ…**, **Բացի այդ…**, **Ամփոփելով…** և ռուսերեն **Во-первых…**, **Кроме того…**, **Подводя итог…** աշխատում են նույն կերպ։`,
      `**Даже «импровизированные» речи готовят.** Фраза, которую часто приписывают Марку Твену, гласит: «Чтобы подготовить хорошую импровизированную речь, мне обычно нужно больше трёх недель». Для экзаменационного монолога это значит: заранее выучи чёткую структуру и полезные фразы, а в день экзамена наполни их содержанием.

**Указатели для слушателя.** Фразы *First of all…*, *Another thing I'd like to mention is…*, *For example…*, *That's why…* и *To sum up…* подсказывают экзаменатору, в какой части рассказа ты находишься. Когда нужно время подумать, вместо молчания или *э-э* используй естественные заполнители: *Well…*, *Let me think…*, *That's an interesting question…*. Армянские **Նախ…**, **Բացի այդ…**, **Ամփոփելով…** и русские **Во-первых…**, **Кроме того…**, **Подводя итог…** работают так же.`,
    ),
    ask(1, {
      en: ["Which phrase helps you gain time naturally?", ["Let me think…", "Emmmm…", "I don't know."], "A natural filler sounds better than silence."],
      hy: ["Ո՞ր արտահայտությունն է օգնում բնական ձևով ժամանակ շահել։", ["Let me think…", "Emmmm…", "I don't know."], "Բնական լրացուցիչ բառը լռությունից լավ է հնչում։"],
      ru: ["Какая фраза помогает естественно выиграть время?", ["Let me think…", "Emmmm…", "I don't know."], "Естественный заполнитель звучит лучше молчания."],
    }),
  ],
  "grade-9-exam-review": [
    "tense name=present-perfect aspects=simple,continuous,perfect,perfect-continuous times=past,present,future",
    closer(
      `**The grammar you need for the exam.** By the end of grade 9 you have met every tense on the line above, the passive in all tenses, all conditionals, wishes, reported speech and the causative. Exams rarely test them alone; they mix them in one text. Switch through the line and, for each form, say one sentence about your school year.

**A last checklist.** Check the five things examiners notice most: the right tense after time words (*since*, *ago*, *by the time*); no **will/would** after **if**; reported speech with tenses moved back and statement word order; **despite** without **of** and **however** with proper punctuation; and formal or informal style chosen for the task. Good luck!`,
      `**Քերականությունը, որ պետք է քննության համար։** 9-րդ դասարանի վերջում դու ծանոթացել ես վերևի գծի բոլոր ժամանակներին, կրավորականին բոլոր ժամանակներում, բոլոր պայմանականներին, ցանկություններին, անուղղակի խոսքին և պատճառական կառույցին։ Քննությունները հազվադեպ են դրանք առանձին ստուգում․ դրանք խառնում են մեկ տեքստում։ Անցիր գծով և յուրաքանչյուր ձևի համար մեկ նախադասություն ասա քո ուսումնական տարվա մասին։

**Վերջին ստուգաթերթը։** Ստուգիր հինգ բան, որ քննողներն ամենից շատ են նկատում՝ ճիշտ ժամանակ ժամանակի բառերից հետո (*since*, *ago*, *by the time*), **if**-ից հետո **will/would** չկա, անուղղակի խոսքում՝ հետ տեղափոխված ժամանակներ և պատմողական բառակարգ, **despite**՝ առանց **of**-ի և **however**՝ ճիշտ կետադրությամբ, և պաշտոնական կամ ոչ պաշտոնական ոճ՝ ըստ առաջադրանքի։ Հաջողություն։`,
      `**Грамматика, которая нужна на экзамене.** К концу 9 класса ты познакомился со всеми временами на линии выше, пассивом во всех временах, всеми условными, желаниями, косвенной речью и каузативом. Экзамены редко проверяют их по отдельности — их смешивают в одном тексте. Пройди по линии и для каждой формы скажи одно предложение о своём учебном годе.

**Последний чек-лист.** Проверь пять вещей, которые экзаменаторы замечают чаще всего: правильное время после слов времени (*since*, *ago*, *by the time*); никаких **will/would** после **if**; в косвенной речи — сдвиг времён и повествовательный порядок слов; **despite** без **of** и **however** с правильной пунктуацией; официальный или неофициальный стиль под задание. Удачи!`,
    ),
    ask(1, {
      en: ["Which sentence is correct?", ["I have lived here since 2015.", "I live here since 2015.", "I lived here since 2015."], "Since + a starting point that is still true: present perfect."],
      hy: ["Ո՞ր նախադասությունն է ճիշտ։", ["I have lived here since 2015.", "I live here since 2015.", "I lived here since 2015."], "Since + սկզբնակետ, որ դեռ ճիշտ է՝ present perfect։"],
      ru: ["Какое предложение верно?", ["I have lived here since 2015.", "I live here since 2015.", "I lived here since 2015."], "Since + начальная точка, всё ещё верно: present perfect."],
    }),
  ],
};
