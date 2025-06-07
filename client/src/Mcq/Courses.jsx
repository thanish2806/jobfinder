import { useNavigate } from "react-router-dom";
import "./Mcq.css";

function Courses(props) {
  const navigate = useNavigate();

  return (
    <div className="box">
      <div className="box-subcontainer">
        <img src={props.img} alt="img" />
        <h1>{props.name}</h1>
        <input
          type="button"
          value="Start Practice"
          onClick={() => navigate(`${props.name}`)}
        />
      </div>
    </div>
  );
}

export default Courses;
