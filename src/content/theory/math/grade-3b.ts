import { th } from "../kit";

const r = String.raw;

/** Math 3, units 2–3: checking division, numbers to 1000, comparing, Roman numerals. */
export const math3b = {
  "checking-division": th(
    r`### Why you can never divide by 0

Checking turns any division into a multiplication. $12 \div 3 = 4$ because $4 \times 3 = 12$. Now try $6 \div 0$. The answer would be a number that gives $6$ when multiplied by $0$. But **any** number times $0$ is $0$, never $6$. No number works, so $6 \div 0$ has no answer. Think of sharing 6 sweets into 0 bags: there are no bags, so the sharing can never even start.

Dividing **zero** is fine: $0 \div 5 = 0$, because $0 \times 5 = 0$. Five friends share no sweets, and nobody gets any.

### Checking with a different path

A check works best when it does not repeat the same steps. If you think $92 \div 4 = 23$, multiplying back is one way. Here is another: dividing by 4 is halving twice, $92 \to 46 \to 23$. Two different paths that agree are strong proof.

### Is the answer the right size?

Before you check exactly, check roughly. $96 \div 3$ should be about $90 \div 3 = 30$. If you got $3$ or $320$, you know straight away that something went wrong.`,
    r`### Ինչու երբեք չի կարելի բաժանել 0-ի

Ստուգումը ցանկացած բաժանում վերածում է բազմապատկման։ $12 \div 3 = 4$, որովհետև $4 \times 3 = 12$։ Հիմա փորձիր $6 \div 0$-ն։ Պատասխանը պետք է լինի մի թիվ, որը $0$-ով բազմապատկելիս տա $6$։ Բայց $0$-ով բազմապատկած **ցանկացած** թիվ $0$ է, երբեք $6$ չէ։ Ոչ մի թիվ չի համապատասխանում, ուստի $6 \div 0$-ն պատասխան չունի։ Պատկերացրու, որ 6 կոնֆետը պետք է բաժանես 0 տոպրակի. տոպրակներ չկան, և բաժանումը նույնիսկ չի էլ սկսվում։

**Զրոն** բաժանելը խնդիր չէ. $0 \div 5 = 0$, որովհետև $0 \times 5 = 0$։ Հինգ ընկեր կոնֆետ չունեն բաժանելու, և ոչ ոքի ոչինչ չի հասնում։

### Ստուգում ուրիշ ճանապարհով

Ստուգումը լավագույնս աշխատում է, երբ չի կրկնում նույն քայլերը։ Եթե կարծում ես, որ $92 \div 4 = 23$, հետ բազմապատկելը մեկ ճանապարհ է։ Ահա ևս մեկը. 4-ի բաժանելը երկու անգամ կիսելն է, $92 \to 46 \to 23$։ Երկու տարբեր ճանապարհ, որոնք նույն պատասխանն են տալիս, ուժեղ ապացույց են։

### Պատասխանը ճի՞շտ չափի է

Ճշգրիտ ստուգելուց առաջ ստուգիր մոտավորապես։ $96 \div 3$-ը պետք է մոտ լինի $90 \div 3 = 30$-ին։ Եթե ստացել ես $3$ կամ $320$, անմիջապես հասկանում ես, որ ինչ-որ բան սխալ է գնացել։`,
    r`### Почему на 0 делить нельзя

Проверка превращает любое деление в умножение. $12 \div 3 = 4$, потому что $4 \times 3 = 12$. Теперь попробуй $6 \div 0$. Ответом было бы число, которое при умножении на $0$ даёт $6$. Но **любое** число, умноженное на $0$, равно $0$, а не $6$. Ни одно число не подходит, поэтому у $6 \div 0$ нет ответа. Представь, что 6 конфет нужно разложить в 0 пакетов: пакетов нет, и раскладывать просто некуда.

А делить **ноль** можно: $0 \div 5 = 0$, потому что $0 \times 5 = 0$. Пятеро друзей делят пустой пакет, и никому ничего не достаётся.

### Проверка другим путём

Проверка работает лучше всего, когда не повторяет те же шаги. Если ты думаешь, что $92 \div 4 = 23$, можно умножить обратно. А можно иначе: разделить на 4 — это дважды разделить пополам, $92 \to 46 \to 23$. Два разных пути с одинаковым ответом — сильное доказательство.

### Подходит ли ответ по размеру?

Прежде чем проверять точно, прикинь. $96 \div 3$ должно быть около $90 \div 3 = 30$. Если получилось $3$ или $320$, сразу ясно, что где-то ошибка.`,
  ),

  hundreds: th(
    r`### Why we count in tens

We have ten fingers, and people all over the world first counted on them. When the fingers ran out, they started again and remembered "two full hands". That full count became a new unit, the ten. Ten tens became the hundred, and so on. Our whole number system grew out of two hands.

### Other ways people counted

Not everyone grouped by ten. The ancient Babylonians grouped by **sixty**, and we still use their idea: 60 seconds make a minute, and 60 minutes make an hour. Some peoples counted fingers **and toes** and grouped by twenty. French still says "four twenties" (quatre-vingts) for 80.

### Why grouping helps

Imagine counting 347 pencils one by one: it is easy to lose your place. With 3 boxes of 100, 4 packs of 10 and 7 loose pencils, you see the number at a glance. Shops, banks and factories pack things in tens and hundreds for exactly this reason.

### How big is a thousand?

1000 steps is about a 10-minute walk. 1000 days is almost 3 years. A stack of 1000 sheets of paper is about 10 cm tall.`,
    r`### Ինչու ենք հաշվում տասնյակներով

Մենք տասը մատ ունենք, և ամբողջ աշխարհում մարդիկ սկզբում հաշվել են մատների վրա։ Երբ մատները վերջանում էին, նորից էին սկսում և հիշում. «երկու լրիվ ձեռք»։ Այդ լրիվ հաշիվը դարձավ նոր միավոր՝ տասնյակ։ Տասը տասնյակը դարձավ հարյուր, և այդպես շարունակ։ Մեր ամբողջ թվային համակարգը ծնվել է երկու ձեռքից։

### Ուրիշ ինչպես են հաշվել մարդիկ

Ոչ բոլորն են խմբավորել տասով։ Հին բաբելոնացիները խմբավորում էին **վաթսունով**, և մենք մինչև հիմա օգտվում ենք նրանց գաղափարից. 60 վայրկյանը մեկ րոպե է, 60 րոպեն՝ մեկ ժամ։ Որոշ ժողովուրդներ հաշվում էին ձեռքերի **և ոտքերի** մատները և խմբավորում քսանով։ Ֆրանսերենում 80-ը մինչև հիմա «չորս քսան» է (quatre-vingts)։

### Ինչու է խմբավորումն օգնում

Պատկերացրու, որ 347 մատիտը հաշվում ես մեկ առ մեկ. հեշտ է շփոթվել։ Իսկ երբ կա 100-ական մատիտով 3 տուփ, 10-ական մատիտով 4 փաթեթ և 7 առանձին մատիտ, թիվը միանգամից երևում է։ Խանութները, բանկերը և գործարանները իրերը տասնյակներով և հարյուրներով են փաթեթավորում հենց այդ պատճառով։

### Որքա՞ն մեծ է հազարը

1000 քայլը մոտ 10 րոպե քայլք է։ 1000 օրը համարյա 3 տարի է։ 1000 թերթ թղթից կազմված կույտը մոտ 10 սմ բարձրություն ունի։`,
    r`### Почему мы считаем десятками

У нас десять пальцев, и люди по всему миру сначала считали на них. Когда пальцы кончались, начинали заново и запоминали: «две полные руки». Этот полный счёт стал новой единицей — десятком. Десять десятков стали сотней, и так далее. Вся наша система чисел выросла из двух рук.

### Как ещё считали люди

Не все группировали по десять. Древние вавилоняне группировали по **шестьдесят**, и мы до сих пор пользуемся их идеей: 60 секунд — это минута, 60 минут — час. Некоторые народы считали пальцы на руках **и на ногах** и группировали по двадцать. Французы до сих пор говорят «четыре двадцать» (quatre-vingts) вместо 80.

### Почему группировка помогает

Представь, что 347 карандашей нужно пересчитать по одному: легко сбиться. А 3 коробки по 100, 4 пачки по 10 и 7 отдельных карандашей видно сразу. Магазины, банки и заводы упаковывают вещи десятками и сотнями именно поэтому.

### Насколько велика тысяча?

1000 шагов — это примерно 10 минут ходьбы. 1000 дней — почти 3 года. Стопка из 1000 листов бумаги — высотой около 10 см.`,
  ),

  "three-digit-numbers": th(
    r`### Ten digits for every number

With just ten signs, $0$ to $9$, we can write any number at all: $7$, $70$, $700$, $7000$. The trick is that **where** a digit stands tells how much it is worth. The same 7 means seven, seventy or seven hundred depending on its place.

### The story of zero

Place value only works if an empty place can be marked. In 508 the tens place is empty, and the $0$ says so. Without a zero, 508 and 58 would look the same. Long ago people simply left a gap, which was easy to misread.

About 1500 years ago, mathematicians in **India** began to use a dot, and later a little circle, as a sign for "nothing here". The idea travelled with Arab scholars to Europe. That is why our digits are often called "Arabic numerals", although they were born in India.

### Hearing a number and writing it

When you hear "four hundred six", write one digit for every place: hundreds 4, tens none, so 0, ones 6. That gives 406. A common mistake is to write what you hear word by word: "400" and then "6", which gives 4006. Remember: a three-digit number has exactly three digits.`,
    r`### Տասը թվանշան՝ ցանկացած թվի համար

Ընդամենը տասը նշանով՝ $0$-ից $9$, կարող ենք գրել ցանկացած թիվ. $7$, $70$, $700$, $7000$։ Գաղտնիքն այն է, որ թվանշանի **տեղն** է ցույց տալիս, թե որքան արժե այն։ Նույն 7-ը կարող է նշանակել յոթ, յոթանասուն կամ յոթ հարյուր՝ կախված իր տեղից։

### Զրոյի պատմությունը

Կարգային գրառումն աշխատում է միայն այն դեպքում, երբ դատարկ տեղը կարելի է նշել։ 508-ում տասնյակների կարգը դատարկ է, և $0$-ն հենց դա է ասում։ Առանց զրոյի 508-ը և 58-ը նույն կերպ կերևային։ Վաղուց մարդիկ պարզապես բաց տեղ էին թողնում, ինչը հեշտ էր սխալ կարդալ։

Մոտ 1500 տարի առաջ **Հնդկաստանի** մաթեմատիկոսները սկսեցին կետ, իսկ հետո փոքրիկ շրջան օգտագործել որպես «այստեղ ոչինչ չկա» նշան։ Այդ գաղափարը արաբ գիտնականների միջոցով հասավ Եվրոպա։ Ահա թե ինչու մեր թվանշաններին հաճախ «արաբական» են ասում, թեև դրանք ծնվել են Հնդկաստանում։

### Թիվը լսել և գրել

Երբ լսում ես «չորս հարյուր վեց», յուրաքանչյուր կարգի համար գրիր մեկ թվանշան. հարյուրներ՝ 4, տասնյակներ չկան, ուրեմն 0, միավորներ՝ 6։ Ստացվում է 406։ Տարածված սխալ է գրել այնպես, ինչպես լսում ես՝ բառ առ բառ. «400», հետո «6», և ստացվում է 4006։ Հիշիր. եռանիշ թիվն ունի ճիշտ երեք թվանշան։`,
    r`### Десять цифр для любого числа

Всего десятью знаками, от $0$ до $9$, можно записать любое число: $7$, $70$, $700$, $7000$. Секрет в том, что **место** цифры говорит, сколько она стоит. Одна и та же 7 означает семь, семьдесят или семьсот — в зависимости от места.

### История нуля

Поместная запись работает, только если пустое место можно отметить. В числе 508 разряд десятков пуст, и $0$ говорит об этом. Без нуля 508 и 58 выглядели бы одинаково. Давным-давно люди просто оставляли пробел, и его легко было не заметить.

Около 1500 лет назад математики **Индии** стали ставить точку, а потом кружок как знак «здесь ничего нет». Эта идея пришла в Европу через арабских учёных. Поэтому наши цифры часто называют «арабскими», хотя родились они в Индии.

### Услышать число и записать

Когда слышишь «четыреста шесть», запиши по цифре на каждый разряд: сотни — 4, десятков нет — 0, единицы — 6. Получится 406. Частая ошибка — писать так, как слышишь, по словам: «400», потом «6», и выходит 4006. Запомни: в трёхзначном числе ровно три цифры.`,
  ),

  "compare-three-digit": th(
    r`### Why the biggest place always wins

Compare 199 and 201. The first number has big tens and ones (99), the second has a tiny 1. Still $201 > 199$. Why? The tens and ones together can never reach a hundred: the most they can make is $99$. So one extra hundred beats anything the smaller places can do.

### The number line

On a number line, every hundred is a long stretch: 100 to 199, 200 to 299, and so on. The hundreds digit tells which stretch a number lives in. 199 sits at the very end of the 100–199 stretch, 201 at the start of the 200–299 stretch, so 201 is further right, and bigger.

### Comparing is like a dictionary

To put words in alphabetical order, you look at the first letter, and only if it is the same do you look at the second. Numbers are compared the same way, from left to right, but **only when they have the same number of digits**. A dictionary puts "ab" before "b", yet 12 is bigger than 9. That is why you count the digits first.

### The signs > and <

The open side of the sign always faces the bigger number, and the point faces the smaller one: $523 > 498$, $356 < 372$. These signs were first used by the English mathematician Thomas Harriot about 400 years ago.`,
    r`### Ինչու է ամենամեծ կարգը միշտ հաղթում

Համեմատիր 199-ը և 201-ը։ Առաջին թիվն ունի մեծ տասնյակներ և միավորներ (99), երկրորդը՝ ընդամենը 1։ Եվ այնուամենայնիվ $201 > 199$։ Ինչո՞ւ։ Տասնյակներն ու միավորները միասին երբեք չեն կարող հասնել հարյուրի. նրանց առավելագույնը $99$ է։ Ուստի մեկ հարյուր ավել լինելն ավելի կարևոր է, քան այն ամենը, ինչ կարող են անել փոքր կարգերը։

### Թվային առանցքը

Թվային առանցքի վրա յուրաքանչյուր հարյուրյակ երկար հատված է. 100-ից 199, 200-ից 299 և այդպես շարունակ։ Հարյուրների թվանշանը ցույց է տալիս, թե որ հատվածում է «ապրում» թիվը։ 199-ը 100–199 հատվածի ամենավերջում է, 201-ը՝ 200–299 հատվածի սկզբում, ուստի 201-ն ավելի աջ է և ավելի մեծ։

### Համեմատելը նման է բառարանին

Բառերն այբբենական կարգով դասավորելու համար նայում ես առաջին տառին, և միայն եթե այն նույնն է, նայում ես երկրորդին։ Թվերը համեմատում են նույն կերպ՝ ձախից աջ, բայց **միայն երբ դրանք ունեն նույնքան թվանշան**։ Բառարանում «աբ»-ը գալիս է «բ»-ից առաջ, իսկ 12-ը, այնուամենայնիվ, մեծ է 9-ից։ Ահա թե ինչու նախ հաշվում ես թվանշանները։

### > և < նշանները

Նշանի բաց կողմը միշտ դեպի մեծ թիվն է, իսկ սուր ծայրը՝ դեպի փոքրը. $523 > 498$, $356 < 372$։ Այս նշաններն առաջինն օգտագործել է անգլիացի մաթեմատիկոս Թոմաս Հարիոթը մոտ 400 տարի առաջ։`,
    r`### Почему старший разряд всегда побеждает

Сравни 199 и 201. У первого числа большие десятки и единицы (99), у второго — всего лишь 1. И всё же $201 > 199$. Почему? Десятки и единицы вместе никогда не дотянут до сотни: самое большее, что они дают, — $99$. Поэтому лишняя сотня перевешивает всё, на что способны младшие разряды.

### Числовой луч

На числовом луче каждая сотня — длинный отрезок: от 100 до 199, от 200 до 299 и так далее. Цифра сотен говорит, на каком отрезке «живёт» число. 199 стоит в самом конце отрезка 100–199, 201 — в начале отрезка 200–299, поэтому 201 правее и больше.

### Сравнение похоже на словарь

Чтобы расставить слова по алфавиту, смотришь на первую букву, и только если она одинаковая — на вторую. Числа сравнивают так же, слева направо, но **только если в них одинаковое количество цифр**. В словаре «аб» стоит раньше «б», а 12 всё равно больше 9. Поэтому сначала посчитай цифры.

### Знаки > и <

Открытая сторона знака всегда смотрит на большее число, а острый угол — на меньшее: $523 > 498$, $356 < 372$. Эти знаки впервые использовал английский математик Томас Хэрриот около 400 лет назад.`,
  ),

  "roman-numerals": th(
    r`### Where the letters came from

Roman numerals probably began as **tally marks** cut into sticks: I, II, III. V may be a picture of an open hand with five fingers, and X two hands, or two V's joined at their points. Later the marks were made to look like letters of the Latin alphabet: C (from centum, "hundred") and M (from mille, "thousand").

### Why the Romans did not calculate with them

Try adding in Roman numerals: XXIV + XLVIII. There are no columns, because each letter keeps its value wherever it stands, and there is no zero. Multiplying is even harder. So the Romans did their sums on a **counting board** (an abacus) with pebbles and only wrote the answer down in letters. The word "calculator" comes from the Latin calculus, "a small pebble".

### Letters as numbers in other alphabets

The Romans were not the only ones. When Mesrop Mashtots created the Armenian alphabet in 405, every letter also stood for a number: Ա = 1, Բ = 2, … Թ = 9, then Ժ = 10, Ի = 20, Լ = 30, and so on up to Ք = 9000. ԺԲ means $10 + 2 = 12$. Greek and Old Slavonic writing did the same. Unlike Roman numerals, these never subtract.

### Where you still meet them

On clock faces, in book chapters, in the names of centuries (the XXI century) and of kings (Louis XIV). Many clocks write 4 as IIII instead of IV: an old habit.`,
    r`### Որտեղից են առաջացել տառերը

Հռոմեական թվանշանները հավանաբար սկսվել են փայտերի վրա արված **խազերից**. I, II, III։ V-ն գուցե բաց ձեռքի նկար է՝ հինգ մատով, իսկ X-ը՝ երկու ձեռք կամ ծայրերով միացած երկու V։ Հետագայում այդ նշանները նմանեցրին լատինական այբուբենի տառերին. C (centum՝ «հարյուր» բառից) և M (mille՝ «հազար» բառից)։

### Ինչու հռոմեացիները դրանցով չէին հաշվում

Փորձիր գումարել հռոմեական թվանշաններով. XXIV + XLVIII։ Սյունակներ չկան, որովհետև յուրաքանչյուր տառ պահում է իր արժեքը, որտեղ էլ կանգնած լինի, և զրո չկա։ Բազմապատկելն ավելի դժվար է։ Ուստի հռոմեացիները հաշվում էին **հաշվատախտակի** (աբակի) վրա՝ քարիկներով, և տառերով գրում էին միայն պատասխանը։ «Կալկուլյատոր» բառն առաջացել է լատիներեն calculus բառից, որը նշանակում է «քարիկ»։

### Տառերը որպես թվեր ուրիշ այբուբեններում

Հռոմեացիները միակը չէին։ Երբ Մեսրոպ Մաշտոցը 405 թվականին ստեղծեց հայոց այբուբենը, յուրաքանչյուր տառ նշանակում էր նաև թիվ. Ա = 1, Բ = 2, … Թ = 9, հետո Ժ = 10, Ի = 20, Լ = 30 և այդպես մինչև Ք = 9000։ ԺԲ-ն նշանակում է $10 + 2 = 12$։ Հունական և հին սլավոնական գրերն էլ էին այդպես անում։ Ի տարբերություն հռոմեականի՝ այդ թվերում երբեք հանում չկա։

### Որտեղ են դրանք հանդիպում այսօր

Ժամացույցների թվատախտակներին, գրքերի գլուխներում, դարերի (XXI դար) և արքաների անուններում (Լյուդովիկոս XIV)։ Շատ ժամացույցներում 4-ը գրված է IIII, ոչ թե IV. դա հին սովորություն է։`,
    r`### Откуда взялись буквы

Римские цифры, вероятно, начались с **зарубок** на палках: I, II, III. V, возможно, рисунок раскрытой ладони с пятью пальцами, а X — две ладони или две V, сложенные остриями. Позже знаки сделали похожими на буквы латинского алфавита: C (от centum — «сто») и M (от mille — «тысяча»).

### Почему римляне ими не считали

Попробуй сложить римскими цифрами: XXIV + XLVIII. Столбиков нет, потому что каждая буква значит одно и то же, где бы ни стояла, и нуля нет. Умножать ещё труднее. Поэтому римляне считали на **счётной доске** (абаке) с камешками, а буквами записывали только ответ. Слово «калькулятор» происходит от латинского calculus — «камешек».

### Буквы-числа в других алфавитах

Римляне были не одни. Когда Месроп Маштоц в 405 году создал армянский алфавит, каждая буква означала ещё и число: Ա = 1, Բ = 2, … Թ = 9, потом Ժ = 10, Ի = 20, Լ = 30 и так далее до Ք = 9000. ԺԲ означает $10 + 2 = 12$. Так же поступали в греческом и древнеславянском письме, где над буквой-числом ставили особый знак — титло. В отличие от римских, в этих записях ничего не вычитается.

### Где они встречаются сегодня

На циферблатах, в номерах глав, в названиях веков (XXI век) и в именах королей (Людовик XIV). На многих часах 4 написано как IIII, а не IV, — это старая привычка.`,
  ),
};
