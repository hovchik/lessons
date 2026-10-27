import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade2: VisualMap[number] = {
  "body-and-senses": [
    "diagram body",
    closer(
      `**Reading with the fingertips.** **Louis Braille** lost his sight at the age of three, after an accident in his father's workshop in France. At school for blind children the books had huge raised letters and were very hard to read. In 1824, when he was only 15, Louis invented his own code: every letter is a small group of up to **6 raised dots**, small enough to feel with one fingertip. Today blind people all over the world read **Braille**, and you can find its dots on lift buttons and medicine boxes.

**The tongue map is a mistake.** Some old books show a "tongue map": sweet only at the tip, bitter only at the back. It is not true! Every part of the tongue can taste sweet, salty, sour and bitter. The map came from a German study of 1901 that was misunderstood. Try it: put a grain of sugar on the side of your tongue. You will still taste sweetness.`,
      `**Կարդալ մատների ծայրերով։** **Լուի Բրայլը** տեսողությունը կորցրեց երեք տարեկանում՝ Ֆրանսիայում, հոր արհեստանոցում պատահած դժբախտ դեպքից հետո։ Կույր երեխաների դպրոցում գրքերն ունեին հսկայական ուռուցիկ տառեր և շատ դժվար էր դրանք կարդալ։ 1824 թվականին, երբ ընդամենը 15 տարեկան էր, Լուին հնարեց իր սեփական ծածկագիրը․ յուրաքանչյուր տառ մինչև **6 ուռուցիկ կետերից** բաղկացած փոքրիկ խումբ է, այնքան փոքր, որ կարելի է զգալ մեկ մատի ծայրով։ Այսօր ամբողջ աշխարհի կույր մարդիկ կարդում են **Բրայլի գրով**, և դրա կետերը կարող ես գտնել վերելակի կոճակների ու դեղերի տուփերի վրա։

**Լեզվի քարտեզը սխալ է։** Որոշ հին գրքերում կա «լեզվի քարտեզ»․ քաղցրը՝ միայն ծայրին, դառը՝ միայն հետևի մասում։ Դա ճիշտ չէ։ Լեզվի յուրաքանչյուր մաս կարող է զգալ քաղցր, աղի, թթու և դառը համը։ Քարտեզը ծագել է 1901 թվականի գերմանական մի ուսումնասիրությունից, որը սխալ էին հասկացել։ Փորձիր․ շաքարի մի հատիկ դիր լեզվի կողքին։ Միևնույն է՝ քաղցր կզգաս։`,
      `**Читать кончиками пальцев.** **Луи Брайль** потерял зрение в три года после несчастного случая в мастерской отца во Франции. В школе для слепых детей книги были с огромными выпуклыми буквами, и читать их было очень трудно. В 1824 году, когда ему было всего 15 лет, Луи придумал свой код: каждая буква — это маленькая группа из **6 выпуклых точек** или меньше, такая маленькая, что её можно почувствовать одним кончиком пальца. Сегодня слепые люди во всём мире читают **шрифтом Брайля**, а его точки можно найти на кнопках лифта и коробках лекарств.

**Карта языка — ошибка.** В некоторых старых книгах есть «карта языка»: сладкое только на кончике, горькое только сзади. Это неправда! Каждая часть языка чувствует сладкое, солёное, кислое и горькое. Карта появилась из немецкого исследования 1901 года, которое неправильно поняли. Попробуй: положи крупинку сахара на край языка. Всё равно почувствуешь сладость.`,
    ),
    ask(2, {
      en: ["How many dots at most make one letter in Braille?", ["3", "6", "10"], "Each letter is a small group of up to 6 raised dots, felt with one fingertip."],
      hy: ["Առավելագույնը քանի՞ կետից է կազմված Բրայլի մեկ տառը։", ["3", "6", "10"], "Յուրաքանչյուր տառ մինչև 6 ուռուցիկ կետերից բաղկացած փոքրիկ խումբ է, որը զգում են մեկ մատի ծայրով։"],
      ru: ["Из скольких точек самое большее состоит одна буква Брайля?", ["3", "6", "10"], "Каждая буква — маленькая группа из 6 выпуклых точек или меньше, её чувствуют одним кончиком пальца."],
    }),
  ],
  "health-and-hygiene": [
    "bars set=sleep",
    closer(
      `**The doctor who asked everyone to wash their hands.** In 1847, in a big hospital in Vienna, many mothers fell ill and died after having babies. The doctor **Ignaz Semmelweis** noticed that doctors came straight from other work to the mothers without washing their hands. He made every doctor wash their hands in a special cleaning solution, and the number of deaths fell many times over. Back then nobody knew about germs, and many doctors laughed at him. Today washing hands is the first rule in every hospital.

**The hardest thing in your body.** The white covering of your teeth, the **enamel**, is harder than any bone. But it has an enemy: tiny germs in the mouth eat the sugar left on the teeth and make acid, and the acid slowly makes holes in the enamel. A tooth cannot grow new enamel. That is why we brush our teeth in the morning and before bed, and do not eat sweets all day long.`,
      `**Բժիշկը, որ բոլորին խնդրում էր ձեռքերը լվանալ։** 1847 թվականին Վիեննայի մի մեծ հիվանդանոցում շատ մայրեր երեխա ունենալուց հետո հիվանդանում էին և մահանում։ Բժիշկ **Իգնաց Զեմելվայսը** նկատեց, որ բժիշկներն այլ աշխատանքից ուղիղ գալիս էին մայրերի մոտ՝ առանց ձեռքերը լվանալու։ Նա պահանջեց, որ յուրաքանչյուր բժիշկ ձեռքերը լվանա հատուկ մաքրող լուծույթով, և մահերի թիվը շատ անգամ նվազեց։ Այն ժամանակ ոչ ոք չգիտեր մանրէների մասին, և շատ բժիշկներ ծիծաղում էին նրա վրա։ Այսօր ձեռքերը լվանալը յուրաքանչյուր հիվանդանոցի առաջին կանոնն է։

**Ամենապինդ բանը քո մարմնում։** Ատամների սպիտակ ծածկույթը՝ **էմալը**, ավելի պինդ է, քան ցանկացած ոսկոր։ Բայց այն թշնամի ունի․ բերանի մանր մանրէներն ուտում են ատամների վրա մնացած շաքարը և թթու են արտադրում, իսկ թթուն կամաց-կամաց անցքեր է բացում էմալի մեջ։ Ատամը չի կարող նոր էմալ աճեցնել։ Ահա թե ինչու ենք ատամները լվանում առավոտյան և քնելուց առաջ ու ամբողջ օրը քաղցրավենիք չենք ուտում։`,
      `**Врач, который просил всех мыть руки.** В 1847 году в большой больнице Вены многие мамы после рождения детей заболевали и умирали. Врач **Игнац Земмельвейс** заметил, что врачи приходили к мамам прямо с другой работы, не помыв руки. Он заставил каждого врача мыть руки особым очищающим раствором, и число смертей уменьшилось во много раз. Тогда ещё никто не знал о микробах, и многие врачи смеялись над ним. Сегодня мыть руки — первое правило в каждой больнице.

**Самое твёрдое в твоём теле.** Белое покрытие зубов, **эмаль**, твёрже любой кости. Но у неё есть враг: крошечные микробы во рту едят сахар, оставшийся на зубах, и выделяют кислоту, а кислота понемногу делает в эмали дырочки. Зуб не может вырастить новую эмаль. Поэтому мы чистим зубы утром и перед сном и не едим сладкое весь день.`,
    ),
    ask(3, {
      en: ["What makes holes in tooth enamel?", ["Cold water", "Brushing too often", "Acid made by germs that eat sugar"], "Germs in the mouth eat leftover sugar and make acid, and a tooth cannot grow new enamel."],
      hy: ["Ի՞նչն է անցքեր բացում ատամի էմալի մեջ։", ["Սառը ջուրը", "Շատ հաճախ լվանալը", "Շաքար ուտող մանրէների արտադրած թթուն"], "Բերանի մանրէներն ուտում են մնացած շաքարը և թթու արտադրում, իսկ ատամը չի կարող նոր էմալ աճեցնել։"],
      ru: ["Что делает дырочки в зубной эмали?", ["Холодная вода", "Слишком частая чистка", "Кислота от микробов, которые едят сахар"], "Микробы во рту едят остатки сахара и выделяют кислоту, а зуб не может вырастить новую эмаль."],
    }),
  ],
  "safety-rules": [
    "diagram crossing",
    closer(
      `**A gift to the whole world.** In 1959 the Swedish engineer **Nils Bohlin** invented the seat belt that almost every car has today: one strap across the chest and one across the hips, fastened with one hand and a click. His company could have kept the idea for itself, but it let every car maker in the world use it for free, because it saved so many lives. The belt works only when it is fastened, and a child needs a child seat as well, so that the belt crosses the shoulder and not the neck.

**Why wear reflective strips?** At night a driver with ordinary headlights sees a person in dark clothes only from about 25–30 metres, which is often too close to stop in time. A small reflective strip on a jacket or a bag shines back in the headlights and can be seen several times farther away. That gives the driver precious seconds to brake.`,
      `**Նվեր ամբողջ աշխարհին։** 1959 թվականին շվեդ ինժեներ **Նիլս Բուլինը** հնարեց ամրագոտին, որն այսօր ունի գրեթե յուրաքանչյուր մեքենա․ մի գոտին կրծքի վրայով, մյուսը՝ ազդրերի, որոնք ամրացվում են մեկ ձեռքով ու մեկ «չխկոցով»։ Նրա ընկերությունը կարող էր գաղափարը պահել իր համար, բայց թույլ տվեց աշխարհի բոլոր մեքենաշինողներին այն օգտագործել անվճար, որովհետև այն այնքան շատ կյանքեր էր փրկում։ Գոտին աշխատում է միայն ամրացված լինելիս, իսկ երեխային պետք է նաև մանկական նստատեղ, որպեսզի գոտին անցնի ուսի, այլ ոչ թե պարանոցի վրայով։

**Ինչու՞ կրել լուսացոլացող շերտեր։** Գիշերը սովորական լուսարձակներով վարորդը մուգ հագուստով մարդուն տեսնում է ընդամենը մոտ 25–30 մետրից, ինչը հաճախ չափազանց մոտ է՝ ժամանակին կանգնելու համար։ Բաճկոնի կամ պայուսակի վրա փոքրիկ լուսացոլացող շերտը լուսարձակների լույսի տակ փայլում է և երևում է մի քանի անգամ ավելի հեռվից։ Դա վարորդին թանկ վայրկյաններ է տալիս արգելակելու համար։`,
      `**Подарок всему миру.** В 1959 году шведский инженер **Нильс Бохлин** изобрёл ремень безопасности, который сегодня есть почти в каждой машине: одна лента через грудь, другая через бёдра, застёгиваются одной рукой и одним щелчком. Его компания могла оставить идею себе, но разрешила всем автомобильным заводам мира пользоваться ею бесплатно, потому что ремень спасал очень много жизней. Ремень работает, только если он застёгнут, а ребёнку нужно ещё и детское кресло, чтобы ремень проходил через плечо, а не через шею.

**Зачем носить светоотражатели?** Ночью водитель с обычными фарами видит человека в тёмной одежде лишь метров с 25–30, а это часто слишком близко, чтобы успеть остановиться. Маленькая светоотражающая полоска на куртке или рюкзаке блестит в свете фар, и её видно в несколько раз дальше. Это даёт водителю драгоценные секунды, чтобы затормозить.`,
    ),
    ask(1, {
      en: ["Why does a reflective strip help at night?", ["The driver sees you from much farther away", "It makes cars drive slower", "It keeps you warm"], "It shines back in the headlights, so the driver has more time to brake."],
      hy: ["Ինչու՞ է լուսացոլացող շերտն օգնում գիշերը։", ["Վարորդը քեզ տեսնում է շատ ավելի հեռվից", "Մեքենաներն ավելի դանդաղ են գնում", "Քեզ տաք է պահում"], "Այն փայլում է լուսարձակների լույսի տակ, և վարորդն ավելի շատ ժամանակ ունի արգելակելու համար։"],
      ru: ["Почему светоотражатель помогает ночью?", ["Водитель видит тебя гораздо дальше", "Машины едут медленнее", "Он греет"], "Он блестит в свете фар, и у водителя больше времени, чтобы затормозить."],
    }),
  ],
  "seasons-and-weather": [
    "climate city=yerevan",
    "mechanism seasons",
    closer(
      `**The farmer who photographed snowflakes.** **Wilson Bentley** grew up on a farm in the snowy north of the USA. As a boy he tried to draw snowflakes under a microscope, but they melted too fast. On 15 January 1885, at the age of 19, he became the first person to **photograph** a single snowflake. Over his life he photographed more than 5,000 of them and never found two exactly alike. But they all have something in common: **six** arms or six sides, because of the way water freezes.

**Storks know the seasons.** The storks that build nests on poles in the Ararat Valley do not stay for the winter. In late summer and autumn they fly south to warm **Africa**, where there are still frogs, insects and mice to eat, and in spring they come back, often to the very same nest. Seeing the first storks return is one of the signs of spring in Armenia.`,
      `**Ֆերմերը, որ լուսանկարում էր ձյան փաթիլները։** **Ուիլսոն Բենթլին** մեծացել էր ԱՄՆ-ի ձյունառատ հյուսիսում՝ մի ֆերմայում։ Մանուկ հասակում նա փորձում էր մանրադիտակի տակ ձյան փաթիլներ նկարել, բայց դրանք շատ արագ էին հալվում։ 1885 թվականի հունվարի 15-ին, 19 տարեկանում, նա առաջինը **լուսանկարեց** առանձին ձյան փաթիլ։ Կյանքի ընթացքում նա լուսանկարեց դրանցից ավելի քան 5000-ը և երբեք չգտավ լրիվ նույն երկուսը։ Բայց բոլորն էլ ընդհանուր բան ունեն․ **վեց** թև կամ վեց կող, որովհետև ջուրն այդպես է սառչում։

**Արագիլները գիտեն եղանակները։** Արագիլները, որոնք Արարատյան դաշտում բներ են շինում սյուների վրա, ձմռանը չեն մնում։ Ամռան վերջին և աշնանը նրանք թռչում են հարավ՝ տաք **Աֆրիկա**, որտեղ դեռ կան գորտեր, միջատներ ու մկներ, իսկ գարնանը վերադառնում են, հաճախ՝ հենց նույն բույնը։ Առաջին վերադարձած արագիլներին տեսնելը Հայաստանում գարնան նշաններից է։`,
      `**Фермер, который фотографировал снежинки.** **Уилсон Бентли** вырос на ферме на снежном севере США. Мальчиком он пытался рисовать снежинки под микроскопом, но они слишком быстро таяли. 15 января 1885 года, в 19 лет, он первым **сфотографировал** отдельную снежинку. За свою жизнь он сфотографировал больше 5000 снежинок и ни разу не нашёл двух совсем одинаковых. Но у всех есть общее: **шесть** лучей или шесть сторон — так замерзает вода.

**Аисты знают времена года.** Аисты, которые вьют гнёзда на столбах в Араратской долине, не остаются на зиму. В конце лета и осенью они улетают на юг, в тёплую **Африку**, где ещё есть лягушки, насекомые и мыши, а весной возвращаются, часто в то же самое гнездо. Первые вернувшиеся аисты — одна из примет весны в Армении.`,
    ),
    ask(3, {
      en: ["How many arms does a snowflake have?", ["4", "5", "6"], "Snowflakes are all different, but each has six arms or six sides, because of the way water freezes."],
      hy: ["Քանի՞ թև ունի ձյան փաթիլը։", ["4", "5", "6"], "Փաթիլները բոլորը տարբեր են, բայց յուրաքանչյուրն ունի վեց թև կամ վեց կող, որովհետև ջուրն այդպես է սառչում։"],
      ru: ["Сколько лучей у снежинки?", ["4", "5", "6"], "Все снежинки разные, но у каждой шесть лучей или шесть сторон — так замерзает вода."],
    }),
  ],
  plants: [
    "diagram plant",
    closer(
      `**How does a plant know where the light is?** **Charles Darwin** and his son Francis tested this on tiny grass seedlings. Seedlings by a window bend towards the light. Then the Darwins covered just the **tip** of some seedlings with little caps, and those seedlings stopped bending! So the tip feels the light and tells the rest of the shoot which way to grow. They wrote about it in a book in 1880. Your bean on the windowsill will bend towards the glass in the same way.

**A tree is a water pump without a motor.** The roots take in water, and the stem carries it all the way up to the top leaves, even in a tree as tall as a house. Most of the water then escapes from tiny holes in the leaves as invisible vapour, and that pulls more water up behind it, like drinking through a straw. On a hot summer day a big tree can lift more than a hundred litres of water.`,
      `**Որտեղի՞ց գիտի բույսը, թե որտեղ է լույսը։** **Չարլզ Դարվինը** և նրա որդի Ֆրենսիսը դա ստուգեցին խոտի մանր ծիլերի վրա։ Պատուհանի մոտ ծիլերը թեքվում են դեպի լույսը։ Հետո Դարվինները որոշ ծիլերի միայն **ծայրը** ծածկեցին փոքրիկ գլխարկներով, և այդ ծիլերը դադարեցին թեքվել։ Ուրեմն ծայրն է զգում լույսը և ընձյուղի մնացած մասին ասում, թե որ կողմ աճի։ Նրանք այդ մասին գրեցին 1880 թվականի մի գրքում։ Պատուհանագոգի քո լոբին նույն կերպ կթեքվի դեպի ապակին։

**Ծառն առանց շարժիչի ջրի պոմպ է։** Արմատները ներծծում են ջուրը, իսկ ցողունն այն բարձրացնում է մինչև վերևի տերևները, նույնիսկ տան չափ բարձր ծառի մեջ։ Հետո ջրի մեծ մասը տերևների մանր անցքերից դուրս է գալիս որպես անտեսանելի գոլորշի և իր հետևից ավելի շատ ջուր է քաշում վեր, ինչպես ծղոտով խմելիս։ Ամռան շոգ օրը մեծ ծառը կարող է բարձրացնել ավելի քան հարյուր լիտր ջուր։`,
      `**Откуда растение знает, где свет?** **Чарльз Дарвин** и его сын Фрэнсис проверили это на крошечных проростках травы. У окна проростки наклоняются к свету. Тогда Дарвины закрыли маленькими колпачками только **кончик** некоторых проростков, и эти проростки перестали наклоняться! Значит, свет чувствует кончик и «сообщает» остальному побегу, куда расти. Они написали об этом в книге 1880 года. Твоя фасоль на подоконнике так же наклонится к стеклу.

**Дерево — водяной насос без мотора.** Корни всасывают воду, а стебель поднимает её до самых верхних листьев, даже у дерева высотой с дом. Потом большая часть воды уходит через крошечные отверстия в листьях невидимым паром и тянет за собой новую воду, как когда пьёшь через соломинку. В жаркий летний день большое дерево может поднять больше ста литров воды.`,
    ),
    ask(2, {
      en: ["Which part of a seedling feels where the light is?", ["The root", "The tip of the shoot", "The seed"], "When the Darwins covered only the tip, the seedlings stopped bending towards the light."],
      hy: ["Ծիլի ո՞ր մասն է զգում, թե որտեղ է լույսը։", ["Արմատը", "Ընձյուղի ծայրը", "Սերմը"], "Երբ Դարվինները ծածկեցին միայն ծայրը, ծիլերը դադարեցին թեքվել դեպի լույսը։"],
      ru: ["Какая часть проростка чувствует, где свет?", ["Корень", "Кончик побега", "Семя"], "Когда Дарвины закрыли только кончик, проростки перестали наклоняться к свету."],
    }),
  ],
  animals: [
    "diagram insect",
    closer(
      `**Why do a cat's eyes glow in the dark?** At the back of a cat's eye there is a thin layer that works like a **mirror**. Light that passes through the eye once is bounced back for a second try, so the cat sees well when it is almost dark. When a car's headlights or a torch shine at a cat at night, that mirror sends the light back and the eyes seem to glow green or yellow. Dogs, cows and foxes have it too; people do not.

**A long winter sleep.** In autumn a **hedgehog** eats a lot and gets fat, then curls up in a nest of leaves and **hibernates**. Its body cools down to only a few degrees, and its heart, which normally beats about 190 times a minute, slows to about 20. It does not eat for months and lives on its fat. Bears also sleep through the winter in dens, but their body cools only a little, so a bear can wake up quite quickly.`,
      `**Ինչու՞ են կատվի աչքերը փայլում մթության մեջ։** Կատվի աչքի հետևի մասում կա բարակ շերտ, որն աշխատում է **հայելու** պես։ Լույսը, որը մեկ անգամ անցել է աչքի միջով, ետ է անդրադառնում երկրորդ փորձի համար, և կատուն լավ է տեսնում, երբ գրեթե մութ է։ Երբ գիշերը մեքենայի լուսարձակները կամ լապտերը լուսավորում են կատվին, այդ հայելին լույսն ետ է ուղարկում, և աչքերը կարծես կանաչ կամ դեղին են փայլում։ Այն ունեն նաև շները, կովերն ու աղվեսները, իսկ մարդիկ՝ ոչ։

**Երկար ձմեռային քուն։** Աշնանը **ոզնին** շատ է ուտում և գիրանում, հետո կծկվում է տերևներից բնի մեջ և **ձմեռային քուն** է մտնում։ Նրա մարմինը սառչում է մինչև ընդամենը մի քանի աստիճան, իսկ սիրտը, որը սովորաբար րոպեում մոտ 190 անգամ է զարկում, դանդաղում է մինչև մոտ 20։ Նա ամիսներով չի ուտում և ապրում է իր ճարպով։ Արջերն էլ են ձմեռը քնում որջերում, բայց նրանց մարմինը քիչ է սառչում, և արջը կարող է բավական արագ արթնանալ։`,
      `**Почему глаза кошки светятся в темноте?** В глубине кошачьего глаза есть тонкий слой, который работает как **зеркало**. Свет, прошедший через глаз один раз, отражается обратно для второй попытки, поэтому кошка хорошо видит, когда почти темно. Когда ночью фары машины или фонарик светят на кошку, это зеркало отправляет свет назад, и глаза будто светятся зелёным или жёлтым. Такое зеркало есть у собак, коров и лис, а у людей нет.

**Долгий зимний сон.** Осенью **ёж** много ест и толстеет, потом сворачивается в гнезде из листьев и впадает в **спячку**. Его тело остывает до нескольких градусов, а сердце, которое обычно бьётся около 190 раз в минуту, замедляется примерно до 20. Он месяцами не ест и живёт за счёт жира. Медведи тоже спят зимой в берлогах, но их тело остывает лишь немного, поэтому медведь может проснуться довольно быстро.`,
    ),
    ask(1, {
      en: ["What does a hedgehog live on while it hibernates?", ["The fat it stored in autumn", "Insects it catches at night", "Leaves from its nest"], "It eats a lot in autumn and then lives for months on its fat, with its heart beating only about 20 times a minute."],
      hy: ["Ինչո՞վ է ապրում ոզնին ձմեռային քնի ժամանակ։", ["Աշնանը կուտակած ճարպով", "Գիշերը բռնած միջատներով", "Իր բնի տերևներով"], "Աշնանը նա շատ է ուտում, հետո ամիսներով ապրում է իր ճարպով, իսկ սիրտը զարկում է րոպեում ընդամենը մոտ 20 անգամ։"],
      ru: ["За счёт чего живёт ёж во время спячки?", ["За счёт жира, накопленного осенью", "Ловит ночью насекомых", "Ест листья из гнезда"], "Осенью он много ест, а потом месяцами живёт за счёт жира, и сердце бьётся всего около 20 раз в минуту."],
    }),
  ],
  "my-homeland": [
    "bars set=armheights",
    closer(
      `**How to find a house quickly.** On most streets in Armenia, as in much of Europe, the houses with **odd** numbers (1, 3, 5…) are on one side of the street and the houses with **even** numbers (2, 4, 6…) are on the other. So if you are looking for house 10 and you are standing at house 7, cross to the other side! The numbers usually start at the end of the street nearer the town centre. Next time you walk along your street, check which side your house is on.

**A big city and many villages.** More than a third of all the people of Armenia live in its capital, **Yerevan**, which has about a million inhabitants. The second and third cities, Gyumri and Vanadzor, are much smaller. At the same time Armenia has many hundreds of villages, high in the mountains and down in the valleys, where people grow apricots and grapes and keep cows and sheep.`,
      `**Ինչպես արագ գտնել տունը։** Հայաստանի փողոցների մեծ մասում, ինչպես Եվրոպայի մեծ մասում, **կենտ** համարներով (1, 3, 5…) տները փողոցի մի կողմում են, իսկ **զույգ** համարներով (2, 4, 6…) տները՝ մյուս կողմում։ Ուրեմն, եթե փնտրում ես 10 համարի տունը և կանգնած ես 7 համարի տան մոտ, անցիր մյուս կողմ։ Համարները սովորաբար սկսվում են փողոցի այն ծայրից, որն ավելի մոտ է քաղաքի կենտրոնին։ Հաջորդ անգամ, երբ քայլես քո փողոցով, ստուգիր, թե որ կողմում է քո տունը։

**Մեկ մեծ քաղաք և շատ գյուղեր։** Հայաստանի բոլոր բնակիչների ավելի քան մեկ երրորդն ապրում է մայրաքաղաքում՝ **Երևանում**, որն ունի մոտ մեկ միլիոն բնակիչ։ Երկրորդ և երրորդ քաղաքները՝ Գյումրին և Վանաձորը, շատ ավելի փոքր են։ Միևնույն ժամանակ Հայաստանն ունի հարյուրավոր գյուղեր՝ լեռներում բարձր և ներքևում՝ հովիտներում, որտեղ մարդիկ ծիրան ու խաղող են աճեցնում և կովեր ու ոչխարներ պահում։`,
      `**Как быстро найти дом.** На большинстве улиц Армении, как и во многих странах Европы, дома с **нечётными** номерами (1, 3, 5…) стоят на одной стороне улицы, а дома с **чётными** номерами (2, 4, 6…) — на другой. Так что если ты ищешь дом 10, а стоишь у дома 7, переходи на другую сторону! Номера обычно начинаются с того конца улицы, который ближе к центру города. Когда в следующий раз пойдёшь по своей улице, проверь, на какой стороне твой дом.

**Один большой город и много сёл.** Больше трети всех жителей Армении живут в её столице, **Ереване**, где около миллиона человек. Второй и третий города, Гюмри и Ванадзор, гораздо меньше. А ещё в Армении много сотен сёл — высоко в горах и внизу в долинах, где люди выращивают абрикосы и виноград и держат коров и овец.`,
    ),
    ask(2, {
      en: ["You are at house 7 and need house 10. What should you do?", ["Walk on along the same side", "Cross to the other side of the street", "Go back to house 1"], "Odd numbers are usually on one side of the street and even numbers on the other."],
      hy: ["Դու 7 համարի տան մոտ ես, իսկ քեզ պետք է 10 համարը։ Ի՞նչ անես։", ["Շարունակես քայլել նույն կողմով", "Անցնես փողոցի մյուս կողմ", "Վերադառնաս 1 համարի տուն"], "Կենտ համարները սովորաբար փողոցի մի կողմում են, իսկ զույգերը՝ մյուս կողմում։"],
      ru: ["Ты у дома 7, а тебе нужен дом 10. Что делать?", ["Идти дальше по той же стороне", "Перейти на другую сторону улицы", "Вернуться к дому 1"], "Нечётные номера обычно на одной стороне улицы, а чётные — на другой."],
    }),
  ],
};
