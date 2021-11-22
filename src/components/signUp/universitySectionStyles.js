import { makeStyles } from "@material-ui/core/styles";
import logo from "../../photos/studdyBuddy.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  imageBackground: {
    display: "flex",
    justifyContent: "center",

    backgroundColor: theme.palette.primary.main,
    width: "50vw",
    height: "100vh",
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
  },
  paper: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingTop: "200px",
    width: "50vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: "50vw",
    marginTop: theme.spacing(1),
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
  chooseName: {
    margin: "10px",
  },
  oneLaneToFill: {
    marginTop: "20px",
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
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
  },
  selectUniversity: {
    margin: "5px",
  },
  selectYourPosition: {
    display: "flex",
    alignItems: "center",
    margin: "5px",
  },
  checkbox: {
    marginLeft: "5px",
  },
}));
