const os = require('os');

//console.log(os.arch());
//console.log(os.platform());

//console.log(os.cpus());
//console.log(os.cpus().length);

//console.log(os.constants);
//console.log(os.freemem());

const SIZE = 1024;
function kb(bytes) {
    return bytes / SIZE;
}
console.log(kb(os.freemem()));

function mb(bytes) {
    return kb(bytes) / SIZE;
}
console.log(mb(os.freemem()));

function gb(bytes) {
    return mb(bytes) / SIZE;
}
console.log(gb(os.freemem()));

console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.release());
console.log(os.networkInterfaces());
