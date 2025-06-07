import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (user.emailVerified) {
          navigate("/home");
        } else {
          alert("Please verify your email before logging in.");
          await signOut(auth);
          navigate("/signup");
        }
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user.emailVerified) {
        navigate("/home");
      } else {
        setError("Please verify your email before logging in.");
        await signOut(auth);
        navigate("/signup");
      }
    } catch (error) {
      console.error("Google login error:", error.code);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;

      if (user.emailVerified) {
        navigate("/home");
      } else {
        setError("Please verify your email before logging in.");
        await signOut(auth);
        navigate("/signup");
      }
    } catch (error) {
      console.error("Login error:", error.code);
      setError(getFriendlyErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email to reset password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Please check your inbox.");
      setError("");
    } catch (error) {
      console.error("Password reset error:", error.code);
      setError(getFriendlyErrorMessage(error.code));
    }
  };

  const getFriendlyErrorMessage = (code) => {
    switch (code) {
      case "auth/user-not-found":
        return "No account found with this email. Please sign up first.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/invalid-email":
        return "Invalid email format.";
      case "auth/network-request-failed":
        return "Network error. Please try again later.";
      case "auth/invalid-credential":
        return "Please check your email and password.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  };

  return (
    <div className="login-container">
      <div className="auth-box">
        <img src="/programming.png" alt="Visual" />
        <div className="form-container">
          <h2>Login to Your Account</h2>
          <p>Welcome back! Please enter your details.</p>

          {error && <div className="auth-error">{error}</div>}
          {message && <div className="auth-success">{message}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <label>Email</label>
            <input
              className="login-form-input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              className="login-form-input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <p
              className="forgot-password"
              onClick={handleForgotPassword}
              style={{ cursor: "pointer", color: "#636ae8", marginTop: "5px" }}
            >
              Forgot Password?
            </p>

            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <button
              type="button"
              className="google-btn"
              onClick={handleGoogleLogin}
              disabled={loading}
            >
              <img
                src="https://img.icons8.com/color/24/000000/google-logo.png"
                alt="Google"
              />
              {loading ? "Please wait..." : "Login with Google"}
            </button>

            <p className="auth-footer">
              Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
