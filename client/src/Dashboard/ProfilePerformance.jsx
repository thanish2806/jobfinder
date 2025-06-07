import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import "./ProfilePerformance.css";

import XPProgressBar from "./XPProgressBar";
import RecommendedJobs from "./RecommendedJobs";
import SubLoader from "../components/SubLoader";

// XP scale by level
const xpPerLevel = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const getXP = (level = 1, correctAnswers = 0) => {
  const xp = xpPerLevel[level - 1] || 10;
  return xp * correctAnswers;
};

// Analyze quiz attempts
function analyzePerformance(attempts) {
  if (!attempts.length) return null;

  const total = attempts.length;
  const totalScore = attempts.reduce((sum, a) => sum + a.score, 0);
  const totalQuestions = attempts.reduce((sum, a) => sum + a.totalQuestions, 0);
  const avgPercentage = totalQuestions
    ? ((totalScore / totalQuestions) * 100).toFixed(2)
    : 0;
  const highestScore = Math.max(
    ...attempts.map((a) => a.highestScore || a.score),
    0
  );

  let totalXP = 0;
  const domainStats = {};

  for (const a of attempts) {
    const level = a.level || 1;
    const score = a.score || 0;
    totalXP += getXP(level, score);

    const domain = a.domain || "Unknown";
    if (!domainStats[domain]) {
      domainStats[domain] = { totalScore: 0, totalQuestions: 0 };
    }
    domainStats[domain].totalScore += score;
    domainStats[domain].totalQuestions += a.totalQuestions;
  }

  const domainPerformance = Object.entries(domainStats).map(
    ([domain, data]) => ({
      domain,
      averagePercentage: (
        (data.totalScore / data.totalQuestions) *
        100
      ).toFixed(2),
    })
  );

  return {
    totalAttempts: total,
    totalScore,
    totalQuestions,
    avgPercentage,
    highestScore,
    domainPerformance,
    totalXP,
  };
}

// Analyze problems by language
function analyzeSubmittedProblems(data) {
  if (!data.length) return null;

  const languageMap = {};
  data.forEach((item) => {
    const lang = item.language || "Unknown";
    languageMap[lang] = (languageMap[lang] || 0) + 1;
  });

  const total = data.length;
  const languageStats = Object.entries(languageMap).map(
    ([language, count]) => ({
      language,
      count,
      percentage: ((count / total) * 100).toFixed(2),
    })
  );

  return {
    totalCompleted: total,
    languageStats,
  };
}

// Firestore fetch helpers
async function fetchUserQuizAttempts(userId) {
  try {
    const attemptsRef = collection(db, "users", userId, "quizAttempts");
    const snapshot = await getDocs(attemptsRef);
    return snapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error("Error fetching quiz attempts:", error);
    return [];
  }
}

