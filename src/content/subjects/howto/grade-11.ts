import { match, order, q, t } from "../../types";
import { howto, howtoCourse } from "./kit";

const onlineLesson = howto({
  slug: "stay-safe-online",
  title: ["How to spot scams and protect your accounts", "Ինչպես ճանաչել խարդախությունը և պաշտպանել հաշիվներդ", "Как распознать мошенников и защитить свои аккаунты"],
  goals: {
    en: ["Recognise the signs of a phishing message", "Check a link before you open it", "Make strong passwords and turn on two-step login"],
    hy: ["Ճանաչել ֆիշինգային հաղորդագրության նշանները", "Ստուգել հղումը, նախքան այն բացելը", "Ստեղծել ուժեղ գաղտնաբառեր և միացնել երկքայլ մուտքը"],
    ru: ["Узнавать признаки фишингового сообщения", "Проверять ссылку, прежде чем её открыть", "Придумывать надёжные пароли и включать двухэтапный вход"],
  },
  body: {
    en: `"Your card has been blocked. Click here to unlock it." "You've won a new phone!" "Hi, it's me, I lost my phone, can you send me the code that just came to you?" Messages like these arrive every day by SMS, email, Telegram and Instagram. They are **phishing**: an attempt to "fish" for your password, card number or codes. Scammers don't need to hack anything if you hand them the key yourself. The good news: almost every scam uses the same few tricks, and once you know them they are easy to spot.

## Step by step

~~~sim
mechanism phishing
~~~

## Look closer at a fake message

~~~sim
diagram phish
~~~

## The four warning signs

- **Pressure**: "urgent", "within 24 hours", "your account will be deleted". Scammers want you to act before you think.
- **A strange sender or link**: a letter swapped (rn instead of m), an extra word ("bank-arm-secure.com"), or a short link that hides where it goes.
- **A request for secrets**: PIN, CVV, password, or a code from an SMS. No real bank, shop or school will ever ask for these.
- **Too good to be true**: prizes you never entered for, very cheap phones, easy money.

## Strong passwords

A strong password is **long**, not complicated. Three or four random words ("cloud-lemon-bridge-42") are much harder to guess than "P@ssw0rd" and easier to remember. Use a different password for every important account, and keep them in a password manager. Try it:

~~~sim
password
~~~

> 💡 **Did you know?** The word "phishing" appeared around 1996 among hackers who stole AOL accounts. They wrote "ph" instead of "f" as a nod to "phone phreaks", the 1970s hackers who tricked telephone networks into giving free calls.

~~~sim
sort
Suspicious or looks fine?
# Suspicious | Looks fine
- "Your card is blocked, send the SMS code to unlock it" = 1
- A link to "arnerica-bank.com" = 1
- "You won an iPhone! Pay 2,000 dram for delivery" = 1
- A message from a friend's new number asking for money = 1
- A delivery update inside the official post office app = 2
- A login code you asked for yourself, which you don't share = 2
> If a message pushes you to hurry or asks for a secret, stop. Check through the official app or by calling a number you already trust.
~~~

## Practice

1. Check your most important accounts (email, games, social media) and turn on two-step login.
2. Find a scam message in your spam folder or ask your family for one. Find at least three warning signs in it.
3. Agree on a family "safe word" to check that a strange call or message asking for help really is from a family member.`,
    hy: `«Ձեր քարտն արգելափակված է։ Սեղմեք այստեղ՝ ապաարգելափակելու համար»։ «Դուք շահել եք նոր հեռախոս»։ «Բարև, ես եմ, հեռախոսս կորցրել եմ, կուղարկե՞ս կոդը, որ հենց նոր եկավ քեզ»։ Նման հաղորդագրություններ ամեն օր գալիս են SMS-ով, էլ․ փոստով, Telegram-ով և Instagram-ով։ Սա **ֆիշինգ** է՝ գաղտնաբառդ, քարտի համարդ կամ կոդերը «որսալու» փորձ։ Խարդախներին պետք չէ որևէ բան կոտրել, եթե բանալին ինքդ ես տալիս նրանց։ Լավ լուրն այն է, որ գրեթե բոլոր խարդախություններն օգտագործում են նույն մի քանի հնարքը, և երբ դրանք գիտես, հեշտ է նկատել։

## Քայլ առ քայլ

~~~sim
mechanism phishing
~~~

## Ավելի մոտիկից նայենք կեղծ հաղորդագրությանը

~~~sim
diagram phish
~~~

## Չորս նախազգուշական նշան

- **Ճնշում**․ «շտապ», «24 ժամվա ընթացքում», «ձեր հաշիվը կջնջվի»։ Խարդախներն ուզում են, որ գործես, նախքան մտածելը։
- **Տարօրինակ ուղարկող կամ հղում**․ փոխված տառ (rn՝ m-ի փոխարեն), ավելորդ բառ («bank-arm-secure.com») կամ կարճ հղում, որը թաքցնում է, թե ուր է տանում։
- **Գաղտնիքի պահանջ**․ PIN, CVV, գաղտնաբառ կամ SMS-ով եկած կոդ։ Ոչ մի իսկական բանկ, խանութ կամ դպրոց երբեք դրանք չի խնդրի։
- **Չափազանց լավ է, որ իրական լինի**․ մրցանակներ, որոնց համար չես մասնակցել, շատ էժան հեռախոսներ, հեշտ փող։

## Ուժեղ գաղտնաբառեր

Ուժեղ գաղտնաբառը **երկար** է, ոչ թե բարդ։ Երեք-չորս պատահական բառը («cloud-lemon-bridge-42») շատ ավելի դժվար է գուշակել, քան «P@ssw0rd»-ը, և ավելի հեշտ է հիշել։ Յուրաքանչյուր կարևոր հաշվի համար օգտագործի՛ր տարբեր գաղտնաբառ և պահի՛ր դրանք գաղտնաբառերի կառավարիչում։ Փորձի՛ր․

~~~sim
password
~~~

> 💡 **Հետաքրքիր է իմանալ։** «Ֆիշինգ» բառը հայտնվել է մոտ 1996 թվականին AOL-ի հաշիվներ գողացող հաքերների շրջանում։ Նրանք «f»-ի փոխարեն գրում էին «ph»՝ ակնարկելով «phone phreaks»-ին՝ 1970-ականների հաքերներին, որոնք խաբում էին հեռախոսային ցանցերը՝ անվճար զանգեր անելու համար։

~~~sim
sort
Կասկածելի՞ է, թե՞ նորմալ է թվում։
# Կասկածելի | Նորմալ է թվում
- «Ձեր քարտն արգելափակված է, ուղարկեք SMS-ի կոդը՝ ապաարգելափակելու համար» = 1
- Հղում «arnerica-bank.com» կայքին = 1
- «Դուք շահել եք iPhone։ Վճարեք 2000 դրամ առաքման համար» = 1
- Ընկերոջ նոր համարից հաղորդագրություն՝ փող խնդրելով = 1
- Առաքման մասին տեղեկություն փոստի պաշտոնական հավելվածում = 2
- Մուտքի կոդ, որն ինքդ ես խնդրել և որը ոչ մեկին չես տալիս = 2
> Եթե հաղորդագրությունը ստիպում է շտապել կամ գաղտնիք է խնդրում, կանգնի՛ր։ Ստուգի՛ր պաշտոնական հավելվածով կամ զանգելով մի համարի, որին արդեն վստահում ես։
~~~

## Առաջադրանքներ

1. Ստուգի՛ր քո ամենակարևոր հաշիվները (էլ․ փոստ, խաղեր, սոցիալական ցանցեր) և միացրո՛ւ երկքայլ մուտքը։
2. Գտի՛ր խարդախ հաղորդագրություն սպամի թղթապանակում կամ խնդրի՛ր ընտանիքիդ։ Գտի՛ր դրանում առնվազն երեք նախազգուշական նշան։
3. Ընտանիքով պայմանավորվե՛ք «գաղտնի բառի» շուրջ, որպեսզի ստուգեք, որ օգնություն խնդրող տարօրինակ զանգը կամ հաղորդագրությունն իսկապես ընտանիքի անդամից է։`,
    ru: `«Ваша карта заблокирована. Нажмите сюда, чтобы разблокировать». «Вы выиграли новый телефон!» «Привет, это я, потерял телефон, можешь прислать код, который тебе сейчас пришёл?» Такие сообщения каждый день приходят по СМС, почте, в Telegram и Instagram. Это **фишинг** — попытка «выудить» пароль, номер карты или коды. Мошенникам не нужно ничего взламывать, если ты сам отдашь им ключ. Хорошая новость: почти все мошенники используют одни и те же уловки, и если их знать, их легко заметить.

## Шаг за шагом

~~~sim
mechanism phishing
~~~

## Присмотримся к поддельному сообщению

~~~sim
diagram phish
~~~

## Четыре тревожных признака

- **Давление**: «срочно», «в течение 24 часов», «ваш аккаунт будет удалён». Мошенники хотят, чтобы ты действовал раньше, чем подумаешь.
- **Странный отправитель или ссылка**: подменённая буква (rn вместо m), лишнее слово («bank-arm-secure.com») или короткая ссылка, скрывающая, куда она ведёт.
- **Просьба назвать секрет**: PIN, CVV, пароль или код из СМС. Ни один настоящий банк, магазин или школа никогда их не попросит.
- **Слишком хорошо, чтобы быть правдой**: призы в конкурсах, где ты не участвовал, очень дешёвые телефоны, лёгкие деньги.

## Надёжные пароли

Надёжный пароль — **длинный**, а не сложный. Три-четыре случайных слова («cloud-lemon-bridge-42») угадать гораздо труднее, чем «P@ssw0rd», и запомнить легче. Для каждого важного аккаунта используй свой пароль и храни их в менеджере паролей. Попробуй:

~~~sim
password
~~~

> 💡 **Интересно знать.** Слово «фишинг» появилось около 1996 года среди хакеров, которые воровали аккаунты AOL. Они писали «ph» вместо «f», намекая на «phone phreaks» — хакеров 1970-х, которые обманывали телефонные сети, чтобы звонить бесплатно.

~~~sim
sort
Подозрительно или выглядит нормально?
# Подозрительно | Выглядит нормально
- «Ваша карта заблокирована, пришлите код из СМС для разблокировки» = 1
- Ссылка на «arnerica-bank.com» = 1
- «Вы выиграли iPhone! Оплатите 2000 драмов за доставку» = 1
- Сообщение с нового номера друга с просьбой прислать денег = 1
- Сведения о доставке в официальном приложении почты = 2
- Код входа, который ты запросил сам и никому не сообщаешь = 2
> Если сообщение торопит или просит секрет — остановись. Проверь через официальное приложение или позвони по номеру, которому уже доверяешь.
~~~

## Задания

1. Проверь свои самые важные аккаунты (почта, игры, соцсети) и включи двухэтапный вход.
2. Найди мошенническое сообщение в папке «Спам» или попроси у родных. Найди в нём не меньше трёх тревожных признаков.
3. Договоритесь в семье о «секретном слове», чтобы проверить, что странный звонок или сообщение с просьбой о помощи действительно от родственника.`,
  },
  quiz: [
    q(t("Your \"bank\" texts you asking for the code it just sent. What do you do?", "Քո «բանկը» գրում է և խնդրում հենց նոր ուղարկած կոդը։ Ի՞նչ ես անում։", "Твой «банк» пишет и просит код, который только что прислал. Что ты делаешь?"), [t("Never share it and call the number on your card", "Երբեք չեմ տալիս և զանգում եմ քարտիս վրա նշված համարով", "Никому не сообщаю и звоню по номеру на карте"), t("Send it quickly so the card isn't blocked", "Արագ ուղարկում եմ, որ քարտը չարգելափակվի", "Быстро отправляю, чтобы карту не заблокировали"), t("Reply asking if it's really the bank", "Պատասխանում եմ՝ հարցնելով, արդյոք իսկապես բանկն է", "Отвечаю и спрашиваю, точно ли это банк")], 0),
    q(t("Which password is the strongest?", "Ո՞ր գաղտնաբառն է ամենաուժեղը։", "Какой пароль самый надёжный?"), [t("cloud-lemon-bridge-42", "cloud-lemon-bridge-42", "cloud-lemon-bridge-42"), t("P@ssw0rd", "P@ssw0rd", "P@ssw0rd"), t("ararat2010", "ararat2010", "ararat2010")], 0, t("Length matters most, and real words like \"ararat\" are among the first a computer tries.", "Ամենակարևորը երկարությունն է, իսկ «ararat»-ի նման իրական բառերը համակարգիչը փորձում է առաջինը։", "Важнее всего длина, а настоящие слова вроде «ararat» компьютер пробует одними из первых.")),
    q(t("Why does two-step login help?", "Ինչո՞ւ է երկքայլ մուտքն օգնում։", "Чем помогает двухэтапный вход?"), [t("A stolen password alone isn't enough to get in", "Միայն գողացված գաղտնաբառով հնարավոր չէ մուտք գործել", "Одного украденного пароля мало, чтобы войти"), t("It makes your phone faster", "Այն արագացնում է հեռախոսդ", "Телефон работает быстрее"), t("It deletes spam", "Այն ջնջում է սպամը", "Он удаляет спам")], 0),
    order(t("Put the steps for a suspicious message in order.", "Դասավորի՛ր կասկածելի հաղորդագրության հետ վարվելու քայլերը։", "Расставь шаги при подозрительном сообщении по порядку."), [
      t("Stop and don't click", "Կանգ առնել և չսեղմել", "Остановиться и не нажимать"),
      t("Check the sender and the link", "Ստուգել ուղարկողին և հղումը", "Проверить отправителя и ссылку"),
      t("Open the official app yourself", "Ինքդ բացել պաշտոնական հավելվածը", "Самому открыть официальное приложение"),
      t("Report and delete the message", "Հաղորդել և ջնջել հաղորդագրությունը", "Пожаловаться и удалить сообщение"),
    ]),
    q(t("Which address is most likely fake?", "Ո՞ր հասցեն է ամենայն հավանականությամբ կեղծ։", "Какой адрес скорее всего поддельный?"), [t("arnerica-bank.com", "arnerica-bank.com", "arnerica-bank.com"), t("The address you typed in yourself", "Այն հասցեն, որ ինքդ ես գրել", "Адрес, который ты набрал сам"), t("The bank's official app", "Բանկի պաշտոնական հավելվածը", "Официальное приложение банка")], 0, t("\"rn\" pretends to be \"m\": a classic trick.", "«rn»-ը ձևանում է «m»․ դասական հնարք է։", "«rn» притворяется «m» — классическая уловка.")),
    match(t("Match the trick to what it sounds like.", "Միացրո՛ւ հնարքն այն բանի հետ, թե ինչպես է այն հնչում։", "Соедини уловку с тем, как она звучит."), [
      [t("Pressure", "Ճնշում", "Давление"), t("\"Within 24 hours or it's deleted\"", "«24 ժամվա ընթացքում, թե չէ կջնջվի»", "«В течение 24 часов, иначе удалим»")],
      [t("Request for secrets", "Գաղտնիքի պահանջ", "Просьба о секрете"), t("\"Tell us your PIN\"", "«Ասեք ձեր PIN-ը»", "«Назовите PIN»")],
      [t("Too good to be true", "Չափազանց լավ է", "Слишком хорошо"), t("\"You won a phone!\"", "«Դուք շահել եք հեռախոս»", "«Вы выиграли телефон!»")],
      [t("Fake friend", "Կեղծ ընկեր", "Поддельный друг"), t("\"New number, send me money\"", "«Նոր համար է, փող ուղարկիր»", "«Новый номер, пришли денег»")],
    ]),
  ],
});

