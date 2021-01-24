import React from "react";
import Editor from "@monaco-editor/react";

const TextEditor = () => {
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
        defaultValue="//Enter your code here"
      />
    </div>
  );
};
export default TextEditor;
