import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade7: VisualMap[number] = {
  "twentieth-century-classical": [
    "timeline set=c20",
    closer(
      `**A quartet written behind barbed wire.** In 1940 the French composer **Olivier Messiaen** was taken prisoner of war and sent to a camp in Germany. Among the prisoners he found a clarinettist, a violinist and a cellist, and he wrote for them and himself at the piano the **"Quartet for the End of Time"**. On a freezing January night in 1941 they played it for several hundred prisoners and guards on battered instruments. Messiaen later said he had never been listened to with such attention.

**A symphony as a weapon.** By August 1942 Leningrad had been under siege for almost a year, and most of the radio orchestra's musicians had died or were too weak to play. The score of Shostakovich's **Seventh Symphony** was flown into the city by military plane, players were found among soldiers and given extra food, and on **9 August** the conductor **Karl Eliasberg** raised his baton. Before the concert, Soviet guns shelled the enemy positions so they would stay quiet, and the music was broadcast by loudspeakers towards the enemy lines.`,
      `**Փշալարերի հետևում գրված քառյակ։** 1940 թվականին ֆրանսիացի կոմպոզիտոր **Օլիվյե Մեսիանը** գերի ընկավ և ուղարկվեց Գերմանիայի մի ճամբար։ Գերիների մեջ նա գտավ կլառնետահար, ջութակահար և թավջութակահար և նրանց ու իր՝ դաշնամուրի համար գրեց **«Քառյակ ժամանակների վախճանի համար»**։ 1941 թվականի հունվարյան մի սառցե գիշեր նրանք այն կատարեցին մի քանի հարյուր գերու և պահակի համար՝ մաշված գործիքներով։ Մեսիանը հետագայում ասում էր, որ իրեն երբեք այդքան ուշադիր չեն լսել։

**Սիմֆոնիա՝ որպես զենք։** 1942 թվականի օգոստոսին Լենինգրադը գրեթե մեկ տարի պաշարման մեջ էր, և ռադիոնվագախմբի երաժիշտների մեծ մասը մահացել էր կամ չափազանց թույլ էր նվագելու համար։ Շոստակովիչի **Յոթերորդ սիմֆոնիայի** պարտիտուրը ռազմական ինքնաթիռով բերվեց քաղաք, նվագողներ գտան զինվորների մեջ և նրանց լրացուցիչ սնունդ տվեցին, և **օգոստոսի 9-ին** դիրիժոր **Կարլ Էլիասբերգը** բարձրացրեց փայտիկը։ Համերգից առաջ խորհրդային հրետանին ռմբակոծեց թշնամու դիրքերը, որպեսզի նրանք լուռ մնան, իսկ երաժշտությունը բարձրախոսներով հեռարձակվում էր դեպի թշնամու գծերը։`,
      `**Квартет, написанный за колючей проволокой.** В 1940 году французский композитор **Оливье Мессиан** попал в плен и был отправлен в лагерь в Германии. Среди пленных он нашёл кларнетиста, скрипача и виолончелиста и написал для них и себя за фортепиано **«Квартет на конец времени»**. Морозной январской ночью 1941 года они сыграли его для нескольких сотен пленных и охранников на потрёпанных инструментах. Позже Мессиан говорил, что его никогда не слушали с таким вниманием.

**Симфония как оружие.** К августу 1942 года Ленинград был в блокаде почти год, и большинство музыкантов радиооркестра погибли или были слишком слабы, чтобы играть. Партитуру **Седьмой симфонии** Шостаковича доставили в город военным самолётом, исполнителей искали среди солдат и давали им дополнительный паёк, и **9 августа** дирижёр **Карл Элиасберг** поднял палочку. Перед концертом советская артиллерия обстреляла позиции противника, чтобы те молчали, а музыку через громкоговорители транслировали в сторону вражеских окопов.`,
    ),
    ask(2, {
      en: ["Why did \"The Rite of Spring\" cause a scandal in 1913?", ["It was too short", "Its rough, uneven rhythms and harsh dissonances shocked the audience", "It had no orchestra"], "Stravinsky's pounding, irregular rhythms and clashing chords were unlike anything the audience had heard."],
      hy: ["Ինչո՞ւ «Սրբազան գարունը» 1913 թվականին սկանդալ առաջացրեց։", ["Չափազանց կարճ էր", "Կոպիտ, անհավասար ռիթմերն ու կտրուկ դիսոնանսները ցնցեցին հանդիսատեսին", "Նվագախումբ չուներ"], "Ստրավինսկու հզոր, անկանոն ռիթմերն ու բախվող ակորդները նման չէին ոչնչի, ինչ հանդիսատեսը լսել էր։"],
      ru: ["Почему «Весна священная» вызвала скандал в 1913 году?", ["Она была слишком короткой", "Её грубые, неровные ритмы и резкие диссонансы потрясли публику", "В ней не было оркестра"], "Тяжёлые, неровные ритмы и резкие созвучия Стравинского не походили ни на что, слышанное публикой."],
    }),
  ],
  jazz: [
    "piano mode=rhythm pattern=e,q,e,q,q meter=4 tempo=112",
    closer(
      `**She came to dance and stayed to sing.** In 1934 a shy seventeen-year-old named **Ella Fitzgerald** entered the amateur night at the Apollo Theater in Harlem, New York. She had planned to dance, but the act before her was a pair of brilliant dancers, and she froze. So she sang instead, and won first prize. Within a year she was singing with a big band, and she went on to win thirteen Grammy awards. People called her "the First Lady of Song".

**From Gyumri to the world.** **Tigran Hamasyan** was born in Gyumri in 1987 and grew up listening to his family's rock and jazz records. In 2006, at nineteen, he won the Thelonious Monk International Jazz Piano Competition in the USA, one of the most important jazz contests in the world. His music mixes jazz improvisation with Armenian folk songs, sharakans and the tricky rhythms of Armenian dances.`,
      `**Եկավ պարելու և մնաց երգելու։** 1934 թվականին **Էլլա Ֆիցջերալդ** անունով մի ամաչկոտ տասնյոթամյա աղջիկ մասնակցեց Նյու Յորքի Հարլեմ թաղամասի «Ապոլլո» թատրոնի սիրողական երեկոյին։ Նա պատրաստվել էր պարել, բայց իրենից առաջ ելույթ ունեցողներն երկու փայլուն պարող էին, և նա քարացավ։ Ուստի նա փոխարենն երգեց և առաջին մրցանակը շահեց։ Մեկ տարի անց նա արդեն երգում էր բիգ բենդի հետ, իսկ հետագայում տասներեք Գրեմմի մրցանակ ստացավ։ Նրան կոչում էին «Երգի առաջին տիկին»։

**Գյումրիից՝ աշխարհ։** **Տիգրան Համասյանը** ծնվել է Գյումրիում 1987 թվականին և մեծացել է՝ լսելով իր ընտանիքի ռոք և ջազ ձայնապնակները։ 2006 թվականին, տասնինը տարեկանում, նա հաղթեց ԱՄՆ-ում Թելոնիուս Մոնքի անվան միջազգային ջազ դաշնակահարների մրցույթում՝ աշխարհի ամենակարևոր ջազային մրցույթներից մեկում։ Նրա երաժշտությունը խառնում է ջազային իմպրովիզացիան հայկական ժողովրդական երգերի, շարականների և հայկական պարերի բարդ ռիթմերի հետ։`,
      `**Пришла танцевать, а осталась петь.** В 1934 году застенчивая семнадцатилетняя **Элла Фицджеральд** вышла на вечер любителей в театре «Аполло» в Гарлеме, Нью-Йорк. Она собиралась танцевать, но перед ней выступила пара блестящих танцоров, и она оцепенела. Тогда она запела — и получила первый приз. Через год она уже пела с биг-бэндом, а потом получила тринадцать премий «Грэмми». Её называли «первой леди песни».

**Из Гюмри — в мир.** **Тигран Амасян** родился в Гюмри в 1987 году и вырос на семейных пластинках рока и джаза. В 2006 году, в девятнадцать лет, он победил на Международном конкурсе джазовых пианистов имени Телониуса Монка в США — одном из важнейших джазовых конкурсов мира. Его музыка соединяет джазовую импровизацию с армянскими народными песнями, шараканами и хитрыми ритмами армянских танцев.`,
    ),
    ask(3, {
      en: ["In which city was jazz born?", ["Chicago", "Paris", "New Orleans"], "Jazz grew up in New Orleans at the start of the 20th century, from the blues, spirituals, marches and dances."],
      hy: ["Ո՞ր քաղաքում է ծնվել ջազը։", ["Չիկագոյում", "Փարիզում", "Նոր Օռլեանում"], "Ջազը ձևավորվեց Նոր Օռլեանում 20-րդ դարի սկզբին՝ բլյուզից, սփիրիչուելներից, քայլերգերից և պարերից։"],
      ru: ["В каком городе родился джаз?", ["В Чикаго", "В Париже", "В Новом Орлеане"], "Джаз вырос в Новом Орлеане в начале XX века из блюза, спиричуэлс, маршей и танцев."],
    }),
  ],
  "popular-music-and-rock": [
    "diagram band",
    closer(
      `**A guitar made from a log.** An ordinary guitar is hollow, and when you plug it into a loud amplifier it starts to howl. In 1941 the American guitarist and inventor **Les Paul** tried something different: he fixed strings and electric pickups to a solid block of pine and, to make it look like a guitar, glued the two halves of a guitar body to its sides. He called it **"The Log"**. Solid-body electric guitars, which can be played very loud without howling, became the voice of rock and roll.

**A concert on the eve of the centenary.** On the night of **23 April 2015**, the eve of the hundredth anniversary of the Armenian Genocide, the band **System of a Down** gave its first concert in Armenia, free of charge, in Yerevan's Republic Square. Tens of thousands of people filled the square. The band's members, children and grandchildren of survivors, had spent years asking the world to recognise the Genocide.`,
      `**Գերանից պատրաստված կիթառ։** Սովորական կիթառը սնամեջ է, և երբ այն միացնում ես ուժեղ ուժեղարարի, սկսում է ոռնալ։ 1941 թվականին ամերիկացի կիթառահար և գյուտարար **Լես Փոլը** այլ բան փորձեց․ նա լարերը և էլեկտրական ձայնառիչներն ամրացրեց սոճու մի ամուր ձողի, իսկ որպեսզի այն կիթառի նման լինի, կողքերին սոսնձեց կիթառի իրանի երկու կեսերը։ Նա այն կոչեց **«Գերան»**։ Ամուր իրանով էլեկտրական կիթառները, որոնք կարելի է շատ ուժեղ նվագել առանց ոռնոցի, դարձան ռոքնռոլի ձայնը։

**Համերգ հարյուրամյակի նախօրեին։** **2015 թվականի ապրիլի 23-ի** գիշերը՝ Հայոց ցեղասպանության հարյուրամյակի նախօրեին, **System of a Down** խումբը Հայաստանում իր առաջին համերգը տվեց՝ անվճար, Երևանի Հանրապետության հրապարակում։ Տասնյակ հազարավոր մարդիկ լցրել էին հրապարակը։ Խմբի անդամները՝ վերապրածների զավակներն ու թոռները, տարիներ շարունակ աշխարհից պահանջում էին ճանաչել Ցեղասպանությունը։`,
      `**Гитара из бревна.** Обычная гитара полая, и если подключить её к громкому усилителю, она начинает выть. В 1941 году американский гитарист и изобретатель **Лес Пол** попробовал другое: он закрепил струны и электрические звукосниматели на цельном сосновом бруске, а чтобы это было похоже на гитару, приклеил по бокам две половинки гитарного корпуса. Он назвал её **«Бревно»**. Цельнокорпусные электрогитары, на которых можно играть очень громко без воя, стали голосом рок-н-ролла.

**Концерт накануне столетия.** В ночь на **24 апреля 2015 года**, накануне столетия Геноцида армян, группа **System of a Down** дала свой первый концерт в Армении — бесплатно, на площади Республики в Ереване. Площадь заполнили десятки тысяч людей. Участники группы, дети и внуки выживших, годами призывали мир признать Геноцид.`,
    ),
    ask(1, {
      en: ["Which instrument in a rock band plays the low notes and links rhythm and harmony?", ["Bass guitar", "Electric guitar", "Synthesiser"], "The bass guitar plays the low notes and ties the drums and the chords together."],
      hy: ["Ռոք խմբի ո՞ր գործիքն է նվագում ցածր նոտաները և կապում ռիթմն ու հարմոնիան։", ["Բաս կիթառը", "Էլեկտրական կիթառը", "Սինթեզատորը"], "Բաս կիթառը նվագում է ցածր նոտաները և միացնում հարվածայիններն ու ակորդները։"],
      ru: ["Какой инструмент рок-группы играет низкие ноты и связывает ритм с гармонией?", ["Бас-гитара", "Электрогитара", "Синтезатор"], "Бас-гитара играет низкие ноты и скрепляет барабаны и аккорды."],
    }),
  ],
  "film-music": [
    "timeline set=film",
    closer(
      `**The scene that was meant to be silent.** When Alfred Hitchcock was making **"Psycho"** (1960), he wanted the famous shower scene to have no music at all. The composer **Bernard Herrmann** wrote music for it anyway: violins playing short, piercing notes, like screams or stabs. When Hitchcock heard the scene with the music, he changed his mind at once. He later said that a third of the film's effect came from the music.

**A march for a villain.** In the first "Star Wars" film (1977) Darth Vader had no theme of his own. For the second film, in 1980, **John Williams** wrote the **"Imperial March"**: heavy, marching brass in a minor key. From then on, whenever Vader or the Empire appears, the march, or even a hint of it, tells you who is coming before you see him. This is a **leitmotif**, the idea Richard Wagner developed in his operas more than a hundred years earlier.`,
      `**Տեսարանը, որը պետք է լուռ լիներ։** Երբ Ալֆրեդ Հիչքոքը նկարահանում էր **«Փսիխո»** ֆիլմը (1960), նա ցանկանում էր, որ լոգարանի հայտնի տեսարանն ընդհանրապես երաժշտություն չունենա։ Կոմպոզիտոր **Բեռնարդ Հերմանն** այնուամենայնիվ երաժշտություն գրեց դրա համար․ ջութակներ, որոնք նվագում են կարճ, ծակող նոտաներ՝ ճիչերի կամ հարվածների պես։ Երբ Հիչքոքը լսեց տեսարանն երաժշտությամբ, անմիջապես փոխեց իր կարծիքը։ Հետագայում նա ասում էր, որ ֆիլմի ազդեցության մեկ երրորդը գալիս էր երաժշտությունից։

**Քայլերգ չարագործի համար։** «Աստղային պատերազմների» առաջին ֆիլմում (1977) Դարթ Վեյդերը սեփական թեմա չուներ։ Երկրորդ ֆիլմի համար՝ 1980 թվականին, **Ջոն Ուիլյամսը** գրեց **«Կայսերական քայլերգը»**՝ ծանր, քայլող պղնձյա փողայիններ մինոր լադով։ Այդ պահից, երբ հայտնվում են Վեյդերը կամ Կայսրությունը, քայլերգը կամ նույնիսկ դրա ակնարկն ասում է, թե ով է գալիս, նախքան նրան կտեսնես։ Սա **լայտմոտիվ** է՝ այն գաղափարը, որը Ռիխարդ Վագները զարգացրել էր իր օպերաներում ավելի քան հարյուր տարի առաջ։`,
      `**Сцена, которая должна была быть беззвучной.** Когда Альфред Хичкок снимал **«Психо»** (1960), он хотел, чтобы в знаменитой сцене в душе вообще не было музыки. Композитор **Бернард Херрманн** всё равно написал к ней музыку: скрипки играют короткие пронзительные ноты, похожие на крики или удары. Услышав сцену с музыкой, Хичкок сразу передумал. Позже он говорил, что треть воздействия фильма шла от музыки.

**Марш для злодея.** В первых «Звёздных войнах» (1977) у Дарта Вейдера не было своей темы. Для второго фильма, в 1980 году, **Джон Уильямс** написал **«Имперский марш»**: тяжёлые марширующие медные в миноре. С тех пор, когда появляется Вейдер или Империя, марш или даже намёк на него говорит, кто идёт, прежде чем ты его увидишь. Это **лейтмотив** — идея, которую Рихард Вагнер развил в своих операх более чем на сто лет раньше.`,
    ),
    ask(2, {
      en: ["What is a leitmotif?", ["The loudest moment of a film", "A short theme linked to a character, place or idea", "Music played before the film"], "A leitmotif returns whenever its character, place or idea appears, like Darth Vader's march."],
      hy: ["Ի՞նչ է լայտմոտիվը։", ["Ֆիլմի ամենաուժեղ պահը", "Կարճ թեմա՝ կապված հերոսի, վայրի կամ գաղափարի հետ", "Ֆիլմից առաջ հնչող երաժշտություն"], "Լայտմոտիվը վերադառնում է ամեն անգամ, երբ հայտնվում է նրա հերոսը, վայրը կամ գաղափարը, ինչպես Դարթ Վեյդերի քայլերգը։"],
      ru: ["Что такое лейтмотив?", ["Самый громкий момент фильма", "Короткая тема, связанная с персонажем, местом или идеей", "Музыка перед фильмом"], "Лейтмотив возвращается каждый раз, когда появляется его персонаж, место или идея, как марш Дарта Вейдера."],
    }),
  ],
  "recording-and-technology": [
    "diagram sampling",
    closer(
      `**A recording nobody could play.** In 1860, seventeen years before Edison, the Frenchman **Édouard-Léon Scott de Martinville** recorded a person singing the folk song "Au clair de la lune". His machine, the **phonautograph**, scratched the sound wave as a wavy line onto paper blackened with soot, but it could not play anything back: Scott only wanted to look at sound. In 2008 scientists scanned his papers, turned the lines into sound with a computer and heard, through the crackle, a voice from 148 years earlier.

**"Mary had a little lamb".** In December 1877 Thomas Edison wrapped a sheet of tin foil around a cylinder, turned the handle and shouted into a horn the nursery rhyme **"Mary had a little lamb"**. A needle pressed the vibrations into the foil. Then he put the needle back at the start, turned the handle again, and the machine repeated his words. Edison admitted that he had never been so taken aback in his life.`,
      `**Ձայնագրություն, որը ոչ ոք չէր կարող լսել։** 1860 թվականին՝ Էդիսոնից տասնյոթ տարի առաջ, ֆրանսիացի **Էդուարդ-Լեոն Սկոտ դը Մարտենվիլը** ձայնագրեց մի մարդու, որն երգում էր «Au clair de la lune» («Լուսնի լույսի տակ») ժողովրդական երգը։ Նրա սարքը՝ **ֆոնավտոգրաֆը**, ձայնային ալիքն ալիքաձև գծի տեսքով քերծում էր մրով սևացված թղթի վրա, բայց ոչինչ հետ նվագել չէր կարող․ Սկոտը պարզապես ուզում էր տեսնել ձայնը։ 2008 թվականին գիտնականները սկանավորեցին նրա թղթերը, համակարգչով գծերը վերածեցին ձայնի և ճարճատյունի միջից լսեցին 148 տարի առաջվա ձայնը։

**«Մերին մի փոքրիկ գառ ուներ»։** 1877 թվականի դեկտեմբերին Թոմաս Էդիսոնն անագաթիթեղը փաթաթեց գլանի շուրջը, պտտեց բռնակը և շեփորի մեջ բղավեց **«Մերին մի փոքրիկ գառ ուներ»** մանկական ոտանավորը։ Ասեղը թրթռումները սեղմեց թիթեղի մեջ։ Հետո նա ասեղը վերադարձրեց սկիզբ, նորից պտտեց բռնակը, և սարքը կրկնեց նրա բառերը։ Էդիսոնը խոստովանում էր, որ կյանքում երբեք այդքան չէր ապշել։`,
      `**Запись, которую никто не мог воспроизвести.** В 1860 году, за семнадцать лет до Эдисона, француз **Эдуар-Леон Скотт де Мартенвиль** записал человека, поющего народную песенку «Au clair de la lune» («При свете луны»). Его аппарат, **фонавтограф**, процарапывал звуковую волну волнистой линией на закопчённой бумаге, но воспроизводить ничего не мог: Скотт хотел лишь увидеть звук. В 2008 году учёные отсканировали его листы, превратили линии в звук с помощью компьютера и сквозь треск услышали голос 148-летней давности.

**«У Мэри был барашек».** В декабре 1877 года Томас Эдисон обернул цилиндр листом оловянной фольги, повернул ручку и прокричал в рупор детский стишок **«У Мэри был барашек»**. Игла вдавила колебания в фольгу. Потом он вернул иглу к началу, снова повернул ручку — и машина повторила его слова. Эдисон признавался, что никогда в жизни не был так поражён.`,
    ),
    ask(3, {
      en: ["How does a digital recording store sound?", ["As grooves in a disc", "As a magnetic trace on tape", "As numbers: the wave is measured thousands of times a second"], "Digital sound is a list of measurements; a CD stores 44,100 of them every second."],
      hy: ["Ինչպե՞ս է թվային ձայնագրությունը պահում ձայնը։", ["Որպես ակոսներ սկավառակի վրա", "Որպես մագնիսական հետք ժապավենի վրա", "Որպես թվեր․ ալիքը չափվում է վայրկյանում հազարավոր անգամներ"], "Թվային ձայնը չափումների ցուցակ է․ CD-ն ամեն վայրկյան պահում է դրանցից 44 100-ը։"],
      ru: ["Как цифровая запись хранит звук?", ["В виде канавок на диске", "В виде магнитного следа на ленте", "В виде чисел: волну измеряют тысячи раз в секунду"], "Цифровой звук — это список измерений; CD хранит 44 100 таких чисел в секунду."],
    }),
  ],
  "write-a-song": [
    "piano mode=prog prog=pop tempo=96",
    closer(
      `**Two hits in one day.** The American singer **Dolly Parton** has said that in 1973 she wrote two of her most famous songs on the same day: **"Jolene"** and **"I Will Always Love You"**. Both have simple chords and a chorus that is easy to sing, and both came from real feelings. Years later "I Will Always Love You", sung by Whitney Houston, became one of the best-selling singles of all time. A great song does not have to be complicated.

**A songwriter who played in one key.** **Irving Berlin** wrote around 1,500 songs, including "White Christmas", yet he never learned to read music properly and could play the piano only in one key, F sharp major, which uses mostly the black keys. He had a special piano with a lever that shifted the whole keyboard, so he could play in F sharp and hear his song in any key he liked. An assistant wrote the notes down for him.`,
      `**Երկու հիթ մեկ օրում։** Ամերիկացի երգչուհի **Դոլլի Պարտոնը** պատմել է, որ 1973 թվականին իր ամենահայտնի երգերից երկուսը գրել է նույն օրը՝ **«Jolene»**-ը և **«I Will Always Love You»**-ն։ Երկուսն էլ ունեն պարզ ակորդներ և հեշտ երգվող կրկներգ, և երկուսն էլ ծնվել են իրական զգացմունքներից։ Տարիներ անց «I Will Always Love You»-ն Ուիթնի Հյուսթոնի կատարմամբ դարձավ բոլոր ժամանակների ամենավաճառվող սինգլներից մեկը։ Մեծ երգը պարտադիր չէ, որ բարդ լինի։

**Երգահան, որը նվագում էր մեկ տոնայնությամբ։** **Իրվինգ Բեռլինը** գրել է մոտ 1500 երգ, այդ թվում՝ «White Christmas»-ը, բայց երբեք լավ չսովորեց նոտաներ կարդալ և դաշնամուր կարող էր նվագել միայն մեկ տոնայնությամբ՝ ֆա դիեզ մաժոր, որը հիմնականում օգտագործում է սև ստեղները։ Նա ուներ հատուկ դաշնամուր՝ լծակով, որը տեղաշարժում էր ամբողջ ստեղնաշարը, այնպես որ նա կարող էր նվագել ֆա դիեզով և լսել իր երգը ցանկացած տոնայնությամբ։ Օգնականը նրա համար գրի էր առնում նոտաները։`,
      `**Два хита за один день.** Американская певица **Долли Партон** рассказывала, что в 1973 году написала две свои самые известные песни в один день: **«Jolene»** и **«I Will Always Love You»**. В обеих простые аккорды и легко запоминающийся припев, и обе родились из настоящих чувств. Годы спустя «I Will Always Love You» в исполнении Уитни Хьюстон стала одним из самых продаваемых синглов всех времён. Великая песня не обязана быть сложной.

**Автор песен, игравший в одной тональности.** **Ирвинг Берлин** написал около 1500 песен, включая «White Christmas», но так и не научился как следует читать ноты и умел играть на рояле только в одной тональности — фа-диез мажоре, где в основном чёрные клавиши. У него был особый рояль с рычагом, сдвигавшим всю клавиатуру, так что он играл в фа-диезе, а слышал песню в любой тональности. Ноты за него записывал помощник.`,
    ),
    ask(1, {
      en: ["Which three chords are enough to accompany many songs in C major?", ["C, F and G", "C, D and E", "A, B and C"], "C, F and G are the tonic, subdominant and dominant of C major: T, S and D."],
      hy: ["Ո՞ր երեք ակորդն է բավական դո մաժորով շատ երգերի նվագակցության համար։", ["Դո, ֆա և սոլ", "Դո, ռե և մի", "Լյա, սի և դո"], "Դո, ֆա և սոլ ակորդները դո մաժորի տոնիկան, սուբդոմինանտը և դոմինանտն են՝ T, S և D։"],
      ru: ["Каких трёх аккордов хватает для аккомпанемента многих песен в до мажоре?", ["До, фа и соль", "До, ре и ми", "Ля, си и до"], "До, фа и соль — тоника, субдоминанта и доминанта до мажора: T, S и D."],
    }),
  ],
  "musical-theatre": [
    "timeline set=musicals",
    closer(
      `**First it was the East Side.** In 1949 the choreographer Jerome Robbins had an idea: to tell the story of Romeo and Juliet in modern New York. At first it was called **"East Side Story"**, about a Catholic boy and a Jewish girl. The idea was put aside for years. When the team came back to it, they moved it to the West Side and made the rival families into two street gangs, and Leonard Bernstein's **"West Side Story"** opened in 1957.

**The critics were wrong.** When **"Les Misérables"** opened in London in 1985, many critics hated it: too long, too gloomy, too much like an opera. But audiences queued for tickets, and the show never closed. It became the longest-running musical in the history of London's West End, has been seen by tens of millions of people around the world and has been translated into more than twenty languages.`,
      `**Սկզբում Իսթ Սայդն էր։** 1949 թվականին պարուսույց Ջերոմ Ռոբինսը մի գաղափար ունեցավ՝ պատմել Ռոմեոյի և Ջուլիետի պատմությունը ժամանակակից Նյու Յորքում։ Սկզբում այն կոչվում էր **«Իսթսայդյան պատմություն»**՝ կաթոլիկ տղայի և հրեա աղջկա մասին։ Գաղափարը տարիներով մի կողմ դրվեց։ Երբ թիմը վերադարձավ դրան, գործողությունը տեղափոխեցին Վեսթ Սայդ, իսկ մրցակից ընտանիքները դարձան երկու փողոցային խմբավորում, և Լեոնարդ Բեռնստայնի **«Վեսթսայդյան պատմությունը»** բեմ բարձրացավ 1957 թվականին։

**Քննադատները սխալվեցին։** Երբ **«Թշվառները»** բեմադրվեց Լոնդոնում 1985 թվականին, շատ քննադատներ այն ատեցին՝ չափազանց երկար, չափազանց մռայլ, չափազանց օպերայի նման։ Բայց հանդիսատեսը հերթ էր կանգնում տոմսերի համար, և ներկայացումն երբեք չփակվեց։ Այն դարձավ Լոնդոնի Վեսթ Էնդի պատմության ամենաերկարակյաց մյուզիքլը, այն դիտել են տասնյակ միլիոնավոր մարդիկ ամբողջ աշխարհում, և այն թարգմանվել է ավելի քան քսան լեզվով։`,
      `**Сначала был Ист-Сайд.** В 1949 году хореограф Джером Роббинс задумал рассказать историю Ромео и Джульетты в современном Нью-Йорке. Сначала она называлась **«Истсайдская история»** — о мальчике-католике и девочке-еврейке. Замысел на годы отложили. Когда команда вернулась к нему, действие перенесли в Вест-Сайд, а враждующие семьи превратили в две уличные банды, и в 1957 году на сцену вышла **«Вестсайдская история»** Леонарда Бернстайна.

**Критики ошиблись.** Когда **«Отверженные»** открылись в Лондоне в 1985 году, многие критики их разгромили: слишком длинно, слишком мрачно, слишком похоже на оперу. Но публика стояла в очередях за билетами, и спектакль так и не закрылся. Он стал самым долгоидущим мюзиклом в истории лондонского Вест-Энда, его посмотрели десятки миллионов людей по всему миру и перевели более чем на двадцать языков.`,
    ),
    ask(2, {
      en: ["How does a musical differ from an opera?", ["A musical has no music", "It mixes singing, dancing and acting in modern musical styles", "A musical is always silent"], "An opera is almost all sung by classical voices; a musical mixes songs, dance and spoken scenes in modern styles."],
      hy: ["Ինչո՞վ է մյուզիքլը տարբերվում օպերայից։", ["Մյուզիքլն երաժշտություն չունի", "Այն միավորում է երգը, պարը և դերասանական խաղը ժամանակակից երաժշտական ոճերով", "Մյուզիքլը միշտ լուռ է"], "Օպերան գրեթե ամբողջությամբ երգվում է դասական ձայներով, իսկ մյուզիքլը միավորում է երգերը, պարը և խոսակցական տեսարանները ժամանակակից ոճերով։"],
      ru: ["Чем мюзикл отличается от оперы?", ["В мюзикле нет музыки", "Он соединяет пение, танец и игру в современных музыкальных стилях", "Мюзикл всегда беззвучен"], "Опера почти целиком поётся классическими голосами; мюзикл соединяет песни, танцы и разговорные сцены в современных стилях."],
    }),
  ],
  "copyright-and-hearing": [
    "bars set=decibels",
    closer(
      `**Who owned "Happy Birthday"?** The tune of "Happy Birthday to You" comes from a children's song, "Good Morning to All", published by two sisters, **Mildred and Patty Hill**, in 1893. For decades a music company claimed to own the copyright of "Happy Birthday" and collected about two million dollars a year from films and shows that used it. That is why restaurants on TV often sang strange birthday songs. In 2015 a court in the USA ruled that the company's claim was not valid, and the song is now free for everyone.

**The loudest band in the world.** In 1976 the British rock band **The Who** played a concert in London so loud that the sound measured **126 decibels** thirty-two metres from the stage, and they entered the Guinness Book of Records. Years later the band's guitarist Pete Townshend spoke openly about the price: damaged hearing and a constant ringing in his ears. He urged young people to protect their ears, especially with headphones.`,
      `**Ո՞ւմ էր պատկանում «Happy Birthday»-ը։** «Happy Birthday to You» երգի մեղեդին գալիս է «Good Morning to All» մանկական երգից, որը 1893 թվականին հրատարակել էին երկու քույր՝ **Միլդրեդ և Փեթի Հիլլերը**։ Տասնամյակներ շարունակ մի երաժշտական ընկերություն պնդում էր, որ իրեն է պատկանում «Happy Birthday»-ի հեղինակային իրավունքը, և տարեկան մոտ երկու միլիոն դոլար էր հավաքում այն օգտագործող ֆիլմերից և շոուներից։ Ահա թե ինչու հեռուստատեսային ռեստորաններում հաճախ տարօրինակ ծննդյան երգեր էին երգում։ 2015 թվականին ԱՄՆ-ի դատարանը որոշեց, որ ընկերության պահանջն անվավեր է, և երգն այժմ ազատ է բոլորի համար։

**Աշխարհի ամենաաղմկոտ խումբը։** 1976 թվականին բրիտանական The Who ռոք խումբը Լոնդոնում այնքան բարձր համերգ տվեց, որ բեմից երեսուներկու մետր հեռավորության վրա ձայնը հասավ **126 դեցիբելի**, և նրանք մտան Գինեսի ռեկորդների գիրք։ Տարիներ անց խմբի կիթառահար Փիթ Թաունշենդը բացահայտ խոսում էր դրա գնի մասին՝ վնասված լսողություն և անընդհատ զնգոց ականջներում։ Նա կոչ էր անում երիտասարդներին պաշտպանել իրենց ականջները, հատկապես ականջակալներով լսելիս։`,
      `**Кому принадлежала «Happy Birthday»?** Мелодия «Happy Birthday to You» взята из детской песни «Good Morning to All», которую в 1893 году издали две сестры — **Милдред и Пэтти Хилл**. Десятилетиями одна музыкальная компания утверждала, что владеет авторскими правами на «Happy Birthday», и получала около двух миллионов долларов в год от фильмов и шоу, где она звучала. Вот почему в ресторанах на экране часто пели странные песни ко дню рождения. В 2015 году суд в США решил, что притязания компании недействительны, и теперь песня свободна для всех.

**Самая громкая группа в мире.** В 1976 году британская рок-группа The Who дала в Лондоне концерт такой громкости, что в тридцати двух метрах от сцены звук достиг **126 децибел**, и группа попала в Книгу рекордов Гиннесса. Годы спустя гитарист группы Пит Таунсенд открыто говорил о цене: повреждённый слух и постоянный звон в ушах. Он призывал молодых людей беречь уши, особенно в наушниках.`,
    ),
    ask(3, {
      en: ["Above what loudness can long listening damage your hearing?", ["30 dB", "60 dB", "85 dB"], "Sounds above about 85 dB, heard for a long time, can harm the hair cells of the inner ear, which do not grow back."],
      hy: ["Ո՞ր ուժգնությունից բարձր երկար լսելը կարող է վնասել լսողությունը։", ["30 դԲ", "60 դԲ", "85 դԲ"], "Մոտ 85 դԲ-ից բարձր ձայներն երկար լսելիս կարող են վնասել ներքին ականջի մազիկավոր բջիջները, որոնք չեն վերականգնվում։"],
      ru: ["Выше какой громкости долгое прослушивание может повредить слух?", ["30 дБ", "60 дБ", "85 дБ"], "Звуки громче примерно 85 дБ при долгом воздействии повреждают волосковые клетки внутреннего уха, а они не восстанавливаются."],
    }),
  ],
};
