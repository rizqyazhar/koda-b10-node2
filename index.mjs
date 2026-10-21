import { convertDateWMoment, convertDateWithoutMoment } from "./helper.mjs";

const userInput = "24-04-2015";

// MOMENT PACKAGE

console.log(convertDateWMoment(userInput));

console.log(convertDateWithoutMoment(userInput));
