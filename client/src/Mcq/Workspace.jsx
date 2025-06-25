import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import ProblemDescription from "./ProblemDescription";
import CodeEditor from "./CodeEditor";
import Navbar from "../components/Navbar";
import { motion as Motion } from "framer-motion";
import "./Workspace.css";
import Footer from "../components/Footer";

const Workspace = () => {
  const { id: problemId } = useParams();
  const [user, setUser] = useState(null);
  const [details, setDetails] = useState({});
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [processing, setProcessing] = useState(false);
  const [output, setOutput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedCode, setSubmittedCode] = useState("");

  const languageMap = {
    javascript: 63,
    python: 71,
    java: 62,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    async function fetchProblem() {
      try {
        const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

        const res = await axios.get(`${BACKEND_URL}/problem/${problemId}`);

        setDetails(res.data);

        if (!user) return;

        const userDoc = doc(db, "users", user.uid, "problems", problemId);
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setLanguage(data.language || "javascript");
          setCode(data.code || getDefaultCode(data.language || "javascript"));
          setIsSubmitted(data.isSubmitted || false);
          setSubmittedCode(data.submittedCode || "");
        } else {
          setLanguage("javascript");
          setCode(getDefaultCode("javascript"));
        }
      } catch (err) {
        console.error("Error fetching problem:", err);
        toast.error("Failed to fetch problem details!");
      }
    }

    if (problemId) fetchProblem();
  }, [problemId, user]);

  useEffect(() => {
    if (!user || !problemId) return;
    const ref = doc(db, "users", user.uid, "problems", problemId);
    setDoc(ref, { code }, { merge: true }).catch(console.error);
  }, [code, user, problemId]);

  useEffect(() => {
    if (!user || !problemId) return;
    const ref = doc(db, "users", user.uid, "problems", problemId);
    setDoc(ref, { language }, { merge: true }).catch(console.error);
  }, [language, user, problemId]);

  const handleCompile = async () => {
    if (!code.trim()) return toast.error("Code is empty.");
    setProcessing(true);
    setOutput("");

    const input = details?.testcases?.[0]?.input || "";
    const expectedOutput = details?.testcases?.[0]?.output || "";

    const formData = {
      language_id: languageMap[language],
      source_code: btoa(code),
      stdin: btoa(input),
      expected_output: btoa(expectedOutput),
    };

    try {
      const response = await axios.post(
        import.meta.env.VITE_RAPID_API_URL,
        formData,
        {
          params: { base64_encoded: "true", wait: "false", fields: "*" },
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
            "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
          },
        }
      );
      checkStatus(response.data.token);
    } catch (err) {
      console.error("Compilation failed:", err);
      setOutput("⚠️ Compilation request failed.");
      setProcessing(false);
    }
  };

  const checkStatus = async (token) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_RAPID_API_URL}/${token}`,
        {
          params: { base64_encoded: "true", fields: "*" },
          headers: {
            "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
            "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
          },
        }
      );

      if (res.data.status?.id <= 2)
        return setTimeout(() => checkStatus(token), 2000);

      const resultOutput = atob(res.data.stdout || "").trim();
      const compileError = atob(res.data.compile_output || "").trim();
      const runtimeError = atob(res.data.stderr || "").trim();
      const expected = details?.testcases?.[0]?.output?.trim() || "";

      if (compileError) setOutput(`🔴 Compilation Error:\n${compileError}`);
      else if (runtimeError) setOutput(`🟠 Runtime Error:\n${runtimeError}`);
      else {
        setOutput(resultOutput);
        if (resultOutput === expected) {
          toast.success("✅ Test case passed!");
          setIsSubmitted(true);
          setSubmittedCode(code);
          const problemRef = doc(db, "users", user.uid, "problems", problemId);
          const solutionRef = doc(db, "solutions", user.uid);
          await setDoc(
            problemRef,
            { isSubmitted: true, submittedCode: code },
            { merge: true }
          );
          await setDoc(
            solutionRef,
            { [problemId]: { code, submittedAt: new Date().toISOString() } },
            { merge: true }
          );
        } else
          setOutput(
            `❌ Wrong Output:\nYour Output: ${resultOutput}\nExpected: ${expected}`
          );
      }
      setProcessing(false);
    } catch (err) {
      console.error("Error checking result:", err);
      setOutput("⚠️ Error while checking result.");
      setProcessing(false);
    }
  };

  const getDefaultCode = (lang) => {
    switch (lang) {
      case "python":
        return "# Write your code here...";
      case "java":
        return `// Write your code here...\npublic class Main {\n  public static void main(String[] args) {\n    // your code\n  }\n}`;
      default:
        return "// Write your code here...";
    }
  };

  const handleLanguageChange = (selectedLang) => {
    if (selectedLang === language) return;
    setLanguage(selectedLang);
    setCode(getDefaultCode(selectedLang));
  };

  return (
    <div className="lc-workspace">
      {user && <Navbar user={user} />}
      <div className="lc-workspace__main">
        <Motion.div
          className="lc-workspace__problem"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <ProblemDescription details={details} />
          {details.testcases?.[0] && (
            <div className="lc-testcase">
              <h4 className="lc-testcase__title">Test Case</h4>
              <div className="lc-testcase__content">
                <p>
                  <strong>Input:</strong> {details.testcases[0].input}
                </p>
                <p>
                  <strong>Expected Output:</strong>{" "}
                  {details.testcases[0].output}
                </p>
              </div>
            </div>
          )}
          <button
            className="lc-btn lc-btn--primary"
            onClick={handleCompile}
            disabled={processing || isSubmitted}
          >
            {processing ? "Running..." : "Compile & Run"}
          </button>
          {output && (
            <div className="lc-output">
              <h4>Output</h4>
              <pre>{output}</pre>
            </div>
          )}
          {isSubmitted && (
            <p className="lc-submitted-msg">Code Submitted Successfully!</p>
          )}
        </Motion.div>

        <Motion.div
          className="lc-workspace__editor"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <CodeEditor
            onChange={(val) => setCode(val)}
            onLanguageChange={handleLanguageChange}
            code={code}
            language={language}
          />
          {submittedCode && (
            <div className="lc-submitted-code">
              <h4>Submitted Code</h4>
              <pre>{submittedCode}</pre>
            </div>
          )}
        </Motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Workspace;
