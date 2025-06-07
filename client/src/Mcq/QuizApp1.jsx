import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Mcq.css";

// Images
import os from "../assets/os.jpg";
import cn from "../assets/cn.jpg";
import dbms from "../assets/dbms.jpg.jpg";
import oops from "../assets/oops.png";
import react from "../assets/react.png";
import python from "../assets/python.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import css from "../assets/css.png";
import express from "../assets/express.png";
import java from "../assets/java.png";
import MongoDB from "../assets/mongodb.png";
import ai from "../assets/ai.jpg";
import ml from "../assets/ml.jpg";
import problems from "../assets/problems.webp";

function CoursesList() {
  const navigate = useNavigate();

  const list = [
    { img: problems, name: "Problems" },
    { img: os, name: "OS" },
    { img: cn, name: "CN" },
    { img: dbms, name: "DBMS" },
    { img: oops, name: "OOPS" },
    { img: react, name: "React" },
    { img: express, name: "Express" },
    { img: MongoDB, name: "MongoDB" },
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "JS" },
    { img: python, name: "Python" },
    { img: ai, name: "AI" },
    { img: ml, name: "ML" },
    { img: java, name: "Java" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const levels = [
    { no: 1, level: "Beginner" },
    { no: 2, level: "Intermediate" },
    { no: 3, level: "Hard" },
  ];

  const openPopup = (course) => {
    setSelectedCourse(course);
  };

  const closePopup = () => {
    setSelectedCourse(null);
  };

  const filteredCourses = list.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <>
      <div
        className={`course-subcontainer ${
          selectedCourse ? "blurred-background" : ""
        }`}
      >
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {filteredCourses.length === 0 ? (
          <p>It's not present</p>
        ) : (
          filteredCourses.map((course, index) => (
            <div className="box" key={index}>
              <div className="box-subcontainer">
                <img src={course.img} alt={course.name} />
                <h1>{course.name}</h1>
                <input
                  type="button"
                  value="Start Learning"
                  onClick={() => openPopup(course)}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Popup */}
      {selectedCourse && (
        <>
          <div className="lesson-overlay" onClick={closePopup}></div>
          <div className="lesson-popup">
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            <h2 className="popup-title">
              {selectedCourse.name} - Select Level
            </h2>

            {levels.map((level, index) => (
              <div className="quizbox" key={index}>
                <h2>{level.level} Level</h2>
                <input
                  type="button"
                  value="Start Quiz"
                  onClick={() =>
                    navigate(`mcq/${selectedCourse.name}/${level.no}`)
                  }
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default CoursesList;
