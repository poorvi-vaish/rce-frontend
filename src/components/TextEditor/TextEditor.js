import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";
import { SAMPLE_CODE } from "../../data/sampleCode";

const TextEditor = ({ language, codeChange }) => {
  useEffect(() => {
    codeChange(SAMPLE_CODE[language]);
  }, [language, codeChange]);

  return (
    <div style={{ border: "2px solid black" }}>
      <Editor
        height="50vh"
        theme="vs-dark"
        defaultLanguage="javascript, cpp, python"
        language={language}
        value={SAMPLE_CODE[language]}
        onChange={codeChange}
      />
    </div>
  );
};
export default TextEditor;
