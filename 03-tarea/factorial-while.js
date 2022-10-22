// Este archivo debe calcular el factorial de 10 utilizando un bucle while

const numFactorial = 10;
let inicio = 1;
let dato = 1;

while (dato < numFactorial) {

    dato++;
    inicio *= dato;

}

console.log(inicio);