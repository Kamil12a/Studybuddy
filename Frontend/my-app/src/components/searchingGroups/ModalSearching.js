import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import SubjectToChoose from "../global/subjectToChoose";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "100px",
    textAlign: "center",
    padding: "40px",
    width: "900px",
  },
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

export default function ModalSearching({setStatusOfSearching}) {
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
  const startSearching=()=>{
    setStatusOfSearching(true)
  }
  return (
    <>
      <div className={classes.container}>
        <Paper className={classes.paper} elevation={6}>
          <Typography component="h5" variant="h3">
            What are you looking for
          </Typography>

          <SubjectToChoose/>
          <Button
           onClick={startSearching}
            className={classes.submitButton}
            variant="contained"
          >
            Search Group
          </Button>
        </Paper>
      </div>
    </>
  );
}
