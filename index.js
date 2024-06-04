console.log("Hola");

const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Contador
rl.question('¿Hasta que numero vas a contar? ', (numero) => {
    let i = 0;
    const maxNumero = parseInt(numero, 10);

    setInterval(() => {
        if (i == numero) {
            clearInterval();
        }else{
            console.log(i);
            i++;
        }
    }, 1000);

    console.log("Fin del contador");
    rl.close();
});

//Temporizador
rl.question('¿Cuantos minutos vas a contar? Limite: 5min: ', (time) => {

    const intTime = parseInt(time, 10);
    maxTime = intTime * 60;
    console.log(maxTime);

    let i = 0;

    idInterval = setInterval(() => {
        if(i == maxTime){
            clearInterval(idInterval);
            console.log("Fin del Temporizador");
        }else{
            console.log(i);
            i++;
        }
    }, 1000);
    
    rl.close();
});
