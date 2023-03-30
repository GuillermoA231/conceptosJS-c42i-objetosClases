// aqui creo un par de variables

//funciones declarativas
function saludar(){
    // aqui va todo el codigo que sabe hacer saludar
    document.write('Hola mundo<br>');
}

function saludoPersonaje(nombre, apellido, alias){
    // let otroNombre = nombreCompleto(nombre, apellido);
    document.write(`<p>Hola mi nombre es ${nombreCompleto(nombre, apellido)} me conocen como ${alias}</p>`)
}

// function nombreCompleto(nombre, apellido){
//     const nuevoNombre = nombre+', '+apellido;
//     return nuevoNombre;
// }
//funciones expresivas o anonimas
// const nombreCompleto = function (nombre, apellido){
//     return nombre+', '+apellido;
// }

const nombreCompleto = (nombre, apellido) => nombre+', '+apellido;

// llamar o invocar a la funcion

saludar();
console.log('prueba');
saludar();

let nombre= 'Clark';
let apellido = 'Kent';
let heroe = 'Superman';

saludoPersonaje('Peter', 'Parker', 'Spiderman');
saludoPersonaje(nombre,apellido, heroe);

nombre = 'Tony'
apellido = 'Stark'
heroe = 'Ironamn'

saludoPersonaje(nombre,apellido, heroe);

let otroNombre = nombreCompleto(nombre, apellido);
console.log(otroNombre);

