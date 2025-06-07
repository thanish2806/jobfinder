import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import "./CodeEditor.css";
import ThemeToggle from "../components/ThemeToggle";
import ResetButton from "../components/ResetButton";
import FullScreenButton from "../components/FullScreen";

const CodeEditor = ({ onChange, onLanguageChange, code, language }) => {
  const [value, setValue] = useState(code);
  const [theme, setTheme] = useState("vs-dark");
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setValue(code);
  }, [code]);

  const handleEditorChange = (val) => {
    setValue(val);
    onChange(val);
  };

  const handleLangChange = (e) => {
    const selectedLang = e.target.value;
    onLanguageChange(selectedLang);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "vs-dark" ? "light" : "vs-dark"));
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  const getDefaultCode = (lang) => {
    switch (lang) {
      case "python":
        return "# Write your Python code here...";
      case "java":
        return (
          "public class Main {\n" +
          "  public static void main(String[] args) {\n" +
          "    // Write your code here\n" +
          "  }\n" +
          "}"
        );
      default:
        return "// Write your JavaScript code here...";
    }
  };

  const handleResetCode = () => {
    const defaultCode = getDefaultCode(language);
    setValue(defaultCode);
    onChange(defaultCode);
  };

  return (
    <div className={`editor-container ${isFullscreen ? "fullscreen" : ""}`}>
      <div className="editor-toolbar">
        <span className="code-editor-heading">{language.toUpperCase()}</span>
        <select
          className="editor-select"
          onChange={handleLangChange}
          value={language}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>

        <ThemeToggle isDark={theme === "vs-dark"} onToggle={toggleTheme} />

        <FullScreenButton
          onClick={toggleFullscreen}
          label={isFullscreen ? "🡼 Exit Fullscreen" : "🡾 Fullscreen"}
        />

        <ResetButton onClick={handleResetCode} />
      </div>

      <div className="editor-area">
        <Editor
          height="75vh"
          width="100%"
          language={language}
          value={value}
          onChange={handleEditorChange}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
