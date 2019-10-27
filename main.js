console.log("hi from js");

//getting a reference to all buttons
const clearButton = document.getElementById("clearBtn");
const convertButton = document.getElementById("convertBtn");
const temp = document.getElementById("inputNumber");
const outPut = document.getElementById("outPut");

//getting a reference to all radio buttons
const celsiusButton = document.getElementById("gridRadios1");
const fahrenheitButton = document.getElementById("gridRadios2");

//print to dom
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

//clear
const clearOutputInput = () => {
  temp.value = "";
  outPut.innerHTML = "";
};

//converting the temp passed in to celsis and converting that temperature to the print to dom function
const toCelsius = temp => {
  const convertedCTemp = Math.floor((temp * 9) / 5 + 32);
  printToDom("outPut", convertedCTemp);
  console.log(convertedCTemp);
};

//converting the temp passed in to fahrenheit and converting that temperature to the print to dom function
const toFahrenheit = temp => {
  const convertedFTemp = Math.floor(((temp - 32) * 5) / 9);
  printToDom("outPut", convertedFTemp);
  console.log(convertedFTemp);
};

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = e => {
  console.log("event", e, temp.value);
  console.log("fahrenheit",fahrenheitButton.checked);
  console.log("celsius",celsiusButton.checked);

  const buttonID = e.target.id;
  // console.log(fahrenheitButton);

  if (buttonID === "convertBtn" && fahrenheitButton.checked) {
    toFahrenheit(temp.value);
  } else if (buttonID === "convertBtn" && celsiusButton.checked) {
    toCelsius(temp.value);
  }
};

// Assign a function to be executed when the button is clicked
convertButton.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clearOutputInput);
document.body.addEventListener("keyup", function(e) {
  console.log(e);
  e.preventDefault();
  e.stopPropagation();
  if (e.keyCode === 13) {
    console.log(e);
    if (fahrenheitButton.checked) {
      toFahrenheit(temp.value);
    } else if (celsiusButton.checked) {
      toCelsius(temp.value);
    }
  }
});
