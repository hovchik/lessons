import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade5: VisualMap[number] = {
  intervals: [
    "piano mode=interval from=C4 to=F4",
    closer(
      `**Two notes that mean danger.** In 1975 the composer John Williams wrote the music for the film "Jaws", about a giant shark. The famous theme is just two neighbouring notes, a **minor second**, played low and slow, then faster and faster: da-dum... da-dum... dadum-dadum. The clash of the two close notes sounds tense and threatening, and as they speed up the audience knows the shark is coming before they see it. Two notes were enough to frighten millions of people.

**The "devil in music".** One interval sits exactly in the middle of the octave: from C to F sharp, six semitones. It is called the **tritone**, because it spans three whole tones. It sounds restless and strange, and medieval singers found it awkward to sing. Later it got the nickname **"diabolus in musica"**, "the devil in music". Today composers use it on purpose: for suspense in films, for sirens, and in the opening of the song "Maria" from "West Side Story".`,
      `**Վտանգ նշանակող երկու նոտա։** 1975 թվականին կոմպոզիտոր Ջոն Ուիլյամսն երաժշտություն գրեց «Ծնոտներ» ֆիլմի համար՝ հսկա շնաձկան մասին։ Հայտնի թեման ընդամենը երկու հարևան նոտա է՝ **փոքր սեկունդա**, որը նվագվում է ցածր և դանդաղ, հետո ավելի ու ավելի արագ՝ դա-դում... դա-դում... դադում-դադում։ Երկու մոտ նոտաների բախումը լարված և սպառնալից է հնչում, և երբ դրանք արագանում են, հանդիսատեսը գիտի, որ շնաձուկը մոտենում է, դեռ նրան չտեսած։ Երկու նոտան բավական էր միլիոնավոր մարդկանց վախեցնելու համար։

**«Սատանան երաժշտության մեջ»։** Մի ինտերվալ գտնվում է ճիշտ օկտավայի մեջտեղում՝ դո-ից ֆա դիեզ, վեց կիսատոն։ Այն կոչվում է **տրիտոն**, քանի որ ընդգրկում է երեք ամբողջական տոն։ Այն անհանգիստ և տարօրինակ է հնչում, և միջնադարյան երգիչներին այն դժվար էր երգել։ Ավելի ուշ այն ստացավ **«diabolus in musica»**՝ «սատանան երաժշտության մեջ» մականունը։ Այսօր կոմպոզիտորներն այն օգտագործում են դիտմամբ՝ ֆիլմերում լարվածություն ստեղծելու, շչակների համար, և «Վեսթսայդյան պատմություն»-ից «Մարիա» երգի սկզբում։`,
      `**Две ноты, которые значат «опасность».** В 1975 году композитор Джон Уильямс написал музыку к фильму «Челюсти» о гигантской акуле. Знаменитая тема — всего две соседние ноты, **малая секунда**, сыгранные низко и медленно, потом всё быстрее: да-дум... да-дум... дадум-дадум. Столкновение двух близких нот звучит напряжённо и угрожающе, и когда они ускоряются, зрители понимают, что акула близко, ещё не видя её. Двух нот хватило, чтобы напугать миллионы людей.

**«Дьявол в музыке».** Один интервал лежит ровно посередине октавы: от до до фа-диеза, шесть полутонов. Он называется **тритон**, потому что охватывает три целых тона. Он звучит беспокойно и странно, и средневековым певцам было неудобно его петь. Позже он получил прозвище **«diabolus in musica»** — «дьявол в музыке». Сегодня композиторы используют его нарочно: для напряжения в кино, для сирен и в начале песни «Мария» из «Вестсайдской истории».`,
    ),
    ask(2, {
      en: ["How many steps is the interval from C up to G?", ["Four: a fourth", "Five: a fifth", "Six: a sixth"], "Count both notes: C, D, E, F, G is five steps, a fifth."],
      hy: ["Քանի՞ աստիճան է դո-ից վեր մինչև սոլ ինտերվալը։", ["Չորս՝ կվարտա", "Հինգ՝ կվինտա", "Վեց՝ սեքստա"], "Հաշվի՛ր երկու նոտան էլ․ դո, ռե, մի, ֆա, սոլ՝ հինգ աստիճան, կվինտա։"],
      ru: ["Сколько ступеней в интервале от до вверх до соль?", ["Четыре: кварта", "Пять: квинта", "Шесть: секста"], "Считай обе ноты: до, ре, ми, фа, соль — пять ступеней, квинта."],
    }),
  ],
  "scales-and-keys": [
    "piano scale=major root=D",
    closer(
      `**The sound of the hammers.** An old legend says that the Greek thinker **Pythagoras** once walked past a blacksmith's workshop and noticed that some hammers rang together beautifully while others clashed. He found that the pleasant ones had simple ratios: a string half as long sounds an **octave** higher (2 : 1), and one two-thirds as long sounds a **fifth** higher (3 : 2). The hammer part of the story is probably not true, but the numbers are, and stacking fifths is one of the oldest ways of finding the notes of a scale.

**Born with a label for every note.** Most people can sing a tune but cannot say, without hearing another note, "that was an F sharp". About one person in ten thousand can: they have **absolute pitch**. Scientists have found that it is much more common among musicians who started lessons before the age of six, and among people who grew up speaking **tonal languages**, such as Chinese or Vietnamese, where the pitch of a word changes its meaning.`,
      `**Մուրճերի ձայնը։** Մի հին ավանդություն պատմում է, որ հույն մտածող **Պյութագորասը** մի անգամ անցնում էր դարբնոցի մոտով և նկատեց, որ որոշ մուրճեր միասին գեղեցիկ էին զնգում, իսկ մյուսները՝ բախվում։ Նա պարզեց, որ հաճելի հնչողներն ունեին պարզ հարաբերություններ․ կիսով չափ կարճ լարը հնչում է **օկտավա** բարձր (2 ։ 1), իսկ երկու երրորդի չափ լարը՝ **կվինտա** բարձր (3 ։ 2)։ Պատմության մուրճերի մասը հավանաբար ճիշտ չէ, բայց թվերը ճիշտ են, և կվինտաներն իրար վրա դնելը ձայնաշարի նոտաները գտնելու ամենահին եղանակներից է։

**Ծնված՝ յուրաքանչյուր նոտայի պիտակով։** Մարդկանց մեծ մասը կարող է մեղեդի երգել, բայց չի կարող, առանց մեկ այլ նոտա լսելու, ասել՝ «դա ֆա դիեզ էր»։ Տասը հազար մարդուց մոտ մեկը կարող է․ նա ունի **բացարձակ լսողություն**։ Գիտնականները պարզել են, որ այն շատ ավելի տարածված է այն երաժիշտների մոտ, ովքեր դասերն սկսել են մինչև վեց տարեկանը, և այն մարդկանց մոտ, ովքեր մեծացել են **տոնային լեզուներով** խոսելով, օրինակ՝ չինարեն կամ վիետնամերեն, որտեղ բառի հնչյունի բարձրությունը փոխում է նրա իմաստը։`,
      `**Звук молотов.** Старая легенда рассказывает, что греческий мыслитель **Пифагор** однажды проходил мимо кузницы и заметил, что одни молоты звенят вместе красиво, а другие — нестройно. Он выяснил, что у приятных созвучий простые отношения: струна вдвое короче звучит на **октаву** выше (2 : 1), а струна длиной в две трети — на **квинту** выше (3 : 2). История с молотами, скорее всего, выдумана, но числа верны, а построение квинта за квинтой — один из древнейших способов найти ноты гаммы.

**С ярлычком для каждой ноты.** Большинство людей может спеть мелодию, но не может, не услышав другой ноты, сказать: «Это был фа-диез». Примерно один человек из десяти тысяч может: у него **абсолютный слух**. Учёные выяснили, что он гораздо чаще встречается у музыкантов, начавших заниматься до шести лет, и у людей, выросших на **тональных языках**, например китайском или вьетнамском, где высота звука меняет смысл слова.`,
    ),
    ask(1, {
      en: ["What is the distance between E and F?", ["A semitone", "A tone", "A third"], "There is no black key between E and F, so they are a semitone apart."],
      hy: ["Ինչքա՞ն է մի-ի և ֆա-ի միջև հեռավորությունը։", ["Կիսատոն", "Տոն", "Տերցիա"], "Մի-ի և ֆա-ի միջև սև ստեղն չկա, ուստի դրանք իրարից կիսատոն հեռու են։"],
      ru: ["Какое расстояние между ми и фа?", ["Полутон", "Тон", "Терция"], "Между ми и фа нет чёрной клавиши, поэтому они отстоят на полутон."],
    }),
  ],
  "chords-and-harmony": [
    "piano mode=prog prog=classic tempo=88",
    closer(
      `**Forty songs, four chords.** In 2009 an Australian comedy band, the Axis of Awesome, performed a medley in which they sang dozens of famous pop songs one after another, from the Beatles to Lady Gaga, all over the **same four chords**: I–V–vi–IV. The audience laughed because every song fitted perfectly. Try it with the keyboard above: choose that loop and hum any pop song you know. A few chords can carry thousands of different melodies.

**Why we sing "A-men".** At the end of many church hymns the choir sings "A-men" on two chords: the **subdominant** (IV) followed by the **tonic** (I). It sounds soft and peaceful, like a gentle nod. Musicians even call this ending the **"amen cadence"**. A stronger ending goes from the dominant (V) to the tonic (I): it sounds more like a full stop, and most pieces in major and minor end that way.`,
      `**Քառասուն երգ, չորս ակորդ։** 2009 թվականին ավստրալիական կատակերգական Axis of Awesome խումբը կատարեց մի պոպուրի, որում նրանք իրար հետևից երգեցին տասնյակ հայտնի պոպ երգեր՝ «Բիթլզ»-ից մինչև Լեդի Գագա, բոլորը **նույն չորս ակորդի** վրա՝ I–V–vi–IV։ Հանդիսատեսը ծիծաղում էր, քանի որ ամեն երգ կատարելապես տեղավորվում էր։ Փորձի՛ր վերևի ստեղնաշարով․ ընտրի՛ր այդ շրջանը և մռմռա՛ ցանկացած պոպ երգ, որը գիտես։ Մի քանի ակորդ կարող է կրել հազարավոր տարբեր մեղեդիներ։

**Ինչու ենք երգում «Ամեն»։** Եկեղեցական շատ օրհներգերի վերջում երգչախումբը «Ա-մեն» է երգում երկու ակորդով՝ **սուբդոմինանտ** (IV), իսկ հետո **տոնիկա** (I)։ Այն մեղմ և խաղաղ է հնչում, ինչպես նուրբ գլխի շարժում։ Երաժիշտներն այդ ավարտը նույնիսկ կոչում են **«ամեն կադանս»**։ Ավելի ուժեղ ավարտը գնում է դոմինանտից (V) տոնիկա (I)․ այն ավելի շատ նման է վերջակետի, և մաժորով ու մինորով գրված ստեղծագործությունների մեծ մասն այդպես է ավարտվում։`,
      `**Сорок песен, четыре аккорда.** В 2009 году австралийская комик-группа Axis of Awesome исполнила попурри, в котором спела подряд десятки известных поп-песен, от «Битлз» до Леди Гаги, на **одних и тех же четырёх аккордах**: I–V–vi–IV. Зрители смеялись, потому что каждая песня подходила идеально. Попробуй на клавиатуре выше: выбери этот круг и напой любую поп-песню, которую знаешь. Несколько аккордов могут нести тысячи разных мелодий.

**Почему поют «Аминь».** В конце многих церковных гимнов хор поёт «А-минь» на двух аккордах: **субдоминанта** (IV), затем **тоника** (I). Это звучит мягко и мирно, как спокойный кивок. Музыканты даже называют такое окончание **«плагальным», или «аминь-кадансом»**. Более сильное окончание идёт от доминанты (V) к тонике (I): оно больше похоже на точку, и так заканчивается большинство пьес в мажоре и миноре.`,
    ),
    ask(3, {
      en: ["Which chord sounds tense and wants to return home to the tonic?", ["The tonic (I)", "The subdominant (IV)", "The dominant (V)"], "The dominant creates tension that is released when the music returns to the tonic."],
      hy: ["Ո՞ր ակորդն է լարված հնչում և ուզում վերադառնալ տոնիկային։", ["Տոնիկան (I)", "Սուբդոմինանտը (IV)", "Դոմինանտը (V)"], "Դոմինանտը լարվածություն է ստեղծում, որը լուծվում է, երբ երաժշտությունը վերադառնում է տոնիկային։"],
      ru: ["Какой аккорд звучит напряжённо и стремится вернуться к тонике?", ["Тоника (I)", "Субдоминанта (IV)", "Доминанта (V)"], "Доминанта создаёт напряжение, которое разрешается при возвращении к тонике."],
    }),
  ],
  "dynamics-and-articulation": [
    "diagram marks",
    closer(
      `**Six p's.** Most music asks for pp at its very quietest. In his Sixth Symphony (1893) Tchaikovsky wrote **pppppp**, six p's, for a phrase that the bassoon must play as softly as if it were barely there. No instrument can really play "six times quiet", and some orchestras secretly give the phrase to the bass clarinet, which can whisper more easily. Tchaikovsky's message was about the feeling: the music should fade almost into silence.

**The quiet keyboard Bach loved.** Before the piano there was the **clavichord**: a small keyboard in which a tiny metal blade presses the string. It is so quiet that you can hear it only in a small room, but it can do something the louder harpsichord cannot: play softer or louder depending on how you press the key, and even make a note tremble. It was a favourite instrument for practising at home, and Bach is said to have loved it for its expressive touch.`,
      `**Վեց p։** Երաժշտության մեծ մասն իր ամենաթույլ տեղում պահանջում է pp։ Իր Վեցերորդ սիմֆոնիայում (1893) Չայկովսկին գրեց **pppppp**՝ վեց p, մի ֆրազի համար, որը ֆագոտը պետք է նվագի այնքան մեղմ, կարծես այն գրեթե չկա։ Ոչ մի գործիք իրականում չի կարող նվագել «վեց անգամ թույլ», և որոշ նվագախմբեր գաղտնի այդ ֆրազը տալիս են բաս կլառնետին, որն ավելի հեշտ է շշնջում։ Չայկովսկու ուղերձը զգացողության մասին էր․ երաժշտությունը պետք է մարի գրեթե մինչև լռություն։

**Բախի սիրած հանգիստ ստեղնաշարը։** Դաշնամուրից առաջ կար **կլավիկորդը**՝ փոքր ստեղնաշարային գործիք, որում փոքրիկ մետաղե թիթեղը սեղմում է լարը։ Այն այնքան հանգիստ է, որ կարելի է լսել միայն փոքր սենյակում, բայց կարող է անել մի բան, որ ավելի բարձրաձայն կլավեսինը չի կարող՝ նվագել ավելի թույլ կամ ավելի ուժեղ՝ կախված նրանից, թե ինչպես ես սեղմում ստեղնը, և նույնիսկ նոտան դողացնել։ Այն տանը պարապելու սիրված գործիք էր, և ասում են, որ Բախը սիրում էր այն իր արտահայտիչ հպման համար։`,
      `**Шесть p.** В самом тихом месте музыка обычно просит pp. В Шестой симфонии (1893) Чайковский написал **pppppp**, шесть p, для фразы, которую фагот должен сыграть так тихо, будто её почти нет. Ни один инструмент не может по-настоящему сыграть «в шесть раз тише», и некоторые оркестры тайком отдают эту фразу бас-кларнету, которому легче шептать. Чайковский говорил о чувстве: музыка должна угаснуть почти до тишины.

**Тихий инструмент, который любил Бах.** До фортепиано был **клавикорд**: маленький клавишный инструмент, в котором крошечная металлическая пластинка прижимает струну. Он такой тихий, что его слышно только в небольшой комнате, но умеет то, чего не может более громкий клавесин: играть тише или громче в зависимости от нажатия и даже заставить ноту дрожать. Это был любимый инструмент для домашних занятий, и говорят, что Бах любил его за выразительное туше.`,
    ),
    ask(2, {
      en: ["What does a dot above or below a note mean?", ["Legato: smoothly", "Staccato: short and detached", "Fermata: hold it"], "A dot means staccato: the note is short and separated from the next one."],
      hy: ["Ի՞նչ է նշանակում նոտայի վերևում կամ ներքևում դրված կետը։", ["Լեգատո՝ սահուն", "Ստակատո՝ կարճ և անջատ", "Ֆերմատա՝ պահիր"], "Կետը նշանակում է ստակատո․ նոտան կարճ է և անջատված հաջորդից։"],
      ru: ["Что означает точка над нотой или под ней?", ["Легато: связно", "Стаккато: коротко и отрывисто", "Фермата: задержать"], "Точка означает стаккато: нота короткая и отделена от следующей."],
    }),
  ],
  bach: [
    "diagram fugue",
    closer(
      `**Four hundred kilometres for a concert.** In 1705 the young Bach, organist in the small town of Arnstadt, asked for four weeks' leave. He set off on foot to Lübeck, about **400 kilometres** away, to hear **Dieterich Buxtehude**, the most famous organist in northern Germany. He was so fascinated that he stayed nearly **four months**. When he finally came home, the church council scolded him, and complained that his hymn accompaniments were now full of "strange notes".

**Bach in deep space.** In 1977 two Voyager space probes were launched to fly past the planets and out of the solar system. Each carries a golden record with sounds and music from Earth, in case anyone out there ever finds it. Of all the music chosen, **Bach** appears more often than any other composer: three of his pieces are on the record, and the first piece of music on it is from his **Second Brandenburg Concerto**.`,
      `**Չորս հարյուր կիլոմետր՝ մեկ համերգի համար։** 1705 թվականին երիտասարդ Բախը, որը փոքրիկ Առնշտադտ քաղաքում երգեհոնահար էր, չորս շաբաթ արձակուրդ խնդրեց։ Նա ոտքով ճանապարհ ընկավ դեպի Լյուբեկ՝ մոտ **400 կիլոմետր** հեռու, լսելու **Դիտրիխ Բուքստեհուդեին**՝ Հյուսիսային Գերմանիայի ամենահայտնի երգեհոնահարին։ Նա այնքան հմայված էր, որ մնաց գրեթե **չորս ամիս**։ Երբ վերջապես տուն վերադարձավ, եկեղեցական խորհուրդը նրան հանդիմանեց և դժգոհեց, որ նրա շարականների նվագակցությունն այժմ լի էր «տարօրինակ նոտաներով»։

**Բախը խոր տիեզերքում։** 1977 թվականին արձակվեցին երկու «Վոյաջեր» տիեզերական զոնդեր՝ մոլորակների մոտով անցնելու և Արեգակնային համակարգից դուրս թռչելու համար։ Յուրաքանչյուրը տանում է ոսկե ձայնապնակ՝ Երկրի հնչյուններով և երաժշտությամբ, եթե երբևէ որևէ մեկը գտնի այն։ Ընտրված ամբողջ երաժշտությունից **Բախը** հանդիպում է ավելի հաճախ, քան որևէ այլ կոմպոզիտոր․ նրա երեք ստեղծագործություն կա ձայնապնակում, և դրա վրա առաջին երաժշտական ստեղծագործությունը նրա **Երկրորդ Բրանդենբուրգյան կոնցերտից** է։`,
      `**Четыреста километров ради концерта.** В 1705 году молодой Бах, органист маленького города Арнштадта, попросил отпуск на четыре недели. Он отправился пешком в Любек, примерно за **400 километров**, чтобы послушать **Дитриха Букстехуде**, самого знаменитого органиста Северной Германии. Он был так очарован, что остался почти на **четыре месяца**. Когда он наконец вернулся, церковный совет сделал ему выговор и пожаловался, что в его сопровождении хоралов теперь полно «странных нот».

**Бах в далёком космосе.** В 1977 году запустили два космических зонда «Вояджер», чтобы пролететь мимо планет и покинуть Солнечную систему. Каждый несёт золотую пластинку со звуками и музыкой Земли — на случай, если её когда-нибудь кто-то найдёт. Из всей выбранной музыки **Бах** встречается чаще любого другого композитора: на пластинке три его произведения, а первая музыкальная запись на ней — из его **Второго Бранденбургского концерта**.`,
    ),
    ask(1, {
      en: ["What happens in a fugue?", ["One theme passes from voice to voice", "Everyone plays one melody together", "A singer improvises alone"], "In a fugue the theme enters in one voice after another, and the voices weave together."],
      hy: ["Ի՞նչ է կատարվում ֆուգայում։", ["Մեկ թեման անցնում է ձայնից ձայն", "Բոլորը միասին նվագում են մեկ մեղեդի", "Երգիչը միայնակ իմպրովիզ է անում"], "Ֆուգայում թեման մտնում է մի ձայնում մյուսի հետևից, և ձայները միահյուսվում են։"],
      ru: ["Что происходит в фуге?", ["Одна тема переходит из голоса в голос", "Все играют одну мелодию вместе", "Певец импровизирует один"], "В фуге тема вступает в одном голосе за другим, и голоса сплетаются."],
    }),
  ],
  mozart: [
    "timeline set=mozart",
    closer(
      `**The secret music of the Sistine Chapel.** In the Pope's Sistine Chapel in Rome the choir sang a **Miserere** by Gregorio Allegri, a piece so treasured that it was performed only during Holy Week, and copying it was forbidden. In 1770 the fourteen-year-old Mozart heard it once, went back to his lodgings and wrote the whole piece down from memory, several voices at once. He went back a few days later to check a few details. Instead of being punished, he was praised, and soon afterwards the Pope made him a knight.

**A starling that sang Mozart.** In 1784 Mozart heard a starling in a Vienna pet shop whistling a tune that was almost exactly the theme of his new Piano Concerto in G major, which he had finished only weeks before. Amused, he bought the bird and noted in his account book what it sang, with one note changed. He kept it for three years. When it died, he gave it a little funeral in the garden and wrote a poem for it.`,
      `**Սիքստինյան կապելլայի գաղտնի երաժշտությունը։** Հռոմում՝ Պապի Սիքստինյան կապելլայում, երգչախումբը կատարում էր Գրեգորիո Ալեգրիի **«Միզերերեն»**, մի ստեղծագործություն, որն այնքան թանկ էր համարվում, որ կատարվում էր միայն Ավագ շաբաթվա ընթացքում, և այն արտագրելն արգելված էր։ 1770 թվականին տասնչորսամյա Մոցարտն այն լսեց մեկ անգամ, վերադարձավ իր կացարանը և ամբողջ ստեղծագործությունը գրի առավ հիշողությամբ՝ միանգամից մի քանի ձայն։ Մի քանի օր անց նա նորից գնաց՝ որոշ մանրամասներ ստուգելու։ Փոխանակ պատժվելու՝ նա գովասանքի արժանացավ, և շուտով Պապը նրան ասպետ հռչակեց։

**Մոցարտ երգող սարյակը։** 1784 թվականին Մոցարտը Վիեննայի կենդանիների խանութում լսեց մի սարյակի, որը սուլում էր մի մեղեդի, որը գրեթե ճիշտ իր նոր սոլ մաժոր դաշնամուրային կոնցերտի թեման էր, որ նա ավարտել էր ընդամենը մի քանի շաբաթ առաջ։ Զվարճացած՝ նա գնեց թռչունին և իր հաշվետետրում նշեց, թե ինչ էր այն երգում՝ մեկ նոտան փոխված։ Նա այն պահեց երեք տարի։ Երբ թռչունը սատկեց, նա պարտեզում փոքրիկ թաղում կազմակերպեց և նրա համար բանաստեղծություն գրեց։`,
      `**Тайная музыка Сикстинской капеллы.** В Сикстинской капелле Папы Римского хор пел **«Мизерере»** Грегорио Аллегри — произведение, которым так дорожили, что исполняли его только на Страстной неделе, а переписывать его запрещалось. В 1770 году четырнадцатилетний Моцарт услышал его один раз, вернулся домой и записал всё произведение по памяти, сразу несколько голосов. Через несколько дней он пришёл снова, чтобы проверить пару деталей. Вместо наказания его похвалили, а вскоре Папа посвятил его в рыцари.

**Скворец, который пел Моцарта.** В 1784 году Моцарт услышал в венской лавке скворца, насвистывавшего мелодию, почти в точности совпадавшую с темой его нового фортепианного концерта соль мажор, законченного всего несколько недель назад. Развеселившись, он купил птицу и записал в расходной книжке, что она пела, — с одной изменённой нотой. Он держал скворца три года. Когда тот умер, Моцарт устроил ему маленькие похороны в саду и написал для него стихотворение.`,
    ),
    ask(3, {
      en: ["How old was Mozart when he died?", ["25", "50", "35"], "Mozart lived from 1756 to 1791, only 35 years, yet he left more than 600 works."],
      hy: ["Քանի՞ տարեկան էր Մոցարտը, երբ մահացավ։", ["25", "50", "35"], "Մոցարտն ապրեց 1756-ից 1791 թվականը՝ ընդամենը 35 տարի, բայց թողեց ավելի քան 600 ստեղծագործություն։"],
      ru: ["Сколько лет было Моцарту, когда он умер?", ["25", "50", "35"], "Моцарт жил с 1756 по 1791 год, всего 35 лет, но оставил более 600 произведений."],
    }),
  ],
  beethoven: [
    "timeline set=beethoven",
    closer(
      `**Conversations on paper.** In his last years Beethoven could not hear anything that was said to him, so visitors wrote their words in little notebooks and he answered aloud. About **140** of these "conversation books" survive. They are full of everyday life: shopping lists, gossip, arguments with his nephew, advice from doctors, plans for new pieces. Reading them is like listening to one side of a phone call, two hundred years old.

**A disc as long as the Ninth.** When engineers from Philips and Sony were designing the compact disc around 1980, they had to decide how much music it should hold. The story goes that someone insisted it must fit the whole of **Beethoven's Ninth Symphony** without stopping. A slow performance of the Ninth lasts about **74 minutes**, and that became the playing time of a CD. Engineers still argue about how true the story is, but it shows how special the Ninth is.`,
      `**Զրույցներ թղթի վրա։** Իր վերջին տարիներին Բեթհովենը ոչինչ չէր լսում, ինչ նրան ասում էին, ուստի այցելուներն իրենց խոսքերը գրում էին փոքրիկ տետրերում, իսկ նա բարձրաձայն պատասխանում էր։ Այդ «զրույցի տետրերից» պահպանվել է մոտ **140**-ը։ Դրանք լի են առօրյա կյանքով՝ գնումների ցուցակներ, բամբասանքներ, վեճեր եղբորորդու հետ, բժիշկների խորհուրդներ, նոր ստեղծագործությունների ծրագրեր։ Դրանք կարդալը նման է հեռախոսազրույցի մի կողմը լսելուն՝ երկու հարյուր տարվա վաղեմության։

**Իններորդի երկարությամբ սկավառակ։** Երբ մոտ 1980 թվականին Philips և Sony ընկերությունների ինժեներները նախագծում էին կոմպակտ սկավառակը, նրանք պետք է որոշեին, թե որքան երաժշտություն պետք է այն պարունակի։ Պատմում են, որ ինչ-որ մեկը պնդում էր, որ այն պետք է առանց ընդհատման տեղավորի **Բեթհովենի Իններորդ սիմֆոնիան** ամբողջությամբ։ Իններորդի դանդաղ կատարումը տևում է մոտ **74 րոպե**, և դա դարձավ CD-ի տևողությունը։ Ինժեներներն այսօր էլ վիճում են, թե որքանով է պատմությունը ճիշտ, բայց այն ցույց է տալիս, թե որքան առանձնահատուկ է Իններորդը։`,
      `**Разговоры на бумаге.** В последние годы Бетховен не слышал ничего из того, что ему говорили, поэтому посетители записывали свои слова в маленькие тетради, а он отвечал вслух. Сохранилось около **140** таких «разговорных тетрадей». В них полно повседневной жизни: списки покупок, сплетни, споры с племянником, советы врачей, замыслы новых произведений. Читать их — всё равно что слышать одну сторону телефонного разговора двухсотлетней давности.

**Диск длиной в Девятую.** Когда около 1980 года инженеры Philips и Sony проектировали компакт-диск, им нужно было решить, сколько музыки он будет вмещать. Рассказывают, что кто-то настоял: на диск должна целиком, без перерыва, поместиться **Девятая симфония Бетховена**. Медленное исполнение Девятой длится около **74 минут** — это и стало длительностью CD. Инженеры до сих пор спорят, насколько правдива эта история, но она показывает, какая особенная эта симфония.`,
    ),
    ask(2, {
      en: ["What was new about Beethoven's Ninth Symphony?", ["It had no slow movement", "A choir and soloists sing in it", "It was written for piano alone"], "In the last movement a choir and soloists sing Schiller's \"Ode to Joy\": a first for a symphony."],
      hy: ["Ի՞նչն էր նոր Բեթհովենի Իններորդ սիմֆոնիայում։", ["Դանդաղ մաս չուներ", "Նրանում երգում են երգչախումբ և մեներգիչներ", "Գրված էր միայն դաշնամուրի համար"], "Վերջին մասում երգչախումբն ու մեներգիչներն երգում են Շիլլերի «Ուրախության օդը»՝ առաջին անգամ սիմֆոնիայում։"],
      ru: ["Что было нового в Девятой симфонии Бетховена?", ["В ней не было медленной части", "В ней поют хор и солисты", "Она написана для одного фортепиано"], "В финале хор и солисты поют «Оду к радости» Шиллера — впервые в симфонии."],
    }),
  ],
  tchaikovsky: [
    "timeline set=tchaikovsky",
    closer(
      `**The ballet that failed.** When **"Swan Lake"** was first staged at the Bolshoi Theatre in Moscow in 1877, it was not a success. The dancing was weak, the scenery poor, and some critics found the music "too symphonic" for a ballet. Tchaikovsky did not live to see it triumph. Two years after his death, in 1895, the choreographers Marius Petipa and Lev Ivanov staged it again in St Petersburg, and this time the world fell in love with the white swans.

**A star in New York.** In 1891 a new concert hall opened in New York, paid for by the businessman Andrew Carnegie. To make the opening festival special, the organisers invited the most famous composer they could: Tchaikovsky. He crossed the Atlantic by steamship, conducted his own music, and was amazed to be greeted everywhere like a celebrity. The hall was later named **Carnegie Hall**, and it is still one of the most famous stages in the world.`,
      `**Բալետը, որը ձախողվեց։** Երբ **«Կարապի լիճը»** առաջին անգամ բեմադրվեց Մոսկվայի Մեծ թատրոնում 1877 թվականին, այն հաջողություն չունեցավ։ Պարը թույլ էր, դեկորացիաները՝ աղքատ, և որոշ քննադատներ երաժշտությունը բալետի համար «չափազանց սիմֆոնիկ» համարեցին։ Չայկովսկին չապրեց մինչև նրա հաղթանակը։ Նրա մահից երկու տարի անց՝ 1895 թվականին, պարուսույցներ Մարիուս Պետիպան և Լև Իվանովն այն կրկին բեմադրեցին Սանկտ Պետերբուրգում, և այս անգամ աշխարհը սիրահարվեց սպիտակ կարապներին։

**Աստղ Նյու Յորքում։** 1891 թվականին Նյու Յորքում բացվեց նոր համերգասրահ, որի համար վճարել էր գործարար Էնդրյու Կարնեգին։ Բացման փառատոնն առանձնահատուկ դարձնելու համար կազմակերպիչները հրավիրեցին ամենահայտնի կոմպոզիտորին, որին կարող էին՝ Չայկովսկուն։ Նա շոգենավով անցավ Ատլանտյան օվկիանոսը, ղեկավարեց իր երաժշտությունը և զարմացած էր, որ ամենուր նրան դիմավորում էին որպես հայտնի մարդու։ Սրահը հետագայում կոչվեց **Կարնեգի Հոլ**, և այն այսօր էլ աշխարհի ամենահայտնի բեմերից մեկն է։`,
      `**Балет, который провалился.** Когда **«Лебединое озеро»** впервые поставили в Большом театре в Москве в 1877 году, оно не имело успеха. Танцы были слабыми, декорации бедными, а некоторые критики сочли музыку «слишком симфоничной» для балета. Чайковский не дожил до его триумфа. Через два года после его смерти, в 1895 году, хореографы Мариус Петипа и Лев Иванов заново поставили балет в Петербурге, и на этот раз мир влюбился в белых лебедей.

**Звезда в Нью-Йорке.** В 1891 году в Нью-Йорке открылся новый концертный зал, построенный на деньги промышленника Эндрю Карнеги. Чтобы сделать открытие особенным, организаторы пригласили самого знаменитого композитора, какого могли, — Чайковского. Он пересёк Атлантику на пароходе, дирижировал своей музыкой и удивлялся, что его повсюду встречают как знаменитость. Позже зал назвали **Карнеги-холлом**, и он до сих пор одна из самых известных сцен мира.`,
    ),
    ask(1, {
      en: ["Which of these is a ballet by Tchaikovsky?", ["\"The Nutcracker\"", "\"The Magic Flute\"", "\"Gayane\""], "\"The Nutcracker\" is Tchaikovsky's; \"The Magic Flute\" is an opera by Mozart and \"Gayane\" a ballet by Khachaturian."],
      hy: ["Սրանցից ո՞րն է Չայկովսկու բալետը։", ["«Շչելկունչիկ»", "«Կախարդական սրինգ»", "«Գայանե»"], "«Շչելկունչիկը» Չայկովսկունն է, «Կախարդական սրինգը» Մոցարտի օպերան է, իսկ «Գայանեն»՝ Խաչատրյանի բալետը։"],
      ru: ["Какой из них — балет Чайковского?", ["«Щелкунчик»", "«Волшебная флейта»", "«Гаяне»"], "«Щелкунчик» — Чайковского; «Волшебная флейта» — опера Моцарта, «Гаяне» — балет Хачатуряна."],
    }),
  ],
};
