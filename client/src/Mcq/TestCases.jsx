import React from "react";
import "./Workspace.css";

const TestCases = ({ testcases, handleCompile, output, processing }) => {
  return (
    <div className="testcase-wrapper">
      <h3>Test Cases</h3>
      {testcases?.map((tc, idx) => (
        <div key={idx} className="testcase-box">
          <p>
            <strong>Input:</strong> {tc.input}
          </p>
          <p>
            <strong>Expected Output:</strong> {tc.output}
          </p>
        </div>
      ))}
      <button onClick={handleCompile} disabled={processing}>
        {processing ? "Running..." : "Compile and Run"}
      </button>
      {output && (
        <div className="output-box">
          <strong>Output:</strong> {output}
        </div>
      )}
    </div>
  );
};

export default TestCases;
