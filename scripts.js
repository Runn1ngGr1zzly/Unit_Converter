/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");
const meterToFeet =  3.281;
const literToGallon =  0.264;
const kiloToPound =  2.204;
const feetToMeter = 0.3048;
const gallontoLiter = 3.78541
const poundToKilo = 0.453592

convertBtn.addEventListener("click", function() {
    let baseVal = inputEl.value;
    //convert length
    if (baseVal > 1) {
        lengthEl.innerHTML += `<p>${baseVal} meters = ${baseVal * meterToFeet} feet | </p>`;
    } else {
        lengthEl.innerHTML += `<p>${baseVal} meter = ${baseVal * meterToFeet} feet | </p>`;
    };
    
    //convert volume
    
    //convert mass
});


