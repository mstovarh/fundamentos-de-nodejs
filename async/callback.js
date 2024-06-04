function greetingHello(nombre, callback) {
    setTimeout(() => {
        console.log('Hola ' + nombre);
        callback();
    }, 1000);
}   

function greetingBye(nombre, callback) {
    setTimeout(() => {
        console.log('Adios ' + nombre);
        callback();
    }, 1000);
}  

console.log('Inicio');
greetingHello('Carlos', function() {
    greetingBye('Carlos', function() {
        console.log('Termino funcion asincrona');
    });
});
console.log('Fin');