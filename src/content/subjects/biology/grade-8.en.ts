import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Unicellular animals, cnidarians, worms, molluscs, arthropods and insects.",
    "Fish, amphibians, reptiles, birds and mammals: structure, way of life and adaptation to their environment.",
    "How animals evolved from simple to complex and how Armenia's wildlife is protected.",
  ],
  lessons: {
    protozoa: {
      objectives: ["Describe the structure of a unicellular animal", "Compare the amoeba, euglena and paramecium", "Explain how protozoa feed, move and reproduce", "Name diseases caused by protozoa"],
      content: `## The animal kingdom

Animals feed on ready-made organic substances, most of them move actively, and their cells have no cell wall. Scientists have described more than 1.5 million animal species, most of them insects. Animals are divided into **unicellular** (protozoa) and **multicellular**.

## Structure of protozoa

The body of a protozoan is a single cell that carries out all the functions of a whole organism: feeding, breathing, excretion, movement and reproduction.

| Organelle | Function |
|---|---|
| nucleus | stores hereditary information |
| food vacuole | digests food |
| contractile vacuole | removes excess water and harmful substances |
| pseudopodia, flagellum, cilia | organelles of movement |

## Three examples

| Protozoan | Movement | Feeding | Special feature |
|---|---|---|---|
| **amoeba** | pseudopodia | engulfs bacteria and algae | body shape keeps changing |
| **green euglena** | flagellum | in light by photosynthesis, in the dark on ready-made substances | has chloroplasts and a light-sensitive eyespot |
| **paramecium** | cilia | food enters through a cell mouth | two nuclei |

Protozoa reproduce mainly by **division**: one cell splits into two. In unfavourable conditions many of them form a **cyst**, a resting state under a tough coat.

## Protozoa and people

- The **malaria parasite** is passed on by the bite of the Anopheles mosquito and causes malaria.
- The **dysentery amoeba** causes an intestinal disease, which is why you should drink boiled or clean water.
- Over millions of years, chalk and limestone formed from the skeletons of marine **foraminifera**.

## Exercises

1. Why is a protozoan a whole organism and not just a cell?
2. Which protozoan can feed like a plant?
3. What is the contractile vacuole for?
4. How does an amoeba capture food?
5. How can you protect yourself from dysentery?

## Answers

1. This single cell carries out all the functions of life.
2. The green euglena: in light it photosynthesises.
3. To remove excess water and harmful substances.
4. It surrounds the food with pseudopodia and takes it in, forming a food vacuole.
5. Drink boiled water, wash your hands and fruit.`,
      quiz: [
        ["How does an amoeba move?", ["With a flagellum", "With cilia", "With pseudopodia", "With fins"]],
        ["Which protozoan has chloroplasts?", ["The amoeba", "The green euglena", "The paramecium", "The malaria parasite"]],
        ["What does the contractile vacuole do?", ["Digests food", "Removes excess water", "Stores hereditary information", "Carries out photosynthesis"]],
        ["How do protozoa mainly reproduce?", ["By seeds", "By laying eggs", "By division", "Only by spores"]],
        ["What carries malaria?", ["A fly", "The Anopheles mosquito", "A flea", "A tick"]],
      ],
    },
    "cnidarians-worms": {
      objectives: ["Describe the structure of the hydra", "Distinguish flatworms, roundworms and segmented worms", "Explain the role of the earthworm in soil", "List rules for protection against parasitic worms"],
      content: `## Cnidarians

**Cnidarians** are the simplest multicellular animals. Their body is a sac with a mouth and tentacles. Inside is a **gut cavity** where food is digested. The body has **radial symmetry**.

The **freshwater hydra** is about 1 cm long. Its body wall has two layers: an outer one (ectoderm) and an inner one (endoderm). Its tentacles carry **stinging cells** that paralyse prey. The hydra reproduces by **budding** and sexually, and it is good at restoring lost parts (**regeneration**).

Marine cnidarians include **jellyfish**, **sea anemones** and **coral polyps**, which build coral reefs.

## Worms

| Phylum | Body | Examples |
|---|---|---|
| **flatworms** | flat, no body cavity | white planarian, liver fluke, pork tapeworm |
| **roundworms** | round in cross-section, has a mouth and an anus | human roundworm, pinworm |
| **segmented worms** | made of rings, has a circulatory system | earthworm, leech |

## The earthworm and soil

The earthworm digs burrows and swallows soil together with plant remains. Thanks to it, soil becomes **loose** and rich in **humus**, and more air and water reach the roots. The earthworm breathes through its skin, which is why it comes up to the surface after rain.

## Parasitic worms

Roundworms and tapeworms live in the human intestine and feed at its expense. Roundworm eggs reach people with unwashed vegetables and dirty hands, tapeworms with undercooked meat.

**Rules**: wash your hands, vegetables and fruit, cook or fry meat well, and do not drink unboiled water.

## Exercises

1. Why are the hydra and the jellyfish called cnidarians (gut-cavity animals)?
2. What does the hydra need stinging cells for?
3. Which phylum of worms does the earthworm belong to?
4. How is the earthworm useful to a gardener?
5. How do people get infected with roundworms?

## Answers

1. They have a gut cavity, an internal space where food is digested.
2. To paralyse prey and defend itself.
3. Segmented worms.
4. It loosens the soil and enriches it with humus.
5. Through unwashed vegetables, fruit or dirty hands.`,
      quiz: [
        ["How does the hydra reproduce asexually?", ["By division", "By budding", "By spores", "By seeds"]],
        ["Which worm is a segmented worm?", ["The roundworm", "The planarian", "The earthworm", "The liver fluke"]],
        ["How does the earthworm breathe?", ["With lungs", "With gills", "Through its skin", "With tracheae"]],
        ["What symmetry do cnidarians have?", ["Bilateral", "Radial", "None", "Spiral"]],
        ["How can you get infected with a tapeworm?", ["By eating undercooked meat", "By being in the sun", "By reading books", "By swimming"]],
      ],
    },
    mollusks: {
      objectives: ["Describe the common features of mollusc structure", "Distinguish gastropods, bivalves and cephalopods", "Explain how bivalves filter water", "Name the role of molluscs in nature and human life"],
      content: `## General features

The body of **molluscs** is soft and not divided into rings, and most have a **shell**. The body consists of a **head**, a **trunk** and a **foot**. The trunk is covered by the **mantle**, which produces the shell. Aquatic molluscs breathe with **gills**, land molluscs with a **lung**.

## Three classes

| Class | Shell | Examples |
|---|---|---|
| **gastropods** | spiral, one piece | Roman snail, pond snail, slug |
| **bivalves** | two valves | swan mussel, mussel, oyster |
| **cephalopods** | internal or absent | octopus, squid, cuttlefish |

## The Roman snail

The Roman (grape) snail lives in gardens and woods. It has two pairs of tentacles on its head, with eyes at the tips of the long ones. It scrapes off food with a **radula**, a tongue covered with tiny teeth. The snail can harm gardens because it eats leaves.

## Bivalves filter water

Swan mussels and mussels have no head. Water enters the shell, the gills hold back tiny organisms, and clean water flows out. One mussel filters several tens of litres of water a day, which is why bivalves **clean bodies of water**.

If a grain of sand gets inside the shell, the mantle coats it in layers of mother-of-pearl. This is how a **pearl** forms.

## Cephalopods

Cephalopods are the most advanced molluscs. Their foot has turned into **tentacles** around the head. They have well-developed eyes and swim fast by **jet propulsion**, forcefully pushing out water. When in danger they release **ink**.

## Exercises

1. What parts does a mollusc's body consist of?
2. Which class does the Roman snail belong to?
3. How are mussels useful for bodies of water?
4. How does a pearl form?
5. How does a squid swim?

## Answers

1. A head, a trunk and a foot.
2. Gastropods.
3. They filter water, holding back tiny organisms and dirt.
4. The mantle coats a grain of sand that got into the shell with layers of mother-of-pearl.
5. By jet propulsion, forcefully pushing out water.`,
      quiz: [
        ["What produces a mollusc's shell?", ["The foot", "The mantle", "The gills", "The radula"]],
        ["Which mollusc is a bivalve?", ["The octopus", "The Roman snail", "The mussel", "The squid"]],
        ["How does the Roman snail breathe?", ["With gills", "With a lung", "Only through its skin", "With tracheae"]],
        ["Which molluscs release ink?", ["Gastropods", "Bivalves", "Cephalopods", "None"]],
        ["How do bivalves feed?", ["They hunt fish", "They filter water", "They scrape leaves", "They suck blood"]],
      ],
    },
    "arthropods-crustaceans-arachnids": {
      objectives: ["List the common features of arthropods", "Describe the structure of the crayfish", "Compare crustaceans, arachnids and insects", "Explain the danger of ticks and how to protect yourself"],
      content: `## Phylum arthropods

**Arthropods** are the largest phylum of animals. Their features:

- jointed limbs,
- an external skeleton of **chitin**, which protects the body but does not grow, so the animal **moults**,
- a body divided into sections.

## Comparison

| Class | Body sections | Walking legs | Antennae | Breathing |
|---|---|---|---|---|
| **crustaceans** | cephalothorax, abdomen | 5 pairs | 2 pairs | gills |
| **arachnids** | cephalothorax, abdomen | 4 pairs | none | lungs, tracheae |
| **insects** | head, thorax, abdomen | 3 pairs | 1 pair | tracheae |

## The crayfish

The crayfish lives in clean fresh water, including Lake Sevan. It is active at night and feeds on plants and dead animals. Its front pair of legs has turned into **claws**. The crayfish swims backwards by moving its abdomen. Because it lives only in clean water, it serves as an **indicator** of water purity.

## Arachnids

The **garden cross spider** spins a web from threads made by its **silk glands**. It paralyses prey with a venomous bite, injects digestive juice into it and sucks up the liquefied food. This is called **external digestion**.

Arachnids also include **scorpions** and **ticks**. The forest tick can carry **tick-borne encephalitis** and **Lyme disease**. When going into the forest, wear closed clothing and check your body when you return. An attached tick should be removed by a doctor.

## Exercises

1. Why do arthropods moult?
2. How many pairs of walking legs does a spider have?
3. How do crustaceans differ from insects? Name two differences.
4. Why is the crayfish an indicator of water purity?
5. What is external digestion?

## Answers

1. The chitin skeleton does not grow, so to grow the animal replaces it.
2. 4 pairs.
3. Crustaceans have 5 pairs of walking legs and 2 pairs of antennae, insects have 3 pairs of legs and 1 pair of antennae.
4. It lives only in clean water.
5. Food is digested outside the body, inside the prey, and the spider sucks up the already liquefied food.`,
      quiz: [
        ["What is the external skeleton of arthropods made of?", ["Bone", "Chitin", "Limestone", "Cartilage"]],
        ["How many pairs of walking legs do insects have?", ["2", "3", "4", "5"]],
        ["Which is not an arachnid?", ["The scorpion", "The tick", "The garden cross spider", "The crayfish"]],
        ["How does the crayfish breathe?", ["With lungs", "With gills", "Through its skin", "With tracheae"]],
        ["Which disease can a tick carry?", ["Malaria", "Tick-borne encephalitis", "Flu", "Chickenpox"]],
      ],
    },
    insects: {
      objectives: ["Describe the body structure of an insect", "Distinguish complete and incomplete metamorphosis", "Give examples of useful and harmful insects", "Explain the life of a honeybee colony"],
      content: `## Structure

Insects are the most diverse animals. Their body consists of a **head**, a **thorax** and an **abdomen**.

- On the head are **antennae** (1 pair), **compound eyes** and **mouthparts**.
- On the thorax are **3 pairs of legs** and usually **2 pairs of wings**.
- On the abdomen are **spiracles**, through which air enters the **tracheae**.

Mouthparts vary: **chewing** (beetle, cricket), **sucking** (butterfly), **piercing-sucking** (mosquito), **lapping** (fly).

## Development

| Metamorphosis | Stages | Examples |
|---|---|---|
| **complete** | egg → larva → pupa → adult | butterfly, beetle, bee, fly |
| **incomplete** | egg → nymph (similar to the adult) → adult | locust, dragonfly, cockroach |

In complete metamorphosis the larva and the adult eat different food. For example, a caterpillar eats leaves, while the butterfly drinks nectar.

## The honeybee colony

A honeybee colony has one **queen**, who lays eggs, several hundred **drones** (males) and tens of thousands of **worker bees**. Workers build wax combs, collect nectar and pollen, feed the larvae and guard the hive. Bees "tell" each other where food is with a **dance**.

In Armenia beekeeping is an ancient tradition. Bees not only give honey but also **pollinate** orchards and fields.

## Useful and harmful

| Useful | Harmful |
|---|---|
| bee, silkworm (silk), ladybird (eats aphids), dragonfly | Colorado beetle, locust, aphid, clothes moth, mosquito, fly |

## Exercises

1. What sections does an insect's body consist of?
2. What mouthparts does a mosquito have?
3. Complete the sequence: egg → larva → ... → butterfly.
4. How is the ladybird useful?
5. Name three jobs of worker bees.

## Answers

1. A head, a thorax and an abdomen.
2. Piercing-sucking.
3. Pupa.
4. It eats aphids, which harm plants.
5. For example: they build combs, collect nectar and feed the larvae.`,
      quiz: [
        ["Which body section are an insect's legs attached to?", ["The head", "The thorax", "The abdomen", "The antennae"]],
        ["Which insect develops by incomplete metamorphosis?", ["The butterfly", "The bee", "The locust", "The fly"]],
        ["Which stage is missing in incomplete metamorphosis?", ["Egg", "Larva", "Pupa", "Adult"]],
        ["Who lays eggs in a honeybee colony?", ["The drone", "The worker bee", "The queen", "All of them"]],
        ["How does an insect breathe?", ["With lungs", "With gills", "With tracheae", "Only through its skin"]],
      ],
    },
    fishes: {
      objectives: ["List the features of chordates and vertebrates", "Explain how fish are adapted to life in water", "Describe how fish breathe with gills", "Name the fish of Lake Sevan and the problem of protecting them"],
      content: `## Chordates and vertebrates

The internal axial skeleton of **chordates** is the notochord. In most of them the notochord is replaced by a **backbone**, which is why they are called **vertebrates**. Vertebrates have an internal skeleton, a skull protecting the brain, and a closed circulatory system.

## Fish and water

- A **streamlined body** reduces water resistance.
- **Scales** are covered with mucus, which reduces friction and protects the skin.
- **Fins**: the tail fin pushes the fish forward, the paired fins act as rudders.
- The **swim bladder** changes the fish's density so it stays at the right depth.
- The **lateral line** senses water movement and changes in pressure.

## Breathing and circulation

A fish takes water in through its mouth, the water passes over the **gills** and leaves from under the gill covers. In the gill filaments the blood absorbs oxygen dissolved in the water. A fish's heart has **two chambers** (an atrium and a ventricle), and there is **one** circulation loop.

Fish are **cold-blooded**: their body temperature depends on the water. Most reproduce by **spawn** (roe), which is fertilised in the water.

## The fish of Lake Sevan

The **Sevan trout** (ishkhan) is endemic, meaning it lives in the wild only here. Lake Sevan used to hold several forms of ishkhan that spawned at different times and in different places. In the 20th century the lowering of the lake level and overfishing did great harm to the ishkhan, while the **whitefish** and **crucian carp** introduced to the lake became the main commercial fish. Today the Sevan trout is in the **Red Book**, and its stocks are being restored at fish hatcheries.

## Exercises

1. How does a backbone differ from a notochord?
2. What is the role of the swim bladder?
3. Why does a fish die out of water even though air has more oxygen?
4. How many chambers does a fish's heart have?
5. What does "endemic species" mean?

## Answers

1. The backbone is made of separate vertebrae, while the notochord is a single flexible rod.
2. It changes the fish's density so it stays at the right depth.
3. In air the gill filaments stick together and dry out, so they cannot absorb oxygen.
4. Two: an atrium and a ventricle.
5. A species that lives in the wild only in a particular area.`,
      quiz: [
        ["How does a fish breathe?", ["With lungs", "With gills", "Only through its skin", "With tracheae"]],
        ["Which organ senses water movement?", ["The swim bladder", "The lateral line", "The scales", "The tail fin"]],
        ["How many chambers does a fish's heart have?", ["2", "3", "4", "1"]],
        ["Which fish is endemic to Lake Sevan?", ["The whitefish", "The crucian carp", "The Sevan trout", "The catfish"]],
        ["Fish are:", ["warm-blooded", "cold-blooded", "mammals", "breathe only with lungs"]],
      ],
    },
    "amphibians-reptiles": {
      objectives: ["Explain why amphibians depend on water", "Describe the development of a frog", "List the adaptations of reptiles to life on land", "Distinguish venomous and harmless snakes of Armenia"],
      content: `## Amphibians

**Amphibians** (frogs, toads, newts) live both in water and on land. An adult frog breathes with **lungs** and **moist skin**. The skin must stay moist, so frogs live near water. The heart has **three chambers** (two atria and a ventricle), and there are **two** circulation loops.

## Development of a frog

A frog lays spawn in water. From the spawn hatches a **tadpole**, which looks like a fish: it has a tail, gills and a lateral line. Gradually legs grow, lungs appear, the tail shortens and the tadpole turns into a frog. This development shows that amphibians evolved from ancient fish.

## Reptiles

**Reptiles** (lizards, snakes, turtles, crocodiles) are the first true land vertebrates.

| Adaptation | What it gives |
|---|---|
| dry skin with horny scales | protects against drying out |
| breathe only with lungs | the skin does not need to take part in breathing |
| egg with a tough shell, laid on land | not dependent on water for reproduction |
| internal fertilisation | sex cells do not need water |

Reptiles are also cold-blooded, so they spend the winter hibernating.

## Snakes of Armenia

Several species of snakes live in Armenia. The most dangerous is the **blunt-nosed viper**; the **Armenian viper** and **Darevsky's viper**, which are in the Red Book, are also venomous. **Grass snakes** are harmless, for example the **common grass snake** with two yellow patches on the sides of its head.

If a snake bites someone, lay the person down, keep the limb still and call a doctor at once. Never cut the wound or suck out the venom.

## Exercises

1. Why can't a frog live in a dry desert?
2. How is a tadpole similar to a fish?
3. How many chambers does a frog's heart have?
4. Name two adaptations of reptiles to land.
5. What must you not do after a snakebite?

## Answers

1. Its skin must stay moist, and its spawn develops in water.
2. It has a tail, gills and a lateral line, and it lives in water.
3. Three.
4. For example: dry skin with horny scales, an egg with a tough shell.
5. Cut the wound and suck out the venom.`,
      quiz: [
        ["How does an adult frog breathe?", ["Only with gills", "With lungs and skin", "Only through its skin", "With tracheae"]],
        ["What is the larva of a frog called?", ["A pupa", "A tadpole", "A fry", "A caterpillar"]],
        ["Where do reptiles lay their eggs?", ["Only in water", "On land", "In tree bark", "They do not lay eggs"]],
        ["Which snake is the most dangerous in Armenia?", ["The grass snake", "The blunt-nosed viper", "The smooth snake", "The common grass snake"]],
        ["Why do reptiles hibernate in winter?", ["They are warm-blooded", "They are cold-blooded", "There is plenty of food in winter", "They fly south"]],
      ],
    },
    birds: {
      objectives: ["List the adaptations of birds to flight", "Explain why birds are warm-blooded", "Describe the reproduction and migration of birds", "Give examples of birds of Armenia"],
      content: `## Adapted to flight

**Birds** are warm-blooded vertebrates whose bodies are covered with **feathers** and whose forelimbs are **wings**.

| Feature | How it helps flight |
|---|---|
| hollow light bones | reduce weight |
| **keel**, an outgrowth of the breastbone | strong muscles that move the wings attach to it |
| no teeth, a horny beak | a light head |
| **air sacs** | in flight the lungs get air both on breathing in and on breathing out |
| fast digestion | food is quickly turned into energy, no extra weight is kept |

## Warm-bloodedness

A bird's heart has **four chambers**, and oxygen-rich and oxygen-poor blood do not mix. This allows a high metabolic rate. Body temperature is constant, about 40–42 °C, and feathers keep the heat in. So birds can be active in cold weather.

## Reproduction and migration

Birds lay eggs, usually in a nest, and **incubate** them, warming them with their bodies. Chicks may be **precocial** (chicks of hens and ducks soon start running) or **altricial** (chicks of sparrows and pigeons hatch naked and blind).

In autumn many birds **migrate** to warm countries because there is little food in winter. They find their way by the Sun, the stars and the Earth's magnetic field.

## Birds of Armenia

More than 350 bird species have been recorded in Armenia. The **Armenian gull** nests on Lake Sevan, **storks** are found in the Ararat Valley, and the **Caucasian snowcock**, the **bearded vulture** and the **golden eagle** live in the mountains. Among the people the stork is considered a symbol of happiness.

## Exercises

1. Name two adaptations of a bird's skeleton to flight.
2. What is the keel?
3. Why are birds warm-blooded and reptiles not?
4. Which chicks are called altricial?
5. Why do birds migrate in autumn?

## Answers

1. Hollow light bones, the keel.
2. An outgrowth of the breastbone to which the wing muscles attach.
3. In their four-chambered heart the blood does not mix, their metabolism is high, and feathers keep the heat in.
4. Chicks that hatch helpless and are fed by their parents in the nest.
5. There is little food in winter.`,
      quiz: [
        ["How many chambers does a bird's heart have?", ["2", "3", "4", "1"]],
        ["What covers a bird's body?", ["Scales", "Feathers", "Fur", "Mucus"]],
        ["What is the role of air sacs?", ["They digest food", "They help breathing in flight", "They store the egg", "They produce feathers"]],
        ["Which bird has precocial chicks?", ["The sparrow", "The pigeon", "The duck", "The swallow"]],
        ["Which bird nests on Lake Sevan?", ["The Armenian gull", "The penguin", "The ostrich", "The parrot"]],
      ],
    },
    mammals: {
      objectives: ["List the main features of mammals", "Explain the difference between the teeth of herbivores and carnivores", "Name the main orders of mammals", "Give examples of mammals of Armenia"],
      content: `## Features

**Mammals** are the most highly organised vertebrates.

- They feed their young with **milk**, produced by **mammary glands**.
- The body is covered with **hair**.
- The heart has **four chambers**, and mammals are warm-blooded.
- They have a **diaphragm**, a muscle that separates the chest cavity from the abdominal cavity and takes part in breathing.
- Teeth are of different kinds: **incisors**, **canines** and **molars**.
- The brain is well developed and has a cortex with folds.
- Most are **viviparous**: the young develop inside the mother's body and are nourished through the **placenta**.

## Teeth tell you about food

| Animal | Teeth | Food |
|---|---|---|
| wolf, lynx | large canines, sharp molars | meat |
| cow, sheep | incisors only on the lower jaw, broad molars, no canines | grass |
| hare, squirrel (rodents) | large, constantly growing incisors | seeds, bark |

## Orders

| Order | Examples |
|---|---|
| insectivores | hedgehog, mole |
| bats | bat (the only flying mammal) |
| rodents | mouse, squirrel, beaver |
| carnivores | wolf, fox, bear, lynx |
| cetaceans | whale, dolphin |
| hoofed mammals | horse, cow, goat, deer |
| primates | monkeys and apes |

There are also **egg-laying** mammals, the **platypus** and the **echidna** (Australia), and **marsupials**, such as the **kangaroo** and the **koala**.

## Mammals of Armenia

More than 80 mammal species live in Armenia. The Red Book includes the **Persian leopard** (Khosrov Forest, Zangezur), the **bezoar goat**, the **Armenian mouflon** and the **brown bear**. The mountain forests are home to the **Caucasian red deer**, the **wolf**, the **fox** and the **marten**.

## Exercises

1. Which feature gave mammals their name?
2. What is the diaphragm?
3. How do the teeth of a wolf and a cow differ?
4. Which mammal flies?
5. Name two mammals from the Red Book of Armenia.

## Answers

1. Feeding their young with milk (from mammary glands).
2. A muscle that separates the chest cavity from the abdominal cavity and helps breathing.
3. The wolf has large canines and sharp molars, the cow has no canines and broad molars.
4. The bat.
5. For example, the Persian leopard and the Armenian mouflon.`,
      quiz: [
        ["Which is not a feature of mammals?", ["Mammary glands", "A coat of hair", "Feathers", "A diaphragm"]],
        ["Which order does the squirrel belong to?", ["Carnivores", "Rodents", "Insectivores", "Hoofed mammals"]],
        ["Which mammal lays eggs?", ["The kangaroo", "The platypus", "The dolphin", "The bat"]],
        ["Whose teeth are adapted to eating meat?", ["The cow's", "The sheep's", "The wolf's", "The hare's"]],
        ["Where in Armenia does the Persian leopard live?", ["On the shore of Lake Sevan", "In Khosrov Forest and Zangezur", "In the centre of Yerevan", "In the canals of the Ararat Valley"]],
      ],
    },
    "animal-evolution": {
      objectives: ["Give evidence for the historical development of animals", "State the order of the vertebrate classes", "Explain what a transitional form is", "Link increasing complexity of structure to the environment"],
      content: `## How we know

1. **Fossils**: petrified remains and traces that show which animals lived in the past. The older the layer, the simpler the animals in it.
2. **Comparative anatomy**: a human arm, a bat's wing and a dolphin's flipper are built from the same bones. These are **homologous organs**, which point to a common ancestor.
3. **Embryology**: the embryos of vertebrates are very similar to each other at early stages.

## From simple to complex

| Stage | What new appeared |
|---|---|
| protozoa | a single cell |
| cnidarians | multicellularity, two layers of cells |
| worms | bilateral symmetry, organ systems |
| arthropods | jointed limbs, external skeleton |
| fish | backbone, jaws |
| amphibians | coming onto land, lungs, five-fingered limb |
| reptiles | land egg, horny scales |
| birds and mammals | four-chambered heart, warm-bloodedness |

## Transitional forms

**Transitional forms** combine features of two groups.

- **Archaeopteryx** had feathers and wings like birds, but also teeth, a long tail and claws on its wings like reptiles.
- **Lobe-finned fish** had fleshy fins with bones, from which the limbs of amphibians developed.

## Exercises

1. What are fossils?
2. What are homologous organs? Give an example.
3. Which reptile features did Archaeopteryx have?
4. In which group does warm-bloodedness first appear?
5. Put in order: reptiles, fish, birds, amphibians.

## Answers

1. Petrified remains and traces of ancient organisms.
2. Organs of the same origin, even though they may do different jobs, for example a human arm and a bat's wing.
3. Teeth, a long tail, claws on its wings.
4. In birds and mammals.
5. Fish, amphibians, reptiles, birds.`,
      quiz: [
        ["What are homologous organs?", ["Organs of the same origin", "Organs that always do the same job", "Organs found only in plants", "Lost organs"]],
        ["Which is a transitional form between reptiles and birds?", ["The tadpole", "Archaeopteryx", "The dolphin", "The hydra"]],
        ["Which group was first to have a land egg?", ["Fish", "Amphibians", "Reptiles", "Insects"]],
        ["Which animals did amphibians evolve from?", ["From lobe-finned fish", "From insects", "From birds", "From reptiles"]],
        ["In which layers are fossils simpler?", ["In younger ones", "In older ones", "They are always the same", "Only in marine ones"]],
      ],
    },
    "fauna-of-armenia": {
      objectives: ["Explain why Armenia's wildlife is so diverse", "Name protected areas", "List the causes of species loss", "Suggest actions to protect animals"],
      content: `## A small country, great diversity

Armenia's territory is small, but it has semi-deserts, steppes, forests, alpine meadows and lakes. Altitude ranges from about 400 m (the Debed gorge) to 4,090 m (Aragats). So a small area holds very different animals: more than 17 thousand species of invertebrates and about 550 species of vertebrates.

## The Red Book

The **Red Book** is a list of species threatened with extinction. The Red Book of Armenia includes, for example, the **Persian leopard**, the **Armenian mouflon**, the **bezoar goat**, the **brown bear**, the **Sevan trout**, **Darevsky's viper** and the **bearded vulture**.

## Protected areas

| Area | What it protects |
|---|---|
| **Khosrov Forest** reserve | leopard, bezoar goat, mouflon, vultures |
| **Sevan** national park | the lake, trout, waterbirds |
| **Dilijan** national park | forests, deer, brown bear |
| **Shikahogh** reserve | the forests of Zangezur |
| **Arevik** national park | the Meghri mountains, leopard |

## Why species disappear

1. Destruction of habitats: felling forests, growth of cities.
2. Poaching.
3. Pollution of water and soil.
4. Introduction of alien species.
5. Climate change.

## What I can do

- Do not destroy nests or catch wild animals.
- Do not leave litter in nature.
- Make bird feeders in winter.
- Follow the rules in nature reserves.

## Exercises

1. Why do so many different animals live in Armenia's small territory?
2. What is the Red Book?
3. In which reserve is the leopard protected?
4. Name three causes of species loss.
5. Suggest two steps a schoolchild can take to help animals.

## Answers

1. Altitude and climate change a lot, and there are many different natural zones.
2. A list of species threatened with extinction.
3. In Khosrov Forest (and also in Arevik and Zangezur).
4. For example: destruction of habitats, poaching, pollution.
5. For example: make bird feeders, do not leave litter in nature.`,
      quiz: [
        ["What is the Red Book?", ["Fairy tales about animals", "A list of species threatened with extinction", "Hunting rules", "A list of domestic animals"]],
        ["Which area protects the Sevan trout?", ["Dilijan national park", "Sevan national park", "Shikahogh reserve", "Arevik national park"]],
        ["Roughly how high is Armenia's highest point?", ["1,900 m", "2,400 m", "4,090 m", "5,600 m"]],
        ["Which is not a cause of species loss?", ["Felling forests", "Poaching", "Bird feeders", "Water pollution"]],
        ["Which animal is in the Red Book of Armenia?", ["The house mouse", "The Armenian mouflon", "The sparrow", "The crow"]],
      ],
    },
  },
};
