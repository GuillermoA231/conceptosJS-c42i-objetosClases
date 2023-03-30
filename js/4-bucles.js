//while
/*while(condicion logica){
    todo el codigo que quiero repetir
    agregar algo que haga que mi condicion logica se deje de cumplir
} */

let contador = 2;
while(contador<=10){
    let prueba = 'esta es una prueba de scope';
    console.log(prueba);
    document.write(`<p>Este es el renglon N${contador}</p>`);
    // contador++ // contador = contador  + 1;
    contador += 2;  //contador = contador + 2;
}


//do-while
/*
do{
todo el codigo que quiero repetir
agregar algo que haga que mi condicion logica se deje de cumplir
}while(condicion logica)
*/

document.write('<h2>Bucle do-while</h2>')

// let vueltas = 1;
// do{
//     document.write(`<p>Este es la linea N${vueltas}</p>`);
//     vueltas++;
// // }while(vueltas < 11)
//  }while(confirm('¿queres volver a ver las lineas?'))

let vueltas = 1;
// parseInt('2');
let limite = parseInt(prompt('¿Cuantas veces repetimos la siguiente linea?'))
do{
    document.write(`<p>Este es la linea N${vueltas}</p>`);
    vueltas++;
 }while(vueltas <= limite)


//for
//for(inicializar una variable; condicion logica ; incrementar/decrementar la variable){
    // todas las lineas de codigo que quiero repetir
// }

document.write('<h2>Bucle For</h2>')
for(let contador= 10; contador > 0 ; contador--){
    document.write(`<p>Cuenta regresiva, ( ${contador} ) </p>`);
}