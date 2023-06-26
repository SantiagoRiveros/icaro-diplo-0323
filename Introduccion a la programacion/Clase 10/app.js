//SCOPE
// Let es legible y accesible solo de manera descendiente de su scope
// var es de manera global en el archivo
// SCOPE = contexto de ejecucion, osea el lugar donde se ejecuta
// Si es let no sale de su scope, si es var alcanza todos los scopes

let saludo = "Hola"

function prueba(){

    var a = "Juan"
    var b = "Ricardo"
    let c = "Carlos"
    // Creo un if en el que SIEMPRE va a acceder
    if(true){
        //Intento sobrescribir las variables de arriba
        var a = "Pedro"
        let b = "Mica"
        if(true){
            console.log(b)
        }
    }

    console.log(a)
    console.log(b)
    console.log(saludo)
}

prueba()

// DESTRUCTURING

var [a, b, c] = [1, 2, 3]
console.log(a) // 1
console.log(b) // 2
console.log(c) // 3

// podemos darle valor por default para evitar fallas
var [a = 1] = []
console.log(a) //1

// como le llega un valor obviamos el valor por defecto
var [a = 1] = [5]
console.log(a)  // 5

var nombre = "Marcos"
var edad = 30
var [nombre, edad] = ["Marcos", 30]
console.log(nombre)
console.log(edad)

// Hay undato el del segundo indice que quiero omitir, entonces no le asigno variable
var [nombre, ,apellido] = ["Marcos", 30, "Ronaldinho"]
console.log(nombre)
console.log(apellido)

var {nombre, apellido} = {nombre: "Juan", apellido: "Aguirre"}
console.log(nombre) // Juan
console.log(apellido) // Aguirre

// Hice un objeto absurdamente grande para solo sacarle una propiedad
const objetoAbsurdamenteGrande = {
    nombre: "Juan",
    apellido: "Aguirre",
    edad: 25,
    hobbies: ['futbol', 'crossfit'],
    trabajo: "Desarrollador",
    nacionalidad: 'argentina',
    mascotas: true,
    altura: 1.80
}


//creo una funcion para desestructurar
function desestructurar({nombre}){
    // consologueo el nombre con un texto random
    console.log("Nombre desestructurado: " + nombre)
}

// llamo la funcion
desestructurar(objetoAbsurdamenteGrande);

// SPREAD OPERATOR
function unir(...y){
    console.log(y)
}
unir(3, 4, "hola")

function desunir(x, y, z){
    console.log(x + y + z)
}

desunir(...[1, 2, 3])