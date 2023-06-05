const tasksData = require('../tasksData')

//Tengo que tomar el array tasksData
//recorrerlo y crear otro array con solo los titulos de las tareas
//y retornarlo
function listF(){
    //creo el nuevo array
    let newArray = [];
    //recorro el array
    for(let i= 0; i< tasksData.length; i++){
        //introducimos el titulo de la tarea que recorremos ahora al nuevo array
        newArray.push(tasksData[i].title)
    }
    //retornamos el nuevo array
    console.log(newArray)
    return newArray
}

module.exports = listF