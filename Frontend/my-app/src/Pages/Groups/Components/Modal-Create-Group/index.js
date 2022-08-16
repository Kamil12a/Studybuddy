import "./styles.css";
import Button from "react-bootstrap/Button";
import { createGroup } from "./fetchData/createGroup";
import Navigation from "../../../../Navigation";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function ModalCreateGroup() {
  let navigate = useNavigate();
  const createGroupHandle = (e) => {
    e.preventDefault();
    createGroup().then(() => {
      navigate("/groups");
    });
  };
  return (
    <>
      <Navigation />
      <div className="modal-container">
        <Form onSubmit={createGroupHandle} className="modal-create-group">
          <Form.Group className="mb-3 w-75">
            <Form.Label>Enter subject</Form.Label>
            <Form.Control type="text" placeholder="Enter subject" />
          </Form.Group>

          <Form.Group className="mb-3 w-75">
            <Form.Label>Enter Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" />
          </Form.Group>
          <Form.Group className="mb-3 w-75">
            <Form.Label>Enter cost</Form.Label>
            <Form.Control min="0" type="number" placeholder="Enter cost" />
          </Form.Group>
          <Form.Group className="mb-3 w-75">
            <Form.Label>Max amount of students</Form.Label>
            <Form.Control
              min="1"
              type="number"
              placeholder="Enter max amount of student"
            />
          </Form.Group>
          <Form.Group className="mb-3 w-75">
            <Form.Label>Enter Place</Form.Label>
            <Form.Control type="text" placeholder="Enter Place" />
          </Form.Group>
          <Form.Group className="mb-3 w-75">
            <Form.Label>Enter Date</Form.Label>
            <Form.Control type="date" placeholder="Enter Date" />
          </Form.Group>
          <Form.Group className="mb-3 w-75">
            <Form.Label>Enter Hour </Form.Label>
            <Form.Control type="time" placeholder="Enter Hour" />
          </Form.Group>
          <Form.Group className="modal-create-group-checkbox mb-3 w-75">
            <Form.Label>Do you want to be a tutor? </Form.Label>

            <Form.Check type="switch" id="custom-switch" />
          </Form.Group>

          <Form.Group className="mb-3 w-75">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
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