const interviewLesson = howto({
  slug: "cv-and-interview",
  title: ["How to write a CV and pass an interview", "Ինչպես գրել ինքնակենսագրական և անցնել հարցազրույց", "Как написать резюме и пройти собеседование"],
  goals: {
    en: ["Write a clear one-page CV, even without job experience", "Answer interview questions with the STAR method", "Prepare for the day and follow up afterwards"],
    hy: ["Գրել հստակ մեկ էջանոց ինքնակենսագրական՝ նույնիսկ առանց աշխատանքային փորձի", "Պատասխանել հարցազրույցի հարցերին STAR եղանակով", "Պատրաստվել այդ օրվան և հետո կապ պահպանել"],
    ru: ["Составить понятное резюме на одну страницу, даже без опыта работы", "Отвечать на вопросы собеседования по методу STAR", "Подготовиться к этому дню и написать после него"],
  },
  body: {
    en: `A summer job at a café, an internship at an IT company, a place in a volunteer programme or a summer school abroad: sooner or later someone will ask you for a **CV** and invite you to an **interview**. Many students think they have nothing to write. That's not true: school projects, olympiads, clubs, sports, helping at a family business and volunteering all show what you can do.

## Step by step

~~~sim
mechanism interview
~~~

## What goes on a one-page CV

1. **Name and contacts**: phone, email (a serious one, not "coolkid2009@..."), city.
2. **A short profile**: two lines about who you are and what you're looking for.
3. **Education**: your school, grade, and strong subjects or results.
4. **Experience and projects**: clubs, olympiads, volunteering, things you built. For each one, say what **you** did and what came of it.
5. **Skills and languages**: Armenian, Russian, English; computer skills; a driving licence if you have one.

Keep it to one page, use one clear font, and check every word for mistakes. Ask someone else to read it too.

## The STAR method

When they ask "Tell me about a time you…", answer in four parts:

- **S**ituation: where and when.
- **T**ask: what needed to be done.
- **A**ction: what **you** did.
- **R**esult: what happened, with a number if possible.

*"In our school fair (S) our class had to raise money for a trip (T). I organised a cake stall and made posters (A). We raised 85,000 dram, the most of any class (R)."*

> 💡 **Did you know?** An eye-tracking study by the job site Ladders in 2018 found that recruiters spend on average about **7 seconds** on the first look at a CV. That's why a clean layout and a clear first line matter so much.

~~~sim
sort
Good idea in an interview or not?
# Do | Don't
- Arrive 10 minutes early = 1
- Prepare two questions about the job = 1
- Answer with a short STAR story = 1
- Check your phone while they talk = 2
- Criticise your old school or teachers = 2
- Make up experience you don't have = 2
> Be prepared, be present and be honest. Interviewers remember attitude as much as answers.
~~~

## Practice

1. Write your own one-page CV. Include at least two projects or activities from school or outside it.
2. Prepare three STAR stories: a time you worked in a team, solved a problem, and made a mistake and fixed it.
3. Do a practice interview with a friend or a family member, then swap roles.`,
    hy: `Ամառային աշխատանք սրճարանում, պրակտիկա ՏՏ ընկերությունում, տեղ կամավորական ծրագրում կամ ամառային դպրոց արտասահմանում․ վաղ թե ուշ քեզնից կխնդրեն **ինքնակենսագրական** և կհրավիրեն **հարցազրույցի**։ Շատ աշակերտներ կարծում են, որ գրելու բան չունեն։ Դա ճիշտ չէ․ դպրոցական նախագծերը, օլիմպիադաները, խմբակները, սպորտը, ընտանեկան բիզնեսում օգնելը և կամավորությունը բոլորը ցույց են տալիս, թե ինչ կարող ես։

## Քայլ առ քայլ

~~~sim
mechanism interview
~~~

## Ինչ գրել մեկ էջանոց ինքնակենսագրականում

1. **Անուն և կոնտակտներ**․ հեռախոս, էլ․ փոստ (լուրջ, ոչ թե «coolkid2009@...»), քաղաք։
2. **Կարճ նկարագիր**․ երկու տող այն մասին, թե ով ես և ինչ ես փնտրում։
3. **Կրթություն**․ դպրոցդ, դասարանդ, ուժեղ առարկաներդ կամ արդյունքներդ։
4. **Փորձ և նախագծեր**․ խմբակներ, օլիմպիադաներ, կամավորություն, բաներ, որ ստեղծել ես։ Յուրաքանչյուրի համար ասա, թե **դու** ինչ արեցիր և ինչ ստացվեց։
5. **Հմտություններ և լեզուներ**․ հայերեն, ռուսերեն, անգլերեն, համակարգչային հմտություններ, վարորդական իրավունք, եթե ունես։

Սահմանափակվի՛ր մեկ էջով, օգտագործի՛ր մեկ հստակ տառատեսակ և ստուգի՛ր ամեն բառ սխալների համար։ Խնդրի՛ր, որ ուրիշն էլ կարդա։

## STAR եղանակը

Երբ հարցնում են «Պատմեք մի դեպքի մասին, երբ…», պատասխանի՛ր չորս մասով․

- **S** (իրավիճակ)․ որտեղ և երբ։
- **T** (խնդիր)․ ինչ էր պետք անել։
- **A** (գործողություն)․ ինչ արեցիր **դու**։
- **R** (արդյունք)․ ինչ ստացվեց, հնարավորության դեպքում՝ թվով։

*«Դպրոցական տոնավաճառում (S) մեր դասարանը պետք է գումար հավաքեր էքսկուրսիայի համար (T)։ Ես կազմակերպեցի թխվածքների վաճառասեղան և պաստառներ պատրաստեցի (A)։ Հավաքեցինք 85 000 դրամ՝ բոլոր դասարաններից ամենաշատը (R)»։*

> 💡 **Հետաքրքիր է իմանալ։** Ladders աշխատանքի կայքի 2018 թվականի հետազոտությունը, որը հետևում էր աչքի շարժումներին, պարզեց, որ ռեկրուտերներն ինքնակենսագրականի առաջին դիտման վրա ծախսում են միջինում մոտ **7 վայրկյան**։ Դրա համար էլ մաքուր դասավորությունն ու հստակ առաջին տողն այդքան կարևոր են։

~~~sim
sort
Լա՞վ միտք է հարցազրույցում, թե՞ ոչ։
# Արա՛ | Մի՛ արա
- Գալ 10 րոպե շուտ = 1
- Աշխատանքի մասին երկու հարց պատրաստել = 1
- Պատասխանել կարճ STAR պատմությամբ = 1
- Հեռախոսդ նայել, երբ նրանք խոսում են = 2
- Քննադատել նախկին դպրոցդ կամ ուսուցիչներիդ = 2
- Հորինել փորձ, որը չունես = 2
> Եղի՛ր պատրաստված, ուշադիր և ազնիվ։ Հարցազրուցավարները վերաբերմունքը հիշում են այնքան, որքան պատասխանները։
~~~

## Առաջադրանքներ

1. Գրի՛ր քո մեկ էջանոց ինքնակենսագրականը։ Ներառի՛ր առնվազն երկու նախագիծ կամ գործունեություն դպրոցից կամ դրանից դուրս։
2. Պատրաստի՛ր երեք STAR պատմություն․ երբ աշխատել ես թիմով, լուծել ես խնդիր, և երբ սխալվել ես ու ուղղել։
3. Փորձնական հարցազրույց անցկացրու ընկերոջ կամ ընտանիքի անդամի հետ, հետո փոխվե՛ք դերերով։`,
    ru: `Летняя работа в кафе, стажировка в IT-компании, место в волонтёрской программе или летняя школа за границей — рано или поздно у тебя попросят **резюме** и пригласят на **собеседование**. Многие школьники думают, что им нечего написать. Это не так: школьные проекты, олимпиады, кружки, спорт, помощь в семейном деле и волонтёрство показывают, что ты умеешь.

## Шаг за шагом

~~~sim
mechanism interview
~~~

## Что писать в резюме на одну страницу

1. **Имя и контакты**: телефон, почта (серьёзная, а не «coolkid2009@...»), город.
2. **Коротко о себе**: две строки о том, кто ты и что ищешь.
3. **Образование**: школа, класс, сильные предметы или результаты.
4. **Опыт и проекты**: кружки, олимпиады, волонтёрство, то, что ты создал. Для каждого пункта скажи, что сделал **именно ты** и что из этого вышло.
5. **Навыки и языки**: армянский, русский, английский; компьютерные навыки; права, если есть.

Уложись в одну страницу, используй один понятный шрифт и проверь каждое слово на ошибки. Попроси кого-нибудь тоже прочитать.

## Метод STAR

Когда спрашивают «Расскажите о случае, когда…», отвечай в четыре части:

- **S** (ситуация): где и когда.
- **T** (задача): что нужно было сделать.
- **A** (действие): что сделал **ты**.
- **R** (результат): что получилось, по возможности с числом.

*«На школьной ярмарке (S) нашему классу нужно было собрать деньги на поездку (T). Я организовал прилавок с выпечкой и нарисовал плакаты (A). Мы собрали 85 000 драмов — больше всех классов (R)».*

> 💡 **Интересно знать.** Исследование сайта вакансий Ladders в 2018 году, следившее за движением глаз, показало, что рекрутеры тратят на первый просмотр резюме в среднем около **7 секунд**. Поэтому аккуратное оформление и ясная первая строка так важны.

~~~sim
sort
Хорошая идея на собеседовании или нет?
# Делай | Не делай
- Прийти на 10 минут раньше = 1
- Подготовить два вопроса о работе = 1
- Ответить короткой историей по STAR = 1
- Смотреть в телефон, пока они говорят = 2
- Ругать прежнюю школу или учителей = 2
- Выдумывать опыт, которого нет = 2
> Будь подготовлен, внимателен и честен. Интервьюеры запоминают отношение не меньше, чем ответы.
~~~

## Задания

1. Составь своё резюме на одну страницу. Включи хотя бы два проекта или занятия в школе или вне её.
2. Подготовь три истории по STAR: когда ты работал в команде, решил проблему, ошибся и исправил ошибку.
3. Проведи пробное собеседование с другом или кем-то из родных, потом поменяйтесь ролями.`,
  },
  quiz: [
    q(t("How long should a first CV be?", "Որքա՞ն երկար պետք է լինի առաջին ինքնակենսագրականը։", "Какой длины должно быть первое резюме?"), [t("One page", "Մեկ էջ", "Одна страница"), t("At least five pages", "Առնվազն հինգ էջ", "Не меньше пяти страниц"), t("One line", "Մեկ տող", "Одна строка")], 0),
    q(t("What does the A in STAR stand for?", "Ի՞նչ է նշանակում STAR-ի A-ն։", "Что означает буква A в STAR?"), [t("Action: what you did", "Գործողություն՝ ինչ արեցիր դու", "Действие: что сделал ты"), t("Age", "Տարիք", "Возраст"), t("Address", "Հասցե", "Адрес")], 0),
    q(t("You have no job experience yet. What can you put on your CV?", "Դեռ աշխատանքային փորձ չունես։ Ի՞նչ կարող ես գրել ինքնակենսագրականում։", "У тебя ещё нет опыта работы. Что можно указать в резюме?"), [t("School projects, clubs and volunteering", "Դպրոցական նախագծեր, խմբակներ և կամավորություն", "Школьные проекты, кружки и волонтёрство"), t("Nothing: leave it empty", "Ոչինչ, թողնել դատարկ", "Ничего, оставить пустым"), t("Experience you make up", "Հորինված փորձ", "Выдуманный опыт")], 0),
    order(t("Put the STAR parts in order.", "Դասավորի՛ր STAR-ի մասերը։", "Расставь части STAR по порядку."), [
      t("Situation", "Իրավիճակ", "Ситуация"),
      t("Task", "Խնդիր", "Задача"),
      t("Action", "Գործողություն", "Действие"),
      t("Result", "Արդյունք", "Результат"),
    ]),
    q(t("About how long does a recruiter spend on the first look at a CV?", "Մոտավորապես որքա՞ն ժամանակ է ռեկրուտերը ծախսում ինքնակենսագրականի առաջին դիտման վրա։", "Сколько примерно рекрутер тратит на первый просмотр резюме?"), [t("About 7 seconds", "Մոտ 7 վայրկյան", "Около 7 секунд"), t("About 7 minutes", "Մոտ 7 րոպե", "Около 7 минут"), t("About an hour", "Մոտ մեկ ժամ", "Около часа")], 0),
    match(t("Match the moment to the right move.", "Միացրո՛ւ պահն իր ճիշտ քայլի հետ։", "Соедини момент с правильным действием."), [
      [t("Before the interview", "Հարցազրույցից առաջ", "До собеседования"), t("Research the company", "Ուսումնասիրել ընկերությունը", "Изучить компанию")],
      [t("Arriving", "Ժամանելիս", "По приходе"), t("Smile and a firm handshake", "Ժպիտ և ամուր ձեռքսեղմում", "Улыбка и крепкое рукопожатие")],
      [t("At the end", "Վերջում", "В конце"), t("Ask your own questions", "Տալ սեփական հարցերը", "Задать свои вопросы")],
      [t("The next day", "Հաջորդ օրը", "На следующий день"), t("Send a thank-you message", "Ուղարկել շնորհակալական հաղորդագրություն", "Отправить письмо с благодарностью")],
    ]),
  ],
});

