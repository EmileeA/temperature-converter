console.log("hi from js");

const printToDom = (divId, textToPrint) =>
 {
  const selectedDiv = document.getElementById(divId);
 selectedDiv.innerHTML = textToPrint;
 };

  const celsiusButton = document.getElementById("gridRadios1").checked;
  const fahrenheitButton = document.getElementById("gridRadios2").checked;
  const temp = document.getElementById("number").value;
 

//Boiler Plate
const toCelsius = () => {
if (celsiusButton === 'true') {
    const newTemp = Math.floor(temp * 9 / 5 + 32);
}
printToDOM('output', convertedCTemp);
};


const toFahrenheit =  () => {
    if (fahrenheitButton === 'true') {
        const newTempF = Math.floor((temp - 32) * 5 / 9);
    }
    printToDOM('output', convertedFTemp);
};

// Get a reference to the button element in the DOM
const button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = e => {
  console.log("event", e);
  const buttonID = e.target.id;
  if (buttonID === 'convertButton'&& fahrenheitButton === 'true') {
    toFahrenheit();
  } else if (buttonID === 'convertButton' && celsiusButton === 'true') {
      toCelsius();
};

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
