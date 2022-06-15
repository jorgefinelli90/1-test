
/*
let calificacionUno = prompt("Ingrese su primer calificacion")
let calificacionDos = prompt("Ingrese su segunda calificacion")

if(calificacionUno >=6 || calificacionDos){
    alert("Aprobado!")
}else{
    alert("Reprobado!")
}

*/
/*


let numero = parseInt(prompt("Ingrese el numero"))

for(let i=1 ; i <= 10; i++){
    let resultado = numero*i

    console.log( numero + " X " + i + " = " + resultado)

}


let numero = parseInt(prompt("Ingrese el numero"))

for(let i=1 ; i <= 10; i++){
    let resultado = numero*i

    if(i === 5) {
        break;
    }else {
        console.log(numero + " X " + i + " = " + resultado);
    }
    }


continue------------------------------------------------------- borrar

    let numero = parseInt(prompt("Ingrese el numero"))

    for(let i=1 ; i <= 10; i++){
        let resultado = numero*i
    
        if(i === 6 ) {
            continue;
        }else {
            console.log(numero + " X " + i + " = " + resultado);
        }
        }


    

        let numeroCalificaciones = parseInt(prompt("ingrese su numero de calificaciones"))

        let sumatoria = 0 
        let promedio = 0

        for(let i = 1; i<= numeroCalificaciones; i++){
            let calificacion = parseFloat(prompt("ingrese la calificacion "+ i))
            sumatoria = sumatoria + calificacion
    }

    promedio = sumatoria / numeroCalificaciones
    alert("el promedio es: " + promedio)
    
    ejemplo de entre clases ---------------------------------

    let nombre = "luis";

    for(let i = 0; i <= 40; i++){
        if(i==5){
            break
        }
        console.log(i)
    }

    ejemplo profesor---------------

    let entrada = prompt("ingrese un dato (ESC para salir)")

    while(entrada !== "ESC"){
        alert("usuario ingreso: " + entrada)
        entrada = prompt("ingresa otro dato")
    }
 ejemplo profesor---------------
   
    let entrada
    do{
        entrada = prompt("ingrese un dato (esc para salir)")
        alert("el usuario ingreso " + entrada)
    }while(entrada !== "ESC")



    ejemplo profesor---------------


    let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN CHOTA SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}




let seleccionUsuario = parseInt(
    prompt(
        "Que desea comer: \n 1.Una Hamburguesa \n 2.Un Pancho \n 3.Una Milanesa \n 4. Un Choripan"
    )
);

switch (seleccionUsuario) {
    case 1:
        alert("Usted selecciono una Hamburguesa");
        break;
    case 2:
        alert("Usted selecciono una Un Pancho");
        break;
    case 3:
        alert("Usted selecciono una Una Milanesa");
        break;
    case 4:
        alert("Usted selecciono una Un Choripan");
        break;
    default:
        break;
}
 */