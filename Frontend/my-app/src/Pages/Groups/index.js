import { useEffect, useState } from "react";
import GroupLook from "./Components/GroupLook";
import { getGroups } from "./fetchData/getGroups";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./styles.css"
function Group() {
  let navigate = useNavigate();
  const [groupProperties, setGroupProperties] = useState([]);
  useEffect(() => {
    getGroups(setGroupProperties);
  }, []);
  const navigateToModal = () => {
    navigate("/group/createGroup");
  };
  return (
    <div>
      {groupProperties.map((groupProp, index) => {
        return (
          <GroupLook
            key={index}
            description={groupProp.shortDescription}
            id={groupProp.id}
          />
        );
      })}
      <Button
        onClick={navigateToModal}
        className="create-group"
        variant="secondary"
      >
        Create Group
      </Button>
    </div>
  );
}

export default Group;
