import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade4: VisualMap[number] = {
  "describing-people": [
    "forms mode=compare cols=isgot tall:long_curly_hair young:blue_eyes of_medium_height:a_beard thin:glasses",
    closer(
      `**One adjective with two spellings.** English adjectives never change, with one famous exception: **blond** for a man and **blonde** for a woman, borrowed from French with both forms. Other hair words are simple: **fair** means light, and the British often call red hair **ginger**.

**Is or has got? Ask a quick question.** If you can hold it or point to it on the body (hair, eyes, a beard, glasses), use **has got**. If it describes the whole person (tall, young, thin), use **is**. Russian says «у неё длинные волосы», Armenian «նա երկար մազեր ունի»: Armenian, like English, uses «have». Hide a column above and make sentences about someone you know.`,
      `**Ածական՝ երկու ուղղագրությամբ։** Անգլերեն ածականներն երբեք չեն փոխվում, մեկ հայտնի բացառությամբ՝ **blond**՝ տղամարդու և **blonde**՝ կնոջ համար, որոնք փոխառված են ֆրանսերենից երկու ձևով։ Մազերի մյուս բառերը պարզ են․ **fair** նշանակում է բաց գույնի, իսկ բրիտանացիները շիկակարմիր մազերը հաճախ անվանում են **ginger**։

**Is, թե՞ has got։ Տուր արագ հարց։** Եթե կարող ես այն բռնել կամ ցույց տալ մարմնի վրա (մազեր, աչքեր, մորուք, ակնոց), գործածիր **has got**։ Եթե այն նկարագրում է ամբողջ մարդուն (բարձրահասակ, երիտասարդ, նիհար), գործածիր **is**։ Հայերենն ասում է «նա երկար մազեր ունի», ռուսերենը՝ «у неё длинные волосы»․ հայերենը, ինչպես անգլերենը, գործածում է «ունենալ»։ Թաքցրու վերևի սյունակներից մեկը և նախադասություններ կազմիր քո ծանոթի մասին։`,
      `**Прилагательное с двумя написаниями.** Английские прилагательные никогда не меняются, с одним знаменитым исключением: **blond** о мужчине и **blonde** о женщине — оба слова взяты из французского. Остальные слова о волосах просты: **fair** — светлые, а рыжие волосы британцы часто называют **ginger**.

**Is или has got? Задай быстрый вопрос.** Если это можно взять в руки или показать на теле (волосы, глаза, борода, очки) — **has got**. Если это описывает всего человека (высокий, молодой, худой) — **is**. По-русски «у неё длинные волосы», по-армянски «նա երկար մազեր ունի»: армянский, как английский, использует «иметь». Спрячь столбец выше и составь предложения о знакомом человеке.`,
    ),
    ask(2, {
      en: ["Choose the correct sentence.", ["She is long hair.", "She has got long hair.", "She has got tall."], "Hair is something on the body: has got."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["She is long hair.", "She has got long hair.", "She has got tall."], "Մազերը մարմնի վրա են՝ has got։"],
      ru: ["Выбери правильное предложение.", ["She is long hair.", "She has got long hair.", "She has got tall."], "Волосы — это то, что на теле: has got."],
    }),
  ],
  "character-words": [
    "forms mode=compare cols=opposite kind:unkind friendly:unfriendly polite:rude hard-working:lazy brave:shy",
    closer(
      `**Un- and ան- are relatives.** English **un**kind and Armenian **ան**բարի use the same old little part that means «not», and Russian **не**добрый has a cousin of it too. All three come from one ancient language. So when you see un- at the start of an English word, think «ան-» or «не-».

**Words change their meaning.** Seven hundred years ago **nice** meant «silly», from Latin «nescius», «not knowing». Slowly it became «pleasant» and then «kind». Today «She is nice» is a compliment. Hide a column above and say the opposite of each word.`,
      `**Un- և ան- մասնիկներն ազգականներ են։** Անգլերեն **un**kind-ը և հայերեն **ան**բարին գործածում են նույն հին մասնիկը, որը նշանակում է «ոչ», իսկ ռուսերեն **не**добрый-ն էլ ունի դրա զարմիկը։ Երեքն էլ գալիս են մեկ հնագույն լեզվից։ Ուրեմն, երբ անգլերեն բառի սկզբում un- ես տեսնում, մտածիր «ան-»-ի կամ «не-»-ի մասին։

**Բառերը փոխում են իմաստը։** Յոթ հարյուր տարի առաջ **nice** նշանակում էր «հիմար»՝ լատիներեն «nescius»-ից՝ «չիմացող»։ Աստիճանաբար այն դարձավ «հաճելի», հետո՝ «բարի»։ Այսօր «She is nice»-ը հաճոյախոսություն է։ Թաքցրու վերևի սյունակներից մեկը և ասա յուրաքանչյուր բառի հականիշը։`,
      `**Un- и не- — родственники.** Английское **un**kind и русское **не**добрый используют одну древнюю частичку со значением «не», а у армянского **ան**բարի она тоже своя родственница. Все три пришли из одного древнего языка. Так что, увидев un- в начале английского слова, вспомни «не-».

**Слова меняют значение.** Семьсот лет назад **nice** значило «глупый» — от латинского «nescius», «незнающий». Постепенно оно стало значить «приятный», а потом «добрый». Сегодня «She is nice» — комплимент. Спрячь столбец выше и назови антоним к каждому слову.`,
    ),
    ask(3, {
      en: ["Which question is about character?", ["What does he look like?", "How old is he?", "What is he like?"], "What is he like? asks about character."],
      hy: ["Ո՞ր հարցն է բնավորության մասին։", ["What does he look like?", "How old is he?", "What is he like?"], "What is he like?-ը հարցնում է բնավորության մասին։"],
      ru: ["Какой вопрос о характере?", ["What does he look like?", "How old is he?", "What is he like?"], "What is he like? — вопрос о характере."],
    }),
  ],
  possessives: [
    "forms mode=persons lang=en [my] [your] [his],_[her],_[its] [our] [your] [their]",
    closer(
      `**Armenian can put «my» at the end.** English always says the owner word first: **my** book, **your** book. Armenian can do that («իմ գիրքը») or add a tiny ending: գիրք**ս** (my book), գիրք**դ** (your book). Russian puts it first like English: «**моя** книга». Look at the table: each person has its own word.

**Many owners: s'.** One girl's room is «the **girl's** room». Two girls share «the **girls'** room»: the plural already has an s, so only the apostrophe is added. But irregular plurals keep **'s**: «the children's toys», «the men's hats».`,
      `**Հայերենը «իմ»-ը կարող է դնել վերջում։** Անգլերենը տիրոջ բառը միշտ դնում է առաջ՝ **my** book, **your** book։ Հայերենը կարող է այդպես անել («իմ գիրքը») կամ ավելացնել փոքրիկ վերջավորություն՝ գիրք**ս**, գիրք**դ**։ Ռուսերենն այն դնում է առաջ, ինչպես անգլերենը՝ «**моя** книга»։ Նայիր աղյուսակին․ յուրաքանչյուր դեմք ունի իր բառը։

**Շատ տերեր՝ s'։** Մեկ աղջկա սենյակը «the **girl's** room» է։ Երկու աղջիկների ընդհանուր սենյակը՝ «the **girls'** room»․ հոգնակին արդեն s ունի, ուստի ավելանում է միայն ապաթարցը։ Բայց անկանոն հոգնակիները պահում են **'s**-ը՝ «the children's toys», «the men's hats»։`,
      `**Армянский может ставить «мой» в конце.** Английский всегда ставит слово-владельца первым: **my** book, **your** book. Армянский может так же («իմ գիրքը»), а может добавить крошечное окончание: գիրք**ս** (моя книга), գիրք**դ** (твоя книга). Русский ставит его впереди, как английский: «**моя** книга». Посмотри на таблицу: у каждого лица своё слово.

**Много владельцев: s'.** Комната одной девочки — «the **girl's** room». Общая комната двух девочек — «the **girls'** room»: во множественном числе s уже есть, поэтому добавляется только апостроф. Но неправильные формы сохраняют **'s**: «the children's toys», «the men's hats».`,
    ),
    ask(2, {
      en: ["My two brothers share a room. It is…", ["my brother's room", "my brothers' room", "my brothers's room"], "Plural owners ending in -s: just add an apostrophe."],
      hy: ["Իմ երկու եղբայրներն ունեն ընդհանուր սենյակ։ Դա…", ["my brother's room", "my brothers' room", "my brothers's room"], "-s-ով ավարտվող հոգնակի տերեր՝ ավելացրու միայն ապաթարց։"],
      ru: ["У двух моих братьев общая комната. Это…", ["my brother's room", "my brothers' room", "my brothers's room"], "Владельцы во мн. числе на -s: добавь только апостроф."],
    }),
  ],
  jobs: [
    "forms mode=compare cols=aan a_doctor:an_engineer a_pilot:an_artist a_farmer:an_actor a_vet:an_office_worker",
    closer(
      `**English always needs «a» with a job.** Russian says «Она врач», Armenian «Նա բժիշկ է», with no extra word. English must say «She is **a** doctor», «He is **an** engineer». Without «a» the sentence sounds broken to an English ear. Hide a column above and read the jobs with a or an.

**Where does «vet» come from?** **Vet** is short for **veterinarian**, from Latin «veterinae», «working animals» such as horses and oxen. The first vet schools opened in France in the 1760s, to keep farm and army animals healthy. Today vets treat cats, dogs, parrots and even zoo elephants.`,
      `**Անգլերենին մասնագիտության հետ միշտ «a» է պետք։** Հայերենն ասում է «Նա բժիշկ է», ռուսերենը՝ «Она врач»՝ առանց լրացուցիչ բառի։ Անգլերենը պետք է ասի «She is **a** doctor», «He is **an** engineer»։ Առանց «a»-ի նախադասությունն անգլիացու ականջին կոտրված է հնչում։ Թաքցրու վերևի սյունակներից մեկը և կարդա մասնագիտությունները a-ով կամ an-ով։

**Որտեղի՞ց է «vet» բառը։** **Vet**-ը **veterinarian**-ի (անասնաբույժ) կրճատ ձևն է՝ լատիներեն «veterinae»-ից՝ «աշխատող կենդանիներ», օրինակ՝ ձիեր և եզներ։ Անասնաբուժական առաջին դպրոցները բացվել են Ֆրանսիայում 1760-ականներին՝ գյուղատնտեսական և բանակի կենդանիներին առողջ պահելու համար։ Այսօր անասնաբույժները բուժում են կատուներ, շներ, թութակներ և նույնիսկ կենդանաբանական այգու փղեր։`,
      `**Английскому с профессией всегда нужно «a».** По-русски «Она врач», по-армянски «Նա բժիշկ է» — без лишних слов. По-английски обязательно «She is **a** doctor», «He is **an** engineer». Без «a» предложение режет англичанину слух. Спрячь столбец выше и прочитай профессии с a или an.

**Откуда слово «vet»?** **Vet** — сокращение от **veterinarian** (ветеринар), от латинского «veterinae», «рабочий скот»: лошади, волы. Первые ветеринарные школы открылись во Франции в 1760-х годах, чтобы лечить животных ферм и армии. Сегодня ветеринары лечат кошек, собак, попугаев и даже слонов в зоопарке.`,
    ),
    ask(3, {
      en: ["Choose the correct sentence.", ["My mum is teacher.", "My mum is an teacher.", "My mum is a teacher."], "Jobs need a or an; teacher starts with a consonant sound."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["My mum is teacher.", "My mum is an teacher.", "My mum is a teacher."], "Մասնագիտությունների հետ a կամ an է պետք, teacher-ը սկսվում է բաղաձայն հնչյունով։"],
      ru: ["Выбери правильное предложение.", ["My mum is teacher.", "My mum is an teacher.", "My mum is a teacher."], "С профессией нужно a или an; teacher начинается с согласного звука."],
    }),
  ],
  "adjectives-opposites": [
    "forms mode=compare cols=opposite full:empty heavy:light clean:dirty easy:difficult strong:weak",
    closer(
      `**Adjectives that never change.** Russian adjectives change all the time: большой дом, большая машина, большие дома. English adjectives stay the same: a **big** house, a **big** car, two **big** houses. Armenian is like English here: «մեծ տուն», «մեծ տներ». So never say «bigs» or «reds».

**Light has two opposites.** «Light» is the opposite of **heavy** (a light bag) and of **dark** (a light room). «Old» is the opposite of **new** (an old car) and **young** (an old man). When you learn an adjective, learn its opposite in a phrase: «a heavy bag, a light bag». Hide a column above and say the pairs.`,
      `**Ածականներ, որոնք երբեք չեն փոխվում։** Ռուսերեն ածականներն անընդհատ փոխվում են՝ большой дом, большая машина, большие дома։ Անգլերեն ածականները մնում են նույնը՝ a **big** house, a **big** car, two **big** houses։ Այստեղ հայերենը նման է անգլերենին՝ «մեծ տուն», «մեծ տներ»։ Ուրեմն երբեք մի՛ ասա «bigs» կամ «reds»։

**Light-ն ունի երկու հականիշ։** «Light»-ը **heavy**-ի (թեթև պայուսակ) և **dark**-ի (լուսավոր սենյակ) հականիշն է։ «Old»-ը **new**-ի (հին մեքենա) և **young**-ի (ծեր մարդ) հականիշն է։ Ածական սովորելիս սովորիր նաև հականիշը՝ արտահայտության մեջ՝ «a heavy bag, a light bag»։ Թաքցրու վերևի սյունակներից մեկը և ասա զույգերը։`,
      `**Прилагательные, которые не меняются.** Русские прилагательные меняются постоянно: большой дом, большая машина, большие дома. Английские остаются прежними: a **big** house, a **big** car, two **big** houses. Армянский здесь похож на английский: «մեծ տուն», «մեծ տներ». Так что никогда не говори «bigs» или «reds».

**У light два антонима.** «Light» — антоним и к **heavy** (лёгкая сумка), и к **dark** (светлая комната). «Old» — антоним к **new** (старая машина) и к **young** (пожилой человек). Учи прилагательное вместе с антонимом во фразе: «a heavy bag, a light bag». Спрячь столбец выше и назови пары.`,
    ),
    ask(1, {
      en: ["Correct the mistake: «I have got two reds pencils.»", ["I have got two red pencils.", "I have got two red pencil.", "I have got two pencils reds."], "Adjectives never take -s."],
      hy: ["Ուղղիր սխալը․ «I have got two reds pencils.»", ["I have got two red pencils.", "I have got two red pencil.", "I have got two pencils reds."], "Ածականներն երբեք -s չեն ստանում։"],
      ru: ["Исправь ошибку: «I have got two reds pencils.»", ["I have got two red pencils.", "I have got two red pencil.", "I have got two pencils reds."], "Прилагательные никогда не получают -s."],
    }),
  ],
  "my-best-friend": [
    "sentence mode=order keep=1 I like Narek because he always helps me .",
    closer(
      `**«Friend» comes from «love».** The old English word «freond» meant «a person who loves you»; it came from a verb meaning «to love». The words «free» and «Friday» are distant relatives. Armenian «ընկեր» means «one who eats with you», from «կեր», food: a friend is someone you share bread with.

**Because answers why.** In your text, **and** adds, **but** shows a contrast, and **because** gives a reason. A text about a friend is much better with a reason: «I like Narek **because** he always helps me». Build the sentence above, then write your own with because.`,
      `**«Friend»-ը գալիս է «սեր»-ից։** Հին անգլերեն «freond» բառը նշանակում էր «քեզ սիրող մարդ», այն գալիս էր «սիրել» նշանակող բայից։ «Free» և «Friday» բառերը նրա հեռավոր ազգականներն են։ Հայերեն «ընկեր»-ը նշանակում է «քեզ հետ ուտող»՝ «կեր» բառից․ ընկերը նա է, ում հետ հաց ես կիսում։

**Because-ը պատասխանում է «ինչո՞ւ» հարցին։** Քո տեքստում **and**-ը ավելացնում է, **but**-ը հակադրում, իսկ **because**-ը պատճառ է բերում։ Ընկերոջ մասին տեքստը շատ ավելի լավ է պատճառով՝ «I like Narek **because** he always helps me»։ Վերևում կազմիր նախադասությունը, հետո գրիր քոնը because-ով։`,
      `**«Friend» происходит от «любить».** Древнеанглийское «freond» значило «тот, кто тебя любит» и шло от глагола «любить». Слова «free» и «Friday» — его дальние родственники. Армянское «ընկեր» значит «тот, кто ест с тобой», от «կեր» (еда): друг — тот, с кем делишь хлеб.

**Because отвечает на вопрос «почему?».** В твоём тексте **and** добавляет, **but** противопоставляет, а **because** называет причину. Текст о друге гораздо лучше с причиной: «I like Narek **because** he always helps me». Собери предложение выше, потом напиши своё с because.`,
    ),
    ask(3, {
      en: ["«I like summer ___ I can swim.»", ["but", "and", "because"], "Swimming is the reason, so because."],
      hy: ["«I like summer ___ I can swim.»", ["but", "and", "because"], "Լողալը պատճառն է, ուստի՝ because։"],
      ru: ["«I like summer ___ I can swim.»", ["but", "and", "because"], "Плавание — причина, значит because."],
    }),
  ],
  "daily-routine": [
    "clock mode=elapsed h=7 m=0 h2=8 m2=30",
    closer(
      `**English «has» its meals.** Russian has verbs for meals: «завтракать», «обедать». Armenian too: «նախաճաշել», «ճաշել». English uses one verb, **have**: have breakfast, have lunch, have dinner. Also have a shower, have a rest. Don't say «I eat breakfast» too often: «have» sounds more natural.

**How long is your morning?** Move the clocks above: if you get up at 7:00 and leave for school at 8:30, you have an hour and a half. What do you do first, then, after that? Order words help a listener follow your day: **first**, **then**, **after that**, **finally**.`,
      `**Անգլերենն իր ուտելիքները «ունենում» է։** Հայերենն ունի առանձին բայեր՝ «նախաճաշել», «ճաշել», ռուսերենը՝ «завтракать», «обедать»։ Անգլերենը գործածում է մեկ բայ՝ **have**․ have breakfast, have lunch, have dinner։ Նաև՝ have a shower, have a rest։ Շատ հաճախ մի՛ ասա «I eat breakfast»․ «have»-ն ավելի բնական է հնչում։

**Որքա՞ն է տևում քո առավոտը։** Տեղափոխիր վերևի ժամացույցները․ եթե արթնանում ես 7:00-ին և դպրոց ես գնում 8:30-ին, ունես մեկուկես ժամ։ Ի՞նչ ես անում նախ, հետո, դրանից հետո։ Հերթականության բառերն օգնում են լսողին հետևել քո օրվան՝ **first**, **then**, **after that**, **finally**։`,
      `**Английский «имеет» свою еду.** В русском есть глаголы для еды: «завтракать», «обедать», в армянском тоже: «նախաճաշել», «ճաշել». В английском один глагол **have**: have breakfast, have lunch, have dinner. А ещё have a shower, have a rest. Не говори слишком часто «I eat breakfast»: «have» звучит естественнее.

**Сколько длится твоё утро?** Подвинь часы выше: если встаёшь в 7:00, а выходишь в школу в 8:30, у тебя полтора часа. Что ты делаешь сначала, потом, после этого? Слова порядка помогают слушателю следить за твоим днём: **first**, **then**, **after that**, **finally**.`,
    ),
    ask(2, {
      en: ["Which is the most natural?", ["I make breakfast at seven.", "I have breakfast at seven.", "I do breakfast at seven."], "English uses have for meals."],
      hy: ["Ո՞րն է ամենաբնականը։", ["I make breakfast at seven.", "I have breakfast at seven.", "I do breakfast at seven."], "Անգլերենն ուտելիքների համար գործածում է have։"],
      ru: ["Как естественнее всего?", ["I make breakfast at seven.", "I have breakfast at seven.", "I do breakfast at seven."], "Для еды в английском используют have."],
    }),
  ],
  "he-she-s": [
    "forms mode=persons lang=en I_play you_play he_plays we_play you_play they_play",
    closer(
      `**The last ending left.** A thousand years ago English verbs had many endings, like Russian today: «я играю, ты играешь, он играет…». Almost all of them disappeared. Only one survived in the present: **-s** for he, she and it. Look at the table: five forms are the same, one has the -s.

**Three ways to say -s.** After p, k, t, f it sounds [s]: like**s**, get**s**. After a vowel or a voiced sound it sounds [z]: play**s**, read**s**. After s, sh, ch, x it becomes a new syllable [ɪz]: watch**es**, wash**es**. Say Ani's day aloud and listen for the three sounds.`,
      `**Վերջին մնացած վերջավորությունը։** Հազար տարի առաջ անգլերեն բայերը շատ վերջավորություններ ունեին, ինչպես այսօրվա հայերենում՝ «խաղում եմ, խաղում ես, խաղում է…»։ Դրանք գրեթե բոլորն անհետացան։ Ներկայում մնաց միայն մեկը՝ **-s**՝ he, she և it դեմքերի համար։ Նայիր աղյուսակին․ հինգ ձևը նույնն է, մեկն ունի -s։

**-s-ը արտասանելու երեք եղանակ։** p, k, t, f-ից հետո այն հնչում է [s]՝ like**s**, get**s**։ Ձայնավորից կամ ձայնեղ հնչյունից հետո՝ [z]՝ play**s**, read**s**։ s, sh, ch, x-ից հետո այն դառնում է նոր վանկ [ɪz]՝ watch**es**, wash**es**։ Բարձրաձայն կարդա Անիի օրը և լսիր երեք հնչյունները։`,
      `**Последнее оставшееся окончание.** Тысячу лет назад у английских глаголов было много окончаний, как сегодня в русском: «я играю, ты играешь, он играет…». Почти все они исчезли. В настоящем времени осталось одно: **-s** для he, she и it. Посмотри на таблицу: пять форм одинаковые, у одной есть -s.

**Три способа сказать -s.** После p, k, t, f оно звучит [s]: like**s**, get**s**. После гласной или звонкого звука — [z]: play**s**, read**s**. После s, sh, ch, x получается новый слог [ɪz]: watch**es**, wash**es**. Прочитай вслух про день Ани и послушай три звука.`,
    ),
    ask(1, {
      en: ["Correct the mistake: «My cat like fish.»", ["My cat likes fish.", "My cat liking fish.", "My cat is like fish."], "My cat = it, so the verb takes -s."],
      hy: ["Ուղղիր սխալը․ «My cat like fish.»", ["My cat likes fish.", "My cat liking fish.", "My cat is like fish."], "My cat = it, ուստի բայը ստանում է -s։"],
      ru: ["Исправь ошибку: «My cat like fish.»", ["My cat likes fish.", "My cat liking fish.", "My cat is like fish."], "My cat = it, поэтому глагол с -s."],
    }),
  ],
  "does-he": [
    "sentence mode=order Does she play the piano ?",
    closer(
      `**The -s jumps to does.** In «She plays» the -s sits on the verb. In a question or a negative the helper **does** takes it: «**Does** she play?», «She **doesn't** play». The main verb is left bare. Never put the -s in twice: «Does she plays» is a mistake.

**A helper only English uses.** Russian and Armenian make a question just with the voice: «Она играет?», «Նա նվագո՞ւմ է»: Armenian adds a question mark on the stressed vowel. English needs a whole extra word, **do** or **does**, at the start. Build the question above and answer it: «Yes, she does.»`,
      `**-s-ը թռչում է does-ի վրա։** «She plays»-ում -s-ը բայի վրա է։ Հարցում կամ ժխտումում այն վերցնում է օգնական **does**-ը՝ «**Does** she play?», «She **doesn't** play»։ Հիմնական բայը մնում է անփոփոխ։ Երբեք -s-ը երկու անգամ մի՛ դիր․ «Does she plays»-ը սխալ է։

**Օգնական, որը միայն անգլերենն ունի։** Հայերենն ու ռուսերենը հարց են կազմում միայն ձայնով՝ «Նա նվագո՞ւմ է», «Она играет?»․ հայերենը հարցական նշանը դնում է շեշտված ձայնավորի վրա։ Անգլերենին սկզբում մի ամբողջ լրացուցիչ բառ է պետք՝ **do** կամ **does**։ Վերևում կազմիր հարցը և պատասխանիր՝ «Yes, she does.»։`,
      `**-s перепрыгивает на does.** В «She plays» -s сидит на глаголе. В вопросе и отрицании его забирает помощник **does**: «**Does** she play?», «She **doesn't** play». Основной глагол остаётся голым. Никогда не ставь -s дважды: «Does she plays» — ошибка.

**Помощник, который есть только в английском.** Русский и армянский задают вопрос одной интонацией: «Она играет?», «Նա նվագո՞ւմ է» — армянский ставит вопросительный знак над ударной гласной. Английскому нужно целое лишнее слово в начале — **do** или **does**. Собери вопрос выше и ответь: «Yes, she does.»`,
    ),
    ask(2, {
      en: ["Choose the correct question.", ["Does she likes music?", "Does she like music?", "Do she like music?"], "Does takes the -s, the verb stays bare."],
      hy: ["Ընտրիր ճիշտ հարցը։", ["Does she likes music?", "Does she like music?", "Do she like music?"], "Does-ը վերցնում է -s-ը, բայը մնում է անփոփոխ։"],
      ru: ["Выбери правильный вопрос.", ["Does she likes music?", "Does she like music?", "Do she like music?"], "Does забирает -s, глагол остаётся голым."],
    }),
  ],
  "always-sometimes-never": [
    "forms mode=compare cols=freq always:100% usually:80% often:60% sometimes:40% rarely:10% never:0%",
    closer(
      `**One «no» is enough.** Russian says «Я **никогда не** пью кофе» and Armenian «Ես **երբեք** սուրճ **չեմ** խմում»: two negative words together. In English that would cancel out. **Never** is already negative, so say «I **never** drink coffee», not «I don't never…».

**Where does the word go?** Frequency words go **before** the main verb («She **always** walks to school») but **after** am, is, are («He **is often** late»). Think of them as standing right next to the action. Hide a column above and say how often each word means.`,
      `**Մեկ «ոչ»-ը բավական է։** Հայերենն ասում է «Ես **երբեք** սուրճ **չեմ** խմում», ռուսերենը՝ «Я **никогда не** пью кофе»՝ երկու ժխտական բառ միասին։ Անգլերենում դրանք իրար կչեզոքացնեին։ **Never**-ն արդեն ժխտական է, ուստի ասա «I **never** drink coffee», ոչ թե «I don't never…»։

**Որտե՞ղ է կանգնում բառը։** Հաճախականության բառերը դրվում են հիմնական բայից **առաջ** («She **always** walks to school»), բայց am, is, are-ից **հետո** («He **is often** late»)։ Պատկերացրու, որ դրանք կանգնած են գործողության հենց կողքին։ Թաքցրու վերևի սյունակներից մեկը և ասա, թե որքան հաճախ է նշանակում յուրաքանչյուր բառ։`,
      `**Одного «нет» достаточно.** По-русски «Я **никогда не** пью кофе», по-армянски «Ես **երբեք** սուրճ **չեմ** խմում» — два отрицания вместе. В английском они бы уничтожили друг друга. **Never** уже отрицательное, поэтому «I **never** drink coffee», а не «I don't never…».

**Где стоит слово?** Слова частоты ставят **перед** основным глаголом («She **always** walks to school»), но **после** am, is, are («He **is often** late»). Представь, что они стоят вплотную к действию. Спрячь столбец выше и назови, как часто означает каждое слово.`,
    ),
    ask(3, {
      en: ["Correct: «She doesn't never watch TV.»", ["She don't never watches TV.", "She never doesn't watch TV.", "She never watches TV."], "Never is already negative; the verb takes -s."],
      hy: ["Ուղղիր․ «She doesn't never watch TV.»", ["She don't never watches TV.", "She never doesn't watch TV.", "She never watches TV."], "Never-ն արդեն ժխտական է, բայը ստանում է -s։"],
      ru: ["Исправь: «She doesn't never watch TV.»", ["She don't never watches TV.", "She never doesn't watch TV.", "She never watches TV."], "Never уже отрицательное, а глагол получает -s."],
    }),
  ],
  "at-the-weekend": [
    "sentence mode=order On weekdays I get up at seven , but at the weekend I sleep late .",
    closer(
      `**A young word.** People did not always have two free days. For a long time most workers had only Sunday off. The two-day weekend spread in the 20th century, and the word «weekend», the end of the week, became popular around the same time.

**At or on the weekend?** In Britain people say «**at** the weekend», in America «**on** the weekend». Both are fine; choose one and keep it. With days it is always **on**: on Saturday (one Saturday), on Saturdays (every Saturday). Build the long sentence above: it has two parts joined by **but**.`,
      `**Երիտասարդ բառ։** Մարդիկ միշտ չէ, որ երկու ազատ օր են ունեցել։ Երկար ժամանակ աշխատողների մեծ մասը հանգստանում էր միայն կիրակի օրը։ Երկօրյա հանգստյան օրերը տարածվեցին 20-րդ դարում, և մոտավորապես նույն ժամանակ տարածվեց «weekend» բառը՝ «շաբաթվա վերջ»։

**At, թե՞ on the weekend։** Բրիտանիայում ասում են «**at** the weekend», Ամերիկայում՝ «**on** the weekend»։ Երկուսն էլ ճիշտ են․ ընտրիր մեկը և պահիր։ Օրերի հետ միշտ **on** է՝ on Saturday (մեկ շաբաթ օր), on Saturdays (ամեն շաբաթ օր)։ Վերևում կազմիր երկար նախադասությունը․ այն ունի երկու մաս՝ միացված **but**-ով։`,
      `**Молодое слово.** У людей не всегда было два выходных. Долгое время большинство работников отдыхали только в воскресенье. Двухдневные выходные распространились в XX веке, и примерно тогда же стало популярным слово «weekend» — «конец недели».

**At или on the weekend?** В Британии говорят «**at** the weekend», в Америке — «**on** the weekend». Оба варианта правильные: выбери один и придерживайся его. С днями всегда **on**: on Saturday (в одну субботу), on Saturdays (по субботам). Собери длинное предложение выше: в нём две части, соединённые **but**.`,
    ),
    ask(2, {
      en: ["«I go to my art club ___ Saturdays.»", ["in", "on", "at"], "Days take on."],
      hy: ["«I go to my art club ___ Saturdays.»", ["in", "on", "at"], "Օրերի հետ on է։"],
      ru: ["«I go to my art club ___ Saturdays.»", ["in", "on", "at"], "С днями недели — on."],
    }),
  ],
  "a-day-in-the-life": [
    "sentence mode=order Both Gor and Emily are ten .",
    closer(
      `**School in England starts early.** Children in England start school at four or five, in a class called Reception, and most schools ask pupils to wear a uniform. In Armenia and Russia children usually start school at six or seven. Lessons in England often start at a quarter to nine, and many children have lunch at school.

**Both and but.** To compare two people, say what is the same with **both**: «**Both** Gor and Emily are ten». Say what is different with **but**: «Gor walks to school, **but** Emily goes by car». Build the sentence above, then write one more with both and one with but.`,
      `**Անգլիայում դպրոցը շուտ է սկսվում։** Անգլիայում երեխաները դպրոց են գնում չորս կամ հինգ տարեկանում՝ Reception կոչվող դասարան, և դպրոցների մեծ մասն աշակերտներից պահանջում է համազգեստ կրել։ Հայաստանում և Ռուսաստանում երեխաները սովորաբար դպրոց են գնում վեց կամ յոթ տարեկանում։ Անգլիայում դասերը հաճախ սկսվում են իննից տասնհինգ պակաս, և շատ երեխաներ ճաշում են դպրոցում։

**Both և but։** Երկու մարդու համեմատելիս նույնն ասա **both**-ով՝ «**Both** Gor and Emily are ten»։ Տարբերությունն ասա **but**-ով՝ «Gor walks to school, **but** Emily goes by car»։ Վերևում կազմիր նախադասությունը, հետո ևս մեկը գրիր both-ով, մեկն էլ՝ but-ով։`,
      `**В Англии в школу идут рано.** Английские дети начинают учиться в четыре-пять лет, в классе под названием Reception, и в большинстве школ ученики носят форму. В Армении и России обычно идут в школу в шесть-семь лет. Уроки в Англии часто начинаются без четверти девять, и многие дети обедают в школе.

**Both и but.** Сравнивая двух людей, общее говори с **both**: «**Both** Gor and Emily are ten». Различие — с **but**: «Gor walks to school, **but** Emily goes by car». Собери предложение выше, потом напиши ещё одно с both и одно с but.`,
    ),
    ask(1, {
      en: ["Gor likes maths. Emily likes art. Which sentence is right?", ["Gor likes maths, but Emily likes art.", "Both Gor and Emily like art.", "Gor likes maths because Emily likes art."], "Different things: but."],
      hy: ["Գորը սիրում է մաթեմատիկա, Էմիլին՝ նկարչություն։ Ո՞ր նախադասությունն է ճիշտ։", ["Gor likes maths, but Emily likes art.", "Both Gor and Emily like art.", "Gor likes maths because Emily likes art."], "Տարբեր բաներ՝ but։"],
      ru: ["Гор любит математику, Эмили — рисование. Какое предложение верно?", ["Gor likes maths, but Emily likes art.", "Both Gor and Emily like art.", "Gor likes maths because Emily likes art."], "Разное — but."],
    }),
  ],
  "present-continuous": [
    "tense name=present-continuous aspects=simple,continuous times=present",
    closer(
      `**A wave around «now».** On the time line above the present continuous is a wave that crosses the red «now» line: the action started a moment ago and has not finished. Switch to «simple» and you see dots instead: habits. That is the whole difference between the two present tenses.

**Spelling -ing.** Most verbs just add -ing: read**ing**. A silent e drops: make → mak**ing**. A short verb with one vowel and one consonant doubles it, to keep the vowel short: swim → swi**mm**ing, run → ru**nn**ing. And «lie» becomes «lying», because English does not like «ie» before «ing».`,
      `**Ալիք «հիմա»-ի շուրջ։** Վերևի ժամանակի առանցքի վրա present continuous-ը ալիք է, որը հատում է կարմիր «հիմա» գիծը․ գործողությունը սկսվել է մի պահ առաջ և դեռ չի ավարտվել։ Միացրու «simple»-ը, և ալիքի փոխարեն կետեր կտեսնես՝ սովորություններ։ Ահա երկու ներկա ժամանակաձևերի ամբողջ տարբերությունը։

**-ing-ի ուղղագրությունը։** Բայերի մեծ մասը պարզապես ստանում է -ing՝ read**ing**։ Համր e-ն ընկնում է՝ make → mak**ing**։ Մեկ ձայնավորով և մեկ բաղաձայնով կարճ բայը կրկնապատկում է բաղաձայնը, որ ձայնավորը կարճ մնա՝ swim → swi**mm**ing, run → ru**nn**ing։ Իսկ «lie»-ը դառնում է «lying», որովհետև անգլերենը չի սիրում «ie»-ն «ing»-ից առաջ։`,
      `**Волна вокруг «сейчас».** На линии времени выше present continuous — волна, которая пересекает красную линию «сейчас»: действие началось мгновение назад и ещё не закончилось. Переключи на «simple» — и вместо волны увидишь точки: привычки. В этом вся разница двух настоящих времён.

**Написание -ing.** Большинство глаголов просто получают -ing: read**ing**. Немая e выпадает: make → mak**ing**. Короткий глагол с одной гласной и одной согласной удваивает её, чтобы гласная осталась краткой: swim → swi**mm**ing, run → ru**nn**ing. А «lie» превращается в «lying»: английский не любит «ie» перед «ing».`,
    ),
    ask(3, {
      en: ["Which -ing form is spelled correctly?", ["runing", "writeing", "swimming"], "Short verb, vowel + consonant: double it, swimming."],
      hy: ["-ing-ով ո՞ր ձևն է ճիշտ գրված։", ["runing", "writeing", "swimming"], "Կարճ բայ, ձայնավոր + բաղաձայն՝ կրկնապատկիր՝ swimming։"],
      ru: ["Какая форма на -ing написана правильно?", ["runing", "writeing", "swimming"], "Короткий глагол, гласная + согласная: удваиваем — swimming."],
    }),
  ],
  "continuous-questions": [
    "sentence mode=order What are you doing ?",
    closer(
      `**Swap two words.** To make a question, the helper jumps in front of the person: «You **are** listening» → «**Are** you listening?». With a question word it goes after it: «What **are** you doing?». No do, no does: am, is and are do the job themselves.

**«Yes, I'm» is never right.** Short forms like I'm, he's, they're cannot end a sentence. In a short «yes» answer use the full word: «Yes, I **am**.», «Yes, they **are**.» In «no» answers short forms are fine: «No, I'm not», «No, he isn't». Build the question above and answer it about yourself.`,
      `**Փոխիր երկու բառի տեղերը։** Հարց կազմելու համար օգնականը թռչում է դեմքից առաջ՝ «You **are** listening» → «**Are** you listening?»։ Հարցական բառի հետ այն գալիս է դրանից հետո՝ «What **are** you doing?»։ Ոչ do, ոչ does․ am, is և are-ն իրենք են անում գործը։

**«Yes, I'm»-ը երբեք ճիշտ չէ։** I'm, he's, they're կարճ ձևերը չեն կարող ավարտել նախադասությունը։ Կարճ «այո» պատասխանում գործածիր լրիվ բառը՝ «Yes, I **am**.», «Yes, they **are**.»։ «Ոչ» պատասխաններում կարճ ձևերը ճիշտ են՝ «No, I'm not», «No, he isn't»։ Վերևում կազմիր հարցը և պատասխանիր քո մասին։`,
      `**Поменяй два слова местами.** Чтобы задать вопрос, помощник перепрыгивает вперёд: «You **are** listening» → «**Are** you listening?». С вопросительным словом он идёт после него: «What **are** you doing?». Никаких do и does: am, is и are справляются сами.

**«Yes, I'm» — всегда ошибка.** Краткие формы I'm, he's, they're не могут заканчивать предложение. В кратком ответе «да» используй полное слово: «Yes, I **am**.», «Yes, they **are**.» В ответах «нет» краткие формы можно: «No, I'm not», «No, he isn't». Собери вопрос выше и ответь на него о себе.`,
    ),
    ask(2, {
      en: ["«Are you listening?» — «Yes, …»", ["I'm.", "I am.", "I listening."], "A short yes answer uses the full form: Yes, I am."],
      hy: ["«Are you listening?» — «Yes, …»", ["I'm.", "I am.", "I listening."], "Կարճ «այո» պատասխանը գործածում է լրիվ ձևը՝ Yes, I am։"],
      ru: ["«Are you listening?» — «Yes, …»", ["I'm.", "I am.", "I listening."], "В кратком ответе «да» полная форма: Yes, I am."],
    }),
  ],
  clothes: [
    "forms mode=compare cols=brame jumper:sweater trainers:sneakers trousers:pants waistcoat:vest",
    closer(
      `**A famous mix-up.** In America **pants** are trousers. In Britain **pants** are underwear! So a British child who hears «I like your pants» may be very surprised. In the same way, an American **vest** is a British **waistcoat**, and a British **vest** is a T-shirt you wear under your shirt.

**Clothes you wear now and clothes you usually wear.** «I'm wearing a jumper» (today, now) uses the present continuous. «I usually wear a uniform» (a habit) uses the present simple. And **put on** a coat when you go out, **take off** your shoes when you come in. Hide a column above and say the other word.`,
      `**Հայտնի շփոթություն։** Ամերիկայում **pants** նշանակում է տաբատ։ Բրիտանիայում **pants**-ը ներքնազգեստ է։ Ուրեմն բրիտանացի երեխան, որ լսում է «I like your pants», կարող է շատ զարմանալ։ Նույն կերպ ամերիկյան **vest**-ը բրիտանական **waistcoat**-ն է (ժիլետ), իսկ բրիտանական **vest**-ը վերնաշապիկի տակից հագնվող մայկան է։

**Հագուստ, որ հագել ես հիմա, և հագուստ, որ սովորաբար հագնում ես։** «I'm wearing a jumper» (այսօր, հիմա) գործածում է present continuous։ «I usually wear a uniform» (սովորություն)՝ present simple։ Իսկ դուրս գալիս **put on** a coat, ներս մտնելիս **take off** your shoes։ Թաքցրու վերևի սյունակներից մեկը և ասա մյուս բառը։`,
      `**Знаменитая путаница.** В Америке **pants** — это брюки. В Британии **pants** — нижнее бельё! Так что британский ребёнок, услышав «I like your pants», может очень удивиться. Точно так же американский **vest** — это британский **waistcoat** (жилет), а британский **vest** — майка, которую носят под рубашкой.

**Что на тебе сейчас и что ты обычно носишь.** «I'm wearing a jumper» (сегодня, сейчас) — present continuous. «I usually wear a uniform» (привычка) — present simple. А выходя на улицу, **put on** a coat, входя — **take off** your shoes. Спрячь столбец выше и назови другое слово.`,
    ),
    ask(2, {
      en: ["What are British «pants»?", ["trousers", "underwear", "a jumper"], "In Britain pants are underwear; trousers are trousers."],
      hy: ["Ի՞նչ են բրիտանական «pants»-ը։", ["trousers", "underwear", "a jumper"], "Բրիտանիայում pants-ը ներքնազգեստ է, տաբատը՝ trousers։"],
      ru: ["Что такое британские «pants»?", ["trousers", "underwear", "a jumper"], "В Британии pants — бельё, а брюки — trousers."],
    }),
  ],
  "hobbies-free-time": [
    "forms mode=compare cols=feel 😍:I_love_dancing 🙂:I_like_reading 😐:I_don't_mind_cooking 🙁:I_don't_like_running 😡:I_hate_getting_up_early",
    closer(
      `**A hobby was a toy horse.** A **hobby horse** is a toy: a horse's head on a stick that children «ride». Grown-ups started to call their favourite free-time activity their «hobby horse», something they liked to «ride» again and again, and then just «hobby».

**Love, like, hate + -ing.** After these verbs the next verb usually takes **-ing**: «I love danc**ing**», «I hate gett**ing** up early». «Good at» works the same: «I'm good at draw**ing**». Hide a column above and make your own scale from 😍 to 😡.`,
      `**Հոբբին խաղալիք ձի էր։** **Hobby horse**-ը խաղալիք է՝ փայտի վրա ձիու գլուխ, որի վրա երեխաները «հեծնում» են։ Մեծերը սկսեցին իրենց սիրելի զբաղմունքն անվանել «hobby horse», մի բան, որը նորից ու նորից «հեծնում» էին, իսկ հետո՝ պարզապես «hobby»։

**Love, like, hate + -ing։** Այս բայերից հետո հաջորդ բայը սովորաբար ստանում է **-ing**՝ «I love danc**ing**», «I hate gett**ing** up early»։ «Good at»-ը նույնպես՝ «I'm good at draw**ing**»։ Թաքցրու վերևի սյունակներից մեկը և կազմիր քո սանդղակը 😍-ից մինչև 😡։`,
      `**Хобби было игрушечной лошадкой.** **Hobby horse** — игрушка: лошадиная голова на палке, на которой «скачут» дети. Взрослые стали называть любимое занятие своей «hobby horse» — тем, на чём «катаешься» снова и снова, а потом просто «hobby».

**Love, like, hate + -ing.** После этих глаголов следующий глагол обычно получает **-ing**: «I love danc**ing**», «I hate gett**ing** up early». «Good at» работает так же: «I'm good at draw**ing**». Спрячь столбец выше и составь свою шкалу от 😍 до 😡.`,
    ),
    ask(1, {
      en: ["«She hates ___ up early.»", ["getting", "get", "gets"], "After hate the verb takes -ing."],
      hy: ["«She hates ___ up early.»", ["getting", "get", "gets"], "Hate-ից հետո բայը ստանում է -ing։"],
      ru: ["«She hates ___ up early.»", ["getting", "get", "gets"], "После hate глагол с -ing."],
    }),
  ],
  "simple-vs-continuous": [
    "tense name=present-simple aspects=simple,continuous times=present",
    closer(
      `**Two questions decide.** Is it a habit, something that happens again and again? Present simple: «Hovik usually **walks** to school». Is it happening now, or just today? Present continuous: «Today he **is going** by bus». Switch between simple and continuous above: dots for habits, a wave for now.

**«I'm lovin' it» breaks the rule.** Verbs like like, love, want and know usually stay simple even now: «I **love** this song», not «I'm loving». In 2003 a burger company chose «I'm lovin' it» as its slogan exactly because it sounds unusual and catches the ear. In your own English, keep «I love it».`,
      `**Երկու հարց է որոշում։** Սովորությո՞ւն է, մի բան, որ կրկնվում է նորից ու նորից։ Present simple՝ «Hovik usually **walks** to school»։ Կատարվո՞ւմ է հիմա կամ միայն այսօր։ Present continuous՝ «Today he **is going** by bus»։ Վերևում փոխիր simple-ի և continuous-ի միջև․ կետեր՝ սովորությունների, ալիք՝ «հիմա»-ի համար։

**«I'm lovin' it»-ը խախտում է կանոնը։** Like, love, want և know բայերը սովորաբար պարզ ձևով են մնում նույնիսկ հիմա՝ «I **love** this song», ոչ թե «I'm loving»։ 2003 թվականին արագ սննդի մի ընկերություն «I'm lovin' it»-ը ընտրեց որպես կարգախոս հենց այն պատճառով, որ այն անսովոր է հնչում և գրավում է ականջը։ Քո անգլերենում պահիր «I love it»։`,
      `**Решают два вопроса.** Это привычка, то, что повторяется снова и снова? Present simple: «Hovik usually **walks** to school». Это происходит сейчас или только сегодня? Present continuous: «Today he **is going** by bus». Переключай simple и continuous выше: точки — привычки, волна — сейчас.

**«I'm lovin' it» нарушает правило.** Глаголы like, love, want, know обычно остаются в простой форме даже сейчас: «I **love** this song», а не «I'm loving». В 2003 году одна сеть закусочных выбрала слоган «I'm lovin' it» именно потому, что он звучит необычно и цепляет слух. В своём английском говори «I love it».`,
    ),
    ask(2, {
      en: ["«Listen! Somebody ___.»", ["sings", "is singing", "sing"], "Listen! = now: present continuous."],
      hy: ["«Listen! Somebody ___.»", ["sings", "is singing", "sing"], "Listen! = հիմա՝ present continuous։"],
      ru: ["«Listen! Somebody ___.»", ["sings", "is singing", "sing"], "Listen! — сейчас: present continuous."],
    }),
  ],
  "at-the-park": [
    "sentence An:attr old:attr man:subj is_sitting:pred on_the_bench:adv .",
    closer(
      `**Describe a picture in three steps.** First say what is there («There is a fountain, there are some ducks»), then where («under the bench», «behind the fountain»), then what people are doing and wearing («A girl in a red jacket is riding her bike»). Examiners like this order because it is easy to follow.

**Words for the parts of a picture.** **In the foreground** (at the front), **in the background** (at the back), **on the left**, **on the right**, **in the middle**. Tap the parts of the sentence above: who (an old man), what he is doing (is sitting), where (on the bench).`,
      `**Նկարը նկարագրիր երեք քայլով։** Նախ ասա, թե ինչ կա («There is a fountain, there are some ducks»), հետո՝ որտեղ («under the bench», «behind the fountain»), հետո՝ ինչ են անում և հագել մարդիկ («A girl in a red jacket is riding her bike»)։ Քննողները սիրում են այս հերթականությունը, որովհետև հեշտ է հետևել։

**Նկարի մասերի բառերը։** **In the foreground** (առջևում), **in the background** (հետևում, խորքում), **on the left** (ձախում), **on the right** (աջում), **in the middle** (մեջտեղում)։ Սեղմիր վերևի նախադասության մասերը՝ ով (an old man), ինչ է անում (is sitting), որտեղ (on the bench)։`,
      `**Опиши картинку в три шага.** Сначала скажи, что там есть («There is a fountain, there are some ducks»), потом где («under the bench», «behind the fountain»), потом что люди делают и во что одеты («A girl in a red jacket is riding her bike»). Экзаменаторы любят такой порядок: за ним легко следить.

**Слова для частей картинки.** **In the foreground** (на переднем плане), **in the background** (на заднем плане), **on the left** (слева), **on the right** (справа), **in the middle** (посередине). Нажми на части предложения выше: кто (an old man), что делает (is sitting), где (on the bench).`,
    ),
    ask(3, {
      en: ["Which word means «at the back of the picture»?", ["in the middle", "in the foreground", "in the background"], "Background = the back part of a picture."],
      hy: ["Ո՞ր բառն է նշանակում «նկարի խորքում»։", ["in the middle", "in the foreground", "in the background"], "Background = նկարի հետևի մասը։"],
      ru: ["Что значит «на заднем плане»?", ["in the middle", "in the foreground", "in the background"], "Background — задняя часть картинки."],
    }),
  ],
  "food-vocabulary": [
    "forms mode=compare cols=brame aubergine:eggplant courgette:zucchini coriander:cilantro porridge:oatmeal",
    closer(
      `**Why «eggplant»?** The first aubergines that English speakers saw were small and white, and looked exactly like eggs. So Americans called the plant an **eggplant**. The British took the French name, **aubergine**. Armenian «սմբուկ» and Russian «баклажан» are different again.

**Five tastes, not four.** Sweet, salty, sour and bitter have been known for centuries. In 1908 a Japanese scientist, Kikunae Ikeda, described a fifth one, **umami**, the rich «meaty» taste of soup, cheese and tomatoes. Hide a column above and say the other word.`,
      `**Ինչո՞ւ «eggplant»։** Առաջին սմբուկները, որ տեսան անգլիախոսները, փոքր էին և սպիտակ, և ճիշտ ձվի տեսք ունեին։ Ուստի ամերիկացիները բույսն անվանեցին **eggplant** («ձվաբույս»)։ Բրիտանացիները վերցրին ֆրանսիական անունը՝ **aubergine**։ Հայերեն «սմբուկ»-ը և ռուսերեն «баклажан»-ը նորից այլ են։

**Հինգ համ, ոչ թե չորս։** Քաղցրը, աղին, թթուն և դառը հայտնի են դարեր շարունակ։ 1908 թվականին ճապոնացի գիտնական Կիկունաե Իկեդան նկարագրեց հինգերորդը՝ **ումամի**՝ ապուրի, պանրի և լոլիկի հարուստ «մսային» համը։ Թաքցրու վերևի սյունակներից մեկը և ասա մյուս բառը։`,
      `**Почему «eggplant»?** Первые баклажаны, которые увидели англоговорящие, были маленькими и белыми и выглядели точь-в-точь как яйца. Поэтому американцы назвали растение **eggplant** («яйцо-растение»). Британцы взяли французское название **aubergine**. Русское «баклажан» и армянское «սմբուկ» — опять другие.

**Пять вкусов, а не четыре.** Сладкий, солёный, кислый и горький известны веками. В 1908 году японский учёный Кикунаэ Икэда описал пятый — **умами**, насыщенный «мясной» вкус супа, сыра и помидоров. Спрячь столбец выше и назови другое слово.`,
    ),
    ask(1, {
      en: ["What do Americans call an aubergine?", ["eggplant", "zucchini", "pepper"], "The first ones they saw were white and egg-shaped."],
      hy: ["Ինչպե՞ս են ամերիկացիներն անվանում aubergine-ը։", ["eggplant", "zucchini", "pepper"], "Առաջինները, որ նրանք տեսան, սպիտակ էին և ձվաձև։"],
      ru: ["Как американцы называют aubergine?", ["eggplant", "zucchini", "pepper"], "Первые баклажаны, которые они увидели, были белыми и похожими на яйца."],
    }),
  ],
  "countable-uncountable": [
    "forms mode=compare cols=countable apples:milk sandwiches:bread coins:money tasks:homework",
    closer(
      `**Different languages count differently.** In English **money** is uncountable: «My money **is** in my bag». Russian «деньги» is plural, and Armenian «փող» is singular. English **homework** and **advice** are uncountable too: never «homeworks», but «a lot of homework», «a piece of advice».

**News is one thing.** «News» ends in -s but is uncountable and singular: «The news **is** good». To count uncountable things, put a container or a piece in front: a **glass** of milk, a **slice** of bread, a **piece** of news. Hide a column above: which words take -s?`,
      `**Տարբեր լեզուներ տարբեր կերպ են հաշվում։** Անգլերենում **money**-ն չհաշվվող է՝ «My money **is** in my bag»։ Ռուսերեն «деньги»-ն հոգնակի է, հայերեն «փող»-ը՝ եզակի։ Անգլերեն **homework** և **advice** բառերը նույնպես չհաշվվող են․ երբեք «homeworks», այլ «a lot of homework», «a piece of advice»։

**News-ը մեկ բան է։** «News»-ը ավարտվում է -s-ով, բայց չհաշվվող է և եզակի՝ «The news **is** good»։ Չհաշվվող բաները հաշվելու համար առջևում դիր տարա կամ կտոր՝ a **glass** of milk, a **slice** of bread, a **piece** of news։ Թաքցրու վերևի սյունակներից մեկը․ ո՞ր բառերն են ստանում -s։`,
      `**Разные языки считают по-разному.** В английском **money** неисчисляемое: «My money **is** in my bag». Русское «деньги» — во множественном числе, армянское «փող» — в единственном. Английские **homework** и **advice** тоже неисчисляемые: никогда «homeworks», а «a lot of homework», «a piece of advice».

**News — это одно.** «News» кончается на -s, но оно неисчисляемое и в единственном числе: «The news **is** good». Чтобы посчитать неисчисляемое, ставят ёмкость или кусочек: a **glass** of milk, a **slice** of bread, a **piece** of news. Спрячь столбец выше: какие слова получают -s?`,
    ),
    ask(3, {
      en: ["Which is correct?", ["I've got many homeworks.", "I've got a homework.", "I've got a lot of homework."], "Homework is uncountable: no a, no -s."],
      hy: ["Ո՞րն է ճիշտ։", ["I've got many homeworks.", "I've got a homework.", "I've got a lot of homework."], "Homework-ը չհաշվվող է՝ առանց a-ի և -s-ի։"],
      ru: ["Как правильно?", ["I've got many homeworks.", "I've got a homework.", "I've got a lot of homework."], "Homework неисчисляемое: без a и без -s."],
    }),
  ],
  "some-any": [
    "sentence mode=order Are there any tomatoes in the fridge ?",
    closer(
      `**Some for yes, any for no and questions.** «There are **some** eggs» (yes, there are). «There aren't **any** tomatoes» (no). «Are there **any** tomatoes?» (we don't know). Some and any go with plurals and with uncountable words, never with one thing: an apple, but some apples.

**The friendly exception.** When you offer something or ask for it, use **some** even in a question: «Would you like **some** tea?», «Can I have **some** water, please?». You expect the answer «yes», so «some» sounds warmer. Build the question above, then answer it both ways.`,
      `**Some՝ «այո»-ի համար, any՝ «ոչ»-ի և հարցերի։** «There are **some** eggs» (այո, կան)։ «There aren't **any** tomatoes» (ոչ)։ «Are there **any** tomatoes?» (չգիտենք)։ Some-ը և any-ն գործածվում են հոգնակիների և չհաշվվող բառերի հետ, երբեք՝ մեկ առարկայի․ an apple, բայց some apples։

**Ընկերական բացառությունը։** Երբ ինչ-որ բան առաջարկում կամ խնդրում ես, գործածիր **some** նույնիսկ հարցում՝ «Would you like **some** tea?», «Can I have **some** water, please?»։ Դու «այո» պատասխան ես սպասում, ուստի «some»-ն ավելի ջերմ է հնչում։ Վերևում կազմիր հարցը, հետո պատասխանիր երկու ձևով։`,
      `**Some — для «да», any — для «нет» и вопросов.** «There are **some** eggs» (да, есть). «There aren't **any** tomatoes» (нет). «Are there **any** tomatoes?» (не знаем). Some и any идут с множественным числом и с неисчисляемыми словами, но не с одним предметом: an apple, но some apples.

**Дружелюбное исключение.** Когда что-то предлагаешь или просишь, говори **some** даже в вопросе: «Would you like **some** tea?», «Can I have **some** water, please?». Ты ждёшь ответа «да», поэтому «some» звучит теплее. Собери вопрос выше и ответь на него двумя способами.`,
    ),
    ask(1, {
      en: ["You offer a guest cake: «Would you like ___ cake?»", ["some", "any", "a"], "Offers use some, even in questions."],
      hy: ["Հյուրին տորթ ես առաջարկում․ «Would you like ___ cake?»", ["some", "any", "a"], "Առաջարկներում գործածվում է some, նույնիսկ հարցերում։"],
      ru: ["Ты предлагаешь гостю торт: «Would you like ___ cake?»", ["some", "any", "a"], "В предложениях угощения — some, даже в вопросе."],
    }),
  ],
  "how-much-how-many": [
    "forms mode=compare cols=muchmany eggs:milk apples:sugar biscuits:flour drams:money",
    closer(
      `**Count it or measure it?** If you can count the things one by one, ask **how many**: how many eggs? If you can only measure it (in litres, grams or spoons), ask **how much**: how much milk? Money is interesting: «How much **money**?» but «How many **drams**?», because you can count the drams.

**Pancake Day.** In Britain the day before Lent is called Shrove Tuesday or **Pancake Day**, a little like Maslenitsa in Russia. In the town of Olney people say a pancake race has been run since 1445: women run along the street holding a frying pan and tossing a pancake. Hide a column above: much or many?`,
      `**Հաշվե՞լ, թե՞ չափել։** Եթե կարող ես առարկաները մեկ առ մեկ հաշվել, հարցրու **how many**՝ how many eggs? Եթե կարող ես միայն չափել (լիտրով, գրամով, գդալով), հարցրու **how much**՝ how much milk? Փողը հետաքրքիր է՝ «How much **money**?», բայց «How many **drams**?», որովհետև դրամները կարելի է հաշվել։

**Բլինների օր։** Բրիտանիայում Մեծ պահքին նախորդող օրը կոչվում է Shrove Tuesday կամ **Pancake Day**, մի փոքր նման ռուսական Մասլենիցային։ Օլնի քաղաքում ասում են, որ բլինների վազքն անցկացվում է 1445 թվականից․ կանայք վազում են փողոցով՝ ձեռքին թավա, և օդ են նետում բլինը։ Թաքցրու վերևի սյունակներից մեկը․ much, թե՞ many։`,
      `**Посчитать или измерить?** Если вещи можно посчитать по одной, спрашивай **how many**: how many eggs? Если можно только измерить (литрами, граммами, ложками) — **how much**: how much milk? С деньгами интересно: «How much **money**?», но «How many **drams**?», ведь драмы можно посчитать.

**Блинный день.** В Британии день перед Великим постом называют Shrove Tuesday или **Pancake Day** — немного похоже на Масленицу. В городке Олни, как говорят, с 1445 года проводят блинный забег: женщины бегут по улице со сковородой и подбрасывают блин. Спрячь столбец выше: much или many?`,
    ),
    ask(2, {
      en: ["«How ___ juice is there?»", ["many", "much", "lot"], "Juice is uncountable: how much."],
      hy: ["«How ___ juice is there?»", ["many", "much", "lot"], "Հյութը չհաշվվող է՝ how much։"],
      ru: ["«How ___ juice is there?»", ["many", "much", "lot"], "Сок неисчисляемый: how much."],
    }),
  ],
  "at-the-shop": [
    "sentence mode=order Can I have two kilos of apricots , please ?",
    closer(
      `**The baker's what?** In British English «the baker's» is short for «the baker's **shop**», the shop that belongs to the baker. That is why there is an 's: the butcher's, the chemist's, the greengrocer's. You can also say «I'm going to the dentist's».

**The dram is a young currency.** Armenia started to use its own money, the **dram**, in November 1993. The name comes from an old word for a coin, related to the Greek «drachma». In Britain people pay in pounds and pence, in Russia in roubles and kopecks. Build Mariam's request above.`,
      `**Ի՞նչ է «the baker's»-ը։** Բրիտանական անգլերենում «the baker's»-ը «the baker's **shop**»-ի կրճատ ձևն է՝ հացթուխին պատկանող խանութը։ Ահա թե ինչու կա 's՝ the butcher's, the chemist's, the greengrocer's։ Կարելի է նաև ասել «I'm going to the dentist's»։

**Դրամն երիտասարդ արժույթ է։** Հայաստանը սկսեց գործածել իր սեփական փողը՝ **դրամը**, 1993 թվականի նոյեմբերին։ Անունը գալիս է մետաղադրամի հին բառից, որը կապված է հունական «դրախմա»-ի հետ։ Բրիտանիայում վճարում են ֆունտով և պենսով, Ռուսաստանում՝ ռուբլով և կոպեկով։ Վերևում կազմիր Մարիամի խնդրանքը։`,
      `**The baker's — чей?** В британском английском «the baker's» — это сокращение от «the baker's **shop**», магазин, который принадлежит пекарю. Поэтому там 's: the butcher's, the chemist's, the greengrocer's. Можно сказать и «I'm going to the dentist's».

**Драм — молодая валюта.** Армения начала пользоваться собственными деньгами, **драмом**, в ноябре 1993 года. Название идёт от старого слова для монеты, родственного греческой «драхме». В Британии платят фунтами и пенсами, в России — рублями и копейками. Собери просьбу Мариам выше.`,
    ),
    ask(3, {
      en: ["Make it polite: «Give me milk.»", ["Milk now!", "I want milk.", "Can I have some milk, please?"], "Can I have…, please? is the polite way to ask."],
      hy: ["Դարձրու քաղաքավարի․ «Give me milk.»", ["Milk now!", "I want milk.", "Can I have some milk, please?"], "Can I have…, please?-ն քաղաքավարի խնդրելու ձևն է։"],
      ru: ["Скажи вежливо: «Give me milk.»", ["Milk now!", "I want milk.", "Can I have some milk, please?"], "Can I have…, please? — вежливая просьба."],
    }),
  ],
  "numbers-to-100": [
    "place n=375",
    closer(
      `**British «and».** In Britain people say «three hundred **and** seventy-five». Americans often leave out the «and»: «three hundred seventy-five». Both are understood everywhere. And «hundred» never takes -s after a number: five hundred, not «five hundreds».

**Read big prices in chunks.** 1250 drams is «one thousand two hundred **and** fifty», or, in everyday speech, «twelve hundred and fifty». £3.50 is «three pounds fifty». Build 375 with the blocks above: three hundreds, seven tens, five ones.`,
      `**Բրիտանական «and»։** Բրիտանիայում ասում են «three hundred **and** seventy-five»։ Ամերիկացիները հաճախ բաց են թողնում «and»-ը՝ «three hundred seventy-five»։ Երկուսն էլ ամենուր հասկանալի են։ Իսկ «hundred»-ը թվից հետո երբեք -s չի ստանում՝ five hundred, ոչ թե «five hundreds»։

**Մեծ գները կարդա մասերով։** 1250 դրամը «one thousand two hundred **and** fifty» է, իսկ առօրյա խոսքում՝ «twelve hundred and fifty»։ £3.50-ը «three pounds fifty» է։ Վերևի խորանարդիկներով կազմիր 375-ը՝ երեք հարյուրյակ, յոթ տասնյակ, հինգ միավոր։`,
      `**Британское «and».** В Британии говорят «three hundred **and** seventy-five». Американцы часто опускают «and»: «three hundred seventy-five». Оба варианта понятны везде. А «hundred» после числа никогда не получает -s: five hundred, а не «five hundreds».

**Большие цены читай частями.** 1250 драмов — «one thousand two hundred **and** fifty», а в обычной речи — «twelve hundred and fifty». £3.50 — «three pounds fifty». Собери 375 из кубиков выше: три сотни, семь десятков, пять единиц.`,
    ),
    ask(2, {
      en: ["How do you say 640 in British English?", ["six hundreds forty", "six hundred and forty", "sixty-four hundred"], "Hundred has no -s; British English adds and."],
      hy: ["Ինչպե՞ս է 640-ը բրիտանական անգլերենում։", ["six hundreds forty", "six hundred and forty", "sixty-four hundred"], "Hundred-ը -s չունի, բրիտանական անգլերենն ավելացնում է and։"],
      ru: ["Как сказать 640 по-британски?", ["six hundreds forty", "six hundred and forty", "sixty-four hundred"], "У hundred нет -s, британцы добавляют and."],
    }),
  ],
  "was-were": [
    "forms mode=persons lang=en I_[was] you_[were] he_[was] we_[were] you_[were] they_[were]",
    closer(
      `**Only two forms.** Am, is and are become just **was** and **were**: I and he/she/it take **was**, everyone else takes **were**. Russian changes the past by gender and number («был, была, было, были»), and Armenian by person («էի, էիր, էր…»). English has just two.

**Last night, not yesterday night.** English says **yesterday** morning, yesterday afternoon, yesterday evening, but **last night**. Other time words: last week, last year, two days **ago**. Look at the table and say where you were last Saturday.`,
      `**Ընդամենն երկու ձև։** Am, is և are-ը դառնում են ընդամենը **was** և **were**․ I-ը և he/she/it-ը ստանում են **was**, մնացածը՝ **were**։ Հայերենն անցյալը փոխում է ըստ դեմքի («էի, էիր, էր…»), ռուսերենը՝ ըստ սեռի և թվի («был, была, было, были»)։ Անգլերենն ունի ընդամենն երկուսը։

**Last night, ոչ թե yesterday night։** Անգլերենն ասում է **yesterday** morning, yesterday afternoon, yesterday evening, բայց **last night**։ Ժամանակի այլ բառեր՝ last week, last year, two days **ago**։ Նայիր աղյուսակին և ասա, թե որտեղ էիր անցյալ շաբաթ օրը։`,
      `**Всего две формы.** Am, is и are превращаются всего в **was** и **were**: I и he/she/it берут **was**, все остальные — **were**. Русский меняет прошедшее время по роду и числу («был, была, было, были»), армянский — по лицам («էի, էիր, էր…»). В английском всего две формы.

**Last night, а не yesterday night.** По-английски **yesterday** morning, yesterday afternoon, yesterday evening, но **last night**. Другие слова времени: last week, last year, two days **ago**. Посмотри на таблицу и скажи, где ты был в прошлую субботу.`,
    ),
    ask(3, {
      en: ["Correct: «Yesterday night I were at home.»", ["Yesterday night I was at home.", "Last night I were at home.", "Last night I was at home."], "Last night, and I takes was."],
      hy: ["Ուղղիր․ «Yesterday night I were at home.»", ["Yesterday night I was at home.", "Last night I were at home.", "Last night I was at home."], "Last night, և I-ի հետ was է։"],
      ru: ["Исправь: «Yesterday night I were at home.»", ["Yesterday night I was at home.", "Last night I were at home.", "Last night I was at home."], "Last night, и с I — was."],
    }),
  ],
  "past-simple-regular": [
    "forms mode=compare cols=edsound walked:played:wanted helped:cleaned:visited watched:opened:needed",
    closer(
      `**One ending, three sounds.** The spelling is always -ed, but the sound changes. After voiceless sounds (k, p, ch, sh) it is [t]: walk**ed**. After voiced sounds and vowels it is [d]: play**ed**. Only after t and d does it make a new syllable [ɪd]: want**ed**, need**ed**. Never say «walk-ed» with two syllables.

**The same for everybody.** Russian past changes by gender: «он играл», «она играла». Armenian changes by person: «խաղացի, խաղացիր, խաղաց». English uses one form for all: I play**ed**, she play**ed**, they play**ed**. Hide a column above and say each verb with the right sound.`,
      `**Մեկ վերջավորություն՝ երեք հնչյուն։** Գրությունը միշտ -ed է, բայց հնչյունը փոխվում է։ Խուլ հնչյուններից (k, p, ch, sh) հետո այն [t] է՝ walk**ed**։ Ձայնեղ հնչյուններից և ձայնավորներից հետո՝ [d]՝ play**ed**։ Միայն t-ից և d-ից հետո է այն նոր վանկ կազմում [ɪd]՝ want**ed**, need**ed**։ Երբեք մի՛ ասա «walk-ed»՝ երկու վանկով։

**Նույնը բոլորի համար։** Հայերենն անցյալը փոխում է ըստ դեմքի՝ «խաղացի, խաղացիր, խաղաց», ռուսերենը՝ ըստ սեռի՝ «он играл», «она играла»։ Անգլերենը բոլորի համար գործածում է մեկ ձև՝ I play**ed**, she play**ed**, they play**ed**։ Թաքցրու վերևի սյունակներից մեկը և ամեն բայ ասա ճիշտ հնչյունով։`,
      `**Одно окончание — три звука.** Пишется всегда -ed, а звучит по-разному. После глухих звуков (k, p, ch, sh) — [t]: walk**ed**. После звонких и гласных — [d]: play**ed**. Только после t и d получается новый слог [ɪd]: want**ed**, need**ed**. Никогда не говори «walk-ed» в два слога.

**Одинаково для всех.** Русское прошедшее время меняется по роду: «он играл», «она играла». Армянское — по лицам: «խաղացի, խաղացիր, խաղաց». В английском одна форма для всех: I play**ed**, she play**ed**, they play**ed**. Спрячь столбец выше и произнеси каждый глагол с правильным звуком.`,
    ),
    ask(3, {
      en: ["In which verb does -ed make an extra syllable?", ["cooked", "played", "visited"], "Only after t or d: visit-ed."],
      hy: ["Ո՞ր բայում է -ed-ը լրացուցիչ վանկ կազմում։", ["cooked", "played", "visited"], "Միայն t-ից կամ d-ից հետո՝ visit-ed։"],
      ru: ["В каком глаголе -ed даёт лишний слог?", ["cooked", "played", "visited"], "Только после t или d: visit-ed."],
    }),
  ],
  "did-you-questions": [
    "forms mode=verbs go:went:gone see:saw:seen eat:ate:eaten have:had:had get:got:got do:did:done",
    closer(
      `**«Went» was borrowed.** The old past of «go» disappeared long ago. English took «went» from another verb, «wend» (to make your way), which still lives in the phrase «to wend your way home». That is why go and went look nothing alike. Hide the V2 column above and say the past forms.

**Did carries the past.** In a question or a negative, **did** shows the past, so the main verb goes back to its first form: «**Did** you **go**?», «I **didn't see** him». «Did you went» has the past twice, and English allows it only once.`,
      `**«Went»-ը փոխառված է։** «Go»-ի հին անցյալ ձևը վաղուց անհետացել է։ Անգլերենը «went»-ը վերցրեց մեկ այլ բայից՝ «wend»-ից (ճանապարհ ընկնել), որը դեռ ապրում է «to wend your way home» արտահայտության մեջ։ Ահա թե ինչու go-ն և went-ը բոլորովին իրար նման չեն։ Թաքցրու վերևի V2 սյունակը և ասա անցյալի ձևերը։

**Did-ն է կրում անցյալը։** Հարցում կամ ժխտումում **did**-ն է ցույց տալիս անցյալը, ուստի հիմնական բայը վերադառնում է իր առաջին ձևին՝ «**Did** you **go**?», «I **didn't see** him»։ «Did you went»-ում անցյալն երկու անգամ է, իսկ անգլերենն այն թույլ է տալիս միայն մեկ անգամ։`,
      `**«Went» взято взаймы.** Старое прошедшее время от «go» давно исчезло. Английский взял «went» у другого глагола, «wend» (направляться), который до сих пор живёт в выражении «to wend your way home». Поэтому go и went совсем не похожи. Спрячь столбец V2 выше и назови формы прошедшего времени.

**Did несёт прошедшее время.** В вопросе и отрицании прошедшее показывает **did**, поэтому основной глагол возвращается в первую форму: «**Did** you **go**?», «I **didn't see** him». В «Did you went» прошедшее время дважды, а английский разрешает его только один раз.`,
    ),
    ask(1, {
      en: ["Correct: «Did you went to the park?»", ["Did you go to the park?", "Did you goed to the park?", "You did went to the park?"], "Did shows the past; the verb goes back to go."],
      hy: ["Ուղղիր․ «Did you went to the park?»", ["Did you go to the park?", "Did you goed to the park?", "You did went to the park?"], "Did-ն է ցույց տալիս անցյալը, բայը վերադառնում է go ձևին։"],
      ru: ["Исправь: «Did you went to the park?»", ["Did you go to the park?", "Did you goed to the park?", "You did went to the park?"], "Did показывает прошлое, глагол возвращается к go."],
    }),
  ],
  "will-future": [
    "tense name=future-simple aspects=simple",
    closer(
      `**«Will» used to mean «want».** In old English «will» meant «to want», and you can still see it in «free will» and «willing» (ready and happy to do something). Slowly «I will go» changed from «I want to go» to «I am going to go later». **Won't** comes from an old form, «wol not».

**Past, present, future on one line.** Switch the times above: past simple is a dot behind «now», present simple is dots everywhere, future simple is a dot ahead. The verb after will never changes: «She will **come**», never «will comes» or «will to come».`,
      `**«Will»-ը նշանակում էր «ուզել»։** Հին անգլերենում «will»-ը նշանակում էր «ուզել», և դա դեռ երևում է «free will» (ազատ կամք) և «willing» (պատրաստակամ) բառերում։ Աստիճանաբար «I will go»-ն «ուզում եմ գնալ»-ից դարձավ «ավելի ուշ կգնամ»։ **Won't**-ը գալիս է հին «wol not» ձևից։

**Անցյալ, ներկա, ապառնի՝ մեկ գծի վրա։** Վերևում փոխիր ժամանակները․ past simple-ը կետ է «հիմա»-ից հետ, present simple-ը կետեր են ամենուր, future simple-ը՝ կետ առջևում։ Will-ից հետո բայն երբեք չի փոխվում՝ «She will **come**», երբեք՝ «will comes» կամ «will to come»։`,
      `**«Will» когда-то значило «хотеть».** В древнеанглийском «will» значило «хотеть», и это до сих пор видно в «free will» (свобода воли) и «willing» (готовый, охотно). Постепенно «I will go» из «хочу пойти» стало «пойду позже». **Won't** — от старой формы «wol not».

**Прошлое, настоящее, будущее на одной линии.** Переключай время выше: past simple — точка позади «сейчас», present simple — точки повсюду, future simple — точка впереди. Глагол после will никогда не меняется: «She will **come**», а не «will comes» и не «will to come».`,
    ),
    ask(2, {
      en: ["Choose the correct sentence.", ["He will comes tomorrow.", "He will come tomorrow.", "He will to come tomorrow."], "After will: the bare verb."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["He will comes tomorrow.", "He will come tomorrow.", "He will to come tomorrow."], "Will-ից հետո՝ բայի պարզ ձևը։"],
      ru: ["Выбери правильное предложение.", ["He will comes tomorrow.", "He will come tomorrow.", "He will to come tomorrow."], "После will — голый глагол."],
    }),
  ],
  "holidays-celebrations": [
    "forms mode=compare cols=enhyru Happy_birthday:Ծնունդդ_շնորհավոր:С_днём_рождения Happy_New_Year:Շնորհավոր_Նոր_տարի:С_Новым_годом Happy_Easter:Շնորհավոր_Սուրբ_Զատիկ:Со_Светлой_Пасхой",
    closer(
      `**Vardavar moves every year.** Vardavar is celebrated 98 days after Easter, so its date changes from year to year, but it is always in summer. The church feast is the Transfiguration, and the water splashing is a very old custom that people link with Astghik, the ancient Armenian goddess of love and water.

**Halloween's lanterns were turnips.** «Halloween» is short for «All Hallows' Eve», the evening before All Saints' Day. In Ireland and Scotland people carved faces into **turnips** and put candles inside. In America pumpkins were bigger and easier to carve, and the pumpkin lantern travelled back to Europe. Hide a column above and say the greeting in another language.`,
      `**Վարդավառն ամեն տարի «շարժվում» է։** Վարդավառը նշվում է Զատիկից 98 օր հետո, ուստի նրա ամսաթիվը տարեցտարի փոխվում է, բայց այն միշտ ամռանն է։ Եկեղեցական տոնը Պայծառակերպությունն է, իսկ ջուր ցողելը շատ հին սովորույթ է, որը կապում են Աստղիկի՝ սիրո և ջրի հին հայկական աստվածուհու հետ։

**Հելոուինի լապտերները շաղգամ էին։** «Halloween»-ը «All Hallows' Eve»-ի կրճատ ձևն է՝ Բոլոր սրբերի օրվա նախորդ երեկոն։ Իռլանդիայում և Շոտլանդիայում մարդիկ դեմքեր էին փորագրում **շաղգամների** վրա և մեջը մոմ դնում։ Ամերիկայում դդումներն ավելի մեծ էին և հեշտ էր փորագրել, և դդմե լապտերը վերադարձավ Եվրոպա։ Թաքցրու վերևի սյունակներից մեկը և ասա շնորհավորանքը մեկ այլ լեզվով։`,
      `**Вардавар каждый год «переезжает».** Вардавар празднуют через 98 дней после Пасхи, поэтому его дата меняется, но он всегда летом. Церковный праздник — Преображение, а обливание водой — очень древний обычай, который связывают с Астхик, древнеармянской богиней любви и воды.

**Фонари Хэллоуина были из репы.** «Halloween» — сокращение от «All Hallows' Eve», вечер накануне Дня всех святых. В Ирландии и Шотландии вырезали лица на **репе** и ставили внутрь свечу. В Америке тыквы были крупнее и их было легче резать, и тыквенный фонарь вернулся в Европу. Спрячь столбец выше и скажи поздравление на другом языке.`,
    ),
    ask(2, {
      en: ["What did the first Halloween lanterns in Ireland use?", ["pumpkins", "turnips", "apples"], "Turnips first; pumpkins came later in America."],
      hy: ["Ինչի՞ց էին պատրաստում Հելոուինի առաջին լապտերներն Իռլանդիայում։", ["pumpkins", "turnips", "apples"], "Նախ՝ շաղգամ, դդումներն եկան ավելի ուշ՝ Ամերիկայում։"],
      ru: ["Из чего делали первые фонари на Хэллоуин в Ирландии?", ["pumpkins", "turnips", "apples"], "Сначала из репы, тыквы появились позже в Америке."],
    }),
  ],
  "year-4-review": [
    "tense name=present-simple aspects=simple,continuous times=past,present,future",
    closer(
      `**Four tenses, one time line.** Use the switches above to visit all four tenses of the year: present simple (dots everywhere: habits), present continuous (a wave on «now»), past simple (a dot in the past) and future simple with will (a dot ahead). Time words are your signposts: every day, now, yesterday, tomorrow.

**How to write to a pen friend.** Start with «Dear Tom,» and a comma. Introduce yourself, then tell about your day, what you are doing now, something from the past and a plan. End with a question («Please write back and tell me about…») and «Best wishes,» before your name. Lilit's letter uses all four tenses: find them.`,
      `**Չորս ժամանակաձև՝ մեկ առանցք։** Վերևի անջատիչներով այցելիր տարվա բոլոր չորս ժամանակաձևերին՝ present simple (կետեր ամենուր՝ սովորություններ), present continuous (ալիք «հիմա»-ի վրա), past simple (կետ անցյալում) և future simple will-ով (կետ առջևում)։ Ժամանակի բառերը քո ուղենիշներն են՝ every day, now, yesterday, tomorrow։

**Ինչպես գրել նամակընկերոջը։** Սկսիր «Dear Tom,»-ով և ստորակետով։ Ներկայացրու քեզ, հետո պատմիր քո օրվա մասին, թե ինչ ես անում հիմա, ինչ-որ բան անցյալից և մի ծրագիր։ Ավարտիր հարցով («Please write back and tell me about…») և անունիցդ առաջ գրիր «Best wishes,»։ Լիլիթի նամակում գործածված են բոլոր չորս ժամանակաձևերը․ գտիր դրանք։`,
      `**Четыре времени — одна линия.** Переключателями выше обойди все четыре времени года: present simple (точки повсюду — привычки), present continuous (волна на «сейчас»), past simple (точка в прошлом) и future simple с will (точка впереди). Слова времени — твои указатели: every day, now, yesterday, tomorrow.

**Как писать другу по переписке.** Начни с «Dear Tom,» и запятой. Представься, расскажи о своём дне, о том, что делаешь сейчас, о чём-то из прошлого и о планах. Закончи вопросом («Please write back and tell me about…») и «Best wishes,» перед именем. В письме Лилит есть все четыре времени — найди их.`,
    ),
    ask(1, {
      en: ["«Yesterday I ___ to the shop.»", ["went", "go", "will go"], "Yesterday: past simple, went."],
      hy: ["«Yesterday I ___ to the shop.»", ["went", "go", "will go"], "Yesterday՝ past simple՝ went։"],
      ru: ["«Yesterday I ___ to the shop.»", ["went", "go", "will go"], "Yesterday — past simple: went."],
    }),
  ],
};
