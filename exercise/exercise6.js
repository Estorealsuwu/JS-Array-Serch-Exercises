/*
Exercise # 6
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]

*/

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }

    n--;
  } while (swapped);

  return arr;
}

function ejercicio6Interactivo() {
  const texto = prompt("Ingresa números separados por coma para ordenarlos:");

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

  const ordenado = bubbleSort(numeros);

  alert(
    "Ejercicio 6:\n" +
    "Arreglo ordenado:\n" +
    ordenado.join(", ")
  );
}

// Activar el botón
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn6").addEventListener("click", ejercicio6Interactivo);
});
