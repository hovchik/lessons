import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade8: VisualMap[number] = {
  "character-relationships": [
    "forms mode=compare cols=phrasal get_on_with:have_a_good_relationship_with fall_out_with:stop_being_friends_after_an_argument look_up_to:admire put_up_with:accept_something_annoying make_up:become_friends_again",
    closer(
      `**About 150 friends.** The British scientist Robin Dunbar suggested that the human brain can keep about **150** stable relationships: people you know well enough to greet and chat with. Inside that number there are circles: about five very close people, fifteen good friends, fifty friends. The idea is now called **Dunbar's number**.

**A friend is someone you love.** The English word **friend** comes from an old verb meaning "to love", and it is related to the word **free**. Armenian **ընկեր** once meant "someone you eat with", from roots meaning "with" and "eat", and Russian **друг** goes back to an old Slavic word for a companion or fellow traveller. Many relationship verbs in English are phrasal: learn them in pairs, *fall out* and *make up*.`,
      `**Մոտ 150 ընկեր։** Բրիտանացի գիտնական Ռոբին Դանբարն ենթադրեց, որ մարդու ուղեղը կարող է պահել մոտ **150** կայուն հարաբերություն՝ մարդիկ, որոնց այնքան լավ ես ճանաչում, որ բարևում և զրուցում ես։ Այդ թվի ներսում կան շրջաններ՝ մոտ հինգ շատ մտերիմ մարդ, տասնհինգ լավ ընկեր, հիսուն ընկեր։ Այս գաղափարն այժմ կոչվում է **Դանբարի թիվ**։

**Ընկերը նա է, ում սիրում ես։** Անգլերեն **friend** բառը ծագում է «սիրել» նշանակող հին բայից և ազգակից է **free** բառին։ Հայերեն **ընկեր** բառը կազմված է «ընդ» (հետ) և «կեր» (ուտել) արմատներից՝ «նա, ում հետ միասին ուտում ես», իսկ ռուսերեն **друг**-ը գալիս է ուղեկից, ընկերակից նշանակող հին սլավոնական բառից։ Անգլերենի հարաբերությունների բայերից շատերը դարձվածային են․ սովորիր դրանք զույգերով՝ *fall out* և *make up*։`,
      `**Около 150 друзей.** Британский учёный Робин Данбар предположил, что человеческий мозг способен поддерживать около **150** устойчивых отношений — людей, которых ты знаешь достаточно, чтобы поздороваться и поболтать. Внутри этого числа есть круги: около пяти очень близких, пятнадцать хороших друзей, пятьдесят друзей. Эту идею называют **числом Данбара**.

**Друг — тот, кого любишь.** Английское **friend** происходит от старого глагола «любить» и родственно слову **free**. Армянское **ընկեր** образовано от корней «вместе» и «есть» — «тот, с кем вместе ешь», а русское **друг** восходит к старому славянскому слову со значением «спутник, товарищ». Многие английские глаголы об отношениях — фразовые: учи их парами, *fall out* и *make up*.`,
    ),
    ask(2, {
      en: ["«They fell out last week, but they've made up now.» What happened?", ["They became friends and then argued.", "They argued and then became friends again.", "They fell down and got up."], "Fall out = argue; make up = become friends again."],
      hy: ["«They fell out last week, but they've made up now.» Ի՞նչ եղավ։", ["They became friends and then argued.", "They argued and then became friends again.", "They fell down and got up."], "Fall out՝ վիճել, make up՝ նորից հաշտվել։"],
      ru: ["«They fell out last week, but they've made up now.» Что случилось?", ["They became friends and then argued.", "They argued and then became friends again.", "They fell down and got up."], "Fall out — поссориться, make up — помириться."],
    }),
  ],
  "question-tags": [
    "sentence mode=order You are coming tomorrow , aren't you ?",
    closer(
      `**One word in Armenian and Russian, dozens in English.** Armenian adds «**չէ՞**» to almost any sentence, and Russian adds «**да?**», «**правда?**» or «**не так ли?**». English builds a new tag each time from the helper verb of the sentence: *You **are** coming, **aren't** you?*, *She **can** swim, **can't** she?*, *They **went** home, **didn't** they?* Positive sentence, negative tag, and the other way round.

**Your voice changes the meaning.** If your voice **falls** on the tag, you are only checking something you think is true: *It's cold, isn't it?* ↘. If it **rises**, it is a real question: *You've done your homework, haven't you?* ↗. In London street speech, young people often use **innit?** for every tag, but that is slang.`,
      `**Մեկ բառ՝ հայերենում և ռուսերենում, տասնյակներ՝ անգլերենում։** Հայերենը գրեթե ամեն նախադասության ավելացնում է «**չէ՞**», ռուսերենը՝ «**да?**», «**правда?**» կամ «**не так ли?**»։ Անգլերենն ամեն անգամ նոր պոչ է կազմում նախադասության օժանդակ բայից՝ *You **are** coming, **aren't** you?*, *She **can** swim, **can't** she?*, *They **went** home, **didn't** they?*։ Դրական նախադասություն՝ ժխտական պոչ, և հակառակը։

**Ձայնդ փոխում է իմաստը։** Եթե պոչի վրա ձայնդ **իջնում է**, դու պարզապես ստուգում ես մի բան, որ ճիշտ ես համարում՝ *It's cold, isn't it?* ↘։ Եթե **բարձրանում է**, դա իսկական հարց է՝ *You've done your homework, haven't you?* ↗։ Լոնդոնի փողոցային խոսքում երիտասարդները հաճախ ամեն պոչի փոխարեն ասում են **innit?**, բայց դա ժարգոն է։`,
      `**Одно слово в армянском и русском — десятки в английском.** Армянский добавляет «**չէ՞**» почти к любому предложению, русский — «**да?**», «**правда?**» или «**не так ли?**». Английский каждый раз строит новый хвостик из вспомогательного глагола предложения: *You **are** coming, **aren't** you?*, *She **can** swim, **can't** she?*, *They **went** home, **didn't** they?* Утвердительное предложение — отрицательный хвостик, и наоборот.

**Голос меняет смысл.** Если на хвостике голос **понижается**, ты просто проверяешь то, что считаешь правдой: *It's cold, isn't it?* ↘. Если **повышается** — это настоящий вопрос: *You've done your homework, haven't you?* ↗. В лондонской уличной речи молодёжь часто говорит **innit?** вместо любого хвостика, но это сленг.`,
    ),
    ask(3, {
      en: ["Complete: «She went to Gyumri, ___?»", ["wasn't she", "doesn't she", "didn't she"], "Past simple uses did: didn't she."],
      hy: ["Լրացրու՝ «She went to Gyumri, ___?»", ["wasn't she", "doesn't she", "didn't she"], "Past simple-ը գործածում է did՝ didn't she։"],
      ru: ["Дополни: «She went to Gyumri, ___?»", ["wasn't she", "doesn't she", "didn't she"], "Past simple использует did: didn't she."],
    }),
  ],
  "present-tenses-review": [
    "tense name=present-simple aspects=simple,continuous,perfect,perfect-continuous times=present",
    closer(
      `**Four presents for one Armenian or Russian form.** «Ես կարդում եմ» / «Я читаю» can be translated in four ways depending on context: *I read* (habit), *I am reading* (now), *I have read* (result), *I have been reading* (for some time). English forces you to choose. Switch through the four on the line above and notice how the signal words change: *usually*, *now*, *already*, *for two hours*.

**Mixing presents in one text.** A good paragraph often uses several: *I **live** in Vanadzor. I**'ve lived** here since I was born, but this year I**'m studying** in Yerevan, and I**'ve been travelling** home every weekend.* Each verb answers a different question: always, since when, now, how long.`,
      `**Չորս ներկա՝ մեկ հայերեն կամ ռուսերեն ձևի համար։** «Ես կարդում եմ» / «Я читаю»-ն կարող է թարգմանվել չորս ձևով՝ կախված համատեքստից՝ *I read* (սովորություն), *I am reading* (հիմա), *I have read* (արդյունք), *I have been reading* (որոշ ժամանակ)։ Անգլերենը ստիպում է ընտրել։ Վերևի գծում անցիր չորսով և նկատիր, թե ինչպես են փոխվում ազդանշանային բառերը՝ *usually*, *now*, *already*, *for two hours*։

**Մեկ տեքստում ներկաները խառնել։** Լավ պարբերությունը հաճախ գործածում է մի քանիսը՝ *I **live** in Vanadzor. I**'ve lived** here since I was born, but this year I**'m studying** in Yerevan, and I**'ve been travelling** home every weekend.*։ Ամեն բայ պատասխանում է տարբեր հարցի՝ միշտ, երբվանից, հիմա, որքան ժամանակ։`,
      `**Четыре настоящих на одну армянскую или русскую форму.** «Ես կարդում եմ» / «Я читаю» можно перевести четырьмя способами в зависимости от контекста: *I read* (привычка), *I am reading* (сейчас), *I have read* (результат), *I have been reading* (уже какое-то время). Английский заставляет выбирать. Пройди по четырём формам на линии выше и заметь, как меняются слова-сигналы: *usually*, *now*, *already*, *for two hours*.

**Смешиваем настоящие в одном тексте.** Хороший абзац часто использует несколько: *I **live** in Vanadzor. I**'ve lived** here since I was born, but this year I**'m studying** in Yerevan, and I**'ve been travelling** home every weekend.* Каждый глагол отвечает на свой вопрос: всегда, с каких пор, сейчас, как долго.`,
    ),
    ask(4, {
      en: ["«I'm tired. I ___ for three hours.»", ["study", "am studying", "have studied", "have been studying"], "Started earlier, still going on, with for: present perfect continuous."],
      hy: ["«I'm tired. I ___ for three hours.»", ["study", "am studying", "have studied", "have been studying"], "Սկսվել է առաջ, դեռ շարունակվում է, for-ով՝ present perfect continuous։"],
      ru: ["«I'm tired. I ___ for three hours.»", ["study", "am studying", "have studied", "have been studying"], "Началось раньше, всё ещё длится, с for: present perfect continuous."],
    }),
  ],
  "social-media": [
    "forms mode=compare cols=named hashtag:a_suggestion_by_Chris_Messina_in_2007 selfie:Oxford_Word_of_the_Year_2013 emoji:Japanese_e_(picture)_+_moji_(character) meme:a_word_made_up_by_Richard_Dawkins_in_1976",
    closer(
      `**Emoji has nothing to do with emotion.** It looks like it comes from *emotion*, but **emoji** is Japanese: **e** means "picture" and **moji** means "character". The first set of 176 emoji was designed for Japanese mobile phones in 1999. The word **meme** is older than the internet: the biologist Richard Dawkins invented it in 1976 for an idea that spreads from person to person like a gene.

**New words, new verbs.** Social media turns nouns into verbs very fast: *to google*, *to text*, *to friend* someone, *to unfollow*. English can do this because it has almost no endings. Armenian and Russian need a suffix: «գուգլել», «гуглить», «լայքել», «лайкнуть».`,
      `**Emoji-ն ոչ մի կապ չունի emotion-ի հետ։** Կարծես թե ծագում է *emotion*-ից, բայց **emoji**-ն ճապոներեն է․ **e** նշանակում է «նկար», **moji**՝ «նշան»։ 176 էմոջիներից կազմված առաջին հավաքածուն ստեղծվել է ճապոնական բջջային հեռախոսների համար 1999 թվականին։ **Meme** բառը համացանցից ավելի հին է․ կենսաբան Ռիչարդ Դոքինզն այն հորինեց 1976 թվականին՝ մի գաղափարի համար, որը տարածվում է մարդուց մարդ, ինչպես գենը։

**Նոր բառեր, նոր բայեր։** Սոցիալական ցանցերը գոյականները շատ արագ դարձնում են բայեր՝ *to google*, *to text*, *to friend* someone, *to unfollow*։ Անգլերենը կարող է դա անել, որովհետև գրեթե վերջավորություններ չունի։ Հայերենին և ռուսերենին վերջածանց է պետք՝ «գուգլել», «гуглить», «լայքել», «лайкнуть»։`,
      `**Emoji не связано с emotion.** Кажется, что слово от *emotion*, но **emoji** — японское: **e** значит «картинка», **moji** — «знак». Первый набор из 176 эмодзи нарисовали для японских мобильных телефонов в 1999 году. Слово **meme** старше интернета: биолог Ричард Докинз придумал его в 1976 году для идеи, которая передаётся от человека к человеку, как ген.

**Новые слова — новые глаголы.** Соцсети очень быстро превращают существительные в глаголы: *to google*, *to text*, *to friend* someone, *to unfollow*. Английский может так делать, потому что в нём почти нет окончаний. Армянскому и русскому нужен суффикс: «գուգլել», «гуглить», «լայքել», «лайкнуть».`,
    ),
    ask(1, {
      en: ["What does «emoji» literally mean?", ["picture character", "emotion icon", "small face"], "Japanese e = picture, moji = character."],
      hy: ["Բառացի ի՞նչ է նշանակում «emoji»-ն։", ["picture character", "emotion icon", "small face"], "Ճապոներեն e = նկար, moji = նշան։"],
      ru: ["Что буквально значит «emoji»?", ["picture character", "emotion icon", "small face"], "По-японски e = картинка, moji = знак."],
    }),
  ],
  "body-language-8": [
    "sentence mode=order She is nodding and smiling .",
    closer(
      `**Some faces are universal.** In the 1960s the American psychologist **Paul Ekman** showed photos of faces to people in many countries, including a group in Papua New Guinea who had almost never seen outsiders. Everyone recognised the same basic emotions: happiness, sadness, anger, fear, surprise and disgust. Gestures, on the other hand, are learnt and change from culture to culture.

**A nod is not always yes.** In Bulgaria a nod can mean **no** and a shake of the head **yes**, which confuses many visitors. In Armenia and Russia, as in Britain, a nod means yes. Body language happens in the moment, so English describes it with the **present continuous**: *He **is frowning**, she **is shrugging**.*`,
      `**Որոշ դեմքեր համընդհանուր են։** 1960-ական թվականներին ամերիկացի հոգեբան **Փոլ Էքմանը** դեմքերի լուսանկարներ էր ցույց տալիս տարբեր երկրների մարդկանց, այդ թվում՝ Պապուա Նոր Գվինեայի մի խմբի, որը գրեթե երբեք օտարների չէր տեսել։ Բոլորը ճանաչեցին միևնույն հիմնական հույզերը՝ ուրախություն, տխրություն, զայրույթ, վախ, զարմանք և զզվանք։ Ժեստերը, մյուս կողմից, սովորովի են և փոխվում են մշակույթից մշակույթ։

**Գլխով անելը միշտ չէ, որ այո է։** Բուլղարիայում գլխով անելը կարող է նշանակել **ոչ**, իսկ գլուխը թափահարելը՝ **այո**, ինչը շփոթեցնում է շատ այցելուների։ Հայաստանում և Ռուսաստանում, ինչպես Բրիտանիայում, գլխով անելը նշանակում է այո։ Մարմնի լեզուն տեղի է ունենում տվյալ պահին, ուստի անգլերենն այն նկարագրում է **present continuous**-ով՝ *He **is frowning**, she **is shrugging**.*`,
      `**Некоторые лица универсальны.** В 1960-х американский психолог **Пол Экман** показывал фотографии лиц людям во многих странах, в том числе племени в Папуа — Новой Гвинее, которое почти не видело чужаков. Все узнали одни и те же базовые эмоции: радость, грусть, гнев, страх, удивление и отвращение. А вот жесты выучиваются и меняются от культуры к культуре.

**Кивок — не всегда «да».** В Болгарии кивок может значить **нет**, а покачивание головой — **да**, что сбивает с толку многих гостей. В Армении и России, как и в Британии, кивок значит «да». Язык тела происходит в моменте, поэтому английский описывает его в **present continuous**: *He **is frowning**, she **is shrugging**.*`,
    ),
    ask(2, {
      en: ["He lifts his shoulders and says nothing. He is…", ["nodding", "shrugging", "frowning"], "Lifting the shoulders: shrugging, «I don't know»."],
      hy: ["Նա ուսերն է թոթվում և ոչինչ չի ասում։ He is…", ["nodding", "shrugging", "frowning"], "Ուսերը թոթվել՝ shrugging՝ «չգիտեմ»։"],
      ru: ["Он пожимает плечами и молчит. He is…", ["nodding", "shrugging", "frowning"], "Пожимать плечами: shrugging — «не знаю»."],
    }),
  ],
  "socialising-phrases-8": [
    "sentence mode=order Nice to meet you , I'm Ani .",
    closer(
      `**How do you do is not a question.** In very formal British English, the answer to *How do you do?* is… *How do you do?* It is a greeting, not a question about your health. In the same way, *How are you?* in Britain or the USA usually expects a short *Fine, thanks. And you?*, not a list of your problems. Armenian «Ո՞նց ես» and Russian «Как дела?» can lead to a longer answer among friends.

**The weather as a social tool.** British people talk about the weather so often that it has become a joke, but it has a job: it is a safe topic that anyone can comment on, so it starts a conversation without risk. *Lovely day, isn't it?* is an invitation to talk, not a weather report.`,
      `**How do you do-ն հարց չէ։** Շատ պաշտոնական բրիտանական անգլերենում *How do you do?*-ի պատասխանն է… *How do you do?*։ Դա ողջույն է, ոչ թե հարց քո առողջության մասին։ Նույն կերպ, Բրիտանիայում կամ ԱՄՆ-ում *How are you?*-ն սովորաբար սպասում է կարճ *Fine, thanks. And you?*, ոչ թե քո խնդիրների ցուցակ։ Հայերեն «Ո՞նց ես»-ը և ռուսերեն «Как дела?»-ն ընկերների միջև կարող են ավելի երկար պատասխանի հանգեցնել։

**Եղանակը՝ որպես շփման գործիք։** Բրիտանացիներն այնքան հաճախ են խոսում եղանակի մասին, որ դա կատակ է դարձել, բայց այն ունի իր դերը․ դա անվտանգ թեմա է, որի մասին յուրաքանչյուրը կարող է կարծիք հայտնել, ուստի առանց ռիսկի զրույց է սկսում։ *Lovely day, isn't it?*-ը զրույցի հրավեր է, ոչ թե եղանակի տեսություն։`,
      `**How do you do — не вопрос.** В очень официальном британском английском на *How do you do?* отвечают… *How do you do?* Это приветствие, а не вопрос о здоровье. Точно так же *How are you?* в Британии или США обычно ждёт короткого *Fine, thanks. And you?*, а не списка твоих проблем. Армянское «Ո՞նց ես» и русское «Как дела?» среди друзей могут привести к более длинному ответу.

**Погода как инструмент общения.** Британцы говорят о погоде так часто, что это стало шуткой, но у этого есть смысл: это безопасная тема, о которой может высказаться каждый, так что разговор начинается без риска. *Lovely day, isn't it?* — приглашение поговорить, а не прогноз погоды.`,
    ),
    ask(3, {
      en: ["A British colleague says «How do you do?». You answer:", ["Very well, my health is good.", "I do my homework.", "How do you do?"], "It is a formal greeting, answered the same way."],
      hy: ["Բրիտանացի գործընկերն ասում է «How do you do?»։ Պատասխանում ես՝", ["Very well, my health is good.", "I do my homework.", "How do you do?"], "Դա պաշտոնական ողջույն է, պատասխանում են նույն կերպ։"],
      ru: ["Британский коллега говорит «How do you do?». Ты отвечаешь:", ["Very well, my health is good.", "I do my homework.", "How do you do?"], "Это официальное приветствие, отвечают тем же."],
    }),
  ],
  "past-perfect": [
    "tense name=past-perfect aspects=simple,perfect times=past",
    closer(
      `**Armenian has a pluperfect too.** The English past perfect, *I **had written***, has a close Armenian partner: «գր**ել էի**», built in the same way from a participle and the past of «to be». Both show an action that was finished before another past moment: *When Mum came home, I **had** already **cooked** dinner* / «Երբ մայրիկը տուն եկավ, ես արդեն ընթրիք **էի պատրաստել**». Russian has no such form and uses **уже** and context.

**The past of the past.** Think of a timeline with two points in the past. The later one is in the past simple, the earlier one in the past perfect. If the order is already clear from **after** or **before**, many speakers simply use the past simple twice: *After I **finished**, I **left**.*`,
      `**Հայերենն էլ ունի անցյալ վաղակատար։** Անգլերենի past perfect-ը՝ *I **had written***, հայերենում ունի մոտ զույգ՝ «գր**ել էի**», կազմված նույն կերպ՝ դերբայից և «լինել»-ի անցյալից։ Երկուսն էլ ցույց են տալիս գործողություն, որ ավարտվել էր անցյալի մեկ այլ պահից առաջ՝ *When Mum came home, I **had** already **cooked** dinner* / «Երբ մայրիկը տուն եկավ, ես արդեն ընթրիք **էի պատրաստել**»։ Ռուսերենը նման ձև չունի և գործածում է **уже** և համատեքստը։

**Անցյալի անցյալը։** Պատկերացրու ժամանակագիծ՝ անցյալի երկու կետով։ Ավելի ուշը past simple-ով է, ավելի վաղը՝ past perfect-ով։ Եթե հերթականությունն արդեն պարզ է **after**-ից կամ **before**-ից, շատերը պարզապես երկու անգամ գործածում են past simple՝ *After I **finished**, I **left**.*`,
      `**В армянском тоже есть плюсквамперфект.** У английского past perfect, *I **had written***, есть близкий армянский партнёр: «գր**ել էի**», построенный так же — из причастия и прошедшего от «быть». Обе формы показывают действие, законченное до другого момента в прошлом: *When Mum came home, I **had** already **cooked** dinner* / «Երբ մայրիկը տուն եկավ, ես արդեն ընթրիք **էի պատրաստել**». В русском такой формы нет: помогают **уже** и контекст.

**Прошлое прошлого.** Представь линию времени с двумя точками в прошлом. Более поздняя — в past simple, более ранняя — в past perfect. Если порядок уже ясен из **after** или **before**, многие просто дважды ставят past simple: *After I **finished**, I **left**.*`,
    ),
    ask(2, {
      en: ["«When we got to the station, the train ___.»", ["left", "had left", "has left"], "It left before we arrived: past perfect."],
      hy: ["«When we got to the station, the train ___.»", ["left", "had left", "has left"], "Գնացքը մեկնել էր մինչ մեր գալը՝ past perfect։"],
      ru: ["«When we got to the station, the train ___.»", ["left", "had left", "has left"], "Поезд ушёл до нашего прихода: past perfect."],
    }),
  ],
  "past-perfect-vs-past-simple-8": [
    "sentence mode=order When we arrived , the film had already started .",
    closer(
      `**One small change, a different story.** *When we arrived, the film **started*** means we came in and then it began: perfect timing. *When we arrived, the film **had started*** means we were late and missed the beginning. Only the verb form tells you which happened first.

**Already, just, never… before.** The past perfect loves the same signal words as the present perfect, moved into the past: *She **had just** left*, *I **had never** seen snow **before** that winter*, *By ten o'clock everyone **had** already **gone***. **By** + a time is a strong hint: *By 2000, the population **had grown** to…*`,
      `**Մեկ փոքր փոփոխություն՝ այլ պատմություն։** *When we arrived, the film **started*** նշանակում է՝ մենք մտանք, և հետո այն սկսվեց՝ կատարյալ ժամանակին։ *When we arrived, the film **had started*** նշանակում է՝ ուշացել էինք և բաց թողել սկիզբը։ Միայն բայի ձևն է ասում, թե որն եղավ առաջինը։

**Already, just, never… before։** Past perfect-ը սիրում է նույն ազդանշանային բառերը, ինչ present perfect-ը, միայն տեղափոխված անցյալ՝ *She **had just** left*, *I **had never** seen snow **before** that winter*, *By ten o'clock everyone **had** already **gone***։ **By** + ժամանակն ուժեղ ակնարկ է՝ *By 2000, the population **had grown** to…*`,
      `**Одна маленькая перемена — другая история.** *When we arrived, the film **started*** значит, что мы вошли, и тогда он начался: идеально вовремя. *When we arrived, the film **had started*** значит, что мы опоздали и пропустили начало. Только форма глагола говорит, что было раньше.

**Already, just, never… before.** Past perfect любит те же слова-сигналы, что и present perfect, только перенесённые в прошлое: *She **had just** left*, *I **had never** seen snow **before** that winter*, *By ten o'clock everyone **had** already **gone***. **By** + время — сильная подсказка: *By 2000, the population **had grown** to…*`,
    ),
    ask(1, {
      en: ["«When we arrived, the film had started.» Did we see the beginning?", ["No, it began before we came.", "Yes, it began when we came.", "We don't know."], "Had started = it began earlier."],
      hy: ["«When we arrived, the film had started.» Տեսա՞նք սկիզբը։", ["No, it began before we came.", "Yes, it began when we came.", "We don't know."], "Had started՝ սկսվել էր ավելի վաղ։"],
      ru: ["«When we arrived, the film had started.» Мы видели начало?", ["No, it began before we came.", "Yes, it began when we came.", "We don't know."], "Had started — начался раньше."],
    }),
  ],
  "past-perfect-questions-8": [
    "sentence mode=order Had you ever seen snow before you moved here ?",
    closer(
      `**Had goes first.** The past perfect question is simple: put **had** before the subject. *She had finished* → ***Had** she finished?* With a question word: *Where **had** they been?* The short answers repeat **had**: *Yes, she had. / No, she hadn't.* Armenian and Russian again change only the intonation: «Արդեն ավարտե՞լ էր», «Она уже закончила?».

**Had I known…** In formal English, **had** can start a sentence without **if**: ***Had** I known, I would have helped* = *If I had known…* You will meet this in books and speeches. It is the same inversion as in a question, used to sound elegant.`,
      `**Had-ը գնում է առաջ։** Past perfect-ի հարցը պարզ է՝ **had**-ը դիր ենթակայից առաջ՝ *She had finished* → ***Had** she finished?*։ Հարցական բառով՝ *Where **had** they been?*։ Կարճ պատասխանները կրկնում են **had**-ը՝ *Yes, she had. / No, she hadn't.*։ Հայերենն ու ռուսերենը դարձյալ փոխում են միայն հնչերանգը՝ «Արդեն ավարտե՞լ էր», «Она уже закончила?»։

**Had I known…** Պաշտոնական անգլերենում **had**-ով կարելի է նախադասություն սկսել առանց **if**-ի՝ ***Had** I known, I would have helped* = *If I had known…*։ Սրան կհանդիպես գրքերում և ճառերում։ Դա նույն շրջումն է, ինչ հարցում, որ գործածվում է նրբագեղ հնչելու համար։`,
      `**Had выходит вперёд.** Вопрос в past perfect прост: поставь **had** перед подлежащим. *She had finished* → ***Had** she finished?* С вопросительным словом: *Where **had** they been?* Краткие ответы повторяют **had**: *Yes, she had. / No, she hadn't.* Армянский и русский снова меняют только интонацию: «Արդեն ավարտե՞լ էր», «Она уже закончила?».

**Had I known…** В официальном английском **had** может начать предложение без **if**: ***Had** I known, I would have helped* = *If I had known…* Это встречается в книгах и речах. Это та же инверсия, что в вопросе, — ради изящества.`,
    ),
    ask(3, {
      en: ["«Had they met before the party?» Choose the short answer.", ["Yes, they did.", "Yes, they were.", "Yes, they had."], "Repeat the helper: had."],
      hy: ["«Had they met before the party?» Ընտրիր կարճ պատասխանը։", ["Yes, they did.", "Yes, they were.", "Yes, they had."], "Կրկնիր օժանդակ բայը՝ had։"],
      ru: ["«Had they met before the party?» Выбери краткий ответ.", ["Yes, they did.", "Yes, they were.", "Yes, they had."], "Повтори помощника: had."],
    }),
  ],
  "narrative-tenses": [
    "tense name=past-simple aspects=simple,continuous,perfect,perfect-continuous times=past",
    closer(
      `**Four past tenses, four jobs.** A story in English uses a team of past tenses: the **past simple** moves the events forward (*She **opened** the door*), the **past continuous** paints the background (*It **was raining***), the **past perfect** jumps back to something earlier (*Someone **had left** a letter*), and the **past perfect continuous** says how long something had been going on (*She **had been waiting** for an hour*).

**Armenian has the same team.** Armenian narratives use «բացեց» (aorist), «գալիս էր» (imperfect) and «թողել էր» (pluperfect), which match the first three English tenses closely. Russian relies on aspect and words like **уже** and **до этого**. Switch through the four on the line above and imagine one scene for each.`,
      `**Անցյալի չորս ժամանակ՝ չորս դեր։** Անգլերեն պատմությունը գործածում է անցյալ ժամանակների մի թիմ՝ **past simple**-ը առաջ է տանում իրադարձությունները (*She **opened** the door*), **past continuous**-ը նկարում է ֆոնը (*It **was raining***), **past perfect**-ը ցատկում է ավելի վաղ եղածին (*Someone **had left** a letter*), իսկ **past perfect continuous**-ն ասում է, թե որքան ժամանակ էր ինչ-որ բան շարունակվել (*She **had been waiting** for an hour*)։

**Հայերենն ունի նույն թիմը։** Հայերեն պատմությունները գործածում են «բացեց» (անցյալ կատարյալ), «գալիս էր» (անկատար) և «թողել էր» (անցյալ վաղակատար), որոնք մոտ համապատասխանում են անգլերենի առաջին երեքին։ Ռուսերենը հենվում է կերպի և **уже**, **до этого** բառերի վրա։ Վերևի գծում անցիր չորսով և պատկերացրու մեկ տեսարան յուրաքանչյուրի համար։`,
      `**Четыре прошедших — четыре работы.** Английский рассказ использует команду прошедших времён: **past simple** двигает события (*She **opened** the door*), **past continuous** рисует фон (*It **was raining***), **past perfect** прыгает назад к более раннему (*Someone **had left** a letter*), а **past perfect continuous** говорит, как долго что-то уже длилось (*She **had been waiting** for an hour*).

**В армянском та же команда.** Армянский рассказ использует «բացեց» (аорист), «գալիս էր» (имперфект) и «թողել էր» (плюсквамперфект) — они близко соответствуют первым трём английским временам. Русский опирается на вид и слова **уже**, **до этого**. Пройди по четырём формам на линии выше и представь по одной сцене для каждой.`,
    ),
    ask(3, {
      en: ["Which tense jumps back to something that happened earlier in a story?", ["past simple", "past continuous", "past perfect"], "Past perfect = the past of the past."],
      hy: ["Ո՞ր ժամանակն է պատմության մեջ ցատկում ավելի վաղ եղածին։", ["past simple", "past continuous", "past perfect"], "Past perfect՝ անցյալի անցյալը։"],
      ru: ["Какое время прыгает в рассказе назад, к более раннему?", ["past simple", "past continuous", "past perfect"], "Past perfect — прошлое прошлого."],
    }),
  ],
  "history-story": [
    "forms mode=compare cols=when 4_October_1957:Sputnik_1,_the_first_satellite 12_April_1961:Gagarin_flies_round_the_Earth 16_June_1963:Valentina_Tereshkova,_the_first_woman_in_space 20_July_1969:the_first_people_on_the_Moon",
    closer(
      `**The space race in four dates.** In just twelve years, people went from the first small satellite to walking on the Moon. **Sputnik 1** was a metal ball about 58 cm wide that sent out a simple beeping signal. Gagarin's flight lasted **108 minutes**, and 12 April is now celebrated as Cosmonautics Day in Russia and, since 2011, as the International Day of Human Space Flight by the United Nations.

**Telling history in English.** A history story needs exact dates with **on** (*on 12 April 1961*), the past simple for the events, and the past perfect for what had happened before: *Nobody **had** ever **flown** into space before.* Use the table: turn each line into a sentence, then link them with *four years later*, *two years after that*, *finally*.`,
      `**Տիեզերական մրցավազքը՝ չորս թվականով։** Ընդամենը տասներկու տարում մարդիկ առաջին փոքր արբանյակից հասան Լուսնի վրա քայլելուն։ **«Սպուտնիկ-1»**-ը մոտ 58 սմ տրամագծով մետաղյա գունդ էր, որ պարզ ազդանշան էր հաղորդում։ Գագարինի թռիչքը տևեց **108 րոպե**, և ապրիլի 12-ն այժմ նշվում է որպես Տիեզերագնացության օր Ռուսաստանում, իսկ 2011 թվականից՝ որպես Մարդու տիեզերական թռիչքի միջազգային օր՝ ՄԱԿ-ի կողմից։

**Պատմություն պատմել անգլերենով։** Պատմական պատմությանը պետք են ճշգրիտ ամսաթվեր **on**-ով (*on 12 April 1961*), past simple՝ իրադարձությունների համար, և past perfect՝ նախքան դրանք եղածի համար՝ *Nobody **had** ever **flown** into space before.*։ Օգտվիր աղյուսակից՝ ամեն տող դարձրու նախադասություն, հետո կապիր դրանք *four years later*, *two years after that*, *finally* արտահայտություններով։`,
      `**Космическая гонка в четырёх датах.** Всего за двенадцать лет люди прошли путь от первого маленького спутника до прогулки по Луне. **Спутник-1** был металлическим шаром диаметром около 58 см, который передавал простой сигнал. Полёт Гагарина длился **108 минут**, и 12 апреля теперь отмечают как День космонавтики в России, а с 2011 года — как Международный день полёта человека в космос по решению ООН.

**Рассказываем историю по-английски.** Историческому рассказу нужны точные даты с **on** (*on 12 April 1961*), past simple для событий и past perfect для того, что было раньше: *Nobody **had** ever **flown** into space before.* Воспользуйся таблицей: преврати каждую строку в предложение, а потом свяжи их словами *four years later*, *two years after that*, *finally*.`,
    ),
    ask(2, {
      en: ["Which preposition goes with an exact date?", ["in 12 April 1961", "on 12 April 1961", "at 12 April 1961"], "Exact dates take on."],
      hy: ["Ո՞ր նախդիրն է գործածվում ճշգրիտ ամսաթվի հետ։", ["in 12 April 1961", "on 12 April 1961", "at 12 April 1961"], "Ճշգրիտ ամսաթվերը ստանում են on։"],
      ru: ["Какой предлог ставится с точной датой?", ["in 12 April 1961", "on 12 April 1961", "at 12 April 1961"], "С точными датами — on."],
    }),
  ],
  "writing-a-narrative-8": [
    "sentence mode=order By the time we got home , it had stopped raining .",
    closer(
      `**A pyramid for every story.** In 1863 the German writer Gustav Freytag described the shape of a classic drama as a pyramid: **exposition** (who, where, when), **rising action** (the problem grows), **climax** (the most exciting moment), **falling action** and **resolution** (how it ends). Most good short stories, films and fairy tales follow this shape.

**Linking time.** *By the time*, *as soon as*, *just as* and *meanwhile* glue a narrative together. **By the time** is almost always followed by the past perfect in the main clause: *By the time we got home, it **had stopped** raining.* **Just as** + past continuous makes a moment dramatic: *Just as I **was leaving**, the phone rang.*`,
      `**Բուրգ՝ ամեն պատմության համար։** 1863 թվականին գերմանացի գրող Գուստավ Ֆրայտագը դասական դրամայի կառուցվածքը նկարագրեց որպես բուրգ՝ **exposition**՝ ներածություն (ով, որտեղ, երբ), **rising action**՝ զարգացում (խնդիրն աճում է), **climax**՝ գագաթնակետ (ամենահուզիչ պահը), **falling action** և **resolution**՝ հանգուցալուծում (ինչպես է ավարտվում)։ Լավ պատմվածքների, ֆիլմերի և հեքիաթների մեծ մասը հետևում է այս ձևին։

**Ժամանակի կապեր։** *By the time*, *as soon as*, *just as* և *meanwhile* արտահայտությունները կապում են պատմությունը։ **By the time**-ից հետո գլխավոր նախադասության մեջ գրեթե միշտ past perfect է՝ *By the time we got home, it **had stopped** raining.*։ **Just as** + past continuous-ը պահը դրամատիկ է դարձնում՝ *Just as I **was leaving**, the phone rang.*`,
      `**Пирамида для любой истории.** В 1863 году немецкий писатель Густав Фрейтаг описал строение классической драмы как пирамиду: **exposition** — экспозиция (кто, где, когда), **rising action** — развитие (проблема растёт), **climax** — кульминация (самый напряжённый момент), **falling action** и **resolution** — развязка (чем всё кончается). Большинство хороших рассказов, фильмов и сказок следуют этой форме.

**Связки времени.** *By the time*, *as soon as*, *just as* и *meanwhile* склеивают рассказ. После **by the time** в главном предложении почти всегда past perfect: *By the time we got home, it **had stopped** raining.* **Just as** + past continuous делает момент драматичным: *Just as I **was leaving**, the phone rang.*`,
    ),
    ask(1, {
      en: ["What is the climax of a story?", ["the most exciting moment", "the first paragraph", "the list of characters"], "The climax is the top of Freytag's pyramid."],
      hy: ["Ի՞նչ է պատմության climax-ը։", ["the most exciting moment", "the first paragraph", "the list of characters"], "Climax-ը Ֆրայտագի բուրգի գագաթն է։"],
      ru: ["Что такое climax рассказа?", ["the most exciting moment", "the first paragraph", "the list of characters"], "Climax — вершина пирамиды Фрейтага."],
    }),
  ],
  inventions: [
    "forms mode=compare cols=when 1440s:Gutenberg's_printing_press 1876:Bell_patents_the_telephone 1879:Edison's_long-lasting_light_bulb 1895:Popov_shows_his_radio_receiver 1969:the_first_ARPANET_message",
    closer(
      `**Inventors argue about who was first.** Big inventions rarely have one parent. Alexander Graham Bell patented the telephone in 1876, but others were working on the same idea. In Russia 7 May is **Radio Day**, because Alexander Popov demonstrated his radio receiver on that day in 1895, while Guglielmo Marconi was doing similar work in Italy. In Armenia, **Hovhannes Adamian** is remembered as a pioneer of colour television: his first patent dates from 1908.

**Invent, discover, design.** You **invent** something that did not exist (*the telephone*), you **discover** something that was already there (*a new star*, *gold*), and you **design** a plan for how it will look and work (*Tamanyan **designed** modern Yerevan*). Inventions often take the passive: *The light bulb **was improved** by Edison.*`,
      `**Գյուտարարները վիճում են, թե ով էր առաջինը։** Մեծ գյուտերը հազվադեպ են մեկ հեղինակ ունենում։ Ալեքսանդր Գրեհեմ Բելը հեռախոսն արտոնագրեց 1876 թվականին, բայց ուրիշներն էլ էին աշխատում նույն գաղափարի վրա։ Ռուսաստանում մայիսի 7-ը **Ռադիոյի օրն** է, որովհետև Ալեքսանդր Պոպովն այդ օրը՝ 1895 թվականին, ցուցադրեց իր ռադիոընդունիչը, մինչդեռ Գուլիելմո Մարկոնին նման աշխատանք էր անում Իտալիայում։ Հայաստանում **Հովհաննես Ադամյանը** հիշվում է որպես գունավոր հեռուստատեսության ռահվիրա․ նրա առաջին արտոնագիրը 1908 թվականից է։

**Invent, discover, design։** **Invent** են անում այն, ինչ գոյություն չուներ (*the telephone*), **discover**՝ այն, ինչ արդեն կար (*a new star*, *gold*), իսկ **design**՝ ծրագիր, թե ինչպես այն կերևա և կաշխատի (*Tamanyan **designed** modern Yerevan*)։ Գյուտերը հաճախ կրավորական են ստանում՝ *The light bulb **was improved** by Edison.*`,
      `**Изобретатели спорят, кто был первым.** У больших изобретений редко один автор. Александр Грейам Белл запатентовал телефон в 1876 году, но над той же идеей работали и другие. В России 7 мая — **День радио**, потому что в этот день в 1895 году Александр Попов показал свой радиоприёмник, а Гульельмо Маркони в то же время занимался тем же в Италии. В Армении **Ованнес Адамян** известен как один из пионеров цветного телевидения: его первый патент относится к 1908 году.

**Invent, discover, design.** **Invent** — создать то, чего не было (*the telephone*), **discover** — найти то, что уже было (*a new star*, *gold*), **design** — продумать, как это будет выглядеть и работать (*Tamanyan **designed** modern Yerevan*). Изобретения часто идут в пассиве: *The light bulb **was improved** by Edison.*`,
    ),
    ask(2, {
      en: ["Complete: «Scientists ___ a new planet last year.»", ["invented", "discovered", "designed"], "The planet was already there: discovered."],
      hy: ["Լրացրու՝ «Scientists ___ a new planet last year.»", ["invented", "discovered", "designed"], "Մոլորակն արդեն կար՝ discovered։"],
      ru: ["Дополни: «Scientists ___ a new planet last year.»", ["invented", "discovered", "designed"], "Планета уже была: discovered."],
    }),
  ],
  "reported-statements": [
    "forms mode=compare cols=reported I'm_tired:She_said_she_was_tired I_will_help_you:He_said_he_would_help_me I_have_finished:She_said_she_had_finished I_can_swim:He_said_he_could_swim",
    closer(
      `**English moves the tense back; Armenian and Russian don't.** In English reported speech the verb usually moves one step into the past: *"I am tired"* → *She said she **was** tired*. Armenian and Russian keep the original tense: «Ասաց, որ հոգնած **է**», «Она сказала, что **устала**», which is why learners often forget to change it. Look at the table: **am → was**, **will → would**, **have → had**, **can → could**.

**When you don't need to change.** If the fact is still true now, you can keep the present: *She said she **lives** in Gyumri* (she still does). And if the reporting verb is in the present, nothing moves: *He **says** he **is** busy.* Also notice the pronouns: *"I will help **you**"* becomes *He said he would help **me***.`,
      `**Անգլերենը ժամանակը տեղափոխում է հետ, հայերենն ու ռուսերենը՝ ոչ։** Անգլերենի անուղղակի խոսքում բայը սովորաբար մեկ քայլ տեղափոխվում է դեպի անցյալ՝ *"I am tired"* → *She said she **was** tired*։ Հայերենն ու ռուսերենը պահում են սկզբնական ժամանակը՝ «Ասաց, որ հոգնած **է**», «Она сказала, что **устала**», ահա թե ինչու սովորողները հաճախ մոռանում են փոխել այն։ Նայիր աղյուսակին՝ **am → was**, **will → would**, **have → had**, **can → could**։

**Երբ փոխել պետք չէ։** Եթե փաստը դեռ ճիշտ է, կարելի է պահել ներկան՝ *She said she **lives** in Gyumri* (նա դեռ այնտեղ է ապրում)։ Իսկ եթե հաղորդող բայը ներկա է, ոչինչ չի տեղափոխվում՝ *He **says** he **is** busy.*։ Ուշադրություն դարձրու նաև դերանուններին՝ *"I will help **you**"*-ը դառնում է *He said he would help **me***։`,
      `**Английский сдвигает время назад, армянский и русский — нет.** В английской косвенной речи глагол обычно сдвигается на шаг в прошлое: *"I am tired"* → *She said she **was** tired*. Армянский и русский сохраняют исходное время: «Ասաց, որ հոգնած **է**», «Она сказала, что **устала**», поэтому изучающие часто забывают его менять. Посмотри на таблицу: **am → was**, **will → would**, **have → had**, **can → could**.

**Когда менять не нужно.** Если факт всё ещё верен, можно оставить настоящее: *She said she **lives** in Gyumri* (она и сейчас там живёт). А если глагол сообщения в настоящем, ничего не сдвигается: *He **says** he **is** busy.* И следи за местоимениями: *"I will help **you**"* превращается в *He said he would help **me***.`,
    ),
    ask(3, {
      en: ["«I will call you.» Report it: «She said she ___ me.»", ["will call", "calls", "would call"], "Will moves back to would."],
      hy: ["«I will call you.» Փոխանցիր՝ «She said she ___ me.»", ["will call", "calls", "would call"], "Will-ը դառնում է would։"],
      ru: ["«I will call you.» Передай: «She said she ___ me.»", ["will call", "calls", "would call"], "Will сдвигается в would."],
    }),
  ],
  "reported-questions": [
    "sentence mode=order She asked me where I lived .",
    closer(
      `**No question order, no question mark.** A reported question is no longer a question, so it uses normal word order and ends with a full stop: *"Where do you live?"* → *She asked me where **I lived**.* The helper **do** disappears. A very common mistake is *She asked me where did I live*.

**If is the Russian ли.** Yes/no questions are reported with **if** or **whether**: *"Are you coming?"* → *He asked **if** I was coming.* Russian does exactly this with the little word **ли**: «Он спросил, приду **ли** я», and Armenian with **արդյոք** or just **թե**: «Հարցրեց, **թե** գալո՞ւ եմ». So the idea is familiar; only the word is new.`,
      `**Ոչ հարցական բառակարգ, ոչ հարցական նշան։** Փոխանցված հարցն այլևս հարց չէ, ուստի գործածում է սովորական բառակարգ և ավարտվում է վերջակետով՝ *"Where do you live?"* → *She asked me where **I lived**.*։ Օժանդակ **do**-ն անհետանում է։ Շատ տարածված սխալ է *She asked me where did I live*-ը։

**If-ը ռուսերենի ли-ն է։** Այո/ոչ հարցերը փոխանցվում են **if**-ով կամ **whether**-ով՝ *"Are you coming?"* → *He asked **if** I was coming.*։ Ռուսերենը ճիշտ նույնն անում է **ли** մասնիկով՝ «Он спросил, приду **ли** я», իսկ հայերենը՝ **արդյոք**-ով կամ պարզապես **թե**-ով՝ «Հարցրեց, **թե** գալո՞ւ եմ»։ Այնպես որ, գաղափարը ծանոթ է, նոր է միայն բառը։`,
      `**Ни вопросительного порядка, ни вопросительного знака.** Переданный вопрос уже не вопрос, поэтому в нём обычный порядок слов и точка в конце: *"Where do you live?"* → *She asked me where **I lived**.* Вспомогательный **do** исчезает. Очень частая ошибка — *She asked me where did I live*.

**If — это русское ли.** Вопросы «да/нет» передаются через **if** или **whether**: *"Are you coming?"* → *He asked **if** I was coming.* Русский делает ровно то же частицей **ли**: «Он спросил, приду **ли** я», армянский — словом **արդյոք** или просто **թե**: «Հարցրեց, **թե** գալո՞ւ եմ». Так что идея знакома, ново только слово.`,
    ),
    ask(2, {
      en: ["«Do you like music?» Report it.", ["He asked me did I like music.", "He asked me if I liked music.", "He asked me do I like music?"], "If + normal word order, past tense."],
      hy: ["«Do you like music?» Փոխանցիր։", ["He asked me did I like music.", "He asked me if I liked music.", "He asked me do I like music?"], "If + սովորական բառակարգ, անցյալ ժամանակ։"],
      ru: ["«Do you like music?» Передай.", ["He asked me did I like music.", "He asked me if I liked music.", "He asked me do I like music?"], "If + обычный порядок слов, прошедшее время."],
    }),
  ],
  "reported-commands-8": [
    "forms mode=compare cols=reported Sit_down:He_told_me_to_sit_down Don't_shout:She_told_us_not_to_shout Please_help_me:He_asked_me_to_help_him Close_the_window:She_told_him_to_close_the_window",
    closer(
      `**Tell + person + to.** Commands become **told** + person + **to** + verb: *"Sit down!"* → *He **told me to** sit down.* Requests use **asked**: *"Please help me"* → *He **asked me to** help him.* The negative puts **not** before **to**: *She told us **not to** shout.* There is no tense to change, which makes this the easiest kind of reported speech.

**Say or tell?** **Tell** always needs a person after it: *tell **me***, *tell **the class***. **Say** does not: *She **said** that…*, or *She said **to me**…*. Russian «сказать» and Armenian «ասել» work for both, so *She said me* is a classic mistake. Russian also has **велел** (ordered) and **попросил** (asked), close to *told* and *asked*.`,
      `**Tell + մարդ + to։** Հրամանները դառնում են **told** + մարդ + **to** + բայ՝ *"Sit down!"* → *He **told me to** sit down.*։ Խնդրանքները գործածում են **asked**՝ *"Please help me"* → *He **asked me to** help him.*։ Ժխտականը **not**-ը դնում է **to**-ից առաջ՝ *She told us **not to** shout.*։ Փոխելու ժամանակ չկա, ինչը սա դարձնում է անուղղակի խոսքի ամենահեշտ տեսակը։

**Say, թե՞ tell։** **Tell**-ից հետո միշտ մարդ է պետք՝ *tell **me***, *tell **the class***։ **Say**-ից հետո՝ ոչ՝ *She **said** that…* կամ *She said **to me**…*։ Ռուսերեն «сказать»-ը և հայերեն «ասել»-ը աշխատում են երկու դեպքում էլ, ուստի *She said me*-ն դասական սխալ է։ Ռուսերենն ունի նաև **велел** (հրամայեց) և **попросил** (խնդրեց), որոնք մոտ են *told*-ին և *asked*-ին։`,
      `**Tell + человек + to.** Приказы превращаются в **told** + человек + **to** + глагол: *"Sit down!"* → *He **told me to** sit down.* Просьбы — через **asked**: *"Please help me"* → *He **asked me to** help him.* В отрицании **not** стоит перед **to**: *She told us **not to** shout.* Время менять не надо, поэтому это самый лёгкий вид косвенной речи.

**Say или tell?** После **tell** всегда нужен человек: *tell **me***, *tell **the class***. После **say** — нет: *She **said** that…* или *She said **to me**…*. Русское «сказать» и армянское «ասել» подходят для обоих, поэтому *She said me* — классическая ошибка. В русском есть ещё **велел** и **попросил** — близко к *told* и *asked*.`,
    ),
    ask(1, {
      en: ["«Don't be late!» Report it: «The teacher told us ___ late.»", ["not to be", "to not being", "don't be"], "Negative command: not to + verb."],
      hy: ["«Don't be late!» Փոխանցիր՝ «The teacher told us ___ late.»", ["not to be", "to not being", "don't be"], "Ժխտական հրաման՝ not to + բայ։"],
      ru: ["«Don't be late!» Передай: «The teacher told us ___ late.»", ["not to be", "to not being", "don't be"], "Отрицательный приказ: not to + глагол."],
    }),
  ],
  "modals-deduction": [
    "forms mode=compare cols=deduce He_must_be_tired:She_might_be_at_home:It_can't_be_true They_must_know_each_other:He_could_be_ill:She_can't_be_twenty",
    closer(
      `**Think like Sherlock Holmes.** When Holmes first meets Dr Watson in *A Study in Scarlet* (1887), he says: "You have been in Afghanistan, I perceive." He has seen Watson's tanned face, his military posture and his injured arm. Deduction modals put that thinking into words: *He **must** be a soldier* (I'm sure), *He **might** be a doctor* (maybe), *He **can't** be a farmer* (I'm sure he isn't).

**Can't, not mustn't.** The opposite of deduction **must** is **can't**, not *mustn't*: *It **can't** be true!* (*mustn't* means "it is forbidden"). Armenian uses **երևի**, **հավանաբար** and **չի կարող պատահել**; Russian **должно быть**, **может быть** and **не может быть**.`,
      `**Մտածիր Շերլոկ Հոլմսի պես։** Երբ Հոլմսն առաջին անգամ հանդիպում է դոկտոր Ուոթսոնին *A Study in Scarlet* (1887) վիպակում, ասում է՝ «Դուք եղել եք Աֆղանստանում, ես տեսնում եմ»։ Նա նկատել է Ուոթսոնի արևառ դեմքը, զինվորական կեցվածքը և վնասված ձեռքը։ Եզրահանգման եղանակավորող բայերն այդ մտածողությունը բառերի են վերածում՝ *He **must** be a soldier* (վստահ եմ), *He **might** be a doctor* (գուցե), *He **can't** be a farmer* (վստահ եմ, որ ոչ)։

**Can't, ոչ թե mustn't։** Եզրահանգման **must**-ի հակառակը **can't**-ն է, ոչ թե *mustn't*-ը՝ *It **can't** be true!* (*mustn't*-ը նշանակում է «արգելված է»)։ Հայերենը գործածում է **երևի**, **հավանաբար** և **չի կարող պատահել**, ռուսերենը՝ **должно быть**, **может быть** և **не может быть**։`,
      `**Думай как Шерлок Холмс.** Впервые встретив доктора Ватсона в повести *A Study in Scarlet* (1887), Холмс говорит: «Вы были в Афганистане, я полагаю». Он заметил загорелое лицо Ватсона, военную выправку и раненую руку. Модальные глаголы догадки облекают такие рассуждения в слова: *He **must** be a soldier* (уверен), *He **might** be a doctor* (возможно), *He **can't** be a farmer* (уверен, что нет).

**Can't, а не mustn't.** Противоположность догадки **must** — **can't**, а не *mustn't*: *It **can't** be true!* (*mustn't* значит «запрещено»). В армянском — **երևի**, **հավանաբար** и **չի կարող պատահել**, в русском — **должно быть**, **может быть** и **не может быть**.`,
    ),
    ask(3, {
      en: ["Ani is in Gyumri today. The girl in the shop in Yerevan ___ Ani.", ["must be", "might be", "can't be"], "You're sure it isn't her: can't be."],
      hy: ["Անին այսօր Գյումրիում է։ Երևանի խանութի աղջիկը ___ Ani։", ["must be", "might be", "can't be"], "Վստահ ես, որ նա չէ՝ can't be։"],
      ru: ["Ани сегодня в Гюмри. Девушка в магазине в Ереване ___ Ani.", ["must be", "might be", "can't be"], "Ты уверен, что это не она: can't be."],
    }),
  ],
  "armenian-russian-scientists": [
    "forms mode=compare cols=who3 Mendeleev:chemist:the_periodic_table Pavlov:physiologist:experiments_on_learning Korolev:engineer:the_first_satellite Hambardzumyan:astrophysicist:the_Byurakan_Observatory Mikoyan:aircraft_designer:the_MiG_planes Alikhanian:physicist:cosmic_rays_on_Aragats",
    closer(
      `**Gaps that were filled.** When Dmitri Mendeleev published his periodic table in 1869, he left empty places and predicted the properties of elements nobody had found yet. Three of them were discovered within twenty years: **gallium** (1875), **scandium** (1879) and **germanium** (1886), and they matched his predictions closely. Element 101, **mendelevium**, is named after him.

**Science words in three languages.** English, Armenian and Russian share many science words from Greek and Latin: **physics** / **ֆիզիկա** / **физика**, **laboratory** / **լաբորատորիա** / **лаборатория**. Armenian also builds its own: **աստղագիտություն** (astronomy) is literally "star knowledge". Use the table to report what scientists said or found: *Mendeleev said that the gaps would be filled.*`,
      `**Դատարկ տեղեր, որ լրացվեցին։** Երբ Դմիտրի Մենդելեևը 1869 թվականին հրատարակեց իր պարբերական աղյուսակը, նա դատարկ տեղեր թողեց և կանխագուշակեց դեռ չհայտնաբերված տարրերի հատկությունները։ Դրանցից երեքը հայտնաբերվեցին քսան տարվա ընթացքում՝ **գալիում** (1875), **սկանդիում** (1879) և **գերմանիում** (1886), և դրանք մոտ համընկան նրա կանխատեսումներին։ 101-րդ տարրը՝ **մենդելևիումը**, կոչվել է նրա անունով։

**Գիտական բառեր՝ երեք լեզվով։** Անգլերենը, հայերենը և ռուսերենն ունեն հունարենից և լատիներենից եկած շատ ընդհանուր գիտական բառեր՝ **physics** / **ֆիզիկա** / **физика**, **laboratory** / **լաբորատորիա** / **лаборатория**։ Հայերենը կերտում է նաև իր բառերը՝ **աստղագիտություն**-ը բառացի «աստղերի գիտություն» է։ Օգտվիր աղյուսակից՝ փոխանցելու, թե ինչ են ասել կամ գտել գիտնականները՝ *Mendeleev said that the gaps would be filled.*`,
      `**Пробелы, которые заполнились.** Публикуя периодическую таблицу в 1869 году, Дмитрий Менделеев оставил пустые места и предсказал свойства ещё не найденных элементов. Три из них открыли в течение двадцати лет: **галлий** (1875), **скандий** (1879) и **германий** (1886) — и они хорошо совпали с его прогнозами. 101-й элемент, **менделевий**, назван в его честь.

**Научные слова на трёх языках.** У английского, армянского и русского много общих научных слов из греческого и латыни: **physics** / **ֆիզիկա** / **физика**, **laboratory** / **լաբորատորիա** / **лаборатория**. Армянский строит и свои: **աստղագիտություն** (астрономия) — буквально «звёздное знание». С помощью таблицы перескажи, что учёные говорили или открыли: *Mendeleev said that the gaps would be filled.*`,
    ),
    ask(1, {
      en: ["Which element is named after Mendeleev?", ["mendelevium", "gallium", "germanium"], "Element 101: mendelevium."],
      hy: ["Ո՞ր տարրն է կոչվել Մենդելեևի անունով։", ["mendelevium", "gallium", "germanium"], "101-րդ տարրը՝ մենդելևիում։"],
      ru: ["Какой элемент назван в честь Менделеева?", ["mendelevium", "gallium", "germanium"], "Элемент 101 — менделевий."],
    }),
  ],
  "second-conditional": [
    "sentence mode=order If I had a million dollars , I would travel the world .",
    closer(
      `**If I were you.** In the second conditional, **were** is used for all persons, even **I**, **he** and **she**: *If I **were** you, I'd apologise*, *If she **were** here, she'd know.* It is an old subjunctive form. In everyday speech you will also hear *If I was*, but in writing and exams **were** is safer. The famous song from the 1964 musical *Fiddler on the Roof* is called *If I Were a Rich Man*.

**Past form, present meaning.** *If I **had** a million dollars* is not about the past: it is about an imagined present. Armenian uses the past conditional in both halves: «Եթե մեկ միլիոն դոլար **ունենայի**, աշխարհով մեկ **կճամփորդեի**». Russian adds **бы** to both: «Если **бы** у меня **был** миллион, я **бы** путешествовал».`,
      `**If I were you։** Second conditional-ում **were**-ը գործածվում է բոլոր դեմքերի համար, նույնիսկ **I**, **he** և **she**-ի հետ՝ *If I **were** you, I'd apologise*, *If she **were** here, she'd know.*։ Դա հին ըղձական ձև է։ Առօրյա խոսքում կլսես նաև *If I was*, բայց գրավոր և քննություններում **were**-ն ավելի ապահով է։ 1964 թվականի *Fiddler on the Roof* մյուզիքլի հայտնի երգը կոչվում է *If I Were a Rich Man*։

**Անցյալ ձև, ներկա իմաստ։** *If I **had** a million dollars*-ը անցյալի մասին չէ․ այն երևակայական ներկայի մասին է։ Հայերենն երկու մասում էլ գործածում է անցյալի ըղձական և պայմանական՝ «Եթե մեկ միլիոն դոլար **ունենայի**, աշխարհով մեկ **կճամփորդեի**»։ Ռուսերենն երկուսին էլ ավելացնում է **бы**՝ «Если **бы** у меня **был** миллион, я **бы** путешествовал»։`,
      `**If I were you.** Во втором условном **were** ставится для всех лиц, даже для **I**, **he** и **she**: *If I **were** you, I'd apologise*, *If she **were** here, she'd know.* Это старая форма сослагательного наклонения. В разговоре услышишь и *If I was*, но на письме и на экзаменах надёжнее **were**. Знаменитая песня из мюзикла 1964 года *Fiddler on the Roof* называется *If I Were a Rich Man*.

**Форма прошедшего, смысл настоящего.** *If I **had** a million dollars* — не о прошлом, а о воображаемом настоящем. Армянский ставит прошедшее сослагательное в обе части: «Եթե մեկ միլիոն դոլար **ունենայի**, աշխարհով մեկ **կճամփորդեի**». Русский добавляет **бы** в обе: «Если **бы** у меня **был** миллион, я **бы** путешествовал».`,
    ),
    ask(2, {
      en: ["Choose the best sentence for advice.", ["If I am you, I will rest.", "If I were you, I'd rest.", "If I would be you, I rest."], "Imagined situation: if I were you, I'd…"],
      hy: ["Ընտրիր խորհուրդ տալու լավագույն նախադասությունը։", ["If I am you, I will rest.", "If I were you, I'd rest.", "If I would be you, I rest."], "Երևակայական իրավիճակ՝ if I were you, I'd…"],
      ru: ["Выбери лучшее предложение для совета.", ["If I am you, I will rest.", "If I were you, I'd rest.", "If I would be you, I rest."], "Воображаемая ситуация: if I were you, I'd…"],
    }),
  ],
  "second-conditional-practice-8": [
    "forms mode=compare cols=realunreal If_it_rains,_we'll_stay_in:If_I_were_a_bird,_I'd_fly If_I_see_him,_I'll_tell_him:If_I_lived_in_London,_I'd_visit_museums If_you_study,_you'll_pass:If_I_had_wings,_I'd_never_take_the_bus",
    closer(
      `**How likely is it?** The choice between first and second conditional is about how real the situation feels to **you**. *If I **win** the competition, I'**ll** buy a bike* means you think you have a real chance. *If I **won** the competition, I'**d** buy a bike* means it is a dream. The same situation can take either form, depending on your hopes.

**Would never goes after if.** The **would** belongs only in the result: *If I **had** time, I **would** help*, never *If I would have time*. This is the same rule as **will** in the first conditional. Read the table across each row: the left column could happen tomorrow, the right column lives in the imagination.`,
      `**Որքա՞ն հավանական է։** First և second conditional-ի միջև ընտրությունը կախված է նրանից, թե որքան իրական է իրավիճակը թվում **քեզ**։ *If I **win** the competition, I'**ll** buy a bike* նշանակում է՝ կարծում ես, որ իրական հնարավորություն ունես։ *If I **won** the competition, I'**d** buy a bike* նշանակում է՝ դա երազանք է։ Նույն իրավիճակը կարող է ստանալ ցանկացած ձևը՝ կախված քո հույսերից։

**Would-ը երբեք if-ից հետո չի գալիս։** **Would**-ը միայն արդյունքի մասում է՝ *If I **had** time, I **would** help*, երբեք՝ *If I would have time*։ Սա նույն կանոնն է, ինչ **will**-ը first conditional-ում։ Կարդա աղյուսակը տող առ տող՝ ձախ սյունակը կարող է պատահել վաղը, աջն ապրում է երևակայության մեջ։`,
      `**Насколько это вероятно?** Выбор между первым и вторым условным зависит от того, насколько реальной ситуация кажется **тебе**. *If I **win** the competition, I'**ll** buy a bike* — ты думаешь, что у тебя есть реальный шанс. *If I **won** the competition, I'**d** buy a bike* — это мечта. Одна и та же ситуация может принять любую форму, в зависимости от твоих надежд.

**Would никогда не идёт после if.** **Would** живёт только в результате: *If I **had** time, I **would** help*, но не *If I would have time*. Это то же правило, что с **will** в первом условном. Прочитай таблицу по строкам: левый столбец может случиться завтра, правый живёт в воображении.`,
    ),
    ask(1, {
      en: ["Which sentence describes a dream, not a real plan?", ["If I lived on the Moon, I'd jump very high.", "If it's sunny, we'll go to the lake.", "If you ask her, she'll help."], "Living on the Moon is imagined: second conditional."],
      hy: ["Ո՞ր նախադասությունն է նկարագրում երազանք, ոչ թե իրական ծրագիր։", ["If I lived on the Moon, I'd jump very high.", "If it's sunny, we'll go to the lake.", "If you ask her, she'll help."], "Լուսնի վրա ապրելն երևակայական է՝ second conditional։"],
      ru: ["Какое предложение описывает мечту, а не реальный план?", ["If I lived on the Moon, I'd jump very high.", "If it's sunny, we'll go to the lake.", "If you ask her, she'll help."], "Жить на Луне — воображаемое: второе условное."],
    }),
  ],
  "i-wish": [
    "sentence mode=order keep=1 I wish I could speak Chinese .",
    closer(
      `**Armenian has one beautiful word for it.** Armenian expresses a wish about the present with **Երանի՜** and the past conditional: «**Երանի՜** չինարեն **իմանայի**». Russian uses «**Жаль, что** я не знаю китайского» or «**Хотел бы** я знать китайский». English uses **wish** + past: *I **wish** I **knew** Chinese.* As with the second conditional, the past form describes an imagined present.

**Wish or hope?** **Hope** is for things that may really happen: *I **hope** you **pass** the exam.* **Wish** is for things that are not true now: *I **wish** I **were** taller.* **If only** is a stronger, more emotional **I wish**: *If only it would stop raining!* For other people's annoying habits use **would**: *I wish my brother **would** knock before he comes in.*`,
      `**Հայերենն ունի մեկ գեղեցիկ բառ դրա համար։** Հայերենը ներկայի մասին ցանկություն արտահայտում է **Երանի՜**-ով և անցյալի ըղձականով՝ «**Երանի՜** չինարեն **իմանայի**»։ Ռուսերենը գործածում է «**Жаль, что** я не знаю китайского» կամ «**Хотел бы** я знать китайский»։ Անգլերենը գործածում է **wish** + անցյալ՝ *I **wish** I **knew** Chinese.*։ Ինչպես second conditional-ում, անցյալ ձևը նկարագրում է երևակայական ներկա։

**Wish, թե՞ hope։** **Hope**-ը այն բաների համար է, որոնք իսկապես կարող են պատահել՝ *I **hope** you **pass** the exam.*։ **Wish**-ը այն բաների համար է, որոնք հիմա ճիշտ չեն՝ *I **wish** I **were** taller.*։ **If only**-ն ավելի ուժեղ, ավելի հուզական **I wish** է՝ *If only it would stop raining!*։ Ուրիշների նյարդայնացնող սովորությունների համար գործածիր **would**՝ *I wish my brother **would** knock before he comes in.*`,
      `**В армянском для этого есть одно красивое слово.** Армянский выражает желание о настоящем словом **Երանի՜** и прошедшим сослагательным: «**Երանի՜** չինարեն **իմանայի**». Русский говорит «**Жаль, что** я не знаю китайского» или «**Хотел бы** я знать китайский». Английский использует **wish** + прошедшее: *I **wish** I **knew** Chinese.* Как и во втором условном, форма прошедшего описывает воображаемое настоящее.

**Wish или hope?** **Hope** — для того, что действительно может случиться: *I **hope** you **pass** the exam.* **Wish** — для того, что сейчас неправда: *I **wish** I **were** taller.* **If only** — более сильное и эмоциональное **I wish**: *If only it would stop raining!* Для чужих раздражающих привычек — **would**: *I wish my brother **would** knock before he comes in.*`,
    ),
    ask(2, {
      en: ["Complete: «I wish I ___ a dog.» (but I haven't got one)", ["have", "had", "will have"], "Wish + past for an imagined present: had."],
      hy: ["Լրացրու՝ «I wish I ___ a dog.» (բայց չունեմ)", ["have", "had", "will have"], "Wish + անցյալ՝ երևակայական ներկայի համար՝ had։"],
      ru: ["Дополни: «I wish I ___ a dog.» (но собаки нет)", ["have", "had", "will have"], "Wish + прошедшее для воображаемого настоящего: had."],
    }),
  ],
  "gerund-infinitive": [
    "forms mode=compare cols=gerinf enjoy_reading:want_to_read finish_working:decide_to_work avoid_eating_sugar:hope_to_eat_less_sugar mind_waiting:plan_to_wait keep_trying:learn_to_swim",
    closer(
      `**One verb, two meanings.** A few verbs can take both forms, but the meaning changes. *He **stopped smoking*** means he gave it up. *He **stopped to smoke*** means he stopped walking or working in order to smoke. *I **remember locking** the door* (I locked it, and I remember the moment); *Remember **to lock** the door* (don't forget to do it).

**There is no rule, only groups.** Verbs of liking and finishing often take **-ing** (*enjoy*, *finish*, *avoid*, *mind*, *keep*), while verbs about the future often take **to** (*want*, *decide*, *hope*, *plan*, *learn*). Russian uses the infinitive almost everywhere: «люблю **читать**», «закончил **работать**»; Armenian too: «սիրում եմ **կարդալ**». Learn the verbs in the table as pairs.`,
      `**Մեկ բայ՝ երկու իմաստ։** Մի քանի բայ կարող է ստանալ երկու ձևն էլ, բայց իմաստը փոխվում է։ *He **stopped smoking*** նշանակում է՝ թողեց ծխելը։ *He **stopped to smoke*** նշանակում է՝ կանգ առավ (քայլելը կամ աշխատանքը դադարեցրեց), որպեսզի ծխի։ *I **remember locking** the door* (կողպել եմ և հիշում եմ այդ պահը), *Remember **to lock** the door* (մի մոռացիր կողպել)։

**Կանոն չկա, կան միայն խմբեր։** Սիրելու և ավարտելու բայերը հաճախ ստանում են **-ing** (*enjoy*, *finish*, *avoid*, *mind*, *keep*), իսկ ապագայի մասին բայերը հաճախ՝ **to** (*want*, *decide*, *hope*, *plan*, *learn*)։ Ռուսերենը գրեթե ամենուր գործածում է անորոշ դերբայ՝ «люблю **читать**», «закончил **работать**», հայերենը նույնպես՝ «սիրում եմ **կարդալ**»։ Աղյուսակի բայերը սովորիր զույգերով։`,
      `**Один глагол — два смысла.** Некоторые глаголы берут обе формы, но смысл меняется. *He **stopped smoking*** — он бросил курить. *He **stopped to smoke*** — он остановился (перестал идти или работать), чтобы покурить. *I **remember locking** the door* (я запер и помню этот момент); *Remember **to lock** the door* (не забудь запереть).

**Правила нет, есть группы.** Глаголы любви и окончания часто берут **-ing** (*enjoy*, *finish*, *avoid*, *mind*, *keep*), а глаголы о будущем — часто **to** (*want*, *decide*, *hope*, *plan*, *learn*). Русский почти везде ставит инфинитив: «люблю **читать**», «закончил **работать**»; армянский тоже: «սիրում եմ **կարդալ**». Учи глаголы из таблицы парами.`,
    ),
    ask(1, {
      en: ["Complete: «Do you mind ___ the window?»", ["closing", "to close", "close"], "Mind takes -ing."],
      hy: ["Լրացրու՝ «Do you mind ___ the window?»", ["closing", "to close", "close"], "Mind-ը ստանում է -ing։"],
      ru: ["Дополни: «Do you mind ___ the window?»", ["closing", "to close", "close"], "Mind требует -ing."],
    }),
  ],
  "prepositions-plus-ing-8": [
    "sentence mode=order She is really good at drawing .",
    closer(
      `**After a preposition, always -ing.** In English, a verb right after a preposition takes **-ing**: *good **at drawing***, *interested **in learning***, *tired **of waiting***, *Thank you **for coming***. Russian here uses a noun or an infinitive: «хорошо **рисует**», «интересуюсь **изучением**», «устал **ждать**». Armenian often uses a verbal noun: «**նկարելու** մեջ լավն է».

**The tricky to.** Usually **to** before a verb is part of the infinitive, but in a few fixed phrases it is a preposition, and then **-ing** follows: *I look forward **to seeing** you*, *I'm used **to getting up** early*, *She's committed **to helping** others*. A quick test: if you can put a noun after **to** (*I look forward to the holidays*), the verb needs **-ing**.`,
      `**Նախդիրից հետո միշտ -ing։** Անգլերենում նախդիրից անմիջապես հետո բայը ստանում է **-ing**՝ *good **at drawing***, *interested **in learning***, *tired **of waiting***, *Thank you **for coming***։ Ռուսերենն այստեղ գործածում է գոյական կամ անորոշ դերբայ՝ «хорошо **рисует**», «интересуюсь **изучением**», «устал **ждать**»։ Հայերենը հաճախ գործածում է անորոշ դերբայի հոլովված ձև՝ «**նկարելու** մեջ լավն է»։

**Խորամանկ to-ն։** Սովորաբար բայից առաջ **to**-ն անորոշ դերբայի մաս է, բայց մի քանի կայուն արտահայտություններում այն նախդիր է, և դրանից հետո գալիս է **-ing**՝ *I look forward **to seeing** you*, *I'm used **to getting up** early*, *She's committed **to helping** others*։ Արագ ստուգում՝ եթե **to**-ից հետո կարող ես գոյական դնել (*I look forward to the holidays*), բային **-ing** է պետք։`,
      `**После предлога — всегда -ing.** В английском глагол сразу после предлога получает **-ing**: *good **at drawing***, *interested **in learning***, *tired **of waiting***, *Thank you **for coming***. Русский здесь берёт существительное или инфинитив: «хорошо **рисует**», «интересуюсь **изучением**», «устал **ждать**». Армянский часто использует отглагольную форму: «**նկարելու** մեջ լավն է».

**Коварное to.** Обычно **to** перед глаголом — часть инфинитива, но в нескольких устойчивых выражениях это предлог, и тогда идёт **-ing**: *I look forward **to seeing** you*, *I'm used **to getting up** early*, *She's committed **to helping** others*. Быстрая проверка: если после **to** можно поставить существительное (*I look forward to the holidays*), глаголу нужно **-ing**.`,
    ),
    ask(3, {
      en: ["Complete: «Thank you for ___ me.»", ["help", "to help", "helping"], "After a preposition (for): -ing."],
      hy: ["Լրացրու՝ «Thank you for ___ me.»", ["help", "to help", "helping"], "Նախդիրից (for) հետո՝ -ing։"],
      ru: ["Дополни: «Thank you for ___ me.»", ["help", "to help", "helping"], "После предлога (for): -ing."],
    }),
  ],
  "problem-solving-dialogues": [
    "sentence mode=order What if we asked the teacher for help ?",
    closer(
      `**Brainstorming has an inventor.** The American advertising man **Alex Osborn** made the word **brainstorming** popular in his 1953 book *Applied Imagination*. His main rule: first collect as many ideas as possible, and only then judge them. Criticising too early kills good ideas before anyone hears them.

**Soft suggestions.** English rarely gives a solution as an order in a group. It uses questions and soft forms: *What if we…?* (with the past: *What if we **asked**…?*), *How about **asking**…?*, *Why don't we ask…?*, *We could ask…*. To agree: *That's a good idea.* To disagree politely: *I see what you mean, but…* Armenian **Գուցե…**, **Իսկ եթե…** and Russian **Может, …?**, **А что, если…?** do the same job.`,
      `**Ուղեղային գրոհն ունի հեղինակ։** Ամերիկացի գովազդագործ **Ալեքս Օսբորնը** **brainstorming** բառը տարածեց իր 1953 թվականի *Applied Imagination* գրքում։ Նրա գլխավոր կանոնը՝ նախ հավաքիր հնարավորինս շատ գաղափարներ և միայն հետո գնահատիր դրանք։ Չափազանց վաղ քննադատությունը լավ գաղափարները սպանում է՝ նախքան որևէ մեկը կլսի դրանք։

**Մեղմ առաջարկներ։** Խմբում անգլերենը հազվադեպ է լուծումը հրամանի ձևով տալիս։ Այն գործածում է հարցեր և մեղմ ձևեր՝ *What if we…?* (անցյալով՝ *What if we **asked**…?*), *How about **asking**…?*, *Why don't we ask…?*, *We could ask…*։ Համաձայնելու համար՝ *That's a good idea.*, քաղաքավարի չհամաձայնելու համար՝ *I see what you mean, but…*։ Հայերեն **Գուցե…**, **Իսկ եթե…** և ռուսերեն **Может, …?**, **А что, если…?** անում են նույն գործը։`,
      `**У мозгового штурма есть автор.** Американский рекламщик **Алекс Осборн** сделал популярным слово **brainstorming** в книге *Applied Imagination* 1953 года. Его главное правило: сначала собери как можно больше идей и только потом оценивай. Ранняя критика убивает хорошие идеи, прежде чем их кто-то услышит.

**Мягкие предложения.** В группе английский редко предлагает решение в форме приказа. Он использует вопросы и мягкие формы: *What if we…?* (с прошедшим: *What if we **asked**…?*), *How about **asking**…?*, *Why don't we ask…?*, *We could ask…*. Согласиться: *That's a good idea.* Вежливо не согласиться: *I see what you mean, but…* Армянские **Գուցե…**, **Իսկ եթե…** и русские **Может, …?**, **А что, если…?** делают ту же работу.`,
    ),
    ask(2, {
      en: ["Complete: «How about ___ a poster for the school?»", ["make", "making", "to make"], "How about + -ing."],
      hy: ["Լրացրու՝ «How about ___ a poster for the school?»", ["make", "making", "to make"], "How about + -ing։"],
      ru: ["Дополни: «How about ___ a poster for the school?»", ["make", "making", "to make"], "How about + -ing."],
    }),
  ],
  "natural-disasters": [
    "forms mode=compare cols=when 79_AD:Vesuvius_buries_Pompeii 7_December_1988:the_Spitak_earthquake 26_December_2004:the_Indian_Ocean_tsunami",
    closer(
      `**7 December 1988.** The **Spitak earthquake** in northern Armenia had a magnitude of 6.8 and killed about 25,000 people; Spitak was almost completely destroyed, and Gyumri and Vanadzor were badly damaged. Help came from more than a hundred countries, and the disaster changed building rules across the region. Armenia remembers the victims every year on 7 December.

**A harbour wave.** **Tsunami** is a Japanese word: **tsu** means "harbour" and **nami** means "wave", because fishermen at sea often did not notice it, then came home to a destroyed harbour. News reports about disasters use the passive, because nature is the doer: *Thousands of homes **were destroyed***, *Aid **is being sent***.`,
      `**1988 թվականի դեկտեմբերի 7։** Հյուսիսային Հայաստանում **Սպիտակի երկրաշարժն** ուներ 6,8 մագնիտուդ և խլեց մոտ 25 000 մարդու կյանք․ Սպիտակը գրեթե ամբողջովին ավերվեց, իսկ Գյումրին և Վանաձորը ծանր վնասվեցին։ Օգնություն եկավ ավելի քան հարյուր երկրից, և աղետը փոխեց շինարարական կանոններն ամբողջ տարածաշրջանում։ Հայաստանը զոհերին հիշում է ամեն տարի՝ դեկտեմբերի 7-ին։

**Նավահանգստի ալիք։** **Tsunami**-ն ճապոներեն բառ է՝ **tsu** նշանակում է «նավահանգիստ», **nami**՝ «ալիք», որովհետև ծովում գտնվող ձկնորսները հաճախ չէին նկատում այն, իսկ տուն վերադառնալիս գտնում էին ավերված նավահանգիստ։ Աղետների մասին լուրերը գործածում են կրավորական, որովհետև գործողը բնությունն է՝ *Thousands of homes **were destroyed***, *Aid **is being sent***։`,
      `**7 декабря 1988 года.** **Спитакское землетрясение** на севере Армении имело магнитуду 6,8 и унесло около 25 000 жизней; Спитак был почти полностью разрушен, Гюмри и Ванадзор сильно пострадали. Помощь пришла более чем из ста стран, а катастрофа изменила строительные нормы во всём регионе. Армения вспоминает погибших каждый год 7 декабря.

**Волна в гавани.** **Tsunami** — японское слово: **tsu** — «гавань», **nami** — «волна», потому что рыбаки в море часто её не замечали, а вернувшись, находили разрушенную гавань. Новости о катастрофах используют пассив, ведь действует природа: *Thousands of homes **were destroyed***, *Aid **is being sent***.`,
    ),
    ask(1, {
      en: ["Complete the news: «Two bridges ___ by the flood yesterday.»", ["were damaged", "damaged", "have damage"], "Nature is the doer: past passive."],
      hy: ["Լրացրու լուրը՝ «Two bridges ___ by the flood yesterday.»", ["were damaged", "damaged", "have damage"], "Գործողը բնությունն է՝ անցյալի կրավորական։"],
      ru: ["Дополни новость: «Two bridges ___ by the flood yesterday.»", ["were damaged", "damaged", "have damage"], "Действует природа: пассив в прошедшем."],
    }),
  ],
  "lake-sevan-baikal": [
    "forms mode=compare cols=lakes height:about_1900_m:about_455_m depth:about_80_m:over_1600_m area:about_1250_km²:about_31_700_km² famous_animal:the_ishkhan_trout:the_nerpa_seal",
    closer(
      `**The oldest and deepest lake.** **Baikal** is about 25 million years old, the oldest lake on Earth, and over 1,600 metres deep. It is home to the **nerpa**, one of the very few seals in the world that live only in fresh water. **Sevan** is much smaller and shallower but sits much higher, at about 1,900 metres, which makes it one of the largest high mountain lakes in the world.

**An island that became a peninsula.** The monastery of **Sevanavank** was built in 874 on an island in Lake Sevan. When the water level fell by about 19 metres in the 20th century, the island became a peninsula, and today you can walk to it. Compare the two lakes with the table: *Baikal is much **deeper than** Sevan, but Sevan is **higher**.*`,
      `**Ամենահին և ամենախոր լիճը։** **Բայկալը** մոտ 25 միլիոն տարեկան է՝ Երկրի ամենահին լիճը, և ավելի քան 1600 մետր խորություն ունի։ Այնտեղ ապրում է **ներպան**՝ աշխարհի այն շատ քիչ փոկերից մեկը, որոնք ապրում են միայն քաղցրահամ ջրում։ **Սևանը** շատ ավելի փոքր և ծանծաղ է, բայց գտնվում է շատ ավելի բարձր՝ մոտ 1900 մետրի վրա, ինչը նրան դարձնում է աշխարհի ամենամեծ բարձրլեռնային լճերից մեկը։

**Կղզի, որ դարձավ թերակղզի։** **Սևանավանքը** կառուցվել է 874 թվականին Սևանա լճի կղզու վրա։ Երբ 20-րդ դարում ջրի մակարդակն իջավ մոտ 19 մետրով, կղզին դարձավ թերակղզի, և այսօր կարելի է ոտքով հասնել այնտեղ։ Աղյուսակի օգնությամբ համեմատիր երկու լճերը՝ *Baikal is much **deeper than** Sevan, but Sevan is **higher**.*`,
      `**Самое древнее и глубокое озеро.** **Байкалу** около 25 миллионов лет — это древнейшее озеро на Земле, и его глубина больше 1600 метров. Там живёт **нерпа** — один из очень немногих тюленей в мире, обитающих только в пресной воде. **Севан** гораздо меньше и мельче, но лежит гораздо выше, примерно на 1900 метрах, и это одно из крупнейших высокогорных озёр мира.

**Остров, ставший полуостровом.** Монастырь **Севанаванк** построили в 874 году на острове озера Севан. Когда в XX веке уровень воды упал примерно на 19 метров, остров превратился в полуостров, и теперь к нему можно дойти пешком. Сравни два озера по таблице: *Baikal is much **deeper than** Sevan, but Sevan is **higher**.*`,
    ),
    ask(2, {
      en: ["Which sentence is true?", ["Sevan is deeper than Baikal.", "Baikal is much older than Sevan.", "Baikal is higher than Sevan."], "Baikal is about 25 million years old."],
      hy: ["Ո՞ր նախադասությունն է ճիշտ։", ["Sevan is deeper than Baikal.", "Baikal is much older than Sevan.", "Baikal is higher than Sevan."], "Բայկալը մոտ 25 միլիոն տարեկան է։"],
      ru: ["Какое предложение верно?", ["Sevan is deeper than Baikal.", "Baikal is much older than Sevan.", "Baikal is higher than Sevan."], "Байкалу около 25 миллионов лет."],
    }),
  ],
  "ecology-vocabulary-8": [
    "sentence mode=order Thin plastic bags have been banned in many countries .",
    closer(
      `**Bans that work.** In 2002 **Bangladesh** became the first country to ban thin plastic bags, after they blocked drains and made floods worse. Since then dozens of countries have done the same. In Armenia, thin plastic bags have been banned in shops since 2022. Notice the tense: *have been banned* is the **present perfect passive**, perfect for news about laws.

**Eco- is Greek for home.** **Ecology** comes from the Greek **oikos**, "house, home", and **-logia**, "study": the study of our common home. The same **oikos** is in **economy**, "managing the home". Armenian **էկոլոգիա** and Russian **экология** borrowed the word, and Armenian also says **բնապահպանություն**, "protecting nature".`,
      `**Արգելքներ, որ աշխատում են։** 2002 թվականին **Բանգլադեշը** դարձավ առաջին երկիրը, որ արգելեց բարակ պոլիէթիլենային տոպրակները, երբ դրանք խցանում էին ջրահեռացման խողովակները և ուժեղացնում ջրհեղեղները։ Այդ ժամանակից ի վեր տասնյակ երկրներ նույնն են արել։ Հայաստանում բարակ պոլիէթիլենային տոպրակներն արգելված են խանութներում 2022 թվականից։ Ուշադրություն դարձրու ժամանակին՝ *have been banned*-ը **present perfect passive** է, որը կատարյալ է օրենքների մասին լուրերի համար։

**Eco-ն հունարեն նշանակում է տուն։** **Ecology**-ն ծագում է հունարեն **oikos**՝ «տուն» և **-logia**՝ «ուսմունք» բառերից՝ մեր ընդհանուր տան գիտություն։ Նույն **oikos**-ը կա **economy**-ի մեջ՝ «տնտեսություն վարել»։ Հայերեն **էկոլոգիա**-ն և ռուսերեն **экология**-ն փոխառել են բառը, իսկ հայերենն ասում է նաև **բնապահպանություն**։`,
      `**Запреты, которые работают.** В 2002 году **Бангладеш** первой в мире запретила тонкие пластиковые пакеты: они забивали водостоки и усиливали наводнения. С тех пор так поступили десятки стран. В Армении тонкие пластиковые пакеты запрещены в магазинах с 2022 года. Обрати внимание на время: *have been banned* — это **present perfect passive**, идеальный для новостей о законах.

**Eco — по-гречески «дом».** **Ecology** происходит от греческих **oikos** — «дом» и **-logia** — «учение»: наука о нашем общем доме. То же **oikos** есть в **economy** — «ведение хозяйства». Армянское **էկոլոգիա** и русское **экология** заимствовали слово, а армянский говорит ещё **բնապահպանություն** — «охрана природы».`,
    ),
    ask(3, {
      en: ["What does the Greek oikos in «ecology» mean?", ["nature", "science", "home"], "Oikos = house, home."],
      hy: ["Ի՞նչ է նշանակում «ecology» բառի հունարեն oikos-ը։", ["nature", "science", "home"], "Oikos՝ տուն։"],
      ru: ["Что значит греческое oikos в слове «ecology»?", ["nature", "science", "home"], "Oikos — дом."],
    }),
  ],
  "jobs-of-future": [
    "sentence mode=order In twenty years many people will be working from home .",
    closer(
      `**Robot means forced work.** The word **robot** first appeared in the 1920 play *R.U.R.* by the Czech writer Karel Čapek; his brother Josef suggested it. It comes from the Czech **robota**, "forced labour". And **computer** was once a job title: from the 17th century until the 1940s, a computer was a person, often a woman, who did calculations by hand.

**Future continuous and future perfect.** To talk about the future of work, *will be* + **-ing** describes what will be going on at a future time: *In 2045 many people **will be working** from home.* *Will have* + past participle describes what will be finished by then: *By 2045 robots **will have replaced** many drivers.* Armenian and Russian manage with one future form and words like **մինչև** / **к тому времени**.`,
      `**Ռոբոտ նշանակում է հարկադիր աշխատանք։** **Robot** բառն առաջին անգամ հայտնվել է չեխ գրող Կարել Չապեկի 1920 թվականի *R.U.R.* պիեսում․ այն առաջարկել է նրա եղբայր Յոզեֆը։ Բառը ծագում է չեխերեն **robota**՝ «հարկադիր աշխատանք» բառից։ Իսկ **computer**-ը ժամանակին մասնագիտության անուն էր․ 17-րդ դարից մինչև 1940-ական թվականները computer-ը մարդ էր, հաճախ կին, որը ձեռքով հաշվարկներ էր անում։

**Future continuous և future perfect։** Աշխատանքի ապագայի մասին խոսելիս *will be* + **-ing**-ը նկարագրում է, թե ինչ է կատարվելու ապագայի որոշակի պահին՝ *In 2045 many people **will be working** from home.*։ *Will have* + անցյալ դերբայը նկարագրում է, թե ինչ ավարտված կլինի մինչ այդ՝ *By 2045 robots **will have replaced** many drivers.*։ Հայերենն ու ռուսերենը յոլա են գնում մեկ ապառնի ձևով և **մինչև** / **к тому времени** բառերով։`,
      `**Робот значит «подневольный труд».** Слово **robot** впервые появилось в пьесе чешского писателя Карела Чапека *R.U.R.* 1920 года; его предложил брат писателя Йозеф. Оно происходит от чешского **robota** — «подневольный труд». А **computer** когда-то был профессией: с XVII века до 1940-х вычислителем называли человека, часто женщину, который делал расчёты вручную.

**Future continuous и future perfect.** Говоря о будущем профессий, *will be* + **-ing** описывает то, что будет происходить в определённый момент будущего: *In 2045 many people **will be working** from home.* *Will have* + причастие описывает то, что будет закончено к тому времени: *By 2045 robots **will have replaced** many drivers.* Армянский и русский обходятся одной формой будущего и словами **մինչև** / **к тому времени**.`,
    ),
    ask(1, {
      en: ["Where does the word «robot» come from?", ["Czech robota, forced labour", "English robbery", "Latin rota, wheel"], "Karel Čapek's play R.U.R., 1920."],
      hy: ["Որտեղի՞ց է «robot» բառը։", ["Czech robota, forced labour", "English robbery", "Latin rota, wheel"], "Կարել Չապեկի R.U.R. պիեսը, 1920։"],
      ru: ["Откуда слово «robot»?", ["Czech robota, forced labour", "English robbery", "Latin rota, wheel"], "Пьеса Карела Чапека R.U.R., 1920."],
    }),
  ],
  "writing-cv": [
    "sentence mode=order keep=1 I have been volunteering at the library since 2024 .",
    closer(
      `**Leonardo's CV.** Around 1482 Leonardo da Vinci wrote a letter to the Duke of Milan listing what he could do: build bridges, design weapons, and, almost at the end, paint. It is often called one of the first CVs in history. His trick still works: put the skills the reader needs first.

**Strong verbs, short lines.** A CV uses short lines that start with action verbs in the past simple: *organised a charity concert*, *led a team of five*, *created the school website*. For things that are still going on, use the present perfect continuous: *I have been volunteering at the library since 2024.* Avoid *I* at the start of every line; English CVs often leave it out.`,
      `**Լեոնարդոյի CV-ն։** Մոտ 1482 թվականին Լեոնարդո դա Վինչին նամակ գրեց Միլանի դքսին՝ թվարկելով, թե ինչ կարող է անել՝ կամուրջներ կառուցել, զենքեր նախագծել և, գրեթե վերջում, նկարել։ Այն հաճախ անվանում են պատմության առաջին CV-ներից մեկը։ Նրա հնարքը դեռ աշխատում է՝ առաջինը դիր այն հմտությունները, որոնք պետք են ընթերցողին։

**Ուժեղ բայեր, կարճ տողեր։** CV-ն գործածում է կարճ տողեր, որոնք սկսվում են գործողության բայերով՝ past simple-ով՝ *organised a charity concert*, *led a team of five*, *created the school website*։ Դեռ շարունակվող բաների համար գործածիր present perfect continuous՝ *I have been volunteering at the library since 2024.*։ Խուսափիր ամեն տողը *I*-ով սկսելուց․ անգլերեն CV-ներում այն հաճախ բաց է թողնվում։`,
      `**Резюме Леонардо.** Около 1482 года Леонардо да Винчи написал письмо герцогу Миланскому, перечислив, что умеет: строить мосты, конструировать оружие и, почти в конце, писать картины. Его часто называют одним из первых резюме в истории. Его приём работает до сих пор: ставь первыми те навыки, которые нужны читателю.

**Сильные глаголы, короткие строки.** В CV короткие строки, которые начинаются с глаголов действия в past simple: *organised a charity concert*, *led a team of five*, *created the school website*. Для того, что продолжается, — present perfect continuous: *I have been volunteering at the library since 2024.* Не начинай каждую строку с *I*: в английских CV его часто опускают.`,
    ),
    ask(2, {
      en: ["Which line looks best in a CV?", ["I was making the school website and it was good.", "Created the school website.", "Website of school, made by me."], "Short line, action verb in the past simple."],
      hy: ["Ո՞ր տողն է լավագույնը CV-ում։", ["I was making the school website and it was good.", "Created the school website.", "Website of school, made by me."], "Կարճ տող՝ գործողության բայով՝ past simple։"],
      ru: ["Какая строка лучше всего смотрится в CV?", ["I was making the school website and it was good.", "Created the school website.", "Website of school, made by me."], "Короткая строка с глаголом действия в past simple."],
    }),
  ],
  "year-8-review": [
    "tense name=past-perfect aspects=simple,continuous,perfect,perfect-continuous times=past,present,future",
    closer(
      `**This year in one line.** Grade 8 filled in the past: the **past perfect** for the past of the past, reported speech that moves tenses back, and the second conditional that uses past forms for imagined situations. Switch the line above to **Past** and walk through the four aspects, then to **Future** to see the forms you will need in grade 9.

**Five checks before you hand in a text.** Past perfect for the earlier action (*had left*); tenses moved back after *said* (*was*, *would*, *had*); no question order in reported questions (*asked where I lived*); **were** and **would** in the second conditional; and **-ing** after prepositions (*good at drawing*). If those five are right, your English is in very good shape.`,
      `**Այս տարին՝ մեկ գծի վրա։** 8-րդ դասարանը լրացրեց անցյալը՝ **past perfect**՝ անցյալի անցյալի համար, անուղղակի խոսք, որը ժամանակները տեղափոխում է հետ, և second conditional, որն երևակայական իրավիճակների համար գործածում է անցյալ ձևեր։ Վերևի գծում ընտրիր **Անցյալ** և անցիր չորս կերպերով, հետո՝ **Ապառնի**, որ տեսնես այն ձևերը, որոնք պետք կգան 9-րդ դասարանում։

**Հինգ ստուգում՝ տեքստը հանձնելուց առաջ։** Past perfect՝ ավելի վաղ գործողության համար (*had left*), *said*-ից հետո հետ տեղափոխված ժամանակներ (*was*, *would*, *had*), անուղղակի հարցերում՝ ոչ հարցական բառակարգ (*asked where I lived*), second conditional-ում՝ **were** և **would**, և նախդիրներից հետո՝ **-ing** (*good at drawing*)։ Եթե այս հինգը ճիշտ են, քո անգլերենը շատ լավ վիճակում է։`,
      `**Этот год на одной линии.** 8 класс заполнил прошлое: **past perfect** для прошлого в прошлом, косвенная речь со сдвигом времён и второе условное, где формы прошедшего описывают воображаемое. Переключи линию выше на **Прошлое** и пройди по четырём аспектам, а потом на **Будущее** — посмотреть формы, которые понадобятся в 9 классе.

**Пять проверок перед сдачей текста.** Past perfect для более раннего действия (*had left*); сдвиг времён после *said* (*was*, *would*, *had*); никакого вопросительного порядка в косвенных вопросах (*asked where I lived*); **were** и **would** во втором условном; **-ing** после предлогов (*good at drawing*). Если эти пять в порядке, твой английский в отличной форме.`,
    ),
    ask(2, {
      en: ["Which sentence is correct?", ["She asked me where did I go.", "She asked me where I had gone.", "She asked me where had I gone?"], "Reported question: normal word order, tense moved back."],
      hy: ["Ո՞ր նախադասությունն է ճիշտ։", ["She asked me where did I go.", "She asked me where I had gone.", "She asked me where had I gone?"], "Անուղղակի հարց՝ սովորական բառակարգ, ժամանակը տեղափոխված հետ։"],
      ru: ["Какое предложение верно?", ["She asked me where did I go.", "She asked me where I had gone.", "She asked me where had I gone?"], "Косвенный вопрос: обычный порядок, время сдвинуто назад."],
    }),
  ],
};
