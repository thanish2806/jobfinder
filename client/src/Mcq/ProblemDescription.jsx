import React from "react";
import './ProblemDescription.css'

const ProblemDescription = ({ details }) => {
  return (
    <div className="problem-desc">
      <h2>{details.title}</h2>
      <p><strong>Difficulty:</strong> {details.difficulty}</p>
      <p>{details.description}</p>

      {details.examples?.map((ex, i) => (
        <div key={i} className="example">
          <p><strong>Input:</strong> {ex.input}</p>
          <p><strong>Output:</strong> {ex.output}</p>
          <p><strong>Explanation:</strong> {ex.explanation}</p>
        </div>
      ))}

      {details.constraints?.length > 0 && (
        <>
          <h3>Constraints:</h3>
          <ul>
            {details.constraints.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ProblemDescription;
