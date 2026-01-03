import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";
import "./GlobalRanking.css";
import { Navigate, useNavigate } from "react-router-dom";

const getRankInfo = (level = 1) => {
  if (level <= 2) return { name: "Bronze", icon: "🥉" };
  if (level <= 4) return { name: "Silver", icon: "🥈" };
  if (level <= 6) return { name: "Gold", icon: "🥇" };
  if (level <= 8) return { name: "Platinum", icon: "💠" };
  return { name: "Diamond", icon: "💎" };
};

const GlobalRanking = () => {
  const navigate = useNavigate();

  const handlequiz = () => {
    navigate("/MCQ");
  };
  const [rankingData, setRankingData] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    setCurrentUserId(user?.uid || null);

    const fetchUsers = async () => {
      try {
        const snapshot = await getDocs(collection(db, "users"));
        const users = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const ranked = users
          .filter((u) => typeof u.totalXP === "number")
          .sort((a, b) => b.totalXP - a.totalXP);

        setRankingData(ranked);
      } catch (err) {
        console.error("Error loading global ranking:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="ranking-main">
      <div className="ranking-container">
        <h2>Global Leaderboard</h2>
        <div className="rank-table">
            <table className="ranking-table">
              <thead>
                <tr>
                  <th className="th-">#</th>
                  <th>Rank</th>
                  <th>User</th>
                  <th>Level</th>
                  <th>XP</th>
                </tr>
              </thead>
              <tbody>
                {rankingData.map((user, index) => {
                  const level = user.level || 1;
                  const { icon } = getRankInfo(level);
                  const isCurrentUser = user.id === currentUserId;
                  return (
                    <tr
                      key={user.id}
                      className={isCurrentUser ? "highlight" : ""}
                    >
                      <td>{index + 1}</td>
                      <td>{icon}</td>
                      <td>{user.displayName || "Anonymous"}</td>
                      <td>{level}</td>
                      <td>{user.totalXP}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
      </div>

      <button className="test-yourself" onClick={handlequiz}>
        Test Yourself
      </button>
    </div>
  );
};

export default GlobalRanking;
