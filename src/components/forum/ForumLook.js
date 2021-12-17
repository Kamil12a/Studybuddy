import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  forum: {
    marginTop: "50px",
  },
  submitButton: {
    marginTop: "50px",
    marginLeft: "50px",
    textAlign: "center",
    height: "50px",
    width: "150px",
    background: theme.palette.primary.main,
    [theme.breakpoints.down(780)]: {
      display:"none"
  },
  },
  createPostButton: {
    textAlign: "center",
    background: theme.palette.primary.main,
    marginTop: "20px",
    height: "42px",
  },

  modal: {
   
    position: "absolute",
    top: "200px",
    display: "flex",
    justifyContent: "center",
    width: "99vw",
  },
  boxOfModal: {
    textAlign: "center",
    [theme.breakpoints.down(780)]: {
      display:"none"
  },
  },
  chooseAvatarAndName: {
    marginTop: "20px",
    display: "flex",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    width: "470px",
    
  },
  chooseName: {
    width: "400px",
    margin: "5px",
    
  },
  closeIcon: {
    position: "relative",
    bottom: "280px",
    left: "145px",
    cursor: "pointer",
  
  },
  containerOfPost: {
    display: "flex",
    alignItems:"center",
    gap:"50px",
    flexDirection:"column"
  },
  questionContent:{
    height:"200px"
  }
}));
