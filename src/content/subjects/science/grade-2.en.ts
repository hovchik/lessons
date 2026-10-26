import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "The body and the senses, health, safety.",
    "Seasons, plants, animals, my homeland.",
  ],
  lessons: {
    "body-and-senses": {
      objectives: ["Name the main parts of the body", "Name the five senses", "Link each sense organ with what it does", "Understand that the sense organs need looking after"],
      content: `## Parts of the body

Our body has a **head**, a **trunk**, two **arms** and two **legs**.

On the head are the eyes, ears, nose and mouth. Inside the head is the **brain**: it controls the whole body. In the chest is the **heart**: it beats and pumps blood.

## The five senses

| Sense organ | What we do | Example |
|---|---|---|
| **Eyes** | see | colours, shapes |
| **Ears** | hear | music, birdsong |
| **Nose** | smell | the scent of a flower, of bread |
| **Tongue** | taste | sweet, salty, sour, bitter |
| **Skin** | feel | warm, cold, soft, hard |

The senses tell us about the world around us.

## Looking after our senses

- Do not look at the sun, and do not sit too close to a screen,
- Do not listen to very loud music in headphones,
- Never put anything in your ear or nose,
- Do not touch a hot iron or cooker,
- Do not taste plants or berries you do not know.

## Exercises

1. How many senses does a person have?
2. Which sense organ do we hear with?
3. What do we sense with the tongue?
4. Which organ controls the whole body?
5. Why must you not look at the sun?

## Answers

1. Five.
2. The ears.
3. Taste: sweet, salty, sour, bitter.
4. The brain.
5. Strong sunlight can damage the eyes.`,
      quiz: [
        ["Which sense organ do we see with?", ["The eyes", "The ears", "The nose", "The tongue"]],
        ["Which sense organ do we smell with?", ["The nose", "The eyes", "The skin", "The ears"]],
        ["What does the heart do?", ["Pumps blood", "Sees", "Hears", "Thinks"]],
        ["What do we feel with the skin?", ["Warmth and cold", "Colours", "Sounds", "Smells"]],
        ["Which is right?", ["Do not listen to very loud music", "Look at the sun", "Taste berries you do not know", "Touch a hot iron"]],
      ],
    },
    "health-and-hygiene": {
      objectives: ["Name the rules of a healthy lifestyle", "Explain why we wash our hands", "Recognise healthy food", "Make a daily routine"],
      content: `## Rules for health

1. **Wash your hands** with soap: before eating, after the toilet and after being outside,
2. **Brush your teeth** twice a day: in the morning and before bed,
3. **Sleep** enough: about 10 hours,
4. **Move**: play outside, run, dance,
5. **Eat** healthy food and drink water.

## Why wash your hands

On our hands there are tiny **germs** that we cannot see with our eyes. Some of them can make us ill. Soap and water wash the germs away. Wash your hands for as long as it takes to sing "Happy Birthday" twice (about 20 seconds).

## Healthy and less healthy food

| Eat often | Eat rarely |
|---|---|
| fruit (apple, apricot, grapes) | sweets |
| vegetables (carrot, cucumber, tomato) | crisps |
| dairy foods (matsun, cheese) | sweet fizzy drinks |
| bread, porridge, beans | fried, very fatty food |
| water | |

## Daily routine

| Time | Activity |
|---|---|
| 7:30 | wake up, wash, exercises |
| 8:00 | breakfast |
| 8:30 | school |
| 13:00 | lunch |
| 15:00 | playing outside |
| 17:00 | homework |
| 19:00 | dinner |
| 21:00 | bed |

## Exercises

1. When should you wash your hands?
2. How many times a day should you brush your teeth?
3. Name three healthy foods.
4. Why do we need plenty of sleep?
5. Make your own routine for Sunday.

## Answers

1. Before eating, after the toilet and after being outside.
2. Twice.
3. For example, an apple, a carrot, matsun.
4. During sleep the body rests and grows, and the brain recovers.
5. Everyone's answer is different.`,
      quiz: [
        ["What should you wash your hands with?", ["Soap and water", "Only water", "Milk", "You should not wash them"]],
        ["Which food is healthy?", ["A carrot", "Crisps", "A sweet", "A fizzy drink"]],
        ["How many times a day should you brush your teeth?", ["Twice", "Once a week", "Ten times", "There is no need"]],
        ["About how many hours should a child in grade 2 sleep?", ["10", "4", "15", "6"]],
        ["Why do we wash our hands?", ["To wash away germs", "To warm our hands", "To make our nails grow", "To pass the time"]],
      ],
    },
    "safety-rules": {
      objectives: ["Know the basic rules of the road", "Recognise traffic light signals", "Name dangerous things at home", "Remember the emergency numbers"],
      content: `## In the street

The **traffic light** for pedestrians:

| Colour | What to do |
|---|---|
| 🔴 Red | **stop** |
| 🟢 Green | you can **cross**, after looking left and right |

For cars, the **amber** light means "Attention, the colour is changing".

## Rules of the road

- Cross the road only at a **pedestrian crossing** (a "zebra crossing"),
- Before crossing, look **left, then right**,
- Do not run on the road or play at the edge of the pavement,
- In a car, sit in a **child seat** and fasten your seat belt,
- In the evening, wear clothes with reflective strips.

## At home

Dangerous things: **fire** (matches, the gas cooker), **electricity** (sockets), **sharp** things (knives, scissors), **medicines** and **household chemicals**.

- Do not play with matches,
- Never put anything into a socket,
- Take medicine only with your parents' permission,
- Do not open the door to strangers.

## Numbers for help

| Number | Service |
|---|---|
| **911** | the single emergency service |
| **101** | fire and rescue |
| **102** | police |
| **103** | ambulance |

When you call, say your **name**, your **address** and **what has happened**. Learn your address and your parents' phone number by heart.

## Exercises

1. What does the red traffic light mean?
2. Where should you cross the road?
3. Which way do you look first when crossing the road?
4. Which number do you call for an ambulance?
5. What should you say when you call for help?

## Answers

1. Stop.
2. At a pedestrian crossing.
3. Left, then right.
4. 103 (or 911).
5. Your name, your address and what has happened.`,
      quiz: [
        ["At which colour of the traffic light can you cross?", ["Green", "Red", "Black", "Purple"]],
        ["Where do you cross the road?", ["At a pedestrian crossing", "Wherever is handy", "Between cars", "At a run"]],
        ["Which number do you call for the fire brigade?", ["101", "103", "102", "105"]],
        ["Which game is dangerous?", ["Playing with matches", "Playing ball in the yard", "Reading a book", "Drawing"]],
        ["What should you do if a stranger knocks on the door and your parents are not at home?", ["Not open the door", "Open the door", "Invite them in", "Tell them your address"]],
      ],
    },
    "seasons-and-weather": {
      objectives: ["Name the seasons and the months", "Describe the signs of each season", "Observe the weather and fill in a calendar", "Choose clothes for the weather"],
      content: `## The four seasons

| Season | Months | Signs |
|---|---|---|
| **Spring** | March, April, May | snow melts, trees blossom, birds come back |
| **Summer** | June, July, August | it is hot, fruit ripens, the days are long |
| **Autumn** | September, October, November | leaves turn yellow and fall, harvest, rain |
| **Winter** | December, January, February | it is cold, it snows, the days are short |

A year has **12 months**, and a week has **7 days**.

## How the seasons differ

In summer the **Sun** is high in the sky and warms more strongly; in winter it is low. In summer the day is long and the night is short; in winter it is the other way round.

## Watching the weather

Weather is what the air is like right now: sunny, cloudy, rain, snow, wind.

A **thermometer** shows how warm or cold it is.

| Sign | Weather |
|---|---|
| ☀️ | sunny |
| ⛅ | partly cloudy |
| ☁️ | cloudy |
| 🌧️ | rain |
| ❄️ | snow |
| 💨 | wind |

In Armenia the summer is hot and dry, and the winter is cold and snowy, especially in the mountains.

## Clothes for the weather

- In winter: a warm coat, a hat, mittens, a scarf,
- In the rain: a waterproof jacket, an umbrella, wellington boots,
- In summer: light clothes, a sun hat, water.

## Exercises

1. How many seasons are there in a year, and what are they?
2. Which months are in autumn?
3. Name three signs of spring.
4. Which instrument measures the air temperature?
5. What should you wear on a snowy day?

## Answers

1. Four: spring, summer, autumn, winter.
2. September, October, November.
3. Snow melts, trees blossom, birds come back.
4. A thermometer.
5. A warm coat, a hat, mittens, a scarf, warm shoes.`,
      quiz: [
        ["Which month is in winter?", ["January", "July", "April", "October"]],
        ["How many months are there in a year?", ["12", "7", "10", "4"]],
        ["When do the leaves fall?", ["In autumn", "In spring", "In summer", "Never"]],
        ["What do we measure temperature with?", ["A thermometer", "A ruler", "Scales", "A clock"]],
        ["When are the days longest?", ["In summer", "In winter", "In autumn", "They are always the same"]],
      ],
    },
    "plants": {
      objectives: ["Name the parts of a plant", "Name what a plant needs to grow", "Tell a tree, a bush and a grass-like plant apart", "Recognise some plants of Armenia"],
      content: `## Parts of a plant

| Part | What it does |
|---|---|
| **Root** | holds the plant in the ground, takes in water |
| **Stem** | holds up the leaves and flowers, carries water upwards |
| **Leaf** | makes food using sunlight |
| **Flower** | the fruit grows from it |
| **Fruit** | the seeds are inside it |
| **Seed** | a new plant grows from it |

## What a plant needs

1. **Light**,
2. **Water**,
3. **Air**,
4. **Warmth**,
5. **Soil** (with nutrients).

An experiment: plant two bean seeds. Put one on a bright windowsill and the other in a dark cupboard. Compare them after a week.

## Tree, bush, herb

| Group | Feature | Examples |
|---|---|---|
| **Tree** | one thick trunk | oak, walnut, apricot |
| **Bush** | several thin stems | rose, blackberry, currant |
| **Herb** | a soft green stem | camomile, mint, wheat |

## Plants of Armenia

- **Apricot**: the apricot (in Latin *Prunus armeniaca*) is considered one of the symbols of Armenia,
- **Pomegranate**: the pomegranate often appears in Armenian art,
- **Grapevine**,
- In the mountains: **oak**, **hornbeam**, **beech**,
- Flowers: **poppy**, **everlasting flower**, **bellflower**.

Plants give us **oxygen**, food, wood and medicines. Let us look after them: do not pick flowers for no reason or break branches.

## Exercises

1. Name the parts of a plant.
2. What does the root do?
3. What does a plant need to grow?
4. How is a tree different from a bush?
5. Which fruit is called "Armenian" in Latin?

## Answers

1. Root, stem, leaf, flower, fruit, seed.
2. It holds the plant in the ground and takes in water.
3. Light, water, air, warmth, soil.
4. A tree has one thick trunk; a bush has several thin stems.
5. The apricot.`,
      quiz: [
        ["Which part of a plant takes in water from the soil?", ["The root", "The flower", "The fruit", "The leaf"]],
        ["Where are the seeds?", ["Inside the fruit", "In the root", "In the stem", "Always in the ground"]],
        ["Which of these is a bush?", ["A rose", "An oak", "Wheat", "Camomile"]],
        ["What does a plant not need to grow?", ["Darkness", "Light", "Water", "Air"]],
        ["Which fruit is one of the symbols of Armenia?", ["The apricot", "The banana", "The pineapple", "The coconut"]],
      ],
    },
    "animals": {
      objectives: ["Tell domestic and wild animals apart", "Sort animals into groups (mammals, birds, fish, insects)", "Describe what animals eat", "Recognise some animals of Armenia"],
      content: `## Domestic and wild

- **Domestic** animals live near people, and people look after them: cow, sheep, horse, hen, dog, cat.
- **Wild** animals live in nature and find food themselves: wolf, fox, bear, hare, eagle.

## Groups of animals

| Group | Feature | Examples |
|---|---|---|
| **Mammals** | body covered in fur; they feed their young on milk | cow, dog, bear |
| **Birds** | feathers, wings, a beak; they lay eggs | crow, sparrow, stork |
| **Fish** | live in water; have scales and fins | trout, carp |
| **Insects** | six legs | bee, butterfly, ant |
| **Reptiles** | dry, scaly skin | lizard, snake, tortoise |
| **Amphibians** | live both in water and on land | frog |

## What they eat

- **Herbivores** eat plants (hare, cow),
- **Carnivores** eat other animals (wolf, eagle),
- **Omnivores** eat both plants and animals (bear, humans).

## Animals of Armenia

- The **Armenian mouflon** (a wild sheep),
- The **bezoar goat**, in the mountains,
- The **brown bear**,
- The **leopard** (the Persian leopard): very rare, protected in the Khosrov Forest reserve,
- The **Sevan trout**: a fish that lives only in Lake Sevan (and has been moved to a few other lakes),
- The **stork**: it builds nests on poles in the Ararat Valley.

Rare animals are listed in the **Red Book**, and hunting them is banned.

## Exercises

1. Give examples of three domestic and three wild animals.
2. How many legs does an insect have?
3. What does a carnivore eat?
4. Which group does a frog belong to?
5. Which fish lives in Lake Sevan?

## Answers

1. Domestic: cow, dog, hen; wild: wolf, fox, bear.
2. Six.
3. Other animals.
4. Amphibians.
5. The Sevan trout.`,
      quiz: [
        ["Which animal is domestic?", ["A cow", "A wolf", "A fox", "An eagle"]],
        ["Which of them is a bird?", ["A stork", "A lizard", "A frog", "A bee"]],
        ["What are animals that eat plants called?", ["Herbivores", "Carnivores", "Omnivores", "Insects"]],
        ["Which animal feeds its young on milk?", ["A cow", "A hen", "A fish", "A butterfly"]],
        ["What is the Red Book?", ["A list of rare animals and plants", "A book of fairy tales", "A cookery book", "A textbook"]],
      ],
    },
    "my-homeland": {
      objectives: ["Say your address and the name of your town or village", "Name the capital and the symbols of Armenia", "Recognise famous places in Armenia", "Talk about your town or village"],
      content: `## My town or village

Every person lives in some **settlement**: a **town** or a **village**.

| Town | Village |
|---|---|
| tall blocks of flats | separate houses, gardens |
| many people and cars | few people, quieter |
| factories, shops, theatres | fields, farms, livestock |

My **address**: country, town or village, street, house number and flat number. For example: Armenia, Yerevan, Abovyan Street, house 10, flat 5.

## My homeland is Armenia

- The **capital** is **Yerevan**, one of the oldest cities in the world (founded in 782 BC as the fortress of Erebuni),
- The **language** is **Armenian**; the alphabet was created by **Mesrop Mashtots**,
- The **flag** is **red, blue and apricot**,
- The **anthem** is "Mer Hayrenik" ("Our Fatherland"),
- The **highest mountain** is **Aragats**,
- The **largest lake** is **Sevan**,
- Mount **Ararat** is a symbol of the Armenian people.

## Famous places

| Place | What it is known for |
|---|---|
| **Etchmiadzin** | the Cathedral, the centre of the Armenian Church |
| **Garni** | a pagan temple |
| **Geghard** | a cave monastery |
| **Sevan** | a large mountain lake |
| **Matenadaran** (Yerevan) | ancient manuscripts |
| **Tatev** | a monastery and a long cable car |

## Our holidays

New Year (1 January), Christmas (6 January), Motherhood and Beauty Day (7 April), Victory and Peace Day (9 May), Republic Day (28 May), Knowledge Day (1 September), Independence Day (21 September).

## Exercises

1. Say your address.
2. What is the capital of Armenia?
3. What are the colours of Armenia's flag?
4. Who created the Armenian alphabet?
5. Which lake in Armenia is the largest?

## Answers

1. Everyone's answer is different.
2. Yerevan.
3. Red, blue, apricot.
4. Mesrop Mashtots.
5. Sevan.`,
      quiz: [
        ["What is the capital of Armenia?", ["Yerevan", "Gyumri", "Vanadzor", "Dilijan"]],
        ["Which mountain in Armenia is the highest?", ["Aragats", "Ararat", "Atis", "Ara"]],
        ["What is the first (top) colour of the flag?", ["Red", "Blue", "Apricot", "Green"]],
        ["When is Independence Day?", ["21 September", "1 January", "8 March", "31 December"]],
        ["Where is the Cathedral?", ["In Etchmiadzin", "In Garni", "At Sevan", "In Tatev"]],
      ],
    },
  },
};
