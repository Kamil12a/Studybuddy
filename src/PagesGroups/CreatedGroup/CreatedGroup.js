import arrow from "./photos/leftArrow.png";
import { useNavigate } from "react-router-dom";

import {
  SelectInput,
  InputForm,
  SmallParagraph,
  MedParagraph,
  MediumTitle,
} from "../../Components/variables.js";
import "./createdGroup.css"
function CreatedGroup() {
  const navigate = useNavigate();

  return (
    <>
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
      </section>
    </>
  );
}

export default CreatedGroup;
