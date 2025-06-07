import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import image from "../assets/loading-loading-forever.gif";
import { useParams } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import "./Quizque.css";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import GoBackButton from "../components/GoBackButton";

import {
  collection,
  addDoc,
  getDocs
} from "firebase/firestore";
import { auth, db } from "../firebase";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function Quizque() {
  const [count, setCount] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [showExplain, setShowExplain] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);

  const { course, id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/mcq/${course}/quiz/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setQuestions(shuffled);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [course, id]);

  const totalQuestions = questions.length;
  const wrongAnswers = totalQuestions - score;
  const percentage =
    totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  const saveQuizAttempt = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const userId = user.uid;
    const quizId = `${course}-${id}`;
    const attemptsRef = collection(db, "users", userId, "quizAttempts");

    try {
      // Fetch all previous attempts for this quiz to determine highest score
      const snapshot = await getDocs(attemptsRef);
      let highestScore = score;

      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.quizId === quizId && data.highestScore > highestScore) {
          highestScore = data.highestScore;
        }
      });

      const newAttempt = {
        quizId,
        domain: course.toUpperCase(),
        highestScore: Math.max(score, highestScore),
        level: "1",
        percentage,
        score,
        timestamp: new Date(),
        totalQuestions,
      };

      await addDoc(attemptsRef, newAttempt);
      console.log("Quiz attempt saved!");
    } catch (error) {
      console.error("Error saving quiz attempt:", error);
    }
  };

  const handleAnswer = (option) => {
    if (showExplain) return;

    setSelectedOption(option);
    setShowExplain(true);

    if (option === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
      setFeedback("Correct Answer");
    } else {
      setFeedback("Wrong Answer");
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setCount((prev) => prev + 1);
      setShowExplain(false);
      setSelectedOption(null);
      setFeedback(null);
    } else {
      setShowResult(true);
      const resultPercentage = (score / questions.length) * 100;

      if (resultPercentage <= 35) {
        setStatusMessage("Must study");
      } else if (resultPercentage <= 75) {
        setStatusMessage("Good Job, keep trying");
      } else {
        setStatusMessage("Congrats, keep it up!");
      }

      saveQuizAttempt(); // Save to Firestore
    }
  };

  const pieData = {
    labels: ["Correct", "Wrong"],
    datasets: [
      {
        data: [score, wrongAnswers],
        backgroundColor: ["#4CAF50", "#F44336"],
        hoverOffset: 4,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce(
            (a, b) => a + b,
            0
          );
          const percentage = ((value / total) * 100).toFixed(1) + "%";
          return percentage;
        },
        color: "#fff",
        font: {
          weight: "bold",
          size: 16,
        },
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <Motion.div
      className="quizque-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Motion.div
        className="quizque-box"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {showResult ? (
          <Motion.div
            className="quizque-result-box"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
          >
            <h2 className="quizque-result">Quiz Completed!</h2>
            <p>Thank you for participating.</p>

            <div className="quizque-result-layout">
              <div className="quizque-chart-container">
                <Pie data={pieData} options={pieOptions} />
              </div>

              <div className="quizque-scorecard">
                <p><b>Total Questions:</b> {totalQuestions}</p>
                <p><b>Correct Answers:</b> {score}</p>
                <p><b>Wrong Answers:</b> {wrongAnswers}</p>
                <p><b>Percentage:</b> {percentage}%</p>
                <p><b>Performance:</b> {statusMessage}</p>
              </div>

              <div className="quizque-return-home-container">
                <GoBackButton />
              </div>
            </div>
          </Motion.div>
        ) : questions.length > 0 ? (
          <>
            <Motion.h3 initial={{ x: -10 }} animate={{ x: 0 }}>
              {count}/{questions.length}
            </Motion.h3>
            <Motion.h2
              className="quizque-question"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
            >
              {questions[currentQuestion].question}
            </Motion.h2>

            {questions[currentQuestion].options.map((option, index) => {
              let buttonClass = "quizque-option-btn";
              if (showExplain) {
                if (option === questions[currentQuestion].answer) {
                  buttonClass += " quizque-correct";
                } else if (option === selectedOption) {
                  buttonClass += " quizque-wrong";
                } else {
                  buttonClass += " quizque-disabled";
                }
              }

              return (
                <Motion.button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={buttonClass}
                  disabled={showExplain}
                  whileTap={{ scale: 0.95 }}
                >
                  {option}
                </Motion.button>
              );
            })}

            {showExplain && (
              <Motion.div
                className="quizque-feedback"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p
                  className={
                    feedback === "Correct Answer"
                      ? "quizque-text-green"
                      : "quizque-text-red"
                  }
                >
                  {feedback}
                </p>
                <p className="quizque-explanation">
                  <strong>Explanation:</strong>{" "}
                  {questions[currentQuestion].explanation}
                </p>
                <button onClick={handleNext} className="quizque-next-btn">
                  Next
                </button>
              </Motion.div>
            )}
          </>
        ) : (
          <Motion.img
            src={image}
            alt="loading"
            width="100px"
            className="quizque-loading-img"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}
      </Motion.div>
    </Motion.div>
  );
}

export default Quizque;
