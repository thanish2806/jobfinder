import React, { useState } from "react";
import "./course-main.css";
import courseHtmlBanner from "../../assets/courseimg/course-html.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const lessonsData = [
  {
    number: "01",
    title: "Node.js Basics & Environment",
    lessons: [
      {
        title: "What is Node.js & Event-Driven Architecture",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/node-icon1.svg",
        content: `Node.js is a **runtime environment** that allows JavaScript to run outside the browser using the V8 engine.

🔄 Node follows an **event-driven, non-blocking I/O** model for high performance.

Key Concepts:
- Single-threaded but handles concurrency via the **event loop**
- Uses **libuv** for async operations

\`\`\`js
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
\`\`\`

🔗 Learn More:
- https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick
- https://nodejs.dev/en/learn/
`,
      },
      {
        title: "Setting Up Node.js Projects",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/node-icon2.svg",
        content: `Initialize a project with \`npm\` and manage dependencies easily.

\`\`\`bash
npm init -y
npm install express
\`\`\`

Structure:
- Use folders like \`routes/\`, \`controllers/\`, \`models/\`
- Modularize your logic using CommonJS or ES Modules

\`\`\`js
// index.js
const express = require('express');
const app = express();
app.listen(3000, () => console.log("Server running"));
\`\`\`

🧰 Tools:
- nodemon for live reloading
- dotenv for environment configs

🔗 Docs:
- https://docs.npmjs.com/
- https://expressjs.com/en/starter/installing.html
`,
      },
      {
        title: "Working with Built-in Modules",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/node-icon3.svg",
        content: `Node provides useful **core modules** such as:

- \`fs\` – file system
- \`http\` – create servers
- \`path\` – path utilities
- \`os\` – system info

Example: Reading a file
\`\`\`js
const fs = require('fs');
fs.readFile('./data.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});
\`\`\`

🔗 Core Module Docs:
- https://nodejs.org/api/
`,
      },
    ],
  },
  {
    number: "02",
    title: "Express Framework Essentials",
    lessons: [
      {
        title: "Routing with Express",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/express-icon1.svg",
        content: `Express simplifies HTTP handling via **routing and middleware**.

\`\`\`js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World'));
\`\`\`

Features:
- Route grouping (use \`express.Router()\`)
- Support for route params & query strings

🔗 Docs:
- https://expressjs.com/en/guide/routing.html
`,
      },
      {
        title: "Middleware & Request Lifecycle",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/express-icon2.svg",
        content: `Middleware functions have access to \`req\`, \`res\`, and \`next()\`.

Example:
\`\`\`js
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});
\`\`\`

Types of Middleware:
- Application-level
- Router-level
- Error-handling

Use cases:
- Logging
- Parsing JSON
- Authentication

🔗 Learn:
- https://expressjs.com/en/guide/using-middleware.html
`,
      },
      {
        title: "Serving Static Files & Templating",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/express-icon3.svg",
        content: `Serve static assets using:

\`\`\`js
app.use(express.static('public'));
\`\`\`

Use templating engines like **EJS**, **Pug**, or **Handlebars** to render dynamic HTML.

EJS Example:
\`\`\`js
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});
\`\`\`

🔗 Resources:
- https://ejs.co/
- https://expressjs.com/en/starter/static-files.html
`,
      },
    ],
  },
  {
    number: "03",
    title: "REST APIs with Express & MongoDB",
    lessons: [
      {
        title: "Building RESTful Routes",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/api-icon1.svg",
        content: `Use HTTP methods to define RESTful endpoints:

\`\`\`js
app.get('/users', getUsers);
app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);
\`\`\`

Follow REST conventions:
- Use nouns (e.g., \`/posts\`, \`/comments\`)
- Stateless operations

🔗 Learn REST:
- https://restfulapi.net/
- https://expressjs.com/en/starter/basic-routing.html
`,
      },
      {
        title: "MongoDB Integration with Mongoose",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/api-icon2.svg",
        content: `Mongoose is an ODM for MongoDB.

\`\`\`bash
npm install mongoose
\`\`\`

Define schemas and models:
\`\`\`js
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', userSchema);
\`\`\`

Operations:
- \`.find()\`, \`.create()\`, \`.updateOne()\`, \`.deleteOne()\`

🔗 Mongoose Docs:
- https://mongoosejs.com/
`,
      },
      {
        title: "Validation & Error Handling",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/api-icon3.svg",
        content: `Use Mongoose built-in validators or custom logic.

Example:
\`\`\`js
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    // eslint-disable-next-line no-useless-escape
    match: /.+@.+..+/
  }
});
\`\`\`

Error Handling Middleware:
\`\`\`js
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
\`\`\`

🔗 Guides:
- https://mongoosejs.com/docs/validation.html
- https://expressjs.com/en/guide/error-handling.html
`,
      },
    ],
  },
  {
    number: "04",
    title: "Authentication & Security",
    lessons: [
      {
        title: "User Auth with JWT",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/auth-icon1.svg",
        content: `Use **jsonwebtoken** for stateless authentication.

\`\`\`bash
npm install jsonwebtoken
\`\`\`

Workflow:
- Sign token on login
- Verify token on protected routes

\`\`\`js
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 123 }, 'secret', { expiresIn: '1h' });
\`\`\`

🔗 Learn More:
- https://jwt.io/
`,
      },
      {
        title: "Password Hashing with Bcrypt",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/auth-icon2.svg",
        content: `Use **bcrypt** to securely hash passwords.

\`\`\`bash
npm install bcrypt
\`\`\`

\`\`\`js
const bcrypt = require('bcrypt');
const hash = await bcrypt.hash('password123', 10);
const isValid = await bcrypt.compare('password123', hash);
\`\`\`

🔗 Guide:
- https://www.npmjs.com/package/bcrypt
`,
      },
      {
        title: "Securing Express Apps",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/auth-icon3.svg",
        content: `Security Best Practices:
- Use **helmet** for HTTP headers
- Sanitize inputs
- Rate limiting to prevent brute force

\`\`\`bash
npm install helmet express-rate-limit
\`\`\`

\`\`\`js
const helmet = require('helmet');
app.use(helmet());
\`\`\`

🔗 Resources:
- https://expressjs.com/en/advanced/best-practice-security.html
- https://helmetjs.github.io/
`,
      },
    ],
  },
  {
    number: "05",
    title: "Deployment & Project Structure",
    lessons: [
      {
        title: "Structuring Scalable Apps",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/deploy-icon1.svg",
        content: `Organize your app into modules:

Structure:
\`\`
/routes
/controllers
/models
/middleware
/config
\`\`

Follow separation of concerns (SoC) and keep code readable and testable.

🔗 Ref:
- https://dev.to/itnext/the-perfect-architecture-flow-for-your-nodejs-project-47eh
`,
      },
      {
        title: "Environment Variables & Config",
        lesson: "Lesson 02",
        duration: "30 Minutes",
        icon: "/assets/deploy-icon2.svg",
        content: `Use the **dotenv** package to handle environment variables.

\`\`\`bash
npm install dotenv
\`\`\`

\`\`\`js
require('dotenv').config();
const PORT = process.env.PORT || 3000;
\`\`\`

Create a \`.env\` file:
\`\`
PORT=3000
MONGO_URI=mongodb://localhost/mydb
\`\`

🔗 Learn:
- https://www.npmjs.com/package/dotenv
`,
      },
      {
        title: "Deploying to Render/Heroku/Vercel",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/deploy-icon3.svg",
        content: `You can deploy Node.js apps to various platforms:

🛠️ Platforms:
- **Render**: free tier, autoscaling
- **Heroku**: simple CLI deploy
- **Vercel**: mostly for frontend but supports APIs

Basic Deploy to Heroku:
\`\`\`bash
heroku create
git push heroku main
\`\`\`

Add \`Procfile\`:
\`\`
web: node index.js
\`\`

🔗 Docs:
- https://render.com/docs
- https://devcenter.heroku.com/articles/getting-started-with-nodejs
- https://vercel.com/docs
`,
      },
    ],
  },
];
const Nodex = () => {
  const [activeLesson, setActiveLesson] = useState({
    moduleIndex: null,
    lessonIndex: null,
  });

  const toggleLesson = (moduleIndex, lessonIndex) => {
    if (
      activeLesson.moduleIndex === moduleIndex &&
      activeLesson.lessonIndex === lessonIndex
    ) {
      setActiveLesson({ moduleIndex: null, lessonIndex: null });
    } else {
      setActiveLesson({ moduleIndex, lessonIndex });
    }
  };

  return (
    <div className="group-104">
      <Navbar />

      <div className="course-title-description">
        <div className="heading">Node.js & Express</div>
        <div className="paragraph">
          This course is designed to help beginners dive into backend
          development using Node.js and Express. You'll learn how to build fast
          and scalable server-side applications using JavaScript. Through
          hands-on projects and practical tasks, you'll get comfortable with
          routing, middleware, RESTful APIs, and connecting to databases like
          MongoDB.
        </div>

        <div
          className="container"
          style={{ backgroundImage: `url(${courseHtmlBanner})` }}
        ></div>

        <div
          className={`container2 ${
            activeLesson.moduleIndex !== null ? "blurred-background" : ""
          }`}
        >
          <div className="sub-container">
            {lessonsData.map((module, moduleIndex) => (
              <div className="course-card" key={moduleIndex}>
                <div className="number">{module.number}</div>
                <div className="heading2">{module.title}</div>
                <div className="course-items-container">
                  {module.lessons.map((lesson, lessonIndex) => {
                    const _isActive =
                      activeLesson.moduleIndex === moduleIndex &&
                      activeLesson.lessonIndex === lessonIndex;

                    return (
                      <div
                        key={lessonIndex}
                        className={
                          lessonIndex === 1 ? "feature-item2" : "feature-item"
                        }
                        onClick={() => toggleLesson(moduleIndex, lessonIndex)}
                        style={{ cursor: "pointer" }}
                      >
                        <div
                          className={
                            lessonIndex === 2
                              ? "text-container2"
                              : "text-container"
                          }
                        >
                          <div className="heading3">{lesson.title}</div>
                          <div className="text">{lesson.lesson}</div>
                        </div>

                        <div className="click-to-enroll">
                          <h1>Enroll</h1>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {activeLesson.moduleIndex !== null && (
          <>
            <div
              className="lesson-overlay"
              onClick={() =>
                setActiveLesson({ moduleIndex: null, lessonIndex: null })
              }
            ></div>
            <div className="lesson-popup">
              <button
                className="close-btn"
                onClick={() =>
                  setActiveLesson({ moduleIndex: null, lessonIndex: null })
                }
              >
                ×
              </button>
              <div className="popup-title">
                {
                  lessonsData[activeLesson.moduleIndex].lessons[
                    activeLesson.lessonIndex
                  ].title
                }
              </div>
              <pre>
                {
                  lessonsData[activeLesson.moduleIndex].lessons[
                    activeLesson.lessonIndex
                  ].content
                }
              </pre>
            </div>
          </>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Nodex;
