"use strict"

/*
Hacer un programa que nos diga si un número es par o impar.
1. Ventana que nos pida el número
2. Que pida que el número sea válido.
3. Que muestre si es par o impar
*/

var number = parseInt(prompt("Introduce tu número", 0));


while(isNaN(number)){
    number = parseInt(prompt("Introduce tu número", 0));
}

if(number%2 != 0){
    console.log("El numero: "+number+" es impar");
}else{
    console.log("El numero :"+number+" es par");
}