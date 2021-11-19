import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  submitButton: {
    marginTop: "50px",
    marginLeft: "50px",
    textAlign: "center",
    height: "50px",
    width: "150px",
    background: theme.palette.primary.main,
  },
  createPostButton: {
    textAlign: "center",
    textAlign: "right",
    background: theme.palette.primary.main,
  },
  createPostBtnSection: {
    marginTop: "30px",
    width: "450px",
    textAlign: "center",
  },
  modal: {
  
    position: "absolute",
    top: "200px",
    display: "flex",
    justifyContent: "center",
    width: "99vw",
  },
  chooseAvatarAndName: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paper: {
    padding: "20px",
    width: "470px",
  },
  chooseName: {
    marginLeft: "5px",
  },
}));
