"use stict"

//Tabla de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt("Introduce un numero:"),0);

document.write("<h1>Tabal del ",+numero+"</h1>")
for (var i = 1;i<= 10; i++){
    document.write(i+" x "+numero+" = "+(i*numero )+"</br>");
}

//Todas las tablas de multiplicar

for(var c=1; c<= 10; c++){
document.write("<h1>Tabal del ",+c+"</h1>")
    for (var i = 1;i<= 10; i++){
    document.write(i+" x "+c+" = "+(i*c) +"</br>");
    }

}