const coldLesson = howto({
  slug: "dress-for-the-cold",
  title: ["How to stay warm in the cold and spot hypothermia", "Ինչպես տաք մնալ ցրտին և ճանաչել գերսառեցումը", "Как сохранить тепло на морозе и распознать переохлаждение"],
  goals: {
    en: ["Dress in three layers for cold weather", "Explain why wet cotton and wind make you cold", "Recognise hypothermia and know how to help"],
    hy: ["Ցուրտ եղանակին հագնվել երեք շերտով", "Բացատրել, թե ինչու են թաց բամբակն ու քամին սառեցնում", "Ճանաչել գերսառեցումը և իմանալ, թե ինչպես օգնել"],
    ru: ["Одеваться в три слоя в холодную погоду", "Объяснить, почему мокрый хлопок и ветер охлаждают", "Распознать переохлаждение и знать, как помочь"],
  },
  body: {
    en: `Armenian winters can be harsh: in Gyumri, Sevan and the mountain villages the temperature often drops below −15 °C, and a ski day at Tsaghkadzor or a winter hike can turn cold fast if the wind picks up. Clothes don't make heat: **your body does**. What clothes do is trap a layer of warm air around you and keep wind and water out. Knowing how to dress, and how to spot when someone is getting too cold, can save a life.

~~~sim
safety level=care
- Check the forecast and the "feels like" temperature before you go out, and tell someone your plan.
- Never go on a winter hike alone, and turn back early if the weather gets worse.
- If someone shows signs of hypothermia, call 112. Don't rub frozen skin or put it in hot water.
~~~

## Step by step

~~~sim
mechanism layers
~~~

## Why you lose heat

Your body loses heat in four ways:

- **Wind** (convection) blows the warm air away from your skin. That's why −5 °C with strong wind feels like −15 °C.
- **Water** (evaporation and conduction): wet clothes take heat from you up to 25 times faster than dry ones. Sweat counts too!
- **Touching cold things** (conduction): sitting on snow or a cold rock. Always sit on a bag or a mat.
- **Radiation**: your body glows with heat that escapes, especially from an uncovered head.

That's why the base layer should move sweat away, and why you should take off a layer **before** you start sweating on a climb.

## Hypothermia

When the body's core temperature drops below **35 °C**, it's called hypothermia. It creeps up slowly, and the person often doesn't notice it themselves. Watch your friends for strong shivering, then clumsiness, slurred speech and strange moods. If the shivering stops but they are still cold, that is serious: call 112.

> 💡 **Did you know?** Emperor penguins survive Antarctic winters at −40 °C with winds over 100 km/h. Their trick is the huddle: thousands of penguins pack together and slowly shuffle, so that everyone takes a turn in the warm middle, where the temperature can rise above 20 °C.

~~~sim
sort
Will it keep you warm on a winter hike?
# Keeps you warm | Doesn't
- Wool socks = 1
- A fleece jumper = 1
- A windproof jacket with a hood = 1
- Cotton jeans = 2
- A T-shirt wet with sweat = 2
- Boots so tight your toes can't move = 2
> Warmth comes from trapped air. Wet, tight or cotton clothes squeeze it out or let it soak away.
~~~

## Practice

1. Before the next cold day, lay out your clothes in three layers: base, middle, outer. Which ones would you change?
2. Check a weather app for the "feels like" temperature and compare it with the real one. How strong was the wind?
3. Make a winter kit for a car or a backpack: hat, gloves, spare socks, a foil blanket, a thermos and a phone power bank.`,
    hy: `Հայաստանի ձմեռները կարող են խիստ լինել․ Գյումրիում, Սևանում և լեռնային գյուղերում ջերմաստիճանը հաճախ իջնում է −15 °C-ից ցածր, իսկ Ծաղկաձորում դահուկային օրը կամ ձմեռային արշավը կարող է արագ ցրտել, եթե քամին ուժեղանա։ Հագուստը ջերմություն չի ստեղծում․ **մարմինդ է ստեղծում**։ Հագուստը շուրջդ տաք օդի շերտ է պահում և քամին ու ջուրը ներս չի թողնում։ Իմանալը, թե ինչպես հագնվել և ինչպես նկատել, որ մեկը չափազանց է մրսում, կարող է կյանք փրկել։

~~~sim
safety level=care
- Դուրս գալուց առաջ ստուգի՛ր եղանակի կանխատեսումը և «զգացվում է որպես» ջերմաստիճանը, և պլանիդ մասին ասա՛ մեկին։
- Երբեք մենակ մի՛ գնա ձմեռային արշավի և շուտ վերադարձի՛ր, եթե եղանակը վատանում է։
- Եթե մեկի մոտ գերսառեցման նշաններ կան, զանգի՛ր 112։ Մի՛ շփիր ցրտահարված մաշկը և մի՛ դիր այն տաք ջրի մեջ։
~~~

## Քայլ առ քայլ

~~~sim
mechanism layers
~~~

## Ինչու ես ջերմություն կորցնում

Մարմինդ ջերմություն է կորցնում չորս ձևով․

- **Քամի** (կոնվեկցիա)․ քամին տաք օդը քշում է մաշկիցդ։ Դրա համար էլ −5 °C-ը ուժեղ քամու դեպքում զգացվում է −15 °C։
- **Ջուր** (գոլորշիացում և ջերմահաղորդում)․ թաց հագուստը ջերմությունը քեզնից տանում է մինչև 25 անգամ ավելի արագ, քան չորը։ Քրտինքը նույնպես հաշվվում է։
- **Սառը բաների հպում** (ջերմահաղորդում)․ ձյան կամ սառը քարի վրա նստելը։ Միշտ նստի՛ր պայուսակի կամ գորգի վրա։
- **Ճառագայթում**․ մարմինդ ջերմություն է ճառագայթում, որը կորչում է, հատկապես չծածկված գլխից։

Դրա համար էլ հիմնական շերտը պետք է քրտինքը հեռացնի, և վերելքի ժամանակ պետք է մի շերտ հանես, **նախքան** կսկսես քրտնել։

## Գերսառեցում

Երբ մարմնի ներքին ջերմաստիճանն իջնում է **35 °C**-ից ցածր, դա կոչվում է գերսառեցում։ Այն մոտենում է դանդաղ, և մարդը հաճախ ինքը չի նկատում։ Հետևի՛ր ընկերներիդ․ ուժեղ դող, հետո անճարակություն, անհասկանալի խոսք և տարօրինակ տրամադրություն։ Եթե դողը դադարում է, բայց մարդը դեռ սառն է, դա լուրջ է․ զանգի՛ր 112։

> 💡 **Հետաքրքիր է իմանալ։** Կայսերական պինգվիններն Անտարկտիդայի ձմեռը դիմանում են −40 °C ցրտին՝ ժամում 100 կմ-ից ուժեղ քամիների տակ։ Նրանց հնարքը խմբվելն է․ հազարավոր պինգվիններ սեղմվում են իրար և դանդաղ տեղաշարժվում, որպեսզի բոլորը հերթով հայտնվեն տաք կենտրոնում, որտեղ ջերմաստիճանը կարող է բարձրանալ 20 °C-ից վեր։

~~~sim
sort
Կպահի՞ քեզ տաք ձմեռային արշավին։
# Պահում է տաք | Չի պահում
- Բրդյա գուլպաներ = 1
- Ֆլիսե սվիտեր = 1
- Քամուց պաշտպանող բաճկոն՝ գլխանոցով = 1
- Բամբակյա ջինսեր = 2
- Քրտինքից թացացած շապիկ = 2
- Այնքան նեղ կոշիկներ, որ մատներդ չեն շարժվում = 2
> Ջերմությունը գալիս է պահված օդից։ Թաց, նեղ կամ բամբակյա հագուստը դուրս է մղում այն կամ թողնում, որ ներծծվի։
~~~

## Առաջադրանքներ

1. Հաջորդ ցուրտ օրվանից առաջ հագուստդ դասավորի՛ր երեք շերտով՝ հիմնական, միջին, արտաքին։ Որո՞նք կփոխեիր։
2. Եղանակի հավելվածում ստուգի՛ր «զգացվում է որպես» ջերմաստիճանը և համեմատի՛ր իրականի հետ։ Որքա՞ն ուժեղ էր քամին։
3. Մեքենայի կամ ուսապարկի համար ձմեռային պաշար հավաքի՛ր․ գլխարկ, ձեռնոցներ, պահեստային գուլպաներ, փայլաթիթեղե ծածկոց, թերմոս և հեռախոսի լիցքավորիչ։`,
    ru: `Армянские зимы бывают суровыми: в Гюмри, Севане и горных сёлах температура часто опускается ниже −15 °C, а лыжный день в Цахкадзоре или зимний поход может быстро стать холодным, если поднимется ветер. Одежда не делает тепло — **его делает тело**. Одежда удерживает вокруг тебя слой тёплого воздуха и не пускает ветер и воду. Умение правильно одеться и заметить, что кто-то слишком замёрз, может спасти жизнь.

~~~sim
safety level=care
- Перед выходом проверь прогноз и температуру «ощущается как» и расскажи кому-нибудь о своих планах.
- Никогда не ходи в зимний поход один и поворачивай назад пораньше, если погода портится.
- Если у кого-то признаки переохлаждения, звони 112. Не растирай обмороженную кожу и не опускай её в горячую воду.
~~~

## Шаг за шагом

~~~sim
mechanism layers
~~~

## Почему уходит тепло

Тело теряет тепло четырьмя способами:

- **Ветер** (конвекция) сдувает тёплый воздух с кожи. Поэтому −5 °C при сильном ветре ощущаются как −15 °C.
- **Вода** (испарение и теплопроводность): мокрая одежда забирает тепло до 25 раз быстрее сухой. Пот тоже считается!
- **Касание холодного** (теплопроводность): сидеть на снегу или холодном камне. Всегда подкладывай рюкзак или коврик.
- **Излучение**: тело излучает тепло, и оно уходит, особенно с непокрытой головы.

Поэтому базовый слой должен отводить пот, а на подъёме один слой нужно снять **до того**, как вспотеешь.

## Переохлаждение

Когда температура внутри тела опускается ниже **35 °C**, это называют переохлаждением. Оно подкрадывается медленно, и человек часто сам этого не замечает. Следи за друзьями: сильная дрожь, потом неловкость, невнятная речь и странное настроение. Если дрожь прекратилась, а человек всё ещё холодный, это серьёзно: звони 112.

> 💡 **Интересно знать.** Императорские пингвины переживают антарктическую зиму при −40 °C и ветре сильнее 100 км/ч. Их секрет — «черепаха»: тысячи пингвинов прижимаются друг к другу и медленно перемещаются, чтобы каждый по очереди побывал в тёплой середине, где температура может подниматься выше 20 °C.

~~~sim
sort
Согреет ли это в зимнем походе?
# Греет | Не греет
- Шерстяные носки = 1
- Флисовый свитер = 1
- Непродуваемая куртка с капюшоном = 1
- Хлопковые джинсы = 2
- Футболка, мокрая от пота = 2
- Ботинки, такие тесные, что пальцы не двигаются = 2
> Тепло даёт удержанный воздух. Мокрая, тесная или хлопковая одежда выдавливает его или даёт ему уйти.
~~~

## Задания

1. Перед следующим холодным днём разложи одежду в три слоя: базовый, средний, внешний. Что бы ты поменял?
2. Посмотри в приложении погоды температуру «ощущается как» и сравни с настоящей. Насколько сильным был ветер?
3. Собери зимний набор для машины или рюкзака: шапка, перчатки, запасные носки, спасательное одеяло из фольги, термос и пауэрбанк.`,
  },
  quiz: [
    q(t("Which base layer is the worst choice for a winter hike?", "Ո՞ր հիմնական շերտն է ամենավատ ընտրությունը ձմեռային արշավի համար։", "Какой базовый слой — худший выбор для зимнего похода?"), [t("Cotton", "Բամբակ", "Хлопок"), t("Merino wool", "Մերինոսի բուրդ", "Шерсть мериноса"), t("Synthetic sports fabric", "Սինթետիկ սպորտային գործվածք", "Синтетическая спортивная ткань")], 0, t("Cotton soaks up sweat and stays wet and cold.", "Բամբակը ներծծում է քրտինքը և մնում թաց ու սառը։", "Хлопок впитывает пот и остаётся мокрым и холодным.")),
    q(t("Below what core body temperature does hypothermia start?", "Մարմնի ներքին ո՞ր ջերմաստիճանից ցածր է սկսվում գերսառեցումը։", "При какой температуре внутри тела начинается переохлаждение?"), [t("35 °C", "35 °C", "35 °C"), t("37 °C", "37 °C", "37 °C"), t("30 °C", "30 °C", "30 °C")], 0),
    q(t("Why take off a layer before you start sweating on a climb?", "Ինչո՞ւ վերելքի ժամանակ մի շերտ հանել, նախքան քրտնելը։", "Зачем на подъёме снимать слой до того, как вспотеешь?"), [t("Wet clothes lose heat much faster later", "Թաց հագուստը հետո շատ ավելի արագ է ջերմություն կորցնում", "Мокрая одежда потом гораздо быстрее теряет тепло"), t("To get a tan", "Արևայրուք ստանալու համար", "Чтобы загореть"), t("To make the backpack heavier", "Ուսապարկն ավելի ծանր դարձնելու համար", "Чтобы рюкзак стал тяжелее")], 0),
    order(t("Put the layers in order, from the skin outwards.", "Դասավորի՛ր շերտերը՝ մաշկից դեպի դուրս։", "Расставь слои по порядку — от кожи наружу."), [
      t("Wool or synthetic base layer", "Բրդյա կամ սինթետիկ հիմնական շերտ", "Шерстяной или синтетический базовый слой"),
      t("Fleece or wool jumper", "Ֆլիս կամ բրդյա սվիտեր", "Флиска или шерстяной свитер"),
      t("Windproof and waterproof jacket", "Քամուց և ջրից պաշտպանող բաճկոն", "Непродуваемая и непромокаемая куртка"),
    ]),
    q(t("A friend was shivering hard but has now stopped, is still cold and very sleepy. What do you do?", "Ընկերդ ուժեղ դողում էր, բայց հիմա դադարել է, դեռ սառն է և շատ քնկոտ։ Ի՞նչ ես անում։", "Друга сильно трясло, но теперь дрожь прекратилась, он холодный и очень сонный. Что ты делаешь?"), [t("Call 112 and keep them warm and still", "Զանգում եմ 112 և պահում նրան տաք ու անշարժ", "Звоню 112 и держу его в тепле и покое"), t("Let them sleep it off in the snow", "Թողնում եմ քնի ձյան մեջ", "Даю ему поспать на снегу"), t("Make them run to warm up", "Ստիպում եմ վազել՝ տաքանալու համար", "Заставляю бегать, чтобы согрелся")], 0, t("When shivering stops while still cold, the body is losing the fight. Move them gently: a very cold heart is fragile.", "Երբ դողը դադարում է, իսկ մարդը դեռ սառն է, մարմինը պարտվում է։ Զգույշ տեղաշարժի՛ր․ շատ սառած սիրտը խոցելի է։", "Если дрожь прекратилась, а человек холодный, тело проигрывает. Перемещай бережно: очень холодное сердце уязвимо.")),
    match(t("Match the way of losing heat to the example.", "Միացրո՛ւ ջերմություն կորցնելու ձևն իր օրինակի հետ։", "Соедини способ потери тепла с примером."), [
      [t("Wind", "Քամի", "Ветер"), t("Strong gusts on a ridge", "Ուժեղ պոռթկումներ լեռնաշղթայի վրա", "Сильные порывы на хребте")],
      [t("Water", "Ջուր", "Вода"), t("A T-shirt soaked with sweat", "Քրտինքով թրջված շապիկ", "Футболка, пропитанная потом")],
      [t("Touching cold things", "Սառը բաների հպում", "Касание холодного"), t("Sitting on snow", "Ձյան վրա նստելը", "Сидеть на снегу")],
      [t("Radiation", "Ճառագայթում", "Излучение"), t("Going out without a hat", "Առանց գլխարկի դուրս գալը", "Выйти без шапки")],
    ]),
  ],
});

export const howtoGrade11 = howtoCourse(
  11,
  {
    title: ["Online safety, first job, staying warm", "Անվտանգություն առցանց, առաջին աշխատանք, տաք մնալ", "Безопасность в сети, первая работа, как не замёрзнуть"],
    summary: [
      "Spot scams and protect your accounts, write a CV and pass an interview, and dress for the cold and recognise hypothermia.",
      "Ճանաչել խարդախությունները և պաշտպանել հաշիվներդ, գրել ինքնակենսագրական և անցնել հարցազրույց, հագնվել ցրտին և ճանաչել գերսառեցումը։",
      "Распознавать мошенников и защищать аккаунты, составить резюме и пройти собеседование, одеваться по погоде и распознавать переохлаждение.",
    ],
  },
  [onlineLesson, interviewLesson, coldLesson],
);
