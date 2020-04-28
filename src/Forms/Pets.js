import SingleChoiceCheckBoxForm from "./YesNoMaybeForm";

const question = "Do you have pets";
const inputName = "pets";

const PetForm = ({ onChange, value }) =>
  SingleChoiceCheckBoxForm({
    question,
    inputName,
    onChange,
    checked: value
  });

export { inputName, PetForm };
