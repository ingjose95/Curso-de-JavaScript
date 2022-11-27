// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datosPersonales = {

    nombre : 'Jose',
    apellido : 'Melendez',
    edad : 27,
    altura : 1.67,
    eresDesarrollador : true

}

console.log(datosPersonales);

// - Una variable que obtenga tu edad a partir del objeto anterior

const edad = datosPersonales.edad;

console.log(edad);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const listaAmigos = [

    { nombre : 'Douglas', apellido : 'Alvarez', edad : 28},
    { nombre : 'Jose', apellido : 'Melendez', edad : 55},
    { nombre : 'Any', apellido : 'Vargas', edad : 27}

]

console.log(listaAmigos);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const ordenAmigos = listaAmigos.sort((a,b) => a.edad - b.edad);

console.log(ordenAmigos);