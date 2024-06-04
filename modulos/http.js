const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('Nueva peticion');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;
        default:    
            res.write('Error 404: What?');
            res.end();
    }

    res.writeHead(201, { 'Content-Type': 'text/plain' });
    res.write('Hola mundo');

    res.end();
    //res.end('Hola mundo');
}

console.log('Escuchando el puerto 3000');