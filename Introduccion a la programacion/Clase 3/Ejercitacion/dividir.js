function dividir(num1, num2) {
  if (num1 == 0 || num2 == 0) {
    return "No se puede dividir por cero :(";
  } else {
    return num1 / num2;
  }
}

module.exports = dividir;
