import SingleChoiceForm from "./SingleChoiceForm";

const question = "What is your price range";
const inputName = "priceRange";
const keyValue = [
  ["below 50, 000", "zeroToFifty"],
  ["50, 000 - 70, 000", "fiftytoSeventy"],
  ["70, 000 - 100, 000", "seventyToHundred"],
  ["100, 000 - 150, 000", "hundredToOneFifty"],
  ["150, 000 - 200, 000", "oneFiftyToTwoHundred"],
  ["200, 000 - 350, 000", "twoHundredtoThreeFifty"],
  ["350, 000 and above", "threeFiftyAndAbove"],
  ["500, 000", "fh"]
];

const PriceForm = ({ onChange }) =>
  SingleChoiceForm({ question, inputName, keyValue, onChange });

export { inputName, PriceForm };
