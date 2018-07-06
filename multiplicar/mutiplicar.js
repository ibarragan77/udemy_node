const colors = require('colors/safe');
const fs = require('fs');

let crearArchivo = (base, limite =10 ) => {

    return new Promise((resolve,reject)=>{
        let data = '';

        for (let i = 1; i <= limite; i++) {
            // console.log(`${base} * ${i} = ${i*base} `);

            data += `${base} * ${i} = ${i * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}_1al${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            }
            else{
                resolve(`tabla-${base}_1al${limite}.txt`);
            }

            // console.log(`El archivo tabla-${base}.txt ha sido creado!`);
        });
    });
}

let listarTabla = (base,limite = 10) => {
    console.log(`================================`.colors.green);
    console.log(`Tabla del 1 al ${limite} base ${base} `.green);
    console.log(`================================`.green);
    for (let i=1; i<=limite; i++){
        console.log(`${base} * ${i} = ${base*i}`.red);
    }
}


module.exports = {
    crearArchivo,
    listarTabla
}


