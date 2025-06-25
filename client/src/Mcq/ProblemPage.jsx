import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import image from "./loading-loading-forever.gif";
import Navbar from "../components/Navbar";

const ProblemPage = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [error, setError] = useState("");

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/problems/${id}`)
      .then((res) => setProblem(res.data))
      .catch((err) => {
        console.error(err);
        setError("Failed to load problem data.");
      });
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!problem) return <img src={image} alt="loading" />;

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
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
          {problem.examples?.map((ex, index) => (
            <li key={index}>
              <strong>Input:</strong> {ex.input} |{" "}
              <strong>Output:</strong> {ex.output}
              {ex.explanation && (
                <>
                  {" "}
                  | <strong>Explanation:</strong> {ex.explanation}
                </>
              )}
            </li>
          ))}
        </ul>

        <h3>Constraints:</h3>
        <ul>
          {problem.constraints?.map((constraint, index) => (
            <li key={index}>{constraint}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProblemPage;
