"use strict"

//Funciones
//Una funcion es una agrupacion reutilizable de un conjunto de instrucciones.

function porConsola(numero1,numero2){
    console.log("Suma: "+ (numero1 + numero2));
    console.log("Resta: "+ (numero1 - numero2));
    console.log("Multiplicacion: "+ (numero1 * numero2));
    console.log("Division: "+ (numero1 / numero2));
    console.log("*************************************");
}

function porPantalla(numero1,numero2){
    document.write("Suma: "+ (numero1 + numero2+"<br/>"));
    document.write("Resta: "+ (numero1 - numero2+"<br/>"));
    document.write("Multiplicacion: "+ (numero1 * numero2+"<br/>"));
    document.write("Division: "+ (numero1 / numero2+"<br/>"));
    document.write("*************************************");
}


//Defino la funcion
function calculadora(numero1,numero2, mostrar = false){

    //Se ejecuta estas instrucciones
    if(mostrar == false){
        porConsola(numero1,numero2); 
     }else{
        porPantalla(numero1,numero2);
    }   
    return true;

}
//Invocar o llamar a la funcion
//calculadora(12,8);
//calculadora(98,2);
calculadora(1,4);
calculadora(2,5,true);


//calculadora();

//var resultado = calculadora();

//console.log(resultado);

/*for(var i=1;i <= 10; i++){
    console.log(i);
    calculadora(i,8);
}
*/

