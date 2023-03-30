//crear un objeto, notacion literal

let cancion = {
    //propiedades key: value
    titulo: 'Muchachos', 
    artista: 'La mosca',
    duracion: '2:32',
    anio: 2021,
    album: 'mundial 2022',
    genero: 'murga',
    id: 3462,
    //metodos
    reproducir: function (){
        console.log(this);
        document.write(`<p>La cancion ${this.titulo} se esta reproduciendo...</p>`)
    },
    pausa: () =>{
        console.log(this.titulo)
        document.write(`<p>La cancion esta en pausa</p>`)
    }
}

//mostrar objeto
console.log(cancion);

//2 maneras de mostrar el objeto
document.write(`<p>Cancion: ${cancion.titulo}</p>`);
document.write(`<p>Genero: ${cancion.genero}</p>`);
document.write(`<p>Duración: ${cancion['duracion']}</p>`);
document.write(`<p>Artista: ${cancion.artista}</p>`);

//modificar una propiedad
cancion.artista = 'La mosca Tse - Tsee';
document.write(`<p>Artista: ${cancion.artista}</p>`);

//agregar una propiedad
cancion.premios = 'Disco de oro';
document.write(`<p>Premios: ${cancion.premios}</p>`);

//borrar una propiedad
delete cancion.premios;
console.log(cancion);
document.write(`<p>Premios: ${cancion.premios}</p>`);

cancion.reproducir();
cancion.pausa();

console.log(this);