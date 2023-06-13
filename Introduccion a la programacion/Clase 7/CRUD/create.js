// requerimos, la funcion ya creada que sirve para leer el JSON
const getTasks = require("./read");
// requerimos la funcion que sobrescribe el JSON
const writeJSON = require("./writeJSON");

//iniciamos y exportamos la funcion, con 2 parametros, "title" y "desc" que deben ser strings
module.exports = (title, desc) => {
  // inicializamos una variable para contener los datos nuevos de title y desc
  let newTask = {
    title: title,
    desc: desc,
  };
  
  // vamos a obtener las tareas con la funcion que creamos anteriormente
  let tasks = getTasks();

  //pusheamos en el array, la nueva tarea
  tasks.push(newTask);
  // ahora en tasks, estan todas las variables que queremos
  // incluida newTask

  

  // sobreescribimos el archivo JSON con nuestro nuevo array, con todas las entradas que queremos, y la nueva entrada agregada
  writeJSON(tasks);

  return console.log("entrada creada con exito");
};
