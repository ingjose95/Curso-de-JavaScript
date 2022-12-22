// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una clase llamada "Estudiante" que tenga:

// - Una variable llamada nombre

// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

// - Crea una nueva instancia de "Estudiante"

// - Haz la llamada al método obtenDatos

class Estudiante {

    _asignaturas = [

        'JavaScript',
        'HTML',
        'CSS'
    
    ]

    constructor (nombre) {

        this.nombre = nombre;

    }

    obtenDatos() {

        console.log(`Nombre:${this.nombre} \nAsignaturas:${this._asignaturas}`);

    }

}

const estudiante = new Estudiante('José');
console.log(estudiante);
estudiante.obtenDatos()