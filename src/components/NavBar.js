import { AppBar, Toolbar, Typography, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

export const Navbar = () => {
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
    navBar:{
      display:"flex",
      alignItems:"center",
      height:"60px"
    }
  }));

  const classes = useStyles();

  return (
    <>
      {" "}
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            className={classes.navBar}
            variant="h5"
            color="inherit"
            component="div"
          >
            STUDDY-BUDDY!
          </Typography>
          <Toolbar variant="dense" className={classes.toolBar}>
            <Button variant="contained" color="default">
              Create group
            </Button>
            <Button variant="contained" color="default">
              {" "}
              FORUM
            </Button>
            <Button variant="contained" color="secondary">
              MY PROFILE
            </Button>
          </Toolbar>
        </Toolbar>
      </AppBar>
    </>
  );
};
