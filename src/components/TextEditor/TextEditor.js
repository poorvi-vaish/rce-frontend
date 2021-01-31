import React from "react";
import Editor from "@monaco-editor/react";

const TextEditor = ({ language, codeChange }) => {
  // loader.config({
  //   paths: {
  //     vs: "...",
  //   },
  //   "vs/nls": {
  //     availableLanguages: {
  //       "*": "de",
  //     },
  //   },
  // });
  return (
    <div style={{ border: "2px solid black" }}>
      <Editor
        height="50vh"
        theme="vs-dark"
        defaultLanguage="javascript, cpp, python"
        language={language}
        defaultValue="//Enter your code here"
        onChange={codeChange}
      />
    </div>
  );
};
export default TextEditor;
