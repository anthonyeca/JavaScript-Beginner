"use strict"

//Arrays, arreglos , matrices 

var nombre = "Anthony Ant";
var nombres = ["Anthony ant","Juan Lopez","Manolo Garcia","Jose Martin",53,true];

var lenguajes = new Array("PHP","JS","Go","Java","C#");

//console.log(nombres[0]);
/*
var elemento = parseInt(prompt("Que elemento del array quieres???",0));
if(elemento >= nombres.length){
    alert("Introduce un numero menor que: "+nombres.length);
}else{
    alert("Tu usuario seleccionado es: "+nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programacion de 2018</h1>");

document.write("<ul>");

/*for(var i=0 ;i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}

lenguajes.forEach((elemento,indice)=>{
    document.write("<li>"+indice+" - "+elemento+"</li>");
});
*/

//Para recorrer un array 
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");


// Busquedas

var precios = [10,20,50,80,12]

//var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
var busqueda = precios.some(precio => precio > 10);

console.log(busqueda);