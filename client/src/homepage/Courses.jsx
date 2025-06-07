import React from "react";
import "./courses.css";
import Learnmorebutton from "../components/learnmorebutton";
import { Link } from "react-router-dom";

const Courses = () => {
  const courseData = [
    {
      img: "/webdesign.png",
      duration: "4 Weeks",
      level: "Beginner",
      author: "By John Smith",
      title: "Web Design Fundamentals",
      description:
        "Learn the fundamentals of web design including HTML, CSS, and design principles.",
      path: "/html-css",
    },
    {
      img: "/js.png",
      duration: "6 Weeks",
      level: "Intermediate",
      author: "By Jane Doe",
      title: "Advanced JavaScript",
      description:
        "Deep dive into ES6+, async programming, and modern JS frameworks.",
      path: "/advancedJS",
    },
    {
      img: "/uiux.jpeg",
      duration: "3 Weeks",
      level: "Beginner",
      author: "By Emily Clark",
      title: "UI/UX Design Basics",
      description:
        "Understand user experience, wireframing, and interface best practices.",
      path: "/uiux",
    },
    {
      img: "/react.png",
      duration: "5 Weeks",
      level: "Advanced",
      author: "By Alex Johnson",
      title: "React & Redux Mastery",
      description:
        "Build scalable web apps using React and manage state with Redux effectively.",
      path: "/react-beginers",
    },
    {
      img: "/resdesign.png",
      duration: "2 Weeks",
      level: "Beginner",
      author: "By Lisa Ray",
      title: "Responsive Design",
      description:
        "Make websites look great on all devices with media queries and Flexbox.",
      path: "/responsive-web-design",
    },
    {
      img: "/nodejs.png",
      duration: "4 Weeks",
      level: "Intermediate",
      author: "By Mark Lee",
      title: "Node.js Essentials",
      description:
        "Get started with server-side JavaScript and build backend APIs using Node.js.",
      path: "/node-express",
    },
  ];

  return (
    <div className="courses-container">
      <h1 className="courses-title">
        <span className="title-explore">Explore </span>Courses
      </h1>

      <div className="our-courses-section">
        <div className="items-container">
          {courseData.map((course, index) => (
            <div className="home-course-card" key={index}>
              <img src={course.img} className="image" alt={course.title} />
              <p className="text">
                {course.duration} | {course.level}
              </p>
              {/*<p className="name">{course.author}</p> */}

              <h3 className="heading">{course.title}</h3>
              <p className="paragraph">{course.description}</p>
              <Link to={course.path} className="course-home-button">
                <span className="hover-underline-animation">Get it Now</span>
                <svg
                  viewBox="0 0 46 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                >
                  <path
                    transform="translate(30)"
                    d="M8,8L0,0V16Z"
                    fill="currentColor"
                  ></path>
                  <rect
                    height="2"
                    transform="translate(0 7)"
                    width="30"
                    fill="currentColor"
                  ></rect>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Learnmorebutton />
    </div>
  );
};

export default Courses;
