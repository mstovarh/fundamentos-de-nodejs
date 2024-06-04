const sharp = require("sharp");

sharp('original.jpg')
    .resize(90)
    .grayscale()
    .toFile('nueva.jpg');