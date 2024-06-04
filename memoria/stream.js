const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

/* readableStream.on('data', function (chunk) {
    //console.log(chunk);
    data += chunk;
});

readableStream.on('end', function () {
    console.log(data);
}); */

process.stdout.write('hola');
process.stdout.write('que tal');

const Transform = stream.Transform;

function Mayusculas() {
    Transform.call(this);
}
util.inherits(Mayusculas, Transform);

Mayusculas.prototype._transform = function (chunk, encoding, callback) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    callback();
}

var mayus = new Mayusculas();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);
    