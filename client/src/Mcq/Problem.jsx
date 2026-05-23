import { useNavigate } from "react-router-dom";

function Problem({ id, title, difficulty, isCompleted }) {
  const navigate = useNavigate();
  const diffClass = difficulty ? difficulty.toLowerCase() : "easy";

  return (
    <div className={`problem-box ${isCompleted ? "completed" : ""}`}>
      <div className="problem-info">
        <h2 className="problem-title">
          {isCompleted && <span className="completed-check">✓</span>}
          {title}
        </h2>
        <div className="problem-meta">
          <span className={`difficulty-badge ${diffClass}`}>
            {difficulty || "Easy"}
          </span>
        </div>
      </div>
      <div className="problem-action">
        <button
          className={`problem-btn ${isCompleted ? "completed-btn" : ""}`}
          onClick={() => navigate(`${id}`)}
        >
          {isCompleted ? "Solved" : "Solve Challenge"}
        </button>
      </div>
    </div>
  );
}

export default Problem;
