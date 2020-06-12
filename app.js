//
//requireds que son 


//los paquetes que no son nativos en node
//const fs = require('express');
//Los creados por nosotros
//const fs = require('./fs');

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')




let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

//let argv2 = process.argv;

//console.log(argv.limite);


//let parametro = argv[2];
//let base = parametro.split('=')[1]
//console.log(parametro);