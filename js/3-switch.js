/*
switch(opcion){
    case 1:
            todas las lineas de codigo que quiero hacer si se cumple que la opcion es la N1
            break;
    case '2':
            todas las lineas de codigo que quiero hacer si se cumple que la opcion es la N2
            break;
    case 3:
            todas las lineas de codigo que quiero hacer si se cumple que la opcion es la N3
            break;
    case 'deposito':
            todas las lineas de codigo que quiero hacer si se cumple que la opcion es la Ndeposito
            break;
    default:
        todas las lineas del caso por defecto
}
*/

// solicitar al usuario que seleccione un dia de la semana, le vamos a sugerir un menú para cada dia: plato principal, bebida, postre.

let dia = prompt('Seleccione un dia: 1-Lunes, 2-Miercoles, 3-viernes');
console.log(dia)
console.log(dia.toLowerCase());
console.log(dia.toUpperCase());
//modificar el contenido de dia a minusculas
dia = dia.toLowerCase();

switch(dia){
    case 'lunes':
    case '1':
        document.write(`<h2>Menú del Lunes</h2>
        <ul>
            <li>Plato principal: Milanesa con pure</li>
            <li>Bebida: Coca-cola</li>
            <li>Postre: Flan con dulce de leche</li>
        </ul>`);
        break;
    case '2':
        document.write(`<h2>Menú del Miercoles</h2>
        <ul>
            <li>Plato principal: Hamburguesa con papas</li>
            <li>Bebida: Sprite</li>
            <li>Postre: Helado</li>
        </ul>`);
        break;
    case '3':
        document.write(`<h2>Menú del Viernes</h2>
        <ul>
            <li>Plato principal: Pizza</li>
            <li>Bebida: Cerveza</li>
            <li>Postre: Panqueques con helado</li>
        </ul>`);
        break;
    default:
        document.write('Ingreso una opción invalida');
}