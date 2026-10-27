import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade6: VisualMap[number] = {
  "middle-ages-and-renaissance": [
    "timeline set=eras",
    closer(
      `**An abbess who heard music in visions.** Most medieval composers are unknown: monks did not sign their chants. One famous exception is **Hildegard of Bingen** (1098–1179), the abbess of a convent on the Rhine. She wrote about seventy songs for her nuns, a musical play, and books on medicine, plants and her visions. Her melodies soar much higher and wider than ordinary chant. In 2012 she was declared a Doctor of the Church, and her music is recorded and sung all over the world.

**The first printed music book.** For centuries every copy of a piece of music had to be written by hand, which took weeks. In 1501 in Venice the printer **Ottaviano Petrucci** published a book of about a hundred songs for several voices, printed with movable type. He passed each sheet through the press more than once: first the staff lines, then the notes, then the words. Music could now be copied in hundreds, and songs travelled across Europe.`,
      `**Տեսիլքներում երաժշտություն լսող վանամայրը։** Միջնադարյան կոմպոզիտորների մեծ մասն անհայտ է․ վանականները չէին ստորագրում իրենց երգերը։ Հայտնի բացառություններից մեկը **Հիլդեգարդ Բինգենցին** է (1098–1179)՝ Հռենոսի ափին գտնվող կուսանոցի վանամայրը։ Նա մոտ յոթանասուն երգ գրեց իր միանձնուհիների համար, մի երաժշտական ներկայացում, ինչպես նաև գրքեր բժշկության, բույսերի և իր տեսիլքների մասին։ Նրա մեղեդիները սավառնում են սովորական երգեցողությունից շատ ավելի բարձր և լայն։ 2012 թվականին նա հռչակվեց Եկեղեցու վարդապետ, և նրա երաժշտությունը ձայնագրվում և երգվում է ամբողջ աշխարհում։

**Առաջին տպագիր երաժշտական գիրքը։** Դարեր շարունակ երաժշտական ստեղծագործության յուրաքանչյուր օրինակ պետք է գրվեր ձեռքով, ինչը շաբաթներ էր տևում։ 1501 թվականին Վենետիկում տպագրիչ **Օտտավիանո Պետրուչին** հրատարակեց մի քանի ձայնի համար մոտ հարյուր երգ պարունակող գիրք՝ տպագրված շարժական տառերով։ Նա յուրաքանչյուր թերթ մամլիչով անցկացնում էր մեկից ավելի անգամ՝ սկզբում հնգագծի գծերը, հետո նոտաները, հետո բառերը։ Երաժշտությունն այժմ կարելի էր բազմացնել հարյուրներով, և երգերը տարածվեցին Եվրոպայով մեկ։`,
      `**Аббатиса, слышавшая музыку в видениях.** Большинство средневековых композиторов неизвестны: монахи не подписывали свои песнопения. Знаменитое исключение — **Хильдегарда Бингенская** (1098–1179), аббатиса монастыря на Рейне. Она написала около семидесяти песнопений для своих монахинь, музыкальную пьесу и книги о медицине, растениях и своих видениях. Её мелодии взлетают гораздо выше и шире обычного хорала. В 2012 году её провозгласили Учителем Церкви, а её музыку записывают и поют по всему миру.

**Первая печатная нотная книга.** Веками каждую копию музыкального произведения приходилось писать от руки, на это уходили недели. В 1501 году в Венеции печатник **Оттавиано Петруччи** издал сборник примерно из ста многоголосных песен, отпечатанный подвижными литерами. Каждый лист он пропускал через пресс несколько раз: сначала линейки, потом ноты, потом слова. Теперь музыку можно было тиражировать сотнями, и песни разошлись по всей Европе.`,
    ),
    ask(2, {
      en: ["What is polyphony, which flourished in the Renaissance?", ["Singing in unison", "Several independent melodies at once", "A melody with drums"], "Polyphony means \"many voices\": several independent melodies sounding together."],
      hy: ["Ի՞նչ է բազմաձայնությունը, որը ծաղկեց Վերածննդի ժամանակ։", ["Միաձայն երգեցողություն", "Միաժամանակ մի քանի անկախ մեղեդի", "Մեղեդի թմբուկներով"], "Բազմաձայնություն՝ մի քանի անկախ մեղեդի, որոնք հնչում են միասին։"],
      ru: ["Что такое полифония, расцветшая в эпоху Возрождения?", ["Пение в унисон", "Несколько независимых мелодий одновременно", "Мелодия с барабанами"], "Полифония — «многоголосие»: несколько независимых мелодий звучат вместе."],
    }),
  ],
  baroque: [
    "diagram harpsi",
    closer(
      `**An orchestra of orphan girls.** For most of his life Vivaldi taught music at the **Ospedale della Pietà** in Venice, a home for abandoned children. The girls who showed talent were trained as singers and players, and their orchestra became one of the most famous in Europe. Visitors came from far away to hear them, but saw almost nothing: the girls played in a gallery behind an iron grille. Many of Vivaldi's 500 concertos were written for them.

**Music on the river.** On a summer evening in 1717 King George I of Britain sailed up the River Thames in London on a royal barge. Beside him, on another boat, about fifty musicians played new music by **Handel**. People crowded along the banks and filled the river with boats to listen. The king liked it so much that he ordered the whole hour-long performance to be played **three times**. We still call it the **"Water Music"**.`,
      `**Որբ աղջիկների նվագախումբ։** Իր կյանքի մեծ մասը Վիվալդին երաժշտություն էր դասավանդում Վենետիկի **Օսպեդալե դելլա Պիետայում**՝ լքված երեխաների ապաստարանում։ Տաղանդ ցուցաբերած աղջիկներին սովորեցնում էին երգել և նվագել, և նրանց նվագախումբը դարձավ Եվրոպայի ամենահայտնիներից մեկը։ Այցելուները գալիս էին հեռվից՝ նրանց լսելու, բայց գրեթե ոչինչ չէին տեսնում․ աղջիկները նվագում էին պատկերասրահում՝ երկաթե վանդակաճաղի հետևում։ Վիվալդիի 500 կոնցերտներից շատերը գրված են նրանց համար։

**Երաժշտություն գետի վրա։** 1717 թվականի ամառային մի երեկո Բրիտանիայի թագավոր Գեորգ I-ը արքայական նավակով բարձրանում էր Լոնդոնի Թեմզա գետով։ Նրա կողքին՝ մեկ այլ նավակում, մոտ հիսուն երաժիշտ նվագում էին **Հենդելի** նոր երաժշտությունը։ Մարդիկ խռնվել էին ափերին և նավակներով լցրել էին գետը՝ լսելու համար։ Թագավորին այն այնքան դուր եկավ, որ նա հրամայեց ամբողջ մեկժամյա կատարումը նվագել **երեք անգամ**։ Այն մինչ օրս կոչում ենք **«Երաժշտություն ջրի վրա»**։`,
      `**Оркестр девочек-сирот.** Большую часть жизни Вивальди преподавал музыку в венецианском **Оспедале делла Пьета** — приюте для брошенных детей. Одарённых девочек учили петь и играть, и их оркестр стал одним из самых знаменитых в Европе. Приезжие ехали издалека, чтобы их послушать, но почти ничего не видели: девочки играли на галерее за железной решёткой. Многие из 500 концертов Вивальди написаны для них.

**Музыка на реке.** Летним вечером 1717 года король Великобритании Георг I плыл на королевской барке вверх по Темзе в Лондоне. Рядом, на другой лодке, около пятидесяти музыкантов играли новую музыку **Генделя**. Люди толпились на берегах и заполнили реку лодками, чтобы послушать. Королю так понравилось, что он велел сыграть всё часовое исполнение **три раза**. Мы до сих пор называем эту музыку **«Музыкой на воде»**.`,
    ),
    ask(1, {
      en: ["Why can't a harpsichord play louder or softer by touch?", ["A quill plucks the string the same way every time", "It has no strings", "Its hammers are too heavy"], "However hard you press, the plectrum plucks the string alike; the piano's hammers can strike softly or hard."],
      hy: ["Ինչո՞ւ կլավեսինը չի կարող հպումով ավելի ուժեղ կամ թույլ նվագել։", ["Փետուրը լարը միշտ նույն կերպ է պոկում", "Նա լարեր չունի", "Նրա մուրճիկները շատ ծանր են"], "Ինչքան էլ ուժեղ սեղմես, մեդիատորը լարը նույն կերպ է պոկում, իսկ դաշնամուրի մուրճիկները կարող են հարվածել և՛ մեղմ, և՛ ուժեղ։"],
      ru: ["Почему клавесин не может играть громче или тише от силы нажатия?", ["Перо каждый раз щиплет струну одинаково", "У него нет струн", "Его молоточки слишком тяжёлые"], "Как ни нажимай, плектр щиплет струну одинаково; а молоточки фортепиано могут ударять и мягко, и сильно."],
    }),
  ],
  "classicism-and-sonata-form": [
    "diagram sonata",
    closer(
      `**A symphony that asked to go home.** Haydn's orchestra spent the summer of 1772 at Prince Esterházy's palace far from Vienna, and the stay dragged on and on. The musicians missed their families, who were not allowed to come. So Haydn wrote a symphony with an unusual ending: in the last movement the players stop one by one, blow out the candles on their music stands and leave, until only two violins are left. The prince understood the hint, and the next day the court returned home. It is called the **"Farewell" Symphony**.

**Two friends.** Haydn was twenty-four years older than Mozart, but they became close friends and sometimes played string quartets together. Mozart dedicated six quartets to Haydn, calling them the fruit of long and hard work. In 1785, after hearing them, Haydn told Mozart's father Leopold: "Before God and as an honest man, I tell you that your son is the **greatest composer** I know, in person or by name."`,
      `**Սիմֆոնիա, որը տուն գնալ էր խնդրում։** 1772 թվականի ամառը Հայդնի նվագախումբն անցկացնում էր Վիեննայից հեռու գտնվող իշխան Էստերհազիի պալատում, և այդ մնալը ձգվում էր ու ձգվում։ Երաժիշտները կարոտում էին իրենց ընտանիքներին, որոնց թույլ չէին տալիս գալ։ Ուստի Հայդնը սիմֆոնիա գրեց անսովոր ավարտով․ վերջին մասում նվագողները մեկ առ մեկ դադարում են, հանգցնում իրենց նոտակալների մոմերը և դուրս գալիս, մինչև որ մնում են միայն երկու ջութակ։ Իշխանը հասկացավ ակնարկը, և հաջորդ օրն արքունիքը վերադարձավ տուն։ Այն կոչվում է **«Հրաժեշտի» սիմֆոնիա**։

**Երկու ընկեր։** Հայդնը Մոցարտից քսանչորս տարով մեծ էր, բայց նրանք մտերիմ ընկերներ դարձան և երբեմն միասին լարային քառյակներ էին նվագում։ Մոցարտը վեց քառյակ նվիրեց Հայդնին՝ դրանք անվանելով երկար ու ծանր աշխատանքի պտուղ։ 1785 թվականին, դրանք լսելուց հետո, Հայդնն ասաց Մոցարտի հորը՝ Լեոպոլդին․ «Աստծո առջև և որպես ազնիվ մարդ ասում եմ ձեզ, որ ձեր որդին **ամենամեծ կոմպոզիտորն** է, որին ես ճանաչում եմ անձամբ կամ անունով»։`,
      `**Симфония, которая просилась домой.** Летом 1772 года оркестр Гайдна жил во дворце князя Эстерхази вдали от Вены, и пребывание всё затягивалось. Музыканты скучали по семьям, которым не разрешали приезжать. Тогда Гайдн написал симфонию с необычным концом: в последней части музыканты один за другим перестают играть, гасят свечи на пюпитрах и уходят, пока не остаются только две скрипки. Князь понял намёк, и на следующий день двор вернулся домой. Её называют **«Прощальной» симфонией**.

**Два друга.** Гайдн был на двадцать четыре года старше Моцарта, но они стали близкими друзьями и иногда вместе играли струнные квартеты. Моцарт посвятил Гайдну шесть квартетов, назвав их плодом долгого и упорного труда. В 1785 году, послушав их, Гайдн сказал отцу Моцарта Леопольду: «Перед Богом и как честный человек говорю вам: ваш сын — **величайший композитор** из всех, кого я знаю лично или по имени».`,
    ),
    ask(3, {
      en: ["In sonata form, which section breaks up the themes and moves through many keys?", ["Exposition", "Recapitulation", "Development"], "In the development the themes are changed, combined and taken through different keys."],
      hy: ["Սոնատային ձևում ո՞ր բաժինն է մասնատում թեմաները և անցնում բազմաթիվ տոնայնություններով։", ["Էքսպոզիցիան", "Ռեպրիզը", "Մշակումը"], "Մշակման մեջ թեմաները փոխվում են, համադրվում և տարվում տարբեր տոնայնություններով։"],
      ru: ["Какой раздел сонатной формы дробит темы и проводит их через много тональностей?", ["Экспозиция", "Реприза", "Разработка"], "В разработке темы изменяются, сталкиваются и проходят через разные тональности."],
    }),
  ],
  "romanticism-and-national-schools": [
    "timeline set=romantics",
    closer(
      `**A heart that went home.** Frédéric Chopin left Poland at twenty and never returned: he lived and died in Paris, where he was buried in 1849. But he had asked that his **heart** be taken back to his homeland. His sister Ludwika secretly carried it to Warsaw in a sealed jar, hidden under her clothes as she crossed the border. Today Chopin's heart rests in a pillar of the Holy Cross Church in Warsaw, and Poles still bring flowers there.

**Lisztomania.** Franz Liszt was the first musician to cause the kind of excitement we now see at pop concerts. When he played, women fainted, fought over his gloves and handkerchiefs and kept the stubs of his cigars as treasures. In 1844 the poet Heinrich Heine gave this craze a name: **"Lisztomania"**. Liszt was also the first pianist to give whole concerts alone, which he called "recitals", and to turn the piano sideways so the audience could see his profile.`,
      `**Սիրտ, որը տուն վերադարձավ։** Ֆրեդերիկ Շոպենը քսան տարեկանում լքեց Լեհաստանը և այլևս չվերադարձավ․ նա ապրեց և մահացավ Փարիզում, որտեղ թաղվեց 1849 թվականին։ Բայց նա խնդրել էր, որ իր **սիրտը** տարվի հայրենիք։ Նրա քույրը՝ Լյուդվիկան, այն գաղտնի տարավ Վարշավա՝ փակ սափորի մեջ, թաքցրած հագուստի տակ, սահմանն անցնելիս։ Այսօր Շոպենի սիրտը հանգչում է Վարշավայի Սուրբ Խաչ եկեղեցու սյուներից մեկում, և լեհերն այսօր էլ ծաղիկներ են բերում այնտեղ։

**Լիստոմանիա։** Ֆերենց Լիստն առաջին երաժիշտն էր, որն առաջացնում էր այնպիսի հուզմունք, ինչպիսին այժմ տեսնում ենք պոպ համերգներում։ Երբ նա նվագում էր, կանայք ուշաթափվում էին, կռվում նրա ձեռնոցների և թաշկինակների համար և նրա սիգարների մնացորդները պահում որպես գանձ։ 1844 թվականին բանաստեղծ Հայնրիխ Հայնեն այդ խենթությանն անուն տվեց՝ **«Լիստոմանիա»**։ Լիստը նաև առաջին դաշնակահարն էր, որը մենակ ամբողջական համերգներ էր տալիս, որոնք նա կոչեց «ռեսիթալներ», և դաշնամուրը կողքով շրջեց, որպեսզի հանդիսատեսը տեսնի իր դիմապատկերը։`,
      `**Сердце, вернувшееся домой.** Фредерик Шопен уехал из Польши в двадцать лет и больше не вернулся: он жил и умер в Париже, где и был похоронен в 1849 году. Но он просил, чтобы его **сердце** увезли на родину. Его сестра Людвика тайно отвезла его в Варшаву в запечатанном сосуде, спрятав под одеждой при переходе границы. Сегодня сердце Шопена покоится в колонне варшавского костёла Святого Креста, и поляки до сих пор приносят туда цветы.

**Листомания.** Ференц Лист первым из музыкантов вызывал такой восторг, какой мы теперь видим на поп-концертах. Когда он играл, женщины падали в обморок, дрались за его перчатки и платки и хранили окурки его сигар как сокровища. В 1844 году поэт Генрих Гейне дал этому помешательству название — **«листомания»**. Лист также первым из пианистов стал давать целые концерты в одиночку, назвав их «сольными концертами» (recitals), и первым развернул рояль боком, чтобы публика видела его профиль.`,
    ),
    ask(2, {
      en: ["What did the composers of the national schools build their music on?", ["Only church chant", "The songs, dances and history of their own people", "Music from other planets"], "Grieg, Dvořák and the Mighty Handful built national music on their people's songs, dances and history."],
      hy: ["Ինչի՞ վրա էին կառուցում իրենց երաժշտությունն ազգային դպրոցների կոմպոզիտորները։", ["Միայն եկեղեցական երգեցողության", "Իրենց ժողովրդի երգերի, պարերի և պատմության", "Այլ մոլորակների երաժշտության"], "Գրիգը, Դվորժակը և «Հզոր խմբակը» ազգային երաժշտությունը կառուցում էին իրենց ժողովրդի երգերի, պարերի և պատմության վրա։"],
      ru: ["На чём строили музыку композиторы национальных школ?", ["Только на церковном пении", "На песнях, танцах и истории своего народа", "На музыке других планет"], "Григ, Дворжак и «Могучая кучка» строили национальную музыку на песнях, танцах и истории своего народа."],
    }),
  ],
  "founders-armenian-classical": [
    "timeline set=armclassics",
    closer(
      `**An opera finished by a friend.** Alexander Spendiaryan worked on his opera **"Almast"**, based on a poem by Tumanyan, for many years, but he died in 1928 before he could complete it. His friend the composer **Maximilian Steinberg**, who like Spendiaryan had studied with Rimsky-Korsakov, finished the orchestration. "Almast" was staged in Moscow in 1930 and in 1933 opened the new opera house in Yerevan, which now bears Spendiaryan's name.

**Buried beside his theatre.** Spendiaryan never saw the Yerevan Opera House: it opened five years after his death. Yet he lies right beside it. His grave is in the garden of the opera theatre, close to the stage where his music is still performed. Next time you walk around the building on Freedom Square, look for the memorial among the trees.`,
      `**Ընկերոջ ավարտած օպերան։** Ալեքսանդր Սպենդիարյանն երկար տարիներ աշխատում էր Թումանյանի պոեմի հիման վրա գրված իր **«Ալմաստ»** օպերայի վրա, բայց մահացավ 1928 թվականին՝ չհասցնելով ավարտել այն։ Նրա ընկերը՝ կոմպոզիտոր **Մաքսիմիլիան Շտայնբերգը**, որը Սպենդիարյանի պես սովորել էր Ռիմսկի-Կորսակովի մոտ, ավարտեց գործիքավորումը։ «Ալմաստը» բեմադրվեց Մոսկվայում 1930 թվականին, իսկ 1933 թվականին բացեց Երևանի նոր օպերային թատրոնը, որն այժմ կրում է Սպենդիարյանի անունը։

**Թաղված իր թատրոնի կողքին։** Սպենդիարյանն երբեք չտեսավ Երևանի օպերային թատրոնը․ այն բացվեց նրա մահից հինգ տարի անց։ Եվ այնուամենայնիվ, նա հանգչում է հենց նրա կողքին։ Նրա շիրիմն օպերային թատրոնի պարտեզում է, այն բեմի մոտ, որտեղ նրա երաժշտությունն այսօր էլ հնչում է։ Հաջորդ անգամ, երբ շրջես Ազատության հրապարակի շենքի շուրջը, ծառերի մեջ փնտրի՛ր հուշարձանը։`,
      `**Опера, законченная другом.** Александр Спендиаров много лет работал над оперой **«Алмаст»** по поэме Туманяна, но умер в 1928 году, не успев её завершить. Его друг, композитор **Максимилиан Штейнберг**, который, как и Спендиаров, учился у Римского-Корсакова, закончил оркестровку. «Алмаст» поставили в Москве в 1930 году, а в 1933 году она открыла новый оперный театр в Ереване, который теперь носит имя Спендиарова.

**Похоронен рядом со своим театром.** Спендиаров так и не увидел Ереванского оперного театра: он открылся через пять лет после его смерти. И всё же композитор покоится совсем рядом. Его могила находится в саду оперного театра, недалеко от сцены, где до сих пор звучит его музыка. Когда в следующий раз будешь обходить здание на площади Свободы, поищи памятник среди деревьев.`,
    ),
    ask(1, {
      en: ["Who founded the music studio that grew into the Yerevan Conservatory?", ["Romanos Melikian", "Aram Khachaturian", "Tigran Chukhajian"], "In 1921 Romanos Melikian opened a music studio in Yerevan; two years later it became the Conservatory."],
      hy: ["Ո՞վ հիմնադրեց այն երաժշտական ստուդիան, որը վերածվեց Երևանի կոնսերվատորիայի։", ["Ռոմանոս Մելիքյանը", "Արամ Խաչատրյանը", "Տիգրան Չուխաջյանը"], "1921 թվականին Ռոմանոս Մելիքյանն Երևանում երաժշտական ստուդիա բացեց, որն երկու տարի անց դարձավ կոնսերվատորիա։"],
      ru: ["Кто основал музыкальную студию, из которой выросла Ереванская консерватория?", ["Романос Меликян", "Арам Хачатурян", "Тигран Чухаджян"], "В 1921 году Романос Меликян открыл в Ереване музыкальную студию; через два года она стала консерваторией."],
    }),
  ],
  "babajanyan-and-the-five": [
    "timeline set=five",
    closer(
      `**A concerto every trumpeter learns.** Alexander Arutiunian wrote his Trumpet Concerto in 1950, when he was thirty. It is one movement, about fifteen minutes long, with fanfares, a tender song and fast, dazzling passages full of Armenian melodic turns. The great Soviet trumpeter **Timofei Dokshizer** made it famous with his recordings, and today trumpet students from Tokyo to New York play it at exams and competitions. Few pieces by any 20th-century composer are played so often on their instrument.

**The best city on earth.** Arno Babajanian was a serious composer of trios and concertos, but millions of people knew him from his songs. In 1963 he wrote the bright, swinging **"The Best City on Earth"**, sung by the young star Muslim Magomayev, and it became one of the most popular songs in the Soviet Union. Babajanian liked to play his songs himself at the piano, and audiences loved his energy and his jazzy rhythms.`,
      `**Կոնցերտ, որը սովորում է յուրաքանչյուր շեփորահար։** Ալեքսանդր Հարությունյանն իր շեփորի կոնցերտը գրեց 1950 թվականին՝ երեսուն տարեկանում։ Այն մեկ մասից է, մոտ տասնհինգ րոպե տևողությամբ, ֆանֆարներով, քնքուշ երգով և արագ, շլացուցիչ հատվածներով՝ լի հայկական մեղեդային դարձվածքներով։ Մեծ խորհրդային շեփորահար **Տիմոֆեյ Դոկշիցերը** այն հայտնի դարձրեց իր ձայնագրություններով, և այսօր Տոկիոյից մինչև Նյու Յորք շեփորի ուսանողներն այն նվագում են քննություններին և մրցույթներին։ 20-րդ դարի քիչ ստեղծագործություններ են այդքան հաճախ նվագվում իրենց գործիքի վրա։

**Երկրի ամենալավ քաղաքը։** Առնո Բաբաջանյանը տրիոների և կոնցերտների լուրջ կոմպոզիտոր էր, բայց միլիոնավոր մարդիկ նրան ճանաչում էին երգերով։ 1963 թվականին նա գրեց պայծառ, ռիթմիկ **«Երկրի ամենալավ քաղաքը»** երգը, որը կատարեց երիտասարդ աստղ Մուսլիմ Մագոմաևը, և այն դարձավ Խորհրդային Միության ամենահայտնի երգերից մեկը։ Բաբաջանյանը սիրում էր իր երգերն ինքը նվագել դաշնամուրի վրա, և հանդիսատեսը սիրում էր նրա եռանդն ու ջազային ռիթմերը։`,
      `**Концерт, который учит каждый трубач.** Александр Арутюнян написал Концерт для трубы в 1950 году, в тридцать лет. Он одночастный, около пятнадцати минут, с фанфарами, нежной песней и быстрыми, ослепительными пассажами, полными армянских мелодических оборотов. Великий советский трубач **Тимофей Докшицер** прославил его своими записями, и сегодня студенты-трубачи от Токио до Нью-Йорка играют его на экзаменах и конкурсах. Мало какие произведения XX века так часто звучат на своём инструменте.

**Лучший город земли.** Арно Бабаджанян был серьёзным композитором трио и концертов, но миллионы людей знали его по песням. В 1963 году он написал яркую, ритмичную песню **«Лучший город земли»**, которую спел молодой Муслим Магомаев, и она стала одной из самых популярных песен в Советском Союзе. Бабаджанян любил сам играть свои песни на рояле, и публика обожала его энергию и джазовые ритмы.`,
    ),
    ask(3, {
      en: ["Which piece by a member of the \"Armenian Five\" is played by trumpeters all over the world?", ["Babajanian's \"Elegy\"", "Mirzoyan's Symphony", "Arutiunian's Trumpet Concerto"], "Arutiunian's Trumpet Concerto (1950) is one of the most often performed trumpet concertos anywhere."],
      hy: ["«Հայկական հնգյակի» անդամի ո՞ր ստեղծագործությունն են նվագում շեփորահարներն ամբողջ աշխարհում։", ["Բաբաջանյանի «Էլեգիան»", "Միրզոյանի սիմֆոնիան", "Հարությունյանի շեփորի կոնցերտը"], "Հարությունյանի շեփորի կոնցերտը (1950) աշխարհում ամենահաճախ կատարվող շեփորի կոնցերտներից է։"],
      ru: ["Какое произведение участника «Армянской пятёрки» играют трубачи всего мира?", ["«Элегия» Бабаджаняна", "Симфония Мирзояна", "Концерт для трубы Арутюняна"], "Концерт для трубы Арутюняна (1950) — один из самых исполняемых концертов для трубы в мире."],
    }),
  ],
  "mansurian-and-hovhaness": [
    "bars set=symphonies",
    closer(
      `**A bonfire of music.** As a young man Alan Hovhaness wrote a great deal of music in a romantic style. Around 1940, after harsh criticism and his own doubts, he decided it was not truly his voice and **burned** hundreds of his scores: by his own account about a thousand pieces. Then he started again, turning to Armenian church music and the music of Asia. The new style, with long melodies and slow, shimmering sound, made him famous.

**A symphony with whales.** In 1970 Hovhaness wrote **"And God Created Great Whales"** for orchestra and recorded whale song. Scientists had just recorded the long, eerie songs of humpback whales, and Hovhaness wove these real voices into his music: the orchestra rises and falls like waves, and the whales sing over it. The piece was first played by the New York Philharmonic, and it helped many people discover that whales really do sing.`,
      `**Երաժշտության խարույկ։** Երիտասարդ տարիներին Ալան Հովհաննեսը շատ երաժշտություն գրեց ռոմանտիկ ոճով։ Մոտ 1940 թվականին, խիստ քննադատությունից և սեփական կասկածներից հետո, նա որոշեց, որ դա իր իսկական ձայնը չէ, և **այրեց** իր հարյուրավոր պարտիտուրներ՝ իր իսկ խոսքով մոտ հազար ստեղծագործություն։ Հետո նա նորից սկսեց՝ դիմելով հայկական եկեղեցական երաժշտությանը և Ասիայի երաժշտությանը։ Նոր ոճը՝ երկար մեղեդիներով և դանդաղ, շողշողուն հնչողությամբ, նրան հայտնի դարձրեց։

**Սիմֆոնիա կետերով։** 1970 թվականին Հովհաննեսը գրեց **«Եվ Աստված ստեղծեց մեծ կետերին»** ստեղծագործությունը նվագախմբի և ձայնագրված կետերի երգի համար։ Գիտնականները նոր էին ձայնագրել կուզաձև կետերի երկար, խորհրդավոր երգերը, և Հովհաննեսն այդ իրական ձայները հյուսեց իր երաժշտության մեջ․ նվագախումբը բարձրանում ու իջնում է ալիքների պես, իսկ կետերն երգում են դրա վրա։ Ստեղծագործությունն առաջին անգամ կատարեց Նյու Յորքի ֆիլհարմոնիկ նվագախումբը, և այն օգնեց շատերին բացահայտել, որ կետերն իսկապես երգում են։`,
      `**Костёр из нот.** В молодости Алан Хованесс написал много музыки в романтическом стиле. Около 1940 года, после резкой критики и собственных сомнений, он решил, что это не его настоящий голос, и **сжёг** сотни своих партитур — по его собственным словам, около тысячи произведений. Затем он начал заново, обратившись к армянской церковной музыке и музыке Азии. Новый стиль, с долгими мелодиями и медленным мерцающим звучанием, принёс ему славу.

**Симфония с китами.** В 1970 году Хованесс написал **«И создал Бог больших китов»** для оркестра и записанного пения китов. Учёные как раз записали долгие загадочные песни горбатых китов, и Хованесс вплёл эти настоящие голоса в свою музыку: оркестр поднимается и опускается, как волны, а киты поют над ним. Впервые пьесу исполнил Нью-Йоркский филармонический оркестр, и она помогла многим узнать, что киты действительно поют.`,
    ),
    ask(2, {
      en: ["Which ancient music inspired both Mansurian and Hovhaness?", ["Jazz", "Armenian sacred music, such as sharakans", "Viennese waltzes"], "Both turned to the sharakans, Komitas and Armenian church music, heard through a modern ear."],
      hy: ["Ո՞ր հին երաժշտությունն է ոգեշնչել և՛ Մանսուրյանին, և՛ Հովհաննեսին։", ["Ջազը", "Հայկական հոգևոր երաժշտությունը, օրինակ՝ շարականները", "Վիեննական վալսերը"], "Երկուսն էլ դիմեցին շարականներին, Կոմիտասին և հայկական եկեղեցական երաժշտությանը՝ լսելով դրանք ժամանակակից ականջով։"],
      ru: ["Какая древняя музыка вдохновляла и Мансуряна, и Хованесса?", ["Джаз", "Армянская духовная музыка, например шараканы", "Венские вальсы"], "Оба обращались к шараканам, Комитасу и армянской церковной музыке, услышанной современным ухом."],
    }),
  ],
  "armenian-performers": [
    "timeline set=performers",
    closer(
      `**The duduk meets rock music.** In 1988 the British rock musician **Peter Gabriel** was writing the music for the film "The Last Temptation of Christ". Looking for a sound that felt truly ancient, he invited **Djivan Gasparyan** to play the duduk. The album, called "Passion", won a Grammy, and suddenly film composers everywhere wanted the duduk. That is how its soft, sad voice came to be heard in "Gladiator" and many other films.

**A start in Piaf's shadow.** As a young singer in Paris after the Second World War, Charles Aznavour was small, had a husky voice and was told he would never succeed. Then the famous singer **Édith Piaf** heard him, took him on tour to France and America, and encouraged him to write his own songs. He wrote many songs for her and for others before audiences finally fell in love with his own voice. Decades later, people called him "the French Sinatra".`,
      `**Դուդուկը հանդիպում է ռոք երաժշտությանը։** 1988 թվականին բրիտանացի ռոք երաժիշտ **Փիթեր Գաբրիելը** երաժշտություն էր գրում «Քրիստոսի վերջին գայթակղությունը» ֆիլմի համար։ Փնտրելով մի հնչյուն, որն իսկապես հնագույն թվար, նա հրավիրեց **Ջիվան Գասպարյանին** դուդուկ նվագելու։ «Passion» («Կիրք») կոչվող ալբոմը Գրեմմի ստացավ, և հանկարծ ամենուր կինոկոմպոզիտորները դուդուկ էին ուզում։ Այդպես նրա մեղմ, տխուր ձայնը հնչեց «Գլադիատոր» և շատ այլ ֆիլմերում։

**Սկիզբ Պիաֆի ստվերում։** Երկրորդ համաշխարհային պատերազմից հետո Փարիզում որպես երիտասարդ երգիչ Շառլ Ազնավուրը կարճահասակ էր, խռպոտ ձայն ուներ, և նրան ասում էին, որ երբեք հաջողության չի հասնի։ Հետո հայտնի երգչուհի **Էդիթ Պիաֆը** լսեց նրան, նրան իր հետ շրջագայության տարավ Ֆրանսիայով և Ամերիկայով և քաջալերեց գրել իր սեփական երգերը։ Նա շատ երգեր գրեց նրա և ուրիշների համար, մինչև հանդիսատեսը վերջապես սիրահարվեց հենց նրա ձայնին։ Տասնամյակներ անց մարդիկ նրան կոչում էին «ֆրանսիական Սինատրա»։`,
      `**Дудук встречает рок.** В 1988 году британский рок-музыкант **Питер Гэбриел** писал музыку к фильму «Последнее искушение Христа». В поисках по-настоящему древнего звучания он пригласил **Дживана Гаспаряна** сыграть на дудуке. Альбом «Passion» («Страсть») получил «Грэмми», и вдруг композиторы кино повсюду захотели дудук. Так его мягкий, печальный голос зазвучал в «Гладиаторе» и многих других фильмах.

**Начало в тени Пиаф.** Молодым певцом в Париже после Второй мировой войны Шарль Азнавур был невысок, обладал хрипловатым голосом, и ему говорили, что он никогда не добьётся успеха. Потом его услышала знаменитая **Эдит Пиаф**, взяла с собой на гастроли по Франции и Америке и уговорила писать собственные песни. Он написал много песен для неё и для других, прежде чем публика наконец полюбила его собственный голос. Десятилетия спустя его называли «французским Синатрой».`,
    ),
    ask(1, {
      en: ["Which instrument did Djivan Gasparyan bring to the world?", ["The duduk", "The kanon", "The piano"], "Djivan Gasparyan's duduk was heard in films such as \"Gladiator\" and on stages around the world."],
      hy: ["Ո՞ր գործիքը ներկայացրեց աշխարհին Ջիվան Գասպարյանը։", ["Դուդուկը", "Քանոնը", "Դաշնամուրը"], "Ջիվան Գասպարյանի դուդուկը հնչեց «Գլադիատոր» և այլ ֆիլմերում և աշխարհի բեմերում։"],
      ru: ["Какой инструмент открыл миру Дживан Гаспарян?", ["Дудук", "Канон", "Фортепиано"], "Дудук Дживана Гаспаряна звучал в фильмах, например в «Гладиаторе», и на сценах всего мира."],
    }),
  ],
};
