function funcionA() {
  return true;
}

let funcionB = function () {
  return true;
};

let funcionC = () => true;

let funcionD = (dato) => {
  console.log("funcion");
  return dato;
};

console.log(funcionD("hola"));

let variable = 1;

if (variable) {
  console.log("variable");
}

// true = 1 false=0

// creamos una funcion que recibe un dato como párametro
// lo concatena, y devuelve un saludo
function saludar(dato) {
  //aca lo concatena y retorna
  return "hola " + dato;
}

// declaramos otra funcion que recibe una funcion como parametro
function saludoCompleto(funcion) {
  // aca declaramos una variable, que concatena
  // lo que devuelve la funcion que entra como parametro
  // junto a " espero que tengas lindo dia!"
  let saludo = funcion + " espero que tengas lindo dia!";
  // retornamos la ultima concatenacion
  return saludo;
}

// consologueamos saludoCompleto, le pasamos por parametro la funcion Saludar
// y al a funcion saludar le pasamos como parametro "Leo Messi"
console.log(saludoCompleto(saludar("Leo Messi")));

// devuelve "hola Leo Messi espero que tengas lindo dia!""

// creamos una funcion
// que no recibe nada y devuelve un console log que dice "Alerta!"

function darAlerta() {
  // aca consologuea
  return console.log("Alerta!");
}

// creamos otra funcion que recibe como parametro una funcion
// al parametro funcion le asigno una funcion anonima predeterminada
// porque sino rompe
function ejecutarAlerta(funcion = function () {}) {
  //aqui la llama para su ejecuion
  funcion();
  // y retornamos otro console.log
  return console.log("La alerta fue dada");
}

//aca llamamos a la funcion ejecutarAlerta
// pasandole como argumento darAlerta
ejecutarAlerta(darAlerta());

// funcion flecha que utiliza los template strings
let saludarA = (nombre) => `Hola ${nombre}`;

//funcion flecha que concatena el parametro con "Hola "
// PD: no le pusimos parentesis, cuando son de una sola linea, y un solo parametro
// podemos tomarnos esa libertad con las arrow function
let saludarB = (nombre) => "Hola " + nombre;

// Cuando es mas de una linea, o mas de un argumento le ponemos parentesis al argumento

// Creamos una variable, cuyo valor, es una arrow function
// Esta arrow function recibe 2 parametros: callback, y arraynombres
let saludarRepetidamente = (callback, arrayNombres) => {
  // Recorremos con un ciclo for, todo el arrayNombres
  for (let i = 0; i < arrayNombres.length; i++) {
    // Por cada indice que recorra
    // Va a hacer un console log, del callback que entra como parametro
    // y a este callback, le pasamos como parametro
    // EL indice que estamos recorriendo en este momento
    console.log(callback(arrayNombres[i]));
  }
};

// Declaramos un array de strings de nombres
let nombres = ["Juan", "Carlos", "Roberto"];

//Llamamos a la funcion, pasandole como argumento la funcion flecha saludarA
// y segundo parametro el array con nombres
saludarRepetidamente(saludarA, nombres);

//Creamos una variable cuyo valor es una funcion flecha
// esta variable recibe 2 parametros
// el primero es nombre, el segundo indice
//Esta funcion devuelve un console log concatenando los parametros con un string
let funcionCallback = (nombre, indice) =>
  console.log(`El elemento en la posicion ${indice} es ${nombre}`);

//Consologueamos el metodo forEach, aplicado al array nombres
// y le pasamos como parametro al forEach
// la funcion declarada arriba
nombres.forEach(funcionCallback);

// Hacemos otro array con juguetes
// PD: el avioncita ta reservado
let juguetes = ["Pelota", "Coche", "Muñeca", "Avioncito", "Mi corazon"];

//Aca ejecutamos un foreach
//Recordemos que al callback que recibe forEach como argumento
// SIEMPRE el primer argumento que recibe que es obligatorio
// va a ser cada elemento del array en si
// El segundo que es opcional es el numero de indice del elemento
juguetes.forEach((juguete) => console.log(juguete));

// Creamos una variable que es un array de numeros
let arrayNumbers = [0, 1, 2, 3, 4];

let arrayVacio = [];

//Hacemos un foreach del array de numeros
arrayNumbers.forEach((numero) => arrayVacio.push(numero));

console.log(arrayVacio);

// podemos ahcer asignaciones dentro del forEach
// en este caso le pasamos 2 parametros, el numero en si, y el indice
// Entonces, hacemos una asignacion
// Donde en cada indice del array, le asignamos el valor
// del numero (Que en si es el valor que ya tenia ese indice) + 1
arrayNumbers.forEach((numero, indice) => (arrayNumbers[indice] = numero + 1));

console.log(arrayNumbers);

let arrayMap = arrayNumbers.map((numero, indice) => `${numero} ${indice} hola`);

console.log(arrayMap);

let arrayMap2 = arrayNumbers.map((numero) => numero + 1);

console.log(arrayMap2);

//Creamos una array de numeros
let arrayParesEImpares = [1, 2, 3, 4, 5, 6, 7];

//Vamos a probar el filter, que devuelva solo los mayores de 4
let mayorQueCuatro = arrayParesEImpares.filter((numero) => numero > 4);

console.log(mayorQueCuatro);

let esPar = arrayParesEImpares.filter((numero) => numero % 2 === 0);

console.log("estos son los numeros pares:");
console.log(esPar);

let esImpar = arrayParesEImpares.filter((numero) => numero % 2 != 0);

console.log("estos son los numeros impares:");
console.log(esImpar);

let usuarios = [
  {
    nombre: "juan",
    apellido: "gomez",
  },
  { nombre: "pedro", apellido: "perez" },
  { nombre: "aristobulo", apellido: "gomez" },
];

let esGomez = usuarios.filter((usuario) => usuario.apellido === "gomez")
console.log(esGomez)


// Declaramos un array de puros numeros 1
let numero1 = [1,1,1,1,1,1,1,1,1,1]

// el reduce, si o si, recibe 2 parametros
// el primero es un acumulador, o contador
// el segundo es cada indice del array
// el acumulador siempre comienza en 0
let numerosSumados = numero1.reduce((acumulador, numero) => acumulador + numero)
console.log(numerosSumados)

let numerosRandom = [431, 2, 43, 1, 2, 6, 90, 11111, 3]
let promedio = numerosRandom.reduce((acumulador, numero) => acumulador + numero)
console.log(promedio / numerosRandom.length)