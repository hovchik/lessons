import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade6: VisualMap[number] = {
  "house-and-furniture-6": [
    "forms mode=compare cols=brame flat:apartment ground_floor:first_floor first_floor:second_floor wardrobe:closet tap:faucet",
    closer(
      `**Which floor is the first?** In Britain the floor at street level is the **ground floor**, and the one above it is the **first floor**. Americans call the street-level floor the **first floor**. Armenian and Russian count like Americans: «առաջին հարկ» and «первый этаж» are at street level. So if a British friend lives "on the first floor", climb one flight of stairs.

**House or home?** A **house** is a building. **Home** is the place where you live and feel you belong, whether it is a house, a flat or a tent. That is why we say *go **home***, with no **to** and no article. Armenian makes the same split with **տուն** and the warmer «**տուն-տեղ**», and Russian with **дом** and «**домой**».`,
      `**Ո՞ր հարկն է առաջինը։** Բրիտանիայում փողոցի մակարդակի հարկը **ground floor** է, իսկ դրանից վերևինը՝ **first floor**։ Ամերիկացիները փողոցի մակարդակի հարկն անվանում են **first floor**։ Հայերենն ու ռուսերենը հաշվում են ամերիկացիների պես՝ «առաջին հարկ» և «первый этаж» փողոցի մակարդակում են։ Այնպես որ, եթե բրիտանացի ընկերդ ապրում է «on the first floor», բարձրացիր մեկ հարկ։

**House, թե՞ home։** **House**-ը շենք է։ **Home**-ը այն վայրն է, որտեղ ապրում ես և զգում, որ քոնն է՝ լինի դա տուն, բնակարան, թե վրան։ Ահա թե ինչու ասում ենք *go **home***՝ առանց **to**-ի և առանց հոդի։ Հայերենն էլ ունի **տուն** և ավելի ջերմ «**տուն-տեղ**», ռուսերենը՝ **дом** և «**домой**»։`,
      `**Какой этаж первый?** В Британии этаж на уровне улицы — **ground floor**, а следующий над ним — **first floor**. Американцы называют этаж на уровне улицы **first floor**. Армянский и русский считают как американцы: «առաջին հարկ» и «первый этаж» — на уровне улицы. Так что если британский друг живёт «on the first floor», поднимись на один пролёт.

**House или home?** **House** — это здание. **Home** — место, где ты живёшь и чувствуешь себя своим, будь то дом, квартира или палатка. Поэтому говорят *go **home*** — без **to** и без артикля. В армянском есть **տուն** и более тёплое «**տուն-տեղ**», в русском — **дом** и «**домой**».`,
    ),
    ask(2, {
      en: ["A British flat «on the first floor» is…", ["at street level", "one floor above street level", "under the ground"], "In Britain the street-level floor is the ground floor."],
      hy: ["Բրիտանական բնակարանը «on the first floor» գտնվում է…", ["at street level", "one floor above street level", "under the ground"], "Բրիտանիայում փողոցի մակարդակի հարկը ground floor է։"],
      ru: ["Британская квартира «on the first floor» находится…", ["at street level", "one floor above street level", "under the ground"], "В Британии этаж на уровне улицы — ground floor."],
    }),
  ],
  "housework-have-to": [
    "forms mode=compare cols=domake the_washing-up:the_bed the_ironing:breakfast the_shopping:a_cake homework:a_mess",
    closer(
      `**Do or make?** Both verbs mean «անել» and «делать», which is why learners mix them up. A simple test: if something new appears that was not there before, use **make** (*make a cake*, *make a mess*, *make breakfast*). For jobs and routines, use **do** (*do the washing-up*, *do the shopping*, *do homework*). Some pairs, like *make the bed*, just have to be learnt.

**Have to has a past and a future.** **Must** has only one form, but **have to** changes: *I **have to** tidy my room*, *Yesterday I **had to** wash the car*, *Tomorrow I'**ll have to** get up early*. In questions and negatives it needs **do**: *Do you have to cook?* *I don't have to iron.*`,
      `**Do, թե՞ make։** Երկու բայն էլ նշանակում են «անել» (ռուսերեն՝ «делать»), ահա թե ինչու սովորողները շփոթում են դրանք։ Պարզ ստուգում՝ եթե հայտնվում է նոր բան, որ նախկինում չկար, գործածիր **make** (*make a cake*, *make a mess*, *make breakfast*)։ Գործերի և առօրյա աշխատանքի համար գործածիր **do** (*do the washing-up*, *do the shopping*, *do homework*)։ Որոշ զույգեր, ինչպես *make the bed*-ը, պարզապես պետք է անգիր անել։

**Have to-ն ունի անցյալ և ապառնի։** **Must**-ն ունի միայն մեկ ձև, իսկ **have to**-ն փոխվում է՝ *I **have to** tidy my room*, *Yesterday I **had to** wash the car*, *Tomorrow I'**ll have to** get up early*։ Հարցում և ժխտման մեջ նրան պետք է **do**՝ *Do you have to cook?* *I don't have to iron.*`,
      `**Do или make?** Оба глагола значат «делать» (по-армянски «անել»), поэтому их путают. Простая проверка: если появляется что-то новое, чего раньше не было, бери **make** (*make a cake*, *make a mess*, *make breakfast*). Для дел и рутины бери **do** (*do the washing-up*, *do the shopping*, *do homework*). Некоторые пары, вроде *make the bed*, просто надо выучить.

**У have to есть прошедшее и будущее.** У **must** только одна форма, а **have to** меняется: *I **have to** tidy my room*, *Yesterday I **had to** wash the car*, *Tomorrow I'**ll have to** get up early*. В вопросах и отрицаниях ему нужен **do**: *Do you have to cook?* *I don't have to iron.*`,
    ),
    ask(3, {
      en: ["Complete: «Every Saturday I ___ the shopping.»", ["make", "have", "do"], "Shopping is a job: do the shopping."],
      hy: ["Լրացրու՝ «Every Saturday I ___ the shopping.»", ["make", "have", "do"], "Գնումները գործ են՝ do the shopping։"],
      ru: ["Дополни: «Every Saturday I ___ the shopping.»", ["make", "have", "do"], "Покупки — это дело: do the shopping."],
    }),
  ],
  "possessive-pronouns": [
    "forms mode=persons lang=en [mine] [yours] [his],_[hers],_[its] [ours] [yours] [theirs]",
    closer(
      `**No apostrophes, ever.** **Hers**, **ours**, **yours** and **theirs** end in **-s** but never take an apostrophe: *This bag is **hers***, not *her's*. **Its** follows the same rule. Possessive pronouns stand alone, without a noun after them: *my book* but *the book is **mine***.

**A friend of mine.** English says *a friend **of mine***, not *a friend of me* and not *a my friend*. Armenian and Russian use the same word with or without a noun: «Սա իմ գիրքն է» / «Գիրքն իմն է», «Это моя книга» / «Книга моя». English needs two different sets: **my** before a noun, **mine** alone.`,
      `**Երբեք ապաթարց։** **Hers**, **ours**, **yours** և **theirs** ավարտվում են **-s**-ով, բայց երբեք ապաթարց չեն ստանում՝ *This bag is **hers***, ոչ թե *her's*։ **Its**-ը ենթարկվում է նույն կանոնին։ Ստացական դերանուններն օգտագործվում են ինքնուրույն, առանց գոյականի՝ *my book*, բայց *the book is **mine***։

**A friend of mine։** Անգլերենն ասում է *a friend **of mine***, ոչ թե *a friend of me* և ոչ թե *a my friend*։ Հայերենն ու ռուսերենը նույն բառն են գործածում գոյականով կամ առանց գոյականի՝ «Սա իմ գիրքն է» / «Գիրքն իմն է», «Это моя книга» / «Книга моя»։ Անգլերենին պետք է երկու տարբեր շարք՝ **my** գոյականից առաջ, **mine**՝ ինքնուրույն։`,
      `**Никаких апострофов.** **Hers**, **ours**, **yours** и **theirs** кончаются на **-s**, но апострофа не получают никогда: *This bag is **hers***, а не *her's*. **Its** подчиняется тому же правилу. Притяжательные местоимения стоят самостоятельно, без существительного: *my book*, но *the book is **mine***.

**A friend of mine.** По-английски *a friend **of mine***, а не *a friend of me* и не *a my friend*. Армянский и русский используют одно слово с существительным и без: «Սա իմ գիրքն է» / «Գիրքն իմն է», «Это моя книга» / «Книга моя». Английскому нужны два разных ряда: **my** перед существительным, **mine** — отдельно.`,
    ),
    ask(1, {
      en: ["Complete: «Is this pen yours?» – «No, it's ___.»", ["hers", "her's", "her"], "Alone, without a noun: hers, with no apostrophe."],
      hy: ["Լրացրու՝ «Is this pen yours?» – «No, it's ___.»", ["hers", "her's", "her"], "Ինքնուրույն, առանց գոյականի՝ hers, առանց ապաթարցի։"],
      ru: ["Дополни: «Is this pen yours?» – «No, it's ___.»", ["hers", "her's", "her"], "Отдельно, без существительного: hers, без апострофа."],
    }),
  ],
  "ordinal-numbers-dates": [
    "forms mode=compare cols=ordinal 1:first:1st 2:second:2nd 3:third:3rd 5:fifth:5th 12:twelfth:12th 21:twenty-first:21st",
    closer(
      `**Is 5/4 April or May?** In Britain **5/4/2026** means the 5th of April; in the USA it means May the 4th. Armenia and Russia write the day first, like the British: 05.04.2026. The international standard **2026-04-05** puts the year first and avoids the confusion completely, which is why computers love it.

**Three old words.** **First**, **second** and **third** do not look like **one**, **two** and **three** at all. **Second** came from French and Latin *secundus*, "following". Armenian ordinals are all regular except **առաջին**, with **-րորդ** or **-երորդ**: *երկրորդ*, *չորրորդ*, *հինգերորդ*; Russian ones change their endings like adjectives: *пятый*, *пятая*, *пятое*. Look at the table: **fifth** and **twelfth** lose their **ve** and get **f**.`,
      `**5/4-ը ապրի՞լ է, թե՞ մայիս։** Բրիտանիայում **5/4/2026** նշանակում է ապրիլի 5-ը, ԱՄՆ-ում՝ մայիսի 4-ը։ Հայաստանում և Ռուսաստանում օրը գրում են առաջինը, ինչպես բրիտանացիները՝ 05.04.2026։ Միջազգային **2026-04-05** ստանդարտը տարին դնում է առաջինը և ամբողջովին վերացնում շփոթը, ահա թե ինչու համակարգիչները սիրում են այն։

**Երեք հին բառ։** **First**, **second** և **third** բոլորովին նման չեն **one**, **two** և **three**-ին։ **Second**-ը եկել է ֆրանսերենից և լատիներեն *secundus*՝ «հաջորդող» բառից։ Հայերեն դասական թվականները բոլորը կանոնավոր են, բացի **առաջին**-ից՝ **-րորդ**, **-երորդ**՝ *երկրորդ*, *չորրորդ*, *հինգերորդ*, իսկ ռուսերենում փոխվում են ածականների պես՝ *пятый*, *пятая*, *пятое*։ Նայիր աղյուսակին՝ **fifth** և **twelfth** բառերը կորցնում են **ve**-ն և ստանում **f**։`,
      `**5/4 — это апрель или май?** В Британии **5/4/2026** значит 5 апреля, в США — 4 мая. В Армении и России день пишут первым, как британцы: 05.04.2026. Международный стандарт **2026-04-05** ставит год первым и полностью убирает путаницу, поэтому его любят компьютеры.

**Три старых слова.** **First**, **second** и **third** совсем не похожи на **one**, **two** и **three**. **Second** пришло из французского и латинского *secundus* — «следующий». Армянские порядковые все правильные, кроме **առաջին**: **-րորդ**, **-երորդ** (*երկրորդ*, *չորրորդ*, *հինգերորդ*), а русские изменяются как прилагательные: *пятый*, *пятая*, *пятое*. Посмотри на таблицу: **fifth** и **twelfth** теряют **ve** и получают **f**.`,
    ),
    ask(3, {
      en: ["How do you write «twenty-second» in short?", ["22th", "22st", "22nd"], "The short form takes the last two letters: second, 22nd."],
      hy: ["Ինչպե՞ս է կրճատ գրվում «twenty-second»-ը։", ["22th", "22st", "22nd"], "Կրճատ ձևը վերցնում է վերջին երկու տառը՝ second, 22nd։"],
      ru: ["Как кратко пишется «twenty-second»?", ["22th", "22st", "22nd"], "Сокращение берёт две последние буквы: second, 22nd."],
    }),
  ],
  "family-traditions": [
    "sentence mode=order keep=1 On New Year's Eve we always stay up until midnight .",
    closer(
      `**Two Christmases.** The Armenian Apostolic Church celebrates Christmas together with Epiphany on **6 January**, the oldest Christian custom. The Russian Orthodox Church celebrates it on **7 January**, because it still follows the old Julian calendar, and in Britain Christmas Day is **25 December**. So one family of friends in three countries can celebrate three times!

**Words for traditions.** English says **celebrate** a holiday, **lay the table**, **exchange presents** and **make a toast**. Armenian has the famous long toasts at a table led by a **թամադա**, and Russians say **тост** too: the word comes from English, where it once meant a piece of toast dropped into a glass of wine for flavour.`,
      `**Երկու Սուրբ Ծնունդ։** Հայ Առաքելական եկեղեցին Սուրբ Ծնունդը նշում է Աստվածահայտնության հետ միասին՝ **հունվարի 6-ին**, որն ամենահին քրիստոնեական սովորույթն է։ Ռուս ուղղափառ եկեղեցին այն նշում է **հունվարի 7-ին**, որովհետև դեռ հետևում է հին՝ Հուլյան օրացույցին, իսկ Բրիտանիայում Սուրբ Ծնունդը **դեկտեմբերի 25-ին** է։ Այնպես որ, երեք երկրներում ապրող ընկերները կարող են տոնել երեք անգամ։

**Ավանդույթների բառեր։** Անգլերենն ասում է **celebrate** տոն, **lay the table**, **exchange presents** և **make a toast**։ Հայկական սեղանին հայտնի են **թամադայի** գլխավորած երկար կենացները, ռուսներն էլ ասում են **тост**․ բառն եկել է անգլերենից, որտեղ ժամանակին նշանակում էր գինու մեջ գցված տապակած հացի կտոր՝ համի համար։`,
      `**Два Рождества.** Армянская Апостольская церковь празднует Рождество вместе с Богоявлением **6 января** — это самый древний христианский обычай. Русская православная церковь празднует его **7 января**, потому что следует старому юлианскому календарю, а в Британии Рождество — **25 декабря**. Так что друзья из трёх стран могут праздновать трижды!

**Слова о традициях.** По-английски **celebrate** праздник, **lay the table**, **exchange presents** и **make a toast**. Армянское застолье славится длинными тостами во главе с **тамадой**, а русские тоже говорят **тост**: слово пришло из английского, где когда-то означало кусочек поджаренного хлеба, который клали в бокал вина для вкуса.`,
    ),
    ask(2, {
      en: ["Why do we use the present simple for traditions?", ["They are happening now.", "They happen again and again.", "They happened once."], "Traditions repeat every year: present simple."],
      hy: ["Ինչո՞ւ ենք ավանդույթների համար գործածում present simple։", ["They are happening now.", "They happen again and again.", "They happened once."], "Ավանդույթները կրկնվում են ամեն տարի՝ present simple։"],
      ru: ["Почему для традиций используют present simple?", ["They are happening now.", "They happen again and again.", "They happened once."], "Традиции повторяются каждый год: present simple."],
    }),
  ],
  "describing-my-home-6": [
    "sentence mode=order There is a desk next to the window .",
    closer(
      `**Is or are? Look at the first noun.** After **there**, the verb agrees with the noun that comes next: *There **is** a sofa and two chairs* (a sofa), but *There **are** two chairs and a sofa* (two chairs). Armenian chooses **կա** or **կան** in a similar way, and Russian simply says **есть** or leaves the verb out: «В комнате диван и два стула».

**Prepositions draw a map.** **Next to**, **opposite**, **between**, **above**, **under**, **in the corner**: with these words you can describe a room so well that someone could draw it. Try it: describe your room in five sentences and ask a friend to sketch it. Then compare the drawing with the real room.`,
      `**Is, թե՞ are։ Նայիր առաջին գոյականին։** **There**-ից հետո բայը համաձայնվում է հաջորդ գոյականի հետ՝ *There **is** a sofa and two chairs* (a sofa), բայց *There **are** two chairs and a sofa* (two chairs)։ Հայերենը նման ձևով ընտրում է **կա** կամ **կան**, իսկ ռուսերենը պարզապես ասում է **есть** կամ բաց է թողնում բայը՝ «В комнате диван и два стула»։

**Նախդիրները քարտեզ են գծում։** **Next to**, **opposite**, **between**, **above**, **under**, **in the corner**․ այս բառերով կարող ես սենյակն այնպես նկարագրել, որ մեկը կարողանա այն նկարել։ Փորձիր՝ նկարագրիր սենյակդ հինգ նախադասությամբ և խնդրիր ընկերոջդ ուրվագծել այն։ Հետո համեմատիր նկարն իրական սենյակի հետ։`,
      `**Is или are? Смотри на первое существительное.** После **there** глагол согласуется со следующим существительным: *There **is** a sofa and two chairs* (a sofa), но *There **are** two chairs and a sofa* (two chairs). Армянский похоже выбирает **կա** или **կան**, а русский просто говорит **есть** или опускает глагол: «В комнате диван и два стула».

**Предлоги рисуют карту.** **Next to**, **opposite**, **between**, **above**, **under**, **in the corner**: этими словами можно описать комнату так, что её смогут нарисовать. Попробуй: опиши свою комнату в пяти предложениях и попроси друга набросать её. Потом сравни рисунок с настоящей комнатой.`,
    ),
    ask(1, {
      en: ["Complete: «There ___ a lamp and two books on the desk.»", ["is", "are", "be"], "The first noun is a lamp, so: there is."],
      hy: ["Լրացրու՝ «There ___ a lamp and two books on the desk.»", ["is", "are", "be"], "Առաջին գոյականը a lamp է, ուրեմն՝ there is։"],
      ru: ["Дополни: «There ___ a lamp and two books on the desk.»", ["is", "are", "be"], "Первое существительное — a lamp, значит: there is."],
    }),
  ],
  "past-continuous": [
    "forms mode=persons lang=en [was]_reading [were]_reading [was]_reading [were]_reading [were]_reading [were]_reading",
    closer(
      `**The only verb that still changes like this.** **Was** and **were** are the only past forms in English that change by person: every other verb has one past form for everybody (*I went*, *they went*). **You were** is plural in form even when you speak to one person, because **you** was once only the plural pronoun; the old singular was **thou**.

**A photo of the past.** The past continuous is like a photo: it shows an action in the middle, at one moment in the past. *At eight o'clock I **was having** breakfast.* Armenian has a very close form: «Ժամն ութին ես նախաճաշում **էի**», the imperfect. Russian uses the imperfective aspect: «В восемь я **завтракал**».`,
      `**Միակ բայը, որ դեռ այսպես է փոխվում։** **Was**-ը և **were**-ը անգլերենում միակ անցյալ ձևերն են, որ փոխվում են ըստ դեմքի․ մնացած բոլոր բայերն ունեն մեկ անցյալ ձև բոլորի համար (*I went*, *they went*)։ **You were**-ը ձևով հոգնակի է, նույնիսկ երբ խոսում ես մեկ մարդու հետ, որովհետև **you**-ն ժամանակին միայն հոգնակի դերանուն էր․ հին եզակին **thou** էր։

**Լուսանկար՝ անցյալից։** Past continuous-ը լուսանկարի պես է․ ցույց է տալիս գործողությունն իր ընթացքի մեջտեղում՝ անցյալի մի պահի։ *At eight o'clock I **was having** breakfast.*։ Հայերենն ունի շատ մոտ ձև՝ «Ժամն ութին ես նախաճաշում **էի**», անկատարը։ Ռուսերենը գործածում է անկատար կերպը՝ «В восемь я **завтракал**»։`,
      `**Единственный глагол, который ещё так меняется.** **Was** и **were** — единственные формы прошедшего в английском, которые меняются по лицам: у всех остальных глаголов одна форма прошедшего для всех (*I went*, *they went*). **You were** по форме множественное, даже когда говоришь с одним человеком, потому что **you** когда-то было только местоимением множественного числа; старое единственное — **thou**.

**Фотография прошлого.** Past continuous похож на фотографию: он показывает действие в середине, в один момент прошлого. *At eight o'clock I **was having** breakfast.* В армянском есть очень близкая форма: «Ժամն ութին ես նախաճաշում **էի**» — прошедшее несовершенное. Русский использует несовершенный вид: «В восемь я **завтракал**».`,
    ),
    ask(2, {
      en: ["Complete: «At six o'clock my parents ___ dinner.»", ["was cooking", "were cooking", "cooking"], "Parents = they: were cooking."],
      hy: ["Լրացրու՝ «At six o'clock my parents ___ dinner.»", ["was cooking", "were cooking", "cooking"], "Parents = they՝ were cooking։"],
      ru: ["Дополни: «At six o'clock my parents ___ dinner.»", ["was cooking", "were cooking", "cooking"], "Parents = they: were cooking."],
    }),
  ],
  "past-continuous-questions-6": [
    "sentence mode=order What were you doing at eight o'clock ?",
    closer(
      `**The detective's question.** *What were you doing at eight o'clock last night?* is the classic question in detective stories, because it asks about one exact moment. Sherlock Holmes and Agatha Christie's Hercule Poirot ask it again and again. The answer is a picture of that moment: *I was watching TV.*

**Short answers repeat the helper.** English answers a yes/no question with the helper verb: *Were you sleeping?* – *Yes, I **was**.* / *No, I **wasn't**.* A bare *Yes* is fine, but *Yes, I was* sounds more natural and polite. Armenian and Russian repeat the main verb instead: «Քնա՞ծ էիր» – «Այո, քնած էի», «Ты спал?» – «Да, спал».`,
      `**Խուզարկուի հարցը։** *What were you doing at eight o'clock last night?* հարցը դետեկտիվ պատմությունների դասական հարցն է, որովհետև հարցնում է մեկ ճշգրիտ պահի մասին։ Շերլոկ Հոլմսը և Ագաթա Քրիստիի Էրքյուլ Պուարոն այն տալիս են նորից ու նորից։ Պատասխանն այդ պահի նկարն է՝ *I was watching TV.*

**Կարճ պատասխանները կրկնում են օժանդակ բայը։** Անգլերենն այո/ոչ հարցին պատասխանում է օժանդակ բայով՝ *Were you sleeping?* – *Yes, I **was**.* / *No, I **wasn't**.*։ Միայն *Yes*-ն էլ ճիշտ է, բայց *Yes, I was*-ը ավելի բնական և քաղաքավարի է հնչում։ Հայերենն ու ռուսերենը կրկնում են հիմնական բայը՝ «Քնա՞ծ էիր» – «Այո, քնած էի», «Ты спал?» – «Да, спал»։`,
      `**Вопрос сыщика.** *What were you doing at eight o'clock last night?* — классический вопрос детективов, ведь он про один точный момент. Шерлок Холмс и Эркюль Пуаро Агаты Кристи задают его снова и снова. Ответ — картинка этого момента: *I was watching TV.*

**Краткие ответы повторяют помощника.** На вопрос «да/нет» английский отвечает вспомогательным глаголом: *Were you sleeping?* – *Yes, I **was**.* / *No, I **wasn't**.* Просто *Yes* тоже можно, но *Yes, I was* звучит естественнее и вежливее. Армянский и русский повторяют основной глагол: «Քնա՞ծ էիր» – «Այո, քնած էի», «Ты спал?» – «Да, спал».`,
    ),
    ask(3, {
      en: ["«Was she reading?» Choose the short answer.", ["Yes, she reading.", "Yes, she did.", "Yes, she was."], "Repeat the helper: was."],
      hy: ["«Was she reading?» Ընտրիր կարճ պատասխանը։", ["Yes, she reading.", "Yes, she did.", "Yes, she was."], "Կրկնիր օժանդակ բայը՝ was։"],
      ru: ["«Was she reading?» Выбери краткий ответ.", ["Yes, she reading.", "Yes, she did.", "Yes, she was."], "Повтори помощника: was."],
    }),
  ],
  "when-while": [
    "tense name=past-continuous aspects=simple,continuous times=past",
    closer(
      `**While is a long time.** **While** comes from the Old English **hwīl**, "a period of time", the same word you hear in *for a while* and *once in a while*. So **while** likes the long action, in the past continuous: *While I **was walking** home…* **When** likes the short action that breaks in: *…**when** it started to rain.*

**Armenian and Russian.** Armenian has **երբ** (when) and **մինչ** or **մինչդեռ** (while); Russian has **когда** and **пока** or **в то время как**. In both languages the action in progress is in the imperfect or imperfective form, just like the English continuous. Switch between the two forms on the line above and see which one is the long wave and which is the dot.`,
      `**While-ը երկար ժամանակ է։** **While**-ը ծագում է հին անգլերեն **hwīl**՝ «ժամանակահատված» բառից, նույն բառը, որ լսում ես *for a while* և *once in a while* արտահայտություններում։ Այդ պատճառով **while**-ը սիրում է երկար գործողությունը՝ past continuous-ով՝ *While I **was walking** home…*։ **When**-ը սիրում է կարճ գործողությունը, որ ընդհատում է՝ *…**when** it started to rain.*

**Հայերեն և ռուսերեն։** Հայերենն ունի **երբ** և **մինչ** կամ **մինչդեռ**, ռուսերենը՝ **когда** և **пока** կամ **в то время как**։ Երկու լեզվում էլ ընթացքի մեջ գտնվող գործողությունն անկատար ձևով է, ճիշտ ինչպես անգլերեն continuous-ը։ Վերևի գծում փոխիր երկու ձևերը և տես, թե որն է երկար ալիքը, որը՝ կետը։`,
      `**While — это долго.** **While** происходит от древнеанглийского **hwīl** — «отрезок времени», того же слова, что в *for a while* и *once in a while*. Поэтому **while** любит длинное действие в past continuous: *While I **was walking** home…* А **when** любит короткое действие, которое врывается: *…**when** it started to rain.*

**Армянский и русский.** В армянском есть **երբ** и **մինչ** или **մինչդեռ**, в русском — **когда** и **пока** или **в то время как**. В обоих языках длящееся действие стоит в несовершенной форме, как английский continuous. Переключай формы на линии выше и посмотри, где длинная волна, а где точка.`,
    ),
    ask(1, {
      en: ["Complete: «___ I was doing my homework, the lights went out.»", ["While", "When", "During"], "While + the long action in progress."],
      hy: ["Լրացրու՝ «___ I was doing my homework, the lights went out.»", ["While", "When", "During"], "While + ընթացքի մեջ գտնվող երկար գործողություն։"],
      ru: ["Дополни: «___ I was doing my homework, the lights went out.»", ["While", "When", "During"], "While + длинное действие в процессе."],
    }),
  ],
  "past-simple-vs-continuous-6": [
    "sentence mode=order keep=1 I was walking home when it started to rain .",
    closer(
      `**Armenian already knows this.** Armenian has two past forms that work almost like the English pair: «կարդում **էի**» (I was reading, the imperfect) and «կարդ**ացի**» (I read, the aorist). Russian shows the same idea with aspect: «**читал**» and «**прочитал**». So if you can choose in your own language, you can choose in English.

**The long one and the short one.** In the sentence above, *was walking* is the long background action, and *started* is the short event that interrupts it. If both actions are short and follow each other, use the past simple twice: *I **opened** the door and **saw** a cat.*`,
      `**Հայերենն արդեն գիտի սա։** Հայերենն ունի անցյալի երկու ձև, որոնք աշխատում են գրեթե ինչպես անգլերենի զույգը՝ «կարդում **էի**» (անկատար) և «կարդ**ացի**» (անցյալ կատարյալ)։ Ռուսերենը նույն գաղափարը ցույց է տալիս կերպով՝ «**читал**» և «**прочитал**»։ Այնպես որ, եթե կարողանում ես ընտրել քո լեզվում, կկարողանաս ընտրել նաև անգլերենում։

**Երկարը և կարճը։** Վերևի նախադասության մեջ *was walking*-ը երկար ֆոնային գործողությունն է, իսկ *started*-ը՝ կարճ իրադարձությունը, որն ընդհատում է այն։ Եթե երկու գործողությունն էլ կարճ են և հաջորդում են իրար, երկու անգամ գործածիր past simple՝ *I **opened** the door and **saw** a cat.*`,
      `**Армянский это уже знает.** В армянском есть две формы прошедшего, которые работают почти как английская пара: «կարդում **էի**» (читал, был в процессе) и «կարդ**ացի**» (прочитал, однократное). Русский выражает ту же идею видом: «**читал**» и «**прочитал**». Так что если ты умеешь выбирать в родном языке, сумеешь и в английском.

**Длинное и короткое.** В предложении выше *was walking* — длинное фоновое действие, а *started* — короткое событие, которое его прерывает. Если оба действия короткие и идут одно за другим, ставь past simple дважды: *I **opened** the door and **saw** a cat.*`,
    ),
    ask(2, {
      en: ["Complete: «She ___ when the phone rang.»", ["slept", "was sleeping", "sleeps"], "The long action interrupted by the phone: was sleeping."],
      hy: ["Լրացրու՝ «She ___ when the phone rang.»", ["slept", "was sleeping", "sleeps"], "Հեռախոսի ընդհատած երկար գործողություն՝ was sleeping։"],
      ru: ["Дополни: «She ___ when the phone rang.»", ["slept", "was sleeping", "sleeps"], "Длинное действие, которое прервал телефон: was sleeping."],
    }),
  ],
  "time-sequencers-6": [
    "sentence mode=order After that we went to the museum .",
    closer(
      `**A false friend: eventually.** English **eventually** means "in the end, after a long time": *We waited for hours, and eventually the bus came.* It does not mean "possibly", although similar words in French (*éventuellement*) and German (*eventuell*) do. Russian **эвентуально** means "possibly" too, so it is a trap for Russian speakers as well.

**Finally or at last?** **Finally** simply marks the last step of a story or a list. **At last** adds feeling: you waited and you are glad it is over. *At last the holidays have started!* Armenian **վերջապես** and Russian **наконец** cover both, so listen to the feeling of the sentence before you choose.`,
      `**Կեղծ ընկեր՝ eventually։** Անգլերեն **eventually**-ն նշանակում է «վերջիվերջո, երկար ժամանակ անց»՝ *We waited for hours, and eventually the bus came.*։ Այն չի նշանակում «հնարավոր է», թեև նման բառերը ֆրանսերենում (*éventuellement*) և գերմաներենում (*eventuell*) հենց այդ իմաստն ունեն։ Ռուսերեն **эвентуально**-ն նույնպես նշանակում է «հնարավոր է», ուստի սա թակարդ է նաև ռուսախոսների համար։

**Finally, թե՞ at last։** **Finally**-ն պարզապես նշում է պատմության կամ ցուցակի վերջին քայլը։ **At last**-ը զգացմունք է ավելացնում՝ սպասել ես և ուրախ ես, որ վերջացավ՝ *At last the holidays have started!*։ Հայերեն **վերջապես**-ը և ռուսերեն **наконец**-ը ծածկում են երկուսն էլ, ուստի ընտրելուց առաջ լսիր նախադասության զգացմունքը։`,
      `**Ложный друг: eventually.** Английское **eventually** значит «в конце концов, спустя долгое время»: *We waited for hours, and eventually the bus came.* Оно не значит «возможно», хотя похожие слова во французском (*éventuellement*) и немецком (*eventuell*) значат именно это. Русское **эвентуально** тоже значит «возможно», так что это ловушка и для русскоязычных.

**Finally или at last?** **Finally** просто отмечает последний шаг рассказа или списка. **At last** добавляет чувство: ты ждал и рад, что это кончилось. *At last the holidays have started!* Армянское **վերջապես** и русское **наконец** покрывают оба, так что перед выбором прислушайся к чувству предложения.`,
    ),
    ask(3, {
      en: ["What does «eventually» mean?", ["possibly", "at once", "in the end, after a long time"], "Eventually = in the end, after a long time."],
      hy: ["Ի՞նչ է նշանակում «eventually»-ն։", ["possibly", "at once", "in the end, after a long time"], "Eventually՝ վերջիվերջո, երկար ժամանակ անց։"],
      ru: ["Что значит «eventually»?", ["possibly", "at once", "in the end, after a long time"], "Eventually — в конце концов, спустя долгое время."],
    }),
  ],
  "story-writing": [
    "sentence mode=order Suddenly , we heard a strange noise .",
    closer(
      `**Show, don't tell.** A famous piece of writing advice, often credited to Anton Chekhov, says: do not tell the reader that the moon is shining; show the light shining on a piece of broken glass. Instead of *I was scared*, write *My hands were shaking and I could hear my heart.* The reader feels the fear without being told.

**Hook the reader early.** Good stories often start in the middle of the action: *Suddenly, we heard a strange noise.* Words like **suddenly**, **all at once** and **just then** make the reader sit up. Hovhannes Tumanyan does the same in his tales: things happen fast, and every sentence moves the story on. In English, put a comma after **suddenly** at the start of a sentence.`,
      `**Ցույց տուր, մի պատմիր։** Գրելու հայտնի խորհուրդներից մեկը, որը հաճախ վերագրում են Անտոն Չեխովին, ասում է՝ ընթերցողին մի ասա, որ լուսինը շողում է, ցույց տուր լույսի փայլը կոտրված ապակու կտորի վրա։ *I was scared*-ի փոխարեն գրիր *My hands were shaking and I could hear my heart.*։ Ընթերցողը զգում է վախը, առանց որ նրան ասեն։

**Գրավիր ընթերցողին սկզբից։** Լավ պատմությունները հաճախ սկսվում են գործողության մեջտեղից՝ *Suddenly, we heard a strange noise.*։ **Suddenly**, **all at once**, **just then** բառերն ընթերցողին զգաստացնում են։ Հովհաննես Թումանյանն իր հեքիաթներում նույնն է անում՝ իրադարձություններն արագ են զարգանում, և ամեն նախադասություն պատմությունն առաջ է տանում։ Անգլերենում նախադասության սկզբում **suddenly**-ից հետո դիր ստորակետ։`,
      `**Покажи, а не расскажи.** Известный совет писателям, который часто приписывают Антону Чехову, гласит: не говори читателю, что светит луна, покажи блеск света на осколке стекла. Вместо *I was scared* напиши *My hands were shaking and I could hear my heart.* Читатель почувствует страх без объяснений.

**Зацепи читателя сразу.** Хорошие рассказы часто начинаются с середины действия: *Suddenly, we heard a strange noise.* Слова **suddenly**, **all at once**, **just then** заставляют читателя насторожиться. Ованес Туманян делает так же в своих сказках: события развиваются быстро, и каждое предложение двигает историю вперёд. В английском после **suddenly** в начале предложения ставится запятая.`,
    ),
    ask(2, {
      en: ["Which sentence shows a feeling instead of telling it?", ["I was very happy.", "I jumped up and laughed out loud.", "I felt happiness."], "It shows what the person did, so we feel the happiness."],
      hy: ["Ո՞ր նախադասությունն է զգացմունքը ցույց տալիս, ոչ թե պատմում։", ["I was very happy.", "I jumped up and laughed out loud.", "I felt happiness."], "Այն ցույց է տալիս, թե ինչ արեց մարդը, և մենք զգում ենք ուրախությունը։"],
      ru: ["Какое предложение показывает чувство, а не называет его?", ["I was very happy.", "I jumped up and laughed out loud.", "I felt happiness."], "Оно показывает, что сделал человек, и мы чувствуем радость."],
    }),
  ],
  "past-participles-6": [
    "forms mode=verbs see:saw:seen write:wrote:written eat:ate:eaten take:took:taken go:went:gone be:was/were:been",
    closer(
      `**Gone or been?** Both are participles connected with **go**, but they mean different things. *Dad **has gone** to the shop* means he is still there. *Dad **has been** to the shop* means he went and came back. So *Have you ever **been** to London?* asks about a trip you have made and returned from.

**Patterns help.** Many irregular participles end in **-en**: *seen*, *written*, *eaten*, *taken*, *given*, *spoken*, *broken*. This **-en** is very old: German has it too (*gegessen*, "eaten"). When you learn a new irregular verb, look for a pattern you already know.`,
      `**Gone, թե՞ been։** Երկուսն էլ **go**-ի հետ կապված դերբայներ են, բայց տարբեր բաներ են նշանակում։ *Dad **has gone** to the shop* նշանակում է՝ նա դեռ այնտեղ է։ *Dad **has been** to the shop* նշանակում է՝ գնացել և վերադարձել է։ Այնպես որ, *Have you ever **been** to London?* հարցնում է մի ճամփորդության մասին, որից արդեն վերադարձել ես։

**Կաղապարներն օգնում են։** Շատ անկանոն դերբայներ ավարտվում են **-en**-ով՝ *seen*, *written*, *eaten*, *taken*, *given*, *spoken*, *broken*։ Այս **-en**-ը շատ հին է․ գերմաներենն էլ ունի այն (*gegessen*՝ «կերած»)։ Նոր անկանոն բայ սովորելիս փնտրիր քեզ արդեն ծանոթ կաղապար։`,
      `**Gone или been?** Оба причастия связаны с **go**, но значат разное. *Dad **has gone** to the shop* — он всё ещё там. *Dad **has been** to the shop* — он сходил и вернулся. Поэтому *Have you ever **been** to London?* спрашивает о поездке, из которой ты уже вернулся.

**Помогают образцы.** Многие неправильные причастия кончаются на **-en**: *seen*, *written*, *eaten*, *taken*, *given*, *spoken*, *broken*. Это **-en** очень древнее: оно есть и в немецком (*gegessen* — «съеденный»). Когда учишь новый неправильный глагол, ищи знакомый образец.`,
    ),
    ask(1, {
      en: ["Anna is in Paris now. Which sentence is right?", ["Anna has gone to Paris.", "Anna has been to Paris.", "Anna has went to Paris."], "She is still there: has gone."],
      hy: ["Աննան հիմա Փարիզում է։ Ո՞ր նախադասությունն է ճիշտ։", ["Anna has gone to Paris.", "Anna has been to Paris.", "Anna has went to Paris."], "Նա դեռ այնտեղ է՝ has gone։"],
      ru: ["Анна сейчас в Париже. Какое предложение верно?", ["Anna has gone to Paris.", "Anna has been to Paris.", "Anna has went to Paris."], "Она всё ещё там: has gone."],
    }),
  ],
  "present-perfect-intro": [
    "tense name=present-perfect aspects=simple times=past,present",
    closer(
      `**Armenian has a perfect too.** The English present perfect is built from **have** + participle: *I **have written***. Armenian has a form built almost the same way, from a participle + **be**: «գր**ել եմ**». Both can describe a past action whose result matters now: *I have written the letter* / «Նամակը գրել եմ». Russian has no separate form and uses the perfective past: «Я написал письмо».

**The time is a secret.** In the present perfect we do not say **when** it happened: *I've lost my key* (and I still can't find it). As soon as you add a finished time, such as *yesterday* or *in 2020*, English switches to the past simple. The line above shows the dot in the past joined to now.`,
      `**Հայերենն էլ ունի վաղակատար։** Անգլերենի present perfect-ը կազմվում է **have** + դերբայով՝ *I **have written***։ Հայերենն ունի գրեթե նույն կերպ կազմվող ձև՝ դերբայ + **եմ**՝ «գր**ել եմ**»։ Երկուսն էլ կարող են նկարագրել անցյալի գործողություն, որի արդյունքը հիմա է կարևոր՝ *I have written the letter* / «Նամակը գրել եմ»։ Ռուսերենն առանձին ձև չունի և գործածում է կատարյալ կերպի անցյալը՝ «Я написал письмо»։

**Ժամանակը գաղտնիք է։** Present perfect-ում մենք չենք ասում, թե **երբ** դա եղավ՝ *I've lost my key* (և դեռ չեմ գտնում)։ Հենց որ ավելացնում ես ավարտված ժամանակ, օրինակ՝ *yesterday* կամ *in 2020*, անգլերենն անցնում է past simple-ի։ Վերևի գիծը ցույց է տալիս անցյալի կետը՝ կապված հիմայի հետ։`,
      `**В армянском тоже есть перфект.** Английский present perfect строится из **have** + причастие: *I **have written***. В армянском есть форма, построенная почти так же, — причастие + **եմ** («быть»): «գր**ել եմ**». Обе описывают прошлое действие, результат которого важен сейчас: *I have written the letter* / «Նամակը գրել եմ». В русском отдельной формы нет, используется прошедшее совершенного вида: «Я написал письмо».

**Время — секрет.** В present perfect мы не говорим, **когда** это случилось: *I've lost my key* (и до сих пор не нашёл). Как только добавляешь законченное время — *yesterday* или *in 2020*, — английский переходит на past simple. Линия выше показывает точку в прошлом, связанную с настоящим.`,
    ),
    ask(2, {
      en: ["Choose the correct sentence.", ["I have seen this film yesterday.", "I have seen this film.", "I seen this film."], "No finished time, result now: present perfect."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["I have seen this film yesterday.", "I have seen this film.", "I seen this film."], "Ավարտված ժամանակ չկա, արդյունքը՝ հիմա՝ present perfect։"],
      ru: ["Выбери правильное предложение.", ["I have seen this film yesterday.", "I have seen this film.", "I seen this film."], "Нет законченного времени, результат сейчас: present perfect."],
    }),
  ],
  "ever-never": [
    "sentence mode=order Have you ever been to the sea ?",
    closer(
      `**One negative is enough.** English allows only one negative word in a sentence: *I have **never** seen it*, not *I haven't never seen it*. Armenian and Russian do the opposite and need two: «**Երբեք չեմ** տեսել», «Я **никогда не** видел». This is one of the most common mistakes for Armenian and Russian speakers, so check your sentences.

**Ever lives in questions.** **Ever** means "at any time in your life" and appears mainly in questions: *Have you **ever** eaten sushi?* In a positive answer we leave it out: *Yes, I have. I ate it last year.* Notice that the details of that trip, with a time, move to the past simple.`,
      `**Մեկ ժխտումը բավական է։** Անգլերենը նախադասության մեջ թույլ է տալիս միայն մեկ ժխտական բառ՝ *I have **never** seen it*, ոչ թե *I haven't never seen it*։ Հայերենն ու ռուսերենը հակառակն են անում և երկուսի կարիք ունեն՝ «**Երբեք չեմ** տեսել», «Я **никогда не** видел»։ Սա հայախոսների և ռուսախոսների ամենատարածված սխալներից է, ուստի ստուգիր նախադասություններդ։

**Ever-ը ապրում է հարցերում։** **Ever**-ը նշանակում է «կյանքումդ երբևէ» և հանդիպում է հիմնականում հարցերում՝ *Have you **ever** eaten sushi?*։ Դրական պատասխանում այն բաց ենք թողնում՝ *Yes, I have. I ate it last year.*։ Նկատիր, որ այդ դեպքի մանրամասները, ժամանակով հանդերձ, անցնում են past simple-ի։`,
      `**Одного отрицания достаточно.** Английский допускает в предложении только одно отрицательное слово: *I have **never** seen it*, а не *I haven't never seen it*. Армянский и русский делают наоборот и требуют двух: «**Երբեք չեմ** տեսել», «Я **никогда не** видел». Это одна из самых частых ошибок армяно- и русскоязычных, так что проверяй свои предложения.

**Ever живёт в вопросах.** **Ever** значит «когда-либо в жизни» и встречается в основном в вопросах: *Have you **ever** eaten sushi?* В утвердительном ответе его опускают: *Yes, I have. I ate it last year.* Заметь: подробности с указанием времени переходят в past simple.`,
    ),
    ask(3, {
      en: ["Choose the correct sentence.", ["I haven't never flown.", "I have never not flown.", "I have never flown."], "Only one negative word in English: never."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["I haven't never flown.", "I have never not flown.", "I have never flown."], "Անգլերենում միայն մեկ ժխտական բառ՝ never։"],
      ru: ["Выбери правильное предложение.", ["I haven't never flown.", "I have never not flown.", "I have never flown."], "В английском только одно отрицание: never."],
    }),
  ],
  "just-already-yet": [
    "forms mode=compare cols=jay She's_just_left:I've_already_done_it:Has_he_called_yet I've_just_woken_up:They've_already_gone:I_haven't_finished_yet",
    closer(
      `**Where they stand.** **Just** and **already** go between **have** and the participle: *I've **just** eaten*, *She's **already** left*. **Yet** goes at the very end of a question or a negative: *Have you finished **yet**?*, *I haven't finished **yet***. Armenian **հենց նոր**, **արդեն**, **դեռ** and Russian **только что**, **уже**, **ещё** are much freer with word order.

**American shortcut.** In American English people often use the past simple with these words: *I **just ate***, *Did you eat **yet**?* British English prefers the present perfect: *I've just eaten*, *Have you eaten yet?* Both are understood everywhere, but at school use the British pattern from the table above.`,
      `**Որտեղ են կանգնում։** **Just** և **already** բառերը դրվում են **have**-ի և դերբայի միջև՝ *I've **just** eaten*, *She's **already** left*։ **Yet**-ը դրվում է հարցի կամ ժխտական նախադասության ամենավերջում՝ *Have you finished **yet**?*, *I haven't finished **yet***։ Հայերեն **հենց նոր**, **արդեն**, **դեռ** և ռուսերեն **только что**, **уже**, **ещё** բառերը բառակարգում շատ ավելի ազատ են։

**Ամերիկյան կարճ ճանապարհ։** Ամերիկյան անգլերենում այս բառերի հետ հաճախ գործածում են past simple՝ *I **just ate***, *Did you eat **yet**?*։ Բրիտանական անգլերենը նախընտրում է present perfect՝ *I've just eaten*, *Have you eaten yet?*։ Երկուսն էլ ամենուր հասկանալի են, բայց դպրոցում գործածիր վերևի աղյուսակի բրիտանական կաղապարը։`,
      `**Где они стоят.** **Just** и **already** ставятся между **have** и причастием: *I've **just** eaten*, *She's **already** left*. **Yet** стоит в самом конце вопроса или отрицания: *Have you finished **yet**?*, *I haven't finished **yet***. Армянские **հենց նոր**, **արդեն**, **դեռ** и русские **только что**, **уже**, **ещё** гораздо свободнее в порядке слов.

**Американское сокращение.** В американском английском с этими словами часто используют past simple: *I **just ate***, *Did you eat **yet**?* Британский предпочитает present perfect: *I've just eaten*, *Have you eaten yet?* Оба понятны везде, но в школе используй британскую схему из таблицы выше.`,
    ),
    ask(1, {
      en: ["Complete: «Have you done your homework ___?»", ["yet", "already", "just"], "Yet goes at the end of a question."],
      hy: ["Լրացրու՝ «Have you done your homework ___?»", ["yet", "already", "just"], "Yet-ը դրվում է հարցի վերջում։"],
      ru: ["Дополни: «Have you done your homework ___?»", ["yet", "already", "just"], "Yet ставится в конце вопроса."],
    }),
  ],
  "for-since-6": [
    "forms mode=compare cols=forsince for_six_years:since_2020 for_two_hours:since_nine_o'clock for_a_long_time:since_I_was_six for_ages:since_Monday",
    closer(
      `**The mistake everybody makes.** Armenian and Russian use the present tense for something that started in the past and is still going on: «Վեց տարի է՝ ապրում եմ Գյումրիում», «Я живу в Гюмри шесть лет». English needs the present perfect: *I **have lived** in Gyumri for six years.* *I live here for six years* is wrong, and so is *since six years*.

**A quick test.** If you can put the words after **from** … **until now**, use **since**: *since 2020*, *since Monday*. If they are an amount of time, like a ruler, use **for**: *for six years*, *for two hours*. The question for both is **How long…?**: *How long have you known her?*`,
      `**Սխալ, որ բոլորն անում են։** Հայերենն ու ռուսերենը ներկա ժամանակ են գործածում այն բանի համար, որ սկսվել է անցյալում և դեռ շարունակվում է՝ «Վեց տարի է՝ ապրում եմ Գյումրիում», «Я живу в Гюмри шесть лет»։ Անգլերենին պետք է present perfect՝ *I **have lived** in Gyumri for six years.*։ *I live here for six years*-ը սխալ է, ինչպես նաև *since six years*-ը։

**Արագ ստուգում։** Եթե բառերը կարող ես դնել **from** … **until now**-ի մեջ, գործածիր **since**՝ *since 2020*, *since Monday*։ Եթե դրանք ժամանակի քանակ են՝ քանոնի պես, գործածիր **for**՝ *for six years*, *for two hours*։ Երկուսի հարցն էլ **How long…?** է՝ *How long have you known her?*`,
      `**Ошибка, которую делают все.** Армянский и русский используют настоящее время для того, что началось в прошлом и продолжается: «Վեց տարի է՝ ապրում եմ Գյումրիում», «Я живу в Гюмри шесть лет». Английскому нужен present perfect: *I **have lived** in Gyumri for six years.* *I live here for six years* — ошибка, как и *since six years*.

**Быстрая проверка.** Если слова можно поставить в рамку **from** … **until now**, бери **since**: *since 2020*, *since Monday*. Если это количество времени, как отрезок на линейке, бери **for**: *for six years*, *for two hours*. Вопрос к обоим — **How long…?**: *How long have you known her?*`,
    ),
    ask(2, {
      en: ["Choose the correct sentence.", ["I know him since 2019.", "I have known him since 2019.", "I have known him for 2019."], "Still true now, from a starting point: have known … since."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["I know him since 2019.", "I have known him since 2019.", "I have known him for 2019."], "Ճիշտ է մինչ հիմա, սկզբնակետից՝ have known … since։"],
      ru: ["Выбери правильное предложение.", ["I know him since 2019.", "I have known him since 2019.", "I have known him for 2019."], "Верно до сих пор, с начальной точки: have known … since."],
    }),
  ],
  "perfect-vs-past": [
    "forms mode=compare cols=perfpast I've_lost_my_keys:I_lost_them_yesterday She_has_been_to_Rome:She_went_there_in_2019 We've_finished_the_test:We_finished_it_an_hour_ago",
    closer(
      `**One question decides.** Ask: **is the time finished and named?** If yes (*yesterday*, *last week*, *in 2019*, *an hour ago*), use the past simple. If the time is not said, or it is still going on (*today*, *this week*, *ever*, *since*), use the present perfect. *I've seen him **today*** is fine in the evening; *I saw him **this morning*** is right if the morning is over.

**News uses both.** English news often starts with the present perfect and then switches: *A new metro station **has opened** in Yerevan. It **opened** at nine o'clock this morning.* The first sentence says what is new; the second gives the details with a time. Read the table above row by row: the same event, first as news, then as history.`,
      `**Մեկ հարցն է որոշում։** Հարցրու՝ **ժամանակն ավարտվե՞լ է և նշվա՞ծ է**։ Եթե այո (*yesterday*, *last week*, *in 2019*, *an hour ago*), գործածիր past simple։ Եթե ժամանակը նշված չէ կամ դեռ շարունակվում է (*today*, *this week*, *ever*, *since*), գործածիր present perfect։ *I've seen him **today***-ն ճիշտ է երեկոյան, իսկ *I saw him **this morning***-ը ճիշտ է, եթե առավոտն արդեն անցել է։

**Լուրերը գործածում են երկուսն էլ։** Անգլերեն լուրերը հաճախ սկսվում են present perfect-ով, հետո անցնում են մյուսին՝ *A new metro station **has opened** in Yerevan. It **opened** at nine o'clock this morning.*։ Առաջին նախադասությունն ասում է, թե ինչն է նոր, երկրորդը տալիս է մանրամասները՝ ժամանակով։ Կարդա վերևի աղյուսակը տող առ տող՝ նույն իրադարձությունը նախ որպես լուր, հետո որպես պատմություն։`,
      `**Решает один вопрос.** Спроси: **время закончилось и названо?** Если да (*yesterday*, *last week*, *in 2019*, *an hour ago*), бери past simple. Если время не названо или ещё идёт (*today*, *this week*, *ever*, *since*), бери present perfect. *I've seen him **today*** правильно вечером, а *I saw him **this morning*** — если утро уже прошло.

**Новости используют оба.** Английские новости часто начинаются с present perfect, а потом переключаются: *A new metro station **has opened** in Yerevan. It **opened** at nine o'clock this morning.* Первое предложение говорит, что нового, второе даёт подробности со временем. Прочитай таблицу выше по строкам: одно событие сначала как новость, потом как история.`,
    ),
    ask(3, {
      en: ["Complete: «We ___ to Dilijan last summer.»", ["have gone", "have been", "went"], "Last summer is a finished, named time: past simple."],
      hy: ["Լրացրու՝ «We ___ to Dilijan last summer.»", ["have gone", "have been", "went"], "Last summer-ը ավարտված, նշված ժամանակ է՝ past simple։"],
      ru: ["Дополни: «We ___ to Dilijan last summer.»", ["have gone", "have been", "went"], "Last summer — законченное названное время: past simple."],
    }),
  ],
  "much-many": [
    "sentence mode=order How much water do you drink every day ?",
    closer(
      `**One word in Armenian and Russian, two in English.** Armenian says **շատ** and Russian **много** for everything: *շատ գրքեր*, *շատ ջուր*; *много книг*, *много воды*. English splits them: **many** with things you can count (*many books*), **much** with things you cannot (*much water*). The question is **How many…?** or **How much…?**

**A lot of is the easy way.** In positive sentences **much** sounds formal or old-fashioned: *I drink much water* is grammatically possible but unusual. Native speakers say **a lot of** or **lots of**, which work with both kinds: *a lot of books*, *a lot of water*. Keep **much** and **many** for questions and negatives.`,
      `**Մեկ բառ հայերենում և ռուսերենում, երկու՝ անգլերենում։** Հայերենն ամեն ինչի համար ասում է **շատ**, ռուսերենը՝ **много**՝ *շատ գրքեր*, *շատ ջուր*, *много книг*, *много воды*։ Անգլերենը բաժանում է դրանք՝ **many** հաշվվող բաների հետ (*many books*), **much** չհաշվվողների հետ (*much water*)։ Հարցն է **How many…?** կամ **How much…?**

**A lot of-ը հեշտ ճանապարհն է։** Դրական նախադասություններում **much**-ը պաշտոնական կամ հնաոճ է հնչում՝ *I drink much water*-ը քերականորեն հնարավոր է, բայց անսովոր։ Անգլիախոսներն ասում են **a lot of** կամ **lots of**, որոնք աշխատում են երկու տեսակի հետ էլ՝ *a lot of books*, *a lot of water*։ **Much**-ը և **many**-ն պահիր հարցերի և ժխտումների համար։`,
      `**Одно слово в армянском и русском, два — в английском.** Армянский говорит **շատ**, а русский **много** обо всём: *շատ գրքեր*, *շատ ջուր*; *много книг*, *много воды*. Английский разделяет: **many** — с тем, что можно посчитать (*many books*), **much** — с тем, что нельзя (*much water*). Вопрос — **How many…?** или **How much…?**

**A lot of — лёгкий путь.** В утвердительных предложениях **much** звучит официально или старомодно: *I drink much water* грамматически возможно, но необычно. Носители говорят **a lot of** или **lots of** — это подходит к обоим видам: *a lot of books*, *a lot of water*. **Much** и **many** оставь для вопросов и отрицаний.`,
    ),
    ask(1, {
      en: ["Complete: «How ___ apples do we need?»", ["many", "much", "a lot"], "Apples can be counted: how many."],
      hy: ["Լրացրու՝ «How ___ apples do we need?»", ["many", "much", "a lot"], "Խնձորները հաշվվող են՝ how many։"],
      ru: ["Дополни: «How ___ apples do we need?»", ["many", "much", "a lot"], "Яблоки можно посчитать: how many."],
    }),
  ],
  "few-little": [
    "forms mode=compare cols=fewlittle a_few_friends:a_little_money a_few_minutes:a_little_sugar few_people:little_time",
    closer(
      `**One small word changes the mood.** **A few** and **a little** are positive: "some, enough". **Few** and **little** without **a** are negative: "not enough". *I have **a few** friends* (and I am happy); *I have **few** friends* (and I am lonely). Armenian makes exactly the same split: «**մի քիչ** ժամանակ ունեմ» (some) and «**քիչ** ժամանակ ունեմ» (not enough). Russian has **немного** and **мало**.

**Count or not?** **Few** goes with things you can count (*few people*), **little** with things you cannot (*little time*). Be careful: **little** also means "small" (*a little house*), and then it has nothing to do with amount. Read the last row of the table: those are the negative ones.`,
      `**Մեկ փոքր բառը փոխում է տրամադրությունը։** **A few**-ն և **a little**-ն դրական են՝ «մի քանի, բավական»։ **Few**-ն և **little**-ն առանց **a**-ի բացասական են՝ «բավական չէ»՝ *I have **a few** friends* (և ուրախ եմ), *I have **few** friends* (և միայնակ եմ)։ Հայերենը ճիշտ նույն բաժանումն ունի՝ «**մի քիչ** ժամանակ ունեմ» (որոշ չափով) և «**քիչ** ժամանակ ունեմ» (բավական չէ)։ Ռուսերենն ունի **немного** և **мало**։

**Հաշվվո՞ղ, թե՞ ոչ։** **Few**-ն գործածվում է հաշվվող բաների հետ (*few people*), **little**-ը՝ չհաշվվողների (*little time*)։ Զգույշ եղիր՝ **little**-ը նշանակում է նաև «փոքր» (*a little house*), և այդ դեպքում ոչ մի կապ չունի քանակի հետ։ Կարդա աղյուսակի վերջին տողը՝ դրանք բացասականներն են։`,
      `**Одно маленькое слово меняет настроение.** **A few** и **a little** — положительные: «несколько, достаточно». **Few** и **little** без **a** — отрицательные: «мало, не хватает». *I have **a few** friends* (и я рад); *I have **few** friends* (и мне одиноко). Армянский делит точно так же: «**մի քիչ** ժամանակ ունեմ» (немного есть) и «**քիչ** ժամանակ ունեմ» (мало). В русском — **немного** и **мало**.

**Считается или нет?** **Few** — с тем, что можно посчитать (*few people*), **little** — с тем, что нельзя (*little time*). Осторожно: **little** ещё значит «маленький» (*a little house*), и тогда к количеству оно отношения не имеет. Прочитай последнюю строку таблицы: это отрицательные.`,
    ),
    ask(2, {
      en: ["«Hurry up! We have ___ time.» (not enough)", ["a little", "little", "few"], "Not enough, and time can't be counted: little."],
      hy: ["«Hurry up! We have ___ time.» (բավական չէ)", ["a little", "little", "few"], "Բավական չէ, և ժամանակը չհաշվվող է՝ little։"],
      ru: ["«Hurry up! We have ___ time.» (не хватает)", ["a little", "little", "few"], "Не хватает, и время не считается: little."],
    }),
  ],
  "food-containers-6": [
    "forms mode=compare cols=container a_bottle_of:water a_carton_of:milk a_jar_of:honey a_tin_of:beans a_packet_of:crisps a_loaf_of:bread a_bar_of:chocolate",
    closer(
      `**The tin came before the tin opener.** In 1810 the Englishman Peter Durand received a patent for keeping food in tin cans. For almost fifty years there was no special tool to open them: soldiers used knives, bayonets or even stones. The first can opener was patented in the USA only in 1858. The British still say **a tin of beans**, Americans **a can of beans**.

**How to count what you can't count.** You cannot say *two breads* or *a milk*, because bread and milk are uncountable. Containers and pieces solve the problem: *two loaves of bread*, *a carton of milk*, *a bar of chocolate*. Russian works the same way with «**буханка** хлеба», «**пакет** молока», and Armenian with «մի **բոքոն** հաց», «մի **տուփ** կաթ».`,
      `**Պահածոյի տուփը հայտնվեց բացիչից առաջ։** 1810 թվականին անգլիացի Փիթեր Դյուրանն արտոնագիր ստացավ սնունդը թիթեղյա տուփերում պահելու համար։ Գրեթե հիսուն տարի դրանք բացելու հատուկ գործիք չկար․ զինվորները գործածում էին դանակներ, սվիններ կամ նույնիսկ քարեր։ Առաջին պահածոյաբացիչն արտոնագրվեց ԱՄՆ-ում միայն 1858 թվականին։ Բրիտանացիները մինչ օրս ասում են **a tin of beans**, ամերիկացիները՝ **a can of beans**։

**Ինչպես հաշվել այն, ինչ չի հաշվվում։** Չես կարող ասել *two breads* կամ *a milk*, որովհետև հացն ու կաթը չհաշվվող են։ Տարաներն ու կտորները լուծում են խնդիրը՝ *two loaves of bread*, *a carton of milk*, *a bar of chocolate*։ Հայերենը նույն կերպ է աշխատում՝ «մի **բոքոն** հաց», «մի **տուփ** կաթ», ռուսերենը՝ «**буханка** хлеба», «**пакет** молока»։`,
      `**Консервная банка появилась раньше открывашки.** В 1810 году англичанин Питер Дюран получил патент на хранение еды в жестяных банках. Почти пятьдесят лет не было специального инструмента, чтобы их открывать: солдаты пользовались ножами, штыками и даже камнями. Первую консервную открывалку запатентовали в США только в 1858 году. Британцы до сих пор говорят **a tin of beans**, американцы — **a can of beans**.

**Как считать то, что не считается.** Нельзя сказать *two breads* или *a milk*: хлеб и молоко неисчисляемые. Задачу решают упаковки и куски: *two loaves of bread*, *a carton of milk*, *a bar of chocolate*. Русский работает так же: «**буханка** хлеба», «**пакет** молока», армянский — «մի **բոքոն** հաց», «մի **տուփ** կաթ».`,
    ),
    ask(3, {
      en: ["Choose the correct phrase.", ["two breads", "a bread", "two loaves of bread"], "Bread is uncountable: count loaves."],
      hy: ["Ընտրիր ճիշտ արտահայտությունը։", ["two breads", "a bread", "two loaves of bread"], "Հացը չհաշվվող է՝ հաշվում ենք բոքոնները։"],
      ru: ["Выбери правильное сочетание.", ["two breads", "a bread", "two loaves of bread"], "Хлеб неисчисляемый: считаем буханки."],
    }),
  ],
  "healthy-lifestyle": [
    "sentence mode=order Children need nine to twelve hours of sleep .",
    closer(
      `**Five a day.** The World Health Organization advises eating at least 400 grams of fruit and vegetables every day. That is about five portions of 80 grams, which is why British campaigns say **five a day**: an apple, a banana, a tomato, a carrot and a handful of grapes. Potatoes do not count, because they are mostly starch.

**Sleep is part of being healthy.** Doctors recommend 9 to 12 hours of sleep a night for children aged 6 to 12, and 8 to 10 hours for teenagers. In English this is five different steps: **go to bed**, **fall asleep**, **sleep**, **wake up** and **get up**. Armenian **քնել** and Russian **спать / заснуть** cover them with fewer words.`,
      `**Օրական հինգ։** Առողջապահության համաշխարհային կազմակերպությունը խորհուրդ է տալիս օրական ուտել առնվազն 400 գրամ միրգ և բանջարեղեն։ Դա մոտ հինգ բաժին է՝ 80-ական գրամ, ահա թե ինչու բրիտանական արշավներն ասում են **five a day**՝ խնձոր, բանան, լոլիկ, գազար և մի բուռ խաղող։ Կարտոֆիլը չի հաշվվում, որովհետև հիմնականում օսլա է։

**Քունն առողջության մաս է։** Բժիշկները 6–12 տարեկան երեխաներին խորհուրդ են տալիս գիշերը քնել 9–12 ժամ, իսկ դեռահասներին՝ 8–10 ժամ։ Անգլերենում սա հինգ տարբեր քայլ է՝ **go to bed**, **fall asleep**, **sleep**, **wake up** և **get up**։ Հայերեն **քնել**-ը և ռուսերեն **спать / заснуть**-ը դրանք ծածկում են ավելի քիչ բառերով։`,
      `**Пять в день.** Всемирная организация здравоохранения советует съедать не меньше 400 граммов фруктов и овощей в день. Это около пяти порций по 80 граммов, поэтому британские кампании говорят **five a day**: яблоко, банан, помидор, морковка и горсть винограда. Картофель не считается, потому что это в основном крахмал.

**Сон — часть здоровья.** Врачи советуют детям 6–12 лет спать 9–12 часов в сутки, а подросткам — 8–10 часов. По-английски это пять разных шагов: **go to bed**, **fall asleep**, **sleep**, **wake up** и **get up**. Армянское **քնել** и русские **спать / заснуть** обходятся меньшим числом слов.`,
    ),
    ask(2, {
      en: ["What does «five a day» mean?", ["five meals a day", "five portions of fruit and vegetables", "five glasses of water"], "Five portions of fruit and vegetables, about 400 grams."],
      hy: ["Ի՞նչ է նշանակում «five a day»-ը։", ["five meals a day", "five portions of fruit and vegetables", "five glasses of water"], "Միրգ և բանջարեղեն՝ հինգ բաժին, մոտ 400 գրամ։"],
      ru: ["Что значит «five a day»?", ["five meals a day", "five portions of fruit and vegetables", "five glasses of water"], "Пять порций фруктов и овощей, около 400 граммов."],
    }),
  ],
  "at-the-doctors": [
    "sentence mode=order keep=1 I have got a sore throat and a headache .",
    closer(
      `**Who hurts: me or my head?** In English the person is the subject: *I have got a headache*, *My leg hurts*. In Armenian and Russian the body part does the hurting: «**Գլուխս** ցավում է», «У меня **болит голова**». Five English illnesses are made with **-ache**: *headache*, *toothache*, *earache*, *stomachache*, *backache*.

**A doctor was a teacher.** The word **doctor** comes from the Latin **docere**, "to teach": in the Middle Ages a doctor was a learned person allowed to teach at a university. That is why people with a PhD are also called *Doctor*. And why **the doctor's** with an apostrophe? It is short for *the doctor's surgery*, the place where the doctor works, just like *the baker's* or *the chemist's*.`,
      `**Ո՞վ է ցավում՝ ե՞ս, թե՞ գլուխս։** Անգլերենում ենթական մարդն է՝ *I have got a headache*, *My leg hurts*։ Հայերենում և ռուսերենում ցավում է մարմնի մասը՝ «**Գլուխս** ցավում է», «У меня **болит голова**»։ Անգլերենի հինգ հիվանդություն կազմվում է **-ache**-ով՝ *headache*, *toothache*, *earache*, *stomachache*, *backache*։

**Բժիշկն ուսուցիչ էր։** **Doctor** բառը ծագում է լատիներեն **docere**՝ «սովորեցնել» բառից․ միջնադարում doctor-ը գիտուն մարդ էր, որին թույլատրված էր դասավանդել համալսարանում։ Ահա թե ինչու գիտությունների թեկնածուներին էլ անվանում են *Doctor*։ Իսկ ինչո՞ւ **the doctor's**՝ ապաթարցով։ Դա *the doctor's surgery*-ի՝ բժշկի աշխատավայրի կրճատումն է, ճիշտ ինչպես *the baker's* կամ *the chemist's*։`,
      `**Кто болит: я или голова?** В английском подлежащее — человек: *I have got a headache*, *My leg hurts*. В армянском и русском болит часть тела: «**Գլուխս** ցավում է», «У меня **болит голова**». Пять английских болезней образуются с **-ache**: *headache*, *toothache*, *earache*, *stomachache*, *backache*.

**Доктор был учителем.** Слово **doctor** происходит от латинского **docere** — «учить»: в Средние века доктором называли учёного человека, которому разрешалось преподавать в университете. Поэтому учёную степень PhD тоже называют *Doctor*. А почему **the doctor's** с апострофом? Это сокращение от *the doctor's surgery* — место, где работает врач, как *the baker's* или *the chemist's*.`,
    ),
    ask(1, {
      en: ["Your tooth hurts. What do you say?", ["I've got toothache.", "My tooth is ache.", "I have a toothhurt."], "Tooth + ache: toothache."],
      hy: ["Ատամդ ցավում է։ Ի՞նչ ես ասում։", ["I've got toothache.", "My tooth is ache.", "I have a toothhurt."], "Tooth + ache՝ toothache։"],
      ru: ["У тебя болит зуб. Что ты скажешь?", ["I've got toothache.", "My tooth is ache.", "I have a toothhurt."], "Tooth + ache: toothache."],
    }),
  ],
  "ordering-food-6": [
    "sentence mode=order keep=1 I'd like a bowl of soup , please .",
    closer(
      `**A lunch named after a lord.** The **sandwich** is named after John Montagu, the 4th Earl of Sandwich, who lived in the 18th century. The story says he asked for meat between two slices of bread so that he could eat without leaving the card table or his desk. **Menu** is a French word meaning "a detailed list", from the Latin *minutus*, "small".

**I want is too strong.** In a café *I want a pizza* sounds like a child's demand. Polite English uses **I'd like…**, **Could I have…?** or **Can I get…?** (American). The waiter asks *Are you ready to order?* and later *Anything else?* At the end you ask for **the bill** (British) or **the check** (American).`,
      `**Ճաշ՝ լորդի անունով։** **Sandwich**-ն անվանվել է 18-րդ դարում ապրած Ջոն Մոնթեգյուի՝ Սենդվիչի 4-րդ կոմսի անունով։ Ըստ պատմության՝ նա խնդրում էր միսը դնել հացի երկու կտորի միջև, որպեսզի կարողանա ուտել՝ առանց թղթախաղի սեղանից կամ գրասեղանից հեռանալու։ **Menu**-ն ֆրանսերեն բառ է, որ նշանակում է «մանրամասն ցուցակ»՝ լատիներեն *minutus*՝ «փոքր» բառից։

**I want-ը չափազանց կոպիտ է։** Սրճարանում *I want a pizza*-ն հնչում է երեխայի պահանջի պես։ Քաղաքավարի անգլերենում ասում են **I'd like…**, **Could I have…?** կամ **Can I get…?** (ամերիկյան)։ Մատուցողը հարցնում է *Are you ready to order?*, իսկ ավելի ուշ՝ *Anything else?*։ Վերջում խնդրում ես **the bill** (բրիտանական) կամ **the check** (ամերիկյան)։`,
      `**Обед, названный в честь лорда.** **Sandwich** назван в честь Джона Монтегю, 4-го графа Сэндвича, жившего в XVIII веке. По преданию, он просил положить мясо между двумя ломтями хлеба, чтобы есть, не отходя от карточного стола или письменного стола. **Menu** — французское слово, означающее «подробный список», от латинского *minutus* — «маленький».

**I want — слишком резко.** В кафе *I want a pizza* звучит как требование ребёнка. Вежливо говорят **I'd like…**, **Could I have…?** или **Can I get…?** (по-американски). Официант спрашивает *Are you ready to order?*, а позже — *Anything else?* В конце просят **the bill** (по-британски) или **the check** (по-американски).`,
    ),
    ask(2, {
      en: ["Which is the most polite way to order?", ["I want a lemonade.", "Could I have a lemonade, please?", "Give me lemonade."], "Could I have … please? is polite."],
      hy: ["Ո՞րն է պատվիրելու ամենաքաղաքավարի ձևը։", ["I want a lemonade.", "Could I have a lemonade, please?", "Give me lemonade."], "Could I have … please?-ը քաղաքավարի է։"],
      ru: ["Как вежливее всего заказать?", ["I want a lemonade.", "Could I have a lemonade, please?", "Give me lemonade."], "Could I have … please? — вежливо."],
    }),
  ],
  "three-capitals": [
    "forms mode=compare cols=capital Yerevan:Armenia:Hrazdan Moscow:Russia:Moskva London:the_UK:Thames",
    closer(
      `**Older than Rome.** Yerevan began as the fortress of **Erebuni**, founded by the Urartian king Argishti I in 782 BC; the stone with his inscription still exists. That makes it 29 years older than Rome, whose legendary date is 753 BC. In 2018 Yerevan celebrated its 2,800th birthday. **Moscow** is first mentioned in a chronicle in 1147, and **London** was founded by the Romans as **Londinium** around AD 50.

**As … as and not as … as.** *Yerevan is **as** sunny **as** Rome* means equal. *London is **not as** sunny **as** Yerevan* means less. It is often a kinder way to compare than *London is less sunny*. Armenian says «**այնքան** արևոտ չէ, **որքան**», Russian «не **такой** солнечный, **как**».`,
      `**Հռոմից ավելի հին։** Երևանը սկսվել է **Էրեբունի** ամրոցից, որը հիմնադրել է ուրարտական Արգիշտի I արքան մ.թ.ա. 782 թվականին․ նրա արձանագրությամբ քարը մինչ օրս պահպանվել է։ Դա Երևանը դարձնում է 29 տարով ավելի հին, քան Հռոմը, որի առասպելական թվականը մ.թ.ա. 753-ն է։ 2018 թվականին Երևանը նշեց իր 2800-ամյակը։ **Մոսկվան** առաջին անգամ հիշատակվում է տարեգրության մեջ 1147 թվականին, իսկ **Լոնդոնը** հիմնադրել են հռոմեացիները՝ **Լոնդինիում** անունով, մոտ մ.թ. 50 թվականին։

**As … as և not as … as։** *Yerevan is **as** sunny **as** Rome* նշանակում է հավասար։ *London is **not as** sunny **as** Yerevan* նշանակում է պակաս։ Սա հաճախ համեմատելու ավելի մեղմ եղանակ է, քան *London is less sunny*-ն։ Հայերենն ասում է «**այնքան** արևոտ չէ, **որքան**», ռուսերենը՝ «не **такой** солнечный, **как**»։`,
      `**Старше Рима.** Ереван начался с крепости **Эребуни**, основанной урартским царём Аргишти I в 782 году до н. э.; камень с его надписью сохранился до сих пор. Значит, Ереван на 29 лет старше Рима, легендарная дата которого — 753 год до н. э. В 2018 году Ереван отметил 2800-летие. **Москва** впервые упоминается в летописи в 1147 году, а **Лондон** основали римляне под именем **Лондиниум** около 50 года н. э.

**As … as и not as … as.** *Yerevan is **as** sunny **as** Rome* — поровну. *London is **not as** sunny **as** Yerevan* — меньше. Это часто более мягкий способ сравнить, чем *London is less sunny*. По-армянски «**այնքան** արևոտ չէ, **որքան**», по-русски «не **такой** солнечный, **как**».`,
    ),
    ask(1, {
      en: ["Which city is the oldest?", ["Yerevan", "Moscow", "London"], "Erebuni was founded in 782 BC."],
      hy: ["Ո՞ր քաղաքն է ամենահինը։", ["Yerevan", "Moscow", "London"], "Էրեբունին հիմնադրվել է մ.թ.ա. 782 թվականին։"],
      ru: ["Какой город самый древний?", ["Yerevan", "Moscow", "London"], "Эребуни основан в 782 году до н. э."],
    }),
  ],
  "places-in-town": [
    "forms mode=compare cols=brame town_centre:downtown chemist's:drugstore car_park:parking_lot cinema:movie_theater pavement:sidewalk",
    closer(
      `**The shop with an apostrophe.** The British often name a shop after the person who works there, with **'s**: *the baker's*, *the butcher's*, *the chemist's*, *the newsagent's*. The word **shop** is left out but understood: *I'm going to the baker's (shop)*. Americans more often say *the bakery*, *the drugstore*.

**Two Englishes in one town.** Look at the table: a British visitor walks on the **pavement** to the **cinema**, an American on the **sidewalk** to the **movie theater**. In Armenian and Russian there is only one word for each: **մայթ**, **тротуар**; **կինոթատրոն**, **кинотеатр**. Choose one variety and use it all the way through a text.`,
      `**Խանութ՝ ապաթարցով։** Բրիտանացիները հաճախ խանութն անվանում են այնտեղ աշխատող մարդու անունով՝ **'s**-ով՝ *the baker's*, *the butcher's*, *the chemist's*, *the newsagent's*։ **Shop** բառը բաց է թողնվում, բայց ենթադրվում է՝ *I'm going to the baker's (shop)*։ Ամերիկացիներն ավելի հաճախ ասում են *the bakery*, *the drugstore*։

**Երկու անգլերեն՝ մեկ քաղաքում։** Նայիր աղյուսակին՝ բրիտանացի այցելուն **pavement**-ով քայլում է դեպի **cinema**, ամերիկացին՝ **sidewalk**-ով դեպի **movie theater**։ Հայերենում և ռուսերենում յուրաքանչյուրի համար մեկ բառ կա՝ **մայթ**, **тротуар**, **կինոթատրոն**, **кинотеатр**։ Ընտրիր մեկ տարբերակ և գործածիր այն ամբողջ տեքստում։`,
      `**Магазин с апострофом.** Британцы часто называют магазин по тому, кто в нём работает, с **'s**: *the baker's*, *the butcher's*, *the chemist's*, *the newsagent's*. Слово **shop** опускается, но подразумевается: *I'm going to the baker's (shop)*. Американцы чаще говорят *the bakery*, *the drugstore*.

**Два английских в одном городе.** Посмотри на таблицу: британец идёт по **pavement** в **cinema**, американец — по **sidewalk** в **movie theater**. В армянском и русском на каждое понятие одно слово: **մայթ**, **тротуар**; **կինոթատրոն**, **кинотеатр**. Выбери один вариант и держись его во всём тексте.`,
    ),
    ask(3, {
      en: ["Where do you buy medicine in Britain?", ["at the baker's", "at the newsagent's", "at the chemist's"], "Medicine: the chemist's (US drugstore)."],
      hy: ["Բրիտանիայում որտե՞ղ են դեղ գնում։", ["at the baker's", "at the newsagent's", "at the chemist's"], "Դեղեր՝ the chemist's (ԱՄՆ-ում՝ drugstore)։"],
      ru: ["Где в Британии покупают лекарства?", ["at the baker's", "at the newsagent's", "at the chemist's"], "Лекарства: the chemist's (в США drugstore)."],
    }),
  ],
  "transport-in-the-city-6": [
    "forms mode=compare cols=when 1863:London_Underground_opens 1935:Moscow_Metro_opens 1981:Yerevan_Metro_opens",
    closer(
      `**Three undergrounds.** London opened the world's first underground railway in 1863, with steam trains running in tunnels; Londoners call it **the Tube**. The **Moscow Metro** opened in 1935 and is famous for stations that look like palaces, with marble walls and chandeliers. The **Yerevan Metro** opened in 1981: one line with ten stations, about 13 kilometres long.

**Get on, get off.** English says **get on** and **get off** a bus, a train or the metro, but **get into** and **get out of** a car or a taxi. The rule is simple: if you can stand up and walk around inside, use **on**. Armenian uses **նստել** and **իջնել**, Russian **сесть** and **выйти** for all of them.`,
      `**Երեք մետրո։** Լոնդոնն աշխարհի առաջին ստորգետնյա երկաթուղին բացեց 1863 թվականին՝ թունելներով ընթացող շոգեքարշերով․ լոնդոնցիներն այն անվանում են **the Tube**։ **Մոսկվայի մետրոն** բացվել է 1935 թվականին և հայտնի է պալատների նման կայարաններով՝ մարմարե պատերով և ջահերով։ **Երևանի մետրոն** բացվել է 1981 թվականին՝ մեկ գիծ, տասը կայարան, մոտ 13 կիլոմետր երկարությամբ։

**Get on, get off։** Անգլերենն ասում է **get on** և **get off** ավտոբուսի, գնացքի կամ մետրոյի համար, բայց **get into** և **get out of** մեքենայի կամ տաքսու համար։ Կանոնը պարզ է՝ եթե ներսում կարող ես ոտքի կանգնել և քայլել, գործածիր **on**։ Հայերենը բոլորի համար գործածում է **նստել** և **իջնել**, ռուսերենը՝ **сесть** և **выйти**։`,
      `**Три метро.** Лондон открыл первую в мире подземную железную дорогу в 1863 году — по тоннелям ходили паровозы; лондонцы зовут её **the Tube**. **Московское метро** открылось в 1935 году и знаменито станциями-дворцами с мраморными стенами и люстрами. **Ереванское метро** открылось в 1981 году: одна линия, десять станций, около 13 километров.

**Get on, get off.** По-английски **get on** и **get off** — про автобус, поезд или метро, но **get into** и **get out of** — про машину или такси. Правило простое: если внутри можно встать и пройтись, бери **on**. Армянский для всех случаев использует **նստել** и **իջնել**, русский — **сесть** и **выйти**.`,
    ),
    ask(2, {
      en: ["Complete: «___ the bus at the third stop.»", ["Get out of", "Get off", "Get down"], "Bus, train, metro: get on / get off."],
      hy: ["Լրացրու՝ «___ the bus at the third stop.»", ["Get out of", "Get off", "Get down"], "Ավտոբուս, գնացք, մետրո՝ get on / get off։"],
      ru: ["Дополни: «___ the bus at the third stop.»", ["Get out of", "Get off", "Get down"], "Автобус, поезд, метро: get on / get off."],
    }),
  ],
  "environment-problems": [
    "sentence mode=order We should recycle paper , glass and plastic .",
    closer(
      `**The lake that lost 19 metres.** In the 20th century so much water was taken from **Lake Sevan** for farms and power stations that its level fell by about 19 metres. Since the early 2000s, Armenia has limited the water taken from it, and the level has slowly started to rise again. It is a real example of a problem people caused and are now trying to fix.

**A symbol drawn by a student.** The recycling symbol of three chasing arrows was designed in 1970 by **Gary Anderson**, a 23-year-old student, for a competition held around the first Earth Day. The three arrows stand for three steps: collect, remake, use again. In English these ideas are often called the **three Rs**: **reduce**, **reuse**, **recycle**.`,
      `**Լիճը, որ կորցրեց 19 մետր։** 20-րդ դարում **Սևանա լճից** այնքան ջուր վերցվեց դաշտերի և էլեկտրակայանների համար, որ նրա մակարդակն իջավ մոտ 19 մետրով։ 2000-ականների սկզբից Հայաստանը սահմանափակել է լճից վերցվող ջուրը, և մակարդակը դանդաղ սկսել է նորից բարձրանալ։ Սա իրական օրինակ է մի խնդրի, որ ստեղծել են մարդիկ և այժմ փորձում են շտկել։

**Ուսանողի գծած խորհրդանիշը։** Իրար հետևից ընթացող երեք սլաքներով վերամշակման խորհրդանիշը 1970 թվականին ստեղծել է 23-ամյա ուսանող **Գարի Անդերսոնը**՝ առաջին Երկրի օրվա շուրջ անցկացված մրցույթի համար։ Երեք սլաքները նշանակում են երեք քայլ՝ հավաքել, վերամշակել, նորից գործածել։ Անգլերենում այս գաղափարները հաճախ կոչվում են **three Rs**՝ **reduce**, **reuse**, **recycle**։`,
      `**Озеро, потерявшее 19 метров.** В XX веке из **озера Севан** забирали так много воды для полей и электростанций, что его уровень упал примерно на 19 метров. С начала 2000-х Армения ограничила забор воды, и уровень понемногу начал подниматься. Это настоящий пример проблемы, которую создали люди и теперь пытаются исправить.

**Знак, нарисованный студентом.** Знак переработки из трёх бегущих друг за другом стрелок придумал в 1970 году 23-летний студент **Гэри Андерсон** для конкурса, приуроченного к первому Дню Земли. Три стрелки — три шага: собрать, переработать, использовать снова. По-английски эти идеи часто называют **three Rs**: **reduce**, **reuse**, **recycle**.`,
    ),
    ask(1, {
      en: ["Which of the three Rs means «use less»?", ["reduce", "reuse", "recycle"], "Reduce = use less."],
      hy: ["Three Rs-ից ո՞րն է նշանակում «ավելի քիչ գործածել»։", ["reduce", "reuse", "recycle"], "Reduce՝ ավելի քիչ գործածել։"],
      ru: ["Какое из three Rs значит «использовать меньше»?", ["reduce", "reuse", "recycle"], "Reduce — использовать меньше."],
    }),
  ],
  "writing-email": [
    "sentence mode=order keep=1 I am writing to ask about the summer camp .",
    closer(
      `**Why @?** The first email between two computers on a network was sent in 1971 by the American engineer **Ray Tomlinson**. He needed a sign to separate the person's name from the computer's name and chose **@**, because it was on the keyboard and almost never used. In English it is read **at**; Armenians call it «**շնիկ**» (little dog) and Russians «**собака**» (dog), because of its curly tail.

**Formal or informal?** A friendly email starts with *Hi Anna,* and ends with *Write soon,* or *Love,*. A formal one starts with *Dear Mr Smith,* and ends with *Best regards,* or *Yours sincerely,*. The sentence above is a typical first line of a formal email: it says at once why you are writing.`,
      `**Ինչո՞ւ @։** Ցանցի երկու համակարգիչների միջև առաջին էլեկտրոնային նամակն ուղարկել է ամերիկացի ինժեներ **Ռեյ Թոմլինսոնը** 1971 թվականին։ Նրան պետք էր նշան՝ մարդու անունը համակարգչի անունից բաժանելու համար, և նա ընտրեց **@**-ը, որովհետև այն կար ստեղնաշարի վրա և գրեթե չէր գործածվում։ Անգլերենում այն կարդացվում է **at**, հայերն այն անվանում են «**շնիկ**», իսկ ռուսները՝ «**собака**» (շուն)՝ ոլորված պոչի պատճառով։

**Պաշտոնակա՞ն, թե՞ ոչ պաշտոնական։** Ընկերական նամակը սկսվում է *Hi Anna,*-ով և ավարտվում *Write soon,* կամ *Love,*-ով։ Պաշտոնականը սկսվում է *Dear Mr Smith,*-ով և ավարտվում *Best regards,* կամ *Yours sincerely,*-ով։ Վերևի նախադասությունը պաշտոնական նամակի բնորոշ առաջին տող է՝ անմիջապես ասում է, թե ինչու ես գրում։`,
      `**Почему @?** Первое электронное письмо между двумя компьютерами в сети отправил в 1971 году американский инженер **Рэй Томлинсон**. Ему нужен был знак, чтобы отделить имя человека от имени компьютера, и он выбрал **@** — он был на клавиатуре и почти не использовался. По-английски его читают **at**; армяне зовут его «**շնիկ**» (собачка), а русские — «**собака**» — из-за закрученного хвоста.

**Официально или нет?** Дружеское письмо начинается с *Hi Anna,* и заканчивается *Write soon,* или *Love,*. Официальное — с *Dear Mr Smith,* и заканчивается *Best regards,* или *Yours sincerely,*. Предложение выше — типичная первая строка официального письма: оно сразу говорит, зачем ты пишешь.`,
    ),
    ask(2, {
      en: ["How do you end a formal email?", ["Love,", "Yours sincerely,", "See ya!"], "Formal: Yours sincerely or Best regards."],
      hy: ["Ինչպե՞ս ես ավարտում պաշտոնական նամակը։", ["Love,", "Yours sincerely,", "See ya!"], "Պաշտոնական՝ Yours sincerely կամ Best regards։"],
      ru: ["Как закончить официальное письмо?", ["Love,", "Yours sincerely,", "See ya!"], "Официально: Yours sincerely или Best regards."],
    }),
  ],
  "year-6-review": [
    "tense name=present-perfect aspects=simple,continuous,perfect times=past,present",
    closer(
      `**Five tenses on one line.** This year you added three tenses to the present simple and continuous: the **past continuous**, the **present perfect**, and the contrast with the **past simple**. Use the switches above to move between them and say one sentence for each about your own year: *I have learnt a lot. I was reading when… I went to…*

**Your checklist.** Before you hand in a text, check four things: **since** and **for** with the present perfect, never a finished time with it (*yesterday*); **was/were** + **-ing** for background; only one negative (*I have never…*); and **a few / a little** for "some". If those four are right, your English is ready for grade 7.`,
      `**Հինգ ժամանակ՝ մեկ գծի վրա։** Այս տարի present simple-ին և continuous-ին ավելացրիր ևս երեք ժամանակ՝ **past continuous**, **present perfect** և դրա հակադրությունը **past simple**-ի հետ։ Վերևի կոճակներով անցիր դրանց միջև և յուրաքանչյուրի համար մեկ նախադասություն ասա քո տարվա մասին՝ *I have learnt a lot. I was reading when… I went to…*

**Քո ստուգաթերթը։** Տեքստը հանձնելուց առաջ ստուգիր չորս բան՝ **since** և **for** present perfect-ի հետ, և երբեք ավարտված ժամանակ նրա հետ (*yesterday*), **was/were** + **-ing**՝ ֆոնի համար, միայն մեկ ժխտում (*I have never…*) և **a few / a little**՝ «մի քանի, մի քիչ» իմաստով։ Եթե այս չորսը ճիշտ են, քո անգլերենը պատրաստ է 7-րդ դասարանին։`,
      `**Пять времён на одной линии.** В этом году к present simple и continuous ты добавил ещё три: **past continuous**, **present perfect** и его противопоставление **past simple**. Переключайся между ними кнопками выше и скажи по одному предложению о своём годе: *I have learnt a lot. I was reading when… I went to…*

**Твой чек-лист.** Прежде чем сдать текст, проверь четыре вещи: **since** и **for** с present perfect и никогда законченное время с ним (*yesterday*); **was/were** + **-ing** для фона; только одно отрицание (*I have never…*); **a few / a little** в значении «немного, несколько». Если эти четыре в порядке, твой английский готов к 7 классу.`,
    ),
    ask(3, {
      en: ["Choose the correct sentence.", ["I have finished it yesterday.", "I haven't never finished it.", "I have just finished it."], "Present perfect with just, no finished time, one negative at most."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["I have finished it yesterday.", "I haven't never finished it.", "I have just finished it."], "Present perfect՝ just-ով, առանց ավարտված ժամանակի, առավելագույնը մեկ ժխտում։"],
      ru: ["Выбери правильное предложение.", ["I have finished it yesterday.", "I haven't never finished it.", "I have just finished it."], "Present perfect с just, без законченного времени, не больше одного отрицания."],
    }),
  ],
};
