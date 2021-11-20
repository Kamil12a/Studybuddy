import ModalSearching from "./ModalSearching";
import { Navbar } from "../NavBar";
import { useState } from "react";
import Groups from "./Groups";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

export default function SearchingGroups() {
  const [statusOfSearching, setStatusOfSearching] = useState(false);
  const useStyles = makeStyles((theme) => ({
    containerOfGroups: {
      display: "flex",
      justifyContent: "space-around",
      gap: "20px",
    },
    titleOfGroupsSearching: {
      marginTop: "100px",
    },
    groupsContainer:{
      textAlign:"center"
    }
  }));
  const classes = useStyles();

  return (
    <>
      <Navbar />
      {!statusOfSearching && (
        <ModalSearching setStatusOfSearching={setStatusOfSearching} />
      )}
      {statusOfSearching && (
        <>
          <div   className={classes.groupsContainer} >
            <Typography
              className={classes.titleOfGroupsSearching}
              component="h1"
              variant="h2"
            >
              Groups recommended for you{" "}
            </Typography>
          </div>

          <div className={classes.containerOfGroups}>
            <Groups
              title={"Mathematical Analasis"}
              amountOfPatripitian={"0"}
              question={
                "We study math in our sophomore year and it's super cool on campus on Fridays Saturdays online"
              }
            />
            <Groups
              title={"Mathematical Analasis"}
              amountOfPatripitian={"1"}
              question={
                "We study math in our sophomore year and it's super cool on campus on Fridays Saturdays online"
              }
            />
            <Groups
              title={"Mathematical Analasis"}
              amountOfPatripitian={"7"}
              question={
                "We study math in our sophomore year and it's super cool on campus on Fridays Saturdays online"
              }
            />
          </div>
          <div className={classes.containerOfGroups}>
            <Groups
              title={"Mathematical Analasis"}
              amountOfPatripitian={"2"}
              question={
                "We study math in our sophomore year and it's super cool on campus on Fridays Saturdays online"
              }
            />
            <Groups
              title={"WE LOVE MATH"}
              amountOfPatripitian={"3"}
              question={
                "We study math in our sophomore year and it's super cool on campus on Fridays Saturdays online"
              }
            />
            <Groups
              title={"Mathematical Analasis"}
              amountOfPatripitian={"3"}
              question={
                "We study math in our sophomore year and it's super cool on campus on Fridays Saturdays online"
              }
            />
          </div>
          <div className={classes.containerOfGroups}>
            <Groups
              title={"Mathematical Analasis"}
              amountOfPatripitian={"51"}
              question={
                "We study math in our sophomore year and it's super cool on campus on Fridays Saturdays online"
              }
            />
            <Groups
              title={"Mathematical Discrete"}
              amountOfPatripitian={"7"}
              question={
                "We study math in our sophomore year and it's super cool on campus on Fridays Saturdays online"
              }
            />
            <Groups
              title={"Mathematical "}
              amountOfPatripitian={"2"}
              question={
                "We study math in our sophomore year and it's super cool on campus on Fridays Saturdays online"
              }
            />
          </div>
        </>
      )}
    </>
  );
}
