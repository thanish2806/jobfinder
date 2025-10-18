import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import Herosectionbgshape from "../assets/Images/hero-illustration.png";
import Navbar from "../components/Navbar";
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
            setDisplayName(
              data.displayName || currentUser.displayName || "Charm"
            );
          } else {
            setDisplayName(currentUser.displayName || "Charm");
          }
        } catch (error) {
          console.error("Error fetching displayName:", error);
          setDisplayName(currentUser.displayName || "Buddy");
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
      <Navbar />
      <div className="hero-section-bg"></div>
      <div className="hero-content">
        <div className="title-01">
          <div className="hero-thumbnail">
            <h1 className="main-title-1">
              Welcome,<span className="title-explore">{" "}{displayName}</span>
            </h1>
          </div>
        </div>
        <div className="hero-title">
          <h1><span className="title-explore">Unlock</span> Your Creative{" "}
          <span className="title-explore">Potential.</span></h1>
        </div>
        <div className="title-02">
          <p className="hero-sub-title">
            Learn in-demand skills, practice with quizzes, and land your dream
            job.
          </p>
        </div>
      </div>

      <div className="hero-buttons">
        <button className="hero-btn primary" onClick={handlemscq}>
          Get Started
        </button>
        <button className="hero-btn secondary" onClick={handlejobs}>
          Browse Jobs
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
