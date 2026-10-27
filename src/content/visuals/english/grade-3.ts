import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade3: VisualMap[number] = {
  "hello-my-name-is": [
    "sentence My:attr name:subj is_Tom:pred .",
    closer(
      `**Why is «I» always big?** English is almost the only language that writes «I» with a capital letter. Long ago it was a small «i», but a single small letter was easy to miss in handwriting, so writers made it tall. Russian «я» and Armenian «ես» are written with small letters inside a sentence.

**Noon was once three o'clock.** «Good afternoon» means «after noon», and noon is 12 o'clock. The word comes from Latin «nona hora», «the ninth hour», which in Roman times was about three in the afternoon. Over the centuries the time moved, but the word stayed. Tap the parts above: «name» is the subject, «is Tom» tells us about it.`,
      `**Ինչո՞ւ է «I»-ը միշտ մեծատառ։** Անգլերենը գրեթե միակ լեզուն է, որ «I»-ը գրում է մեծատառով։ Վաղուց այն փոքրատառ «i» էր, բայց ձեռագրում մեկ փոքր տառը հեշտությամբ աննկատ էր մնում, ուստի գրիչները սկսեցին այն բարձր գրել։ Ռուսերեն «я»-ն և հայերեն «ես»-ը նախադասության մեջ գրվում են փոքրատառով։

**Կեսօրը ժամանակին ժամն երեքն էր։** «Good afternoon» նշանակում է «կեսօրից հետո», իսկ noon-ը ժամը 12-ն է։ Բառը գալիս է լատիներեն «nona hora»-ից՝ «իններորդ ժամ», որը հռոմեացիների ժամանակ մոտավորապես կեսօրից հետո ժամն երեքն էր։ Դարերի ընթացքում ժամը տեղաշարժվեց, բայց բառը մնաց։ Սեղմիր վերևի մասերը․ «name»-ը ենթական է, «is Tom»-ը նրա մասին է պատմում։`,
      `**Почему «I» всегда с большой буквы?** Английский — почти единственный язык, где «I» пишут с заглавной. Когда-то это была маленькая «i», но одна маленькая буква легко терялась в рукописи, и писцы стали делать её высокой. Русское «я» и армянское «ես» внутри предложения пишутся со строчной.

**Полдень когда-то был в три часа.** «Good afternoon» значит «после полудня», а noon — это 12 часов. Слово идёт от латинского «nona hora», «девятый час», а у римлян это было около трёх часов дня. За века время сдвинулось, а слово осталось. Нажми на части выше: «name» — подлежащее, «is Tom» сообщает о нём.`,
    ),
    ask(3, {
      en: ["Which is written correctly?", ["my name is tom and i'm nine.", "My name is Tom and i'm nine.", "My name is Tom and I'm nine."], "Capital letters for the start, for names and for I."],
      hy: ["Ո՞րն է ճիշտ գրված։", ["my name is tom and i'm nine.", "My name is Tom and i'm nine.", "My name is Tom and I'm nine."], "Մեծատառ՝ սկզբում, անունների և I-ի համար։"],
      ru: ["Что написано правильно?", ["my name is tom and i'm nine.", "My name is Tom and i'm nine.", "My name is Tom and I'm nine."], "Заглавная буква в начале, в именах и в I."],
    }),
  ],
  "alphabet-spelling": [
    "letters mode=vowels abc=en",
    closer(
      `**A, E, I, O, U.** The five vowel letters are coloured above; the other 21 are consonants. Every English word has at least one vowel letter or a Y that works like one: «sky», «my», «gym». Spell your name and notice how many vowels it has.

**Spelling on the phone.** Over the radio or a bad phone line, B, D, P and T sound alike. So pilots, police and sailors use a word for each letter: **Alpha** for A, **Bravo** for B, **Charlie** for C… «Davit» becomes «Delta, Alpha, Victor, India, Tango». This spelling alphabet has been used around the world since 1956.`,
      `**A, E, I, O, U։** Վերևում գունավորված են հինգ ձայնավոր տառերը, մյուս 21-ը բաղաձայններ են։ Ամեն անգլերեն բառ ունի գոնե մեկ ձայնավոր տառ կամ Y, որը ձայնավորի դեր է կատարում՝ «sky», «my», «gym»։ Տառ առ տառ ասա քո անունը և նկատիր, թե քանի ձայնավոր ունի։

**Տառերը հեռախոսով։** Ռադիոյով կամ վատ հեռախոսագծով B, D, P և T տառերը նման են հնչում։ Ուստի օդաչուները, ոստիկանները և նավաստիները յուրաքանչյուր տառի համար բառ են ասում՝ **Alpha**՝ A-ի, **Bravo**՝ B-ի, **Charlie**՝ C-ի համար… «Davit»-ը դառնում է «Delta, Alpha, Victor, India, Tango»։ Այս այբուբենն ամբողջ աշխարհում գործածվում է 1956 թվականից։`,
      `**A, E, I, O, U.** Пять гласных букв выделены цветом выше, остальные 21 — согласные. В каждом английском слове есть хотя бы одна гласная буква или Y, которая работает как гласная: «sky», «my», «gym». Продиктуй своё имя по буквам и посмотри, сколько в нём гласных.

**Буквы по телефону.** По радио или по плохой связи B, D, P и T звучат похоже. Поэтому лётчики, полицейские и моряки называют для каждой буквы слово: **Alpha** для A, **Bravo** для B, **Charlie** для C… «Davit» превращается в «Delta, Alpha, Victor, India, Tango». Этим алфавитом пользуются во всём мире с 1956 года.`,
    ),
    ask(2, {
      en: ["How many vowel letters does the English alphabet have?", ["3", "5", "21"], "A, E, I, O, U: five vowels and 21 consonants."],
      hy: ["Քանի՞ ձայնավոր տառ ունի անգլերեն այբուբենը։", ["3", "5", "21"], "A, E, I, O, U․ հինգ ձայնավոր և 21 բաղաձայն։"],
      ru: ["Сколько гласных букв в английском алфавите?", ["3", "5", "21"], "A, E, I, O, U: пять гласных и 21 согласная."],
    }),
  ],
  "personal-pronouns": [
    "forms mode=compare cols=enhyru I:ես:я he:նա:он she:նա:она we:մենք:мы they:նրանք:они",
    closer(
      `**Armenian has one word for he and she.** Look at the table: English says **he** for a boy and **she** for a girl, Russian says **он** and **она**, but Armenian uses **նա** for both. So Armenian speakers must take care in English: «Ani is eight. **She** is my friend», not «he».

**English once had «thou».** Five hundred years ago English had two words for «you», like Russian «ты / вы» and Armenian «դու / դուք»: **thou** for one friend and **you** for many people or for polite talk. Slowly everybody started to use the polite **you**, and «thou» stayed only in old poems and prayers.`,
      `**Հայերենում «նա»-ն և՛ տղայի, և՛ աղջկա համար է։** Նայիր աղյուսակին․ անգլերենն ասում է **he**՝ տղայի, **she**՝ աղջկա համար, ռուսերենը՝ **он** և **она**, իսկ հայերենն երկուսի համար էլ գործածում է **նա**։ Ուստի հայախոսներն անգլերենում պետք է զգույշ լինեն՝ «Ani is eight. **She** is my friend», ոչ թե «he»։

**Անգլերենում ժամանակին կար «thou»։** Հինգ հարյուր տարի առաջ անգլերենում «դու»-ի համար երկու բառ կար, ինչպես հայերենում «դու / դուք»-ը և ռուսերենում «ты / вы»-ն՝ **thou**՝ մեկ ընկերոջ, և **you**՝ շատերի կամ քաղաքավարի խոսքի համար։ Աստիճանաբար բոլորը սկսեցին գործածել քաղաքավարի **you**-ն, իսկ «thou»-ն մնաց միայն հին բանաստեղծություններում և աղոթքներում։`,
      `**В армянском одно слово для «он» и «она».** Посмотри на таблицу: английский говорит **he** о мальчике и **she** о девочке, русский — **он** и **она**, а армянский для обоих использует **նա**. Поэтому армянам нужно быть внимательными: «Ani is eight. **She** is my friend», а не «he».

**Когда-то в английском было «thou».** Пятьсот лет назад в английском было два слова для «ты/вы», как в русском и армянском: **thou** — одному другу, **you** — многим или вежливо. Постепенно все стали говорить вежливое **you**, а «thou» осталось только в старых стихах и молитвах.`,
    ),
    ask(1, {
      en: ["«Anna is my sister. ___ is eight.»", ["She", "He", "It"], "Anna is a girl, so we say she."],
      hy: ["«Anna is my sister. ___ is eight.»", ["She", "He", "It"], "Աննան աղջիկ է, ուստի ասում ենք she։"],
      ru: ["«Anna is my sister. ___ is eight.»", ["She", "He", "It"], "Анна — девочка, поэтому she."],
    }),
  ],
  "verb-to-be": [
    "forms mode=persons lang=en I_[am] you_[are] he_[is] we_[are] you_[are] they_[are]",
    closer(
      `**Three words, one verb.** Am, is and are look nothing alike, but they are all forms of one verb, **to be**. It is the most irregular verb in English: its forms come from three different old words. Armenian is similar: «եմ, ես, է, ենք, եք, են» all belong to one verb, and they also come after the word: «Աշակերտ եմ».

**Russian hides this verb.** In Russian you say «Я ученик» with no verb at all. In English you can never leave it out: «I **am** a pupil», «She **is** happy». Look at the table: the person (I, he, they) chooses the form.`,
      `**Երեք բառ՝ մեկ բայ։** Am, is և are բառերն իրար բոլորովին նման չեն, բայց բոլորը մեկ բայի՝ **to be**-ի ձևեր են։ Դա անգլերենի ամենաանկանոն բայն է․ նրա ձևերը գալիս են երեք տարբեր հին բառերից։ Հայերենը նման է․ «եմ, ես, է, ենք, եք, են» ձևերը պատկանում են մեկ բային, և նրանք նույնպես գալիս են բառից հետո՝ «Աշակերտ եմ»։

**Ռուսերենը թաքցնում է այս բայը։** Ռուսերենում ասում ես «Я ученик»՝ առանց որևէ բայի։ Անգլերենում այն երբեք չես կարող բաց թողնել՝ «I **am** a pupil», «She **is** happy»։ Նայիր աղյուսակին․ դեմքն է (I, he, they) ընտրում ձևը։`,
      `**Три слова — один глагол.** Am, is и are совсем не похожи, но всё это формы одного глагола **to be**. Это самый неправильный глагол английского: его формы пришли от трёх разных древних слов. В армянском похоже: «եմ, ես, է, ենք, եք, են» — формы одного глагола, и они тоже стоят после слова: «Աշակերտ եմ».

**Русский прячет этот глагол.** По-русски говорят «Я ученик» вообще без глагола. В английском его нельзя пропустить: «I **am** a pupil», «She **is** happy». Посмотри на таблицу: форму выбирает лицо (I, he, they).`,
    ),
    ask(3, {
      en: ["Choose the correct sentence.", ["They is my friends.", "They my friends.", "They are my friends."], "They takes are, and English never drops the verb."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["They is my friends.", "They my friends.", "They are my friends."], "They-ի հետ գործածվում է are, և անգլերենն երբեք բայը բաց չի թողնում։"],
      ru: ["Выбери правильное предложение.", ["They is my friends.", "They my friends.", "They are my friends."], "С they — are, и английский никогда не пропускает глагол."],
    }),
  ],
  "reading-short-vowels": [
    "forms mode=compare cols=rhyme cat:hat pen:ten pig:big dog:frog bus:sun",
    closer(
      `**Word families.** Change only the first letter and you get a new word: c**at**, h**at**, m**at**, b**at**, s**at**. These «families» help you read many words at once: if you can read «cat», you can read the whole family. Read the pairs in the table aloud, then add one more word to each.

**26 letters, about 44 sounds.** English has many more sounds than letters, so one letter can say different things: «a» in «cat» and in «cake». That is why reading starts with the short sounds in closed syllables: one letter, one sound, c-a-t.`,
      `**Բառերի ընտանիքներ։** Փոխիր միայն առաջին տառը, և նոր բառ կստանաս՝ c**at**, h**at**, m**at**, b**at**, s**at**։ Այս «ընտանիքները» օգնում են միանգամից շատ բառեր կարդալ․ եթե կարող ես կարդալ «cat», կարող ես կարդալ ամբողջ ընտանիքը։ Բարձրաձայն կարդա աղյուսակի զույգերը, հետո յուրաքանչյուրին ավելացրու ևս մեկ բառ։

**26 տառ՝ մոտ 44 հնչյուն։** Անգլերենում հնչյուններն ավելի շատ են, քան տառերը, ուստի մեկ տառը կարող է տարբեր կերպ հնչել՝ «a»-ն «cat»-ում և «cake»-ում։ Ահա թե ինչու ընթերցանությունը սկսվում է փակ վանկերի կարճ հնչյուններից՝ մեկ տառ, մեկ հնչյուն՝ c-a-t։`,
      `**Семьи слов.** Поменяй только первую букву — получится новое слово: c**at**, h**at**, m**at**, b**at**, s**at**. Такие «семьи» помогают читать много слов сразу: умеешь читать «cat» — прочитаешь всю семью. Прочитай пары из таблицы вслух и добавь к каждой ещё одно слово.

**26 букв — около 44 звуков.** В английском звуков гораздо больше, чем букв, поэтому одна буква может звучать по-разному: «a» в «cat» и в «cake». Поэтому чтение начинают с кратких звуков в закрытых слогах: одна буква — один звук, c-a-t.`,
    ),
    ask(2, {
      en: ["Which word is in the same family as «pig»?", ["peg", "dig", "pin"], "Pig and dig both end in -ig."],
      hy: ["Ո՞ր բառն է «pig»-ի ընտանիքից։", ["peg", "dig", "pin"], "Pig-ը և dig-ը երկուսն էլ ավարտվում են -ig-ով։"],
      ru: ["Какое слово из той же семьи, что «pig»?", ["peg", "dig", "pin"], "Pig и dig оба кончаются на -ig."],
    }),
  ],
  "reading-long-vowels": [
    "forms mode=compare cols=magice cap:cape pin:pine hop:hope cub:cube kit:kite",
    closer(
      `**The silent e used to speak.** Six hundred years ago, in the time of the poet Chaucer, the final e was pronounced: «name» sounded like «na-meh». Later people stopped saying it, but they kept writing it, and it stayed as a sign that the vowel before it is long.

**Why do vowels «say their names»?** At about the same time English vowels changed their sounds (scholars call it the Great Vowel Shift), but the spelling did not change. That is why the letter **i** in «kite» sounds like the letter's name, «eye». Read the pairs above: one letter, e, changes the whole word.`,
      `**Համր e-ն ժամանակին խոսում էր։** Վեց հարյուր տարի առաջ՝ բանաստեղծ Չոսերի ժամանակ, վերջին e-ն արտասանվում էր․ «name»-ը հնչում էր մոտավորապես «նա-մը»։ Հետո մարդիկ դադարեցին այն արտասանել, բայց շարունակեցին գրել, և այն մնաց որպես նշան, որ իրենից առաջ եկող ձայնավորն երկար է։

**Ինչո՞ւ են ձայնավորներն «իրենց անունն ասում»։** Մոտավորապես նույն ժամանակ անգլերեն ձայնավորները փոխեցին իրենց հնչյունները (գիտնականներն այն կոչում են ձայնավորների մեծ տեղաշարժ), բայց ուղղագրությունը չփոխվեց։ Ահա թե ինչու «kite»-ում **i** տառը հնչում է տառի անվան պես՝ «այ»։ Կարդա վերևի զույգերը․ մեկ տառը՝ e-ն, փոխում է ամբողջ բառը։`,
      `**Немая e когда-то говорила.** Шестьсот лет назад, во времена поэта Чосера, конечную e произносили: «name» звучало примерно как «на-мэ». Потом её перестали произносить, но продолжали писать, и она осталась знаком того, что гласная перед ней долгая.

**Почему гласные «называют себя»?** Примерно тогда же английские гласные изменили своё звучание (учёные называют это Великим сдвигом гласных), а написание осталось прежним. Поэтому **i** в «kite» звучит как название буквы — «ай». Прочитай пары выше: одна буква e меняет всё слово.`,
    ),
    ask(1, {
      en: ["Add the magic e to «hop». What does the o say now?", ["its name, as in hope", "the short o, as in dog", "nothing, it is silent"], "The magic e makes the vowel before it say its name."],
      hy: ["«hop»-ին ավելացրու կախարդական e։ Ինչպե՞ս է հիմա հնչում o-ն։", ["its name, as in hope", "the short o, as in dog", "nothing, it is silent"], "Կախարդական e-ն ստիպում է իրենից առաջ եկող ձայնավորին ասել իր անունը։"],
      ru: ["Добавь к «hop» волшебную e. Как теперь звучит o?", ["its name, as in hope", "the short o, as in dog", "nothing, it is silent"], "Волшебная e заставляет гласную перед ней звучать как своё название."],
    }),
  ],
  "classroom-objects": [
    "forms mode=compare cols=brame rubber:eraser schoolbag:backpack timetable:schedule maths:math",
    closer(
      `**There is no lead in a pencil.** We call the black part «lead», but it is **graphite** mixed with clay. In the 1500s people found a big mine of graphite in England and thought it was a kind of lead, and the name stuck. The more clay, the harder and lighter the pencil.

**A rubber that rubs.** Before rubbers, people rubbed out pencil marks with bread. In 1770 the English scientist Joseph Priestley noticed that a piece of tree gum rubbed pencil out well, so it was called a **rubber**. Americans say **eraser**. Hide a column above and say the other word.`,
      `**Մատիտում կապար չկա։** Սև մասն անգլերենում կոչում են «lead» (կապար), բայց դա կավի հետ խառնված **գրաֆիտ** է։ 1500-ականներին Անգլիայում գրաֆիտի մեծ հանք գտան և կարծեցին, թե դա կապարի տեսակ է, և անունը մնաց։ Որքան շատ է կավը, այնքան մատիտն ավելի կարծր է և գիծը՝ բաց։

**Ռետին, որը «քսում» է։** Ռետինից առաջ մատիտի հետքերը ջնջում էին հացով։ 1770 թվականին անգլիացի գիտնական Ջոզեֆ Փրիսթլին նկատեց, որ ծառի խեժի կտորը լավ է ջնջում մատիտը, և այն անվանեցին **rubber** (to rub՝ քսել, շփել բայից)։ Ամերիկացիներն ասում են **eraser**։ Թաքցրու վերևի սյունակներից մեկը և ասա մյուս բառը։`,
      `**В карандаше нет свинца.** Чёрную часть по-английски называют «lead» (свинец), но это **графит**, смешанный с глиной. В 1500-х годах в Англии нашли большое месторождение графита и решили, что это вид свинца, — так название и прижилось. Чем больше глины, тем твёрже карандаш и светлее линия.

**Ластик, который трёт.** До ластиков следы карандаша стирали хлебом. В 1770 году английский учёный Джозеф Пристли заметил, что кусочек древесной смолы хорошо стирает карандаш, и его назвали **rubber** (от to rub — тереть). Американцы говорят **eraser**. Спрячь столбец выше и назови другое слово.`,
    ),
    ask(2, {
      en: ["What is the black part of a pencil made of?", ["lead", "graphite and clay", "coal"], "It is called «lead», but it is graphite mixed with clay."],
      hy: ["Ինչի՞ց է պատրաստված մատիտի սև մասը։", ["lead", "graphite and clay", "coal"], "Այն կոչվում է «lead», բայց դա կավի հետ խառնված գրաֆիտ է։"],
      ru: ["Из чего сделана чёрная часть карандаша?", ["lead", "graphite and clay", "coal"], "Её называют «lead», но это графит с глиной."],
    }),
  ],
  "a-an": [
    "forms mode=compare cols=aan a_pen:an_apple a_big_egg:an_egg a_uniform:an_umbrella a_horse:an_hour",
    closer(
      `**Listen, don't look.** The rule is about the first **sound**, not the first letter. «Hour» starts with the letter h, but the h is silent, so we say **an hour**. «Uniform» starts with the letter u, but the sound is «you», so we say **a uniform**. Say the word aloud and you will hear which one fits.

**«An» lost and found its n.** «An» comes from the word «one». Before consonants people dropped the n, and «a» appeared. The n sometimes jumped between words: «a napron» became «an apron», and «a nadder» (a snake) became «an adder».`,
      `**Լսի՛ր, մի՛ նայիր։** Կանոնը վերաբերում է առաջին **հնչյունին**, ոչ թե առաջին տառին։ «Hour»-ը սկսվում է h տառով, բայց h-ն չի արտասանվում, ուստի ասում ենք **an hour**։ «Uniform»-ը սկսվում է u տառով, բայց հնչյունը «յու» է, ուստի ասում ենք **a uniform**։ Բարձրաձայն ասա բառը, և կլսես, թե որն է համապատասխանում։

**«An»-ը կորցրեց և գտավ իր n-ը։** «An»-ը գալիս է «one» (մեկ) բառից։ Բաղաձայններից առաջ մարդիկ բաց էին թողնում n-ը, և առաջացավ «a»-ն։ n-ը երբեմն թռչում էր մի բառից մյուսը․ «a napron»-ը դարձավ «an apron» (գոգնոց), իսկ «a nadder»-ը (օձ)՝ «an adder»։`,
      `**Слушай, а не смотри.** Правило касается первого **звука**, а не первой буквы. «Hour» начинается с буквы h, но она не читается, поэтому **an hour**. «Uniform» начинается с буквы u, но звук — «ю», поэтому **a uniform**. Скажи слово вслух — и услышишь, что подходит.

**«An» потерял и нашёл свою n.** «An» происходит от слова «one» (один). Перед согласными n стали опускать, и появилось «a». Иногда n перескакивала между словами: «a napron» стало «an apron» (фартук), а «a nadder» (змея) — «an adder».`,
    ),
    ask(2, {
      en: ["Which is correct?", ["a hour", "an hour", "hour a"], "The h in hour is silent, so it starts with a vowel sound."],
      hy: ["Ո՞րն է ճիշտ։", ["a hour", "an hour", "hour a"], "Hour-ի h-ն չի արտասանվում, ուստի բառը սկսվում է ձայնավոր հնչյունով։"],
      ru: ["Как правильно?", ["a hour", "an hour", "hour a"], "h в hour не читается, слово начинается с гласного звука."],
    }),
  ],
  "plural-s": [
    "forms mode=compare cols=number a_bus:buses a_box:boxes a_baby:babies a_child:children a_man:men",
    closer(
      `**Why -es?** Try to say «boxs» or «buss»: it is hard, because two hissing sounds meet. So after s, sh, ch and x English adds a little extra syllable, **-es**: box-**es**, bus-**es**, watch-**es**. Count the syllables: «box» has one, «boxes» has two.

**Children is a double plural.** Long ago the plural of child was «childer». Then people added another old plural ending, **-en** (as in «oxen»), and got «child-r-en». So «children» has two plurals in one word. Hide a column above and say the plurals aloud.`,
      `**Ինչո՞ւ -es։** Փորձիր ասել «boxs» կամ «buss»․ դժվար է, որովհետև երկու շչական հնչյուն են հանդիպում։ Ուստի s, sh, ch և x-ից հետո անգլերենն ավելացնում է մի փոքր լրացուցիչ վանկ՝ **-es**․ box-**es**, bus-**es**, watch-**es**։ Հաշվիր վանկերը․ «box»-ն ունի մեկ, «boxes»-ը՝ երկու։

**Children-ը կրկնակի հոգնակի է։** Վաղուց child-ի հոգնակին «childer» էր։ Հետո մարդիկ ավելացրին մեկ այլ հին հոգնակի վերջավորություն՝ **-en** (ինչպես «oxen»-ում), և ստացվեց «child-r-en»։ Ուրեմն «children»-ը մեկ բառում երկու հոգնակի ունի։ Թաքցրու վերևի սյունակներից մեկը և բարձրաձայն ասա հոգնակիները։`,
      `**Почему -es?** Попробуй сказать «boxs» или «buss»: трудно, потому что встречаются два свистящих звука. Поэтому после s, sh, ch и x английский добавляет маленький лишний слог **-es**: box-**es**, bus-**es**, watch-**es**. Посчитай слоги: в «box» один, в «boxes» два.

**Children — двойное множественное число.** Когда-то множественное от child было «childer». Потом добавили ещё одно старое окончание **-en** (как в «oxen»), и вышло «child-r-en». Так что в «children» два множественных числа сразу. Спрячь столбец выше и назови формы вслух.`,
    ),
    ask(3, {
      en: ["One watch, two…", ["watchs", "watch", "watches"], "After ch we add -es: watches."],
      hy: ["One watch, two…", ["watchs", "watch", "watches"], "ch-ից հետո ավելացնում ենք -es՝ watches։"],
      ru: ["One watch, two…", ["watchs", "watch", "watches"], "После ch добавляем -es: watches."],
    }),
  ],
  "this-that": [
    "forms mode=compare cols=nearfar this_pen:that_pen these_pens:those_pens this_apple:that_apple these_birds:those_birds",
    closer(
      `**Armenian has three, English has two.** English points with **this** (near me) and **that** (far). Russian is the same: «этот» and «тот». Armenian has three words: **այս** (near me), **այդ** (near you) and **այն** (far from both of us). In English «այդ» and «այն» are both **that**.

**The noun must agree.** One thing: **this** book, **that** book. Many things: **these** books, **those** books. Listen to the vowel: «this» is short [ɪ], «these» is long [iː]. Hide a column above and say the other form.`,
      `**Հայերենն ունի երեք, անգլերենը՝ երկու։** Անգլերենը ցույց է տալիս **this**-ով (ինձ մոտ) և **that**-ով (հեռու)։ Ռուսերենում նույնն է՝ «этот» և «тот»։ Հայերենն ունի երեք բառ՝ **այս** (ինձ մոտ), **այդ** (քեզ մոտ) և **այն** (մեզանից հեռու)։ Անգլերենում «այդ»-ն էլ, «այն»-ն էլ **that** են։

**Գոյականը պետք է համաձայնի։** Մեկ առարկա՝ **this** book, **that** book։ Շատ առարկաներ՝ **these** books, **those** books։ Լսիր ձայնավորը․ «this»-ում այն կարճ է [ɪ], «these»-ում՝ երկար [iː]։ Թաքցրու վերևի սյունակներից մեկը և ասա մյուս ձևը։`,
      `**В армянском три слова, в английском два.** Английский указывает словами **this** (рядом со мной) и **that** (далеко). В русском так же: «этот» и «тот». В армянском три слова: **այս** (рядом со мной), **այդ** (рядом с тобой) и **այն** (далеко от нас обоих). В английском и «այդ», и «այն» — это **that**.

**Существительное должно согласоваться.** Один предмет: **this** book, **that** book. Много: **these** books, **those** books. Послушай гласную: в «this» она краткая [ɪ], в «these» — долгая [iː]. Спрячь столбец выше и назови другую форму.`,
    ),
    ask(2, {
      en: ["Birds far away in the sky: «Look at ___ birds!»", ["these", "those", "this"], "Many and far: those."],
      hy: ["Թռչուններ՝ հեռվում, երկնքում․ «Look at ___ birds!»", ["these", "those", "this"], "Շատ և հեռու՝ those։"],
      ru: ["Птицы далеко в небе: «Look at ___ birds!»", ["these", "those", "this"], "Много и далеко — those."],
    }),
  ],
  "there-is-are": [
    "sentence mode=order There are two windows in my room .",
    closer(
      `**«There» that is not a place.** In «There is a cat in the box» the word **there** does not mean «over there». It only opens the sentence, and the real news comes after the verb: «a cat». You can even say «There is a cat **here**».

**Armenian counts too.** Armenian works like English: **կա** for one thing and **կան** for many («Սենյակում կա մի սեղան», «Կան երկու պատուհան»), just like **is** and **are**. Russian uses one word, «есть», for both. Build the sentence above: many windows, so **are**.`,
      `**«There», որը տեղ չէ։** «There is a cat in the box» նախադասության մեջ **there**-ը չի նշանակում «այնտեղ»։ Այն միայն բացում է նախադասությունը, իսկ իսկական լուրը գալիս է բայից հետո՝ «a cat»։ Կարելի է նույնիսկ ասել «There is a cat **here**» (Այստեղ կատու կա)։

**Հայերենն էլ է հաշվում։** Հայերենն աշխատում է անգլերենի պես՝ **կա**՝ մեկ առարկայի, **կան**՝ շատերի համար («Սենյակում կա մի սեղան», «Կան երկու պատուհան»), ճիշտ ինչպես **is**-ը և **are**-ը։ Ռուսերենն երկուսի համար էլ գործածում է մեկ բառ՝ «есть»։ Վերևում կազմիր նախադասությունը․ պատուհանները շատ են, ուստի՝ **are**։`,
      `**«There», которое не место.** В «There is a cat in the box» слово **there** не значит «там». Оно только открывает предложение, а главное сообщение идёт после глагола: «a cat». Можно даже сказать «There is a cat **here**» (Здесь есть кошка).

**Армянский тоже считает.** В армянском как в английском: **կա** — для одного предмета, **կան** — для многих («Սենյակում կա մի սեղան», «Կան երկու պատուհան»), точно как **is** и **are**. В русском одно слово «есть» для обоих случаев. Собери предложение выше: окон много, значит **are**.`,
    ),
    ask(1, {
      en: ["There ___ three books on the desk.", ["are", "is", "am"], "Three books are many, so there are."],
      hy: ["There ___ three books on the desk.", ["are", "is", "am"], "Երեք գիրքը շատ է, ուստի there are։"],
      ru: ["There ___ three books on the desk.", ["are", "is", "am"], "Три книги — это много, значит there are."],
    }),
  ],
  "classroom-language": [
    "sentence mode=order Can I have a pencil , please ?",
    closer(
      `**«Please» is a short wish.** It comes from «if you please», which meant «if it pleases you, if you like». People shortened it to one word. In English «please» makes almost any request polite, so put it at the end: «Can you repeat, **please**?»

**Can I or may I?** Some teachers like «**May** I go out?», which is a little more formal. «**Can** I go out, please?» is fine too, and it is what most people say. Both get a «Yes, you can» or «Yes, you may». Build the request above, then make your own with «Can I have…, please?».`,
      `**«Please»-ը կարճ մաղթանք է։** Այն գալիս է «if you please»-ից, որը նշանակում էր «եթե քեզ հաճելի է, եթե կամենաս»։ Մարդիկ այն կրճատեցին մեկ բառի։ Անգլերենում «please»-ը գրեթե ցանկացած խնդրանք քաղաքավարի է դարձնում, ուստի դիր այն վերջում՝ «Can you repeat, **please**?»։

**Can I, թե՞ may I։** Որոշ ուսուցիչներ նախընտրում են «**May** I go out?», որը մի քիչ ավելի պաշտոնական է։ «**Can** I go out, please?»-ն էլ ճիշտ է, և մարդկանց մեծ մասն այդպես է ասում։ Երկուսին էլ պատասխանում են «Yes, you can» կամ «Yes, you may»։ Վերևում կազմիր խնդրանքը, հետո՝ քո սեփականը՝ «Can I have…, please?»։`,
      `**«Please» — это короткое пожелание.** Оно пришло от «if you please» — «если вам угодно». Со временем его сократили до одного слова. В английском «please» делает вежливой почти любую просьбу, так что ставь его в конце: «Can you repeat, **please**?»

**Can I или may I?** Некоторые учителя любят «**May** I go out?» — это чуть официальнее. «**Can** I go out, please?» тоже правильно, и так говорит большинство. На оба отвечают «Yes, you can» или «Yes, you may». Собери просьбу выше, а потом придумай свою: «Can I have…, please?».`,
    ),
    ask(3, {
      en: ["You didn't hear the teacher. What do you say?", ["Repeat!", "What?", "Can you repeat, please?"], "A question with please is the polite way."],
      hy: ["Չլսեցիր ուսուցչին։ Ի՞նչ ես ասում։", ["Repeat!", "What?", "Can you repeat, please?"], "Please-ով հարցը քաղաքավարի ձևն է։"],
      ru: ["Ты не расслышал учителя. Что скажешь?", ["Repeat!", "What?", "Can you repeat, please?"], "Вопрос с please — вежливый вариант."],
    }),
  ],
  "family-members": [
    "forms mode=compare cols=apos the_bike_of_Tom:Tom's_bike the_sister_of_Anna:Anna's_sister the_cat_of_my_granny:my_granny's_cat",
    closer(
      `**Armenian and English put the owner first.** «**Tom's** bike» and «**Թոմի** հեծանիվը» both start with the owner, and both add a little ending to the owner: **'s** and **-ի**. Russian puts the owner after: «велосипед **Тома**». If you speak Armenian, «'s» will feel natural.

**Where did the apostrophe come from?** In old English the ending was **-es**: «Tomes bike». Later the e disappeared, and printers put an apostrophe (') in its place: «Tom's». That is why the apostrophe sits between the name and the s. Hide a column above and change the long form into the short one.`,
      `**Հայերենը և անգլերենը սեփականատիրոջը դնում են առաջ։** «**Tom's** bike»-ը և «**Թոմի** հեծանիվը» երկուսն էլ սկսվում են տիրոջից, և երկուսն էլ տիրոջն ավելացնում են փոքր վերջավորություն՝ **'s** և **-ի**։ Ռուսերենը տիրոջը դնում է հետո՝ «велосипед **Тома**»։ Եթե հայերեն ես խոսում, «'s»-ը քեզ բնական կթվա։

**Որտեղի՞ց ապաթարցը։** Հին անգլերենում վերջավորությունը **-es** էր՝ «Tomes bike»։ Հետո e-ն անհետացավ, և տպագրիչները նրա տեղում ապաթարց (') դրեցին՝ «Tom's»։ Ահա թե ինչու ապաթարցը կանգնած է անվան և s-ի միջև։ Թաքցրու վերևի սյունակներից մեկը և երկար ձևը դարձրու կարճ։`,
      `**Армянский и английский ставят владельца первым.** «**Tom's** bike» и «**Թոմի** հեծանիվը» оба начинаются с владельца и оба добавляют к нему маленькое окончание: **'s** и **-ի**. Русский ставит владельца после: «велосипед **Тома**». Если ты говоришь по-армянски, «'s» покажется естественным.

**Откуда апостроф?** В старом английском окончание было **-es**: «Tomes bike». Потом e исчезла, и печатники поставили на её место апостроф ('): «Tom's». Поэтому апостроф стоит между именем и s. Спрячь столбец выше и преврати длинную форму в короткую.`,
    ),
    ask(2, {
      en: ["How do you say «the doll of Ani» in a short way?", ["Ani doll", "Ani's doll", "doll's Ani"], "Owner + 's + thing: Ani's doll."],
      hy: ["Ինչպե՞ս կարճ ասել «the doll of Ani»։", ["Ani doll", "Ani's doll", "doll's Ani"], "Տեր + 's + առարկա՝ Ani's doll։"],
      ru: ["Как коротко сказать «the doll of Ani»?", ["Ani doll", "Ani's doll", "doll's Ani"], "Владелец + 's + предмет: Ani's doll."],
    }),
  ],
  "have-got-has-got": [
    "forms mode=persons lang=en I_[have]_got you_[have]_got he_[has]_got we_[have]_got you_[have]_got they_[have]_got",
    closer(
      `**He, she, it get an «s».** Look at the table: only the third line changes, **has** instead of have. It is the same little «s» you will meet in «he plays», «she reads». Remember it now and the present simple in grade 4 will be easy.

**One «'s», two meanings.** «He**'s** got a kite» means he **has** got, but «He**'s** nine» means he **is**. How to tell? If **got** comes next, it is «has». Read each sentence twice, once with «has» and once with «is», and keep the one that makes sense.`,
      `**He, she, it-ը ստանում են «s»։** Նայիր աղյուսակին․ փոխվում է միայն երրորդ տողը՝ have-ի փոխարեն **has**։ Դա նույն փոքրիկ «s»-ն է, որին կհանդիպես «he plays», «she reads» ձևերում։ Հիշիր այն հիմա, և 4-րդ դասարանի present simple-ը հեշտ կլինի։

**Մեկ «'s»՝ երկու իմաստ։** «He**'s** got a kite»-ը նշանակում է he **has** got, իսկ «He**'s** nine»-ը՝ he **is**։ Ինչպե՞ս տարբերել։ Եթե հետո գալիս է **got**, ուրեմն «has» է։ Ամեն նախադասություն կարդա երկու անգամ՝ մեկ «has»-ով, մեկ «is»-ով, և պահիր այն, որն իմաստ ունի։`,
      `**He, she, it получают «s».** Посмотри на таблицу: меняется только третья строка — **has** вместо have. Это та же маленькая «s», которую ты встретишь в «he plays», «she reads». Запомни её сейчас — и present simple в 4 классе будет лёгким.

**Одно «'s» — два значения.** «He**'s** got a kite» значит he **has** got, а «He**'s** nine» — he **is**. Как различить? Если дальше идёт **got**, это «has». Прочитай каждое предложение дважды — с «has» и с «is» — и оставь то, что имеет смысл.`,
    ),
    ask(1, {
      en: ["What does «she's» mean in «She's got a brother»?", ["she has", "she is", "she was"], "Got comes next, so 's means has."],
      hy: ["Ի՞նչ է նշանակում «she's»-ը «She's got a brother» նախադասության մեջ։", ["she has", "she is", "she was"], "Հետո got է գալիս, ուստի 's-ը նշանակում է has։"],
      ru: ["Что значит «she's» в «She's got a brother»?", ["she has", "she is", "she was"], "Дальше идёт got, значит 's — это has."],
    }),
  ],
  rooms: [
    "forms mode=compare cols=brame cooker:stove wardrobe:closet tap:faucet bath:bathtub",
    closer(
      `**A wardrobe was once a room.** The word is made of «ward» (to guard) and «robe» (clothes). In old castles the wardrobe was a small room where clothes were kept safe. Later the name moved to the big cupboard that does the same job.

**Ask for the right room.** In America «bathroom» is a polite word for any room with a toilet, even in a restaurant where there is no bath. In Britain people say «toilet» or, informally, «loo». Hide a column above and say the other word.`,
      `**Wardrobe-ը ժամանակին սենյակ էր։** Բառը կազմված է «ward» (պահպանել) և «robe» (հագուստ) մասերից։ Հին ամրոցներում wardrobe-ը փոքր սենյակ էր, որտեղ հագուստը պահպանվում էր։ Հետո անունն անցավ նույն գործն անող մեծ պահարանին։

**Խնդրիր ճիշտ սենյակը։** Ամերիկայում «bathroom»-ը զուգարան ունեցող ցանկացած սենյակի քաղաքավարի անունն է, նույնիսկ ռեստորանում, որտեղ լոգարան չկա։ Բրիտանիայում ասում են «toilet» կամ, ոչ պաշտոնապես, «loo»։ Թաքցրու վերևի սյունակներից մեկը և ասա մյուս բառը։`,
      `**Wardrobe когда-то был комнатой.** Слово составлено из «ward» (охранять) и «robe» (одежда). В старых замках wardrobe был маленькой комнатой, где хранили одежду. Потом название перешло к большому шкафу, который делает ту же работу.

**Спроси нужную комнату.** В Америке «bathroom» — вежливое название любой комнаты с туалетом, даже в ресторане, где ванны нет. В Британии говорят «toilet» или неофициально «loo». Спрячь столбец выше и назови другое слово.`,
    ),
    ask(2, {
      en: ["A British «wardrobe» is an American…", ["cooker", "closet", "faucet"], "Wardrobe (British) = closet (American)."],
      hy: ["Բրիտանական «wardrobe»-ը ամերիկյան…", ["cooker", "closet", "faucet"], "Wardrobe (բրիտանական) = closet (ամերիկյան)։"],
      ru: ["Британский «wardrobe» — это американский…", ["cooker", "closet", "faucet"], "Wardrobe (брит.) = closet (амер.)."],
    }),
  ],
  "prepositions-place": [
    "sentence The:attr cat:subj is:pred under_the_table:adv .",
    closer(
      `**Armenian puts the little word after.** English says «**under** the table», with the little word first. Armenian says «սեղանի **տակ**», «table's under», with the little word after: «տուփի **մեջ**» (in the box), «աթոռի **վրա**» (on the chair). Russian is like English, «**под** столом», but the noun changes its ending.

**In front of is three words, one meaning.** «In front of», «next to» and «behind» tell you where something is compared with something else. Tap the parts above: «under the table» answers the question **where?** Then hide a toy at home and describe where it is.`,
      `**Հայերենը փոքր բառը դնում է հետո։** Անգլերենն ասում է «**under** the table»՝ փոքր բառն առաջ։ Հայերենն ասում է «սեղանի **տակ**»՝ փոքր բառը հետո՝ «տուփի **մեջ**», «աթոռի **վրա**»։ Ռուսերենը նման է անգլերենին՝ «**под** столом», բայց գոյականը փոխում է վերջավորությունը։

**In front of-ը երեք բառ է, բայց մեկ իմաստ։** «In front of», «next to» և «behind» բառերը ցույց են տալիս, թե որտեղ է ինչ-որ բան մեկ այլ բանի համեմատ։ Սեղմիր վերևի մասերը․ «under the table»-ը պատասխանում է **որտե՞ղ** հարցին։ Հետո տանը թաքցրու մի խաղալիք և նկարագրիր, թե որտեղ է այն։`,
      `**Армянский ставит маленькое слово после.** Английский говорит «**under** the table» — маленькое слово впереди. Армянский — «սեղանի **տակ**», «стола под»: «տուփի **մեջ**» (в коробке), «աթոռի **վրա**» (на стуле). Русский похож на английский — «**под** столом», но у существительного меняется окончание.

**In front of — три слова, одно значение.** «In front of», «next to» и «behind» показывают, где что-то находится по отношению к другому предмету. Нажми на части выше: «under the table» отвечает на вопрос **где?** Потом спрячь дома игрушку и опиши, где она.`,
    ),
    ask(3, {
      en: ["The ball is below the chair. «The ball is ___ the chair.»", ["on", "in", "under"], "Below = under."],
      hy: ["Գնդակն աթոռի տակ է։ «The ball is ___ the chair.»", ["on", "in", "under"], "Տակ = under։"],
      ru: ["Мяч под стулом. «The ball is ___ the chair.»", ["on", "in", "under"], "Под = under."],
    }),
  ],
  "pets-animals": [
    "forms mode=compare cols=its It's_white:Its_ears_are_long It's_small:Its_tail_is_short It's_my_rabbit:Its_name_is_Snowy",
    closer(
      `**The trick for its and it's.** Even grown-ups mix them up. Try to say «it is» in the sentence. If it works, write **it's**: «It's white» = «It is white». If it doesn't, write **its** with no apostrophe: «Its ears are long», never «It is ears». Hide a column above and test yourself.

**Groups of animals have names.** Sheep live in a **flock**, cows in a **herd**, and fish swim in a **school**. And the word «sheep» stays the same for one and for a whole flock: one sheep, a hundred sheep.`,
      `**Its-ի և it's-ի հնարքը։** Նույնիսկ մեծերն են դրանք շփոթում։ Փորձիր նախադասության մեջ ասել «it is»։ Եթե ստացվում է, գրիր **it's**՝ «It's white» = «It is white»։ Եթե չի ստացվում, գրիր **its**՝ առանց ապաթարցի՝ «Its ears are long», երբեք՝ «It is ears»։ Թաքցրու վերևի սյունակներից մեկը և ստուգիր քեզ։

**Կենդանիների խմբերն անուններ ունեն։** Ոչխարներն ապրում են **flock**-ով (հոտ), կովերը՝ **herd**-ով (նախիր), իսկ ձկները լողում են **school**-ով (երամ)։ Իսկ «sheep» բառը նույնն է մնում և՛ մեկի, և՛ ամբողջ հոտի համար՝ one sheep, a hundred sheep։`,
      `**Хитрость для its и it's.** Их путают даже взрослые. Попробуй сказать в предложении «it is». Если получается, пиши **it's**: «It's white» = «It is white». Если нет — пиши **its** без апострофа: «Its ears are long», а не «It is ears». Спрячь столбец выше и проверь себя.

**У групп животных есть названия.** Овцы живут **flock** (отарой), коровы — **herd** (стадом), а рыбы плавают **school** (косяком). А слово «sheep» одинаково и для одной овцы, и для целой отары: one sheep, a hundred sheep.`,
    ),
    ask(2, {
      en: ["«My dog is brown. ___ name is Rex.»", ["It's", "Its", "It"], "You can't say «it is name», so it is its."],
      hy: ["«My dog is brown. ___ name is Rex.»", ["It's", "Its", "It"], "Չես կարող ասել «it is name», ուստի՝ its։"],
      ru: ["«My dog is brown. ___ name is Rex.»", ["It's", "Its", "It"], "«it is name» не скажешь, значит its."],
    }),
  ],
  "my-room-writing": [
    "sentence mode=order My desk is next to the window .",
    closer(
      `**Read it aloud before you finish.** Your ear finds mistakes your eye misses. Read your text slowly, one sentence at a time: does each one start with a capital letter and end with a full stop? Is there **is** with one thing and **are** with many?

**Good writers move around the room.** A description is easier to follow if it goes in one direction: from the door to the window, or from the floor to the walls. Use **next to, under, on, in front of** to join things: «The bed is next to the window. The toys are under the bed.» Build the sentence above, then write one about your own desk.`,
      `**Ավարտելուց առաջ բարձրաձայն կարդա։** Ականջդ գտնում է այն սխալները, որոնք աչքդ բաց է թողնում։ Կարդա տեքստդ դանդաղ, նախադասություն առ նախադասություն․ արդյո՞ք ամեն մեկը սկսվում է մեծատառով և ավարտվում վերջակետով։ Մեկ առարկայի հետ **is** է, շատերի հետ՝ **are**։

**Լավ գրողները «շրջում» են սենյակում։** Նկարագրությունն ավելի հեշտ է հետևել, եթե այն ընթանում է մեկ ուղղությամբ՝ դռնից դեպի պատուհան կամ հատակից դեպի պատեր։ Իրերը կապիր **next to, under, on, in front of** բառերով՝ «The bed is next to the window. The toys are under the bed.»։ Վերևում կազմիր նախադասությունը, հետո մեկն էլ գրիր քո գրասեղանի մասին։`,
      `**Прочитай вслух, прежде чем закончить.** Ухо находит ошибки, которые пропускает глаз. Читай текст медленно, по одному предложению: каждое ли начинается с заглавной буквы и кончается точкой? С одним предметом **is**, с многими **are**?

**Хорошие авторы «ходят» по комнате.** Описание легче читать, если оно идёт в одном направлении: от двери к окну или от пола к стенам. Связывай предметы словами **next to, under, on, in front of**: «The bed is next to the window. The toys are under the bed.» Собери предложение выше, а потом напиши одно о своём столе.`,
    ),
    ask(3, {
      en: ["Which sentence is written correctly?", ["there are two lamps.", "There is two lamps.", "There are two lamps."], "Capital letter, are with many, full stop."],
      hy: ["Ո՞ր նախադասությունն է ճիշտ գրված։", ["there are two lamps.", "There is two lamps.", "There are two lamps."], "Մեծատառ, շատերի հետ are, վերջակետ։"],
      ru: ["Какое предложение написано правильно?", ["there are two lamps.", "There is two lamps.", "There are two lamps."], "Заглавная буква, are для многих, точка."],
    }),
  ],
  "numbers-11-20": [
    "forms mode=compare cols=enhyru eleven:տասնմեկ:одиннадцать twelve:տասներկու:двенадцать thirteen:տասներեք:тринадцать twenty:քսան:двадцать",
    closer(
      `**Eleven means «one left».** Why are 11 and 12 special? Long ago «eleven» meant «one left over» after counting ten fingers, and «twelve» meant «two left over». From 13 on, English says the small number and then **-teen**, an old form of «ten»: four-teen is «four and ten».

**Three languages, three ways.** Armenian says ten first: **տասն-մեկ** (ten-one). Russian says «one on ten»: **один-на-дцать**. English keeps 11 and 12 as their own words and then says the ones first: thir-teen. Hide a column above and say the missing number.`,
      `**Eleven նշանակում է «մեկ մնաց»։** Ինչո՞ւ են 11-ը և 12-ը հատուկ։ Վաղուց «eleven» նշանակում էր «մեկը մնաց»՝ տասը մատը հաշվելուց հետո, իսկ «twelve»՝ «երկուսը մնաց»։ 13-ից սկսած անգլերենն ասում է փոքր թիվը, հետո **-teen**, որը «ten»-ի հին ձևն է՝ four-teen-ը «չորս և տաս» է։

**Երեք լեզու՝ երեք եղանակ։** Հայերենը նախ ասում է տասը՝ **տասն-մեկ**։ Ռուսերենն ասում է «մեկ տասի վրա»՝ **один-на-дцать**։ Անգլերենը 11-ը և 12-ը պահում է որպես առանձին բառեր, հետո նախ ասում է միավորները՝ thir-teen։ Թաքցրու վերևի սյունակներից մեկը և ասա պակասող թիվը։`,
      `**Eleven значит «один остался».** Почему 11 и 12 особые? Когда-то «eleven» значило «один остался» — после того как насчитали десять пальцев, а «twelve» — «два осталось». С 13 английский говорит сначала маленькое число, а потом **-teen** — старую форму «ten»: four-teen — «четыре и десять».

**Три языка — три способа.** Армянский говорит сначала десять: **տասն-մեկ** (десять-один). Русский — «один на десять»: **один-на-дцать**. Английский оставляет 11 и 12 отдельными словами, а дальше называет сначала единицы: thir-teen. Спрячь столбец выше и назови пропущенное число.`,
    ),
    ask(2, {
      en: ["Which is spelled correctly?", ["fiveteen", "fifteen", "fivteen"], "Five changes to fif- in fifteen."],
      hy: ["Ո՞րն է ճիշտ գրված։", ["fiveteen", "fifteen", "fivteen"], "Fifteen-ում five-ը դառնում է fif-։"],
      ru: ["Как пишется правильно?", ["fiveteen", "fifteen", "fivteen"], "В fifteen five превращается в fif-."],
    }),
  ],
  "numbers-to-100": [
    "place n=47 max=99",
    closer(
      `**Forty lost its u.** Four has a u, fourteen has a u, but **forty** does not. About three hundred years ago people wrote both «fourty» and «forty», and «forty» won. Many people still make this mistake, so check it every time.

**Counting in twenties.** An old English word, **score**, means twenty. In 1863 the American President Abraham Lincoln began a famous speech with «Four score and seven years ago», that is 87 years ago. French still counts partly in twenties: 80 is «quatre-vingts», «four twenties». Show 47 with the blocks above: four tens and seven ones, forty-seven.`,
      `**Forty-ն կորցրեց իր u-ն։** Four-ն ունի u, fourteen-ը ունի u, իսկ **forty**-ն՝ ոչ։ Մոտ երեք հարյուր տարի առաջ գրում էին և՛ «fourty», և՛ «forty», և հաղթեց «forty»-ն։ Շատերը դեռ այս սխալն անում են, ուստի ամեն անգամ ստուգիր։

**Հաշվել քսանյակներով։** Հին անգլերեն **score** բառը նշանակում է քսան։ 1863 թվականին ԱՄՆ նախագահ Աբրահամ Լինքոլնն իր հայտնի ճառը սկսեց «Four score and seven years ago» խոսքերով, այսինքն՝ 87 տարի առաջ։ Ֆրանսերենը դեռ մասամբ հաշվում է քսանյակներով՝ 80-ը «quatre-vingts» է՝ «չորս քսան»։ Վերևի խորանարդիկներով ցույց տուր 47-ը՝ չորս տասնյակ և յոթ միավոր՝ forty-seven։`,
      `**Forty потеряло u.** В four есть u, в fourteen есть u, а в **forty** — нет. Около трёхсот лет назад писали и «fourty», и «forty», и победило «forty». Многие до сих пор так ошибаются, поэтому проверяй каждый раз.

**Счёт двадцатками.** Старое английское слово **score** значит «двадцать». В 1863 году президент США Авраам Линкольн начал знаменитую речь словами «Four score and seven years ago», то есть 87 лет назад. Французы до сих пор отчасти считают двадцатками: 80 — «quatre-vingts», «четыре двадцать». Покажи 47 кубиками выше: четыре десятка и семь единиц — forty-seven.`,
    ),
    ask(1, {
      en: ["Which is spelled correctly?", ["forty", "fourty", "fortey"], "Forty has no u."],
      hy: ["Ո՞րն է ճիշտ գրված։", ["forty", "fourty", "fortey"], "Forty-ում u չկա։"],
      ru: ["Как пишется правильно?", ["forty", "fourty", "fortey"], "В forty нет u."],
    }),
  ],
  "days-of-week": [
    "forms mode=compare cols=named Sunday:the_Sun Monday:the_Moon Wednesday:the_god_Woden Thursday:the_god_Thor Saturday:the_god_Saturn",
    closer(
      `**Gods and planets in your week.** Sunday is the Sun's day and Monday is the Moon's day. Wednesday is «Woden's day» and Thursday is «Thor's day», after old gods of the people who lived in England long ago. Saturday is named after Saturn, a Roman god. That is why the days always start with a capital letter.

**Armenian and Russian count the days.** Armenian **երկուշաբթի** means «the second day from շաբաթ (Saturday)», and **երեքշաբթի** is the third. Russian **понедельник** is «the day after неделя», the old word for Sunday, and **вторник** is «the second». English names tell stories, Armenian and Russian names count.`,
      `**Աստվածներ և մոլորակներ քո շաբաթում։** Sunday-ը Արևի օրն է, Monday-ը՝ Լուսնի օրը։ Wednesday-ը «Վոդենի օրն» է, Thursday-ը՝ «Թորի օրը»՝ վաղուց Անգլիայում ապրած ժողովուրդների հին աստվածների անուններով։ Saturday-ն անվանված է հռոմեական աստված Սատուրնի անունով։ Ահա թե ինչու օրերը միշտ սկսվում են մեծատառով։

**Հայերենն ու ռուսերենը հաշվում են օրերը։** Հայերեն **երկուշաբթի**-ն նշանակում է «շաբաթից հետո երկրորդ օրը», **երեքշաբթի**-ն՝ երրորդը։ Ռուսերեն **понедельник**-ը «неделя-ից հետո եկող օրն» է (неделя-ն կիրակիի հին անունն է), իսկ **вторник**-ը՝ «երկրորդը»։ Անգլերեն անունները պատմություններ են պատմում, հայերենն ու ռուսերենը՝ հաշվում։`,
      `**Боги и планеты в твоей неделе.** Sunday — день Солнца, Monday — день Луны. Wednesday — «день Водена», Thursday — «день Тора», по именам древних богов народов, живших когда-то в Англии. Saturday назван в честь римского бога Сатурна. Поэтому дни всегда пишутся с заглавной буквы.

**Армянский и русский считают дни.** Армянское **երկուշաբթի** значит «второй день от շաբաթ (субботы)», **երեքշաբթի** — третий. Русское **понедельник** — «день после недели» (неделей раньше называли воскресенье), а **вторник** — «второй». Английские названия рассказывают истории, а армянские и русские — считают.`,
    ),
    ask(2, {
      en: ["Which day is named after the god Thor?", ["Tuesday", "Thursday", "Saturday"], "Thursday = Thor's day."],
      hy: ["Ո՞ր օրն է անվանված Թոր աստծո անունով։", ["Tuesday", "Thursday", "Saturday"], "Thursday = Թորի օր։"],
      ru: ["Какой день назван в честь бога Тора?", ["Tuesday", "Thursday", "Saturday"], "Thursday — день Тора."],
    }),
  ],
  "months-birthdays": [
    "forms mode=compare cols=named January:the_god_Janus July:Julius_Caesar August:the_emperor_Augustus September:septem,_«seven»",
    closer(
      `**Why is September not the seventh month?** Its name comes from Latin **septem**, «seven», October from «octo», eight, and December from «decem», ten. In the oldest Roman calendar the year began in March, so September really was the seventh month. Later January and February were moved to the start, and the names stopped matching.

**Two months are named after people.** July is named after Julius Caesar and August after the emperor Augustus. January belongs to **Janus**, the Roman god of doors and beginnings, who had two faces: one looking back at the old year and one looking forward to the new one.`,
      `**Ինչո՞ւ September-ը յոթերորդ ամիսը չէ։** Նրա անունը գալիս է լատիներեն **septem**-ից՝ «յոթ», October-ը՝ «octo»-ից (ութ), December-ը՝ «decem»-ից (տասը)։ Ամենահին հռոմեական օրացույցում տարին սկսվում էր մարտին, ուստի September-ն իսկապես յոթերորդ ամիսն էր։ Հետո հունվարն ու փետրվարը տեղափոխվեցին տարվա սկիզբ, և անունները դադարեցին համապատասխանել։

**Երկու ամիս անվանված է մարդկանց անունով։** July-ն անվանված է Հուլիոս Կեսարի, August-ը՝ Օգոստոս կայսեր անունով։ January-ն պատկանում է **Յանուսին**՝ դռների և սկիզբների հռոմեական աստծուն, որն ուներ երկու դեմք՝ մեկը նայում էր անցած տարուն, մյուսը՝ նոր տարուն։`,
      `**Почему сентябрь не седьмой месяц?** Его название — от латинского **septem**, «семь», октябрь — от «octo», восемь, декабрь — от «decem», десять. В древнейшем римском календаре год начинался в марте, так что сентябрь действительно был седьмым. Потом январь и февраль перенесли в начало года, и названия перестали совпадать.

**Два месяца названы в честь людей.** July (июль) — в честь Юлия Цезаря, August (август) — в честь императора Августа. Январь принадлежит **Янусу**, римскому богу дверей и начал с двумя лицами: одно смотрело на старый год, другое — на новый.`,
    ),
    ask(3, {
      en: ["September comes from Latin «septem». What does it mean?", ["nine", "autumn", "seven"], "The Roman year began in March, so September was the seventh month."],
      hy: ["September-ը գալիս է լատիներեն «septem»-ից։ Ի՞նչ է այն նշանակում։", ["nine", "autumn", "seven"], "Հռոմեական տարին սկսվում էր մարտին, ուստի September-ը յոթերորդ ամիսն էր։"],
      ru: ["September — от латинского «septem». Что оно значит?", ["nine", "autumn", "seven"], "Римский год начинался в марте, и сентябрь был седьмым месяцем."],
    }),
  ],
  "what-time-is-it": [
    "clock h=3 m=45",
    closer(
      `**«O'clock» is short for «of the clock».** Long ago people said «It is three of the clock», and the words joined into **o'clock**. We use it only for full hours: «three o'clock», never «three thirty o'clock».

**a.m. and p.m.** In English speech people use a 12-hour clock: 3 o'clock can be at night or in the afternoon. To be clear, write **a.m.** (Latin «ante meridiem», before noon) or **p.m.** («post meridiem», after noon): 7 a.m. is morning, 7 p.m. is evening. In Armenia and Russia people often say «15:00», which English speakers read as «3 p.m.». Drag the hands above to quarter to four and say it.`,
      `**«O'clock»-ը «of the clock»-ի կրճատ ձևն է։** Վաղուց ասում էին «It is three of the clock» (ժամացույցով ժամն երեքն է), և բառերը միացան՝ **o'clock**։ Այն գործածում ենք միայն ամբողջ ժամերի համար՝ «three o'clock», երբեք՝ «three thirty o'clock»։

**a.m. և p.m.** Անգլերեն խոսքում գործածում են 12-ժամյա ժամացույց․ ժամը 3-ը կարող է լինել գիշերը կամ ցերեկը։ Պարզ լինելու համար գրում են **a.m.** (լատիներեն «ante meridiem»՝ կեսօրից առաջ) կամ **p.m.** («post meridiem»՝ կեսօրից հետո)՝ 7 a.m.-ը առավոտ է, 7 p.m.-ը՝ երեկո։ Հայաստանում և Ռուսաստանում հաճախ ասում են «15:00», որն անգլիախոսները կարդում են «3 p.m.»։ Վերևի սլաքները տեղափոխիր քառորդ պակաս չորսի և ասա ժամը։`,
      `**«O'clock» — сокращение от «of the clock».** Когда-то говорили «It is three of the clock» (три часа по часам), и слова слились в **o'clock**. Его используют только для целых часов: «three o'clock», но никогда «three thirty o'clock».

**a.m. и p.m.** В английской речи пользуются 12-часовым циферблатом: 3 часа может быть и ночью, и днём. Для ясности пишут **a.m.** (латинское «ante meridiem», до полудня) или **p.m.** («post meridiem», после полудня): 7 a.m. — утро, 7 p.m. — вечер. В Армении и России часто говорят «15:00», а англичане прочтут это как «3 p.m.». Передвинь стрелки выше на без четверти четыре и назови время.`,
    ),
    ask(2, {
      en: ["The clock shows 7:45. What do you say?", ["It's quarter past seven.", "It's quarter to eight.", "It's quarter to seven."], "45 minutes past seven is 15 minutes to eight."],
      hy: ["Ժամացույցը ցույց է տալիս 7:45։ Ի՞նչ ես ասում։", ["It's quarter past seven.", "It's quarter to eight.", "It's quarter to seven."], "Յոթն անց 45 րոպեն ութից 15 րոպե պակաս է։"],
      ru: ["Часы показывают 7:45. Что ты скажешь?", ["It's quarter past seven.", "It's quarter to eight.", "It's quarter to seven."], "Семь сорок пять — это без пятнадцати восемь."],
    }),
  ],
  "seasons-weather": [
    "forms mode=compare cols=nounadj sun:sunny rain:rainy wind:windy snow:snowy cloud:cloudy",
    closer(
      `**Why two n's in sunny?** «Sun» has a short vowel, closed by one consonant. If we just added -y, we would get «suny», which looks like it should say «soo-ny». So English doubles the consonant to keep the vowel short: **sun → sunny**, but **rain → rainy**, with no doubling.

**Autumn or fall?** In Britain the season after summer is **autumn**; in America it is usually **fall**, short for «the fall of the leaf», the time when leaves fall from the trees. Both words are correct. And the British are famous for talking about the weather: «Lovely day, isn't it?» is a usual way to start a chat.`,
      `**Ինչո՞ւ է sunny-ում երկու n։** «Sun»-ն ունի կարճ ձայնավոր՝ փակված մեկ բաղաձայնով։ Եթե պարզապես ավելացնեինք -y, կստանայինք «suny», որը կարծես պետք է կարդացվի «սու-նի»։ Ուստի անգլերենը կրկնապատկում է բաղաձայնը, որ ձայնավորը կարճ մնա՝ **sun → sunny**, բայց **rain → rainy**՝ առանց կրկնապատկման։

**Autumn, թե՞ fall։** Բրիտանիայում ամռանը հաջորդող եղանակը **autumn** է, Ամերիկայում սովորաբար՝ **fall**՝ «the fall of the leaf» արտահայտության կրճատ ձևը, այն ժամանակը, երբ տերևները թափվում են ծառերից։ Երկու բառն էլ ճիշտ են։ Իսկ բրիտանացիները հայտնի են եղանակի մասին խոսելով․ «Lovely day, isn't it?»-ն զրույց սկսելու սովորական ձև է։`,
      `**Почему в sunny две n?** В «sun» краткая гласная, закрытая одной согласной. Если просто добавить -y, получится «suny», и захочется прочитать «су-ни». Поэтому английский удваивает согласную, чтобы гласная осталась краткой: **sun → sunny**, но **rain → rainy** — без удвоения.

**Autumn или fall?** В Британии время после лета — **autumn**, в Америке обычно **fall**, от «the fall of the leaf» — когда с деревьев падают листья. Оба слова правильные. А британцы знамениты разговорами о погоде: «Lovely day, isn't it?» — обычный способ начать беседу.`,
    ),
    ask(3, {
      en: ["Make an adjective from «fog».", ["fogy", "fogly", "foggy"], "Short vowel + one consonant: double it, foggy, like sunny."],
      hy: ["«fog» (մառախուղ) բառից կազմիր ածական։", ["fogy", "fogly", "foggy"], "Կարճ ձայնավոր + մեկ բաղաձայն՝ կրկնապատկիր՝ foggy, ինչպես sunny։"],
      ru: ["Образуй прилагательное от «fog» (туман).", ["fogy", "fogly", "foggy"], "Краткая гласная + одна согласная: удваиваем — foggy, как sunny."],
    }),
  ],
  "food-drinks": [
    "forms mode=compare cols=brame biscuit:cookie chips:fries crisps:chips sweets:candy",
    closer(
      `**Breakfast breaks a fast.** To «fast» means to go without food. At night you sleep and eat nothing, so the first meal of the day **breaks the fast**: break-fast. Armenian **նախաճաշ** means «before-lunch», and Russian **завтрак** comes from «за утро», «in the morning».

**Chips are not the same everywhere.** In Britain **chips** are hot potato sticks and **crisps** are thin slices from a packet. In America the hot sticks are **fries** and the packet slices are **chips**. So if you ask for «chips» in London and in New York, you get two different things! Hide a column above and test yourself.`,
      `**Breakfast-ը «ընդհատում է պահքը»։** «Fast» նշանակում է առանց սննդի մնալ։ Գիշերը քնում ես և ոչինչ չես ուտում, ուստի օրվա առաջին ուտելիքը **ընդհատում է պահքը**՝ break-fast։ Հայերեն **նախաճաշ**-ը նշանակում է «ճաշից առաջ», իսկ ռուսերեն **завтрак**-ը գալիս է «за утро»-ից՝ «առավոտյան»։

**Chips-ը ամենուր նույնը չէ։** Բրիտանիայում **chips**-ը տաք կարտոֆիլի ձողիկներն են, իսկ **crisps**-ը՝ տոպրակի բարակ շերտերը։ Ամերիկայում տաք ձողիկները **fries** են, իսկ տոպրակի շերտերը՝ **chips**։ Ուրեմն, եթե «chips» խնդրես Լոնդոնում և Նյու Յորքում, երկու տարբեր բան կստանաս։ Թաքցրու վերևի սյունակներից մեկը և ստուգիր քեզ։`,
      `**Breakfast прерывает пост.** «Fast» значит «обходиться без еды». Ночью ты спишь и ничего не ешь, поэтому первая еда дня **прерывает пост**: break-fast. Армянское **նախաճաշ** значит «перед обедом», а русское **завтрак** — от «за утро».

**Chips — не везде одно и то же.** В Британии **chips** — горячие картофельные палочки, а **crisps** — тонкие ломтики из пакета. В Америке горячие палочки — **fries**, а ломтики из пакета — **chips**. Так что, попросив «chips» в Лондоне и в Нью-Йорке, получишь разное! Спрячь столбец выше и проверь себя.`,
    ),
    ask(1, {
      en: ["In Britain you ask for chips. What do you get?", ["hot potato sticks", "slices from a packet", "biscuits"], "British chips = American fries."],
      hy: ["Բրիտանիայում chips ես խնդրում։ Ի՞նչ ես ստանում։", ["hot potato sticks", "slices from a packet", "biscuits"], "Բրիտանական chips = ամերիկյան fries։"],
      ru: ["В Британии ты просишь chips. Что получишь?", ["hot potato sticks", "slices from a packet", "biscuits"], "Британские chips = американские fries."],
    }),
  ],
  "dont-like": [
    "sentence mode=order Do you like chocolate ?",
    closer(
      `**Food words from far away.** **Chocolate** and **tomato** come from Nahuatl, the language of the Aztecs in Mexico: «xocolatl» and «tomatl». **Potato** comes from a language of the Caribbean islands. Spanish sailors brought the foods and their names to Europe about five hundred years ago, and from there they reached English, Armenian and Russian.

**Do starts the question.** In a question English needs a helper, **do**, at the start: «**Do** you like chocolate?». The answer uses it again: «Yes, I **do**.» / «No, I **don't**.» Don't answer just «Yes, I like»: English wants the short answer with do. Build the question above.`,
      `**Ուտելիքի բառեր հեռու երկրներից։** **Chocolate** և **tomato** բառերը գալիս են նահուատլից՝ Մեքսիկայի ացտեկների լեզվից՝ «xocolatl» և «tomatl»։ **Potato**-ն գալիս է Կարիբյան կղզիների լեզուներից մեկից։ Իսպանացի նավաստիները մոտ հինգ հարյուր տարի առաջ այս ուտելիքներն ու դրանց անունները բերեցին Եվրոպա, և այնտեղից դրանք հասան անգլերենին, հայերենին և ռուսերենին։

**Do-ն սկսում է հարցը։** Հարցում անգլերենին սկզբում օգնական է պետք՝ **do**՝ «**Do** you like chocolate?»։ Պատասխանը նորից գործածում է այն՝ «Yes, I **do**.» / «No, I **don't**.»։ Մի՛ պատասխանիր պարզապես «Yes, I like»․ անգլերենը do-ով կարճ պատասխան է ուզում։ Վերևում կազմիր հարցը։`,
      `**Слова о еде издалека.** **Chocolate** и **tomato** пришли из науатля — языка ацтеков в Мексике: «xocolatl» и «tomatl». **Potato** — из языка жителей Карибских островов. Испанские моряки около пятисот лет назад привезли эти продукты и их названия в Европу, а оттуда они попали в английский, армянский и русский.

**Do начинает вопрос.** В вопросе английскому нужен помощник **do** в начале: «**Do** you like chocolate?». В ответе он повторяется: «Yes, I **do**.» / «No, I **don't**.» Не отвечай просто «Yes, I like»: английский хочет краткий ответ с do. Собери вопрос выше.`,
    ),
    ask(2, {
      en: ["«Do you like grapes?» — «Yes, …»", ["I like.", "I do.", "I am."], "The short answer repeats do: Yes, I do."],
      hy: ["«Do you like grapes?» — «Yes, …»", ["I like.", "I do.", "I am."], "Կարճ պատասխանը կրկնում է do-ն՝ Yes, I do։"],
      ru: ["«Do you like grapes?» — «Yes, …»", ["I like.", "I do.", "I am."], "Краткий ответ повторяет do: Yes, I do."],
    }),
  ],
  "can-cant": [
    "sentence mode=order She can swim , but she can't ski .",
    closer(
      `**Can never changes.** Most verbs get an -s with he and she (he swims), but **can** does not: he **can**, she **can**, it **can**. And the verb after it stays bare: «She can swim», not «She can swims» or «She can to swim». Can, must and should all work like this.

**Listen for the t.** In fast speech «can» and «can't» sound almost the same. In Britain «can't» has a long vowel, «kaahnt»; in America the difference is in the stress: «I **can't** go» is stressed, «I can go» is not. Build the sentence above and say it with a clear «can't».`,
      `**Can-ը երբեք չի փոխվում։** Բայերի մեծ մասը he-ի և she-ի հետ ստանում է -s (he swims), իսկ **can**-ը՝ ոչ՝ he **can**, she **can**, it **can**։ Իսկ դրանից հետո եկող բայը մնում է անփոփոխ՝ «She can swim», ոչ թե «She can swims» կամ «She can to swim»։ Can, must և should բառերը բոլորն էլ այդպես են աշխատում։

**Լսիր t-ն։** Արագ խոսքում «can»-ը և «can't»-ը գրեթե նույնն են հնչում։ Բրիտանիայում «can't»-ն ունի երկար ձայնավոր՝ «քա՜նթ», Ամերիկայում տարբերությունը շեշտի մեջ է․ «I **can't** go»-ն շեշտված է, «I can go»-ն՝ ոչ։ Վերևում կազմիր նախադասությունը և ասա այն հստակ «can't»-ով։`,
      `**Can никогда не меняется.** Большинство глаголов с he и she получают -s (he swims), а **can** — нет: he **can**, she **can**, it **can**. И глагол после него остаётся голым: «She can swim», а не «She can swims» или «She can to swim». Так же работают can, must и should.

**Слушай t.** В быстрой речи «can» и «can't» звучат почти одинаково. В Британии в «can't» долгая гласная — «ка-ант», в Америке разница в ударении: «I **can't** go» звучит с ударением, «I can go» — нет. Собери предложение выше и скажи его с чётким «can't».`,
    ),
    ask(3, {
      en: ["Choose the correct sentence.", ["He cans dance.", "He can dances.", "He can dance."], "Can has no -s, and the verb after it has no -s."],
      hy: ["Ընտրիր ճիշտ նախադասությունը։", ["He cans dance.", "He can dances.", "He can dance."], "Can-ը -s չունի, դրանից հետո եկող բայն էլ -s չունի։"],
      ru: ["Выбери правильное предложение.", ["He cans dance.", "He can dances.", "He can dance."], "У can нет -s, и у глагола после него тоже."],
    }),
  ],
  "present-simple-i-you": [
    "tense name=present-simple aspects=simple times=present",
    closer(
      `**Dots on the time line.** The present simple shows things that happen again and again: every day, every Monday, always. On the time line above they are dots before and after «now», because the habit was true yesterday, is true today and will be true tomorrow.

**One Armenian form, two English ones.** Armenian «Ես խաղում եմ» and Russian «Я играю» can mean «I play every day» or «I am playing now». English has two different tenses: **I play** (a habit) and **I am playing** (right now). This year you learn the first one; the time words (every day, on Mondays) tell you to use it.`,
      `**Կետեր ժամանակի առանցքի վրա։** Present simple-ը ցույց է տալիս այն, ինչ կրկնվում է նորից ու նորից՝ ամեն օր, ամեն երկուշաբթի, միշտ։ Վերևի ժամանակի առանցքի վրա դրանք կետեր են «հիմա»-ից առաջ և հետո, որովհետև սովորությունը ճիշտ էր երեկ, ճիշտ է այսօր և ճիշտ կլինի վաղը։

**Մեկ հայերեն ձև՝ երկու անգլերեն։** Հայերեն «Ես խաղում եմ»-ը և ռուսերեն «Я играю»-ն կարող են նշանակել «ամեն օր եմ խաղում» կամ «հիմա եմ խաղում»։ Անգլերենն ունի երկու տարբեր ժամանակաձև՝ **I play** (սովորություն) և **I am playing** (հենց հիմա)։ Այս տարի սովորում ես առաջինը․ ժամանակի բառերը (every day, on Mondays) հուշում են, որ այն գործածես։`,
      `**Точки на линии времени.** Present simple показывает то, что повторяется снова и снова: каждый день, каждый понедельник, всегда. На линии времени выше это точки до и после «сейчас», ведь привычка была верна вчера, верна сегодня и будет верна завтра.

**Одна русская форма — две английские.** Русское «Я играю» и армянское «Ես խաղում եմ» могут значить «играю каждый день» или «играю сейчас». В английском два разных времени: **I play** (привычка) и **I am playing** (прямо сейчас). В этом году ты учишь первое; слова времени (every day, on Mondays) подсказывают, что нужно именно оно.`,
    ),
    ask(1, {
      en: ["Which sentence is about a habit?", ["We play football on Saturdays.", "We are playing football now.", "Look! We are playing."], "On Saturdays = again and again: present simple."],
      hy: ["Ո՞ր նախադասությունն է սովորության մասին։", ["We play football on Saturdays.", "We are playing football now.", "Look! We are playing."], "On Saturdays = նորից ու նորից՝ present simple։"],
      ru: ["Какое предложение о привычке?", ["We play football on Saturdays.", "We are playing football now.", "Look! We are playing."], "On Saturdays — снова и снова: present simple."],
    }),
  ],
  "sports-hobbies": [
    "forms mode=compare cols=playgodo football:swimming:karate chess:skiing:judo tennis:cycling:gymnastics the_guitar:fishing:yoga",
    closer(
      `**Armenia, the chess country.** In 2011 Armenia became the first country in the world to make chess a school subject for young pupils. Armenian players won the Chess Olympiad three times, in 2006, 2008 and 2012. So in English you **play** chess, and in Armenia many children play it at school.

**The rule of three verbs.** **Play** goes with games you play against someone, usually with a ball, and with music: play football, play the guitar. **Go** goes with -ing activities you go somewhere to do: go swimming, go skiing. **Do** goes with other sports and exercise: do karate, do yoga. Hide a column above and say the sports.`,
      `**Հայաստան՝ շախմատի երկիր։** 2011 թվականին Հայաստանն աշխարհում առաջին երկիրը դարձավ, որ շախմատը կրտսեր դասարանների աշակերտների համար դպրոցական առարկա դարձրեց։ Հայ շախմատիստներն երեք անգամ հաղթել են Շախմատային օլիմպիադայում՝ 2006, 2008 և 2012 թվականներին։ Ուրեմն անգլերենում շախմատ **play** են անում, իսկ Հայաստանում շատ երեխաներ այն խաղում են դպրոցում։

**Երեք բայի կանոնը։** **Play**-ը գործածվում է այն խաղերի հետ, որոնք խաղում ես ինչ-որ մեկի դեմ, սովորաբար գնդակով, և երաժշտության հետ՝ play football, play the guitar։ **Go**-ն գործածվում է -ing-ով զբաղմունքների հետ, որոնց համար ինչ-որ տեղ ես գնում՝ go swimming, go skiing։ **Do**-ն՝ այլ մարզաձևերի և վարժությունների հետ՝ do karate, do yoga։ Թաքցրու վերևի սյունակներից մեկը և ասա մարզաձևերը։`,
      `**Армения — страна шахмат.** В 2011 году Армения первой в мире сделала шахматы школьным предметом для младших классов. Армянские шахматисты трижды выигрывали Шахматную олимпиаду — в 2006, 2008 и 2012 годах. Так что по-английски в шахматы **play**, а в Армении многие дети играют в них в школе.

**Правило трёх глаголов.** **Play** — с играми против кого-то, обычно с мячом, и с музыкой: play football, play the guitar. **Go** — с занятиями на -ing, ради которых куда-то идут: go swimming, go skiing. **Do** — с другими видами спорта и упражнениями: do karate, do yoga. Спрячь столбец выше и назови виды спорта.`,
    ),
    ask(2, {
      en: ["Choose the right verb: «___ judo».", ["play", "do", "go"], "Judo is a sport without a ball and without -ing: do judo."],
      hy: ["Ընտրիր ճիշտ բայը․ «___ judo»։", ["play", "do", "go"], "Ձյուդոն առանց գնդակի և առանց -ing մարզաձև է՝ do judo։"],
      ru: ["Выбери глагол: «___ judo».", ["play", "do", "go"], "Дзюдо — без мяча и без -ing: do judo."],
    }),
  ],
  "year-3-review": [
    "sentence mode=order keep=1 I can swim and draw , but I can't skate .",
    closer(
      `**Learn phrases, not single words.** «Go swimming», «on Monday», «Can I have…, please?»: words that live together are easier to remember together. When you write a new word, write it in a short phrase from the lesson, and you learn the grammar at the same time.

**Mistakes help you learn.** Every time you notice «He cans» or «There is two» and fix it, your brain remembers the right form better. So speak and write even when you are not sure. Build Lusine's sentence above, then make one about yourself with **can** and **can't**.`,
      `**Սովորիր արտահայտություններ, ոչ թե առանձին բառեր։** «Go swimming», «on Monday», «Can I have…, please?»․ միասին ապրող բառերն ավելի հեշտ է միասին հիշել։ Երբ նոր բառ ես գրում, գրիր այն դասի կարճ արտահայտության մեջ, և միաժամանակ կսովորես քերականությունը։

**Սխալներն օգնում են սովորել։** Ամեն անգամ, երբ նկատում ես «He cans» կամ «There is two» և ուղղում, ուղեղդ ավելի լավ է հիշում ճիշտ ձևը։ Ուրեմն խոսիր և գրիր, նույնիսկ երբ վստահ չես։ Վերևում կազմիր Լուսինեի նախադասությունը, հետո մեկն էլ քո մասին՝ **can** և **can't** բառերով։`,
      `**Учи фразы, а не отдельные слова.** «Go swimming», «on Monday», «Can I have…, please?»: слова, которые живут вместе, легче запоминать вместе. Записывая новое слово, записывай его в короткой фразе из урока — так заодно выучишь и грамматику.

**Ошибки помогают учиться.** Каждый раз, замечая «He cans» или «There is two» и исправляя, ты лучше запоминаешь правильную форму. Поэтому говори и пиши, даже если не уверен. Собери предложение Лусине выше, а потом составь своё с **can** и **can't**.`,
    ),
    ask(2, {
      en: ["Find the correct sentence.", ["My sister have got a doll.", "My sister has got a doll.", "My sister has a got doll."], "She takes has: she has got."],
      hy: ["Գտիր ճիշտ նախադասությունը։", ["My sister have got a doll.", "My sister has got a doll.", "My sister has a got doll."], "She-ի հետ has է՝ she has got։"],
      ru: ["Найди правильное предложение.", ["My sister have got a doll.", "My sister has got a doll.", "My sister has a got doll."], "С she — has: she has got."],
    }),
  ],
};
