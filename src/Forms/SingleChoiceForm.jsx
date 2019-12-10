import React from "react";
import styled from "styled-components";

const FormContainer = styled.fieldset`
  width: 80%;
  margin: auto;
  border: 2px solid;
  border-color: #6dd5ed #2193b0;
`;

const FormQuestion = styled.legend`
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 1.5em;
  }
`;

const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FormOption = styled.p`
  width: 45%;
  text-align: center;
  font-size: 1.15em;
  flex-shrink: 0;
  @media screen and (min-width: 768px) {
    width: 30%;
    font-size: 1.5em;
  }
  @media screen and (min-width: 1024px) {
    width: 22%;
    font-size: 2em;
  }
`;

const FormInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:active ~ label {
    opacity: 1;
  }
  &:checked ~ label {
    opacity: 1;
    background: #2193b0; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #6dd5ed,
      #2193b0
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #6dd5ed,
      #2193b0
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
  }
`;
const FormLabel = styled.label`
  display: block;
  border: 1px solid #6dd5ed;
  padding: 20px;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3s;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 0 11px #2193b0;
  }
`;

const Form = ({ question, inputName, keyValue, onChange }) => {
  return (
    <FormContainer>
      <FormQuestion>{question}</FormQuestion>
      <OptionContainer>
        {keyValue.map(([key, value]) => (
          <FormOption key={key}>
            <FormInput
              type="radio"
              name={inputName}
              id={value}
              value={value}
              onChange={onChange}
              required
            />
            <FormLabel htmlFor={value}>{key}</FormLabel>
          </FormOption>
        ))}
      </OptionContainer>
    </FormContainer>
  );
};

export default Form;