async function fetchSubmittedProblems(userId) {
  try {
    const problemsRef = collection(db, "users", userId, "problems");
    const snapshot = await getDocs(problemsRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching submitted problems:", error);
    return [];
  }
}

async function fetchTotalProblems() {
  try {
    const response = await fetch("http://localhost:5000/stats/totalProblems");
    const data = await response.json();
    return data.total;
  } catch (error) {
    console.error("Error fetching total problems:", error);
    return 0;
  }
}

async function fetchTotalQuizQuestions() {
  try {
    const response = await fetch(
      "http://localhost:5000/stats/totalQuizQuestions"
    );
    const data = await response.json();
    return data.totalQuizQuestions;
  } catch (error) {
    console.error("Error fetching total quiz questions:", error);
    return 0;
  }
}

const ProfilePerformance = () => {
  const [user, setUser] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [problemStats, setProblemStats] = useState(null);
  const [totalProblems, setTotalProblems] = useState(0);
  const [totalQuizQuestions, setTotalQuizQuestions] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const docRef = doc(db, "users", firebaseUser.uid);
          const docSnap = await getDoc(docRef);
          const userData = docSnap.exists() ? docSnap.data() : {};

          setUser({
            ...firebaseUser,
            displayName: userData.displayName || firebaseUser.displayName,
          });

          const attempts = await fetchUserQuizAttempts(firebaseUser.uid);
          const analyzed = analyzePerformance(attempts || []);
          setPerformance(analyzed || { totalScore: 0, totalXP: 0, domainPerformance: [] });

          if (analyzed) {
            await setDoc(
              doc(db, "users", firebaseUser.uid),
              {
                totalXP: analyzed.totalXP,
                level: Math.floor(analyzed.totalXP / 250) + 1,
              },
              { merge: true }
            );
          }

          const submittedProblems = await fetchSubmittedProblems(firebaseUser.uid);
          setProblemStats(analyzeSubmittedProblems(submittedProblems || []) || {
            totalCompleted: 0,
            languageStats: [],
          });

          const total = await fetchTotalProblems();
          const quizTotal = await fetchTotalQuizQuestions();

          setTotalProblems(total);
          setTotalQuizQuestions(quizTotal);
        } catch (error) {
          console.error("Error loading user data:", error);
        }
      } else {
        setUser(null);
        setPerformance(null);
        setProblemStats(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const problemCompletion = totalProblems
    ? ((problemStats?.totalCompleted || 0) / totalProblems) * 100
    : 0;

  const quizCompletion = totalQuizQuestions
    ? ((performance?.totalScore || 0) / totalQuizQuestions) * 100
    : 0;

  if (loading)
    return (
      <div className="profileperformance-container">
        <div className="loader-wrapper">
          <SubLoader />
        </div>
      </div>
    );

  if (!user) return <p className="loading">Please reload.</p>;

  return (
    <div className="profileperformance-container">
      <div className="username-overallscore">
        <XPProgressBar totalXP={performance?.totalXP || 0} />
      </div>
      <div className="profile-container">
        {/* Quiz Performance */}
        <div className="quiz-container">
          <div className="circle-progress">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path
                className="circle-bg"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray={`${quizCompletion.toFixed(1)}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">
                {quizCompletion.toFixed(1)}%
              </text>
            </svg>
            <div className="text-quiz-acore">
              <h1 className="text-submission">
                {performance.totalScore || 0} / {totalQuizQuestions}
              </h1>
              <h1 className="text-below">Answered Quizes</h1>
            </div>
          </div>

          <div className="quiz-domain-conatiner">
            {performance.domainPerformance?.length > 0 ? (
              performance.domainPerformance.map(
                ({ domain, averagePercentage }, index) => {
                  const colors = ["#00bcd4", "#ffc107", "#f44336", "#4caf50"];
                  return (
                    <div className="domain-box" key={index}>
                      <span
                        className="dot"
                        style={{
                          backgroundColor: colors[index % colors.length],
                        }}
                      ></span>
                      <span className="domain-label">{domain}</span>
                      <span className="domain-count">
                        {averagePercentage}%
                      </span>
                    </div>
                  );
                }
              )
            ) : (
              <p className="no-data-text">No quiz data available yet.</p>
            )}
          </div>
        </div>

        {/* Problem Submission Performance */}
        <div className="program-container">
          <div className="circle-progress">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path
                className="circle-bg"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray={`${problemCompletion.toFixed(1)}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">
                {problemCompletion.toFixed(1)}%
              </text>
            </svg>
            <div className="text-quiz-acore">
              <h1 className="text-submission">
                {problemStats?.totalCompleted || 0} / {totalProblems}
              </h1>
              <h1 className="text-below">Problems Solved</h1>
            </div>
          </div>
          <div className="quiz-domain-conatiner">
            {problemStats.languageStats?.length > 0 ? (
              problemStats.languageStats.map(
                ({ language, count, percentage }, index) => {
                  const colors = ["#3f51b5", "#ff9800", "#e91e63", "#4caf50"];
                  return (
                    <div className="domain-box" key={index}>
                      <span
                        className="dot"
                        style={{
                          backgroundColor: colors[index % colors.length],
                        }}
                      ></span>
                      <span className="domain-label">{language}</span>
                      <span className="domain-count">
                        {percentage}% ({count})
                      </span>
                    </div>
                  );
                }
              )
            ) : (
              <p className="no-data-text">No problems solved yet.</p>
            )}
          </div>
        </div>
      </div>
      <div className="job-notifications-container profileperformance">
        <RecommendedJobs />
      </div>
    </div>
  );
};

export default ProfilePerformance;
