import "./styles.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
function Navigation() {
  return (
    <nav>
      <h3>Study Buddy</h3>
      <ul>
        <li>
          <Button variant="secondary">Forum</Button>
        </li>
        <li>
          <Button variant="light">Groups</Button>
        </li>
        <li>
        <Button variant="success">Profile</Button>{' '}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
