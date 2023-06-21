// requerimos el modulo fs (file system) que nos permitira leer archivos
const fs = require('fs');

//creamos la funcion para leer
/* module.exports = () => {
    //aqui leemos el archivo, entonces readFile es igual al JSON
    let readFile = fs.readFileSync('./tasksData.json', 'utf-8');
    //Como necesitamos el archivo en un formato de array de objetos literales
    // en parsedJson le damos el valor del archivo leido, parseado a un array de objetos literales
    let parsedJson = JSON.parse(readFile);
    // retornamos el array de objetos literales
    return parsedJson;
}; */


const read = () => JSON.parse(fs.readFileSync('./tasksData.json', 'utf-8'))
module.exports = read