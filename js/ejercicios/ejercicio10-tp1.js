// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

const numero = parseInt(prompt('ingrese un numero'));

if( numero % 2 === 0 ){
    document.write('El numero es divisible por 2');
}

if(numero % 3 === 0 ){
    document.write('El numero es divisible por 3');
}