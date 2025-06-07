import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./signup.css"; // Uses the style you provided

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
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-left">
          <img src="/programming.png" alt="Signup Visual" />
        </div>

        <div className="signup-form-container">
          <h2>Create an Account</h2>
          <p>Sign up to get started.</p>

          {error && <div className="signup-error">{error}</div>}

          <form onSubmit={handleSignup}>
            <label>Email</label>
            <input
              type="email"
              className="signup-input"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              className="signup-input"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              className="signup-input"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="signup-submit-btn"
              disabled={loading}
            >
              {loading ? "Creating..." : "Sign Up"}
            </button>

            <p className="signup-bottom-link">
              Already have an account? <a href="/login">Log In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
