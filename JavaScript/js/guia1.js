//Ejercicio 1 Dar la bienvenida a un usuario

let nombre = prompt("Ingrese su nombre");
console.log("Te damos la bienvenida " + nombre);

//Ejercicio 2 Numero opuesto e inverso

let numero = parseInt(prompt("Ingrese un numero entero"));
console.log("El numero que ingresaste es " + numero);
console.log("Su opuesto es " + numero * -1);
console.log("Su inverso es " + 1 / numero);

//Ejercicio 3 Promedio

let numero1 = parseInt(prompt("Ingrese la nota 1"));
let numero2 = parseInt(prompt("Ingrese la nota 2"));
let numero3 = parseInt(prompt("Ingrese la nota 3"));
let promedio = (numero1 + numero2 + numero3) / 3;
console.log("Su promedio es " + promedio);

//Ejercicio 4 Valor del salario semanal

let valorSalarial = parseFloat(prompt("Ingrese el valor de la hora de trabajo"));
let horaTrabajo = parseFloat(prompt("Ingrese las horas trabajadas por día"));
let salarioSemanal = console.log(
  "El valor del salario semanal es de $" +
    parseFloat(
      valorSalarial * horaTrabajo * 5 + (valorSalarial * horaTrabajo) / 2
    )
);

//Ejercicio 5 Intercambiar valores

let a = prompt("Ingrese una palabra");
let b = prompt("Ingrese otra palabra");
let c = "";
console.log(a, b);
c = a;
a = b;
b = c;
console.log(a, b);

//Ejercicio 6 Calcular un sueldo de vendedor

let valorUnitario = parseFloat(prompt("Ingrese el valor unitario del producto"));
let cantArticulos = parseFloat(prompt("Ingrese la cantidad vendida"));
let sueldoFijo = 14000;
let comision = 0.16;
let sueldoMensual = console.log(
  "El sueldo del mes es $" +
    (valorUnitario * cantArticulos * comision + sueldoFijo)
);

//Ejercicio 7 Calcular valor de un terreno y metros de alambre para cercarlo (perimetro)

let ancho = parseFloat(prompt("Ingrese el ancho en metros"));
let largo = parseFloat(prompt("Ingrese el largo en metros"));
let valorMetro = parseFloat(prompt("Ingrese el valor del metro cuadrado"));
let perimetro = ancho * 2 + largo * 2;
let valorTerreno = ancho * largo * valorMetro;
let metrosAlambre = perimetro * 3;
console.log(
  "Valor del terreno: $" +
    valorTerreno +
    "." +
    " Cantidad de alambre: " +
    metrosAlambre +
    " metros."
);

//Ejercicio 8 Operaciones básicas

let num1 = parseInt(prompt("Ingrese un numero entero"));
let num2 = parseInt(prompt("Ingrese otro numero entero"));
console.log(
  "Suma= " +
    (num1 + num2) +
    "/ Resta= " +
    (num1 - num2) +
    "/ Multiplicación= " +
    num1 * num2 +
    "/ División= " +
    num1 / num2
);

//Ejercicio 9 Calcular el ángulo restante de un triángulo

let ang1 = parseInt(prompt("Ingrese los grados del ángulo 1"));
let ang2 = parseInt(prompt("Ingrese los grados del ángulo 2"));
let ang3 = 180 - ang1 - ang2;
console.log("El ángulo restante mide " + ang3 + " grados.");

//Ejercicio 10 Calcular porcentaje de inversión

let inversor1 = prompt("Ingrese el nombre del inversor ");
let monto1 = parseFloat(prompt("Ingrese el capital invertido por " + inversor1));
let inversor2 = prompt("Ingrese el nombre del inversor ");
let monto2 = parseFloat(prompt("Ingrese el capital invertido por " + inversor2));
let inversor3 = prompt("Ingrese el nombre del inversor ");
let monto3 = parseFloat(prompt("Ingrese el capital invertido por " + inversor3));
let montoTotal = monto1 + monto2 + monto3;
let porc1 = Math.round((monto1 * 100) / montoTotal);
let porc2 = Math.round((monto2 * 100) / montoTotal);
let porc3 = Math.round((monto3 * 100) / montoTotal);
console.log(
  "El monto total invertido es $" +
    montoTotal +
    ". " +
    inversor1 +
    " invirtió un " +
    porc1 +
    "%, " +
    inversor2 +
    " invirtió un " +
    porc2 +
    "% y " +
    inversor3 +
    " invirtió un " +
    porc3 +
    "%."
);
