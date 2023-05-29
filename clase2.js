let hola = 9;
let chau = 10;

const restar = function (numero1, numero2) {
  let resultado = numero1 - numero2;
  return resultado;
};

// nombrefuncion(parametro1, parametro 2)

let resultado = restar(chau, hola);
console.log(resultado);

let numeroRandom = 45;

if (numeroRandom > 50) {
  console.log("A");
} else if (numeroRandom < 20) {
  console.log("Es menor a 20");
} else if (numeroRandom == 44) {
  console.log("este es el numero");
} else {
  console.log("BLAKLDKFDLAKFLADKF");
}

console.log("BLAKLDKFDLAKFLADKF");

let variableSinSentido = 23;

switch (variableSinSentido) {
  case 22:
    console.log("es 22");
    break;
  case 23:
    console.log("es 23");
    break;
  default:
    console.log("no sabemos");
    break;
}

let num = 5;

//i++ es igual a i+1
for (let i = 1; i <= num; i++) {
  console.log(i);
}

let y = 0;
while (y < 3) {
  console.log(y);
  y++;
}

let z = 4;
do {
  console.log("primero esto");
  console.log("segundo francia");
  z++;
} while (z < 3);

let matriz = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(matriz[1]);

console.log(abc[3]);
abc.push("helado de milanesa");
console.log(abc);
abc.unshift("Helado de porotos");
console.log(abc);

//        abc[0]  1    2    3    4    5
let abc = ["a", "b", "c", "d", "e", "f"];
for (let x = 0; x < abc.length; x++) {
  console.log(x);
  console.log(abc[x]);
}

let palabra = "chocolate";
for (let x = 0; x < palabra.length; x++) {
  console.log(palabra[x]);
}
