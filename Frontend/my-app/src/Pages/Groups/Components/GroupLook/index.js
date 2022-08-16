import "./style.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../../Context/UserContext";
import { useContext, useEffect, useState } from "react";

function GroupLook({ description, id, groupOwnerId }) {
  const [groupOwner, setGroupOwner] = useState(false);
  let navigate = useNavigate();
  const userTheme = useContext(ThemeContext);
  useEffect(() => {
    setGroupOwner(userTheme.userDataAccount.id == groupOwnerId);
  }, []);
  let backgroundColor = groupOwner ? "#FAF9F6" : "white";
  return (
    <>
      <div className="group-look">
        <div
          style={{ background: backgroundColor }}
          className="group-look-container"
        >
        
          <div className="group-look-container-information-top">
            <p className="group-look-container-information-top-tutor">
              Korepetytor
            </p>
            <p>11.11.2022 o 12:23</p>
          </div>
          <div className="group-look-container-information-row-2">
            <p className="group-look-container-information-row-2-place">
              miejsce
            </p>
            <p className="group-look-container-information-row-2-amountOfStudents">
              5
            </p>
          </div>
          <div className="group-look-container-information-subject-section">
            <h5 className="group-look-container-information-subject-section-subjectName">
              Analiza Danych
            </h5>
            <p className="group-look-container-information-subject-section-cost">
              free
            </p>
          </div>
          <h4 className="group-look-container-title">Szalone liczenie</h4>
          <p className="group-look-container-description">
            Charakterystyka grupy badawczej. Badaniu sondażowemu
            przeprowadzonemu w Domu Dziecka nr 3 podlegało 19 osób. Większością
            byli chłopcy w ilości 11 osób co
          </p>
          {groupOwner && (
            <div className="group-look-container-btn">
              <Button id={id} variant="secondary">
                Left Group
              </Button>
              <Button id={id} variant="primary">
              Edit Group
            </Button>
            </div>
          )}
          {!groupOwner && (
            <div className="group-look-container-btn">
              <Button id={id} variant="secondary">
                Join to Group
              </Button>
    
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default GroupLook;
