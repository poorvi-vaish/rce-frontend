import React from "react";

const Result = ({ output, loading }) => {
  return (
    <div>
      <h2>Output</h2>
      <h3>{loading && "Loading..."}</h3>
      <p>{output}</p>
    </div>
  );
};
// import Editor from "@monaco-editor/react";

// const Result = () => {
//   const editorRef = useRef(null);

//   function handleEditorDidMount(editor, monaco) {
//     editorRef.current = editor;
//   }

//   function showValue() {
//     alert(editorRef.current.getValue());
//   }

//   return (
//     <>
//       <button onClick={showValue}>Show value</button>
//       <Editor
//         height="90vh"
//         defaultLanguage="javascript"
//         defaultValue="// some comment"
//         onMount={handleEditorDidMount}
//       />
//     </>
//   );
// };

export default Result;
