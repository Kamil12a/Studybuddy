import ModalSearching from "./ModalSearching";
import { Navbar } from "../NavBar";
import { useState } from "react";
import Groups from "../global/Groups";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
export default function SearchingGroups() {
  const [statusOfSearching, setStatusOfSearching] = useState(false);
  const useStyles = makeStyles((theme) => ({
    containerOfGroups: {
      display: "flex",
      justifyContent: "space-around",
      gap: "20px",
      [theme.breakpoints.down(780)]: {
        flexDirection: "column",
        alignItems: "center"
      },
    },
    titleOfGroupsSearching: {
      marginTop: "100px",

      [theme.breakpoints.down(780)]: {
        fontSize: "2em"
      },

    },
    groupsContainer: {
      textAlign: "center",
    },
    containerOfBody: {
      height: "100vh",
      transition: "all 0.8s ease",
      WebkitTransition: "all 0.8s ease",
      MozTransition: "all 0.8s ease",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <div className={classes.containerOfBody}>
        <>
          {!statusOfSearching && (
            <ModalSearching setStatusOfSearching={setStatusOfSearching} />
          )}
          {statusOfSearching && (
            <>
              <div className={classes.groupsContainer}>
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
                    "We study math and it's super cool on campus on Fridays Saturdays online"
                  }
                  btnText={"join to group"}
                />
                <Groups
                  title={"Mathematical Analasis"}
                  amountOfPatripitian={"1"}
                  question={
                    "We study math and it's super cool on campus on Fridays Saturdays online"
                  }
                  btnText={"join to group"}
                />
                <Groups
                  title={"Mathematical Analasis"}
                  amountOfPatripitian={"7"}
                  question={
                    "We study math and it's super cool on campus on Fridays Saturdays online"
                  }
                  btnText={"join to group"}
                />
              </div>
              <div className={classes.containerOfGroups}>
                <Groups
                  title={"Mathematical Analasis"}
                  amountOfPatripitian={"2"}
                  question={
                    "We study math and it's super cool on campus on Fridays Saturdays online"
                  }
                  btnText={"join to group"}
                />
                <Groups
                  title={"WE LOVE MATH"}
                  amountOfPatripitian={"3"}
                  question={
                    "We study math and it's super cool on campus on Fridays Saturdays online"
                  }
                  btnText={"join to group"}
                />
                <Groups
                  title={"Mathematical Analasis"}
                  amountOfPatripitian={"3"}
                  question={
                    "We study math and it's super cool on campus on Fridays Saturdays online"
                  }
                  btnText={"join to group"}
                />
              </div>
              <div className={classes.containerOfGroups}>
                <Groups
                  title={"Mathematical Analasis"}
                  amountOfPatripitian={"51"}
                  question={
                    "We study math and it's super cool on campus on Fridays Saturdays online"
                  }
                  btnText={"join to group"}
                />
                <Groups
                  title={"Mathematical Discrete"}
                  amountOfPatripitian={"7"}
                  question={
                    "We study math and it's super cool on campus on Fridays Saturdays online"
                  }
                  btnText={"join to group"}
                />
                <Groups
                  title={"Mathematical "}
                  amountOfPatripitian={"2"}
                  question={
                    "We study math and it's super cool on campus on Fridays Saturdays online"
                  }
                  btnText={"join to group"}
                />
              </div>
            </>
          )}
        </>

      </div>
    </>
  );
}
