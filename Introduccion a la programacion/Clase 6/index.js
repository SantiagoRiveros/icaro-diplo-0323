// fs es File System, equivale a una manera de acceder al arbol de carpetas
// primero lo requerimos
const fs = require('fs')

// dentro de fs, hay muchos metodos, pero vamos a ver 2 en particular:
// readFileSync y writeFileSync (leer, y escribir)


// el primer parametro que le pasamos al metodo readFileSync es la ruta relativa del archivo a leer
// el segundo es la codificacion de archivos (vamos a usar siempre aqui "utf-8")
let data = fs.readFileSync("./data.json", "utf-8")
// en data, ahora tenemos el JSON como tal
// necesitamos pasarlo a una estructura de objeto literal
// para trabajar con el

/* console.log(data[1].nombre)
console.log(data) */

//JSON.parse() esel metodo, que nos permite cambiar desde el formato JSON hasta un objeto literal
let parsedData = JSON.parse(data)
// ahora, parsedData, tiene el formato de un objeto


// aqui ya consologuea como un objeto literal
// console.log(parsedData.nombre)

// Creo una funcion que lo recorra e imprima los datos
function imprimir(datos){
    // Si hay contenido de datos se ejecuta
    if(datos.length !== 0){
        for(let i=0; i < datos.length; i++){
            console.log("----")
            console.log("Dato:")
            if(datos[i] !== undefined){console.log(datos[i])}
            
        }
        console.log("----")
    }
}

// llamo a la funcion
console.log(imprimir(parsedData))


// Creamos a crear una funcion para filtrar actores
// Segun el nombre de pila, te dice si esta o no esta en la lista
function filtrar(datos, nombreActor){
    let actor = false;
    for(let i= 0; i< datos.length; i++){
        if(datos[i].nombre === nombreActor){
            actor = true
        } 
    }
    if (actor){
        return "El actor esta en la lista"
    } else {
        return "El actor no esta en la lista"
    }
}

console.log("Aqui se ejecuta la funcion filtrar")
console.log(filtrar(parsedData, "carlos"))


// creo una funcion que, recorra los datos
// me cree una nueva entrada, con un id incremental
function agregarActor(datos, actor){
    let newActor = actor
    newActor.id= datos.length
    datos.push(newActor)
    return datos
}

// aca ejecuto la funcion, dentro del metodo que me lo convierte en JSON
let newData = JSON.stringify(agregarActor(parsedData, {
    nombre: "Carlos",
    apellido: "Villagran",
    peliculas: {nombre: "El Chavo"}
})
)

// aca sobrescribo
fs.writeFileSync("./data.json", newData)


// -----------------------------------



//traemos otro archivo, lo leemos
let dataToRemove = fs.readFileSync("./data2.json", "utf-8")

// lo parseamos a objeto literal, es decir, le cambiamos formato
dataToRemove = JSON.parse(dataToRemove)

// declaramos una nueva entrada para introducir en el array
let newActor = {
    id: 3,
    nombre: "Tom",
    apellido: "hanks",
    peliculas: {nombre: "Forrest Gump"}
}

// ahora, como dataToRemove es un objeto

// introducimos la nueva variable en el array ya parseado
dataToRemove.push(newActor)

// con el metodo JSON.stringify, le pasamos el objeto literal
// para que este en formato JSON nuevamente
// el segundo y tercer argumento (null, 2) son para darle mejor formato
let stringifiedData =  JSON.stringify(dataToRemove, null, 2)

// SOBREescribimos el archivo
fs.writeFileSync("./data2.json", stringifiedData)

