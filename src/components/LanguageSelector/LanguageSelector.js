import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  root: {
    textColor: "green",
    "& > *": {
      margin: theme.spacing(2),
      minWidth: 120,
    },
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Language
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            label="Language"
          >
            {/* <MenuItem value="">
                    <em>None</em>
                </MenuItem> */}
            <MenuItem value={"C++"}>CPP</MenuItem>
            <MenuItem value={"JS"}>JavaScript</MenuItem>
            <MenuItem value={"Py"}>Python</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.root} style={{ marginTop: "2px" }}>
        <Button variant="contained">RUN</Button>
      </div>
    </div>
  );
}
