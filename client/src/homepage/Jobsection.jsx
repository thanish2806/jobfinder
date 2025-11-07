import React, { useEffect, useState } from "react";
import "./Jobsection.css";
import GetPlacedButton from "../components/Getplacedbuton";
import axios from "axios";

function Jobsection() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchJobs = async () => {
      try {
             const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/jobs`, {
        params: {
          query: "developer", // default search keyword
          location: "india", // or any default location
          page: 1,
          date_posted: "all",
        },
      });

      const jobList = res.data?.jobs || [];
      setJobs(jobList.slice(0, 6)); // 👈 show only first 6 on homepage
      } catch (err) {
        console.error("❌ Error fetching jobs:", err);
        setError("Failed to load jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="jobsection-container">
      <h1 className="jobsection-title">
        Find your
        <span className="title-latest"> new job </span> today
      </h1>
      <p className="jobsection-subtitle">
        Discover the Right Job for You — Tailored to Your Skills and Goals.
      </p>

      <div className="joblist-container">
        {loading && <p className="joblist-empty">Loading jobs...</p>}
        {error && <p className="joblist-error">{error}</p>}

        {!loading && !error && jobs.length === 0 && (
          <p className="joblist-empty">No jobs available.</p>
        )}

        {!loading && !error && jobs.length > 0 && (
          <div className="joblist-card-container">
            {jobs.map((job, index) => (
              <div key={index} className="joblist-card">
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
                  className="joblist-link"
                >
                  View Job
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      <GetPlacedButton />
    </div>
  );
}

export default Jobsection;
