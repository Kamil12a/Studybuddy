import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { ThemeContext } from "../../context/UserContext"
import Avatar from "@material-ui/core/Avatar";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "40px",
    width: "500px",
    [theme.breakpoints.down(780)]: {
      marginTop: "50px",
      width: "70vw",
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
      gap: "10px"
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
  textContent: {
    marginTop: "20px",
    textAlign: "justify",
    [theme.breakpoints.down(780)]: {
      marginTop: "5px",
    },
  },
  informatiomAboutPostUserData: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },

  counterReactionContainer: {
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  icon: {
    color: " #3f51b5",
    transform: "scale(1.2)",
  },
  likeSection: {
    height: "50px",
    display: "flex",
    alignItems: "center"
  },
  likeCounter: {
    fontSize: "1.15em",
    marginLeft: "10px",
    color: "#3f51b5"
  },
  reactionContainer: {
    height: "70px",
    alignItems: "center",
    display: "flex",
  },
  commentAction: {
    marginLeft: "20px",
    width: "550px",
  }
}));

export default function Post({ title, question, userName }) {
  const classes = useStyles();
  const { userDataAccount } = useContext(ThemeContext)

  return (
    <>
      <Paper className={classes.paper} elevation={6}>
        <div className={classes.informatiomAboutPostUserData} >

          <div className={classes.informatiomAboutUser}>
            <Avatar
              src="https://www.w3schools.com/howto/img_avatar.png"
              className={classes.large}
            />
            <Typography component="h1" variant="h5">
              {userName}
            </Typography>

          </div>
          {console.log(userDataAccount.username)}
        </div>

        <div className={classes.informationAboutPost}>
          <Typography component="h1" variant="h4">
            {title}
          </Typography>
          <Typography className={classes.textContent} component="h1" variant="h5">
            {question}
          </Typography>
        </div>
        <div className={classes.counterReactionContainer}>
          <div className={classes.likeSection} >
            <FavoriteBorderIcon className={classes.icon} />
            <Typography className={classes.likeCounter}  >
              5
            </Typography>
          </div>
          <div className={classes.likeSection} >
            <CommentIcon className={classes.icon} />
            <Typography className={classes.likeCounter}  >
              12
            </Typography>
          </div>
        </div>

        <div className={classes.reactionContainer}>
          <Avatar
            src="https://www.w3schools.com/howto/img_avatar.png"
            className={classes.large}
          />
          <TextField className={classes.commentAction}
            label="Write comment" variant="outlined" />
        </div>

      </Paper>
    </>
  );
}
