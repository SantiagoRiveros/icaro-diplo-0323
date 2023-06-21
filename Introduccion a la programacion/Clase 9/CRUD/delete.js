// requerimos, la funcion ya creada que sirve para leer el JSON
const getTasks = require("./read");
// requerimos la funcion que sobrescribe el JSON
const writeJSON = require("./writeJSON");

const read = require('./read')

// inicializamos la funcion exportada que recibe como parametro un title
/* module.exports = (title) => {

    // declarar una variable que va a contener todo el array de objetos
    let tasks = getTasks()

    // declaramos una variable que va a contener el numero de indice
    // de la entrada que queremos eliminar
    let taskToRemove

    // iteramos en el array para buscar la entrada que deseamos eliminar
    for(let i= 0; i < tasks.length; i++){

        // Consultamos, si el title del indice que estamos recorriendo ahora mismo, es igual al del parametro
        if(tasks[i].title === title){

            // si es asi, asigamos, el numero de indice a taskToRemove, para usarlo luego en el splice
            taskToRemove = i

            // aqui, llamamos al metodo splice de arrays
            // como primer parametro ingresa el numero de indice a eliminar (o suplantar)
            // y su segundo parametro es la cantidad de entradas a eliminar 
            tasks.splice(taskToRemove, 1)

            // ahora tasks, no contiene mas, la entrada que buscabamos (Si es que la encontro)


            //Sobrescribe el JSON con el array, sin la entrada que deseabamos eliminar
            writeJSON(tasks)
            
            // lanzamos un console log para que el usuario este seguro de que funciono
            return console.log("tarea eliminada con exito")
        }
    }

    // aqui otro console.log que muestra si es que no encontro la entrada
    return console.log("no se encontro la tarea")
}
 */
module.exports = (title) => writeJSON(read().filter((task) => task.title !== title))