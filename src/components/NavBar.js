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
  }));

  const classes = useStyles();

  return (
    <>
      {" "}
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            position="fixed"
            variant="h5"
            color="inherit"
            component="div"
          >
            TwójKorepetytor
          </Typography>
          <Toolbar variant="dense" className={classes.toolBar}>
            <Button variant="contained" color="default">
              KALENDARZ
            </Button>
            <Button variant="contained" color="default">
              {" "}
              DAILY ZADANKA
            </Button>
            <Button variant="contained" color="secondary">
              MÓJ PROFIL
            </Button>
          </Toolbar>
        </Toolbar>
      </AppBar>
    </>
  );
};
