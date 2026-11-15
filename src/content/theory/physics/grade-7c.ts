import { th } from "../kit";

const r = String.raw;

/** Physics 7, unit 4: pressure of solids, liquids and gases. */
export const physics7c = {
  "pressure-solids": th(
    r`### Why divide by the area?

Put a brick on sand, then cut the same brick's weight between two identical bricks side by side. Each square centimetre of sand now carries the same load as before, and the sand sinks by the same depth. What decides the dent is not the whole force, but the force on **each unit of area**. That is exactly what $p = F/S$ measures: split the surface into $S$ squares of $1\ \text{m}^2$, and each square carries $F/S$ newtons.

### How small is a pascal?

A sheet of office paper has a mass of about $80$ g per square metre. Lying flat on a table, it presses with
$$p = \frac{0{.}08 \cdot 10}{1} = 0{.}8\ \text{Pa}.$$
So one pascal is roughly the pressure of a sheet of paper. That is why kilopascals and megapascals are used in practice.

### The elephant and the heel

| Who | Force | Area | Pressure |
|---|---|---|---|
| elephant, $5000$ kg, on four feet | $50\,000$ N | $4 \cdot 0{.}1 = 0{.}4\ \text{m}^2$ | $125\,000$ Pa |
| woman, $60$ kg, at the moment she steps on one thin heel | $600$ N | $1\ \text{cm}^2 = 0{.}0001\ \text{m}^2$ | $6\,000\,000$ Pa |

The heel presses about **fifty times** harder than the elephant. This is why thin heels leave dents in wooden floors, while an elephant can walk on grass.

### A bed of nails

A person of $700$ N lies on $1000$ nails. If each point has an area of $1\ \text{mm}^2 = 10^{-6}\ \text{m}^2$, the total area is $10^{-3}\ \text{m}^2$, and
$$p = \frac{700}{10^{-3}} = 700\,000\ \text{Pa}.$$
On a **single** nail the pressure would be $1000$ times greater. The trick is not magic: it is the area.`,
    r`### Ինչո՞ւ բաժանել մակերեսի վրա

Աղյուսը դնենք ավազին, իսկ հետո նույն կշիռը բաժանենք կողք կողքի դրված երկու միանման աղյուսների միջև։ Ավազի յուրաքանչյուր քառակուսի սանտիմետրը կրում է նույն բեռը, ինչ առաջ, և ավազը նույն խորությամբ է նստում։ Փոսի խորությունը որոշում է ոչ թե ամբողջ ուժը, այլ **միավոր մակերեսին** ընկնող ուժը։ Հենց դա է չափում $p = F/S$ բանաձևը. մակերեսը բաժանենք $1\ \text{մ}^2$-անոց $S$ քառակուսիների, և յուրաքանչյուր քառակուսի կկրի $F/S$ նյուտոն։

### Որքա՞ն փոքր է պասկալը

Գրասենյակային թղթի մեկ քառակուսի մետրի զանգվածը մոտ $80$ գ է։ Սեղանին հարթ դրված թերթը ճնշում է
$$p = \frac{0{,}08 \cdot 10}{1} = 0{,}8\ \text{Պա}$$
ճնշմամբ։ Այսինքն՝ մեկ պասկալը մոտավորապես թղթի թերթի ճնշումն է։ Այդ պատճառով գործնականում օգտագործում են կիլոպասկալներ և մեգապասկալներ։

### Փիղը և կրունկը

| Ով | Ուժ | Մակերես | Ճնշում |
|---|---|---|---|
| $5000$ կգ փիղ՝ չորս ոտքի վրա | $50\,000$ Ն | $4 \cdot 0{,}1 = 0{,}4\ \text{մ}^2$ | $125\,000$ Պա |
| $60$ կգ կին՝ այն պահին, երբ քայլում է մեկ բարակ կրունկի վրա | $600$ Ն | $1\ \text{սմ}^2 = 0{,}0001\ \text{մ}^2$ | $6\,000\,000$ Պա |

Կրունկը ճնշում է փղից մոտ **հիսուն անգամ** ուժեղ։ Այդ պատճառով բարակ կրունկները փոսիկներ են թողնում փայտե հատակին, իսկ փիղը կարող է քայլել խոտի վրայով։

### Մեխերով մահճակալ

$700$ Ն կշռով մարդը պառկում է $1000$ մեխի վրա։ Եթե յուրաքանչյուր ծայրի մակերեսը $1\ \text{մմ}^2 = 10^{-6}\ \text{մ}^2$ է, ընդհանուր մակերեսը $10^{-3}\ \text{մ}^2$ է, և
$$p = \frac{700}{10^{-3}} = 700\,000\ \text{Պա}$$
**Մեկ** մեխի վրա ճնշումը $1000$ անգամ մեծ կլիներ։ Գաղտնիքը կախարդանքը չէ, այլ մակերեսը։`,
    r`### Почему делить на площадь?

Положим кирпич на песок, а потом разделим тот же вес между двумя одинаковыми кирпичами, поставленными рядом. Каждый квадратный сантиметр песка несёт ту же нагрузку, что и раньше, и песок проседает на ту же глубину. Глубину вмятины определяет не вся сила, а сила, приходящаяся **на единицу площади**. Именно это и измеряет $p = F/S$: разбейте поверхность на $S$ квадратов по $1\ \text{м}^2$, и на каждый квадрат придётся $F/S$ ньютонов.

### Насколько мал паскаль?

Масса квадратного метра офисной бумаги около $80$ г. Лист, лежащий на столе, давит с давлением
$$p = \frac{0{,}08 \cdot 10}{1} = 0{,}8\ \text{Па}.$$
Итак, один паскаль примерно равен давлению листа бумаги. Поэтому на практике пользуются килопаскалями и мегапаскалями.

### Слон и каблук

| Кто | Сила | Площадь | Давление |
|---|---|---|---|
| слон, $5000$ кг, на четырёх ногах | $50\,000$ Н | $4 \cdot 0{,}1 = 0{,}4\ \text{м}^2$ | $125\,000$ Па |
| женщина, $60$ кг, в момент шага на один тонкий каблук | $600$ Н | $1\ \text{см}^2 = 0{,}0001\ \text{м}^2$ | $6\,000\,000$ Па |

Каблук давит примерно в **пятьдесят раз** сильнее слона. Поэтому тонкие каблуки оставляют вмятины на деревянном полу, а слон может ходить по траве.

### Доска с гвоздями

Человек весом $700$ Н ложится на $1000$ гвоздей. Если площадь каждого острия $1\ \text{мм}^2 = 10^{-6}\ \text{м}^2$, то общая площадь $10^{-3}\ \text{м}^2$ и
$$p = \frac{700}{10^{-3}} = 700\,000\ \text{Па}.$$
На **одном** гвозде давление было бы в $1000$ раз больше. Секрет не в волшебстве, а в площади.`,
  ),

  "pressure-gases": th(
    r`### Counting the hits

A cubic metre of air near the ground holds about $2{.}7 \cdot 10^{25}$ molecules, flying at about $500$ m/s. Every second, each square centimetre of your skin is hit roughly $10^{23}$ times. The pressure of a gas is the **average** push of this hail of impacts.

### Why squeezing raises the pressure

Take a gas in a cylinder and push the piston so that the volume halves, keeping the temperature the same. The same molecules now crowd into half the space, so each cubic centimetre has **twice** as many of them, and twice as many hit each square centimetre of wall every second. The pressure doubles:
$$p \cdot V = \text{const}\quad(\text{same gas, same temperature}).$$
This is **Boyle's law** (Robert Boyle, 1662; Edme Mariotte found it independently in 1676).

*Example.* A bicycle pump holds $200\ \text{cm}^3$ of air at $100$ kPa. Pushed to $50\ \text{cm}^3$, the volume falls $4$ times, so the pressure rises to $400$ kPa.

### Why heating raises it faster than you might think

If the molecules move twice as fast, two things happen at once: each hit is **twice as strong**, and the hits come **twice as often**. The pressure grows $2 \cdot 2 = 4$ times. In high school you will see that the pressure is proportional to the average **kinetic energy** of the molecules.

### Why the weight of the gas usually doesn't matter

In a liquid the pressure grows with depth because the upper layers press on the lower. In a gas the same is true, but air is about $800$ times lighter than water. In a $1$ m tall bottle, the pressure at the bottom is greater than at the top by only about $12$ Pa out of $100\,000$. So in any ordinary vessel the gas pressure is the same everywhere. Only over hundreds of metres, in the atmosphere, does the weight of air matter.`,
    r`### Հարվածները հաշվենք

Գետնի մոտ օդի մեկ խորանարդ մետրում կա մոտ $2{,}7 \cdot 10^{25}$ մոլեկուլ, որոնք թռչում են մոտ $500$ մ/վ արագությամբ։ Ամեն վայրկյան ձեր մաշկի յուրաքանչյուր քառակուսի սանտիմետրին հարվածում են մոտ $10^{23}$ անգամ։ Գազի ճնշումն այս հարվածների տարափի **միջին** հրումն է։

### Ինչո՞ւ է սեղմելը մեծացնում ճնշումը

Վերցնենք գազը գլանում և մխոցը հրենք այնպես, որ ծավալը կրկնակի փոքրանա, իսկ ջերմաստիճանը մնա նույնը։ Նույն մոլեկուլներն այժմ խմբվում են կես տարածության մեջ, ուստի յուրաքանչյուր խորանարդ սանտիմետրում դրանք **երկու անգամ** ավելի շատ են, և պատի յուրաքանչյուր քառակուսի սանտիմետրին ամեն վայրկյան հարվածում են երկու անգամ ավելի շատ մոլեկուլներ։ Ճնշումը կրկնապատկվում է.
$$p \cdot V = \text{const}$$
(նույն գազ, նույն ջերմաստիճան)։ Սա **Բոյլի օրենքն** է (Ռոբերտ Բոյլ, 1662 թ., Էդմ Մարիոտը այն անկախ հայտնաբերեց 1676 թվականին)։

*Օրինակ։* Հեծանիվի պոմպում կա $200\ \text{սմ}^3$ օդ $100$ կՊա ճնշմամբ։ Մինչև $50\ \text{սմ}^3$ սեղմելիս ծավալը փոքրանում է $4$ անգամ, ուստի ճնշումը դառնում է $400$ կՊա։

### Ինչո՞ւ է տաքացումը ճնշումը մեծացնում սպասվածից արագ

Եթե մոլեկուլները երկու անգամ արագ շարժվեն, միանգամից երկու բան է տեղի ունենում. յուրաքանչյուր հարված **երկու անգամ ուժեղ** է, և հարվածները լինում են **երկու անգամ հաճախ**։ Ճնշումը մեծանում է $2 \cdot 2 = 4$ անգամ։ Ավագ դպրոցում կտեսնեք, որ ճնշումը համեմատական է մոլեկուլների միջին **կինետիկ էներգիային**։

### Ինչո՞ւ գազի կշիռը սովորաբար նշանակություն չունի

Հեղուկում ճնշումը խորության հետ մեծանում է, քանի որ վերին շերտերը ճնշում են ստորիններին։ Գազում նույնն է, բայց օդը ջրից մոտ $800$ անգամ թեթև է։ $1$ մ բարձրությամբ շշում ճնշումը հատակին վերևից մեծ է ընդամենը մոտ $12$ Պա-ով՝ $100\,000$-ից։ Այդ պատճառով սովորական ցանկացած անոթում գազի ճնշումն ամենուր նույնն է։ Միայն հարյուրավոր մետրերի վրա՝ մթնոլորտում, օդի կշիռը նշանակություն է ստանում։`,
    r`### Считаем удары

В кубическом метре воздуха у земли около $2{,}7 \cdot 10^{25}$ молекул, летящих со скоростью около $500$ м/с. Каждую секунду в каждый квадратный сантиметр вашей кожи они ударяют примерно $10^{23}$ раз. Давление газа есть **средний** напор этого града ударов.

### Почему сжатие повышает давление

Возьмём газ в цилиндре и вдвинем поршень так, чтобы объём уменьшился вдвое, а температура не изменилась. Те же молекулы теснятся теперь в половине пространства, значит, в каждом кубическом сантиметре их **вдвое** больше, и в каждый квадратный сантиметр стенки каждую секунду ударяет вдвое больше молекул. Давление удваивается:
$$p \cdot V = \text{const}\quad(\text{тот же газ, та же температура}).$$
Это **закон Бойля – Мариотта** (Роберт Бойль, 1662; Эдм Мариотт открыл его независимо в 1676 году).

*Пример.* В велосипедном насосе $200\ \text{см}^3$ воздуха при $100$ кПа. При сжатии до $50\ \text{см}^3$ объём уменьшается в $4$ раза, и давление растёт до $400$ кПа.

### Почему нагревание повышает давление быстрее, чем кажется

Если молекулы движутся вдвое быстрее, происходят сразу две вещи: каждый удар **вдвое сильнее**, и удары случаются **вдвое чаще**. Давление растёт в $2 \cdot 2 = 4$ раза. В старших классах вы увидите, что давление пропорционально средней **кинетической энергии** молекул.

### Почему вес газа обычно не важен

В жидкости давление растёт с глубиной, потому что верхние слои давят на нижние. В газе так же, но воздух примерно в $800$ раз легче воды. В бутылке высотой $1$ м давление у дна больше, чем у горлышка, всего на $12$ Па из $100\,000$. Поэтому в любом обычном сосуде давление газа всюду одинаково. Только на сотнях метров, в атмосфере, вес воздуха становится заметным.`,
  ),

  "pascals-law": th(
    r`### Deriving $p = \rho g h$

Imagine a vertical column of liquid of height $h$ standing on a base of area $S$.

1. Its volume is $V = S h$.
2. Its mass is $m = \rho V = \rho S h$.
3. Its weight is $P = m g = \rho S h g$.
4. This weight rests on the base, so the pressure there is
$$p = \frac{P}{S} = \frac{\rho S h g}{S} = \rho g h.$$

The area $S$ **cancels**. That is the whole reason the pressure depends only on the depth and the liquid, and not on how wide the vessel is.

### Why the pressure acts equally in all directions

Picture a tiny cube of liquid somewhere inside. If the push on its left face were stronger than on its right face, the cube would start to move, and the liquid would not be at rest. In a liquid at rest, the pushes on opposite faces must balance, and since the liquid flows freely, it cannot hold a difference in any direction. That is Pascal's law seen from the inside.

### The hydrostatic paradox

Three vessels with the same bottom area and the same water depth: one narrow at the top, one straight, one wide. They hold very different amounts of water, yet the force on the bottom is **the same**, $\rho g h S$. The sloping walls of the wide vessel carry the extra water; in the narrow one, the walls press down on the liquid.

*Pascal's barrel.* The story goes that Pascal fixed a thin tube $10$ m tall into the lid of a full barrel and poured in water. A tube of $1\ \text{cm}^2$ holds only $1$ litre over $10$ m, but it adds
$$\rho g h = 1000 \cdot 10 \cdot 10 = 100\,000\ \text{Pa}.$$
On a lid of $0{.}2\ \text{m}^2$ that is $20\,000$ N, the weight of two tonnes. The barrel burst.

### The deepest place on Earth

The Mariana Trench is about $11$ km deep. With sea water ($1030\ \text{kg/m}^3$):
$$p \approx 1030 \cdot 10 \cdot 11\,000 \approx 1{.}1 \cdot 10^8\ \text{Pa},$$
about $1100$ times the pressure of the atmosphere. On each square centimetre of a submarine it is like the weight of a tonne. Note that the total pressure under water is $p_0 + \rho g h$: at a depth of $10$ m a diver feels **twice** the atmospheric pressure.`,
    r`### $p = \rho g h$ բանաձևի արտածումը

Պատկերացնենք $h$ բարձրությամբ հեղուկի ուղղաձիգ սյուն, որը կանգնած է $S$ մակերեսով հիմքի վրա։

1. Նրա ծավալը $V = S h$ է։
2. Զանգվածը $m = \rho V = \rho S h$ է։
3. Կշիռը $P = m g = \rho S h g$ է։
4. Այս կշիռը հենվում է հիմքին, ուստի այնտեղ ճնշումը
$$p = \frac{P}{S} = \frac{\rho S h g}{S} = \rho g h$$

$S$ մակերեսը **կրճատվում է**։ Հենց սա է պատճառը, որ ճնշումը կախված է միայն խորությունից և հեղուկից, և ոչ թե անոթի լայնությունից։

### Ինչո՞ւ է ճնշումը բոլոր ուղղություններով նույնը

Պատկերացրեք հեղուկի մի փոքրիկ խորանարդ ինչ-որ տեղ ներսում։ Եթե նրա ձախ նիստին ազդող հրումն ավելի ուժեղ լիներ, քան աջին, խորանարդը կսկսեր շարժվել, և հեղուկը դադարի մեջ չէր լինի։ Դադարի վիճակում գտնվող հեղուկում հանդիպակաց նիստերին ազդող հրումները պետք է հավասարակշռվեն, իսկ քանի որ հեղուկն ազատ հոսում է, այն չի կարող տարբերություն պահել ոչ մի ուղղությամբ։ Սա Պասկալի օրենքն է՝ ներսից նայած։

### Հիդրոստատիկ պարադոքս

Երեք անոթ՝ հատակի նույն մակերեսով և ջրի նույն խորությամբ. մեկը վերևում նեղ է, մյուսը՝ ուղիղ, երրորդը՝ լայն։ Դրանցում ջրի քանակը շատ տարբեր է, բայց հատակին ազդող ուժը **նույնն** է՝ $\rho g h S$։ Լայն անոթի թեք պատերն են կրում ավելորդ ջուրը, իսկ նեղ անոթում պատերն են ճնշում հեղուկին վերևից։

*Պասկալի տակառը։* Պատմում են, որ Պասկալը լի տակառի կափարիչին ամրացրեց $10$ մ բարձրությամբ բարակ խողովակ և դրա մեջ ջուր լցրեց։ $1\ \text{սմ}^2$ հատույթով խողովակում $10$ մ երկարությամբ տեղավորվում է ընդամենը $1$ լիտր ջուր, բայց այն ավելացնում է
$$\rho g h = 1000 \cdot 10 \cdot 10 = 100\,000\ \text{Պա}$$
$0{,}2\ \text{մ}^2$ կափարիչի վրա դա $20\,000$ Ն է՝ երկու տոննայի կշիռ։ Տակառը պայթեց։

### Երկրի ամենախոր տեղը

Մարիանյան իջվածքի խորությունը մոտ $11$ կմ է։ Ծովի ջրի համար ($1030\ \text{կգ/մ}^3$)՝
$$p \approx 1030 \cdot 10 \cdot 11\,000 \approx 1{,}1 \cdot 10^8\ \text{Պա}$$
մթնոլորտային ճնշումից մոտ $1100$ անգամ մեծ։ Սուզանավի յուրաքանչյուր քառակուսի սանտիմետրին դա նման է մեկ տոննայի կշռի։ Նկատենք, որ ջրի տակ լրիվ ճնշումը $p_0 + \rho g h$ է. $10$ մ խորության վրա ջրասուզակը զգում է մթնոլորտայինից **երկու անգամ** մեծ ճնշում։`,
    r`### Вывод формулы $p = \rho g h$

Представим вертикальный столб жидкости высотой $h$, стоящий на основании площадью $S$.

1. Его объём $V = S h$.
2. Его масса $m = \rho V = \rho S h$.
3. Его вес $P = m g = \rho S h g$.
4. Этот вес опирается на основание, поэтому давление там
$$p = \frac{P}{S} = \frac{\rho S h g}{S} = \rho g h.$$

Площадь $S$ **сокращается**. Именно поэтому давление зависит только от глубины и рода жидкости, а не от ширины сосуда.

### Почему давление одинаково во всех направлениях

Представьте крошечный кубик жидкости где-то внутри. Если бы напор на его левую грань был сильнее, чем на правую, кубик начал бы двигаться, и жидкость не была бы в покое. В покоящейся жидкости напоры на противоположные грани уравновешены, а так как жидкость свободно течёт, она не может удерживать разницу ни в каком направлении. Это закон Паскаля, увиденный изнутри.

### Гидростатический парадокс

Три сосуда с одинаковой площадью дна и одинаковой глубиной воды: один сужается кверху, другой прямой, третий расширяется. Воды в них очень разное количество, но сила давления на дно **одна и та же**, $\rho g h S$. Лишнюю воду в широком сосуде держат наклонные стенки, а в узком стенки сами давят на жидкость сверху.

*Бочка Паскаля.* Рассказывают, что Паскаль вставил в крышку полной бочки тонкую трубку высотой $10$ м и налил в неё воды. В трубке сечением $1\ \text{см}^2$ на $10$ м помещается всего $1$ литр, но она добавляет
$$\rho g h = 1000 \cdot 10 \cdot 10 = 100\,000\ \text{Па}.$$
На крышку площадью $0{,}2\ \text{м}^2$ это $20\,000$ Н, вес двух тонн. Бочка лопнула.

### Самое глубокое место Земли

Глубина Марианской впадины около $11$ км. Для морской воды ($1030\ \text{кг/м}^3$):
$$p \approx 1030 \cdot 10 \cdot 11\,000 \approx 1{,}1 \cdot 10^8\ \text{Па},$$
примерно в $1100$ раз больше атмосферного. На каждый квадратный сантиметр батискафа это как вес тонны. Заметим, что полное давление под водой равно $p_0 + \rho g h$: на глубине $10$ м водолаз ощущает давление **вдвое** больше атмосферного.`,
  ),

  "communicating-vessels": th(
    r`### Why the levels must be equal

Look at a thin slice of liquid in the horizontal tube that joins two vessels. From the left it is pushed by the pressure $\rho g h_1$ of the column above it, from the right by $\rho g h_2$. If $h_1 > h_2$, the push from the left is stronger and the liquid flows to the right, lowering the left level and raising the right one. It stops only when
$$\rho g h_1 = \rho g h_2 \;\Rightarrow\; h_1 = h_2.$$
Nothing in this argument depends on the shape or width of the vessels.

### Two liquids: measure from the boundary

Pour mercury into a U-tube, then add water to the right arm. The mercury is pushed down on the right and up on the left. Where should the heights be measured from?

Draw a horizontal line through the **boundary** between water and mercury in the right arm. Below this line both arms contain only mercury, so the pressures at equal depths there are equal. At the line itself, the right side carries a water column $h_w$, the left side a mercury column $h_m$ above the same line:
$$\rho_w h_w = \rho_m h_m \;\Rightarrow\; h_m = \frac{1000}{13\,600}\, h_w.$$
A water column of $13{.}6$ cm is balanced by only $1$ cm of mercury. Measuring both heights from the bottom of the tube is the most common mistake in such problems.

### Fountains without pumps

The fountains of Peterhof near Saint Petersburg have worked since the 1720s without a single pump. Water is collected in ponds on higher ground about $20$ km away and runs down in pipes. The pond and the fountain nozzle are communicating vessels, so the water tries to rise to the level of the pond. Friction and air resistance keep the jets lower, but some still reach about $20$ m.

### When the rule fails

In very thin tubes, under about a millimetre, water climbs **higher** than in the wide vessel, because it is attracted to the glass (capillarity). That is why a paper towel soaks up water. For ordinary teapots and water towers this effect is tiny.`,
    r`### Ինչո՞ւ պետք է մակարդակները հավասար լինեն

Դիտարկենք հեղուկի բարակ շերտ երկու անոթը միացնող հորիզոնական խողովակում։ Ձախից այն հրում է իր վերևում գտնվող սյան $\rho g h_1$ ճնշումը, աջից՝ $\rho g h_2$-ը։ Եթե $h_1 > h_2$, ձախից հրումն ուժեղ է, և հեղուկը հոսում է աջ՝ իջեցնելով ձախ մակարդակը և բարձրացնելով աջը։ Այն կանգ է առնում միայն այն ժամանակ, երբ
$$\rho g h_1 = \rho g h_2 \;\Rightarrow\; h_1 = h_2$$
Այս դատողության մեջ ոչինչ կախված չէ անոթների ձևից կամ լայնությունից։

### Երկու հեղուկ. չափեք սահմանից

U-աձև խողովակի մեջ սնդիկ լցնենք, իսկ հետո աջ ծնկում ջուր ավելացնենք։ Սնդիկն աջում իջնում է, իսկ ձախում՝ բարձրանում։ Որտեղի՞ց չափել բարձրությունները։

Աջ ծնկում ջրի և սնդիկի **սահմանով** հորիզոնական գիծ տանենք։ Այդ գծից ներքև երկու ծնկում էլ միայն սնդիկ է, ուստի այնտեղ հավասար խորությունների վրա ճնշումները հավասար են։ Հենց գծի վրա աջ կողմը կրում է $h_1$ բարձրությամբ ջրի սյուն, ձախը՝ նույն գծից վեր $h_2$ բարձրությամբ սնդիկի սյուն.
$$1000 \cdot h_1 = 13\,600 \cdot h_2 \;\Rightarrow\; h_2 = \frac{1000}{13\,600}\, h_1$$
$13{,}6$ սմ ջրի սյունը հավասարակշռվում է ընդամենը $1$ սմ սնդիկով։ Երկու բարձրությունն էլ խողովակի հատակից չափելը նման խնդիրների ամենատարածված սխալն է։

### Շատրվաններ առանց պոմպերի

Սանկտ Պետերբուրգի մոտ գտնվող Պետերհոֆի շատրվանները 1720-ական թվականներից աշխատում են առանց մեկ պոմպի։ Ջուրը հավաքվում է մոտ $20$ կմ հեռավորության վրա՝ ավելի բարձր տեղում գտնվող լճակներում, և խողովակներով իջնում է։ Լճակը և շատրվանի փողակը հաղորդակից անոթներ են, ուստի ջուրը ձգտում է բարձրանալ լճակի մակարդակին։ Շփումը և օդի դիմադրությունը շիթերը ցածր են պահում, բայց որոշները հասնում են մոտ $20$ մ-ի։

### Երբ կանոնը չի գործում

Շատ բարակ խողովակներում՝ մոտ մեկ միլիմետրից նեղ, ջուրը բարձրանում է լայն անոթից **ավելի բարձր**, քանի որ այն ձգվում է դեպի ապակին (մազականություն)։ Դրա համար է թղթե սրբիչը ներծծում ջուրը։ Սովորական թեյնիկների և ջրաշտարակների համար այս երևույթը չնչին է։`,
    r`### Почему уровни должны быть равны

Рассмотрим тонкий слой жидкости в горизонтальной трубке, соединяющей два сосуда. Слева на него давит столб над ним с давлением $\rho g h_1$, справа с давлением $\rho g h_2$. Если $h_1 > h_2$, левый напор сильнее, и жидкость перетекает вправо, понижая левый уровень и повышая правый. Она остановится только тогда, когда
$$\rho g h_1 = \rho g h_2 \;\Rightarrow\; h_1 = h_2.$$
Ничто в этом рассуждении не зависит от формы или ширины сосудов.

### Две жидкости: отсчитывайте от границы

Нальём в U-образную трубку ртуть, а затем добавим в правое колено воду. Ртуть справа опускается, а слева поднимается. От какого уровня отсчитывать высоты?

Проведём горизонтальную линию через **границу** воды и ртути в правом колене. Ниже этой линии в обоих коленах только ртуть, поэтому там на равных глубинах давления равны. На самой линии справа давит столб воды $h_{\text{в}}$, слева столб ртути $h_{\text{р}}$ над той же линией:
$$\rho_{\text{в}} h_{\text{в}} = \rho_{\text{р}} h_{\text{р}} \;\Rightarrow\; h_{\text{р}} = \frac{1000}{13\,600}\, h_{\text{в}}.$$
Столб воды $13{,}6$ см уравновешивается всего $1$ см ртути. Отсчитывать обе высоты от дна трубки — самая частая ошибка в таких задачах.

### Фонтаны без насосов

Фонтаны Петергофа под Санкт-Петербургом с 1720-х годов работают без единого насоса. Вода собирается в прудах на возвышенности примерно в $20$ км и стекает по трубам. Пруд и сопло фонтана — сообщающиеся сосуды, поэтому вода стремится подняться до уровня пруда. Трение и сопротивление воздуха делают струи ниже, но некоторые всё равно достигают около $20$ м.

### Когда правило нарушается

В очень тонких трубках, уже миллиметра, вода поднимается **выше**, чем в широком сосуде, потому что притягивается к стеклу (капиллярность). Поэтому бумажное полотенце впитывает воду. Для обычных чайников и водонапорных башен этот эффект ничтожен.`,
  ),

  "atmospheric-pressure": th(
    r`### Ten tonnes on every square metre

Normal atmospheric pressure $101\,300$ Pa means a force of $101\,300$ N on every square metre. That is the weight of about $10$ tonnes, the weight of the whole column of air above that square metre, all the way to space.

From this we can **weigh the entire atmosphere**. The Earth's surface is $S = 4\pi R^2 \approx 5{.}1 \cdot 10^{14}\ \text{m}^2$, so
$$m = \frac{p_0 S}{g} \approx \frac{101\,300 \cdot 5{.}1 \cdot 10^{14}}{9{.}8} \approx 5 \cdot 10^{18}\ \text{kg}.$$
About five million billion tonnes, roughly one millionth of the Earth's mass.

### Why we are not crushed

On the palm of your hand the air presses with about $1000$ N. You do not feel it because the fluids and gases inside your body press **outward** with the same pressure, and air presses from all sides equally. Only a **difference** of pressure is felt: ears pop in a fast lift or a plane.

### The Magdeburg hemispheres, counted

Guericke's hemispheres had a diameter of about $50$ cm. What force holds them together? It is not the pressure times the curved surface. The correct area is the flat **circle** where the hemispheres meet:
$$F = p_0 \cdot \pi r^2 \approx 101\,300 \cdot 3{.}14 \cdot 0{.}25^2 \approx 20\,000\ \text{N}.$$
Why the circle? Imagine closing one hemisphere with a flat lid and putting it in air. It does not fly away on its own, so the push on the dome is exactly balanced by the push on the lid, $p_0 \pi r^2$. The horses had to beat two tonnes of force, and Guericke's pump could not even remove all the air.

### Pascal climbs a mountain

If air has weight, the pressure must be lower on a mountain. In 1648 Pascal asked his brother-in-law Florin Périer to carry a Torricelli tube up the Puy de Dôme, about $1000$ m above the town. The mercury column at the top was about $8$ cm shorter. Air has weight, and less of it lies above a mountain.

Near the ground, rising by $\Delta h$ removes a layer of air of weight $\rho_{\text{air}} g \Delta h$ per square metre. For a drop of $1$ mm Hg $\approx 133$ Pa:
$$\Delta h = \frac{133}{\rho_{\text{air}}\, g} \approx \frac{133}{1{.}2 \cdot 9{.}8} \approx 11\ \text{m},$$
which is where the rule "about $1$ mm Hg per $10$–$12$ m" comes from. Higher up, the air thins and the rule fails: at about $5{.}5$ km the pressure is already **half** of normal.`,
    r`### Տասը տոննա յուրաքանչյուր քառակուսի մետրի վրա

$101\,300$ Պա նորմալ մթնոլորտային ճնշումը նշանակում է $101\,300$ Ն ուժ յուրաքանչյուր քառակուսի մետրի վրա։ Դա մոտ $10$ տոննայի կշիռ է՝ այդ քառակուսի մետրի վերևում մինչև տիեզերք ձգվող օդի ամբողջ սյան կշիռը։

Սրանից կարելի է **կշռել ամբողջ մթնոլորտը**։ Երկրի մակերևույթը $S = 4\pi R^2 \approx 5{,}1 \cdot 10^{14}\ \text{մ}^2$ է, ուստի
$$m = \frac{p_0 S}{g} \approx \frac{101\,300 \cdot 5{,}1 \cdot 10^{14}}{9{,}8} \approx 5 \cdot 10^{18}\ \text{կգ}$$
Մոտ հինգ միլիոն միլիարդ տոննա՝ Երկրի զանգվածի մոտ մեկ միլիոներորդը։

### Ինչո՞ւ մեզ չի ճզմում

Ձեր ափին օդը ճնշում է մոտ $1000$ Ն ուժով։ Դուք դա չեք զգում, քանի որ մարմնի ներսում գտնվող հեղուկներն ու գազերը նույն ճնշմամբ ճնշում են **դեպի դուրս**, իսկ օդը բոլոր կողմերից ճնշում է հավասարապես։ Զգացվում է միայն ճնշման **տարբերությունը**. արագ վերելակում կամ ինքնաթիռում ականջները «խցանվում» են։

### Մագդեբուրգյան կիսագնդերը՝ հաշվարկով

Գերիկեի կիսագնդերի տրամագիծը մոտ $50$ սմ էր։ Ի՞նչ ուժ է դրանք իրար սեղմում։ Դա ճնշման և կոր մակերևույթի արտադրյալը չէ։ Ճիշտ մակերեսը հարթ **շրջանն** է, որտեղ կիսագնդերը հանդիպում են.
$$F = p_0 \cdot \pi r^2 \approx 101\,300 \cdot 3{,}14 \cdot 0{,}25^2 \approx 20\,000\ \text{Ն}$$
Ինչո՞ւ շրջանը։ Պատկերացրեք, որ կիսագունդը փակել ենք հարթ կափարիչով և դրել օդում։ Այն ինքն իրեն չի թռչում, ուստի գմբեթին ազդող հրումը ճշգրիտ հավասարակշռվում է կափարիչին ազդող $p_0 \pi r^2$ հրումով։ Ձիերը պետք է հաղթահարեին երկու տոննա ուժ, իսկ Գերիկեի պոմպը նույնիսկ ամբողջ օդը չէր կարողանում հանել։

### Պասկալը բարձրանում է լեռ

Եթե օդը կշիռ ունի, լեռան վրա ճնշումը պետք է ցածր լինի։ 1648 թվականին Պասկալը խնդրեց իր փեսային՝ Ֆլորեն Պերիեին, Տորիչելիի խողովակը բարձրացնել Պյուի դը Դոմ լեռը՝ քաղաքից մոտ $1000$ մ բարձր։ Գագաթին սնդիկի սյունը մոտ $8$ սմ-ով կարճ էր։ Օդը կշիռ ունի, և լեռան վրա դրանից ավելի քիչ է գտնվում։

Գետնի մոտ $\Delta h$-ով բարձրանալիս յուրաքանչյուր քառակուսի մետրի վրայից հեռանում է $\rho_{\text{օդ}} g \Delta h$ կշռով օդի շերտ։ $1$ մմ ս.ս. $\approx 133$ Պա նվազման համար՝
$$\Delta h = \frac{133}{\rho_{\text{օդ}}\, g} \approx \frac{133}{1{,}2 \cdot 9{,}8} \approx 11\ \text{մ}$$
Այստեղից է «մոտ $1$ մմ ս.ս. $10$–$12$ մ-ի համար» կանոնը։ Ավելի բարձր օդը նոսրանում է, և կանոնը չի գործում. մոտ $5{,}5$ կմ բարձրության վրա ճնշումն արդեն նորմալի **կեսն** է։`,
    r`### Десять тонн на каждый квадратный метр

Нормальное атмосферное давление $101\,300$ Па означает силу $101\,300$ Н на каждый квадратный метр. Это вес около $10$ тонн, вес всего столба воздуха над этим квадратным метром до самого космоса.

Отсюда можно **взвесить всю атмосферу**. Площадь поверхности Земли $S = 4\pi R^2 \approx 5{,}1 \cdot 10^{14}\ \text{м}^2$, поэтому
$$m = \frac{p_0 S}{g} \approx \frac{101\,300 \cdot 5{,}1 \cdot 10^{14}}{9{,}8} \approx 5 \cdot 10^{18}\ \text{кг}.$$
Около пяти миллионов миллиардов тонн, примерно миллионная часть массы Земли.

### Почему нас не раздавливает

На ладонь воздух давит с силой около $1000$ Н. Вы этого не чувствуете, потому что жидкости и газы внутри тела давят **наружу** с тем же давлением, а воздух давит со всех сторон одинаково. Ощущается только **разность** давлений: в быстром лифте или самолёте «закладывает» уши.

### Магдебургские полушария в цифрах

Диаметр полушарий Герике был около $50$ см. Какая сила их сжимает? Это не давление, умноженное на кривую поверхность. Правильная площадь — плоский **круг**, по которому полушария соприкасаются:
$$F = p_0 \cdot \pi r^2 \approx 101\,300 \cdot 3{,}14 \cdot 0{,}25^2 \approx 20\,000\ \text{Н}.$$
Почему круг? Представьте, что полушарие закрыто плоской крышкой и находится в воздухе. Само оно никуда не улетает, значит, напор на купол в точности уравновешен напором на крышку, $p_0 \pi r^2$. Лошадям нужно было преодолеть силу в две тонны, а насос Герике даже не мог откачать весь воздух.

### Паскаль поднимается в гору

Если воздух имеет вес, то на горе давление должно быть меньше. В 1648 году Паскаль попросил своего зятя Флорена Перье поднять трубку Торричелли на гору Пюи-де-Дом, примерно на $1000$ м выше города. На вершине столбик ртути оказался примерно на $8$ см короче. Воздух имеет вес, и над горой его меньше.

У земли подъём на $\Delta h$ убирает слой воздуха весом $\rho_{\text{возд}} g \Delta h$ с каждого квадратного метра. Для уменьшения на $1$ мм рт. ст. $\approx 133$ Па:
$$\Delta h = \frac{133}{\rho_{\text{возд}}\, g} \approx \frac{133}{1{,}2 \cdot 9{,}8} \approx 11\ \text{м},$$
откуда и правило «около $1$ мм рт. ст. на $10$–$12$ м». Выше воздух разрежается, и правило перестаёт работать: на высоте около $5{,}5$ км давление уже **вдвое** меньше нормального.`,
  ),

  "barometer-manometer": th(
    r`### The press does not cheat

A hydraulic press multiplies force. Does it multiply work? Push the small piston down by $h_1$. The oil it pushes out has volume $S_1 h_1$, and the same volume must lift the large piston by $h_2$:
$$S_1 h_1 = S_2 h_2 \;\Rightarrow\; \frac{h_1}{h_2} = \frac{S_2}{S_1} = \frac{F_2}{F_1}.$$
So $F_1 h_1 = F_2 h_2$: the work done on the small piston equals the work done by the large one. The press gains in force exactly as many times as it loses in distance.

*Example.* A car jack with $S_2/S_1 = 100$ lifts a car by $10$ cm. The small piston must travel $100 \cdot 10 = 1000$ cm $= 10$ m in total. That is why you pump the handle many times: valves let fresh oil in after every short stroke.

### Why no suction pump lifts water above 10 m

A suction pump does not pull water. It only removes the air above it, and the **atmosphere** pushes the water up. The highest it can push is the column whose pressure equals $p_0$:
$$h_{\max} = \frac{p_0}{\rho g} = \frac{101\,300}{1000 \cdot 9{.}8} \approx 10{.}3\ \text{m}.$$
Florentine well-diggers in Galileo's time found that their pumps stopped at about this height. Galileo wrote about the puzzle, and his pupil Torricelli solved it in 1643 by replacing water with mercury. Deep wells today use **submersible** pumps placed at the bottom that **push** water up.

### Gauge pressure and absolute pressure

A tyre gauge showing $2{.}2$ bar ($220$ kPa) measures how much the pressure inside **exceeds** the atmosphere. The actual (absolute) pressure in the tyre is about $220 + 100 = 320$ kPa. A flat tyre has gauge pressure zero, but it is still full of air at atmospheric pressure.

### The aneroid inside

In an aneroid barometer the box has almost no air inside, so the atmosphere would crush it flat. A strong spring holds the walls apart. When the outside pressure rises by $1$ mm Hg, the lid moves by only a few micrometres. A lever system magnifies this hundreds of times so that the pointer moves visibly.`,
    r`### Մամլիչը չի խաբում

Հիդրավլիկ մամլիչը բազմապատկում է ուժը։ Իսկ աշխատանքը բազմապատկո՞ւմ է։ Փոքր մխոցը $h_1$-ով իջեցնենք։ Նրա դուրս մղած յուղի ծավալը $S_1 h_1$ է, և նույն ծավալը պետք է մեծ մխոցը բարձրացնի $h_2$-ով.
$$S_1 h_1 = S_2 h_2 \;\Rightarrow\; \frac{h_1}{h_2} = \frac{S_2}{S_1} = \frac{F_2}{F_1}$$
Ուրեմն $F_1 h_1 = F_2 h_2$. փոքր մխոցի վրա կատարված աշխատանքը հավասար է մեծ մխոցի կատարած աշխատանքին։ Մամլիչը ուժում շահում է ճիշտ այնքան անգամ, որքան կորցնում է ճանապարհում։

*Օրինակ։* $S_2/S_1 = 100$ ունեցող ամբարձիչը մեքենան բարձրացնում է $10$ սմ-ով։ Փոքր մխոցը ընդհանուր առմամբ պետք է անցնի $100 \cdot 10 = 1000$ սմ $= 10$ մ։ Դրա համար է բռնակը շատ անգամ սեղմում. յուրաքանչյուր կարճ սեղմումից հետո փականները թարմ յուղ են ներս թողնում։

### Ինչո՞ւ ոչ մի ներծծող պոմպ ջուրը 10 մ-ից բարձր չի բարձրացնում

Ներծծող պոմպը ջուրը չի քաշում։ Այն միայն հեռացնում է նրա վերևի օդը, իսկ ջուրը վեր է հրում **մթնոլորտը**։ Առավելագույնը, որքան այն կարող է հրել, այն սյունն է, որի ճնշումը հավասար է $p_0$-ին.
$$h_{\max} = \frac{p_0}{\rho g} = \frac{101\,300}{1000 \cdot 9{,}8} \approx 10{,}3\ \text{մ}$$
Գալիլեյի ժամանակ ֆլորենտացի ջրհոր փորողները նկատեցին, որ իրենց պոմպերը կանգ են առնում մոտավորապես այս բարձրության վրա։ Գալիլեյը գրել է այդ հանելուկի մասին, իսկ նրա աշակերտ Տորիչելին այն լուծեց 1643 թվականին՝ ջուրը փոխարինելով սնդիկով։ Այսօր խոր ջրհորներում օգտագործում են հատակին տեղադրված **ընկղմվող** պոմպեր, որոնք ջուրը վեր են **հրում**։

### Ավելցուկային և բացարձակ ճնշում

$2{,}2$ բար ($220$ կՊա) ցույց տվող անվադողի մանոմետրը չափում է, թե որքանով է ներսի ճնշումը **գերազանցում** մթնոլորտայինը։ Անվադողում իրական (բացարձակ) ճնշումը մոտ $220 + 100 = 320$ կՊա է։ Իջած անվադողի մանոմետրը ցույց է տալիս զրո, բայց այն դեռ լի է մթնոլորտային ճնշմամբ օդով։

### Աներոիդի ներսում

Աներոիդ բարոմետրի տուփի ներսում գրեթե օդ չկա, ուստի մթնոլորտը այն կտափակեր։ Ամուր զսպանակը պատերն իրարից հեռու է պահում։ Երբ արտաքին ճնշումն աճում է $1$ մմ ս.ս.-ով, կափարիչը տեղաշարժվում է ընդամենը մի քանի միկրոմետրով։ Լծակների համակարգը դա մեծացնում է հարյուրավոր անգամ, որպեսզի սլաքը տեսանելիորեն շարժվի։`,
    r`### Пресс не обманывает

Гидравлический пресс умножает силу. А работу? Опустим малый поршень на $h_1$. Вытесненное масло имеет объём $S_1 h_1$, и тот же объём должен поднять большой поршень на $h_2$:
$$S_1 h_1 = S_2 h_2 \;\Rightarrow\; \frac{h_1}{h_2} = \frac{S_2}{S_1} = \frac{F_2}{F_1}.$$
Значит, $F_1 h_1 = F_2 h_2$: работа над малым поршнем равна работе большого. Пресс выигрывает в силе ровно во столько раз, во сколько проигрывает в расстоянии.

*Пример.* Домкрат с $S_2/S_1 = 100$ поднимает машину на $10$ см. Малый поршень должен пройти в сумме $100 \cdot 10 = 1000$ см $= 10$ м. Поэтому рукоятку качают много раз: после каждого короткого хода клапаны впускают новую порцию масла.

### Почему всасывающий насос не поднимет воду выше 10 м

Всасывающий насос не тянет воду. Он лишь убирает воздух над ней, а вверх воду толкает **атмосфера**. Выше всего она поднимет столб, давление которого равно $p_0$:
$$h_{\max} = \frac{p_0}{\rho g} = \frac{101\,300}{1000 \cdot 9{,}8} \approx 10{,}3\ \text{м}.$$
Флорентийские мастера колодцев во времена Галилея заметили, что их насосы останавливаются примерно на этой высоте. Галилей писал об этой загадке, а его ученик Торричелли разгадал её в 1643 году, заменив воду ртутью. В глубоких скважинах сегодня ставят **погружные** насосы на дне, которые **выталкивают** воду вверх.

### Избыточное и абсолютное давление

Манометр шины, показывающий $2{,}2$ бар ($220$ кПа), измеряет, насколько давление внутри **превышает** атмосферное. Истинное (абсолютное) давление в шине около $220 + 100 = 320$ кПа. У спущенной шины манометр показывает ноль, но она всё ещё полна воздуха при атмосферном давлении.

### Внутри анероида

В коробке анероида почти нет воздуха, и атмосфера сплющила бы её. Стенки удерживает сильная пружина. Когда внешнее давление растёт на $1$ мм рт. ст., крышка смещается всего на несколько микрометров. Система рычагов увеличивает это в сотни раз, чтобы стрелка заметно сдвинулась.`,
  ),

  archimedes: th(
    r`### Deriving the law with a cube

Put a cube with edge $a$ into water so that its top face is at depth $h_1$ and its bottom face at depth $h_2 = h_1 + a$.

* The pushes on the four side faces are equal and opposite. They cancel.
* On the top face the water pushes **down**: $F_1 = \rho g h_1 \cdot a^2$.
* On the bottom face it pushes **up**: $F_2 = \rho g h_2 \cdot a^2$.

The net upward force is
$$F_A = F_2 - F_1 = \rho g a^2 (h_2 - h_1) = \rho g a^3 = \rho g V.$$
It does not depend on $h_1$: a cube feels the same buoyant force at $1$ m and at $100$ m (as long as the water does not get noticeably denser).

### Stevin's argument for any shape

A cube is easy. What about a stone of any shape? In 1586 Simon Stevin gave a beautiful argument. Imagine that the stone is replaced by water of exactly the same shape. That "water stone" floats in the water around it, neither rising nor sinking. So the surrounding water pushes it up with a force equal to its weight, $\rho g V$. But the surrounding water has no idea what is inside the shape. It pushes the real stone exactly as it pushed the water stone.

### When there is no buoyant force

Archimedes' force comes from water pushing **underneath**. A flat body pressed tightly to the bottom, with no water under it, gets no upward push at all. The water above only presses it down. This is why a submarine lying on soft mud can find it hard to lift off.

### The crown, done properly

Gold has density $19{.}3\ \text{g/cm}^3$, silver $10{.}5\ \text{g/cm}^3$. A pure gold crown of $1000$ g has volume $1000 : 19{.}3 \approx 52\ \text{cm}^3$. A crown of $700$ g gold and $300$ g silver has
$$V = \frac{700}{19{.}3} + \frac{300}{10{.}5} \approx 36 + 29 = 65\ \text{cm}^3.$$
The difference in buoyant force is the weight of $13$ g of water, about $0{.}13$ N. Splashing in a bath could hardly measure a $13\ \text{cm}^3$ rise. But on a balance, hang the crown against an equal mass of pure gold and lower both into water: the fake rises. Galileo suggested exactly this method in 1586.

### You weigh less in air too

Air also obeys Archimedes' law. A person of volume $0{.}07\ \text{m}^3$ is pushed up by $1{.}29 \cdot 10 \cdot 0{.}07 \approx 0{.}9$ N. The bathroom scale shows about $90$ g less than the true mass.`,
    r`### Օրենքի արտածումը խորանարդով

$a$ կողով խորանարդը դնենք ջրի մեջ այնպես, որ վերին նիստը լինի $h_1$ խորության վրա, իսկ ստորինը՝ $h_2 = h_1 + a$ խորության վրա։

* Չորս կողմնային նիստերին ազդող հրումները հավասար են և հակադիր։ Դրանք չեզոքացնում են իրար։
* Վերին նիստին ջուրը հրում է **ներքև**՝ $F_1 = \rho g h_1 \cdot a^2$։
* Ստորին նիստին հրում է **վերև**՝ $F_2 = \rho g h_2 \cdot a^2$։

Համազոր դեպի վեր ուժը՝
$$F_A = F_2 - F_1 = \rho g a^2 (h_2 - h_1) = \rho g a^3 = \rho g V$$
Այն կախված չէ $h_1$-ից. խորանարդը նույն դուրս հրող ուժն է զգում թե՛ $1$ մ, թե՛ $100$ մ խորության վրա (քանի դեռ ջուրը նկատելիորեն չի խտանում)։

### Ստևինի դատողությունը ցանկացած ձևի համար

Խորանարդը հեշտ է։ Իսկ ցանկացած ձևի քա՞րը։ 1586 թվականին Սիմոն Ստևինը գեղեցիկ դատողություն առաջարկեց։ Պատկերացնենք, որ քարը փոխարինված է ճիշտ նույն ձևի ջրով։ Այդ «ջրե քարը» լողում է իրեն շրջապատող ջրում՝ ոչ բարձրանում է, ոչ սուզվում։ Ուրեմն շրջապատող ջուրը այն վեր է հրում իր կշռին հավասար՝ $\rho g V$ ուժով։ Բայց շրջապատող ջուրը չգիտի, թե ինչ կա ձևի ներսում։ Այն իրական քարը հրում է ճիշտ այնպես, ինչպես ջրե քարը։

### Երբ դուրս հրող ուժ չկա

Արքիմեդի ուժն առաջանում է **ներքևից** հրող ջրից։ Հատակին ամուր սեղմված հարթ մարմինը, որի տակ ջուր չկա, ընդհանրապես վեր հրում չի ստանում։ Վերևի ջուրը միայն ներքև է ճնշում այն։ Այդ պատճառով փափուկ տիղմի վրա պառկած սուզանավին կարող է դժվար լինել պոկվելը։

### Թագը՝ ինչպես հարկն է

Ոսկու խտությունը $19{,}3\ \text{գ/սմ}^3$ է, արծաթինը՝ $10{,}5\ \text{գ/սմ}^3$։ $1000$ գ մաքուր ոսկե թագի ծավալը $1000 : 19{,}3 \approx 52\ \text{սմ}^3$ է։ $700$ գ ոսկուց և $300$ գ արծաթից թագի ծավալը՝
$$V = \frac{700}{19{,}3} + \frac{300}{10{,}5} \approx 36 + 29 = 65\ \text{սմ}^3$$
Դուրս հրող ուժերի տարբերությունը $13$ գ ջրի կշիռն է՝ մոտ $0{,}13$ Ն։ Լոգարանում շլփշլփացնելով դժվար թե հնարավոր լիներ չափել $13\ \text{սմ}^3$ բարձրացումը։ Բայց կշեռքի վրա թագը կախեք մաքուր ոսկու հավասար զանգվածի դիմաց և երկուսն էլ իջեցրեք ջրի մեջ. կեղծը կբարձրանա։ Գալիլեյը հենց այս եղանակն առաջարկեց 1586 թվականին։

### Օդում էլ եք ավելի թեթև

Օդն էլ է ենթարկվում Արքիմեդի օրենքին։ $0{,}07\ \text{մ}^3$ ծավալով մարդուն օդը վեր է հրում $1{,}29 \cdot 10 \cdot 0{,}07 \approx 0{,}9$ Ն ուժով։ Լոգարանի կշեռքը ցույց է տալիս իրական զանգվածից մոտ $90$ գ պակաս։`,
    r`### Вывод закона на кубе

Опустим в воду куб с ребром $a$ так, чтобы его верхняя грань была на глубине $h_1$, а нижняя на глубине $h_2 = h_1 + a$.

* Напоры на четыре боковые грани равны и противоположны. Они взаимно уничтожаются.
* На верхнюю грань вода давит **вниз**: $F_1 = \rho g h_1 \cdot a^2$.
* На нижнюю грань давит **вверх**: $F_2 = \rho g h_2 \cdot a^2$.

Равнодействующая направлена вверх:
$$F_A = F_2 - F_1 = \rho g a^2 (h_2 - h_1) = \rho g a^3 = \rho g V.$$
Она не зависит от $h_1$: куб испытывает одинаковую выталкивающую силу и на $1$ м, и на $100$ м (пока вода заметно не уплотняется).

### Рассуждение Стевина для любой формы

С кубом просто. А камень любой формы? В 1586 году Симон Стевин предложил красивое рассуждение. Представим, что камень заменён водой точно такой же формы. Этот «водяной камень» плавает в окружающей воде, не всплывая и не тоня. Значит, окружающая вода выталкивает его с силой, равной его весу, $\rho g V$. Но окружающая вода не знает, что находится внутри формы. Она давит на настоящий камень точно так же, как на водяной.

### Когда выталкивающей силы нет

Сила Архимеда возникает потому, что вода давит **снизу**. Плоское тело, плотно прижатое ко дну, под которым нет воды, вовсе не выталкивается. Вода сверху только прижимает его. Поэтому подводной лодке, лёгшей на мягкий ил, бывает трудно оторваться от дна.

### Корона, как положено

Плотность золота $19{,}3\ \text{г/см}^3$, серебра $10{,}5\ \text{г/см}^3$. Корона из $1000$ г чистого золота имеет объём $1000 : 19{,}3 \approx 52\ \text{см}^3$. Корона из $700$ г золота и $300$ г серебра:
$$V = \frac{700}{19{,}3} + \frac{300}{10{,}5} \approx 36 + 29 = 65\ \text{см}^3.$$
Разница выталкивающих сил равна весу $13$ г воды, около $0{,}13$ Н. Плеская в ванне, трудно заметить подъём воды на $13\ \text{см}^3$. Но на весах повесьте корону против равной массы чистого золота и опустите обе в воду: подделка поднимется. Именно этот способ предложил Галилей в 1586 году.

### В воздухе вы тоже легче

Воздух тоже подчиняется закону Архимеда. Человека объёмом $0{,}07\ \text{м}^3$ воздух выталкивает с силой $1{,}29 \cdot 10 \cdot 0{,}07 \approx 0{,}9$ Н. Напольные весы показывают примерно на $90$ г меньше истинной массы.`,
  ),

  floating: th(
    r`### Deriving the submerged fraction

A body of volume $V$ and density $\rho_b$ floats with volume $V_{\text{sub}}$ under the surface of a liquid of density $\rho_l$. Floating means the forces balance:
$$\rho_b V g = \rho_l V_{\text{sub}} g \;\Rightarrow\; \frac{V_{\text{sub}}}{V} = \frac{\rho_b}{\rho_l}.$$
Glacier ice ($917\ \text{kg/m}^3$) in sea water ($1030\ \text{kg/m}^3$): $917 : 1030 \approx 0{.}89$. Close to nine tenths of an iceberg is hidden.

The same formula is the idea of the **hydrometer**: a weighted glass float that sinks deeper in a lighter liquid. Its scale reads the density directly. It is used to check milk, wine and car batteries.

### Does melting ice raise the water level?

Put an ice cube in a full glass of water. When it melts, will the glass overflow?

A floating cube of mass $m$ pushes aside water of mass exactly $m$ (the weights balance). When it melts, it becomes water of mass $m$, which takes up exactly the volume it used to push aside. It fills its own "hole" exactly. The level **does not change**.

The same reasoning shows why melting **land** ice matters: glaciers on Greenland and Antarctica are not floating, so their meltwater is extra water for the ocean.

### Ship in a river, ship at sea

Sea water is denser than river water, so a ship floats **higher** at sea. Load-line marks on a ship's side show the deepest safe draught for fresh water, summer sea, winter North Atlantic and so on. After British law made them compulsory in 1876 they became known as **Plimsoll lines**.

### How much does a balloon lift?

Every cubic metre of a balloon displaces about $1{.}29$ kg of cold air.

| Filling | Mass of $1\ \text{m}^3$ | Lift per $1\ \text{m}^3$ |
|---|---|---|
| air heated to $100\ ^\circ\text{C}$ | about $0{.}95$ kg | about $0{.}35$ kg |
| helium | about $0{.}18$ kg | about $1{.}1$ kg |

So a hot-air balloon of $2500\ \text{m}^3$ can lift about $870$ kg in total, including its own envelope and basket. Helium lifts three times more per cubic metre, which is why airships use it.`,
    r`### Ընկղմված մասի արտածումը

$V$ ծավալով և $\rho_1$ խտությամբ մարմինը լողում է $\rho_2$ խտությամբ հեղուկում, և նրա $V_1$ ծավալը մակերևույթից ցածր է։ Լողալը նշանակում է, որ ուժերը հավասարակշռված են.
$$\rho_1 V g = \rho_2 V_1 g \;\Rightarrow\; \frac{V_1}{V} = \frac{\rho_1}{\rho_2}$$
Սառցադաշտային սառույցը ($917\ \text{կգ/մ}^3$) ծովի ջրում ($1030\ \text{կգ/մ}^3$)՝ $917 : 1030 \approx 0{,}89$։ Այսբերգի գրեթե ինը տասներորդը թաքնված է։

Նույն բանաձևն է **արեոմետրի** գաղափարը. ծանրոցով ապակե լողան, որն ավելի թեթև հեղուկում ավելի խորն է սուզվում։ Նրա սանդղակն անմիջապես ցույց է տալիս խտությունը։ Այն օգտագործվում է կաթը, գինին և մեքենայի կուտակիչները ստուգելու համար։

### Սառույցի հալվելը բարձրացնո՞ւմ է ջրի մակարդակը

Սառույցի խորանարդը դնենք ջրով լի բաժակի մեջ։ Երբ այն հալվի, բաժակից ջուր կթափվի՞։

$m$ զանգվածով լողացող խորանարդը դուրս է մղում ճիշտ $m$ զանգվածով ջուր (կշիռները հավասարակշռված են)։ Հալվելիս այն դառնում է $m$ զանգվածով ջուր, որը զբաղեցնում է ճիշտ այն ծավալը, որ նախկինում դուրս էր մղում։ Այն ճշգրիտ լցնում է իր սեփական «փոսը»։ Մակարդակը **չի փոխվում**։

Նույն դատողությունը ցույց է տալիս, թե ինչու է կարևոր **ցամաքային** սառույցի հալվելը. Գրենլանդիայի և Անտարկտիդայի սառցադաշտերը չեն լողում, ուստի նրանց հալոցքը օվկիանոսի համար լրացուցիչ ջուր է։

### Նավը գետում, նավը ծովում

Ծովի ջուրը գետի ջրից խիտ է, ուստի ծովում նավը լողում է **ավելի բարձր**։ Նավի կողին արված բեռնավորման նշանները ցույց են տալիս ամենամեծ անվտանգ նստվածքը քաղցրահամ ջրի, ամառային ծովի, ձմեռային Հյուսիսային Ատլանտիկայի և այլ դեպքերի համար։ 1876 թվականին բրիտանական օրենքը դրանք պարտադիր դարձրեց, և դրանք հայտնի դարձան որպես **Պլիմսոլի գծեր**։

### Որքա՞ն է օդապարիկը բարձրացնում

Օդապարիկի յուրաքանչյուր խորանարդ մետրը դուրս է մղում մոտ $1{,}29$ կգ սառը օդ։

| Լցանյութ | $1\ \text{մ}^3$-ի զանգված | Բարձրացնող ուժ $1\ \text{մ}^3$-ի համար |
|---|---|---|
| մինչև $100\ ^\circ\text{C}$ տաքացված օդ | մոտ $0{,}95$ կգ | մոտ $0{,}35$ կգ |
| հելիում | մոտ $0{,}18$ կգ | մոտ $1{,}1$ կգ |

Ուրեմն $2500\ \text{մ}^3$ տաք օդով օդապարիկը կարող է ընդհանուր առմամբ բարձրացնել մոտ $870$ կգ՝ ներառյալ իր թաղանթն ու զամբյուղը։ Հելիումը յուրաքանչյուր խորանարդ մետրի համար երեք անգամ ավելի է բարձրացնում, ուստի օդանավերում օգտագործում են այն։`,
    r`### Вывод погружённой доли

Тело объёмом $V$ и плотностью $\rho_{\text{т}}$ плавает в жидкости плотностью $\rho_{\text{ж}}$, погрузившись на объём $V_{\text{погр}}$. Плавание означает равновесие сил:
$$\rho_{\text{т}} V g = \rho_{\text{ж}} V_{\text{погр}} g \;\Rightarrow\; \frac{V_{\text{погр}}}{V} = \frac{\rho_{\text{т}}}{\rho_{\text{ж}}}.$$
Ледниковый лёд ($917\ \text{кг/м}^3$) в морской воде ($1030\ \text{кг/м}^3$): $917 : 1030 \approx 0{,}89$. Почти девять десятых айсберга скрыто под водой.

На этой же формуле основан **ареометр**: стеклянный поплавок с грузиком, который тонет глубже в более лёгкой жидкости. Его шкала сразу показывает плотность. Им проверяют молоко, вино и аккумуляторы автомобилей.

### Поднимет ли тающий лёд уровень воды?

Положим кубик льда в полный стакан воды. Когда он растает, вода перельётся?

Плавающий кубик массой $m$ вытесняет воду массой ровно $m$ (веса уравновешены). Растаяв, он становится водой массой $m$, которая занимает ровно тот объём, который он вытеснял. Он в точности заполняет свою «ямку». Уровень **не меняется**.

То же рассуждение показывает, почему важно таяние **материкового** льда: ледники Гренландии и Антарктиды не плавают, и их талая вода добавляется к океану.

### Корабль в реке и в море

Морская вода плотнее речной, поэтому в море корабль сидит **выше**. Грузовые марки на борту судна показывают наибольшую безопасную осадку для пресной воды, летнего моря, зимней Северной Атлантики и так далее. После того как британский закон сделал их обязательными в 1876 году, их стали называть **линиями Плимсоля**.

### Сколько поднимает воздушный шар?

Каждый кубический метр шара вытесняет около $1{,}29$ кг холодного воздуха.

| Наполнение | Масса $1\ \text{м}^3$ | Подъёмная сила на $1\ \text{м}^3$ |
|---|---|---|
| воздух, нагретый до $100\ ^\circ\text{C}$ | около $0{,}95$ кг | около $0{,}35$ кг |
| гелий | около $0{,}18$ кг | около $1{,}1$ кг |

Значит, тепловой шар объёмом $2500\ \text{м}^3$ поднимет всего около $870$ кг, включая собственную оболочку и корзину. Гелий поднимает втрое больше на кубический метр, поэтому им наполняют дирижабли.`,
  ),
};
