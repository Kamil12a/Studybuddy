import { useNavigate } from "react-router-dom";
import {
  Button,
  LabelForm,
  BigTitle,
  InputForm,

} from "../../Components/variables.js";
import "./createAccount.css";
import { useContext } from "react";

import { ThemeContext } from "../../Context/UserContext.js";
import { Formik } from "formik";
function CreateAccount() {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const signUp = (data) => {
    theme.setUserDataAccount({
      ...theme.userDataAccount,
      ...data,
    });

    navigate("../ChooseYourStudySubject");
    // fetch("http://145.239.86.33/User/AddUser", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: "string",
    //     login: "string",
    //     password: "string",
    //     name: "string",
    //     surname: "string",
    //     course: "string",
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  };

  return (
    <>
      <section className="LogInContainer">
        <BigTitle className="LogInContainer_logInHeader">Rejestracja</BigTitle>
        <Formik
          initialValues={{
            email: "",
            login: "",
            password: "",
            name: "",
            surname: "",
            course: "",
          }}
          onSubmit={(values) => signUp(values)}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form
              className="LogInContainer_Form_inputs"
              onSubmit={handleSubmit}
            >
              <div>
                <LabelForm>Nick</LabelForm>
                <InputForm
                  src="https://example.com/my-image.png"
                  alt="Submit"
                  // required
                  type={"text"}
                  onChange={handleChange}
                  name="name"
                  value={values.name}
                  className="LogInContainer_Form_input"
                />
              </div>
              <div className="LogInContainer_Form_input_password">
                <LabelForm>E-mail</LabelForm>
                <InputForm
                  // required
                  type={"text"}
                  onChange={handleChange}
                  name="email"
                  value={values.email}
                  className="LogInContainer_Form_input"
                />
              </div>
              <div className="LogInContainer_Form_input_password">
                <LabelForm>Hasło</LabelForm>
                <InputForm
                  // required
                  onChange={handleChange}
                  name="password"
                  type={"password"}
                  value={values.password}
                  className="LogInContainer_Form_input"
                />
              </div>
              <Button type="submit" className="createAcc_Button">
                Zarejestruj się
              </Button>
            </form>
          )}
        </Formik>
      </section>
    </>
  );
}

export default CreateAccount;
