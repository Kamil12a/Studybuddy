import { useEffect,useContext } from "react";
import { useStyles } from "./ForumLook";
import Post from "./Post";
import { useState } from "react";
import { ThemeContext } from "../../context/UserContext"
export default function Forum() {
  const [stateOfPosts, setStateOfPosts] = useState([]);
  const classes = useStyles();
  const theme = useContext(ThemeContext)
  useEffect(() => {
    setStateOfPosts([])
  }, [])
  return (
    <>


      <div className={classes.containerOfPost}>
        <Post
          userName={"Patryk Kowalski"}
          title={"What do you think about Pitagoras?"}
          question={
            "Does his statement work in all cases? Even if we take quantum space?"
          }
        />
        <Post
          userName={"Kamil Plewka"}
          title={"philosophy group"}
          question={
            "Are you anyone willing to talk about existence? I am looking for people willing to join a philosophical group!"
          }
        />
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
      <button onClick={(()=>{
        console.log(theme)
      })}>dadads</button>
    </>
  );
}
