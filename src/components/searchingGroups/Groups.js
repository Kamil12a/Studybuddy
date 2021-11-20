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
  },

  informatiomAboutUser: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "50px",
    gap: "20px",
    marginTop: "10px",
  },
  informationAboutPost: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  textContent: {
    marginTop: "10px",
    textAlign: "justify",
  },
  submitButton: {
    textAlign: "center",
    background: theme.palette.primary.main,
  },
  ifnormationRight: {
    background: theme.palette.primary.main,
    padding: "10px",
    borderRadius: "20px",
  },
  submitButtonSection:{
      marginTop:"20px",
      display:"flex",
      justifyContent:"center"
  }
}));

export default function Groups({ title, question, amountOfPatripitian }) {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={6}>
        <div className={classes.informatiomAboutUser}>
          <Typography component="h1" variant="h5">
            {amountOfPatripitian} participants
          </Typography>
          <Typography
            className={classes.ifnormationRight}
            component="h1"
            variant="h5"
          >
            12.12.2021
          </Typography>
        </div>
        <div className={classes.informatiomAboutUser}>
          <Typography component="h1" variant="h5">
            Online/At campus
          </Typography>
          <Typography
            className={classes.ifnormationRight}
            component="h1"
            variantp
            ="h5"
          >
            20 zł
          </Typography>
        </div>
        <div className={classes.informationAboutPost}>
          <Typography component="h1" variant="h4">
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
        <div className={classes.submitButtonSection} >
          <Button className={classes.submitButton} variant="contained">
            Join to event
          </Button>
        </div>
      </Paper>
    </>
  );
}
