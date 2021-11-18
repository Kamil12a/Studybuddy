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
import { useHistory } from "react-router-dom";

export default function PersonalDate() {
  let history = useHistory();

  const classes = useStyles();
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
  const FieldTofilled  = ({ question, fill }) => (
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
    const submitPersonForm=(e)=>{
      e.preventDefault()
      history.push("/universitySection");

    }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item className={classes.image} />
      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <form  onSubmit={submitPersonForm}className={classes.rightSide}>
            <Typography component="h1" variant="h3">
              Let's get to know each other better!
            </Typography>
            <div className={classes.oneLaneToFill}>
              <FieldTofilled question="Your name" fill={"Name"} />
              <FieldTofilled  question="Your surname" fill={"surname"} />
            </div>
            <div className={classes.oneLaneToFill}>
              <FieldTofilled  question="Your e-mail" fill={"email"} />
              <FieldTofilled  question="Your Password" fill={"password"} />
            </div>

            <AvatartIcon />
            <div className={classes.submitSection}>
              <Button type="submit" className={classes.submitButton} variant="contained">
                Next
              </Button>
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
