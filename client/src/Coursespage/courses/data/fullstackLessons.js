const lessonsData = [
  {
    number: "01",
    title: "Introduction to Full Stack Development",
    lessons: [
      {
        title: "What is Full Stack Development?",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/fullstack-icon1.svg",
        content: `Learn the fundamentals of full stack development, the skills involved, and the technologies used across front-end, back-end, and databases.

📘 Topics Covered:
- Definition and scope of full stack development
- Role of a full stack developer in modern software teams
- Overview of tech stacks (MERN, MEAN, LAMP)

📌 Outcome: Understand where full stack fits in the software industry and what skillsets you’ll build.`,
      },
      {
        title: "Client vs Server Architecture",
        lesson: "Lesson 02",
        duration: "50 Minutes",
        icon: "/assets/fullstack-icon2.svg",
        content: `Explore how front-end and back-end communicate in client-server models. Learn about HTTP, APIs, and how the web works under the hood.

📘 Key Concepts:
- Browser and server interactions
- HTTP/HTTPS protocol basics
- RESTful APIs and JSON

📌 Outcome: Be able to describe how data flows from user to server and back.`,
      },
      {
        title: "Setting Up Your Development Environment",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/fullstack-icon3.svg",
        content: `Set up essential tools required for full stack development on your local machine.

🛠️ Tools & Setup:
- Installing VS Code and extensions
- Node.js and npm basics
- Version control with Git and GitHub

📌 Outcome: Have a working full stack-ready environment on your system.`,
      },
    ],
  },
  {
    number: "02",
    title: "Front-End Development with HTML, CSS, and JavaScript",
    lessons: [
      {
        title: "HTML & Semantic Structure",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/fullstack-icon4.svg",
        content: `Dive into HTML, the backbone of web pages. Learn to build accessible, semantic web structures.

📘 Topics:
- Elements, tags, attributes
- Forms, tables, and media
- Semantic HTML (header, article, nav, footer)

📌 Outcome: Build a complete semantic HTML page.`,
      },
      {
        title: "CSS Layout & Responsive Design",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/fullstack-icon5.svg",
        content: `Master styling and layout using modern CSS practices.

📘 Topics:
- Flexbox and CSS Grid
- Media queries for mobile responsiveness
- CSS variables and custom themes

📌 Outcome: Design responsive UIs that adapt across screen sizes.`,
      },
      {
        title: "JavaScript Essentials",
        lesson: "Lesson 03",
        duration: "1 Hour 15 Minutes",
        icon: "/assets/fullstack-icon6.svg",
        content: `Learn the programming language that powers interactivity on the web.

📘 Topics:
- Variables, data types, loops, and functions
- DOM manipulation and event listeners
- ES6+ features (let/const, arrow functions, template literals)

📌 Outcome: Create a dynamic to-do app using pure JavaScript.`,
      },
    ],
  },
  {
    number: "03",
    title: "Back-End Development with Node.js & Express",
    lessons: [
      {
        title: "Introduction to Node.js",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/fullstack-icon7.svg",
        content: `Understand the server-side JavaScript runtime and why Node.js is so powerful for full stack apps.

📘 Topics:
- What is Node.js and its event-driven model
- npm & packages
- Creating your first server with HTTP module

📌 Outcome: Build a basic server that handles requests and responses.`,
      },
      {
        title: "Express.js for Routing & Middleware",
        lesson: "Lesson 02",
        duration: "1 Hour 10 Minutes",
        icon: "/assets/fullstack-icon8.svg",
        content: `Use Express.js to build scalable backend applications quickly and efficiently.

📘 Topics:
- Creating routes and route parameters
- Middleware and request lifecycle
- Serving static files and templating

📌 Outcome: Build an API with routes for CRUD operations.`,
      },
      {
        title: "Connecting with MongoDB",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/fullstack-icon9.svg",
        content: `Learn to use MongoDB, a NoSQL database, to persist your application data.

📘 Topics:
- MongoDB fundamentals and collections
- Mongoose for modeling data
- CRUD operations in the database

📌 Outcome: Save user data from a form to MongoDB.`,
      },
    ],
  },
  {
    number: "04",
    title: "Building Full Stack Applications",
    lessons: [
      {
        title: "Connecting Frontend to Backend",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/fullstack-icon10.svg",
        content: `Learn to connect your React/JavaScript front-end with your Node.js/Express backend.

📘 Topics:
- Fetch/Axios for API requests
- Sending JSON data between layers
- Handling asynchronous operations

📌 Outcome: Submit a contact form and store submissions in the database.`,
      },
      {
        title: "Authentication & Authorization",
        lesson: "Lesson 02",
        duration: "1 Hour 15 Minutes",
        icon: "/assets/fullstack-icon11.svg",
        content: `Add user login and signup functionality using JWT and hashed passwords.

📘 Topics:
- Hashing with bcrypt
- Sessions vs JWT
- Middleware for protected routes

📌 Outcome: Create a login system with user sessions and auth middleware.`,
      },
      {
        title: "Deploying Your Full Stack App",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/fullstack-icon12.svg",
        content: `Make your app live using cloud platforms.

🚀 Platforms:
- Frontend: Vercel / Netlify
- Backend: Render / Railway / Heroku
- Environment Variables and CI/CD basics

📌 Outcome: Deploy a fully working MERN app online.`,
      },
    ],
  },
  {
    number: "05",
    title: "Advanced Tools & Best Practices",
    lessons: [
      {
        title: "Version Control with Git & GitHub",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/fullstack-icon13.svg",
        content: `Manage code collaboratively and track project changes effectively.

📘 Topics:
- Git basics (commit, push, pull)
- Branching strategies
- Pull requests and collaboration

📌 Outcome: Use GitHub to collaborate and manage versions of a web app.`,
      },
      {
        title: "State Management in React",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/fullstack-icon14.svg",
        content: `Handle complex UI state with modern React tools.

📘 Topics:
- useState and useEffect hooks
- Context API for global state
- Redux Toolkit intro (optional advanced)

📌 Outcome: Implement global state for user auth and theme toggle.`,
      },
      {
        title: "Testing & Debugging Full Stack Apps",
        lesson: "Lesson 03",
        duration: "1 Hour 15 Minutes",
        icon: "/assets/fullstack-icon15.svg",
        content: `Ensure quality and catch bugs before your users do.

📘 Topics:
- Console debugging techniques
- Writing unit & integration tests (Jest, Supertest)
- Postman & browser dev tools

📌 Outcome: Test and debug your API and UI components.`,
      },
    ],
  },
];

export default lessonsData;
