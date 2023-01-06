import { useNavigate } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
import "./groups.css";
import {
  SelectInput,
  InputForm,
  SmallParagraph,
  Button,
  SimpleBlockInput,
} from "../../Components/variables.js";
import ChooseSubjectFilterGroup from "../ChooseSubjectFilterGroup/ChooseSubjectFilterGroup";
import GroupContainer from "../GroupContainer/GroupContainer";
import { useState } from "react";
import SortSection from "../SortSection/SortSection";
function Groups() {
  const [state, setState] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <section className=" section-groups">
        {state === 0 && (
          <>
            <Navigation />
            <div className="section-groups_Sort">
              <InputForm
                placeholder="Szukaj"
                type={"text"}
                name="search"
                className="section-groups-input-searchByName"
              />
              <SelectInput
               onClick={() => {
                setState(2);
              }}
                className="section-groups_sort"
                name="Sortuj"
              >
                <option
                  
                  value=""
                >
                  Sortuj
                </option>
              </SelectInput>
            </div>
            <div>
              <SmallParagraph className="section-groups_filter">
                Filtry
              </SmallParagraph>
              <div className="section-groups_sort_studyFields">
                <SelectInput
                  className="section-groups_sort_department"
                  name="deparment"
                >
                  <option value="">Wydział</option>
                </SelectInput>
                <SelectInput className="section-groups_sort_field" name="field">
                  <option value="">Kierunek</option>
                </SelectInput>
                <SelectInput
                  onClick={() => {
                    setState(1);
                  }}
                  className="section-groups_sort_subject"
                  name="subject"
                >
                  <option value="">Przedmiot</option>
                </SelectInput>
              </div>
            </div>
            <div className="groupsContainer-block">
              <GroupContainer />
              <GroupContainer />
            </div>
            <div className="groupsContainer-block">
              <GroupContainer />
              <GroupContainer />
            </div>
           

            <SimpleBlockInput
              onClick={() => {
                navigate("../createGroup_ChooseSubject");
              }}
              className="section-groups_button"
            >
              Utwórz nową grupę
            </SimpleBlockInput>
          </>
        )}

        {state === 1 && (
          <>
            <ChooseSubjectFilterGroup setState={setState} />
          </>
        )}
        {state === 2 && (
          <>
            <SortSection setState={setState} />
          </>
        )}
      </section>
    </>
  );
}

export default Groups;
