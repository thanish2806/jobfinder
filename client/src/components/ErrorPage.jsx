import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh", 
      textAlign: 'center', 
      padding: '2rem',
      backgroundColor: "#f8fafc",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      <h1 style={{ fontSize: "6rem", margin: 0, color: "#636ae8" }}>404</h1>
      <h2 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "1rem" }}>Page Not Found</h2>
      <p style={{ fontSize: "1.1rem", color: "#475569", maxWidth: "480px", marginBottom: "2rem" }}>
        Oops! The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
      </p>
      <Link
        to="/home"
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '16px',
          backgroundColor: '#636ae8',
          color: 'white',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          textDecoration: "none",
          fontWeight: 600,
          boxShadow: "0 4px 6px rgba(99, 106, 232, 0.2)",
          transition: "all 0.2s ease"
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
