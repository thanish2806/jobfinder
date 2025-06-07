// components/ErrorPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/home">
        <button
          style={{
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          🏠 Go to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
