import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./LoginSignupSliderButton.css";

function LoginSignupSlider() {
  const [hovered, setHovered] = useState(null); // "login" | "signup" | null
  const location = useLocation();

  // Determine active route button
  const activeButton = location.pathname === "/login" ? "login" : "signup";

  return (
    <div className="login-signup-container">
      {/* Slider */}
      <div className={`slider-box ${hovered || activeButton}`}></div>

      {/* Login button */}
      <div
        className="login-butten-container"
        onMouseEnter={() => setHovered("login")}
        onMouseLeave={() => setHovered(null)}
      >
        <Link to="/login" className="my-link">
          Login
        </Link>
      </div>

      {/* Signup button */}
      <div
        className="signup-butten-container"
        onMouseEnter={() => setHovered("signup")}
        onMouseLeave={() => setHovered(null)}
      >
        <Link to="/signup" className="my-link">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default LoginSignupSlider;
