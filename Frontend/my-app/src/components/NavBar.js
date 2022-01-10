import { AppBar, Toolbar, Typography, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";

export const Navbar = () => {
  let history = useHistory();
  const [activeMenu, setActiveMenu] = useState(false)
  const useStyles = makeStyles((theme) => ({
    appBar:{
      
    },
    toolBar: {
      position: "absolute",
      zIndex:"10",
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
    hamburger:{
      position:"absolute"
    }

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
  const openMenu = () => {
    if (activeMenu) {
      history.goBack()
      setActiveMenu(false)
      console.log(activeMenu)
    }
    else {

      history.push("/nativeMenu");
      setActiveMenu(true)

    }

  }
  return (
    <>
      {" "}
      <AppBar  style={{zIndex:0}} >
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
            <Hamburger className={classes.hamburger}/>
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
