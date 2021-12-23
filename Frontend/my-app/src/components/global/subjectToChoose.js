import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  chooseSubject: {
    width: "40%",
  },
  textFieldSection: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    justifyContent: "center",
  },
  submitButton: {
    textAlign: "center",
    height: "50px",
    width: "170px",
    marginTop: "20px",
    background: theme.palette.primary.main,
  },
}));

export default function SubjectToChoose() {
  const classes = useStyles();
  const [generalState, setGeneralState] = React.useState("");
  const [topicState, setTopicState] = React.useState("");

  const handleChange = (e) => {
    if (e.target.name === "general") {
      setGeneralState(e.target.value);
    } else {
      setTopicState(e.target.value);
    }
  };
  return (
    <>
   
          <div className={classes.textFieldSection}>
            <InputLabel>
              Choose the general field of science that interests you
            </InputLabel>
            <Select
              name="general"
              onChange={handleChange}
              value={generalState}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Subject
              </MenuItem>
              <MenuItem value={1}>Math</MenuItem>
              <MenuItem value={2}>English</MenuItem>

              <MenuItem value={3}>Philosophy</MenuItem>

              <MenuItem value={4}>Physics</MenuItem>
            </Select>
          </div>
          <div className={classes.textFieldSection}>
            <InputLabel>
              What topic in this field are you interested in?
            </InputLabel>
            <Select
              name="topic"
              onChange={handleChange}
              value={topicState}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Subject
              </MenuItem>
              <MenuItem value={1}>Mathematical analysis</MenuItem>
              <MenuItem value={2}>Algebra Linear</MenuItem>

              <MenuItem value={3}>Probability</MenuItem>

              <MenuItem value={4}>Discrete Mathematic</MenuItem>
            </Select>
          </div>
 
    </>
  );
}
