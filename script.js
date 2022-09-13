let btnConvert = document.getElementById("btn-convert");
let inputEl = document.getElementById("input-field");
let conversionEl = document.getElementById("conversion-p");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

btnConvert.addEventListener("click", function () {
  let startConversion = meterToFeet;

  conversionEl.textContent = `1 meter = ${meterToFeet} Feet
  | ${startConversion} meters = ${startConversion * meterToFeet} Feet
  `;
});
