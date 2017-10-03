var a = 0;
function menu(){
    var star = prompt("1. datos  personales \n\
2. datos referencia familiar\n\
3. datos referencias laborales \n\
4. descripcion de perfil profecional\n\
5. imprimir hoja de vida\n\
0. salir del programa");
    return parseInt(star);
}

function datos_personales() {
    var nombre = prompt("cuel es su nombre ");
    var apellido = prompt("cuel es suapellido ");
    var edad = prompt("cual es su edad ");
    var email = prompt("cual es su email");
    var telefono = prompt("cual es su numero ");
    var address = prompt("cual es su direccion ");
    var genero = prompt("cual es su grenero ");


datos_personales = {
    nombre,
    apellido,
    edad,
    email,
    telefono,
    address,
    genero
};
 vMenu();
 };
function datos_referencia_familiar() {
    var nombre = prompt("cuel es su nombre ");
    var apellido = prompt("cuel es suapellido ");
    var edad = prompt("cual es su edad ");
    var email = prompt("cual es su direccion telefonica ");
    var telefono = prompt("cual es su numero de telefono ");
    var address = prompt("cual es su direccion de telefono ");
    var genero = prompt("cual es su grenero ");


datos_referencia_familiar = {
    nombre,
    apellido,
    edad,
    email,
    telefono,
    address,
    genero
};

 vMenu();
};
function datos_referencias_laborales() {
    var nombre = prompt("cuel es su nombre ");
    var apellido = prompt("cuel es suapellido ");
    var edad = prompt("cual es su edad ");
    var email = prompt("cual es su direccion telefonica ");
    var telefono = prompt("cual es su numero de telefono ");
    var address = prompt("cual es su direccion de telefono ");
    var genero = prompt("cual es su grenero ");


datos_referencias_laborales = {
    nombre,
    apellido,
    edad,
    email,
    telefono,
    address,
    genero
};

 vMenu();
 };
 
function descripcion_de_perfil_profecional() {
    var nombre = prompt("cuel es su nombre ");
    var apellido = prompt("cuel es suapellido ");
    var edad = prompt("cual es su edad ");
    var email = prompt("cual es su direccion telefonica ");
    var telefono = prompt("cual es su numero de telefono ");
    var address = prompt("cual es su direccion de telefono ");
    var genero = prompt("cual es su grenero ");


descripcion_de_perfil_profecional = {
    
    nombre,
    apellido,
    edad,
    email,
    telefono,
    address,
    genero
};

 vMenu();
 };
    
function imprimir_hoja_de_vida() {
            console.log("                  datos personales                        ");
            console.log ("\n\ nombre "+ datos_personales.nombre);
            console.log ("\n\ apellido "+ datos_personales.apellido);
            console.log ("\n\ edad "+ datos_personales.edad);
            console.log ("\n\ email "+ datos_personales.email);
            console.log ("\n\ telefono "+ datos_personales.telefono);
            console.log ("\n\ address "+ datos_personales.address);
            console.log ("\n\ genero "+ datos_personales.genero);
            
            console.log("                  datos referencia familiar                        ");
            console.log ("\n\ nombre "+ datos_referencia_familiar.nombre);
            console.log ("\n\ apellido "+ datos_referencia_familiar.apellido);
            console.log ("\n\ edad "+ datos_referencia_familiar.edad);
            console.log ("\n\ email "+ datos_referencia_familiar.email);
            console.log ("\n\ telefono "+ datos_referencia_familiar.telefono);
            console.log ("\n\ address "+ datos_referencia_familiar.address);
            console.log ("\n\ genero "+ datos_referencia_familiar.genero);
            
            console.log("            datos referencias laborales                        ");
            console.log ("\n\ nombre "+ datos_referencias_laborales.nombre);
            console.log ("\n\ apellido "+ datos_referencias_laborales.apellido);
            console.log ("\n\ edad "+ datos_referencias_laborales.edad);
            console.log ("\n\ email "+ datos_referencias_laborales.email);
            console.log ("\n\ telefono "+ datos_referencias_laborales.telefono);
            console.log ("\n\ address "+ datos_referencias_laborales.address);
            console.log ("\n\ genero "+ datos_referencias_laborales.genero);
            
            console.log("                 descripcion de perfil profecional        ");
            console.log ("\n\ nombre "+ descripcion_de_perfil_profecional.nombre);
            console.log ("\n\ apellido "+ descripcion_de_perfil_profecional.apellido);
            console.log ("\n\ edad "+ descripcion_de_perfil_profecional.edad);
            console.log ("\n\ email "+ descripcion_de_perfil_profecional.email);
            console.log ("\n\ telefono "+ descripcion_de_perfil_profecional.telefono);
            console.log ("\n\ address "+ descripcion_de_perfil_profecional.address);
            console.log ("\n\ genero "+ descripcion_de_perfil_profecional.genero);
}

function salir_del_programa(){
    a = 1;
}

    function vMenu() {
    var result = menu();
    switch (result) {
        case 1:
            datos_personales();
            break;
        case 2:
            datos_referencia_familiar();
            break;
        case 3 :
            datos_referencias_laborales();
            break;
        case 4 :
            descripcion_de_perfil_profecional();
            break;
        case 5 :
            imprimir_hoja_de_vida();
        default:
            menu();
            break;
    }
    }
vMenu();
