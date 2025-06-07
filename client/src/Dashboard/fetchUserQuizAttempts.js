import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // adjust path if needed

export const fetchUserQuizAttempts = async (userId) => {
  try {
    const attemptsRef = collection(db, "users", userId, "quizAttempts");
    const snapshot = await getDocs(attemptsRef);
    const data = snapshot.docs.map((doc) => doc.data());
    return data;
  } catch (error) {
    console.error("Error fetching quiz attempts:", error);
    return [];
  }
};
