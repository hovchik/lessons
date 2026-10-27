import { t } from "../labels";
import type { TimeEvent, TimeSet } from "./timelines";
import type { Tr } from "@/lib/art/spec";

const E = (y: number, l: Tr, n?: Tr, o: { to?: number; c?: boolean } = {}): TimeEvent => ({ y, l, n, ...o });

/** Timelines for music, grades 2–7. Dates follow the base lessons. */
export const MUS_TIMELINES: Record<string, TimeSet> = {
  /* ---------------- grade 2 ---------------- */
  anthem: {
    title: t("The anthems of Armenia", "Հայաստանի օրհներգները", "Гимны Армении"),
    events: [
      E(1859, t("Nalbandian writes \"Song of an Italian Girl\"", "Նալբանդյանը գրում է «Իտալացի աղջկա երգը»", "Налбандян пишет «Песню итальянской девушки»"), t("A poem about Italy's fight for freedom, which Armenian readers understood as a call to their own people.", "Բանաստեղծություն Իտալիայի ազատագրական պայքարի մասին, որը հայ ընթերցողները հասկացան որպես կոչ իրենց ժողովրդին։", "Стихотворение о борьбе Италии за свободу, которое армянские читатели поняли как призыв к своему народу.")),
      E(1918, t("\"Mer Hayrenik\" becomes the anthem of the First Republic", "«Մեր Հայրենիքը» դառնում է Առաջին Հանրապետության օրհներգը", "«Мер Айреник» становится гимном Первой республики"), t("With music by Barsegh Kanachyan; it was used until 1920.", "Բարսեղ Կանաչյանի երաժշտությամբ․ այն գործածվեց մինչև 1920 թվականը։", "На музыку Барсега Каначяна; он звучал до 1920 года.")),
      E(1944, t("Anthem of Soviet Armenia, music by Khachaturian", "Խորհրդային Հայաստանի օրհներգը՝ Խաչատրյանի երաժշտությամբ", "Гимн Советской Армении на музыку Хачатуряна"), t("Aram Khachaturian composed the music; the words were by the poet Sarmen.", "Երաժշտությունը գրել է Արամ Խաչատրյանը, խոսքերը՝ բանաստեղծ Սարմենը։", "Музыку написал Арам Хачатурян, слова — поэт Сармен.")),
      E(1991, t("\"Mer Hayrenik\" is adopted again", "«Մեր Հայրենիքը» կրկին ընդունվում է", "«Мер Айреник» принят вновь"), t("The independent Republic of Armenia returned to the anthem of the First Republic.", "Անկախ Հայաստանի Հանրապետությունը վերադարձավ Առաջին Հանրապետության օրհներգին։", "Независимая Республика Армения вернулась к гимну Первой республики.")),
    ],
  },
  /* ---------------- grade 4 ---------------- */
  komitas: {
    title: t("The life of Komitas", "Կոմիտասի կյանքը", "Жизнь Комитаса"),
    events: [
      E(1869, t("Soghomon Soghomonian is born in Kütahya", "Կուտինայում ծնվում է Սողոմոն Սողոմոնյանը", "В Кутине родился Согомон Согомонян"), t("He lost both parents as a small child.", "Նա փոքր տարիքում կորցրեց ծնողներին։", "Он рано потерял обоих родителей.")),
      E(1881, t("Taken to Etchmiadzin for his voice", "Իր ձայնի համար տարվում է Էջմիածին", "Из-за голоса его увозят в Эчмиадзин"), t("He entered the Gevorkian Seminary, hardly knowing any Armenian.", "Նա ընդունվեց Գևորգյան ճեմարան՝ գրեթե չիմանալով հայերեն։", "Он поступил в Геворкянскую семинарию, почти не зная армянского.")),
      E(1895, t("Becomes a vardapet", "Դառնում է վարդապետ", "Становится вардапетом"), t("A year earlier, as a monk, he had taken the name Komitas, after a 7th-century catholicos who wrote sharakans.", "Մեկ տարի առաջ, վանական դառնալով, նա ստացել էր Կոմիտաս անունը՝ ի պատիվ շարականներ գրած 7-րդ դարի կաթողիկոսի։", "Годом раньше, приняв монашество, он получил имя Комитас — в честь католикоса VII века, автора шараканов.")),
      E(1896, t("Studies music in Berlin", "Երաժշտություն է սովորում Բեռլինում", "Учится музыке в Берлине"), t("Three years of composition, singing and the science of music.", "Երեք տարի ստեղծագործություն, երգեցողություն և երաժշտագիտություն։", "Три года композиции, пения и музыкальной науки."), { to: 1899 }),
      E(1906, t("Concerts in Paris", "Համերգներ Փարիզում", "Концерты в Париже"), t("European musicians heard Armenian folk and sacred songs for the first time.", "Եվրոպացի երաժիշտներն առաջին անգամ լսեցին հայկական ժողովրդական և հոգևոր երգեր։", "Европейские музыканты впервые услышали армянские народные и духовные песни.")),
      E(1910, t("Moves to Constantinople, founds the Gusan choir", "Տեղափոխվում է Կոստանդնուպոլիս, հիմնում «Գուսան» երգչախումբը", "Переезжает в Константинополь, создаёт хор «Гусан»"), t("About 300 singers toured with him and sang his arrangements.", "Մոտ 300 երգիչ նրա հետ համերգներով շրջում էր և կատարում նրա մշակումները։", "Около 300 певцов ездили с ним и пели его обработки.")),
      E(1915, t("Arrested on 24 April", "Ձերբակալվում է ապրիլի 24-ին", "Арестован 24 апреля"), t("He was released, but the horror he witnessed left him gravely ill; he never composed again.", "Նա ազատ արձակվեց, բայց իր տեսած սարսափը ծանր հիվանդացրեց նրան․ այլևս երբեք չստեղծագործեց։", "Его освободили, но пережитый ужас тяжело подорвал его здоровье; больше он не сочинял.")),
      E(1936, t("His ashes are buried in Yerevan", "Նրա աճյունը թաղվում է Երևանում", "Его прах похоронен в Ереване"), t("He died in Paris in 1935; the cemetery where he lies became the Komitas Pantheon.", "Նա մահացավ Փարիզում 1935 թվականին, իսկ նրա հանգստավայրը դարձավ Կոմիտասի անվան պանթեոն։", "Он умер в Париже в 1935 году; кладбище, где он покоится, стало Пантеоном имени Комитаса.")),
      E(2015, t("Komitas Museum-Institute opens", "Բացվում է Կոմիտասի թանգարան-ինստիտուտը", "Открывается Музей-институт Комитаса"), t("Next to the Pantheon in Yerevan, it keeps his manuscripts, letters and recordings.", "Երևանում՝ պանթեոնի կողքին, այն պահում է նրա ձեռագրերը, նամակները և ձայնագրությունները։", "Рядом с Пантеоном в Ереване; здесь хранятся его рукописи, письма и записи.")),
    ],
  },
  ashugh: {
    title: t("Gusans and ashughs", "Գուսաններ և աշուղներ", "Гусаны и ашуги"),
    events: [
      E(470, t("Khorenatsi writes about the gusans of Goghtn", "Խորենացին գրում է Գողթան գուսանների մասին", "Хоренаци пишет о гусанах Гохтна"), t("The historian quotes old songs that the gusans still sang about ancient kings.", "Պատմիչը մեջբերում է հին երգեր, որ գուսաններն իր ժամանակ դեռ երգում էին հին արքաների մասին։", "Историк приводит старые песни о древних царях, которые гусаны ещё пели в его время."), { c: true }),
      E(1712, t("Sayat-Nova", "Սայաթ-Նովա", "Саят-Нова"), t("Born in Tiflis; poet, composer and singer at the court of King Erekle II.", "Ծնվել է Թիֆլիսում․ բանաստեղծ, երգահան և երգիչ Հերակլ II թագավորի արքունիքում։", "Родился в Тифлисе; поэт, композитор и певец при дворе царя Ираклия II."), { to: 1795 }),
      E(1795, t("Sayat-Nova is killed in Tiflis", "Սայաթ-Նովան սպանվում է Թիֆլիսում", "Саят-Нова погибает в Тифлисе"), t("He died when a Persian army sacked the city.", "Նա զոհվեց, երբ պարսկական զորքն ավերեց քաղաքը։", "Он погиб, когда персидское войско разорило город.")),
      E(1846, t("Jivani", "Ջիվանի", "Дживани"), t("From Javakhk; his songs about hard times and hope are still sung today.", "Ջավախքից էր․ դժվար ժամանակների և հույսի մասին նրա երգերն այսօր էլ երգվում են։", "Родом из Джавахка; его песни о тяжёлых временах и надежде поют до сих пор."), { to: 1909 }),
      E(1857, t("Sheram", "Շերամ", "Шерам"), t("An ashugh from Alexandropol (Gyumri) who wrote hundreds of love songs.", "Ալեքսանդրապոլցի (Գյումրի) աշուղ, որը հարյուրավոր սիրային երգեր է գրել։", "Ашуг из Александрополя (Гюмри), автор сотен песен о любви."), { to: 1938 }),
      E(1969, t("Parajanov's film about Sayat-Nova", "Փարաջանովի ֆիլմը Սայաթ-Նովայի մասին", "Фильм Параджанова о Саят-Нове"), t("\"The Colour of Pomegranates\" tells the poet's life in pictures.", "«Նռան գույնը» պատկերներով է պատմում բանաստեղծի կյանքը։", "«Цвет граната» рассказывает жизнь поэта в картинах.")),
    ],
  },
  operas: {
    title: t("Opera: from Florence to Yerevan", "Օպերան՝ Ֆլորենցիայից Երևան", "Опера: от Флоренции до Еревана"),
    events: [
      E(1600, t("\"Euridice\" in Florence", "«Էվրիդիկե»-ն Ֆլորենցիայում", "«Эвридика» во Флоренции"), t("Jacopo Peri's opera is the oldest one whose music has survived.", "Յակոպո Պերիի օպերան ամենահինն է, որի երաժշտությունը պահպանվել է։", "Опера Якопо Пери — самая старая, музыка которой сохранилась.")),
      E(1607, t("Monteverdi's \"Orfeo\"", "Մոնտևերդիի «Օրփեոսը»", "«Орфей» Монтеверди"), t("The first great opera, still staged today.", "Առաջին մեծ օպերան, որն այսօր էլ բեմադրվում է։", "Первая великая опера, её ставят до сих пор.")),
      E(1868, t("Chukhajian writes \"Arshak II\"", "Չուխաջյանը գրում է «Արշակ Երկրորդը»", "Чухаджян пишет «Аршака II»"), t("The first Armenian opera, about a 4th-century king.", "Առաջին հայկական օպերան՝ 4-րդ դարի թագավորի մասին։", "Первая армянская опера, о царе IV века.")),
      E(1912, t("\"Anoush\" in Alexandropol", "«Անուշը» Ալեքսանդրապոլում", "«Ануш» в Александрополе"), t("Armen Tigranian's opera after Tumanyan's poem was first performed by amateurs.", "Արմեն Տիգրանյանի օպերան՝ ըստ Թումանյանի պոեմի, առաջին անգամ կատարեցին սիրողները։", "Оперу Армена Тиграняна по поэме Туманяна впервые исполнили любители.")),
      E(1930, t("\"Almast\" staged in Moscow", "«Ալմաստը» բեմադրվում է Մոսկվայում", "«Алмаст» поставлена в Москве"), t("Spendiaryan had died two years earlier, before he could finish it.", "Սպենդիարյանը մահացել էր երկու տարի առաջ՝ չհասցնելով ավարտել այն։", "Спендиаров умер двумя годами раньше, не успев её закончить.")),
      E(1933, t("Yerevan Opera Theatre opens", "Բացվում է Երևանի օպերային թատրոնը", "Открывается Ереванский оперный театр"), t("Designed by Alexander Tamanyan; it opened with \"Almast\".", "Նախագծել է Ալեքսանդր Թամանյանը․ այն բացվեց «Ալմաստով»։", "Проект Александра Таманяна; театр открылся «Алмаст».")),
      E(1945, t("\"Arshak II\" reaches the stage", "«Արշակ Երկրորդը» հասնում է բեմ", "«Аршак II» выходит на сцену"), t("Staged in Yerevan 77 years after it was written.", "Բեմադրվեց Երևանում՝ գրվելուց 77 տարի անց։", "Поставлена в Ереване через 77 лет после создания.")),
    ],
  },
  khach: {
    title: t("Aram Khachaturian", "Արամ Խաչատրյան", "Арам Хачатурян"),
    events: [
      E(1903, t("Born in Tiflis", "Ծնվում է Թիֆլիսում", "Родился в Тифлисе"), t("The son of a bookbinder, he grew up among Armenian, Georgian and Azerbaijani songs.", "Կազմարարի որդի էր և մեծացավ հայկական, վրացական և ադրբեջանական երգերի մեջ։", "Сын переплётчика, он вырос среди армянских, грузинских и азербайджанских песен.")),
      E(1922, t("Starts studying music in Moscow", "Սկսում է երաժշտություն սովորել Մոսկվայում", "Начинает учиться музыке в Москве"), t("At 19, as a beginner on the cello.", "19 տարեկանում՝ որպես սկսնակ թավջութակահար։", "В 19 лет, начинающим виолончелистом.")),
      E(1936, t("Piano Concerto", "Դաշնամուրային կոնցերտ", "Фортепианный концерт"), t("The first work that made him famous outside the USSR.", "Առաջին ստեղծագործությունը, որը նրան հայտնի դարձրեց ԽՍՀՄ-ից դուրս։", "Первое произведение, прославившее его за пределами СССР.")),
      E(1940, t("Violin Concerto", "Ջութակի կոնցերտ", "Скрипичный концерт"), t("Written for the violinist David Oistrakh.", "Գրված է ջութակահար Դավիթ Օյստրախի համար։", "Написан для скрипача Давида Ойстраха.")),
      E(1941, t("\"Masquerade\" and its Waltz", "«Դիմակահանդես» և նրա վալսը", "«Маскарад» и его Вальс"), t("Music for Lermontov's play.", "Երաժշտություն Լերմոնտովի պիեսի համար։", "Музыка к пьесе Лермонтова.")),
      E(1942, t("Ballet \"Gayane\"", "«Գայանե» բալետը", "Балет «Гаяне»"), t("First performed in Perm, where a Leningrad ballet company had been evacuated during the war.", "Առաջին անգամ ներկայացվեց Պերմում, ուր պատերազմի ժամանակ տարհանվել էր լենինգրադյան բալետային թատրոնը։", "Впервые показан в Перми, куда во время войны эвакуировали ленинградский балет.")),
      E(1956, t("Ballet \"Spartacus\" on stage", "«Սպարտակ» բալետը բեմում", "Балет «Спартак» на сцене"), t("Composed in 1954, first staged in Leningrad.", "Գրվել է 1954 թվականին, առաջին անգամ բեմադրվել Լենինգրադում։", "Написан в 1954 году, впервые поставлен в Ленинграде.")),
      E(1978, t("Dies; buried in Yerevan", "Մահանում է, թաղվում Երևանում", "Умирает; похоронен в Ереване"), t("He lies in the Komitas Pantheon.", "Նա հանգչում է Կոմիտասի անվան պանթեոնում։", "Покоится в Пантеоне имени Комитаса.")),
    ],
  },
};
