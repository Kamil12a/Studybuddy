import {
  Button,
  MediumTitle,
  SimpleBlockInput,
} from "../../Components/variables.js";
import arrow from "./photos/leftArrow.png";
import biology from "./photos/allDepartmens/biology.png";
import chemistry from "./photos/allDepartmens/chemistry.png";
import economy from "./photos/allDepartmens/economy.png";
import philological from "./photos/allDepartmens/philological.png";
import history from "./photos/allDepartmens/history.png";
import MFI from "./photos/allDepartmens/MFI.png";
import social from "./photos/allDepartmens/social.png";
import geography from "./photos/allDepartmens/geography.png";
import law from "./photos/allDepartmens/law.png";
import management from "./photos/allDepartmens/management.png";
import bioTech from "./photos/allDepartmens/bioTech.png";

function ChooseDepartment({ yourDepartment, setYourDepartment, setState }) {
  const departments = [
    {
      name: "Wydział Biologii",
      src: biology,
    },
    { name: "Wydział Chemii", src: chemistry },
    { name: "Wydział Ekonomiczny", src: economy },
    { name: "Wydział Filologiczny", src: philological },
    { name: "Wydział Historyczny", src: history },
    { name: "Wydział MatematykiFizyki i Informatyki", src: MFI },
    { name: "Wydział Oceanografiii Geografii", src: geography },
    { name: "Wydział Nauk Społecznych", src: social },
    ,
    { name: "Wydział Prawa i Administracji", src: law },
    { name: "Wydział Zarządzania", src: management },
    {
      name: "Międzyuczelniany Wydział Biotechnologii UG i GUMed",
      src: bioTech,
    },
  ];
  const chooseDepartment = (e) => {
    setYourDepartment(e.target.name);
    console.log(yourDepartment);
  };

  const backNavigate = () => {
    setState(0);
  };
  return (
    <>
      <section className="chooseYourDepartment">
        <header className=" chooseYourDepartment_Header">
          <img
            onClick={backNavigate}
            className="chooseYourDepartment_Header_arrow "
            src={arrow}
            alt="arrow left"
          />
          <MediumTitle className="chooseYourDepartment_Header_title">
            Wybierz Wydział
          </MediumTitle>
        </header>
        <div className="chooseYourDepartment_allDepartments">
          {departments.map((deparments, index) => {
            if (deparments.name == yourDepartment) {
              return (
                <>
                  <SimpleBlockInput
                    style={{ border: "2px solid black" }}
                    name={deparments.name}
                    onClick={chooseDepartment}
                    key={index + deparments}
                    className="departmentBlock"
                  >
                    {deparments.name}
                    <img
                      onClick={backNavigate}
                      className="departmentBlockImage "
                      src={deparments.src}
                      alt="deparment_name"
                    />
                  </SimpleBlockInput>
                </>
              );
            } else {
              return (
                <>
                  <SimpleBlockInput
                    name={deparments.name}
                    onClick={chooseDepartment}
                    key={index + deparments}
                    className="departmentBlock"
                  >
                    {deparments.name}
                    <img
                      onClick={backNavigate}
                      className="departmentBlockImage "
                      src={deparments.src}
                      alt="deparment_name"
                    />
                  </SimpleBlockInput>
                </>
              );
            }
          })}
        </div>
        <Button onClick={backNavigate} className="chooseYourDepartment_button">
          Zatwierdź
        </Button>
      </section>
    </>
  );
}

export default ChooseDepartment;
