import { useNavigate } from "react-router-dom";
import {
  Button,
  LabelForm,
  BigTitle,
  InputForm,
  SmallParagraph,
} from "../../Components/variables.js";
import "./logIn.css";
import { Formik } from "formik";
import { useEffect } from "react";

function LogIn() {
  useEffect(() => {
    fetch("http://145.239.86.33/User/GetAllUsers")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  const navigate = useNavigate();
  const navigateToCreateAccount = () => {
    navigate("./createAccount");
  };
  return (
    <>
      <section className="LogInContainer">
        <BigTitle className="LogInContainer_logInHeader">Logowanie</BigTitle>
        <Formik
          initialValues={{ userName: "", password: "" }}
          onSubmit={(values) => navigate("./chooseDepartment")}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form
              className="LogInContainer_Form_inputs"
              onSubmit={handleSubmit}
            >
              <div>
                <LabelForm>E-mail</LabelForm>
                <InputForm
                  type={"text"}
                  onChange={handleChange}
                  name="userName"
                  value={values.userName}
                  className="LogInContainer_Form_input"
                />
              </div>
              <div className="LogInContainer_Form_input_password">
                <LabelForm>Hasło</LabelForm>
                <InputForm
                  onChange={handleChange}
                  name="password"
                  type={"password"}
                  value={values.password}
                  className="LogInContainer_Form_input"
                />
                <SmallParagraph>Nie pamiętam hasła</SmallParagraph>
              </div>
              <Button type="submit" className="LogInContainer_Button">
                Zaloguj się
              </Button>
            </form>
          )}
        </Formik>

        <SmallParagraph
        style={{bottom:"10px"}}
          onClick={navigateToCreateAccount}
          className="LogInContainer-signUp"
        >
          Zarejestruj się
        </SmallParagraph>
      </section>
    </>
  );
}

export default LogIn;
