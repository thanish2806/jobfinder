const lessonsData = [
  {
    number: "01",
    title: "Introduction to MongoDB",
    lessons: [
      {
        title: "What is MongoDB & NoSQL?",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/mongodb-icon1.svg",
        content: `MongoDB is a **NoSQL** document database built for scalability and performance.

🟢 NoSQL vs SQL:
- **SQL (Relational)**: Structured tables, rows, fixed schemas.
- **NoSQL (Document)**: Flexible JSON-like format (BSON), no fixed schema.

📌 MongoDB is:
- Document-oriented
- Scalable & distributed
- Schema-flexible

Example Document:
\`\`\`json
{
  "name": "Alice",
  "age": 30,
  "interests": ["coding", "travel"]
}
\`\`\`

🔗 Learn More:
- https://www.mongodb.com/nosql-explained
- https://www.mongodb.com/what-is-mongodb`,
      },
      {
        title: "Installing MongoDB & Compass",
        lesson: "Lesson 02",
        duration: "30 Minutes",
        icon: "/assets/mongodb-icon2.svg",
        content: `Set up MongoDB for local development.

🧰 Tools:
- **MongoDB Server**: The database engine.
- **MongoDB Compass**: GUI for visual interaction with data.

📦 Installation (Mac/Linux/Windows):
- https://www.mongodb.com/try/download/community
- Follow official installation instructions for your OS

✅ After install:
\`\`\`bash
mongod         # Start MongoDB server
mongo          # Access CLI
\`\`\`

🌐 Compass:
- Browse collections visually
- Run queries
- Monitor performance

🔗 Docs:
- https://www.mongodb.com/docs/manual/installation/
- https://www.mongodb.com/docs/compass/current/`,
      },
      {
        title: "MongoDB vs Other Databases",
        lesson: "Lesson 03",
        duration: "40 Minutes",
        icon: "/assets/mongodb-icon3.svg",
        content: `MongoDB shines in use cases where flexibility and scalability are key.

🔍 Comparison:
| Feature | MongoDB | MySQL/Postgres | Firebase |
|--------|---------|----------------|----------|
| Data Model | Documents (JSON-like) | Tables | Realtime JSON Tree |
| Schema | Flexible | Rigid | Flexible |
| Scaling | Easy horizontal scaling | Complex | Auto |
| Use Case | Dynamic, scalable apps | Structured data | Realtime apps |

Best for:
- Real-time analytics
- E-commerce platforms
- Content management
- IoT applications

🔗 Deep Dive:
- https://www.mongodb.com/compare/mongodb-mysql
- https://www.mongodb.com/compare/mongodb-postgresql`,
      },
    ],
  },
  {
    number: "02",
    title: "CRUD Operations in MongoDB",
    lessons: [
      {
        title: "Create & Read Documents",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/mongodb-icon4.svg",
        content: `CRUD = Create, Read, Update, Delete.

🟢 Insert Document:
\`\`\`js
db.users.insertOne({ name: "Bob", age: 25 });
\`\`\`

📘 Read Documents:
\`\`\`js
db.users.find();               // All users
db.users.find({ age: { $gt: 20 } }); // Filter
\`\`\`

📌 _id field:
- Auto-generated unique identifier for each document

🔗 Docs:
- https://www.mongodb.com/docs/manual/tutorial/insert-documents/
- https://www.mongodb.com/docs/manual/tutorial/query-documents/`,
      },
      {
        title: "Update & Delete Documents",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/mongodb-icon5.svg",
        content: `📘 Update Document:
\`\`\`js
db.users.updateOne(
  { name: "Bob" },
  { $set: { age: 26 } }
);
\`\`\`

🗑️ Delete Document:
\`\`\`js
db.users.deleteOne({ name: "Bob" });
\`\`\`

🧠 Operators:
- $set, $inc, $unset
- $push, $pull for arrays

🔍 Match carefully to avoid deleting multiple documents.

🔗 Resources:
- https://www.mongodb.com/docs/manual/tutorial/update-documents/
- https://www.mongodb.com/docs/manual/tutorial/remove-documents/`,
      },
      {
        title: "Query Operators & Projections",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/mongodb-icon6.svg",
        content: `MongoDB queries support rich filtering and field projections.

🎯 Query Operators:
- Comparison: $eq, $gt, $lt
- Logical: $and, $or, $not
- Array: $in, $all, $elemMatch

📘 Example:
\`\`\`js
db.users.find({ age: { $gte: 18 } }, { name: 1, _id: 0 });
\`\`\`

🧪 Projections control output:
- { field: 1 } = include
- { field: 0 } = exclude

🔗 Docs:
- https://www.mongodb.com/docs/manual/reference/operator/query/
- https://www.mongodb.com/docs/manual/tutorial/project-fields-from-query-results/`,
      },
    ],
  },
  {
    number: "03",
    title: "Data Modeling & Aggregation",
    lessons: [
      {
        title: "Schema Design in MongoDB",
        lesson: "Lesson 01",
        duration: "50 Minutes",
        icon: "/assets/mongodb-icon7.svg",
        content: `Even though MongoDB is schema-less, **designing schemas** is essential for performance and scalability.

📦 Design Types:
- **Embedded**: Store related data inside a single document (faster reads).
- **Referenced**: Use references to other documents (flexible and normalized).

🧱 Embedded Example:
\`\`\`json
{
  name: "John",
  orders: [
    { item: "Book", qty: 2 },
    { item: "Pen", qty: 5 }
  ]
}
\`\`\`

🔗 Best Practices:
- Model data based on access patterns
- Avoid deeply nested structures
- Denormalize when reads > writes

📚 Resources:
- https://www.mongodb.com/docs/manual/core/data-modeling-introduction/
- https://www.mongodb.com/basics/schema-design`,
      },
      {
        title: "Aggregation Framework Basics",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/mongodb-icon8.svg",
        content: `Aggregation lets you transform and analyze data within MongoDB.

🔄 Pipeline Stages:
- **$match**: Filter documents
- **$group**: Aggregate values
- **$project**: Reshape output

📘 Example:
\`\`\`js
db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: { _id: "$customer", total: { $sum: "$amount" } } }
]);
\`\`\`

📊 Use Cases:
- Reports
- Summaries
- Grouped stats

🔗 Docs:
- https://www.mongodb.com/docs/manual/aggregation/
- https://www.mongodb.com/docs/manual/core/aggregation-pipeline/`,
      },
      {
        title: "Advanced Aggregations & Operators",
        lesson: "Lesson 03",
        duration: "1 Hour 10 Minutes",
        icon: "/assets/mongodb-icon9.svg",
        content: `MongoDB offers rich aggregation features for analytics.

🔧 Useful Operators:
- **$sort**: Sort documents
- **$limit / $skip**: Pagination
- **$lookup**: Join collections
- **$unwind**: Deconstruct arrays

📘 Join Example:
\`\`\`js
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userInfo"
    }
  }
]);
\`\`\`

🔗 Resources:
- https://www.mongodb.com/docs/manual/reference/operator/aggregation/
- https://www.mongodb.com/docs/manual/tutorial/aggregation-zip-code-data-set/`,
      },
    ],
  },
  {
    number: "04",
    title: "Indexes & Performance Optimization",
    lessons: [
      {
        title: "Understanding Indexes",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/mongodb-icon10.svg",
        content: `Indexes improve the performance of read operations by allowing fast lookups.

📘 Default Index:
- MongoDB automatically creates a **_id index** for every collection.

🔍 Create Index:
\`\`\`js
db.users.createIndex({ name: 1 });  // 1 = ascending
\`\`\`

🎯 Types of Indexes:
- Single field
- Compound (multiple fields)
- Multikey (arrays)
- Text (for search)

🔗 Docs:
- https://www.mongodb.com/docs/manual/indexes/
- https://www.mongodb.com/docs/manual/tutorial/create-indexes/`,
      },
      {
        title: "Index Strategies & Explain Plans",
        lesson: "Lesson 02",
        duration: "50 Minutes",
        icon: "/assets/mongodb-icon11.svg",
        content: `Use **explain()** to understand how MongoDB executes your query.

📘 Example:
\`\`\`js
db.users.find({ name: "Alice" }).explain("executionStats");
\`\`\`

🧠 Index Tips:
- Use indexes for fields in queries, sort, and match
- Keep index size low for better performance
- Avoid too many indexes (slow writes)

📊 Analyze:
- "COLLSCAN" = collection scan (no index used)
- "IXSCAN" = index scan (efficient)

🔗 Resources:
- https://www.mongodb.com/docs/manual/reference/method/cursor.explain/
- https://www.mongodb.com/docs/manual/core/query-plans/`,
      },
      {
        title: "Sharding & Replication Basics",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/mongodb-icon12.svg",
        content: `MongoDB supports high availability and horizontal scaling.

🗂️ Replication:
- MongoDB replica set = primary + secondary nodes
- Enables automatic failover and data redundancy

🔀 Sharding:
- Distribute data across multiple servers
- Scale horizontally by dividing large datasets

📘 Replica Set Example:
\`\`\`bash
mongod --replSet rs0
mongo
> rs.initiate()
\`\`\`

🔗 Docs:
- https://www.mongodb.com/docs/manual/replication/
- https://www.mongodb.com/docs/manual/sharding/`,
      },
    ],
  },
  {
    number: "05",
    title: "Using MongoDB with Node.js & Mongoose",
    lessons: [
      {
        title: "Connecting Node.js to MongoDB",
        lesson: "Lesson 01",
        duration: "40 Minutes",
        icon: "/assets/mongodb-icon13.svg",
        content: `Use the **MongoDB Node.js Driver** to connect and interact with MongoDB.

🧰 Setup:
\`\`\`bash
npm install mongodb
\`\`\`

📘 Basic Connection:
\`\`\`js
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  const db = client.db("test");
  const users = db.collection("users");
  const data = await users.find().toArray();
  console.log(data);
}
run();
\`\`\`

🔗 Docs:
- https://mongodb.github.io/node-mongodb-native/`,
      },
      {
        title: "Mongoose Models & Schemas",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/mongodb-icon14.svg",
        content: `Mongoose provides a higher-level abstraction for MongoDB in Node.js.

📦 Install:
\`\`\`bash
npm install mongoose
\`\`\`

📘 Define Schema & Model:
\`\`\`js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);
\`\`\`

🔗 Docs:
- https://mongoosejs.com/docs/models.html
- https://mongoosejs.com/docs/guide.html`,
      },
      {
        title: "CRUD with Mongoose",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/mongodb-icon15.svg",
        content: `Mongoose makes CRUD operations simple with model methods.

🟢 Create:
\`\`\`js
const newUser = new User({ name: "Alice", age: 28 });
await newUser.save();
\`\`\`

📘 Read:
\`\`\`js
const users = await User.find({ age: { $gt: 25 } });
\`\`\`

✏️ Update:
\`\`\`js
await User.updateOne({ name: "Alice" }, { $set: { age: 29 } });
\`\`\`

🗑️ Delete:
\`\`\`js
await User.deleteOne({ name: "Alice" });
\`\`\`

🔗 Resources:
- https://mongoosejs.com/docs/api.html#model_Model
- https://mongoosejs.com/docs/queries.html`,
      },
    ],
  },
];

export default lessonsData;
