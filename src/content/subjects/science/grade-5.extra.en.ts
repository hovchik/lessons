import type { RuLesson } from "../../ru-overlay";

export const enExtra5: Record<string, RuLesson> = {
  "density-and-floating": {
    objectives: ["Measure the mass and volume of an object", "Explain what density is and calculate it", "Predict whether an object will float or sink", "Explain why an iron ship floats"],
    content: `## Mass and volume

- **Mass** shows how much matter there is in an object. It is measured with **scales**, in **kilograms** (kg) and **grams** (g). $1$ kg $= 1000$ g.
- **Volume** shows how much space an object takes up. The volume of a liquid is measured with a **measuring cylinder**, in **millilitres** (ml). $1$ ml $= 1$ cm³, $1$ l $= 1000$ ml.

**How to measure the volume of a stone.** Pour $50$ ml of water into a measuring cylinder. Carefully lower the stone into the water: the water rises, say, to $65$ ml. The stone's volume is $65 - 50 = 15$ ml, that is, $15$ cm³. According to legend, **Archimedes** found this method while taking a bath and shouted "**Eureka**!", "I have found it!"

## Density

A kilogram of feathers and a kilogram of iron have the same mass, but the feathers take up much more space. Iron is more **dense**.

**Density** is the mass that one unit of volume has:

$$\\text{density} = \\frac{\\text{mass}}{\\text{volume}}$$

For example, a stone has a mass of $39$ g and a volume of $15$ cm³. Its density is $39 : 15 = 2{.}6$ g/cm³.

| Substance | Density (g/cm³) | In water |
|---|---|---|
| wood (pine) | about $0{.}5$ | floats |
| ice | $0{.}9$ | floats |
| oil | $0{.}9$ | floats on the surface |
| **water** | **$1$** | — |
| sea water | about $1{.}03$ | — |
| glass | about $2{.}5$ | sinks |
| iron | $7{.}8$ | sinks |
| gold | $19{.}3$ | sinks |

## Float or sink

**Rule:** if an object's density is **less** than the density of water, it **floats**; if it is **greater**, it **sinks**.

- Ice floats, so lakes freeze from the top in winter, while the water below stays liquid and fish can live.
- The water of the Dead Sea is very salty and dense: there a person can lie on the water as if on a mattress.
- **Why does an iron ship float?** A ship is not just iron: there is a lot of **air** inside it. The **average** density of the whole ship is less than that of water. If the ship is holed and water takes the place of the air, it sinks.

**Experiment.** A ball of plasticine sinks in water. Make a boat out of it with thin sides and a wide bottom, and it will float.

## Exercises

1. What do we use to measure mass and volume?
2. A measuring cylinder held $40$ ml of water. After a metal part was lowered in, the water rose to $48$ ml. What is the volume of the part?
3. The part has a mass of $62{.}4$ g and a volume of $8$ cm³. What is its density? Which metal is it?
4. Will a piece of ice float in oil? Why?
5. Why does an iron ship float while an iron nail sinks?

## Answers

1. Mass with scales; the volume of a liquid or an irregular object with a measuring cylinder.
2. $48 - 40 = 8$ ml, that is, $8$ cm³.
3. $62{.}4 : 8 = 7{.}8$ g/cm³: it is iron.
4. No, or only just: ice and oil have almost the same density (about $0{.}9$ g/cm³), so the ice will hang in the oil or sink slowly.
5. There is a lot of air inside the ship, and its average density is less than that of water, while the nail's density is greater.`,
    quiz: [
      ["What do we use to measure the volume of a liquid?", ["Scales", "A measuring cylinder", "A thermometer", "A ruler"]],
      ["What is the density of water?", ["0.5 g/cm³", "1 g/cm³", "2.5 g/cm³", "7.8 g/cm³"]],
      ["Which object sinks in water?", ["Wood", "Ice", "Iron", "A drop of oil"]],
      ["An object has a mass of 20 g and a volume of 10 cm³. What is its density?", ["0.5 g/cm³", "2 g/cm³", "10 g/cm³", "200 g/cm³"]],
      ["Why does an iron ship float?", ["Iron is lighter than water", "There is air inside, and the average density is less than that of water", "The ship is painted", "Sea water is very warm"]],
    ],
  },

  "light-and-colour": {
    objectives: ["Explain how light travels and how shadows form", "Describe the reflection and refraction of light", "Explain how a rainbow forms", "Explain why objects have different colours"],
    content: `## Sources of light

**Light sources** give out light themselves: the Sun, a lamp, a fire, a firefly. We see other objects, such as the Moon, a book or a tree, because they **reflect** light from a source.

Light is the fastest thing in the world, at about **300,000 km/s**. It takes about 8 minutes to reach the Earth from the Sun.

## Light travels in straight lines

Light travels in **straight lines**. So behind an opaque object a **shadow** forms: a place the light cannot reach.

| Material | What light does | Example |
|---|---|---|
| **transparent** | passes through completely | glass, clean water |
| **translucent** | passes through partly; the image is blurred | frosted glass, greaseproof paper |
| **opaque** | does not pass through; a shadow forms | wood, metal, a person |

The closer the light source is to an object, the **bigger** the shadow. At midday, when the Sun is high, shadows are **short**; in the morning and evening they are **long**.

## Reflection and refraction

- **Reflection**: a mirror sends light back. Light bounces off a mirror at the same angle at which it arrived, like a ball off a wall.
- **Refraction**: when light passes from air into water or glass, it **changes direction**. That is why a spoon in a glass of water looks "broken", and the bottom of a lake looks closer than it really is.

## White light is a mixture of colours

In 1666 **Isaac Newton** passed sunlight through a glass **prism** and got a coloured band, a **spectrum**: red, orange, yellow, green, blue, indigo, violet. He proved that white light is a **mixture** of all the colours.

A **rainbow** forms when sunlight is refracted in raindrops, which act like tiny prisms. You can see a rainbow when the Sun is **behind you** and the rain is **in front of you**.

## Why objects have colours

An object **reflects** light of its own colour and **absorbs** the others.

- A red apple reflects red light.
- White paper reflects all the colours.
- A **black** object absorbs almost all the light, so it **heats up** more in the sun. That is why light-coloured clothes are good in summer.

## Exercises

1. Which is a light source, the Moon or a lamp? Why?
2. Why does a shadow form?
3. Why does a spoon in water look broken?
4. What did Newton prove with a prism?
5. Why does a black car get hotter in the sun than a white one?

## Answers

1. The lamp: it gives out light itself, while the Moon only reflects the Sun's light.
2. Light travels in straight lines and does not pass through an opaque object.
3. Light is refracted, changing direction, as it passes from water into air.
4. That white light is a mixture of all the colours.
5. Black absorbs almost all the light, while white reflects it.`,
    quiz: [
      ["Which is a light source?", ["The Moon", "A mirror", "A firefly", "A book"]],
      ["How does light travel?", ["In a wavy curve", "In straight lines", "In circles", "Only upwards"]],
      ["Which material is translucent?", ["Clear glass", "Frosted glass", "Metal", "Wood"]],
      ["Who first split white light into colours with a prism?", ["Archimedes", "Isaac Newton", "Galileo", "Edison"]],
      ["Why is a green leaf green?", ["It absorbs green light", "It reflects green light", "It gives out green light itself", "It is transparent"]],
    ],
  },

  "animal-groups": {
    objectives: ["Tell vertebrates from invertebrates", "Name the five classes of vertebrates and their features", "Describe how an insect and a frog develop", "Give examples of animals of Armenia"],
    content: `## Two big groups

Scientists divide animals by whether they have a **backbone**.

- **Invertebrates** have no backbone. They make up **most** animal species (about 95%).
- **Vertebrates** have a backbone and an internal skeleton.

## Invertebrates

| Group | Features | Examples |
|---|---|---|
| **insects** | 6 legs, body in 3 parts (head, thorax, abdomen), often wings | bee, butterfly, ant |
| **arachnids** | 8 legs, no wings | spider, tick, scorpion |
| **crustaceans** | hard shell, many legs | crayfish, crab |
| **molluscs** | soft body, often a shell | snail, mussel, octopus |
| **worms** | long, soft body without legs | earthworm |

## The five classes of vertebrates

| Class | Body covering | Breathing | Young | Body temperature | Example from Armenia |
|---|---|---|---|---|---|
| **fish** | scales | gills | eggs (spawn) in water | changing | the Sevan trout (ishkhan) |
| **amphibians** | moist, bare skin | young: gills; adults: lungs and skin | spawn in water | changing | the marsh frog |
| **reptiles** | dry scales | lungs | eggs with a shell, on land | changing | the Armenian viper |
| **birds** | feathers | lungs | eggs with a hard shell | **constant** | the griffon vulture, the stork |
| **mammals** | hair, fur | lungs | live young fed on **milk** | **constant** | the Armenian mouflon, the bezoar goat |

Animals with a **changing** temperature (fish, amphibians, reptiles) slow down in the cold, and many sleep through the winter. Birds and mammals are **warm-blooded**: their bodies stay warm in any weather, but to do this they need to eat a lot of food.

## Amazing ways of growing up

- **Butterfly**: egg → caterpillar → pupa → butterfly. The caterpillar only eats and grows, and inside the pupa its body is completely rebuilt.
- **Frog**: spawn → tadpole (lives in water, has a tail and gills) → small frog (legs grow, the tail disappears, lungs form).

This is called **metamorphosis**.

## Exercises

1. How do vertebrates differ from invertebrates?
2. How can you tell an insect from a spider?
3. Animals of which class feed their young on milk?
4. What does "warm-blooded" mean? Which classes are warm-blooded?
5. Name the four stages in the development of a butterfly.

## Answers

1. Vertebrates have a backbone and an internal skeleton; invertebrates do not.
2. An insect has 6 legs and a body in 3 parts; a spider has 8 legs and no wings.
3. Mammals.
4. The body temperature stays constant in any weather: birds and mammals.
5. Egg, caterpillar, pupa, butterfly.`,
    quiz: [
      ["How many legs does an insect have?", ["4", "6", "8", "10"]],
      ["Which animal is not a vertebrate?", ["The trout", "The mouflon", "The spider", "The stork"]],
      ["What do tadpoles breathe with?", ["Lungs", "Gills", "Only their skin", "They do not breathe"]],
      ["Which class does the Armenian viper belong to?", ["Amphibians", "Reptiles", "Fish", "Mammals"]],
      ["Which animals are warm-blooded?", ["Fish and frogs", "Birds and mammals", "Reptiles and insects", "All animals"]],
    ],
  },

  "body-systems": {
    objectives: ["Explain the levels of the body's structure, from the cell to the organism", "Name the organ systems and what they do", "Explain how the systems work together", "Give rules for a healthy lifestyle"],
    content: `## From cell to organism

The body is built the way a house is built from bricks.

$$\\text{cell} \\to \\text{tissue} \\to \\text{organ} \\to \\text{system} \\to \\text{organism}$$

- The **cell** is the living "brick". Our body has tens of trillions of cells.
- Similar cells make up a **tissue**, such as muscle or bone.
- Several tissues make up an **organ**: the heart, the stomach, a lung.
- Organs that work together make up a **system**.

## The systems

| System | Main organs | What it does |
|---|---|---|
| **musculoskeletal** | bones (206 in an adult), muscles | holds the body up, protects organs, moves |
| **digestive** | mouth, gullet, stomach, intestines, liver | breaks food down and absorbs nutrients |
| **respiratory** | nose, windpipe, **lungs** | brings in oxygen and removes carbon dioxide |
| **circulatory** | **heart**, blood vessels, blood | carries oxygen and nutrients all over the body |
| **excretory** | **kidneys**, bladder | cleans the blood of harmful substances |
| **nervous** | brain, spinal cord, nerves | controls the whole body |
| **skin** | **skin** | protects against microbes, controls temperature |

The skin is the body's largest organ.

## The systems work together

When you run:

1. The **nervous** system gives a command to the **muscles**.
2. The muscles need a lot of **oxygen** and **energy**.
3. The **respiratory** system speeds up your breathing, and the **heart** beats faster to deliver oxygen quickly through the blood.
4. The body warms up, and the **skin** produces sweat, which cools the body as it evaporates.

At rest an adult's heart beats about 60–80 times a minute, and a child's beats faster. Find your **pulse**: put two fingers on your wrist, count the beats in 15 seconds and multiply by 4.

## How to keep the body healthy

- Move for at least an hour every day.
- Eat a variety of food: vegetables, fruit, grains, dairy products.
- Drink enough water.
- Sleep 9–11 hours: the body grows and recovers during sleep.
- Sit up straight, and carry a heavy bag on both shoulders.

## Exercises

1. Put in the right order: organ, cell, organism, tissue, system.
2. Which system do the lungs belong to? What do they do?
3. Which organs clean the blood?
4. Why does the heart beat faster when you run?
5. Anna counted 22 beats in 15 seconds. What is her pulse per minute?

## Answers

1. Cell, tissue, organ, system, organism.
2. The respiratory system: they bring in oxygen and remove carbon dioxide.
3. The kidneys.
4. The muscles need more oxygen, and the heart delivers it quickly through the blood.
5. $22 \\cdot 4 = 88$ beats per minute.`,
    quiz: [
      ["Which order is correct?", ["Organ, cell, tissue", "Cell, tissue, organ", "Tissue, organ, cell", "Organism, cell, system"]],
      ["How many bones does an adult have?", ["About 50", "206", "About 1000", "10,000"]],
      ["Which organ pumps blood around the whole body?", ["The lungs", "The heart", "The stomach", "The kidneys"]],
      ["What is the body's largest organ?", ["The liver", "The brain", "The skin", "The lungs"]],
      ["Which system controls the whole body?", ["Digestive", "Nervous", "Excretory", "Skin"]],
    ],
  },
};
