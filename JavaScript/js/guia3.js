/*1) Realizá un programa que muestre todos los números enteros del 1 al 100, y luego, los mismos
números, pero en orden inverso. */

console.log("*Números del 1 al 100*")
for (let cont = 1; cont <= 100; cont++) {
    console.log(cont);
    
}
console.log("*Números del 100 al 1*")

for (let cont = 100; cont>=1; cont--){
    console.log(cont);
}



/*2) Realizá un programa que permita al usuario ingresar dos números enteros num1 y num2, donde el
primero siempre deberá ser menor o igual al segundo. La computadora debe mostrar la secuencia
de números existentes entre ambos:

A) Incluyéndolos;
B) Excluyéndolos.*/
console.log("*Mostrar conjunto de números incluyendo el 1° y el último*")
let num1=parseInt(prompt("Ingrese un número entero"));
let num2=parseInt(prompt("Ingrese un número entero mayor al anterior"));
while(num2<num1){
    num2=parseInt(prompt("Error.Ingrese un número mayor o igual al ingresado anteriormente")); 
}

for (let cont=num1; cont<=num2; cont ++ ){
    console.log(cont);
}
console.log("*Mostrar conjunto de números excluyendo el 1° y el último*")
for (let cont=(num1+1); cont<num2; cont ++ ){
    console.log(cont);
}



/*3) Realizá un programa que permita al usuario ingresar un número entero n entre 1 y 10. La
computadora debe mostrar la tabla de multiplicar de n. */

console.log("Tabla de mutiplicar del 0 al 10")
let numero=parseInt(prompt("Ingrese un número entero del 1 al 10"));
console.log(numero)
for (let i=0; i<=10; i++) {
console.log(numero*i);

}



/*4) Realizá un programa que permita al usuario ingresar un número natural n. La computadora debe
mostrar los primeros n múltiplos de 3 excepto aquellos que sean a la vez múltiplos de 5.*/

    /*let natural=parseInt(prompt("Ingrese un número natural (del 1 al 9"));
No entendi la consigna


/*5) Realizá un programa que permita al usuario ingresar 5 edades. La computadora debe indicar
cuántas edades fueron valores impares mayores que 18.*/
console.log("*Edades mayores a 18 e impares*")

let edad;
let contador=0;
let veces=5;

for (let i=0; i<veces; i++){
    let edad=parseInt(prompt("Ingrese la edad")); 
    if (edad>18 && (edad%2 != 0)){
        contador++;
        console.log(edad);
    }
    
}
console.log("La cantidad de edades mayores a 18 e impares es "+ contador)



/*6) Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que
permita ingresar cant números reales, correspondientes a las ventas realizadas por cierto
vendedor. La computadora debe mostrar el total de las ventas. */
console.log("*Total de ventas*")
let cant=parseInt(prompt("Ingrese la cantidad"));
let ventas;
let suma=0;

for (let i = 0; i < cant; i++) {
    ventas=parseFloat(prompt("Ingrese el precio"));
    suma= suma + ventas;
}

console.log("El total de las ventas es $" + Math.round(suma));
