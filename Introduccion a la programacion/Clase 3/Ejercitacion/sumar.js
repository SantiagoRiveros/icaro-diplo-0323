function sumar(num1 = false, num2 = false) {
  if (!num1 || !num2) {
    return "Ingresa un dato no seas malo :(";
  } else {
    return num1 + num2;
  }
}

module.exports = sumar;

//!false = true
//!num1 = !false = true
