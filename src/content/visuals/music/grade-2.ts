import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade2: VisualMap[number] = {
  "staff-and-clef": [
    "piano mode=staff notes=E4,G4,B4,D5,F5,F4,A4,C5,E5",
    closer(
      `**Once there were four lines.** The stave did not always have five lines. About a thousand years ago, monks who wrote down church songs used two lines, then three, then **four**. Four lines were enough for their songs, which did not go very high or very low. Books of old church chant are printed with four lines even today. Later, when music grew wider, musicians added a fifth line, and that is the stave we use now.

**Clefs are secret letters.** Look closely at the treble clef: it is really a very curly letter **G**, which grew fancier and fancier over hundreds of years. Its curl wraps around the line of the note G (sol). The bass clef is a curly letter **F**, and its two dots sit on either side of the line of the note F (fa). So each clef tells you the name of one line, and from it you can find all the others.`,
      `**Ժամանակին չորս գիծ կար։** Հնգագիծը միշտ չէ, որ հինգ գիծ է ունեցել։ Մոտ հազար տարի առաջ եկեղեցական երգերը գրի առնող վանականներն օգտագործում էին երկու գիծ, հետո երեք, հետո **չորս**։ Չորս գիծը բավական էր նրանց երգերի համար, որոնք շատ բարձր կամ շատ ցածր չէին բարձրանում ու իջնում։ Հին եկեղեցական երգեցողության գրքերը մինչև այսօր տպագրվում են չորս գծով։ Հետագայում, երբ երաժշտությունն ընդարձակվեց, երաժիշտներն ավելացրին հինգերորդ գիծը, և ահա այն հնգագիծը, որ այսօր օգտագործում ենք։

**Բանալիները գաղտնի տառեր են։** Ուշադիր նայի՛ր սոլի բանալուն․ իրականում դա շատ գանգուր **G** տառ է, որը հարյուրավոր տարիների ընթացքում ավելի ու ավելի զարդարուն դարձավ։ Նրա գանգուրը պտտվում է սոլ նոտայի գծի շուրջը։ Ֆայի բանալին գանգուր **F** տառ է, և նրա երկու կետը գտնվում են ֆա նոտայի գծի երկու կողմերում։ Ուրեմն յուրաքանչյուր բանալի ասում է մեկ գծի անունը, իսկ դրանից կարելի է գտնել մնացած բոլորը։`,
      `**Когда-то линий было четыре.** Нотный стан не всегда состоял из пяти линий. Около тысячи лет назад монахи, записывавшие церковные песнопения, использовали две линии, потом три, потом **четыре**. Четырёх линий хватало для их песнопений, которые не забирались очень высоко или очень низко. Книги старинного церковного пения печатают с четырьмя линиями и сегодня. Позже, когда музыка стала шире, музыканты добавили пятую линию — так появился стан, которым мы пользуемся сейчас.

**Ключи — это тайные буквы.** Посмотри внимательно на скрипичный ключ: на самом деле это очень кудрявая буква **G**, которая за сотни лет становилась всё затейливее. Её завиток обвивает линию ноты соль. Басовый ключ — кудрявая буква **F**, и две его точки стоят по обе стороны линии ноты фа. Значит, каждый ключ называет одну линию, а от неё можно найти все остальные.`,
    ),
    ask(2, {
      en: ["Which line of the stave does the treble clef curl around?", ["The first", "The second", "The fifth"], "The curl of the treble (G) clef starts on the second line, so a note on that line is sol (G)."],
      hy: ["Հնգագծի ո՞ր գծի շուրջն է պտտվում սոլի բանալին։", ["Առաջին", "Երկրորդ", "Հինգերորդ"], "Սոլի բանալու գանգուրն սկսվում է երկրորդ գծից, ուստի այդ գծի վրա գրված նոտան սոլն է։"],
      ru: ["Вокруг какой линии стана закручивается скрипичный ключ?", ["Первой", "Второй", "Пятой"], "Завиток скрипичного ключа начинается на второй линии, поэтому нота на этой линии — соль."],
    }),
  ],
  "note-names": [
    "piano mode=staff",
    closer(
      `**From "ut" to "do".** When Guido of Arezzo named the notes, the first one was not called "do" but **"ut"**. Ut was hard to sing, so about 400 years ago Italian musicians changed it to the open, singable "do". The seventh note, "si", was added later, made from the first letters of the words *Sancte Ioannes* in the same hymn. In the 19th century English teachers changed "si" to **"ti"**, so that every note would start with a different letter. That is why English songs sing "ti" while Armenian and Russian children sing "si".

**Bach in notes.** In Germany the notes have letter names too, but with a surprise: the note B (si) is called **H**, and the letter B means a slightly lower note. So the great composer **Bach** could write his own name in music: B, A, C, H. He hid this little four-note tune in one of his last pieces, and many composers after him have used it in his honour.`,
      `**«Ուտ»-ից «դո»։** Երբ Գվիդո դ'Արեցցոն անուններ տվեց նոտաներին, առաջինը կոչվում էր ոչ թե «դո», այլ **«ուտ»**։ Ուտը դժվար էր երգել, ուստի մոտ 400 տարի առաջ իտալացի երաժիշտներն այն փոխարինեցին բաց, հեշտ երգվող «դո»-ով։ Յոթերորդ նոտան՝ «սի»-ն, ավելացվեց ավելի ուշ՝ կազմված նույն օրհներգի *Sancte Ioannes* բառերի առաջին տառերից։ XIX դարում անգլիացի ուսուցիչները «սի»-ն փոխեցին **«տի»**-ով, որպեսզի յուրաքանչյուր նոտա սկսվի տարբեր տառով։ Ահա թե ինչու անգլերեն երգերում երգում են «տի», իսկ հայ և ռուս երեխաները՝ «սի»։

**Բախը նոտաներով։** Գերմանիայում նոտաներն ունեն նաև տառային անուններ, բայց մի անակնկալով․ սի նոտան կոչվում է **H**, իսկ B տառը նշանակում է մի փոքր ավելի ցածր նոտա։ Ուստի մեծ կոմպոզիտոր **Բախը** կարող էր իր անունը գրել երաժշտությամբ՝ B, A, C, H։ Նա այս փոքրիկ չորս նոտանոց մեղեդին թաքցրել է իր վերջին ստեղծագործություններից մեկում, և նրանից հետո շատ կոմպոզիտորներ այն օգտագործել են ի պատիվ նրա։`,
      `**От «ут» к «до».** Когда Гвидо д'Ареццо дал нотам имена, первая называлась не «до», а **«ут»**. Ут было трудно петь, поэтому около 400 лет назад итальянские музыканты заменили его открытым, певучим «до». Седьмая нота, «си», появилась позже — из первых букв слов *Sancte Ioannes* того же гимна. В XIX веке английские учителя заменили «си» на **«ти»**, чтобы каждая нота начиналась с разной буквы. Вот почему в английских песнях поют «ти», а армянские и русские дети — «си».

**Бах нотами.** В Германии у нот тоже есть буквенные названия, но с сюрпризом: нота си называется **H**, а буква B означает чуть более низкую ноту. Поэтому великий композитор **Бах** мог написать своё имя музыкой: B, A, C, H. Он спрятал эту маленькую мелодию из четырёх нот в одном из своих последних сочинений, и многие композиторы после него использовали её в его честь.`,
    ),
    ask(1, {
      en: ["Where is the note mi (E) written in the treble clef?", ["On the first line", "On the second line", "Below the stave"], "Mi (E) sits on the first line; the notes on the lines are mi, sol and ti."],
      hy: ["Որտե՞ղ է գրվում մի նոտան սոլի բանալիով։", ["Առաջին գծի վրա", "Երկրորդ գծի վրա", "Հնգագծից ներքև"], "Մին գտնվում է առաջին գծի վրա․ գծերի վրա են մի, սոլ և սի նոտաները։"],
      ru: ["Где пишется нота ми в скрипичном ключе?", ["На первой линии", "На второй линии", "Под станом"], "Ми стоит на первой линии; на линиях пишутся ми, соль и си."],
    }),
  ],
  "note-durations": [
    "piano mode=durations",
    closer(
      `**Square notes.** Long ago notes did not look like little round eggs. In old church books they were small black **squares** and **diamonds**, written with a broad pen. Only later, when people wrote music faster and began to print it, did the note heads become round. If you ever see a very old music book in a museum, look for the square notes.

**A "short" note that became long.** In British English the whole note is called a **semibreve**, which means "half of a short note". Why? Seven hundred years ago the **breve** ("short") really was one of the shorter notes in music. Over the centuries musicians wrote more and more quick notes, and the old "short" note ended up so long that today it is hardly ever used. Its name stayed behind, like a fossil of how music used to be written.`,
      `**Քառակուսի նոտաներ։** Վաղուց նոտաները կլոր ձվիկների նման չէին։ Հին եկեղեցական գրքերում դրանք փոքրիկ սև **քառակուսիներ** և **շեղանկյուններ** էին՝ գրված լայն գրչով։ Միայն ավելի ուշ, երբ մարդիկ սկսեցին երաժշտությունն ավելի արագ գրել և տպագրել, նոտաների գլխիկները կլորացան։ Եթե երբևէ թանգարանում շատ հին երաժշտական գիրք տեսնես, փնտրի՛ր քառակուսի նոտաները։

**«Կարճ» նոտա, որն երկար դարձավ։** Բրիտանական անգլերենում ամբողջական նոտան կոչվում է **սեմիբրևիս**, որը նշանակում է «կարճ նոտայի կեսը»։ Ինչո՞ւ։ Յոթ հարյուր տարի առաջ **բրևիսը** («կարճ») իսկապես երաժշտության ավելի կարճ նոտաներից մեկն էր։ Դարերի ընթացքում երաժիշտներն ավելի ու ավելի շատ արագ նոտաներ էին գրում, և հին «կարճ» նոտան այնքան երկար դարձավ, որ այսօր այն գրեթե չի օգտագործվում։ Նրա անունը մնաց՝ ինչպես բրածո, որը հիշեցնում է, թե ինչպես էին երաժշտությունը գրում առաջ։`,
      `**Квадратные ноты.** Давным-давно ноты не были похожи на маленькие круглые яички. В старинных церковных книгах это были маленькие чёрные **квадраты** и **ромбы**, написанные широким пером. Лишь позже, когда музыку стали записывать быстрее и печатать, головки нот стали круглыми. Если увидишь в музее очень старую нотную книгу, поищи квадратные ноты.

**«Короткая» нота, ставшая длинной.** В британском английском целая нота называется **семибревис**, то есть «половина короткой». Почему? Семьсот лет назад **бревис** («короткая») действительно была одной из более коротких нот. За века музыканты писали всё больше быстрых нот, и старая «короткая» нота стала такой длинной, что сегодня её почти не используют. А название осталось — как окаменелость, напоминающая, как записывали музыку раньше.`,
    ),
    ask(3, {
      en: ["How many crotchets (quarter notes) last as long as one whole note?", ["Two", "Three", "Four"], "A whole note lasts 4 beats, and each crotchet lasts 1 beat."],
      hy: ["Քանի՞ քառորդ նոտա է տևում այնքան, որքան մեկ ամբողջականը։", ["Երկու", "Երեք", "Չորս"], "Ամբողջական նոտան տևում է 4 զարկ, իսկ յուրաքանչյուր քառորդը՝ 1 զարկ։"],
      ru: ["Сколько четвертей длятся столько же, сколько одна целая нота?", ["Две", "Три", "Четыре"], "Целая нота длится 4 доли, а каждая четверть — 1 долю."],
    }),
  ],
  "beat-and-meter": [
    "piano mode=meter meter=2 tempo=104",
    closer(
      `**A machine that ticks.** In 1815 an inventor named **Johann Maelzel** patented the **metronome**: a little box with a swinging pendulum that ticks at whatever speed you set. A number on the scale shows how many ticks there are in a minute. Composers began to write such numbers at the top of their music, so that musicians anywhere in the world would know exactly how fast to play. Today the metronome is also an app on a phone, but it still ticks.

**A bird that dances.** A cockatoo named **Snowball** became famous on the internet for bobbing his head and lifting his feet to pop music. Scientists studied him and found that he really followed the beat: when they played the same song faster or slower, Snowball changed his dancing to match. For a long time people thought only humans could do this. Snowball showed that feeling the beat is something some animals can do too.`,
      `**Մեքենա, որը թխկթխկում է։** 1815 թվականին **Յոհան Մելցել** անունով գյուտարարն արտոնագրեց **մետրոնոմը**՝ ճոճանակով մի փոքրիկ արկղ, որը թխկթխկում է քո սահմանած ցանկացած արագությամբ։ Սանդղակի թիվը ցույց է տալիս, թե քանի թխկոց կա մեկ րոպեում։ Կոմպոզիտորները սկսեցին այդպիսի թվեր գրել իրենց երաժշտության վերևում, որպեսզի աշխարհի ցանկացած վայրի երաժիշտներ ճիշտ իմանան, թե որքան արագ նվագեն։ Այսօր մետրոնոմը նաև հավելված է հեռախոսում, բայց այն դեռ թխկթխկում է։

**Թռչուն, որը պարում է։** **Սնոուբոլ** անունով մի կակադու համացանցում հայտնի դարձավ նրանով, որ գլուխը շարժում ու թաթերը բարձրացնում էր փոփ երաժշտության տակ։ Գիտնականներն ուսումնասիրեցին նրան և պարզեցին, որ նա իսկապես հետևում էր զարկին․ երբ նույն երգը հնչեցնում էին ավելի արագ կամ դանդաղ, Սնոուբոլը փոխում էր իր պարը։ Երկար ժամանակ մարդիկ կարծում էին, որ միայն մարդիկ են դա կարողանում։ Սնոուբոլը ցույց տվեց, որ զարկը զգալը որոշ կենդանիների նույնպես հատուկ է։`,
      `**Машинка, которая тикает.** В 1815 году изобретатель **Иоганн Мельцель** запатентовал **метроном** — коробочку с качающимся маятником, которая тикает с любой заданной скоростью. Число на шкале показывает, сколько ударов в минуту. Композиторы стали писать такие числа над нотами, чтобы музыканты в любом уголке мира точно знали, как быстро играть. Сегодня метроном — это ещё и приложение в телефоне, но он по-прежнему тикает.

**Птица, которая танцует.** Какаду по имени **Сноуболл** прославился в интернете тем, что кивал головой и поднимал лапки под поп-музыку. Учёные изучили его и выяснили, что он действительно следует за ритмом: когда ту же песню включали быстрее или медленнее, Сноуболл менял свой танец. Долгое время считалось, что так умеют только люди. Сноуболл показал, что чувствовать долю могут и некоторые животные.`,
    ),
    ask(2, {
      en: ["How many beats are there in each bar of 3/4?", ["Two", "Three", "Four"], "The top number shows how many beats there are in a bar: 3/4 means three crotchet beats, as in a waltz."],
      hy: ["Քանի՞ զարկ կա 3/4 չափի յուրաքանչյուր տակտում։", ["Երկու", "Երեք", "Չորս"], "Վերևի թիվը ցույց է տալիս զարկերի քանակը տակտում․ 3/4-ը նշանակում է երեք քառորդ զարկ, ինչպես վալսում։"],
      ru: ["Сколько долей в каждом такте размера 3/4?", ["Две", "Три", "Четыре"], "Верхнее число показывает, сколько долей в такте: 3/4 — это три четвертные доли, как в вальсе."],
    }),
  ],
  "tempo-and-character": [
    "piano mode=rhythm pattern=q,q,e,e,q,q,q,h meter=4 tempo=100",
    closer(
      `**A bumblebee in an opera.** In Rimsky-Korsakov's opera "The Tale of Tsar Saltan", a prince turns into a bumblebee and flies across the sea. To show this, the composer wrote music that rushes up and down without a moment's rest, in a very fast tempo: **"Flight of the Bumblebee"**. Today violinists, pianists and even tuba players compete to play it as fast as they can, and listeners can almost hear the buzzing wings.

**The slowest can-can.** The French composer **Camille Saint-Saëns** wrote a funny suite called "The Carnival of the Animals". For the **tortoises** he took the can-can, one of the fastest and wildest dances of his time, and had the strings play it very, very slowly. The melody is the same, but at a tortoise's tempo it becomes heavy, sleepy and comical. It is the best proof that tempo changes a piece's whole character.`,
      `**Իշամեղու օպերայում։** Ռիմսկի-Կորսակովի «Հեքիաթ Սալթան արքայի մասին» օպերայում արքայազնը վերածվում է իշամեղվի և թռչում ծովի վրայով։ Դա ցույց տալու համար կոմպոզիտորը գրեց երաժշտություն, որը վեր ու վար է սլանում առանց մի պահ դադարի, շատ արագ տեմպով՝ **«Իշամեղվի թռիչքը»**։ Այսօր ջութակահարները, դաշնակահարները և նույնիսկ տուբահարները մրցում են, թե ով այն ավելի արագ կնվագի, իսկ ունկնդիրները գրեթե լսում են բզզացող թևերը։

**Ամենադանդաղ կանկանը։** Ֆրանսիացի կոմպոզիտոր **Կամիլ Սեն-Սանսը** գրել է «Կենդանիների կառնավալը» կոչվող զվարճալի սյուիտ։ **Կրիաների** համար նա վերցրեց կանկանը՝ իր ժամանակի ամենաարագ ու ամենախենթ պարերից մեկը, և լարայիններին ստիպեց նվագել այն շատ ու շատ դանդաղ։ Մեղեդին նույնն է, բայց կրիայի տեմպով այն դառնում է ծանր, քնկոտ ու ծիծաղելի։ Սա լավագույն ապացույցն է, որ տեմպը փոխում է ստեղծագործության ամբողջ բնույթը։`,
      `**Шмель в опере.** В опере Римского-Корсакова «Сказка о царе Салтане» царевич превращается в шмеля и летит через море. Чтобы показать это, композитор написал музыку, которая мчится вверх и вниз без единой передышки, в очень быстром темпе, — **«Полёт шмеля»**. Сегодня скрипачи, пианисты и даже тубисты соревнуются, кто сыграет его быстрее, а слушатели почти слышат жужжание крыльев.

**Самый медленный канкан.** Французский композитор **Камиль Сен-Санс** написал шуточную сюиту «Карнавал животных». Для **черепах** он взял канкан — один из самых быстрых и бурных танцев своего времени — и заставил струнные сыграть его очень-очень медленно. Мелодия та же, но в черепашьем темпе она становится тяжёлой, сонной и смешной. Это лучшее доказательство того, что темп меняет весь характер музыки.`,
    ),
    ask(1, {
      en: ["What does allegro mean?", ["Fast and cheerful", "Slowly", "Quietly"], "Allegro means fast and cheerful, like a running hare; adagio means slowly."],
      hy: ["Ի՞նչ է նշանակում ալեգրոն։", ["Արագ և զվարթ", "Դանդաղ", "Մեղմ"], "Ալեգրոն նշանակում է արագ և զվարթ, ինչպես վազող նապաստակը, իսկ ադաջոն՝ դանդաղ։"],
      ru: ["Что означает аллегро?", ["Быстро и весело", "Медленно", "Тихо"], "Аллегро — быстро и весело, как бегущий заяц; адажио — медленно."],
    }),
  ],
  "armenian-folk-instruments": [
    "diagram folkinst",
    closer(
      `**Little levers on the kanon.** The kanon has dozens of strings, tuned in groups of three. Under the strings, at the player's left hand, are rows of tiny metal levers. By flicking a lever up or down while playing, the musician makes a note a little higher or lower, by a step smaller than the gap between two piano keys. That is how the kanon can play the fine, "in-between" notes of Eastern melodies that a piano cannot.

**Turn the instrument, not the bow.** On a violin the player moves the bow from string to string. The **kamancha** works differently: it stands upright on a metal spike resting on the player's knee, and to reach another string the musician **turns the instrument itself** towards the bow. Because of this, kamancha players have a special way of moving, as if the instrument were dancing slowly while it sings.`,
      `**Փոքրիկ լծակներ քանոնի վրա։** Քանոնն ունի տասնյակ լարեր՝ լարված եռյակներով։ Լարերի տակ, նվագողի ձախ ձեռքի մոտ, մետաղե փոքրիկ լծակների շարքեր կան։ Նվագելիս լծակը վեր կամ վար շարժելով՝ երաժիշտը նոտան դարձնում է մի փոքր ավելի բարձր կամ ցածր, դաշնամուրի երկու ստեղների միջև եղած հեռավորությունից ավելի փոքր քայլով։ Այդպես քանոնը կարող է նվագել արևելյան մեղեդիների նուրբ, «միջանկյալ» նոտաները, որոնք դաշնամուրը չի կարող։

**Պտտի՛ր գործիքը, ոչ թե աղեղը։** Ջութակի վրա նվագողն աղեղը տեղափոխում է լարից լար։ **Քամանչան** այլ կերպ է աշխատում․ այն կանգնած է ուղղահայաց՝ նվագողի ծնկին հենված մետաղե ձողիկի վրա, և այլ լարի հասնելու համար երաժիշտը **պտտում է հենց գործիքը** դեպի աղեղը։ Դրա պատճառով քամանչահարներն ունեն շարժվելու հատուկ ձև, կարծես գործիքը դանդաղ պարում է երգելիս։`,
      `**Рычажки на каноне.** У канона десятки струн, настроенных группами по три. Под струнами, у левой руки музыканта, тянутся ряды крошечных металлических рычажков. Поднимая или опуская рычажок прямо во время игры, музыкант делает ноту чуть выше или ниже — на шаг меньше, чем расстояние между двумя клавишами фортепиано. Так канон может играть тонкие «промежуточные» ноты восточных мелодий, которые фортепиано не умеет.

**Поворачивай инструмент, а не смычок.** На скрипке музыкант переводит смычок со струны на струну. **Кяманча** устроена иначе: она стоит вертикально на металлическом шпиле, упирающемся в колено музыканта, и чтобы перейти на другую струну, он **поворачивает сам инструмент** к смычку. Поэтому у кяманчистов особая манера движения — будто инструмент медленно танцует, пока поёт.`,
    ),
    ask(2, {
      en: ["Which folk instrument is loud and sharp and is played outdoors with the dhol?", ["The duduk", "The zurna", "The kanon"], "The zurna's cone-shaped tube makes it loud; it plays at weddings and festivals together with the dhol."],
      hy: ["Ո՞ր ժողովրդական գործիքն է ուժեղ ու սուր և նվագվում բացօթյա՝ դհոլի հետ։", ["Դուդուկը", "Զուռնան", "Քանոնը"], "Զուռնայի կոնաձև խողովակը նրան ուժեղ ձայն է տալիս․ այն հնչում է հարսանիքներին և տոներին՝ դհոլի հետ։"],
      ru: ["Какой народный инструмент звучит громко и резко и играет на улице вместе с дхолом?", ["Дудук", "Зурна", "Канон"], "Коническая трубка делает зурну громкой; она звучит на свадьбах и праздниках вместе с дхолом."],
    }),
  ],
  "national-anthem": [
    "timeline set=anthem",
    closer(
      `**A song written in one night.** In April 1792, in the French city of Strasbourg, an army officer named **Rouget de Lisle** wrote a marching song for soldiers in a single night. A few months later volunteers from the city of **Marseille** sang it as they marched into Paris, and people called it "the song of the Marseillais", **"La Marseillaise"**. It became the anthem of France, and today it is one of the most famous anthems in the world.

**An anthem without words.** When the anthem of **Spain** is played at a football match, the players do not sing: they stand silently or hum. The Spanish anthem, the "Royal March", is one of the very few anthems in the world that has **no official words**. Its melody is very old, from the 18th century. People have written words for it several times, but none of them has become official.`,
      `**Երգ, որը գրվեց մեկ գիշերում։** 1792 թվականի ապրիլին ֆրանսիական Ստրասբուրգ քաղաքում **Ռուժե դը Լիլ** անունով մի զինվորական մեկ գիշերում քայլերգ գրեց զինվորների համար։ Մի քանի ամիս անց **Մարսելից** եկած կամավորներն այն երգում էին՝ մտնելով Փարիզ, և մարդիկ այն անվանեցին «մարսելցիների երգը»՝ **«Մարսելյեզ»**։ Այն դարձավ Ֆրանսիայի օրհներգը, և այսօր աշխարհի ամենահայտնի օրհներգերից մեկն է։

**Օրհներգ առանց խոսքերի։** Երբ ֆուտբոլային խաղի ժամանակ **Իսպանիայի** օրհներգն է հնչում, խաղացողները չեն երգում․ նրանք կանգնում են լուռ կամ մռմռում են։ Իսպանիայի օրհներգը՝ «Արքայական քայլերգը», աշխարհի այն շատ քիչ օրհներգերից է, որոնք **պաշտոնական խոսքեր չունեն**։ Նրա մեղեդին շատ հին է՝ XVIII դարից։ Մարդիկ մի քանի անգամ խոսքեր են գրել դրա համար, բայց դրանցից ոչ մեկը պաշտոնական չի դարձել։`,
      `**Песня, написанная за одну ночь.** В апреле 1792 года во французском городе Страсбурге офицер **Руже де Лиль** за одну ночь написал походную песню для солдат. Через несколько месяцев добровольцы из **Марселя** пели её, входя в Париж, и люди назвали её «песней марсельцев» — **«Марсельезой»**. Она стала гимном Франции и сегодня — один из самых известных гимнов мира.

**Гимн без слов.** Когда на футбольном матче звучит гимн **Испании**, игроки не поют: они стоят молча или напевают без слов. Испанский гимн, «Королевский марш», — один из очень немногих гимнов мира, у которых **нет официальных слов**. Его мелодия очень старая, XVIII века. Слова к нему писали несколько раз, но ни один вариант не стал официальным.`,
    ),
    ask(3, {
      en: ["How should we behave when the national anthem is played?", ["Keep eating and talking quietly", "Sit down and rest", "Stand up straight and face the flag"], "We stand up straight, face the flag if there is one, and do not talk: this shows respect for our homeland."],
      hy: ["Ինչպե՞ս պետք է պահենք մեզ, երբ հնչում է պետական օրհներգը։", ["Շարունակենք ուտել և կամաց խոսել", "Նստենք ու հանգստանանք", "Կանգնենք ուղիղ և դեմքով դառնանք դեպի դրոշը"], "Կանգնում ենք ուղիղ, դառնում դեպի դրոշը, եթե այն կա, և չենք խոսում․ այսպես ենք հարգանք ցույց տալիս հայրենիքի հանդեպ։"],
      ru: ["Как нужно вести себя, когда звучит государственный гимн?", ["Продолжать есть и тихо разговаривать", "Сесть и отдохнуть", "Встать прямо и повернуться к флагу"], "Мы встаём прямо, поворачиваемся к флагу, если он есть, и не разговариваем — так мы выражаем уважение к родине."],
    }),
  ],
  "lullabies-and-work-songs": [
    "piano mode=meter meter=3 tempo=60",
    closer(
      `**"Ey, ukhnem!"** On the great Russian river Volga, teams of men called **barge haulers** once pulled heavy boats upstream with ropes over their shoulders. To pull at the same moment, they sang a slow, heavy song with a shout on the strong beat: "Ey, ukhnem!", roughly "Heave-ho!". The famous bass singer **Fyodor Chaliapin** sang it on stages around the world, and the "Song of the Volga Boatmen" became one of the best-known work songs ever.

**Why rocking works.** Scientists in Japan watched what happens when a mother picks up a crying baby and **walks** with it. Within seconds the baby usually stopped crying and moving, and its heart began to beat more slowly. Gentle, steady rocking calms babies all over the world, and lullabies copy that movement in sound: slow, even and swaying, like a cradle.`,
      `**«Էյ, ուխնե՛մ»։** Ռուսական մեծ Վոլգա գետի վրա տղամարդկանց խմբեր, որոնց անվանում էին **բուրլակներ**, ժամանակին ծանր նավերը պարաններով քաշում էին հոսանքն ի վեր՝ պարանն ուսերին գցած։ Միաժամանակ քաշելու համար նրանք երգում էին դանդաղ, ծանր երգ՝ ուժեղ զարկին բացականչելով․ «Էյ, ուխնե՛մ», որը մոտավորապես նշանակում է «Մեկ, երկու՝ քաշի՛ր»։ Հայտնի բաս երգիչ **Ֆյոդոր Շալյապինը** այն երգում էր աշխարհի բեմերում, և «Բուրլակների երգը» դարձավ երբևէ ամենահայտնի աշխատանքային երգերից մեկը։

**Ինչու է օրորելն օգնում։** Ճապոնիայում գիտնականները հետևեցին, թե ինչ է կատարվում, երբ մայրը գրկում է լացող երեխային և **քայլում** նրա հետ։ Մի քանի վայրկյանում երեխան սովորաբար դադարում էր լացել ու շարժվել, և նրա սիրտը սկսում էր ավելի դանդաղ զարկել։ Մեղմ, հավասարաչափ օրորելը հանգստացնում է երեխաներին ամբողջ աշխարհում, իսկ օրորոցայինները ձայնով կրկնում են այդ շարժումը՝ դանդաղ, հավասար և օրորվող, ինչպես օրորոցը։`,
      `**«Эй, ухнем!»** На великой русской реке Волге артели мужчин — **бурлаков** — когда-то тянули тяжёлые суда против течения, перекинув лямки через плечо. Чтобы тянуть одновременно, они пели медленную, тяжёлую песню с выкриком на сильную долю: «Эй, ухнем!». Знаменитый бас **Фёдор Шаляпин** пел её на сценах всего мира, и «Эй, ухнем» стала одной из самых известных трудовых песен.

**Почему укачивание помогает.** Учёные в Японии наблюдали, что происходит, когда мама берёт плачущего малыша на руки и **ходит** с ним. Уже через несколько секунд ребёнок обычно переставал плакать и двигаться, а его сердце начинало биться медленнее. Мягкое, ровное покачивание успокаивает малышей во всём мире, а колыбельные повторяют это движение в звуках: медленно, ровно и покачиваясь, как колыбель.`,
    ),
    ask(1, {
      en: ["What is a horovel?", ["A ploughing song", "A lullaby", "A wedding dance"], "The horovel is the Armenian peasant's song for ploughing, sung to encourage the oxen."],
      hy: ["Ի՞նչ է հորովելը։", ["Վարի երգ", "Օրորոցային", "Հարսանեկան պար"], "Հորովելը հայ գյուղացու վարի երգն է, որն երգում էին եզներին քաջալերելու համար։"],
      ru: ["Что такое оровел?", ["Песня пахаря", "Колыбельная", "Свадебный танец"], "Оровел — песня армянского крестьянина во время пахоты, её пели, чтобы подбодрить волов."],
    }),
  ],
};
