//Ejercicio 1 Saber si un número es par


numero=parseInt(prompt("Ingrese un numero entero"));
if(numero%2==0){
console.log("El número "+ numero+"  es par.");
}else{
    console.log("El número "+ numero+" es impar.");
}

//Ejercicio 2 Calcular disponibilidad de asientos en una conferencia


cantInscriptos=parseInt(prompt("Ingrese la cantidad de inscriptos"));
cantAsientos=parseInt(prompt("Ingrese la cantidad de asientos"));
if(cantInscriptos<cantAsientos){
    console.log("La cantidad de asientos es suficiente.");
}else{
    console.log("La cantidad de asientos no es suficiente. Se necesitan "+ (cantInscriptos-cantAsientos)+" asientos más.");
}

//Ejercicio 3 Calcular mayor


num1=parseInt(prompt("Ingrese un número"));
num2=parseInt(prompt("Ingrese otro número"));
if(num1<num2){
    console.log("El número "+num1+" es menor que el número "+num2);
}if(num2<num1){
    console.log("El número "+num2+" es menor que el número "+num1)

}else{
    console.log("Los números son iguales")
   }

//Ejercicio 4 Calcular mayor de 3       Falta hacer!!!


num1=parseInt(prompt("Ingrese un número"));
num2=parseInt(prompt("Ingrese otro número"));
num3=parseInt(prompt("Ingrese otro número"));
if(num1>num2&&num>num3){
    console.log();
}




//Ejercicio 5 Calcular si el usuario está en edad de jubilarse

let anios = parseInt(prompt("Ingrese su edad"));
let genero = prompt("Ingrese su género (F ó M)");
if (genero.toUpperCase() == "M") {
    if (anios >= 65) {
        console.log("Está en edad de jubilarse");
    } else {
        console.log("No está en edad de jubilarse");
    }
} else if (genero.toUpperCase() == "F") {
    if (anios >= 60) {
        console.log("Está en edad de jubilarse");
    } else {
        console.log("No está en edad de jubilarse");
    }
} else {
    console.log("Género inválido");
}

let edad1 = parseInt(prompt("¿Tu edad?"));
let genero1= prompt("¿Tu género (F ó M)?");
genero1 = genero1.toUpperCase();
if ((genero1 == "M" && edad1 >= 65) || (genero1 == "F" && edad1 >= 60)) {
    console.log("Está en edad de jubilarse");
} else {
    console.log("No está en edad de jubilarse");
}


//Ejercicio 6 Calcular el monto de aporte al sindicato

let edad  =parseInt(prompt("¿Cuál es tu edad?"));
let sueldo = parseInt(prompt("¿Cúal es tu sueldo?"));
let aporte=0;
if (sueldo<20000 && edad>30){
    aporte= (sueldo*0.007)
}else{
    aporte=((sueldo*0.007) + ((sueldo*0.007)*0.3));
}
if (sueldo>20000 && sueldo<29999 && edad>30){
    aporte= (sueldo*0.014);
}else{
    aporte= ((sueldo*0.014)+ ((sueldo*0.014)*0.3));
}
if(sueldo>30000 && sueldo<39999 && edad>30){
    aporte= (sueldo*0.021);
}else{
    aporte= ((sueldo*0.021)+ ((sueldo*0.021)*0.3));
}

if (sueldo>40000 && edad>30){
    aporte=(sueldo*0.028);
}else{
    aporte= ((sueldo*0.028)+ ((sueldo*0.028)*0.3));
}




//Ejercicio 7 Ordenar de menor a mayor

let num1= parseInt(prompt("Ingrese el primer número"));
let num2= parseInt(prompt("Ingrese el segundo número"));
let num3= parseInt(prompt("Ingrese el tercer número"));

if(num1<num2 && num1<num3){
   if(num2<num3){
    console.log(num1 + ", " + num2 + ", " + num3);
   }else{
    console.log(num1 + ", " + num3 + ", " + num2);
   }
}else if (num2<num1 && num2< num3){
  if(num1<num3){
    console.log(num2 + ", " + num1 + ", " + num3);
  }else{
    console.log(num2 + ", " + num3 + ", " + num1);
  }
}else if(num3<num1&&num3<num2){
  if(num1<num2){
    console.log(num3 + ", " + num1 + ", " + num2);
  }else{
    console.log(num3 + ", " + num2 + ", " + num1);
  }
}

//Ejercicio 8 Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe
//indicar si el mayor es divisible por el menor.

let numb1= parseInt(prompt("Ingrese el primer número"));
let numb2= parseInt(prompt("Ingrese el segundo número"));

let mayor;
let menor;

if(numb1>numb2){
    mayor=numb1;
    menor=numb2;
}if(numb2>numb1){
    mayor=numb2;
    menor=numb1;
}else{
   console.log( "los números son iguales");
}

if(mayor%menor==0){
    console.log(mayor +" es divisible por "+ menor);
}else{
    console.log(mayor +" no es divisible por "+ menor);
}



