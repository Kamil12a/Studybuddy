import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "100px",
    padding: "40px",
    width: "550px",
    [theme.breakpoints.down(780)]: {
      marginTop: "40px",
      padding: "40px",
      width:"70%",
    },
  },

  informatiomAboutUser: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "50px",
    gap: "20px",
    marginTop: "10px",
    [theme.breakpoints.down(780)]: {
      fontSize:"1em"
    },
  },
  informationAboutPost: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    [theme.breakpoints.down(780)]: {
      marginTop:"5px",
      fontSize:"1em"
    },
  },
  textContent: {
    marginTop: "10px",
    textAlign: "justify",
    [theme.breakpoints.down(780)]: {
      fontSize:"1em",
      marginTop:"5px"
    },
  },
  submitButton: {
    textAlign: "center",
    background: theme.palette.primary.main,
    [theme.breakpoints.down(780)]: {
      fontSize:"0.8em"
    },
  },

  ifnormationRight: {
    background: theme.palette.primary.main,
    padding: "10px",
    borderRadius: "20px",
    [theme.breakpoints.down(780)]: {
      fontSize:"0.8em"
    },
  },
  submitButtonSection: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
  },
  choosePlace:{
    [theme.breakpoints.down(780)]: {
      fontSize:"1.2em"
    },
  },
  title:{
    [theme.breakpoints.down(780)]: {
      fontSize:"1.7em"
      ,textAlign:"center"
    },
  }
}));

export default function Groups({
  idOfButton,
  groupEvent,
  btnText,
  title,
  question,
  amountOfPatripitian,
}) {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={6}>
        <div className={classes.informatiomAboutUser}>
          <Typography  className={classes.choosePlace} component="h1" variant="h5">
            {amountOfPatripitian} participants
          </Typography>
          <Typography
            className={classes.ifnormationRight}
            component="h1"
            variant="h6"
          >
            12.12.2021
          </Typography>
        </div>
        <div className={classes.informatiomAboutUser}>
          <Typography className={classes.choosePlace}  component="h1" variant="h5">
            Online/At campus
          </Typography>
          <Typography
            className={classes.ifnormationRight}
            component="h1"
            variant="h6"
          >
            20 zł
          </Typography>
        </div>
        <div className={classes.informationAboutPost}>
          <Typography className={classes.title} component="h1" variant="h4">
            {title}
          </Typography>
          <Typography
            className={classes.textContent}
            component="h1"
            variant="h5"
          >
            {question}
          </Typography>
        </div>
        <div className={classes.submitButtonSection}>
          <Button
            id={idOfButton}
            onClick={groupEvent}
            className={classes.submitButton}
            variant="contained"
          >
            {btnText}
          </Button>
        </div>
      </Paper>
    </>
  );
}
