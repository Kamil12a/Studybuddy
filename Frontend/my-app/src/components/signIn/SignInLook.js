import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import LogoLook from "../global/LogoLook";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
const useStyles = makeStyles((theme) => ({
  root: {
    position:"absolute",
    zIndex:"2",
    top:"0px",
    minHeight:"100vh",
    display: "flex",
    flexDirection: "column",
  },

  paper: {
    minHeight:"60vh",
    background:"white",
    [theme.breakpoints.up(780)]: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "50vw",
    },
    paddingTop: "200px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down(780)]: {
      paddingTop: "50px",
      marginRight:"20px",
      marginLeft:"20px",
      height: "auto",
    },
  },
  accountAction: {
    display: "flex",
    alignItems: "center",
  },
  form: {
    marginTop: theme.spacing(1),
  },
}));

export default function SignInLook() {
  let history = useHistory();
  const classes = useStyles();

  const MadeWithLove = () => (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by the "}
      <Link color="inherit" href="https://material-ui.com/">
        Study-Buddy
      </Link>
      {" team."}
    </Typography>
  );
  const submitPersonForm = (e) => {
    e.preventDefault();
    history.push("/forum");
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <LogoLook/>
      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <form onSubmit={submitPersonForm} className={classes.rightSide}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid container className={classes.accountAction}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Grid item xs>
                <Link href="/signUp" variant="body2">
                  Don't have an account yet?
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
            <Box mt={5}>
              <MadeWithLove />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
