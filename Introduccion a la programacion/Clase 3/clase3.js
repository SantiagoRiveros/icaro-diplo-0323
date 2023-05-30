var nombre = "santiago";
var apellido = "riveros";
var ciudad = "berazategui";

function saludar(dinosaurio, apellido, ciudad) {
  return (
    "Hola mi nombre es " +
    dinosaurio +
    " y mi apellido es " +
    apellido +
    " y vivo en " +
    ciudad
  );
}

console.log(saludar("pedro", "picapiedra", "dubai"));
console.log(saludar(nombre, apellido, ciudad));

var numeroAlAzar = Math.random();

function numeroRandom(numero) {
  return numero;
}

console.log(numeroRandom(numeroAlAzar));

//Operadores logicos
// true y false
// && OPERATOR (AND)
// || OPERATOR (OR)
// ^ OPERATOR (XOR)
// ! OPERATOR (NOT)

// AND
// la unica forma que retorne true es que las dos condiciones que concatena, sean true
// true && true = true
// true && false = false
// false && false = false

// OR
// retorna true, si cualquiera de las dos condiciones que concatena, es true
// true || true = true
// true || false = true
// false || false = false

// XOR
// retorna true, si SOLO uno de las dos condiciones, es true
// true ^ true = false
// true ^ false = true
// false ^ true = true
// false ^ false = false

// NOT
// devuelve, el valor contrario
// !true = false
// !false = true

function triangulo() {
  let asterisco = "*";
  for (let i = 0; i < 7; i++) {
    console.log(asterisco);
    asterisco += "*";
  }
}

console.log(triangulo());
