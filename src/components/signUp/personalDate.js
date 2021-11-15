import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
  root: {
    position:"absolute",
    top:0,
    left:0,
    color: "white",
    height: "100vh",
    width: "100vw",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    padding: "20px",
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
    height: "100px",
  },
  
}));

export default function ProfileAvatar() {
  const classes = useStyles();

  return (
    <Grid container  className={classes.root}>
      <Typography component="h1" variant="h3">
        Let's get to know each other better!
      </Typography>
      <Grid className={classes.chooseAvatarAndName}>
        <TextField
          className={classes.chooseName}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />

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
        <Typography component="h1" variant="h5">
          Choose Avatar
        </Typography>
      </Grid>
    </Grid>
  );
}

/* <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          className={classes.formSignUp}
          component={Paper}
          elevation={6}
          square
        >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form className={classes.form} noValidate>
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Next
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/signIn" variant="body2">
                    Have an account yet?
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid> */
