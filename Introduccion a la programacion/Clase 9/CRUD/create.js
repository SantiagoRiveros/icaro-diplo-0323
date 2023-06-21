// requerimos, la funcion ya creada que sirve para leer el JSON
const getTasks = require("./read");
// requerimos la funcion que sobrescribe el JSON
const writeJSON = require("./writeJSON");

//iniciamos y exportamos la funcion, con 2 parametros, "title" y "desc" que deben ser strings

// paso 1 : exporto un modulo que recibe 2 variables
module.exports = (title, desc) => {
  // inicializamos una variable para contener los datos nuevos de title y desc

  // en vez de crear una variable la inserto directamente
  let newTask = {
    title: title,
    desc: desc,
  };
  
  // vamos a obtener las tareas con la funcion que creamos anteriormente

  //asigno una variable al retorno de la funcion getTasks
  let tasks = getTasks();

  //pusheamos en el array, la nueva tarea

  // en el array de retorno, creamos un nuevo array con el nuevo indice insertado
  tasks.push(newTask);
  // ahora en tasks, estan todas las variables que queremos
  // incluida newTask

  

  // sobreescribimos el archivo JSON con nuestro nuevo array, con todas las entradas que queremos, y la nueva entrada agregada
  
  
  // y escribimos el JSON
  writeJSON(tasks);

  return console.log("entrada creada con exito");
};

const create = (title, desc) => writeJSON(getTasks().push({title, desc}))
module.exports = create