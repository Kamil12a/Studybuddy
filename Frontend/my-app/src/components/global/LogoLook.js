import { makeStyles } from "@material-ui/core/styles";
import logo from "../../photos/studdybuddy.png"
import Grid from "@material-ui/core/Grid";

export const LogoLook = () => {
  const useStyles = makeStyles((theme) => ({

    imageBackground: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      [theme.breakpoints.up(780)]: {
        width: "50vw",
      },
      [theme.breakpoints.down(780)]: {
        with: "100%",
        height: "50vh",
        alignItems: "center"
      },
    },
    image: {
      marginTop: "150px",
      backgroundImage: `url(${logo})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundColor: "white",
      backgroundSize: "75%",
      width: "600px",
      height: "600px",
      borderRadius: "100%",
      [theme.breakpoints.down(780)]: {
        marginTop: "40px",
        width: "60vw",
        height: "60vw",
        margin: "0"
      },
    },

  }));
  const classes = useStyles();

  return (
    <>
      <div className={classes.imageBackground}>
        <Grid item className={classes.image} />
      </div>{" "}
    </>
  );
};

export default LogoLook
