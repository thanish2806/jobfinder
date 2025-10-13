import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css"; // Uses the style you provided
import loginimg from "./assets/Images/Login-img.webp";
import LoginSignupSlider from "./LoginSignUpSliderButton";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await sendEmailVerification(user);
      alert(
        "A verification email has been sent. Please verify before logging in."
      );

      navigate("/login");
    } catch (error) {
      const getErrorMessage = (code) => {
        switch (code) {
          case "auth/email-already-in-use":
            return "This email is already registered.";
          case "auth/invalid-email":
            return "Invalid email address.";
          case "auth/weak-password":
            return "Password should be at least 6 characters.";
          default:
            return "Something went wrong. Please try again.";
        }
      };
      setError(getErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-section">
      <div className="signup-container">
        <div className="signup-image-conatiner">
          <img
            className="loginimg"
            src={loginimg}
            alt="img-illustration"
            draggable
          />
          <h1 className="welcome-note">Welcome, Buddy</h1>
        </div>

        <div className="signup-form-container">
          <LoginSignupSlider />

          {error && <div className="signup-error">{error}</div>}

          <form onSubmit={handleSignup} className="signup-form">
            <label>Email</label>
            <input
              type="email"
              className="signup-form-input"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              className="signup-form-input"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              className="signup-form-input"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="signup-button"
              disabled={loading}
            >
              {loading ? "Creating..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
