const { exec, spawn } = require('child_process');

/* exec('dir', (err, stdout, sterr) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
}) */

/* exec('node modulos/consola.js', (err, stdout, sterr) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
}) */

let proceso = spawn('cmd.exe', ['/c', 'dir']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (data) => {
    console.log('¿Esta muerto?', proceso.killed);
    console.log(data.toString());
})

proceso.on('exit', () => {
    console.log('Proceso terminado');
    console.log(proceso.killed);
})