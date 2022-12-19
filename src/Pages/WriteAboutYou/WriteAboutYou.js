import arrow from "../ChooseDepartment/photos/leftArrow.png";
import { Button, LabelForm, MediumTitle } from "../../Components/variables";
import "./writeAboutYou.css";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "../../Context/UserContext";
function WriteAboutYou() {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const getValueFromField = (e) => {
    theme.setUserDataAccount({
      ...theme.userDataAccount,
      description: e.target.value,
    });
    console.log(theme)
  };
  return (
    <>
      <section className=" section-writeAboutYou">
        <header className=" section-writeAboutYou_Header">
          <img
            onClick={() => {
              navigate(-1);
            }}
            className="section-yourProfile_Header_arrow "
            src={arrow}
            alt="arrow left"
          />
          <MediumTitle className="section-writeAboutYou_Header_title">
            Napisz coś o sobie!
          </MediumTitle>
        </header>
        <LabelForm
          htmlFor="aboutYou"
          className="section-writeAboutYou_Header_text"
        >
          Opowiedz więcej o zagdanieniach, w których poruszasz się swobodnie
        </LabelForm>
        <textarea
          id="aboutYou"
          name="aboutYou"
          className="section-writeAboutYou_Header_text_area"
          onChange={getValueFromField}
        ></textarea>

        <Button
          className="section-writeAboutYou_button"
          onClick={() => {
            navigate("../YourProfile");
          }}
        >
          Zatwierdź
        </Button>
      </section>
    </>
  );
}

export default WriteAboutYou;
