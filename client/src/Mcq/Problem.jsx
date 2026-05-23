import { useNavigate } from "react-router-dom";

function Problem({ id, title, difficulty, isCompleted }) {
  const navigate = useNavigate();

  return (
    <div className="problem-box">
      <h2>{title}</h2>
      <br />
      <p>
        Difficulty: <b>{difficulty}</b>
      </p>
      <input
        type="button"
        value={isCompleted ? "Completed" : "Solve Problem"}
        onClick={() => navigate(`${id}`)}
        // optional: disable button if completed
        style={{
          backgroundColor: isCompleted ? "#a4dda4" : "",
          color: isCompleted ? "black" : "",
        }}
      />
    </div>
  );
}

export default Problem;
