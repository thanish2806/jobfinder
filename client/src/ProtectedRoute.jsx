import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);
  const [shouldVerify, setShouldVerify] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setIsAllowed(false);
        setLoading(false);
        return;
      }

      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        const firestoreVerified = snap.exists() && snap.data().emailVerified;

        if (user.emailVerified && firestoreVerified) {
          setIsAllowed(true);
        } else {
          setShouldVerify(true);
        }
      } catch (err) {
        console.error("Error in ProtectedRoute:", err);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div style={{ padding: 20 }}>Checking auth...</div>;
  if (shouldVerify) return <Navigate to="/verify" />;
  if (!isAllowed) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
