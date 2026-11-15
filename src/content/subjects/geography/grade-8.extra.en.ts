import type { RuLesson } from "../../ru-overlay";

export const enExtra8: Record<string, RuLesson> = {
  "topographic-map": {
    objectives: ["Explain how contour lines show relief", "Find the absolute and relative height of a point", "Judge how steep a slope is and draw a relief profile", "Measure distance with the scale and direction with a bearing"],
    content: `## What a topographic map is

A **topographic map** is a large-scale map (for example 1 : 25,000 or 1 : 50,000) that shows relief, rivers, forests, roads and settlements in detail. Hikers, rescuers, builders and the army use it.

## Height

- **Absolute height** is the height of a point **above sea level**. In Armenia and the other CIS countries it is measured from the level of the **Baltic Sea**. The absolute height of Aragats' northern summit is 4,090 m.
- **Relative height** is the height of one point above another. For example, Yerevan lies at about 1,000 m, so Aragats is about 4,090 − 1,000 = 3,090 m higher than Yerevan.

## Contour lines

A **contour line** joins points with **the same absolute height**. Imagine slicing a mountain with flat planes every 20 m and drawing the outline of each slice from above on paper.

- The difference in height between neighbouring contours is the **contour interval** (for example 10 m or 20 m).
- **Slope ticks**, small dashes on a contour, show which way the slope goes down.
- **Closed contours** with a bigger number in the middle mean a **hill** or summit; if the number is smaller and the ticks point inwards, they mean a **pit** or hollow.
- The **closer** together the contours, the **steeper** the slope. The **further apart**, the **gentler**.

**Rule.** Contour lines never cross or split, because one point cannot have two different heights at once (a vertical cliff is the exception).

## Steepness of a slope

The average steepness, or gradient, of a slope is found like this:

$$\\text{gradient} = \\frac{\\text{difference in height}}{\\text{horizontal distance}}$$

For example, two points on the map are at 1,600 m and 1,800 m, and the distance between them is 1 km = 1,000 m. The gradient is 200 : 1,000 = 0.2, so for every 100 m the road climbs 20 m (20%). A road sign would say "20%". For a car, even 10% is very steep.

## Relief profile

A **profile** is a "slice" through the relief along a chosen line. How to draw one:

1. Draw a line on the map between two points.
2. Mark where the line crosses each contour and write down its height.
3. On paper, draw a horizontal axis (distance) and a vertical axis (height).
4. Plot the points and join them with a smooth line.

A profile is useful when planning a route: it shows where you will have to climb and where you will go down.

## Scale and bearing

- A **ratio scale** of 1 : 50,000 means 1 cm on the map is 50,000 cm = 500 m on the ground. If two villages are 6 cm apart on the map, they are really 6 · 500 = 3,000 m = 3 km apart.
- A **bearing** (azimuth) is the angle between north and the direction of an object, measured clockwise. North is 0°, east 90°, south 180°, west 270°. In fog or in a forest a hiker keeps to a bearing with a compass and does not get lost.

## Exercises

1. How is absolute height different from relative height?
2. Why can contour lines not cross?
3. On a map the contours on a mountain's west slope are close together and on the east slope far apart. Which slope is easier to climb?
4. Two points are at 1,200 m and 1,350 m, and 1,500 m apart. What is the average gradient?
5. On a 1 : 25,000 map a path is 8 cm long. How long is it really?
6. Which direction does a bearing of 180° show?

## Answers

1. Absolute height is measured from sea level, relative height from another point.
2. One point cannot have two different heights.
3. The east slope, because it is gentler.
4. 150 : 1,500 = 0.1, that is 10%.
5. 8 · 250 m = 2,000 m = 2 km.
6. South.`,
    quiz: [
      ["What does a contour line join?", ["Points with the same temperature", "Points with the same absolute height", "The banks of one river", "All the summits"]],
      ["What do contour lines packed close together mean?", ["A gentle slope", "A steep slope", "A plain", "A lake"]],
      ["What is absolute height measured from in Armenia?", ["The level of Lake Sevan", "The level of the Baltic Sea", "The Ararat Plain", "Yerevan"]],
      ["How many km on the ground are 4 cm on a 1 : 50,000 map?", ["0.5 km", "2 km", "4 km", "20 km"]],
      ["Which bearing is east?", ["0°", "90°", "180°", "270°"]],
    ],
  },

  "earthquakes-armenia": {
    objectives: ["Explain Armenia's earthquakes through the movement of plates", "Tell magnitude and intensity apart", "Name the great earthquakes in Armenia's history", "List the rules of earthquake-proof building and personal preparedness"],
    content: `## Plates pressing together

Armenia lies in the **Alpine–Himalayan earthquake belt**, which stretches from the Alps to the Himalayas. The cause is the **Arabian plate**, which moves north by about **2 cm** a year and presses into the **Eurasian** plate. The Armenian Highland is being crumpled between the two plates, which is why it is high and mountainous.

The squeezing builds up **stress** in the rocks, like a compressed spring. When the stress is greater than the strength of the rocks, they crack and suddenly slip along **faults**. That jolt is an **earthquake**.

- The **focus** (hypocentre) is the place deep in the Earth where the slip begins.
- The **epicentre** is the point on the surface directly above the focus. The shaking is strongest there.
- **Seismic waves** spread out from the focus in all directions. Fast **P waves** (push waves) arrive first, then slower, more destructive **S waves**. From the gap between their arrival times, seismologists work out how far away the epicentre is.

## Magnitude and intensity

An earthquake is described with two different measures:

| | Magnitude | Intensity |
|---|---|---|
| What it shows | the **energy** released at the focus | how strongly the shaking is **felt** and what **damage** it does in a given place |
| Scale | the Richter scale or moment magnitude | a 12-point scale (MSK-64, EMS-98) |
| How many values | one for each earthquake | different in different places |

Each step of 1 in magnitude means about **32 times** more energy. A magnitude 7 earthquake releases about 1,000 times more energy than a magnitude 5 one.

## Great earthquakes of Armenia

| Year | Place | What happened |
|---|---|---|
| 893 | **Dvin** | the capital was destroyed and tens of thousands died |
| 1319 | **Ani** | the dome of Ani Cathedral and many buildings fell; the city never recovered |
| 1679 | **Garni** | the pagan temple of Garni collapsed (it was rebuilt in the 1970s) |
| 1840 | Mount **Ararat** | the village of Akori and the monastery of St Hakob were destroyed |
| 1988 | **Spitak** | magnitude about 6.8, intensity 10 points at the epicentre. About 25,000 people died; Spitak, Leninakan (Gyumri) and Kirovakan (Vanadzor) were wrecked |

So many died in the Spitak earthquake because Soviet prefabricated panel and frame buildings were not designed for such shaking.

## How to stay safe

**Earthquake-proof building.**

- Choose the site well: do not build on active faults, landslide slopes or weak, waterlogged ground.
- The reinforced concrete frame must be firmly tied together and the walls strengthened.
- Modern buildings stand on **seismic isolators**, rubber-and-steel pads under the foundations that soak up the shaking. Armenia is one of the leaders in using this technology.

**Being prepared.**

1. At home, fix shelves and heavy furniture to the wall.
2. Pack an **emergency bag**: water, food, a torch, a first-aid kit, copies of documents.
3. If shaking starts indoors: **"Drop, cover, hold on"** — get under a sturdy table or stand by a load-bearing wall, away from windows. Do not use the lift.
4. Outdoors, move away from buildings, power poles and trees.
5. Afterwards, expect aftershocks, do not go into damaged buildings, and call **112**.

## Exercises

1. Which two plates cause Armenia's earthquakes?
2. How is the focus different from the epicentre?
3. How is magnitude different from intensity?
4. Why can the same earthquake be 9 points in one town and 5 in another?
5. Name three things to do during an earthquake indoors.

## Answers

1. The Arabian plate pressing into the Eurasian plate.
2. The focus is deep in the Earth where the slip starts; the epicentre is the point above it on the surface.
3. Magnitude is the energy released at the focus (one value); intensity is the effect of the shaking in a particular place (different in different places).
4. The towns are at different distances from the epicentre and have different ground and buildings.
5. Get under a sturdy table or stand by a load-bearing wall, keep away from windows, do not use the lift.`,
    quiz: [
      ["Which plate is pressing into the Eurasian plate under Armenia?", ["The Pacific", "The Arabian", "The African", "The Indian"]],
      ["What is the point on the surface directly above the focus called?", ["The hypocentre", "The epicentre", "A fault", "A crater"]],
      ["What does magnitude measure?", ["The damage in a town", "The energy released at the focus", "How long the shaking lasts", "The number of victims"]],
      ["In which year was the Spitak earthquake?", ["1679", "1840", "1988", "2000"]],
      ["What should you do during an earthquake indoors?", ["Take the lift down", "Stand by a window", "Get under a sturdy table or stand by a load-bearing wall", "Run down the stairs"]],
    ],
  },

  "protected-areas": {
    objectives: ["Tell a nature reserve, a national park and a sanctuary apart", "Describe Armenia's reserves and national parks", "Explain what the Red Book is", "Name things everyone can do to protect nature"],
    content: `## Why protected areas are needed

Armenia is a small country but very rich in nature: in about 30,000 km² there are semi-deserts and alpine meadows, forests and cliffs. More than 3,800 species of higher plants grow here, and about 140 of them are **endemic**, found nowhere else in the world. Armenia is part of the **Caucasus biodiversity hotspot**, one of 36 such areas on Earth.

Human activity, such as logging, poaching, mining and overgrazing, threatens this wealth. So the state puts some areas under special protection.

## Kinds of protected areas

| Kind | What is allowed |
|---|---|
| **State nature reserve** | nature is fully protected, economic activity is banned, only scientific observation takes place |
| **National park** | a strictly protected core, while tourism and traditional farming are allowed in the rest |
| **Sanctuary** | one particular feature or species is protected (a forest, birds); other activities are limited |
| **Natural monument** | a single unique feature: a waterfall, a cave, a rock, an ancient tree |

## Nature reserves

- **Khosrov Forest** (Ararat province). Legend says King Khosrov Kotak planted the forest and protected it in the 4th century. It became a reserve in 1958. The **bezoar goat**, the **Armenian mouflon** and the brown bear live here, and camera traps sometimes film the **Persian leopard**.
- **Shikahogh** (Syunik). Broadleaf oak and hornbeam forests, with groves of yew and plane trees. It links with the forests of Zangezur, through which leopards move between Iran and Armenia.
- **Erebuni** (near Yerevan). Set up in 1981 to protect species of **wild wheat**. It is one of the world's few "wheat reserves".

## National parks

| National park | Year | What it protects |
|---|---|---|
| **Sevan** | 1978 | the lake, its shores and basin, water birds, the Sevan trout |
| **Dilijan** | 2002 | the mixed forests of Tavush, Lake Parz, mineral springs, medieval monasteries (Haghartsin, Goshavank) |
| **Lake Arpi** | 2009 | a high mountain lake and marshes in Shirak, dozens of kinds of water birds |
| **Arevik** | 2009 | the dry mountain slopes of the Meghri Range and the leopard's habitats |

## The Red Book

The **Red Book** lists the plants and animals in danger of dying out. Red means "danger". The 2010 edition of the Red Book of Armenia includes about **450 plant species** and more than **300 animal species**.

Examples: the **leopard**, the **Armenian mouflon**, the **bezoar goat**, the **brown bear**, the **Sevan trout** (several of its subspecies have already vanished in the wild), the **Armenian viper**, the **bearded vulture**.

Hunting, collecting or selling Red Book species is against the law.

## What you can do

- On hikes, stay on the paths, do not pick rare flowers, and take your litter home.
- Light fires only where allowed and put them out completely: forest fires destroy hundreds of hectares every year.
- Join tree-planting and clean-up days.
- If you see poaching or illegal logging, tell an adult or call the environmental inspectorate.

## Exercises

1. How is a nature reserve different from a national park?
2. Why was the Erebuni reserve set up?
3. Which national park protects Armenia's largest lake?
4. What is the Red Book? Give three examples of animals in the Red Book of Armenia.
5. Why are the forests of Syunik and Vayots Dzor important for the leopard?

## Answers

1. In a reserve nature is fully protected and economic activity is banned; in a national park tourism and traditional farming are allowed outside the core.
2. To protect species of wild wheat.
3. Sevan National Park.
4. A list of species in danger of dying out. The leopard, the Armenian mouflon, the bezoar goat.
5. They link the leopard's habitats in Armenia and Iran, so the animals can move along them.`,
    quiz: [
      ["Where is economic activity completely banned?", ["In a national park", "In a state nature reserve", "In a city park", "On a pasture"]],
      ["Which reserve was set up to protect wild wheat?", ["Khosrov Forest", "Erebuni", "Shikahogh", "Dilijan"]],
      ["Which king is Khosrov Forest named after?", ["Tigranes the Great", "Khosrov Kotak", "Artashes I", "Ashot Yerkat"]],
      ["What does it mean if an animal is in the Red Book?", ["It is dangerous to people", "It is in danger of dying out", "It is red", "It may be hunted"]],
      ["Which national park has the monasteries of Haghartsin and Goshavank?", ["Sevan", "Dilijan", "Lake Arpi", "Arevik"]],
    ],
  },
};
