import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade2: VisualMap[number] = {
  "hello-goodbye": [
    "forms mode=compare cols=enhyru Hello:Բարև:Привет Good_morning:Բարի_լույս:Доброе_утро Good_night:Բարի_գիշեր:Спокойной_ночи Goodbye:Ցտեսություն:До_свидания",
    closer(
      `**Goodbye is a short prayer.** Four hundred years ago people said «God be with you» when they left. They said it so often and so fast that it turned into «Godbwye», and then into «goodbye». So every time you say «Bye!», you wish someone well.

**Hello and the telephone.** When the telephone was new, people did not know what to say when they picked it up. In 1877 the inventor Thomas Edison suggested «Hello!». Alexander Graham Bell, who built the first telephone, liked «Ahoy!», a word sailors shout. Edison's word won, and now we say it face to face too.`,
      `**Goodbye-ը կարճ աղոթք է։** Չորս հարյուր տարի առաջ մարդիկ հեռանալիս ասում էին «God be with you»՝ «Աստված քեզ հետ լինի»։ Այնքան հաճախ ու արագ էին ասում, որ այն դարձավ «Godbwye», հետո՝ «goodbye»։ Ուրեմն ամեն անգամ «Bye!» ասելիս դու մարդուն բարին ես մաղթում։

**Hello-ն և հեռախոսը։** Երբ հեռախոսը նոր էր, մարդիկ չգիտեին՝ ինչ ասել լսափողը վերցնելիս։ 1877 թվականին գյուտարար Թոմաս Էդիսոնն առաջարկեց «Hello!»։ Ալեքսանդր Գրեհեմ Բելը, որը ստեղծեց առաջին հեռախոսը, նախընտրում էր «Ahoy!»՝ նավաստիների բացականչությունը։ Հաղթեց Էդիսոնի բառը, և հիմա այն ասում ենք նաև դեմ առ դեմ հանդիպելիս։`,
      `**Goodbye — это короткая молитва.** Четыреста лет назад, прощаясь, говорили «God be with you» — «Бог с тобой». Говорили так часто и быстро, что получилось «Godbwye», а потом «goodbye». Так что, говоря «Bye!», ты желаешь человеку добра.

**Hello и телефон.** Когда телефон был новинкой, никто не знал, что говорить, сняв трубку. В 1877 году изобретатель Томас Эдисон предложил «Hello!». Александр Грейам Белл, создатель первого телефона, предпочитал «Ahoy!» — так кричат моряки. Победило слово Эдисона, и теперь мы говорим его и при встрече.`,
    ),
    ask(2, {
      en: ["Which word comes from «God be with you»?", ["Hello", "Goodbye", "Good morning"], "People said «God be with you» so fast that it became «goodbye»."],
      hy: ["Ո՞ր բառն է առաջացել «God be with you»-ից։", ["Hello", "Goodbye", "Good morning"], "Մարդիկ «God be with you»-ն այնքան արագ էին ասում, որ այն դարձավ «goodbye»։"],
      ru: ["Какое слово произошло от «God be with you»?", ["Hello", "Goodbye", "Good morning"], "«God be with you» говорили так быстро, что получилось «goodbye»."],
    }),
  ],
  "whats-your-name": [
    "sentence mode=order What's your name ?",
    closer(
      `**First name first.** In English the name you are called by comes first and the family name comes last: Aram Petrosyan, Lily Brown. At school a teacher may call you by your first name; a grown-up you do not know is called Mr Brown or Mrs Brown.

**Names that change and names that don't.** In Russian a girl's family name often gets an extra **-a**: Ivanov, but Ivanova. In English a family name is the same for everybody in the family: Mr Brown, Mrs Brown and little Lily Brown. Many Armenian family names end in **-yan** or **-ian**, which means «from the family of»: Petrosyan is «from the family of Petros».`,
      `**Նախ՝ անունը։** Անգլերենում նախ գալիս է անունը, որով քեզ դիմում են, իսկ ազգանունը՝ վերջում․ Aram Petrosyan, Lily Brown։ Դպրոցում ուսուցիչը կարող է քեզ դիմել անունով, իսկ անծանոթ մեծահասակին ասում են Mr Brown կամ Mrs Brown։

**Փոխվող և չփոխվող ազգանուններ։** Ռուսերենում աղջկա ազգանունը հաճախ ստանում է **-a** վերջավորություն՝ Ivanov, բայց Ivanova։ Անգլերենում ազգանունը նույնն է ընտանիքի բոլոր անդամների համար՝ Mr Brown, Mrs Brown և փոքրիկ Lily Brown։ Շատ հայկական ազգանուններ ավարտվում են **-յան** կամ **-յանց** մասնիկով, որը նշանակում է «այս ընտանիքից»․ Պետրոսյանը «Պետրոսի ընտանիքից» է։`,
      `**Сначала имя.** В английском сначала идёт имя, а фамилия — в конце: Aram Petrosyan, Lily Brown. В школе учитель может звать тебя по имени, а к незнакомому взрослому обращаются Mr Brown или Mrs Brown.

**Фамилии, которые меняются и не меняются.** В русском фамилия девочки часто получает **-а**: Иванов, но Иванова. В английском фамилия одинакова для всей семьи: Mr Brown, Mrs Brown и маленькая Lily Brown. Многие армянские фамилии оканчиваются на **-ян**, что значит «из семьи»: Петросян — «из семьи Петроса».`,
    ),
    ask(3, {
      en: ["Lily's father is Mr Brown. What is Lily's family name?", ["Browna", "Brownova", "Brown"], "In English the whole family has the same family name."],
      hy: ["Լիլիի հայրը Mr Brown-ն է։ Ո՞րն է Լիլիի ազգանունը։", ["Browna", "Brownova", "Brown"], "Անգլերենում ամբողջ ընտանիքն ունի նույն ազգանունը։"],
      ru: ["Папа Лили — Mr Brown. Какая фамилия у Лили?", ["Browna", "Brownova", "Brown"], "В английском у всей семьи одна и та же фамилия."],
    }),
  ],
  "how-are-you": [
    "forms mode=compare cols=enhyru I'm_fine:Լավ_եմ:У_меня_всё_хорошо I'm_happy:Ուրախ_եմ:Я_рад I'm_tired:Հոգնած_եմ:Я_устал I'm_hungry:Սոված_եմ:Я_голоден",
    closer(
      `**«How are you?» is often just «hello».** When an English speaker asks «How are you?» in a shop or at the door, they usually do not want a long story. The polite answer is short: «Fine, thanks. And you?» Tell the long story to a friend or your mum.

**Look at the little word «I'm».** In English you cannot say just «Happy» or «Tired» about yourself: you need **I'm** (I am) in front. Armenian puts **եմ** at the end («Ուրախ եմ»), Russian often needs no verb at all («Я рад»). English always wants the verb.`,
      `**«How are you?»-ն հաճախ պարզապես «բարև» է։** Երբ անգլիախոսը խանութում կամ դռան մոտ հարցնում է «How are you?», սովորաբար երկար պատմություն չի սպասում։ Քաղաքավարի պատասխանը կարճ է՝ «Fine, thanks. And you?»։ Երկար պատմությունը պատմիր ընկերոջդ կամ մայրիկիդ։

**Ուշադրություն դարձրու փոքրիկ «I'm» բառին։** Անգլերենում քո մասին չես կարող ասել պարզապես «Happy» կամ «Tired»․ առջևում պետք է **I'm** (I am)։ Հայերենում **եմ**-ը վերջում է («Ուրախ եմ»), ռուսերենում հաճախ բայ ընդհանրապես պետք չէ («Я рад»)։ Անգլերենը միշտ բայ է ուզում։`,
      `**«How are you?» — часто просто «привет».** Когда англичанин спрашивает «How are you?» в магазине или у двери, он обычно не ждёт длинного рассказа. Вежливый ответ короткий: «Fine, thanks. And you?» Длинную историю расскажи другу или маме.

**Посмотри на маленькое «I'm».** По-английски нельзя сказать о себе просто «Happy» или «Tired»: впереди нужно **I'm** (I am). В армянском **եմ** стоит в конце («Ուրախ եմ»), в русском глагол часто вообще не нужен («Я рад»). Английский всегда требует глагол.`,
    ),
    ask(1, {
      en: ["A shop assistant says «How are you?». What is a good answer?", ["Fine, thanks. And you?", "Tired.", "My cat is ill and my bus was late and…"], "It is a friendly greeting, so a short polite answer is best."],
      hy: ["Վաճառողն ասում է «How are you?»։ Ո՞րն է լավ պատասխանը։", ["Fine, thanks. And you?", "Tired.", "My cat is ill and my bus was late and…"], "Սա ընկերական ողջույն է, ուստի լավագույնը կարճ, քաղաքավարի պատասխանն է։"],
      ru: ["Продавец говорит «How are you?». Какой ответ хороший?", ["Fine, thanks. And you?", "Tired.", "My cat is ill and my bus was late and…"], "Это дружеское приветствие, поэтому лучше всего короткий вежливый ответ."],
    }),
  ],
  "abc-song": [
    "letters abc=en",
    closer(
      `**A tune you already know.** Sing the ABC song and then «Twinkle, twinkle, little star»: it is the same tune! It comes from an old French song, «Ah! vous dirai-je, maman», and the composer Mozart wrote twelve variations on it.

**Zed or zee?** In Britain the last letter is called **zed**. In America it is **zee**, and the American song ends «…X, Y and Z (zee). Now I know my ABC (bee, cee…)»: «zee» rhymes with «me». Tap the tiles above to hear each letter's name in your head, then sing.`,
      `**Մեղեդի, որը դու արդեն գիտես։** Երգիր ABC երգը, հետո՝ «Twinkle, twinkle, little star»․ նույն մեղեդին է։ Այն գալիս է հին ֆրանսիական «Ah! vous dirai-je, maman» երգից, և կոմպոզիտոր Մոցարտը դրա վրա տասներկու վարիացիա է գրել։

**Zed, թե՞ zee։** Բրիտանիայում վերջին տառը կոչվում է **zed**։ Ամերիկայում այն **zee** է, և ամերիկյան երգն ավարտվում է «…X, Y and Z (zee). Now I know my ABC»․ «zee»-ն հանգավորվում է «me»-ի հետ։ Սեղմիր վերևի սալիկները, մտքում ասա ամեն տառի անունը, հետո երգիր։`,
      `**Мелодия, которую ты уже знаешь.** Спой песенку ABC, а потом «Twinkle, twinkle, little star»: мелодия та же! Она взята из старой французской песенки «Ah! vous dirai-je, maman», и композитор Моцарт написал на неё двенадцать вариаций.

**Zed или zee?** В Британии последняя буква называется **zed**. В Америке — **zee**, и американская песенка заканчивается «…X, Y and Z (zee). Now I know my ABC»: «zee» рифмуется с «me». Нажимай на плитки выше, называй про себя каждую букву, а потом пой.`,
    ),
    ask(1, {
      en: ["Which song has the same tune as the ABC song?", ["Twinkle, twinkle, little star", "Happy birthday to you", "Head, shoulders, knees and toes"], "Both songs use the tune of the old French song «Ah! vous dirai-je, maman»."],
      hy: ["Ո՞ր երգն ունի ABC երգի մեղեդին։", ["Twinkle, twinkle, little star", "Happy birthday to you", "Head, shoulders, knees and toes"], "Երկու երգն էլ հին ֆրանսիական «Ah! vous dirai-je, maman» երգի մեղեդին ունեն։"],
      ru: ["У какой песни та же мелодия, что у песенки ABC?", ["Twinkle, twinkle, little star", "Happy birthday to you", "Head, shoulders, knees and toes"], "Обе песни поются на мотив старой французской песенки «Ah! vous dirai-je, maman»."],
    }),
  ],
  "letters-a-m": [
    "letters abc=en focus=A,B,C,D,E,F,G,H,I,J,K,L,M",
    closer(
      `**The busiest letter.** E is the letter used most often in English: look at «the», «me», «tree», «here». If you count the letters on a page of a book, E almost always wins. Five letters, A, E, I, O and U, are vowels; Y sometimes works as one too.

**J is a young letter.** Long ago I and J were one letter, and people wrote «iam» for «jam». J became a separate letter only about five hundred years ago, so it is one of the newest letters of the alphabet. Tap J above and look at its picture.`,
      `**Ամենաաշխատասեր տառը։** E-ն անգլերենում ամենահաճախ գործածվող տառն է․ նայիր «the», «me», «tree», «here» բառերին։ Եթե հաշվես գրքի մի էջի տառերը, E-ն գրեթե միշտ առաջինն է։ Հինգ տառ՝ A, E, I, O և U, ձայնավորներ են, Y-ն էլ երբեմն ձայնավորի դեր է կատարում։

**J-ն երիտասարդ տառ է։** Վաղուց I-ն և J-ն մեկ տառ էին, և «jam»-ի փոխարեն գրում էին «iam»։ J-ն առանձին տառ դարձավ ընդամենը մոտ հինգ հարյուր տարի առաջ, ուստի այբուբենի ամենանոր տառերից է։ Սեղմիր վերևի J-ն և նայիր նկարին։`,
      `**Самая трудолюбивая буква.** E — самая частая буква в английском: посмотри на «the», «me», «tree», «here». Если посчитать буквы на странице книги, E почти всегда побеждает. Пять букв — A, E, I, O и U — гласные; Y иногда тоже работает как гласная.

**J — молодая буква.** Давным-давно I и J были одной буквой, и вместо «jam» писали «iam». Отдельной буквой J стала всего около пятисот лет назад, так что это одна из самых новых букв алфавита. Нажми на J выше и посмотри на картинку.`,
    ),
    ask(2, {
      en: ["Which letter is used most often in English?", ["A", "E", "M"], "E is the most common letter: the, me, tree, here."],
      hy: ["Ո՞ր տառն է անգլերենում ամենահաճախը գործածվում։", ["A", "E", "M"], "E-ն ամենատարածված տառն է՝ the, me, tree, here։"],
      ru: ["Какая буква в английском встречается чаще всего?", ["A", "E", "M"], "E — самая частая буква: the, me, tree, here."],
    }),
  ],
  "letters-n-z": [
    "letters abc=en focus=N,O,P,Q,R,S,T,U,V,W,X,Y,Z",
    closer(
      `**Q never goes out alone.** In English words Q is almost always followed by U: queen, quick, question, square. The two letters together say /kw/. So when you hear /kw/ at the start of a word, think «qu».

**Why «double-you»?** Look at W: it is two V's joined together. Long ago the letter V was also used for U, so people called two of them «double U». Russian and Armenian have no letter for this sound: round your lips as for «у» or «ու», then open them quickly, «w-w-window».`,
      `**Q-ն մենակ չի քայլում։** Անգլերեն բառերում Q-ից հետո գրեթե միշտ U է գալիս՝ queen, quick, question, square։ Այս երկու տառը միասին տալիս են /kw/ հնչյունը։ Ուրեմն, երբ բառի սկզբում լսում ես /kw/, մտածիր «qu»-ի մասին։

**Ինչո՞ւ «double-you»։** Նայիր W-ին․ դա իրար միացած երկու V է։ Վաղուց V տառը գործածվում էր նաև U-ի փոխարեն, ուստի երկու V-ն կոչեցին «կրկնակի U»։ Ռուսերենում և հայերենում այս հնչյունի համար տառ չկա․ շրթունքները կլորացրու ինչպես «ու»-ի համար, հետո արագ բացիր՝ «w-w-window»։`,
      `**Q одна не ходит.** В английских словах после Q почти всегда стоит U: queen, quick, question, square. Вместе эти буквы звучат как /kw/. Так что, услышав /kw/ в начале слова, вспомни про «qu».

**Почему «double-you»?** Посмотри на W: это две соединённые V. Когда-то буквой V писали и U, поэтому две такие буквы назвали «двойная U». В русском и армянском нет буквы для этого звука: округли губы, как для «у», и быстро раскрой их — «w-w-window».`,
    ),
    ask(3, {
      en: ["Which letter almost always comes after Q?", ["A", "E", "U"], "Queen, quick, question: Q is followed by U."],
      hy: ["Ո՞ր տառն է գրեթե միշտ գալիս Q-ից հետո։", ["A", "E", "U"], "Queen, quick, question․ Q-ից հետո U է։"],
      ru: ["Какая буква почти всегда стоит после Q?", ["A", "E", "U"], "Queen, quick, question: после Q идёт U."],
    }),
  ],
  colours: [
    "forms mode=compare cols=enhyru red:կարմիր:красный yellow:դեղին:жёлтый green:կանաչ:зелёный blue:կապույտ:синий orange:նարնջագույն:оранжевый",
    closer(
      `**First the fruit, then the colour.** Long ago English had no word for orange: people said «yellow-red». Then the sweet fruit came to Europe, and the colour got its name from the fruit. Armenian did the same: **նարնջագույն** means «the colour of an orange (նարինջ)».

**Two blues.** English has one word, **blue**, for the sky and for the sea. Russian has two: **голубой** (light blue) and **синий** (dark blue), and Armenian has **երկնագույն** («sky-coloured») and **կապույտ**. In English you say «light blue» and «dark blue».`,
      `**Նախ՝ միրգը, հետո՝ գույնը։** Վաղուց անգլերենում նարնջագույնի համար բառ չկար, ասում էին «yellow-red»՝ «դեղնակարմիր»։ Հետո քաղցր միրգը հասավ Եվրոպա, և գույնն անվանվեց մրգի անունով։ Հայերենում նույնն է․ **նարնջագույն** նշանակում է «նարնջի գույն»։

**Երկու կապույտ։** Անգլերենում մեկ բառ կա՝ **blue**, և՛ երկնքի, և՛ ծովի համար։ Ռուսերենում երկուսն են՝ **голубой** (բաց կապույտ) և **синий** (մուգ կապույտ), իսկ հայերենում՝ **երկնագույն** և **կապույտ**։ Անգլերենում ասում ես «light blue» և «dark blue»։`,
      `**Сначала фрукт, потом цвет.** Давным-давно в английском не было слова для оранжевого: говорили «yellow-red», «жёлто-красный». Потом в Европу попал сладкий фрукт, и цвет назвали по нему. В армянском так же: **նարնջագույն** значит «цвета апельсина (նարինջ)».

**Два синих.** В английском одно слово — **blue** — и для неба, и для моря. В русском их два: **голубой** и **синий**, в армянском — **երկնագույն** («цвета неба») и **կապույտ**. По-английски говорят «light blue» и «dark blue».`,
    ),
    ask(2, {
      en: ["How do you say «голубой / երկնագույն» in English?", ["dark blue", "light blue", "purple"], "English has one word, blue, and adds light or dark."],
      hy: ["Ինչպե՞ս է անգլերեն «երկնագույն»-ը։", ["dark blue", "light blue", "purple"], "Անգլերենն ունի մեկ բառ՝ blue, և ավելացնում է light կամ dark։"],
      ru: ["Как сказать «голубой» по-английски?", ["dark blue", "light blue", "purple"], "В английском одно слово blue, к нему добавляют light или dark."],
    }),
  ],
  "numbers-1-10": [
    "count",
    closer(
      `**Your numbers have English cousins.** Say them side by side: two, **երկու**, **два**; three, **երեք**, **три**. They sound alike because English, Armenian and Russian are distant relatives: thousands of years ago their ancestors spoke one language. Can you hear it in «six» and «վեց», «шесть»?

**Count with a ten frame.** Tap the frame above to fill it, one counter at a time, and say the number in English. Five counters fill one row, ten fill the frame. Then empty it and count back: ten, nine, eight…`,
      `**Քո թվերն անգլերենում զարմիկներ ունեն։** Ասա դրանք կողք կողքի՝ two, **երկու**, **два**, three, **երեք**, **три**։ Նման են հնչում, որովհետև անգլերենը, հայերենը և ռուսերենը հեռավոր ազգականներ են․ հազարավոր տարիներ առաջ նրանց նախնիները մեկ լեզվով էին խոսում։ Լսո՞ւմ ես դա «six», «վեց», «шесть» բառերում։

**Հաշվիր տասնոցով։** Սեղմիր վերևի վանդակը՝ այն մեկ առ մեկ լցնելու համար, և թիվն ասա անգլերեն։ Հինգ նշանը լցնում է մեկ շարքը, տասը՝ ամբողջ վանդակը։ Հետո դատարկիր և հաշվիր հետ՝ ten, nine, eight…`,
      `**У твоих чисел есть английские родственники.** Скажи их рядом: two, **երկու**, **два**; three, **երեք**, **три**. Они похожи, потому что английский, армянский и русский — дальние родственники: тысячи лет назад их предки говорили на одном языке. Слышишь это в «six», «վեց», «шесть»?

**Считай с десяткой.** Нажимай на рамку выше, заполняй её по одной фишке и называй число по-английски. Пять фишек — один ряд, десять — вся рамка. Потом очисти её и считай назад: ten, nine, eight…`,
    ),
    ask(3, {
      en: ["Which English number sounds like «երեք» and «три»?", ["two", "ten", "three"], "Three, երեք and три come from the same old word."],
      hy: ["Անգլերեն ո՞ր թիվն է նման «երեք»-ին և «три»-ին։", ["two", "ten", "three"], "Three, երեք և три բառերը նույն հին բառից են։"],
      ru: ["Какое английское число похоже на «три» и «երեք»?", ["two", "ten", "three"], "Three, три и երեք происходят от одного древнего слова."],
    }),
  ],
  "how-many": [
    "forms mode=compare cols=number one_cat:two_cats one_ball:ten_balls one_fish:two_fish one_mouse:three_mice",
    closer(
      `**After two, English always adds -s.** Say «two cat**s**», «five cat**s**», «a hundred cat**s**». Russian changes the ending in two ways («два кота», «пять котов»), and Armenian keeps one cat after a number: «երկու կատու». English is the easiest here: more than one, add **-s**.

**A few words break the rule.** Fish stays fish, sheep stays sheep, and one mouse becomes three **mice**. These words are very old and kept their old plurals. Hide a column above and say the other form aloud.`,
      `**Երկուսից հետո անգլերենը միշտ ավելացնում է -s։** Ասա «two cat**s**», «five cat**s**», «a hundred cat**s**»։ Ռուսերենը վերջավորությունը փոխում է երկու ձևով («два кота», «пять котов»), իսկ հայերենում թվից հետո կատուն մնում է եզակի՝ «երկու կատու»։ Այստեղ անգլերենն ամենահեշտն է․ մեկից շատ է՝ ավելացրու **-s**։

**Մի քանի բառ խախտում է կանոնը։** Fish-ը մնում է fish, sheep-ը՝ sheep, իսկ one mouse-ը դառնում է three **mice**։ Այս բառերը շատ հին են և պահպանել են հին հոգնակին։ Թաքցրու վերևի սյունակներից մեկը և բարձրաձայն ասա մյուս ձևը։`,
      `**После двух в английском всегда -s.** Скажи «two cat**s**», «five cat**s**», «a hundred cat**s**». В русском окончание меняется по-разному («два кота», «пять котов»), а в армянском после числа кот остаётся в единственном числе: «երկու կատու». Здесь английский проще всех: больше одного — добавь **-s**.

**Несколько слов нарушают правило.** Fish остаётся fish, sheep — sheep, а one mouse превращается в three **mice**. Эти слова очень старые и сохранили старое множественное число. Спрячь столбец выше и назови другую форму вслух.`,
    ),
    ask(2, {
      en: ["Which is correct?", ["three mouses", "three mice", "three mouse"], "Mouse has an old plural: mice."],
      hy: ["Ո՞րն է ճիշտ։", ["three mouses", "three mice", "three mouse"], "Mouse-ն ունի հին հոգնակի՝ mice։"],
      ru: ["Как правильно?", ["three mouses", "three mice", "three mouse"], "У mouse старое множественное число: mice."],
    }),
  ],
  "how-old-are-you": [
    "sentence mode=order How old are you ?",
    closer(
      `**In English you «are» seven.** English says «I **am** seven»: I am seven years old. Armenian says «Յոթ տարեկան եմ», close to English. Russian says «Мне семь лет», «to me seven years». So do not say «I have seven»: in English your age is something you **are**.

**The birthday song is over a hundred years old.** Its tune was written in America in 1893 by two sisters, Mildred and Patty Hill, for a school song called «Good Morning to All». Later people sang «Happy birthday to you» to it, and now it is sung all over the world.`,
      `**Անգլերենում դու յոթ «ես»։** Անգլերենն ասում է «I **am** seven»՝ ես յոթ տարեկան եմ։ Հայերենը նման է անգլերենին՝ «Յոթ տարեկան եմ»։ Ռուսերենն ասում է «Мне семь лет»՝ «ինձ յոթ տարի»։ Ուրեմն մի՛ ասա «I have seven»․ անգլերենում տարիքն այն է, ինչ դու **ես**։

**Ծննդյան երգը հարյուր տարուց ավելի հին է։** Դրա մեղեդին գրել են Ամերիկայում 1893 թվականին երկու քույրեր՝ Միլդրեդ և Փեթի Հիլերը, դպրոցական «Good Morning to All» երգի համար։ Հետո այդ մեղեդիով սկսեցին երգել «Happy birthday to you», և հիմա այն երգում են ամբողջ աշխարհում։`,
      `**По-английски ты «есть» семь.** Англичане говорят «I **am** seven» — «я есть семь лет». Армянский похож на английский: «Յոթ տարեկան եմ». А по-русски — «Мне семь лет». Поэтому не говори «I have seven»: в английском возраст — это то, что ты **есть**.

**Песне про день рождения больше ста лет.** Её мелодию в 1893 году в Америке написали две сестры, Милдред и Пэтти Хилл, для школьной песенки «Good Morning to All». Потом на этот мотив стали петь «Happy birthday to you», и теперь её поют по всему миру.`,
    ),
    ask(1, {
      en: ["How do you tell your age in English?", ["I'm seven.", "I have seven.", "Me seven years."], "In English you are your age: I'm seven (years old)."],
      hy: ["Ինչպե՞ս ես անգլերեն ասում տարիքդ։", ["I'm seven.", "I have seven.", "Me seven years."], "Անգլերենում դու քո տարիքն «ես»՝ I'm seven (years old)։"],
      ru: ["Как сказать свой возраст по-английски?", ["I'm seven.", "I have seven.", "Me seven years."], "В английском ты «есть» свой возраст: I'm seven (years old)."],
    }),
  ],
  shapes: [
    "shapes",
    closer(
      `**«Tri» means three.** A **tri**angle has three sides and three corners. The same little part is in a **tri**cycle (a bike with three wheels). A **rect**angle has four «right» corners, like the corner of a book. A circle has no corners at all: roll it and it never stops.

**A square is a special rectangle.** Every square is a rectangle, because it has four right corners. But only a rectangle with four **equal** sides is a square. Tap the shapes above, count the sides and corners, then find each shape in your room: a square window, a round clock, a rectangle door.`,
      `**«Tri» նշանակում է երեք։** **Tri**angle-ը (եռանկյունը) ունի երեք կողմ և երեք անկյուն։ Նույն մասնիկը կա **tri**cycle բառում (երեք անիվով հեծանիվ)։ **Rect**angle-ը (ուղղանկյունը) ունի չորս «ուղիղ» անկյուն, ինչպես գրքի անկյունը։ Շրջանն ընդհանրապես անկյուն չունի․ գլորիր այն, և այն չի կանգնի։

**Քառակուսին հատուկ ուղղանկյուն է։** Ամեն քառակուսի ուղղանկյուն է, որովհետև ունի չորս ուղիղ անկյուն։ Բայց միայն չորս **հավասար** կողմ ունեցող ուղղանկյունն է քառակուսի։ Սեղմիր վերևի պատկերները, հաշվիր կողմերն ու անկյունները, հետո գտիր յուրաքանչյուրը քո սենյակում՝ քառակուսի պատուհան, կլոր ժամացույց, ուղղանկյուն դուռ։`,
      `**«Tri» значит «три».** У **tri**angle (треугольника) три стороны и три угла. Та же частичка есть в слове **tri**cycle (велосипед с тремя колёсами). У **rect**angle (прямоугольника) четыре «прямых» угла, как у книги. У круга углов нет вовсе: покати его — и он не остановится.

**Квадрат — особый прямоугольник.** Каждый квадрат — прямоугольник, ведь у него четыре прямых угла. Но квадрат — только прямоугольник с четырьмя **равными** сторонами. Нажимай на фигуры выше, считай стороны и углы, а потом найди каждую фигуру в своей комнате: квадратное окно, круглые часы, прямоугольную дверь.`,
    ),
    ask(3, {
      en: ["A tricycle has … wheels.", ["two", "four", "three"], "Tri means three, as in triangle."],
      hy: ["Tricycle-ն ունի … անիվ։", ["two", "four", "three"], "Tri նշանակում է երեք, ինչպես triangle բառում։"],
      ru: ["У tricycle … колеса.", ["two", "four", "three"], "Tri значит «три», как в слове triangle."],
    }),
  ],
  "simon-says": [
    "sentence mode=order Touch your nose , please .",
    closer(
      `**One command for everybody.** In English a command is just the verb: «Jump!», «Sit down!». It is the same for one friend and for the whole class. Armenian and Russian have two forms: «Կանգնի՛ր» and «Կանգնե՛ք», «Встань!» and «Встаньте!». To be polite in English, add **please**.

**Simon says in other countries.** Children in France play the same game, but there the leader says «Jacques a dit», «Jacques said». The rule is the same everywhere: listen to the start of the command before you move.`,
      `**Մեկ հրաման բոլորի համար։** Անգլերենում հրամանը պարզապես բայն է՝ «Jump!», «Sit down!»։ Այն նույնն է և՛ մեկ ընկերոջ, և՛ ամբողջ դասարանի համար։ Հայերենում և ռուսերենում երկու ձև կա՝ «Կանգնի՛ր» և «Կանգնե՛ք», «Встань!» և «Встаньте!»։ Անգլերենում քաղաքավարի լինելու համար ավելացրու **please**։

**Simon says խաղն այլ երկրներում։** Ֆրանսիայում երեխաները խաղում են նույն խաղը, բայց այնտեղ առաջնորդն ասում է «Jacques a dit»՝ «Ժակն ասաց»։ Կանոնն ամենուր նույնն է․ շարժվելուց առաջ ուշադիր լսիր հրամանի սկիզբը։`,
      `**Одна команда для всех.** В английском команда — это просто глагол: «Jump!», «Sit down!». Она одинакова и для одного друга, и для всего класса. В русском и армянском две формы: «Встань!» и «Встаньте!», «Կանգնի՛ր» и «Կանգնե՛ք». Чтобы быть вежливым по-английски, добавь **please**.

**«Simon says» в других странах.** Во Франции дети играют в ту же игру, только ведущий говорит «Jacques a dit» — «Жак сказал». Правило везде одно: прежде чем двигаться, послушай начало команды.`,
    ),
    ask(1, {
      en: ["The teacher says to the whole class: «… down, please!»", ["Sit", "Sits", "Sitting"], "A command is the plain verb, for one person or many."],
      hy: ["Ուսուցիչն ամբողջ դասարանին ասում է․ «… down, please!»", ["Sit", "Sits", "Sitting"], "Հրամանը բայի պարզ ձևն է՝ մեկ կամ շատ մարդկանց համար։"],
      ru: ["Учитель говорит всему классу: «… down, please!»", ["Sit", "Sits", "Sitting"], "Команда — это простой глагол, для одного и для многих."],
    }),
  ],
  "my-family": [
    "forms mode=compare cols=enhyru mother:մայր:мать brother:եղբայր:брат daughter:դուստր:дочь sister:քույր:сестра",
    closer(
      `**Family words are old relatives too.** Say them aloud: mother, **մայր**, **мать**; brother, **եղբայր**, **брат**; daughter, **դուստր**, **дочь**. They sound alike because they all come from one very old language. People always needed words for their families, so these words lasted for thousands of years.

**One uncle or two?** In English your mum's brother and your dad's brother are both **uncle**. Armenian has two words: **քեռի** (mum's brother) and **հորեղբայր** (dad's brother). Russian, like English, has one: **дядя**. Draw your family tree and write the English words on it.`,
      `**Ընտանիքի բառերն էլ հին ազգականներ են։** Ասա բարձրաձայն՝ mother, **մայր**, **мать**, brother, **եղբայր**, **брат**, daughter, **դուստր**, **дочь**։ Նման են հնչում, որովհետև բոլորը գալիս են մի շատ հին լեզվից։ Մարդկանց միշտ պետք են եղել բառեր իրենց ընտանիքի համար, ուստի այդ բառերը պահպանվել են հազարավոր տարիներ։

**Մեկ քեռի՞, թե՞ երկու։** Անգլերենում մայրիկիդ եղբայրն էլ, հայրիկիդ եղբայրն էլ **uncle** են։ Հայերենում երկու բառ կա՝ **քեռի** և **հորեղբայր**։ Ռուսերենը, ինչպես անգլերենը, մեկ բառ ունի՝ **дядя**։ Գծիր քո տոհմածառը և դրա վրա գրիր անգլերեն բառերը։`,
      `**Слова о семье тоже старые родственники.** Скажи вслух: mother, **мать**, **մայր**; brother, **брат**, **եղբայր**; daughter, **дочь**, **դուստր**. Они похожи, потому что все происходят из одного очень древнего языка. Слова для семьи людям нужны всегда, поэтому они прожили тысячи лет.

**Один дядя или два?** В английском брат мамы и брат папы — оба **uncle**. В армянском два слова: **քեռի** (брат мамы) и **հորեղբայր** (брат папы). В русском, как в английском, одно — **дядя**. Нарисуй своё семейное дерево и подпиши его по-английски.`,
    ),
    ask(2, {
      en: ["Your mum's brother is your…", ["grandpa", "uncle", "cousin"], "Mum's brother and dad's brother are both «uncle» in English."],
      hy: ["Մայրիկիդ եղբայրը քո … է։", ["grandpa", "uncle", "cousin"], "Անգլերենում մայրիկի և հայրիկի եղբայրներն երկուսն էլ «uncle» են։"],
      ru: ["Брат твоей мамы — это твой…", ["grandpa", "uncle", "cousin"], "Брат мамы и брат папы по-английски оба «uncle»."],
    }),
  ],
  "i-have-got": [
    "sentence mode=order Have you got a pet ?",
    closer(
      `**British and American.** «I have got a ball» is how people often speak in Britain. In America people usually say «I **have** a ball» and «**Do** you have a pet?». Both are correct English, and you will hear both in songs and cartoons.

**English works like Armenian here.** Armenian says «Ես ունեմ գնդակ», «I have a ball», just like English. Russian says «У меня есть мяч», «at me there is a ball». If you speak Russian, remember: in English **I** am the one who **has**.`,
      `**Բրիտանական և ամերիկյան։** «I have got a ball»-ը այսպես հաճախ են խոսում Բրիտանիայում։ Ամերիկայում սովորաբար ասում են «I **have** a ball» և «**Do** you have a pet?»։ Երկուսն էլ ճիշտ անգլերեն են, և երգերում ու մուլտֆիլմերում կլսես երկուսն էլ։

**Այստեղ անգլերենը նման է հայերենին։** Հայերենն ասում է «Ես ունեմ գնդակ», ճիշտ ինչպես անգլերենը՝ «I have a ball»։ Ռուսերենն ասում է «У меня есть мяч»՝ «ինձ մոտ կա գնդակ»։ Եթե ռուսերեն գիտես, հիշիր․ անգլերենում **ես** եմ, որ **ունեմ**։`,
      `**Британский и американский.** «I have got a ball» — так часто говорят в Британии. В Америке обычно говорят «I **have** a ball» и «**Do** you have a pet?». Оба варианта правильные, и в песнях и мультфильмах ты услышишь оба.

**Здесь английский похож на армянский.** По-армянски «Ես ունեմ գնդակ» — «я имею мяч», как в английском. А по-русски «У меня есть мяч». Запомни: в английском **я** сам **имею** — I have.`,
    ),
    ask(2, {
      en: ["How do people often say «I have got a dog» in America?", ["I has a dog.", "I have a dog.", "At me is a dog."], "Americans usually drop «got»: I have a dog."],
      hy: ["Ինչպե՞ս են Ամերիկայում հաճախ ասում «I have got a dog»։", ["I has a dog.", "I have a dog.", "At me is a dog."], "Ամերիկացիները սովորաբար բաց են թողնում «got»-ը՝ I have a dog։"],
      ru: ["Как в Америке часто говорят «I have got a dog»?", ["I has a dog.", "I have a dog.", "At me is a dog."], "Американцы обычно опускают «got»: I have a dog."],
    }),
  ],
  toys: [
    "forms mode=compare cols=aan a_doll:an_aeroplane a_car:an_apple a_robot:an_egg a_kite:an_orange",
    closer(
      `**The teddy bear has a famous name.** In 1902 the American President Theodore Roosevelt, called «Teddy», went hunting and refused to shoot a bear that was tied to a tree. A newspaper drew a cartoon about it, a toy shop made a soft bear, and called it «Teddy's bear».

**«Robot» was invented for a play.** In 1920 the Czech writer Karel Čapek wrote a play about machine workers. His brother Josef suggested the name: **robot**, from a Czech word for hard work. Now the word is used in English, Armenian and Russian.`,
      `**Թեդի արջուկն ունի հայտնի անուն։** 1902 թվականին ԱՄՆ նախագահ Թեոդոր Ռուզվելտը, որին անվանում էին «Թեդի», որսի գնաց և հրաժարվեց կրակել ծառին կապված արջի վրա։ Մի թերթ այդ մասին ծաղրանկար տպեց, խաղալիքների խանութը փափուկ արջուկ պատրաստեց և այն անվանեց «Թեդիի արջուկ»։

**«Robot» բառը հորինվել է պիեսի համար։** 1920 թվականին չեխ գրող Կարել Չապեկը պիես գրեց մեքենա-աշխատողների մասին։ Անունն առաջարկեց նրա եղբայրը՝ Յոզեֆը՝ **robot**, չեխերեն «ծանր աշխատանք» բառից։ Հիմա այդ բառը գործածվում է անգլերենում, հայերենում և ռուսերենում։`,
      `**У плюшевого мишки знаменитое имя.** В 1902 году президент США Теодор Рузвельт, которого звали «Тедди», поехал на охоту и отказался стрелять в медведя, привязанного к дереву. Газета нарисовала об этом карикатуру, а магазин игрушек сшил мягкого медвежонка и назвал его «мишка Тедди».

**Слово «robot» придумали для пьесы.** В 1920 году чешский писатель Карел Чапек написал пьесу о машинах-рабочих. Название предложил его брат Йозеф: **robot**, от чешского слова «тяжёлый труд». Теперь это слово есть и в английском, и в армянском, и в русском.`,
    ),
    ask(3, {
      en: ["Choose a or an: «… orange kite».", ["a", "no word", "an"], "Orange starts with a vowel sound, so we say an orange kite."],
      hy: ["Ընտրիր a կամ an․ «… orange kite»։", ["a", "no word", "an"], "Orange-ը սկսվում է ձայնավոր հնչյունով, ուստի ասում ենք an orange kite։"],
      ru: ["Выбери a или an: «… orange kite».", ["a", "no word", "an"], "Orange начинается с гласного звука, поэтому an orange kite."],
    }),
  ],
  pets: [
    "forms mode=compare cols=enhyru woof:հաֆ-հաֆ:гав-гав meow:մյաու:мяу moo:մու:му cock-a-doodle-doo:ծուղրուղու:кукареку",
    closer(
      `**Animals have accents.** A dog barks the same everywhere, but people hear and write it differently: «woof» in English, «հաֆ-հաֆ» in Armenian, «гав-гав» in Russian. The rooster is the funniest: «cock-a-doodle-doo», «ծուղրուղու», «кукареку». Hide a column above and guess the missing sound.

**Some pets live a very long time.** A goldfish can remember things for months, not «three seconds» as people say. A tortoise can live longer than a person: Jonathan, a giant tortoise on the island of St Helena, hatched around 1832 and is famous as the oldest known land animal.`,
      `**Կենդանիներն էլ «առոգանություն» ունեն։** Շունն ամենուր նույն կերպ է հաչում, բայց մարդիկ այն տարբեր են լսում ու գրում՝ անգլերեն «woof», հայերեն «հաֆ-հաֆ», ռուսերեն «гав-гав»։ Ամենազվարճալին աքաղաղն է՝ «cock-a-doodle-doo», «ծուղրուղու», «кукареку»։ Թաքցրու վերևի սյունակներից մեկը և գուշակիր պակասող ձայնը։

**Որոշ ընտանի կենդանիներ շատ երկար են ապրում։** Ոսկե ձկնիկը կարող է բաները հիշել ամիսներով, ոչ թե «երեք վայրկյան», ինչպես ասում են։ Կրիան կարող է մարդուց երկար ապրել․ Ջոնաթանը՝ Սուրբ Հեղինե կղզու հսկա կրիան, ծնվել է մոտ 1832 թվականին և հայտնի է որպես ամենատարեց հայտնի ցամաքային կենդանին։`,
      `**У животных есть «акцент».** Собака лает везде одинаково, но люди слышат и записывают это по-разному: «woof» по-английски, «гав-гав» по-русски, «հաֆ-հաֆ» по-армянски. Смешнее всех петух: «cock-a-doodle-doo», «кукареку», «ծուղրուղու». Спрячь столбец выше и угадай пропущенный звук.

**Некоторые питомцы живут очень долго.** Золотая рыбка помнит события месяцами, а вовсе не «три секунды», как говорят. Черепаха может прожить дольше человека: Джонатан, гигантская черепаха с острова Святой Елены, вылупился около 1832 года и знаменит как самое старое из известных сухопутных животных.`,
    ),
    ask(3, {
      en: ["What does an English rooster say?", ["woof", "moo", "cock-a-doodle-doo"], "English roosters say cock-a-doodle-doo."],
      hy: ["Ի՞նչ է ասում անգլիական աքաղաղը։", ["woof", "moo", "cock-a-doodle-doo"], "Անգլիական աքաղաղն ասում է cock-a-doodle-doo։"],
      ru: ["Что говорит английский петух?", ["woof", "moo", "cock-a-doodle-doo"], "Английский петух кричит cock-a-doodle-doo."],
    }),
  ],
  "big-and-small": [
    "forms mode=compare cols=opposite big:small long:short tall:short fast:slow happy:sad",
    closer(
      `**Record holders.** The **tallest** animal is the giraffe: a grown-up giraffe can be over five metres tall, as high as a two-storey house. The **fastest** runner on land is the cheetah, faster than a car in a town. The tortoise is famous for being **slow**, but it never gives up.

**One word, two opposites.** «Short» is the opposite of «long» (a short snake, a long snake) and of «tall» (a short boy, a tall boy). Russian and Armenian do this too: «короткий» and «низкий», «կարճ» and «ցածր» are different words, but English uses **short** for both.`,
      `**Ռեկորդակիրներ։** Ամենա**բարձրահասակ** կենդանին ընձուղտն է․ հասուն ընձուղտը կարող է հինգ մետրից բարձր լինել՝ երկհարկանի տան չափ։ Ցամաքում ամենա**արագ** վազողը հովազն է (գեպարդը), քաղաքում մեքենայից էլ արագ։ Կրիան հայտնի է իր **դանդաղությամբ**, բայց նա երբեք չի հանձնվում։

**Մեկ բառ՝ երկու հականիշ։** «Short»-ը «long»-ի հականիշն է (կարճ օձ, երկար օձ) և «tall»-ի հականիշը (ցածրահասակ տղա, բարձրահասակ տղա)։ Հայերենում դրանք տարբեր բառեր են՝ «կարճ» և «ցածր», ռուսերենում՝ «короткий» և «низкий», իսկ անգլերենն երկուսի համար էլ գործածում է **short**։`,
      `**Рекордсмены.** Самое **высокое** животное — жираф: взрослый жираф бывает выше пяти метров, как двухэтажный дом. Самый **быстрый** бегун на суше — гепард, он быстрее машины в городе. Черепаха знаменита тем, что она **медленная**, но она никогда не сдаётся.

**Одно слово — два антонима.** «Short» — антоним и к «long» (короткая змея, длинная змея), и к «tall» (низкий мальчик, высокий мальчик). В русском это разные слова — «короткий» и «низкий», в армянском — «կարճ» и «ցածր», а в английском для обоих случаев есть одно **short**.`,
    ),
    ask(2, {
      en: ["What is the opposite of «tall»?", ["small", "short", "slow"], "Short is the opposite of tall and of long."],
      hy: ["Ո՞րն է «tall»-ի հականիշը։", ["small", "short", "slow"], "Short-ը tall-ի և long-ի հականիշն է։"],
      ru: ["Какой антоним к «tall»?", ["small", "short", "slow"], "Short — антоним и к tall, и к long."],
    }),
  ],
  "my-house": [
    "forms mode=compare cols=brame flat:apartment garden:yard ground_floor:first_floor first_floor:second_floor",
    closer(
      `**Which floor is first?** In Britain the floor at street level is the **ground floor**, and the floor above it is the **first floor**. In America the street-level floor is already the **first floor**. Armenia and Russia count like Americans. So if a British friend lives «on the first floor», you have to climb one set of stairs.

**Flat or apartment?** A British child says «I live in a **flat**»; an American child says «I live in an **apartment**». Both mean the same home in a big building. Hide a column above and say the other word.`,
      `**Ո՞ր հարկն է առաջինը։** Բրիտանիայում փողոցի մակարդակի հարկը **ground floor** է (գետնահարկ), իսկ դրանից վեր գտնվողը՝ **first floor**։ Ամերիկայում փողոցի մակարդակի հարկն արդեն **first floor** է։ Հայաստանում և Ռուսաստանում հաշվում են ամերիկացիների պես։ Ուրեմն, եթե բրիտանացի ընկերդ ապրում է «on the first floor», պետք է մեկ աստիճանաշար բարձրանաս։

**Flat, թե՞ apartment։** Բրիտանացի երեխան ասում է «I live in a **flat**», ամերիկացին՝ «I live in an **apartment**»։ Երկուսն էլ նշանակում են բնակարան մեծ շենքում։ Թաքցրու վերևի սյունակներից մեկը և ասա մյուս բառը։`,
      `**Какой этаж первый?** В Британии этаж на уровне улицы — **ground floor**, а следующий — **first floor**. В Америке этаж на уровне улицы — уже **first floor**. В Армении и России считают как американцы. Так что если британский друг живёт «on the first floor», придётся подняться на один пролёт.

**Flat или apartment?** Британский ребёнок говорит «I live in a **flat**», американский — «I live in an **apartment**». Оба слова значат квартиру в большом доме. Спрячь столбец выше и назови другое слово.`,
    ),
    ask(1, {
      en: ["In Britain, the floor at street level is the…", ["ground floor", "first floor", "second floor"], "In Britain the first floor is one floor up."],
      hy: ["Բրիտանիայում փողոցի մակարդակի հարկը կոչվում է…", ["ground floor", "first floor", "second floor"], "Բրիտանիայում first floor-ը մեկ հարկ վերևում է։"],
      ru: ["В Британии этаж на уровне улицы называется…", ["ground floor", "first floor", "second floor"], "В Британии first floor — на один этаж выше."],
    }),
  ],
  "i-can": [
    "sentence mode=order Can you swim ?",
    closer(
      `**Birds that can't fly.** A penguin is a bird, but it can't fly: it swims, using its wings like flippers. An ostrich can't fly either, but it can run at about 70 km an hour, as fast as a car on a big road. So «A bird can fly» is usually true, but not always!

**Can't is one word made of two.** «Can not» is written **cannot** in one word, and short **can't** with an apostrophe (') where the letters «no» were. Say the question and the answer together: «Can you swim?» — «Yes, I can.» / «No, I can't.» Build the question above.`,
      `**Թռչուններ, որոնք չեն կարող թռչել։** Պինգվինը թռչուն է, բայց չի կարող թռչել․ նա լողում է՝ թևերը լողաթևերի պես գործածելով։ Ջայլամն էլ չի թռչում, բայց կարող է վազել ժամում մոտ 70 կմ արագությամբ՝ մայրուղով ընթացող մեքենայի պես։ Ուրեմն «A bird can fly»-ը սովորաբար ճիշտ է, բայց ոչ միշտ։

**Can't-ը երկու բառից կազմված մեկ բառ է։** «Can not»-ը գրվում է մեկ բառով՝ **cannot**, իսկ կարճ ձևը՝ **can't**, ապաթարցով (') այնտեղ, որտեղ «no» տառերն էին։ Հարցն ու պատասխանն ասա միասին՝ «Can you swim?» — «Yes, I can.» / «No, I can't.»։ Վերևում կազմիր հարցը։`,
      `**Птицы, которые не умеют летать.** Пингвин — птица, но летать не умеет: он плавает, работая крыльями как ластами. Страус тоже не летает, зато бегает со скоростью около 70 км в час, как машина на шоссе. Так что «A bird can fly» обычно верно, но не всегда!

**Can't — одно слово из двух.** «Can not» пишется слитно — **cannot**, а коротко — **can't**, с апострофом (') на месте букв «no». Говори вопрос и ответ вместе: «Can you swim?» — «Yes, I can.» / «No, I can't.» Собери вопрос выше.`,
    ),
    ask(2, {
      en: ["Which bird can't fly but swims very well?", ["a parrot", "a penguin", "a sparrow"], "Penguins use their wings to swim."],
      hy: ["Ո՞ր թռչունը չի կարող թռչել, բայց շատ լավ է լողում։", ["a parrot", "a penguin", "a sparrow"], "Պինգվինները լողում են թևերի օգնությամբ։"],
      ru: ["Какая птица не летает, но отлично плавает?", ["a parrot", "a penguin", "a sparrow"], "Пингвины плавают с помощью крыльев."],
    }),
  ],
  "food-i-like": [
    "forms mode=compare cols=countable apples:milk bananas:bread eggs:cheese grapes:water",
    closer(
      `**Can you count it?** You can count apples: one apple, two apple**s**. You can't count milk or water: you can only pour them. So we say «I like apple**s**» but «I like milk», with no -s. Hide a column above: is each word countable?

**Armenian food in English.** Some words travel without translation. **Lavash** is the same word in English, and making lavash is on the UNESCO list of world heritage since 2014. The apricot's scientific name is **Prunus armeniaca**, «the Armenian plum», because Europeans first got to know it as a fruit from Armenia.`,
      `**Կարո՞ղ ես հաշվել։** Խնձորները կարելի է հաշվել՝ one apple, two apple**s**։ Կաթը կամ ջուրը չես կարող հաշվել, կարող ես միայն լցնել։ Ուրեմն ասում ենք «I like apple**s**», բայց «I like milk»՝ առանց -s։ Թաքցրու վերևի սյունակներից մեկը․ արդյո՞ք յուրաքանչյուր բառ հաշվվող է։

**Հայկական ուտեստներն անգլերենում։** Որոշ բառեր ճանապարհորդում են առանց թարգմանության։ **Lavash**-ն անգլերենում նույն բառն է, իսկ լավաշի պատրաստումը 2014 թվականից ներառված է ՅՈՒՆԵՍԿՕ-ի ժառանգության ցանկում։ Ծիրանի գիտական անունն է **Prunus armeniaca**՝ «հայկական սալոր», որովհետև եվրոպացիներն այն ճանաչել են որպես Հայաստանից եկած միրգ։`,
      `**Можно ли это посчитать?** Яблоки посчитать можно: one apple, two apple**s**. Молоко или воду посчитать нельзя — их можно только налить. Поэтому говорим «I like apple**s**», но «I like milk», без -s. Спрячь столбец выше: какие слова исчисляемые?

**Армянская еда по-английски.** Некоторые слова путешествуют без перевода. **Lavash** по-английски так и будет, а приготовление лаваша с 2014 года включено в список наследия ЮНЕСКО. Научное название абрикоса — **Prunus armeniaca**, «армянская слива»: европейцы узнали его как фрукт из Армении.`,
    ),
    ask(2, {
      en: ["Which is correct?", ["I like milks.", "I like milk.", "I like a milk."], "You can't count milk, so it has no -s."],
      hy: ["Ո՞րն է ճիշտ։", ["I like milks.", "I like milk.", "I like a milk."], "Կաթը չես կարող հաշվել, ուստի այն -s չի ստանում։"],
      ru: ["Как правильно?", ["I like milks.", "I like milk.", "I like a milk."], "Молоко нельзя посчитать, поэтому без -s."],
    }),
  ],
  "body-parts": [
    "forms mode=compare cols=number one_hand:two_hands one_eye:two_eyes one_foot:two_feet one_tooth:two_teeth",
    closer(
      `**Two words keep an old plural.** Most body words just add -s: hand**s**, eye**s**, knee**s**. But one foot becomes two **feet**, and one tooth becomes two **teeth**: the vowel changes instead. Never say «foots» or «tooths». Hide a column above and test yourself.

**Count your teeth.** A child has **20** baby teeth. Around the age of six they start to fall out, and grown-up teeth grow in their place; an adult has **32**. A baby is born with about 300 bones, and many of them join together, so a grown-up has 206.`,
      `**Երկու բառ պահպանում է հին հոգնակին։** Մարմնի մասերի բառերի մեծ մասը պարզապես ստանում է -s՝ hand**s**, eye**s**, knee**s**։ Բայց one foot-ը դառնում է two **feet**, իսկ one tooth-ը՝ two **teeth**․ փոխվում է ձայնավորը։ Երբեք մի՛ ասա «foots» կամ «tooths»։ Թաքցրու վերևի սյունակներից մեկը և ստուգիր քեզ։

**Հաշվիր ատամներդ։** Երեխան ունի **20** կաթնատամ։ Մոտ վեց տարեկանում դրանք սկսում են թափվել, և նրանց տեղում մշտական ատամներ են աճում․ մեծահասակն ունի **32** ատամ։ Նորածինը ծնվում է մոտ 300 ոսկորով, որոնցից շատերը միաձուլվում են, ուստի մեծահասակն ունի 206 ոսկոր։`,
      `**Два слова сохранили старое множественное число.** Большинство слов о теле просто получают -s: hand**s**, eye**s**, knee**s**. Но one foot превращается в two **feet**, а one tooth — в two **teeth**: меняется гласная. Никогда не говори «foots» или «tooths». Спрячь столбец выше и проверь себя.

**Посчитай зубы.** У ребёнка **20** молочных зубов. Примерно в шесть лет они начинают выпадать, и на их месте растут постоянные; у взрослого их **32**. Малыш рождается примерно с 300 костями, многие из них срастаются, поэтому у взрослого их 206.`,
    ),
    ask(3, {
      en: ["One tooth, two…", ["tooths", "tooth", "teeth"], "Tooth has an old plural: teeth."],
      hy: ["One tooth, two…", ["tooths", "tooth", "teeth"], "Tooth-ն ունի հին հոգնակի՝ teeth։"],
      ru: ["One tooth, two…", ["tooths", "tooth", "teeth"], "У tooth старое множественное число: teeth."],
    }),
  ],
  clothes: [
    "forms mode=compare cols=plonly a_hat:trousers a_dress:jeans a_coat:shorts a_scarf:pyjamas",
    closer(
      `**Two legs, one plural word.** Trousers, jeans, shorts and pyjamas have two legs, so English always uses them in the plural: «My jeans **are** blue.» To count them, say «a **pair** of jeans», «two pairs of shorts». Russian does the same with «брюки», «джинсы», «шорты»; Armenian says «տաբատ» in the singular.

**Jeans got their names from two cities.** Strong cotton trousers were made in Genoa, an Italian city that the French called **Gênes**, and that became «jeans». The blue cloth **denim** comes from French «de Nîmes», «from Nîmes», a town in France. In 1873 Levi Strauss and Jacob Davis made jeans with metal buttons on the pockets, and they became work clothes for miners and farmers.`,
      `**Երկու փողք՝ մեկ հոգնակի բառ։** Trousers, jeans, shorts և pyjamas բառերն երկու փողք ունեցող հագուստի անուններ են, ուստի անգլերենը դրանք միշտ գործածում է հոգնակիով՝ «My jeans **are** blue.»։ Դրանք հաշվելու համար ասա «a **pair** of jeans», «two pairs of shorts»։ Ռուսերենում նույնն է՝ «брюки», «джинсы», «шорты», իսկ հայերենն ասում է «տաբատ»՝ եզակիով։

**Ջինսերն իրենց անունը ստացել են երկու քաղաքից։** Ամուր բամբակյա տաբատներ էին պատրաստում Ջենովայում՝ իտալական քաղաք, որը ֆրանսիացիներն անվանում էին **Gênes**, և դա դարձավ «jeans»։ Կապույտ **denim** կտորի անունը ֆրանսերեն «de Nîmes»-ից է՝ «Նիմից»՝ ֆրանսիական քաղաքից։ 1873 թվականին Լևի Ստրաուսը և Ջեյքոբ Դեյվիսը գրպաններին մետաղյա գամերով ջինսեր պատրաստեցին, և դրանք դարձան հանքափորների ու ֆերմերների աշխատանքային հագուստ։`,
      `**Две штанины — одно слово во множественном числе.** Trousers, jeans, shorts и pyjamas — одежда с двумя штанинами, поэтому в английском эти слова всегда во множественном числе: «My jeans **are** blue.» Чтобы посчитать, говорят «a **pair** of jeans», «two pairs of shorts». В русском так же: «брюки», «джинсы», «шорты», а в армянском «տաբատ» — в единственном числе.

**Джинсы получили имя от двух городов.** Прочные хлопковые штаны шили в Генуе — итальянском городе, который французы называли **Gênes**, отсюда «jeans». Синяя ткань **denim** — от французского «de Nîmes», «из Нима», города во Франции. В 1873 году Леви Страусс и Джейкоб Дэвис укрепили карманы джинсов металлическими заклёпками, и джинсы стали рабочей одеждой шахтёров и фермеров.`,
    ),
    ask(1, {
      en: ["Which is correct?", ["My trousers are new.", "My trousers is new.", "My trouser are new."], "Trousers is always plural, so we use «are»."],
      hy: ["Ո՞րն է ճիշտ։", ["My trousers are new.", "My trousers is new.", "My trouser are new."], "Trousers-ը միշտ հոգնակի է, ուստի գործածում ենք «are»։"],
      ru: ["Как правильно?", ["My trousers are new.", "My trousers is new.", "My trouser are new."], "Trousers всегда во множественном числе, поэтому «are»."],
    }),
  ],
  "at-the-zoo": [
    "forms mode=compare cols=enhyru lion:առյուծ:лев elephant:փիղ:слон monkey:կապիկ:обезьяна bear:արջ:медведь",
    closer(
      `**«Zoo» is a short word.** The full name is «zoological garden», a garden for studying animals. London Zoo opened in 1828, and Londoners soon shortened the long name to «the Zoo». The Moscow Zoo opened in 1864, and the Yerevan Zoo in 1940.

**The elephant's nose is a hand.** An elephant's trunk has no bones, but tens of thousands of small muscles. With it an elephant can pick up a single peanut, drink water, give itself a shower and say hello to a friend. Make riddles like the lesson's: «It's grey. It's got a long nose…»`,
      `**«Zoo»-ն կարճ բառ է։** Լրիվ անունն է «zoological garden»՝ կենդանաբանական այգի, կենդանիներին ուսումնասիրելու այգի։ Լոնդոնի կենդանաբանական այգին բացվեց 1828 թվականին, և լոնդոնցիները շուտով երկար անունը կրճատեցին՝ «the Zoo»։ Մոսկվայի կենդանաբանական այգին բացվեց 1864 թվականին, Երևանինը՝ 1940 թվականին։

**Փղի քիթը ձեռք է։** Փղի կնճիթում ոսկոր չկա, բայց կան տասնյակ հազարավոր մանր մկաններ։ Դրանով փիղը կարող է վերցնել մեկ գետնանուշ, ջուր խմել, իրեն ցնցուղ անել և բարևել ընկերոջը։ Հորինիր հանելուկներ դասի օրինակով՝ «It's grey. It's got a long nose…»։`,
      `**«Zoo» — короткое слово.** Полное название — «zoological garden», зоологический сад, сад для изучения животных. Лондонский зоопарк открылся в 1828 году, и лондонцы вскоре сократили длинное название до «the Zoo». Московский зоопарк открылся в 1864 году, ереванский — в 1940-м.

**Нос слона — это рука.** В хоботе слона нет костей, зато десятки тысяч маленьких мышц. Хоботом слон может поднять один орешек, попить, устроить себе душ и поздороваться с другом. Придумай загадки, как в уроке: «It's grey. It's got a long nose…»`,
    ),
    ask(1, {
      en: ["«Zoo» is short for…", ["zoological garden", "zebra house", "zoom"], "London Zoo was the first to be called «the Zoo» for short."],
      hy: ["«Zoo»-ն … կրճատ ձևն է։", ["zoological garden", "zebra house", "zoom"], "Լոնդոնի կենդանաբանական այգին առաջինն էր, որ կրճատ կոչվեց «the Zoo»։"],
      ru: ["«Zoo» — это сокращение от…", ["zoological garden", "zebra house", "zoom"], "Лондонский зоопарк первым стали коротко называть «the Zoo»."],
    }),
  ],
  transport: [
    "forms mode=compare cols=brame underground:subway lorry:truck taxi:cab",
    closer(
      `**The oldest metro in the world** is the London Underground. It opened in **1863**, and the first trains were pulled by steam engines through tunnels full of smoke. Londoners call it «the Tube». The Moscow Metro opened in **1935** and is famous for stations that look like palaces; the Yerevan Metro opened in **1981**.

**Two Englishes, two words.** In Britain you ride the **underground** and see a **lorry** on the road; in America you ride the **subway** and see a **truck**. Hide a column above and say the other word. Remember: by bus, by car, by metro, but **on** foot.`,
      `**Աշխարհի ամենահին մետրոն** Լոնդոնինն է։ Այն բացվել է **1863** թվականին, և առաջին գնացքները ծխով լի թունելներով քարշում էին շոգեքարշերը։ Լոնդոնցիներն այն անվանում են «the Tube»՝ «խողովակ»։ Մոսկվայի մետրոն բացվել է **1935** թվականին և հայտնի է պալատների նման կայարաններով, Երևանի մետրոն բացվել է **1981** թվականին։

**Երկու անգլերեն՝ երկու բառ։** Բրիտանիայում նստում ես **underground**, ճանապարհին տեսնում ես **lorry** (բեռնատար), Ամերիկայում՝ **subway** և **truck**։ Թաքցրու վերևի սյունակներից մեկը և ասա մյուս բառը։ Հիշիր՝ by bus, by car, by metro, բայց **on** foot։`,
      `**Самое старое метро в мире** — лондонское. Оно открылось в **1863** году, и первые поезда тянули паровозы по задымлённым туннелям. Лондонцы называют его «the Tube» — «труба». Московское метро открылось в **1935** году и славится станциями, похожими на дворцы, ереванское — в **1981** году.

**Два английских — два слова.** В Британии ездят на **underground** и видят на дороге **lorry** (грузовик), в Америке — на **subway** и видят **truck**. Спрячь столбец выше и назови другое слово. Запомни: by bus, by car, by metro, но **on** foot.`,
    ),
    ask(2, {
      en: ["Which city has the oldest metro in the world?", ["Moscow", "London", "Yerevan"], "The London Underground opened in 1863."],
      hy: ["Ո՞ր քաղաքում է աշխարհի ամենահին մետրոն։", ["Moscow", "London", "Yerevan"], "Լոնդոնի մետրոն բացվել է 1863 թվականին։"],
      ru: ["В каком городе самое старое метро в мире?", ["Moscow", "London", "Yerevan"], "Лондонское метро открылось в 1863 году."],
    }),
  ],
  "nursery-rhymes": [
    "forms mode=compare cols=rhyme star:are high:sky wall:fall men:again",
    closer(
      `**A poem with an author.** «Twinkle, twinkle, little star» feels as old as the stars, but it has an author: the English poet **Jane Taylor** published it in **1806** as a poem called «The Star». It has more verses than the one everybody knows.

**Is Humpty Dumpty an egg?** Read the rhyme again: it never says so! It was a riddle, and the answer was «an egg»: what falls and can never be put together again? Pictures in books, and Lewis Carroll's story «Through the Looking-Glass» (1871), made Humpty a talking egg sitting on a wall. Find the rhyming pairs in the table above.`,
      `**Բանաստեղծություն, որն ունի հեղինակ։** «Twinkle, twinkle, little star»-ը թվում է աստղերի չափ հին, բայց այն հեղինակ ունի․ անգլիացի բանաստեղծուհի **Ջեյն Թեյլորը** այն հրատարակել է **1806** թվականին՝ «The Star» («Աստղը») վերնագրով։ Այն ավելի շատ տուն ունի, քան բոլորին հայտնի մեկը։

**Համփթի Դամփթին ձո՞ւ է։** Կրկին կարդա ոտանավորը․ այնտեղ այդպես չի ասվում։ Դա հանելուկ էր, և պատասխանն էր «ձու»՝ ի՞նչն է ընկնում և այլևս երբեք չի միանում։ Գրքերի նկարները և Լյուիս Քերոլի «Ալիսը հայելու աշխարհում» (1871) պատմությունը Համփթիին դարձրին պատին նստած խոսող ձու։ Գտիր հանգավորվող զույգերը վերևի աղյուսակում։`,
      `**Стихотворение, у которого есть автор.** «Twinkle, twinkle, little star» кажется древним, как звёзды, но у него есть автор: английская поэтесса **Джейн Тейлор** напечатала его в **1806** году под названием «The Star» («Звезда»). В нём больше куплетов, чем тот, что знают все.

**Шалтай-Болтай — яйцо?** Перечитай стишок: там этого не сказано! Это была загадка с ответом «яйцо»: что падает и уже никогда не соберётся обратно? Картинки в книгах и сказка Льюиса Кэрролла «Алиса в Зазеркалье» (1871) сделали Шалтая говорящим яйцом на стене. Найди рифмующиеся пары в таблице выше.`,
    ),
    ask(2, {
      en: ["Which word rhymes with «wall»?", ["well", "fall", "way"], "Wall and fall end with the same sound."],
      hy: ["Ո՞ր բառն է հանգավորվում «wall»-ի հետ։", ["well", "fall", "way"], "Wall-ը և fall-ը ավարտվում են նույն հնչյունով։"],
      ru: ["Какое слово рифмуется с «wall»?", ["well", "fall", "way"], "Wall и fall заканчиваются одинаковым звуком."],
    }),
  ],
  "little-red-hen": [
    "sentence mode=order Who will help me ?",
    closer(
      `**You may know this story in Russian.** In the folk tale «Колосок», two lazy little mice, Krut and Vert, play all day while a cockerel finds an ear of wheat, threshes it, grinds it and bakes pies. At the end the mice want to eat, and the cockerel asks who did the work. It is the same lesson as the Little Red Hen's.

**Tell it with «Not I!».** The story repeats one question and one answer, so it is easy to act. Build the hen's question above, then answer for the cat, the dog and the duck: «Not I!». At the end change the answer: «I will!»`,
      `**Գուցե այս պատմությունը գիտես ռուսերեն։** «Колосок» ժողովրդական հեքիաթում երկու ծույլ մկնիկներ՝ Կրուտը և Վերտը, ամբողջ օրը խաղում են, իսկ աքլորը գտնում է ցորենի հասկը, կալսում, աղում ու կարկանդակներ թխում։ Վերջում մկնիկներն ուտել են ուզում, և աքլորը հարցնում է, թե ով է աշխատել։ Դասը նույնն է, ինչ Փոքրիկ կարմիր հավինը։

**Պատմիր «Not I!»-ով։** Պատմության մեջ կրկնվում են մեկ հարց և մեկ պատասխան, ուստի այն հեշտ է բեմադրել։ Վերևում կազմիր հավի հարցը, հետո պատասխանիր կատվի, շան և բադի փոխարեն՝ «Not I!»։ Վերջում փոխիր պատասխանը՝ «I will!»։`,
      `**Возможно, ты знаешь эту историю по-русски.** В сказке «Колосок» два ленивых мышонка, Круть и Верть, весь день играют, а петушок находит колосок, обмолачивает его, мелет муку и печёт пироги. В конце мышата хотят есть, и петушок спрашивает, кто работал. Мораль та же, что у Маленькой рыжей курочки.

**Расскажи с «Not I!».** В истории повторяются один вопрос и один ответ, поэтому её легко разыграть. Собери вопрос курочки выше, потом ответь за кошку, собаку и утку: «Not I!». В конце поменяй ответ: «I will!»`,
    ),
    ask(3, {
      en: ["Why doesn't the hen share the bread?", ["The bread is bad.", "She is very hungry.", "Nobody helped her make it."], "If you don't help, you don't get the bread."],
      hy: ["Ինչո՞ւ հավը հացը չի կիսում։", ["The bread is bad.", "She is very hungry.", "Nobody helped her make it."], "Եթե չես օգնում, հաց չես ստանում։"],
      ru: ["Почему курочка не делится хлебом?", ["The bread is bad.", "She is very hungry.", "Nobody helped her make it."], "Кто не помогал, тот хлеба не получает."],
    }),
  ],
  "three-little-pigs": [
    "sentence mode=order Little pig , let me come in !",
    closer(
      `**An old story, a famous song.** The English writer Joseph Jacobs put the tale in his book «English Fairy Tales» in 1890. In 1933 Walt Disney made a cartoon of it, and its song «Who's Afraid of the Big Bad Wolf?» became a hit all over America.

**The Russian pigs have names.** In the Russian version by Sergey Mikhalkov the pigs are called Nif-Nif, Nuf-Nuf and Naf-Naf, and Naf-Naf is the clever one who builds with stone. Build the wolf's words above, then act the story: the wolf huffs and puffs, the pigs answer «Not by the hair on my chinny-chin-chin!»`,
      `**Հին պատմություն, հայտնի երգ։** Անգլիացի գրող Ջոզեֆ Ջեյքոբսը հեքիաթը զետեղեց իր «English Fairy Tales» գրքում 1890 թվականին։ 1933 թվականին Ուոլթ Դիսնեյը դրա հիման վրա մուլտֆիլմ նկարեց, և դրա «Who's Afraid of the Big Bad Wolf?» երգը մեծ հաջողություն ունեցավ ամբողջ Ամերիկայում։

**Ռուսական խոճկորներն անուններ ունեն։** Սերգեյ Միխալկովի ռուսերեն տարբերակում խոճկորները կոչվում են Նիֆ-Նիֆ, Նուֆ-Նուֆ և Նաֆ-Նաֆ, և Նաֆ-Նաֆն է խելացին, որ քարից է կառուցում։ Վերևում կազմիր գայլի խոսքերը, հետո բեմադրիր պատմությունը․ գայլը փչում է, խոճկորները պատասխանում են՝ «Not by the hair on my chinny-chin-chin!»։`,
      `**Старая сказка, знаменитая песня.** Английский писатель Джозеф Джейкобс включил сказку в книгу «English Fairy Tales» в 1890 году. В 1933 году Уолт Дисней снял по ней мультфильм, и его песня «Who's Afraid of the Big Bad Wolf?» стала хитом по всей Америке.

**У русских поросят есть имена.** В пересказе Сергея Михалкова поросят зовут Ниф-Ниф, Нуф-Нуф и Наф-Наф, и Наф-Наф — тот умный, что строит из камня. Собери слова волка выше, а потом разыграй сказку: волк дует, а поросята отвечают «Not by the hair on my chinny-chin-chin!»`,
    ),
    ask(3, {
      en: ["Which house does the wolf NOT blow down?", ["the straw house", "the stick house", "the brick house"], "The brick house is strong: good work takes time."],
      hy: ["Ո՞ր տունը գայլը ՉԻ կարողանում քանդել։", ["the straw house", "the stick house", "the brick house"], "Աղյուսե տունն ամուր է․ լավ աշխատանքը ժամանակ է պահանջում։"],
      ru: ["Какой дом волк НЕ смог сдуть?", ["the straw house", "the stick house", "the brick house"], "Кирпичный дом прочный: хорошая работа требует времени."],
    }),
  ],
  "new-year-holidays": [
    "forms mode=compare cols=enhyru Happy_New_Year:Շնորհավոր_Նոր_տարի:С_Новым_годом Merry_Christmas:Շնորհավոր_Սուրբ_Ծնունդ:С_Рождеством present:նվեր:подарок snowman:ձնեմարդ:снеговик",
    closer(
      `**Santa Claus was a saint.** His name comes from **Saint Nicholas**, a bishop who lived long ago and was known for secret gifts. The Dutch called him Sinterklaas, and in America this became «Santa Claus». Russia's Ded Moroz has his own «home» in the town of Veliky Ustyug, where children send him letters.

**A British Christmas bang.** At Christmas dinner British families pull **crackers**: paper tubes that go «bang!» when two people pull the ends. Inside there is a paper crown, a small toy and a joke. Crackers were invented in London in the 1840s by a sweet maker, Tom Smith.`,
      `**Սանտա Կլաուսը սուրբ էր։** Նրա անունը գալիս է **Սուրբ Նիկողայոսից**՝ վաղուց ապրած եպիսկոպոսից, որը հայտնի էր գաղտնի նվերներով։ Հոլանդացիներն այն անվանում էին Sinterklaas, և Ամերիկայում դա դարձավ «Santa Claus»։ Ռուսական Դեդ Մորոզն իր «տունն» ունի Վելիկի Ուստյուգ քաղաքում, որտեղ երեխաները նրան նամակներ են ուղարկում։

**Բրիտանական Սուրբ Ծննդյան «պայթյուն»։** Սուրբ Ծննդյան ընթրիքին բրիտանական ընտանիքները քաշում են **crackers**՝ թղթե խողովակներ, որոնք «բա՛մ» են անում, երբ երկու հոգի քաշում են ծայրերից։ Ներսում թղթե թագ, փոքրիկ խաղալիք և կատակ է լինում։ Կրեկերները հորինել է Լոնդոնում 1840-ականներին հրուշակագործ Թոմ Սմիթը։`,
      `**Санта-Клаус был святым.** Его имя — от **святого Николая**, епископа, жившего давным-давно и известного тайными подарками. Голландцы звали его Sinterklaas, а в Америке получилось «Santa Claus». У нашего Деда Мороза свой «дом» — в городе Великий Устюг, куда дети пишут ему письма.

**Британский рождественский «бах!».** За рождественским ужином британцы тянут **crackers** — бумажные трубочки, которые делают «бах!», когда двое тянут за концы. Внутри бумажная корона, маленькая игрушка и шутка. Хлопушки придумал в Лондоне в 1840-х годах кондитер Том Смит.`,
    ),
    ask(1, {
      en: ["Santa Claus's name comes from…", ["Saint Nicholas", "Snow White", "Saint Andrew"], "The Dutch Sinterklaas (Saint Nicholas) became Santa Claus."],
      hy: ["Սանտա Կլաուսի անունը գալիս է…", ["Saint Nicholas", "Snow White", "Saint Andrew"], "Հոլանդական Sinterklaas-ը (Սուրբ Նիկողայոս) դարձավ Santa Claus։"],
      ru: ["Имя Санта-Клауса происходит от…", ["Saint Nicholas", "Snow White", "Saint Andrew"], "Голландский Sinterklaas (святой Николай) стал Santa Claus."],
    }),
  ],
  "i-spy-games": [
    "letters mode=order words=bag,book,chair,desk,pen",
    closer(
      `**«Spy» means «see».** The old verb **to spy** means to notice something, and a spy is someone who secretly watches. The game is perfect for long car journeys: you only need your eyes and the first letters of words.

**When the first letter is the same.** To put words in ABC order, look at the first letter. If it is the same, as in **b**ag and **b**ook, look at the second letter: **a** comes before **o**, so «bag» goes first. Dictionaries work like this. Tap the words above in ABC order.`,
      `**«Spy» նշանակում է «տեսնել»։** Հին **to spy** բայը նշանակում է ինչ-որ բան նկատել, իսկ spy-ը (լրտեսը) նա է, ով գաղտնի հետևում է։ Խաղը հիանալի է մեքենայով երկար ճանապարհորդությունների համար․ պետք են միայն աչքերդ և բառերի առաջին տառերը։

**Երբ առաջին տառը նույնն է։** Բառերն այբբենական կարգով դասավորելու համար նայիր առաջին տառին։ Եթե այն նույնն է, ինչպես **b**ag և **b**ook բառերում, նայիր երկրորդ տառին․ **a**-ն գալիս է **o**-ից առաջ, ուստի «bag»-ը առաջինն է։ Բառարաններն այդպես են աշխատում։ Վերևում բառերը սեղմիր այբբենական կարգով։`,
      `**«Spy» значит «видеть».** Старый глагол **to spy** значит «заметить», а spy (шпион) — тот, кто тайно наблюдает. Игра идеальна для долгих поездок на машине: нужны только глаза и первые буквы слов.

**Если первая буква одинаковая.** Чтобы расставить слова по алфавиту, смотри на первую букву. Если она одинаковая, как в **b**ag и **b**ook, смотри на вторую: **a** стоит раньше **o**, поэтому «bag» идёт первым. Так устроены словари. Нажми на слова выше в алфавитном порядке.`,
    ),
    ask(2, {
      en: ["Which word comes first in ABC order?", ["box", "bag", "bus"], "All start with b; a comes before o and u."],
      hy: ["Ո՞ր բառն է առաջինն այբբենական կարգով։", ["box", "bag", "bus"], "Բոլորը սկսվում են b-ով, իսկ a-ն գալիս է o-ից և u-ից առաջ։"],
      ru: ["Какое слово идёт первым по алфавиту?", ["box", "bag", "bus"], "Все начинаются с b, а a стоит раньше o и u."],
    }),
  ],
  "year-2-review": [
    "sentence mode=order keep=1 I can draw and I can dance .",
    closer(
      `**Remember more with less.** Your brain keeps words better if you meet them again after a day, then after a few days, then after a week. So do not learn all the words at once: say five English words every day, and come back to old ones often.

**Say it, don't just read it.** Words you say aloud stick better than words you only read. Tell «About me» to a toy, a pet or a mirror, sing the songs of the year, and play «I spy» in English on the way to school. Build the sentence above, then make one of your own: «I can … and I can …».`,
      `**Ավելի շատ հիշիր՝ ավելի քիչ ջանքով։** Ուղեղդ բառերն ավելի լավ է պահում, եթե դրանց կրկին հանդիպես մեկ օր անց, հետո մի քանի օր անց, հետո մեկ շաբաթ անց։ Ուրեմն բոլոր բառերը միանգամից մի՛ սովորիր․ ամեն օր ասա հինգ անգլերեն բառ և հաճախ վերադարձիր հներին։

**Ասա՛, ոչ թե պարզապես կարդա։** Բարձրաձայն ասված բառերն ավելի լավ են մնում, քան միայն կարդացածները։ «About me»-ն պատմիր խաղալիքին, ընտանի կենդանուն կամ հայելուն, երգիր տարվա երգերը և դպրոց գնալիս անգլերեն խաղա «I spy»։ Վերևում կազմիր նախադասությունը, հետո՝ քո սեփականը՝ «I can … and I can …»։`,
      `**Запоминай больше меньшими силами.** Мозг лучше хранит слова, если встретить их снова через день, потом через несколько дней, потом через неделю. Поэтому не учи все слова сразу: говори по пять английских слов каждый день и часто возвращайся к старым.

**Говори, а не только читай.** Слова, сказанные вслух, запоминаются лучше, чем прочитанные. Расскажи «About me» игрушке, питомцу или зеркалу, спой песни этого года и играй в «I spy» по-английски по дороге в школу. Собери предложение выше, а потом придумай своё: «I can … and I can …».`,
    ),
    ask(2, {
      en: ["What is the best way to remember new words?", ["Learn them all in one evening.", "Say a few every day and repeat the old ones.", "Read them once."], "Short, regular practice with repeats works best."],
      hy: ["Ո՞րն է նոր բառերը հիշելու լավագույն միջոցը։", ["Learn them all in one evening.", "Say a few every day and repeat the old ones.", "Read them once."], "Ամենալավն աշխատում է կարճ, կանոնավոր պարապմունքը՝ կրկնություններով։"],
      ru: ["Как лучше всего запоминать новые слова?", ["Learn them all in one evening.", "Say a few every day and repeat the old ones.", "Read them once."], "Лучше всего работают короткие регулярные занятия с повторением."],
    }),
  ],
};
