// const tasks = require('../tasksData')
const read = require("../CRUD/read")


/* function filterF(title){
  let filteredTasks = []
  // usamos una variable iniciada en 0
  // se ejecuta el bucle, mientras i, sea menor al largo del array que recorremos
  // cada vez que se ejecuta una iteracion, antes de volver a evaluar
  // si iteramos otra vez, hacemos un incremental al valor de i
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title.includes(title)) filteredTasks.push(tasks[i])
  }
  return filteredTasks
}

module.exports = filterF */

// i empieza en 0
// [0,1,2,3,4,5,6,7,8]
//  si tasks[i].title = "cabalgar" incluye (el metodo includes) lo que ingresa comoa argumento
// en este ejemplo usamos "ca" entonces este metodo retornaria true
// y hacemos un push, al array que declaramos al principio

module.exports = (text) => read().filter((tasks) => tasks.title.includes(text))

