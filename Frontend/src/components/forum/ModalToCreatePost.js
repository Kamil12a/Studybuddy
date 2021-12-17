import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./ForumLook";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core/";
import CloseIcon from "@material-ui/icons/Close";
export default function ModalToCreatePost({ setState, setStateOfPosts }) {
  const classes = useStyles();
  const [data, setData] = useState({
    title: "",
    question: "",
    hasztag: "",
  });

  const openModal = () => {
    setState(false);
  };
  const createPost = (e) => {
    setStateOfPosts((prev) => [...prev, data]);
    setState(false);
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let object = { ...data, [name]: value };
    setData(object);
  };
  return (
    <>
      <div className={classes.modal}>
        <Paper className={classes.paper} elevation={6}>
          <Box className={classes.boxOfModal}>
            <Typography variant="h6" component="h2">
              Create post{" "}
            </Typography>

            <TextField
              onChange={handleChange}
              className={classes.chooseName}
              label="Tittle of your post"
              variant="outlined"
              name={"title"}
            />
            <TextField
              onChange={handleChange}
              className={classes.chooseName}
              label="What question do u have?"
              variant="outlined"
              name={"question"}
              multiline
              rows={3}
              rowsMax={6}
            />
            <TextField
              onChange={handleChange}
              className={classes.chooseName}
              label="ADD HASZTAGS!"
              variant="outlined"
              name={"hasztag"}
            />

            <Button
              onClick={createPost}
              className={classes.createPostButton}
              variant="contained"
            >
              Create Post
            </Button>
            <CloseIcon onClick={openModal} className={classes.closeIcon} />
          </Box>
        </Paper>
      </div>
    </>
  );
}
