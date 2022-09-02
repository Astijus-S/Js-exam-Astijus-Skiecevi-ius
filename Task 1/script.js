/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


const form = document.querySelector('form');
const output = document.getElementById('output');

form.addEventListener("input", function(e) {
  let kg = e.target.value;
  let lb = kg * 2.2046;
  let g = kg / 0.0010000;
  let oz = kg * 35.274;
  output.innerHTML = `lb = ${lb}, g = ${g}, oz = ${oz}`;
});

output.style.textAlign = "center";
output.style.fontSize = "40px";