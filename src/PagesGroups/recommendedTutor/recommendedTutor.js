import arrow from "../Photos/leftArrow.png";
import ellipse from "./photos/ellipse.png";
import {
  MediumTitle,
  MedParagraph,
  SmallParagraph,
} from "../../Components/variables";
import { useNavigate } from "react-router-dom";
import "./recommendedTutor.css";
import star from "./photos/star.png";
import smArrow from "./photos/smArrow.png";

import Navigation from "../../Components/Navigation/Navigation.js";
function RecoomendedTutor() {
  const navigate = useNavigate();
  return (
    <>
      <Navigation />
      <section className="section-recommendedTutor">
        <div className="section-yourProfile">
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
              Polecani korepetytorzy
            </MediumTitle>
          </header>
        </div>
        <div className="section-recommendedTutor_tutorSingle">
          <div className="section-recommendedTutor_tutorSingle_container">
            <img
              className="section-recommendedTutor_tutorSingle_ellipse "
              src={ellipse}
              alt="arrow left"
            />
            <div className="section-recommendedTutor_tutorSingle_information">
              <MedParagraph>Michał</MedParagraph>
              <SmallParagraph className="section-recommendedTutor_tutorSingle_information_subject">
                Analiza danych
              </SmallParagraph>
              <div>
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
          </div>
          <img
          onClick={()=>{
            navigate("../readyTutorProfile")
          }}
            className="section-recommendedTutor_tutorSingle_arrow "
            src={smArrow}
            alt="star"
          />
        </div>
      </section>
    </>
  );
}

export default RecoomendedTutor;
