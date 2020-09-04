$(document).ready(function(){

    var caja = $("#caja");

    $("#mostrar").hide();

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        caja.fadeIn('slow');
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        caja.fadeOut('slow');
    });

    $("#todoenuno").click(function(){
        caja.fadeToggle("fast");
    })

    $("#animame").click(function(){
        caja.animate({marginLeft:"500px",
                    fontSize:"40px",
                    height:"60px"
                    },"fast")
            .animate({
                borderRadius: "900px",
                marginTop: "80px"
            },"slow")
            .animate({
                borderRadius: "0px",
                marginLeft: "0px"
            },"slow")
            .animate({
                borderRadius: "900px",
                marginTop: "0px"
            },"slow")
            .animate({marginLeft:"500px",
                    fontSize:"40px",
                    height:"60px"
                    },"fast");
    });
    
});