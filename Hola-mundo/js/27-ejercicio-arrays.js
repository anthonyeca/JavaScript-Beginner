"use strict"

/* Un programa 
1. Pide 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elemntos), en el cuerpo de la pagina y la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array"+textoCustom+"</h1>");
    document.write("<ul>")
    numeros.forEach((elemento, index) => {
        document.write("<strong>"+elemento+"</strong></br>");
    });
    document.write("</ul>")
}

// 1
//var numeros = new Array(6);
var numeros =[];

for (var i = 0;i <= 5;i++){
    //numeros[i] = parseInt(prompt("Ingrasa un numero", 0));
    numeros.push(parseInt(prompt("Ingrasa un numero", 0)));
}

// 2
console.log(numeros);

mostrarArray(numeros);


// 3

numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, " ordenado");

// 4

numeros.reverse();
mostrarArray(numeros, " revertidos");

// 5

document.write("<h1>El array tiene</h1>"+numeros.length+" elementos");

// 6 
var busqueda = parseInt(prompt("Busca un numero",0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){

    document.write("<h1>ENCONTRADO</h1>");
    document.write("<h1>Posicion de la busqueda: "+posicion+"</h1>");
}else{
    document.write("<h1>No Encontrado</h1>");
}