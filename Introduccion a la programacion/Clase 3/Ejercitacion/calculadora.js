var sumar = require("./sumar");
var restar = require("./restar");
var dividir = require("./dividir");
var multiplicar = require("./multiplicar");
var elevarAlCuadrado = require("./elevarAlCuadrado");
var elevar = require("./elevar");

console.log(sumar(1, 5)); //6
console.log(restar(4, 1)); //3
console.log(dividir(4, 2)); //2
console.log(dividir(4, 0)); //error
console.log(multiplicar(3, 4)); //12
console.log(multiplicar(3, 0)); // 0
console.log(elevarAlCuadrado(5)); //25
console.log(elevar(2, 4)); //16

console.log(sumar()); //ingresa un valor :(
