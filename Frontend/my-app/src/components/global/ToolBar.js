import { Toolbar, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import {useRef } from "react";
export const ToolBar = () => {
  let history = useHistory();
  const containerNative = useRef(null);

  const useStyles = makeStyles((theme) => ({
    toolBarPhone: {
      marginTop: "100px",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      gap: "10vh",

    },
    btnMenu: {
      margin: 0,
      padding: 0,
      width: "200px",
      height: "50px",
      backgroundColor:"#3f51b5",
      color:"white"
    },
    btnMenuLog:{
      margin: 0,
      padding: 0,
      width: "200px",
      height: "50px",
      color:"white"

    }
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
  const createPost = () => {

  }
  return (
    <>

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
          className={classes.btnMenuLog}
          onClick={navToProfile}
          variant="contained"
          color="secondary"
        >
          Log out
        </Button>
      </Toolbar>


    </>
  );
};
