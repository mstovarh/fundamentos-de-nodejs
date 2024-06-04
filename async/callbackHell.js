function greetingHello(nombre, callbackHello) {
    setTimeout(() => {
        console.log('Hola ' + nombre);
        callbackHello(nombre);
    }, 1500);
}   

function speak(callbackSpeak) { 
    setTimeout(() => {
        console.log('Bla bla bla...');
        callbackSpeak();
    }, 1000);
}

function greetingBye(nombre, callbackBye) {
    setTimeout(() => {
        console.log('Adios ' + nombre);
        callbackBye();
    }, 1000);
}  

function conversation(nombre, veces, callbackConversation) {
    if (veces > 0) {
        speak(function() {
            conversation(nombre, --veces, callbackConversation);
        })
    }else{
        greetingBye(nombre, callbackConversation);
    }
}

console.log('Inicio');
greetingHello('Maria', function(nombre) {
    conversation(nombre, 5, function() {
        console.log('Termino funcion asincrona');
    });
})

/* greetingHello('Carlos', function() {
    speak(function() {
        speak(function() {
            speak(function() {
                greetingBye('Carlos', function() {
                    console.log('Termino funcion asincrona');
                });
            });
        });
    });
});
 */

console.log('Fin');