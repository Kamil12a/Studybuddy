import { AppBar, Toolbar, Typography, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  let history = useHistory();
  const useStyles = makeStyles((theme) => ({
    toolBar: {
      position: "absolute",
      right: "0",
      gap: "10px",
      display: "flex",
      justifyContent: " space-between",
    },
    btnCalendar: {
      background: "green",
    },
    navBar: {
      display: "flex",
      alignItems: "center",
      height: "60px",
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
    history.push("/");
  };
 const navToYourGroups=()=>{
  history.push("/yourGroups");
 }
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
          <Toolbar className={classes.toolBar}>
            <Button onClick={navToGroup} variant="contained" color="default">
             find Group
            </Button>

            <Button onClick={navToForum} variant="contained" color="default">
              {" "}
              FORUM
            </Button>

            <Button onClick={navToYourGroups} variant="contained" color="default">
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
