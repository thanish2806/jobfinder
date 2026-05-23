import React, { useState, useEffect } from "react";
import Courseslist from "./Courseslist";
import Navbar from "../components/Navbar";
import "./Mcq.css";
import Loader from "../components/Loader"; // <-- Import Loader
import Footer from "../components/Footer";

const Mcq = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or replace this with actual data fetching logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds loader, adjust as needed

    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader />;
  return (
    <div className="mcq-main-container">
      <Navbar />
      <Courseslist />
      <Footer />
    </div>
  );
};

export default Mcq;
