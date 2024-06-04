function asincrona(callback){
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch ( error ) {
            callback(error, null);
        }
    }, 1000)
}

/* try {
    asincrona(function (err, data) {
        if (err) {
            console.error('Error');
            console.error(err);
            return false;
            //throw err; //NO FUNCIONA
        } else {
            console.log(data);
        }
    })
} catch (error) {
    console.error('Hay un error: ');
    console.error(error);
} */

asincrona(function (err, data) {
    if (err) {
        console.error('Error');
        console.error(err);
        return false;
    } else {
        console.log(data);
    }
})
