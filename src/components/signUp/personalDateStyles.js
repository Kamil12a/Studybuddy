import { makeStyles } from "@material-ui/core/styles";
import logo from "../../photos/studdyBuddy.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    width: "50vw",
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundColor: theme.palette.primary.main,
    backgroundSize: "80%",
    height: "100%",
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
    display: "flex",
    alignItems: "center",
  },
  avatarIcon: {
    display: "flex",
    alignItems: "center",
  },
  submitButton: {
    textAlign: "center",
    height: "50px",
    background: theme.palette.primary.main,
  },
  submitSection: {
    display: "flex",
    justifyContent: "center",
  },
}));
