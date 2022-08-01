import "./styles.css";
import { useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import { createGroup } from "./fetchData/createGroup";
import Navigation from "../../../../Navigation";
import { ThemeContext } from "../../../../Context/UserContext";
function ModalCreateGroup() {
  const createGroupHandle = () => {
    createGroup();
  };
  const theme = useContext(ThemeContext);
  useEffect(()=>{
    console.log(theme)
  },[])
  return (
    <>
      <Navigation />
      <div className="modal-container">
        <div className="modal-create-group">
          <h3>Create Group</h3>
          <div className="modal-create-group-box">
            <label className="modal-create-group-label" htmlFor="textArea">
              Description
            </label>
            <textarea
              className="modal-create-group-textArea"
              id="textArea"
              name="textArea"
              rows="4"
            ></textarea>
          </div>
          <Button
            onClick={createGroupHandle}
            className="modal-create-group-btn"
            variant="secondary"
          >
            Create Group
          </Button>
        </div>
      </div>
    </>
  );
}

export default ModalCreateGroup;
