import "./styles.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
function Navigation() {
  let navigate = useNavigate();
  const navigateToForum = () => {
    navigate("/forum");
  };
  const navigateToGroup = () => {
    navigate("/groups");
  };
  const navigateToProfile = () => {
    // navigate("/");
  };
  return (
    <nav>
      <h3>Study Buddy</h3>
      <ul>
        <li>
          <Button onClick={navigateToForum} variant="secondary">
            Forum
          </Button>
        </li>
        <li>
          <Button onClick={navigateToGroup} variant="light">
            Groups
          </Button>
        </li>
        <li>
          <Button onClick={navigateToProfile} variant="success">
            Profile
          </Button>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
