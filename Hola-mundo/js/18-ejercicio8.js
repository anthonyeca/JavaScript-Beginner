"use strict"

/*
Una calculadora
-Pida 2 numeros.
-Si ponemos mal un numero nos lo vuelve a pedir.
-Muestra en el body de la pagina , en alerta y por consola el resultado de sumar,restar,mult y dividir.
*/

var numero1 = parseInt(prompt("Intoduce el primer numero",0));
var numero2 = parseInt(prompt("Intoduce el segundo numero",0));


while(numero1 <0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Intoduce el primer numero",0));
    numero2 = parseInt(prompt("Intoduce el segundo numero",0));
}

/*
while(isNaN(numero1)){
    numero1 = parseInt(prompt("Introduce tu primer numero", 0));
}
while(isNaN(numero2)){
    numero2 = parseInt(prompt("Introduce tu segundo numero", 0));
}


alert("La suma de los dos numeros es: "+(numero1+numero2));
alert("La resta de los dos numeros es: "+ (numero1-numero2));
alert("La multiplicacion de los 2 numeros es: "+ (numero1*numero2));
alert("La division de los dos numeros es: "+ (numero1 % numero2));


document.write("La suma de los dos numeros es: "+(numero1+numero2)+"</br>");
document.write("La resta de los dos numeros es: "+ (numero1-numero2)+"</br>");
document.write("La multiplicacion de los 2 numeros es: "+ (numero1*numero2)+"</br>");
document.write("La division de los dos numeros es: "+ (numero1 % numero2)+"</br>");


console.log("La suma de los dos numeros es: "+(numero1+numero2));
console.log("La resta de los dos numeros es: "+ (numero1-numero2));
console.log("La multiplicacion de los 2 numeros es: "+ (numero1*numero2));
console.log("La division de los dos numeros es: "+ (numero1 % numero2));
*/

var resultado = "La suma es: "+ (numero1 + numero2)+ "<br/>"+
                "La resta es: "+ (numero1 - numero2)+ "<br/>"+
                "La multiplicaicon es: "+ (numero1 * numero2)+ "<br/>"+
                "La division es: "+ (numero1%numero2)+ "<br/>";

var resultadoCMD = "La suma es: "+ (numero1 + numero2)+ "\n"+
                "La resta es: "+ (numero1 - numero2)+ "\n"+
                "La multiplicaicon es: "+ (numero1 * numero2)+ "\n"+
                "La division es: "+ (numero1%numero2)+ "\n";


document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);