import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./personalDateStyles";

export default function PersonalDate() {
  const classes = useStyles();
  const MadeWithLove = () => (
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
      <Typography component="h1" variant="h5">
        Choose Avatar
      </Typography>
      _
    </div>
  );
  const YourName = ({question,fill}) => (
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

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Grid container className={classes.rightSide}>
            <Typography component="h1" variant="h3">
              Let's get to know each other better!
            </Typography>
            <YourName  question="Your Full Name" fill={"Full Name"}/>
            <YourName  question="Your Full Name" fill={"Full Name"}/>
            <YourName  question="Your Full Name" fill={"Full Name"}/>
            <YourName  question="Your Full Name" fill={"Full Name"}/>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
