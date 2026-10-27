import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade4: VisualMap[number] = {
  "square-rule": [
    "chess set=square",
    closer(
      `**The king that chased two hares.** In 1921 the Czech master **Richard Réti** published a famous puzzle. The white king stands in the corner, far outside the square of a black pawn, and it seems hopeless. But the king walks **diagonally**, so that with every step it comes closer to the pawn and at the same time to its own pawn. In the end Black must either let White queen too or lose the pawn, and the game is a draw.

**The king walks diagonally for free.** On a chessboard, a diagonal step takes the king just as far forward as a straight one. From a1 to h8 is only **7 moves**, exactly the same as from a1 to a8. That is why the king can head towards two places at once, and why the square rule counts moves, not distances.`,
      `**Արքան, որն երկու նապաստակի հետևից ընկավ։** 1921 թվականին չեխ վարպետ **Ռիխարդ Ռետին** հրապարակեց մի հայտնի խնդիր։ Սպիտակ արքան կանգնած է անկյունում, սև զինվորի քառակուսուց շատ հեռու, և թվում է՝ ամեն ինչ կորած է։ Բայց արքան քայլում է **անկյունագծով**, որպեսզի յուրաքանչյուր քայլով մոտենա և՛ զինվորին, և՛ իր իսկ զինվորին։ Վերջում սևերը կամ պետք է թույլ տան, որ սպիտակներն էլ թագուհի ստանան, կամ կորցնեն զինվորը, և պարտիան ավարտվում է ոչ-ոքի։

**Արքան անկյունագծով քայլում է «անվճար»։** Շախմատային տախտակին անկյունագծային քայլն արքային առաջ է տանում նույնքան, որքան ուղիղ քայլը։ a1-ից h8 ընդամենը **7 քայլ** է, ճիշտ այնքան, որքան a1-ից a8։ Ահա թե ինչու արքան կարող է միաժամանակ գնալ երկու տեղ, և ինչու քառակուսու կանոնը հաշվում է քայլերը, ոչ թե հեռավորությունը։`,
      `**Король, погнавшийся за двумя зайцами.** В 1921 году чешский мастер **Рихард Рети** опубликовал знаменитый этюд. Белый король стоит в углу, далеко за пределами квадрата чёрной пешки, и кажется, что всё безнадёжно. Но король идёт **по диагонали**, так что каждым шагом приближается и к пешке соперника, и к своей пешке. В конце концов чёрным приходится либо дать белым тоже провести ферзя, либо потерять пешку, и партия заканчивается вничью.

**Король ходит по диагонали «бесплатно».** На шахматной доске шаг по диагонали продвигает короля вперёд так же, как прямой. От a1 до h8 всего **7 ходов**, ровно столько же, сколько от a1 до a8. Поэтому король может идти сразу в две стороны, а правило квадрата считает ходы, а не расстояние.`,
    ),
    ask(2, {
      en: ["Black's king steps into the square of a white pawn. What happens?", ["The pawn queens anyway", "The king can catch the pawn", "It is stalemate"], "If the king can enter the square, it gets to the promotion square in time."],
      hy: ["Սև արքան մտնում է սպիտակ զինվորի քառակուսու մեջ։ Ի՞նչ է լինում։", ["Զինվորը միևնույն է դառնում է թագուհի", "Արքան կարող է բռնել զինվորին", "Պատ է"], "Եթե արքան կարող է մտնել քառակուսու մեջ, այն ժամանակին հասնում է փոխակերպման դաշտին։"],
      ru: ["Чёрный король входит в квадрат белой пешки. Что будет?", ["Пешка всё равно станет ферзём", "Король догонит пешку", "Будет пат"], "Если король может войти в квадрат, он успевает к полю превращения."],
    }),
  ],
  opposition: [
    "chess set=opposition",
    closer(
      `**The artist who wrote about opposition.** **Marcel Duchamp** was one of the most famous artists of the 20th century. One day he more or less gave up art for chess, and he played for France at four Chess Olympiads. In 1932 he wrote a whole book, together with Vitaly Halberstadt, about rare endgames with **opposition**. Its title is so long and strange that even chess players smile at it.

**Close and distant opposition.** When the kings stand face to face with one square between them, it is the **close** opposition. But it works at a distance too: if there are three or five squares between them on the same line, the side that is *not* to move also has the opposition. The rule to remember: whoever has to move, gives way.`,
      `**Նկարիչը, որը գրում էր ընդդիմության մասին։** **Մարսել Դյուշանը** 20-րդ դարի ամենահայտնի նկարիչներից էր։ Մի օր նա գրեթե թողեց արվեստը հանուն շախմատի և Ֆրանսիայի կազմում խաղաց չորս Շախմատային օլիմպիադայում։ 1932 թվականին Վիտալի Հալբերշտադտի հետ նա մի ամբողջ գիրք գրեց **ընդդիմությամբ** հազվագյուտ վերջնախաղերի մասին։ Գրքի վերնագիրն այնքան երկար և տարօրինակ է, որ նույնիսկ շախմատիստներն են ժպտում։

**Մոտ և հեռավոր ընդդիմություն։** Երբ արքաները կանգնած են դեմ առ դեմ՝ մեկ դաշտ միջև, դա **մոտ** ընդդիմություն է։ Բայց այն գործում է նաև հեռվից․ եթե նույն գծի վրա նրանց միջև երեք կամ հինգ դաշտ կա, ընդդիմությունը նույնպես նրանն է, ով *չպետք է* քայլի։ Հիշելու կանոնը․ ով պետք է քայլի, նա էլ զիջում է։`,
      `**Художник, который писал об оппозиции.** **Марсель Дюшан** был одним из самых знаменитых художников XX века. Однажды он почти оставил искусство ради шахмат и играл за Францию на четырёх шахматных олимпиадах. В 1932 году он вместе с Виталием Гальберштадтом написал целую книгу о редких эндшпилях с **оппозицией**. Её название такое длинное и странное, что даже шахматисты улыбаются.

**Ближняя и дальняя оппозиция.** Когда короли стоят друг против друга через одно поле, это **ближняя** оппозиция. Но она действует и на расстоянии: если между ними на одной линии три или пять полей, оппозиция тоже у той стороны, которой *не* надо ходить. Правило, которое стоит запомнить: кому ходить, тот и уступает.`,
    ),
    ask(3, {
      en: ["The kings stand on e4 and e6, and it is Black to move. Who has the opposition?", ["Black", "Nobody", "White"], "The side that does not have to move holds the opposition, and the other king must give way."],
      hy: ["Արքաները կանգնած են e4-ում և e6-ում, և քայլը սևերինն է։ Ո՞ւմն է ընդդիմությունը։", ["Սևերինը", "Ոչ մեկինը", "Սպիտակներինը"], "Ընդդիմությունը նրանն է, ով չպետք է քայլի, իսկ մյուս արքան պետք է զիջի։"],
      ru: ["Короли стоят на e4 и e6, ход чёрных. У кого оппозиция?", ["У чёрных", "Ни у кого", "У белых"], "Оппозиция у той стороны, которой не нужно ходить, а другой король должен уступить."],
    }),
  ],
  "king-and-pawn": [
    "chess set=kpawn",
    closer(
      `**Games that slept overnight.** Until about 30 years ago long tournament games were often **adjourned**: after five hours of play a player wrote his next move secretly on a sheet, put it in a sealed envelope and gave it to the referee. The next day the game went on. Overnight both players studied the endgame, sometimes with their friends. When computers became strong enough to find the answers in minutes, adjournments were stopped.

**Fischer's clock.** In 1988 the former world champion **Bobby Fischer** invented a new kind of chess clock and patented it. It adds a few **extra seconds** after every move. With an ordinary clock a player could lose on time in a winning endgame. With Fischer's clock there is always time to make a move, so endgames like king and pawn against king can be played out properly. Almost all tournaments use it today.`,
      `**Պարտիաներ, որոնք քնում էին գիշերը։** Մինչև մոտ 30 տարի առաջ մրցաշարային երկար պարտիաները հաճախ **հետաձգվում էին**․ հինգ ժամ խաղալուց հետո խաղացողն իր հաջորդ քայլը գաղտնի գրում էր թղթի վրա, դնում փակ ծրարի մեջ և տալիս մրցավարին։ Հաջորդ օրը պարտիան շարունակվում էր։ Գիշերն երկու խաղացողներն էլ ուսումնասիրում էին վերջնախաղը, երբեմն՝ ընկերների հետ։ Երբ համակարգիչներն այնքան ուժեղացան, որ պատասխանները գտնում էին րոպեների ընթացքում, պարտիաների հետաձգումը դադարեցվեց։

**Ֆիշերի ժամացույցը։** 1988 թվականին նախկին աշխարհի չեմպիոն **Բոբի Ֆիշերը** հորինեց և արտոնագրեց նոր տեսակի շախմատային ժամացույց։ Այն յուրաքանչյուր քայլից հետո ավելացնում է մի քանի **լրացուցիչ վայրկյան**։ Սովորական ժամացույցով խաղացողը կարող էր ժամանակով պարտվել հաղթական վերջնախաղում։ Ֆիշերի ժամացույցով միշտ ժամանակ կա քայլ անելու, ուստի արքայի և զինվորի ընդդեմ արքայի նման վերջնախաղերը կարելի է խաղալ մինչև վերջ։ Այսօր գրեթե բոլոր մրցաշարերն այն են օգտագործում։`,
      `**Партии, которые спали ночью.** Ещё около 30 лет назад долгие турнирные партии часто **откладывали**: после пяти часов игры шахматист тайно записывал следующий ход на бланке, клал его в запечатанный конверт и отдавал судье. На следующий день партия продолжалась. За ночь оба игрока изучали эндшпиль, иногда вместе с друзьями. Когда компьютеры стали находить ответы за минуты, откладывать партии перестали.

**Часы Фишера.** В 1988 году бывший чемпион мира **Бобби Фишер** изобрёл и запатентовал новые шахматные часы. Они добавляют несколько **лишних секунд** после каждого хода. С обычными часами можно было проиграть по времени в выигранном эндшпиле. С часами Фишера время на ход есть всегда, поэтому эндшпили вроде «король и пешка против короля» можно доиграть как следует. Сегодня ими пользуются почти на всех турнирах.`,
    ),
    ask(1, {
      en: ["Where should the stronger side's king stand to help its pawn queen?", ["In front of the pawn, on a key square", "Behind the pawn", "As far away as possible"], "The king clears the way: from a key square it can always escort the pawn home."],
      hy: ["Որտե՞ղ պետք է կանգնի ուժեղ կողմի արքան, որ օգնի իր զինվորին թագուհի դառնալ։", ["Զինվորի առջևում՝ հիմնական դաշտում", "Զինվորի հետևում", "Որքան հնարավոր է հեռու"], "Արքան ճանապարհ է բացում․ հիմնական դաշտից այն միշտ կարող է զինվորին ուղեկցել մինչև վերջ։"],
      ru: ["Где должен стоять король сильнейшей стороны, чтобы помочь пешке пройти в ферзи?", ["Перед пешкой, на ключевом поле", "Позади пешки", "Как можно дальше"], "Король расчищает путь: с ключевого поля он всегда проведёт пешку до конца."],
    }),
  ],
  "passed-pawns": [
    "chess set=passed",
    closer(
      `**"The soul of chess."** In 1749 the French player **François-André Danican Philidor** wrote a famous book in which he said that **pawns are the soul of chess**. In his day most players treated pawns as small change and hurried to attack. Philidor showed that the way the pawns stand decides where the pieces should go. He was also a well-known opera composer.

**A criminal under lock and key.** The master **Aron Nimzowitsch** compared a passed pawn to a **criminal who must be kept under lock and key**. His advice: stop a passed pawn by putting a piece right in front of it, a **blockade**. A knight is the best guard, because it keeps working from that square. Without a blockade a passed pawn just keeps running.`,
      `**«Շախմատի հոգին»։** 1749 թվականին ֆրանսիացի շախմատիստ **Ֆրանսուա-Անդրե Դանիկան Ֆիլիդորը** գրեց մի հայտնի գիրք, որտեղ ասաց, որ **զինվորները շախմատի հոգին են**։ Նրա ժամանակ խաղացողների մեծ մասը զինվորներին մանրադրամի պես էր վերաբերվում և շտապում էր հարձակվել։ Ֆիլիդորը ցույց տվեց, որ զինվորների դասավորությունն է որոշում, թե ուր պետք է գնան խաղաքարերը։ Նա նաև հայտնի օպերային կոմպոզիտոր էր։

**Հանցագործ՝ կողպեքի տակ։** Վարպետ **Արոն Նիմցովիչը** անցած զինվորին համեմատում էր **հանցագործի հետ, որին պետք է պահել կողպեքի տակ**։ Նրա խորհուրդն է․ կանգնեցրու անցած զինվորին՝ որևէ խաղաքար դնելով ուղիղ նրա դիմաց, այսինքն՝ **շրջափակելով**։ Լավագույն պահակը ձին է, քանի որ այդ դաշտից էլ շարունակում է գործել։ Առանց շրջափակման անցած զինվորը պարզապես վազում է առաջ։`,
      `**«Душа шахмат».** В 1749 году французский шахматист **Франсуа-Андре Даникан Филидор** написал знаменитую книгу, в которой сказал, что **пешки — душа шахмат**. В его время большинство игроков считали пешки мелочью и спешили атаковать. Филидор показал, что от расположения пешек зависит, куда должны идти фигуры. Он был ещё и известным оперным композитором.

**Преступник под замком.** Мастер **Арон Нимцович** сравнивал проходную пешку с **преступником, которого надо держать под замком**. Его совет: остановить проходную, поставив фигуру прямо перед ней, — **блокировать**. Лучший сторож — конь, ведь он и с этого поля продолжает работать. Без блокады проходная пешка просто бежит вперёд.`,
    ),
    ask(3, {
      en: ["Which pawn is a passed pawn?", ["Any pawn on the 4th rank", "A pawn that has already captured", "A pawn with no enemy pawns in front of it or on the files next to it"], "Nothing can stop it except pieces, so it is a real danger in the endgame."],
      hy: ["Ո՞ր զինվորն է անցած զինվոր։", ["4-րդ հորիզոնականի ցանկացած զինվոր", "Զինվոր, որն արդեն վերցում է կատարել", "Զինվոր, որի առջևում և հարևան ուղղաձիգներում թշնամու զինվորներ չկան"], "Նրան կարող են կանգնեցնել միայն խաղաքարերը, ուստի վերջնախաղում այն իսկական վտանգ է։"],
      ru: ["Какая пешка проходная?", ["Любая пешка на 4-й горизонтали", "Пешка, которая уже кого-то побила", "Пешка, перед которой и на соседних вертикалях нет вражеских пешек"], "Остановить её могут только фигуры, поэтому в эндшпиле она очень опасна."],
    }),
  ],
  "rook-endgames": [
    "chess set=philidor",
    closer(
      `**"All rook endings are drawn."** Rook endgames are the **most common** kind of endgame in real games, because rooks usually come into play last and stay on the board longest. The German master **Siegbert Tarrasch** joked that "all rook endings are drawn". He exaggerated, but it shows how hard it is to win them: the defending rook can give checks again and again.

**A position with the wrong name.** The famous winning method with a king, a rook and a pawn against a king and a rook is called the **Lucena position**, after the Spanish author of a chess book printed in 1497. But historians found that it is **not in Lucena's book at all**! It first appeared in a book by the Italian **Alessandro Salvio** in 1634. The name stuck anyway.`,
      `**«Բոլոր նավակային վերջնախաղերը ոչ-ոքի են»։** Նավակային վերջնախաղերն իրական պարտիաներում վերջնախաղերի **ամենատարածված** տեսակն են, քանի որ նավակները սովորաբար վերջինն են մտնում խաղի մեջ և ամենաերկարն են մնում տախտակին։ Գերմանացի վարպետ **Զիգբերտ Տարաշը** կատակում էր, որ «բոլոր նավակային վերջնախաղերը ոչ-ոքի են»։ Նա չափազանցնում էր, բայց դա ցույց է տալիս, թե որքան դժվար է դրանցում հաղթելը․ պաշտպանվող նավակը կարող է նորից ու նորից շախ տալ։

**Դիրք՝ սխալ անունով։** Արքայով, նավակով և զինվորով ընդդեմ արքայի և նավակի հաղթելու հայտնի եղանակը կոչվում է **Լուսենայի դիրք**՝ 1497 թվականին տպագրված շախմատային գրքի իսպանացի հեղինակի անունով։ Բայց պատմաբանները պարզեցին, որ այն **Լուսենայի գրքում ընդհանրապես չկա**։ Այն առաջին անգամ հայտնվել է իտալացի **Ալեսանդրո Սալվիոյի** 1634 թվականի գրքում։ Անունը, այնուամենայնիվ, մնաց։`,
      `**«Все ладейные окончания ничейны».** Ладейные эндшпили — **самые частые** в настоящих партиях, ведь ладьи обычно вступают в игру последними и дольше всех остаются на доске. Немецкий мастер **Зигберт Тарраш** шутил, что «все ладейные окончания ничейны». Он преувеличивал, но это показывает, как трудно их выиграть: защищающаяся ладья может шаховать снова и снова.

**Позиция с чужим именем.** Знаменитый способ выигрыша с королём, ладьёй и пешкой против короля и ладьи называется **позицией Лусены**, по имени испанского автора шахматной книги 1497 года. Но историки выяснили, что в книге Лусены её **вовсе нет**! Впервые она появилась в книге итальянца **Алессандро Сальвио** в 1634 году. А название всё равно прижилось.`,
    ),
    ask(2, {
      en: ["In Philidor's defence, what does Black's rook do once the white pawn reaches the 6th rank?", ["It attacks the pawn from the front", "It goes to the 1st rank and checks the king from behind", "It is exchanged for the pawn"], "With the pawn on the 6th rank the white king has no shelter from checks from behind."],
      hy: ["Ֆիլիդորի պաշտպանությունում ի՞նչ է անում սև նավակը, երբ սպիտակ զինվորը հասնում է 6-րդ հորիզոնական։", ["Առջևից հարձակվում է զինվորի վրա", "Գնում է 1-ին հորիզոնական և արքային շախ տալիս հետևից", "Փոխանակվում է զինվորի հետ"], "Երբ զինվորը 6-րդ հորիզոնականում է, սպիտակ արքան թաքստոց չունի հետևից տրվող շախերից։"],
      ru: ["Что делает чёрная ладья в защите Филидора, когда белая пешка дошла до 6-й горизонтали?", ["Нападает на пешку спереди", "Уходит на 1-ю горизонталь и шахует короля сзади", "Меняется на пешку"], "Когда пешка на 6-й горизонтали, белому королю негде укрыться от шахов сзади."],
    }),
  ],
  combinations: [
    "chess set=legal",
    closer(
      `**A shower of gold coins.** In 1912 in Breslau the American **Frank Marshall** played against **Stepan Levitsky**. On move 23 Marshall put his queen on a square where **three** white pieces could capture it. But every capture lost: one led to mate and the others to big losses, so Levitsky resigned. The story goes that the excited spectators threw **gold coins** onto the board.

**Not a queen, but a rook!** In 1895 a Spanish priest, **Fernando Saavedra**, found the solution to an endgame puzzle that everyone else had got wrong. White's pawn reaches the last rank, but if it becomes a **queen**, Black has a trick that gives **stalemate**. So White makes it a **rook**, and after that Black cannot escape mate or the loss of his rook. The Saavedra position shows that the strongest piece is not always the best one.`,
      `**Ոսկե դրամների անձրև։** 1912 թվականին Բրեսլաուում ամերիկացի **Ֆրենկ Մարշալը** խաղում էր **Ստեփան Լևիցկու** դեմ։ 23-րդ քայլին Մարշալն իր թագուհուն դրեց մի դաշտ, որտեղ նրան կարող էին վերցնել սպիտակների **երեք** խաղաքարեր։ Բայց ցանկացած վերցում պարտություն էր բերում․ մեկը տանում էր մատի, մյուսները՝ մեծ կորուստների, ուստի Լևիցկին հանձնվեց։ Պատմում են, որ ոգևորված հանդիսատեսը տախտակի վրա **ոսկե դրամներ** նետեց։

**Ոչ թե թագուհի, այլ նավակ։** 1895 թվականին իսպանացի քահանա **Ֆերնանդո Սաավեդրան** գտավ վերջնախաղային խնդրի լուծումը, որում բոլորը սխալվել էին։ Սպիտակ զինվորը հասնում է վերջին հորիզոնական, բայց եթե դառնա **թագուհի**, սևերն ունեն մի հնարք, որը **պատ** է տալիս։ Ուստի սպիտակներն այն դարձնում են **նավակ**, և դրանից հետո սևերը չեն կարող խուսափել մատից կամ նավակի կորստից։ Սաավեդրայի դիրքը ցույց է տալիս, որ ամենաուժեղ խաղաքարը միշտ չէ, որ ամենալավն է։`,
      `**Дождь из золотых монет.** В 1912 году в Бреслау американец **Фрэнк Маршалл** играл со **Степаном Левицким**. На 23-м ходу Маршалл поставил ферзя на поле, где его могли взять **три** белые фигуры. Но любое взятие проигрывало: одно вело к мату, другие — к большим потерям, и Левицкий сдался. Говорят, восхищённые зрители забросали доску **золотыми монетами**.

**Не ферзь, а ладья!** В 1895 году испанский священник **Фернандо Сааведра** нашёл решение эндшпильной задачи, в которой ошибались все остальные. Белая пешка доходит до последней горизонтали, но если она станет **ферзём**, у чёрных есть трюк, дающий **пат**. Поэтому белые превращают её в **ладью**, и после этого чёрные не могут избежать мата или потери своей ладьи. Позиция Сааведры показывает, что самая сильная фигура не всегда самая лучшая.`,
    ),
    ask(1, {
      en: ["In Légal's mate, why could White give up the queen?", ["Because the minor pieces then give mate", "Because the queen was pinned", "Because Black had no queen"], "A combination gives up material for a forced result: here, mate in two more moves."],
      hy: ["Լեգալի մատում ինչո՞ւ սպիտակները կարող էին զոհաբերել թագուհուն։", ["Որովհետև հետո թեթև խաղաքարերը մատ են տալիս", "Որովհետև թագուհին կապված էր", "Որովհետև սևերը թագուհի չունեին"], "Կոմբինացիան նյութ է զոհաբերում ստիպողական արդյունքի համար․ այստեղ՝ մատ ևս երկու քայլում։"],
      ru: ["Почему в мате Легаля белые могли отдать ферзя?", ["Потому что затем лёгкие фигуры ставят мат", "Потому что ферзь был связан", "Потому что у чёрных не было ферзя"], "Комбинация отдаёт материал ради форсированного результата: здесь — мата ещё через два хода."],
    }),
  ],
  "middlegame-plans": [
    "chess set=outpost",
    closer(
      `**Small advantages add up.** The first world champion, **Wilhelm Steinitz**, changed the way people played. Before him most players simply attacked the king. Steinitz taught that you should first **collect small advantages**: a better pawn structure, a strong square, an open file. Only when you have enough of them is it time to attack.

**The boa constrictor.** The world champion **Anatoly Karpov** was nicknamed the **boa constrictor**. He rarely made loud attacks. Instead he took one square, then another, until the opponent's pieces had no good moves left, like a snake slowly squeezing its prey. Knights on outposts and rooks on open files were his favourite tools.`,
      `**Փոքր առավելությունները գումարվում են։** Աշխարհի առաջին չեմպիոն **Վիլհելմ Շտայնիցը** փոխեց խաղալու ձևը։ Նրանից առաջ խաղացողների մեծ մասը պարզապես հարձակվում էր արքայի վրա։ Շտայնիցը սովորեցնում էր նախ **հավաքել փոքր առավելություններ**՝ ավելի լավ զինվորային կառուցվածք, ուժեղ դաշտ, բաց ուղղաձիգ։ Միայն երբ դրանք բավականաչափ են, ժամանակն է հարձակվելու։

**Վիշապօձը։** Աշխարհի չեմպիոն **Անատոլի Կարպովին** անվանում էին **վիշապօձ**։ Նա հազվադեպ էր աղմկոտ հարձակումներ անում։ Փոխարենը վերցնում էր մեկ դաշտ, հետո մյուսը, մինչև մրցակցի խաղաքարերն այլևս լավ քայլեր չէին ունենում, ինչպես օձն է դանդաղ սեղմում իր զոհին։ Հենակետերում կանգնած ձիերը և բաց ուղղաձիգներում նավակները նրա սիրելի գործիքներն էին։`,
      `**Мелкие преимущества складываются.** Первый чемпион мира **Вильгельм Стейниц** изменил то, как играют в шахматы. До него большинство игроков просто атаковали короля. Стейниц учил сначала **накапливать мелкие преимущества**: лучшую пешечную структуру, сильное поле, открытую линию. Лишь когда их достаточно, пора атаковать.

**Удав.** Чемпиона мира **Анатолия Карпова** прозвали **удавом**. Он редко устраивал громкие атаки. Вместо этого он забирал одно поле, потом другое, пока у фигур соперника не оставалось хороших ходов, — как змея, медленно сжимающая добычу. Кони на форпостах и ладьи на открытых линиях были его любимыми инструментами.`,
    ),
    ask(2, {
      en: ["What is an outpost?", ["A square in your own corner", "A square in the opponent's half that no enemy pawn can attack", "The square where a pawn queens"], "A knight on an outpost cannot be chased away by pawns, so it stays strong for a long time."],
      hy: ["Ի՞նչ է հենակետը։", ["Դաշտ քո իսկ անկյունում", "Դաշտ մրցակցի կեսում, որի վրա թշնամու ոչ մի զինվոր չի կարող հարձակվել", "Դաշտ, որտեղ զինվորը դառնում է թագուհի"], "Հենակետի ձիուն զինվորները չեն կարող քշել, ուստի այն երկար ժամանակ ուժեղ է մնում։"],
      ru: ["Что такое форпост?", ["Поле в своём углу", "Поле на половине соперника, которое не может атаковать ни одна вражеская пешка", "Поле, где пешка превращается"], "Коня на форпосте нельзя прогнать пешками, поэтому он долго остаётся сильным."],
    }),
  ],
  "attacking-the-king": [
    "chess set=greekgift",
    closer(
      `**A gift that is 400 years old.** The bishop sacrifice on h7 is called the **Greek gift**, after the wooden horse that the Greeks left for the people of Troy. The first known example was written down by the Italian player **Gioachino Greco** around 1620. Four hundred years later, players still fall for it, so always check whether your opponent can bring a knight to g5 and a queen to h5.

**The magician from Riga.** **Mikhail Tal** from Riga became world champion in 1960 at the age of 23. He was famous for wild attacks: he would sacrifice pieces even when nobody, sometimes not even he, could calculate everything to the end. His opponents often got lost in the complications. People called him **"the magician from Riga"**.`,
      `**400 տարեկան նվեր։** h7-ում փղի զոհաբերությունը կոչվում է **«հունական նվեր»**՝ այն փայտե ձիու անունով, որը հույները թողեցին Տրոյայի բնակիչների համար։ Առաջին հայտնի օրինակը գրի է առել իտալացի շախմատիստ **Ջոակինո Գրեկոն** մոտ 1620 թվականին։ Չորս հարյուր տարի անց շախմատիստները դեռ ընկնում են այդ թակարդը, ուստի միշտ ստուգի՛ր, թե արդյոք մրցակիցդ կարող է ձին բերել g5, իսկ թագուհուն՝ h5։

**Ռիգայի կախարդը։** Ռիգայից **Միխայիլ Տալը** 1960 թվականին՝ 23 տարեկանում, դարձավ աշխարհի չեմպիոն։ Նա հայտնի էր կատաղի հարձակումներով․ զոհաբերում էր խաղաքարեր նույնիսկ այն ժամանակ, երբ ոչ ոք, երբեմն նաև ինքը, չէր կարող ամեն ինչ հաշվարկել մինչև վերջ։ Մրցակիցները հաճախ մոլորվում էին բարդությունների մեջ։ Նրան անվանում էին **«Ռիգայի կախարդ»**։`,
      `**Подарку 400 лет.** Жертву слона на h7 называют **«греческим даром»** — в память о деревянном коне, которого греки оставили жителям Трои. Первый известный пример записал итальянский шахматист **Джоаккино Греко** около 1620 года. Спустя четыреста лет шахматисты всё ещё попадаются, поэтому всегда проверяй, может ли соперник привести коня на g5, а ферзя на h5.

**Чародей из Риги.** **Михаил Таль** из Риги стал чемпионом мира в 1960 году в 23 года. Он славился бурными атаками: жертвовал фигуры, даже когда никто, а иногда и он сам, не мог рассчитать всё до конца. Соперники часто терялись в осложнениях. Его называли **«рижским чародеем»**.`,
    ),
    ask(3, {
      en: ["After the bishop sacrifice on h7, which pieces join the attack in the Greek gift?", ["The rooks on the back rank", "Only the pawns", "A knight to g5 and the queen to h5"], "Knight and queen together aim at h7, where the black king has no defenders left."],
      hy: ["«Հունական նվերում» h7-ում փղի զոհաբերությունից հետո ո՞ր խաղաքարերն են միանում հարձակմանը։", ["Վերջին հորիզոնականի նավակները", "Միայն զինվորները", "Ձին՝ g5, և թագուհին՝ h5"], "Ձին և թագուհին միասին նշան են բռնում h7-ը, որտեղ սև արքան այլևս պաշտպաններ չունի։"],
      ru: ["Какие фигуры подключаются к атаке после жертвы слона на h7 в «греческом даре»?", ["Ладьи с последней горизонтали", "Только пешки", "Конь на g5 и ферзь на h5"], "Конь и ферзь вместе нацелены на h7, где у чёрного короля не осталось защитников."],
    }),
  ],
  "world-champions": [
    "timeline set=chesschamps",
    closer(
      `**A riddle from India.** The Persian poet **Ferdowsi** tells a legend in his great *Book of Kings*, written about a thousand years ago. An Indian king sent the Persian king a chessboard with pieces, but no rules, as a riddle: if the Persians could not work out the game, they would have to pay tribute. The wise vizier **Bozorgmehr** worked out the rules and sent back another game as an answer, **nard** (backgammon).

**A champion who built computers.** The world champion **Mikhail Botvinnik** was also an **electrical engineer** with a doctor's degree. He believed that computers could one day play chess well, and in his later years he worked on a chess program himself. He also ran a famous chess school, where young **Anatoly Karpov** and **Garry Kasparov** studied.`,
      `**Հանելուկ Հնդկաստանից։** Պարսիկ բանաստեղծ **Ֆիրդուսին** մոտ հազար տարի առաջ գրված իր մեծ «Շահնամե»-ում պատմում է մի ավանդություն։ Հնդկաստանի արքան Պարսկաստանի արքային ուղարկեց շախմատային տախտակ խաղաքարերով, բայց առանց կանոնների, որպես հանելուկ․ եթե պարսիկները չկարողանային գուշակել խաղը, ստիպված կլինեին հարկ վճարել։ Իմաստուն վեզիր **Բոզորգմեհրը** պարզեց կանոնները և ի պատասխան ուղարկեց մեկ այլ խաղ՝ **նարդի**։

**Չեմպիոն, որը համակարգիչներ էր ստեղծում։** Աշխարհի չեմպիոն **Միխայիլ Բոտվիննիկը** նաև **էլեկտրատեխնիկ ինժեներ** էր՝ գիտությունների դոկտոր։ Նա հավատում էր, որ մի օր համակարգիչները լավ շախմատ կխաղան, և կյանքի վերջին տարիներին ինքն էր աշխատում շախմատային ծրագրի վրա։ Նա ղեկավարում էր նաև հայտնի շախմատային դպրոց, որտեղ սովորել են երիտասարդ **Անատոլի Կարպովը** և **Գարի Կասպարովը**։`,
      `**Загадка из Индии.** Персидский поэт **Фирдоуси** в своей великой «Шахнаме», написанной около тысячи лет назад, рассказывает легенду. Индийский царь прислал персидскому шаху шахматную доску с фигурами, но без правил, как загадку: если персы не разгадают игру, им придётся платить дань. Мудрый визирь **Бозоргмехр** разгадал правила и отправил в ответ другую игру — **нарды**.

**Чемпион, который создавал компьютеры.** Чемпион мира **Михаил Ботвинник** был ещё и **инженером-электротехником**, доктором наук. Он верил, что однажды компьютеры будут хорошо играть в шахматы, и в последние годы сам работал над шахматной программой. А ещё он руководил знаменитой шахматной школой, где учились юные **Анатолий Карпов** и **Гарри Каспаров**.`,
    ),
    ask(2, {
      en: ["When was FIDE, the International Chess Federation, founded?", ["1886", "1924", "1963"], "FIDE was founded in Paris on 20 July 1924; that day is now International Chess Day."],
      hy: ["Ե՞րբ է հիմնվել ՖԻԴԵ-ն՝ Շախմատի միջազգային ֆեդերացիան։", ["1886", "1924", "1963"], "ՖԻԴԵ-ն հիմնվել է Փարիզում 1924 թվականի հուլիսի 20-ին․ այդ օրն այժմ Շախմատի միջազգային օրն է։"],
      ru: ["Когда была основана ФИДЕ, Международная шахматная федерация?", ["В 1886 году", "В 1924 году", "В 1963 году"], "ФИДЕ основали в Париже 20 июля 1924 года; этот день теперь Международный день шахмат."],
    }),
  ],
  "chess-in-armenia": [
    "timeline set=armchess",
    closer(
      `**A champion who switched off the noise.** **Tigran Petrosian** had poor hearing and wore a **hearing aid**. During a game he sometimes simply turned it off: then no whisper in the hall, no cough and no moving chair could disturb him, and he could think in total silence. His calm, careful play earned him the nickname "Iron Tigran".

**The master of chess studies.** Not all chess is played against an opponent. A **study** is a puzzle position where White must find a surprising way to win or draw, like the Réti and Saavedra positions. The Armenian **Genrikh Kasparyan** (1910–1995) was one of the greatest study composers in the world. He composed hundreds of studies, won many international composing contests and was several times champion of Armenia as a player.`,
      `**Չեմպիոն, որն անջատում էր աղմուկը։** **Տիգրան Պետրոսյանը** վատ էր լսում և կրում էր **լսողական սարք**։ Պարտիայի ժամանակ նա երբեմն պարզապես անջատում էր այն․ այդ ժամանակ դահլիճում ոչ մի շշուկ, հազ կամ աթոռի ճռռոց չէր կարող խանգարել նրան, և նա կարող էր մտածել կատարյալ լռության մեջ։ Նրա հանգիստ, զգույշ խաղի համար նրան անվանում էին «Երկաթե Տիգրան»։

**Շախմատային էտյուդների վարպետը։** Շախմատը միշտ չէ, որ խաղում են մրցակցի դեմ։ **Էտյուդը** խնդիր-դիրք է, որտեղ սպիտակները պետք է գտնեն հաղթելու կամ ոչ-ոքի խաղալու անսպասելի ճանապարհ, ինչպես Ռետիի և Սաավեդրայի դիրքերում։ Հայ **Գենրիխ Կասպարյանը** (1910–1995) աշխարհի մեծագույն էտյուդագիրներից էր։ Նա հորինել է հարյուրավոր էտյուդներ, հաղթել է կոմպոզիցիայի բազմաթիվ միջազգային մրցույթներում և որպես շախմատիստ մի քանի անգամ դարձել է Հայաստանի չեմպիոն։`,
      `**Чемпион, который выключал шум.** **Тигран Петросян** плохо слышал и носил **слуховой аппарат**. Во время партии он иногда просто выключал его: тогда никакой шёпот в зале, кашель или скрип стула не могли ему помешать, и он думал в полной тишине. За спокойную, осторожную игру его прозвали «Железным Тиграном».

**Мастер шахматных этюдов.** В шахматы не всегда играют против соперника. **Этюд** — это задача-позиция, где белым нужно найти неожиданный путь к выигрышу или ничьей, как в позициях Рети и Сааведры. Армянин **Генрих Каспарян** (1910–1995) был одним из величайших этюдистов мира. Он сочинил сотни этюдов, побеждал на многих международных конкурсах составления и несколько раз становился чемпионом Армении как шахматист.`,
    ),
    ask(1, {
      en: ["In which years did Armenia's men's team win the Chess Olympiad?", ["2006, 2008 and 2012", "1963, 1966 and 1969", "2011 only"], "Turin 2006, Dresden 2008 and Istanbul 2012; in 2011 the team won the World Team Championship."],
      hy: ["Ո՞ր տարիներին է Հայաստանի տղամարդկանց հավաքականը հաղթել Շախմատային օլիմպիադայում։", ["2006, 2008 և 2012", "1963, 1966 և 1969", "Միայն 2011"], "Թուրին՝ 2006, Դրեզդեն՝ 2008 և Ստամբուլ՝ 2012․ 2011-ին հավաքականը հաղթեց Աշխարհի թիմային առաջնությունում։"],
      ru: ["В какие годы мужская сборная Армении выигрывала Шахматную олимпиаду?", ["В 2006, 2008 и 2012", "В 1963, 1966 и 1969", "Только в 2011"], "Турин 2006, Дрезден 2008 и Стамбул 2012; в 2011 году команда выиграла командный чемпионат мира."],
    }),
  ],
};
