"use strict"

// BOM - Browser Object Model 
function getBom(){
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
}

//esta funcion te redirecciona a una web que especifiques
function redirect(url){
    window.location.href =url;
}
//esta funcion abre la nueva web en una ventana de este tamaño
function abrirVentana(url){
    window.open(url,"","width=400,height=300");
}

getBom();

