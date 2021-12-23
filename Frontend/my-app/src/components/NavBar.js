import { AppBar, Toolbar, Typography, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Hamburger from "hamburger-react";

export const Navbar = ({ openMenu }) => {
  let history = useHistory();
  const useStyles = makeStyles((theme) => ({
    toolBar: {
      position: "absolute",
      right: "0",
      gap: "10px",
      display: "flex",
      justifyContent: " space-between",
      [theme.breakpoints.down(780)]: {
        display: "none",
      },
    },
    btnCalendar: {
      background: "green",
    },
    navBar: {
      display: "flex",
      width: "100vw",
      alignItems: "center",
      height: "60px",
    },
    menuIcon: {
      width: "30px",
      height: "30px",
      position: "absolute",
      right: "10px",
      top: "10px",
    },
  
  }));

  const classes = useStyles();
  const navToGroup = () => {
    history.push("/searchingGroups");
  };
  const navToForum = () => {
    history.push("/forum");
  };
  const navToProfile = () => {
    history.push("/my-app");
  };
  const navToYourGroups = () => {
    history.push("/yourGroups");
  };

  return (
    <>
      {" "}
      <AppBar>
        <Toolbar>
          <Typography
            className={classes.navBar}
            variant="h5"
            color="inherit"
            component="div"
          >
            STUDDY-BUDDY!
          </Typography>
          <div onClick={openMenu} >
            <Hamburger />
          </div>

          <Toolbar className={classes.toolBar}>
            <Button onClick={navToGroup} variant="contained" color="default">
              find Group
            </Button>

            <Button onClick={navToForum} variant="contained" color="default">
              {" "}
              FORUM
            </Button>

            <Button
              onClick={navToYourGroups}
              variant="contained"
              color="default"
            >
              {" "}
              Your Groups
            </Button>

            <Button
              onClick={navToProfile}
              variant="contained"
              color="secondary"
            >
              Log out
            </Button>
          </Toolbar>
        </Toolbar>
      </AppBar>
     
    </>
  );
};
