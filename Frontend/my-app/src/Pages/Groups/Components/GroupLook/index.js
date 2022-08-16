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
          <div className="group-look-container-btn">
            <Button
              onClick={navigateToGroupDetails}
              id={id}
              variant="secondary"
            >
              Join To Group
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupLook;
