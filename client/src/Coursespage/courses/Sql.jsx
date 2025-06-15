import React, { useState } from "react";
import "./course-main.css";
import courseHtmlBanner from "../../assets/courseimg/course-html.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const lessonsData = [
  {
    number: "01",
    title: "SQL Fundamentals",
    lessons: [
      {
        title: "Relational Databases 101",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/sql-icon1.svg",
        content:
          "**Core Concepts**: Tables, rows, columns, primary keys\n**DBMS Types**: MySQL, PostgreSQL, SQL Server\n\n**Example Table**:\n```sql\nCREATE TABLE users (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  name VARCHAR(50) NOT NULL,\n  email VARCHAR(100) UNIQUE\n);```\n\n🔗 Resources:\n- https://www.w3schools.com/sql/sql_intro.asp",
      },
      {
        title: "Basic SQL Queries",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/sql-icon2.svg",
        content:
          "SELECT, WHERE, ORDER BY clauses\n\n**Query Examples**:\n```sql\nSELECT name, email FROM users \nWHERE signup_date > '2023-01-01'\nORDER BY name ASC;```\n\n**Practice**: Query products priced over $50 from sample DB\n\n🔗 Resources:\n- https://sqlbolt.com/",
      },
      {
        title: "Filtering & Sorting",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/sql-icon3.svg",
        content:
          "Advanced WHERE clauses and sorting\n\n**Operators**:\n```sql\nSELECT * FROM orders\nWHERE status IN ('Shipped', 'Delivered')\n  AND total > 100\nORDER BY order_date DESC\nLIMIT 10;```\n\n**Pattern Matching**:\n```sql\nSELECT * FROM products \nWHERE name LIKE 'Apple%';```\n\n🔗 Resources:\n- https://mode.com/sql-tutorial/sql-operators/",
      },
    ],
  },
  {
    number: "02",
    title: "Data Manipulation",
    lessons: [
      {
        title: "CRUD Operations",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/sql-icon4.svg",
        content:
          "Create, Read, Update, Delete\n\n**Examples**:\n```sql\nINSERT INTO users (name, email) \nVALUES ('John Doe', 'john@example.com');\n\nUPDATE users SET email='new@email.com' \nWHERE id = 101;\n\nDELETE FROM logs \nWHERE created_at < '2022-01-01';```\n\n🔗 Resources:\n- https://www.postgresqltutorial.com/postgresql-crud/",
      },
      {
        title: "Joins Explained",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/sql-icon5.svg",
        content:
          "INNER JOIN, LEFT JOIN, RIGHT JOIN\n\n**Order Analysis**:\n```sql\nSELECT users.name, orders.total\nFROM users\nINNER JOIN orders \n  ON users.id = orders.user_id;```\n\n**Venn Diagrams**:\n- INNER JOIN = Intersection\n- LEFT JOIN = All left + matched right\n\n🔗 Resources:\n- https://sql-joins.leopard.in.ua/",
      },
      {
        title: "Aggregation Functions",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/sql-icon6.svg",
        content:
          "GROUP BY, SUM, AVG, COUNT\n\n**Sales Report**:\n```sql\nSELECT \n  category,\n  COUNT(*) AS product_count,\n  AVG(price) AS avg_price\nFROM products\nGROUP BY category\nHAVING AVG(price) > 50;```\n\n🔗 Resources:\n- https://www.sqltutorial.org/sql-aggregate-functions/",
      },
    ],
  },
  {
    number: "03",
    title: "Advanced Queries",
    lessons: [
      {
        title: "Subqueries & CTEs",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/sql-icon7.svg",
        content:
          "Nested queries and Common Table Expressions\n\n**Subquery Example**:\n```sql\nSELECT name \nFROM products\nWHERE price > (SELECT AVG(price) FROM products);```\n\n**CTE Example**:\n```sql\nWITH high_value_customers AS (\n  SELECT user_id, SUM(total) AS lifetime_spend\n  FROM orders\n  GROUP BY user_id\n  HAVING SUM(total) > 1000\n)\nSELECT * FROM high_value_customers;```\n\n🔗 Resources:\n- https://learnsql.com/blog/sql-subquery-cte-difference/",
      },
      {
        title: "Window Functions",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/sql-icon8.svg",
        content:
          "ROW_NUMBER(), RANK(), Running totals\n\n**Sales Ranking**:\n```sql\nSELECT \n  product_id,\n  sales,\n  RANK() OVER (ORDER BY sales DESC) AS sales_rank\nFROM monthly_sales;```\n\n**Partitioned Analysis**:\n```sql\nSELECT \n  department,\n  employee,\n  salary,\n  AVG(salary) OVER (PARTITION BY department) AS dept_avg\nFROM employees;```\n\n🔗 Resources:\n- https://mode.com/sql-tutorial/sql-window-functions/",
      },
      {
        title: "Date & Time Manipulation",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/sql-icon9.svg",
        content:
          "Date formatting, intervals, and extraction\n\n**Time-Series Analysis**:\n```sql\nSELECT\n  DATE_TRUNC('month', order_date) AS month,\n  COUNT(*) AS orders\nFROM orders\nGROUP BY month\nORDER BY month;\n\nSELECT \n  EXTRACT(YEAR FROM order_date) AS order_year,\n  SUM(total) AS yearly_revenue\nFROM orders\nGROUP BY order_year;```\n\n🔗 Resources:\n- https://www.postgresqltutorial.com/postgresql-date-functions/",
      },
    ],
  },
  {
    number: "04",
    title: "Database Design",
    lessons: [
      {
        title: "Normalization",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/sql-icon10.svg",
        content:
          "1NF, 2NF, 3NF with examples\n\n**Before Normalization**:\n```\nOrders Table\norder_id | customer_name | product1 | product2 | ...```\n\n**After 3NF**:\n```\nOrders\norder_id | customer_id\n\nOrder_Items\norder_id | product_id | quantity\n\nCustomers\ncustomer_id | name```\n\n🔗 Resources:\n- https://www.guru99.com/database-normalization.html",
      },
      {
        title: "ER Modeling",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/sql-icon11.svg",
        content:
          "Entity-Relationship Diagrams (Crow's Foot)\n\n**Key Symbols**:\n- □ Entity\n- ◇ Relationship\n- ────┬─── Cardinality (one-to-many)\n\n**Example**:\n```\nCUSTOMER ────< ORDERS >─── PRODUCT```\n\n**Tools**: Lucidchart, dbdiagram.io\n\n🔗 Resources:\n- https://www.lucidchart.com/pages/er-diagrams",
      },
      {
        title: "Indexes & Performance",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/sql-icon12.svg",
        content:
          "How indexes speed up queries\n\n**Create Index**:\n```sql\nCREATE INDEX idx_email ON users(email);\n\nEXPLAIN ANALYZE SELECT * FROM users \nWHERE email = 'test@example.com';```\n\n**When to Index**:\n- Foreign keys\n- Frequently filtered columns\n- Avoid over-indexing on write-heavy tables\n\n🔗 Resources:\n- https://use-the-index-luke.com/",
      },
    ],
  },
  {
    number: "05",
    title: "Advanced Topics",
    lessons: [
      {
        title: "Stored Procedures",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/sql-icon13.svg",
        content:
          "Reusable SQL code blocks\n\n**MySQL Example**:\n```sql\nDELIMITER //\nCREATE PROCEDURE GetHighValueCustomers()\nBEGIN\n  SELECT * FROM customers \n  WHERE lifetime_value > 10000;\nEND //\nDELIMITER ;\n\nCALL GetHighValueCustomers();```\n\n🔗 Resources:\n- https://www.mysqltutorial.org/mysql-stored-procedure-tutorial.aspx",
      },
      {
        title: "Transactions & ACID",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/sql-icon14.svg",
        content:
          "Atomic, Consistent, Isolated, Durable\n\n**Money Transfer Example**:\n```sql\nSTART TRANSACTION;\n\nUPDATE accounts SET balance = balance - 100 \nWHERE id = 1;\n\nUPDATE accounts SET balance = balance + 100 \nWHERE id = 2;\n\nCOMMIT;  -- or ROLLBACK on error```\n\n🔗 Resources:\n- https://www.ibm.com/docs/en/cics-ts/5.4?topic=processing-acid-properties-transactions",
      },
      {
        title: "NoSQL vs SQL",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/sql-icon15.svg",
        content:
          "Comparing relational and non-relational DBs\n\n**Use Cases**:\n| SQL                 | NoSQL              |\n|---------------------|--------------------|\n| Structured data     | Unstructured data  |\n| Complex joins       | Horizontal scaling |\n| ACID compliance     | Flexible schema    |\n\n**NoSQL Types**:\n- Document (MongoDB)\n- Key-Value (Redis)\n- Column (Cassandra)\n\n🔗 Resources:\n- https://www.mongodb.com/nosql-explained",
      },
    ],
  },
];
const SqlCourse = () => {
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
        <div className="heading">SQL & Relational Databases</div>
        <div className="paragraph">
          This course provides a comprehensive introduction to SQL and
          relational databases. Learn how to design database schemas, write
          complex SQL queries, and use relational databases like MySQL and
          PostgreSQL to store and retrieve data efficiently. This course is
          essential for back-end developers and anyone working with databases.
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

export default SqlCourse;
