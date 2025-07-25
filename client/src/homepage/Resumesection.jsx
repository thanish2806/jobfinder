import LetscreateButton from "../components/letscreateone-button";
import "./Resumesection.css";

function Resumesection() {
  return (
    <div className="resume-containter">
      <div className="square">
        <h1 className="resume-title">
          Build a Job Winnning <span className="span-resume">Resume</span>
        </h1>
        <p className="resume-subtitle">
          Replace your old resume in a few simple clicks. Our builder gives
          recruiters what they want.{" "}
        </p>
        <div className="resume-templates">
          <img src="/template1.png" alt="template" />
          <img src="/template2.png" alt="template" />
          <img src="/template3.png" alt="template" />
        </div>
        <LetscreateButton />
      </div>
    </div>
  );
}

export default Resumesection;
