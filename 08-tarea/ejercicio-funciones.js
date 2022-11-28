// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

function siempre() {

    console.log(true);

}

siempre();

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const mensaje = new Promise((resolve, reject) => {

    setTimeout(function() {

        resolve()

    }, 5000)

})

mensaje.then(() => { console.log('Hola, soy una promesa.') });

// - Una función generadora de índices pares automáticos

function* generaPares() {

    let i = 0;

    while (true) {

        i++;

        if(i % 2 === 0) {

            yield i;

        }
    }


}

const gen = generaPares();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);