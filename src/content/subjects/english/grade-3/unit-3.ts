import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("My home and family", "Իմ տունը և ընտանիքը", "Мой дом и семья"),
  summary: t(
    "Family members, «have got / has got», rooms and furniture, in/on/under, pets, writing about my room.",
    "Ընտանիքի անդամներ, «have got / has got», սենյակներ և կահույք, in/on/under, ընտանի կենդանիներ, գիր իմ սենյակի մասին։",
    "Члены семьи, «have got / has got», комнаты и мебель, in/on/under, питомцы, письмо о моей комнате.",
  ),
  lessons: [
    lesson(
      "family-members",
      ["This is my family", "Սա իմ ընտանիքն է", "Это моя семья"],
      {
        en: ["Name family members: mother, father, sister, brother, grandparents", "Introduce your family with «This is my…»", "Use «'s» to show whose: Tom's sister"],
        hy: ["Անվանել ընտանիքի անդամներին", "Ներկայացնել ընտանիքը «This is my…»-ով", "«'s»-ով ցույց տալ պատկանելությունը՝ Tom's sister"],
        ru: ["Называть членов семьи: mother, father, sister, brother, grandparents", "Представлять семью: «This is my…»", "Использовать «'s» для принадлежности: Tom's sister"],
      },
      {
        en: `## My family

| Word | Short / friendly word |
|---|---|
| mother | mum |
| father | dad |
| grandmother | granny, grandma |
| grandfather | grandpa |
| sister | — |
| brother | — |
| parents | mother and father |
| grandparents | grandmother and grandfather |

## Introducing your family

*This is my mum. Her name is Lilit. This is my dad. His name is Armen. This is my brother Gor. He is six.*

**his** = of a boy or man, **her** = of a girl or woman.

## Whose? Add 's

*Tom's sister* = the sister of Tom. *Anna's dad* = the dad of Anna. *My granny's cat* = the cat of my granny.

### Exercises

1. Your mother's mother is your ___.
2. Your father's son (not you) is your ___.
3. Complete: *This is my dad. ___ name is Armen.*
4. Complete: *This is my sister. ___ name is Ani.*
5. Rewrite with 's: *the bike of Tom*.
6. Mother and father together are your ___.
7. Write four sentences about your family.

### Answers

1. grandmother (granny). 2. brother. 3. His. 4. Her. 5. Tom's bike. 6. parents. 7. Example: This is my mum. Her name is Anna. This is my dad. His name is David.`,
        hy: `## Իմ ընտանիքը

| Անգլերեն | Ընտանեկան ձև | Հայերեն |
|---|---|---|
| mother | mum | մայր, մայրիկ |
| father | dad | հայր, հայրիկ |
| grandmother | granny, grandma | տատիկ |
| grandfather | grandpa | պապիկ |
| sister | — | քույր |
| brother | — | եղբայր |
| parents | — | ծնողներ |
| grandparents | — | տատիկ ու պապիկ |

## Ներկայացնում ենք ընտանիքը

*This is my mum. Her name is Lilit. This is my dad. His name is Armen. This is my brother Gor. He is six.*

**his**՝ նրա (տղայի, տղամարդու), **her**՝ նրա (աղջկա, կնոջ)։

## Ո՞ւմն է։ Ավելացրո՛ւ 's

*Tom's sister*՝ Թոմի քույրը։ *Anna's dad*՝ Աննայի հայրիկը։ *My granny's cat*՝ տատիկիս կատուն։

### Վարժություններ

1. Մայրիկիդ մայրը քո ___ է։
2. Հայրիկիդ որդին (ոչ դու) քո ___ է։
3. Լրացրո՛ւ. *This is my dad. ___ name is Armen.*
4. Լրացրո՛ւ. *This is my sister. ___ name is Ani.*
5. Վերագրի՛ր 's-ով. *the bike of Tom*։
6. Մայրիկն ու հայրիկը միասին քո ___ են։
7. Գրի՛ր չորս նախադասություն քո ընտանիքի մասին։

### Պատասխաններ

1. grandmother (granny)։ 2. brother։ 3. His։ 4. Her։ 5. Tom's bike։ 6. parents։ 7. Օրինակ՝ This is my mum. Her name is Anna. This is my dad. His name is David.`,
        ru: `## Моя семья

| По-английски | Ласково | По-русски |
|---|---|---|
| mother | mum | мама |
| father | dad | папа |
| grandmother | granny, grandma | бабушка |
| grandfather | grandpa | дедушка |
| sister | — | сестра |
| brother | — | брат |
| parents | — | родители |
| grandparents | — | бабушка и дедушка |

## Представляем семью

*This is my mum. Her name is Lilit. This is my dad. His name is Armen. This is my brother Gor. He is six.*

**his** — его, **her** — её.

## Чей? Добавь 's

*Tom's sister* — сестра Тома. *Anna's dad* — папа Анны. *My granny's cat* — кошка моей бабушки.

### Упражнения

1. Мама твоей мамы — это твоя ___.
2. Сын твоего папы (не ты) — это твой ___.
3. Дополни: *This is my dad. ___ name is Armen.*
4. Дополни: *This is my sister. ___ name is Ani.*
5. Перепиши с 's: *the bike of Tom*.
6. Мама и папа вместе — твои ___.
7. Напиши четыре предложения о своей семье.

### Ответы

1. grandmother (granny). 2. brother. 3. His. 4. Her. 5. Tom's bike. 6. parents. 7. Например: This is my mum. Her name is Anna. This is my dad. His name is David.`,
      },
      [
        q(t("Your mother's father is your…", "Մայրիկիդ հայրը քո…", "Папа твоей мамы — твой…"), [t("grandfather", "grandfather", "grandfather"), t("brother", "brother", "brother"), t("father", "father", "father")], 0),
        q(t("This is my mum. ___ name is Lilit.", "This is my mum. ___ name is Lilit.", "This is my mum. ___ name is Lilit."), [t("His", "His", "His"), t("Her", "Her", "Her"), t("Its", "Its", "Its")], 1),
        q(t("«the cat of Anna» =", "«the cat of Anna» =", "«the cat of Anna» ="), [t("Anna cat", "Anna cat", "Anna cat"), t("Annas' cat", "Annas' cat", "Annas' cat"), t("Anna's cat", "Anna's cat", "Anna's cat")], 2),
        q(t("Mother and father together are…", "Մայրն ու հայրը միասին…", "Мама и папа вместе —"), [t("parents", "parents", "parents"), t("grandparents", "grandparents", "grandparents"), t("children", "children", "children")], 0),
        q(t("A friendly word for «father» is…", "«father»-ի ընտանեկան ձևն է…", "Ласковое слово для «father» —"), [t("mum", "mum", "mum"), t("granny", "granny", "granny"), t("dad", "dad", "dad")], 2),
        q(t("This is my brother. ___ is six.", "This is my brother. ___ is six.", "This is my brother. ___ is six."), [t("She", "She", "She"), t("He", "He", "He"), t("It", "It", "It")], 1),
      ],
    ),
    lesson(
      "have-got-has-got",
      ["Have got / has got", "Have got / has got", "Have got / has got"],
      {
        en: ["Say what people have with «have got» and «has got»", "Make negatives: haven't got, hasn't got", "Ask and answer: Have you got…? Yes, I have."],
        hy: ["Ասել, թե ինչ ունեն մարդիկ՝ «have got», «has got»", "Կազմել ժխտում՝ haven't got, hasn't got", "Հարցնել և պատասխանել՝ Have you got…? Yes, I have."],
        ru: ["Говорить, что у кого есть: «have got» и «has got»", "Строить отрицания: haven't got, hasn't got", "Спрашивать и отвечать: Have you got…? Yes, I have."],
      },
      {
        en: `## have got or has got?

| Pronoun | Form | Short |
|---|---|---|
| I / you / we / they | **have got** | I've got, we've got |
| he / she / it | **has got** | he's got, she's got |

- I **have got** a bike.
- My sister **has got** a doll.
- We **have got** a big garden.
- The cat **has got** green eyes.

## Negative

I **haven't got** a dog. He **hasn't got** a computer.

## Questions

| Question | Yes | No |
|---|---|---|
| **Have** you **got** a pet? | Yes, I have. | No, I haven't. |
| **Has** she **got** a brother? | Yes, she has. | No, she hasn't. |

**Careful:** *he's got* = *he has got*, but *he's nine* = *he is nine*.

### Exercises

1. I ___ a red pencil case.
2. My brother ___ a ball.
3. Make negative: *She has got a cat.*
4. Make a question: *They have got a car.*
5. Answer: *Have you got a sister?* (no)
6. What does *he's* mean in *He's got a kite*?
7. Write three things you have got and one thing you haven't got.

### Answers

1. have got. 2. has got. 3. She hasn't got a cat. 4. Have they got a car? 5. No, I haven't. 6. he has. 7. Example: I've got a bike, a ball and a kite. I haven't got a dog.`,
        hy: `## have got, թե՞ has got

**have got** նշանակում է «ունենալ»։

| Դերանուն | Ձև | Կարճ |
|---|---|---|
| I / you / we / they | **have got** | I've got, we've got |
| he / she / it | **has got** | he's got, she's got |

- I **have got** a bike. (Ես հեծանիվ ունեմ։)
- My sister **has got** a doll.
- We **have got** a big garden.
- The cat **has got** green eyes.

## Ժխտում

I **haven't got** a dog. He **hasn't got** a computer.

## Հարց

| Հարց | Այո | Ոչ |
|---|---|---|
| **Have** you **got** a pet? | Yes, I have. | No, I haven't. |
| **Has** she **got** a brother? | Yes, she has. | No, she hasn't. |

**Ուշադրությո՛ւն.** *he's got* = *he has got*, բայց *he's nine* = *he is nine*։

### Վարժություններ

1. I ___ a red pencil case.
2. My brother ___ a ball.
3. Դարձրո՛ւ ժխտական. *She has got a cat.*
4. Կազմի՛ր հարց. *They have got a car.*
5. Պատասխանի՛ր. *Have you got a sister?* (ոչ)
6. Ի՞նչ է նշանակում *he's*-ը *He's got a kite* նախադասության մեջ։
7. Գրի՛ր երեք բան, որ ունես, և մեկը, որ չունես։

### Պատասխաններ

1. have got։ 2. has got։ 3. She hasn't got a cat. 4. Have they got a car? 5. No, I haven't. 6. he has։ 7. Օրինակ՝ I've got a bike, a ball and a kite. I haven't got a dog.`,
        ru: `## have got или has got?

**have got** значит «иметь, у меня есть».

| Местоимение | Форма | Кратко |
|---|---|---|
| I / you / we / they | **have got** | I've got, we've got |
| he / she / it | **has got** | he's got, she's got |

- I **have got** a bike. (У меня есть велосипед.)
- My sister **has got** a doll.
- We **have got** a big garden.
- The cat **has got** green eyes.

## Отрицание

I **haven't got** a dog. He **hasn't got** a computer.

## Вопросы

| Вопрос | Да | Нет |
|---|---|---|
| **Have** you **got** a pet? | Yes, I have. | No, I haven't. |
| **Has** she **got** a brother? | Yes, she has. | No, she hasn't. |

**Осторожно:** *he's got* = *he has got*, а *he's nine* = *he is nine*.

### Упражнения

1. I ___ a red pencil case.
2. My brother ___ a ball.
3. Сделай отрицание: *She has got a cat.*
4. Задай вопрос: *They have got a car.*
5. Ответь: *Have you got a sister?* (нет)
6. Что значит *he's* в *He's got a kite*?
7. Напиши три вещи, которые у тебя есть, и одну, которой нет.

### Ответы

1. have got. 2. has got. 3. She hasn't got a cat. 4. Have they got a car? 5. No, I haven't. 6. he has. 7. Например: I've got a bike, a ball and a kite. I haven't got a dog.`,
      },
      [
        q(t("My sister ___ a doll.", "My sister ___ a doll.", "My sister ___ a doll."), [t("have got", "have got", "have got"), t("has got", "has got", "has got"), t("is got", "is got", "is got")], 1),
        q(t("We ___ a garden.", "We ___ a garden.", "We ___ a garden."), [t("have got", "have got", "have got"), t("has got", "has got", "has got"), t("are got", "are got", "are got")], 0),
        q(t("«Has he got a bike?» — «No, …»", "«Has he got a bike?» — «No, …»", "«Has he got a bike?» — «No, …»"), [t("he haven't.", "he haven't.", "he haven't."), t("he isn't.", "he isn't.", "he isn't."), t("he hasn't.", "he hasn't.", "he hasn't.")], 2),
        q(t("Which question is correct?", "Ո՞ր հարցն է ճիշտ։", "Какой вопрос правильный?"), [t("Have you got a pet?", "Have you got a pet?", "Have you got a pet?"), t("Has you got a pet?", "Has you got a pet?", "Has you got a pet?"), t("You have a pet got?", "You have a pet got?", "You have a pet got?")], 0),
        q(t("In «She's got a cat», «she's» means…", "«She's got a cat»-ում «she's»-ը…", "В «She's got a cat» «she's» значит…"), [t("she is", "she is", "she is"), t("she has", "she has", "she has"), t("she was", "she was", "she was")], 1),
        q(t("I ___ a dog. (negative)", "I ___ a dog. (ժխտական)", "I ___ a dog. (отрицание)"), [t("hasn't got", "hasn't got", "hasn't got"), t("don't got", "don't got", "don't got"), t("haven't got", "haven't got", "haven't got")], 2),
      ],
    ),
    lesson(
      "rooms",
      ["Rooms in a house", "Տան սենյակները", "Комнаты в доме"],
      {
        en: ["Name the rooms of a house and furniture in them", "Say what is in each room with «there is / there are»", "Answer «Where is mum? — She's in the kitchen»"],
        hy: ["Անվանել տան սենյակները և դրանցում եղած կահույքը", "Ասել, թե ինչ կա ամեն սենյակում՝ «there is / there are»", "Պատասխանել «Where is mum? — She's in the kitchen»"],
        ru: ["Называть комнаты в доме и мебель в них", "Говорить, что есть в каждой комнате: «there is / there are»", "Отвечать: «Where is mum? — She's in the kitchen»"],
      },
      {
        en: `## Rooms

| Room | What is there |
|---|---|
| living room | a sofa, an armchair, a TV |
| kitchen | a cooker, a fridge, a table |
| bedroom | a bed, a wardrobe, a lamp |
| bathroom | a bath, a shower, a sink |
| hall | a door, a mirror, coats |

Some houses have a **garden** and a **garage** too.

## Where is…?

> **Where is mum?** — She's **in the kitchen**.\\
> **Where are the children?** — They're **in the garden**.

## A text

*This is my flat. There are four rooms: a living room, a kitchen, a bedroom and a bathroom. In the living room there is a big sofa and a TV. My cat is in the kitchen.*

### Exercises

1. Where do you sleep?
2. Where do you cook?
3. Name three things in a living room.
4. Odd one out: *bed, fridge, cooker, sink*. (Which is not in the kitchen?)
5. Complete: *Where is dad? — He's in the ___.* (bathroom)
6. Translate the idea: *There is a fridge in the kitchen.*
7. Draw a plan of your home and label the rooms in English.

### Answers

1. In the bedroom. 2. In the kitchen. 3. Example: a sofa, an armchair, a TV. 4. bed. 5. bathroom. 6. The kitchen has a fridge. 7. Label each room with its English name.`,
        hy: `## Սենյակներ

| Սենյակ | Հայերեն | Ի՞նչ կա այնտեղ |
|---|---|---|
| living room | հյուրասենյակ | a sofa (բազմոց), an armchair (բազկաթոռ), a TV |
| kitchen | խոհանոց | a cooker (սալօջախ), a fridge (սառնարան), a table |
| bedroom | ննջասենյակ | a bed (մահճակալ), a wardrobe (պահարան), a lamp |
| bathroom | լոգարան | a bath (լոգարան), a shower (ցնցուղ), a sink (լվացարան) |
| hall | միջանցք | a door, a mirror (հայելի), coats |

Որոշ տներ ունեն նաև **garden** (այգի) և **garage** (ավտոտնակ)։

## Where is…?

> **Where is mum?** — She's **in the kitchen**. (Մայրիկը խոհանոցում է։)\\
> **Where are the children?** — They're **in the garden**.

## Տեքստ

*This is my flat. There are four rooms: a living room, a kitchen, a bedroom and a bathroom. In the living room there is a big sofa and a TV. My cat is in the kitchen.*

### Վարժություններ

1. Որտե՞ղ ես քնում (անգլերեն)։
2. Որտե՞ղ են ճաշ եփում։
3. Անվանի՛ր հյուրասենյակի երեք առարկա։
4. Ավելորդը. *bed, fridge, cooker, sink* (ո՞րը խոհանոցում չէ)։
5. Լրացրո՛ւ. *Where is dad? — He's in the ___.* (լոգարան)
6. Թարգմանի՛ր. *There is a fridge in the kitchen.*
7. Նկարի՛ր քո տան հատակագիծը և անգլերեն գրի՛ր սենյակների անունները։

### Պատասխաններ

1. In the bedroom. 2. In the kitchen. 3. Օրինակ՝ a sofa, an armchair, a TV. 4. bed։ 5. bathroom։ 6. Խոհանոցում սառնարան կա։ 7. Ամեն սենյակի վրա գրի՛ր անգլերեն անունը։`,
        ru: `## Комнаты

| Комната | Перевод | Что там есть |
|---|---|---|
| living room | гостиная | a sofa (диван), an armchair (кресло), a TV |
| kitchen | кухня | a cooker (плита), a fridge (холодильник), a table |
| bedroom | спальня | a bed (кровать), a wardrobe (шкаф), a lamp |
| bathroom | ванная | a bath (ванна), a shower (душ), a sink (раковина) |
| hall | прихожая | a door, a mirror (зеркало), coats |

В некоторых домах есть ещё **garden** (сад) и **garage** (гараж).

## Where is…?

> **Where is mum?** — She's **in the kitchen**. (Мама на кухне.)\\
> **Where are the children?** — They're **in the garden**.

## Текст

*This is my flat. There are four rooms: a living room, a kitchen, a bedroom and a bathroom. In the living room there is a big sofa and a TV. My cat is in the kitchen.*

### Упражнения

1. Где ты спишь (по-английски)?
2. Где готовят еду?
3. Назови три предмета в гостиной.
4. Лишнее: *bed, fridge, cooker, sink* (что не на кухне?).
5. Дополни: *Where is dad? — He's in the ___.* (ванная)
6. Переведи: *There is a fridge in the kitchen.*
7. Нарисуй план своей квартиры и подпиши комнаты по-английски.

### Ответы

1. In the bedroom. 2. In the kitchen. 3. Например: a sofa, an armchair, a TV. 4. bed. 5. bathroom. 6. На кухне есть холодильник. 7. Подпиши каждую комнату по-английски.`,
      },
      [
        q(t("Where do we sleep?", "Որտե՞ղ ենք քնում։", "Где мы спим?"), [t("in the kitchen", "in the kitchen", "in the kitchen"), t("in the bedroom", "in the bedroom", "in the bedroom"), t("in the hall", "in the hall", "in the hall")], 1),
        q(t("A fridge is usually in the…", "Սառնարանը սովորաբար լինում է…", "Холодильник обычно стоит…"), [t("kitchen", "kitchen", "kitchen"), t("bathroom", "bathroom", "bathroom"), t("garage", "garage", "garage")], 0),
        q(t("«Where is mum?» — ?", "«Where is mum?» — ?", "«Where is mum?» — ?"), [t("It's a kitchen.", "It's a kitchen.", "It's a kitchen."), t("Yes, she is.", "Yes, she is.", "Yes, she is."), t("She's in the kitchen.", "She's in the kitchen.", "She's in the kitchen.")], 2),
        q(t("A sofa is in the…", "Բազմոցը…", "Диван стоит в…"), [t("living room", "living room", "living room"), t("bathroom", "bathroom", "bathroom"), t("fridge", "fridge", "fridge")], 0),
        q(t("Which is NOT a room?", "Ո՞րը սենյակ չէ։", "Что НЕ комната?"), [t("hall", "hall", "hall"), t("wardrobe", "wardrobe", "wardrobe"), t("bedroom", "bedroom", "bedroom")], 1),
        q(t("We wash our hands in the…", "Ձեռքերը լվանում ենք…", "Руки моют в…"), [t("garage", "garage", "garage"), t("bedroom", "bedroom", "bedroom"), t("bathroom", "bathroom", "bathroom")], 2),
      ],
    ),
    lesson(
      "prepositions-place",
      ["In, on, under: where is the cat?", "In, on, under․ որտե՞ղ է կատուն", "In, on, under: где кошка?"],
      {
        en: ["Use the prepositions in, on, under, next to, behind, in front of", "Ask and answer «Where is…?» and «Where are…?»", "Describe where things are in a picture"],
        hy: ["Գործածել in, on, under, next to, behind, in front of նախդիրները", "Հարցնել և պատասխանել «Where is…?», «Where are…?»", "Նկարագրել, թե որտեղ են առարկաները նկարում"],
        ru: ["Употреблять предлоги in, on, under, next to, behind, in front of", "Спрашивать и отвечать «Where is…?» и «Where are…?»", "Описывать, где находятся предметы на картинке"],
      },
      {
        en: `## Where is the cat?

| Preposition | Example |
|---|---|
| **in** | The cat is **in** the box. |
| **on** | The cat is **on** the box. |
| **under** | The cat is **under** the table. |
| **next to** | The cat is **next to** the dog. |
| **behind** | The cat is **behind** the sofa. |
| **in front of** | The cat is **in front of** the TV. |

## Questions

> **Where is** the ball? — It's **under** the bed.\\
> **Where are** my books? — They're **on** the desk.

## A picture to imagine

*The lamp is on the desk. The schoolbag is under the desk. The chair is in front of the desk. The cat is behind the chair.*

### Exercises

1. The pencils are ___ the pencil case. (inside)
2. The book is ___ the desk. (on top)
3. The ball is ___ the chair. (below)
4. Answer: *Where are your shoes?*
5. Complete: *The dog is ___ the cat.* (beside)
6. Draw the picture from the text above.
7. Hide a toy and give clues to a friend: *It's under…*

### Answers

1. in. 2. on. 3. under. 4. Example: They're under my bed. 5. next to. 6. Lamp on the desk, bag under it, chair in front, cat behind the chair. 7. Play with a friend.`,
        hy: `## Որտե՞ղ է կատուն

| Նախդիր | Նշանակություն | Օրինակ |
|---|---|---|
| **in** | մեջ | The cat is **in** the box. |
| **on** | վրա | The cat is **on** the box. |
| **under** | տակ | The cat is **under** the table. |
| **next to** | կողքին | The cat is **next to** the dog. |
| **behind** | հետևում | The cat is **behind** the sofa. |
| **in front of** | առջևում | The cat is **in front of** the TV. |

Հայերենում «արկղի **մեջ**», անգլերենում՝ «**in** the box». նախդիրը գալիս է բառից **առաջ**։

## Հարցեր

> **Where is** the ball? — It's **under** the bed.\\
> **Where are** my books? — They're **on** the desk.

## Պատկերացրո՛ւ նկարը

*The lamp is on the desk. The schoolbag is under the desk. The chair is in front of the desk. The cat is behind the chair.*

### Վարժություններ

1. The pencils are ___ the pencil case. (մեջ)
2. The book is ___ the desk. (վրա)
3. The ball is ___ the chair. (տակ)
4. Պատասխանի՛ր. *Where are your shoes?*
5. Լրացրո՛ւ. *The dog is ___ the cat.* (կողքին)
6. Նկարի՛ր վերևի տեքստի նկարը։
7. Թաքցրո՛ւ խաղալիքը և հուշումներ տուր ընկերոջդ՝ *It's under…*

### Պատասխաններ

1. in։ 2. on։ 3. under։ 4. Օրինակ՝ They're under my bed. 5. next to։ 6. Լամպը սեղանին, պայուսակը տակը, աթոռը առջևում, կատուն աթոռի հետևում։ 7. Խաղա՛ ընկերոջդ հետ։`,
        ru: `## Где кошка?

| Предлог | Перевод | Пример |
|---|---|---|
| **in** | в | The cat is **in** the box. |
| **on** | на | The cat is **on** the box. |
| **under** | под | The cat is **under** the table. |
| **next to** | рядом с | The cat is **next to** the dog. |
| **behind** | за, позади | The cat is **behind** the sofa. |
| **in front of** | перед | The cat is **in front of** the TV. |

## Вопросы

> **Where is** the ball? — It's **under** the bed.\\
> **Where are** my books? — They're **on** the desk.

## Представь картинку

*The lamp is on the desk. The schoolbag is under the desk. The chair is in front of the desk. The cat is behind the chair.*

### Упражнения

1. The pencils are ___ the pencil case. (внутри)
2. The book is ___ the desk. (сверху)
3. The ball is ___ the chair. (под)
4. Ответь: *Where are your shoes?*
5. Дополни: *The dog is ___ the cat.* (рядом)
6. Нарисуй картинку по тексту выше.
7. Спрячь игрушку и дай другу подсказки: *It's under…*

### Ответы

1. in. 2. on. 3. under. 4. Например: They're under my bed. 5. next to. 6. Лампа на столе, портфель под столом, стул перед столом, кошка за стулом. 7. Поиграй с другом.`,
      },
      [
        q(t("The cat is ___ the box. (inside)", "The cat is ___ the box. (մեջ)", "The cat is ___ the box. (внутри)"), [t("on", "on", "on"), t("in", "in", "in"), t("under", "under", "under")], 1),
        q(t("The lamp is ___ the desk. (on top)", "The lamp is ___ the desk. (վրա)", "The lamp is ___ the desk. (сверху)"), [t("on", "on", "on"), t("under", "under", "under"), t("behind", "behind", "behind")], 0),
        q(t("«behind» is the opposite of…", "«behind»-ի հակառակն է…", "Противоположность «behind» —"), [t("under", "under", "under"), t("next to", "next to", "next to"), t("in front of", "in front of", "in front of")], 2),
        q(t("«Where are my books?» — ?", "«Where are my books?» — ?", "«Where are my books?» — ?"), [t("They're on the desk.", "They're on the desk.", "They're on the desk."), t("It's on the desk.", "It's on the desk.", "It's on the desk."), t("They're books.", "They're books.", "They're books.")], 0),
        q(t("«next to» means…", "«next to» նշանակում է…", "«next to» значит…"), [t("under", "տակ", "под"), t("beside", "կողքին", "рядом"), t("inside", "մեջ", "внутри")], 1),
        q(t("The ball is ___ the bed. (below)", "The ball is ___ the bed. (տակ)", "The ball is ___ the bed. (под)"), [t("on", "on", "on"), t("in", "in", "in"), t("under", "under", "under")], 2),
      ],
    ),
    lesson(
      "pets-animals",
      ["Pets and farm animals", "Ընտանի և ագարակի կենդանիներ", "Домашние питомцы и животные на ферме"],
      {
        en: ["Name 12 animals: pets and farm animals", "Describe an animal with «It has got…» and «It can…»", "Talk about your pet or a pet you would like"],
        hy: ["Անվանել 12 կենդանի", "Նկարագրել կենդանուն «It has got…» և «It can…»-ով", "Պատմել քո ընտանի կենդանու մասին"],
        ru: ["Называть 12 животных: питомцев и животных фермы", "Описывать животное: «It has got…», «It can…»", "Рассказывать о своём питомце или о том, которого хочешь"],
      },
      {
        en: `## Pets

| Animal | Sound |
|---|---|
| a cat | miaow |
| a dog | woof |
| a parrot | can talk! |
| a hamster | squeak |
| a rabbit | — |
| a fish | — |

## Farm animals

| Animal | Sound |
|---|---|
| a cow | moo |
| a sheep (two sheep) | baa |
| a horse | neigh |
| a pig | oink |
| a hen | cluck |
| a duck | quack |

**sheep** has the same form for one and many: *one sheep, ten sheep*.

## Describing an animal

*My pet is a rabbit. Its name is Snowy. It's white. It has got long ears and a short tail. It can jump. It likes carrots.*

**its** = of an animal or thing (no apostrophe!).

### Exercises

1. Which animal says *moo*?
2. Which pet can talk?
3. The plural of *sheep* is ___.
4. Complete: *A horse has got four ___ .* (legs)
5. Guess: *It's small. It's got long ears. It can jump. It likes carrots.*
6. Complete: *My dog is brown. ___ name is Rex.*
7. Describe a pet in four sentences.

### Answers

1. A cow. 2. A parrot. 3. sheep. 4. legs. 5. A rabbit. 6. Its. 7. Example: My pet is a cat. Its name is Murka. It's grey. It can climb trees.`,
        hy: `## Ընտանի կենդանիներ

| Կենդանի | Հայերեն | Ձայնը |
|---|---|---|
| a cat | կատու | miaow |
| a dog | շուն | woof |
| a parrot | թութակ | կարող է խոսել |
| a hamster | համստեր | squeak |
| a rabbit | ճագար | — |
| a fish | ձուկ | — |

## Ագարակի կենդանիներ

| Կենդանի | Հայերեն | Ձայնը |
|---|---|---|
| a cow | կով | moo |
| a sheep (two sheep) | ոչխար | baa |
| a horse | ձի | neigh |
| a pig | խոզ | oink |
| a hen | հավ | cluck |
| a duck | բադ | quack |

**sheep**-ը եզակի և հոգնակի թվում նույնն է՝ *one sheep, ten sheep*։

## Նկարագրում ենք կենդանուն

*My pet is a rabbit. Its name is Snowy. It's white. It has got long ears and a short tail. It can jump. It likes carrots.*

**its**՝ նրա (կենդանու կամ առարկայի), առանց ապաթարցի։

### Վարժություններ

1. Ո՞ր կենդանին է ասում *moo*։
2. Ո՞ր ընտանի կենդանին կարող է խոսել։
3. *sheep*-ի հոգնակին է ___։
4. Լրացրո՛ւ. *A horse has got four ___.* (ոտքեր)
5. Գուշակի՛ր. *It's small. It's got long ears. It can jump. It likes carrots.*
6. Լրացրո՛ւ. *My dog is brown. ___ name is Rex.*
7. Նկարագրի՛ր ընտանի կենդանի չորս նախադասությամբ։

### Պատասխաններ

1. A cow։ 2. A parrot։ 3. sheep։ 4. legs։ 5. A rabbit։ 6. Its։ 7. Օրինակ՝ My pet is a cat. Its name is Murka. It's grey. It can climb trees.`,
        ru: `## Питомцы

| Животное | Перевод | Звук |
|---|---|---|
| a cat | кошка | miaow |
| a dog | собака | woof |
| a parrot | попугай | умеет говорить |
| a hamster | хомяк | squeak |
| a rabbit | кролик | — |
| a fish | рыбка | — |

## Животные на ферме

| Животное | Перевод | Звук |
|---|---|---|
| a cow | корова | moo |
| a sheep (two sheep) | овца | baa |
| a horse | лошадь | neigh |
| a pig | свинья | oink |
| a hen | курица | cluck |
| a duck | утка | quack |

У **sheep** одинаковая форма для одной и многих: *one sheep, ten sheep*.

## Описываем животное

*My pet is a rabbit. Its name is Snowy. It's white. It has got long ears and a short tail. It can jump. It likes carrots.*

**its** — его/её (о животном или предмете), без апострофа!

### Упражнения

1. Какое животное говорит *moo*?
2. Какой питомец умеет говорить?
3. Множественное число от *sheep* — ___.
4. Дополни: *A horse has got four ___.* (ноги)
5. Угадай: *It's small. It's got long ears. It can jump. It likes carrots.*
6. Дополни: *My dog is brown. ___ name is Rex.*
7. Опиши питомца четырьмя предложениями.

### Ответы

1. A cow. 2. A parrot. 3. sheep. 4. legs. 5. A rabbit. 6. Its. 7. Например: My pet is a cat. Its name is Murka. It's grey. It can climb trees.`,
      },
      [
        q(t("Which animal says «quack»?", "Ո՞ր կենդանին է ասում «quack»։", "Какое животное говорит «quack»?"), [t("a duck", "a duck", "a duck"), t("a cow", "a cow", "a cow"), t("a dog", "a dog", "a dog")], 0),
        q(t("one sheep, two ___", "one sheep, two ___", "one sheep, two ___"), [t("sheeps", "sheeps", "sheeps"), t("sheep", "sheep", "sheep"), t("sheepes", "sheepes", "sheepes")], 1),
        q(t("My cat is black. ___ name is Tom.", "My cat is black. ___ name is Tom.", "My cat is black. ___ name is Tom."), [t("It's", "It's", "It's"), t("Her", "Her", "Her"), t("Its", "Its", "Its")], 2),
        q(t("Which pet can talk?", "Ո՞ր ընտանի կենդանին կարող է խոսել։", "Какой питомец умеет говорить?"), [t("a fish", "a fish", "a fish"), t("a parrot", "a parrot", "a parrot"), t("a hamster", "a hamster", "a hamster")], 1),
        q(t("«It's got long ears and it likes carrots.» It's a…", "«It's got long ears and it likes carrots.» Սա…", "«It's got long ears and it likes carrots.» Это…"), [t("rabbit", "rabbit", "rabbit"), t("pig", "pig", "pig"), t("hen", "hen", "hen")], 0),
        q(t("Which is a farm animal?", "Ո՞րն է ագարակի կենդանի։", "Какое животное живёт на ферме?"), [t("a hamster", "a hamster", "a hamster"), t("a parrot", "a parrot", "a parrot"), t("a cow", "a cow", "a cow")], 2),
      ],
    ),
    lesson(
      "my-room-writing",
      ["Writing: my room", "Գիր․ իմ սենյակը", "Письмо: моя комната"],
      {
        en: ["Plan a short text: beginning, details, ending", "Write 5–6 sentences about your room using there is/are, have got and prepositions", "Check capital letters, full stops and spelling"],
        hy: ["Պլանավորել կարճ տեքստ՝ սկիզբ, մանրամասներ, ավարտ", "Գրել 5–6 նախադասություն քո սենյակի մասին", "Ստուգել մեծատառերը, վերջակետերը և ուղղագրությունը"],
        ru: ["Планировать короткий текст: начало, детали, конец", "Писать 5–6 предложений о своей комнате", "Проверять заглавные буквы, точки и орфографию"],
      },
      {
        en: `## A model text

*My room*

*This is my room. It is small but nice. There is a bed next to the window. There is a desk and a chair. My books are on the shelf. There are two pictures on the wall. I've got a lot of toys. They are in a big box under the bed. I like my room!*

## The plan

| Part | What to write | Example |
|---|---|---|
| Beginning | What and how it is | This is my room. It's small but nice. |
| Middle | What is there and where | There is a bed next to the window. |
| | What you have got | I've got a lot of toys. |
| End | Your feeling | I like my room! |

## Useful words

bed, desk, chair, shelf, wardrobe, lamp, window, wall, carpet, picture, toys, computer.

## Check your writing

- Every sentence starts with a **capital letter** and ends with a **full stop**.
- **I** is always a capital.
- *There is* + one thing, *there are* + many things.

### Exercises

1. Where is the bed in the model text?
2. Where are the toys?
3. How many pictures are on the wall?
4. Find two sentences with **there is** in the text.
5. Correct the mistakes: *there is two lamps. i like my room*
6. Put in order: *is / my / desk / window / the / next to*.
7. Write your own text «My room» in 5–6 sentences.

### Answers

1. Next to the window. 2. In a big box under the bed. 3. Two. 4. There is a bed next to the window. There is a desk and a chair. 5. There are two lamps. I like my room. 6. My desk is next to the window. 7. Use the plan and check your writing.`,
        hy: `## Օրինակելի տեքստ

*My room*

*This is my room. It is small but nice. There is a bed next to the window. There is a desk and a chair. My books are on the shelf. There are two pictures on the wall. I've got a lot of toys. They are in a big box under the bed. I like my room!*

(Սա իմ սենյակն է։ Փոքր է, բայց հաճելի։ Պատուհանի կողքին մահճակալ կա։ Կա գրասեղան և աթոռ։ Գրքերս դարակին են։ Պատին երկու նկար կա։ Ես շատ խաղալիքներ ունեմ։ Դրանք մահճակալի տակ՝ մեծ արկղում են։ Ես սիրում եմ իմ սենյակը։)

## Պլան

| Մաս | Ինչ գրել | Օրինակ |
|---|---|---|
| Սկիզբ | Ինչ է և ինչպիսին | This is my room. It's small but nice. |
| Մեջտեղ | Ինչ կա և որտեղ | There is a bed next to the window. |
| | Ինչ ունես | I've got a lot of toys. |
| Վերջ | Քո զգացումը | I like my room! |

## Օգտակար բառեր

bed, desk, chair, shelf (դարակ), wardrobe, lamp, window, wall (պատ), carpet (գորգ), picture (նկար), toys, computer։

## Ստուգի՛ր

- Ամեն նախադասություն սկսվում է **մեծատառով** և ավարտվում **կետով**։
- **I**-ը միշտ մեծատառ է։
- *There is* + մեկ առարկա, *there are* + շատ առարկաներ։

### Վարժություններ

1. Որտե՞ղ է մահճակալը տեքստում։
2. Որտե՞ղ են խաղալիքները։
3. Քանի՞ նկար կա պատին։
4. Գտի՛ր **there is**-ով երկու նախադասություն։
5. Ուղղի՛ր սխալները. *there is two lamps. i like my room*
6. Դասավորի՛ր. *is / my / desk / window / the / next to*։
7. Գրի՛ր քո «My room» տեքստը 5–6 նախադասությամբ։

### Պատասխաններ

1. Պատուհանի կողքին։ 2. Մահճակալի տակ՝ մեծ արկղում։ 3. Երկու։ 4. There is a bed next to the window. There is a desk and a chair. 5. There are two lamps. I like my room. 6. My desk is next to the window. 7. Օգտվի՛ր պլանից և ստուգի՛ր։`,
        ru: `## Образец

*My room*

*This is my room. It is small but nice. There is a bed next to the window. There is a desk and a chair. My books are on the shelf. There are two pictures on the wall. I've got a lot of toys. They are in a big box under the bed. I like my room!*

(Это моя комната. Она маленькая, но уютная. У окна стоит кровать. Есть стол и стул. Мои книги на полке. На стене две картины. У меня много игрушек. Они в большой коробке под кроватью. Мне нравится моя комната!)

## План

| Часть | Что писать | Пример |
|---|---|---|
| Начало | Что это и какое | This is my room. It's small but nice. |
| Середина | Что есть и где | There is a bed next to the window. |
| | Что у тебя есть | I've got a lot of toys. |
| Конец | Твоё отношение | I like my room! |

## Полезные слова

bed, desk, chair, shelf (полка), wardrobe, lamp, window, wall (стена), carpet (ковёр), picture (картина), toys, computer.

## Проверь себя

- Каждое предложение начинается с **заглавной буквы** и заканчивается **точкой**.
- **I** всегда пишется с заглавной.
- *There is* + один предмет, *there are* + много.

### Упражнения

1. Где стоит кровать в образце?
2. Где игрушки?
3. Сколько картин на стене?
4. Найди в тексте два предложения с **there is**.
5. Исправь ошибки: *there is two lamps. i like my room*
6. Поставь по порядку: *is / my / desk / window / the / next to*.
7. Напиши свой текст «My room» из 5–6 предложений.

### Ответы

1. У окна. 2. В большой коробке под кроватью. 3. Две. 4. There is a bed next to the window. There is a desk and a chair. 5. There are two lamps. I like my room. 6. My desk is next to the window. 7. Пользуйся планом и проверь себя.`,
      },
      [
        q(t("Where is the bed in the model text?", "Տեքստում որտե՞ղ է մահճակալը։", "Где кровать в образце?"), [t("under the window", "under the window", "under the window"), t("next to the window", "next to the window", "next to the window"), t("on the shelf", "on the shelf", "on the shelf")], 1),
        q(t("How should a text end?", "Ինչո՞վ է լավ ավարտել տեքստը։", "Чем хорошо закончить текст?"), [t("with your feeling: I like my room!", "քո զգացումով՝ I like my room!", "своим отношением: I like my room!"), t("with a list of words", "բառերի ցանկով", "списком слов"), t("with a question to the teacher", "ուսուցչին ուղղված հարցով", "вопросом учителю")], 0),
        q(t("Which sentence is correct?", "Ո՞ր նախադասությունն է ճիշտ։", "Какое предложение правильное?"), [t("there are two lamps.", "there are two lamps.", "there are two lamps."), t("There is two lamps.", "There is two lamps.", "There is two lamps."), t("There are two lamps.", "There are two lamps.", "There are two lamps.")], 2),
        q(t("Where are the toys in the model text?", "Տեքստում որտե՞ղ են խաղալիքները։", "Где игрушки в образце?"), [t("in a box under the bed", "մահճակալի տակ՝ արկղում", "в коробке под кроватью"), t("on the wall", "պատին", "на стене"), t("on the desk", "գրասեղանին", "на столе")], 0),
        q(t("«shelf» is a place for…", "«shelf»-ը տեղ է…", "«shelf» — место для…"), [t("sleeping", "քնելու", "сна"), t("books", "գրքերի", "книг"), t("cooking", "եփելու", "готовки")], 1),
        q(t("Which word always starts with a capital?", "Ո՞ր բառն է միշտ գրվում մեծատառով։", "Какое слово всегда пишется с заглавной?"), [t("room", "room", "room"), t("my", "my", "my"), t("I", "I", "I")], 2),
      ],
    ),
  ],
};
