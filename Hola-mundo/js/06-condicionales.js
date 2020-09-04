"use stritc"

// Condicional IF
//Son unas instrucciones que nos permiten comparar algo por ej: Si A es igual a B entonces haz algo.
/*
var edad1 = 30;
var edad2 = 12;

if(edad1 > edad2){
    console.log("Edad 1 es mayor que edad 2");
}else{
    console.log("La eadad 1 es inferior");
}

/peradores relacionales
Mayor: >
 Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=


//Si pasa esto
if(){
    ejecuta esto
// sino 
}else{
    ejecuta esto
}
*/


var edad = 33;
var nombre = "David Suarez";

if(edad >= 18){
        //Es mayor de edad
        console.log(nombre+" Tiene "+edad+" años, es mayor de edad");
        if(edad <= 33){
            console.log("Todavia eres millenial");
        }else if(edad >= 70){
            console.log("Eres anciano");
        }else{
            console.log("Ya no eres millenial")
        }

}else{
    //Es menor de edad
    console.log(nombre+" Tiene "+edad+" años, es menor de edad");
}

/*
Operadores Logicos
AND(Y): &&
OR(O): ||
Negacion: !
*/

//Negacion

var year = 2019;

if(year != 2016){
    console.log("El año no es 2016, realmente es el año: "+year);
}

//AND

if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual y el año es: "+year);
}else{
    console.log("Estamos en la era post-moderna");
}

// OR

if(year == 2009 || year == 2019){
    console.log("El año acaba en 9");
}

