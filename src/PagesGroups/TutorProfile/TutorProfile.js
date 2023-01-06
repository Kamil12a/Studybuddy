import { useContext } from "react";
import { ThemeContext } from "../../Context/UserContext";
import book from "./photos/bookTutor.png";
import pen from "./photos/pen.png";
import field from "./photos/fieldOfStudy.png";
import year from "./photos/yearOfStudy.png";
import star from "./photos/star.png";
import arrow from "./photos/leftArrow.png";
import ellipse from "./photos/ellipse.png";
import {
  MedParagraph,
  SmallParagraph,
  MediumTitle,
  Button,
  SimpleBlockInput,
} from "../../Components/variables";
import "./TutorProfile.css";
import Navigation from "../../Components/Navigation/Navigation.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import settings from "./photos/settings.png";
import CreateYourProfile from "../../Pages/CreateYourProfile/CreateYourProfile.js";
function ReadyTutorProfile() {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  return (
    <>
      {" "}
      <Navigation />
      <section className="section_tutorProfile section_tutorProfileReady">
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
            Profil Korepetytora
          </MediumTitle>
        </header>
        {state === 0 && (
          <>
            <div className="section_tutorProfile_mainInformation">
              <img src={ellipse} alt="ellipse" />
              <MediumTitle className="section-yourProfile_Header_title_name">
                Michał
              </MediumTitle>
              <div className="section-yourProfile_Header_title_stars">
                {[1, 2, 3, 4, 5].map((index) => {
                  return (
                    <img
                      key={index}
                      className="section-recommendedTutor_tutorSingle_star "
                      src={star}
                      alt="star"
                    />
                  );
                })}
              </div>
            </div>
            <div className="block_aboutyourStudy yourDepartment_field_recommendation">
              <img
                className="aboutYourStudyImage boutYourStudyImage2"
                src={field}
                alt="department"
              />
              <MedParagraph>
                Modelowanie Matematyczne i Analiza Danych
              </MedParagraph>
            </div>
            <div className="block_aboutyourStudy  yourDepartment_field_recommendation">
              <img
                className="aboutYourStudyImage boutYourStudyImage2"
                src={year}
                alt="department"
              />
              <MedParagraph>Licencjat, III rok</MedParagraph>
            </div>
            <SmallParagraph className="section_tutorProfile_description_text">
              Opis:
            </SmallParagraph>
            <MedParagraph className="section_tutorProfile_description">
              Jestem fajny i przyjazny, kocham pomagać innym
            </MedParagraph>
            <SmallParagraph className="section_tutorProfile_topics">
              Zagadnienia:
            </SmallParagraph>
            <div className="yourSubject">
              <img className="pen" src={pen} alt="pen" />
              <MedParagraph>Algebra Liniowa</MedParagraph>
            </div>
            <div className="yourSubject">
              <img className="pen" src={pen} alt="pen" />
              <MedParagraph>Statystyka Opisowa</MedParagraph>
            </div>
            <div className="yourSubject">
              <img className="pen" src={pen} alt="pen" />
              <MedParagraph>Analiza Matematycza</MedParagraph>
            </div>

            <MedParagraph>Opinie (1):</MedParagraph>
            <div className="reccomendation_Container">
              <div className="reccomendation_Container_name">
                <img
                  className="reccomendation_Container_ellipse"
                  src={ellipse}
                  alt="ellipse"
                />

                <MedParagraph className="reccomendation_Container_name_par">
                  Michalina
                </MedParagraph>
              </div>
              <div className="reccomendation_Container_stars">
                {[1, 2, 3, 4, 5].map((index) => {
                  return (
                    <img
                      key={index}
                      className="section-recommendedTutor_tutorSingle_star "
                      src={star}
                      alt="star"
                    />
                  );
                })}
                <SmallParagraph className="section-recommendedTutor_recomendation">
                  5.0
                </SmallParagraph>
              </div>
              <MedParagraph className="section-recommendedTutor_description">
                Michał doskonale tłumaczy, pomógł mi bardzo ze statystyką.
              </MedParagraph>
            </div>
            <div className="buttons_recommendation">
              <Button>Anuluj</Button>
              <Button
                onClick={() => {
                  setState(1);
                }}
              >
                Zaproś
              </Button>
            </div>
          </>
        )}

        {state === 1 && (
          <>
            <div className="tutor_profile_sendInvitation_container">
              <div className="tutor_profile_sendInvitation">
                <MedParagraph className="tutor_profile_sendInvitation_Title">
                  Wysłać zaproszenie do korepetytora?
                </MedParagraph>
                <div className="tutor_profile_sendInvitation_btn">
                  <SimpleBlockInput
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    nie
                  </SimpleBlockInput>
                  <SimpleBlockInput
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    tak
                  </SimpleBlockInput>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default ReadyTutorProfile;
