/*Para mostrar salto de línea*/

function mostrarSaltoDeLinea(){
    console.log("");
}
/* Para saludar*/

function saludar(nombre){
    console.log("Hola" + nombre)
}
/*funcion random (math)*/

let y = Math.random();
console.log(y);

/*Para leer entero entre */
function leerEnteroEntre(min,max,msj){
    let entero= parseInt(prompt(msj));
    while(entero < min || entero > max){
        entero= parseInt(prompt("ERROR. " + msj ))
    }
    return entero;
}

let x = leerEnteroEntre(1,120,"Ingrese su edad (entre 1 y 120)");
console.log(x);

let numero= leerEnteroEntre(1,10,"Ingrese un numero del 1 al 10");
if (numero % 2 == 0){
    console.log("el numero es par");
}
/* Para saber si el número es Par %   */

function esPar(num){
    return num % 2 == 0;
}

/* Para saber el tipo de dato */
let v1= 10;
console.log(typeof v1);

/*Para saber el año actual*/

function anioActual(){
    return new Date().getFullYear;
}

/*Para saber la edad*/

function edad (){
    return anioActual() - this.anioNacimiento;
}

/*Para concatenar nombre*/

function nombreCompleto(){
    return this.nombre + ""+ this.apellido;
}

/*Para presentarse*/

function presentarse(){
    return console.log("Hola, soy "+ this.nombreCompleto+ " y tengo "+this.edad()+ " años. Vivo en "+this.domicilio.aCadena());
}

/*Para pasar un domcilio a cadena*/

function aCadena(){
    return "Calle "+ this.calle +" "+this.altura+", "+this.barrio;
}

/* Switch dia de la semana*/
dia=parseInt(prompt("Ingrese un numero del 1 al 7: "));
		
switch (new Date().getDay()) {
    case 0:
      dia = "Domingo";
      break;
    case 1:
      dia = "Lunes";
      break;
    case 2:
       dia = "Martes";
      break;
    case 3:
      dia = "Miércoles";
      break;
    case 4:
      dia = "Jueves";
      break;
    case 5:
      dia = "Viernes";
      break;
    case 6:
      dia = "Sábado";
      default:
      text = "El número ingresado es incorrecto";
  }

