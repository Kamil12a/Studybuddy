import "./style.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
function GroupLook({ description, id }) {
  let navigate = useNavigate();

  const navigateToGroupDetails = (e) => {
    navigate("/group/details/" + e.target.id);
  };

  return (
    <>
      <div className="group-look">
        <div className="group-look-container">
          <div>
            <h4 className="group-look-container-title">Group Title</h4>
            <p>{description}</p>
          </div>

          <Button onClick={navigateToGroupDetails} id={id} variant="secondary">
            Check the details
          </Button>
        </div>
      </div>
    </>
  );
}

export default GroupLook;
