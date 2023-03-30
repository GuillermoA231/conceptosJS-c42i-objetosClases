// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

const frase = prompt('Ingrese un frase');

// hola mundo
// ejercicio

// console.log(frase.charAt(0))
// console.log(frase.length)

for(let indiceCaracter = 0; indiceCaracter < frase.length ; indiceCaracter++){
    if(frase.charAt(indiceCaracter) === 'a' || frase.charAt(indiceCaracter) === 'e' || frase.charAt(indiceCaracter) === 'i' || frase.charAt(indiceCaracter) === 'o' || frase.charAt(indiceCaracter) === 'u'){
        document.write(`La vocal ${frase.charAt(indiceCaracter)} esta en la posicion ${indiceCaracter}`);
        indiceCaracter= frase.length;
    }
}
