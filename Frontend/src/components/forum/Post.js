import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "40px",
    width: "550px",
    [theme.breakpoints.down(780)]: {
      marginTop:"50px",
      width:"80vw",
      padding: "20px",
    },
  },
  large: {
    width: "50px",
    height: "50px",
  },
  informatiomAboutUser: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down(780)]: {
      gap:"10px"
     },
  },
  informationAboutPost: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    [theme.breakpoints.down(780)]: {
      marginTop: "5px",
    },
  },
  textContent:{
      marginTop:"20px",
      textAlign:"justify",
      [theme.breakpoints.down(780)]: {
        marginTop: "5px",
      },
      
  }
}));

export default function Post({title,question,userName}) {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={6}>
        <div className={classes.informatiomAboutUser}>
          <Avatar
            src="https://www.w3schools.com/howto/img_avatar.png"
            className={classes.large}
          />
          <Typography component="h1" variant="h5">
            {userName}
          </Typography>
        </div>
        <div className={classes.informationAboutPost}>
          <Typography component="h1" variant="h4">
            {title}
          </Typography>
          <Typography className={classes.textContent} component="h1" variant="h5">
            {question}
          </Typography>
        </div>
      </Paper>
    </>
  );
}
