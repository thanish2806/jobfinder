import React from "react";
import "./UniqueLoader.css";

const UniqueLoader = ({ message = "Loading challenges..." }) => {
  return (
    <div className="unique-loader-container">
      <div className="quantum-loader">
        <div className="quantum-ring ring-outer"></div>
        <div className="quantum-ring ring-middle"></div>
        <div className="quantum-ring ring-inner"></div>
        <div className="quantum-dot"></div>
      </div>
      <p className="quantum-text">{message}</p>
    </div>
  );
};

export default UniqueLoader;
