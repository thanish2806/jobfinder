import React, { useState } from "react";
import "./course-main.css";
import courseHtmlBanner from "../../assets/courseimg/course-html.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const lessonsData = [
  {
  number: "01",
  title: "Getting Started with Flutter & Dart",
  lessons: [
    {
      title: "Introduction to Flutter & Its Architecture",
      lesson: "Lesson 01",
      duration: "45 Minutes",
      icon: "/assets/flutter-icon1.svg",
      content: `Understand what Flutter is and why it's revolutionizing cross-platform development.

📱 Key Concepts:
- Flutter SDK and its layered architecture
- Widgets: Everything is a widget
- Dart as the programming language

🔗 Resources:
- https://flutter.dev/docs
- https://dart.dev/overview`,
    },
    {
      title: "Setting Up Development Environment",
      lesson: "Lesson 02",
      duration: "1 Hour",
      icon: "/assets/flutter-icon2.svg",
      content: `Install all necessary tools to build and run your first Flutter app.

🛠️ Steps:
- Install Flutter SDK, Dart, and Android Studio or VS Code
- Configure device emulators
- Verify setup with 'flutter doctor'

🔗 Guides:
- https://docs.flutter.dev/get-started/install
- https://docs.flutter.dev/get-started/editor?tab=vscode`,
    },
    {
      title: "Dart Basics for Flutter",
      lesson: "Lesson 03",
      duration: "1 Hour",
      icon: "/assets/flutter-icon3.svg",
      content: `Learn core Dart programming concepts needed for Flutter development.

📘 Topics:
- Variables, Functions, Classes, Null Safety
- Collections: List, Map, Set
- Futures & Async/Await

🔗 Learn More:
- https://dart.dev/guides/language/language-tour
- https://dart.dev/codelabs`,
    },
  ],
},
{
  number: "02",
  title: "Flutter Widgets & Layouts",
  lessons: [
    {
      title: "Stateless vs Stateful Widgets",
      lesson: "Lesson 01",
      duration: "45 Minutes",
      icon: "/assets/flutter-icon4.svg",
      content: `Explore the building blocks of any Flutter UI.

🧱 Key Points:
- Differences between Stateless and Stateful widgets
- Widget lifecycle
- Use cases for each type

🔗 Docs:
- https://docs.flutter.dev/development/ui/widgets`,
    },
    {
      title: "Layouts & Positioning",
      lesson: "Lesson 02",
      duration: "1 Hour",
      icon: "/assets/flutter-icon5.svg",
      content: `Design responsive and flexible UI layouts.

🧭 Widgets:
- Column, Row, Stack, Expanded, SizedBox
- Align, Center, Padding, Margin
- MediaQuery for responsiveness

🔗 Layout Explorer:
- https://flutter.dev/docs/development/ui/layout`,
    },
    {
      title: "Building Your First UI",
      lesson: "Lesson 03",
      duration: "1 Hour",
      icon: "/assets/flutter-icon6.svg",
      content: `Build a basic user interface using widgets.

🛠️ Example Project:
- Create a simple profile card UI
- Use Image, Text, Container, ListTile
- Add interactivity with buttons

📦 Tip: Use Hot Reload for faster iteration.`,
    },
  ],
},
{
  number: "03",
  title: "Navigation & State Management",
  lessons: [
    {
      title: "Routing & Navigation",
      lesson: "Lesson 01",
      duration: "50 Minutes",
      icon: "/assets/flutter-icon7.svg",
      content: `Implement navigation across multiple screens.

🗺️ Learn:
- Navigator.push and pop
- Named routes
- Passing data between screens

🔗 Docs:
- https://docs.flutter.dev/cookbook/navigation`,
    },
    {
      title: "Intro to State Management",
      lesson: "Lesson 02",
      duration: "1 Hour",
      icon: "/assets/flutter-icon8.svg",
      content: `Manage app state effectively.

🔄 Approaches:
- setState() for local state
- Lifting state up
- Why state management matters in large apps

🔗 Read:
- https://flutter.dev/docs/development/data-and-backend/state-mgmt/intro`,
    },
    {
      title: "Using Provider Package",
      lesson: "Lesson 03",
      duration: "1 Hour",
      icon: "/assets/flutter-icon9.svg",
      content: `Use Provider for scalable and reactive state handling.

📦 Topics:
- Installing and configuring Provider
- Using ChangeNotifier
- Consumer and Selector widgets

🔗 Docs:
- https://pub.dev/packages/provider`,
    },
  ],
},
{
  number: "04",
  title: "Networking, Forms & Local Storage",
  lessons: [
    {
      title: "Making API Calls",
      lesson: "Lesson 01",
      duration: "1 Hour",
      icon: "/assets/flutter-icon10.svg",
      content: `Integrate your app with web services.

🌐 Learn:
- Using 'http' package
- Parsing JSON responses
- Error handling & async/await

🔗 Docs:
- https://pub.dev/packages/http`,
    },
    {
      title: "Forms, Input, and Validation",
      lesson: "Lesson 02",
      duration: "1 Hour",
      icon: "/assets/flutter-icon11.svg",
      content: `Capture and validate user input.

📝 Widgets:
- TextField, Form, FormField
- Validators, Controllers
- FocusNode and input UX

🔗 Cookbook:
- https://flutter.dev/docs/cookbook/forms`,
    },
    {
      title: "Storing Data Locally",
      lesson: "Lesson 03",
      duration: "50 Minutes",
      icon: "/assets/flutter-icon12.svg",
      content: `Persist data on the device.

💾 Techniques:
- Shared Preferences for key-value
- sqflite for local databases
- File-based storage options

🔗 Packages:
- https://pub.dev/packages/shared_preferences
- https://pub.dev/packages/sqflite`,
    },
  ],
},
{
  number: "05",
  title: "Deployment & Project Showcase",
  lessons: [
    {
      title: "Debugging & Testing",
      lesson: "Lesson 01",
      duration: "1 Hour",
      icon: "/assets/flutter-icon13.svg",
      content: `Ensure code quality with proper debugging and testing.

🐞 Learn:
- Using Flutter DevTools
- Widget and unit testing
- Mocking and test-driven development

🔗 Docs:
- https://docs.flutter.dev/testing`,
    },
    {
      title: "Publishing Your App",
      lesson: "Lesson 02",
      duration: "1 Hour",
      icon: "/assets/flutter-icon14.svg",
      content: `Deploy your Flutter app to Android and iOS stores.

🚀 Steps:
- Build APK and iOS archive
- Signing & uploading
- Store listing and review process

🔗 Guide:
- https://docs.flutter.dev/deployment`,
    },
    {
      title: "Final Project: Build & Share Your App",
      lesson: "Lesson 03",
      duration: "2 Hours",
      icon: "/assets/flutter-icon15.svg",
      content: `Apply everything by building and presenting your own Flutter app.

🎓 Project Guidelines:
- Choose a real-world idea
- Use multiple screens, APIs, state management
- Share your app on GitHub or deploy via Firebase

🔗 Inspiration:
- https://flutterawesome.com/
- https://github.com/Solido/awesome-flutter`,
    },
  ],
}


];
const Flutter = () => {
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
        <div className="heading">Flutter App Development</div>
        <div className="paragraph">
          This course provides a comprehensive introduction to Flutter, Google's
          UI toolkit for crafting beautiful, natively compiled applications.
          You'll learn everything from setting up your environment to building
          fully functional mobile apps using Dart and Flutter widgets.
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

export default Flutter;
