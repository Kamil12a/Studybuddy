import { useNavigate } from "react-router-dom";
import "./navigation.css";
import home from "./Photos/home.png";
import bell from "./Photos/bell.png";
import heart from "./Photos/heart.png";
import message from "./Photos/message.png";
import person from "./Photos/person.png";
function Navigation() {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <img className="nav_item " src={home} alt="home" />
        <img className="nav_item " src={bell} alt="home" />
        <img className="nav_item " src={heart} alt="home" />
        <img className="nav_item " src={message} alt="home" />
        <img className="nav_item " src={person} alt="home" />
      </nav>
    </>
  );
}

export default Navigation;
