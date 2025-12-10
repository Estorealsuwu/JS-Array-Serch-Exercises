/*
Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses(arr1, arr2) {
  const common = arr1.filter(course => arr2.includes(course));

  if (common.length > 0) {
    alert("Ejercicio 4:\nCursos en común:\n" + common.join(", "));
  } else {
    alert("Ejercicio 4:\nNo hay cursos en común.");
  }
}

function ejercicio4Interactivo() {
  // Pedir cursos del estudiante 1
  const c1 = prompt("Ingresa los cursos del Estudiante 1 separados por coma:");
  if (!c1) {
    alert("Debes ingresar al menos un curso.");
    return;
  }

  // Pedir cursos del estudiante 2
  const c2 = prompt("Ingresa los cursos del Estudiante 2 separados por coma:");
  if (!c2) {
    alert("Debes ingresar al menos un curso.");
    return;
  }

  const arr1 = c1.split(",").map(c => c.trim());
  const arr2 = c2.split(",").map(c => c.trim());

  findCommonCourses(arr1, arr2);
}

// Activar botón
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn4").addEventListener("click", ejercicio4Interactivo);
});
