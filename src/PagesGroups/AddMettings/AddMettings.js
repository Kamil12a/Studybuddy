import arrow from "../Photos/leftArrow.png";
import location from "./photos/location.png";
import callendar from "./photos/callendar.png";
import clock from "./photos/clock.png";
import pen from "./photos/pen.png";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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
import "./AddMettings.css";
import { useState } from "react";
function AddMettings() {
  const [state, setState] = useState("data");
  const navigate = useNavigate();
  return (
    <>
      <Navigation />
      <section className="add_mettings_section">
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
            Dodaj spotkanie
          </MediumTitle>
        </header>
        <SmallParagraph>Spotkanie 1:</SmallParagraph>
        <div className="add_mettings_section_options">
          <div className="add_mettings_section_options_location">
            <img src={location} alt="location" />
            <SmallParagraph>Miejsce</SmallParagraph>
          </div>
          <div className="add_mettings_section_options_datas_info">
            <div
              onClick={() => {
                setState("data");
              }}
              className="add_mettings_section_options_datas"
            >
              <img src={callendar} alt="callendar" />
              <SmallParagraph>Data</SmallParagraph>
            </div>
            <div
              onClick={() => {
                setState("clock");
              }}
              className="add_mettings_section_options_datas"
            >
              <img src={clock} alt="clock" />
              <SmallParagraph>Godzina</SmallParagraph>
            </div>
          </div>
          <div className="add_mettings_section_options_note">
            <img src={pen} alt="pen" />
            <SmallParagraph>Dodaj notatkę</SmallParagraph>
          </div>
        </div>
        {state === "data" && (
          <>
            <Calendar className="calendar" />
          </>
        )}
        {state === "clock" && (
          <>
            <div className="clock_calendar">
              <SmallParagraph>start:</SmallParagraph>
              <input
              className="time_input"
                type="time"
                id="appt"
                name="appt"
                min="09:00"
                max="18:00"
                required
              />
              <SmallParagraph>koniec:</SmallParagraph>

              <input
              className="time_input"
                type="time"
                id="appt"
                name="appt"
                min="09:00"
                max="18:00"
                required
              />
            </div>
          </>
        )}
        <Button  onClick={()=>{
            navigate(-1)
        }} className="add_mettings_section_btn"> Zatwierdź</Button>
      </section>
    </>
  );
}

export default AddMettings;
