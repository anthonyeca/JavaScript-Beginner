"use strict"

// Transformacion de textos

var numero = 444;
var texto1 = "Curso Javascript";
var texto2 = "buen curso";

var dato = numero.toString();
    dato = texto1.toLowerCase;
    dato = texto2.toUpperCase;

//console.log(dato);

//Calcular longitud
var nombre = "Anthony";
console.log(nombre.length);

//Concatenar = Unir Textos

//var textoTotal = texto1 + texto2;

var textoTotal = texto1.concat(" "+ texto2);

console.log(textoTotal);

//BUSQUEDA

"use strict"

var texto1 = "Curso Javascript";
var texto2 = "buen curso";

var busqueda = texto2.indexOf("curso");


var busqueda = texto1.match("curso");
var busqueda = texto1.match(/curso/g);
var busqueda = texto1.charAt(5);
var busqueda = texto1.substr(5,5);
var busqueda = texto1.startsWith("Cur");
var busqueda = texto1.endsWith("javascript");
var busqueda = texto1.includes("Javascript");


//para reemplazar

var busqueda = texto2.replace("curso","pollo");

//para cortar el string desde el caracterasignado

var busqueda = texto2.slice(3);
console.log(busqueda);

//recortar palabras y meterlos en un array

var busqueda = texto2.split(" ");

//quitar los espacios delante y finales en un string

var busqueda = texto2.trim();

