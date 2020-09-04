"use strict"

// Let se usa para definir variables tambien ej: let prueba ="Hola";
// Pruebas con Let y var

// Prueba con Var

var numero = 40;
console.log(numero); // valor 40

if(true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

// Prueba con Let 

var texto = "Curso JS AECHALLOUTA";
console.log(texto); // Valor ""

if(true){
    //let cambia el texto solo dentro de este bloque if
    let texto = "Cambio el texto";
    console.log(texto);
}

console.log(texto);