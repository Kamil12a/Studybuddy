import { makeStyles } from "@material-ui/core/styles";
import logo from "../../photos/studdyBuddy.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  imageBackground: {
    display: "flex",
    justifyContent: "center",

    backgroundColor: theme.palette.primary.main,
    width: "50vw",
    height: "100vh",
    [theme.breakpoints.down(780)]: {
      width: "100vw",
      height: "40vh",
      alignItems:"center"
    },
  },
  image: {
    marginTop: "150px",
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundColor: "white",
    backgroundSize: "55%",
    width: "600px",
    height: "600px",
    borderRadius: "100%",
    [theme.breakpoints.down(780)]: {
      width: "60vw",
      height: "60vw",
      margin:"0"
    },
  },
  paper: {
    [theme.breakpoints.up(780)]: {
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
      marginRight:"20px",
      marginLeft:"20px",
      height: "auto",
      paddingBottom:"20px"
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
  chooseAvatarAndName: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
   
  },
  question:{
    width:"110px",
    [theme.breakpoints.down(780)]: {
      fontSize:"1.2em"
     },
  },
  chooseName: {
    margin: "10px",
  },
  title:{
    fontSize:"2em",
    marginBottom:"20px",
    textAlign:"center",
    
  },
  oneLaneToFill: {
    width:"90vw",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(780)]: {
      flexDirection:"column",
      alignItems:"flex-start",
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
    margin: "5px",
  },
  selectYourPosition: {
    width:"80vw",
    display: "flex",
    alignItems: "center",
    margin: "5px",
  },
  checkbox: {
    marginLeft: "5px",
  },
  rightSide:{
    width:"100%"
  }
}));
