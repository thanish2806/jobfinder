import React from "react";
import './jobfilters.css'
const JobFilters = ({
  query,
  setQuery,
  selectedRole,
  setSelectedRole,
  location,
  setLocation,
  remote,
  setRemote,
  uniqueRoles,
  uniqueLocations,
  fetchJobs,
  showMobileFilters,
  setShowMobileFilters,
}) => {
  return (
    <div className="jobfilters-wrapper">
      <button
        className="mobile-filter-toggle"
        onClick={() => setShowMobileFilters(!showMobileFilters)}
      >
        {showMobileFilters ? "View Jobs ✖" : "Show Filters ☰"}
      </button>
      <button className="refresh-btn-mobile" onClick={fetchJobs}>
        ⟳
      </button>

      <div className={`joblist-filters ${showMobileFilters ? "show" : ""}`}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search skills, company"
          className="joblist-search"
        />
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="joblist-select"
        >
          <option value="All">All Roles</option>
          {uniqueRoles.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="joblist-select"
        >
          <option value="All">All Locations</option>
          {uniqueLocations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        <select
          value={remote}
          onChange={(e) => setRemote(e.target.value)}
          className="joblist-select"
        >
          <option value="All">All</option>
          <option value="Yes">Remote</option>
          <option value="No">On-site</option>
        </select>
        <button className="refresh-btn-pc" onClick={fetchJobs}>
          <img width="30" height="30" src="/Refresh.png" alt="refresh icon" />
        </button>
      </div>
    </div>
  );
};

export default JobFilters;
