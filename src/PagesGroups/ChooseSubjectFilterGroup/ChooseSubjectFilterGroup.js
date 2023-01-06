import arrow from "../Photos/leftArrow.png";
import pen from "../Photos/pen.png";
import { useNavigate } from "react-router-dom";
import {
  MediumTitle,
  SimpleBlockInput,
  Button
} from "../../Components/variables";
import "./chooseSubjectFilterGroup.css";
import { useState } from "react";
function ChooseSubjectFilterGroup({setState}) {
    let choosenSubjects = [];
  const [yourSubject, setYourSubject] = useState([]);
  const subejcts = [
    "Algebra Liniowa",
    "Wstęp do programowania",
    "Statystyka Opisowa",
    "Analiza Matematyczna",
    "Algebra Liniowa",
    "Wstęp do programowania",
    "Statystyka Opisowa",
    "Analiza Matematyczna",
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
            Wybierz przedmiot{" "}
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
                  <img className="pen" src={pen} alt="pen" />
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
                  <img className="pen" src={pen} alt="pen" />
                  {subject}
                </SimpleBlockInput>
              </>
            );
          }
        })}
         <Button className="chooseSubject_btn"
          onClick={() => {
            setState(0)
          }}
        >
          Zatwierdź
        </Button>
      </section>
    </>
  );
}

export default ChooseSubjectFilterGroup;
