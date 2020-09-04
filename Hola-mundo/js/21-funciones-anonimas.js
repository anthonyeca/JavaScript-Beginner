"use strict"


//fuciones anonimas
// Es una funcion q no tiene nombre y se guarda dentro de una variable, se usa en muchas librerias
// se usa para hacer call backs(una funcion que se ejcuta dentro de otra)

function sumame(numero1,numero2,sumaYmuestra,numeroPorDos){
   var sumar = numero1 + numero2;

   sumaYmuestra(sumar);
   numeroPorDos(sumar);

    return sumar;
}


//podmeos definir funciones de callback usando una flecha despues de la funcion 
// => (si lleva 1 parametro no hace falta parentesis, con 2 si hay q usarlos)
sumame(5,4,dato => {
    console.log("La suma es:"+dato);
},
function(dato){
    console.log("La suma por 2 es:"+(dato*2));
}
);