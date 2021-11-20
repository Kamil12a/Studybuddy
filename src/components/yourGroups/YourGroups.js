import { Navbar } from "../NavBar";
import Groups from "../global/Groups";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import SubjectToChoose from "../global/subjectToChoose";
const useStyles = makeStyles((theme) => ({
  containerOfGroups: {
    display: "flex",
    justifyContent: "space-around",
    gap: "20px",
  },
  titleOfGroupsSearching: {
    marginTop: "100px",
  },
  groupsContainer: {
    textAlign: "center",
  },
  submitButton: {
    textAlign: "center",
    background: theme.palette.primary.main,
    width: "200px",
    height: "70px",
  },
  submitButtonSection: {
    position: "absolute",
    top: "100px",
    left: "50px",
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    marginTop: "100px",
    padding: "40px",
    width: "50vw",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  chooseName: {
    width: "40vw",
  },
}));
export const YourGroups = () => {
  const classes = useStyles();
  const [createGroupStatus, setCreateGroupStatus] = useState(true);
  const [yourGroups, setYourGroups] = useState([
    {
      title: "Mathematical Discrete",
      question:
        "We study math in our sophomore year and it's super cool on campus on Fridays Saturdays online",
      btnText: "leave the group",
    },
    {
      title: "Mathematical ",
      question:
        "We study math in our sophomore year and it's super cool on campus on Fridays Saturdays online",
      btnText: "leave the group",
    },
    {
      title: "Mathematical Discrete",
      question:
        "We study math in our sophomore year and it's super cool on campus on Fridays Saturdays online",
      btnText: "leave the group",
    },
  ]);
  const deleteGroup = (e) => {
    let allGroups = yourGroups;
    allGroups = allGroups.filter((item, index) => {
      if (index.toString() !== e.currentTarget.id.toString()) {
        return item;
      }
    });
    setYourGroups(allGroups);
  };
  const createGroupOpenModal = () => {
    createGroupStatus
      ? setCreateGroupStatus(false)
      : setCreateGroupStatus(true);
  };
  return (
    <>
      <Navbar />
      <div className={classes.submitButtonSection}>
        <Button
          onClick={createGroupOpenModal}
          className={classes.submitButton}
          variant="contained"
        >
          Create a new group
        </Button>
      </div>
      {createGroupStatus && (
        <>
          <div className={classes.groupsContainer}>
            <Typography
              className={classes.titleOfGroupsSearching}
              component="h1"
              variant="h2"
            >
              Your Groups{" "}
            </Typography>
          </div>
          <div className={classes.containerOfGroups}>
            {yourGroups.map((item, index) => {
              return (
                <Groups
                  key={index}
                  idOfButton={index}
                  question={item.question}
                  title={item.title}
                  btnText={item.btnText}
                  groupEvent={deleteGroup}
                />
              );
            })}
          </div>
        </>
      )}
      {!createGroupStatus && (
        <>
          <div className={classes.container}>
            <Paper className={classes.paper} elevation={6}>
              <Typography component="h1" variant="h4">
                Create the new Group{" "}
              </Typography>
              <TextField
                className={classes.chooseName}
                label="Tittle of your group"
                variant="outlined"
                name={"title"}
              />
              <TextField
                className={classes.chooseName}
                label="Describe your group?"
                variant="outlined"
                name={"question"}
                multiline
                rows={3}
                rowsMax={6}
              />
              <TextField
                className={classes.chooseName}
                label="ADD HASZTAGS!"
                variant="outlined"
                name={"hasztag"}
              />
              <SubjectToChoose />
              <Button onClick={createGroupOpenModal}variant="contained">Submit </Button>
            </Paper>
          </div>
        </>
      )}
    </>
  );
};
