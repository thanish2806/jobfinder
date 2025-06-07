import React from "react";
import './ProblemDescription.css'
const ProblemDescription = ({ details }) => {
  return (
    <div className="problem-desc">
      <h2>{details.title}</h2>
      <p>
        <strong>Difficulty:</strong> {details.difficult}
      </p>
      <p>{details.description}</p>
      {details.examples?.map((ex, i) => (
        <div key={i} className="example">
          <p>
            <strong>Input:</strong> {ex.input}
          </p>
          <p>
            <strong>Output:</strong> {ex.output}
          </p>
          <p>
            <strong>Explanation:</strong> {ex.explanation}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProblemDescription;
