console.log("hi from js");

//getting a reference to all buttons
const clearButton = document.getElementById('clearBtn');
const convertButton = document.getElementById('convertBtn');
//getting a reference to all radio buttons
const celsiusButton = document.getElementById("gridRadios1").checked;
const fahrenheitButton = document.getElementById("gridRadios2").checked;
  
//print to dom 
const printToDom = (divId, textToPrint) =>{
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
 };

  

//converting the temp passed in to celsis and converting that temperature to the print to dom function
const toCelsius = (temp) => {
    const convertedCTemp = Math.floor(temp * 9 / 5 + 32);
    printToDom('outPut', convertedCTemp);
    console.log(convertedCTemp);
};

//converting the temp passed in to fahrenheit and converting that temperature to the print to dom function
const toFahrenheit =  (temp) => {
    const convertedFTemp = Math.floor((temp - 32) * 5 / 9);
    printToDom('outPut', convertedFTemp);
    console.log(convertedFTemp);
};



// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = e => {
 
  const temp = document.getElementById("inputNumber").value;
  console.log("event", e, temp);
  console.log(temp);
  
  const buttonID = e.target.id;
  console.log(fahrenheitButton);
  if (e.keyCode === 13){
    if (buttonID === 'convertBtn' && fahrenheitButton === true) {
      toFahrenheit(temp);
    } else if (buttonID === 'convertBtn' && celsiusButton === true) {
        toCelsius(temp);
    }
  }
  if (buttonID === 'convertBtn' && fahrenheitButton === true) {
    toFahrenheit(temp);
  } else if (buttonID === 'convertBtn' && celsiusButton === true) {
      toCelsius(temp);
  }
};

// Assign a function to be executed when the button is clicked
convertButton.addEventListener('click', determineConverter);
convertButton.addEventListener('keyup', determineConverter);