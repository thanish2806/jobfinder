import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function HeroSection() {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("Charm");

  useEffect(() => {
    const fetchDisplayName = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        try {
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setDisplayName(data.displayName || currentUser.displayName || "Charm");
          } else {
            setDisplayName(currentUser.displayName || "Charm");
          }
        } catch (error) {
          console.error("Error fetching displayName:", error);
          setDisplayName(currentUser.displayName || "Charm");
        }
      }
    };

    fetchDisplayName();
  }, []);

  const handlemscq = () => {
    navigate("/mcq");
  };

  const handlejobs = () => {
    navigate("/jobs");
  };

  return (
    <section className="hero">
      <h1 className="main-title-1">
        Hello, <span>{displayName}</span>
      </h1>

      <div className="hero-content">
        <h1 className="hero-title">
          Empower Your Career with AI-Powered Learning & Job Discovery
        </h1>
        <p className="hero-sub-title">
          Learn in-demand skills, practice with quizzes, and land your dream job.
        </p>
        <div className="hero-buttons">
          <button className="btn primary" onClick={handlemscq}>
            Get Started
          </button>
          <button className="btn secondary" onClick={handlejobs}>
            Browse Jobs
          </button>
        </div>
      </div>
      <img
        className="hero-img"
        src="/hero-illustration.png"
        alt="Learning Illustration"
      />
    </section>
  );
}

export default HeroSection;
