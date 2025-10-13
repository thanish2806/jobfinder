/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./Joblist.css";
import Footer from "./components/Footer";
import JobFilters from "./components/JobFilters";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import RecommendedJobs from "./Dashboard/RecommendedJobs";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("All");
  const [remote, setRemote] = useState("All");
  const [selectedRole, setSelectedRole] = useState("All");
  const [datePosted, setDatePosted] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const jobsPerPage = 8;
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const fetchJobs = useCallback(async () => {
  setLoading(true);
  setError("");

  try {
    const params = {
      query: query || "developer",
      location: location !== "All" ? location : "chicago",
      page: currentPage,
      country: "us",
      date_posted: datePosted,
    };

    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/jobs`,
      { params }
    );

    const jobList = res.data?.jobs || [];
    const total = res.data?.total || jobList.length;

    setJobs(jobList);
    setFilteredJobs(jobList);
    setTotalResults(total);
  } catch (err) {
    console.error("❌ Error fetching jobs:", err.message);
    setError("Failed to fetch jobs. Please try again later.");
  } finally {
    setLoading(false);
  }
}, [query, location, currentPage, datePosted]); // ✅ include query

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  useEffect(() => {
    let filtered = [...jobs];

    if (query) {
      filtered = filtered.filter(
        (job) =>
          job.title?.toLowerCase().includes(query.toLowerCase()) ||
          job.company_name?.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedRole !== "All") {
      filtered = filtered.filter(
        (job) => job.title?.toLowerCase() === selectedRole.toLowerCase()
      );
    }

    if (location !== "All") {
      filtered = filtered.filter((job) =>
        job.location?.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (remote !== "All") {
      const isRemote = remote === "Yes";
      filtered = filtered.filter((job) => job.remote === isRemote);
    }

    setFilteredJobs(filtered);
  }, [query, location, remote, selectedRole, jobs]);

  const uniqueLocations = Array.from(
    new Set(jobs.map((job) => job.location).filter(Boolean))
  );

  const uniqueRoles = Array.from(
    new Set(jobs.map((job) => job.title).filter(Boolean))
  );

  const totalPages = Math.ceil(totalResults / jobsPerPage);

  return (
    <div>
      <Navbar />

      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="joblist-container">
            {/* Title Section */}
            <div className="title-filters">
              <h1 className="joblist-title">
                Find your <span className="title-latest"> new job </span> today
              </h1>
              <h1 className="sub-title">
                Thousands of jobs in the computer, engineering and technology
                sectors are waiting for you.
              </h1>
            </div>

            {/* 3 Column Layout */}
            <div className="joblist-three-column">
              {/* Left Filters */}
              <div className="joblist-column left">
                <JobFilters
                  query={query}
                  setQuery={setQuery}
                  selectedRole={selectedRole}
                  setSelectedRole={setSelectedRole}
                  location={location}
                  setLocation={setLocation}
                  remote={remote}
                  setRemote={setRemote}
                  datePosted={datePosted}
                  setDatePosted={setDatePosted}
                  uniqueRoles={uniqueRoles}
                  uniqueLocations={uniqueLocations}
                  fetchJobs={fetchJobs}
                  showMobileFilters={showMobileFilters}
                  setShowMobileFilters={setShowMobileFilters}
                />
              </div>

              {/* Middle Job List - Scrollable */}
              <div className="joblist-column middle">
                {filteredJobs.length === 0 ? (
                  <p className="joblist-empty">No jobs found.</p>
                ) : (
                  <div className="joblist-grid">
                    {filteredJobs.map((job, index) => (
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

              {/* Right Recommended Jobs */}
              <div className="joblist-column right">
                <div className="job-notifications-container joblist">
                  <RecommendedJobs />
                </div>
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    className={`page-button ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer below all content */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default JobList;
