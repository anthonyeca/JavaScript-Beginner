"use strict"

var categorias = ["Accion","Comedia","Terror"];
var peliculas = ["La vida","Vidota","Daleklo"];

peliculas.sort(); //Permite ordenar alfabeticamente el array
peliculas.reverse(); //permita ordenar el array de atras para adelante

var cine = [categorias,peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);

/*
var elemento = "";

//Se usa push para agregar elementos al array

do{
    elemento = prompt("Introduce una pelicula:");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

// Se usa pop para sacar el ultimo elemento de un array

peliculas.pop();
*/

//Para eliminar un valor en un array

var indice = peliculas.indexOf("Vidota");

if (indice > -1){
    peliculas.splice(indice,1);
}

//Convertir uin array a string

var peliculas_string = peliculas.join();


//Para seprar los elementos de la cadena en un array despues de la, y el espacio 
var cadena = "Texto1 Texto2 Texto3";
var cadena_array = cadena.split(", ");

console.log(peliculas_string);