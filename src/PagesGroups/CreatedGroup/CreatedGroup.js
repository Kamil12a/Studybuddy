import arrow from "./photos/leftArrow.png";
import heart from "./photos/heart.png";
import { useNavigate } from "react-router-dom";
import ellipse from "./photos/ellipse.png";
import location from "./photos/location.png";
import clock from "./photos/clock.png";
import callendar from "./photos/callendar.png";
import addUser from "./photos/addUser.png";
import book from "./photos/book.png";
import settings from "./photos/settings.png";
import { useState } from "react";
import Navigation from "../../Components/Navigation/Navigation.js";
import {
  SelectInput,
  InputForm,
  SmallParagraph,
  MedParagraph,
  MediumTitle,
  SimpleBlockInput,
  Button,
} from "../../Components/variables.js";
import "./createdGroup.css";
function CreatedGroup() {
  const navigate = useNavigate();
  const [areYouUser, setAreYouUser] = useState(0);
  return (
    <>
      <Navigation />
      <section className="created_group_section">
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
            Statistica
          </MediumTitle>
        </header>
        <div className="created_group_section_subjects">
          <SimpleBlockInput>Analiza Danych</SimpleBlockInput>
          <SimpleBlockInput>do 01.12.2022</SimpleBlockInput>
        </div>
        <label htmlFor="description"></label>
        <MedParagraph className="created_group_section_Textarea">
          Potrzebuję pomocy w ogarnięciu narzędzia Statistica, przećwiczeniu
          paru przykładów z zajęć.
        </MedParagraph>
        <div className="created_group_section_users">
          <SmallParagraph>uczestnicy:</SmallParagraph>
          <SmallParagraph>korepetytor:</SmallParagraph>
        </div>
        <div className="created_group_section_users_info">
          <div className="created_group_section_users_info_ellipses">
            {[1, 2, 3].map((index) => {
              return <img key={index} src={ellipse} alt="ellipse" />;
            })}
          </div>
          <MedParagraph>poszukiwany!</MedParagraph>
        </div>
        <SmallParagraph>spotkanie 1:</SmallParagraph>
        <div className="created_group_section_mettingInfo">
          <div className="created_group_section_mettingInfo_location">
            <img src={location} alt="location" />
            <MedParagraph>Bibiloteka UG Wita Stwosza </MedParagraph>
          </div>
          <div className="created_group_section_mettingInfo_data">
            <div className="created_group_section_mettingInfo_dataInfo">
              <img src={callendar} alt="callendar" />
              <MedParagraph>20.11.2022</MedParagraph>
            </div>
            <div className="created_group_section_mettingInfo_dataInfo">
              <img src={clock} alt="clock" />
              <MedParagraph>15.00-17.00 </MedParagraph>
            </div>
          </div>
        </div>
        {areYouUser === 0 && (
          <>
            <img
              className="created_group_section_heart"
              src={heart}
              alt="heart"
            />
            <div className="created_group_section_buttons">
              <Button>
                {" "}
                <img
                  onClick={() => {
                    setAreYouUser(1);
                  }}
                  src={addUser}
                  alt="addUser"
                />
                <MedParagraph>Dołącz jako uczestnik</MedParagraph>
              </Button>
              <Button>
                {" "}
                <img src={book} alt="book" />
                <MedParagraph> Dołącz jako korepetytor</MedParagraph>
              </Button>
            </div>
          </>
        )}
        {areYouUser === 1 && (
          <>
            <SimpleBlockInput
              onClick={() => {
                navigate("../chatGroupId");
              }}
              className="created_group_section_button_chat"
            >
              otwórz chat
            </SimpleBlockInput>
            <img
              onClick={() => {
                navigate("../groupSettingsId");
              }}
              className="created_group_section_heart"
              src={settings}
              alt="settings"
            />
          </>
        )}
      </section>
    </>
  );
}

export default CreatedGroup;
