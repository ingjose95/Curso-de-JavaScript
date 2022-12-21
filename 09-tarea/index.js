///Crea un nuevo proyecto de Node

///- Instala la dependencia Winston

///- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

///- Registra el error en un archivo a través de un try...catch

const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [

        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),

    ],
});



const funcion = num => {

    if (typeof num === 'number') {

        return num * num;

    } throw new Error('El valor debe ser tipo number para poder elevarlo al cuadrado.')
}



const numero = '1';

try {

    logger.info('Se está ejecutando correctamente');
    const cuadrado = funcion(numero);
    logger.info(cuadrado);

} catch (e){

    logger.info(`El valor de e es: ${e}`);
    logger.error('ERROR!');

} finally{
    
    logger.info('Esta linea siempre se ejecuta.');

}