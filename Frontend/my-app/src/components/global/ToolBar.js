import { Toolbar, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

export const ToolBar = ({ menuStatus }) => {
  let history = useHistory();
  const useStyles = makeStyles((theme) => ({
    toolBarPhone: {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100vw",
      gap: "5vh",
      marginTop: "100px",
      padding: 0,
    },
    btnMenu: {
      width: "200px",
      height: "50px",
    },
  }));
  const classes = useStyles();

  const navToGroup = () => {
    history.push("/searchingGroups");
  };
  const navToForum = () => {
    history.push("/forum");
  };
  const navToProfile = () => {
    history.push("/my-app");
  };
  const navToYourGroups = () => {
    history.push("/yourGroups");
  };
const createPost=()=>{

}
  return (
    <>
      {menuStatus && (
        <Toolbar className={classes.toolBarPhone}>
          <Button
            className={classes.btnMenu}
            onClick={navToGroup}
            variant="contained"
            color="default"
          >
            find Group
          </Button>

          <Button
            className={classes.btnMenu}
            onClick={navToForum}
            variant="contained"
            color="default"
          >
            {" "}
            FORUM
          </Button>

          <Button
            className={classes.btnMenu}
            onClick={navToYourGroups}
            variant="contained"
            color="default"
          >
            {" "}
            Your Groups
          </Button>
          <Button
            className={classes.btnMenu}
            onClick={createPost}
            variant="contained"
            color="default"
          >
            {" "}
            Create New Post
          </Button>
          <Button
            className={classes.btnMenu}
            onClick={navToProfile}
            variant="contained"
            color="secondary"
          >
            Log out
          </Button>
        </Toolbar>
      )}
      
    </>
  );
};
