import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Wood joints, electric circuits, home repairs, ergonomics.",
    "An apron from a pattern, lavash and Armenian cuisine, grains and pulses, preserving food.",
  ],
  lessons: {
    "wood-joints-and-fasteners": {
      objectives: ["Recognise the types of wood joints", "Choose a fastener: nail, screw, glue", "Drive a nail and a screw correctly", "Assemble a simple structure"],
      content: `## Why joints are needed

Furniture and wooden objects are usually made of **several** parts. The parts must be joined **firmly** and **neatly**.

## Types of joint

| Joint | Description | Strength |
|---|---|---|
| Butt joint | The parts are simply placed against each other and fixed with a nail or screw | Weak |
| Halving joint | Half the thickness is cut from both parts, and they fit into each other | Medium |
| Mortise and tenon | One part has a "tenon", the other a "mortise" that the tenon fits into | Very strong |
| Dowel joint | Round wooden dowels fit into holes in two parts, with glue | Strong |
| Dovetail | Wedge-shaped pins that stop the parts pulling apart | Very strong, attractive |

Old craftsmen made furniture **without nails**: only with joints and glue.

## Fasteners

- **Nail**: quick and cheap, but it can **split** the wood,
- **Screw**: stronger, and it can be **unscrewed** and screwed in again,
- **Glue**: wood glue is strong, but the parts must be **clamped** until it dries,
- **Brackets** and **hangers**: metal fittings.

## Driving a nail

1. Choose a nail **2-3 times** longer than the thickness of the top part,
2. Hold the nail by the head with your **fingers** and make the first blows **gently**,
3. When the nail stands on its own, **take away** your fingers and hit harder,
4. Hold the hammer **at the end of the handle**, not near the head.

## Driving a screw

1. First make a small hole with a **drill** so that the wood does not split,
2. Choose a **suitable** screwdriver (flat-head or cross-head),
3. Turn it **clockwise**.

## Exercises

1. Which joint is the weakest?
2. How is a mortise and tenon joint made?
3. Why is a screw better than a nail?
4. How long a nail do we choose?
5. Why drill a hole before driving a screw?

## Answers

1. The butt joint.
2. The tenon of one part fits into the mortise of the other.
3. It is stronger and can be unscrewed.
4. 2-3 times longer than the thickness of the top part.
5. So that the wood does not split.`,
      quiz: [
        ["Which joint is one of the strongest?", ["Mortise and tenon", "Butt joint", "Glued paper", "Sticky tape"]],
        ["Which way do we turn a screw to fix it in?", ["Clockwise", "Anticlockwise", "Up and down", "We do not turn it"]],
        ["Why clamp glued parts?", ["Until the glue dries", "So that the glue runs out", "So that they get painted", "There is no need"]],
        ["How do we hold a hammer?", ["At the end of the handle", "Near the head", "With both hands on the head", "With our fingertips"]],
        ["What is a dovetail?", ["A joint with wedge-shaped pins", "A kind of bird", "A screw", "A kind of nail"]],
      ],
    },
    "circuits-and-home-electricity": {
      objectives: ["Tell series circuits from parallel circuits", "Explain the role of a fuse", "Calculate the energy use of appliances", "Save electricity at home"],
      content: `## Series and parallel

| | Series | Parallel |
|---|---|---|
| Connection | Devices one after another, on a single path | Each device has its own branch |
| If one bulb blows | The others go out | The others stay lit |
| Brightness of bulbs | Dimmer | Each one shines at full power |
| Example | Old Christmas tree lights | Household sockets and lights |

**At home** all appliances are connected **in parallel**, so that each one works **independently**.

## The fuse

If many **powerful** appliances are switched on at once, or the wires **short-circuit**, the current rises sharply, and the wires can **overheat** and start a **fire**. A **fuse** or **circuit breaker** then **cuts off** the current by itself.

## Power and consumption

Every appliance has a **power**, measured in **watts** (W). Electricity use is measured in **kilowatt-hours** (kWh).

**Example**: a 1,000 W (1 kW) kettle working for **1 hour** uses **1 kWh**. A 10 W bulb uses the same 1 kWh in **100 hours**.

| Appliance | Approximate power |
|---|---|
| LED bulb | 8-12 W |
| Filament bulb | 60-100 W |
| Computer | 50-300 W |
| Washing machine | 2,000 W |
| Electric kettle | 1,500-2,200 W |

## How to save energy

- Turn off the light when you **leave**,
- Use **LED** bulbs: they use 5-8 times less than filament bulbs,
- Boil **only as much** water in the kettle as you need,
- Unplug appliances **at the socket** when they are not in use,
- Do not keep the fridge door open for **long**.

## Exercises

1. What happens in a series circuit when one bulb blows?
2. Why are household appliances connected in parallel?
3. What does a fuse do?
4. How many kWh does a 2,000 W appliance use in 30 minutes?
5. Name three ways to save electricity.

## Answers

1. The others go out too.
2. So that each one works independently.
3. It cuts off the current when it rises too high.
4. 1 kWh.
5. For example, turning off the light, using LED bulbs, boiling only as much water as you need.`,
      quiz: [
        ["How are household appliances connected?", ["In parallel", "In series", "Without wires", "Only through a battery"]],
        ["What is electricity use measured in?", ["Kilowatt-hours", "Kilograms", "Metres", "Degrees"]],
        ["What does a circuit breaker do?", ["Cuts off the current when there is danger", "Turns on the light", "Heats water", "Charges a phone"]],
        ["Which bulb is more economical?", ["LED", "Filament", "A candle", "They are all the same"]],
        ["How many kWh does a 1,000 W kettle use in 1 hour?", ["1", "1,000", "10", "0.1"]],
      ],
    },
    "home-repairs": {
      objectives: ["Put together a home tool kit", "Do simple repairs", "Change a light bulb safely", "Understand when to call a specialist"],
      content: `## A home tool kit

Every home should have:

- A **hammer** and **nails** of different sizes,
- **Screwdrivers**: flat-head and cross-head,
- **Pliers** and **wire cutters**,
- A **tape measure** and a **spirit level**,
- A **knife** and **scissors**,
- **Sticky tape** and **insulating tape**,
- **Glue**,
- A **torch**.

## Simple repairs

| Problem | What to do |
|---|---|
| A chair wobbles | Tighten the screws or reglue the joint |
| A cupboard door sags | Tighten the hinge screws |
| A tap drips | Turn off the water and replace the washer (with adults) |
| A sink will not drain | Clean the trap or use a plunger |
| You need a hole to hang a picture | Drill a hole with adults and insert a wall plug |

## Changing a light bulb

1. **Turn off** the switch,
2. Wait until the bulb has **cooled down**,
3. Use a **stable** stepladder, not a chair on a chair,
4. Unscrew the old bulb **anticlockwise**,
5. Screw in the new one **clockwise**, without pressing hard,
6. Turn the switch on.

Choose the same **fitting** size and an **energy-saving** LED bulb.

## When to call a specialist

There are jobs you **must not** do yourself:

- Repairing **electrical** wiring and sockets,
- Repairing **gas** appliances: if you **smell** gas, **open** the windows, **do not switch on** the light, and **call** the gas emergency service at once,
- A serious water **leak**.

The single **emergency** number in Armenia is **911**.

## Exercises

1. Name five tools in a home tool kit.
2. What should you do if a chair wobbles?
3. Why wait until the bulb has cooled down?
4. Which way do we screw in a new bulb?
5. What should you do if you smell gas?

## Answers

1. For example, a hammer, a screwdriver, pliers, a tape measure, a torch.
2. Tighten the screws or reglue the joint.
3. So as not to burn your hands.
4. Clockwise.
5. Open the windows, do not switch on the light, call the emergency service.`,
      quiz: [
        ["What is the first thing to do before changing a bulb?", ["Turn off the switch", "Turn on the light", "Wet your hands", "Stand on a chair on a chair"]],
        ["What must you not do if you smell gas?", ["Switch on the light", "Open the windows", "Call the emergency service", "Leave the room"]],
        ["What is the single emergency number in Armenia?", ["911", "100", "555", "123"]],
        ["What do we use to check that a shelf hangs level?", ["A spirit level", "A hammer", "Pliers", "A torch"]],
        ["Which job should be left to a specialist?", ["Repairing the wiring", "Tightening a chair screw", "Screwing in a new bulb", "Hanging a picture on a hook"]],
      ],
    },
    "design-and-ergonomics": {
      objectives: ["Explain what ergonomics is", "Analyse the design of an everyday object", "Take human measurements into account in design", "Redesign an object to make it more convenient"],
      content: `## Beautiful, convenient, useful

Good **design** combines three things:

- **Function**: the object does its job well,
- **Convenience**: it is easy and pleasant to use,
- **Beauty**: it looks good.

**Safety**, **cost** and **impact on nature** also matter.

## Ergonomics

**Ergonomics** is the science of designing objects and workplaces so that they **fit** the human body and its abilities.

Examples:

- The height of a **chair** should let you put your feet **on the floor**, with your knees bent at a **right angle**,
- The top edge of a **computer screen** should be at **eye** level,
- The handle of a **knife** should sit comfortably in the **palm** and not slip,
- A **school backpack** should have **wide**, padded straps and should not weigh **more** than about **10%** of the child's weight.

## Human measurements

Designers use data on the **measurements** of the human body (anthropometry): height, arm length, hand width. An object should be comfortable for **many** people: short and tall, children and the elderly. **Inclusive** design also takes into account the needs of **disabled** people, for example **ramps** for wheelchairs.

## Analysing an object

Take an everyday object (a pen, a cup, a school backpack) and answer:

1. Who is it for?
2. What function does it perform?
3. What **materials** is it made of, and why?
4. What is **convenient** about it, and what is **inconvenient**?
5. How would you **improve** it?

## Project

Redesign a **desk organiser** or a **pencil case**: make sketches, give dimensions based on the size of your **hand** and your **things**, and make a **model** out of card.

## Exercises

1. What three things does good design combine?
2. What is ergonomics?
3. Where should the top edge of a screen be?
4. What is the maximum weight of a school backpack?
5. What is inclusive design?

## Answers

1. Function, convenience, beauty.
2. The science of fitting objects to the human body.
3. At eye level.
4. About 10% of the child's weight.
5. Design that takes into account the needs of all people, including disabled people.`,
      quiz: [
        ["What is ergonomics?", ["The science of fitting objects to the human body", "The science of colour", "The science of electricity", "The science of plants"]],
        ["Where should the top edge of a screen be?", ["At eye level", "At knee level", "High above your head", "On the floor"]],
        ["What should backpack straps be like?", ["Wide and padded", "Thin and stiff", "Made of metal", "There should be none"]],
        ["Which of these is an example of inclusive design?", ["A ramp for wheelchairs", "Very high steps", "Small print", "A dark corridor"]],
        ["How should your knees be bent when you sit on a chair?", ["At a right angle", "Fully straight", "Pulled up to your chest", "Dangling off the chair"]],
      ],
    },
    "sewing-an-apron": {
      objectives: ["Take the necessary measurements", "Draft a simple pattern", "Lay the pattern on fabric and cut out", "Sew the pieces together and finish the edges"],
      content: `## Measurements

For an apron, take measurements with a **tape measure**:

| Measurement | How to take it |
|---|---|
| Waist | Around the narrowest part of the waist |
| Apron length | From the waist to the length you want |
| Bib height | From the waist to the top of the chest (for an apron with a bib) |

Write the measurements in **centimetres** and add a **seam allowance** of 1-2 cm on each side.

## The pattern

A **pattern** is a paper **template** used to cut the fabric. The pattern for a simple apron consists of:

- The **main** part: a rectangle (width about half the waist measurement, length the apron length),
- The **waistband** or **ties**: two long strips,
- The **pocket**: a small rectangle.

The pattern shows the **straight grain** (with an arrow), the **name** of the piece and **how many** to cut.

## Cutting out

1. **Iron** the fabric and fold it **right sides together**,
2. Lay out the pattern pieces so that the **grain** arrow is **parallel** to the selvedge,
3. **Pin** them in place,
4. Draw round them with **tailor's chalk** and add the allowance,
5. Cut out with **dressmaking shears** in long, smooth strokes.

## Sewing

1. Finish the **edges** with a **double-turned hem**: turn under 0.5 cm, then another 1 cm, and stitch,
2. Hem the top edge of the **pocket**, turn the other edges under and sew it to the main part,
3. Fold the **ties** in half lengthways, right sides together, stitch, turn them out and press,
4. Sew the ties to the top **corners** of the apron,
5. Finally **press** the whole apron.

## Exercises

1. What do we take measurements with?
2. Why do we add a seam allowance?
3. What is a pattern?
4. How do we lay the pattern in relation to the grain?
5. What do we draw round the pattern on fabric with?

## Answers

1. A tape measure.
2. So that there is room for the seam.
3. A paper template used to cut the fabric.
4. The grain arrow is parallel to the selvedge.
5. Tailor's chalk.`,
      quiz: [
        ["What is a pattern?", ["A paper template for cutting fabric", "A part of a sewing machine", "A kind of thread", "A button"]],
        ["How do we fold the fabric before cutting out?", ["Right sides together", "Right sides out", "We do not fold it", "In four"]],
        ["What do we draw on fabric with?", ["Tailor's chalk", "A marker", "A pen", "Paint"]],
        ["How should the grain arrow lie?", ["Parallel to the selvedge", "Perpendicular to the selvedge", "On the bias", "At random"]],
        ["Where do we sew the ties?", ["To the top corners of the apron", "To the middle of the apron", "On the pocket", "To the bottom edge"]],
      ],
    },
    "lavash-and-armenian-cuisine": {
      objectives: ["Talk about lavash and the tonir", "Explain why lavash is on the UNESCO list", "Recognise traditional Armenian dishes", "Cook a simple Armenian dish"],
      content: `## Lavash

**Lavash** is a thin, soft **bread** baked in a **tonir**. In **2014**, "Lavash, the preparation, meaning and appearance of traditional bread as an expression of culture in Armenia" was inscribed on the UNESCO list of **intangible** cultural heritage.

## How lavash is baked

Baking lavash is **group** work, usually done by women:

1. The dough is **kneaded** from flour, water and salt,
2. One woman **divides** the dough into balls,
3. Another rolls the dough out very thin with a **rolling pin**,
4. A third **stretches** the dough over a cushion (the **rata**),
5. and quickly **slaps** it onto the hot wall of the tonir,
6. After about a **minute** the lavash is **taken out**.

A **tonir** is a clay **oven** dug into the ground. It was not only a place for baking bread but also the **heart of the home**, around which the family gathered.

Lavash was **dried** and kept for **months**, and before eating it was sprinkled with **water** so that it became soft again. At a wedding, lavash was laid on the bride's shoulders as a wish for **plenty** and **prosperity**.

## Traditional Armenian dishes

| Dish | What it is |
|---|---|
| Tolma | Meat and rice wrapped in vine leaves or baked inside vegetables |
| Khorovats | Meat and vegetables grilled over a fire |
| Harissa | A purée of wheat and meat, cooked for many hours |
| Khash | A soup of beef feet, a winter dish |
| Spas | A soup of matsun with grain |
| Zhengyalov hats | Artsakh flatbread filled with dozens of herbs |
| Gata | A sweet pastry baked for festivals |

## Let's cook spas

**Ingredients**: 1 litre of matsun, 0.5 cup of grain (korkot or achar), 1 egg, 1 tablespoon of flour, butter, dried mint, salt.

1. **Boil** the grain in water until soft,
2. **Whisk** the matsun, egg and flour together in a saucepan,
3. Put it on the heat and **stir constantly** in one direction so that the matsun **does not curdle**,
4. When it boils, add the grain and salt,
5. Finally add the mint, **fried in butter**.

## Exercises

1. Where is lavash baked?
2. In which year was lavash added to the UNESCO list?
3. Why was the tonir the heart of the home?
4. What is harissa?
5. Why must spas be stirred constantly?

## Answers

1. In a tonir.
2. In 2014.
3. The family gathered around it.
4. A purée of wheat and meat.
5. So that the matsun does not curdle.`,
      quiz: [
        ["In which year was lavash added to the UNESCO list?", ["2014", "2001", "1991", "2020"]],
        ["What is a tonir?", ["A clay oven dug into the ground", "An electric oven", "A saucepan", "A table"]],
        ["What is a rata?", ["The cushion used to slap lavash onto the tonir", "A kind of bread", "A ball of dough", "A rolling pin"]],
        ["Which dish is made from matsun and grain?", ["Spas", "Khorovats", "Khash", "Gata"]],
        ["How was dried lavash softened?", ["By sprinkling it with water", "By scorching it in the fire", "With salt", "By freezing it"]],
      ],
    },
    "grains-and-legumes": {
      objectives: ["Recognise kinds of grains and pulses", "Explain their nutritional value", "Cook grain correctly", "Make lentil soup"],
      content: `## Grains

**Grains** here means foods made from cereal crops.

| Grain | Made from | Dish |
|---|---|---|
| Bulgur | Wheat that is boiled, dried and cracked | Pilaf, kufta, tabbouleh |
| Korkot | Hulled wheat | Harissa, soups |
| Buckwheat | Buckwheat seeds | Porridge |
| Rice | Rice grains | Pilaf, tolma |
| Oats | Rolled oats | Breakfast porridge |

Grains are a source of **carbohydrates** and give **long-lasting** energy.

## Pulses

**Pulses** are the seeds of plants in the legume family: **beans**, **lentils**, **chickpeas**, **peas**. They are rich in **plant protein**, **fibre** and **iron**. During fasts Armenians ate a lot of pulses.

## How to cook grain

1. **Pick over** the grain to remove bits and **rinse** it (rice until the water runs clear),
2. Measure the water: usually **2 cups** of water to 1 cup of grain (1.5-2 for bulgur),
3. **Bring** the water to the boil and add **salt**,
4. Pour in the grain, **cover** with a lid and **lower** the heat,
5. Cook until the water is **absorbed**,
6. Turn off the heat and let it **steam** for 10 minutes.

**Beans** and **chickpeas** are **soaked** in water for 8-12 hours beforehand so that they cook faster. **Lentils** do not need soaking.

## Lentil soup

**Ingredients**: 1 cup of red lentils, 1 onion, 1 carrot, 1 tablespoon of tomato purée, vegetable oil, salt, pepper, dried mint, a lemon.

1. Finely **chop** the onion and carrot and **fry** them in the oil,
2. Add the tomato purée,
3. Add the **rinsed** lentils and about 1.5 litres of water,
4. Cook for **20-25 minutes** until the lentils are soft,
5. Add salt, pepper and mint,
6. Serve with a wedge of **lemon** and **lavash**.

## Exercises

1. What is bulgur made from?
2. What nutrients do pulses provide?
3. How much water is needed for a cup of grain?
4. Which pulses must be soaked beforehand?
5. How many minutes does lentil soup cook for?

## Answers

1. From wheat that is boiled, dried and cracked.
2. Plant protein, fibre, iron.
3. Usually 2 cups.
4. Beans and chickpeas.
5. 20-25 minutes.`,
      quiz: [
        ["What is bulgur made from?", ["Wheat", "Rice", "Maize", "Potatoes"]],
        ["Which of these is a pulse?", ["Lentils", "Rice", "Oats", "Potatoes"]],
        ["Which pulses do not need soaking beforehand?", ["Lentils", "Beans", "Chickpeas", "Dried peas"]],
        ["What are pulses rich in?", ["Plant protein", "Sugar", "Alcohol", "Salt"]],
        ["What do we do with the grain after cooking?", ["Let it steam", "Pour off the water", "Freeze it", "Add sugar"]],
      ],
    },
    "preserving-food": {
      objectives: ["Explain why food goes off", "List ways of preserving food", "Recognise traditional Armenian preserves", "Follow food safety rules"],
      content: `## Why food goes off

Food goes off because of **microbes** and **mould**. They multiply quickly in **warm**, **damp** conditions. Spoilt food can cause **food poisoning**.

## Ways of preserving

| Method | How it works | Examples |
|---|---|---|
| Drying | Removes water | Dried fruit, raisins, dried herbs, dried lavash |
| Freezing | Low temperature slows microbes down | Frozen vegetables, meat |
| Salting and pickling | Salt and vinegar hinder microbes | Pickled cucumbers, cabbage, pickled shoots |
| Jam | A lot of sugar preserves fruit | Apricot, green walnut and rosehip jam |
| Smoking | Smoke and salt preserve meat | Smoked fish, basturma |
| Heat treatment and sealing | High temperature kills microbes | Preserves in glass jars |

## Armenian preserves

In the old days Armenian families prepared **stores for the winter** in summer and autumn:

- **Chir**: dried apricots, plums, pears, apples,
- **Sujukh**: walnuts dipped in thickened grape juice,
- **Basturma** and meat **sujuk**,
- **Pickles** of vegetables and wild herbs (**mandak**, **tsil**),
- **Cheese** was kept in **brine** or in **karases**,
- **Kavurma**: fried meat sealed under fat.

## Food safety

- The **fridge** should be between +2 and +5 degrees,
- Keep **raw meat** **separate** from cooked food,
- Check the **use-by date**,
- A jar of preserves with a **bulging lid** **must not** be opened or eaten: it may contain dangerous microbes,
- Put cooked food in the **fridge** within two hours.

## Exercises

1. Why does food go off?
2. How does drying work?
3. What preserves jam?
4. What is sujukh?
5. Why must you not eat preserves with a bulging lid?

## Answers

1. Because of microbes and mould.
2. It removes water, so microbes cannot multiply.
3. The large amount of sugar.
4. Walnuts dipped in thickened grape juice.
5. They may contain dangerous microbes.`,
      quiz: [
        ["Which method removes water from food?", ["Drying", "Freezing", "Salting", "Smoking"]],
        ["What temperature should the fridge be?", ["Between +2 and +5", "Between +20 and +25", "-30", "+50"]],
        ["What is chir?", ["Dried fruit", "A pickled cucumber", "Smoked fish", "Jam"]],
        ["What should you do with a jar of preserves with a bulging lid?", ["Not open it or eat it", "Eat it quickly", "Heat it up and eat it", "Give it to animals"]],
        ["What preserves pickled vegetables?", ["Salt and vinegar", "Only sugar", "Water", "Smoke"]],
      ],
    },
  },
};
