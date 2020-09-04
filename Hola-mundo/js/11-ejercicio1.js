"use strict"

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
PLUS(el while): Si los numeros no son un numero o son menores o iguales a 0 nos vuelva a pedir un dato
*/


while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt("Ingresa el primer numero", 0));
    var numero2 = parseInt(prompt("Ingresa el segundo numero", 0));
    
}

console.log(numero1,numero2);

if (numero1 == numero2){
    alert("Numero1 y Numero2 son iguales");
}else if (numero1 > numero2){
    alert("Numero 1 es mayor que Numero2 ");
}else if (numero2 > numero1){
    alert("Numero 2 es mayor que Numero1");
}else{
    alert("Introduce numeros correctos");
}
