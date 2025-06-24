import { useEffect, useState } from "react";
import { auth, db } from "../firebase"; // 🔄 Import Firebase
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import Problem from "./Problem";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProblemList = () => {
  const [problems, setProblems] = useState([]);
  const [submittedProblems, setSubmittedProblems] = useState(new Set()); // ✅ Store submitted IDs
  const [_user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
        fetchUserSubmissions(u.uid);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUserSubmissions = async (uid) => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "users", uid, "problems")
      );
      const submittedSet = new Set();
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.isSubmitted) {
          submittedSet.add(doc.id); // doc.id = problemId
        }
      });
      setSubmittedProblems(submittedSet);
    } catch (err) {
      console.error("Error fetching user submissions:", err);
    }
  };

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/problems`
        );

        const data = await response.json();
        if (Array.isArray(data.data)) {
          setProblems(data.data);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching problems:", error);
      }
    };

    fetchProblems();
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>All Problems</h1>
        {problems.length > 0 ? (
          problems.map((problem) => (
            <Problem
              key={problem.id}
              id={problem.id}
              title={problem.title}
              difficulty={problem.difficulty}
              category={problem.category}
              isCompleted={submittedProblems.has(problem.id)}
            />
          ))
        ) : (
          <p>No problems found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProblemList;
