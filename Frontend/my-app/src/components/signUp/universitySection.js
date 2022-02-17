import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useStyles } from "./universitySectionStyles";
import { useNavigate } from 'react-router-dom';
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FieldTofilled from "../global/FieldTofilled";
import LogoLook from "../global/LogoLook";
import { ThemeContext } from "../../context/UserContext"
import { useContext, useState } from "react";

export default function UniversitySection() {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState([false, false]);
  const [universityInfoState, setUniversityInfoState] = useState({})
  const classes = useStyles();
  const theme = useContext(ThemeContext)
  const submitPersonForm = (e) => {
    e.preventDefault();
    theme.setUserDataAccount(prevState => ({
      ...prevState,
      universityDate: universityInfoState
    })
    )
    navigate("/aboutYouForm");
  };
  const handleChange = (e) => {
    setUniversityInfoState(prevState => ({ ...prevState, university: e.target.value }))

  };
  const handleChangeCheckbox = (e) => {
    if (e.target.value === "1") {
      setChecked([false, true]);
      setUniversityInfoState(prevState => ({ ...prevState, position: "Student" }))

    } else {
      setChecked([true, false]);
      setUniversityInfoState(prevState => ({ ...prevState, position: "Scientist" }))

    }
  };
  const getDepartment = (e) => {
    setUniversityInfoState(prevState => ({ ...prevState, department: e.target.value }))
  }
  const getField = (e) => {
    setUniversityInfoState(prevState => ({ ...prevState, field: e.target.value }))

  }
  const getSpecialization = (e) => {
    setUniversityInfoState(prevState => ({ ...prevState, specialization: e.target.value }))
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <LogoLook />
      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <form onSubmit={submitPersonForm} className={classes.rightSide}>
            <Typography className={classes.title} component="h5" variant="h3">
              Let's get to know each other better!
            </Typography>

            <div className={classes.oneLaneToFill}>
              <InputLabel className={classes.selectUrUniversity}>Select Your University</InputLabel>
              <Select
                className={classes.selectUniversity}
                value={universityInfoState.university}
                displayEmpty
                onChange={handleChange}
              >
                <MenuItem value="" disabled>
                  Select University
                </MenuItem>
                <MenuItem name="University" value={"University of Gdańsk"}>University Of Gdańsk</MenuItem>
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
              <FieldTofilled functionOnChange={getDepartment} question="Your department" fill={"Department"} />

              <FieldTofilled
                functionOnChange={getField}
                question="Field of study"
                fill={"Field of study"}
              />
            </div>
            <FieldTofilled
              functionOnChange={getSpecialization}
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

