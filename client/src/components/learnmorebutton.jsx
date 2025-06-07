import React from 'react';
import { useNavigate } from 'react-router-dom';
import './learnmorebutton.css'; // Import the CSS file

const LearnMoreButton = () => {
  const navigate = useNavigate();

  const handleCourses = () => {
    navigate("/courses");
  };

  return (
    <div className='lets-learn-button'>
      <button className="cta" onClick={handleCourses}>
        <span>Let's learn</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      </button>
    </div>
  );
};

export default LearnMoreButton;
