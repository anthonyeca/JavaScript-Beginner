$(document).ready(function(){

    // Selector de ID

    $("#rojo").css("background","red")
                         .css("color","white");
    $("#amarillo").css("background","yellow")
                                 .css("color","green");

    $("#verde").css("background","green")
    .css("color","white");

    //Selector de clases

    var mi_clase= $('.zebra').css("padding","5px");

    $('.sin_border').click(function(){
        console.log("click dado");
        $(this).addClass("zebra");
    });

    //Selector de Etiqueta
    var parrafos = $('p');

    parrafos.click(function(){
        var that = $(this);

        if(!that.hasClass('grande')){
            that.addClass('grande');
        }else{
            that.removeClass('grande');
        }
    });

    // Seletores de atributo
    $('[title="Google"]').css('background','#ccc');
    $('[title="Facebook"]').css('background','blue');

    //Otros
    //$('p,a').addClass('margen-superior');
    
    //var busqueda = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="Google"]');
    
    var busqueda =$("#elemento2").parent().parent().find('.resaltado');

    console.log(busqueda);
});