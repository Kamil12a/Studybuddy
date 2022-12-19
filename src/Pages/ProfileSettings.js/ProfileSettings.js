import arrow from "../ChooseDepartment/photos/leftArrow.png";
import { useNavigate } from "react-router-dom";
import {
  Button,
  InputForm,
  MediumTitle,
  SimpleBlockInput,
} from "../../Components/variables";
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
      </section>
    </>
  );
}

export default ProfileSettings;
