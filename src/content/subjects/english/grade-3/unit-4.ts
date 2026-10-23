import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  title: t("Numbers, days, time and weather", "Թվեր, օրեր, ժամ և եղանակ", "Числа, дни, время и погода"),
  summary: t(
    "Numbers to 100, days of the week, months and birthdays, «What time is it?», seasons and weather.",
    "Թվերը մինչև 100, շաբաթվա օրեր, ամիսներ և ծննդյան օրեր, «What time is it?», տարվա եղանակներ և օդի եղանակ։",
    "Числа до 100, дни недели, месяцы и дни рождения, «What time is it?», времена года и погода.",
  ),
  lessons: [
    lesson(
      "numbers-11-20",
      ["Numbers 11–20", "11–20 թվերը", "Числа 11–20"],
      {
        en: ["Say, read and write the numbers 11–20", "Hear the difference between -teen and -ty: thirteen and thirty", "Count and do simple sums in English"],
        hy: ["Ասել, կարդալ և գրել 11–20 թվերը", "Լսել -teen և -ty տարբերությունը՝ thirteen և thirty", "Հաշվել և լուծել պարզ օրինակներ անգլերենով"],
        ru: ["Говорить, читать и писать числа 11–20", "Слышать разницу -teen и -ty: thirteen и thirty", "Считать и решать простые примеры по-английски"],
      },
      {
        en: `## 11 to 20

| 11 | eleven | 16 | sixteen |
|---|---|---|---|
| 12 | twelve | 17 | seventeen |
| 13 | thirteen | 18 | eighteen |
| 14 | fourteen | 19 | nineteen |
| 15 | fifteen | 20 | twenty |

**11** and **12** are special. From **13** to **19** we add **-teen**: four → fourteen, six → sixteen.

Watch the spelling: **thir**teen (not threeteen), **fif**teen (not fiveteen), **eigh**teen (one t).

## -teen or -ty?

*Thir**teen*** (13) — the stress is at the end: thir-**TEEN**.
*Thir**ty*** (30) — the stress is at the start: **THIR**-ty.

## Sums

*Five plus six is eleven.* (5 + 6 = 11)
*Twenty minus seven is thirteen.* (20 − 7 = 13)

### Exercises

1. Write in words: 12, 15, 18.
2. Write in numbers: *fourteen, nineteen, eleven*.
3. Count from 11 to 20, then back.
4. Say the sum: 8 + 8 = ?
5. Say the sum: 20 − 3 = ?
6. Find the spelling mistake: *fiveteen*.
7. What number comes after nineteen? Before thirteen?

### Answers

1. twelve, fifteen, eighteen. 2. 14, 19, 11. 3. eleven, twelve … twenty. 4. Eight plus eight is sixteen. 5. Twenty minus three is seventeen. 6. fifteen. 7. twenty; twelve.`,
        hy: `## 11-ից 20

| 11 | eleven | 16 | sixteen |
|---|---|---|---|
| 12 | twelve | 17 | seventeen |
| 13 | thirteen | 18 | eighteen |
| 14 | fourteen | 19 | nineteen |
| 15 | fifteen | 20 | twenty |

**11**-ը և **12**-ը առանձնահատուկ են։ **13**-ից **19** ավելացնում ենք **-teen**՝ four → fourteen, six → sixteen։

Ուշադրություն ուղղագրությանը՝ **thir**teen (ոչ threeteen), **fif**teen (ոչ fiveteen), **eigh**teen (մեկ t)։

## -teen, թե՞ -ty

*thirteen* (13)՝ շեշտը վերջում է՝ thir-**TEEN**։
*thirty* (30)՝ շեշտը սկզբում է՝ **THIR**-ty։

## Օրինակներ

*Five plus six is eleven.* (5 + 6 = 11)
*Twenty minus seven is thirteen.* (20 − 7 = 13)

### Վարժություններ

1. Գրի՛ր բառերով. 12, 15, 18։
2. Գրի՛ր թվանշաններով. *fourteen, nineteen, eleven*։
3. Հաշվի՛ր 11-ից 20, հետո հակառակը։
4. Ասա՛ անգլերեն. 8 + 8 = ?
5. Ասա՛ անգլերեն. 20 − 3 = ?
6. Գտի՛ր ուղղագրական սխալը. *fiveteen*։
7. Ո՞ր թիվն է գալիս nineteen-ից հետո։ Իսկ thirteen-ից առա՞ջ։

### Պատասխաններ

1. twelve, fifteen, eighteen։ 2. 14, 19, 11։ 3. eleven, twelve … twenty։ 4. Eight plus eight is sixteen. 5. Twenty minus three is seventeen. 6. fifteen։ 7. twenty, twelve։`,
        ru: `## От 11 до 20

| 11 | eleven | 16 | sixteen |
|---|---|---|---|
| 12 | twelve | 17 | seventeen |
| 13 | thirteen | 18 | eighteen |
| 14 | fourteen | 19 | nineteen |
| 15 | fifteen | 20 | twenty |

**11** и **12** — особые. С **13** до **19** добавляем **-teen**: four → fourteen, six → sixteen.

Следи за написанием: **thir**teen (не threeteen), **fif**teen (не fiveteen), **eigh**teen (одна t).

## -teen или -ty?

*thirteen* (13) — ударение в конце: thir-**TEEN**.
*thirty* (30) — ударение в начале: **THIR**-ty.

## Примеры

*Five plus six is eleven.* (5 + 6 = 11)
*Twenty minus seven is thirteen.* (20 − 7 = 13)

### Упражнения

1. Напиши словами: 12, 15, 18.
2. Напиши цифрами: *fourteen, nineteen, eleven*.
3. Посчитай от 11 до 20 и обратно.
4. Скажи по-английски: 8 + 8 = ?
5. Скажи по-английски: 20 − 3 = ?
6. Найди ошибку: *fiveteen*.
7. Какое число идёт после nineteen? А перед thirteen?

### Ответы

1. twelve, fifteen, eighteen. 2. 14, 19, 11. 3. eleven, twelve … twenty. 4. Eight plus eight is sixteen. 5. Twenty minus three is seventeen. 6. fifteen. 7. twenty; twelve.`,
      },
      [
        q(t("15 is…", "15-ը…", "15 —"), [t("fiveteen", "fiveteen", "fiveteen"), t("fifteen", "fifteen", "fifteen"), t("fifty", "fifty", "fifty")], 1),
        q(t("«twelve» is…", "«twelve»-ը…", "«twelve» —"), [t("12", "12", "12"), t("20", "20", "20"), t("11", "11", "11")], 0),
        q(t("9 + 9 = ?", "9 + 9 = ?", "9 + 9 = ?"), [t("nineteen", "nineteen", "nineteen"), t("seventeen", "seventeen", "seventeen"), t("eighteen", "eighteen", "eighteen")], 2),
        q(t("Which number is 13?", "Ո՞րն է 13-ը։", "Какое число — 13?"), [t("thirteen", "thirteen", "thirteen"), t("thirty", "thirty", "thirty"), t("threeteen", "threeteen", "threeteen")], 0),
        q(t("What comes after «nineteen»?", "Ի՞նչ է գալիս «nineteen»-ից հետո։", "Что идёт после «nineteen»?"), [t("ten", "ten", "ten"), t("twenty", "twenty", "twenty"), t("eleven", "eleven", "eleven")], 1),
        q(t("20 − 6 = ?", "20 − 6 = ?", "20 − 6 = ?"), [t("sixteen", "sixteen", "sixteen"), t("thirteen", "thirteen", "thirteen"), t("fourteen", "fourteen", "fourteen")], 2),
      ],
    ),
    lesson(
      "numbers-to-100",
      ["Numbers to 100", "Թվերը մինչև 100", "Числа до 100"],
      {
        en: ["Say and write the tens: twenty, thirty… a hundred", "Build numbers like twenty-five and sixty-eight", "Ask «How many…?» and say phone numbers and ages"],
        hy: ["Ասել և գրել տասնյակները՝ twenty, thirty… a hundred", "Կազմել twenty-five, sixty-eight տիպի թվեր", "Հարցնել «How many…?», ասել հեռախոսահամար և տարիք"],
        ru: ["Называть и писать десятки: twenty, thirty… a hundred", "Составлять числа вроде twenty-five и sixty-eight", "Спрашивать «How many…?», называть номер телефона и возраст"],
      },
      {
        en: `## The tens

| 20 | twenty | 60 | sixty |
|---|---|---|---|
| 30 | thirty | 70 | seventy |
| 40 | **forty** (no u!) | 80 | eighty |
| 50 | fifty | 90 | ninety |
| | | 100 | a hundred |

## Tens and ones

Write a **hyphen** between the tens and the ones:

*21 twenty-one, 35 thirty-five, 47 forty-seven, 68 sixty-eight, 99 ninety-nine.*

## Phone numbers

We say phone numbers **digit by digit**: 0 is "oh" or "zero". *093 415 627* → *oh-nine-three, four-one-five, six-two-seven.*

## How many?

> **How many** pages are there in your book? — There are **seventy-two** pages.

### Exercises

1. Write in words: 40, 55, 83.
2. Write in numbers: *thirty-six, ninety-one, seventy*.
3. Find the spelling mistake: *fourty*.
4. Count in tens from 10 to 100.
5. Say: 25 + 25 = ?
6. How old is your grandmother or grandfather? Say it in English.
7. Say your school's phone number or a made-up one digit by digit.

### Answers

1. forty, fifty-five, eighty-three. 2. 36, 91, 70. 3. forty. 4. ten, twenty, thirty … a hundred. 5. Twenty-five plus twenty-five is fifty. 6. Example: My grandma is sixty-seven. 7. Say each digit separately.`,
        hy: `## Տասնյակներ

| 20 | twenty | 60 | sixty |
|---|---|---|---|
| 30 | thirty | 70 | seventy |
| 40 | **forty** (առանց u-ի) | 80 | eighty |
| 50 | fifty | 90 | ninety |
| | | 100 | a hundred |

## Տասնյակներ և միավորներ

Տասնյակի և միավորի միջև դնում ենք **գծիկ**՝

*21 twenty-one, 35 thirty-five, 47 forty-seven, 68 sixty-eight, 99 ninety-nine*։

## Հեռախոսահամարներ

Հեռախոսահամարն ասում ենք **թվանշան առ թվանշան**. 0-ն՝ «oh» կամ «zero»։ *093 415 627* → *oh-nine-three, four-one-five, six-two-seven*։

## How many?

> **How many** pages are there in your book? — There are **seventy-two** pages.

### Վարժություններ

1. Գրի՛ր բառերով. 40, 55, 83։
2. Գրի՛ր թվանշաններով. *thirty-six, ninety-one, seventy*։
3. Գտի՛ր սխալը. *fourty*։
4. Տասնյակներով հաշվի՛ր 10-ից 100։
5. Ասա՛. 25 + 25 = ?
6. Քանի՞ տարեկան է տատիկդ կամ պապիկդ։ Ասա՛ անգլերեն։
7. Թվանշան առ թվանշան ասա՛ որևէ հեռախոսահամար։

### Պատասխաններ

1. forty, fifty-five, eighty-three։ 2. 36, 91, 70։ 3. forty։ 4. ten, twenty, thirty … a hundred։ 5. Twenty-five plus twenty-five is fifty. 6. Օրինակ՝ My grandma is sixty-seven. 7. Ամեն թվանշանն ասա՛ առանձին։`,
        ru: `## Десятки

| 20 | twenty | 60 | sixty |
|---|---|---|---|
| 30 | thirty | 70 | seventy |
| 40 | **forty** (без u!) | 80 | eighty |
| 50 | fifty | 90 | ninety |
| | | 100 | a hundred |

## Десятки и единицы

Между десятками и единицами пишем **дефис**:

*21 twenty-one, 35 thirty-five, 47 forty-seven, 68 sixty-eight, 99 ninety-nine.*

## Номера телефонов

Номер телефона говорим **по одной цифре**: 0 — «oh» или «zero». *093 415 627* → *oh-nine-three, four-one-five, six-two-seven.*

## How many?

> **How many** pages are there in your book? — There are **seventy-two** pages.

### Упражнения

1. Напиши словами: 40, 55, 83.
2. Напиши цифрами: *thirty-six, ninety-one, seventy*.
3. Найди ошибку: *fourty*.
4. Посчитай десятками от 10 до 100.
5. Скажи: 25 + 25 = ?
6. Сколько лет твоей бабушке или дедушке? Скажи по-английски.
7. Назови по цифрам какой-нибудь номер телефона.

### Ответы

1. forty, fifty-five, eighty-three. 2. 36, 91, 70. 3. forty. 4. ten, twenty, thirty … a hundred. 5. Twenty-five plus twenty-five is fifty. 6. Например: My grandma is sixty-seven. 7. Называй каждую цифру отдельно.`,
      },
      [
        q(t("40 is…", "40-ը…", "40 —"), [t("fourty", "fourty", "fourty"), t("forteen", "forteen", "forteen"), t("forty", "forty", "forty")], 2),
        q(t("«sixty-eight» is…", "«sixty-eight»-ը…", "«sixty-eight» —"), [t("68", "68", "68"), t("86", "86", "86"), t("618", "618", "618")], 0),
        q(t("How do we write 35?", "Ինչպե՞ս է գրվում 35-ը։", "Как пишется 35?"), [t("thirty five", "thirty five", "thirty five"), t("thirty-five", "thirty-five", "thirty-five"), t("thirteen-five", "thirteen-five", "thirteen-five")], 1),
        q(t("50 + 50 = ?", "50 + 50 = ?", "50 + 50 = ?"), [t("a hundred", "a hundred", "a hundred"), t("fifty-fifty", "fifty-fifty", "fifty-fifty"), t("ninety", "ninety", "ninety")], 0),
        q(t("We say phone numbers…", "Հեռախոսահամարն ասում ենք…", "Номер телефона называют…"), [t("as one big number", "որպես մեկ մեծ թիվ", "одним большим числом"), t("only in tens", "միայն տասնյակներով", "только десятками"), t("digit by digit", "թվանշան առ թվանշան", "по одной цифре")], 2),
        q(t("Which is 90?", "Ո՞րն է 90-ը։", "Какое число — 90?"), [t("nineteen", "nineteen", "nineteen"), t("ninety", "ninety", "ninety"), t("nine", "nine", "nine")], 1),
      ],
    ),
    lesson(
      "days-of-week",
      ["Days of the week", "Շաբաթվա օրերը", "Дни недели"],
      {
        en: ["Say and spell the seven days of the week with a capital letter", "Use «on» with days: on Monday", "Talk about your week: «On Tuesday I have English»"],
        hy: ["Ասել և մեծատառով գրել շաբաթվա յոթ օրերը", "Օրերի հետ գործածել «on»՝ on Monday", "Պատմել քո շաբաթվա մասին՝ «On Tuesday I have English»"],
        ru: ["Называть и писать с заглавной буквы семь дней недели", "Употреблять «on» с днями: on Monday", "Рассказывать о своей неделе: «On Tuesday I have English»"],
      },
      {
        en: `## Seven days

| Day | Short |
|---|---|
| Monday | Mon |
| Tuesday | Tue |
| Wednesday | Wed |
| Thursday | Thu |
| Friday | Fri |
| Saturday | Sat |
| Sunday | Sun |

Days always start with a **capital letter**. **Saturday** and **Sunday** are the **weekend**.

**Wednesday** is hard to spell: we say "WENZ-day" but write **Wed-nes-day**.

## on + day

*I have English **on** Monday and Thursday. We play football **on** Saturday.*

> **What day is it today?** — It's Friday.

### Exercises

1. Which day comes after Tuesday?
2. Which day comes before Sunday?
3. Which two days are the weekend?
4. Correct: *on monday i have maths.*
5. Complete: *We go to the park ___ Sunday.*
6. Spell **Wednesday** aloud.
7. Write three sentences about your week.

### Answers

1. Wednesday. 2. Saturday. 3. Saturday and Sunday. 4. On Monday I have maths. 5. on. 6. W-E-D-N-E-S-D-A-Y. 7. Example: On Monday I have English. On Wednesday I swim. On Sunday I visit my granny.`,
        hy: `## Յոթ օր

| Օր | Կարճ | Հայերեն |
|---|---|---|
| Monday | Mon | երկուշաբթի |
| Tuesday | Tue | երեքշաբթի |
| Wednesday | Wed | չորեքշաբթի |
| Thursday | Thu | հինգշաբթի |
| Friday | Fri | ուրբաթ |
| Saturday | Sat | շաբաթ |
| Sunday | Sun | կիրակի |

Անգլերենում օրերը միշտ գրվում են **մեծատառով** (հայերենում՝ փոքրատառով)։ **Saturday** և **Sunday**՝ հանգստյան օրեր են՝ **weekend**։

**Wednesday**-ն դժվար է գրել. ասում ենք «ուենզդեյ», գրում ենք **Wed-nes-day**։

## on + օր

*I have English **on** Monday and Thursday. We play football **on** Saturday.*

> **What day is it today?** — It's Friday.

### Վարժություններ

1. Ո՞ր օրն է գալիս Tuesday-ից հետո։
2. Ո՞ր օրն է Sunday-ից առաջ։
3. Ո՞ր երկու օրերն են weekend։
4. Ուղղի՛ր. *on monday i have maths.*
5. Լրացրո՛ւ. *We go to the park ___ Sunday.*
6. Տառ առ տառ ասա՛ **Wednesday**։
7. Գրի՛ր երեք նախադասություն քո շաբաթվա մասին։

### Պատասխաններ

1. Wednesday։ 2. Saturday։ 3. Saturday և Sunday։ 4. On Monday I have maths. 5. on։ 6. W-E-D-N-E-S-D-A-Y։ 7. Օրինակ՝ On Monday I have English. On Wednesday I swim. On Sunday I visit my granny.`,
        ru: `## Семь дней

| День | Кратко | Перевод |
|---|---|---|
| Monday | Mon | понедельник |
| Tuesday | Tue | вторник |
| Wednesday | Wed | среда |
| Thursday | Thu | четверг |
| Friday | Fri | пятница |
| Saturday | Sat | суббота |
| Sunday | Sun | воскресенье |

По-английски дни недели всегда пишутся с **заглавной буквы** (по-русски — со строчной). **Saturday** и **Sunday** — выходные, **weekend**.

**Wednesday** трудно писать: говорим «уэнздей», а пишем **Wed-nes-day**.

## on + день

*I have English **on** Monday and Thursday. We play football **on** Saturday.*

> **What day is it today?** — It's Friday.

### Упражнения

1. Какой день идёт после Tuesday?
2. Какой день перед Sunday?
3. Какие два дня — weekend?
4. Исправь: *on monday i have maths.*
5. Дополни: *We go to the park ___ Sunday.*
6. Назови по буквам **Wednesday**.
7. Напиши три предложения о своей неделе.

### Ответы

1. Wednesday. 2. Saturday. 3. Saturday и Sunday. 4. On Monday I have maths. 5. on. 6. W-E-D-N-E-S-D-A-Y. 7. Например: On Monday I have English. On Wednesday I swim. On Sunday I visit my granny.`,
      },
      [
        q(t("Which day comes after Wednesday?", "Ո՞ր օրն է գալիս Wednesday-ից հետո։", "Какой день идёт после Wednesday?"), [t("Tuesday", "Tuesday", "Tuesday"), t("Thursday", "Thursday", "Thursday"), t("Friday", "Friday", "Friday")], 1),
        q(t("The weekend is…", "Weekend-ը…", "Weekend — это…"), [t("Saturday and Sunday", "Saturday և Sunday", "Saturday и Sunday"), t("Monday and Friday", "Monday և Friday", "Monday и Friday"), t("Sunday and Monday", "Sunday և Monday", "Sunday и Monday")], 0),
        q(t("I have art ___ Friday.", "I have art ___ Friday.", "I have art ___ Friday."), [t("in", "in", "in"), t("at", "at", "at"), t("on", "on", "on")], 2),
        q(t("Which is spelled correctly?", "Ո՞րն է ճիշտ գրված։", "Что написано правильно?"), [t("Wensday", "Wensday", "Wensday"), t("Wednesday", "Wednesday", "Wednesday"), t("wednesday", "wednesday", "wednesday")], 1),
        q(t("The first school day of the week is…", "Շաբաթվա առաջին դպրոցական օրն է…", "Первый учебный день недели —"), [t("Monday", "Monday", "Monday"), t("Sunday", "Sunday", "Sunday"), t("Saturday", "Saturday", "Saturday")], 0),
        q(t("«What day is it today?» — ?", "«What day is it today?» — ?", "«What day is it today?» — ?"), [t("It's ten o'clock.", "It's ten o'clock.", "It's ten o'clock."), t("It's sunny.", "It's sunny.", "It's sunny."), t("It's Tuesday.", "It's Tuesday.", "It's Tuesday.")], 2),
      ],
    ),
    lesson(
      "months-birthdays",
      ["Months and birthdays", "Ամիսներ և ծննդյան օրեր", "Месяцы и дни рождения"],
      {
        en: ["Say and spell the twelve months", "Use «in» with months: in May", "Ask and answer «When is your birthday?» with ordinal numbers"],
        hy: ["Ասել և գրել տասներկու ամիսները", "Ամիսների հետ գործածել «in»՝ in May", "Հարցնել և պատասխանել «When is your birthday?»՝ դասական թվականներով"],
        ru: ["Называть и писать двенадцать месяцев", "Употреблять «in» с месяцами: in May", "Спрашивать и отвечать «When is your birthday?» с порядковыми числительными"],
      },
      {
        en: `## Twelve months

| Winter | Spring | Summer | Autumn |
|---|---|---|---|
| December | March | June | September |
| January | April | July | October |
| February | May | August | November |

Months start with a **capital letter**, like days.

## in + month

*My birthday is **in** May. School starts **in** September.*

## First, second, third…

For dates we use **ordinal numbers**:

| 1st | first | 4th | fourth |
|---|---|---|---|
| 2nd | second | 5th | fifth |
| 3rd | third | 10th | tenth |
| 12th | twelfth | 21st | twenty-first |

> **When is your birthday?** — It's **on** the **fifth of May**. (on 5th May)

Remember: **in** May, but **on** the fifth of May.

### Exercises

1. Which month comes after March?
2. Name the three summer months.
3. Complete: *My birthday is ___ July.*
4. Complete: *It's ___ the third of July.*
5. Write in words: 1st, 2nd, 3rd.
6. Which is the first month of the year? The last?
7. Ask three friends when their birthdays are and write the answers.

### Answers

1. April. 2. June, July, August. 3. in. 4. on. 5. first, second, third. 6. January; December. 7. Example: Ani's birthday is on the tenth of March.`,
        hy: `## Տասներկու ամիս

| Ձմեռ | Գարուն | Ամառ | Աշուն |
|---|---|---|---|
| December՝ դեկտեմբեր | March՝ մարտ | June՝ հունիս | September՝ սեպտեմբեր |
| January՝ հունվար | April՝ ապրիլ | July՝ հուլիս | October՝ հոկտեմբեր |
| February՝ փետրվար | May՝ մայիս | August՝ օգոստոս | November՝ նոյեմբեր |

Ամիսները, օրերի պես, գրվում են **մեծատառով**։

## in + ամիս

*My birthday is **in** May. School starts **in** September.*

## First, second, third…

Ամսաթվերի համար գործածում ենք **դասական թվականներ**՝

| 1st | first | 4th | fourth |
|---|---|---|---|
| 2nd | second | 5th | fifth |
| 3rd | third | 10th | tenth |
| 12th | twelfth | 21st | twenty-first |

> **When is your birthday?** — It's **on** the **fifth of May**.

Հիշի՛ր՝ **in** May, բայց **on** the fifth of May։

### Վարժություններ

1. Ո՞ր ամիսն է գալիս March-ից հետո։
2. Անվանի՛ր ամառվա երեք ամիսները։
3. Լրացրո՛ւ. *My birthday is ___ July.*
4. Լրացրո՛ւ. *It's ___ the third of July.*
5. Գրի՛ր բառերով. 1st, 2nd, 3rd։
6. Ո՞րն է տարվա առաջին ամիսը։ Իսկ վերջի՞նը։
7. Հարցրո՛ւ երեք ընկերոջ ծննդյան օրը և գրի՛ր պատասխանները։

### Պատասխաններ

1. April։ 2. June, July, August։ 3. in։ 4. on։ 5. first, second, third։ 6. January, December։ 7. Օրինակ՝ Ani's birthday is on the tenth of March.`,
        ru: `## Двенадцать месяцев

| Зима | Весна | Лето | Осень |
|---|---|---|---|
| December — декабрь | March — март | June — июнь | September — сентябрь |
| January — январь | April — апрель | July — июль | October — октябрь |
| February — февраль | May — май | August — август | November — ноябрь |

Месяцы, как и дни недели, пишутся с **заглавной буквы**.

## in + месяц

*My birthday is **in** May. School starts **in** September.*

## First, second, third…

Для дат нужны **порядковые числительные**:

| 1st | first | 4th | fourth |
|---|---|---|---|
| 2nd | second | 5th | fifth |
| 3rd | third | 10th | tenth |
| 12th | twelfth | 21st | twenty-first |

> **When is your birthday?** — It's **on** the **fifth of May**.

Запомни: **in** May, но **on** the fifth of May.

### Упражнения

1. Какой месяц идёт после March?
2. Назови три летних месяца.
3. Дополни: *My birthday is ___ July.*
4. Дополни: *It's ___ the third of July.*
5. Напиши словами: 1st, 2nd, 3rd.
6. Какой месяц первый в году? А последний?
7. Спроси трёх друзей, когда у них день рождения, и запиши ответы.

### Ответы

1. April. 2. June, July, August. 3. in. 4. on. 5. first, second, third. 6. January; December. 7. Например: Ani's birthday is on the tenth of March.`,
      },
      [
        q(t("The first month of the year is…", "Տարվա առաջին ամիսն է…", "Первый месяц года —"), [t("January", "January", "January"), t("June", "June", "June"), t("December", "December", "December")], 0),
        q(t("My birthday is ___ October.", "My birthday is ___ October.", "My birthday is ___ October."), [t("on", "on", "on"), t("in", "in", "in"), t("at", "at", "at")], 1),
        q(t("Which is a summer month?", "Ո՞րն է ամառային ամիս։", "Какой месяц летний?"), [t("March", "March", "March"), t("November", "November", "November"), t("July", "July", "July")], 2),
        q(t("«3rd» is…", "«3rd»-ը…", "«3rd» —"), [t("third", "third", "third"), t("three", "three", "three"), t("thirty", "thirty", "thirty")], 0),
        q(t("It's ___ the tenth of May.", "It's ___ the tenth of May.", "It's ___ the tenth of May."), [t("in", "in", "in"), t("at", "at", "at"), t("on", "on", "on")], 2),
        q(t("Which month comes after April?", "Ո՞ր ամիսն է գալիս April-ից հետո։", "Какой месяц идёт после April?"), [t("March", "March", "March"), t("May", "May", "May"), t("June", "June", "June")], 1),
      ],
    ),
    lesson(
      "what-time-is-it",
      ["What time is it? It's three o'clock", "What time is it? It's three o'clock", "What time is it? It's three o'clock"],
      {
        en: ["Tell the time with o'clock, half past, quarter past and quarter to", "Ask «What time is it?» and answer «It's…»", "Use «at» with times: at seven o'clock"],
        hy: ["Ասել ժամը՝ o'clock, half past, quarter past, quarter to", "Հարցնել «What time is it?» և պատասխանել «It's…»", "Ժամի հետ գործածել «at»՝ at seven o'clock"],
        ru: ["Называть время: o'clock, half past, quarter past, quarter to", "Спрашивать «What time is it?» и отвечать «It's…»", "Употреблять «at» со временем: at seven o'clock"],
      },
      {
        en: `## Full hours: o'clock

3:00 → **It's three o'clock.** 10:00 → **It's ten o'clock.**

## Half and quarters

| Clock | We say |
|---|---|
| 3:30 | It's **half past** three. |
| 3:15 | It's **quarter past** three. |
| 3:45 | It's **quarter to** four. |

**past** = after the hour, **to** = before the next hour. Note that 3:45 is quarter to **four**, not three.

## at + time

*I get up **at** seven o'clock. School starts **at** half past eight.*

> **What time is it?** — It's half past two.

### Exercises

Say the time.

1. 6:00
2. 9:30
3. 11:15
4. 7:45
5. Complete: *Lessons start ___ eight o'clock.*
6. What time do you go to bed? Answer in a sentence.
7. Draw clocks showing: quarter past five, half past twelve.

### Answers

1. It's six o'clock. 2. It's half past nine. 3. It's quarter past eleven. 4. It's quarter to eight. 5. at. 6. Example: I go to bed at nine o'clock. 7. 5:15 and 12:30.`,
        hy: `## Լրիվ ժամեր՝ o'clock

3:00 → **It's three o'clock.** (Ժամը երեքն է։) 10:00 → **It's ten o'clock.**

## Կես և քառորդ

| Ժամ | Ասում ենք | Հայերեն |
|---|---|---|
| 3:30 | It's **half past** three. | երեքն անց կես |
| 3:15 | It's **quarter past** three. | երեքն անց տասնհինգ |
| 3:45 | It's **quarter to** four. | չորսին տասնհինգ պակաս |

**past**՝ անց, **to**՝ մինչև հաջորդ ժամը։ 3:45-ը quarter to **four** է, ոչ թե three։

## at + ժամ

*I get up **at** seven o'clock. School starts **at** half past eight.*

> **What time is it?** — It's half past two.

### Վարժություններ

Ասա՛ ժամը։

1. 6:00
2. 9:30
3. 11:15
4. 7:45
5. Լրացրո՛ւ. *Lessons start ___ eight o'clock.*
6. Ժամը քանիսի՞ն ես քնում։ Պատասխանի՛ր նախադասությամբ։
7. Նկարի՛ր ժամացույցներ. quarter past five, half past twelve։

### Պատասխաններ

1. It's six o'clock. 2. It's half past nine. 3. It's quarter past eleven. 4. It's quarter to eight. 5. at։ 6. Օրինակ՝ I go to bed at nine o'clock. 7. 5:15 և 12:30։`,
        ru: `## Ровно: o'clock

3:00 → **It's three o'clock.** (Три часа.) 10:00 → **It's ten o'clock.**

## Половина и четверти

| Часы | Говорим | По-русски |
|---|---|---|
| 3:30 | It's **half past** three. | половина четвёртого |
| 3:15 | It's **quarter past** three. | четверть четвёртого |
| 3:45 | It's **quarter to** four. | без четверти четыре |

**past** — после часа, **to** — до следующего часа. Обрати внимание: по-русски «половина **четвёртого**», а по-английски *half past **three***.

## at + время

*I get up **at** seven o'clock. School starts **at** half past eight.*

> **What time is it?** — It's half past two.

### Упражнения

Скажи время.

1. 6:00
2. 9:30
3. 11:15
4. 7:45
5. Дополни: *Lessons start ___ eight o'clock.*
6. Во сколько ты ложишься спать? Ответь предложением.
7. Нарисуй часы: quarter past five, half past twelve.

### Ответы

1. It's six o'clock. 2. It's half past nine. 3. It's quarter past eleven. 4. It's quarter to eight. 5. at. 6. Например: I go to bed at nine o'clock. 7. 5:15 и 12:30.`,
      },
      [
        q(t("8:00 is…", "8:00-ն…", "8:00 —"), [t("It's eight o'clock.", "It's eight o'clock.", "It's eight o'clock."), t("It's half past eight.", "It's half past eight.", "It's half past eight."), t("It's eighteen.", "It's eighteen.", "It's eighteen.")], 0),
        q(t("4:30 is…", "4:30-ն…", "4:30 —"), [t("It's half past five.", "It's half past five.", "It's half past five."), t("It's half past four.", "It's half past four.", "It's half past four."), t("It's quarter past four.", "It's quarter past four.", "It's quarter past four.")], 1),
        q(t("6:45 is…", "6:45-ն…", "6:45 —"), [t("It's quarter to six.", "It's quarter to six.", "It's quarter to six."), t("It's quarter past six.", "It's quarter past six.", "It's quarter past six."), t("It's quarter to seven.", "It's quarter to seven.", "It's quarter to seven.")], 2),
        q(t("School starts ___ nine o'clock.", "School starts ___ nine o'clock.", "School starts ___ nine o'clock."), [t("at", "at", "at"), t("on", "on", "on"), t("in", "in", "in")], 0),
        q(t("«quarter past two» is…", "«quarter past two»-ն…", "«quarter past two» —"), [t("1:45", "1:45", "1:45"), t("2:15", "2:15", "2:15"), t("2:45", "2:45", "2:45")], 1),
        q(t("Which question asks for the time?", "Ո՞ր հարցն է ժամը հարցնում։", "Какой вопрос спрашивает время?"), [t("What day is it?", "What day is it?", "What day is it?"), t("How old are you?", "How old are you?", "How old are you?"), t("What time is it?", "What time is it?", "What time is it?")], 2),
      ],
    ),
    lesson(
      "seasons-weather",
      ["Seasons and weather", "Եղանակները և օդի եղանակը", "Времена года и погода"],
      {
        en: ["Name the four seasons and say which months belong to them", "Describe the weather: sunny, rainy, windy, snowy, cloudy, hot, cold", "Ask «What's the weather like?» and say what you wear"],
        hy: ["Անվանել տարվա չորս եղանակները և դրանց ամիսները", "Նկարագրել օդի եղանակը՝ sunny, rainy, windy, snowy, cloudy, hot, cold", "Հարցնել «What's the weather like?» և ասել, թե ինչ ես հագնում"],
        ru: ["Называть четыре времени года и их месяцы", "Описывать погоду: sunny, rainy, windy, snowy, cloudy, hot, cold", "Спрашивать «What's the weather like?» и говорить, что надеть"],
      },
      {
        en: `## Four seasons

| Season | Months | Typical weather in Armenia |
|---|---|---|
| winter | December, January, February | cold, snowy |
| spring | March, April, May | warm, rainy |
| summer | June, July, August | hot, sunny |
| autumn | September, October, November | cool, windy |

## Weather words

| Noun | Adjective | Example |
|---|---|---|
| sun | sunny | It's sunny. |
| rain | rainy | It's rainy. / It's raining. |
| wind | windy | It's windy. |
| snow | snowy | It's snowy. / It's snowing. |
| cloud | cloudy | It's cloudy. |

Also: **hot, warm, cool, cold**.

## Talking about the weather

> **What's the weather like today?** — It's cold and windy.
> **What do you wear?** — I wear a coat and a hat.

Clothes for the weather: *a coat, a hat, a scarf, boots* (cold); *a T-shirt, shorts, sunglasses* (hot); *an umbrella* (rainy).

### Exercises

1. Which season is June in?
2. What is the weather like in winter?
3. Make an adjective: *sun → ___, rain → ___, wind → ___*.
4. Answer: *What's the weather like today?*
5. It's raining. What do you take?
6. Which is your favourite season? Why? Write two sentences.
7. Odd one out: *coat, scarf, shorts, boots*.

### Answers

1. Summer. 2. Cold and snowy. 3. sunny, rainy, windy. 4. Example: It's sunny and warm. 5. An umbrella. 6. Example: My favourite season is summer. It's hot and I can swim. 7. shorts (for hot weather).`,
        hy: `## Չորս եղանակ

| Եղանակ | Ամիսներ | Սովորական եղանակը Հայաստանում |
|---|---|---|
| winter՝ ձմեռ | December, January, February | ցուրտ, ձյունոտ |
| spring՝ գարուն | March, April, May | տաք, անձրևոտ |
| summer՝ ամառ | June, July, August | շոգ, արևոտ |
| autumn՝ աշուն | September, October, November | զով, քամոտ |

## Եղանակի բառեր

| Գոյական | Ածական | Օրինակ |
|---|---|---|
| sun՝ արև | sunny՝ արևոտ | It's sunny. |
| rain՝ անձրև | rainy՝ անձրևոտ | It's rainy. / It's raining. |
| wind՝ քամի | windy՝ քամոտ | It's windy. |
| snow՝ ձյուն | snowy՝ ձյունոտ | It's snowy. / It's snowing. |
| cloud՝ ամպ | cloudy՝ ամպամած | It's cloudy. |

Նաև՝ **hot** (շոգ), **warm** (տաք), **cool** (զով), **cold** (ցուրտ)։

## Խոսում ենք եղանակի մասին

> **What's the weather like today?** — It's cold and windy.
> **What do you wear?** — I wear a coat and a hat.

Հագուստ՝ *a coat, a hat, a scarf, boots* (ցուրտ), *a T-shirt, shorts, sunglasses* (շոգ), *an umbrella* (անձրև)։

### Վարժություններ

1. Ո՞ր եղանակում է June-ը։
2. Ինչպիսի՞ն է եղանակը ձմռանը (անգլերեն)։
3. Կազմի՛ր ածական. *sun → ___, rain → ___, wind → ___*։
4. Պատասխանի՛ր. *What's the weather like today?*
5. Անձրև է գալիս։ Ի՞նչ ես վերցնում (անգլերեն)։
6. Ո՞րն է քո սիրելի եղանակը։ Ինչո՞ւ։ Գրի՛ր երկու նախադասություն։
7. Ավելորդը. *coat, scarf, shorts, boots*։

### Պատասխաններ

1. Summer։ 2. Cold and snowy. 3. sunny, rainy, windy։ 4. Օրինակ՝ It's sunny and warm. 5. An umbrella. 6. Օրինակ՝ My favourite season is summer. It's hot and I can swim. 7. shorts (շոգ եղանակի համար է)։`,
        ru: `## Четыре времени года

| Время года | Месяцы | Обычная погода |
|---|---|---|
| winter — зима | December, January, February | холодно, снежно |
| spring — весна | March, April, May | тепло, дождливо |
| summer — лето | June, July, August | жарко, солнечно |
| autumn — осень | September, October, November | прохладно, ветрено |

## Слова о погоде

| Существительное | Прилагательное | Пример |
|---|---|---|
| sun — солнце | sunny — солнечно | It's sunny. |
| rain — дождь | rainy — дождливо | It's rainy. / It's raining. |
| wind — ветер | windy — ветрено | It's windy. |
| snow — снег | snowy — снежно | It's snowy. / It's snowing. |
| cloud — облако | cloudy — облачно | It's cloudy. |

А ещё: **hot** (жарко), **warm** (тепло), **cool** (прохладно), **cold** (холодно).

## Говорим о погоде

> **What's the weather like today?** — It's cold and windy.
> **What do you wear?** — I wear a coat and a hat.

Одежда: *a coat, a hat, a scarf, boots* (холодно); *a T-shirt, shorts, sunglasses* (жарко); *an umbrella* (дождь).

### Упражнения

1. К какому времени года относится June?
2. Какая погода зимой (по-английски)?
3. Образуй прилагательное: *sun → ___, rain → ___, wind → ___*.
4. Ответь: *What's the weather like today?*
5. Идёт дождь. Что ты возьмёшь (по-английски)?
6. Какое твоё любимое время года? Почему? Напиши два предложения.
7. Лишнее: *coat, scarf, shorts, boots*.

### Ответы

1. Summer. 2. Cold and snowy. 3. sunny, rainy, windy. 4. Например: It's sunny and warm. 5. An umbrella. 6. Например: My favourite season is summer. It's hot and I can swim. 7. shorts (для жары).`,
      },
      [
        q(t("Which months are in spring?", "Ո՞ր ամիսներն են գարնանը։", "Какие месяцы весной?"), [t("March, April, May", "March, April, May", "March, April, May"), t("June, July, August", "June, July, August", "June, July, August"), t("December, January, February", "December, January, February", "December, January, February")], 0),
        q(t("sun → ?", "sun → ?", "sun → ?"), [t("suny", "suny", "suny"), t("sunny", "sunny", "sunny"), t("sunly", "sunly", "sunly")], 1),
        q(t("«What's the weather like?» — ?", "«What's the weather like?» — ?", "«What's the weather like?» — ?"), [t("I like summer.", "I like summer.", "I like summer."), t("It's Monday.", "It's Monday.", "It's Monday."), t("It's windy.", "It's windy.", "It's windy.")], 2),
        q(t("It's raining. Take…", "Անձրև է գալիս։ Վերցրո՛ւ…", "Идёт дождь. Возьми…"), [t("an umbrella", "an umbrella", "an umbrella"), t("sunglasses", "sunglasses", "sunglasses"), t("shorts", "shorts", "shorts")], 0),
        q(t("The opposite of «hot» is…", "«hot»-ի հակառակը…", "Противоположность «hot» —"), [t("sunny", "sunny", "sunny"), t("cold", "cold", "cold"), t("windy", "windy", "windy")], 1),
        q(t("September is in…", "September-ը…", "September — это…"), [t("summer", "summer", "summer"), t("winter", "winter", "winter"), t("autumn", "autumn", "autumn")], 2),
      ],
    ),
  ],
};
