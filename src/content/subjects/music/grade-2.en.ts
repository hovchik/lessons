import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "The stave, the treble clef, note names, note lengths, bars and time signatures.",
    "Tempo and character, folk instruments, the national anthem, lullabies and work songs.",
  ],
  lessons: {
    "staff-and-clef": {
      objectives: ["Know what a stave is", "Count the lines of the stave from the bottom up", "Recognise the treble clef", "Explain why music is written down in notes"],
      content: `## Why write music down

Just as we write words with **letters**, we write music with **notes**. Notes tell a musician which sound to play, for how long and when. Music that has been written down can be played even **hundreds of years later**.

## The stave

Notes are written on **five** parallel lines. Together they are called the **stave** (or staff).

- We count the lines **from the bottom up**: first, second, third, fourth, fifth,
- There are **four** spaces between the lines,
- A note can sit **on a line** (the line goes through the middle of the note) or **in a space** between the lines.

## What a note's position shows

The **higher** a note is on the stave, the **thinner** (higher) the sound. The **lower** it is, the **deeper** the sound. That is why the stave is like a **ladder**.

## The treble clef

At the start of the stave we write a **clef**. Children's songs most often use the **treble clef** (the G clef).

- It looks like a beautiful **curl** or a little fish,
- Its curl starts on the **second** line,
- That is why the note on the **second** line is called **sol** (G).

For deep (low) sounds there is also the **bass clef** (the F clef), used by the double bass, the cello and the pianist's left hand.

## Exercises

1. Why is music written down in notes?
2. How many lines does the stave have?
3. How are the lines counted?
4. If a note is high on the stave, what is its sound like?
5. Which line does the treble clef start on?

## Answers

1. So that the musician knows what to play and the music is not forgotten.
2. Five.
3. From the bottom up.
4. Thin (high).
5. The second line.`,
      quiz: [
        ["How many lines does the stave have?", ["Five", "Four", "Seven", "Three"]],
        ["How are the lines of the stave counted?", ["From the bottom up", "From the top down", "From left to right", "Any way you like"]],
        ["Which note is written on the second line in the treble clef?", ["Sol (G)", "Do (C)", "Mi (E)", "La (A)"]],
        ["How many spaces are there between the lines of the stave?", ["Four", "Five", "Three", "Six"]],
        ["Which clef is used for low sounds?", ["The bass (F) clef", "The treble (G) clef", "The C clef", "The B clef"]],
      ],
    },
    "note-names": {
      objectives: ["Name the seven notes", "Find where the notes sit on the stave", "Sing the scale up and down", "Remember where the notes go with the help of tips"],
      content: `## Seven notes

Music has only **seven** note names, which repeat:

**Do, re, mi, fa, sol, la, ti** (in letter names: **C, D, E, F, G, A, B**)

After the seven notes comes **do** again, but higher. This row of notes is called a **scale**.

## Notes on the stave

| Note | Place in the treble clef |
|---|---|
| Do / C (middle C) | below the stave, on a small extra line |
| Re / D | just below the first line |
| Mi / E | on the first line |
| Fa / F | in the space between the first and second lines |
| Sol / G | on the second line |
| La / A | in the space between the second and third lines |
| Ti / B | on the third line |
| Do / C (the next C up) | in the space between the third and fourth lines |

A **ledger line** is a short extra line for notes that are outside the stave.

## Where the names come from

About **a thousand years** ago an Italian monk, **Guido of Arezzo**, gave the notes their names by taking the **first syllables** of the lines of a Latin hymn. He was also the one who began writing notes **on lines**.

## Let's sing

Sing the scale **up**, "do-re-mi-fa-sol-la-ti-do", and **down**, "do-ti-la-sol-fa-mi-re-do". Show with your hand how we climb up and down the steps.

## A tip

Remember: the notes **on the lines** are **mi, sol, ti** (E, G, B), that is, every other note starting from mi.

## Exercises

1. How many note names are there?
2. Name the notes in order.
3. Where is the note mi written?
4. Who gave the notes their names?
5. Which notes are written on the first three lines of the stave?

## Answers

1. Seven.
2. Do, re, mi, fa, sol, la, ti.
3. On the first line.
4. Guido of Arezzo.
5. Mi, sol, ti (E, G, B).`,
      quiz: [
        ["Which note comes after fa?", ["Sol", "Mi", "La", "Do"]],
        ["How many note names are there?", ["Seven", "Five", "Eight", "Twelve"]],
        ["Where is the note ti (B) written in the treble clef?", ["On the third line", "On the first line", "Below the stave", "On the fifth line"]],
        ["What is the row do-re-mi-fa-sol-la-ti-do called?", ["A scale", "A rhythm", "A bar", "A choir"]],
        ["What is a ledger line for?", ["For notes outside the stave", "For the end of a song", "For the words", "For the clef"]],
      ],
    },
    "note-durations": {
      objectives: ["Recognise the semibreve, minim, crotchet and quaver", "Count how many beats each one lasts", "Recognise a rest", "Clap a rhythm from notes"],
      content: `## How long a sound lasts

The **position** of a note on the stave shows how high the sound is. The **shape** of a note shows how **long** it lasts.

## Four note lengths

| Note | What it looks like | How many beats |
|---|---|---|
| Semibreve (whole note) | an empty oval without a stem | 4 |
| Minim (half note) | an empty oval with a stem | 2 |
| Crotchet (quarter note) | a filled-in oval with a stem | 1 |
| Quaver (eighth note) | a filled-in oval with a stem and a flag | half a beat |

Two quavers are often **joined** by one line, which is called a **beam**.

## Let's count

- 1 semibreve = 2 minims,
- 1 minim = 2 crotchets,
- 1 crotchet = 2 quavers,
- so 1 semibreve = 4 crotchets = 8 quavers.

It is like cutting a **pizza**: a whole pizza, a half, a quarter, an eighth.

## Rests

Sometimes in music you have to be **silent**. Silence is shown by a **rest** sign. Every note has its own rest: a semibreve rest, a minim rest, a crotchet rest, a quaver rest. During a rest we **count** silently but do not sing.

## Let's clap

We say a crotchet as "**ta**", a pair of quavers as "**ti-ti**" and a minim as "**ta-a**".

Try it: "**ta, ta, ti-ti, ta**" and "**ti-ti, ti-ti, ta-a**".

## Exercises

1. What does the shape of a note show?
2. How many beats does a minim last?
3. How many crotchets are there in one semibreve?
4. What does a quaver look like?
5. What is a rest?

## Answers

1. How long the sound lasts.
2. Two.
3. Four.
4. A filled-in oval with a stem and a flag.
5. A sign for silence.`,
      quiz: [
        ["How many beats does a semibreve last?", ["4", "1", "2", "8"]],
        ["How many quavers are there in one crotchet?", ["2", "4", "1", "8"]],
        ["Which note has no stem?", ["The semibreve", "The minim", "The crotchet", "The quaver"]],
        ["What is a rest?", ["A sign for silence", "The longest note", "A clef", "A loud sound"]],
        ["How do we say two quavers?", ["\"Ti-ti\"", "\"Ta\"", "\"Ta-a\"", "\"Taa-aa\""]],
      ],
    },
    "beat-and-meter": {
      objectives: ["Feel the beat (pulse) of music", "Tell strong beats from weak beats", "Know what a bar and a bar line are", "Recognise 2/4 and 3/4 time"],
      content: `## The beat

Music has a **steady** "pulse", which is called the **beat**. When you tap your foot to music, you are feeling the beat.

## Strong and weak beats

The beats are **not equal** in strength. One beat is **strong** and the others are **weak**.

- In a march: "**ONE**-two, **ONE**-two",
- In a waltz: "**ONE**-two-three, **ONE**-two-three".

## Bars and bar lines

From one strong beat to the next strong beat is a **bar**. Bars are separated from each other by an upright line called a **bar line**. At the end of a piece of music we put a **double** bar line.

## Time signatures

At the start of the music, after the clef, we write the **time signature**: two numbers, one above the other.

| Time signature | What it means | Typical for |
|---|---|---|
| 2/4 | 2 crotchets in every bar | marches, polkas, many dances |
| 3/4 | 3 crotchets in every bar | waltzes, some lullabies |
| 4/4 | 4 crotchets in every bar | many songs |

The **top** number shows **how many** beats there are in a bar, and the **bottom** number shows the **length** of each beat (4 means a crotchet).

## The conductor's hand

The **conductor** leads the orchestra. They show the beats with their hand. In 2/4 the hand moves "**down-up**". In 3/4 it moves "**down-right-up**", as if drawing a triangle. Try "conducting" a waltz.

## Exercises

1. What is the beat?
2. Which beat is strong in a march?
3. What is a bar?
4. How many crotchets are there in a bar of 3/4?
5. Which dance is written in 3/4 time?

## Answers

1. The steady "pulse" of music.
2. The first: "ONE".
3. From one strong beat to the next strong beat.
4. Three.
5. The waltz.`,
      quiz: [
        ["Which time signature is typical of a waltz?", ["3/4", "2/4", "4/4", "1/4"]],
        ["What separates bars?", ["A bar line", "A clef", "A rest", "A beam"]],
        ["What does the top number of a time signature show?", ["How many beats there are in a bar", "How high the sound is", "How loud the sound is", "The number of the song"]],
        ["Who leads an orchestra?", ["The conductor", "The drummer", "Always the composer", "The audience"]],
        ["In which time signature is a march usually written?", ["2/4", "3/4", "5/4", "7/8"]],
      ],
    },
    "tempo-and-character": {
      objectives: ["Know what tempo is", "Recognise the tempos allegro, moderato, andante and adagio", "Describe the character of music in words", "Link tempo and character"],
      content: `## Tempo

**Tempo** is the **speed** of music. You can sing the same song fast or slowly, and it will sound different.

| Tempo (in Italian) | Meaning | Like a… |
|---|---|---|
| Adagio | slowly | tortoise |
| Andante | calmly, at walking pace | person out for a walk |
| Moderato | at a moderate speed | cyclist |
| Allegro | fast, cheerfully | running hare |
| Presto | very fast | flying bird |

## Character

Music has a **character**, a mood. It can be:

- **cheerful**, **playful**, **lively**,
- **sad**, **thoughtful**,
- **tender**, **gentle**,
- **solemn**, **mighty**,
- **mysterious**, **scary**.

## Tempo and character together

Often a **fast** tempo gives music a **cheerful** or **anxious** character, and a **slow** tempo a **sad**, **calm** or **solemn** one. But there is also music that is **slow but cheerful**.

## Listen and draw

Listen to two pieces. For the first, take **bright** paints; for the second, **soft** ones, and paint what you imagine. Compare with your friends' pictures. What words would you use to describe the character of each piece?

## Exercises

1. What is tempo?
2. What does "adagio" mean?
3. What does "allegro" mean?
4. Name three words that describe the character of music.
5. Which tempo is like walking?

## Answers

1. The speed of music.
2. Slowly.
3. Fast, cheerfully.
4. For example, cheerful, sad, solemn.
5. Andante.`,
      quiz: [
        ["What does \"allegro\" mean?", ["Fast, cheerfully", "Slowly", "Quietly", "Loudly"]],
        ["Which tempo is the slowest?", ["Adagio", "Allegro", "Presto", "Moderato"]],
        ["What is tempo?", ["The speed of music", "The pitch of a sound", "The name of an instrument", "The words of a song"]],
        ["What does \"andante\" mean?", ["Calmly, at walking pace", "Very fast", "Very loudly", "Silence"]],
        ["Which word describes the character of music?", ["Solemn", "Crotchet", "Bar line", "Clef"]],
      ],
    },
    "armenian-folk-instruments": {
      objectives: ["Recognise Armenian folk instruments", "Sort them into groups", "Describe the difference between the duduk and the zurna", "Know about folk instrument ensembles"],
      content: `## Folk instruments

Over the centuries the Armenian people created and played many instruments.

| Instrument | Group | Feature |
|---|---|---|
| Duduk | wind | apricot wood, a soft, sad sound |
| Zurna | wind | a loud, sharp sound, played outdoors |
| Shvi | wind | a small flute that sounds like a bird |
| Blul | wind | a long shepherd's flute |
| Kanon | string | a triangular box with many strings, played lying on the knees |
| Tar | string | shaped like a figure of eight, played with a plectrum |
| Kamancha | string | played with a bow, held upright |
| Dhol | percussion | a double-sided drum |
| Daf | percussion | a round frame with little jingles |

## The duduk and the zurna

Both instruments are **wind** instruments with a **reed**, but:

- the **duduk** sounds **soft** and **velvety**, and suits **sad** and **tender** melodies,
- the **zurna** sounds **loud** and **sharp**; it is played at **weddings** and outdoor festivals, often together with the **dhol**.

The duduk is often accompanied by a second duduk player who holds one **long**, unbroken note. This note is called the **dam**.

## Ashughs and the kamancha

In the old days **ashughs** (gusans, travelling singers) went from village to village, singing and playing the **kamancha** or the **tar**. The most famous ashugh is **Sayat-Nova**.

## Ensembles

When folk instruments play together, they form a folk instrument **ensemble** or **orchestra**. Armenia has well-known state ensembles of this kind that perform all over the world.

## Exercises

1. Name three Armenian folk wind instruments.
2. What is the kamancha played with?
3. How is the duduk different from the zurna?
4. What is the dam?
5. Who was Sayat-Nova?

## Answers

1. The duduk, the zurna and the shvi.
2. A bow.
3. The duduk sounds soft; the zurna sounds loud and sharp.
4. The long, unbroken note of the second duduk.
5. The most famous ashugh.`,
      quiz: [
        ["Which instrument is played with a bow?", ["Kamancha", "Kanon", "Dhol", "Shvi"]],
        ["Which instrument sounds loud and sharp?", ["Zurna", "Duduk", "Blul", "Kanon"]],
        ["What shape is the kanon?", ["A triangular box", "A round frame", "A long tube", "A figure of eight"]],
        ["What is the long note of the second duduk called?", ["Dam", "Forte", "Bar", "Rest"]],
        ["Which Armenian instrument is a percussion instrument?", ["Daf", "Tar", "Blul", "Zurna"]],
      ],
    },
    "national-anthem": {
      objectives: ["Know the name of the Armenian national anthem and its authors", "Explain what an anthem is", "Behave correctly when the anthem is played", "Sing the first verse of the anthem"],
      content: `## What an anthem is

A **national anthem** is a country's main **solemn** song. Together with the **flag** and the **coat of arms**, it is one of the **symbols** of the state. The anthem is played on important **holidays**, at official ceremonies and at sports competitions when one of our athletes wins.

## "Mer Hayrenik"

The anthem of the Republic of Armenia is **"Mer Hayrenik"** ("Our Fatherland").

| | |
|---|---|
| Words by | Mikael Nalbandian (19th century) |
| Music by | Barsegh Kanachyan |
| First used as the anthem | 1918–1920, the First Republic |
| Adopted again | 1991 |

Mikael Nalbandian wrote this poem under the title **"Song of an Italian Girl"**.

## The first verse

The anthem is sung in Armenian. The meaning of the first verse is:

"**Our Fatherland, free and independent,**
**That has lived from age to age,**
**Now calls its sons,**
**Free, independent Armenia.**"

## How to behave

When the anthem is played:

- we **stand** up straight,
- we turn to face the **flag**, if there is one,
- we do not talk, laugh or eat,
- we can all **sing** together.

This is how we show **respect** for our homeland and for the people who lived and died for it.

## Character

The anthem is **solemn** and **proud**, and its tempo is **moderate**. It is like a **march**.

## Exercises

1. What is the Armenian national anthem called?
2. Who wrote the words of the anthem?
3. Who wrote the music?
4. How do we behave when the anthem is played?
5. What is the character of the anthem?

## Answers

1. "Mer Hayrenik" ("Our Fatherland").
2. Mikael Nalbandian.
3. Barsegh Kanachyan.
4. We stand up straight, do not talk, and may sing.
5. Solemn and proud.`,
      quiz: [
        ["What is the Armenian national anthem called?", ["\"Mer Hayrenik\" (\"Our Fatherland\")", "\"Kakavik\"", "\"Krunk\"", "\"Anoush\""]],
        ["Who wrote the words of the anthem?", ["Mikael Nalbandian", "Hovhannes Tumanyan", "Komitas", "Sayat-Nova"]],
        ["Who wrote the music of the anthem?", ["Barsegh Kanachyan", "Aram Khachaturian", "Komitas", "Arno Babajanian"]],
        ["What do we do when the anthem is played?", ["Stand up straight", "Sit down", "Dance", "Talk"]],
        ["In which year was \"Mer Hayrenik\" adopted as the anthem again?", ["1991", "1918", "1945", "2001"]],
      ],
    },
    "lullabies-and-work-songs": {
      objectives: ["Recognise a lullaby and its character", "Explain what a work song is", "Know about the horovel", "Compare songs by their purpose"],
      content: `## Songs for life

In the old days people sang **on every occasion**: putting a child to sleep, while working, at festivals. Each song had its own **purpose**.

## The lullaby

A **lullaby** is a song that a mother or grandmother sings to put a child to sleep while **rocking** the cradle.

- The tempo is **slow**,
- the voice is **quiet** and **tender**,
- the rhythm is **rocking**, like a cradle,
- the words often repeat "**nani**", "**oror**", "**la-la**".

In a lullaby the mother **wishes** the child health, courage and happiness.

## The work song

**Work** songs were sung while working. They helped people:

- work **together**, in one rhythm,
- forget their **tiredness**,
- make the work **more fun**.

For example: songs on the **threshing floor** (when threshing grain), **mill** songs, songs for weaving **carpets**, songs for churning butter in a **churn**.

## The horovel

The **horovel** is the best-known work song of the Armenian peasant, sung while **ploughing the land**. The ploughman sang to his **oxen** to encourage them. A horovel is **long**, with a **free** rhythm, and often begins with the cry "**Ho, horovel!**". Komitas wrote down and arranged the **"Ploughing Song of Lori"**.

## Let's compare

| Song | Purpose | Character |
|---|---|---|
| lullaby | to put a child to sleep | tender, slow |
| work song | to help with work | rhythmic, strong |
| dance song | to dance | cheerful, fast |

## Exercises

1. What is a lullaby?
2. What is the rhythm of a lullaby like?
3. Why did people sing while working?
4. When was the horovel sung?
5. Name two kinds of work song.

## Answers

1. A song sung to put a child to sleep.
2. Rocking, like a cradle.
3. To work together and forget their tiredness.
4. While ploughing the land.
5. For example, threshing-floor songs and mill songs.`,
      quiz: [
        ["When was the horovel sung?", ["While ploughing the land", "While putting a child to bed", "At a wedding", "In church"]],
        ["What is the tempo of a lullaby?", ["Slow", "Very fast", "Presto", "Allegro"]],
        ["Who did the ploughman sing to in the horovel?", ["His oxen", "Children", "Birds", "Fish"]],
        ["How do work songs help?", ["To work together, in one rhythm", "To sleep", "To keep silent", "To learn notes"]],
        ["Which word is often repeated in lullabies?", ["Nani", "Hooray", "Allegro", "March"]],
      ],
    },
  },
};
