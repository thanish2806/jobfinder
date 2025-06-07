import React from "react";
import "./GoBackButton.css";
import { Navigate, useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const navigate = useNavigate();

  const Gobackbtn = () => {
    navigate("/mcq");
  };
  return (
    <button className="go-backbutton" onClick={Gobackbtn}>
      Go Back
    </button>
  );
};

export default GoBackButton;
