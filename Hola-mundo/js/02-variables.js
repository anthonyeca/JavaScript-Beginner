"use strict"

// Variables
// Una variable es un contenedor de información
// Los string siempre van entre comillas "" ej: var pais = "Polonia";


var pais = "Polonia";
var continente = "Europa";
var antiguedad = 2019;
var pais_y_continente = pais+" "+continente;

// Para cambiar una vairiable no hace falta colocar el var de antes simplemente el nobmre de la variable

pais = "Mexico";

// Si realizamos un console log, mostrara Mexico,Europa y 2019, pero en el alert enseña Polonia y Europa porque esta definido antes

console.log(pais,continente,antiguedad);
alert(pais_y_continente);