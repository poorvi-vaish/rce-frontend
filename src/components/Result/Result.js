import React from "react";
import "./Result.css";

const Result = ({ output, loading, isError }) => {
  const calcHeight = (value) => {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    let newHeight = 20 + numberOfLineBreaks * 20 + 30 + 2;
    return newHeight;
  };

  return (
    <div className="result-container">
      <h2>Output</h2>
      <h3>{loading && "Loading..."}</h3>
      {output && (
        <textarea
          className={isError ? "error" : "success"}
          value={output}
          style={{ height: calcHeight(output) }}
          disabled
        />
      )}
    </div>
  );
};

export default Result;
