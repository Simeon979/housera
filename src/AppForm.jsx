import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { inputName as bedroomFormName, BedroomForm } from "./Forms/Bedrooms";
import { inputName as priceFormName, PriceForm } from "./Forms/Price";

const appForms = {
  [bedroomFormName]: BedroomForm,
  [priceFormName]: PriceForm
  /*
  [parkingFormName]: ParkingForm,
  [tileFormName]: TileForm,
  [paintFormName]: PaintForm,
  [petFormName]: PetForm,
  [importanceFormName]: ImportanceForm,
  */
};

const FormContainer = styled.form`
  width: 100%;
`;

const AppForm = ({ history }) => {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  const [formState, setFormState] = useState({
    [bedroomFormName]: "",
    [priceFormName]: ""
    /*
  [parkingFormName]: "",
  [tileFormName]: "",
  [paintFormName]: "",
  [petFormName]: "",
  [importanceFormName]: "",
  */
  });

  const handleFieldChange = event => {
    const field = event.target.name;
    let newFormState;
    if (Array.isArray(formState[field])) {
      newFormState = {
        ...formState,
        [field]: [...formState[field], event.target.value]
      };
    } else {
      newFormState = { ...formState, [field]: event.target.value };
    }
    setFormState(newFormState);
  };

  const handlePrevious = () => setCurrentFormIndex(currentFormIndex - 1);
  const handleNext = event => {
    event.preventDefault();
    const newFormIndex = currentFormIndex + 1;
    setCurrentFormIndex(newFormIndex);
  };

  const handleFormComplete = () => {
    history.push("/");
    console.log(formState);
  };

  const CurrentForm = appForms[Object.keys(appForms)[currentFormIndex]];
  const formStart = currentFormIndex === 0;
  const formEnd = currentFormIndex + 1 === Object.keys(appForms).length;

  console.log(formState);
  return (
    <FormContainer onSubmit={formEnd ? handleFormComplete : handleNext}>
      <CurrentForm onChange={handleFieldChange} />
      {!formStart && (
        <button onClick={handlePrevious} type="button">
          Previous
        </button>
      )}
      <input type="submit" value={formEnd ? "Submit" : "Next"} />
    </FormContainer>
  );
};

const AppFormWithHistory = withRouter(AppForm);

export default AppFormWithHistory;
