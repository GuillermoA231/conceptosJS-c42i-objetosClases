// Estructuras condicionales If

//if(condicion){
// ...
// } else{
//     ...
// }

// Soliticar la edad al usuario e indicar por pantalla si puede votar o no

// tengo que pedirle la edad al usuario
// puede votar a partir de los 16 años
// 16 y 17 es opcional votar, 71 en adelante es opcional
// 18 a 70 es obligatorio

// parseInt('40');
// parseFloat('50.5');
let edad = parseInt(prompt("Ingrese su edad"));

console.log(typeof edad);
console.log(edad);

// isNaN(edad) devuelve true o false

if (edad > 0 && edad <= 130) {

  if ((edad >= 16 && edad < 18) || edad >= 71) {
    document.write("Es optativo votar");
  } else if (edad >= 18 && edad < 71) {
    document.write("Es obligatorio votar");
  } else {
    document.write("No puede votar");
  }
} else {
  document.write("Ingreso un valor invalido");
}
