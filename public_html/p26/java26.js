function menu() {
    var star = prompt("1. realizar una suma \n\
2. realizar una resta\n\
3. realizar una multiplicacion \n\
4. relizar una division \n\
0. salir del programa");
    return parseInt(star);
}
function suma() {
    var number1 = prompt("ingrese numero");
    var number2 = prompt("ingrese numero");
    var r = parseInt(number1) + parseInt(number2);
    console.log("la respuesta " + r);
}
function restar() {
    var number1 = prompt("ingrese numero");
    var number2 = prompt("ingrese numero");
    var r = parseInt(number1 - number2);
    console.log("la respuesta " + r);
}
function divicion() {
    var number1 = prompt("ingrese numero");
    var number2 = prompt("ingrese numero");
    var r = parseInt(number1 / number2);
    console.log("la respuesta " + r);
}

function multiplicacion() {
    var number1 = prompt("ingrese numero");
    var number2 = prompt("ingrese numero");
    var r = parseInt(number1 / number2);
    console.log("la respuesta " + r);
}

var inicio = true;
do {
    var result = menu();
    switch (result) {
        case 1:
            suma();
            break;
        case 2:
            resta();
            break;
        case 3 :
            multiplicacion();
            break;
        case 4 :
            divicion();
            break;
        default:
            inicio = result;
            break;
    }
} while (inicio === true);