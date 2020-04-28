import React from "react";
import PropType from "prop-types";
import styled from "styled-components";

const FormContainer = styled.fieldset`
  width: 80%;
  border: 2px solid;
  border-color: #6dd5ed #2193b0;
`;

const FormQuestion = styled.legend`
  text-transform: uppercase;
  padding: 10px;
  @media screen and (min-width: 768px) {
    font-size: 1.5em;
  }
`;

const FormOptionsContainer = styled.ul`
  width: 50%;
  margin: auto;
  padding: 0;
  list-style-type: none;
  font-size: 1.5em;
  @media screen and (min-width: 600px) {
    width: 30%;
    font-size: 1.8em;
  }
  @media screen and (min-width: 1024px) {
    width: 25%;
    font-size: 2em;
  }
`;

const FormOption = styled.li`
  width: 100%;
  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const FormInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  &:checked ~ label::before {
    background-color: #6dd5ed;
    border-color: #2193b0;
  }
`;

const FormLabel = styled.label`
  display: block;
  padding-bottom: 5px;
  &::before {
    content: "";
    position: relative;
    top: 15px;
    border: solid 1px black;
    display: inline-block;
    margin-right: 10px;
    width: 2em;
    height: 2em;
    margin-right: 20px;
  }
  &:hover::before,
  &:focus::before,
  &:active::before {
    box-shadow: 0 0 11px #2193b0;
  }
`;

const Form = ({ question, inputName, displayValueMap, onChange, checked }) => (
  <FormContainer>
    <FormQuestion>{question}</FormQuestion>
    <FormOptionsContainer>
      {displayValueMap.map(([display, value]) => (
        <FormOption key={value}>
          <FormInput
            type="checkbox"
            name={inputName}
            id={value}
            value={value}
            onChange={onChange}
            checked={checked.includes(value)}
          />
          <FormLabel htmlFor={value}>{display}</FormLabel>
        </FormOption>
      ))}
    </FormOptionsContainer>
  </FormContainer>
);

Form.propTypes = {
  question: PropType.string.isRequired,
  inputName: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  checked: PropType.arrayOf(PropType.string).isRequired,
  displayValueMap: PropType.arrayOf(PropType.arrayOf(PropType.string))
    .isRequired,
};

export default Form;
