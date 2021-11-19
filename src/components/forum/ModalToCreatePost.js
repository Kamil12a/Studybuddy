import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./ForumLook";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core/";

export default function ModalToCreatePost() {
  const classes = useStyles();
  const FieldTofilled = ({ question, fill }) => (
    <div>
      <Grid className={classes.chooseAvatarAndName}>
        <Typography component="p" variant="p">
          {question}
        </Typography>
        <TextField
          className={classes.chooseName}
          label={fill}
          variant="outlined"
        />
      </Grid>
    </div>
  );
  return (
    <>
      <div className={classes.modal}>
        <Paper className={classes.paper} elevation={6}>
          <Box>
            <Typography variant="h6" component="h2">
              Create post{" "}
            </Typography>
            <FieldTofilled
              fill={"Tittle of your post"}
              question={"Tittle of your post"}
            />
            <FieldTofilled
              fill={"Your question"}
              question={"What question do u have?"}
            />
            <div className={classes.createPostBtnSection}  >
              <Button className={classes.createPostButton} variant="contained">
                Create Post
              </Button>
            </div>
          </Box>
        </Paper>
      </div>
    </>
  );
}
