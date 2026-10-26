import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Information, how a computer works, files, the text editor.",
    "Safe internet use, algorithms, first programs in Scratch.",
  ],
  lessons: {
    "what-is-information": {
      objectives: ["Explain what information is", "Classify information by how it is perceived", "List the actions we perform on information", "Give examples of information carriers"],
      content: `## Information

**Information** is everything we learn about the world around us: facts, numbers, pictures, sounds. **Informatics** (computer science) is the science of how to collect, store, process and transmit information, especially with the help of **computers**.

## How we perceive it

| Sense organ | Kind of information | Example |
|---|---|---|
| eyes | **visual** | a picture, text, the colour of a traffic light |
| ears | **auditory** | music, a bell |
| nose | **smell** | the scent of a flower |
| tongue | **taste** | sweet, salty |
| skin | **touch** | warm, cold, soft |

People receive about **80–90%** of their information through **sight**.

## What we do with information

1. **Collect** it (observe, measure, ask).
2. **Store** it (write it in a notebook, remember it, save it on a computer).
3. **Process** it (calculate, compare, translate).
4. **Transmit** it (speak, write a letter, send a message).

## Carriers

A **carrier** is what information is stored on:

- **ancient**: stone, clay tablets, papyrus, parchment (the manuscripts of the Matenadaran),
- **modern**: paper, photographs, a **USB stick**, a **hard disk**, **cloud storage**.

## Exercises

1. What is informatics?
2. Through which sense do we receive the most information?
3. What kind of information is the sound of a bell?
4. List four actions we perform on information.
5. Give two ancient and two modern carriers.

## Answers

1. The science of collecting, storing, processing and transmitting information.
2. Through sight.
3. Auditory.
4. Collecting, storing, processing, transmitting.
5. A clay tablet, parchment, a USB stick, cloud storage.`,
      quiz: [
        ["What kind of information is the colour of a traffic light?", ["Visual", "Auditory", "Taste", "Smell"]],
        ["Which is an information carrier?", ["A USB stick", "Water", "Air", "Light"]],
        ["What kind of action is translating?", ["Processing", "Storing", "Collecting", "Transmitting"]],
        ["What share of information do people receive through sight?", ["10%", "50%", "80–90%", "100%"]],
        ["What does informatics study?", ["Information and how it is processed", "Animals", "Stars", "Mountains"]],
      ],
    },
    "computer-parts": {
      objectives: ["Name the main parts of a computer", "Tell apart input and output devices", "Explain the role of the processor and memory", "Tell apart hardware and software"],
      content: `## What a computer is

A **computer** is a device that **receives**, **processes**, **stores** and **outputs** information according to a **program**.

## Main parts

| Part | What it does |
|---|---|
| the **processor** (CPU) | the "brain" of the computer; carries out calculations and commands |
| **RAM** (working memory) | holds what we are working on now; it is wiped when the computer is switched off |
| the **hard disk** (HDD) or **SSD** | stores files and programs for a long time |
| the **motherboard** | connects all the parts |
| the **power supply** | provides electric current |

## Input and output devices

| Input devices (information into the computer) | Output devices (information out of the computer) |
|---|---|
| keyboard | monitor |
| mouse | speakers, headphones |
| microphone | printer |
| camera, scanner | projector |

A **touchscreen** (on a phone) is both an input device and an output device.

## Hardware and software

- **Hardware** is what you can touch: the processor, the monitor, the mouse.
- **Software** is programs: the **operating system** (Windows, macOS, Linux, Android), games, a browser, a text editor.

Without programs a computer cannot do anything.

## Exercises

1. What is a computer?
2. Which part is the "brain" of the computer?
3. How does RAM differ from a hard disk?
4. Which of these are input devices and which are output devices: printer, mouse, speaker, microphone?
5. Give two examples of software.

## Answers

1. A device that receives, processes, stores and outputs information according to a program.
2. The processor.
3. RAM is wiped when the computer is switched off; a hard disk stores things for a long time.
4. Input: mouse, microphone; output: printer, speaker.
5. An operating system, a browser.`,
      quiz: [
        ["Which is an input device?", ["A keyboard", "A monitor", "A printer", "A speaker"]],
        ["What does the processor do?", ["Calculations and commands", "Prints on paper", "Plays sound", "Connects to the internet"]],
        ["Which is an operating system?", ["Linux", "A mouse", "A printer", "An SSD"]],
        ["Which memory is wiped when the computer is switched off?", ["RAM", "SSD", "A USB stick", "The hard disk"]],
        ["Which belongs to hardware?", ["A monitor", "A browser", "A game", "Windows"]],
      ],
    },
    "files-and-folders": {
      objectives: ["Explain what a file and a folder are", "Recognise file extensions", "Read a file path", "Perform the basic actions on files"],
      content: `## A file

A **file** is information stored on a carrier that has a **name**. A file name usually has two parts: the **name** and the **extension** (after the dot).

For example: \`essay.docx\`

| Extension | File type |
|---|---|
| .txt, .docx | text |
| .jpg, .png | image |
| .mp3 | sound |
| .mp4 | video |
| .pdf | document |
| .xlsx | spreadsheet |
| .exe, .apk | program |

## A folder

A **folder** is a place for grouping files. A folder can hold files and other folders; this gives a **tree** structure.

\`\`\`
Documents
├── School
│   ├── Maths
│   │   └── homework.docx
│   └── History
│       └── Tigran the Great.pptx
└── Pictures
    └── summer.jpg
\`\`\`

## A path

A **path** shows where a file is. For example: \`Documents/School/Maths/homework.docx\`

## Actions

| Action | How (Windows) |
|---|---|
| **create** a folder | right-click → New → Folder |
| **rename** | F2 |
| **copy** | Ctrl + C |
| **paste** | Ctrl + V |
| **cut** (move) | Ctrl + X |
| **delete** | Delete (to the Recycle Bin) |

**Tip**: give files **clear** names and keep them in the right folders. Keep a **backup** copy of important files in another place.

## Exercises

1. What is a file?
2. What type is the file \`song.mp3\`?
3. What is a folder?
4. Write the path to the file \`summer.jpg\` from the tree above.
5. Which key combination copies?

## Answers

1. Named information stored on a carrier.
2. A sound file.
3. A place for grouping files.
4. Documents/Pictures/summer.jpg
5. Ctrl + C.`,
      quiz: [
        ["What type is a file with the extension .png?", ["Image", "Sound", "Text", "Program"]],
        ["Which key renames a file in Windows?", ["F2", "F5", "Esc", "Tab"]],
        ["What does Ctrl + V do?", ["Pastes", "Copies", "Deletes", "Saves"]],
        ["Which extension is used for video?", [".mp4", ".txt", ".jpg", ".docx"]],
        ["Why do we need a backup copy?", ["So the file is not lost", "To make the file bigger", "To make the computer faster", "To make the internet work"]],
      ],
    },
    "working-with-text": {
      objectives: ["Type text on the keyboard in your own language and in English", "Edit and format text", "Use the basic keyboard shortcuts", "Save a document"],
      content: `## The text editor

A **text editor** is a program for creating and changing text, for example **Microsoft Word**, **Google Docs** or **LibreOffice Writer**. The simplest editor is **Notepad**.

## The keyboard

| Key | What it does |
|---|---|
| **Shift** | a capital letter |
| **Caps Lock** | turns capital letters on all the time |
| **Enter** | a new paragraph |
| **Backspace** | deletes to the **left** of the cursor |
| **Delete** | deletes to the **right** of the cursor |
| **Space** | a space |
| **Alt + Shift** or **Win + Space** | switches the language (for example, Armenian ↔ English) |

## Editing and formatting

- **Editing** means changing the text: adding, deleting, copying, moving.
- **Formatting** means the look of the text:

| Format | Shortcut |
|---|---|
| **bold** | Ctrl + B |
| *italic* | Ctrl + I |
| underlined | Ctrl + U |
| font size | the toolbar |
| alignment | left, centre, right, justified |

## Useful shortcuts

- **Ctrl + Z**: undo the last action.
- **Ctrl + A**: select all the text.
- **Ctrl + S**: save.
- **Ctrl + F**: find in the text.

## Rules

1. Do not put a space **before** a punctuation mark, but do put one **after** it: "Hello, Aram."
2. Press **Enter** at the end of a paragraph, not inside a line (the editor wraps lines itself).
3. Save your work often with **Ctrl + S**.

## Exercises

1. What is a text editor?
2. How does Backspace differ from Delete?
3. Which shortcut makes text bold?
4. How do you undo the last action?
5. Correct the line: "Hello ,Ani !How are you ?"

## Answers

1. A program for creating and changing text.
2. Backspace deletes to the left, Delete to the right.
3. Ctrl + B.
4. Ctrl + Z.
5. "Hello, Ani! How are you?"`,
      quiz: [
        ["Which shortcut saves a document?", ["Ctrl + S", "Ctrl + Z", "Ctrl + B", "Ctrl + A"]],
        ["What is formatting?", ["Changing the look of the text", "Deleting text", "Moving a file", "Switching off the computer"]],
        ["Which key deletes to the left of the cursor?", ["Backspace", "Delete", "Enter", "Shift"]],
        ["Which shortcut undoes the last action?", ["Ctrl + Z", "Ctrl + C", "Ctrl + I", "Ctrl + F"]],
        ["Which is a text editor?", ["Google Docs", "Paint", "Chrome", "Calculator"]],
      ],
    },
    "internet-safety": {
      objectives: ["Explain what the internet and a browser are", "Search for information and check that it is reliable", "Create a strong password", "Protect personal data and respond correctly to cyberbullying"],
      content: `## The internet

The **internet** is a **worldwide network** of millions of computers. To open websites we use a **browser**: Chrome, Firefox, Safari, Edge. The address of a website is called a **URL**, for example \`https://www.example.am\`.

## Searching

In a search engine (Google, Bing) type **keywords**: "area of Lake Sevan" is better than "please tell me how big Sevan is".

Check the information:

1. **Who** the author is (an official website, a well-known news outlet, a scientist).
2. **When** it was written.
3. Whether **other websites** say the same thing.

## Passwords

A strong password:

- has at least **12 characters**,
- contains **capital** and **small** letters, **digits** and **symbols**,
- is not **your name** or **year of birth**,
- is different for **different websites**.

For example, a password like \`Apricot-Aragats-2024!\` (several words plus a number plus a symbol) is easy to remember but hard to guess. **Never** tell your password to anyone except your parents.

## Personal data

**Do not post** on the internet:

- your home address,
- your phone number,
- your school and timetable,
- passwords.

If a stranger writes to you and wants to meet or asks for photos, tell your parents or a teacher **at once**.

## Cyberbullying

**Cyberbullying** is insults or mockery on the internet. What to do:

1. Do not answer back in the same way.
2. Save **screenshots**.
3. **Block** the bully.
4. Tell an **adult**.

## Exercises

1. What is a browser?
2. Why should you type keywords when searching?
3. Which password is stronger: \`anna2012\` or \`River!Moon47Sun\`?
4. List three kinds of data you must not post.
5. What should you do about cyberbullying?

## Answers

1. A program for opening websites.
2. A search engine finds things better by keywords.
3. \`River!Moon47Sun\`.
4. Home address, phone number, password.
5. Do not answer back, save screenshots, block the bully, tell an adult.`,
      quiz: [
        ["Which is a browser?", ["Firefox", "Word", "Excel", "Paint"]],
        ["Which password is the strongest?", ["123456", "anna", "Sea!Cloud93Mountain#", "password"]],
        ["What should you do if a stranger wants to meet?", ["Tell your parents", "Go to the meeting", "Give your address", "Tell no one"]],
        ["What is cyberbullying?", ["Insults on the internet", "A computer game", "A virus", "A search engine"]],
        ["What is the address of a website called?", ["URL", "CPU", "RAM", "USB"]],
      ],
    },
    "algorithms-intro": {
      objectives: ["Explain what an algorithm is", "List the properties of an algorithm", "Write an algorithm for an everyday task", "Read and draw a simple flowchart"],
      content: `## An algorithm

An **algorithm** is a **sequence** of commands that leads to a result. The word comes from the name of the 9th-century mathematician **al-Khwarizmi**.

**Example**: an algorithm for making tea.

1. Pour water into the kettle.
2. Switch on the kettle.
3. Wait until the water boils.
4. Put a tea bag in a cup.
5. Pour the boiling water into the cup.
6. Wait 3 minutes.
7. Take out the tea bag.

## Properties

| Property | Meaning |
|---|---|
| **precision** | every command is clear and has only one meaning |
| **discreteness** | it is made of separate steps |
| **finiteness** | it ends after a finite number of steps |
| **effectiveness** | it leads to a result |

"Add a little salt" is an imprecise command, but "Add 5 g of salt" is precise.

## The executor

The **executor** is whoever carries out the algorithm: a person, a robot, a computer. A computer carries out commands **literally** and does not "guess" what we want.

## Flowcharts

An algorithm can be drawn as a **flowchart**:

| Shape | Meaning |
|---|---|
| oval | **start** or **end** |
| rectangle | an **action** |
| diamond | a **condition** (yes/no) |
| parallelogram | **input** or **output** |

Arrows show the order of the steps.

**Example**: start → "Is it raining?" (diamond) → yes: "Take an umbrella", no: "Don't take one" → "Leave the house" → end.

## Exercises

1. What is an algorithm?
2. Whose name does the word "algorithm" come from?
3. Why is the command "add a little salt" imprecise?
4. Which shape shows a condition in a flowchart?
5. Write an algorithm for brushing your teeth (5–6 steps).

## Answers

1. A sequence of commands that leads to a result.
2. Al-Khwarizmi.
3. It does not say exactly how much.
4. A diamond.
5. For example: take the brush, squeeze out toothpaste, brush for 2 minutes, rinse your mouth, rinse the brush, put it back.`,
      quiz: [
        ["Which is a property of an algorithm?", ["Finiteness", "Colour", "Size", "Weight"]],
        ["Which shape shows the start or end?", ["An oval", "A rectangle", "A diamond", "A parallelogram"]],
        ["Who is the executor?", ["Whoever carries out the algorithm", "The author of the algorithm", "The name of the program", "The colour of the flowchart"]],
        ["Which command is precise?", ["Add 200 ml of water", "Add a little water", "Add water if you like", "Lots of water"]],
        ["Which shape shows an action?", ["A rectangle", "A diamond", "An oval", "A circle"]],
      ],
    },
    "scratch-intro": {
      objectives: ["Recognise the parts of the Scratch environment", "Use Motion, Looks and Events blocks", "Use the \"repeat\" block", "Create a simple animation"],
      content: `## Scratch

**Scratch** is a programming language for children created by **MIT** (USA). Programs are built from **blocks**, like a construction kit. Scratch is available at \`scratch.mit.edu\`, with the interface in many languages, including **Armenian** and **Russian**.

## The environment

| Part | What it is |
|---|---|
| the **stage** | the place where the characters move |
| a **sprite** (character) | an object we give commands to, for example the cat |
| the **block palette** | all the commands, sorted by colour |
| the **script area** | where we put the blocks together |

## Block groups

| Colour | Group | Example |
|---|---|---|
| blue | **Motion** | "move 10 steps", "turn 15°" |
| purple | **Looks** | "say Hello for 2 seconds", "next costume" |
| pink | **Sound** | "start sound" |
| yellow | **Events** | "when green flag clicked" |
| orange | **Control** | "repeat 10", "wait 1 second", "forever" |

## The first program

\`\`\`
when green flag clicked
say "Hello, I'm Scratch the cat" for 2 seconds
repeat 10
    move 10 steps
    next costume
    wait 0.2 seconds
\`\`\`

The cat takes 10 steps and changes costume each time, which makes a **walking animation**.

## Repetition (loops)

Without the "repeat" block we would have to write the same blocks 10 times. A **loop** makes the program shorter. The "**forever**" block repeats without end until we press the **red** stop sign.

## Exercises

1. Who created Scratch?
2. What is a sprite?
3. Which group is the block "move 10 steps" in?
4. Why do we need the "repeat" block?
5. Write a program to make the cat draw a square (hint: repeat 4 times: move 100, turn 90°).

## Answers

1. MIT (the Massachusetts Institute of Technology).
2. A character we give commands to.
3. Motion.
4. To run the same commands several times without repeating them in the program.
5. when green flag clicked → pen down → repeat 4 [move 100, turn 90°].`,
      quiz: [
        ["Which group's block starts the program when the green flag is clicked?", ["Events", "Motion", "Looks", "Sound"]],
        ["How many degrees should you turn when drawing a square?", ["45", "60", "90", "180"]],
        ["What does the \"forever\" block do?", ["Repeats without end", "Stops the program", "Deletes the sprite", "Starts a sound"]],
        ["What is the stage in Scratch?", ["The place where the characters move", "A list of blocks", "A sound setting", "A file name"]],
        ["What colour are Motion blocks?", ["Blue", "Yellow", "Pink", "Green"]],
      ],
    },
  },
};
