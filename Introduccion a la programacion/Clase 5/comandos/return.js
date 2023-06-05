const tasksData = require('../tasksData')

//esta funcion debe devolver la descripcion de una tarea, si es que coincide
// su titulo, con el titulo que ingresa, como parametro a la funcion
function returnF(title){
    //recorro el array
    for(let i=0; i< tasksData.length; i++){
        //si el titulo del indice en el que estoy actualmente
        //coincide con el que entra como argumento
        if(tasksData[i].title === title){
            //retorno su descripcion
            console.log(tasksData[i].desc)
            return tasksData[i].desc
        }
    }
    // si no lo encontro, que devuelva null (valor nulo)
    console.log(null)
    return null
}

module.exports = returnF