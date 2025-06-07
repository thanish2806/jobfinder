import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import image from "./loading-loading-forever.gif";
import Navbar from "../components/Navbar";

const ProblemPage = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/problems/${id}`)
      .then((res) => setProblem(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!problem) return <img src={image} alt="loading" />;

  return (
    <div>
      <Navbar />
      <h1>{problem.title}</h1>
      <p>
        <strong>Difficulty:</strong> {problem.difficulty}
      </p>
      <p>
        <strong>Category:</strong> {problem.category}
      </p>
      <p>
        <strong>Description:</strong>
      </p>
      <p>{problem.description}</p>

      <h3>Examples:</h3>
      <ul>
        {problem.examples.map((ex, index) => (
          <li key={index}>
            <strong>Input:</strong> {ex.input} | <strong>Output:</strong>{" "}
            {ex.output}
          </li>
        ))}
      </ul>

      <h3>Constraints:</h3>
      <ul>
        {problem.constraints.map((constraint, index) => (
          <li key={index}>{constraint}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemPage;