//Ejercicio 9 Realizá un programa que permita al usuario ingresar los lados a, b y c de un triángulo. La
//computadora informa si el triángulo es o no válido. En caso afirmativo, además informa si es equilátero, isósceles o escaleno

let lado1= parseFloat(prompt("Ingrese lado 1"));
let lado2= parseFloat(prompt("Ingrese lado 2"));
let lado3= parseFloat(prompt("Ingrese lado 3"));

if ((lado1+lado2+lado3) != 180){
  console.log("No es válido")
}else if ((lado1 != lado2 && lado1 != lado3)&& (lado2 !=lado3)){
  console.log("El triángulo es escaleno")
}else if (lado1==lado2 && lado2 == lado3){
  console.log("El triángulo es equilátero")
}else if((lado1==lado2 && lado1 !=lado3)|| (lado1==lado3 && lado1!=lado2)||(lado2==lado3&& lado2!=lado1)){
  console.log("El triángulo es isósceles")
}else{
  console.log("El triángulo es válido")
}




/*  SWITCH*/



//Ejercicio 10 Realizá un programa que permita al usuario ingresar un número entero entre 1 y 12. La
//computadora debe mostrar por pantalla el nombre del mes del año que representa tal número. Si se
//ingresa un número fuera de rango, debe mostrar un error.

let numeroMes=parseInt(prompt("Ingrese un el numero del mes (1 al 12)"));

		
switch (numeroMes) {
    case 1:
      console.log("Enero");
      break;
    case 2:
      console.log("Febrero");
      break;
    case 3:
      console.log("Marzo");
      break;
    case 4:
      console.log("Abril");
      break;
    case 5:
      console.log("Mayo");
      break;
    case 6:
      console.log("Junio");
      break;
    case 7:
      console.log("Julio");
      break;
    case 8:
      console.log("Agosto");
      break;
    case 9:
      console.log("Septiembre");
      break;
    case 10:
      console.log("Octubre");
      break;
    case 11:
      console.log("Noviembre");
      break;
    case 12:
      console.log("Diciembre");
      break;
    default:
      texto = "El número ingresado es incorrecto";
  }

//Ejercicio 11 Realizá un programa que permita al usuario ingresar una letra, correspondiente a un dígito del
//sistema de numeración romano. La computadora debe mostrar su correspondiente valor decimal.
//Si se ingresa una letra inexistente, la computadora debe informar que no existe tal dígito.

let digito=prompt("Ingrese un numero romano (I, V, X, L, C, D, M)");   
digito.toUpperCase();

switch (digito) {
    case "I":
      console.log(1);
      break;
    case "V":
      console.log(5);
      break;
    case "X":
      console.log(10);
      break;
    case "L":
      console.log(50);
      break;
    case "C":
      console.log(100);
      break;
    case "D":
      console.log(500);
      break;
    case "M":
      console.log(1000);
      break;
    default:
      console.log("El dígito ingresado no corresponde a un número romano");
        
}

//Ejercicio 12 Realizá un programa que permita al usuario ingresar el día y el mes de su cumpleaños (de manera
//independiente). La computadora debe indicar cuál es su signo del zodiaco. Deben validarse tanto el
//día como el mes.

let dia= parseInt(prompt("Ingrese el día de nacimiento"));

while(dia<1 || dia>31){
    let dia= parseInt(prompt("Ingrese el día de nacimiento"));
}
let mes= parseInt(prompt("Ingrese el mes de nacimiento"));

while(mes<1 || mes>12){
let mes= parseInt(prompt("Ingrese el mes de nacimiento"));
}

if ((dia>=21 && mes==3)||(dia<=20 && mes==4)){
console.log('Tu signo es Aries');
}


else if ((dia>=21&&mes==4)||(dia<=21&&mes==5)){
console.log('Tu signo es Tauro');
}

else if((dia>=22&&mes==5)||(dia<=21&&mes==6)){
console.log('Tu signo es Géminis');
}

else if ((dia>=21&&mes==6)||(dia<=23&&mes==7)){
console.log('Tu signo es Cáncer');
}

if ((dia>=24&&mes==7)||(dia<=23&&mes==8)){
console.log('Tu sino es Leo');
}

else if ((dia>=24&&mes==8)||(dia<=23&&mes==9)){
console.log('Tu signo es Virgo');
}

else if ((dia>=24&&mes==9)||(dia<=23&&mes==10)){
console.log('Tu signo es Libra');
}

else if ((dia>=24&&mes==10)||(dia<=22&&mes==11)){
console.log('Tu signo es Escorpio');
}

else if ((dia>=23&&mes==11)||(dia<=21&&mes==12)){
console.log('Tu signo es Sagitario');
}

else if ((dia>=22&&mes==12)||(dia<=20&&mes==1)){
console.log('Tu signo es Capricornio');
}

else if ((dia>=21&&mes==1)||(dia<=19&&mes==2)){
console.log('Tu signo es Acuario');
}

else if ((dia>=20&&mes==2)||(dia<=20&&mes==3)){
console.log('Tu signo es Piscis');
}
else {
    console.log("Error");
}



