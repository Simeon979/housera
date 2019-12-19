import SingleChoiceCheckBoxForm from "./YesNoMaybeForm";

const question = "Do you want a painted house?";
const inputName = "paint";

const PaintForm = ({ onChange, value }) =>
  SingleChoiceCheckBoxForm({
    question,
    inputName,
    onChange,
    checked: value
  });

export { inputName, PaintForm };
