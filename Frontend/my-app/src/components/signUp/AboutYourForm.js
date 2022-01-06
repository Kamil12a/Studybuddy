import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useStyles } from "./universitySectionStyles";
import { useHistory } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LogoLook from "../global/LogoLook";
import FieldTofilled from "../global/FieldTofilled";
export default function AboutYouForm() {
  let history = useHistory();
  const [checked, setChecked] = React.useState([false, false]);
  const [checked1, setChecked1] = React.useState([false, false]);
  const [checked2, setChecked2] = React.useState([false, false]);
  const [drench, setdrench] = React.useState(false);
  const classes = useStyles();
  

  const submitPersonForm = (e) => {
    e.preventDefault();
    history.push("/forum");
  };

  const handleChangeCheckbox = (e) => {
    if (e.target.value === "1") {
      setChecked([false, true]);
    } else {
      setChecked([true, false]);
    }
  };
  const handleChangeCheckbox1 = (e) => {
    if (e.target.value === "1") {
      setChecked1([false, true]);
    } else {
      setChecked1([true, false]);
    }
  };
  const handleChangeCheckbox2 = (e) => {
    if (e.target.value === "1") {
      setChecked2([false, true]);
      setdrench(false);
    } else {
      setChecked2([true, false]);
      setdrench(true);
    }
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
    
      <LogoLook/>
      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <form onSubmit={submitPersonForm} className={classes.rightSide}>
            <Typography className={classes.title}  component="h5" variant="h3">
              Let's get to know each other better!
            </Typography>

            <div className={classes.oneLaneToFill}>
              <div className={classes.selectYourPosition}>
                <InputLabel>
                  Do you have experience in giving tutoring / teaching?
                </InputLabel>
                <FormControlLabel
                  value={0}
                  checked={checked[0]}
                  onChange={handleChangeCheckbox}
                  className={classes.checkbox}
                  control={<Checkbox />}
                  label="Yes"
                />
                <FormControlLabel
                  value={1}
                  checked={checked[1]}
                  onChange={handleChangeCheckbox}
                  control={<Checkbox />}
                  label="No"
                />
              </div>
            </div>
            <div className={classes.oneLaneToFill}>
              <div className={classes.selectYourPosition}>
                <InputLabel>
                  Have you ever failed any subject during your studies?
                </InputLabel>
                <FormControlLabel
                  value={0}
                  checked={checked2[0]}
                  onChange={handleChangeCheckbox2}
                  className={classes.checkbox}
                  control={<Checkbox />}
                  label="Yes"
                />
                <FormControlLabel
                  value={1}
                  checked={checked2[1]}
                  onChange={handleChangeCheckbox2}
                  control={<Checkbox />}
                  label="No"
                />
              </div>
            </div>
            {drench && (
              <>
                <FieldTofilled
                  question={"What subject"}
                  fill={"What subject"}
                />
              </>
            )}
            <div className={classes.oneLaneToFill}>
              <div className={classes.selectYourPosition}>
                <InputLabel>
                  What would you like to achieve with this application?{" "}
                </InputLabel>

                <TextField
                  style={{ marginLeft: "20px", width: "400px" }}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="achieve"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </div>
            </div>
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
