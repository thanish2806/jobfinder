import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LazyImage from "../components/LazyImage";
import "./CoursesList.css";

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

const CoursesList = () => {
  const navigate = useNavigate();

  const courses = [
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

  const levels = [
    { no: 1, level: "Beginner" },
    { no: 2, level: "Intermediate" },
    { no: 3, level: "Hard" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <div className="mcq-courses-container">
      <div
        className={`mcq-sub-container-01 ${selectedCourse ? "blurred" : ""}`}
      >
        <div className="mcq-title-searchbar">
          <h1 className="mcq-title">
            MCQ
            <span className="title-latest"> Practice </span> Zone
          </h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="mcq-courses-grid">
          {filteredCourses.length === 0 ? (
            <p className="no-courses-found">No courses found.</p>
          ) : (
            filteredCourses.map((course, idx) => (
              <div className="mcq-course-card" key={idx}>
                <div className="course-img-container">
                  <LazyImage
                    src={course.img}
                    alt={course.name}
                    className="course-img"
                  />
                </div>
                <h2>{course.name}</h2>
                <button
                  onClick={() => {
                    if (course.name === "Problems") {
                      navigate("/mcq/problems");
                    } else {
                      setSelectedCourse(course);
                    }
                  }}
                >
                  Take Test
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {selectedCourse && (
        <>
          <div className="popup-backdrop" onClick={() => setSelectedCourse(null)} />
          <div className="popup">
            <h2>{selectedCourse.name} - Select Level</h2>
            <button
              className="close-btn"
              onClick={() => setSelectedCourse(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="popup-levels">
              {levels.map((level, index) => (
                <div key={index} className="quiz-level">
                  <button
                    onClick={() => navigate(`${selectedCourse.name}/${level.no}`)}
                  >
                    <span>{level.level} Level</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CoursesList;
