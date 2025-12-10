/*
Exercise #2 (sugerencia map() )
Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

*/

function doubleArray(arr) {
  const doubled = arr.map(num => num * 2);
  alert("Ejercicio 2:\n" + doubled.join(", "));
  return doubled;
}

function ejercicio2Interactivo() {
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

  doubleArray(numeros);
}

//  Activar el botón
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn2").addEventListener("click", ejercicio2Interactivo);
});
