import React from "react";
import "./Jobsection.css";
import GetPlacedButton from "../components/Getplacedbuton";
function Jobsection() {
  return (
    <div className="jobsection-container">
        <h1 className="jobsection-title">
          Find your
          <span className="title-latest"> new job </span> today
        </h1>
        <p className="jobsection-subtitle">
          Discover the Right Job for You — Tailored to Your Skills and Goals.{" "}
      </p>
      
        <GetPlacedButton />
    </div>
  );
}

export default Jobsection;
