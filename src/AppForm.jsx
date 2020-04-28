import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { inputName as bedroomFormName, BedroomForm } from "./Forms/Bedrooms";
import { inputName as priceFormName, PriceForm } from "./Forms/Price";
import { inputName as parkingFormName, ParkingForm } from "./Forms/Parking";
import { inputName as petFormName, PetForm } from "./Forms/Pets";
import { inputName as tileFormName, TileForm } from "./Forms/Tile";
import { inputName as paintFormName, PaintForm } from "./Forms/Paint";
import { inputName as searchFormName, SearchForm } from "./Forms/Search";
/*
import topLeft from "./images/top-left.svg";
import centerLeft from "./images/center-left.svg";
import centerRight from "./images/center-right.svg";
import bottomLeft from "./images/bottom-left.svg";
import bottom from "./images/bottom.svg";
*/
const appForms = {
  [bedroomFormName]: BedroomForm,
  [priceFormName]: PriceForm,
  [parkingFormName]: ParkingForm,
  [petFormName]: PetForm,
  [tileFormName]: TileForm,
  [paintFormName]: PaintForm,
  [searchFormName]: SearchForm,
  /*
  [importanceFormName]: ImportanceForm,
  */
};

const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ActionContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1em;
`;

const AppForm = ({ history }) => {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  const [formState, setFormState] = useState({
    [bedroomFormName]: "",
    [priceFormName]: "",
    [parkingFormName]: "",
    [petFormName]: "",
    [tileFormName]: "",
    [paintFormName]: "",
    [searchFormName]: "",
    //  [importanceFormName]: "",
  });

  const handleFieldChange = (event) => {
    const eventName = event.target.name;
    const eventValue = event.target.value;
    let newFormState;
    const fieldState = formState[eventName];
    // if the field updated can accept multiple values like a checkbox
    // add the new value with previously selected values
    // or remove if the value is already present
    if (Array.isArray(fieldState)) {
      const newFieldState = fieldState.includes(eventValue)
        ? fieldState.filter((value) => value !== eventValue)
        : fieldState.concat(eventValue);
      newFormState = {
        ...formState,
        [eventName]: newFieldState,
      };
    } else {
      newFormState = { ...formState, [eventName]: eventValue };
    }
    setFormState(newFormState);
  };

  const handlePrevious = () => setCurrentFormIndex(currentFormIndex - 1);
  const handleNext = (event) => {
    event.preventDefault();
    const newFormIndex = currentFormIndex + 1;
    setCurrentFormIndex(newFormIndex);
  };

  const handleFormComplete = () => {
    // eslint-disable-next-line react/prop-types
    history.push({
      pathname: "/listings",
    });
    console.log(formState);
  };

  const CurrentForm = appForms[Object.keys(appForms)[currentFormIndex]];
  const currentFormValue = formState[Object.keys(formState)[currentFormIndex]];

  const formStart = currentFormIndex === 0;
  const formEnd = currentFormIndex + 1 === Object.keys(appForms).length;

  console.log(Object.keys(formState)[currentFormIndex], currentFormValue);
  return (
    <FormContainer onSubmit={formEnd ? handleFormComplete : handleNext}>
      <CurrentForm onChange={handleFieldChange} value={currentFormValue} />
      <ActionContainer>
        {!formStart && (
          <button
            onClick={handlePrevious}
            type="button"
            className="text-black hover:shadow-outline font-bold rounded border-4 border-gray-300 hover:shadow-outline px-3 py-2 mr-5 w-1/4"
          >
            Previous
          </button>
        )}
        <button
          type="submit"
          className="text-black hover:shadow-outline font-bold rounded border-4 border-gray-300 hover:shadow-outline px-3 py-2 w-1/4"
        >
          {formEnd ? "Submit" : "Next"}
        </button>
      </ActionContainer>
    </FormContainer>
  );
};

const AppFormWithHistory = withRouter(AppForm);

export default AppFormWithHistory;
