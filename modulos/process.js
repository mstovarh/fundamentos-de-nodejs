const process = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar...');
})

process.on('exit', () => {
    console.log('Acabó');
    setTimeout(() => {
        console.log('Esto es invisible');
    }, 0);
})

setTimeout(() => {
    console.log('Esto es visible');
}, 0);

process.on('uncaughtException', (err, origen) => {
    console.error('Error inesperado...');
    console.error(err);
    setTimeout(() => {
        console.log('Esto viene de las excepciones');
    }, 0);
})

a();

console.log('Si el error no se recoge, no sale');