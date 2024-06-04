const fs = require('fs');

function leerArchivo(ruta, callback) {
    fs.readFile(ruta, (err, data) => {
        callback(data.toString());
    });
}

function escribirArchivo(ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.error('No he podido escribir el archivo: ' + err);
        }else{
            console.log('He escrito el archivo correctamente');
            if(callback) callback(contenido);
        }
    });
}

function borrarArchivo(ruta, callback) {
    fs.unlink(ruta, callback);
}

//leerArchivo(__dirname + '/archivo.txt', console.log)
//escribirArchivo(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log)
borrarArchivo(__dirname + '/archivo1.txt', console.log)