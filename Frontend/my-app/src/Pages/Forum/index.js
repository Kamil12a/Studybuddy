import Navigation from "../../Navigation";
import { useEffect, useState } from "react";
import { getPosts } from "./fetchData/getPosts";
import ForumContainer from "./components/forumContainer/index.js";
import "./style.css"
function Forum() {
  const [forumProperties, setForumProperties] = useState([]);
  useEffect(() => {
    getPosts(setForumProperties);
  }, []);
  return (
    <>
      <Navigation />
      <div className="forum">
        {forumProperties.map((item, index) => {
         return <ForumContainer key={index} prop={item}/>;
        })}
      </div>
    </>
  );
}

export default Forum;
