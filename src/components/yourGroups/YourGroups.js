import { Navbar } from "../NavBar";
import Groups from "../global/Groups";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import Button from "@material-ui/core/Button";

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
}));
export const YourGroups = () => {
  const classes = useStyles();

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
  return (
    <>
      <Navbar />
      <div className={classes.submitButtonSection}>
        <Button className={classes.submitButton} variant="contained">
          Create a new group
        </Button>
      </div>
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
  );
};
