const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");
const meterToFeet =  3.281;
const literToGallon =  0.264;
const kiloToPound =  2.204;
const feetToMeter = 0.3048;
const gallontoLiter = 3.78541;
const poundToKilo = 0.453592;

convertBtn.addEventListener("click", function() {
    let baseVal = inputEl.value;
    //convert length
    if (baseVal > 1) {
        lengthEl.innerHTML += `<p>${baseVal} meters = ${baseVal * meterToFeet} feet | ${baseVal} feet = ${baseVal * feetToMeter} meter</p>`;
    } else {
        lengthEl.innerHTML += `<p>${baseVal} meter = ${baseVal * meterToFeet} feet | ${baseVal} foot = ${baseVal * feetToMeter} meters</p>`;
    };
    //convert volume
    if (baseVal > 1) {
        volumeEl.innerHTML += `<p>${baseVal} liters = ${baseVal * literToGallon} gallons | ${baseVal} gallons = ${baseVal * gallontoLiter} liters</p>`;
    } else {
        volumeEl.innerHTML += `<p>${baseVal} liter = ${baseVal * literToGallon} gallons | ${baseVal} gallon = ${baseVal * gallontoLiter} liters`;
    };
    //convert mass
    if (baseVal > 1) {
        massEl.innerHTML += `<p>${baseVal} kilograms = ${baseVal * kiloToPound} pounds | ${baseVal} pounds = ${baseVal * poundToKilo} kilograms</p>`;
    } else {
        massEl.innerHTML += `<p>${baseVal} kilogram = ${baseVal * kiloToPound} pounds | ${baseVal} pound = ${baseVal * poundToKilo} kilograms</p>`;
    };
});


