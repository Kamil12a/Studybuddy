import arrow from "../Photos/leftArrow.png";
import noDelete from "./photos/no.png";
import yesDelete from "./photos/yes.png";
import { useNavigate } from "react-router-dom";
import {
  MediumTitle,
  SelectInput,
  InputForm,
  SmallLabelForm,
  MedParagraph,
  SimpleBlockInput,
  Button,
} from "../../Components/variables";
import { useState } from "react";
import "./deleteGroup.css";
import Navigation from "../../Components/Navigation/Navigation";
function DeleteGroup() {
  const navigate = useNavigate();
  return (
    <>
      <Navigation />
      <section className=" section_delete_group">
        <header className="section-create_group_Header">
          <img
            onClick={() => {
              navigate(-1);
            }}
            className="section-create_group_Header_arrow "
            src={arrow}
            alt="arrow left"
          />
          <MediumTitle className="section-create_group_title">
            Statistica{" "}
          </MediumTitle>
        </header>
        <div className="section_delete_group_container">
          <MediumTitle className="section_delete_group_title">
            Zakończyć grupę?
          </MediumTitle>
          <div className="section_delete_group_container_btn">
            <SimpleBlockInput
              onClick={() => {
                navigate(-1);
              }}
            >
              <img
                className="image_nodelete_group"
                src={noDelete}
                alt="delete"
              />
              nie
            </SimpleBlockInput>
            <SimpleBlockInput>
              {" "}
              <img
                className="image_delete_group"
                src={yesDelete}
                alt="delete"
              />
              tak
            </SimpleBlockInput>
          </div>
        </div>
      </section>
    </>
  );
}

export default DeleteGroup;
