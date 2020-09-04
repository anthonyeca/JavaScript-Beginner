"use strict"


// Operadores
//al colocar un numero sin comillas lo toma en cuenta como int(entero), si lo pongo con "" representa un strin(cadena de texto)

var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;

alert("El resultado de la operación es:" +  + operacion);

// Tipos de datos
var numero_entero = 44;
var cadena_texto = 'Hola que tal';// Las comillas dobles "" tienen mas importancia que las simples''
var verdadero_o_falso = true; //booleano es un valor verdadero o falso (1 o 0);

var numero_falso = "33";

//La funcion Number() se utiliza para convertir un string a número;
//La funcion parseInt() se utiliza para convertir en un numero entero;
//La funcion parsefloat() se utiliza para convertir en un decimal;
//La funcion string() se utiliza para convertir un numero a string;


console.log(Number(numero_falso)+7);

//typeof muestra el tipo de dato;
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
