// importamos todos los metodos necesarios del CRUD
const getTasks = require('./CRUD/read')
const addTask = require('./CRUD/create')
const editTask = require('./CRUD/update')
const deleteTask = require('./CRUD/delete')
const filterF = require('./comandos/filter')
const returnF = require('./comandos/return')
const findF = require('./comandos/find')

//vamos a crear una estructura de control, que en base a lo que nosotros ingresamos en terminal
//ejecuta una funcion, u otra
switch(process.argv[2]){
    case 'list':
        console.log(getTasks())
        break;
    case 'add':
        addTask(process.argv[3], process.argv[4])
        break;
    case 'edit':
        editTask(process.argv[3], process.argv[4])
        break;
    case 'delete':
        deleteTask(process.argv[3])
        break;
    case 'filter':
        console.log(filterF(process.argv[3]))
        break;
    case 'return': 
        console.log(returnF(process.argv[3]))
        break;
    case 'find':
        console.log(findF(process.argv[3]))
        break;
    case undefined:
        console.log("Debe ingresar un comando, ya sea add edit list o delete")
        break;
    default:
        console.log("comando no valido")
        break;
}