import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import Problem from "./Problem";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UniqueLoader from "../components/UniqueLoader";

const ProblemList = () => {
  const [problems, setProblems] = useState([]);
  const [submittedProblems, setSubmittedProblems] = useState(new Set());
  const [_user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ New loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
        fetchUserSubmissions(u.uid);
      } else {
        setUser(null);
        setLoading(false); // Even if user is null, loading must stop
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
          submittedSet.add(doc.id);
        }
      });
      setSubmittedProblems(submittedSet);
    } catch (err) {
      console.error("Error fetching user submissions:", err);
    } finally {
      setLoading(false); // ✅ Done loading submissions
    }
  };

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/problems`
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

  if (loading) {
    return (
      <div className="problemlist-page">
        <Navbar />
        <UniqueLoader message="Loading coding challenges..." />
        <Footer />
      </div>
    );
  }

  return (
    <div className="problemlist-page">
      <Navbar />
      <div className="problemlist-container">
        <h1 className="problemlist-title">Coding Playground</h1>
        <p className="problemlist-subtitle">
          Solve programming challenges, run custom test cases, and level up your skills.
        </p>
        <div className="problems-grid">
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
            <p className="no-problems">No problems found.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProblemList;
