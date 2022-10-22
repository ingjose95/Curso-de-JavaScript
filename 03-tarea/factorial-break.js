// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

const numFactorial = 10;
let resultado = 1;
let numero = 1;

while (true) {

    if (numero < numFactorial) {

        numero++;
        resultado *= numero;

    }

    else {

        break;
    }

}

console.log(resultado)