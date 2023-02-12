import arrow from "../ChooseDepartment/photos/leftArrow.png";
import book from "./photos/tutorBook.png";
import deleteImg from "./photos/delete.png";
import privacy from "./photos/privacy.png";
import settings from "./photos/settings.png";
import { useNavigate } from "react-router-dom";
import {
  Button,
  InputForm,
  MediumTitle,
  SimpleBlockInput,
} from "../../Components/variables";
import "./profileSettings.css";
function ProfileSettings() {
  const navigate = useNavigate();
  return (
    <>
      <section className=" section-yourProfile">
        <header className=" section-yourProfile_Header">
          <img
            onClick={() => {
              navigate(-1);
            }}
            className="section-yourProfile_Header_arrow "
            src={arrow}
            alt="arrow left"
          />
          <MediumTitle className="section-yourProfile_Header_title">
            Profil{" "}
          </MediumTitle>
        </header>
        <div className="section_yourProfile_settingsPanel">
          <SimpleBlockInput>
            {" "}
            <img className="imageInsideButton" src={book} alt="pen" />
            dodaj kierunek
          </SimpleBlockInput>
          <SimpleBlockInput>
            <img className="imageInsideButton" src={book} alt="pen" />
            zostań korepeytorem
          </SimpleBlockInput>
          <SimpleBlockInput>
            <img className="imageInsideButton" src={privacy} alt="pen" />
            zmień dane logowania
          </SimpleBlockInput>
          <SimpleBlockInput className="lastOption">
            {" "}
            <img className="imageInsideButton" src={deleteImg} alt="pen" />
            zmień dane logowania
          </SimpleBlockInput>
        </div>
        <img
          onClick={() => {
            navigate(-1);
          }}
          className="settings"
          src={settings}
          alt="settings"
        />
      </section>
    </>
  );
}

export default ProfileSettings;
