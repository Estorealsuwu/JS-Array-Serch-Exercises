/*
Exercise #1 ( sugerencia join() )
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}

printOutString();
Complete the function to print out the string: This is a sentence.
*/

document.getElementById("btn1").addEventListener("click", () => {
    let arr = ["This", "is", "a", "sentence."];
    const oracion = arr.join(" ");
    alert("Ejercicio 1:\n" + oracion);
});