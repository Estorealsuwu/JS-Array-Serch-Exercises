/*
Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

*/

function sumAndProduct(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const product = numbers.reduce((a, b) => a * b, 1);

  alert(
    "Ejercicio 3:\n" +
    "La suma es: " + sum + "\n" +
    "El producto es: " + product
  );
}

function ejercicio3() {
  const texto = prompt("Ingresa números separados por coma:");

  if (!texto) {
    alert("No ingresaste nada.");
    return;
  }

  const numeros = texto
    .split(",")
    .map(n => Number(n.trim()));

  if (numeros.some(isNaN)) {
    alert("Ingresa números válidos separados por coma.");
    return;
  }

  sumAndProduct(numeros);
}

// Activar el botón al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn3").addEventListener("click", ejercicio3);
});
