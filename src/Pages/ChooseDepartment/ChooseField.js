
import {
  Button,
  MediumTitle,
  SimpleBlockInput,
} from "../../Components/variables.js";
import arrow from "./photos/leftArrow.png";
import "./chooseDepartment.css";

function ChooseField({ field, setState, setField }) {
  const setFieldFunc = (e) => {
    setField(e.target.name);
    console.log(e.target.name);
  };
  const backNavigate = () => {
    setState(0);
  };
  const fields = [
    "Bezpieczeństwo jądrowe i ochrona radiologiczna",
    "Bioinformatyka",
    "Fizyka Medyczna",
    "Fizyka",
    "Informatyka",
    "Informatyka, profil praktyczny",
    "Modelowanie matematyczne i analiza danych ",
  ];
  return (
    <>
      <section className=" chooseYourFieldOfStudy">
        <header className=" chooseYourFieldOfStudy_Header">
          <img
            onClick={backNavigate}
            className="chooseYourField_Header_arrow "
            src={arrow}
            alt="arrow left"
          />
          <MediumTitle className="chooseYourField_Header_title">
            Wybierz rok studiów
          </MediumTitle>
        </header>
        <div className="chooseFieldOfStudy-container">
          {fields.map((myfield) => {
            if (myfield === field) {
              return (
                <>
                  <SimpleBlockInput
                    name={myfield}
                    className="chooseFieldOfStudy"
                    onClick={setFieldFunc}
                    style={{ border: "2px solid black" }}
                  >
                    {myfield}
                  </SimpleBlockInput>
                </>
              );
            } else {
              return (
                <>
                  <SimpleBlockInput
                    name={myfield}
                    onClick={setFieldFunc}
                    className="chooseFieldOfStudy"
                  >
                    {myfield}
                  </SimpleBlockInput>
                </>
              );
            }
          })}
        </div>
        <Button  onClick={backNavigate} className="chooseYearOfStudyButton">
          Zatwierdź
        </Button>
      </section>
    </>
  );
}

export default ChooseField;
