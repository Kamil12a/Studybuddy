import { useState, useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useStyles } from "./universitySectionStyles";
import { useNavigate } from 'react-router-dom';
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LogoLook from "../global/LogoLook";
import { ThemeContext } from "../../context/UserContext"
import { useEffect } from "react";
export default function AboutYouForm() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState([false, false]);
  const [checked2, setChecked2] = useState([false, false]);
  const [experienveOfTeachingState, setExperienceOfTeachingState] = useState({})
  const classes = useStyles();
  const theme = useContext(ThemeContext)


  useEffect(() => {

  }, [])


  const submitPersonForm = (e) => {
    e.preventDefault();
    theme.setUserDataAccount(prevState => ({
      ...prevState,
      experienceOfTeaching: experienveOfTeachingState
    })
    )
    
    navigate("/forum");
  };

  const handleChangeCheckbox = (e) => {
    if (e.target.value === "1") {
      setChecked([false, true]);
      setExperienceOfTeachingState(prevState => ({ ...prevState, experienceOfTeaching: false }))

    } else {
      setChecked([true, false]);
      setExperienceOfTeachingState(prevState => ({ ...prevState, experienceOfTeaching: true }))
    }
  };
  const getAchievements = (e) => {
    setExperienceOfTeachingState(prevState => ({ ...prevState, achievements: e.target.value }))
  }
  const handleChangeCheckbox2 = (e) => {
    if (e.target.value === "1") {
      setChecked2([false, true]);
      setExperienceOfTeachingState(prevState => ({ ...prevState, failSubjecy: false }))
    } else {
      setChecked2([true, false]);
      setExperienceOfTeachingState(prevState => ({ ...prevState, failSubjecy: true }))
    }
  };
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

            <div className={classes.oneLaneToFill}>
              <div className={classes.selectYourPosition}>
                <InputLabel>
                  What would you like to achieve with this application?{" "}
                </InputLabel>

                <TextField
                  onChange={getAchievements}
                  style={{ marginLeft: "20px", width: "400px" }}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="achieve"
                  type="text"
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
                Create account
              </Button>
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
