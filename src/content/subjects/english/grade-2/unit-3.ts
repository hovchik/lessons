import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("My family, my toys, my home", "Իմ ընտանիքը, խաղալիքները և տունը", "Моя семья, игрушки и дом"),
  summary: t(
    "Family words with «This is my…», «I have got…», toys, pets, big and small, my house.",
    "Ընտանիքի անդամներ «This is my…» կառույցով, «I have got…», խաղալիքներ, ընտանի կենդանիներ, մեծ և փոքր, իմ տունը։",
    "Семья и «This is my…», «I have got…», игрушки, питомцы, большой и маленький, мой дом.",
  ),
  lessons: [
    lesson(
      "my-family",
      ["This is my family", "Սա իմ ընտանիքն է", "Это моя семья"],
      {
        en: ["Name family members in English", "Introduce them with «This is my…»", "Show a family photo and talk about it"],
        hy: ["Անգլերեն անվանել ընտանիքի անդամներին", "Ներկայացնել նրանց «This is my…» կառույցով", "Ցույց տալ ընտանեկան լուսանկար և պատմել"],
        ru: ["Называть членов семьи по-английски", "Представлять их: «This is my…»", "Рассказывать о семье по фотографии"],
      },
      {
        en: `## My family

| Word | Who |
|---|---|
| mum | mother |
| dad | father |
| brother | a boy in the family |
| sister | a girl in the family |
| grandma | mum's or dad's mother |
| grandpa | mum's or dad's father |
| baby | a very small child |

## This is my…

> This is my mum. Her name is Anna.\\
> This is my dad. His name is Armen.\\
> This is my sister. She is five.\\
> And this is me!

## Song: The finger family

Hold up one finger at a time: «Daddy finger, daddy finger, where are you? Here I am, here I am, how do you do?» — then mummy, brother, sister and baby finger.

### Exercises

1. Translate: mother, father, sister, brother.
2. Who is grandma?
3. Finish: «This is my ___. His name is Tom.»
4. Finish: «This is my ___. Her name is Lilit.»
5. What do you say about yourself in the photo?
6. Which finger is the baby in the finger family?
7. Bring a family photo and say three sentences with «This is my…».

### Answers

1. mum, dad, sister, brother. 2. Mum's or dad's mother. 3. For example, brother or dad. 4. For example, sister or mum. 5. And this is me! 6. The little finger. 7. For example, «This is my mum. This is my dad. This is my brother.»`,
        hy: `## Իմ ընտանիքը

| Բառ | Արտասանություն | Թարգմանություն |
|---|---|---|
| mum | [մամ] | մայրիկ |
| dad | [դեդ] | հայրիկ |
| brother | [բրադըր] | եղբայր |
| sister | [սիսթըր] | քույր |
| grandma | [գրենմա] | տատիկ |
| grandpa | [գրենփա] | պապիկ |
| baby | [բեյբի] | փոքրիկ, մանկիկ |

## This is my…

> This is my mum. Her name is Anna. (*Սա իմ մայրիկն է։ Նրա անունը Աննա է։*)\\
> This is my dad. His name is Armen. (*Սա իմ հայրիկն է։ Նրա անունը Արմեն է։*)\\
> This is my sister. She is five. (*Սա իմ քույրն է։ Նա հինգ տարեկան է։*)\\
> And this is me! (*Իսկ սա ես եմ։*)

Հիշի՛ր՝ տղամարդու մասին **his/he**, կնոջ մասին՝ **her/she**։

## Երգ՝ մատների ընտանիքը

Բարձրացրո՛ւ մեկ մատ՝ «Daddy finger, daddy finger, where are you? Here I am, here I am, how do you do?» (*Հայրիկ-մատ, որտե՞ղ ես։ Այստեղ եմ, բարև Ձեզ։*)։ Հետո՝ մայրիկ, եղբայր, քույր և փոքրիկ մատ։

### Վարժություններ

1. Թարգմանի՛ր՝ մայրիկ, հայրիկ, քույր, եղբայր։
2. Ո՞վ է grandma-ն։
3. Ավարտի՛ր՝ «This is my ___. His name is Tom.»։
4. Ավարտի՛ր՝ «This is my ___. Her name is Lilit.»։
5. Ի՞նչ ես ասում քո մասին լուսանկարում։
6. Մատների ընտանիքում ո՞ր մատն է փոքրիկը (baby)։
7. Բե՛ր ընտանեկան լուսանկար և «This is my…»-ով ասա՛ երեք նախադասություն։

### Պատասխաններ

1. mum, dad, sister, brother։ 2. Տատիկը։ 3. Օրինակ՝ brother կամ dad։ 4. Օրինակ՝ sister կամ mum։ 5. And this is me!։ 6. Ճկույթը։ 7. Օրինակ՝ «This is my mum. This is my dad. This is my brother.»։`,
        ru: `## Моя семья

| Слово | Произношение | Перевод |
|---|---|---|
| mum | [мам] | мама |
| dad | [дэд] | папа |
| brother | [бразэ] | брат |
| sister | [систэ] | сестра |
| grandma | [грэнма] | бабушка |
| grandpa | [грэнпа] | дедушка |
| baby | [бэйби] | малыш |

## This is my…

> This is my mum. Her name is Anna. (*Это моя мама. Её зовут Анна.*)\\
> This is my dad. His name is Armen. (*Это мой папа. Его зовут Армен.*)\\
> This is my sister. She is five. (*Это моя сестра. Ей пять.*)\\
> And this is me! (*А это я!*)

По-английски **my** одно для всех: my mum, my dad (в русском — моя, мой).

## Песенка «Семья пальчиков»

Поднимай по одному пальчику: «Daddy finger, daddy finger, where are you? Here I am, here I am, how do you do?» (*Пальчик-папа, где ты? Вот я, здравствуйте!*) — потом мама, брат, сестра и малыш.

### Упражнения

1. Переведи: мама, папа, сестра, брат.
2. Кто такая grandma?
3. Закончи: «This is my ___. His name is Tom.»
4. Закончи: «This is my ___. Her name is Lilit.»
5. Что ты скажешь о себе на фото?
6. Какой пальчик — малыш в «семье пальчиков»?
7. Принеси семейное фото и скажи три предложения с «This is my…».

### Ответы

1. mum, dad, sister, brother. 2. Бабушка. 3. Например, brother или dad. 4. Например, sister или mum. 5. And this is me! 6. Мизинец. 7. Например, «This is my mum. This is my dad. This is my brother.»`,
      },
      [
        q(t("«sister» means…", "«sister» նշանակում է…", "«sister» значит…"), [t("brother", "եղբայր", "брат"), t("sister", "քույր", "сестра"), t("mum", "մայրիկ", "мама")], 1),
        q(t("Dad's father is…", "Հայրիկի հայրը…", "Папин папа —…"), [t("grandpa", "grandpa է", "grandpa"), t("brother", "brother է", "brother"), t("baby", "baby է", "baby")], 0),
        q(t("«This is my dad. ___ name is Armen.»", "«This is my dad. ___ name is Armen.»", "«This is my dad. ___ name is Armen.»"), [t("Her", "Her", "Her"), t("My", "My", "My"), t("His", "His", "His")], 2),
        q(t("«This is my mum. ___ name is Anna.»", "«This is my mum. ___ name is Anna.»", "«This is my mum. ___ name is Anna.»"), [t("His", "His", "His"), t("Her", "Her", "Her"), t("Your", "Your", "Your")], 1),
        q(t("A very small child is a…", "Շատ փոքր երեխան…", "Очень маленький ребёнок —…"), [t("baby", "baby է", "baby"), t("grandma", "grandma է", "grandma"), t("dad", "dad է", "dad")], 0),
        q(t("About yourself in a photo you say…", "Լուսանկարում քո մասին ասում ես…", "О себе на фото говорят…"), [t("This is my me.", "This is my me.", "This is my me."), t("This is you.", "This is you.", "This is you."), t("This is me.", "This is me.", "This is me.")], 2),
      ],
    ),
    lesson(
      "i-have-got",
      ["I have got a ball", "I have got a ball", "У меня есть мяч: I have got"],
      {
        en: ["Say what you have with «I have got…»", "Say what you do not have with «I haven't got…»", "Ask «Have you got…?» and answer «Yes, I have» or «No, I haven't»"],
        hy: ["Ասել, թե ինչ ունես՝ «I have got…»", "Ասել, թե ինչ չունես՝ «I haven't got…»", "Հարցնել «Have you got…?» և պատասխանել «Yes, I have» կամ «No, I haven't»"],
        ru: ["Говорить, что у тебя есть: «I have got…»", "Говорить, чего нет: «I haven't got…»", "Спрашивать «Have you got…?» и отвечать «Yes, I have» / «No, I haven't»"],
      },
      {
        en: `## I have got…

> I **have got** a ball. ⚽\\
> I **have got** a brother.\\
> I **have got** two cats. 🐱🐱

Short form: **I've got** a ball.

## I haven't got…

> I **haven't got** a dog.\\
> I **haven't got** a sister.

## Have you got…?

| Question | Yes | No |
|---|---|---|
| Have you got a bike? | Yes, I have. | No, I haven't. |
| Have you got a pet? | Yes, I have. | No, I haven't. |

## Game: Find someone who…

Walk around the class and ask: «Have you got a cat?» Find a friend who says «Yes, I have!» and write the name.

### Exercises

1. Say that you have got a ball.
2. Say that you haven't got a dog.
3. Write the short form: «I have got».
4. Ask a friend about a bike.
5. Answer «Yes»: «Have you got a pencil?»
6. Answer «No»: «Have you got a horse?»
7. Say three things you have got.

### Answers

1. I have got a ball. 2. I haven't got a dog. 3. I've got. 4. Have you got a bike? 5. Yes, I have. 6. No, I haven't. 7. For example, I've got a doll, a book and a sister.`,
        hy: `## I have got…

> I **have got** a ball. (*Ես գնդակ ունեմ։*) ⚽\\
> I **have got** a brother. (*Ես եղբայր ունեմ։*)\\
> I **have got** two cats. (*Ես երկու կատու ունեմ։*) 🐱🐱

Կարճ ձևը՝ **I've got** a ball [այվ գոթ]։

## I haven't got…

> I **haven't got** a dog. (*Ես շուն չունեմ։*)\\
> I **haven't got** a sister. (*Ես քույր չունեմ։*)

## Have you got…?

| Հարց | Այո | Ոչ |
|---|---|---|
| Have you got a bike? (*Հեծանիվ ունե՞ս*) | Yes, I have. | No, I haven't. |
| Have you got a pet? (*Ընտանի կենդանի ունե՞ս*) | Yes, I have. | No, I haven't. |

## Խաղ՝ գտի՛ր նրան, ով…

Շրջի՛ր դասարանում և հարցրո՛ւ՝ «Have you got a cat?»։ Գտի՛ր ընկեր, որը կասի «Yes, I have!», և գրի՛ր նրա անունը։

### Վարժություններ

1. Ասա՛, որ գնդակ ունես։
2. Ասա՛, որ շուն չունես։
3. Գրի՛ր կարճ ձևը՝ «I have got»։
4. Ընկերոջդ հարցրո՛ւ հեծանիվի (bike) մասին։
5. Պատասխանի՛ր «այո»՝ «Have you got a pencil?»։
6. Պատասխանի՛ր «ոչ»՝ «Have you got a horse?»։
7. Ասա՛ երեք բան, որ ունես։

### Պատասխաններ

1. I have got a ball.։ 2. I haven't got a dog.։ 3. I've got։ 4. Have you got a bike?։ 5. Yes, I have.։ 6. No, I haven't.։ 7. Օրինակ՝ I've got a doll, a book and a sister.։`,
        ru: `## I have got…

> I **have got** a ball. (*У меня есть мяч.*) ⚽\\
> I **have got** a brother. (*У меня есть брат.*)\\
> I **have got** two cats. (*У меня две кошки.*) 🐱🐱

Краткая форма: **I've got** a ball [айв гот]. По-английски говорят «я имею», а не «у меня есть».

## I haven't got…

> I **haven't got** a dog. (*У меня нет собаки.*)\\
> I **haven't got** a sister. (*У меня нет сестры.*)

## Have you got…?

| Вопрос | Да | Нет |
|---|---|---|
| Have you got a bike? (*У тебя есть велосипед?*) | Yes, I have. | No, I haven't. |
| Have you got a pet? (*У тебя есть питомец?*) | Yes, I have. | No, I haven't. |

## Игра «Найди того, у кого…»

Ходи по классу и спрашивай: «Have you got a cat?» Найди друга, который ответит «Yes, I have!», и запиши его имя.

### Упражнения

1. Скажи, что у тебя есть мяч.
2. Скажи, что у тебя нет собаки.
3. Запиши краткую форму «I have got».
4. Спроси друга о велосипеде (bike).
5. Ответь «да»: «Have you got a pencil?»
6. Ответь «нет»: «Have you got a horse?»
7. Назови три вещи, которые у тебя есть.

### Ответы

1. I have got a ball. 2. I haven't got a dog. 3. I've got. 4. Have you got a bike? 5. Yes, I have. 6. No, I haven't. 7. Например, I've got a doll, a book and a sister.`,
      },
      [
        q(t("«I have got a ball» means…", "«I have got a ball» նշանակում է…", "«I have got a ball» значит…"), [t("I like a ball", "Ես սիրում եմ գնդակ", "Я люблю мяч"), t("I have a ball", "Ես գնդակ ունեմ", "У меня есть мяч"), t("Where is my ball?", "Որտե՞ղ է գնդակս", "Где мой мяч?")], 1),
        q(t("Short form of «I have got»:", "«I have got»-ի կարճ ձևը՝", "Краткая форма «I have got»:"), [t("I've got", "I've got", "I've got"), t("I'm got", "I'm got", "I'm got"), t("I got have", "I got have", "I got have")], 0),
        q(t("«No» answer to «Have you got a dog?»", "«Ոչ» պատասխան «Have you got a dog?»-ին", "Ответ «нет» на «Have you got a dog?»"), [t("No, I have.", "No, I have.", "No, I have."), t("No, I'm not.", "No, I'm not.", "No, I'm not."), t("No, I haven't.", "No, I haven't.", "No, I haven't.")], 2),
        q(t("«I haven't got a sister» means…", "«I haven't got a sister» նշանակում է…", "«I haven't got a sister» значит…"), [t("I haven't got a sister", "Ես քույր չունեմ", "У меня нет сестры"), t("I have a sister", "Ես քույր ունեմ", "У меня есть сестра"), t("My sister is small", "Քույրս փոքր է", "Моя сестра маленькая")], 0),
        q(t("How do you ask about a bike?", "Ինչպե՞ս հարցնել հեծանիվի մասին։", "Как спросить о велосипеде?"), [t("You have got a bike?", "You have got a bike?", "You have got a bike?"), t("Have you got a bike?", "Have you got a bike?", "Have you got a bike?"), t("Got you have a bike?", "Got you have a bike?", "Got you have a bike?")], 1),
        q(t("«Yes» answer to «Have you got a pencil?»", "«Այո» պատասխան «Have you got a pencil?»-ին", "Ответ «да» на «Have you got a pencil?»"), [t("Yes, I am.", "Yes, I am.", "Yes, I am."), t("Yes, I got.", "Yes, I got.", "Yes, I got."), t("Yes, I have.", "Yes, I have.", "Yes, I have.")], 2),
      ],
    ),
    lesson(
      "toys",
      ["Toys: a doll, a car, a teddy bear", "Խաղալիքներ․ doll, car, teddy bear", "Игрушки: doll, car, teddy bear"],
      {
        en: ["Name ten toys in English", "Use «a» before a toy and «It's a…»", "Describe a toy with a colour: It's a red car"],
        hy: ["Անգլերեն անվանել տասը խաղալիք", "Խաղալիքից առաջ դնել «a» և ասել «It's a…»", "Նկարագրել խաղալիքը գույնով՝ It's a red car"],
        ru: ["Называть десять игрушек по-английски", "Ставить «a» перед игрушкой и говорить «It's a…»", "Описывать игрушку с цветом: It's a red car"],
      },
      {
        en: `## My toys

| Toy | | Toy | |
|---|---|---|---|
| a doll | 🪆 | a car | 🚗 |
| a teddy bear | 🧸 | a ball | ⚽ |
| a robot | 🤖 | a plane | ✈️ |
| a train | 🚂 | a kite | 🪁 |
| a drum | 🥁 | a puzzle | 🧩 |

## What is it?

> **A:** What is it?\\
> **B:** It's a teddy bear.\\
> **A:** What colour is it?\\
> **B:** It's brown.

Put **a** before one toy: **a** doll, **a** car. Before a vowel sound we say **an**: **an** aeroplane.

## My favourite toy

> My favourite toy is a robot. It's grey and big. I love my robot!

### Exercises

1. Translate: doll, ball, train.
2. Answer: (🚗) «What is it?»
3. Say the colour and the toy: a yellow ball.
4. Which word goes before «aeroplane»: a or an?
5. Ask a friend «What is it?» about a toy.
6. Finish: «My favourite toy is …»
7. Draw your favourite toy and say two sentences about it.

### Answers

1. doll, ball, train. 2. It's a car. 3. It's a yellow ball. 4. an. 5. What is it? 6. For example, a teddy bear. 7. For example, «It's a doll. It's pink.»`,
        hy: `## Իմ խաղալիքները

| Խաղալիք | Թարգմանություն | Խաղալիք | Թարգմանություն |
|---|---|---|---|
| a doll 🪆 | տիկնիկ | a car 🚗 | մեքենա |
| a teddy bear 🧸 | արջուկ | a ball ⚽ | գնդակ |
| a robot 🤖 | ռոբոտ | a plane ✈️ | ինքնաթիռ |
| a train 🚂 | գնացք | a kite 🪁 | օդապարիկ |
| a drum 🥁 | թմբուկ | a puzzle 🧩 | փազլ |

## Ի՞նչ է սա

> **A:** What is it? (*Ի՞նչ է սա։*)\\
> **B:** It's a teddy bear. (*Արջուկ է։*)\\
> **A:** What colour is it? (*Ի՞նչ գույնի է։*)\\
> **B:** It's brown. (*Շագանակագույն է։*)

Մեկ խաղալիքից առաջ դրվում է **a**՝ **a** doll, **a** car (հայերենում՝ «մի տիկնիկ»)։ Ձայնավոր հնչյունից առաջ՝ **an**. **an** aeroplane։

## Իմ սիրելի խաղալիքը

> My favourite toy is a robot. It's grey and big. I love my robot!

(*Իմ սիրելի խաղալիքը ռոբոտն է։ Այն մոխրագույն է և մեծ։ Ես սիրում եմ իմ ռոբոտին։*)

### Վարժություններ

1. Թարգմանի՛ր՝ տիկնիկ, գնդակ, գնացք։
2. Պատասխանի՛ր՝ (🚗) «What is it?»։
3. Ասա՛ գույնը և խաղալիքը՝ դեղին գնդակ։
4. Ո՞ր բառն է դրվում «aeroplane»-ից առաջ՝ a, թե՞ an։
5. Ընկերոջդ հարցրո՛ւ «What is it?» խաղալիքի մասին։
6. Ավարտի՛ր՝ «My favourite toy is …»։
7. Նկարի՛ր քո սիրելի խաղալիքը և ասա՛ երկու նախադասություն։

### Պատասխաններ

1. doll, ball, train։ 2. It's a car.։ 3. It's a yellow ball.։ 4. an։ 5. What is it?։ 6. Օրինակ՝ a teddy bear։ 7. Օրինակ՝ «It's a doll. It's pink.»։`,
        ru: `## Мои игрушки

| Игрушка | Перевод | Игрушка | Перевод |
|---|---|---|---|
| a doll 🪆 | кукла | a car 🚗 | машинка |
| a teddy bear 🧸 | мишка | a ball ⚽ | мяч |
| a robot 🤖 | робот | a plane ✈️ | самолёт |
| a train 🚂 | поезд | a kite 🪁 | воздушный змей |
| a drum 🥁 | барабан | a puzzle 🧩 | пазл |

## Что это?

> **A:** What is it? (*Что это?*)\\
> **B:** It's a teddy bear. (*Это мишка.*)\\
> **A:** What colour is it? (*Какого он цвета?*)\\
> **B:** It's brown. (*Коричневый.*)

Перед одним предметом ставим **a**: **a** doll, **a** car. Перед гласным звуком — **an**: **an** aeroplane. В русском такого слова нет.

## Моя любимая игрушка

> My favourite toy is a robot. It's grey and big. I love my robot!

(*Моя любимая игрушка — робот. Он серый и большой. Я люблю своего робота!*)

### Упражнения

1. Переведи: кукла, мяч, поезд.
2. Ответь: (🚗) «What is it?»
3. Скажи цвет и игрушку: жёлтый мяч.
4. Что ставим перед «aeroplane»: a или an?
5. Спроси друга «What is it?» об игрушке.
6. Закончи: «My favourite toy is …»
7. Нарисуй любимую игрушку и скажи о ней два предложения.

### Ответы

1. doll, ball, train. 2. It's a car. 3. It's a yellow ball. 4. an. 5. What is it? 6. Например, a teddy bear. 7. Например, «It's a doll. It's pink.»`,
      },
      [
        q(t("«doll» means…", "«doll» նշանակում է…", "«doll» значит…"), [t("ball", "գնդակ", "мяч"), t("doll", "տիկնիկ", "кукла"), t("drum", "թմբուկ", "барабан")], 1),
        q(t("(🚂) What is it?", "(🚂) What is it?", "(🚂) What is it?"), [t("It's a train.", "It's a train.", "It's a train."), t("It's a car.", "It's a car.", "It's a car."), t("It's a kite.", "It's a kite.", "It's a kite.")], 0),
        q(t("Which is correct?", "Ո՞րն է ճիշտ։", "Как правильно?"), [t("a aeroplane", "a aeroplane", "a aeroplane"), t("aeroplane a", "aeroplane a", "aeroplane a"), t("an aeroplane", "an aeroplane", "an aeroplane")], 2),
        q(t("«teddy bear» is a…", "«teddy bear»-ը…", "«teddy bear» — это…"), [t("toy bear", "խաղալիք արջուկ է", "плюшевый мишка"), t("real bear", "իսկական արջ է", "настоящий медведь"), t("bed", "մահճակալ է", "кровать")], 0),
        q(t("«It's a red car» means…", "«It's a red car» նշանակում է…", "«It's a red car» значит…"), [t("It's a red ball", "Կարմիր գնդակ է", "Это красный мяч"), t("The car is fast", "Մեքենան արագ է", "Машина быстрая"), t("It's a red car", "Կարմիր մեքենա է", "Это красная машинка")], 2),
        q(t("«My favourite toy» means…", "«My favourite toy» նշանակում է…", "«My favourite toy» значит…"), [t("my new toy", "իմ նոր խաղալիքը", "моя новая игрушка"), t("my favourite toy", "իմ սիրելի խաղալիքը", "моя любимая игрушка"), t("my broken toy", "իմ կոտրված խաղալիքը", "моя сломанная игрушка")], 1),
      ],
    ),
    lesson(
      "pets",
      ["Pets: a cat, a dog, a fish", "Ընտանի կենդանիներ․ cat, dog, fish", "Питомцы: cat, dog, fish"],
      {
        en: ["Name eight pets in English", "Say what a pet can do and what sound it makes", "Talk about your pet or the pet you want"],
        hy: ["Անգլերեն անվանել ութ ընտանի կենդանի", "Ասել, թե ինչ կարող է անել կենդանին և ինչ ձայն է հանում", "Պատմել քո ընտանի կենդանու մասին կամ այն մասին, որը կուզենայիր"],
        ru: ["Называть восемь питомцев по-английски", "Говорить, что умеет питомец и как он «говорит»", "Рассказывать о своём питомце или о том, какого хочешь"],
      },
      {
        en: `## Pets

| Pet | Sound in English |
|---|---|
| a cat 🐱 | meow |
| a dog 🐶 | woof |
| a fish 🐟 | — |
| a bird 🐦 | tweet |
| a rabbit 🐰 | — |
| a hamster 🐹 | squeak |
| a parrot 🦜 | «Hello!» |
| a tortoise 🐢 | — |

Animals «speak» differently in different languages: an English dog says «woof», an Armenian dog says «հաֆ», a Russian dog says «гав».

## What can it do?

| Pet | Can… |
|---|---|
| A fish | swim |
| A bird | fly |
| A rabbit | jump |
| A parrot | talk |

## My pet

> I've got a dog. His name is Rex. He's black and white. He can run and jump!

If you have no pet: «I haven't got a pet. I want a rabbit!»

### Exercises

1. Translate: cat, dog, bird.
2. What does an English cat say?
3. What can a fish do?
4. Which pet can talk?
5. Finish: «A bird can …»
6. Say: I want a hamster.
7. Tell about your pet or the pet you want in three sentences.

### Answers

1. cat, dog, bird. 2. Meow. 3. Swim. 4. A parrot. 5. fly. 6. I want a hamster. 7. For example, «I've got a cat. Her name is Murka. She is grey.»`,
        hy: `## Ընտանի կենդանիներ

| Կենդանի | Թարգմանություն | Ձայնը անգլերեն |
|---|---|---|
| a cat 🐱 | կատու | meow [միաու] |
| a dog 🐶 | շուն | woof [վուֆ] |
| a fish 🐟 | ձուկ | — |
| a bird 🐦 | թռչուն | tweet [թվիթ] |
| a rabbit 🐰 | ճագար | — |
| a hamster 🐹 | համստեր | squeak [սքվիք] |
| a parrot 🦜 | թութակ | «Hello!» |
| a tortoise 🐢 | կրիա | — |

Կենդանիները տարբեր լեզուներում տարբեր կերպ են «խոսում»՝ անգլիական շունն ասում է «woof», հայկականը՝ «հաֆ», ռուսականը՝ «гав»։

## Ի՞նչ կարող է անել

| Կենդանի | Կարող է… |
|---|---|
| A fish | swim (*լողալ*) |
| A bird | fly (*թռչել*) |
| A rabbit | jump (*ցատկել*) |
| A parrot | talk (*խոսել*) |

## Իմ կենդանին

> I've got a dog. His name is Rex. He's black and white. He can run and jump!

(*Ես շուն ունեմ։ Նրա անունը Ռեքս է։ Նա սև ու սպիտակ է։ Նա կարող է վազել և ցատկել։*)

Եթե կենդանի չունես՝ «I haven't got a pet. I want a rabbit!» (*Կենդանի չունեմ։ Ճագար եմ ուզում։*)

### Վարժություններ

1. Թարգմանի՛ր՝ կատու, շուն, թռչուն։
2. Ի՞նչ է ասում անգլիական կատուն։
3. Ի՞նչ կարող է անել ձուկը։
4. Ո՞ր կենդանին կարող է խոսել։
5. Ավարտի՛ր՝ «A bird can …»։
6. Ասա՛՝ Ես համստեր եմ ուզում։
7. Երեք նախադասությամբ պատմի՛ր քո կենդանու կամ այն կենդանու մասին, որը կուզենայիր։

### Պատասխաններ

1. cat, dog, bird։ 2. Meow։ 3. Լողալ (swim)։ 4. Թութակը (a parrot)։ 5. fly։ 6. I want a hamster.։ 7. Օրինակ՝ «I've got a cat. Her name is Murka. She is grey.»։`,
        ru: `## Питомцы

| Питомец | Перевод | Как «говорит» по-английски |
|---|---|---|
| a cat 🐱 | кошка | meow [миау] |
| a dog 🐶 | собака | woof [вуф] |
| a fish 🐟 | рыбка | — |
| a bird 🐦 | птица | tweet [твит] |
| a rabbit 🐰 | кролик | — |
| a hamster 🐹 | хомяк | squeak [сквик] |
| a parrot 🦜 | попугай | «Hello!» |
| a tortoise 🐢 | черепаха | — |

Животные «говорят» по-разному на разных языках: английская собака говорит «woof», армянская — «հաֆ», русская — «гав».

## Что он умеет?

| Питомец | Умеет… |
|---|---|
| A fish | swim (*плавать*) |
| A bird | fly (*летать*) |
| A rabbit | jump (*прыгать*) |
| A parrot | talk (*говорить*) |

## Мой питомец

> I've got a dog. His name is Rex. He's black and white. He can run and jump!

(*У меня есть собака. Его зовут Рекс. Он чёрно-белый. Он умеет бегать и прыгать!*)

Если питомца нет: «I haven't got a pet. I want a rabbit!» (*У меня нет питомца. Я хочу кролика!*)

### Упражнения

1. Переведи: кошка, собака, птица.
2. Что говорит английская кошка?
3. Что умеет рыбка?
4. Какой питомец умеет говорить?
5. Закончи: «A bird can …»
6. Скажи: Я хочу хомяка.
7. Расскажи о своём питомце (или о том, какого хочешь) в трёх предложениях.

### Ответы

1. cat, dog, bird. 2. Meow. 3. Плавать (swim). 4. Попугай (a parrot). 5. fly. 6. I want a hamster. 7. Например, «I've got a cat. Her name is Murka. She is grey.»`,
      },
      [
        q(t("«rabbit» means…", "«rabbit» նշանակում է…", "«rabbit» значит…"), [t("hamster", "համստեր", "хомяк"), t("tortoise", "կրիա", "черепаха"), t("rabbit", "ճագար", "кролик")], 2),
        q(t("An English dog says…", "Անգլիական շունն ասում է…", "Английская собака говорит…"), [t("woof", "woof", "woof"), t("meow", "meow", "meow"), t("tweet", "tweet", "tweet")], 0),
        q(t("A fish can…", "Ձուկը կարող է…", "Рыбка умеет…"), [t("fly", "fly", "fly"), t("swim", "swim", "swim"), t("talk", "talk", "talk")], 1),
        q(t("Which pet can talk?", "Ո՞ր կենդանին կարող է խոսել։", "Какой питомец умеет говорить?"), [t("a fish", "a fish", "a fish"), t("a tortoise", "a tortoise", "a tortoise"), t("a parrot", "a parrot", "a parrot")], 2),
        q(t("«I haven't got a pet» means…", "«I haven't got a pet» նշանակում է…", "«I haven't got a pet» значит…"), [t("I haven't got a pet", "Ես կենդանի չունեմ", "У меня нет питомца"), t("I want a pet", "Ես կենդանի եմ ուզում", "Я хочу питомца"), t("I have a pet", "Ես կենդանի ունեմ", "У меня есть питомец")], 0),
        q(t("«tortoise» is a…", "«tortoise»-ը…", "«tortoise» — это…"), [t("bird", "թռչուն է", "птица"), t("tortoise", "կրիա է", "черепаха"), t("fish", "ձուկ է", "рыба")], 1),
      ],
    ),
    lesson(
      "big-and-small",
      ["Big and small: describing words", "Big and small․ նկարագրող բառեր", "Big and small: слова-признаки"],
      {
        en: ["Use opposite pairs: big — small, long — short, happy — sad", "Describe an animal or a toy with «It's…»", "Put two describing words together: a big brown bear"],
        hy: ["Գործածել հականիշ զույգեր՝ big — small, long — short, happy — sad", "Նկարագրել կենդանի կամ խաղալիք «It's…»-ով", "Միասին դնել երկու նկարագրող բառ՝ a big brown bear"],
        ru: ["Употреблять пары противоположностей: big — small, long — short, happy — sad", "Описывать животное или игрушку: «It's…»", "Ставить вместе два признака: a big brown bear"],
      },
      {
        en: `## Opposites

| Word | Opposite |
|---|---|
| big 🐘 | small 🐭 |
| long 🐍 | short |
| tall 🦒 | short |
| fat | thin |
| happy 😀 | sad 🙁 |
| fast 🐆 | slow 🐢 |
| old | new |

**Look:** «short» is the opposite of both «long» (a snake) and «tall» (a giraffe).

## Describe it!

> An elephant is **big**. A mouse is **small**.\\
> A giraffe is **tall**. A snake is **long**.\\
> A cheetah is **fast**. A tortoise is **slow**.

## Two describing words

Size first, then colour: a **big brown** bear, a **small white** mouse.

### Exercises

1. Give the opposite: big, happy, fast.
2. Which animal is tall?
3. Which animal is slow?
4. Finish: «A mouse is …»
5. Put in order: bear / brown / a / big.
6. Describe your school bag with two words.
7. Play «Opposites»: a friend says a word, you say the opposite.

### Answers

1. small, sad, slow. 2. A giraffe. 3. A tortoise. 4. small. 5. a big brown bear. 6. For example, «It's new and blue.» 7. Play!`,
        hy: `## Հականիշներ

| Բառ | Հականիշ |
|---|---|
| big 🐘 (*մեծ*) | small 🐭 (*փոքր*) |
| long 🐍 (*երկար*) | short (*կարճ*) |
| tall 🦒 (*բարձրահասակ*) | short (*ցածրահասակ*) |
| fat (*գեր*) | thin (*նիհար*) |
| happy 😀 (*ուրախ*) | sad 🙁 (*տխուր*) |
| fast 🐆 (*արագ*) | slow 🐢 (*դանդաղ*) |
| old (*հին, ծեր*) | new (*նոր*) |

**Ուշադրություն.** «short»-ը հականիշն է և՛ «long»-ի (օձ), և՛ «tall»-ի (ընձուղտ)։

## Նկարագրի՛ր

> An elephant is **big**. A mouse is **small**. (*Փիղը մեծ է։ Մուկը փոքր է։*)\\
> A giraffe is **tall**. A snake is **long**. (*Ընձուղտը բարձր է։ Օձը երկար է։*)\\
> A cheetah is **fast**. A tortoise is **slow**. (*Գեպարդը արագ է։ Կրիան դանդաղ է։*)

## Երկու նկարագրող բառ

Նախ չափը, հետո գույնը՝ a **big brown** bear (*մեծ գորշ արջ*), a **small white** mouse (*փոքրիկ սպիտակ մուկ*)։

### Վարժություններ

1. Գրի՛ր հականիշը՝ big, happy, fast։
2. Ո՞ր կենդանին է բարձրահասակ։
3. Ո՞ր կենդանին է դանդաղ։
4. Ավարտի՛ր՝ «A mouse is …»։
5. Դասավորի՛ր՝ bear / brown / a / big։
6. Երկու բառով նկարագրի՛ր պայուսակդ։
7. Խաղա՛ «Հականիշներ»՝ ընկերդ ասում է բառ, դու՝ հականիշը։

### Պատասխաններ

1. small, sad, slow։ 2. Ընձուղտը (a giraffe)։ 3. Կրիան (a tortoise)։ 4. small։ 5. a big brown bear։ 6. Օրինակ՝ «It's new and blue.»։ 7. Խաղա՛։`,
        ru: `## Противоположности

| Слово | Противоположное |
|---|---|
| big 🐘 (*большой*) | small 🐭 (*маленький*) |
| long 🐍 (*длинный*) | short (*короткий*) |
| tall 🦒 (*высокий*) | short (*низкий*) |
| fat (*толстый*) | thin (*худой*) |
| happy 😀 (*весёлый*) | sad 🙁 (*грустный*) |
| fast 🐆 (*быстрый*) | slow 🐢 (*медленный*) |
| old (*старый*) | new (*новый*) |

**Внимание:** «short» — противоположность и «long» (змея), и «tall» (жираф).

## Опиши!

> An elephant is **big**. A mouse is **small**. (*Слон большой. Мышь маленькая.*)\\
> A giraffe is **tall**. A snake is **long**. (*Жираф высокий. Змея длинная.*)\\
> A cheetah is **fast**. A tortoise is **slow**. (*Гепард быстрый. Черепаха медленная.*)

В английском признак не меняется: big elephant, big mouse — в русском большой слон, большая мышь.

## Два признака

Сначала размер, потом цвет: a **big brown** bear (*большой бурый медведь*), a **small white** mouse (*маленькая белая мышка*).

### Упражнения

1. Подбери противоположное: big, happy, fast.
2. Какое животное высокое?
3. Какое животное медленное?
4. Закончи: «A mouse is …»
5. Расставь по порядку: bear / brown / a / big.
6. Опиши свой портфель двумя словами.
7. Поиграй в «Наоборот»: друг говорит слово, ты — противоположное.

### Ответы

1. small, sad, slow. 2. Жираф (a giraffe). 3. Черепаха (a tortoise). 4. small. 5. a big brown bear. 6. Например, «It's new and blue.» 7. Играй!`,
      },
      [
        q(t("The opposite of «big»:", "«big»-ի հականիշը՝", "Противоположное к «big»:"), [t("tall", "tall", "tall"), t("small", "small", "small"), t("long", "long", "long")], 1),
        q(t("A giraffe is…", "Ընձուղտը…", "Жираф…"), [t("tall", "tall է", "tall"), t("short", "short է", "short"), t("slow", "slow է", "slow")], 0),
        q(t("A tortoise is…", "Կրիան…", "Черепаха…"), [t("fast", "fast է", "fast"), t("long", "long է", "long"), t("slow", "slow է", "slow")], 2),
        q(t("The opposite of «happy»:", "«happy»-ի հականիշը՝", "Противоположное к «happy»:"), [t("sad", "sad", "sad"), t("new", "new", "new"), t("thin", "thin", "thin")], 0),
        q(t("Which order is correct?", "Ո՞ր հերթականությունն է ճիշտ։", "Какой порядок правильный?"), [t("a brown big bear", "a brown big bear", "a brown big bear"), t("a bear big brown", "a bear big brown", "a bear big brown"), t("a big brown bear", "a big brown bear", "a big brown bear")], 2),
        q(t("«short» is the opposite of…", "«short»-ը հականիշն է…", "«short» — противоположность…"), [t("fast", "fast-ի", "fast"), t("long and tall", "long-ի և tall-ի", "long и tall"), t("new", "new-ի", "new")], 1),
      ],
    ),
    lesson(
      "my-house",
      ["My house", "Իմ տունը", "Мой дом"],
      {
        en: ["Name the parts of a house: door, window, roof, garden", "Say «I live in a house / a flat»", "Describe your home in three sentences"],
        hy: ["Անվանել տան մասերը՝ door, window, roof, garden", "Ասել «I live in a house / a flat»", "Երեք նախադասությամբ նկարագրել քո տունը"],
        ru: ["Называть части дома: door, window, roof, garden", "Говорить «I live in a house / a flat»", "Описывать свой дом в трёх предложениях"],
      },
      {
        en: `## Parts of a house

| Word | |
|---|---|
| a house 🏠 | the whole building |
| a flat | a home in a big building |
| a door 🚪 | you go in through it |
| a window | you look out of it |
| a roof | on top of the house |
| a garden 🌳 | flowers and trees near the house |
| a chimney | smoke comes out of it |

## Where do you live?

> I live in a **flat**. It's on the fifth floor.\\
> My grandma lives in a **house** in a village. It's got a big garden.

## Count and describe

> My house has got one door and four windows. The roof is red. The garden is green.

### Exercises

1. Translate: door, window, roof.
2. What is on top of a house?
3. What is the difference between a house and a flat?
4. Answer: «Where do you live?»
5. Finish: «My house has got … windows.»
6. Draw a house and label: door, window, roof, garden.
7. Describe your home in three sentences.

### Answers

1. door, window, roof. 2. The roof. 3. A house is a whole building; a flat is a home inside a big building. 4. For example, I live in a flat. 5. For example, «…four windows.» 6. Draw and label. 7. For example, «I live in a flat. It's got three windows. It's big.»`,
        hy: `## Տան մասերը

| Բառ | Թարգմանություն |
|---|---|
| a house 🏠 | տուն (առանձնատուն) |
| a flat | բնակարան |
| a door 🚪 | դուռ |
| a window | պատուհան |
| a roof | տանիք |
| a garden 🌳 | այգի |
| a chimney | ծխնելույզ |

## Որտե՞ղ ես ապրում

> I live in a **flat**. It's on the fifth floor. (*Ես ապրում եմ բնակարանում։ Այն հինգերորդ հարկում է։*)\\
> My grandma lives in a **house** in a village. It's got a big garden. (*Տատիկս ապրում է գյուղում՝ առանձնատանը։ Այն մեծ այգի ունի։*)

## Հաշվի՛ր և նկարագրի՛ր

> My house has got one door and four windows. The roof is red. The garden is green.

(*Իմ տունն ունի մեկ դուռ և չորս պատուհան։ Տանիքը կարմիր է։ Այգին կանաչ է։*)

### Վարժություններ

1. Թարգմանի՛ր՝ դուռ, պատուհան, տանիք։
2. Ի՞նչ կա տան վրա՝ վերևում։
3. Ի՞նչ տարբերություն կա house-ի և flat-ի միջև։
4. Պատասխանի՛ր՝ «Where do you live?»։
5. Ավարտի՛ր՝ «My house has got … windows.»։
6. Նկարի՛ր տուն և անգլերեն գրի՛ր՝ door, window, roof, garden։
7. Երեք նախադասությամբ նկարագրի՛ր քո տունը։

### Պատասխաններ

1. door, window, roof։ 2. Տանիքը (roof)։ 3. House-ը ամբողջ շենքն է, flat-ը՝ բնակարան մեծ շենքում։ 4. Օրինակ՝ I live in a flat.։ 5. Օրինակ՝ «…four windows.»։ 6. Նկարի՛ր։ 7. Օրինակ՝ «I live in a flat. It's got three windows. It's big.»։`,
        ru: `## Части дома

| Слово | Перевод |
|---|---|
| a house 🏠 | дом (отдельный) |
| a flat | квартира |
| a door 🚪 | дверь |
| a window | окно |
| a roof | крыша |
| a garden 🌳 | сад |
| a chimney | труба |

## Где ты живёшь?

> I live in a **flat**. It's on the fifth floor. (*Я живу в квартире. Она на пятом этаже.*)\\
> My grandma lives in a **house** in a village. It's got a big garden. (*Бабушка живёт в доме в деревне. У дома большой сад.*)

## Посчитай и опиши

> My house has got one door and four windows. The roof is red. The garden is green.

(*У моего дома одна дверь и четыре окна. Крыша красная. Сад зелёный.*)

### Упражнения

1. Переведи: дверь, окно, крыша.
2. Что находится на самом верху дома?
3. Чем отличаются house и flat?
4. Ответь: «Where do you live?»
5. Закончи: «My house has got … windows.»
6. Нарисуй дом и подпиши: door, window, roof, garden.
7. Опиши свой дом в трёх предложениях.

### Ответы

1. door, window, roof. 2. Крыша (roof). 3. House — отдельный дом, flat — квартира в большом доме. 4. Например, I live in a flat. 5. Например, «…four windows.» 6. Нарисуй и подпиши. 7. Например, «I live in a flat. It's got three windows. It's big.»`,
      },
      [
        q(t("«window» means…", "«window» նշանակում է…", "«window» значит…"), [t("door", "դուռ", "дверь"), t("window", "պատուհան", "окно"), t("roof", "տանիք", "крыша")], 1),
        q(t("A home inside a big building is a…", "Մեծ շենքի ներսում գտնվող տունը…", "Квартира в большом доме — это…"), [t("flat", "flat է", "flat"), t("garden", "garden է", "garden"), t("roof", "roof է", "roof")], 0),
        q(t("On top of a house is the…", "Տան վերևում…", "На верху дома —…"), [t("garden", "garden-ն է", "garden"), t("door", "door-ն է", "door"), t("roof", "roof-ն է", "roof")], 2),
        q(t("«I live in a flat» means…", "«I live in a flat» նշանակում է…", "«I live in a flat» значит…"), [t("I like flats", "Ես սիրում եմ բնակարաններ", "Мне нравятся квартиры"), t("I live in a flat", "Ես ապրում եմ բնակարանում", "Я живу в квартире"), t("I have a garden", "Ես այգի ունեմ", "У меня есть сад")], 1),
        q(t("Trees and flowers near a house:", "Ծառեր և ծաղիկներ տան մոտ՝", "Деревья и цветы возле дома:"), [t("a chimney", "a chimney", "a chimney"), t("a window", "a window", "a window"), t("a garden", "a garden", "a garden")], 2),
        q(t("«My house has got four windows» — how many windows?", "«My house has got four windows» — քանի՞ պատուհան։", "«My house has got four windows» — сколько окон?"), [t("4", "4", "4"), t("1", "1", "1"), t("5", "5", "5")], 0),
      ],
    ),
  ],
};
