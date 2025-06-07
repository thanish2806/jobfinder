import React, { useState } from "react";
import "./course-main.css";
import courseHtmlBanner from "../../assets/courseimg/course-html.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const lessonsData = [
  {
    number: "01",
    title: "JavaScript Fundamentals",
    lessons: [
      {
        title: "Introduction to JavaScript",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/js-icon1.svg",
        content:
          "Explore the origins and importance of JavaScript. Learn how it's used in browsers and what makes it a powerful tool for interactive web applications.",
      },
      {
        title: "Variables and Data Types",
        lesson: "Lesson 02",
        duration: "50 Minutes",
        icon: "/assets/js-icon2.svg",
        content:
          "Understand how to declare variables using var, let, and const. Dive into JavaScript’s dynamic typing and its various data types including strings, numbers, booleans, null, undefined, and objects.",
      },
      {
        title: "Operators and Expressions",
        lesson: "Lesson 03",
        duration: "40 Minutes",
        icon: "/assets/js-icon3.svg",
        content:
          "Learn to use arithmetic, assignment, comparison, and logical operators to write effective expressions and build logic into your code.",
      },
    ],
  },
  {
    number: "02",
    title: "Functions and Scope",
    lessons: [
      {
        title: "Defining and Calling Functions",
        lesson: "Lesson 01",
        duration: "50 Minutes",
        icon: "/assets/js-icon4.svg",
        content:
          "Understand the purpose of functions. Learn how to define them using declarations and expressions, and how to pass parameters and return values.",
      },
      {
        title: "Arrow Functions and Callbacks",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/js-icon5.svg",
        content:
          "Explore ES6 arrow functions, their syntax, and how they differ from regular functions. Understand how callbacks work for asynchronous programming.",
      },
      {
        title: "Scope and Closures",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/js-icon6.svg",
        content:
          "Learn how JavaScript scopes work (global, function, and block scope) and how closures give access to outer function scopes even after the function has executed.",
      },
    ],
  },
  {
    number: "03",
    title: "Working with Data",
    lessons: [
      {
        title: "Arrays and Array Methods",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/js-icon7.svg",
        content:
          "Understand how to store collections of data using arrays. Learn how to use methods like map, filter, reduce, forEach, and more to manipulate array data efficiently.",
      },
      {
        title: "Objects and Destructuring",
        lesson: "Lesson 02",
        duration: "50 Minutes",
        icon: "/assets/js-icon8.svg",
        content:
          "Dive into JavaScript objects to store structured data. Learn how to access, update, and destructure objects for clean and readable code.",
      },
      {
        title: "JSON and Working with APIs",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/js-icon9.svg",
        content:
          "Learn how to use JSON (JavaScript Object Notation) for data exchange. Understand how to parse and stringify data and work with real APIs using fetch.",
      },
    ],
  },
  {
    number: "04",
    title: "DOM and Events",
    lessons: [
      {
        title: "Understanding the DOM",
        lesson: "Lesson 01",
        duration: "50 Minutes",
        icon: "/assets/js-icon10.svg",
        content:
          "Explore the Document Object Model. Learn how to access and manipulate HTML elements using JavaScript to create dynamic web pages.",
      },
      {
        title: "Event Handling",
        lesson: "Lesson 02",
        duration: "45 Minutes",
        icon: "/assets/js-icon11.svg",
        content:
          "Learn how to handle user interactions using event listeners. Understand event types, propagation, delegation, and best practices.",
      },
      {
        title: "Form Handling and Validation",
        lesson: "Lesson 03",
        duration: "55 Minutes",
        icon: "/assets/js-icon12.svg",
        content:
          "Understand how to capture and validate user input through HTML forms using JavaScript. Prevent default behavior and show custom messages.",
      },
    ],
  },
  {
    number: "05",
    title: "Advanced JavaScript Concepts",
    lessons: [
      {
        title: "ES6+ Features",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/js-icon13.svg",
        content:
          "Explore modern JavaScript features such as template literals, destructuring, default parameters, spread/rest operators, and enhanced object properties.",
      },
      {
        title: "Asynchronous JavaScript",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/js-icon14.svg",
        content:
          "Master asynchronous programming in JavaScript using callbacks, promises, and async/await to handle data fetching and time-based actions.",
      },
      {
        title: "Modules and Tooling",
        lesson: "Lesson 03",
        duration: "50 Minutes",
        icon: "/assets/js-icon15.svg",
        content:
          "Learn how to split your code into modules for better maintainability. Understand ES6 module import/export syntax and basic bundlers like Webpack.",
      },
    ],
  },
];
const Javascriptessentials = () => {
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
        <div className="heading">JavaScript Essentials</div>
        <div className="paragraph">
          This course covers the fundamentals of JavaScript, the language of the
          web. Learn how to add interactivity, logic, and functionality to your
          web pages using modern JavaScript.
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

export default Javascriptessentials;
