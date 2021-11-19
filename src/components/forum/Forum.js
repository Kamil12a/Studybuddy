import React from "react";
import { Navbar } from "../NavBar";
import { Button } from "@material-ui/core/";
import { useStyles } from "./ForumLook";

import ModalToCreatePost from "./ModalToCreatePost";
import { useState } from "react";
export default function Forum() {
  const [modalStatus, setModalStatus] = useState(false);
  const classes = useStyles();
  const openModal = () => {
    modalStatus ? setModalStatus(false) : setModalStatus(true);
  };
  return (
    <>
      <Navbar />
      <Button
        onClick={openModal}
        className={classes.submitButton}
        variant="contained"
      >
        Create Post
      </Button>
      {modalStatus && (
        <>
          <ModalToCreatePost />
        </>
      )}
    </>
  );
}
