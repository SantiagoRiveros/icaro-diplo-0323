const read = require("./read");
const writeJSON = require("./writeJSON");

const create = (title, desc) => writeJSON(read().push({title, desc}))

// MODULARIZAR
// tener en claro que los values son iguales a la ejecucion
// tasks = getTasks() entonces literalmente tasks es igual a la ejecucion de la funcion
// gestTasks() <= esto nos da el array actual
// getTasks().push <= es igual al array actual cuanto le insertamos un elemento

module.exports = create