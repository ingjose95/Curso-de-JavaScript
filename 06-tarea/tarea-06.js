// Tarea #6 - Listas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

const listaCompras = ['Azucar', 'Harina', 'Huevos', 'Queso', 'Carne'];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

listaCompras.push('Aceite de Girasol');

console.log(listaCompras)

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

listaCompras.pop()
console.log(listaCompras)

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const listaPeliculas = [

    { titulo: 'La Red Social', director: 'David Fincher', fecha: 2010 },
    { titulo: 'Sueños de Fuga', director: 'Frank Darabont', fecha: 1994 },
    { titulo: 'Las ventajas de ser invisible', director: 'Stephen Chbosky', fecha: 2012 }

]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const listaPeliculasFiltradas = listaPeliculas.filter(age => age.fecha > 2010);
console.log(listaPeliculasFiltradas)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const listaDirectores = listaPeliculas.map(function (dir) {

    return `${dir.director}`

})

console.log(listaDirectores)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const listaNombrePeliculas = listaPeliculas.map(function (peli) {

    return `${peli.titulo}`

})

console.log(listaNombrePeliculas)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const listaPeliDir = listaDirectores.concat(listaNombrePeliculas);
console.log(listaPeliDir)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const listaPeliDirs = [...listaDirectores, ...listaNombrePeliculas];
console.log(listaPeliDirs)