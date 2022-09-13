let btnConvert = document.getElementById("btn-convert");
let inputEl = document.getElementById("input-field");
let conversionOne = document.getElementById("conversion-1");
let conversionTwo = document.getElementById("conversion-2");
let conversionThree = document.getElementById("conversion-3");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

btnConvert.addEventListener("click", function () {
  let firstConversion = meterToFeet;
  let secondConversion = literToGallon;
  let thirdConversion = kilogramToPound;

  conversionOne.textContent = `1 meter = ${meterToFeet} Feet
  | ${firstConversion} meters = ${firstConversion * meterToFeet} Feet`;

  conversionTwo.textContent = `1 liter = ${literToGallon} Feet
  | ${secondConversion} liters = ${secondConversion * literToGallon} Gallons`;

  conversionThree.textContent = `1 Kilogram = ${kilogramToPound} Kilogram
  | ${thirdConversion} Pounds = ${thirdConversion * kilogramToPound} Feet`;
});
