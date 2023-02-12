import arrow from "../Photos/leftArrow.png";
import addImage from "./photos/addImage.png";
import addPdf from "./photos/addPdf.png";
import microphone from "./photos/microphone.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  SelectInput,
  InputForm,
  SmallParagraph,
  MedParagraph,
  MediumTitle,
  SimpleBlockInput,
  Button,
} from "../../Components/variables.js";
import "./chatGroup.css";
function ChatGroup() {
  const navigate = useNavigate();
  return (
    <>
      <section className="groupChat_section">
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
        <div className="groupChat_section_chat">
          <img
            className="section-yourProfile_Header_arrow "
            src={microphone}
            alt="micro"
          />
          <img
            className="section-yourProfile_Header_arrow "
            src={addImage}
            alt="image"
          />
          <img
            className="section-yourProfile_Header_arrow "
            src={addPdf}
            alt="pdf"
          />
          <input className="groupChat_section_chat_field" type="text" />
        </div>
      </section>
    </>
  );
}

export default ChatGroup;
