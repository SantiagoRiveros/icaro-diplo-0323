var palabra = "milanesa";
var matriz = ["m", "i", "l", "a", "n", "e", "s", "a"];

console.log(palabra[3]);
console.log(matriz[3]);
console.log(palabra == matriz);
console.log(matriz);
console.log(matriz.join(""));
let nuevaPalabra = matriz.join("");
console.log(palabra == nuevaPalabra);

console.log(palabra.length);

palabra += "s";

console.log(palabra);
console.log(palabra == nuevaPalabra);

var futbolista = {
  nombre: "Lionel",
  apellido: "Messi",
};
console.log(futbolista);

let perroMessi = "Hulk";

futbolista.nombrePerro = perroMessi;
console.log(futbolista);
futbolista.nombrePerro = "no tiene mas lo regalo :(";
console.log(futbolista);

futbolista.capo = function (equipoSegundo) {
  return "aguante " + futbolista.apellido + " fuira " + equipoSegundo;
};

console.log(futbolista.capo("Francia"));

//ejemplo de los datos de un usuario en red social
var user = {
  name: "Santiago",
  lastName: "Riveros",
  country: "Argentina",
  age: 30,
  posts: ["a", "b", "c"],
  single: true,
  photos: {
    profilePhotos: "",
    bannerPhoto: "",
    randomObject: {
      anotherRandom: {
        wtf: "wtf",
      },
    },
  },
};

let arrayObject = [futbolista, user];

console.log(arrayObject[1].photos.randomObject.anotherRandom.wtf);
