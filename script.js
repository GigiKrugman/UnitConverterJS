let btnConvert = document.getElementById("btn-convert");
let inputEl = document.getElementById("input-field");
let conversionOne = document.getElementById("conversion-1");
let conversionTwo = document.getElementById("conversion-2");
let conversionThree = document.getElementById("conversion-3");

const meterToFeet = (3.281).toFixed(2);
const feetToMeter = (0.3048).toFixed(2);

const literToGallon = (0.264).toFixed(2);
const gallonToLiter = (3.785).toFixed(2);

const kilogramToPound = (2.204).toFixed(2);
const poundToKilogram = (0.453592).toFixed(2);

btnConvert.addEventListener("click", function () {
  let firstConversion = inputEl.value;
  let secondConversion = inputEl.value;
  let thirdConversion = inputEl.value;

  conversionOne.textContent = `1 meter = ${meterToFeet} Feet
  | ${firstConversion} meters = ${(firstConversion * meterToFeet).toFixed(
    2
  )} Feet |
  ${firstConversion} Feet = ${(firstConversion * feetToMeter).toFixed(
    2
  )} Meters`;

  conversionTwo.textContent = `1 liter = ${literToGallon} Gallons
  | ${secondConversion} liters = ${(secondConversion * gallonToLiter).toFixed(
    2
  )} Gallons |
  ${secondConversion} Gallon = ${(firstConversion * gallonToLiter).toFixed(
    2
  )} Liters`;

  conversionThree.textContent = `1 Kilogram = ${kilogramToPound} Pounds
  | ${thirdConversion} Pounds = ${(thirdConversion * poundToKilogram).toFixed(
    2
  )} Kilograms |
  ${thirdConversion} Pounds = ${(firstConversion * poundToKilogram).toFixed(
    2
  )} Kilograms`;
});
