const lessonsData = [
  {
    number: "01",
    title: "Modern JavaScript (ES6) Basics",
    lessons: [
      {
        title: "Let, Const & Block Scope",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/js-icon1.svg",
        content: `ES6 introduced two new ways to declare variables: \`let\` and \`const\`. Unlike \`var\`, they are block-scoped.

- \`let\`: Re-assignable, but block-scoped.
- \`const\`: Immutable reference (not value), block-scoped.

Example:
\`\`\`js
{
  let a = 10;
  const b = 20;
  var c = 30;
}
console.log(a); // Error
console.log(b); // Error
console.log(c); // 30
\`\`\`

🔗 Learn More:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const`,
      },
      {
        title: "Arrow Functions",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/js-icon2.svg",
        content: `Arrow functions provide a cleaner syntax and lexical \`this\`.

Syntax:
\`\`\`js
const greet = name => \`Hello, \${name}\`;
\`\`\`

Key Features:
- Implicit return
- No own \`this\` (inherits from parent scope)
- Great for callbacks

Caution:
Avoid arrow functions for object methods or constructors.

🔗 Explore:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions`,
      },
      {
        title: "Template Literals",
        lesson: "Lesson 03",
        duration: "30 Minutes",
        icon: "/assets/js-icon3.svg",
        content: `Template literals allow embedded expressions and multiline strings using backticks (\`\`).

\`\`\`js
const name = "Sam";
const greeting = \`Hello, \${name}!\`;
console.log(greeting); // Hello, Sam!
\`\`\`

Features:
- Multiline support
- Tagged templates
- Expression interpolation

🔗 Docs:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals`,
      },
    ],
  },
  {
    number: "02",
    title: "Destructuring & Spread/Rest",
    lessons: [
      {
        title: "Object & Array Destructuring",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/js-icon4.svg",
        content: `Destructuring lets you extract values from arrays or properties from objects into variables.

Examples:
\`\`\`js
const user = { name: "Jane", age: 30 };
const { name, age } = user;

const arr = [1, 2, 3];
const [first, second] = arr;
\`\`\`

Uses:
- Function arguments
- Clean variable assignment
- Default values and renaming

🔗 Docs:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Destructuring_assignment`,
      },
      {
        title: "Spread & Rest Operators",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/js-icon5.svg",
        content: `The spread operator (\`...\`) expands arrays or objects. The rest operator collects values.

Examples:
\`\`\`js
const nums = [1, 2, 3];
const more = [...nums, 4, 5]; // Spread

function sum(...args) {
  return args.reduce((a, b) => a + b, 0); // Rest
}
\`\`\`

Use Cases:
- Copying arrays/objects
- Merging data
- Variadic functions

🔗 Read More:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax`,
      },
    ],
  },

  {
    number: "03",
    title: "CSS Box Model & Layout",
    lessons: [
      {
        title: "Understanding the Box Model",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/icon8.svg",
        content: `Everything in CSS is a box. The box model includes:
- content
- padding
- border
- margin

Understanding spacing between elements is critical for layout.

🔗 Learn More:
- https://developer.mozilla.org/en-US/docs/Web/CSS/box_model
- https://css-tricks.com/the-css-box-model/`,
      },
      {
        title: "Display Property & Positioning",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/icon9.svg",
        content: `Control how elements behave with:
- display: block, inline, inline-block, flex, grid
- position: static, relative, absolute, fixed, sticky

🔗 Docs:
- https://developer.mozilla.org/en-US/docs/Web/CSS/display
- https://developer.mozilla.org/en-US/docs/Web/CSS/position`,
      },
      {
        title: "Flexbox Essentials",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/icon10.svg",
        content: `Flexbox helps align and distribute space:
- Use display: flex
- Justify and align items
- Direction and wrapping

🔗 Try It:
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- https://flexboxfroggy.com/`,
      },
    ],
  },
  {
    number: "04",
    title: "JavaScript Classes & OOP",
    lessons: [
      {
        title: "ES6 Classes & Constructors",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/js-icon9.svg",
        content: `Classes in JavaScript are syntactic sugar over prototypes.

\`\`\`js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
}
\`\`\`

Key Features:
- Constructor functions
- Class methods
- Encapsulation

🔗 Docs:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes`,
      },
      {
        title: "Inheritance & Super",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/js-icon10.svg",
        content: `Extend functionality using \`extends\` and \`super()\`.

\`\`\`js
class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
}
\`\`\`

- Super calls parent constructor
- Access parent methods

🔗 Learn More:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends`,
      },
    ],
  },

  {
    number: "05",
    title: "Modules, Tooling & Patterns",
    lessons: [
      {
        title: "ES Modules (import / export)",
        lesson: "Lesson 01",
        duration: "55 Minutes",
        icon: "/assets/js/icon13.svg",
        content: `► **ES Modules (ESM)** are native to JavaScript and support **static imports**, better optimization, and async loading.

✅ **Named Exports** vs **Default Exports**:

\`\`\`js
// math.js
export function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; }

// main.js
import multiply, { add } from './math.js';
\`\`\`

📌 Modules are scoped (no globals), hoisted, and strict-mode by default.

🧠 Remember:
- Always use \`type="module"\` in HTML
- ES Modules are deferred by default (run after DOM is ready)

🔗 Learn More:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import`,
      },
      {
        title: "Bundlers & Transpilers (Vite, Webpack, Babel)",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/js/icon14.svg",
        content: `► Modern apps need **build tools** for speed, browser support, and modular development.

### 🛠️ Key Tools:
- **Vite**: Fast dev server, ESM-first, minimal config
- **Webpack**: Mature, flexible, plugin ecosystem
- **Babel**: Transpiles modern JS (ES6+) to older syntax

\`\`\`bash
# Vite quickstart
npm create vite@latest my-app
cd my-app && npm install && npm run dev
\`\`\`

📦 Bundling reduces HTTP requests by combining files.  
🔄 Transpiling makes modern JS compatible with older environments.

🔗 Resources:
- https://vitejs.dev/
- https://webpack.js.org/
- https://babeljs.io/
- https://esbuild.github.io/ (ultra-fast bundler)`,
      },
      {
        title: "Design Patterns in Modern JS",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/js/icon15.svg",
        content: `► **Design patterns** help solve common code structure problems elegantly.

### 🧩 Popular Patterns:
- **Module**: Encapsulation via closures or ESM
- **Observer**: Subscriptions & event notifications
- **Factory**: Create objects dynamically
- **Singleton**: Global shared instance
- **Strategy**: Select behavior at runtime

🧪 Example – Observer Pattern:
\`\`\`js
class Subject {
  #subs = new Set();
  subscribe(fn) { this.#subs.add(fn); }
  unsubscribe(fn) { this.#subs.delete(fn); }
  notify(data) { this.#subs.forEach(fn => fn(data)); }
}
\`\`\`

🔍 Patterns matter most when applied at the **right scale and time** — avoid overengineering.

🔗 Dive Deeper:
- https://refactoring.guru/design-patterns
- https://addyosmani.com/resources/essentialjsdesignpatterns/book/`,
      },
    ],
  },
];

export default lessonsData;
