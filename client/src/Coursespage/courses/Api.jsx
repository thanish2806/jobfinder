import React, { useState } from "react";
import "./course-main.css";
import courseHtmlBanner from "../../assets/courseimg/course-html.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const lessonsData = [
  {
    number: "01",
    title: "API Basics & HTTP Foundations",
    lessons: [
      {
        title: "What is an API?",
        lesson: "Lesson 01",
        duration: "40 Minutes",
        icon: "/assets/api-icon1.svg",
        content: `APIs (Application Programming Interfaces) allow systems to communicate. They define a contract that applications follow to exchange data.

Types of APIs:
- REST
- GraphQL
- SOAP
- WebSocket

📌 Key Use:
APIs power apps, web services, 3rd-party integrations, and microservices.

🔗 Learn More:
- https://developer.mozilla.org/en-US/docs/Glossary/API
- https://restfulapi.net/`,
      },
      {
        title: "HTTP Methods & Status Codes",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/api-icon2.svg",
        content: `HTTP defines how clients and servers communicate.

Common Methods:
- \`GET\`: Retrieve data
- \`POST\`: Send new data
- \`PUT/PATCH\`: Update existing data
- \`DELETE\`: Remove data

Status Codes:
- 200: OK
- 201: Created
- 400: Bad Request
- 401/403: Unauthorized/Forbidden
- 500: Server Error

🔗 Docs:
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status`,
      },
    ],
  },
  {
    number: "02",
    title: "Building RESTful APIs with Express.js",
    lessons: [
      {
        title: "Setting Up Express",
        lesson: "Lesson 01",
        duration: "50 Minutes",
        icon: "/assets/api-icon3.svg",
        content: `Express.js is a minimalist web framework for Node.js used to build APIs quickly and efficiently.

📦 Setup:
\`\`\`bash
npm init -y
npm install express
\`\`\`

📄 Basic Server:
\`\`\`js
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('API Running'));
app.listen(3000);
\`\`\`

🔗 Learn More:
- https://expressjs.com/en/starter/hello-world.html`,
      },
      {
        title: "Creating CRUD Routes",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/api-icon4.svg",
        content: `RESTful APIs follow CRUD principles (Create, Read, Update, Delete).

🛠 Example:
\`\`\`js
app.post('/items', (req, res) => { /* Create */ });
app.get('/items', (req, res) => { /* Read */ });
app.put('/items/:id', (req, res) => { /* Update */ });
app.delete('/items/:id', (req, res) => { /* Delete */ });
\`\`\`

👉 Use \`express.json()\` middleware to parse JSON bodies.

🔗 REST Guide:
- https://restfulapi.net/resource-naming/
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes`,
      },
      {
        title: "Handling Middleware & Error Responses",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/api-icon5.svg",
        content: `Middleware functions process requests before they hit your routes.

🔁 Use Cases:
- Logging
- Authentication
- Error handling

Example Middleware:
\`\`\`js
app.use((req, res, next) => {
  console.log(\`\${req.method} - \${req.path}\`);
  next();
});
\`\`\`

Error Handling:
\`\`\`js
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
\`\`\`

🔗 Docs:
- https://expressjs.com/en/guide/using-middleware.html`,
      },
    ],
  },
  {
    number: "03",
    title: "API Authentication & Security",
    lessons: [
      {
        title: "Understanding API Authentication",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/api-icon6.svg",
        content: `🔐 Authentication ensures that only verified users can access certain API endpoints.

🧩 Common Methods:
- API Keys
- JWT (JSON Web Tokens)
- OAuth2 (for 3rd-party services)

✅ Example Flow (JWT):
1. User logs in with email/password
2. Server returns a signed JWT
3. Client sends JWT in Authorization header

\`\`\`http
Authorization: Bearer <token>
\`\`\`

🔗 Learn More:
- https://jwt.io/introduction
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication`,
      },
      {
        title: "Implementing JWT with Express",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/api-icon7.svg",
        content: `📦 Setup:
\`\`\`bash
npm install jsonwebtoken
\`\`\`

🔐 Sign & Verify Tokens:
\`\`\`js
const jwt = require('jsonwebtoken');

const token = jwt.sign({ userId: 123 }, 'secret', { expiresIn: '1h' });

const decoded = jwt.verify(token, 'secret');
\`\`\`

✅ Protect Routes:
\`\`\`js
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Unauthorized');

  try {
    req.user = jwt.verify(token, 'secret');
    next();
  } catch (e) {
    res.status(403).send('Forbidden');
  }
}
\`\`\`

🔗 Docs:
- https://www.npmjs.com/package/jsonwebtoken`,
      },
      {
        title: "Securing APIs (Rate Limiting, CORS, HTTPS)",
        lesson: "Lesson 03",
        duration: "50 Minutes",
        icon: "/assets/api-icon8.svg",
        content: `🛡️ Techniques to Protect APIs:

1. **Rate Limiting**:
   - Prevent abuse by limiting number of requests per time window.
   - Use libraries like \`express-rate-limit\`.

2. **CORS (Cross-Origin Resource Sharing)**:
   - Controls which domains can access your API.
   \`\`\`js
   const cors = require('cors');
   app.use(cors({ origin: 'https://yourdomain.com' }));
   \`\`\`

3. **HTTPS**:
   - Always use HTTPS in production to encrypt data.

4. **Helmet**:
   - Helps secure HTTP headers.
   \`\`\`bash
   npm install helmet
   app.use(require('helmet')());
   \`\`\`

🔗 More:
- https://expressjs.com/en/advanced/best-practice-security.html
- https://www.npmjs.com/package/express-rate-limit
- https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS`,
      },
    ],
  },
  {
    number: "04",
    title: "Working with Databases in APIs",
    lessons: [
      {
        title: "Connecting APIs to MongoDB",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/api-icon9.svg",
        content: `MongoDB is a NoSQL document database, commonly used with APIs to persist data.

📦 Setup:
\`\`\`bash
npm install mongoose
\`\`\`

🔌 Connecting:
\`\`\`js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapi')
  .then(() => console.log('Connected'));
\`\`\`

📄 Define Schema:
\`\`\`js
const User = mongoose.model('User', {
  name: String,
  email: String
});
\`\`\`

🔗 Docs:
- https://mongoosejs.com/docs/index.html
- https://www.mongodb.com/developer/products/mongodb`,
      },
      {
        title: "CRUD Operations with Mongoose",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/api-icon10.svg",
        content: `Mongoose makes it easy to perform CRUD operations.

📥 Create:
\`\`\`js
await User.create({ name: 'Jane', email: 'jane@example.com' });
\`\`\`

📤 Read:
\`\`\`js
const users = await User.find();
\`\`\`

✏️ Update:
\`\`\`js
await User.findByIdAndUpdate(id, { name: 'Updated' });
\`\`\`

🗑️ Delete:
\`\`\`js
await User.findByIdAndDelete(id);
\`\`\`

🔗 API:
- https://mongoosejs.com/docs/queries.html`,
      },
      {
        title: "Relational Databases & Sequelize (Optional)",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/api-icon11.svg",
        content: `If you need structured relational data, use SQL databases like PostgreSQL or MySQL.

📦 Sequelize ORM:
\`\`\`bash
npm install sequelize pg pg-hstore
\`\`\`

📄 Define Models:
\`\`\`js
const { Sequelize, DataTypes } = require('sequelize');
const db = new Sequelize('postgres://user:pass@localhost:5432/mydb');

const User = db.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING
});
\`\`\`

🔁 Sync & Query:
\`\`\`js
await db.sync();
const users = await User.findAll();
\`\`\`

🔗 Resources:
- https://sequelize.org/
- https://www.postgresql.org/docs/`,
      },
    ],
  },{
  number: "05",
  title: "Testing & Documenting APIs",
  lessons: [
    {
      title: "Introduction to API Testing",
      lesson: "Lesson 01",
      duration: "45 Minutes",
      icon: "/assets/api-icon12.svg",
      content: `API testing ensures your endpoints work as expected and handle edge cases gracefully.

🧪 What to Test:
- Correct responses (status codes, data)
- Invalid inputs (error handling)
- Authentication & permissions

🔧 Tools:
- **Postman**: GUI tool for manual testing
- **REST Client** (VS Code extension)
- **Curl**: Command line HTTP tool

📌 Example with curl:
\`\`\`bash
curl -X GET http://localhost:3000/api/users
\`\`\`

🔗 Try:
- https://www.postman.com/
- https://httpie.io/ (CLI alternative)`
    },
    {
      title: "Automated Testing with Jest & Supertest",
      lesson: "Lesson 02",
      duration: "1 Hour",
      icon: "/assets/api-icon13.svg",
      content: `Automated tests allow consistent validation during development and CI/CD.

📦 Install:
\`\`\`bash
npm install --save-dev jest supertest
\`\`\`

🧪 Example:
\`\`\`js
const request = require('supertest');
const app = require('../app');

test('GET /users returns JSON', async () => {
  const res = await request(app).get('/users');
  expect(res.statusCode).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
});
\`\`\`

🎯 Benefits:
- Early bug detection
- Confidence in deployments

🔗 Resources:
- https://jestjs.io/
- https://github.com/visionmedia/supertest`
    },
    {
      title: "API Documentation with Swagger (OpenAPI)",
      lesson: "Lesson 03",
      duration: "1 Hour",
      icon: "/assets/api-icon14.svg",
      content: `Documenting APIs helps others understand and use your endpoints correctly.

📄 Swagger (OpenAPI):
- Interactive docs
- Client/server generation
- JSON/YAML format

📦 Setup:
\`\`\`bash
npm install swagger-ui-express swagger-jsdoc
\`\`\`

⚙️ Config:
\`\`\`js
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: { openapi: '3.0.0', info: { title: 'API', version: '1.0.0' }},
  apis: ['./routes/*.js'],
};

const specs = swaggerJsDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
\`\`\`

🔗 Explore:
- https://swagger.io/tools/swagger-ui/
- https://editor.swagger.io/`
    }
  ]
}

];
const Api = () => {
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
        <div className="heading">API Development with Postman</div>
        <div className="paragraph">
          This course offers a comprehensive introduction to API development
          using Postman, the industry-standard tool for testing and managing
          APIs. You'll learn how to design, test, document, and automate RESTful
          APIs using Postman’s powerful features. Whether you're a backend
          developer, QA engineer, or aspiring API specialist, this course will
          help you understand the complete API lifecycle and equip you with the
          skills to streamline development and collaboration.
        </div>
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
  );
};

export default Api;
