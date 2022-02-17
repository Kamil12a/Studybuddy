import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    zIndex: "10",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down(780)]: {
      minHeight: "100vh",
      backgroundColor: "white",
    },
  },


  paper: {
    [theme.breakpoints.up(780)]: {
      background: "white",
      position: "absolute",
      top: 0,
      right: 0,
      width: "50vw",
    },
    paddingTop: "200px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down(780)]: {
      paddingTop: "50px",
      marginRight: "20px",
      marginLeft: "20px",
      height: "auto",
      paddingBottom: "20px",
    },
  },
  accountAction: {
    display: "flex",
    alignItems: "center",
  },
  form: {
    marginTop: theme.spacing(1),
  },
  avatar: {
    margin: theme.spacing(1),
  },
  oneLaneToFillPassword: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(780)]: {
      marginLeft: "20px",
    },
  },
  password: {
    marginLeft: "20px",
    marginRight: "55px",
    [theme.breakpoints.down(780)]: {
      marginLeft: "0",
      fontSize: "1.3em",
      marginRight: "82px"
    },
  },
  input: {
    display: "none",
  },
  title: {
    fontSize: "2em",
    textAlign: "center",
  },
  large: {
    width: "100px",
    height: "100px",
  },
  oneLaneToFill: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(780)]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  avatarIcon: {
    display: "flex",
    alignItems: "center",
  },
  submitButton: {
    textAlign: "center",
    height: "50px",
    width: "100px",
    background: theme.palette.primary.main,
  },
  submitSection: {
    display: "flex",
    justifyContent: "center",
  },
}));
