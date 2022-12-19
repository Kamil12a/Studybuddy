import { useNavigate } from "react-router-dom";
import {
  Button,
  SmallLabelForm,
  MediumTitle,
  SelectInput,
} from "../../Components/variables.js";
import { useContext } from "react";
import ChooseDepartment from "./ChooseDeparmentInputs.js";
import "./chooseDepartment.css";
import { Formik } from "formik";
import { useState } from "react";
import ChooseYearOfStudy from "./ChooseYearOfStudy.js";
import ChooseField from "./ChooseField.js";
import { ThemeContext } from "../../Context/UserContext.js";
function ChooseYourStudySubject() {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const navigateToChooseDepartment = () => {
    setState(1);
  };
  const navigateToChooseYearOfStudy = () => {
    setState(2);
  };
  const navigateChooseField = () => {
    setState(3);
  };
  const createAcc = () => {
    theme.setUserDataAccount({
      ...theme.userDataAccount,
      yourDepartment: yourDepartment,
      yearOfStudy: yearOfStudy + " "+ year,
      field: field,
    });
    navigate("../createYourProfile");
  };

  const [yourDepartment, setYourDepartment] = useState("Wydział");
  const [yearOfStudy, setYourYearOfStudy] = useState("Rok studiów");
  const [year, setYear] = useState("Rok studiów");
  const [field, setField] = useState("Kierunek studiów");
  const [state, setState] = useState(0);
  return (
    <>
      {state === 0 && (
        <>
          <section className="Container_department">
            <MediumTitle className="Container_Department_Header">
              Witaj na Study Buddy Uniwersytet Gdański!
            </MediumTitle>
            <Formik
              initialValues={{
                yearOfStudy: "",
                fieldOfStudy: "",
                department: "",
              }}
              onSubmit={(values) => alert(JSON.stringify(values))}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form className="" onSubmit={handleSubmit}>
                  <div className="Container_Form_department_section_Inputs">
                    <SmallLabelForm>Wybierz swój wydział:</SmallLabelForm>
                    <SelectInput
                      onClick={navigateToChooseDepartment}
                      className="Container_Form_inputs_department"
                      name="department"
                    >
                      <option value="">{yourDepartment}</option>
                    </SelectInput>
                  </div>
                  <div className="Container_Form_department_section_Inputs">
                    <SmallLabelForm>Wybierz rok studiów:</SmallLabelForm>
                    <SelectInput
                      onClick={navigateToChooseYearOfStudy}
                      className=" Container_Form_inputs_yearOfStudy"
                      name="year"
                    >
                      <option value="">{yearOfStudy + " " + year}</option>
                    </SelectInput>
                  </div>
                  <div className="Container_Form_department_section_Inputs">
                    <SmallLabelForm>Wybierz kierunek studiów:</SmallLabelForm>
                    <SelectInput
                      className="Container_Form_inputs_fieldOfStudy"
                      name="field"
                      onClick={navigateChooseField}
                    >
                      <option value="">{field}</option>
                    </SelectInput>
                  </div>
                  <div className="Container_Form_department_buttons">
                    <Button
                      type="submit"
                      className=" Container_Form_department_addField"
                    >
                      Dodaj kierunek
                    </Button>
                    <Button
                      type="submit"
                      onClick={createAcc}
                      className="Container_Form_department_confirm"
                    >
                      Zatwierdź
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </section>
        </>
      )}
      {state === 1 && (
        <>
          <ChooseDepartment
            yourDepartment={yourDepartment}
            setYourDepartment={setYourDepartment}
            setState={setState}
          />
        </>
      )}
      {state === 2 && (
        <>
          <ChooseYearOfStudy
            yearOfStudy={yearOfStudy}
            setYourYearOfStudy={setYourYearOfStudy}
            year={year}
            setYear={setYear}
            setState={setState}
          />
        </>
      )}
      {state === 3 && (
        <>
          <ChooseField field={field} setField={setField} setState={setState} />
        </>
      )}
    </>
  );
}

export default ChooseYourStudySubject;
