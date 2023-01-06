import arrow from "../Photos/leftArrow.png";
import { useNavigate } from "react-router-dom";
import {
  MediumTitle,
  SimpleBlockInput,
  Button,
} from "../../Components/variables";
import "./sortSection.css";
import { useState } from "react";
function SortSection({ setState }) {
  let choosenSubjects = [];
  const [yourSubject, setYourSubject] = useState([]);
  const subejcts = [
    "Data utworzenia: od najnowszych",
    "Data utworzenia: od najstarszych",
    "Popularność: od najwyższej",
    "Popularność: od najniższej",
    "Deadline: od najszybszych",
    "Deadline: od najpóźniejszych",
  ];
  const chooseYourSubjects = (e) => {
    if (choosenSubjects.includes(e.target.name)) {
      choosenSubjects = choosenSubjects.filter(function (value) {
        if (!choosenSubjects.includes(e.target.name)) {
          return value;
        }
      });
    } else {
      choosenSubjects.push(e.target.name);
    }
    setYourSubject(choosenSubjects);
  };

  const navigate = useNavigate();
  return (
    <>
      <section className=" section-yourProfile">
        <header className=" section-yourProfile_Header">
          <img
            onClick={() => {
              setState(0)
            }}
            className="section-yourProfile_Header_arrow "
            src={arrow}
            alt="arrow left"
          />
          <MediumTitle className="section-yourProfile_Header_title">
            Sortuj według{" "}
          </MediumTitle>
        </header>
        {subejcts.map((subject, index) => {
          if (yourSubject.includes(subject)) {
            return (
              <>
                <SimpleBlockInput
                  key={index + subject}
                  onClick={chooseYourSubjects}
                  name={subject}
                  className="subject_blockInput"
                  style={{ border: "2px solid" }}
                >
                  {" "}
              
                  {subject}
                </SimpleBlockInput>
              </>
            );
          } else {
            return (
              <>
                <SimpleBlockInput
                  key={index + subject}
                  onClick={chooseYourSubjects}
                  name={subject}
                  className="subject_blockInput"
                >
                  {" "}
                {subject}
                </SimpleBlockInput>
              </>
            );
          }
        })}
        <Button
          className="chooseSubject_btn"
          onClick={() => {
            setState(0);
          }}
        >
          Zatwierdź
        </Button>
      </section>
    </>
  );
}

export default SortSection;
