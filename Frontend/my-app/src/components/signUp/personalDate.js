import {useContext} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./personalDateStyles";
import Button from "@material-ui/core/Button";
import { useNavigate } from 'react-router-dom';
import LogoLook from "../global/LogoLook";
import FieldTofilled from "../global/FieldTofilled";
import { ThemeContext } from "../../context/UserContext";
export default function PersonalDate() {
  const navigate = useNavigate();
  const { setUserDataAccount } = useContext(ThemeContext)
  const classes = useStyles();
  const AvatartIcon = () => (
    <div className={classes.avatarIcon}>
      <div>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <Avatar
              src="https://www.w3schools.com/howto/img_avatar.png"
              className={classes.large}
            />
          </IconButton>
        </label>
      </div>

      <Typography component="h1" variant="h5">
        Choose Avatar
      </Typography>
    </div>
  );
  const submitPersonForm = (e) => {
    e.preventDefault();
    navigate("/universitySection");
  };
  const getName=(e)=>{
    console.log(e.target.value)
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <LogoLook />

      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <form onSubmit={submitPersonForm} className={classes.rightSide}>
            <Typography component="h1" variant="h3" className={classes.title}>
              Let's get to know each other better!
            </Typography>
            <div className={classes.oneLaneToFill}>
              <FieldTofilled onChangeFunction={getName} question="Name" fill={"Name"} />
              <FieldTofilled question="Surname" fill={"surname"} />
            </div>
            <div className={classes.oneLaneToFill}>
              <FieldTofilled question="E-mail" fill={"email"} />
              <FieldTofilled question="Password" fill={"password"} />

            </div>

            <AvatartIcon />
            <div className={classes.submitSection}>
              <Button
                type="submit"
                className={classes.submitButton}
                variant="contained"
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
