// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy

const hoy = new Date();

console.log(hoy);

// - La fecha de tu nacimiento

const nacimiento = new Date(1995, 8, 30);

console.log(nacimiento);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

const compararFechas = (hoy.getTime() > nacimiento.getTime());

console.log(compararFechas);

// - Una variable que contenga el día de tu nacimiento

const dia = nacimiento.getDay();

console.log(dia);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

const mes = nacimiento.getMonth() + 1;

console.log(mes);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const anyo = nacimiento.getFullYear();

console.log(anyo);