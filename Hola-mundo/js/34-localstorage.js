"use strict"

// Localstorage 


// Comprobar disponibilidad localstorage
if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("Localstorage no esta disponible");
}

// Guardar datos
localStorage.setItem("titulo","Curso de Symfony aechallouta");

// Recuperar elemento 
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos
var usuario = {
    nombre: "Anthony",
    email: "antho.@gmail.com",
    web:"www.anthonyeca.com"
};

localStorage.setItem("usuario",JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(userjs.web+ " - "+ userjs.nombre);

localStorage.clear();