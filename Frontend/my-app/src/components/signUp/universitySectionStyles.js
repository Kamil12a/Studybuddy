import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position:"absolute",
    zIndex:"10",
    display: "flex",
    flexDirection: "column",
    background:"white",
    
  },
  paper: {
    [theme.breakpoints.up(780)]: {
      background:"white",
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
  avatar: {
    margin: theme.spacing(1),
  },

  input: {
    display: "none",
  },
  large: {
    width: "100px",
    height: "100px",
  },
  title: {
    fontSize: "2em",
    marginBottom: "20px",
    textAlign: "center",
  },
  oneLaneToFill: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(780)]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  submitButton: {
    textAlign: "center",
    height: "50px",
    width: "100px",
    background: theme.palette.primary.main,
  },
  submitSection: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
  },
  selectUniversity: {
    margin: "15px",
  },
  selectUrUniversity:{
    [theme.breakpoints.up(780)]: {
      width:"300px"
    },
  },
  selectYourPosition: {
    width: "80vw",
    display: "flex",
    alignItems: "center",
    margin: "5px",
  },
  checkbox: {
    marginLeft: "5px",
  },
  rightSide: {
    width: "100%",
    [theme.breakpoints.up(780)]: {
      paddingLeft: "60px",
    },
  },
}));
