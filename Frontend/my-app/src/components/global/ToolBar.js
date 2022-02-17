import { Toolbar, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
export const ToolBar = () => {
  const navigate = useNavigate();
  const useStyles = makeStyles((theme) => ({
    toolBarPhone: {
      marginTop: "150px",
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
      backgroundColor: "#3f51b5",
      color: "white"
    },
    btnMenuLog: {
      margin: 0,
      padding: 0,
      width: "200px",
      height: "50px",
      color: "white"

    }
  }));
  const classes = useStyles();
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    
  },[])
  const handleResize = ()=>{
    console.log(window.innerWidth)
    if(window.innerWidth>800){
      navigate("/forum")
    }
  }
  const navToGroup = () => {
    navigate("/searchingGroups");
  };
  const navToForum = () => {
    navigate("/forum");
  };
  const navToProfile = () => {
    navigate("/my-app");
  };
  const navToYourGroups = () => {
    navigate("/yourGroups");
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
