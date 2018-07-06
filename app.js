
const { crearArchivo,listarTabla } = require('./multiplicar/mutiplicar');
const  argv  = require('./config/yargs').argv;
const colors = require('colors');

console.log('base ',argv.base);
console.log('limite ',argv.limite);

let comando = argv._[0];

switch (comando){
    case "crear":
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo =>console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));

        break;
    case "listar":
        listarTabla(argv.base,argv.limite);
        console.log('Listar');
        break;
    default:
        console.log('Comando no reconocido');
}

// const fs = require('fs');

// let base=5;
// let data="";

let argv2 = process.argv;
// let parametro= argv[2];
// let base = parametro.split('=')[1];



// for (let i=1; i<=10; i++){
//     // console.log(`${base} * ${i} = ${i*base} `);
//
//     data+=`${base} * ${i} = ${i*base}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//
//     console.log(`El archivo tabla-${base}.txt ha sido creado!`);
// });



