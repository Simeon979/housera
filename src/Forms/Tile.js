import SingleChoiceCheckBoxForm from "./YesNoMaybeForm";

const question = "Do you want it tiled?";
const inputName = "tile";

const TileForm = ({ onChange, value }) =>
  SingleChoiceCheckBoxForm({
    question,
    inputName,
    onChange,
    checked: value
  });

export { inputName, TileForm };
