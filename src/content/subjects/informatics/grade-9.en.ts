import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Dictionaries, sets, files, recursion, complexity.",
    "Relational databases, SQL, data analysis.",
  ],
  lessons: {
    "dictionaries-and-sets": {
      objectives: ["Create a dictionary of key–value pairs", "Add, change and check keys", "Count word frequencies", "Use sets to remove duplicates"],
      content: `## Dictionary (dict)

A **dictionary** stores **key → value** pairs. Instead of an index, we look things up by key.

\`\`\`python
capitals = {"Armenia": "Yerevan", "Georgia": "Tbilisi", "France": "Paris"}
print(capitals["Georgia"])      # Tbilisi
capitals["Italy"] = "Rome"      # add
print(len(capitals))            # 4
print("Spain" in capitals)      # False
\`\`\`

| Operation | Meaning |
|---|---|
| \`d[k]\` | the value for key k (error if missing) |
| \`d.get(k, 0)\` | the value, or 0 if missing |
| \`d[k] = v\` | add or change |
| \`del d[k]\` | delete |
| \`d.keys()\`, \`d.values()\`, \`d.items()\` | keys, values, pairs |

## Going through a dictionary

\`\`\`python
for country, city in capitals.items():
    print(city, "-", country)
\`\`\`

## Counting words

\`\`\`python
text = "cat dog cat fish cat"
freq = {}
for w in text.split():
    freq[w] = freq.get(w, 0) + 1
print(freq)   # {'cat': 3, 'dog': 1, 'fish': 1}
\`\`\`

## Set

A **set** stores only **unique** elements, in no order.

\`\`\`python
a = {1, 2, 3, 3, 2}
print(a)            # {1, 2, 3}
b = {3, 4}
print(a | b)        # union {1, 2, 3, 4}
print(a & b)        # intersection {3}
print(a - b)        # difference {1, 2}
unique = set(["Ani", "Aram", "Ani"])   # duplicates disappear
\`\`\`

## Exercises

1. What does \`print({"a": 5, "b": 7}["b"])\` display?
2. Why is \`d.get(k)\` safer than \`d[k]\`?
3. What does \`len({5, 5, 6})\` give?
4. What does \`{1, 2, 3} & {2, 3, 4}\` give?
5. Write a program that counts how many different letters there are in the word "wellbeing".

## Answers

1. 7
2. If the key is missing, \`get\` returns None or the default value, while \`d[k]\` causes an error.
3. 2
4. \`{2, 3}\`
5. \`print(len(set("wellbeing")))\``,
      quiz: [
        ["How does a dictionary access a value?", ["By key", "Only by index", "At random", "By file name"]],
        ["What does d.items() do?", ["Returns the key–value pairs", "Deletes the dictionary", "Sorts the values", "Calculates the sum"]],
        ["What does set([1, 1, 2]) give?", ["{1, 2}", "{1, 1, 2}", "[1, 2]", "2"]],
        ["Which operation is set intersection?", ["&", "|", "-", "+"]],
        ["What happens with d[\"x\"] if there is no key \"x\"?", ["An error (KeyError)", "It returns 0", "It creates the key", "It displays an empty string"]],
      ],
    },
    "files-python": {
      objectives: ["Open a file for reading and writing", "Read a file line by line", "Use the with statement", "Process CSV data"],
      content: `## Why files?

Variables are wiped when a program ends. **Files** store data permanently.

## Opening

\`open(name, mode)\`

| Mode | Meaning |
|---|---|
| \`"r"\` | read (the default) |
| \`"w"\` | write (old contents are wiped) |
| \`"a"\` | append to the end |

## with

\`with\` closes the file automatically, even if an error occurs.

\`\`\`python
with open("notes.txt", "w", encoding="utf-8") as f:
    f.write("First line")

with open("notes.txt", "r", encoding="utf-8") as f:
    text = f.read()
print(text)
\`\`\`

\`encoding="utf-8"\` matters for Armenian and Russian letters.

## Reading line by line

\`\`\`python
with open("names.txt", encoding="utf-8") as f:
    for line in f:
        name = line.strip()      # remove the end-of-line character
        print("Hello,", name)
\`\`\`

## CSV files

**CSV** (comma-separated values) is a table in text form: the values are separated by commas.

\`\`\`
name,grade
Ani,9
Aram,8
\`\`\`

\`\`\`python
import csv
with open("grades.csv", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    total = 0
    count = 0
    for row in reader:
        total += int(row["grade"])
        count += 1
print("Average:", total / count)
\`\`\`

CSV files open in both Excel and Google Sheets.

## Exercises

1. Which mode wipes the old contents of a file?
2. Why is \`with\` convenient?
3. Why call \`strip()\` after reading a line?
4. What is CSV?
5. How do you add a new line to the end of an existing file?

## Answers

1. \`"w"\`
2. The file is closed automatically.
3. To remove the newline character and spaces at the edges.
4. Table data in text form, with values separated by commas.
5. Open it in \`"a"\` mode and call \`write\`.`,
      quiz: [
        ["Which mode appends to the end of a file?", ["\"a\"", "\"r\"", "\"w\"", "\"x\""]],
        ["What does with open(...) do?", ["Closes the file automatically", "Deletes the file", "Copies the file", "Encrypts the file"]],
        ["Which encoding is needed for Armenian and Russian text?", ["utf-8", "ascii", "binary", "hex"]],
        ["What separates the values in CSV?", ["A comma", "A full stop", "A hyphen", "A quotation mark"]],
        ["What does f.read() do?", ["Reads the whole file", "Writes to the file", "Closes the file", "Deletes the first line"]],
      ],
    },
    "recursion": {
      objectives: ["Explain the idea of recursion", "Find the base case", "Write recursive factorial and Fibonacci functions", "Understand the call stack"],
      content: `## What is recursion?

A **recursive** function calls **itself** for a smaller problem. Like a matryoshka doll: inside is the same doll, only smaller.

Every recursion must have:

1. A **base case**: when we stop,
2. A **recursive step**: having made the problem smaller, we call ourselves.

## Factorial

n! = 1 · 2 · 3 · ... · n, and n! = n · (n − 1)!

\`\`\`python
def factorial(n):
    if n <= 1:            # base case
        return 1
    return n * factorial(n - 1)

print(factorial(5))   # 120
\`\`\`

How it is calculated:

| Call | Returns |
|---|---|
| factorial(5) | 5 · factorial(4) |
| factorial(4) | 4 · factorial(3) |
| factorial(3) | 3 · factorial(2) |
| factorial(2) | 2 · factorial(1) |
| factorial(1) | 1 |

Then the results "come back" up: 2, 6, 24, 120.

## The call stack

The computer keeps unfinished calls on a **stack**. Without a base case the stack overflows and Python gives a \`RecursionError\`.

## Fibonacci numbers

0, 1, 1, 2, 3, 5, 8, 13, ... Each one is the sum of the two before it.

\`\`\`python
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)
\`\`\`

This version is slow for large n, because the same values are calculated many times. It is faster with a loop or with memoisation (we will study this later).

## Recursion in nature and art

Fractals (a snowflake, a fern), the folder tree on a computer, the Tower of Hanoi puzzle.

## Exercises

1. What is a base case?
2. What happens if a recursive function has no base case?
3. What does \`factorial(4)\` return?
4. What is the 8th Fibonacci number, starting from 0, 1, 1, ... (fib(7))?
5. Write a recursive function that calculates the sum of the numbers from 1 to n.

## Answers

1. The condition under which the function no longer calls itself and returns a result straight away.
2. Endless calls, ending in a RecursionError.
3. 24
4. 13
5. \`def s(n):\`, inside it \`if n == 0: return 0\` and \`return n + s(n - 1)\`.`,
      quiz: [
        ["What is a recursive function?", ["A function that calls itself", "A function with no parameters", "A function that always displays something", "A function inside a loop"]],
        ["What does factorial(3) return?", ["6", "3", "9", "1"]],
        ["Why is a base case needed?", ["To stop the recursion", "To speed it up", "To display output", "To open a file"]],
        ["What is the next number in the Fibonacci sequence 1, 1, 2, 3, 5, 8, ...?", ["13", "11", "10", "16"]],
        ["In which structure does the computer keep unfinished calls?", ["A stack", "A dictionary", "A file", "A set"]],
      ],
    },
    "algorithm-complexity": {
      objectives: ["Explain why an algorithm's speed matters", "Understand big O notation", "Estimate the complexity of loops", "Compare O(1), O(log n), O(n), O(n²)"],
      content: `## Why measure?

Two programs can give the same result, but one runs for 1 second and the other for 1 hour. An algorithm's **complexity** shows how the amount of work grows as the amount of input data (n) increases.

## Big O notation

We write **O(...)**, dropping constant factors and smaller terms. What matters is the **shape** of the growth.

| Complexity | Name | Example |
|---|---|---|
| O(1) | constant | accessing a list element by index |
| O(log n) | logarithmic | binary search |
| O(n) | linear | linear search, calculating a sum |
| O(n log n) | | fast sorts (merge sort) |
| O(n²) | quadratic | bubble sort |
| O(2ⁿ) | exponential | Fibonacci by simple recursion |

## Number of operations

| n | log n | n | n² | 2ⁿ |
|---|---|---|---|---|
| 10 | ~3 | 10 | 100 | 1,024 |
| 1,000 | ~10 | 1,000 | 1,000,000 | unimaginably many |
| 1,000,000 | ~20 | 1,000,000 | 10¹² | unimaginably many |

If a computer performs about 10⁸ simple operations per second, an O(n²) algorithm with n = 1,000,000 will run for about 3 hours, and an O(n log n) one for a fraction of a second.

## How to estimate

\`\`\`python
for x in a:          # n times
    print(x)         # → O(n)

for x in a:          # n times
    for y in a:      # n times for each
        print(x, y)  # → O(n²)
\`\`\`

Loops one after another **add up** (O(n) + O(n) = O(n)); nested loops **multiply**.

## Memory

Besides time, we also measure **space** complexity: how much extra memory is needed.

## Exercises

1. What is the complexity of linear search?
2. Why is binary search O(log n)?
3. What is the complexity of two nested loops if each runs n times?
4. Which is faster for large n: O(n²) or O(n log n)?
5. What is the complexity of accessing \`a[5]\`?

## Answers

1. O(n)
2. At each step the area is halved, so there are log₂ n steps.
3. O(n²)
4. O(n log n)
5. O(1)`,
      quiz: [
        ["What does big O notation show?", ["How the work grows as n increases", "The number of lines in a program", "The size of a file", "The number of variables"]],
        ["What is the complexity of bubble sort?", ["O(n²)", "O(1)", "O(log n)", "O(n)"]],
        ["Which complexity is fastest for large n?", ["O(1)", "O(n)", "O(n²)", "O(2ⁿ)"]],
        ["Which algorithm has O(log n) complexity?", ["Binary search", "Linear search", "Bubble sort", "Checking all pairs"]],
        ["How are the complexities of nested loops combined?", ["They multiply", "They add up", "They subtract", "They are ignored"]],
      ],
    },
    "databases-intro": {
      objectives: ["Explain what a database is", "Describe a table, a record and a field", "Explain primary and foreign keys", "Give examples of DBMSs"],
      content: `## What is a database?

A **database** is an organised collection of data that is easy to search, change and store. Examples: an electronic school register, an online shop's products, bank accounts.

A **DBMS** (database management system): MySQL, PostgreSQL, SQLite, Microsoft Access, Oracle. This app also uses SQLite.

## The relational model

Data is stored in **tables**.

The **Students** table:

| id | name | class |
|---|---|---|
| 1 | Ani | 9A |
| 2 | Aram | 9B |
| 3 | Mariam | 9A |

| Term | Meaning |
|---|---|
| **Record** (row) | one object (one student) |
| **Field** (column) | one attribute (name) |
| **Type** | the kind of data in a field (number, text, date) |

## Keys

- A **primary key** is a field that uniquely identifies a record (\`id\`). Two records cannot have the same value.
- A **foreign key** is a reference to the primary key of another table.

The **Marks** table:

| student_id | subject | mark |
|---|---|---|
| 1 | Informatics | 10 |
| 1 | Chemistry | 8 |
| 2 | Informatics | 9 |

\`student_id\` is a foreign key: 1 is Ani. This way we do not repeat the name on every row, and if it changes, we fix it in one place.

## Kinds of relationship

- **One-to-one**: person ↔ passport,
- **One-to-many**: class → students,
- **Many-to-many**: students ↔ clubs (an intermediate table is needed).

## Exercises

1. What is a record?
2. Why is a name a poor choice for a primary key?
3. What is a foreign key?
4. What is the relationship between the "Writer" and "Book" tables if each book has one author?
5. Name two DBMSs.

## Answers

1. One row of a table: the data about one object.
2. Two people can have the same name.
3. A field that refers to the primary key of another table.
4. One-to-many (one writer, many books).
5. For example, MySQL and SQLite.`,
      quiz: [
        ["What is a row of a database table called?", ["A record", "A field", "A key", "A query"]],
        ["Which field uniquely identifies a record?", ["The primary key", "The name", "Any text field", "The date"]],
        ["What is a foreign key?", ["A reference to a record in another table", "A password", "The table's name", "A file extension"]],
        ["Which is a DBMS?", ["PostgreSQL", "Photoshop", "Chrome", "Word"]],
        ["What kind of relationship is \"class → students\"?", ["One-to-many", "One-to-one", "Many-to-many", "No relationship"]],
      ],
    },
    "sql-queries": {
      objectives: ["Write a SELECT query with a WHERE condition", "Sort with ORDER BY", "Use COUNT, AVG and GROUP BY", "Add and change data with INSERT and UPDATE"],
      content: `## SQL

**SQL** (Structured Query Language) is the language for working with databases. It was created at IBM in the 1970s and is used almost everywhere today.

Suppose there is a \`students\` table: \`id\`, \`name\`, \`class\`, \`score\`.

## SELECT

\`\`\`sql
SELECT name, score FROM students;
SELECT * FROM students;          -- all fields
\`\`\`

## WHERE

\`\`\`sql
SELECT name FROM students WHERE class = '9A';
SELECT name FROM students WHERE score >= 90 AND class = '9B';
SELECT name FROM students WHERE name LIKE 'A%';   -- starts with A
\`\`\`

## ORDER BY and LIMIT

\`\`\`sql
SELECT name, score FROM students ORDER BY score DESC LIMIT 3;
\`\`\`

This gives the 3 best students (\`DESC\` is descending, \`ASC\` is ascending).

## Aggregate functions

| Function | Meaning |
|---|---|
| \`COUNT(*)\` | number of rows |
| \`AVG(score)\` | average |
| \`SUM\`, \`MAX\`, \`MIN\` | sum, maximum, minimum |

\`\`\`sql
SELECT class, AVG(score) FROM students GROUP BY class;
\`\`\`

\`GROUP BY\` groups the rows and calculates a result for each group.

## Changing data

\`\`\`sql
INSERT INTO students (name, class, score) VALUES ('Lilit', '9A', 88);
UPDATE students SET score = 95 WHERE id = 3;
DELETE FROM students WHERE id = 7;
\`\`\`

Careful: \`UPDATE\` or \`DELETE\` without \`WHERE\` will change or delete **all** rows.

## Exercises

1. Write a query that shows the names of all the students in class 9B.
2. What does \`ORDER BY score DESC\` do?
3. How do you count the total number of students?
4. What happens after the command \`DELETE FROM students;\`?
5. Write a query that shows the highest score in each class.

## Answers

1. \`SELECT name FROM students WHERE class = '9B';\`
2. It sorts the result by score in descending order.
3. \`SELECT COUNT(*) FROM students;\`
4. All the rows are deleted.
5. \`SELECT class, MAX(score) FROM students GROUP BY class;\``,
      quiz: [
        ["Which command reads data?", ["SELECT", "INSERT", "UPDATE", "DELETE"]],
        ["Which word sets a condition in SQL?", ["WHERE", "IF", "WHEN", "CASE"]],
        ["What does COUNT(*) do?", ["Counts rows", "Adds numbers", "Deletes rows", "Sorts"]],
        ["Which command adds a new row?", ["INSERT", "SELECT", "GROUP BY", "ORDER BY"]],
        ["What does DESC mean?", ["Descending order", "Ascending order", "Delete", "Description"]],
      ],
    },
    "data-analysis": {
      objectives: ["Describe the stages of data analysis", "Calculate the mean, median and mode", "Find wrong or missing data", "Choose the right chart and avoid misleading graphs"],
      content: `## Stages

1. **Question**: what we want to find out (for example, "In which month does Yerevan get the most rain?").
2. **Data collection**: measurements, surveys, open data (for example, armstat.am).
3. **Cleaning**: fixing errors, duplicates and missing values.
4. **Analysis**: calculations, comparisons.
5. **Presentation**: charts and conclusions.

## Measures of central tendency

Marks: 6, 7, 7, 8, 10

| Measure | How to calculate | Result |
|---|---|---|
| **Mean** | sum / count | 38 / 5 = 7.6 |
| **Median** | the middle element of the ordered list | 7 |
| **Mode** | the most frequent value | 7 |
| **Range** | largest − smallest | 4 |

The median is less sensitive to extreme values. If there were 100 (an error) instead of 10, the mean would become 25.6, while the median would stay 7.

## In Python

\`\`\`python
import statistics
data = [6, 7, 7, 8, 10]
print(statistics.mean(data))     # 7.6
print(statistics.median(data))   # 7
print(statistics.mode(data))     # 7
\`\`\`

## Data cleaning

- Duplicate rows (the same student twice),
- Impossible values (a height of 17 m),
- Different spellings ("Yerevan", "yerevan", "Erevan"),
- Missing values (an empty cell).

## Charts

| Purpose | Chart |
|---|---|
| Compare groups | bar chart |
| Change over time | line chart |
| Relationship between two quantities | scatter plot |
| Distribution | histogram |

**Misleading graphs**: the axis does not start at 0, so a small difference looks big; units are not given; only a "convenient" period is chosen.

**Correlation is not causation**: if ice cream sales and beach injuries rise together, it does not mean ice cream is to blame; both depend on the heat.

## Exercises

1. Find the mean, median and mode of the numbers 3, 5, 5, 9, 13.
2. Why is the median sometimes better than the mean?
3. Which chart suits average monthly temperatures?
4. Name one data problem that needs cleaning.
5. Why can an axis that does not start at 0 be misleading?

## Answers

1. Mean 7, median 5, mode 5.
2. It is not affected by extreme or wrong values.
3. A line chart.
4. For example, duplicate rows or impossible values.
5. Small differences look big visually.`,
      quiz: [
        ["What is the median?", ["The middle element of the ordered list", "The most frequent value", "The sum divided by the count", "The largest value"]],
        ["What is the mode?", ["The most frequent value", "The average value", "The last value", "The range"]],
        ["Which chart shows the relationship between two quantities?", ["A scatter plot", "A pie chart", "A bar chart", "A table"]],
        ["What does \"correlation is not causation\" mean?", ["Changing together does not prove a cause", "Data is always wrong", "Graphs are not needed", "The mean is always right"]],
        ["What is the first stage of analysis?", ["Asking the question", "The chart", "The conclusion", "Cleaning"]],
      ],
    },
  },
};
