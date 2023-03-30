// crear un array vacio
let frutas = [];

//crear un array con datos
let peliculas = [
  "Los vengadores: endgame",
  2019,
  "Ant-man",
  "Black Adam",
  true,
];

//funciones
const mostrarPeliculas = (titulo = 'No hay un titulo disponible') => {
  document.write(`<h2>${titulo}</h2>`);
  document.write("<ul>");
  for (let indice = 0; indice < peliculas.length; indice++) {
    document.write(`<li>${peliculas[indice]} </li>`);
  }
  document.write("</ul>");
};

// cuantos elementos hay en un array
console.log(peliculas.length);
console.log(peliculas);

document.write(peliculas);

// mostrar el arreglo peliculas como una lista
mostrarPeliculas();

// agregar un elemento al principio del arreglo
peliculas.unshift("Harry Potter", "Mario Bross");
mostrarPeliculas('Agregamos un elemento al principio del arreglo de peliculas');


// agregar un elemento en el medio del array
// splice(posicion donde agrego un item, elementos que quiero borrar, el elemento que quiero agregar)
peliculas.splice(3, 0, "La ballena");
mostrarPeliculas('Agregamos un elemento en el medio del array de peliculas (posición 3)');

//agregamos un elemento al final del array
peliculas.push("Iron Man");
mostrarPeliculas('Agregamos un elemento en final del array de peliculas')

//modificar un elemento del array
peliculas[7] = "Thor";
mostrarPeliculas('Modificamos un elemento del array de peliculas')

//eliminar un elemento del array
peliculas.pop();
mostrarPeliculas('Eliminamos el ultimo elemento del array de peliculas')

// borrar varios elementos
// peliculas.splice(5);// borrar todos los elementos desde la posicion 5
peliculas.splice(5, 2);
mostrarPeliculas('Eliminamos los elementos de la posicion 5 y 6 del array')

//borrar un elemento al principio del array
peliculas.shift();
mostrarPeliculas('Eliminamos el primer elemento del array')

// operaciones especiales
// ordenar el array
peliculas.sort();
mostrarPeliculas('Ordenar el arreglo')

//operador ternario
// if(condicion logica){
//     que hago si esta todo ok
// }else{
//     si no salio lo que queria
// }

// (condicion logica) ? true : false;

// saber si existe o no un elemento dentro del array

let existePeli = peliculas.includes("Thor")
  ? "Si encontre la pelicula"
  : "No encontramos la pelicula buscada";
document.write(`<p>Existe la peli Thor : ${existePeli}</p>`);

document.write(
  `<p>Existe la peli thor love and thunder : ${
    peliculas.includes("thor")
      ? "Si encontre la pelicula"
      : "No encontramos la pelicula buscada"
  }</p>`
);
