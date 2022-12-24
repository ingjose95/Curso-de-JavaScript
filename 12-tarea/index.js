// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función


function obtenerFibo(num) {

    let array = [0,1];

    for (let i = 2; i <= num; i++) {

        array[i] = array[i-1] + array[i-2];

    }
    return array
}

const resultado = obtenerFibo(6);
console.log(resultado);
