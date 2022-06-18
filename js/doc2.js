/* 
let entrada = prompt("Ingresar un nombre:");

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
           alert("¿HOLA, QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
   
}

alert(entrada)

 

function solicitarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre")
    alert("El nombre ingresado es " + nombreIngresado)
} 
solicitarNombre();
solicitarNombre();
solicitarNombre();



//Declaración de variable para guardar el resultado de la suma
let resultado = 0;
//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}
//Función que muestra resultado por consola
function mostrar(mensaje) {
    console.log(mensaje)
}
//Llamamos primero a sumar y luego a mostrar
sumar(6, 3);            
mostrar(resultado); 
    
BUEN EJEMPLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO


   function saludar(){
    let nombre = prompt("cual es tu nombre?")
    alert("que haces maquinola, o mejor dicho: " + nombre)
   }

   saludar()
   
   
   

   function loQueQuieroHacer(loQueVoyAusarDeEjemplo1, loQueVoyAusarDeEjemplo2){
   let suma = loQueVoyAusarDeEjemplo1 + loQueVoyAusarDeEjemplo2
   alert("la suma es: " + suma)
   }
   let numUno = parseFloat(prompt("ingrese el primer numero"))
   let numDos = parseFloat(prompt("ingrese el segundo numero"))

   loQueQuieroHacer(numUno,numDos) 

   function multiplicarNum (x , y){
    let multiplicacion = x * y
   alert("la multiplicacion es " + multiplicacion)
   }

   let numUno = parseFloat(prompt("ingrese el primer numero"))
   let numDos = parseFloat(prompt("ingrese el segundo numero"))

   multiplicarNum(numUno,numDos)





   function sumarCalificaciones(caliUno , caliDos, caliTres){
    let sumatoria = caliUno + caliDos + caliTres

    alert("la suma de las calificaciones es: " + sumatoria)
   }
   let califUno = parseFloat(prompt("ingrese primer calificacion"))
   let califDos = parseFloat(prompt("ingrese segunda calificacion"))
   let califTres = parseFloat(prompt("ingrese tercer calificacion"))

   sumarCalificaciones (califUno, califDos, califTres)
  


const suma  = (a, b) => { return a + b }
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b, c) => ( a - b )*c;
console.log( suma(15,20) )
console.log( resta(20,5,4) )



const suma  = (a,b) => a + b
const resta = (a,b) => a - b
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21
let precioProducto  = 500
let descuento = 50 
//Calculo el precioProducto + IVA - descuento  (nuevo prrecio es una nueva var)
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
console.log(nuevoPrecio)

*/

let nombre = prompt("ingrese su nombre")

function saludar(){
    let nombre = "jorge"
    alert("hola "+nombre)
}

alert(nombre)
saludar()

















