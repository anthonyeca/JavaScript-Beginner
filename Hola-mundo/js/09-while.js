"use strict"

//Bucle while

var year = 2019;

while(year <= 2051){
    //ejecuta esto
    console.log("Es el año: "+year);
    //Mientras que year sea menor a 2051, se ejecuta lo de arriba hasta que llegue a 2051

    year++;
}

var year = 2019;

while(year != 1991){
    //ejecuta esto
    console.log("Es el año: "+year);
    //Mientras que year sea menor a 2051, se ejecuta lo de arriba hasta que llegue a 2051
    if(year== 2000){
        // Break sirve para parar 
        break;
    }
    year--;
    
}


//Do while

var years = 30;

do{
    alert("Solo cuando sea diferente a 20");
    years--;
}while(years > 25);