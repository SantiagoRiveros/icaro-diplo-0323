//const tasksData = require('../tasksData')
const read = require('../CRUD/read')

//esta funcion debe devolver la descripcion de una tarea, si es que coincide
// su titulo, con el titulo que ingresa, como parametro a la funcion
/* function returnF(title){
    //recorro el array
    for(let i=0; i< tasksData.length; i++){
        //si el titulo del indice en el que estoy actualmente
        //coincide con el que entra como argumento
        if(tasksData[i].title === title){
            //retorno su descripcion
            return tasksData[i].desc
        }
    }
    // si no lo encontro, que devuelva null (valor nulo)
    return null
}

module.exports = returnF */

module.exports = (title) => {  let tasks = read().find((task) => task.title === title);
    if(tasks) return tasks.desc
    return null
}

