import Button from "react-bootstrap/Button";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
function GroupDetails() {
  return (
    <>
      <div className="group-details">
        <div className="group-details-container-tutor">
          <h3 className="group-details-container-title">Tutor Name</h3>
          <h3>Course</h3>
        </div>
        <div className="group-details-container-students">
          <h3 className="group-details-container-title">Students</h3>
          <h4>User 1</h4>
          <h4>User 2</h4>
          <h4>User 3</h4>
        </div>
        <div className="group-details-container-aboutGroup">
          <h3 className="group-details-container-title">About Group</h3>
          <h4>Description</h4>
        </div>
        <Button className="group-details-joinToGroupBtn" variant="secondary">Join to Group</Button>
      </div>
      
    </>
  );
}

export default GroupDetails;
