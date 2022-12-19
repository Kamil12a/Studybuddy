import { useContext } from "react";
import { ThemeContext } from "../../Context/UserContext";
import book from "./photos/bookTutor.png";
import pen from "./photos/pen.png";
import { MedParagraph, SmallParagraph } from "../../Components/variables";
import "./profilManagment.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import settings from "./photos/settings.png";
import CreateYourProfile from "../CreateYourProfile/CreateYourProfile";
function ProfilManagment() {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <>
      <CreateYourProfile url={"../groupPanel"} />
      <section className="section_tutorProfile">
        <div className="section_tutorProfile_title">
          <img src={book} alt="book" />
          <MedParagraph>Korepetytor</MedParagraph>
        </div>
        <SmallParagraph className="section_tutorProfile_description_text">
          Opis:
        </SmallParagraph>
        <MedParagraph className="section_tutorProfile_description">
          {theme.userDataAccount.description}
        </MedParagraph>
        <SmallParagraph className="section_tutorProfile_topics">
          Zagadnienia:
        </SmallParagraph>
        <div className="section_tutorProfile_your_topic">
          <img className="pen" src={pen} alt="pen" />
          <MedParagraph>Algebra Liniowa</MedParagraph>
        </div>
        <div className="section_tutorProfile_your_topic">
          <img className="pen" src={pen} alt="pen" />
          <MedParagraph>Statystyka Opisowa</MedParagraph>
        </div>
        <div className="section_tutorProfile_your_topic">
          <img className="pen" src={pen} alt="pen" />
          <MedParagraph>Analiza Matematycza</MedParagraph>
        </div>
        <img
          onClick={() => {
            navigate("../profileSettings");
          }}
          className="settings"
          src={settings}
          alt="settings"
        />
      </section>
    </>
  );
}

export default ProfilManagment;
