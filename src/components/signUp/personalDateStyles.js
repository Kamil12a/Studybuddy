import { makeStyles } from "@material-ui/core/styles";
import logo from "../../photos/studdyBuddy.png";

export  const  useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    image: {
      backgroundImage: `url(${logo})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundColor: theme.palette.primary.main,
      backgroundSize: "80%",
      height: "100%",
    },
    paper: {
      margin: theme.spacing(20, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
    },
    form: {
      width: "80%",
      marginTop: theme.spacing(1),
    },
    submit: {
      backgroundColor: theme.palette.secondary.main,
  
      margin: theme.spacing(3, 0, 2),
    },
    input: {
      display: "none",
    },
    large: {
      width: "100px",
      height: "100px",
    },
    chooseAvatarAndName: {
      marginTop: "0px",
      display: "flex",
      alignItems: "center",
      
    },
    chooseName: {
      margin: "10px",
    },
  }));