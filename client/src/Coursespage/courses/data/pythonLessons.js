const lessonsData = [
  {
    number: "01",
    title: "Introduction to Python Programming",
    lessons: [
      {
        title: "Getting Started with Python",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/python-icon1.svg",
        content: `Python is a beginner-friendly programming language known for its simplicity and versatility.

🧠 Why Learn Python?
- Easy syntax
- High demand across industries
- Ideal for web, data science, automation, and AI

🔧 Setup:
- Install Python: https://www.python.org/downloads/
- Use IDEs like VSCode or PyCharm

\`\`\`python
print("Hello, world!")
\`\`\`

🔗 Resources:
- https://realpython.com
- https://docs.python.org/3/tutorial/
      `,
      },
      {
        title: "Variables, Data Types & Basic Operations",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/python-icon2.svg",
        content: `Variables store data, and data types define what kind of value is stored.

📦 Common Data Types:
- int, float
- str (strings)
- bool (True/False)

🔢 Operators:
- Arithmetic: +, -, *, /
- Comparison: ==, !=, >, <

\`\`\`python
name = "Alex"
age = 21
is_student = True
print(f"{name} is {age} years old.")
\`\`\`

🔗 Learn More:
- https://www.w3schools.com/python/python_variables.asp
      `,
      },
      {
        title: "Control Flow: Conditionals and Loops",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/python-icon3.svg",
        content: `Control flow lets your code make decisions and repeat tasks.

🔀 Conditionals:
\`\`\`python
if age > 18:
  print("Adult")
else:
  print("Minor")
\`\`\`

🔁 Loops:
- for loops
- while loops

\`\`\`python
for i in range(5):
  print(i)
\`\`\`

🔗 Guide:
- https://docs.python.org/3/tutorial/controlflow.html
      `,
      },
    ],
  },
  {
    number: "02",
    title: "Working with Data",
    lessons: [
      {
        title: "Lists, Tuples, and Dictionaries",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/data-icon1.svg",
        content: `Collections help manage multiple values.

🧺 Structures:
- Lists: ordered, mutable
- Tuples: ordered, immutable
- Dictionaries: key-value pairs

\`\`\`python
fruits = ["apple", "banana"]
person = {"name": "Alex", "age": 21}
\`\`\`

🔗 Deep Dive:
- https://realpython.com/python-data-structures/
      `,
      },
      {
        title: "String Manipulation & Formatting",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/data-icon2.svg",
        content: `Strings are a fundamental part of data handling.

🔤 Common Ops:
- Concatenation
- Slicing
- Methods: '.upper()', '.split()', '.replace()'

\`\`\`python
text = "Learn Python"
print(text.lower())
\`\`\`

✨ Formatting:
\`\`\`python
name = "Alex"
print(f"Hello, {name}!")
\`\`\`

🔗 Learn More:
- https://docs.python.org/3/library/stdtypes.html#string-methods
      `,
      },
      {
        title: "Working with Files",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/data-icon3.svg",
        content: `Read and write files to store and retrieve data.

📁 File Modes:
- 'r' = read
- 'w' = write
- 'a' = append

\`\`\`python
with open("data.txt", "w") as file:
  file.write("Hello, file!")
\`\`\`

🔗 Docs:
- https://realpython.com/read-write-files-python/
      `,
      },
    ],
  },
  {
    number: "03",
    title: "Functions & Modules",
    lessons: [
      {
        title: "Defining & Calling Functions",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/functions-icon1.svg",
        content: `Functions group code into reusable blocks.

📌 Syntax:
\`\`\`python
def greet(name):
  return f"Hello, {name}"
\`\`\`

🎯 Benefits:
- Reusability
- Readability
- Easier debugging

🔗 Guide:
- https://www.w3schools.com/python/python_functions.asp
      `,
      },
      {
        title: "Function Arguments & Return Values",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/functions-icon2.svg",
        content: `You can pass values to and from functions.

🧮 Argument Types:
- Positional
- Keyword
- Default
- *args, **kwargs

\`\`\`python
def add(a, b=0):
  return a + b
\`\`\`

🔗 Learn More:
- https://realpython.com/defining-your-own-python-function/
      `,
      },
      {
        title: "Importing & Using Modules",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/functions-icon3.svg",
        content: `Modules let you organize and reuse code.

🧰 Examples:
- Built-in: math, random
- Custom: your own '.py' files

\`\`\`python
import math
print(math.sqrt(16))
\`\`\`

🔗 Docs:
- https://docs.python.org/3/tutorial/modules.html
      `,
      },
    ],
  },
  {
    number: "04",
    title: "Object-Oriented Programming",
    lessons: [
      {
        title: "Classes and Objects",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/oop-icon1.svg",
        content: `OOP is a paradigm based on objects and classes.

🏛️ Class Syntax:
\`\`\`python
class Dog:
  def __init__(self, name):
    self.name = name
\`\`\`

🧍 Create Object:
\`\`\`python
dog1 = Dog("Buddy")
\`\`\`

🔗 Learn:
- https://realpython.com/python3-object-oriented-programming/
      `,
      },
      {
        title: "Inheritance & Polymorphism",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/oop-icon2.svg",
        content: `Reuse code and extend behavior with inheritance.

🧬 Example:
\`\`\`python
class Animal:
  def sound(self): pass

class Cat(Animal):
  def sound(self): return "Meow"
\`\`\`

🔗 Guide:
- https://www.w3schools.com/python/python_inheritance.asp
      `,
      },
      {
        title: "Encapsulation & Abstraction",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/oop-icon3.svg",
        content: `Hide complexity and protect data using encapsulation.

🔐 Example:
\`\`\`python
class BankAccount:
  def __init__(self):
    self.__balance = 0  # private
\`\`\`

🎩 Abstraction simplifies interfaces.

🔗 Learn More:
- https://www.geeksforgeeks.org/encapsulation-in-python/
      `,
      },
    ],
  },
  {
    number: "05",
    title: "Real-World Python Projects",
    lessons: [
      {
        title: "Build a Calculator",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/project-icon1.svg",
        content: `Create a CLI-based calculator using functions and conditionals.

⚙️ Operations:
- Add, Subtract, Multiply, Divide

\`\`\`python
def calculate():
  # your calculator code here
\`\`\`

🔗 Tips:
- Input validation
- Looping for multiple operations
      `,
      },
      {
        title: "Web Scraper with Requests & BeautifulSoup",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/project-icon2.svg",
        content: `Extract data from websites using Python.

📦 Libraries:
- requests
- BeautifulSoup

\`\`\`python
import requests
from bs4 import BeautifulSoup
# Scrape a webpage
\`\`\`

🔗 Docs:
- https://realpython.com/beautiful-soup-web-scraper-python/
      `,
      },
      {
        title: "Build a Todo App with Tkinter",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/project-icon3.svg",
        content: `Create a GUI-based todo list using Tkinter.

🎨 UI Elements:
- Input box
- List box
- Buttons (Add, Remove)

\`\`\`python
import tkinter as tk
# Basic app layout
\`\`\`

🔗 Guide:
- https://realpython.com/python-gui-tkinter/
      `,
      },
    ],
  },
];

export default lessonsData;
