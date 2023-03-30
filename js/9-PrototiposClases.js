//  ES5
// Los prototipos siempre arrancan con mayusculas y debe de ser en singular
// function VideoJuego(){
//     this.nombre = `super mario`;
//     this.precio = 3500;
// }

// Instanciar un objeto

// let juego = new VideoJuego(`Super Mario`,500)
// let juego2 = new VideoJuego(`Terraria`, 129)

// ES6
class Videojuego{
    //Crear propiedades privadas
    #nombre;
    //Metodo constructor
    constructor(genero, nombre,precio){
        this._genero = genero;
        this.#nombre = nombre;
        this._precio = precio;
    }
    get genero(){
        return this._genero;
    }
    set genero(nuevoGenero){
        if(nuevoGenero.length > 0){
            this._genero = nuevoGenero;
        }
    }
    
}

const stardewValley = new Videojuego(`el juego`,199);

//metodos
function MostrarInformacion(){
    document.write(`<ul>
    <li>Nombre: ${this._nombre}</li>
    <li>Precio: ${this._precio}</li>
    <li>Genero: ${this.genero}</li>
    <li>Desarrollador: ${this._desarrollador}</li>
    </ul>`)
};