import "./styles/style.css";
import logo from "../../assets/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function LogIn() {
  let navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();
    navigate("/groups");
  };
  return (
    <div className="log-in-component">
      <div className="log-in-component-container">
        <div className="log-in-component-container-header">
          <img
            className="log-in-component-container-header-logo"
            src={logo}
          ></img>
        </div>
        <Form onSubmit={logIn} className="log-in-component-container-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="log-in-component-container-form-section">
            <Link to={"/createAccount"}>Don't have account yet?</Link>

            <Button
              className="log-in-component-container-form-section-submit"
              variant="primary"
              type="submit"
            >
              Log in
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LogIn;
