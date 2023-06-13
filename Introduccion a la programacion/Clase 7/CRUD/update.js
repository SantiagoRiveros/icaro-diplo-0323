// requerimos, la funcion ya creada que sirve para leer el JSON
const getTasks = require("./read");
// requerimos la funcion que sobrescribe el JSON
const writeJSON = require("./writeJSON");


// inicializamos la funcion ya exportada que recibe como parametro title que es un string
module.exports = (title, newDesc) => {

    // declarar una variable que va a contener todo el array de objetos
    let tasks = getTasks()

    // recorremos el array para buscar la entrada que queremos cambiar
    for(let i= 0; i< tasks.length; i++){
        // consultamos si el title del indice que estamos recorriendo, es igual al que entra como parametro
        if(tasks[i].title === title){
            // si es asi, cambiamos el valor de su desc por newDesc que entra como parametro
            tasks[i].desc = newDesc

            // y ahora, sobreescribimos el JSON, con nuestra entrada ya reformada
            writeJSON(tasks)

            // consologueamos para decir al usuario que encontramos la entrada y la reformamos
            return console.log("entrada cambiada con exito")
        }
    }
    // si no encontro la entrada:
    return console.log("entrada no encontrada")

}