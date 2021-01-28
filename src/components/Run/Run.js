import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    textColor: "green",
    "& > *": {
      margin: theme.spacing(2),
      minWidth: 120,
    },
  },
}));

export default function ContainedButtons({
  code,
  language,
  setResult,
  onLoading,
}) {
  const classes = useStyles();
  const executeCode = () => {
    onLoading(true);
    fetch(`http://rce.manish.codes/${getRoute(language)}`, {
      method: "POST",
      body: JSON.stringify({ code }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        onLoading(false);
        console.log(data);
        setResult(data.output);
      });
  };

  return (
    <div className={classes.root} style={{ marginTop: "2px" }}>
      <Button variant="contained" onClick={executeCode}>
        RUN
      </Button>
    </div>
  );
}

const getRoute = (language) => {
  switch (language) {
    case "cpp":
      return "execCpp";
    case "javascript":
      return "execNode";
    case "python":
      return "execPython";
    default:
      return "";
  }
};
