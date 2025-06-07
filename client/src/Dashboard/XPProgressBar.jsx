import React, { useEffect, useState } from "react";
import "./XPProgressBar.css";

const LEVELS = 10;
const MAX_XP = 2500;
const XP_PER_LEVEL = MAX_XP / LEVELS;

const getLevel = (xp) => Math.min(LEVELS, Math.floor(xp / XP_PER_LEVEL) + 1);

const getRank = (level) => {
  if (level <= 2) return { name: "Bronze", icon: "🥉" };
  if (level <= 4) return { name: "Silver", icon: "🥈" };
  if (level <= 6) return { name: "Gold", icon: "🥇" };
  if (level <= 8) return { name: "Platinum", icon: "💠" };
  return { name: "Diamond", icon: "💎" };
};

const XPProgressBar = ({ totalXP }) => {
  const level = getLevel(totalXP);
  const { name, icon } = getRank(level);

  const currentLevelXP = (level - 1) * XP_PER_LEVEL;
  const nextLevelXP = level * XP_PER_LEVEL;
  const xpProgress = totalXP - currentLevelXP;
  const xpRequired = nextLevelXP - currentLevelXP;
  const rawPercentage = ((xpProgress / xpRequired) * 100).toFixed(2);

  const [fillPercentage, setFillPercentage] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFillPercentage(rawPercentage);
    }, 100);
    return () => clearTimeout(timeout);
  }, [rawPercentage]);

  return (
    <div className="xp-bar-container">
      <div className="xp-header">
        <h3>Level {level}</h3>
        <div className="xp-rank">
          <span className="rank-icon">{icon}</span>
          <span className="rank-name">{name}</span>
        </div>
      </div>

      <div className="xp-bar-background">
        <div
          className="xp-bar-fill animate-bar"
          style={{ "--fill-width": `${fillPercentage}%` }}
        ></div>
      </div>

      <div className="xp-label">
        {Math.floor(xpProgress)} XP / {Math.floor(xpRequired)} XP to next level
      </div>
    </div>
  );
};

export default XPProgressBar;
