import React, { useState, useEffect } from "react";
import Courseslist from "./Courseslist";
import Navbar from "../components/Navbar";
import "./Mcq.css";
import Loader from "../components/Loader"; // <-- Import Loader
import Footer from "../components/Footer";

const Mcq = () => {
  return (
    <div className="mcq-main-container">
      <Navbar />
      <Courseslist />
      <Footer />
    </div>
  );
};

export default Mcq;
