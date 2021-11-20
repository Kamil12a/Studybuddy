import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useStyles } from "./universitySectionStyles";
import { useHistory } from "react-router-dom";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function UniversitySection() {
  let history = useHistory();
  const [myState, setMyState] = React.useState("");
  const [checked, setChecked] = React.useState([false, false]);
  const classes = useStyles();
  const FieldTofilled = ({ question, fill }) => (
    <div>
      <Grid className={classes.chooseAvatarAndName}>
        <Typography component="h1" variant="h5">
          {question}
        </Typography>
        <TextField
          className={classes.chooseName}
          label={fill}
          variant="outlined"
        />
      </Grid>
    </div>
  );
  const submitPersonForm = (e) => {
    e.preventDefault();
    history.push("/aboutYouForm");
  };
  const handleChange = (e) => {
    setMyState(e.target.value);
  };
  const handleChangeCheckbox = (e) => {
    if (e.target.value === "1") {
      setChecked([false, true]);
    } else {
      setChecked([true, false]);
    }
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item className={classes.image} />
      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <form onSubmit={submitPersonForm} className={classes.rightSide}>
            <Typography component="h5" variant="h3">
              Let's get to know each other better!
            </Typography>

            <div className={classes.oneLaneToFill}>
              <InputLabel>Select Your University</InputLabel>
              <Select
                className={classes.selectUniversity}
                value={myState}
                displayEmpty
                onChange={handleChange}
              >
                <MenuItem value="" disabled>
                  Select University
                </MenuItem>
                <MenuItem value={1}>University Of Gdańsk</MenuItem>
              </Select>
              <div className={classes.selectYourPosition}>
                <InputLabel>Select Your Position</InputLabel>
                <FormControlLabel
                  value={0}
                  checked={checked[0]}
                  onChange={handleChangeCheckbox}
                  className={classes.checkbox}
                  control={<Checkbox />}
                  label="Scientist"
                />
                <FormControlLabel
                  value={1}
                  checked={checked[1]}
                  onChange={handleChangeCheckbox}
                  control={<Checkbox />}
                  label="Student"
                />
              </div>
            </div>
            <div className={classes.oneLaneToFill}>
              <FieldTofilled question="Your department" fill={"Department"} />

              <FieldTofilled
                question="Field of study"
                fill={"Field of study"}
              />
            </div>
            <FieldTofilled
              question="Your specialization"
              fill={"Your specialization"}
            />
            <div className={classes.submitSection}>
              <Button
                type="submit"
                className={classes.submitButton}
                variant="contained"
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
// import React, { useEffect, useState } from 'react';

// import ControlledSelect from '../global/ControlledSelect';

// export const App = () => {
//     const [value, setValue] = useState('react'); // selected option
//     const options = [
//         {label: 'React',      value: 'react'},
//         {label: 'JavaScript', value: 'js'   },
//         {label: 'TypeScript', value: 'ts'   }
//     ];
//     const handleChange = (value) => {
//         setValue(value);
//     };
//     return (
//         <div>
//           <label>Technology:</label>
//           <ControlledSelect value={value} options={options} onChange={handleChange} />
//         </div>
//     );
// };

// export default App;