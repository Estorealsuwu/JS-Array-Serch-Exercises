/*
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

function ejercicio5() {
  // 1. Mostrar lista original
  alert("Lista original:\n" + people.join(", "));

  // 2. Eliminar "Dani"
  people.splice(people.indexOf("Dani"), 1);

  // 3. Eliminar "Juan"
  people.splice(people.indexOf("Juan"), 1);

  // 4. Mover "Luis" al inicio
  const luisIndex = people.indexOf("Luis");
  const luis = people.splice(luisIndex, 1)[0];
  people.unshift(luis);

  // 5. Pedir tu nombre y agregarlo
  const yourName = prompt("Ingresa tu nombre para agregarlo a la lista:");
  if (yourName) {
    people.push(yourName.trim());
  } else {
    alert("No ingresaste tu nombre. Se usará 'Usuario'.");
    people.push("Usuario");
  }

  // 6. Recorrer y detenerse al mostrar "Maria"
  let recorrido = "";
  for (let i = 0; i < people.length; i++) {
    recorrido += people[i] + "\n";
    if (people[i] === "Maria") break;
  }

  // 7. Mostrar resultados finales
  alert(
    "Ejercicio 5:\n" +
    "Recorrido hasta 'Maria':\n" + recorrido +
    "\nLista final:\n" + people.join(", ") +
    "\n\nIndex de Maria: " + people.indexOf("Maria")
  );
}

// Activar el botón
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn5").addEventListener("click", ejercicio5);
});
