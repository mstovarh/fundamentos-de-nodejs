/*NOTA:
Los procesos sincronos corren en un hilo y los asincronos en otro por tanto el try catch para cada uno debe ser distinto, y muchas veces es mejor trabajar con procesos asincronos para no afectar el hilo principal.*/

function foo() {
    boom();
}
function boom() {
    return 3 + z;
}

/* function boomAsincrona() {
    setTimeout(() => {
        return 3 + z;
    })
} */

function boomAsincrona() {
    setTimeout(() => {
        try{
            return 3 + z;
        } catch (error) {
            console.log('Algo no funcionó en la asincrona');
            console.log(error);
            console.log('pero lo tenemos controlado');
        }
    })
}

try {
    //foo();
    boomAsincrona();
} catch (error) {
    console.log('Algo no funcionó');
    console.error(error);
    console.log('pero lo tenemos controlado');
}