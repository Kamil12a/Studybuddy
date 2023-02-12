import arrow from "./photos/leftArrow.png";
import { useNavigate } from "react-router-dom";
import book from "./photos/tutorBook.png";
import deleteImg from "./photos/delete.png";
import share from "./photos/share.png";
import callendar from "./photos/callendar.png";
import leave from "./photos/leave.png";
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
import "./groupSettings.css";
function GroupSettings() {
  const navigate = useNavigate();
  return (
    <>
      <Navigation />
      <section className="group_settings_section">
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
        <div className="section_yourProfile_settingsPanel">
          <SimpleBlockInput
            onClick={() => {
              navigate("../addMettingsId");
            }}
          >
            {" "}
            <img
              className="imageInsideButton"
              src={callendar}
              alt="callendar"
            />
            dodaj spotkanie
          </SimpleBlockInput>
          <SimpleBlockInput
            onClick={() => {
              navigate("../addPaymentId");
            }}
          >
            <img className="imageInsideButton" src={book} alt="pen" />
            dodaj wynagrodzenie
          </SimpleBlockInput>
          <SimpleBlockInput
            onClick={() => {
              navigate("../recommendedTutor");
            }}
          >
            <img className="imageInsideButton" src={book} alt="book" />
            dodaj korepetytora
          </SimpleBlockInput>
          <SimpleBlockInput>
            {" "}
            <img className="imageInsideButton" src={share} alt="share" />
            udostępnij grupę
          </SimpleBlockInput>
          <SimpleBlockInput
            onClick={() => {
              navigate("../deleteGroupId");
            }}
          >
            {" "}
            <img className="imageInsideButton" src={leave} alt="leave" />
            opuść grupę
          </SimpleBlockInput>
          <SimpleBlockInput className="lastOption">
            {" "}
            <img className="imageInsideButton" src={deleteImg} alt="pen" />
            zakończ grupę
          </SimpleBlockInput>
        </div>
        <SimpleBlockInput
          onClick={() => {
            navigate("../chatGroupId");
          }}
          className="created_group_section_button"
        >
          otwórz chat
        </SimpleBlockInput>
      </section>
    </>
  );
}

export default GroupSettings;
