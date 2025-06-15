import React, { useState } from "react";
import "./course-main.css";
import courseHtmlBanner from "../../assets/courseimg/course-html.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const lessonsData = [
  {
    number: "01",
    title: "Introduction to React",
    lessons: [
      {
        title: "What is React?",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/icon1.svg",
        content:
          "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data without reloading the page. React is maintained by Facebook and a community of individual developers and companies.\n\n🔗 Learn More:\n- https://reactjs.org/docs/getting-started.html\n- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
      },
      {
        title: "Setting Up the Environment",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/icon2.svg",
        content:
          "This lesson covers how to set up a React development environment using Create React App. You'll learn how to install Node.js, npm, and create your first React application.\n\n🔗 Explore:\n- https://reactjs.org/docs/create-a-new-react-app.html\n- https://nodejs.org/en/download/",
      },
      {
        title: "JSX - JavaScript XML",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/icon3.svg",
        content:
          "JSX is a syntax extension for JavaScript that looks similar to XML. It allows you to write HTML elements in JavaScript and place them in the DOM without using functions like `createElement`.\n\n🔗 Docs:\n- https://reactjs.org/docs/introducing-jsx.html\n- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",
      },
    ],
  },
  {
    number: "02",
    title: "Components and Props",
    lessons: [
      {
        title: "Understanding Components",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/icon4.svg",
        content:
          "Components are the building blocks of a React application. This lesson will cover functional and class components, and how to create and use them.\n\n🔗 Docs:\n- https://reactjs.org/docs/components-and-props.html\n- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
      },
      {
        title: "Props - Passing Data",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/icon5.svg",
        content:
          "Props are used to pass data from one component to another. This lesson will explain how to use props effectively in your React applications.\n\n🔗 Learn More:\n- https://reactjs.org/docs/components-and-props.html#props",
      },
      {
        title: "State and Lifecycle",
        lesson: "Lesson 03",
        duration: "1 Hour",
        icon: "/assets/icon6.svg",
        content:
          "Learn how to manage state in React components and understand the lifecycle of a component from mounting to unmounting.\n\n🔗 Explore:\n- https://reactjs.org/docs/state-and-lifecycle.html\n- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
      },
    ],
  },
  {
    number: "03",
    title: "Handling Events and Forms",
    lessons: [
      {
        title: "Handling Events",
        lesson: "Lesson 01",
        duration: "45 Minutes",
        icon: "/assets/icon7.svg",
        content:
          "Learn how to handle events in React, including mouse events, keyboard events, and form events.\n\n🔗 Docs:\n- https://reactjs.org/docs/events.html\n- https://developer.mozilla.org/en-US/docs/Web/Events",
      },
      {
        title: "Forms in React",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/icon8.svg",
        content:
          "This lesson covers how to create and manage forms in React, including controlled components and form validation.\n\n🔗 Learn More:\n- https://reactjs.org/docs/forms.html\n- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
      },
      {
        title: "Controlled vs Uncontrolled Components",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/icon9.svg",
        content:
          "Understand the difference between controlled and uncontrolled components in React and when to use each.\n\n🔗 Explore:\n- https://reactjs.org/docs/forms.html#controlled-components\n- https://reactjs.org/docs/uncontrolled-components.html",
      },
    ],
  },
  {
    number: "04",
    title: "Routing in React",
    lessons: [
      {
        title: "React Router Basics",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/icon10.svg",
        content:
          "Learn how to implement routing in your React application using React Router, including setting up routes and navigation.\n\n🔗 Docs:\n- https://reactrouter.com/web/guides/quick-start\n- https://reactrouter.com/web/guides/quick-start",
      },
      {
        title: "Dynamic Routing",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/icon11.svg",
        content:
          "This lesson covers how to create dynamic routes in React Router and how to pass parameters to routes.\n\n🔗 Learn More:\n- https://reactrouter.com/web/guides/quick-start\n- https://reactrouter.com/web/guides/quick-start",
      },
      {
        title: "Nested Routes",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/icon12.svg",
        content:
          "Understand how to create nested routes in React Router and how to manage route rendering.\n\n🔗 Explore:\n- https://reactrouter.com/web/guides/quick-start\n- https://reactrouter.com/web/guides/quick-start",
      },
    ],
  },
  {
    number: "05",
    title: "Advanced React Concepts",
    lessons: [
      {
        title: "Context API",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/icon13.svg",
        content:
          "Learn how to use the Context API to manage global state in your React applications without prop drilling.\n\n🔗 Docs:\n- https://reactjs.org/docs/context.html\n- https://reactjs.org/docs/context.html",
      },
      {
        title: "Hooks: useState and useEffect",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/icon14.svg",
        content:
          "This lesson covers the useState and useEffect hooks, which allow you to manage state and side effects in functional components.\n\n🔗 Learn More:\n- https://reactjs.org/docs/hooks-state.html\n- https://reactjs.org/docs/hooks-effect.html",
      },
      {
        title: "Custom Hooks",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/icon15.svg",
        content:
          "Learn how to create custom hooks to encapsulate reusable logic in your React applications.\n\n🔗 Explore:\n- https://reactjs.org/docs/hooks-custom.html\n- https://reactjs.org/docs/hooks-custom.html",
      },
    ],
  },
];
const Reactbeginer = () => {
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
        <div className="heading">React for Beginners</div>
        <div className="paragraph">
          This course is designed to help beginners get comfortable with
          React.js by learning in small, manageable steps. Each week focuses on
          specific topics and ends with practical tasks to help reinforce your
          learning.
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

export default Reactbeginer;
