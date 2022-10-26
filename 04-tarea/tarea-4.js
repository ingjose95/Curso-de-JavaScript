// Crea un archivo JS que contenga las siguientes líneas

// - Una cadena de texto con tu Nombre

// - Otra cadena de texto con tu Apellido

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

// - Una variable que contenga la primera letra del Nombre

// - Otra variable que contenga la última letra del Apellido

// - Una cadena de texto que elimine los espacios de la variable "estudiante"

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

// Tarea:

let nombre = 'Jose';
let apellido = 'Melendez';

let estudiante = (`${nombre} ${apellido}`);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let estudianteNumCarac = estudiante.length;
console.log(estudianteNumCarac);

let nombrePrimeraLetra = nombre.charAt();
console.log(nombrePrimeraLetra);

let apellidoUltimaLetra = apellido.charAt(apellido.length - 1);
console.log(apellidoUltimaLetra);

let estudianteSinEspacios = estudiante.split(" ").join("");
console.log(estudianteSinEspacios);

let estudianteConfirmar = estudiante.includes(estudiante);
console.log(estudianteConfirmar);