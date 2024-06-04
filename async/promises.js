function greetingHello(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

function speak(nombre) { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla...');
            resolve(nombre);
            reject('Ha habido un error');
        }, 1000);
    });
}

function greetingBye(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios ' + nombre);
            resolve();
        }, 1000);
    })
}  

console.log('Inicio');

greetingHello('Maria')
    .then(speak)
    .then(speak)
    .then(speak)
    .then(speak)
    .then(greetingBye)
    .then(() => {
        console.log("Terminado");
    })
    .catch(error => {
        console.error('Ha habido un error: ' + error);
    });

console.log('Fin');