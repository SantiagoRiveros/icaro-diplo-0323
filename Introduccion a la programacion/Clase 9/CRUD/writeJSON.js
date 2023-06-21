// requerimos fs para poder (sobre) escribir nuestro archivo
const fs = require("fs");

// creamos la funcion con el exports para hacer esta funcionalidad
// ingresa como parametro un array de objetos literales que se llama data
module.exports = (data) => {
  // creamos una variable cuyo valor es igual al parametro data, formateado en un JSON
  let stringifiedData = JSON.stringify(data, null, 2);

  // aqui retornamos la (sobre) escritura, del archivo tasksData con el nuevo JSON
  return fs.writeFileSync("./tasksData.json", stringifiedData);
};
