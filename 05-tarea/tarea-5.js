// Crea un archivo JS que contenga las siguientes líneas

// Una variable que contenga tu altura en centímetros (entero)

let altura_cm = 162.00;
console.log(`${altura_cm}cm`);
console.log(typeof(altura_cm));

// Una variable que contenga tu altura en metros(número de coma flotante)

let altura_m = parseFloat(1.62);
console.log(`${altura_m}m`);
console.log(typeof(altura_m));

// Una variable que contenga tu peso en kilogramos (número de coma flotante)

let peso_kg = parseFloat(94.78);
console.log(`${peso_kg} kg`);
console.log(typeof(peso_kg));

// Una variable que contenga tu altura en metros redondeada hacia arriba

let redondear_arriba = Math.ceil(altura_m);
console.log(redondear_arriba);
console.log(typeof(redondear_arriba));

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo

let redondear_abajo = Math.floor(peso_kg);
console.log(redondear_abajo);
console.log(typeof(redondear_abajo));

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let valor = Number.MAX_VALUE + 1 === Number.MAX_VALUE;

if (valor) {

    console.log(true);
}

else {

    console.log(false)
}