import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade3: VisualMap[number] = {
  "major-and-minor": [
    "piano scale=major",
    closer(
      `**Same keys, different home.** Look at the keyboard: the C major scale uses only the white keys, from C to C. The A minor scale also uses only the white keys, but it starts and ends on A. The notes are exactly the same; only the **home note**, the tonic, has moved. Because they share their notes, musicians call C major and A minor **relative keys**: like two cousins living in the same house.

**A happy ending for a sad song.** Four hundred years ago many composers had a habit: a piece written in minor would end on a **major** chord. The last chord suddenly turns bright, like the sun coming out at the very end of a rainy day. Nobody is quite sure why, but in 1767 the writer Jean-Jacques Rousseau gave the trick a name that is still used: the **Picardy third**, after a region of France.`,
      `**Նույն ստեղները, տարբեր տուն։** Նայի՛ր ստեղնաշարին․ դո մաժոր ձայնաշարն օգտագործում է միայն սպիտակ ստեղները՝ դո-ից դո։ Լյա մինոր ձայնաշարը նույնպես օգտագործում է միայն սպիտակ ստեղները, բայց սկսվում և ավարտվում է լյա-ով։ Նոտաները ճիշտ նույնն են, տեղափոխվել է միայն **տնային նոտան**՝ տոնիկան։ Քանի որ նրանք ընդհանուր նոտաներ ունեն, երաժիշտները դո մաժորն ու լյա մինորը կոչում են **զուգահեռ տոնայնություններ**՝ ինչպես նույն տանն ապրող երկու զարմիկներ։

**Ուրախ վերջաբան տխուր երգի համար։** Չորս հարյուր տարի առաջ շատ կոմպոզիտորներ մի սովորություն ունեին․ մինորով գրված ստեղծագործությունն ավարտում էին **մաժոր** ակորդով։ Վերջին ակորդը հանկարծ պայծառանում է, ինչպես արևը, որ դուրս է գալիս անձրևոտ օրվա հենց վերջում։ Ոչ ոք հստակ չգիտի՝ ինչու, բայց 1767 թվականին գրող Ժան-Ժակ Ռուսոն այդ հնարքին անուն տվեց, որն այսօր էլ գործածվում է՝ **պիկարդիական տերցիա**՝ Ֆրանսիայի մի մարզի անունով։`,
      `**Те же клавиши, другой дом.** Посмотри на клавиатуру: гамма до мажор использует только белые клавиши, от до до до. Гамма ля минор тоже использует только белые клавиши, но начинается и заканчивается на ля. Ноты совершенно те же, переехала только **главная нота** — тоника. Раз у них общие ноты, музыканты называют до мажор и ля минор **параллельными тональностями**: как двоюродные братья, живущие в одном доме.

**Счастливый конец для грустной песни.** Четыреста лет назад у многих композиторов была привычка: пьесу, написанную в миноре, они заканчивали **мажорным** аккордом. Последний аккорд вдруг становится светлым, как солнце, выглянувшее в самом конце дождливого дня. Никто точно не знает почему, но в 1767 году писатель Жан-Жак Руссо дал этому приёму название, которое используют до сих пор: **пикардийская терция**, по имени области во Франции.`,
    ),
    ask(2, {
      en: ["What do C major and A minor have in common?", ["The same tonic", "The same notes", "The same tempo"], "Both use only the white keys; only the home note is different: C in one, A in the other."],
      hy: ["Ի՞նչ ընդհանուր բան ունեն դո մաժորը և լյա մինորը։", ["Նույն տոնիկան", "Նույն նոտաները", "Նույն տեմպը"], "Երկուսն էլ օգտագործում են միայն սպիտակ ստեղները, տարբեր է միայն տնային նոտան՝ մեկում դո, մյուսում լյա։"],
      ru: ["Что общего у до мажора и ля минора?", ["Одна тоника", "Одни и те же ноты", "Один темп"], "Оба используют только белые клавиши; отличается только главная нота: в одном до, в другом ля."],
    }),
  ],
  "melody-and-accompaniment": [
    "piano mode=melody tune=twinkle",
    closer(
      `**A melody from a dream.** One morning in 1965 Paul McCartney of the Beatles woke up with a complete tune in his head. He rushed to the piano and played it, but he was sure he must have heard it somewhere. For weeks he played it to friends and asked: "Is this somebody else's song?" Nobody knew it. Until he found the words, he sang it as "Scrambled eggs, oh my baby, how I love your legs". The finished song, **"Yesterday"**, became one of the most recorded songs ever.

**An accompaniment with a name.** About three hundred years ago an Italian composer, **Domenico Alberti**, liked to accompany his melodies with a chord broken into a rocking pattern: low, high, middle, high (do-sol-mi-sol). It was so handy that it became known as the **Alberti bass**. Mozart used it at the start of his famous easy Piano Sonata in C: the right hand sings, and the left hand rocks along underneath.`,
      `**Մեղեդի երազից։** 1965 թվականի մի առավոտ «Բիթլզ»-ի անդամ Փոլ Մաքքարթնին արթնացավ գլխում մի ամբողջական մեղեդի։ Նա վազեց դաշնամուրի մոտ և նվագեց այն, բայց համոզված էր, որ ինչ-որ տեղ արդեն լսել է։ Շաբաթներ շարունակ նա այն նվագում էր ընկերներին և հարցնում․ «Սա ուրիշի երգը չէ՞»։ Ոչ ոք չէր ճանաչում։ Մինչև բառերը գտնելը նա այն երգում էր «ձվածեղ» բառով։ Ավարտված երգը՝ **«Yesterday»**-ը («Երեկ»), դարձավ աշխարհում ամենաշատ ձայնագրված երգերից մեկը։

**Անուն ունեցող նվագակցություն։** Մոտ երեք հարյուր տարի առաջ իտալացի կոմպոզիտոր **Դոմենիկո Ալբերտին** սիրում էր իր մեղեդիներին նվագակցել ակորդով, որը տրոհում էր օրորվող պատկերի՝ ցածր, բարձր, միջին, բարձր (դո-սոլ-մի-սոլ)։ Դա այնքան հարմար էր, որ ստացավ **Ալբերտիի բաս** անունը։ Մոցարտն այն օգտագործել է իր հայտնի, հեշտ դո մաժոր դաշնամուրային սոնատի սկզբում․ աջ ձեռքն երգում է, իսկ ձախը ներքևում օրորվում է։`,
      `**Мелодия из сна.** Однажды утром в 1965 году Пол Маккартни из «Битлз» проснулся с готовой мелодией в голове. Он бросился к роялю и сыграл её, но был уверен, что где-то её уже слышал. Неделями он играл её друзьям и спрашивал: «Это не чужая песня?» Никто её не знал. Пока не нашлись слова, он пел её со словами «Яичница-болтунья». Готовая песня, **«Yesterday»** («Вчера»), стала одной из самых записываемых песен в мире.

**Аккомпанемент с именем.** Около трёхсот лет назад итальянский композитор **Доменико Альберти** любил сопровождать свои мелодии аккордом, разложенным в покачивающийся рисунок: низ, верх, середина, верх (до-соль-ми-соль). Это оказалось так удобно, что приём назвали **альбертиевыми басами**. Моцарт использовал его в начале своей знаменитой лёгкой фортепианной сонаты до мажор: правая рука поёт, а левая покачивается под ней.`,
    ),
    ask(1, {
      en: ["In a song, which part do we usually sing or whistle?", ["The melody", "The accompaniment", "The bass"], "The melody is the tune you can sing; the accompaniment supports it from below."],
      hy: ["Երգի ո՞ր մասն ենք սովորաբար երգում կամ սուլում։", ["Մեղեդին", "Նվագակցությունը", "Բասը"], "Մեղեդին այն է, ինչ կարելի է երգել, իսկ նվագակցությունը նրան ներքևից աջակցում է։"],
      ru: ["Какую часть песни мы обычно поём или насвистываем?", ["Мелодию", "Аккомпанемент", "Бас"], "Мелодию можно спеть, а аккомпанемент поддерживает её снизу."],
    }),
  ],
  "musical-form": [
    "diagram forms",
    closer(
      `**A letter found after forty years.** Beethoven's little piano piece **"Für Elise"** is a **rondo**: its famous opening tune (A) comes back three times, with two different episodes (B and C) in between. Beethoven wrote it in 1810 but never published it. It was found and printed only in 1867, forty years after his death. Nobody knows for sure who Elise was. Some think the man who copied it misread the name **Therese**, a pupil Beethoven had once hoped to marry.

**Music that reads the same backwards.** In 1772 Joseph Haydn wrote a symphony with a musical joke inside. Its minuet is played forwards, and then the second half is the first half played **backwards**, note by note, like the word "level" or "racecar". Musicians call it the "minuet in reverse". The form is a mirror, and the audience usually does not notice until someone tells them.`,
      `**Քառասուն տարի անց գտնված նամակ։** Բեթհովենի փոքրիկ դաշնամուրային պիեսը՝ **«Էլիզային»**, **ռոնդո** է․ նրա հայտնի սկզբնական մեղեդին (A) վերադառնում է երեք անգամ՝ արանքում երկու տարբեր դրվագով (B և C)։ Բեթհովենը գրել է այն 1810 թվականին, բայց երբեք չի հրատարակել։ Այն գտնվել և տպագրվել է միայն 1867 թվականին՝ նրա մահից քառասուն տարի անց։ Ոչ ոք հաստատ չգիտի, թե ով էր Էլիզան։ Ոմանք կարծում են, որ այն արտագրողը սխալ է կարդացել **Թերեզա** անունը․ այդպես էր կոչվում Բեթհովենի աշակերտուհին, ում հետ նա ժամանակին հույս ուներ ամուսնանալ։

**Երաժշտություն, որը հակառակից նույնն է հնչում։** 1772 թվականին Յոզեֆ Հայդնը սիմֆոնիա գրեց, որի մեջ երաժշտական կատակ կա։ Նրա մենուետը նվագվում է սկզբից, իսկ հետո երկրորդ կեսն առաջին կեսն է՝ նվագված **հակառակ ուղղությամբ**, նոտա առ նոտա, ինչպես «կազակ» բառը։ Երաժիշտներն այն կոչում են «հակառակ մենուետ»։ Ձևը հայելի է, և հանդիսատեսը սովորաբար չի նկատում, մինչև որևէ մեկը չասի։`,
      `**Письмо, найденное через сорок лет.** Маленькая фортепианная пьеса Бетховена **«К Элизе»** — это **рондо**: её знаменитая начальная мелодия (A) возвращается три раза, а между ними звучат два разных эпизода (B и C). Бетховен написал её в 1810 году, но так и не издал. Её нашли и напечатали только в 1867 году, через сорок лет после его смерти. Никто точно не знает, кто такая Элиза. Некоторые думают, что переписчик неверно прочитал имя **Тереза**: так звали ученицу, на которой Бетховен когда-то надеялся жениться.

**Музыка, которая читается одинаково задом наперёд.** В 1772 году Йозеф Гайдн написал симфонию с музыкальной шуткой внутри. Её менуэт звучит сначала вперёд, а затем вторая половина — это первая, сыгранная **задом наперёд**, нота за нотой, как слово «шалаш». Музыканты называют его «менуэтом наоборот». Форма похожа на зеркало, и слушатели обычно не замечают этого, пока им не расскажут.`,
    ),
    ask(3, {
      en: ["Which plan shows a rondo?", ["A B", "A B A", "A B A C A"], "In a rondo the main part A keeps coming back between new episodes B and C."],
      hy: ["Ո՞ր պլանն է ցույց տալիս ռոնդոն։", ["A B", "A B A", "A B A C A"], "Ռոնդոյում գլխավոր A մասն անընդհատ վերադառնում է նոր B և C դրվագների միջև։"],
      ru: ["Какой план показывает рондо?", ["A B", "A B A", "A B A C A"], "В рондо главная часть A снова и снова возвращается между новыми эпизодами B и C."],
    }),
  ],
  variations: [
    "diagram varia",
    closer(
      `**Music for a sleepless count.** An old story says that a Russian ambassador in Germany, **Count Keyserlingk**, could not sleep at night. He asked Johann Sebastian Bach for music that his young harpsichordist, **Johann Gottlieb Goldberg**, could play to him in the dark. Bach wrote one gentle theme followed by **30 variations**. Today they are called the **Goldberg Variations**. Historians are not sure the story is true, but the music is real, and pianists still play all thirty in a row.

**Turn it upside down.** In 1934 Sergei Rachmaninoff wrote 24 variations on a lively theme by the violinist Paganini. For the 18th variation he did something clever: he turned the theme **upside down**, so that every step up became a step down, and slowed it right down. The quick, playful tune became a broad, tender melody, the most famous part of the whole piece. Rachmaninoff joked that he had written it to please his agent.`,
      `**Երաժշտություն անքուն կոմսի համար։** Մի հին պատմություն ասում է, որ Գերմանիայում ռուս դեսպան **կոմս Կայզերլինգը** գիշերները չէր կարողանում քնել։ Նա Յոհան Սեբաստիան Բախից խնդրեց երաժշտություն, որն իր երիտասարդ կլավեսինահարը՝ **Յոհան Գոթլիբ Գոլդբերգը**, կարող էր նվագել նրա համար մթության մեջ։ Բախը գրեց մեկ մեղմ թեմա և **30 վարիացիա**։ Այսօր դրանք կոչվում են **Գոլդբերգյան վարիացիաներ**։ Պատմաբանները վստահ չեն, որ պատմությունը ճիշտ է, բայց երաժշտությունն իրական է, և դաշնակահարներն այսօր էլ նվագում են բոլոր երեսունը՝ անընդմեջ։

**Շրջի՛ր գլխիվայր։** 1934 թվականին Սերգեյ Ռախմանինովը 24 վարիացիա գրեց ջութակահար Պագանինիի աշխույժ թեմայի վրա։ 18-րդ վարիացիայում նա խելացի բան արեց․ թեման շրջեց **գլխիվայր**, այնպես որ ամեն վեր քայլը դարձավ վար քայլ, և խիստ դանդաղեցրեց այն։ Արագ, խաղացկուն մեղեդին դարձավ լայն, քնքուշ երգ՝ ամբողջ ստեղծագործության ամենահայտնի մասը։ Ռախմանինովը կատակում էր, թե այն գրել է իր գործակալին հաճոյանալու համար։`,
      `**Музыка для бессонного графа.** Старая история рассказывает, что русский посланник в Германии, **граф Кайзерлинг**, не мог спать по ночам. Он попросил Иоганна Себастьяна Баха написать музыку, которую его юный клавесинист **Иоганн Готлиб Гольдберг** мог бы играть ему в темноте. Бах написал одну нежную тему и **30 вариаций**. Сегодня их называют **Гольдберг-вариациями**. Историки не уверены, что история правдива, но музыка настоящая, и пианисты до сих пор играют все тридцать подряд.

**Переверни вверх ногами.** В 1934 году Сергей Рахманинов написал 24 вариации на живую тему скрипача Паганини. В 18-й вариации он сделал хитрую вещь: перевернул тему **вверх ногами**, так что каждый шаг вверх стал шагом вниз, и сильно замедлил её. Быстрый, озорной мотив превратился в широкую, нежную мелодию — самую знаменитую часть всего произведения. Рахманинов шутил, что написал её, чтобы угодить своему импресарио.`,
    ),
    ask(2, {
      en: ["What stays the same in every variation?", ["The tempo", "The theme can still be recognised", "The instrument"], "Tempo, mode, rhythm or instrument may change, but you can always recognise the theme."],
      hy: ["Ի՞նչն է նույնը մնում ամեն վարիացիայում։", ["Տեմպը", "Թեման դեռ կարելի է ճանաչել", "Գործիքը"], "Տեմպը, լադը, ռիթմը կամ գործիքը կարող են փոխվել, բայց թեման միշտ կարելի է ճանաչել։"],
      ru: ["Что остаётся неизменным в каждой вариации?", ["Темп", "Тему всё ещё можно узнать", "Инструмент"], "Темп, лад, ритм или инструмент могут меняться, но тему всегда можно узнать."],
    }),
  ],
  "symphony-orchestra": [
    "diagram orchestra",
    closer(
      `**Why the oboe goes first.** Before a concert you hear the whole orchestra tuning: a cloud of the same note. It starts with one player, the **oboist**, who plays a long A. The oboe's sound is clear and steady and cuts through the other instruments, and an oboe is hard to retune in a hurry, so everyone else tunes to it. In most orchestras that A vibrates **440 times a second**, though some orchestras like it a little higher.

**A symphony of a thousand.** Most symphonies need fifty to a hundred musicians. When Gustav Mahler's **Symphony No. 8** was first performed in Munich in 1910, there were more than **a thousand** people on the stage: a huge orchestra, eight solo singers and several choirs, including a choir of children. The concert organiser called it the "Symphony of a Thousand", and the name stuck, even though Mahler did not like it.`,
      `**Ինչո՞ւ է հոբոյն առաջինը։** Համերգից առաջ լսում ես, թե ինչպես է ամբողջ նվագախումբը լարվում․ նույն նոտայի մի ամպ։ Այն սկսվում է մեկ նվագողից՝ **հոբոյահարից**, որը նվագում է երկար լյա։ Հոբոյի ձայնը պարզ է ու կայուն և անցնում է մյուս գործիքների միջով, իսկ հոբոյը դժվար է արագ վերալարել, ուստի մյուս բոլորը լարվում են նրա ձայնով։ Նվագախմբերի մեծ մասում այդ լյա-ն թրթռում է **վայրկյանում 440 անգամ**, թեև որոշ նվագախմբեր այն մի փոքր ավելի բարձր են սիրում։

**Հազարի սիմֆոնիա։** Սիմֆոնիաների մեծ մասի համար հարկավոր է հիսունից հարյուր երաժիշտ։ Երբ 1910 թվականին Մյունխենում առաջին անգամ կատարվեց Գուստավ Մալերի **Ութերորդ սիմֆոնիան**, բեմում **հազարից ավելի** մարդ կար․ հսկայական նվագախումբ, ութ մեներգիչ և մի քանի երգչախումբ, այդ թվում՝ մանկական։ Համերգի կազմակերպիչն այն կոչեց «Հազարի սիմֆոնիա», և անունը մնաց, թեև Մալերին այն դուր չէր գալիս։`,
      `**Почему гобой первый.** Перед концертом слышно, как настраивается весь оркестр: облако одной и той же ноты. Начинает один музыкант — **гобоист**, который играет долгое ля. Звук гобоя чистый и устойчивый, он прорезает другие инструменты, а быстро перестроить гобой трудно, поэтому все остальные настраиваются по нему. В большинстве оркестров это ля колеблется **440 раз в секунду**, хотя некоторые оркестры любят чуть повыше.

**Симфония тысячи участников.** Для большинства симфоний нужно от пятидесяти до ста музыкантов. Когда в 1910 году в Мюнхене впервые исполнили **Восьмую симфонию** Густава Малера, на сцене было больше **тысячи** человек: огромный оркестр, восемь солистов и несколько хоров, в том числе детский. Устроитель концерта назвал её «Симфонией тысячи участников», и название прижилось, хотя самому Малеру оно не нравилось.`,
    ),
    ask(3, {
      en: ["Which section sits closest to the audience?", ["Brass", "Percussion", "Strings"], "The strings, the largest section, sit in front; brass and percussion are at the back because they are loud."],
      hy: ["Ո՞ր խումբն է նստած հանդիսատեսին ամենամոտ։", ["Պղնձյա փողայինները", "Հարվածայինները", "Լարայինները"], "Լարայինները՝ ամենամեծ խումբը, նստած են առջևում, իսկ պղնձյա փողայիններն ու հարվածայինները՝ հետևում, քանի որ ուժեղ են հնչում։"],
      ru: ["Какая группа сидит ближе всех к зрителям?", ["Медные духовые", "Ударные", "Струнные"], "Струнные, самая большая группа, сидят впереди; медные и ударные — сзади, потому что они громкие."],
    }),
  ],
  "voices-and-choir": [
    "diagram voices",
    closer(
      `**The highest notes in opera.** In Mozart's opera **"The Magic Flute"** (1791) the Queen of the Night sings a furious aria that climbs to a high **F**, more than two octaves above middle C. Very few sopranos in the world can sing it cleanly, and those who can are famous for it. Mozart wrote the part for his sister-in-law, **Josepha Hofer**, who had an unusually high voice.

**One singer, two notes.** In Tuva, a republic in the mountains of southern Siberia, singers have a skill that sounds impossible: **throat singing**. One person sings a low, buzzing note and, at the same time, a high, whistling melody floating above it. The trick is to shape the mouth and throat so that one hidden part of the sound, an overtone, becomes loud enough to hear on its own. Herders say they learned it by listening to wind, water and animals.`,
      `**Օպերայի ամենաբարձր նոտաները։** Մոցարտի **«Կախարդական սրինգ»** օպերայում (1791) Գիշերվա թագուհին երգում է կատաղի արիա, որը բարձրանում է մինչև բարձր **ֆա**՝ առաջին օկտավայի դո-ից ավելի քան երկու օկտավա բարձր։ Աշխարհում շատ քիչ սոպրանոներ կարող են այն մաքուր երգել, և նրանք, ովքեր կարող են, դրանով են հայտնի։ Մոցարտն այդ դերը գրել էր իր քենու՝ **Յոզեֆա Հոֆերի** համար, որն անսովոր բարձր ձայն ուներ։

**Մեկ երգիչ՝ երկու նոտա։** Տուվայում՝ Հարավային Սիբիրի լեռներում գտնվող հանրապետությունում, երգիչներն ունեն մի հմտություն, որն անհնար է թվում՝ **կոկորդային երգեցողություն**։ Մեկ մարդն երգում է ցածր, բզզացող նոտա և միաժամանակ դրա վերևում լողացող բարձր, սուլող մեղեդի։ Գաղտնիքը բերանն ու կոկորդն այնպես ձևավորելն է, որ ձայնի մի թաքնված մասը՝ օբերտոնը, այնքան ուժեղանա, որ առանձին լսվի։ Հովիվներն ասում են, որ այն սովորել են՝ լսելով քամին, ջուրը և կենդանիներին։`,
      `**Самые высокие ноты в опере.** В опере Моцарта **«Волшебная флейта»** (1791) Царица ночи поёт яростную арию, которая поднимается до высокого **фа** третьей октавы, больше чем на две октавы выше до первой октавы. Очень немногие сопрано в мире могут спеть её чисто, и те, кто может, этим знамениты. Моцарт написал эту партию для своей свояченицы **Йозефы Хофер**, у которой был необычайно высокий голос.

**Один певец — две ноты.** В Туве, республике в горах Южной Сибири, певцы владеют искусством, которое кажется невозможным: **горловым пением**. Один человек поёт низкую жужжащую ноту и одновременно высокую свистящую мелодию, парящую над ней. Секрет в том, чтобы так сложить рот и горло, что одна скрытая часть звука, обертон, становится достаточно громкой, чтобы её было слышно отдельно. Пастухи говорят, что научились этому, слушая ветер, воду и животных.`,
    ),
    ask(1, {
      en: ["Which is the lowest voice in a choir?", ["Bass", "Tenor", "Alto"], "Bass is the lowest men's voice; tenor is the high men's voice and alto the low women's voice."],
      hy: ["Ո՞րն է երգչախմբի ամենացածր ձայնը։", ["Բաս", "Տենոր", "Ալտ"], "Բասը տղամարդու ամենացածր ձայնն է, տենորը՝ տղամարդու բարձր ձայնը, ալտը՝ կանացի ցածր ձայնը։"],
      ru: ["Какой голос в хоре самый низкий?", ["Бас", "Тенор", "Альт"], "Бас — самый низкий мужской голос; тенор — высокий мужской, альт — низкий женский."],
    }),
  ],
  "armenian-dances": [
    "diagram dances",
    closer(
      `**A limping rhythm.** Most marches go ONE-two, ONE-two. The tamzara goes differently: its bar has **nine** short beats, grouped 2 + 2 + 2 + 3. Count it aloud: "one-two, one-two, one-two, one-two-three". The last group is a little longer, so the dance seems to take a small extra step, as if it were limping on purpose. Rhythms like this are common in the music of Armenia and its neighbours, and dancers feel them in their feet long before they learn to count them.

**A dance notebook.** How do you write down a dance? For many years the ethnographer **Srbuhi Lisitsian** travelled from village to village, asking old people to show the dances of their youth. She invented her own way of recording each movement on paper, step by step, and her books saved dozens of dances that might otherwise have been forgotten. Many folk ensembles still learn old dances from her notes.`,
      `**Կաղացող ռիթմ։** Քայլերգերի մեծ մասն այսպես է՝ ՄԵԿ-երկու, ՄԵԿ-երկու։ Թամզարան այլ կերպ է․ նրա տակտը **ինը** կարճ զարկ ունի՝ խմբավորված 2 + 2 + 2 + 3։ Հաշվի՛ր բարձրաձայն․ «մեկ-երկու, մեկ-երկու, մեկ-երկու, մեկ-երկու-երեք»։ Վերջին խումբը մի փոքր ավելի երկար է, ուստի պարը կարծես մի փոքր լրացուցիչ քայլ է անում, ինչպես դիտմամբ կաղալիս։ Այսպիսի ռիթմերը տարածված են Հայաստանի և նրա հարևանների երաժշտության մեջ, և պարողները դրանք զգում են ոտքերով շատ ավելի վաղ, քան սովորում են հաշվել։

**Պարի տետր։** Ինչպե՞ս գրի առնել պարը։ Երկար տարիներ ազգագրագետ **Սրբուհի Լիսիցյանը** գյուղից գյուղ էր շրջում և խնդրում տարեցներին ցույց տալ իրենց երիտասարդության պարերը։ Նա հորինեց յուրաքանչյուր շարժումը թղթի վրա քայլ առ քայլ գրանցելու իր եղանակը, և նրա գրքերը փրկեցին տասնյակ պարեր, որոնք այլապես կարող էին մոռացվել։ Շատ ժողովրդական համույթներ այսօր էլ հին պարերը սովորում են նրա գրառումներից։`,
      `**Хромающий ритм.** Большинство маршей звучит так: РАЗ-два, РАЗ-два. Тамзара устроена иначе: в её такте **девять** коротких долей, сгруппированных 2 + 2 + 2 + 3. Посчитай вслух: «раз-два, раз-два, раз-два, раз-два-три». Последняя группа чуть длиннее, поэтому танец словно делает маленький лишний шаг, как будто нарочно прихрамывает. Такие ритмы часто встречаются в музыке Армении и её соседей, и танцоры чувствуют их ногами задолго до того, как научатся их считать.

**Тетрадь танцев.** Как записать танец? Много лет этнограф **Србуи Лисициан** ездила из деревни в деревню и просила стариков показать танцы их молодости. Она придумала собственный способ записывать каждое движение на бумаге, шаг за шагом, и её книги спасли десятки танцев, которые иначе могли бы забыться. Многие народные ансамбли до сих пор разучивают старинные танцы по её записям.`,
    ),
    ask(2, {
      en: ["In which dance do dancers climb onto others' shoulders?", ["Kochari", "Berd", "Yarkhushta"], "Berd means \"fortress\": the dancers build a living tower on each other's shoulders."],
      hy: ["Ո՞ր պարում են պարողները բարձրանում ուրիշների ուսերին։", ["Քոչարի", "Բերդ", "Յարխուշտա"], "Բերդ պարում պարողներն իրար ուսերին կենդանի աշտարակ են կառուցում։"],
      ru: ["В каком танце танцоры встают на плечи другим?", ["Кочари", "Берд", "Ярхушта"], "Берд значит «крепость»: танцоры строят живую башню на плечах друг у друга."],
    }),
  ],
  "music-tells-stories": [
    "diagram peterwolf",
    closer(
      `**A tale for a children's theatre.** In 1936 **Natalia Sats**, who ran the Central Children's Theatre in Moscow, asked Sergei Prokofiev for a piece that would teach children the instruments of the orchestra. Prokofiev wrote both the story and the music of **"Peter and the Wolf"** himself, and finished the music in about a week. Since then famous actors, musicians and even politicians have recorded the narrator's part in dozens of languages.

**A barking viola.** Three hundred years ago Antonio Vivaldi published four violin concertos called **"The Four Seasons"**, and printed a little poem with each one telling what the music shows. In "Spring" you hear birds singing, a stream murmuring and a goatherd asleep in a meadow. Under the sleeping goatherd the **viola** plays two loud notes again and again: Vivaldi wrote in the score that this is his **dog barking**.`,
      `**Հեքիաթ մանկական թատրոնի համար։** 1936 թվականին Մոսկվայի Կենտրոնական մանկական թատրոնի ղեկավար **Նատալյա Սացը** Սերգեյ Պրոկոֆևից խնդրեց մի ստեղծագործություն, որն երեխաներին կծանոթացներ նվագախմբի գործիքներին։ Պրոկոֆևն ինքն է գրել **«Պետյան և գայլը»** հեքիաթի և՛ պատմությունը, և՛ երաժշտությունը, իսկ երաժշտությունն ավարտել է մոտ մեկ շաբաթում։ Այդ ժամանակից ի վեր հայտնի դերասաններ, երաժիշտներ և նույնիսկ քաղաքական գործիչներ տասնյակ լեզուներով ձայնագրել են պատմողի դերը։

**Հաչող ալտ։** Երեք հարյուր տարի առաջ Անտոնիո Վիվալդին հրատարակեց ջութակի չորս կոնցերտ՝ **«Տարվա եղանակները»** անունով, և յուրաքանչյուրի հետ տպեց մի փոքրիկ բանաստեղծություն այն մասին, թե ինչ է պատկերում երաժշտությունը։ «Գարնանը» լսվում է թռչունների երգը, առվակի կարկաչը և մարգագետնում քնած այծարածը։ Քնած այծարածի տակ **ալտը** նորից ու նորից նվագում է երկու ուժեղ նոտա․ Վիվալդին պարտիտուրում գրել է, որ դա նրա **հաչող շունն** է։`,
      `**Сказка для детского театра.** В 1936 году **Наталия Сац**, руководившая Центральным детским театром в Москве, попросила Сергея Прокофьева написать произведение, которое познакомило бы детей с инструментами оркестра. Прокофьев сам написал и сюжет, и музыку **«Пети и волка»**, а музыку закончил примерно за неделю. С тех пор партию чтеца записывали известные актёры, музыканты и даже политики на десятках языков.

**Лающий альт.** Триста лет назад Антонио Вивальди издал четыре скрипичных концерта под названием **«Времена года»** и к каждому напечатал небольшое стихотворение о том, что изображает музыка. В «Весне» слышно пение птиц, журчание ручья и пастуха, заснувшего на лугу. Под спящим пастухом **альт** снова и снова играет две громкие ноты: Вивальди написал в партитуре, что это **лает его собака**.`,
    ),
    ask(3, {
      en: ["In \"Peter and the Wolf\", which instrument plays the duck?", ["Flute", "Clarinet", "Oboe"], "The oboe's slightly nasal voice is the duck; the flute is the bird and the clarinet the cat."],
      hy: ["«Պետյան և գայլը» հեքիաթում ո՞ր գործիքն է նվագում բադին։", ["Ֆլեյտան", "Կլառնետը", "Հոբոյը"], "Հոբոյի մի փոքր քթային ձայնը բադն է, ֆլեյտան՝ թռչնակը, կլառնետը՝ կատուն։"],
      ru: ["Какой инструмент играет утку в «Пете и волке»?", ["Флейта", "Кларнет", "Гобой"], "Чуть гнусавый голос гобоя — утка; флейта — птичка, кларнет — кошка."],
    }),
  ],
};
