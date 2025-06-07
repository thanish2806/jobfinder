import "./UserResume.css";
import { useNavigate } from "react-router-dom";

const UserQuiz = () => {
  const navigate = useNavigate();

  const Myresume = () => {
    navigate("/resume-builder/my-resumes");
  };
  return (
    <div className="quiz-header">
      <h2 className="user-course-title">My Resumes</h2>
      <button className="quiz-viewall-button" onClick={Myresume}>View All</button>
    </div>
  );
};

export default UserQuiz;
