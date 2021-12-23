import React, { useEffect, useRef } from "react";
import { Navbar } from "../NavBar";
import { Button } from "@material-ui/core/";
import { useStyles } from "./ForumLook";
import { ToolBar } from "../global/ToolBar";
import Post from "./Post";
import ModalToCreatePost from "./ModalToCreatePost";
import { useState } from "react";

export default function Forum() {
  const [modalStatus, setModalStatus] = useState(false);
  const [stateOfPosts, setStateOfPosts] = useState([]);
  const [menuStatus, setMenuStatus] = useState(false);
  const forumBackground = useRef();
  const classes = useStyles();
  const openModal = () => {
    modalStatus ? setModalStatus(false) : setModalStatus(true);
  };
  const openMenu = () => {
    if (!menuStatus) {
      setMenuStatus(true);
      forumBackground.current.style.backgroundColor = "#3f51b5";
    } else {
      setMenuStatus(false);
      forumBackground.current.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar openMenu={openMenu} />
      <ToolBar menuStatus={menuStatus} />
      <div ref={forumBackground} className={classes.forum}>
        <Button
          onClick={openModal}
          className={classes.submitButton}
          variant="contained"
        >
          Create Post
        </Button>
        {modalStatus && (
          <>
            <ModalToCreatePost
              setStateOfPosts={setStateOfPosts}
              stateOfPosts={stateOfPosts}
              setState={setModalStatus}
            />
          </>
        )}
        {!menuStatus && !menuStatus && (
          <div className={classes.containerOfPost}>
            <Post
              userName={"Patryk Kowalski"}
              title={"What do you think about Pitagoras?"}
              question={
                "Does his statement work in all cases? Even if we take quantum space?"
              }
            />
            {stateOfPosts.map((item, index) => {
              return (
                <Post
                  userName={"Kamil Plewka"}
                  key={index}
                  title={item.title}
                  question={item.question}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
