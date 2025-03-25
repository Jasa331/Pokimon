
var colors = require('colors');
const prompt = require('prompt-sync')();


function MostrarMenu() {


console.log (`${'--------------------------------------'.yellow}`)
console.log ('|          Menu de Opciones          |')
console.log (`${'--------------------------------------'.green}`)
console.log ('|                                    |')
console.log ('|          1.registrar               |')
console.log ('|          2.Suma                    |')
console.log ('|          3.raiz                    |')
console.log ('|          4.contador                |')
console.log ('|          5.fecha actual            |')
console.log ('|          6.salir                   |')
console.log ('|                                    |')
console.log (`${'--------------------------------------'.green}`)

let opcion = prompt("seleccione una opcion:");

    switch (opcion) {
        case "1":
            console.log("registrar");

            break;
        case "2":
            console.log('suma');
            let numero1 = prompt('ingrese elrpimer nuemro')
            let numero2 = prompt('ingrese el segudo numero')

            let resultado = parseInt(numero1) + parseInt(numero2);

            console.log('su numero de la suma es:'+resultado+'de la suma de los dos numeros');

        case "3":
            console.log('raiz')
            break;
        case "4":
            console.log('contador')
            break;
        case "5":
            console.log('fecha actual')
        case "6":
            console.log('salir')
            break;
    default:
        console.log('Opcion invalida')
        break;
}
}
