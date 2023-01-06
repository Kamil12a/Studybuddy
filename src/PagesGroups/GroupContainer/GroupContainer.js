import "./groupContainer.css";
import {
  SelectInput,
  InputForm,
  SmallParagraph,
  MedParagraph,
} from "../../Components/variables.js";
import ellipse from "./Photos/Ellipse.png";
import heart from "./Photos/heart.png";
function GroupContainer() {
  return (
    <>
      <div className="groupContainer">
        <SmallParagraph className="groupContainer_title">Analiz Danych</SmallParagraph>
        <MedParagraph className="groupContainer_subject">Statistica</MedParagraph>
        <div className="groupContainer_ellipses">
          <img className="ellipse " src={ellipse} alt="ellipse" />
          <img className="ellipse " src={ellipse} alt="ellipse" />
          <img className="ellipse " src={ellipse} alt="ellipse" />
        </div>
        <div className="footer_containerGroup">
          <SmallParagraph className="footer_containerGroup_text">do 1.12.2022</SmallParagraph>
          <img className="heart" src={heart} alt="heart" />
        </div>
      </div>
    </>
  );
}

export default GroupContainer;
