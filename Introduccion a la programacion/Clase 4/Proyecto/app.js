/* console.log(process.argv);
if (process.argv[2] === "saludar") console.log("Hola!");
let numero = process.argv[2] + 2;
console.log(numero);
let numeroTipado = parseInt(numero, 10);
numeroTipado++;
console.log(numeroTipado); */

/* function sumar(num1 = false, num2 = false) {
  if (!num1 || !num2) {
    return "Ingresa un dato no seas malo :(";
  } else {
    return num1 + num2;
  }
}

function restar(num1, num2) {
  return num1 - num2;
} */

/* console.log("Aca a continuacion viene lo que metimos por terminal");
console.log(process.argv);
let numero1 = parseInt(process.argv[2], 10);
let numero2 = parseInt(process.argv[3], 10);
console.log(sumar(numero1, numero2)); */

var sumar = require("../../Clase 3/Ejercitacion/sumar");
var restar = require("../../Clase 3/Ejercitacion/restar");
var dividir = require("../../Clase 3/Ejercitacion/dividir");
var multiplicar = require("../../Clase 3/Ejercitacion/multiplicar");
var elevarAlCuadrado = require("../../Clase 3/Ejercitacion/elevarAlCuadrado");
var elevar = require("../../Clase 3/Ejercitacion/elevar");

let numero1 = parseInt(process.argv[3], 10);
let numero2 = parseInt(process.argv[4], 10);

let numero = parseInt("22", 10);
numero++;
console.log("aca va el numero");
console.log(numero);
/* if (process.argv[2] === "sumar") {
  console.log(sumar(numero1, numero2));
} else if (process.argv[2] === "restar") {
  console.log(restar(numero1, numero2));
} else if (process.argv[2] === "dividir") {
  console.log(dividir(numero1, numero2));
} else if (process.argv[2] === "multiplicar") {
  console.log(multiplicar(numero1, numero2));
}
 */
switch (process.argv[2]) {
  case "sumar":
    console.log(sumar(numero1, numero2));
    break;
  case "restar":
    console.log(restar(numero1, numero2));
    break;
  case "multiplicar":
    console.log(multiplicar(numero1, numero2));
    break;
  case "dividir":
    console.log(dividir(numero1, numero2));
    break;
}

console.log(process.argv);
