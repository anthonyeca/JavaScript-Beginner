"use strict"

// DOM - Documen Object Model

/* function cambiaColor(color){
    caja.style.back = color;
}
// Conseguir elemntos con un ID especifico
//var caja = document.getElementById("micaja");

/*
# ID
. CLASS


//var caja = document.querySelector("#micaja");

caja.innerHTML = "Hola de nuevo";
caja.style.padding = "20px";
caja.style.color = "black";
caja.className = "hola";

*/
// Conseguir elementos por sus etiquetas

var todosLosDivs = document.getElementsByTagName("div");

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

//var contenidoEnTexto = todosLosDivs[2].textContent;
var valor;
for(valor in todosLosDivs){
var parrafo = document.createElement("p");
var texto = document.createTextNode(todosLosDivs[valor].textContent);
parrafo.append(texto);
seccion.append(parrafo);
}
seccion.append(hr);
//console.log(contenidoEnTexto);



// Conseguir elementos por su clase css

var divRojos = document.getElementsByClassName("rojo");
var divAmarillos = document.getElementsByClassName("amarillo");
divAmarillos[0].style.background ="yellow";

var div;
for(div in divRojos){
    if(divRojos[div].className == "rojo"){
        divRojos[div].style.background = "red";
    }
}

// Query selector (conseguir un elemento)

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);