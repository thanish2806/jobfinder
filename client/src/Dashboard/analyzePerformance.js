// XP calculation logic based on level - extended to 10 levels
const getXP = (level = 1, correctAnswers = 0) => {
  const xpPerLevel = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (xpPerLevel[level - 1] || 10) * correctAnswers;
};

// Main performance analyzer
export const analyzePerformance = (attempts = []) => {
  if (!Array.isArray(attempts) || !attempts.length) return null;

  const total = attempts.length;
  const totalScore = attempts.reduce((sum, a) => sum + Number(a.score || 0), 0);
  const totalQuestions = attempts.reduce(
    (sum, a) => sum + Number(a.totalQuestions || 0),
    0
  );
  const avgPercentage = totalQuestions
    ? ((totalScore / totalQuestions) * 100).toFixed(2)
    : "0.00";
  const highestScore = Math.max(
    ...attempts.map((a) => Number(a.highestScore || a.score || 0)),
    0
  );

  let totalXP = 0;
  const domainStats = {};

  for (const a of attempts) {
    const domain = a.domain || "Unknown";
    const level = Number(a.level || 1);
    const score = Number(a.score || 0);
    const totalQ = Number(a.totalQuestions || 0);

    totalXP += getXP(level, score);

    if (!domainStats[domain]) {
      domainStats[domain] = { totalScore: 0, totalQuestions: 0 };
    }
    domainStats[domain].totalScore += score;
    domainStats[domain].totalQuestions += totalQ;
  }

  const domainPerformance = Object.entries(domainStats).map(
    ([domain, data]) => ({
      domain,
      averagePercentage: data.totalQuestions
        ? ((data.totalScore / data.totalQuestions) * 100).toFixed(2)
        : "0.00",
    })
  );

  return {
    totalAttempts: total,
    avgPercentage,
    highestScore,
    domainPerformance,
    totalXP,
  };
};
