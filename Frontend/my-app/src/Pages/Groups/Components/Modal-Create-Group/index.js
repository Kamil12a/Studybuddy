import "./styles.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { createGroup } from "./fetchData/createGroup";
import Navigation from "../../../../Navigation";
import Form from "react-bootstrap/Form";
import { ThemeContext } from "../../../../Context/UserContext";
import { useContext, useState } from "react";
function ModalCreateGroup() {
  let navigate = useNavigate();
  const userTheme = useContext(ThemeContext);
  const [groupInformation, setGroupInformation] = useState({});
  const createGroupHandle = (e) => {
    e.preventDefault();
    createGroup(userTheme, groupInformation).then(() => {
      navigate("/groups");
    });
  };
  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name !== "tutor") {
      setGroupInformation((prevState) => ({ ...prevState, [name]: value }));
    } else {
      setGroupInformation((prevState) => ({
        ...prevState,
        ["tutorChecked"]: e.target.checked,
      }));
    }
  };
  return (
    <>
      <Navigation />
      <div className="modal-container">
        <Form onSubmit={createGroupHandle} className="modal-create-group">
          <Form.Group className="mb-3 w-75">
            <Form.Label>Enter subject</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="subject"
              type="text"
              placeholder="Enter subject"
            />
          </Form.Group>

          <Form.Group className="mb-3 w-75">
            <Form.Label>Enter Title</Form.Label>
            <Form.Control
              name="title"
              onChange={handleOnChange}
              type="text"
              placeholder="Enter Title"
            />
          </Form.Group>
          <Form.Group className="mb-3 w-75">
            <Form.Label>Enter cost</Form.Label>
            <Form.Control
              name="cost"
              onChange={handleOnChange}
              min="0"
              type="number"
              placeholder="Enter cost"
            />
          </Form.Group>
          <Form.Group className="mb-3 w-75">
            <Form.Label>Max amount of students</Form.Label>
            <Form.Control
              name="amount"
              onChange={handleOnChange}
              min="1"
              type="number"
              placeholder="Enter max amount of student"
            />
          </Form.Group>
          <Form.Group className="mb-3 w-75">
            <Form.Label>Enter Place</Form.Label>
            <Form.Control
              name="place"
              onChange={handleOnChange}
              type="text"
              placeholder="Enter Place"
            />
          </Form.Group>
          <Form.Group className="mb-3 w-75">
            <Form.Label>Enter Date</Form.Label>
            <Form.Control
              name="date"
              onChange={handleOnChange}
              type="date"
              placeholder="Enter Date"
            />
          </Form.Group>
          <Form.Group className="mb-3 w-75">
            <Form.Label>Enter Hour </Form.Label>
            <Form.Control
              name="time"
              onChange={handleOnChange}
              type="time"
              placeholder="Enter Hour"
            />
          </Form.Group>
          <Form.Group className="modal-create-group-checkbox mb-3 w-75">
            <Form.Label>Do you want to be a tutor? </Form.Label>

            <Form.Check
              name="tutor"
              onClick={handleOnChange}
              type="switch"
              id="custom-switch"
            />
          </Form.Group>

          <Form.Group className="mb-3 w-75">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              onChange={handleOnChange}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default ModalCreateGroup;
