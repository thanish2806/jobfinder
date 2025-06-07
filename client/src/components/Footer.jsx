import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo + Back to top */}
        <div className="footer-top">
          <img src="/logo.png" alt="Skill Nest Logo" className="footer-logo" />
          <button onClick={scrollToTop} className="back-to-top">
            Skill Nest
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <a href="/jobs">Jobs</a>
          <a href="/resume">Resume</a>
          <a href="/mcq">MCQ</a>
          <a href="/">Home</a>
        </nav>

        {/* Copyright & Links
        
        <div className="footer-bottom">
          <span>© 2022 Brand, Inc.</span>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>*/}
        

        {/* Social Icons 
        
        <div className="footer-socials">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src="/group1.svg" alt="Twitter" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src="/group0.svg" alt="Facebook" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src="/group3.svg" alt="LinkedIn" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img src="/group2.svg" alt="YouTube" />
          </a>
        </div>*/}
        
      </div>
    </footer>
  );
};

export default Footer;
