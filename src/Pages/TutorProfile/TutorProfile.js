import { useContext } from "react";
import { ThemeContext } from "../../Context/UserContext";
import arrow from "../ChooseDepartment/photos/leftArrow.png";
import aware from "./photos/aware.png"
import {
  MediumTitle,
  SimpleBlockInput,
  SmallParagraph,
} from "../../Components/variables";
import "./tutorprofile.css";
import { useNavigate } from "react-router-dom";

function TutorProfile() {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const navigateBack = () => {
    navigate(-1);
    console.log(theme);
  };
  const dontBeTutor = () => {
    navigate("../aboutYou");
  };
  const beTutor = () => {
    navigate("../whatSubjectDoYouKnow");
  };

  return (
    <>
      <section className=" section-yourProfile">
        <header className=" section-yourProfile_Header">
          <img
            onClick={navigateBack}
            className="section-yourProfile_Header_arrow "
            src={arrow}
            alt="arrow left"
          />
          <MediumTitle className="section-yourProfile_Header_title">
            Profil Korepetytora
          </MediumTitle>
        </header>
        <div className="container_wannaBeTutor">
          <SmallParagraph className="headingWannaBeTutor">
            Czy chcesz zostać korepetytorem?
          </SmallParagraph>
          <div className="container_wannaBeTutor_buttons">
            <SimpleBlockInput
              onClick={dontBeTutor}
              className="container_wannaBeTutor_buttons_no"
            >
              nie
            </SimpleBlockInput>
            <SimpleBlockInput
              onClick={beTutor}
              className="container_wannaBeTutor_buttons_yes"
            >
              tak
            </SimpleBlockInput>
          </div>
          <div className="container_wannaBeTutor_aware">
            <img
              className="section-yourProfile_Header_arrow "
              src={aware}
              alt="arrow left"
            />
            <p> Będzie można to zrobić też później w opcjach profilu</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TutorProfile;
