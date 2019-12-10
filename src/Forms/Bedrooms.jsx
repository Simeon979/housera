import SingleChoiceForm from "./SingleChoiceForm";

const question = "How many bedrooms do you want";
const inputName = "bedroom";
const keyValue = [
  ["1", "one"],
  ["2", "two"],
  ["3", "three"],
  ["4+", "fourAndAbove"]
];

const BedroomForm = ({ onChange }) =>
  SingleChoiceForm({ question, inputName, keyValue, onChange });

export { inputName, BedroomForm };
