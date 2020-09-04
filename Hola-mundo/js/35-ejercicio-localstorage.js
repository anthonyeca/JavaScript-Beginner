"use strict"

// Formulario que permita añadir peliculas


// Agregar peliculas
var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function(){

    var titulo = document.querySelector('#addpelicula').value;

    if(titulo.length >= 1){
        localStorage.setItem(titulo,titulo);
    }
});

//Añadir las peliculas a una lista
var ul= document.querySelector('#peliculas-list');
for(var i in localStorage){

    console.log(localStorage[i]);
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}


//Borrar peliculas
var formulariob = document.querySelector("#formborrapelicula");

formulariob.addEventListener('submit', function(){

    var titulo = document.querySelector('#borrapelicula').value;

    if(titulo.length >= 1){
        localStorage.removeItem(titulo);
    }
});