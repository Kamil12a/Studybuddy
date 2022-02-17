import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./personalDateStyles";
import Button from "@material-ui/core/Button";
import { useNavigate } from 'react-router-dom';
import LogoLook from "../global/LogoLook";
import FieldTofilled from "../global/FieldTofilled";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/UserContext"

export default function PersonalDate() {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext)
  const classes = useStyles();
  const [personDateState, setPersonDateState] = useState({})
  const AvatartIcon = () => (
    <div className={classes.avatarIcon}>
      <div>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <Avatar
              src="https://www.w3schools.com/howto/img_avatar.png"
              className={classes.large}
            />
          </IconButton>
        </label>
      </div>

      <Typography component="h1" variant="h5">
        Choose Avatar
      </Typography>
    </div>
  );
  const submitPersonForm = (e) => {
    e.preventDefault();
    theme.setUserDataAccount(prevState => ({
      ...prevState,
      personDate: personDateState
    })
    )
    navigate("/universitySection");
  };
  const getName = (event) => {
    setPersonDateState(prevState => ({
      ...prevState,
      username: event.target.value
    }));
  }
  const getSurname = (event) => {
    setPersonDateState(prevState => ({
      ...prevState,
      surname: event.target.value
    }));
  }
  const getPassword = (event) => {
    setPersonDateState(prevState => ({
      ...prevState,
      password: event.target.value
    }));
  }
  const getEmail = (event) => {
    setPersonDateState(prevState => ({
      ...prevState,
      email: event.target.value
    }));
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <LogoLook />

      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <form onSubmit={submitPersonForm} className={classes.rightSide}>
            <Typography component="h1" variant="h3" className={classes.title}>
              Let's get to know each other better!
            </Typography>
            <div className={classes.oneLaneToFill}>
              <FieldTofilled functionOnChange={getName} question="Name" fill={"Name"} />
              <FieldTofilled functionOnChange={getSurname} question="Surname" fill={"surname"} />
            </div>
            <div className={classes.oneLaneToFill}>
              <FieldTofilled functionOnChange={getEmail} question="E-mail" fill={"email"} />
              <div className={classes.oneLaneToFillPassword}>
                <Typography className={classes.password} component="h1" variant="h5">
                  password
                </Typography>
                <TextField
                  inputProps={{
                    autoComplete: 'new-password',
                    form: {
                      autocomplete: 'off',
                    },
                  }}
                  onChange={getPassword}
                  variant="outlined"
                  type="password"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="password"
                  id="password"
                  autoComplete="current-password"
                />
              </div>
            </div>

            <AvatartIcon />
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
