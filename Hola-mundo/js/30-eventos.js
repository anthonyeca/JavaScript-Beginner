"use strict"

// Eventos del mouse 

//var boton = document.querySelector("#boton");

window.addEventListener("load",function(){
   
        function cambiarColor(){
            console.log("me has dado click");
        
            var bg = boton.style.background;
        
            if(bg == "green"){
                boton.style.background ="red";
            }else{
                boton.style.background ="green";
            }
            
            boton.style.padding = "10px";
            boton.style.border = "1px solid #ccc";
            return true;
        }
        
        var boton = document.querySelector("#boton");
        
        // CLICK 
        boton.addEventListener('click', function(){
            console.log(this);
            cambiarColor();
            this.style.border = "10px solid black";
        });
        
        // Mouse Over
        boton.addEventListener('mouseover', function(){
            boton.style.background = "#ccc";
        });
        
        //Mouseout
        boton.addEventListener('mouseout', function(){
            boton.style.background = "#000";
        });
        
        // Focus 
        var input = document.querySelector("#campo_nombre")
        input.addEventListener('focus', function(){
            console.log("[focus] estas dentro del input");
        });
        // Blur
        input.addEventListener('blur', function(){
            console.log("[blur] estas fuera del input");
        });
        // Keydown
        input.addEventListener('keydown', function(event){
            console.log("[keydown] estas pulsando una tecla", String.fromCharCode(event.keyCode));
        });
        // Keypress
        input.addEventListener('keypress', function(event){
            console.log("[keypress] tecla presionada", String.fromCharCode(event.keyCode));
        });
        // Keyup
        input.addEventListener('keyup', function(event){
            console.log("[keyup] tecla levantada", String.fromCharCode(event.keyCode));
        });
        
});