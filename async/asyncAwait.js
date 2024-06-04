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

async function main() {
    let nombre = await greetingHello('Maria');
    await speak();
    await speak();
    await speak();
    await greetingBye(nombre);
    console.log('Termina el proceso');
}

/* async function main() {
    await greetingHello('Maria');
    await speak();
    await speak();
    await speak();
    await greetingBye('Maria');
    console.log('Termina el proceso');
} */

console.log('Empezamos el proceso');
main()