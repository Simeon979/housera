import SingleChoiceCheckBoxForm from "./YesNoMaybeForm";

const question = "What about parking space?";
const inputName = "parking";

const ParkingForm = ({ onChange, value }) =>
  SingleChoiceCheckBoxForm({
    question,
    inputName,
    onChange,
    checked: value
  });

export { inputName, ParkingForm };
