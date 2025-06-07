import React, { useEffect, useState } from "react";
import axios from "axios";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import "./RecommendedJobs.css";

const skillToRolesMap = {
  react: ["Frontend Developer", "Full Stack Developer"],
  "react.js": ["Frontend Developer", "Full Stack Developer"],
  javascript: ["Frontend Developer", "Full Stack Developer"],
  node: ["Backend Developer", "Full Stack Developer"],
  python: ["Data Scientist", "Backend Developer"],
  java: ["Java Developer", "Backend Developer"],
  html: ["Frontend Developer"],
  css: ["Frontend Developer"],
  mongodb: ["Full Stack Developer", "Backend Developer"],
  sql: ["Data Analyst", "Backend Developer"],
  aws: ["Cloud Engineer", "DevOps Engineer"],
  docker: ["DevOps Engineer"],
  figma: ["UI/UX Designer"],
  typescript: ["Frontend Developer", "Full Stack Developer"],
  vue: ["Frontend Developer"],
  angular: ["Frontend Developer"],
};

const RecommendedJobs = () => {
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userSkills, setUserSkills] = useState([]);

  // Step 1: Fetch user skills from Firestore
  useEffect(() => {
    const fetchUserSkills = () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          const skills = userDoc.exists() ? userDoc.data().skills || [] : [];
          setUserSkills(skills.map((s) => s.toLowerCase()));
        } else {
          setLoading(false);
        }
      });
    };

    fetchUserSkills();
  }, []);

  // Step 2: Match skills to job roles and fetch jobs
  useEffect(() => {
    const fetchRecommendedJobs = async () => {
      if (!userSkills.length) return;

      const matchedRoles = new Set();
      userSkills.forEach((skill) => {
        const roles = skillToRolesMap[skill];
        if (roles) roles.forEach((r) => matchedRoles.add(r));
      });

      if (matchedRoles.size === 0) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("/api/jobs", {
          params: {
            query: Array.from(matchedRoles).join(","),
            location: "remote",
            skills: userSkills.join(","),
          },
        });

        // Simulate 2-second loader
        setTimeout(() => {
          setRecommendedJobs(res.data.jobs || []);
          setLoading(false);
        }, 2000);
      } catch (err) {
        console.error("❌ Failed to fetch recommended jobs:", err.message);
        setLoading(false);
      }
    };

    fetchRecommendedJobs();
  }, [userSkills]);

  return (
    <div className="job-notifications-container">
      <h2>Jobs Based on Your Skills</h2>

      {loading ? (
        <div className="loader-container">
          <div className="spinner" />
          <p>Loading recommendations...</p>
        </div>
      ) : recommendedJobs.length === 0 ? (
        <p className="no-jobs-msg">
          No matching jobs found for your current skills.
        </p>
      ) : (
        <div className="job-card-scroll-area">
          {recommendedJobs.map((job, index) => (
            <div className="job-notification-card" key={index}>
              <h3>{job.title}</h3>
              <p>
                <strong>Company:</strong> {job.company_name}
              </p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Remote:</strong> {job.remote ? "Yes" : "No"}
              </p>

              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="animated-button"
              >
                <span className="circle1"></span>
                <span className="circle2"></span>
                <span className="circle3"></span>
                <span className="circle4"></span>
                <span className="circle5"></span>
                <span className="text">View Job</span>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendedJobs;
